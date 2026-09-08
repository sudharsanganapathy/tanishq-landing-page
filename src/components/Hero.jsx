import { images } from "../data/content";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div
        className="hero-rays"
        style={{
          backgroundImage: `url(${images.rays})`,
        }}
      />

      <div className="hero-copy">
        <p className="kicker">UNCUT DIAMONDS</p>

        <h1>
          Inspired by
          <br />
          <em>Jasmine</em>
        </h1>

        <p className="hero-sub">
          Beloved South Indian jewellery silhouettes, thoughtfully
          reimagined with natural uncut diamonds
        </p>

        <Button />
      </div>

      <img
        className="hero-flowers"
        src={images.flowers}
        alt="Jasmine flowers"
      />
    </section>
  );
}