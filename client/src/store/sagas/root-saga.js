import { all } from 'redux-saga/effects';
import watchWidgetSagas from './widgets/widget-sagas';

export default function* rootSaga() {
  yield all([
    watchWidgetSagas(),
  ]);
}
