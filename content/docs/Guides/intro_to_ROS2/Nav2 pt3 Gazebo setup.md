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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JDQMU5U%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGiPjNrite5Y%2BYivW%2FKZjZZ%2BRZw0JiMFJskBdhcxuo%2BJAiBW7usnr83IXLihNMi6%2BCNjmK2%2FGk6R2V30JgrsywrAhir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMHb1yL6NUTpjQOAWlKtwDkIflNwZ07GDz20Dk1G9k%2F%2FrRtfEEPv6CvjrQ1g1T2IL6vdKcQ6oM279vkwzK%2BEIgk8%2FENVnGnOlVOWZ1H1X0K5n%2BrCEf04rGOHOLnyLJKtjOZs%2B5SkM1rHPerU7EM52T%2BC%2FC8b8GDzs8sXsUpZ5QWuSkJl7APWqJlajwTsCoqidJ%2Fs%2BSGyAM17HtzrJ%2BeerkYbyPKhf4NCnx6LaO4ESlcv34AqUJ7yNUgq4BzPevUIxoRCXGsKik6pQ9rjxHT0Uqq9KZERibShBMKOH29%2FWAqqjrzhTrqyySTh7pOSz8bziKpg405hajFQOIXQ5J5ZkqPoviLzDPKaeJkKM0vxkzaxAW5wWLoUyeT6j20wQEMwWE69LX0IxCDgYoSMpmn2qaB%2BsYJFQLuF7R4Bq000sWzVjHaRAzQub4wbO%2FNOYNEpohQD7FNV%2F7BEGsDygA4VmHUb3bn1oV%2F3Wz2RgT3N%2FmKKCvs03iORgrb3OBORpwvtIk4o8JJ0sX0%2F8ZQfJoZtY3L3B7GS%2BVtC7NwzdSFV7aCQttKI60taKZCTNKHe8thrsPCtF2DL50IWp%2BIlStQgemm65tE%2BD%2Bw9eGM%2B0crYCUq1EWCc3SeMhhBnqQBF5TI9seWGJGzxAgyNayD68w2fq%2FxAY6pgF5eQ1wTN3MdhJkUVZIYPqgFT3lXZ3AsB27f20TsBA%2Foyo6BkHj6ZEMGkoTi4C8Pp7Dfy19IzopHp7THh2D%2BYp6%2B0hXW6568NwkDQjBFdS30VBntOsz%2FjFcBbAZNc8z5cTCmBUdiTI2tOAO8DwyZakMkDuMgNY0128wNA8YMtnDcg0pzIpdMQpeAJ5H3VBTZyIPTHnFjES6O5Vo8%2FAJ5gO45fZbEkzk&X-Amz-Signature=508df3eee0aeb8ae199726f7220b3cd029abd29742201ba3cc813d8259651307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JDQMU5U%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGiPjNrite5Y%2BYivW%2FKZjZZ%2BRZw0JiMFJskBdhcxuo%2BJAiBW7usnr83IXLihNMi6%2BCNjmK2%2FGk6R2V30JgrsywrAhir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMHb1yL6NUTpjQOAWlKtwDkIflNwZ07GDz20Dk1G9k%2F%2FrRtfEEPv6CvjrQ1g1T2IL6vdKcQ6oM279vkwzK%2BEIgk8%2FENVnGnOlVOWZ1H1X0K5n%2BrCEf04rGOHOLnyLJKtjOZs%2B5SkM1rHPerU7EM52T%2BC%2FC8b8GDzs8sXsUpZ5QWuSkJl7APWqJlajwTsCoqidJ%2Fs%2BSGyAM17HtzrJ%2BeerkYbyPKhf4NCnx6LaO4ESlcv34AqUJ7yNUgq4BzPevUIxoRCXGsKik6pQ9rjxHT0Uqq9KZERibShBMKOH29%2FWAqqjrzhTrqyySTh7pOSz8bziKpg405hajFQOIXQ5J5ZkqPoviLzDPKaeJkKM0vxkzaxAW5wWLoUyeT6j20wQEMwWE69LX0IxCDgYoSMpmn2qaB%2BsYJFQLuF7R4Bq000sWzVjHaRAzQub4wbO%2FNOYNEpohQD7FNV%2F7BEGsDygA4VmHUb3bn1oV%2F3Wz2RgT3N%2FmKKCvs03iORgrb3OBORpwvtIk4o8JJ0sX0%2F8ZQfJoZtY3L3B7GS%2BVtC7NwzdSFV7aCQttKI60taKZCTNKHe8thrsPCtF2DL50IWp%2BIlStQgemm65tE%2BD%2Bw9eGM%2B0crYCUq1EWCc3SeMhhBnqQBF5TI9seWGJGzxAgyNayD68w2fq%2FxAY6pgF5eQ1wTN3MdhJkUVZIYPqgFT3lXZ3AsB27f20TsBA%2Foyo6BkHj6ZEMGkoTi4C8Pp7Dfy19IzopHp7THh2D%2BYp6%2B0hXW6568NwkDQjBFdS30VBntOsz%2FjFcBbAZNc8z5cTCmBUdiTI2tOAO8DwyZakMkDuMgNY0128wNA8YMtnDcg0pzIpdMQpeAJ5H3VBTZyIPTHnFjES6O5Vo8%2FAJ5gO45fZbEkzk&X-Amz-Signature=24c60b753a40b84f18246dada51569c9248d512e39f32a96d1993bff07c901d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JDQMU5U%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGiPjNrite5Y%2BYivW%2FKZjZZ%2BRZw0JiMFJskBdhcxuo%2BJAiBW7usnr83IXLihNMi6%2BCNjmK2%2FGk6R2V30JgrsywrAhir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMHb1yL6NUTpjQOAWlKtwDkIflNwZ07GDz20Dk1G9k%2F%2FrRtfEEPv6CvjrQ1g1T2IL6vdKcQ6oM279vkwzK%2BEIgk8%2FENVnGnOlVOWZ1H1X0K5n%2BrCEf04rGOHOLnyLJKtjOZs%2B5SkM1rHPerU7EM52T%2BC%2FC8b8GDzs8sXsUpZ5QWuSkJl7APWqJlajwTsCoqidJ%2Fs%2BSGyAM17HtzrJ%2BeerkYbyPKhf4NCnx6LaO4ESlcv34AqUJ7yNUgq4BzPevUIxoRCXGsKik6pQ9rjxHT0Uqq9KZERibShBMKOH29%2FWAqqjrzhTrqyySTh7pOSz8bziKpg405hajFQOIXQ5J5ZkqPoviLzDPKaeJkKM0vxkzaxAW5wWLoUyeT6j20wQEMwWE69LX0IxCDgYoSMpmn2qaB%2BsYJFQLuF7R4Bq000sWzVjHaRAzQub4wbO%2FNOYNEpohQD7FNV%2F7BEGsDygA4VmHUb3bn1oV%2F3Wz2RgT3N%2FmKKCvs03iORgrb3OBORpwvtIk4o8JJ0sX0%2F8ZQfJoZtY3L3B7GS%2BVtC7NwzdSFV7aCQttKI60taKZCTNKHe8thrsPCtF2DL50IWp%2BIlStQgemm65tE%2BD%2Bw9eGM%2B0crYCUq1EWCc3SeMhhBnqQBF5TI9seWGJGzxAgyNayD68w2fq%2FxAY6pgF5eQ1wTN3MdhJkUVZIYPqgFT3lXZ3AsB27f20TsBA%2Foyo6BkHj6ZEMGkoTi4C8Pp7Dfy19IzopHp7THh2D%2BYp6%2B0hXW6568NwkDQjBFdS30VBntOsz%2FjFcBbAZNc8z5cTCmBUdiTI2tOAO8DwyZakMkDuMgNY0128wNA8YMtnDcg0pzIpdMQpeAJ5H3VBTZyIPTHnFjES6O5Vo8%2FAJ5gO45fZbEkzk&X-Amz-Signature=7f3b8f6131faf3ca650bdf54004894f32bc6151cae61c0aabd02f4fa629fa421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JDQMU5U%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGiPjNrite5Y%2BYivW%2FKZjZZ%2BRZw0JiMFJskBdhcxuo%2BJAiBW7usnr83IXLihNMi6%2BCNjmK2%2FGk6R2V30JgrsywrAhir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMHb1yL6NUTpjQOAWlKtwDkIflNwZ07GDz20Dk1G9k%2F%2FrRtfEEPv6CvjrQ1g1T2IL6vdKcQ6oM279vkwzK%2BEIgk8%2FENVnGnOlVOWZ1H1X0K5n%2BrCEf04rGOHOLnyLJKtjOZs%2B5SkM1rHPerU7EM52T%2BC%2FC8b8GDzs8sXsUpZ5QWuSkJl7APWqJlajwTsCoqidJ%2Fs%2BSGyAM17HtzrJ%2BeerkYbyPKhf4NCnx6LaO4ESlcv34AqUJ7yNUgq4BzPevUIxoRCXGsKik6pQ9rjxHT0Uqq9KZERibShBMKOH29%2FWAqqjrzhTrqyySTh7pOSz8bziKpg405hajFQOIXQ5J5ZkqPoviLzDPKaeJkKM0vxkzaxAW5wWLoUyeT6j20wQEMwWE69LX0IxCDgYoSMpmn2qaB%2BsYJFQLuF7R4Bq000sWzVjHaRAzQub4wbO%2FNOYNEpohQD7FNV%2F7BEGsDygA4VmHUb3bn1oV%2F3Wz2RgT3N%2FmKKCvs03iORgrb3OBORpwvtIk4o8JJ0sX0%2F8ZQfJoZtY3L3B7GS%2BVtC7NwzdSFV7aCQttKI60taKZCTNKHe8thrsPCtF2DL50IWp%2BIlStQgemm65tE%2BD%2Bw9eGM%2B0crYCUq1EWCc3SeMhhBnqQBF5TI9seWGJGzxAgyNayD68w2fq%2FxAY6pgF5eQ1wTN3MdhJkUVZIYPqgFT3lXZ3AsB27f20TsBA%2Foyo6BkHj6ZEMGkoTi4C8Pp7Dfy19IzopHp7THh2D%2BYp6%2B0hXW6568NwkDQjBFdS30VBntOsz%2FjFcBbAZNc8z5cTCmBUdiTI2tOAO8DwyZakMkDuMgNY0128wNA8YMtnDcg0pzIpdMQpeAJ5H3VBTZyIPTHnFjES6O5Vo8%2FAJ5gO45fZbEkzk&X-Amz-Signature=63489393ff5d6f5725d9e129debeba0bc05e6f3cb2d73828996e6fde50d614d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOOHXQ34%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHnUYTkw31ccKivveVb81UxvG9%2BVNBWN4%2BIWBhixa4muAiEAwTUoqzPRTjFSBYXmCoaWKqIGMdj91JkPyo8mbmSYYm8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKd4XowDt5wJB8xOQircA0Gh2Wq5JwzUvnYAOVKvpz6bjhiit6YZz1ESBWjdoaOt7Jvu3p7W5z2%2FmylFu1a2ghC%2BhmirP%2BQeDbWyuybEWifkLkluXGKJuHi8zMLOjYIFngAIES0Qemr610QCsqwA9vUdTxs7zH7sE2nSSw6FxBikISM7OEPOWPP9mVLImoHkTKtjirZyt6ZlZL2O2Y7oVPdQvz%2BPjTJZg%2BgpF2Z%2BX3l2jzDq62NRydZOAtHiaL9JLY8%2BCL7tjSGk4S8hpMuYnOMnlc015d4MoK3NwseMJF1x4i9sZZtVjjjtnryJqoZUXz8YjjomwyifdXlP2oq1AAzG4PZqwPAbgrI8kWWffr0i1%2BB7XS5DDkkWsEg86H1rueZbdJKFWxbo0vd5FW6KpfS1fpVq7Mi6j4CtnP9pSrTkCDYD2LhaNzf2H7DI0Ydh7hnpOrcwOuTUogph61MdoYVfKzYXAVf5v%2BJXieI19NFi3P1Aaiys7PWrJpXssA7Ms05kF2eR43TuITYD3NDPXWkxV8mE6gpsq3u7o0KuHdlvyXqalZDHAFN%2BdAqCMHzejtgogZJ0aIRAI9yoXEEFXx3hhQsD1JEn%2BV6FIB4PQqhNxw3v%2BVeNDLk1k5eejSL1Lnzc%2BWs%2FqvmMCPfqMNz8v8QGOqUBW8KCrqSreMlDQYCKHI4FlRVYJumwJ1TFKlD6IL0OxIzzXD3QZ4LBzHzuoNBO3M%2Bc59%2FWOCWewHty%2BBoiui%2BpbgBsG4p5YV03TOxZaQg1f5bfKoXxdVFtwx2n8WCFP1IEdLd5yxGq%2BddOcniusPDR51f2x76AmBHMEsHYeGiGqHZE31ZbDRRhML2IzyPYjl3T78DGl8aRxdjk%2FBKQ85XA9YLDpGWz&X-Amz-Signature=48fc7b5cd7b3cd9e64ab4ffaee14114ecc36609e66f76f3d7b46e14ab1b30a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JDQMU5U%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGiPjNrite5Y%2BYivW%2FKZjZZ%2BRZw0JiMFJskBdhcxuo%2BJAiBW7usnr83IXLihNMi6%2BCNjmK2%2FGk6R2V30JgrsywrAhir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMHb1yL6NUTpjQOAWlKtwDkIflNwZ07GDz20Dk1G9k%2F%2FrRtfEEPv6CvjrQ1g1T2IL6vdKcQ6oM279vkwzK%2BEIgk8%2FENVnGnOlVOWZ1H1X0K5n%2BrCEf04rGOHOLnyLJKtjOZs%2B5SkM1rHPerU7EM52T%2BC%2FC8b8GDzs8sXsUpZ5QWuSkJl7APWqJlajwTsCoqidJ%2Fs%2BSGyAM17HtzrJ%2BeerkYbyPKhf4NCnx6LaO4ESlcv34AqUJ7yNUgq4BzPevUIxoRCXGsKik6pQ9rjxHT0Uqq9KZERibShBMKOH29%2FWAqqjrzhTrqyySTh7pOSz8bziKpg405hajFQOIXQ5J5ZkqPoviLzDPKaeJkKM0vxkzaxAW5wWLoUyeT6j20wQEMwWE69LX0IxCDgYoSMpmn2qaB%2BsYJFQLuF7R4Bq000sWzVjHaRAzQub4wbO%2FNOYNEpohQD7FNV%2F7BEGsDygA4VmHUb3bn1oV%2F3Wz2RgT3N%2FmKKCvs03iORgrb3OBORpwvtIk4o8JJ0sX0%2F8ZQfJoZtY3L3B7GS%2BVtC7NwzdSFV7aCQttKI60taKZCTNKHe8thrsPCtF2DL50IWp%2BIlStQgemm65tE%2BD%2Bw9eGM%2B0crYCUq1EWCc3SeMhhBnqQBF5TI9seWGJGzxAgyNayD68w2fq%2FxAY6pgF5eQ1wTN3MdhJkUVZIYPqgFT3lXZ3AsB27f20TsBA%2Foyo6BkHj6ZEMGkoTi4C8Pp7Dfy19IzopHp7THh2D%2BYp6%2B0hXW6568NwkDQjBFdS30VBntOsz%2FjFcBbAZNc8z5cTCmBUdiTI2tOAO8DwyZakMkDuMgNY0128wNA8YMtnDcg0pzIpdMQpeAJ5H3VBTZyIPTHnFjES6O5Vo8%2FAJ5gO45fZbEkzk&X-Amz-Signature=f3a1a95bacfe09da76451bd4cef4c216b9f209581aa97ac9d3de7936635b00ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JDQMU5U%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGiPjNrite5Y%2BYivW%2FKZjZZ%2BRZw0JiMFJskBdhcxuo%2BJAiBW7usnr83IXLihNMi6%2BCNjmK2%2FGk6R2V30JgrsywrAhir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMHb1yL6NUTpjQOAWlKtwDkIflNwZ07GDz20Dk1G9k%2F%2FrRtfEEPv6CvjrQ1g1T2IL6vdKcQ6oM279vkwzK%2BEIgk8%2FENVnGnOlVOWZ1H1X0K5n%2BrCEf04rGOHOLnyLJKtjOZs%2B5SkM1rHPerU7EM52T%2BC%2FC8b8GDzs8sXsUpZ5QWuSkJl7APWqJlajwTsCoqidJ%2Fs%2BSGyAM17HtzrJ%2BeerkYbyPKhf4NCnx6LaO4ESlcv34AqUJ7yNUgq4BzPevUIxoRCXGsKik6pQ9rjxHT0Uqq9KZERibShBMKOH29%2FWAqqjrzhTrqyySTh7pOSz8bziKpg405hajFQOIXQ5J5ZkqPoviLzDPKaeJkKM0vxkzaxAW5wWLoUyeT6j20wQEMwWE69LX0IxCDgYoSMpmn2qaB%2BsYJFQLuF7R4Bq000sWzVjHaRAzQub4wbO%2FNOYNEpohQD7FNV%2F7BEGsDygA4VmHUb3bn1oV%2F3Wz2RgT3N%2FmKKCvs03iORgrb3OBORpwvtIk4o8JJ0sX0%2F8ZQfJoZtY3L3B7GS%2BVtC7NwzdSFV7aCQttKI60taKZCTNKHe8thrsPCtF2DL50IWp%2BIlStQgemm65tE%2BD%2Bw9eGM%2B0crYCUq1EWCc3SeMhhBnqQBF5TI9seWGJGzxAgyNayD68w2fq%2FxAY6pgF5eQ1wTN3MdhJkUVZIYPqgFT3lXZ3AsB27f20TsBA%2Foyo6BkHj6ZEMGkoTi4C8Pp7Dfy19IzopHp7THh2D%2BYp6%2B0hXW6568NwkDQjBFdS30VBntOsz%2FjFcBbAZNc8z5cTCmBUdiTI2tOAO8DwyZakMkDuMgNY0128wNA8YMtnDcg0pzIpdMQpeAJ5H3VBTZyIPTHnFjES6O5Vo8%2FAJ5gO45fZbEkzk&X-Amz-Signature=7378a8e9b5e8a73a81d412177395103740cf3640eea444cca6b1135e9a851c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JDQMU5U%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGiPjNrite5Y%2BYivW%2FKZjZZ%2BRZw0JiMFJskBdhcxuo%2BJAiBW7usnr83IXLihNMi6%2BCNjmK2%2FGk6R2V30JgrsywrAhir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMHb1yL6NUTpjQOAWlKtwDkIflNwZ07GDz20Dk1G9k%2F%2FrRtfEEPv6CvjrQ1g1T2IL6vdKcQ6oM279vkwzK%2BEIgk8%2FENVnGnOlVOWZ1H1X0K5n%2BrCEf04rGOHOLnyLJKtjOZs%2B5SkM1rHPerU7EM52T%2BC%2FC8b8GDzs8sXsUpZ5QWuSkJl7APWqJlajwTsCoqidJ%2Fs%2BSGyAM17HtzrJ%2BeerkYbyPKhf4NCnx6LaO4ESlcv34AqUJ7yNUgq4BzPevUIxoRCXGsKik6pQ9rjxHT0Uqq9KZERibShBMKOH29%2FWAqqjrzhTrqyySTh7pOSz8bziKpg405hajFQOIXQ5J5ZkqPoviLzDPKaeJkKM0vxkzaxAW5wWLoUyeT6j20wQEMwWE69LX0IxCDgYoSMpmn2qaB%2BsYJFQLuF7R4Bq000sWzVjHaRAzQub4wbO%2FNOYNEpohQD7FNV%2F7BEGsDygA4VmHUb3bn1oV%2F3Wz2RgT3N%2FmKKCvs03iORgrb3OBORpwvtIk4o8JJ0sX0%2F8ZQfJoZtY3L3B7GS%2BVtC7NwzdSFV7aCQttKI60taKZCTNKHe8thrsPCtF2DL50IWp%2BIlStQgemm65tE%2BD%2Bw9eGM%2B0crYCUq1EWCc3SeMhhBnqQBF5TI9seWGJGzxAgyNayD68w2fq%2FxAY6pgF5eQ1wTN3MdhJkUVZIYPqgFT3lXZ3AsB27f20TsBA%2Foyo6BkHj6ZEMGkoTi4C8Pp7Dfy19IzopHp7THh2D%2BYp6%2B0hXW6568NwkDQjBFdS30VBntOsz%2FjFcBbAZNc8z5cTCmBUdiTI2tOAO8DwyZakMkDuMgNY0128wNA8YMtnDcg0pzIpdMQpeAJ5H3VBTZyIPTHnFjES6O5Vo8%2FAJ5gO45fZbEkzk&X-Amz-Signature=c1da77e0f09ee6d1808ca59e2b4b7fc8a09a797df5def7a34cf726fd2992623a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JDQMU5U%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGiPjNrite5Y%2BYivW%2FKZjZZ%2BRZw0JiMFJskBdhcxuo%2BJAiBW7usnr83IXLihNMi6%2BCNjmK2%2FGk6R2V30JgrsywrAhir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMHb1yL6NUTpjQOAWlKtwDkIflNwZ07GDz20Dk1G9k%2F%2FrRtfEEPv6CvjrQ1g1T2IL6vdKcQ6oM279vkwzK%2BEIgk8%2FENVnGnOlVOWZ1H1X0K5n%2BrCEf04rGOHOLnyLJKtjOZs%2B5SkM1rHPerU7EM52T%2BC%2FC8b8GDzs8sXsUpZ5QWuSkJl7APWqJlajwTsCoqidJ%2Fs%2BSGyAM17HtzrJ%2BeerkYbyPKhf4NCnx6LaO4ESlcv34AqUJ7yNUgq4BzPevUIxoRCXGsKik6pQ9rjxHT0Uqq9KZERibShBMKOH29%2FWAqqjrzhTrqyySTh7pOSz8bziKpg405hajFQOIXQ5J5ZkqPoviLzDPKaeJkKM0vxkzaxAW5wWLoUyeT6j20wQEMwWE69LX0IxCDgYoSMpmn2qaB%2BsYJFQLuF7R4Bq000sWzVjHaRAzQub4wbO%2FNOYNEpohQD7FNV%2F7BEGsDygA4VmHUb3bn1oV%2F3Wz2RgT3N%2FmKKCvs03iORgrb3OBORpwvtIk4o8JJ0sX0%2F8ZQfJoZtY3L3B7GS%2BVtC7NwzdSFV7aCQttKI60taKZCTNKHe8thrsPCtF2DL50IWp%2BIlStQgemm65tE%2BD%2Bw9eGM%2B0crYCUq1EWCc3SeMhhBnqQBF5TI9seWGJGzxAgyNayD68w2fq%2FxAY6pgF5eQ1wTN3MdhJkUVZIYPqgFT3lXZ3AsB27f20TsBA%2Foyo6BkHj6ZEMGkoTi4C8Pp7Dfy19IzopHp7THh2D%2BYp6%2B0hXW6568NwkDQjBFdS30VBntOsz%2FjFcBbAZNc8z5cTCmBUdiTI2tOAO8DwyZakMkDuMgNY0128wNA8YMtnDcg0pzIpdMQpeAJ5H3VBTZyIPTHnFjES6O5Vo8%2FAJ5gO45fZbEkzk&X-Amz-Signature=4044b45daeacf666d9a16c0f0ed4825311071d9d70d56a3515581786db7f96b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JDQMU5U%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGiPjNrite5Y%2BYivW%2FKZjZZ%2BRZw0JiMFJskBdhcxuo%2BJAiBW7usnr83IXLihNMi6%2BCNjmK2%2FGk6R2V30JgrsywrAhir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMHb1yL6NUTpjQOAWlKtwDkIflNwZ07GDz20Dk1G9k%2F%2FrRtfEEPv6CvjrQ1g1T2IL6vdKcQ6oM279vkwzK%2BEIgk8%2FENVnGnOlVOWZ1H1X0K5n%2BrCEf04rGOHOLnyLJKtjOZs%2B5SkM1rHPerU7EM52T%2BC%2FC8b8GDzs8sXsUpZ5QWuSkJl7APWqJlajwTsCoqidJ%2Fs%2BSGyAM17HtzrJ%2BeerkYbyPKhf4NCnx6LaO4ESlcv34AqUJ7yNUgq4BzPevUIxoRCXGsKik6pQ9rjxHT0Uqq9KZERibShBMKOH29%2FWAqqjrzhTrqyySTh7pOSz8bziKpg405hajFQOIXQ5J5ZkqPoviLzDPKaeJkKM0vxkzaxAW5wWLoUyeT6j20wQEMwWE69LX0IxCDgYoSMpmn2qaB%2BsYJFQLuF7R4Bq000sWzVjHaRAzQub4wbO%2FNOYNEpohQD7FNV%2F7BEGsDygA4VmHUb3bn1oV%2F3Wz2RgT3N%2FmKKCvs03iORgrb3OBORpwvtIk4o8JJ0sX0%2F8ZQfJoZtY3L3B7GS%2BVtC7NwzdSFV7aCQttKI60taKZCTNKHe8thrsPCtF2DL50IWp%2BIlStQgemm65tE%2BD%2Bw9eGM%2B0crYCUq1EWCc3SeMhhBnqQBF5TI9seWGJGzxAgyNayD68w2fq%2FxAY6pgF5eQ1wTN3MdhJkUVZIYPqgFT3lXZ3AsB27f20TsBA%2Foyo6BkHj6ZEMGkoTi4C8Pp7Dfy19IzopHp7THh2D%2BYp6%2B0hXW6568NwkDQjBFdS30VBntOsz%2FjFcBbAZNc8z5cTCmBUdiTI2tOAO8DwyZakMkDuMgNY0128wNA8YMtnDcg0pzIpdMQpeAJ5H3VBTZyIPTHnFjES6O5Vo8%2FAJ5gO45fZbEkzk&X-Amz-Signature=1774825ef63e9a5e6444a81282ea2ae89b73ebf2eec108beccda8b44aa135388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JDQMU5U%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGiPjNrite5Y%2BYivW%2FKZjZZ%2BRZw0JiMFJskBdhcxuo%2BJAiBW7usnr83IXLihNMi6%2BCNjmK2%2FGk6R2V30JgrsywrAhir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMHb1yL6NUTpjQOAWlKtwDkIflNwZ07GDz20Dk1G9k%2F%2FrRtfEEPv6CvjrQ1g1T2IL6vdKcQ6oM279vkwzK%2BEIgk8%2FENVnGnOlVOWZ1H1X0K5n%2BrCEf04rGOHOLnyLJKtjOZs%2B5SkM1rHPerU7EM52T%2BC%2FC8b8GDzs8sXsUpZ5QWuSkJl7APWqJlajwTsCoqidJ%2Fs%2BSGyAM17HtzrJ%2BeerkYbyPKhf4NCnx6LaO4ESlcv34AqUJ7yNUgq4BzPevUIxoRCXGsKik6pQ9rjxHT0Uqq9KZERibShBMKOH29%2FWAqqjrzhTrqyySTh7pOSz8bziKpg405hajFQOIXQ5J5ZkqPoviLzDPKaeJkKM0vxkzaxAW5wWLoUyeT6j20wQEMwWE69LX0IxCDgYoSMpmn2qaB%2BsYJFQLuF7R4Bq000sWzVjHaRAzQub4wbO%2FNOYNEpohQD7FNV%2F7BEGsDygA4VmHUb3bn1oV%2F3Wz2RgT3N%2FmKKCvs03iORgrb3OBORpwvtIk4o8JJ0sX0%2F8ZQfJoZtY3L3B7GS%2BVtC7NwzdSFV7aCQttKI60taKZCTNKHe8thrsPCtF2DL50IWp%2BIlStQgemm65tE%2BD%2Bw9eGM%2B0crYCUq1EWCc3SeMhhBnqQBF5TI9seWGJGzxAgyNayD68w2fq%2FxAY6pgF5eQ1wTN3MdhJkUVZIYPqgFT3lXZ3AsB27f20TsBA%2Foyo6BkHj6ZEMGkoTi4C8Pp7Dfy19IzopHp7THh2D%2BYp6%2B0hXW6568NwkDQjBFdS30VBntOsz%2FjFcBbAZNc8z5cTCmBUdiTI2tOAO8DwyZakMkDuMgNY0128wNA8YMtnDcg0pzIpdMQpeAJ5H3VBTZyIPTHnFjES6O5Vo8%2FAJ5gO45fZbEkzk&X-Amz-Signature=c8b961a718452c13df276b779810f45fbf39af83acd8c90d62b1417bb0004cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
