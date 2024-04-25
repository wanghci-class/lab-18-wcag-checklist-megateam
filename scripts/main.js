// FUNCTIONS FOR SECTION 1: Perceivable

function processFormatting1(text) {
    return text;
}

function processChecklists1(text) {
    return text;
}

function processCriteria1(text) {
    return text;
}

function processGuidelines1(text) {
    let re = new RegExp("#### Guideline([^]+?)\n([^]+?)<!--END GUIDELINE-->", "g")
    text = text.replaceAll(re, `<div class="guideline">
    <h4>$1</h4>
    <ul class="criteria">
      $2
    </ul>
  </div>`);
    return text;
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
