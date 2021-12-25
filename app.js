const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const sidebar = document.querySelector('.sidebar');
const mainslide = document.querySelector('.main-slide');
const slidesCount = mainslide.querySelectorAll('div').length;
const container = document.querySelector('.container');


let activeslideindex = 0;


sidebar.style.top = `-${(slidesCount-1)*100}vh`;

upBtn.addEventListener('click', ()=>{
    changeslide('up');
});

downBtn.addEventListener('click', ()=>{
    changeslide('down');
});


function changeslide(direction) {
    if (direction === 'up') {
        activeslideindex++;
        if (activeslideindex === slidesCount) {
            activeslideindex = 0;
        }
    } else if (direction === 'down') {
        activeslideindex--;
        if (activeslideindex < 0) {
            activeslideindex = slidesCount-1;
        }
    }
    const height = container.clientHeight;

    mainslide.style.transform = `translateY(-${activeslideindex*height}px)`;

    sidebar.style.transform = `translateY(${activeslideindex*height}px)`;
}

