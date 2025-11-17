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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664GSCZE%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKVcmN9Eaxu5zSBqaS4DCNyaYsHDr3Hc25RDt7uX8D%2FgIhAMYq3X8qmDP2hkMy2Wy8FPM3dmyUBPDD9J4mqSTrlVDRKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFgZ4G1Yndmr6ro8Aq3AMRfUe6L1sB6XPbsbUCNaUdb0aMO66TmVy6KBk26f70gUyLKI1QDenDAamvZL0E%2FPRpdcbfUxJ5aAk3we%2FEc8WdVegGWx2A2UOndGSKw0RhhKhKhy%2FR1Lux2wNqYm9p6u6UvqPsx8OeBFO1yT0cZNkeuXwiKy6L7zBhHG1Sj%2Baa9%2F75CVEj%2FNk8g6T5bzBeC0fJxzNT6e%2BMQ41zxlTwzjKOJEUZF5GjNZ3ETzvHz%2Fs1C7teijW5JoiTPZKljVWdOnDudw%2BoljC6St76yk0dhTPt93abITvimU71k2DKd%2BEEA61YLxBW5xpa6N9E%2B1plJG161jJvU%2BjdmfTHNnHXNMWCEaG3oEI5fRnOctpgsRwhd6M8UoiFqNOExljrKWnJna9TsI8RQ6q%2BCjRi0PvqIbAzE50hvNnrVXRQFxddcOwAgu1kH9mBzo%2BKHYZ9w6Sf%2BsoGFNFuSy2yR8%2BrjA6GXk6dNSKMa%2BkooNtpXCVWmjbApHvZDv8Lpn%2BY3WRqBYTxv%2BG4KKImM7tL5paSsTMj11WFmH4%2F%2B8l4QSU3qxXmGwNipCYuBCCtA6z27FGd%2F0iL3HkHpU7mpX4TsIKG1QOZIOLMszkkdjKFMFzkhN%2Fd7FG%2BJjI02hc3C77YrePzIzDV4OnIBjqkAQvXIDMOSbyg%2BsDP3UTUIRP%2BT9MZXA%2Fi6aZf2t5uYe6VfpcphMjDUjwDeu8AM8AvVwirxI8XfEFwFtZiKYPf%2B7wADcVkPzQ9amPAtLVfPkwhA0EQ0LXhI9y8O9InSMUBFKdUmbcKheCgAF80I9SdNaG%2BeAyPUtNZf1Pr11EHdTDYJU5wW6l%2FqNWf8vp77s78w%2BDZmND3BluC6xPKe%2FELkJ5Bo38l&X-Amz-Signature=514305ef56a7a067b88edf78f09522cbd8f9e94c6f334ff25c4dcbc07ec7a119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664GSCZE%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKVcmN9Eaxu5zSBqaS4DCNyaYsHDr3Hc25RDt7uX8D%2FgIhAMYq3X8qmDP2hkMy2Wy8FPM3dmyUBPDD9J4mqSTrlVDRKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFgZ4G1Yndmr6ro8Aq3AMRfUe6L1sB6XPbsbUCNaUdb0aMO66TmVy6KBk26f70gUyLKI1QDenDAamvZL0E%2FPRpdcbfUxJ5aAk3we%2FEc8WdVegGWx2A2UOndGSKw0RhhKhKhy%2FR1Lux2wNqYm9p6u6UvqPsx8OeBFO1yT0cZNkeuXwiKy6L7zBhHG1Sj%2Baa9%2F75CVEj%2FNk8g6T5bzBeC0fJxzNT6e%2BMQ41zxlTwzjKOJEUZF5GjNZ3ETzvHz%2Fs1C7teijW5JoiTPZKljVWdOnDudw%2BoljC6St76yk0dhTPt93abITvimU71k2DKd%2BEEA61YLxBW5xpa6N9E%2B1plJG161jJvU%2BjdmfTHNnHXNMWCEaG3oEI5fRnOctpgsRwhd6M8UoiFqNOExljrKWnJna9TsI8RQ6q%2BCjRi0PvqIbAzE50hvNnrVXRQFxddcOwAgu1kH9mBzo%2BKHYZ9w6Sf%2BsoGFNFuSy2yR8%2BrjA6GXk6dNSKMa%2BkooNtpXCVWmjbApHvZDv8Lpn%2BY3WRqBYTxv%2BG4KKImM7tL5paSsTMj11WFmH4%2F%2B8l4QSU3qxXmGwNipCYuBCCtA6z27FGd%2F0iL3HkHpU7mpX4TsIKG1QOZIOLMszkkdjKFMFzkhN%2Fd7FG%2BJjI02hc3C77YrePzIzDV4OnIBjqkAQvXIDMOSbyg%2BsDP3UTUIRP%2BT9MZXA%2Fi6aZf2t5uYe6VfpcphMjDUjwDeu8AM8AvVwirxI8XfEFwFtZiKYPf%2B7wADcVkPzQ9amPAtLVfPkwhA0EQ0LXhI9y8O9InSMUBFKdUmbcKheCgAF80I9SdNaG%2BeAyPUtNZf1Pr11EHdTDYJU5wW6l%2FqNWf8vp77s78w%2BDZmND3BluC6xPKe%2FELkJ5Bo38l&X-Amz-Signature=a3420f44625bb9d9ac92c6c9756b930bb6e97d34b4145905d4dbc1cb2757a703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664GSCZE%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKVcmN9Eaxu5zSBqaS4DCNyaYsHDr3Hc25RDt7uX8D%2FgIhAMYq3X8qmDP2hkMy2Wy8FPM3dmyUBPDD9J4mqSTrlVDRKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFgZ4G1Yndmr6ro8Aq3AMRfUe6L1sB6XPbsbUCNaUdb0aMO66TmVy6KBk26f70gUyLKI1QDenDAamvZL0E%2FPRpdcbfUxJ5aAk3we%2FEc8WdVegGWx2A2UOndGSKw0RhhKhKhy%2FR1Lux2wNqYm9p6u6UvqPsx8OeBFO1yT0cZNkeuXwiKy6L7zBhHG1Sj%2Baa9%2F75CVEj%2FNk8g6T5bzBeC0fJxzNT6e%2BMQ41zxlTwzjKOJEUZF5GjNZ3ETzvHz%2Fs1C7teijW5JoiTPZKljVWdOnDudw%2BoljC6St76yk0dhTPt93abITvimU71k2DKd%2BEEA61YLxBW5xpa6N9E%2B1plJG161jJvU%2BjdmfTHNnHXNMWCEaG3oEI5fRnOctpgsRwhd6M8UoiFqNOExljrKWnJna9TsI8RQ6q%2BCjRi0PvqIbAzE50hvNnrVXRQFxddcOwAgu1kH9mBzo%2BKHYZ9w6Sf%2BsoGFNFuSy2yR8%2BrjA6GXk6dNSKMa%2BkooNtpXCVWmjbApHvZDv8Lpn%2BY3WRqBYTxv%2BG4KKImM7tL5paSsTMj11WFmH4%2F%2B8l4QSU3qxXmGwNipCYuBCCtA6z27FGd%2F0iL3HkHpU7mpX4TsIKG1QOZIOLMszkkdjKFMFzkhN%2Fd7FG%2BJjI02hc3C77YrePzIzDV4OnIBjqkAQvXIDMOSbyg%2BsDP3UTUIRP%2BT9MZXA%2Fi6aZf2t5uYe6VfpcphMjDUjwDeu8AM8AvVwirxI8XfEFwFtZiKYPf%2B7wADcVkPzQ9amPAtLVfPkwhA0EQ0LXhI9y8O9InSMUBFKdUmbcKheCgAF80I9SdNaG%2BeAyPUtNZf1Pr11EHdTDYJU5wW6l%2FqNWf8vp77s78w%2BDZmND3BluC6xPKe%2FELkJ5Bo38l&X-Amz-Signature=3ce28abf07544c82f5f6cc946b431d976d79531f3b34df01d57e3d83a2cd10fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664GSCZE%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKVcmN9Eaxu5zSBqaS4DCNyaYsHDr3Hc25RDt7uX8D%2FgIhAMYq3X8qmDP2hkMy2Wy8FPM3dmyUBPDD9J4mqSTrlVDRKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFgZ4G1Yndmr6ro8Aq3AMRfUe6L1sB6XPbsbUCNaUdb0aMO66TmVy6KBk26f70gUyLKI1QDenDAamvZL0E%2FPRpdcbfUxJ5aAk3we%2FEc8WdVegGWx2A2UOndGSKw0RhhKhKhy%2FR1Lux2wNqYm9p6u6UvqPsx8OeBFO1yT0cZNkeuXwiKy6L7zBhHG1Sj%2Baa9%2F75CVEj%2FNk8g6T5bzBeC0fJxzNT6e%2BMQ41zxlTwzjKOJEUZF5GjNZ3ETzvHz%2Fs1C7teijW5JoiTPZKljVWdOnDudw%2BoljC6St76yk0dhTPt93abITvimU71k2DKd%2BEEA61YLxBW5xpa6N9E%2B1plJG161jJvU%2BjdmfTHNnHXNMWCEaG3oEI5fRnOctpgsRwhd6M8UoiFqNOExljrKWnJna9TsI8RQ6q%2BCjRi0PvqIbAzE50hvNnrVXRQFxddcOwAgu1kH9mBzo%2BKHYZ9w6Sf%2BsoGFNFuSy2yR8%2BrjA6GXk6dNSKMa%2BkooNtpXCVWmjbApHvZDv8Lpn%2BY3WRqBYTxv%2BG4KKImM7tL5paSsTMj11WFmH4%2F%2B8l4QSU3qxXmGwNipCYuBCCtA6z27FGd%2F0iL3HkHpU7mpX4TsIKG1QOZIOLMszkkdjKFMFzkhN%2Fd7FG%2BJjI02hc3C77YrePzIzDV4OnIBjqkAQvXIDMOSbyg%2BsDP3UTUIRP%2BT9MZXA%2Fi6aZf2t5uYe6VfpcphMjDUjwDeu8AM8AvVwirxI8XfEFwFtZiKYPf%2B7wADcVkPzQ9amPAtLVfPkwhA0EQ0LXhI9y8O9InSMUBFKdUmbcKheCgAF80I9SdNaG%2BeAyPUtNZf1Pr11EHdTDYJU5wW6l%2FqNWf8vp77s78w%2BDZmND3BluC6xPKe%2FELkJ5Bo38l&X-Amz-Signature=4fe3db37456b33a2b28ed3dc083ffe72d1d6d711ae423c74f2e47145321ef951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM5FIG6T%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZrBRGwACqQrHG62OZ6QgygaTZaKh2t94BbD4aw2%2BtSwIhAIQKv1vf9UY2tHOh0UvQ9BHHMRuRb8FyzBk10OzRDm7tKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8NorQqexqf5i58n0q3ANxvVg2sG32F30DGD6%2F5Qol0MaaJiDwiLKKA6CWilUEDQKNBNsaBK5uXXxtBHwNbDLvDGKw8M%2BSNx2i0Dlwl99l3lYuX2ARCXplqmxONpsQLw7Xub8CHFnU6WvvzKJlat3i0m6bAnlNGlKjmHaCr7m4o%2BeNusQM4BGi%2FtNvRPt6q1KPU%2FroEvo%2BZeOgQMhg6mFhTHL9NYEmetucouBv5gmpwC0XJTeGl21S1uSAhgvfh1DtEl5F60u4fmD8SaGtuQfOnVEhHLBPac%2BtZ%2BfPWjEhlBTFolIZDwQCH5owYQ%2BGd4i86blQF6SwjETxwCofHCq0YTi029ip8xEFR%2F8W6qTzo7vRR5Q3CrcCd38rbn4RKdT9lp6XKajs%2FjLBe%2B7deeoJWf9XDF5TxznUNzfH%2F8WfFc3JpzPXgsfteAQ%2Fc3KGY74uAaUmtiPuGLUHuwMoPURz%2Bjc90H13sS3Bd8Xrhn9bceUMARN4PhyW4fTQN3TTDshP0WSPncq%2FcNkFkRAm%2BWk1AVnFh%2Bk3Riv48k9jGor%2BC7jU3YV3wKqlcF4o%2Budo0MYvLhtr2D%2B2MB3fSZO%2BTGndXhDYHmKO5RmD94Ij7UZSi%2BUFs1EupUXoPyonvTxOBa8lRMch26nF9i6NiTDm4OnIBjqkAVm3BViQkjTZQ3miHIpt4YEznmmsdXQz3EYrcA1QptQboHdoLX%2BX7%2FoJvSQjtDk496PdmPt8HHW4UZXZWaOJVII%2F81ONaJgHiXCwAmjsagvImN4DKK1XJrAJjQmEJzrKwl3kGAssfzWC1nporWPHaRU4d8LwPiBtzCgBZhOPxfrn%2BgGngyERB6TvBxWgMLec3IQfyt7oVcASEHnQ%2Baxzx%2F0kvg3j&X-Amz-Signature=597e08444ed0db7580473ec91de3e4d49cfdcbda1bdca18747837dc516bcf982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664GSCZE%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKVcmN9Eaxu5zSBqaS4DCNyaYsHDr3Hc25RDt7uX8D%2FgIhAMYq3X8qmDP2hkMy2Wy8FPM3dmyUBPDD9J4mqSTrlVDRKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFgZ4G1Yndmr6ro8Aq3AMRfUe6L1sB6XPbsbUCNaUdb0aMO66TmVy6KBk26f70gUyLKI1QDenDAamvZL0E%2FPRpdcbfUxJ5aAk3we%2FEc8WdVegGWx2A2UOndGSKw0RhhKhKhy%2FR1Lux2wNqYm9p6u6UvqPsx8OeBFO1yT0cZNkeuXwiKy6L7zBhHG1Sj%2Baa9%2F75CVEj%2FNk8g6T5bzBeC0fJxzNT6e%2BMQ41zxlTwzjKOJEUZF5GjNZ3ETzvHz%2Fs1C7teijW5JoiTPZKljVWdOnDudw%2BoljC6St76yk0dhTPt93abITvimU71k2DKd%2BEEA61YLxBW5xpa6N9E%2B1plJG161jJvU%2BjdmfTHNnHXNMWCEaG3oEI5fRnOctpgsRwhd6M8UoiFqNOExljrKWnJna9TsI8RQ6q%2BCjRi0PvqIbAzE50hvNnrVXRQFxddcOwAgu1kH9mBzo%2BKHYZ9w6Sf%2BsoGFNFuSy2yR8%2BrjA6GXk6dNSKMa%2BkooNtpXCVWmjbApHvZDv8Lpn%2BY3WRqBYTxv%2BG4KKImM7tL5paSsTMj11WFmH4%2F%2B8l4QSU3qxXmGwNipCYuBCCtA6z27FGd%2F0iL3HkHpU7mpX4TsIKG1QOZIOLMszkkdjKFMFzkhN%2Fd7FG%2BJjI02hc3C77YrePzIzDV4OnIBjqkAQvXIDMOSbyg%2BsDP3UTUIRP%2BT9MZXA%2Fi6aZf2t5uYe6VfpcphMjDUjwDeu8AM8AvVwirxI8XfEFwFtZiKYPf%2B7wADcVkPzQ9amPAtLVfPkwhA0EQ0LXhI9y8O9InSMUBFKdUmbcKheCgAF80I9SdNaG%2BeAyPUtNZf1Pr11EHdTDYJU5wW6l%2FqNWf8vp77s78w%2BDZmND3BluC6xPKe%2FELkJ5Bo38l&X-Amz-Signature=c687a5b6b3bd8fc365a933682ed10f0e0c0059b13e4a873005b7b95c10bbb368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664GSCZE%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKVcmN9Eaxu5zSBqaS4DCNyaYsHDr3Hc25RDt7uX8D%2FgIhAMYq3X8qmDP2hkMy2Wy8FPM3dmyUBPDD9J4mqSTrlVDRKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFgZ4G1Yndmr6ro8Aq3AMRfUe6L1sB6XPbsbUCNaUdb0aMO66TmVy6KBk26f70gUyLKI1QDenDAamvZL0E%2FPRpdcbfUxJ5aAk3we%2FEc8WdVegGWx2A2UOndGSKw0RhhKhKhy%2FR1Lux2wNqYm9p6u6UvqPsx8OeBFO1yT0cZNkeuXwiKy6L7zBhHG1Sj%2Baa9%2F75CVEj%2FNk8g6T5bzBeC0fJxzNT6e%2BMQ41zxlTwzjKOJEUZF5GjNZ3ETzvHz%2Fs1C7teijW5JoiTPZKljVWdOnDudw%2BoljC6St76yk0dhTPt93abITvimU71k2DKd%2BEEA61YLxBW5xpa6N9E%2B1plJG161jJvU%2BjdmfTHNnHXNMWCEaG3oEI5fRnOctpgsRwhd6M8UoiFqNOExljrKWnJna9TsI8RQ6q%2BCjRi0PvqIbAzE50hvNnrVXRQFxddcOwAgu1kH9mBzo%2BKHYZ9w6Sf%2BsoGFNFuSy2yR8%2BrjA6GXk6dNSKMa%2BkooNtpXCVWmjbApHvZDv8Lpn%2BY3WRqBYTxv%2BG4KKImM7tL5paSsTMj11WFmH4%2F%2B8l4QSU3qxXmGwNipCYuBCCtA6z27FGd%2F0iL3HkHpU7mpX4TsIKG1QOZIOLMszkkdjKFMFzkhN%2Fd7FG%2BJjI02hc3C77YrePzIzDV4OnIBjqkAQvXIDMOSbyg%2BsDP3UTUIRP%2BT9MZXA%2Fi6aZf2t5uYe6VfpcphMjDUjwDeu8AM8AvVwirxI8XfEFwFtZiKYPf%2B7wADcVkPzQ9amPAtLVfPkwhA0EQ0LXhI9y8O9InSMUBFKdUmbcKheCgAF80I9SdNaG%2BeAyPUtNZf1Pr11EHdTDYJU5wW6l%2FqNWf8vp77s78w%2BDZmND3BluC6xPKe%2FELkJ5Bo38l&X-Amz-Signature=088f3b6718d8f89ccfe1ee52473529bee0895ed9e47b3a4fcb6269f78ff82f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664GSCZE%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKVcmN9Eaxu5zSBqaS4DCNyaYsHDr3Hc25RDt7uX8D%2FgIhAMYq3X8qmDP2hkMy2Wy8FPM3dmyUBPDD9J4mqSTrlVDRKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFgZ4G1Yndmr6ro8Aq3AMRfUe6L1sB6XPbsbUCNaUdb0aMO66TmVy6KBk26f70gUyLKI1QDenDAamvZL0E%2FPRpdcbfUxJ5aAk3we%2FEc8WdVegGWx2A2UOndGSKw0RhhKhKhy%2FR1Lux2wNqYm9p6u6UvqPsx8OeBFO1yT0cZNkeuXwiKy6L7zBhHG1Sj%2Baa9%2F75CVEj%2FNk8g6T5bzBeC0fJxzNT6e%2BMQ41zxlTwzjKOJEUZF5GjNZ3ETzvHz%2Fs1C7teijW5JoiTPZKljVWdOnDudw%2BoljC6St76yk0dhTPt93abITvimU71k2DKd%2BEEA61YLxBW5xpa6N9E%2B1plJG161jJvU%2BjdmfTHNnHXNMWCEaG3oEI5fRnOctpgsRwhd6M8UoiFqNOExljrKWnJna9TsI8RQ6q%2BCjRi0PvqIbAzE50hvNnrVXRQFxddcOwAgu1kH9mBzo%2BKHYZ9w6Sf%2BsoGFNFuSy2yR8%2BrjA6GXk6dNSKMa%2BkooNtpXCVWmjbApHvZDv8Lpn%2BY3WRqBYTxv%2BG4KKImM7tL5paSsTMj11WFmH4%2F%2B8l4QSU3qxXmGwNipCYuBCCtA6z27FGd%2F0iL3HkHpU7mpX4TsIKG1QOZIOLMszkkdjKFMFzkhN%2Fd7FG%2BJjI02hc3C77YrePzIzDV4OnIBjqkAQvXIDMOSbyg%2BsDP3UTUIRP%2BT9MZXA%2Fi6aZf2t5uYe6VfpcphMjDUjwDeu8AM8AvVwirxI8XfEFwFtZiKYPf%2B7wADcVkPzQ9amPAtLVfPkwhA0EQ0LXhI9y8O9InSMUBFKdUmbcKheCgAF80I9SdNaG%2BeAyPUtNZf1Pr11EHdTDYJU5wW6l%2FqNWf8vp77s78w%2BDZmND3BluC6xPKe%2FELkJ5Bo38l&X-Amz-Signature=53c8f45e264a69281f344d8546b9da4bd3d4680fd86c9e2718899dab2725de21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664GSCZE%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKVcmN9Eaxu5zSBqaS4DCNyaYsHDr3Hc25RDt7uX8D%2FgIhAMYq3X8qmDP2hkMy2Wy8FPM3dmyUBPDD9J4mqSTrlVDRKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFgZ4G1Yndmr6ro8Aq3AMRfUe6L1sB6XPbsbUCNaUdb0aMO66TmVy6KBk26f70gUyLKI1QDenDAamvZL0E%2FPRpdcbfUxJ5aAk3we%2FEc8WdVegGWx2A2UOndGSKw0RhhKhKhy%2FR1Lux2wNqYm9p6u6UvqPsx8OeBFO1yT0cZNkeuXwiKy6L7zBhHG1Sj%2Baa9%2F75CVEj%2FNk8g6T5bzBeC0fJxzNT6e%2BMQ41zxlTwzjKOJEUZF5GjNZ3ETzvHz%2Fs1C7teijW5JoiTPZKljVWdOnDudw%2BoljC6St76yk0dhTPt93abITvimU71k2DKd%2BEEA61YLxBW5xpa6N9E%2B1plJG161jJvU%2BjdmfTHNnHXNMWCEaG3oEI5fRnOctpgsRwhd6M8UoiFqNOExljrKWnJna9TsI8RQ6q%2BCjRi0PvqIbAzE50hvNnrVXRQFxddcOwAgu1kH9mBzo%2BKHYZ9w6Sf%2BsoGFNFuSy2yR8%2BrjA6GXk6dNSKMa%2BkooNtpXCVWmjbApHvZDv8Lpn%2BY3WRqBYTxv%2BG4KKImM7tL5paSsTMj11WFmH4%2F%2B8l4QSU3qxXmGwNipCYuBCCtA6z27FGd%2F0iL3HkHpU7mpX4TsIKG1QOZIOLMszkkdjKFMFzkhN%2Fd7FG%2BJjI02hc3C77YrePzIzDV4OnIBjqkAQvXIDMOSbyg%2BsDP3UTUIRP%2BT9MZXA%2Fi6aZf2t5uYe6VfpcphMjDUjwDeu8AM8AvVwirxI8XfEFwFtZiKYPf%2B7wADcVkPzQ9amPAtLVfPkwhA0EQ0LXhI9y8O9InSMUBFKdUmbcKheCgAF80I9SdNaG%2BeAyPUtNZf1Pr11EHdTDYJU5wW6l%2FqNWf8vp77s78w%2BDZmND3BluC6xPKe%2FELkJ5Bo38l&X-Amz-Signature=02621daf9422803fd76e562d7d8d0ebb2e4b9b0378f50b3840de2479655b2c05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664GSCZE%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKVcmN9Eaxu5zSBqaS4DCNyaYsHDr3Hc25RDt7uX8D%2FgIhAMYq3X8qmDP2hkMy2Wy8FPM3dmyUBPDD9J4mqSTrlVDRKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFgZ4G1Yndmr6ro8Aq3AMRfUe6L1sB6XPbsbUCNaUdb0aMO66TmVy6KBk26f70gUyLKI1QDenDAamvZL0E%2FPRpdcbfUxJ5aAk3we%2FEc8WdVegGWx2A2UOndGSKw0RhhKhKhy%2FR1Lux2wNqYm9p6u6UvqPsx8OeBFO1yT0cZNkeuXwiKy6L7zBhHG1Sj%2Baa9%2F75CVEj%2FNk8g6T5bzBeC0fJxzNT6e%2BMQ41zxlTwzjKOJEUZF5GjNZ3ETzvHz%2Fs1C7teijW5JoiTPZKljVWdOnDudw%2BoljC6St76yk0dhTPt93abITvimU71k2DKd%2BEEA61YLxBW5xpa6N9E%2B1plJG161jJvU%2BjdmfTHNnHXNMWCEaG3oEI5fRnOctpgsRwhd6M8UoiFqNOExljrKWnJna9TsI8RQ6q%2BCjRi0PvqIbAzE50hvNnrVXRQFxddcOwAgu1kH9mBzo%2BKHYZ9w6Sf%2BsoGFNFuSy2yR8%2BrjA6GXk6dNSKMa%2BkooNtpXCVWmjbApHvZDv8Lpn%2BY3WRqBYTxv%2BG4KKImM7tL5paSsTMj11WFmH4%2F%2B8l4QSU3qxXmGwNipCYuBCCtA6z27FGd%2F0iL3HkHpU7mpX4TsIKG1QOZIOLMszkkdjKFMFzkhN%2Fd7FG%2BJjI02hc3C77YrePzIzDV4OnIBjqkAQvXIDMOSbyg%2BsDP3UTUIRP%2BT9MZXA%2Fi6aZf2t5uYe6VfpcphMjDUjwDeu8AM8AvVwirxI8XfEFwFtZiKYPf%2B7wADcVkPzQ9amPAtLVfPkwhA0EQ0LXhI9y8O9InSMUBFKdUmbcKheCgAF80I9SdNaG%2BeAyPUtNZf1Pr11EHdTDYJU5wW6l%2FqNWf8vp77s78w%2BDZmND3BluC6xPKe%2FELkJ5Bo38l&X-Amz-Signature=4c805a3c073e1daa1bd1bd263f93d6c4a52fd5b09e6574a48ae91708cd991ff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664GSCZE%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKVcmN9Eaxu5zSBqaS4DCNyaYsHDr3Hc25RDt7uX8D%2FgIhAMYq3X8qmDP2hkMy2Wy8FPM3dmyUBPDD9J4mqSTrlVDRKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFgZ4G1Yndmr6ro8Aq3AMRfUe6L1sB6XPbsbUCNaUdb0aMO66TmVy6KBk26f70gUyLKI1QDenDAamvZL0E%2FPRpdcbfUxJ5aAk3we%2FEc8WdVegGWx2A2UOndGSKw0RhhKhKhy%2FR1Lux2wNqYm9p6u6UvqPsx8OeBFO1yT0cZNkeuXwiKy6L7zBhHG1Sj%2Baa9%2F75CVEj%2FNk8g6T5bzBeC0fJxzNT6e%2BMQ41zxlTwzjKOJEUZF5GjNZ3ETzvHz%2Fs1C7teijW5JoiTPZKljVWdOnDudw%2BoljC6St76yk0dhTPt93abITvimU71k2DKd%2BEEA61YLxBW5xpa6N9E%2B1plJG161jJvU%2BjdmfTHNnHXNMWCEaG3oEI5fRnOctpgsRwhd6M8UoiFqNOExljrKWnJna9TsI8RQ6q%2BCjRi0PvqIbAzE50hvNnrVXRQFxddcOwAgu1kH9mBzo%2BKHYZ9w6Sf%2BsoGFNFuSy2yR8%2BrjA6GXk6dNSKMa%2BkooNtpXCVWmjbApHvZDv8Lpn%2BY3WRqBYTxv%2BG4KKImM7tL5paSsTMj11WFmH4%2F%2B8l4QSU3qxXmGwNipCYuBCCtA6z27FGd%2F0iL3HkHpU7mpX4TsIKG1QOZIOLMszkkdjKFMFzkhN%2Fd7FG%2BJjI02hc3C77YrePzIzDV4OnIBjqkAQvXIDMOSbyg%2BsDP3UTUIRP%2BT9MZXA%2Fi6aZf2t5uYe6VfpcphMjDUjwDeu8AM8AvVwirxI8XfEFwFtZiKYPf%2B7wADcVkPzQ9amPAtLVfPkwhA0EQ0LXhI9y8O9InSMUBFKdUmbcKheCgAF80I9SdNaG%2BeAyPUtNZf1Pr11EHdTDYJU5wW6l%2FqNWf8vp77s78w%2BDZmND3BluC6xPKe%2FELkJ5Bo38l&X-Amz-Signature=564ae0d5d51f980eec012f9b1617af06bc0459e6a0ef4cf77c603dac7ecc82d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


