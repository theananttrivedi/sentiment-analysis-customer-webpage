import React from "react";
import FadeInText from "./FadeInText";

function IndexPage() {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <FadeInText>
          <p className="text-black text-center tracking-tight font-bold text-4xl md:text-7xl">
            <span className="bg-gradient-to-br from-amber-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Sentimental.ai
            </span>{" "}
          </p>
        </FadeInText>
        <FadeInText>
          <p className="text-black text-center tracking-tight font-bold text-3xl md:text-4xl">
            <span className="bg-gradient-to-br from-amber-500 via-pink-500 to-violet-600 bg-clip-text text-transparent"></span>{" "}
            A customer review sentiment analyzer
          </p>
        </FadeInText>
      </div>

      <div className="h-48"></div>

      <FadeInText>
        <p className="text-black text-left max-w-3xl mx-auto  tracking-tight font-bold text-4xl md:text-6xl">
          A beautiful designed home page with a visually appealing yet
          simplistic ui
          <span className="bg-gradient-to-br from-amber-500 via-pink-500 to-violet-600 bg-clip-text text-transparent"></span>
        </p>
      </FadeInText>

      <div className="h-48"></div>

      <FadeInText>
        <div className="w-full md:w-1/2 mx-auto">
          <img className="object-cover" src="1.png" />
        </div>
      </FadeInText>

      <div className="h-48"></div>

      <FadeInText>
        <p className="text-black text-left max-w-3xl mx-auto  tracking-tight font-bold text-4xl md:text-6xl">
          <span className="text-green-500">Green</span> colored indicator when
          the review is positive. A happy emoji is a bonus.
          <span className="bg-gradient-to-br from-amber-500 via-pink-500 to-violet-600 bg-clip-text text-transparent"></span>
        </p>
      </FadeInText>

      <div className="h-48"></div>

      <FadeInText>
        <div className="w-full md:w-1/2 mx-auto">
          <img
            className="object-cover"
            src={`${process.env.PUBLIC_URL}/2.png`}
          />
        </div>
      </FadeInText>

      <div className="h-48"></div>

      <FadeInText>
        <p className="text-black text-left max-w-3xl mx-auto  tracking-tight font-bold text-4xl md:text-6xl">
          A <span className="text-red-500">red</span> indicator for when the
          days are not so great. Again don't forget the emoji (guess the
          expression!).
          <span className="bg-gradient-to-br from-amber-500 via-pink-500 to-violet-600 bg-clip-text text-transparent"></span>
        </p>
      </FadeInText>

      <div className="h-48"></div>

      <FadeInText>
        <div className="w-full md:w-1/2 mx-auto">
          <img className="object-cover" src="3.png" />
        </div>
      </FadeInText>

      <div className="h-48"></div>

      <FadeInText>
        <p className="text-black text-left max-w-3xl mx-auto  tracking-tight font-bold text-4xl md:text-6xl">
          Here is a video for the fully immersive experience.
          <span className="bg-gradient-to-br from-amber-500 via-pink-500 to-violet-600 bg-clip-text text-transparent"></span>
        </p>
      </FadeInText>

      <div className="h-48"></div>

      <FadeInText>
        <div className="w-full md:w-1/2 mx-auto">
          <video
            className="object-cover"
            controls
            autoPlay
            src="Sentimentalai.mp4"
          />
        </div>
      </FadeInText>

      <div className="h-48"></div>

      <FadeInText>
        <p className="text-black text-center tracking-tight font-bold text-4xl md:text-6xl">
          <span className="bg-gradient-to-br from-amber-500 via-pink-500 to-violet-600 bg-clip-text text-transparent"></span>
        </p>
      </FadeInText>

      <FadeInText>
        <p className="text-black text-center tracking-tight font-bold text-4xl md:text-6xl">
          <span className="bg-gradient-to-br from-amber-500 via-pink-500 to-violet-600 bg-clip-text text-transparent"></span>
        </p>
      </FadeInText>

      <FadeInText>
        <p className="text-black text-center tracking-tight font-bold text-4xl md:text-6xl">
          <span className="bg-gradient-to-br from-amber-500 via-pink-500 to-violet-600 bg-clip-text text-transparent"></span>
        </p>
      </FadeInText>
    </div>
  );
}

export default IndexPage;
