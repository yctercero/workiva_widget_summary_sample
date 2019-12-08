import ACTION_TYPE from '../actions/widgets/action-types';

const initialState = {
  rawData: null,
  revenueByYear: null,
  // 0 - no action taken, 1 - fetching, 2 - success, 3 - error
  fetchWidgetsStatus: 0,
};

const widgets = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.FETCH_ALL_WIDGETS_REQUESTED:
      return Object.assign({}, state, {
        fetchWidgetsStatus: 1,
      });
    case ACTION_TYPE.FETCH_ALL_WIDGETS_SUCCESS:
      return Object.assign({}, state, {
        rawData: action.payload.data,
        revenueByYear: action.payload.revenueMetrics,
        fetchWidgetsStatus: 2,
      });
    case ACTION_TYPE.FETCH_ALL_WIDGETS_FAILURE:
      return Object.assign({}, state, {
        fetchWidgetsStatus: 3,
      });
    default:
      return state;
  }
};

export default widgets;
