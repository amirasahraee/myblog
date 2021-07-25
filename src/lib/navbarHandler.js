export function navbarHandler() {

    const menuToggle = document.querySelector('.menuToggle');
    const menuIcon = document.getElementById('menuIcon');
    const navigation = document.body.querySelector('.navigation');
    const menuClose = document.body.querySelectorAll('.menuClose');
    // for opening menu
    menuIcon.addEventListener('click',
        () => {
            menuToggle.classList.toggle('active');
            navigation.classList.toggle('active');


            if (menuToggle.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-close');
            } else {
                menuIcon.classList.remove('fa-close');
                menuIcon.classList.add('fa-bars');
            }
        });

    window.addEventListener('scroll',
        () => {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        })

    //navigation close menu after clicked any links
    const close = () => {
        menuToggle.classList.remove('active');
        navigation.classList.remove('active');
        menuIcon.classList.remove('fa-close');
        menuIcon.classList.add('fa-bars');
    };
    menuClose.forEach((element) => {
        element.addEventListener('click', close);
    })

};
