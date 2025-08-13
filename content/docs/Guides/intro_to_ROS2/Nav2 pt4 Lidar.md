---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-03T21:37:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 154
toc: false
icon: ""
---

[Articulated Robotics guide](https://youtu.be/eJZXRncGaGM?si=p88bRTyt1R9TyuiY)

---

<details>
      <summary>What is Lidar?</summary>
      Lidar (light detection and ranging) is using lases to determine how far objects are.
  </details>

TODO:

[link to add other sensors (realsense)](https://docs.nav2.org/setup_guides/sensors/setup_sensors_gz.html)

Often in robotics Odometry is updates very quickly but is prone to drift.

On the other hand Lidar is effectively _“ground truth”_ because it can see the world around it however updates very slowly.

By using these two sensors together we can cover each others weaknesses.

In between the long update periods of Lidar we can use Odometry to get an accurate measurement of where we are. Then when the Lidar measurement eventually comes we correct the Odometry’s drift.

Just for this guide we will be sticking to a 2D Lidar but these instructions can be adapted to any kind of Lidar.

Nav2 expects Lidar data to be published on the `/scan` topic with type `sensor_msgs/LaserScan`

## Simulating Lidar in Gazebo

We must first add a Lidar link into our `urdf` to know where it is on the robot.

Also we have to add a Gazebo plugin to tell Gazebo simulate the Lidar

past this at the bottom of the file before the `</robot>` tag

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml

  <link name="lidar_link">
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <xacro:cylinder_inertia m="0.125" r="0.0508" h="0.055"/>
  </link>

  <joint name="lidar_joint" type="fixed">
    <parent link="base_link"/>
    <child link="lidar_link"/>
    <origin xyz="0 0 0.12" rpy="0 0 0"/>
  </joint>



  <!-- 2D Lidar New Gazebo Sensor Plugin  -->
  <gazebo reference="lidar_link">
    <sensor name="lidar" type="gpu_lidar">
      <always_on>true</always_on>
      <visualize>true</visualize>
      <update_rate>5</update_rate>
      <topic>scan</topic>
      <gz_frame_id>lidar_link</gz_frame_id>
      <lidar>
        <scan>
          <horizontal>
            <samples>360</samples>
            <resolution>1.000000</resolution>
            <min_angle>0.000000</min_angle>
            <max_angle>6.280000</max_angle>
          </horizontal>
        </scan>
        <range>
          <min>0.120000</min>
          <max>12.0</max>
          <resolution>0.015000</resolution>
        </range>
        <noise>
          <type>gaussian</type>
          <mean>0.0</mean>
          <stddev>0.02</stddev>
        </noise>
      </lidar>
    </sensor>
  </gazebo>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL5FHQI5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGybS9ud5k6an68tvJCuCkmNKPVcQUPGHhBVZFPPqIPAiBASTRBXtiFt1sx%2FekLnc%2BJTjVn%2FFQwkm6HZ21PuxO%2F9ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMQxRq6t%2FBgCWQ26zXKtwDFt5RMtCH1GFuPbG4gL2ActpjQauIjFHnEKOqRO%2Fd%2B7mjzk18%2FnYPb9H5FHe1JIduED817mTk8F%2B%2Bwa%2BUJGNwHvZHzLmFcOD%2FQzc%2BkkwY61QSPKd32gG5BmFc4%2FOze4Em%2B7WlkbYXA1P%2BmB1q4jdJxMs%2FJMOL1Rz6g25erkq3TGZXZJOifwVQPZ1cd9FqQWL%2Fk1Zpp8SaoIxujFfHHCkY83fBs3CpOzx7QjIWsGCzyyb%2FynD60TG7b6TMCx2vknS1Q6L0hMC5ghxfgG6vYKWT6Ydc8VBc4wZ5VXkOEmH9ijal4xAf%2FerRMS1%2B6INV2rGDOXupDjZK6VlPuX5ATwnl09Y6gB9ycXZu%2B30z6W8v8FIlW3hw%2Fepm94ypf%2Bi%2BQLFIVU8At0m9IVaG%2F2Z1H2yQtDoQ5iT6n8yyx6EopqS31QusoqkaakNz9o0z4r1ioJUzf5j0DyC%2F6qoZ88OPvhmejvqb9Bzl1DyuuFk2sfEZ082C4QE4MNf%2Fpew%2FHtURrqrBt2J8XIEop0IZlpNyim9ywGFw4dXLQutntYqVZFYIvb3wL%2FTjIme5hmgZe6U6pdwCrf4umrH0gHhc5h6aIwuaLshT1uZ%2FvrDn9cHqiF0l4GplXCfPRgEC6cl2BwwwmsbxxAY6pgEhZMCDj3V8Ok2ABx%2BMl%2FF1hXRo2DgFOL8BRUtrm2CT%2Fv%2BTMk1KNVKrWQUY8Y4XHH4NFM9McvBZ0M3jZwMQxJrhmNKp4rbndzDfQohEyDkqu7cQo11MurMNNvidNWa6WNRqPSWSIagS3eyuuoJc1AWXbSQmQZpw8raHo8uOiMtj1V39vA4jBZEZDEx9ypTpNj997dT70DG2jgvhwN1oomkdXk%2FbD7YQ&X-Amz-Signature=2deb239d254afff5a4470ea70b25daf17ed273bd42d4af656b428b0b58a5a0b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Adding `/scan` topic in `bridge_config.yaml`

We have to bridge over the `/scan` topic from Gazebo

```yaml
- ros_topic_name: "/scan"
	gz_topic_name: "/scan"
	ros_type_name: "sensor_msgs/msg/LaserScan"
	gz_type_name: "gz.msgs.LaserScan"
	direction: GZ_TO_ROS
```

**Run:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

### Lidar Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDEKGDNQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5YjyU8hWAzbN7cUigLUQkcEuURLfEMjDjo%2BCf%2Bbsx6AiEA6xkBOqsg1UwqNWDwbu04W7te%2BHjT9g%2B4FH%2FM4q5A9NEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC5mzXaDSF6CRrQcPyrcA7kGGxtBqx7YmmWTxdbwZ%2FsXOD71QIWX7ICJbAiMs0lb8i1xp7CsgR2eJ0O5QWcmBb9MWkBy2GEqUnNsjzrCNTRlEX6RYRCRgiJ6ecVmRCKKVSkFaINT1GwyaFzucvWlhNZ%2FEkR5Z3pmC8uXVjD3DqBCnxK0Qjyru5F1KYlG7oXgXBYDDtmENBzk%2F2Y6E42ZXKqk1p4eFAPLgQr5ZA8glNKvJTWS2N3rlbKEgcWoG1pEW7U3lgbCL9SRpfi4Bz1JNZ1WP2mD1l1RxuAAsP4fJVwtWPYl5VqQIGkzxeWxadD8NRBCXy%2FSr6lyZaekrqHptvu7eNuQ5bIf9l3dEtbOOnInTOqyn1t2YEmyC%2BjC0Pvxj3rrqU5UUO7PhuW3BxqqeCF7BBnahSamOF6%2BJmIjwOcRJ%2Fd%2BR4mfoe5xQCtwhqCHGfKs%2Fi2t8f9rixjydJEBsv6nM39KSyz5FS3YKGJQOs6V5Xygb4IT8Y6FSlmWCZO9GdyM0abEQuwY2eV35K859y57DYl5LbmW5lkGWcgB8Pl7nW0MRMlrbtbcV6YbuvVCLsNeWMx3%2BWQ3Q6vW8uA%2Fz61lp0simAj7LleFxxSGTXsxXPWgczTbhscJZ5myq%2FeIFelJEhf0JGXKp0laMLPG8cQGOqUBKEIvnRglzGtBd1aeC2ivfwvjQhDBtNukGqYLVY4yKJ1eNOEHvETKMnu0xJhvtock4fPSLJspZxqneb%2BoU3MGRbpO5%2FAU5T%2FRlyEdJFhP6s0YNwONh984MtJyCDl9xARbRtTNVKw01GGCGBUrWYK0I55xygV0iTW%2BBoMOwfnHAaYDBjB9vf1heFfJc9XJqbqh6lcwC6zgZdcp5kynFlcklf4qUoOV&X-Amz-Signature=e485400ef0c9e2a9ef3b95514f94eb95d05eb9c58d0550afd960d817813087fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDEKGDNQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5YjyU8hWAzbN7cUigLUQkcEuURLfEMjDjo%2BCf%2Bbsx6AiEA6xkBOqsg1UwqNWDwbu04W7te%2BHjT9g%2B4FH%2FM4q5A9NEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC5mzXaDSF6CRrQcPyrcA7kGGxtBqx7YmmWTxdbwZ%2FsXOD71QIWX7ICJbAiMs0lb8i1xp7CsgR2eJ0O5QWcmBb9MWkBy2GEqUnNsjzrCNTRlEX6RYRCRgiJ6ecVmRCKKVSkFaINT1GwyaFzucvWlhNZ%2FEkR5Z3pmC8uXVjD3DqBCnxK0Qjyru5F1KYlG7oXgXBYDDtmENBzk%2F2Y6E42ZXKqk1p4eFAPLgQr5ZA8glNKvJTWS2N3rlbKEgcWoG1pEW7U3lgbCL9SRpfi4Bz1JNZ1WP2mD1l1RxuAAsP4fJVwtWPYl5VqQIGkzxeWxadD8NRBCXy%2FSr6lyZaekrqHptvu7eNuQ5bIf9l3dEtbOOnInTOqyn1t2YEmyC%2BjC0Pvxj3rrqU5UUO7PhuW3BxqqeCF7BBnahSamOF6%2BJmIjwOcRJ%2Fd%2BR4mfoe5xQCtwhqCHGfKs%2Fi2t8f9rixjydJEBsv6nM39KSyz5FS3YKGJQOs6V5Xygb4IT8Y6FSlmWCZO9GdyM0abEQuwY2eV35K859y57DYl5LbmW5lkGWcgB8Pl7nW0MRMlrbtbcV6YbuvVCLsNeWMx3%2BWQ3Q6vW8uA%2Fz61lp0simAj7LleFxxSGTXsxXPWgczTbhscJZ5myq%2FeIFelJEhf0JGXKp0laMLPG8cQGOqUBKEIvnRglzGtBd1aeC2ivfwvjQhDBtNukGqYLVY4yKJ1eNOEHvETKMnu0xJhvtock4fPSLJspZxqneb%2BoU3MGRbpO5%2FAU5T%2FRlyEdJFhP6s0YNwONh984MtJyCDl9xARbRtTNVKw01GGCGBUrWYK0I55xygV0iTW%2BBoMOwfnHAaYDBjB9vf1heFfJc9XJqbqh6lcwC6zgZdcp5kynFlcklf4qUoOV&X-Amz-Signature=048acc455b45f686a6b8aa001c51c42bb9a5dea798c2b2abe70b72e477c3a3f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDEKGDNQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5YjyU8hWAzbN7cUigLUQkcEuURLfEMjDjo%2BCf%2Bbsx6AiEA6xkBOqsg1UwqNWDwbu04W7te%2BHjT9g%2B4FH%2FM4q5A9NEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC5mzXaDSF6CRrQcPyrcA7kGGxtBqx7YmmWTxdbwZ%2FsXOD71QIWX7ICJbAiMs0lb8i1xp7CsgR2eJ0O5QWcmBb9MWkBy2GEqUnNsjzrCNTRlEX6RYRCRgiJ6ecVmRCKKVSkFaINT1GwyaFzucvWlhNZ%2FEkR5Z3pmC8uXVjD3DqBCnxK0Qjyru5F1KYlG7oXgXBYDDtmENBzk%2F2Y6E42ZXKqk1p4eFAPLgQr5ZA8glNKvJTWS2N3rlbKEgcWoG1pEW7U3lgbCL9SRpfi4Bz1JNZ1WP2mD1l1RxuAAsP4fJVwtWPYl5VqQIGkzxeWxadD8NRBCXy%2FSr6lyZaekrqHptvu7eNuQ5bIf9l3dEtbOOnInTOqyn1t2YEmyC%2BjC0Pvxj3rrqU5UUO7PhuW3BxqqeCF7BBnahSamOF6%2BJmIjwOcRJ%2Fd%2BR4mfoe5xQCtwhqCHGfKs%2Fi2t8f9rixjydJEBsv6nM39KSyz5FS3YKGJQOs6V5Xygb4IT8Y6FSlmWCZO9GdyM0abEQuwY2eV35K859y57DYl5LbmW5lkGWcgB8Pl7nW0MRMlrbtbcV6YbuvVCLsNeWMx3%2BWQ3Q6vW8uA%2Fz61lp0simAj7LleFxxSGTXsxXPWgczTbhscJZ5myq%2FeIFelJEhf0JGXKp0laMLPG8cQGOqUBKEIvnRglzGtBd1aeC2ivfwvjQhDBtNukGqYLVY4yKJ1eNOEHvETKMnu0xJhvtock4fPSLJspZxqneb%2BoU3MGRbpO5%2FAU5T%2FRlyEdJFhP6s0YNwONh984MtJyCDl9xARbRtTNVKw01GGCGBUrWYK0I55xygV0iTW%2BBoMOwfnHAaYDBjB9vf1heFfJc9XJqbqh6lcwC6zgZdcp5kynFlcklf4qUoOV&X-Amz-Signature=e5043339496c14a71879101a648d667e5886c8ffd3e47e546e61375058d5f943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDEKGDNQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5YjyU8hWAzbN7cUigLUQkcEuURLfEMjDjo%2BCf%2Bbsx6AiEA6xkBOqsg1UwqNWDwbu04W7te%2BHjT9g%2B4FH%2FM4q5A9NEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC5mzXaDSF6CRrQcPyrcA7kGGxtBqx7YmmWTxdbwZ%2FsXOD71QIWX7ICJbAiMs0lb8i1xp7CsgR2eJ0O5QWcmBb9MWkBy2GEqUnNsjzrCNTRlEX6RYRCRgiJ6ecVmRCKKVSkFaINT1GwyaFzucvWlhNZ%2FEkR5Z3pmC8uXVjD3DqBCnxK0Qjyru5F1KYlG7oXgXBYDDtmENBzk%2F2Y6E42ZXKqk1p4eFAPLgQr5ZA8glNKvJTWS2N3rlbKEgcWoG1pEW7U3lgbCL9SRpfi4Bz1JNZ1WP2mD1l1RxuAAsP4fJVwtWPYl5VqQIGkzxeWxadD8NRBCXy%2FSr6lyZaekrqHptvu7eNuQ5bIf9l3dEtbOOnInTOqyn1t2YEmyC%2BjC0Pvxj3rrqU5UUO7PhuW3BxqqeCF7BBnahSamOF6%2BJmIjwOcRJ%2Fd%2BR4mfoe5xQCtwhqCHGfKs%2Fi2t8f9rixjydJEBsv6nM39KSyz5FS3YKGJQOs6V5Xygb4IT8Y6FSlmWCZO9GdyM0abEQuwY2eV35K859y57DYl5LbmW5lkGWcgB8Pl7nW0MRMlrbtbcV6YbuvVCLsNeWMx3%2BWQ3Q6vW8uA%2Fz61lp0simAj7LleFxxSGTXsxXPWgczTbhscJZ5myq%2FeIFelJEhf0JGXKp0laMLPG8cQGOqUBKEIvnRglzGtBd1aeC2ivfwvjQhDBtNukGqYLVY4yKJ1eNOEHvETKMnu0xJhvtock4fPSLJspZxqneb%2BoU3MGRbpO5%2FAU5T%2FRlyEdJFhP6s0YNwONh984MtJyCDl9xARbRtTNVKw01GGCGBUrWYK0I55xygV0iTW%2BBoMOwfnHAaYDBjB9vf1heFfJc9XJqbqh6lcwC6zgZdcp5kynFlcklf4qUoOV&X-Amz-Signature=6b5d90fac11bdeb80815c2f2c810130ddadbc42adaabc8f55c9f2c955bde49be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDEKGDNQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5YjyU8hWAzbN7cUigLUQkcEuURLfEMjDjo%2BCf%2Bbsx6AiEA6xkBOqsg1UwqNWDwbu04W7te%2BHjT9g%2B4FH%2FM4q5A9NEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC5mzXaDSF6CRrQcPyrcA7kGGxtBqx7YmmWTxdbwZ%2FsXOD71QIWX7ICJbAiMs0lb8i1xp7CsgR2eJ0O5QWcmBb9MWkBy2GEqUnNsjzrCNTRlEX6RYRCRgiJ6ecVmRCKKVSkFaINT1GwyaFzucvWlhNZ%2FEkR5Z3pmC8uXVjD3DqBCnxK0Qjyru5F1KYlG7oXgXBYDDtmENBzk%2F2Y6E42ZXKqk1p4eFAPLgQr5ZA8glNKvJTWS2N3rlbKEgcWoG1pEW7U3lgbCL9SRpfi4Bz1JNZ1WP2mD1l1RxuAAsP4fJVwtWPYl5VqQIGkzxeWxadD8NRBCXy%2FSr6lyZaekrqHptvu7eNuQ5bIf9l3dEtbOOnInTOqyn1t2YEmyC%2BjC0Pvxj3rrqU5UUO7PhuW3BxqqeCF7BBnahSamOF6%2BJmIjwOcRJ%2Fd%2BR4mfoe5xQCtwhqCHGfKs%2Fi2t8f9rixjydJEBsv6nM39KSyz5FS3YKGJQOs6V5Xygb4IT8Y6FSlmWCZO9GdyM0abEQuwY2eV35K859y57DYl5LbmW5lkGWcgB8Pl7nW0MRMlrbtbcV6YbuvVCLsNeWMx3%2BWQ3Q6vW8uA%2Fz61lp0simAj7LleFxxSGTXsxXPWgczTbhscJZ5myq%2FeIFelJEhf0JGXKp0laMLPG8cQGOqUBKEIvnRglzGtBd1aeC2ivfwvjQhDBtNukGqYLVY4yKJ1eNOEHvETKMnu0xJhvtock4fPSLJspZxqneb%2BoU3MGRbpO5%2FAU5T%2FRlyEdJFhP6s0YNwONh984MtJyCDl9xARbRtTNVKw01GGCGBUrWYK0I55xygV0iTW%2BBoMOwfnHAaYDBjB9vf1heFfJc9XJqbqh6lcwC6zgZdcp5kynFlcklf4qUoOV&X-Amz-Signature=3a1e0b0236ed06ea08598742a3fd0cb44925e306670f1e039374cd620a2df3d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDEKGDNQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5YjyU8hWAzbN7cUigLUQkcEuURLfEMjDjo%2BCf%2Bbsx6AiEA6xkBOqsg1UwqNWDwbu04W7te%2BHjT9g%2B4FH%2FM4q5A9NEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC5mzXaDSF6CRrQcPyrcA7kGGxtBqx7YmmWTxdbwZ%2FsXOD71QIWX7ICJbAiMs0lb8i1xp7CsgR2eJ0O5QWcmBb9MWkBy2GEqUnNsjzrCNTRlEX6RYRCRgiJ6ecVmRCKKVSkFaINT1GwyaFzucvWlhNZ%2FEkR5Z3pmC8uXVjD3DqBCnxK0Qjyru5F1KYlG7oXgXBYDDtmENBzk%2F2Y6E42ZXKqk1p4eFAPLgQr5ZA8glNKvJTWS2N3rlbKEgcWoG1pEW7U3lgbCL9SRpfi4Bz1JNZ1WP2mD1l1RxuAAsP4fJVwtWPYl5VqQIGkzxeWxadD8NRBCXy%2FSr6lyZaekrqHptvu7eNuQ5bIf9l3dEtbOOnInTOqyn1t2YEmyC%2BjC0Pvxj3rrqU5UUO7PhuW3BxqqeCF7BBnahSamOF6%2BJmIjwOcRJ%2Fd%2BR4mfoe5xQCtwhqCHGfKs%2Fi2t8f9rixjydJEBsv6nM39KSyz5FS3YKGJQOs6V5Xygb4IT8Y6FSlmWCZO9GdyM0abEQuwY2eV35K859y57DYl5LbmW5lkGWcgB8Pl7nW0MRMlrbtbcV6YbuvVCLsNeWMx3%2BWQ3Q6vW8uA%2Fz61lp0simAj7LleFxxSGTXsxXPWgczTbhscJZ5myq%2FeIFelJEhf0JGXKp0laMLPG8cQGOqUBKEIvnRglzGtBd1aeC2ivfwvjQhDBtNukGqYLVY4yKJ1eNOEHvETKMnu0xJhvtock4fPSLJspZxqneb%2BoU3MGRbpO5%2FAU5T%2FRlyEdJFhP6s0YNwONh984MtJyCDl9xARbRtTNVKw01GGCGBUrWYK0I55xygV0iTW%2BBoMOwfnHAaYDBjB9vf1heFfJc9XJqbqh6lcwC6zgZdcp5kynFlcklf4qUoOV&X-Amz-Signature=5aa7cd630343c9c94c1fc47b92bdbab3b06c5bc90f2c35924f07c032c13e8262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDEKGDNQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5YjyU8hWAzbN7cUigLUQkcEuURLfEMjDjo%2BCf%2Bbsx6AiEA6xkBOqsg1UwqNWDwbu04W7te%2BHjT9g%2B4FH%2FM4q5A9NEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC5mzXaDSF6CRrQcPyrcA7kGGxtBqx7YmmWTxdbwZ%2FsXOD71QIWX7ICJbAiMs0lb8i1xp7CsgR2eJ0O5QWcmBb9MWkBy2GEqUnNsjzrCNTRlEX6RYRCRgiJ6ecVmRCKKVSkFaINT1GwyaFzucvWlhNZ%2FEkR5Z3pmC8uXVjD3DqBCnxK0Qjyru5F1KYlG7oXgXBYDDtmENBzk%2F2Y6E42ZXKqk1p4eFAPLgQr5ZA8glNKvJTWS2N3rlbKEgcWoG1pEW7U3lgbCL9SRpfi4Bz1JNZ1WP2mD1l1RxuAAsP4fJVwtWPYl5VqQIGkzxeWxadD8NRBCXy%2FSr6lyZaekrqHptvu7eNuQ5bIf9l3dEtbOOnInTOqyn1t2YEmyC%2BjC0Pvxj3rrqU5UUO7PhuW3BxqqeCF7BBnahSamOF6%2BJmIjwOcRJ%2Fd%2BR4mfoe5xQCtwhqCHGfKs%2Fi2t8f9rixjydJEBsv6nM39KSyz5FS3YKGJQOs6V5Xygb4IT8Y6FSlmWCZO9GdyM0abEQuwY2eV35K859y57DYl5LbmW5lkGWcgB8Pl7nW0MRMlrbtbcV6YbuvVCLsNeWMx3%2BWQ3Q6vW8uA%2Fz61lp0simAj7LleFxxSGTXsxXPWgczTbhscJZ5myq%2FeIFelJEhf0JGXKp0laMLPG8cQGOqUBKEIvnRglzGtBd1aeC2ivfwvjQhDBtNukGqYLVY4yKJ1eNOEHvETKMnu0xJhvtock4fPSLJspZxqneb%2BoU3MGRbpO5%2FAU5T%2FRlyEdJFhP6s0YNwONh984MtJyCDl9xARbRtTNVKw01GGCGBUrWYK0I55xygV0iTW%2BBoMOwfnHAaYDBjB9vf1heFfJc9XJqbqh6lcwC6zgZdcp5kynFlcklf4qUoOV&X-Amz-Signature=b54be9329f2ef0f4fb523aead7c810ba5140e0b960cef3c67d392b2f5183c2c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDEKGDNQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5YjyU8hWAzbN7cUigLUQkcEuURLfEMjDjo%2BCf%2Bbsx6AiEA6xkBOqsg1UwqNWDwbu04W7te%2BHjT9g%2B4FH%2FM4q5A9NEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC5mzXaDSF6CRrQcPyrcA7kGGxtBqx7YmmWTxdbwZ%2FsXOD71QIWX7ICJbAiMs0lb8i1xp7CsgR2eJ0O5QWcmBb9MWkBy2GEqUnNsjzrCNTRlEX6RYRCRgiJ6ecVmRCKKVSkFaINT1GwyaFzucvWlhNZ%2FEkR5Z3pmC8uXVjD3DqBCnxK0Qjyru5F1KYlG7oXgXBYDDtmENBzk%2F2Y6E42ZXKqk1p4eFAPLgQr5ZA8glNKvJTWS2N3rlbKEgcWoG1pEW7U3lgbCL9SRpfi4Bz1JNZ1WP2mD1l1RxuAAsP4fJVwtWPYl5VqQIGkzxeWxadD8NRBCXy%2FSr6lyZaekrqHptvu7eNuQ5bIf9l3dEtbOOnInTOqyn1t2YEmyC%2BjC0Pvxj3rrqU5UUO7PhuW3BxqqeCF7BBnahSamOF6%2BJmIjwOcRJ%2Fd%2BR4mfoe5xQCtwhqCHGfKs%2Fi2t8f9rixjydJEBsv6nM39KSyz5FS3YKGJQOs6V5Xygb4IT8Y6FSlmWCZO9GdyM0abEQuwY2eV35K859y57DYl5LbmW5lkGWcgB8Pl7nW0MRMlrbtbcV6YbuvVCLsNeWMx3%2BWQ3Q6vW8uA%2Fz61lp0simAj7LleFxxSGTXsxXPWgczTbhscJZ5myq%2FeIFelJEhf0JGXKp0laMLPG8cQGOqUBKEIvnRglzGtBd1aeC2ivfwvjQhDBtNukGqYLVY4yKJ1eNOEHvETKMnu0xJhvtock4fPSLJspZxqneb%2BoU3MGRbpO5%2FAU5T%2FRlyEdJFhP6s0YNwONh984MtJyCDl9xARbRtTNVKw01GGCGBUrWYK0I55xygV0iTW%2BBoMOwfnHAaYDBjB9vf1heFfJc9XJqbqh6lcwC6zgZdcp5kynFlcklf4qUoOV&X-Amz-Signature=cce995872c6c186860888c47d9a68e745e624e36c1c14dd3050c4623dfcdcdff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

{{< /table >}}

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python

    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
    ])
