# Project Structure & Web Flow

This project is a personal portfolio website for Alejandro Lopez, an experienced Technical Designer. The site is built using static web technologies (HTML, CSS, JavaScript) and is organized for modularity and maintainability. Below is an explanation of the structure and flow:

---

## 1. Main Files & Structure

- **index.html**: The homepage, presenting the About, Skills, and Experience sections. It is the main entry point and highlights the designer's profile.
- **projects.html**: Dedicated to showcasing current and past projects, with detailed descriptions and embedded media (e.g., YouTube videos).
- **code.html**: Intended to display code samples and technical solutions (currently a placeholder for future updates).
- **header.html / footer.html**: Modular HTML fragments for the header and footer, included dynamically on all pages for consistency.
- **include.js**: JavaScript utility for injecting `header.html` and `footer.html` into each page, and for handling navigation highlighting and responsive menu behavior.
- **styles.css**: Centralized stylesheet that defines the visual theme, layout, and responsive design for all pages.
- **images/**: Contains assets such as profile pictures and background images used across the site.
- **docs/**: (If present) For documentation or additional resources.
- **CNAME**: Used for custom domain configuration (if deployed).

---

## 2. Navigation & Page Flow

- **Header Navigation**: The header (from `header.html`) contains navigation links to the main sections: About Me, Projects, and Code. It is responsive, adapting to desktop/tablet and mobile layouts with a burger menu for smaller screens.
- **Footer**: The footer (from `footer.html`) provides copyright and external links (e.g., LinkedIn, GitHub).
- **Dynamic Inclusion**: `include.js` loads the header and footer into each page, ensuring updates to navigation or branding are reflected site-wide without code duplication.
- **Active Link Highlighting**: JavaScript logic highlights the current page's navigation link for user orientation.

---

## 3. Content Sections & Flow

### Homepage (`index.html`)
- **About Me**: Brief introduction and CV download link.
- **Skills**: Lists technical and soft skills in categorized lists.
- **Experience**: Summarizes professional experience, including roles, companies, and key responsibilities.

### Projects (`projects.html`)
- **Project Items**: Each project is presented with a title, role, description, and embedded video or media. Projects are grouped and described in detail.

### Code (`code.html`)
- **Code Showcase**: Placeholder for future code samples and technical write-ups.

---

## 4. Styling & Responsiveness

- The site uses `styles.css` for a modern, visually appealing, and mobile-friendly design.
- CSS variables and media queries ensure adaptability across devices.
- Icons (FontAwesome) and custom fonts (Google Fonts) enhance visual presentation.

---

## 5. JavaScript Functionality

- **include.js**:
  - Dynamically injects header and footer.
  - Sets the active navigation link based on the current page.
  - Handles the burger menu for mobile navigation.
  - Ensures the navigation menu closes on outside click or window resize.

---

## 6. Modularity & Maintainability

- By separating header and footer into their own files and using JavaScript for inclusion, updates to navigation or branding are centralized and efficient.
- The structure supports easy addition of new sections or projects.

---

## 7. Deployment

- The site is static and can be hosted on any web server or static site host (e.g., GitHub Pages, Netlify). The `CNAME` file is present for custom domain configuration.