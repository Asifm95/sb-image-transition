import React from "react";
import "./App.scss";

const image =
  "https://images.pexels.com/photos/3600101/pexels-photo-3600101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const elements = [
  { className: "img1 a" },
  { className: "img2 b" },
  { className: "img3 c" },
  { className: "img4 d" }
];

const App = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="img-container">
          {elements.map((ele, idx) => (
            <div
              key={idx}
              className={ele.className}
              style={{ background: `50%/cover no-repeat url(${image})` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
