using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace MHUtils
{
    public class RotateByMouse : MonoBehaviour
    {
        [SerializeField]
        private float speed = 5;

        // Update is called once per frame
        private void Update()
        {
            //mouse
            float h = Input.GetAxis("Mouse X") * speed;
            float v = Input.GetAxis("Mouse Y") * speed * -1; // inverte vertical axis
            transform.Rotate(v, h, 0);
        }
    }
}