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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYBL6SO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgpfWDOOyAUu0ihPmFcpN6qUlMZwvIGgVxml19%2BVTk%2BgIhAJ%2BxOMrT3JnPVnXQUaf2mo0Vc5X8IX5f6Hwk8%2FcM8ByLKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrAcwDiWSxSJkKipEq3AMyYW1bdtOWIqliP2LTpUw0c1t%2BTA%2FVTI6wGC15QxyLHwOVGa53NAjCEo8YchrZfaSc17H%2Bz5v1T0JnOfdPz0EF2u7dB5LMJgmNI2aRpiggBTziMdaNNoG7UNRYZkkb7%2BG3emJunNeJHu1D%2B5HdPUzLRT2Nk4ccpkLnZuMHmu5p49AiOEsFyQnAFe%2BGBk%2B4gY2Q0Ac4VRhrZ7%2FTWlr6PotVuKJu7SFZW7HQ8nuI%2BCukcnjAG0tdO3qnsDM0sq7gjkteRGCxOfLmYrQNu2MI27uRxnhknk59AlGEgh8onWHJ8Wob2jgRMBuQmJeQAkMtsdov6MeT6JP1Y2En%2FvcUaDgZdcewqjBE3z%2B1ZU8mPGbpjpD54KuTqfmzqxQTrLGDkhIUR4z2Fudk%2FAFX59Wxq0%2BtiaUNZJL9pwAgC1p%2Bg3QESU25hZzT0SIEbsgAQwblUftaB3S5cZSbH3fdzRAlJ0%2Fp24HxX%2FypbroWI7Bn3x%2F8%2BkY9RHRC%2BWewFW7FxUgGSbXub3m4xnKTjNp16wMtcvljvE%2Bjsea3UoQd91LPgIdhilDxlXwJtnadK9b9aE%2Fdrv65AYPYjBvXJj0cG8sjbP%2BcBuJNu9rzlu7IznSc%2BSSjLavsIx56ihL7K9fgEjDuuuPEBjqkAbk88HIgXXcwdxaNNe%2BrB4rfB9gS2XnxcnQPI4ayIFA3b%2Bi4eLdnGLZDSPoyhMpcsBma6y3Fi2TYzJSIECNgA2F1%2FT8R3YWsJ7dcTJZTW9nDdaSwCZ5kAnTGQSQiETXErJ%2FEd806JA%2FL21di3a7F0e%2FZ1zx%2BL%2FOaPQXbHUaPTu4qGGcBqKRwenu7nO%2B%2FLULgKdyJOWfkJdIdsKGd02IhpopmWS%2Bp&X-Amz-Signature=7ac32458ca90be0234f9e9a793f921df96e19024323730e6c865381aa56391f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYBL6SO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgpfWDOOyAUu0ihPmFcpN6qUlMZwvIGgVxml19%2BVTk%2BgIhAJ%2BxOMrT3JnPVnXQUaf2mo0Vc5X8IX5f6Hwk8%2FcM8ByLKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrAcwDiWSxSJkKipEq3AMyYW1bdtOWIqliP2LTpUw0c1t%2BTA%2FVTI6wGC15QxyLHwOVGa53NAjCEo8YchrZfaSc17H%2Bz5v1T0JnOfdPz0EF2u7dB5LMJgmNI2aRpiggBTziMdaNNoG7UNRYZkkb7%2BG3emJunNeJHu1D%2B5HdPUzLRT2Nk4ccpkLnZuMHmu5p49AiOEsFyQnAFe%2BGBk%2B4gY2Q0Ac4VRhrZ7%2FTWlr6PotVuKJu7SFZW7HQ8nuI%2BCukcnjAG0tdO3qnsDM0sq7gjkteRGCxOfLmYrQNu2MI27uRxnhknk59AlGEgh8onWHJ8Wob2jgRMBuQmJeQAkMtsdov6MeT6JP1Y2En%2FvcUaDgZdcewqjBE3z%2B1ZU8mPGbpjpD54KuTqfmzqxQTrLGDkhIUR4z2Fudk%2FAFX59Wxq0%2BtiaUNZJL9pwAgC1p%2Bg3QESU25hZzT0SIEbsgAQwblUftaB3S5cZSbH3fdzRAlJ0%2Fp24HxX%2FypbroWI7Bn3x%2F8%2BkY9RHRC%2BWewFW7FxUgGSbXub3m4xnKTjNp16wMtcvljvE%2Bjsea3UoQd91LPgIdhilDxlXwJtnadK9b9aE%2Fdrv65AYPYjBvXJj0cG8sjbP%2BcBuJNu9rzlu7IznSc%2BSSjLavsIx56ihL7K9fgEjDuuuPEBjqkAbk88HIgXXcwdxaNNe%2BrB4rfB9gS2XnxcnQPI4ayIFA3b%2Bi4eLdnGLZDSPoyhMpcsBma6y3Fi2TYzJSIECNgA2F1%2FT8R3YWsJ7dcTJZTW9nDdaSwCZ5kAnTGQSQiETXErJ%2FEd806JA%2FL21di3a7F0e%2FZ1zx%2BL%2FOaPQXbHUaPTu4qGGcBqKRwenu7nO%2B%2FLULgKdyJOWfkJdIdsKGd02IhpopmWS%2Bp&X-Amz-Signature=f6bfe1d63445cc09722fc05d998b6d0312459ac3db5ab2ec7b196e48ba07d1a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYBL6SO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgpfWDOOyAUu0ihPmFcpN6qUlMZwvIGgVxml19%2BVTk%2BgIhAJ%2BxOMrT3JnPVnXQUaf2mo0Vc5X8IX5f6Hwk8%2FcM8ByLKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrAcwDiWSxSJkKipEq3AMyYW1bdtOWIqliP2LTpUw0c1t%2BTA%2FVTI6wGC15QxyLHwOVGa53NAjCEo8YchrZfaSc17H%2Bz5v1T0JnOfdPz0EF2u7dB5LMJgmNI2aRpiggBTziMdaNNoG7UNRYZkkb7%2BG3emJunNeJHu1D%2B5HdPUzLRT2Nk4ccpkLnZuMHmu5p49AiOEsFyQnAFe%2BGBk%2B4gY2Q0Ac4VRhrZ7%2FTWlr6PotVuKJu7SFZW7HQ8nuI%2BCukcnjAG0tdO3qnsDM0sq7gjkteRGCxOfLmYrQNu2MI27uRxnhknk59AlGEgh8onWHJ8Wob2jgRMBuQmJeQAkMtsdov6MeT6JP1Y2En%2FvcUaDgZdcewqjBE3z%2B1ZU8mPGbpjpD54KuTqfmzqxQTrLGDkhIUR4z2Fudk%2FAFX59Wxq0%2BtiaUNZJL9pwAgC1p%2Bg3QESU25hZzT0SIEbsgAQwblUftaB3S5cZSbH3fdzRAlJ0%2Fp24HxX%2FypbroWI7Bn3x%2F8%2BkY9RHRC%2BWewFW7FxUgGSbXub3m4xnKTjNp16wMtcvljvE%2Bjsea3UoQd91LPgIdhilDxlXwJtnadK9b9aE%2Fdrv65AYPYjBvXJj0cG8sjbP%2BcBuJNu9rzlu7IznSc%2BSSjLavsIx56ihL7K9fgEjDuuuPEBjqkAbk88HIgXXcwdxaNNe%2BrB4rfB9gS2XnxcnQPI4ayIFA3b%2Bi4eLdnGLZDSPoyhMpcsBma6y3Fi2TYzJSIECNgA2F1%2FT8R3YWsJ7dcTJZTW9nDdaSwCZ5kAnTGQSQiETXErJ%2FEd806JA%2FL21di3a7F0e%2FZ1zx%2BL%2FOaPQXbHUaPTu4qGGcBqKRwenu7nO%2B%2FLULgKdyJOWfkJdIdsKGd02IhpopmWS%2Bp&X-Amz-Signature=1403c578a834030c182bb0190d96d9e8206d5e3b5754f27944b3591553f3a8f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYBL6SO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgpfWDOOyAUu0ihPmFcpN6qUlMZwvIGgVxml19%2BVTk%2BgIhAJ%2BxOMrT3JnPVnXQUaf2mo0Vc5X8IX5f6Hwk8%2FcM8ByLKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrAcwDiWSxSJkKipEq3AMyYW1bdtOWIqliP2LTpUw0c1t%2BTA%2FVTI6wGC15QxyLHwOVGa53NAjCEo8YchrZfaSc17H%2Bz5v1T0JnOfdPz0EF2u7dB5LMJgmNI2aRpiggBTziMdaNNoG7UNRYZkkb7%2BG3emJunNeJHu1D%2B5HdPUzLRT2Nk4ccpkLnZuMHmu5p49AiOEsFyQnAFe%2BGBk%2B4gY2Q0Ac4VRhrZ7%2FTWlr6PotVuKJu7SFZW7HQ8nuI%2BCukcnjAG0tdO3qnsDM0sq7gjkteRGCxOfLmYrQNu2MI27uRxnhknk59AlGEgh8onWHJ8Wob2jgRMBuQmJeQAkMtsdov6MeT6JP1Y2En%2FvcUaDgZdcewqjBE3z%2B1ZU8mPGbpjpD54KuTqfmzqxQTrLGDkhIUR4z2Fudk%2FAFX59Wxq0%2BtiaUNZJL9pwAgC1p%2Bg3QESU25hZzT0SIEbsgAQwblUftaB3S5cZSbH3fdzRAlJ0%2Fp24HxX%2FypbroWI7Bn3x%2F8%2BkY9RHRC%2BWewFW7FxUgGSbXub3m4xnKTjNp16wMtcvljvE%2Bjsea3UoQd91LPgIdhilDxlXwJtnadK9b9aE%2Fdrv65AYPYjBvXJj0cG8sjbP%2BcBuJNu9rzlu7IznSc%2BSSjLavsIx56ihL7K9fgEjDuuuPEBjqkAbk88HIgXXcwdxaNNe%2BrB4rfB9gS2XnxcnQPI4ayIFA3b%2Bi4eLdnGLZDSPoyhMpcsBma6y3Fi2TYzJSIECNgA2F1%2FT8R3YWsJ7dcTJZTW9nDdaSwCZ5kAnTGQSQiETXErJ%2FEd806JA%2FL21di3a7F0e%2FZ1zx%2BL%2FOaPQXbHUaPTu4qGGcBqKRwenu7nO%2B%2FLULgKdyJOWfkJdIdsKGd02IhpopmWS%2Bp&X-Amz-Signature=7934f375ad81b61b329fd730072a9bed1cde18854c10f60e2fcb636f752d9b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MPK3UX5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErrhRy9xWsF0Af5m4gAfA2xQt8FHWTVNazpDSTAwucYAiEAsQRH7NO7zLVqVAmxO39h3mDqU3BvqJyMb83pP1wbgRcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkNMCYheYVFmhangCrcAz7DORC%2FsAOyKDhouJJoWfKSsfbkY7mfjqgE20qlhbUTUt%2F0DPl8uz0z3u%2BqTUMYi2GmlQSp4A0Qvtm7DjsRM2BnPXfEGOLoRCWw%2BGBMW%2BLxKgpWOb5MOd%2F5Wx6CogmyEqG29bVu3ghDla2HrjAkAnk8Y9Jwzd56Zq96X%2FZhAam3yUgyxSPuzgfFKfR9XRfQfMLzkGNwjoekhaNAzPt3N%2BOz8F0hUOsoOV%2BQi%2BFVWnP4N33znKna%2BfcDymJDLgFtp2g2XW3C7LJ9o5Nix%2Bfv3GwFmFG6jW24est4Kwv7xYEarqFfzJTQ1eCEvtmk5w3MnMdAEfZLXRYkGjYyrW2mWzOiVbyfQ7GPd67jB3XrEzvWTonkm6QUmdkv9lLsQj7GizrtU5WBLGkOa8lWi7P9KCuVYXlKTstRLUUFy83R28X7rbcTHqFbxk2YMpXPVfoZi5BU1zU4LbsjBRbv5S5161qZzODLHw4e6ByCbdptMC6JKbd8p%2FRwPt4P7I%2FieKysI%2B%2Fte9Zizf7Xht8WoWRrkEL2MwCzSaoWmRc2Dm8N6hKfvMOLu1ASE2RwQwPhOD%2FKo4ilZtxPJ98b3WoqdS2bLe23AjrZB3YsgcJ165l6qqw3rR8PTb6MsxmaiULxMI2748QGOqUBvxV%2Fq%2F%2FB3BY%2BlsdcKnQzy48uPqSsTtC72p3TA93D5Sx066Q2aGRGQrA1vSQ6GDZaeilDSmsxklmo4LGVIsELsaqw1QhywWCtrNweXAtr6BNTs0a9x%2FjARWHCR2bMw9UufLzDX4ssZRqIe1LCK4mhxHO3bdCdjKZ5A5v%2Flvv5NF1nuI6JyiIwzj8Ro6KYC5D8O7lhqDZCzaBuD2IM5uuPtnwzJofj&X-Amz-Signature=8cda94a5a84bbfb4a36fef1b19ebcf351ce0046848d7bb969c047e21625ad8f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYBL6SO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgpfWDOOyAUu0ihPmFcpN6qUlMZwvIGgVxml19%2BVTk%2BgIhAJ%2BxOMrT3JnPVnXQUaf2mo0Vc5X8IX5f6Hwk8%2FcM8ByLKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrAcwDiWSxSJkKipEq3AMyYW1bdtOWIqliP2LTpUw0c1t%2BTA%2FVTI6wGC15QxyLHwOVGa53NAjCEo8YchrZfaSc17H%2Bz5v1T0JnOfdPz0EF2u7dB5LMJgmNI2aRpiggBTziMdaNNoG7UNRYZkkb7%2BG3emJunNeJHu1D%2B5HdPUzLRT2Nk4ccpkLnZuMHmu5p49AiOEsFyQnAFe%2BGBk%2B4gY2Q0Ac4VRhrZ7%2FTWlr6PotVuKJu7SFZW7HQ8nuI%2BCukcnjAG0tdO3qnsDM0sq7gjkteRGCxOfLmYrQNu2MI27uRxnhknk59AlGEgh8onWHJ8Wob2jgRMBuQmJeQAkMtsdov6MeT6JP1Y2En%2FvcUaDgZdcewqjBE3z%2B1ZU8mPGbpjpD54KuTqfmzqxQTrLGDkhIUR4z2Fudk%2FAFX59Wxq0%2BtiaUNZJL9pwAgC1p%2Bg3QESU25hZzT0SIEbsgAQwblUftaB3S5cZSbH3fdzRAlJ0%2Fp24HxX%2FypbroWI7Bn3x%2F8%2BkY9RHRC%2BWewFW7FxUgGSbXub3m4xnKTjNp16wMtcvljvE%2Bjsea3UoQd91LPgIdhilDxlXwJtnadK9b9aE%2Fdrv65AYPYjBvXJj0cG8sjbP%2BcBuJNu9rzlu7IznSc%2BSSjLavsIx56ihL7K9fgEjDuuuPEBjqkAbk88HIgXXcwdxaNNe%2BrB4rfB9gS2XnxcnQPI4ayIFA3b%2Bi4eLdnGLZDSPoyhMpcsBma6y3Fi2TYzJSIECNgA2F1%2FT8R3YWsJ7dcTJZTW9nDdaSwCZ5kAnTGQSQiETXErJ%2FEd806JA%2FL21di3a7F0e%2FZ1zx%2BL%2FOaPQXbHUaPTu4qGGcBqKRwenu7nO%2B%2FLULgKdyJOWfkJdIdsKGd02IhpopmWS%2Bp&X-Amz-Signature=8c4a5a2ac8e1d5f22f61c24d3745bfc6ea1371ef0bff9bbc5c53722565963bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYBL6SO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgpfWDOOyAUu0ihPmFcpN6qUlMZwvIGgVxml19%2BVTk%2BgIhAJ%2BxOMrT3JnPVnXQUaf2mo0Vc5X8IX5f6Hwk8%2FcM8ByLKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrAcwDiWSxSJkKipEq3AMyYW1bdtOWIqliP2LTpUw0c1t%2BTA%2FVTI6wGC15QxyLHwOVGa53NAjCEo8YchrZfaSc17H%2Bz5v1T0JnOfdPz0EF2u7dB5LMJgmNI2aRpiggBTziMdaNNoG7UNRYZkkb7%2BG3emJunNeJHu1D%2B5HdPUzLRT2Nk4ccpkLnZuMHmu5p49AiOEsFyQnAFe%2BGBk%2B4gY2Q0Ac4VRhrZ7%2FTWlr6PotVuKJu7SFZW7HQ8nuI%2BCukcnjAG0tdO3qnsDM0sq7gjkteRGCxOfLmYrQNu2MI27uRxnhknk59AlGEgh8onWHJ8Wob2jgRMBuQmJeQAkMtsdov6MeT6JP1Y2En%2FvcUaDgZdcewqjBE3z%2B1ZU8mPGbpjpD54KuTqfmzqxQTrLGDkhIUR4z2Fudk%2FAFX59Wxq0%2BtiaUNZJL9pwAgC1p%2Bg3QESU25hZzT0SIEbsgAQwblUftaB3S5cZSbH3fdzRAlJ0%2Fp24HxX%2FypbroWI7Bn3x%2F8%2BkY9RHRC%2BWewFW7FxUgGSbXub3m4xnKTjNp16wMtcvljvE%2Bjsea3UoQd91LPgIdhilDxlXwJtnadK9b9aE%2Fdrv65AYPYjBvXJj0cG8sjbP%2BcBuJNu9rzlu7IznSc%2BSSjLavsIx56ihL7K9fgEjDuuuPEBjqkAbk88HIgXXcwdxaNNe%2BrB4rfB9gS2XnxcnQPI4ayIFA3b%2Bi4eLdnGLZDSPoyhMpcsBma6y3Fi2TYzJSIECNgA2F1%2FT8R3YWsJ7dcTJZTW9nDdaSwCZ5kAnTGQSQiETXErJ%2FEd806JA%2FL21di3a7F0e%2FZ1zx%2BL%2FOaPQXbHUaPTu4qGGcBqKRwenu7nO%2B%2FLULgKdyJOWfkJdIdsKGd02IhpopmWS%2Bp&X-Amz-Signature=84f7f2383f2cf9a83dbc3c5f94d34363894d5ae1fa3a838926f8a6a2f2ee4b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYBL6SO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgpfWDOOyAUu0ihPmFcpN6qUlMZwvIGgVxml19%2BVTk%2BgIhAJ%2BxOMrT3JnPVnXQUaf2mo0Vc5X8IX5f6Hwk8%2FcM8ByLKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrAcwDiWSxSJkKipEq3AMyYW1bdtOWIqliP2LTpUw0c1t%2BTA%2FVTI6wGC15QxyLHwOVGa53NAjCEo8YchrZfaSc17H%2Bz5v1T0JnOfdPz0EF2u7dB5LMJgmNI2aRpiggBTziMdaNNoG7UNRYZkkb7%2BG3emJunNeJHu1D%2B5HdPUzLRT2Nk4ccpkLnZuMHmu5p49AiOEsFyQnAFe%2BGBk%2B4gY2Q0Ac4VRhrZ7%2FTWlr6PotVuKJu7SFZW7HQ8nuI%2BCukcnjAG0tdO3qnsDM0sq7gjkteRGCxOfLmYrQNu2MI27uRxnhknk59AlGEgh8onWHJ8Wob2jgRMBuQmJeQAkMtsdov6MeT6JP1Y2En%2FvcUaDgZdcewqjBE3z%2B1ZU8mPGbpjpD54KuTqfmzqxQTrLGDkhIUR4z2Fudk%2FAFX59Wxq0%2BtiaUNZJL9pwAgC1p%2Bg3QESU25hZzT0SIEbsgAQwblUftaB3S5cZSbH3fdzRAlJ0%2Fp24HxX%2FypbroWI7Bn3x%2F8%2BkY9RHRC%2BWewFW7FxUgGSbXub3m4xnKTjNp16wMtcvljvE%2Bjsea3UoQd91LPgIdhilDxlXwJtnadK9b9aE%2Fdrv65AYPYjBvXJj0cG8sjbP%2BcBuJNu9rzlu7IznSc%2BSSjLavsIx56ihL7K9fgEjDuuuPEBjqkAbk88HIgXXcwdxaNNe%2BrB4rfB9gS2XnxcnQPI4ayIFA3b%2Bi4eLdnGLZDSPoyhMpcsBma6y3Fi2TYzJSIECNgA2F1%2FT8R3YWsJ7dcTJZTW9nDdaSwCZ5kAnTGQSQiETXErJ%2FEd806JA%2FL21di3a7F0e%2FZ1zx%2BL%2FOaPQXbHUaPTu4qGGcBqKRwenu7nO%2B%2FLULgKdyJOWfkJdIdsKGd02IhpopmWS%2Bp&X-Amz-Signature=aa2e7da6ff68798e9ff61f1aee826d043b90fa7cbb907d29528330e5c55e9299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYBL6SO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgpfWDOOyAUu0ihPmFcpN6qUlMZwvIGgVxml19%2BVTk%2BgIhAJ%2BxOMrT3JnPVnXQUaf2mo0Vc5X8IX5f6Hwk8%2FcM8ByLKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrAcwDiWSxSJkKipEq3AMyYW1bdtOWIqliP2LTpUw0c1t%2BTA%2FVTI6wGC15QxyLHwOVGa53NAjCEo8YchrZfaSc17H%2Bz5v1T0JnOfdPz0EF2u7dB5LMJgmNI2aRpiggBTziMdaNNoG7UNRYZkkb7%2BG3emJunNeJHu1D%2B5HdPUzLRT2Nk4ccpkLnZuMHmu5p49AiOEsFyQnAFe%2BGBk%2B4gY2Q0Ac4VRhrZ7%2FTWlr6PotVuKJu7SFZW7HQ8nuI%2BCukcnjAG0tdO3qnsDM0sq7gjkteRGCxOfLmYrQNu2MI27uRxnhknk59AlGEgh8onWHJ8Wob2jgRMBuQmJeQAkMtsdov6MeT6JP1Y2En%2FvcUaDgZdcewqjBE3z%2B1ZU8mPGbpjpD54KuTqfmzqxQTrLGDkhIUR4z2Fudk%2FAFX59Wxq0%2BtiaUNZJL9pwAgC1p%2Bg3QESU25hZzT0SIEbsgAQwblUftaB3S5cZSbH3fdzRAlJ0%2Fp24HxX%2FypbroWI7Bn3x%2F8%2BkY9RHRC%2BWewFW7FxUgGSbXub3m4xnKTjNp16wMtcvljvE%2Bjsea3UoQd91LPgIdhilDxlXwJtnadK9b9aE%2Fdrv65AYPYjBvXJj0cG8sjbP%2BcBuJNu9rzlu7IznSc%2BSSjLavsIx56ihL7K9fgEjDuuuPEBjqkAbk88HIgXXcwdxaNNe%2BrB4rfB9gS2XnxcnQPI4ayIFA3b%2Bi4eLdnGLZDSPoyhMpcsBma6y3Fi2TYzJSIECNgA2F1%2FT8R3YWsJ7dcTJZTW9nDdaSwCZ5kAnTGQSQiETXErJ%2FEd806JA%2FL21di3a7F0e%2FZ1zx%2BL%2FOaPQXbHUaPTu4qGGcBqKRwenu7nO%2B%2FLULgKdyJOWfkJdIdsKGd02IhpopmWS%2Bp&X-Amz-Signature=35b0fe0aae58c66da6758258f64a0e4110150d73c6e4a04d4da164cff69ed52e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYBL6SO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgpfWDOOyAUu0ihPmFcpN6qUlMZwvIGgVxml19%2BVTk%2BgIhAJ%2BxOMrT3JnPVnXQUaf2mo0Vc5X8IX5f6Hwk8%2FcM8ByLKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrAcwDiWSxSJkKipEq3AMyYW1bdtOWIqliP2LTpUw0c1t%2BTA%2FVTI6wGC15QxyLHwOVGa53NAjCEo8YchrZfaSc17H%2Bz5v1T0JnOfdPz0EF2u7dB5LMJgmNI2aRpiggBTziMdaNNoG7UNRYZkkb7%2BG3emJunNeJHu1D%2B5HdPUzLRT2Nk4ccpkLnZuMHmu5p49AiOEsFyQnAFe%2BGBk%2B4gY2Q0Ac4VRhrZ7%2FTWlr6PotVuKJu7SFZW7HQ8nuI%2BCukcnjAG0tdO3qnsDM0sq7gjkteRGCxOfLmYrQNu2MI27uRxnhknk59AlGEgh8onWHJ8Wob2jgRMBuQmJeQAkMtsdov6MeT6JP1Y2En%2FvcUaDgZdcewqjBE3z%2B1ZU8mPGbpjpD54KuTqfmzqxQTrLGDkhIUR4z2Fudk%2FAFX59Wxq0%2BtiaUNZJL9pwAgC1p%2Bg3QESU25hZzT0SIEbsgAQwblUftaB3S5cZSbH3fdzRAlJ0%2Fp24HxX%2FypbroWI7Bn3x%2F8%2BkY9RHRC%2BWewFW7FxUgGSbXub3m4xnKTjNp16wMtcvljvE%2Bjsea3UoQd91LPgIdhilDxlXwJtnadK9b9aE%2Fdrv65AYPYjBvXJj0cG8sjbP%2BcBuJNu9rzlu7IznSc%2BSSjLavsIx56ihL7K9fgEjDuuuPEBjqkAbk88HIgXXcwdxaNNe%2BrB4rfB9gS2XnxcnQPI4ayIFA3b%2Bi4eLdnGLZDSPoyhMpcsBma6y3Fi2TYzJSIECNgA2F1%2FT8R3YWsJ7dcTJZTW9nDdaSwCZ5kAnTGQSQiETXErJ%2FEd806JA%2FL21di3a7F0e%2FZ1zx%2BL%2FOaPQXbHUaPTu4qGGcBqKRwenu7nO%2B%2FLULgKdyJOWfkJdIdsKGd02IhpopmWS%2Bp&X-Amz-Signature=af1c7e772bcc3259ac2343dadd1c04d0bd53c4f665e92315299e98a7c44598ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYBL6SO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgpfWDOOyAUu0ihPmFcpN6qUlMZwvIGgVxml19%2BVTk%2BgIhAJ%2BxOMrT3JnPVnXQUaf2mo0Vc5X8IX5f6Hwk8%2FcM8ByLKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrAcwDiWSxSJkKipEq3AMyYW1bdtOWIqliP2LTpUw0c1t%2BTA%2FVTI6wGC15QxyLHwOVGa53NAjCEo8YchrZfaSc17H%2Bz5v1T0JnOfdPz0EF2u7dB5LMJgmNI2aRpiggBTziMdaNNoG7UNRYZkkb7%2BG3emJunNeJHu1D%2B5HdPUzLRT2Nk4ccpkLnZuMHmu5p49AiOEsFyQnAFe%2BGBk%2B4gY2Q0Ac4VRhrZ7%2FTWlr6PotVuKJu7SFZW7HQ8nuI%2BCukcnjAG0tdO3qnsDM0sq7gjkteRGCxOfLmYrQNu2MI27uRxnhknk59AlGEgh8onWHJ8Wob2jgRMBuQmJeQAkMtsdov6MeT6JP1Y2En%2FvcUaDgZdcewqjBE3z%2B1ZU8mPGbpjpD54KuTqfmzqxQTrLGDkhIUR4z2Fudk%2FAFX59Wxq0%2BtiaUNZJL9pwAgC1p%2Bg3QESU25hZzT0SIEbsgAQwblUftaB3S5cZSbH3fdzRAlJ0%2Fp24HxX%2FypbroWI7Bn3x%2F8%2BkY9RHRC%2BWewFW7FxUgGSbXub3m4xnKTjNp16wMtcvljvE%2Bjsea3UoQd91LPgIdhilDxlXwJtnadK9b9aE%2Fdrv65AYPYjBvXJj0cG8sjbP%2BcBuJNu9rzlu7IznSc%2BSSjLavsIx56ihL7K9fgEjDuuuPEBjqkAbk88HIgXXcwdxaNNe%2BrB4rfB9gS2XnxcnQPI4ayIFA3b%2Bi4eLdnGLZDSPoyhMpcsBma6y3Fi2TYzJSIECNgA2F1%2FT8R3YWsJ7dcTJZTW9nDdaSwCZ5kAnTGQSQiETXErJ%2FEd806JA%2FL21di3a7F0e%2FZ1zx%2BL%2FOaPQXbHUaPTu4qGGcBqKRwenu7nO%2B%2FLULgKdyJOWfkJdIdsKGd02IhpopmWS%2Bp&X-Amz-Signature=d11ffb0391d012b19cbd861814f490c39984ab350d6b6931718d632d65f9d888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
