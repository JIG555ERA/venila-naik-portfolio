import { useCallback, useEffect, useRef, useState } from "react";
import { FiTrendingUp, FiUsers } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";
import TiltCard from "../components/TiltCard.jsx";
import venila_naik from "../assets/ven_dp.png";
import venila_naik01 from "../assets/venila_naik01.jpeg";
import venila_naik03 from "../assets/venila_naik03.jpeg";

const timeline = [
  {
    year: "2023",
    title: "Mass Communication Foundation",
    text: "Started practical media storytelling and communication training with student projects.",
  },
  {
    year: "2024",
    title: "Instagram and Content Handling",
    text: "Built hands-on experience in content writing, visual feed planning, and audience engagement.",
  },
  {
    year: "2025",
    title: "Practical Creative Exposure",
    text: "Worked on short film and ad-agency style visual tasks with a learning-focused workflow.",
  },
];

function AboutPage() {
  const images = [venila_naik, venila_naik01, venila_naik03];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFastRewinding, setIsFastRewinding] = useState(false);
  const timeoutIdsRef = useRef([]);
  const slideCount = images.length;
  const lastIndex = slideCount - 1;

  const clearQueuedRewind = useCallback(() => {
    timeoutIdsRef.current.forEach((id) => clearTimeout(id));
    timeoutIdsRef.current = [];
  }, []);

  const runFastRewind = useCallback(() => {
    if (isFastRewinding) return;
    setIsFastRewinding(true);

    let index = lastIndex;
    const step = () => {
      index -= 1;
      setActiveIndex(index);

      if (index > 0) {
        const nextId = setTimeout(step, 120);
        timeoutIdsRef.current.push(nextId);
      } else {
        const finishId = setTimeout(() => setIsFastRewinding(false), 140);
        timeoutIdsRef.current.push(finishId);
      }
    };

    const firstId = setTimeout(step, 90);
    timeoutIdsRef.current.push(firstId);
  }, [isFastRewinding, lastIndex]);

  const goToNext = () => {
    if (isFastRewinding) return;
    if (activeIndex < lastIndex) {
      setActiveIndex((prev) => prev + 1);
      return;
    }
    runFastRewind();
  };

  const goToPrev = () => {
    if (isFastRewinding) return;
    setActiveIndex((prev) => (prev - 1 + slideCount) % slideCount);
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (activeIndex < lastIndex) {
        setActiveIndex((prev) => prev + 1);
      } else {
        runFastRewind();
      }
    }, 3200);

    return () => clearInterval(id);
  }, [activeIndex, lastIndex, runFastRewind]);

  useEffect(() => () => clearQueuedRewind(), [clearQueuedRewind]);

  return (
    <div className="space-y-6 py-5 sm:space-y-8 sm:py-6">
      <Reveal className="panel soft-card soft-card-lg float-in grid gap-4 p-5 sm:p-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="panel soft-card lift-hover group relative overflow-hidden">
          <div
            className={`flex min-h-64 w-full transition-transform ease-in-out sm:min-h-80 ${isFastRewinding ? "duration-150" : "duration-700"}`}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={image} className="h-full min-h-64 w-full flex-none overflow-hidden sm:min-h-80">
                <img
                  src={image}
                  alt={`Venila profile ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-3 z-10 flex items-center justify-between px-3 sm:px-4">
            <button
              type="button"
              onClick={goToPrev}
              className="rounded-full border border-white/55 bg-black/45 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm transition hover:bg-black/65"
              aria-label="Previous image"
            >
              Prev
            </button>
            <div className="flex items-center gap-1.5 rounded-full border border-white/45 bg-black/35 px-2.5 py-1 backdrop-blur-sm">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    clearQueuedRewind();
                    setIsFastRewinding(false);
                    setActiveIndex(index);
                  }}
                  className={`h-1.5 w-1.5 rounded-full transition ${index === activeIndex ? "bg-white" : "bg-white/45 hover:bg-white/70"}`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goToNext}
              className="rounded-full border border-white/55 bg-black/45 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm transition hover:bg-black/65"
              aria-label="Next image"
            >
              Next
            </button>
          </div>
        </div>
        <div className="space-y-3">
          <p className="tag">About</p>
          <h1 className="font-display text-3xl font-extrabold sm:text-5xl">About Venila Naik</h1>
          <p className="text-zinc-700 dark:text-zinc-300">
            I am a Mass Communication student interested in media, branding, and storytelling.
            I enjoy creating content that is visually clear and emotionally relatable.
          </p>
          <p className="text-zinc-700 dark:text-zinc-300">
            My practical work includes social media planning, content creation, and creative support
            for visual projects.
          </p>
        </div>
      </Reveal>

      <Reveal className="space-y-4">
        <h2 className="section-title">Timeline</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {timeline.map((item) => (
            <TiltCard key={item.year} className="panel soft-card lift-hover p-4 sm:p-5">
              <p className="text-xs font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
                {item.year}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold sm:text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{item.text}</p>
            </TiltCard>
          ))}
        </div>
      </Reveal>

      <Reveal className="panel soft-card grid gap-4 p-5 sm:p-7 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="book-3d">
          <div className="book-3d-model">
            <div className="book-face book-front">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/8/88/WhoMovedMyCheeseCover.jpg/250px-WhoMovedMyCheeseCover.jpg"
                alt="Who Moved My Cheese book cover"
                className="book-cover-image"
              />
            </div>
            <div className="book-face book-open-page">
              <p className="book-quote">
                &quot;What would you do if you weren&apos;t afraid?&quot;
              </p>
              <p className="book-quote-author">Spencer Johnson, Who Moved My Cheese?</p>
            </div>
            <div className="book-face book-back" />
            <div className="book-face book-spine">
              <p>Who Moved My Cheese?</p>
            </div>
            <div className="book-face book-pages" />
            <div className="book-face book-top" />
            <div className="book-face book-bottom" />
          </div>
        </div>

        <div className="space-y-3">
          <p className="tag w-max">Learning Corner</p>
          <h2 className="section-title">What I&apos;m learning from it</h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            This book reinforces that growth comes from moving early, staying flexible, and not
            waiting for perfect certainty.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <TiltCard className="panel soft-card lift-hover p-4">
              <p className="flex items-center gap-2 text-sm font-bold">
                <FiTrendingUp /> Adapt Fast
              </p>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                When conditions change, quick action creates opportunities before fear grows.
              </p>
            </TiltCard>
            <TiltCard className="panel soft-card lift-hover p-4">
              <p className="flex items-center gap-2 text-sm font-bold">
                <FiUsers /> Stay Open-Minded
              </p>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Letting go of old assumptions helps me improve communication and creative work.
              </p>
            </TiltCard>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default AboutPage;
