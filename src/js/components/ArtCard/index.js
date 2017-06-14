/* eslint-disable react/jsx-filename-extension */

import React from 'react';

import {string, number} from 'prop-types';

import {observer, inject, PropTypes} from 'mobx-react';


const ArtCard = ({name, photo, idkey, store}) => {

  const {
    update
  } = store;

  const handleLike = () => {
    update(true, idkey);
  };

  const handleDislike = () => {
    update(false, idkey);
  };

  return (

    <div>
      <li className='tweet'>
        {name}
        <img src={`../../../assets/img/art/${photo}/100.jpg`} alt='test' />
        <button type='button' onClick={handleLike}>Like</button>
        <button type='button' onClick={handleDislike}>Dislike</button>
      </li>
    </div>
  );

};

ArtCard.propTypes = {
  name: string.isRequired,
  photo: string.isRequired,
  idkey: number.isRequired,
  store: PropTypes.observableObject.isRequired
};


export default inject(`store`)(
  observer(ArtCard)
);
