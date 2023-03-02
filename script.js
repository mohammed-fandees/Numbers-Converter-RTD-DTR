let create = (el) => document.createElement(`${el}`);
const romanMap = {
  I: 1, i: 1,
  V: 5, v: 5,
  X: 10, x: 10,
  L: 50, l: 50,
  C: 100, c: 100,
  D: 500, d: 500,
  M: 1000, m: 1000,
};

const integerMap = [
  { char: "M", value: 1000 },
  { char: "CM", value: 900 },
  { char: "D", value: 500 },
  { char: "CD", value: 400 },
  { char: "C", value: 100 },
  { char: "XC", value: 90 },
  { char: "L", value: 50 },
  { char: "XL", value: 40 },
  { char: "X", value: 10 },
  { char: "IX", value: 9 },
  { char: "V", value: 5 },
  { char: "IV", value: 4 },
  { char: "I", value: 1 },
];

class Convert {
  constructor(rNumber, iNumber) {
    this.roman = rNumber;
    this.int = iNumber;
  }

  romanToInt() {
    let result = 0;
    let prev = 0;

    for (let i = this.roman.length - 1; i >= 0; i--) {
      const curr = romanMap[this.roman.charAt(i)];
      if (curr >= prev) {
        result += curr;
      } else {
        result -= curr;
      }
      prev = curr;
    }

    if (prev === undefined) {
      console.log("Invalid Valu");
    } else {
      let userInput = create("div");
      userInput.className = "user-input";
      userInput.appendChild(document.createTextNode(this.roman));

      let calc = create("div");
      calc.className = "calc";
      calc.appendChild(document.createTextNode(result));

      let res = create("div");
      res.className = "res";
      res.appendChild(userInput);
      res.appendChild(calc);

      document.querySelector(".history").appendChild(res);
    }
  }

  intToRoman() {
    let result = "";
    for (let i = 0; i < integerMap.length; i++) {
      let currentChar = integerMap[i].char;
      let currentValue = integerMap[i].value;

      while (this.int >= currentValue) {
        result += currentChar;
        this.int -= currentValue;
      }
    }
    if (result !== "") {
      let userInput = create("div");
      userInput.className = "user-input";
      userInput.appendChild(document.createTextNode(document.querySelector("#num").value));

      let calc = create("div");
      calc.className = "calc";
      calc.appendChild(document.createTextNode(result));

      let res = create("div");
      res.className = "res";
      res.appendChild(userInput);
      res.appendChild(calc);

      document.querySelector(".history").appendChild(res);
    } else console.log("Invalid Valu");
  }
}

document.querySelector("button").addEventListener("click", function (el) {
  el.preventDefault();
  let type = document.querySelector("select").value;
  let num = document.querySelector("#num").value;
  if (type === "RTI") {
    new Convert(num, num).romanToInt();
  } else {
    new Convert(num, num).intToRoman();
  }
});
