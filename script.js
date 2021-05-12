const left = document.querySelector('.left');
const right = document.querySelector('.right');
const nama = document.querySelector('.nama');
const kotak = document.querySelector('.kotak');
const sectionSatu = document.getElementById('satu')
const sectionDua = document.getElementById('dua')


const url_string = document.URL;
const url = new URL(url_string);
let sender;

if (url.searchParams.get('by') != null) {
  sender = url.searchParams.get('by');
} else {
  sender = "Adam Mukti";
}

nama.innerHTML = sender;
kotak.innerHTML = sender + " & Keluarga";



left.addEventListener('click', function () {
    sectionSatu.classList.remove('d-none')
    sectionDua.classList.add('d-none')
    left.classList.add('active')
    right.classList.remove('active')
})


right.addEventListener('click', function () {
    sectionSatu.classList.add('d-none')
    sectionDua.classList.remove('d-none')
    left.classList.remove('active')
    right.classList.add('active')
})

let footer = document.getElementById("credit");
footer.innerHTML = "Adam Mukti";
footer.href = "https://www.instagram.com/adamukti/";