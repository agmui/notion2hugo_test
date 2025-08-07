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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EY7TYJL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHMnRbEVI9TPAsCKaJg66P26ge3DUbN8e3c2YUYSkdDpAiEAopwTKSuJRe5t7cLGoOra8aXw6IKBkFbEoClS4SiUoZ0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiQbuwHGzJ6b9tOrSrcA8skWsiBtBhUA6xFYyOTKk2iFVfa6TI00R2Vu1VK5E5U2em9jcEZ4EV8d5Tl48TdhQG%2F3xdIvw6A%2FoBmPDxXsVxUN4knVRifIfKJPh07J9CTZ%2FrDQtnyOQ%2FvJCzeLCmkj0Nts3ZtEn33xPfMVkA3OY3akL%2FEbBPsF%2FOPA7a4FXbZUx8hDIzoMU%2F8Hu5LMqONTAEOWPBdnZuvLCV7iuFTExhMmN3KUgZOf%2FqkbH%2Fn7bwBdpO4aShjL2NCCIv49%2FOgf6Ht3518M%2FqyA2clbLxIbqjCJzsCOtwtB3t3ucO9tRzAn4N3jmVwzS4mWPbyBlso%2Fq3LXTlwP5PYqc7wguLs66Ew9nWVp51zbBVGyc4SeUw9UTQ5IT3XvrOSHeZW2Cu%2Bf0gftxQFU%2F3Kcl6juLX33RsXEi95a46fdRDzn1vn8ZmlHyohUmIQRhKqAijV%2FzJcn3ii70P0XJda2PuoaaVldUBnSBj51qU%2F%2FO1ZGKqPPfJD47JbL3M48pC6WYWB4jqi2%2F0GUjbbBWn8yc5zBLR4K8xC1pKCCejnhcQiIeugVrGdyn7Gr%2BAh%2B7dSc6D01uV%2Bvp4LTa%2F5UYa5lXtruddiZAEyzKF1NDnnFtO71Iu5hmTdnQBWqLrT5k23me7fMIOQ0cQGOqUBtRDTwub0zoZKQ6EKvKyBLagxwQOjLq0E6y4pVQAWHltWR4Koq6aKfqVWeR5pJ%2BK9V2EMbZT4Eu%2FmIC2jvwW19%2FnUH4hsx04QrjNC1x2ItrsleYsKTxP72QOkETmFrkfNHAX5LwCNRDHFmK%2B3B7RCDnIhinVzu3XDCeVQV%2BWIJnUyaiuqp8oxuevyrEz6%2BunLP5Vc0xXREZzunSGiqoAZpu9Fhtjk&X-Amz-Signature=14d3e05c163cb07f4117052733f70ba1e4ddf548266ca57d15d1c53bcfec1ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EY7TYJL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHMnRbEVI9TPAsCKaJg66P26ge3DUbN8e3c2YUYSkdDpAiEAopwTKSuJRe5t7cLGoOra8aXw6IKBkFbEoClS4SiUoZ0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiQbuwHGzJ6b9tOrSrcA8skWsiBtBhUA6xFYyOTKk2iFVfa6TI00R2Vu1VK5E5U2em9jcEZ4EV8d5Tl48TdhQG%2F3xdIvw6A%2FoBmPDxXsVxUN4knVRifIfKJPh07J9CTZ%2FrDQtnyOQ%2FvJCzeLCmkj0Nts3ZtEn33xPfMVkA3OY3akL%2FEbBPsF%2FOPA7a4FXbZUx8hDIzoMU%2F8Hu5LMqONTAEOWPBdnZuvLCV7iuFTExhMmN3KUgZOf%2FqkbH%2Fn7bwBdpO4aShjL2NCCIv49%2FOgf6Ht3518M%2FqyA2clbLxIbqjCJzsCOtwtB3t3ucO9tRzAn4N3jmVwzS4mWPbyBlso%2Fq3LXTlwP5PYqc7wguLs66Ew9nWVp51zbBVGyc4SeUw9UTQ5IT3XvrOSHeZW2Cu%2Bf0gftxQFU%2F3Kcl6juLX33RsXEi95a46fdRDzn1vn8ZmlHyohUmIQRhKqAijV%2FzJcn3ii70P0XJda2PuoaaVldUBnSBj51qU%2F%2FO1ZGKqPPfJD47JbL3M48pC6WYWB4jqi2%2F0GUjbbBWn8yc5zBLR4K8xC1pKCCejnhcQiIeugVrGdyn7Gr%2BAh%2B7dSc6D01uV%2Bvp4LTa%2F5UYa5lXtruddiZAEyzKF1NDnnFtO71Iu5hmTdnQBWqLrT5k23me7fMIOQ0cQGOqUBtRDTwub0zoZKQ6EKvKyBLagxwQOjLq0E6y4pVQAWHltWR4Koq6aKfqVWeR5pJ%2BK9V2EMbZT4Eu%2FmIC2jvwW19%2FnUH4hsx04QrjNC1x2ItrsleYsKTxP72QOkETmFrkfNHAX5LwCNRDHFmK%2B3B7RCDnIhinVzu3XDCeVQV%2BWIJnUyaiuqp8oxuevyrEz6%2BunLP5Vc0xXREZzunSGiqoAZpu9Fhtjk&X-Amz-Signature=725a565bc48b3ba93db9dfa300d23f52d7018d39e9027456234ccea29fc5e87f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EY7TYJL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHMnRbEVI9TPAsCKaJg66P26ge3DUbN8e3c2YUYSkdDpAiEAopwTKSuJRe5t7cLGoOra8aXw6IKBkFbEoClS4SiUoZ0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiQbuwHGzJ6b9tOrSrcA8skWsiBtBhUA6xFYyOTKk2iFVfa6TI00R2Vu1VK5E5U2em9jcEZ4EV8d5Tl48TdhQG%2F3xdIvw6A%2FoBmPDxXsVxUN4knVRifIfKJPh07J9CTZ%2FrDQtnyOQ%2FvJCzeLCmkj0Nts3ZtEn33xPfMVkA3OY3akL%2FEbBPsF%2FOPA7a4FXbZUx8hDIzoMU%2F8Hu5LMqONTAEOWPBdnZuvLCV7iuFTExhMmN3KUgZOf%2FqkbH%2Fn7bwBdpO4aShjL2NCCIv49%2FOgf6Ht3518M%2FqyA2clbLxIbqjCJzsCOtwtB3t3ucO9tRzAn4N3jmVwzS4mWPbyBlso%2Fq3LXTlwP5PYqc7wguLs66Ew9nWVp51zbBVGyc4SeUw9UTQ5IT3XvrOSHeZW2Cu%2Bf0gftxQFU%2F3Kcl6juLX33RsXEi95a46fdRDzn1vn8ZmlHyohUmIQRhKqAijV%2FzJcn3ii70P0XJda2PuoaaVldUBnSBj51qU%2F%2FO1ZGKqPPfJD47JbL3M48pC6WYWB4jqi2%2F0GUjbbBWn8yc5zBLR4K8xC1pKCCejnhcQiIeugVrGdyn7Gr%2BAh%2B7dSc6D01uV%2Bvp4LTa%2F5UYa5lXtruddiZAEyzKF1NDnnFtO71Iu5hmTdnQBWqLrT5k23me7fMIOQ0cQGOqUBtRDTwub0zoZKQ6EKvKyBLagxwQOjLq0E6y4pVQAWHltWR4Koq6aKfqVWeR5pJ%2BK9V2EMbZT4Eu%2FmIC2jvwW19%2FnUH4hsx04QrjNC1x2ItrsleYsKTxP72QOkETmFrkfNHAX5LwCNRDHFmK%2B3B7RCDnIhinVzu3XDCeVQV%2BWIJnUyaiuqp8oxuevyrEz6%2BunLP5Vc0xXREZzunSGiqoAZpu9Fhtjk&X-Amz-Signature=0c883b477f1911e965467acf6fc5902157bbab3371fac6a1686916a699b0389b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EY7TYJL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHMnRbEVI9TPAsCKaJg66P26ge3DUbN8e3c2YUYSkdDpAiEAopwTKSuJRe5t7cLGoOra8aXw6IKBkFbEoClS4SiUoZ0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiQbuwHGzJ6b9tOrSrcA8skWsiBtBhUA6xFYyOTKk2iFVfa6TI00R2Vu1VK5E5U2em9jcEZ4EV8d5Tl48TdhQG%2F3xdIvw6A%2FoBmPDxXsVxUN4knVRifIfKJPh07J9CTZ%2FrDQtnyOQ%2FvJCzeLCmkj0Nts3ZtEn33xPfMVkA3OY3akL%2FEbBPsF%2FOPA7a4FXbZUx8hDIzoMU%2F8Hu5LMqONTAEOWPBdnZuvLCV7iuFTExhMmN3KUgZOf%2FqkbH%2Fn7bwBdpO4aShjL2NCCIv49%2FOgf6Ht3518M%2FqyA2clbLxIbqjCJzsCOtwtB3t3ucO9tRzAn4N3jmVwzS4mWPbyBlso%2Fq3LXTlwP5PYqc7wguLs66Ew9nWVp51zbBVGyc4SeUw9UTQ5IT3XvrOSHeZW2Cu%2Bf0gftxQFU%2F3Kcl6juLX33RsXEi95a46fdRDzn1vn8ZmlHyohUmIQRhKqAijV%2FzJcn3ii70P0XJda2PuoaaVldUBnSBj51qU%2F%2FO1ZGKqPPfJD47JbL3M48pC6WYWB4jqi2%2F0GUjbbBWn8yc5zBLR4K8xC1pKCCejnhcQiIeugVrGdyn7Gr%2BAh%2B7dSc6D01uV%2Bvp4LTa%2F5UYa5lXtruddiZAEyzKF1NDnnFtO71Iu5hmTdnQBWqLrT5k23me7fMIOQ0cQGOqUBtRDTwub0zoZKQ6EKvKyBLagxwQOjLq0E6y4pVQAWHltWR4Koq6aKfqVWeR5pJ%2BK9V2EMbZT4Eu%2FmIC2jvwW19%2FnUH4hsx04QrjNC1x2ItrsleYsKTxP72QOkETmFrkfNHAX5LwCNRDHFmK%2B3B7RCDnIhinVzu3XDCeVQV%2BWIJnUyaiuqp8oxuevyrEz6%2BunLP5Vc0xXREZzunSGiqoAZpu9Fhtjk&X-Amz-Signature=92618a2175af8459971d99b02145163743429ac4584d28a3bf0ee8c670a53e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GH65JLD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQC5%2FwUNv2xrm3aV1L3geDQ%2BdPKOMRDel0ujutFmRsEcyAIhALkr4k2OBJEXLk6rYyg%2BEi1aQJERMFn2%2Fzu7AxK6TigUKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzsI1X3WVr7ZMj32sq3AMTSgHaEfd4W9EIu%2BycvSZ5xFty0SgeUyvrAA276jI%2BFWPajDyFm4o%2FnRuCscKvgI2y1%2FFkP73h5kX%2Fdm%2B8sXq0V8xKYUniFUkBi8uBinoxUU3fRH4lvktURxmDtjmldn5ZNK0zXbEOucmXDg6%2BxqIyv6X%2F5NKI%2BRboHTbQacNUnYDVu0XDJetjdBoEgZ6QPCBDWuAzmLrQnO7AT4pbPq%2BLmkfUeGdC7phl7E0OeOKazHghfJDFYpwhnOEs%2FoEeT0zaxO2mnddI8UqetIfnI3E%2B7PyMC6N1SXTanSf81h9WTACUpZz1fs6DpjBM1CxDKqGnYlSjATywFL%2FgUB1gjM49xOSK57q5wyCL4BC6b6mqMXKouNnQMkOS8Su%2BQj%2Fb2xkt9RhiA9r3Vk%2BYAoKMJEl2chx8OQhZivFw0tycA8oIIIB%2FyOTSQwdxKwohxO3VnSa1i3pCkrZIMyX187SKs9b1Af%2FRqJ0XPms6tgZUqEyuBXDjv8AntoWX6keYIdDnwPo18TxNpopHbAGF4P4qtHyjVdHVUgw0PLfY913etiUPgrZHek8BIqjZ3%2BEtcYd3pDD74%2B64wyttofFoTinwG7OC7yYsxyPG4xqtsETUXjCus2ov%2FxS5NGZiWU1HADCTkNHEBjqkAZbNdkDRTMBCFT3UFb5yc11FArjcThuLdDrADwPUVRU%2Fvs%2BVSCo3vJaAuvlRIrKeYfhhvq44tzwxS4k5QUt2CEqKHQTw1d9HrpD1Eng60ilZs%2BPciY1GoSTAbJa7nbCRzUn29aRzi0NFkqBVPGhERS6CoeMWorJ32wmcXQmiFMI5G7ndqXTKyWme6PIJNESKWMAa3t2ms7o5CtHd9VpJ3LBsBrlu&X-Amz-Signature=860ce6b66482f3f328312239c75105037524ea763e049467ee18914b6156cefc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EY7TYJL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHMnRbEVI9TPAsCKaJg66P26ge3DUbN8e3c2YUYSkdDpAiEAopwTKSuJRe5t7cLGoOra8aXw6IKBkFbEoClS4SiUoZ0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiQbuwHGzJ6b9tOrSrcA8skWsiBtBhUA6xFYyOTKk2iFVfa6TI00R2Vu1VK5E5U2em9jcEZ4EV8d5Tl48TdhQG%2F3xdIvw6A%2FoBmPDxXsVxUN4knVRifIfKJPh07J9CTZ%2FrDQtnyOQ%2FvJCzeLCmkj0Nts3ZtEn33xPfMVkA3OY3akL%2FEbBPsF%2FOPA7a4FXbZUx8hDIzoMU%2F8Hu5LMqONTAEOWPBdnZuvLCV7iuFTExhMmN3KUgZOf%2FqkbH%2Fn7bwBdpO4aShjL2NCCIv49%2FOgf6Ht3518M%2FqyA2clbLxIbqjCJzsCOtwtB3t3ucO9tRzAn4N3jmVwzS4mWPbyBlso%2Fq3LXTlwP5PYqc7wguLs66Ew9nWVp51zbBVGyc4SeUw9UTQ5IT3XvrOSHeZW2Cu%2Bf0gftxQFU%2F3Kcl6juLX33RsXEi95a46fdRDzn1vn8ZmlHyohUmIQRhKqAijV%2FzJcn3ii70P0XJda2PuoaaVldUBnSBj51qU%2F%2FO1ZGKqPPfJD47JbL3M48pC6WYWB4jqi2%2F0GUjbbBWn8yc5zBLR4K8xC1pKCCejnhcQiIeugVrGdyn7Gr%2BAh%2B7dSc6D01uV%2Bvp4LTa%2F5UYa5lXtruddiZAEyzKF1NDnnFtO71Iu5hmTdnQBWqLrT5k23me7fMIOQ0cQGOqUBtRDTwub0zoZKQ6EKvKyBLagxwQOjLq0E6y4pVQAWHltWR4Koq6aKfqVWeR5pJ%2BK9V2EMbZT4Eu%2FmIC2jvwW19%2FnUH4hsx04QrjNC1x2ItrsleYsKTxP72QOkETmFrkfNHAX5LwCNRDHFmK%2B3B7RCDnIhinVzu3XDCeVQV%2BWIJnUyaiuqp8oxuevyrEz6%2BunLP5Vc0xXREZzunSGiqoAZpu9Fhtjk&X-Amz-Signature=ab38fa2b09c8e84ceefdcd4ac7f26fef6fe1388eb53242121561012c10e036f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EY7TYJL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHMnRbEVI9TPAsCKaJg66P26ge3DUbN8e3c2YUYSkdDpAiEAopwTKSuJRe5t7cLGoOra8aXw6IKBkFbEoClS4SiUoZ0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiQbuwHGzJ6b9tOrSrcA8skWsiBtBhUA6xFYyOTKk2iFVfa6TI00R2Vu1VK5E5U2em9jcEZ4EV8d5Tl48TdhQG%2F3xdIvw6A%2FoBmPDxXsVxUN4knVRifIfKJPh07J9CTZ%2FrDQtnyOQ%2FvJCzeLCmkj0Nts3ZtEn33xPfMVkA3OY3akL%2FEbBPsF%2FOPA7a4FXbZUx8hDIzoMU%2F8Hu5LMqONTAEOWPBdnZuvLCV7iuFTExhMmN3KUgZOf%2FqkbH%2Fn7bwBdpO4aShjL2NCCIv49%2FOgf6Ht3518M%2FqyA2clbLxIbqjCJzsCOtwtB3t3ucO9tRzAn4N3jmVwzS4mWPbyBlso%2Fq3LXTlwP5PYqc7wguLs66Ew9nWVp51zbBVGyc4SeUw9UTQ5IT3XvrOSHeZW2Cu%2Bf0gftxQFU%2F3Kcl6juLX33RsXEi95a46fdRDzn1vn8ZmlHyohUmIQRhKqAijV%2FzJcn3ii70P0XJda2PuoaaVldUBnSBj51qU%2F%2FO1ZGKqPPfJD47JbL3M48pC6WYWB4jqi2%2F0GUjbbBWn8yc5zBLR4K8xC1pKCCejnhcQiIeugVrGdyn7Gr%2BAh%2B7dSc6D01uV%2Bvp4LTa%2F5UYa5lXtruddiZAEyzKF1NDnnFtO71Iu5hmTdnQBWqLrT5k23me7fMIOQ0cQGOqUBtRDTwub0zoZKQ6EKvKyBLagxwQOjLq0E6y4pVQAWHltWR4Koq6aKfqVWeR5pJ%2BK9V2EMbZT4Eu%2FmIC2jvwW19%2FnUH4hsx04QrjNC1x2ItrsleYsKTxP72QOkETmFrkfNHAX5LwCNRDHFmK%2B3B7RCDnIhinVzu3XDCeVQV%2BWIJnUyaiuqp8oxuevyrEz6%2BunLP5Vc0xXREZzunSGiqoAZpu9Fhtjk&X-Amz-Signature=1e14d65f45cad84513ea3fd9fe83b39f8ab5fab7e950ae70dda1a31158515303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EY7TYJL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHMnRbEVI9TPAsCKaJg66P26ge3DUbN8e3c2YUYSkdDpAiEAopwTKSuJRe5t7cLGoOra8aXw6IKBkFbEoClS4SiUoZ0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiQbuwHGzJ6b9tOrSrcA8skWsiBtBhUA6xFYyOTKk2iFVfa6TI00R2Vu1VK5E5U2em9jcEZ4EV8d5Tl48TdhQG%2F3xdIvw6A%2FoBmPDxXsVxUN4knVRifIfKJPh07J9CTZ%2FrDQtnyOQ%2FvJCzeLCmkj0Nts3ZtEn33xPfMVkA3OY3akL%2FEbBPsF%2FOPA7a4FXbZUx8hDIzoMU%2F8Hu5LMqONTAEOWPBdnZuvLCV7iuFTExhMmN3KUgZOf%2FqkbH%2Fn7bwBdpO4aShjL2NCCIv49%2FOgf6Ht3518M%2FqyA2clbLxIbqjCJzsCOtwtB3t3ucO9tRzAn4N3jmVwzS4mWPbyBlso%2Fq3LXTlwP5PYqc7wguLs66Ew9nWVp51zbBVGyc4SeUw9UTQ5IT3XvrOSHeZW2Cu%2Bf0gftxQFU%2F3Kcl6juLX33RsXEi95a46fdRDzn1vn8ZmlHyohUmIQRhKqAijV%2FzJcn3ii70P0XJda2PuoaaVldUBnSBj51qU%2F%2FO1ZGKqPPfJD47JbL3M48pC6WYWB4jqi2%2F0GUjbbBWn8yc5zBLR4K8xC1pKCCejnhcQiIeugVrGdyn7Gr%2BAh%2B7dSc6D01uV%2Bvp4LTa%2F5UYa5lXtruddiZAEyzKF1NDnnFtO71Iu5hmTdnQBWqLrT5k23me7fMIOQ0cQGOqUBtRDTwub0zoZKQ6EKvKyBLagxwQOjLq0E6y4pVQAWHltWR4Koq6aKfqVWeR5pJ%2BK9V2EMbZT4Eu%2FmIC2jvwW19%2FnUH4hsx04QrjNC1x2ItrsleYsKTxP72QOkETmFrkfNHAX5LwCNRDHFmK%2B3B7RCDnIhinVzu3XDCeVQV%2BWIJnUyaiuqp8oxuevyrEz6%2BunLP5Vc0xXREZzunSGiqoAZpu9Fhtjk&X-Amz-Signature=1dafc8c8d79eb3043a654a983e4f30b315eff33ea46b6717fff85a14fb2e41e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EY7TYJL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHMnRbEVI9TPAsCKaJg66P26ge3DUbN8e3c2YUYSkdDpAiEAopwTKSuJRe5t7cLGoOra8aXw6IKBkFbEoClS4SiUoZ0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiQbuwHGzJ6b9tOrSrcA8skWsiBtBhUA6xFYyOTKk2iFVfa6TI00R2Vu1VK5E5U2em9jcEZ4EV8d5Tl48TdhQG%2F3xdIvw6A%2FoBmPDxXsVxUN4knVRifIfKJPh07J9CTZ%2FrDQtnyOQ%2FvJCzeLCmkj0Nts3ZtEn33xPfMVkA3OY3akL%2FEbBPsF%2FOPA7a4FXbZUx8hDIzoMU%2F8Hu5LMqONTAEOWPBdnZuvLCV7iuFTExhMmN3KUgZOf%2FqkbH%2Fn7bwBdpO4aShjL2NCCIv49%2FOgf6Ht3518M%2FqyA2clbLxIbqjCJzsCOtwtB3t3ucO9tRzAn4N3jmVwzS4mWPbyBlso%2Fq3LXTlwP5PYqc7wguLs66Ew9nWVp51zbBVGyc4SeUw9UTQ5IT3XvrOSHeZW2Cu%2Bf0gftxQFU%2F3Kcl6juLX33RsXEi95a46fdRDzn1vn8ZmlHyohUmIQRhKqAijV%2FzJcn3ii70P0XJda2PuoaaVldUBnSBj51qU%2F%2FO1ZGKqPPfJD47JbL3M48pC6WYWB4jqi2%2F0GUjbbBWn8yc5zBLR4K8xC1pKCCejnhcQiIeugVrGdyn7Gr%2BAh%2B7dSc6D01uV%2Bvp4LTa%2F5UYa5lXtruddiZAEyzKF1NDnnFtO71Iu5hmTdnQBWqLrT5k23me7fMIOQ0cQGOqUBtRDTwub0zoZKQ6EKvKyBLagxwQOjLq0E6y4pVQAWHltWR4Koq6aKfqVWeR5pJ%2BK9V2EMbZT4Eu%2FmIC2jvwW19%2FnUH4hsx04QrjNC1x2ItrsleYsKTxP72QOkETmFrkfNHAX5LwCNRDHFmK%2B3B7RCDnIhinVzu3XDCeVQV%2BWIJnUyaiuqp8oxuevyrEz6%2BunLP5Vc0xXREZzunSGiqoAZpu9Fhtjk&X-Amz-Signature=9565a44c17a763c94cc6ff10ae4df57f159ec9a591bf0edd994db65a692ce021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EY7TYJL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHMnRbEVI9TPAsCKaJg66P26ge3DUbN8e3c2YUYSkdDpAiEAopwTKSuJRe5t7cLGoOra8aXw6IKBkFbEoClS4SiUoZ0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiQbuwHGzJ6b9tOrSrcA8skWsiBtBhUA6xFYyOTKk2iFVfa6TI00R2Vu1VK5E5U2em9jcEZ4EV8d5Tl48TdhQG%2F3xdIvw6A%2FoBmPDxXsVxUN4knVRifIfKJPh07J9CTZ%2FrDQtnyOQ%2FvJCzeLCmkj0Nts3ZtEn33xPfMVkA3OY3akL%2FEbBPsF%2FOPA7a4FXbZUx8hDIzoMU%2F8Hu5LMqONTAEOWPBdnZuvLCV7iuFTExhMmN3KUgZOf%2FqkbH%2Fn7bwBdpO4aShjL2NCCIv49%2FOgf6Ht3518M%2FqyA2clbLxIbqjCJzsCOtwtB3t3ucO9tRzAn4N3jmVwzS4mWPbyBlso%2Fq3LXTlwP5PYqc7wguLs66Ew9nWVp51zbBVGyc4SeUw9UTQ5IT3XvrOSHeZW2Cu%2Bf0gftxQFU%2F3Kcl6juLX33RsXEi95a46fdRDzn1vn8ZmlHyohUmIQRhKqAijV%2FzJcn3ii70P0XJda2PuoaaVldUBnSBj51qU%2F%2FO1ZGKqPPfJD47JbL3M48pC6WYWB4jqi2%2F0GUjbbBWn8yc5zBLR4K8xC1pKCCejnhcQiIeugVrGdyn7Gr%2BAh%2B7dSc6D01uV%2Bvp4LTa%2F5UYa5lXtruddiZAEyzKF1NDnnFtO71Iu5hmTdnQBWqLrT5k23me7fMIOQ0cQGOqUBtRDTwub0zoZKQ6EKvKyBLagxwQOjLq0E6y4pVQAWHltWR4Koq6aKfqVWeR5pJ%2BK9V2EMbZT4Eu%2FmIC2jvwW19%2FnUH4hsx04QrjNC1x2ItrsleYsKTxP72QOkETmFrkfNHAX5LwCNRDHFmK%2B3B7RCDnIhinVzu3XDCeVQV%2BWIJnUyaiuqp8oxuevyrEz6%2BunLP5Vc0xXREZzunSGiqoAZpu9Fhtjk&X-Amz-Signature=91a87b83aa506fd6aa6c43279eda989afb02c74a2ba28eae5b422b007920389d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EY7TYJL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHMnRbEVI9TPAsCKaJg66P26ge3DUbN8e3c2YUYSkdDpAiEAopwTKSuJRe5t7cLGoOra8aXw6IKBkFbEoClS4SiUoZ0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiQbuwHGzJ6b9tOrSrcA8skWsiBtBhUA6xFYyOTKk2iFVfa6TI00R2Vu1VK5E5U2em9jcEZ4EV8d5Tl48TdhQG%2F3xdIvw6A%2FoBmPDxXsVxUN4knVRifIfKJPh07J9CTZ%2FrDQtnyOQ%2FvJCzeLCmkj0Nts3ZtEn33xPfMVkA3OY3akL%2FEbBPsF%2FOPA7a4FXbZUx8hDIzoMU%2F8Hu5LMqONTAEOWPBdnZuvLCV7iuFTExhMmN3KUgZOf%2FqkbH%2Fn7bwBdpO4aShjL2NCCIv49%2FOgf6Ht3518M%2FqyA2clbLxIbqjCJzsCOtwtB3t3ucO9tRzAn4N3jmVwzS4mWPbyBlso%2Fq3LXTlwP5PYqc7wguLs66Ew9nWVp51zbBVGyc4SeUw9UTQ5IT3XvrOSHeZW2Cu%2Bf0gftxQFU%2F3Kcl6juLX33RsXEi95a46fdRDzn1vn8ZmlHyohUmIQRhKqAijV%2FzJcn3ii70P0XJda2PuoaaVldUBnSBj51qU%2F%2FO1ZGKqPPfJD47JbL3M48pC6WYWB4jqi2%2F0GUjbbBWn8yc5zBLR4K8xC1pKCCejnhcQiIeugVrGdyn7Gr%2BAh%2B7dSc6D01uV%2Bvp4LTa%2F5UYa5lXtruddiZAEyzKF1NDnnFtO71Iu5hmTdnQBWqLrT5k23me7fMIOQ0cQGOqUBtRDTwub0zoZKQ6EKvKyBLagxwQOjLq0E6y4pVQAWHltWR4Koq6aKfqVWeR5pJ%2BK9V2EMbZT4Eu%2FmIC2jvwW19%2FnUH4hsx04QrjNC1x2ItrsleYsKTxP72QOkETmFrkfNHAX5LwCNRDHFmK%2B3B7RCDnIhinVzu3XDCeVQV%2BWIJnUyaiuqp8oxuevyrEz6%2BunLP5Vc0xXREZzunSGiqoAZpu9Fhtjk&X-Amz-Signature=f36cbb9e3b36d3803a13fa6113d0e7bd51c3e37c2a15c29d16c82f2165aca6b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
