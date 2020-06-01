/**
 * @param {string} s
 */
function sherlockAndAnagrams(s) {
  let count = 0;
  const arr = s.split("").map((n) => n.charCodeAt(0));

  // for(let i = 0; i < s.length; i++){
  //     if(arr[i])
  // }
}

// console.log(sherlockAndAnagrams("hello"));

/**
 *
 * @param {number[]} a
 * @param {number} k
 * @param {number[]} queries
 */
function circularArrayRotation(a, k, queries) {
  while (k > a.length) {
    k -= a.length;
  }
  const rotated = [...a.slice(a.length - k), ...a.slice(0, a.length - k)];
  console.log(rotated);
  const values = [];

  for (let i = 0; i < queries.length; i++) {
    values.push(rotated[queries[i]]);
  }

  return values;
}

// console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));

/**
 *
 * @param {string} a
 * @param {string} b
 */
function makeAnagram(a, b) {
  /**
   * @param {string} str
   */
  const convert = (str) => {
    const obj = {};

    for (let i = 0; i < str.length; i++) {
      if (obj[str[i]]) obj[str[i]]++;
      else obj[str[i]] = 1;
    }

    return obj;
  };

  const aObj = convert(a);
  const bObj = convert(b);

  let minChars = 0;
  const aKeys = Object.keys(aObj);
  const bKeys = Object.keys(bObj);
  for (let i = 0; i < aKeys.length; i++) {
    const aKey = aKeys[i];
    if (bObj[aKey]) {
      if (bObj[aKey] !== aObj[aKey]) {
        minChars += Math.abs(bObj[aKey] - aObj[aKey]);

        if (bObj[aKey] > aObj[aKey]) bObj[aKey] = aObj[aKey];
        else aObj[aKey] = bObj[aKey];
      }
    } else {
      minChars += aObj[aKey];
      aObj[aKey] = 0;
    }
  }

  for (let i = 0; i < bKeys.length; i++) {
    const bKey = bKeys[i];
    if (aObj[bKey]) {
      if (aObj[bKey] !== bObj[bKey]) {
        minChars += Math.abs(aObj[bKey] - bObj[bKey]);

        if (aObj[bKey] > bObj[bKey]) aObj[bKey] = bObj[bKey];
        else bObj[bKey] = aObj[bKey];
      }
    } else {
      minChars += bObj[bKey];
      bObj[bKey] = 0;
    }
  }

  return minChars;
}

// console.log(makeAnagram("cde", "abc"));
/**
 *
 * @param {number[]} arr
 */
function equalizeArray(arr) {
  const numCount = {};

  for (let i = 0; i < arr.length; i++) {
    if (numCount[arr[i]]) {
      numCount[arr[i]]++;
    } else {
      numCount[arr[i]] = 1;
    }
  }

  const keys = Object.keys(numCount);
  let max = 0;
  let maxKey = "";
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (numCount[key] > max) {
      max = numCount[key];
      maxKey = key;
    }
  }

  return arr.length - numCount[maxKey];
}

// console.log(equalizeArray([3, 3, 2, 1, 3]));
// console.log(equalizeArray([1, 2, 2, 3]));

/**
 *
 * @param {string} s
 */
function alternatingCharacters(s) {
  let count = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) count++;
  }

  return count;
}

// console.log(alternatingCharacters("ABABABAB"));
// console.log(alternatingCharacters("AAAA"));

/**
 *
 * @param {string} s
 */
function isValid(s) {
  const freq = {};

  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]]) freq[s[i]]++;
    else freq[s[i]] = 1;
  }

  const keys = Object.keys(freq);
  const freqFreq = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (freqFreq[freq[key]]) freqFreq[freq[key]]++;
    else freqFreq[freq[key]] = 1;
  }

  const freqKeys = Object.keys(freqFreq);
  let maxFreq = 0;
  let maxFreqKey = "";

  for (let i = 0; i < freqKeys.length; i++) {
    const key = freqKeys[i];
    if (freqFreq[key] > maxFreq) {
      maxFreq = freqFreq[key];
      maxFreqKey = key;
    }
  }

  // console.log(freq, freqFreq, maxFreqKey);

  const max = parseInt(maxFreqKey);
  let allow = 1;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (freq[key] !== max) {
      if (
        freq[key] === 1 &&
        freqKeys.length === 2 &&
        freqFreq[freqKeys.find((n) => n !== maxFreqKey)[0]] === 1
      )
        return "YES";
      const diff = Math.abs(freq[key] - max);
      if (diff > allow) return "NO";
      allow = 0;
    }
  }

  return "YES";
}

// console.log(isValid("abcdefghhgfedecba"));
// console.log(isValid("aabbccddeefghi"));
// console.log(isValid("aaaabbcc"));
// console.log(
//   isValid(
//     "ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd"
//   )
// );

