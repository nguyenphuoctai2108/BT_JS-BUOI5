const dau50kw = 500;
const ke50kw = 650;
const ke100kw = 850;
const ke150kw = 1100;
const conlai = 1300;
function convertVND(money) {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return formatter.format(money);
}

document.getElementById("btnTinhTienDien").onclick = function () {
  const hoTen = document.getElementById("hoTen").value;
  const soKw = document.getElementById("soKw").value * 1;
  let total;
  if (0 < soKw && soKw <= 50) {
    total = soKw * dau50kw;
  } else if (50 < soKw && soKw <= 100) {
    total = 50 * dau50kw + (soKw - 50) * ke50kw;
  } else if (100 < soKw && soKw <= 200) {
    total = 50 * dau50kw + 50 * ke50kw + (soKw - 100) * ke100kw;
  } else if (200 < soKw && soKw <= 350) {
    total = 50 * dau50kw + 50 * ke50kw + 100 * ke100kw + (soKw - 200) * ke150kw;
  } else if (soKw > 350) {
    total =
      50 * dau50kw +
      50 * ke50kw +
      100 * ke100kw +
      150 * ke150kw +
      (soKw - 350) * 1300;
  } else {
    alert("Vui lòng nhập số Kw tối thiếu là 1kw");
  }
  document.getElementById("showInfo_2").innerHTML =
    `<p>Họ tên: ${hoTen}</p><p>Tiền điện: ${convertVND(total)}</p>`;
};
