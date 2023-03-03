
let bottom = document.querySelector('.more');
    bottom.style.background ='#4a8faa';
    bottom.style.fontSize ='20px';
    bottom.style.borderTopRightRadius ='3px';
    bottom.style.borderTopLeftRadius ='3px';
    bottom.style.borderBottomRightRadius ='3px';
    bottom.style.borderBottomLeftRadius ='3px';

// started styling form input
// button styled
const sad = document.querySelector('.form-content');
sad.style.display= 'none';

const btn = document.querySelector('.btn-content').addEventListener('click', getDatafunction )
function getDatafunction() {
    const formInput = document.querySelector('.form-content');
    formInput.style.marginTop = '5em';
    formInput.style.display = 'block';
    const nameCheap = document.querySelector('.button-content');
    nameCheap.style.border = '2px solid ';
    nameCheap.style.color = '#009990';
    nameCheap.style.cursor = 'pointer';
    dom.style.display = 'block';
}
// let gate = document.querySelector('.good');
// gate.style.color = 'red';