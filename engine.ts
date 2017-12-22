//import { Character } from './character';

module Battlecars {
    export class Game {
        private player: Character;
        private frameInterval: number;
        private keys: {
            up?: boolean,
            right?: boolean,
            left?: boolean,
            down?: boolean,
            fire?: boolean
        }
        private sprites: Sprite[];

        constructor(
            private canvas: HTMLCanvasElement) {
            const leftImg = new Image();
            leftImg.src = 'images/sprites/player/left.jpg';
            const rightImg = new Image();
            rightImg.src = 'images/sprites/player/right.jpg';
            this.player = new Character(100, 100, 10, window.innerHeight / 2, 0, 0, leftImg, rightImg);   // We don't know the bounds at this stage
            this.keys = {};
        }

        public init() {
            this.resize();  // setup initial size

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

        public drawLevel(level: number) {
            //let context = this.canvas.getContext("2d");
            this.canvas.style.backgroundColor = "#000";
            //context.closePath();
        }

        public clearCharacter() {
            const context = this.canvas.getContext("2d");
            context.clearRect(this.player.x - 1, this.player.y - 1, this.player.width + 2, this.player.height + 2);
        }

        public clearCanvas() {
            const context = this.canvas.getContext("2d");
            context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }

        public drawCharacter() {
            const context = this.canvas.getContext("2d");
            context.drawImage(this.player.getSprite(), this.player.x, this.player.y, this.player.width, this.player.height);
        }

        public addEventHandlers() {
            window.onresize = () => { this.resize(); }
            window.onkeydown = (ev) => {
                this.keydown(ev);
            }

            window.onkeyup = (ev) => {
                this.keyup(ev);
            }
        }

        public resize() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.player.setBounds(this.canvas.width, this.canvas.height);
        }

        keydown(ev: KeyboardEvent) {
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

        keyup(ev: KeyboardEvent) {
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
}