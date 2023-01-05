let elementosAcordeon = document.querySelectorAll("button[data-accordion-section-ref]");

elementosAcordeon.forEach(accordionButtonNode => {
  accordionButtonNode.addEventListener('click', function() {
    const accordionSection = this.getAttribute('data-accordion-section-ref');
    const contentNodeWrapper = document.querySelector(`[data-accordion-section=${accordionSection}]`)
    const contentNode = contentNodeWrapper.children[0];
    if (contentNodeWrapper.style.maxHeight) {
      contentNodeWrapper.style.maxHeight = null;
    } else {
      contentNodeWrapper.style.maxHeight = `${contentNode.clientHeight+ 300}px`;
    }
  });
})


