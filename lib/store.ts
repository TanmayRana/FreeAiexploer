// import { configureStore } from "@reduxjs/toolkit";

// import operationsReducer from "./features/operationSlice";
// import apiReducer from "./features/apiSlice";
// import thunk from "redux-thunk";

// export const store = configureStore({
//   reducer: {
//     // counter: counterReducer
//     operations: operationsReducer,
//     api: apiReducer,
//   },
//   middleware: [thunk],
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import operationsReducer from "./features/operationSlice";
import apiReducer from "./features/apiSlice";

export const store = configureStore({
  reducer: {
    operations: operationsReducer,
    api: apiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
