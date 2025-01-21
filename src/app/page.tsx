'use client';

import Image from "next/image";
import Me from "../assets/profile.jpeg"
import Link from "next/link";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

interface IProjects {
  title: string
  description: string
  link: string
}

export default function Home() {
  const projectsData: IProjects[] = [
    { title: "ProgMy", description: "Apenas um site desenvolvido em grupo para a faculdade", link: "https://prog-my.vercel.app" },
    { title: "Gympass_api", description: "Um projeto focado no desenvolvimento das api's e regras de negócios de um serviço de academia", link: "https://github.com/VitorCruz78/Gympass_api" },
    { title: "Ignite-Call", description: "Foi desenvolvido durante um curso da Rocktseat, é um sistema com foco em agendamentos de horários", link: "https://github.com/VitorCruz78/Ignite-Call" },
    { title: "DesignSystem", description: "Desenvolvido a base de um design-system com a lib Storybook e TurboRepo para otimizar o deploy", link: "https://github.com/VitorCruz78/DesignSystem" },
    { title: "MiniBlog", description: "Um miniblog feito em ReactJS e firebase", link: "https://github.com/VitorCruz78/MiniBlog" },
    { title: "Hello World", description: "Esse dispensa comentários. (Foi só para completar 6 caixinhas e deixar o layout bacana)", link: "https://github.com/VitorCruz78/Ola-Mundo" },
  ]
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <div className="h-screen flex flex-col items-center justify-start lg:justify-center">
      <aside 
        className={`
          overflow-hidden transition-all ease-in-out duration-100 z-50 bg-defaultColor
          fixed right-0 top-0 ${showMenu ? 'w-[50vw] xl:w-[32rem] border-l border-r-gray-300/50 px-6 py-12' : 'w-0'} h-screen shadow-xl
          flex flex-col items-start justify-start gap-6
        `}
      >
        <X size={42} className="text-textColor cursor-pointer hover:opacity-50 transition-all ease-in-out duration-300" onClick={() => setShowMenu(false)} />
        <Link href={'https://www.linkedin.com/in/vitor-luiz-b65b87233/'} target="_blank" className="text-xl text-[#0E76A8] font-medium hover:opacity-90">Linkedin</Link>
        <Link 
          href={'https://www.instagram.com/vitor.tnh/'} 
          target="_blank" 
          className="text-xl font-medium hover:opacity-90 text-transparent bg-clip-text bg-gradient-to-r from-[#DD2A7B] to-[#8134AF]">
            Instagram
        </Link>
        <Link href={'https://wa.me/47992394425'} target="_blank" className="text-xl text-[#25D366] font-medium hover:opacity-90">Whatsapp</Link>
      </aside>
      <div className="w-screen h-auto p-6">
        <main className="flex flex-col items-center justify-center gap-6">
          <div className="w-full md:max-w-[32rem] lg:max-w-[48rem] flex flex-row items-start justify-center relative">
            <Image
              src={Me}
              alt="Minha foto"
              quality={100}
              className="rounded-full"
            />
            <p className="absolute top-0 right-0 cursor-pointer hover:opacity-50 transition-all ease-in-out duration-300">
              { !showMenu && <List size={42} className="text-textColor" onClick={() => setShowMenu(true)} /> }
            </p>
          </div>
          <h1 className="text-sm text-textColor w-full md:w-[32rem] lg:w-[38rem] text-center leading-[1.6rem] tracking-wide">
            Bem, meu nome é Vitor Luiz, tenho atualmente 19 anos, trabalho a 2 anos como Dev, atuo tanto na parte de Front-end, quanto Back-end com grande foco em JS.
            Tenho experiência com HTML5, CSS3, Tailwind CSS, JS, ReactJS, NextJS, NodeJs, ExpressJs, Prisma ORM e acho que isso é o relevante por aqui.
            Vai ter uns <Link href={'https://github.com/VitorCruz78?tab=repositories'} target="_blank" className="text-textLink font-medium opacity-90 hover:opacity-50">projetos</Link> logo abaixo.
            <br></br>(Ah, e estou cursando engenharia de software também).
          </h1>
          <div className="w-auto md:max-w-[40rem] lg:max-w-[60rem] flex flex-col md:flex md:flex-row md:flex-wrap items-center justify-center gap-6">
            {
              projectsData.map(projects => (
                <div
                  key={projects.title}
                  className="
                    w-80 md:w-60 h-60 border border-gray-300/50 p-2 rounded-md flex flex-col items-start justify-start gap-6 relative
                    hover:brightness-150
                  "
                >
                  <h2 className="text-lg text-textColor font-medium">{projects.title}</h2>
                  <p className="text-base text-textColor text-justify">{projects.description}</p>
                  <Link href={projects.link} target="_blank" className="absolute left-2 bottom-2 text-textLink font-medium opacity-90 hover:opacity-50">Acessa aqui</Link>
                </div>
              ))
            }
          </div>
        </main>
      </div>
    </div>
  );
}
