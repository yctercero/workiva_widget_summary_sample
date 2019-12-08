import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import ACTION_TYPE from '../../actions/widgets/action-types';
import Api from './api';

/**
 * Structure incoming data into expected UI format
 * @function
 * @param {array} data - array of widget objects
 * @returns {object} { data: [], finalGraphData: [] }
*/
function extractMetrics(data) {
  const revenues = {};
  const finalGraphData = {
    labels: [],
    revenues: [],
  };

  // TODO: move to constants file
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  
  data.forEach(item => {
    const date = new Date(item.timestamp);
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    if (revenues[year]){
      revenues[year] = revenues[year] + item.revenue;
    } else {
      revenues[year] = item.revenue;
    }

    item.timestamp = `${month} ${day}, ${year}`;
    item.revenue = Number(item.revenue).toFixed(2);
  });

  for (const property in revenues) {
    if (revenues.hasOwnProperty(property)) {
      finalGraphData.labels.push(property);
      finalGraphData.revenues.push(revenues[property]);
    }
  }

  return { data, finalGraphData };
};

/**
 * Saga fetching widget data from API
 * @function
*/
export function* fetchAllWidgetsSaga() {
  try {
    const resp = yield call(Api.fetchAllWidgets);
    const data = extractMetrics(resp);
    yield put({
      type: ACTION_TYPE.FETCH_ALL_WIDGETS_SUCCESS,
      payload: { data: data.data, revenueMetrics: data.finalGraphData },
    });
  } catch (error) {
    yield put({ type: ACTION_TYPE.FETCH_ALL_WIDGETS_FAILURE, error });
    throw new Error(error);
  }
}

export default function* watchWidgetSagas() {
  yield takeLatest(ACTION_TYPE.FETCH_ALL_WIDGETS_REQUESTED, fetchAllWidgetsSaga);
}
