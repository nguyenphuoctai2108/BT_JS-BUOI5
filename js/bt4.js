function convertVND(money) {
  const formatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  });
  return formatter.format(money);
}
function chonLoaiKhachHang() {
  var loaiKH = document.getElementById("loaiKhachHang").value;
  var groupKetNoi = document.getElementById("groupKetNoi");
  if (loaiKH === "DN") {
    groupKetNoi.style.display = "block";
  } else {
    groupKetNoi.style.display = "none";
    document.getElementById("soKetNoi").value = "";
  }
}

// NHÀ DÂN
const phiXuLiHoaDonND = 4.5;
const phiDichVuCoBanND = 20.5;
const thueKenhCaoCapND = 7.5;

// DOANH NGHIỆP
const phiXuLiHoaDonDN = 15;
const phiDichVuCoBanDn10first = 75;
const phiDichVuCoBanDnOver = 5;
const thueKenhCaoCapDN = 50;

document.getElementById("tinhTienCap").onclick = function () {
  const maKhachHang = document.getElementById("maKhachHang").value;
  const soKenh = document.getElementById("soKenh").value * 1;
  const loaiKhachHang = document.getElementById("loaiKhachHang").value;
  const soKetNoi = document.getElementById("soKetNoi").value;
  let total;
  if (loaiKhachHang === "ND") {
    total = soKenh * thueKenhCaoCapND + phiDichVuCoBanND + phiXuLiHoaDonND;
  } else if (loaiKhachHang === "DN") {
    let phiDichVuCoBan = 0;
    if (soKetNoi <= 10) {
      phiDichVuCoBan = phiDichVuCoBanDn10first;
    } else if (soKetNoi > 10) {
      phiDichVuCoBan =
        phiDichVuCoBanDn10first + (soKetNoi - 10) * phiDichVuCoBanDnOver;
    }
    total = soKenh * thueKenhCaoCapDN + phiXuLiHoaDonDN + phiDichVuCoBan;
  }
  document.getElementById("showInfo_4").innerHTML =
    `<p>Mã khách hàng: ${maKhachHang}</p><p>Tiền cáp: ${convertVND(total)}</p>`;
};
