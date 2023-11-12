import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../src/redux/store';
import { UserList } from "./pages/UserList/UserList";

const App = () => {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<UserList />} />
              </Routes>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
