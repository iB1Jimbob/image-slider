let image = 0;

let imageCount = document.querySelector('.img-slider').children.length - 1;

let images = imageArray(imageCount);

document.querySelectorAll('.img-slider .btns span').forEach(btn => {
    btn.addEventListener('click', (event) => {
        let element = event.target;
        console.log(event)
        if (!element.classList.contains('active')) return;
        if (element.id === 'next') {
            image++;
        } else if (element.id === 'prev') {
            image--;
        } else {
            console.error('error');
        }
        document.querySelectorAll('img').forEach(img => {
            img.style.transform = `translateX(${images[image]}%)`;
        });
        if (image < 1) {
            document.querySelector('#prev').classList.remove('active');
        } else if (image > images.length - 2) {
            document.querySelector('#next').classList.remove('active');
        } else {
            document.querySelector('#prev').classList.add('active');
            document.querySelector('#next').classList.add('active');
        }
    });
});

function imageArray(count) {
    let arr = [];
    let num = 0;
    for (let i = 0; i < count; i++) {
        arr.push(num);
        num -= 100;
    }
    return arr;
}