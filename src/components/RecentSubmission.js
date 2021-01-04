import React from 'react';
import PropTypes from 'prop-types';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">
      {`The ${props.lastPoem.adj1} ${props.lastPoem.noun1} ${props.lastPoem.adv} ${props.lastPoem.verb} the ${props.lastPoem.adj2} ${props.lastPoem.noun2}.`}
      </p>
    </div>
  );
}

RecentSubmission.propTypes = {
  submission: PropTypes.string.isRequired,
};

export default RecentSubmission;
