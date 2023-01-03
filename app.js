let elementosAcordeon = document.querySelectorAll("button[data-accordion-section-ref]");

elementosAcordeon.forEach(accordionButtonNode => {
  accordionButtonNode.addEventListener('click', function() {
    const accordionSection = this.getAttribute('data-accordion-section-ref');
    const element = document.querySelector(`[data-accordion-section=${accordionSection}]`)
    element.classList.toggle('accordion-visible');    
  });
})