import React from 'react';

const InputField = props => {
  let inputElement = null;
  let validationError = null;

  const inputClasses = ['form-control'];
  if (props.inValid && props.shouldValidate && props.touched) {
    inputClasses.push('border border-danger');
    validationError = <small className="err-text">{props.shouldValidate.errMsg}</small>;
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changeHandler} />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea className="form-control" {...props.elementConfig} value={props.value} onChange={props.changeHandler} />
      );
      break;
    case 'select':
      inputElement = (
        <select className="form-control" value={props.value} onChange={props.changeHandler}>
          {props.elementConfig.options.map((option, index) => {
						return <option key={index} value={option.value}>{option.displayValue}</option>;
          })}
        </select>
      );
      break;
    default:
      inputElement = (
        <input className="form-control" {...props.elementConfig} value={props.value} onChange={props.changeHandler} />
      );
      break;
  }
  return (
    <div>
      <label htmlFor={props.name} className="sr-only">
        {props.label}
      </label>
      {inputElement}
      {validationError}
    </div>
  );
};
export default InputField;
