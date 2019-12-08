import React from 'react';

// Styles
import './_home.css';

/**
 * @constructor
 * @param {object} props - see PropTypes for definitions
 * @returns {Element}
*/
function Home() {
  return (
    <div className="widgets__container">
      <h2 className="widgets__title">
        Home
      </h2>
      <div className="widgets__list">
        <p>
          Welcome! Here you'll find my takehome project. As described in the requirements, this project includes three main views: list of all widgets, a view displaying an individual widget's info, and a line graph displaying total revenue by year.
        </p>
        <p>
          I tried not to take longer than the max suggested time, so I am also including some notes on considerations I would take with more time. I included a READ.md with instructions on how to get the project running locally.
        </p>
        <h3>State</h3>
        <ul>
          <li>
            Missing consideration of all states - could add loading skeleton state for example
          </li>
          <li>
            Could reconsider what components we designate as containers
          </li>
          <li>
            Adjust routing to include a /widgets/:id route so that users could, for example, bookmark a particular widget to come back to or share
          </li>
          <li>
            Get more insight as to a user's need for the freshness of the data - how important is it for it to be up to the minute vs only update on loads
          </li>
        </ul>
        <h3>CSS</h3>
        <ul>
          <li>
            Remove redundant code by configuring webpack to allow for globaly scoped css
          </li>
          <li>
            Consider if a preprocessor would be beneficial
          </li>
        </ul>
        <h3>Components</h3>
        <ul>
          <li>
            To make the `Card` component truly a 'common' component, would need to generalize it more (were we to want it to function with data other than widget)
          </li>
          <li>
            Could split logic for displaying single vs. list of widgets into container
          </li>
        </ul>
        <h3>Testing</h3>
        <ul>
          <li>
            Missing tests of course! :)
          </li>
        </ul>
        <h3>Questions</h3>
        <ul>
          <li>
            What does the timestamp represent? Last known revenue? Widget creation date?
          </li>
          <li>
            What defaults should be shown for 'unknown' categories?
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
