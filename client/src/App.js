import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faList } from '@fortawesome/free-solid-svg-icons';
// Actions
import { fetchWidgets } from './store/actions/widgets/widget-actions';
// Components
import Widget from './components/widgets/widgets';
import Metrics from './components/metrics/metrics';

// Styles
import './App.css';
import Home from './components/home/home';

/**
 * Container with routing logic and base UI skeleton
 * @constructor
 * @param {object} props - see PropTypes for definitions
 * @returns {Element}
*/
function App(props) {
  const {
    fetchAllWidgetsDispatch,
    widgets,
    revenueMetrics,
  } = props;

  const location = useLocation();

  useEffect(() => {
    fetchAllWidgetsDispatch();
  }, []);

  return (
    <div className="app__container">
      <header className="header__container .flexrow--center">
        <h1 className="header__title">Workiva</h1>
      </header>
      <aside className="aside__container">
        <menu className="aside__menu">
          <li className={`aside__listitem ${location.pathname === '/' && 'active'}`}>
            <Link className="aside__item" to="/">
              <FontAwesomeIcon className="aside__icon" icon={faHome} />
              Home
            </Link>
          </li>
          <li className={`aside__listitem ${/widgets/.test(location.pathname) && 'active'}`}>
            <Link className="aside__item" to="/widgets">
              <FontAwesomeIcon className="aside__icon" icon={faList} />
              Widgets
            </Link>
          </li>
          <li className={`aside__listitem ${/metrics/.test(location.pathname) && 'active'}`}>
            <Link className="aside__item" to="/metrics">
              <FontAwesomeIcon className="aside__icon" icon={faChartBar} />
              Metrics
            </Link>
          </li>
        </menu>
      </aside>
      <main className="main__container">
        <div className="main__wrapper">
          <Switch>
            <Route path="/widgets" render={() => <Widget widgets={widgets} />} />
            <Route path="/metrics" render={() => <Metrics data={revenueMetrics} />} />
            <Route component={Home} />
          </Switch>
        </div>
      </main>
    </div>
  );
};

App.propTypes = {
  fetchAllWidgetsDispatch: PropTypes.func.isRequired,
  widgets: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    revenue: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })),
};

const mapDispatchToProps = dispatch => ({
  fetchAllWidgetsDispatch: () => dispatch(fetchWidgets()),
});

const mapStateToProps = state => ({
  widgets: state.widgets.rawData,
  revenueMetrics: state.widgets.revenueByYear,
});

export default connect(mapStateToProps,mapDispatchToProps)(App);