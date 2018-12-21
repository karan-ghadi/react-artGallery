import React, { Component } from 'react';
import Stateless from './Stateless';

class Organisations extends Component {
  state = {
    channelForm: {
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
	};
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
			channelForm: updatednetworkForm
		})
	};
  render() {
    return (
      <Stateless
        formElements={this.state.channelForm}
        changed={(e, ele) => this.inputChangedhandler(e, ele)}
      />
    );
  }
}

export default Organisations;
