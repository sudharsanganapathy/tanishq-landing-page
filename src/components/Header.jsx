import { useState } from "react";
import {
  Search,
  UserRound,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const nav = [
  "All Jewellery",
  "Gold",
  "Diamond",
  "Earrings",
  "Daily Wear",
  "Gemstone",
  "Wedding",
  "Gifting",
  "Under 50K",
  "More",
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="offer">
        EXCLUSIVE ONLINE OFFER <span>·</span> FLAT ₹500 OFF ON YOUR FIRST
        ORDER <b>WELCOME500</b>
      </div>

      <header className="header">
        <div className="header-inner">
          <button
            className="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

          <a className="logo" href="#top">
            TANISHQ
          </a>

          <nav className="desktop-nav">
            {nav.map((n, i) => (
              <a key={n} href="#collection">
                {n}

                {i !== 0 && i !== 9 && <ChevronDown size={12} />}
              </a>
            ))}
          </nav>

          <div className="actions">
            <Search />
            <UserRound />
            <Heart />
            <ShoppingBag />
          </div>
        </div>

        {open && (
          <nav className="mobile-nav">
            {nav.map((n) => (
              <a
                key={n}
                href="#collection"
                onClick={() => setOpen(false)}
              >
                {n}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}