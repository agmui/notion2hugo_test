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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XA75ZNX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZiLxcs2ejHz79rs1b0mapcZEioOmCqFMG0MJC2XB%2FKgIgS6lrttkjpEcm4VSCwv9DG5jvS0SHmB%2F0%2F5KzTTayFsUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9QTX00xBDWiM%2BCYSrcA%2FtcateCPu8SBZZcPyT4QroHnvGfKslp%2BiBSWIEMzhJpRDrBTbq5WiHV6f9QfQN%2FaYZ0eVDDz7z998FxJA1K4ihdPvKYiDXEubXEerlw6kCBXTq%2B7pBRCUty941tVd27tA%2B0UbcoGc4bktA7zCduuYXtW0me3nmFU698ulgHhBiX0ph6rT4zvWe6W%2BA4biJGnRBwkEaTE2c%2FxI%2Fsjus2z%2BErnFhme6mNEqExBj3%2F9kxVvIGC6EhChcM3QLAC5KeIX5dfVjcIjoTrfxRw%2Fx%2BjShOyz%2F2YkaAmD80XNEqaMA5X4ehbr92HU4L9AN8XOWsECNwRKzCU%2F2uOGikPG6TgdG2aexg3wYmfJt4SI5SEjMyGugUXEKXUzVYZRWdrordfLYLW0YS6X7M6gD5Ef8tsIL6G4gOwrqywZ1jtB%2BlCD0fFSAhyDvhxSJnTzeNHyYXk0h3lAL1%2BQho6OzHqeAfTTdCpjiKc5qukJxPT%2BIIx7KIY0ZT4q69SFCWGVYT%2BtzC3%2FC07YgKhS5mqF3hJPaY6c%2B2BnaJvhkAc7LRSC9eaMraeIxtBGSAg%2BB9H0iWVzVZdglorEZ4d%2BXTTbXizJiAcJSNXcXt02lx%2BqqAlIMMa3w9LTdNBXw3zJMoaQ3B7MNmMp8QGOqUBWixQkYS8toRaIQ0VzIpJ%2FcRL1EtOBuX%2Fw4mfl70r50iJStwK%2BI7gszPHbEkTPAGjFf4Tvq6cF5xiaNxPZ5K%2FQxJTaHRFi8VeDmXC3MOD3sdTiT5HUWD9SPedsgQ%2FTsOgfDRAl0r15UouSROC4hZ7BQDnwNPfZLxQYN5b2klqFGPdH2cUz7kbeG8uWYlhK6iL7qgp0Sylkf%2FACKksgDU3i4%2BVlyfF&X-Amz-Signature=205d0900fe9ca040f3e7ddb17d797c8d96b7373eb61bc55643172cf2f6b23bd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XA75ZNX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZiLxcs2ejHz79rs1b0mapcZEioOmCqFMG0MJC2XB%2FKgIgS6lrttkjpEcm4VSCwv9DG5jvS0SHmB%2F0%2F5KzTTayFsUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9QTX00xBDWiM%2BCYSrcA%2FtcateCPu8SBZZcPyT4QroHnvGfKslp%2BiBSWIEMzhJpRDrBTbq5WiHV6f9QfQN%2FaYZ0eVDDz7z998FxJA1K4ihdPvKYiDXEubXEerlw6kCBXTq%2B7pBRCUty941tVd27tA%2B0UbcoGc4bktA7zCduuYXtW0me3nmFU698ulgHhBiX0ph6rT4zvWe6W%2BA4biJGnRBwkEaTE2c%2FxI%2Fsjus2z%2BErnFhme6mNEqExBj3%2F9kxVvIGC6EhChcM3QLAC5KeIX5dfVjcIjoTrfxRw%2Fx%2BjShOyz%2F2YkaAmD80XNEqaMA5X4ehbr92HU4L9AN8XOWsECNwRKzCU%2F2uOGikPG6TgdG2aexg3wYmfJt4SI5SEjMyGugUXEKXUzVYZRWdrordfLYLW0YS6X7M6gD5Ef8tsIL6G4gOwrqywZ1jtB%2BlCD0fFSAhyDvhxSJnTzeNHyYXk0h3lAL1%2BQho6OzHqeAfTTdCpjiKc5qukJxPT%2BIIx7KIY0ZT4q69SFCWGVYT%2BtzC3%2FC07YgKhS5mqF3hJPaY6c%2B2BnaJvhkAc7LRSC9eaMraeIxtBGSAg%2BB9H0iWVzVZdglorEZ4d%2BXTTbXizJiAcJSNXcXt02lx%2BqqAlIMMa3w9LTdNBXw3zJMoaQ3B7MNmMp8QGOqUBWixQkYS8toRaIQ0VzIpJ%2FcRL1EtOBuX%2Fw4mfl70r50iJStwK%2BI7gszPHbEkTPAGjFf4Tvq6cF5xiaNxPZ5K%2FQxJTaHRFi8VeDmXC3MOD3sdTiT5HUWD9SPedsgQ%2FTsOgfDRAl0r15UouSROC4hZ7BQDnwNPfZLxQYN5b2klqFGPdH2cUz7kbeG8uWYlhK6iL7qgp0Sylkf%2FACKksgDU3i4%2BVlyfF&X-Amz-Signature=da7d943728228b9dbd3d5497cbda465ae83174a0515cc3e0e1ad3df11f2e0b2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XA75ZNX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZiLxcs2ejHz79rs1b0mapcZEioOmCqFMG0MJC2XB%2FKgIgS6lrttkjpEcm4VSCwv9DG5jvS0SHmB%2F0%2F5KzTTayFsUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9QTX00xBDWiM%2BCYSrcA%2FtcateCPu8SBZZcPyT4QroHnvGfKslp%2BiBSWIEMzhJpRDrBTbq5WiHV6f9QfQN%2FaYZ0eVDDz7z998FxJA1K4ihdPvKYiDXEubXEerlw6kCBXTq%2B7pBRCUty941tVd27tA%2B0UbcoGc4bktA7zCduuYXtW0me3nmFU698ulgHhBiX0ph6rT4zvWe6W%2BA4biJGnRBwkEaTE2c%2FxI%2Fsjus2z%2BErnFhme6mNEqExBj3%2F9kxVvIGC6EhChcM3QLAC5KeIX5dfVjcIjoTrfxRw%2Fx%2BjShOyz%2F2YkaAmD80XNEqaMA5X4ehbr92HU4L9AN8XOWsECNwRKzCU%2F2uOGikPG6TgdG2aexg3wYmfJt4SI5SEjMyGugUXEKXUzVYZRWdrordfLYLW0YS6X7M6gD5Ef8tsIL6G4gOwrqywZ1jtB%2BlCD0fFSAhyDvhxSJnTzeNHyYXk0h3lAL1%2BQho6OzHqeAfTTdCpjiKc5qukJxPT%2BIIx7KIY0ZT4q69SFCWGVYT%2BtzC3%2FC07YgKhS5mqF3hJPaY6c%2B2BnaJvhkAc7LRSC9eaMraeIxtBGSAg%2BB9H0iWVzVZdglorEZ4d%2BXTTbXizJiAcJSNXcXt02lx%2BqqAlIMMa3w9LTdNBXw3zJMoaQ3B7MNmMp8QGOqUBWixQkYS8toRaIQ0VzIpJ%2FcRL1EtOBuX%2Fw4mfl70r50iJStwK%2BI7gszPHbEkTPAGjFf4Tvq6cF5xiaNxPZ5K%2FQxJTaHRFi8VeDmXC3MOD3sdTiT5HUWD9SPedsgQ%2FTsOgfDRAl0r15UouSROC4hZ7BQDnwNPfZLxQYN5b2klqFGPdH2cUz7kbeG8uWYlhK6iL7qgp0Sylkf%2FACKksgDU3i4%2BVlyfF&X-Amz-Signature=0289af6ff5671e5ba38e813de9772a77857a8e0c110294e50b97820a5a207983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XA75ZNX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZiLxcs2ejHz79rs1b0mapcZEioOmCqFMG0MJC2XB%2FKgIgS6lrttkjpEcm4VSCwv9DG5jvS0SHmB%2F0%2F5KzTTayFsUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9QTX00xBDWiM%2BCYSrcA%2FtcateCPu8SBZZcPyT4QroHnvGfKslp%2BiBSWIEMzhJpRDrBTbq5WiHV6f9QfQN%2FaYZ0eVDDz7z998FxJA1K4ihdPvKYiDXEubXEerlw6kCBXTq%2B7pBRCUty941tVd27tA%2B0UbcoGc4bktA7zCduuYXtW0me3nmFU698ulgHhBiX0ph6rT4zvWe6W%2BA4biJGnRBwkEaTE2c%2FxI%2Fsjus2z%2BErnFhme6mNEqExBj3%2F9kxVvIGC6EhChcM3QLAC5KeIX5dfVjcIjoTrfxRw%2Fx%2BjShOyz%2F2YkaAmD80XNEqaMA5X4ehbr92HU4L9AN8XOWsECNwRKzCU%2F2uOGikPG6TgdG2aexg3wYmfJt4SI5SEjMyGugUXEKXUzVYZRWdrordfLYLW0YS6X7M6gD5Ef8tsIL6G4gOwrqywZ1jtB%2BlCD0fFSAhyDvhxSJnTzeNHyYXk0h3lAL1%2BQho6OzHqeAfTTdCpjiKc5qukJxPT%2BIIx7KIY0ZT4q69SFCWGVYT%2BtzC3%2FC07YgKhS5mqF3hJPaY6c%2B2BnaJvhkAc7LRSC9eaMraeIxtBGSAg%2BB9H0iWVzVZdglorEZ4d%2BXTTbXizJiAcJSNXcXt02lx%2BqqAlIMMa3w9LTdNBXw3zJMoaQ3B7MNmMp8QGOqUBWixQkYS8toRaIQ0VzIpJ%2FcRL1EtOBuX%2Fw4mfl70r50iJStwK%2BI7gszPHbEkTPAGjFf4Tvq6cF5xiaNxPZ5K%2FQxJTaHRFi8VeDmXC3MOD3sdTiT5HUWD9SPedsgQ%2FTsOgfDRAl0r15UouSROC4hZ7BQDnwNPfZLxQYN5b2klqFGPdH2cUz7kbeG8uWYlhK6iL7qgp0Sylkf%2FACKksgDU3i4%2BVlyfF&X-Amz-Signature=f160e31ebb9523f6abde4eb1c4ef1e5181654b6af3527112525783ce178302c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XA75ZNX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZiLxcs2ejHz79rs1b0mapcZEioOmCqFMG0MJC2XB%2FKgIgS6lrttkjpEcm4VSCwv9DG5jvS0SHmB%2F0%2F5KzTTayFsUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9QTX00xBDWiM%2BCYSrcA%2FtcateCPu8SBZZcPyT4QroHnvGfKslp%2BiBSWIEMzhJpRDrBTbq5WiHV6f9QfQN%2FaYZ0eVDDz7z998FxJA1K4ihdPvKYiDXEubXEerlw6kCBXTq%2B7pBRCUty941tVd27tA%2B0UbcoGc4bktA7zCduuYXtW0me3nmFU698ulgHhBiX0ph6rT4zvWe6W%2BA4biJGnRBwkEaTE2c%2FxI%2Fsjus2z%2BErnFhme6mNEqExBj3%2F9kxVvIGC6EhChcM3QLAC5KeIX5dfVjcIjoTrfxRw%2Fx%2BjShOyz%2F2YkaAmD80XNEqaMA5X4ehbr92HU4L9AN8XOWsECNwRKzCU%2F2uOGikPG6TgdG2aexg3wYmfJt4SI5SEjMyGugUXEKXUzVYZRWdrordfLYLW0YS6X7M6gD5Ef8tsIL6G4gOwrqywZ1jtB%2BlCD0fFSAhyDvhxSJnTzeNHyYXk0h3lAL1%2BQho6OzHqeAfTTdCpjiKc5qukJxPT%2BIIx7KIY0ZT4q69SFCWGVYT%2BtzC3%2FC07YgKhS5mqF3hJPaY6c%2B2BnaJvhkAc7LRSC9eaMraeIxtBGSAg%2BB9H0iWVzVZdglorEZ4d%2BXTTbXizJiAcJSNXcXt02lx%2BqqAlIMMa3w9LTdNBXw3zJMoaQ3B7MNmMp8QGOqUBWixQkYS8toRaIQ0VzIpJ%2FcRL1EtOBuX%2Fw4mfl70r50iJStwK%2BI7gszPHbEkTPAGjFf4Tvq6cF5xiaNxPZ5K%2FQxJTaHRFi8VeDmXC3MOD3sdTiT5HUWD9SPedsgQ%2FTsOgfDRAl0r15UouSROC4hZ7BQDnwNPfZLxQYN5b2klqFGPdH2cUz7kbeG8uWYlhK6iL7qgp0Sylkf%2FACKksgDU3i4%2BVlyfF&X-Amz-Signature=2db006313da2ac18e016154aa50f7473c6ed851ee942e5113acd0b30cb5ed9d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XA75ZNX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZiLxcs2ejHz79rs1b0mapcZEioOmCqFMG0MJC2XB%2FKgIgS6lrttkjpEcm4VSCwv9DG5jvS0SHmB%2F0%2F5KzTTayFsUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9QTX00xBDWiM%2BCYSrcA%2FtcateCPu8SBZZcPyT4QroHnvGfKslp%2BiBSWIEMzhJpRDrBTbq5WiHV6f9QfQN%2FaYZ0eVDDz7z998FxJA1K4ihdPvKYiDXEubXEerlw6kCBXTq%2B7pBRCUty941tVd27tA%2B0UbcoGc4bktA7zCduuYXtW0me3nmFU698ulgHhBiX0ph6rT4zvWe6W%2BA4biJGnRBwkEaTE2c%2FxI%2Fsjus2z%2BErnFhme6mNEqExBj3%2F9kxVvIGC6EhChcM3QLAC5KeIX5dfVjcIjoTrfxRw%2Fx%2BjShOyz%2F2YkaAmD80XNEqaMA5X4ehbr92HU4L9AN8XOWsECNwRKzCU%2F2uOGikPG6TgdG2aexg3wYmfJt4SI5SEjMyGugUXEKXUzVYZRWdrordfLYLW0YS6X7M6gD5Ef8tsIL6G4gOwrqywZ1jtB%2BlCD0fFSAhyDvhxSJnTzeNHyYXk0h3lAL1%2BQho6OzHqeAfTTdCpjiKc5qukJxPT%2BIIx7KIY0ZT4q69SFCWGVYT%2BtzC3%2FC07YgKhS5mqF3hJPaY6c%2B2BnaJvhkAc7LRSC9eaMraeIxtBGSAg%2BB9H0iWVzVZdglorEZ4d%2BXTTbXizJiAcJSNXcXt02lx%2BqqAlIMMa3w9LTdNBXw3zJMoaQ3B7MNmMp8QGOqUBWixQkYS8toRaIQ0VzIpJ%2FcRL1EtOBuX%2Fw4mfl70r50iJStwK%2BI7gszPHbEkTPAGjFf4Tvq6cF5xiaNxPZ5K%2FQxJTaHRFi8VeDmXC3MOD3sdTiT5HUWD9SPedsgQ%2FTsOgfDRAl0r15UouSROC4hZ7BQDnwNPfZLxQYN5b2klqFGPdH2cUz7kbeG8uWYlhK6iL7qgp0Sylkf%2FACKksgDU3i4%2BVlyfF&X-Amz-Signature=8b0ce502d89e9a7fb700512311604deda65f0645cdae36fe9c1957ae45ed4ff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XA75ZNX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZiLxcs2ejHz79rs1b0mapcZEioOmCqFMG0MJC2XB%2FKgIgS6lrttkjpEcm4VSCwv9DG5jvS0SHmB%2F0%2F5KzTTayFsUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9QTX00xBDWiM%2BCYSrcA%2FtcateCPu8SBZZcPyT4QroHnvGfKslp%2BiBSWIEMzhJpRDrBTbq5WiHV6f9QfQN%2FaYZ0eVDDz7z998FxJA1K4ihdPvKYiDXEubXEerlw6kCBXTq%2B7pBRCUty941tVd27tA%2B0UbcoGc4bktA7zCduuYXtW0me3nmFU698ulgHhBiX0ph6rT4zvWe6W%2BA4biJGnRBwkEaTE2c%2FxI%2Fsjus2z%2BErnFhme6mNEqExBj3%2F9kxVvIGC6EhChcM3QLAC5KeIX5dfVjcIjoTrfxRw%2Fx%2BjShOyz%2F2YkaAmD80XNEqaMA5X4ehbr92HU4L9AN8XOWsECNwRKzCU%2F2uOGikPG6TgdG2aexg3wYmfJt4SI5SEjMyGugUXEKXUzVYZRWdrordfLYLW0YS6X7M6gD5Ef8tsIL6G4gOwrqywZ1jtB%2BlCD0fFSAhyDvhxSJnTzeNHyYXk0h3lAL1%2BQho6OzHqeAfTTdCpjiKc5qukJxPT%2BIIx7KIY0ZT4q69SFCWGVYT%2BtzC3%2FC07YgKhS5mqF3hJPaY6c%2B2BnaJvhkAc7LRSC9eaMraeIxtBGSAg%2BB9H0iWVzVZdglorEZ4d%2BXTTbXizJiAcJSNXcXt02lx%2BqqAlIMMa3w9LTdNBXw3zJMoaQ3B7MNmMp8QGOqUBWixQkYS8toRaIQ0VzIpJ%2FcRL1EtOBuX%2Fw4mfl70r50iJStwK%2BI7gszPHbEkTPAGjFf4Tvq6cF5xiaNxPZ5K%2FQxJTaHRFi8VeDmXC3MOD3sdTiT5HUWD9SPedsgQ%2FTsOgfDRAl0r15UouSROC4hZ7BQDnwNPfZLxQYN5b2klqFGPdH2cUz7kbeG8uWYlhK6iL7qgp0Sylkf%2FACKksgDU3i4%2BVlyfF&X-Amz-Signature=81f83a0bd0dd2e37871055c311186e8cd6094c24104e88cd0b4164e99bc19b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XA75ZNX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZiLxcs2ejHz79rs1b0mapcZEioOmCqFMG0MJC2XB%2FKgIgS6lrttkjpEcm4VSCwv9DG5jvS0SHmB%2F0%2F5KzTTayFsUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9QTX00xBDWiM%2BCYSrcA%2FtcateCPu8SBZZcPyT4QroHnvGfKslp%2BiBSWIEMzhJpRDrBTbq5WiHV6f9QfQN%2FaYZ0eVDDz7z998FxJA1K4ihdPvKYiDXEubXEerlw6kCBXTq%2B7pBRCUty941tVd27tA%2B0UbcoGc4bktA7zCduuYXtW0me3nmFU698ulgHhBiX0ph6rT4zvWe6W%2BA4biJGnRBwkEaTE2c%2FxI%2Fsjus2z%2BErnFhme6mNEqExBj3%2F9kxVvIGC6EhChcM3QLAC5KeIX5dfVjcIjoTrfxRw%2Fx%2BjShOyz%2F2YkaAmD80XNEqaMA5X4ehbr92HU4L9AN8XOWsECNwRKzCU%2F2uOGikPG6TgdG2aexg3wYmfJt4SI5SEjMyGugUXEKXUzVYZRWdrordfLYLW0YS6X7M6gD5Ef8tsIL6G4gOwrqywZ1jtB%2BlCD0fFSAhyDvhxSJnTzeNHyYXk0h3lAL1%2BQho6OzHqeAfTTdCpjiKc5qukJxPT%2BIIx7KIY0ZT4q69SFCWGVYT%2BtzC3%2FC07YgKhS5mqF3hJPaY6c%2B2BnaJvhkAc7LRSC9eaMraeIxtBGSAg%2BB9H0iWVzVZdglorEZ4d%2BXTTbXizJiAcJSNXcXt02lx%2BqqAlIMMa3w9LTdNBXw3zJMoaQ3B7MNmMp8QGOqUBWixQkYS8toRaIQ0VzIpJ%2FcRL1EtOBuX%2Fw4mfl70r50iJStwK%2BI7gszPHbEkTPAGjFf4Tvq6cF5xiaNxPZ5K%2FQxJTaHRFi8VeDmXC3MOD3sdTiT5HUWD9SPedsgQ%2FTsOgfDRAl0r15UouSROC4hZ7BQDnwNPfZLxQYN5b2klqFGPdH2cUz7kbeG8uWYlhK6iL7qgp0Sylkf%2FACKksgDU3i4%2BVlyfF&X-Amz-Signature=f28186044b0bd9fa40ec0d06f4cff9da16b70cd71628af379c75e538e8556a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XA75ZNX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZiLxcs2ejHz79rs1b0mapcZEioOmCqFMG0MJC2XB%2FKgIgS6lrttkjpEcm4VSCwv9DG5jvS0SHmB%2F0%2F5KzTTayFsUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9QTX00xBDWiM%2BCYSrcA%2FtcateCPu8SBZZcPyT4QroHnvGfKslp%2BiBSWIEMzhJpRDrBTbq5WiHV6f9QfQN%2FaYZ0eVDDz7z998FxJA1K4ihdPvKYiDXEubXEerlw6kCBXTq%2B7pBRCUty941tVd27tA%2B0UbcoGc4bktA7zCduuYXtW0me3nmFU698ulgHhBiX0ph6rT4zvWe6W%2BA4biJGnRBwkEaTE2c%2FxI%2Fsjus2z%2BErnFhme6mNEqExBj3%2F9kxVvIGC6EhChcM3QLAC5KeIX5dfVjcIjoTrfxRw%2Fx%2BjShOyz%2F2YkaAmD80XNEqaMA5X4ehbr92HU4L9AN8XOWsECNwRKzCU%2F2uOGikPG6TgdG2aexg3wYmfJt4SI5SEjMyGugUXEKXUzVYZRWdrordfLYLW0YS6X7M6gD5Ef8tsIL6G4gOwrqywZ1jtB%2BlCD0fFSAhyDvhxSJnTzeNHyYXk0h3lAL1%2BQho6OzHqeAfTTdCpjiKc5qukJxPT%2BIIx7KIY0ZT4q69SFCWGVYT%2BtzC3%2FC07YgKhS5mqF3hJPaY6c%2B2BnaJvhkAc7LRSC9eaMraeIxtBGSAg%2BB9H0iWVzVZdglorEZ4d%2BXTTbXizJiAcJSNXcXt02lx%2BqqAlIMMa3w9LTdNBXw3zJMoaQ3B7MNmMp8QGOqUBWixQkYS8toRaIQ0VzIpJ%2FcRL1EtOBuX%2Fw4mfl70r50iJStwK%2BI7gszPHbEkTPAGjFf4Tvq6cF5xiaNxPZ5K%2FQxJTaHRFi8VeDmXC3MOD3sdTiT5HUWD9SPedsgQ%2FTsOgfDRAl0r15UouSROC4hZ7BQDnwNPfZLxQYN5b2klqFGPdH2cUz7kbeG8uWYlhK6iL7qgp0Sylkf%2FACKksgDU3i4%2BVlyfF&X-Amz-Signature=5f6c2b9df9c99e22ab73854b8533735076cbbae4841b5612319d05190c83cadc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XA75ZNX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZiLxcs2ejHz79rs1b0mapcZEioOmCqFMG0MJC2XB%2FKgIgS6lrttkjpEcm4VSCwv9DG5jvS0SHmB%2F0%2F5KzTTayFsUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9QTX00xBDWiM%2BCYSrcA%2FtcateCPu8SBZZcPyT4QroHnvGfKslp%2BiBSWIEMzhJpRDrBTbq5WiHV6f9QfQN%2FaYZ0eVDDz7z998FxJA1K4ihdPvKYiDXEubXEerlw6kCBXTq%2B7pBRCUty941tVd27tA%2B0UbcoGc4bktA7zCduuYXtW0me3nmFU698ulgHhBiX0ph6rT4zvWe6W%2BA4biJGnRBwkEaTE2c%2FxI%2Fsjus2z%2BErnFhme6mNEqExBj3%2F9kxVvIGC6EhChcM3QLAC5KeIX5dfVjcIjoTrfxRw%2Fx%2BjShOyz%2F2YkaAmD80XNEqaMA5X4ehbr92HU4L9AN8XOWsECNwRKzCU%2F2uOGikPG6TgdG2aexg3wYmfJt4SI5SEjMyGugUXEKXUzVYZRWdrordfLYLW0YS6X7M6gD5Ef8tsIL6G4gOwrqywZ1jtB%2BlCD0fFSAhyDvhxSJnTzeNHyYXk0h3lAL1%2BQho6OzHqeAfTTdCpjiKc5qukJxPT%2BIIx7KIY0ZT4q69SFCWGVYT%2BtzC3%2FC07YgKhS5mqF3hJPaY6c%2B2BnaJvhkAc7LRSC9eaMraeIxtBGSAg%2BB9H0iWVzVZdglorEZ4d%2BXTTbXizJiAcJSNXcXt02lx%2BqqAlIMMa3w9LTdNBXw3zJMoaQ3B7MNmMp8QGOqUBWixQkYS8toRaIQ0VzIpJ%2FcRL1EtOBuX%2Fw4mfl70r50iJStwK%2BI7gszPHbEkTPAGjFf4Tvq6cF5xiaNxPZ5K%2FQxJTaHRFi8VeDmXC3MOD3sdTiT5HUWD9SPedsgQ%2FTsOgfDRAl0r15UouSROC4hZ7BQDnwNPfZLxQYN5b2klqFGPdH2cUz7kbeG8uWYlhK6iL7qgp0Sylkf%2FACKksgDU3i4%2BVlyfF&X-Amz-Signature=b28d50c9db2b27bc0746492537814db1f89ce154e3a1acb16a11e3f8658954a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
