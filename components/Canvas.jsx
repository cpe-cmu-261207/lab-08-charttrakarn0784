import React, { useContext } from "react";
import { PainterContext } from "../contexts/PainterContext";
import Cell from "./Cell";

//This file is already perfect
//You dont have too edit this file
export default function Canvas() {
  const { pixels } = useContext(PainterContext);
  return (
    <div className="m-4">
      {pixels.map((row, i) => (
        <div className="d-flex justify-content-center" key={i}>
          {row.map((cell, j) => (
            <Cell key={j} xPos={j} yPos={i} />
          ))}
        </div>
      ))}
    </div>
  );
}
