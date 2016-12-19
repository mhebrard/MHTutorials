# Unity3D Utilities

by Maxime Hebrard

I am developing 3D immersive applications.
I will use keyboard and mouse interaction some times, but more often game controller or headset device.
I am new in the this field, but I will share with you some tricks I learn in the process.

## The Software
First you need to be familiar with [unity](https://store.unity.com/) interface.
* import assets
* navigate in the scene
* create a new GameObject
* add a Component

## Setup
As I am interested in Virtual Reality headset device, I imported some useful assets with prebuild features
* create a new Unity Project
* import package Characters (Assets/Import Package/Characters)
* import asset [VRSamples](https://www.assetstore.unity3d.com/en/#!/content/51519)
* import asset MHUtils
 * download the file [MHUtils.unitypackage](https://github.com/mhebrard/MHTutorials/raw/master/unity3d/MHUtils.unitypackage)
 * import the package (Assets/Import Package/Custom Package...)
 * browse to the file MHUtils.unitypackage and open it
 * import the package
* in Project tab, create a new folder (named "MyProject" for example)
* in MyProject folder, create a new folder "Scenes"
 * in Project tab,
 * select MyProject
 * right click / Create / Folder
 * name your folder
* create a new scene
 * in Project tab,
 * select MyProject/Scenes
 * right click / Create / Scene
 * name your scene ("myscene" for example)
* add an object in your scene
 * in Project tab,
 * open scene MyProject/Scenes/myscene (double click)
 * in Hierarchy tab,
 * create a new cube (right click / 3D Object / Cube)
 * select the Cube
 * in Inspector tab,
 * set Position to 0,0,0
* save your scene (ctrl + s)

## Tutorials

* [VR Camera](https://github.com/mhebrard/MHTutorials/tree/master/unity3d/MHUtils/VRCamera) (Use a camera with presets for VR headset)
* [Move Camera](https://github.com/mhebrard/MHTutorials/tree/master/unity3d/MHUtils/MoveCamera) (Handle keyboard input to move the camera)
