// / <reference path="libs/babylon.d.ts" />



//      U T I L I T I E S     -utilities de javascript generales



//      Funciones analytics

function analyticsDepartamentoSeleccionado(){

  // Departamento - Seleccionado
  ga('send', {
    hitType: 'event',
    eventCategory: 'Departamentos',
    eventAction: 'Seleccionado',
    eventLabel: departamentoSeleccionado,
    eventValue: 1
  });
};


function analyticsDepartamentoMeInteresa(){

  // Departamento - Me interesa
  ga('send', {
    hitType: 'event',
    eventCategory: 'Departamentos',
    eventAction: 'Me interesa',
    eventLabel: departamentoSeleccionado,
    eventValue: 1
  });
}


function analyticsVerInterior(){

  // Departamento - Ver interior
  ga('send', {
    hitType: 'event',
    eventCategory: 'Departamentos',
    eventAction: 'Ver interior',
    eventLabel: departamentoSeleccionado,
    eventValue: 1
  });
}


function analyticsCaminar(){

  // Departamento - Caminar
  ga('send', {
    hitType: 'event',
    eventCategory: 'Departamentos',
    eventAction: 'Caminar',
    eventLabel: departamentoSeleccionado,
    eventValue: 1
  });
}


function analyticsDepartamentoFichaTecnica(){

  // Departamento - Ficha Técnica
  ga('send', {
    hitType: 'event',
    eventCategory: 'Departamentos',
    eventAction: 'Ficha Técnica',
    eventLabel: departamentoSeleccionado,
    eventValue: 1
  });
}


function analyticsContacto(){

  // Departamento -   Contacto
  if(departamentoSeleccionado){
    ga('send', {
      hitType: 'event',
      eventCategory: 'Contacto',
      eventAction: 'Contacto',
      eventLabel: departamentoSeleccionado,
      eventValue: 1
    });
  }
  else{
    ga('send', {
      hitType: 'event',
      eventCategory: 'Contacto',
      eventAction: 'Contacto',
      eventLabel: "General",
      eventValue: 1
    });    
  }
}


function analyticsContactoWhatsApp(){

  // Departamento - WhatsApp
  if(departamentoSeleccionado){
    ga('send', {
      hitType: 'event',
      eventCategory: 'Contacto',
      eventAction: 'WhatsApp',
      eventLabel: departamentoSeleccionado,
      eventValue: 1
    });
  }
  else{
    ga('send', {
      hitType: 'event',
      eventCategory: 'Contacto',
      eventAction: 'WhatsApp',
      eventLabel: "General",
      eventValue: 1
    });    
  }
}

function analyticsContactoCorreo(){

  // Departamento - Correo
  if(departamentoSeleccionado){
    ga('send', {
      hitType: 'event',
      eventCategory: 'Contacto',
      eventAction: 'Correo',
      eventLabel: departamentoSeleccionado,
      eventValue: 1
    });
  }
  else{
    ga('send', {
      hitType: 'event',
      eventCategory: 'Contacto',
      eventAction: 'Correo',
      eventLabel: "General",
      eventValue: 1
    });    
  }
}

function analyticsContactoTelefono(){

  // Departamento - Telefono
  if(departamentoSeleccionado){
    ga('send', {
      hitType: 'event',
      eventCategory: 'Contacto',
      eventAction: 'Telefono',
      eventLabel: departamentoSeleccionado,
      eventValue: 1
    });
  }
  else{
    ga('send', {
      hitType: 'event',
      eventCategory: 'Contacto',
      eventAction: 'Telefono',
      eventLabel: "General",
      eventValue: 1
    });    
  }
}



function analyticsLogica(){

    ga('send', {
      hitType: 'event',
      eventCategory: 'Misc',
      eventAction: 'Lógica',
      eventLabel: 'Boton',
      eventValue: 1
    });
}















//      Soportar webGL o no

function detectWebGLContext() {
  var canvas = document.createElement("canvas");
  // Get WebGLRenderingContext from canvas element.
  var gl = canvas.getContext("webgl")
    || canvas.getContext("experimental-webgl");
  // Report the result.
  if (gl && gl instanceof WebGLRenderingContext) {
    
  } 
  
  else {
    document.getElementById('avisoWebGL').classList.remove("hidden");
  }
}
detectWebGLContext();










//      Usar webP o no

var pngOwebP = ".png";
var jpgOwebP = ".jpg";


function detectWebpSupport(){
 var elem = document.createElement('canvas');

 if (!!(elem.getContext && elem.getContext('2d')))
 {
  // was able or not to get WebP representation
  return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
 }
 else
 {
  // very old browser like IE 8, canvas not supported
  return false;
 }
}

if(detectWebpSupport()){
  pngOwebP = ".webp";
  jpgOwebP = ".webp";
}
else{
  pngOwebP = ".png";
  jpgOwebP = ".jpg";
};






//      F a d e s

var fadeActivo = false;
var duracionDeFade = 500;
var fadeEnTransicion = false;

function fade(){
    if(fadeActivo){
        if(fadeEnTransicion){
            setTimeout(function(){
                // console.log("FADE OUT");
                fadeDom.classList.remove('fadeActivo');

                fadeActivo = false;
            }, duracionDeFade)
        }
        else{
            // console.log("FADE OUT");
            fadeDom.classList.remove('fadeActivo');

            fadeActivo = false;
        }
    }
    else{
        // console.log("FADE IN");
        fadeActivo = true;
        fadeEnTransicion = true;

        fadeDom.classList.add('fadeActivo');

        setTimeout(function(){
            fadeEnTransicion = false;
        }, duracionDeFade);
    }
}





















//      S E T U P   D E   B A B Y L O N  J S      -setup de babylonjs

let divFps = document.getElementById("fps");

var canvas = document.getElementById("canvas");
var engine = new BABYLON.Engine(canvas, true);
var scene = new BABYLON.Scene(engine);

var postprocess = scene.imageProcessingConfiguration
postprocess.toneMappingType = BABYLON.ImageProcessingConfiguration.TONEMAPPING_ACES;
engine.setHardwareScalingLevel(0.5);

engine.runRenderLoop(function () {
  divFps.innerHTML = engine.getFps().toFixed();
  scene.render();
});

window.addEventListener("resize", function () {
    engine.resize();
});

























//      U T I L I T I E S   D E   S E T U P  D E  B A B Y L O N   J S     -utilities de setup de babylon js



//      Loading screen

var loadingScreenDiv = window.document.getElementById("loadingScreen");

var loadingInicial = true;

function customLoadingScreen() {}

customLoadingScreen.prototype.displayLoadingUI = function () {};

customLoadingScreen.prototype.hideLoadingUI = function () {
    // if(loadingInicial === true){
    //     loadingInicial = false;
    //     setTimeout(() => {
    //       loadingScreenDiv.classList.add("loadingScreenOcultar");
    //       setTimeout(function(){
    //           loadingScreenDiv.className = "hidden";
    //       }, 500); 
    //     }, 300);
    // }
    // else {
    // }

};
var loadingScreen = new customLoadingScreen();
engine.loadingScreen = loadingScreen;

engine.displayLoadingUI();











//      Asignar Lightmaps

function assignLightmapOnMaterial(material, lightmap) {
  material.lightmapTexture = lightmap;
  material.lightmapTexture.coordinatesIndex = 1;
  material.useLightmapAsShadowmap = true;
}

















    










// Variables de meshes y materiales

var m1Edificio;
var m2Amenidades;
var m3Dpto;
var m4PH;
var m5AnexoNormal;
var m6AnexoAmenidades;
var m7Ventanas;
var mAgua;

var mMapaBig;
var mMapaMed;
var mMapaSml;
var mMapa_Edificio;
var mMapa_Letras;
var mMapa_Marker;

var m_Sky

var mBoton_360_Alberca;
var mBoton_360_Ingreso;
// var mBoton_360_Lobby;
var mBoton_360_Comercio;
var arrayBotones360 = [];

var arraySELamenidades = [];

var SELam_PB;
var SELam_PA;

var WIRE;
var COL_Edificio;
var SCOLf;


var M_1Masked;
var M_1Ventanas;
var M_2Emissive;
var M_2Trans;
var M_2Masked;
var M_3Masked;
var M_3Trans;
var M_3Emissive;
var M_4Emissive;
var M_4Trans;
var M_4Masked;
var M_5Masked;
var M_7Texturas;

var M_SELfv;
var M_SELfh;
var M_VEND;
var M_PERp;

var M_Boton_360;

var M_MapaBig;
var M_MapaMed;
var M_MapaSml;
var M_Mapa_Edificio;
var M_Mapa_Letras;
var M_MapaIcono_Health;
var M_MapaIcono_Shopping;
var M_MapaIcono_Schools;
var M_MapaIcono_Stadiums;
var M_MapaIcono_Church;

var arrayMaterialesDeUbicacion = [];
var arrayUbicacionesACrear = [];
var arrayUbicaciones = [];
var padreBoundingBoxUbicacion;

var nodeDptos;

var m7Ventanas2;

var nodeParaClipPlane;
var nodeParaClipPlaneVentanas;
var nodeParaClipPlaneVentanas2;

var clippingPlane;
var clippingPlane2;
var clippingPlane3;

var yClipPlane;





// Variables generales

var usarAutoRotateGlobal = true;
var paneoVerticalPermitido = false;
var setupExposure = 3;

var escalaAutoDeUbicaciones = false;
var arrayMergeMeshesSELfv = [];
var SELfv;

















//      Camara inicial

var camTarInicio = new BABYLON.Vector3(-18.9, 26.75, 11.9);
var camPosInicio = new BABYLON.Vector3(-114.43, 56.44, 237.2);

var camTarDptos = new BABYLON.Vector3(0, 32, 0);
var camTarLobby = new BABYLON.Vector3(10.17, -14.96, 8.6);

var camLowerRadiusInicio = 30;
var camLowerRadiusPlanta = 20;
var camLowerRadiusAm = 7;

var camFovInicio = 0.8;
var camFovPlanta = 0.5;
var camFovFPV = 1.5;

var camUpperBeta = 1.45;
var camUpperBetaPlanta = 0.9;

var camUpperRadiusInicio = 300;

var camPanningSens = 200;
var camPanningSensMapa = 30;

var camWheelPrecisionInicio = 4;
var camWheelPrecisionMapa = 1;


var arcRotCam = new BABYLON.ArcRotateCamera(
    "arcRotateCamera", 8.38, 0.82, 64.97,
    new BABYLON.Vector3(-22.98, 43.29, 39.93),
    scene
);

arcRotCam.wheelPrecision = camWheelPrecisionInicio;
arcRotCam.minZ = 0.5;

arcRotCam.lowerRadiusLimit = camLowerRadiusInicio;
arcRotCam.upperRadiusLimit = camUpperRadiusInicio;

arcRotCam.upperBetaLimit = camUpperBeta;

arcRotCam.pinchDeltaPercentage = 0.0003;
arcRotCam.panningSensibility = camPanningSens;

arcRotCam.angularSensibilityX = 4000;
arcRotCam.angularSensibilityY = 4000;

arcRotCam.useAutoRotationBehavior = false;

arcRotCam.setTarget(camTarInicio);
arcRotCam.fov = camFovInicio;
arcRotCam.position = camPosInicio;
arcRotCam.inertia = 0.92;

arcRotCam.attachControl(canvas, true);


























//      I N I T   D E   B A B Y L O N  J S      -iniciacion de babylon js


BABYLON.SceneLoader.Append(
  "assets/babylon/",
  "001_D24.babylon",
  scene,
  function () {

    var enviroHelper = scene.createDefaultEnvironment({ 
        createGround: false, 
        createSkybox: false, 
        cameraContrast: 1, 
        cameraExposure: setupExposure,
        environmentTexture: null
        });

    scene.ambientColor = new BABYLON.Color4(1, 1, 1, 1.0);
    scene.clearColor = new BABYLON.Color4(1, 1, 1, 1.0);


    var lightmappedMeshes = ["m1Edificio", "m2Amenidades", "m3Dpto", "m4PH", "m5AnexoNormal", "m6AnexoAmenidades", "m7Ventanas"];

    for (var i = 0; i < lightmappedMeshes.length; i++) {
        var currentMesh = scene.getMeshByName(lightmappedMeshes[i]);
        var currentMeshLightmap = new BABYLON.Texture(
            "assets/babylon/lm/" + currentMesh.name + "_lm" + pngOwebP, scene, false, false);
        currentMeshLightmap.isRGBD = true;
        currentMeshLightmap.name = currentMesh.name + "_lm";
        currentMeshLightmap.level = 1;
        if (!currentMesh.material) {
            continue;
        } else if (!currentMesh.material.subMaterials) {
            assignLightmapOnMaterial(
                currentMesh.material,
                currentMeshLightmap
            );
        } else if (currentMesh.material.subMaterials) {
            for (var j = 0; j < currentMesh.material.subMaterials.length; j++) {
                assignLightmapOnMaterial(
                    currentMesh.material.subMaterials[j],
                    currentMeshLightmap
                );
            }
        }
    }

    scene.getLightByName("Default light").dispose();


    // Para quitar hasAlpha que se activa automaticamente y puede reducir performance?
    for (var i = 0; i < scene.materials.length; i++) {
        if(scene.materials[i].diffuseTexture){
          scene.materials[i].diffuseTexture.hasAlpha = false;
        }
    }


    // Skybox
    m_Sky = scene.getMeshByName("mSky");
    m_Sky.isPickable = true;
    m_Sky.material.diffuseTexture.level = 1.3;
    m_Sky.material.ambientColor = new BABYLON.Color3(1, 1, 1);    
    m_Sky.material.disableLighting = true;
    m_Sky.scaling = new BABYLON.Vector3(10000, 10000, 10000);


    // Asignacion de variables de meshes

    m1Edificio = scene.getMeshByName("m1Edificio");
    m2Amenidades = scene.getMeshByName("m2Amenidades");
    m3Dpto = scene.getMeshByName("m3Dpto");
    m4PH = scene.getMeshByName("m4PH");
    m5AnexoNormal = scene.getMeshByName("m5AnexoNormal");
    m6AnexoAmenidades = scene.getMeshByName("m6AnexoAmenidades");
    m7Ventanas = scene.getMeshByName("m7Ventanas");
    mAgua = scene.getMeshByName("mAgua");

    WIRE = scene.getMeshByName("WIRE");
    COL_Edificio = scene.getMeshByName("COL");
    SCOLf = scene.getMeshByName("SCOL");



        // A G U A

    // Luz para bump de agua
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0.5, 1.17, -1.7), scene);
    light.includedOnlyMeshes.push(mAgua)

    // Agua LQ
    var water = new BABYLON.StandardMaterial("water", scene);
    water.backFaceCulling = true;
    water.bumpTexture = new BABYLON.Texture("assets/babylon/waterbump.jpg", scene);
    water.diffuseColor = new BABYLON.Color3(0.545, 0.82, 1);
    water.alpha = 0.57;
    water.specularPower = 8.5;
    water.bumpTexture.uScale = 0.8;
    water.bumpTexture.vScale = 0.8;
    water.bumpTexture.level = 2;
    mAgua.material = water;

    noiseTexture = new BABYLON.NoiseProceduralTexture("perlin", 256, scene);
    mAgua.material.emissiveTexture = noiseTexture;
    noiseTexture.octaves = 10;
    noiseTexture.persistence = 1;
    noiseTexture.animationSpeedFactor = 1;
    noiseTexture.brightness = 0.05
    noiseTexture.level = 0.15

    noiseTexture.vScale = 0.05
    noiseTexture.uScale = 0.05


    // Asignacion de variables de materiales
    M_1Masked = scene.getMaterialByName("M_1Masked");
    M_1Ventanas = scene.getMaterialByName("M_1Ventanas");
    M_2Emissive = scene.getMaterialByName("M_2Emissive");
    M_2Trans = scene.getMaterialByName("M_2Trans");
    M_2Masked = scene.getMaterialByName("M_2Masked");
    M_3Masked = scene.getMaterialByName("M_3Masked");
    M_3Trans = scene.getMaterialByName("M_3Trans");
    M_3Emissive = scene.getMaterialByName("M_3Emissive");
    M_4Emissive = scene.getMaterialByName("M_4Emissive");
    M_4Trans = scene.getMaterialByName("M_4Trans");
    M_4Masked = scene.getMaterialByName("M_4Masked");
    M_5Masked = scene.getMaterialByName("M_5Masked");
    M_7Texturas = scene.getMaterialByName("M_7Texturas");

    M_1Masked.diffuseTexture.hasAlpha = true;
    M_1Masked.useAlphaFromDiffuseTexture = true;

    M_2Emissive.lightmapTexture = null;
    M_2Emissive.ambientColor = new BABYLON.Color3(1, 1, 1);

    M_2Trans.diffuseTexture.hasAlpha = true;
    M_2Trans.useAlphaFromDiffuseTexture = true;
    M_2Trans.lightmapTexture = null;

    M_2Masked.diffuseTexture.hasAlpha = true;
    M_2Masked.useAlphaFromDiffuseTexture = true;
    
    M_3Masked.diffuseTexture.hasAlpha = true;
    M_3Masked.useAlphaFromDiffuseTexture = true;

    M_3Trans.diffuseTexture.hasAlpha = true;
    M_3Trans.useAlphaFromDiffuseTexture = true;
    M_3Trans.lightmapTexture = null;

    M_3Emissive.lightmapTexture = null;
    M_3Emissive.ambientColor = new BABYLON.Color3(1, 1, 1);

    M_4Emissive.lightmapTexture = null;
    M_4Emissive.ambientColor = new BABYLON.Color3(1, 1, 1);

    M_4Trans.diffuseTexture.hasAlpha = true;
    M_4Trans.useAlphaFromDiffuseTexture = true;
    M_4Trans.lightmapTexture = null;

    M_4Masked.diffuseTexture.hasAlpha = true;
    M_4Masked.useAlphaFromDiffuseTexture = true;

    M_5Masked.diffuseTexture.hasAlpha = true;
    M_5Masked.useAlphaFromDiffuseTexture = true;


    //Ventanas y su reflejo
    M_7Texturas.reflectionTexture = new BABYLON.CubeTexture("assets/babylon/skybox", scene);
    M_7Texturas.reflectionTexture.coordinatesMode = BABYLON.Texture.PLANAR_MODE;
    M_7Texturas.reflectionTexture.level = 0.2;
    M_7Texturas.ambientColor = new BABYLON.Color3(0.376, 0.376, 0.376);
    M_7Texturas.zOffset = -0.2;

    M_1Ventanas.reflectionTexture = M_7Texturas.reflectionTexture;
    M_1Ventanas.reflectionTexture.coordinatesMode = BABYLON.Texture.PLANAR_MODE;
    M_1Ventanas.reflectionTexture.level = 0.2;
    M_1Ventanas.ambientColor = M_7Texturas.ambientColor;


    // Edicion de meshes
    for (var i = 0; i < scene.meshes.length; i++) {
        var currentMesh = scene.meshes[i];
        if(currentMesh.name.includes("SELfs")){
            currentMesh.isPickable = true;
            currentMesh.setEnabled(false);
            currentMesh.visibility = 0;
        };
        if(currentMesh.name.includes("SELfh")){
            currentMesh.setEnabled(false);
            //currentMesh.visibility = 0;
        };
        if(currentMesh.name.includes("SELp")){
            currentMesh.isPickable = true;            
            currentMesh.setEnabled(false);
            currentMesh.visibility = 0;
        };     
        if(currentMesh.name.includes("SELam")){
            currentMesh.isPickable = true;            
            currentMesh.setEnabled(false);
            currentMesh.visibility = 0;
            arraySELamenidades.push(currentMesh);
        };     
        if(currentMesh.name.includes("VEND")){        
            currentMesh.setEnabled(false);
            currentMesh.visibility = 0;
        };   
        if(currentMesh.name.includes("PERp")){        
            currentMesh.setEnabled(false);
            // currentMesh.visibility = 0;
        };  
        if(currentMesh.name.includes("MCOL")){   
            currentMesh.isPickable = true;                    
            currentMesh.setEnabled(false);
            currentMesh.visibility = 0;
        };
        if(currentMesh.name.includes("SCOL")){    
            currentMesh.isPickable = true;                   
            currentMesh.setEnabled(false);
            currentMesh.visibility = 0;
        };
        if(currentMesh.name.includes("MOV")){    
            currentMesh.isPickable = true;                   
            currentMesh.setEnabled(false);
            currentMesh.visibility = 0;
        };              
        if(currentMesh.name.includes("SELfv")){
            currentMesh.setEnabled(false);
            //currentMesh.visibility = 0;
        };    
        if(currentMesh.name.includes("Mapa")){
            currentMesh.setEnabled(false);
            //currentMesh.visibility = 0;
        };                      
    }

    M_SELfv = scene.getMaterialByName("M_SELfv");
    M_SELfv.diffuseColor = new BABYLON.Color3(0, 1, 0);
    M_SELfv.ambientColor = new BABYLON.Color3(0, 1, 0);
    M_SELfv.alpha = 0;

    M_SELfh = scene.getMaterialByName("M_SELfh");
    M_SELfh.diffuseColor = new BABYLON.Color3(0, 1, 0);
    M_SELfh.ambientColor = new BABYLON.Color3(0, 1, 0);
    M_SELfh.alpha = 0;    

    M_VEND = scene.getMaterialByName("M_VEND");
    M_VEND.diffuseColor = new BABYLON.Color3(0, 0, 0);
    M_VEND.ambientColor = new BABYLON.Color3(0, 0, 0);   

    M_PERp = scene.getMaterialByName("M_PERp");
    M_PERp.diffuseColor = new BABYLON.Color3(0, 1, 0);
    M_PERp.ambientColor = new BABYLON.Color3(0, 1, 0);   
    M_PERp.alpha = 0;


    WIRE.material.useSpecularOverAlpha = false;
    WIRE.material.ambientColor = new BABYLON.Color4(0.3, 0.3, 0.3, 1.0);
    WIRE.material.alpha = 0;


    nodeDptos = new BABYLON.TransformNode("nodeDptos");

    m3Dpto.parent = nodeDptos;
    m5AnexoNormal.parent = nodeDptos;
    m6AnexoAmenidades.parent = nodeDptos;

    for (var i = 0; i < scene.meshes.length; i++) {
        var currentMesh = scene.meshes[i];
        if(currentMesh.name.includes("PERp_Dptos_") || currentMesh.name.includes("SELfh_Dptos_")
         || currentMesh.name.includes("SELp_Dptos") || currentMesh.name.includes("VEND_Dptos_")){
          currentMesh.parent = nodeDptos;
        };
        // if(currentMesh.name.includes("MOV") || currentMesh.name.includes("m5N1varN5a")
        //  || currentMesh.name.includes("m6N1varN5b")){
        // }
        // else{
        //     if(currentMesh.name.includes("N1") || currentMesh.name.includes("N5")
        //      || currentMesh.name.includes("SELp_Dpto_")){
        //         currentMesh.parent = nodeDptos;
        //     };

        // }
    }

    scene.getMeshByName("MCOL_Dptos").parent = nodeDptos;
    scene.getMeshByName("MOV_Dptos").parent = nodeDptos;


    m2Amenidades.setEnabled(false);
    m3Dpto.setEnabled(false);
    m4PH.setEnabled(false);
    m5AnexoNormal.setEnabled(false);
    m6AnexoAmenidades.setEnabled(false);

    // nodeDptos.setEnabled(false);

    SCOLf.setEnabled(false);

    WIRE.setEnabled(false);

    COL_Edificio.visibility = 0;
    SCOLf.visibility = 0;


    yClipPlane = 90;
    nodeParaClipPlane = new BABYLON.TransformNode("nodeParaClipPlane");
    nodeParaClipPlane.position.y = yClipPlane;

    nodeParaClipPlaneVentanas = new BABYLON.TransformNode("nodeParaClipPlaneVentanas");
    nodeParaClipPlaneVentanas.position.y = yClipPlane;

    nodeParaClipPlaneVentanas2 = new BABYLON.TransformNode("nodeParaClipPlaneVentanas2");
    nodeParaClipPlaneVentanas2.position.y = yClipPlane;



    m7Ventanas.material.useSpecularOverAlpha = false;

    m7Ventanas.clone("m7Ventanas2");
    m7Ventanas2 = scene.getMeshByName("m7Ventanas2");

    var tempVentanas2MultiMat = new BABYLON.MultiMaterial(m7Ventanas.material.name + "2", scene);

    for (let e = 0; e < m7Ventanas.material.getChildren().length; e++) {
        const currentChildren = m7Ventanas.material.getChildren()[e];

        var clone = currentChildren.clone(currentChildren.name + "2");

        tempVentanas2MultiMat.subMaterials.push(clone);
    };

    m7Ventanas2.material = tempVentanas2MultiMat;

    m7Ventanas2.setEnabled(false);




    var tempAlturaExtraBoton360 = 3;

      // Botones 360
    M_Boton_360 = new BABYLON.StandardMaterial("M_Boton_360", scene);
    M_Boton_360.diffuseTexture = new BABYLON.Texture("assets/babylon/TX_Boton_360.png", scene);
    M_Boton_360.diffuseTexture.level = 1.03;
    M_Boton_360.ambientTexture = M_Boton_360.diffuseTexture;

    mBoton_360_Alberca = BABYLON.MeshBuilder.CreatePlane("mBoton_360_Alberca", {}, scene);
    mBoton_360_Alberca.position = new BABYLON.Vector3(-11.44, 7.71 + tempAlturaExtraBoton360, 19.327);
    mBoton_360_Alberca.material = M_Boton_360;
    
    mBoton_360_Ingreso = BABYLON.MeshBuilder.CreatePlane("mBoton_360_Ingreso", {}, scene);
    mBoton_360_Ingreso.position = new BABYLON.Vector3(-38.09, 2.00 + tempAlturaExtraBoton360, 52.672);
    mBoton_360_Ingreso.material = M_Boton_360;
    
    // mBoton_360_Lobby = BABYLON.MeshBuilder.CreatePlane("mBoton_360_Lobby", {}, scene);
    // mBoton_360_Lobby.position = new BABYLON.Vector3(-12.89, 1.81 + 7, 3.54);
    // mBoton_360_Lobby.material = M_Boton_360;
    
    mBoton_360_Comercio = BABYLON.MeshBuilder.CreatePlane("mBoton_360_Comercio", {}, scene);
    mBoton_360_Comercio.position = new BABYLON.Vector3(-14.09, 1.81 + 7, 12.440);
    mBoton_360_Comercio.material = M_Boton_360;

    arrayBotones360 = [mBoton_360_Alberca, mBoton_360_Ingreso, mBoton_360_Comercio]
    arrayBotones360pb = [mBoton_360_Ingreso, mBoton_360_Comercio]
    arrayBotones360pa = [mBoton_360_Alberca, mBoton_360_Ingreso]

    for (var i = 0; i < arrayBotones360.length; i++) {
        var currentMesh = arrayBotones360[i];
        currentMesh.scaling = new BABYLON.Vector3(7, 7, 7);
        currentMesh.billboardMode = BABYLON.AbstractMesh.BILLBOARDMODE_ALL;
        currentMesh.isPickable = true;
        currentMesh.setEnabled(false);

        currentMesh.material.diffuseTexture.hasAlpha = true;
        currentMesh.material.emissiveColor = new BABYLON.Color3(1, 1, 1);
        currentMesh.material.useAlphaFromDiffuseTexture = true;
        currentMesh.material.alpha = 0;
    }

    mBoton_360_Alberca.onBeforeRenderObservable.add(() => {
        scene.clipPlane = null;
    })
    mBoton_360_Alberca.onAfterRenderObservable.add(() => {
        scene.clipPlane = clippingPlane;
    })

    mBoton_360_Ingreso.onBeforeRenderObservable.add(() => {
        scene.clipPlane = null;
    })
    mBoton_360_Ingreso.onAfterRenderObservable.add(() => {
        scene.clipPlane = clippingPlane;
    })

    // mBoton_360_Lobby.onBeforeRenderObservable.add(() => {
    //     scene.clipPlane = null;
    // })
    // mBoton_360_Lobby.onAfterRenderObservable.add(() => {
    //     scene.clipPlane = clippingPlane;
    // })

    mBoton_360_Comercio.onBeforeRenderObservable.add(() => {
        scene.clipPlane = null;
    })
    mBoton_360_Comercio.onAfterRenderObservable.add(() => {
        scene.clipPlane = clippingPlane;
    })


    // M A P A
    mMapaBig = scene.getMeshByName("mMapaBig");
    mMapaMed = scene.getMeshByName("mMapaMed");
    mMapaSml = scene.getMeshByName("mMapaSml");

    mMapa_Edificio = scene.getMeshByName("mMapa_Edificio");
    mMapa_Letras = scene.getMeshByName("mMapa_Letras");
    mMapa_Marker = scene.getMeshByName("mMapa_Marker");

    mMapa_Edificio.position.y = 1;
    mMapa_Letras.position.y = 1.5;

    M_MapaBig = scene.getMaterialByName("M_MapaBig");
    M_MapaMed = scene.getMaterialByName("M_MapaMed");
    M_MapaSml = scene.getMaterialByName("M_MapaSml");
    M_Mapa_Edificio = scene.getMaterialByName("M_mMapa_Edificio");
    M_Mapa_Letras = scene.getMaterialByName("M_mMapa_Letras");

    M_MapaIcono_Health = new BABYLON.StandardMaterial("M_MapaIcono_Health", scene);
    M_MapaIcono_Health.diffuseTexture = new BABYLON.Texture("assets/babylon/TX_MapaIconos_Health.png", scene);
    
    M_MapaIcono_Shopping = new BABYLON.StandardMaterial("M_MapaIcono_Shopping", scene);
    M_MapaIcono_Shopping.diffuseTexture = new BABYLON.Texture("assets/babylon/TX_MapaIconos_Shopping.png", scene);
   
    M_MapaIcono_Schools = new BABYLON.StandardMaterial("M_MapaIcono_Schools", scene);
    M_MapaIcono_Schools.diffuseTexture = new BABYLON.Texture("assets/babylon/TX_MapaIconos_Uni.png", scene);
   
    M_MapaIcono_Stadiums = new BABYLON.StandardMaterial("M_MapaIcono_Stadiums", scene);
    M_MapaIcono_Stadiums.diffuseTexture = new BABYLON.Texture("assets/babylon/TX_MapaIconos_Stadium.png", scene);

    M_MapaIcono_Church = new BABYLON.StandardMaterial("M_MapaIcono_Church", scene);
    M_MapaIcono_Church.diffuseTexture = new BABYLON.Texture("assets/babylon/TX_MapaIconos_Church.png", scene);

    arrayMaterialesDeUbicacion = [
        M_MapaIcono_Health, 
        M_MapaIcono_Shopping, 
        M_MapaIcono_Schools,
        M_MapaIcono_Stadiums,
        M_MapaIcono_Church
      ];

    for (var i = 0; i < scene.materials.length; i++) {
        var currentMaterial = scene.materials[i];
        if(currentMaterial.name.includes("Mapa")){
            currentMaterial.ambientColor = new BABYLON.Color3(1, 1, 1);
        };
        if(currentMaterial.name.includes("MapaIcono") || currentMaterial.name.includes("Mapa_Edificio") || currentMaterial.name.includes("Mapa_Letras")){
            currentMaterial.useAlphaFromDiffuseTexture = true; 
            currentMaterial.alpha = 0;
            currentMaterial.diffuseTexture.hasAlpha = true;
        };        
    }

    arrayUbicacionesACrear.push({nombre: "Hospital Arboledas", posicion: new BABYLON.Vector3(-138.106722, 0.0, -106.009693), material: "Salud"});
    arrayUbicacionesACrear.push({nombre: "Hospital Coitre Loma Bonita", posicion: new BABYLON.Vector3(68.706592, 0.0, -160.608699), material: "Salud"});
    arrayUbicacionesACrear.push({nombre: "Plaza del Sol", posicion: new BABYLON.Vector3(83.319621, 0.0, 109.835209), material: "Comercial"});
    arrayUbicacionesACrear.push({nombre: "Cinemex Plaza Milenium", posicion: new BABYLON.Vector3(41.292865, 0.0, 65.778185), material: "Comercial"});
    arrayUbicacionesACrear.push({nombre: "Univ UNE Torre Milenio", posicion: new BABYLON.Vector3(33.780837, 0.0, 55.423769), material: "Educacion"});
    arrayUbicacionesACrear.push({nombre: "EBC Guadalajara", posicion: new BABYLON.Vector3(-70.826685, 0.0, 38.438863), material: "Educacion"});
    arrayUbicacionesACrear.push({nombre: "Instituto Humanidades y Ciencias", posicion: new BABYLON.Vector3(21.550384, 0.0, -19.711148), material: "Educacion"});
    arrayUbicacionesACrear.push({nombre: "Cancha de Futbol", posicion: new BABYLON.Vector3(28.292938, 0.0, -26.618152), material: "Comercial"});
    arrayUbicacionesACrear.push({nombre: "Gimnasio IMAF", posicion: new BABYLON.Vector3(-53.896151, 0.0, -44.967785), material: "Comercial"});
    arrayUbicacionesACrear.push({nombre: "Santander", posicion: new BABYLON.Vector3(-39.609009, 0.0, -47.223649), material: "Comercial"});
    arrayUbicacionesACrear.push({nombre: "Colegio Cervantes", posicion: new BABYLON.Vector3(50.374919, 0.0, -59.254923), material: "Educacion"});
    arrayUbicacionesACrear.push({nombre: "Cruz Verde Sur", posicion: new BABYLON.Vector3(-65.743765, 0.0, -86.370219), material: "Salud"});
    arrayUbicacionesACrear.push({nombre: "Colegio Mexico Nuevo", posicion: new BABYLON.Vector3(8.91768, 0.0, -99.197513), material: "Educacion"});
    arrayUbicacionesACrear.push({nombre: "IMSS Clinica 171", posicion: new BABYLON.Vector3(-75.756664, 0.0, -105.695203), material: "Salud"});
    arrayUbicacionesACrear.push({nombre: "Soriana Hiper", posicion: new BABYLON.Vector3(-91.173985, 0.0, -124.973502), material: "Comercial"});
    

    for (var i = 0; i < arrayUbicacionesACrear.length; i++) {
        var currentObject = arrayUbicacionesACrear[i];
        var nombreConGuion = currentObject.nombre.replace(" ", "_");
        var clon = mMapa_Marker.clone("mMapa_Marker_" + nombreConGuion);
        arrayUbicaciones.push(clon);
        clon.position = currentObject.posicion;
        clon.position.y = 1;
        clon.setEnabled(false);
        clon.isPickable = true;
        clon.visibility = 0.6;
        switch (currentObject.material){
            case 'Hitos': clon.material = M_MapaIcono_Church ; break;
            case 'Comercial': clon.material = M_MapaIcono_Shopping ; break;
            case 'Salud': clon.material = M_MapaIcono_Health ; break;
            case 'Educacion': clon.material = M_MapaIcono_Schools ; break;

            default:
        }        
    }

    //Poblar tablas con botones de ubicacion

    var divAInsertarEnUbicacion;

    for (var i = 0; i < arrayUbicacionesACrear.length; i++) {
      var currentObject = arrayUbicacionesACrear[i];
      var nombreConGuion = currentObject.nombre.replace(" ", "_");
      if(currentObject.material == "Hitos"){
      }
      else{
        switch (currentObject.material){
            case 'Comercial': divAInsertarEnUbicacion = ubicacionPanelSeleccionShoppingInsertar ; break;
            case 'Salud': divAInsertarEnUbicacion = ubicacionPanelSeleccionHealthInsertar ; break;
            case 'Educacion': divAInsertarEnUbicacion = ubicacionPanelSeleccionSchoolInsertar ; break;
            default:
        }  
        divAInsertarEnUbicacion.innerHTML = divAInsertarEnUbicacion.innerHTML + '<div class="btnSeleccionarUbicacion">' + currentObject.nombre + "</div>"
      }
    }

    padreBoundingBoxUbicacion = new BABYLON.Mesh("padreBoundingBoxUbicacion", scene);

    SELam_PA = scene.getMeshByName("SELam_PA");
    SELam_PB = scene.getMeshByName("SELam_PB");
});

































