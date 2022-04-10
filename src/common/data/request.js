import axios from "axios";

export default function request(url, method = GET, headers = {}, data) {

    return axios({ data, headers, method, url })
        .then(checkStatus)
        .then((response) => response.data)
        .catch((error) => {
        const message = `Fetch error: ${method} ${url}`;
        console.error(message, error);
        throw error;
    });
}

function checkStatus(response) {
    const isRequestSuccessful = response.status >= 200 && response.status < 300;
  
    if (isRequestSuccessful) {
        return response;
    } else {
        throw new Error(response);
    }
  }

//const DELETE = "DELETE";
const GET = "GET";
//const PATCH = "PATCH";
//const POST = "POST";
//const PUT = "PUT";