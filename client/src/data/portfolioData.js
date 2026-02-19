
import miniPizzaPoster from "../assets/mini_pizza.jpg";
import shortFilmPoster from "../assets/short_film_poster.png";
import miniPizzaReel from "../assets/videos/mini_pizza_reel.mp4";

export const skills = [
  "Social Media Management",
  "Content Creation",
  "Content Writing",
  "Blog Writing",
  "Instagram Page Handling",
  "Canva Post and Reel Editing",
  "Basic Jewelry Post Editing",
  "Creative Thinking",
  "Communication Skills",
];

export const stats = [
  { label: "Projects Completed", value: "3+" },
  { label: "Content Campaigns", value: "10+" },
  { label: "Student Film Work", value: "02" },
  { label: "Instagram Concepts", value: "15+" },
];

export const projects = [
  {
    id: "cep-mini-pizza-stall",
    title: "CEP Project - Mini Pizza Stall",
    period: "College Practical Project",
    summary:
      "Created and managed a complete Instagram page for a mini pizza stall concept, including planning and posting.",
    responsibilities: [
      "Created and handled an Instagram page",
      "Content planning and story direction",
      "Content shoot and execution",
      "Page handling and posting consistency",
    ],
    tools: ["Instagram", "Canva", "Mobile Reel Editing"],
    image: miniPizzaPoster,
    gallery: [
      miniPizzaPoster,
      miniPizzaReel,
    ],
    client: "College Entrepreneurship Practice",
    duration: "6 Weeks",
    objective:
      "Build a social-first identity for a student mini pizza concept and keep audience interest active with short-format content.",
    challenge:
      "The project had limited budget and no prior audience, so we needed a simple but consistent content style to grow visibility.",
    approach: [
      "Created a weekly posting calendar with theme-based content buckets.",
      "Designed lightweight branding assets in Canva for faster publishing.",
      "Shot and edited quick behind-the-scenes and product-focused reels.",
      "Tracked engagement patterns and iterated captions and hooks.",
    ],
    outcomes: [
      "Published 20+ planned posts and short videos within the timeline.",
      "Improved average profile activity through consistent visual style.",
      "Developed a reusable workflow for future student-led brand pages.",
    ],
  },
  {
    id: "the-love-she-found",
    title: "Short Film - THE LOVE SHE FOUND",
    period: "1st Year College Project",
    summary:
      "Student short film project focused on concept development and visual storytelling from a communication perspective.",
    responsibilities: [
      "Concept and creative storytelling",
      "Student short film execution",
      "Visual narrative focus",
    ],
    tools: ["Creative Direction", "Storyboarding", "Basic Film Editing"],
    image: shortFilmPoster,
    videoEmbedUrl: "https://www.youtube.com/embed/lYvTn_EmCa8",
    gallery: [
      shortFilmPoster,
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
    ],
    client: "Academic Film Assignment",
    duration: "4 Weeks",
    objective:
      "Translate an emotional short story into a clear visual narrative with a structured communication arc.",
    challenge:
      "The team had minimal equipment and limited production hours, so shot planning and clarity were critical.",
    approach: [
      "Mapped each scene to a communication goal before shooting.",
      "Prepared a concise storyboard to reduce reshoots.",
      "Focused on framing and transitions to maintain emotional rhythm.",
      "Compiled a rough-cut feedback loop to improve scene continuity.",
    ],
    outcomes: [
      "Delivered the short film within academic deadlines.",
      "Strengthened practical skills in visual storytelling and pacing.",
      "Built confidence in coordinating small creative teams.",
    ],
  },
  {
    id: "sanskruti-ad-agency",
    title: "Sanskruti Ad Agency",
    period: "Entry-Level Practical Exposure",
    summary:
      "Worked on basic jewelry post editing and visual enhancement as a learning-focused practical creative experience.",
    responsibilities: [
      "Basic jewelry post editing",
      "Visual cleanup and enhancement",
      "Learning-based practical work",
    ],
    tools: ["Canva", "Image Cleanup", "Social Post Formatting"],
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1400&q=80",
    ],
    client: "Sanskruti Ad Agency",
    duration: "Ongoing Practical Exposure",
    objective:
      "Support jewelry brand post production with clean edits and a consistent visual output style.",
    challenge:
      "Assets came in mixed quality and formats, requiring quick cleanup while preserving product detail.",
    approach: [
      "Standardized template grids and export settings for social usage.",
      "Applied visual cleanup and contrast correction for product clarity.",
      "Matched post style with platform-specific readability.",
      "Delivered revisions quickly based on team feedback.",
    ],
    outcomes: [
      "Improved consistency of social post presentation.",
      "Reduced turnaround time through repeatable templates.",
      "Gained practical exposure to agency-style delivery cycles.",
    ],
  },
];

export const sampleWorks = [
  {
    title: "Brand Identity Campaign",
    category: "Campaign Design",
    brief:
      "Designed a cohesive visual language for a youth-oriented campaign with repeatable post templates and story cards.",
    result: "Reached 18% higher profile saves over baseline posts in a 3-week run.",
    image:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Visual Feed Curation",
    category: "Instagram Curation",
    brief:
      "Built a color-balanced feed flow with alternating content formats to improve readability and scroll retention.",
    result: "Improved average post engagement consistency across consecutive uploads.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Reels and Story Concepts",
    category: "Short Video Concepts",
    brief:
      "Planned reel hooks, transition style, and caption structure for quick storytelling in under 20 seconds.",
    result: "Increased short-video completion tendency through stronger opening hooks.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
];
