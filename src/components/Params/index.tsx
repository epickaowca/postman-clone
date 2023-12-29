import { FC, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { ParamsContent } from "./ParamsContent";

export const Params: FC = () => {
  const [paramFields, setParamFields] = useState([1]);
  const [headersFields, setHeadersFields] = useState([1]);
  return (
    <Tabs
      className="h5 fw-normal mt-5"
      defaultActiveKey="Query Params"
      id="uncontrolled-tab-example"
    >
      <Tab eventKey="Query Params" title="Query Params">
        <ParamsContent fields={paramFields} setFields={setParamFields} />
      </Tab>
      <Tab eventKey="Headers" title="Headers">
        <ParamsContent fields={headersFields} setFields={setHeadersFields} />
      </Tab>
      <Tab eventKey="contact" title="Contact">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
};
