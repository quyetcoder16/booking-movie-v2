import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './reducers/usersReducer'
import quanLyHeThongRapReducer from './reducers/quanLyHeThongRapReducer'
import quanLyPhimReducer from './reducers/quanLyPhimReducer'

export const store = configureStore({
    reducer: {
        usersReducer,
        quanLyHeThongRapReducer,
        quanLyPhimReducer,
    },
})