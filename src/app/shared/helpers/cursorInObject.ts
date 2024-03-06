const cursorInObject = (mouseX: number, mouseY: number, x: number, y: number, w: number, h: number) => {
  let xLine = mouseX > x && mouseX < x + w
  let yLine = mouseY > y && mouseY < y + h

  return xLine && yLine
}

export default cursorInObject;
