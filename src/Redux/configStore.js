import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './reducers/usersReducer'
import quanLyHeThongRapReducer from './reducers/quanLyHeThongRapReducer'

export const store = configureStore({
    reducer: {
        usersReducer,
        quanLyHeThongRapReducer,
    },
})