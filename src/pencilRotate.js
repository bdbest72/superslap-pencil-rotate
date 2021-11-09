export function pencilRotation(ctx, pencilObj, image) {
    
    let data = new Pencil (pencilObj.x, pencilObj.y, pencilObj.width, pencilObj.height, pencilObj.degree);
    data.draw(ctx, image);
    
    // pencil rotate speed
    // pencilObj.degree += 0.01;

}

class Pencil {
    // constructor(x,y,width,height,degree){
    //     this.x = x;
    //     this.y = y;
    //     this.Height = height;
    //     this.Width = width;
    //     this.degree = degree;
    // }

    draw(ctx, image) {
        

        ctx.translate(250, 250);
        ctx.rotate(this.degree * Math.PI / 180);
        ctx.translate(-250, -250);

        // pencil image loading
        // image.onload = () => {
        //     ctx.drawImage(image, this.x, this.y, this.Width, this.Height);
        // };
        // ctx.drawImage(image, this.x, this.y, this.Width, this.Height);
    }
}