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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SBLV22K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAHwLHnU0IBVucpSIJRvRU1JB0YxIINCsSsFSWfGv5yfAiB8OL6%2BEcb5s1YlTNwOCkONj7PHFEUAw3fpcncnfMxJjCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2RQJzhpZON5CtsdKtwDoVZUFWbqZqTNIcgSG%2BXJFkJX5yxfh87U%2FbpIP4uCFtgkl4HP0nw2Gpn6WXyKAEOkLzpscqmv8AJ0MHWHV%2BjUUhkBH3UnfQ%2FADCZfdh1W7g1lConSyfo%2B3kIthyUliXgPfjpFKxLx9j4xXDRIWnHVtrbLc8LubI94OlIzBcTs815NzJ8MVDvllGi9Am1g2%2FhsZ%2BuklJRtdHr2DYlXjynd5pM8zkn%2F9yrpkWQ633Mx%2FUoaAySlffg2Q88bKV5ExIsTKH2LoJ%2FKwK4hErvgAcUqbnYxbPve0UtBtM08EKeWCcGBhK%2Bqs0%2BlmEuqyYMIxLX78RmrhkjhiwjtwGyPL0KViXc2w96tD3SU4NdAu5W25njh8UVF%2FgH93Wf4zfoXU84T%2FGoPhhutlb9SfXlcmXLPdG%2FrSqiO705ygBuABZVugn2jfTMiMh7gmfb6eJuxiZiNrWzXtXM8ZP%2FY11HpdRycM7EOjjI0RKSLAQlN37fuoIZy8IFxoFuzLVWFCMQJ8O3jiN2GMUAOCTPOD1HKgMWRB%2Bx71u5NKAGfIKkPUj29JOWwQfq0Vu1yykqDnJXDhs7CSjwQL5XWceA4cwSjlecET35l%2FccFN6fIzRANjiku5lp7ML0thKqJpS%2FzyMcwscnTxAY6pgGqlVFrGEjze4OwgD5rBnKT0hRcw6Y%2BYwHchZkOtAxVEPGzvwDevQryNm109s4jWvJiNrK%2B628tLpFminfSycqKESle%2BSQXXwon28IAxBE55EsudP8lWBcEnfc581p6I8lcw8Sgd%2BgOunmHTR9uE%2BOXGzanHefNhw16zWqVYH%2BABjNF0cp1TdKe2UQGf2wHlZowuLW8qA%2B0AjS0jtn%2FXDt%2BHaZNGNZU&X-Amz-Signature=c4462b42141f7524defa03ac40819000343eb150624d8b0a2943beffd4c543f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SBLV22K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAHwLHnU0IBVucpSIJRvRU1JB0YxIINCsSsFSWfGv5yfAiB8OL6%2BEcb5s1YlTNwOCkONj7PHFEUAw3fpcncnfMxJjCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2RQJzhpZON5CtsdKtwDoVZUFWbqZqTNIcgSG%2BXJFkJX5yxfh87U%2FbpIP4uCFtgkl4HP0nw2Gpn6WXyKAEOkLzpscqmv8AJ0MHWHV%2BjUUhkBH3UnfQ%2FADCZfdh1W7g1lConSyfo%2B3kIthyUliXgPfjpFKxLx9j4xXDRIWnHVtrbLc8LubI94OlIzBcTs815NzJ8MVDvllGi9Am1g2%2FhsZ%2BuklJRtdHr2DYlXjynd5pM8zkn%2F9yrpkWQ633Mx%2FUoaAySlffg2Q88bKV5ExIsTKH2LoJ%2FKwK4hErvgAcUqbnYxbPve0UtBtM08EKeWCcGBhK%2Bqs0%2BlmEuqyYMIxLX78RmrhkjhiwjtwGyPL0KViXc2w96tD3SU4NdAu5W25njh8UVF%2FgH93Wf4zfoXU84T%2FGoPhhutlb9SfXlcmXLPdG%2FrSqiO705ygBuABZVugn2jfTMiMh7gmfb6eJuxiZiNrWzXtXM8ZP%2FY11HpdRycM7EOjjI0RKSLAQlN37fuoIZy8IFxoFuzLVWFCMQJ8O3jiN2GMUAOCTPOD1HKgMWRB%2Bx71u5NKAGfIKkPUj29JOWwQfq0Vu1yykqDnJXDhs7CSjwQL5XWceA4cwSjlecET35l%2FccFN6fIzRANjiku5lp7ML0thKqJpS%2FzyMcwscnTxAY6pgGqlVFrGEjze4OwgD5rBnKT0hRcw6Y%2BYwHchZkOtAxVEPGzvwDevQryNm109s4jWvJiNrK%2B628tLpFminfSycqKESle%2BSQXXwon28IAxBE55EsudP8lWBcEnfc581p6I8lcw8Sgd%2BgOunmHTR9uE%2BOXGzanHefNhw16zWqVYH%2BABjNF0cp1TdKe2UQGf2wHlZowuLW8qA%2B0AjS0jtn%2FXDt%2BHaZNGNZU&X-Amz-Signature=603620ff32e8e31246c6b1bf133a29bf18e92874b18d95fc2352bd2c4bc6077f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SBLV22K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAHwLHnU0IBVucpSIJRvRU1JB0YxIINCsSsFSWfGv5yfAiB8OL6%2BEcb5s1YlTNwOCkONj7PHFEUAw3fpcncnfMxJjCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2RQJzhpZON5CtsdKtwDoVZUFWbqZqTNIcgSG%2BXJFkJX5yxfh87U%2FbpIP4uCFtgkl4HP0nw2Gpn6WXyKAEOkLzpscqmv8AJ0MHWHV%2BjUUhkBH3UnfQ%2FADCZfdh1W7g1lConSyfo%2B3kIthyUliXgPfjpFKxLx9j4xXDRIWnHVtrbLc8LubI94OlIzBcTs815NzJ8MVDvllGi9Am1g2%2FhsZ%2BuklJRtdHr2DYlXjynd5pM8zkn%2F9yrpkWQ633Mx%2FUoaAySlffg2Q88bKV5ExIsTKH2LoJ%2FKwK4hErvgAcUqbnYxbPve0UtBtM08EKeWCcGBhK%2Bqs0%2BlmEuqyYMIxLX78RmrhkjhiwjtwGyPL0KViXc2w96tD3SU4NdAu5W25njh8UVF%2FgH93Wf4zfoXU84T%2FGoPhhutlb9SfXlcmXLPdG%2FrSqiO705ygBuABZVugn2jfTMiMh7gmfb6eJuxiZiNrWzXtXM8ZP%2FY11HpdRycM7EOjjI0RKSLAQlN37fuoIZy8IFxoFuzLVWFCMQJ8O3jiN2GMUAOCTPOD1HKgMWRB%2Bx71u5NKAGfIKkPUj29JOWwQfq0Vu1yykqDnJXDhs7CSjwQL5XWceA4cwSjlecET35l%2FccFN6fIzRANjiku5lp7ML0thKqJpS%2FzyMcwscnTxAY6pgGqlVFrGEjze4OwgD5rBnKT0hRcw6Y%2BYwHchZkOtAxVEPGzvwDevQryNm109s4jWvJiNrK%2B628tLpFminfSycqKESle%2BSQXXwon28IAxBE55EsudP8lWBcEnfc581p6I8lcw8Sgd%2BgOunmHTR9uE%2BOXGzanHefNhw16zWqVYH%2BABjNF0cp1TdKe2UQGf2wHlZowuLW8qA%2B0AjS0jtn%2FXDt%2BHaZNGNZU&X-Amz-Signature=f32f9d15411bdaab50193108196c2e4fe3de6ff1242fcc677b37f58310f22019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SBLV22K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAHwLHnU0IBVucpSIJRvRU1JB0YxIINCsSsFSWfGv5yfAiB8OL6%2BEcb5s1YlTNwOCkONj7PHFEUAw3fpcncnfMxJjCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2RQJzhpZON5CtsdKtwDoVZUFWbqZqTNIcgSG%2BXJFkJX5yxfh87U%2FbpIP4uCFtgkl4HP0nw2Gpn6WXyKAEOkLzpscqmv8AJ0MHWHV%2BjUUhkBH3UnfQ%2FADCZfdh1W7g1lConSyfo%2B3kIthyUliXgPfjpFKxLx9j4xXDRIWnHVtrbLc8LubI94OlIzBcTs815NzJ8MVDvllGi9Am1g2%2FhsZ%2BuklJRtdHr2DYlXjynd5pM8zkn%2F9yrpkWQ633Mx%2FUoaAySlffg2Q88bKV5ExIsTKH2LoJ%2FKwK4hErvgAcUqbnYxbPve0UtBtM08EKeWCcGBhK%2Bqs0%2BlmEuqyYMIxLX78RmrhkjhiwjtwGyPL0KViXc2w96tD3SU4NdAu5W25njh8UVF%2FgH93Wf4zfoXU84T%2FGoPhhutlb9SfXlcmXLPdG%2FrSqiO705ygBuABZVugn2jfTMiMh7gmfb6eJuxiZiNrWzXtXM8ZP%2FY11HpdRycM7EOjjI0RKSLAQlN37fuoIZy8IFxoFuzLVWFCMQJ8O3jiN2GMUAOCTPOD1HKgMWRB%2Bx71u5NKAGfIKkPUj29JOWwQfq0Vu1yykqDnJXDhs7CSjwQL5XWceA4cwSjlecET35l%2FccFN6fIzRANjiku5lp7ML0thKqJpS%2FzyMcwscnTxAY6pgGqlVFrGEjze4OwgD5rBnKT0hRcw6Y%2BYwHchZkOtAxVEPGzvwDevQryNm109s4jWvJiNrK%2B628tLpFminfSycqKESle%2BSQXXwon28IAxBE55EsudP8lWBcEnfc581p6I8lcw8Sgd%2BgOunmHTR9uE%2BOXGzanHefNhw16zWqVYH%2BABjNF0cp1TdKe2UQGf2wHlZowuLW8qA%2B0AjS0jtn%2FXDt%2BHaZNGNZU&X-Amz-Signature=6b8ef2fc0916111676209f97e1242521150cc86ed1e108aba77384e59983db89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD4B3DYD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCo0wb%2BPZBTu4p6XCjreD9fernE0QdwBZWisfWt7IDwGAIhAMZGyVPkHymCE0QR1099fr38PLoSncVOZy0KxLe1%2FtX7KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMQ%2BpPSqlMU%2BF%2F%2ByMq3AP%2F%2Fw3eASBcG5LZOzXefiz60YpYyzOIwJEKy42uKjJ5wxLcB8KdQwMhSVOdS1T0zxmfIupUF4iSdr6%2B52%2BsxSNFrn9fICb7TCljbV2LO6fKuwo7lxlDqUlaA9XVQ0PV9jZTZj4xxWRrrgF3MgBMLs%2Bf%2BUvrfjlpfOJ6KzShX6C7ZU1MAOWPTHqJPhj7a9UNgzInq49FGQPDyhRlJcZN96KJFUPXXmaq%2Frkxtnr9nWBnSu16oYgmSEhy61rY21GvPXx3Ti%2BNNmvRrogHDAxeQFIgTmA62ZcMMdzYdti7qSawRLaUz0ecVlgZHbDmq8jqD7Ez4K%2B8HrYca%2FyaML7d9Krz8p0H%2FbyC3Ni7Fm9ygCbUEs4D%2BXoeyToa0r%2FDHydL%2BdD1eMnqnAYafApaqYKxCn9SLfF3%2FBk1fKZQx0AhhEJa8ZUmvFKcnhUQUDr%2FjJudURIfG%2BMHxrCw069ka4j7jwZ%2FGvkOf8sAyAigf5C21BSamGIOfW5qoB5ms9custWUnvbh73SFHbMv%2BpGrspw0YhqsQ%2B8lp6mZMcMnz2LYd1BYq8MTWoumTfktAG0P0NnZrmOfjukUnx3F7IHboWyF8lVJPQSn0Xm9NkRSBnD47YbIYG0gmpk0ko6xxNXoNTDEytPEBjqkAZYshj16DPwZkXVb6NfeOOsJXACPl8kDAPNKTKPYE0l%2FJM3iwM5t%2B6xOfCsEM4xz8YqWI5XQLhboit40bG0DCywJdkH3od2buf%2BWDLXox8Bc4xIGzHUSTDYjQfvWDZR3vBHaHPEQj5NnuIv1beyOFRMmC7qWC71c6F9hDRuFKJ0RdbBaIGRVWnq8M0UTF9aUeeNyDi1KLHaz5dEXVC%2FfDUkjlfPk&X-Amz-Signature=f0e3bf9474d4f9a9a139a785bcb8c2b4815dd2a96b96b4b41adc055308251a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SBLV22K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAHwLHnU0IBVucpSIJRvRU1JB0YxIINCsSsFSWfGv5yfAiB8OL6%2BEcb5s1YlTNwOCkONj7PHFEUAw3fpcncnfMxJjCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2RQJzhpZON5CtsdKtwDoVZUFWbqZqTNIcgSG%2BXJFkJX5yxfh87U%2FbpIP4uCFtgkl4HP0nw2Gpn6WXyKAEOkLzpscqmv8AJ0MHWHV%2BjUUhkBH3UnfQ%2FADCZfdh1W7g1lConSyfo%2B3kIthyUliXgPfjpFKxLx9j4xXDRIWnHVtrbLc8LubI94OlIzBcTs815NzJ8MVDvllGi9Am1g2%2FhsZ%2BuklJRtdHr2DYlXjynd5pM8zkn%2F9yrpkWQ633Mx%2FUoaAySlffg2Q88bKV5ExIsTKH2LoJ%2FKwK4hErvgAcUqbnYxbPve0UtBtM08EKeWCcGBhK%2Bqs0%2BlmEuqyYMIxLX78RmrhkjhiwjtwGyPL0KViXc2w96tD3SU4NdAu5W25njh8UVF%2FgH93Wf4zfoXU84T%2FGoPhhutlb9SfXlcmXLPdG%2FrSqiO705ygBuABZVugn2jfTMiMh7gmfb6eJuxiZiNrWzXtXM8ZP%2FY11HpdRycM7EOjjI0RKSLAQlN37fuoIZy8IFxoFuzLVWFCMQJ8O3jiN2GMUAOCTPOD1HKgMWRB%2Bx71u5NKAGfIKkPUj29JOWwQfq0Vu1yykqDnJXDhs7CSjwQL5XWceA4cwSjlecET35l%2FccFN6fIzRANjiku5lp7ML0thKqJpS%2FzyMcwscnTxAY6pgGqlVFrGEjze4OwgD5rBnKT0hRcw6Y%2BYwHchZkOtAxVEPGzvwDevQryNm109s4jWvJiNrK%2B628tLpFminfSycqKESle%2BSQXXwon28IAxBE55EsudP8lWBcEnfc581p6I8lcw8Sgd%2BgOunmHTR9uE%2BOXGzanHefNhw16zWqVYH%2BABjNF0cp1TdKe2UQGf2wHlZowuLW8qA%2B0AjS0jtn%2FXDt%2BHaZNGNZU&X-Amz-Signature=1d70c6d056f16fbb5e2877f688a6a2d08dc3446c53dbe570da17f499dbc57925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SBLV22K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAHwLHnU0IBVucpSIJRvRU1JB0YxIINCsSsFSWfGv5yfAiB8OL6%2BEcb5s1YlTNwOCkONj7PHFEUAw3fpcncnfMxJjCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2RQJzhpZON5CtsdKtwDoVZUFWbqZqTNIcgSG%2BXJFkJX5yxfh87U%2FbpIP4uCFtgkl4HP0nw2Gpn6WXyKAEOkLzpscqmv8AJ0MHWHV%2BjUUhkBH3UnfQ%2FADCZfdh1W7g1lConSyfo%2B3kIthyUliXgPfjpFKxLx9j4xXDRIWnHVtrbLc8LubI94OlIzBcTs815NzJ8MVDvllGi9Am1g2%2FhsZ%2BuklJRtdHr2DYlXjynd5pM8zkn%2F9yrpkWQ633Mx%2FUoaAySlffg2Q88bKV5ExIsTKH2LoJ%2FKwK4hErvgAcUqbnYxbPve0UtBtM08EKeWCcGBhK%2Bqs0%2BlmEuqyYMIxLX78RmrhkjhiwjtwGyPL0KViXc2w96tD3SU4NdAu5W25njh8UVF%2FgH93Wf4zfoXU84T%2FGoPhhutlb9SfXlcmXLPdG%2FrSqiO705ygBuABZVugn2jfTMiMh7gmfb6eJuxiZiNrWzXtXM8ZP%2FY11HpdRycM7EOjjI0RKSLAQlN37fuoIZy8IFxoFuzLVWFCMQJ8O3jiN2GMUAOCTPOD1HKgMWRB%2Bx71u5NKAGfIKkPUj29JOWwQfq0Vu1yykqDnJXDhs7CSjwQL5XWceA4cwSjlecET35l%2FccFN6fIzRANjiku5lp7ML0thKqJpS%2FzyMcwscnTxAY6pgGqlVFrGEjze4OwgD5rBnKT0hRcw6Y%2BYwHchZkOtAxVEPGzvwDevQryNm109s4jWvJiNrK%2B628tLpFminfSycqKESle%2BSQXXwon28IAxBE55EsudP8lWBcEnfc581p6I8lcw8Sgd%2BgOunmHTR9uE%2BOXGzanHefNhw16zWqVYH%2BABjNF0cp1TdKe2UQGf2wHlZowuLW8qA%2B0AjS0jtn%2FXDt%2BHaZNGNZU&X-Amz-Signature=5636544eb9356a1ff8095e7bf424d5a7dc0ad1213a65116c3306d7d3b77bc67a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SBLV22K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAHwLHnU0IBVucpSIJRvRU1JB0YxIINCsSsFSWfGv5yfAiB8OL6%2BEcb5s1YlTNwOCkONj7PHFEUAw3fpcncnfMxJjCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2RQJzhpZON5CtsdKtwDoVZUFWbqZqTNIcgSG%2BXJFkJX5yxfh87U%2FbpIP4uCFtgkl4HP0nw2Gpn6WXyKAEOkLzpscqmv8AJ0MHWHV%2BjUUhkBH3UnfQ%2FADCZfdh1W7g1lConSyfo%2B3kIthyUliXgPfjpFKxLx9j4xXDRIWnHVtrbLc8LubI94OlIzBcTs815NzJ8MVDvllGi9Am1g2%2FhsZ%2BuklJRtdHr2DYlXjynd5pM8zkn%2F9yrpkWQ633Mx%2FUoaAySlffg2Q88bKV5ExIsTKH2LoJ%2FKwK4hErvgAcUqbnYxbPve0UtBtM08EKeWCcGBhK%2Bqs0%2BlmEuqyYMIxLX78RmrhkjhiwjtwGyPL0KViXc2w96tD3SU4NdAu5W25njh8UVF%2FgH93Wf4zfoXU84T%2FGoPhhutlb9SfXlcmXLPdG%2FrSqiO705ygBuABZVugn2jfTMiMh7gmfb6eJuxiZiNrWzXtXM8ZP%2FY11HpdRycM7EOjjI0RKSLAQlN37fuoIZy8IFxoFuzLVWFCMQJ8O3jiN2GMUAOCTPOD1HKgMWRB%2Bx71u5NKAGfIKkPUj29JOWwQfq0Vu1yykqDnJXDhs7CSjwQL5XWceA4cwSjlecET35l%2FccFN6fIzRANjiku5lp7ML0thKqJpS%2FzyMcwscnTxAY6pgGqlVFrGEjze4OwgD5rBnKT0hRcw6Y%2BYwHchZkOtAxVEPGzvwDevQryNm109s4jWvJiNrK%2B628tLpFminfSycqKESle%2BSQXXwon28IAxBE55EsudP8lWBcEnfc581p6I8lcw8Sgd%2BgOunmHTR9uE%2BOXGzanHefNhw16zWqVYH%2BABjNF0cp1TdKe2UQGf2wHlZowuLW8qA%2B0AjS0jtn%2FXDt%2BHaZNGNZU&X-Amz-Signature=1044fcacfba8d413a1613e9cb0de25e1d5e63e1c60dceb1193099ef721a8d372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SBLV22K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAHwLHnU0IBVucpSIJRvRU1JB0YxIINCsSsFSWfGv5yfAiB8OL6%2BEcb5s1YlTNwOCkONj7PHFEUAw3fpcncnfMxJjCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2RQJzhpZON5CtsdKtwDoVZUFWbqZqTNIcgSG%2BXJFkJX5yxfh87U%2FbpIP4uCFtgkl4HP0nw2Gpn6WXyKAEOkLzpscqmv8AJ0MHWHV%2BjUUhkBH3UnfQ%2FADCZfdh1W7g1lConSyfo%2B3kIthyUliXgPfjpFKxLx9j4xXDRIWnHVtrbLc8LubI94OlIzBcTs815NzJ8MVDvllGi9Am1g2%2FhsZ%2BuklJRtdHr2DYlXjynd5pM8zkn%2F9yrpkWQ633Mx%2FUoaAySlffg2Q88bKV5ExIsTKH2LoJ%2FKwK4hErvgAcUqbnYxbPve0UtBtM08EKeWCcGBhK%2Bqs0%2BlmEuqyYMIxLX78RmrhkjhiwjtwGyPL0KViXc2w96tD3SU4NdAu5W25njh8UVF%2FgH93Wf4zfoXU84T%2FGoPhhutlb9SfXlcmXLPdG%2FrSqiO705ygBuABZVugn2jfTMiMh7gmfb6eJuxiZiNrWzXtXM8ZP%2FY11HpdRycM7EOjjI0RKSLAQlN37fuoIZy8IFxoFuzLVWFCMQJ8O3jiN2GMUAOCTPOD1HKgMWRB%2Bx71u5NKAGfIKkPUj29JOWwQfq0Vu1yykqDnJXDhs7CSjwQL5XWceA4cwSjlecET35l%2FccFN6fIzRANjiku5lp7ML0thKqJpS%2FzyMcwscnTxAY6pgGqlVFrGEjze4OwgD5rBnKT0hRcw6Y%2BYwHchZkOtAxVEPGzvwDevQryNm109s4jWvJiNrK%2B628tLpFminfSycqKESle%2BSQXXwon28IAxBE55EsudP8lWBcEnfc581p6I8lcw8Sgd%2BgOunmHTR9uE%2BOXGzanHefNhw16zWqVYH%2BABjNF0cp1TdKe2UQGf2wHlZowuLW8qA%2B0AjS0jtn%2FXDt%2BHaZNGNZU&X-Amz-Signature=5db4282278e0fa6123de40a85e7c771e2ea560e7d8c2924d6a0222ddaa6024fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SBLV22K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAHwLHnU0IBVucpSIJRvRU1JB0YxIINCsSsFSWfGv5yfAiB8OL6%2BEcb5s1YlTNwOCkONj7PHFEUAw3fpcncnfMxJjCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2RQJzhpZON5CtsdKtwDoVZUFWbqZqTNIcgSG%2BXJFkJX5yxfh87U%2FbpIP4uCFtgkl4HP0nw2Gpn6WXyKAEOkLzpscqmv8AJ0MHWHV%2BjUUhkBH3UnfQ%2FADCZfdh1W7g1lConSyfo%2B3kIthyUliXgPfjpFKxLx9j4xXDRIWnHVtrbLc8LubI94OlIzBcTs815NzJ8MVDvllGi9Am1g2%2FhsZ%2BuklJRtdHr2DYlXjynd5pM8zkn%2F9yrpkWQ633Mx%2FUoaAySlffg2Q88bKV5ExIsTKH2LoJ%2FKwK4hErvgAcUqbnYxbPve0UtBtM08EKeWCcGBhK%2Bqs0%2BlmEuqyYMIxLX78RmrhkjhiwjtwGyPL0KViXc2w96tD3SU4NdAu5W25njh8UVF%2FgH93Wf4zfoXU84T%2FGoPhhutlb9SfXlcmXLPdG%2FrSqiO705ygBuABZVugn2jfTMiMh7gmfb6eJuxiZiNrWzXtXM8ZP%2FY11HpdRycM7EOjjI0RKSLAQlN37fuoIZy8IFxoFuzLVWFCMQJ8O3jiN2GMUAOCTPOD1HKgMWRB%2Bx71u5NKAGfIKkPUj29JOWwQfq0Vu1yykqDnJXDhs7CSjwQL5XWceA4cwSjlecET35l%2FccFN6fIzRANjiku5lp7ML0thKqJpS%2FzyMcwscnTxAY6pgGqlVFrGEjze4OwgD5rBnKT0hRcw6Y%2BYwHchZkOtAxVEPGzvwDevQryNm109s4jWvJiNrK%2B628tLpFminfSycqKESle%2BSQXXwon28IAxBE55EsudP8lWBcEnfc581p6I8lcw8Sgd%2BgOunmHTR9uE%2BOXGzanHefNhw16zWqVYH%2BABjNF0cp1TdKe2UQGf2wHlZowuLW8qA%2B0AjS0jtn%2FXDt%2BHaZNGNZU&X-Amz-Signature=10b046c286a25f0dce14e91b39fef2a0c87a02f1bd0ecee7b14caca72bce6780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SBLV22K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAHwLHnU0IBVucpSIJRvRU1JB0YxIINCsSsFSWfGv5yfAiB8OL6%2BEcb5s1YlTNwOCkONj7PHFEUAw3fpcncnfMxJjCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2RQJzhpZON5CtsdKtwDoVZUFWbqZqTNIcgSG%2BXJFkJX5yxfh87U%2FbpIP4uCFtgkl4HP0nw2Gpn6WXyKAEOkLzpscqmv8AJ0MHWHV%2BjUUhkBH3UnfQ%2FADCZfdh1W7g1lConSyfo%2B3kIthyUliXgPfjpFKxLx9j4xXDRIWnHVtrbLc8LubI94OlIzBcTs815NzJ8MVDvllGi9Am1g2%2FhsZ%2BuklJRtdHr2DYlXjynd5pM8zkn%2F9yrpkWQ633Mx%2FUoaAySlffg2Q88bKV5ExIsTKH2LoJ%2FKwK4hErvgAcUqbnYxbPve0UtBtM08EKeWCcGBhK%2Bqs0%2BlmEuqyYMIxLX78RmrhkjhiwjtwGyPL0KViXc2w96tD3SU4NdAu5W25njh8UVF%2FgH93Wf4zfoXU84T%2FGoPhhutlb9SfXlcmXLPdG%2FrSqiO705ygBuABZVugn2jfTMiMh7gmfb6eJuxiZiNrWzXtXM8ZP%2FY11HpdRycM7EOjjI0RKSLAQlN37fuoIZy8IFxoFuzLVWFCMQJ8O3jiN2GMUAOCTPOD1HKgMWRB%2Bx71u5NKAGfIKkPUj29JOWwQfq0Vu1yykqDnJXDhs7CSjwQL5XWceA4cwSjlecET35l%2FccFN6fIzRANjiku5lp7ML0thKqJpS%2FzyMcwscnTxAY6pgGqlVFrGEjze4OwgD5rBnKT0hRcw6Y%2BYwHchZkOtAxVEPGzvwDevQryNm109s4jWvJiNrK%2B628tLpFminfSycqKESle%2BSQXXwon28IAxBE55EsudP8lWBcEnfc581p6I8lcw8Sgd%2BgOunmHTR9uE%2BOXGzanHefNhw16zWqVYH%2BABjNF0cp1TdKe2UQGf2wHlZowuLW8qA%2B0AjS0jtn%2FXDt%2BHaZNGNZU&X-Amz-Signature=07c3141ca2df25c8573612b971da1a313417657eda490b36d9c2aba62f55f058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
