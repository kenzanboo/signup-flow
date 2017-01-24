import 'whatwg-fetch';

function checkStatus(response) {
  if (response.ok) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
}
