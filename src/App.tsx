import { FC } from "react";
import Container from "react-bootstrap/Container";
import { SendForm } from "./components/SendForm";
import { Params } from "./components/Params";

const App: FC = () => {
  return (
    <>
      <Container className="mt-5 mb-5">
        <SendForm />
        <Params />
      </Container>
    </>
  );
};

export default App;
