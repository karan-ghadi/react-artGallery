import React from 'react';
import appImage from './../../assets/images/app-image.jpg';
import AppIcon from './../../assets/images/icons/app-icon.png';

const ImageCards = props => {
  let cardsTitle = null;
  let cards = null;
  let cardsConatiner = null;

	// sets card's title
  cardsTitle = (
    <h6>
      <img src={AppIcon} className="img-fluid" alt="" />
      {props.title}
    </h6>
  );

  // loops data into cards
  cards = props.cardsInfo.map((data, index) => {
    return (
      <div key={index} className="cards cards--app">
        <div className="app-img">
          <img src={appImage} className="img-fluid" alt="" />
        </div>
        <div className="app-info">
          <h5>{data.serverName}</h5>
          <p>{data.infoText}</p>
        </div>
      </div>
    );
	});

  // holds cards in it
  cardsConatiner = (
    <div>
      <div className="content-box">
        <div className="d-flex">
          <div className="content-title">{cardsTitle}</div>
        </div>
      </div>
      <div className="card-container">{cards}</div>
    </div>
  )
  return cardsConatiner;
};

export default ImageCards;
