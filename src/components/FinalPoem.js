import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {
  // console.log(props);

  const onFinalPoemSubmit = (event) => {
    event.preventDefault();
    props.revealPoem();
  }

  const allPoems = 
    <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      {props.submissions.map((element, i) => {
        return(<p key={i}>{element}</p>)
      })}
    </section>

  const poemButton = 
  <div className="FinalPoem__reveal-btn-container">
    <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={onFinalPoemSubmit} />
  </div>

  const showPoems = props.isSubmitted ? allPoems : poemButton


  return (
    <div className='FinalPoem'>
      {showPoems}
    </div>
  );
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
