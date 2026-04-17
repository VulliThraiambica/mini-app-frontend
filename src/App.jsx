import Rootlayout from './components/Rootlayout'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home';
import Createmp from './components/Createmp';
import Listofemp from './components/Listofemp';
import Employee from './components/Employee';
import Editemployee from './components/Editemployee'

function App() {

const routerobj=createBrowserRouter([
    {
path:'/',
element:<Rootlayout/>,
children:[{
    path:"",element:<Home/>
},
{path:"create-emp",element:<Createmp/>},
{path:"list",element:<Listofemp/>},{
    path:"employee",element:<Employee/>
},{path:"edit-emp",element:<Editemployee/>}
],},
]);
return <RouterProvider router={routerobj}/>;

}

export default App