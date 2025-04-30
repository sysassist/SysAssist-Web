// Testimonial data for customers
const testimonials = [
    {
        name: "SEWA",
        text: "The HRMS system developed for us streamlined our entire human resource operations. The team demonstrated exceptional understanding of our organizational needs and delivered a comprehensive solution that automated our recruitment, payroll, and performance management processes. Their attention to detail and responsive support made the transition smooth for our HR department.",
        image: "images/Sewa-cooperative.png",
        rating: 5
    },
    {
        name: "Scientific Systems & Chemicals",
        text: "We approached the team to develop a Laboratory Management System (LMS) that could handle our complex workflow. The resulting system has transformed how we track samples, manage inventories, and generate reports. Their technical expertise and industry knowledge were evident in how they addressed our specific requirements. The LMS has significantly reduced errors and improved our operational efficiency.",
        image: "images/sscmplogo.png",
        rating: 5
    },
    {
        name: "Pikvan App",
        text: "We were facing compatibility issues with our mobile application on certain devices, causing us to lose a significant portion of potential users. The development team quickly identified the root causes and implemented solutions that expanded our app's compatibility across a wider range of mobile devices. Their technical troubleshooting skills and prompt resolution helped us increase our user base substantially.",
        image: "images/Sys.png",
        rating: 4
    },
];

// Partners data
const partners = [
    {
        name: "NET TECH INOVATIONS S.P.C. (Sultanate of Oman)",
        description: "With deep roots in Oman and over 8 years of experience in the telecom and IT industry, Abhijeet Singh Rana leads the company with a strong understanding of the local market and a commitment to delivering reliable, high-quality technology solutions.Under his leadership, the company has become a trusted provider of IT, software, and basic AV services, and is proudly recognized as a B2B channel partner for Vodafone Oman. We have successfully executed a wide range of projects for clients across various sectors, including Nakheel Oman Development Company, Azzan Bin Qais Education Group, Mohsin Haider Darwish (MHD), and many others.",
        companyImage: "images/Abhijeet_Company_Pic2.jpg",
        directorImage: "images/Abhijeet_Pic1.jpg",
        directorName: "Abhijeet Singh Rana",
        directorTitle: "Founder & Managing Partner",
        // partnerType: "Founder & Managing Partner"
    },
   
];

// DOM Elements
const testimonialContainer = document.getElementById('testimonials-container');
const partnersContainer = document.getElementById('partners-container');

// Function to render testimonials
function renderTestimonials() {
    testimonialContainer.innerHTML = '';
    
    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        
        const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
        
        testimonialCard.innerHTML = `
            <div class="profile-image-container">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="profile-image">
            </div>
            <p class="testimonial-text">${testimonial.text}</p>
            <h3 class="client-name">${testimonial.name}</h3>
            <div class="rating">${stars}</div>
        `;
        
        testimonialContainer.appendChild(testimonialCard);
    });
}

// Function to render partners
function renderPartners() {
    partnersContainer.innerHTML = '';
    
    partners.forEach(partner => {
        const partnerCard = document.createElement('div');
        partnerCard.className = 'partner-card';
        
        partnerCard.innerHTML = `
            <div class="partner-header">
                <div class="company-image-container">
                <img src="${partner.companyImage}" alt="${partner.name}" class="company-image">
                </div>
                <h3 class="partner-name">${partner.name}</h3>
               
            </div>
            
            <div class="partner-content">
                <p class="partner-description">${partner.description}</p>
            </div>
            
            <div class="partner-director">
                <div class="director-image-container">
                    <img src="${partner.directorImage}" alt="${partner.directorName}" class="director-image">
                </div>
                <div class="director-info">
                    <h4 class="director-name">${partner.directorName}</h4>
                    <p class="director-title">${partner.directorTitle}</p>
                </div>
            </div>
        `;
        
        partnersContainer.appendChild(partnerCard);
    });
}

// Initial render when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderPartners();
    renderTestimonials();
});
