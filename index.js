const numbers = [
    { num: 1, color: "#6F98A8" },
    { num: 2, color: "#2B8EAD" },
    { num: 3, color: "#2F454E" },
    { num: 4, color: "#2B8EAD" },
    { num: 5, color: "#2F454E" },
    { num: 6, color: "#BFBFBF" },
    { num: 7, color: "#BFBFBF" },
    { num: 8, color: "#6F98A8" },
    { num: 9, color: "#2F454E" },
  ];
  
  function onload(n) {
    let values = n ? n : numbers;
    var app = document.querySelector(".ul-list");
    app.innerHTML = values
      .map((i) => {
        return `<li class='li-item' style=background-color:${i.color};border-color:${i.color}> ${i.num}</li>`;
      })
      .join("");
  }
  
  function shuffleNumbers() {
    const newNum = [...numbers];
    for (let i = newNum.length - 1; i > 0; i--) {
      const randomNum = Math.floor(Math.random() * (i + 1));
      [newNum[i], newNum[randomNum]] = [newNum[randomNum], newNum[i]];
    }
    this.onload(newNum);
  }

  function sortNumbers() {
    var list = numbers.sort();
    this.onload(list);
  }
  