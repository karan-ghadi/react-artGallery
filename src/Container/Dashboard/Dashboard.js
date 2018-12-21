import React, { Component } from 'react';
import Stateless from './Stateless';


class Dashboard extends Component {
	state = {
		columns:['server ip', 'server username', 'availabilty status', 'status', 'status', 'status'],
    tableData: [
      { 'server_ip': 'Test-1', 'server_username': 'Test-1', 'availabilty_status': 'Test-1' },
      { 'server_ip': 'Test-2', 'server_username': 'Test-2', 'availabilty_status': 'Test-2' }
    ],
    summary: [
      { count: 999, title: 'Total Entries' },
      { count: 156, title: 'Total Queries' },
      { count: 200, title: 'Connected Nodes' },
      { count: 46, title: 'Block Gen. Rate' }
		],
		nodesSummary: [
			{ developmentserver:'192.168.65.321', val:'validate', status:'online' },
			{ developmentserver:'192.168.66.322', val:'validate', status:'online' },
			{ developmentserver:'192.168.65.323', val:'validate', status:'online' },
			{ developmentserver:'192.168.65.324', val:'validate', status:'offline' }
		],
		networkSummary: [
			{ developmentserver:'192.169.65.321', val:'validate', status:'online' },
			{ developmentserver:'192.169.66.322', val:'validate', status:'online' },
			{ developmentserver:'192.169.65.323', val:'validate', status:'online' },
			{ developmentserver:'192.169.65.324', val:'validate', status:'offline' }
		],
		imageCardInfo: [
			{ serverName: 'My server', infoText: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod temr incididunt ut labore et dolore.' },
			{ serverName: 'My server 1', infoText: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod temr incididunt ut labore et dolore.' },
			{ serverName: 'My server 2', infoText: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod temr incididunt ut labore et dolore.' },
			{ serverName:'My server 3', infoText:'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod temr incididunt ut labore et dolore.'}
		]
	}
	render() {
		return (
			<Stateless
				summary={this.state.summary}
				info={this.state.tableData}
				columns={this.state.columns}
				nodesSummary={this.state.nodesSummary}
				networkSummary={this.state.networkSummary}
				imageCardInfo={this.state.imageCardInfo}
			/>
		 );
	}
}
export default Dashboard;