#### Guideline 2.1: Make all functionality available from a keyboard.
* [2.1.1 Keyboard](https://www.w3.org/TR/WCAG22/#keyboard)
    * All page functionality is available using the [keyboard](https://webaim.org/techniques/keyboard/), unless the functionality cannot be accomplished in any known way using a keyboard (e.g., free hand drawing).
    * Page-specified shortcut keys and _accesskeys_ (accesskey should typically be avoided) do not conflict with existing browser and screen reader shortcuts.
    <!--END CRITERION-->

* [2.1.2 No Keyboard Trap](https://www.w3.org/TR/WCAG22/#no-keyboard-trap)
    * [Keyboard](https://webaim.org/techniques/keyboard/) focus is never locked or trapped at one particular page element. The user can navigate to and from all navigable page elements using only a keyboard.
    <!--END CRITERION-->

* [2.1.3 Keyboard (No Exception)](https://www.w3.org/TR/WCAG22/#keyboard-no-exception)
    * All page functionality is available using the keyboard.
    <!--END CRITERION-->

* [2.1.4 Character Key Shortcuts](https://www.w3.org/TR/WCAG22/#character-key-shortcuts)
    * If a keyboard shortcut uses printable character keys, then the user __must__ be able to disable the key command, change the defined key to a non-printable key (`Ctrl`, `Alt`, etc.), or only activate the shortcut when an associated interface component or button is focused.
    <!--END CRITERION-->

<!--END GUIDELINE-->

#### Guideline 2.2: Provide users enough time to read and use content.
* [2.2.1 Timing Adjustable](https://www.w3.org/TR/WCAG22/#timing-adjustable)
    * If a page or application has a time limit, the user is given options to turn off, adjust, or extend that time limit. This is not a requirement for _real-time events_ (e.g., an auction), where the time limit is absolutely required, or if the time limit is longer than 20 hours.
    <!--END CRITERION-->

* [2.2.2 Pause, Stop, Hide](https://www.w3.org/TR/WCAG22/#pause-stop-hide)
    * Automatically moving, blinking, or scrolling content (such as carousels, marquees, or animations) that lasts longer than 5 seconds can be paused, stopped, or hidden by the user.
    * Automatically updating content (e.g., a dynamically-updating news ticker, chat messages, etc.) can be paused, stopped, or hidden by the user or the user can manually control the timing of the updates.
    <!--END CRITERION-->

* [2.2.3 No Timing](https://www.w3.org/TR/WCAG22/#no-timing)
    * The content and functionality have no time limits or constraints.
    <!--END CRITERION-->

* [2.2.4 Interruptions](https://www.w3.org/TR/WCAG22/#interruptions)
    * Interruptions (alerts, page updates, etc.) can be postponed or suppressed by the user.
    <!--END CRITERION-->

* [2.2.5 Re-authenticating](https://www.w3.org/TR/WCAG22/#re-authenticating)
    * If an authentication session expires, the user can re-authenticate and continue the activity without losing any data from the current page.
    <!--END CRITERION-->

* [2.2.6 Timeouts](https://www.w3.org/TR/WCAG22/#timeouts)
    * Users must be warned of any timeout that could result in data loss, unless the data is preserved for longer than 20 hours of user inactivity.
    <!--END CRITERION-->

<!--END GUIDELINE-->

#### Guideline 2.3: Do not design content in a way that is known to cause seizures.
* [2.3.1 Three Flashes or Below Threshold](https://www.w3.org/TR/WCAG22/#three-flashes-or-below-threshold)
    * No page content [flashes](https://webaim.org/articles/seizure/) more than 3 times per second unless that flashing content is sufficiently small and the flashes are of low contrast and do not contain too much red. ([See general flash and red flash thresholds](https://www.w3.org/TR/WCAG22/#dfn-general-flash-and-red-flash-thresholds))
    <!--END CRITERION-->

* [2.3.2 Three Flashes](https://www.w3.org/TR/WCAG22/#three-flashes)
    * No page content flashes more than 3 times per second.
    <!--END CRITERION-->

* [2.3.3 Animation from Interactions](https://www.w3.org/TR/WCAG22/#animation-from-interactions)
    * Users can disable non-essential animation and movement that is triggered by user interaction.
    <!--END CRITERION-->

<!--END GUIDELINE-->

#### Guideline 2.4: Provide ways to help users navigate, find content, and determine where they are.
* [2.4.1 Bypass Blocks](https://www.w3.org/TR/WCAG22/#bypass-blocks)
    * A link is provided to [skip navigation](https://webaim.org/techniques/skipnav/) and other page elements that are repeated across web pages.
    * While proper use of headings or regions/landmarks is sufficient to meet this success criterion, because keyboard navigation by headings or regions is not supported in most browsers, WebAIM recommends a "skip" link in addition to headings and regions.
    <!--END CRITERION-->

* [2.4.2 Page Titled](https://www.w3.org/TR/WCAG22/#page-titled)
    * The web page has a descriptive and informative [page title](https://webaim.org/techniques/pagetitle/).
    <!--END CRITERION-->

* [2.4.3 Focus Order](https://www.w3.org/TR/WCAG22/#focus-order)
    * The navigation order of links, form controls, etc. is logical and intuitive.
    <!--END CRITERION-->

* [2.4.4 Link Purpose (In Context)](https://www.w3.org/TR/WCAG22/#link-purpose-in-context)
    * The purpose of each link (or image button or image map hotspot) can be determined from the link text alone, or from the link text and its context (e.g., surrounding text, list item, previous heading, or table headers).
    * Links with the same text that go to different locations are readily distinguishable.
    <!--END CRITERION-->

* [2.4.5 Multiple Ways](https://www.w3.org/TR/WCAG22/#multiple-ways)
    * [Multiple ways](https://webaim.org/techniques/sitetools/) are available to find other web pages on the site - at least two of: a list of related pages, table of contents, site map, site search, or list of all available web pages.
    <!--END CRITERION-->

* [2.4.6 Headings and Labels](https://www.w3.org/TR/WCAG22/#headings-and-labels)
    * Page headings and labels for form and interactive controls are informative. Avoid duplicating heading and label text unless the structure provides adequate differentiation between them.
    <!--END CRITERION-->

* [2.4.7 Focus Visible](https://www.w3.org/TR/WCAG22/#focus-visible)
    * There is a visible indicator for page elements when they receive keyboard focus.
    <!--END CRITERION-->

* [2.4.8 Location](https://www.w3.org/TR/WCAG22/#location)
    * If a web page is part of a sequence of pages or within a complex site structure, an indication of the current page location is provided, for example, through breadcrumbs or specifying the current step in a sequence (e.g., _"Step 2 of 5 - Shipping Address"_).
    <!--END CRITERION-->

* [2.4.9 Link Purpose (Link Only)](https://www.w3.org/TR/WCAG22/#link-purpose-link-only)
    * The purpose of each link (or image button or image map hotspot) can be determined from the link text alone.
    * There are no links with the same text that go to different locations.
    <!--END CRITERION-->

* [2.4.10 Section Headings](https://www.w3.org/TR/WCAG22/#section-headings)
    * Beyond providing an overall document structure, individual sections of content are designated using headings, where appropriate.
    <!--END CRITERION-->

* [2.4.11 Focus Not Obscured (Minimum)](https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum)
    * When elements have keyboard focus, they are not entirely covered or hidden by page content.
    <!--END CRITERION-->

* [2.4.12 Focus Not Obscured (Enhanced)](https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced)
    * When elements have keyboard focus, they are entirely visible.
    <!--END CRITERION-->

* [2.4.13 Focus Appearance](https://www.w3.org/TR/WCAG22/#focus-appearance)
    * If a custom focus indicator or background color is in place, the focus indicator pixels must:<ul><li>have at least 3:1 contrast between focused/unfocused states</li><li>be at least as large as the area of a 2 pixel thick perimeter surrounding the element. The formula `(width × 4) + (height × 4) = focus indicator area` can be used for rectangular components.</li></ul>
    <!--END CRITERION-->

<!--END GUIDELINE-->

#### Guideline 2.5: Make it easier for users to operate functionality through various inputs beyond keyboard.
* [2.5.1 Pointer Gestures](https://www.w3.org/TR/WCAG22/#pointer-gestures)
    * If multipoint or path-based gestures (such as pinching, swiping, or dragging across the screen) are not essential to the functionality, then the functionality can also be performed with a single point activation (such as activating a button).
    <!--END CRITERION-->

* [2.5.2 Pointer Cancellation](https://www.w3.org/TR/WCAG22/#pointer-cancellation)
    * To help avoid inadvertent activation of controls, avoid non-essential down-event (e.g., `onmousedown`) activation when clicking, tapping, or long pressing the screen. For complex interactions (such as drag and drop), `onmousedown` can be used if an associated `onmouseup` (or similar) event can be aborted or reversed.
    <!--END CRITERION-->

* [2.5.3 Label in Name](https://www.w3.org/TR/WCAG22/#label-in-name)
    * If an interface component (link, button, etc.) presents text (or images of text), the accessible name (label, alternative text, aria-label, etc.) for that component must include the visible text.
    <!--END CRITERION-->

* [2.5.4 Motion Actuation](https://www.w3.org/TR/WCAG22/#motion-actuation)
    * Functionality that is triggered by moving the device (such as shaking or panning a mobile device) or by user movement (such as waving to a camera) can be disabled and equivalent functionality is provided via standard controls like buttons.
    <!--END CRITERION-->

* [2.5.5 Target Size](https://www.w3.org/TR/WCAG22/#target-size)
    * Clickable targets are at least 44 by 44 pixels in size unless an alternative target of that size is provided, the target is inline (such as a link within a sentence), the target is not author-modified (such as a default checkbox), or the small target size is essential to the functionality.
    <!--END CRITERION-->

* [2.5.6 Concurrent Input Mechanisms](https://www.w3.org/TR/WCAG22/#concurrent-input-mechanisms)
    * Content does not require a specific input type, such as touch-only or keyboard-only, but must support alternative inputs (such as using a keyboard on a mobile device).
    <!--END CRITERION-->

* [2.5.7 Dragging Movements](https://www.w3.org/TR/WCAG22/#dragging-movements)
    * Functionality that uses pointer dragging can also be achieved using a single pointer without dragging (unless dragging is essential).
    <!--END CRITERION-->

* [2.5.8 Target Size (Minimum)](https://www.w3.org/TR/WCAG22/#target-size-minimum)
    * Pointer input target sizes are at least 24 by 24 pixels unless:<ul><li>A 24 pixel diameter circle centered on the target element does not intersect with any other target or a 24 pixel circle centered on an adjacent target.</li><li>The functionality can be achieved in some other conformant manner.</li><li>The target is in a sentence or list.</li><li>The target size can't be modified or is essential to the functionality.</li></ul>
    <!--END CRITERION-->

<!--END GUIDELINE-->

<!--END SECTION-->
