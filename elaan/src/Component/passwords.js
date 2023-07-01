import React from "react";
import "./passwords.css";

function Passwords() {
  return (
    <div className="container" style={{ textAlign: "center", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", marginTop:"100px" }}>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTydMJTLALd6Fysk6FEo4cNQe84_TZHlKLO4wiX7X0glz57eZx0V8RFpf9IDcYXgz63ryc&usqp=CAU"
      alt="Background"
    />
    <div className="container" style={{ textAlign: "center" }}>
      <form style={{ borderRadius: "20px", maxWidth: "500px", margin: "0 auto" }}>
        <h1>Hello PLAYERNAME</h1>
        <h3>Please Enter all the answers here:</h3>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label style={{ marginBottom: "10px", display: "block" }}>
              Answer 1:
            </label>
            <input
              type="text"
required
              name="1"
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
required
              name="2"
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
required
              name="3"
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
required
              name="4"
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
required
              name="5"
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
required
              name="6"
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
required
              name="7"
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
          type="submit"
            className="fluid ui button blue"
            style={{
              borderRadius: "20px",
              height: "auto",
              width: "120px",
              margin: "20px auto",
              padding:"1%",
              fontSize:"larger",
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

export default Passwords;