import React, { useEffect, useState } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Game({
  balance,
  reduceBalance,
  incrementBalance,
  freeMoney,
  handleCloseGame,
  populateTable,
}) {
  const classes = useStyles();
  const [id, setId] = useState(1);
  const [row, setRow] = useState([]);
  const [randomRow, setRandomRow] = useState({
    id: 0,
    "Slot 1": 0,
    "Slot 2": 0,
    "Slot 3": 0,
    date: "1987-05-13",
  });

  function createData(slot1, slot2, slot3) {
    return { slot1, slot2, slot3 };
  }

  const play = async () => {
    let changeColor = document.getElementById("color");

    let randomData = await createData(
      Math.ceil(Math.random() * 9),
      Math.ceil(Math.random() * 9),
      Math.ceil(Math.random() * 9)
    );
    if (randomData.slot1 === 7 && randomData.slot2 === 7 && randomData.slot3 === 7) {
      changeColor.style.color = "green";
      incrementBalance(10);
    } else if (
      randomData.slot1 === randomData.slot2 &&
      randomData.slot2 === randomData.slot3
    ) {
      changeColor.style.color = "green";
      incrementBalance(5);
    } else if (
      randomData.slot1 === randomData.slot2 ||
      randomData.slot2 === randomData.slot3
    ) {
      changeColor.style.color = "green";
      incrementBalance(0.5);
    } else {
      changeColor.style.color = "red";
      reduceBalance();
    }
    randomData.id = id;
    setId(id + 1);

    randomData.date = new Date();
    return setRandomRow(randomData);
  };

  useEffect(() => {
    setRow((row) => [...row, randomRow]);
  }, [randomRow]);

  console.log("randomRow :", randomRow);
  console.log("row :", row);

  return (
    <div>
      <TableContainer component={Paper}>
        <p id="color">Balance left: {balance}</p>
        <Table aria-label="simple table" key={id}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Slot 1</TableCell>
              <TableCell align="center">Slot 2</TableCell>
              <TableCell align="center">Slot 3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {row.map((data) => (
              <TableRow key={data.id}>
                <TableCell align="center">{data.slot1}</TableCell>
                <TableCell align="center">{data.slot2}</TableCell>
                <TableCell align="center">{data.slot3}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.root}>
        <Button variant="contained" color="primary" onClick={() => play()}>
          Press to Play!
        </Button>
        <Button variant="contained" color="primary" onClick={freeMoney}>
          Free Money again (Debug)!
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            populateTable(row);
            handleCloseGame();
          }}
        >
          Close Popup!
        </Button>
      </div>
    </div>
  );
}
