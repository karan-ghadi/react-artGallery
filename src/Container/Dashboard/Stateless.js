import React from 'react'
import DashboardSummaryCards from '../../Components/Cards/DashboardSummaryCards';
import TextCards from '../../Components/Cards/TextCards';
import Tables from '../../Components/Tables/tables';
import ImageCards from '../../Components/Cards/ImageCards';

const Stateless = (props) => {
	return (
		<div>
			<DashboardSummaryCards
				summary={props.summary}
			/>
			<Tables
				info={props.info}
				columns={props.columns}
			/>
			<div className="mt-5">
				<TextCards
					cardsInfo={props.nodesSummary}
					title="Nodes"
				/>
				<TextCards
					cardsInfo={props.networkSummary}
					title="Network"
				/>
			</div>
			<div className="mt-5">
				<ImageCards
					cardsInfo={props.imageCardInfo}
					title="My Applications"
				/>
				<ImageCards
					cardsInfo={props.imageCardInfo}
					title="My Servers"
				/>
			</div>
		</div>
	)
 }

export default Stateless;