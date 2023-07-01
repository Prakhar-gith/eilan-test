import React from "react";
import "./passwords.css";

function passwords() {
  return (
    <div className="container" style={{ textAlign: "center", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", marginTop:"100px" }}>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTydMJTLALd6Fysk6FEo4cNQe84_TZHlKLO4wiX7X0glz57eZx0V8RFpf9IDcYXgz63ryc&usqp=CAU"
      alt="Background"
    />
    <div className="container" style={{ textAlign: "center" }}>
      <form style={{ borderRadius: "20px", maxWidth: "500px", margin: "0 auto" }}>
        <h1>Hello PlayerNAME</h1>
        <h3>Please Enter all the answers here:</h3>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
              Answer 1:
            </label>
            <input
              type="text"
              name="password"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
              Answer 2:
            </label>
            <input
              type="text"
              name="password"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
              Answer 3:
            </label>
            <input
              type="text"
              name="password"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
              Answer 4:
            </label>
            <input
              type="text"
              name="password"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
              Answer 5:
            </label>
            <input
              type="text"
              name="password"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
              Answer 6:
            </label>
            <input
              type="text"
              name="password"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
              Answer 7:
            </label>
            <input
              type="text"
              name="password"
              placeholder="Please Enter The Answer"
              style={{
                marginBottom: "10px",
                borderRadius: "20px",
                height: "20px",
                width: "100%",
              }}
            />
          </div>

          <button
            className="fluid ui button blue"
            style={{
              borderRadius: "20px",
              height: "35px",
              width: "150px",
              margin: "20px auto",
              display: "block",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default passwords;
