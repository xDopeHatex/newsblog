import createSagaMiddleware from "redux-saga";
import reducer from "./reducers/index";
import rootSaga from "./sagas";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

console.log(reducer);

const store = configureStore({ reducer, middleware });

sagaMiddleware.run(rootSaga);

export default store;

// export const store = configureStore({
//   reducer: rootReducer,
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware(
//       {
//           serializableCheck: {
//               // Ignore these field paths in all actions
//               ignoredActionPaths: [ 'payload.navigateFunc']
//           },
//       }
//   )
//       .concat(sagaMiddleware),
// })
