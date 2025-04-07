# Portfolio Project – Web-Programming (DLBUXPWP01)

This repository contains my personal portfolio project developed as part of the IU International University course **"Web-Programming (DLBUXPWP01)"**. The aim was to design and implement a fully responsive, accessible, and aesthetically appealing portfolio website that showcases both personal and professional aspects, with a strong focus on real-world UX design projects.

---

## Live Preview

> [🔗 View the live site (optional link)](https://iu-webprogrammierung.github.io/web-programmierung-isabellnuzzo)  
> _(or open `index.html` locally in your browser)_

---

## Project Concept

The core idea behind this project was to build a **static website** that presents myself, my background, and my selected design projects in a professional and engaging way. The focus was on delivering a **clear structure, appealing visuals, and technical precision** using only HTML, CSS, and JavaScript – without the use of frameworks.

The portfolio includes:

- A personalized **hero landing page** with an introduction and CV download
- An overview of my **skills, qualifications, and interests**
- Individual project pages for **TunnelGuard**, **Wisebloom**, and **Munich**
- A **contact section** with an accessible form
- A fully customized **404 error page**
- A **favicon** for branding consistency

The design is intended to appeal to potential employers and demonstrate my capability to combine **aesthetic design** with **solid technical execution**.

---

## Responsive Design Strategy

### Breakpoints

| Device                  | Screen Width     |
| ----------------------- | ---------------- |
| Smartphones             | `≤768px`         |
| Tablets & small laptops | `769px – 1023px` |
| Desktops                | `≥1024px`        |

### Approach

- I followed a **desktop-first strategy** to take full advantage of layout space and gradually adapted down for smaller devices.
- **Flexbox and Grid** were used to create flexible and well-aligned components across all screen sizes.
- Dedicated **`mobile.css`** and modular CSS files ensure each page adapts appropriately to its content and context.
- Special attention was given to readability, spacing, and tap targets on mobile devices.

---

## Tech Stack

| Technology               | Purpose                                                          |
| ------------------------ | ---------------------------------------------------------------- |
| **HTML5**                | Semantic content structure                                       |
| **CSS3**                 | Styling, Flexbox, Grid, media queries                            |
| **JavaScript (Vanilla)** | Interactivity (accordion, image toggle, back-to-top, mobile nav) |
| **Git & GitHub**         | Version control and project history                              |
| **VS Code**              | Development environment                                          |

---

## Project Structure

```plaintext
/
├── index.html                → Landing page
├── tunnelguard.html         → UX Case Study: TunnelGuard
├── wisebloom.html           → UX Case Study: Wisebloom
├── munich.html              → UX Case Study: Munich Learning App
├── 404.html                 → Custom error page
├── css/
│   ├── style.css
│   ├── index.css
│   ├── tunnelguard.css
│   ├── wisebloom.css
│   ├── munich.css
│   ├── mobile.css
├── js/
│   ├── header.js
│   ├── footer.js
│   ├── back-to-top.js
│   ├── tunnelguard.js
│   ├── wisebloom.js
├── assets/                  → Icons, images, favicon
```
