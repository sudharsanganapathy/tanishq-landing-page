import { products } from "../data/content";
import { ArrowRight } from "lucide-react";

export default function Highlights() {
  return (
    <section
      className="section highlights"
      id="highlights"
    >
      <div className="center-head">
        <p className="kicker">INSPIRATION</p>

        <h2>Highlights</h2>

        <p>
          Four expressions of jasmine, shaped in gold and natural uncut
          diamonds.
        </p>
      </div>

      <div className="product-grid">
        {products.map((p, i) => (
          <article
            className="product"
            key={p.title}
          >
            <div className="product-image">
              <img
                src={p.image}
                alt={p.title}
              />

              <span>0{i + 1}</span>
            </div>

            <div className="product-copy">
              <small>{p.eyebrow}</small>
              <small>{p.tag}</small>

              <h3>{p.title}</h3>

              <p>{p.desc}</p>

              <a href="#shop">
                View Collection
                <ArrowRight size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}