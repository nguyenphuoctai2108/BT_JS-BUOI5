const mon_1 = 0;
const mon_2 = 0;
const mon_3 = 0;

function layDiemKhuVuc(khuVuc) {
  switch (khuVuc) {
    case "A":
      return 2;
    case "B":
      return 1;
    case "C":
      return 0.5;
    default:
      return 0;
  }
}

function layDiemDoiTuong(doiTuong) {
  switch (doiTuong) {
    case "1":
      return 2.5;
      break;
    case "2":
      return 1.5;
      break;
    case "3":
      return 1;
      break;
    default:
      return 0;
      break;
  }
}

const btnKetQua = document.getElementById("btnKetQua");
btnKetQua.onclick = function () {
  const diemChuan = document.getElementById("diemChuan").value * 1;
  const khuVuc = document.getElementById("khuVuc").value;
  const doiTuong = document.getElementById("doiTuong").value;
  const mon_1 = document.getElementById("mon_1").value * 1;
  const mon_2 = document.getElementById("mon_2").value * 1;
  const mon_3 = document.getElementById("mon_3").value * 1;
  const showInfo_1 = document.getElementById("showInfo_1");

  if (mon_1 <= 0 || mon_2 <= 0 || mon_3 <= 0) {
    showInfo_1.innerHTML = `Bạn đã rớt`;
  }
  const diemUuTienKhuVuc = layDiemKhuVuc(khuVuc);
  const diemUuTienDoiTuong = layDiemDoiTuong(doiTuong);
  const tongDiem =
    mon_1 + mon_2 + mon_3 + diemUuTienKhuVuc + diemUuTienDoiTuong;
  if (tongDiem >= diemChuan) {
    showInfo_1.innerHTML = `Bạn đã đậu`;
  } else if (tongDiem < diemChuan) {
    showInfo_1.innerHTML = `Bạn đã rớt`;
  }
};
