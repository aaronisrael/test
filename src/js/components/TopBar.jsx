import React from 'react';

import {observer, inject, PropTypes} from 'mobx-react';

import {shape, func} from 'prop-types';

import {withRouter} from 'react-router';

import {Link} from 'react-router-dom';

const TopBar = ({store, history}) => {

  const {getFBData
  } = store;

  const handleProfile = () => {
    getFBData();
    history.push(`/Profile`);
  };

  const handleMatches = () => {
    getFBData();
    history.push(`/Matches/Friends`);
  };

  return (
    <nav>
      <ul>
        <li><Link to='/ListView'>Feed</Link></li>
        <li onClick={handleMatches}>Matcher</li>
        <li onClick={handleProfile}>Profile</li>
      </ul>
    </nav>
  );
};

TopBar.propTypes = {
  store: PropTypes.observableObject.isRequired,
  history: shape({
    push: func.isRequired,
  }).isRequired,
};

export default inject(`store`)(
  withRouter(observer(TopBar))
);
