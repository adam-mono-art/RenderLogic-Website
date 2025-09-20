import React from "react";

export const Standard = () => {
  return (
    <section className="standard-section" aria-labelledby="standard-heading">
      <div className="container p-5 pt-0 pb-0">
        <div>
          <h2 id="standard-heading" className="standard-title">
            Standard Page
          </h2>
          <p className="standard-body">here is the body</p>

          <h3 className="standard-subhead">List here</h3>
          <ul className="standard-list">
            <li>Bullet 1</li>
            <li>Bullet 2</li>
            <li>Bullet 3</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
