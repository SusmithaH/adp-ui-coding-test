import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tasksReducer from '../model/reducers/tasks';
import { fetchAllTasks } from '../services/tasksService';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

store.dispatch(fetchAllTasks())

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