```

<details>
      <summary>Finding Lidar USB port:</summary>
      ```bash
ls /dev/ttyUSB*
```
  </details>

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

To launch the Lidar node use this command below.

 

{{% alert context="warning" %}}

# NOTE: YOUR RPLIDAR MODEL MIGHT BE DIFFERENT

I am using the a2m8 model so I run the launch file below.

However, your model may be different so please look at this guide to find which launch file to run.

[https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz](https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz)

{{% /alert %}}

```bash
ros2 launch rplidar_ros view_rplidar_a2m8_launch.py scan_mode:=Boost serial_port:=/dev/ttyUSB0
```

```xml
ros2 launch mbot_pkg display.launch.py
```

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDEKGDNQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5YjyU8hWAzbN7cUigLUQkcEuURLfEMjDjo%2BCf%2Bbsx6AiEA6xkBOqsg1UwqNWDwbu04W7te%2BHjT9g%2B4FH%2FM4q5A9NEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC5mzXaDSF6CRrQcPyrcA7kGGxtBqx7YmmWTxdbwZ%2FsXOD71QIWX7ICJbAiMs0lb8i1xp7CsgR2eJ0O5QWcmBb9MWkBy2GEqUnNsjzrCNTRlEX6RYRCRgiJ6ecVmRCKKVSkFaINT1GwyaFzucvWlhNZ%2FEkR5Z3pmC8uXVjD3DqBCnxK0Qjyru5F1KYlG7oXgXBYDDtmENBzk%2F2Y6E42ZXKqk1p4eFAPLgQr5ZA8glNKvJTWS2N3rlbKEgcWoG1pEW7U3lgbCL9SRpfi4Bz1JNZ1WP2mD1l1RxuAAsP4fJVwtWPYl5VqQIGkzxeWxadD8NRBCXy%2FSr6lyZaekrqHptvu7eNuQ5bIf9l3dEtbOOnInTOqyn1t2YEmyC%2BjC0Pvxj3rrqU5UUO7PhuW3BxqqeCF7BBnahSamOF6%2BJmIjwOcRJ%2Fd%2BR4mfoe5xQCtwhqCHGfKs%2Fi2t8f9rixjydJEBsv6nM39KSyz5FS3YKGJQOs6V5Xygb4IT8Y6FSlmWCZO9GdyM0abEQuwY2eV35K859y57DYl5LbmW5lkGWcgB8Pl7nW0MRMlrbtbcV6YbuvVCLsNeWMx3%2BWQ3Q6vW8uA%2Fz61lp0simAj7LleFxxSGTXsxXPWgczTbhscJZ5myq%2FeIFelJEhf0JGXKp0laMLPG8cQGOqUBKEIvnRglzGtBd1aeC2ivfwvjQhDBtNukGqYLVY4yKJ1eNOEHvETKMnu0xJhvtock4fPSLJspZxqneb%2BoU3MGRbpO5%2FAU5T%2FRlyEdJFhP6s0YNwONh984MtJyCDl9xARbRtTNVKw01GGCGBUrWYK0I55xygV0iTW%2BBoMOwfnHAaYDBjB9vf1heFfJc9XJqbqh6lcwC6zgZdcp5kynFlcklf4qUoOV&X-Amz-Signature=2e4f6fa4a12811bc0f26a4334db8ba1a7f4fb9c06d30b6bce67be84c20082943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDEKGDNQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5YjyU8hWAzbN7cUigLUQkcEuURLfEMjDjo%2BCf%2Bbsx6AiEA6xkBOqsg1UwqNWDwbu04W7te%2BHjT9g%2B4FH%2FM4q5A9NEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC5mzXaDSF6CRrQcPyrcA7kGGxtBqx7YmmWTxdbwZ%2FsXOD71QIWX7ICJbAiMs0lb8i1xp7CsgR2eJ0O5QWcmBb9MWkBy2GEqUnNsjzrCNTRlEX6RYRCRgiJ6ecVmRCKKVSkFaINT1GwyaFzucvWlhNZ%2FEkR5Z3pmC8uXVjD3DqBCnxK0Qjyru5F1KYlG7oXgXBYDDtmENBzk%2F2Y6E42ZXKqk1p4eFAPLgQr5ZA8glNKvJTWS2N3rlbKEgcWoG1pEW7U3lgbCL9SRpfi4Bz1JNZ1WP2mD1l1RxuAAsP4fJVwtWPYl5VqQIGkzxeWxadD8NRBCXy%2FSr6lyZaekrqHptvu7eNuQ5bIf9l3dEtbOOnInTOqyn1t2YEmyC%2BjC0Pvxj3rrqU5UUO7PhuW3BxqqeCF7BBnahSamOF6%2BJmIjwOcRJ%2Fd%2BR4mfoe5xQCtwhqCHGfKs%2Fi2t8f9rixjydJEBsv6nM39KSyz5FS3YKGJQOs6V5Xygb4IT8Y6FSlmWCZO9GdyM0abEQuwY2eV35K859y57DYl5LbmW5lkGWcgB8Pl7nW0MRMlrbtbcV6YbuvVCLsNeWMx3%2BWQ3Q6vW8uA%2Fz61lp0simAj7LleFxxSGTXsxXPWgczTbhscJZ5myq%2FeIFelJEhf0JGXKp0laMLPG8cQGOqUBKEIvnRglzGtBd1aeC2ivfwvjQhDBtNukGqYLVY4yKJ1eNOEHvETKMnu0xJhvtock4fPSLJspZxqneb%2BoU3MGRbpO5%2FAU5T%2FRlyEdJFhP6s0YNwONh984MtJyCDl9xARbRtTNVKw01GGCGBUrWYK0I55xygV0iTW%2BBoMOwfnHAaYDBjB9vf1heFfJc9XJqbqh6lcwC6zgZdcp5kynFlcklf4qUoOV&X-Amz-Signature=6b5d90fac11bdeb80815c2f2c810130ddadbc42adaabc8f55c9f2c955bde49be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python

 def generate_launch_description():
		 ...
		 
     lidar_node = Node(
        package='rplidar_ros',
        executable='rplidar_node',
        name='rplidar_node',
        parameters=[{'channel_type': 'serial',
                     'serial_port': '/dev/ttyUSB0', #recomended to do /dev/serial/by-path/...
                     'serial_baudrate': 115200,
                     'frame_id': 'lidar_link',
                     'scan_mode': 'Boost'}],
        output='screen')

 
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
    ])
```

**Result:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```
