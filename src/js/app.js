document.addEventListener('DOMContentLoaded', function () {
    // inputmask
    Inputmask().mask(document.querySelectorAll('input'))

    // height 100vh fix for IOS
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    // height header
    const header = document.getElementById('header')
    let headerh = header ? header.getBoundingClientRect().height : 0;

    document.documentElement.style.setProperty('--headerh', `${headerh}px`);

    // resize
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        let headerh = header ? header.getBoundingClientRect().height : 0;
        
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        document.documentElement.style.setProperty('--headerh', `${headerh}px`);
    });

    // footer dropdown
    const footerTrigger = document.querySelector('.footer__trigger')
    const footerWrapper = document.querySelector('.footer__wrapper')

    if (footerTrigger) {
        footerTrigger.addEventListener('click', (event) => {
            event.preventDefault()

            if (footerWrapper.classList.contains('footer__wrapper--active')) {
                footerTrigger.classList.remove('footer__trigger--close')
                footerWrapper.classList.remove('footer__wrapper--active')
                footerTrigger.innerHTML = 'О сервисе'
            } else {
                footerTrigger.classList.add('footer__trigger--close')
                footerWrapper.classList.add('footer__wrapper--active')
                footerTrigger.innerHTML = 'скрыть'
            }
        })
    }

    // progress
    const progress = document.querySelector('.progress');

    if (progress) {
        startProgress = () => {
            progress.classList.add('loading');
        };
    
        startProgress()
    }
}); 