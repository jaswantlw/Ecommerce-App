import React from "react";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox"
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever is a clothing brand inspired
            by timeless style and modern comfort.
            We design versatile pieces that let
            you express yourself—effortlessly,
            every day.
          </p>
          <p>
            Committed to quality and
            sustainability, we craft fashion that
            looks good, feels good, and lasts. At
            Forever, style is made to stay.
          </p>

          <b className="text-gray-800">
            Our Mission
          </b>
          <p className="">
            At Forever, our mission is to craft
            timeless, sustainable clothing that
            empowers self-expression. We focus on
            quality, comfort, and ethical
            practices to create fashion that lasts
            and feels good—inside and out.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title
          text1={"WHY"}
          text2={"CHOOSE US"}
        />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-8 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            At Forever, quality is at the core of
            everything we do. From fabric
            selection to final stitching, each
            piece undergoes strict quality checks
            to ensure durability, comfort, and
            flawless design. We're committed to
            delivering clothing that not only
            looks great but stands the test of
            time.
          </p>
        </div>

        <div className="border px-10 md:px-8 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            At Forever, we prioritize your
            convenience at every step—from
            easy-to-navigate shopping experiences
            to fast, reliable delivery. Our goal
            is to make fashion accessible and
            stress-free, so you can find your
            perfect fit and style anytime,
            anywhere.
          </p>
        </div>

        <div className="border px-10 md:px-8 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            At Forever, we’re dedicated to
            providing exceptional customer service
            that goes beyond expectations. Whether
            you need help with sizing, orders, or
            styling advice, our friendly support
            team is always here to assist
            you—quickly, kindly, and reliably.
            Your satisfaction is our priority.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
