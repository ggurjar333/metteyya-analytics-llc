import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-row space-x-2">
        <div className="bg-slate-700 flex flex-col w-6/12 pt-10">
          <img src="./profile.png" className="h-56 w-52 mx-auto" alt="logo" />
          <div className="mx-auto text-5xl">Metteya Analytics LLC</div>
          <div>
            <h1 className="text-center text-xl mt-3 linear-gradient(to right, #f36aff, #ff9600)">
              Web3,development,marketing & branding agency
            </h1>
          </div>
          <div className="w-10/12 px-auto mx-auto overflow-y-auto h-64">
            <p className="">
              Unleash Web 3: Revolutionizing the Internet Landscape
              <br />
              <br />
              Web 3 is the future, transforming how we navigate the online
              world. With enhanced security, decentralization, and
              user-friendliness, it's a complete game-changer.
              <br />
              <br />
              At our cutting-edge company, we empower businesses for success in
              this new era. Enhance models, establish competitive brands, and
              express your unique agenda. Let us reshape how you leverage the
              internet.
              <br />
              <br />
              Our process starts with understanding your business concept. We
              assess feasibility and explore diverse strategies to reach desired
              outcomes. Our experts offer insightful guidance to maximize
              benefits.
              <br />
              <br />
              With human expertise and AI precision, we drive efficiency and
              cost-effectiveness. Experience blockchain services, business
              development, branding, design, video production, and more.
              <br />
              <br />
              Exploring Multiple Pathways: Our expert team carefully examines
              various strategies to help you achieve the desired result,
              offering insightful guidance and maximizing the benefits to your
              company.
              <br />
              <br />
              Exploring Multiple Pathways: Our expert team carefully examines
              various strategies to help you achieve the desired result,
              offering insightful guidance and maximizing the benefits to your
              company.
            </p>
            <div>
              <div className="h-100% block mx-auto bg-no-repeat bg-center bg-[url('./arrowdown.png')]"></div>
            </div>
          </div>
          <img src="./arrowdown.png" className="h-5 w-6 mx-auto mt-3" alt="" />

          <div className="flex flex-row space-x-8 mx-auto mt-8">
            <div className="text-center ">
              <p className="text-xl">70+</p>
              <p className="mt-2 text-lg">CAMPAIGNS</p>
            </div>
            <div className="text-center ">
              <p className="text-xl">100+</p>
              <p className="mt-2 text-lg">CLIENTS</p>
            </div>
            <div className="text-center ">
              <p className="text-xl">225+</p>
              <p className="mt-2 text-lg">PROJECTS</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-32 ">
          <div className="flex flex-col  my-auto ">
            <div className="flex flex-row space-x-3 w-80 ml-64 ">
              <h3 className="text-lg">Digital Marketing Agency of the Year!</h3>
              <img className="h-20 w-24" src="./GlobalAwards.jpg" alt="" />
            </div>
            <div className="flex flex-row space-x-3 w-80 ml-64">
              <h3 className="text-lg">Top Social Media Marketing Agency!</h3>
              <img className="h-20 w-24" src="./SocialMedia.png" alt="" />
            </div>
          </div>
          <button className="w-32 mb-10 ml-64 p-6 rounded-lg font-extralight  my-auto  bg-purple-400">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
