import axios, { AxiosRequestConfig, AxiosHeaders } from "axios";

function makeRequest(
  url: string,
  options?: AxiosRequestConfig<any> | undefined
) {
  return axios(url, options)
    .then((res) => res)
    .catch((error) => Promise.reject(error ?? "Error"));
}

export const postmanRequest: PostmanRequest = ({
  method,
  url,
  params,
  headers,
}) => {
  return makeRequest(url, {
    method,
    data: params,
    headers,
  });
};

type PostmanRequest = ({
  method,
  url,
  params,
  headers,
}: {
  method: string;
  url: string;
  params: string;
  headers: AxiosHeaders;
}) => Promise<any>;
