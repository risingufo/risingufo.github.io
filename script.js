const sectionHead = document.querySelectorAll(".sectionHead");
const sectionIcon = document.querySelectorAll(".sectionIcon");
const sectionContent = document.querySelectorAll(".sectionContent");

sectionHead[0].addEventListener('click', () => {
    sectionIcon[0].classList.toggle("open");
    sectionContent[0].classList.toggle("open");
});

sectionHead[1].addEventListener('click', () => {
    sectionIcon[1].classList.toggle("open");
    sectionContent[1].classList.toggle("open");
});

sectionHead[2].addEventListener('click', () => {
    sectionIcon[2].classList.toggle("open");
    sectionContent[2].classList.toggle("open");
});

sectionHead[3].addEventListener('click', () => {
    sectionIcon[3].classList.toggle("open");
    sectionContent[3].classList.toggle("open");
});
