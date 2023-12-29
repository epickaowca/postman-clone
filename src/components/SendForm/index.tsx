import { FC } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

export const SendForm: FC = () => {
  return (
    <Form>
      <InputGroup className="mb-4">
        <Form.Select
          size="lg"
          className="flex-grow-0 w-auto"
          aria-label="Default select example"
          defaultValue="GET"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
          <option value="DELETE">DELETE</option>
        </Form.Select>
        <Form.Control
          size="lg"
          type="input"
          placeholder="https://example.com"
        />
        <Button size="lg" variant="primary" type="submit">
          Submit
        </Button>
      </InputGroup>
    </Form>
  );
};
