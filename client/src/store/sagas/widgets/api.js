import Axios from 'axios';
import ROUTES from '../../../utils/routes.js';

/**
 * @function
 * @name fetchAllWidgets
 * @returns {array} - list of widget objects
*/
const fetchAllWidgets = async () => {
  try {
    const data = await Axios.get(ROUTES.widgets);
    return data.data;
  } catch (e) {
    const error = e.response.data ? e.response.data : e;
    throw error;
  }
};

const Api = {
  fetchAllWidgets,
};

export default Api;
