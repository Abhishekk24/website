"use client"
import Card from "@/components/Card";
import CustomBtn from "@/components/CustomBtn";
import DownloadNow from "@/components/DownloadNow";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Newsletter from "@/components/Newsletter";
import Reviews from "@/components/Reviews";
import Socials from "@/components/Socials";
import SubscribePage from "@/components/Subcribe";
import WinSection from "@/components/WinSection";
import WinnersPage from "@/components/winners";
import Cuttingedge from "@/components/Cuttingedge";
import SuccessRoad from "@/components/SuccessRoad";
import Partners from "@/components/Partners";
import { cardDetails } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const banner = {
    backgroundImage:
      "radial-gradient(circle, #B7990D59 50%, #050B21B2, #050B21B2)",
    width: "95vw",
  };

  const gradientBackground = `
    linear-gradient(
      to bottom, 
      #DD4D76 0%, 
      #8A277D 10%, 
      #761E7F 20%, 
      #611480 30%, 
      #380184 40%, 
      #B969FF 50%, 
      #669CFF 60%, 
      #5DFF39 70%, 
      #E0F7A3 80%, 
      #11D9C5 90%
    )
  `;

  const greengradient = `
    linear-gradient(
      to bottom, 
      #E7E7EA 50%, 
      #11D9C5 100%
    )
  `;

  return (
    <>
      <main className='flex flex-col  items-center justify-between'>
      <a href="https://docs.google.com/forms/d/1YJ6xhno0EyqSb6vZx0AisFv4D05ocx4Ufb9QKe1X3as/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer">
      <div
            style={banner}
            className='py-3 text-xs  md:text-base  text-gray-300 text-center'
          >
            Join the movement and earn rewards,&nbsp;
            <span
              className='text-bold'
              style={{
                border: "none",
                textDecoration: "none",
                position: "relative",
                color: "#11D9C5",
              }}
            >
              sign up here &nbsp;&#10138;
            </span>
          </div>
        </a>
      </main>
      <main className='flex min-h-screen bg-primary flex-col items-center justify-between'>
        <Hero />
        <Mission />
        <div className='justify-center gap-[0.5%] w-full flex flex-col lg:flex-row flex-wrap p-1' style={{
        background: gradientBackground,
      }}>
          {cardDetails.map((item, index) => {
            return <Card key={index.toString()} item={item} />;
          })}
        </div>
        <Reviews />
        <WinSection />
        <section className="w-full h-[600px] flex items-center justify-center "
        style={{
          background: greengradient,
        }}
>
          <div className="flex flex-col items-center space-y-[5vh] justify-center mx-auto p-4">
            <h2 className="text-primary font-semibold text-2xl md:text-[52px] lg:text-[52px] leading-none tracking-wider text-center">
              ÐWi-Fi Revolutionizing Wireless Access
            </h2>
            <p className="text-primary text-lg lg:text-2xl md:text-2xl leading-tight text-center lg:pt-10">
              Share unused bandwidth turns each participant
              <br />
              into both a provider and consumer.
            </p>
            <CustomBtn
              title="Coming Soon"
              link="#"
              width="w-[140px] bg-[#040A2080] text-white lg:w-[191px]"
              disabled
            />
          </div>
        </section>

        <WinnersPage/>
        <DownloadNow />
        {/* <Socials /> */}
        {/* <SubscribePage/> */}
        <Newsletter />
        <Cuttingedge />
        <SuccessRoad />
        <Partners />

        <div className="flex flex-col justify-center items-center mt-40 mb-20">
        <div className='text-lg lg:text-3xl'>Join Our Mission. Join the Future.</div>
        <div className='flex gap-20 my-20'>
        <Link
              target="_blank"
              className="hover:scale-110 duration-150 pr-10 pl-6"
              href={"https://discordapp.com/invite/5uaFhNpRF6"}
              style={{border: '1px solid #11D9C5', display: 'flex', borderRadius:'8px'}}
            >
              <img
                src={"/images/discord_green.svg"}
                alt="discord"
              />
              <div className="mt-4">Discord</div>
            </Link>

            <Link
              target="_blank"
              className="hover:scale-110 duration-150 pr-10 pl-8"
              href={"https://t.me/NetSepio?boost "}
              style={{border: '1px solid #11D9C5', display: 'flex', borderRadius:'8px', gap:'8px'}}
            >
              <img
                src={"/images/tele_green.svg"}
                alt="telegram"
                className="w-10"
              />
              <div className="mt-4">Telegram</div>
            </Link>
        </div>
      </div>

        <div className="min-h-screen mx-auto py-20 w-full flex items-center justify-center bg-cover bg-[url('/revolution.png')]">
  <div className="lg:w-1/2 md:w-1/2 background-gradient lg:py-10 md:py-10 py-5 rounded-3xl mx-4 lg:mx-0 md:mx-0">
    <div className="flex flex-col items-center justify-start lg:h-full mt-10 lg:ml-0 lg:mr-0 md:ml-0 md:mr-0 ml-4 mr-4 lg:mb-0 mb-2">
      <h1
        className="lg:text-4xl md:text-3xl text-2xl text-gray-300 mb-10 text-center lg:w-2/3 md:w-2/3"
        style={{ lineHeight: '1.2'}}
      >
        Revolutionizing Internet Access Through the Power of DePIN
      </h1>
      <p
        className="lg:text-lg md:text-lg text-lg text-gray-300 mb-8 text-center"
      >
        Subscribe for insights from our DePIN experts.
      </p>
      <div
        className="text-black py-2 px-14 rounded-full bg-white text-lg"
        // style={{backgroundImage: 'linear-gradient(#FFFFFF00, #0099FF)'}}
      >
        <Link href="https://netsepio.substack.com/" target="_blank" rel="noopener noreferrer">
          Subscribe
        </Link>
      </div>
    </div>
  </div>
</div>

      </main>
    </>
  );
}
