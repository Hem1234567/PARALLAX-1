import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CardComponent.css"; // Assuming you have a CSS file for styles

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const CardComponent = () => {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP animations after component mounts
    const cards = cardsRef.current;
    const lastCardIndex = cards.length - 1;

    // Create ScrollTriggers for first and last card
    const firstCardST = ScrollTrigger.create({
      trigger: cards[1],
      start: "center center",
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: "center center",
    });

    // Iterate over each card
    cards.forEach((card, index) => {
      const scale = index === lastCardIndex ? 1 : 0.5;
      const scaleDown = gsap.to(card, {
        scale: scale,
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        end: () => lastCardST.start,
        pin: true,
        pinSpacing: false,
        scrub: 0.5,
        ease: "none",
        animation: scaleDown,
        toggleActions: "restart none none reverse",
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Add card to ref array
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section>
      <header>
        <p>Tagline</p>
        <h1>Short heading goes here</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          architecto exercitationem voluptates? Alias, obcaecati qui suscipit
          totam provident asperiores temporibus eveniet a. At sapiente quo quae
          dolorum accusamus. Libero, temporibus!
        </div>

        <a
          href="https://codepen.io/HugoSalazar/pen/dyBzOdj?editors=1100"
          target="_blank"
          rel="noopener noreferrer"
        >
          Version without GSAP and Javascript
        </a>
      </header>

      <div className="l-cards" ref={containerRef}>
        {/* CARD 1 */}
        <div className="c-card" ref={addToRefs}>
          <div className="c-card__description">
            <div className="c-card__tagline">Amon The Sign</div>

            <h1 className="c-card__title">Zzor / Bass</h1>

            <div className="c-card__excerpt">
              Zzor es el bajista de la banda de Darkwave española: Amon The sign
            </div>

            <div className="c-card__cta">
              <a
                href="https://www.youtube.com/watch?v=aqacOQpfbxc&ab_channel=AmonTheSign"
                target="_blank"
                rel="noopener noreferrer"
              >
                Escuchar en Youtube
              </a>
            </div>
          </div>

          <figure className="c-card__figure">
            <img
              src="https://www.ats.hugo-salazar.com/wp-content/uploads/2023/04/zzor.jpeg"
              alt="Zzor"
            />
          </figure>
        </div>

        {/* CARD 2 */}
        <div className="c-card" ref={addToRefs}>
          <div className="c-card__description">
            <div className="c-card__tagline">Amon The Sign</div>

            <h1 className="c-card__title">Amón Lopez / Vocals</h1>

            <div className="c-card__excerpt">
              Amon Lopez es la voz masculina de la banda de Darkwave española:
              Amon The sign
            </div>

            <div className="c-card__cta">
              <a
                href="https://www.youtube.com/watch?v=aqacOQpfbxc&ab_channel=AmonTheSign"
                target="_blank"
                rel="noopener noreferrer"
              >
                Escuchar en Youtube
              </a>
            </div>
          </div>

          <figure className="c-card__figure">
            <img
              src="https://www.ats.hugo-salazar.com/wp-content/uploads/2023/04/pincho.jpeg"
              alt="Amon Lopez"
            />
          </figure>
        </div>

        {/* CARD 3 */}
        <div className="c-card" ref={addToRefs}>
          <div className="c-card__description">
            <div className="c-card__tagline">Amon The Sign</div>

            <h1 className="c-card__title">Marisa / Vocals</h1>

            <div className="c-card__excerpt">
              Marisa es la voz femenina de la banda de Darkwave española: Amon
              The sign
            </div>

            <div className="c-card__cta">
              <a
                href="https://www.youtube.com/watch?v=aqacOQpfbxc&ab_channel=AmonTheSign"
                target="_blank"
                rel="noopener noreferrer"
              >
                Escuchar en Youtube
              </a>
            </div>
          </div>

          <figure className="c-card__figure">
            <img
              src="https://www.ats.hugo-salazar.com/wp-content/uploads/2023/04/marisa.jpeg"
              alt="Marisa"
            />
          </figure>
        </div>

        {/* CARD 4 */}
        <div className="c-card" ref={addToRefs}>
          <div className="c-card__description">
            <div className="c-card__tagline">Amon The Sign</div>

            <h1 className="c-card__title">Vicente / Guitars</h1>

            <div className="c-card__excerpt">
              Vicente es el guitarrista de la banda de Darkwave española: Amon
              The sign
            </div>

            <div className="c-card__cta">
              <a
                href="https://www.youtube.com/watch?v=aqacOQpfbxc&ab_channel=AmonTheSign"
                target="_blank"
                rel="noopener noreferrer"
              >
                Escuchar en Youtube
              </a>
            </div>
          </div>

          <figure className="c-card__figure">
            <img
              src="https://www.ats.hugo-salazar.com/wp-content/uploads/2023/04/vicente.jpeg"
              alt="Vicente Payá"
            />
          </figure>
        </div>

        {/* CARD 5 */}
        <div className="c-card" ref={addToRefs}>
          <div className="c-card__description">
            <div className="c-card__tagline">Amon The Sign</div>

            <h1 className="c-card__title">Leoben Conoy / Synths</h1>

            <div className="c-card__excerpt">
              Leoben Conoy es el teclista de la banda de Darkwave española: Amon
              The sign
            </div>

            <div className="c-card__cta">
              <a
                href="https://www.youtube.com/watch?v=aqacOQpfbxc&ab_channel=AmonTheSign"
                target="_blank"
                rel="noopener noreferrer"
              >
                Escuchar en Youtube
              </a>
            </div>
          </div>

          <figure className="c-card__figure">
            <img
              src="https://www.ats.hugo-salazar.com/wp-content/uploads/2023/04/leoben.jpeg"
              alt="Leoben Conoy"
            />
          </figure>
        </div>
      </div>

      <div className="spacer"></div>
    </section>
  );
};

export default CardComponent;
