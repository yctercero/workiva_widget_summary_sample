import ACTION_TYPE from './action-types';

/**
 * @function - fetches list of all widgets with individual widget info
 * @name fetchWidgets
*/
export const fetchWidgets = () => ({
  type: ACTION_TYPE.FETCH_ALL_WIDGETS_REQUESTED,
});
