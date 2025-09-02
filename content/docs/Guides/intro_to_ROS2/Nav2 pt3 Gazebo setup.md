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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVVA7WRW%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGdsoYCmbwOpOo37E6F2BJMXdeAnylsN%2BoiKyhu8blWAiEA0%2FQpG0C%2BH2rvDAtYYvSmh%2F5Q9dq5sGU7192sSAMSlZ4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAoVEIMCiqxa6cX65ircAzEaWAZoXs%2Fw0lve5eYL18i7O9wVDIqZNohCIgawwcOSlDB34KrxoiH%2BoyfpBhrabwmEgQfTn2RMXox9qus7h%2BSk76z9m1YXKIoup9KzDo%2BngxPxpyg8bS5EmfnJEVaIceUxrTQo846fMR4i3hPdeHTdWSVFAKhj83q3Dm9%2FiZLiHAOAMYMgf0Zue07KNRo9IWegrFtZ3lshZDeRBTjMQ1CkkZ5HkFwKUCJm6iR7GEBYBtCmtHSfLwINGAH65r%2BgD15J97rvAmYKShgme2ZerfSYIZTvL%2BRAHbP9RcH%2B638h%2BNyp6PN2zTjjdcCKV40miZ6KA%2BYE7fekLPJWXZ8D6pmGhD%2FHnUK3MziJLIUrco4FTi%2Fj%2F7C57lOS1vZOEkcQ%2Bp%2F7q9I99pmW2hy4F3NOJhTzvyGZsJK7AAmoab9Ux8dSbaDnfWpF4fzQrNilwz0LpuBlXqIZg8uums4VX8%2Bkze8S4jIypP%2FtYr3TrowJOu%2F%2Bs8XDByVEnxJYhb28ntjhR4iryeF%2BREGgi6IYzEHp23yVWDHgZLMA8EewAy99iHLPkRMxdkf987I6oD8U40pFEseE4T%2F7MaRzPQmc3rqsj1dEHfZeK3V4VZuC0RCIki1UMeQSD%2BDmOs86bXdyMLOL2cUGOqUBbJm1zwZWDC8w6fgQUCZkVdcnNC1la9SkWfn3%2BEc%2FlOvRTSO3MZ8qhf4TLBHYKDh6l4ozKJNljNLTusLn9m5DkauuyL%2B6RXvFaN7eFOxvH8GdQeUj6THsyrDThjqyCzHXhwdktNxPXQ%2FrQc%2FGTJ4A%2FB46wVXZvLsFkvde%2FYO6bMKvpAJJpz2AgvQqSmKQIl1ea9vvWOL9i3lhMbh3ERSFxYQTtgTr&X-Amz-Signature=d9db13b65f7d8b19b61763adfee2d3ef519fffad467cfa384b7ab0ee0093041c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVVA7WRW%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGdsoYCmbwOpOo37E6F2BJMXdeAnylsN%2BoiKyhu8blWAiEA0%2FQpG0C%2BH2rvDAtYYvSmh%2F5Q9dq5sGU7192sSAMSlZ4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAoVEIMCiqxa6cX65ircAzEaWAZoXs%2Fw0lve5eYL18i7O9wVDIqZNohCIgawwcOSlDB34KrxoiH%2BoyfpBhrabwmEgQfTn2RMXox9qus7h%2BSk76z9m1YXKIoup9KzDo%2BngxPxpyg8bS5EmfnJEVaIceUxrTQo846fMR4i3hPdeHTdWSVFAKhj83q3Dm9%2FiZLiHAOAMYMgf0Zue07KNRo9IWegrFtZ3lshZDeRBTjMQ1CkkZ5HkFwKUCJm6iR7GEBYBtCmtHSfLwINGAH65r%2BgD15J97rvAmYKShgme2ZerfSYIZTvL%2BRAHbP9RcH%2B638h%2BNyp6PN2zTjjdcCKV40miZ6KA%2BYE7fekLPJWXZ8D6pmGhD%2FHnUK3MziJLIUrco4FTi%2Fj%2F7C57lOS1vZOEkcQ%2Bp%2F7q9I99pmW2hy4F3NOJhTzvyGZsJK7AAmoab9Ux8dSbaDnfWpF4fzQrNilwz0LpuBlXqIZg8uums4VX8%2Bkze8S4jIypP%2FtYr3TrowJOu%2F%2Bs8XDByVEnxJYhb28ntjhR4iryeF%2BREGgi6IYzEHp23yVWDHgZLMA8EewAy99iHLPkRMxdkf987I6oD8U40pFEseE4T%2F7MaRzPQmc3rqsj1dEHfZeK3V4VZuC0RCIki1UMeQSD%2BDmOs86bXdyMLOL2cUGOqUBbJm1zwZWDC8w6fgQUCZkVdcnNC1la9SkWfn3%2BEc%2FlOvRTSO3MZ8qhf4TLBHYKDh6l4ozKJNljNLTusLn9m5DkauuyL%2B6RXvFaN7eFOxvH8GdQeUj6THsyrDThjqyCzHXhwdktNxPXQ%2FrQc%2FGTJ4A%2FB46wVXZvLsFkvde%2FYO6bMKvpAJJpz2AgvQqSmKQIl1ea9vvWOL9i3lhMbh3ERSFxYQTtgTr&X-Amz-Signature=da169399f755a396a5b664d09407fdb0004eea3b6b2b4e8213d4954fbcba5a9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVVA7WRW%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGdsoYCmbwOpOo37E6F2BJMXdeAnylsN%2BoiKyhu8blWAiEA0%2FQpG0C%2BH2rvDAtYYvSmh%2F5Q9dq5sGU7192sSAMSlZ4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAoVEIMCiqxa6cX65ircAzEaWAZoXs%2Fw0lve5eYL18i7O9wVDIqZNohCIgawwcOSlDB34KrxoiH%2BoyfpBhrabwmEgQfTn2RMXox9qus7h%2BSk76z9m1YXKIoup9KzDo%2BngxPxpyg8bS5EmfnJEVaIceUxrTQo846fMR4i3hPdeHTdWSVFAKhj83q3Dm9%2FiZLiHAOAMYMgf0Zue07KNRo9IWegrFtZ3lshZDeRBTjMQ1CkkZ5HkFwKUCJm6iR7GEBYBtCmtHSfLwINGAH65r%2BgD15J97rvAmYKShgme2ZerfSYIZTvL%2BRAHbP9RcH%2B638h%2BNyp6PN2zTjjdcCKV40miZ6KA%2BYE7fekLPJWXZ8D6pmGhD%2FHnUK3MziJLIUrco4FTi%2Fj%2F7C57lOS1vZOEkcQ%2Bp%2F7q9I99pmW2hy4F3NOJhTzvyGZsJK7AAmoab9Ux8dSbaDnfWpF4fzQrNilwz0LpuBlXqIZg8uums4VX8%2Bkze8S4jIypP%2FtYr3TrowJOu%2F%2Bs8XDByVEnxJYhb28ntjhR4iryeF%2BREGgi6IYzEHp23yVWDHgZLMA8EewAy99iHLPkRMxdkf987I6oD8U40pFEseE4T%2F7MaRzPQmc3rqsj1dEHfZeK3V4VZuC0RCIki1UMeQSD%2BDmOs86bXdyMLOL2cUGOqUBbJm1zwZWDC8w6fgQUCZkVdcnNC1la9SkWfn3%2BEc%2FlOvRTSO3MZ8qhf4TLBHYKDh6l4ozKJNljNLTusLn9m5DkauuyL%2B6RXvFaN7eFOxvH8GdQeUj6THsyrDThjqyCzHXhwdktNxPXQ%2FrQc%2FGTJ4A%2FB46wVXZvLsFkvde%2FYO6bMKvpAJJpz2AgvQqSmKQIl1ea9vvWOL9i3lhMbh3ERSFxYQTtgTr&X-Amz-Signature=5a21ddfb10bd641990680e106c8a922a1943f7d27b296a997c3c06d401d6e66c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVVA7WRW%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGdsoYCmbwOpOo37E6F2BJMXdeAnylsN%2BoiKyhu8blWAiEA0%2FQpG0C%2BH2rvDAtYYvSmh%2F5Q9dq5sGU7192sSAMSlZ4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAoVEIMCiqxa6cX65ircAzEaWAZoXs%2Fw0lve5eYL18i7O9wVDIqZNohCIgawwcOSlDB34KrxoiH%2BoyfpBhrabwmEgQfTn2RMXox9qus7h%2BSk76z9m1YXKIoup9KzDo%2BngxPxpyg8bS5EmfnJEVaIceUxrTQo846fMR4i3hPdeHTdWSVFAKhj83q3Dm9%2FiZLiHAOAMYMgf0Zue07KNRo9IWegrFtZ3lshZDeRBTjMQ1CkkZ5HkFwKUCJm6iR7GEBYBtCmtHSfLwINGAH65r%2BgD15J97rvAmYKShgme2ZerfSYIZTvL%2BRAHbP9RcH%2B638h%2BNyp6PN2zTjjdcCKV40miZ6KA%2BYE7fekLPJWXZ8D6pmGhD%2FHnUK3MziJLIUrco4FTi%2Fj%2F7C57lOS1vZOEkcQ%2Bp%2F7q9I99pmW2hy4F3NOJhTzvyGZsJK7AAmoab9Ux8dSbaDnfWpF4fzQrNilwz0LpuBlXqIZg8uums4VX8%2Bkze8S4jIypP%2FtYr3TrowJOu%2F%2Bs8XDByVEnxJYhb28ntjhR4iryeF%2BREGgi6IYzEHp23yVWDHgZLMA8EewAy99iHLPkRMxdkf987I6oD8U40pFEseE4T%2F7MaRzPQmc3rqsj1dEHfZeK3V4VZuC0RCIki1UMeQSD%2BDmOs86bXdyMLOL2cUGOqUBbJm1zwZWDC8w6fgQUCZkVdcnNC1la9SkWfn3%2BEc%2FlOvRTSO3MZ8qhf4TLBHYKDh6l4ozKJNljNLTusLn9m5DkauuyL%2B6RXvFaN7eFOxvH8GdQeUj6THsyrDThjqyCzHXhwdktNxPXQ%2FrQc%2FGTJ4A%2FB46wVXZvLsFkvde%2FYO6bMKvpAJJpz2AgvQqSmKQIl1ea9vvWOL9i3lhMbh3ERSFxYQTtgTr&X-Amz-Signature=2b1b4e5f16934bce8ade7b806b03fc6432b89fa6f948c3bae87434761b5bc984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DYQIGG%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBmfABLxBGBRTwWNbuAeUPQhspLmoqh6WAzQVz84x20QIhAJBVvZePnT83ilozEa3M%2BdgTG3%2BgriMjGJHdBZ%2BOwUvtKv8DCCIQABoMNjM3NDIzMTgzODA1IgzgcvTdLAW7w9VrgEUq3AOMTvAl6Oi1Go9R0RiWIQVh98dMSOo2pmllIuMqYEJ%2FM%2Bn6WvxPiTeuqjqaPmrkvP1NlLBOFL58KYb835o9%2FjluMtpjIKhjS7BlbTZgDxIJ7yiMJvnRzeVW6MdqdFiv%2BKNzSuF15cnJQve4S3lV7HYwkhULTH47B%2FEyDBnLA4lVRATDY1wEv3nJQ3V%2Fa3OamJCJ%2FaMPhRxdEiFPfNshcUjBToZUDMIRAsRixkSO8MaK89DCT8kDUVwtafv2tothl2RaPcUT%2Bhz4KaRpsXfZ1a9Gyk6QW%2B4e9XR2JUNtmH6F7oMQc3Zql0A36TPTmNKX33oxCdLVk5csaKL67OtH%2BeyRRO11Am%2BHpViUy22DPgSVmfPBNP1pSHwOeYLnnOkJWABXDNn2obfcgt6qcNmeaGyYRQdATMVptn6aK%2BPHxYrHXfmGhxm6S5netNCvD9oMdX6zJMioKp5wTLBRHQMzZeLOIGW73kzYvvt6B83rsPjcPAooa%2BCFf7tgbTjYsrQDUaTtSbBLLJCd3vwOezLO44wZMqC9N2AVHCBjKNT4%2BsILVwtTU9yP53I6%2F%2Frwnphga3WEFLB5HeVZJeN2cFoNObffbSHqEetlgK3vg6zghk5lWa1tOxVz0shhu%2Fr13jCZitnFBjqkARju3oLs4HRPNvYlNxusTJ0fcQ7eZhuH5dB1SVFXHogERNguOEltLgayIkrGlp13el9g59K6mcTvIKMvlF471hZHX6ACB7mSJydlXMHGKnkqbpoZHC%2F9QgvNnIZ6ZA%2Fpf%2FnLuSsTxDfzMiKiDGTDJ1sCpIc6felvpX%2FKKs1ObT1wqf%2B%2FGloDrdnq8%2BSQ4HUhjI5YXqEG4aXuNO4vOjl8ym5ZPS7G&X-Amz-Signature=d3cac6004dafb93a896c15977ca55710be10f4e878fe55880885567740151d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVVA7WRW%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGdsoYCmbwOpOo37E6F2BJMXdeAnylsN%2BoiKyhu8blWAiEA0%2FQpG0C%2BH2rvDAtYYvSmh%2F5Q9dq5sGU7192sSAMSlZ4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAoVEIMCiqxa6cX65ircAzEaWAZoXs%2Fw0lve5eYL18i7O9wVDIqZNohCIgawwcOSlDB34KrxoiH%2BoyfpBhrabwmEgQfTn2RMXox9qus7h%2BSk76z9m1YXKIoup9KzDo%2BngxPxpyg8bS5EmfnJEVaIceUxrTQo846fMR4i3hPdeHTdWSVFAKhj83q3Dm9%2FiZLiHAOAMYMgf0Zue07KNRo9IWegrFtZ3lshZDeRBTjMQ1CkkZ5HkFwKUCJm6iR7GEBYBtCmtHSfLwINGAH65r%2BgD15J97rvAmYKShgme2ZerfSYIZTvL%2BRAHbP9RcH%2B638h%2BNyp6PN2zTjjdcCKV40miZ6KA%2BYE7fekLPJWXZ8D6pmGhD%2FHnUK3MziJLIUrco4FTi%2Fj%2F7C57lOS1vZOEkcQ%2Bp%2F7q9I99pmW2hy4F3NOJhTzvyGZsJK7AAmoab9Ux8dSbaDnfWpF4fzQrNilwz0LpuBlXqIZg8uums4VX8%2Bkze8S4jIypP%2FtYr3TrowJOu%2F%2Bs8XDByVEnxJYhb28ntjhR4iryeF%2BREGgi6IYzEHp23yVWDHgZLMA8EewAy99iHLPkRMxdkf987I6oD8U40pFEseE4T%2F7MaRzPQmc3rqsj1dEHfZeK3V4VZuC0RCIki1UMeQSD%2BDmOs86bXdyMLOL2cUGOqUBbJm1zwZWDC8w6fgQUCZkVdcnNC1la9SkWfn3%2BEc%2FlOvRTSO3MZ8qhf4TLBHYKDh6l4ozKJNljNLTusLn9m5DkauuyL%2B6RXvFaN7eFOxvH8GdQeUj6THsyrDThjqyCzHXhwdktNxPXQ%2FrQc%2FGTJ4A%2FB46wVXZvLsFkvde%2FYO6bMKvpAJJpz2AgvQqSmKQIl1ea9vvWOL9i3lhMbh3ERSFxYQTtgTr&X-Amz-Signature=330f78fa5f15ccfa7a2d3538b6f1d934e3c47f85c60c3c2a3481168bc07c97b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVVA7WRW%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGdsoYCmbwOpOo37E6F2BJMXdeAnylsN%2BoiKyhu8blWAiEA0%2FQpG0C%2BH2rvDAtYYvSmh%2F5Q9dq5sGU7192sSAMSlZ4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAoVEIMCiqxa6cX65ircAzEaWAZoXs%2Fw0lve5eYL18i7O9wVDIqZNohCIgawwcOSlDB34KrxoiH%2BoyfpBhrabwmEgQfTn2RMXox9qus7h%2BSk76z9m1YXKIoup9KzDo%2BngxPxpyg8bS5EmfnJEVaIceUxrTQo846fMR4i3hPdeHTdWSVFAKhj83q3Dm9%2FiZLiHAOAMYMgf0Zue07KNRo9IWegrFtZ3lshZDeRBTjMQ1CkkZ5HkFwKUCJm6iR7GEBYBtCmtHSfLwINGAH65r%2BgD15J97rvAmYKShgme2ZerfSYIZTvL%2BRAHbP9RcH%2B638h%2BNyp6PN2zTjjdcCKV40miZ6KA%2BYE7fekLPJWXZ8D6pmGhD%2FHnUK3MziJLIUrco4FTi%2Fj%2F7C57lOS1vZOEkcQ%2Bp%2F7q9I99pmW2hy4F3NOJhTzvyGZsJK7AAmoab9Ux8dSbaDnfWpF4fzQrNilwz0LpuBlXqIZg8uums4VX8%2Bkze8S4jIypP%2FtYr3TrowJOu%2F%2Bs8XDByVEnxJYhb28ntjhR4iryeF%2BREGgi6IYzEHp23yVWDHgZLMA8EewAy99iHLPkRMxdkf987I6oD8U40pFEseE4T%2F7MaRzPQmc3rqsj1dEHfZeK3V4VZuC0RCIki1UMeQSD%2BDmOs86bXdyMLOL2cUGOqUBbJm1zwZWDC8w6fgQUCZkVdcnNC1la9SkWfn3%2BEc%2FlOvRTSO3MZ8qhf4TLBHYKDh6l4ozKJNljNLTusLn9m5DkauuyL%2B6RXvFaN7eFOxvH8GdQeUj6THsyrDThjqyCzHXhwdktNxPXQ%2FrQc%2FGTJ4A%2FB46wVXZvLsFkvde%2FYO6bMKvpAJJpz2AgvQqSmKQIl1ea9vvWOL9i3lhMbh3ERSFxYQTtgTr&X-Amz-Signature=afc7d2aac988f961a65ef92945239eded75460f92ecc94bb5e04bbf4ace4fb70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVVA7WRW%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGdsoYCmbwOpOo37E6F2BJMXdeAnylsN%2BoiKyhu8blWAiEA0%2FQpG0C%2BH2rvDAtYYvSmh%2F5Q9dq5sGU7192sSAMSlZ4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAoVEIMCiqxa6cX65ircAzEaWAZoXs%2Fw0lve5eYL18i7O9wVDIqZNohCIgawwcOSlDB34KrxoiH%2BoyfpBhrabwmEgQfTn2RMXox9qus7h%2BSk76z9m1YXKIoup9KzDo%2BngxPxpyg8bS5EmfnJEVaIceUxrTQo846fMR4i3hPdeHTdWSVFAKhj83q3Dm9%2FiZLiHAOAMYMgf0Zue07KNRo9IWegrFtZ3lshZDeRBTjMQ1CkkZ5HkFwKUCJm6iR7GEBYBtCmtHSfLwINGAH65r%2BgD15J97rvAmYKShgme2ZerfSYIZTvL%2BRAHbP9RcH%2B638h%2BNyp6PN2zTjjdcCKV40miZ6KA%2BYE7fekLPJWXZ8D6pmGhD%2FHnUK3MziJLIUrco4FTi%2Fj%2F7C57lOS1vZOEkcQ%2Bp%2F7q9I99pmW2hy4F3NOJhTzvyGZsJK7AAmoab9Ux8dSbaDnfWpF4fzQrNilwz0LpuBlXqIZg8uums4VX8%2Bkze8S4jIypP%2FtYr3TrowJOu%2F%2Bs8XDByVEnxJYhb28ntjhR4iryeF%2BREGgi6IYzEHp23yVWDHgZLMA8EewAy99iHLPkRMxdkf987I6oD8U40pFEseE4T%2F7MaRzPQmc3rqsj1dEHfZeK3V4VZuC0RCIki1UMeQSD%2BDmOs86bXdyMLOL2cUGOqUBbJm1zwZWDC8w6fgQUCZkVdcnNC1la9SkWfn3%2BEc%2FlOvRTSO3MZ8qhf4TLBHYKDh6l4ozKJNljNLTusLn9m5DkauuyL%2B6RXvFaN7eFOxvH8GdQeUj6THsyrDThjqyCzHXhwdktNxPXQ%2FrQc%2FGTJ4A%2FB46wVXZvLsFkvde%2FYO6bMKvpAJJpz2AgvQqSmKQIl1ea9vvWOL9i3lhMbh3ERSFxYQTtgTr&X-Amz-Signature=79925c0a14d7ad3cdf86e59eeb16a8542b27b3660a0c82990e00c4d6ccaf6791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVVA7WRW%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGdsoYCmbwOpOo37E6F2BJMXdeAnylsN%2BoiKyhu8blWAiEA0%2FQpG0C%2BH2rvDAtYYvSmh%2F5Q9dq5sGU7192sSAMSlZ4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAoVEIMCiqxa6cX65ircAzEaWAZoXs%2Fw0lve5eYL18i7O9wVDIqZNohCIgawwcOSlDB34KrxoiH%2BoyfpBhrabwmEgQfTn2RMXox9qus7h%2BSk76z9m1YXKIoup9KzDo%2BngxPxpyg8bS5EmfnJEVaIceUxrTQo846fMR4i3hPdeHTdWSVFAKhj83q3Dm9%2FiZLiHAOAMYMgf0Zue07KNRo9IWegrFtZ3lshZDeRBTjMQ1CkkZ5HkFwKUCJm6iR7GEBYBtCmtHSfLwINGAH65r%2BgD15J97rvAmYKShgme2ZerfSYIZTvL%2BRAHbP9RcH%2B638h%2BNyp6PN2zTjjdcCKV40miZ6KA%2BYE7fekLPJWXZ8D6pmGhD%2FHnUK3MziJLIUrco4FTi%2Fj%2F7C57lOS1vZOEkcQ%2Bp%2F7q9I99pmW2hy4F3NOJhTzvyGZsJK7AAmoab9Ux8dSbaDnfWpF4fzQrNilwz0LpuBlXqIZg8uums4VX8%2Bkze8S4jIypP%2FtYr3TrowJOu%2F%2Bs8XDByVEnxJYhb28ntjhR4iryeF%2BREGgi6IYzEHp23yVWDHgZLMA8EewAy99iHLPkRMxdkf987I6oD8U40pFEseE4T%2F7MaRzPQmc3rqsj1dEHfZeK3V4VZuC0RCIki1UMeQSD%2BDmOs86bXdyMLOL2cUGOqUBbJm1zwZWDC8w6fgQUCZkVdcnNC1la9SkWfn3%2BEc%2FlOvRTSO3MZ8qhf4TLBHYKDh6l4ozKJNljNLTusLn9m5DkauuyL%2B6RXvFaN7eFOxvH8GdQeUj6THsyrDThjqyCzHXhwdktNxPXQ%2FrQc%2FGTJ4A%2FB46wVXZvLsFkvde%2FYO6bMKvpAJJpz2AgvQqSmKQIl1ea9vvWOL9i3lhMbh3ERSFxYQTtgTr&X-Amz-Signature=bea567b8f6771f62a93ffecc96503d5ec397c55bf2d5721655641e3b4855dd1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVVA7WRW%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGdsoYCmbwOpOo37E6F2BJMXdeAnylsN%2BoiKyhu8blWAiEA0%2FQpG0C%2BH2rvDAtYYvSmh%2F5Q9dq5sGU7192sSAMSlZ4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAoVEIMCiqxa6cX65ircAzEaWAZoXs%2Fw0lve5eYL18i7O9wVDIqZNohCIgawwcOSlDB34KrxoiH%2BoyfpBhrabwmEgQfTn2RMXox9qus7h%2BSk76z9m1YXKIoup9KzDo%2BngxPxpyg8bS5EmfnJEVaIceUxrTQo846fMR4i3hPdeHTdWSVFAKhj83q3Dm9%2FiZLiHAOAMYMgf0Zue07KNRo9IWegrFtZ3lshZDeRBTjMQ1CkkZ5HkFwKUCJm6iR7GEBYBtCmtHSfLwINGAH65r%2BgD15J97rvAmYKShgme2ZerfSYIZTvL%2BRAHbP9RcH%2B638h%2BNyp6PN2zTjjdcCKV40miZ6KA%2BYE7fekLPJWXZ8D6pmGhD%2FHnUK3MziJLIUrco4FTi%2Fj%2F7C57lOS1vZOEkcQ%2Bp%2F7q9I99pmW2hy4F3NOJhTzvyGZsJK7AAmoab9Ux8dSbaDnfWpF4fzQrNilwz0LpuBlXqIZg8uums4VX8%2Bkze8S4jIypP%2FtYr3TrowJOu%2F%2Bs8XDByVEnxJYhb28ntjhR4iryeF%2BREGgi6IYzEHp23yVWDHgZLMA8EewAy99iHLPkRMxdkf987I6oD8U40pFEseE4T%2F7MaRzPQmc3rqsj1dEHfZeK3V4VZuC0RCIki1UMeQSD%2BDmOs86bXdyMLOL2cUGOqUBbJm1zwZWDC8w6fgQUCZkVdcnNC1la9SkWfn3%2BEc%2FlOvRTSO3MZ8qhf4TLBHYKDh6l4ozKJNljNLTusLn9m5DkauuyL%2B6RXvFaN7eFOxvH8GdQeUj6THsyrDThjqyCzHXhwdktNxPXQ%2FrQc%2FGTJ4A%2FB46wVXZvLsFkvde%2FYO6bMKvpAJJpz2AgvQqSmKQIl1ea9vvWOL9i3lhMbh3ERSFxYQTtgTr&X-Amz-Signature=46ef28b33a0aa49c087f98ea59da66c940fedb331e8c6e264d41630c8c92dfcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVVA7WRW%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGdsoYCmbwOpOo37E6F2BJMXdeAnylsN%2BoiKyhu8blWAiEA0%2FQpG0C%2BH2rvDAtYYvSmh%2F5Q9dq5sGU7192sSAMSlZ4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAoVEIMCiqxa6cX65ircAzEaWAZoXs%2Fw0lve5eYL18i7O9wVDIqZNohCIgawwcOSlDB34KrxoiH%2BoyfpBhrabwmEgQfTn2RMXox9qus7h%2BSk76z9m1YXKIoup9KzDo%2BngxPxpyg8bS5EmfnJEVaIceUxrTQo846fMR4i3hPdeHTdWSVFAKhj83q3Dm9%2FiZLiHAOAMYMgf0Zue07KNRo9IWegrFtZ3lshZDeRBTjMQ1CkkZ5HkFwKUCJm6iR7GEBYBtCmtHSfLwINGAH65r%2BgD15J97rvAmYKShgme2ZerfSYIZTvL%2BRAHbP9RcH%2B638h%2BNyp6PN2zTjjdcCKV40miZ6KA%2BYE7fekLPJWXZ8D6pmGhD%2FHnUK3MziJLIUrco4FTi%2Fj%2F7C57lOS1vZOEkcQ%2Bp%2F7q9I99pmW2hy4F3NOJhTzvyGZsJK7AAmoab9Ux8dSbaDnfWpF4fzQrNilwz0LpuBlXqIZg8uums4VX8%2Bkze8S4jIypP%2FtYr3TrowJOu%2F%2Bs8XDByVEnxJYhb28ntjhR4iryeF%2BREGgi6IYzEHp23yVWDHgZLMA8EewAy99iHLPkRMxdkf987I6oD8U40pFEseE4T%2F7MaRzPQmc3rqsj1dEHfZeK3V4VZuC0RCIki1UMeQSD%2BDmOs86bXdyMLOL2cUGOqUBbJm1zwZWDC8w6fgQUCZkVdcnNC1la9SkWfn3%2BEc%2FlOvRTSO3MZ8qhf4TLBHYKDh6l4ozKJNljNLTusLn9m5DkauuyL%2B6RXvFaN7eFOxvH8GdQeUj6THsyrDThjqyCzHXhwdktNxPXQ%2FrQc%2FGTJ4A%2FB46wVXZvLsFkvde%2FYO6bMKvpAJJpz2AgvQqSmKQIl1ea9vvWOL9i3lhMbh3ERSFxYQTtgTr&X-Amz-Signature=8b3be278ee4e82c97271d4381c36640d9758109f03a6bb1d6013bbf42d73448e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


