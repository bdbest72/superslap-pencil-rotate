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

  const handleCanvasClick=(event)=>{
    if (!pencilObj.gameStart) {
      pencilObj.gameStart = true;
    } else {
      pencilObj.gameStart = false;
      pencilObj.speed = 1;
    }
    
  }

  useEffect(()=>{
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.save();

      if (pencilObj.speed === 0) {
        ctx.font = "30px Arial";
        ctx.fillText("다시 플레이하려면 클릭!", 70, 430);
      }

      if (pencilObj.gameStart){
        pencilRotation(ctx, pencilObj, image);
      } else {
        ctx.font = "30px Arial";
        ctx.fillText("연필을 클릭하시면 돕니다!", 70, 430);
      }
      console.log(pencilObj.gameStart);

      // image.onload = () => {
      //   ctx.drawImage(image, pencilObj.x, pencilObj.y, pencilObj.width, pencilObj.height);
      // };

      // Pencil draw
      ctx.drawImage(image, pencilObj.x, pencilObj.y, pencilObj.width, pencilObj.height);
      ctx.restore();

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
            onClick={handleCanvasClick}
            height="500px" 
            width="500px" />
        </div>
      </div>
    </div>
  );
}

export default App;
