document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const floatingNav = document.getElementById("floatingNav");

    if (!mobileMenuBtn || !mobileMenu || !floatingNav) {
        console.warn("Mobile menu elements not found.");
        return;
    }

    // Toggle the menu open/close when the checkbox state changes
    mobileMenuBtn.addEventListener("change", function () {
        const isOpen = this.checked;

        mobileMenu.classList.toggle("active", isOpen);
        floatingNav.classList.toggle("menu-open", isOpen);
        document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Close the menu when a link is clicked
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenuBtn.checked = false;
            mobileMenu.classList.remove("active");
            floatingNav.classList.remove("menu-open");
            document.body.style.overflow = "";
        });
    });

    // Optional: Close the menu if you click outside the nav
    document.addEventListener("click", (e) => {
        if (
            mobileMenuBtn.checked &&
            !floatingNav.contains(e.target) &&
            !mobileMenuBtn.contains(e.target)
        ) {
            mobileMenuBtn.checked = false;
            mobileMenu.classList.remove("active");
            floatingNav.classList.remove("menu-open");
            document.body.style.overflow = "";
        }
    });
});
