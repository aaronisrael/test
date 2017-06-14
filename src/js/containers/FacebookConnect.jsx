import React from 'react';
import DevTools from 'mobx-react-devtools';

import {observer, inject, PropTypes} from 'mobx-react';

import {shape, func} from 'prop-types';

import {withRouter} from 'react-router';

import FacebookLogin from '../lib/facebookLogin';


const FacebookConnect = ({store, history}) => {

  const {
    login
  } = store;

  const responseFacebook = response => {
    login(response.userID, response.accessToken);
    history.push(`/ListView`);
  };

  return (
    <section>

      {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

      <section>
        <FacebookLogin
            autoLoad
            appId='711579455681352'
            callback={responseFacebook}
        />
      </section>
    </section>
  );
};

FacebookConnect.propTypes = {
  store: PropTypes.observableObject.isRequired,
  history: shape({
    push: func.isRequired,
  }).isRequired,
};

export default inject(`store`)(
  withRouter(observer(FacebookConnect))
);
