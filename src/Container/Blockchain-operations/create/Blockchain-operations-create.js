import React, { Component } from 'react';
import Stateless from './Stateless';

class BlockchainOperations extends Component {
	state = {
		createBForm: {
      selectNode: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'option 1', displayValue: 'option 1' },
            { value: 'option 2', displayValue: 'option 2' }
          ]
        },
        value: ''
      }
    },
		columns:['server ip', 'server username', 'availabilty status', 'status', 'status', 'status'],
    tableData: [
      { 'server_ip': 'Test-1', 'server_username': 'Test-1', 'availabilty_status': 'Test-1' },
      { 'server_ip': 'Test-2', 'server_username': 'Test-2', 'availabilty_status': 'Test-2' }
    ]
	}

	inputChangedhandler(event, ele) {
		const updatednetworkForm = {
			...this.state.networkForm
		};
		const updatedFormEle = {
			...updatednetworkForm[ele]
		}
		updatedFormEle.value = event.target.value;
		updatednetworkForm[ele] = updatedFormEle;
		this.setState({
			createBForm: updatednetworkForm
		})
	};
	render() {
		return (
			<Stateless
				info={this.state.tableData}
				columns={this.state.columns}
				formElements={this.state.createBForm}
				changed={(e, ele)=>this.inputChangedhandler(e, ele)}
			/>
		 );
	}
}

export default BlockchainOperations;