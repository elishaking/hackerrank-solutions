/**
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 * N <==> P-Q
 *
 * @param {number} p
 * @param {number} q
 */
function kaprekarNumbers(p, q) {
  const arr = [];
  for (let i = p; i <= q; i++) {
    const nDigits = i.toString().length;
    const sqr = i * i;
    const str = sqr.toString();
    const split = str.length === nDigits * 2 ? nDigits : nDigits - 1;
    const r = parseInt(str.substring(0, split));
    const l = parseInt(str.substring(split));

    if (l === 0) continue;

    if ((r || 0) + l === i) arr.push(i);
  }

  if (arr.length === 0) console.log("INVALID RANGE");

  return console.log(arr.join(" "));
}

kaprekarNumbers(1, 100);
kaprekarNumbers(100, 300);
