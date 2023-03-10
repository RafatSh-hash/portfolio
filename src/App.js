
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Main from './Main/Main';


function App() {
  const router = createBrowserRouter([{
    path : "/",
    element : <Main></Main>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      }
    ]
  }])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
