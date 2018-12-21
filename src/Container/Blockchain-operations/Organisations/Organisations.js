import React, { Component } from 'react';
import Stateless from './Stateless';

class Organisations extends Component {
	state = {
		ordererForm: {
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
		organisationForm: {
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
    }
	}
	inputChangedhandlerOrder(event, ele){
		const updatednetworkForm = {
			...this.state.networkForm
		};
		const updatedFormEle = {
			...updatednetworkForm[ele]
		}
		updatedFormEle.value = event.target.value;
		updatednetworkForm[ele] = updatedFormEle;
		this.setState({
			ordererForm: updatednetworkForm
		})
		this.setState({
			organisationForm: updatednetworkForm
		})
	};
	render() {
		return (
			<Stateless
				formElementsOrderer={this.state.ordererForm}
				formElementsOrganisation={this.state.organisationForm}
				changedOrder={(e, ele)=>this.inputChangedhandlerOrder(e, ele)}
				changedOrganisation={(e, ele)=>this.inputChangedhandlerOrder(e, ele)}
			/>
		 );
	}
}

export default Organisations;