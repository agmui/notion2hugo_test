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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TVSYKOV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEW%2BSbPZu4QSekKC%2FrNiXl4C22XQk%2F3XUYxAMkseuR8AiEA2VQDBstyH2ymURcxmsRscnlyu9aX4NNpDM5PqP3gTiQqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8%2BJG3TTOs%2BuXzRHyrcA5YxFGDevcmMCFPUlYqzbNNQilE66Nwii4VhLOot5540IBms7nEtK%2FcI0nHEHVLyMtnSrrmk%2BKQMYMy8%2BuOnqH2VTTFpY2mDHEKrEeOt6wSctkWOrY%2BC%2F6D70qKe%2BI8E0FPvLGPzC9dJRlZ4t7xICWGcHeVoWNkRWqxTlrm8cJ2vpb5V7sRQSz1y9z9%2FA8b4z%2Bq3ocpe3FQXNO46FykWRSAhZJ8uSZZh4D5zxeKJEtuEgUCIjc5CMcXt1EoaEOnd4r4j7s%2BdYlaVTg1NZJwHPWOF5vxxqMSlZayvgMtcR4keF%2FU8uOMqib8J%2FS7eIk5XvBct2JxmzR8RUfKhIHcsFmfiAzdtdRwBG9xBBVY193Fw9MskH2lwpKgwAWikgijiKVFks%2FuaeXAQ6daZeThlgF6sKhRJI%2BkINWyTL26oBBOCLLfMibFrNtk67VUGsjdJ7QoWLamvtorOe1HIF%2BPUrPTzrC%2FQEGOLuttCpZ7PniMYBOFpFWjeVDjzWAewqy5H7ISlhVZHqsbVft4IKdehHORVc2xgLsvF17HrKzNIGEbRqBoqwQDYh2pgomBUjkkjvLrzYKIEkKI9Ec6tbP46Q8u4RhBAnySBYZ9ok%2BcW048hJ5idgg7LSRz0vIxRMJaZ4sQGOqUBG4a8j2%2BaFy0oUVcz3itTAvWZ9rznC6KKtCLH7X0BXPxfVLFA1z9UkPftaKgOiNatghCTYwRKIqSagyDcxZLpwWbJ2Vzms7xfxNm2XafXXjsU%2BcIuIfzMF5JgLvS2fTZWqACV3cI4k%2Fd0b4mcvsH%2BWuJi8%2BtaNa%2BKaUO8iFA6R8sd%2B0g%2BfQ41EEGatwgiT9eLT8ScakoR2KjEIpH%2F49njdeBkJUD0&X-Amz-Signature=822fe2a978dde90144f31d14a62d125673a72224c0a5b24a1ba66d26cc46e9f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XQBFVR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsG6%2F306%2FDezhlu5HQdmj%2FGMsv68%2FdiJfOUzP%2BUtaFrAiEAwQEY2fJ9eu%2F5ZR3l0wi92L2VZ8JNVQxZ4J1sZYD0%2FVIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPzyLDkFZ%2F1shK20yrcA8jnVnr%2FDotKNZH2wUvKP42FScmLd5QOW9ELQeV7stBCKTQKYBYDOJvqNtWnn32nlT08IYN3QKm%2Ff8WVabjijoU7kyOQqz1tYHpWQogUPsCSYIDe7O%2B5CXw3PATTdP25xmpbE%2FBX4pJQe7%2FaKDjghttUI1ZN8AJ%2BuG5f81W1STSsNd9peHvNR%2BsvIJASox%2BhOtfylrSfxQibNJACtPVN%2FeDIW3ZSrbw5hDrZkge0vsYSFUbNO0njItEMZoMonBP4VP%2F8xHu%2BZu5Xc4ohdX8nvwtnRsz5OJQtfDQyXX8ZY%2FgNvKkVpeb9OYSXSICGa1niy6iTEUm5TSY9o5Z1WUbRdhZBxgIOa9jwCqEBtHvx31r5%2FeTebUqhJqHfFXyKi1Ft%2BRrFY1no4q4gaBCjDuPmPXiNhT18c%2B1Vq3ws9NFxBAL17HoIbwP6AabOkKZAHkuwyMqSTWGbcLRXomifFfvjgdl2Uc8vb6q4Jm%2BwuVwStY2Vw1KE41qVOHFyWi%2BidLKgCaFJ%2BkE0MC0FwRbAmoRHK2OKg0wOBljmpJhjeHuPWWF13gu%2BUGel01gW6vvI2NTymzdrez6SKjtj%2FrR1FhDIH9diiZS4AHXvQYtwVyYH9F9U8HAM66pDVdlrScxnMPCY4sQGOqUB%2BlfwkIhqDVGP7goiBrbh0JHQHQ0SGCgN0GnUb%2FMB5c%2BBNE7rD%2FlXoXeY%2BNTQxMY5bsQodeDUYM1zzbtBXFx%2FsdUy33PdPZsOfqpGZVHjeUNOeiI1ErRWuGv3dK00bHuUrKdw14G9IdscrjqOCHRZwB2jY09H5%2FOc0X8XW%2FHEIb%2FWFXgZGMyH4L1LuTBfpWM75SRimYhBPeXGMbPvUBosGn1gVHVi&X-Amz-Signature=8473070d1c89131951ff552ee56c8981b8b4b19a520a86bef758fc4f94889751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XQBFVR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsG6%2F306%2FDezhlu5HQdmj%2FGMsv68%2FdiJfOUzP%2BUtaFrAiEAwQEY2fJ9eu%2F5ZR3l0wi92L2VZ8JNVQxZ4J1sZYD0%2FVIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPzyLDkFZ%2F1shK20yrcA8jnVnr%2FDotKNZH2wUvKP42FScmLd5QOW9ELQeV7stBCKTQKYBYDOJvqNtWnn32nlT08IYN3QKm%2Ff8WVabjijoU7kyOQqz1tYHpWQogUPsCSYIDe7O%2B5CXw3PATTdP25xmpbE%2FBX4pJQe7%2FaKDjghttUI1ZN8AJ%2BuG5f81W1STSsNd9peHvNR%2BsvIJASox%2BhOtfylrSfxQibNJACtPVN%2FeDIW3ZSrbw5hDrZkge0vsYSFUbNO0njItEMZoMonBP4VP%2F8xHu%2BZu5Xc4ohdX8nvwtnRsz5OJQtfDQyXX8ZY%2FgNvKkVpeb9OYSXSICGa1niy6iTEUm5TSY9o5Z1WUbRdhZBxgIOa9jwCqEBtHvx31r5%2FeTebUqhJqHfFXyKi1Ft%2BRrFY1no4q4gaBCjDuPmPXiNhT18c%2B1Vq3ws9NFxBAL17HoIbwP6AabOkKZAHkuwyMqSTWGbcLRXomifFfvjgdl2Uc8vb6q4Jm%2BwuVwStY2Vw1KE41qVOHFyWi%2BidLKgCaFJ%2BkE0MC0FwRbAmoRHK2OKg0wOBljmpJhjeHuPWWF13gu%2BUGel01gW6vvI2NTymzdrez6SKjtj%2FrR1FhDIH9diiZS4AHXvQYtwVyYH9F9U8HAM66pDVdlrScxnMPCY4sQGOqUB%2BlfwkIhqDVGP7goiBrbh0JHQHQ0SGCgN0GnUb%2FMB5c%2BBNE7rD%2FlXoXeY%2BNTQxMY5bsQodeDUYM1zzbtBXFx%2FsdUy33PdPZsOfqpGZVHjeUNOeiI1ErRWuGv3dK00bHuUrKdw14G9IdscrjqOCHRZwB2jY09H5%2FOc0X8XW%2FHEIb%2FWFXgZGMyH4L1LuTBfpWM75SRimYhBPeXGMbPvUBosGn1gVHVi&X-Amz-Signature=914872c0cae3eb89abaf0a60fc065e860bd60b8d1091b1f8d2a887c01591bf87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XQBFVR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsG6%2F306%2FDezhlu5HQdmj%2FGMsv68%2FdiJfOUzP%2BUtaFrAiEAwQEY2fJ9eu%2F5ZR3l0wi92L2VZ8JNVQxZ4J1sZYD0%2FVIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPzyLDkFZ%2F1shK20yrcA8jnVnr%2FDotKNZH2wUvKP42FScmLd5QOW9ELQeV7stBCKTQKYBYDOJvqNtWnn32nlT08IYN3QKm%2Ff8WVabjijoU7kyOQqz1tYHpWQogUPsCSYIDe7O%2B5CXw3PATTdP25xmpbE%2FBX4pJQe7%2FaKDjghttUI1ZN8AJ%2BuG5f81W1STSsNd9peHvNR%2BsvIJASox%2BhOtfylrSfxQibNJACtPVN%2FeDIW3ZSrbw5hDrZkge0vsYSFUbNO0njItEMZoMonBP4VP%2F8xHu%2BZu5Xc4ohdX8nvwtnRsz5OJQtfDQyXX8ZY%2FgNvKkVpeb9OYSXSICGa1niy6iTEUm5TSY9o5Z1WUbRdhZBxgIOa9jwCqEBtHvx31r5%2FeTebUqhJqHfFXyKi1Ft%2BRrFY1no4q4gaBCjDuPmPXiNhT18c%2B1Vq3ws9NFxBAL17HoIbwP6AabOkKZAHkuwyMqSTWGbcLRXomifFfvjgdl2Uc8vb6q4Jm%2BwuVwStY2Vw1KE41qVOHFyWi%2BidLKgCaFJ%2BkE0MC0FwRbAmoRHK2OKg0wOBljmpJhjeHuPWWF13gu%2BUGel01gW6vvI2NTymzdrez6SKjtj%2FrR1FhDIH9diiZS4AHXvQYtwVyYH9F9U8HAM66pDVdlrScxnMPCY4sQGOqUB%2BlfwkIhqDVGP7goiBrbh0JHQHQ0SGCgN0GnUb%2FMB5c%2BBNE7rD%2FlXoXeY%2BNTQxMY5bsQodeDUYM1zzbtBXFx%2FsdUy33PdPZsOfqpGZVHjeUNOeiI1ErRWuGv3dK00bHuUrKdw14G9IdscrjqOCHRZwB2jY09H5%2FOc0X8XW%2FHEIb%2FWFXgZGMyH4L1LuTBfpWM75SRimYhBPeXGMbPvUBosGn1gVHVi&X-Amz-Signature=617e91e49c9277a427814be72efad38b080753e327438b9ad15b4e64c27f3932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XQBFVR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsG6%2F306%2FDezhlu5HQdmj%2FGMsv68%2FdiJfOUzP%2BUtaFrAiEAwQEY2fJ9eu%2F5ZR3l0wi92L2VZ8JNVQxZ4J1sZYD0%2FVIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPzyLDkFZ%2F1shK20yrcA8jnVnr%2FDotKNZH2wUvKP42FScmLd5QOW9ELQeV7stBCKTQKYBYDOJvqNtWnn32nlT08IYN3QKm%2Ff8WVabjijoU7kyOQqz1tYHpWQogUPsCSYIDe7O%2B5CXw3PATTdP25xmpbE%2FBX4pJQe7%2FaKDjghttUI1ZN8AJ%2BuG5f81W1STSsNd9peHvNR%2BsvIJASox%2BhOtfylrSfxQibNJACtPVN%2FeDIW3ZSrbw5hDrZkge0vsYSFUbNO0njItEMZoMonBP4VP%2F8xHu%2BZu5Xc4ohdX8nvwtnRsz5OJQtfDQyXX8ZY%2FgNvKkVpeb9OYSXSICGa1niy6iTEUm5TSY9o5Z1WUbRdhZBxgIOa9jwCqEBtHvx31r5%2FeTebUqhJqHfFXyKi1Ft%2BRrFY1no4q4gaBCjDuPmPXiNhT18c%2B1Vq3ws9NFxBAL17HoIbwP6AabOkKZAHkuwyMqSTWGbcLRXomifFfvjgdl2Uc8vb6q4Jm%2BwuVwStY2Vw1KE41qVOHFyWi%2BidLKgCaFJ%2BkE0MC0FwRbAmoRHK2OKg0wOBljmpJhjeHuPWWF13gu%2BUGel01gW6vvI2NTymzdrez6SKjtj%2FrR1FhDIH9diiZS4AHXvQYtwVyYH9F9U8HAM66pDVdlrScxnMPCY4sQGOqUB%2BlfwkIhqDVGP7goiBrbh0JHQHQ0SGCgN0GnUb%2FMB5c%2BBNE7rD%2FlXoXeY%2BNTQxMY5bsQodeDUYM1zzbtBXFx%2FsdUy33PdPZsOfqpGZVHjeUNOeiI1ErRWuGv3dK00bHuUrKdw14G9IdscrjqOCHRZwB2jY09H5%2FOc0X8XW%2FHEIb%2FWFXgZGMyH4L1LuTBfpWM75SRimYhBPeXGMbPvUBosGn1gVHVi&X-Amz-Signature=369365077e28073fd3346614928860772919856e509c2ddb428a02936d6962a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XQBFVR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsG6%2F306%2FDezhlu5HQdmj%2FGMsv68%2FdiJfOUzP%2BUtaFrAiEAwQEY2fJ9eu%2F5ZR3l0wi92L2VZ8JNVQxZ4J1sZYD0%2FVIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPzyLDkFZ%2F1shK20yrcA8jnVnr%2FDotKNZH2wUvKP42FScmLd5QOW9ELQeV7stBCKTQKYBYDOJvqNtWnn32nlT08IYN3QKm%2Ff8WVabjijoU7kyOQqz1tYHpWQogUPsCSYIDe7O%2B5CXw3PATTdP25xmpbE%2FBX4pJQe7%2FaKDjghttUI1ZN8AJ%2BuG5f81W1STSsNd9peHvNR%2BsvIJASox%2BhOtfylrSfxQibNJACtPVN%2FeDIW3ZSrbw5hDrZkge0vsYSFUbNO0njItEMZoMonBP4VP%2F8xHu%2BZu5Xc4ohdX8nvwtnRsz5OJQtfDQyXX8ZY%2FgNvKkVpeb9OYSXSICGa1niy6iTEUm5TSY9o5Z1WUbRdhZBxgIOa9jwCqEBtHvx31r5%2FeTebUqhJqHfFXyKi1Ft%2BRrFY1no4q4gaBCjDuPmPXiNhT18c%2B1Vq3ws9NFxBAL17HoIbwP6AabOkKZAHkuwyMqSTWGbcLRXomifFfvjgdl2Uc8vb6q4Jm%2BwuVwStY2Vw1KE41qVOHFyWi%2BidLKgCaFJ%2BkE0MC0FwRbAmoRHK2OKg0wOBljmpJhjeHuPWWF13gu%2BUGel01gW6vvI2NTymzdrez6SKjtj%2FrR1FhDIH9diiZS4AHXvQYtwVyYH9F9U8HAM66pDVdlrScxnMPCY4sQGOqUB%2BlfwkIhqDVGP7goiBrbh0JHQHQ0SGCgN0GnUb%2FMB5c%2BBNE7rD%2FlXoXeY%2BNTQxMY5bsQodeDUYM1zzbtBXFx%2FsdUy33PdPZsOfqpGZVHjeUNOeiI1ErRWuGv3dK00bHuUrKdw14G9IdscrjqOCHRZwB2jY09H5%2FOc0X8XW%2FHEIb%2FWFXgZGMyH4L1LuTBfpWM75SRimYhBPeXGMbPvUBosGn1gVHVi&X-Amz-Signature=1da454db7ea74013a70b4aca2bd47ae650150c96a9e0d60713903705bdb1a949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XQBFVR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsG6%2F306%2FDezhlu5HQdmj%2FGMsv68%2FdiJfOUzP%2BUtaFrAiEAwQEY2fJ9eu%2F5ZR3l0wi92L2VZ8JNVQxZ4J1sZYD0%2FVIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPzyLDkFZ%2F1shK20yrcA8jnVnr%2FDotKNZH2wUvKP42FScmLd5QOW9ELQeV7stBCKTQKYBYDOJvqNtWnn32nlT08IYN3QKm%2Ff8WVabjijoU7kyOQqz1tYHpWQogUPsCSYIDe7O%2B5CXw3PATTdP25xmpbE%2FBX4pJQe7%2FaKDjghttUI1ZN8AJ%2BuG5f81W1STSsNd9peHvNR%2BsvIJASox%2BhOtfylrSfxQibNJACtPVN%2FeDIW3ZSrbw5hDrZkge0vsYSFUbNO0njItEMZoMonBP4VP%2F8xHu%2BZu5Xc4ohdX8nvwtnRsz5OJQtfDQyXX8ZY%2FgNvKkVpeb9OYSXSICGa1niy6iTEUm5TSY9o5Z1WUbRdhZBxgIOa9jwCqEBtHvx31r5%2FeTebUqhJqHfFXyKi1Ft%2BRrFY1no4q4gaBCjDuPmPXiNhT18c%2B1Vq3ws9NFxBAL17HoIbwP6AabOkKZAHkuwyMqSTWGbcLRXomifFfvjgdl2Uc8vb6q4Jm%2BwuVwStY2Vw1KE41qVOHFyWi%2BidLKgCaFJ%2BkE0MC0FwRbAmoRHK2OKg0wOBljmpJhjeHuPWWF13gu%2BUGel01gW6vvI2NTymzdrez6SKjtj%2FrR1FhDIH9diiZS4AHXvQYtwVyYH9F9U8HAM66pDVdlrScxnMPCY4sQGOqUB%2BlfwkIhqDVGP7goiBrbh0JHQHQ0SGCgN0GnUb%2FMB5c%2BBNE7rD%2FlXoXeY%2BNTQxMY5bsQodeDUYM1zzbtBXFx%2FsdUy33PdPZsOfqpGZVHjeUNOeiI1ErRWuGv3dK00bHuUrKdw14G9IdscrjqOCHRZwB2jY09H5%2FOc0X8XW%2FHEIb%2FWFXgZGMyH4L1LuTBfpWM75SRimYhBPeXGMbPvUBosGn1gVHVi&X-Amz-Signature=dd1dc597939426594c8eebb9949578819756aab43d2e35268a01961e5bdce1c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XQBFVR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsG6%2F306%2FDezhlu5HQdmj%2FGMsv68%2FdiJfOUzP%2BUtaFrAiEAwQEY2fJ9eu%2F5ZR3l0wi92L2VZ8JNVQxZ4J1sZYD0%2FVIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPzyLDkFZ%2F1shK20yrcA8jnVnr%2FDotKNZH2wUvKP42FScmLd5QOW9ELQeV7stBCKTQKYBYDOJvqNtWnn32nlT08IYN3QKm%2Ff8WVabjijoU7kyOQqz1tYHpWQogUPsCSYIDe7O%2B5CXw3PATTdP25xmpbE%2FBX4pJQe7%2FaKDjghttUI1ZN8AJ%2BuG5f81W1STSsNd9peHvNR%2BsvIJASox%2BhOtfylrSfxQibNJACtPVN%2FeDIW3ZSrbw5hDrZkge0vsYSFUbNO0njItEMZoMonBP4VP%2F8xHu%2BZu5Xc4ohdX8nvwtnRsz5OJQtfDQyXX8ZY%2FgNvKkVpeb9OYSXSICGa1niy6iTEUm5TSY9o5Z1WUbRdhZBxgIOa9jwCqEBtHvx31r5%2FeTebUqhJqHfFXyKi1Ft%2BRrFY1no4q4gaBCjDuPmPXiNhT18c%2B1Vq3ws9NFxBAL17HoIbwP6AabOkKZAHkuwyMqSTWGbcLRXomifFfvjgdl2Uc8vb6q4Jm%2BwuVwStY2Vw1KE41qVOHFyWi%2BidLKgCaFJ%2BkE0MC0FwRbAmoRHK2OKg0wOBljmpJhjeHuPWWF13gu%2BUGel01gW6vvI2NTymzdrez6SKjtj%2FrR1FhDIH9diiZS4AHXvQYtwVyYH9F9U8HAM66pDVdlrScxnMPCY4sQGOqUB%2BlfwkIhqDVGP7goiBrbh0JHQHQ0SGCgN0GnUb%2FMB5c%2BBNE7rD%2FlXoXeY%2BNTQxMY5bsQodeDUYM1zzbtBXFx%2FsdUy33PdPZsOfqpGZVHjeUNOeiI1ErRWuGv3dK00bHuUrKdw14G9IdscrjqOCHRZwB2jY09H5%2FOc0X8XW%2FHEIb%2FWFXgZGMyH4L1LuTBfpWM75SRimYhBPeXGMbPvUBosGn1gVHVi&X-Amz-Signature=e680f6c72e0144ce140109c777809753f9f4182112f6da3631b6869b7977e0e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XQBFVR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsG6%2F306%2FDezhlu5HQdmj%2FGMsv68%2FdiJfOUzP%2BUtaFrAiEAwQEY2fJ9eu%2F5ZR3l0wi92L2VZ8JNVQxZ4J1sZYD0%2FVIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPzyLDkFZ%2F1shK20yrcA8jnVnr%2FDotKNZH2wUvKP42FScmLd5QOW9ELQeV7stBCKTQKYBYDOJvqNtWnn32nlT08IYN3QKm%2Ff8WVabjijoU7kyOQqz1tYHpWQogUPsCSYIDe7O%2B5CXw3PATTdP25xmpbE%2FBX4pJQe7%2FaKDjghttUI1ZN8AJ%2BuG5f81W1STSsNd9peHvNR%2BsvIJASox%2BhOtfylrSfxQibNJACtPVN%2FeDIW3ZSrbw5hDrZkge0vsYSFUbNO0njItEMZoMonBP4VP%2F8xHu%2BZu5Xc4ohdX8nvwtnRsz5OJQtfDQyXX8ZY%2FgNvKkVpeb9OYSXSICGa1niy6iTEUm5TSY9o5Z1WUbRdhZBxgIOa9jwCqEBtHvx31r5%2FeTebUqhJqHfFXyKi1Ft%2BRrFY1no4q4gaBCjDuPmPXiNhT18c%2B1Vq3ws9NFxBAL17HoIbwP6AabOkKZAHkuwyMqSTWGbcLRXomifFfvjgdl2Uc8vb6q4Jm%2BwuVwStY2Vw1KE41qVOHFyWi%2BidLKgCaFJ%2BkE0MC0FwRbAmoRHK2OKg0wOBljmpJhjeHuPWWF13gu%2BUGel01gW6vvI2NTymzdrez6SKjtj%2FrR1FhDIH9diiZS4AHXvQYtwVyYH9F9U8HAM66pDVdlrScxnMPCY4sQGOqUB%2BlfwkIhqDVGP7goiBrbh0JHQHQ0SGCgN0GnUb%2FMB5c%2BBNE7rD%2FlXoXeY%2BNTQxMY5bsQodeDUYM1zzbtBXFx%2FsdUy33PdPZsOfqpGZVHjeUNOeiI1ErRWuGv3dK00bHuUrKdw14G9IdscrjqOCHRZwB2jY09H5%2FOc0X8XW%2FHEIb%2FWFXgZGMyH4L1LuTBfpWM75SRimYhBPeXGMbPvUBosGn1gVHVi&X-Amz-Signature=c10215edb5a1d5d3fe9dff3da9b09b73ac53ef43bb3ea9f8873799ee93639cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XQBFVR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsG6%2F306%2FDezhlu5HQdmj%2FGMsv68%2FdiJfOUzP%2BUtaFrAiEAwQEY2fJ9eu%2F5ZR3l0wi92L2VZ8JNVQxZ4J1sZYD0%2FVIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPzyLDkFZ%2F1shK20yrcA8jnVnr%2FDotKNZH2wUvKP42FScmLd5QOW9ELQeV7stBCKTQKYBYDOJvqNtWnn32nlT08IYN3QKm%2Ff8WVabjijoU7kyOQqz1tYHpWQogUPsCSYIDe7O%2B5CXw3PATTdP25xmpbE%2FBX4pJQe7%2FaKDjghttUI1ZN8AJ%2BuG5f81W1STSsNd9peHvNR%2BsvIJASox%2BhOtfylrSfxQibNJACtPVN%2FeDIW3ZSrbw5hDrZkge0vsYSFUbNO0njItEMZoMonBP4VP%2F8xHu%2BZu5Xc4ohdX8nvwtnRsz5OJQtfDQyXX8ZY%2FgNvKkVpeb9OYSXSICGa1niy6iTEUm5TSY9o5Z1WUbRdhZBxgIOa9jwCqEBtHvx31r5%2FeTebUqhJqHfFXyKi1Ft%2BRrFY1no4q4gaBCjDuPmPXiNhT18c%2B1Vq3ws9NFxBAL17HoIbwP6AabOkKZAHkuwyMqSTWGbcLRXomifFfvjgdl2Uc8vb6q4Jm%2BwuVwStY2Vw1KE41qVOHFyWi%2BidLKgCaFJ%2BkE0MC0FwRbAmoRHK2OKg0wOBljmpJhjeHuPWWF13gu%2BUGel01gW6vvI2NTymzdrez6SKjtj%2FrR1FhDIH9diiZS4AHXvQYtwVyYH9F9U8HAM66pDVdlrScxnMPCY4sQGOqUB%2BlfwkIhqDVGP7goiBrbh0JHQHQ0SGCgN0GnUb%2FMB5c%2BBNE7rD%2FlXoXeY%2BNTQxMY5bsQodeDUYM1zzbtBXFx%2FsdUy33PdPZsOfqpGZVHjeUNOeiI1ErRWuGv3dK00bHuUrKdw14G9IdscrjqOCHRZwB2jY09H5%2FOc0X8XW%2FHEIb%2FWFXgZGMyH4L1LuTBfpWM75SRimYhBPeXGMbPvUBosGn1gVHVi&X-Amz-Signature=ab2617be45beaefc306b0b1cc8bd1eb3e497b7d5ab0a4a372a22ef1c5ba59959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XQBFVR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsG6%2F306%2FDezhlu5HQdmj%2FGMsv68%2FdiJfOUzP%2BUtaFrAiEAwQEY2fJ9eu%2F5ZR3l0wi92L2VZ8JNVQxZ4J1sZYD0%2FVIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPzyLDkFZ%2F1shK20yrcA8jnVnr%2FDotKNZH2wUvKP42FScmLd5QOW9ELQeV7stBCKTQKYBYDOJvqNtWnn32nlT08IYN3QKm%2Ff8WVabjijoU7kyOQqz1tYHpWQogUPsCSYIDe7O%2B5CXw3PATTdP25xmpbE%2FBX4pJQe7%2FaKDjghttUI1ZN8AJ%2BuG5f81W1STSsNd9peHvNR%2BsvIJASox%2BhOtfylrSfxQibNJACtPVN%2FeDIW3ZSrbw5hDrZkge0vsYSFUbNO0njItEMZoMonBP4VP%2F8xHu%2BZu5Xc4ohdX8nvwtnRsz5OJQtfDQyXX8ZY%2FgNvKkVpeb9OYSXSICGa1niy6iTEUm5TSY9o5Z1WUbRdhZBxgIOa9jwCqEBtHvx31r5%2FeTebUqhJqHfFXyKi1Ft%2BRrFY1no4q4gaBCjDuPmPXiNhT18c%2B1Vq3ws9NFxBAL17HoIbwP6AabOkKZAHkuwyMqSTWGbcLRXomifFfvjgdl2Uc8vb6q4Jm%2BwuVwStY2Vw1KE41qVOHFyWi%2BidLKgCaFJ%2BkE0MC0FwRbAmoRHK2OKg0wOBljmpJhjeHuPWWF13gu%2BUGel01gW6vvI2NTymzdrez6SKjtj%2FrR1FhDIH9diiZS4AHXvQYtwVyYH9F9U8HAM66pDVdlrScxnMPCY4sQGOqUB%2BlfwkIhqDVGP7goiBrbh0JHQHQ0SGCgN0GnUb%2FMB5c%2BBNE7rD%2FlXoXeY%2BNTQxMY5bsQodeDUYM1zzbtBXFx%2FsdUy33PdPZsOfqpGZVHjeUNOeiI1ErRWuGv3dK00bHuUrKdw14G9IdscrjqOCHRZwB2jY09H5%2FOc0X8XW%2FHEIb%2FWFXgZGMyH4L1LuTBfpWM75SRimYhBPeXGMbPvUBosGn1gVHVi&X-Amz-Signature=c4fa3f41f6799ac5d39f469008923388c559886a76bb53a79660acb78d09315d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
