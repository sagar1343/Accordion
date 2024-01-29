const accordion = document.querySelector("accordion");
const accordionItems = document.querySelectorAll(".accordion-item");
function toggleAccordion(id) {
  const selectedAccordionItem = document.getElementById(id);
  accordionItems.forEach((item) => {
    item.querySelector(".icon").classList.remove("rotateIcon");
    if (item != selectedAccordionItem) {
      item.lastElementChild.classList.remove("active");
    } else {
      selectedAccordionItem.lastElementChild.classList.toggle("active");
    }
  });
}
function changeIcon(accordionItem) {
  if (accordionItem.lastElementChild.classList.contains("active")) {
    accordionItem.querySelector(".icon").classList.add("rotateIcon");
  } else {
    accordionItem.querySelector(".icon").classList.remove("rotateIcon");
  }
}
accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    toggleAccordion(item.id);
    changeIcon(item);
  });
});
