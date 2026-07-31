---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-08-02T10:08:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-08-02T10:08:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 153
toc: false
icon: ""
---

Gazebo is a simulation software suite. It can simulate many kinds of sensors such as Lidar, Depth sense cameras, IMU, and more.

Here is the official [link to their website](https://gazebosim.org/home) if you want to learn more

We are going to set up Gazebo simulation for our project

## Install

```bash
sudo apt install ros-$ROS2_DISTRO-ros-gz
```

### New nodes

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFY52SX%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqUwoJjlyvHyVC9FqDykP%2FJGTXVJL2tr3RFGBrxX6GKQIgOlJpnwKrI3x2lsfSfIOyg53oHjjn4TMx0NgsdnOMev8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM95IQrEVRztIJKcCrcA6cWkZpwYuyoFDEYUCVyjHHz0FkPNbmxtjX0X6Ner6q1cEk7w07LQRLpkwa3SbzJN7jBMsDfxiAxQbYReayBhip%2Ft3rBhE2unczU61RuZqLltMAZ%2B29UHEqYxxeoTzCpN2RDHyRwmt3ueLbfciNl93blvo2AOxyxYuyDvMsslFhftYO8tj3LcqLdstKlFbfyagdeBNBmhPSn3I8TA36B%2Fc9nNxQ%2BkaWTCn%2F9jBH4bn3x%2BPfHi52%2Bk5m9g6RakJt0wsf93teHDTjsKjEhOnT3v2aRiK3%2FZ%2BOOrTfcSfAZ2x2HNqv%2Bvui8Bn9DFU4lRoHTPagntX1iXJSSnAVdvo2hvuPZs%2FbUvlWeF6dMTeK06980TUEgtd4zNQRMvDgn%2FIbcixvbExyCCdnxnTb123bTGDsf%2Bb2jtAHnuoU40ivbbQZ%2FfB5yWZhUbq83ZIQ3wFN8mGQA6JpVKn8B%2Fkeppg1GKi3vbO3pCzPJDMPYZJcvQUN9%2B772DOT7smCDcr7m%2BMxCm4kPFL9bocn8xzAiKGnq57ZqfDitiVLku3Jrc0X1j3M6PPglT1KsVxcpfa%2FEFeOH%2FJzp1VboeT7D43psRXLZOiGAqAa5tnvG8H%2FycRTN80sA651jA0XMFK247k6%2BMLSUsNMGOqUBeIqLeFnl68V92nL1uISqj8MrK1EUBbrMZSvWZ0SthNESuXBRzCRRSjrkyhSV7183bzLLYDjwzzNRQeR8zpt4ktJmaOb2K7EKNKTsGxg%2BXaHIrq3xjrTgVoQw6VcNGg5FFD%2FgIB%2Fm8G%2BMx3n%2BIldQPkkWsKgJX7r5eN1eDbwPc1G7AVrag6i7dr%2Ff6FS5gfgOjS%2BAZJ7gZ4brSL9iio%2BfabTV2n3G&X-Amz-Signature=c6d095393cba2ade52c1ac7d1f9394d994b9f6fa59352bdc38e7d692b276fef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}


#### Outputs:

| **Name**        | **Type**               |
| --------------- | ---------------------- |
| `/joint_states` | sensor_msg/JointState  |
| `/odom`         | nav_msgs/Odometry      |
| `/tf`           | simulated robot joints |

#### Params:

| **Name**         | **Type** |
| ---------------- | -------- |
| `config_file`    | file     |
| `world_sdf_file` | file     |

#### description:

Simulates a whole robot and world to debug and test quickly

{{% /alert %}}

