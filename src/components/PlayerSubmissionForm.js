import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {
  const [formFields, setFormFields] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
  });

  const [player, setPlayer] = useState(1);

  const onInputChange = (event) => {
    // console.log(`Changing field ${ event.target.name } to ${ event.target.value }`);
    const newFormFields = {
      ...formFields,
    }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    setPlayer(player + 1);

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
      <h3>Player Submission Form for Player #{ player }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          The
          <input
            placeholder="adjective"
            type="text" 
            onChange={onInputChange}
            />
            
          <input
            placeholder="noun"
            type="text" 
            onChange={onInputChange}
            />
          <input
            placeholder="adverb"
            type="text" 
            onChange={onInputChange}
            />
          <input
            placeholder="verb"
            type="text" 
            onChange={onInputChange}
            />
          the
          <input
            placeholder="adjective"
            type="text" 
            onChange={onInputChange}
            />
          <input
            placeholder="noun"
            type="text" 
            onChange={onInputChange}
            />

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" onClick={onFormSubmit}/>
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
