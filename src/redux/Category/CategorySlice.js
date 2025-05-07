import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Baseurl = import.meta.env.VITE_REACT_APP_API_URL;


const initialState = {
  categoryList: localStorage.getItem("categoryList")
    ? JSON.parse(localStorage.getItem("categoryList"))
    : [],
  categoryLoading: true,
  isCategoryAvailable: false,
  imageLoading: true,
  mobileimage: "",
  desktopimage: "",
};
export const categoryPost = createAsyncThunk(
  "category/categoryPost",
  async (formData, thunkAPI) => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const url = `${Baseurl}/api/v1/category/new`;
      const resp = await axios.post(url, formData, config);
      console.log(resp.data, "resp.data");
      return resp.data;
    } catch (error) {
      return error.response.data;
    }
  }
);
export const validateSlugUrl = createAsyncThunk(
  "saloon/validateSlugUrl",
  async (slugUrl, thunkAPI) => {
    try {
      const url = `${Baseurl}/api/v1/category/slugUrl/${slugUrl}`;
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return error;
    }
  }
);
export const categoryAll = createAsyncThunk(
  "category/categoryAll",
  async (formData, thunkAPI) => {
    try {
      const url = `${Baseurl}/api/v1/category/all`;
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return error.response.data;
    }
  }
);
export const categoryUpdate = createAsyncThunk(
  "category/categoryUpdate",
  async (formData, thunkAPI) => {
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
      };
      const url = `${Baseurl}/api/v1/category/update/${formData._id}`;
      const resp = await axios.put(url, formData, config);
    
      return resp.data;
    } catch (error) {
      return error.response.data;
    }
  }
);
export const categoryDelete = createAsyncThunk(
  "category/categoryDelete",
  async (Id, thunkAPI) => {
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
      };
      const url = `${Baseurl}/api/v1/category/delete/${Id}`;
      const resp = await axios.delete(url);
      return resp.data;
    } catch (error) {
      return error.response.data;
    }
  }
);
export const categoryImages = createAsyncThunk(
  "category/categoryImages",
  async (formData, thunkAPI) => {
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
        maxBodyLength: Infinity,
      };
      const url = `${Baseurl}/api/v1/category/uploardCategoryImage`;
      const resp = await axios.post(url, formData, config);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("categoryimages Not create");
    }
  }
);
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setImageNull(state, action) {
      state.imageLoading = action.payload.status;
      state.mobileimage = action.payload.image;
      state.desktopimage = action.payload.image;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(categoryPost.pending, (state) => {
        state.isCategoryAvailable = false;
        state.categoryLoading = true;
      })
      .addCase(categoryPost.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.categoryList = [action.payload.category, ...state.categoryList];
        }
        state.isCategoryAvailable = true;
        state.categoryLoading = false;
      })
      .addCase(categoryPost.rejected, (state) => {
        state.isCategoryAvailable = false;
        state.categoryLoading = true;
      })
      .addCase(categoryAll.pending, (state) => {
        state.isCategoryAvailable = false;
        state.categoryLoading = true;
      })
      .addCase(categoryAll.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.categoryList = action.payload.categories;
        }
        localStorage.setItem(
          "categoryList",
          JSON.stringify(state.categoryList)
        );
        state.isCategoryAvailable = true;
        state.categoryLoading = false;
      })
      .addCase(categoryAll.rejected, (state) => {
        state.isCategoryAvailable = false;
        state.categoryLoading = true;
      })
      .addCase(categoryUpdate.pending, (state) => {
        state.isCategoryAvailable = false;
        state.categoryLoading = true;
      })
      .addCase(categoryUpdate.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.categoryList = state.categoryList.filter((category) => {
            return category._id !== action.payload.category._id;
          });
          state.categoryList = [...state.categoryList, action.payload.category];
        }
        localStorage.setItem(
          "categoryList",
          JSON.stringify(state.categoryList)
        );
        state.isCategoryAvailable = true;
        state.categoryLoading = false;
      })
      .addCase(categoryUpdate.rejected, (state) => {
        state.isCategoryAvailable = false;
        state.categoryLoading = true;
      })
      .addCase(categoryDelete.pending, (state) => {
        state.isCategoryAvailable = false;
        state.categoryLoading = true;
      })
      .addCase(categoryDelete.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.categoryList = state.categoryList.filter((category) => {
            return category._id !== action.payload.category._id;
          });
        }
        localStorage.setItem(
          "categoryList",
          JSON.stringify(state.categoryList)
        );
        state.isCategoryAvailable = true;
        state.categoryLoading = false;
      })
      .addCase(categoryDelete.rejected, (state) => {
        state.isCategoryAvailable = false;
        state.categoryLoading = true;
      })
      .addCase(categoryImages.pending, (state) => {
        state.imageLoading = true;
      })
      .addCase(categoryImages.fulfilled, (state, action) => {
        state.imageLoading = false;
        state.mobileimage = action.payload.mobileimages;
        state.desktopimage = action.payload.desktopImages;
      })
      .addCase(categoryImages.rejected, (state) => {
        state.imageLoading = true;
      });
  },
});
export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;
