function scrollToElement(elementId) {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.error(`Elemento com ID "${elementId}" não encontrado.`);
    }
}
