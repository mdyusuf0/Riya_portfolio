# Riya Srivastava — Portfolio

A premium, interactive, and high-performance portfolio built for **Riya Srivastava**, an AI-Driven Social Media Manager & Brand Marketing Strategist. This project showcases her professional experience, impactful campaigns, and marketing credentials.

---

## 📝 How to Update Your Portfolio Content

Your portfolio is designed to be easily updatable! You do **not** need to touch any complex React code or layout files to update your text, experiences, or certificates. 

Everything is centralized in a single file: `src/data/portfolioData.js`.

### 1. Basic Info & About Me
At the very top of the file, you'll see `personalInfo`, `socialLinks`, and `aboutContent`. You can freely change the text inside the quotes.
```javascript
export const personalInfo = {
  name: "Riya",
  title: "AI-Driven Social Media Manager",
  // Change your summary, email, phone number here!
}
```

### 2. Updating Your Experience (Jobs)
Scroll down to `experienceList`. Each job is wrapped in curly braces `{}`. To add a new job, just copy an existing block and paste it above or below it!
```javascript
  {
    organization: "New Company Name",
    role: "Marketing Manager",
    duration: "Feb 2026 – Present",
    location: "Remote",
    responsibilities: [
      "Add your first bullet point here.",
      "Add your second bullet point here."
    ],
    tech: ["Skill 1", "Skill 2"]
  }
```

### 3. Adding or Updating Certificates
Scroll down to `certificates.featured`. To add a new certificate without an image, just add the text. If you want it to have a clickable **Preview** button, just add an `image:` line pointing to your new photo in the `public/riya/` folder!

```javascript
    {
      name: "Your New Certificate Name",
      issuer: "Issuing Organization",
      icon: "🎯",
      desc: "A brief description of what you learned.",
      image: "/riya/your-new-image.jpg" // Add this line to enable the preview button!
    }
```

### 4. Updating Project/Campaign Images
If you ever want to change the images inside your Campaign sliders, open `src/components/Projects.jsx` and look around **Line 87**. You will see the image arrays:
```javascript
project.id === 'diwali-campaign' ? ['diwali-new-1.jpg', 'diwali-new-2.jpg'] :
```
Simply change the filenames to match whatever you drop into your `public/riya/campaigns/` folder!

> **Important Rule:** Always make sure you keep the commas `,` at the end of lines and ensure text is wrapped in quotes `" "`. If the page goes blank, it usually just means a comma or quote is missing!

---

## 🛠️ Tech Stack
- **Core**: React 19, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, AOS (Animate on Scroll)
- **Deployment**: Vercel

## 💻 Local Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.
