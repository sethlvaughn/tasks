import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.<br></br>Seth Vaughn<br></br>Hello World
            </p>

            <h1>This is a header text</h1>
            <img
                src="./images/software-engineering-banner2400.jpg"
                alt="A picture of software engineering found on google images."
            />
            <ul>
                <li>First element</li>
                <li>Second element</li>
                <li>Third element</li>
            </ul>

            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div className="columnStyle"></div>
                        </Col>
                        <Col>
                            <div className="columnStyle"></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
