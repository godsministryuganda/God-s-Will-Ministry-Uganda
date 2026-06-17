// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Remitly Recipient Information
const remitlyRecipient = {
    name: 'Ssebuliba Charles',
    country: 'UGANDA',
    city: 'MITYANA',
    phone: '+256 768 170 144',
    address: 'MARKET STREET',
    delivery: 'MOBILE MONEY',
    wallet: 'MTN MOBILE MONEY'
};

// Donation amount functions - Remitly Integration
function openRemitly(amount) {
    // Store amount in session for reference
    sessionStorage.setItem('donationAmount', amount);
    
    // Create instruction message
    const recipientInfo = `
✨ DONATION INSTRUCTIONS - PLEASE READ ✨

You're about to send $${amount} USD to God's_will_ministry Uganda

📝 RECIPIENT DETAILS (Copy & paste in Remitly):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Full Name: Ssebuliba Charles
Country: UGANDA
City: MITYANA
Phone: +256 768 170 144
Address: MARKET STREET
Delivery Method: MOBILE MONEY
Mobile Wallet: MTN MOBILE MONEY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEPS:
1️⃣ Click OK to open Remitly
2️⃣ Enter amount: $${amount}
3️⃣ Paste the recipient details above
4️⃣ Complete payment
5️⃣ Your donation reaches orphans in Mityana! 💚

Thank you for supporting God's_will_ministry Uganda! 🇺🇬
    `;
    
    alert(recipientInfo);
    
    // Open Remitly in new tab
    window.open('https://www.remitly.com/app/send', '_blank');
    
    // Show success message
    setTimeout(() => {
        console.log('Opened Remitly for $' + amount + ' donation');
    }, 500);
}

function openRemitlyCustom() {
    const amount = document.getElementById('customAmount').value;
    if (amount && amount > 0) {
        openRemitly(amount);
    } else {
        alert('Please enter a valid donation amount (e.g., 50)');
    }
}

function setAmount(amount) {
    document.getElementById('customAmount').value = amount;
    console.log('Donation amount set to: $' + amount);
}

function donateAmount() {
    const amount = document.getElementById('customAmount').value;
    if (amount && amount > 0) {
        openRemitly(amount);
    } else {
        alert('Please enter a valid donation amount');
    }
}

// Quick donate buttons - improved with direct links
function quickDonate(amount) {
    // Show donation info and open Remitly
    const recipientInfo = `
💚 DONATE $${amount} USD TO GOD'S WILL MINISTRY UGANDA 💚

RECIPIENT: Ssebuliba Charles
PHONE: +256 768 170 144
COUNTRY: UGANDA
CITY: MITYANA

Quick Steps:
1. Click OK → Remitly opens
2. Enter Amount: $${amount}
3. Select Recipient Type: Mobile Money
4. Country: UGANDA
5. Phone Number: +256 768 170 144
6. Name: Ssebuliba Charles
7. Complete Payment

Your donation changes lives! Every dollar feeds, educates, and heals an orphan. 🙏
    `;
    
    alert(recipientInfo);
    window.open('https://www.remitly.com/app/send', '_blank');
}

// Contact form submission
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const subject = this.querySelectorAll('input')[2].value;
    const message = this.querySelector('textarea').value;
    
    // Basic validation
    if (name && email && subject && message) {
        alert('Thank you for your message!\n\nYour message has been received. We will get back to you soon at ' + email);
        this.reset();
        
        // In a real implementation, this would send data to a backend
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name, email, subject, message })
        // });
    } else {
        alert('Please fill in all fields');
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Newsletter subscription
document.addEventListener('DOMContentLoaded', function() {
    const newsletterInputs = document.querySelectorAll('.newsletter-input');
    newsletterInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                if (this.value) {
                    alert('Thank you for subscribing!\n\nYou will receive updates on our latest programs and impact stories.');
                    this.value = '';
                }
            }
        });
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply to cards
document.querySelectorAll('.impact-card, .program-card, .testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

// Add active link highlighting based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Copy to Clipboard Function for Bank Details
function copyToClipboard(text) {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    
    // Select and copy the text
    textarea.select();
    document.execCommand('copy');
    
    // Remove the temporary element
    document.body.removeChild(textarea);
    
    // Get the button that was clicked
    event.target.classList.add('copied');
    
    // Show feedback message
    const originalText = event.target.textContent;
    event.target.textContent = '✓ Copied!';
    
    // Reset button after 2 seconds
    setTimeout(() => {
        event.target.classList.remove('copied');
        event.target.textContent = originalText;
    }, 2000);
    
    // Show notification
    console.log('Copied to clipboard: ' + text);
}
