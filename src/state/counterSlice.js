import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}

/**
 * `createSlice` bize bir obje dönderir. Bu objenin
 * iki property'si vardır. Bu propertyler
 * `actions` ve `reducer` isimli propertylerdir.
 * Bunların `reducer`  olanı default export edilir.
 * Action'lar birden fazla olacağı için const olarak
 * export edilmeleri gerekir.
 */
export const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: initialState,
    reducers: {
        increase: (state, action) => {
            state.counter += 1
        },
        decrease: function (state, action) {
            state.counter -= 1
        },
        setCounter: (state, action) => {
            console.log('>> State ve Action', state, action)
            state.counter = action.payload
        }
    }
})

// actions propertysi bir objedir ve içerisindeki
// fonksiyonlar `createSlice` içerisindeki `reducers`
// propertysine gönderilen fonksiyon isimleriyle aynıdır.
export const { decrease, increase, setCounter } = counterSlice.actions

// reducer propertysini default export etmek gerekiyor.
export default counterSlice.reducer