/**
 *
 * @param {number} n
 * @param {string} s
 */
function substrCount(n, s) {
  const split = [];

  let count = 1;
  let current = "";
  let prev = s[0];
  for (let i = 1; i <= n; i++) {
    current = s[i];
    if (current === prev) {
      count++;
    } else {
      split.push([prev, count]);
      count = 1;
      prev = current;
    }
  }

  let special = 0;
  for (let i = 0; i < split.length; i++) {
    const a = parseInt(split[i][1].toString());
    special += Math.floor((a * (a + 1)) / 2);
  }

  for (let i = 1; i < split.length - 1; i++) {
    if (split[i - 1][0] === split[i + 1][0] && split[i][1] === 1) {
      // @ts-ignore
      special += Math.min(split[i - 1][1], split[i + 1][1]);
    }
  }

  return special;
}

// console.log(substrCount(10, "aabbbaabaa"));

/**
 *
 * @param {string} s
 */
function timeConversion(s) {
  const vals = s.split(":");
  const hour = parseInt(vals[0]);
  if (s.indexOf("PM") === -1)
    return hour === 12
      ? `00:${vals[1]}:${vals[2].replace("AM", "")}`
      : s.replace("AM", "");

  s = s.replace("PM", "");
  if (hour === 12) return s;

  return `${hour + 12}:${vals[1]}:${vals[2].replace("PM", "")}`;
}

// console.log(timeConversion("12:00:00AM"));
// console.log(timeConversion("07:05:45PM"));
// console.log(timeConversion("12:40:22AM"));

/**
 *
 * @param {number} year
 */
function dayOfProgrammer(year) {
  const getMonthDays = (year) => {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (
      (year < 1918 && year % 4 === 0) ||
      (year > 1918 &&
        (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)))
    ) {
      months[1] = 29;
      return months;
    }

    if (year === 1918) {
      months[1] -= 13;
      return months;
    }

    return months;
  };

  const padZero = (n) => {
    if (n < 10) return `0${n}`;

    return n;
  };

  const months = getMonthDays(year);

  if (year === 1918) {
  }

  let dayCount = 0;
  let i = 0;
  for (i = 0; i < months.length; i++) {
    dayCount += months[i];
    if (dayCount >= 256) break;
  }
  return `${padZero(months[i] - (dayCount - 256))}.${padZero(i + 1)}.${year}`;
}

// console.log(dayOfProgrammer(2000));
// console.log(dayOfProgrammer(2017));

/**
 *
 * @param {number[]} h
 * @param {string} word
 */
function designerPdfViewer(h, word) {
  let maxHeight = 0;

  for (let i = 0; i < word.length; i++) {
    const height = h[word[i].charCodeAt(0) - 97];
    if (height > maxHeight) maxHeight = height;
  }

  return maxHeight * word.length;
}

// console.log(
//   designerPdfViewer(
//     [
//       1,
//       3,
//       1,
//       3,
//       1,
//       4,
//       1,
//       3,
//       2,
//       5,
//       5,
//       5,
//       5,
//       5,
//       5,
//       5,
//       5,
//       5,
//       5,
//       5,
//       5,
//       5,
//       5,
//       5,
//       5,
//       7,
//     ],
//     "zaba"
//   )
// );

/**
 *
 * @param {number} n
 */
function utopianTree(n) {
  let height = 1;

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) height *= 2;
    else height += 1;
  }

  return height;
}

// console.log(utopianTree(5));
// console.log(utopianTree(4));

/**
 *
 * @param {number} k
 * @param {number[]} a
 */
function angryProfessor(k, a) {
  let earlyStudents = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) earlyStudents++;
  }

  return earlyStudents < k ? "YES" : "NO";
}

// console.log(angryProfessor(3, [-1, -3, 4, 2]));
// console.log(angryProfessor(2, [0, -1, 2, 1]));

/**
 *
 * @param {number} i
 * @param {number} j
 * @param {number} k
 */
function beautifulDays(i, j, k) {
  let count = 0;
  for (let m = i; m <= j; m++) {
    const reverse = parseInt(m.toString().split("").reverse().join(""));

    if (Math.abs(m - reverse) % k === 0) count++;
  }
  return count;
}

// console.log(beautifulDays(20, 23, 6));

/**
 *
 * @param {number} n
 * @param {number} k
 * @param {number} r_q
 * @param {number} c_q
 * @param {number[][]} obstacles
 */
