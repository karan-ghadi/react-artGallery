import React from 'react';
import NodeIcon from '../../assets/images/icons/node-icon.png';
import ValidateIcon from '../../assets/images/icons/validate-icon.png';
import OnlineIcon from '../../assets/images/icons/online-icon.png';
import offlineIcon from '../../assets/images/icons/offline-icon.png';

const TextCards = (props) => {
	let cards = null;
	let status = null;
	let statusICon = null;
	cards = props.cardsInfo.map((data, index) => {
		if (data.status === 'online') {
			status = 'text-green';
			statusICon = OnlineIcon;
		}
		if (data.status === 'offline') {
			status = 'text-red';
			statusICon = offlineIcon;

		}
		return (
			<div key={index} className="cards">
				<h5>Development server</h5>
				<h5>{data.developmentserver}</h5>
				<ul>
					<li className="text-green">
						<img src={ValidateIcon} className="img-fluid" alt="ValidateIcon" />
						<span>{data.val}</span>
					</li>
					<li className={status}>
						<img src={statusICon} className="img-fluid" alt="OnlineIcon" />
						<span>{data.status}</span>
					</li>
				</ul>
			</div>
		)
	})
	return (
		<div>
			<div className="content-box">
				<div className="d-flex">
					<div className="content-title">
						<h6>
							<img src={NodeIcon} className="img-fluid" alt='NodeIcon' />
							{props.title}
						</h6>
					</div>
					<div className="ml-auto content-stats">
						<ul>
							<li>
								Total Entries: <span>45</span>
							</li>
							<li>
								Connected Nodes: <span>45</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="card-container">
				{cards}
			</div>
		</div>
	)
}

export default TextCards;