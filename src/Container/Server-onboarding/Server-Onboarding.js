import React, { Component } from 'react';
import Stateless from './Stateless';

class ServerOnboarding extends Component {
  state = {
    serverForm: {
      serverIp: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'enter server ip'
        },
        value: '',
        touched:false,
        validation: {
          required: true,
          errMsg:'field can\'t be left blank'
        },
        valid:false
      },
      serverUsername: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'enter server username'
        },
        value: '',
        touched:false,
        validation: {
          required: true,
          errMsg:'field can\'t be left blank'
        },
        valid:false
      },
      serverPassword: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'enter server password'
        },
        value: '',
        touched:false,
        validation: {
          required: true,
          minLength: 5,
          errMsg:'field can\'t be left blank and should be more than 5 characters'
        },
        valid:false
			},
    },
    formIsValid: false,
    disableSubmit:false,
    columns: ['server ip', 'server username', 'availabilty status', 'status'],
    tableData: [
      { server_ip: 'Test-1', server_username: 'Test-1', availabilty_status: 'Test-1' },
      { server_ip: 'Test-2', server_username: 'Test-2', availabilty_status: 'Test-2' }
    ]
	};
  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    // console.log(errMsg);
    return (isValid);
   }
	inputChangedhandler(event, ele){
		const updatedserverForm = {
			...this.state.serverForm
		};
		const updatedFormEle = {
			...updatedserverForm[ele]
		}
    updatedFormEle.touched = true;
    updatedFormEle.value = event.target.value;
    updatedFormEle.valid = this.checkValidity(updatedFormEle.value, updatedFormEle.validation);
    updatedserverForm[ele] = updatedFormEle;
    let formIsValid = true;
    for (let ele in updatedserverForm) {
      formIsValid = updatedserverForm[ele].valid && formIsValid
    }
		this.setState({
      serverForm: updatedserverForm,
      formIsValid: formIsValid
		})
	};

  onTestConnectionHandler() {
    console.log('Test Connection');
    let enableSubmit = true;
    this.setState({
      disableSubmit:enableSubmit
		})
  }

  render() {
    return (
      <div>
				<Stateless
          info={this.state.tableData}
          columns={this.state.columns}
          formElements={this.state.serverForm}
          changed={(e, ele) => this.inputChangedhandler(e, ele)}
          testDisabled={!this.state.formIsValid}
          submitDisabled={!this.state.disableSubmit}
          testConnection={() => this.onTestConnectionHandler()}
        />
      </div>
    );
  }
}

export default ServerOnboarding;
