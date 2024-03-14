import './App.css';
import Login from './components/Login/Login';
import OverView from './components/OverView/OverView';
import { Route, Routes } from "react-router-dom";
import Role from './components/Role/Role';
import UsersView from './components/AllUsers/UsersView';
import Company from './components/Company/Company';
import Permission from './components/Permission/Permission';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/home' Component={OverView}>
          <Route path='' Component={UsersView}/>
          <Route path='role' Component={Role}/>
          <Route path='company' Component={Company}/>
          <Route path='permission' Component={Permission}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
