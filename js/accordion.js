const ACC = document.getElementsByClassName("accordion");

for (let i = 0; i < ACC.length; i++) {
    ACC[i].addEventListener("click", function () {
        let panel = this.nextElementSibling;

        panel.classList.toggle("active");
        this.classList.toggle("active");

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
