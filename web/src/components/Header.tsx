import { Plus } from "phosphor-react";

import Logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={Logo} alt="Logo" />

      <button
        type="button"
        className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex flex-row items-center gap-3 hover:border-violet-300"
      >
        <Plus size={24} className="text-violet-500" />
        Novo hábito
      </button>
    </div>
  );
};
