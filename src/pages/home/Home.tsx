import ImageManaus from "../../assets/manaus.jpg";

export function Home() {
  return (
    <div className="font-branding-sf ">
      <h1 className="text-green-800 font-bold uppercase border-b-4">
        Descubra Manaus
      </h1>
      <div
        className="p-8 mt-4 md:p-16 bg-cover bg-no-repeat w-full h-screen flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${ImageManaus})` }}
      >
        <p className=" text-white bg-black bg-opacity-70 p-2 rounded">
          Uma selva de pedras em meio a Floresta Amazônica. Manaus é capital do
          Estado do Amazonas, e a principal porta de entrada para os
          aventureiros que desejam desbravar a maior mata tropical do mundo. A
          cidade possui um cardápio gastronômico de sabor inigualável. O
          município tem uma fauna e flora diversificada e com uma gama de
          espécies raras. Remota dos tempos áureos da borracha, a capital possui
          construções importantes, como: o majestoso Teatro Amazonas e o
          imponente Mercado Municipal Adolpho Lisboa.
        </p>
      </div>
    </div>
  );
}