function queensAttack(n, k, r_q, c_q, obstacles) {
  const obstaclesLookup = {};

  for (let i = 0; i < obstacles.length; i++) {
    obstaclesLookup[obstacles[i].join("_")] = true;
  }

  let count = 0;
  // bottom
  for (let i = r_q - 1; i >= 1; i--) {
    if (obstaclesLookup[`${i}_${c_q}`]) break;

    count++;
  }

  // top
  for (let i = r_q + 1; i <= n; i++) {
    if (obstaclesLookup[`${i}_${c_q}`]) break;

    count++;
  }

  // left
  for (let i = c_q - 1; i >= 1; i--) {
    if (obstaclesLookup[`${r_q}_${i}`]) break;

    count++;
  }

  // right
  for (let i = c_q + 1; i <= n; i++) {
    if (obstaclesLookup[`${r_q}_${i}`]) break;

    count++;
  }

  // b-r
  for (let i = r_q - 1, j = c_q + 1; i >= 1 && j <= n; i--, j++) {
    if (obstaclesLookup[`${i}_${j}`]) break;

    count++;
  }

  // b-l
  for (let i = r_q - 1, j = c_q - 1; i >= 1 && j >= 1; i--, j--) {
    if (obstaclesLookup[`${i}_${j}`]) break;

    count++;
  }

  // t-r
  for (let i = r_q + 1, j = c_q + 1; i <= n && j <= n; i++, j++) {
    if (obstaclesLookup[`${i}_${j}`]) break;

    count++;
  }

  // t-l
  for (let i = r_q + 1, j = c_q - 1; i <= n && j >= 1; i++, j--) {
    if (obstaclesLookup[`${i}_${j}`]) break;

    count++;
  }

  return count;
}

// console.log(
//   queensAttack(5, 5, 4, 3, [
//     [5, 5],
//     [4, 2],
//     [2, 3],
//   ])
// );

/**
 *
 * @param {number[]} a
 */
function countSwaps(a) {
  const n = a.length;
  let swaps = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swaps++;
      }
    }
  }

  console.log(`Array is sorted in ${swaps} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[n - 1]}`);
}

// countSwaps([3, 2, 1]);

/**
 * @param {number} h
 * @param {number} m
 */
function timeInWords(h, m) {
  const hours = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
  ];

  const minutes = [
    ...hours,
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
  ];

  const oclock = "o' clock";
  const quarter = "quarter";
  const hourWord = hours[h - 1];

  if (m === 0) return `${hourWord} ${oclock}`;
  if (m === 15) return `${quarter} past ${hourWord}`;
  if (m === 30) return `half past ${hourWord}`;
  if (m === 45) return `${quarter} to ${h === 12 ? hours[0] : hours[h]}`;

  if (m < 30)
    return `${minutes[m - 1]} minute${m > 1 ? "s" : ""} past ${hourWord}`;

  return `${minutes[60 - m - 1]} minute${60 - m > 1 ? "s" : ""} to ${
    h === 12 ? hours[0] : hours[h]
  }`;
}

// console.log(timeInWords(3, 0));

/**
 *
 * @param {number} k
 * @param {number[]} c
 */
function getMinimumCost(k, c) {
  c.sort((a, b) => a - b);
  let n = c.length;
  let cost = 0;

  for (let i = n - 1; i >= n - k; i--) {
    cost += c[i];
  }

  let m = 2;
  let x = k;
  for (let i = n - k - 1; i >= 0; i--) {
    cost += m * c[i];
    x--;
    if (x === 0) {
      x = k;
      m++;
    }
  }

  return cost;
}

// console.log(getMinimumCost(4, [1, 2, 3, 4]));
// console.log(getMinimumCost(3, [1, 3, 5, 7, 9]));
// console.log(getMinimumCost(2, [2, 5, 6]));
// console.log(
//   getMinimumCost(3, [
//     390225,
//     426456,
//     688267,
//     800389,
//     990107,
//     439248,
//     240638,
//     15991,
//     874479,
//     568754,
//     729927,
//     980985,
//     132244,
//     488186,
//     5037,
//     721765,
//     251885,
//     28458,
//     23710,
//     281490,
//     30935,
//     897665,
//     768945,
//     337228,
//     533277,
//     959855,
//     927447,
//     941485,
//     24242,
//     684459,
//     312855,
//     716170,
//     512600,
//     608266,
//     779912,
//     950103,
//     211756,
//     665028,
//     642996,
//     262173,
//     789020,
//     932421,
//     390745,
//     433434,
//     350262,
//     463568,
//     668809,
//     305781,
//     815771,
//     550800,
//   ])
// );

/**
 * @param {number} k
 * @param {number[]} arr
 */
function maxMin(k, arr) {
  arr.sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i <= arr.length - k; i++) {
    const sub = arr.slice(i, k + i);

    const f = sub[sub.length - 1] - sub[0];

    if (f < min) min = f;
  }

  return min;
}

// console.log(maxMin(2, [1, 2, 1, 2, 1]));
// console.log(maxMin(3, [100, 200, 300, 350, 400, 401, 402]));

