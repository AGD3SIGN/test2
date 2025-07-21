// Project Data
const projectsData = [
    {
        id: "bella-vista",
        title: "Bella Vista Restaurant",
        description: "Modern restaurant website with online reservations and menu management",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
        category: "Restaurant",
        duration: "6 weeks",
        teamSize: "Solo project",
        technologies: ["React", "Next.js", "Stripe", "Tailwind CSS", "Framer Motion", "Supabase"],
        challenge:
            "Bella Vista needed to modernize their online presence and streamline their reservation process. Their old website was outdated, not mobile-friendly, and they were losing customers to competitors with better online experiences.",
        solution:
            "I designed and developed a modern, mobile-first website with an integrated reservation system, online menu, and payment processing. The site features smooth animations, fast loading times, and an intuitive user experience that guides visitors toward making reservations.",
        results: [
            {
                metric: "Online Reservations",
                value: "+150%",
                description: "Increase in online bookings",
            },
            {
                metric: "Mobile Traffic",
                value: "78%",
                description: "Of total website visitors",
            },
            {
                metric: "Page Load Time",
                value: "1.2s",
                description: "Average load time",
            },
        ],
        features: [
            "Real-time reservation system",
            "Interactive menu with dietary filters",
            "Online payment processing",
            "Mobile-optimized design",
            "SEO optimization",
            "Google Maps integration",
            "Social media integration",
            "Admin dashboard for staff",
        ],
        testimonial: {
            quote:
                "Alex completely transformed our online presence. Our new website is beautiful and has increased our reservations by 150%. He understood our vision perfectly and delivered beyond our expectations.",
            author: "Maria Rodriguez",
            position: "Owner, Bella Vista Restaurant",
        },
        liveUrl: "https://bellavista-demo.com",
        githubUrl: "https://github.com/alexchen/bella-vista",
        gallery: [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&h=400&fit=crop",
        ],
    },
    {
        id: "urban-threads",
        title: "Urban Threads Boutique",
        description: "E-commerce platform for fashion retailer with inventory management",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
        category: "E-commerce",
        duration: "8 weeks",
        teamSize: "Solo project",
        technologies: ["Shopify", "JavaScript", "CSS", "Liquid", "Shopify Plus", "Klaviyo"],
        challenge:
            "Urban Threads was struggling with their existing e-commerce platform that had poor conversion rates, slow loading times, and a confusing checkout process. They needed a complete overhaul to compete in the competitive fashion market.",
        solution:
            "I rebuilt their entire e-commerce experience on Shopify Plus with a focus on conversion optimization. The new design features intuitive navigation, high-quality product imagery, streamlined checkout, and integrated email marketing automation.",
        results: [
            {
                metric: "Online Sales",
                value: "+200%",
                description: "Increase in revenue",
            },
            {
                metric: "Conversion Rate",
                value: "4.2%",
                description: "Up from 1.8%",
            },
            {
                metric: "Cart Abandonment",
                value: "-35%",
                description: "Reduction in abandoned carts",
            },
        ],
        features: [
            "Advanced product filtering",
            "Wishlist functionality",
            "Size guide integration",
            "Customer reviews system",
            "Email marketing automation",
            "Inventory management",
            "Multi-currency support",
            "Social media integration",
        ],
        testimonial: {
            quote:
                "Alex built us an amazing e-commerce site that's doubled our online sales. He's responsive, professional, and really cares about his clients' success. Best investment we've made!",
            author: "Sarah Kim",
            position: "Founder, Urban Threads Boutique",
        },
        liveUrl: "https://urbanthreads-demo.com",
        githubUrl: "https://github.com/alexchen/urban-threads",
        gallery: [
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop",
        ],
    },
    {
        id: "johnson-law",
        title: "Johnson & Associates Law",
        description: "Professional website for law firm with client portal",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=300&fit=crop",
        category: "Professional Services",
        duration: "4 weeks",
        teamSize: "Solo project",
        technologies: ["WordPress", "PHP", "MySQL", "Custom Theme", "ACF", "Yoast SEO"],
        challenge:
            "Johnson & Associates needed a professional website that would establish credibility and generate more client inquiries. Their existing site looked outdated and didn't effectively communicate their expertise or build trust with potential clients.",
        solution:
            "I created a sophisticated, professional website that showcases their expertise and builds trust through strategic design and content organization. The site includes detailed practice area pages, attorney profiles, and a secure client portal.",
        results: [
            {
                metric: "Client Inquiries",
                value: "+75%",
                description: "Increase in contact forms",
            },
            {
                metric: "Search Rankings",
                value: "Top 3",
                description: "For key practice areas",
            },
            {
                metric: "Time on Site",
                value: "+120%",
                description: "Average session duration",
            },
        ],
        features: [
            "Practice area showcase",
            "Attorney profiles",
            "Client testimonials",
            "Secure client portal",
            "Blog/news section",
            "Contact forms",
            "SEO optimization",
            "Mobile responsiveness",
        ],
        testimonial: {
            quote:
                "Working with Alex was a game-changer for our firm. The new website has significantly improved our credibility and we're getting 75% more client inquiries. Highly recommend!",
            author: "David Johnson",
            position: "Partner, Johnson & Associates Law",
        },
        liveUrl: "https://johnsonlaw-demo.com",
        gallery: [
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=400&fit=crop",
        ],
    },
    {
        id: "fitcore-gym",
        title: "FitCore Gym",
        description: "Fitness center website with class booking and member portal",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
        category: "Fitness",
        duration: "7 weeks",
        teamSize: "Solo project",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Socket.io"],
        challenge:
            "FitCore Gym was managing class bookings manually through phone calls and emails, leading to confusion, double bookings, and frustrated members. They needed a digital solution to streamline operations and improve member experience.",
        solution:
            "I built a comprehensive web application with real-time class booking, member management, and payment processing. The system includes automated notifications, waitlist management, and a member portal for tracking workouts and progress.",
        results: [
            {
                metric: "Membership Signups",
                value: "+120%",
                description: "Increase in new members",
            },
            {
                metric: "Class Utilization",
                value: "95%",
                description: "Average class capacity",
            },
            {
                metric: "Admin Time Saved",
                value: "15hrs/week",
                description: "Reduced manual work",
            },
        ],
        features: [
            "Real-time class booking",
            "Member portal",
            "Payment processing",
            "Waitlist management",
            "Automated notifications",
            "Trainer profiles",
            "Progress tracking",
            "Mobile app integration",
        ],
        testimonial: {
            quote:
                "The booking system Alex built has streamlined our operations completely. Members love how easy it is to book classes, and we've seen a 120% increase in membership sign-ups.",
            author: "Mike Thompson",
            position: "Owner, FitCore Gym",
        },
        liveUrl: "https://fitcore-demo.com",
        githubUrl: "https://github.com/alexchen/fitcore-gym",
        gallery: [
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1549476464-37392f717541?w=600&h=400&fit=crop",
        ],
    },
]

