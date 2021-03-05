import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";

import DataTable from "./Table";
import Copyright from "./utils/Copyright";
import Game from "./Game";
import SignIn from "./SignIn";

export default function Home() {
  const [balance, setBalance] = useState(99.99);
  const [connected, setConnection] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openGame, setOpenGame] = useState(false);
  const [user, setUsername] = useState("");
  const [realData, setRealData] = useState([]);

  const handleOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleOpenGame = () => {
    setOpenGame(true);
  };

  const handleCloseGame = () => {
    setOpenGame(false);
  };

  const populateTable = (data) => {
    data.splice(0, 1);
    console.log("data populateTable: ", data);
    setRealData((realData) => [...realData.concat(data)]);
  };

  const freeMoney = () => {
    setBalance(balance + 10);
  };

  const reduceBalance = () => {
    setBalance(balance - 1);
  };

  const incrementBalance = (num) => {
    setBalance(balance + num);
  };

  const handleChange = (e) => {
    let value = e.target.value;
    setUsername(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConnection(true);
  };

  const closeConnection = (e) => {
    e.preventDefault();
    setUsername("");
    setBalance(99.99);
    setOpenLogin(false);
    setConnection(false);
    setRealData([]);
  };

  // eslint-disable-next-line no-unused-vars
  const exampleRows = [
    { id: 1, "Slot 1": 7, "Slot 2": 7, "Slot 3": 7, date: "2017-05-24" },
    { id: 2, "Slot 1": 7, "Slot 2": 7, "Slot 3": 7, date: "2017-05-24" },
    { id: 3, "Slot 1": 7, "Slot 2": 7, "Slot 3": 7, date: "2017-05-24" },
    { id: 4, "Slot 1": 7, "Slot 2": 7, "Slot 3": 7, date: "2017-05-24" },
    { id: 5, "Slot 1": 7, "Slot 2": 7, "Slot 3": 7, date: "2017-05-24" },
    { id: 6, "Slot 1": 7, "Slot 2": 7, "Slot 3": 7, date: "2017-05-24" },
    { id: 7, "Slot 1": 7, "Slot 2": 7, "Slot 3": 7, date: "2017-05-24" },
    { id: 8, "Slot 1": 7, "Slot 2": 7, "Slot 3": 7, date: "2017-05-24" },
    { id: 9, "Slot 1": 7, "Slot 2": 7, "Slot 3": 7, date: "2017-05-24" },
    { id: 10, "Slot 1": 7, "Slot 2": 7, "Slot 3": 7, date: "2017-05-24" },
    { id: 11, "Slot 1": 7, "Slot 2": 7, "Slot 3": 7, date: "2017-05-24" },
  ];

  return (
    <div>
      <header className="App-header">
        <div className="col1">
          <div>
            <img
              className="App-logo"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.designevo.com%2Fres%2Ftemplates%2Fthumb_small%2Fpoker-and-casino-jeton.png&f=1&nofb=1"
              alt="Logo"
            />
          </div>
          <div className="App-name">Casino Name</div>
        </div>
        <div className="col2">
          <div className="App-balance">
            {user} Balance: ${balance}
          </div>
          {connected === true ? (
            <div className="App-avatar">
              <div className="container">
                <img
                  className="image"
                  src="https://www.shareicon.net/data/2016/08/05/806962_user_512x512.png"
                  alt="Avatar"
                />
                <div className="overlay">
                  <div className="text" onClick={closeConnection}>
                    Click to checkout
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="App-login">
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleOpenLogin}
              >
                Login
              </Button>
              <Modal open={openLogin} onClose={handleCloseLogin}>
                {<SignIn handleChange={handleChange} handleSubmit={handleSubmit} />}
              </Modal>
            </div>
          )}
        </div>
      </header>
      <div className="App-content">
        <div className="table">
          {console.log("realData before DataTable: ", realData)}
          <DataTable rows={realData} />
        </div>
        <div className="Magic-money">
          <Button color="primary" size="large" onClick={() => setBalance(balance + 1)}>
            Click me to add $1 to your balance (free magic money)
          </Button>
          <Button color="primary" size="large" onClick={handleOpenGame}>
            Start the Game
          </Button>
          <Modal open={openGame} onClose={handleCloseGame}>
            <div className="game">
              {
                <Game
                  balance={balance}
                  reduceBalance={reduceBalance}
                  incrementBalance={incrementBalance}
                  freeMoney={freeMoney}
                  handleCloseGame={handleCloseGame}
                  populateTable={populateTable}
                />
              }
            </div>
          </Modal>
        </div>
      </div>
      <div className="App-footer">
        A Beautifut Footer
        <Copyright />
      </div>
    </div>
  );
}
