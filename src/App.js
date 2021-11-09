import './App.css';
import React, {useEffect, useRef} from 'react';
// import pencilImage from './gameResource/pencil.png';
import data from "./data"
import { pencilRotation } from './pencilRotate';

let { pencilObj } = data;

function App() {
  const canvasRef = useRef(null);

  // image loading
  // 여기서 로딩이 끝나기에 다시 drawImage에서 onload를 콜할 필요가 없음
  const image = new Image();
  image.src = 'pencil.png';

  useEffect(()=>{
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ctx.save();
      pencilRotation(ctx, pencilObj, image);
      // ctx.restore();

      // ctx.fillStyle = 'red';
      // ctx.fillRect(80, 60, 140, 30);

      // image.onload = () => {
      //   ctx.drawImage(image, pencilObj.x, pencilObj.y, pencilObj.width, pencilObj.height);
      // };

      // Pencil draw
      ctx.drawImage(image, pencilObj.x, pencilObj.y, pencilObj.width, pencilObj.height);

      requestAnimationFrame(render);

    };
    render();
    

  });

  return (
    <div className="App">
      <div>
        <h1>게임 정보</h1>
      </div>
      <div>
        <h1> 게임판</h1>
        <div>
          <canvas 
            id="canvas"
            ref = {canvasRef}
            height="500px" 
            width="500px" />
        </div>
      </div>
    </div>
  );
}

export default App;
