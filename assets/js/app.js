let toggle;
let menuClose;

const load = () => {
    const menuToggle = document.querySelector('.menuToggle');
    const menuIcon = document.getElementById('menuIcon');
    const navigation = document.body.querySelector('.navigation');
    // for opening menu
    toggle = () => {
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');


        if (menuToggle.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-close');
        } else {
            menuIcon.classList.remove('fa-close');
            menuIcon.classList.add('fa-bars');
        }
    }

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    })

    //navigation close menu after clicked any link

    menuClose = () => {
        menuToggle.classList.remove('active');
        navigation.classList.remove('active');
        menuIcon.classList.remove('fa-close');
        menuIcon.classList.add('fa-bars');
    }

}