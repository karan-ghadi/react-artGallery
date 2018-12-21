import React from 'react';
import summaryImage from './../../assets/images/icons/summary.png';

const DashboardSummaryCards = props => {
	let cards = null;
	let cardContainer = null;
  cards = props.summary.map((data, index) => {
    return (
      <div className="cards card--stats" key={index}>
        <div className="contents">
          <h2>{data.count}</h2>
          <h6>{data.title}</h6>
        </div>
      </div>
    );
  });

  cardContainer = (
    <div className="card-container card-container--dashboard">
      <div className="cards card--summary">
        <div className="contents">
          <h4>Dashboard</h4>
          <h6>
            <img src={summaryImage} alt="" />
            Summary
          </h6>
        </div>
      </div>
      {cards}
    </div>
	);

  return cardContainer;
};
export default DashboardSummaryCards;
