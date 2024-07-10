// // setting game
// let btn = document.querySelector(".no-spin");
// let settingBox = document.querySelector(".setting-box");
// btn.onclick = function () {
//   document.querySelector(".no-spin i").classList.toggle("fa-spin");
//   settingBox.classList.toggle("close");
// };

// let gameMain = document.createElement("div");
// let contaiinerGame = document.createElement("div");
// // game card

// let dataSet = [
//   (one = {
//     id: 1,
//     src: `fa-solid fa-apple-whole fa-3x`,
//   }),
//   (two = {
//     id: 2,
//     src: `fa-solid fa-apple-whole fa-3x`,
//   }),
//   (three = {
//     id: 3,
//     src: `fa-solid fa-cheese fa-3x`,
//   }),
//   (four = {
//     id: 4,
//     src: `fa-solid fa-cheese fa-3x`,
//   }),
//   (five = { id: 5, src: `fa-solid fa-pizza-slice fa-3x` }),
//   (six = {
//     id: 6,
//     src: `fa-solid fa-pizza-slice fa-3x`,
//   }),
//   (seven = {
//     id: 7,
//     src: `fa-solid fa-burger fa-3x`,
//   }),
//   (eight = {
//     id: 8,
//     src: `fa-solid fa-burger fa-3x`,
//   }),
//   (nine = {
//     id: 9,
//     src: `fa-solid fa-egg fa-3x`,
//   }),
//   (ten = {
//     id: 10,
//     src: `fa-solid fa-egg fa-3x`,
//   }),
//   (elevine = {
//     id: 11,
//     src: `fa-solid fa-flask fa-3x`,
//   }),
//   (twilve = {
//     id: 12,
//     src: `fa-solid fa-flask fa-3x`,
//   }),
//   (thertine = {
//     id: 13,
//     src: `fa-solid fa-bone fa-3x`,
//   }),
//   (fourten = {
//     id: 14,
//     src: `fa-solid fa-bone fa-3x`,
//   }),
//   (fiveten = {
//     id: 15,
//     src: `fa-solid fa-drumstick-bite fa-3x`,
//   }),
//   (sixten = {
//     id: 16,
//     src: `fa-solid fa-drumstick-bite fa-3x`,
//   }),
// ];

// function shuffle(array) {
//   let newArray = [];
//   let usedIndex = [];
//   let i = 0;
//   while (i < array.length) {
//     let randomNumber = Math.floor(Math.random() * array.length);
//     if (!usedIndex.includes(randomNumber)) {
//       newArray.push(array[randomNumber]);
//       usedIndex.push(randomNumber);
//       i++;
//     }
//   }
//   return newArray;
// }
// let x = shuffle(dataSet);
// let clickedRandomNumber = [];

// for (let k = 0; k < dataSet.length; k++) {
//   let cardDiv = document.createElement("div");
//   let iconeGame = document.createElement("i");

//   gameMain.className = "game";
//   contaiinerGame.className = "container";
//   cardDiv.className = `card`;
//   iconeGame.className = `${x[k].src}`;

//   gameMain.appendChild(contaiinerGame);
//   contaiinerGame.appendChild(cardDiv);
//   cardDiv.appendChild(iconeGame);
//   iconeGame.style.cssText = `position: relative;
//     z-index: 2;`;
//   let z = document.querySelector(".card");

//   setTimeout(function () {
//     cardDiv.onclick = function () {
//       cardDiv.classList.toggle("clicked");
//       console.log(k);
//     };
//   }, 2000);
//   //   cardDiv.addEventListener("click", function () {
//   //     yazan(cardDiv);
//   //   });
//   //   function yazan() {
//   //     cardDiv.classList.add("clicked");
//   //     let zzz = x.filter((ccc) => ccc.classList.containes("clicked"));
//   //     if (zzz.length === 2) {
//   //       console.log("");
//   //     }
//   //   }
// }
// document.body.appendChild(gameMain);

// محاولة جديدة
//login

let userInter = document.querySelector(".header .your-name span");
let logMain = document.querySelector(".login");
let btnLog = document.querySelector(".btn-login");
btnLog.onclick = function () {
  let yaza = prompt("Plz Write Your Name");
  logMain.remove();
  if (yaza === "" || yaza === null) {
    userInter.innerHTML = `Unknown`;
  } else {
    userInter.innerHTML = `${yaza}`;
  }

  localStorage.setItem("name", yaza);
};
let nunEnt = prompt("Plz Enter limit of mistake", 3);

///////////////////////////////////////////////////////////////////////////////////////////

