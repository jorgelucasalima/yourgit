import DadosGitHub from "./components/DadosGitHub";
import Header from "./components/Header";
import PesquisarGit from "./components/PesquisarGit";
import { EstiloGlobal } from "./Styles/global";


export default function App() {
  return (
    <>
      <Header/>
      <PesquisarGit />
      <DadosGitHub />
      <EstiloGlobal/>
    </>

  );
}

