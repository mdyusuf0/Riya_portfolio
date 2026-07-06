# Huzaifa — Premium Software Developer & AI Enthusiast Portfolio

A premium, interactive, and high-performance developer portfolio built for **Huzaifa**. This project showcases academic foundations in Master of Computer Applications (MCA) at Reva University, professional backend developer and API integration internship training at MIMO, incubated startup affiliation at REVA NEST (THE BACK BUILDER), and verified certifications (Azure AI Fundamentals, DevOps, AngularJS).

It utilizes cinematic interactions, a customized responsive video reel, an interactive canvas particle background, and a responsive custom floating social dock.

---

## 🚀 Key Features
- **Visual Identity**: Immersive dark theme with high-contrast lavender-purple accent glows (`#8E6FCE`) matching client assets.
- **Intelligent Hero Video Preloading**: Coordinates the loading states of the background video (`loadeddata`/`canplay` hooks) with the preloader and falls back to a poster image with a timeout (4.5s) if connection is slow to eliminate layout shift.
- **Interactive Cursor Particles**: High-performance HTML5 canvas particle trail with spring physics (lerping) and mouse tracking, themed in lavender-purple, fully responsive and optimized (disabled on touch devices and respects `prefers-reduced-motion`).
- **Software Dev & AI Process Pipeline**: An interactive scroll-linked SVG dashed path tracking 5 steps (Understand & Define -> Design System & Data Flow -> Build Backend & APIs -> Integrate AI / Computer Vision -> Test, Optimize & Deploy).
- **Glassmorphic Grid Sections**: Glowing, percentage-free skills badges, a dedicated education journey block, and a timeline of internship experiences.
- **Incubated Startup Affiliation**: A dedicated REVA NEST incubator feature card for **THE BACK BUILDER** showcasing a perspective-skewed ID badge, a holographic scanner glide effect, and verified role details.
- **Interactive Certificate Fallback**: Beautiful detailed modal views displaying certificate summaries and "Listed on Resume" verification indicators for resume-listed certifications.
- **EmailJS Contact Form**: Form validation, submit states, and clean fallback to native prefilled mailto client routing.
- **Hire Me Clipboard Flow**: Intercepts contact requests to copy a pre-drafted message to the clipboard, displays a toast alert, and redirects to LinkedIn. Fallback modal handles copy instructions if clipboard APIs are blocked.

---

## 🛠️ Tech Stack
- **Core**: React 19, Vite, ES6 Javascript
- **Styling**: Tailwind CSS v4, Custom CSS variables
- **Animations**: Framer Motion (for SVG path drawing), AOS (Animate on Scroll)
- **Email Delivery**: `@emailjs/browser` (with native mailto fallback)
- **Icons**: Customized lightweight inline SVG vectors

---

## 💻 Local Development Setup

To run this project locally, follow these steps:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Install Dependencies
In the root directory of the project, run:
```bash
npm install
```

### 3. Start Development Server
Launch Vite's hot-reload local server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
To build and optimize the bundle size for hosting:
```bash
npm run build
```
This generates a static production bundle inside the `dist/` directory.

---

## ☁️ Deploying on Vercel

Vercel is the recommended hosting platform for Vite-React projects due to its speed, global CDN, and automatic Git integration.

### Method 1: Deploying via Vercel Git Integration (Recommended)
1. Push this project to your GitHub repository (e.g., `https://github.com/shuzaifa23/huzaifa-portfolio`).
2. Log in to [Vercel](https://vercel.com/) and click **Add New** > **Project**.
3. Import your repository.
4. Vercel will automatically detect **Vite** as the framework. Leave all default build configuration settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. *(Optional)* Add environment variables under **Environment Variables** (see below).
6. Click **Deploy**. Vercel will build the project and provide a live URL in under a minute.

### Method 2: Deploying via Vercel CLI (Command Line)
If you prefer deploying directly from your terminal:
1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Run the deployment command inside the project root:
   ```bash
   vercel
   ```
3. Follow the prompts to link the project to your Vercel account.
4. For production release, run:
   ```bash
   vercel --prod
   ```

---

## ✉️ EmailJS Environment Variables (Optional)
The contact form works out of the box by opening the user's default email client with a prefilled subject, body, and recipient. If you wish to enable silent direct inbox emails using EmailJS:

1. Create a service, template, and public key on [EmailJS](https://www.emailjs.com/).
2. Define the following environment variables in your hosting provider (like Vercel) or create a local `.env` file:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
No code adjustments are needed; the form will automatically switch from the mailto fallback to EmailJS when these variables are detected!
