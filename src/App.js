import React, { useState, useEffect } from "react";
import "./App.scss";

const images = [
  "https://images.pexels.com/photos/3617536/pexels-photo-3617536.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/3592799/pexels-photo-3592799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/3484702/pexels-photo-3484702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/3600101/pexels-photo-3600101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
];

const elements = [
  { className: "img1 a" },
  { className: "img2 b" },
  { className: "img3 c" },
  { className: "img4 d" }
];

const App = () => {
  const [url, setUrl] = useState(images[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      const idx = images.indexOf(url) + 1;
      idx >= 0 && idx < images.length ? setUrl(images[idx]) : setUrl(images[0]);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <section className="main">
      <div className="container">
        <div className="img-container">
          {elements.map((ele, idx) => (
            <div
              key={idx}
              className={ele.className}
              style={{ background: `50%/cover no-repeat url(${url})` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
