# Workiva Takehome

## Running the code

After downloading code, while in `/workiva_widget_summary_sample` run `npm run start` to get the local server running on localhost:5000. Note: this assumes you have node on your local already. Once the local server is running, go to `/workiva_widget_summary_sample/client` and run `npm run start` - this should load necessary modules, start up the client, and open it in your browser once ready.

### File Structure

I used `create-react-up` to start up the app in order to focus more on the code and UX (as opposed to webpack/setup) in the time frame. Below I'll go over the file structure pertaining to the code I added.

```
.
+-- _src
|   +-- _components
|       +-- _common // any reusable components not pertaining to a particular view
|       +-- _home // component containing home page content
|       +-- _metrics // component containing line graph
|       +-- _widgets // component containing views for list of widgets and single widget description
|   +-- _store
|       +-- _actions // create new folders for each action subtype and include action-types.js and NAME-actions.js
|       +-- _reducers // corresponding reducers from action files
|       +-- _sagas // reserved for async effects
|       +-- configure-store.js // file pulls in sagas, reducers, etc.
|   +-- _styles // all global styles
|   +-- _utils
|       +-- routes.js // constants for routes based on env being sandbox or production
```