In the last guide  was what our nodes looked like

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFY52SX%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqUwoJjlyvHyVC9FqDykP%2FJGTXVJL2tr3RFGBrxX6GKQIgOlJpnwKrI3x2lsfSfIOyg53oHjjn4TMx0NgsdnOMev8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM95IQrEVRztIJKcCrcA6cWkZpwYuyoFDEYUCVyjHHz0FkPNbmxtjX0X6Ner6q1cEk7w07LQRLpkwa3SbzJN7jBMsDfxiAxQbYReayBhip%2Ft3rBhE2unczU61RuZqLltMAZ%2B29UHEqYxxeoTzCpN2RDHyRwmt3ueLbfciNl93blvo2AOxyxYuyDvMsslFhftYO8tj3LcqLdstKlFbfyagdeBNBmhPSn3I8TA36B%2Fc9nNxQ%2BkaWTCn%2F9jBH4bn3x%2BPfHi52%2Bk5m9g6RakJt0wsf93teHDTjsKjEhOnT3v2aRiK3%2FZ%2BOOrTfcSfAZ2x2HNqv%2Bvui8Bn9DFU4lRoHTPagntX1iXJSSnAVdvo2hvuPZs%2FbUvlWeF6dMTeK06980TUEgtd4zNQRMvDgn%2FIbcixvbExyCCdnxnTb123bTGDsf%2Bb2jtAHnuoU40ivbbQZ%2FfB5yWZhUbq83ZIQ3wFN8mGQA6JpVKn8B%2Fkeppg1GKi3vbO3pCzPJDMPYZJcvQUN9%2B772DOT7smCDcr7m%2BMxCm4kPFL9bocn8xzAiKGnq57ZqfDitiVLku3Jrc0X1j3M6PPglT1KsVxcpfa%2FEFeOH%2FJzp1VboeT7D43psRXLZOiGAqAa5tnvG8H%2FycRTN80sA651jA0XMFK247k6%2BMLSUsNMGOqUBeIqLeFnl68V92nL1uISqj8MrK1EUBbrMZSvWZ0SthNESuXBRzCRRSjrkyhSV7183bzLLYDjwzzNRQeR8zpt4ktJmaOb2K7EKNKTsGxg%2BXaHIrq3xjrTgVoQw6VcNGg5FFD%2FgIB%2Fm8G%2BMx3n%2BIldQPkkWsKgJX7r5eN1eDbwPc1G7AVrag6i7dr%2Ff6FS5gfgOjS%2BAZJ7gZ4brSL9iio%2BfabTV2n3G&X-Amz-Signature=f09cbd701bd4e3b5cc0ff2acb62d1fd15afda2c20e6c8c685340c9cc3c0f2c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFY52SX%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqUwoJjlyvHyVC9FqDykP%2FJGTXVJL2tr3RFGBrxX6GKQIgOlJpnwKrI3x2lsfSfIOyg53oHjjn4TMx0NgsdnOMev8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM95IQrEVRztIJKcCrcA6cWkZpwYuyoFDEYUCVyjHHz0FkPNbmxtjX0X6Ner6q1cEk7w07LQRLpkwa3SbzJN7jBMsDfxiAxQbYReayBhip%2Ft3rBhE2unczU61RuZqLltMAZ%2B29UHEqYxxeoTzCpN2RDHyRwmt3ueLbfciNl93blvo2AOxyxYuyDvMsslFhftYO8tj3LcqLdstKlFbfyagdeBNBmhPSn3I8TA36B%2Fc9nNxQ%2BkaWTCn%2F9jBH4bn3x%2BPfHi52%2Bk5m9g6RakJt0wsf93teHDTjsKjEhOnT3v2aRiK3%2FZ%2BOOrTfcSfAZ2x2HNqv%2Bvui8Bn9DFU4lRoHTPagntX1iXJSSnAVdvo2hvuPZs%2FbUvlWeF6dMTeK06980TUEgtd4zNQRMvDgn%2FIbcixvbExyCCdnxnTb123bTGDsf%2Bb2jtAHnuoU40ivbbQZ%2FfB5yWZhUbq83ZIQ3wFN8mGQA6JpVKn8B%2Fkeppg1GKi3vbO3pCzPJDMPYZJcvQUN9%2B772DOT7smCDcr7m%2BMxCm4kPFL9bocn8xzAiKGnq57ZqfDitiVLku3Jrc0X1j3M6PPglT1KsVxcpfa%2FEFeOH%2FJzp1VboeT7D43psRXLZOiGAqAa5tnvG8H%2FycRTN80sA651jA0XMFK247k6%2BMLSUsNMGOqUBeIqLeFnl68V92nL1uISqj8MrK1EUBbrMZSvWZ0SthNESuXBRzCRRSjrkyhSV7183bzLLYDjwzzNRQeR8zpt4ktJmaOb2K7EKNKTsGxg%2BXaHIrq3xjrTgVoQw6VcNGg5FFD%2FgIB%2Fm8G%2BMx3n%2BIldQPkkWsKgJX7r5eN1eDbwPc1G7AVrag6i7dr%2Ff6FS5gfgOjS%2BAZJ7gZ4brSL9iio%2BfabTV2n3G&X-Amz-Signature=4d0908e8345bf45996d9a93ea5fa962bbc910e79d168a4e07d3236f134163477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFY52SX%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqUwoJjlyvHyVC9FqDykP%2FJGTXVJL2tr3RFGBrxX6GKQIgOlJpnwKrI3x2lsfSfIOyg53oHjjn4TMx0NgsdnOMev8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM95IQrEVRztIJKcCrcA6cWkZpwYuyoFDEYUCVyjHHz0FkPNbmxtjX0X6Ner6q1cEk7w07LQRLpkwa3SbzJN7jBMsDfxiAxQbYReayBhip%2Ft3rBhE2unczU61RuZqLltMAZ%2B29UHEqYxxeoTzCpN2RDHyRwmt3ueLbfciNl93blvo2AOxyxYuyDvMsslFhftYO8tj3LcqLdstKlFbfyagdeBNBmhPSn3I8TA36B%2Fc9nNxQ%2BkaWTCn%2F9jBH4bn3x%2BPfHi52%2Bk5m9g6RakJt0wsf93teHDTjsKjEhOnT3v2aRiK3%2FZ%2BOOrTfcSfAZ2x2HNqv%2Bvui8Bn9DFU4lRoHTPagntX1iXJSSnAVdvo2hvuPZs%2FbUvlWeF6dMTeK06980TUEgtd4zNQRMvDgn%2FIbcixvbExyCCdnxnTb123bTGDsf%2Bb2jtAHnuoU40ivbbQZ%2FfB5yWZhUbq83ZIQ3wFN8mGQA6JpVKn8B%2Fkeppg1GKi3vbO3pCzPJDMPYZJcvQUN9%2B772DOT7smCDcr7m%2BMxCm4kPFL9bocn8xzAiKGnq57ZqfDitiVLku3Jrc0X1j3M6PPglT1KsVxcpfa%2FEFeOH%2FJzp1VboeT7D43psRXLZOiGAqAa5tnvG8H%2FycRTN80sA651jA0XMFK247k6%2BMLSUsNMGOqUBeIqLeFnl68V92nL1uISqj8MrK1EUBbrMZSvWZ0SthNESuXBRzCRRSjrkyhSV7183bzLLYDjwzzNRQeR8zpt4ktJmaOb2K7EKNKTsGxg%2BXaHIrq3xjrTgVoQw6VcNGg5FFD%2FgIB%2Fm8G%2BMx3n%2BIldQPkkWsKgJX7r5eN1eDbwPc1G7AVrag6i7dr%2Ff6FS5gfgOjS%2BAZJ7gZ4brSL9iio%2BfabTV2n3G&X-Amz-Signature=0991b4cea0b772fe74c38468a7f59f3b0a9814e0be8b27fa65f97734b27e99a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

