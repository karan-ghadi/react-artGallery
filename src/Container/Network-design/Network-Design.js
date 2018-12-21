import React, {Component} from 'react';
import Stateless from './Stateless';

class NetworkDesign extends Component {
	state = {
		networkForm: {
      networkName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'enter server ip'
        },
        value: ''
			},
			selectServer: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'option 1', displayValue: 'option 1' },
            { value: 'option 2', displayValue: 'option 2' }
          ]
        },
        value: ''
      },
      serverPassword: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'enter server password'
        },
        value: ''
			}
    },
		columns:['Network Name', 'Server List', 'Availability Status', 'Action'],
    tableData: [
      { 'server_ip': 'Test-1', 'server_username': 'Test-1, Test-2, Test 3', 'availabilty_status': 'Test-1' },
      { 'server_ip': 'Test-2', 'server_username': 'Test-2, Test-2, Test 3', 'availabilty_status': 'Test-2' }
    ]
	}

	inputChangedhandler(event, ele){
		const updatednetworkForm = {
			...this.state.networkForm
		};
		const updatedFormEle = {
			...updatednetworkForm[ele]
		}
		updatedFormEle.value = event.target.value;
		updatednetworkForm[ele] = updatedFormEle;
		this.setState({
			networkForm: updatednetworkForm
		})
	};
	render() {
		return (
			<Stateless
				info={this.state.tableData}
				columns={this.state.columns}
				networkSummary={this.state.networkSummary}
				formElements={this.state.networkForm}
				changed={(e, ele)=>this.inputChangedhandler(e, ele)}
			/>
		 );
	}
}

export default NetworkDesign;
