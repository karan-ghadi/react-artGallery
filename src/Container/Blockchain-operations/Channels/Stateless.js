import React from 'react';
import Buttons from '../../../Components/Buttons/Buttons';
import nodeIcon from '../../../assets/images/icons/node-icon.png';
import ValidateIcon from '../../../assets/images/icons/validate-icon.png';
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
      <div className="row">
        <div className="col-lg-8">
          <div className="form-box">
            <div className="title">
              <h6>
                <img src={nodeIcon} className="img-fluid" alt="" />
                Add Channels
              </h6>
            </div>
            <div className="wrapper col-lg-6 col">
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
                    <Buttons type="submit" text="Add Channels" iconType="default" icon="check" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-box">
            <div className="title">
              <h6>Organisations</h6>
            </div>
            <ul className="list-group">
              <li className="list-group-item">Organisation 1</li>
              <li className="list-group-item">Organisation 2</li>
              <li className="list-group-item">Organisation 3</li>
              <li className="list-group-item">Organisation 4</li>
              <li className="list-group-item">Organisation 5</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="blockchain-status">
            <ul className="list-group">
              <li className="list-group-item">
                <img src={ValidateIcon} alt="" />
                Workspace created
              </li>
              <li className="list-group-item">
                <img src={ValidateIcon} alt="" />
                Artified created
              </li>
              <li className="list-group-item">
                <img src={ValidateIcon} alt="" />
                Artified archived
              </li>
              <li className="list-group-item">
                <img src={ValidateIcon} alt="" />
                HDR created
              </li>
            </ul>
            <div className="clearfix" />
            <div className="col-lg-6 mt-5">
              <Buttons type="submit" text="check terminal" iconType="default" icon="check" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stateless;
