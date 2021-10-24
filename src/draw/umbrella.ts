export function draw_umbrella(context: CanvasRenderingContext2D, factor: number = 10, color: string) {
  let f = (x: number) => factor * x;

  let pointA = {x: 5, y: 5}
  let r1 = 4, r2 = 1
  
  context.beginPath()
  context.arc(f(pointA.x), f(pointA.y), f(r1), 0, Math.PI, true)
  context.closePath()

  context.fillStyle = color
  context.fill()

  // then is blue one
  let pointG = {x: 5, y: 9}
  context.beginPath()
  context.moveTo(f(pointA.x), f(pointA.y))
  context.lineTo(f(pointG.x), f(pointG.y))
  context.arc(f(pointG.x - r2), f(pointG.y), f(r2), 0, Math.PI)

  context.strokeStyle = 'blue'
  context.stroke()
  
}

export function draw_umbrellas(context: CanvasRenderingContext2D, factor: number = 10) {
  let f = (x: number) => factor * x;
  let translateX = 8

  let colors = ['#0099ff', 'blue', '#3366ff', '#6666ff', '#9966ff', '#cc33ff', '#ff00ff', '#cc0099']
  for(let i = 1; i <= 10; i += 1) {
    draw_umbrella(context, factor, colors[i-1])
    context.translate(f(translateX), 0)
  }
}
