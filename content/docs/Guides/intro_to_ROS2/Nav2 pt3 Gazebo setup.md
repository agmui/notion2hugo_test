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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YNK4GY%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0oYPraNU9EZ0fBD0ZQkh0%2BGentCGLyR2eszOikdaFHAiEAnuXsaTNkfQdV5TKY5GsJMuzlFc14Ipe3PmCfNFdaTUEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPdlrzkhAdrVYBr5QCrcAxzl7fQRVV5DVt24y9%2BPhAxXgDrE%2F2qQPrkCXx9TwZv0%2B4cA4qLynBAesDyBTaPs1K9qmGmrhOIq78Eo6CjT59LwmGcVZje7jmYlHJN84sSkGoCRIMHkEx7o5luLxVw2wB8tzU%2F2P5fGkGUIPJuNRPqAHF7CZNLVN3qUmVSkqru98GThC1a8FD2%2FioNE%2Fulhj95UjblQ3A15sYJeB%2FxEl4yt5mbjAL%2FKVo5nh1v3oMkLOF7mg%2FbbicflPg3ppoilSL9ZrISG%2FGzPCdr%2FkpOhgUxfNW%2FIRo%2FpfdCsjsWCWySU3WHqKMCkhbrBeWWN7TOZZOOitWIqLiLX%2BVQBj5tuBpdkCv1zzGUJLR8NKf4b%2BCnAhxeTaLiyjK%2F8v%2BKXPBZbs0n2x0eRG3T%2B%2FMLRrSbFGfCxFboHNaEff7PdwHFQW5MmDCK2wmVm3R2mhpH2NmriQgSEqXB0dND%2FRgpMLV9TsCXbmOHrsc5XrbiKUs9CHIv40fE5lE%2FCdlP%2BXZbS0S1umRt1pOe0YJ1wXJf2PD3AlK5oyUEi1uA30ERVLaInBexi68wN2iKMD3qdJlQY1Du%2FjcstkLf5JJMi2xhzQgY8iNZ4LEa5aCMP7r0MUn0YUog2ppyz%2BQwMiv42MJgzMIuqtscGOqUBt8T08Nd4382DQCoWDPLZJWFme%2BwfbtKEkI0QZNNwPHBmtPYZk9Ic%2B3ejU3rUZDMYawErOpN3xa4PBJ15VKQ1ETQxsLDCPOJaf4ahWSLJILC%2FpXYgOgZ94Uv6e8nfcxgxm%2FjYznNc0sK9j2Y3H9Ke2Df%2BB76ZrFHC8SDNiM6XqLYbrbQZOcllQSj9AGLxzRDYt6mxhgqaZoC7VjbW8TFfJszMY4CC&X-Amz-Signature=eed00f6b917b0e56b31fbb92fa059eb71423f2f31255f90bc3f0c1b258798dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YNK4GY%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0oYPraNU9EZ0fBD0ZQkh0%2BGentCGLyR2eszOikdaFHAiEAnuXsaTNkfQdV5TKY5GsJMuzlFc14Ipe3PmCfNFdaTUEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPdlrzkhAdrVYBr5QCrcAxzl7fQRVV5DVt24y9%2BPhAxXgDrE%2F2qQPrkCXx9TwZv0%2B4cA4qLynBAesDyBTaPs1K9qmGmrhOIq78Eo6CjT59LwmGcVZje7jmYlHJN84sSkGoCRIMHkEx7o5luLxVw2wB8tzU%2F2P5fGkGUIPJuNRPqAHF7CZNLVN3qUmVSkqru98GThC1a8FD2%2FioNE%2Fulhj95UjblQ3A15sYJeB%2FxEl4yt5mbjAL%2FKVo5nh1v3oMkLOF7mg%2FbbicflPg3ppoilSL9ZrISG%2FGzPCdr%2FkpOhgUxfNW%2FIRo%2FpfdCsjsWCWySU3WHqKMCkhbrBeWWN7TOZZOOitWIqLiLX%2BVQBj5tuBpdkCv1zzGUJLR8NKf4b%2BCnAhxeTaLiyjK%2F8v%2BKXPBZbs0n2x0eRG3T%2B%2FMLRrSbFGfCxFboHNaEff7PdwHFQW5MmDCK2wmVm3R2mhpH2NmriQgSEqXB0dND%2FRgpMLV9TsCXbmOHrsc5XrbiKUs9CHIv40fE5lE%2FCdlP%2BXZbS0S1umRt1pOe0YJ1wXJf2PD3AlK5oyUEi1uA30ERVLaInBexi68wN2iKMD3qdJlQY1Du%2FjcstkLf5JJMi2xhzQgY8iNZ4LEa5aCMP7r0MUn0YUog2ppyz%2BQwMiv42MJgzMIuqtscGOqUBt8T08Nd4382DQCoWDPLZJWFme%2BwfbtKEkI0QZNNwPHBmtPYZk9Ic%2B3ejU3rUZDMYawErOpN3xa4PBJ15VKQ1ETQxsLDCPOJaf4ahWSLJILC%2FpXYgOgZ94Uv6e8nfcxgxm%2FjYznNc0sK9j2Y3H9Ke2Df%2BB76ZrFHC8SDNiM6XqLYbrbQZOcllQSj9AGLxzRDYt6mxhgqaZoC7VjbW8TFfJszMY4CC&X-Amz-Signature=6fce1b83c5be2ef6b174545c93e69a90baf6de43e4f882a9234f1a4cbd93640d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YNK4GY%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0oYPraNU9EZ0fBD0ZQkh0%2BGentCGLyR2eszOikdaFHAiEAnuXsaTNkfQdV5TKY5GsJMuzlFc14Ipe3PmCfNFdaTUEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPdlrzkhAdrVYBr5QCrcAxzl7fQRVV5DVt24y9%2BPhAxXgDrE%2F2qQPrkCXx9TwZv0%2B4cA4qLynBAesDyBTaPs1K9qmGmrhOIq78Eo6CjT59LwmGcVZje7jmYlHJN84sSkGoCRIMHkEx7o5luLxVw2wB8tzU%2F2P5fGkGUIPJuNRPqAHF7CZNLVN3qUmVSkqru98GThC1a8FD2%2FioNE%2Fulhj95UjblQ3A15sYJeB%2FxEl4yt5mbjAL%2FKVo5nh1v3oMkLOF7mg%2FbbicflPg3ppoilSL9ZrISG%2FGzPCdr%2FkpOhgUxfNW%2FIRo%2FpfdCsjsWCWySU3WHqKMCkhbrBeWWN7TOZZOOitWIqLiLX%2BVQBj5tuBpdkCv1zzGUJLR8NKf4b%2BCnAhxeTaLiyjK%2F8v%2BKXPBZbs0n2x0eRG3T%2B%2FMLRrSbFGfCxFboHNaEff7PdwHFQW5MmDCK2wmVm3R2mhpH2NmriQgSEqXB0dND%2FRgpMLV9TsCXbmOHrsc5XrbiKUs9CHIv40fE5lE%2FCdlP%2BXZbS0S1umRt1pOe0YJ1wXJf2PD3AlK5oyUEi1uA30ERVLaInBexi68wN2iKMD3qdJlQY1Du%2FjcstkLf5JJMi2xhzQgY8iNZ4LEa5aCMP7r0MUn0YUog2ppyz%2BQwMiv42MJgzMIuqtscGOqUBt8T08Nd4382DQCoWDPLZJWFme%2BwfbtKEkI0QZNNwPHBmtPYZk9Ic%2B3ejU3rUZDMYawErOpN3xa4PBJ15VKQ1ETQxsLDCPOJaf4ahWSLJILC%2FpXYgOgZ94Uv6e8nfcxgxm%2FjYznNc0sK9j2Y3H9Ke2Df%2BB76ZrFHC8SDNiM6XqLYbrbQZOcllQSj9AGLxzRDYt6mxhgqaZoC7VjbW8TFfJszMY4CC&X-Amz-Signature=3d25c10782e94441eaa3b8fcb9798efc96013692d57caf43088edf534dfcd554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YNK4GY%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0oYPraNU9EZ0fBD0ZQkh0%2BGentCGLyR2eszOikdaFHAiEAnuXsaTNkfQdV5TKY5GsJMuzlFc14Ipe3PmCfNFdaTUEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPdlrzkhAdrVYBr5QCrcAxzl7fQRVV5DVt24y9%2BPhAxXgDrE%2F2qQPrkCXx9TwZv0%2B4cA4qLynBAesDyBTaPs1K9qmGmrhOIq78Eo6CjT59LwmGcVZje7jmYlHJN84sSkGoCRIMHkEx7o5luLxVw2wB8tzU%2F2P5fGkGUIPJuNRPqAHF7CZNLVN3qUmVSkqru98GThC1a8FD2%2FioNE%2Fulhj95UjblQ3A15sYJeB%2FxEl4yt5mbjAL%2FKVo5nh1v3oMkLOF7mg%2FbbicflPg3ppoilSL9ZrISG%2FGzPCdr%2FkpOhgUxfNW%2FIRo%2FpfdCsjsWCWySU3WHqKMCkhbrBeWWN7TOZZOOitWIqLiLX%2BVQBj5tuBpdkCv1zzGUJLR8NKf4b%2BCnAhxeTaLiyjK%2F8v%2BKXPBZbs0n2x0eRG3T%2B%2FMLRrSbFGfCxFboHNaEff7PdwHFQW5MmDCK2wmVm3R2mhpH2NmriQgSEqXB0dND%2FRgpMLV9TsCXbmOHrsc5XrbiKUs9CHIv40fE5lE%2FCdlP%2BXZbS0S1umRt1pOe0YJ1wXJf2PD3AlK5oyUEi1uA30ERVLaInBexi68wN2iKMD3qdJlQY1Du%2FjcstkLf5JJMi2xhzQgY8iNZ4LEa5aCMP7r0MUn0YUog2ppyz%2BQwMiv42MJgzMIuqtscGOqUBt8T08Nd4382DQCoWDPLZJWFme%2BwfbtKEkI0QZNNwPHBmtPYZk9Ic%2B3ejU3rUZDMYawErOpN3xa4PBJ15VKQ1ETQxsLDCPOJaf4ahWSLJILC%2FpXYgOgZ94Uv6e8nfcxgxm%2FjYznNc0sK9j2Y3H9Ke2Df%2BB76ZrFHC8SDNiM6XqLYbrbQZOcllQSj9AGLxzRDYt6mxhgqaZoC7VjbW8TFfJszMY4CC&X-Amz-Signature=6a8b1031ffdc0ac186774b5fb70eef9d9cba17c35c58b479f2beddceee053883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKHBGVTM%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl7YYcxhcwQw2qiOnTzjghiLoXgglqEgoxO80eVIBfVAIgARNL9jYn2DhmqipGUGTIgmhRNY%2Frr5c%2BaP6EL8bXVSQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNpIIa78qjAsDV27lircAzi75V3f8fBYvEWJHo7PF6b94O%2FNcxySRdJ2UWW20%2FYVyJqv%2Fq8tYZ4KB7TgOUvoexYpW%2FZNCyRVFsfrNy1Y%2Bu5YZjNLhSSQzRycv0jlN5N5uXehpa335sc7%2FfEVefY6kyl9PLnJD5ZfwUDhOYaVIiJUWyAVSDpGMsu%2B7Ae229c%2Bq3aHoU4k7RgkB62W33EPzO14HJgYz7BLyAdPC8R9ncJ2VCqlOtStheD6WtjyB%2FKlc7u8lJ0DKQtVdyA0dfD%2B4hk4eW%2FrDwJGvE4hGQ5fjKVpANVTX55%2FCjSX7n9f8x4hvNmbgdIAsDYeI7bzAe%2BwsFpHeu0cWyfsKYVD%2FbA4S4X8d3jwchNbT3Fvgh4nAcWt2E0gNwZ3I4t8FDLKYg9yDKk6pVhcS2bTOUFLXZRBtnXGG508CLN5dDqr9QpAsGrYKx%2B9gtkjuzB76EF2zUhjkd3ZumTWY0N2TenxF5oQlUmPoW4wdJ0OhJaPgax2ZZJJxQwjqXiTGtWBlVY3K3BnpRyoc1NuhB08tPtV6MAWVcx9Su%2FwWU1FOCTfDxZidpm3WXoYbzkru%2FbGRT60PccEaEeplYKbsRwx9vkTZs6uMlcGdBZNRhBDA86Ip3Mct%2F0ld1Uo3Uc9wr3h78rcMJGqtscGOqUBrx4AEv%2BKMMuodLsQg9tJsOky90nN53EwuR5JZe8vPPm7CJWi7vXoLPphj%2FyhYZ5NOw82c7ni2OqFBj5KkBEboNBfi0jll2idrK%2B95sIY6%2FIJ4CF%2BEGrFgFkhncI99u2hEBYI4cga1ORuHfaq1XujIV7Hq2Wr1OubIa%2FV2SgPWzX0l7x%2FGhtDRtkCDs%2BV0oup4xEDdkIAO7FR3VW18xXuPe4chkeL&X-Amz-Signature=d31f58c5fa918219cb6a3ebd25e5bbcf4c4463f26e1fe897557abd2ce4595db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YNK4GY%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0oYPraNU9EZ0fBD0ZQkh0%2BGentCGLyR2eszOikdaFHAiEAnuXsaTNkfQdV5TKY5GsJMuzlFc14Ipe3PmCfNFdaTUEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPdlrzkhAdrVYBr5QCrcAxzl7fQRVV5DVt24y9%2BPhAxXgDrE%2F2qQPrkCXx9TwZv0%2B4cA4qLynBAesDyBTaPs1K9qmGmrhOIq78Eo6CjT59LwmGcVZje7jmYlHJN84sSkGoCRIMHkEx7o5luLxVw2wB8tzU%2F2P5fGkGUIPJuNRPqAHF7CZNLVN3qUmVSkqru98GThC1a8FD2%2FioNE%2Fulhj95UjblQ3A15sYJeB%2FxEl4yt5mbjAL%2FKVo5nh1v3oMkLOF7mg%2FbbicflPg3ppoilSL9ZrISG%2FGzPCdr%2FkpOhgUxfNW%2FIRo%2FpfdCsjsWCWySU3WHqKMCkhbrBeWWN7TOZZOOitWIqLiLX%2BVQBj5tuBpdkCv1zzGUJLR8NKf4b%2BCnAhxeTaLiyjK%2F8v%2BKXPBZbs0n2x0eRG3T%2B%2FMLRrSbFGfCxFboHNaEff7PdwHFQW5MmDCK2wmVm3R2mhpH2NmriQgSEqXB0dND%2FRgpMLV9TsCXbmOHrsc5XrbiKUs9CHIv40fE5lE%2FCdlP%2BXZbS0S1umRt1pOe0YJ1wXJf2PD3AlK5oyUEi1uA30ERVLaInBexi68wN2iKMD3qdJlQY1Du%2FjcstkLf5JJMi2xhzQgY8iNZ4LEa5aCMP7r0MUn0YUog2ppyz%2BQwMiv42MJgzMIuqtscGOqUBt8T08Nd4382DQCoWDPLZJWFme%2BwfbtKEkI0QZNNwPHBmtPYZk9Ic%2B3ejU3rUZDMYawErOpN3xa4PBJ15VKQ1ETQxsLDCPOJaf4ahWSLJILC%2FpXYgOgZ94Uv6e8nfcxgxm%2FjYznNc0sK9j2Y3H9Ke2Df%2BB76ZrFHC8SDNiM6XqLYbrbQZOcllQSj9AGLxzRDYt6mxhgqaZoC7VjbW8TFfJszMY4CC&X-Amz-Signature=f1f5093b6a1e500478f3bbc64833b6c271bf3531f972a087a8f9e9342a1213d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YNK4GY%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0oYPraNU9EZ0fBD0ZQkh0%2BGentCGLyR2eszOikdaFHAiEAnuXsaTNkfQdV5TKY5GsJMuzlFc14Ipe3PmCfNFdaTUEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPdlrzkhAdrVYBr5QCrcAxzl7fQRVV5DVt24y9%2BPhAxXgDrE%2F2qQPrkCXx9TwZv0%2B4cA4qLynBAesDyBTaPs1K9qmGmrhOIq78Eo6CjT59LwmGcVZje7jmYlHJN84sSkGoCRIMHkEx7o5luLxVw2wB8tzU%2F2P5fGkGUIPJuNRPqAHF7CZNLVN3qUmVSkqru98GThC1a8FD2%2FioNE%2Fulhj95UjblQ3A15sYJeB%2FxEl4yt5mbjAL%2FKVo5nh1v3oMkLOF7mg%2FbbicflPg3ppoilSL9ZrISG%2FGzPCdr%2FkpOhgUxfNW%2FIRo%2FpfdCsjsWCWySU3WHqKMCkhbrBeWWN7TOZZOOitWIqLiLX%2BVQBj5tuBpdkCv1zzGUJLR8NKf4b%2BCnAhxeTaLiyjK%2F8v%2BKXPBZbs0n2x0eRG3T%2B%2FMLRrSbFGfCxFboHNaEff7PdwHFQW5MmDCK2wmVm3R2mhpH2NmriQgSEqXB0dND%2FRgpMLV9TsCXbmOHrsc5XrbiKUs9CHIv40fE5lE%2FCdlP%2BXZbS0S1umRt1pOe0YJ1wXJf2PD3AlK5oyUEi1uA30ERVLaInBexi68wN2iKMD3qdJlQY1Du%2FjcstkLf5JJMi2xhzQgY8iNZ4LEa5aCMP7r0MUn0YUog2ppyz%2BQwMiv42MJgzMIuqtscGOqUBt8T08Nd4382DQCoWDPLZJWFme%2BwfbtKEkI0QZNNwPHBmtPYZk9Ic%2B3ejU3rUZDMYawErOpN3xa4PBJ15VKQ1ETQxsLDCPOJaf4ahWSLJILC%2FpXYgOgZ94Uv6e8nfcxgxm%2FjYznNc0sK9j2Y3H9Ke2Df%2BB76ZrFHC8SDNiM6XqLYbrbQZOcllQSj9AGLxzRDYt6mxhgqaZoC7VjbW8TFfJszMY4CC&X-Amz-Signature=fc2e0cf4e7682da4a4916adadede6d2c20d50d4170360e916bdab7221540afec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YNK4GY%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0oYPraNU9EZ0fBD0ZQkh0%2BGentCGLyR2eszOikdaFHAiEAnuXsaTNkfQdV5TKY5GsJMuzlFc14Ipe3PmCfNFdaTUEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPdlrzkhAdrVYBr5QCrcAxzl7fQRVV5DVt24y9%2BPhAxXgDrE%2F2qQPrkCXx9TwZv0%2B4cA4qLynBAesDyBTaPs1K9qmGmrhOIq78Eo6CjT59LwmGcVZje7jmYlHJN84sSkGoCRIMHkEx7o5luLxVw2wB8tzU%2F2P5fGkGUIPJuNRPqAHF7CZNLVN3qUmVSkqru98GThC1a8FD2%2FioNE%2Fulhj95UjblQ3A15sYJeB%2FxEl4yt5mbjAL%2FKVo5nh1v3oMkLOF7mg%2FbbicflPg3ppoilSL9ZrISG%2FGzPCdr%2FkpOhgUxfNW%2FIRo%2FpfdCsjsWCWySU3WHqKMCkhbrBeWWN7TOZZOOitWIqLiLX%2BVQBj5tuBpdkCv1zzGUJLR8NKf4b%2BCnAhxeTaLiyjK%2F8v%2BKXPBZbs0n2x0eRG3T%2B%2FMLRrSbFGfCxFboHNaEff7PdwHFQW5MmDCK2wmVm3R2mhpH2NmriQgSEqXB0dND%2FRgpMLV9TsCXbmOHrsc5XrbiKUs9CHIv40fE5lE%2FCdlP%2BXZbS0S1umRt1pOe0YJ1wXJf2PD3AlK5oyUEi1uA30ERVLaInBexi68wN2iKMD3qdJlQY1Du%2FjcstkLf5JJMi2xhzQgY8iNZ4LEa5aCMP7r0MUn0YUog2ppyz%2BQwMiv42MJgzMIuqtscGOqUBt8T08Nd4382DQCoWDPLZJWFme%2BwfbtKEkI0QZNNwPHBmtPYZk9Ic%2B3ejU3rUZDMYawErOpN3xa4PBJ15VKQ1ETQxsLDCPOJaf4ahWSLJILC%2FpXYgOgZ94Uv6e8nfcxgxm%2FjYznNc0sK9j2Y3H9Ke2Df%2BB76ZrFHC8SDNiM6XqLYbrbQZOcllQSj9AGLxzRDYt6mxhgqaZoC7VjbW8TFfJszMY4CC&X-Amz-Signature=e01be4b4d3752f7ed34f76f7bdc936ef79769dd5b259f67c7eb9a0a2aad8fd75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YNK4GY%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0oYPraNU9EZ0fBD0ZQkh0%2BGentCGLyR2eszOikdaFHAiEAnuXsaTNkfQdV5TKY5GsJMuzlFc14Ipe3PmCfNFdaTUEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPdlrzkhAdrVYBr5QCrcAxzl7fQRVV5DVt24y9%2BPhAxXgDrE%2F2qQPrkCXx9TwZv0%2B4cA4qLynBAesDyBTaPs1K9qmGmrhOIq78Eo6CjT59LwmGcVZje7jmYlHJN84sSkGoCRIMHkEx7o5luLxVw2wB8tzU%2F2P5fGkGUIPJuNRPqAHF7CZNLVN3qUmVSkqru98GThC1a8FD2%2FioNE%2Fulhj95UjblQ3A15sYJeB%2FxEl4yt5mbjAL%2FKVo5nh1v3oMkLOF7mg%2FbbicflPg3ppoilSL9ZrISG%2FGzPCdr%2FkpOhgUxfNW%2FIRo%2FpfdCsjsWCWySU3WHqKMCkhbrBeWWN7TOZZOOitWIqLiLX%2BVQBj5tuBpdkCv1zzGUJLR8NKf4b%2BCnAhxeTaLiyjK%2F8v%2BKXPBZbs0n2x0eRG3T%2B%2FMLRrSbFGfCxFboHNaEff7PdwHFQW5MmDCK2wmVm3R2mhpH2NmriQgSEqXB0dND%2FRgpMLV9TsCXbmOHrsc5XrbiKUs9CHIv40fE5lE%2FCdlP%2BXZbS0S1umRt1pOe0YJ1wXJf2PD3AlK5oyUEi1uA30ERVLaInBexi68wN2iKMD3qdJlQY1Du%2FjcstkLf5JJMi2xhzQgY8iNZ4LEa5aCMP7r0MUn0YUog2ppyz%2BQwMiv42MJgzMIuqtscGOqUBt8T08Nd4382DQCoWDPLZJWFme%2BwfbtKEkI0QZNNwPHBmtPYZk9Ic%2B3ejU3rUZDMYawErOpN3xa4PBJ15VKQ1ETQxsLDCPOJaf4ahWSLJILC%2FpXYgOgZ94Uv6e8nfcxgxm%2FjYznNc0sK9j2Y3H9Ke2Df%2BB76ZrFHC8SDNiM6XqLYbrbQZOcllQSj9AGLxzRDYt6mxhgqaZoC7VjbW8TFfJszMY4CC&X-Amz-Signature=e4998f72e3f1ebe78efb8d5b3f0e9d53750e8cd81afb97a2ee16c6d64f35ca86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YNK4GY%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0oYPraNU9EZ0fBD0ZQkh0%2BGentCGLyR2eszOikdaFHAiEAnuXsaTNkfQdV5TKY5GsJMuzlFc14Ipe3PmCfNFdaTUEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPdlrzkhAdrVYBr5QCrcAxzl7fQRVV5DVt24y9%2BPhAxXgDrE%2F2qQPrkCXx9TwZv0%2B4cA4qLynBAesDyBTaPs1K9qmGmrhOIq78Eo6CjT59LwmGcVZje7jmYlHJN84sSkGoCRIMHkEx7o5luLxVw2wB8tzU%2F2P5fGkGUIPJuNRPqAHF7CZNLVN3qUmVSkqru98GThC1a8FD2%2FioNE%2Fulhj95UjblQ3A15sYJeB%2FxEl4yt5mbjAL%2FKVo5nh1v3oMkLOF7mg%2FbbicflPg3ppoilSL9ZrISG%2FGzPCdr%2FkpOhgUxfNW%2FIRo%2FpfdCsjsWCWySU3WHqKMCkhbrBeWWN7TOZZOOitWIqLiLX%2BVQBj5tuBpdkCv1zzGUJLR8NKf4b%2BCnAhxeTaLiyjK%2F8v%2BKXPBZbs0n2x0eRG3T%2B%2FMLRrSbFGfCxFboHNaEff7PdwHFQW5MmDCK2wmVm3R2mhpH2NmriQgSEqXB0dND%2FRgpMLV9TsCXbmOHrsc5XrbiKUs9CHIv40fE5lE%2FCdlP%2BXZbS0S1umRt1pOe0YJ1wXJf2PD3AlK5oyUEi1uA30ERVLaInBexi68wN2iKMD3qdJlQY1Du%2FjcstkLf5JJMi2xhzQgY8iNZ4LEa5aCMP7r0MUn0YUog2ppyz%2BQwMiv42MJgzMIuqtscGOqUBt8T08Nd4382DQCoWDPLZJWFme%2BwfbtKEkI0QZNNwPHBmtPYZk9Ic%2B3ejU3rUZDMYawErOpN3xa4PBJ15VKQ1ETQxsLDCPOJaf4ahWSLJILC%2FpXYgOgZ94Uv6e8nfcxgxm%2FjYznNc0sK9j2Y3H9Ke2Df%2BB76ZrFHC8SDNiM6XqLYbrbQZOcllQSj9AGLxzRDYt6mxhgqaZoC7VjbW8TFfJszMY4CC&X-Amz-Signature=a8c7b678d73600be79d278f8de45809720059a2759b7f2c06424b4a459c34529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YNK4GY%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0oYPraNU9EZ0fBD0ZQkh0%2BGentCGLyR2eszOikdaFHAiEAnuXsaTNkfQdV5TKY5GsJMuzlFc14Ipe3PmCfNFdaTUEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPdlrzkhAdrVYBr5QCrcAxzl7fQRVV5DVt24y9%2BPhAxXgDrE%2F2qQPrkCXx9TwZv0%2B4cA4qLynBAesDyBTaPs1K9qmGmrhOIq78Eo6CjT59LwmGcVZje7jmYlHJN84sSkGoCRIMHkEx7o5luLxVw2wB8tzU%2F2P5fGkGUIPJuNRPqAHF7CZNLVN3qUmVSkqru98GThC1a8FD2%2FioNE%2Fulhj95UjblQ3A15sYJeB%2FxEl4yt5mbjAL%2FKVo5nh1v3oMkLOF7mg%2FbbicflPg3ppoilSL9ZrISG%2FGzPCdr%2FkpOhgUxfNW%2FIRo%2FpfdCsjsWCWySU3WHqKMCkhbrBeWWN7TOZZOOitWIqLiLX%2BVQBj5tuBpdkCv1zzGUJLR8NKf4b%2BCnAhxeTaLiyjK%2F8v%2BKXPBZbs0n2x0eRG3T%2B%2FMLRrSbFGfCxFboHNaEff7PdwHFQW5MmDCK2wmVm3R2mhpH2NmriQgSEqXB0dND%2FRgpMLV9TsCXbmOHrsc5XrbiKUs9CHIv40fE5lE%2FCdlP%2BXZbS0S1umRt1pOe0YJ1wXJf2PD3AlK5oyUEi1uA30ERVLaInBexi68wN2iKMD3qdJlQY1Du%2FjcstkLf5JJMi2xhzQgY8iNZ4LEa5aCMP7r0MUn0YUog2ppyz%2BQwMiv42MJgzMIuqtscGOqUBt8T08Nd4382DQCoWDPLZJWFme%2BwfbtKEkI0QZNNwPHBmtPYZk9Ic%2B3ejU3rUZDMYawErOpN3xa4PBJ15VKQ1ETQxsLDCPOJaf4ahWSLJILC%2FpXYgOgZ94Uv6e8nfcxgxm%2FjYznNc0sK9j2Y3H9Ke2Df%2BB76ZrFHC8SDNiM6XqLYbrbQZOcllQSj9AGLxzRDYt6mxhgqaZoC7VjbW8TFfJszMY4CC&X-Amz-Signature=41526bb277db2e4e66efaafd7abe4d76fcebb2da8b199945d22a33014623fc14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


