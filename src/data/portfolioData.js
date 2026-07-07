// ============================================================
// portfolioData.js — Centralized configuration for Riya Srivastava's Portfolio
// ============================================================

export const personalInfo = {
  name: "Riya",
  firstName: "Riya Srivastava",
  brandName: "Riya Srivastava",
  title: "AI-Driven Social Media Manager & Brand Marketing Strategist",
  location: "Prayagraj, India",
  phone: "+91 8115218140",
  emails: {
    primary: "riya.career0203@gmail.com",
    secondary: "",
  },
  summary:
    "AI-driven Social Media & Brand Marketing Professional with 5 years of experience in building high-performing content systems for B2B and B2C brands. Skilled in combining AI-powered workflows with strategic social media marketing to accelerate content production, improve campaign efficiency, optimize audience targeting, and enhance creative execution across Instagram, LinkedIn, Facebook, and X. Experienced in leveraging AI tools for content ideation, market research, copy generation, workflow optimization, and performance analysis to deliver faster turnaround and measurable business impact.",
  resumeUrl: "/Riya_Srivastava_Resume.pdf",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/riyasrivastava-smm/",
  instagram: "https://instagram.com/kays.riya",
  email: "mailto:riya.career0203@gmail.com",
};

export const heroContent = {
  greeting: "Hello, I'm ",
  titleHighlight: "Turning brand stories into scroll-stopping content.",
  subtitle: "Turning brand stories into scroll-stopping content. Building high-performing content systems powered by AI across B2B and B2C landscapes.",
  ctaPrimary: { text: "View Campaigns", href: "#campaigns" },
  ctaSecondary: { text: "Let's Talk", href: "#contact" },
  ctaResume: { text: "Resume", href: personalInfo.resumeUrl }
};

export const aboutContent = {
  heading: "ABOUT",
  bio: `MBA-trained marketer with <span class="text-white font-black tracking-wide">5+ years</span> building social media strategies, creating engaging campaigns, and helping brands grow their digital presence through data-driven content and audience-first storytelling. I turn brand stories into scroll-stopping content across B2B and B2C, from Dubai e-commerce launches to LinkedIn thought leadership for global agencies.`,
  techStack: ["Instagram", "LinkedIn", "Meta Analytics", "Looker Studio", "Canva & Figma", "AI Tools"],
};

export const capabilityMatrix = {
  categories: [
    {
      title: "Marketing Skills",
      skills: ["Social media marketing", "Influencer marketing", "Search Engine Marketing", "Lead Generation", "Outreach marketing", "Copywriting", "Community management", "Organic & paid campaigns", "Data analysis"]
    },
    {
      title: "Creative & Design",
      skills: ["Canva", "Figma", "WordPress CMS", "Video Editing (Elevae, VN App, InShot)"]
    },
    {
      title: "Strategic & Management",
      skills: ["Strategic planning", "Project management", "Team Collaboration"]
    },
    {
      title: "Brand Strategy",
      skills: ["Brand strategy development", "Brand identity design", "Consistency maintenance"]
    }
  ]
};

export const impactMetrics = [
  { value: "5+", label: "Years Experience" },
  { value: "40%+", label: "Influencer Response" },
  { value: "20%", label: "Brand Engagement Lift" },
  { value: "1.3M+", label: "Reel Views" },
  { value: "100+", label: "Diwali Sales" },
];

export const projects = [
  {
    id: "ramadan-campaign",
    number: "01",
    badge: "🌟 Flagship Case Study",
    title: "Ramadan Sellout",
    description:
      "Created a festive-led content calendar with influencer-led amplification and modest-fashion storytelling for a luxurious clothing brand in Dubai. Resulted in selling out the entire inventory within 2 weeks, driving 50+ direct sales attributed to social, and hitting 400K+ views on reels.",
    techTags: ["Influencer Outreach", "Content Planning", "Modest Fashion", "Instagram Reels"],
    links: { demo: null },
    isFlagship: true,
  },
  {
    id: "diwali-campaign",
    number: "02",
    badge: "🔥 Freelance Highlight",
    title: "Diwali Campaign (Kids Fashion)",
    description:
      "Generated high-quality leads via targeted outreach and festive content rhythm during Diwali. Closed 100+ sales within 15 days, earning over ₹2 lakhs revenue by tying hooks and CTAs directly to product pages.",
    techTags: ["Lead Gen", "Festive Campaign", "Conversion Focus", "UGC"],
    links: { demo: null },
    isFlagship: true,
  },
  {
    id: "cafe-dubai",
    number: "03",
    badge: "☕ F&B Content",
    title: "Restaurant & Cafe • Dubai",
    description:
      "Built a distinct moody, premium, and conversion-driven food-and-lifestyle voice. Directed reel scripting, food styling, and caption copy for campaigns like 'Work Can Wait but Lunch Can't'.",
    techTags: ["Food Styling", "Reel Scripting", "A/B Testing", "Aesthetic"],
    links: { demo: null },
    isFlagship: true,
  },
];

