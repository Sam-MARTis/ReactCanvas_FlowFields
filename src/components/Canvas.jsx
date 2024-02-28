import { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    

    return (
        <>
            <canvas ref={canvasRef} {...props} />
        </>
    )
};
