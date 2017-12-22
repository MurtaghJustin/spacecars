module Battlecars {
    export abstract class Sprite {
        constructor(
            public width: number,
            public height: number,
            public x: number,
            public y: number,
            protected xBound: number,
            protected yBound: number,
        ) {
            
        }

        public abstract Draw(context: CanvasRenderingContext2D): void;
    }

    export enum OutOfBoundsBehaviour {
        Wrap,
        WrapY,
        WrapX,
        Destroy,
        Block
    }
}