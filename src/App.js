import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Editor from "./pages/Editor";

function App() {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <NavigationBar/>
                        <Editor/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </React.Fragment>
    )
}

export default App
