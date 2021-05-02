export default function apiCall(url = "", method = "GET", body = {}) {
  let body1;
  if (method === "POST" || method === "PUT") {
    body1 = JSON.stringify(body);
  }
  return fetch(url, {
    method: method,
    body: body1,
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  })
    .then((res) => {
      if (res.status >= 400) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .catch((err) => {
      throw new Error(err.message);
    });
}
