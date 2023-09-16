
const ipA = document.getElementById("ipA");
const ipB = document.getElementById("ipB");
const btnSum = document.getElementById("btnSum");
const kqList = document.getElementById("kqList");


btnSum.addEventListener("click", (e) => {
  console.log(e.target);
  if (ipA.value === "" || ipB.value === "") {
    return alert("Vui long nhap du lieu");
  }

  let a = parseFloat(ipA.value),
    b = parseFloat(ipB.value);

  if (a <= 0 || b <= 0) {
    return alert("So k hop le");
  }

  if (a >= b) {
    return alert("A phai be hon B");
  }

});

function ktraSCP(n) {


  let flag = 0;
  let i = 0;
  while (i <= n) {
    if (Math.pow(i, 2) == n) {
      flag = 1;
      break;
    }
    i++;
  }
  return flag;
}
let n = prompt();
let i = 0, check = 0, reusult = "";
white(i < n) {
  check = ktraSCP(i);
  if (check == 1) reusult += i + " ";
  ++i;
}
console.log(reusult);




