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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YAPGZZF%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcVpmV18YQdyPd8%2BFZFxwGJrDLQGFqRlwCSnFBBHWoIAiEApMHzOrWZwzfkI69vFonphqamFWjEzCTQNqgNgm27MAsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqRmenUig8Jh3%2BUZSrcA72tEafpx3lIo%2BUM2rJ6LXCW34%2F6brBarzL0jTZQqRFwS7TQQA5hFK20hsf9JsMXMCjrIWr%2BNjix9rMNLBTLpKb1ihtXwQILOxCLdyvUS1tC7l0Oa537ZwTGEM6MA89Z5F9YTsy31PbIDE%2B9yRyXXvAbx%2FPWPWwukGoOOD7va6xDyea9S19rP4bIwCXsRc9px3cWIZyTMQacuwkn3VKlfN8uQGWMjYuOIAYJFPegBWLgMPLfetH6usATX2OktMXxn0WeJHWWkoEiratktgCF3IrlmeRaKyAdgKLW3LR2LH4xiseLtQ4TW9vygg4tupOgrYZL7ORFfhHmXJLS3oaPI0dfpZVls7%2FOoOvNsoi%2B9qooajLQc7pliKSFWylI0J6fOEZillGnv5IWqbwcgehou%2BRozChqGeyiMe55GAlPbwrGM8KmoGWwtB5b4DWh%2F%2FFfy1ui0M26tBfvfhL80pNX3aawwQhRjZglWv0aNOvmgI%2Bz9GZf0h84OnXkXVhApZCmt04lNaS4wqOOqP35FH9tuoe%2BcgC6wOPtUi9vRL46CuEGo64TbnKLCzZVtWSGydQVCtOiAYjpZxVSBT1mf0UW2HfSvrEZw4GGEGSDtFyuPm%2FZMW%2F9pTiGXc6LnoOpMKe4y8oGOqUBUjyZ9TrcePQjp4iuH3R3z%2FoEYRXNJxZbqIWF8xROBcZKNYhUMyOrjtkDMKInrHGlgTLLVR6kHgbC%2F8Zrn4bRGUwuT0X%2BSprMhc5KzYPfMrsHRpbAb0byi6r09hXNneIWoycPMdHISAQzrHmP%2FD0KuE%2BviHhpQEj9ZYxYgxB1Gp13DEhMYGzPLy1W%2FOGNPOHqXY%2F%2Betl7s4gJOZoSRBqexDL%2BuQvu&X-Amz-Signature=cd80ab73e5e0e269a2437d90557796efb628946194c39b89394095b661a5e976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YAPGZZF%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcVpmV18YQdyPd8%2BFZFxwGJrDLQGFqRlwCSnFBBHWoIAiEApMHzOrWZwzfkI69vFonphqamFWjEzCTQNqgNgm27MAsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqRmenUig8Jh3%2BUZSrcA72tEafpx3lIo%2BUM2rJ6LXCW34%2F6brBarzL0jTZQqRFwS7TQQA5hFK20hsf9JsMXMCjrIWr%2BNjix9rMNLBTLpKb1ihtXwQILOxCLdyvUS1tC7l0Oa537ZwTGEM6MA89Z5F9YTsy31PbIDE%2B9yRyXXvAbx%2FPWPWwukGoOOD7va6xDyea9S19rP4bIwCXsRc9px3cWIZyTMQacuwkn3VKlfN8uQGWMjYuOIAYJFPegBWLgMPLfetH6usATX2OktMXxn0WeJHWWkoEiratktgCF3IrlmeRaKyAdgKLW3LR2LH4xiseLtQ4TW9vygg4tupOgrYZL7ORFfhHmXJLS3oaPI0dfpZVls7%2FOoOvNsoi%2B9qooajLQc7pliKSFWylI0J6fOEZillGnv5IWqbwcgehou%2BRozChqGeyiMe55GAlPbwrGM8KmoGWwtB5b4DWh%2F%2FFfy1ui0M26tBfvfhL80pNX3aawwQhRjZglWv0aNOvmgI%2Bz9GZf0h84OnXkXVhApZCmt04lNaS4wqOOqP35FH9tuoe%2BcgC6wOPtUi9vRL46CuEGo64TbnKLCzZVtWSGydQVCtOiAYjpZxVSBT1mf0UW2HfSvrEZw4GGEGSDtFyuPm%2FZMW%2F9pTiGXc6LnoOpMKe4y8oGOqUBUjyZ9TrcePQjp4iuH3R3z%2FoEYRXNJxZbqIWF8xROBcZKNYhUMyOrjtkDMKInrHGlgTLLVR6kHgbC%2F8Zrn4bRGUwuT0X%2BSprMhc5KzYPfMrsHRpbAb0byi6r09hXNneIWoycPMdHISAQzrHmP%2FD0KuE%2BviHhpQEj9ZYxYgxB1Gp13DEhMYGzPLy1W%2FOGNPOHqXY%2F%2Betl7s4gJOZoSRBqexDL%2BuQvu&X-Amz-Signature=73193c81a38b90ce9f6d249a58b6b1e2e4d5f8226d1e5d8b79229721cb06716e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YAPGZZF%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcVpmV18YQdyPd8%2BFZFxwGJrDLQGFqRlwCSnFBBHWoIAiEApMHzOrWZwzfkI69vFonphqamFWjEzCTQNqgNgm27MAsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqRmenUig8Jh3%2BUZSrcA72tEafpx3lIo%2BUM2rJ6LXCW34%2F6brBarzL0jTZQqRFwS7TQQA5hFK20hsf9JsMXMCjrIWr%2BNjix9rMNLBTLpKb1ihtXwQILOxCLdyvUS1tC7l0Oa537ZwTGEM6MA89Z5F9YTsy31PbIDE%2B9yRyXXvAbx%2FPWPWwukGoOOD7va6xDyea9S19rP4bIwCXsRc9px3cWIZyTMQacuwkn3VKlfN8uQGWMjYuOIAYJFPegBWLgMPLfetH6usATX2OktMXxn0WeJHWWkoEiratktgCF3IrlmeRaKyAdgKLW3LR2LH4xiseLtQ4TW9vygg4tupOgrYZL7ORFfhHmXJLS3oaPI0dfpZVls7%2FOoOvNsoi%2B9qooajLQc7pliKSFWylI0J6fOEZillGnv5IWqbwcgehou%2BRozChqGeyiMe55GAlPbwrGM8KmoGWwtB5b4DWh%2F%2FFfy1ui0M26tBfvfhL80pNX3aawwQhRjZglWv0aNOvmgI%2Bz9GZf0h84OnXkXVhApZCmt04lNaS4wqOOqP35FH9tuoe%2BcgC6wOPtUi9vRL46CuEGo64TbnKLCzZVtWSGydQVCtOiAYjpZxVSBT1mf0UW2HfSvrEZw4GGEGSDtFyuPm%2FZMW%2F9pTiGXc6LnoOpMKe4y8oGOqUBUjyZ9TrcePQjp4iuH3R3z%2FoEYRXNJxZbqIWF8xROBcZKNYhUMyOrjtkDMKInrHGlgTLLVR6kHgbC%2F8Zrn4bRGUwuT0X%2BSprMhc5KzYPfMrsHRpbAb0byi6r09hXNneIWoycPMdHISAQzrHmP%2FD0KuE%2BviHhpQEj9ZYxYgxB1Gp13DEhMYGzPLy1W%2FOGNPOHqXY%2F%2Betl7s4gJOZoSRBqexDL%2BuQvu&X-Amz-Signature=5645e9345df3ff8207bdf068323c11c940e128319cf277d4764d88bdbe7385df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YAPGZZF%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcVpmV18YQdyPd8%2BFZFxwGJrDLQGFqRlwCSnFBBHWoIAiEApMHzOrWZwzfkI69vFonphqamFWjEzCTQNqgNgm27MAsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqRmenUig8Jh3%2BUZSrcA72tEafpx3lIo%2BUM2rJ6LXCW34%2F6brBarzL0jTZQqRFwS7TQQA5hFK20hsf9JsMXMCjrIWr%2BNjix9rMNLBTLpKb1ihtXwQILOxCLdyvUS1tC7l0Oa537ZwTGEM6MA89Z5F9YTsy31PbIDE%2B9yRyXXvAbx%2FPWPWwukGoOOD7va6xDyea9S19rP4bIwCXsRc9px3cWIZyTMQacuwkn3VKlfN8uQGWMjYuOIAYJFPegBWLgMPLfetH6usATX2OktMXxn0WeJHWWkoEiratktgCF3IrlmeRaKyAdgKLW3LR2LH4xiseLtQ4TW9vygg4tupOgrYZL7ORFfhHmXJLS3oaPI0dfpZVls7%2FOoOvNsoi%2B9qooajLQc7pliKSFWylI0J6fOEZillGnv5IWqbwcgehou%2BRozChqGeyiMe55GAlPbwrGM8KmoGWwtB5b4DWh%2F%2FFfy1ui0M26tBfvfhL80pNX3aawwQhRjZglWv0aNOvmgI%2Bz9GZf0h84OnXkXVhApZCmt04lNaS4wqOOqP35FH9tuoe%2BcgC6wOPtUi9vRL46CuEGo64TbnKLCzZVtWSGydQVCtOiAYjpZxVSBT1mf0UW2HfSvrEZw4GGEGSDtFyuPm%2FZMW%2F9pTiGXc6LnoOpMKe4y8oGOqUBUjyZ9TrcePQjp4iuH3R3z%2FoEYRXNJxZbqIWF8xROBcZKNYhUMyOrjtkDMKInrHGlgTLLVR6kHgbC%2F8Zrn4bRGUwuT0X%2BSprMhc5KzYPfMrsHRpbAb0byi6r09hXNneIWoycPMdHISAQzrHmP%2FD0KuE%2BviHhpQEj9ZYxYgxB1Gp13DEhMYGzPLy1W%2FOGNPOHqXY%2F%2Betl7s4gJOZoSRBqexDL%2BuQvu&X-Amz-Signature=2c11b0cf77f79e9bc6b3cb705793efe851306f5394b419179eb365112be49c77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOYVMKSI%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkh4zGKhzERS%2FddRTIyNMIWNAVGk1gAwpTeU43OLIAaAiBPwcXAfc2fCfGvOY60SZQeFfSfFnfYxjF7wNmlesb4FiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNnF8G6FpRUsgVzLaKtwDihmidjEHgD5vDmu0259x01WQKge7C2rCfC7KEKrpE7AgtzK2W4gNl23D0u4Ns24uuV4MQb2KXsuUjUJeV1hrXlparRvu%2B0M6DjoWO6k6f700zxr9UJEGwiHUWk0nymKbtFe%2FIObY1U5I0MHP3bQ1lPs6YbZ5fhKCcmwDTkoqmzJKbOfhCieA%2FlCd7cNTSvpTw2erJdPBWJXCyhr4pQKa3Fhwm2c8RKHEq7ihqDRl97DaYFYEW9znzDNMAOcop6sJDX7BbXH1A%2F8bhEI1evwSl09sXJeOCjhsVTTvsNV75RODbShMCoICtUM41q%2BOX77%2FPgweJvbhZrdx2uioxf9qiC6wfZuAGl72OtXNLRwZ%2BXbzz355HAa88QPyszRsu0K4aCoeCB2Njh291ElePDhMtfdbtQjYftMKCnYFYtIblWDvjdyeBLQ5YexcHSsdp1%2FSjDoB4smvkEKwMunn1M2OxbWq%2Fsp%2F41F5PqPK8Rb7Li4de4MYWVYCPS44pPoY7WZEkXHU8tE7qM5PdEm7pNjRL3y9fL%2BreQuO1rJyj5tA%2BnIpmpju8jYzVVQabp%2BUTUwmUlBKHQYdqGW535a%2F8f0tE7H1Wc8bbPByDkfVnBlRf78Y4ii90Yy6E%2BaSdbkw5rzLygY6pgEqb7sPmsS4JcWJr1ooxyoFu2DqK0gUoIpztkwPis%2BTTpIc47mJhrlnxdqEFNkTOEB%2F1D7DZuisiK3lbdVMGXaiQAayxo3UQtK4yGstmbrAUD295%2FkmUXmAWDJlKtnOLe2MSwySFZnS8kqQJhXt5vpHBn5O2TxI4t4pSWtjE5rSrzAB5pCs7bZTXUuH%2Bn4%2BEw0lFoAFiWqAGUTCimZLqrsQs6pxuwpl&X-Amz-Signature=3e2aea754a4fc7dd854021674c86a6b20515997e61d056e3cfd53d0209846e90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YAPGZZF%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcVpmV18YQdyPd8%2BFZFxwGJrDLQGFqRlwCSnFBBHWoIAiEApMHzOrWZwzfkI69vFonphqamFWjEzCTQNqgNgm27MAsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqRmenUig8Jh3%2BUZSrcA72tEafpx3lIo%2BUM2rJ6LXCW34%2F6brBarzL0jTZQqRFwS7TQQA5hFK20hsf9JsMXMCjrIWr%2BNjix9rMNLBTLpKb1ihtXwQILOxCLdyvUS1tC7l0Oa537ZwTGEM6MA89Z5F9YTsy31PbIDE%2B9yRyXXvAbx%2FPWPWwukGoOOD7va6xDyea9S19rP4bIwCXsRc9px3cWIZyTMQacuwkn3VKlfN8uQGWMjYuOIAYJFPegBWLgMPLfetH6usATX2OktMXxn0WeJHWWkoEiratktgCF3IrlmeRaKyAdgKLW3LR2LH4xiseLtQ4TW9vygg4tupOgrYZL7ORFfhHmXJLS3oaPI0dfpZVls7%2FOoOvNsoi%2B9qooajLQc7pliKSFWylI0J6fOEZillGnv5IWqbwcgehou%2BRozChqGeyiMe55GAlPbwrGM8KmoGWwtB5b4DWh%2F%2FFfy1ui0M26tBfvfhL80pNX3aawwQhRjZglWv0aNOvmgI%2Bz9GZf0h84OnXkXVhApZCmt04lNaS4wqOOqP35FH9tuoe%2BcgC6wOPtUi9vRL46CuEGo64TbnKLCzZVtWSGydQVCtOiAYjpZxVSBT1mf0UW2HfSvrEZw4GGEGSDtFyuPm%2FZMW%2F9pTiGXc6LnoOpMKe4y8oGOqUBUjyZ9TrcePQjp4iuH3R3z%2FoEYRXNJxZbqIWF8xROBcZKNYhUMyOrjtkDMKInrHGlgTLLVR6kHgbC%2F8Zrn4bRGUwuT0X%2BSprMhc5KzYPfMrsHRpbAb0byi6r09hXNneIWoycPMdHISAQzrHmP%2FD0KuE%2BviHhpQEj9ZYxYgxB1Gp13DEhMYGzPLy1W%2FOGNPOHqXY%2F%2Betl7s4gJOZoSRBqexDL%2BuQvu&X-Amz-Signature=29fe700aadbe99af542bd67dc238eda61ce7e5edb23f6671d0577345f3a6e585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YAPGZZF%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcVpmV18YQdyPd8%2BFZFxwGJrDLQGFqRlwCSnFBBHWoIAiEApMHzOrWZwzfkI69vFonphqamFWjEzCTQNqgNgm27MAsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqRmenUig8Jh3%2BUZSrcA72tEafpx3lIo%2BUM2rJ6LXCW34%2F6brBarzL0jTZQqRFwS7TQQA5hFK20hsf9JsMXMCjrIWr%2BNjix9rMNLBTLpKb1ihtXwQILOxCLdyvUS1tC7l0Oa537ZwTGEM6MA89Z5F9YTsy31PbIDE%2B9yRyXXvAbx%2FPWPWwukGoOOD7va6xDyea9S19rP4bIwCXsRc9px3cWIZyTMQacuwkn3VKlfN8uQGWMjYuOIAYJFPegBWLgMPLfetH6usATX2OktMXxn0WeJHWWkoEiratktgCF3IrlmeRaKyAdgKLW3LR2LH4xiseLtQ4TW9vygg4tupOgrYZL7ORFfhHmXJLS3oaPI0dfpZVls7%2FOoOvNsoi%2B9qooajLQc7pliKSFWylI0J6fOEZillGnv5IWqbwcgehou%2BRozChqGeyiMe55GAlPbwrGM8KmoGWwtB5b4DWh%2F%2FFfy1ui0M26tBfvfhL80pNX3aawwQhRjZglWv0aNOvmgI%2Bz9GZf0h84OnXkXVhApZCmt04lNaS4wqOOqP35FH9tuoe%2BcgC6wOPtUi9vRL46CuEGo64TbnKLCzZVtWSGydQVCtOiAYjpZxVSBT1mf0UW2HfSvrEZw4GGEGSDtFyuPm%2FZMW%2F9pTiGXc6LnoOpMKe4y8oGOqUBUjyZ9TrcePQjp4iuH3R3z%2FoEYRXNJxZbqIWF8xROBcZKNYhUMyOrjtkDMKInrHGlgTLLVR6kHgbC%2F8Zrn4bRGUwuT0X%2BSprMhc5KzYPfMrsHRpbAb0byi6r09hXNneIWoycPMdHISAQzrHmP%2FD0KuE%2BviHhpQEj9ZYxYgxB1Gp13DEhMYGzPLy1W%2FOGNPOHqXY%2F%2Betl7s4gJOZoSRBqexDL%2BuQvu&X-Amz-Signature=b70deee7089fa691fa0212400c4c6fe219333519d798ed2231e2716ff2214be6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YAPGZZF%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcVpmV18YQdyPd8%2BFZFxwGJrDLQGFqRlwCSnFBBHWoIAiEApMHzOrWZwzfkI69vFonphqamFWjEzCTQNqgNgm27MAsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqRmenUig8Jh3%2BUZSrcA72tEafpx3lIo%2BUM2rJ6LXCW34%2F6brBarzL0jTZQqRFwS7TQQA5hFK20hsf9JsMXMCjrIWr%2BNjix9rMNLBTLpKb1ihtXwQILOxCLdyvUS1tC7l0Oa537ZwTGEM6MA89Z5F9YTsy31PbIDE%2B9yRyXXvAbx%2FPWPWwukGoOOD7va6xDyea9S19rP4bIwCXsRc9px3cWIZyTMQacuwkn3VKlfN8uQGWMjYuOIAYJFPegBWLgMPLfetH6usATX2OktMXxn0WeJHWWkoEiratktgCF3IrlmeRaKyAdgKLW3LR2LH4xiseLtQ4TW9vygg4tupOgrYZL7ORFfhHmXJLS3oaPI0dfpZVls7%2FOoOvNsoi%2B9qooajLQc7pliKSFWylI0J6fOEZillGnv5IWqbwcgehou%2BRozChqGeyiMe55GAlPbwrGM8KmoGWwtB5b4DWh%2F%2FFfy1ui0M26tBfvfhL80pNX3aawwQhRjZglWv0aNOvmgI%2Bz9GZf0h84OnXkXVhApZCmt04lNaS4wqOOqP35FH9tuoe%2BcgC6wOPtUi9vRL46CuEGo64TbnKLCzZVtWSGydQVCtOiAYjpZxVSBT1mf0UW2HfSvrEZw4GGEGSDtFyuPm%2FZMW%2F9pTiGXc6LnoOpMKe4y8oGOqUBUjyZ9TrcePQjp4iuH3R3z%2FoEYRXNJxZbqIWF8xROBcZKNYhUMyOrjtkDMKInrHGlgTLLVR6kHgbC%2F8Zrn4bRGUwuT0X%2BSprMhc5KzYPfMrsHRpbAb0byi6r09hXNneIWoycPMdHISAQzrHmP%2FD0KuE%2BviHhpQEj9ZYxYgxB1Gp13DEhMYGzPLy1W%2FOGNPOHqXY%2F%2Betl7s4gJOZoSRBqexDL%2BuQvu&X-Amz-Signature=14b7f300144c86519df892b4dd54ade378a493a5ca9f699cabfe3b5600e2609b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YAPGZZF%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcVpmV18YQdyPd8%2BFZFxwGJrDLQGFqRlwCSnFBBHWoIAiEApMHzOrWZwzfkI69vFonphqamFWjEzCTQNqgNgm27MAsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqRmenUig8Jh3%2BUZSrcA72tEafpx3lIo%2BUM2rJ6LXCW34%2F6brBarzL0jTZQqRFwS7TQQA5hFK20hsf9JsMXMCjrIWr%2BNjix9rMNLBTLpKb1ihtXwQILOxCLdyvUS1tC7l0Oa537ZwTGEM6MA89Z5F9YTsy31PbIDE%2B9yRyXXvAbx%2FPWPWwukGoOOD7va6xDyea9S19rP4bIwCXsRc9px3cWIZyTMQacuwkn3VKlfN8uQGWMjYuOIAYJFPegBWLgMPLfetH6usATX2OktMXxn0WeJHWWkoEiratktgCF3IrlmeRaKyAdgKLW3LR2LH4xiseLtQ4TW9vygg4tupOgrYZL7ORFfhHmXJLS3oaPI0dfpZVls7%2FOoOvNsoi%2B9qooajLQc7pliKSFWylI0J6fOEZillGnv5IWqbwcgehou%2BRozChqGeyiMe55GAlPbwrGM8KmoGWwtB5b4DWh%2F%2FFfy1ui0M26tBfvfhL80pNX3aawwQhRjZglWv0aNOvmgI%2Bz9GZf0h84OnXkXVhApZCmt04lNaS4wqOOqP35FH9tuoe%2BcgC6wOPtUi9vRL46CuEGo64TbnKLCzZVtWSGydQVCtOiAYjpZxVSBT1mf0UW2HfSvrEZw4GGEGSDtFyuPm%2FZMW%2F9pTiGXc6LnoOpMKe4y8oGOqUBUjyZ9TrcePQjp4iuH3R3z%2FoEYRXNJxZbqIWF8xROBcZKNYhUMyOrjtkDMKInrHGlgTLLVR6kHgbC%2F8Zrn4bRGUwuT0X%2BSprMhc5KzYPfMrsHRpbAb0byi6r09hXNneIWoycPMdHISAQzrHmP%2FD0KuE%2BviHhpQEj9ZYxYgxB1Gp13DEhMYGzPLy1W%2FOGNPOHqXY%2F%2Betl7s4gJOZoSRBqexDL%2BuQvu&X-Amz-Signature=3d2f7aa5280d92651ae4b823704e0e7813494210399c52e2522b42ad5f85c18d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YAPGZZF%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcVpmV18YQdyPd8%2BFZFxwGJrDLQGFqRlwCSnFBBHWoIAiEApMHzOrWZwzfkI69vFonphqamFWjEzCTQNqgNgm27MAsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqRmenUig8Jh3%2BUZSrcA72tEafpx3lIo%2BUM2rJ6LXCW34%2F6brBarzL0jTZQqRFwS7TQQA5hFK20hsf9JsMXMCjrIWr%2BNjix9rMNLBTLpKb1ihtXwQILOxCLdyvUS1tC7l0Oa537ZwTGEM6MA89Z5F9YTsy31PbIDE%2B9yRyXXvAbx%2FPWPWwukGoOOD7va6xDyea9S19rP4bIwCXsRc9px3cWIZyTMQacuwkn3VKlfN8uQGWMjYuOIAYJFPegBWLgMPLfetH6usATX2OktMXxn0WeJHWWkoEiratktgCF3IrlmeRaKyAdgKLW3LR2LH4xiseLtQ4TW9vygg4tupOgrYZL7ORFfhHmXJLS3oaPI0dfpZVls7%2FOoOvNsoi%2B9qooajLQc7pliKSFWylI0J6fOEZillGnv5IWqbwcgehou%2BRozChqGeyiMe55GAlPbwrGM8KmoGWwtB5b4DWh%2F%2FFfy1ui0M26tBfvfhL80pNX3aawwQhRjZglWv0aNOvmgI%2Bz9GZf0h84OnXkXVhApZCmt04lNaS4wqOOqP35FH9tuoe%2BcgC6wOPtUi9vRL46CuEGo64TbnKLCzZVtWSGydQVCtOiAYjpZxVSBT1mf0UW2HfSvrEZw4GGEGSDtFyuPm%2FZMW%2F9pTiGXc6LnoOpMKe4y8oGOqUBUjyZ9TrcePQjp4iuH3R3z%2FoEYRXNJxZbqIWF8xROBcZKNYhUMyOrjtkDMKInrHGlgTLLVR6kHgbC%2F8Zrn4bRGUwuT0X%2BSprMhc5KzYPfMrsHRpbAb0byi6r09hXNneIWoycPMdHISAQzrHmP%2FD0KuE%2BviHhpQEj9ZYxYgxB1Gp13DEhMYGzPLy1W%2FOGNPOHqXY%2F%2Betl7s4gJOZoSRBqexDL%2BuQvu&X-Amz-Signature=e5152f63d82d2c7a62695480ce119dd06ff50d7614cf941cfb84a5cb3fe33d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YAPGZZF%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcVpmV18YQdyPd8%2BFZFxwGJrDLQGFqRlwCSnFBBHWoIAiEApMHzOrWZwzfkI69vFonphqamFWjEzCTQNqgNgm27MAsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqRmenUig8Jh3%2BUZSrcA72tEafpx3lIo%2BUM2rJ6LXCW34%2F6brBarzL0jTZQqRFwS7TQQA5hFK20hsf9JsMXMCjrIWr%2BNjix9rMNLBTLpKb1ihtXwQILOxCLdyvUS1tC7l0Oa537ZwTGEM6MA89Z5F9YTsy31PbIDE%2B9yRyXXvAbx%2FPWPWwukGoOOD7va6xDyea9S19rP4bIwCXsRc9px3cWIZyTMQacuwkn3VKlfN8uQGWMjYuOIAYJFPegBWLgMPLfetH6usATX2OktMXxn0WeJHWWkoEiratktgCF3IrlmeRaKyAdgKLW3LR2LH4xiseLtQ4TW9vygg4tupOgrYZL7ORFfhHmXJLS3oaPI0dfpZVls7%2FOoOvNsoi%2B9qooajLQc7pliKSFWylI0J6fOEZillGnv5IWqbwcgehou%2BRozChqGeyiMe55GAlPbwrGM8KmoGWwtB5b4DWh%2F%2FFfy1ui0M26tBfvfhL80pNX3aawwQhRjZglWv0aNOvmgI%2Bz9GZf0h84OnXkXVhApZCmt04lNaS4wqOOqP35FH9tuoe%2BcgC6wOPtUi9vRL46CuEGo64TbnKLCzZVtWSGydQVCtOiAYjpZxVSBT1mf0UW2HfSvrEZw4GGEGSDtFyuPm%2FZMW%2F9pTiGXc6LnoOpMKe4y8oGOqUBUjyZ9TrcePQjp4iuH3R3z%2FoEYRXNJxZbqIWF8xROBcZKNYhUMyOrjtkDMKInrHGlgTLLVR6kHgbC%2F8Zrn4bRGUwuT0X%2BSprMhc5KzYPfMrsHRpbAb0byi6r09hXNneIWoycPMdHISAQzrHmP%2FD0KuE%2BviHhpQEj9ZYxYgxB1Gp13DEhMYGzPLy1W%2FOGNPOHqXY%2F%2Betl7s4gJOZoSRBqexDL%2BuQvu&X-Amz-Signature=68fe9675d6587a3e10b8f823c9fad8fc9b6ecaa95daf0b013085cd428c0b5e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


