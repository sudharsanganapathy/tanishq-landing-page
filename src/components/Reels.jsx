import { images } from "../data/content";

export default function Reels() {
  return (
    <section className="reels">
      <div className="center-head">
        <p className="kicker">AS SEEN ON REELS</p>

        <h2>
          See It <em>Come Alive</em>
        </h2>

        <p>
          Discover Tanishq collection in motion.
        </p>
      </div>

      <div className="reel-strip">
        <div className="reel-card">
          <img
            src={images.reels}
            alt="Collection in motion"
          />

          <div>
            <span>01</span>
            <b>Jasmine in Motion</b>
          </div>
        </div>

        <div className="reel-card">
          <img
            src={images.lookOne}
            alt="Jewellery look"
          />

          <div>
            <span>02</span>
            <b>The Art of Uncut</b>
          </div>
        </div>

        <div className="reel-card">
          <img
            src={images.lookTwo}
            alt="Jewellery styling"
          />

          <div>
            <span>03</span>
            <b>Styled for Today</b>
          </div>
        </div>
      </div>
    </section>
  );
}