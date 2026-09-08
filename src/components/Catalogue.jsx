import { images } from "../data/content";
import { ArrowRight, Download } from "lucide-react";

export default function Catalogue() {
  return (
    <section className="catalogue" id="catalogue">
      <img src={images.flower5} alt="Jasmine" />

      <div>
        <p className="kicker">THE COMPLETE STORY</p>

        <h2>
          The Complete Tanishq
          <br />
          <em>Malle Catalogue</em>
        </h2>

        <p>
          Explore the collection through its designs, inspirations and
          craftsmanship.
        </p>

        <a className="catalogue-btn" href="#">
          Download the Catalogue
          <Download size={16} />
        </a>
      </div>

      <ArrowRight
        className="catalogue-arrow"
        size={34}
      />
    </section>
  );
}