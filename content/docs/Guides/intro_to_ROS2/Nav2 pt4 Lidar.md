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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643KF2ZMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc0jObRFvt6EpsF8JYjn6dfuxp2zPqB6WB9WPuyI6GGAiEA3lcgWWp1IoFLrcKByjzlrQH%2FVhBLPakRAQVwgYFOEc8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhWrVxL9R6AnLZTUyrcA60QgT0VCKjFjpNb2E6K5ti4J2mkjfCRjRddmt3J2r8YEjsP7dZQQnC8DzmkCaIXOL0w4DYoUFZutUHyBfckYdWiC%2FrpkHBFMLk5i9ZQH0xYZrtH24bQVqeu9%2FXp3LzzTIAd%2BvGSn1HeFSioOT59Vd5cuUVPJPlpucG0QyFZZHijt4EtWWqLXDs1UfmOuyKLtk0uhARlR%2FIxxRB%2B0xV5rixqvnKzzO2oVXHnbs52pP7sWoDyoVDkWC3a27zbErwuWNNWPlMFbAapDR8i1GTzJZkwMNso%2Bhc%2B%2FPsj3G2tFJm8%2BZqvWrOT5ta41gN9mqkzqTozIcpUM4pIH%2BNajDWk8kuMOCbEiurIQtbOBqL%2BC20ZUMAWRa5hUPkHRXBfTwAT%2FBxPOgqxfaQXwzV0qThBI%2BBRrdBSMz28qD9EiFmq7Rt63V7F%2FqahOg%2Bpp7gNbjluIQDYLcPhueQR%2F6XvKOnOdaIJMY9ektZWOwzzRrqGwoAj6nnXZI7osPmbrNhL5HcA%2FxTRhadkLut2UajTIkVlUy0pQ6rv0FYZH4fN9YDNlozLgIfDoWVJy4lqtVKnVJ1clw8yht2dEi8s3nbFEZRUDWjT3M5BVv6QuyUPNwAYitnHnLxO2obP8Z6%2BslUrMMOarMQGOqUBiK7IrXO9D83q7eNRcunctHXu7qIwohbcMQTgXHO0T%2BKaHDUjc%2B4858LaWRye1aswPr%2BNthaEQ6%2BsIXrNdJE8UPM%2BCj7VDUhplRZd1NUaG1kV7Pk8wxxtvum%2Fslv%2FtSBQnS1CGy0cuiufZSVmDwDoCn8Jgl9ZYt4v9Q1qhJ5sCdr2kuSdCbGEiShIo6sMM2eEfIZlVUdjpMPaJArORRPlF7x%2ByKDn&X-Amz-Signature=9ecefc8ef91d68fc8f98bc4917cf8945658b36084dd5f55e3188e3c941a2ef4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643KF2ZMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc0jObRFvt6EpsF8JYjn6dfuxp2zPqB6WB9WPuyI6GGAiEA3lcgWWp1IoFLrcKByjzlrQH%2FVhBLPakRAQVwgYFOEc8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhWrVxL9R6AnLZTUyrcA60QgT0VCKjFjpNb2E6K5ti4J2mkjfCRjRddmt3J2r8YEjsP7dZQQnC8DzmkCaIXOL0w4DYoUFZutUHyBfckYdWiC%2FrpkHBFMLk5i9ZQH0xYZrtH24bQVqeu9%2FXp3LzzTIAd%2BvGSn1HeFSioOT59Vd5cuUVPJPlpucG0QyFZZHijt4EtWWqLXDs1UfmOuyKLtk0uhARlR%2FIxxRB%2B0xV5rixqvnKzzO2oVXHnbs52pP7sWoDyoVDkWC3a27zbErwuWNNWPlMFbAapDR8i1GTzJZkwMNso%2Bhc%2B%2FPsj3G2tFJm8%2BZqvWrOT5ta41gN9mqkzqTozIcpUM4pIH%2BNajDWk8kuMOCbEiurIQtbOBqL%2BC20ZUMAWRa5hUPkHRXBfTwAT%2FBxPOgqxfaQXwzV0qThBI%2BBRrdBSMz28qD9EiFmq7Rt63V7F%2FqahOg%2Bpp7gNbjluIQDYLcPhueQR%2F6XvKOnOdaIJMY9ektZWOwzzRrqGwoAj6nnXZI7osPmbrNhL5HcA%2FxTRhadkLut2UajTIkVlUy0pQ6rv0FYZH4fN9YDNlozLgIfDoWVJy4lqtVKnVJ1clw8yht2dEi8s3nbFEZRUDWjT3M5BVv6QuyUPNwAYitnHnLxO2obP8Z6%2BslUrMMOarMQGOqUBiK7IrXO9D83q7eNRcunctHXu7qIwohbcMQTgXHO0T%2BKaHDUjc%2B4858LaWRye1aswPr%2BNthaEQ6%2BsIXrNdJE8UPM%2BCj7VDUhplRZd1NUaG1kV7Pk8wxxtvum%2Fslv%2FtSBQnS1CGy0cuiufZSVmDwDoCn8Jgl9ZYt4v9Q1qhJ5sCdr2kuSdCbGEiShIo6sMM2eEfIZlVUdjpMPaJArORRPlF7x%2ByKDn&X-Amz-Signature=9cb045d93d52af76900fde2bd65e6796cfd3b1837170c52092f9c3522670a693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643KF2ZMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc0jObRFvt6EpsF8JYjn6dfuxp2zPqB6WB9WPuyI6GGAiEA3lcgWWp1IoFLrcKByjzlrQH%2FVhBLPakRAQVwgYFOEc8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhWrVxL9R6AnLZTUyrcA60QgT0VCKjFjpNb2E6K5ti4J2mkjfCRjRddmt3J2r8YEjsP7dZQQnC8DzmkCaIXOL0w4DYoUFZutUHyBfckYdWiC%2FrpkHBFMLk5i9ZQH0xYZrtH24bQVqeu9%2FXp3LzzTIAd%2BvGSn1HeFSioOT59Vd5cuUVPJPlpucG0QyFZZHijt4EtWWqLXDs1UfmOuyKLtk0uhARlR%2FIxxRB%2B0xV5rixqvnKzzO2oVXHnbs52pP7sWoDyoVDkWC3a27zbErwuWNNWPlMFbAapDR8i1GTzJZkwMNso%2Bhc%2B%2FPsj3G2tFJm8%2BZqvWrOT5ta41gN9mqkzqTozIcpUM4pIH%2BNajDWk8kuMOCbEiurIQtbOBqL%2BC20ZUMAWRa5hUPkHRXBfTwAT%2FBxPOgqxfaQXwzV0qThBI%2BBRrdBSMz28qD9EiFmq7Rt63V7F%2FqahOg%2Bpp7gNbjluIQDYLcPhueQR%2F6XvKOnOdaIJMY9ektZWOwzzRrqGwoAj6nnXZI7osPmbrNhL5HcA%2FxTRhadkLut2UajTIkVlUy0pQ6rv0FYZH4fN9YDNlozLgIfDoWVJy4lqtVKnVJ1clw8yht2dEi8s3nbFEZRUDWjT3M5BVv6QuyUPNwAYitnHnLxO2obP8Z6%2BslUrMMOarMQGOqUBiK7IrXO9D83q7eNRcunctHXu7qIwohbcMQTgXHO0T%2BKaHDUjc%2B4858LaWRye1aswPr%2BNthaEQ6%2BsIXrNdJE8UPM%2BCj7VDUhplRZd1NUaG1kV7Pk8wxxtvum%2Fslv%2FtSBQnS1CGy0cuiufZSVmDwDoCn8Jgl9ZYt4v9Q1qhJ5sCdr2kuSdCbGEiShIo6sMM2eEfIZlVUdjpMPaJArORRPlF7x%2ByKDn&X-Amz-Signature=d95e3b62b4b407df361eb8c6694d99df16357a5b38e979c34b8fc0adb8249ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643KF2ZMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc0jObRFvt6EpsF8JYjn6dfuxp2zPqB6WB9WPuyI6GGAiEA3lcgWWp1IoFLrcKByjzlrQH%2FVhBLPakRAQVwgYFOEc8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhWrVxL9R6AnLZTUyrcA60QgT0VCKjFjpNb2E6K5ti4J2mkjfCRjRddmt3J2r8YEjsP7dZQQnC8DzmkCaIXOL0w4DYoUFZutUHyBfckYdWiC%2FrpkHBFMLk5i9ZQH0xYZrtH24bQVqeu9%2FXp3LzzTIAd%2BvGSn1HeFSioOT59Vd5cuUVPJPlpucG0QyFZZHijt4EtWWqLXDs1UfmOuyKLtk0uhARlR%2FIxxRB%2B0xV5rixqvnKzzO2oVXHnbs52pP7sWoDyoVDkWC3a27zbErwuWNNWPlMFbAapDR8i1GTzJZkwMNso%2Bhc%2B%2FPsj3G2tFJm8%2BZqvWrOT5ta41gN9mqkzqTozIcpUM4pIH%2BNajDWk8kuMOCbEiurIQtbOBqL%2BC20ZUMAWRa5hUPkHRXBfTwAT%2FBxPOgqxfaQXwzV0qThBI%2BBRrdBSMz28qD9EiFmq7Rt63V7F%2FqahOg%2Bpp7gNbjluIQDYLcPhueQR%2F6XvKOnOdaIJMY9ektZWOwzzRrqGwoAj6nnXZI7osPmbrNhL5HcA%2FxTRhadkLut2UajTIkVlUy0pQ6rv0FYZH4fN9YDNlozLgIfDoWVJy4lqtVKnVJ1clw8yht2dEi8s3nbFEZRUDWjT3M5BVv6QuyUPNwAYitnHnLxO2obP8Z6%2BslUrMMOarMQGOqUBiK7IrXO9D83q7eNRcunctHXu7qIwohbcMQTgXHO0T%2BKaHDUjc%2B4858LaWRye1aswPr%2BNthaEQ6%2BsIXrNdJE8UPM%2BCj7VDUhplRZd1NUaG1kV7Pk8wxxtvum%2Fslv%2FtSBQnS1CGy0cuiufZSVmDwDoCn8Jgl9ZYt4v9Q1qhJ5sCdr2kuSdCbGEiShIo6sMM2eEfIZlVUdjpMPaJArORRPlF7x%2ByKDn&X-Amz-Signature=7ec29b83f96118d39f5600d5149639c489a82c7cb01796eba7df0593955af41a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643KF2ZMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc0jObRFvt6EpsF8JYjn6dfuxp2zPqB6WB9WPuyI6GGAiEA3lcgWWp1IoFLrcKByjzlrQH%2FVhBLPakRAQVwgYFOEc8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhWrVxL9R6AnLZTUyrcA60QgT0VCKjFjpNb2E6K5ti4J2mkjfCRjRddmt3J2r8YEjsP7dZQQnC8DzmkCaIXOL0w4DYoUFZutUHyBfckYdWiC%2FrpkHBFMLk5i9ZQH0xYZrtH24bQVqeu9%2FXp3LzzTIAd%2BvGSn1HeFSioOT59Vd5cuUVPJPlpucG0QyFZZHijt4EtWWqLXDs1UfmOuyKLtk0uhARlR%2FIxxRB%2B0xV5rixqvnKzzO2oVXHnbs52pP7sWoDyoVDkWC3a27zbErwuWNNWPlMFbAapDR8i1GTzJZkwMNso%2Bhc%2B%2FPsj3G2tFJm8%2BZqvWrOT5ta41gN9mqkzqTozIcpUM4pIH%2BNajDWk8kuMOCbEiurIQtbOBqL%2BC20ZUMAWRa5hUPkHRXBfTwAT%2FBxPOgqxfaQXwzV0qThBI%2BBRrdBSMz28qD9EiFmq7Rt63V7F%2FqahOg%2Bpp7gNbjluIQDYLcPhueQR%2F6XvKOnOdaIJMY9ektZWOwzzRrqGwoAj6nnXZI7osPmbrNhL5HcA%2FxTRhadkLut2UajTIkVlUy0pQ6rv0FYZH4fN9YDNlozLgIfDoWVJy4lqtVKnVJ1clw8yht2dEi8s3nbFEZRUDWjT3M5BVv6QuyUPNwAYitnHnLxO2obP8Z6%2BslUrMMOarMQGOqUBiK7IrXO9D83q7eNRcunctHXu7qIwohbcMQTgXHO0T%2BKaHDUjc%2B4858LaWRye1aswPr%2BNthaEQ6%2BsIXrNdJE8UPM%2BCj7VDUhplRZd1NUaG1kV7Pk8wxxtvum%2Fslv%2FtSBQnS1CGy0cuiufZSVmDwDoCn8Jgl9ZYt4v9Q1qhJ5sCdr2kuSdCbGEiShIo6sMM2eEfIZlVUdjpMPaJArORRPlF7x%2ByKDn&X-Amz-Signature=77a0b52c4c7faebd30a392904db5220cba0cc720592aa922369e952692f4ce97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643KF2ZMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc0jObRFvt6EpsF8JYjn6dfuxp2zPqB6WB9WPuyI6GGAiEA3lcgWWp1IoFLrcKByjzlrQH%2FVhBLPakRAQVwgYFOEc8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhWrVxL9R6AnLZTUyrcA60QgT0VCKjFjpNb2E6K5ti4J2mkjfCRjRddmt3J2r8YEjsP7dZQQnC8DzmkCaIXOL0w4DYoUFZutUHyBfckYdWiC%2FrpkHBFMLk5i9ZQH0xYZrtH24bQVqeu9%2FXp3LzzTIAd%2BvGSn1HeFSioOT59Vd5cuUVPJPlpucG0QyFZZHijt4EtWWqLXDs1UfmOuyKLtk0uhARlR%2FIxxRB%2B0xV5rixqvnKzzO2oVXHnbs52pP7sWoDyoVDkWC3a27zbErwuWNNWPlMFbAapDR8i1GTzJZkwMNso%2Bhc%2B%2FPsj3G2tFJm8%2BZqvWrOT5ta41gN9mqkzqTozIcpUM4pIH%2BNajDWk8kuMOCbEiurIQtbOBqL%2BC20ZUMAWRa5hUPkHRXBfTwAT%2FBxPOgqxfaQXwzV0qThBI%2BBRrdBSMz28qD9EiFmq7Rt63V7F%2FqahOg%2Bpp7gNbjluIQDYLcPhueQR%2F6XvKOnOdaIJMY9ektZWOwzzRrqGwoAj6nnXZI7osPmbrNhL5HcA%2FxTRhadkLut2UajTIkVlUy0pQ6rv0FYZH4fN9YDNlozLgIfDoWVJy4lqtVKnVJ1clw8yht2dEi8s3nbFEZRUDWjT3M5BVv6QuyUPNwAYitnHnLxO2obP8Z6%2BslUrMMOarMQGOqUBiK7IrXO9D83q7eNRcunctHXu7qIwohbcMQTgXHO0T%2BKaHDUjc%2B4858LaWRye1aswPr%2BNthaEQ6%2BsIXrNdJE8UPM%2BCj7VDUhplRZd1NUaG1kV7Pk8wxxtvum%2Fslv%2FtSBQnS1CGy0cuiufZSVmDwDoCn8Jgl9ZYt4v9Q1qhJ5sCdr2kuSdCbGEiShIo6sMM2eEfIZlVUdjpMPaJArORRPlF7x%2ByKDn&X-Amz-Signature=2c41695c563f456180b4b728d0735608ad7cee1f5c7978d959921b582bacc9ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643KF2ZMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc0jObRFvt6EpsF8JYjn6dfuxp2zPqB6WB9WPuyI6GGAiEA3lcgWWp1IoFLrcKByjzlrQH%2FVhBLPakRAQVwgYFOEc8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhWrVxL9R6AnLZTUyrcA60QgT0VCKjFjpNb2E6K5ti4J2mkjfCRjRddmt3J2r8YEjsP7dZQQnC8DzmkCaIXOL0w4DYoUFZutUHyBfckYdWiC%2FrpkHBFMLk5i9ZQH0xYZrtH24bQVqeu9%2FXp3LzzTIAd%2BvGSn1HeFSioOT59Vd5cuUVPJPlpucG0QyFZZHijt4EtWWqLXDs1UfmOuyKLtk0uhARlR%2FIxxRB%2B0xV5rixqvnKzzO2oVXHnbs52pP7sWoDyoVDkWC3a27zbErwuWNNWPlMFbAapDR8i1GTzJZkwMNso%2Bhc%2B%2FPsj3G2tFJm8%2BZqvWrOT5ta41gN9mqkzqTozIcpUM4pIH%2BNajDWk8kuMOCbEiurIQtbOBqL%2BC20ZUMAWRa5hUPkHRXBfTwAT%2FBxPOgqxfaQXwzV0qThBI%2BBRrdBSMz28qD9EiFmq7Rt63V7F%2FqahOg%2Bpp7gNbjluIQDYLcPhueQR%2F6XvKOnOdaIJMY9ektZWOwzzRrqGwoAj6nnXZI7osPmbrNhL5HcA%2FxTRhadkLut2UajTIkVlUy0pQ6rv0FYZH4fN9YDNlozLgIfDoWVJy4lqtVKnVJ1clw8yht2dEi8s3nbFEZRUDWjT3M5BVv6QuyUPNwAYitnHnLxO2obP8Z6%2BslUrMMOarMQGOqUBiK7IrXO9D83q7eNRcunctHXu7qIwohbcMQTgXHO0T%2BKaHDUjc%2B4858LaWRye1aswPr%2BNthaEQ6%2BsIXrNdJE8UPM%2BCj7VDUhplRZd1NUaG1kV7Pk8wxxtvum%2Fslv%2FtSBQnS1CGy0cuiufZSVmDwDoCn8Jgl9ZYt4v9Q1qhJ5sCdr2kuSdCbGEiShIo6sMM2eEfIZlVUdjpMPaJArORRPlF7x%2ByKDn&X-Amz-Signature=812a93e31a0edf4ca7d512924583479f7d046b8627bbdd5adaf6594629090e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643KF2ZMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc0jObRFvt6EpsF8JYjn6dfuxp2zPqB6WB9WPuyI6GGAiEA3lcgWWp1IoFLrcKByjzlrQH%2FVhBLPakRAQVwgYFOEc8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhWrVxL9R6AnLZTUyrcA60QgT0VCKjFjpNb2E6K5ti4J2mkjfCRjRddmt3J2r8YEjsP7dZQQnC8DzmkCaIXOL0w4DYoUFZutUHyBfckYdWiC%2FrpkHBFMLk5i9ZQH0xYZrtH24bQVqeu9%2FXp3LzzTIAd%2BvGSn1HeFSioOT59Vd5cuUVPJPlpucG0QyFZZHijt4EtWWqLXDs1UfmOuyKLtk0uhARlR%2FIxxRB%2B0xV5rixqvnKzzO2oVXHnbs52pP7sWoDyoVDkWC3a27zbErwuWNNWPlMFbAapDR8i1GTzJZkwMNso%2Bhc%2B%2FPsj3G2tFJm8%2BZqvWrOT5ta41gN9mqkzqTozIcpUM4pIH%2BNajDWk8kuMOCbEiurIQtbOBqL%2BC20ZUMAWRa5hUPkHRXBfTwAT%2FBxPOgqxfaQXwzV0qThBI%2BBRrdBSMz28qD9EiFmq7Rt63V7F%2FqahOg%2Bpp7gNbjluIQDYLcPhueQR%2F6XvKOnOdaIJMY9ektZWOwzzRrqGwoAj6nnXZI7osPmbrNhL5HcA%2FxTRhadkLut2UajTIkVlUy0pQ6rv0FYZH4fN9YDNlozLgIfDoWVJy4lqtVKnVJ1clw8yht2dEi8s3nbFEZRUDWjT3M5BVv6QuyUPNwAYitnHnLxO2obP8Z6%2BslUrMMOarMQGOqUBiK7IrXO9D83q7eNRcunctHXu7qIwohbcMQTgXHO0T%2BKaHDUjc%2B4858LaWRye1aswPr%2BNthaEQ6%2BsIXrNdJE8UPM%2BCj7VDUhplRZd1NUaG1kV7Pk8wxxtvum%2Fslv%2FtSBQnS1CGy0cuiufZSVmDwDoCn8Jgl9ZYt4v9Q1qhJ5sCdr2kuSdCbGEiShIo6sMM2eEfIZlVUdjpMPaJArORRPlF7x%2ByKDn&X-Amz-Signature=318503e6d37298d8dbcc566c2052be18c4f751f4b31093ca30a4ac183787ed96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643KF2ZMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc0jObRFvt6EpsF8JYjn6dfuxp2zPqB6WB9WPuyI6GGAiEA3lcgWWp1IoFLrcKByjzlrQH%2FVhBLPakRAQVwgYFOEc8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhWrVxL9R6AnLZTUyrcA60QgT0VCKjFjpNb2E6K5ti4J2mkjfCRjRddmt3J2r8YEjsP7dZQQnC8DzmkCaIXOL0w4DYoUFZutUHyBfckYdWiC%2FrpkHBFMLk5i9ZQH0xYZrtH24bQVqeu9%2FXp3LzzTIAd%2BvGSn1HeFSioOT59Vd5cuUVPJPlpucG0QyFZZHijt4EtWWqLXDs1UfmOuyKLtk0uhARlR%2FIxxRB%2B0xV5rixqvnKzzO2oVXHnbs52pP7sWoDyoVDkWC3a27zbErwuWNNWPlMFbAapDR8i1GTzJZkwMNso%2Bhc%2B%2FPsj3G2tFJm8%2BZqvWrOT5ta41gN9mqkzqTozIcpUM4pIH%2BNajDWk8kuMOCbEiurIQtbOBqL%2BC20ZUMAWRa5hUPkHRXBfTwAT%2FBxPOgqxfaQXwzV0qThBI%2BBRrdBSMz28qD9EiFmq7Rt63V7F%2FqahOg%2Bpp7gNbjluIQDYLcPhueQR%2F6XvKOnOdaIJMY9ektZWOwzzRrqGwoAj6nnXZI7osPmbrNhL5HcA%2FxTRhadkLut2UajTIkVlUy0pQ6rv0FYZH4fN9YDNlozLgIfDoWVJy4lqtVKnVJ1clw8yht2dEi8s3nbFEZRUDWjT3M5BVv6QuyUPNwAYitnHnLxO2obP8Z6%2BslUrMMOarMQGOqUBiK7IrXO9D83q7eNRcunctHXu7qIwohbcMQTgXHO0T%2BKaHDUjc%2B4858LaWRye1aswPr%2BNthaEQ6%2BsIXrNdJE8UPM%2BCj7VDUhplRZd1NUaG1kV7Pk8wxxtvum%2Fslv%2FtSBQnS1CGy0cuiufZSVmDwDoCn8Jgl9ZYt4v9Q1qhJ5sCdr2kuSdCbGEiShIo6sMM2eEfIZlVUdjpMPaJArORRPlF7x%2ByKDn&X-Amz-Signature=16af8d149546cb676f9deefea86b24460c892c7704b58dc6eb50759a388da96f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643KF2ZMZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc0jObRFvt6EpsF8JYjn6dfuxp2zPqB6WB9WPuyI6GGAiEA3lcgWWp1IoFLrcKByjzlrQH%2FVhBLPakRAQVwgYFOEc8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhWrVxL9R6AnLZTUyrcA60QgT0VCKjFjpNb2E6K5ti4J2mkjfCRjRddmt3J2r8YEjsP7dZQQnC8DzmkCaIXOL0w4DYoUFZutUHyBfckYdWiC%2FrpkHBFMLk5i9ZQH0xYZrtH24bQVqeu9%2FXp3LzzTIAd%2BvGSn1HeFSioOT59Vd5cuUVPJPlpucG0QyFZZHijt4EtWWqLXDs1UfmOuyKLtk0uhARlR%2FIxxRB%2B0xV5rixqvnKzzO2oVXHnbs52pP7sWoDyoVDkWC3a27zbErwuWNNWPlMFbAapDR8i1GTzJZkwMNso%2Bhc%2B%2FPsj3G2tFJm8%2BZqvWrOT5ta41gN9mqkzqTozIcpUM4pIH%2BNajDWk8kuMOCbEiurIQtbOBqL%2BC20ZUMAWRa5hUPkHRXBfTwAT%2FBxPOgqxfaQXwzV0qThBI%2BBRrdBSMz28qD9EiFmq7Rt63V7F%2FqahOg%2Bpp7gNbjluIQDYLcPhueQR%2F6XvKOnOdaIJMY9ektZWOwzzRrqGwoAj6nnXZI7osPmbrNhL5HcA%2FxTRhadkLut2UajTIkVlUy0pQ6rv0FYZH4fN9YDNlozLgIfDoWVJy4lqtVKnVJ1clw8yht2dEi8s3nbFEZRUDWjT3M5BVv6QuyUPNwAYitnHnLxO2obP8Z6%2BslUrMMOarMQGOqUBiK7IrXO9D83q7eNRcunctHXu7qIwohbcMQTgXHO0T%2BKaHDUjc%2B4858LaWRye1aswPr%2BNthaEQ6%2BsIXrNdJE8UPM%2BCj7VDUhplRZd1NUaG1kV7Pk8wxxtvum%2Fslv%2FtSBQnS1CGy0cuiufZSVmDwDoCn8Jgl9ZYt4v9Q1qhJ5sCdr2kuSdCbGEiShIo6sMM2eEfIZlVUdjpMPaJArORRPlF7x%2ByKDn&X-Amz-Signature=584b608d455dc52b58dbc3fecedb0d5e9a3d643e9c0540dae4abda9d5f47f003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
