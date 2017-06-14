/* eslint-disable react/jsx-filename-extension */

import React from 'react';

import TopBar from '../TopBar';

import {Link} from 'react-router-dom';

import {observer, inject, PropTypes} from 'mobx-react';



const Matches = ({store}) => {

  const {
    findMatch
  } = store;

  findMatch();

  return (
    <div>
      <TopBar />
      <li><Link to='/Matches/Friends'>Friends</Link></li>
      <li><Link to='/Matches/Strangers'>Strangers</Link></li>
    </div>
  );
};

Matches.propTypes = {
  store: PropTypes.observableObject.isRequired,
};

export default inject(`store`)(
  observer(Matches)
);
