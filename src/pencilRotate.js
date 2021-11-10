


export function pencilRotation(ctx, pencilObj, image) {
    
    let data = new Pencil (pencilObj.x, pencilObj.y, pencilObj.width, pencilObj.height, pencilObj.degree);
    data.rotate(ctx, image);
    

    const maxSpeed = pencilObj.maxSpeed;
    let decelerationStart = false;
    let maxTime = pencilObj.maxTime;
    /* Note
        speed range: 0~5
        rotation range per time: 0~1.3 is one cycle
    */

    // pencil rotate speed
    pencilObj.degree += pencilObj.speed;

    // 연필 회전
    if (pencilObj.speed > 0) {
        //deceleration trigger
        if (pencilObj.rotationTime > maxTime) {
            decelerationStart = true;
        }
    
        if (decelerationStart === true) {
            pencilObj.speed -= 0.01;
            console.log("slowing");
        } 
        else if (pencilObj.speed < maxSpeed) {
            pencilObj.speed += 0.2;
            console.log("speeding");
        }
        else {
            pencilObj.rotationTime += 1;
            console.log("Rotating");
        }

        // console.log(pencilObj.speed);
        // console.log(maxTime);
    }
    // 연필 정지
    else {
        pencilObj.speed = 0;
        pencilObj.rotationTime = 1;
    }

    
    
    
}

class Pencil {
    constructor(x,y,width,height,degree){
        this.x = x;
        this.y = y;
        this.Height = height;
        this.Width = width;
        this.degree = degree;
    }

    rotate(ctx, image) {
        
        //pencil rotation
        ctx.translate(250, 250);
        ctx.rotate(this.degree * Math.PI / 180);
        ctx.translate(-250, -250);

        //pencil draw
        // ctx.drawImage(image, this.x, this.y, this.Width, this.Height);
    }
}