// DOM Elements
const portfolioGrid = document.getElementById("portfolioGrid")
const modal = document.getElementById("projectModal")
const modalClose = document.getElementById("modalClose")
const modalHeroImage = document.getElementById("modalHeroImage")
const modalBody = document.getElementById("modalBody")
const scrollToTopBtn = document.getElementById("scrollToTop")

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    renderPortfolio()
    initScrollAnimations()
    initScrollToTop()
    initSmoothScrolling()
    initModal()
})

// Render Portfolio
function renderPortfolio() {
    portfolioGrid.innerHTML = projectsData
        .map(
            (project) => `
    <div class="portfolio-card fade-in-up" data-project-id="${project.id}">
      <div class="portfolio-image">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="portfolio-content">
        <div class="portfolio-header">
          <h3 class="portfolio-title">${project.title}</h3>
          <span class="portfolio-category">${project.category}</span>
        </div>
        <p class="portfolio-description">${project.description}</p>
        <p class="portfolio-result">${project.results[0]?.description}</p>
        <div class="portfolio-tech">
          ${project.technologies
                    .slice(0, 3)
                    .map((tech) => `<span class="tech-badge">${tech}</span>`)
                    .join("")}
          ${project.technologies.length > 3 ? `<span class="tech-badge">+${project.technologies.length - 3} more</span>` : ""}
        </div>
      </div>
    </div>
  `,
        )
        .join("")

    // Add click listeners
    document.querySelectorAll(".portfolio-card").forEach((card) => {
        card.addEventListener("click", function () {
            const projectId = this.dataset.projectId
            const project = projectsData.find((p) => p.id === projectId)
            if (project) {
                openModal(project)
            }
        })
    })
}

