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
    { id: "landscape", label: "Nature" },
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

  ],

};
