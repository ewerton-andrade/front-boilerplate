import { configureStore } from "@reduxjs/toolkit";
import { OpenModal, OpenModalReducer } from "./Redux/Features/OpenModal";
import { rtkService } from "./Redux/Services/rtkService";

export const reducer =  {
  [OpenModal.name]: OpenModalReducer,
  [rtkService.reducerPath]: rtkService.reducer,
}

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat( rtkService.middleware )
})

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default { store };