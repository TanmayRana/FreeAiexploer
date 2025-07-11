// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface ApiState {
//   selectedUrl: string;
//   requestMethod: string;
//   apiId: number;
//   pageLimit?: number;
//   sizeLimit?: number;
// }

// const initialState: ApiState = {
//   selectedUrl: "/api/todos",
//   requestMethod: "GET",
//   apiId: 1,
//   pageLimit: 1,
//   sizeLimit: 10,
// };

// const apiSlice = createSlice({
//   name: "api",
//   initialState,
//   reducers: {
//     setSelectedUrl: (state, action: PayloadAction<string>) => {
//       state.selectedUrl = action.payload;
//     },
//     setRequestMethod: (state, action: PayloadAction<string>) => {
//       state.requestMethod = action.payload;
//     },
//     setApiId: (state, action: PayloadAction<number>) => {
//       state.apiId = action.payload;
//     },
//     setPageLimit: (state, action: PayloadAction<number>) => {
//       state.pageLimit = action.payload;
//     },
//     setSizeLimit: (state, action: PayloadAction<number>) => {
//       state.sizeLimit = action.payload;
//     },
//   },
// });

// // Export actions and reducer
// export const {
//   setSelectedUrl,
//   setRequestMethod,
//   setApiId,
//   setPageLimit,
//   setSizeLimit,
// } = apiSlice.actions;
// export default apiSlice.reducer;

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// // Define the interface for the API state
// interface ApiState {
//   selectedUrl: string;
//   requestMethod: string;
//   apiId: number;
//   pageLimit?: number;
//   sizeLimit?: number;
// }

// // Retrieve persisted state from localStorage
// const persistedState = (() => {
//   if (typeof window !== "undefined") {
//     const storedState = localStorage.getItem("apiState");
//     return storedState ? JSON.parse(storedState) : null;
//   }
//   return null;
// })();

// // Define the initial state with fallback to persisted state
// const initialState: ApiState = persistedState || {
//   selectedUrl: "/api/todos",
//   requestMethod: "GET",
//   apiId: 1,
//   pageLimit: 1,
//   sizeLimit: 10,
// };

// // Create the slice
// const apiSlice = createSlice({
//   name: "api",
//   initialState,
//   reducers: {
//     setSelectedUrl: (state, action: PayloadAction<string>) => {
//       state.selectedUrl = action.payload;
//       persistState(state);
//     },
//     setRequestMethod: (state, action: PayloadAction<string>) => {
//       state.requestMethod = action.payload;
//       persistState(state);
//     },
//     setApiId: (state, action: PayloadAction<number>) => {
//       state.apiId = action.payload;
//       persistState(state);
//     },
//     setPageLimit: (state, action: PayloadAction<number>) => {
//       state.pageLimit = action.payload;
//       persistState(state);
//     },
//     setSizeLimit: (state, action: PayloadAction<number>) => {
//       state.sizeLimit = action.payload;
//       persistState(state);
//     },
//   },
// });

// // Helper function to persist state to localStorage
// const persistState = (state: ApiState) => {
//   if (typeof window !== "undefined") {
//     localStorage.setItem("apiState", JSON.stringify(state));
//   }
// };

// // Export actions and reducer
// export const {
//   setSelectedUrl,
//   setRequestMethod,
//   setApiId,
//   setPageLimit,
//   setSizeLimit,
// } = apiSlice.actions;

// export default apiSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for the API state
interface ApiState {
  selectedUrl: string;
  requestMethod: string;
  apiId: number;
  pageLimit?: number;
  sizeLimit?: number;
}

// Retrieve persisted partial state (selectedUrl, requestMethod) from localStorage
const persistedPartialState = (() => {
  if (typeof window !== "undefined") {
    const storedState = localStorage.getItem("apiState");
    if (storedState) {
      const parsed = JSON.parse(storedState);
      return {
        selectedUrl: parsed.selectedUrl,
        requestMethod: parsed.requestMethod,
      };
    }
  }
  return {};
})();

// Define default initial state
const defaultState: ApiState = {
  selectedUrl: "/api/todos",
  requestMethod: "GET",
  apiId: 1,
  pageLimit: 1,
  sizeLimit: 10,
};

// Combine persisted values (only selectedUrl and requestMethod) with defaults for others
const initialState: ApiState = {
  ...defaultState,
  ...persistedPartialState,
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setSelectedUrl: (state, action: PayloadAction<string>) => {
      state.selectedUrl = action.payload;
      persistSelectedUrlAndRequestMethod(state);
    },
    setRequestMethod: (state, action: PayloadAction<string>) => {
      state.requestMethod = action.payload;
      persistSelectedUrlAndRequestMethod(state);
    },
    setApiId: (state, action: PayloadAction<number>) => {
      state.apiId = action.payload;
      // Do NOT persist apiId
    },
    setPageLimit: (state, action: PayloadAction<number>) => {
      state.pageLimit = action.payload;
      // Do NOT persist pageLimit
    },
    setSizeLimit: (state, action: PayloadAction<number>) => {
      state.sizeLimit = action.payload;
      // Do NOT persist sizeLimit
    },
  },
});

// Persist ONLY selectedUrl and requestMethod to localStorage
const persistSelectedUrlAndRequestMethod = (state: ApiState) => {
  if (typeof window !== "undefined") {
    const partialState = {
      selectedUrl: state.selectedUrl,
      requestMethod: state.requestMethod,
    };
    localStorage.setItem("apiState", JSON.stringify(partialState));
  }
};

// Export actions and reducer
export const {
  setSelectedUrl,
  setRequestMethod,
  setApiId,
  setPageLimit,
  setSizeLimit,
} = apiSlice.actions;

export default apiSlice.reducer;
