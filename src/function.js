export default (max) => Math.floor(Math.random() * max);

export const getNod = (x, y) => {
  if (x < y) return getNod(y, x);
  if (!y) return x;
  return getNod(y, x % y);
};

export const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
