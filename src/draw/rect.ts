export function draw_panel_1(context: CanvasRenderingContext2D, factor: number = 10) {
  let f = (x: number) => factor * x

  let p = {x: 9, y: 4}
  context.textAlign = "center"
  context.textBaseline = "middle"
  context.font = "bolid 10px black"
  context.fillText('技术等级', f(p.x), f(p.y))

  let pointI = {x: 2, y: 8}
  let width = 14, height = 4
  context.strokeRect(f(pointI.x), f(pointI.y), f(width), f(height))

  let pointM = {x: 2, y: 14}
  context.strokeRect(f(pointM.x), f(pointM.y), f(width), f(height))

  // fill text
  let pointQ = {x: 9, y: 10}
  let pointR = {x: 9, y: 16}
  context.font = "bolid 8px black"
  context.fillText('高级，一级公路', f(pointQ.x), f(pointQ.y))
  context.fillText('二，三级公路', f(pointR.x), f(pointR.y))
  
}

export function draw_panel_2(context: CanvasRenderingContext2D, factor: number = 10): void {
  let f = (x: number) => factor * x
  let translateX = 20

  context.translate(f(translateX), 0)

  let p = {x: 9, y: 4}
  context.textAlign = "center"
  context.textBaseline = "middle"
  context.font = "bolid 10px black"
  context.fillText('交通量', f(p.x), f(p.y))

  // TODO stroke rect
  let point1 = {x: 2, y: 8}
  let width = 14, height = 4
  context.strokeRect(f(point1.x), f(point1.y), f(width), f(height))

  let point2 = {x: 2, y: 14}
  context.strokeRect(f(point2.x), f(point2.y), f(width), f(height))

  let point3 = {x: 2, y: point2.y + 6}
  context.strokeRect(f(point3.x), f(point3.y), f(width), f(height))

  // TODO fill text
  context.font = "bolid 8px black"
  point1 = {x: 9, y: 10}
  point2 = {x: 9, y: 16}
  point3 = {x: 8, y: 22}
  context.fillText('重 >= 8000', f(point1.x), f(point1.y))
  context.fillText('中8000 -> 3000', f(point2.x), f(point2.y))
  context.fillText('轻 < 3000', f(point3.x), f(point3.y))
}

export function draw_panel_3(context: CanvasRenderingContext2D, factor: number = 10) {
  let f = (x: number) => factor * x
  let translateX = 20

  context.translate(f(translateX), 0)

  let p = {x: 9, y: 4}
  context.textAlign = "center"
  context.textBaseline = "middle"
  context.font = "bolid 10px black"
  context.fillText('PCI', f(p.x), f(p.y))

  // TODO stroke rect
  let point1 = {x: 2, y: 8}
  let width = 14, height = 4
  context.strokeRect(f(point1.x), f(point1.y), f(width), f(height))

  let point2 = {x: 2, y: 14}
  context.strokeRect(f(point2.x), f(point2.y), f(width), f(height))

  let point3 = {x: 2, y: point2.y + 6}
  context.strokeRect(f(point3.x), f(point3.y), f(width), f(height))

  // TODO fill text
  context.font = "bolid 8px black"
  point1 = {x: 9, y: 10}
  point2 = {x: 9, y: 16}
  point3 = {x: 9, y: 22}
  context.fillText('优良 >= 90', f(point1.x), f(point1.y))
  context.fillText('中 90 -> 80', f(point2.x), f(point2.y))
  context.fillText('次差 < 80', f(point3.x), f(point3.y))
}

export function draw_panel_4(context: CanvasRenderingContext2D, factor: number = 10) {
  let f = (x: number) => factor * x
  let translateX = 20

  context.translate(f(translateX), 0)

  let p = {x: 9, y: 4}
  context.textAlign = "center"
  context.textBaseline = "middle"
  context.font = "bolid 10px black"
  context.fillText('PQI', f(p.x), f(p.y))

  // TODO stroke rect
  let point1 = {x: 2, y: 8}
  let width = 14, height = 4
  context.strokeRect(f(point1.x), f(point1.y), f(width), f(height))

  let point2 = {x: 2, y: 14}
  context.strokeRect(f(point2.x), f(point2.y), f(width), f(height))

  let point3 = {x: 2, y: point2.y + 6}
  context.strokeRect(f(point3.x), f(point3.y), f(width), f(height))

  // TODO fill text
  context.font = "bolid 8px black"
  point1 = {x: 9, y: 10}
  point2 = {x: 9, y: 16}
  point3 = {x: 9, y: 22}
  context.fillText('优良 >= 90', f(point1.x), f(point1.y))
  context.fillText('中 90 -> 80', f(point2.x), f(point2.y))
  context.fillText('次差 < 80', f(point3.x), f(point3.y))
}

export function draw_panel_5(context: CanvasRenderingContext2D, factor: number = 10) {
  let f = (x: number) => factor * x
  let translateX = 20
  context.translate(f(translateX), 0)

  let p = {x: 9, y: 4}
  context.textAlign = "center"
  context.textBaseline = "middle"
  context.font = "bolid 10px black"
  context.fillText('PSSI', f(p.x), f(p.y))

  let pointI = {x: 2, y: 8}
  let width = 14, height = 4
  context.strokeRect(f(pointI.x), f(pointI.y), f(width), f(height))

  let pointM = {x: 2, y: 14}
  context.strokeRect(f(pointM.x), f(pointM.y), f(width), f(height))

  // fill text
  let pointQ = {x: 9, y: 10}
  let pointR = {x: 9, y: 16}
  context.font = "bolid 8px black"
  context.fillText('高 >= 70', f(pointQ.x), f(pointQ.y))
  context.fillText('低 < 70', f(pointR.x), f(pointR.y))
  
}

export function draw_rect(context: CanvasRenderingContext2D, factor: number = 10) {
  draw_panel_1(context, factor)
  draw_panel_2(context, factor)
  draw_panel_3(context, factor)
  draw_panel_4(context, factor)
  draw_panel_5(context, factor)
}