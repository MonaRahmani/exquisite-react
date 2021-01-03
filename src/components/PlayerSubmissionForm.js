import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const [formFields, setFormFields] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
  });

  const onInputChange = (event) => {
    // console.log(`Changing field ${ event.target.name } to ${ event.target.value }`);
    const newFormFields = {
      ...formFields,
    }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.sendSubmission(formFields);

    setFormFields({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: ''
    });
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ props.player }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          The
          <input
            name ="adj1"
            placeholder="adjective"
            type="text" 
            value={formFields.adj1}
            onChange={onInputChange}
            />
            
          <input
            name="noun1"
            placeholder="noun"
            type="text" 
            value={formFields.noun1} 
            onChange={onInputChange}
            />
          <input
            name="adv"
            placeholder="adverb"
            type="text" 
            value={formFields.adv} 
            onChange={onInputChange}
            />
          <input
            name="verb"
            placeholder="verb"
            type="text"
            value={formFields.verb}  
            onChange={onInputChange}
            />
          the
          <input
            name="adj2"
            placeholder="adjective"
            type="text" 
            value={formFields.adjective} 
            onChange={onInputChange}
            />
          <input
            name="noun2"
            placeholder="noun"
            type="text" 
            value={formFields.noun} 
            onChange={onInputChange}
            />

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" onSubmit={onFormSubmit}/>
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
