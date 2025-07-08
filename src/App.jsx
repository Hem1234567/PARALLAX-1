import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const introRef = useRef(null);
  const textAlignCenterRef = useRef(null);
  const tabsLeftContentRefs = useRef([]);
  const tabsVideoRefs = useRef([]);

  // Initialize refs arrays
  tabsLeftContentRefs.current = [];
  tabsVideoRefs.current = [];

  const addToLeftContentRefs = (el) => {
    if (el && !tabsLeftContentRefs.current.includes(el)) {
      tabsLeftContentRefs.current.push(el);
    }
  };

  const addToVideoRefs = (el) => {
    if (el && !tabsVideoRefs.current.includes(el)) {
      tabsVideoRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Pin the intro text section
    ScrollTrigger.create({
      trigger: introRef.current,
      start: "top top",
      end: "bottom top",
      onEnter: () => {
        gsap.set(textAlignCenterRef.current, {
          position: "fixed",
          top: "50px",
        });
      },
      onLeaveBack: () => {
        gsap.set(textAlignCenterRef.current, {
          position: "absolute",
          top: "auto",
        });
      },
    });

    // Set initial states for all tabs
    tabsLeftContentRefs.current.forEach((content, index) => {
      const video = tabsVideoRefs.current[index];
      if (index === 0) {
        gsap.set(content, { opacity: 1 });
        gsap.set(video, { opacity: 1, y: 0 });
      } else {
        gsap.set(content, { opacity: 0 });
        gsap.set(video, { opacity: 0, y: 100 });
      }
    });

    // Create scroll triggers for each tab section
    tabsLeftContentRefs.current.forEach((content, index) => {
      const video = tabsVideoRefs.current[index];
      const isLast = index === tabsLeftContentRefs.current.length - 1;

      ScrollTrigger.create({
        trigger: ".section_tabs",
        start: `top+=${index * window.innerHeight} top`,
        end: `top+=${(index + 1) * window.innerHeight} top`,
        onEnter: () => {
          // Show current tab
          gsap.to(content, { opacity: 1, duration: 0.5 });
          gsap.to(video, { opacity: 1, y: 0, duration: 0.5 });

          // Hide previous tab (if not first)
          if (index > 0) {
            gsap.to(tabsLeftContentRefs.current[index - 1], {
              opacity: 0,
              duration: 0.5,
            });
            gsap.to(tabsVideoRefs.current[index - 1], {
              opacity: 0,
              y: 100,
              duration: 0.5,
            });
          }
        },
        onEnterBack: () => {
          // Show current tab
          gsap.to(content, { opacity: 1, duration: 0.5 });
          gsap.to(video, { opacity: 1, y: 0, duration: 0.5 });

          // Hide next tab (if not last)
          if (!isLast) {
            gsap.to(tabsLeftContentRefs.current[index + 1], {
              opacity: 0,
              duration: 0.5,
            });
            gsap.to(tabsVideoRefs.current[index + 1], {
              opacity: 0,
              y: 100,
              duration: 0.5,
            });
          }
        },
        onLeave: () => {
          // When scrolling down past this section (except last)
          if (!isLast) {
            gsap.to(content, { opacity: 0, duration: 0.5 });
            gsap.to(video, { opacity: 0, y: 100, duration: 0.5 });
          }
        },
        onLeaveBack: () => {
          // When scrolling up past this section (except first)
          if (index > 0) {
            gsap.to(content, { opacity: 0, duration: 0.5 });
            gsap.to(video, { opacity: 0, y: 100, duration: 0.5 });
          }
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="app">
      <div className="intro-wrapper" ref={introRef}>
        <div className="intro">
          <div className="text-align-center" ref={textAlignCenterRef}>
            <div className="max-width-small align-center">
              <div className="margin-bottom margin-small">
                <h2 className="heading-style-h3">
                  <span className="light-green-underline">149€/month</span>{" "}
                  &amp; not a single worry
                </h2>
              </div>
              <p className="text-size-medium">
                We take care of registration, insurance, and maintenance to
                ensure you have a hassle-free ride!{" "}
                <sup>*including theft coverage under certain conditions.</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="section_tabs">
        <div className="padding-section-large">
          <div className="tabs_height">
            <div className="tabs_sticky-wrapper">
              <div className="tabs_container">
                <div className="tabs_component">
                  <div className="tabs_left">
                    <div className="tabs_left-top">
                      <div
                        className="tabs_let-content"
                        ref={addToLeftContentRefs}
                      >
                        <h2 className="heading-style-h4 text-color-gray100">
                          Blockchain & Web 3
                        </h2>
                        <div className="tabs_line"></div>
                        <p className="text-size-small text-color-gray400">
                          Blockchain is a decentralized, distributed digital
                          ledger that records transactions across many computers
                          in such a way that the registered transactions cannot
                          be altered retroactively.
                        </p>
                      </div>
                      <div
                        className="tabs_let-content"
                        ref={addToLeftContentRefs}
                      >
                        <h2 className="heading-style-h4 text-color-gray100">
                          Artificial Intelligence
                        </h2>
                        <div className="tabs_line"></div>
                        <p className="text-size-small text-color-gray400">
                          Artificial Intelligence (AI) is the branch of computer
                          science that enables machines to simulate human
                          intelligence—such as learning, reasoning,
                          problem-solving, perception, and language
                          understanding. In simple terms: AI makes computers
                          “think” and “act” like humans.
                        </p>
                      </div>
                      <div
                        className="tabs_let-content"
                        ref={addToLeftContentRefs}
                      >
                        <h2 className="heading-style-h4 text-color-gray100">
                          Health Care
                        </h2>
                        <div className="tabs_line"></div>
                        <p className="text-size-small text-color-gray400">
                          Health care refers to the prevention, diagnosis,
                          treatment, and management of illness, disease, and
                          injury, as well as the preservation of physical and
                          mental well-being through services provided by medical
                          professionals and institutions.
                        </p>
                      </div>
                    </div>
                    <div className="tabs_left-bottom">
                      <div className="button is-green is-secondary">
                        <div className="button-text">View More</div>
                        <div className="button-circle-wrapper">
                          <div className="button-icon _1">
                            <svg
                              height="100%"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.66699 11.3332L11.3337 4.6665"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M4.66699 4.6665H11.3337V11.3332"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                          <div className="button-icon _2">
                            <svg
                              height="100%"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.66699 11.3332L11.3337 4.6665"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M4.66699 4.6665H11.3337V11.3332"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="button-circlee background-color-green"></div>
                      </div>
                    </div>
                  </div>
                  <div className="tabs_right">
                    <div
                      className="tabs_video w-background-video w-background-video-atom"
                      ref={addToVideoRefs}
                    >
                      <video
                        id="video-1"
                        autoPlay
                        loop
                        muted
                        playsInline
                        data-object-fit="cover"
                      >
                        <source
                          src="https://assets-global.website-files.com/65ae37af356fab4845432048/65be0fdac914d702e08f70ed_Yoda-Helmet_1-transcode.mp4"
                          data-wf-ignore="true"
                        />
                        <source
                          src="https://assets-global.website-files.com/65ae37af356fab4845432048/65be0fdac914d702e08f70ed_Yoda-Helmet_1-transcode.webm"
                          data-wf-ignore="true"
                        />
                      </video>
                      <img
                        src="https://assets-global.website-files.com/65ae37af356fab4845432048/65b0dc37d226a551affbf2ea_GDA24_HO_WINNER_MC_RGB.webp"
                        loading="lazy"
                        sizes="(max-width: 479px) 56px, 80px"
                        srcSet="https://assets-global.website-files.com/65ae37af356fab4845432048/65b0dc37d226a551affbf2ea_GDA24_HO_WINNER_MC_RGB-p-500.png 500w, https://assets-global.website-files.com/65ae37af356fab4845432048/65b0dc37d226a551affbf2ea_GDA24_HO_WINNER_MC_RGB.webp 1298w"
                        alt="German design award winner 2024 logo."
                        className="tabs_video-gda-badge"
                      />
                    </div>
                    <div
                      className="tabs_video w-background-video w-background-video-atom"
                      ref={addToVideoRefs}
                    >
                      <video
                        id="video-2"
                        autoPlay
                        loop
                        muted
                        playsInline
                        data-object-fit="cover"
                      >
                        <source
                          src="https://assets-global.website-files.com/65ae37af356fab4845432048/65ae37af356fab48454320ae_BatteryRemoval_Pingpong_001-transcode.mp4"
                          data-wf-ignore="true"
                        />
                        <source
                          src="https://assets-global.website-files.com/65ae37af356fab4845432048/65ae37af356fab48454320ae_BatteryRemoval_Pingpong_001-transcode.webm"
                          data-wf-ignore="true"
                        />
                      </video>
                    </div>
                    <div
                      className="tabs_video w-background-video w-background-video-atom"
                      ref={addToVideoRefs}
                    >
                      <video
                        id="video-3"
                        autoPlay
                        loop
                        muted
                        playsInline
                        data-object-fit="cover"
                      >
                        <source
                          src="https://assets-global.website-files.com/65ae37af356fab4845432048/65be104f9aba74d774b7f4a3_Yoda-Exploded-50-transcode.mp4"
                          data-wf-ignore="true"
                        />
                        <source
                          src="https://assets-global.website-files.com/65ae37af356fab4845432048/65be104f9aba74d774b7f4a3_Yoda-Exploded-50-transcode.webm"
                          data-wf-ignore="true"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ height: "50vh" }}></div>
    </div>
  );
};

export default App;
