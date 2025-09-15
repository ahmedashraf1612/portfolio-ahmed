const toggleBtn = document.getElementById("modeToggle");
      const body = document.body;
      toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const icon = toggleBtn.querySelector("i");
        if (body.classList.contains("dark-mode")) {
          icon.classList.replace("fa-moon", "fa-sun");
        } else {
          icon.classList.replace("fa-sun", "fa-moon");
        }
      });