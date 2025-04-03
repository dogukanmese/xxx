const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window,scrollY > 60 )  
});




function rezervasyonYap() {
    let nereden = document.getElementById("nereden").value;
    let nereye = document.getElementById("nereye").value;
    let gidisTarihi = document.getElementById("gidisTarihi").value;
    let donusTarihi = document.getElementById("donusTarihi").value;
    let kisiSayisi = document.getElementById("kisiSayisi").value;

    if (!nereden || !nereye || !gidisTarihi || !kisiSayisi) {
        alert("Lütfen tüm alanları doldurunuz!");
        return;
    }

    alert("Rezervasyon başarıyla yapıldı!");
}

document.querySelectorAll("input[name='yolculuk']").forEach(radio => {
    radio.addEventListener("change", function () {
        document.getElementById("donusTarihi").disabled = this.nextSibling.nodeValue.includes("Tek Yön");
    });
});


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onlick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};


