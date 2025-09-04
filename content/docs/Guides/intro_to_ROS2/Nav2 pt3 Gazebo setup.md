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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP2OIXHA%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK8Va5VWX0AByiEY9hV9pZ3hcAMzQ8ieBpqsR3Q%2F%2BlWAiB427OcTkFIb4uMiC%2Fz6t%2FuTiiI5KBuId%2FwBY3YMq545Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMxIVbwtHhy%2F9a4SuoKtwD9nR9Q6yIspmRUDF2%2FXnnbfiD%2FChb4e4KFZV5Gj2X84prSfOjKYfh3Py48ekaQC5HqVkWHWO4t23FxGO%2BA8yfxsYA2dM%2BzpZaPpGiL6vRYxI1xVeTKFl5oGwhQUnV1k8hQXb9rFus4D6FgbzvTMNYDHIWrtrylZGR8NsuBeO6etWDtZo87F0mcZcQ59IpoJ5Zuy7rBr%2B1%2BH9XA0IgIvm7d%2F1M2PTB35KZOq9wlnBja8rPPVB%2FpA1VtWSf3IrVm%2BArRd%2FVCakdDuwQYvgsmRi2sLweSuJxT6DfMkVTY%2FFuXimeibFCvAOLiJxDA83imCdOO%2BcdIvUDH%2FfmwpX5EA57J8BMgjLsbyQkhnLha2whNuqeM2lpFjh11R1erFfkJyiPsQkIPC%2BMj6kFl4%2FYk37KhUFNhdKVeDmrrAZD5BM7ml5tjcWm5bqg3MLF7EAY1nYOEyGbmK5Y5tMH2eZYt1AUxmdSEQLwguf473E6JnT5R6kP3dmrndWEBUOPJFq3Palb11VkMbxbtR0WD%2BiwcVOt5nSjqGgy9tqXAMMg1vrst2SGDiLu2kPxtSGf35FxZyTM2d3WIb4RzJcE7TT27162vVai0ThgJkTYxWBsNVdJ9VtwmevNbXXqiWyimr8wmLfjxQY6pgGGukQKk3DRcEF1Xl2W1RpNqcU0zuow2A0pNztrvy5fDLmueeTJpEDWw22dNh06toY5jkwLNVfpUQsEEu3Hi1v32sZoex7v%2F0szEjvNFLIHD8fHc261PIS7Wybavt3qebWvVfUT9nhMSXqOXWVZllSsKeRy5NQBLFxYisKlsxsT8wyKhSnWxvovXmvi%2FW1M6051EaIzW0HCJ1mHc25zvpZWYBx2g7H6&X-Amz-Signature=30adb914012f7cb0520dd198a84866f02d5b38fa317f9ccc2c778c1238117548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP2OIXHA%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK8Va5VWX0AByiEY9hV9pZ3hcAMzQ8ieBpqsR3Q%2F%2BlWAiB427OcTkFIb4uMiC%2Fz6t%2FuTiiI5KBuId%2FwBY3YMq545Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMxIVbwtHhy%2F9a4SuoKtwD9nR9Q6yIspmRUDF2%2FXnnbfiD%2FChb4e4KFZV5Gj2X84prSfOjKYfh3Py48ekaQC5HqVkWHWO4t23FxGO%2BA8yfxsYA2dM%2BzpZaPpGiL6vRYxI1xVeTKFl5oGwhQUnV1k8hQXb9rFus4D6FgbzvTMNYDHIWrtrylZGR8NsuBeO6etWDtZo87F0mcZcQ59IpoJ5Zuy7rBr%2B1%2BH9XA0IgIvm7d%2F1M2PTB35KZOq9wlnBja8rPPVB%2FpA1VtWSf3IrVm%2BArRd%2FVCakdDuwQYvgsmRi2sLweSuJxT6DfMkVTY%2FFuXimeibFCvAOLiJxDA83imCdOO%2BcdIvUDH%2FfmwpX5EA57J8BMgjLsbyQkhnLha2whNuqeM2lpFjh11R1erFfkJyiPsQkIPC%2BMj6kFl4%2FYk37KhUFNhdKVeDmrrAZD5BM7ml5tjcWm5bqg3MLF7EAY1nYOEyGbmK5Y5tMH2eZYt1AUxmdSEQLwguf473E6JnT5R6kP3dmrndWEBUOPJFq3Palb11VkMbxbtR0WD%2BiwcVOt5nSjqGgy9tqXAMMg1vrst2SGDiLu2kPxtSGf35FxZyTM2d3WIb4RzJcE7TT27162vVai0ThgJkTYxWBsNVdJ9VtwmevNbXXqiWyimr8wmLfjxQY6pgGGukQKk3DRcEF1Xl2W1RpNqcU0zuow2A0pNztrvy5fDLmueeTJpEDWw22dNh06toY5jkwLNVfpUQsEEu3Hi1v32sZoex7v%2F0szEjvNFLIHD8fHc261PIS7Wybavt3qebWvVfUT9nhMSXqOXWVZllSsKeRy5NQBLFxYisKlsxsT8wyKhSnWxvovXmvi%2FW1M6051EaIzW0HCJ1mHc25zvpZWYBx2g7H6&X-Amz-Signature=a825059be7db8a1b8db132349f3b40b2fb6af5503e400d042123d19972f9cfbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP2OIXHA%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK8Va5VWX0AByiEY9hV9pZ3hcAMzQ8ieBpqsR3Q%2F%2BlWAiB427OcTkFIb4uMiC%2Fz6t%2FuTiiI5KBuId%2FwBY3YMq545Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMxIVbwtHhy%2F9a4SuoKtwD9nR9Q6yIspmRUDF2%2FXnnbfiD%2FChb4e4KFZV5Gj2X84prSfOjKYfh3Py48ekaQC5HqVkWHWO4t23FxGO%2BA8yfxsYA2dM%2BzpZaPpGiL6vRYxI1xVeTKFl5oGwhQUnV1k8hQXb9rFus4D6FgbzvTMNYDHIWrtrylZGR8NsuBeO6etWDtZo87F0mcZcQ59IpoJ5Zuy7rBr%2B1%2BH9XA0IgIvm7d%2F1M2PTB35KZOq9wlnBja8rPPVB%2FpA1VtWSf3IrVm%2BArRd%2FVCakdDuwQYvgsmRi2sLweSuJxT6DfMkVTY%2FFuXimeibFCvAOLiJxDA83imCdOO%2BcdIvUDH%2FfmwpX5EA57J8BMgjLsbyQkhnLha2whNuqeM2lpFjh11R1erFfkJyiPsQkIPC%2BMj6kFl4%2FYk37KhUFNhdKVeDmrrAZD5BM7ml5tjcWm5bqg3MLF7EAY1nYOEyGbmK5Y5tMH2eZYt1AUxmdSEQLwguf473E6JnT5R6kP3dmrndWEBUOPJFq3Palb11VkMbxbtR0WD%2BiwcVOt5nSjqGgy9tqXAMMg1vrst2SGDiLu2kPxtSGf35FxZyTM2d3WIb4RzJcE7TT27162vVai0ThgJkTYxWBsNVdJ9VtwmevNbXXqiWyimr8wmLfjxQY6pgGGukQKk3DRcEF1Xl2W1RpNqcU0zuow2A0pNztrvy5fDLmueeTJpEDWw22dNh06toY5jkwLNVfpUQsEEu3Hi1v32sZoex7v%2F0szEjvNFLIHD8fHc261PIS7Wybavt3qebWvVfUT9nhMSXqOXWVZllSsKeRy5NQBLFxYisKlsxsT8wyKhSnWxvovXmvi%2FW1M6051EaIzW0HCJ1mHc25zvpZWYBx2g7H6&X-Amz-Signature=9e651f74c175b38d8bdd17291e88a803f466b92a24f645c6998e0f10b66582fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP2OIXHA%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK8Va5VWX0AByiEY9hV9pZ3hcAMzQ8ieBpqsR3Q%2F%2BlWAiB427OcTkFIb4uMiC%2Fz6t%2FuTiiI5KBuId%2FwBY3YMq545Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMxIVbwtHhy%2F9a4SuoKtwD9nR9Q6yIspmRUDF2%2FXnnbfiD%2FChb4e4KFZV5Gj2X84prSfOjKYfh3Py48ekaQC5HqVkWHWO4t23FxGO%2BA8yfxsYA2dM%2BzpZaPpGiL6vRYxI1xVeTKFl5oGwhQUnV1k8hQXb9rFus4D6FgbzvTMNYDHIWrtrylZGR8NsuBeO6etWDtZo87F0mcZcQ59IpoJ5Zuy7rBr%2B1%2BH9XA0IgIvm7d%2F1M2PTB35KZOq9wlnBja8rPPVB%2FpA1VtWSf3IrVm%2BArRd%2FVCakdDuwQYvgsmRi2sLweSuJxT6DfMkVTY%2FFuXimeibFCvAOLiJxDA83imCdOO%2BcdIvUDH%2FfmwpX5EA57J8BMgjLsbyQkhnLha2whNuqeM2lpFjh11R1erFfkJyiPsQkIPC%2BMj6kFl4%2FYk37KhUFNhdKVeDmrrAZD5BM7ml5tjcWm5bqg3MLF7EAY1nYOEyGbmK5Y5tMH2eZYt1AUxmdSEQLwguf473E6JnT5R6kP3dmrndWEBUOPJFq3Palb11VkMbxbtR0WD%2BiwcVOt5nSjqGgy9tqXAMMg1vrst2SGDiLu2kPxtSGf35FxZyTM2d3WIb4RzJcE7TT27162vVai0ThgJkTYxWBsNVdJ9VtwmevNbXXqiWyimr8wmLfjxQY6pgGGukQKk3DRcEF1Xl2W1RpNqcU0zuow2A0pNztrvy5fDLmueeTJpEDWw22dNh06toY5jkwLNVfpUQsEEu3Hi1v32sZoex7v%2F0szEjvNFLIHD8fHc261PIS7Wybavt3qebWvVfUT9nhMSXqOXWVZllSsKeRy5NQBLFxYisKlsxsT8wyKhSnWxvovXmvi%2FW1M6051EaIzW0HCJ1mHc25zvpZWYBx2g7H6&X-Amz-Signature=5c4dcbd46f1b59c7b4ba43d631e214ece3e7e8f24614bd72ff04d8ddc8842bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF23DTXZ%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2FWxAP4ufqCSMWIKri9C4MqgD%2BnAaP74HhOqpCcv6sgIgb7Pu2G5FzZp%2FGUdUeZ1%2BhavoGKWspPUuP%2B75RzyvyEgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLblf6pcKJ%2FzW9%2FaNSrcA8IMu9DD5ckxhVb2v%2F2GMjwAXB0VZJq9JeN8xZjLAFEdnFOuUDnrVkHWnFyCtuLX40N3bVl6BGH%2FgiXyjJ4pHr9DoXGM1r3w27DEnstFUd2xkg4GKgyGwbSQS7LBmya9h3YfJ9XpFYAVuKnO3RtdmAZQpqrVyDj5dfGTnCshQILkD1aCKLXDNuDdgxJ8VLSESc4wUzFAF1xH1KgGDtieBplvC7sSdFWATZ0W%2FzfvJUQgqsaeBrVTV6g%2BaUfg6EBjZddKcVXyqcXNL3Om84i25KIG302bnXDwxrsx87f7Q0W0jj0AmizFQoqds0qEcvBJf42i1tbOSEoRkoB6RQ7rFzHfYfT9eiGIhNaHyU99B3t252Y6aSWkGU9HY7CCWeyyrzryBFdZN9ytgjWfNFvPZqSjy1L8kEZGgfch6Xy1PtiamaS%2F39iEDWVAuGEAegHZpX3FK2EvuD1IEeCcrTCaop6XG%2FPzmUd4U48nLmH5G%2F5Ah%2F7bRiGNWcL7biZSc%2Fy1mLSVQggytn7dXs9QedgTpCzFg%2BP7Lm%2FnRpX0aRWmubp1LUiySX331oZe%2BGiCyxpRgMBiaF9st%2F9IILqYURncqdac66AGuve5L2hKYNWxyIDS1hZUQYimObFZ33XsMJK348UGOqUBMyHtIO8vB%2FaRbVqs4Ly0p%2FaKfEZ0wwVdICElKtBPfKynquK2NkP%2Bd4X3Ej%2Bhg%2FDwBelwD%2Br441658iERt30k2CWmEugMFefm%2BJ3QNBpjwdTEaq0cijlGu5UMXr4cG7emybBPSHXRW5sISG4DGvtvsriYU4zEF9S5aOqgHNL5tcvrQ54oovGlIXW%2B%2Blut6fFgZFyb33ZRASaK4%2FJ69vVb%2BGpM0Ucs&X-Amz-Signature=e352a8f96ca871e028dc524cb0bc4b2e2fdf98c0efcd57e9de070251f7927c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP2OIXHA%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK8Va5VWX0AByiEY9hV9pZ3hcAMzQ8ieBpqsR3Q%2F%2BlWAiB427OcTkFIb4uMiC%2Fz6t%2FuTiiI5KBuId%2FwBY3YMq545Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMxIVbwtHhy%2F9a4SuoKtwD9nR9Q6yIspmRUDF2%2FXnnbfiD%2FChb4e4KFZV5Gj2X84prSfOjKYfh3Py48ekaQC5HqVkWHWO4t23FxGO%2BA8yfxsYA2dM%2BzpZaPpGiL6vRYxI1xVeTKFl5oGwhQUnV1k8hQXb9rFus4D6FgbzvTMNYDHIWrtrylZGR8NsuBeO6etWDtZo87F0mcZcQ59IpoJ5Zuy7rBr%2B1%2BH9XA0IgIvm7d%2F1M2PTB35KZOq9wlnBja8rPPVB%2FpA1VtWSf3IrVm%2BArRd%2FVCakdDuwQYvgsmRi2sLweSuJxT6DfMkVTY%2FFuXimeibFCvAOLiJxDA83imCdOO%2BcdIvUDH%2FfmwpX5EA57J8BMgjLsbyQkhnLha2whNuqeM2lpFjh11R1erFfkJyiPsQkIPC%2BMj6kFl4%2FYk37KhUFNhdKVeDmrrAZD5BM7ml5tjcWm5bqg3MLF7EAY1nYOEyGbmK5Y5tMH2eZYt1AUxmdSEQLwguf473E6JnT5R6kP3dmrndWEBUOPJFq3Palb11VkMbxbtR0WD%2BiwcVOt5nSjqGgy9tqXAMMg1vrst2SGDiLu2kPxtSGf35FxZyTM2d3WIb4RzJcE7TT27162vVai0ThgJkTYxWBsNVdJ9VtwmevNbXXqiWyimr8wmLfjxQY6pgGGukQKk3DRcEF1Xl2W1RpNqcU0zuow2A0pNztrvy5fDLmueeTJpEDWw22dNh06toY5jkwLNVfpUQsEEu3Hi1v32sZoex7v%2F0szEjvNFLIHD8fHc261PIS7Wybavt3qebWvVfUT9nhMSXqOXWVZllSsKeRy5NQBLFxYisKlsxsT8wyKhSnWxvovXmvi%2FW1M6051EaIzW0HCJ1mHc25zvpZWYBx2g7H6&X-Amz-Signature=fdd761979a68680320b4741c760e1d8cbeffb838f8bd011a09bc02e0391cd361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP2OIXHA%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK8Va5VWX0AByiEY9hV9pZ3hcAMzQ8ieBpqsR3Q%2F%2BlWAiB427OcTkFIb4uMiC%2Fz6t%2FuTiiI5KBuId%2FwBY3YMq545Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMxIVbwtHhy%2F9a4SuoKtwD9nR9Q6yIspmRUDF2%2FXnnbfiD%2FChb4e4KFZV5Gj2X84prSfOjKYfh3Py48ekaQC5HqVkWHWO4t23FxGO%2BA8yfxsYA2dM%2BzpZaPpGiL6vRYxI1xVeTKFl5oGwhQUnV1k8hQXb9rFus4D6FgbzvTMNYDHIWrtrylZGR8NsuBeO6etWDtZo87F0mcZcQ59IpoJ5Zuy7rBr%2B1%2BH9XA0IgIvm7d%2F1M2PTB35KZOq9wlnBja8rPPVB%2FpA1VtWSf3IrVm%2BArRd%2FVCakdDuwQYvgsmRi2sLweSuJxT6DfMkVTY%2FFuXimeibFCvAOLiJxDA83imCdOO%2BcdIvUDH%2FfmwpX5EA57J8BMgjLsbyQkhnLha2whNuqeM2lpFjh11R1erFfkJyiPsQkIPC%2BMj6kFl4%2FYk37KhUFNhdKVeDmrrAZD5BM7ml5tjcWm5bqg3MLF7EAY1nYOEyGbmK5Y5tMH2eZYt1AUxmdSEQLwguf473E6JnT5R6kP3dmrndWEBUOPJFq3Palb11VkMbxbtR0WD%2BiwcVOt5nSjqGgy9tqXAMMg1vrst2SGDiLu2kPxtSGf35FxZyTM2d3WIb4RzJcE7TT27162vVai0ThgJkTYxWBsNVdJ9VtwmevNbXXqiWyimr8wmLfjxQY6pgGGukQKk3DRcEF1Xl2W1RpNqcU0zuow2A0pNztrvy5fDLmueeTJpEDWw22dNh06toY5jkwLNVfpUQsEEu3Hi1v32sZoex7v%2F0szEjvNFLIHD8fHc261PIS7Wybavt3qebWvVfUT9nhMSXqOXWVZllSsKeRy5NQBLFxYisKlsxsT8wyKhSnWxvovXmvi%2FW1M6051EaIzW0HCJ1mHc25zvpZWYBx2g7H6&X-Amz-Signature=4d89acbb078f50ff8f7bc7426be1c7ac1391d4a7e5db11660b1f554d669f33ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP2OIXHA%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK8Va5VWX0AByiEY9hV9pZ3hcAMzQ8ieBpqsR3Q%2F%2BlWAiB427OcTkFIb4uMiC%2Fz6t%2FuTiiI5KBuId%2FwBY3YMq545Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMxIVbwtHhy%2F9a4SuoKtwD9nR9Q6yIspmRUDF2%2FXnnbfiD%2FChb4e4KFZV5Gj2X84prSfOjKYfh3Py48ekaQC5HqVkWHWO4t23FxGO%2BA8yfxsYA2dM%2BzpZaPpGiL6vRYxI1xVeTKFl5oGwhQUnV1k8hQXb9rFus4D6FgbzvTMNYDHIWrtrylZGR8NsuBeO6etWDtZo87F0mcZcQ59IpoJ5Zuy7rBr%2B1%2BH9XA0IgIvm7d%2F1M2PTB35KZOq9wlnBja8rPPVB%2FpA1VtWSf3IrVm%2BArRd%2FVCakdDuwQYvgsmRi2sLweSuJxT6DfMkVTY%2FFuXimeibFCvAOLiJxDA83imCdOO%2BcdIvUDH%2FfmwpX5EA57J8BMgjLsbyQkhnLha2whNuqeM2lpFjh11R1erFfkJyiPsQkIPC%2BMj6kFl4%2FYk37KhUFNhdKVeDmrrAZD5BM7ml5tjcWm5bqg3MLF7EAY1nYOEyGbmK5Y5tMH2eZYt1AUxmdSEQLwguf473E6JnT5R6kP3dmrndWEBUOPJFq3Palb11VkMbxbtR0WD%2BiwcVOt5nSjqGgy9tqXAMMg1vrst2SGDiLu2kPxtSGf35FxZyTM2d3WIb4RzJcE7TT27162vVai0ThgJkTYxWBsNVdJ9VtwmevNbXXqiWyimr8wmLfjxQY6pgGGukQKk3DRcEF1Xl2W1RpNqcU0zuow2A0pNztrvy5fDLmueeTJpEDWw22dNh06toY5jkwLNVfpUQsEEu3Hi1v32sZoex7v%2F0szEjvNFLIHD8fHc261PIS7Wybavt3qebWvVfUT9nhMSXqOXWVZllSsKeRy5NQBLFxYisKlsxsT8wyKhSnWxvovXmvi%2FW1M6051EaIzW0HCJ1mHc25zvpZWYBx2g7H6&X-Amz-Signature=87ccdc6b67ea1e93b2445df3e0e9d682cbac3bcc8a82d270aeb209c77c7f49f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP2OIXHA%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK8Va5VWX0AByiEY9hV9pZ3hcAMzQ8ieBpqsR3Q%2F%2BlWAiB427OcTkFIb4uMiC%2Fz6t%2FuTiiI5KBuId%2FwBY3YMq545Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMxIVbwtHhy%2F9a4SuoKtwD9nR9Q6yIspmRUDF2%2FXnnbfiD%2FChb4e4KFZV5Gj2X84prSfOjKYfh3Py48ekaQC5HqVkWHWO4t23FxGO%2BA8yfxsYA2dM%2BzpZaPpGiL6vRYxI1xVeTKFl5oGwhQUnV1k8hQXb9rFus4D6FgbzvTMNYDHIWrtrylZGR8NsuBeO6etWDtZo87F0mcZcQ59IpoJ5Zuy7rBr%2B1%2BH9XA0IgIvm7d%2F1M2PTB35KZOq9wlnBja8rPPVB%2FpA1VtWSf3IrVm%2BArRd%2FVCakdDuwQYvgsmRi2sLweSuJxT6DfMkVTY%2FFuXimeibFCvAOLiJxDA83imCdOO%2BcdIvUDH%2FfmwpX5EA57J8BMgjLsbyQkhnLha2whNuqeM2lpFjh11R1erFfkJyiPsQkIPC%2BMj6kFl4%2FYk37KhUFNhdKVeDmrrAZD5BM7ml5tjcWm5bqg3MLF7EAY1nYOEyGbmK5Y5tMH2eZYt1AUxmdSEQLwguf473E6JnT5R6kP3dmrndWEBUOPJFq3Palb11VkMbxbtR0WD%2BiwcVOt5nSjqGgy9tqXAMMg1vrst2SGDiLu2kPxtSGf35FxZyTM2d3WIb4RzJcE7TT27162vVai0ThgJkTYxWBsNVdJ9VtwmevNbXXqiWyimr8wmLfjxQY6pgGGukQKk3DRcEF1Xl2W1RpNqcU0zuow2A0pNztrvy5fDLmueeTJpEDWw22dNh06toY5jkwLNVfpUQsEEu3Hi1v32sZoex7v%2F0szEjvNFLIHD8fHc261PIS7Wybavt3qebWvVfUT9nhMSXqOXWVZllSsKeRy5NQBLFxYisKlsxsT8wyKhSnWxvovXmvi%2FW1M6051EaIzW0HCJ1mHc25zvpZWYBx2g7H6&X-Amz-Signature=81a64dd02588b27ff06c9d1f71b2798f29a26d8785f49a6709021da9d87273ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP2OIXHA%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK8Va5VWX0AByiEY9hV9pZ3hcAMzQ8ieBpqsR3Q%2F%2BlWAiB427OcTkFIb4uMiC%2Fz6t%2FuTiiI5KBuId%2FwBY3YMq545Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMxIVbwtHhy%2F9a4SuoKtwD9nR9Q6yIspmRUDF2%2FXnnbfiD%2FChb4e4KFZV5Gj2X84prSfOjKYfh3Py48ekaQC5HqVkWHWO4t23FxGO%2BA8yfxsYA2dM%2BzpZaPpGiL6vRYxI1xVeTKFl5oGwhQUnV1k8hQXb9rFus4D6FgbzvTMNYDHIWrtrylZGR8NsuBeO6etWDtZo87F0mcZcQ59IpoJ5Zuy7rBr%2B1%2BH9XA0IgIvm7d%2F1M2PTB35KZOq9wlnBja8rPPVB%2FpA1VtWSf3IrVm%2BArRd%2FVCakdDuwQYvgsmRi2sLweSuJxT6DfMkVTY%2FFuXimeibFCvAOLiJxDA83imCdOO%2BcdIvUDH%2FfmwpX5EA57J8BMgjLsbyQkhnLha2whNuqeM2lpFjh11R1erFfkJyiPsQkIPC%2BMj6kFl4%2FYk37KhUFNhdKVeDmrrAZD5BM7ml5tjcWm5bqg3MLF7EAY1nYOEyGbmK5Y5tMH2eZYt1AUxmdSEQLwguf473E6JnT5R6kP3dmrndWEBUOPJFq3Palb11VkMbxbtR0WD%2BiwcVOt5nSjqGgy9tqXAMMg1vrst2SGDiLu2kPxtSGf35FxZyTM2d3WIb4RzJcE7TT27162vVai0ThgJkTYxWBsNVdJ9VtwmevNbXXqiWyimr8wmLfjxQY6pgGGukQKk3DRcEF1Xl2W1RpNqcU0zuow2A0pNztrvy5fDLmueeTJpEDWw22dNh06toY5jkwLNVfpUQsEEu3Hi1v32sZoex7v%2F0szEjvNFLIHD8fHc261PIS7Wybavt3qebWvVfUT9nhMSXqOXWVZllSsKeRy5NQBLFxYisKlsxsT8wyKhSnWxvovXmvi%2FW1M6051EaIzW0HCJ1mHc25zvpZWYBx2g7H6&X-Amz-Signature=7e948f37b3e26e1706287c580c398e0ab03bd50999e4588426fef2d3e2929534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP2OIXHA%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK8Va5VWX0AByiEY9hV9pZ3hcAMzQ8ieBpqsR3Q%2F%2BlWAiB427OcTkFIb4uMiC%2Fz6t%2FuTiiI5KBuId%2FwBY3YMq545Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMxIVbwtHhy%2F9a4SuoKtwD9nR9Q6yIspmRUDF2%2FXnnbfiD%2FChb4e4KFZV5Gj2X84prSfOjKYfh3Py48ekaQC5HqVkWHWO4t23FxGO%2BA8yfxsYA2dM%2BzpZaPpGiL6vRYxI1xVeTKFl5oGwhQUnV1k8hQXb9rFus4D6FgbzvTMNYDHIWrtrylZGR8NsuBeO6etWDtZo87F0mcZcQ59IpoJ5Zuy7rBr%2B1%2BH9XA0IgIvm7d%2F1M2PTB35KZOq9wlnBja8rPPVB%2FpA1VtWSf3IrVm%2BArRd%2FVCakdDuwQYvgsmRi2sLweSuJxT6DfMkVTY%2FFuXimeibFCvAOLiJxDA83imCdOO%2BcdIvUDH%2FfmwpX5EA57J8BMgjLsbyQkhnLha2whNuqeM2lpFjh11R1erFfkJyiPsQkIPC%2BMj6kFl4%2FYk37KhUFNhdKVeDmrrAZD5BM7ml5tjcWm5bqg3MLF7EAY1nYOEyGbmK5Y5tMH2eZYt1AUxmdSEQLwguf473E6JnT5R6kP3dmrndWEBUOPJFq3Palb11VkMbxbtR0WD%2BiwcVOt5nSjqGgy9tqXAMMg1vrst2SGDiLu2kPxtSGf35FxZyTM2d3WIb4RzJcE7TT27162vVai0ThgJkTYxWBsNVdJ9VtwmevNbXXqiWyimr8wmLfjxQY6pgGGukQKk3DRcEF1Xl2W1RpNqcU0zuow2A0pNztrvy5fDLmueeTJpEDWw22dNh06toY5jkwLNVfpUQsEEu3Hi1v32sZoex7v%2F0szEjvNFLIHD8fHc261PIS7Wybavt3qebWvVfUT9nhMSXqOXWVZllSsKeRy5NQBLFxYisKlsxsT8wyKhSnWxvovXmvi%2FW1M6051EaIzW0HCJ1mHc25zvpZWYBx2g7H6&X-Amz-Signature=527c2c6ad38851bdc0ea1f69ffa3acea96ec7c3723070e6a85804d30358cc49b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


