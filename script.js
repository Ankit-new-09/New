document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    });

    const elements = document.querySelectorAll('.animate');
    elements.forEach(el => observer.observe(el));

});
document.addEventListener("DOMContentLoaded", function () {
    // Scroll to YouTube Section
    const navBtn2 = document.getElementById('btn2');
    if (navBtn2) {
        navBtn2.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            console.log('YouTube Section button clicked');
            const target = document.querySelector('.ytbox');
            if (target) {
                console.log('Scrolling to YouTube Section');
                target.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            } else {
                console.log('YouTube Section not found');
            }
        });
    } else {
        console.log('YouTube Section button not found');
    }

    // Scroll to Location Section
    const navBtn3 = document.getElementById('btn3');
    if (navBtn3) {
        navBtn3.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            console.log('Location Section button clicked');
            const target = document.querySelector('.map');
            if (target) {
                console.log('Scrolling to Location Section');
                target.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            } else {
                console.log('Location Section not found');
            }
        });
    } else {
        console.log('Location Section button not found');
    }
});
