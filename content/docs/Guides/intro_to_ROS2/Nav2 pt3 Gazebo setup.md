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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCJSPYK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRknLhv4jKAvB%2BBNHRgReSAcxJhOsHs1tw8xsn8p8DDAIhANQsnQtEQduXPnu5duz8f16AGDy%2FgU59WYwDxyuocFZuKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz84hCW2qQHQ7BXuMq3ANOdOb9sccMuUG4Dcstrx%2FcCAiUtro4xOtMMq%2Fx3nbpJmPi2smpM1h2WY3BiNWAF36Bgvrynko5jDIl72P6J2erjFOuJeEC5qdrWjKZE%2FErrdEQQm3W4krTwNwUL%2FNdRU2HYqbzIkmiBR%2B1z4yitBdqkycYea8EmJ64Pvs5AHh7R6CtK3pCs7nC%2F0OdNsvbeQh7OkO4%2BO5YT%2FLvFemtehjw9Psj74PWlJOr58yfKvHFnVnflpEe4DfT0LPxWx4hKe0%2BSYZqNSo%2FvJ6PaQfDZh8nzGUbH2jY7hHt5Xedo56UK2Yo1SETPb3AwDUX6JhXmckT0e%2FT5Dp7lfMTjV0NvKECS9wSaLJ%2FPYO85FwIslzwO9UjCtNiMWSoEaoj%2B1xTVoRdnFNYB5EOadh%2By9zU0l0niLaK5vlafOyEeSrjCA7rQUHsJzFYrpf%2Bm0LIH8E9uRjrmVyeObQZjnjnzgi1uMQDy%2Fr2qzDtkdcXT9ezJH2lPfIcwbUMBG2%2FewYaaVc2CdN8yZWrrx37c3KTcT54hLFHLp6McmZ7kFQ60K4kI3xfn%2F%2Ftxcd0FLFxSqbok84XRaLnyOJYJSJop8iGuz5zLAZVL%2F8XdVJHzKofGyZPuaKUK5FykbQ8Jmhh0MkZPDDclePEBjqkAbFx%2Bl0bK%2BJVzZ%2BxyfK1RjgTz8wfELuNqjzuyLQQiIZMoaiiwwY0LtUhpNUvb6lU5NoA1X7Hogtk7HbiB6LovcCTAFdkgtuIXniC1ajLcscgpQzco%2FhRxBwB5nOEcrGXZTeQc4X7NC2wyZUB1A0Ph%2BouESvue0Jn1uhZkMAl3p52D6BfETjoE6fMIkblcvb2VwsyKgXt85PMD105VDPmEqV9Xz%2Bo&X-Amz-Signature=96743cc37a8f7c23a1a2374f1bf2c664d225c126b818ba880d6126249c87290d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCJSPYK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRknLhv4jKAvB%2BBNHRgReSAcxJhOsHs1tw8xsn8p8DDAIhANQsnQtEQduXPnu5duz8f16AGDy%2FgU59WYwDxyuocFZuKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz84hCW2qQHQ7BXuMq3ANOdOb9sccMuUG4Dcstrx%2FcCAiUtro4xOtMMq%2Fx3nbpJmPi2smpM1h2WY3BiNWAF36Bgvrynko5jDIl72P6J2erjFOuJeEC5qdrWjKZE%2FErrdEQQm3W4krTwNwUL%2FNdRU2HYqbzIkmiBR%2B1z4yitBdqkycYea8EmJ64Pvs5AHh7R6CtK3pCs7nC%2F0OdNsvbeQh7OkO4%2BO5YT%2FLvFemtehjw9Psj74PWlJOr58yfKvHFnVnflpEe4DfT0LPxWx4hKe0%2BSYZqNSo%2FvJ6PaQfDZh8nzGUbH2jY7hHt5Xedo56UK2Yo1SETPb3AwDUX6JhXmckT0e%2FT5Dp7lfMTjV0NvKECS9wSaLJ%2FPYO85FwIslzwO9UjCtNiMWSoEaoj%2B1xTVoRdnFNYB5EOadh%2By9zU0l0niLaK5vlafOyEeSrjCA7rQUHsJzFYrpf%2Bm0LIH8E9uRjrmVyeObQZjnjnzgi1uMQDy%2Fr2qzDtkdcXT9ezJH2lPfIcwbUMBG2%2FewYaaVc2CdN8yZWrrx37c3KTcT54hLFHLp6McmZ7kFQ60K4kI3xfn%2F%2Ftxcd0FLFxSqbok84XRaLnyOJYJSJop8iGuz5zLAZVL%2F8XdVJHzKofGyZPuaKUK5FykbQ8Jmhh0MkZPDDclePEBjqkAbFx%2Bl0bK%2BJVzZ%2BxyfK1RjgTz8wfELuNqjzuyLQQiIZMoaiiwwY0LtUhpNUvb6lU5NoA1X7Hogtk7HbiB6LovcCTAFdkgtuIXniC1ajLcscgpQzco%2FhRxBwB5nOEcrGXZTeQc4X7NC2wyZUB1A0Ph%2BouESvue0Jn1uhZkMAl3p52D6BfETjoE6fMIkblcvb2VwsyKgXt85PMD105VDPmEqV9Xz%2Bo&X-Amz-Signature=ce276a32369664d3f662de2e70972521172a0ef458abe8b2a3eb77ca5dc303f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCJSPYK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRknLhv4jKAvB%2BBNHRgReSAcxJhOsHs1tw8xsn8p8DDAIhANQsnQtEQduXPnu5duz8f16AGDy%2FgU59WYwDxyuocFZuKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz84hCW2qQHQ7BXuMq3ANOdOb9sccMuUG4Dcstrx%2FcCAiUtro4xOtMMq%2Fx3nbpJmPi2smpM1h2WY3BiNWAF36Bgvrynko5jDIl72P6J2erjFOuJeEC5qdrWjKZE%2FErrdEQQm3W4krTwNwUL%2FNdRU2HYqbzIkmiBR%2B1z4yitBdqkycYea8EmJ64Pvs5AHh7R6CtK3pCs7nC%2F0OdNsvbeQh7OkO4%2BO5YT%2FLvFemtehjw9Psj74PWlJOr58yfKvHFnVnflpEe4DfT0LPxWx4hKe0%2BSYZqNSo%2FvJ6PaQfDZh8nzGUbH2jY7hHt5Xedo56UK2Yo1SETPb3AwDUX6JhXmckT0e%2FT5Dp7lfMTjV0NvKECS9wSaLJ%2FPYO85FwIslzwO9UjCtNiMWSoEaoj%2B1xTVoRdnFNYB5EOadh%2By9zU0l0niLaK5vlafOyEeSrjCA7rQUHsJzFYrpf%2Bm0LIH8E9uRjrmVyeObQZjnjnzgi1uMQDy%2Fr2qzDtkdcXT9ezJH2lPfIcwbUMBG2%2FewYaaVc2CdN8yZWrrx37c3KTcT54hLFHLp6McmZ7kFQ60K4kI3xfn%2F%2Ftxcd0FLFxSqbok84XRaLnyOJYJSJop8iGuz5zLAZVL%2F8XdVJHzKofGyZPuaKUK5FykbQ8Jmhh0MkZPDDclePEBjqkAbFx%2Bl0bK%2BJVzZ%2BxyfK1RjgTz8wfELuNqjzuyLQQiIZMoaiiwwY0LtUhpNUvb6lU5NoA1X7Hogtk7HbiB6LovcCTAFdkgtuIXniC1ajLcscgpQzco%2FhRxBwB5nOEcrGXZTeQc4X7NC2wyZUB1A0Ph%2BouESvue0Jn1uhZkMAl3p52D6BfETjoE6fMIkblcvb2VwsyKgXt85PMD105VDPmEqV9Xz%2Bo&X-Amz-Signature=f8434e9e84b2e2ba3808d34a91fdbe9a1220a7e1ac199a673c2fa93f13e621f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCJSPYK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRknLhv4jKAvB%2BBNHRgReSAcxJhOsHs1tw8xsn8p8DDAIhANQsnQtEQduXPnu5duz8f16AGDy%2FgU59WYwDxyuocFZuKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz84hCW2qQHQ7BXuMq3ANOdOb9sccMuUG4Dcstrx%2FcCAiUtro4xOtMMq%2Fx3nbpJmPi2smpM1h2WY3BiNWAF36Bgvrynko5jDIl72P6J2erjFOuJeEC5qdrWjKZE%2FErrdEQQm3W4krTwNwUL%2FNdRU2HYqbzIkmiBR%2B1z4yitBdqkycYea8EmJ64Pvs5AHh7R6CtK3pCs7nC%2F0OdNsvbeQh7OkO4%2BO5YT%2FLvFemtehjw9Psj74PWlJOr58yfKvHFnVnflpEe4DfT0LPxWx4hKe0%2BSYZqNSo%2FvJ6PaQfDZh8nzGUbH2jY7hHt5Xedo56UK2Yo1SETPb3AwDUX6JhXmckT0e%2FT5Dp7lfMTjV0NvKECS9wSaLJ%2FPYO85FwIslzwO9UjCtNiMWSoEaoj%2B1xTVoRdnFNYB5EOadh%2By9zU0l0niLaK5vlafOyEeSrjCA7rQUHsJzFYrpf%2Bm0LIH8E9uRjrmVyeObQZjnjnzgi1uMQDy%2Fr2qzDtkdcXT9ezJH2lPfIcwbUMBG2%2FewYaaVc2CdN8yZWrrx37c3KTcT54hLFHLp6McmZ7kFQ60K4kI3xfn%2F%2Ftxcd0FLFxSqbok84XRaLnyOJYJSJop8iGuz5zLAZVL%2F8XdVJHzKofGyZPuaKUK5FykbQ8Jmhh0MkZPDDclePEBjqkAbFx%2Bl0bK%2BJVzZ%2BxyfK1RjgTz8wfELuNqjzuyLQQiIZMoaiiwwY0LtUhpNUvb6lU5NoA1X7Hogtk7HbiB6LovcCTAFdkgtuIXniC1ajLcscgpQzco%2FhRxBwB5nOEcrGXZTeQc4X7NC2wyZUB1A0Ph%2BouESvue0Jn1uhZkMAl3p52D6BfETjoE6fMIkblcvb2VwsyKgXt85PMD105VDPmEqV9Xz%2Bo&X-Amz-Signature=eec50ab7f1aa2134e0b969c42c32513686d34105d3f87a69573683797c410f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645BXH5U%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv7UtxHhm0ar746WX%2BcNAmSXxko00wM%2FH%2BlTivAPwpFAiB6FCKzVeDY1gT9CkZQluqBeqEUlBNUMYLMB1RkI3xbKyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvX7r19acCv4VcwtxKtwD1t7yWFZswyp9d7YATpPhbzaiHM41w7CZNh6355NmCiEGVrZDYUimlpXDNvWZTrCe6I3o5zpfR0gponTeO%2FQOpxEcgtV02F9DmNdTNYhOyL0emORwDCFBqxB8yXyJanatNKwAgtrRR1M%2BTR%2FkxDqkJkh42WWU1uIgXwxes2057%2Bk65e68nWFg7qKw5vYPOZOMYGvI1sF4gm0YlYbEfBWuogX8hNDmgozLqkuS%2B47nOcHF1v5v4tunnnXI325DZAqVsldc670Uf7L7IQVg8inLhjN9wVghDpm%2FwRBjtEI2XNiX5VKaVdB8nfbF%2FsNZL62ZW4mp4H4gP4vZm9MZPBG9KzuWvGn%2Bz4kPYn1Beh1Q%2FKnO0F7f3iro3i3s6cq%2FqYjGpck0c1El%2BJ%2BJw3BjxkSgpsvqJ%2FOM139evT2WCZJEMLqG%2BDIrwL7f%2FFEO4uXdICfiZHXOWpWGP%2FLwwH3%2FaWL4BkS27rXw7KRWagGiELmTRDj%2FEdCqPwxGWFvyMhKY8Sz4q3tulIsvPyth%2B2%2Fp5ULa96Aj8hLLrUxxpbs0h1sYAamZniffwyZI8%2B4LlztmDWfGZQLi0W8EKq%2BCazbRKinpYJD99ke8wwvhhyW94sH5yb0bW4Eqpr6PPiYpQD0wiZXjxAY6pgGdvv51H%2BR2dLz9ofzZQ2swauqBSHb1HpC2UnH6h0IS4xbyHiyTYsJhS%2FHe9IlW%2FK%2FUT6Ag2ULlcl926QTcULUP%2BjLWLSebVb1TZ3jApwajVQLIt94bFQYXJRHOY1AJWBL0v2gOEWliRMICSoMBzD5sydxIKV7itm2YZVTPTopwHymzYLIYwJmi8D0B1%2BNFCWkCvCO1vyO4pndQPraMXLX1QEA4gaY6&X-Amz-Signature=bec5eb6425e449207fc810ed2ab809c18b3c65188ab29b4576ee9af703303b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCJSPYK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRknLhv4jKAvB%2BBNHRgReSAcxJhOsHs1tw8xsn8p8DDAIhANQsnQtEQduXPnu5duz8f16AGDy%2FgU59WYwDxyuocFZuKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz84hCW2qQHQ7BXuMq3ANOdOb9sccMuUG4Dcstrx%2FcCAiUtro4xOtMMq%2Fx3nbpJmPi2smpM1h2WY3BiNWAF36Bgvrynko5jDIl72P6J2erjFOuJeEC5qdrWjKZE%2FErrdEQQm3W4krTwNwUL%2FNdRU2HYqbzIkmiBR%2B1z4yitBdqkycYea8EmJ64Pvs5AHh7R6CtK3pCs7nC%2F0OdNsvbeQh7OkO4%2BO5YT%2FLvFemtehjw9Psj74PWlJOr58yfKvHFnVnflpEe4DfT0LPxWx4hKe0%2BSYZqNSo%2FvJ6PaQfDZh8nzGUbH2jY7hHt5Xedo56UK2Yo1SETPb3AwDUX6JhXmckT0e%2FT5Dp7lfMTjV0NvKECS9wSaLJ%2FPYO85FwIslzwO9UjCtNiMWSoEaoj%2B1xTVoRdnFNYB5EOadh%2By9zU0l0niLaK5vlafOyEeSrjCA7rQUHsJzFYrpf%2Bm0LIH8E9uRjrmVyeObQZjnjnzgi1uMQDy%2Fr2qzDtkdcXT9ezJH2lPfIcwbUMBG2%2FewYaaVc2CdN8yZWrrx37c3KTcT54hLFHLp6McmZ7kFQ60K4kI3xfn%2F%2Ftxcd0FLFxSqbok84XRaLnyOJYJSJop8iGuz5zLAZVL%2F8XdVJHzKofGyZPuaKUK5FykbQ8Jmhh0MkZPDDclePEBjqkAbFx%2Bl0bK%2BJVzZ%2BxyfK1RjgTz8wfELuNqjzuyLQQiIZMoaiiwwY0LtUhpNUvb6lU5NoA1X7Hogtk7HbiB6LovcCTAFdkgtuIXniC1ajLcscgpQzco%2FhRxBwB5nOEcrGXZTeQc4X7NC2wyZUB1A0Ph%2BouESvue0Jn1uhZkMAl3p52D6BfETjoE6fMIkblcvb2VwsyKgXt85PMD105VDPmEqV9Xz%2Bo&X-Amz-Signature=b91810929f1457042ed9170cf3da5378f073d1228040613b49717cd9918a1646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCJSPYK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRknLhv4jKAvB%2BBNHRgReSAcxJhOsHs1tw8xsn8p8DDAIhANQsnQtEQduXPnu5duz8f16AGDy%2FgU59WYwDxyuocFZuKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz84hCW2qQHQ7BXuMq3ANOdOb9sccMuUG4Dcstrx%2FcCAiUtro4xOtMMq%2Fx3nbpJmPi2smpM1h2WY3BiNWAF36Bgvrynko5jDIl72P6J2erjFOuJeEC5qdrWjKZE%2FErrdEQQm3W4krTwNwUL%2FNdRU2HYqbzIkmiBR%2B1z4yitBdqkycYea8EmJ64Pvs5AHh7R6CtK3pCs7nC%2F0OdNsvbeQh7OkO4%2BO5YT%2FLvFemtehjw9Psj74PWlJOr58yfKvHFnVnflpEe4DfT0LPxWx4hKe0%2BSYZqNSo%2FvJ6PaQfDZh8nzGUbH2jY7hHt5Xedo56UK2Yo1SETPb3AwDUX6JhXmckT0e%2FT5Dp7lfMTjV0NvKECS9wSaLJ%2FPYO85FwIslzwO9UjCtNiMWSoEaoj%2B1xTVoRdnFNYB5EOadh%2By9zU0l0niLaK5vlafOyEeSrjCA7rQUHsJzFYrpf%2Bm0LIH8E9uRjrmVyeObQZjnjnzgi1uMQDy%2Fr2qzDtkdcXT9ezJH2lPfIcwbUMBG2%2FewYaaVc2CdN8yZWrrx37c3KTcT54hLFHLp6McmZ7kFQ60K4kI3xfn%2F%2Ftxcd0FLFxSqbok84XRaLnyOJYJSJop8iGuz5zLAZVL%2F8XdVJHzKofGyZPuaKUK5FykbQ8Jmhh0MkZPDDclePEBjqkAbFx%2Bl0bK%2BJVzZ%2BxyfK1RjgTz8wfELuNqjzuyLQQiIZMoaiiwwY0LtUhpNUvb6lU5NoA1X7Hogtk7HbiB6LovcCTAFdkgtuIXniC1ajLcscgpQzco%2FhRxBwB5nOEcrGXZTeQc4X7NC2wyZUB1A0Ph%2BouESvue0Jn1uhZkMAl3p52D6BfETjoE6fMIkblcvb2VwsyKgXt85PMD105VDPmEqV9Xz%2Bo&X-Amz-Signature=83f74aa6bbf0e6aadc1491772613014c85f908f5e075fe6641e67514469dd9d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCJSPYK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRknLhv4jKAvB%2BBNHRgReSAcxJhOsHs1tw8xsn8p8DDAIhANQsnQtEQduXPnu5duz8f16AGDy%2FgU59WYwDxyuocFZuKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz84hCW2qQHQ7BXuMq3ANOdOb9sccMuUG4Dcstrx%2FcCAiUtro4xOtMMq%2Fx3nbpJmPi2smpM1h2WY3BiNWAF36Bgvrynko5jDIl72P6J2erjFOuJeEC5qdrWjKZE%2FErrdEQQm3W4krTwNwUL%2FNdRU2HYqbzIkmiBR%2B1z4yitBdqkycYea8EmJ64Pvs5AHh7R6CtK3pCs7nC%2F0OdNsvbeQh7OkO4%2BO5YT%2FLvFemtehjw9Psj74PWlJOr58yfKvHFnVnflpEe4DfT0LPxWx4hKe0%2BSYZqNSo%2FvJ6PaQfDZh8nzGUbH2jY7hHt5Xedo56UK2Yo1SETPb3AwDUX6JhXmckT0e%2FT5Dp7lfMTjV0NvKECS9wSaLJ%2FPYO85FwIslzwO9UjCtNiMWSoEaoj%2B1xTVoRdnFNYB5EOadh%2By9zU0l0niLaK5vlafOyEeSrjCA7rQUHsJzFYrpf%2Bm0LIH8E9uRjrmVyeObQZjnjnzgi1uMQDy%2Fr2qzDtkdcXT9ezJH2lPfIcwbUMBG2%2FewYaaVc2CdN8yZWrrx37c3KTcT54hLFHLp6McmZ7kFQ60K4kI3xfn%2F%2Ftxcd0FLFxSqbok84XRaLnyOJYJSJop8iGuz5zLAZVL%2F8XdVJHzKofGyZPuaKUK5FykbQ8Jmhh0MkZPDDclePEBjqkAbFx%2Bl0bK%2BJVzZ%2BxyfK1RjgTz8wfELuNqjzuyLQQiIZMoaiiwwY0LtUhpNUvb6lU5NoA1X7Hogtk7HbiB6LovcCTAFdkgtuIXniC1ajLcscgpQzco%2FhRxBwB5nOEcrGXZTeQc4X7NC2wyZUB1A0Ph%2BouESvue0Jn1uhZkMAl3p52D6BfETjoE6fMIkblcvb2VwsyKgXt85PMD105VDPmEqV9Xz%2Bo&X-Amz-Signature=ee77c132baf3973992e6d26aa32bfc8e9b98a2cf73bde54241749459eb9039f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCJSPYK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRknLhv4jKAvB%2BBNHRgReSAcxJhOsHs1tw8xsn8p8DDAIhANQsnQtEQduXPnu5duz8f16AGDy%2FgU59WYwDxyuocFZuKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz84hCW2qQHQ7BXuMq3ANOdOb9sccMuUG4Dcstrx%2FcCAiUtro4xOtMMq%2Fx3nbpJmPi2smpM1h2WY3BiNWAF36Bgvrynko5jDIl72P6J2erjFOuJeEC5qdrWjKZE%2FErrdEQQm3W4krTwNwUL%2FNdRU2HYqbzIkmiBR%2B1z4yitBdqkycYea8EmJ64Pvs5AHh7R6CtK3pCs7nC%2F0OdNsvbeQh7OkO4%2BO5YT%2FLvFemtehjw9Psj74PWlJOr58yfKvHFnVnflpEe4DfT0LPxWx4hKe0%2BSYZqNSo%2FvJ6PaQfDZh8nzGUbH2jY7hHt5Xedo56UK2Yo1SETPb3AwDUX6JhXmckT0e%2FT5Dp7lfMTjV0NvKECS9wSaLJ%2FPYO85FwIslzwO9UjCtNiMWSoEaoj%2B1xTVoRdnFNYB5EOadh%2By9zU0l0niLaK5vlafOyEeSrjCA7rQUHsJzFYrpf%2Bm0LIH8E9uRjrmVyeObQZjnjnzgi1uMQDy%2Fr2qzDtkdcXT9ezJH2lPfIcwbUMBG2%2FewYaaVc2CdN8yZWrrx37c3KTcT54hLFHLp6McmZ7kFQ60K4kI3xfn%2F%2Ftxcd0FLFxSqbok84XRaLnyOJYJSJop8iGuz5zLAZVL%2F8XdVJHzKofGyZPuaKUK5FykbQ8Jmhh0MkZPDDclePEBjqkAbFx%2Bl0bK%2BJVzZ%2BxyfK1RjgTz8wfELuNqjzuyLQQiIZMoaiiwwY0LtUhpNUvb6lU5NoA1X7Hogtk7HbiB6LovcCTAFdkgtuIXniC1ajLcscgpQzco%2FhRxBwB5nOEcrGXZTeQc4X7NC2wyZUB1A0Ph%2BouESvue0Jn1uhZkMAl3p52D6BfETjoE6fMIkblcvb2VwsyKgXt85PMD105VDPmEqV9Xz%2Bo&X-Amz-Signature=484858c0b3999549e3a624b7ac513e57c41cd11a6e10ad1dd6b1d5dead3f75b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCJSPYK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRknLhv4jKAvB%2BBNHRgReSAcxJhOsHs1tw8xsn8p8DDAIhANQsnQtEQduXPnu5duz8f16AGDy%2FgU59WYwDxyuocFZuKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz84hCW2qQHQ7BXuMq3ANOdOb9sccMuUG4Dcstrx%2FcCAiUtro4xOtMMq%2Fx3nbpJmPi2smpM1h2WY3BiNWAF36Bgvrynko5jDIl72P6J2erjFOuJeEC5qdrWjKZE%2FErrdEQQm3W4krTwNwUL%2FNdRU2HYqbzIkmiBR%2B1z4yitBdqkycYea8EmJ64Pvs5AHh7R6CtK3pCs7nC%2F0OdNsvbeQh7OkO4%2BO5YT%2FLvFemtehjw9Psj74PWlJOr58yfKvHFnVnflpEe4DfT0LPxWx4hKe0%2BSYZqNSo%2FvJ6PaQfDZh8nzGUbH2jY7hHt5Xedo56UK2Yo1SETPb3AwDUX6JhXmckT0e%2FT5Dp7lfMTjV0NvKECS9wSaLJ%2FPYO85FwIslzwO9UjCtNiMWSoEaoj%2B1xTVoRdnFNYB5EOadh%2By9zU0l0niLaK5vlafOyEeSrjCA7rQUHsJzFYrpf%2Bm0LIH8E9uRjrmVyeObQZjnjnzgi1uMQDy%2Fr2qzDtkdcXT9ezJH2lPfIcwbUMBG2%2FewYaaVc2CdN8yZWrrx37c3KTcT54hLFHLp6McmZ7kFQ60K4kI3xfn%2F%2Ftxcd0FLFxSqbok84XRaLnyOJYJSJop8iGuz5zLAZVL%2F8XdVJHzKofGyZPuaKUK5FykbQ8Jmhh0MkZPDDclePEBjqkAbFx%2Bl0bK%2BJVzZ%2BxyfK1RjgTz8wfELuNqjzuyLQQiIZMoaiiwwY0LtUhpNUvb6lU5NoA1X7Hogtk7HbiB6LovcCTAFdkgtuIXniC1ajLcscgpQzco%2FhRxBwB5nOEcrGXZTeQc4X7NC2wyZUB1A0Ph%2BouESvue0Jn1uhZkMAl3p52D6BfETjoE6fMIkblcvb2VwsyKgXt85PMD105VDPmEqV9Xz%2Bo&X-Amz-Signature=83e85638a7a4e3e6b34f2a16fb64df45ebdd457dcccdef9d156390766811eeef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCJSPYK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRknLhv4jKAvB%2BBNHRgReSAcxJhOsHs1tw8xsn8p8DDAIhANQsnQtEQduXPnu5duz8f16AGDy%2FgU59WYwDxyuocFZuKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz84hCW2qQHQ7BXuMq3ANOdOb9sccMuUG4Dcstrx%2FcCAiUtro4xOtMMq%2Fx3nbpJmPi2smpM1h2WY3BiNWAF36Bgvrynko5jDIl72P6J2erjFOuJeEC5qdrWjKZE%2FErrdEQQm3W4krTwNwUL%2FNdRU2HYqbzIkmiBR%2B1z4yitBdqkycYea8EmJ64Pvs5AHh7R6CtK3pCs7nC%2F0OdNsvbeQh7OkO4%2BO5YT%2FLvFemtehjw9Psj74PWlJOr58yfKvHFnVnflpEe4DfT0LPxWx4hKe0%2BSYZqNSo%2FvJ6PaQfDZh8nzGUbH2jY7hHt5Xedo56UK2Yo1SETPb3AwDUX6JhXmckT0e%2FT5Dp7lfMTjV0NvKECS9wSaLJ%2FPYO85FwIslzwO9UjCtNiMWSoEaoj%2B1xTVoRdnFNYB5EOadh%2By9zU0l0niLaK5vlafOyEeSrjCA7rQUHsJzFYrpf%2Bm0LIH8E9uRjrmVyeObQZjnjnzgi1uMQDy%2Fr2qzDtkdcXT9ezJH2lPfIcwbUMBG2%2FewYaaVc2CdN8yZWrrx37c3KTcT54hLFHLp6McmZ7kFQ60K4kI3xfn%2F%2Ftxcd0FLFxSqbok84XRaLnyOJYJSJop8iGuz5zLAZVL%2F8XdVJHzKofGyZPuaKUK5FykbQ8Jmhh0MkZPDDclePEBjqkAbFx%2Bl0bK%2BJVzZ%2BxyfK1RjgTz8wfELuNqjzuyLQQiIZMoaiiwwY0LtUhpNUvb6lU5NoA1X7Hogtk7HbiB6LovcCTAFdkgtuIXniC1ajLcscgpQzco%2FhRxBwB5nOEcrGXZTeQc4X7NC2wyZUB1A0Ph%2BouESvue0Jn1uhZkMAl3p52D6BfETjoE6fMIkblcvb2VwsyKgXt85PMD105VDPmEqV9Xz%2Bo&X-Amz-Signature=0501540c973cd7fd9acc494ed48b38fba0adebf74b2b616347115ae843821b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
