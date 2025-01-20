import React from "react";
import Image from "next/image";

const Sec_Hero = () => {
  return (
    <>
      <div className="-mt-48 px-4 sm:px-6 lg:px-8">
        <div className="subText text-center md:text-left">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
            Browse The Range
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="imgArea mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="imgOne text-center">
            <Image
              src="/dinningroom.jpeg"
              width={300}
              height={300}
              alt="Dinning Area"
              className="mx-auto"
            />
            <h6 className="mt-4 mb-4 text-xl">Dining</h6>
          </div>

          <div className="imgTwo text-center">
            <Image
              src="/livinRoom.jpeg"
              width={300}
              height={300}
              alt="Living Room Area"
              className="mx-auto"
            />
            <h6 className="mt-4 mb-4 text-xl">Living</h6>
          </div>

          <div className="imgThree text-center">
            <Image
              src="/bedroom.jpeg"
              width={300}
              height={300}
              alt="Bedroom Area"
              className="mx-auto"
            />
            <h6 className="mt-4 mb-4 text-xl">Bedroom</h6>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sec_Hero;
