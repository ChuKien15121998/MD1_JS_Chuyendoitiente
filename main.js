function chuyendoi() {
    let dauvao = +document.getElementById("dauvao").value;
    let fCurrent = document.getElementById("fCurrent").value;
    let tCurrent = document.getElementById("tCurrent").value;
    if (fCurrent == tCurrent) {
        document.getElementById("ketqua").innerHTML = "Result: " + dauvao;
    }
    else if (fCurrent == "Viet Nam" && tCurrent == "USD") {
        document.getElementById("ketqua").innerHTML = "Result: " + (dauvao/23000);
    } else {
        document.getElementById("ketqua").innerHTML = "Result: " + (dauvao*23000);
    }
}