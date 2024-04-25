[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7XMDw_JC)
# Web Content Accessibility Guidelines (WCAG) Checklist

## Instructions

Your task is to read in a text file (containing Markdown-formatted text) and create HTML elements to fill in the page.

We've broken the problem up into multiple functions for each section, so you can split the workload across team members. They will look like the following:

* `processFormatting(String) : String`
    * This function should do multiple RegEx "find-and-replaces" to convert the given Markdown text into HTML, for the [formatting](#markdown-format-guide) rules.    
* `processChecklists(String) : String`
    * This function should do a RegEx "find-and-replace" to convert the given Markdown text into HTML, for only the [Checklists](#format-checklists).
* `processCriteria(String) : String`
    * This function should do a RegEx "find-and-replace" to convert the given Markdown text into HTML, for only the [Criteria](#format-criteria).
* `processGuidelines(String) : String`
    * This function should do a RegEx "find-and-replace" to convert the given Markdown text into HTML, for only the [Guidelines](#format-guidelines).

These functions will be called one after the other, so the output of one function will be the input of the next. Finally, the output of `processGuidelines` will be the HTML that will be inserted into the DOM.

### Steps:

1. Your team will need to code all four `process` functions.
    * In each function, you must only process the text that is relevant to that function. For example, `processChecklists` should not convert Markdown links to HTML.
    * We recommend you delegate each function to a "sub-team"
    * You may want to reference this guide on [using RexExp objects in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
1. Try to test/develop your RegEx patterns in RegExr **first**! [Here is one with example markdown.](https://regexr.com/7vc6l)
1. Don't forget to test the webpage to make sure that your function is working properly!
    * You may need to view the page's source to see your converted output.
    * You can also log the returned string to the console for debugging.
1. After finishing a function, Make a commit in Git with your team's name and the method name as the commit message, like `Team Kraken - processFormatting1`.
    * [Git Cheat Sheet](https://about.gitlab.com/images/press/git-cheat-sheet.pdf)
1. Synchronize (`git pull` from the server, then `git push`) your commits with the remote repository
    * You may (read: will likely) encounter merge conflicts after a `pull`! If you do, [follow the steps here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line) to resolve the conflict and commit the resolution.
        * You will need to make a decision on whether or not to include **your** code vs. the code from the **remote**.
        * Make sure you **test** the website again to make sure you didn't accidentally break anything 😖
    * After resolving the conflict, commit it and then try to synchronize your commits again.
    * If you get an error when `pull`ing, see if it mentions a default pull strategy or similar.
        * This means you need to set the default pull behavior. For this lab, we will want to tell it to `merge`. Run this command to set merge as the default:
            ```
            git config --global pull.merge true
            ```
        * Next, repeat the `pull` and `push` again, following the instructions above.
