import { FC } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

export type SendFormProps = {
  onSubmit: (props: { url: string; method: string }) => void;
  isLoading: boolean;
};

export const SendForm: FC<SendFormProps> = ({ onSubmit, isLoading }) => {
  return (
    <Form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const input = form.querySelector("input")!;
        const select = form.querySelector("select")!;
        onSubmit({ url: input.value, method: select.value });
      }}
    >
      <InputGroup className="mb-4">
        <Form.Select
          size="lg"
          className="flex-grow-0 w-auto"
          aria-label="select "
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
        <Button disabled={isLoading} size="lg" variant="primary" type="submit">
          Submit
        </Button>
      </InputGroup>
    </Form>
  );
};
