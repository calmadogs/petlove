import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Check, MapPin } from "lucide-react";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import Image from "next/image";

export function About() {
  return (
    <section className="bg-[#fdf6ec] py-16">
      <div className="container  px-4 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative"
            data-aos="fade-up-right"
            data-aos-delat="300"
          >
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt={"foto do cachorro"}
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={about2Img}
                alt={"foto do cachorro"}
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div
            className="space-y-6 mt-10"
            data-aos="fade-up-left"
            data-aos-delat="300"
          >
            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit nobis quis a dignissimos sunt corrupti assumenda eos
              cumque nesciunt fugit voluptate molestias corporis ad nostrum ex,
              cupiditate at doloremque reiciendis.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                aberto desde 2006
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinarios{" "}
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade e nossa prioridade
              </li>
            </ul>

            <div className="flex items-center gap-2">
              <a
                target="_blank"
                href={`https://wa.me/5561991124457?text=Olá vim pelo site e gostaria de mais informações`}
                className="bg-[#e84c3d] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                contato via whatsApp
              </a>
              <a
                href="#"
                className="text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-black" />
                Endereço da loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
