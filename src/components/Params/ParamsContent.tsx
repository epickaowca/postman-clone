import { FC } from "react";
import TabContent from "react-bootstrap/TabContent";
import Button from "react-bootstrap/Button";
import { ParamField } from "./ParamField";

type ParamsContentProps = {
  fields: number[];
  setFields: React.Dispatch<React.SetStateAction<number[]>>;
  innerRef: React.MutableRefObject<null>;
};

export const ParamsContent: FC<ParamsContentProps> = ({
  fields,
  setFields,
  innerRef,
}) => {
  return (
    <TabContent ref={innerRef} className="p-3 border-top-0 border mt-0">
      {fields.map((param) => (
        <ParamField
          key={param}
          onRemove={() => setFields((prev) => prev.filter((p) => p !== param))}
        />
      ))}

      <Button
        onClick={() =>
          setFields((prev) => {
            if (prev.length) {
              return [...prev, prev[prev.length - 1] + 1];
            } else {
              return [1];
            }
          })
        }
        size="lg"
        variant="outline-secondary"
        className="mt-1"
      >
        Add
      </Button>
    </TabContent>
  );
};
