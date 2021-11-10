const getRandom = (min, max) => Math.random() * (max - min) + min;

export default {
    pencilObj: {
        x: 100,
        y: 100,
        width: 300,
        height: 300,
        degree: 0,
        speed: 1,
        rotationTime: 1,
        
        /* Note
        speed range: 0~5
        rotation range per time: 0~1.3 is one cycle
        */
        maxTime: (5 + getRandom(0, 1.3)) * 60,
        maxSpeed: 10,
        
        gameStart: false,
    }
}