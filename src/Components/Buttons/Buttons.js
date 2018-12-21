import React from 'react';

const Buttons = (props) => {
  let buttonType = null;
  let buttonClass = null;
  let icons = null;

	// displays icon on button before text.
  switch (props.icon) {
    case 'add':
      icons = <span className="icon--add" />;
      break;
    case 'start':
      icons = <span className="icon--start" />;
      break;
    case 'check':
    default:
      icons = <span className="icon--check" />;
      break;
  }

	// displays the action of button
  switch (props.type) {
    case 'button':
      buttonType = 'button';
      break;
    case 'submit':
      buttonType = 'submit';
      break;
    default:
      buttonType = 'button';
      break;
  }

	// displays type on button
  switch (props.iconType) {

    case 'default':
        buttonClass = "button--default"
      break;
    case 'delete':
        buttonClass = "button--delete"
      break;
    case 'validate':
        buttonClass = "button--validate"
      break;

    default:
        buttonClass = "button--default"
      break;
  }

	// returns the element
  return (
    <button type={buttonType} className={buttonClass} disabled={props.disabled} onClick={props.onclick}>
      {icons}
      {props.text}
    </button>
  );

  // example
  // <Buttons type="button" text="Submit" iconType="default" icon="check" />

}
export default Buttons;