const currentLocation = location.href;
const menuItem = document.querySelectorAll('a')
const menuLength = menuItem.length;
const span1 = document.querySelector('.count1')
const span2 = document.querySelector('.count2')
const span3 = document.querySelector('.count3')
const span4 = document.querySelector('.count4')

for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = 'active';
        console.log(currentLocation)
    }
}

const giveId = () => {
    if(currentLocation === 'http://127.0.0.1:5500/index.html'){
    span1.style.color = '#fc6557'
    }
    if(currentLocation === 'http://127.0.0.1:5500/index2.html'){
        span2.style.color = '#fc6557'
    }
    if(currentLocation === 'http://127.0.0.1:5500/index2.html'){
        span3.style.color = '#fc6557'
    }
    if(currentLocation === 'http://127.0.0.1:5500/index2.html'){
        span4.style.color = '#fc6557'
    }
}

giveId()