// Modal Functions
function initModal() {
    modalClose.addEventListener("click", closeModal)
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal()
        }
    })

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal()
        }
    })
}

function openModal(project) {
    modalHeroImage.src = project.image
    modalHeroImage.alt = project.title

    modalBody.innerHTML = `
    <div class="modal-header">
      <div class="modal-meta">
        <span class="modal-badge">${project.category}</span>
        <div class="modal-info">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>${project.duration}</span>
        </div>
        <div class="modal-info">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>${project.teamSize}</span>
        </div>
      </div>
      <h2 class="modal-title">${project.title}</h2>
      <p class="modal-description">${project.description}</p>
      <div class="modal-buttons">
        ${project.liveUrl
            ? `
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15,3 21,3 21,9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            View Live Site
          </a>
        `
            : ""
        }
        ${project.githubUrl
            ? `
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            View Code
          </a>
        `
            : ""
        }
      </div>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">Technologies Used</h3>
      <div class="tech-grid">
        ${project.technologies.map((tech) => `<span class="tech-item">${tech}</span>`).join("")}
      </div>
    </div>

    <div class="modal-section">
      <div class="challenge-solution">
        <div class="cs-card">
          <div class="cs-header">
            <svg class="cs-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <h4 class="cs-title">The Challenge</h4>
          </div>
          <p class="cs-content">${project.challenge}</p>
        </div>
        <div class="cs-card">
          <div class="cs-header">
            <svg class="cs-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
            </svg>
            <h4 class="cs-title">The Solution</h4>
          </div>
          <p class="cs-content">${project.solution}</p>
        </div>
      </div>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">Results & Impact</h3>
      <div class="results-grid">
        ${project.results
            .map(
                (result) => `
          <div class="result-card">
            <div class="result-value">${result.value}</div>
            <div class="result-metric">${result.metric}</div>
            <div class="result-description">${result.description}</div>
          </div>
        `,
            )
            .join("")}
      </div>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">Key Features</h3>
      <div class="features-grid">
        ${project.features
            .map(
                (feature) => `
          <div class="feature-item">
            <div class="feature-dot"></div>
            <span class="feature-text">${feature}</span>
          </div>
        `,
            )
            .join("")}
      </div>
    </div>

    ${project.gallery.length > 0
            ? `
      <div class="modal-section">
        <h3 class="modal-section-title">Project Gallery</h3>
        <div class="gallery-grid">
          ${project.gallery
                .map(
                    (image, index) => `
            <div class="gallery-item">
              <img src="${image}" alt="${project.title} screenshot ${index + 1}">
            </div>
          `,
                )
                .join("")}
        </div>
      </div>
    `
            : ""
        }

    ${project.testimonial
            ? `
      <div class="modal-section">
        <div class="testimonial-modal">
          <blockquote class="testimonial-quote">"${project.testimonial.quote}"</blockquote>
          <div class="testimonial-author">
            <div class="author-avatar">${project.testimonial.author.charAt(0)}</div>
            <div class="author-info">
              <h4>${project.testimonial.author}</h4>
              <p>${project.testimonial.position}</p>
            </div>
          </div>
        </div>
      </div>
    `
            : ""
        }

    <div class="modal-cta">
      <h3>Ready to start your project?</h3>
      <p>Let's create something amazing together.</p>
      <div class="modal-cta-buttons">
        <a href="#contact" class="btn btn-primary" onclick="closeModal()">Start Your Project</a>
        ${project.liveUrl
            ? `
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15,3 21,3 21,9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Visit Live Site
          </a>
        `
            : ""
        }
      </div>
    </div>
  `

    modal.classList.add("active")
    document.body.style.overflow = "hidden"
}

function closeModal() {
    modal.classList.remove("active")
    document.body.style.overflow = ""
}

// Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate")
                }
            })
        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        },
    )

    document.querySelectorAll(".fade-in-up, .fade-in").forEach((el) => {
        observer.observe(el)
    })
}

// Scroll to Top
function initScrollToTop() {
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add("visible")
        } else {
            scrollToTopBtn.classList.remove("visible")
        }
    })

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    })
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()
            const target = document.querySelector(this.getAttribute("href"))
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                })
            }
        })
    })
}
