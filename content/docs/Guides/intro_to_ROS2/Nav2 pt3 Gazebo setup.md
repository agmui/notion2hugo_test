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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX26C46O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDIda%2Bnf2O0gVPd7DT2GRyuFEHtMGsMmbUh8uSMeL0TswIhAM%2BzzV0WlpDjcp9u%2BJxkbJU53j5mEi%2Bc4zVHWXd%2FW0weKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhnJJYFsNRDaKc4eQq3APcYg8GCtDU8pdPURM%2F50B2%2FXnOWG94FEyWL2A6ml57QZejpwbu4HqjAmKIsjMZSoDZnhsI1p0Vp9pIIvV4Mqh4TgCnT6sj5xbtVWMcB0o7qP41o9DEUV5S6gQ3jSjROYyAy9lidOo4vUZ09oREoczdLmYvjG5I%2Fn4fYhDlXC9hrGROCSi5Gyg%2F3xMECimWFu1ewqePlXfcKBlGBCVb6q5u7nEd6JCPRJqOmmAX%2BD7r4y6HVgpg4uBYEmwz0bX7gWEZg%2FeOwA9vYsobf0AeCASKaR3qJD6%2BJxMhBjNPND6q%2FfUvuGNchsrKTCZ4ad5GzibtDzwzCi3bc1SlYtunUU%2F9t3%2FD2erxyxFcDZkYdUhwT%2BJF%2ByZw1LW43k2Osb2Hgy7FK75IjBhfxy6f0CBwZj%2B0%2BvN8uFNrtYC6fIbmJzPWWD6L%2B6aZ7G94qE4hhzV9RbrubMTmGeAecOwoCGhGBNzAH1YWi5tXE4uX%2FYGVbKXJN1VrbV5F%2Fqr059WwRnh5SGvy6saibiYepC%2F70gulilSB%2BZp434%2FB5BuUWCznkv6R%2FJUkh%2FZdpFYxQDH708DSW6NTwoEs5jifyghfLywaFGWocMxqnmhk%2BS04952MVMnEZWvSfsHY9kq%2Bh382dTC08KfGBjqkAWWFd07HXwCMvPmsw866qvLL6icJG50W88Jzotkhw2WRdB%2BF2u8jgM%2F9zUIYKd%2BxPurOjcfIltErOqWDpuk%2BWnpPv0vaBRi5w6UYG94JHMRtKGX%2BXv3j09%2BP48jKaSkS9Z%2B1TzqxEdmhpplcH4s4sgpszs0qDbTuBxv6%2FuBJFPt2cSjz24HQyq8HaFI4%2BKX0zY79lUx7CWB2V3K1I%2FPPY2lVoRVp&X-Amz-Signature=4e30a18a6fff99f091e9c0f4d993d1717ded29712091122505ff1c65bd3d3cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX26C46O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDIda%2Bnf2O0gVPd7DT2GRyuFEHtMGsMmbUh8uSMeL0TswIhAM%2BzzV0WlpDjcp9u%2BJxkbJU53j5mEi%2Bc4zVHWXd%2FW0weKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhnJJYFsNRDaKc4eQq3APcYg8GCtDU8pdPURM%2F50B2%2FXnOWG94FEyWL2A6ml57QZejpwbu4HqjAmKIsjMZSoDZnhsI1p0Vp9pIIvV4Mqh4TgCnT6sj5xbtVWMcB0o7qP41o9DEUV5S6gQ3jSjROYyAy9lidOo4vUZ09oREoczdLmYvjG5I%2Fn4fYhDlXC9hrGROCSi5Gyg%2F3xMECimWFu1ewqePlXfcKBlGBCVb6q5u7nEd6JCPRJqOmmAX%2BD7r4y6HVgpg4uBYEmwz0bX7gWEZg%2FeOwA9vYsobf0AeCASKaR3qJD6%2BJxMhBjNPND6q%2FfUvuGNchsrKTCZ4ad5GzibtDzwzCi3bc1SlYtunUU%2F9t3%2FD2erxyxFcDZkYdUhwT%2BJF%2ByZw1LW43k2Osb2Hgy7FK75IjBhfxy6f0CBwZj%2B0%2BvN8uFNrtYC6fIbmJzPWWD6L%2B6aZ7G94qE4hhzV9RbrubMTmGeAecOwoCGhGBNzAH1YWi5tXE4uX%2FYGVbKXJN1VrbV5F%2Fqr059WwRnh5SGvy6saibiYepC%2F70gulilSB%2BZp434%2FB5BuUWCznkv6R%2FJUkh%2FZdpFYxQDH708DSW6NTwoEs5jifyghfLywaFGWocMxqnmhk%2BS04952MVMnEZWvSfsHY9kq%2Bh382dTC08KfGBjqkAWWFd07HXwCMvPmsw866qvLL6icJG50W88Jzotkhw2WRdB%2BF2u8jgM%2F9zUIYKd%2BxPurOjcfIltErOqWDpuk%2BWnpPv0vaBRi5w6UYG94JHMRtKGX%2BXv3j09%2BP48jKaSkS9Z%2B1TzqxEdmhpplcH4s4sgpszs0qDbTuBxv6%2FuBJFPt2cSjz24HQyq8HaFI4%2BKX0zY79lUx7CWB2V3K1I%2FPPY2lVoRVp&X-Amz-Signature=c9eb766687a4c62ea7ec00fdd95450be4e767d34f882dc774afecc1d97689b75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX26C46O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDIda%2Bnf2O0gVPd7DT2GRyuFEHtMGsMmbUh8uSMeL0TswIhAM%2BzzV0WlpDjcp9u%2BJxkbJU53j5mEi%2Bc4zVHWXd%2FW0weKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhnJJYFsNRDaKc4eQq3APcYg8GCtDU8pdPURM%2F50B2%2FXnOWG94FEyWL2A6ml57QZejpwbu4HqjAmKIsjMZSoDZnhsI1p0Vp9pIIvV4Mqh4TgCnT6sj5xbtVWMcB0o7qP41o9DEUV5S6gQ3jSjROYyAy9lidOo4vUZ09oREoczdLmYvjG5I%2Fn4fYhDlXC9hrGROCSi5Gyg%2F3xMECimWFu1ewqePlXfcKBlGBCVb6q5u7nEd6JCPRJqOmmAX%2BD7r4y6HVgpg4uBYEmwz0bX7gWEZg%2FeOwA9vYsobf0AeCASKaR3qJD6%2BJxMhBjNPND6q%2FfUvuGNchsrKTCZ4ad5GzibtDzwzCi3bc1SlYtunUU%2F9t3%2FD2erxyxFcDZkYdUhwT%2BJF%2ByZw1LW43k2Osb2Hgy7FK75IjBhfxy6f0CBwZj%2B0%2BvN8uFNrtYC6fIbmJzPWWD6L%2B6aZ7G94qE4hhzV9RbrubMTmGeAecOwoCGhGBNzAH1YWi5tXE4uX%2FYGVbKXJN1VrbV5F%2Fqr059WwRnh5SGvy6saibiYepC%2F70gulilSB%2BZp434%2FB5BuUWCznkv6R%2FJUkh%2FZdpFYxQDH708DSW6NTwoEs5jifyghfLywaFGWocMxqnmhk%2BS04952MVMnEZWvSfsHY9kq%2Bh382dTC08KfGBjqkAWWFd07HXwCMvPmsw866qvLL6icJG50W88Jzotkhw2WRdB%2BF2u8jgM%2F9zUIYKd%2BxPurOjcfIltErOqWDpuk%2BWnpPv0vaBRi5w6UYG94JHMRtKGX%2BXv3j09%2BP48jKaSkS9Z%2B1TzqxEdmhpplcH4s4sgpszs0qDbTuBxv6%2FuBJFPt2cSjz24HQyq8HaFI4%2BKX0zY79lUx7CWB2V3K1I%2FPPY2lVoRVp&X-Amz-Signature=5e4b388c584ce05555072b005b82f0337913ea85dcb923a6c0fea713ed126fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX26C46O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDIda%2Bnf2O0gVPd7DT2GRyuFEHtMGsMmbUh8uSMeL0TswIhAM%2BzzV0WlpDjcp9u%2BJxkbJU53j5mEi%2Bc4zVHWXd%2FW0weKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhnJJYFsNRDaKc4eQq3APcYg8GCtDU8pdPURM%2F50B2%2FXnOWG94FEyWL2A6ml57QZejpwbu4HqjAmKIsjMZSoDZnhsI1p0Vp9pIIvV4Mqh4TgCnT6sj5xbtVWMcB0o7qP41o9DEUV5S6gQ3jSjROYyAy9lidOo4vUZ09oREoczdLmYvjG5I%2Fn4fYhDlXC9hrGROCSi5Gyg%2F3xMECimWFu1ewqePlXfcKBlGBCVb6q5u7nEd6JCPRJqOmmAX%2BD7r4y6HVgpg4uBYEmwz0bX7gWEZg%2FeOwA9vYsobf0AeCASKaR3qJD6%2BJxMhBjNPND6q%2FfUvuGNchsrKTCZ4ad5GzibtDzwzCi3bc1SlYtunUU%2F9t3%2FD2erxyxFcDZkYdUhwT%2BJF%2ByZw1LW43k2Osb2Hgy7FK75IjBhfxy6f0CBwZj%2B0%2BvN8uFNrtYC6fIbmJzPWWD6L%2B6aZ7G94qE4hhzV9RbrubMTmGeAecOwoCGhGBNzAH1YWi5tXE4uX%2FYGVbKXJN1VrbV5F%2Fqr059WwRnh5SGvy6saibiYepC%2F70gulilSB%2BZp434%2FB5BuUWCznkv6R%2FJUkh%2FZdpFYxQDH708DSW6NTwoEs5jifyghfLywaFGWocMxqnmhk%2BS04952MVMnEZWvSfsHY9kq%2Bh382dTC08KfGBjqkAWWFd07HXwCMvPmsw866qvLL6icJG50W88Jzotkhw2WRdB%2BF2u8jgM%2F9zUIYKd%2BxPurOjcfIltErOqWDpuk%2BWnpPv0vaBRi5w6UYG94JHMRtKGX%2BXv3j09%2BP48jKaSkS9Z%2B1TzqxEdmhpplcH4s4sgpszs0qDbTuBxv6%2FuBJFPt2cSjz24HQyq8HaFI4%2BKX0zY79lUx7CWB2V3K1I%2FPPY2lVoRVp&X-Amz-Signature=c6e525c25d7b16fe68e60ef05fc4e8b9f9693c09942955a9f8de4c306c0d5c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDA4FSSH%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQC%2BeZS0BqkdFoOs9DxLUmo3WLU8j3f8MQHf%2BUndC5YSEgIgJYF4DUDhzO1inG18TNWSgiVgfbDfz34qyyYz61dS458qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZisqJqStmK3bcq5CrcA9N1RbzYg2BZUcM%2B3LzM7B%2BHN4P26ez%2F%2B48ckXbR7TMMzEIQkRVziMQW%2FCFk%2Bn%2BcSCX19rrXCF1Un9X%2FHXiHPhPzfhzxjmc94Tu2823C0VCht1zK0n8wGWqHV9LTdwoLsCHApBFaKhe9cnd5N15G2l%2F9SmByJNnAQCXS1ogrhIFgrGAqXtukUFY8tUhwFRu2KFmVuOq9idlrUTU7dCE10d1rLjTUTBD1kXCWplwHTL2XEzP5%2Fl2i0v1g2m8qxoEJdrx6jmEOcZMIxUaz89X%2F85QmH7KuSFdmbtSJZ8qzApUBtloufawPQnX9cBz9wyg1dd6OcxbsATgOPxcHm%2Bn9ccE%2BpyTPryvCB3cswm%2BBCK9H5%2FRJkNdnEaUxajC6eLK75HDUnC4SkWsfwdkIgdYGUuJtfx%2BUgIKxyqAyBOnAmRhwotQXAjnQeSpTCH4yWNFSQ%2FDYIODFsPnGc0%2FIys%2B%2FlzkZe0vDFyIziOLfYyLQxLQ1U6MRTH97Wgf0rTVG0iE3Fus1%2FD4TZzUhhcFbGJWmQD8WsZ16c5Gn5eNvXTODfNhysxh2QPhiMTx1sXQH06fmsTrwTWeElp8jgsIYoI92wZe0fQUhyC4oYGaF3%2F5DxDKhgALYOxRZTTS9E1rzMN%2Fwp8YGOqUBHZKceSzSDbTD9FzImK7js20%2BvVa5SVyHWqEySiI1mYDlIc01DKxyc2PSN0YzPJ273ZA%2FFtlUMlhdwjQlZjsL04m4%2FhYuWsvmoNI12EMUPx6cgxYhmgvsA7KcCD0QGWpgg%2FUd7SsMAl0RoVdUxF%2BBd6vpWeDTaToSIfxVUHE7qHujNNrspXyjXTOURvk%2BWa9VIF6FtVFpkeF6dsWBOnH2q9BJ%2BMD1&X-Amz-Signature=db13ef020312c270628a11e1bfce75000b06ef08c85b87b90f49036bef404ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX26C46O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDIda%2Bnf2O0gVPd7DT2GRyuFEHtMGsMmbUh8uSMeL0TswIhAM%2BzzV0WlpDjcp9u%2BJxkbJU53j5mEi%2Bc4zVHWXd%2FW0weKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhnJJYFsNRDaKc4eQq3APcYg8GCtDU8pdPURM%2F50B2%2FXnOWG94FEyWL2A6ml57QZejpwbu4HqjAmKIsjMZSoDZnhsI1p0Vp9pIIvV4Mqh4TgCnT6sj5xbtVWMcB0o7qP41o9DEUV5S6gQ3jSjROYyAy9lidOo4vUZ09oREoczdLmYvjG5I%2Fn4fYhDlXC9hrGROCSi5Gyg%2F3xMECimWFu1ewqePlXfcKBlGBCVb6q5u7nEd6JCPRJqOmmAX%2BD7r4y6HVgpg4uBYEmwz0bX7gWEZg%2FeOwA9vYsobf0AeCASKaR3qJD6%2BJxMhBjNPND6q%2FfUvuGNchsrKTCZ4ad5GzibtDzwzCi3bc1SlYtunUU%2F9t3%2FD2erxyxFcDZkYdUhwT%2BJF%2ByZw1LW43k2Osb2Hgy7FK75IjBhfxy6f0CBwZj%2B0%2BvN8uFNrtYC6fIbmJzPWWD6L%2B6aZ7G94qE4hhzV9RbrubMTmGeAecOwoCGhGBNzAH1YWi5tXE4uX%2FYGVbKXJN1VrbV5F%2Fqr059WwRnh5SGvy6saibiYepC%2F70gulilSB%2BZp434%2FB5BuUWCznkv6R%2FJUkh%2FZdpFYxQDH708DSW6NTwoEs5jifyghfLywaFGWocMxqnmhk%2BS04952MVMnEZWvSfsHY9kq%2Bh382dTC08KfGBjqkAWWFd07HXwCMvPmsw866qvLL6icJG50W88Jzotkhw2WRdB%2BF2u8jgM%2F9zUIYKd%2BxPurOjcfIltErOqWDpuk%2BWnpPv0vaBRi5w6UYG94JHMRtKGX%2BXv3j09%2BP48jKaSkS9Z%2B1TzqxEdmhpplcH4s4sgpszs0qDbTuBxv6%2FuBJFPt2cSjz24HQyq8HaFI4%2BKX0zY79lUx7CWB2V3K1I%2FPPY2lVoRVp&X-Amz-Signature=6230896392e4c680e2b4ac7b2823828a0d27d838a23752a7e1b81ad504611250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX26C46O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDIda%2Bnf2O0gVPd7DT2GRyuFEHtMGsMmbUh8uSMeL0TswIhAM%2BzzV0WlpDjcp9u%2BJxkbJU53j5mEi%2Bc4zVHWXd%2FW0weKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhnJJYFsNRDaKc4eQq3APcYg8GCtDU8pdPURM%2F50B2%2FXnOWG94FEyWL2A6ml57QZejpwbu4HqjAmKIsjMZSoDZnhsI1p0Vp9pIIvV4Mqh4TgCnT6sj5xbtVWMcB0o7qP41o9DEUV5S6gQ3jSjROYyAy9lidOo4vUZ09oREoczdLmYvjG5I%2Fn4fYhDlXC9hrGROCSi5Gyg%2F3xMECimWFu1ewqePlXfcKBlGBCVb6q5u7nEd6JCPRJqOmmAX%2BD7r4y6HVgpg4uBYEmwz0bX7gWEZg%2FeOwA9vYsobf0AeCASKaR3qJD6%2BJxMhBjNPND6q%2FfUvuGNchsrKTCZ4ad5GzibtDzwzCi3bc1SlYtunUU%2F9t3%2FD2erxyxFcDZkYdUhwT%2BJF%2ByZw1LW43k2Osb2Hgy7FK75IjBhfxy6f0CBwZj%2B0%2BvN8uFNrtYC6fIbmJzPWWD6L%2B6aZ7G94qE4hhzV9RbrubMTmGeAecOwoCGhGBNzAH1YWi5tXE4uX%2FYGVbKXJN1VrbV5F%2Fqr059WwRnh5SGvy6saibiYepC%2F70gulilSB%2BZp434%2FB5BuUWCznkv6R%2FJUkh%2FZdpFYxQDH708DSW6NTwoEs5jifyghfLywaFGWocMxqnmhk%2BS04952MVMnEZWvSfsHY9kq%2Bh382dTC08KfGBjqkAWWFd07HXwCMvPmsw866qvLL6icJG50W88Jzotkhw2WRdB%2BF2u8jgM%2F9zUIYKd%2BxPurOjcfIltErOqWDpuk%2BWnpPv0vaBRi5w6UYG94JHMRtKGX%2BXv3j09%2BP48jKaSkS9Z%2B1TzqxEdmhpplcH4s4sgpszs0qDbTuBxv6%2FuBJFPt2cSjz24HQyq8HaFI4%2BKX0zY79lUx7CWB2V3K1I%2FPPY2lVoRVp&X-Amz-Signature=a64949dceabd271d64c884f290c280948782ec7cb2ff9c4ffc9f39af25999e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX26C46O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDIda%2Bnf2O0gVPd7DT2GRyuFEHtMGsMmbUh8uSMeL0TswIhAM%2BzzV0WlpDjcp9u%2BJxkbJU53j5mEi%2Bc4zVHWXd%2FW0weKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhnJJYFsNRDaKc4eQq3APcYg8GCtDU8pdPURM%2F50B2%2FXnOWG94FEyWL2A6ml57QZejpwbu4HqjAmKIsjMZSoDZnhsI1p0Vp9pIIvV4Mqh4TgCnT6sj5xbtVWMcB0o7qP41o9DEUV5S6gQ3jSjROYyAy9lidOo4vUZ09oREoczdLmYvjG5I%2Fn4fYhDlXC9hrGROCSi5Gyg%2F3xMECimWFu1ewqePlXfcKBlGBCVb6q5u7nEd6JCPRJqOmmAX%2BD7r4y6HVgpg4uBYEmwz0bX7gWEZg%2FeOwA9vYsobf0AeCASKaR3qJD6%2BJxMhBjNPND6q%2FfUvuGNchsrKTCZ4ad5GzibtDzwzCi3bc1SlYtunUU%2F9t3%2FD2erxyxFcDZkYdUhwT%2BJF%2ByZw1LW43k2Osb2Hgy7FK75IjBhfxy6f0CBwZj%2B0%2BvN8uFNrtYC6fIbmJzPWWD6L%2B6aZ7G94qE4hhzV9RbrubMTmGeAecOwoCGhGBNzAH1YWi5tXE4uX%2FYGVbKXJN1VrbV5F%2Fqr059WwRnh5SGvy6saibiYepC%2F70gulilSB%2BZp434%2FB5BuUWCznkv6R%2FJUkh%2FZdpFYxQDH708DSW6NTwoEs5jifyghfLywaFGWocMxqnmhk%2BS04952MVMnEZWvSfsHY9kq%2Bh382dTC08KfGBjqkAWWFd07HXwCMvPmsw866qvLL6icJG50W88Jzotkhw2WRdB%2BF2u8jgM%2F9zUIYKd%2BxPurOjcfIltErOqWDpuk%2BWnpPv0vaBRi5w6UYG94JHMRtKGX%2BXv3j09%2BP48jKaSkS9Z%2B1TzqxEdmhpplcH4s4sgpszs0qDbTuBxv6%2FuBJFPt2cSjz24HQyq8HaFI4%2BKX0zY79lUx7CWB2V3K1I%2FPPY2lVoRVp&X-Amz-Signature=630b452fede7fa4c7448876ca8c05672b6a0ffc9353dd76a10876bedf9917ec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX26C46O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDIda%2Bnf2O0gVPd7DT2GRyuFEHtMGsMmbUh8uSMeL0TswIhAM%2BzzV0WlpDjcp9u%2BJxkbJU53j5mEi%2Bc4zVHWXd%2FW0weKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhnJJYFsNRDaKc4eQq3APcYg8GCtDU8pdPURM%2F50B2%2FXnOWG94FEyWL2A6ml57QZejpwbu4HqjAmKIsjMZSoDZnhsI1p0Vp9pIIvV4Mqh4TgCnT6sj5xbtVWMcB0o7qP41o9DEUV5S6gQ3jSjROYyAy9lidOo4vUZ09oREoczdLmYvjG5I%2Fn4fYhDlXC9hrGROCSi5Gyg%2F3xMECimWFu1ewqePlXfcKBlGBCVb6q5u7nEd6JCPRJqOmmAX%2BD7r4y6HVgpg4uBYEmwz0bX7gWEZg%2FeOwA9vYsobf0AeCASKaR3qJD6%2BJxMhBjNPND6q%2FfUvuGNchsrKTCZ4ad5GzibtDzwzCi3bc1SlYtunUU%2F9t3%2FD2erxyxFcDZkYdUhwT%2BJF%2ByZw1LW43k2Osb2Hgy7FK75IjBhfxy6f0CBwZj%2B0%2BvN8uFNrtYC6fIbmJzPWWD6L%2B6aZ7G94qE4hhzV9RbrubMTmGeAecOwoCGhGBNzAH1YWi5tXE4uX%2FYGVbKXJN1VrbV5F%2Fqr059WwRnh5SGvy6saibiYepC%2F70gulilSB%2BZp434%2FB5BuUWCznkv6R%2FJUkh%2FZdpFYxQDH708DSW6NTwoEs5jifyghfLywaFGWocMxqnmhk%2BS04952MVMnEZWvSfsHY9kq%2Bh382dTC08KfGBjqkAWWFd07HXwCMvPmsw866qvLL6icJG50W88Jzotkhw2WRdB%2BF2u8jgM%2F9zUIYKd%2BxPurOjcfIltErOqWDpuk%2BWnpPv0vaBRi5w6UYG94JHMRtKGX%2BXv3j09%2BP48jKaSkS9Z%2B1TzqxEdmhpplcH4s4sgpszs0qDbTuBxv6%2FuBJFPt2cSjz24HQyq8HaFI4%2BKX0zY79lUx7CWB2V3K1I%2FPPY2lVoRVp&X-Amz-Signature=f334ef854963dd47f3d431f3560d9d219c03e498826c8235d7f4d11d59b246cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX26C46O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDIda%2Bnf2O0gVPd7DT2GRyuFEHtMGsMmbUh8uSMeL0TswIhAM%2BzzV0WlpDjcp9u%2BJxkbJU53j5mEi%2Bc4zVHWXd%2FW0weKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhnJJYFsNRDaKc4eQq3APcYg8GCtDU8pdPURM%2F50B2%2FXnOWG94FEyWL2A6ml57QZejpwbu4HqjAmKIsjMZSoDZnhsI1p0Vp9pIIvV4Mqh4TgCnT6sj5xbtVWMcB0o7qP41o9DEUV5S6gQ3jSjROYyAy9lidOo4vUZ09oREoczdLmYvjG5I%2Fn4fYhDlXC9hrGROCSi5Gyg%2F3xMECimWFu1ewqePlXfcKBlGBCVb6q5u7nEd6JCPRJqOmmAX%2BD7r4y6HVgpg4uBYEmwz0bX7gWEZg%2FeOwA9vYsobf0AeCASKaR3qJD6%2BJxMhBjNPND6q%2FfUvuGNchsrKTCZ4ad5GzibtDzwzCi3bc1SlYtunUU%2F9t3%2FD2erxyxFcDZkYdUhwT%2BJF%2ByZw1LW43k2Osb2Hgy7FK75IjBhfxy6f0CBwZj%2B0%2BvN8uFNrtYC6fIbmJzPWWD6L%2B6aZ7G94qE4hhzV9RbrubMTmGeAecOwoCGhGBNzAH1YWi5tXE4uX%2FYGVbKXJN1VrbV5F%2Fqr059WwRnh5SGvy6saibiYepC%2F70gulilSB%2BZp434%2FB5BuUWCznkv6R%2FJUkh%2FZdpFYxQDH708DSW6NTwoEs5jifyghfLywaFGWocMxqnmhk%2BS04952MVMnEZWvSfsHY9kq%2Bh382dTC08KfGBjqkAWWFd07HXwCMvPmsw866qvLL6icJG50W88Jzotkhw2WRdB%2BF2u8jgM%2F9zUIYKd%2BxPurOjcfIltErOqWDpuk%2BWnpPv0vaBRi5w6UYG94JHMRtKGX%2BXv3j09%2BP48jKaSkS9Z%2B1TzqxEdmhpplcH4s4sgpszs0qDbTuBxv6%2FuBJFPt2cSjz24HQyq8HaFI4%2BKX0zY79lUx7CWB2V3K1I%2FPPY2lVoRVp&X-Amz-Signature=a33583399ed11fb260b416b5f3a6ff0c4cb440db6e1f63dfb74352316f8b3f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX26C46O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDIda%2Bnf2O0gVPd7DT2GRyuFEHtMGsMmbUh8uSMeL0TswIhAM%2BzzV0WlpDjcp9u%2BJxkbJU53j5mEi%2Bc4zVHWXd%2FW0weKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhnJJYFsNRDaKc4eQq3APcYg8GCtDU8pdPURM%2F50B2%2FXnOWG94FEyWL2A6ml57QZejpwbu4HqjAmKIsjMZSoDZnhsI1p0Vp9pIIvV4Mqh4TgCnT6sj5xbtVWMcB0o7qP41o9DEUV5S6gQ3jSjROYyAy9lidOo4vUZ09oREoczdLmYvjG5I%2Fn4fYhDlXC9hrGROCSi5Gyg%2F3xMECimWFu1ewqePlXfcKBlGBCVb6q5u7nEd6JCPRJqOmmAX%2BD7r4y6HVgpg4uBYEmwz0bX7gWEZg%2FeOwA9vYsobf0AeCASKaR3qJD6%2BJxMhBjNPND6q%2FfUvuGNchsrKTCZ4ad5GzibtDzwzCi3bc1SlYtunUU%2F9t3%2FD2erxyxFcDZkYdUhwT%2BJF%2ByZw1LW43k2Osb2Hgy7FK75IjBhfxy6f0CBwZj%2B0%2BvN8uFNrtYC6fIbmJzPWWD6L%2B6aZ7G94qE4hhzV9RbrubMTmGeAecOwoCGhGBNzAH1YWi5tXE4uX%2FYGVbKXJN1VrbV5F%2Fqr059WwRnh5SGvy6saibiYepC%2F70gulilSB%2BZp434%2FB5BuUWCznkv6R%2FJUkh%2FZdpFYxQDH708DSW6NTwoEs5jifyghfLywaFGWocMxqnmhk%2BS04952MVMnEZWvSfsHY9kq%2Bh382dTC08KfGBjqkAWWFd07HXwCMvPmsw866qvLL6icJG50W88Jzotkhw2WRdB%2BF2u8jgM%2F9zUIYKd%2BxPurOjcfIltErOqWDpuk%2BWnpPv0vaBRi5w6UYG94JHMRtKGX%2BXv3j09%2BP48jKaSkS9Z%2B1TzqxEdmhpplcH4s4sgpszs0qDbTuBxv6%2FuBJFPt2cSjz24HQyq8HaFI4%2BKX0zY79lUx7CWB2V3K1I%2FPPY2lVoRVp&X-Amz-Signature=c0c8593ca10f91818d723c6cbb497a52ac24d0142393ae5a4f5da40647527657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


