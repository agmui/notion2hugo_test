---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-07-30T06:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-07-30T06:24:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZOVU2Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtpH9Ems%2F5909RxvGycg2%2BqnJ2spqF%2Bma9t5jGVLLJSgIhAKxGjF67pf67XHKT7X6pWYyrQOGl90VWKEf8cZBGQGEdKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfMgMMqmmNsiF5bvMq3ANALgsJPqb9DsnKg0pMLN8TpNOYwscGAqR2tnQn%2FiI3LionOaynpdeJq%2FPAQ0AHEW8802WLdguRueFiY3WPHCGNERuUzh813vUewnKVLsQRULdoz33SFgRnq2MBBby5p9N%2BGTgi0moQvz%2BV3fY1GX9RUikpwQ%2BB9bAiBWtIYjREUmlVmjlRGengoem5zrDvgY%2BcFspvpLqVesLsqrtu52bjH4wkTfUucY20VLeKqBZ8iamMVAtOGTSaTD%2Bz4w3WMR%2FkzvvKnUU7V1tL7pDn42t3G42Odd6fNtxFUc%2Flz5xIRwEc8cLBhjR0PxhKyMCWxgoro7NSj09MbWQstgxexiC9VKCFzY2fs%2FOU4tmNx1KxzAJdhhnB3IoFgFU7n0AaD0CVN7vALwskIf%2FhzVjQYddoVQPlCVSVrmNZIm8KHrKUGybnWe8sTNFypBIAahgaPwgQBkPNkk2fst1RH%2FIqATD%2FhInfJfi4WRrRvMuTFD1CfCOLRfBtwaRj62ctLtXD5yJBHg%2FPsmMOAecKka8mO0d%2FgnIo1mblkZR5d7CxktSA1W8uDoD9HTB%2FgeUina5nFpZOo9%2FPScXZsGTeSSY46auqEOP7cB1DD53J%2FSFJNBmbPFnWay9N2HeE178GkTDXwafEBjqkAUeouyIF3ZAUFLxhkN34OP%2BLnDS3Wmdo%2FFw0Fa%2BiDRQdbwWcQNDPPLNjOilTgbFhQOtkS2VHfaJnCPotXRASo2E955nt9LDcbF7AzlcO%2Fl6vta8ywsNnsefHNMvLE2YdMkNVu1cj8UkZwKot40lyF%2FOZlSqLYMUGsQ0Yq6SBuSwF73c6zi9lwPmz7QR5obLY9Myo5Mz%2FrTCBGla7moZRlSbHQljN&X-Amz-Signature=97b89c0e6829021648413c10e482050cf027ce4f5e0510240b49b53d13ae70a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**               |
| --------------- | ---------------------- |
| `/joint_states` | sensor_msg/JointState  |
| `/odom`         | nav_msgs/Odometry      |
| `/tf`           | simulated robot joints |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**         | **Type** |
| ---------------- | -------- |
| `config_file`    | file     |
| `world_sdf_file` | file     |

{{< /table >}}

#### description:

Simulates a whole robot and world to debug and test quickly

{{% /alert %}}

