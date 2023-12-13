import { createSlice } from '@reduxjs/toolkit'
import { quanLyHeThongRapService } from '../../services/quanLyHeThongRapServices';
import { STATUS_CODE } from '../../utils/setting/config';

const initialState = {
    thongTinHeThongRap: [],
}

const quanLyHeThongRapReducer = createSlice({
    name: "quanLyHeThongRapReducer",
    initialState,
    reducers: {
        getThongTinHeThongRap: (state, action) => {
            state.thongTinHeThongRap = action.payload;
        }
    }
});

export const { getThongTinHeThongRap } = quanLyHeThongRapReducer.actions

export default quanLyHeThongRapReducer.reducer;

// get api

export const getThongTinHeThongRapApi = (maHeThongRap = '') => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyHeThongRapService.getThongTinHeThongRap(maHeThongRap);
            if (status === STATUS_CODE.SUCCESS) {
                dispatch(getThongTinHeThongRap(data.content));
            }
        } catch (err) {
            console.log(err);
        }
    }
}