/* eslint-disable @typescript-eslint/no-explicit-any */
// import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import operationsService from "./operationServices";

// // Define a type for a single operation if you have one (example shown here)
// interface Data {
//   id: string;
//   name: string;
//   // Add other fields as needed
// }

// // Define the shape of the slice state
// interface OperationsState {
//   data: Data[];
//   isLoading: boolean;
//   isError: boolean;
//   isSuccess: boolean;
//   message: string;
// }

// const initialState: OperationsState = {
//   data: [],
//   isLoading: false,
//   isError: false,
//   isSuccess: false,
//   message: "",
// };

// // ✅ Type url as string, and return value as Operation[] (or whatever your API returns)
// export const getAllData = createAsyncThunk<
//   Data[],
//   string,
//   { rejectValue: string }
// >("operations/getAllData", async (url, thunkAPI) => {
//   try {
//     return await operationsService.getAllData(url);
//   } catch (error: any) {
//     const message =
//       error.response?.data?.message || error.message || "Something went wrong";
//     return thunkAPI.rejectWithValue(message);
//   }
// });

// export const getById = createAsyncThunk<
//   Data[],
//   string,
//   { rejectValue: string }
// >("operations/getById", async (url, thunkAPI) => {
//   try {
//     return await operationsService.getById(url);
//   } catch (error: any) {
//     const message =
//       error.response?.data?.message || error.message || "Something went wrong";
//     return thunkAPI.rejectWithValue(message);
//   }
// });

// const operationsSlice = createSlice({
//   name: "operations",
//   initialState,
//   reducers: {
//     reset: (state) => {
//       state.operations = [];
//       state.isLoading = false;
//       state.isError = false;
//       state.isSuccess = false;
//       state.message = "";
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getAllData.pending, (state) => {
//         state.isLoading = true;
//         state.isError = false;
//         state.isSuccess = false;
//         state.message = "";
//       })
//       .addCase(
//         getAllData.fulfilled,
//         (state, action: PayloadAction<Operation[]>) => {
//           state.isLoading = false;
//           state.isSuccess = true;
//           state.operations = action.payload;
//         }
//       )
//       .addCase(getAllData.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload || "Failed to fetch operations";
//       });
//   },
// });

// export const { reset } = operationsSlice.actions;
// export default operationsSlice.reducer;

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import operationsService from "./operationServices";

// Define a type for a single operation
interface Data {
  id: string;
  name: string;
  // Add other fields as needed
}

// Define the shape of the slice state
interface OperationsState {
  data: Data[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
}

const initialState: OperationsState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// Async thunk for getting all data
export const getAllData = createAsyncThunk<
  Data[],
  string,
  { rejectValue: string }
>("operations/getAllData", async (url, thunkAPI) => {
  try {
    return await operationsService.getAllData(url);
  } catch (error: any) {
    const message =
      error.response?.data?.message || error.message || "Something went wrong";
    return thunkAPI.rejectWithValue(message);
  }
});

// Async thunk for getting data by ID
export const getById = createAsyncThunk<
  Data[],
  string,
  { rejectValue: string }
>("operations/getById", async (url, thunkAPI) => {
  try {
    return await operationsService.getById(url);
  } catch (error: any) {
    const message =
      error.response?.data?.message || error.message || "Something went wrong";
    return thunkAPI.rejectWithValue(message);
  }
});

const operationsSlice = createSlice({
  name: "operations",
  initialState,
  reducers: {
    reset: (state) => {
      state.data = [];
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(getAllData.fulfilled, (state, action: PayloadAction<Data[]>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(getAllData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to fetch operations";
      });

    builder
      .addCase(getById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(getById.fulfilled, (state, action: PayloadAction<Data[]>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(getById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to fetch data by ID";
      });
  },
});

export const { reset } = operationsSlice.actions;
export default operationsSlice.reducer;
