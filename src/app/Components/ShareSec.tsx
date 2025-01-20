export default function ShareSec() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="font-poppins text-3xl font-bold text-gray-900">
          Share your setup with{" "}
          <span className="text-[#b88e2F]">#FuniroFurniture</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 md:mx-12">
        <div
          className="w-[451px] h-[312px] sm:h-[250px] md:h-[312px] bg-cover bg-center"
          style={{ backgroundImage: "url('/image-1.png')" }}
        ></div>

        <div
          className="w-[200] h-[240px] sm:h-[250px] md:h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/image-2.png')" }}
        ></div>

        <div
          className="w-[344] h-[242px] sm:h-[250px] md:h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/image-3.png')" }}
        ></div>

        <div
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/image-4.png')" }}
        ></div>

        <div
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/image-5.png')" }}
        ></div>

        <div
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/image-6.png')" }}
        ></div>

        <div
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/image-7.png')" }}
        ></div>

        <div
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/image-8.png')" }}
        ></div>
      </div>
    </section>
  );
}
