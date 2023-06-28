import { createSlice } from '@reduxjs/toolkit';

export const tareasSlice = createSlice({
  name: 'tareaSlice',
  initialState: {
    lstTarea: [],
    estDlg : false,
  },

  reducers: {
    mostrarDialogo: (state, action) => {
      const valor = action.payload;
      state.estDlg = valor;
    },  

    addTarea: (state, action) => {
      const {id, nom, desc} = action.payload;
      state.lstTarea.push({idTarea : id, nombre : nom, descripcion: desc});
    },

    eliminarTarea: (state, action) => {
      const idTar = action.payload;
      state.lstTarea = state.lstTarea.filter((it)=> it.idTarea != idTar);
    },
    
    editarTarea: (state, action) => {
      state.lstTarea[action.payload.index] = action.payload.text;
    },
  },
});

export const { addTarea, eliminarTarea, editarTodo } = tareasSlice.actions;
export default tareasSlice;
