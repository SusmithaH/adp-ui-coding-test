import { TaskCard } from './components/TasksCard/TaskCard';
import { useSelector } from 'react-redux'
import { ITask } from './model/interfaces/tasksInterface';

function App() {
  const tasks = useSelector((state: any) => state.tasks);

  return (
    <div className="App">
      {
        tasks.map(((task: ITask)=> 
          <TaskCard key={task.id} {...task} renderCTA={true}/>))
      }
      
    </div>
  );
}

export default App;
