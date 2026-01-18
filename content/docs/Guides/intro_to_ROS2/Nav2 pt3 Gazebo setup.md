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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXIWIPB%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlq12lL2EzYQtpEQX%2BtAFjkcS2fNBJ%2FfTsnZOO46aJUAiBS3AeNjfr0YPJk%2BDGuvQPi1zyq8M70mispz1JDswcHBCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMTiIPV0PoSEydhFdmKtwD1AM%2BRce8tQEtESWH9dnc%2B%2Bp6XB74b%2FP35Cpfh4FwYFYldxi5EDOHbLmXNAUk1v0lJRbwxSmDj2vBlINCtYHv1Ovj6C3Au3MSIzrh2HZRE4DBqYbkm7G6eG1FMwxXJAyl%2Bk6miKNm9uekXLLjiCDQsWxP3rMHYge4mc3tHETyYtLxDeHHdhjjd1%2BjcACUdLrawiCjBEMYZIsrvsTaCgCfpnyDIuTXky6TqpmGnJygELgXf0Pz6F0%2BLBIUGjj1nt4MzyxuwGBPZd6Ktz%2FmOu5isyTzK1u9aq7zmEnf4rjPIBl6d6I5EPrZsaLNRM39KwhWyQBzHSzF8m12lVaJQurRG5yn38JoPT%2BZfCVV2hgS7YZgcyJgrE3XwQ0ZCRwxVP36UAhsOFV6%2BXP1JtNTHBQvbbyVgYHCLr%2FEpTZ61hjxIW4yEyh3m8CFZtoTdLPV1tqlsm3HMw53u6NBT9VidtNtQV6oqhSUziqm%2B3TNs9U7B%2BYpznyni0mcar8DrsTG5nJsZPQtxWdzi8rWK537Ss5gLpdWyIPMi%2BLSuqQ1kRWojSR4WiywOdnetIXygMPn8m6OSQaoDpwEOQ05eajWbqSKD8uRHzfQ8Bryu5bDW%2FpX3vifXdUpJysESViSQ9owp5ywywY6pgEvHL3zVJX192H7FurOeYGOMYCOOr%2Ff5uB6sd2zfQV0210YYyNmiJ81HOjlBLDkmuusZ5dttQC6am2jBU72Urd6Hlqg%2FQXiChhY9ZgFDxxul%2B9FQhqnQ%2F3JMK1MiI8NifkkyNs%2BGLxCnbY3nvth7lvTypytKUBpnpHqBmEhZsIcRS6zyFDfshMA%2FPOwl92kJP3J8%2BjkKBzwzGUKwyEe6XRVG%2FvxTrbb&X-Amz-Signature=ecc0f183822652e3846cf339ca6b4f5a4634ef3da3641552069531f72c93c855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXIWIPB%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlq12lL2EzYQtpEQX%2BtAFjkcS2fNBJ%2FfTsnZOO46aJUAiBS3AeNjfr0YPJk%2BDGuvQPi1zyq8M70mispz1JDswcHBCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMTiIPV0PoSEydhFdmKtwD1AM%2BRce8tQEtESWH9dnc%2B%2Bp6XB74b%2FP35Cpfh4FwYFYldxi5EDOHbLmXNAUk1v0lJRbwxSmDj2vBlINCtYHv1Ovj6C3Au3MSIzrh2HZRE4DBqYbkm7G6eG1FMwxXJAyl%2Bk6miKNm9uekXLLjiCDQsWxP3rMHYge4mc3tHETyYtLxDeHHdhjjd1%2BjcACUdLrawiCjBEMYZIsrvsTaCgCfpnyDIuTXky6TqpmGnJygELgXf0Pz6F0%2BLBIUGjj1nt4MzyxuwGBPZd6Ktz%2FmOu5isyTzK1u9aq7zmEnf4rjPIBl6d6I5EPrZsaLNRM39KwhWyQBzHSzF8m12lVaJQurRG5yn38JoPT%2BZfCVV2hgS7YZgcyJgrE3XwQ0ZCRwxVP36UAhsOFV6%2BXP1JtNTHBQvbbyVgYHCLr%2FEpTZ61hjxIW4yEyh3m8CFZtoTdLPV1tqlsm3HMw53u6NBT9VidtNtQV6oqhSUziqm%2B3TNs9U7B%2BYpznyni0mcar8DrsTG5nJsZPQtxWdzi8rWK537Ss5gLpdWyIPMi%2BLSuqQ1kRWojSR4WiywOdnetIXygMPn8m6OSQaoDpwEOQ05eajWbqSKD8uRHzfQ8Bryu5bDW%2FpX3vifXdUpJysESViSQ9owp5ywywY6pgEvHL3zVJX192H7FurOeYGOMYCOOr%2Ff5uB6sd2zfQV0210YYyNmiJ81HOjlBLDkmuusZ5dttQC6am2jBU72Urd6Hlqg%2FQXiChhY9ZgFDxxul%2B9FQhqnQ%2F3JMK1MiI8NifkkyNs%2BGLxCnbY3nvth7lvTypytKUBpnpHqBmEhZsIcRS6zyFDfshMA%2FPOwl92kJP3J8%2BjkKBzwzGUKwyEe6XRVG%2FvxTrbb&X-Amz-Signature=deae9b634feccbbc82a37d26ad79a69043251047e431f3112121f02bad684d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXIWIPB%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlq12lL2EzYQtpEQX%2BtAFjkcS2fNBJ%2FfTsnZOO46aJUAiBS3AeNjfr0YPJk%2BDGuvQPi1zyq8M70mispz1JDswcHBCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMTiIPV0PoSEydhFdmKtwD1AM%2BRce8tQEtESWH9dnc%2B%2Bp6XB74b%2FP35Cpfh4FwYFYldxi5EDOHbLmXNAUk1v0lJRbwxSmDj2vBlINCtYHv1Ovj6C3Au3MSIzrh2HZRE4DBqYbkm7G6eG1FMwxXJAyl%2Bk6miKNm9uekXLLjiCDQsWxP3rMHYge4mc3tHETyYtLxDeHHdhjjd1%2BjcACUdLrawiCjBEMYZIsrvsTaCgCfpnyDIuTXky6TqpmGnJygELgXf0Pz6F0%2BLBIUGjj1nt4MzyxuwGBPZd6Ktz%2FmOu5isyTzK1u9aq7zmEnf4rjPIBl6d6I5EPrZsaLNRM39KwhWyQBzHSzF8m12lVaJQurRG5yn38JoPT%2BZfCVV2hgS7YZgcyJgrE3XwQ0ZCRwxVP36UAhsOFV6%2BXP1JtNTHBQvbbyVgYHCLr%2FEpTZ61hjxIW4yEyh3m8CFZtoTdLPV1tqlsm3HMw53u6NBT9VidtNtQV6oqhSUziqm%2B3TNs9U7B%2BYpznyni0mcar8DrsTG5nJsZPQtxWdzi8rWK537Ss5gLpdWyIPMi%2BLSuqQ1kRWojSR4WiywOdnetIXygMPn8m6OSQaoDpwEOQ05eajWbqSKD8uRHzfQ8Bryu5bDW%2FpX3vifXdUpJysESViSQ9owp5ywywY6pgEvHL3zVJX192H7FurOeYGOMYCOOr%2Ff5uB6sd2zfQV0210YYyNmiJ81HOjlBLDkmuusZ5dttQC6am2jBU72Urd6Hlqg%2FQXiChhY9ZgFDxxul%2B9FQhqnQ%2F3JMK1MiI8NifkkyNs%2BGLxCnbY3nvth7lvTypytKUBpnpHqBmEhZsIcRS6zyFDfshMA%2FPOwl92kJP3J8%2BjkKBzwzGUKwyEe6XRVG%2FvxTrbb&X-Amz-Signature=4a1238220a565f8a4974695558d8dbdde0c06c46118f9304c0e78795b8db6604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXIWIPB%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlq12lL2EzYQtpEQX%2BtAFjkcS2fNBJ%2FfTsnZOO46aJUAiBS3AeNjfr0YPJk%2BDGuvQPi1zyq8M70mispz1JDswcHBCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMTiIPV0PoSEydhFdmKtwD1AM%2BRce8tQEtESWH9dnc%2B%2Bp6XB74b%2FP35Cpfh4FwYFYldxi5EDOHbLmXNAUk1v0lJRbwxSmDj2vBlINCtYHv1Ovj6C3Au3MSIzrh2HZRE4DBqYbkm7G6eG1FMwxXJAyl%2Bk6miKNm9uekXLLjiCDQsWxP3rMHYge4mc3tHETyYtLxDeHHdhjjd1%2BjcACUdLrawiCjBEMYZIsrvsTaCgCfpnyDIuTXky6TqpmGnJygELgXf0Pz6F0%2BLBIUGjj1nt4MzyxuwGBPZd6Ktz%2FmOu5isyTzK1u9aq7zmEnf4rjPIBl6d6I5EPrZsaLNRM39KwhWyQBzHSzF8m12lVaJQurRG5yn38JoPT%2BZfCVV2hgS7YZgcyJgrE3XwQ0ZCRwxVP36UAhsOFV6%2BXP1JtNTHBQvbbyVgYHCLr%2FEpTZ61hjxIW4yEyh3m8CFZtoTdLPV1tqlsm3HMw53u6NBT9VidtNtQV6oqhSUziqm%2B3TNs9U7B%2BYpznyni0mcar8DrsTG5nJsZPQtxWdzi8rWK537Ss5gLpdWyIPMi%2BLSuqQ1kRWojSR4WiywOdnetIXygMPn8m6OSQaoDpwEOQ05eajWbqSKD8uRHzfQ8Bryu5bDW%2FpX3vifXdUpJysESViSQ9owp5ywywY6pgEvHL3zVJX192H7FurOeYGOMYCOOr%2Ff5uB6sd2zfQV0210YYyNmiJ81HOjlBLDkmuusZ5dttQC6am2jBU72Urd6Hlqg%2FQXiChhY9ZgFDxxul%2B9FQhqnQ%2F3JMK1MiI8NifkkyNs%2BGLxCnbY3nvth7lvTypytKUBpnpHqBmEhZsIcRS6zyFDfshMA%2FPOwl92kJP3J8%2BjkKBzwzGUKwyEe6XRVG%2FvxTrbb&X-Amz-Signature=bebed09a883de9b329627d829a9dd8982fb1b624f647eb0f2c5f169896c38c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTU6PE46%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdmIgPYRRdGVpm4DxmKUMNfqp1UZyuA67c1weAgnBd6AiEAlu9BWticqliQCRi%2FJEs803ZR6PVTIA7bZ0sTZI6KXvoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDElh9%2Fx3xmv368xXASrcA%2FGqKQG%2FhgzeMFmJ4Gswhy%2B2L4qbl8qeV7BV95mOOAu1c9%2BQI44ngooz8GazMZEpzMCET7VJHbdflttC7ueQW%2F%2FupxEJTc9GpgF0KVBiMD7Fp9ARYMxA%2FresyREhHb51Osyxth4rYRQUCMOomxj9uJ%2FqsQaCdi6tcPiPBdl92j7TCvzHQZ2g4B8DK5KZDkybhOashXws4y7Q6yLgDafwumGg6CCVOKxLD9V880R4TF9Ww4wMGAIaDuKu3XuafETFwgzOmEsPAwBKJhymSNj4u8OOJA4yg9VXNhLscbJLXbKd4F84Kj0QbkQjL0V6vU7RjH52jPq27UxJYSb2zoQeENq3A2yjFMzXD9jeQPkrDoWDbpukWqDqiF9BPoitd5cxSrOYfG%2FErlEihxY8qwvqC249%2BxJnzzh0Vk2VGmqeBPFd1mtaIWBSxJ6B21czl3UA8HfesPobd%2BvhTHHHPIopQi%2Bv2hCAkQRzyn5UX5d55dym8eh0XJ%2B0elgdERVhEG1Ba92nwDY2%2F%2BCQbZWizCGLN1cu6TOT1y0KPvKftIzD4xmn24NpW7atSW2yG4CcYXN0npKMtckqLj6hrvHhE5dw3jwmFiHNQdPUZAKbcjFvi2hkmefq8UwhiHYV7YwqMN6csMsGOqUBZC7D%2B2YpaDPYkFrVrOpWVjlaNib5EAGt63T0%2BlkTMrkXcbDw5gh7G14T6QTJgD9BPOwcPXa%2FBAwqs95To2F%2BwAYl4gbMjlPNL1lpTSmNf6EifBRgE3I9CZlmdDJH6uwPMKz8S1ueO90LZ%2FSuwnQjDywANShuNCXxJzCsWwM55bQUnlqnLLWUADrdK4jXb3FKZFaq%2FH5%2Bl%2FEH32XgSoKKbqUOFNSl&X-Amz-Signature=c24bd74cd78ee7d3f34561326dc80c4b9aec897d1cb6523f8d627e5230631198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXIWIPB%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlq12lL2EzYQtpEQX%2BtAFjkcS2fNBJ%2FfTsnZOO46aJUAiBS3AeNjfr0YPJk%2BDGuvQPi1zyq8M70mispz1JDswcHBCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMTiIPV0PoSEydhFdmKtwD1AM%2BRce8tQEtESWH9dnc%2B%2Bp6XB74b%2FP35Cpfh4FwYFYldxi5EDOHbLmXNAUk1v0lJRbwxSmDj2vBlINCtYHv1Ovj6C3Au3MSIzrh2HZRE4DBqYbkm7G6eG1FMwxXJAyl%2Bk6miKNm9uekXLLjiCDQsWxP3rMHYge4mc3tHETyYtLxDeHHdhjjd1%2BjcACUdLrawiCjBEMYZIsrvsTaCgCfpnyDIuTXky6TqpmGnJygELgXf0Pz6F0%2BLBIUGjj1nt4MzyxuwGBPZd6Ktz%2FmOu5isyTzK1u9aq7zmEnf4rjPIBl6d6I5EPrZsaLNRM39KwhWyQBzHSzF8m12lVaJQurRG5yn38JoPT%2BZfCVV2hgS7YZgcyJgrE3XwQ0ZCRwxVP36UAhsOFV6%2BXP1JtNTHBQvbbyVgYHCLr%2FEpTZ61hjxIW4yEyh3m8CFZtoTdLPV1tqlsm3HMw53u6NBT9VidtNtQV6oqhSUziqm%2B3TNs9U7B%2BYpznyni0mcar8DrsTG5nJsZPQtxWdzi8rWK537Ss5gLpdWyIPMi%2BLSuqQ1kRWojSR4WiywOdnetIXygMPn8m6OSQaoDpwEOQ05eajWbqSKD8uRHzfQ8Bryu5bDW%2FpX3vifXdUpJysESViSQ9owp5ywywY6pgEvHL3zVJX192H7FurOeYGOMYCOOr%2Ff5uB6sd2zfQV0210YYyNmiJ81HOjlBLDkmuusZ5dttQC6am2jBU72Urd6Hlqg%2FQXiChhY9ZgFDxxul%2B9FQhqnQ%2F3JMK1MiI8NifkkyNs%2BGLxCnbY3nvth7lvTypytKUBpnpHqBmEhZsIcRS6zyFDfshMA%2FPOwl92kJP3J8%2BjkKBzwzGUKwyEe6XRVG%2FvxTrbb&X-Amz-Signature=c8bf62ad4632944e225bac842c0894c56c893ca65dd2a76e46d4d93e6621aa0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXIWIPB%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlq12lL2EzYQtpEQX%2BtAFjkcS2fNBJ%2FfTsnZOO46aJUAiBS3AeNjfr0YPJk%2BDGuvQPi1zyq8M70mispz1JDswcHBCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMTiIPV0PoSEydhFdmKtwD1AM%2BRce8tQEtESWH9dnc%2B%2Bp6XB74b%2FP35Cpfh4FwYFYldxi5EDOHbLmXNAUk1v0lJRbwxSmDj2vBlINCtYHv1Ovj6C3Au3MSIzrh2HZRE4DBqYbkm7G6eG1FMwxXJAyl%2Bk6miKNm9uekXLLjiCDQsWxP3rMHYge4mc3tHETyYtLxDeHHdhjjd1%2BjcACUdLrawiCjBEMYZIsrvsTaCgCfpnyDIuTXky6TqpmGnJygELgXf0Pz6F0%2BLBIUGjj1nt4MzyxuwGBPZd6Ktz%2FmOu5isyTzK1u9aq7zmEnf4rjPIBl6d6I5EPrZsaLNRM39KwhWyQBzHSzF8m12lVaJQurRG5yn38JoPT%2BZfCVV2hgS7YZgcyJgrE3XwQ0ZCRwxVP36UAhsOFV6%2BXP1JtNTHBQvbbyVgYHCLr%2FEpTZ61hjxIW4yEyh3m8CFZtoTdLPV1tqlsm3HMw53u6NBT9VidtNtQV6oqhSUziqm%2B3TNs9U7B%2BYpznyni0mcar8DrsTG5nJsZPQtxWdzi8rWK537Ss5gLpdWyIPMi%2BLSuqQ1kRWojSR4WiywOdnetIXygMPn8m6OSQaoDpwEOQ05eajWbqSKD8uRHzfQ8Bryu5bDW%2FpX3vifXdUpJysESViSQ9owp5ywywY6pgEvHL3zVJX192H7FurOeYGOMYCOOr%2Ff5uB6sd2zfQV0210YYyNmiJ81HOjlBLDkmuusZ5dttQC6am2jBU72Urd6Hlqg%2FQXiChhY9ZgFDxxul%2B9FQhqnQ%2F3JMK1MiI8NifkkyNs%2BGLxCnbY3nvth7lvTypytKUBpnpHqBmEhZsIcRS6zyFDfshMA%2FPOwl92kJP3J8%2BjkKBzwzGUKwyEe6XRVG%2FvxTrbb&X-Amz-Signature=0483f0b1b93945816c7b6b4510619be0189df727810253a117d6c1d1443b2f04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXIWIPB%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlq12lL2EzYQtpEQX%2BtAFjkcS2fNBJ%2FfTsnZOO46aJUAiBS3AeNjfr0YPJk%2BDGuvQPi1zyq8M70mispz1JDswcHBCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMTiIPV0PoSEydhFdmKtwD1AM%2BRce8tQEtESWH9dnc%2B%2Bp6XB74b%2FP35Cpfh4FwYFYldxi5EDOHbLmXNAUk1v0lJRbwxSmDj2vBlINCtYHv1Ovj6C3Au3MSIzrh2HZRE4DBqYbkm7G6eG1FMwxXJAyl%2Bk6miKNm9uekXLLjiCDQsWxP3rMHYge4mc3tHETyYtLxDeHHdhjjd1%2BjcACUdLrawiCjBEMYZIsrvsTaCgCfpnyDIuTXky6TqpmGnJygELgXf0Pz6F0%2BLBIUGjj1nt4MzyxuwGBPZd6Ktz%2FmOu5isyTzK1u9aq7zmEnf4rjPIBl6d6I5EPrZsaLNRM39KwhWyQBzHSzF8m12lVaJQurRG5yn38JoPT%2BZfCVV2hgS7YZgcyJgrE3XwQ0ZCRwxVP36UAhsOFV6%2BXP1JtNTHBQvbbyVgYHCLr%2FEpTZ61hjxIW4yEyh3m8CFZtoTdLPV1tqlsm3HMw53u6NBT9VidtNtQV6oqhSUziqm%2B3TNs9U7B%2BYpznyni0mcar8DrsTG5nJsZPQtxWdzi8rWK537Ss5gLpdWyIPMi%2BLSuqQ1kRWojSR4WiywOdnetIXygMPn8m6OSQaoDpwEOQ05eajWbqSKD8uRHzfQ8Bryu5bDW%2FpX3vifXdUpJysESViSQ9owp5ywywY6pgEvHL3zVJX192H7FurOeYGOMYCOOr%2Ff5uB6sd2zfQV0210YYyNmiJ81HOjlBLDkmuusZ5dttQC6am2jBU72Urd6Hlqg%2FQXiChhY9ZgFDxxul%2B9FQhqnQ%2F3JMK1MiI8NifkkyNs%2BGLxCnbY3nvth7lvTypytKUBpnpHqBmEhZsIcRS6zyFDfshMA%2FPOwl92kJP3J8%2BjkKBzwzGUKwyEe6XRVG%2FvxTrbb&X-Amz-Signature=a91da74bf14baceeeede01942f8cc5e2464b98e7abe32e4d9675deac6144327a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXIWIPB%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlq12lL2EzYQtpEQX%2BtAFjkcS2fNBJ%2FfTsnZOO46aJUAiBS3AeNjfr0YPJk%2BDGuvQPi1zyq8M70mispz1JDswcHBCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMTiIPV0PoSEydhFdmKtwD1AM%2BRce8tQEtESWH9dnc%2B%2Bp6XB74b%2FP35Cpfh4FwYFYldxi5EDOHbLmXNAUk1v0lJRbwxSmDj2vBlINCtYHv1Ovj6C3Au3MSIzrh2HZRE4DBqYbkm7G6eG1FMwxXJAyl%2Bk6miKNm9uekXLLjiCDQsWxP3rMHYge4mc3tHETyYtLxDeHHdhjjd1%2BjcACUdLrawiCjBEMYZIsrvsTaCgCfpnyDIuTXky6TqpmGnJygELgXf0Pz6F0%2BLBIUGjj1nt4MzyxuwGBPZd6Ktz%2FmOu5isyTzK1u9aq7zmEnf4rjPIBl6d6I5EPrZsaLNRM39KwhWyQBzHSzF8m12lVaJQurRG5yn38JoPT%2BZfCVV2hgS7YZgcyJgrE3XwQ0ZCRwxVP36UAhsOFV6%2BXP1JtNTHBQvbbyVgYHCLr%2FEpTZ61hjxIW4yEyh3m8CFZtoTdLPV1tqlsm3HMw53u6NBT9VidtNtQV6oqhSUziqm%2B3TNs9U7B%2BYpznyni0mcar8DrsTG5nJsZPQtxWdzi8rWK537Ss5gLpdWyIPMi%2BLSuqQ1kRWojSR4WiywOdnetIXygMPn8m6OSQaoDpwEOQ05eajWbqSKD8uRHzfQ8Bryu5bDW%2FpX3vifXdUpJysESViSQ9owp5ywywY6pgEvHL3zVJX192H7FurOeYGOMYCOOr%2Ff5uB6sd2zfQV0210YYyNmiJ81HOjlBLDkmuusZ5dttQC6am2jBU72Urd6Hlqg%2FQXiChhY9ZgFDxxul%2B9FQhqnQ%2F3JMK1MiI8NifkkyNs%2BGLxCnbY3nvth7lvTypytKUBpnpHqBmEhZsIcRS6zyFDfshMA%2FPOwl92kJP3J8%2BjkKBzwzGUKwyEe6XRVG%2FvxTrbb&X-Amz-Signature=28e510b3dd8b25d59baa92239b8d48a88efda5a36833b8cda76b8e28dea8ca81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXIWIPB%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlq12lL2EzYQtpEQX%2BtAFjkcS2fNBJ%2FfTsnZOO46aJUAiBS3AeNjfr0YPJk%2BDGuvQPi1zyq8M70mispz1JDswcHBCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMTiIPV0PoSEydhFdmKtwD1AM%2BRce8tQEtESWH9dnc%2B%2Bp6XB74b%2FP35Cpfh4FwYFYldxi5EDOHbLmXNAUk1v0lJRbwxSmDj2vBlINCtYHv1Ovj6C3Au3MSIzrh2HZRE4DBqYbkm7G6eG1FMwxXJAyl%2Bk6miKNm9uekXLLjiCDQsWxP3rMHYge4mc3tHETyYtLxDeHHdhjjd1%2BjcACUdLrawiCjBEMYZIsrvsTaCgCfpnyDIuTXky6TqpmGnJygELgXf0Pz6F0%2BLBIUGjj1nt4MzyxuwGBPZd6Ktz%2FmOu5isyTzK1u9aq7zmEnf4rjPIBl6d6I5EPrZsaLNRM39KwhWyQBzHSzF8m12lVaJQurRG5yn38JoPT%2BZfCVV2hgS7YZgcyJgrE3XwQ0ZCRwxVP36UAhsOFV6%2BXP1JtNTHBQvbbyVgYHCLr%2FEpTZ61hjxIW4yEyh3m8CFZtoTdLPV1tqlsm3HMw53u6NBT9VidtNtQV6oqhSUziqm%2B3TNs9U7B%2BYpznyni0mcar8DrsTG5nJsZPQtxWdzi8rWK537Ss5gLpdWyIPMi%2BLSuqQ1kRWojSR4WiywOdnetIXygMPn8m6OSQaoDpwEOQ05eajWbqSKD8uRHzfQ8Bryu5bDW%2FpX3vifXdUpJysESViSQ9owp5ywywY6pgEvHL3zVJX192H7FurOeYGOMYCOOr%2Ff5uB6sd2zfQV0210YYyNmiJ81HOjlBLDkmuusZ5dttQC6am2jBU72Urd6Hlqg%2FQXiChhY9ZgFDxxul%2B9FQhqnQ%2F3JMK1MiI8NifkkyNs%2BGLxCnbY3nvth7lvTypytKUBpnpHqBmEhZsIcRS6zyFDfshMA%2FPOwl92kJP3J8%2BjkKBzwzGUKwyEe6XRVG%2FvxTrbb&X-Amz-Signature=af0b95decf9ba7e954e9bf3af60d4e52dde3f25657bf9d1415b2558aade57bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXIWIPB%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlq12lL2EzYQtpEQX%2BtAFjkcS2fNBJ%2FfTsnZOO46aJUAiBS3AeNjfr0YPJk%2BDGuvQPi1zyq8M70mispz1JDswcHBCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMTiIPV0PoSEydhFdmKtwD1AM%2BRce8tQEtESWH9dnc%2B%2Bp6XB74b%2FP35Cpfh4FwYFYldxi5EDOHbLmXNAUk1v0lJRbwxSmDj2vBlINCtYHv1Ovj6C3Au3MSIzrh2HZRE4DBqYbkm7G6eG1FMwxXJAyl%2Bk6miKNm9uekXLLjiCDQsWxP3rMHYge4mc3tHETyYtLxDeHHdhjjd1%2BjcACUdLrawiCjBEMYZIsrvsTaCgCfpnyDIuTXky6TqpmGnJygELgXf0Pz6F0%2BLBIUGjj1nt4MzyxuwGBPZd6Ktz%2FmOu5isyTzK1u9aq7zmEnf4rjPIBl6d6I5EPrZsaLNRM39KwhWyQBzHSzF8m12lVaJQurRG5yn38JoPT%2BZfCVV2hgS7YZgcyJgrE3XwQ0ZCRwxVP36UAhsOFV6%2BXP1JtNTHBQvbbyVgYHCLr%2FEpTZ61hjxIW4yEyh3m8CFZtoTdLPV1tqlsm3HMw53u6NBT9VidtNtQV6oqhSUziqm%2B3TNs9U7B%2BYpznyni0mcar8DrsTG5nJsZPQtxWdzi8rWK537Ss5gLpdWyIPMi%2BLSuqQ1kRWojSR4WiywOdnetIXygMPn8m6OSQaoDpwEOQ05eajWbqSKD8uRHzfQ8Bryu5bDW%2FpX3vifXdUpJysESViSQ9owp5ywywY6pgEvHL3zVJX192H7FurOeYGOMYCOOr%2Ff5uB6sd2zfQV0210YYyNmiJ81HOjlBLDkmuusZ5dttQC6am2jBU72Urd6Hlqg%2FQXiChhY9ZgFDxxul%2B9FQhqnQ%2F3JMK1MiI8NifkkyNs%2BGLxCnbY3nvth7lvTypytKUBpnpHqBmEhZsIcRS6zyFDfshMA%2FPOwl92kJP3J8%2BjkKBzwzGUKwyEe6XRVG%2FvxTrbb&X-Amz-Signature=67c1c35feb89ce964c5236b81821bdd34cd0c675051eee688acdc5d615304e64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


