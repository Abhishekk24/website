import React from "react";
import "../styles/Erebrus.css";
import { FadeUp } from "./FadeAnimations";

const Erebrus = () => {
  return (
    <div className="erebrus-container">
      <FadeUp>
        <h1 className="text-6xl  text-center text-white mb-12 font-sans">Erebrus Decentralized VPN</h1>
        <p className="erebrus-text font-sans">
          Private, Secure, and censorship-free internet with <br /> CyreneAI
          integration
        </p>
        <div className="erebrus-content">
          <div className="erebrus-buttons">
            <a
              href="https://play.google.com/store/apps/details?id=com.erebrus.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="erebrus-button erebrus-active-button font-sans">
                Play Store  
              </button>
            </a>
            <a
              href="https://testflight.apple.com/join/BvdARC75"
              target="_blank"
              rel="noreferrer"
            >
              <button className="erebrus-button erebrus-active-button font-sans">
                iOS Test Flight
              </button>
            </a>
            <a 
            href="https://erebrus.io/"
            target="_blank"
            rel="noreferrer"
            >
            <button className="erebrus-button erebrus-disabled-button font-sans" >
              Web App
            </button>
            </a>
          </div>
          <div className="erebrus-image-container">
            <img
              src="/images/Erebrus_Mobile.png"
              alt="Erebrus Mobile"
              className="erebrus-image"
            />
          </div>
        </div>
      </FadeUp>
    </div>
  );
};

export default Erebrus;
