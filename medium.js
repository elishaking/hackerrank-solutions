/**
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * @param {string} s
 */
function encryption(s) {
  const max = Math.ceil(Math.sqrt(s.length));
  let rows = Math.floor(Math.sqrt(s.length));
  let cols = rows + 1 > max ? rows : rows + 1;
  while (rows * cols < s.length) {
    rows++;
    if (rows * cols < s.length) cols++;
  }

  const grid = [];

  let idx = 0;
  for (let i = 0; i < rows; i++) {
    grid[i] = [];

    for (let j = 0; j < cols; j++, idx++) {
      grid[i].push(s[idx]);
    }
  }

  let encrypted = "";
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[j][i]) encrypted += grid[j][i];
    }
    encrypted += " ";
  }

  return encrypted;
}

// console.log(encryption("haveaniceday"));
// console.log(encryption("feedthedog"));
// console.log(encryption("chillout"));

/**
 * Problem: https://www.hackerrank.com/challenges/bigger-is-greater/problem
 * Explanation: https://www.nayuki.io/page/next-lexicographical-permutation-algorithm
 *
 * @param {string} w
 */
function biggerIsGreater(w) {
  const arr = w.split("").map((s) => s.charCodeAt(0));

  // find pivot
  let current = 0;
  let pivot = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < current) {
      pivot = i;
      break;
    }
    current = arr[i];
  }

  if (pivot < 0) return "no answer";

  // swap
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > arr[pivot]) {
      [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
      break;
    }
  }

  // reverse arr from pivot
  for (let i = pivot + 1, j = arr.length - 1; i < j; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr.map((n) => String.fromCharCode(n)).join("");
}

// console.log(biggerIsGreater("hefg"));
// console.log(biggerIsGreater("ab"));
console.log(biggerIsGreater("dkhc"));
