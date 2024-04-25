// FUNCTIONS FOR SECTION 1: Perceivable

function processFormatting1(text) {
    text = text.replaceAll(/__([^_]+?)__/g, '<strong>$1</strong>');
    text = text.replaceAll(/_([^_]+?)_/g, '<em>$1</em>');
    text = text.replaceAll(/`([^`]+?)`/g, '<code>$1</code>');
    text = text.replaceAll(/\[([^\]]+?)\]\(([^)]+?)\)/g, '<a href="$2">$1</a>');
    return text;
}

function processChecklists1(text) {
    const checklistPattern = / {4}\* (.+)/g;
    return text.replaceAll(checklistPattern, '<li>$1</li>');
}

function processCriteria1(text) {
    return text;
}

function processGuidelines1(text) {
    const guidelinePattern = /^#### (.*?)([\s\S]*?)<!--END GUIDELINE-->/gm;
    return text.replaceAll(guidelinePattern, function(match, title, content) {
        content = processCriteria1(content.trim());
        return `<div class="guideline"><h4>${title}</h4><ul class="criteria">${content}</ul></div>`;
    });
}


// FUNCTIONS FOR SECTION 2: Operable

function processFormatting2(text) {
    return text;
}

function processChecklists2(text) {
    return text;
}

function processCriteria2(text) {
    return text;
}

function processGuidelines2(text) {
    return text;
}


// FUNCTIONS FOR SECTION 3: Understandable

function processFormatting3(text) {
    return text;
}

function processChecklists3(text) {
    return text;
}

function processCriteria3(text) {
    return text;
}

function processGuidelines3(text) {
    return text;
}


// FUNCTIONS FOR SECTION 4: Robust

function processFormatting4(text) {
    return text;
}

function processChecklists4(text) {
    return text;
}

function processCriteria4(text) {
    return text;
}

function processGuidelines4(text) {
    return text;
}


/////////////////////////////////////////////////////
// DO NOT MODIFY THE CODE BELOW

async function loadContent(elementId, fileUrl, functions) {
    const element = document.getElementById(elementId);
    const response = await fetch(fileUrl);
    let text = await response.text();

    text = functions.reduce((acc, func) => {
        return func(acc);
    }, text);

    element.innerHTML = text;
}

document.addEventListener("DOMContentLoaded", async function() {
    await loadContent("perceivable-contents", "./data/01_perceivable.md",
        [processFormatting1, processChecklists1, processCriteria1, processGuidelines1]);
    await loadContent("operable-contents", "./data/02_operable.md",
        [processFormatting2, processChecklists2, processCriteria2, processGuidelines2]);
    await loadContent("understandable-contents", "./data/03_understandable.md",
        [processFormatting3, processChecklists3, processCriteria3, processGuidelines3]);
    await loadContent("robust-contents", "./data/04_robust.md",
        [processFormatting4, processChecklists4, processCriteria4, processGuidelines4]);

    listify();
});
