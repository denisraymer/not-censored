import React from 'react';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
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
                    <Route path='font-presentation/about' exact component={About}/>
                    <Route path='font-presentation/' component={Editor} exact/>
                    <Route path='font-presentation/font-in-se' component={Gallery}/>
                    <Route path='font-presentation/store' component={Store}/>
                    <div className='copyright'/>
                </div>
                <Footer/>
            </Router>
        </div>
    )
}

export default App