/**
 * @param {number[][]} orders
 */
function jimOrders(orders) {
  const serveOrder = [];

  for (let i = 0; i < orders.length; i++) {
    serveOrder.push({
      time: orders[i][0] + orders[i][1],
      number: i,
    });
  }

  serveOrder.sort((a, b) => {
    if (a.time - b.time === 0) return a.number - b.number;

    return a.time - b.time;
  });

  return serveOrder.map((s) => s.number + 1);
}

// console.log(
//   jimOrders([
//     [8, 1],
//     [4, 2],
//     [5, 6],
//     [3, 1],
//     [4, 3],
//   ])
// );

/**
 * @param {number[][]} A
 */
function surfaceArea(A) {
  let area = 0;

  const diff = (a, b) => {
    const d = a - b;
    return d >= 0 ? d : 0;
  };

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      let cellArea = 2;
      const top = A[i - 1] ? A[i - 1][j] || 0 : 0;
      const bottom = A[i + 1] ? A[i + 1][j] || 0 : 0;
      const right = A[i][j + 1] || 0;
      const left = A[i][j - 1] || 0;
      const height = A[i][j];
      cellArea +=
        diff(height, top) +
        diff(height, bottom) +
        diff(height, right) +
        diff(height, left);

      area += cellArea;
    }
  }

  return area;
}

// console.log(surfaceArea([[1]]));

// console.log(
//   surfaceArea([
//     [1, 3, 4],
//     [2, 2, 3],
//     [1, 2, 4],
//   ])
// );

// console.log(
//   surfaceArea([[51], [32], [28], [49], [28], [21], [98], [56], [99], [77]])
// );

/**
 * @param {number} n
 * @param {number} k
 */
function absolutePermutation(n, k) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }

  if (k === 0) return arr;

  for (let i = 0; i <= n - 2 * k; i += 2 * k) {
    for (let j = i; j < k + i; j++) {
      [arr[j], arr[j + k]] = [arr[j + k], arr[j]];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - (i + 1)) !== k) return [-1];
  }

  return arr;
}

// console.log(absolutePermutation(2, 1));
// console.log(absolutePermutation(3, 0));
// console.log(absolutePermutation(3, 2));

/**
 *
 * @param {number} t1
 * @param {number} t2
 * @param {number} n
 */
function fibonacciModified(t1, t2, n) {
  const tn1 = BigInt(t1);
  const tn2 = BigInt(t2);
  const nn = BigInt(n);

  const fibonacci = (n) => {
    if (n <= 1n) return tn1;
    if (n === 2n) return tn2;

    let s = fibonacci(n - 1n);
    s *= s;

    return fibonacci(n - 2n) + s;
  };

  return fibonacci(nn).toString();
}

// console.log(fibonacciModified(0, 1, 10));

/**
 *
 * @param {string} a
 * @param {string} b
 */
function abbreviation(a, b) {
  const n = a.length;
  const m = b.length;
  const d = [[]];
  for (let i = 0; i <= m; i++) {
    if (i == 0) d[0][i] = 1;
    else d[0][i] = 0;
  }

  let count = 0;

  for (let j = 1; j <= n; j++) {
    let i = j - 1;
    if (!d[j]) d[j] = [];
    if ((a[i].charCodeAt(0) >= 65 && a[i].charCodeAt(0) <= 90) || count == 1) {
      count = 1;
      d[j][0] = 0;
    } else d[j][0] = 1;
  }

  for (let k = 1; k <= n; k++) {
    let i = k - 1;
    for (let l = 1; l <= m; l++) {
      let j = l - 1;
      if (a[i] == b[j]) {
        d[k][l] = d[k - 1][l - 1];
        continue;
      } else {
        if (a[i].toUpperCase() === b[j]) {
          d[k][l] = d[k - 1][l - 1] | d[k - 1][l];
          continue;
        }
      }
      if (a[i].charCodeAt(0) >= 65 && a[i].charCodeAt(0) <= 90) {
        d[k][l] = 0;
        continue;
      } else {
        d[k][l] = d[k - 1][l];
        continue;
      }
    }
  }

  if (d[n][m]) return "YES";
  else return "NO";
}

console.log(
  abbreviation(
    "QOTLYiFECLAGIEWRQMWPSMWIOQSEBEOAuhuvo",
    "QOTLYFECLAGIEWRQMWPSMWIOQSEBEOA"
  )
);
// console.log(abbreviation("EOWZEOHWYOJTBNMcefdsp", "EOWZEOHWYOJTBNM"));
// console.log(abbreviation("beFgH", "EFG"));
// console.log(abbreviation("daBcd", "ABC"));
// console.log(abbreviation("KXzQ", "K"));
// console.log(abbreviation("LIT", "LIT"));
