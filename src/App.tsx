import React from 'react';
import { Provider } from 'react-redux';

import store from '../src/redux/store';
import { UserList } from "./pages/UserList/UserList";

const App = () => {
  return (
      <Provider store={store}>
          <UserList />
      </Provider>
  );
}

export default App;
