import { FC, useState } from "react";
import Container from "react-bootstrap/Container";
import { SendForm, SendFormProps } from "./components/SendForm";
import { Params } from "./components/Params";
import { Response } from "./components/Response";
import { postmanRequest } from "./services/request";

const App: FC = () => {
  const [request, setRequest] = useState({ url: "", method: "" });
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendFormHandler: SendFormProps["onSubmit"] = ({ url, method }) => {
    setRequest({ url, method });
  };

  const getAllParams = async (props: any) => {
    try {
      const start = Date.now();
      setIsLoading(true);
      const requestAxios = await postmanRequest({
        method: request.method,
        url: request.url,
        headers: props.headers,
        params: props.params,
      });
      const finish = Date.now();
      const time = (finish - start) / 1000;
      const headers = Object.entries(requestAxios.headers);
      const { data, status } = requestAxios;
      const size = JSON.stringify(data).length + JSON.stringify(headers).length;
      setError(undefined);
      setResponse({ headers, data, info: { time, status, size } });
      setIsLoading(false);
    } catch (err: any) {
      setResponse(undefined);
      setError({ message: err.message, code: err.code });
      setIsLoading(false);
    }
  };

  return (
    <>
      <Container className="mt-5 mb-5">
        <SendForm isLoading={isLoading} onSubmit={sendFormHandler} />
        <Params request={request} sendAllParams={getAllParams} />

        {error ? (
          <Response type="error" code={error.code} message={error.message} />
        ) : (
          response && (
            <Response
              type="success"
              headersArr={response.headers}
              responseBody={response.data}
              info={response.info}
            />
          )
        )}
      </Container>
    </>
  );
};

export default App;
