const bar = Document.getElementById('bar');
const nav = Document.getElementById('navbar')

if(bar){
    bar.addEventListener('click', () => {
nav.classList.add('active');
    })
}