const round = (num: number, decimal = 100) =>
  Math.round(num * decimal + Number.EPSILON) / decimal;

export default round;
