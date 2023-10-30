const calcButton = document.querySelector("button");
let birthInput = document.getElementById("birthdate");
const taskBox = document.querySelector(".task-container");
const p = document.createElement("p");
birthInput.max = new Date().toISOString().split("T")[0];
let tillDateInput = document.getElementById("till_date");
tillDateInput.max = new Date().toISOString().split("T")[0];



// calcButton.addEventListener("mouseover" , function() {
//     inputContainer.style.boxShadow =  "0px 0px 17px 0px rgb(28 2 16 / 50%)"
// })

calcButton.addEventListener("click", function () {
  p.remove();
  let birthday = new Date(birthInput.value);
  console.log(birthday);
  let d1 = birthday.getDate();
  let m1 = birthday.getMonth() + 1;
  let y1 = birthday.getFullYear();

  let tillDate = new Date(tillDateInput.value);
  let d2 = tillDate.getDate();
  let m2 = tillDate.getMonth() + 1;
  let y2 = tillDate.getFullYear();
  if ((y2 == y1 && m2 >= m1 && d2 >= d1) || y2 > y1) {
    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = getDaysFromMonth(y2, m2) + d2 - d1;
    }

    p.innerHTML = `you are <span> ${d3} </span> days <span> ${m3} </span> months and <span>${y3} </span>years old`;
    taskBox.append(p);
  } else {
    p.innerHTML = `you entered wrong input`;
    taskBox.append(p);
  }
});

function getDaysFromMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
