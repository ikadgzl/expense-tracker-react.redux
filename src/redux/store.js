import { configureStore } from '@reduxjs/toolkit';

import transactionReducer from './transactionSlice';

export default configureStore({
  reducer: {
    transaction: transactionReducer
  }
});
