import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// Components
import Card from '../common/card/card';

// Styles
import './_widgets.css';

/**
 * Contains logic for list and single view of widgets
 * @constructor
 * @param {object} props - see PropTypes for definitions
 * @returns {Element}
*/
function Widgets(props) {
  const {
    widgets,
  } = props;

  const [isSelected, setIsSelected] = useState(false);
  const [selectedWidget, setSelectedWidget] = useState(null);

  /**
   * @function
   * @name onClick - update state with selected widget
   * @param {string} widgetId - id of widget item clicked
   * @returns {undefined}
  */
  const onClick = (widgetId) => {
    widgets.forEach(item => {
      if (item.id === widgetId) setSelectedWidget(item);
    });
    setIsSelected(true);
  };

  /**
   * @function
   * @name onBack - revert state to defaults
   * @returns {undefined}
  */
  const onBack = () => {
    setIsSelected(false);
    setSelectedWidget(null);
  };

  if (isSelected) {
    return (
      <div className="widget__container">
        <FontAwesomeIcon onClick={onBack} className="widget__back" icon={faChevronLeft} />
        <h2 className="widget__title">
          {selectedWidget.name}
        </h2>
        <div className="widget__description">
          <p className="widget__label">Description</p>
          <p className="widget__text">
            {selectedWidget.description}
          </p>
        </div>
        <div className="widget__details">
          <p className="widget__label">Revenue</p>
          <p className="widget__text">
            {`$${selectedWidget.revenue}`}
          </p>
        </div>
        <div className="widget__details">
          <p className="widget__label">Timestamp</p>
          <p className="widget__text">
            {selectedWidget.timestamp}
          </p>
        </div>
        <div className="widget__details">
          <p className="widget__label">Category</p>
          <p className="widget__text">
            {selectedWidget.category}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="widgets__container">
      <h2 className="widgets__title">
        Available Widgets
      </h2>
      <div className="widgets__list">
        {widgets ? widgets.map(widget => {
          return (
            <Card
              onClick={() => onClick(widget.id)}
              title={widget.name}
              description={widget.description}
              revenue={widget.revenue}
              timestamp={widget.timestamp}
              type={widget.category}
              key={widget.id}
            />
          );
        }) : (
          <p>No widgets found</p>
        )}
      </div>
    </div>
  );
}

Widgets.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    revenue: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })),
};

export default Widgets;
