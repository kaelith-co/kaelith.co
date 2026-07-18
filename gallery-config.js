// ============================================================
//  KAELITH — GALLERY CONFIG
//  To add images: just add a new line to the images array
//  Categories: "landscape" | "portrait" | "food" | "animal"
//  No limit on number of images — grid adapts automatically
// ============================================================

const galleryData = {

  // ── CATEGORIES shown as filter buttons ──────────────────
  categories: [
    { id: "all",      label: "All" },
    { id: "landscape", label: "Landscape" },
    { id: "portrait",  label: "Portrait" },
    { id: "food",      label: "Food" },
    { id: "animal",    label: "Animal" },
  ],

  // ── IMAGES ──────────────────────────────────────────────
  // To add a new image:
  // 1. Drop the .webp file into gallery/
  // 2. Add one line below: { src, category, alt }
  // That's it — no CSS changes needed ever.

  images: [
    { src: "gallery/l1.webp",  category: "landscape", alt: "Mountain range at golden hour" },
    { src: "gallery/p1.webp",  category: "portrait",  alt: "Portrait in natural light" },
    { src: "gallery/a1.webp",  category: "animal",    alt: "Bird in natural habitat" },
    { src: "gallery/f1.webp",  category: "food",      alt: "Café coffee and pastry" },
    { src: "gallery/p2.webp",  category: "portrait",  alt: "Cinematic street portrait" },
    { src: "gallery/l2.webp",  category: "landscape", alt: "Fog rolling over valley" },
    { src: "gallery/f2.webp",  category: "food",      alt: "Restaurant dish close-up" },
    { src: "gallery/a2.webp",  category: "animal",    alt: "Animal portrait close-up" },
    { src: "gallery/l3.webp",  category: "landscape", alt: "Open road through hills" },
    { src: "gallery/p3.webp",  category: "portrait",  alt: "Environmental portrait" },
    { src: "gallery/f3.webp",  category: "food",      alt: "Food ambience shot" },
    { src: "gallery/a3.webp",  category: "animal",    alt: "Wildlife in motion" },
    { src: "gallery/l4.webp",  category: "landscape", alt: "River winding through forest" },
    { src: "gallery/p4.webp",  category: "portrait",  alt: "Portrait with soft bokeh" },
    { src: "gallery/f4.webp",  category: "food",      alt: "Product flat lay" },
    { src: "gallery/l5.webp",  category: "landscape", alt: "Dramatic sky over plains" },
  ],

};
