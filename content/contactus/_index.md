---
title: "Start the Conversation"
date: 2025-11-12T16:52:00-08:00
draft: false
layout: "contact"
showHeader: false
---

{{< center >}}
# Thanks for your Interest!
{{< /center >}}

<div class="contact-grid">
<div class="form-column">

## Reach out via our form

The best projects start with a simple conversation. Whether you're a major company, a local non-profit, or an individual volunteer, we're ready to hear about your teambuilding needs and project ideas.

<form name="contact" method="POST" data-netlify="true" action="/thank-you/" class="w-full">
<!-- REQUIRED for Netlify Forms to function -->
<input type="hidden" name="form-name" value="contact" />

<!-- Field 1: Name -->
<div class="mb-4">
<label for="name" class="block text-gray-700 font-semibold mb-1">Name</label>
<input type="text" name="name" id="name" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
</div>

<!-- Field 2: Email -->
<div class="mb-4">
<label for="email" class="block text-gray-700 font-semibold mb-1">Email</label>
<input type="email" name="email" id="email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
</div>

<!-- Field 3: Interest (Dropdown for minimal qualification) -->
<div class="mb-4">
<label for="interest" class="block text-gray-700 font-semibold mb-1">I want to start a conversation about...</label>
<select name="interest" id="interest" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
<option value="" disabled selected>Select an option</option>
<option value="company-teambuilding">Teambuilding events (For companies)</option>
<option value="nonprofit-project">Getting help with a project (For nonprofits)</option>
<option value="individual-involvement">Individual Volunteering</option>
<option value="general-inquiry">General Inquiry</option>
</select>
</div>

<!-- Field 4: Message -->
<div class="mb-6">
<label for="message" class="block text-gray-700 font-semibold mb-1">Message/Question (Optional)</label>
<textarea name="message" id="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
</div>
<button type="submit" class="w-full button">
Start the Conversation
</button>

</form>
</div>

<div class="info-column">

## OR Connect Directly

Prefer to call or send a quick email? We're available during standard business hours and are happy to connect using the contact information below.

### Email Us

<a href="mailto:hello@definitelynotarobot.com" class="contact-link">hello@definitelynotarobot.com</a>

### Call Us

<a href="tel:+15642370020" class="contact-link">(564) 237-0020</a>
</div>

</div>

<style>

h1 {
    margin-bottom: 0.5rem; 
}
.contact-grid {
    display: grid;
    gap: 3rem;
    /* Reduced padding to close the gap */
    padding-top: 0.5rem; 
}
@media (min-width: 768px) {
    .contact-grid {
        /* Creates two columns: 3/5 for the form, 2/5 for direct contact */
        grid-template-columns: 3fr 2fr;
        padding-top: 1.5rem; 
    }
}
/* --- Other Styles --- */
.contact-link {
    display: block;
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 0.5rem;
    color: var(--primary-color);
}
.form-disclaimer {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: var(--gray-500);
}
/* Styling for form elements */
.contact-grid input,
.contact-grid select,
.contact-grid textarea {
    /* Ensuring form elements use 100% of their grid column */
    width: 100%;
    /* Add basic border color */
    border: 1px solid var(--gray-300);
    /* Match global font */
    font-family: inherit;
    color: var(--text-color);
    background-color: white;
}
.contact-grid label {
    color: var(--text-color);
}
</style>