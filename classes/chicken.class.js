class Chicken extends MovableObject {
    speed = 0.15;
    isGameCharakter = true;
    
    walkImages = [
        'assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ]

    walkCount = 0;

    constructor() {
        super();
        super.loadImage('assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.x = 200 + Math.random() * 500;
        this.y = 330;
        this.height = 100;
        this.animation();
        this.animationWalk();
        this.speed = 0.15 + Math.random() * 0.5
    }

    animation() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);

    }

    animationWalk() {
        setInterval(() => {
            let index = this.walkCount % this.walkImages.length;
            this.img.src = this.walkImages[index];
            this.walkCount++
        }, 1000 / 8);
    }

    eat() {

    }
}