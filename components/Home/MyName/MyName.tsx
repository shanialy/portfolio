import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { useRouter } from "next/router";
export default function MyName(props: { finishedLoading: boolean }) {
  const router = useRouter();
  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.4,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.4,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-AAsecondary font-mono"
      >
        Hi, my name is
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.5,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.5,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Ahsan Ali.
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.6,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.6,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        I make ideas & things alive.
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.7,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.7,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        {"I'm a passionate and skilled software engineer with expertise in"}
        <span className="text-AAsecondary"> Node.js</span>,
        <span className="text-AAsecondary"> Next.js</span>,
        <span className="text-AAsecondary"> AWS services</span>,
        <span className="text-AAsecondary"> Serverless computing</span>. My
        journey in the world of technology has been driven by a deep curiosity
        and a relentless pursuit of excellence.{" "}
        <span className="text-AAsecondary"> Node.js</span>: As a Node.js
        developer, {"I've"} had the opportunity to work on a wide range of
        projects, from creating high-performance server applications to building
        real-time web applications. I leverage Node.js to deliver efficient and
        scalable solutions that meet the demands of modern web development.{" "}
        <span className="text-AAsecondary"> Next.js</span>: My proficiency in
        Next.js allows me to craft robust and interactive web applications with
        ease. With Next.js, I can build server-rendered React applications that
        offer lightning-fast page loads, SEO-friendly features, and an
        exceptional user experience.{" "}
        <span className="text-AAsecondary"> AWS services</span>: I have
        extensive experience working with Amazon Web Services (AWS), the leading
        cloud computing platform. From EC2 instances to Lambda functions, from
        S3 storage to DynamoDB databases,{" "}
        {
          "I've harnessed the power of AWS services to create reliable and highly available cloud solutions."
        }
        <span className="text-AAsecondary"> Serverless computing</span>:
        {
          "Serverless computing is a paradigm that I've fully embraced. By designing serverless architectures, I've helped organizations reduce operational overhead, enhance scalability, and optimize costs. My serverless expertise covers AWS Lambda, API Gateway, and other serverless components. My commitment to delivering top-notch solutions is unwavering. I thrive in collaborative environments, working closely with cross-functional teams to turn ideas into reality. Whether it's building microservices, optimizing database performance, or architecting serverless applications, I'm always up for the challenge. I'm excited to leverage my skills to drive innovation and help organizations achieve their technological goals. Let's connect and explore how I can contribute to your next project or initiative."
        }
        {/* digital experiences. My current area of focus is in the <span className="text-AAsecondary">web3 domain</span>,
        where I actively engage in developing <br className="2xl:block hidden"/>
        and designing immersive <span className="text-AAsecondary">web3 applications</span>. This involves working with{" "}
        <span className="text-AAsecondary">Smart Contracts</span>  on the{" "}
        <span className="text-AAsecondary">Blockchain</span>.  */}
        {/* <br className="2xl:block hidden" />creating and deploying them, as well as implementing the
        front-end components to enable seamless user interactions. */}
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.8,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.8,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="mt-12"
      >
        <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
            Check out my resume!
          </button>
        </a>
      </motion.div>
    </div>
  );
}
