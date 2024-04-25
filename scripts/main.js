// FUNCTIONS FOR SECTION 1: Perceivable

function processFormatting1(text) {
  let re = new RegExp('__(.*?)__', 'g');
  text = text.replaceAll(re, '<strong>$1</strong>');
  re = new RegExp('_(.*?)_', 'g');
  text = text.replaceAll(re, '<em>$1</em>');
  re = new RegExp('`(.*?)`', 'g');
  text = text.replaceAll(re, '<code>$1</code>');
  re = new RegExp('\\[(.*?)\\]\\((.*?)\\)', 'g');
  text = text.replaceAll(re, '<a href="$2">$1</a>')
  return text;
}

function processChecklists1(text) {
  re = /    \* ([^\n]*)/gms;
  html = '<li>$1</li>';
  text = text.replaceAll(re, html);
  return text;
}

function processCriteria1(text) {
  re = /\* ([^\n]*)(.*?)<!--END CRITERION-->/gms;
  let html = `<li>
                    $1
                    <ul class="checklist">
                        $2
                    </ul>
                </li>`;

  text = text.replaceAll(re, html);
  console.log(text);
  return text
}

function processGuidelines1(text) {
  let re = new RegExp('#### Guideline([^]+?)\n([^]+?)<!--END GUIDELINE-->', 'g')
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
  let re = new RegExp('^    \\* (.*)\.$', 'gm');
  text = text.replaceAll(re, '<li>$1.</li>');
  return text;
}

function processCriteria2(text) {
    let liList = document.createElement("li");
    let titleText = new RegExp("(?<! )\* (.+?(?=\())");
    titleText = titleText.replace('* ', '');
    titleText = titleText.replace('[', '');
    titleText = titleText.replace(']', '');
    liList.textContent = titleText;
    console.log("Title: " + titleText);

    let ulList = document.createElement("ul");

  return text;
}

function processGuidelines2(text) {
    let re = new RegExp("#### +?", "g");
    text = text.replaceAll(re, "<div class=\"guideline\">\n<h4>$1</h4></div>");
    return text;
}


// FUNCTIONS FOR SECTION 3: Understandable

function processFormatting3(text) {
  return text;
}

function processChecklists3(text) {
  let re = /    \* (.+)/g;
  text = text.replaceAll(re, '<li>$1</li>');
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
  // Bold
  text = text.replace(/__(.*?)__/g, '<strong>$1</strong>');

  // Italic
  text = text.replace(/_(.*?)_/g, '<em>$1</em>');

  // Code
  text = text.replace(/`(.*?)`/g, '<code>$1</code>');

  // Links
  text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
  return text;
}

function processChecklists4(text) {
  let re = /^ {4}\* (.+)$/gm;

  text = text.replace(re, '<li>$1</li>');

  text = `<ul class="checklist">${text}</ul>`;

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

document.addEventListener('DOMContentLoaded', async function() {
  await loadContent('perceivable-contents', './data/01_perceivable.md', [
    processFormatting1, processChecklists1, processCriteria1, processGuidelines1
  ]);
  await loadContent('operable-contents', './data/02_operable.md', [
    processFormatting2, processChecklists2, processCriteria2, processGuidelines2
  ]);
  await loadContent('understandable-contents', './data/03_understandable.md', [
    processFormatting3, processChecklists3, processCriteria3, processGuidelines3
  ]);
  await loadContent('robust-contents', './data/04_robust.md', [
    processFormatting4, processChecklists4, processCriteria4, processGuidelines4
  ]);

  listify();
});
