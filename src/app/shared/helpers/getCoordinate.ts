const getCoordinate = (event: MouseEvent) => {
  return {
    x: event.clientX - (event.target as HTMLElement).offsetLeft,
    y: event.clientY - (event.target as HTMLElement).offsetTop
  }
}

export default getCoordinate;
