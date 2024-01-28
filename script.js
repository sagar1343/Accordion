const accordion = document.querySelector(".accordion");

function changeIcon(element) {
  element.classList.toggle("rotateIcon");
}

function toggleAccordionContent(accordionItem) {
  const accordionContent = accordionItem.querySelector(".accordion-content");
  accordionContent.classList.toggle("active");
}

function handleClick(event) {
  const accordionItem = event.target.closest(".accordion-item");

  const isActive = accordionItem.querySelector(".accordion-content.active");

  if (isActive) {
    changeIcon(accordionItem.querySelector(".icon"));
    toggleAccordionContent(accordionItem);
  } else {
    const activeItem = accordion.querySelector(".accordion-content.active");
    if (activeItem) {
      activeItem.classList.remove("active");
      changeIcon(activeItem.closest(".accordion-item").querySelector(".icon"));
    }
    toggleAccordionContent(accordionItem);
    changeIcon(accordionItem.querySelector(".icon"));
  }
}
accordion.addEventListener("click", (e) => handleClick(e));
