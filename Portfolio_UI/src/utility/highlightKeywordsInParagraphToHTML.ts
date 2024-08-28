export const highlightKeywordsInParagraphToHTML = (paragraph: string) => {
    const stylingClass = 'keywords';
    // const pattern = /\*([^*]*(?:\.[^*]*)?)\*/g;
    const pattern =  /\*([^*]+?)\*/g;

    const jsxElement = `<span class="${stylingClass}">$1</span>`;
    const highlightedParagraph = paragraph.replace(pattern, jsxElement);
    // console.log('Text: ', highlightedParagraph);
    return highlightedParagraph;
}