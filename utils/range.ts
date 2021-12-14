const range = (start: number, end: number) => {
  return Array.from({ length: end - start }, (v, k) => k + start);
};

export default range;