//      U T I L I T I E S     -utilities de babylon js



//      Escala de markers en mapa

function calcularEscalaDeUbicaciones(){
  var input = arcRotCam.radius;
  var inputStart = 170;
  var inputEnd = 1000;
  var outputStart = 0.5;
  var outputEnd = 3;
  var output = outputStart + ((outputEnd - outputStart) / (inputEnd - inputStart)) * (input - inputStart)
  if(output < 0.5){
      output = 0.5;
  };
  if(output > 2){
      output = 2;
  };
  return output
}









//      Auto rotate

function activarAutoRotate(activar){

  if(usarAutoRotateGlobal){
      if(activar){
          arcRotCam.useAutoRotationBehavior = true;
          if(Math.random() < 0.5){
              arcRotCam.autoRotationBehavior.idleRotationSpeed = 0.04;
              
          }
          else{
              arcRotCam.autoRotationBehavior.idleRotationSpeed = -0.04;
          }
          arcRotCam.autoRotationBehavior.idleRotationWaitTime = 7000;
      }
      else{
          arcRotCam.useAutoRotationBehavior = false;
      }
  }
};










//      Normalizar rotacion con alpha de Arc rotation camera

function normalizarAlphaCamera(camara, alphaDestino, inicio){
  //Poner funcion dentro del inicial alpha en animacion

  alpha = camara.alpha%(Math.PI*2);

  if(alpha < 0){
      alphaContrario = alpha+(Math.PI*2);
  }
  else{
      alphaContrario = alpha-(Math.PI*2);
  }
  
  destino = alphaDestino;
  destinoContrario = alphaDestino-(Math.PI*2);

  if(Math.abs(alpha - destino) > Math.abs(alpha - destinoContrario)){
      ganador1A = alpha;
    ganador1D = destinoContrario;
  }
  else{
      ganador1A = alpha;
      ganador1D = destino;
  };

  if(Math.abs(alphaContrario - destino) > Math.abs(alphaContrario - destinoContrario)){
      ganador2A = alphaContrario;
      ganador2D = destinoContrario;
  }
  else{
      ganador2A = alphaContrario;
    ganador2D = destino;
  };

  // console.log("Ganador1A: " + ganador1A + "  Ganador1D: " + ganador1D + "  Ganador2A: " + ganador2A + "  Ganador2D: " + ganador2D)

  if(Math.abs(ganador1A - ganador1D) > Math.abs(ganador2A - ganador2D) || Math.abs(ganador1A - ganador1D) == Math.abs(ganador2A - ganador2D)){
      alpha = ganador2A;
    destino = ganador2D;
  }
  else{
      alpha = ganador1A;
      destino = ganador1D;
  };

  if(inicio){
      // console.log(alpha);
      // console.log(destino);
      return alpha;
  }
  else{
      // console.log(alpha);
      // console.log(destino);
      return destino;
  };
}









//      Cambiar numero a negativo random

function cambiarNegativoRandom(numero){

  if(Math.random() < 0.5){
      return numero
  }
  else{
      return numero * -1
  }
}








function mostrarSpinner(siOno){
  if(siOno){
    spinnerBottomLeft.classList.remove("spinnerBottomLeftOculto");
  }
  else{
    spinnerBottomLeft.classList.add("spinnerBottomLeftOculto");
  }
}













//      Setup de asset manager

var assetsManager = new BABYLON.AssetsManager(scene);
assetsManager.useDefaultLoadingScreen = false;


assetsManager.onTasksDoneObservable.add(function() {
  console.log("done");
  mostrarSpinner(false)
});















//      Cargar lightmaps HQ

const lightmapsMejorar = ["m1Edificio_lm", "m2Amenidades_lm", "m3Dpto_lm", "m4PH_lm"];

var materialesActuales = [];
var multiMatsActuales = [];
var materialesClones = [];

var assetsParaColocarLightmaps = [];

var arrayPushedNombre = [];
var arrayPushedTextura = [];



function assetsLightmapsHQ() {

    for (let i = 0; i < scene.materials.length; i++) {
        materialesActuales.push(scene.materials[i]);
    }

    for (let i = 0; i < materialesActuales.length; i++) {
        const currentMaterial = materialesActuales[i];

        if (currentMaterial.lightmapTexture && lightmapsMejorar.includes(currentMaterial.lightmapTexture.name)) {
            var mat123 = currentMaterial.clone(currentMaterial.name + "_Clone")
            materialesClones.push(mat123);
        };
    };



    for (let i = 0; i < lightmapsMejorar.length; i++) {
        const currentLightmap = lightmapsMejorar[i];
        taskActual = assetsManager.addTextureTask(Math.random().toString(36).substring(7), "assets/babylon/lm/" + currentLightmap + "_hq" + pngOwebP);

        taskActual.onSuccess = function (task) {
            textura_ready = task.texture;
            textura_ready.isRGBD = true;
            textura_ready.level = 1;

            textura_ready.coordinatesIndex = 1;
            textura_ready.vScale = -1;
            textura_ready.name = currentLightmap + "_hq"
            assetsParaColocarLightmaps.push({ lm: currentLightmap, tx: textura_ready})
            arrayPushedNombre.push(currentLightmap);
            arrayPushedTextura.push(textura_ready);

            console.log(currentLightmap)

            if (arrayPushedNombre.length == lightmapsMejorar.length) {
                console.log("Termino1")
                assetsLightmapsColocar();
                console.log("Termino2")
                assetsCrearMultiMat();
                console.log("Termino3")

                setTimeout(() => {

                  cargarTexturasHQMapa();
                }, 500);
            }
        };

    };
    assetsManager.loadAsync();
    mostrarSpinner(true);
};

function assetsLightmapsColocar() {

    // for (let e = 0; e < arrayPushedNombre.length; e++) {
    //     const este = arrayPushedNombre[e];
    // };

    for (let e = 0; e < materialesClones.length; e++) {
        const currentMaterial = materialesClones[e];

        lmTexture = currentMaterial.lightmapTexture.name;

        console.log(lmTexture)
        console.log(arrayPushedNombre.indexOf(lmTexture))

        var aca = arrayPushedTextura[arrayPushedNombre.indexOf(lmTexture)]

        console.log(aca)
        console.log(currentMaterial.name)

        scene.getMaterialByName(currentMaterial.name).lightmapTexture = aca;
    };
};



var arrayLMHQmultiMatsInfo = [];
var arrayLMHQmultiMatsInfoCounter = [];


function assetsCrearMultiMat() {

        // ESPECIAL, por metallico no se compilaba bien creo
        // scene.getMaterialByName("M_1Ventanas").forceCompilation(m1Edificio, function() {
        //   console.log("M_1Ventanas Compilado")
        // });
        // scene.getMaterialByName("M_1Ventanas_Clone").forceCompilation(m1Edificio, function() {
        //   console.log("M_1Ventanas_Clone Compilado")        
        // });


    for (let i = 0; i < scene.multiMaterials.length; i++) {
        multiMatsActuales.push(scene.multiMaterials[i]);
    }

    for (let i = 0; i < multiMatsActuales.length; i++) {
        const currentMultiMaterial = multiMatsActuales[i];

        multiMatClone = new BABYLON.MultiMaterial(currentMultiMaterial.name + "_Clone", scene);

        for (let e = 0; e < currentMultiMaterial.getChildren().length; e++) {
            const currentChildren = currentMultiMaterial.getChildren()[e];

            if (scene.getMaterialByName(currentMultiMaterial.getChildren()[e].name + "_Clone")) {
                multiMatClone.subMaterials.push(scene.getMaterialByName(currentMultiMaterial.getChildren()[e].name + "_Clone"));
            }
            else {
                multiMatClone.subMaterials.push(scene.getMaterialByName(currentMultiMaterial.getChildren()[e].name));
            }
        }

        for (let t = 0; t < scene.meshes.length; t++) {
            const currentMesh = scene.meshes[t];
            if (currentMesh.material) {
                if (currentMesh.material.name == currentMultiMaterial.name) {

                    // var tempCounting = 0;
                    // var tempCountingCompilados = 0;
                    for (let u = 0; u < multiMatClone.getChildren().length; u++) {
                        const currentMultiMatChildren = multiMatClone.getChildren()[u];

                        arrayLMHQmultiMatsInfo.push({
                          currentMultiMatChildren: currentMultiMatChildren, 
                          lengthMultiMat: multiMatClone.getChildren().length,
                          currentMesh: currentMesh,
                          multiMatClone: multiMatClone,
                          currentMultiMaterial: currentMultiMaterial
                        })

                        currentMultiMatChildren.forceCompilation(currentMesh, function() {

                          despuesDeCompile(currentMultiMatChildren);
                          // nosLargamos(multiMatClone)

                          // tempCountingCompilados = tempCountingCompilados + 1;

                          // console.log(currentMultiMatChildren.name + " Compilado - " + multiMatClone.getChildren().length + " - " + tempCountingCompilados + " - " + multiMatClone.name);

                          // if(tempCountingCompilados == multiMatClone.getChildren().length){
                          //   multiMatClone.forceCompilation(currentMesh, function () { currentMesh.setMaterialByID(currentMultiMaterial.name + "_Clone"); console.log(currentMultiMaterial.name + "_Clone Compilado")});
                          // }
                        });
                    }
                    // multiMatClone.forceCompilation(currentMesh, function () { currentMesh.setMaterialByID(currentMultiMaterial.name + "_Clone"); console.log(currentMultiMaterial.name + "_Clone Compilado")});
                }
            }
        }
    };
};



// var arrayLMHQmultiMatsInfoCounter = [];

function despuesDeCompile(currentMultiMatChildren){

  var lengthDeMultiMat;
  var lengthDeMultiMatActual = 0;
  var multiMatCloneActual;
  var currentMeshActual;
  var currentMultiMaterialActual;

  for (let t = 0; t < arrayLMHQmultiMatsInfo.length; t++) {
    if(arrayLMHQmultiMatsInfo[t]["currentMultiMatChildren"] == currentMultiMatChildren){
      lengthDeMultiMat = arrayLMHQmultiMatsInfo[t]["lengthMultiMat"];
      multiMatCloneActual = arrayLMHQmultiMatsInfo[t]["multiMatClone"];
      currentMeshActual = arrayLMHQmultiMatsInfo[t]["currentMesh"];
      currentMultiMaterialActual = arrayLMHQmultiMatsInfo[t]["currentMultiMaterial"];
    }
  }

  arrayLMHQmultiMatsInfoCounter.push(multiMatCloneActual.name);

  for (let t = 0; t < arrayLMHQmultiMatsInfoCounter.length; t++) {
    if(arrayLMHQmultiMatsInfoCounter[t] == multiMatCloneActual.name){
      lengthDeMultiMatActual = lengthDeMultiMatActual + 1;
    }
  }

  console.log(currentMultiMatChildren.name + " - " + lengthDeMultiMat + " - " + lengthDeMultiMatActual)

  if(lengthDeMultiMat == lengthDeMultiMatActual){
    multiMatCloneActual.forceCompilation(currentMeshActual, function () { 
      setTimeout(() => {
        currentMeshActual.setMaterialByID(currentMultiMaterialActual.name + "_Clone"); 
        console.log(currentMultiMaterialActual.name + "_Clone Compilado en " + currentMeshActual.name)
      }, getRandomInt(2000));
    });
  }

}


function getRandomInt(max) {
  return Math.floor(Math.random() * max + 500);
}






function cargarTexturasHQMapa(){

  assetsManager.reset();

  M_MapaBigTask = assetsManager.addTextureTask("M_MapaBigTask1", "assets/babylon/mapa/TX_D24_Mapa_Big_hq" + jpgOwebP);
  M_MapaMedTask = assetsManager.addTextureTask("M_MapaMedTask1", "assets/babylon/mapa/TX_D24_Mapa_Med_hq" + jpgOwebP);
  M_MapaSmlTask = assetsManager.addTextureTask("M_MapaSmlTask1", "assets/babylon/mapa/TX_D24_Mapa_Sml_hq" + jpgOwebP);

  M_MapaBigTask.onSuccess = function (task){
    M_MapaBigTask_ready = task.texture;
    setTimeout(() => {
      scene.getMaterialByName("M_mMapaBig").diffuseTexture = M_MapaBigTask_ready;
    }, 3000);
  }

  M_MapaMedTask.onSuccess = function (task){
    M_MapaMedTask_ready = task.texture;
    setTimeout(() => {
      scene.getMaterialByName("M_mMapaMed").diffuseTexture = M_MapaMedTask_ready;
    }, 1000);
    optimizer.start();
  }

  M_MapaSmlTask.onSuccess = function (task){
    M_MapaSmlTask_ready = task.texture;
    setTimeout(() => {
      scene.getMaterialByName("M_mMapaSml").diffuseTexture = M_MapaSmlTask_ready;
    }, 2000);
  }

  assetsManager.loadAsync();
  mostrarSpinner(true);
}












//      Optimizador, comienza cuando la escena esta lista

var opcionesOpt = new BABYLON.SceneOptimizerOptions(30, 2000);
opcionesOpt.addOptimization(new BABYLON.HardwareScalingOptimization(0, 1));
var optimizer = new BABYLON.SceneOptimizer(scene, opcionesOpt);
optimizer.targetFrameRate



















var posicionDeClipPlaneActual;

function visibilidadDeClipPlane(prender){
    if(prender){
        nodeParaClipPlane.position.y = posicionDeClipPlaneActual;
        posicionDeClipPlaneActual = nodeParaClipPlane.position.y;
    }
    else{
        posicionDeClipPlaneActual = nodeParaClipPlane.position.y;

        var animCortePlanta2 = BABYLON.Animation.CreateAndStartAnimation('f33312', nodeParaClipPlane, 'position.y', 60, 60, nodeParaClipPlane.position.y, yClipPlane, 0, ease);
        animCortePlanta2.disposeOnEnd = true;
    }
}























//      W H E N   R E A D Y     -when ready

var ubicacionSeleccionada;
var todoListo = false;

scene.executeWhenReady(function(){

  // ad();
  
  todoListo = true;

  fichaAmenidad.classList.add("hidden")
  
  fichaDepartamento.classList.add("hidden")

  scene.collisionsEnabled = true;
  arcRotCam.checkCollisions = true;
  arcRotCam.collisionRadius = new BABYLON.Vector3(5, 5, 5);
  COL_Edificio.collisionsEnabled = true;
  COL_Edificio.checkCollisions = true;

  arrayUbicacionesParaEscala = arrayUbicaciones;



  // if (window.performance) {
  //   // Gets the number of milliseconds since page load
  //   // (and rounds the result since the value must be an integer).
  //   var timeSincePageLoad = Math.round(performance.now());
  
  //   // Sends the timing hit to Google Analytics.
  //   ga('send', {
  //     hitType: 'event',
  //     eventCategory: 'Misc',
  //     eventAction: 'Load time',
  //     eventLabel: timeSincePageLoad
  //   });
  // };


  for(var i = 0; i < departamentosData.length; i++){
    var checando = departamentosData[Object.keys(departamentosData)[i]];

    if(checando[Object.keys(checando)[1]] == "Vendido"){
        scene.getMeshByName("SELfv_" + checando[Object.keys(checando)[0]]).dispose();
        scene.getMeshByName("SELfs_" + checando[Object.keys(checando)[0]]).dispose();
    }
  };

  for (var i = 0; i < scene.meshes.length; i++) {
      var currentMesh = scene.meshes[i];
      if(currentMesh.name.includes("SELfv")){
          arrayMergeMeshesSELfv.push(currentMesh);
      };
  }

  SELfv = BABYLON.Mesh.MergeMeshes(arrayMergeMeshesSELfv);
  SELfv.name = "SELfv";
  SELfv.setEnabled(false);
  SELfv.isPickable = false;


  m_Sky.onBeforeRenderObservable.add(() => {
      scene.clipPlane = null;
  })
  m_Sky.onAfterRenderObservable.add(() => {
      scene.clipPlane = clippingPlane;
  })


  WIRE.onBeforeRenderObservable.add(() => {
      scene.clipPlane = null;
  })
  WIRE.onAfterRenderObservable.add(() => {
      scene.clipPlane = clippingPlane;
  })    


  m7Ventanas.onBeforeRenderObservable.add(() => {
      scene.clipPlane2 = clippingPlane2;
  })
  m7Ventanas.onAfterRenderObservable.add(() => {
      scene.clipPlane2 = null;
  })    


  m7Ventanas2.onBeforeRenderObservable.add(() => {
      scene.clipPlane3 = clippingPlane3;
  })
  m7Ventanas2.onAfterRenderObservable.add(() => {
      scene.clipPlane3 = null;
  })        


  scene.onBeforeRenderObservable.add(function () {
      clippingPlane = new BABYLON.Plane(0, 1, 0, nodeParaClipPlane.position.y * -1);
      //scene.clipPlane = clippingPlane;

      clippingPlane2 = new BABYLON.Plane(0, 1, 0, nodeParaClipPlaneVentanas.position.y * -1);

      clippingPlane3 = new BABYLON.Plane(0, -1, 0, nodeParaClipPlaneVentanas2.position.y);

      if(paneoVerticalPermitido == "PaneoInicio"){

          arcRotCam.target.x = -18.9;
          arcRotCam.target.z = 11.9;

          if(arcRotCam.target.y < 8){
              arcRotCam.target.y = 8;
          };
          if(arcRotCam.target.y > 75){
              arcRotCam.target.y = 75;
          };  
      }
      else if(paneoVerticalPermitido == "PaneoTorreA"){

        if(arcRotCam.target.x < -13){
          arcRotCam.target.x = -13;
        };
        if(arcRotCam.target.x > 13){
            arcRotCam.target.x = 13;
        };  

        arcRotCam.target.z = 0;

        if(arcRotCam.target.y < 8){
            arcRotCam.target.y = 8;
        };
        if(arcRotCam.target.y > 75){
            arcRotCam.target.y = 75;
        };  
    }

      if(escalaAutoDeUbicaciones){
          for(var i = 0; i < arrayUbicacionesParaEscala.length; i++){
              var checando = arrayUbicacionesParaEscala[i];
              checando.scaling = new BABYLON.Vector3(
                  calcularEscalaDeUbicaciones(), 
                  calcularEscalaDeUbicaciones(), 
                  calcularEscalaDeUbicaciones())
          };    
          mMapa_Letras.scaling = new BABYLON.Vector3(
              calcularEscalaDeUbicaciones(), 
              calcularEscalaDeUbicaciones(), 
              calcularEscalaDeUbicaciones());
          if(ubicacionSeleccionada){
            ubicacionSeleccionada.scaling = new BABYLON.Vector3(
              calcularEscalaDeUbicaciones() + 1, 
              calcularEscalaDeUbicaciones() + 1, 
              calcularEscalaDeUbicaciones() + 1);  
          }
      }

      camTarInicio = new BABYLON.Vector3(-18.9, 26.75, 11.9);
  })


  // if(jsonDepartamentosCargado){

  //   for(var i = 0; i < departamentosData.length; i++){
  //     var checando = departamentosData[Object.keys(departamentosData)[i]];
  
  //     if(checando[Object.keys(checando)[1]] == "Disponible"){
  //         scene.getMeshByName("SELv_" + checando[Object.keys(checando)[0]]).material = M_SelvDisp;
  //     }
  //     else if(checando[Object.keys(checando)[1]] == "Reservado"){
  //         scene.getMeshByName("SELv_" + checando[Object.keys(checando)[0]]).material = M_SelvRese;
  //     }
  //     else{
  //         scene.getMeshByName("SELv_" + checando[Object.keys(checando)[0]]).material = M_SelvVend;
  //         scene.getMeshByName("SELs_" + checando[Object.keys(checando)[0]]).dispose();
  //     }
  //   };
  // }

  paneoVerticalPermitido = "PaneoInicio";

  comenzarExperiencia();

  assetsLightmapsHQ();
});








