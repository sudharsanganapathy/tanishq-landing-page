import { images } from "../data/content";

export default function ShopLook() {
  return (
    <section className="shop" id="shop">
      <div className="center-head light">
        <p className="kicker">STYLED TOGETHER</p>

        <h2>
          Shop the <em>Look</em>
        </h2>

        <p>
          Thoughtfully paired to complete the look.
        </p>
      </div>

      <div className="looks">
        <div className="look">
          <img
            src={images.lookOne}
            alt="Look One"
          />

          <div>
            <span>LOOK ONE</span>

            <h3>
              Haaram · Bangle · Earring · Necklace
            </h3>

            <a href="#catalogue">
              Explore Look →
            </a>
          </div>
        </div>

        <div className="look">
          <img
            src={images.lookTwo}
            alt="Look Two"
          />

          <div>
            <span>LOOK TWO</span>

            <h3>
              Earring · Necklace · Haaram · Bangle
            </h3>

            <a href="#catalogue">
              Explore Look →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}