export const experienceList = [
  {
    organization: "ScaleHub",
    role: "Social Media Manager",
    duration: "Mar 2025 – Feb 2026",
    location: "Dubai, UAE",
    responsibilities: [
      "Developed and executed content strategies and mood boards for e-commerce and service brands, aligning with campaign and brand goals.",
      "Designed visually engaging creatives using Canva AI, generative AI workflows to accelerate creative production and improve organic engagement by 15–20%.",
      "Led influencer outreach campaigns, securing a 40%+ resolve rate from creators and initiating relevant collaborations.",
      "Executed a Ramadan campaign that resulted in the brand selling out its entire stock within 2 weeks, generating 50+ sales."
    ],
    tech: ["Content Strategy", "Canva AI", "Influencer Outreach", "Analytics"]
  },
  {
    organization: "Insidea Pvt. Ltd.",
    role: "Social Media Specialist",
    duration: "Jan 2024 – Feb 2025",
    location: "Mumbai, India",
    responsibilities: [
      "Developed social media strategies that increased brand engagement by 20%.",
      "Consistently contributed insights on LinkedIn articles to build thought leadership and earned the LinkedIn Top Voice badge.",
      "Executed paid and organic campaigns, increasing campaign reach by 10%."
    ],
    tech: ["LinkedIn Strategy", "Thought Leadership", "Paid/Organic", "Audits"]
  },
  {
    organization: "Brainstorm Force Pvt. Ltd.",
    role: "Social Media Marketer",
    duration: "Mar 2022 – Aug 2023",
    location: "Pune, India",
    responsibilities: [
      "Developed and executed SEO & Social media content strategies, boosting engagement and improving customer retention by 10%.",
      "Managed Facebook community interactions and leveraged Content Studio insights to optimize performance and maximize ROI."
    ],
    tech: ["SEO & Social", "Facebook Community", "Content Studio", "ROI Optimization"]
  },
  {
    organization: "Quantum IT Innovation",
    role: "Social Media Executive",
    duration: "Feb 2021 – Mar 2022",
    location: "Noida, India",
    responsibilities: [
      "Managed social media platforms for 10+ clients, optimized YouTube content using VidIQ.",
      "Generated high-quality leads, increasing conversion rates by 7% using Facebook Groups."
    ],
    tech: ["YouTube Optimization", "VidIQ", "Facebook Groups", "Lead Gen"]
  },
  {
    organization: "Freelance Projects",
    role: "Freelance Digital Marketer",
    duration: "Sept 2023 – Nov 2023",
    location: "Remote",
    responsibilities: [
      "Generated high-quality leads via targeted outreach marketing using Linkedin Sales Navigator.",
      "Closed 100+ sales within 15 days for a kids' clothing brand during Diwali.",
      "Led influencer outreach campaigns, securing a 40%+ response rate from creators."
    ],
    tech: ["LinkedIn Sales Navigator", "Campaign Management", "Influencer Outreach"]
  }
];

export const educationList = [
  {
    institution: "Bhartiya Vidyapeeth Deemed University",
    degree: "MBA - Marketing | Digital Marketing",
    duration: "July 2021 to Dec 2023",
    location: "Pune, India",
    gpa: ""
  },
  {
    institution: "Ewing Christian Institute and Management",
    degree: "B. Com - Marketing",
    duration: "Aug 2017 to Dec 2020",
    location: "Prayagraj, India",
    gpa: ""
  }
];

export const certificates = {
  featured: [
    {
      name: "Advanced Digital Marketing Certificate",
      issuer: "National Digital Marketing Institute & Training (NDMIT)",
      icon: "🏆",
      desc: "Completed the advanced level of study integrating hands-on training and practical case studies developed by NDMIT.",
      image: "/riya/cert-ndmit.jpg"
    },
    {
      name: "Inbound Social Media Strategy",
      issuer: "HubSpot Academy",
      icon: "🎯",
      desc: "Specialized training on inbound methodology and audience retention."
    },
    {
      name: "Marketing Analytics Mastery",
      issuer: "Udemy",
      icon: "📊",
      desc: "Advanced analytics coursework for data-driven campaign optimization."
    }
  ]
};

export const footerContent = {
  taglines: [
    "AI-Driven Social Media Manager",
    "Brand Marketing Strategist",
    "Content & Growth Specialist",
  ],
  credential: "Data-Driven Marketing Professional",
  copyright: `© ${new Date().getFullYear()} Riya Srivastava | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
