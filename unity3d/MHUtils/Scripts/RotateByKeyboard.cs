using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace MHUtils
{
    public class RotateByKeyboard : MonoBehaviour
    {
        [SerializeField]
        private float speed = 5;

        // Update is called once per frame
        void Update()
        {
            // arrows + wsad + joystick
            float h = Input.GetAxis("Horizontal") * speed;
            float v = Input.GetAxis("Vertical") * speed * -1; // inverte vertical axis
            transform.Rotate(v, h, 0);
        }
    }
}