function comenzarExperiencia(){

  activarAutoRotate(true);

  setTimeout(() => {
    loadingScreenDiv.classList.add("loadingScreenOcultar");
    setTimeout(function(){
        loadingScreenDiv.className = "hidden";

        if(hashDepartamento && jsonDepartamentosCargado){
          setTimeout(() => {
            irHashDepartamento(); 
            aparecerBtnsIntro();
          }, 1000);
        }
        else{
          hashDepartamento = false;
          aparecerBtnsIntro();
        };

    }, 500); 
  }, 300);

  // aparecerBtnsIntro();
}


















  
//      C A M A R A S     -camaras


//      Interpolation

var ease = new BABYLON.CubicEase();
ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);



var speed = 40;
var frameCount = 90;

var speedT = 60;
var frameCountT = 60;

var animGeneralCameraTargetToPosition;
var animGeneralCameraToPosition;
    


var animateCameraTargetToPosition = function(cam, speed, frameCount, newPos) {
    var ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    animGeneralCameraTargetToPosition = BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'target', speed, frameCount, cam.target, newPos, 0, ease);
    animGeneralCameraTargetToPosition.disposeOnEnd = true;
};

var animateCameraToPosition = function(cam, speed, frameCount, newPos) {
    var ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    animGeneralCameraToPosition = BABYLON.Animation.CreateAndStartAnimation('at4', cam, 'position', speed, frameCount, cam.position, newPos, 0, ease);
    animGeneralCameraToPosition.disposeOnEnd = true;
};





var delayParaStopAnim = 1200;

function terminarAnimacionDeCamara(){
    puedeFocus = false;
    setTimeout(function(){
            puedeFocus = true;
            animGeneralCameraToPosition.stop();
            animGeneralCameraTargetToPosition.stop();
    }, delayParaStopAnim);
}





function zoomInCam(){
  var ease = new BABYLON.CubicEase();
  ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);

  var zoomInRadius = BABYLON.Animation.CreateAndStartAnimation('f3', arcRotCam, 'radius', 60, 60, arcRotCam.radius, 6.7, 0, ease);
  zoomInRadius.disposeOnEnd = true;
}

function zoomInCam2(){
var ease = new BABYLON.CubicEase();
ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);

var zoomInRadius = BABYLON.Animation.CreateAndStartAnimation('f3', arcRotCam, 'radius', 60, 60, arcRotCam.radius, 5.5, 0, ease);
zoomInRadius.disposeOnEnd = true;
}

function zoomOutCam(){
  var ease = new BABYLON.CubicEase();
  ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);

  var zoomOutRadius = BABYLON.Animation.CreateAndStartAnimation('fZoomOut', arcRotCam, 'radius', 60, 60, arcRotCam.radius, arcRotCam.radius + 20, 0, ease);
  zoomOutRadius.disposeOnEnd = true;
}

function zoomOutCam2(){
var ease = new BABYLON.CubicEase();
ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);

var zoomOutRadius2 = BABYLON.Animation.CreateAndStartAnimation('fZoomOut', arcRotCam, 'radius', 60, 60, arcRotCam.radius, 175, 0, ease);
zoomOutRadius2.disposeOnEnd = true;
}



// Nuevo Dptos Corte
// Interior FPV

var cameraFree = new BABYLON.FreeCamera("camaraFps", new BABYLON.Vector3(0, 5, -10), scene, false);
cameraFree.setTarget(BABYLON.Vector3.Zero());
cameraFree.fov = camFovFPV;
cameraFree.minZ = 0.05;
cameraFree.speed = 0;
cameraFree.invertRotation = true;
cameraFree.angularSensibility = 300;























//      A N I M A C I O N E S     -animaciones


//  Materiales alpha

