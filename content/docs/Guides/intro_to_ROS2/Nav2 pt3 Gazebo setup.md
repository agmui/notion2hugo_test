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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YCNO4L4%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoT1h0bV5UOei%2BwjJTEvrwXErwO3%2BV3XJEnV5VTAoxnwIgd8fc1M1PGs6tme40ls%2FzQd%2BSdwtJB4xigWqQLLqQ9tcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNeGmzTg19Ed0cN4SrcA4amb%2FhtrXQ9TBUheRMmhAxr7F8qJX66rBEb%2BtW4Efvevbb6IM4iz3LRQZe0kffnPFk7amOkd7Ay9hpPnQ%2BNJmoCbMCHpcqKQaEgAQOdioGiQ2dGjQI0dthHY6lTuWFBOHWpAd9s9agHbDJs2D54xcOuaNptOGheG1gJZi6GJfAzVpvo71fVKdxe1eVKvC6vEg%2FNRZ%2BF4Zk0iXqO1%2BNs5V48UwFtYSWxBlb5OajaaRCPsWT24ewDitqJYtZx95ND4jRoWadTo0XapqZl1BnPxyhBMzxfm4ANomgEkM52F90pDDu%2F1nTtpplYNhFocH8hs%2BVjwjyehkDV%2FxD628W7jSK7W1zXqb0i2ZmyewBlxdGLQKOrCQVUNgVIq5rhL9dGTyhPWbzhOOQcqbNzhLzKyzb8N9XZ08wp3iXPgVQeLoMx92M9z5MUB1VoXFy48e7rilJbNijztl1HTrcEUpJwRu9yoG4c3pMdCWPALgS3O5EzqZ1DcnRxhInjoKGA6iY%2FP3UIEL6HKUsMVJccAANM30SYYJWX51Pom3vJGxKY6YOo0HJIM4EEfz6Ev78iRbB2OzEy0yM33Xfjm4RvFhQBr6yKX3PbPKTJwoLht167U41raslvnwvolcM4M2XBMO6PxscGOqUBhpvgTajwk632WdTTkUcJYeuIuYM60J2ncXqdrAzub5onAeyUdy2g7M894bLVe2WPw3qJxY0th3SxQeQJ7swcomhSWO5ypw9DtDUcJf3wa3Uf3CYgAQibt6rerRcer7BRw7H4i6vcaVCLGVIkVyrm77vbIf38WYb55Xug%2BtHVeEiqdWzHjTfB1grRtov7zBhkSnwD041mHoHZ3eZXCyGW5MSnR6bF&X-Amz-Signature=e190265d66ab3949f5590d8d131b713bd1d9970cc52454c66f6051ec925255a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YCNO4L4%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoT1h0bV5UOei%2BwjJTEvrwXErwO3%2BV3XJEnV5VTAoxnwIgd8fc1M1PGs6tme40ls%2FzQd%2BSdwtJB4xigWqQLLqQ9tcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNeGmzTg19Ed0cN4SrcA4amb%2FhtrXQ9TBUheRMmhAxr7F8qJX66rBEb%2BtW4Efvevbb6IM4iz3LRQZe0kffnPFk7amOkd7Ay9hpPnQ%2BNJmoCbMCHpcqKQaEgAQOdioGiQ2dGjQI0dthHY6lTuWFBOHWpAd9s9agHbDJs2D54xcOuaNptOGheG1gJZi6GJfAzVpvo71fVKdxe1eVKvC6vEg%2FNRZ%2BF4Zk0iXqO1%2BNs5V48UwFtYSWxBlb5OajaaRCPsWT24ewDitqJYtZx95ND4jRoWadTo0XapqZl1BnPxyhBMzxfm4ANomgEkM52F90pDDu%2F1nTtpplYNhFocH8hs%2BVjwjyehkDV%2FxD628W7jSK7W1zXqb0i2ZmyewBlxdGLQKOrCQVUNgVIq5rhL9dGTyhPWbzhOOQcqbNzhLzKyzb8N9XZ08wp3iXPgVQeLoMx92M9z5MUB1VoXFy48e7rilJbNijztl1HTrcEUpJwRu9yoG4c3pMdCWPALgS3O5EzqZ1DcnRxhInjoKGA6iY%2FP3UIEL6HKUsMVJccAANM30SYYJWX51Pom3vJGxKY6YOo0HJIM4EEfz6Ev78iRbB2OzEy0yM33Xfjm4RvFhQBr6yKX3PbPKTJwoLht167U41raslvnwvolcM4M2XBMO6PxscGOqUBhpvgTajwk632WdTTkUcJYeuIuYM60J2ncXqdrAzub5onAeyUdy2g7M894bLVe2WPw3qJxY0th3SxQeQJ7swcomhSWO5ypw9DtDUcJf3wa3Uf3CYgAQibt6rerRcer7BRw7H4i6vcaVCLGVIkVyrm77vbIf38WYb55Xug%2BtHVeEiqdWzHjTfB1grRtov7zBhkSnwD041mHoHZ3eZXCyGW5MSnR6bF&X-Amz-Signature=c55a0f8eab0b84faed87cefc64f425fe3de6a2239fba0dd5109e39cadbc12a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YCNO4L4%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoT1h0bV5UOei%2BwjJTEvrwXErwO3%2BV3XJEnV5VTAoxnwIgd8fc1M1PGs6tme40ls%2FzQd%2BSdwtJB4xigWqQLLqQ9tcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNeGmzTg19Ed0cN4SrcA4amb%2FhtrXQ9TBUheRMmhAxr7F8qJX66rBEb%2BtW4Efvevbb6IM4iz3LRQZe0kffnPFk7amOkd7Ay9hpPnQ%2BNJmoCbMCHpcqKQaEgAQOdioGiQ2dGjQI0dthHY6lTuWFBOHWpAd9s9agHbDJs2D54xcOuaNptOGheG1gJZi6GJfAzVpvo71fVKdxe1eVKvC6vEg%2FNRZ%2BF4Zk0iXqO1%2BNs5V48UwFtYSWxBlb5OajaaRCPsWT24ewDitqJYtZx95ND4jRoWadTo0XapqZl1BnPxyhBMzxfm4ANomgEkM52F90pDDu%2F1nTtpplYNhFocH8hs%2BVjwjyehkDV%2FxD628W7jSK7W1zXqb0i2ZmyewBlxdGLQKOrCQVUNgVIq5rhL9dGTyhPWbzhOOQcqbNzhLzKyzb8N9XZ08wp3iXPgVQeLoMx92M9z5MUB1VoXFy48e7rilJbNijztl1HTrcEUpJwRu9yoG4c3pMdCWPALgS3O5EzqZ1DcnRxhInjoKGA6iY%2FP3UIEL6HKUsMVJccAANM30SYYJWX51Pom3vJGxKY6YOo0HJIM4EEfz6Ev78iRbB2OzEy0yM33Xfjm4RvFhQBr6yKX3PbPKTJwoLht167U41raslvnwvolcM4M2XBMO6PxscGOqUBhpvgTajwk632WdTTkUcJYeuIuYM60J2ncXqdrAzub5onAeyUdy2g7M894bLVe2WPw3qJxY0th3SxQeQJ7swcomhSWO5ypw9DtDUcJf3wa3Uf3CYgAQibt6rerRcer7BRw7H4i6vcaVCLGVIkVyrm77vbIf38WYb55Xug%2BtHVeEiqdWzHjTfB1grRtov7zBhkSnwD041mHoHZ3eZXCyGW5MSnR6bF&X-Amz-Signature=5c98e61e37e3aec6acfc2a18e982e51cf6af3f1bf635f8e6491fa2b32c6d93ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YCNO4L4%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoT1h0bV5UOei%2BwjJTEvrwXErwO3%2BV3XJEnV5VTAoxnwIgd8fc1M1PGs6tme40ls%2FzQd%2BSdwtJB4xigWqQLLqQ9tcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNeGmzTg19Ed0cN4SrcA4amb%2FhtrXQ9TBUheRMmhAxr7F8qJX66rBEb%2BtW4Efvevbb6IM4iz3LRQZe0kffnPFk7amOkd7Ay9hpPnQ%2BNJmoCbMCHpcqKQaEgAQOdioGiQ2dGjQI0dthHY6lTuWFBOHWpAd9s9agHbDJs2D54xcOuaNptOGheG1gJZi6GJfAzVpvo71fVKdxe1eVKvC6vEg%2FNRZ%2BF4Zk0iXqO1%2BNs5V48UwFtYSWxBlb5OajaaRCPsWT24ewDitqJYtZx95ND4jRoWadTo0XapqZl1BnPxyhBMzxfm4ANomgEkM52F90pDDu%2F1nTtpplYNhFocH8hs%2BVjwjyehkDV%2FxD628W7jSK7W1zXqb0i2ZmyewBlxdGLQKOrCQVUNgVIq5rhL9dGTyhPWbzhOOQcqbNzhLzKyzb8N9XZ08wp3iXPgVQeLoMx92M9z5MUB1VoXFy48e7rilJbNijztl1HTrcEUpJwRu9yoG4c3pMdCWPALgS3O5EzqZ1DcnRxhInjoKGA6iY%2FP3UIEL6HKUsMVJccAANM30SYYJWX51Pom3vJGxKY6YOo0HJIM4EEfz6Ev78iRbB2OzEy0yM33Xfjm4RvFhQBr6yKX3PbPKTJwoLht167U41raslvnwvolcM4M2XBMO6PxscGOqUBhpvgTajwk632WdTTkUcJYeuIuYM60J2ncXqdrAzub5onAeyUdy2g7M894bLVe2WPw3qJxY0th3SxQeQJ7swcomhSWO5ypw9DtDUcJf3wa3Uf3CYgAQibt6rerRcer7BRw7H4i6vcaVCLGVIkVyrm77vbIf38WYb55Xug%2BtHVeEiqdWzHjTfB1grRtov7zBhkSnwD041mHoHZ3eZXCyGW5MSnR6bF&X-Amz-Signature=9eb5ece181320f7edd0ca3107d9b4dec29580380f2bfd9bdb71f5dda156d97b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S66WL3H2%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaGBrFukRY3Pu%2FvLLgcaj5KyeAs%2FRFkxm01g6SppWWjQIhAIfD6h18%2FG3IMhhlNpAqCMXd5rstydRpE2y%2Bbb8R0ap7KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxzh5%2FAfj6l%2FMRV68sq3AN%2Fb6342los9CF7EFexmEk5e7QFHg8elTQR9Cm%2BS1bd%2BwdexF3Oe7CKfPsqwxes1OQz0m0q%2FlvLo4Bpy1buhIR01EIdpq5xgYKRmkKBb8Owp9KFhUH8CzmIgFWfXOAHVtrMbQ1E9w7EKNsTzN6fuuW9XWL5EDwhe0iu%2B6tk2Szivppfx%2BW%2BjliYUOsZaqYt1XvJWbUVkHDseG4rcZNvY2Tdf0phRXCX%2FJ1Hm5gOMIUhV3%2BtEheBhIwCXBZ6WS7nVs6nA%2FQgYjINXEbw6lAj7R7J0z%2BVVX8Z1pZhsxKrufihGSuAP0TP9y3QrP96JyBz1v3gJv9Zntbee6pu5pTlCEuJNpDxqua0DHyZ17mRL17aZM%2BCDUu5IhRbTC%2B7y%2Ff%2B%2FsVnuqzUvKvwUEsLRfkcgrVFnB98pV%2Bv4OTeaiPFI5AoekWgtDuLx5CPcnVlyptJVoIj5l31Qd0qX45II10DpL4I6iCERMBuY9TJE%2B2XcFRe241HPJlKcwzUF8Jk2IG4CeXo4hKWFfnk00H%2ByI2NqIacUImKnJ8Co4WoDoK9oZdViDNaeL58a6ExejxALGMWfCCYPLIdRcJyPgQLKBVXBHR%2Br8%2FRwMPlYO1OgGQsVrZwpENmtRxtf1499NwpYDC2kMbHBjqkATuHUm%2FY5s8iMWpy%2BQ92tMhUsFz%2BF0BE7%2BlZG%2BAfWtV58C%2BvpDUqhsTa0Enu7CNY1qgw8uzSnBTkK6mHTkofTXLqrsQ4QzLI2KPi9CXAXnW%2BSYv5FXlYMTPSdjqW61VOy5XbJBUBQoBUKmnKTTh9MQJsSzVFhqLXywnkzLONf1d4pgRgB2hYzW1FqBXUC213lvi%2FF6fGTEM6kNiJc8KwjfINNrLY&X-Amz-Signature=b58ddf82982167f76fc2608b9460bf87bb8910c3a8842f35c578ee0baee2fc70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YCNO4L4%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoT1h0bV5UOei%2BwjJTEvrwXErwO3%2BV3XJEnV5VTAoxnwIgd8fc1M1PGs6tme40ls%2FzQd%2BSdwtJB4xigWqQLLqQ9tcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNeGmzTg19Ed0cN4SrcA4amb%2FhtrXQ9TBUheRMmhAxr7F8qJX66rBEb%2BtW4Efvevbb6IM4iz3LRQZe0kffnPFk7amOkd7Ay9hpPnQ%2BNJmoCbMCHpcqKQaEgAQOdioGiQ2dGjQI0dthHY6lTuWFBOHWpAd9s9agHbDJs2D54xcOuaNptOGheG1gJZi6GJfAzVpvo71fVKdxe1eVKvC6vEg%2FNRZ%2BF4Zk0iXqO1%2BNs5V48UwFtYSWxBlb5OajaaRCPsWT24ewDitqJYtZx95ND4jRoWadTo0XapqZl1BnPxyhBMzxfm4ANomgEkM52F90pDDu%2F1nTtpplYNhFocH8hs%2BVjwjyehkDV%2FxD628W7jSK7W1zXqb0i2ZmyewBlxdGLQKOrCQVUNgVIq5rhL9dGTyhPWbzhOOQcqbNzhLzKyzb8N9XZ08wp3iXPgVQeLoMx92M9z5MUB1VoXFy48e7rilJbNijztl1HTrcEUpJwRu9yoG4c3pMdCWPALgS3O5EzqZ1DcnRxhInjoKGA6iY%2FP3UIEL6HKUsMVJccAANM30SYYJWX51Pom3vJGxKY6YOo0HJIM4EEfz6Ev78iRbB2OzEy0yM33Xfjm4RvFhQBr6yKX3PbPKTJwoLht167U41raslvnwvolcM4M2XBMO6PxscGOqUBhpvgTajwk632WdTTkUcJYeuIuYM60J2ncXqdrAzub5onAeyUdy2g7M894bLVe2WPw3qJxY0th3SxQeQJ7swcomhSWO5ypw9DtDUcJf3wa3Uf3CYgAQibt6rerRcer7BRw7H4i6vcaVCLGVIkVyrm77vbIf38WYb55Xug%2BtHVeEiqdWzHjTfB1grRtov7zBhkSnwD041mHoHZ3eZXCyGW5MSnR6bF&X-Amz-Signature=85a966984c4ca48e15d6160ba9bbe186461baf810b9d68614e75b8359d345c00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YCNO4L4%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoT1h0bV5UOei%2BwjJTEvrwXErwO3%2BV3XJEnV5VTAoxnwIgd8fc1M1PGs6tme40ls%2FzQd%2BSdwtJB4xigWqQLLqQ9tcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNeGmzTg19Ed0cN4SrcA4amb%2FhtrXQ9TBUheRMmhAxr7F8qJX66rBEb%2BtW4Efvevbb6IM4iz3LRQZe0kffnPFk7amOkd7Ay9hpPnQ%2BNJmoCbMCHpcqKQaEgAQOdioGiQ2dGjQI0dthHY6lTuWFBOHWpAd9s9agHbDJs2D54xcOuaNptOGheG1gJZi6GJfAzVpvo71fVKdxe1eVKvC6vEg%2FNRZ%2BF4Zk0iXqO1%2BNs5V48UwFtYSWxBlb5OajaaRCPsWT24ewDitqJYtZx95ND4jRoWadTo0XapqZl1BnPxyhBMzxfm4ANomgEkM52F90pDDu%2F1nTtpplYNhFocH8hs%2BVjwjyehkDV%2FxD628W7jSK7W1zXqb0i2ZmyewBlxdGLQKOrCQVUNgVIq5rhL9dGTyhPWbzhOOQcqbNzhLzKyzb8N9XZ08wp3iXPgVQeLoMx92M9z5MUB1VoXFy48e7rilJbNijztl1HTrcEUpJwRu9yoG4c3pMdCWPALgS3O5EzqZ1DcnRxhInjoKGA6iY%2FP3UIEL6HKUsMVJccAANM30SYYJWX51Pom3vJGxKY6YOo0HJIM4EEfz6Ev78iRbB2OzEy0yM33Xfjm4RvFhQBr6yKX3PbPKTJwoLht167U41raslvnwvolcM4M2XBMO6PxscGOqUBhpvgTajwk632WdTTkUcJYeuIuYM60J2ncXqdrAzub5onAeyUdy2g7M894bLVe2WPw3qJxY0th3SxQeQJ7swcomhSWO5ypw9DtDUcJf3wa3Uf3CYgAQibt6rerRcer7BRw7H4i6vcaVCLGVIkVyrm77vbIf38WYb55Xug%2BtHVeEiqdWzHjTfB1grRtov7zBhkSnwD041mHoHZ3eZXCyGW5MSnR6bF&X-Amz-Signature=8df9eb3f89758591f0358b33816f2795866efb0e4b2c8e95e3687419b75820c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YCNO4L4%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoT1h0bV5UOei%2BwjJTEvrwXErwO3%2BV3XJEnV5VTAoxnwIgd8fc1M1PGs6tme40ls%2FzQd%2BSdwtJB4xigWqQLLqQ9tcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNeGmzTg19Ed0cN4SrcA4amb%2FhtrXQ9TBUheRMmhAxr7F8qJX66rBEb%2BtW4Efvevbb6IM4iz3LRQZe0kffnPFk7amOkd7Ay9hpPnQ%2BNJmoCbMCHpcqKQaEgAQOdioGiQ2dGjQI0dthHY6lTuWFBOHWpAd9s9agHbDJs2D54xcOuaNptOGheG1gJZi6GJfAzVpvo71fVKdxe1eVKvC6vEg%2FNRZ%2BF4Zk0iXqO1%2BNs5V48UwFtYSWxBlb5OajaaRCPsWT24ewDitqJYtZx95ND4jRoWadTo0XapqZl1BnPxyhBMzxfm4ANomgEkM52F90pDDu%2F1nTtpplYNhFocH8hs%2BVjwjyehkDV%2FxD628W7jSK7W1zXqb0i2ZmyewBlxdGLQKOrCQVUNgVIq5rhL9dGTyhPWbzhOOQcqbNzhLzKyzb8N9XZ08wp3iXPgVQeLoMx92M9z5MUB1VoXFy48e7rilJbNijztl1HTrcEUpJwRu9yoG4c3pMdCWPALgS3O5EzqZ1DcnRxhInjoKGA6iY%2FP3UIEL6HKUsMVJccAANM30SYYJWX51Pom3vJGxKY6YOo0HJIM4EEfz6Ev78iRbB2OzEy0yM33Xfjm4RvFhQBr6yKX3PbPKTJwoLht167U41raslvnwvolcM4M2XBMO6PxscGOqUBhpvgTajwk632WdTTkUcJYeuIuYM60J2ncXqdrAzub5onAeyUdy2g7M894bLVe2WPw3qJxY0th3SxQeQJ7swcomhSWO5ypw9DtDUcJf3wa3Uf3CYgAQibt6rerRcer7BRw7H4i6vcaVCLGVIkVyrm77vbIf38WYb55Xug%2BtHVeEiqdWzHjTfB1grRtov7zBhkSnwD041mHoHZ3eZXCyGW5MSnR6bF&X-Amz-Signature=2c39f53c9266221aee886381ded9b39baa675dc8987416584120a087b58335a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YCNO4L4%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoT1h0bV5UOei%2BwjJTEvrwXErwO3%2BV3XJEnV5VTAoxnwIgd8fc1M1PGs6tme40ls%2FzQd%2BSdwtJB4xigWqQLLqQ9tcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNeGmzTg19Ed0cN4SrcA4amb%2FhtrXQ9TBUheRMmhAxr7F8qJX66rBEb%2BtW4Efvevbb6IM4iz3LRQZe0kffnPFk7amOkd7Ay9hpPnQ%2BNJmoCbMCHpcqKQaEgAQOdioGiQ2dGjQI0dthHY6lTuWFBOHWpAd9s9agHbDJs2D54xcOuaNptOGheG1gJZi6GJfAzVpvo71fVKdxe1eVKvC6vEg%2FNRZ%2BF4Zk0iXqO1%2BNs5V48UwFtYSWxBlb5OajaaRCPsWT24ewDitqJYtZx95ND4jRoWadTo0XapqZl1BnPxyhBMzxfm4ANomgEkM52F90pDDu%2F1nTtpplYNhFocH8hs%2BVjwjyehkDV%2FxD628W7jSK7W1zXqb0i2ZmyewBlxdGLQKOrCQVUNgVIq5rhL9dGTyhPWbzhOOQcqbNzhLzKyzb8N9XZ08wp3iXPgVQeLoMx92M9z5MUB1VoXFy48e7rilJbNijztl1HTrcEUpJwRu9yoG4c3pMdCWPALgS3O5EzqZ1DcnRxhInjoKGA6iY%2FP3UIEL6HKUsMVJccAANM30SYYJWX51Pom3vJGxKY6YOo0HJIM4EEfz6Ev78iRbB2OzEy0yM33Xfjm4RvFhQBr6yKX3PbPKTJwoLht167U41raslvnwvolcM4M2XBMO6PxscGOqUBhpvgTajwk632WdTTkUcJYeuIuYM60J2ncXqdrAzub5onAeyUdy2g7M894bLVe2WPw3qJxY0th3SxQeQJ7swcomhSWO5ypw9DtDUcJf3wa3Uf3CYgAQibt6rerRcer7BRw7H4i6vcaVCLGVIkVyrm77vbIf38WYb55Xug%2BtHVeEiqdWzHjTfB1grRtov7zBhkSnwD041mHoHZ3eZXCyGW5MSnR6bF&X-Amz-Signature=0cc8d91973b0901159f2676e624df1e5c7596b5baa3e8709a207dc1a8cac8a6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YCNO4L4%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoT1h0bV5UOei%2BwjJTEvrwXErwO3%2BV3XJEnV5VTAoxnwIgd8fc1M1PGs6tme40ls%2FzQd%2BSdwtJB4xigWqQLLqQ9tcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNeGmzTg19Ed0cN4SrcA4amb%2FhtrXQ9TBUheRMmhAxr7F8qJX66rBEb%2BtW4Efvevbb6IM4iz3LRQZe0kffnPFk7amOkd7Ay9hpPnQ%2BNJmoCbMCHpcqKQaEgAQOdioGiQ2dGjQI0dthHY6lTuWFBOHWpAd9s9agHbDJs2D54xcOuaNptOGheG1gJZi6GJfAzVpvo71fVKdxe1eVKvC6vEg%2FNRZ%2BF4Zk0iXqO1%2BNs5V48UwFtYSWxBlb5OajaaRCPsWT24ewDitqJYtZx95ND4jRoWadTo0XapqZl1BnPxyhBMzxfm4ANomgEkM52F90pDDu%2F1nTtpplYNhFocH8hs%2BVjwjyehkDV%2FxD628W7jSK7W1zXqb0i2ZmyewBlxdGLQKOrCQVUNgVIq5rhL9dGTyhPWbzhOOQcqbNzhLzKyzb8N9XZ08wp3iXPgVQeLoMx92M9z5MUB1VoXFy48e7rilJbNijztl1HTrcEUpJwRu9yoG4c3pMdCWPALgS3O5EzqZ1DcnRxhInjoKGA6iY%2FP3UIEL6HKUsMVJccAANM30SYYJWX51Pom3vJGxKY6YOo0HJIM4EEfz6Ev78iRbB2OzEy0yM33Xfjm4RvFhQBr6yKX3PbPKTJwoLht167U41raslvnwvolcM4M2XBMO6PxscGOqUBhpvgTajwk632WdTTkUcJYeuIuYM60J2ncXqdrAzub5onAeyUdy2g7M894bLVe2WPw3qJxY0th3SxQeQJ7swcomhSWO5ypw9DtDUcJf3wa3Uf3CYgAQibt6rerRcer7BRw7H4i6vcaVCLGVIkVyrm77vbIf38WYb55Xug%2BtHVeEiqdWzHjTfB1grRtov7zBhkSnwD041mHoHZ3eZXCyGW5MSnR6bF&X-Amz-Signature=0baef122e388a426591f95e18a65cc21d3c84f456be1f1dee8db849f043bbc3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YCNO4L4%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoT1h0bV5UOei%2BwjJTEvrwXErwO3%2BV3XJEnV5VTAoxnwIgd8fc1M1PGs6tme40ls%2FzQd%2BSdwtJB4xigWqQLLqQ9tcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNeGmzTg19Ed0cN4SrcA4amb%2FhtrXQ9TBUheRMmhAxr7F8qJX66rBEb%2BtW4Efvevbb6IM4iz3LRQZe0kffnPFk7amOkd7Ay9hpPnQ%2BNJmoCbMCHpcqKQaEgAQOdioGiQ2dGjQI0dthHY6lTuWFBOHWpAd9s9agHbDJs2D54xcOuaNptOGheG1gJZi6GJfAzVpvo71fVKdxe1eVKvC6vEg%2FNRZ%2BF4Zk0iXqO1%2BNs5V48UwFtYSWxBlb5OajaaRCPsWT24ewDitqJYtZx95ND4jRoWadTo0XapqZl1BnPxyhBMzxfm4ANomgEkM52F90pDDu%2F1nTtpplYNhFocH8hs%2BVjwjyehkDV%2FxD628W7jSK7W1zXqb0i2ZmyewBlxdGLQKOrCQVUNgVIq5rhL9dGTyhPWbzhOOQcqbNzhLzKyzb8N9XZ08wp3iXPgVQeLoMx92M9z5MUB1VoXFy48e7rilJbNijztl1HTrcEUpJwRu9yoG4c3pMdCWPALgS3O5EzqZ1DcnRxhInjoKGA6iY%2FP3UIEL6HKUsMVJccAANM30SYYJWX51Pom3vJGxKY6YOo0HJIM4EEfz6Ev78iRbB2OzEy0yM33Xfjm4RvFhQBr6yKX3PbPKTJwoLht167U41raslvnwvolcM4M2XBMO6PxscGOqUBhpvgTajwk632WdTTkUcJYeuIuYM60J2ncXqdrAzub5onAeyUdy2g7M894bLVe2WPw3qJxY0th3SxQeQJ7swcomhSWO5ypw9DtDUcJf3wa3Uf3CYgAQibt6rerRcer7BRw7H4i6vcaVCLGVIkVyrm77vbIf38WYb55Xug%2BtHVeEiqdWzHjTfB1grRtov7zBhkSnwD041mHoHZ3eZXCyGW5MSnR6bF&X-Amz-Signature=88199e1f3b3236bbea787b9facc693a955d72387eca97f9d3d0dc3c4800537eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


