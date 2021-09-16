import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "Chevrolet",
        model: "El Camino",
        year: "1980",
        price: 2500.00,
        seats: "cloth",
        transmission: "manual",
        engine: "Buick 3.1l",
        dimensions: "72w 55h 202l",
        weight: 3428.2,
        MSRP: 5911.00
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        chooseSeats: (state, action) => { state.seats = action.payload},
        chooseTransmission: (state, action) => { state.transmission = action.payload},
        chooseEngine: (state, action) => { state.engine = action.payload},
        chooseDimensions: (state, action) => { state.dimensions = action.payload},
        chooseWeight: (state, action) => { state.weight = action.payload},
        chooseMSRP: (state, action) => { state.MSRP = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, choosePrice, chooseYear, chooseSeats, chooseTransmission, chooseEngine, chooseDimensions, chooseWeight, chooseMSRP} = rootSlice.actions;