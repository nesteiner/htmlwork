export default function fivecirle(context: CanvasRenderingContext2D, factor: number = 10): void {
  let f = (x: number) => factor * x;

  let pointE = {x: 2, y: 2}, pointF = {x: 6, y: 2}, pointG = {x: 10, y: 2},
  pointH = {x: 4, y: 5}, pointI = {x: 8, y: 5};
  
  let r = 2, endangle = 2 * Math.PI;

  context.beginPath()
  context.arc(f(pointE.x), f(pointE.y), f(r), 0, endangle, true)
  context.strokeStyle = 'blue'
  context.stroke()

  context.beginPath()
  context.arc(f(pointF.x), f(pointF.y), f(r), 0, endangle, true)
  context.strokeStyle = 'black'
  context.stroke()

  context.beginPath()
  context.arc(f(pointG.x), f(pointG.y), f(r), 0, endangle, true)
  context.strokeStyle = 'red'
  context.stroke()

  context.beginPath()
  context.arc(f(pointH.x), f(pointH.y), f(r), 0, endangle, true)
  context.strokeStyle = 'yellow'
  context.stroke()

  context.beginPath()
  context.arc(f(pointI.x), f(pointI.y), f(r), 0, endangle, true)
  context.strokeStyle = 'green'
  context.stroke()

}