paste this inside `bridge_config.yaml`. 

This file just describes what topics to _bridge_ between ROS and Gazebo

```yaml
---
- ros_topic_name: "/clock"
  gz_topic_name: "/clock"
  ros_type_name: "rosgraph_msgs/msg/Clock"
  gz_type_name: "gz.msgs.Clock"
  direction: GZ_TO_ROS

# Topic published by DiffDrive plugin
- ros_topic_name: "/odom"
  gz_topic_name: "/odom"
  ros_type_name: "nav_msgs/msg/Odometry"
  gz_type_name: "gz.msgs.Odometry"
  direction: GZ_TO_ROS

# Topic published by JointStatePublisher plugin
- ros_topic_name: "/joint_states"
  gz_topic_name: "/joint_states"
  ros_type_name: "sensor_msgs/msg/JointState"
  gz_type_name: "gz.msgs.Model"
  direction: GZ_TO_ROS

# Topic subscribed to by DiffDrive plugin
- ros_topic_name: "/cmd_vel"
  gz_topic_name: "/cmd_vel"
  ros_type_name: "geometry_msgs/msg/TwistStamped"
  gz_type_name: "gz.msgs.Twist"
  direction: ROS_TO_GZ

- ros_topic_name: "/tf"
  gz_topic_name: "/tf"
  ros_type_name: "tf2_msgs/msg/TFMessage"
  gz_type_name: "gz.msgs.Pose_V"
  direction: GZ_TO_ROS
```