In the last guide  was what our nodes looked like

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZOVU2Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtpH9Ems%2F5909RxvGycg2%2BqnJ2spqF%2Bma9t5jGVLLJSgIhAKxGjF67pf67XHKT7X6pWYyrQOGl90VWKEf8cZBGQGEdKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfMgMMqmmNsiF5bvMq3ANALgsJPqb9DsnKg0pMLN8TpNOYwscGAqR2tnQn%2FiI3LionOaynpdeJq%2FPAQ0AHEW8802WLdguRueFiY3WPHCGNERuUzh813vUewnKVLsQRULdoz33SFgRnq2MBBby5p9N%2BGTgi0moQvz%2BV3fY1GX9RUikpwQ%2BB9bAiBWtIYjREUmlVmjlRGengoem5zrDvgY%2BcFspvpLqVesLsqrtu52bjH4wkTfUucY20VLeKqBZ8iamMVAtOGTSaTD%2Bz4w3WMR%2FkzvvKnUU7V1tL7pDn42t3G42Odd6fNtxFUc%2Flz5xIRwEc8cLBhjR0PxhKyMCWxgoro7NSj09MbWQstgxexiC9VKCFzY2fs%2FOU4tmNx1KxzAJdhhnB3IoFgFU7n0AaD0CVN7vALwskIf%2FhzVjQYddoVQPlCVSVrmNZIm8KHrKUGybnWe8sTNFypBIAahgaPwgQBkPNkk2fst1RH%2FIqATD%2FhInfJfi4WRrRvMuTFD1CfCOLRfBtwaRj62ctLtXD5yJBHg%2FPsmMOAecKka8mO0d%2FgnIo1mblkZR5d7CxktSA1W8uDoD9HTB%2FgeUina5nFpZOo9%2FPScXZsGTeSSY46auqEOP7cB1DD53J%2FSFJNBmbPFnWay9N2HeE178GkTDXwafEBjqkAUeouyIF3ZAUFLxhkN34OP%2BLnDS3Wmdo%2FFw0Fa%2BiDRQdbwWcQNDPPLNjOilTgbFhQOtkS2VHfaJnCPotXRASo2E955nt9LDcbF7AzlcO%2Fl6vta8ywsNnsefHNMvLE2YdMkNVu1cj8UkZwKot40lyF%2FOZlSqLYMUGsQ0Yq6SBuSwF73c6zi9lwPmz7QR5obLY9Myo5Mz%2FrTCBGla7moZRlSbHQljN&X-Amz-Signature=4cc1124c9bf444bf3b64b39c34c9d287f4233973592c81e98b0d8e015981b503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZOVU2Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtpH9Ems%2F5909RxvGycg2%2BqnJ2spqF%2Bma9t5jGVLLJSgIhAKxGjF67pf67XHKT7X6pWYyrQOGl90VWKEf8cZBGQGEdKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfMgMMqmmNsiF5bvMq3ANALgsJPqb9DsnKg0pMLN8TpNOYwscGAqR2tnQn%2FiI3LionOaynpdeJq%2FPAQ0AHEW8802WLdguRueFiY3WPHCGNERuUzh813vUewnKVLsQRULdoz33SFgRnq2MBBby5p9N%2BGTgi0moQvz%2BV3fY1GX9RUikpwQ%2BB9bAiBWtIYjREUmlVmjlRGengoem5zrDvgY%2BcFspvpLqVesLsqrtu52bjH4wkTfUucY20VLeKqBZ8iamMVAtOGTSaTD%2Bz4w3WMR%2FkzvvKnUU7V1tL7pDn42t3G42Odd6fNtxFUc%2Flz5xIRwEc8cLBhjR0PxhKyMCWxgoro7NSj09MbWQstgxexiC9VKCFzY2fs%2FOU4tmNx1KxzAJdhhnB3IoFgFU7n0AaD0CVN7vALwskIf%2FhzVjQYddoVQPlCVSVrmNZIm8KHrKUGybnWe8sTNFypBIAahgaPwgQBkPNkk2fst1RH%2FIqATD%2FhInfJfi4WRrRvMuTFD1CfCOLRfBtwaRj62ctLtXD5yJBHg%2FPsmMOAecKka8mO0d%2FgnIo1mblkZR5d7CxktSA1W8uDoD9HTB%2FgeUina5nFpZOo9%2FPScXZsGTeSSY46auqEOP7cB1DD53J%2FSFJNBmbPFnWay9N2HeE178GkTDXwafEBjqkAUeouyIF3ZAUFLxhkN34OP%2BLnDS3Wmdo%2FFw0Fa%2BiDRQdbwWcQNDPPLNjOilTgbFhQOtkS2VHfaJnCPotXRASo2E955nt9LDcbF7AzlcO%2Fl6vta8ywsNnsefHNMvLE2YdMkNVu1cj8UkZwKot40lyF%2FOZlSqLYMUGsQ0Yq6SBuSwF73c6zi9lwPmz7QR5obLY9Myo5Mz%2FrTCBGla7moZRlSbHQljN&X-Amz-Signature=667e50c5391db4687383643859926f37a73eb164242a1b2f7e08188ddfa1b016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZOVU2Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtpH9Ems%2F5909RxvGycg2%2BqnJ2spqF%2Bma9t5jGVLLJSgIhAKxGjF67pf67XHKT7X6pWYyrQOGl90VWKEf8cZBGQGEdKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfMgMMqmmNsiF5bvMq3ANALgsJPqb9DsnKg0pMLN8TpNOYwscGAqR2tnQn%2FiI3LionOaynpdeJq%2FPAQ0AHEW8802WLdguRueFiY3WPHCGNERuUzh813vUewnKVLsQRULdoz33SFgRnq2MBBby5p9N%2BGTgi0moQvz%2BV3fY1GX9RUikpwQ%2BB9bAiBWtIYjREUmlVmjlRGengoem5zrDvgY%2BcFspvpLqVesLsqrtu52bjH4wkTfUucY20VLeKqBZ8iamMVAtOGTSaTD%2Bz4w3WMR%2FkzvvKnUU7V1tL7pDn42t3G42Odd6fNtxFUc%2Flz5xIRwEc8cLBhjR0PxhKyMCWxgoro7NSj09MbWQstgxexiC9VKCFzY2fs%2FOU4tmNx1KxzAJdhhnB3IoFgFU7n0AaD0CVN7vALwskIf%2FhzVjQYddoVQPlCVSVrmNZIm8KHrKUGybnWe8sTNFypBIAahgaPwgQBkPNkk2fst1RH%2FIqATD%2FhInfJfi4WRrRvMuTFD1CfCOLRfBtwaRj62ctLtXD5yJBHg%2FPsmMOAecKka8mO0d%2FgnIo1mblkZR5d7CxktSA1W8uDoD9HTB%2FgeUina5nFpZOo9%2FPScXZsGTeSSY46auqEOP7cB1DD53J%2FSFJNBmbPFnWay9N2HeE178GkTDXwafEBjqkAUeouyIF3ZAUFLxhkN34OP%2BLnDS3Wmdo%2FFw0Fa%2BiDRQdbwWcQNDPPLNjOilTgbFhQOtkS2VHfaJnCPotXRASo2E955nt9LDcbF7AzlcO%2Fl6vta8ywsNnsefHNMvLE2YdMkNVu1cj8UkZwKot40lyF%2FOZlSqLYMUGsQ0Yq6SBuSwF73c6zi9lwPmz7QR5obLY9Myo5Mz%2FrTCBGla7moZRlSbHQljN&X-Amz-Signature=0a2e2219b7b2abc2ae225c069008458ccc3cc6d884899fb6cdf2f52c0e718a26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZOVU2Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtpH9Ems%2F5909RxvGycg2%2BqnJ2spqF%2Bma9t5jGVLLJSgIhAKxGjF67pf67XHKT7X6pWYyrQOGl90VWKEf8cZBGQGEdKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfMgMMqmmNsiF5bvMq3ANALgsJPqb9DsnKg0pMLN8TpNOYwscGAqR2tnQn%2FiI3LionOaynpdeJq%2FPAQ0AHEW8802WLdguRueFiY3WPHCGNERuUzh813vUewnKVLsQRULdoz33SFgRnq2MBBby5p9N%2BGTgi0moQvz%2BV3fY1GX9RUikpwQ%2BB9bAiBWtIYjREUmlVmjlRGengoem5zrDvgY%2BcFspvpLqVesLsqrtu52bjH4wkTfUucY20VLeKqBZ8iamMVAtOGTSaTD%2Bz4w3WMR%2FkzvvKnUU7V1tL7pDn42t3G42Odd6fNtxFUc%2Flz5xIRwEc8cLBhjR0PxhKyMCWxgoro7NSj09MbWQstgxexiC9VKCFzY2fs%2FOU4tmNx1KxzAJdhhnB3IoFgFU7n0AaD0CVN7vALwskIf%2FhzVjQYddoVQPlCVSVrmNZIm8KHrKUGybnWe8sTNFypBIAahgaPwgQBkPNkk2fst1RH%2FIqATD%2FhInfJfi4WRrRvMuTFD1CfCOLRfBtwaRj62ctLtXD5yJBHg%2FPsmMOAecKka8mO0d%2FgnIo1mblkZR5d7CxktSA1W8uDoD9HTB%2FgeUina5nFpZOo9%2FPScXZsGTeSSY46auqEOP7cB1DD53J%2FSFJNBmbPFnWay9N2HeE178GkTDXwafEBjqkAUeouyIF3ZAUFLxhkN34OP%2BLnDS3Wmdo%2FFw0Fa%2BiDRQdbwWcQNDPPLNjOilTgbFhQOtkS2VHfaJnCPotXRASo2E955nt9LDcbF7AzlcO%2Fl6vta8ywsNnsefHNMvLE2YdMkNVu1cj8UkZwKot40lyF%2FOZlSqLYMUGsQ0Yq6SBuSwF73c6zi9lwPmz7QR5obLY9Myo5Mz%2FrTCBGla7moZRlSbHQljN&X-Amz-Signature=cfaa49d6207a7d78c8f6a89d0114b36cdd65d361ee1debdba37d102b2495d5f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZOVU2Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtpH9Ems%2F5909RxvGycg2%2BqnJ2spqF%2Bma9t5jGVLLJSgIhAKxGjF67pf67XHKT7X6pWYyrQOGl90VWKEf8cZBGQGEdKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfMgMMqmmNsiF5bvMq3ANALgsJPqb9DsnKg0pMLN8TpNOYwscGAqR2tnQn%2FiI3LionOaynpdeJq%2FPAQ0AHEW8802WLdguRueFiY3WPHCGNERuUzh813vUewnKVLsQRULdoz33SFgRnq2MBBby5p9N%2BGTgi0moQvz%2BV3fY1GX9RUikpwQ%2BB9bAiBWtIYjREUmlVmjlRGengoem5zrDvgY%2BcFspvpLqVesLsqrtu52bjH4wkTfUucY20VLeKqBZ8iamMVAtOGTSaTD%2Bz4w3WMR%2FkzvvKnUU7V1tL7pDn42t3G42Odd6fNtxFUc%2Flz5xIRwEc8cLBhjR0PxhKyMCWxgoro7NSj09MbWQstgxexiC9VKCFzY2fs%2FOU4tmNx1KxzAJdhhnB3IoFgFU7n0AaD0CVN7vALwskIf%2FhzVjQYddoVQPlCVSVrmNZIm8KHrKUGybnWe8sTNFypBIAahgaPwgQBkPNkk2fst1RH%2FIqATD%2FhInfJfi4WRrRvMuTFD1CfCOLRfBtwaRj62ctLtXD5yJBHg%2FPsmMOAecKka8mO0d%2FgnIo1mblkZR5d7CxktSA1W8uDoD9HTB%2FgeUina5nFpZOo9%2FPScXZsGTeSSY46auqEOP7cB1DD53J%2FSFJNBmbPFnWay9N2HeE178GkTDXwafEBjqkAUeouyIF3ZAUFLxhkN34OP%2BLnDS3Wmdo%2FFw0Fa%2BiDRQdbwWcQNDPPLNjOilTgbFhQOtkS2VHfaJnCPotXRASo2E955nt9LDcbF7AzlcO%2Fl6vta8ywsNnsefHNMvLE2YdMkNVu1cj8UkZwKot40lyF%2FOZlSqLYMUGsQ0Yq6SBuSwF73c6zi9lwPmz7QR5obLY9Myo5Mz%2FrTCBGla7moZRlSbHQljN&X-Amz-Signature=1d8dabbf54993e117f1af2b88c08428022b47b0af52f99775e4378fc8e5c9f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZOVU2Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtpH9Ems%2F5909RxvGycg2%2BqnJ2spqF%2Bma9t5jGVLLJSgIhAKxGjF67pf67XHKT7X6pWYyrQOGl90VWKEf8cZBGQGEdKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfMgMMqmmNsiF5bvMq3ANALgsJPqb9DsnKg0pMLN8TpNOYwscGAqR2tnQn%2FiI3LionOaynpdeJq%2FPAQ0AHEW8802WLdguRueFiY3WPHCGNERuUzh813vUewnKVLsQRULdoz33SFgRnq2MBBby5p9N%2BGTgi0moQvz%2BV3fY1GX9RUikpwQ%2BB9bAiBWtIYjREUmlVmjlRGengoem5zrDvgY%2BcFspvpLqVesLsqrtu52bjH4wkTfUucY20VLeKqBZ8iamMVAtOGTSaTD%2Bz4w3WMR%2FkzvvKnUU7V1tL7pDn42t3G42Odd6fNtxFUc%2Flz5xIRwEc8cLBhjR0PxhKyMCWxgoro7NSj09MbWQstgxexiC9VKCFzY2fs%2FOU4tmNx1KxzAJdhhnB3IoFgFU7n0AaD0CVN7vALwskIf%2FhzVjQYddoVQPlCVSVrmNZIm8KHrKUGybnWe8sTNFypBIAahgaPwgQBkPNkk2fst1RH%2FIqATD%2FhInfJfi4WRrRvMuTFD1CfCOLRfBtwaRj62ctLtXD5yJBHg%2FPsmMOAecKka8mO0d%2FgnIo1mblkZR5d7CxktSA1W8uDoD9HTB%2FgeUina5nFpZOo9%2FPScXZsGTeSSY46auqEOP7cB1DD53J%2FSFJNBmbPFnWay9N2HeE178GkTDXwafEBjqkAUeouyIF3ZAUFLxhkN34OP%2BLnDS3Wmdo%2FFw0Fa%2BiDRQdbwWcQNDPPLNjOilTgbFhQOtkS2VHfaJnCPotXRASo2E955nt9LDcbF7AzlcO%2Fl6vta8ywsNnsefHNMvLE2YdMkNVu1cj8UkZwKot40lyF%2FOZlSqLYMUGsQ0Yq6SBuSwF73c6zi9lwPmz7QR5obLY9Myo5Mz%2FrTCBGla7moZRlSbHQljN&X-Amz-Signature=02221b4fa5f098ef2f05503b03390a089b89fa073195233a84be91f5d038ff13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZOVU2Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtpH9Ems%2F5909RxvGycg2%2BqnJ2spqF%2Bma9t5jGVLLJSgIhAKxGjF67pf67XHKT7X6pWYyrQOGl90VWKEf8cZBGQGEdKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfMgMMqmmNsiF5bvMq3ANALgsJPqb9DsnKg0pMLN8TpNOYwscGAqR2tnQn%2FiI3LionOaynpdeJq%2FPAQ0AHEW8802WLdguRueFiY3WPHCGNERuUzh813vUewnKVLsQRULdoz33SFgRnq2MBBby5p9N%2BGTgi0moQvz%2BV3fY1GX9RUikpwQ%2BB9bAiBWtIYjREUmlVmjlRGengoem5zrDvgY%2BcFspvpLqVesLsqrtu52bjH4wkTfUucY20VLeKqBZ8iamMVAtOGTSaTD%2Bz4w3WMR%2FkzvvKnUU7V1tL7pDn42t3G42Odd6fNtxFUc%2Flz5xIRwEc8cLBhjR0PxhKyMCWxgoro7NSj09MbWQstgxexiC9VKCFzY2fs%2FOU4tmNx1KxzAJdhhnB3IoFgFU7n0AaD0CVN7vALwskIf%2FhzVjQYddoVQPlCVSVrmNZIm8KHrKUGybnWe8sTNFypBIAahgaPwgQBkPNkk2fst1RH%2FIqATD%2FhInfJfi4WRrRvMuTFD1CfCOLRfBtwaRj62ctLtXD5yJBHg%2FPsmMOAecKka8mO0d%2FgnIo1mblkZR5d7CxktSA1W8uDoD9HTB%2FgeUina5nFpZOo9%2FPScXZsGTeSSY46auqEOP7cB1DD53J%2FSFJNBmbPFnWay9N2HeE178GkTDXwafEBjqkAUeouyIF3ZAUFLxhkN34OP%2BLnDS3Wmdo%2FFw0Fa%2BiDRQdbwWcQNDPPLNjOilTgbFhQOtkS2VHfaJnCPotXRASo2E955nt9LDcbF7AzlcO%2Fl6vta8ywsNnsefHNMvLE2YdMkNVu1cj8UkZwKot40lyF%2FOZlSqLYMUGsQ0Yq6SBuSwF73c6zi9lwPmz7QR5obLY9Myo5Mz%2FrTCBGla7moZRlSbHQljN&X-Amz-Signature=1cacc8a6820efdd266fe09f485e6350900e361008f8abeb8a8833562e20a2242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If you want to make a custom world here is a [guide from Articulated Robotics](https://www.youtube.com/watch?v=K4rHglJW7Hg) on how to do so

{{% /alert %}}

## Adding Gazebo to launch file

Finally to update the launch file we have to get the `bridge_config.yaml` and `my_world.sdf`

```python
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

```python
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

```python

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZOVU2Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtpH9Ems%2F5909RxvGycg2%2BqnJ2spqF%2Bma9t5jGVLLJSgIhAKxGjF67pf67XHKT7X6pWYyrQOGl90VWKEf8cZBGQGEdKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfMgMMqmmNsiF5bvMq3ANALgsJPqb9DsnKg0pMLN8TpNOYwscGAqR2tnQn%2FiI3LionOaynpdeJq%2FPAQ0AHEW8802WLdguRueFiY3WPHCGNERuUzh813vUewnKVLsQRULdoz33SFgRnq2MBBby5p9N%2BGTgi0moQvz%2BV3fY1GX9RUikpwQ%2BB9bAiBWtIYjREUmlVmjlRGengoem5zrDvgY%2BcFspvpLqVesLsqrtu52bjH4wkTfUucY20VLeKqBZ8iamMVAtOGTSaTD%2Bz4w3WMR%2FkzvvKnUU7V1tL7pDn42t3G42Odd6fNtxFUc%2Flz5xIRwEc8cLBhjR0PxhKyMCWxgoro7NSj09MbWQstgxexiC9VKCFzY2fs%2FOU4tmNx1KxzAJdhhnB3IoFgFU7n0AaD0CVN7vALwskIf%2FhzVjQYddoVQPlCVSVrmNZIm8KHrKUGybnWe8sTNFypBIAahgaPwgQBkPNkk2fst1RH%2FIqATD%2FhInfJfi4WRrRvMuTFD1CfCOLRfBtwaRj62ctLtXD5yJBHg%2FPsmMOAecKka8mO0d%2FgnIo1mblkZR5d7CxktSA1W8uDoD9HTB%2FgeUina5nFpZOo9%2FPScXZsGTeSSY46auqEOP7cB1DD53J%2FSFJNBmbPFnWay9N2HeE178GkTDXwafEBjqkAUeouyIF3ZAUFLxhkN34OP%2BLnDS3Wmdo%2FFw0Fa%2BiDRQdbwWcQNDPPLNjOilTgbFhQOtkS2VHfaJnCPotXRASo2E955nt9LDcbF7AzlcO%2Fl6vta8ywsNnsefHNMvLE2YdMkNVu1cj8UkZwKot40lyF%2FOZlSqLYMUGsQ0Yq6SBuSwF73c6zi9lwPmz7QR5obLY9Myo5Mz%2FrTCBGla7moZRlSbHQljN&X-Amz-Signature=b9404f62dba97c374b553d3dc530a02ec8ff207c82e4626aaa5fbf2cf5fd03a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZOVU2Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtpH9Ems%2F5909RxvGycg2%2BqnJ2spqF%2Bma9t5jGVLLJSgIhAKxGjF67pf67XHKT7X6pWYyrQOGl90VWKEf8cZBGQGEdKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfMgMMqmmNsiF5bvMq3ANALgsJPqb9DsnKg0pMLN8TpNOYwscGAqR2tnQn%2FiI3LionOaynpdeJq%2FPAQ0AHEW8802WLdguRueFiY3WPHCGNERuUzh813vUewnKVLsQRULdoz33SFgRnq2MBBby5p9N%2BGTgi0moQvz%2BV3fY1GX9RUikpwQ%2BB9bAiBWtIYjREUmlVmjlRGengoem5zrDvgY%2BcFspvpLqVesLsqrtu52bjH4wkTfUucY20VLeKqBZ8iamMVAtOGTSaTD%2Bz4w3WMR%2FkzvvKnUU7V1tL7pDn42t3G42Odd6fNtxFUc%2Flz5xIRwEc8cLBhjR0PxhKyMCWxgoro7NSj09MbWQstgxexiC9VKCFzY2fs%2FOU4tmNx1KxzAJdhhnB3IoFgFU7n0AaD0CVN7vALwskIf%2FhzVjQYddoVQPlCVSVrmNZIm8KHrKUGybnWe8sTNFypBIAahgaPwgQBkPNkk2fst1RH%2FIqATD%2FhInfJfi4WRrRvMuTFD1CfCOLRfBtwaRj62ctLtXD5yJBHg%2FPsmMOAecKka8mO0d%2FgnIo1mblkZR5d7CxktSA1W8uDoD9HTB%2FgeUina5nFpZOo9%2FPScXZsGTeSSY46auqEOP7cB1DD53J%2FSFJNBmbPFnWay9N2HeE178GkTDXwafEBjqkAUeouyIF3ZAUFLxhkN34OP%2BLnDS3Wmdo%2FFw0Fa%2BiDRQdbwWcQNDPPLNjOilTgbFhQOtkS2VHfaJnCPotXRASo2E955nt9LDcbF7AzlcO%2Fl6vta8ywsNnsefHNMvLE2YdMkNVu1cj8UkZwKot40lyF%2FOZlSqLYMUGsQ0Yq6SBuSwF73c6zi9lwPmz7QR5obLY9Myo5Mz%2FrTCBGla7moZRlSbHQljN&X-Amz-Signature=14e9211cc9a4315001ed2700de38df95b99c4b04f736018b5e2b965626093810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
