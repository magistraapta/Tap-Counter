let angka = 0;

function tambahAngka(){
    angka+=1;
    document.getElementById("displayNumber").innerHTML = angka;

    if (angka === 10) {
        document.getElementById("displayNumber").innerText = "dah dah, cukup. Makasih udh nyobain.";
        angka = -1;
    }
}