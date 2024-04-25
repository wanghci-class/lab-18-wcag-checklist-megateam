#### Guideline 1.1: Provide text alternatives for any non-text content
* [1.1.1 Non-text Content](https://www.w3.org/TR/WCAG22/#non-text-content)
    * Images, image buttons, and image map hot spots have appropriate, equivalent [alternative text](https://webaim.org/techniques/alttext/).
    * Images that __do not__ convey content, are decorative, or contain content that is already conveyed in text are given empty _alternative text_ (`alt=""`) or implemented as CSS backgrounds. All linked images have descriptive alternative text.
    * Equivalent alternatives to complex images are provided in context or on a separate linked page.
    * Form buttons have a descriptive value.
    * Inputs have associated [text labels](https://webaim.org/techniques/forms/controls).
    * Embedded multimedia is identified via accessible text.
    * Frames and iframes are appropriately [titled](https://webaim.org/techniques/frames/).
    <!--END CRITERION-->

<!--END GUIDELINE-->

#### Guideline 1.2: Provide alternatives for time-based media.
* [1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/TR/WCAG22/#audio-only-and-video-only-prerecorded)
    * A [descriptive transcript](https://webaim.org/techniques/captions/#transcripts) of relevant content is provided for non-live audio-only (audio podcasts, MP3 files, etc.).
    * A descriptive transcript or [audio description](https://webaim.org/techniques/captions/#ad) of relevant content is provided for non-live video-only, unless the video is decorative.
    <!--END CRITERION-->

* [1.2.2 Captions (Prerecorded)](https://www.w3.org/TR/WCAG22/#captions-prerecorded)
    * [Synchronized captions](https://webaim.org/techniques/captions/) are provided for non-live video (YouTube videos, etc.).
    <!--END CRITERION-->

* [1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/TR/WCAG22/#audio-description-or-media-alternative-prerecorded)
    * A descriptive transcript __or__ audio description is provided for non-live video. <br>__NOTE:__ Only required _if_ there is relevant visual content that is not presented in the audio.
    <!--END CRITERION-->

* [1.2.4 Captions (Live)](https://www.w3.org/TR/WCAG22/#captions-live)
    * Synchronized captions are provided for live media that contains audio (audio-only broadcasts, web casts, video conferences, etc.)
    <!--END CRITERION-->

* [1.2.5 Audio Description (Prerecorded)](https://www.w3.org/TR/WCAG22/#audio-description-prerecorded)
    * Audio descriptions are provided for non-live video.<br>NOTE: Only required if there is relevant visual content that is not presented in the audio.
    * While not required at Level AA, for optimal accessibility WebAIM recommends descriptive transcripts in addition to audio descriptions.
    <!--END CRITERION-->

* [1.2.6 Sign Language (Prerecorded)](https://www.w3.org/TR/WCAG22/#sign-language-prerecorded)
    * A sign language video is provided for media that contains audio.
    <!--END CRITERION-->

* [1.2.7 Extended Audio Description (Prerecorded)](https://www.w3.org/TR/WCAG22/#extended-audio-description-prerecorded)
    * When audio description cannot be added to video due to insufficient pauses in the audio, an alternative version of the video with pauses that allow audio descriptions is provided.
    <!--END CRITERION-->

* [1.2.8 Media Alternative (Prerecorded)](https://www.w3.org/TR/WCAG22/#media-alternative-prerecorded)
    * A descriptive transcript is provided for pre-recorded media that has a video track. For optimal accessibility, WebAIM strongly recommends transcripts for all multimedia.
    <!--END CRITERION-->

* [1.2.9 Audio-only (Live)](https://www.w3.org/TR/WCAG22/#audio-only-live)
    * A descriptive text transcript (e.g., the script of the live audio) is provided for live content that has audio.
    <!--END CRITERION-->

<!--END GUIDELINE-->

#### Guideline 1.3: Create content that can be presented in different ways (for example simpler layout) without losing information or structure.
* [1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG22/#info-and-relationships)
    * [Semantic markup](https://webaim.org/techniques/semanticstructure/) is appropriately used to designate headings, regions/landmarks, lists, emphasized or special text, etc.
    * [Tables](https://webaim.org/techniques/tables/data) are used for tabular data and data cells are associated with their headers. Data table captions, if present, are associated to data tables.
    * [Text labels](https://webaim.org/techniques/forms/controls) are associated with form inputs. Related form controls are grouped with fieldset/legend. ARIA labelling may be used when standard HTML is insufficient.
    <!--END CRITERION-->

* [1.3.2 Meaningful Sequence](https://www.w3.org/TR/WCAG22/#meaningful-sequence)
    * The [reading and navigation order](https://webaim.org/techniques/screenreader/#linearization) (determined by code order) is logical and intuitive.
    <!--END CRITERION-->

* [1.3.3 Sensory Characteristics](https://www.w3.org/TR/WCAG22/#sensory-characteristics)
    * Instructions do not rely upon shape, size, or visual location (e.g., _"Click the square icon to continue"_ or _"Instructions are in the right-hand column"_).
    * Instructions do not rely upon sound (e.g., _"A beeping sound indicates you may continue."_).
    <!--END CRITERION-->

* [1.3.4 Orientation](https://www.w3.org/TR/WCAG22/#orientation)
    * Orientation of web content is not restricted to only portrait or landscape, unless a specific orientation is necessary.
    <!--END CRITERION-->

* [1.3.5 Identify Input Purpose](https://www.w3.org/TR/WCAG22/#identify-input-purpose)
    * Input fields that collect [certain types of user information](https://www.w3.org/TR/WCAG22/#input-purposes) have an appropriate `autocomplete` attribute defined.
    <!--END CRITERION-->

* [1.3.6 Identify Purpose](https://www.w3.org/TR/WCAG22/#identify-purpose)
    * Regions/landmarks are used to identify page regions.
    * ARIA is used, where appropriate, to enhance HTML semantics to better identify the purpose of interface components.
    <!--END CRITERION-->

<!--END GUIDELINE-->

#### Guideline 1.4: Make it easier for users to see and hear content including separating foreground from background.
* [1.4.1 Use of Color](https://www.w3.org/TR/WCAG22/#use-of-color)
    * Color is not used as the sole method of conveying content or distinguishing visual elements.
    * Color alone is not used to distinguish [links](https://webaim.org/techniques/hypertext/) from surrounding text unless the [contrast ratio](https://webaim.org/resources/linkcontrastchecker/) between the link and the surrounding text is at least 3:1 _and_ an additional distinction (e.g., it becomes underlined) is provided when the link is hovered over and receives keyboard focus.
    <!--END CRITERION-->

* [1.4.2 Audio Control](https://www.w3.org/TR/WCAG22/#audio-control)
    * A mechanism is provided to stop, pause, mute, or adjust volume for audio that automatically plays on a page for more than 3 seconds.
    <!--END CRITERION-->

* [1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG22/#contrast-minimum)
    * Text and images of text have a contrast ratio of at least 4.5:1.
    * Large text - at least 18 point (typically 24px) or 14 point (typically 18.66px) and bold - has a contrast ratio of at least 3:1.
    <!--END CRITERION-->

* [1.4.4 Resize text](https://www.w3.org/TR/WCAG22/#resize-text)
    * The page is readable and functional when the page is zoomed to 200%. NOTE: [1.4.10 (below)](https://webaim.org/standards/wcag/checklist#sc1.4.10) introduces additional requirements for zoomed content.
    <!--END CRITERION-->

* [1.4.5 Images of Text](https://www.w3.org/TR/WCAG22/#images-of-text)
    * If the same visual presentation can be made using text alone, an image is not used to present that text.
    <!--END CRITERION-->

* [1.4.6 Contrast (Enhanced)](https://www.w3.org/TR/WCAG22/#contrast-enhanced)
    * Text and images of text have a contrast ratio of at least 7:1.
    * Large text - at least 18 point (typically 24px) or 14 point (typically 18.66px) and bold - has a contrast ratio of at least 4.5:1.
    <!--END CRITERION-->

* [1.4.7 Low or No Background Audio](https://www.w3.org/TR/WCAG22/#low-or-no-background-audio)
    * Audio with speech has no or very low background noise so the speech is easily distinguished.
    <!--END CRITERION-->

* [1.4.8 Visual Presentation](https://www.w3.org/TR/WCAG22/#visual-presentation)
    * Blocks of text over one sentence in length:<ul><li>Are no more than 80 characters wide.</li><li>Are NOT fully justified (aligned to both the left and the right margins).</li><li>Have adequate line spacing (at least 1/2 the height of the text) and paragraph spacing (1.5 times line spacing).</li><li>Have defined or inherited foreground and background colors.</li><li>Do NOT require horizontal scrolling when the text size is doubled.</li></ul>
    <!--END CRITERION-->

* [1.4.9 Images of Text (No Exception)](https://www.w3.org/TR/WCAG22/#images-of-text-no-exception)
    * Text is used within an image only for decoration (the image does not convey content) OR when the information cannot be presented with text alone.
    <!--END CRITERION-->

* [1.4.10 Reflow](https://www.w3.org/TR/WCAG22/#reflow)
    * No loss of content or functionality occurs, and horizontal scrolling is avoided when content is presented at a width of 320 pixels.<ul><li>This requires responsive design for most web sites. This is best tested by setting the browser window to 1280 pixels wide and then zooming the page content to 400%.</li></ul>
    * Content that requires horizontal scrolling, such as data tables, complex images (such as maps and charts), toolbars, etc. are exempted.
    <!--END CRITERION-->

* [1.4.11 Non-text Contrast](https://www.w3.org/TR/WCAG22/#non-text-contrast)
    * A contrast ratio of at least 3:1 is present for differentiating graphical objects (such as icons and components of charts or graphs) and author-customized interface components (such as buttons, form controls, and focus indicators/outlines).
    * At least 3:1 contrast is maintained in the various states (focus, hover, active, etc.) of author-customized interactive components.
    <!--END CRITERION-->

* [1.4.12 Text Spacing](https://www.w3.org/TR/WCAG22/#text-spacing)
    * No loss of content or functionality occurs when the user adapts paragraph spacing to `2` times the font size, text line height/spacing to `1.5` times the font size, word spacing to `.16` times the font size, and letter spacing to `.12` times the font size.
    * This is best supported by avoiding pixel height definitions for elements that contain text.
    <!--END CRITERION-->

* [1.4.13 Content on Hover or Focus](https://www.w3.org/TR/WCAG22/#content-on-hover-or-focus)
    * When additional content is presented on hover or keyboard focus:<ul><li>The newly revealed content can be dismissed (generally via the Esc key) without moving the pointer or keyboard focus, unless the content presents an input error or does not obscure or interfere with other page content.</li><li>The pointer can be moved to the new content without the content disappearing.</li><li>The new content must remain visible until the pointer or keyboard focus is moved away from the triggering control, the new content is dismissed, or the new content is no longer relevant.</li></ul>
    <!--END CRITERION-->

<!--END GUIDELINE-->

<!--END SECTION-->
