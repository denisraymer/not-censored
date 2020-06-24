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
                    <Route path='/about' exact component={About}/>
                    <Route path='/about/:id' render={({match}) => {
                        return <h1>H1</h1>
                    }}/>
                    <Route path='/' component={Editor} exact/>
                    <Route path='/font-in-se' component={Gallery}/>
                    <Route path='/store' component={Store}/>
                    <div className='copyright'/>
                </div>
                <Footer/>
            </Router>
        </div>
    )
}

export default App
