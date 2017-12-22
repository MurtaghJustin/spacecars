module Battlecars {
export class Character extends Sprite {
    public xVel = 0;
    public yVel = 0;

    private maxXV = 20;
    private maxYV = 10;
    
    constructor(
        width: number,
        height: number,
        x: number,
        y: number,
        xBound: number,
        yBound: number,
        private leftImage: HTMLImageElement,
        private rightImage: HTMLImageElement,
        private facingLeft: boolean = false
    ) {
        super(width, height, x, y, xBound, yBound);
    }

    public setBounds(x: number, y: number) {
        this.xBound = x;
        this.yBound = y;
    }

    public move(up: boolean, left: boolean, right: boolean) {
        if (up) this.jump();
        if (left) this.left();
        if (right) this.right();
        this.updatePos();
        this.gravity();
    }

    public updatePos() {
        this.x += this.xVel;
        this.y += this.yVel;

        if (this.getRightBound() < 0)
            this.x += (this.xBound + this.width);
        if (this.getLeftBound() > this.xBound)
            this.x -= (this.xBound + this.width);
        if (this.getBottomBound() < 0)
            this.y += (this.yBound + this.height);
        if (this.getTopBound() > this.yBound)
            this.y -= (this.yBound + this.height);
    }

    public getSprite() {
        return this.facingLeft ? this.leftImage : this.rightImage;
    }

    public getLeftBound() {
        return this.x;
    }

    public getRightBound() {
        return this.x + this.width;
    }

    public getBottomBound() {
        return this.y + this.height;
    }

    public getTopBound() {
        return this.y;
    }

    public jump() {
        if (this.yVel < this.maxYV) {
            this.yVel--;
        }
    }

    /**
     * This applies friction slowdown and gravity slowdown (in the x and y directions, respectively)
     */
    public gravity() {
        if (this.xVel > 0) this.xVel -= 0.25;
        if (this.xVel < 0) this.xVel += 0.25;
        if (this.yVel < 0) this.yVel += 0.5;
        else if (this.yVel < 5) this.yVel += 0.15;
    }

    public left() {
        if (this.xVel > (-1 * this.maxXV))
            this.xVel--;

        this.facingLeft = true;
    }

    public right() {
        if (this.xVel < this.maxXV)
            this.xVel++;

        this.facingLeft = false;
    }
}
}