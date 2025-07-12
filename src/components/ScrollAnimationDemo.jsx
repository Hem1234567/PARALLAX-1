import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollAnimationDemo.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimationDemo = () => {
  const contentRef = useRef(null);
  const gridRef = useRef(null);
  const scalerRef = useRef(null);
  const layersRef = useRef([]);

  useEffect(() => {
    // Check if CSS scroll animations are supported
    const hasScrollSupport = CSS.supports(
      "(animation-timeline: view()) and (animation-range: 0 100%)"
    );

    if (!hasScrollSupport) {
      // Create fallback animations with GSAP
      const scalerTl = gsap
        .timeline({
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top -10%",
            end: "bottom 80%",
            scrub: true,
          },
        })
        .from(
          scalerRef.current,
          {
            height: window.innerHeight - 32,
            ease: "power1.inOut",
          },
          0
        )
        .from(
          scalerRef.current,
          {
            width: window.innerWidth - 32,
            ease: "power2.inOut",
          },
          0
        );

      const layersTl = gsap
        .timeline({
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top -40%",
            end: "bottom bottom",
            scrub: true,
          },
        })
        .from(
          layersRef.current[0],
          {
            opacity: 0,
            ease: "sine.out",
          },
          0
        )
        .from(
          layersRef.current[0],
          {
            scale: 0,
            ease: "power1.inOut",
          },
          0
        )
        .from(
          layersRef.current[1],
          {
            opacity: 0,
            ease: "sine.out",
          },
          0
        )
        .from(
          layersRef.current[1],
          {
            scale: 0,
            ease: "power3.inOut",
          },
          0
        )
        .from(
          layersRef.current[2],
          {
            opacity: 0,
            ease: "sine.out",
          },
          0
        )
        .from(
          layersRef.current[2],
          {
            scale: 0,
            ease: "power4.inOut",
          },
          0
        );

      return () => {
        scalerTl.kill();
        layersTl.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div className="content-wrap">
      <header>
        <h1 className="fluid">GLIMPSE</h1>
      </header>
      <main>
        <section ref={contentRef}>
          <div className="content">
            <div className="grid" ref={gridRef}>
              <div className="layer" ref={(el) => (layersRef.current[0] = el)}>
                <div>
                  <img
                    src="https://pechacks.org/assets/Glimpse/2_wipxwu.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://pechacks.org/assets/Glimpse/14_nyk7xo.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://pechacks.org/assets/Glimpse/15_cqfiq9.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://pechacks.org/assets/Glimpse/3_ul7etg.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://pechacks.org/assets/Glimpse/13_bwl6sl.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://pechacks.org/assets/Glimpse/1_b2cyhr.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="layer" ref={(el) => (layersRef.current[1] = el)}>
                <div>
                  <img
                    src="https://pechacks.org/assets/Glimpse/22_khrztk.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://pechacks.org/assets/Glimpse/4_admym6.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://pechacks.org/assets/Glimpse/6_gyx5qj.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://pechacks.org/assets/Glimpse/12_ydrqhn.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://pechacks.org/assets/Glimpse/8_r3rru9.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://pechacks.org/assets/Glimpse/9_yju36o.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="layer" ref={(el) => (layersRef.current[2] = el)}>
                <div>
                  <img
                    src="https://pechacks.org/assets/Glimpse/16_yhepva.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://pechacks.org/assets/Glimpse/17_teqfwc.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="scaler">
                <img
                  ref={scalerRef}
                  src="https://pechacks.org/assets/Glimpse/5_piqfql.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1 className="fluid">DOMAINS</h1>
        </section>
      </main>
    </div>
  );
};

export default ScrollAnimationDemo;