function comienzaAnimParpadeo(material){

  var valorMenor = 0.5;

  animDptos = new BABYLON.Animation("animDptos", "alpha", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

  var easingFunction = new BABYLON.SineEase();
  easingFunction.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
  animDptos.setEasingFunction(easingFunction);


  var animDptosKeys = []; 

    animDptosKeys.push({
      frame: 0,
      value: valorMenor
    });

    animDptosKeys.push({
      frame: 75,
      value: 0.8
    });

    animDptosKeys.push({
      frame: 150,
      value: valorMenor
    });

  animDptos.setKeys(animDptosKeys);

  material.animations = [];
  material.animations.push(animDptos);

  var fadeInAnimParpadeo = BABYLON.Animation.CreateAndStartAnimation('f37', material, 'alpha', 60, 60, 0, valorMenor, 0, ease);

  fadeInAnimParpadeo.onAnimationEnd = function(){
      scene.beginAnimation(material, 0, 300, true);
  }
  fadeInAnimParpadeo.disposeOnEnd = true;
};





function detenerAnimParpadeo(material){
  if(material.animations == undefined){
  }
  else{
      scene.beginAnimation(material, 0, 150, true).stop()

      var fadeOutAnimParpadeo = BABYLON.Animation.CreateAndStartAnimation('f9', material, 'alpha', 120, 60, material.alpha, 0, 0, ease);

      fadeOutAnimParpadeo.disposeOnEnd = true;
  }
};









//  Meshes scale

function comienzaAnimMeshScale(mesh){

  var valorMenorVector = 6.5;
  var valorMenor = new BABYLON.Vector3(valorMenorVector, valorMenorVector, valorMenorVector);

  animMeshScale = new BABYLON.Animation("animMeshScale", "scaling", 60, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

  var easingFunction = new BABYLON.SineEase();

  easingFunction.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);

  animMeshScale.setEasingFunction(easingFunction);

  var animMeshScaleKeys = []; 

  animMeshScaleKeys.push({
    frame: 0,
    value: valorMenor
  });

  animMeshScaleKeys.push({
    frame: 50,
    value: new BABYLON.Vector3(7.5, 7.5, 7.5)
  });

  animMeshScaleKeys.push({
    frame: 100,
    value: valorMenor
  });

  animMeshScale.setKeys(animMeshScaleKeys);

  mesh.animations = [];
  mesh.animations.push(animMeshScale);

    scene.beginAnimation(mesh, 0, 100, true);

};






function detenerAnimMeshScale(mesh){
  if(mesh.animations == undefined){
  }
  else{
      scene.beginAnimation(mesh, 0, 100, true).stop()

      var fadeOutAnimMeshScale = BABYLON.Animation.CreateAndStartAnimation('f9', mesh, 'scaling', 120, 60, mesh.scaling, new BABYLON.Vector3(7, 7, 7), 0, ease);

      fadeOutAnimMeshScale.disposeOnEnd = true;
  }
};












//  Meshes scale Caminar

function comienzaAnimMeshScaleCaminar(mesh){

  var valorMenorVector = 2;
  var valorMenor = new BABYLON.Vector3(valorMenorVector, valorMenorVector, valorMenorVector);

  animMeshScale = new BABYLON.Animation("animMeshScale", "scaling", 60, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

  var easingFunction = new BABYLON.SineEase();

  easingFunction.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);

  animMeshScale.setEasingFunction(easingFunction);

  var animMeshScaleKeys = []; 

  animMeshScaleKeys.push({
    frame: 0,
    value: valorMenor
  });

  animMeshScaleKeys.push({
    frame: 50,
    value: new BABYLON.Vector3(2.5, 2.5, 2.5)
  });

  animMeshScaleKeys.push({
    frame: 100,
    value: valorMenor
  });

  animMeshScale.setKeys(animMeshScaleKeys);

  mesh.animations = [];
  mesh.animations.push(animMeshScale);

    scene.beginAnimation(mesh, 0, 100, true);

};






function detenerAnimMeshScaleCaminar(mesh){
  if(mesh.animations == undefined){
  }
  else{
      scene.beginAnimation(mesh, 0, 100, true).stop()

      var fadeOutAnimMeshScale = BABYLON.Animation.CreateAndStartAnimation('f9', mesh, 'scaling', 120, 60, mesh.scaling, new BABYLON.Vector3(2, 2, 2), 0, ease);

      fadeOutAnimMeshScale.disposeOnEnd = true;
  }
};











































//      P R O G R A M A C I O N   D E   B A B Y L O N  J S   D E   P R O Y E C T O     -programacion de babylon js de proyecto



var primeraVezSelDpto = true;

function cookiePrimeraVezDpto() {
  if (!document.cookie.split('; ').find(row => row.startsWith('cookiePrimeraVezDpto'))) {
    primeraVezSelDpto = true;
  }
  else{
    primeraVezSelDpto = false;
  }
}
cookiePrimeraVezDpto();









function seleccionarDepartamento(){

  activarAutoRotate(false);

  SCOLf.setEnabled(true);

  if(SELfhSeleccionado){
      var animaMat4 = BABYLON.Animation.CreateAndStartAnimation('f3303', SELfhSeleccionado.material, 'alpha', 80, 60, SELfhSeleccionado.material.alpha, 0, 0, ease);
      animaMat4.disposeOnEnd = true;     
      animaMat4.onAnimationEnd = function(){   
          SELfhSeleccionado.setEnabled(false);
      }
  }

  SELfv.setEnabled(true);
  for (var i = 0; i < scene.meshes.length; i++) {
      var currentMesh = scene.meshes[i];
      if(currentMesh.name.includes("SELfs")){
          currentMesh.setEnabled(true);
      }
  };

  comienzaAnimParpadeo(M_SELfv);

  paneoVerticalPermitido = false;
  arcRotCam.panningSensibility = 0;

  //No se ejecutaban las demas animaciones si target no era la primera
  var animMov7 = BABYLON.Animation.CreateAndStartAnimation('f29', arcRotCam, 'target', 40, 60, arcRotCam.target, camTarDptos, 0, ease);




  //Rotacion alpha
  var alphaTemporal1;
  var alphaTemporal2;

  arcRotCam.alpha = arcRotCam.alpha%(Math.PI*2);

  if(arcRotCam.alpha < 0){
    if(arcRotCam.alpha > -(Math.PI)){
      arcRotCam.alpha = arcRotCam.alpha%(Math.PI)+(Math.PI*2);
    }    
    else{
      arcRotCam.alpha = arcRotCam.alpha%(Math.PI)+(Math.PI);
    }
  };

  if(arcRotCam.alpha < 2.5){
    alphaTemporal1 = 0.77;
    alphaTemporal2 = 4.2;
  }
  else{
    alphaTemporal1 = 4.2; 
    alphaTemporal2 = 0.77; 
  };

  if(primeraVezSelDpto){
    primeraVezSelDpto = false;

    var animMov9 = BABYLON.Animation.CreateAndStartAnimation('f99', arcRotCam, 'alpha', 40, 60, normalizarAlphaCamera(arcRotCam, alphaTemporal1, true), normalizarAlphaCamera(arcRotCam, alphaTemporal1, false), 0, ease);
    animMov9.disposeOnEnd = true;   
    animMov9.onAnimationEnd = function(){

      setTimeout(() => {
        var animMov8 = BABYLON.Animation.CreateAndStartAnimation('f99', arcRotCam, 'alpha', 40, 60, normalizarAlphaCamera(arcRotCam, alphaTemporal2, true), normalizarAlphaCamera(arcRotCam, alphaTemporal2, false), 0, ease);
        animMov8.disposeOnEnd = true;   
        animMov8.onAnimationEnd = function(){
          terminanAnimacionesSelDpto();
        }
      }, 200);
    }
  }
  else{
    var animMov8 = BABYLON.Animation.CreateAndStartAnimation('f99', arcRotCam, 'alpha', 40, 60, normalizarAlphaCamera(arcRotCam, alphaTemporal1, true), normalizarAlphaCamera(arcRotCam, alphaTemporal1, false), 0, ease);
    animMov8.disposeOnEnd = true;   
    animMov8.onAnimationEnd = function(){
      terminanAnimacionesSelDpto();
    }
  };


  var animMov6 = BABYLON.Animation.CreateAndStartAnimation('f8', arcRotCam, 'radius', 40, 60, arcRotCam.radius, 166, 0, ease);
  var animMov5 = BABYLON.Animation.CreateAndStartAnimation('f9', arcRotCam, 'beta', 40, 60, arcRotCam.beta, 1.42, 0, ease);

  animMov5.disposeOnEnd = true;
  animMov6.disposeOnEnd = true;
  animMov7.disposeOnEnd = true;  
 

  function terminanAnimacionesSelDpto(){
    paneoVerticalPermitido = "PaneoTorreA";
    arcRotCam.panningSensibility = camPanningSens;

    clickParaSeleccionarDepartamento();
    mostrarBtns("btnsSeleccionaDepartamento");     
  }
}



















function salirDeSeleccionarDepartamento(){

  scene.onPointerObservable.remove(observerSeleccionarDepartamento);

  var animMov7 = BABYLON.Animation.CreateAndStartAnimation('f11', arcRotCam, 'target', 60, 60, arcRotCam.target, camTarInicio, 0, ease);
  var animMov5 = BABYLON.Animation.CreateAndStartAnimation('f9', arcRotCam, 'beta', 60, 60, arcRotCam.beta, 1.42, 0, ease);
  var animMov6 = BABYLON.Animation.CreateAndStartAnimation('f8', arcRotCam, 'radius', 60, 60, arcRotCam.radius, 200, 0, ease);
  
  alphaRandom = cambiarNegativoRandom(0.5);
  var animMov8 = BABYLON.Animation.CreateAndStartAnimation('f99', arcRotCam, 'alpha', 60, 60, arcRotCam.alpha, arcRotCam.alpha + alphaRandom, 0, ease);
  animMov5.disposeOnEnd = true;
  animMov6.disposeOnEnd = true;
  animMov7.disposeOnEnd = true;
  animMov8.disposeOnEnd = true;

  SCOLf.setEnabled(false);

  detenerAnimParpadeo(M_SELfv);

  var animaMat1 = BABYLON.Animation.CreateAndStartAnimation('f300', M_SELfv, 'alpha', 70, 60, M_SELfv.alpha, 0, 0, ease);
  animaMat1.disposeOnEnd = true;
  animaMat1.onAnimationEnd = function(){
      for(var i = 0; i < scene.meshes.length; i++){
          if(scene.meshes[i].name.includes("SELfs") || scene.meshes[i].name.includes("SELfv")){
          scene.meshes[i].setEnabled(false);
          };
      };

      mostrarBtns("btnsIniciales");

      activarAutoRotate(true);      
  };

  
};




















var alphaSELfh = 0.5;
var departamentoDisponibleOReservado;
var departamentoSeleccionado;
var SELfhSeleccionado;
var observerSeleccionarDepartamento;


function clickParaSeleccionarDepartamento(){

  document.cookie = "cookiePrimeraVezDpto=existe; SameSite=None; Secure";

  observerSeleccionarDepartamento = scene.onPointerObservable.add((pointerInfo) => {
      switch (pointerInfo.type) {
          case BABYLON.PointerEventTypes.POINTERTAP:
              var rayFPS = scene.createPickingRay(scene.pointerX, scene.pointerY, BABYLON.Matrix.Identity(), arcRotCam);	
              var hitFPS = scene.pickWithRay(rayFPS);
              
              if(hitFPS.pickedMesh.name.includes("SELfs")){
                  
                scene.onPointerObservable.remove(observerSeleccionarDepartamento);   

                departamentoSeleccionado = hitFPS.pickedMesh.name.replace("SELfs_", "");

                paneoVerticalPermitido = false;
                arcRotCam.panningSensibility = 0;

                if(hash){
                  if(hashDepartamento) {
                    window.location.hash = window.location.hash.replace(window.location.hash.replace(/[^\d]/g, ''), departamentoSeleccionado);

                    hashDepartamento = departamentoSeleccionado;
                  }
                  else{
                    if(hashReferencia){
                      if(hashReferencia !== "predeterminado"){
                        window.location.hash = hash.split(":")[0] + departamentoSeleccionado + ":" + hash.split(":")[1];

                        hashDepartamento = departamentoSeleccionado;
                      }
                      else{
                        window.location.hash = window.location.hash + departamentoSeleccionado;

                        hashDepartamento = departamentoSeleccionado;
                      }
                    }
                  }
                }
                else{
                  window.location.hash = departamentoSeleccionado;

                  hashDepartamento = departamentoSeleccionado;
                }
                actualizarContactoWhatsapp();


                // N    PARA COLOCAR NODES, DE SELfh y asignar var de SELfh
                if(departamentoSeleccionado.includes("24")){
                    SELfhSeleccionado = scene.getMeshByName("SELfh_PH_" + departamentoSeleccionado.substr(departamentoSeleccionado.length - 1))                    
                }
                else{
                    nodeDptos.position.y = (distAlturaPisoAPiso * parseInt(departamentoSeleccionado.slice(0, -2)) - (distAlturaPisoAPiso * 3));
                    SELfhSeleccionado = scene.getMeshByName("SELfh_Dptos_" + departamentoSeleccionado.substr(departamentoSeleccionado.length - 1))
                };

                SELfhSeleccionado.setEnabled(true);
                var animaMat4 = BABYLON.Animation.CreateAndStartAnimation('f303', SELfhSeleccionado.material, 'alpha', 70, 60, SELfhSeleccionado.material.alpha, alphaSELfh, 0, ease);
                animaMat4.disposeOnEnd = true;   


                detenerAnimParpadeo(M_SELfv);

                var animaMat1 = BABYLON.Animation.CreateAndStartAnimation('f300', M_SELfv, 'alpha', 70, 60, M_SELfv.alpha, 0, 0, ease);
                animaMat1.disposeOnEnd = true;
                animaMat1.onAnimationEnd = function(){
                    for(var i = 0; i < scene.meshes.length; i++){
                        if(scene.meshes[i].name.includes("SELfs") || scene.meshes[i].name.includes("SELfv")){
                        scene.meshes[i].setEnabled(false);
                        };
                    };
                };


                // Animaciones de camara
                tempTargetSELfh = new BABYLON.Vector3(
                    SELfhSeleccionado.getBoundingInfo().boundingBox.centerWorld.x,
                    (distAlturaPisoAPiso * parseInt(departamentoSeleccionado.slice(0, -2))),
                    SELfhSeleccionado.getBoundingInfo().boundingBox.centerWorld.z
                );

                switch (parseInt(departamentoSeleccionado.substr(-1))){
                    case 1: tempAlphaSELfh = 5.15; break;
                    case 2: tempAlphaSELfh = 4.3; break;
                    case 3: tempAlphaSELfh = 4; break;
                    case 4: tempAlphaSELfh = 0.88; break;
                    case 5: tempAlphaSELfh = 1.2; break;
                    case 6: tempAlphaSELfh = 1.54; break;
                    case 7: tempAlphaSELfh = 1.27; break;
                    default:
                };

                var animTargetDpto = BABYLON.Animation.CreateAndStartAnimation('f45273', arcRotCam, 'target', 40, 60, arcRotCam.target, tempTargetSELfh, 0, ease);

                alphaRandom = cambiarNegativoRandom(0.15);
                alphaTemporal = tempAlphaSELfh + alphaRandom;
                var animMov81 = BABYLON.Animation.CreateAndStartAnimation('f312', arcRotCam, 'alpha', 40, 60, normalizarAlphaCamera(arcRotCam, alphaTemporal, true), normalizarAlphaCamera(arcRotCam, alphaTemporal, false), 0, ease);

                var animRadiusDpto = BABYLON.Animation.CreateAndStartAnimation('f3454', arcRotCam, 'radius', 40, 60, arcRotCam.radius, 45, 0, ease);
                var animBetaDpto = BABYLON.Animation.CreateAndStartAnimation('f34554', arcRotCam, 'beta', 40, 60, arcRotCam.beta, 1.45, 0, ease);
                animRadiusDpto.disposeOnEnd = true;   
                animMov81.disposeOnEnd = true;  
                animTargetDpto.disposeOnEnd = true;                  
                animBetaDpto.disposeOnEnd = true;                  
                

                nombreDepartamento.innerHTML = departamentoSeleccionado;

                //ANALYTICS - Departamento y prototipo seleccionado
                  analyticsDepartamentoSeleccionado();

                  ocultarBtns("btnsSeleccionaDepartamento");

                  setTimeout(() => {
                    mostrarBtns("UIdepartamentoSeleccionado");
                  }, 1150);

                             
              };
              break;
      };
  });
};



















var varNivelAbreviacion;
var varNivelAbreviacionSELp;
var VENDtemp;
var VENDsel;
var PERpSel;
var nivelDeDepartamentoSeleccionado;
var arraySELp;
var SELpSel;
var tempTargetVENDsel;
var vistaEnPlanta = false;


var distTopCorteAPiso = 3.4;
var distAlturaPisoAPiso = 3.3;
var distExtraTopCorte = 0.14;

function verPlantaDepartamentos(){

    SCOLf.setEnabled(false);
    COL_Edificio.setEnabled(false);

    var noDelaySiBetaAlto = 0;


    // Ocultar SELfh
    var animaMat4 = BABYLON.Animation.CreateAndStartAnimation('f303', SELfhSeleccionado.material, 'alpha', 70, 60, SELfhSeleccionado.material.alpha, 0, 0, ease);
    animaMat4.disposeOnEnd = true;  
    animaMat4.onAnimationEnd = function(){
        SELfhSeleccionado.setEnabled(false);  
    }


    nivelDeDepartamentoSeleccionado = departamentoSeleccionado.slice(0, -2);


    // Hasta donde baja el clipping plane
    if(nivelDeDepartamentoSeleccionado == "24"){
        clippingValue = 82.64;
    }
    else{
        clippingValue = (parseInt(departamentoSeleccionado.slice(0, -2)) * distAlturaPisoAPiso) - distAlturaPisoAPiso + (distAlturaPisoAPiso * 2) + distExtraTopCorte;
    }


    // Velocidad con la que baja el clipping plane
    function calcularVelocidadDeCorte(){
        if(nivelDeDepartamentoSeleccionado == "24"){
            return 60;
        }
        else{
            var input = clippingValue;
            var inputStart = nodeParaClipPlane.position.y;
            var inputEnd = 16;
            var outputStart = 70;
            var outputEnd = 40;
            var output = outputStart + ((outputEnd - outputStart) / (inputEnd - inputStart)) * (input - inputStart)
            console.log(output);
            if(output < 40){
                output = 40;
            }
            return output
        }
    }


    // Animaciones de camara
    var animRadiusDpto = BABYLON.Animation.CreateAndStartAnimation('f3', arcRotCam, 'radius', 40, 60, arcRotCam.radius, 187, 0, ease);
    animRadiusDpto.disposeOnEnd = true;

    if(arcRotCam.beta < 1.5){
        var animBetaDpto = BABYLON.Animation.CreateAndStartAnimation('f3', arcRotCam, 'beta', 60, 60, arcRotCam.beta, camUpperBeta, 0, ease);
        animBetaDpto.disposeOnEnd = true;
        noDelaySiBetaAlto = 500;
    }

            


    if(nivelDeDepartamentoSeleccionado == "24"){
      m4PH.setEnabled(true);
      varNivelAbreviacion = "PHpb";
      varNivelAbreviacionSELp = "PHpb";
    }
    else{
      m3Dpto.setEnabled(true);
      varNivelAbreviacion = "Dptos";
      varNivelAbreviacionSELp = "Dptos";
      if(nivelDeDepartamentoSeleccionado == "3"){
        m5AnexoNormal.setEnabled(false);
        m6AnexoAmenidades.setEnabled(true);
      }
      else{
        m5AnexoNormal.setEnabled(true);
        m6AnexoAmenidades.setEnabled(false);
      }
    }


    setTimeout(() => {

        if(nivelDeDepartamentoSeleccionado !== "24"){
            WIRE.setEnabled(true);
            var animWire = BABYLON.Animation.CreateAndStartAnimation('5477', WIRE, 'material.alpha', 90, 60, 0, 1, 0, ease);
                animWire.disposeOnEnd = true;
        }


        // Clipping planes
        var animCortePlanta2 = BABYLON.Animation.CreateAndStartAnimation('f332', nodeParaClipPlaneVentanas, 'position.y', calcularVelocidadDeCorte(), 60, nodeParaClipPlaneVentanas.position.y, clippingValue - distTopCorteAPiso, 0, ease);
        animCortePlanta2.disposeOnEnd = true;

        var animCortePlanta1 = BABYLON.Animation.CreateAndStartAnimation('f33312', nodeParaClipPlane, 'position.y', calcularVelocidadDeCorte(), 60, nodeParaClipPlane.position.y, clippingValue, 0, ease);
        animCortePlanta1.disposeOnEnd = true;
        animCortePlanta1.onAnimationEnd = function(){

            arcRotCam.lowerRadiusLimit = camLowerRadiusPlanta;

            // Ocultar WIRE
            if(nivelDeDepartamentoSeleccionado !== "24"){
                var animWire1 = BABYLON.Animation.CreateAndStartAnimation('8775', WIRE, 'material.alpha', 60, 60, 1, 0, 0, ease);
                animWire1.disposeOnEnd = true;
                animWire1.onAnimationEnd = function(){
                    WIRE.setEnabled(false);
                }
            }

            // Animaciones de camara
            VENDsel = scene.getMeshByName("VEND_" + varNivelAbreviacion + "_" + departamentoSeleccionado.substr(-1));

            tempTargetVENDsel = new BABYLON.Vector3(
                VENDsel.getBoundingInfo().boundingBox.centerWorld.x,
                (distAlturaPisoAPiso * parseInt(departamentoSeleccionado.slice(0, -2)) - distAlturaPisoAPiso) + 3,
                VENDsel.getBoundingInfo().boundingBox.centerWorld.z
            );
            var animtargetDpto1 = BABYLON.Animation.CreateAndStartAnimation('f34', arcRotCam, 'target', 60, 60, arcRotCam.target, tempTargetVENDsel, 0, ease);       
            var animRadiusDpto1 = BABYLON.Animation.CreateAndStartAnimation('f4', arcRotCam, 'radius', 60, 60, arcRotCam.radius, 45, 0, ease);          
            var animFovDpto1 = BABYLON.Animation.CreateAndStartAnimation('f432', arcRotCam, 'fov', 60, 60, arcRotCam.fov, camFovPlanta, 0, ease);
            alphaRandom = cambiarNegativoRandom(0.5);
            var animAlphaDpto1 = BABYLON.Animation.CreateAndStartAnimation('f99', arcRotCam, 'alpha', 60, 60, arcRotCam.alpha, arcRotCam.alpha + alphaRandom, 0, ease);
            var animBetaDpto1 = BABYLON.Animation.CreateAndStartAnimation('f10', arcRotCam, 'beta', 60, 60, arcRotCam.beta, 0.4, 0, ease);
            animRadiusDpto1.disposeOnEnd = true;
            animtargetDpto1.disposeOnEnd = true;              
            animFovDpto1.disposeOnEnd = true;
            animAlphaDpto1.disposeOnEnd = true;              
            animBetaDpto1.disposeOnEnd = true;
            animBetaDpto1.onAnimationEnd = function(){

                arcRotCam.upperBetaLimit = camUpperBetaPlanta;                


                // Merge y mostrar VEND
                arrayMergeMeshesVEND = [];

                for(var i = 0; i < departamentosVendidos.length; i++){

                    var checando = departamentosVendidos[i];
                    if(checando.slice(0, -2) == nivelDeDepartamentoSeleccionado){
                        arrayMergeMeshesVEND.push(scene.getMeshByName("VEND_" + varNivelAbreviacion + "_" + checando.substr(-1)));
                    }
                };

                if(arrayMergeMeshesVEND.length > 0){
                    VENDtemp = BABYLON.Mesh.MergeMeshes(arrayMergeMeshesVEND, false);
                    VENDtemp.name = "VENDtemp";

                    var animVEND = BABYLON.Animation.CreateAndStartAnimation('87575', VENDtemp, 'material.alpha', 40, 60, 0, 0.75, 0, ease);
                    animVEND.disposeOnEnd = true;
                }


                arraySELp = [];

                for(var i = 0; i < departamentosDisponibles.length; i++){

                    var checando = departamentosDisponibles[i];
                    if(checando.slice(0, -2) == nivelDeDepartamentoSeleccionado){
                        currentMesh = scene.getMeshByName("SELp_" + varNivelAbreviacionSELp + "_" + checando.substr(-1));
                        arraySELp.push(currentMesh);
                        currentMesh.setEnabled(true);
                        if(currentMesh.name.substr(-1) == departamentoSeleccionado.substr(-1)){
                            SELpSel = currentMesh;
                        }
                    }
                };


                // Aparece PERp
                PERpSel = scene.getMeshByName("PERp_" + varNivelAbreviacion + "_" + departamentoSeleccionado.substr(-1));
                PERpSel.setEnabled(true);
                var animPERp = BABYLON.Animation.CreateAndStartAnimation('875575', PERpSel, 'material.alpha', 40, 60, 0, 0.75, 0, ease);
                animPERp.disposeOnEnd = true;

                vistaEnPlanta = true;


                clickParaSeleccionarDepartamentoEnPlanta();

                if(departamentoSeleccionado.includes("24")){
                  btnVerPlantaAlta.classList.remove("hidden");
                };             
                mostrarBtns("UIdepartamentoSeleccionado");
                
                activarAutoRotate(true);
            };
        };
    }, noDelaySiBetaAlto);

}




















function salirDeVerPlantaDepartamentos(){

  scene.onPointerObservable.remove(observerSeleccionarDepartamentoEnPlanta);

  fade();
  setTimeout(() => {

    m5AnexoNormal.setEnabled(false);
    m6AnexoAmenidades.setEnabled(false);

    activarAutoRotate(false);

    plantaAltaPenthhouseActiva = false;


    for (var i = 0; i < scene.meshes.length; i++) {
        var currentMesh = scene.meshes[i];
        if(currentMesh.name.includes("SELp_")){
            currentMesh.setEnabled(false);
        }
    }


    SCOLf.setEnabled(true);

    if(VENDtemp){
      VENDtemp.dispose();
    }


    PERpSel.setEnabled(false);
    PERpSel.material.alpha = 0;

    SELfhSeleccionado.setEnabled(true);
    SELfhSeleccionado.material.alpha = alphaSELfh;


    tempTargetSELfh = new BABYLON.Vector3(
        SELfhSeleccionado.getBoundingInfo().boundingBox.centerWorld.x,
        (distAlturaPisoAPiso * parseInt(departamentoSeleccionado.slice(0, -2))),
        SELfhSeleccionado.getBoundingInfo().boundingBox.centerWorld.z
    );
    arcRotCam.target = tempTargetSELfh;

    switch (parseInt(departamentoSeleccionado.substr(-1))){
        case 1: tempAlphaSELfh = 5.15; break;
        case 2: tempAlphaSELfh = 4.3; break;
        case 3: tempAlphaSELfh = 4; break;
        case 4: tempAlphaSELfh = 0.88; break;
        case 5: tempAlphaSELfh = 1.2; break;
        case 6: tempAlphaSELfh = 1.97; break;
        case 7: tempAlphaSELfh = 1.27; break;
        default:
    };
    arcRotCam.alpha = tempAlphaSELfh;

    arcRotCam.upperBetaLimit = camUpperBeta;
    arcRotCam.lowerRadiusLimit = camLowerRadiusInicio;    
    arcRotCam.fov = camFovInicio;
    arcRotCam.beta = 1.45;
    arcRotCam.radius = 30;   


    nodeParaClipPlane.position.y = yClipPlane;     
    nodeParaClipPlaneVentanas.position.y = yClipPlane;     


    if(nivelDeDepartamentoSeleccionado == "24"){
      m4PH.setEnabled(false);
    }
    else{
      m3Dpto.setEnabled(false);
    }

    setTimeout(() => {
      
      fade();
        setTimeout(() => {

          vistaEnPlanta = false;

          COL_Edificio.setEnabled(true);
          var animRadiusDpto1 = BABYLON.Animation.CreateAndStartAnimation('f74', arcRotCam, 'radius', 30, 60, arcRotCam.radius, 75, 0, ease);          
          animRadiusDpto1.disposeOnEnd = true;    

          alphaRandom = cambiarNegativoRandom(0.25);
          var animAlphaDpto1 = BABYLON.Animation.CreateAndStartAnimation('f99', arcRotCam, 'alpha', 30, 60, arcRotCam.alpha, arcRotCam.alpha + alphaRandom, 0, ease);  
          animAlphaDpto1.disposeOnEnd = true;  
          animAlphaDpto1.onAnimationEnd = function(){
            mostrarBtns("UIdepartamentoSeleccionado");
          }   

          if(departamentoSeleccionado.includes("24")){
            btnVerPlantaBaja.classList.add("hidden");
            btnVerPlantaAlta.classList.add("hidden");
          }    

        }, 500);
    }, 100);

  }, duracionDeFade);
}



















var observerSeleccionarDepartamentoEnPlanta;

function clickParaSeleccionarDepartamentoEnPlanta(){
  observerSeleccionarDepartamentoEnPlanta = scene.onPointerObservable.add((pointerInfo) => {
      switch (pointerInfo.type) {
          case BABYLON.PointerEventTypes.POINTERTAP:
              var rayFPS = scene.createPickingRay(scene.pointerX, scene.pointerY, BABYLON.Matrix.Identity(), arcRotCam);	
              var hitFPS = scene.pickWithRay(rayFPS);
              
            // Click para enfocar a zona de dpto seleccionado
            console.log(hitFPS.pickedMesh.name + " normal = " + hitFPS.getNormal())
            if(hitFPS.pickedMesh == SELpSel && hitFPS.getNormal().y > 0.9){

                scene.onPointerObservable.remove(observerSeleccionarDepartamentoEnPlanta);

                var pickedPointModificado = new BABYLON.Vector3(hitFPS.pickedPoint.x, tempTargetVENDsel.y, hitFPS.pickedPoint.z);

                var animtargetDpto = BABYLON.Animation.CreateAndStartAnimation('f33', arcRotCam, 'target', 60, 60, arcRotCam.target, pickedPointModificado, 0, ease);
                var animBetaDpto = BABYLON.Animation.CreateAndStartAnimation('f3', arcRotCam, 'beta', 60, 60, arcRotCam.beta, 0.4, 0, ease);
                alphaRandom = cambiarNegativoRandom(0.25);
                var animAlphaDpto1 = BABYLON.Animation.CreateAndStartAnimation('f99', arcRotCam, 'alpha', 60, 60, arcRotCam.alpha, arcRotCam.alpha + alphaRandom, 0, ease);
                animAlphaDpto1.disposeOnEnd = true;
                animBetaDpto.disposeOnEnd = true;
                animtargetDpto.disposeOnEnd = true;                                  
                animtargetDpto.onAnimationEnd = function(){
                  clickParaSeleccionarDepartamentoEnPlanta();
                }                               
            };


            if(hitFPS.pickedMesh.name.includes("SELp") && hitFPS.pickedMesh !== SELpSel){

              scene.onPointerObservable.remove(observerSeleccionarDepartamentoEnPlanta);

              ocultarBtns("UIdepartamentoSeleccionado");

                var pickedPointModificado = new BABYLON.Vector3(
                    hitFPS.pickedMesh.getBoundingInfo().boundingBox.centerWorld.x,
                    tempTargetVENDsel.y, 
                    hitFPS.pickedMesh.getBoundingInfo().boundingBox.centerWorld.z);

                setTimeout(() => {
                  var animRadiusDpto = BABYLON.Animation.CreateAndStartAnimation('f32ddq34', arcRotCam, 'radius', 60, 60, arcRotCam.radius, 45, 0, ease);
                  animRadiusDpto.disposeOnEnd = true;  
                }, 0);

                var animtargetDpto = BABYLON.Animation.CreateAndStartAnimation('f33', arcRotCam, 'target', 60, 60, arcRotCam.target, pickedPointModificado, 0, ease);
                var animBetaDpto = BABYLON.Animation.CreateAndStartAnimation('f3', arcRotCam, 'beta', 60, 60, arcRotCam.beta, 0.4, 0, ease);
                alphaRandom = cambiarNegativoRandom(0.5);
                var animAlphaDpto1 = BABYLON.Animation.CreateAndStartAnimation('f99', arcRotCam, 'alpha', 60, 60, arcRotCam.alpha, arcRotCam.alpha + alphaRandom, 0, ease);

                animAlphaDpto1.disposeOnEnd = true;
                animtargetDpto.disposeOnEnd = true;    
                animBetaDpto.disposeOnEnd = true;   

                animBetaDpto.onAnimationEnd = function(){

                  nombreDepartamento.innerHTML = departamentoSeleccionado;
                  hashDepartamento = departamentoSeleccionado;
                  actualizarHash();

                  mostrarBtns("UIdepartamentoSeleccionado");
                  clickParaSeleccionarDepartamentoEnPlanta();
                }                                       


                departamentoSeleccionado = nivelDeDepartamentoSeleccionado + "0" + hitFPS.pickedMesh.name.substr(-1);

                SELpSel = scene.getMeshByName("SELp_" + varNivelAbreviacionSELp + "_" + hitFPS.pickedMesh.name.substr(-1))


                // Aparece PERp
                PERpSel.setEnabled(false);
                PERpSel = scene.getMeshByName("PERp_" + varNivelAbreviacion + "_" + departamentoSeleccionado.substr(-1));
                PERpSel.setEnabled(true);
                  

                SELfhSeleccionado.setEnabled(false);
                // N    PARA COLOCAR NODES, DE SELfh y asignar var de SELfh
                if(departamentoSeleccionado.includes("24")){
                    SELfhSeleccionado = scene.getMeshByName("SELfh_PH_" + departamentoSeleccionado.substr(departamentoSeleccionado.length - 1))                    
                }
                else{
                    SELfhSeleccionado = scene.getMeshByName("SELfh_Dptos_" + departamentoSeleccionado.substr(departamentoSeleccionado.length - 1))
                };


 


                // ANALYTICS - Departamento y prototipo seleccionado

                  analyticsDepartamentoSeleccionado();


                  // ocultarBtns("btnsSeleccionaDepartamento");

                  // setTimeout(() => {
                  //   mostrarBtns("UIdepartamentoSeleccionado");
                  // }, 550);
                  
            };

            break;
      };
  });
};




















var plantaAltaPenthhouseActiva = false;


function verPlantaAltaPenthouse(){

  fade()
  setTimeout(() => {
    alturaDeCorte = 85.95;
    alturaDePiso = 83.3;
    alturaFpsEnNivel = alturaDePiso + alturaFps;    

    if(VENDtemp){
      VENDtemp.dispose();
    }

    varNivelAbreviacion = "PHpa"
    varNivelAbreviacionSELp = "PHpa"

    plantaAltaPenthhouseActiva = true;

    // Aparece PERp
    PERpSel.setEnabled(false);
    PERpSel = scene.getMeshByName("PERp_PHpa_" + departamentoSeleccionado.substr(-1));
    PERpSel.setEnabled(true);
        
    VENDsel = scene.getMeshByName("VEND_PHpa_" + departamentoSeleccionado.substr(-1));

    tempTargetVENDsel = new BABYLON.Vector3(
        VENDsel.getBoundingInfo().boundingBox.centerWorld.x,
        alturaDePiso + 0.75,
        VENDsel.getBoundingInfo().boundingBox.centerWorld.z
    );

    arcRotCam.target = tempTargetVENDsel;
    arcRotCam.beta = 0.64;
    arcRotCam.radius = 45;

    // Merge y mostrar VEND
    arrayMergeMeshesVEND = [];

    for(var i = 0; i < departamentosVendidos.length; i++){

        var checando = departamentosVendidos[i];
        if(checando.slice(0, -2) == nivelDeDepartamentoSeleccionado){
            arrayMergeMeshesVEND.push(scene.getMeshByName("VEND_PHpa_" + checando.substr(-1)));
        }
    };

    if(arrayMergeMeshesVEND.length > 0){
        VENDtemp = BABYLON.Mesh.MergeMeshes(arrayMergeMeshesVEND, false);
        VENDtemp.name = "VENDtemp";
    }


    for (var i = 0; i < arraySELp.length; i++) {
        arraySELp[i].setEnabled(false);
    }  

    arraySELp = [];

    for(var i = 0; i < departamentosDisponibles.length; i++){

        var checando = departamentosDisponibles[i];
        if(checando.slice(0, -2) == nivelDeDepartamentoSeleccionado){
            currentMesh = scene.getMeshByName("SELp_PHpa_" + checando.substr(-1));
            arraySELp.push(currentMesh);
            currentMesh.setEnabled(true);
            if(currentMesh.name.substr(-1) == departamentoSeleccionado.substr(-1)){
                SELpSel = currentMesh;
                console.log(SELpSel.name)
            }
        }
    };

    nodeParaClipPlaneVentanas.position.y = 80 - 0.05;   //Altura del nivel de piso de pb menos algo mas
    nodeParaClipPlane.position.y = alturaDeCorte;

    setTimeout(() => {
      btnVerPlantaBaja.classList.remove("hidden");
      btnVerPlantaAlta.classList.add("hidden");
      mostrarBtns("UIdepartamentoSeleccionado");
      fade();
    }, 100);

  }, duracionDeFade);

}



















function verPlantaBajaPenthouse(){

  fade()
  setTimeout(() => {
    alturaDeCorte = 82.64;
    alturaDePiso = 80;
    alturaFpsEnNivel = alturaDePiso + alturaFps;

    if(VENDtemp){
      VENDtemp.dispose();
    }

    varNivelAbreviacion = "PHpb"
    varNivelAbreviacionSELp = "PHpb"

    plantaAltaPenthhouseActiva = false;

    // Aparece PERp
    PERpSel.setEnabled(false);
    PERpSel = scene.getMeshByName("PERp_PHpb_" + departamentoSeleccionado.substr(-1));
    PERpSel.setEnabled(true);
        
    VENDsel = scene.getMeshByName("VEND_PHpb_" + departamentoSeleccionado.substr(-1));

    tempTargetVENDsel = new BABYLON.Vector3(
        VENDsel.getBoundingInfo().boundingBox.centerWorld.x,
        (distAlturaPisoAPiso * parseInt(departamentoSeleccionado.slice(0, -2)) - distAlturaPisoAPiso) + 3,
        VENDsel.getBoundingInfo().boundingBox.centerWorld.z
    );

    arcRotCam.target = tempTargetVENDsel;
    arcRotCam.beta = 0.64;
    arcRotCam.radius = 45;

    // Merge y mostrar VEND
    arrayMergeMeshesVEND = [];

    for(var i = 0; i < departamentosVendidos.length; i++){

        var checando = departamentosVendidos[i];
        if(checando.slice(0, -2) == nivelDeDepartamentoSeleccionado){
            arrayMergeMeshesVEND.push(scene.getMeshByName("VEND_PHpb_" + checando.substr(-1)));
        }
    };

    if(arrayMergeMeshesVEND.length > 0){
        VENDtemp = BABYLON.Mesh.MergeMeshes(arrayMergeMeshesVEND, false);
        VENDtemp.name = "VENDtemp";
    }


    for (var i = 0; i < arraySELp.length; i++) {
        arraySELp[i].setEnabled(false);
    }  

    arraySELp = [];

    for(var i = 0; i < departamentosDisponibles.length; i++){

        var checando = departamentosDisponibles[i];
        if(checando.slice(0, -2) == nivelDeDepartamentoSeleccionado){
            currentMesh = scene.getMeshByName("SELp_PHpb_" + checando.substr(-1));
            arraySELp.push(currentMesh);
            currentMesh.setEnabled(true);
            if(currentMesh.name.substr(-1) == departamentoSeleccionado.substr(-1)){
                SELpSel = currentMesh;
                console.log(SELpSel.name)
            }
        }
    };

    nodeParaClipPlaneVentanas.position.y = alturaDePiso - 0.05;
    nodeParaClipPlane.position.y = alturaDeCorte;

    setTimeout(() => {
      btnVerPlantaBaja.classList.add("hidden");
      btnVerPlantaAlta.classList.remove("hidden");
      mostrarBtns("UIdepartamentoSeleccionado");
      fade();
    }, 100);

  }, duracionDeFade);
}





















var varTempEntrarX;
var varTempEntrarZ;
var varTempEntrarY;
var alphaParaEntrar;
var posInicioCaminarDpto;
var rotacionCamFPV;
var MOVactual;
var MCOLactual;
var alturaFpsEnNivel;
var botonEscalerasActualPH;

var assetManagerTaskDoneObservable360Dptos;

function entrarADpto(){

    scene.onPointerObservable.remove(observerSeleccionarDepartamentoEnPlanta);

    analyticsCaminar();

    ocultarBtns("UIdepartamentoSeleccionado");

    activarAutoRotate(false);

    if(nivelDeDepartamentoSeleccionado == "24"){
      MOVactual = scene.getMeshByName("MOV_PHpb");
      MCOLactual = scene.getMeshByName("MCOL_PHpb");
    }
    else{
      MOVactual = scene.getMeshByName("MOV_Dptos");
      MCOLactual = scene.getMeshByName("MCOL_Dptos");
    }

    if(plantaAltaPenthhouseActiva){
        MOVactual = scene.getMeshByName("MOV_PHpa");
        MCOLactual = scene.getMeshByName("MCOL_PHpa");
    };


    switch (varNivelAbreviacionSELp){
        case "Dptos": 
            switch (departamentoSeleccionado.substr(-1)){
              case "1": varTempEntrarX = 7.722493; varTempEntrarZ = -2.943768; alphaParaEntrar = Math.PI/2; rotacionCamFPV = Math.PI; break;
              case "2": varTempEntrarX = -6.781779; varTempEntrarZ = -2.943768; alphaParaEntrar = Math.PI/2; rotacionCamFPV = Math.PI; break;
              case "3": varTempEntrarX = -9.853013; varTempEntrarZ = -2.943768; alphaParaEntrar = Math.PI/2; rotacionCamFPV = Math.PI; break;
              case "4": varTempEntrarX = -11.577737; varTempEntrarZ = 2.166954; alphaParaEntrar = Math.PI*1.5; rotacionCamFPV = 0; break;
              case "5": varTempEntrarX = -9.825544; varTempEntrarZ = 2.174955; alphaParaEntrar = Math.PI*1.5; rotacionCamFPV = 0; break;
              case "6": varTempEntrarX = 3.893387; varTempEntrarZ = 2.174955; alphaParaEntrar = Math.PI*1.5; rotacionCamFPV = 0; break;
              case "7": varTempEntrarX = 7.722493; varTempEntrarZ = 2.174955; alphaParaEntrar = Math.PI*1.5; rotacionCamFPV = 0; break;
              default:
            };
            varTempEntrarY = 10.7 + (distAlturaPisoAPiso * parseInt(departamentoSeleccionado.slice(0, -2)) - (distAlturaPisoAPiso*3));
                //Ojo, distAlturaPisoAPiso*3 ya que comenzamos en el nivel 3
        ; break;
        case "PHpb": 
            switch (departamentoSeleccionado.substr(-1)){
              case "1": varTempEntrarX = 7.808007; varTempEntrarZ = -3.006748; alphaParaEntrar = Math.PI/2; rotacionCamFPV = Math.PI; break;
              case "2": varTempEntrarX = 5.950974; varTempEntrarZ = -3.006748; alphaParaEntrar = Math.PI/2; rotacionCamFPV = Math.PI; break;
              case "3": varTempEntrarX = -8.966036; varTempEntrarZ = -3.006748; alphaParaEntrar = Math.PI/2; rotacionCamFPV = Math.PI; break;
              case "4": varTempEntrarX = -11.639092; varTempEntrarZ = 2.127729; alphaParaEntrar = Math.PI*1.5; rotacionCamFPV = 0; break;
              case "5": varTempEntrarX = -9.737402; varTempEntrarZ = 2.127729; alphaParaEntrar = Math.PI*1.5; rotacionCamFPV = 0; break;
              case "6": varTempEntrarX = 2.134658; varTempEntrarZ = 2.127729; alphaParaEntrar = Math.PI*1.5; rotacionCamFPV = 0; break;
              default:
            };
            varTempEntrarY = 80;

            botonEscalerasActualPH = scene.getMeshByName("MOVstair_pb_" + departamentoSeleccionado.substr(-1));
            botonEscalerasActualPH.setEnabled(true);        
        ; break;
        case "PHpa": 
            switch (departamentoSeleccionado.substr(-1)){
              case "1": varTempEntrarX = 12.204331; varTempEntrarZ = -5.458453; alphaParaEntrar = Math.PI*1.5; rotacionCamFPV = 0; break;
              case "2": varTempEntrarX = 1.31297; varTempEntrarZ = -5.43852; alphaParaEntrar = Math.PI*1.5; rotacionCamFPV = 0; break;
              case "3": varTempEntrarX = -9.965253; varTempEntrarZ = -7.339189; alphaParaEntrar = Math.PI/2; rotacionCamFPV = Math.PI; break;
              case "4": varTempEntrarX = -18.110743; varTempEntrarZ = 5.349799; alphaParaEntrar = Math.PI/2; rotacionCamFPV = Math.PI; break;
              case "5": varTempEntrarX = -3.285583; varTempEntrarZ = 5.396873; alphaParaEntrar = Math.PI/2; rotacionCamFPV = Math.PI; break;
              case "6": varTempEntrarX = 9.232913; varTempEntrarZ = 5.300243; alphaParaEntrar = Math.PI/2; rotacionCamFPV = Math.PI; break;
              default:
            };    
            varTempEntrarY = 83.3;

            botonEscalerasActualPH = scene.getMeshByName("MOVstair_pa_" + departamentoSeleccionado.substr(-1));
            botonEscalerasActualPH.setEnabled(true);
        ; break;
        default:
    };

    targetDptoCorteZoom = new BABYLON.Vector3(varTempEntrarX, varTempEntrarY + 0.75, varTempEntrarZ);
    posInicioCaminarDpto = new BABYLON.Vector3(varTempEntrarX, varTempEntrarY + 1.6, varTempEntrarZ)
    alturaFpsEnNivel = varTempEntrarY + 1.6;


    setTimeout(() => {
      var alphaGirarpEntrar = BABYLON.Animation.CreateAndStartAnimation('f3312', arcRotCam, 'alpha', 40, 60, normalizarAlphaCamera(arcRotCam, alphaParaEntrar, true), normalizarAlphaCamera(arcRotCam, alphaParaEntrar, false), 0, ease);
      alphaGirarpEntrar.disposeOnEnd = true;
    }, 50);

    var animMov1 = BABYLON.Animation.CreateAndStartAnimation('f3312', arcRotCam, 'target', 40, 60, arcRotCam.target, targetDptoCorteZoom, 0, ease);
    var animBeta = BABYLON.Animation.CreateAndStartAnimation('f35312', arcRotCam, 'beta', 40, 60, arcRotCam.beta, 0.63, 0, ease);
    var animRadiusOut = BABYLON.Animation.CreateAndStartAnimation('f338812', arcRotCam, 'radius', 40, 60, arcRotCam.radius, 40, 0, ease);
    animRadiusOut.disposeOnEnd = true;
    animMov1.disposeOnEnd = true;
    animBeta.disposeOnEnd = true;
    animBeta.onAnimationEnd = function(){

        arcRotCam.lowerRadiusLimit = 0;


        var animMov2 = BABYLON.Animation.CreateAndStartAnimation('f338812', arcRotCam, 'radius', 40, 60, arcRotCam.radius, 3, 0, ease);
        animMov2.disposeOnEnd = true;
        var animMov3 = BABYLON.Animation.CreateAndStartAnimation('f33238812', arcRotCam, 'fov', 25, 60, arcRotCam.fov, camFovFPV, 0, ease);
        animMov3.disposeOnEnd = true;

        setTimeout(() => {

          fade();
          setTimeout(() => {

            // usarAutoRotateGlobal = false;

            MOVactual.setEnabled(true);
            MCOLactual.setEnabled(true);

            if(VENDtemp){
              VENDtemp.setEnabled(false);
            }

            PERpSel.setEnabled(false);

            for (var i = 0; i < arraySELp.length; i++) {
                arraySELp[i].setEnabled(false);
            }            


            cameraFree.position = posInicioCaminarDpto;
            cameraFree.rotation = new BABYLON.Vector3(0.350, rotacionCamFPV, 0);

            arcRotCam.detachControl(canvas);
            scene.activeCamera = cameraFree;
            cameraFree.attachControl(canvas, true);


            if(!varNivelAbreviacionSELp.includes("PH")){
                nodeParaClipPlaneVentanas2.position.y = nodeParaClipPlaneVentanas.position.y + distAlturaPisoAPiso;
                m7Ventanas2.setEnabled(true);
            };

            nodeParaClipPlane.position.y = yClipPlane;



            if(assetsManager.isLoading){
              if(assetManagerTaskDoneObservable360Dptos){
                assetsManager.onTasksDoneObservable.remove(assetManagerTaskDoneObservable360Dptos)
              };

              assetManagerTaskDoneObservable360Dptos = assetsManager.onTasksDoneObservable.add(function(){
                if(scene.activeCamera == cameraFree){
                  cargarVista360();
                }
              })
            }
            else{
              cargarVista360();
            }





            clickParaCaminar();

            setTimeout(() => {
              fade();
              mostrarBtns("btnsCaminando");
            }, 200);

          }, duracionDeFade);

        }, 750);
    }
}











var textura360dptosCargando = false;

function salirDeDpto(){

  // Parar funcion de colocar 360 panorama si salimos
  // texturaCargando = false;

  // scene.onPointerObservable.remove(observerClickParaCaminar);


  cameraFree.detachControl(canvas);
  scene.activeCamera = arcRotCam;



  if(assetManagerTaskDoneObservable360Dptos){
    assetsManager.onTasksDoneObservable.remove(assetManagerTaskDoneObservable360Dptos)
  };
  if(textura360dptosCargando){
    assetsManager.reset();
    window.stop();
    textura360dptosCargando = false;
  };


  MOVactual.setEnabled(false);
  MCOLactual.setEnabled(false);

  if(VENDtemp){
    VENDtemp.setEnabled(true);
  }

  PERpSel.setEnabled(true);

  for (var i = 0; i < arraySELp.length; i++) {
      arraySELp[i].setEnabled(true);
  }        

  if(panoActiva){
    panoActiva.setEnabled(false);
    panoActiva.material.alpha = 0;
  }



  arcRotCam.target = cameraFree.position;
  arcRotCam.radius = 3;    
  arcRotCam.beta = 0.5;    

  if(plantaAltaPenthhouseActiva){
      nodeParaClipPlaneVentanas.position.y = 80 - 0.05;
      nodeParaClipPlane.position.y = 85.95;
  }
  else{
      nodeParaClipPlaneVentanas.position.y = clippingValue - distTopCorteAPiso;
      nodeParaClipPlane.position.y = clippingValue;
  };



  alphaRandom = cambiarNegativoRandom(1);
  alphaTemporal = arcRotCam.alpha + alphaRandom;
  var animMov81 = BABYLON.Animation.CreateAndStartAnimation('f312', arcRotCam, 'alpha', 40, 60, normalizarAlphaCamera(arcRotCam, alphaTemporal, true), normalizarAlphaCamera(arcRotCam, alphaTemporal, false), 0, ease);

  var animRadiusOut = BABYLON.Animation.CreateAndStartAnimation('f338812', arcRotCam, 'radius', 40, 60, arcRotCam.radius, 45, 0, ease);
  animRadiusOut.disposeOnEnd = true;    
  var animFovOut = BABYLON.Animation.CreateAndStartAnimation('f3388ew12', arcRotCam, 'fov', 40, 60, arcRotCam.fov, camFovPlanta, 0, ease);
  animFovOut.disposeOnEnd = true;    
  animRadiusOut.onAnimationEnd = function(){
      arcRotCam.attachControl(canvas, true);

      clickParaSeleccionarDepartamentoEnPlanta();  
      arcRotCam.lowerRadiusLimit = camLowerRadiusPlanta;  
      mostrarBtns("UIdepartamentoSeleccionado"); 
  }

  m7Ventanas2.setEnabled(false);

  fade();
}























var frenoPanelEscalerasCaminando = false;

//      Click para caminar

var observerClickParaCaminar;
var alturaFps = 1.6;

function clickParaCaminar(){

  observerClickParaCaminar = scene.onPointerObservable.add((pointerInfo) => {
    switch (pointerInfo.type) {
        case BABYLON.PointerEventTypes.POINTERTAP:

        var rayFPS = scene.createPickingRay(scene.pointerX, scene.pointerY, BABYLON.Matrix.Identity(), cameraFree);	
        var hitFPS = scene.pickWithRay(rayFPS);

        var xPosTempRay;
        var yPosTempRay;
        var zPosTempRay;

        console.log(hitFPS.pickedMesh.name);

        if (hitFPS.pickedMesh == MOVactual){
            
            tTocaParaCaminar.classList.add("hidden");

            function calcularVelocidadDeCaminar(){
                var pickedPointModificado = new BABYLON.Vector3(hitFPS.pickedPoint.x, alturaFps, hitFPS.pickedPoint.z);
                var input = pickedPointModificado.subtract(cameraFree.position).length();
                var inputStart = 0;
                var inputEnd = 13;
                var outputStart = 60;
                var outputEnd = 30; //15
                var output = outputStart + ((outputEnd - outputStart) / (inputEnd - inputStart)) * (input - inputStart)
                // console.log(output);
                if(output < 25){
                    output = 25;
                }
                return output
            }

            if (hitFPS.getNormal().z == 1){
    
                animateCameraToPosition(cameraFree, calcularVelocidadDeCaminar(), frameCount, new BABYLON.Vector3(hitFPS.pickedPoint.x, hitFPS.pickedPoint.y + 1.6, hitFPS.pickedPoint.z));

            }
            else if(hitFPS.distance > 0.4){
                xPosTempRay = hitFPS.ray.direction.x * (hitFPS.distance * 0.7) + hitFPS.ray.origin.x
                zPosTempRay = hitFPS.ray.direction.z * (hitFPS.distance * 0.7) + hitFPS.ray.origin.z

                animateCameraToPosition(cameraFree, calcularVelocidadDeCaminar(), frameCount, new BABYLON.Vector3(xPosTempRay, alturaFpsEnNivel, zPosTempRay));
            }

            // document.getElementById("avisoCaminar").classList.add('hidden');
        };

        if (hitFPS.pickedMesh.name.includes("MOVstair_") && plantaAltaPenthhouseActiva == true){
          tSubirOBajarEscaleras.innerHTML = "¿Ir a planta baja?";
          mostrarPanel("panelEscalerasCaminando");

          frenoPanelEscalerasCaminando = true;
          setTimeout(() => {
            frenoPanelEscalerasCaminando = false;
          }, 300);
            // bajarEscalerasPH();
        }
        else if (hitFPS.pickedMesh.name.includes("MOVstair_") && plantaAltaPenthhouseActiva == false){
          tSubirOBajarEscaleras.innerHTML = "¿Ir a planta alta?";
          mostrarPanel("panelEscalerasCaminando");

          frenoPanelEscalerasCaminando = true;
          setTimeout(() => {
            frenoPanelEscalerasCaminando = false;
          }, 300);
          // subirEscalerasPH();
        };

        break;
    };
  });
}




















function subirEscalerasPH(){

  var alturaDePisoEnPlantaAltaPH = 83.3;

  if(animGeneralCameraToPosition){
    if(animGeneralCameraToPosition.animationStarted){
      animGeneralCameraToPosition.stop();
    } 
  }

    
  btnVerPlantaBaja.classList.remove("hidden");
  btnVerPlantaAlta.classList.add("hidden");

  botonEscalerasActualPH.setEnabled(false);
  botonEscalerasActualPH = scene.getMeshByName("MOVstair_pa_" + departamentoSeleccionado.substr(-1));
  botonEscalerasActualPH.setEnabled(true);

  MOVactual.setEnabled(false);
  MCOLactual.setEnabled(false);
  MOVactual = scene.getMeshByName("MOV_PHpa");
  MCOLactual = scene.getMeshByName("MCOL_PHpa");
  MOVactual.setEnabled(true);
  MCOLactual.setEnabled(true);

  alturaFpsEnNivel = alturaDePisoEnPlantaAltaPH + alturaFps;


  switch (departamentoSeleccionado.substr(-1)){
    case "1": varX = 12.204331; varZ = -5.458453; rotacionCamFPV = 0; break;
    case "2": varX = 1.31297; varZ = -5.43852; rotacionCamFPV = 0; break;
    case "3": varX = -9.965253; varZ = -7.339189; rotacionCamFPV = Math.PI; break;
    case "4": varX = -18.110743; varZ = 5.349799; rotacionCamFPV = Math.PI; break;
    case "5": varX = -3.285583; varZ = 5.396873; rotacionCamFPV = Math.PI; break;
    case "6": varX = 9.232913; varZ = 5.300243; rotacionCamFPV = Math.PI; break;
    default:
  };    
  
  cameraFree.position = new BABYLON.Vector3(varX, alturaFpsEnNivel, varZ);
  cameraFree.rotation = new BABYLON.Vector3(0.350, rotacionCamFPV, 0);

  if(VENDtemp){
    VENDtemp.dispose();
  }
  
  varNivelAbreviacion = "PHpa"
  varNivelAbreviacionSELp = "PHpa"

  plantaAltaPenthhouseActiva = true;

  // Aparece PERp
  PERpSel.setEnabled(false);
  PERpSel = scene.getMeshByName("PERp_PHpa_" + departamentoSeleccionado.substr(-1));
  // PERpSel.setEnabled(true);
      
  VENDsel = scene.getMeshByName("VEND_PHpa_" + departamentoSeleccionado.substr(-1));

  tempTargetVENDsel = new BABYLON.Vector3(
      VENDsel.getBoundingInfo().boundingBox.centerWorld.x,
      alturaDePisoEnPlantaAltaPH + 0.75,
      VENDsel.getBoundingInfo().boundingBox.centerWorld.z
  );

  // arcRotCam.target = tempTargetVENDsel;
  // arcRotCam.beta = 0.64;
  // arcRotCam.radius = 45;

  // Merge y mostrar VEND
  arrayMergeMeshesVEND = [];

  for(var i = 0; i < departamentosVendidos.length; i++){

      var checando = departamentosVendidos[i];
      if(checando.slice(0, -2) == nivelDeDepartamentoSeleccionado){
          arrayMergeMeshesVEND.push(scene.getMeshByName("VEND_PHpa_" + checando.substr(-1)));
      }
  };

  if(arrayMergeMeshesVEND.length > 0){
      VENDtemp = BABYLON.Mesh.MergeMeshes(arrayMergeMeshesVEND, false);
      VENDtemp.name = "VENDtemp";
      VENDtemp.setEnabled(false);
  }


  for (var i = 0; i < arraySELp.length; i++) {
      arraySELp[i].setEnabled(false);
  }  

  arraySELp = [];

  for(var i = 0; i < departamentosDisponibles.length; i++){

      var checando = departamentosDisponibles[i];
      if(checando.slice(0, -2) == nivelDeDepartamentoSeleccionado){
          currentMesh = scene.getMeshByName("SELp_PHpa_" + checando.substr(-1));
          arraySELp.push(currentMesh);
          // currentMesh.setEnabled(true);
          if(currentMesh.name.substr(-1) == departamentoSeleccionado.substr(-1)){
              SELpSel = currentMesh;
          }
      }
  };

  nodeParaClipPlaneVentanas.position.y = clippingValue - 2.8;

  fade();
  // nodeParaClipPlane.position.y = yClipPlane;
}











function bajarEscalerasPH(){

  var alturaDePisoEnPlantaAltaPH = 80;

  if(animGeneralCameraToPosition){
    if(animGeneralCameraToPosition.animationStarted){
      animGeneralCameraToPosition.stop();
    } 
  }

  btnVerPlantaAlta.classList.remove("hidden");
  btnVerPlantaBaja.classList.add("hidden");

  botonEscalerasActualPH.setEnabled(false);
  botonEscalerasActualPH = scene.getMeshByName("MOVstair_pb_" + departamentoSeleccionado.substr(-1));
  botonEscalerasActualPH.setEnabled(true);

  MOVactual.setEnabled(false);
  MCOLactual.setEnabled(false);
  MOVactual = scene.getMeshByName("MOV_PHpb");
  MCOLactual = scene.getMeshByName("MCOL_PHpb");
  MOVactual.setEnabled(true);
  MCOLactual.setEnabled(true);

  alturaFpsEnNivel = alturaDePisoEnPlantaAltaPH + alturaFps;    

  switch (departamentoSeleccionado.substr(-1)){
    case "1": varX = 11.284302; varZ = -9.499322; rotacionCamFPV = 5.2; break;
    case "2": varX = 2.127363; varZ = -9.486892; rotacionCamFPV = 0.54; break;
    case "3": varX = -9.553328; varZ = -3.064523; rotacionCamFPV = 8.66; break;
    case "4": varX = -16.967324; varZ = 8.762116; rotacionCamFPV = 2.44; break;
    case "5": varX = -4.564449; varZ = 8.776193; rotacionCamFPV = 3.91; break;
    case "6": varX = 7.467297; varZ = 5.228277; rotacionCamFPV = 3.91; break;
    default:
  };    
  
  cameraFree.position = new BABYLON.Vector3(varX, alturaFpsEnNivel, varZ);
  cameraFree.rotation = new BABYLON.Vector3(0.350, rotacionCamFPV, 0);

  if(VENDtemp){
    VENDtemp.dispose();
  }

  
  varNivelAbreviacion = "PHpb"
  varNivelAbreviacionSELp = "PHpb"

  plantaAltaPenthhouseActiva = false;

  // Aparece PERp
  PERpSel.setEnabled(false);
  PERpSel = scene.getMeshByName("PERp_PHpb_" + departamentoSeleccionado.substr(-1));
  // PERpSel.setEnabled(true);
      
  VENDsel = scene.getMeshByName("VEND_PHpb_" + departamentoSeleccionado.substr(-1));

  tempTargetVENDsel = new BABYLON.Vector3(
      VENDsel.getBoundingInfo().boundingBox.centerWorld.x,
      alturaDePisoEnPlantaAltaPH + 0.75,
      VENDsel.getBoundingInfo().boundingBox.centerWorld.z
  );

  // arcRotCam.target = tempTargetVENDsel;
  // arcRotCam.beta = 0.64;
  // arcRotCam.radius = 45;

  // Merge y mostrar VEND
  arrayMergeMeshesVEND = [];

  for(var i = 0; i < departamentosVendidos.length; i++){

      var checando = departamentosVendidos[i];
      if(checando.slice(0, -2) == nivelDeDepartamentoSeleccionado){
          arrayMergeMeshesVEND.push(scene.getMeshByName("VEND_PHpb_" + checando.substr(-1)));
      }
  };

  if(arrayMergeMeshesVEND.length > 0){
      VENDtemp = BABYLON.Mesh.MergeMeshes(arrayMergeMeshesVEND, false);
      VENDtemp.name = "VENDtemp";
      VENDtemp.setEnabled(false);
  }


  for (var i = 0; i < arraySELp.length; i++) {
      arraySELp[i].setEnabled(false);
  }  

  arraySELp = [];

  for(var i = 0; i < departamentosDisponibles.length; i++){

      var checando = departamentosDisponibles[i];
      if(checando.slice(0, -2) == nivelDeDepartamentoSeleccionado){
          currentMesh = scene.getMeshByName("SELp_PHpb_" + checando.substr(-1));
          arraySELp.push(currentMesh);
          // currentMesh.setEnabled(true);
          if(currentMesh.name.substr(-1) == departamentoSeleccionado.substr(-1)){
              SELpSel = currentMesh;
          }
      }
  };

  nodeParaClipPlaneVentanas.position.y = clippingValue - 2.8;

  fade();
}



















var texturaCargada360;
var rotacion360 = 0;
var panoActiva;

var frenoBtnsSalirDeCaminar = false;

// Vistas 360 de departamentos

function cargarVista360(){

    var textura360aCargar;

    switch (nivelDeDepartamentoSeleccionado){
      case '3': 
      case '4': 
      case '5': 
          primerNombre360aCargar = "3y4y5"; break;
      case '6': 
      case '7': 
          primerNombre360aCargar = "6y7"; break;
      case '8': 
      case '9': 
          primerNombre360aCargar = "8y9"; break;
      case '10': 
      case '11': 
          primerNombre360aCargar = "10y11"; break;
      case '12': 
      case '13': 
          primerNombre360aCargar = "12y13"; break;
      case '14': 
      case '15': 
          primerNombre360aCargar = "14y15"; break;
      case '16': 
      case '17': 
          primerNombre360aCargar = "16y17"; break;
      case '18': 
      case '19': 
          primerNombre360aCargar = "18y19"; break;
      case '20': 
      case '21': 
          primerNombre360aCargar = "20y21"; break;
      case '22': 
      case '23': 
          primerNombre360aCargar = "22y23"; break;
      case '24': 
      case '25': 
          primerNombre360aCargar = "24y25"; break;
      default: 
    };

    switch (departamentoSeleccionado.substr(-1)){
        case '1': 
        case '2': 
        case '6': 
        case '7': 
            segundoNombre360aCargar = "a"; break;
        case '3': 
        case '4': 
        case '5': 
            segundoNombre360aCargar = "b"; break;
        default: 
    };

    textura360aCargar = primerNombre360aCargar + segundoNombre360aCargar;


    if(scene.getMeshByName("dome_" + textura360aCargar + "_mesh")){
    //  SI YA EXISTE
        
            scene.getMeshByName("dome_" + textura360aCargar + "_mesh").setEnabled(true);
            panoActiva = scene.getMeshByName("dome_" + textura360aCargar + "_mesh");

            var aparece360existente = BABYLON.Animation.CreateAndStartAnimation('aaat6', panoActiva, 'material.alpha', 40, 60, 0, 1, 0, ease);
            aparece360existente.disposeOnEnd = true;

            // setTimeout(() => {
            //     mostrarBtns("btns360");
            // }, duracionDeFade);
    }

    else{
    // SI NO EXISTE

        var lq360 = ""
        if(engine.getCaps().maxTextureSize < 8096){
            lq360 = "_lq";
        };
    
        aCargarTask = assetsManager.addTextureTask("textura360Panoramica", "assets/babylon/360dptos/" + textura360aCargar + lq360 + ".jpg", true);
        texturaCargando = true;
        textura360dptosCargando = true;
        
        aCargarTask.onSuccess = function (task) {

            frenoBtnsSalirDeCaminar = true;

            if(texturaCargando){
                texturaCargada360 = task.texture;

                var domo360 = new BABYLON.PhotoDome("dome_" + textura360aCargar, null,
                    {
                        resolution: 32,
                        size: 100
                    },
                    scene
                );

                scene.getTransformNodeByName("dome_" + textura360aCargar).rotation = new BABYLON.Vector3(0, 0, 0);
                var panorama = scene.getMeshByName("dome_" + textura360aCargar + "_mesh");

                panorama.setEnabled(false);

                var childADispose = panorama.getChildMeshes();
                childADispose[0].dispose();

                panorama.material = new BABYLON.StandardMaterial("dome_" + textura360aCargar + "_materialStandard", scene);
                panorama.material.alphaMode = BABYLON.Engine.ALPHA_PREMULTIPLIED;
                panorama.material.transparencyMode = BABYLON.Material.MATERIAL_ALPHATEST;

                panorama.material.alpha = 0;
                // panorama.material.depthFunction = 519;
                panorama.material.diffuseTexture = texturaCargada360;
                panorama.material.diffuseTexture.vScale = -1;
                panorama.material.diffuseTexture.level = 1.3;

                panorama.material.ambientColor = new BABYLON.Color3(1, 0.953, 0.859);



                // panorama.position = scene.activeCamera;
                panorama.rotation.y = 4.32;
                panorama.scaling = new BABYLON.Vector3(30, 30, 30);
                panorama.isPickable = false;

                var desapareceSky = BABYLON.Animation.CreateAndStartAnimation('aefaawt6', m_Sky, 'material.alpha', 40, 60, 1, 0, 0, ease);
                desapareceSky.disposeOnEnd = true;

                desapareceSky.onAnimationEnd = function(){
                    panorama.setEnabled(true);
                    var aparece360 = BABYLON.Animation.CreateAndStartAnimation('aefaat6', panorama, 'material.alpha', 40, 60, 0, 1, 0, ease);
                    aparece360.disposeOnEnd = true;
                    aparece360.onAnimationEnd = function(){
                        m_Sky.material.alpha = 1;

                        frenoBtnsSalirDeCaminar = false;

                    }
                }

                panoActiva = panorama;
                
                texturaCargando = false;

                textura360dptosCargando = false;

                panorama.onBeforeRenderObservable.add(() => {
                    scene.clipPlane = null;
                })
                panorama.onAfterRenderObservable.add(() => {
                    scene.clipPlane = clippingPlane;
                })

                //   setTimeout(() => {
                //     mostrarBtns("btns360");
                //   }, duracionDeFade);
            };
        };
        assetsManager.loadAsync();
        mostrarSpinner(true);
    };
};




















var primeraVezAmenidades = true;

function mostrarAmenidades(){

    activarAutoRotate(false);

    paneoVerticalPermitido = false;
    arcRotCam.panningSensibility = 0;

    SELam_PA.setEnabled(true);
    SELam_PB.setEnabled(false);

    var noDelaySiBetaAlto = 0;

    COL_Edificio.setEnabled(false);

    // Hasta donde baja el clipping plane
    clippingValue = 8.77;


    // Animaciones de camara
    var animTargetLobby = BABYLON.Animation.CreateAndStartAnimation('f33', arcRotCam, 'target', 40, 60, arcRotCam.target, new BABYLON.Vector3(camTarInicio.x, -30, camTarInicio.z), 0, ease);
    animTargetLobby.disposeOnEnd = true;

    var animradiusLobby = BABYLON.Animation.CreateAndStartAnimation('f3333', arcRotCam, 'radius', 40, 60, arcRotCam.radius, 300, 0, ease);
    animradiusLobby.disposeOnEnd = true;

    var animAlphaLobby = BABYLON.Animation.CreateAndStartAnimation('feee199', arcRotCam, 'alpha', 40, 60, normalizarAlphaCamera(arcRotCam, 0.4, true), normalizarAlphaCamera(arcRotCam, 0.4, false), 0, ease);
    animAlphaLobby.disposeOnEnd = true;   

    if(arcRotCam.beta < 1.5){
        var animBetaDpto = BABYLON.Animation.CreateAndStartAnimation('f3', arcRotCam, 'beta', 40, 60, arcRotCam.beta, 1.5, 0, ease);
        animBetaDpto.disposeOnEnd = true;
        noDelaySiBetaAlto = 500;
    }


    setTimeout(() => {

        WIRE.setEnabled(true);
        var animWire = BABYLON.Animation.CreateAndStartAnimation('5477', WIRE, 'material.alpha', 90, 60, 0, 1, 0, ease);
            animWire.disposeOnEnd = true;

        //Se pone arriba de que baje el clipping, de lo contrario hay parpadeo, dunno why
        mBoton_360_Alberca.setEnabled(true);
        mBoton_360_Comercio.setEnabled(false);
        mBoton_360_Ingreso.setEnabled(true);
        // mBoton_360_Lobby.setEnabled(false);

        // Clipping planes
        var animCortePlanta2 = BABYLON.Animation.CreateAndStartAnimation('f332', nodeParaClipPlaneVentanas, 'position.y', 40, 60, nodeParaClipPlane.position.y, clippingValue, 0, ease);
        animCortePlanta2.disposeOnEnd = true;

        var animCortePlanta1 = BABYLON.Animation.CreateAndStartAnimation('f33312', nodeParaClipPlane, 'position.y', 40, 60, nodeParaClipPlane.position.y, clippingValue, 0, ease);
        animCortePlanta1.disposeOnEnd = true;
        animCortePlanta1.onAnimationEnd = function(){

            m2Amenidades.setEnabled(true);

            var animCortePlanta3 = BABYLON.Animation.CreateAndStartAnimation('f332', nodeParaClipPlaneVentanas, 'position.y', 60, 60, nodeParaClipPlaneVentanas.position.y, 0, 0, ease);
            animCortePlanta3.disposeOnEnd = true;

            arcRotCam.lowerRadiusLimit = 35;


            // Ocultar WIRE
            var animWire1 = BABYLON.Animation.CreateAndStartAnimation('8775', WIRE, 'material.alpha', 60, 60, 1, 0, 0, ease);
            animWire1.disposeOnEnd = true;
            animWire1.onAnimationEnd = function(){
                WIRE.setEnabled(false);
            }


            // Animaciones de camara

            var animTargetLobby2 = BABYLON.Animation.CreateAndStartAnimation('f332f3', arcRotCam, 'target', 40, 60, arcRotCam.target, new BABYLON.Vector3(camTarInicio.x, -5, camTarInicio.z), 0, ease);

            var animRadiusDpto1 = BABYLON.Animation.CreateAndStartAnimation('f4', arcRotCam, 'radius', 60, 60, arcRotCam.radius, 203, 0, ease);          
            var animFovDpto1 = BABYLON.Animation.CreateAndStartAnimation('f432', arcRotCam, 'fov', 60, 60, arcRotCam.fov, camFovPlanta, 0, ease);
            var animAlphaDpto1 = BABYLON.Animation.CreateAndStartAnimation('f99', arcRotCam, 'alpha', 60, 60, normalizarAlphaCamera(arcRotCam, 5.8, true), normalizarAlphaCamera(arcRotCam, 5.8, false), 0, ease);
            var animBetaDpto1 = BABYLON.Animation.CreateAndStartAnimation('f10', arcRotCam, 'beta', 60, 60, arcRotCam.beta, 0.97, 0, ease);
            animRadiusDpto1.disposeOnEnd = true;          
            animFovDpto1.disposeOnEnd = true;
            animAlphaDpto1.disposeOnEnd = true;              
            animBetaDpto1.disposeOnEnd = true;
            animTargetLobby2.disposeOnEnd = true;            
            animBetaDpto1.onAnimationEnd = function(){

                arcRotCam.upperBetaLimit = 1.11;

                //Aparecen botones
                if(primeraVezAmenidades){
                    for (var u = 0; u < arrayBotones360.length; u++) {
                        comienzaAnimMeshScale(arrayBotones360[u]);
                    }
                }

                for (var u = 0; u < arrayBotones360.length; u++) {
                    var animMov022 = BABYLON.Animation.CreateAndStartAnimation('f934309', arrayBotones360[u].material, 'alpha', 60, 60, arrayBotones360[u].material.alpha, 1, 0, ease);
                    animMov022.disposeOnEnd = true;
                    // arrayBotones360[u].setEnabled(true);
                }   

                activarAutoRotate(true);
                mostrarBtns("btnsSelecciona360");



                for (var u = 0; u < arraySELamenidades.length; u++) {
                  arraySELamenidades[u].setEnabled(true);
                }
                
                seleccionarBotones360oAmenidad();
            };
        };
    }, noDelaySiBetaAlto);
}




var plantaAltaAmenidadesActiva = true;

function verPlantaBajaAmenidades(){

  plantaAltaAmenidadesActiva = false;

  scene.onPointerObservable.remove(observerseleccionarBotones360oAmenidad);

  SELamSel = null;

  fade();
  setTimeout(() => {

    mBoton_360_Alberca.setEnabled(false);
    mBoton_360_Comercio.setEnabled(true);
    mBoton_360_Ingreso.setEnabled(true);
    // mBoton_360_Lobby.setEnabled(true);

    clippingValue = 4.37;

    arcRotCam.target = new BABYLON.Vector3(camTarInicio.x, 0.6, camTarInicio.z);
    arcRotCam.beta = 0.97;
    arcRotCam.radius = 230;

    for (var u = 0; u < arraySELamenidades.length; u++) {
      arraySELamenidades[u].setEnabled(false);
    };

    SELam_PA.setEnabled(false);
    SELam_PB.setEnabled(true);

    nodeParaClipPlane.position.y = clippingValue;

    tSeleccionaAmenidad.innerHTML = "Selecciona una vista de 360°";

    btnVerPlantaBajaAm.classList.add("hidden");
    btnVerPlantaAltaAm.classList.remove("hidden");

    seleccionarBotones360oAmenidad();
    
    mostrarBtns("btnsSelecciona360");

    fade();

  }, duracionDeFade);
}








function verPlantaAltaAmenidades(){

  plantaAltaAmenidadesActiva = true;

  scene.onPointerObservable.remove(observerseleccionarBotones360oAmenidad);

  fade();
  setTimeout(() => {

    mBoton_360_Alberca.setEnabled(true);
    mBoton_360_Comercio.setEnabled(false);
    mBoton_360_Ingreso.setEnabled(true);
    // mBoton_360_Lobby.setEnabled(false);

    clippingValue = 8.77;

    arcRotCam.target = new BABYLON.Vector3(camTarInicio.x, -5, camTarInicio.z);
    arcRotCam.beta = 0.97;
    arcRotCam.radius = 230;

    for (var u = 0; u < arraySELamenidades.length; u++) {
      arraySELamenidades[u].setEnabled(true);
    }
    
    SELam_PA.setEnabled(true);
    SELam_PB.setEnabled(false);

    nodeParaClipPlane.position.y = clippingValue;

    tSeleccionaAmenidad.innerHTML = "Selecciona una amenidad";

    btnVerPlantaBajaAm.classList.remove("hidden");
    btnVerPlantaAltaAm.classList.add("hidden");

    seleccionarBotones360oAmenidad();
    
    mostrarBtns("btnsSelecciona360");

    fade();
  }, duracionDeFade);
}


















function salirDeAmenidades(){

  plantaAltaAmenidadesActiva = false;

  scene.onPointerObservable.remove(observerseleccionarBotones360oAmenidad);

  // Animaciones de camara
  fade();
  setTimeout(() => {

    btnVerPlantaBajaAm.classList.remove("hidden");
    btnVerPlantaAltaAm.classList.add("hidden");

    tSeleccionaAmenidad.innerHTML = "Selecciona una amenidad";

    SELamSel = null;

    arcRotCam.target = camTarInicio;
    arcRotCam.upperBetaLimit = camUpperBeta;
    arcRotCam.beta = 1.42;     
    arcRotCam.radius = 170;      
    arcRotCam.alpha = 1.6;
    arcRotCam.fov = camFovInicio;
    arcRotCam.lowerRadiusLimit = camLowerRadiusInicio;

    M_Boton_360.alpha = 0;

    paneoVerticalPermitido = "PaneoInicio";
    arcRotCam.panningSensibility = camPanningSens;

    nodeParaClipPlane.position.y = yClipPlane;
    nodeParaClipPlaneVentanas.position.y = yClipPlane;

    m2Amenidades.setEnabled(false);

    for (var u = 0; u < arrayBotones360.length; u++) {
        arrayBotones360[u].setEnabled(false);
    };
    
    for (var u = 0; u < arraySELamenidades.length; u++) {
      arraySELamenidades[u].setEnabled(false);
    };

    setTimeout(() => {
        COL_Edificio.setEnabled(true)
    }, 500);

    fade();

  }, duracionDeFade);
}













var SELamSel;

var observerseleccionarBotones360oAmenidad;

function seleccionarBotones360oAmenidad(){

    observerseleccionarBotones360oAmenidad = scene.onPointerObservable.add((pointerInfo) => {
        switch (pointerInfo.type) {
            case BABYLON.PointerEventTypes.POINTERTAP:
                var rayFPS = scene.createPickingRay(scene.pointerX, scene.pointerY, BABYLON.Matrix.Identity(), arcRotCam);	
                var hitFPS = scene.pickWithRay(rayFPS);


                if(hitFPS.pickedMesh.name == "SELam_PB" || hitFPS.pickedMesh.name == "SELam_PA"){

                  scene.onPointerObservable.remove(observerseleccionarBotones360oAmenidad);
  
                  tSeleccionaAmenidad.innerHTML = "";

                  var pickedPointModificado = new BABYLON.Vector3(hitFPS.pickedPoint.x, hitFPS.pickedPoint.y - 4.6, hitFPS.pickedPoint.z);
  
                  var animtargetDpto = BABYLON.Animation.CreateAndStartAnimation('f33', arcRotCam, 'target', 60, 60, arcRotCam.target, pickedPointModificado, 0, ease);
                  var animBetaDpto = BABYLON.Animation.CreateAndStartAnimation('f3', arcRotCam, 'beta', 60, 60, arcRotCam.beta, 0.4, 0, ease);
                  alphaRandom = cambiarNegativoRandom(0.25);
                  var animAlphaDpto1 = BABYLON.Animation.CreateAndStartAnimation('f99', arcRotCam, 'alpha', 60, 60, arcRotCam.alpha, arcRotCam.alpha + alphaRandom, 0, ease);
                  animAlphaDpto1.disposeOnEnd = true;
                  animBetaDpto.disposeOnEnd = true;
                  animtargetDpto.disposeOnEnd = true;                                  
                  animtargetDpto.onAnimationEnd = function(){
                    seleccionarBotones360oAmenidad();
                  };
                  
                  SELamSel = null;
                }

                else if(hitFPS.pickedMesh.name.includes("mBoton_360")){
                    boton360Amenidades(hitFPS.pickedMesh.name)

                    scene.onPointerObservable.remove(observerseleccionarBotones360oAmenidad);
                }

                else if(hitFPS.pickedMesh == SELamSel && hitFPS.getNormal().y > 0.9){

                  scene.onPointerObservable.remove(observerseleccionarBotones360oAmenidad);
  
                  var pickedPointModificado = new BABYLON.Vector3(hitFPS.pickedPoint.x, hitFPS.pickedPoint.y - 4.6, hitFPS.pickedPoint.z);
  
                  var animtargetDpto = BABYLON.Animation.CreateAndStartAnimation('f33', arcRotCam, 'target', 60, 60, arcRotCam.target, pickedPointModificado, 0, ease);
                  var animBetaDpto = BABYLON.Animation.CreateAndStartAnimation('f3', arcRotCam, 'beta', 60, 60, arcRotCam.beta, 0.4, 0, ease);
                  alphaRandom = cambiarNegativoRandom(0.25);
                  var animAlphaDpto1 = BABYLON.Animation.CreateAndStartAnimation('f99', arcRotCam, 'alpha', 60, 60, arcRotCam.alpha, arcRotCam.alpha + alphaRandom, 0, ease);
                  animAlphaDpto1.disposeOnEnd = true;
                  animBetaDpto.disposeOnEnd = true;
                  animtargetDpto.disposeOnEnd = true;                                  
                  animtargetDpto.onAnimationEnd = function(){
                    seleccionarBotones360oAmenidad();
                  }                               
                }

                else if(hitFPS.pickedMesh.name.includes("SELam_") && hitFPS.pickedMesh !== SELamSel){
    
                  scene.onPointerObservable.remove(observerseleccionarBotones360oAmenidad);
    
                  ocultarBtns("btnsSelecciona360");
    
                  var pickedPointModificado = new BABYLON.Vector3(
                      hitFPS.pickedMesh.getBoundingInfo().boundingBox.centerWorld.x,
                      hitFPS.pickedMesh.getBoundingInfo().boundingBox.centerWorld.y - 3, 
                      hitFPS.pickedMesh.getBoundingInfo().boundingBox.centerWorld.z);

                  setTimeout(() => {
                    var animRadiusDpto = BABYLON.Animation.CreateAndStartAnimation('f32ddq34', arcRotCam, 'radius', 60, 60, arcRotCam.radius, 65, 0, ease);
                    animRadiusDpto.disposeOnEnd = true;  
                  }, 0);

                  var animtargetDpto = BABYLON.Animation.CreateAndStartAnimation('f33', arcRotCam, 'target', 60, 60, arcRotCam.target, pickedPointModificado, 0, ease);
                  var animBetaDpto = BABYLON.Animation.CreateAndStartAnimation('f3', arcRotCam, 'beta', 60, 60, arcRotCam.beta, 0.4, 0, ease);
                  alphaRandom = cambiarNegativoRandom(0.5);
                  var animAlphaDpto1 = BABYLON.Animation.CreateAndStartAnimation('f99', arcRotCam, 'alpha', 60, 60, arcRotCam.alpha, arcRotCam.alpha + alphaRandom, 0, ease);

                  animAlphaDpto1.disposeOnEnd = true;
                  animtargetDpto.disposeOnEnd = true;    
                  animBetaDpto.disposeOnEnd = true;   

                  animBetaDpto.onAnimationEnd = function(){

                    var tempNombreAmenidad;

                    switch (hitFPS.pickedMesh.name){
                      case "SELam_Huerto": tempNombreAmenidad = "Huerto urbano"; break;
                      case "SELam_Petpark": tempNombreAmenidad = "Pet park"; break;
                      case "SELam_Cancha": tempNombreAmenidad = "Cancha multi-usos"; break;
                      case "SELam_Alberca": tempNombreAmenidad = "Alberca"; break;
                      case "SELam_Cowork": tempNombreAmenidad = "Área de coworking"; break;
                      case "SELam_SpaBanos2": tempNombreAmenidad = "Baños de spa"; break;
                      case "SELam_Spa": tempNombreAmenidad = "Spa"; break;
                      case "SELam_SpaBanos1": tempNombreAmenidad = "Baños de spa"; break;
                      case "SELam_Terraza": tempNombreAmenidad = "Terraza"; break;
                      case "SELam_Herramientas": tempNombreAmenidad = "Handyman room"; break;
                      case "SELam_Banos": tempNombreAmenidad = "Baños"; break;
                      case "SELam_UsosMultiples": tempNombreAmenidad = "Salon"; break;
                      case "SELam_Admin": tempNombreAmenidad = "Administración"; break;
                      case "SELam_PB": tempNombreAmenidad = ""; break;
                      case "SELam_PA": tempNombreAmenidad = ""; break;
                      default:
                    };
  
                    tSeleccionaAmenidad.innerHTML = tempNombreAmenidad;
                    mostrarBtns("btnsSelecciona360");

                    seleccionarBotones360oAmenidad();
                  }                                       

                  SELamSel = hitFPS.pickedMesh;
                };
  
                break;
        };
    });
};















  var texturaCargada360;
  var xBtn360;
  var yBtn360;
  var zBtn360;
  var rotacion360;
  var panoActiva2;

  var saveCamAlpha;
  var saveCamBeta;
  var saveCamTarget;
  var saveCamRadius;
  
// 360 para amenidades, etc
function boton360Amenidades(seleccion){

    ocultarBtns("btnsSelecciona360");

    if(primeraVezAmenidades){
        for (var u = 0; u < arrayBotones360.length; u++) {
            detenerAnimMeshScale(arrayBotones360[u]);
        }
        primeraVezAmenidades = false;
    }

    var textura360aCargar = seleccion.split("_")[seleccion.split("_").length - 1];

    xBtn360 = 0;
    yBtn360 = 0;
    zBtn360 = 0;
    rotacion360 = 0;


    if(scene.getMeshByName("dome_" + textura360aCargar + "_mesh")){
    //SI YA EXISTE

        panoActiva2 = scene.getMeshByName("dome_" + textura360aCargar + "_mesh");
        entrarA360();
    }

    else{
    // SI NO EXISTE
        
        switch (textura360aCargar) {
          // case "Lobby": rotacion360 = 4.67; break;
          case "Comercio": rotacion360 = 3.97; break;
          case "Alberca": rotacion360 = 2.88; break;
          case "Ingreso": rotacion360 = 4; break;
        default: ;
        }

        var lq360 = ""
        if(engine.getCaps().maxTextureSize < 8096){
            lq360 = "_lq";
        };

        // Aparece letrero de cargando
        mostrarPanel("panelCargando360");
    

        aCargarTask = assetsManager.addTextureTask("textura360Panoramica2", "assets/babylon/360amenidades/TX_D24_360_" + textura360aCargar + lq360 + ".jpg", true);
        texturaCargando = true;
        
        aCargarTask.onSuccess = function (task) {

            ocultarPanel("panelCargando360");

            if(texturaCargando){
                texturaCargada360 = task.texture;

                // cambiarCamara();
                
                // fade();
                // setTimeout(function(){
                    var domo360 = new BABYLON.PhotoDome("dome_" + textura360aCargar,null,
                        {resolution: 32, size: 100}, scene
                    );

                    //Setup de panorama
                    scene.getTransformNodeByName("dome_" + textura360aCargar).rotation = new BABYLON.Vector3(0, 0, 0);
                    var panorama = scene.getMeshByName("dome_" + textura360aCargar + "_mesh");
                    panorama.setEnabled(false);
                    var childADispose = panorama.getChildMeshes();
                    childADispose[0].dispose();
                    panorama.material.alpha = 1;
                    panorama.material.depthFunction = 519;
                    panorama.material.diffuseTexture = texturaCargada360;
                    panorama.material.diffuseTexture.vScale = -1
                    panorama.material.diffuseTexture.hasAlpha = true;
                    panorama.position = new BABYLON.Vector3(xBtn360, zBtn360, yBtn360);
                    panorama.rotation.y = rotacion360;
                    panorama.scaling = new BABYLON.Vector3(100, 100, 100);
                    panorama.onBeforeRenderObservable.add(() => {
                        scene.clipPlane = null;
                    })
                    panorama.onAfterRenderObservable.add(() => {
                        scene.clipPlane = clippingPlane;
                    })                    

                    texturaCargando = false;
                    panoActiva2 = panorama;

                    entrarA360();
                    


                // }, duracionDeFade + 150);
            };
        };
        assetsManager.loadAsync();
        mostrarSpinner(true);
    };


    function entrarA360(){

        saveCamAlpha = arcRotCam.alpha;
        saveCamBeta = arcRotCam.beta;
        saveCamTarget = arcRotCam.target;
        saveCamRadius = arcRotCam.radius;
  
  
        for (var u = 0; u < arrayBotones360.length; u++) {
            var botonActual = arrayBotones360[u];
            var animMov022 = BABYLON.Animation.CreateAndStartAnimation('f934309', arrayBotones360[u].material, 'alpha', 60, 60, arrayBotones360[u].material.alpha, 0, 0, ease);
            animMov022.disposeOnEnd = true;
            animMov022.onAnimationEnd = function(){
                botonActual.setEnabled(false);
            }
        }  


        switch (textura360aCargar) {
            // case "Lobby": posX = -12.890149; posY = 1.810003; posZ = 3.54863; alphaArcRot = 1.6; alphaFPV = 3.14; break;
            case "Comercio": posX = -14.097976; posY = 1.810003; posZ = 12.440633; alphaArcRot = 0; alphaFPV = 3.9; break;
            case "Alberca": posX = -11.448908; posY = 7.713724; posZ = 19.327338; alphaArcRot = 3.8; alphaFPV = 7; break;
            case "Ingreso": posX = -38.091298; posY = 2.008823; posZ = 52.672816; alphaArcRot = 2; alphaFPV = 2.8; break;
        default: ;
        }

        arcRotCam.lowerRadiusLimit = 0;

        tempTarget = new BABYLON.Vector3(posX, posY, posZ);

        var animTarget360 = BABYLON.Animation.CreateAndStartAnimation('f332f3', arcRotCam, 'target', 20, 60, arcRotCam.target, tempTarget, 0, ease);
        var animRadiusDpto1 = BABYLON.Animation.CreateAndStartAnimation('f4', arcRotCam, 'radius', 20, 60, arcRotCam.radius, 0, 0, ease);          
        var animFovDpto1 = BABYLON.Animation.CreateAndStartAnimation('f432', arcRotCam, 'fov', 20, 60, arcRotCam.fov, 1.5, 0, ease);
        var animAlphaDpto1 = BABYLON.Animation.CreateAndStartAnimation('f99', arcRotCam, 'alpha', 20, 60, normalizarAlphaCamera(arcRotCam, alphaArcRot, true), normalizarAlphaCamera(arcRotCam, alphaArcRot, false), 0, ease);
        var animBetaDpto1 = BABYLON.Animation.CreateAndStartAnimation('f10', arcRotCam, 'beta', 20, 60, arcRotCam.beta, 0.7, 0, ease);
        animRadiusDpto1.disposeOnEnd = true;          
        animFovDpto1.disposeOnEnd = true;
        animAlphaDpto1.disposeOnEnd = true;              
        animBetaDpto1.disposeOnEnd = true;
        animTarget360.disposeOnEnd = true; 

        setTimeout(function(){
            fade();
            setTimeout(() => {
              btnContacto.classList.add("hidden1");
            }, duracionDeFade);
        }, 2200);

        animBetaDpto1.onAnimationEnd = function(){

            ponerPostProcess(false);      

            if(panoActiva2){
              panoActiva2.setEnabled(true);
            }



            arcRotCam.detachControl(canvas);
            scene.activeCamera = cameraFree;
            cameraFree.attachControl(canvas, true);

            // cameraFree.target = new BABYLON.Vector3(0, 0, 0);
            cameraFree.position = tempTarget
            cameraFree.rotation = new BABYLON.Vector3(0, alphaFPV, 0);

            //Regresando de fade
            setTimeout(() => {      
              fade();

              setTimeout(() => {      
                  mostrarBtns("regresarFullscreen");
              }, duracionDeFade);
            }, 200);

        }
        //Poner animacion de camara, al terminar, esto:
    };
};

  
  








function cancelar360(){
  assetsManager.reset();
  window.stop();
  seleccionarBotones360oAmenidad();
}






  
  // Activar o desactivar PP para 360s
function ponerPostProcess(seActivara){
    if(seActivara) {
        postprocess.exposure = setupExposure;
        postprocess.toneMappingEnabled = true;    
    }
    else {
        postprocess.exposure = 1;
        postprocess.toneMappingEnabled = false;
    }
}
  










function salirDe360(){

    fade();
    setTimeout(() => {
    
        arcRotCam.alpha = saveCamAlpha;
        arcRotCam.target = saveCamTarget;
        arcRotCam.radius = 200;
        arcRotCam.fov = camFovPlanta;
        arcRotCam.beta = 0.6;

        arcRotCam.lowerRadiusLimit = 35;        

        cameraFree.detachControl(canvas);
        scene.activeCamera = arcRotCam;
        arcRotCam.attachControl(canvas, true);

        ponerPostProcess(true);
        if(panoActiva2){
          panoActiva2.setEnabled(false);
        }

        M_Boton_360.alpha = 1;
        if(plantaAltaAmenidadesActiva){
          for (var u = 0; u < arrayBotones360pa.length; u++) {      
            arrayBotones360pa[u].setEnabled(true);
          };
        }
        else{
          for (var u = 0; u < arrayBotones360pb.length; u++) {      
            arrayBotones360pb[u].setEnabled(true);
          }; 
        };

        btnContacto.classList.remove("hidden1");

        fade();

        seleccionarBotones360oAmenidad();

        setTimeout(() => {
          mostrarBtns("btnsSelecciona360");
        }, 300);

    }, duracionDeFade);
}













//      M A P A

var camAlphaMapa = 4.62;
var camRadiusMapa = 421.89;
var camTargetMapa = new BABYLON.Vector3(-15.2, 27.84, 22.08);

function haciaMapa(){

  activarAutoRotate(false);

  paneoVerticalPermitido = false;

  COL_Edificio.setEnabled(false);

  arcRotCam.lowerRadiusLimit = 10;
  arcRotCam.upperRadiusLimit = 5000;

  //Si no se hace timeout 0 no se activa
  setTimeout(() => {
    var radiusCamera = BABYLON.Animation.CreateAndStartAnimation('f10', arcRotCam, 'radius', 40, 60, arcRotCam.radius, camRadiusMapa, 0, ease);
    radiusCamera.disposeOnEnd = true;
  }, 0);

  var targetCamera = BABYLON.Animation.CreateAndStartAnimation('f1e0', arcRotCam, 'target', 40, 60, arcRotCam.target, camTargetMapa, 0, ease);
  targetCamera.disposeOnEnd = true;

  var alphaCamera = BABYLON.Animation.CreateAndStartAnimation('f312', arcRotCam, 'alpha', 40, 60, normalizarAlphaCamera(arcRotCam, camAlphaMapa, true), normalizarAlphaCamera(arcRotCam, camAlphaMapa, false), 0, ease);
  alphaCamera.disposeOnEnd = true;

  var betaCamera = BABYLON.Animation.CreateAndStartAnimation('f90', arcRotCam, 'beta', 40, 60, arcRotCam.beta, 0.01, 0, ease);
  betaCamera.disposeOnEnd = true;

  
  betaCamera.onAnimationEnd = function(){
    fade();
    setTimeout(() => {

      setTimeout(() => {
        scene.imageProcessingConfiguration.exposure = 1;
        scene.imageProcessingConfiguration.toneMappingEnabled = false;
        fade();
      }, 200);

      mAgua.setEnabled(false);

      arcRotCam.lowerAlphaLimit = Math.PI * 1.5;;
      arcRotCam.upperAlphaLimit = Math.PI * 1.5;;
      arcRotCam.lowerBetaLimit = 0.01;
      arcRotCam.upperBetaLimit = 0.01;


      mMapaBig.setEnabled(true);
      mMapaMed.setEnabled(true);
      mMapaSml.setEnabled(true);
      mMapa_Edificio.setEnabled(true);
      mMapa_Edificio.material.alpha = 1;

      m1Edificio.setEnabled(false);
      m7Ventanas.setEnabled(false);

      arcRotCam.target = new BABYLON.Vector3(-0.20, 0 ,0.32);
      arcRotCam.alpha = Math.PI * 1.5;
      arcRotCam.radius = 50;


      // paneoVerticalPermitido = false;


      setTimeout(function(){
        mapaZoomOut();
      }, 150);

    }, duracionDeFade);
  };


  var skyboxOff = BABYLON.Animation.CreateAndStartAnimation('f11', m_Sky, 'visibility', 60, 60, m_Sky.visibility, 0, 0, ease);
  skyboxOff.onAnimationEnd = function(){
      m_Sky.setEnabled(false);
  };
  skyboxOff.disposeOnEnd = true;

};












function mapaZoomOut(){

    //   var targetCamera = BABYLON.Animation.CreateAndStartAnimation('f11', arcRotCam, 'target', 30, 60, arcRotCam.target, new BABYLON.Vector3(428.88, -5.20, -223.50), 0, ease);
    //   targetCamera.disposeOnEnd = true;

  var radiusCamera = BABYLON.Animation.CreateAndStartAnimation('f10', arcRotCam, 'radius', 30, 60, arcRotCam.radius, 385, 0, ease);
  radiusCamera.disposeOnEnd = true;

  escalaAutoDeUbicaciones = true;

  var desapareceEdificio = BABYLON.Animation.CreateAndStartAnimation('f1110', mMapa_Edificio.material, 'alpha', 35, 60, 1, 0, 0, ease);
  desapareceEdificio.disposeOnEnd = true;
  desapareceEdificio.onAnimationEnd = function(){

    mMapa_Edificio.setEnabled(false);

    for (var i = 0; i < arrayUbicaciones.length; i++) {
        var currentObject = arrayUbicaciones[i];
        currentObject.setEnabled(true);  
    }

    for (var i = 0; i < arrayMaterialesDeUbicacion.length; i++) {
        var currentMaterial = arrayMaterialesDeUbicacion[i];
        var apareceMarcador = BABYLON.Animation.CreateAndStartAnimation(currentMaterial.name + "_anim", currentMaterial, 'alpha', 35, 60, 0, 1, 0, ease);
        apareceMarcador.disposeOnEnd = true;
    }

    
      comienzaSeleccionUbicacion();

      arcRotCam.wheelPrecision = camWheelPrecisionMapa;
      arcRotCam.panningSensibility = camPanningSensMapa;
      arcRotCam.lowerRadiusLimit = 80;

      // setTimeout(function(){
      //   mostrarBtns("btnsSelecciona360");
      // }, 400)  
      mostrarBtns("btnsUbicacionInicio");
    //   arcRotCam.wheelPrecision = 0.5;
    //   arcRotCam.lowerRadiusLimit = 1000;
  };

  setTimeout(function(){
      mMapa_Letras.setEnabled(true);
      var aparecenLetras = BABYLON.Animation.CreateAndStartAnimation('f11010', mMapa_Letras.material, 'alpha', 35, 60, 0, 1, 0, ease);
      aparecenLetras.disposeOnEnd = true;
  }, 300);
}







var nombreDeUbicacion;
var distanciaDeUbicacion;

var observerSeleccionarUbicacion;

function comienzaSeleccionUbicacion(){

    // if(observerSeleccionarUbicacion){
    //     scene.onPointerObservable.remove(observerSeleccionarUbicacion);
    // };
    observerSeleccionarUbicacion = scene.onPointerObservable.add((pointerInfo) => {
        switch (pointerInfo.type) {
            case BABYLON.PointerEventTypes.POINTERTAP:
                var rayFPS = scene.createPickingRay(scene.pointerX, scene.pointerY, BABYLON.Matrix.Identity(), arcRotCam);	
                var hitFPS = scene.pickWithRay(rayFPS);
                
                if (hitFPS.pickedMesh && hitFPS.pickedMesh !== ubicacionSeleccionada && hitFPS.pickedMesh.name.includes("mMapa_Marker_")){
                    // ubicacionSeleccionadaFuncion(hitFPS.pickedMesh);

                    scene.onPointerObservable.remove(observerSeleccionarUbicacion);

                    if(padreBoundingBoxUbicacion.getChildMeshes()[0]){
                      padreBoundingBoxUbicacion.getChildMeshes().forEach(function(element){
                        padreBoundingBoxUbicacion.removeChild(element);
                      })
                    };

                    hitFPS.pickedMesh.setParent(padreBoundingBoxUbicacion);
                    mMapa_Letras.setParent(padreBoundingBoxUbicacion);                    


                    let childMeshes = padreBoundingBoxUbicacion.getChildMeshes();

                    let min = childMeshes[0].getBoundingInfo().boundingBox.minimumWorld;
                    let max = childMeshes[0].getBoundingInfo().boundingBox.maximumWorld;

                    for(let i=0; i<childMeshes.length; i++){
                        let meshMin = childMeshes[i].getBoundingInfo().boundingBox.minimumWorld;
                        let meshMax = childMeshes[i].getBoundingInfo().boundingBox.maximumWorld;

                        min = BABYLON.Vector3.Minimize(min, meshMin);
                        max = BABYLON.Vector3.Maximize(max, meshMax);
                    }

                    padreBoundingBoxUbicacion.setBoundingInfo(new BABYLON.BoundingInfo(min, max));


                    var camTarAPadre = BABYLON.Animation.CreateAndStartAnimation("n34nkf3", arcRotCam, 'target', 60, 60, arcRotCam.target, padreBoundingBoxUbicacion.getBoundingInfo().boundingBox.centerWorld, 0, ease);
                    camTarAPadre.disposeOnEnd = true;


                    var tempRadius = padreBoundingBoxUbicacion.getBoundingInfo().boundingSphere.radius * 5;
                    if(tempRadius > 2500){
                        tempRadius = 2500;
                    }
                    if(tempRadius < 500){
                        tempRadius = 500;
                    }

                    var camRadiusAPadre = BABYLON.Animation.CreateAndStartAnimation("n34n3kf3", arcRotCam, 'radius', 60, 60, arcRotCam.radius, tempRadius, 0, ease);
                    camRadiusAPadre.disposeOnEnd = true;
                    // console.log("org = " + padreBoundingBoxUbicacion.getBoundingInfo().boundingSphere.radius)
                    // console.log("new = " + tempRadius);

                    for(let i=0; i<arrayUbicaciones.length; i++){
                        arrayUbicaciones[i].visibility = 0.6;
                    }

                    ubicacionSeleccionada = hitFPS.pickedMesh;

                    ubicacionSeleccionada.visibility = 1;


                    distanciaDeUbicacion = BABYLON.Vector3.Distance(new BABYLON.Vector3(0, 0, 0), ubicacionSeleccionada.position);

                    nombreDeUbicacion = ubicacionSeleccionada.name.replace("mMapa_Marker_", "").replace("_", " ");
                    // poblarFichaDeUbicacion();

                    tUbicacionNombreDeSeleccion.innerHTML = nombreDeUbicacion;

                    ubicacionMedidaTiempo.innerHTML = (Math.round((parseInt(distanciaDeUbicacion)*0.01)*230/60)).toString() + " min";

                    ubicacionMedidaDistancia.innerHTML = (parseInt(distanciaDeUbicacion)*0.01).toFixed(2).toString() + " km";

                    ubicacionTextoSecundarioContainer.classList.remove("hidden2");

                    arrayUbicacionesParaEscala = [];

                    for(let i=0; i<arrayUbicaciones.length; i++){
                      if(arrayUbicaciones[i] != hitFPS.pickedMesh){
                        arrayUbicacionesParaEscala.push(arrayUbicaciones[i])
                      }
                    };

                    setTimeout(() => {
                      comienzaSeleccionUbicacion();
                    }, 200);

                    
                }
                else{
                    for(let i=0; i<arrayUbicaciones.length; i++){
                        arrayUbicaciones[i].visibility = 0.6;
                    };

                    arrayUbicacionesParaEscala = arrayUbicaciones;

                    ubicacionSeleccionada = null;
                    ubicacionTextoSecundarioContainer.classList.add("hidden2");

                    tUbicacionNombreDeSeleccion.innerHTML = "Selecciona una ubicación"

                    //deseleccionarUbicacion();
                }


                break;
        };
    });

}









function ubicacionSeleccionadaEnPanel(seleccion){

    meshSeleccionada = scene.getMeshByName("mMapa_Marker_" + seleccion.replace(" ", "_"));

    if(padreBoundingBoxUbicacion.getChildMeshes()[0]){
      padreBoundingBoxUbicacion.getChildMeshes().forEach(function(element){
        padreBoundingBoxUbicacion.removeChild(element);
      })
    };

    meshSeleccionada.setParent(padreBoundingBoxUbicacion);
    mMapa_Letras.setParent(padreBoundingBoxUbicacion);                    


    let childMeshes = padreBoundingBoxUbicacion.getChildMeshes();

    let min = childMeshes[0].getBoundingInfo().boundingBox.minimumWorld;
    let max = childMeshes[0].getBoundingInfo().boundingBox.maximumWorld;

    for(let i=0; i<childMeshes.length; i++){
        let meshMin = childMeshes[i].getBoundingInfo().boundingBox.minimumWorld;
        let meshMax = childMeshes[i].getBoundingInfo().boundingBox.maximumWorld;

        min = BABYLON.Vector3.Minimize(min, meshMin);
        max = BABYLON.Vector3.Maximize(max, meshMax);
    }

    padreBoundingBoxUbicacion.setBoundingInfo(new BABYLON.BoundingInfo(min, max));


    var camTarAPadre = BABYLON.Animation.CreateAndStartAnimation("n34nkf3", arcRotCam, 'target', 60, 60, arcRotCam.target, padreBoundingBoxUbicacion.getBoundingInfo().boundingBox.centerWorld, 0, ease);
    camTarAPadre.disposeOnEnd = true;


    var tempRadius = padreBoundingBoxUbicacion.getBoundingInfo().boundingSphere.radius * 5;
    if(tempRadius > 2500){
        tempRadius = 2500;
    }
    if(tempRadius < 500){
        tempRadius = 500;
    }

    var camRadiusAPadre = BABYLON.Animation.CreateAndStartAnimation("n34n3kf3", arcRotCam, 'radius', 60, 60, arcRotCam.radius, tempRadius, 0, ease);
    camRadiusAPadre.disposeOnEnd = true;
    // console.log("org = " + padreBoundingBoxUbicacion.getBoundingInfo().boundingSphere.radius)
    // console.log("new = " + tempRadius);

    for(let i=0; i<arrayUbicaciones.length; i++){
        arrayUbicaciones[i].visibility = 0.6;
    }

    ubicacionSeleccionada = meshSeleccionada;

    ubicacionSeleccionada.visibility = 1;


    distanciaDeUbicacion = BABYLON.Vector3.Distance(new BABYLON.Vector3(0, 0, 0), ubicacionSeleccionada.position);

    nombreDeUbicacion = ubicacionSeleccionada.name.replace("mMapa_Marker_", "").replace("_", " ");
    // poblarFichaDeUbicacion();

    tUbicacionNombreDeSeleccion.innerHTML = nombreDeUbicacion;

    ubicacionMedidaTiempo.innerHTML = (Math.round((parseInt(distanciaDeUbicacion)*0.01)*230/60)).toString() + " min";

    ubicacionMedidaDistancia.innerHTML = (parseInt(distanciaDeUbicacion)*0.01).toFixed(2).toString() + " km";

    ubicacionTextoSecundarioContainer.classList.remove("hidden2");

}









var tempHaciaMaquetaAnimRadiusCamera;
var tempHaciaMaquetaAnimTargetCamera;

function haciaMaqueta(){

  scene.onPointerObservable.remove(observerSeleccionarUbicacion);

  arcRotCam.lowerRadiusLimit = 2;

  var desaparecenLetras = BABYLON.Animation.CreateAndStartAnimation('f11010', mMapa_Letras.material, 'alpha', 35, 60, 1, 0, 0, ease);
  desaparecenLetras.disposeOnEnd = true;
  desaparecenLetras.onAnimationEnd = function(){
      mMapa_Letras.setEnabled(false);
  }

  for (var i = 0; i < arrayMaterialesDeUbicacion.length; i++) {
      var currentMaterial = arrayMaterialesDeUbicacion[i];
      var apareceMarcador = BABYLON.Animation.CreateAndStartAnimation(currentMaterial.name + "_anim", currentMaterial, 'alpha', 60, 60, 1, 0, 0, ease);
      apareceMarcador.disposeOnEnd = true;
  }

  setTimeout(function(){
      for (var i = 0; i < arrayUbicaciones.length; i++) {
          var currentObject = arrayUbicaciones[i];
          currentObject.setEnabled(false);  
          currentObject.visibility = 0.6;
      }
  }, 1000);

  setTimeout(() => {
    tempHaciaMaquetaAnimRadiusCamera = BABYLON.Animation.CreateAndStartAnimation('2fdb1321', arcRotCam, 'radius', 30, 60, arcRotCam.radius, 50, 0, ease);
    tempHaciaMaquetaAnimRadiusCamera.disposeOnEnd = true;
  }, 0);

  tempHaciaMaquetaAnimTargetCamera = BABYLON.Animation.CreateAndStartAnimation('f32410', arcRotCam, 'target', 30, 60, arcRotCam.target, new BABYLON.Vector3(-0.20, 0 ,0.32), 0, ease);
  tempHaciaMaquetaAnimTargetCamera.disposeOnEnd = true;

  setTimeout(function(){
    mMapa_Edificio.setEnabled(true);      
    var apareceEdificio = BABYLON.Animation.CreateAndStartAnimation('f111230', mMapa_Edificio.material, 'alpha', 50, 60, 0, 1, 0, ease);
    apareceEdificio.disposeOnEnd = true;
    apareceEdificio.onAnimationEnd = function(){
        escalaAutoDeUbicaciones = false;

        setTimeout(function(){
            fade();
            setTimeout(() => {

              tempHaciaMaquetaAnimRadiusCamera.stop();
              tempHaciaMaquetaAnimTargetCamera.stop();
                ubicacionTextoSecundarioContainer.classList.add("hidden2");
                ubicacionSeleccionada = null;
                arrayUbicacionesParaEscala = arrayUbicaciones;
                tUbicacionNombreDeSeleccion.innerHTML = "Selecciona una ubicación";

                arcRotCam.lowerAlphaLimit = null;
                arcRotCam.upperAlphaLimit = null;
                arcRotCam.lowerBetaLimit = 0.01;
                arcRotCam.upperBetaLimit = camUpperBeta;


                mMapaBig.setEnabled(false);
                mMapaMed.setEnabled(false);
                mMapaSml.setEnabled(false);
                mMapa_Edificio.setEnabled(false);
                mMapa_Edificio.material.alpha = 0;

                m1Edificio.setEnabled(true);
                m7Ventanas.setEnabled(true);

                setTimeout(() => {
                  arcRotCam.target = camTargetMapa;
                }, 0);
                setTimeout(() => {
                  arcRotCam.alpha = camAlphaMapa;
                }, 20);
                setTimeout(() => {
                  arcRotCam.radius = camRadiusMapa;
                }, 30);
                setTimeout(() => {
                  arcRotCam.beta = 0.01;
                }, 40);

                // arcRotCam.target = camTargetMapa;
                // arcRotCam.alpha = camAlphaMapa;
                // arcRotCam.radius = camRadiusMapa;
                // arcRotCam.beta = 0.01;

                arcRotCam.panningSensibility = 0;

                mAgua.setEnabled(true);

                m_Sky.setEnabled(true);
                m_Sky.visibility = 1;

                setTimeout(() => {
                    scene.imageProcessingConfiguration.exposure = setupExposure;
                    scene.imageProcessingConfiguration.toneMappingEnabled = true;

                    arcRotCam.position = new BABYLON.Vector3(-15.58, 449.7, 17.87);
                    if(arcRotCam.position == new BABYLON.Vector3(-15.58, 449.7, 17.87)){{
                      console.log("same");
                    }}
                    fade();

                    setTimeout(function(){

                        paneoVerticalPermitido = "false";
                        arcRotCam.panningSensibility = 0;
                        var animMov7 = BABYLON.Animation.CreateAndStartAnimation('f29', arcRotCam, 'target', 40, 60, arcRotCam.target, camTarInicio, 0, ease);
                        var animMov8 = BABYLON.Animation.CreateAndStartAnimation('f312', arcRotCam, 'alpha', 40, 60, normalizarAlphaCamera(arcRotCam, 3.87, true), normalizarAlphaCamera(arcRotCam, 3.87, false), 0, ease);
                        var animMov6 = BABYLON.Animation.CreateAndStartAnimation('f8', arcRotCam, 'radius', 40, 60, arcRotCam.radius, 200, 0, ease);
                        var animMov5 = BABYLON.Animation.CreateAndStartAnimation('f9', arcRotCam, 'beta', 40, 60, arcRotCam.beta, 1.40, 0, ease);



                        animMov5.disposeOnEnd = true;
                        animMov6.disposeOnEnd = true;
                        animMov8.disposeOnEnd = true;    
                        animMov7.disposeOnEnd = true;   
                        animMov7.onAnimationEnd = function(){

                            paneoVerticalPermitido = "PaneoInicio";
                            arcRotCam.panningSensibility = camPanningSens;

                            console.log("ouut")

                            arcRotCam.lowerRadiusLimit = camLowerRadiusInicio;
                            arcRotCam.upperRadiusLimit = camUpperRadiusInicio;

                            arcRotCam.wheelPrecision = camWheelPrecisionInicio;
                            COL_Edificio.setEnabled(true);
                            mostrarBtns("btnsSobreElProyecto");
                            activarAutoRotate(true);
                        } 
                    }, 500);
                }, 200);
                
            }, duracionDeFade);
        }, 200);
    }
  }, 100);

}

























































//      U T I L I T I E S   D E   J A V A S C R I P T   D E   P R O Y E C T O     -utilities de javascript de proyecto



//      Google Sheets

//      Departamentos

let departamentosDisponibles = []
// let departamentosReservados = []
let departamentosVendidos = []

let departamentosData = []


let jsonDepartamentosCargado = false;
let fallosDeCargarJsonDepartamentos = 0;

function activarJsonDepartamentos(){
    
  fetch('https://sheets.googleapis.com/v4/spreadsheets/1gW9F83zNCsPq8Ifh6yPoRFhKP2MdqxvZtOvxqzyvaEE/values/departamentos?alt=json&key=AIzaSyBDPVCKsnnVT7c_kxE431k7IjuKAF9PvvE').then(function (response) {
    // The API call was successful!
    return response.json()
  }).then(function (data) {

    for (let i = 1; i < data.values.length; i++) {
      const actual = data.values[i];
      obj = {
        departamento: actual[0],
        estatus: actual[1],
        tipo: actual[2],
        totalM2: actual[3],
        precio: actual[4],
        estac: actual[5],
        bodega: actual[6],
        rec: actual[7],
        flex: actual[8],
        banos: actual[9],
        ctoDeServ: actual[10],
      };
      departamentosData.push(obj);
    }

    console.log(departamentosData);


    for(var i = 0; i < departamentosData.length; i++){

      var checando = departamentosData[Object.keys(departamentosData)[i]];

      if(checando[Object.keys(checando)[1]] == "Disponible" || checando[Object.keys(checando)[1]] == "En negociacion" || checando[Object.keys(checando)[1]] == "Apartado"){
          departamentosDisponibles.push(checando[Object.keys(checando)[0]]);
      }
    //   else if(checando[Object.keys(checando)[1]] == "Reservado"){
    //       departamentosReservados.push(checando[Object.keys(checando)[0]]);
    //   }
      else{
          departamentosVendidos.push(checando[Object.keys(checando)[0]]);
      }
    };


    // Colocar material a Disponibles, reservados y vendidos

    // if(todoListo){

    //   for(var i = 0; i < departamentosData.length; i++){
    //     var checando = departamentosData[Object.keys(departamentosData)[i]];
    
    //     if(checando[Object.keys(checando)[1]] == "Disponible"){
    //         scene.getMeshByName("SELv_" + checando[Object.keys(checando)[0]]).material = M_SelvDisp;
    //     }
    //     else if(checando[Object.keys(checando)[1]] == "Reservado"){
    //         scene.getMeshByName("SELv_" + checando[Object.keys(checando)[0]]).material = M_SelvRese;
    //     }
    //     else{
    //         scene.getMeshByName("SELv_" + checando[Object.keys(checando)[0]]).material = M_SelvVend;
    //         scene.getMeshByName("SELs_" + checando[Object.keys(checando)[0]]).dispose();
    //     }
    //   };

    // }


    jsonDepartamentosCargado = true;


  }).catch(function (err) {
    // There was an error

    console.warn('Error al cargar json de departamentos, intentando de nuevo.', err);

    activarJsonDepartamentos();

  });
}

activarJsonDepartamentos();





// var prototiposData = [];

// function activarJsonPrototipos(){

//   fetch('https://sheets.googleapis.com/v4/spreadsheets/1L1NMZcpwqx-ueorXvsJLsiFI3-42PzcIwUfZNylnejM/values/prototipos?alt=json&key=AIzaSyCzBRmH-DvW_jWzP4bFTdFbEgQzw8nj6rc').then(function (response) {
//     // The API call was successful!
//     return response.json()
//   }).then(function (data) {
  
//     for (let i = 1; i < data.values.length; i++) {
//       const actual = data.values[i];
//       obj = {
//         prototipo: actual[0],
//         imagenes: actual[1]
//       };
//       prototiposData.push(obj);
//     }
  
//     console.log(prototiposData)
  
//   }).catch(function (err) {
//     // There was an error
//     console.warn('Algo está mal', err)

//     activarJsonPrototipos();
//   });
  
   
// }
// activarJsonPrototipos();









////////  Variables a usar



let descripcionAmenidades;
let imagenesAmenidades = [];




let zonaActiva;



















//      H A S H




let hash;

let hashReferencia = false;
let hashDepartamento = false;
let hashEmbedded = false;











if(window.location.href.includes("logicaexp")){
  hashReferencia = "predeterminado";
  $("#favicon").attr("href","assets/img/favicon_logica.ico");
}
if(!hashReferencia){
  hashReferencia = "predeterminado"
}






if(window.location.hash) {
  hash = window.location.hash;
  // hash = hash.replace("#", "");

  // Embedded o no
  if(hash.includes("?")){
    hashEmbedded = true;

    btnContacto.innerHTML = "";
    logoTopIzquierda.innerHTML = "";
    btnMeInteresa.innerHTML = "";
    btnMeInteresa.classList.remove("group-btn__item");
    btnMeInteresa.classList.remove("meInteresa");
    btnMeInteresa.classList.remove("item-2");

  };


  // Tiene departamento?
  if(/\d/.test(hash)){
    hashDepartamento = hash.replace(/[^\d]/g, '')
  };


  // Tiene referencia?
  if(hash.includes(":")){
    hashReferencia = hash.split(":")[1];
  };


};





function irHashDepartamento(){

  if(departamentosDisponibles.indexOf(hashDepartamento) > -1){
  // if(departamentosDisponibles.indexOf(hashDepartamento) > -1 || departamentosReservados.indexOf(hashDepartamento) > -1){

    primeraVezSelDpto = false;

    activarAutoRotate(false);

    departamentoSeleccionado = hashDepartamento;




    paneoVerticalPermitido = false;
    arcRotCam.panningSensibility = 0;

    actualizarContactoWhatsapp();


    // N    PARA COLOCAR NODES, DE SELfh y asignar var de SELfh
    if(departamentoSeleccionado.includes("24")){
      SELfhSeleccionado = scene.getMeshByName("SELfh_PH_" + departamentoSeleccionado.substr(departamentoSeleccionado.length - 1))                    
    }
    else{
        nodeDptos.position.y = (distAlturaPisoAPiso * parseInt(departamentoSeleccionado.slice(0, -2)) - (distAlturaPisoAPiso * 3));
        SELfhSeleccionado = scene.getMeshByName("SELfh_Dptos_" + departamentoSeleccionado.substr(departamentoSeleccionado.length - 1))
    };

    SELfhSeleccionado.setEnabled(true);
    var animaMat4 = BABYLON.Animation.CreateAndStartAnimation('f303', SELfhSeleccionado.material, 'alpha', 70, 60, SELfhSeleccionado.material.alpha, alphaSELfh, 0, ease);
    animaMat4.disposeOnEnd = true;  
    



    // Animaciones de camara
    tempTargetSELfh = new BABYLON.Vector3(
        SELfhSeleccionado.getBoundingInfo().boundingBox.centerWorld.x,
        (distAlturaPisoAPiso * parseInt(departamentoSeleccionado.slice(0, -2))),
        SELfhSeleccionado.getBoundingInfo().boundingBox.centerWorld.z
    );


    switch (parseInt(departamentoSeleccionado.substr(-1))){
      case 1: tempAlphaSELfh = 5.15; break;
      case 2: tempAlphaSELfh = 4.3; break;
      case 3: tempAlphaSELfh = 4; break;
      case 4: tempAlphaSELfh = 0.88; break;
      case 5: tempAlphaSELfh = 1.2; break;
      case 6: tempAlphaSELfh = 1.54; break;
      case 7: tempAlphaSELfh = 1.27; break;
      default:
    };

  var animTargetDpto = BABYLON.Animation.CreateAndStartAnimation('f45273', arcRotCam, 'target', 40, 60, arcRotCam.target, tempTargetSELfh, 0, ease);

  alphaRandom = cambiarNegativoRandom(0.15);
  alphaTemporal = tempAlphaSELfh + alphaRandom;
  var animMov81 = BABYLON.Animation.CreateAndStartAnimation('f312', arcRotCam, 'alpha', 40, 60, normalizarAlphaCamera(arcRotCam, alphaTemporal, true), normalizarAlphaCamera(arcRotCam, alphaTemporal, false), 0, ease);

  var animRadiusDpto = BABYLON.Animation.CreateAndStartAnimation('f3454', arcRotCam, 'radius', 40, 60, arcRotCam.radius, 45, 0, ease);
  var animBetaDpto = BABYLON.Animation.CreateAndStartAnimation('f34554', arcRotCam, 'beta', 40, 60, arcRotCam.beta, 1.45, 0, ease);
  animRadiusDpto.disposeOnEnd = true;   
  animMov81.disposeOnEnd = true;  
  animTargetDpto.disposeOnEnd = true;                  
  animBetaDpto.disposeOnEnd = true;                  
  

    nombreDepartamento.innerHTML = departamentoSeleccionado;

  //ANALYTICS - Departamento y prototipo seleccionado
    analyticsDepartamentoSeleccionado();

    setTimeout(() => {
      mostrarBtns("UIdepartamentoSeleccionado");
    }, 1150);

  }
  else{
    mostrarBtns("btnsIniciales");

    $(`#btnDepartamentos`).addClass('atencion');
    $(`#btnSobreElProyecto`).addClass('atencion');
  }
}












var referenciasData = [];
let fallosDeCargarJsonReferencias = 0;


function activarJsonReferencias(){

  fetch('https://sheets.googleapis.com/v4/spreadsheets/1tr6BTPWQ4_Io3k7WmhWzPcQl7mycputZnIk0mwKGus0/values/contactos?alt=json&key=AIzaSyBDPVCKsnnVT7c_kxE431k7IjuKAF9PvvE').then(function (response) {
    // The API call was successful!
    return response.json()
  }).then(function (data) {

    for (let i = 1; i < data.values.length; i++) {
      const actual = data.values[i];
      obj = {
        extension: actual[0],
        whatsapp: actual[1],
        correo: actual[2],
        telefonos: actual[3]
      };
      referenciasData.push(obj);
    }

    console.log(referenciasData);
  
    actualizarContactoWhatsapp();

    for(var i = 0; i < referenciasData.length; i++){
      var checando = referenciasData[Object.keys(referenciasData)[i]];
    
      if(checando[Object.keys(checando)[0]] == hashReferencia){

        refCorreo.innerHTML = checando[Object.keys(checando)[2]];
        refCorreo.href = "mailto:" + checando[Object.keys(checando)[2]];


        poniendoRefTel01 = checando[Object.keys(checando)[3]].split(",")[0];
        poniendoRefTel02 = checando[Object.keys(checando)[3]].split(",")[1];
        poniendoRefTel03 = checando[Object.keys(checando)[3]].split(",")[2];
  
        if(poniendoRefTel01){
          refTel01.innerHTML = poniendoRefTel01
          refTel01.href = "tel:" + poniendoRefTel01.replace(/ /g, "").replace(/[(]/g, "").replace(/[)]/g, "");
        }
        else{
          refTel01.innerHTML = "";
        }
  
        if(poniendoRefTel02){
          refTel02.innerHTML = poniendoRefTel02
          refTel02.href = "tel:" + poniendoRefTel02.replace(/ /g, "").replace(/[(]/g, "").replace(/[)]/g, "");
        }
        else{
          refTel02.innerHTML = "";
        }
  
        if(poniendoRefTel03){
          refTel03.innerHTML = poniendoRefTel03
          refTel03.href = "tel:" + poniendoRefTel03.replace(/ /g, "").replace(/[(]/g, "").replace(/[)]/g, "");
        }
        else{
          refTel03.innerHTML = "";
        }
      }
    };
  
    }).catch(function (err) {
      // There was an error

      console.warn('Error al cargar json de referencias, intentando de nuevo.', err);
  
      // activarJsonReferencias();  

  });  
}

activarJsonReferencias();



function actualizarHash(){
  if(hashReferencia && hashReferencia !== "predeterminado"){
    window.location.hash = "#" + hashReferencia + "&d" + hashDepartamento;
  }
  else{
    window.location.hash = "#d" + hashDepartamento;
  }
  // refWhatsapp.href = "https://api.whatsapp.com/send?phone=521" + refWhatsappHTML + "&text=" + encodeURIComponent('Hola, me interesa el departamento "') + hashDepartamento + encodeURIComponent('" de Sant Uriel.');
};





function actualizarContactoWhatsapp(){

  for(var i = 0; i < referenciasData.length; i++){
    var checando = referenciasData[Object.keys(referenciasData)[i]];

    if(checando[Object.keys(checando)[0]] == hashReferencia){

      // Español
      stringWhatsapp01es = "https://api.whatsapp.com/send?phone=521";
      stringWhatsapp02es = "&text=" + encodeURIComponent('Hola, me interesa el departamento "');
      stringWhatsapp03es = encodeURIComponent('" de Dúo 24.')
      stringWhatsapp04NoHashEs = "&text=" + encodeURIComponent('Hola, me interesan los departamentos de Dúo 24.')

      poniendoRefWhatsapp01 = checando[Object.keys(checando)[1]].split(",")[0];
      poniendoRefWhatsapp02 = checando[Object.keys(checando)[1]].split(",")[1];
      poniendoRefWhatsapp03 = checando[Object.keys(checando)[1]].split(",")[2];

      if(poniendoRefWhatsapp01){

        poniendoRefWhatsappHTML01 = checando[Object.keys(checando)[1]].split(",")[0].replace(/ /g, "").replace(/[(]/g, "").replace(/[)]/g, "");

        refWhatsapp01.innerHTML = poniendoRefWhatsapp01
        if(hashDepartamento){
          refWhatsapp01.href = stringWhatsapp01es + poniendoRefWhatsappHTML01.replace(/ /g, "").replace(/[(]/g, "").replace(/[)]/g, "") + stringWhatsapp02es + hashDepartamento + stringWhatsapp03es;
        }
        else{
          refWhatsapp01.href = stringWhatsapp01es + poniendoRefWhatsappHTML01.replace(/ /g, "").replace(/[(]/g, "").replace(/[)]/g, "") + stringWhatsapp04NoHashEs;
        }
      }
      else{
        refWhatsapp01.innerHTML = "";
      };
      
      
      if(poniendoRefWhatsapp02){

        poniendoRefWhatsappHTML02 = checando[Object.keys(checando)[1]].split(",")[1].replace(/ /g, "").replace(/[(]/g, "").replace(/[)]/g, "");

        refWhatsapp02.innerHTML = poniendoRefWhatsapp02
        if(hashDepartamento){
            refWhatsapp02.href = stringWhatsapp01es + poniendoRefWhatsappHTML02.replace(/ /g, "").replace(/[(]/g, "").replace(/[)]/g, "") + stringWhatsapp02es + hashDepartamento + stringWhatsapp03es;
        }
        else{
            refWhatsapp02.href = stringWhatsapp01es + poniendoRefWhatsappHTML02.replace(/ /g, "").replace(/[(]/g, "").replace(/[)]/g, "") + stringWhatsapp04NoHashEs;
        }
      }
      else{
        refWhatsapp02.innerHTML = "";
      };
      
      
      if(poniendoRefWhatsapp03){

        poniendoRefWhatsappHTML03 = checando[Object.keys(checando)[1]].split(",")[2].replace(/ /g, "").replace(/[(]/g, "").replace(/[)]/g, "");

        refWhatsapp03.innerHTML = poniendoRefWhatsapp03
        if(hashDepartamento){
            refWhatsapp03.href = stringWhatsapp01es + poniendoRefWhatsappHTML03.replace(/ /g, "").replace(/[(]/g, "").replace(/[)]/g, "") + stringWhatsapp02es + hashDepartamento + stringWhatsapp03es;
        }
        else{
            refWhatsapp03.href = stringWhatsapp01es + poniendoRefWhatsappHTML03.replace(/ /g, "").replace(/[(]/g, "").replace(/[)]/g, "") + stringWhatsapp04NoHashEs;
        }
      }
      else{
        refWhatsapp03.innerHTML = "";
      };

    }
  };
}












































//      F U N C I O N E S   G E N E R A L E S   P A R A   I N T E R F A Z      -funciones variadas para interfaz




let ultimosBtnsActivos;


function apareceCarrusel(zona){

  var anteriorAOcultar;
  var carrouselAActivar;

  switch (zona) {
    case 'Amenidades': 
                       carrouselAActivar = "#" + "carrouselAmenidades";
                       claseAOcultar = ".btnsCarrusel";
                       break;
    case 'Mapa':       
                       carrouselAActivar = "#" + "carrouselMapa";
                       claseAOcultar = ".btnsCarruselMapa";
                       break;
    default:  ;
  }

  $(claseAOcultar).addClass('hidden1');
  setTimeout(()=>{
    $(carrouselAActivar).addClass('hidden');
    // actualizarZonaActiva();
    setTimeout(() => {
      // carrouselAmenidadTitulo.innerHTML = amenidadActual;
      // carrouselMapaTitle.innerHTML = zonaActiva;
      $(carrouselAActivar).removeClass('hidden');
      setTimeout(()=>{
        $(claseAOcultar).removeClass('hidden1');
      }, 450);
      ultimosBtnsActivos = carrouselAActivar;
    }, 250);
  }, 200);
}





//      Ocultar y mostrar botones

function siguienteBoton(e){
  let t = e.target;
  let btnActual = e.currentTarget.id;
  $(`#${btnActual} div`).addClass('hidden1');

  setTimeout(()=>{
    $(`#${btnActual}`).addClass('hidden');
  }, 150);

  setTimeout(()=>{
    nextBtnChilds = t.getAttribute('value');
    $(`#${this.nextBtnChilds}`).removeClass('hidden');
    setTimeout(()=>{
      $(`#${this.nextBtnChilds} div`).removeClass('hidden1');
    }, 200);
  }, 100);
};





function mostrarBtns(a){
    $(`#${a}`).removeClass('hidden');
    setTimeout(()=>{
      $(`#${a} div`).removeClass('hidden1');
    }, 250);
    if(a !== "regresarFullscreen"){
      ultimosBtnsActivos = a;
    }
}





function ocultarBtns(a){
  $(`#${a} div`).addClass('hidden1');
  
  setTimeout(()=>{
    $(`#${a}`).addClass('hidden');
  }, 150);
}





function mostrarPanel(a){
  $(`#${a}`).addClass('hiddenBlur');
  $(`#${a}`).removeClass('hidden');
  $(`#${a}`).find(">:first-child").addClass("hiddenPanel");
  setTimeout(() => {
    $(`#${a}`).removeClass('hiddenBlur');
    $(`#${a}`).find(">:first-child").removeClass("hiddenPanel");
  }, 100);
}






function ocultarPanel(a){
  $(`#${a}`).addClass('hiddenBlur');
  $(`#${a}`).find(">:first-child").addClass("hiddenPanel");
  setTimeout(() => {
    $(`#${a}`).addClass('hidden');
    $(`#${a}`).removeClass('hiddenBlur');
    $(`#${a}`).find(">:first-child").removeClass("hiddenPanel");
  }, 250);
}




///////// Simulacion de loader

// setTimeout(()=>{ 
//   loader.classList.add('hidden')
// }, 200);

///////// Simulacion de loader listo
//            Aparecen botones y contacto




















//      I N T E R A C C I O N   E N T R E   B O T O N E S   Y   B A B Y L O N   J S
//      -interaccion entre botones y babylon js



//    C O N T A C T O


btnContacto.addEventListener('click', e => {

  analyticsContacto();

  mostrarPanel("contactoExpanded");
  // $(`#fps`).removeClass('hidden');
})


contactoExpanded.addEventListener('click', e => {
  if(e.target.id == "btnRegresar1"){
    ocultarPanel("contactoExpanded");
    // $(`#fps`).addClass('hidden');
  }
  if(e.target.id == "contactoExpanded"){
    ocultarPanel("contactoExpanded");
    // $(`#fps`).addClass('hidden');
  }
  if(e.target.id == "contact-settings"){
    mostrarPanel("settings");
    ocultarPanel("contactoExpanded"); 
  }

  if(e.target.id == "refWhatsapp01"){
    analyticsContactoWhatsApp();
  }
  if(e.target.id == "refWhatsapp02"){
    analyticsContactoWhatsApp();
  }
  if(e.target.id == "refWhatsapp03"){
    analyticsContactoWhatsApp();
  }
  if(e.target.id == "refCorreo"){
    analyticsContactoCorreo();
  }
  if(e.target.id == "refTel01"){
    analyticsContactoTelefono();
  }
  if(e.target.id == "refTel01"){
    analyticsContactoTelefono();
  }
  if(e.target.id == "refTel01"){
    analyticsContactoTelefono();
  }
})




//      S E T T I N G S


let botonesOcultos = false;


settings.addEventListener('click', e => {

  if(e.target.id == "btnPantallaCompleta"){
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      btnPantallaCompleta.innerHTML = "Pantalla normal"
    } 
    else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
        btnPantallaCompleta.innerHTML = "Pantalla completa"
      }
    }
  }
  else if(e.target.id == "btnAutoRotate"){
    if (usarAutoRotateGlobal) {
      activarAutoRotate(false);
      usarAutoRotateGlobal = false;
      btnAutoRotate.innerHTML = "Con auto rotación"
    } 
    else {
        usarAutoRotateGlobal = true;
        activarAutoRotate(true);
        btnAutoRotate.innerHTML = "Sin auto rotación"
      }
    }
  else if(e.target.id == "btnOcultarBtns"){
    if(botonesOcultos){
      mostrarBtns(ultimosBtnsActivos)
      btnContacto.classList.remove('btnsOcultos');
      botonesOcultos = false;
      btnOcultarBtns.innerHTML = "Ocultar botones"
    }
    else{
      ocultarBtns(ultimosBtnsActivos)
      btnContacto.classList.add('btnsOcultos');
      botonesOcultos = true;
      btnOcultarBtns.innerHTML = "Mostrar botones"
    }
  }
  else if(e.target.id == "tConfiguracion"){
    if(fps.classList.contains("hidden")){
      fps.classList.remove("hidden");
    }
    else{
      fps.classList.remove("add");
    }

  }
  else if(e.target.id == "settings"){
    ocultarPanel("settings");
    mostrarPanel("contactoExpanded"); 
  }
  else if(e.target.id == "btnRegresar7"){
    ocultarPanel("settings");
    mostrarPanel("contactoExpanded"); 
  }
})


