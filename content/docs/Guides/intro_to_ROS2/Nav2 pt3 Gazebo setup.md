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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM624DYI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQChSN1ZGcuWVV2KgcXj%2FT2Allyb0t%2BHFrHFQXmVQOkycwIhAL%2Bd6Q0ukBdEQTRjWm2hsmdTi0XAV5h3KEHEoP2p2p1bKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkUuJZL%2BIVG4tJVcwq3AMoXx%2Fgh9SD8%2BtH9rbEA7QjfT3YK0fTECvPVMLOe3sZHQhkiC17I0IDJre8XnXbdiMgdK7%2FsVPCeFmwYW5vcBAyVNhCXI44QxZwTi8h1nMw4XbCLqny5p9dcWzaBohydtB8P4qy9T37FJX5Tx%2B5lh0hoVHpi%2B94U69lWcdcFglb%2Fl5acDkL%2BQhBHipx%2BsSS%2FiuGjVUmnRvqPI%2B9hLCHuc4Wg3JoCkLu%2FnXjvmN5JgjveW8KlFtafKDXqPbhPueAoMYiD81z9KuLvKxUZRY%2FZh5kxHRf4fxM%2FAiOnuqXpq95RpFmiJo0jF9ne16F%2B5icr8A4zQ1kiz1m9A6klXUXGOVpu0NWL2%2BBy%2FLJ4%2FMbccbYYapQhng5Z13CzmHxnCEahM3dOamlJfhxJNYQjxrwApFhZx3jLB4aU5idS8casetsr%2BmsYuSnSuAmHsBd9mpI5Y5wFLsV%2FWMUfh44WJHXpzTWHTTiUokB8MFvOHT%2BlKX63VjkpghHNefAcKVGgNcgMvmKQtc2lG80B2FuOEGlpbf5aaHJIpbGnypkvVPUtA7cNrd84%2FNzM62qiOA9z1aUvrneCDzepsqQqJMDPKaUHtPGFszsyQ%2Fyt2fWPpYeZkKPL4aYOJYKB8kDhQtt8TCN7dDEBjqkAYrDIuG%2FqasJ5sje3dWzEQfSTw7mQQA84R3DwKCGYQA9boSVV%2FlOluSnXkgWRj0E6cSf86NthauGQKRip7ISW0fQQAFf78SKTroCSDH%2FfdjUqbSwuTfd4n249%2BQSWfWnRudZchjI%2FhyPVzJFfzS4rogJuJADyMX4BZUITQSUEmnCfIDlpM60Zjy6G7OOgh6QJXUl3BgFFk0%2F%2BlMq9JfpTP%2BVFBX6&X-Amz-Signature=9892582f3cf7bf6adad81e37b52dc4436bcc11f40e33c7fdaf9af9826f85d964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM624DYI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQChSN1ZGcuWVV2KgcXj%2FT2Allyb0t%2BHFrHFQXmVQOkycwIhAL%2Bd6Q0ukBdEQTRjWm2hsmdTi0XAV5h3KEHEoP2p2p1bKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkUuJZL%2BIVG4tJVcwq3AMoXx%2Fgh9SD8%2BtH9rbEA7QjfT3YK0fTECvPVMLOe3sZHQhkiC17I0IDJre8XnXbdiMgdK7%2FsVPCeFmwYW5vcBAyVNhCXI44QxZwTi8h1nMw4XbCLqny5p9dcWzaBohydtB8P4qy9T37FJX5Tx%2B5lh0hoVHpi%2B94U69lWcdcFglb%2Fl5acDkL%2BQhBHipx%2BsSS%2FiuGjVUmnRvqPI%2B9hLCHuc4Wg3JoCkLu%2FnXjvmN5JgjveW8KlFtafKDXqPbhPueAoMYiD81z9KuLvKxUZRY%2FZh5kxHRf4fxM%2FAiOnuqXpq95RpFmiJo0jF9ne16F%2B5icr8A4zQ1kiz1m9A6klXUXGOVpu0NWL2%2BBy%2FLJ4%2FMbccbYYapQhng5Z13CzmHxnCEahM3dOamlJfhxJNYQjxrwApFhZx3jLB4aU5idS8casetsr%2BmsYuSnSuAmHsBd9mpI5Y5wFLsV%2FWMUfh44WJHXpzTWHTTiUokB8MFvOHT%2BlKX63VjkpghHNefAcKVGgNcgMvmKQtc2lG80B2FuOEGlpbf5aaHJIpbGnypkvVPUtA7cNrd84%2FNzM62qiOA9z1aUvrneCDzepsqQqJMDPKaUHtPGFszsyQ%2Fyt2fWPpYeZkKPL4aYOJYKB8kDhQtt8TCN7dDEBjqkAYrDIuG%2FqasJ5sje3dWzEQfSTw7mQQA84R3DwKCGYQA9boSVV%2FlOluSnXkgWRj0E6cSf86NthauGQKRip7ISW0fQQAFf78SKTroCSDH%2FfdjUqbSwuTfd4n249%2BQSWfWnRudZchjI%2FhyPVzJFfzS4rogJuJADyMX4BZUITQSUEmnCfIDlpM60Zjy6G7OOgh6QJXUl3BgFFk0%2F%2BlMq9JfpTP%2BVFBX6&X-Amz-Signature=35886442e9a2fb99cd981e4c25bb499abfae07b89be213c587f378f9e871b758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM624DYI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQChSN1ZGcuWVV2KgcXj%2FT2Allyb0t%2BHFrHFQXmVQOkycwIhAL%2Bd6Q0ukBdEQTRjWm2hsmdTi0XAV5h3KEHEoP2p2p1bKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkUuJZL%2BIVG4tJVcwq3AMoXx%2Fgh9SD8%2BtH9rbEA7QjfT3YK0fTECvPVMLOe3sZHQhkiC17I0IDJre8XnXbdiMgdK7%2FsVPCeFmwYW5vcBAyVNhCXI44QxZwTi8h1nMw4XbCLqny5p9dcWzaBohydtB8P4qy9T37FJX5Tx%2B5lh0hoVHpi%2B94U69lWcdcFglb%2Fl5acDkL%2BQhBHipx%2BsSS%2FiuGjVUmnRvqPI%2B9hLCHuc4Wg3JoCkLu%2FnXjvmN5JgjveW8KlFtafKDXqPbhPueAoMYiD81z9KuLvKxUZRY%2FZh5kxHRf4fxM%2FAiOnuqXpq95RpFmiJo0jF9ne16F%2B5icr8A4zQ1kiz1m9A6klXUXGOVpu0NWL2%2BBy%2FLJ4%2FMbccbYYapQhng5Z13CzmHxnCEahM3dOamlJfhxJNYQjxrwApFhZx3jLB4aU5idS8casetsr%2BmsYuSnSuAmHsBd9mpI5Y5wFLsV%2FWMUfh44WJHXpzTWHTTiUokB8MFvOHT%2BlKX63VjkpghHNefAcKVGgNcgMvmKQtc2lG80B2FuOEGlpbf5aaHJIpbGnypkvVPUtA7cNrd84%2FNzM62qiOA9z1aUvrneCDzepsqQqJMDPKaUHtPGFszsyQ%2Fyt2fWPpYeZkKPL4aYOJYKB8kDhQtt8TCN7dDEBjqkAYrDIuG%2FqasJ5sje3dWzEQfSTw7mQQA84R3DwKCGYQA9boSVV%2FlOluSnXkgWRj0E6cSf86NthauGQKRip7ISW0fQQAFf78SKTroCSDH%2FfdjUqbSwuTfd4n249%2BQSWfWnRudZchjI%2FhyPVzJFfzS4rogJuJADyMX4BZUITQSUEmnCfIDlpM60Zjy6G7OOgh6QJXUl3BgFFk0%2F%2BlMq9JfpTP%2BVFBX6&X-Amz-Signature=e8f2140356fe549ffcc3b8bff48b4b2dada0347e9a1f2669db06c236a082a079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM624DYI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQChSN1ZGcuWVV2KgcXj%2FT2Allyb0t%2BHFrHFQXmVQOkycwIhAL%2Bd6Q0ukBdEQTRjWm2hsmdTi0XAV5h3KEHEoP2p2p1bKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkUuJZL%2BIVG4tJVcwq3AMoXx%2Fgh9SD8%2BtH9rbEA7QjfT3YK0fTECvPVMLOe3sZHQhkiC17I0IDJre8XnXbdiMgdK7%2FsVPCeFmwYW5vcBAyVNhCXI44QxZwTi8h1nMw4XbCLqny5p9dcWzaBohydtB8P4qy9T37FJX5Tx%2B5lh0hoVHpi%2B94U69lWcdcFglb%2Fl5acDkL%2BQhBHipx%2BsSS%2FiuGjVUmnRvqPI%2B9hLCHuc4Wg3JoCkLu%2FnXjvmN5JgjveW8KlFtafKDXqPbhPueAoMYiD81z9KuLvKxUZRY%2FZh5kxHRf4fxM%2FAiOnuqXpq95RpFmiJo0jF9ne16F%2B5icr8A4zQ1kiz1m9A6klXUXGOVpu0NWL2%2BBy%2FLJ4%2FMbccbYYapQhng5Z13CzmHxnCEahM3dOamlJfhxJNYQjxrwApFhZx3jLB4aU5idS8casetsr%2BmsYuSnSuAmHsBd9mpI5Y5wFLsV%2FWMUfh44WJHXpzTWHTTiUokB8MFvOHT%2BlKX63VjkpghHNefAcKVGgNcgMvmKQtc2lG80B2FuOEGlpbf5aaHJIpbGnypkvVPUtA7cNrd84%2FNzM62qiOA9z1aUvrneCDzepsqQqJMDPKaUHtPGFszsyQ%2Fyt2fWPpYeZkKPL4aYOJYKB8kDhQtt8TCN7dDEBjqkAYrDIuG%2FqasJ5sje3dWzEQfSTw7mQQA84R3DwKCGYQA9boSVV%2FlOluSnXkgWRj0E6cSf86NthauGQKRip7ISW0fQQAFf78SKTroCSDH%2FfdjUqbSwuTfd4n249%2BQSWfWnRudZchjI%2FhyPVzJFfzS4rogJuJADyMX4BZUITQSUEmnCfIDlpM60Zjy6G7OOgh6QJXUl3BgFFk0%2F%2BlMq9JfpTP%2BVFBX6&X-Amz-Signature=800df7375703f21353a5f8490bae4a9258c89a1ac47d23d1c28904999d5fca1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LWNAD5W%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIBWRPADJLrq1675zSUDMwuAerwpj1RHPc3Fm96n%2B88%2FjAiBfqO155G9KMfDES%2FKRIxRGGeqY1%2FPBubrZttXTEvCB5CqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM39G0zxY4fdTCUN7DKtwDOrrm8Toi9GkGWDtTVkAWQWPGmivutOhfjrsH6BUS%2FcGsT1ryEOMtZbb1Vp98AiDnMT54XG3aIMd6s14ctxDNuq1R4bv7jiT9y6sB73Dg8AMhTiufxm6Di6kOfJYeAXQlguNEm8kNPayFu%2FIEI5UTS6QoZxMUtbMXzwnSaYv8DacWCbRQ3WD%2BYuiFj21FX5gTntuGyB5wRVI6X4do7L8mEJmXtdY6c5Asr0EI0FJb1gqNoaoXJ7%2Fk%2FeStrkF9XSfM2imjfAngfnjE%2BzHTxM0swh%2FLNlsyGepPag8xYvQVcu67YSpkYHUqGAshnEpDddZsnKPTxOglzD00nydaWCYV3L7Lr0425YmqjtVA6j8G5Z93JGz4OLOmzvNSnnfNHpVnFgHTGCn2TTK%2FlbGd374YxTXBINJ7eNB%2BPT4DRhMAH3cRXB0ugdFc1icr3RL6vDaushXioPHP7IHOT5iBX%2BOiTiDsBzzdF5NMXHtr6MBppcDtirZFgScBcuMjDMCwX58ZQeRjZ64PIBJwK%2FVk0NOommmbe1pm81Yf9Dz1NpgPUmRlwl35dfHL7ughBvUteipD4ESSFJEUy5MdzpF8elKwFWW1YdpbEyNPmAhRCmZviL5ncF4uYjdqgJ5eCgowmO3QxAY6pgG%2FY7FxpMz5bZ1dHbjDis2M5AR4ww6uB6qvBmH1bXSzSEdkIoU9P9Aav7Xo0P0f31BB0GFVSnHaPQJiJc2W7mi410i7haIiRovvv1S4IZw%2BcKfhyOjPesncLBV4w3eTPxdAF5dG0YuNt9AJPsqBSmiyEGJe60eIrMgHUHWdW7d9D27brP3ttcFiZRfr9JaETbPS9%2B58OhCeO05kOnv9eOqFLwuTYa03&X-Amz-Signature=b171de6aa449d854995fec31ba2e3ae3987746d0a84b348223293695625a57ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM624DYI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQChSN1ZGcuWVV2KgcXj%2FT2Allyb0t%2BHFrHFQXmVQOkycwIhAL%2Bd6Q0ukBdEQTRjWm2hsmdTi0XAV5h3KEHEoP2p2p1bKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkUuJZL%2BIVG4tJVcwq3AMoXx%2Fgh9SD8%2BtH9rbEA7QjfT3YK0fTECvPVMLOe3sZHQhkiC17I0IDJre8XnXbdiMgdK7%2FsVPCeFmwYW5vcBAyVNhCXI44QxZwTi8h1nMw4XbCLqny5p9dcWzaBohydtB8P4qy9T37FJX5Tx%2B5lh0hoVHpi%2B94U69lWcdcFglb%2Fl5acDkL%2BQhBHipx%2BsSS%2FiuGjVUmnRvqPI%2B9hLCHuc4Wg3JoCkLu%2FnXjvmN5JgjveW8KlFtafKDXqPbhPueAoMYiD81z9KuLvKxUZRY%2FZh5kxHRf4fxM%2FAiOnuqXpq95RpFmiJo0jF9ne16F%2B5icr8A4zQ1kiz1m9A6klXUXGOVpu0NWL2%2BBy%2FLJ4%2FMbccbYYapQhng5Z13CzmHxnCEahM3dOamlJfhxJNYQjxrwApFhZx3jLB4aU5idS8casetsr%2BmsYuSnSuAmHsBd9mpI5Y5wFLsV%2FWMUfh44WJHXpzTWHTTiUokB8MFvOHT%2BlKX63VjkpghHNefAcKVGgNcgMvmKQtc2lG80B2FuOEGlpbf5aaHJIpbGnypkvVPUtA7cNrd84%2FNzM62qiOA9z1aUvrneCDzepsqQqJMDPKaUHtPGFszsyQ%2Fyt2fWPpYeZkKPL4aYOJYKB8kDhQtt8TCN7dDEBjqkAYrDIuG%2FqasJ5sje3dWzEQfSTw7mQQA84R3DwKCGYQA9boSVV%2FlOluSnXkgWRj0E6cSf86NthauGQKRip7ISW0fQQAFf78SKTroCSDH%2FfdjUqbSwuTfd4n249%2BQSWfWnRudZchjI%2FhyPVzJFfzS4rogJuJADyMX4BZUITQSUEmnCfIDlpM60Zjy6G7OOgh6QJXUl3BgFFk0%2F%2BlMq9JfpTP%2BVFBX6&X-Amz-Signature=31c5ad9edb3cf6a9bb64e4a85c90ecded97c1fe644e571c6fbc3396a6fc7f464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM624DYI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQChSN1ZGcuWVV2KgcXj%2FT2Allyb0t%2BHFrHFQXmVQOkycwIhAL%2Bd6Q0ukBdEQTRjWm2hsmdTi0XAV5h3KEHEoP2p2p1bKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkUuJZL%2BIVG4tJVcwq3AMoXx%2Fgh9SD8%2BtH9rbEA7QjfT3YK0fTECvPVMLOe3sZHQhkiC17I0IDJre8XnXbdiMgdK7%2FsVPCeFmwYW5vcBAyVNhCXI44QxZwTi8h1nMw4XbCLqny5p9dcWzaBohydtB8P4qy9T37FJX5Tx%2B5lh0hoVHpi%2B94U69lWcdcFglb%2Fl5acDkL%2BQhBHipx%2BsSS%2FiuGjVUmnRvqPI%2B9hLCHuc4Wg3JoCkLu%2FnXjvmN5JgjveW8KlFtafKDXqPbhPueAoMYiD81z9KuLvKxUZRY%2FZh5kxHRf4fxM%2FAiOnuqXpq95RpFmiJo0jF9ne16F%2B5icr8A4zQ1kiz1m9A6klXUXGOVpu0NWL2%2BBy%2FLJ4%2FMbccbYYapQhng5Z13CzmHxnCEahM3dOamlJfhxJNYQjxrwApFhZx3jLB4aU5idS8casetsr%2BmsYuSnSuAmHsBd9mpI5Y5wFLsV%2FWMUfh44WJHXpzTWHTTiUokB8MFvOHT%2BlKX63VjkpghHNefAcKVGgNcgMvmKQtc2lG80B2FuOEGlpbf5aaHJIpbGnypkvVPUtA7cNrd84%2FNzM62qiOA9z1aUvrneCDzepsqQqJMDPKaUHtPGFszsyQ%2Fyt2fWPpYeZkKPL4aYOJYKB8kDhQtt8TCN7dDEBjqkAYrDIuG%2FqasJ5sje3dWzEQfSTw7mQQA84R3DwKCGYQA9boSVV%2FlOluSnXkgWRj0E6cSf86NthauGQKRip7ISW0fQQAFf78SKTroCSDH%2FfdjUqbSwuTfd4n249%2BQSWfWnRudZchjI%2FhyPVzJFfzS4rogJuJADyMX4BZUITQSUEmnCfIDlpM60Zjy6G7OOgh6QJXUl3BgFFk0%2F%2BlMq9JfpTP%2BVFBX6&X-Amz-Signature=8f02da9a5f0385f4007cbcce6d50ee37eaec2cc2d2161a6ff980e59c8ba53ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM624DYI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQChSN1ZGcuWVV2KgcXj%2FT2Allyb0t%2BHFrHFQXmVQOkycwIhAL%2Bd6Q0ukBdEQTRjWm2hsmdTi0XAV5h3KEHEoP2p2p1bKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkUuJZL%2BIVG4tJVcwq3AMoXx%2Fgh9SD8%2BtH9rbEA7QjfT3YK0fTECvPVMLOe3sZHQhkiC17I0IDJre8XnXbdiMgdK7%2FsVPCeFmwYW5vcBAyVNhCXI44QxZwTi8h1nMw4XbCLqny5p9dcWzaBohydtB8P4qy9T37FJX5Tx%2B5lh0hoVHpi%2B94U69lWcdcFglb%2Fl5acDkL%2BQhBHipx%2BsSS%2FiuGjVUmnRvqPI%2B9hLCHuc4Wg3JoCkLu%2FnXjvmN5JgjveW8KlFtafKDXqPbhPueAoMYiD81z9KuLvKxUZRY%2FZh5kxHRf4fxM%2FAiOnuqXpq95RpFmiJo0jF9ne16F%2B5icr8A4zQ1kiz1m9A6klXUXGOVpu0NWL2%2BBy%2FLJ4%2FMbccbYYapQhng5Z13CzmHxnCEahM3dOamlJfhxJNYQjxrwApFhZx3jLB4aU5idS8casetsr%2BmsYuSnSuAmHsBd9mpI5Y5wFLsV%2FWMUfh44WJHXpzTWHTTiUokB8MFvOHT%2BlKX63VjkpghHNefAcKVGgNcgMvmKQtc2lG80B2FuOEGlpbf5aaHJIpbGnypkvVPUtA7cNrd84%2FNzM62qiOA9z1aUvrneCDzepsqQqJMDPKaUHtPGFszsyQ%2Fyt2fWPpYeZkKPL4aYOJYKB8kDhQtt8TCN7dDEBjqkAYrDIuG%2FqasJ5sje3dWzEQfSTw7mQQA84R3DwKCGYQA9boSVV%2FlOluSnXkgWRj0E6cSf86NthauGQKRip7ISW0fQQAFf78SKTroCSDH%2FfdjUqbSwuTfd4n249%2BQSWfWnRudZchjI%2FhyPVzJFfzS4rogJuJADyMX4BZUITQSUEmnCfIDlpM60Zjy6G7OOgh6QJXUl3BgFFk0%2F%2BlMq9JfpTP%2BVFBX6&X-Amz-Signature=3ed90bf016ef2ab44a3428b829d015f2bc9be8106df781fe508064f966162b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM624DYI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQChSN1ZGcuWVV2KgcXj%2FT2Allyb0t%2BHFrHFQXmVQOkycwIhAL%2Bd6Q0ukBdEQTRjWm2hsmdTi0XAV5h3KEHEoP2p2p1bKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkUuJZL%2BIVG4tJVcwq3AMoXx%2Fgh9SD8%2BtH9rbEA7QjfT3YK0fTECvPVMLOe3sZHQhkiC17I0IDJre8XnXbdiMgdK7%2FsVPCeFmwYW5vcBAyVNhCXI44QxZwTi8h1nMw4XbCLqny5p9dcWzaBohydtB8P4qy9T37FJX5Tx%2B5lh0hoVHpi%2B94U69lWcdcFglb%2Fl5acDkL%2BQhBHipx%2BsSS%2FiuGjVUmnRvqPI%2B9hLCHuc4Wg3JoCkLu%2FnXjvmN5JgjveW8KlFtafKDXqPbhPueAoMYiD81z9KuLvKxUZRY%2FZh5kxHRf4fxM%2FAiOnuqXpq95RpFmiJo0jF9ne16F%2B5icr8A4zQ1kiz1m9A6klXUXGOVpu0NWL2%2BBy%2FLJ4%2FMbccbYYapQhng5Z13CzmHxnCEahM3dOamlJfhxJNYQjxrwApFhZx3jLB4aU5idS8casetsr%2BmsYuSnSuAmHsBd9mpI5Y5wFLsV%2FWMUfh44WJHXpzTWHTTiUokB8MFvOHT%2BlKX63VjkpghHNefAcKVGgNcgMvmKQtc2lG80B2FuOEGlpbf5aaHJIpbGnypkvVPUtA7cNrd84%2FNzM62qiOA9z1aUvrneCDzepsqQqJMDPKaUHtPGFszsyQ%2Fyt2fWPpYeZkKPL4aYOJYKB8kDhQtt8TCN7dDEBjqkAYrDIuG%2FqasJ5sje3dWzEQfSTw7mQQA84R3DwKCGYQA9boSVV%2FlOluSnXkgWRj0E6cSf86NthauGQKRip7ISW0fQQAFf78SKTroCSDH%2FfdjUqbSwuTfd4n249%2BQSWfWnRudZchjI%2FhyPVzJFfzS4rogJuJADyMX4BZUITQSUEmnCfIDlpM60Zjy6G7OOgh6QJXUl3BgFFk0%2F%2BlMq9JfpTP%2BVFBX6&X-Amz-Signature=42bfffdfdb60c087ccaecdb971fc15aa1f79cc756d52192127f24dcdf4151255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM624DYI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQChSN1ZGcuWVV2KgcXj%2FT2Allyb0t%2BHFrHFQXmVQOkycwIhAL%2Bd6Q0ukBdEQTRjWm2hsmdTi0XAV5h3KEHEoP2p2p1bKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkUuJZL%2BIVG4tJVcwq3AMoXx%2Fgh9SD8%2BtH9rbEA7QjfT3YK0fTECvPVMLOe3sZHQhkiC17I0IDJre8XnXbdiMgdK7%2FsVPCeFmwYW5vcBAyVNhCXI44QxZwTi8h1nMw4XbCLqny5p9dcWzaBohydtB8P4qy9T37FJX5Tx%2B5lh0hoVHpi%2B94U69lWcdcFglb%2Fl5acDkL%2BQhBHipx%2BsSS%2FiuGjVUmnRvqPI%2B9hLCHuc4Wg3JoCkLu%2FnXjvmN5JgjveW8KlFtafKDXqPbhPueAoMYiD81z9KuLvKxUZRY%2FZh5kxHRf4fxM%2FAiOnuqXpq95RpFmiJo0jF9ne16F%2B5icr8A4zQ1kiz1m9A6klXUXGOVpu0NWL2%2BBy%2FLJ4%2FMbccbYYapQhng5Z13CzmHxnCEahM3dOamlJfhxJNYQjxrwApFhZx3jLB4aU5idS8casetsr%2BmsYuSnSuAmHsBd9mpI5Y5wFLsV%2FWMUfh44WJHXpzTWHTTiUokB8MFvOHT%2BlKX63VjkpghHNefAcKVGgNcgMvmKQtc2lG80B2FuOEGlpbf5aaHJIpbGnypkvVPUtA7cNrd84%2FNzM62qiOA9z1aUvrneCDzepsqQqJMDPKaUHtPGFszsyQ%2Fyt2fWPpYeZkKPL4aYOJYKB8kDhQtt8TCN7dDEBjqkAYrDIuG%2FqasJ5sje3dWzEQfSTw7mQQA84R3DwKCGYQA9boSVV%2FlOluSnXkgWRj0E6cSf86NthauGQKRip7ISW0fQQAFf78SKTroCSDH%2FfdjUqbSwuTfd4n249%2BQSWfWnRudZchjI%2FhyPVzJFfzS4rogJuJADyMX4BZUITQSUEmnCfIDlpM60Zjy6G7OOgh6QJXUl3BgFFk0%2F%2BlMq9JfpTP%2BVFBX6&X-Amz-Signature=a3fc276e4aa3e1bd93634fdba81b1fde2cf50f4772880b8e3231d8a7af906d1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM624DYI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQChSN1ZGcuWVV2KgcXj%2FT2Allyb0t%2BHFrHFQXmVQOkycwIhAL%2Bd6Q0ukBdEQTRjWm2hsmdTi0XAV5h3KEHEoP2p2p1bKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkUuJZL%2BIVG4tJVcwq3AMoXx%2Fgh9SD8%2BtH9rbEA7QjfT3YK0fTECvPVMLOe3sZHQhkiC17I0IDJre8XnXbdiMgdK7%2FsVPCeFmwYW5vcBAyVNhCXI44QxZwTi8h1nMw4XbCLqny5p9dcWzaBohydtB8P4qy9T37FJX5Tx%2B5lh0hoVHpi%2B94U69lWcdcFglb%2Fl5acDkL%2BQhBHipx%2BsSS%2FiuGjVUmnRvqPI%2B9hLCHuc4Wg3JoCkLu%2FnXjvmN5JgjveW8KlFtafKDXqPbhPueAoMYiD81z9KuLvKxUZRY%2FZh5kxHRf4fxM%2FAiOnuqXpq95RpFmiJo0jF9ne16F%2B5icr8A4zQ1kiz1m9A6klXUXGOVpu0NWL2%2BBy%2FLJ4%2FMbccbYYapQhng5Z13CzmHxnCEahM3dOamlJfhxJNYQjxrwApFhZx3jLB4aU5idS8casetsr%2BmsYuSnSuAmHsBd9mpI5Y5wFLsV%2FWMUfh44WJHXpzTWHTTiUokB8MFvOHT%2BlKX63VjkpghHNefAcKVGgNcgMvmKQtc2lG80B2FuOEGlpbf5aaHJIpbGnypkvVPUtA7cNrd84%2FNzM62qiOA9z1aUvrneCDzepsqQqJMDPKaUHtPGFszsyQ%2Fyt2fWPpYeZkKPL4aYOJYKB8kDhQtt8TCN7dDEBjqkAYrDIuG%2FqasJ5sje3dWzEQfSTw7mQQA84R3DwKCGYQA9boSVV%2FlOluSnXkgWRj0E6cSf86NthauGQKRip7ISW0fQQAFf78SKTroCSDH%2FfdjUqbSwuTfd4n249%2BQSWfWnRudZchjI%2FhyPVzJFfzS4rogJuJADyMX4BZUITQSUEmnCfIDlpM60Zjy6G7OOgh6QJXUl3BgFFk0%2F%2BlMq9JfpTP%2BVFBX6&X-Amz-Signature=d85afb38f5fb5b3486f9bce14096aee0bc36c106fd6ad923b8c05b58ad2a5c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
