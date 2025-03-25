document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: "smooth"
            });
        });
    });
    
    const projects = document.querySelectorAll(".project");
    
    projects.forEach(project => {
        project.addEventListener("click", () => {
            const link = project.getAttribute("data-link");
            if (link) {
                window.open(link, "_blank");
            }
        });
    });
});