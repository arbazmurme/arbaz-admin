import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const Baseurl = import.meta.env.VITE_REACT_APP_API_URL;

const initialState = {
  brandtotal: localStorage.getItem("brandtotal")
    ? JSON.parse(localStorage.getItem("brandtotal")).sort()
    : [],
  mobileimage: "",
  desktopImage: "",
  imageLoading: true,
  isBrandAvailable: false,
  isLoading: true,
  brandLoading: true,
  delbrandLoading: true,
};

export const getBrand = createAsyncThunk("brand/getBrand", async (thunkAPI) => {
  try {
    const url = `${Baseurl}/api/v1/brand/all`;
    const resp = await axios(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("404 Not Found");
  }
});

export const brandPost = createAsyncThunk(
  "brand/brandPost",
  async (formData, thunkAPI) => {
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
        maxBodyLength: Infinity,
      };
      const url = `${Baseurl}/api/v1/brand/new`;
      const resp = await axios.post(url, formData, config);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("brand Not create");
    }
  }
);

export const validatebrandSlugUrl = createAsyncThunk(
  "brand/validatebrandSlugUrl",
  async (slugUrl, thunkAPI) => {
    let resp = {
      success: false,
      message: "new email",
    };
    try {
      const url = `${Baseurl}/api/v1/brand/slugUrl/${slugUrl}`;
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return error;
    }
  }
);

export const brandImages = createAsyncThunk(
  "brand/brandImages",
  async (formData, thunkAPI) => {
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
        maxBodyLength: Infinity,
      };
      const url = `${Baseurl}/api/v1/brand/brandimages`;
      const resp = await axios.post(url, formData, config);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("brandimages Not create");
    }
  }
);
export const brandUpdate = createAsyncThunk(
  "brand/brandUpdate",
  async (formData, thunkAPI) => {
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
        maxBodyLength: Infinity,
      };
      const url = `${Baseurl}/api/v1/brand/${formData._id}`;
      const resp = await axios.put(url, formData, config);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("brand Not create");
    }
  }
);

export const brandDelete = createAsyncThunk(
  "brand/brandDelete",
  async (id, thunkAPI) => {
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
      };
      const url = `${Baseurl}/api/v1/brand/${id}`;      
      const resp = await axios.delete(url);
      console.log(resp.data, "resp.data");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("brand Not create");
    }
  }
);

const BrandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    setBrandImage(state, action) {
      state.imageLoading = action.payload.status;
      state.mobileimage = action.payload.image;
      state.desktopImage = action.payload.image;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(brandPost.pending, (state) => {
        state.isBrandAvailable = false;
        state.brandLoading = true;
      })
      .addCase(brandPost.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.brandtotal = [action.payload.Brand, ...state.brandtotal];
        }
        state.isBrandAvailable = true;
        state.brandLoading = false;
      })
      .addCase(brandPost.rejected, (state) => {
        state.isBrandAvailable = false;
        state.brandLoading = true;
      })
      .addCase(getBrand.pending, (state) => {
        state.isBrandAvailable = false;
        state.brandLoading = true;
      })
      .addCase(getBrand.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.brandtotal = action.payload.brands;
        }
        localStorage.setItem("brandtotal", JSON.stringify(state.brandtotal));
        state.isBrandAvailable = true;
        state.brandLoading = false;
      })
      .addCase(getBrand.rejected, (state) => {
        state.isBrandAvailable = false;
        state.brandLoading = true;
      })
      .addCase(brandUpdate.pending, (state) => {
        state.isBrandAvailable = false;
        state.brandLoading = true;
      })
      .addCase(brandUpdate.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.brandtotal = state.brandtotal.filter((brand) => {
            return brand._id !== action.payload.brand._id;
          });
          localStorage.setItem("brandtotal", JSON.stringify(state.brandtotal));
          state.brandtotal = [action.payload.brand, ...state.brandtotal];
        }
        state.isBrandAvailable = true;
        state.brandLoading = false;
      })
      .addCase(brandUpdate.rejected, (state) => {
        state.isBrandAvailable = false;
        state.brandLoading = true;
      })
      .addCase(brandDelete.pending, (state) => {
        state.isBrandAvailable = false;
        state.brandLoading = true;
      })
      .addCase(brandDelete.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.brandtotal = state.brandtotal.filter((brand) => {
            return brand._id !== action.payload.brand._id;
          });
        }
        localStorage.setItem("brandtotal", JSON.stringify(state.brandtotal));
        state.isBrandAvailable = true;
        state.brandLoading = false;
      })
      .addCase(brandDelete.rejected, (state) => {
        state.isBrandAvailable = false;
        state.brandLoading = true;
      })
      .addCase(brandImages.pending, (state) => {
        state.imageLoading = true;
      })
      .addCase(brandImages.fulfilled, (state, action) => {
        state.imageLoading = false;
        state.mobileimage = action.payload.mobileimages;
        state.desktopImage = action.payload.desktopImages;
      })
      .addCase(brandImages.rejected, (state) => {
        state.imageLoading = true;
      });
  },
});
export const brandActions = BrandSlice.actions;
export default BrandSlice.reducer;
