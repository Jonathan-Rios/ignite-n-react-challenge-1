import { Header } from "./components/Header";
import {
  Container,
  Counters,
  EmptyList,
  ToDoContainer,
  ToDoItem,
} from "./styles";

import Image from "next/image";

import clipboardImg from "@/assets/clipboard.svg";
import { Trash } from "phosphor-react";
import { Checkbox } from "../components/Checkbox";
import { useState } from "react";

interface ToDoItem {
  id: number;
  description: string;
  completed: boolean;
}

export default function Home() {
  const [toDoList, setToDoList] = useState<ToDoItem[]>([]);

  function handleAddToDoItem(description: string) {
    if (description.trim() === "") {
      return;
    }

    const newToDoItem = {
      id: new Date().getTime(),
      description,
      completed: false,
    };

    setToDoList((prev) => [...prev, newToDoItem]);
  }

  function handleCompleteTask(selectedId: number, checked: boolean) {
    setToDoList((prev) =>
      prev.map((item) => {
        if (item.id === selectedId) {
          return {
            ...item,
            completed: checked,
          };
        }

        return item;
      })
    );
  }

  function handleRemoveTask(selectedId: number) {
    setToDoList((prev) => prev.filter((item) => item.id !== selectedId));
  }

  function getCompleted() {
    const completed = toDoList.filter((item) => item.completed === true).length;
    const numberOfTasks = toDoList.length;

    return `${completed} de ${numberOfTasks}`;
  }

  return (
    <Container>
      <Header addItem={handleAddToDoItem} />

      <ToDoContainer>
        <div>
          <Counters type="created">
            Tarefas criadas <span>{toDoList.length}</span>
          </Counters>

          <Counters type="completed">
            Concluídas <span>{getCompleted()}</span>
          </Counters>
        </div>

        {toDoList?.length ? (
          <section>
            {toDoList.map((item) => (
              <ToDoItem
                key={item.id}
                status={item.completed ? "completed" : ""}
              >
                <Checkbox
                  checked={item.completed}
                  onChange={(checked) => handleCompleteTask(item.id, checked)}
                />
                <p>{item.description}</p>
                <button onClick={() => handleRemoveTask(item.id)}>
                  <Trash />
                </button>
              </ToDoItem>
            ))}
          </section>
        ) : (
          <EmptyList>
            <Image
              src={clipboardImg}
              alt="Imagem para representar que está vazio"
            />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
          </EmptyList>
        )}
      </ToDoContainer>
    </Container>
  );
}
