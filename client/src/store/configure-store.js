import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { logger } from 'redux-logger';
import rootSaga from './sagas/root-saga';
import createRootReducer from './reducers/root-reducer';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {
  let store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        sagaMiddleware,
        logger,
      ),
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
