function countWords(str, word1, word2) {
  let a = str.split(" ");
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < a.length; i++) {
    if (word1 === a[i]) {
      count1++;
    }

    if (word2 === a[i]) {
      count2++;
    }
  }

  return count1 > count2
    ? `The word ${word1} occurred more frequently  than ${word2}.`
    : `The word ${word2} occurred more frequently  than ${word1}.`;
}

const paragraph =
  "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";

console.log(countWords(paragraph, "love", "you"));
function countWordsFiltered(sentence) {
  let a = sentence.split(" ").filter((x) => x.length !== 1);

  let count = 0;

  for (let i = 0; i < a.length; i++) {
    count++;
  }
  return count;
}
const sentence = `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`;
console.log(countWordsFiltered(sentence));
function sevenRandomNumbers() {
  let arr = [];
  while (arr.length < 8) {
    let r = Math.floor(Math.random() * 10);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}
console.log(sevenRandomNumbers());

function reverseArray(input) {
  var ret = new Array();
  for (let i = input.length - 1; i >= 0; i--) {
    ret.push(input[i]);
  }
  return ret;
}

function generatePyramid() {
  var totalNumberofRows = 5;
  var output = "";
  for (var i = 1; i <= totalNumberofRows; i++) {
    for (var j = 1; j <= i; j++) {
      output += "#" + "  ";
    }
    console.log(output);
    output = "";
  }
}

generatePyramid();

function checkUniqueness(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i; j < array.length - 1; j++) {
      if (array[i] == array[j + 1]) {
        return false;
      }
    }
  }
  return true;
}
const arrOne = [1, 4, 6, 2, 1];
const arrTwo = [1, 4, 6, 2, 3];
console.log(checkUniqueness(arrTwo));

// document.getElementById("app").innerHTML = `
// <div id="parent" >
// <div> ${countWords(paragraph, "love", "you")}</div>
// <div> ${countWordsFiltered(sentence)}</div>
// <div>${sevenRandomNumbers()}</div>
// <div>${reverseArray(["A", "B", "C"])}</div>
// <div>${checkUniqueness(arrOne)}</div>
// <div>${checkUniqueness(arrTwo)}</div>
// </div>
// `
// const element = document.getElementById("parent");

// const para = document.createElement("div");
//   console.log(element);
// element.appendChild(para);
// for (let i = 1; i < 8; i++) {
//   const node = document.createElement('div');
//   node.appendChild(document.createTextNode('#'.repeat(i)));
//   para.appendChild(node);

//   // console.log(node);

// }
