let video
const scale = 8
const grad = "@%#*+=-:. "

function setup() {
  createCanvas(640, 480)

  video = createCapture(VIDEO)
  video.size(width / scale, height / scale)
  video.hide()
}

function draw() {
  background(255)
  video.loadPixels()

  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      const flipped = video.width - 1 - x
      const index = (flipped + y * video.width) * 4

      const [r, g, b] = video.pixels.slice(index, index + 3)
      const brightness = (r + g + b) / 3

      const char = grad[Math.floor((brightness / 255) * (grad.length - 1))]
      text(char, x * scale, y * scale)
    }
  }
}
