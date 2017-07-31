;(() => {
    let smoothScrollTo = (function () {
        let timer, start, factor;

        return function (target, duration) {
            let offset = window.pageYOffset;
            let delta  = target - window.pageYOffset; // Y-offset difference
            duration = duration || 1000;              // default 1 sec animation
            start = Date.now();                       // get start time
            factor = 0;

            if( timer ) {
                clearInterval(timer); // stop any running animation
            }

            function step() {
                let y;
                factor = (Date.now() - start) / duration; // get interpolation factor
                if( factor >= 1 ) {
                    clearInterval(timer); // stop animation
                    factor = 1;           // clip to max 1.0
                }
                y = factor * delta + offset;
                window.scrollBy(0, y - window.pageYOffset);
            }

            timer = setInterval(step, 10);
            return timer; // return the interval timer, so you can clear it elsewhere
        };
    }());

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
            });
        })
    });

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.ba-header__link').forEach((scrollLink) => {
            scrollLink.addEventListener('click', (event) => {
                let anchor = scrollLink.getAttribute('href');
                let anchorTo = document.querySelector(anchor);
                event.preventDefault();
                smoothScrollTo(anchorTo.offsetTop, 1000);
            });
        })
    });

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.ba-footer-first__link').forEach((scrollLink) => {
            scrollLink.addEventListener('click', (event) => {
                let anchor = scrollLink.getAttribute('href');
                let anchorTo = document.querySelector(anchor);
                event.preventDefault();
                smoothScrollTo(anchorTo.offsetTop, 1000);
            });
        })
    });

})();

;(()=>{
    document.addEventListener('DOMContentLoaded', () => {
        let activeLink = document.querySelectorAll('.ba-header__link');
        activeLink.forEach(link =>{
            if (link.getAttribute('href') === '#home'){
                link.classList.add('ba-header__link--active');
            }
        });
    });
})();
