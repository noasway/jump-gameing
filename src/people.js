export class People {
  locationX = 0;
  locationY = 0;
  radius = 0;
  context;
  canvas;
  speed = 0;
  acceleration = 0;

  orignLY;

  constructor(elId, x, y, r) {
    this.locationX = x;
    this.locationY = y;
    this.radius = r;

    const canvas = document.getElementById(elId);
    const context = canvas.getContext("2d");
    this.context = context;
    this.canvas = canvas;
    this.orignLY = y;
  }

  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.beginPath();
    this.context.arc(
      this.locationX,
      this.locationY,
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    this.context.fillStyle = "black";
    this.context.fill();
  }

  jump() {
    this.up();
  }

  up() {
    // 间隔时间 相当于提高帧数
    let interval = 0.01;
    let timer = setInterval(() => {
      let distance =
        this.speed * interval + 0.5 * this.acceleration * interval * interval;
      this.speed = this.speed + this.acceleration * interval;
      this.locationY -= distance;

      this.draw();
      if (this.speed <= 0) {
        clearInterval(timer);
        this.down();
      }
    }, interval * 1000);
  }

  down() {
    this.speed = 0;
    // 间隔时间 相当于提高帧数
    let interval = 0.01;
    let timer = setInterval(() => {
      let distance =
        this.speed * interval - 0.5 * this.acceleration * interval * interval;
      this.speed = this.speed - this.acceleration * interval;
      this.locationY += distance;
      this.draw();
      if (this.locationY >= this.orignLY) {
        clearInterval(timer);
      }
    }, interval * 1000);
  }
}
