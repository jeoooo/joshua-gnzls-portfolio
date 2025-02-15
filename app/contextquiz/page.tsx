"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Contextquiz = () => {
  return (
    <main className="p-10 flex items-center justify-center mt-16 sm:mt-16 lg:mt-1">
      <section className="w-full max-w-4xl space-y-6 overflow-y-auto">
        <div className="w-full flex flex-col gap-8 overflow-hidden">
          <Link href="/ai-projects">
            <motion.button
              type="button"
              className="group flex items-center"
              whileHover={{
                scale: 1.02,
                originX: 0,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4 group-hover:text-black text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="raleway text-xs font-normal group-hover:text-black text-gray-400">
                Back
              </span>
            </motion.button>
          </Link>
          <div className="title-container flex flex-col gap-5 mt-5">
            <div className="flex justify-between items-center">
              <span className="raleway text-2xl font-semibold">
                Context Quiz Generator
              </span>
              <span className="raleway text-xs text-gray-400 font-normal">
                2023
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="raleway text-xs text-gray-400 font-semibold">
                Trying out stuffs with OpenAI.
              </span>
              <span className="raleway text-xs leading-6">
                I find it interesting to see how and what can AI do nowadays and
                I thought of creating a Context Quiz Generator using Python and
                OpenAI. The idea is to create a quiz generator where you can ask
                questions from your pasted contexts from any article and the AI
                will generate a quiz based on that context. I'm still thinking
                about the features and how it will work but I'm excited to see
                how it will turn out.{" "}
                <span className="font-bold">unfinished</span>
              </span>
            </div>
          </div>
        </div>
        <div className="image-container flex items-center justify-center overflow-hidden bg-gray-50 rounded border">
          <Image
            src="/assets/contextquiz-mockup.png"
            alt="context quiz generator"
            width={600}
            height={600}
            quality={100}
            className="image-me  rounded-lg m-20 mt-10 mb-10"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="image-container flex items-center justify-center overflow-hidden bg-gray-50 rounded border">
          <Image
            src="/assets/contextquiz-mockup2.png"
            alt="context quiz generator"
            width={600}
            height={600}
            quality={100}
            className="image-me  rounded-lg m-20 mt-10 mb-10"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </section>
    </main>
  );
};

export default Contextquiz;
