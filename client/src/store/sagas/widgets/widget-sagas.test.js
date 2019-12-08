import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';

import Api from './api';
import {
  fetchAllWidgetsSaga,
} from './widget-sagas';
import ACTION_TYPE from '../../actions/widgets/action-types';

describe('Widget sagas', () => {
  describe('fetchAllWidgets', () => {
    it('should dispatch FETCH_ALL_WIDGETS_SUCCESS if data retrieved', () => {
      const sampleData = [{ name: 'widget1', description: 'widget description' }];

      return expectSaga(fetchAllWidgetsSaga)
        .provide([
          [matchers.call.fn(
            Api.fetchAllWidgets,
          ), { data: { details: sampleData } }],
        ])
        .put({
          type: ACTION_TYPE.FETCH_ALL_WIDGETS_SUCCESS,
          payload: sampleData,
        })
        .dispatch({ type: ACTION_TYPE.FETCH_ALL_WIDGETS_REQUESTED })
        .run();
    });

    it('should dispatch failure if api call fails ', () => {
      return expectSaga(fetchAllWidgetsSaga)
        .provide([
          [matchers.call.fn(Api.fetchAllWidgetsSaga), throwError('call failed')],
        ])
        .put({
          type: ACTION_TYPE.FETCH_ALL_WIDGETS_FAILURE,
          error: 'call failed',
        })
        .dispatch({ type: ACTION_TYPE.FETCH_ALL_WIDGETS_REQUESTED })
        .run();
    });
  });
});
