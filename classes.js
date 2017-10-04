function Line(x1, y1, x2, y2, r, theta) {
    //'use strict';
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.r = r;
    this.theta = theta;
}

/*function Line(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.r = Math.sqrt(Math.abs(x1 - x2)**2 + Math.abs(y1 - y2)**2);
    this.theta = Math.atan((y2-y1)/(x2-x1))*(180/Math.PI);
}*/

function Relation(scale, rotate, translate_r, translate_theta) {
    //'use strict';
    this.scale = scale;
    this.rotate = rotate;
    this.translate_r = translate_r;
    this.translate_theta = translate_theta;
}