
import { ITask } from '../interfaces/tasksInterface';

const initialState: ITask[] = []

export default function tasks(state = initialState, action: any) {
  switch (action.type) {

    default:
      return state
  }
}
