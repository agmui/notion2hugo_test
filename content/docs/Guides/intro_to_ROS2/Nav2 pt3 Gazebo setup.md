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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUVWZ7D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDmPPfzeK6QSlU8PhZbDeGoISGmVc15I9eOTTfzuauS5gIgAqGLqVGdfboxOtr3zNo6NHC60sZ7Hcp7dHakxfYOlQ4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDF5fhDoEsIPLhBJTUyrcAxFYXUeCJA9uN1qMHTqDDT5ofkSncTXPpNYTfmmB3t6BudBufaF1XM8Ghr3xhEDuGEHXEC%2Fv%2F1SHfaVEBqEu9XtyrVs%2Fa4Fvl%2BtA22xoroyhu6w0lVVjyDfr3PruxDP%2FtsGm10e0oVT91PdCGk9s1UB5sfxGAswlMprFujsfBHrYov0cWF5RkNp25dAK%2Fqi7CK04%2FUyLKxt1sDfOahtluRirRcaEkYsQGRKHdOkURfU0bFOviw8C6VTuzgnCX7Zho945fpa8yReGltaQbTdeau35JhSZMChivH5qm8Ucm4tZadSUUNigB1kV1VaavH6lQo8LTAd7jVVUIyrj47wpbUaTnUhFZ5G7iqxe6TZFSadum7ogQKPRvHnE%2FRlJHz0N5NvziGwE6c6xv5qJe%2F6ah3o0tJLsJgAWumyib%2FmBc3Fi4qLBNpJSqfuiAwGTi7A01veriBaFpYkAh4osgq2Id0giDPndBcrAYTv6Z4vayLSRD8fD3rIqRR7fGvJB7WUcoCZ04ZRKXfSk4ay1E8yRQ0yOW%2Fow8Q0CXnoBjJ9hTnvQvCRvSjYqgAFgZMVaPT%2FF%2BR5xmkUe%2Fr4D%2FYUayBAIfyhdMAfYhySLA79B6%2BWHn9KiVltCF97FX9zAVeY5MOmcxMQGOqUBZ1B3WjYmY7R73%2BU1YGGuWFgZBJS%2F%2Bw8BCVTRqN0EddFCVF6OoT88Nyp4%2FYrTOkuVDqBbg%2F%2F%2BhUGfQ6GrHOtMBoPpyWK0dSRXryzEm15MH%2B48GrLA%2BhoL5mqyqxKz%2Fbfjj7V0CiFegN0SdRDR%2BaognDh6r81CYQKGZ8H8TvrWWJfXcMh7f7tkFu6K8oJhBeeDtV3ODS2J%2Bfgv2V%2B5YuvyR3uczD0b&X-Amz-Signature=59a3a65a4db4cdc1266fcdc47da8d9c32949966b8f7521861a3e6f3b9458739b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUVWZ7D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDmPPfzeK6QSlU8PhZbDeGoISGmVc15I9eOTTfzuauS5gIgAqGLqVGdfboxOtr3zNo6NHC60sZ7Hcp7dHakxfYOlQ4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDF5fhDoEsIPLhBJTUyrcAxFYXUeCJA9uN1qMHTqDDT5ofkSncTXPpNYTfmmB3t6BudBufaF1XM8Ghr3xhEDuGEHXEC%2Fv%2F1SHfaVEBqEu9XtyrVs%2Fa4Fvl%2BtA22xoroyhu6w0lVVjyDfr3PruxDP%2FtsGm10e0oVT91PdCGk9s1UB5sfxGAswlMprFujsfBHrYov0cWF5RkNp25dAK%2Fqi7CK04%2FUyLKxt1sDfOahtluRirRcaEkYsQGRKHdOkURfU0bFOviw8C6VTuzgnCX7Zho945fpa8yReGltaQbTdeau35JhSZMChivH5qm8Ucm4tZadSUUNigB1kV1VaavH6lQo8LTAd7jVVUIyrj47wpbUaTnUhFZ5G7iqxe6TZFSadum7ogQKPRvHnE%2FRlJHz0N5NvziGwE6c6xv5qJe%2F6ah3o0tJLsJgAWumyib%2FmBc3Fi4qLBNpJSqfuiAwGTi7A01veriBaFpYkAh4osgq2Id0giDPndBcrAYTv6Z4vayLSRD8fD3rIqRR7fGvJB7WUcoCZ04ZRKXfSk4ay1E8yRQ0yOW%2Fow8Q0CXnoBjJ9hTnvQvCRvSjYqgAFgZMVaPT%2FF%2BR5xmkUe%2Fr4D%2FYUayBAIfyhdMAfYhySLA79B6%2BWHn9KiVltCF97FX9zAVeY5MOmcxMQGOqUBZ1B3WjYmY7R73%2BU1YGGuWFgZBJS%2F%2Bw8BCVTRqN0EddFCVF6OoT88Nyp4%2FYrTOkuVDqBbg%2F%2F%2BhUGfQ6GrHOtMBoPpyWK0dSRXryzEm15MH%2B48GrLA%2BhoL5mqyqxKz%2Fbfjj7V0CiFegN0SdRDR%2BaognDh6r81CYQKGZ8H8TvrWWJfXcMh7f7tkFu6K8oJhBeeDtV3ODS2J%2Bfgv2V%2B5YuvyR3uczD0b&X-Amz-Signature=555c8ec5a545843c824d4b1fe1f707cde308c96fce39932a4032ac8e63a13a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUVWZ7D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDmPPfzeK6QSlU8PhZbDeGoISGmVc15I9eOTTfzuauS5gIgAqGLqVGdfboxOtr3zNo6NHC60sZ7Hcp7dHakxfYOlQ4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDF5fhDoEsIPLhBJTUyrcAxFYXUeCJA9uN1qMHTqDDT5ofkSncTXPpNYTfmmB3t6BudBufaF1XM8Ghr3xhEDuGEHXEC%2Fv%2F1SHfaVEBqEu9XtyrVs%2Fa4Fvl%2BtA22xoroyhu6w0lVVjyDfr3PruxDP%2FtsGm10e0oVT91PdCGk9s1UB5sfxGAswlMprFujsfBHrYov0cWF5RkNp25dAK%2Fqi7CK04%2FUyLKxt1sDfOahtluRirRcaEkYsQGRKHdOkURfU0bFOviw8C6VTuzgnCX7Zho945fpa8yReGltaQbTdeau35JhSZMChivH5qm8Ucm4tZadSUUNigB1kV1VaavH6lQo8LTAd7jVVUIyrj47wpbUaTnUhFZ5G7iqxe6TZFSadum7ogQKPRvHnE%2FRlJHz0N5NvziGwE6c6xv5qJe%2F6ah3o0tJLsJgAWumyib%2FmBc3Fi4qLBNpJSqfuiAwGTi7A01veriBaFpYkAh4osgq2Id0giDPndBcrAYTv6Z4vayLSRD8fD3rIqRR7fGvJB7WUcoCZ04ZRKXfSk4ay1E8yRQ0yOW%2Fow8Q0CXnoBjJ9hTnvQvCRvSjYqgAFgZMVaPT%2FF%2BR5xmkUe%2Fr4D%2FYUayBAIfyhdMAfYhySLA79B6%2BWHn9KiVltCF97FX9zAVeY5MOmcxMQGOqUBZ1B3WjYmY7R73%2BU1YGGuWFgZBJS%2F%2Bw8BCVTRqN0EddFCVF6OoT88Nyp4%2FYrTOkuVDqBbg%2F%2F%2BhUGfQ6GrHOtMBoPpyWK0dSRXryzEm15MH%2B48GrLA%2BhoL5mqyqxKz%2Fbfjj7V0CiFegN0SdRDR%2BaognDh6r81CYQKGZ8H8TvrWWJfXcMh7f7tkFu6K8oJhBeeDtV3ODS2J%2Bfgv2V%2B5YuvyR3uczD0b&X-Amz-Signature=1b6247b98a55bc09d7bfb48259102d0cbf123f854756d83d40bab0b5af629e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUVWZ7D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDmPPfzeK6QSlU8PhZbDeGoISGmVc15I9eOTTfzuauS5gIgAqGLqVGdfboxOtr3zNo6NHC60sZ7Hcp7dHakxfYOlQ4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDF5fhDoEsIPLhBJTUyrcAxFYXUeCJA9uN1qMHTqDDT5ofkSncTXPpNYTfmmB3t6BudBufaF1XM8Ghr3xhEDuGEHXEC%2Fv%2F1SHfaVEBqEu9XtyrVs%2Fa4Fvl%2BtA22xoroyhu6w0lVVjyDfr3PruxDP%2FtsGm10e0oVT91PdCGk9s1UB5sfxGAswlMprFujsfBHrYov0cWF5RkNp25dAK%2Fqi7CK04%2FUyLKxt1sDfOahtluRirRcaEkYsQGRKHdOkURfU0bFOviw8C6VTuzgnCX7Zho945fpa8yReGltaQbTdeau35JhSZMChivH5qm8Ucm4tZadSUUNigB1kV1VaavH6lQo8LTAd7jVVUIyrj47wpbUaTnUhFZ5G7iqxe6TZFSadum7ogQKPRvHnE%2FRlJHz0N5NvziGwE6c6xv5qJe%2F6ah3o0tJLsJgAWumyib%2FmBc3Fi4qLBNpJSqfuiAwGTi7A01veriBaFpYkAh4osgq2Id0giDPndBcrAYTv6Z4vayLSRD8fD3rIqRR7fGvJB7WUcoCZ04ZRKXfSk4ay1E8yRQ0yOW%2Fow8Q0CXnoBjJ9hTnvQvCRvSjYqgAFgZMVaPT%2FF%2BR5xmkUe%2Fr4D%2FYUayBAIfyhdMAfYhySLA79B6%2BWHn9KiVltCF97FX9zAVeY5MOmcxMQGOqUBZ1B3WjYmY7R73%2BU1YGGuWFgZBJS%2F%2Bw8BCVTRqN0EddFCVF6OoT88Nyp4%2FYrTOkuVDqBbg%2F%2F%2BhUGfQ6GrHOtMBoPpyWK0dSRXryzEm15MH%2B48GrLA%2BhoL5mqyqxKz%2Fbfjj7V0CiFegN0SdRDR%2BaognDh6r81CYQKGZ8H8TvrWWJfXcMh7f7tkFu6K8oJhBeeDtV3ODS2J%2Bfgv2V%2B5YuvyR3uczD0b&X-Amz-Signature=6540cd9508ed5768fa837ab03cfbe57ff80be699ca86b5ad106a45f89f8e3b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6TD77S3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDI2H6paAIn25QAgNeN7pk5G5Kq7BzsW%2BqegLhkMgJIUwIhAOxaEWyXn5QUPLX4RkIN9k1AupGIZsH0NyQzXHCOkfm0Kv8DCE0QABoMNjM3NDIzMTgzODA1IgzoHf2EAgiTACmZZnAq3APn8IWB29JkzK02bwKm1NxLnoA64XXkoMa%2BHJaA%2BynHRlQwYpFOeRD%2BTptVxSE9Bia%2FbWwM%2F74JMF0m1DEq8a%2BA2U6%2BjYWJThgRLfZZ%2FhKrHOuV%2FJ0wm9h0ReS6vMgdp3%2FXMCbS1z1w66Bb%2B%2Bfp6wdStQJ0jIpsEDgd4le9IgGkHhZg4kNB%2Fjovp%2Bkb10qzuQnE3m4CErNqX3Z7V9GoIcDrfPTRib6N%2Feirspv5x%2BovYT%2B%2FcwsEC8Zq27lkh%2FyS9OOZJddKi8ESMoDYOCIyA0OxdhtqHjNbATpshxwHnyMhQjxiEdnIqFPpTk5UjYi6zKb3143g6B6dkwK90hskAjatcXTGOWXAxp65EWwIV%2FSs7T4PsKWSGA8OhVJ1p6cW2PixV9bx5E5XuYaYp%2BHPMGwq9iidYC%2B3essVjUP3DAQSQSKTOUgOjxDbclAhy4JyeDCKDgaIFHzijx6JFI%2BroWdVLakrOWh28GBMjeJOhBQhfJ%2FIARWuwGK8lm%2FuS1bcVm7UnpFevbAysHcAawMbyLkVCeHNZL1KAyfe8BODl3EfIPLQ1E0eKpPtqMWkGiY5VWQFoHKbB1oD9gA5lJlwaruevwEEDLVS0CyyO%2BgsdTfXYGd%2BTuCDfsbbiIfcojDznMTEBjqkAXy%2B6xa6PdjNAiT5Qn5zxZkHHkgJhEUPy%2FZDqcdJ%2F1%2BjNKw1db5EPSBj3xdO4l418iTV29rISJ%2FJiLt5KouRefn425couJSoFctwJk0plUbQVo7AQsTXAd57Af3VDDZj%2Bi6ssNwESp%2FO40DFOj%2F6ya4fd%2Bfd3AqIHXbSsZDjDLJJXkbrJNn8%2FNowSbpDSHuxd6mm7R28eq9weqkwwn1%2FMZ7beQ1c&X-Amz-Signature=a63f18c2cfd522455012352604d7e67a3d1b4da0e3216b1e9678990abb5bbac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUVWZ7D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDmPPfzeK6QSlU8PhZbDeGoISGmVc15I9eOTTfzuauS5gIgAqGLqVGdfboxOtr3zNo6NHC60sZ7Hcp7dHakxfYOlQ4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDF5fhDoEsIPLhBJTUyrcAxFYXUeCJA9uN1qMHTqDDT5ofkSncTXPpNYTfmmB3t6BudBufaF1XM8Ghr3xhEDuGEHXEC%2Fv%2F1SHfaVEBqEu9XtyrVs%2Fa4Fvl%2BtA22xoroyhu6w0lVVjyDfr3PruxDP%2FtsGm10e0oVT91PdCGk9s1UB5sfxGAswlMprFujsfBHrYov0cWF5RkNp25dAK%2Fqi7CK04%2FUyLKxt1sDfOahtluRirRcaEkYsQGRKHdOkURfU0bFOviw8C6VTuzgnCX7Zho945fpa8yReGltaQbTdeau35JhSZMChivH5qm8Ucm4tZadSUUNigB1kV1VaavH6lQo8LTAd7jVVUIyrj47wpbUaTnUhFZ5G7iqxe6TZFSadum7ogQKPRvHnE%2FRlJHz0N5NvziGwE6c6xv5qJe%2F6ah3o0tJLsJgAWumyib%2FmBc3Fi4qLBNpJSqfuiAwGTi7A01veriBaFpYkAh4osgq2Id0giDPndBcrAYTv6Z4vayLSRD8fD3rIqRR7fGvJB7WUcoCZ04ZRKXfSk4ay1E8yRQ0yOW%2Fow8Q0CXnoBjJ9hTnvQvCRvSjYqgAFgZMVaPT%2FF%2BR5xmkUe%2Fr4D%2FYUayBAIfyhdMAfYhySLA79B6%2BWHn9KiVltCF97FX9zAVeY5MOmcxMQGOqUBZ1B3WjYmY7R73%2BU1YGGuWFgZBJS%2F%2Bw8BCVTRqN0EddFCVF6OoT88Nyp4%2FYrTOkuVDqBbg%2F%2F%2BhUGfQ6GrHOtMBoPpyWK0dSRXryzEm15MH%2B48GrLA%2BhoL5mqyqxKz%2Fbfjj7V0CiFegN0SdRDR%2BaognDh6r81CYQKGZ8H8TvrWWJfXcMh7f7tkFu6K8oJhBeeDtV3ODS2J%2Bfgv2V%2B5YuvyR3uczD0b&X-Amz-Signature=187195bd02898b65e3f9d85eb804241b4c73d3adb058f39a70f24ad0df7ce2f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUVWZ7D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDmPPfzeK6QSlU8PhZbDeGoISGmVc15I9eOTTfzuauS5gIgAqGLqVGdfboxOtr3zNo6NHC60sZ7Hcp7dHakxfYOlQ4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDF5fhDoEsIPLhBJTUyrcAxFYXUeCJA9uN1qMHTqDDT5ofkSncTXPpNYTfmmB3t6BudBufaF1XM8Ghr3xhEDuGEHXEC%2Fv%2F1SHfaVEBqEu9XtyrVs%2Fa4Fvl%2BtA22xoroyhu6w0lVVjyDfr3PruxDP%2FtsGm10e0oVT91PdCGk9s1UB5sfxGAswlMprFujsfBHrYov0cWF5RkNp25dAK%2Fqi7CK04%2FUyLKxt1sDfOahtluRirRcaEkYsQGRKHdOkURfU0bFOviw8C6VTuzgnCX7Zho945fpa8yReGltaQbTdeau35JhSZMChivH5qm8Ucm4tZadSUUNigB1kV1VaavH6lQo8LTAd7jVVUIyrj47wpbUaTnUhFZ5G7iqxe6TZFSadum7ogQKPRvHnE%2FRlJHz0N5NvziGwE6c6xv5qJe%2F6ah3o0tJLsJgAWumyib%2FmBc3Fi4qLBNpJSqfuiAwGTi7A01veriBaFpYkAh4osgq2Id0giDPndBcrAYTv6Z4vayLSRD8fD3rIqRR7fGvJB7WUcoCZ04ZRKXfSk4ay1E8yRQ0yOW%2Fow8Q0CXnoBjJ9hTnvQvCRvSjYqgAFgZMVaPT%2FF%2BR5xmkUe%2Fr4D%2FYUayBAIfyhdMAfYhySLA79B6%2BWHn9KiVltCF97FX9zAVeY5MOmcxMQGOqUBZ1B3WjYmY7R73%2BU1YGGuWFgZBJS%2F%2Bw8BCVTRqN0EddFCVF6OoT88Nyp4%2FYrTOkuVDqBbg%2F%2F%2BhUGfQ6GrHOtMBoPpyWK0dSRXryzEm15MH%2B48GrLA%2BhoL5mqyqxKz%2Fbfjj7V0CiFegN0SdRDR%2BaognDh6r81CYQKGZ8H8TvrWWJfXcMh7f7tkFu6K8oJhBeeDtV3ODS2J%2Bfgv2V%2B5YuvyR3uczD0b&X-Amz-Signature=fe430011845bbdf4dd58671fb704620e65504e30fa3caa927d8057e29ccb5fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUVWZ7D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDmPPfzeK6QSlU8PhZbDeGoISGmVc15I9eOTTfzuauS5gIgAqGLqVGdfboxOtr3zNo6NHC60sZ7Hcp7dHakxfYOlQ4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDF5fhDoEsIPLhBJTUyrcAxFYXUeCJA9uN1qMHTqDDT5ofkSncTXPpNYTfmmB3t6BudBufaF1XM8Ghr3xhEDuGEHXEC%2Fv%2F1SHfaVEBqEu9XtyrVs%2Fa4Fvl%2BtA22xoroyhu6w0lVVjyDfr3PruxDP%2FtsGm10e0oVT91PdCGk9s1UB5sfxGAswlMprFujsfBHrYov0cWF5RkNp25dAK%2Fqi7CK04%2FUyLKxt1sDfOahtluRirRcaEkYsQGRKHdOkURfU0bFOviw8C6VTuzgnCX7Zho945fpa8yReGltaQbTdeau35JhSZMChivH5qm8Ucm4tZadSUUNigB1kV1VaavH6lQo8LTAd7jVVUIyrj47wpbUaTnUhFZ5G7iqxe6TZFSadum7ogQKPRvHnE%2FRlJHz0N5NvziGwE6c6xv5qJe%2F6ah3o0tJLsJgAWumyib%2FmBc3Fi4qLBNpJSqfuiAwGTi7A01veriBaFpYkAh4osgq2Id0giDPndBcrAYTv6Z4vayLSRD8fD3rIqRR7fGvJB7WUcoCZ04ZRKXfSk4ay1E8yRQ0yOW%2Fow8Q0CXnoBjJ9hTnvQvCRvSjYqgAFgZMVaPT%2FF%2BR5xmkUe%2Fr4D%2FYUayBAIfyhdMAfYhySLA79B6%2BWHn9KiVltCF97FX9zAVeY5MOmcxMQGOqUBZ1B3WjYmY7R73%2BU1YGGuWFgZBJS%2F%2Bw8BCVTRqN0EddFCVF6OoT88Nyp4%2FYrTOkuVDqBbg%2F%2F%2BhUGfQ6GrHOtMBoPpyWK0dSRXryzEm15MH%2B48GrLA%2BhoL5mqyqxKz%2Fbfjj7V0CiFegN0SdRDR%2BaognDh6r81CYQKGZ8H8TvrWWJfXcMh7f7tkFu6K8oJhBeeDtV3ODS2J%2Bfgv2V%2B5YuvyR3uczD0b&X-Amz-Signature=1f5a70ca7bab3f086d739b0c5a2fdb52ddcb36a240339f95e165e67c51565fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUVWZ7D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDmPPfzeK6QSlU8PhZbDeGoISGmVc15I9eOTTfzuauS5gIgAqGLqVGdfboxOtr3zNo6NHC60sZ7Hcp7dHakxfYOlQ4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDF5fhDoEsIPLhBJTUyrcAxFYXUeCJA9uN1qMHTqDDT5ofkSncTXPpNYTfmmB3t6BudBufaF1XM8Ghr3xhEDuGEHXEC%2Fv%2F1SHfaVEBqEu9XtyrVs%2Fa4Fvl%2BtA22xoroyhu6w0lVVjyDfr3PruxDP%2FtsGm10e0oVT91PdCGk9s1UB5sfxGAswlMprFujsfBHrYov0cWF5RkNp25dAK%2Fqi7CK04%2FUyLKxt1sDfOahtluRirRcaEkYsQGRKHdOkURfU0bFOviw8C6VTuzgnCX7Zho945fpa8yReGltaQbTdeau35JhSZMChivH5qm8Ucm4tZadSUUNigB1kV1VaavH6lQo8LTAd7jVVUIyrj47wpbUaTnUhFZ5G7iqxe6TZFSadum7ogQKPRvHnE%2FRlJHz0N5NvziGwE6c6xv5qJe%2F6ah3o0tJLsJgAWumyib%2FmBc3Fi4qLBNpJSqfuiAwGTi7A01veriBaFpYkAh4osgq2Id0giDPndBcrAYTv6Z4vayLSRD8fD3rIqRR7fGvJB7WUcoCZ04ZRKXfSk4ay1E8yRQ0yOW%2Fow8Q0CXnoBjJ9hTnvQvCRvSjYqgAFgZMVaPT%2FF%2BR5xmkUe%2Fr4D%2FYUayBAIfyhdMAfYhySLA79B6%2BWHn9KiVltCF97FX9zAVeY5MOmcxMQGOqUBZ1B3WjYmY7R73%2BU1YGGuWFgZBJS%2F%2Bw8BCVTRqN0EddFCVF6OoT88Nyp4%2FYrTOkuVDqBbg%2F%2F%2BhUGfQ6GrHOtMBoPpyWK0dSRXryzEm15MH%2B48GrLA%2BhoL5mqyqxKz%2Fbfjj7V0CiFegN0SdRDR%2BaognDh6r81CYQKGZ8H8TvrWWJfXcMh7f7tkFu6K8oJhBeeDtV3ODS2J%2Bfgv2V%2B5YuvyR3uczD0b&X-Amz-Signature=b2652caa04c5d217f2e510dd693200366ae73e4c81e1bd99f49e3051f5571d0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUVWZ7D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDmPPfzeK6QSlU8PhZbDeGoISGmVc15I9eOTTfzuauS5gIgAqGLqVGdfboxOtr3zNo6NHC60sZ7Hcp7dHakxfYOlQ4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDF5fhDoEsIPLhBJTUyrcAxFYXUeCJA9uN1qMHTqDDT5ofkSncTXPpNYTfmmB3t6BudBufaF1XM8Ghr3xhEDuGEHXEC%2Fv%2F1SHfaVEBqEu9XtyrVs%2Fa4Fvl%2BtA22xoroyhu6w0lVVjyDfr3PruxDP%2FtsGm10e0oVT91PdCGk9s1UB5sfxGAswlMprFujsfBHrYov0cWF5RkNp25dAK%2Fqi7CK04%2FUyLKxt1sDfOahtluRirRcaEkYsQGRKHdOkURfU0bFOviw8C6VTuzgnCX7Zho945fpa8yReGltaQbTdeau35JhSZMChivH5qm8Ucm4tZadSUUNigB1kV1VaavH6lQo8LTAd7jVVUIyrj47wpbUaTnUhFZ5G7iqxe6TZFSadum7ogQKPRvHnE%2FRlJHz0N5NvziGwE6c6xv5qJe%2F6ah3o0tJLsJgAWumyib%2FmBc3Fi4qLBNpJSqfuiAwGTi7A01veriBaFpYkAh4osgq2Id0giDPndBcrAYTv6Z4vayLSRD8fD3rIqRR7fGvJB7WUcoCZ04ZRKXfSk4ay1E8yRQ0yOW%2Fow8Q0CXnoBjJ9hTnvQvCRvSjYqgAFgZMVaPT%2FF%2BR5xmkUe%2Fr4D%2FYUayBAIfyhdMAfYhySLA79B6%2BWHn9KiVltCF97FX9zAVeY5MOmcxMQGOqUBZ1B3WjYmY7R73%2BU1YGGuWFgZBJS%2F%2Bw8BCVTRqN0EddFCVF6OoT88Nyp4%2FYrTOkuVDqBbg%2F%2F%2BhUGfQ6GrHOtMBoPpyWK0dSRXryzEm15MH%2B48GrLA%2BhoL5mqyqxKz%2Fbfjj7V0CiFegN0SdRDR%2BaognDh6r81CYQKGZ8H8TvrWWJfXcMh7f7tkFu6K8oJhBeeDtV3ODS2J%2Bfgv2V%2B5YuvyR3uczD0b&X-Amz-Signature=ac86e5e0d15655f02ef61aae342ab29b7f2bb09870d04f2b288ff3394f662d63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUVWZ7D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDmPPfzeK6QSlU8PhZbDeGoISGmVc15I9eOTTfzuauS5gIgAqGLqVGdfboxOtr3zNo6NHC60sZ7Hcp7dHakxfYOlQ4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDF5fhDoEsIPLhBJTUyrcAxFYXUeCJA9uN1qMHTqDDT5ofkSncTXPpNYTfmmB3t6BudBufaF1XM8Ghr3xhEDuGEHXEC%2Fv%2F1SHfaVEBqEu9XtyrVs%2Fa4Fvl%2BtA22xoroyhu6w0lVVjyDfr3PruxDP%2FtsGm10e0oVT91PdCGk9s1UB5sfxGAswlMprFujsfBHrYov0cWF5RkNp25dAK%2Fqi7CK04%2FUyLKxt1sDfOahtluRirRcaEkYsQGRKHdOkURfU0bFOviw8C6VTuzgnCX7Zho945fpa8yReGltaQbTdeau35JhSZMChivH5qm8Ucm4tZadSUUNigB1kV1VaavH6lQo8LTAd7jVVUIyrj47wpbUaTnUhFZ5G7iqxe6TZFSadum7ogQKPRvHnE%2FRlJHz0N5NvziGwE6c6xv5qJe%2F6ah3o0tJLsJgAWumyib%2FmBc3Fi4qLBNpJSqfuiAwGTi7A01veriBaFpYkAh4osgq2Id0giDPndBcrAYTv6Z4vayLSRD8fD3rIqRR7fGvJB7WUcoCZ04ZRKXfSk4ay1E8yRQ0yOW%2Fow8Q0CXnoBjJ9hTnvQvCRvSjYqgAFgZMVaPT%2FF%2BR5xmkUe%2Fr4D%2FYUayBAIfyhdMAfYhySLA79B6%2BWHn9KiVltCF97FX9zAVeY5MOmcxMQGOqUBZ1B3WjYmY7R73%2BU1YGGuWFgZBJS%2F%2Bw8BCVTRqN0EddFCVF6OoT88Nyp4%2FYrTOkuVDqBbg%2F%2F%2BhUGfQ6GrHOtMBoPpyWK0dSRXryzEm15MH%2B48GrLA%2BhoL5mqyqxKz%2Fbfjj7V0CiFegN0SdRDR%2BaognDh6r81CYQKGZ8H8TvrWWJfXcMh7f7tkFu6K8oJhBeeDtV3ODS2J%2Bfgv2V%2B5YuvyR3uczD0b&X-Amz-Signature=998eb9582fe84fe97bd8503beca4dddd6607dceee4e3454400704a0a78a9c675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
