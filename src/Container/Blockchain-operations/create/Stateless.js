import React from 'react';
import Buttons from '../../../Components/Buttons/Buttons';
import Tables from '../../../Components/Tables/tables';
import InputField from '../../../Components/Input/inputField';

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
      <div className="form-box">
        <div className="wrapper text-center mb-5">
          <Buttons type="button" text="Create Blockchain" iconType="default" icon="check" />
        </div>
        <div className="wrapper col-lg-4 col mb-5">
          <form className="form" name="createBlockchainForm">
            <div className="row">
              {formElementsArray.map(ele => {
                return (
                  <div className="form-group col-sm-12" key={ele.id}>
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
              <div className="form-group col">
                <Buttons type="submit" text="Create Blockchain" iconType="default" icon="check" />
              </div>
            </div>
          </form>
        </div>
        <Tables info={props.info} columns={props.columns} />
      </div>
    </div>
  );
};

export default Stateless;
