// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Order button functionality
    const orderButtons = document.querySelectorAll('button');
    orderButtons.forEach(button => {
        if (button.textContent.includes('Pesan')) {
            button.addEventListener('click', function() {
                alert('Terima kasih! Pesanan Anda akan segera diproses. Silakan hubungi kami di +62 812-3456-7890 untuk konfirmasi.');
            });
        }
    });

    // Mobile menu toggle (if needed in the future)
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const nav = document.querySelector('nav');
            nav.classList.toggle('hidden');
        });
    }

    // Add animation to menu cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe menu cards for animation
    const menuCards = document.querySelectorAll('.menu-card');
    menuCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Additional functions for future enhancements
function showOrderModal(menuItem, price) {
    // This function can be expanded to show a modal for ordering
    console.log(`Ordering: ${menuItem} - ${price}`);
    // Implement modal display logic here
}

function updateCartCount(count) {
    // This function can be used to update cart count if shopping cart is implemented
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = count;
    }
}
