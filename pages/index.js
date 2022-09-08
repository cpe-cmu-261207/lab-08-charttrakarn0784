import ColorPickerContainer from "../components/ColorPickerContainer";
import Header from "../components/Header";
import { PainterContext } from "../contexts/PainterContext";
import { useState } from "react";
import Canvas from "../components/Canvas";
import CanvasLib from "../libs/CanvasLib";

export default function Home() {
  //selected color from color picker
  //set black color as default
  const [selColor, setSelColor] = useState("#000000");

  //16x16 2D Array that holds color data
  const [pixels, setPixels] = useState(CanvasLib.createEmptyCanvas());

  const [intervalId, setIntervalId] = useState(null);

  const [ids, setIds] = useState([]);

  const playDisco = () => {
    const id = setInterval(
      () => setPixels(CanvasLib.createRandomCanvas()),
      100
    );
    setIds([...ids, id]);
  };

  const stopDisco = () => {
    for (const id of ids) clearInterval(id);
  };

  //will be called by Cell component
  const paint = (xPos, yPos) => {
    //copy from old 2d Array
    const newPixels = CanvasLib.copyCanvas(pixels);
    //your code here
    //update newPixels[...][...] xPos, yPos, selColor
    newPixels[yPos][xPos] = selColor;
    //setPixels(...)
    setPixels(newPixels);
  };

  const clear = () => {
    //your code here
    //Hint : use CanvasLib.createEmptyCanvas()
    setPixels(CanvasLib.createEmptyCanvas());
    clearInterval();
  };

  const random = () => {
    setPixels(CanvasLib.createRandomCanvas());
  };

  const disco = () => {
    setInterval(() => setPixels(CanvasLib.createRandomCanvas()), 100);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "GhostWhite" }}>
      <PainterContext.Provider value={{ selColor, setSelColor, pixels, paint }}>
        <Header />
        <ColorPickerContainer />
        <Canvas />

        <div className="d-flex justify-content-center gap-2">
          <button className="btn btn-dark" onClick={clear}>
            Clear
          </button>
          <button className="btn btn-dark" onClick={random}>
            Random Color
          </button>
          <button className="btn btn-dark" onClick={() => playDisco()}>
            Play Disco
          </button>
          <button className="btn btn-dark" onClick={() => stopDisco()}>
            Stop Disco
          </button>
        </div>
      </PainterContext.Provider>
    </div>
  );
}
