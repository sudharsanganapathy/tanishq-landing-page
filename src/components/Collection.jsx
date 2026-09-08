import { collections } from "../data/content";
import { ArrowUpRight } from "lucide-react";

export default function Collection() {
  return (
    <section className="section collection" id="collection">
      <div className="section-head">
        <div>
          <p className="kicker">THE COLLECTION</p>

          <h2>
            Beloved silhouettes,
            <br />
            <em>reimagined for today</em>
          </h2>
        </div>

        <p>
          South Indian jewellery traditions meet the raw, organic beauty of
          natural uncut diamonds.
        </p>
      </div>

      <div className="collection-grid">
        {collections.map((c, i) => (
          <article className="collection-card" key={c.title}>
            <div className="collection-img">
              <img src={c.image} alt={c.title} />

              <span>0{i + 1}</span>
            </div>

            <div className="card-meta">
              <h3>{c.title}</h3>

              <p>{c.desc}</p>

              <a href="#highlights">
                Explore Category
                <ArrowUpRight size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}