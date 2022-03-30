import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { Modal } from "./components/Modal";
import { TransactionsProvider } from "./hooks/UseTransaction";

function App() {

  const [NewTransictionModalOpen, setIsNewTransictionModalOpen] = useState<boolean>(false);

  function handleOpenNewTransictionModal(){
    setIsNewTransictionModalOpen(true);
  }

  function handleCloseNewTransictionModal(){
    setIsNewTransictionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransictionModal={handleOpenNewTransictionModal}/>
      <Dashboard />
      <Modal isOpen={NewTransictionModalOpen} onRequestClose={handleCloseNewTransictionModal}></Modal>
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
