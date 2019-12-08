import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faDiceD6, faIndustry, faUtensils, faWalking } from '@fortawesome/free-solid-svg-icons';

// Styles
import './_card.css';

/**
 * Common card component for displaying textual information
 * @constructor
 * @param {object} props - see PropTypes for definitions
 * @returns {Element}
*/
function Card(props) {
  const {
    title,
    description,
    revenue,
    timestamp,
    type,
    onClick,
  } = props;

  /**
   * Mapping of widget category to icon
   * @readonly
   * @const {object}
  */
  const icons = {
    'default': faDiceD6,
    'unknown': faDiceD6,
    'leisure': faWalking,
    'industrial': faIndustry,
    'food service': faUtensils,
  };

  return (
    <div className="card__container" onClick={() => onClick()}>
      <FontAwesomeIcon className="card__icon" icon={icons[type]} />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <p className="card__detail"><span className="card__label">Revenue:</span> ${revenue}</p>
        <p className="card__detail"><span className="card__label">Created:</span> {timestamp}</p>
      </div>
      <FontAwesomeIcon className="card__arrow" icon={faChevronRight} />
    </div>
  );
}

Card.defaultProps = {
  type: 'default',
};

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  revenue: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Card;
