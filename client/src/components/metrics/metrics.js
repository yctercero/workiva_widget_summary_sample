import PropTypes from 'prop-types';
import React from 'react';
import {Line} from 'react-chartjs-2';

// Styles
import './_metrics.css';

/**
 * Linear graph displaying combined widget revenue by year
 * @constructor
 * @param {object} props - see PropTypes for definitions
 * @returns {Element}
*/
function Metrics(props) {
  const {
    data,
  } = props;

  return (
    <div className="metrics__container">
      <h2 className="metrics__title">
        Metrics
      </h2>
      {data ? (
        <div>
          <Line data={{
            labels: data.labels,
            datasets: [
              {
                label: 'Combined Widget Revenue By Year',
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 3,
                pointHitRadius: 10,
                data: data.revenues,
              }
            ]
          }} />
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

Metrics.propTypes = {
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string),
    revenues: PropTypes.arrayOf(PropTypes.number),
  }),
};

export default Metrics;
