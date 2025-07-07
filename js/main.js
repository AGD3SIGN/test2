// DOM Elements
const navbar = document.getElementById("navbar")
const navToggle = document.getElementById("navToggle")
const navMenu = document.getElementById("navMenu")
const scrollProgress = document.getElementById("scrollProgress")
const scrollToTopBtn = document.getElementById("scrollToTop")
const projectModal = document.getElementById("projectModal")

// Import AOS
const AOS = window.AOS

// Initialize AOS
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 100,
    })
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled")
    } else {
        navbar.classList.remove("scrolled")
    }

    // Update scroll progress
    const scrollTop = window.pageYOffset
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = (scrollTop / documentHeight) * 100
    scrollProgress.style.width = progress + "%"

    // Show/hide scroll to top button
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("visible")
    } else {
        scrollToTopBtn.classList.remove("visible")
    }
})

// Mobile navigation toggle
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    const icon = navToggle.querySelector("i")
    if (navMenu.classList.contains("active")) {
        icon.className = "ri-close-line"
    } else {
        icon.className = "ri-menu-line"
    }
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        navToggle.querySelector("i").className = "ri-menu-line"
    })
})

// Smooth scrolling for navigation links
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

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId)
    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }
}

// Scroll to top function
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})

// Project modal functions
function openProjectModal(projectIndex) {
    // Hide all project content
    document.querySelectorAll(".modal-project").forEach((project) => {
        project.classList.remove("active")
    })

    // Show the selected project
    const selectedProject = document.getElementById(`project-${projectIndex}`)
    if (selectedProject) {
        selectedProject.classList.add("active")
    }

    // Show modal with fade animation
    projectModal.classList.add("active")
    document.body.style.overflow = "hidden"

    // Add a small delay for the content animation
    setTimeout(() => {
        if (selectedProject) {
            selectedProject.style.opacity = "1"
            selectedProject.style.transform = "translateY(0)"
        }
    }, 100)
}

function closeProjectModal() {
    // Fade out the modal
    projectModal.classList.remove("active")
    document.body.style.overflow = "unset"

    // Reset all project content after animation
    setTimeout(() => {
        document.querySelectorAll(".modal-project").forEach((project) => {
            project.classList.remove("active")
            project.style.opacity = "0"
            project.style.transform = "translateY(20px)"
        })
    }, 400)
}

// Close modal when clicking outside
projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) {
        closeProjectModal()
    }
})

// Close modal with escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && projectModal.classList.contains("active")) {
        closeProjectModal()
    }
})

// Form handling (if you want to add a contact form later)
function handleFormSubmit(event) {
    event.preventDefault()
    // Add form submission logic here
    console.log("Form submitted")
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate")
        }
    })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll("[data-aos]").forEach((el) => {
    observer.observe(el)
})

// Add loading state management
window.addEventListener("load", () => {
    document.body.classList.add("loaded")
})

// Performance optimization: Lazy load images
if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target
                img.src = img.dataset.src
                img.classList.remove("lazy")
                imageObserver.unobserve(img)
            }
        })
    })

    document.querySelectorAll("img[data-src]").forEach((img) => {
        imageObserver.observe(img)
    })
}

// Add smooth reveal animations for elements
function revealElements() {
    const reveals = document.querySelectorAll(".reveal")

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active")
        }
    })
}

window.addEventListener("scroll", revealElements)

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Set initial theme
    document.documentElement.setAttribute("data-theme", "dark")

    // Initialize scroll position
    if (window.scrollY === 0) {
        scrollProgress.style.width = "0%"
    }

    // Add loading animation
    setTimeout(() => {
        document.body.classList.add("loaded")
    }, 100)

    // Initialize modal projects state
    document.querySelectorAll(".modal-project").forEach((project) => {
        project.style.opacity = "0"
        project.style.transform = "translateY(20px)"
    })
})
