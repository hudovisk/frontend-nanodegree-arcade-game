export function intersects(rectA, rectB) {
  return (
    rectA.x < rectB.x2 &&
    rectA.x2 > rectB.x &&
    rectA.y < rectB.y2 &&
    rectA.y2 > rectB.y
  );
}
