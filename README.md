# Help Center Redesign

Hi Appamondo team! Thanks for taking the time to review my submission. I've rebuilt the Help Center frontend prototypes to deliver a clean, modern, and user-friendly experience.

Here is a quick breakdown of my approach, what's working, and where I'd take it next!

## My Approach
My main goal was to deliver a production-ready frontend that feels organic and fast, without over-engineering the solution.
- **Vanilla Tech Stack:** I stuck to pure HTML, CSS, and Vanilla JavaScript. No heavy frameworks (like React or Tailwind) were used so that these templates can be easily maintained and integrated into any backend without requiring a complex build step.
- **Modern CSS Layouts:** I relied heavily on CSS Grid and Flexbox for the layouts, ensuring a responsive design that degrades gracefully on mobile devices. I also used CSS Variables (`:root`) for the branding tokens to make future color updates trivial.
- **Scalable UI:** I opted to use inline SVG paths for almost all structural UI icons (search bars, category cards, editor formatting) to ensure pixel-perfect scaling across high-DPI displays, while using standard PNGs only for specific brand logos and social media icons.

## Assumptions Made
- **Zendesk Theme Integration:** I built these static HTML files knowing they will be used as a custom Zendesk theme. Because of this, I focused on clean structural class names and standard HTML semantics that will easily plug into Zendesk's templating engine without conflicting with their default widgets.
- **Validation:** I assumed that form submission and hardcore data validation will eventually be handled by the backend API. Therefore, I kept the client-side JavaScript focused purely on the UI state and interactive elements.
- **WYSIWYG Editor:** I assumed a lightweight, custom rich-text editor using `contenteditable` and `document.execCommand` was preferred over importing a massive third-party library, keeping the payload small and fast.

## What is Fully Working
- **Responsive Layouts:** The Homepage (`index.html`), Article Page (`article.html`), and Request Page (`request.html`) are completely built out and responsive across desktop, tablet, and mobile views.
- **WYSIWYG Editor UI:** The rich text editor on the "Submit a request" page is fully functional. Clicking the toolbar buttons (Bold, Italic, Link, etc.) actively formats the text inside the editable div, and the content is synced to a hidden textarea ready for form submission.
- **File Attachments UI:** The file upload dropzone is hooked up visually! You can click the dashed box to open the native system file picker, providing a seamless and familiar user experience.

## What I Would Improve With More Time
If I had a few extra hours to polish this up before deploying it to production, I would:
1. **Accessibility (a11y) Audit:** I'd spend more time testing the custom WYSIWYG editor and interactive zones with a screen reader. Custom components often need extra `aria` attributes and strict keyboard navigation mapping to be fully WCAG compliant.
2. **Component Abstraction:** I'd abstract the repeated header/footer and card HTML into reusable components (using a templating engine like Handlebars or EJS) to avoid duplicating code across the three HTML files.
3. **Advanced File Handling:** I'd expand the file uploader to include a visual drag-and-drop state, file size/type restrictions, and visual progress bars simulating upload speeds before submission. 
4. **CSS Minification/Optimization:** I'd set up a basic build script to minify the CSS and automatically prefix older browser CSS rules (Autoprefixer) just to squeeze out a bit more performance.

---
Thanks again for checking out my work! Let me know if you have any questions about the implementation.
