import { useContext } from "react";
import { Modal } from "../../Providers/Modals/Modal";
import "./index.scss"
import { RightcComponent } from "./RightComponent";
import { ModalContext } from "../../Providers/ModalProvider";
import { ModalProvider } from "../../Providers/ModalProvider";



export const HomeScreen = () => {
  const modalFeatures = useContext(ModalContext);

  const openCreatePlaygroundModal = () => {
        modalFeatures.openModal("CREATE_PLAYGROUND");
  };
    return (
        <div className="home-container">
            <div className="left-container">
              <div className="items-container">
              
               <img src="logo.png" />
               <h1>RKcodex</h1>
               <h2>Code.Complie.Debug</h2>
               <button onClick={openCreatePlaygroundModal}>
                <span className="material-icons">add</span>
                <span>Create Playground</span>
                </button>
              </div>
            </div>
            <RightcComponent />
           
            <ModalProvider>
            <Modal />
        </ModalProvider>
        </div>
    );
}