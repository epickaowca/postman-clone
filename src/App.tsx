import { FC, useState } from "react";
import Container from "react-bootstrap/Container";
import { SendForm, SendFormProps } from "./components/SendForm";
import { Params } from "./components/Params";
import axios from "axios";
import { Response } from "./components/Response";

const App: FC = () => {
  const [request, setRequest] = useState({ url: "", method: "" });
  const [response, setResponse] = useState<any>(null);

  const sendFormHandler: SendFormProps["onSubmit"] = ({ url, method }) => {
    setRequest({ url, method });
  };

  const getAllParams = async (props: any) => {
    try {
      const start = Date.now();

      const requestAxios = await axios({
        method: request.method,
        url: request.url,
        data: props.params,
        headers: props.headers,
      });
      const finish = Date.now();
      const time = (finish - start) / 1000;
      const headers = Object.entries(requestAxios.headers);
      const { data, status } = requestAxios;
      const size = JSON.stringify(data).length + JSON.stringify(headers).length;
      setResponse({ headers, data, info: { time, status, size } });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container className="mt-5 mb-5">
        <SendForm onSubmit={sendFormHandler} />
        <Params request={request} sendAllParams={getAllParams} />
        {response && (
          <Response
            headersArr={response.headers}
            responseBody={response.data}
            info={response.info}
          />
        )}
      </Container>
    </>
  );
};

export default App;
