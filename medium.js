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
console.log(encryption("chillout"));
