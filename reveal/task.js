function checkElementVisibility(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    
    if (rect.top >= 0 && rect.bottom <= windowHeight) {
        element.classList.add('reveal_active');
    } else {
        element.classList.remove('reveal_active');
    }
}

function handleScroll() {
    var revealElements = document.querySelectorAll('.reveal');
    
    revealElements.forEach(function(element) {
        checkElementVisibility(element);
    });
}

window.addEventListener('scroll', handleScroll);

window.addEventListener('load', handleScroll);
