//import { Character } from './character';
var Battlecars;
(function (Battlecars) {
    class Game {
        constructor(canvas) {
            this.canvas = canvas;
            const leftImg = new Image();
            leftImg.src = 'images/sprites/player/left.jpg';
            const rightImg = new Image();
            rightImg.src = 'images/sprites/player/right.jpg';
            this.player = new Battlecars.Character(100, 100, 10, window.innerHeight / 2, 0, 0, leftImg, rightImg); // We don't know the bounds at this stage
            this.keys = {};
        }
        init() {
            this.resize(); // setup initial size
            this.addEventHandlers();
            this.drawLevel(0);
            this.start();
        }
        start() {
            this.frameInterval = setInterval(() => {
                this.frame();
            }, 17);
        }
        frame() {
            this.clearCanvas();
            this.player.move(this.keys.up, this.keys.left, this.keys.right);
            this.drawCharacter();
        }
        drawLevel(level) {
            //let context = this.canvas.getContext("2d");
            this.canvas.style.backgroundColor = "#000";
            //context.closePath();
        }
        clearCharacter() {
            const context = this.canvas.getContext("2d");
            context.clearRect(this.player.x - 1, this.player.y - 1, this.player.width + 2, this.player.height + 2);
        }
        clearCanvas() {
            const context = this.canvas.getContext("2d");
            context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        drawCharacter() {
            const context = this.canvas.getContext("2d");
            context.drawImage(this.player.getSprite(), this.player.x, this.player.y, this.player.width, this.player.height);
        }
        addEventHandlers() {
            window.onresize = () => { this.resize(); };
            window.onkeydown = (ev) => {
                this.keydown(ev);
            };
            window.onkeyup = (ev) => {
                this.keyup(ev);
            };
        }
        resize() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.player.setBounds(this.canvas.width, this.canvas.height);
        }
        keydown(ev) {
            if (ev.key == 'w') {
                this.keys.up = true;
            }
            else if (ev.key == 'd')
                this.keys.right = true;
            else if (ev.key == 'a')
                this.keys.left = true;
            else if (ev.key == 's')
                this.keys.down = true;
            else if (ev.keyCode == 36)
                this.keys.fire = true;
        }
        keyup(ev) {
            if (ev.key == 'w') {
                this.keys.up = false;
            }
            else if (ev.key == 'd')
                this.keys.right = false;
            else if (ev.key == 'a')
                this.keys.left = false;
            else if (ev.key == 's')
                this.keys.down = false;
            else if (ev.keyCode == 36)
                this.keys.fire = false;
        }
    }
    Battlecars.Game = Game;
})(Battlecars || (Battlecars = {}));
