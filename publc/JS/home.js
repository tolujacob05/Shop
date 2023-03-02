const productContainers = [...document.querySelectorAll('.product-container')];
const btn1 = [...document.querySelectorAll('.btn1')];
const btn2 = [...document.querySelectorAll('.btn2')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    btn1[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    btn2[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})