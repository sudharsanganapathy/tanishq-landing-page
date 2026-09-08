import { images } from "../data/content";

export default function Nature() {
  return (
    <section className="nature">
      <div className="nature-copy">
        <p className="kicker">A NOTE FROM NATURE</p>

        <h2>
          Beauty is born
          <br />
          <em>unrefined.</em>
        </h2>

        <p>
          Natural uncut diamonds hold their own story — each surface, edge
          and inclusion shaped by nature. In the hands of Indian artisans,
          that raw character becomes jewellery made to be treasured.
        </p>

        <a href="#top">
          Discover the collection →
        </a>
      </div>

      <img
        src={images.flower3}
        alt="Nature inspired jasmine"
      />
    </section>
  );
}