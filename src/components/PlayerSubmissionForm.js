import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const generateEmptyState = () => {
    const hash = {}

    for(const field of props.fields) {
      if (field.key) {
        hash[field.key] = ''
      } 
    }
    return hash
  } 

  const [playerSubmission, setPlayerSubmission] = useState(generateEmptyState());

  const onInputChange = (event) => {
    const newFormFields = {
      ...playerSubmission,
    }
    newFormFields[event.target.name] = event.target.value;
    setPlayerSubmission(newFormFields);
  }

  const makePoem = () => {
    const words = props.fields.map((element) => {
      if (element.key) {
        return playerSubmission[`${element.key}`]
      } else {
        return element
      }
    })
    return words.join(' ')
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.sendSubmission(makePoem());

    setPlayerSubmission(generateEmptyState())
    
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ props.index }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            props.fields.map((element, i) => {
              if (element.key) {
                return(
                <input 
                  key={ `${i}` } 
                  className={ playerSubmission[element.key] === '' ? 'empty' : 'full' } 
                  name={ element.key } 
                  placeholder={ element.placeholder } 
                  type="text" 
                  value={ playerSubmission[element.key] } 
                  onChange={ onInputChange } />)
              } else {
                return(element)
              }
            })
          }
          {/* The
          <input
            name ="adj1"
            placeholder="adjective"
            type="text" 
            value={fields.adj1}
            onChange={onInputChange}
            className={inputValid(fields.adj1) ? 'PlayerSubmissionForm__poem-inputs' : 'PlayerSubmissionForm__input--invalid'}
            />
            
          <input
            name="noun1"
            placeholder="noun"
            type="text" 
            value={fields.noun1} 
            onChange={onInputChange}
            className={inputValid(fields.noun1) ? 'PlayerSubmissionForm__poem-inputs' : 'PlayerSubmissionForm__input--invalid'}
            />
          <input
            name="adv"
            placeholder="adverb"
            type="text" 
            value={fields.adv} 
            onChange={onInputChange}
            className={inputValid(fields.adv) ? 'PlayerSubmissionForm__poem-inputs' : 'PlayerSubmissionForm__input--invalid'}
            />
          <input
            name="verb"
            placeholder="verb"
            type="text"
            value={fields.verb}  
            onChange={onInputChange}
            className={inputValid(fields.verb) ? 'PlayerSubmissionForm__poem-inputs' : 'PlayerSubmissionForm__input--invalid'}
            />
          the
          <input
            name="adj2"
            placeholder="adjective"
            type="text" 
            value={fields.adjective} 
            onChange={onInputChange}
            className={inputValid(fields.adj2) ? 'PlayerSubmissionForm__poem-inputs' : 'PlayerSubmissionForm__input--invalid'}
            />
          <input
            name="noun2"
            placeholder="noun"
            type="text" 
            value={fields.noun} 
            onChange={onInputChange}
            className={inputValid(fields.noun2) ? 'PlayerSubmissionForm__poem-inputs' : 'PlayerSubmissionForm__input--invalid'}
            /> */}

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" 
          value="Submit Line" 
          className="PlayerSubmissionForm__submit-btn" 
          />
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
