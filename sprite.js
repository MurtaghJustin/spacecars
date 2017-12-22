var Battlecars;
(function (Battlecars) {
    class Sprite {
        constructor(width, height, x, y, xBound, yBound) {
            this.width = width;
            this.height = height;
            this.x = x;
            this.y = y;
            this.xBound = xBound;
            this.yBound = yBound;
        }
    }
    Battlecars.Sprite = Sprite;
    let OutOfBoundsBehaviour;
    (function (OutOfBoundsBehaviour) {
        OutOfBoundsBehaviour[OutOfBoundsBehaviour["Wrap"] = 0] = "Wrap";
        OutOfBoundsBehaviour[OutOfBoundsBehaviour["WrapY"] = 1] = "WrapY";
        OutOfBoundsBehaviour[OutOfBoundsBehaviour["WrapX"] = 2] = "WrapX";
        OutOfBoundsBehaviour[OutOfBoundsBehaviour["Destroy"] = 3] = "Destroy";
        OutOfBoundsBehaviour[OutOfBoundsBehaviour["Block"] = 4] = "Block";
    })(OutOfBoundsBehaviour = Battlecars.OutOfBoundsBehaviour || (Battlecars.OutOfBoundsBehaviour = {}));
})(Battlecars || (Battlecars = {}));
