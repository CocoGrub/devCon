import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Landing from './components/layouts/Landing'
import Navbar from './components/layouts/Navbar'
import Register from './components/auth/Register'
import './App.css';
import {Provider} from 'react-redux';
import store from './store'
import Login from './components/auth/Login';
import Alert from "./components/layouts/Alert";
import {loadUser} from "./reducers/authReducer";
import setAuthToken from "./utils/setAuthToken";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateProfile from './components/profile-forms/CreateProfile'
import EditProfile from "./components/profile-forms/EditProfile";
if(localStorage.token){
    setAuthToken(localStorage.token)
}

const App = () => {
    useEffect(()=>{
        store.dispatch(loadUser())
    },[])
    return (
        <Provider store={store}>
            <Router>
                <>
                    <Navbar/>
                    <Route exact path='/' component={Landing}/>

                    <section className={"container"}>
                        <Alert/>
                        <Switch>
                            <Route exact path='/register' component={Register}/>
                            <Route exact path='/login' component={Login}/>
                            <PrivateRoute exact path={'/dashboard'} component={Dashboard}/>
                            <PrivateRoute exact path={'/create-profile'} component={CreateProfile}/>
                            <PrivateRoute exact path={'/edit-profile'} component={EditProfile}/>
                        </Switch>
                    </section>
                </>
            </Router>
        </Provider>
    );
}

export default App;