//      Cuando fullscreen se desactiva sin boton

document.onfullscreenchange = function(event){
    if (document.fullscreenElement) {
      btnPantallaCompleta.innerHTML = "Pantalla normal"
    } 
    else {
      btnPantallaCompleta.innerHTML = "Pantalla completa"
    }
};



















//      N A V E G A C I O N   E N T R E   B O T O N E S


function aparecerBtnsIntro(){
  setTimeout(()=>{ 
    btnContacto.classList.remove('hidden1');
    setTimeout(()=>{

      if(!hashDepartamento){
        mostrarBtns("btnsIniciales");

        $(`#btnDepartamentos`).addClass('atencion');
        $(`#btnSobreElProyecto`).addClass('atencion');

      }
    }, 550);
  }, 1200);  
}







// Botones iniciales

btnsIniciales.addEventListener('click', e => {
  switch (e.target.id) {
    case 'btnDepartamentos': 
    if(departamentosDisponibles.length > 0){
      ocultarBtns("btnsIniciales");
      setTimeout(() => {

        seleccionarDepartamento();
      }, 100);
    }
    ; break;

    case 'btnSobreElProyecto': 
    ocultarBtns("btnsIniciales");
    setTimeout(() => {

      // seleccionarAmenidad();
      mostrarBtns("btnsSobreElProyecto");

    }, 100);
    ; break;

    default:  ;
  }

  $(`#btnDepartamentos`).removeClass('atencion');
  $(`#btnSobreElProyecto`).removeClass('atencion');
  // zoomOutCam();
})






