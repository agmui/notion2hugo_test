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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXREYLU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDNj%2BGIJWOzkddGXwLZ8gcTHvC2EOxraSecE0jXz6UOUwIgRhqQCJM3485KFhRTof%2BC%2BRYWgY6XB4XXYDQX1vTsAQsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHHgqdnWgFg67Pgz6CrcA0%2BpokX1jOeKFYuWKAmphjMNP0FmDyGkX9YujTpaoN8%2Bp5SsojV2CpGRRHh2Adw5uGm1mvPiy6RNMxLwLuE3J2Oe9jT7FQGR0RLd4bTKQacbihvacMZT%2F2Ot%2FANedp%2For5x3gL6tzKl274GivumYua0lrKtwdbRiuduMSEXMRv2RB5GGDSGSCFP94EyYiRpfHsywcvaqpgBRriG0u17Jm%2BwzT%2BvKhSYn%2B%2FOXzihDer6%2FWPsoQFJioZ10HETxAofz5sPRxzWwHzxZgH2Zjp5LNHNdWE52Qqw6LFIOIM6b8onuujO34HF7aw5KWONEfrMYwyzot0nGTnYuV%2BnXm1%2F2VsTsg77Ktl4%2BPr7kdDUZDtCzdFGb6PnZVaBhONH6l0cQkzEfhsjcoTilMbxwNoPozMIqQ40P7%2FcTyDmXmn64bB1%2BoyTE9lxU7cmdEEZRMUMkoDOe2fZM5SSfDv0eI%2F5QaKZLgnwTaC%2Fe%2BhmS6kFAbGBfiYQGv73GiK%2BPCR3CszT5hWTKEnt5KDCnHqxn%2BfSBj9aYrXR3ZmSjgh0%2BPVB24Mk7Yoilr6OKa2bibwUS2VArjVBtN20mxEwR9mXnkYTUO06e3xTZTTnrpcGDmnUTtKj6LHiKSFc9UPCv%2FLjtMMLpwMQGOqUBDmQJ1bdOhSKN%2FLfu3P3SdWSKyoe0usmtdq9EZvvPetybPtTkZECgp5983YsiiikGeDJDwJalntir6w5RDc%2BCQtXURv6Q7BFhnkz8aOP2eW0bES0rVO5xkqX7sOzUIoq3elxAdPcZaG66j9JVsz7sSAzB1M0TXBcdwPqWaWITIQy%2FplVgTvbYm5UAgjByLzYb3tzGVuDmPkgDd35R1kK9%2B1NVA6VY&X-Amz-Signature=be425620dbd53983cfa2d4ec01ad7f4175d3e6ccd6d2b5ebbad99b9214a46cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXREYLU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDNj%2BGIJWOzkddGXwLZ8gcTHvC2EOxraSecE0jXz6UOUwIgRhqQCJM3485KFhRTof%2BC%2BRYWgY6XB4XXYDQX1vTsAQsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHHgqdnWgFg67Pgz6CrcA0%2BpokX1jOeKFYuWKAmphjMNP0FmDyGkX9YujTpaoN8%2Bp5SsojV2CpGRRHh2Adw5uGm1mvPiy6RNMxLwLuE3J2Oe9jT7FQGR0RLd4bTKQacbihvacMZT%2F2Ot%2FANedp%2For5x3gL6tzKl274GivumYua0lrKtwdbRiuduMSEXMRv2RB5GGDSGSCFP94EyYiRpfHsywcvaqpgBRriG0u17Jm%2BwzT%2BvKhSYn%2B%2FOXzihDer6%2FWPsoQFJioZ10HETxAofz5sPRxzWwHzxZgH2Zjp5LNHNdWE52Qqw6LFIOIM6b8onuujO34HF7aw5KWONEfrMYwyzot0nGTnYuV%2BnXm1%2F2VsTsg77Ktl4%2BPr7kdDUZDtCzdFGb6PnZVaBhONH6l0cQkzEfhsjcoTilMbxwNoPozMIqQ40P7%2FcTyDmXmn64bB1%2BoyTE9lxU7cmdEEZRMUMkoDOe2fZM5SSfDv0eI%2F5QaKZLgnwTaC%2Fe%2BhmS6kFAbGBfiYQGv73GiK%2BPCR3CszT5hWTKEnt5KDCnHqxn%2BfSBj9aYrXR3ZmSjgh0%2BPVB24Mk7Yoilr6OKa2bibwUS2VArjVBtN20mxEwR9mXnkYTUO06e3xTZTTnrpcGDmnUTtKj6LHiKSFc9UPCv%2FLjtMMLpwMQGOqUBDmQJ1bdOhSKN%2FLfu3P3SdWSKyoe0usmtdq9EZvvPetybPtTkZECgp5983YsiiikGeDJDwJalntir6w5RDc%2BCQtXURv6Q7BFhnkz8aOP2eW0bES0rVO5xkqX7sOzUIoq3elxAdPcZaG66j9JVsz7sSAzB1M0TXBcdwPqWaWITIQy%2FplVgTvbYm5UAgjByLzYb3tzGVuDmPkgDd35R1kK9%2B1NVA6VY&X-Amz-Signature=d0d35b49f478f42bf65e12634e4ed026de2f6a6d39becf56e960b6adca3b3d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXREYLU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDNj%2BGIJWOzkddGXwLZ8gcTHvC2EOxraSecE0jXz6UOUwIgRhqQCJM3485KFhRTof%2BC%2BRYWgY6XB4XXYDQX1vTsAQsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHHgqdnWgFg67Pgz6CrcA0%2BpokX1jOeKFYuWKAmphjMNP0FmDyGkX9YujTpaoN8%2Bp5SsojV2CpGRRHh2Adw5uGm1mvPiy6RNMxLwLuE3J2Oe9jT7FQGR0RLd4bTKQacbihvacMZT%2F2Ot%2FANedp%2For5x3gL6tzKl274GivumYua0lrKtwdbRiuduMSEXMRv2RB5GGDSGSCFP94EyYiRpfHsywcvaqpgBRriG0u17Jm%2BwzT%2BvKhSYn%2B%2FOXzihDer6%2FWPsoQFJioZ10HETxAofz5sPRxzWwHzxZgH2Zjp5LNHNdWE52Qqw6LFIOIM6b8onuujO34HF7aw5KWONEfrMYwyzot0nGTnYuV%2BnXm1%2F2VsTsg77Ktl4%2BPr7kdDUZDtCzdFGb6PnZVaBhONH6l0cQkzEfhsjcoTilMbxwNoPozMIqQ40P7%2FcTyDmXmn64bB1%2BoyTE9lxU7cmdEEZRMUMkoDOe2fZM5SSfDv0eI%2F5QaKZLgnwTaC%2Fe%2BhmS6kFAbGBfiYQGv73GiK%2BPCR3CszT5hWTKEnt5KDCnHqxn%2BfSBj9aYrXR3ZmSjgh0%2BPVB24Mk7Yoilr6OKa2bibwUS2VArjVBtN20mxEwR9mXnkYTUO06e3xTZTTnrpcGDmnUTtKj6LHiKSFc9UPCv%2FLjtMMLpwMQGOqUBDmQJ1bdOhSKN%2FLfu3P3SdWSKyoe0usmtdq9EZvvPetybPtTkZECgp5983YsiiikGeDJDwJalntir6w5RDc%2BCQtXURv6Q7BFhnkz8aOP2eW0bES0rVO5xkqX7sOzUIoq3elxAdPcZaG66j9JVsz7sSAzB1M0TXBcdwPqWaWITIQy%2FplVgTvbYm5UAgjByLzYb3tzGVuDmPkgDd35R1kK9%2B1NVA6VY&X-Amz-Signature=eae5c9c088ecc0d3e380ba0b6dd0d08d45e5e15d8b6d42a7ff8056b7cb5466b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXREYLU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDNj%2BGIJWOzkddGXwLZ8gcTHvC2EOxraSecE0jXz6UOUwIgRhqQCJM3485KFhRTof%2BC%2BRYWgY6XB4XXYDQX1vTsAQsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHHgqdnWgFg67Pgz6CrcA0%2BpokX1jOeKFYuWKAmphjMNP0FmDyGkX9YujTpaoN8%2Bp5SsojV2CpGRRHh2Adw5uGm1mvPiy6RNMxLwLuE3J2Oe9jT7FQGR0RLd4bTKQacbihvacMZT%2F2Ot%2FANedp%2For5x3gL6tzKl274GivumYua0lrKtwdbRiuduMSEXMRv2RB5GGDSGSCFP94EyYiRpfHsywcvaqpgBRriG0u17Jm%2BwzT%2BvKhSYn%2B%2FOXzihDer6%2FWPsoQFJioZ10HETxAofz5sPRxzWwHzxZgH2Zjp5LNHNdWE52Qqw6LFIOIM6b8onuujO34HF7aw5KWONEfrMYwyzot0nGTnYuV%2BnXm1%2F2VsTsg77Ktl4%2BPr7kdDUZDtCzdFGb6PnZVaBhONH6l0cQkzEfhsjcoTilMbxwNoPozMIqQ40P7%2FcTyDmXmn64bB1%2BoyTE9lxU7cmdEEZRMUMkoDOe2fZM5SSfDv0eI%2F5QaKZLgnwTaC%2Fe%2BhmS6kFAbGBfiYQGv73GiK%2BPCR3CszT5hWTKEnt5KDCnHqxn%2BfSBj9aYrXR3ZmSjgh0%2BPVB24Mk7Yoilr6OKa2bibwUS2VArjVBtN20mxEwR9mXnkYTUO06e3xTZTTnrpcGDmnUTtKj6LHiKSFc9UPCv%2FLjtMMLpwMQGOqUBDmQJ1bdOhSKN%2FLfu3P3SdWSKyoe0usmtdq9EZvvPetybPtTkZECgp5983YsiiikGeDJDwJalntir6w5RDc%2BCQtXURv6Q7BFhnkz8aOP2eW0bES0rVO5xkqX7sOzUIoq3elxAdPcZaG66j9JVsz7sSAzB1M0TXBcdwPqWaWITIQy%2FplVgTvbYm5UAgjByLzYb3tzGVuDmPkgDd35R1kK9%2B1NVA6VY&X-Amz-Signature=18d35ae1dd9881338acd2f333e50392a4e2ea9343e8cbe964bef530fc4a83898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624TZVORM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDcQMKvLpsAjgLpJtZqsnsB1tzwsT5wnheM%2FPd6sSOPAgIhAKpLU7G76kNnAxj3BbWa9UWRIVT%2FKJaFr4m0M8rpK9afKv8DCD0QABoMNjM3NDIzMTgzODA1IgyVkpJrv70Tl4S%2FCPkq3AOMsbqAYfx7KXRqsv0xBNhLW1hc8Fef4dquIXpiWJBxTooAWGYTfdmEDQbcCYzu9qWaVrMSEHovqvBS0fuD%2FrptewdXrpZGPbJ1Zdlpz8QAzItI46%2FT5CLG0ZZRjE8rYTilqgEylwFbJqJqT53EV4yCRMdyZIw73G1RBIPtrHsUQTIWwrJ0M5i0sARXOBKECpehyLMjUeQ1tAL6%2Bnh%2FsTpgfg7soaq7ynvEM0OIoJ1pD50%2B%2FoPImc3qEiUEYAIhzBHERdRvG0%2BLMXrWVIQINCoyW7bLCL5z0iM0lAKawh6VIiMlVAmklJmR7T3i5VUTvmzwGgfaCFjkjmRJaWaD1EIklu89%2BcyJbLCioZ6paj9k0yXiYyjFnGGD5PPCzQIt%2FrbV2JnDd2Nl3YyP58C0pl01kBIfEvbDNmC0bcANC5yCNFsfmAIeG6UIhCfIzWFKFkacZO3qLUjG2mFUxMZe9w0XmWMYZCgxiuW4YW2C7kQFkvRqtOWX274%2FvZZNVeyCkfa%2BCQ9Ol3YVSemIgjKI0EvoeuSn0nHZk0mqGWAuh9QUY%2FrqsR%2BrhVppH%2B2ufrzAN%2FXkHqPxb6sQXkD%2BqyOHAneJzVVXalHFKZ3kLTm08SnDgN7pdGaibif%2FF6yN8DD46MDEBjqkAWLlE%2FKqI8OU%2BtnSlw7YNVeqXxwBqdVW3FjHibrvq5M1vY3ZeQAJ1FZpVSFcaVFxYAnHr2PuIsnyTbtONbJyWNYmmItJULVvg1O%2Fo4Zr7AiZ6FZrC3IWLiPEjEw0LcDo1MscyCCdU2lkxBPSmMOhoPkcsVHGXX5i%2BvsrXrtVVCFlj5KV4L7inRqxQOqHEmOpowXA9yL8tBGt8QRmeCqlfvJftjY1&X-Amz-Signature=5311629582a743a832bd01cd6bc8548f6c145d660acecb1ac17ad2a95c552a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXREYLU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDNj%2BGIJWOzkddGXwLZ8gcTHvC2EOxraSecE0jXz6UOUwIgRhqQCJM3485KFhRTof%2BC%2BRYWgY6XB4XXYDQX1vTsAQsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHHgqdnWgFg67Pgz6CrcA0%2BpokX1jOeKFYuWKAmphjMNP0FmDyGkX9YujTpaoN8%2Bp5SsojV2CpGRRHh2Adw5uGm1mvPiy6RNMxLwLuE3J2Oe9jT7FQGR0RLd4bTKQacbihvacMZT%2F2Ot%2FANedp%2For5x3gL6tzKl274GivumYua0lrKtwdbRiuduMSEXMRv2RB5GGDSGSCFP94EyYiRpfHsywcvaqpgBRriG0u17Jm%2BwzT%2BvKhSYn%2B%2FOXzihDer6%2FWPsoQFJioZ10HETxAofz5sPRxzWwHzxZgH2Zjp5LNHNdWE52Qqw6LFIOIM6b8onuujO34HF7aw5KWONEfrMYwyzot0nGTnYuV%2BnXm1%2F2VsTsg77Ktl4%2BPr7kdDUZDtCzdFGb6PnZVaBhONH6l0cQkzEfhsjcoTilMbxwNoPozMIqQ40P7%2FcTyDmXmn64bB1%2BoyTE9lxU7cmdEEZRMUMkoDOe2fZM5SSfDv0eI%2F5QaKZLgnwTaC%2Fe%2BhmS6kFAbGBfiYQGv73GiK%2BPCR3CszT5hWTKEnt5KDCnHqxn%2BfSBj9aYrXR3ZmSjgh0%2BPVB24Mk7Yoilr6OKa2bibwUS2VArjVBtN20mxEwR9mXnkYTUO06e3xTZTTnrpcGDmnUTtKj6LHiKSFc9UPCv%2FLjtMMLpwMQGOqUBDmQJ1bdOhSKN%2FLfu3P3SdWSKyoe0usmtdq9EZvvPetybPtTkZECgp5983YsiiikGeDJDwJalntir6w5RDc%2BCQtXURv6Q7BFhnkz8aOP2eW0bES0rVO5xkqX7sOzUIoq3elxAdPcZaG66j9JVsz7sSAzB1M0TXBcdwPqWaWITIQy%2FplVgTvbYm5UAgjByLzYb3tzGVuDmPkgDd35R1kK9%2B1NVA6VY&X-Amz-Signature=f665b753b45f96a81201272c478f973615ff627d553567534637121860295eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXREYLU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDNj%2BGIJWOzkddGXwLZ8gcTHvC2EOxraSecE0jXz6UOUwIgRhqQCJM3485KFhRTof%2BC%2BRYWgY6XB4XXYDQX1vTsAQsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHHgqdnWgFg67Pgz6CrcA0%2BpokX1jOeKFYuWKAmphjMNP0FmDyGkX9YujTpaoN8%2Bp5SsojV2CpGRRHh2Adw5uGm1mvPiy6RNMxLwLuE3J2Oe9jT7FQGR0RLd4bTKQacbihvacMZT%2F2Ot%2FANedp%2For5x3gL6tzKl274GivumYua0lrKtwdbRiuduMSEXMRv2RB5GGDSGSCFP94EyYiRpfHsywcvaqpgBRriG0u17Jm%2BwzT%2BvKhSYn%2B%2FOXzihDer6%2FWPsoQFJioZ10HETxAofz5sPRxzWwHzxZgH2Zjp5LNHNdWE52Qqw6LFIOIM6b8onuujO34HF7aw5KWONEfrMYwyzot0nGTnYuV%2BnXm1%2F2VsTsg77Ktl4%2BPr7kdDUZDtCzdFGb6PnZVaBhONH6l0cQkzEfhsjcoTilMbxwNoPozMIqQ40P7%2FcTyDmXmn64bB1%2BoyTE9lxU7cmdEEZRMUMkoDOe2fZM5SSfDv0eI%2F5QaKZLgnwTaC%2Fe%2BhmS6kFAbGBfiYQGv73GiK%2BPCR3CszT5hWTKEnt5KDCnHqxn%2BfSBj9aYrXR3ZmSjgh0%2BPVB24Mk7Yoilr6OKa2bibwUS2VArjVBtN20mxEwR9mXnkYTUO06e3xTZTTnrpcGDmnUTtKj6LHiKSFc9UPCv%2FLjtMMLpwMQGOqUBDmQJ1bdOhSKN%2FLfu3P3SdWSKyoe0usmtdq9EZvvPetybPtTkZECgp5983YsiiikGeDJDwJalntir6w5RDc%2BCQtXURv6Q7BFhnkz8aOP2eW0bES0rVO5xkqX7sOzUIoq3elxAdPcZaG66j9JVsz7sSAzB1M0TXBcdwPqWaWITIQy%2FplVgTvbYm5UAgjByLzYb3tzGVuDmPkgDd35R1kK9%2B1NVA6VY&X-Amz-Signature=bea8e3c57aac12e9b034c86db347c2fcafeb7ca80209c2d03359a47a88889fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXREYLU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDNj%2BGIJWOzkddGXwLZ8gcTHvC2EOxraSecE0jXz6UOUwIgRhqQCJM3485KFhRTof%2BC%2BRYWgY6XB4XXYDQX1vTsAQsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHHgqdnWgFg67Pgz6CrcA0%2BpokX1jOeKFYuWKAmphjMNP0FmDyGkX9YujTpaoN8%2Bp5SsojV2CpGRRHh2Adw5uGm1mvPiy6RNMxLwLuE3J2Oe9jT7FQGR0RLd4bTKQacbihvacMZT%2F2Ot%2FANedp%2For5x3gL6tzKl274GivumYua0lrKtwdbRiuduMSEXMRv2RB5GGDSGSCFP94EyYiRpfHsywcvaqpgBRriG0u17Jm%2BwzT%2BvKhSYn%2B%2FOXzihDer6%2FWPsoQFJioZ10HETxAofz5sPRxzWwHzxZgH2Zjp5LNHNdWE52Qqw6LFIOIM6b8onuujO34HF7aw5KWONEfrMYwyzot0nGTnYuV%2BnXm1%2F2VsTsg77Ktl4%2BPr7kdDUZDtCzdFGb6PnZVaBhONH6l0cQkzEfhsjcoTilMbxwNoPozMIqQ40P7%2FcTyDmXmn64bB1%2BoyTE9lxU7cmdEEZRMUMkoDOe2fZM5SSfDv0eI%2F5QaKZLgnwTaC%2Fe%2BhmS6kFAbGBfiYQGv73GiK%2BPCR3CszT5hWTKEnt5KDCnHqxn%2BfSBj9aYrXR3ZmSjgh0%2BPVB24Mk7Yoilr6OKa2bibwUS2VArjVBtN20mxEwR9mXnkYTUO06e3xTZTTnrpcGDmnUTtKj6LHiKSFc9UPCv%2FLjtMMLpwMQGOqUBDmQJ1bdOhSKN%2FLfu3P3SdWSKyoe0usmtdq9EZvvPetybPtTkZECgp5983YsiiikGeDJDwJalntir6w5RDc%2BCQtXURv6Q7BFhnkz8aOP2eW0bES0rVO5xkqX7sOzUIoq3elxAdPcZaG66j9JVsz7sSAzB1M0TXBcdwPqWaWITIQy%2FplVgTvbYm5UAgjByLzYb3tzGVuDmPkgDd35R1kK9%2B1NVA6VY&X-Amz-Signature=fc47a7f00ac94c9a18396b2d9403dbf8f5c0ecf00e38447a3049201d585ef10f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXREYLU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDNj%2BGIJWOzkddGXwLZ8gcTHvC2EOxraSecE0jXz6UOUwIgRhqQCJM3485KFhRTof%2BC%2BRYWgY6XB4XXYDQX1vTsAQsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHHgqdnWgFg67Pgz6CrcA0%2BpokX1jOeKFYuWKAmphjMNP0FmDyGkX9YujTpaoN8%2Bp5SsojV2CpGRRHh2Adw5uGm1mvPiy6RNMxLwLuE3J2Oe9jT7FQGR0RLd4bTKQacbihvacMZT%2F2Ot%2FANedp%2For5x3gL6tzKl274GivumYua0lrKtwdbRiuduMSEXMRv2RB5GGDSGSCFP94EyYiRpfHsywcvaqpgBRriG0u17Jm%2BwzT%2BvKhSYn%2B%2FOXzihDer6%2FWPsoQFJioZ10HETxAofz5sPRxzWwHzxZgH2Zjp5LNHNdWE52Qqw6LFIOIM6b8onuujO34HF7aw5KWONEfrMYwyzot0nGTnYuV%2BnXm1%2F2VsTsg77Ktl4%2BPr7kdDUZDtCzdFGb6PnZVaBhONH6l0cQkzEfhsjcoTilMbxwNoPozMIqQ40P7%2FcTyDmXmn64bB1%2BoyTE9lxU7cmdEEZRMUMkoDOe2fZM5SSfDv0eI%2F5QaKZLgnwTaC%2Fe%2BhmS6kFAbGBfiYQGv73GiK%2BPCR3CszT5hWTKEnt5KDCnHqxn%2BfSBj9aYrXR3ZmSjgh0%2BPVB24Mk7Yoilr6OKa2bibwUS2VArjVBtN20mxEwR9mXnkYTUO06e3xTZTTnrpcGDmnUTtKj6LHiKSFc9UPCv%2FLjtMMLpwMQGOqUBDmQJ1bdOhSKN%2FLfu3P3SdWSKyoe0usmtdq9EZvvPetybPtTkZECgp5983YsiiikGeDJDwJalntir6w5RDc%2BCQtXURv6Q7BFhnkz8aOP2eW0bES0rVO5xkqX7sOzUIoq3elxAdPcZaG66j9JVsz7sSAzB1M0TXBcdwPqWaWITIQy%2FplVgTvbYm5UAgjByLzYb3tzGVuDmPkgDd35R1kK9%2B1NVA6VY&X-Amz-Signature=6707b125e52dcb3ddc86579aa9590118cfffb71b008019f8de919d53a58bf5f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXREYLU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDNj%2BGIJWOzkddGXwLZ8gcTHvC2EOxraSecE0jXz6UOUwIgRhqQCJM3485KFhRTof%2BC%2BRYWgY6XB4XXYDQX1vTsAQsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHHgqdnWgFg67Pgz6CrcA0%2BpokX1jOeKFYuWKAmphjMNP0FmDyGkX9YujTpaoN8%2Bp5SsojV2CpGRRHh2Adw5uGm1mvPiy6RNMxLwLuE3J2Oe9jT7FQGR0RLd4bTKQacbihvacMZT%2F2Ot%2FANedp%2For5x3gL6tzKl274GivumYua0lrKtwdbRiuduMSEXMRv2RB5GGDSGSCFP94EyYiRpfHsywcvaqpgBRriG0u17Jm%2BwzT%2BvKhSYn%2B%2FOXzihDer6%2FWPsoQFJioZ10HETxAofz5sPRxzWwHzxZgH2Zjp5LNHNdWE52Qqw6LFIOIM6b8onuujO34HF7aw5KWONEfrMYwyzot0nGTnYuV%2BnXm1%2F2VsTsg77Ktl4%2BPr7kdDUZDtCzdFGb6PnZVaBhONH6l0cQkzEfhsjcoTilMbxwNoPozMIqQ40P7%2FcTyDmXmn64bB1%2BoyTE9lxU7cmdEEZRMUMkoDOe2fZM5SSfDv0eI%2F5QaKZLgnwTaC%2Fe%2BhmS6kFAbGBfiYQGv73GiK%2BPCR3CszT5hWTKEnt5KDCnHqxn%2BfSBj9aYrXR3ZmSjgh0%2BPVB24Mk7Yoilr6OKa2bibwUS2VArjVBtN20mxEwR9mXnkYTUO06e3xTZTTnrpcGDmnUTtKj6LHiKSFc9UPCv%2FLjtMMLpwMQGOqUBDmQJ1bdOhSKN%2FLfu3P3SdWSKyoe0usmtdq9EZvvPetybPtTkZECgp5983YsiiikGeDJDwJalntir6w5RDc%2BCQtXURv6Q7BFhnkz8aOP2eW0bES0rVO5xkqX7sOzUIoq3elxAdPcZaG66j9JVsz7sSAzB1M0TXBcdwPqWaWITIQy%2FplVgTvbYm5UAgjByLzYb3tzGVuDmPkgDd35R1kK9%2B1NVA6VY&X-Amz-Signature=0799abbb7a6b4e9338f6b5603a23da90a608c2b489b3e9912c77012f29e7cefd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXREYLU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDNj%2BGIJWOzkddGXwLZ8gcTHvC2EOxraSecE0jXz6UOUwIgRhqQCJM3485KFhRTof%2BC%2BRYWgY6XB4XXYDQX1vTsAQsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHHgqdnWgFg67Pgz6CrcA0%2BpokX1jOeKFYuWKAmphjMNP0FmDyGkX9YujTpaoN8%2Bp5SsojV2CpGRRHh2Adw5uGm1mvPiy6RNMxLwLuE3J2Oe9jT7FQGR0RLd4bTKQacbihvacMZT%2F2Ot%2FANedp%2For5x3gL6tzKl274GivumYua0lrKtwdbRiuduMSEXMRv2RB5GGDSGSCFP94EyYiRpfHsywcvaqpgBRriG0u17Jm%2BwzT%2BvKhSYn%2B%2FOXzihDer6%2FWPsoQFJioZ10HETxAofz5sPRxzWwHzxZgH2Zjp5LNHNdWE52Qqw6LFIOIM6b8onuujO34HF7aw5KWONEfrMYwyzot0nGTnYuV%2BnXm1%2F2VsTsg77Ktl4%2BPr7kdDUZDtCzdFGb6PnZVaBhONH6l0cQkzEfhsjcoTilMbxwNoPozMIqQ40P7%2FcTyDmXmn64bB1%2BoyTE9lxU7cmdEEZRMUMkoDOe2fZM5SSfDv0eI%2F5QaKZLgnwTaC%2Fe%2BhmS6kFAbGBfiYQGv73GiK%2BPCR3CszT5hWTKEnt5KDCnHqxn%2BfSBj9aYrXR3ZmSjgh0%2BPVB24Mk7Yoilr6OKa2bibwUS2VArjVBtN20mxEwR9mXnkYTUO06e3xTZTTnrpcGDmnUTtKj6LHiKSFc9UPCv%2FLjtMMLpwMQGOqUBDmQJ1bdOhSKN%2FLfu3P3SdWSKyoe0usmtdq9EZvvPetybPtTkZECgp5983YsiiikGeDJDwJalntir6w5RDc%2BCQtXURv6Q7BFhnkz8aOP2eW0bES0rVO5xkqX7sOzUIoq3elxAdPcZaG66j9JVsz7sSAzB1M0TXBcdwPqWaWITIQy%2FplVgTvbYm5UAgjByLzYb3tzGVuDmPkgDd35R1kK9%2B1NVA6VY&X-Amz-Signature=0da2c6c2fd0ddd9cc24ac56c0b21fba7748bbe5cb8acecfc6caf622b5a7a3ac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
