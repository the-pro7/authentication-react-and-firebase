import { useState } from "react";
import { Container } from "react-bootstrap";
import SignUp from "./SignUp";

function App() {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center mt-5">
        <div className="action-form w-100" style={{maxWidth: "450px"}}>
          <SignUp />
        </div>
      </Container>
    </>
  );
}

export default App;