// let vsvsvs = document.querySelector(".links .timer");
// let whatTime = document.querySelector(".links .timer span");
// vsvsvs.onclick = function () {
//   let timeEnter = prompt("Enter the timer in second :", 20);
//   whatTime.innerHTML = `${timeEnter}`;
//   function a() {
//     whatTime.innerHTML -= 1;
//     if (whatTime.innerHTML === "0") {
//       clearInterval(stopCount);
//       let xxxx = document.querySelector(".loser");
//       xxxx.style.cssText = `display:block;`;
//       document.querySelector(".btn-loser").onclick = function () {
//         xxxx.remove();
//         location.reload();
//       };
//     }
//   }

//   let stopCount = setInterval(a, 1000);
// };
///////////////////////////////////////////////////////////////////////////////////////////

let vsvsvs = document.querySelector(".links .timer");
let whatTime = document.querySelector(".links .timer span");
window.onload = function () {
  vsvsvs.onclick = function () {
    let timeEnter = prompt("Enter the timer in second :", 20);
    whatTime.innerHTML = `${timeEnter}`;
    function a() {
      whatTime.innerHTML -= 1;
      if (whatTime.innerHTML === "0") {
        clearInterval(stopCount);
        let xxxx = document.querySelector(".loser");
        xxxx.style.cssText = `display:block;`;
        document.querySelector(".btn-loser").onclick = function () {
          xxxx.remove();
          location.reload();
        };
      }
    }

    let stopCount = setInterval(a, 1000);
  };
};

// setting game

let btn = document.querySelector(".no-spin");
let settingBox = document.querySelector(".setting-box");
btn.onclick = function () {
  document.querySelector(".no-spin i").classList.toggle("fa-spin");
  settingBox.classList.toggle("close");
};

// game card

let dataSet = [
  (one = {
    id: 1,
    src: `fa-solid fa-apple-whole fa-3x`,
  }),
  (two = {
    id: 1,
    src: `fa-solid fa-apple-whole fa-3x`,
  }),
  (three = {
    id: 2,
    src: `fa-solid fa-cheese fa-3x`,
  }),
  (four = {
    id: 2,
    src: `fa-solid fa-cheese fa-3x`,
  }),
  (five = { id: 3, src: `fa-solid fa-pizza-slice fa-3x` }),
  (six = {
    id: 3,
    src: `fa-solid fa-pizza-slice fa-3x`,
  }),
  (seven = {
    id: 4,
    src: `fa-solid fa-burger fa-3x`,
  }),
  (eight = {
    id: 4,
    src: `fa-solid fa-burger fa-3x`,
  }),
  (nine = {
    id: 5,
    src: `fa-solid fa-egg fa-3x`,
  }),
  (ten = {
    id: 5,
    src: `fa-solid fa-egg fa-3x`,
  }),
  (elevine = {
    id: 6,
    src: `fa-solid fa-flask fa-3x`,
  }),
  (twilve = {
    id: 6,
    src: `fa-solid fa-flask fa-3x`,
  }),
  (thertine = {
    id: 7,
    src: `fa-solid fa-bone fa-3x`,
  }),
  (fourten = {
    id: 7,
    src: `fa-solid fa-bone fa-3x`,
  }),
  (fiveten = {
    id: 8,
    src: `fa-solid fa-drumstick-bite fa-3x`,
  }),
  (sixten = {
    id: 8,
    src: `fa-solid fa-drumstick-bite fa-3x`,
  }),
];

function shuffle(array) {
  let newArray = [];
  let usedIndex = [];
  let i = 0;
  while (i < array.length) {
    let randomNumber = Math.floor(Math.random() * array.length);
    if (!usedIndex.includes(randomNumber)) {
      newArray.push(array[randomNumber]);
      usedIndex.push(randomNumber);
      i++;
    }
  }
  return newArray;
}

let x = shuffle(dataSet);
console.log(x);
let mainDiv = document.createElement("div");
let containerDiv = document.createElement("div");
containerDiv.classList.add("container");
mainDiv.classList.add("game");

//one
let mainCardOne = document.createElement("div");
mainCardOne.classList.add("card");
mainCardOne.setAttribute("id", x[0].id);
let iconeGameOne = document.createElement("i");
iconeGameOne.className = `${x[0].src}`;
containerDiv.appendChild(mainCardOne);
mainCardOne.appendChild(iconeGameOne);
//end one
//two
let mainCardTwo = document.createElement("div");
mainCardTwo.className = `card`;
mainCardTwo.setAttribute("id", x[1].id);
let iconeGameTwo = document.createElement("i");
iconeGameTwo.className = `${x[1].src}`;
containerDiv.appendChild(mainCardTwo);
mainCardTwo.appendChild(iconeGameTwo);
//end two
// three
let mainCardThree = document.createElement("div");
mainCardThree.className = `card`;
mainCardThree.setAttribute("id", x[2].id);

