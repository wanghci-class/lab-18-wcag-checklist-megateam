#### Guideline 3.1: Make text content readable and understandable.
* [3.1.1 Language of Page](https://www.w3.org/TR/WCAG22/#language-of-page)
    * The language of the page is identified using the `lang` attribute (e.g., `&lt;html lang="en"&gt;`).
    <!--END CRITERION-->

* [3.1.2 Language of Parts](https://www.w3.org/TR/WCAG22/#language-of-parts)
    * The language of page content that is in a __different__ language is identified using the `lang` attribute (e.g., `&lt;blockquote lang="es"&gt;`).
    <!--END CRITERION-->

* [3.1.3 Unusual Words](https://www.w3.org/TR/WCAG22/#unusual-words)
    * [Words](https://webaim.org/techniques/writing/) that may be ambiguous, unfamiliar, or used in a very specific way are defined through adjacent text, a definition list, a glossary, or other suitable method.
    <!--END CRITERION-->

* [3.1.4 Abbreviations](https://www.w3.org/TR/WCAG22/#abbreviations)
    * The meaning of an unfamiliar abbreviation is provided by expanding it the first time it is used, using the `&lt;abbr&gt;` element, or linking to a definition or glossary.
    <!--END CRITERION-->

* [3.1.5 Reading Level](https://www.w3.org/TR/WCAG22/#reading-level)
    * A more understandable alternative is provided for content that is more advanced than can be reasonably read by a person with roughly 9 years of primary education.
    <!--END CRITERION-->

* [3.1.6 Pronunciation](https://www.w3.org/TR/WCAG22/#pronunciation)
    * If the pronunciation of a word is vital to understanding that word, its pronunciation is provided immediately following the word or via a link or glossary.
    <!--END CRITERION-->

<!--END GUIDELINE-->

#### Guideline 3.2: Make Web pages appear and operate in predictable ways.
* [3.2.1 On Focus](https://www.w3.org/TR/WCAG22/#on-focus)
    * When a page element receives focus, it does not result in a substantial change to the page, the spawning of a pop-up window, an additional change of keyboard focus, or any other change that could confuse or disorient the user.
    <!--END CRITERION-->

* [3.2.2 On Input](https://www.w3.org/TR/WCAG22/#on-input)
    * When a user inputs information or interacts with a control, it does not result in a substantial change to the page, the spawning of a pop-up window, an additional change of keyboard focus, or any other change that could confuse or disorient the user unless the user is informed of the change ahead of time.
    <!--END CRITERION-->

* [3.2.3 Consistent Navigation](https://www.w3.org/TR/WCAG22/#consistent-navigation)
    * Navigation links that are repeated on web pages do not change order when navigating through the site.
    <!--END CRITERION-->

* [3.2.4 Consistent Identification](https://www.w3.org/TR/WCAG22/#consistent-identification)
    * Elements that have the same functionality across multiple web pages are consistently identified. For example, a search box at the top of the site should always be labeled the same way.
    <!--END CRITERION-->

* [3.2.5 Change on Request](https://www.w3.org/TR/WCAG22/#change-on-request)
    * Substantial changes to the page, the spawning of pop-up windows, uncontrolled changes of keyboard focus, or any other change that could confuse or disorient the user must be initiated by the user. Alternatively, the user is provided an option to disable such changes.
    <!--END CRITERION-->

* [3.2.6 Consistent Help](https://www.w3.org/TR/WCAG22/#consistent-help)
    * Contact and self-help details or functionality are presented consistently when present on multiple web pages.
    <!--END CRITERION-->

<!--END GUIDELINE-->

#### Guideline 3.3: Help users avoid and correct mistakes.
* [3.3.1 Error Identification](https://www.w3.org/TR/WCAG22/#error-identification)
    * Required inputs or inputs that require a specific format, value, or length provide this information within the element's label.
    * [Form validation](https://webaim.org/techniques/formvalidation/) errors are efficient, intuitive, and accessible. The error is clearly identified, quick access to the problematic element is provided, and the user can easily fix the error and resubmit the form.
    <!--END CRITERION-->

* [3.3.2 Labels or Instructions](https://www.w3.org/TR/WCAG22/#labels-or-instructions)
    * Sufficient labels, cues, and instructions for required interactive elements are provided via instructions, examples, properly positioned input labels, or fieldsets/legends.
    <!--END CRITERION-->

* [3.3.3 Error Suggestion](https://www.w3.org/TR/WCAG22/#error-suggestion)
    * If an input error is detected (_via client-side or server-side validation_), suggestions are provided for fixing the input in a timely and accessible manner.
    <!--END CRITERION-->

* [3.3.4 Error Prevention (Legal, Financial, Data)](https://www.w3.org/TR/WCAG22/#error-prevention-legal-financial-data)
    * If the user can change or delete legal, financial, or test data, the changes/deletions can be reversed, verified, or confirmed.
    <!--END CRITERION-->

* [3.3.5 Help](https://www.w3.org/TR/WCAG22/#help)
    * Instructions and cues are provided in context to help in form completion and submission.
    <!--END CRITERION-->

* [3.3.6 Error Prevention (All)](https://www.w3.org/TR/WCAG22/#error-prevention-all)
    * If the user can submit information, the submission is reversible, verified, or confirmed.
    <!--END CRITERION-->

* [3.3.7 Redundant Entry](https://www.w3.org/TR/WCAG22/#redundant-entry)
    * Information that a user must re-enter to complete a single-session process must be auto-populated or available for the user to select, unless re-entering the information is essential to the functionality, the information poses security issues, or the previously-entered information is no longer valid.
    <!--END CRITERION-->

* [3.3.8 Accessible Authentication (Minimum)](https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum)
    * A cognitive function test (such as remembering a password or solving a puzzle) is not required for any step in an authentication process unless the cognitive function test can be bypassed in some way, can be completed with assistance by some other mechanism, uses object recognition (such as _"click on the photo of a flower"_), or uses identification of non-text content provided by the user (such as a user-provided image).
    <!--END CRITERION-->

* [3.3.9 Accessible Authentication (Enhanced)](https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced)
    * A cognitive function test (such as remembering a password or solving a puzzle) is not required for any step in an authentication process unless the cognitive function test can be bypassed in some way or can be completed with assistance by some other mechanism.
    <!--END CRITERION-->

<!--END GUIDELINE-->

<!--END SECTION-->
