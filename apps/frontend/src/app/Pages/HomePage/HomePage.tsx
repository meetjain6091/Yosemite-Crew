"use client";
import React, { useState, ReactNode, FormEvent } from "react";
import Footer from "@/app/Components/Footer/Footer";
import "./HomePage.css";
import { Container } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { IoIosFlash } from "react-icons/io";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

function HomePage() {
  const [isLoggedIn] = useState(false);
  return (
    <>
      <section className="HomeHeroSection">
        <Container>
          <div className="HeroData">
            <div className="LeftHeroDiv">
              <div className="herotext">
                <h1 className="type first">Helping You Help Pets,</h1>
                <h1>
                  <span className="type second">Without the Hassle</span>
                </h1>
              </div>

              <div className="heroPara">
                <div className="paraitem">
                  <p>
                    <Image
                      aria-hidden
                      src="https://d2il6osz49gpup.cloudfront.net/Images/petfootblue.png"
                      alt="petfoot"
                      width={20}
                      height={20}
                    />{" "}
                    Open source, cloud-based system
                  </p>
                </div>
                <div className="paraitem">
                  <p>
                    <Image
                      aria-hidden
                      src="https://d2il6osz49gpup.cloudfront.net/Images/petfootblue.png"
                      alt="petfoot"
                      width={20}
                      height={20}
                    />{" "}
                    Enhance your daily workflow
                  </p>
                </div>
                <div className="paraitem">
                  <p>
                    <Image
                      aria-hidden
                      src="https://d2il6osz49gpup.cloudfront.net/Images/petfootblue.png"
                      alt="petfoot"
                      width={20}
                      height={20}
                    />{" "}
                    Easy-to-use, time-saving features
                  </p>
                </div>
                <div className="paraitem">
                  <p>
                    <Image
                      aria-hidden
                      src="https://d2il6osz49gpup.cloudfront.net/Images/petfootblue.png"
                      alt="petfoot"
                      width={20}
                      height={20}
                    />{" "}
                    Access data anytime, anywhere
                  </p>
                </div>
              </div>

              <div className="HeroBtn">
                <FillBtn
                  icon={<IoIosFlash />}
                  text=" Book a Demo"
                  href="/signup"
                />
                <UnFillBtn
                  icon={<MdOutlineAccessTimeFilled />}
                  text="Learn more"
                  href="/bookDemo"
                />
              </div>
            </div>
            <div className="RytHeroDiv">
              <Image
                aria-hidden
                src="https://d2il6osz49gpup.cloudfront.net/Images/HeroBg.png"
                alt="Hero"
                width={733}
                height={564}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="PracticedSection">
        <Container>
          <div className="PracticedData">
            <div className="PractHeading">
              <h2>
                Everything You Need <br /> to Run Your Practice
              </h2>
            </div>
            <div className="Practice_Box_Data">
              <BoxPract
                Bpimg="https://d2il6osz49gpup.cloudfront.net/Images/pract1.png"
                BpTxt1="Appointment"
                BpTxt2="Scheduling"
                BpPara="Easily manage bookings, cancellations, and reminders to minimize no-shows."
              />
              <BoxPract
                Bpimg="https://d2il6osz49gpup.cloudfront.net/Images/pract2.png"
                BpTxt1="Medical Records"
                BpTxt2="Management"
                BpPara="Organize animal data, treatment history, and prescriptions in one secure platform."
              />
              <BoxPract
                Bpimg="https://d2il6osz49gpup.cloudfront.net/Images/pract3.png"
                BpTxt1="Client"
                BpTxt2="Communication"
                BpPara="Send automated reminders, updates, and follow-up messages via email or text."
              />
              <BoxPract
                Bpimg="https://d2il6osz49gpup.cloudfront.net/Images/pract4.png"
                BpTxt1="Billing &"
                BpTxt2="Payments"
                BpPara="Generate invoices, process payments, and track financials with ease."
              />
              <BoxPract
                Bpimg="https://d2il6osz49gpup.cloudfront.net/Images/pract5.png"
                BpTxt1="Invoicing"
                BpTxt2="Management"
                BpPara="Automate finance with invoicing, quick payments, downpayments, split payments, and refunds."
              />
              <BoxPract
                Bpimg="https://d2il6osz49gpup.cloudfront.net/Images/pract6.png"
                BpTxt1="Pet Parent"
                BpTxt2="App"
                BpPara="Give clients a vet-in-your-pocket with a dedicated app for reminders, medical records, and invoices—all in one."
              />
              <BoxPract
                Bpimg="https://d2il6osz49gpup.cloudfront.net/Images/pract7.png"
                BpTxt1="Report &"
                BpTxt2="Analytics"
                BpPara="Monitor practice performance with detailed insights into appointments, revenue, and client retention."
              />
              <BoxPract
                Bpimg="https://d2il6osz49gpup.cloudfront.net/Images/pract8.png"
                BpTxt1="Inventory"
                BpTxt2="Management"
                BpPara="Keep track of stock levels, place orders, and receive notifications when supplies are low."
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="FocusSection">
        <Container>
          <div className="FocusData">
            <div className="FocusTexted">
              <h2>Focus on Care, Not Admin</h2>
              <p>
                The easy-to-use, cloud-based software that simplifies practice
                management and elevates animal care.
              </p>
            </div>
            <div className="Focus_data">
              <FocusCard
                Focimg="https://d2il6osz49gpup.cloudfront.net/Images/focus1.png"
                focname="API-Driven"
                focpara="Seamlessly integrate with external tools and systems, offering flexible data sharing and connectivity."
              />
              <FocusCard
                Focimg="https://d2il6osz49gpup.cloudfront.net/Images/focus2.png"
                focname="Own Your Software"
                focpara="With Yosemite Crew’s GPL license, you own the software, SaaS simplicity with Open Source freedom and no vendor lock-in."
              />
              <FocusCard
                Focimg="https://d2il6osz49gpup.cloudfront.net/Images/focus3.png"
                focname="Automated Workflows"
                focpara="Automate invoicing, appointment scheduling, and reminders, freeing up your team to focus on what matters most."
              />
              <FocusCard
                Focimg="https://d2il6osz49gpup.cloudfront.net/Images/focus4.png"
                focname="Secure & Compliant"
                focpara="Built with GDPR, SOC2, and ISO 27001 compliance, ensuring the highest standards of security and trust."
              />
              <FocusCard
                Focimg="https://d2il6osz49gpup.cloudfront.net/Images/focus5.png"
                focname="Scalable"
                focpara="Grow with confidence, whether you're a small clinic or a multi-location practice, our software evolves with your needs."
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="WhoCareSection">
        <Container>
          <div className="whocareData">
            <div className="lftcare">
              <h2>
                Caring for the Vets <br /> Who Care for Pets
              </h2>
              <p>
                We prioritize your data security and compliance with
                industry-leading standards. Our platform is fully compliant
                with:
              </p>
            </div>
            <div className="rytcare">
              <p>Our platform is fully compliant with:</p>
              <div className="carelog">
                <Image
                  aria-hidden
                  src="https://d2il6osz49gpup.cloudfront.net/Images/cllog1.png"
                  alt="cllog1"
                  width={109}
                  height={112}
                />
                <Image
                  aria-hidden
                  src="https://d2il6osz49gpup.cloudfront.net/Images/ftlog2-2.png"
                  alt="cllog2"
                  width={115}
                  height={114}
                />
                <Image
                  aria-hidden
                  src="https://d2il6osz49gpup.cloudfront.net/Images/cllog3.png"
                  alt="cllog3"
                  width={124}
                  height={137}
                />
                <Image
                  aria-hidden
                  src="https://d2il6osz49gpup.cloudfront.net/Images/cllog4.png"
                  alt="cllog4"
                  width={175}
                  height={42}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="BetterCareSec">
  <Container>
    <div className="BettercareBox">
      <div className="lftbetter">
        <div className="betInner">
          <div className="careText">
            <h2>
              Better Care is just a <br /> click away
            </h2>
            <p>
              Join hundreds of veterinary clinics already enhancing
              patient care and streamlining their workflow.
            </p>
          </div>
          {/* CORRECTED: Swapped to the correct button style */}
          <FillBtn
            icon={<MdOutlineAccessTimeFilled />}
            text="Book a Demo"
            href="/bookDemo"
          />
        </div>
      </div>
      <div className="rytbetter">
        <Image
          aria-hidden
          src={`https://d2il6osz49gpup.cloudfront.net/Homepage/betterimg.png`}
          alt="betterimg"
          width={507}
          height={433}
        />
      </div>
    </div>
  </Container>
</section>

      <Footer />
    </>
  );
}

