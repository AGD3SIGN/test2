// ========================================
// MAIN JAVASCRIPT FILE
// ========================================

// DOM Elements

const projectModal = document.getElementById("projectModal")

// Global Variables
const isMenuOpen = false
const isScrolled = false
const currentWordIndex = 0
const currentText = ""
const isDeleting = false
const typeSpeed = 150

// Declare AOS variable
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

// 1. Project Modal Functions
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

//UI Controller class
class UIController {
    constructor() {
        this.body = document.body
        this.desktopThemeToggle = document.getElementById("desktopThemeToggle")
        this.mobileThemeToggle = document.getElementById("mobileThemeToggle")
        this.mobileMenuBtn = document.getElementById("mobileMenuBtn")
        this.mobileMenu = document.getElementById("mobileMenu")
        this.floatingNav = document.getElementById("floatingNav")
        this.scrollToTopBtn = document.getElementById("scrollToTop")
        this.progressBar = document.getElementById("progressBar")
        this.navLinks = document.querySelectorAll(".nav-link")
        this.mobileLinks = document.querySelectorAll(".mobile-nav-link")
        this.sections = document.querySelectorAll("section[id]")
        // this.portfolioModal = document.getElementById("portfolioModal")
        // this.modalClose = document.getElementById("modalClose")
        // this.portfolioCards = document.querySelectorAll(".portfolio-card")
        this.isMenuOpen = false

        this.init()
    }

    init() {
        this.initTheme()
        this.initMenu()
        this.initActiveLinks()
        this.initSmoothScroll()
        this.initClickOutside()
        this.initBodyScrollLock()
        this.initScrollToTop()
        this.initProgressBar()
        // this.initPortfolioModal()
        this.initTypingEffect()
        this.initCurrentYear()
    }

    //Theme Toggle
    initTheme() {
        const currentTheme = localStorage.getItem("theme") || "light"
        this.body.setAttribute("data-theme", currentTheme)

        const toggleTheme = () => {
            const currentTheme = this.body.getAttribute("data-theme")
            const newTheme = currentTheme === "dark" ? "light" : "dark"
            this.body.setAttribute("data-theme", newTheme)
            localStorage.setItem("theme", newTheme)
        }

        this.desktopThemeToggle?.addEventListener("click", toggleTheme)
        this.mobileThemeToggle?.addEventListener("click", toggleTheme)
    }

    //Mobile Menu open/close
    initMenu() {
        this.mobileMenuBtn?.addEventListener("change", () => {
            this.isMenuOpen = this.mobileMenuBtn.checked
            this.mobileMenu.classList.toggle("active", this.isMenuOpen)
            this.floatingNav.classList.toggle("menu-open", this.isMenuOpen)

            if (this.isMenuOpen) {
                document.body.style.overflow = "hidden"
            } else {
                document.body.style.overflow = ""
            }
        })

        this.mobileLinks.forEach((link) => {
            link.addEventListener("click", () => this.closeMenu())
        })
    }

    closeMenu() {
        this.isMenuOpen = false
        this.mobileMenu.classList.remove("active")
        this.floatingNav.classList.remove("menu-open")
        this.mobileMenuBtn.checked = false
        document.body.style.overflow = ""
    }

    // Close mobile menu on outside click
    initClickOutside() {
        document.addEventListener("click", (e) => {
            if (this.isMenuOpen && !this.floatingNav.contains(e.target)) {
                this.closeMenu()
            }
        })
    }

    // Lock scroll when menu is open
    initBodyScrollLock() {
        this.mobileMenu.addEventListener("transitionstart", () => {
            if (this.mobileMenu.classList.contains("active")) {
                this.body.style.overflow = "hidden"
            }
        })

        this.mobileMenu.addEventListener("transitionend", () => {
            if (!this.mobileMenu.classList.contains("active")) {
                this.body.style.overflow = ""
            }
        })
    }

    // Active section highlighting
    initActiveLinks() {
        const updateActiveLink = (activeId) => {
            this.navLinks.forEach((link) => {
                link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`)
            })
            this.mobileLinks.forEach((link) => {
                link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`)
            })
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        updateActiveLink(entry.target.id)
                    }
                })
            },
            {
                threshold: 0.3,
                rootMargin: "-20% 0px -70% 0px",
            },
        )

        this.sections.forEach((section) => observer.observe(section))
            ;[...this.navLinks, ...this.mobileLinks].forEach((link) => {
                link.addEventListener("click", (e) => {
                    e.preventDefault()
                    const href = link.getAttribute("href").substring(1)
                    updateActiveLink(href)
                    const target = document.getElementById(href)
                    if (target) {
                        target.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    if (this.isMenuOpen) {
                        this.closeMenu()
                    }
                })
            })
    }

    //Smooth Scroll
    initSmoothScroll() {
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

    // Scroll-to-top button logic
    initScrollToTop() {
        if (!this.scrollToTopBtn) return

        window.addEventListener("scroll", () => {
            this.scrollToTopBtn.classList.toggle("visible", window.scrollY > 300)
        })

        this.scrollToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        })
    }

    // Scroll progress bar
    initProgressBar() {
        if (!this.progressBar) return

        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = (scrollTop / docHeight) * 100
            this.progressBar.style.width = `${progress}%`
        })
    }

    // Typing effect for hero section
    initTypingEffect() {
        const typingElement = document.getElementById("typingText")
        if (!typingElement) return

        const words = ["fast", "accessible", "beautiful", "responsive", "modern"]
        let currentWordIndex = 0
        let currentCharIndex = 0
        let isDeleting = false

        const typeEffect = () => {
            const currentWord = words[currentWordIndex]

            if (isDeleting) {
                typingElement.textContent = currentWord.substring(0, currentCharIndex - 1)
                currentCharIndex--
            } else {
                typingElement.textContent = currentWord.substring(0, currentCharIndex + 1)
                currentCharIndex++
            }

            let typeSpeed = isDeleting ? 100 : 150

            if (!isDeleting && currentCharIndex === currentWord.length) {
                typeSpeed = 2000 // Pause at end of word
                isDeleting = true
            } else if (isDeleting && currentCharIndex === 0) {
                isDeleting = false
                currentWordIndex = (currentWordIndex + 1) % words.length
                typeSpeed = 500 // Pause before next word
            }

            setTimeout(typeEffect, typeSpeed)
        }

        typeEffect()
    }

    // Set current year in footer
    initCurrentYear() {
        const yearElement = document.getElementById("currentYear")
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear()
        }
    }
}

// Global utility functions
function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId)
    if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
}

// Instantiate when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    new UIController()
})