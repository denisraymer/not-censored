import React from 'react';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Store from "./pages/Store";
import Editor from "./pages/Editor";

function App() {
    return (
        <div className='main'>
            <Router>
                <NavigationBar/>
                <div className='content'>
                    <Switch>
                        <Route path='/' component={Editor} exact/>
                        <Route path='/about' component={About}/>
                        <Route path='/font-in-se' component={Gallery}/>
                        <Route path='/store' component={Store}/>
                    </Switch>
                </div>
                <Footer/>
            </Router>
        </div>
    )
}

export default App
