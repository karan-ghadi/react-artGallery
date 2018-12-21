import React from 'react';
import NodeImage from './../../assets/images/icons/node-icon.png';
import Tables from '../../Components/Tables/tables';
import Buttons from '../../Components/Buttons/Buttons';
import InputField from '../../Components/Input/inputField';

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
        <h4>Netowrk Design</h4>
      </div>
      <div className="form-box">
        <div className="title">
          <h6>
            <img src={NodeImage} className="img-fluid" alt="" />
            Add Network
          </h6>
          <div className="wrapper">
            <form className="form" name="serverOnboardingForm" onSubmit={props.handleSubmit}>
              <div className="row">
                {formElementsArray.map(ele => {
                  return (
                    <div className="form-group col-lg-4" key={ele.id}>
                      <InputField
                        elementType={ele.config.elementType}
                        elementConfig={ele.config.elementConfig}
                        value={ele.config.value}
                        changeHandler={event => props.changed(event, ele.id)}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="row">
                <div className="form-group col-md-6 col-lg-3 col-xl-2">
                  <Buttons type="submit" text="Submit" iconType="default" icon="check" />
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
