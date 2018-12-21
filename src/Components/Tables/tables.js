import React from 'react';
import Titles from '../Titles/Titles';
import Buttons from '../Buttons/Buttons';

const Tables = (props) => {
	let columnNames = null;
	columnNames = props.columns.map((column, index) => {
		return (
				<th key={index}>{column}</th>
		)
	})

	let tableInfo = null;
	tableInfo = props.info.map(data => {
		return (
			<tr key={data.server_ip}>
				<td>{data.server_ip}</td>
				<td>{data.server_username}</td>
				<td>{data.availabilty_status}</td>
				<td>
					<Buttons text="remove" iconType="delete" />
				</td>
			</tr>
		);
	});

	return (
		<div className="table-box">
			<Titles title="Deployed Networks" />
			<div className="table-responsive mt-3">
				<table className="table">
					<thead className="thead">
						<tr>
							{columnNames}
						</tr>
					</thead>
					<tbody>
						{tableInfo}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Tables;