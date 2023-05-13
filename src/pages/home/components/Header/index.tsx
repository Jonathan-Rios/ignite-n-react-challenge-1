import { Container } from "./styles";
import Image from "next/image";

import logoImg from "@/assets/logo.svg";
import { PlusCircle } from "phosphor-react";
import { useState } from "react";

interface HeaderProps {
  addItem: (description: string) => void;
}

export function Header({ addItem }: HeaderProps) {
  const [description, setDescription] = useState("");

  function handleClick() {
    addItem(description);
    setDescription("");
  }

  return (
    <Container>
      <Image src={logoImg} alt="logo da todo list" />

      <div>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleClick}>
          Criar <PlusCircle />
        </button>
      </div>
    </Container>
  );
}
