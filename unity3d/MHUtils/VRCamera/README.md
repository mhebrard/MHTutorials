# VR Camera

by Maxime Hebrard

I recommend you to try some examples, and choose the camera with the presets that fit the most with your app.

* copy a camera with preset for VR headset
 * in Project tab,
 * open scene VRSampleScenes/Scenes/MainMenu (double click)
 * in Hierarchy tab,
 * select MainCamera
 * copy the camera (right click / Copy)

* paste the camera in your own scene
 * in Project tab,
 * open MyProject/Scenes/myscene (double click)
 * in Hierarchy tab,
 * delete Main Camera (right click / Delete)
 * paste the MainCamera (right click / Paste)

* position the camera
 * in Hierarchy tab,
 * select MainCamera
 * in Inspector tab,
 * set Position to 0,1,-5 (to see the object at 0,0,0)

* set up Return To Main Menu
 * in Hierarchy tab,
 * select MainCamera
 * in Inspector tab,
 * select Return To Main Menu
 * in Main Scene Name attribute
 * enter the name of your first scene (myscene)

* save your scene (ctrl + s)

You now have a camera that:
* follow the VR head set movements
* display a reticule in the middle of your view
* allow you to click or double click on other GameObjects
* fade out and fade in while new scene is loaded
* return to first scene when escape
