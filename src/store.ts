import { configureStore } from "@reduxjs/toolkit";

export const reducer =  {
  
}

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat()
})

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default { store };