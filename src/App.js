import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
      <a
        href='https://github.com/ardintsev-sergey/react-todolist'
        target='_blank'
        rel='noreferrer'
      >
        Repo
      </a>
    </div>
  );
}

export default App;
