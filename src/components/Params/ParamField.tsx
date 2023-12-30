import { FC } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

type ParamFieldProps = {
  onRemove: () => void;
};

export const PARAM_FIELD_CLASS = "paramField";

export const ParamField: FC<ParamFieldProps> = ({ onRemove }) => {
  return (
    <InputGroup className={`mb-3 ${PARAM_FIELD_CLASS}`}>
      <Form.Control size="lg" type="input" placeholder="Key" />
      <Form.Control size="lg" type="input" placeholder="Value" />
      <Button size="lg" variant="outline-danger" onClick={onRemove}>
        Remove
      </Button>
    </InputGroup>
  );
};
