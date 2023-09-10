const tabs = document.querySelectorAll(".tab");
const tabCont = document.querySelectorAll(".header-content__inner");

if (tabCont.length > 0 || tabs.length > 0) {
    function hideCont() {
        tabCont.forEach((item) => {
            item.classList.remove("open");
        });

        tabs.forEach((item) => {
            item.classList.remove("active");
        });
    }
    function showCont(i = 0) {
        tabCont[i].classList.add("open");
        tabs[i].classList.add("active");
    }
    hideCont();
    showCont();

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            hideCont();
            showCont(index);
        });
    });
}