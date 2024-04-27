import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const genericHamburgerLine = `h-1 w-8 my-2 rounded-full bg-black transition ease transform duration-300`;

  return (
    <nav className="flex sm:flex-row h-16 pt-6 justify-between items-center w-full px-5 sm:mx-auto max-w-2xl lg:max-w-5xl">
      <div className="sm:flex rounded-full bg-white/90 px-3 text-sm font-medium shadow-lg text-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur bg-gradient-to-r from-[#fff1eb] to-[#ace0f9]">
        <p className="hidden sm:block">
          MAYANK SAHAI{" "}
          <span className="text-5xl align-[-11px] text-black-400">X</span>{" "}
          CODING MOON
        </p>
        <p className="block sm:hidden">
          MS <span className="text-5xl align-[-11px] text-black-400">X</span> CM
        </p>
      </div>

      <ul className="hidden sm:flex rounded-full bg-white/90 px-3 text-sm font-medium shadow-lg text-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
        <li>
          <a href="#" className="block p-4">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="block p-4">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="block p-4">
            Beats
          </a>
        </li>
        <li>
          <a href="#" className="block p-4">
            Art
          </a>
        </li>
      </ul>

      <div className="sm:hidden">
        <nav className="fixed inset-0 z-40 w-full sm:hidden pointer-events-none">
          <button
            className="pointer-events-auto absolute top-6 right-6"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen && "rotate-45 translate-y-3"
              }`}
            ></div>
            <div
              className={`${genericHamburgerLine} ${isOpen && "opacity-0"}`}
            ></div>
            <div
              className={`${genericHamburgerLine} ${
                isOpen && "-rotate-45 -translate-y-3"
              }`}
            ></div>
          </button>
          {isOpen && (
            <ul className="flex flex-col bg-white h-full w-full px-10 py-10 pointer-events-auto">
              <li className="border-b border-gray-300">
                <a href="#" className="block py-5 px-2">
                  Projects
                </a>
              </li>
              <li className="border-b border-gray-300">
                <a href="#" className="block py-5 px-2">
                  Blog
                </a>
              </li>
              <li className="border-b border-gray-300">
                <a href="#" className="block py-5 px-2">
                  Beats
                </a>
              </li>
              <li className="border-b border-gray-300">
                <a href="#" className="block py-5 px-2">
                  Art
                </a>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </nav>
  );
}
