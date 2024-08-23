const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class= "fas fa-bars"></i>';
    }else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class= "fas fa-times"></i>';
    }
});



const overlay = document.querySelectorAll('.icon-overlay');

overlay.forEach(icon =>{

    icon.addEventListener('click', ()=>{

        const username = 'jesus_delfino_villa'; // Replace this with the desired username
        const instagramURL = `https://www.instagram.com/${username}/`;

        window.open(instagramURL, '_blank');
    });
});

document.querySelectorAll('.social-icons a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 

        const url = link.getAttribute('data-url'); 
        if (url) {
            window.open(url, '_blank'); 
        }
    });
});

