import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PlaygroundProvider } from "./Providers/PlaygroundProvider";
import { HomeScreen } from "./screens/HomeScreen";
import { PlaygroundScreen } from "./screens/PlaygroundScreen";
import { ModalProvider } from "./Providers/ModalProvider";
import { Modal } from "./Providers/Modals/Modal";




function App() {
  return (
    <PlaygroundProvider>
     <ModalProvider>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/playground/:fileId/:folderId" element={<PlaygroundScreen />} />
    </Routes>
    
    </BrowserRouter>
    
            <Modal />
            
        </ModalProvider>
    </PlaygroundProvider>
   
  );
}

export default App;
