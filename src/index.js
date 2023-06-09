import "./styles.css";
import { People } from "./people";
import { Map } from "./map";

const canvas = document.getElementById("myCanvas");
const centerX = 20;
const centerY = canvas.height - 12;
const radius = 10;

const line = new Map("myCanvas", 0, centerY);
line.draw();
line.move();

const arc = new People("myCanvas", centerX, centerY, radius);
arc.speed = 80;
arc.acceleration = -160;

arc.draw();
// 事件监听
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    // Do something
    if (arc.locationY >= centerY) {
      arc.jump();
    }
  }
});