btnsSobreElProyecto.addEventListener('click', e => {
  switch (e.target.id) {
    case 'btnAmenidades': 
      ocultarBtns("btnsSobreElProyecto");

      mostrarAmenidades();
    
    ; break;

    case 'btnUbicacion': 
      ocultarBtns("btnsSobreElProyecto");

      haciaMapa();

    ; break;

    case 'btnRegresar2543': 
      ocultarBtns("btnsSobreElProyecto");

      setTimeout(function(){
        mostrarBtns("btnsIniciales");
      }, 400) 
    ; break;

    default:  ;
  }
  // zoomOutCam();
});










btnsSelecciona360.addEventListener('click', e => {
  if(e.target.id == "btnVerPlantaAltaAm"){
    ocultarBtns("btnsSelecciona360");
    
    verPlantaAltaAmenidades();
  }
  if(e.target.id == "btnVerPlantaBajaAm"){
    ocultarBtns("btnsSelecciona360");
    
    verPlantaBajaAmenidades();
  }
  if(e.target.id == "btnRegresar2123"){
    ocultarBtns("btnsSelecciona360");
    salirDeAmenidades();

    setTimeout(function(){
      mostrarBtns("btnsSobreElProyecto");
    }, 800) 
  }
})

panelCargando360.addEventListener('click', e => {
  if(e.target.id == "btnCancelar360"){
    ocultarPanel("panelCargando360");

    cancelar360();

    setTimeout(function(){
      mostrarBtns("btnsSelecciona360");
    }, 800) 
  }
})



