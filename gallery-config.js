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
  // 1. Drop the .webp file into assets/gallery/
  // 2. Add one line below: { src, category, alt }
  // That's it — no CSS changes needed ever.

  images: [
    // LANDSCAPE
    { src: "assets/gallery/l1.webp",  category: "landscape", alt: "Mountain range at golden hour" },
    { src: "assets/gallery/l2.webp",  category: "landscape", alt: "Fog rolling over valley" },
    { src: "assets/gallery/l3.webp",  category: "landscape", alt: "Open road through hills" },
    { src: "assets/gallery/l4.webp",  category: "landscape", alt: "River winding through forest" },
    { src: "assets/gallery/l5.webp",  category: "landscape", alt: "Dramatic sky over plains" },

    // PORTRAIT
    { src: "assets/gallery/p1.webp",  category: "portrait",  alt: "Portrait in natural light" },
    { src: "assets/gallery/p2.webp",  category: "portrait",  alt: "Cinematic street portrait" },
    { src: "assets/gallery/p3.webp",  category: "portrait",  alt: "Environmental portrait" },
    { src: "assets/gallery/p4.webp",  category: "portrait",  alt: "Portrait with soft bokeh" },

    // FOOD
    { src: "assets/gallery/f1.webp",  category: "food",      alt: "Café coffee and pastry" },
    { src: "assets/gallery/f2.webp",  category: "food",      alt: "Restaurant dish close-up" },
    { src: "assets/gallery/f3.webp",  category: "food",      alt: "Food ambience shot" },
    { src: "assets/gallery/f4.webp",  category: "food",      alt: "Product flat lay" },

    // ANIMAL
    { src: "assets/gallery/a1.webp",  category: "animal",    alt: "Bird in natural habitat" },
    { src: "assets/gallery/a2.webp",  category: "animal",    alt: "Animal portrait close-up" },
    { src: "assets/gallery/a3.webp",  category: "animal",    alt: "Wildlife in motion" },
  ],

};
