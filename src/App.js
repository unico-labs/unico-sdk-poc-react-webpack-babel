import './App.css';
import React from "react";

import { UnicoCheckBuilder, SelfieCameraTypes, UnicoThemeBuilder, DocumentCameraTypes } from 'unico-webframe';


const callback = {
  on: {
    success: function(obj) {
      console.log(obj.base64);
    },
    error: function(error) {
      console.error(error)
      
    }
  }
};

const CameraSDK = () => {

  const unicoTheme = new UnicoThemeBuilder()
    .setColorSilhouetteSuccess("#0384fc")
    .setColorSilhouetteError("#D50000")
    .setColorSilhouetteNeutral("#fcfcfc")
    .setBackgroundColor("#dff1f5")
    .setColorText("#0384fc")
    .setBackgroundColorComponents("#0384fc")
    .setColorTextComponents("#dff1f5")
    .setBackgroundColorButtons("#0384fc")
    .setColorTextButtons("#dff1f5")
    .setBackgroundColorBoxMessage("#fff")
    .setColorTextBoxMessage("#000")
    .setHtmlPopupLoading(`<div style="position: absolute; top: 45%; right: 50%; transform:
    translate(50%, -50%); z-index: 10; text-align: center;">Carregando...</div>`)
    .build();

  const unicoCamera = new UnicoCheckBuilder()
    .setResourceDirectory("/resources")
    .setModelsPath("/models")
    .setTheme(unicoTheme)
    .build();


    // para utilização da câmera é necessário criar o arquivo json de configuração e inserir na pasta
    // public e inserir o nome do arquivo nos métodos abaixo.

  const openSelfieCameraNormal = async () => {
    const cameraPromised = unicoCamera
      .prepareSelfieCamera("/{nome_do_arquivo_json_configurado}.json", SelfieCameraTypes.NORMAL)
      .catch(()=>console.error('Error initializing normal camera'));;
    
    cameraPromised.then(cameraOpener => cameraOpener.open(callback));
  }
  
  const openSelfieCameraSmart = async () => {
    const cameraPromised = unicoCamera
      .prepareSelfieCamera("/{nome_do_arquivo_json_configurado}.json", SelfieCameraTypes.SMART)
      .catch(()=>console.error('Error initializing smart camera'));
    
    cameraPromised.then(cameraOpener => cameraOpener.open(callback));
  }

  const openSelfieCameraLiveness = async () => {
    const cameraPromised = unicoCamera
      .prepareSelfieCamera("/{nome_do_arquivo_json_configurado}.json", SelfieCameraTypes.SMART)
      .catch(()=>console.error('Error initializing liveness camera'));
    
    cameraPromised.then(cameraOpener => cameraOpener.open(callback));
  }

  const openDocumentCameraCNH = async () => {
    const cameraPromised = unicoCamera
      .prepareDocumentCamera("/{nome_do_arquivo_json_configurado}.json", DocumentCameraTypes.CNH)
      .catch(()=>console.error('Error initializing CNH camera'));
    
    cameraPromised.then(cameraOpener => cameraOpener.open(callback));
  }

  const openDocumentCameraOutros = async () => {
    const cameraPromised = unicoCamera
      .prepareDocumentCamera("/{nome_do_arquivo_json_configurado}.json", DocumentCameraTypes.OTHERS("Teste"))
      .catch(()=>console.error('Error initializing other documents camera'));
    
    cameraPromised.then(cameraOpener => cameraOpener.open(callback));
  }

  return (
    <>
      {/* <div id="box-camera">
        Sem FaceTech
      </div> */}
      <button
        type="button"
        onClick={() => openSelfieCameraNormal()}
      >
        Camera Normal
      </button>
      <button
        type="button"
        onClick={() => openSelfieCameraSmart()}
      >
        Camera Smart
      </button>
      <button
        type="button"
        onClick={() => openSelfieCameraLiveness()}
      >
        Camera Liveness
      </button>
      <button
        type="button"
        onClick={() => openDocumentCameraCNH()}
      >
        Camera CNH
      </button>
      <button
        type="button"
        onClick={() => openDocumentCameraOutros()}
      >
        Camera Outros
      </button>
      <div className="container">
        <div id="box-camera">
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <CameraSDK />
      <p>Bem-vindo a sua nova app!</p>
    </div>
    
  );
}

export default App;
