var Battlecars;
(function (Battlecars) {
    class Character extends Battlecars.Sprite {
        constructor(width, height, x, y, xBound, yBound, leftImage, rightImage, facingLeft = false) {
            super(width, height, x, y, xBound, yBound);
            this.leftImage = leftImage;
            this.rightImage = rightImage;
            this.facingLeft = facingLeft;
            this.xVel = 0;
            this.yVel = 0;
            this.maxXV = 20;
            this.maxYV = 10;
        }
        setBounds(x, y) {
            this.xBound = x;
            this.yBound = y;
        }
        move(up, left, right) {
            if (up)
                this.jump();
            if (left)
                this.left();
            if (right)
                this.right();
            this.updatePos();
            this.gravity();
        }
        updatePos() {
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
        getSprite() {
            return this.facingLeft ? this.leftImage : this.rightImage;
        }
        getLeftBound() {
            return this.x;
        }
        getRightBound() {
            return this.x + this.width;
        }
        getBottomBound() {
            return this.y + this.height;
        }
        getTopBound() {
            return this.y;
        }
        jump() {
            if (this.yVel < this.maxYV) {
                this.yVel--;
            }
        }
        /**
         * This applies friction slowdown and gravity slowdown (in the x and y directions, respectively)
         */
        gravity() {
            if (this.xVel > 0)
                this.xVel -= 0.25;
            if (this.xVel < 0)
                this.xVel += 0.25;
            if (this.yVel < 0)
                this.yVel += 0.5;
            else if (this.yVel < 5)
                this.yVel += 0.15;
        }
        left() {
            if (this.xVel > (-1 * this.maxXV))
                this.xVel--;
            this.facingLeft = true;
        }
        right() {
            if (this.xVel < this.maxXV)
                this.xVel++;
            this.facingLeft = false;
        }
    }
    Battlecars.Character = Character;
})(Battlecars || (Battlecars = {}));
