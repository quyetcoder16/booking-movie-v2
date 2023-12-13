import { createSlice } from '@reduxjs/toolkit'
import { quanLyPhimServices } from '../../services/quanLyPhimServices';
import { STATUS_CODE } from '../../utils/setting/config';

const initialState = {
    listBanner: [],
}

const quanLyPhimReducer = createSlice({
    name: "quanLyPhimReducer",
    initialState,
    reducers: {
        getListBanner: (state, action) => {
            state.listBanner = action.payload;
        }
    }
});

export const { getListBanner } = quanLyPhimReducer.actions

export default quanLyPhimReducer.reducer

// action thunk 

export const getListBannerAPI = () => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyPhimServices.getDanhSachBaner();
            if (status === STATUS_CODE.SUCCESS) {
                dispatch(getListBanner(data.content));
            }
        } catch (err) {
            console.log(err);
        }
    }
}