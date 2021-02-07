var buttonSort = document.getElementById("btnSort");

buttonSort.addEventListener("click", function (e) {
  e.preventDefault();
  var n = parseInt(document.getElementById("inputSort").value);

  var num1 = Math.floor(n / 100);
  var num2 = Math.floor((n % 100) / 10);
  var num3 = Math.floor(n % 10);
  var sort = [num1, num2, num3];
  sort.sort();
  alert("Số sắp xếp theo thứ tự: " + sort);
});



var buttonChaoHoi = document
  .getElementById("btnChaoHoi")
  .addEventListener("click", function (e) {
    e.preventDefault();
    var thanhVien = document.getElementById("inputChaoHoi").value;
    if(thanhVien != null && thanhVien != ''){
      if(thanhVien == "B" || thanhVien == "Bố"){
        alert("Xin chào Bố");
      }
      else if(thanhVien == "M" || thanhVien == "Mẹ"){
        alert("Xin chào Mẹ");
      }
      else if(thanhVien == "A" || thanhVien == "Anh Trai" || thanhVien == "Anh trai"){
        alert("Xin chào Anh Trai");
      }
      else if(thanhVien == "E" || thanhVien == "Em Gái" || thanhVien == "Em gái"){
        alert("Xin chào Em Gái");
      }
      else alert("Thành viên không hợp lệ vui lòng nhập lại");
    }else alert("Vui lòng nhập tên người sử dụng.");


  });


var buttonCount = document
  .getElementById("btnCount")
  .addEventListener("click", function (e) {
    e.preventDefault();
    var nCount = parseInt(document.getElementById("inputCount").value);
    var numCount1 = Math.floor(nCount / 100);
    var numCount2 = Math.floor((nCount % 100) / 10);
    var numCount3 = Math.floor(nCount % 10);
    var count = [numCount1, numCount2, numCount3];
    var soChan = 0;
    var soLe = 0;
    for (var i = 0; i < count.length; i++) {
      if (count[i] % 2 == 0) {
        soChan = soChan + 1;
      } else {
        soLe = soLe + 1;
      }
    }
    alert("Tổng số chẵn: " + soChan + "\n" + "Tổng số lẻ: " + soLe);
  });



document.getElementById("btnTest").addEventListener("click", function(e){
    e.preventDefault();
    var side1 = parseInt(document.getElementById("inputSide1").value);
    var side2 = parseInt(document.getElementById("inputSide2").value);
    var side3 = parseInt(document.getElementById("inputSide3").value);

    if(side1 < side2 + side3 && side2 < side1 + side3 && side3 < side2 + side1){
        if(side1 == side2 && side1 == side3 && side2 == side3){
            alert("Đây là tam giác đều");
        }else if(side1 == side2|| side1 == side3 || side2 == side3){
            alert("Đây là tam giác cân");
        }else if(side1*side1==side2*side2+side3*side3 || side2*side2==side1*side1+side3*side3 || side3*side3== side1*side1+side2*side2){
            alert("Đây là tam giác vuông");
        }else{
            alert("Đây là tam giác nhọn");
        }
    }else{
        alert("Không phải tam giác xin nhập lại.");
    }
});