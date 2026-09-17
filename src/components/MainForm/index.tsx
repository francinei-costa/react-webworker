import { DefaultInput } from "./../DefaultInput/index";
import { DefaultButton } from "./../DefaultButton/index";
import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "./../Cycles/index";

export function MainForm() {
  return (
    <form action="" className="form">
      <div className="formRow">
        <DefaultInput id="meuInput" label="task" type="text" />
      </div>
      <div className="formRow">
        <p>escreva sua tarefa aqui</p>
      </div>
      <div className="formRow">
        <Cycles />
      </div>
      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
