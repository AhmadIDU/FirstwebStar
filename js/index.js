window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', function(){
        const header = document.getElementById('header'); 
        header.classList.toggle('sticky', this.window.scrollY > 0)
    })

    const menuBtn = document.querySelector('.menu-btn');
    const navigation = document.querySelector('.navigation');    

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active')
        navigation.classList.toggle('active')
    })
    const navigationItem = document.querySelectorAll('.navigation a')
    navigationItem.forEach(navItem => {
        navItem.addEventListener('click', () =>{
         menuBtn.classList.remove('active')
         navigation.classList.remove('active')
        })
    });
})