let iconeGameThree = document.createElement("i");
iconeGameThree.className = `${x[2].src}`;
containerDiv.appendChild(mainCardThree);
mainCardThree.appendChild(iconeGameThree);
// end three
// four
let mainCardFour = document.createElement("div");
mainCardFour.className = `card`;
mainCardFour.setAttribute("id", x[3].id);

let iconeGameFour = document.createElement("i");
iconeGameFour.className = `${x[3].src}`;
containerDiv.appendChild(mainCardFour);
mainCardFour.appendChild(iconeGameFour);
// end Four
// Five
let mainCardFive = document.createElement("div");
mainCardFive.className = `card`;
mainCardFive.setAttribute("id", x[4].id);

let iconeGameFive = document.createElement("i");
iconeGameFive.className = `${x[4].src}`;
containerDiv.appendChild(mainCardFive);
mainCardFive.appendChild(iconeGameFive);
//end Five
// Six
let mainCardSix = document.createElement("div");
mainCardSix.className = `card`;
mainCardSix.setAttribute("id", x[5].id);

let iconeGameSix = document.createElement("i");
iconeGameSix.className = `${x[5].src}`;
containerDiv.appendChild(mainCardSix);
mainCardSix.appendChild(iconeGameSix);

// end Six
// seven
let mainCardSeven = document.createElement("div");
mainCardSeven.className = `card`;
mainCardSeven.setAttribute("id", x[6].id);

let iconeGameSeven = document.createElement("i");
iconeGameSeven.className = `${x[6].src}`;
containerDiv.appendChild(mainCardSeven);
mainCardSeven.appendChild(iconeGameSeven);
// end Seven
//eight
let mainCardEight = document.createElement("div");
mainCardEight.className = `card`;
mainCardEight.setAttribute("id", x[7].id);

let iconeGameEight = document.createElement("i");
iconeGameEight.className = `${x[7].src}`;
containerDiv.appendChild(mainCardEight);
mainCardEight.appendChild(iconeGameEight);
//end Eight

//nine
let mainCardNine = document.createElement("div");
mainCardNine.className = `card`;
mainCardNine.setAttribute("id", x[8].id);

let iconeGameNine = document.createElement("i");
iconeGameNine.className = `${x[8].src}`;
containerDiv.appendChild(mainCardNine);
mainCardNine.appendChild(iconeGameNine);
//end Nine
//ten
let mainCardTen = document.createElement("div");
mainCardTen.className = `card`;
mainCardTen.setAttribute("id", x[9].id);

let iconeGameTen = document.createElement("i");
iconeGameTen.className = `${x[9].src}`;
containerDiv.appendChild(mainCardTen);
mainCardTen.appendChild(iconeGameTen);
//end Ten
//eleven
let mainCardEleven = document.createElement("div");
mainCardEleven.className = `card`;
mainCardEleven.setAttribute("id", x[10].id);

let iconeGameEleven = document.createElement("i");
iconeGameEleven.className = `${x[10].src}`;
containerDiv.appendChild(mainCardEleven);
mainCardEleven.appendChild(iconeGameEleven);
//end Eleven
//twilve
let mainCardTwilve = document.createElement("div");
mainCardTwilve.className = `card`;
mainCardTwilve.setAttribute("id", x[11].id);

let iconeGameTwilve = document.createElement("i");
iconeGameTwilve.className = `${x[11].src}`;
containerDiv.appendChild(mainCardTwilve);
mainCardTwilve.appendChild(iconeGameTwilve);
//end Twilve
//thert
let mainCardThert = document.createElement("div");
mainCardThert.className = `card`;
mainCardThert.setAttribute("id", x[12].id);

let iconeGameThert = document.createElement("i");
iconeGameThert.className = `${x[12].src}`;
containerDiv.appendChild(mainCardThert);
mainCardThert.appendChild(iconeGameThert);
//end Thert
//fourten
let mainCardFourten = document.createElement("div");
mainCardFourten.className = `card`;
mainCardFourten.setAttribute("id", x[13].id);

let iconeGameFourten = document.createElement("i");
iconeGameFourten.className = `${x[13].src}`;
containerDiv.appendChild(mainCardFourten);
mainCardFourten.appendChild(iconeGameFourten);
//end Fourten
//fiveten
let mainCardFiveten = document.createElement("div");
mainCardFiveten.className = `card`;
mainCardFiveten.setAttribute("id", x[14].id);

let iconeGameFiveten = document.createElement("i");
iconeGameFiveten.className = `${x[14].src}`;
containerDiv.appendChild(mainCardFiveten);
mainCardFiveten.appendChild(iconeGameFiveten);
//end Fiveten
//sixten
let mainCardSixten = document.createElement("div");
mainCardSixten.className = `card`;
mainCardSixten.setAttribute("id", x[15].id);