## Updating `urdf`

To be able to drive the robot in Gazebo we need to add this plugin at the bottom of our `mbot_description.urdf` **right before the** **`</robot>`** **tag**.

This plugin does emulates most of what `my_node` did.

```xml

  <gazebo>
    <plugin filename="gz-sim-diff-drive-system" name="gz::sim::systems::DiffDrive">
      <!-- wheels -->
      <left_joint>drivewhl_l_joint</left_joint>
      <right_joint>drivewhl_r_joint</right_joint>

      <!-- kinematics -->
      <wheel_separation>0.4</wheel_separation>
      <wheel_radius>${wheel_radius}</wheel_radius>

      <!-- limits -->
      <max_linear_acceleration>1.0</max_linear_acceleration>

      <!-- input -->
      <topic>/cmd_vel</topic>

      <!-- output -->
      <odom_topic>/odom</odom_topic>
      <tf_topic>/tf</tf_topic>

      <frame_id>odom</frame_id>
      <child_frame_id>base_link</child_frame_id>
    </plugin>

    <plugin
      filename="gz-sim-joint-state-publisher-system"
      name="gz::sim::systems::JointStatePublisher">
      <topic>joint_states</topic>
    </plugin>
  </gazebo>
```

We also need to simulate friction on the wheels or else the robot will not be able to move in the sim.