type ButtonProps = {
  icon: ReactNode;
  text: string;
  href: string;
  onClick?: (e: FormEvent<Element>) => void;
  style?: React.CSSProperties;
};

export function FillBtn({ icon, text, onClick, href, style }: ButtonProps) {
  return (
    <Link
      href={href}
      className="Fillbtn"
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick(e);
        }
      }}
      style={style}
    >
      {icon} {text}
    </Link>
  );
}

export function UnFillBtn({ icon, text, href, onClick, style }: ButtonProps) {
  return (
    <Link className="UnFillbtn" href={href} onClick={onClick} style={style}>
      {icon} {text}
    </Link>
  );
}

interface BoxPractProps {
  Bpimg: string;
  BpTxt1: string;
  BpTxt2: string;
  BpPara: string;
}

const BoxPract = ({ Bpimg, BpTxt1, BpTxt2, BpPara }: BoxPractProps) => {
  return (
    <div className="PracBox">
      <Image aria-hidden src={Bpimg} alt="Hero" width={64} height={64} />
      <h4>
        {BpTxt1} <br /> {BpTxt2}
      </h4>
      <p>{BpPara}</p>
    </div>
  );
};

// FocusCardProps
interface FocusCardProps {
  Focimg: string;
  focname: string;
  focpara: string;
}

const FocusCard: React.FC<FocusCardProps> = ({ Focimg, focname, focpara }) => {
  return (
    <div className="FocusItem">
      <Image aria-hidden src={Focimg} alt="Hero" width={100} height={100} />
      <div className="focusText">
        <h4>{focname}</h4>
        <p>{focpara}</p>
      </div>
    </div>
  );
};

export default HomePage;