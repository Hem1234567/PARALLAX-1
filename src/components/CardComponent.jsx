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
      

      <div className="l-cards" ref={containerRef}>
        {/* CARD 1 */}
        <div className="c-card" ref={addToRefs}>
          <div className="c-card__description">
            <div className="c-card__tagline">Open Track</div>

            <h1 className="c-card__title"></h1>

            <div className="c-card__excerpt">
              Open Track is a flexible category that welcomes any innovative
              project idea, letting participants explore and create without
              thematic constraints.
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
              src="https://pechacks.org/img/Domains/Open_Track_final.jpg"
              alt="Zzor"
            />
          </figure>
        </div>

        {/* CARD 2 */}
        <div className="c-card" ref={addToRefs}>
          <div className="c-card__description">
            <div className="c-card__tagline">Health Care</div>

            <h1 className="c-card__title"></h1>

            <div className="c-card__excerpt">
              Health Care involves the maintenance and improvement of physical
              and mental health through medical services, prevention, diagnosis,
              and treatment.
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
              src="https://pechacks.org/img/Domains/Healthcare_final.jpg"
              alt="Amon Lopez"
            />
          </figure>
        </div>

        {/* CARD 3 */}
        <div className="c-card" ref={addToRefs}>
          <div className="c-card__description">
            <div className="c-card__tagline">Social Impact</div>

            <h1 className="c-card__title"></h1>

            <div className="c-card__excerpt">
              Social Impact refers to the positive effect a project or action
              has on the well-being, equity, and development of individuals and
              communities.
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
              src="https://pechacks.org/img/Domains/Social_Impact_final.jpg"
              alt="Marisa"
            />
          </figure>
        </div>

        {/* CARD 4 */}
        <div className="c-card" ref={addToRefs}>
          <div className="c-card__description">
            <div className="c-card__tagline">Blockchain & Web 3</div>

            <h1 className="c-card__title"></h1>

            <div className="c-card__excerpt">
              Blockchain & Web3 enable decentralized, transparent, and secure
              digital interactions without relying on central authorities.
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
              src="https://pechacks.org/img/Domains/Web_3_Blockchain_final.jpg"
              alt="Vicente Payá"
            />
          </figure>
        </div>

        {/* CARD 5 */}
        <div className="c-card" ref={addToRefs}>
          <div className="c-card__description">
            <div className="c-card__tagline">Artificial Intelligence</div>

            <h1 className="c-card__title"></h1>

            <div className="c-card__excerpt">
              Artificial Intelligence (AI) is the simulation of human
              intelligence by machines to perform tasks like learning,
              reasoning, and problem-solving.
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
              src="https://pechacks.org/img/Domains/AI_final.jpg"
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
