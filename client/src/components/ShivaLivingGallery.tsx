/** Shiva devotional image gallery: imagery is not a live temple stream. */
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play, Share2, Sparkles } from "lucide-react";
import { Link } from "wouter";
import "@/shiva-living-gallery.css";

const slides = [
  {
    title: "சிவ ஞானப் பாதை",
    subtitle: "A universe of Shiva wisdom",
    description: "திருநாமம், திருத்தலங்கள், கலை, மரபு — அறிந்துகொள்ளும் ஓர் ஆன்மிகப் பயணம்.",
    src: "/assets/divyanexus/owner-selected-vision.webp",
    fallback: "/assets/divyanexus/hero-moonlit-horizon.webp",
    alt: "Owner-selected artistic portrayal of the Shiva knowledge portal",
    credit: "Original site artwork", creditUrl: "",
  },
  {
    title: "ஆனந்த தாண்டவம்",
    subtitle: "Natarajar · The cosmic dance",
    description: "நடராஜர் திருவுருவத்தில் அசைவும் அமைதியும் இணையும் கலைமரபை உணருங்கள்.",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Shiva_as_Lord_of_the_Dance_%28Nataraja%29.jpg",
    fallback: "/assets/divyanexus/owner-selected-vision.webp",
    alt: "Chola-period Shiva Nataraja bronze sculpture",
    credit: "Art Institute of Chicago · CC0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Shiva_as_Lord_of_the_Dance_(Nataraja).jpg",
  },
  {
    title: "ஆதியோகி சிவன்",
    subtitle: "Stillness · Meditation · Light",
    description: "அமைதியுடன் கவனித்து, சிவநாமத்தை மனதில் நினைக்கும் ஒரு சிறு தருணம்.",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Adiyogi_Shiva_statue.jpg",
    fallback: "/assets/divyanexus/hero-moonlit-horizon.webp",
    alt: "Adiyogi Shiva statue illuminated at night",
    credit: "Deshna Subramanian · CC0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Adiyogi_Shiva_statue.jpg",
  },
] as const;

export function ShivaLivingGallery() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [fallbacks, setFallbacks] = useState<number[]>([]);
  const [notice, setNotice] = useState("");
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setIndex(current => (current + 1) % slides.length), 8500);
    return () => window.clearInterval(timer);
  }, [paused]);
  const shift = (step: number) => setIndex(current => (current + step + slides.length) % slides.length);
  const share = async () => {
    const url = window.location.origin + "/karthigai-deepam-2026.html";
    const message = "கார்த்திகை தீபத் திருநாள் நல்வாழ்த்துகள்! ஓம் நமசிவாய!";
    try {
      if (navigator.share) {
        await navigator.share({ title: "Shiva · Karthigai Deepam", text: message, url });
        setNotice("Sharing options opened");
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(message + " " + url);
        setNotice("வாழ்த்து இணைப்பு நகலெடுக்கப்பட்டது");
      } else setNotice("Share: " + url);
    } catch (error) {
      if ((error as {name?: string})?.name !== "AbortError") setNotice("Share: " + url);
    }
  };
  return <section className="shiva-living-gallery" aria-label="Shiva devotional gallery">
    <div className="shiva-living-gallery__heading">
      <span className="shiva-living-gallery__eyebrow"><Sparkles size={15} aria-hidden="true" /> Divine moments · அருள் ஒளி</span>
      <h2>சிவ தரிசனக் காட்சிகள் <span>— Shiva in every moment</span></h2>
      <p>தியானம் முதல் நடராஜரின் ஆனந்த தாண்டவம் வரை, ஒளி, கலை, பக்தி ஆகியவற்றைக் காணும் காட்சி அனுபவம்.</p>
    </div>
    <div className="shiva-living-gallery__stage" aria-roledescription="carousel">
      {slides.map((slide, i) =>
        <div key={slide.title} className={"shiva-living-gallery__scene" + (i === index ? " is-current" : "")} aria-hidden={i !== index}>
          <img src={fallbacks.includes(i) ? slide.fallback : slide.src}
            alt={i === index ? slide.alt : ""} loading={i===0?"eager":"lazy"} decoding="async"
            onError={() => setFallbacks(old => old.includes(i) ? old : [...old, i])}/>
        </div>
      )}
      <div className="shiva-living-gallery__embers" aria-hidden="true"/>
      <div className="shiva-living-gallery__stage-copy" aria-live="polite" aria-atomic="true">
        <span>0{index+1} / 0{slides.length} · ஓம் நமசிவாய</span>
        <h3>{slides[index].title}</h3>
        <p className="shiva-living-gallery__subtitle">{slides[index].subtitle}</p>
        <p>{slides[index].description}</p>
      </div>
    </div>
    <div className="shiva-living-gallery__toolbar">
      <div className="shiva-living-gallery__controls" aria-label="Gallery controls">
        <button type="button" onClick={() => shift(-1)} aria-label="Previous Shiva image"><ArrowLeft size={18}/></button>
        {slides.map((slide,i)=><button type="button" key={slide.title}
          aria-label={"Show "+slide.subtitle} aria-pressed={index===i}
          className={index===i?"is-selected":""} onClick={()=>setIndex(i)}>{i+1}</button>)}
        <button type="button" onClick={() => shift(1)} aria-label="Next Shiva image"><ArrowRight size={18}/></button>
        <button type="button" onClick={()=>setPaused(value=>!value)}
          aria-label={paused?"Resume rotating images":"Pause rotating images"} aria-pressed={paused}>
          {paused?<Play size={18}/>:<Pause size={18}/>}
        </button>
      </div>
      <div className="shiva-living-gallery__actions">
        <Link href="/karthigai-deepam-2026.html">🪔 தீபத் திருநாள் <ArrowRight size={16}/></Link>
        <button type="button" onClick={share}><Share2 size={16}/> பகிர்</button>
      </div>
    </div>
    {notice && <p className="shiva-living-gallery__message" role="status">{notice}</p>}
    <p className="shiva-living-gallery__credit">
      {slides[index].creditUrl ?
        <a href={slides[index].creditUrl} target="_blank" rel="noreferrer">{slides[index].credit}</a>
        : slides[index].credit}
      {" · Artistic representations and sculpture photos, not a live broadcast."}
    </p>
  </section>;
}
