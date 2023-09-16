
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


 



