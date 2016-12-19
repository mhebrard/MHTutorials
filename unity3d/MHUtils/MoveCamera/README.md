# Move Camera

by Maxime Hebrard

If you use a VR Camera, the movements of the camera are overwrite by the headset device.
If you need to move the camera by other means, you need to wrap the camera in an empty GameObject and move it.

* create a camera wrapper
 * in Hierarchy tab,
 * create an Empty Object (right click / Empty Object)
 * in Inspector tab,
 * rename the object "CameraWrapper"
 * tag the CameraWrapper as "MainCamera"
 * set the position as 0,1,-5 (camera can see the object at 0,0,0)

* wrap the main camera
 * in Hierarchy tab,
 * drag the MainCamera as child of CameraWrapper
 * in Inspector tab,
 * untag the Main Camera
 * set the position as 0,0,0

## Rotate By Mouse

* handle mouse input (rotatebymouse)
 * in Hierarchy tab,
 * select CameraWrapper
 * in Inspector tab,
 * add Component MHUtils/Scripts/RotateByMouse

## Rotate By Keyboard

* handle mouse input (rotatebykeyboard)
 * in Hierarchy tab,
 * select CameraWrapper
 * in Inspector tab,
 * add Component MHUtils/Scripts/RotateByKeyboard

## End

* save your scene (ctrl + s)