Add the friction tag in the wheel macro we made: 

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "17-21"
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>

      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>

        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
        </ode></friction></surface>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4WHZKPL%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwx1e5l1nxOnDnIXTg6tBnskISLi1BS%2F3mqPfKchchqAiB%2F9aLmxkkBEs7q8SZCOkRCCl6z86J%2F9uO72a2oT9FgZyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4tKpCsrR%2BrQn5y2yKtwDD50H5sJRVTv%2F10%2F03hhmiUCUc7bBAmZB%2FkNZy0m8W8o1L52YU%2FctnDQtLarVy0Ox%2F5qCh%2FBCuzHlCY5%2BxS4qI8sizhZ9fkOGl4JjT96%2FjKmddmV2JLwVTZ8iN1y958c%2BdOKYF0Ych0E8ZPdV0nGgMcmz%2BKcX4S9FsLbNHeZSNVBCnQk8nQT6TFLK0NDRuSsU4OpE5dnAeqta87fZ7uOo0BEdAeIaD2KcNBlTTB8QJOf9kpH5Udd8TPGUgNoEFydpC03KUKYl7OAV9yB9vTvdcXBWjWdEL4OwsVKwEpWGT4EeJJHMWedZxRI9FJ3H3NWCUv446um1HK5w4gjoNt8DQ0KHw8zqNC4JkMv5VpyN7EwZ93zAbz3xHN1fLpreZgA7WcC4l51PGWCCjdjgrEugO%2Fpi%2BRUPHZKejuu5HZgSdLzssodr1cQdMxe4vJxEJ9rAdDNIb9adborbr4RxsXKxz7n6WSA2jT6vxhijLIOp3FIZwyqVct1f2I7llwgBTr5ouV3PhgXcO7hOUjw9omIbsyWE0LLQXLrUMKOJDq%2BvOwaLIUmYPWkAofU050SjVqAiyvAtNGX%2BCl8e4y%2BL6i1K6Yza1MbDAZmOzRNvfT6ZxYMqNe8Nx%2FFKO%2FRLvZUwv5Sw0wY6pgFjm2R2wKdViTJ%2Bi7d%2B7rgeGnol7kr5SNeFrMMJXfG2la4Bn%2Bn34ttOckS%2B%2B7SOLa%2BxfdTpmp2mb99miXV8J33TNB%2B0bHaOFN8GV9PR6GnR8g2FXfMp849aKAVVaNmJdnoLeq5HNjyNqAGisLqbaZSe6bExFw%2B0xr%2B%2FekeAQsGD80QFoj06YdfNEync9htW1rJMWVgTXOh4kW6isEoM%2F9xkZfWUGAi3&X-Amz-Signature=e839eb6519d88b0f091ff5ff4b4417058101233356ad1c1c176a3503308d4019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFY52SX%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqUwoJjlyvHyVC9FqDykP%2FJGTXVJL2tr3RFGBrxX6GKQIgOlJpnwKrI3x2lsfSfIOyg53oHjjn4TMx0NgsdnOMev8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM95IQrEVRztIJKcCrcA6cWkZpwYuyoFDEYUCVyjHHz0FkPNbmxtjX0X6Ner6q1cEk7w07LQRLpkwa3SbzJN7jBMsDfxiAxQbYReayBhip%2Ft3rBhE2unczU61RuZqLltMAZ%2B29UHEqYxxeoTzCpN2RDHyRwmt3ueLbfciNl93blvo2AOxyxYuyDvMsslFhftYO8tj3LcqLdstKlFbfyagdeBNBmhPSn3I8TA36B%2Fc9nNxQ%2BkaWTCn%2F9jBH4bn3x%2BPfHi52%2Bk5m9g6RakJt0wsf93teHDTjsKjEhOnT3v2aRiK3%2FZ%2BOOrTfcSfAZ2x2HNqv%2Bvui8Bn9DFU4lRoHTPagntX1iXJSSnAVdvo2hvuPZs%2FbUvlWeF6dMTeK06980TUEgtd4zNQRMvDgn%2FIbcixvbExyCCdnxnTb123bTGDsf%2Bb2jtAHnuoU40ivbbQZ%2FfB5yWZhUbq83ZIQ3wFN8mGQA6JpVKn8B%2Fkeppg1GKi3vbO3pCzPJDMPYZJcvQUN9%2B772DOT7smCDcr7m%2BMxCm4kPFL9bocn8xzAiKGnq57ZqfDitiVLku3Jrc0X1j3M6PPglT1KsVxcpfa%2FEFeOH%2FJzp1VboeT7D43psRXLZOiGAqAa5tnvG8H%2FycRTN80sA651jA0XMFK247k6%2BMLSUsNMGOqUBeIqLeFnl68V92nL1uISqj8MrK1EUBbrMZSvWZ0SthNESuXBRzCRRSjrkyhSV7183bzLLYDjwzzNRQeR8zpt4ktJmaOb2K7EKNKTsGxg%2BXaHIrq3xjrTgVoQw6VcNGg5FFD%2FgIB%2Fm8G%2BMx3n%2BIldQPkkWsKgJX7r5eN1eDbwPc1G7AVrag6i7dr%2Ff6FS5gfgOjS%2BAZJ7gZ4brSL9iio%2BfabTV2n3G&X-Amz-Signature=be923153813d8688579ef2c5434562c5eac698ec34f4a84a3437bdf304469fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFY52SX%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqUwoJjlyvHyVC9FqDykP%2FJGTXVJL2tr3RFGBrxX6GKQIgOlJpnwKrI3x2lsfSfIOyg53oHjjn4TMx0NgsdnOMev8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM95IQrEVRztIJKcCrcA6cWkZpwYuyoFDEYUCVyjHHz0FkPNbmxtjX0X6Ner6q1cEk7w07LQRLpkwa3SbzJN7jBMsDfxiAxQbYReayBhip%2Ft3rBhE2unczU61RuZqLltMAZ%2B29UHEqYxxeoTzCpN2RDHyRwmt3ueLbfciNl93blvo2AOxyxYuyDvMsslFhftYO8tj3LcqLdstKlFbfyagdeBNBmhPSn3I8TA36B%2Fc9nNxQ%2BkaWTCn%2F9jBH4bn3x%2BPfHi52%2Bk5m9g6RakJt0wsf93teHDTjsKjEhOnT3v2aRiK3%2FZ%2BOOrTfcSfAZ2x2HNqv%2Bvui8Bn9DFU4lRoHTPagntX1iXJSSnAVdvo2hvuPZs%2FbUvlWeF6dMTeK06980TUEgtd4zNQRMvDgn%2FIbcixvbExyCCdnxnTb123bTGDsf%2Bb2jtAHnuoU40ivbbQZ%2FfB5yWZhUbq83ZIQ3wFN8mGQA6JpVKn8B%2Fkeppg1GKi3vbO3pCzPJDMPYZJcvQUN9%2B772DOT7smCDcr7m%2BMxCm4kPFL9bocn8xzAiKGnq57ZqfDitiVLku3Jrc0X1j3M6PPglT1KsVxcpfa%2FEFeOH%2FJzp1VboeT7D43psRXLZOiGAqAa5tnvG8H%2FycRTN80sA651jA0XMFK247k6%2BMLSUsNMGOqUBeIqLeFnl68V92nL1uISqj8MrK1EUBbrMZSvWZ0SthNESuXBRzCRRSjrkyhSV7183bzLLYDjwzzNRQeR8zpt4ktJmaOb2K7EKNKTsGxg%2BXaHIrq3xjrTgVoQw6VcNGg5FFD%2FgIB%2Fm8G%2BMx3n%2BIldQPkkWsKgJX7r5eN1eDbwPc1G7AVrag6i7dr%2Ff6FS5gfgOjS%2BAZJ7gZ4brSL9iio%2BfabTV2n3G&X-Amz-Signature=c8831ed2351fbb749ce938dc8680ee328e53b0fb61500b022d849987a275a299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFY52SX%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqUwoJjlyvHyVC9FqDykP%2FJGTXVJL2tr3RFGBrxX6GKQIgOlJpnwKrI3x2lsfSfIOyg53oHjjn4TMx0NgsdnOMev8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM95IQrEVRztIJKcCrcA6cWkZpwYuyoFDEYUCVyjHHz0FkPNbmxtjX0X6Ner6q1cEk7w07LQRLpkwa3SbzJN7jBMsDfxiAxQbYReayBhip%2Ft3rBhE2unczU61RuZqLltMAZ%2B29UHEqYxxeoTzCpN2RDHyRwmt3ueLbfciNl93blvo2AOxyxYuyDvMsslFhftYO8tj3LcqLdstKlFbfyagdeBNBmhPSn3I8TA36B%2Fc9nNxQ%2BkaWTCn%2F9jBH4bn3x%2BPfHi52%2Bk5m9g6RakJt0wsf93teHDTjsKjEhOnT3v2aRiK3%2FZ%2BOOrTfcSfAZ2x2HNqv%2Bvui8Bn9DFU4lRoHTPagntX1iXJSSnAVdvo2hvuPZs%2FbUvlWeF6dMTeK06980TUEgtd4zNQRMvDgn%2FIbcixvbExyCCdnxnTb123bTGDsf%2Bb2jtAHnuoU40ivbbQZ%2FfB5yWZhUbq83ZIQ3wFN8mGQA6JpVKn8B%2Fkeppg1GKi3vbO3pCzPJDMPYZJcvQUN9%2B772DOT7smCDcr7m%2BMxCm4kPFL9bocn8xzAiKGnq57ZqfDitiVLku3Jrc0X1j3M6PPglT1KsVxcpfa%2FEFeOH%2FJzp1VboeT7D43psRXLZOiGAqAa5tnvG8H%2FycRTN80sA651jA0XMFK247k6%2BMLSUsNMGOqUBeIqLeFnl68V92nL1uISqj8MrK1EUBbrMZSvWZ0SthNESuXBRzCRRSjrkyhSV7183bzLLYDjwzzNRQeR8zpt4ktJmaOb2K7EKNKTsGxg%2BXaHIrq3xjrTgVoQw6VcNGg5FFD%2FgIB%2Fm8G%2BMx3n%2BIldQPkkWsKgJX7r5eN1eDbwPc1G7AVrag6i7dr%2Ff6FS5gfgOjS%2BAZJ7gZ4brSL9iio%2BfabTV2n3G&X-Amz-Signature=9ea4c827304295acaae429cbe6c24ab420b3e9ea195124db81cb402a6c89ec73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFY52SX%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqUwoJjlyvHyVC9FqDykP%2FJGTXVJL2tr3RFGBrxX6GKQIgOlJpnwKrI3x2lsfSfIOyg53oHjjn4TMx0NgsdnOMev8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM95IQrEVRztIJKcCrcA6cWkZpwYuyoFDEYUCVyjHHz0FkPNbmxtjX0X6Ner6q1cEk7w07LQRLpkwa3SbzJN7jBMsDfxiAxQbYReayBhip%2Ft3rBhE2unczU61RuZqLltMAZ%2B29UHEqYxxeoTzCpN2RDHyRwmt3ueLbfciNl93blvo2AOxyxYuyDvMsslFhftYO8tj3LcqLdstKlFbfyagdeBNBmhPSn3I8TA36B%2Fc9nNxQ%2BkaWTCn%2F9jBH4bn3x%2BPfHi52%2Bk5m9g6RakJt0wsf93teHDTjsKjEhOnT3v2aRiK3%2FZ%2BOOrTfcSfAZ2x2HNqv%2Bvui8Bn9DFU4lRoHTPagntX1iXJSSnAVdvo2hvuPZs%2FbUvlWeF6dMTeK06980TUEgtd4zNQRMvDgn%2FIbcixvbExyCCdnxnTb123bTGDsf%2Bb2jtAHnuoU40ivbbQZ%2FfB5yWZhUbq83ZIQ3wFN8mGQA6JpVKn8B%2Fkeppg1GKi3vbO3pCzPJDMPYZJcvQUN9%2B772DOT7smCDcr7m%2BMxCm4kPFL9bocn8xzAiKGnq57ZqfDitiVLku3Jrc0X1j3M6PPglT1KsVxcpfa%2FEFeOH%2FJzp1VboeT7D43psRXLZOiGAqAa5tnvG8H%2FycRTN80sA651jA0XMFK247k6%2BMLSUsNMGOqUBeIqLeFnl68V92nL1uISqj8MrK1EUBbrMZSvWZ0SthNESuXBRzCRRSjrkyhSV7183bzLLYDjwzzNRQeR8zpt4ktJmaOb2K7EKNKTsGxg%2BXaHIrq3xjrTgVoQw6VcNGg5FFD%2FgIB%2Fm8G%2BMx3n%2BIldQPkkWsKgJX7r5eN1eDbwPc1G7AVrag6i7dr%2Ff6FS5gfgOjS%2BAZJ7gZ4brSL9iio%2BfabTV2n3G&X-Amz-Signature=c4f268767a4e80ee47f19466702d4db653906f6626625a4ffa12912dbd7af1a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

