export const fetchUrl = async (url, type) => {
  const res = await fetch(`https://movie-drive-next.vercel.app/api/${type}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      url,
    }),
  });
  const data = await res.json();
  return data;
};
