import React, { useState } from 'react';

function Body() {
  const GameComponent = () => {
    const [number, setNumber] = useState(2);

    const random = () => {
  document.getElementById('verifyButton').removeAttribute("disabled");
  document.getElementById("verifyButton").innerHTML="Verify";
      const diceValues = ['', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
      const diceRoll = Math.ceil(Math.random() * 6);

      const newNumber = number + diceRoll <= 80 ? number + diceRoll : number;

      setNumber(newNumber);
      
      document.getElementById('dice').innerHTML = diceValues[diceRoll];
      document.getElementById('dice').setAttribute("disabled","disabled");
    };

    const renderBoardBoxes = () => {
      const boardBoxes = [];

      var tempHoldRow = 0; 
      var tempHoldCol = 0;
      for (let i = 81; i >= 1; i--) {
        var subclass="";
        if( tempHoldRow < 9 && tempHoldCol === 0){
          subclass = 'right';
          tempHoldRow +=1;
          if (tempHoldRow === 9){
            tempHoldCol = 1;
            tempHoldRow = 0;
          }
        }
        else if(tempHoldRow < 9 && tempHoldCol === 1){
          subclass = 'left'; 
          tempHoldRow +=1;
          if (tempHoldRow === 9){
            tempHoldCol = 0;
            tempHoldRow = 0;
          }
          }
        const classNames = `boardbox ${subclass}`;
        const imgSrc =
          i === number
            ? 'https://img.icons8.com/emoji/48/rocket-emji.png'
            : '';

        boardBoxes.push(
          <div className={classNames} key={i}>
            {imgSrc && <img className="img" id='pawn' src={imgSrc} alt="" />}
          </div>
        );
      }
      if (number >= 80){
        document.getElementById("diceholder").innerHTML = "<h1 style='color:white'>You Won</h1>"
      }
      return boardBoxes;
    };

    return (
      <div>
        <div className="out">{renderBoardBoxes()}</div>
        <div className="mn"></div>
        <br />
        <center>
          <br />
         <div id="diceholder">
         <button id="dice" onClick={random}>
            <h4>Press Here</h4>
          </button>
         </div>
        </center>
      </div>
    );
  };
const unlockButton = () =>{
  document.getElementById('dice').removeAttribute("disabled");
  document.getElementById("verifyButton").innerHTML="Verified !";
  document.getElementById('verifyButton').setAttribute("disabled","disabled");
  
}
  const divStyle = {
    backgroundImage: 'url("./images/bg.jpg")',
   
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  };
  const navbarStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100vw',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Adjust the transparency here (0.8 represents 80% opacity)
    backdropFilter: 'blur(10px)', // Add a blur effect
  };

  return (
    <div>
      <div style={divStyle}>
        <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md navbar-expand navbar-primary sticky-top" style={navbarStyle}>
          <ul className="navbar-nav mr-auto" style={{ margin: 'auto' }}>
            <li className="nav-link active">
              <img src="./images/clublogo.png" width={'110%'} alt="Club Logo" />
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '300px', height: '50px', marginTop: "2px", borderRadius: "50px", fontWeight: 'bold' }}
          >
            Player Name: <span id="playerName"> REMOTE_NAME </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav"></div>
        </nav>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <br />
          <button
            type="button"
            className="btn btn"
            style={{alignItems:"center", width: '50vw', height: 'auto', margin:0, borderRadius: "25px", fontWeight: 'bold', color:"#0B5ED7", backgroundColor:"white" }}
          >
            <a className="navbar-brand" href="#" style={{ color: "white", fontWeight: 'bold',fontSize: '2rem'  }}>
              ऐlaan
            </a>
          </button>
          <br />
          <br />
          <div
            className="card mx-auto"
            style={{ width: '90vw', alignItems: 'center', justifyContent: 'center', borderRadius:"10px", borderColor:"white" ,  backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(5px)',}}
          >
            <div className="card-body">
              <h2 className="card-title" style={{color:"white"}}>Message Box</h2>
              <p className="card-text">
                <span id="taskMessage" style={{color:"white", fontSize:"1.3rem"}}>Display Message here from Backend!</span>
              </p>
            </div>
          </div>
          <br />
        </div>
        <div style={{ textAlign: 'center' }}>
          <style>
            {`
            h2 {
              text-align: center;
              padding: 6px;
              color: white;
            }
            .out {
              height: 100vw;
              width: 100vw;
              background-image: url("./images/board.jpg");
              background-size: 100vw 100vw;
              background-repeat: no-repeat;
              float: center;
            }
            .mn {
              position: absolute;
              top: 90px;
              left: 20px;
            }
            #side {
              height: 500px;
              width: 200px;
              margin-left: 500px;
            }
            .btn {
              height: 40px;
              width: 100px;
              margin-left: 50px;
              margin-top: 50px;
              border-radius: 5px;
              color: white;
            }
            .boardbox {
              height: calc(100vw/9);
              width: calc(100vw/9);
              z-index: -1;
            }
            .left {
              float: left;
            }
            .right {
              float: right;
            }
            .img {
              height: auto;
              width: calc(100vw/9);
              margin: 2px 0px 3px 0px;
            }
            #dice {
              height: 80px;
              width: 80px;
              font-size: 70px;
              display: flex;
              color: white;
              margin: auto;
              border: none;
              align-items: center;
              justify-content: center;
              align-content: center;
              border-radius: 10%;
              background-color: white;
            }
            #dice:disabled{
              color:#c1bbbb;
            }
          `}
          </style>
          <GameComponent />
          <br/>
          <div style={{ textAlign: 'center', color: 'white'}}>

<br></br>
<h2>Teammates</h2>
<div className="card mx-auto" style={{ width: '18rem', alignItems: 'center', justifyContent: 'center' }}>
  <div className="card-body">
  <h5 className="card-title">Team ID: TEAM_ID</h5>
    <p className="card-text"><span id="taskMessage">TEAMMATES</span></p>
  </div>
</div>
<br></br>
</div>
          <br/>
          <div style={{ color: 'white', textAlign: 'center', fontSize:"1.5rem" }}>
            <h2>Directions</h2>
            <br/>

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <div className="card" style={{ width: '4.5rem', margin: '0 5px', borderRadius: '50%' , backgroundColor:"#0B5ED7", color:"white"}}>
    <div className="card-body">
      <h3 className="card-title"  style={{ fontWeight: 'bold'}}>&uarr;</h3>
    </div>
  </div><br/>&nbsp;&nbsp;&nbsp;
  <div className="card" style={{ width: '4.5rem', margin: '0 0 0 -5px', borderRadius: '50%',  backgroundColor:"#0B5ED7", color:"white" }}>
    <div className="card-body">
      <h3 className="card-title" style={{ fontWeight: 'bold'}}>&darr;</h3>
    </div>
  </div>
</div>
<br/>
<button id='verifyButton' onClick={unlockButton} style={{padding:"2.5% 4%", border:"none", height:"auto", width:"auto", borderRadius:"10px", textAlign:"center", fontSize:"1rem"}}>Verify</button>

<br/>
<br/>
<br/>
<center><h5>Made by Tech Team - iOS Club !</h5></center>
<br/>
<br/>
<br/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