btnsSeleccionaDepartamento.addEventListener('click', e => {
  if(e.target.id == "btnRegresar3"){
    ocultarBtns("btnsSeleccionaDepartamento");
    salirDeSeleccionarDepartamento();
  }
})




// btnsSeleccionaAmenidad.addEventListener('click', e => {
//   if(e.target.id == "btnRegresar2"){
//     ocultarBtns("btnsSeleccionaAmenidad");
//     salirDeSeleccionarAmenidad();

//     setTimeout(function(){
//       mostrarBtns("btnsIniciales");
      
//     }, 800) 
//   }
// })







function poblarDOMdeAmenidad(){

  switch (amenidadSeleccionada){
    case 'Alberca':   indexDeAmenidad = 0;
    ; break;
    case 'Bicicletas':   indexDeAmenidad = 1;
    ; break;
    case 'Camastros':   indexDeAmenidad = 2;
    ; break;
    case 'Elevador':   indexDeAmenidad = 3;
    ; break;
    case 'Gym':   indexDeAmenidad = 4;
    ; break;
    case 'Privada':   indexDeAmenidad = 5;
    ; break;
    case 'Recepcion':   indexDeAmenidad = 6;
    ; break;
    case 'Restaurant':   indexDeAmenidad = 7;
    ; break;
    case 'Seguridad':   indexDeAmenidad = 8;
    ; break;
    case 'Yoga':   indexDeAmenidad = 9;
    ; break;

    default:
  }


  filaDeAmenidadSeleccionada = amenidadesData[indexDeAmenidad];

  if(filaDeAmenidadSeleccionada[4] !== undefined){
    imagenesAmenidades = filaDeAmenidadSeleccionada[4].split(", ");
  }
  
  else{
    imagenesAmenidades = undefined;
  }



  divDefault = '<div class="carousel" id="imgsCarrouselAmenidades"><div class="static-banner lupa"><div class="insideLupa" id="lupaAmenidades"></div></div>'

  if(imagenesAmenidades){
    imagenesAmenidades.forEach(creandoDivs1);
  }

  divsInsertar.forEach(agregandoDivs1);
  htmlAgregado = divsJuntos + '</div>'
  insertarCarrouselAmenidades.innerHTML = divDefault + divsJuntos + '</div>'
  imgsCarrouselAmenidades = document.getElementById("imgsCarrouselAmenidades")
  divsJuntos = " ";
  divsInsertar.length = 0;


  if(imagenesAmenidades == undefined){
    insertarCarrouselAmenidades.classList.add("hidden");
  }
  else{
    insertarCarrouselAmenidades.classList.remove("hidden");
  }
  

  if(idiomaActual == idiomas.es){
    carrouselAmenidadTitulo.textContent = filaDeAmenidadSeleccionada["nombreespañol"];
    detalleAmenidadTitulo.textContent = filaDeAmenidadSeleccionada["nombreespañol"];
    detalleAmenidadDescripcion.textContent = filaDeAmenidadSeleccionada["descripcionespañol"];

    if(imagenesAmenidades == undefined && filaDeAmenidadSeleccionada["descripcionespañol"] == undefined){
      btnVerInfoAmenidad.classList.add("hidden");
    }
    else{
      btnVerInfoAmenidad.classList.remove("hidden");
    }

    if(filaDeAmenidadSeleccionada["descripcionespañol"] == undefined){
      detalleAmenidadDescripcion.classList.add("hidden");
    }
    else{
      detalleAmenidadDescripcion.classList.remove("hidden");
    }
  }
}







