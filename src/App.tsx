import './App.css';
import NewTodo from './Components/NewTodo/NewTodo';
import Todos from './Components/Todos/Todos';
import ContextProvider from './Context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <NewTodo/>
        <Todos/>
      </div>
    </ContextProvider>
  );
}

export default App;