let iconeGameSixten = document.createElement("i");
iconeGameSixten.className = `${x[15].src}`;
containerDiv.appendChild(mainCardSixten);
mainCardSixten.appendChild(iconeGameSixten);
//end Sixten
mainDiv.appendChild(containerDiv);
document.body.appendChild(mainDiv);
//start the armY
let time = 1000;
let containerBlock = document.querySelector(".game .container");
let blocks = Array.from(containerBlock.children);
// let blocks = document.querySelectorAll(".card")
console.log(blocks);

// blocks.forEach(function (ele) {
//   ele.onclick = function () {
//     blocks.forEach(function (e) {
//       let yazanAta = blocks.filter(function (ele) {
//         e.classList.contains("clicked");
//       });
//       if (yazanAta.length === 2) {
//         console.log("sad");
//       }
//     });
//     ele.classList.add("clicked");
//   };
// });
blocks.forEach(function (e) {
  e.addEventListener("click", function () {
    flip(e);
  });
});
function flip(ele) {
  ele.classList.add("clicked");
  let z = blocks.filter(function (e) {
    return e.classList.contains("clicked");
  });
  if (z.length === 2) {
    noClick();
    lastCheck(z[0], z[1]);
    let ali = blocks.filter(function (ele) {
      return ele.classList.contains("clicked-two");
    });
    if (ali.length === blocks.length) {
      let xxxx = document.querySelector(".winner");
      xxxx.style.cssText = `display:block; transition:0.5s`;
      document.querySelector(".btn-loser").onclick = function () {
        xxxx.remove();
        location.reload();
      };
    }
    
    // lastCheck(z[0], z[1]);
  }
}

function noClick() {
  mainDiv.classList.add("noClick");
  setTimeout(function () {
    mainDiv.classList.remove("noClick");
  }, 1000);
}
function lastCheck(oneB, twoB) {
  let mistakeNumber = document.querySelector(".links .moves span");

  if (parseInt(oneB.getAttribute("id")) === parseInt(twoB.getAttribute("id"))) {
    oneB.classList.remove("clicked");
    twoB.classList.remove("clicked");
    oneB.classList.add("clicked-two");
    twoB.classList.add("clicked-two");
  } else {
    mistakeNumber.innerHTML = parseInt(mistakeNumber.innerHTML) + 1;
    if (parseInt(mistakeNumber.innerHTML) === parseInt(nunEnt)) {
      let xxxx = document.querySelector(".loser");
      xxxx.style.cssText = `display:block; transition:0.5s`;
      document.querySelector(".btn-loser").onclick = function () {
        xxxx.remove();
        location.reload();
      };
    }
    // if (mistakeNumber === 2) {
    //   window.onload();
    // }
    setTimeout(function () {
      oneB.classList.remove("clicked");
      twoB.classList.remove("clicked");
      console.log(parseInt(oneB.getAttribute("id")) + 1);
    }, 1000);
  }
}

// console.log(z[0].id);
// console.log(z[1].id);
// time
// let timer = document.querySelector(".links .timer span");
// console.log(timer);
// function a() {
//   timer.innerHTML -= 1;
//   if (timer.innerHTML == "0") {
//     clearInterval(a);
//     console.log("lose");
//   }
// }
// setTimeout(creatPop, 5000);
// function creatPop() {
//   let mainDiv = document.createElement("div");
//   let mainH = document.createElement("h2");
//   let mainP = document.createElement("p");
//   let close = document.createElement("span");
//   let textH = document.createTextNode("Welcome");
//   let textP = document.createTextNode("Welcome to Elzero Web School");
//   let textSpna = document.createTextNode("x");
//   mainDiv.appendChild(mainH);
//   mainDiv.appendChild(mainP);
//   mainDiv.appendChild(close);
//   mainH.appendChild(textH);
//   close.appendChild(textSpna);
//   mainP.appendChild(textP);
//   mainDiv.style.cssText = `background-color: #eee;
//   position: relative;
//     width: 500px;
//     padding: 20px;
//     text-align: center;
//     margin-left: auto;
//     margin-right: auto;
//     margin-top: 60px;
//     border: 1px solid #80808021;`;
//   close.style.cssText = `    position: absolute;
//     right: -11px;
//     background-color: red;
//     top: -10px;
//     padding: 7px 11px;
//     border-radius: 50%;
//     color: white;
//     cursor:pointer;`;
//   document.body.appendChild(mainDiv);
//   close.onclick = function () {
//     mainDiv.remove();
//   };
// }
