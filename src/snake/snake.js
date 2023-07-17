class Snake {
  constructor(x, y, char = "#", direction = "down") {
    this.x = x;
    this.y = y;
    this.char = char;
    this.direction = direction;
    this.level = 1;
    this.snake = [];
    this.#setSnake();
  }

  #setSnake() {
    this.snake = [{ x: this.x, y: this.y }];
  }

  setLevel() {
    this.level = this.level + 1;

    switch (this.direction) {
      case "left":
        this.snake.push({
          x: this.snake[this.snake.length - 1].x + 1,
          y: this.snake[this.snake.length - 1].y,
        });
        break;
      case "right":
        this.snake.push({
          x: this.snake[this.snake.length - 1].x - 1,
          y: this.snake[this.snake.length - 1].y,
        });
        break;
      case "up":
        this.snake.push({
          x: this.snake[this.snake.length - 1].x,
          y: this.snake[this.snake.length - 1].y + 1,
        });
        break;
      case "down":
        this.snake.push({
          x: this.snake[this.snake.length - 1].x,
          y: this.snake[this.snake.length - 1].y - 1,
        });
        break;
    }
  }

  setDirection(direction) {
    this.direction = direction;
  }

  moveHead(field) {
    const headPos = this.snake[0];

    switch (this.direction) {
      case "left":
        this.snake.pop();
        if (headPos.x === 0) {
          this.snake = [{ x: field.width - 1, y: headPos.y }, ...this.snake];
        } else {
          this.snake = [{ x: headPos.x - 1, y: headPos.y }, ...this.snake];
        }
        break;
      case "right":
        this.snake.pop();
        if (headPos.x === field.width - 1) {
          this.snake = [{ x: 0, y: headPos.y }, ...this.snake];
        } else {
          this.snake = [{ x: headPos.x + 1, y: headPos.y }, ...this.snake];
        }
        break;
      case "up":
        this.snake.pop();
        if (headPos.y === 0) {
          this.snake = [{ x: headPos.x, y: field.height - 1 }, ...this.snake];
        } else {
          this.snake = [{ x: headPos.x, y: headPos.y - 1 }, ...this.snake];
        }
        break;
      case "down":
        this.snake.pop();
        if (headPos.y === field.height - 1) {
          this.snake = [{ x: headPos.x, y: 0 }, ...this.snake];
        } else {
          this.snake = [{ x: headPos.x, y: headPos.y + 1 }, ...this.snake];
        }
        break;
    }
  }
}

export default Snake;
