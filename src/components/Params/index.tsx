import { FC, useState, useRef, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { ParamsContent } from "./ParamsContent";
import { PARAM_FIELD_CLASS } from "./ParamField";

type Obj = { [key: string]: string };

type ParamsProps = {
  sendAllParams: (p: any) => void;
  request: any;
};

export const Params: FC<ParamsProps> = ({ sendAllParams, request }) => {
  const [paramFields, setParamFields] = useState([1]);
  const [headersFields, setHeadersFields] = useState([1]);
  const queryParamRef = useRef(null);
  const headersRef = useRef(null);

  useEffect(
    function onRequest() {
      if (
        request.url !== "" &&
        request.method !== "" &&
        queryParamRef.current
      ) {
        let params: { params: Obj; headers: Obj } = { headers: {}, params: {} };
        const refArr = [
          { ref: queryParamRef, name: "params" },
          { ref: headersRef, name: "headers" },
        ];

        for (let item of refArr) {
          const paramsContainer = item.ref.current as unknown as HTMLDivElement;
          const paramsChildren = Array.from(
            paramsContainer.querySelectorAll(`.${PARAM_FIELD_CLASS}`)
          );
          paramsChildren.map((child) => {
            const key = (
              child.querySelector(
                "input[placeholder='Key']"
              ) as HTMLInputElement
            ).value;
            const value = (
              child.querySelector(
                "input[placeholder='Value']"
              ) as HTMLInputElement
            ).value;

            if (key !== "" && value !== "") {
              //@ts-ignore
              params[item.name] = { ...params[item.name], ...{ [key]: value } };
            }
          });
        }
        sendAllParams(params);
      }
    },
    [request]
  );

  return (
    <Tabs
      className="h5 fw-normal mt-5"
      defaultActiveKey="Query Params"
      id="uncontrolled-tab-example"
    >
      <Tab eventKey="Query Params" title="Query Params">
        <ParamsContent
          innerRef={queryParamRef}
          fields={paramFields}
          setFields={setParamFields}
        />
      </Tab>
      <Tab eventKey="Headers" title="Headers">
        <ParamsContent
          innerRef={headersRef}
          fields={headersFields}
          setFields={setHeadersFields}
        />
      </Tab>
      <Tab eventKey="contact" title="Contact">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
};