{{% /alert %}}

## Adding Gazebo to launch file

Finally to update the launch file we have to get the `bridge_config.yaml` and `my_world.sdf`

```python "5-5","6-6"
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    
    robot_state_publisher_node = Node(
    ...
```

We also must add the `use_sim_time` parameter to `robot_state_publisher` because we are using a simulator 

```python "5-5"
    robot_state_publisher_node = Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])},
        {'use_sim_time': LaunchConfiguration('use_sim_time')}]
    )
```

Here are the nodes required to start Gazebo

```python
    gz_server = GzServer(
        world_sdf_file=world_path,
        container_name='ros_gz_container',
        create_own_container='True',
        use_composition='True',
    )
    ros_gz_bridge = RosGzBridge(
        bridge_name='ros_gz_bridge',
        config_file=bridge_config_path,
        container_name='ros_gz_container',
        create_own_container='False',
        use_composition='True',
    )
    ros_gz_sim_share = get_package_share_directory('ros_gz_sim')
    gz_spawn_model_launch_source = os.path.join(ros_gz_sim_share, "launch", "gz_spawn_model.launch.py")
    spawn_entity = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(gz_spawn_model_launch_source),
        launch_arguments={
            'world': 'my_world',
            'topic': '/robot_description',
            'entity_name': 'mbot',
            'z': '0.65',
        }.items(),
    )
```

