export default (max) => Math.floor(Math.random() * max);

export const getNod = (x, y) => {
  if (x < y) return getNod(y, x);
  if (!y) return x;
  return getNod(y, x % y);
};
