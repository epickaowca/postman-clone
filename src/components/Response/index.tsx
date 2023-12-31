import { FC } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabContent from "react-bootstrap/TabContent";
import { UnControlled as CodeMirror } from "react-codemirror2";

type ResponseProps = {
  headersArr: string[][];
  responseBody: any;
  info: { status: string; time: string; size: string };
};

export const Response: FC<ResponseProps> = ({ headersArr, responseBody }) => {
  return (
    <div className="mt-5">
      <h3>Response</h3>
      <Row>
        <Col>
          <span className="me-3">Status: 200</span>
          <span className="me-3">Time: 149ms</span>
          <span>Size: 183 B</span>
        </Col>
      </Row>
      <Tabs className="h5 fw-normal mt-5" defaultActiveKey="Body">
        <Tab eventKey="Body" title="Body">
          <TabContent className="p-3 border-top-0 border mt-0">
            <CodeMirror
              value={JSON.stringify(responseBody, null, 2)}
              options={{
                lineNumbers: true,
                disableInput: true,
              }}
            />
          </TabContent>
        </Tab>
        <Tab eventKey="Headers" title="Headers">
          <TabContent className="p-3 border-top-0 border px-5">
            {headersArr.map((res) => {
              const [key, value] = res;
              return (
                <Row key={`${key}${value}`} className="mb-4">
                  <Col md={2}>
                    <span>{key}</span>
                  </Col>
                  <Col className="border">
                    <span>{value}</span>
                  </Col>
                </Row>
              );
            })}
          </TabContent>
        </Tab>
      </Tabs>
    </div>
  );
};
