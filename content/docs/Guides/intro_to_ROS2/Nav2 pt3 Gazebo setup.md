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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4B3DYMK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi0iDSNk4%2F%2B7LZuvUEbIVk2bUOVIxG3mMPXOwhvtpldAiEApGCgfnPowK8ZmdOo0y8TFHFi4ZM1g2w9ySMJ6PO8%2Fn0qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsMfta5aZmdt9B8OircA3Zsap9YvsDCRWDhvASMPX6JlYSkaJ5tA0FhE2Z6Uh%2Fc%2F70e4vDlKuWG88drJVVixpV2KNaaQqUoTwAZ%2Bu7RLLdnqflEYXwyPWRRYG1irpQZEgz%2FTk4ILqXUfSmUxDdBKzDlkhONiIFKCn7xBpJwlkVMa1ySh6gXDYcfFT2CCY3UMQ1E97wvcYYTVbOLUjhvkhkwQI9O%2FhPkaACgDv3HtlyXZ7kgE9K%2F2kUCeAx1mpVD0GSvnmfZqSRaUWqdhlWonfykrl31ARBXdiS483s7jqVaD4HKBY4VyfqBnCkL84GQ1OY8qNp%2BosWy4iXnxrrpjbx1UobGUkwblj30q65nHis%2BP3bRiTWjN%2B0ycgpvVJNPT0aPQsYC0tzikfs3TU0duioS2nhyNST4GuzhWncpN8CGyItKvsuGqZRtArNF2wZmooJ3RB3FsR0NNl2FZP1CpuZ95SGUb263YWeELZT5cIHlPE2V6XMk6%2BXpHsY4jWsGp1zo9%2B7ZknEgJKVREOAYb025udw%2B03BxOUwkfYYT5aadrAlZ8d152NxjftdJShDnfP7alYC%2BwZZ1jZ4kdKXkDoUm3kxbvExg5o902V8IpQeu8ztOOGMqQQl4vwY4BHblLJbCE2zJVjqKlgejMNWh6MQGOqUBhKL5P9mgIp%2Bn35ClSl00FWobjdK3fDED5x86mT0n21Q7lrcqlxO8ubGsTwmFT1teRzlVFozqaiXzvl7iPTXKSJk7tzJ2Al8yArkLuqK05XzP1fUJ9dUurP%2BhvFGWmQNDj77FW7HaykCIav46GZd9eUi0tX6K0kaZtxJ5l9Fd8%2FfHxNH4aM8M%2Fyw3m%2B8gEU0nHRDfdnNGD%2BustbDEQkumvef%2BuN5P&X-Amz-Signature=fde65e6cef07cd049e7bc68acd30e30fcab92296113fa85949f28fb5ea6de01e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4B3DYMK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi0iDSNk4%2F%2B7LZuvUEbIVk2bUOVIxG3mMPXOwhvtpldAiEApGCgfnPowK8ZmdOo0y8TFHFi4ZM1g2w9ySMJ6PO8%2Fn0qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsMfta5aZmdt9B8OircA3Zsap9YvsDCRWDhvASMPX6JlYSkaJ5tA0FhE2Z6Uh%2Fc%2F70e4vDlKuWG88drJVVixpV2KNaaQqUoTwAZ%2Bu7RLLdnqflEYXwyPWRRYG1irpQZEgz%2FTk4ILqXUfSmUxDdBKzDlkhONiIFKCn7xBpJwlkVMa1ySh6gXDYcfFT2CCY3UMQ1E97wvcYYTVbOLUjhvkhkwQI9O%2FhPkaACgDv3HtlyXZ7kgE9K%2F2kUCeAx1mpVD0GSvnmfZqSRaUWqdhlWonfykrl31ARBXdiS483s7jqVaD4HKBY4VyfqBnCkL84GQ1OY8qNp%2BosWy4iXnxrrpjbx1UobGUkwblj30q65nHis%2BP3bRiTWjN%2B0ycgpvVJNPT0aPQsYC0tzikfs3TU0duioS2nhyNST4GuzhWncpN8CGyItKvsuGqZRtArNF2wZmooJ3RB3FsR0NNl2FZP1CpuZ95SGUb263YWeELZT5cIHlPE2V6XMk6%2BXpHsY4jWsGp1zo9%2B7ZknEgJKVREOAYb025udw%2B03BxOUwkfYYT5aadrAlZ8d152NxjftdJShDnfP7alYC%2BwZZ1jZ4kdKXkDoUm3kxbvExg5o902V8IpQeu8ztOOGMqQQl4vwY4BHblLJbCE2zJVjqKlgejMNWh6MQGOqUBhKL5P9mgIp%2Bn35ClSl00FWobjdK3fDED5x86mT0n21Q7lrcqlxO8ubGsTwmFT1teRzlVFozqaiXzvl7iPTXKSJk7tzJ2Al8yArkLuqK05XzP1fUJ9dUurP%2BhvFGWmQNDj77FW7HaykCIav46GZd9eUi0tX6K0kaZtxJ5l9Fd8%2FfHxNH4aM8M%2Fyw3m%2B8gEU0nHRDfdnNGD%2BustbDEQkumvef%2BuN5P&X-Amz-Signature=52a1c52b9f1096e9022632d7a9e81c2d90aba26b14d056fb76e9c547fb6f624b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4B3DYMK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi0iDSNk4%2F%2B7LZuvUEbIVk2bUOVIxG3mMPXOwhvtpldAiEApGCgfnPowK8ZmdOo0y8TFHFi4ZM1g2w9ySMJ6PO8%2Fn0qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsMfta5aZmdt9B8OircA3Zsap9YvsDCRWDhvASMPX6JlYSkaJ5tA0FhE2Z6Uh%2Fc%2F70e4vDlKuWG88drJVVixpV2KNaaQqUoTwAZ%2Bu7RLLdnqflEYXwyPWRRYG1irpQZEgz%2FTk4ILqXUfSmUxDdBKzDlkhONiIFKCn7xBpJwlkVMa1ySh6gXDYcfFT2CCY3UMQ1E97wvcYYTVbOLUjhvkhkwQI9O%2FhPkaACgDv3HtlyXZ7kgE9K%2F2kUCeAx1mpVD0GSvnmfZqSRaUWqdhlWonfykrl31ARBXdiS483s7jqVaD4HKBY4VyfqBnCkL84GQ1OY8qNp%2BosWy4iXnxrrpjbx1UobGUkwblj30q65nHis%2BP3bRiTWjN%2B0ycgpvVJNPT0aPQsYC0tzikfs3TU0duioS2nhyNST4GuzhWncpN8CGyItKvsuGqZRtArNF2wZmooJ3RB3FsR0NNl2FZP1CpuZ95SGUb263YWeELZT5cIHlPE2V6XMk6%2BXpHsY4jWsGp1zo9%2B7ZknEgJKVREOAYb025udw%2B03BxOUwkfYYT5aadrAlZ8d152NxjftdJShDnfP7alYC%2BwZZ1jZ4kdKXkDoUm3kxbvExg5o902V8IpQeu8ztOOGMqQQl4vwY4BHblLJbCE2zJVjqKlgejMNWh6MQGOqUBhKL5P9mgIp%2Bn35ClSl00FWobjdK3fDED5x86mT0n21Q7lrcqlxO8ubGsTwmFT1teRzlVFozqaiXzvl7iPTXKSJk7tzJ2Al8yArkLuqK05XzP1fUJ9dUurP%2BhvFGWmQNDj77FW7HaykCIav46GZd9eUi0tX6K0kaZtxJ5l9Fd8%2FfHxNH4aM8M%2Fyw3m%2B8gEU0nHRDfdnNGD%2BustbDEQkumvef%2BuN5P&X-Amz-Signature=f9548573116840fcfdc593637c0a6bb8ec1e3474bf1f5a6dd0d3828db659fa09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4B3DYMK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi0iDSNk4%2F%2B7LZuvUEbIVk2bUOVIxG3mMPXOwhvtpldAiEApGCgfnPowK8ZmdOo0y8TFHFi4ZM1g2w9ySMJ6PO8%2Fn0qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsMfta5aZmdt9B8OircA3Zsap9YvsDCRWDhvASMPX6JlYSkaJ5tA0FhE2Z6Uh%2Fc%2F70e4vDlKuWG88drJVVixpV2KNaaQqUoTwAZ%2Bu7RLLdnqflEYXwyPWRRYG1irpQZEgz%2FTk4ILqXUfSmUxDdBKzDlkhONiIFKCn7xBpJwlkVMa1ySh6gXDYcfFT2CCY3UMQ1E97wvcYYTVbOLUjhvkhkwQI9O%2FhPkaACgDv3HtlyXZ7kgE9K%2F2kUCeAx1mpVD0GSvnmfZqSRaUWqdhlWonfykrl31ARBXdiS483s7jqVaD4HKBY4VyfqBnCkL84GQ1OY8qNp%2BosWy4iXnxrrpjbx1UobGUkwblj30q65nHis%2BP3bRiTWjN%2B0ycgpvVJNPT0aPQsYC0tzikfs3TU0duioS2nhyNST4GuzhWncpN8CGyItKvsuGqZRtArNF2wZmooJ3RB3FsR0NNl2FZP1CpuZ95SGUb263YWeELZT5cIHlPE2V6XMk6%2BXpHsY4jWsGp1zo9%2B7ZknEgJKVREOAYb025udw%2B03BxOUwkfYYT5aadrAlZ8d152NxjftdJShDnfP7alYC%2BwZZ1jZ4kdKXkDoUm3kxbvExg5o902V8IpQeu8ztOOGMqQQl4vwY4BHblLJbCE2zJVjqKlgejMNWh6MQGOqUBhKL5P9mgIp%2Bn35ClSl00FWobjdK3fDED5x86mT0n21Q7lrcqlxO8ubGsTwmFT1teRzlVFozqaiXzvl7iPTXKSJk7tzJ2Al8yArkLuqK05XzP1fUJ9dUurP%2BhvFGWmQNDj77FW7HaykCIav46GZd9eUi0tX6K0kaZtxJ5l9Fd8%2FfHxNH4aM8M%2Fyw3m%2B8gEU0nHRDfdnNGD%2BustbDEQkumvef%2BuN5P&X-Amz-Signature=466e79127cb5a85cb1af487c6e8f8a8312263c0dd8ef24c4978e245f30ef9b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WLQXW5K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBscDJ5ilAtrm71wxo0gjfnqDzn%2FjLWHc4v%2FgsiL0y7rAiBqAOFH6Ebjl6VAEsW7vAVkZ4J58YkQ7uGNK4xjxgA97iqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0zYrP1qxxiXFk7KNKtwD5zF%2FAI%2F2N%2FUJgWPDiqiFWaxv4Ed%2BWMaxGhzZeJA4xgFoOR2%2BEIJ3H4bKWB5Yw26%2FUB1AFZ1jQL4%2FYQ1ZiN1ErIaQMqGcD3bTxQ6GUvIYPPgWhPsqqtTL%2FmFhgf9eDRIR4vvzK7I4eEUl3f%2BnfQ4wlKpAG6%2FDPZ4ElJg1pdjn%2B3N%2Fk0QSERJ9%2Bx0fvdw%2FX%2FR5nVAV6EehYDECpQnv%2B9GoTixGP0yLlSuioN8lGoELpOPAE8DLx8cbxMi6QNyXAgY9g%2B4v6qjy432JID%2F1WdPlZg2R2iYFoXddl%2FksqC%2FSmC2U20Dc0xCREe7tPbi9xV%2F5bKQdTj4rmDzRMm1R1EMEv%2BJoRoxy2%2BGsYtc5ZITYfg6fSgpiQf%2Bfhygrwat2BXQXAa4ba0GwyRqbaJz7WAXGwQSVlL5caE4j22JLRHa8wTN2T1pB7ItA3jHyjMvIzAEKpPiztXLUkhK9DfAi7o30iPZjFZcAmhyX71QUYBtyRe6s4CpmlNFB5OkocoUBRyjH%2Fy6ZwfKesrLs3phBVSIdDB7dphgImnFT3tTCpg3Z3AflMbrlZn46hcODNiv9f%2Bv3hZUeWjRvE3Ofx00W6sfykYaWQeivfGOL0zNjlKaG42lH3YDsizAq44CpC3swjqLoxAY6pgFt6FWPUytzLBoe1sbOXUqp23eNDrJLVPCFC1yws1tHg9sTA3nUvupyNiH2deQTlZ48qk%2BgWczaxAFzCeD6fgQ2CDa2HiL2y1WQRlyAom0XVpk5siXcHFrwN6ItInQJokKWHacUX33CKQBIOmbBv0m4UaWCIsmqSW9e%2Fmq%2BNHWomB4hu%2BY2vxQ7HRE1nMKZsLB5fLat%2F0gYSwSaWyFkSuIIoRGsVZ6A&X-Amz-Signature=d83d5b895b3c2cbeb0af9f6d94143b8853a6964547c4b712ea383b6bd0d7f24a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4B3DYMK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi0iDSNk4%2F%2B7LZuvUEbIVk2bUOVIxG3mMPXOwhvtpldAiEApGCgfnPowK8ZmdOo0y8TFHFi4ZM1g2w9ySMJ6PO8%2Fn0qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsMfta5aZmdt9B8OircA3Zsap9YvsDCRWDhvASMPX6JlYSkaJ5tA0FhE2Z6Uh%2Fc%2F70e4vDlKuWG88drJVVixpV2KNaaQqUoTwAZ%2Bu7RLLdnqflEYXwyPWRRYG1irpQZEgz%2FTk4ILqXUfSmUxDdBKzDlkhONiIFKCn7xBpJwlkVMa1ySh6gXDYcfFT2CCY3UMQ1E97wvcYYTVbOLUjhvkhkwQI9O%2FhPkaACgDv3HtlyXZ7kgE9K%2F2kUCeAx1mpVD0GSvnmfZqSRaUWqdhlWonfykrl31ARBXdiS483s7jqVaD4HKBY4VyfqBnCkL84GQ1OY8qNp%2BosWy4iXnxrrpjbx1UobGUkwblj30q65nHis%2BP3bRiTWjN%2B0ycgpvVJNPT0aPQsYC0tzikfs3TU0duioS2nhyNST4GuzhWncpN8CGyItKvsuGqZRtArNF2wZmooJ3RB3FsR0NNl2FZP1CpuZ95SGUb263YWeELZT5cIHlPE2V6XMk6%2BXpHsY4jWsGp1zo9%2B7ZknEgJKVREOAYb025udw%2B03BxOUwkfYYT5aadrAlZ8d152NxjftdJShDnfP7alYC%2BwZZ1jZ4kdKXkDoUm3kxbvExg5o902V8IpQeu8ztOOGMqQQl4vwY4BHblLJbCE2zJVjqKlgejMNWh6MQGOqUBhKL5P9mgIp%2Bn35ClSl00FWobjdK3fDED5x86mT0n21Q7lrcqlxO8ubGsTwmFT1teRzlVFozqaiXzvl7iPTXKSJk7tzJ2Al8yArkLuqK05XzP1fUJ9dUurP%2BhvFGWmQNDj77FW7HaykCIav46GZd9eUi0tX6K0kaZtxJ5l9Fd8%2FfHxNH4aM8M%2Fyw3m%2B8gEU0nHRDfdnNGD%2BustbDEQkumvef%2BuN5P&X-Amz-Signature=af5b6701ff8dfaf932d1ad9b406079446f7e0568f2470e7cb1e8aadadbd6eecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4B3DYMK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi0iDSNk4%2F%2B7LZuvUEbIVk2bUOVIxG3mMPXOwhvtpldAiEApGCgfnPowK8ZmdOo0y8TFHFi4ZM1g2w9ySMJ6PO8%2Fn0qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsMfta5aZmdt9B8OircA3Zsap9YvsDCRWDhvASMPX6JlYSkaJ5tA0FhE2Z6Uh%2Fc%2F70e4vDlKuWG88drJVVixpV2KNaaQqUoTwAZ%2Bu7RLLdnqflEYXwyPWRRYG1irpQZEgz%2FTk4ILqXUfSmUxDdBKzDlkhONiIFKCn7xBpJwlkVMa1ySh6gXDYcfFT2CCY3UMQ1E97wvcYYTVbOLUjhvkhkwQI9O%2FhPkaACgDv3HtlyXZ7kgE9K%2F2kUCeAx1mpVD0GSvnmfZqSRaUWqdhlWonfykrl31ARBXdiS483s7jqVaD4HKBY4VyfqBnCkL84GQ1OY8qNp%2BosWy4iXnxrrpjbx1UobGUkwblj30q65nHis%2BP3bRiTWjN%2B0ycgpvVJNPT0aPQsYC0tzikfs3TU0duioS2nhyNST4GuzhWncpN8CGyItKvsuGqZRtArNF2wZmooJ3RB3FsR0NNl2FZP1CpuZ95SGUb263YWeELZT5cIHlPE2V6XMk6%2BXpHsY4jWsGp1zo9%2B7ZknEgJKVREOAYb025udw%2B03BxOUwkfYYT5aadrAlZ8d152NxjftdJShDnfP7alYC%2BwZZ1jZ4kdKXkDoUm3kxbvExg5o902V8IpQeu8ztOOGMqQQl4vwY4BHblLJbCE2zJVjqKlgejMNWh6MQGOqUBhKL5P9mgIp%2Bn35ClSl00FWobjdK3fDED5x86mT0n21Q7lrcqlxO8ubGsTwmFT1teRzlVFozqaiXzvl7iPTXKSJk7tzJ2Al8yArkLuqK05XzP1fUJ9dUurP%2BhvFGWmQNDj77FW7HaykCIav46GZd9eUi0tX6K0kaZtxJ5l9Fd8%2FfHxNH4aM8M%2Fyw3m%2B8gEU0nHRDfdnNGD%2BustbDEQkumvef%2BuN5P&X-Amz-Signature=a00843c03279ffa12f17c6e46c0ef2116d94c86384c5723ea66d0ae2058074e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4B3DYMK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi0iDSNk4%2F%2B7LZuvUEbIVk2bUOVIxG3mMPXOwhvtpldAiEApGCgfnPowK8ZmdOo0y8TFHFi4ZM1g2w9ySMJ6PO8%2Fn0qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsMfta5aZmdt9B8OircA3Zsap9YvsDCRWDhvASMPX6JlYSkaJ5tA0FhE2Z6Uh%2Fc%2F70e4vDlKuWG88drJVVixpV2KNaaQqUoTwAZ%2Bu7RLLdnqflEYXwyPWRRYG1irpQZEgz%2FTk4ILqXUfSmUxDdBKzDlkhONiIFKCn7xBpJwlkVMa1ySh6gXDYcfFT2CCY3UMQ1E97wvcYYTVbOLUjhvkhkwQI9O%2FhPkaACgDv3HtlyXZ7kgE9K%2F2kUCeAx1mpVD0GSvnmfZqSRaUWqdhlWonfykrl31ARBXdiS483s7jqVaD4HKBY4VyfqBnCkL84GQ1OY8qNp%2BosWy4iXnxrrpjbx1UobGUkwblj30q65nHis%2BP3bRiTWjN%2B0ycgpvVJNPT0aPQsYC0tzikfs3TU0duioS2nhyNST4GuzhWncpN8CGyItKvsuGqZRtArNF2wZmooJ3RB3FsR0NNl2FZP1CpuZ95SGUb263YWeELZT5cIHlPE2V6XMk6%2BXpHsY4jWsGp1zo9%2B7ZknEgJKVREOAYb025udw%2B03BxOUwkfYYT5aadrAlZ8d152NxjftdJShDnfP7alYC%2BwZZ1jZ4kdKXkDoUm3kxbvExg5o902V8IpQeu8ztOOGMqQQl4vwY4BHblLJbCE2zJVjqKlgejMNWh6MQGOqUBhKL5P9mgIp%2Bn35ClSl00FWobjdK3fDED5x86mT0n21Q7lrcqlxO8ubGsTwmFT1teRzlVFozqaiXzvl7iPTXKSJk7tzJ2Al8yArkLuqK05XzP1fUJ9dUurP%2BhvFGWmQNDj77FW7HaykCIav46GZd9eUi0tX6K0kaZtxJ5l9Fd8%2FfHxNH4aM8M%2Fyw3m%2B8gEU0nHRDfdnNGD%2BustbDEQkumvef%2BuN5P&X-Amz-Signature=d9d4cf7681e11e992b8238f61392c09e75d7affa4ab312107c4c9951a404b01b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4B3DYMK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi0iDSNk4%2F%2B7LZuvUEbIVk2bUOVIxG3mMPXOwhvtpldAiEApGCgfnPowK8ZmdOo0y8TFHFi4ZM1g2w9ySMJ6PO8%2Fn0qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsMfta5aZmdt9B8OircA3Zsap9YvsDCRWDhvASMPX6JlYSkaJ5tA0FhE2Z6Uh%2Fc%2F70e4vDlKuWG88drJVVixpV2KNaaQqUoTwAZ%2Bu7RLLdnqflEYXwyPWRRYG1irpQZEgz%2FTk4ILqXUfSmUxDdBKzDlkhONiIFKCn7xBpJwlkVMa1ySh6gXDYcfFT2CCY3UMQ1E97wvcYYTVbOLUjhvkhkwQI9O%2FhPkaACgDv3HtlyXZ7kgE9K%2F2kUCeAx1mpVD0GSvnmfZqSRaUWqdhlWonfykrl31ARBXdiS483s7jqVaD4HKBY4VyfqBnCkL84GQ1OY8qNp%2BosWy4iXnxrrpjbx1UobGUkwblj30q65nHis%2BP3bRiTWjN%2B0ycgpvVJNPT0aPQsYC0tzikfs3TU0duioS2nhyNST4GuzhWncpN8CGyItKvsuGqZRtArNF2wZmooJ3RB3FsR0NNl2FZP1CpuZ95SGUb263YWeELZT5cIHlPE2V6XMk6%2BXpHsY4jWsGp1zo9%2B7ZknEgJKVREOAYb025udw%2B03BxOUwkfYYT5aadrAlZ8d152NxjftdJShDnfP7alYC%2BwZZ1jZ4kdKXkDoUm3kxbvExg5o902V8IpQeu8ztOOGMqQQl4vwY4BHblLJbCE2zJVjqKlgejMNWh6MQGOqUBhKL5P9mgIp%2Bn35ClSl00FWobjdK3fDED5x86mT0n21Q7lrcqlxO8ubGsTwmFT1teRzlVFozqaiXzvl7iPTXKSJk7tzJ2Al8yArkLuqK05XzP1fUJ9dUurP%2BhvFGWmQNDj77FW7HaykCIav46GZd9eUi0tX6K0kaZtxJ5l9Fd8%2FfHxNH4aM8M%2Fyw3m%2B8gEU0nHRDfdnNGD%2BustbDEQkumvef%2BuN5P&X-Amz-Signature=c39ac04d50fc19081345ad5f8835d652fe4c3f9de9a81ebd453261005c38a0c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4B3DYMK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi0iDSNk4%2F%2B7LZuvUEbIVk2bUOVIxG3mMPXOwhvtpldAiEApGCgfnPowK8ZmdOo0y8TFHFi4ZM1g2w9ySMJ6PO8%2Fn0qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsMfta5aZmdt9B8OircA3Zsap9YvsDCRWDhvASMPX6JlYSkaJ5tA0FhE2Z6Uh%2Fc%2F70e4vDlKuWG88drJVVixpV2KNaaQqUoTwAZ%2Bu7RLLdnqflEYXwyPWRRYG1irpQZEgz%2FTk4ILqXUfSmUxDdBKzDlkhONiIFKCn7xBpJwlkVMa1ySh6gXDYcfFT2CCY3UMQ1E97wvcYYTVbOLUjhvkhkwQI9O%2FhPkaACgDv3HtlyXZ7kgE9K%2F2kUCeAx1mpVD0GSvnmfZqSRaUWqdhlWonfykrl31ARBXdiS483s7jqVaD4HKBY4VyfqBnCkL84GQ1OY8qNp%2BosWy4iXnxrrpjbx1UobGUkwblj30q65nHis%2BP3bRiTWjN%2B0ycgpvVJNPT0aPQsYC0tzikfs3TU0duioS2nhyNST4GuzhWncpN8CGyItKvsuGqZRtArNF2wZmooJ3RB3FsR0NNl2FZP1CpuZ95SGUb263YWeELZT5cIHlPE2V6XMk6%2BXpHsY4jWsGp1zo9%2B7ZknEgJKVREOAYb025udw%2B03BxOUwkfYYT5aadrAlZ8d152NxjftdJShDnfP7alYC%2BwZZ1jZ4kdKXkDoUm3kxbvExg5o902V8IpQeu8ztOOGMqQQl4vwY4BHblLJbCE2zJVjqKlgejMNWh6MQGOqUBhKL5P9mgIp%2Bn35ClSl00FWobjdK3fDED5x86mT0n21Q7lrcqlxO8ubGsTwmFT1teRzlVFozqaiXzvl7iPTXKSJk7tzJ2Al8yArkLuqK05XzP1fUJ9dUurP%2BhvFGWmQNDj77FW7HaykCIav46GZd9eUi0tX6K0kaZtxJ5l9Fd8%2FfHxNH4aM8M%2Fyw3m%2B8gEU0nHRDfdnNGD%2BustbDEQkumvef%2BuN5P&X-Amz-Signature=fbbfb053c9932708fc8ded56f981dab820e6adbe6559e641c399da6b11800c05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4B3DYMK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi0iDSNk4%2F%2B7LZuvUEbIVk2bUOVIxG3mMPXOwhvtpldAiEApGCgfnPowK8ZmdOo0y8TFHFi4ZM1g2w9ySMJ6PO8%2Fn0qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsMfta5aZmdt9B8OircA3Zsap9YvsDCRWDhvASMPX6JlYSkaJ5tA0FhE2Z6Uh%2Fc%2F70e4vDlKuWG88drJVVixpV2KNaaQqUoTwAZ%2Bu7RLLdnqflEYXwyPWRRYG1irpQZEgz%2FTk4ILqXUfSmUxDdBKzDlkhONiIFKCn7xBpJwlkVMa1ySh6gXDYcfFT2CCY3UMQ1E97wvcYYTVbOLUjhvkhkwQI9O%2FhPkaACgDv3HtlyXZ7kgE9K%2F2kUCeAx1mpVD0GSvnmfZqSRaUWqdhlWonfykrl31ARBXdiS483s7jqVaD4HKBY4VyfqBnCkL84GQ1OY8qNp%2BosWy4iXnxrrpjbx1UobGUkwblj30q65nHis%2BP3bRiTWjN%2B0ycgpvVJNPT0aPQsYC0tzikfs3TU0duioS2nhyNST4GuzhWncpN8CGyItKvsuGqZRtArNF2wZmooJ3RB3FsR0NNl2FZP1CpuZ95SGUb263YWeELZT5cIHlPE2V6XMk6%2BXpHsY4jWsGp1zo9%2B7ZknEgJKVREOAYb025udw%2B03BxOUwkfYYT5aadrAlZ8d152NxjftdJShDnfP7alYC%2BwZZ1jZ4kdKXkDoUm3kxbvExg5o902V8IpQeu8ztOOGMqQQl4vwY4BHblLJbCE2zJVjqKlgejMNWh6MQGOqUBhKL5P9mgIp%2Bn35ClSl00FWobjdK3fDED5x86mT0n21Q7lrcqlxO8ubGsTwmFT1teRzlVFozqaiXzvl7iPTXKSJk7tzJ2Al8yArkLuqK05XzP1fUJ9dUurP%2BhvFGWmQNDj77FW7HaykCIav46GZd9eUi0tX6K0kaZtxJ5l9Fd8%2FfHxNH4aM8M%2Fyw3m%2B8gEU0nHRDfdnNGD%2BustbDEQkumvef%2BuN5P&X-Amz-Signature=f905669505daac6d245929c2962de8198ad523cf351fd38eb6c1529b4be21118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
