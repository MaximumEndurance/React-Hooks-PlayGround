import React, { useState, useEffect } from "react";

const getRandomData = async () => {
  fetch("https://randomuser.me/api")
    .then((response) => response.json())
    .then(
      (data) => {
        console.log(data);
        return JSON.stringify(data);
      },
      (reject) => {
        return "Whoopsy";
      }
    );
};

const getMovies = async () => {
  fetch("http://example.com/movies.json")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [apiInfo, setApiInfo] = useState("");

  useEffect(() => {
    getMovies().then((response) => {
      console.log("Res " + response);
      setApiInfo(response);
    });
    getRandomData().then((response) => {
      console.log("Res " + response);
      setApiInfo(response || "Nada");
    });
  }, []);

  return (
    <div>
      <p>You have clicked {count} times. </p>
      <pre>{apiInfo}</pre>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      {/* <button onClick = {() => }>Get Random Data</button> */}
    </div>
  );
};
