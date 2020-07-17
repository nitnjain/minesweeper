const x = document.querySelector('.center');
x.innerHTML = document.querySelector('.main').innerHTML;
const fun = () => {
    x.style.width = `700px`; 
    x.style.height = `500px`;
    x.style.textAlign = `left`;
    x.style.color = `black`;
    document.getElementById('back').addEventListener('click',() => {
        console.log('working');
        window.location.reload();
    })
}



document.querySelector('#how').addEventListener('click',() => {
    x.style.width = '0px';
    window.setTimeout(fun,500);
    x.innerHTML = document.querySelector('#dummy').innerHTML;
});

;