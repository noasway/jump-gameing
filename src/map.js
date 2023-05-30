export class Map {
  locationX = 0;
  locationY = 0;
  radius = 0;
  context;
  canvas;
  speed = 0;
  acceleration = 0;

  constructor(elId, x, y) {
    this.locationX = x;
    this.locationY = y;

    const canvas = document.getElementById(elId);
    const context = canvas.getContext("2d");
    this.context = context;
    this.canvas = canvas;
  }

  draw() {
    // this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.beginPath();
    this.context.moveTo(0, this.locationY);
    this.context.lineTo(this.canvas.width, this.locationY);
    this.context.stroke();
  }

  move() {
    setInterval(() => {
      this.context.clearRect(0, this.locationY, this.canvas.width, 1);
      this.draw();
    }, 10);
  }
}
