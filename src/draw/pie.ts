function draw_pie(context: CanvasRenderingContext2D, factor: number = 20): void {
  let f = (x: number) => factor * x

  let angle1 = 4 / 3 * Math.PI
  let angle2 = angle1 + Math.PI / 3
  let angle3 = angle2 + Math.PI / 6
  let angle4 = angle3 + Math.PI / 6

  let center = {x: 5, y: 5}
  let r = 2

  context.beginPath();
  context.arc(f(center.x), f(center.y), f(r), 0, angle1)
  context.lineTo(f(center.x), f(center.y))
  context.closePath()
  context.fillStyle = 'blue'
  context.fill()

  context.beginPath()
  context.arc(f(center.x), f(center.y), f(r), angle1, angle2)
  context.lineTo(f(center.x), f(center.y))
  context.closePath()
  context.fillStyle = 'brown'
  context.fill()

  context.beginPath()
  context.arc(f(center.x), f(center.y), f(r), angle2, angle3)
  context.lineTo(f(center.x), f(center.y))
  context.closePath()
  context.fillStyle = 'green'
  context.fill()

  context.beginPath()
  context.arc(f(center.x), f(center.y), f(r), angle3, angle4)
  context.lineTo(f(center.x), f(center.y))
  context.closePath()
  context.fillStyle = 'yellow'
  context.fill()

}

export {draw_pie}