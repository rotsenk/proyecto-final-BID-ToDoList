import { configureStore } from '@reduxjs/toolkit';
import { tareasSlice } from './slice';

// export default configureStore({
//   reducer: {
//     tareas: tareasSlice.reducer,
//   },
// });

 export const store = configureStore({
   reducer : tareasSlice.reducer,
 });
 