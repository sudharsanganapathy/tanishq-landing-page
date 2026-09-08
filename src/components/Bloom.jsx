import { images } from "../data/content";

const points = [
  [
    "Jasmine Blossoms & Buds",
    "Alternating floral motifs capture the rhythm of a blooming garland.",
  ],
  [
    "Original by Nature",
    "Retains the diamond’s natural crystal form.",
  ],
  [
    "A Different Play of Light",
    "Natural surfaces diffuse light gently, revealing depth, texture and a subtle luminosity.",
  ],
  [
    "Inherently Unique",
    "No two uncut diamonds share the same shape, surface or character.",
  ],
  [
    "Centuries of Indian Craft",
    "Worn and treasured across India for centuries.",
  ],
  [
    "Carefully Curated by Tanishq",
    "Every stone is selected, matched and hand-set with precision.",
  ],
];

export default function Bloom() {
  return (
    <section className="bloom">
      <div className="bloom-art">
        <img src={images.flower2} alt="Jasmine detail" />

        <div className="bloom-orbit">
          <span>UNCUT</span>
          <span>DIAMOND</span>
        </div>
      </div>

      <div className="bloom-copy">
        <p className="kicker">THE INSPIRATION</p>

        <h2>
          Interpreting
          <br />
          <em>the Bloom</em>
        </h2>

        <p className="lead">
          Every piece captures the layered forms, rich textures and sculptural
          dimension of the jasmine flower through natural uncut diamonds set in
          18K gold.
        </p>

        <div className="points">
          {points.map(([a, b]) => (
            <div key={a}>
              <span>✦</span>

              <p>
                <b>{a}</b>
                {b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}