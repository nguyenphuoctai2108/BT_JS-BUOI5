const duoi60 = 0.05;
const tu60den120 = 0.1;
const tu120den210 = 0.15;
const tu210den384 = 0.2;
const tu384den624 = 0.25;
const tu624den960 = 0.3;
const tren960 = 0.35;
function convertVND(money) {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return formatter.format(money);
}
document.getElementById("tinhTienThue").onclick = function () {
  const hoTen_2 = document.getElementById("hoTen_2").value;
  const tongThuNhap = document.getElementById("tongThuNhap").value * 1;
  const soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
  let thuNhapChiuThue;
  thuNhapChiuThue = tongThuNhap - 4e6 - soNguoiPhuThuoc * 1.6e6;
  let total = 0;
  if (0 < thuNhapChiuThue && thuNhapChiuThue <= 60e6) {
    total = thuNhapChiuThue * duoi60;

    // 60tr - 120tr
  } else if (60e6 < thuNhapChiuThue && thuNhapChiuThue <= 120e6) {
    total = 60e6 * duoi60 + (thuNhapChiuThue - 60e6) * tu60den120;

    // 120tr - 210tr
  } else if (120e6 < thuNhapChiuThue && thuNhapChiuThue <= 210e6) {
    total =
      60e6 * duoi60 +
      60e6 * tu60den120 +
      (thuNhapChiuThue - 120e6) * tu120den210;

    // 210tr - 384tr
  } else if (210e6 < thuNhapChiuThue && thuNhapChiuThue <= 384e6) {
    total =
      60e6 * duoi60 +
      60e6 * tu60den120 +
      90e6 * tu120den210 +
      (thuNhapChiuThue - 210e6) * tu210den384;

    // 384tr - 624tr
  } else if (384e6 < thuNhapChiuThue && thuNhapChiuThue <= 624e6) {
    total =
      60e6 * duoi60 +
      60e6 * tu60den120 +
      90e6 * tu120den210 +
      174e6 * tu210den384 +
      (thuNhapChiuThue - 384e6) * tu384den624;

    // 624tr - 960tr
  } else if (624e6 < thuNhapChiuThue && thuNhapChiuThue <= 960e6) {
    total =
      60e6 * duoi60 +
      60e6 * tu60den120 +
      90e6 * tu120den210 +
      174e6 * tu210den384 +
      240e6 * tu384den624 +
      (thuNhapChiuThue - 624e6) * tu624den960;

    // trên 960tr
  } else if (thuNhapChiuThue > 960e6) {
    total =
      60e6 * duoi60 +
      60e6 * tu60den120 +
      90e6 * tu120den210 +
      174e6 * tu210den384 +
      240e6 * tu384den624 +
      960e6 * tu624den960 +
      (thuNhapChiuThue - 960e6) * tren960;
  } else {
    alert("Vui lòng nhập số tiền lớn hơn 0");
  }
  document.getElementById("showInfo_3").innerHTML =
    `<p>Họ tên: ${hoTen_2}</p><p>Tiền thuế thu nhập cá nhân: ${convertVND(total)}</p>`;
};
