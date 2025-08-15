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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNZYEQUP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDMZq9lqmNjCjsvjqMv8KUpXIlXg2cxKuRPsEe3iOKkBgIgfBtLP6juTLs4tcPY7hiBHSX4Y1YEMx7VO6e9Ldh3XxEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMgkDCdAia8oqLasrCrcA4rX7Lv9lNiqr5R7%2BsvbWCgE7iAGApgGD1MyGxY3Jci3qo8mSx7d7v9QQ3bRJDlVdKnR7n09Q%2BpQxeSBhxY3iJGRxY3PkfrXiTK%2F6%2FA3e8oIMgEJGnL15gIa%2Fe05439D%2FkN8yeLAeSytZAD7QO5B5J%2Fg2%2F58dIXNdGuSTlHvcnHFokJT4FiH27TrzbA0ReYKNyqNHzYerkkv%2FQezEGVMG38Qn%2FoUaBRcXdC2e%2BXHoTQAsAbUSrIwUx53SapGTCisuxnaBLk7Kq5omAGliYu06jnbpciwV5OcvKKbDqosululfPAkB3Ot8szm38NSjhKy5Ft8SLV2kHwwHT8cDU7V6cAR77j8mBRPTxtLe%2BlDyeMzgZRT%2Be1qLGCnXwS7iaCexUFObHl%2BgxeE5%2BfDB58g84GPRYL0ot0zte5DYTsOQ3lR6vwtz%2BoAkJW0WEJHaUW4CY9ZIvGMj4pScrvmlVL15cwfDf%2FRsgn9SSy5CZrPeqr8c9IHlqoHZ0eKGXn527XkG57CKms1Ufv%2FoklHoA0P67jXKtVIOwanyCZEUHroMxKbP9veRbVJGXin%2BtndN5MXKzj1B%2BWaTGY03I%2B9fVHh7aIMxflvOzILWOUAuVvPorl3BYu%2FjLZylFd%2F49o9MNC0%2FcQGOqUBs4SrtxE2df3zPfDQvzNoax92JgAz5JtNqN3geImuXrLSakyCaD8OIuEMnJbDRlys0JAr2BZmncymeOYUwN%2F7VZNGvpXo9%2B2ELKIbhopcfhhR1l4rMS6s2mgKWQmFPi8BR3kIvDxsEGQ8qjj4i47Xz7Hp5zikKTl6FgvR5qIQ8nRLRk%2FA9eN1T64EPC%2BsFhXJq0cZJKL7SFtxnPoIWLZuw6hx%2BxkO&X-Amz-Signature=08e720da2b130e06bd6ab2534c15d0f5a7de5efee880c022c0f2c992e373cdc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNZYEQUP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDMZq9lqmNjCjsvjqMv8KUpXIlXg2cxKuRPsEe3iOKkBgIgfBtLP6juTLs4tcPY7hiBHSX4Y1YEMx7VO6e9Ldh3XxEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMgkDCdAia8oqLasrCrcA4rX7Lv9lNiqr5R7%2BsvbWCgE7iAGApgGD1MyGxY3Jci3qo8mSx7d7v9QQ3bRJDlVdKnR7n09Q%2BpQxeSBhxY3iJGRxY3PkfrXiTK%2F6%2FA3e8oIMgEJGnL15gIa%2Fe05439D%2FkN8yeLAeSytZAD7QO5B5J%2Fg2%2F58dIXNdGuSTlHvcnHFokJT4FiH27TrzbA0ReYKNyqNHzYerkkv%2FQezEGVMG38Qn%2FoUaBRcXdC2e%2BXHoTQAsAbUSrIwUx53SapGTCisuxnaBLk7Kq5omAGliYu06jnbpciwV5OcvKKbDqosululfPAkB3Ot8szm38NSjhKy5Ft8SLV2kHwwHT8cDU7V6cAR77j8mBRPTxtLe%2BlDyeMzgZRT%2Be1qLGCnXwS7iaCexUFObHl%2BgxeE5%2BfDB58g84GPRYL0ot0zte5DYTsOQ3lR6vwtz%2BoAkJW0WEJHaUW4CY9ZIvGMj4pScrvmlVL15cwfDf%2FRsgn9SSy5CZrPeqr8c9IHlqoHZ0eKGXn527XkG57CKms1Ufv%2FoklHoA0P67jXKtVIOwanyCZEUHroMxKbP9veRbVJGXin%2BtndN5MXKzj1B%2BWaTGY03I%2B9fVHh7aIMxflvOzILWOUAuVvPorl3BYu%2FjLZylFd%2F49o9MNC0%2FcQGOqUBs4SrtxE2df3zPfDQvzNoax92JgAz5JtNqN3geImuXrLSakyCaD8OIuEMnJbDRlys0JAr2BZmncymeOYUwN%2F7VZNGvpXo9%2B2ELKIbhopcfhhR1l4rMS6s2mgKWQmFPi8BR3kIvDxsEGQ8qjj4i47Xz7Hp5zikKTl6FgvR5qIQ8nRLRk%2FA9eN1T64EPC%2BsFhXJq0cZJKL7SFtxnPoIWLZuw6hx%2BxkO&X-Amz-Signature=563ffdc3258d0a9644d5a835d7c993922ef5650609f3952c94bd8c2ee3fbcdff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNZYEQUP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDMZq9lqmNjCjsvjqMv8KUpXIlXg2cxKuRPsEe3iOKkBgIgfBtLP6juTLs4tcPY7hiBHSX4Y1YEMx7VO6e9Ldh3XxEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMgkDCdAia8oqLasrCrcA4rX7Lv9lNiqr5R7%2BsvbWCgE7iAGApgGD1MyGxY3Jci3qo8mSx7d7v9QQ3bRJDlVdKnR7n09Q%2BpQxeSBhxY3iJGRxY3PkfrXiTK%2F6%2FA3e8oIMgEJGnL15gIa%2Fe05439D%2FkN8yeLAeSytZAD7QO5B5J%2Fg2%2F58dIXNdGuSTlHvcnHFokJT4FiH27TrzbA0ReYKNyqNHzYerkkv%2FQezEGVMG38Qn%2FoUaBRcXdC2e%2BXHoTQAsAbUSrIwUx53SapGTCisuxnaBLk7Kq5omAGliYu06jnbpciwV5OcvKKbDqosululfPAkB3Ot8szm38NSjhKy5Ft8SLV2kHwwHT8cDU7V6cAR77j8mBRPTxtLe%2BlDyeMzgZRT%2Be1qLGCnXwS7iaCexUFObHl%2BgxeE5%2BfDB58g84GPRYL0ot0zte5DYTsOQ3lR6vwtz%2BoAkJW0WEJHaUW4CY9ZIvGMj4pScrvmlVL15cwfDf%2FRsgn9SSy5CZrPeqr8c9IHlqoHZ0eKGXn527XkG57CKms1Ufv%2FoklHoA0P67jXKtVIOwanyCZEUHroMxKbP9veRbVJGXin%2BtndN5MXKzj1B%2BWaTGY03I%2B9fVHh7aIMxflvOzILWOUAuVvPorl3BYu%2FjLZylFd%2F49o9MNC0%2FcQGOqUBs4SrtxE2df3zPfDQvzNoax92JgAz5JtNqN3geImuXrLSakyCaD8OIuEMnJbDRlys0JAr2BZmncymeOYUwN%2F7VZNGvpXo9%2B2ELKIbhopcfhhR1l4rMS6s2mgKWQmFPi8BR3kIvDxsEGQ8qjj4i47Xz7Hp5zikKTl6FgvR5qIQ8nRLRk%2FA9eN1T64EPC%2BsFhXJq0cZJKL7SFtxnPoIWLZuw6hx%2BxkO&X-Amz-Signature=6eade95aff0891c1e439a7c417420558b099d1db826560cd7aa222ac461c1381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNZYEQUP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDMZq9lqmNjCjsvjqMv8KUpXIlXg2cxKuRPsEe3iOKkBgIgfBtLP6juTLs4tcPY7hiBHSX4Y1YEMx7VO6e9Ldh3XxEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMgkDCdAia8oqLasrCrcA4rX7Lv9lNiqr5R7%2BsvbWCgE7iAGApgGD1MyGxY3Jci3qo8mSx7d7v9QQ3bRJDlVdKnR7n09Q%2BpQxeSBhxY3iJGRxY3PkfrXiTK%2F6%2FA3e8oIMgEJGnL15gIa%2Fe05439D%2FkN8yeLAeSytZAD7QO5B5J%2Fg2%2F58dIXNdGuSTlHvcnHFokJT4FiH27TrzbA0ReYKNyqNHzYerkkv%2FQezEGVMG38Qn%2FoUaBRcXdC2e%2BXHoTQAsAbUSrIwUx53SapGTCisuxnaBLk7Kq5omAGliYu06jnbpciwV5OcvKKbDqosululfPAkB3Ot8szm38NSjhKy5Ft8SLV2kHwwHT8cDU7V6cAR77j8mBRPTxtLe%2BlDyeMzgZRT%2Be1qLGCnXwS7iaCexUFObHl%2BgxeE5%2BfDB58g84GPRYL0ot0zte5DYTsOQ3lR6vwtz%2BoAkJW0WEJHaUW4CY9ZIvGMj4pScrvmlVL15cwfDf%2FRsgn9SSy5CZrPeqr8c9IHlqoHZ0eKGXn527XkG57CKms1Ufv%2FoklHoA0P67jXKtVIOwanyCZEUHroMxKbP9veRbVJGXin%2BtndN5MXKzj1B%2BWaTGY03I%2B9fVHh7aIMxflvOzILWOUAuVvPorl3BYu%2FjLZylFd%2F49o9MNC0%2FcQGOqUBs4SrtxE2df3zPfDQvzNoax92JgAz5JtNqN3geImuXrLSakyCaD8OIuEMnJbDRlys0JAr2BZmncymeOYUwN%2F7VZNGvpXo9%2B2ELKIbhopcfhhR1l4rMS6s2mgKWQmFPi8BR3kIvDxsEGQ8qjj4i47Xz7Hp5zikKTl6FgvR5qIQ8nRLRk%2FA9eN1T64EPC%2BsFhXJq0cZJKL7SFtxnPoIWLZuw6hx%2BxkO&X-Amz-Signature=39c483f4320148d1b4b7d7de36f7a88b4e972fc6224d107c2fcf2ed23c98c1a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VKPQMIZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDACowp%2F%2BWi2HitwUdbSsbPVamlVwtPu6rChalTt7CXfAIhAKFBXwy8bv1GREl9B09PyQ5K7esrhumQKYhHR8Keyq1HKv8DCGEQABoMNjM3NDIzMTgzODA1IgyAC2UO36iKhrJe%2Btgq3AMvHW4YCSfMy0iITG3YfwWHuB9kVSMexZmJsL%2FROTP5KMhyWVdV%2BcEGk6R9KDQ9x11HrkikPKOausQovQHNyazE2QEXAI2To2Co1tJHuPCLd6co0budjik0jvWqfRkoZhxKn8kvsdVZpq74IpgeSgEj5hv1MZ5wFrt14BC1SYiLTSFrVMJbvLCt2g5BAxO93R1vSLE17W0E%2BpmRa3Ox21DK6w%2BbekfAar3wq4sRRaB7lYkANhtz4PrHPz0TA4GzD%2BtnSd1ZEMZOqSY2Dg%2Fr6sw7NXg2Zzc69ewwu8FiYl68UzVLaYk1wLT614FdP9dV0Aej%2FPc6jr6MbEzfI9AWsDgyUc453VwKE1o%2BWdpHxm8qftdXTPl74ZZslOTmDM%2FR5cnjyqInk%2B9Ygmo4hSbKQBd3dfgIOsaLoPpebplMm7Nf6j5rsLJb6ktYqpl70aCGJp%2FeIe0tiDBU3xZcjm%2BzQmNSGipAY296jyCTdYaC6vIIVM6FuRSkc5bAI9ZBaqbS8MDc6JSoBXm6OBT7RlgMZBXOyx6PEcW9GX5MkOknLZWiw7c1q3XNphKL6LgaLis7rI36TZ4X0LC4Xnm1OdUDOdhc%2FOCOn%2BQgjuuFebW68NQkaqcLN4eMmW8e2%2BXuZTC5tf3EBjqkAS0%2BWGzheF6xV7UY%2BPbwD8w6XfqzKAP3qNt9wXn7V1AXa%2FH42vBiWZ%2BPXLLLptxRJuLMExqR9hfq9JRpot5eGzIBinZiZqSTj1oIOzpx1ehTCpG0sss5Y%2BsPVTl9FWZ%2FNzhRfurEO4A8YUICZw4mQDzyGAqk5imWaYXoV3TM1YOTVL1A7JRbBUxC%2BGkAZ2ZyvUyp9E%2FddP4Ln0IuQRLo4sOc7tS2&X-Amz-Signature=3af85848d5f40eaee426846f26bcedadc9b6c679d7c062ebdf0cad1114c73106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNZYEQUP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDMZq9lqmNjCjsvjqMv8KUpXIlXg2cxKuRPsEe3iOKkBgIgfBtLP6juTLs4tcPY7hiBHSX4Y1YEMx7VO6e9Ldh3XxEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMgkDCdAia8oqLasrCrcA4rX7Lv9lNiqr5R7%2BsvbWCgE7iAGApgGD1MyGxY3Jci3qo8mSx7d7v9QQ3bRJDlVdKnR7n09Q%2BpQxeSBhxY3iJGRxY3PkfrXiTK%2F6%2FA3e8oIMgEJGnL15gIa%2Fe05439D%2FkN8yeLAeSytZAD7QO5B5J%2Fg2%2F58dIXNdGuSTlHvcnHFokJT4FiH27TrzbA0ReYKNyqNHzYerkkv%2FQezEGVMG38Qn%2FoUaBRcXdC2e%2BXHoTQAsAbUSrIwUx53SapGTCisuxnaBLk7Kq5omAGliYu06jnbpciwV5OcvKKbDqosululfPAkB3Ot8szm38NSjhKy5Ft8SLV2kHwwHT8cDU7V6cAR77j8mBRPTxtLe%2BlDyeMzgZRT%2Be1qLGCnXwS7iaCexUFObHl%2BgxeE5%2BfDB58g84GPRYL0ot0zte5DYTsOQ3lR6vwtz%2BoAkJW0WEJHaUW4CY9ZIvGMj4pScrvmlVL15cwfDf%2FRsgn9SSy5CZrPeqr8c9IHlqoHZ0eKGXn527XkG57CKms1Ufv%2FoklHoA0P67jXKtVIOwanyCZEUHroMxKbP9veRbVJGXin%2BtndN5MXKzj1B%2BWaTGY03I%2B9fVHh7aIMxflvOzILWOUAuVvPorl3BYu%2FjLZylFd%2F49o9MNC0%2FcQGOqUBs4SrtxE2df3zPfDQvzNoax92JgAz5JtNqN3geImuXrLSakyCaD8OIuEMnJbDRlys0JAr2BZmncymeOYUwN%2F7VZNGvpXo9%2B2ELKIbhopcfhhR1l4rMS6s2mgKWQmFPi8BR3kIvDxsEGQ8qjj4i47Xz7Hp5zikKTl6FgvR5qIQ8nRLRk%2FA9eN1T64EPC%2BsFhXJq0cZJKL7SFtxnPoIWLZuw6hx%2BxkO&X-Amz-Signature=535c8165eedbad8d217aa01279290573c46304b006b3605d7e78bfd0acbf0893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNZYEQUP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDMZq9lqmNjCjsvjqMv8KUpXIlXg2cxKuRPsEe3iOKkBgIgfBtLP6juTLs4tcPY7hiBHSX4Y1YEMx7VO6e9Ldh3XxEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMgkDCdAia8oqLasrCrcA4rX7Lv9lNiqr5R7%2BsvbWCgE7iAGApgGD1MyGxY3Jci3qo8mSx7d7v9QQ3bRJDlVdKnR7n09Q%2BpQxeSBhxY3iJGRxY3PkfrXiTK%2F6%2FA3e8oIMgEJGnL15gIa%2Fe05439D%2FkN8yeLAeSytZAD7QO5B5J%2Fg2%2F58dIXNdGuSTlHvcnHFokJT4FiH27TrzbA0ReYKNyqNHzYerkkv%2FQezEGVMG38Qn%2FoUaBRcXdC2e%2BXHoTQAsAbUSrIwUx53SapGTCisuxnaBLk7Kq5omAGliYu06jnbpciwV5OcvKKbDqosululfPAkB3Ot8szm38NSjhKy5Ft8SLV2kHwwHT8cDU7V6cAR77j8mBRPTxtLe%2BlDyeMzgZRT%2Be1qLGCnXwS7iaCexUFObHl%2BgxeE5%2BfDB58g84GPRYL0ot0zte5DYTsOQ3lR6vwtz%2BoAkJW0WEJHaUW4CY9ZIvGMj4pScrvmlVL15cwfDf%2FRsgn9SSy5CZrPeqr8c9IHlqoHZ0eKGXn527XkG57CKms1Ufv%2FoklHoA0P67jXKtVIOwanyCZEUHroMxKbP9veRbVJGXin%2BtndN5MXKzj1B%2BWaTGY03I%2B9fVHh7aIMxflvOzILWOUAuVvPorl3BYu%2FjLZylFd%2F49o9MNC0%2FcQGOqUBs4SrtxE2df3zPfDQvzNoax92JgAz5JtNqN3geImuXrLSakyCaD8OIuEMnJbDRlys0JAr2BZmncymeOYUwN%2F7VZNGvpXo9%2B2ELKIbhopcfhhR1l4rMS6s2mgKWQmFPi8BR3kIvDxsEGQ8qjj4i47Xz7Hp5zikKTl6FgvR5qIQ8nRLRk%2FA9eN1T64EPC%2BsFhXJq0cZJKL7SFtxnPoIWLZuw6hx%2BxkO&X-Amz-Signature=f2939f4a553ae9558d3371120ded526c2d81fbddffcf1f8d08891013fc622386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNZYEQUP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDMZq9lqmNjCjsvjqMv8KUpXIlXg2cxKuRPsEe3iOKkBgIgfBtLP6juTLs4tcPY7hiBHSX4Y1YEMx7VO6e9Ldh3XxEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMgkDCdAia8oqLasrCrcA4rX7Lv9lNiqr5R7%2BsvbWCgE7iAGApgGD1MyGxY3Jci3qo8mSx7d7v9QQ3bRJDlVdKnR7n09Q%2BpQxeSBhxY3iJGRxY3PkfrXiTK%2F6%2FA3e8oIMgEJGnL15gIa%2Fe05439D%2FkN8yeLAeSytZAD7QO5B5J%2Fg2%2F58dIXNdGuSTlHvcnHFokJT4FiH27TrzbA0ReYKNyqNHzYerkkv%2FQezEGVMG38Qn%2FoUaBRcXdC2e%2BXHoTQAsAbUSrIwUx53SapGTCisuxnaBLk7Kq5omAGliYu06jnbpciwV5OcvKKbDqosululfPAkB3Ot8szm38NSjhKy5Ft8SLV2kHwwHT8cDU7V6cAR77j8mBRPTxtLe%2BlDyeMzgZRT%2Be1qLGCnXwS7iaCexUFObHl%2BgxeE5%2BfDB58g84GPRYL0ot0zte5DYTsOQ3lR6vwtz%2BoAkJW0WEJHaUW4CY9ZIvGMj4pScrvmlVL15cwfDf%2FRsgn9SSy5CZrPeqr8c9IHlqoHZ0eKGXn527XkG57CKms1Ufv%2FoklHoA0P67jXKtVIOwanyCZEUHroMxKbP9veRbVJGXin%2BtndN5MXKzj1B%2BWaTGY03I%2B9fVHh7aIMxflvOzILWOUAuVvPorl3BYu%2FjLZylFd%2F49o9MNC0%2FcQGOqUBs4SrtxE2df3zPfDQvzNoax92JgAz5JtNqN3geImuXrLSakyCaD8OIuEMnJbDRlys0JAr2BZmncymeOYUwN%2F7VZNGvpXo9%2B2ELKIbhopcfhhR1l4rMS6s2mgKWQmFPi8BR3kIvDxsEGQ8qjj4i47Xz7Hp5zikKTl6FgvR5qIQ8nRLRk%2FA9eN1T64EPC%2BsFhXJq0cZJKL7SFtxnPoIWLZuw6hx%2BxkO&X-Amz-Signature=24736d20536d650f6152f7d1aac399b1b2319e218a8e96b0b482212463b23f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNZYEQUP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDMZq9lqmNjCjsvjqMv8KUpXIlXg2cxKuRPsEe3iOKkBgIgfBtLP6juTLs4tcPY7hiBHSX4Y1YEMx7VO6e9Ldh3XxEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMgkDCdAia8oqLasrCrcA4rX7Lv9lNiqr5R7%2BsvbWCgE7iAGApgGD1MyGxY3Jci3qo8mSx7d7v9QQ3bRJDlVdKnR7n09Q%2BpQxeSBhxY3iJGRxY3PkfrXiTK%2F6%2FA3e8oIMgEJGnL15gIa%2Fe05439D%2FkN8yeLAeSytZAD7QO5B5J%2Fg2%2F58dIXNdGuSTlHvcnHFokJT4FiH27TrzbA0ReYKNyqNHzYerkkv%2FQezEGVMG38Qn%2FoUaBRcXdC2e%2BXHoTQAsAbUSrIwUx53SapGTCisuxnaBLk7Kq5omAGliYu06jnbpciwV5OcvKKbDqosululfPAkB3Ot8szm38NSjhKy5Ft8SLV2kHwwHT8cDU7V6cAR77j8mBRPTxtLe%2BlDyeMzgZRT%2Be1qLGCnXwS7iaCexUFObHl%2BgxeE5%2BfDB58g84GPRYL0ot0zte5DYTsOQ3lR6vwtz%2BoAkJW0WEJHaUW4CY9ZIvGMj4pScrvmlVL15cwfDf%2FRsgn9SSy5CZrPeqr8c9IHlqoHZ0eKGXn527XkG57CKms1Ufv%2FoklHoA0P67jXKtVIOwanyCZEUHroMxKbP9veRbVJGXin%2BtndN5MXKzj1B%2BWaTGY03I%2B9fVHh7aIMxflvOzILWOUAuVvPorl3BYu%2FjLZylFd%2F49o9MNC0%2FcQGOqUBs4SrtxE2df3zPfDQvzNoax92JgAz5JtNqN3geImuXrLSakyCaD8OIuEMnJbDRlys0JAr2BZmncymeOYUwN%2F7VZNGvpXo9%2B2ELKIbhopcfhhR1l4rMS6s2mgKWQmFPi8BR3kIvDxsEGQ8qjj4i47Xz7Hp5zikKTl6FgvR5qIQ8nRLRk%2FA9eN1T64EPC%2BsFhXJq0cZJKL7SFtxnPoIWLZuw6hx%2BxkO&X-Amz-Signature=112b86cec29efa87c5db00c6263a9cc30da9b57802509d2b60726ae59f934d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNZYEQUP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDMZq9lqmNjCjsvjqMv8KUpXIlXg2cxKuRPsEe3iOKkBgIgfBtLP6juTLs4tcPY7hiBHSX4Y1YEMx7VO6e9Ldh3XxEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMgkDCdAia8oqLasrCrcA4rX7Lv9lNiqr5R7%2BsvbWCgE7iAGApgGD1MyGxY3Jci3qo8mSx7d7v9QQ3bRJDlVdKnR7n09Q%2BpQxeSBhxY3iJGRxY3PkfrXiTK%2F6%2FA3e8oIMgEJGnL15gIa%2Fe05439D%2FkN8yeLAeSytZAD7QO5B5J%2Fg2%2F58dIXNdGuSTlHvcnHFokJT4FiH27TrzbA0ReYKNyqNHzYerkkv%2FQezEGVMG38Qn%2FoUaBRcXdC2e%2BXHoTQAsAbUSrIwUx53SapGTCisuxnaBLk7Kq5omAGliYu06jnbpciwV5OcvKKbDqosululfPAkB3Ot8szm38NSjhKy5Ft8SLV2kHwwHT8cDU7V6cAR77j8mBRPTxtLe%2BlDyeMzgZRT%2Be1qLGCnXwS7iaCexUFObHl%2BgxeE5%2BfDB58g84GPRYL0ot0zte5DYTsOQ3lR6vwtz%2BoAkJW0WEJHaUW4CY9ZIvGMj4pScrvmlVL15cwfDf%2FRsgn9SSy5CZrPeqr8c9IHlqoHZ0eKGXn527XkG57CKms1Ufv%2FoklHoA0P67jXKtVIOwanyCZEUHroMxKbP9veRbVJGXin%2BtndN5MXKzj1B%2BWaTGY03I%2B9fVHh7aIMxflvOzILWOUAuVvPorl3BYu%2FjLZylFd%2F49o9MNC0%2FcQGOqUBs4SrtxE2df3zPfDQvzNoax92JgAz5JtNqN3geImuXrLSakyCaD8OIuEMnJbDRlys0JAr2BZmncymeOYUwN%2F7VZNGvpXo9%2B2ELKIbhopcfhhR1l4rMS6s2mgKWQmFPi8BR3kIvDxsEGQ8qjj4i47Xz7Hp5zikKTl6FgvR5qIQ8nRLRk%2FA9eN1T64EPC%2BsFhXJq0cZJKL7SFtxnPoIWLZuw6hx%2BxkO&X-Amz-Signature=9295519d7e625cb63ead82549e9ec71ba73bb806bfb9ccb1db7d25b53a345dfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNZYEQUP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDMZq9lqmNjCjsvjqMv8KUpXIlXg2cxKuRPsEe3iOKkBgIgfBtLP6juTLs4tcPY7hiBHSX4Y1YEMx7VO6e9Ldh3XxEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMgkDCdAia8oqLasrCrcA4rX7Lv9lNiqr5R7%2BsvbWCgE7iAGApgGD1MyGxY3Jci3qo8mSx7d7v9QQ3bRJDlVdKnR7n09Q%2BpQxeSBhxY3iJGRxY3PkfrXiTK%2F6%2FA3e8oIMgEJGnL15gIa%2Fe05439D%2FkN8yeLAeSytZAD7QO5B5J%2Fg2%2F58dIXNdGuSTlHvcnHFokJT4FiH27TrzbA0ReYKNyqNHzYerkkv%2FQezEGVMG38Qn%2FoUaBRcXdC2e%2BXHoTQAsAbUSrIwUx53SapGTCisuxnaBLk7Kq5omAGliYu06jnbpciwV5OcvKKbDqosululfPAkB3Ot8szm38NSjhKy5Ft8SLV2kHwwHT8cDU7V6cAR77j8mBRPTxtLe%2BlDyeMzgZRT%2Be1qLGCnXwS7iaCexUFObHl%2BgxeE5%2BfDB58g84GPRYL0ot0zte5DYTsOQ3lR6vwtz%2BoAkJW0WEJHaUW4CY9ZIvGMj4pScrvmlVL15cwfDf%2FRsgn9SSy5CZrPeqr8c9IHlqoHZ0eKGXn527XkG57CKms1Ufv%2FoklHoA0P67jXKtVIOwanyCZEUHroMxKbP9veRbVJGXin%2BtndN5MXKzj1B%2BWaTGY03I%2B9fVHh7aIMxflvOzILWOUAuVvPorl3BYu%2FjLZylFd%2F49o9MNC0%2FcQGOqUBs4SrtxE2df3zPfDQvzNoax92JgAz5JtNqN3geImuXrLSakyCaD8OIuEMnJbDRlys0JAr2BZmncymeOYUwN%2F7VZNGvpXo9%2B2ELKIbhopcfhhR1l4rMS6s2mgKWQmFPi8BR3kIvDxsEGQ8qjj4i47Xz7Hp5zikKTl6FgvR5qIQ8nRLRk%2FA9eN1T64EPC%2BsFhXJq0cZJKL7SFtxnPoIWLZuw6hx%2BxkO&X-Amz-Signature=b49ecf2ea8d45b1852ce70d87822ede62210c43a2a1c4e963d184391483b43be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
