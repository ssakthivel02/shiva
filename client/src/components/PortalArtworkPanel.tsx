import { useState } from "react";
import { ArrowRight, BookOpenText, Expand, Eye, Image as ImageIcon, Sparkles, Waves } from "lucide-react";
import { Link } from "wouter";
import { ownerSelectedArtwork } from "@/data/portalArtwork";
import "@/shiva-nextgen.css";

const shivaLenses = [
  {
    icon: BookOpenText,
    label: "Source",
    tamil: "ஆதாரம்",
    detail: "Begin with the record, reference, provenance, and what the collection actually supports.",
  },
  {
    icon: Eye,
    label: "Context",
    tamil: "சூழல்",
    detail: "Move from a verse, deity, place, or practice into related traditions without collapsing distinct sources.",
  },
  {
    icon: Waves,
    label: "Reflection",
    tamil: "சிந்தனை",
    detail: "Use clearly labelled interpretation and generated guidance as a next step—not as a replacement for source evidence.",
  },
] as const;

export function PortalArtworkPanel() {
  const [loaded, setLoaded] = useState(false);
  const [usingFallback, setUsingFallback] = useState(false);

  if (!ownerSelectedArtwork.readyForProduction || !ownerSelectedArtwork.assetPath) return null;

  const displayedAsset = usingFallback ? ownerSelectedArtwork.fallbackPath : ownerSelectedArtwork.assetPath;

  return (
    <section
      id="owner-portal-vision"
      className={`portal-artwork shiva-portal ${loaded ? "is-loaded" : "is-loading"}`}
      aria-labelledby="portal-artwork-title"
      aria-describedby="portal-artwork-description portal-artwork-note"
      data-owner-artwork="active"
      data-shiva-experience="trinetra"
    >
      <div className="shiva-portal__halo" aria-hidden="true" />
      <div className="portal-artwork__visual shiva-portal__visual" aria-busy={!loaded}>
        <img
          src={displayedAsset}
          alt={ownerSelectedArtwork.alt}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onLoad={() => setLoaded(true)}
          onError={() => {
            if (!usingFallback) {
              setLoaded(false);
              setUsingFallback(true);
            }
          }}
        />
        <span className="portal-artwork__badge shiva-portal__badge"><Sparkles size={14} aria-hidden="true" />Shiva living knowledge portal</span>
        <div className="shiva-portal__sigil" aria-hidden="true"><span>ॐ</span><i /><b /></div>
        {!loaded && <span className="portal-artwork__loading" role="status">Opening the Shiva portal…</span>}
      </div>

      <div className="portal-artwork__copy shiva-portal__copy">
        <p className="scene-kicker"><ImageIcon size={14} aria-hidden="true" />The Trinetra experience</p>
        <p className="shiva-portal__tamil" lang="ta">சிவ ஞானப் பாதை · ஆதாரம் முதல் சிந்தனை வரை</p>
        <h2 id="portal-artwork-title">See knowledge through three deliberate lenses.</h2>
        <p id="portal-artwork-description">
          Shiva is evolving beyond a renamed archive into a distinct spiritual-intelligence experience: cinematic discovery, source-first evidence, contextual pathways, and bounded reflection remain visibly separated while feeling like one continuous journey.
        </p>

        <div className="shiva-portal__lenses" aria-label="Shiva knowledge lenses">
          {shivaLenses.map(({ icon: Icon, label, tamil, detail }, index) => (
            <article key={label} className="shiva-portal__lens">
              <span className="shiva-portal__lens-index">0{index + 1}</span>
              <Icon size={20} aria-hidden="true" />
              <h3>{label}<small lang="ta">{tamil}</small></h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>

        <div className="portal-artwork__actions">
          <Link className="button button--gold shiva-portal__primary" href="/explore">
            Enter Shiva Explore <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a className="button button--glass" href={ownerSelectedArtwork.assetPath} target="_blank" rel="noreferrer">
            View portal artwork <Expand size={16} aria-hidden="true" />
          </a>
        </div>
        <p id="portal-artwork-note" className="portal-artwork__note">
          Collection totals, source classifications, and available pathways remain governed by the current Shiva collection-status data. Visual presentation does not upgrade the evidence status of any record.
        </p>
        {usingFallback && <p className="portal-artwork__fallback" role="status">The selected visual could not load, so Shiva is showing its safe local fallback.</p>}
      </div>
    </section>
  );
}
