import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {
  // console.log(props);

  const onSubmit = (event) => {
    event.preventDefault();
  }

  const revealPoem = poemList => {
    return poemList.map((item, i) => {
      return (
      <p key={i}>{`The ${item.adj1} ${item.noun1} ${item.adv} ${item.verb} the ${item.adj2} ${item.noun2}.`}</p>
      );
    });
  } 

  return (
    <div className='FinalPoem'>
      <section className='FinalPoem__poem'>
        <h3>Final Poem</h3>
        {revealPoem(props.poemList)}

      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input 
          type="button" 
          value="We are finished: Reveal the Poem" 
          className="FinalPoem__reveal-btn" 
          // onSubmit={onSubmit}
          />
      </div>
    </div>
  );
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
