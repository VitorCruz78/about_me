'use client';

import Image from "next/image";
import Me from "../assets/image_profile.png"
import Link from "next/link";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

interface IProjects {
  title: string
  description: string
  link: string
  tag: string | string[]
}

export default function Home() {
  const projectsData: IProjects[] = [
    { title: "ProgMy", description: "Apenas um site desenvolvido em grupo para a faculdade", link: "https://prog-my.vercel.app", tag: "Front-end" },
    { title: "Gympass_api", description: "Um projeto focado no desenvolvimento das api's e regras de negócios de um serviço de academia", link: "https://github.com/VitorCruz78/Gympass_api", tag: "Back-end" },
    { title: "Ignite-Call", description: "Foi desenvolvido durante um curso da Rocktseat, é um sistema com foco em agendamentos de horários", link: "https://github.com/VitorCruz78/Ignite-Call", tag: ["F", "B"] },
    { title: "DesignSystem", description: "Desenvolvido a base de um design-system com a lib Storybook e TurboRepo para otimizar o deploy", link: "https://github.com/VitorCruz78/DesignSystem", tag: "Front-end" },
    { title: "MiniBlog", description: "Um miniblog feito em ReactJS e firebase", link: "https://github.com/VitorCruz78/MiniBlog", tag: ["F", "B"] },
    { title: "Hello World", description: "Esse dispensa comentários. (Foi só para completar 6 caixinhas e deixar o layout bacana)", link: "https://github.com/VitorCruz78/Ola-Mundo", tag: [] },
  ]
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <div className="min-h-screen flex flex-col items-center justify-start lg:justify-center">
      <aside
        className={`
          overflow-hidden transition-all ease-in-out duration-100 z-50 bg-defaultColor
          fixed right-0 top-0 ${showMenu ? 'w-[50vw] xl:w-[32rem] border-l border-r-defaultBorderColor px-6 py-12' : 'w-0'} h-screen shadow-xl
          flex flex-col items-start justify-start gap-6
        `}
      >
        <X size={42} className="text-defaultTextColor cursor-pointer hover:opacity-50 transition-all ease-in-out duration-300" onClick={() => setShowMenu(false)} />
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
              width={200}
              height={200}
              quality={100}
              className="rounded-full"
            />
            <p className="absolute top-0 right-0 cursor-pointer hover:opacity-50 transition-all ease-in-out duration-300">
              {!showMenu && <List size={42} className="text-defaultTextColor" onClick={() => setShowMenu(true)} />}
            </p>
          </div>
          <h1 className="text-sm text-defaultTextColor w-full md:w-[32rem] lg:w-[38rem] text-center leading-[1.6rem] tracking-wide">
            Oi, meu nome é Vitor Luiz, tenho 19 anos e trabalho como desenvolvedor há 2 anos. Curto tanto Front-end quanto Back-end, com um foco especial em JavaScript. Tenho experiência com HTML5, CSS3, Tailwind CSS, ReactJS, React Native, NextJS, NodeJS, ExpressJS, Prisma ORM e TypeScript.
            Também estou cursando Engenharia de Software. Dá uma conferida nos meus <Link href={'https://github.com/VitorCruz78?tab=repositories'} target="_blank" className="text-defaultTextLink font-medium opacity-90 hover:opacity-50">projetos</Link> aí embaixo!
          </h1>
          <div className="w-auto md:max-w-[40rem] lg:max-w-[60rem] flex flex-col md:flex md:flex-row md:flex-wrap items-center justify-center gap-6">
            {
              projectsData.map(projects => (
                <div
                  key={projects.title}
                  className="
                    w-80 md:w-60 h-60 border border-defaultBorderColor p-2 rounded-md flex flex-col items-start justify-start gap-6 relative
                    transition-all ease-in-out duration-300 hover:opacity-90
                  "
                >
                  <div className="w-full flex flex-row items-start justify-between">
                    <h2 className="text-lg text-defaultTextColor font-medium">{projects.title}</h2>
                    {
                      typeof projects.tag === "object" ?
                        <div className="flex flex-row items-center gap-2">
                          {
                            projects.tag.map(tags => (
                              <div key={tags} className={`w-10 p-2 rounded-md shadow-xl border border-defaultBorderColor ${tags === "F" ? "bg-defaultBlueColor" : "bg-defaultColor"}`}>
                                <p className="text-center text-xs text-defaultTextColor font-bold">{tags}</p>
                              </div>
                            ))
                          }
                        </div>
                        :
                        <div className={`w-20 p-2 rounded-md shadow-xl border border-defaultBorderColor ${projects.tag === "Front-end" ? "bg-defaultBlueColor" : "bg-defaultColor"}`}>
                          <p className="text-center text-xs text-defaultTextColor font-bold">{projects.tag}</p>
                        </div>
                    }
                  </div>
                  <p className="text-base text-defaultTextColor text-left">{projects.description}</p>
                  <Link href={projects.link} target="_blank" className="absolute left-2 bottom-2 text-defaultTextLink font-medium opacity-90 hover:opacity-50">Acessa aqui</Link>
                </div>
              ))
            }
          </div>
        </main>
      </div>
    </div>
  );
}
