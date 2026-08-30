import { useMemo } from "react";
import { Link } from "wouter";

export default function ShivaIdentityBanner() {
  const destination = useMemo(() => "https://shiva.omsaravanabhava.org/", []);
  return (
    <aside aria-label="Shiva migration identity" style={{padding:"0.6rem 1rem",fontSize:"0.9rem",textAlign:"center"}}>
      <strong>Shiva</strong> — Hi-Tech Spiritual Intelligence &amp; Knowledge Platform · {" "}
      <Link href="/about">About</Link> · {" "}
      <a href={destination}>shiva.omsaravanabhava.org</a>
    </aside>
  );
}
