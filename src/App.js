import logo from './logo.svg';
import './App.css';
import Home from './Components/NavBar/NavBar';
import { RouterProvider } from 'react-router-dom';
import { route } from './Components/Route/Route';

function App() {
  return (
    <div className="App">
    <RouterProvider router={route}></RouterProvider>
     
    </div>
  );
}

export default App;
