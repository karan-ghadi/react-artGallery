import React from 'react';
import Buttons from '../../../Components/Buttons/Buttons';
import nodeIcon from '../../../assets/images/icons/node-icon.png';
import InputField from '../../../Components/Input/inputField';

const Stateless = props => {
  const formElementsArray = [];
  const formElementsArrayOrganisation = [];

  for (let key in props.formElementsOrderer) {
    formElementsArray.push({
      id: key,
      config: props.formElementsOrderer[key]
    });
  }
  for (let key in props.formElementsOrganisation) {
    formElementsArrayOrganisation.push({
      id: key,
      config: props.formElementsOrganisation[key]
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
                Add Orderer
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
                          changeHandler={event => props.changedOrder(event, ele.id)}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="row">
                  <div className="form-group col">
                    <Buttons type="submit" text="Add Orderer" iconType="default" icon="check" />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="form-box">
            <div className="title">
              <h6>
                <img src={nodeIcon} className="img-fluid" alt="" />
                Add Organisation
              </h6>
            </div>
            <div className="wrapper col-lg-6 col">
              <form className="form" name="addOrganisationForm">
                <div className="row">
                  {formElementsArrayOrganisation.map(ele => {
                    return (
                      <div className="form-group col-sm-12" key={ele.id}>
                        <InputField
                          elementType={ele.config.elementType}
                          elementConfig={ele.config.elementConfig}
                          value={ele.config.value}
                          changeHandler={event => props.changedOrder(event, ele.id)}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="row">
                  <div className="form-group col">
                    <Buttons
                      type="submit"
                      text="Add Organisation"
                      iconType="default"
                      icon="check"
                    />
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
    </div>
  );
};

export default Stateless;
