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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WGLVORJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCICrlQtPe7W18lQrCdNIUccf7Fs5JTeni7r16NrjShJ%2BVAiAqyVzslljJrRbYR0aGrx3%2Ff%2BilX3OdEG1%2FSo8V%2F9%2BnACr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM4%2Bn1s%2Fep2jtXKCeVKtwDs7KfGpv8LwQcuyC7U2kFOk19CdXvuaazpGvRQah%2BVeymUblyI9PT%2B5iAatj1eIMbSTglN2rY4lnLuh6ODe7znIbx3vuxnYh%2BT4%2BJfkTZKubhbdII8a33v9BpXyHGdMa3Aj9NqgSAcdVNkTDsoo8eh1DCX2OiVA2GiaROB4vmv%2BPE9NWb81mNuUh3P0wruLWWghWzLMrlFq3kqq5dWbzMeLOsdkmuAldyzTZ0mWLgwMyyK%2BIbdXc9Hlm9CrTEPBdp42AKK4HRYOS%2F9%2FNcdtHo66Qo7sbl9Sylw3pL0X%2BDBtI%2Fw4nC7QYi%2FQ4eQAEn1P3%2BZsuhcIBZP0km5rcZwyVl0Na91tEDFRTQOJf1iJY4fux%2B1yt62prs7LqYgB8TyG2vbSHThQOptiqt%2F72A2gNUJmASA77gYKZNK6zmNiB6cyWFjvKEWV0I4U1Os82cjMgd%2FqcAF%2B3G7tIg0JK8Jtbcxkb3a%2BKbY1kL2Hx8NcebIqOuMs%2FL%2BTkGKr%2BFdp8Z0FVTvhK7mA9Kg%2BpwDZMg0UHQ8GopLAISNYMyo%2B70f3Px%2BYbtjPHZhcpqCopKmzXjnPGfknpWtFkwzijWOpJLt47bSOcnE3zJxLXM2OIRYSOdVbpKgx%2FO9nPHNwvoLCMw%2FYzGxAY6pgHGWmj0TzYvtVXA%2BDJ2p0Ts%2F%2F6W6%2BFZmExQsbtfz%2BnPzpCIAzXHYn1esqgPfWMWymn3kKPDybe2pnwtU6XroRk477RgjiuxVeurXoyYg7ey9uHYGy7j4K6of4vDH%2Fr%2FyB9KDnKFr41XMMlW6VEUvgIlm%2FHwsvKPF1cOMVMKvXoWEMBweqs9AG7B4J7v47Y%2BWRafMS4oTlr6zAhsa%2Bsj0tJMHOWfAtvX&X-Amz-Signature=7b3ff72c743e792d5219b5a71bfd1c7666f3057cce6b30ab2c25643f1c2cbaa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WGLVORJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCICrlQtPe7W18lQrCdNIUccf7Fs5JTeni7r16NrjShJ%2BVAiAqyVzslljJrRbYR0aGrx3%2Ff%2BilX3OdEG1%2FSo8V%2F9%2BnACr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM4%2Bn1s%2Fep2jtXKCeVKtwDs7KfGpv8LwQcuyC7U2kFOk19CdXvuaazpGvRQah%2BVeymUblyI9PT%2B5iAatj1eIMbSTglN2rY4lnLuh6ODe7znIbx3vuxnYh%2BT4%2BJfkTZKubhbdII8a33v9BpXyHGdMa3Aj9NqgSAcdVNkTDsoo8eh1DCX2OiVA2GiaROB4vmv%2BPE9NWb81mNuUh3P0wruLWWghWzLMrlFq3kqq5dWbzMeLOsdkmuAldyzTZ0mWLgwMyyK%2BIbdXc9Hlm9CrTEPBdp42AKK4HRYOS%2F9%2FNcdtHo66Qo7sbl9Sylw3pL0X%2BDBtI%2Fw4nC7QYi%2FQ4eQAEn1P3%2BZsuhcIBZP0km5rcZwyVl0Na91tEDFRTQOJf1iJY4fux%2B1yt62prs7LqYgB8TyG2vbSHThQOptiqt%2F72A2gNUJmASA77gYKZNK6zmNiB6cyWFjvKEWV0I4U1Os82cjMgd%2FqcAF%2B3G7tIg0JK8Jtbcxkb3a%2BKbY1kL2Hx8NcebIqOuMs%2FL%2BTkGKr%2BFdp8Z0FVTvhK7mA9Kg%2BpwDZMg0UHQ8GopLAISNYMyo%2B70f3Px%2BYbtjPHZhcpqCopKmzXjnPGfknpWtFkwzijWOpJLt47bSOcnE3zJxLXM2OIRYSOdVbpKgx%2FO9nPHNwvoLCMw%2FYzGxAY6pgHGWmj0TzYvtVXA%2BDJ2p0Ts%2F%2F6W6%2BFZmExQsbtfz%2BnPzpCIAzXHYn1esqgPfWMWymn3kKPDybe2pnwtU6XroRk477RgjiuxVeurXoyYg7ey9uHYGy7j4K6of4vDH%2Fr%2FyB9KDnKFr41XMMlW6VEUvgIlm%2FHwsvKPF1cOMVMKvXoWEMBweqs9AG7B4J7v47Y%2BWRafMS4oTlr6zAhsa%2Bsj0tJMHOWfAtvX&X-Amz-Signature=4c73c3d152e73d2a3d205d5711612e468e502d7d225962aa47c3675437316625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WGLVORJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCICrlQtPe7W18lQrCdNIUccf7Fs5JTeni7r16NrjShJ%2BVAiAqyVzslljJrRbYR0aGrx3%2Ff%2BilX3OdEG1%2FSo8V%2F9%2BnACr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM4%2Bn1s%2Fep2jtXKCeVKtwDs7KfGpv8LwQcuyC7U2kFOk19CdXvuaazpGvRQah%2BVeymUblyI9PT%2B5iAatj1eIMbSTglN2rY4lnLuh6ODe7znIbx3vuxnYh%2BT4%2BJfkTZKubhbdII8a33v9BpXyHGdMa3Aj9NqgSAcdVNkTDsoo8eh1DCX2OiVA2GiaROB4vmv%2BPE9NWb81mNuUh3P0wruLWWghWzLMrlFq3kqq5dWbzMeLOsdkmuAldyzTZ0mWLgwMyyK%2BIbdXc9Hlm9CrTEPBdp42AKK4HRYOS%2F9%2FNcdtHo66Qo7sbl9Sylw3pL0X%2BDBtI%2Fw4nC7QYi%2FQ4eQAEn1P3%2BZsuhcIBZP0km5rcZwyVl0Na91tEDFRTQOJf1iJY4fux%2B1yt62prs7LqYgB8TyG2vbSHThQOptiqt%2F72A2gNUJmASA77gYKZNK6zmNiB6cyWFjvKEWV0I4U1Os82cjMgd%2FqcAF%2B3G7tIg0JK8Jtbcxkb3a%2BKbY1kL2Hx8NcebIqOuMs%2FL%2BTkGKr%2BFdp8Z0FVTvhK7mA9Kg%2BpwDZMg0UHQ8GopLAISNYMyo%2B70f3Px%2BYbtjPHZhcpqCopKmzXjnPGfknpWtFkwzijWOpJLt47bSOcnE3zJxLXM2OIRYSOdVbpKgx%2FO9nPHNwvoLCMw%2FYzGxAY6pgHGWmj0TzYvtVXA%2BDJ2p0Ts%2F%2F6W6%2BFZmExQsbtfz%2BnPzpCIAzXHYn1esqgPfWMWymn3kKPDybe2pnwtU6XroRk477RgjiuxVeurXoyYg7ey9uHYGy7j4K6of4vDH%2Fr%2FyB9KDnKFr41XMMlW6VEUvgIlm%2FHwsvKPF1cOMVMKvXoWEMBweqs9AG7B4J7v47Y%2BWRafMS4oTlr6zAhsa%2Bsj0tJMHOWfAtvX&X-Amz-Signature=0ed9ef18f90f871aa5fe2fedb6f5dd17b953c2913f8173c1279f9517b99ab1ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WGLVORJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCICrlQtPe7W18lQrCdNIUccf7Fs5JTeni7r16NrjShJ%2BVAiAqyVzslljJrRbYR0aGrx3%2Ff%2BilX3OdEG1%2FSo8V%2F9%2BnACr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM4%2Bn1s%2Fep2jtXKCeVKtwDs7KfGpv8LwQcuyC7U2kFOk19CdXvuaazpGvRQah%2BVeymUblyI9PT%2B5iAatj1eIMbSTglN2rY4lnLuh6ODe7znIbx3vuxnYh%2BT4%2BJfkTZKubhbdII8a33v9BpXyHGdMa3Aj9NqgSAcdVNkTDsoo8eh1DCX2OiVA2GiaROB4vmv%2BPE9NWb81mNuUh3P0wruLWWghWzLMrlFq3kqq5dWbzMeLOsdkmuAldyzTZ0mWLgwMyyK%2BIbdXc9Hlm9CrTEPBdp42AKK4HRYOS%2F9%2FNcdtHo66Qo7sbl9Sylw3pL0X%2BDBtI%2Fw4nC7QYi%2FQ4eQAEn1P3%2BZsuhcIBZP0km5rcZwyVl0Na91tEDFRTQOJf1iJY4fux%2B1yt62prs7LqYgB8TyG2vbSHThQOptiqt%2F72A2gNUJmASA77gYKZNK6zmNiB6cyWFjvKEWV0I4U1Os82cjMgd%2FqcAF%2B3G7tIg0JK8Jtbcxkb3a%2BKbY1kL2Hx8NcebIqOuMs%2FL%2BTkGKr%2BFdp8Z0FVTvhK7mA9Kg%2BpwDZMg0UHQ8GopLAISNYMyo%2B70f3Px%2BYbtjPHZhcpqCopKmzXjnPGfknpWtFkwzijWOpJLt47bSOcnE3zJxLXM2OIRYSOdVbpKgx%2FO9nPHNwvoLCMw%2FYzGxAY6pgHGWmj0TzYvtVXA%2BDJ2p0Ts%2F%2F6W6%2BFZmExQsbtfz%2BnPzpCIAzXHYn1esqgPfWMWymn3kKPDybe2pnwtU6XroRk477RgjiuxVeurXoyYg7ey9uHYGy7j4K6of4vDH%2Fr%2FyB9KDnKFr41XMMlW6VEUvgIlm%2FHwsvKPF1cOMVMKvXoWEMBweqs9AG7B4J7v47Y%2BWRafMS4oTlr6zAhsa%2Bsj0tJMHOWfAtvX&X-Amz-Signature=204160f3a7b8ac13be53a12f0c4dbe78707e3a69a38f4b2966012fdb0fa47527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7FYQKO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIActQho4GSszMaywZ5OOtOKMxvFJhTiC4ZdlpiOjDqNTAiBVbmBsRZU7UJ%2B1UQWbKhF1jt43CFbCidDWcnrExkwM%2Byr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMyvX35uvpzQqJ1CcaKtwDW62Kwn3bhsMvfsHipPsqIxYzPIgBB3ZCOIJddGsy7X064Na5UB%2FBiFreiZrlObRFCqGZ35q2LZ8c5ngElCUtbTAo3B0WHaSl5f9v27GP%2BCxCFu6UJnbKxnedno%2BIUW1V6T%2BJHR3%2Bp4pFGXBqMezDuPGmi8KF03bW3EpNfxDiwZO9%2FL21Sy4MTeXVIXFPV2CNcr55%2BFm2%2FCEE12xi%2B3PZqe%2BkhXpLoQUF6lsrUleMdXMhoDT%2BafXVs9pXs6k6Vq5WToKsEH0GR%2FUPLkFnMsFU4lA2zybv5pNnlHdegWw%2FwoCB7pJ%2F4wv81CygqkMLBT9ZDyD7khq%2FTH65q5%2FrJdB1CZqAp%2BZ0iAO2tIFk4hRKMYFb9PRSRhxOTG77Ujsy9aKhlU24K7ck8nW1mtD9smj%2BtFrisksn12IUcYTI5bsU4O2gVR0EooLmRdrIzZ3ReW78aPT3LulaOhuMsUMpQqJeHFlZ68HfaymWcHOhZsn0hyozkzWugTpqTmLLYlZV7BNTKXwC2QWqYkwF9pgUgJTPTkeTxtW51awUvaIffmX3Na%2F5JCrih6UsZF8Ck8oZOeDeNuwZGB1PPtJcDR3Qt4ET9tb4NZUfFZvpIL8OCeSmOe%2FtbSSe4162%2FfD06xkw84zGxAY6pgHwv3wXg4Sn63mbkwQByBam%2BBO7n3iGq%2FENh4G1C63lvqYR6dMZUulCRX8BVmfL%2Fd2MfLzrvCh5Agz0uRQyOSJuRVxsymNCJqjrdZH8xRxiq0SUoTHtTjjY2qcHW4x8aSpHpe4XWlWwMK25lDqH%2FIY%2Fm%2BouDhDz7qm%2BwVr8Q2P5wtpTLTyLDqeojPKxE9IauPCs1eyOumMTJFbFeqCo%2Fl6oj6CZQcYG&X-Amz-Signature=356111ab081dbc541194b06d2966304d9517263919080a7c789107238a1f0df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WGLVORJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCICrlQtPe7W18lQrCdNIUccf7Fs5JTeni7r16NrjShJ%2BVAiAqyVzslljJrRbYR0aGrx3%2Ff%2BilX3OdEG1%2FSo8V%2F9%2BnACr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM4%2Bn1s%2Fep2jtXKCeVKtwDs7KfGpv8LwQcuyC7U2kFOk19CdXvuaazpGvRQah%2BVeymUblyI9PT%2B5iAatj1eIMbSTglN2rY4lnLuh6ODe7znIbx3vuxnYh%2BT4%2BJfkTZKubhbdII8a33v9BpXyHGdMa3Aj9NqgSAcdVNkTDsoo8eh1DCX2OiVA2GiaROB4vmv%2BPE9NWb81mNuUh3P0wruLWWghWzLMrlFq3kqq5dWbzMeLOsdkmuAldyzTZ0mWLgwMyyK%2BIbdXc9Hlm9CrTEPBdp42AKK4HRYOS%2F9%2FNcdtHo66Qo7sbl9Sylw3pL0X%2BDBtI%2Fw4nC7QYi%2FQ4eQAEn1P3%2BZsuhcIBZP0km5rcZwyVl0Na91tEDFRTQOJf1iJY4fux%2B1yt62prs7LqYgB8TyG2vbSHThQOptiqt%2F72A2gNUJmASA77gYKZNK6zmNiB6cyWFjvKEWV0I4U1Os82cjMgd%2FqcAF%2B3G7tIg0JK8Jtbcxkb3a%2BKbY1kL2Hx8NcebIqOuMs%2FL%2BTkGKr%2BFdp8Z0FVTvhK7mA9Kg%2BpwDZMg0UHQ8GopLAISNYMyo%2B70f3Px%2BYbtjPHZhcpqCopKmzXjnPGfknpWtFkwzijWOpJLt47bSOcnE3zJxLXM2OIRYSOdVbpKgx%2FO9nPHNwvoLCMw%2FYzGxAY6pgHGWmj0TzYvtVXA%2BDJ2p0Ts%2F%2F6W6%2BFZmExQsbtfz%2BnPzpCIAzXHYn1esqgPfWMWymn3kKPDybe2pnwtU6XroRk477RgjiuxVeurXoyYg7ey9uHYGy7j4K6of4vDH%2Fr%2FyB9KDnKFr41XMMlW6VEUvgIlm%2FHwsvKPF1cOMVMKvXoWEMBweqs9AG7B4J7v47Y%2BWRafMS4oTlr6zAhsa%2Bsj0tJMHOWfAtvX&X-Amz-Signature=18e003994ede86b76f73e37dc1f528633f498276152bb39244d8079c0ca506c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WGLVORJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCICrlQtPe7W18lQrCdNIUccf7Fs5JTeni7r16NrjShJ%2BVAiAqyVzslljJrRbYR0aGrx3%2Ff%2BilX3OdEG1%2FSo8V%2F9%2BnACr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM4%2Bn1s%2Fep2jtXKCeVKtwDs7KfGpv8LwQcuyC7U2kFOk19CdXvuaazpGvRQah%2BVeymUblyI9PT%2B5iAatj1eIMbSTglN2rY4lnLuh6ODe7znIbx3vuxnYh%2BT4%2BJfkTZKubhbdII8a33v9BpXyHGdMa3Aj9NqgSAcdVNkTDsoo8eh1DCX2OiVA2GiaROB4vmv%2BPE9NWb81mNuUh3P0wruLWWghWzLMrlFq3kqq5dWbzMeLOsdkmuAldyzTZ0mWLgwMyyK%2BIbdXc9Hlm9CrTEPBdp42AKK4HRYOS%2F9%2FNcdtHo66Qo7sbl9Sylw3pL0X%2BDBtI%2Fw4nC7QYi%2FQ4eQAEn1P3%2BZsuhcIBZP0km5rcZwyVl0Na91tEDFRTQOJf1iJY4fux%2B1yt62prs7LqYgB8TyG2vbSHThQOptiqt%2F72A2gNUJmASA77gYKZNK6zmNiB6cyWFjvKEWV0I4U1Os82cjMgd%2FqcAF%2B3G7tIg0JK8Jtbcxkb3a%2BKbY1kL2Hx8NcebIqOuMs%2FL%2BTkGKr%2BFdp8Z0FVTvhK7mA9Kg%2BpwDZMg0UHQ8GopLAISNYMyo%2B70f3Px%2BYbtjPHZhcpqCopKmzXjnPGfknpWtFkwzijWOpJLt47bSOcnE3zJxLXM2OIRYSOdVbpKgx%2FO9nPHNwvoLCMw%2FYzGxAY6pgHGWmj0TzYvtVXA%2BDJ2p0Ts%2F%2F6W6%2BFZmExQsbtfz%2BnPzpCIAzXHYn1esqgPfWMWymn3kKPDybe2pnwtU6XroRk477RgjiuxVeurXoyYg7ey9uHYGy7j4K6of4vDH%2Fr%2FyB9KDnKFr41XMMlW6VEUvgIlm%2FHwsvKPF1cOMVMKvXoWEMBweqs9AG7B4J7v47Y%2BWRafMS4oTlr6zAhsa%2Bsj0tJMHOWfAtvX&X-Amz-Signature=17e118cff158728dcbd2f3df666df0c452fc7dfcb5635d3c91d613121ae49e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WGLVORJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCICrlQtPe7W18lQrCdNIUccf7Fs5JTeni7r16NrjShJ%2BVAiAqyVzslljJrRbYR0aGrx3%2Ff%2BilX3OdEG1%2FSo8V%2F9%2BnACr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM4%2Bn1s%2Fep2jtXKCeVKtwDs7KfGpv8LwQcuyC7U2kFOk19CdXvuaazpGvRQah%2BVeymUblyI9PT%2B5iAatj1eIMbSTglN2rY4lnLuh6ODe7znIbx3vuxnYh%2BT4%2BJfkTZKubhbdII8a33v9BpXyHGdMa3Aj9NqgSAcdVNkTDsoo8eh1DCX2OiVA2GiaROB4vmv%2BPE9NWb81mNuUh3P0wruLWWghWzLMrlFq3kqq5dWbzMeLOsdkmuAldyzTZ0mWLgwMyyK%2BIbdXc9Hlm9CrTEPBdp42AKK4HRYOS%2F9%2FNcdtHo66Qo7sbl9Sylw3pL0X%2BDBtI%2Fw4nC7QYi%2FQ4eQAEn1P3%2BZsuhcIBZP0km5rcZwyVl0Na91tEDFRTQOJf1iJY4fux%2B1yt62prs7LqYgB8TyG2vbSHThQOptiqt%2F72A2gNUJmASA77gYKZNK6zmNiB6cyWFjvKEWV0I4U1Os82cjMgd%2FqcAF%2B3G7tIg0JK8Jtbcxkb3a%2BKbY1kL2Hx8NcebIqOuMs%2FL%2BTkGKr%2BFdp8Z0FVTvhK7mA9Kg%2BpwDZMg0UHQ8GopLAISNYMyo%2B70f3Px%2BYbtjPHZhcpqCopKmzXjnPGfknpWtFkwzijWOpJLt47bSOcnE3zJxLXM2OIRYSOdVbpKgx%2FO9nPHNwvoLCMw%2FYzGxAY6pgHGWmj0TzYvtVXA%2BDJ2p0Ts%2F%2F6W6%2BFZmExQsbtfz%2BnPzpCIAzXHYn1esqgPfWMWymn3kKPDybe2pnwtU6XroRk477RgjiuxVeurXoyYg7ey9uHYGy7j4K6of4vDH%2Fr%2FyB9KDnKFr41XMMlW6VEUvgIlm%2FHwsvKPF1cOMVMKvXoWEMBweqs9AG7B4J7v47Y%2BWRafMS4oTlr6zAhsa%2Bsj0tJMHOWfAtvX&X-Amz-Signature=2c1e58c4a3a2830e62696dfb3666e3624da59a2658a924d6dcab25086361b1fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WGLVORJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCICrlQtPe7W18lQrCdNIUccf7Fs5JTeni7r16NrjShJ%2BVAiAqyVzslljJrRbYR0aGrx3%2Ff%2BilX3OdEG1%2FSo8V%2F9%2BnACr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM4%2Bn1s%2Fep2jtXKCeVKtwDs7KfGpv8LwQcuyC7U2kFOk19CdXvuaazpGvRQah%2BVeymUblyI9PT%2B5iAatj1eIMbSTglN2rY4lnLuh6ODe7znIbx3vuxnYh%2BT4%2BJfkTZKubhbdII8a33v9BpXyHGdMa3Aj9NqgSAcdVNkTDsoo8eh1DCX2OiVA2GiaROB4vmv%2BPE9NWb81mNuUh3P0wruLWWghWzLMrlFq3kqq5dWbzMeLOsdkmuAldyzTZ0mWLgwMyyK%2BIbdXc9Hlm9CrTEPBdp42AKK4HRYOS%2F9%2FNcdtHo66Qo7sbl9Sylw3pL0X%2BDBtI%2Fw4nC7QYi%2FQ4eQAEn1P3%2BZsuhcIBZP0km5rcZwyVl0Na91tEDFRTQOJf1iJY4fux%2B1yt62prs7LqYgB8TyG2vbSHThQOptiqt%2F72A2gNUJmASA77gYKZNK6zmNiB6cyWFjvKEWV0I4U1Os82cjMgd%2FqcAF%2B3G7tIg0JK8Jtbcxkb3a%2BKbY1kL2Hx8NcebIqOuMs%2FL%2BTkGKr%2BFdp8Z0FVTvhK7mA9Kg%2BpwDZMg0UHQ8GopLAISNYMyo%2B70f3Px%2BYbtjPHZhcpqCopKmzXjnPGfknpWtFkwzijWOpJLt47bSOcnE3zJxLXM2OIRYSOdVbpKgx%2FO9nPHNwvoLCMw%2FYzGxAY6pgHGWmj0TzYvtVXA%2BDJ2p0Ts%2F%2F6W6%2BFZmExQsbtfz%2BnPzpCIAzXHYn1esqgPfWMWymn3kKPDybe2pnwtU6XroRk477RgjiuxVeurXoyYg7ey9uHYGy7j4K6of4vDH%2Fr%2FyB9KDnKFr41XMMlW6VEUvgIlm%2FHwsvKPF1cOMVMKvXoWEMBweqs9AG7B4J7v47Y%2BWRafMS4oTlr6zAhsa%2Bsj0tJMHOWfAtvX&X-Amz-Signature=a7d2b0231e257dc0f299dd316da4f10d6dba423491bde9d1bd3a1206a0c92a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WGLVORJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCICrlQtPe7W18lQrCdNIUccf7Fs5JTeni7r16NrjShJ%2BVAiAqyVzslljJrRbYR0aGrx3%2Ff%2BilX3OdEG1%2FSo8V%2F9%2BnACr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM4%2Bn1s%2Fep2jtXKCeVKtwDs7KfGpv8LwQcuyC7U2kFOk19CdXvuaazpGvRQah%2BVeymUblyI9PT%2B5iAatj1eIMbSTglN2rY4lnLuh6ODe7znIbx3vuxnYh%2BT4%2BJfkTZKubhbdII8a33v9BpXyHGdMa3Aj9NqgSAcdVNkTDsoo8eh1DCX2OiVA2GiaROB4vmv%2BPE9NWb81mNuUh3P0wruLWWghWzLMrlFq3kqq5dWbzMeLOsdkmuAldyzTZ0mWLgwMyyK%2BIbdXc9Hlm9CrTEPBdp42AKK4HRYOS%2F9%2FNcdtHo66Qo7sbl9Sylw3pL0X%2BDBtI%2Fw4nC7QYi%2FQ4eQAEn1P3%2BZsuhcIBZP0km5rcZwyVl0Na91tEDFRTQOJf1iJY4fux%2B1yt62prs7LqYgB8TyG2vbSHThQOptiqt%2F72A2gNUJmASA77gYKZNK6zmNiB6cyWFjvKEWV0I4U1Os82cjMgd%2FqcAF%2B3G7tIg0JK8Jtbcxkb3a%2BKbY1kL2Hx8NcebIqOuMs%2FL%2BTkGKr%2BFdp8Z0FVTvhK7mA9Kg%2BpwDZMg0UHQ8GopLAISNYMyo%2B70f3Px%2BYbtjPHZhcpqCopKmzXjnPGfknpWtFkwzijWOpJLt47bSOcnE3zJxLXM2OIRYSOdVbpKgx%2FO9nPHNwvoLCMw%2FYzGxAY6pgHGWmj0TzYvtVXA%2BDJ2p0Ts%2F%2F6W6%2BFZmExQsbtfz%2BnPzpCIAzXHYn1esqgPfWMWymn3kKPDybe2pnwtU6XroRk477RgjiuxVeurXoyYg7ey9uHYGy7j4K6of4vDH%2Fr%2FyB9KDnKFr41XMMlW6VEUvgIlm%2FHwsvKPF1cOMVMKvXoWEMBweqs9AG7B4J7v47Y%2BWRafMS4oTlr6zAhsa%2Bsj0tJMHOWfAtvX&X-Amz-Signature=4e7de3ee22fa2b7155424a5bbec01212e13a41ddba25ad913081ed204170a183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WGLVORJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCICrlQtPe7W18lQrCdNIUccf7Fs5JTeni7r16NrjShJ%2BVAiAqyVzslljJrRbYR0aGrx3%2Ff%2BilX3OdEG1%2FSo8V%2F9%2BnACr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM4%2Bn1s%2Fep2jtXKCeVKtwDs7KfGpv8LwQcuyC7U2kFOk19CdXvuaazpGvRQah%2BVeymUblyI9PT%2B5iAatj1eIMbSTglN2rY4lnLuh6ODe7znIbx3vuxnYh%2BT4%2BJfkTZKubhbdII8a33v9BpXyHGdMa3Aj9NqgSAcdVNkTDsoo8eh1DCX2OiVA2GiaROB4vmv%2BPE9NWb81mNuUh3P0wruLWWghWzLMrlFq3kqq5dWbzMeLOsdkmuAldyzTZ0mWLgwMyyK%2BIbdXc9Hlm9CrTEPBdp42AKK4HRYOS%2F9%2FNcdtHo66Qo7sbl9Sylw3pL0X%2BDBtI%2Fw4nC7QYi%2FQ4eQAEn1P3%2BZsuhcIBZP0km5rcZwyVl0Na91tEDFRTQOJf1iJY4fux%2B1yt62prs7LqYgB8TyG2vbSHThQOptiqt%2F72A2gNUJmASA77gYKZNK6zmNiB6cyWFjvKEWV0I4U1Os82cjMgd%2FqcAF%2B3G7tIg0JK8Jtbcxkb3a%2BKbY1kL2Hx8NcebIqOuMs%2FL%2BTkGKr%2BFdp8Z0FVTvhK7mA9Kg%2BpwDZMg0UHQ8GopLAISNYMyo%2B70f3Px%2BYbtjPHZhcpqCopKmzXjnPGfknpWtFkwzijWOpJLt47bSOcnE3zJxLXM2OIRYSOdVbpKgx%2FO9nPHNwvoLCMw%2FYzGxAY6pgHGWmj0TzYvtVXA%2BDJ2p0Ts%2F%2F6W6%2BFZmExQsbtfz%2BnPzpCIAzXHYn1esqgPfWMWymn3kKPDybe2pnwtU6XroRk477RgjiuxVeurXoyYg7ey9uHYGy7j4K6of4vDH%2Fr%2FyB9KDnKFr41XMMlW6VEUvgIlm%2FHwsvKPF1cOMVMKvXoWEMBweqs9AG7B4J7v47Y%2BWRafMS4oTlr6zAhsa%2Bsj0tJMHOWfAtvX&X-Amz-Signature=079d9269428bc0702991dc01c0a1b503b882f6a8d549bf27b545b5dad90dbcf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
