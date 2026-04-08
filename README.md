# AI Ready School - Frontend Redesign

This is a submission for the AI Ready School UI/UX Designer + Frontend Developer assessment. It is built using Next.js and Vanilla CSS Modules.

## 1. Audit & Problems Identified
During the audit of the current website, I identified three major overarching issues:
* **Navigation Complexity:** Too many dropdowns and links create decision paralysis for the primary user (busy school principals).
* **Dated & Distracting Visual Effects:** A persistent "blue glow" and full-width card bands make the site feel like older web eras rather than a cutting-edge AI ecosystem.
* **Typographical Readability:** Subtext line lengths on the desktop hero span too wide, making it difficult to read and process the core value proposition. Mobile scaling of the logo also pushed below the fold content too far down.

## 2. Prioritization
Given the time constraints, I focused exclusively on **The Foundation (Navigation + Hero)** and **The Core Ecosystem (Product Overview)**. 
I chose Next.js with CSS Modules because it allowed me to rapidly stand up a highly performant site with full control over the specific aesthetic without relying on massive utility frameworks. I implemented a premium glassmorphism styling, a clean grid layout for the products, and a drastically simplified desktop/mobile responsive header.

## 3. What I would do next with more time
* **Detailed Interactive Mockups:** I would build out the interactive dashboard graphics in the hero section to actually loop through the features using subtle animations.
* **Componentize everything:** Right now, the Next.js `page.js` is quite clean, but I'd extract repetitive elements (like the Product cards) into their own distinct shared components.
* **Redesign the Testimonials section:** Social proof is crucial for school principals. I would build a sleek, horizontal scrolling testimonial wall that highlights case studies rather than simple quote blocks.
* **Accessibility features:** Ensure full screen-reader compliance, strict ARIA labeling, and keyboard navigation testing across all custom dropdowns and interactive buttons.

## Setup and Run
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000`

---
*Developed for the AI Ready School assessment.*