///////// Poblar amenidades

let divDefault;

let flktyAmenidades;

let addDiv;
let divsInsertar = [];
let divsJuntos = " ";

function creandoDivs1(item){
  addDiv = '<div class="carousel-cell"><img class="carousel-cell-image" src="' + item + '"/></div>'
  divsInsertar.push(addDiv);
}

function agregandoDivs1(item){
  divsJuntos += item;
}



let imgsCarrouselAmenidades;
let htmlAgregado;

carrouselAmenidades.addEventListener('click', e => {
    if(e.target.id == "btnVerInfoAmenidad"){
      // actualizarZonaActiva();

      ocultarBtns("carrouselAmenidades");

      setTimeout(() => {
        mostrarPanel("fichaAmenidad");
        flktyAmenidades = new Flickity(imgsCarrouselAmenidades, { cellSelector: ".carousel-cell", autoPlay: 3000, wrapAround: true, pageDots: false});
        imgsCarrouselAmenidades.addEventListener('click', e => {
          if(e.target.id == "lupaAmenidades"){
            poblarFullscreen();
          }
        })  
      }, 250);
    }

    // if(e.target.id == "amnarrowright" || e.target.id == "amnarrowright2"){
    //   siguienteAmenidad();
    // }
    // if(e.target.id == "amnarrowleft" || e.target.id == "amnarrowleft2"){
    //   anteriorAmenidad();
    // }

    if(e.target.id == "btnRegresar9"){

      zonaActiva = "eh"

      if(amenidadSeleccionada == "Recepcion"){
        fade();
        setTimeout(() => {
          seleccionarAmenidad();
          setTimeout(() => {
            fade();
          }, 800);
        }, duracionDeFade);
      }
      else{
        seleccionarAmenidad();
      }



      $(".btnsCarrusel").addClass('hidden1');
      setTimeout(()=>{
        $(`#carrouselAmenidades`).addClass('hidden');
      }, 500);


      setTimeout(() => {

        mostrarBtns("btnsSeleccionaAmenidad");
      }, 200);




    }
})





fichaAmenidad.addEventListener('click', e => {
  if(e.target.id == "btnRegresar10"){
    ocultarPanel("fichaAmenidad");
    mostrarBtns("carrouselAmenidades");
  }
  if(e.target.id == "fichaAmenidad"){
    ocultarPanel("fichaAmenidad");
    mostrarBtns("carrouselAmenidades");
  }
})  



btnsUbicacionInicio.addEventListener('click', e => {

  switch (e.target.id) {
    case 'btnRegresarUbicacionPrincipal': 
      ocultarBtns("btnsUbicacionInicio");

      haciaMaqueta();
    ; break;

    case 'btnUbicacionShopping': 
      mostrarPanel("ubicacionPanelSeleccionShopping");
    ; break;

    case 'btnUbicacionHealth': 
      mostrarPanel("ubicacionPanelSeleccionHealth");
    ; break;

    case 'btnUbicacionSchools': 
      mostrarPanel("ubicacionPanelSeleccionSchool");
    ; break;

    default:  ;
  }
})  


ubicacionPanelSeleccionShopping.addEventListener('click', e => {
  if(e.target.classList.contains("btnSeleccionarUbicacion")){
    ocultarPanel("ubicacionPanelSeleccionShopping");
    ubicacionSeleccionadaEnPanel(e.target.innerHTML);
  }
  else if(e.target.classList.contains("group-btn__detalle-background")){
    ocultarPanel("ubicacionPanelSeleccionShopping");
  }
})  

ubicacionPanelSeleccionSchool.addEventListener('click', e => {
  if(e.target.classList.contains("btnSeleccionarUbicacion")){
    ocultarPanel("ubicacionPanelSeleccionSchool");
    ubicacionSeleccionadaEnPanel(e.target.innerHTML);
  }
  else if(e.target.classList.contains("group-btn__detalle-background")){
    ocultarPanel("ubicacionPanelSeleccionSchool");
  }
})  

ubicacionPanelSeleccionHealth.addEventListener('click', e => {
  if(e.target.classList.contains("btnSeleccionarUbicacion")){
    ocultarPanel("ubicacionPanelSeleccionHealth");
    ubicacionSeleccionadaEnPanel(e.target.innerHTML);
  }
  else if(e.target.classList.contains("group-btn__detalle-background")){
    ocultarPanel("ubicacionPanelSeleccionHealth");
  }
})  














function poblarFullscreen(){
  let modificado = '<div class="carousel" id="imgsCarrouselFullscreen">' + htmlAgregado;
  carrouselFullscreen.innerHTML = modificado;
  let imgsCarrouselFullscreen = document.getElementById("imgsCarrouselFullscreen");
  carrouselFullscreen.classList.remove("hidden");
  flktyFullscreen = new Flickity(imgsCarrouselFullscreen, { wrapAround: true, pageDots: false});
  setTimeout(() => {
    document.getElementById("carrouselFullscreen").classList.add("visible")
    // $(`#regresarFullscreen`).removeClass('hidden');
    mostrarBtns("regresarFullscreen");
  }, 400);
}

regresarFullscreen.addEventListener('click', e => {
  if(e.target.id == "btnRegresar5" || e.target.id == "tacheEsquinaContainer"){
    if(scene.activeCamera == cameraFree){
      // $(`#regresarFullscreen`).addClass('hidden');
      ocultarBtns("regresarFullscreen");
      salirDe360();
    }
    else{
      // $(`#regresarFullscreen`).addClass('hidden');
      ocultarBtns("regresarFullscreen");
      $(`#carrouselFullscreen`).addClass('hidden');
      $(`#carrouselFullscreen`).removeClass('visible');
    }
  }
})  
















UIdepartamentoSeleccionado.addEventListener('click', e => {
  // if(e.target.textContent == "Ver departamento"){

  // }
  if(e.target.id == "btnIngresar"){
    entrarADpto();
    ocultarBtns("UIdepartamentoSeleccionado");
  }

  if(e.target.id == "btnVerPlantaAlta"){
    verPlantaAltaPenthouse();
    ocultarBtns("UIdepartamentoSeleccionado");
  }

  if(e.target.id == "btnVerPlantaBaja"){
    verPlantaBajaPenthouse();
    ocultarBtns("UIdepartamentoSeleccionado");
  }

  if(e.target.id == "btnVistaInterior"){

    btnVistaInterior.classList.remove("atencionBounce");

    // if(!cambiandoDeVista){
    //   cambiandoDeVista = true;
      btnVistaInterior.classList.add("hidden");
      btnIngresar.classList.remove("hidden");
      // fade();
      // setTimeout(() => {
      analyticsVerInterior();
      verPlantaDepartamentos();
      ocultarBtns("UIdepartamentoSeleccionado");
  }


  if(e.target.id == "btnFichaTecnica"){
    poblarFichaDepartamentos();

    //  ANALYTICS
    analyticsDepartamentoFichaTecnica();
  }

  if(e.target.id == "btnRegresar4"){

    if(vistaEnPlanta){
      btnIngresar.classList.add("hidden");
      btnVistaInterior.classList.remove("hidden");
      ocultarBtns("UIdepartamentoSeleccionado");
      salirDeVerPlantaDepartamentos();
    }
    else{
      btnVistaInterior.classList.remove("atencionBounce");
      ocultarBtns("UIdepartamentoSeleccionado");
      setTimeout(function(){
        seleccionarDepartamento();    
      }, 200) 
    }

  }
})



btnsCaminando.addEventListener('click', e => {

  if(e.target.id == "btnRegresar11" && !frenoBtnsSalirDeCaminar){

    ocultarBtns("btnsCaminando");

    texturaCargando = false;
    scene.onPointerObservable.remove(observerClickParaCaminar);

    fade();
    setTimeout(() => {
      salirDeDpto();

    }, duracionDeFade);
  }
})





panelEscalerasCaminando.addEventListener('click', e => {
  if(e.target.id == "btnDeAcuerdoSubirOBajar"){
    if(plantaAltaPenthhouseActiva == true){
      fade()
      setTimeout(() => {
        bajarEscalerasPH();
      }, duracionDeFade);
    }
    else{
      fade()
      setTimeout(() => {
        subirEscalerasPH();
      }, duracionDeFade);
    }
    ocultarPanel("panelEscalerasCaminando");
  }

  if(e.target.id == "panelEscalerasCaminando"){
    if(!frenoPanelEscalerasCaminando){
      ocultarPanel("panelEscalerasCaminando");
    }
  }
})






fichaDepartamento.addEventListener('click', e => {
  if(e.target.id == "btnMeInteresa"){

  
    // ANALYTICS - Me interesa
    analyticsDepartamentoMeInteresa();      

    ocultarPanel("fichaDepartamento");
    mostrarPanel("contactoExpanded");
    $(`#contactoExpanded`).removeClass('hidden');

  }

  if(e.target.id == "btnRegresar6"){
    ocultarPanel("fichaDepartamento");
  }

  if(e.target.id == "fichaDepartamento"){
    ocultarPanel("fichaDepartamento");
  }
})




let flktyDepartamentos;
let imgsCarrouselDepartamentos;
let imgsPrototipo;
let prototipoGeneral;
let precioDepartamento;
let metrosCuadrados;
var paraSheetsPrototipo = [];

let tieneFlex;

let numFichaDptoRecamaras;
let numFichaDptoBaños;
let numFichaDptoCtoServicio;
let numFichaDptoEstacionamiento;
let numFichaDptoBodega;

let numFichaDptoPrecio;
let numFichaDptoDisponibilidad;
let numFichaDptoMetrosCuadrados;
let numFichaDptoTipo;

function poblarFichaDepartamentos(){

  for(var i = 0; i < departamentosData.length; i++){
    var checando = departamentosData[Object.keys(departamentosData)[i]];
  
    if(checando[Object.keys(checando)[0]] == departamentoSeleccionado){

      numFichaDptoRecamaras = checando[Object.keys(checando)[7]];
      numFichaDptoBaños = checando[Object.keys(checando)[9]];
      numFichaDptoCtoServicio = checando[Object.keys(checando)[10]];
      numFichaDptoEstacionamiento = checando[Object.keys(checando)[5]];
      numFichaDptoBodega = checando[Object.keys(checando)[6]];
      
      numFichaDptoPrecio = checando[Object.keys(checando)[4]];
      numFichaDptoDisponibilidad = checando[Object.keys(checando)[1]];
      numFichaDptoMetrosCuadrados = checando[Object.keys(checando)[3]];
      numFichaDptoTipo = checando[Object.keys(checando)[2]];
      tieneFlex = checando[Object.keys(checando)[8]];
    }
  }

  paraSheetsPrototipo = [];

  nivelDeDepartamentoSeleccionado = departamentoSeleccionado.slice(0, -2);

  if(nivelDeDepartamentoSeleccionado == "24"){
    switch (departamentoSeleccionado.substr(departamentoSeleccionado.length -1)){
      case '1': paraSheetsPrototipo = ["TX_D24_Ficha_PHpb_01", "TX_D24_Ficha_PHpa_01"]; break;
      case '2': paraSheetsPrototipo = ["TX_D24_Ficha_PHpb_02", "TX_D24_Ficha_PHpa_02"]; break;
      case '3': paraSheetsPrototipo = ["TX_D24_Ficha_PHpb_03", "TX_D24_Ficha_PHpa_03"]; break;
      case '4': paraSheetsPrototipo = ["TX_D24_Ficha_PHpb_04", "TX_D24_Ficha_PHpa_04"]; break;
      case '5': paraSheetsPrototipo = ["TX_D24_Ficha_PHpb_05", "TX_D24_Ficha_PHpa_05"]; break;
      case '6': paraSheetsPrototipo = ["TX_D24_Ficha_PHpb_06", "TX_D24_Ficha_PHpa_06"]; break;
      default:
    }  
  }
  else{
    switch (departamentoSeleccionado.substr(departamentoSeleccionado.length -1)){
      case '1': paraSheetsPrototipo = ["TX_D24_Ficha_Dpto_01"]; break;
      case '2': paraSheetsPrototipo = ["TX_D24_Ficha_Dpto_02"]; break;
      case '3': paraSheetsPrototipo = ["TX_D24_Ficha_Dpto_03"]; break;
      case '4': paraSheetsPrototipo = ["TX_D24_Ficha_Dpto_04"]; break;
      case '5': paraSheetsPrototipo = ["TX_D24_Ficha_Dpto_05"]; break;
      case '6': paraSheetsPrototipo = ["TX_D24_Ficha_Dpto_06"]; break;
      case '7': paraSheetsPrototipo = ["TX_D24_Ficha_Dpto_07"]; break;
      default:
    };
  };

  var algo = [];
  paraSheetsPrototipo.forEach(function(element){
    algo.push("assets/babylon/infodptos/" + element + ".jpg");
    imgsPrototipo = algo;
  });
  // if(checando2[Object.keys(checando2)[0]] == paraSheetsPrototipo){
  //   console.log(checando2[Object.keys(checando2)[1]])
  //   imgsPrototipo = (checando2[Object.keys(checando2)[1]].split(","))
  // }
  // }

  divDefault = '<div class="carousel" id="imgsCarrouselPrototipo"><div class="static-banner lupa"><div class="insideLupa" id="lupaPrototipo"></div></div>'

  imgsPrototipo.forEach(creandoDivs1);

  divsInsertar.forEach(agregandoDivs1);
  htmlAgregado = divsJuntos + '</div>'
  insertarCarrouselDepartamentos.innerHTML = divDefault + divsJuntos + '</div>'
  imgsCarrouselDepartamentos = document.getElementById("imgsCarrouselPrototipo")
  divsJuntos = " ";
  divsInsertar.length = 0;

//   let numFichaDptoRecamaras;
// let numFichaDptoBaños;
// let numFichaDptoCtoServicio;
// let numFichaDptoEstacionamiento;
// let numFichaDptoBodega;

// let numFichaDptoPrecio;
// let numFichaDptoDisponibilidad;
// let numFichaDptoMetrosCuadrados;
// numFichaDptoTipo


  fichaDptoTextoNombre.innerHTML = departamentoSeleccionado;
  // fichaDptoTextoNombre.innerHTML = departamentoSeleccionado + "   " + numFichaDptoTipo;

  fichaDptoTextoDisponibilidad.classList.remove("fichaDptoTextoDisponibilidadDisponible");
  fichaDptoTextoDisponibilidad.classList.remove("fichaDptoTextoDisponibilidadEnNegociacion");
  fichaDptoTextoDisponibilidad.classList.remove("fichaDptoTextoDisponibilidadApartado");

  switch (numFichaDptoDisponibilidad){
    case 'Disponible': 
      fichaDptoTextoDisponibilidad.innerHTML = "DISPONIBLE*"; 
      fichaDptoTextoDisponibilidad.classList.add("fichaDptoTextoDisponibilidadDisponible");
      break;

    case 'En negociacion': 
      fichaDptoTextoDisponibilidad.innerHTML = "EN NEGOCIACIÓN*"; 
      fichaDptoTextoDisponibilidad.classList.add("fichaDptoTextoDisponibilidadEnNegociacion");
      break;

    case 'Apartado': 
      fichaDptoTextoDisponibilidad.innerHTML = "APARTADO*"; 
      fichaDptoTextoDisponibilidad.classList.add("fichaDptoTextoDisponibilidadApartado");
      break;

    default:
  }    


  fichaDptoTextoMetros.innerHTML = numFichaDptoMetrosCuadrados + " m2";

  fichaDptoTextoPrecio.innerHTML = numFichaDptoPrecio + "*";


  fichaNumeroDeIconosRecamaras.innerHTML = numFichaDptoRecamaras;

  fichaNumeroDeIconosCajones.innerHTML = numFichaDptoEstacionamiento;

  fichaNumeroDeIconosBodegas.innerHTML = numFichaDptoBodega;

  fichaNumeroDeIconosBaños.innerHTML = numFichaDptoBaños;

  fichaNumeroDeIconosCtoServicio.innerHTML = numFichaDptoCtoServicio;

  if(tieneFlex == "TRUE"){
    fichaIconoFlex.src = "assets/svg/iconoDptosFlex.svg";
    fichaIconoFlex.classList.remove("fichaDptoNoFlex");
  }
  else{
    fichaIconoFlex.src = "assets/svg/iconoDptosNoFlex.svg";
    fichaIconoFlex.classList.add("fichaDptoNoFlex");
  };


  // if(departamentoDisponibleOReservado == "Disponible"){
  //   tempDisponibilidad = idiomaSeleccionado.tDptoDisponible;
  //   subTituloDepartamentoTipo.classList.add("disponibilidadDptoDisponible");
  //   subTituloDepartamentoTipo.classList.remove("disponibilidadDptoReservado")
  // }
  // else{
  //   tempDisponibilidad = idiomaSeleccionado.tDptoReservado;
  //   subTituloDepartamentoTipo.classList.add("disponibilidadDptoReservado");
  //   subTituloDepartamentoTipo.classList.remove("disponibilidadDptoDisponible")
  // }

  if(numFichaDptoPrecio == "0" || numFichaDptoPrecio == undefined || numFichaDptoPrecio == ""){
    fichaDptoTextoPrecio.innerHTML = "";
  };

  divDefault = '<div class="carousel" id="imgsCarrouselDepartamentos">'

  // numeroBanos.innerHTML = "2";
  // numeroRecamaras.innerHTML = "2";

  setTimeout(() => {
    // $(`#fichaDepartamento`).removeClass('hidden');
    mostrarPanel("fichaDepartamento");
    flktyDepartamentos = new Flickity(imgsCarrouselDepartamentos, { cellSelector: ".carousel-cell", autoPlay: false, wrapAround: false, pageDots: false});
    imgsCarrouselDepartamentos.addEventListener('click', e => {
      if(e.target.id == "lupaPrototipo"){
        poblarFullscreen();
      }
    })
  }, 100); 
}





fichaDptoTextoPrecio.addEventListener('click', e => {
  if(e.target.id == "fichaDptoTextoPrecio"){
    mostrarPanel("avisoDisclaimerPrecio");
  }
})

avisoDisclaimerPrecio.addEventListener('click', e => {
    ocultarPanel("avisoDisclaimerPrecio");
})



fichaDptoTextoDisponibilidad.addEventListener('click', e => {
  if(e.target.id == "fichaDptoTextoDisponibilidad"){
    mostrarPanel("avisoDisclaimerDisponibilidad");
  }
})

avisoDisclaimerDisponibilidad.addEventListener('click', e => {
    ocultarPanel("avisoDisclaimerDisponibilidad");
})











btnLogica.addEventListener('click', e => {
  analyticsLogica();
})


//      Poner fecha correcta del proximo año

footerFecha.textContent = "© "+ parseInt(new Date().getFullYear()).toString() + "- " + (parseInt(new Date().getFullYear()) + 1).toString();


function ad(){
  scene.debugLayer.show({
    embedMode: true,
  });
}
