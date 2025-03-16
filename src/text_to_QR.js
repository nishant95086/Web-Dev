const div = document.querySelector('.qr');
const btn = document.querySelector('.btn');
const api = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
const img = document.createElement('img');
const input = document.querySelector('.intext');
btn.addEventListener('click', () => {
    const text = input.value.trim();
    const qr = api + encodeURIComponent(text);
    img.src = qr;
    div.innerHTML = '';
    div.appendChild(img);
});


