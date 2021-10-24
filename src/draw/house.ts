export function draw_roof(context: CanvasRenderingContext2D, factor: number = 10): void {
  let f = (x: number) => factor * x

  let pointZ = {x: 7, y: 0}
  let width = 1, height = 4
  context.fillStyle = 'red'
  context.fillRect(f(pointZ.x), f(pointZ.y), f(width), f(height))

  let pointA = {x: 0, y: 4}
  let pointC = {x: 5, y: 0}
  let pointB = {x: 10, y: 4}

  context.beginPath()
  context.moveTo(f(pointA.x), f(pointA.y))
  context.lineTo(f(pointC.x), f(pointC.y))
  context.lineTo(f(pointB.x), f(pointB.y))
  context.closePath()

  context.fillStyle = 'brown'
  context.fill()
}

export function draw_body(context: CanvasRenderingContext2D, factor: number = 10): void {
  let f = (x: number) => factor * x

  let pointF = {x: 1, y: 4}
  let width = 8, height = 6;

  context.fillStyle = 'grey'
  context.fillRect(f(pointF.x), f(pointF.y), f(width), f(height))
}

export function draw_window(context: CanvasRenderingContext2D, factor: number = 10): void {
  let f = (x: number) => factor * x

  let pointM = {x: 2, y: 5}
  let width = 3, height = 2;
  context.fillStyle = 'white'
  context.fillRect(f(pointM.x), f(pointM.y), f(width), f(height))

  context.strokeStyle = 'blue'
  context.strokeRect(f(pointM.x), f(pointM.y), f(width), f(height))
  context.strokeRect(f(pointM.x), f(pointM.y), f(width / 2), f(height))

  let pointQ = {x: 2, y: 8}
  let pointR = {x: 5, y: 8}

  context.beginPath()
  context.moveTo(f(pointQ.x), f(pointQ.y))
  context.lineTo(f(pointR.x), f(pointR.y))
  context.strokeStyle = 'blue'
  context.stroke()
}

export function draw_door(context: CanvasRenderingContext2D, factor: number = 10): void {
  let f = (x: number) => factor * x;

  let pointJ = {x: 6, y: 8}
  let pointU = {x: 7, y: 8}
  let width = 2, height = 2, r = 1;
  // first stroke
  context.strokeStyle = 'red'
  context.strokeRect(f(pointJ.x), f(pointJ.y), f(width), f(height))

  context.beginPath()
  context.arc(f(pointU.x), f(pointU.y), f(r), 0, Math.PI, true)
  context.stroke()
  // then fill
  context.fillStyle = 'white'
  context.fillRect(f(pointJ.x), f(pointJ.y), f(width), f(height))

  context.beginPath()
  context.arc(f(pointU.x), f(pointU.y), f(r), 0, Math.PI, true)
  context.fill()
}

export function draw_house(context: CanvasRenderingContext2D, factor: number) {
  draw_roof(context, factor);
  draw_body(context, factor);
  draw_window(context, factor);
  draw_door(context, factor);
}