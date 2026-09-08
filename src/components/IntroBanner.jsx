const bannerImage =
  "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwbcecd6fc/homepage/HeroBanner/earrings-desktop.jpg";

export default function IntroBanner() {
  return (
    <section className="intro-banner">
      <img
        src={bannerImage}
        alt="Tanishq jewellery collection"
      />
    </section>
  );
}