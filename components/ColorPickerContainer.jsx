import React, { useContext } from "react";
import ColorPicker from "./ColorPicker";

//This file is already perfect
//You dont have too edit this file
export default function ColorPickerContainer() {
  return (
    <div>
      <div className="d-flex gap-2 mb-2 justify-content-center">
        <ColorPicker color="#000000" />
        <ColorPicker color="#804000" />
        <ColorPicker color="#FE0000" />
        <ColorPicker color="#FE6A00" />
        <ColorPicker color="#FFD800" />
        <ColorPicker color="#00FF01" />
      </div>
      <div className="d-flex gap-2 justify-content-center">
        <ColorPicker color="#FFFFFF" />
        <ColorPicker color="#01FFFF" />
        <ColorPicker color="#0094FE" />
        <ColorPicker color="#0026FF" />
        <ColorPicker color="#B100FE" />
        <ColorPicker color="#FF006E" />
      </div>
    </div>
  );
}
