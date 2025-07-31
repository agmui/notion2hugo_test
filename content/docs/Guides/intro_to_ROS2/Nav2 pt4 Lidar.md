---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-30T06:25:00.000Z"
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

```xml

  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7CAVG7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwXl8WMvMAQnY6OUQfBsrNsiue6cAXZEGvHRdz%2FkruYAiEA4d1IGWaX2%2FbPQzGP6ioAnIeZU6wEw3Mf0JaFkhPWLYkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNWBaSaHrDX7%2FlWHyrcA9mj5MuRl9z6LY7%2BvR6U5qYGdc%2BeSnDEKrIBXRF92HUX0RZadSOEx1AtGHJCeY72XTCGoHRGb%2BCFq8lYVF8FfydOGEYQvgQRumH4M6H5kyLpOf4%2Fxxr3xWK6TE84IBe4GYKZSXLk3LHHatHNtmz0YaphRDSmp%2FyEm%2BTcOujuFDkw%2FIXFpd1MW8wLfe0FNB5R8RWev6ESUBz9kSqAb7k%2FGrO845RKpmkTfJLXnJK%2BM19cwWF4LKxjuLf8bSrlSoWnWdUu746dCUJM%2BLmjSLvxS3pZr97ENU8Xnv80YXs%2B3hhUKOCe45eftd61yH1zc4aTL36UTwjATYMIa4N%2BUqztRThTSERGDCs%2FYlCiW0dHEwUsqlyaVy6u5pEvZHF0EtUbYaFNiSqvhtsAb7%2Bd%2BunQmoQlaRfE%2FeETZxOrbnzq9b5NDTXBefGBkZ%2FJSAiDXOqAKSHXOVZnanWioqbaTGoAN1IIuuZiR7pIDK0sKYuwTHXgV4kc1%2FPppetuaNH%2BpeD2OcnV4JNyr%2BgGso%2FJCLkhskHHj9upez1zW3Fvw1ZiQ5JW2vnjdAi8Rx%2BhjXmhDNEZc6oDFiupj5zKD25oOox%2BDT5Q7FWO1LrPbIoy2OVZVmcERxQJUsqcZpSrIIKwMOucrcQGOqUBxS%2FgZLunBPTW%2F9mOE9lvOgMdiMkYKVYmdebzftuxOpBjyc5RE6yKpvQ%2F3hVVg7SjHjwpfKU38DBqx1jXbzZ7QvqrsrtbDLYVMQB419FtkneKMBD2L6oVRGTW3WuFFZ4jsfPd3k2aDngSzm9BMmAY0kplNNni%2FexHwRBydKRjrUqnIJYGcQWl1JNbdsTboI8yzJ5HjgeJwI8%2BiTGCqq7uZxgzIerH&X-Amz-Signature=d5a008c7aafdc9b42fe5e5abce9a3bcabd043c1a20b1bfe265ee3e1855b6c1d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7CAVG7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwXl8WMvMAQnY6OUQfBsrNsiue6cAXZEGvHRdz%2FkruYAiEA4d1IGWaX2%2FbPQzGP6ioAnIeZU6wEw3Mf0JaFkhPWLYkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNWBaSaHrDX7%2FlWHyrcA9mj5MuRl9z6LY7%2BvR6U5qYGdc%2BeSnDEKrIBXRF92HUX0RZadSOEx1AtGHJCeY72XTCGoHRGb%2BCFq8lYVF8FfydOGEYQvgQRumH4M6H5kyLpOf4%2Fxxr3xWK6TE84IBe4GYKZSXLk3LHHatHNtmz0YaphRDSmp%2FyEm%2BTcOujuFDkw%2FIXFpd1MW8wLfe0FNB5R8RWev6ESUBz9kSqAb7k%2FGrO845RKpmkTfJLXnJK%2BM19cwWF4LKxjuLf8bSrlSoWnWdUu746dCUJM%2BLmjSLvxS3pZr97ENU8Xnv80YXs%2B3hhUKOCe45eftd61yH1zc4aTL36UTwjATYMIa4N%2BUqztRThTSERGDCs%2FYlCiW0dHEwUsqlyaVy6u5pEvZHF0EtUbYaFNiSqvhtsAb7%2Bd%2BunQmoQlaRfE%2FeETZxOrbnzq9b5NDTXBefGBkZ%2FJSAiDXOqAKSHXOVZnanWioqbaTGoAN1IIuuZiR7pIDK0sKYuwTHXgV4kc1%2FPppetuaNH%2BpeD2OcnV4JNyr%2BgGso%2FJCLkhskHHj9upez1zW3Fvw1ZiQ5JW2vnjdAi8Rx%2BhjXmhDNEZc6oDFiupj5zKD25oOox%2BDT5Q7FWO1LrPbIoy2OVZVmcERxQJUsqcZpSrIIKwMOucrcQGOqUBxS%2FgZLunBPTW%2F9mOE9lvOgMdiMkYKVYmdebzftuxOpBjyc5RE6yKpvQ%2F3hVVg7SjHjwpfKU38DBqx1jXbzZ7QvqrsrtbDLYVMQB419FtkneKMBD2L6oVRGTW3WuFFZ4jsfPd3k2aDngSzm9BMmAY0kplNNni%2FexHwRBydKRjrUqnIJYGcQWl1JNbdsTboI8yzJ5HjgeJwI8%2BiTGCqq7uZxgzIerH&X-Amz-Signature=46080d7fa31d7eccbae7a7a00580eef7695144d806bc3f623b748f27d19ff7c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7CAVG7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwXl8WMvMAQnY6OUQfBsrNsiue6cAXZEGvHRdz%2FkruYAiEA4d1IGWaX2%2FbPQzGP6ioAnIeZU6wEw3Mf0JaFkhPWLYkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNWBaSaHrDX7%2FlWHyrcA9mj5MuRl9z6LY7%2BvR6U5qYGdc%2BeSnDEKrIBXRF92HUX0RZadSOEx1AtGHJCeY72XTCGoHRGb%2BCFq8lYVF8FfydOGEYQvgQRumH4M6H5kyLpOf4%2Fxxr3xWK6TE84IBe4GYKZSXLk3LHHatHNtmz0YaphRDSmp%2FyEm%2BTcOujuFDkw%2FIXFpd1MW8wLfe0FNB5R8RWev6ESUBz9kSqAb7k%2FGrO845RKpmkTfJLXnJK%2BM19cwWF4LKxjuLf8bSrlSoWnWdUu746dCUJM%2BLmjSLvxS3pZr97ENU8Xnv80YXs%2B3hhUKOCe45eftd61yH1zc4aTL36UTwjATYMIa4N%2BUqztRThTSERGDCs%2FYlCiW0dHEwUsqlyaVy6u5pEvZHF0EtUbYaFNiSqvhtsAb7%2Bd%2BunQmoQlaRfE%2FeETZxOrbnzq9b5NDTXBefGBkZ%2FJSAiDXOqAKSHXOVZnanWioqbaTGoAN1IIuuZiR7pIDK0sKYuwTHXgV4kc1%2FPppetuaNH%2BpeD2OcnV4JNyr%2BgGso%2FJCLkhskHHj9upez1zW3Fvw1ZiQ5JW2vnjdAi8Rx%2BhjXmhDNEZc6oDFiupj5zKD25oOox%2BDT5Q7FWO1LrPbIoy2OVZVmcERxQJUsqcZpSrIIKwMOucrcQGOqUBxS%2FgZLunBPTW%2F9mOE9lvOgMdiMkYKVYmdebzftuxOpBjyc5RE6yKpvQ%2F3hVVg7SjHjwpfKU38DBqx1jXbzZ7QvqrsrtbDLYVMQB419FtkneKMBD2L6oVRGTW3WuFFZ4jsfPd3k2aDngSzm9BMmAY0kplNNni%2FexHwRBydKRjrUqnIJYGcQWl1JNbdsTboI8yzJ5HjgeJwI8%2BiTGCqq7uZxgzIerH&X-Amz-Signature=d2fefc8faf6ff16d2bba102f411b863091399ed96e46a9420b7cbdf24ff41c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7CAVG7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwXl8WMvMAQnY6OUQfBsrNsiue6cAXZEGvHRdz%2FkruYAiEA4d1IGWaX2%2FbPQzGP6ioAnIeZU6wEw3Mf0JaFkhPWLYkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNWBaSaHrDX7%2FlWHyrcA9mj5MuRl9z6LY7%2BvR6U5qYGdc%2BeSnDEKrIBXRF92HUX0RZadSOEx1AtGHJCeY72XTCGoHRGb%2BCFq8lYVF8FfydOGEYQvgQRumH4M6H5kyLpOf4%2Fxxr3xWK6TE84IBe4GYKZSXLk3LHHatHNtmz0YaphRDSmp%2FyEm%2BTcOujuFDkw%2FIXFpd1MW8wLfe0FNB5R8RWev6ESUBz9kSqAb7k%2FGrO845RKpmkTfJLXnJK%2BM19cwWF4LKxjuLf8bSrlSoWnWdUu746dCUJM%2BLmjSLvxS3pZr97ENU8Xnv80YXs%2B3hhUKOCe45eftd61yH1zc4aTL36UTwjATYMIa4N%2BUqztRThTSERGDCs%2FYlCiW0dHEwUsqlyaVy6u5pEvZHF0EtUbYaFNiSqvhtsAb7%2Bd%2BunQmoQlaRfE%2FeETZxOrbnzq9b5NDTXBefGBkZ%2FJSAiDXOqAKSHXOVZnanWioqbaTGoAN1IIuuZiR7pIDK0sKYuwTHXgV4kc1%2FPppetuaNH%2BpeD2OcnV4JNyr%2BgGso%2FJCLkhskHHj9upez1zW3Fvw1ZiQ5JW2vnjdAi8Rx%2BhjXmhDNEZc6oDFiupj5zKD25oOox%2BDT5Q7FWO1LrPbIoy2OVZVmcERxQJUsqcZpSrIIKwMOucrcQGOqUBxS%2FgZLunBPTW%2F9mOE9lvOgMdiMkYKVYmdebzftuxOpBjyc5RE6yKpvQ%2F3hVVg7SjHjwpfKU38DBqx1jXbzZ7QvqrsrtbDLYVMQB419FtkneKMBD2L6oVRGTW3WuFFZ4jsfPd3k2aDngSzm9BMmAY0kplNNni%2FexHwRBydKRjrUqnIJYGcQWl1JNbdsTboI8yzJ5HjgeJwI8%2BiTGCqq7uZxgzIerH&X-Amz-Signature=01e2fb0106f1adce693165a8527068e4757fae5ebb5a90ef5cb8687d8cacdb53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7CAVG7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwXl8WMvMAQnY6OUQfBsrNsiue6cAXZEGvHRdz%2FkruYAiEA4d1IGWaX2%2FbPQzGP6ioAnIeZU6wEw3Mf0JaFkhPWLYkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNWBaSaHrDX7%2FlWHyrcA9mj5MuRl9z6LY7%2BvR6U5qYGdc%2BeSnDEKrIBXRF92HUX0RZadSOEx1AtGHJCeY72XTCGoHRGb%2BCFq8lYVF8FfydOGEYQvgQRumH4M6H5kyLpOf4%2Fxxr3xWK6TE84IBe4GYKZSXLk3LHHatHNtmz0YaphRDSmp%2FyEm%2BTcOujuFDkw%2FIXFpd1MW8wLfe0FNB5R8RWev6ESUBz9kSqAb7k%2FGrO845RKpmkTfJLXnJK%2BM19cwWF4LKxjuLf8bSrlSoWnWdUu746dCUJM%2BLmjSLvxS3pZr97ENU8Xnv80YXs%2B3hhUKOCe45eftd61yH1zc4aTL36UTwjATYMIa4N%2BUqztRThTSERGDCs%2FYlCiW0dHEwUsqlyaVy6u5pEvZHF0EtUbYaFNiSqvhtsAb7%2Bd%2BunQmoQlaRfE%2FeETZxOrbnzq9b5NDTXBefGBkZ%2FJSAiDXOqAKSHXOVZnanWioqbaTGoAN1IIuuZiR7pIDK0sKYuwTHXgV4kc1%2FPppetuaNH%2BpeD2OcnV4JNyr%2BgGso%2FJCLkhskHHj9upez1zW3Fvw1ZiQ5JW2vnjdAi8Rx%2BhjXmhDNEZc6oDFiupj5zKD25oOox%2BDT5Q7FWO1LrPbIoy2OVZVmcERxQJUsqcZpSrIIKwMOucrcQGOqUBxS%2FgZLunBPTW%2F9mOE9lvOgMdiMkYKVYmdebzftuxOpBjyc5RE6yKpvQ%2F3hVVg7SjHjwpfKU38DBqx1jXbzZ7QvqrsrtbDLYVMQB419FtkneKMBD2L6oVRGTW3WuFFZ4jsfPd3k2aDngSzm9BMmAY0kplNNni%2FexHwRBydKRjrUqnIJYGcQWl1JNbdsTboI8yzJ5HjgeJwI8%2BiTGCqq7uZxgzIerH&X-Amz-Signature=5733bfef7fa943179c0d73bab1b15bf4c9e9f499beb1fc379d9195d1ec35469c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7CAVG7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwXl8WMvMAQnY6OUQfBsrNsiue6cAXZEGvHRdz%2FkruYAiEA4d1IGWaX2%2FbPQzGP6ioAnIeZU6wEw3Mf0JaFkhPWLYkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNWBaSaHrDX7%2FlWHyrcA9mj5MuRl9z6LY7%2BvR6U5qYGdc%2BeSnDEKrIBXRF92HUX0RZadSOEx1AtGHJCeY72XTCGoHRGb%2BCFq8lYVF8FfydOGEYQvgQRumH4M6H5kyLpOf4%2Fxxr3xWK6TE84IBe4GYKZSXLk3LHHatHNtmz0YaphRDSmp%2FyEm%2BTcOujuFDkw%2FIXFpd1MW8wLfe0FNB5R8RWev6ESUBz9kSqAb7k%2FGrO845RKpmkTfJLXnJK%2BM19cwWF4LKxjuLf8bSrlSoWnWdUu746dCUJM%2BLmjSLvxS3pZr97ENU8Xnv80YXs%2B3hhUKOCe45eftd61yH1zc4aTL36UTwjATYMIa4N%2BUqztRThTSERGDCs%2FYlCiW0dHEwUsqlyaVy6u5pEvZHF0EtUbYaFNiSqvhtsAb7%2Bd%2BunQmoQlaRfE%2FeETZxOrbnzq9b5NDTXBefGBkZ%2FJSAiDXOqAKSHXOVZnanWioqbaTGoAN1IIuuZiR7pIDK0sKYuwTHXgV4kc1%2FPppetuaNH%2BpeD2OcnV4JNyr%2BgGso%2FJCLkhskHHj9upez1zW3Fvw1ZiQ5JW2vnjdAi8Rx%2BhjXmhDNEZc6oDFiupj5zKD25oOox%2BDT5Q7FWO1LrPbIoy2OVZVmcERxQJUsqcZpSrIIKwMOucrcQGOqUBxS%2FgZLunBPTW%2F9mOE9lvOgMdiMkYKVYmdebzftuxOpBjyc5RE6yKpvQ%2F3hVVg7SjHjwpfKU38DBqx1jXbzZ7QvqrsrtbDLYVMQB419FtkneKMBD2L6oVRGTW3WuFFZ4jsfPd3k2aDngSzm9BMmAY0kplNNni%2FexHwRBydKRjrUqnIJYGcQWl1JNbdsTboI8yzJ5HjgeJwI8%2BiTGCqq7uZxgzIerH&X-Amz-Signature=79888648349fe4612effefa0706fd7a7b72814501cddda9c25f0e0947bedda7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7CAVG7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwXl8WMvMAQnY6OUQfBsrNsiue6cAXZEGvHRdz%2FkruYAiEA4d1IGWaX2%2FbPQzGP6ioAnIeZU6wEw3Mf0JaFkhPWLYkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNWBaSaHrDX7%2FlWHyrcA9mj5MuRl9z6LY7%2BvR6U5qYGdc%2BeSnDEKrIBXRF92HUX0RZadSOEx1AtGHJCeY72XTCGoHRGb%2BCFq8lYVF8FfydOGEYQvgQRumH4M6H5kyLpOf4%2Fxxr3xWK6TE84IBe4GYKZSXLk3LHHatHNtmz0YaphRDSmp%2FyEm%2BTcOujuFDkw%2FIXFpd1MW8wLfe0FNB5R8RWev6ESUBz9kSqAb7k%2FGrO845RKpmkTfJLXnJK%2BM19cwWF4LKxjuLf8bSrlSoWnWdUu746dCUJM%2BLmjSLvxS3pZr97ENU8Xnv80YXs%2B3hhUKOCe45eftd61yH1zc4aTL36UTwjATYMIa4N%2BUqztRThTSERGDCs%2FYlCiW0dHEwUsqlyaVy6u5pEvZHF0EtUbYaFNiSqvhtsAb7%2Bd%2BunQmoQlaRfE%2FeETZxOrbnzq9b5NDTXBefGBkZ%2FJSAiDXOqAKSHXOVZnanWioqbaTGoAN1IIuuZiR7pIDK0sKYuwTHXgV4kc1%2FPppetuaNH%2BpeD2OcnV4JNyr%2BgGso%2FJCLkhskHHj9upez1zW3Fvw1ZiQ5JW2vnjdAi8Rx%2BhjXmhDNEZc6oDFiupj5zKD25oOox%2BDT5Q7FWO1LrPbIoy2OVZVmcERxQJUsqcZpSrIIKwMOucrcQGOqUBxS%2FgZLunBPTW%2F9mOE9lvOgMdiMkYKVYmdebzftuxOpBjyc5RE6yKpvQ%2F3hVVg7SjHjwpfKU38DBqx1jXbzZ7QvqrsrtbDLYVMQB419FtkneKMBD2L6oVRGTW3WuFFZ4jsfPd3k2aDngSzm9BMmAY0kplNNni%2FexHwRBydKRjrUqnIJYGcQWl1JNbdsTboI8yzJ5HjgeJwI8%2BiTGCqq7uZxgzIerH&X-Amz-Signature=84ac849f792712d6c139ffd6b9f73243bfb910ded1d562d11fb8094c4095bb79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7CAVG7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwXl8WMvMAQnY6OUQfBsrNsiue6cAXZEGvHRdz%2FkruYAiEA4d1IGWaX2%2FbPQzGP6ioAnIeZU6wEw3Mf0JaFkhPWLYkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNWBaSaHrDX7%2FlWHyrcA9mj5MuRl9z6LY7%2BvR6U5qYGdc%2BeSnDEKrIBXRF92HUX0RZadSOEx1AtGHJCeY72XTCGoHRGb%2BCFq8lYVF8FfydOGEYQvgQRumH4M6H5kyLpOf4%2Fxxr3xWK6TE84IBe4GYKZSXLk3LHHatHNtmz0YaphRDSmp%2FyEm%2BTcOujuFDkw%2FIXFpd1MW8wLfe0FNB5R8RWev6ESUBz9kSqAb7k%2FGrO845RKpmkTfJLXnJK%2BM19cwWF4LKxjuLf8bSrlSoWnWdUu746dCUJM%2BLmjSLvxS3pZr97ENU8Xnv80YXs%2B3hhUKOCe45eftd61yH1zc4aTL36UTwjATYMIa4N%2BUqztRThTSERGDCs%2FYlCiW0dHEwUsqlyaVy6u5pEvZHF0EtUbYaFNiSqvhtsAb7%2Bd%2BunQmoQlaRfE%2FeETZxOrbnzq9b5NDTXBefGBkZ%2FJSAiDXOqAKSHXOVZnanWioqbaTGoAN1IIuuZiR7pIDK0sKYuwTHXgV4kc1%2FPppetuaNH%2BpeD2OcnV4JNyr%2BgGso%2FJCLkhskHHj9upez1zW3Fvw1ZiQ5JW2vnjdAi8Rx%2BhjXmhDNEZc6oDFiupj5zKD25oOox%2BDT5Q7FWO1LrPbIoy2OVZVmcERxQJUsqcZpSrIIKwMOucrcQGOqUBxS%2FgZLunBPTW%2F9mOE9lvOgMdiMkYKVYmdebzftuxOpBjyc5RE6yKpvQ%2F3hVVg7SjHjwpfKU38DBqx1jXbzZ7QvqrsrtbDLYVMQB419FtkneKMBD2L6oVRGTW3WuFFZ4jsfPd3k2aDngSzm9BMmAY0kplNNni%2FexHwRBydKRjrUqnIJYGcQWl1JNbdsTboI8yzJ5HjgeJwI8%2BiTGCqq7uZxgzIerH&X-Amz-Signature=57640a6460992b8e5b96fe4564a68f6f8861cfef8e1ab70665f31b635376f4cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: get official docs link

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7CAVG7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwXl8WMvMAQnY6OUQfBsrNsiue6cAXZEGvHRdz%2FkruYAiEA4d1IGWaX2%2FbPQzGP6ioAnIeZU6wEw3Mf0JaFkhPWLYkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNWBaSaHrDX7%2FlWHyrcA9mj5MuRl9z6LY7%2BvR6U5qYGdc%2BeSnDEKrIBXRF92HUX0RZadSOEx1AtGHJCeY72XTCGoHRGb%2BCFq8lYVF8FfydOGEYQvgQRumH4M6H5kyLpOf4%2Fxxr3xWK6TE84IBe4GYKZSXLk3LHHatHNtmz0YaphRDSmp%2FyEm%2BTcOujuFDkw%2FIXFpd1MW8wLfe0FNB5R8RWev6ESUBz9kSqAb7k%2FGrO845RKpmkTfJLXnJK%2BM19cwWF4LKxjuLf8bSrlSoWnWdUu746dCUJM%2BLmjSLvxS3pZr97ENU8Xnv80YXs%2B3hhUKOCe45eftd61yH1zc4aTL36UTwjATYMIa4N%2BUqztRThTSERGDCs%2FYlCiW0dHEwUsqlyaVy6u5pEvZHF0EtUbYaFNiSqvhtsAb7%2Bd%2BunQmoQlaRfE%2FeETZxOrbnzq9b5NDTXBefGBkZ%2FJSAiDXOqAKSHXOVZnanWioqbaTGoAN1IIuuZiR7pIDK0sKYuwTHXgV4kc1%2FPppetuaNH%2BpeD2OcnV4JNyr%2BgGso%2FJCLkhskHHj9upez1zW3Fvw1ZiQ5JW2vnjdAi8Rx%2BhjXmhDNEZc6oDFiupj5zKD25oOox%2BDT5Q7FWO1LrPbIoy2OVZVmcERxQJUsqcZpSrIIKwMOucrcQGOqUBxS%2FgZLunBPTW%2F9mOE9lvOgMdiMkYKVYmdebzftuxOpBjyc5RE6yKpvQ%2F3hVVg7SjHjwpfKU38DBqx1jXbzZ7QvqrsrtbDLYVMQB419FtkneKMBD2L6oVRGTW3WuFFZ4jsfPd3k2aDngSzm9BMmAY0kplNNni%2FexHwRBydKRjrUqnIJYGcQWl1JNbdsTboI8yzJ5HjgeJwI8%2BiTGCqq7uZxgzIerH&X-Amz-Signature=4177be1c0eed9de9f26963e825bc963c8d7c73c831e06c6ad2ea3dd8bc6a6281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

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

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7CAVG7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwXl8WMvMAQnY6OUQfBsrNsiue6cAXZEGvHRdz%2FkruYAiEA4d1IGWaX2%2FbPQzGP6ioAnIeZU6wEw3Mf0JaFkhPWLYkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNWBaSaHrDX7%2FlWHyrcA9mj5MuRl9z6LY7%2BvR6U5qYGdc%2BeSnDEKrIBXRF92HUX0RZadSOEx1AtGHJCeY72XTCGoHRGb%2BCFq8lYVF8FfydOGEYQvgQRumH4M6H5kyLpOf4%2Fxxr3xWK6TE84IBe4GYKZSXLk3LHHatHNtmz0YaphRDSmp%2FyEm%2BTcOujuFDkw%2FIXFpd1MW8wLfe0FNB5R8RWev6ESUBz9kSqAb7k%2FGrO845RKpmkTfJLXnJK%2BM19cwWF4LKxjuLf8bSrlSoWnWdUu746dCUJM%2BLmjSLvxS3pZr97ENU8Xnv80YXs%2B3hhUKOCe45eftd61yH1zc4aTL36UTwjATYMIa4N%2BUqztRThTSERGDCs%2FYlCiW0dHEwUsqlyaVy6u5pEvZHF0EtUbYaFNiSqvhtsAb7%2Bd%2BunQmoQlaRfE%2FeETZxOrbnzq9b5NDTXBefGBkZ%2FJSAiDXOqAKSHXOVZnanWioqbaTGoAN1IIuuZiR7pIDK0sKYuwTHXgV4kc1%2FPppetuaNH%2BpeD2OcnV4JNyr%2BgGso%2FJCLkhskHHj9upez1zW3Fvw1ZiQ5JW2vnjdAi8Rx%2BhjXmhDNEZc6oDFiupj5zKD25oOox%2BDT5Q7FWO1LrPbIoy2OVZVmcERxQJUsqcZpSrIIKwMOucrcQGOqUBxS%2FgZLunBPTW%2F9mOE9lvOgMdiMkYKVYmdebzftuxOpBjyc5RE6yKpvQ%2F3hVVg7SjHjwpfKU38DBqx1jXbzZ7QvqrsrtbDLYVMQB419FtkneKMBD2L6oVRGTW3WuFFZ4jsfPd3k2aDngSzm9BMmAY0kplNNni%2FexHwRBydKRjrUqnIJYGcQWl1JNbdsTboI8yzJ5HjgeJwI8%2BiTGCqq7uZxgzIerH&X-Amz-Signature=7895b69c2aa81e7f5a0492a79140cc48002dc8040634682ed15c0c8f1ecbf8e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
