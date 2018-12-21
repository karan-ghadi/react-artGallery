import React from 'react';
import NodeImage from './../../assets/images/icons/node-icon.png';
import Tables from '../../Components/Tables/tables';
import InputField from '../../Components/Input/inputField';
import Buttons from '../../Components/Buttons/Buttons';

const Stateless = props => {
	const formElementsArray = [];

  for (let key in props.formElements) {
    formElementsArray.push({
      id: key,
      config: props.formElements[key]
    });
  }

  return (
    <div className="components">
      <div className="component-head">
        <h4>Server Onboarding</h4>
      </div>
      <div className="form-box">
        <div className="title">
          <h6>
            <img src={NodeImage} className="img-fluid" alt="" />
            Add Server
          </h6>
          <div className="wrapper">
            <form className="form" name="serverOnboardingForm">
              <div className="row">
                {formElementsArray.map(ele => {
                  return (
                    <div className="form-group col-lg-4" key={ele.id}>
                      <InputField
                        elementType={ele.config.elementType}
                        elementConfig={ele.config.elementConfig}
                        touched={ele.config.touched}
                        value={ele.config.value}
                        shouldValidate={ele.config.validation}
                        inValid={!ele.config.valid}
                        changeHandler={event => props.changed(event, ele.id)}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="row">
                <div className="form-group col-md-6 col-lg-4 col-xl-3">
                  <Buttons
										type="button"
										disabled={props.testDisabled}
										text="Test Connection"
										iconType="default"
										icon="check"
										onclick={props.testConnection}
                  />
                </div>
                <div className="form-group col-md-6 col-lg-3 col-xl-2">
                  <Buttons type="button" text="Submit" iconType="default" icon="check" disabled={props.submitDisabled} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="table-box">
        <Tables info={props.info} columns={props.columns} />
      </div>
    </div>
  );
};

export default Stateless;
