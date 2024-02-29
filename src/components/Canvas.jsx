import { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    doCanvas(canvasRef)

    // context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} {...props} />
    </>
  );
};

const doCanvas = (canvasReference) => {
  const canvas = canvasReference.current;
  const pixelRatio = devicePixelRatio || 1;
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";
  const width = window.innerWidth * pixelRatio;
  const height = window.innerHeight * pixelRatio;
  canvas.width = width;
  canvas.height =height;
  canvas.style.backgroundColor="black";

  const context = canvas.getContext("2d");

  const cellSize = 100;

  // const cellHorizCount = width / cellSize;
  // const cellVertCount = height / cellSize;



  context.beginPath();
  let delX;
  let delY;

  for (let i = 0; i < width; i += cellSize) {
    for (let j = 0; j < height; j += cellSize) {
      context.strokeStyle = "red";
      context.moveTo(i, j);
      delX = Math.sin(i / cellSize)*cellSize;
      delY = Math.cos(i / cellSize)*cellSize;
      context.lineTo(i + delX, j + delY);
      context.stroke();
      
      
      
    }
  }




  // context.strokeStyle = "red";
  // // context.beginPath();
  // context.strokeStyle = "red";
  // context.moveTo(100, 100);
  // context.lineTo(300, 400);
  // context.stroke();

}








export default Canvas;