At the bottem remember to comment out `my_node` and swap it out for the Gazebo nodes

```python "3-3","5-5","10-13"

    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
        
        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
    ])
```

Remember to build because we added `bridge_config.yaml` and `my_world.sdf` to the package

```bash
colcon build --symlink-install
```

To run add the new argument `use_sim_time:=True` to correctly use Gazebo

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

{{% alert context="warning" %}}

# Always use `use_sim_time:=True` flag when using Gazebo

{{% /alert %}}

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFY52SX%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqUwoJjlyvHyVC9FqDykP%2FJGTXVJL2tr3RFGBrxX6GKQIgOlJpnwKrI3x2lsfSfIOyg53oHjjn4TMx0NgsdnOMev8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM95IQrEVRztIJKcCrcA6cWkZpwYuyoFDEYUCVyjHHz0FkPNbmxtjX0X6Ner6q1cEk7w07LQRLpkwa3SbzJN7jBMsDfxiAxQbYReayBhip%2Ft3rBhE2unczU61RuZqLltMAZ%2B29UHEqYxxeoTzCpN2RDHyRwmt3ueLbfciNl93blvo2AOxyxYuyDvMsslFhftYO8tj3LcqLdstKlFbfyagdeBNBmhPSn3I8TA36B%2Fc9nNxQ%2BkaWTCn%2F9jBH4bn3x%2BPfHi52%2Bk5m9g6RakJt0wsf93teHDTjsKjEhOnT3v2aRiK3%2FZ%2BOOrTfcSfAZ2x2HNqv%2Bvui8Bn9DFU4lRoHTPagntX1iXJSSnAVdvo2hvuPZs%2FbUvlWeF6dMTeK06980TUEgtd4zNQRMvDgn%2FIbcixvbExyCCdnxnTb123bTGDsf%2Bb2jtAHnuoU40ivbbQZ%2FfB5yWZhUbq83ZIQ3wFN8mGQA6JpVKn8B%2Fkeppg1GKi3vbO3pCzPJDMPYZJcvQUN9%2B772DOT7smCDcr7m%2BMxCm4kPFL9bocn8xzAiKGnq57ZqfDitiVLku3Jrc0X1j3M6PPglT1KsVxcpfa%2FEFeOH%2FJzp1VboeT7D43psRXLZOiGAqAa5tnvG8H%2FycRTN80sA651jA0XMFK247k6%2BMLSUsNMGOqUBeIqLeFnl68V92nL1uISqj8MrK1EUBbrMZSvWZ0SthNESuXBRzCRRSjrkyhSV7183bzLLYDjwzzNRQeR8zpt4ktJmaOb2K7EKNKTsGxg%2BXaHIrq3xjrTgVoQw6VcNGg5FFD%2FgIB%2Fm8G%2BMx3n%2BIldQPkkWsKgJX7r5eN1eDbwPc1G7AVrag6i7dr%2Ff6FS5gfgOjS%2BAZJ7gZ4brSL9iio%2BfabTV2n3G&X-Amz-Signature=0264fd4cb40338d39a6bff8bef2a078d9fd5f4debb4b182d3412405c3752c83b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFY52SX%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqUwoJjlyvHyVC9FqDykP%2FJGTXVJL2tr3RFGBrxX6GKQIgOlJpnwKrI3x2lsfSfIOyg53oHjjn4TMx0NgsdnOMev8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM95IQrEVRztIJKcCrcA6cWkZpwYuyoFDEYUCVyjHHz0FkPNbmxtjX0X6Ner6q1cEk7w07LQRLpkwa3SbzJN7jBMsDfxiAxQbYReayBhip%2Ft3rBhE2unczU61RuZqLltMAZ%2B29UHEqYxxeoTzCpN2RDHyRwmt3ueLbfciNl93blvo2AOxyxYuyDvMsslFhftYO8tj3LcqLdstKlFbfyagdeBNBmhPSn3I8TA36B%2Fc9nNxQ%2BkaWTCn%2F9jBH4bn3x%2BPfHi52%2Bk5m9g6RakJt0wsf93teHDTjsKjEhOnT3v2aRiK3%2FZ%2BOOrTfcSfAZ2x2HNqv%2Bvui8Bn9DFU4lRoHTPagntX1iXJSSnAVdvo2hvuPZs%2FbUvlWeF6dMTeK06980TUEgtd4zNQRMvDgn%2FIbcixvbExyCCdnxnTb123bTGDsf%2Bb2jtAHnuoU40ivbbQZ%2FfB5yWZhUbq83ZIQ3wFN8mGQA6JpVKn8B%2Fkeppg1GKi3vbO3pCzPJDMPYZJcvQUN9%2B772DOT7smCDcr7m%2BMxCm4kPFL9bocn8xzAiKGnq57ZqfDitiVLku3Jrc0X1j3M6PPglT1KsVxcpfa%2FEFeOH%2FJzp1VboeT7D43psRXLZOiGAqAa5tnvG8H%2FycRTN80sA651jA0XMFK247k6%2BMLSUsNMGOqUBeIqLeFnl68V92nL1uISqj8MrK1EUBbrMZSvWZ0SthNESuXBRzCRRSjrkyhSV7183bzLLYDjwzzNRQeR8zpt4ktJmaOb2K7EKNKTsGxg%2BXaHIrq3xjrTgVoQw6VcNGg5FFD%2FgIB%2Fm8G%2BMx3n%2BIldQPkkWsKgJX7r5eN1eDbwPc1G7AVrag6i7dr%2Ff6FS5gfgOjS%2BAZJ7gZ4brSL9iio%2BfabTV2n3G&X-Amz-Signature=89a31ff4a2dfdbfe7db2181c3ebb38e93078ac73a37f9d2a13d3eabfb6c6ceee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


