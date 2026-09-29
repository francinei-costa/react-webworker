# React + TypeScript + Vite

Esta estrutura inicial oferece uma configuração mínima para usar React com Vite, incluindo atualização automática durante o desenvolvimento (HMR) e algumas regras do Oxlint.

# Chronos Pomodoro

Aplicação web de produtividade inspirada na Técnica Pomodoro. O projeto organiza períodos de foco e descanso em ciclos, mantém um histórico local das tarefas e permite configurar a duração de cada tipo de período. O cronômetro é executado em um Web Worker para não depender do ciclo de renderização da interface.

## Estado atual

A tela inicial exibe o contador regressivo. O formulário de criação e interrupção de tarefas (`MainForm`) está temporariamente desativado em `src/pages/Home/index.tsx`; por isso, na versão atual não é possível iniciar novas sessões pela interface. As páginas de histórico e configurações estão disponíveis, mas dependem de tarefas previamente existentes no estado local.

## Funcionalidades implementadas

- Ciclos alternados de foco e descanso: períodos ímpares são de foco, os pares são de descanso curto e o ciclo 8 é de descanso longo. Depois dele, a sequência recomeça no ciclo 1.
- Durações padrão de 25 minutos para foco, 5 para descanso curto e 15 para descanso longo. Os valores podem ser alterados nas configurações (dentro dos limites definidos pela aplicação).
- Histórico de tarefas com ordenação por tarefa, duração e data, além de opção para apagar os dados.
- Tema claro ou escuro, com preferência salva localmente.
- Notificações e alerta sonoro ao concluir uma tarefa.
- Estado e histórico armazenados no `localStorage` do navegador. Uma sessão ativa não é retomada ao recarregar a página.

## Tecnologias

- React 19 e TypeScript
- Vite 8
- React Router
- Web Worker para o cronômetro
- `date-fns`, `lucide-react` e `react-toastify`
- Oxlint

## Executar localmente

Requisitos: Node.js e npm.

```bash
npm install
npm run dev
```

O Vite informa no terminal o endereço local para abrir no navegador.

## Comandos disponíveis

```bash
npm run dev      # inicia o servidor de desenvolvimento
npm run build    # verifica os projetos TypeScript e gera a build de produção
npm run preview  # serve localmente a build gerada
npm run lint     # executa o Oxlint
```

## Páginas

- `/`: contador regressivo da página inicial.
- `/history/`: histórico de tarefas e controles de ordenação/limpeza.
- `/settings/`: configuração dos tempos de foco e descanso.
- `/about-pomodoro/`: explicação sobre a técnica e a sequência de ciclos.

## Organização do código

- `src/pages/`: telas da aplicação.
- `src/components/`: componentes reutilizáveis, como contador, formulário, navegação e configurações.
- `src/contexts/TaskContext/`: estado global, ações e reducer das tarefas.
- `src/workers/`: criação e gerenciamento do Web Worker do cronômetro.
- `src/utils/`: formatação de datas e tempos, status e regras dos ciclos.
- `src/styles/`: estilos globais e tema.
