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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDCWZF4%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICusq8T2qZbQHGYAUTNHJ0Eh%2FDMeqXlDrVl4Zs4VXp0hAiEA9zBwTZfChFtmLykA0LPgXH%2F0olC1dak6bdDye92SIsAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHR%2F77rOu3j6xnAoMCrcAy90fLDk2NOJzOM6rGtnmQpZjzTU0R1W99eDO1LbqfG%2FCsRlTwBWHh8SeMxfP0H1ch9qeuPT9FNpRuQEoywopUVJnkuCY332FVKavD5BXpXGfyPn2HLr9XRId85k9kyfLZRJGIEpDO1qmuZZOtDTM1R7HEFaB9gfiItIy9fh2gZk76MK3Gtk1sQxiuJjN%2BfiTvmPGGLy2a5cef%2BaDt4dOlA1ycvB3C%2B85a9Zu6OJLBWWCzlR1S3D2yZ%2BWX3WGPAFxO5x1BfTqcyKATwz%2FFrg1CpNW48RsQdnutnqDqdWgtZiip0ky0IPcSXIXQqpdr0mZ0LwRVSYO%2FLR6Ilh5qtmiTQ0%2Fx9ggfBX6fIKQnVthECzhclSYF9m5MRbu7m5uGGbVrMoVVS1FAZ%2Bbx%2BfYjhDm%2FzSzhUqTFstd8SuGk%2FzstaZBK9%2FsKJv%2BnJwTWfyhq9I2x%2BM0lwo%2BWq4sN2PUTiS0IV7HjQUXxpJ1rCKP20g%2Fgd%2FDbE%2FX72eGCy5YfIfLCVeQx9G1jwaax1Pwhf07lOxO1lw9Zr6eL93LibRGPnC%2FbAaBslUnJhaydJUICQE1qcv%2BdhcOwco9s3MZWeJSyQ3NeCrOx8ZUbgJ6Rm22Gu6av9bdXhuJyVaXLOXsYZyMKDn3MYGOqUBJCoruae00vmX29vV%2BzyhSxzUrvd7VFvVv0lInJvZZ5aBOcohOF9x7Kq9EFe1stG7jeHYqhrrkLGiMxiwjkqUgWXN0eiu73NVSMidrJrImeu7PaNLsV8uos7TdNLb%2Bs4f27cv%2FQ46KqwwGg5jJkk5hbKcNho%2F9Y8pbk30rmlg2Sq9WsaZizjDmucM6YQXkmwu%2BjqDg%2BfBUOk6QaoVLNekFUcQjp0M&X-Amz-Signature=c5e690e563e3d25a7a7080710f72038dc56e8cf9a7ad2b6848cd33e69f3a1ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDCWZF4%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICusq8T2qZbQHGYAUTNHJ0Eh%2FDMeqXlDrVl4Zs4VXp0hAiEA9zBwTZfChFtmLykA0LPgXH%2F0olC1dak6bdDye92SIsAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHR%2F77rOu3j6xnAoMCrcAy90fLDk2NOJzOM6rGtnmQpZjzTU0R1W99eDO1LbqfG%2FCsRlTwBWHh8SeMxfP0H1ch9qeuPT9FNpRuQEoywopUVJnkuCY332FVKavD5BXpXGfyPn2HLr9XRId85k9kyfLZRJGIEpDO1qmuZZOtDTM1R7HEFaB9gfiItIy9fh2gZk76MK3Gtk1sQxiuJjN%2BfiTvmPGGLy2a5cef%2BaDt4dOlA1ycvB3C%2B85a9Zu6OJLBWWCzlR1S3D2yZ%2BWX3WGPAFxO5x1BfTqcyKATwz%2FFrg1CpNW48RsQdnutnqDqdWgtZiip0ky0IPcSXIXQqpdr0mZ0LwRVSYO%2FLR6Ilh5qtmiTQ0%2Fx9ggfBX6fIKQnVthECzhclSYF9m5MRbu7m5uGGbVrMoVVS1FAZ%2Bbx%2BfYjhDm%2FzSzhUqTFstd8SuGk%2FzstaZBK9%2FsKJv%2BnJwTWfyhq9I2x%2BM0lwo%2BWq4sN2PUTiS0IV7HjQUXxpJ1rCKP20g%2Fgd%2FDbE%2FX72eGCy5YfIfLCVeQx9G1jwaax1Pwhf07lOxO1lw9Zr6eL93LibRGPnC%2FbAaBslUnJhaydJUICQE1qcv%2BdhcOwco9s3MZWeJSyQ3NeCrOx8ZUbgJ6Rm22Gu6av9bdXhuJyVaXLOXsYZyMKDn3MYGOqUBJCoruae00vmX29vV%2BzyhSxzUrvd7VFvVv0lInJvZZ5aBOcohOF9x7Kq9EFe1stG7jeHYqhrrkLGiMxiwjkqUgWXN0eiu73NVSMidrJrImeu7PaNLsV8uos7TdNLb%2Bs4f27cv%2FQ46KqwwGg5jJkk5hbKcNho%2F9Y8pbk30rmlg2Sq9WsaZizjDmucM6YQXkmwu%2BjqDg%2BfBUOk6QaoVLNekFUcQjp0M&X-Amz-Signature=e3c4bf3b31af3363d3f13b69c93e86d18e9df8eee51ed56ea578c1696a4c7efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDCWZF4%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICusq8T2qZbQHGYAUTNHJ0Eh%2FDMeqXlDrVl4Zs4VXp0hAiEA9zBwTZfChFtmLykA0LPgXH%2F0olC1dak6bdDye92SIsAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHR%2F77rOu3j6xnAoMCrcAy90fLDk2NOJzOM6rGtnmQpZjzTU0R1W99eDO1LbqfG%2FCsRlTwBWHh8SeMxfP0H1ch9qeuPT9FNpRuQEoywopUVJnkuCY332FVKavD5BXpXGfyPn2HLr9XRId85k9kyfLZRJGIEpDO1qmuZZOtDTM1R7HEFaB9gfiItIy9fh2gZk76MK3Gtk1sQxiuJjN%2BfiTvmPGGLy2a5cef%2BaDt4dOlA1ycvB3C%2B85a9Zu6OJLBWWCzlR1S3D2yZ%2BWX3WGPAFxO5x1BfTqcyKATwz%2FFrg1CpNW48RsQdnutnqDqdWgtZiip0ky0IPcSXIXQqpdr0mZ0LwRVSYO%2FLR6Ilh5qtmiTQ0%2Fx9ggfBX6fIKQnVthECzhclSYF9m5MRbu7m5uGGbVrMoVVS1FAZ%2Bbx%2BfYjhDm%2FzSzhUqTFstd8SuGk%2FzstaZBK9%2FsKJv%2BnJwTWfyhq9I2x%2BM0lwo%2BWq4sN2PUTiS0IV7HjQUXxpJ1rCKP20g%2Fgd%2FDbE%2FX72eGCy5YfIfLCVeQx9G1jwaax1Pwhf07lOxO1lw9Zr6eL93LibRGPnC%2FbAaBslUnJhaydJUICQE1qcv%2BdhcOwco9s3MZWeJSyQ3NeCrOx8ZUbgJ6Rm22Gu6av9bdXhuJyVaXLOXsYZyMKDn3MYGOqUBJCoruae00vmX29vV%2BzyhSxzUrvd7VFvVv0lInJvZZ5aBOcohOF9x7Kq9EFe1stG7jeHYqhrrkLGiMxiwjkqUgWXN0eiu73NVSMidrJrImeu7PaNLsV8uos7TdNLb%2Bs4f27cv%2FQ46KqwwGg5jJkk5hbKcNho%2F9Y8pbk30rmlg2Sq9WsaZizjDmucM6YQXkmwu%2BjqDg%2BfBUOk6QaoVLNekFUcQjp0M&X-Amz-Signature=6ecf3d16742952b28bd6f1ffa0b902aebd4698b2dfc38daf546d3221e7f999c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDCWZF4%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICusq8T2qZbQHGYAUTNHJ0Eh%2FDMeqXlDrVl4Zs4VXp0hAiEA9zBwTZfChFtmLykA0LPgXH%2F0olC1dak6bdDye92SIsAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHR%2F77rOu3j6xnAoMCrcAy90fLDk2NOJzOM6rGtnmQpZjzTU0R1W99eDO1LbqfG%2FCsRlTwBWHh8SeMxfP0H1ch9qeuPT9FNpRuQEoywopUVJnkuCY332FVKavD5BXpXGfyPn2HLr9XRId85k9kyfLZRJGIEpDO1qmuZZOtDTM1R7HEFaB9gfiItIy9fh2gZk76MK3Gtk1sQxiuJjN%2BfiTvmPGGLy2a5cef%2BaDt4dOlA1ycvB3C%2B85a9Zu6OJLBWWCzlR1S3D2yZ%2BWX3WGPAFxO5x1BfTqcyKATwz%2FFrg1CpNW48RsQdnutnqDqdWgtZiip0ky0IPcSXIXQqpdr0mZ0LwRVSYO%2FLR6Ilh5qtmiTQ0%2Fx9ggfBX6fIKQnVthECzhclSYF9m5MRbu7m5uGGbVrMoVVS1FAZ%2Bbx%2BfYjhDm%2FzSzhUqTFstd8SuGk%2FzstaZBK9%2FsKJv%2BnJwTWfyhq9I2x%2BM0lwo%2BWq4sN2PUTiS0IV7HjQUXxpJ1rCKP20g%2Fgd%2FDbE%2FX72eGCy5YfIfLCVeQx9G1jwaax1Pwhf07lOxO1lw9Zr6eL93LibRGPnC%2FbAaBslUnJhaydJUICQE1qcv%2BdhcOwco9s3MZWeJSyQ3NeCrOx8ZUbgJ6Rm22Gu6av9bdXhuJyVaXLOXsYZyMKDn3MYGOqUBJCoruae00vmX29vV%2BzyhSxzUrvd7VFvVv0lInJvZZ5aBOcohOF9x7Kq9EFe1stG7jeHYqhrrkLGiMxiwjkqUgWXN0eiu73NVSMidrJrImeu7PaNLsV8uos7TdNLb%2Bs4f27cv%2FQ46KqwwGg5jJkk5hbKcNho%2F9Y8pbk30rmlg2Sq9WsaZizjDmucM6YQXkmwu%2BjqDg%2BfBUOk6QaoVLNekFUcQjp0M&X-Amz-Signature=416e83c6abf2a206997c5435077ea32f77d3fbfcbc5150162815075bdde71616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PCPPKDE%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEmxVlOb0YqZZvycaMFaaeJqm1s2sLEdSn2ybiPv9kMpAiEAwULgh7GEPsyL8XylosGRVeI09bMQxTVybkvqG%2FDm4UIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnegvG34ozyrXFCTircA5Duys2ZkNbwG2pMg8XTSNI0i99ldka6hB9IrPAUyy%2Foldv6y6Vi8Jj1rzL%2Fxl1PuX0ZvuLdWNCfMz7YIhUHv4hoHK8PS3zzCbp3EN%2Fqx4nkLopYvFW0Yb0gKtMfMKKSkMmqtPW6tLHGEELWhEezRYjmFHaf%2FzQnch2Xav%2BkXAf02NXvaRsqmzI7Kp%2B0c01oVMsn%2F3unLgAplfxm75D3kcx6WFBdK5Si2d3lvDsVdLaiEXWDXs4DsFjgGq0dIceCPisLk2bRU9MhUjF5c1UOeWCkfLJsV5D4dcSxiJ84Ymz%2FhWbgyH3Fru2S%2BhyfAGSUtIGEUAu7w00rc28q677f47OfN8AkRf4ATiHbI6cSgp6LSJc6Sf1PRT5AK909U%2BZ7VwGNfmE5Z%2BfVRBNqY3XKbRrHGZBCE2PB2HQEj43L2q045jWcF%2BQfbsyL4nj0GDr%2FfY6nvT9Q5CAMBj7XZUDYlNXuRCINxD4DxBKXBwDRjZE7RKtyDxTkfXUrQFBXQiMKrrV6Dbt8azVezC4Xsq%2BOhWwlrFfQu7oGr3t9kk4%2FPEksnsAmOEmcMIyEMoLFkZ0qqpUNbJKvyo4RumfUEmI%2F4i9R%2BnTa0oexwZyC0JKE6niS8kFKjLT7G%2BCjEk70MJLn3MYGOqUB2vP8juZkgF4vxCi3hlvtpWsQDlIxD6fVl%2BJu%2BLfa7h08OXniP9BfytqvQmevaXsaCJFqmidGhUtbdwSzyOl7OvattWyuahzJ0vqiWUdH7UBfnNNEU9%2FK5fqIRhy4y22PYFD8zL8vpGObqSghDh0pKbCBr8oEc9e7aUCb7m5GJiIN%2FcTA%2FN%2FHGEMsQgSGfNMq3jIXc0MQofbfUvVr3vAquWZh%2Bs33&X-Amz-Signature=4faa28934a259ff85e82cfe8506c9f79d1b4295e5b5c9bfe8269042c7ad9e54d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDCWZF4%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICusq8T2qZbQHGYAUTNHJ0Eh%2FDMeqXlDrVl4Zs4VXp0hAiEA9zBwTZfChFtmLykA0LPgXH%2F0olC1dak6bdDye92SIsAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHR%2F77rOu3j6xnAoMCrcAy90fLDk2NOJzOM6rGtnmQpZjzTU0R1W99eDO1LbqfG%2FCsRlTwBWHh8SeMxfP0H1ch9qeuPT9FNpRuQEoywopUVJnkuCY332FVKavD5BXpXGfyPn2HLr9XRId85k9kyfLZRJGIEpDO1qmuZZOtDTM1R7HEFaB9gfiItIy9fh2gZk76MK3Gtk1sQxiuJjN%2BfiTvmPGGLy2a5cef%2BaDt4dOlA1ycvB3C%2B85a9Zu6OJLBWWCzlR1S3D2yZ%2BWX3WGPAFxO5x1BfTqcyKATwz%2FFrg1CpNW48RsQdnutnqDqdWgtZiip0ky0IPcSXIXQqpdr0mZ0LwRVSYO%2FLR6Ilh5qtmiTQ0%2Fx9ggfBX6fIKQnVthECzhclSYF9m5MRbu7m5uGGbVrMoVVS1FAZ%2Bbx%2BfYjhDm%2FzSzhUqTFstd8SuGk%2FzstaZBK9%2FsKJv%2BnJwTWfyhq9I2x%2BM0lwo%2BWq4sN2PUTiS0IV7HjQUXxpJ1rCKP20g%2Fgd%2FDbE%2FX72eGCy5YfIfLCVeQx9G1jwaax1Pwhf07lOxO1lw9Zr6eL93LibRGPnC%2FbAaBslUnJhaydJUICQE1qcv%2BdhcOwco9s3MZWeJSyQ3NeCrOx8ZUbgJ6Rm22Gu6av9bdXhuJyVaXLOXsYZyMKDn3MYGOqUBJCoruae00vmX29vV%2BzyhSxzUrvd7VFvVv0lInJvZZ5aBOcohOF9x7Kq9EFe1stG7jeHYqhrrkLGiMxiwjkqUgWXN0eiu73NVSMidrJrImeu7PaNLsV8uos7TdNLb%2Bs4f27cv%2FQ46KqwwGg5jJkk5hbKcNho%2F9Y8pbk30rmlg2Sq9WsaZizjDmucM6YQXkmwu%2BjqDg%2BfBUOk6QaoVLNekFUcQjp0M&X-Amz-Signature=8160fa50cf783ca29e622e9c48e3f6b2b377ae8301d1c91f00edff556d48861a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDCWZF4%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICusq8T2qZbQHGYAUTNHJ0Eh%2FDMeqXlDrVl4Zs4VXp0hAiEA9zBwTZfChFtmLykA0LPgXH%2F0olC1dak6bdDye92SIsAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHR%2F77rOu3j6xnAoMCrcAy90fLDk2NOJzOM6rGtnmQpZjzTU0R1W99eDO1LbqfG%2FCsRlTwBWHh8SeMxfP0H1ch9qeuPT9FNpRuQEoywopUVJnkuCY332FVKavD5BXpXGfyPn2HLr9XRId85k9kyfLZRJGIEpDO1qmuZZOtDTM1R7HEFaB9gfiItIy9fh2gZk76MK3Gtk1sQxiuJjN%2BfiTvmPGGLy2a5cef%2BaDt4dOlA1ycvB3C%2B85a9Zu6OJLBWWCzlR1S3D2yZ%2BWX3WGPAFxO5x1BfTqcyKATwz%2FFrg1CpNW48RsQdnutnqDqdWgtZiip0ky0IPcSXIXQqpdr0mZ0LwRVSYO%2FLR6Ilh5qtmiTQ0%2Fx9ggfBX6fIKQnVthECzhclSYF9m5MRbu7m5uGGbVrMoVVS1FAZ%2Bbx%2BfYjhDm%2FzSzhUqTFstd8SuGk%2FzstaZBK9%2FsKJv%2BnJwTWfyhq9I2x%2BM0lwo%2BWq4sN2PUTiS0IV7HjQUXxpJ1rCKP20g%2Fgd%2FDbE%2FX72eGCy5YfIfLCVeQx9G1jwaax1Pwhf07lOxO1lw9Zr6eL93LibRGPnC%2FbAaBslUnJhaydJUICQE1qcv%2BdhcOwco9s3MZWeJSyQ3NeCrOx8ZUbgJ6Rm22Gu6av9bdXhuJyVaXLOXsYZyMKDn3MYGOqUBJCoruae00vmX29vV%2BzyhSxzUrvd7VFvVv0lInJvZZ5aBOcohOF9x7Kq9EFe1stG7jeHYqhrrkLGiMxiwjkqUgWXN0eiu73NVSMidrJrImeu7PaNLsV8uos7TdNLb%2Bs4f27cv%2FQ46KqwwGg5jJkk5hbKcNho%2F9Y8pbk30rmlg2Sq9WsaZizjDmucM6YQXkmwu%2BjqDg%2BfBUOk6QaoVLNekFUcQjp0M&X-Amz-Signature=f5a3f4bd93ff8f11556bb7ae7f194111102353cf4a9ee570ccf1f72832dca287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDCWZF4%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICusq8T2qZbQHGYAUTNHJ0Eh%2FDMeqXlDrVl4Zs4VXp0hAiEA9zBwTZfChFtmLykA0LPgXH%2F0olC1dak6bdDye92SIsAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHR%2F77rOu3j6xnAoMCrcAy90fLDk2NOJzOM6rGtnmQpZjzTU0R1W99eDO1LbqfG%2FCsRlTwBWHh8SeMxfP0H1ch9qeuPT9FNpRuQEoywopUVJnkuCY332FVKavD5BXpXGfyPn2HLr9XRId85k9kyfLZRJGIEpDO1qmuZZOtDTM1R7HEFaB9gfiItIy9fh2gZk76MK3Gtk1sQxiuJjN%2BfiTvmPGGLy2a5cef%2BaDt4dOlA1ycvB3C%2B85a9Zu6OJLBWWCzlR1S3D2yZ%2BWX3WGPAFxO5x1BfTqcyKATwz%2FFrg1CpNW48RsQdnutnqDqdWgtZiip0ky0IPcSXIXQqpdr0mZ0LwRVSYO%2FLR6Ilh5qtmiTQ0%2Fx9ggfBX6fIKQnVthECzhclSYF9m5MRbu7m5uGGbVrMoVVS1FAZ%2Bbx%2BfYjhDm%2FzSzhUqTFstd8SuGk%2FzstaZBK9%2FsKJv%2BnJwTWfyhq9I2x%2BM0lwo%2BWq4sN2PUTiS0IV7HjQUXxpJ1rCKP20g%2Fgd%2FDbE%2FX72eGCy5YfIfLCVeQx9G1jwaax1Pwhf07lOxO1lw9Zr6eL93LibRGPnC%2FbAaBslUnJhaydJUICQE1qcv%2BdhcOwco9s3MZWeJSyQ3NeCrOx8ZUbgJ6Rm22Gu6av9bdXhuJyVaXLOXsYZyMKDn3MYGOqUBJCoruae00vmX29vV%2BzyhSxzUrvd7VFvVv0lInJvZZ5aBOcohOF9x7Kq9EFe1stG7jeHYqhrrkLGiMxiwjkqUgWXN0eiu73NVSMidrJrImeu7PaNLsV8uos7TdNLb%2Bs4f27cv%2FQ46KqwwGg5jJkk5hbKcNho%2F9Y8pbk30rmlg2Sq9WsaZizjDmucM6YQXkmwu%2BjqDg%2BfBUOk6QaoVLNekFUcQjp0M&X-Amz-Signature=4533e609d501e6ae178d56ad1b135fd4ce118b6cf99980dfc2ebc541191edb13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDCWZF4%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICusq8T2qZbQHGYAUTNHJ0Eh%2FDMeqXlDrVl4Zs4VXp0hAiEA9zBwTZfChFtmLykA0LPgXH%2F0olC1dak6bdDye92SIsAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHR%2F77rOu3j6xnAoMCrcAy90fLDk2NOJzOM6rGtnmQpZjzTU0R1W99eDO1LbqfG%2FCsRlTwBWHh8SeMxfP0H1ch9qeuPT9FNpRuQEoywopUVJnkuCY332FVKavD5BXpXGfyPn2HLr9XRId85k9kyfLZRJGIEpDO1qmuZZOtDTM1R7HEFaB9gfiItIy9fh2gZk76MK3Gtk1sQxiuJjN%2BfiTvmPGGLy2a5cef%2BaDt4dOlA1ycvB3C%2B85a9Zu6OJLBWWCzlR1S3D2yZ%2BWX3WGPAFxO5x1BfTqcyKATwz%2FFrg1CpNW48RsQdnutnqDqdWgtZiip0ky0IPcSXIXQqpdr0mZ0LwRVSYO%2FLR6Ilh5qtmiTQ0%2Fx9ggfBX6fIKQnVthECzhclSYF9m5MRbu7m5uGGbVrMoVVS1FAZ%2Bbx%2BfYjhDm%2FzSzhUqTFstd8SuGk%2FzstaZBK9%2FsKJv%2BnJwTWfyhq9I2x%2BM0lwo%2BWq4sN2PUTiS0IV7HjQUXxpJ1rCKP20g%2Fgd%2FDbE%2FX72eGCy5YfIfLCVeQx9G1jwaax1Pwhf07lOxO1lw9Zr6eL93LibRGPnC%2FbAaBslUnJhaydJUICQE1qcv%2BdhcOwco9s3MZWeJSyQ3NeCrOx8ZUbgJ6Rm22Gu6av9bdXhuJyVaXLOXsYZyMKDn3MYGOqUBJCoruae00vmX29vV%2BzyhSxzUrvd7VFvVv0lInJvZZ5aBOcohOF9x7Kq9EFe1stG7jeHYqhrrkLGiMxiwjkqUgWXN0eiu73NVSMidrJrImeu7PaNLsV8uos7TdNLb%2Bs4f27cv%2FQ46KqwwGg5jJkk5hbKcNho%2F9Y8pbk30rmlg2Sq9WsaZizjDmucM6YQXkmwu%2BjqDg%2BfBUOk6QaoVLNekFUcQjp0M&X-Amz-Signature=10cbea8fb425e06170d87946091fbd421744175cecf46e0d2500f2d8c6de76bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDCWZF4%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICusq8T2qZbQHGYAUTNHJ0Eh%2FDMeqXlDrVl4Zs4VXp0hAiEA9zBwTZfChFtmLykA0LPgXH%2F0olC1dak6bdDye92SIsAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHR%2F77rOu3j6xnAoMCrcAy90fLDk2NOJzOM6rGtnmQpZjzTU0R1W99eDO1LbqfG%2FCsRlTwBWHh8SeMxfP0H1ch9qeuPT9FNpRuQEoywopUVJnkuCY332FVKavD5BXpXGfyPn2HLr9XRId85k9kyfLZRJGIEpDO1qmuZZOtDTM1R7HEFaB9gfiItIy9fh2gZk76MK3Gtk1sQxiuJjN%2BfiTvmPGGLy2a5cef%2BaDt4dOlA1ycvB3C%2B85a9Zu6OJLBWWCzlR1S3D2yZ%2BWX3WGPAFxO5x1BfTqcyKATwz%2FFrg1CpNW48RsQdnutnqDqdWgtZiip0ky0IPcSXIXQqpdr0mZ0LwRVSYO%2FLR6Ilh5qtmiTQ0%2Fx9ggfBX6fIKQnVthECzhclSYF9m5MRbu7m5uGGbVrMoVVS1FAZ%2Bbx%2BfYjhDm%2FzSzhUqTFstd8SuGk%2FzstaZBK9%2FsKJv%2BnJwTWfyhq9I2x%2BM0lwo%2BWq4sN2PUTiS0IV7HjQUXxpJ1rCKP20g%2Fgd%2FDbE%2FX72eGCy5YfIfLCVeQx9G1jwaax1Pwhf07lOxO1lw9Zr6eL93LibRGPnC%2FbAaBslUnJhaydJUICQE1qcv%2BdhcOwco9s3MZWeJSyQ3NeCrOx8ZUbgJ6Rm22Gu6av9bdXhuJyVaXLOXsYZyMKDn3MYGOqUBJCoruae00vmX29vV%2BzyhSxzUrvd7VFvVv0lInJvZZ5aBOcohOF9x7Kq9EFe1stG7jeHYqhrrkLGiMxiwjkqUgWXN0eiu73NVSMidrJrImeu7PaNLsV8uos7TdNLb%2Bs4f27cv%2FQ46KqwwGg5jJkk5hbKcNho%2F9Y8pbk30rmlg2Sq9WsaZizjDmucM6YQXkmwu%2BjqDg%2BfBUOk6QaoVLNekFUcQjp0M&X-Amz-Signature=de9742edfe6fab3061a7c29572f53817ab7295ca2a9a7f8ffc58567ce0cd4c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDCWZF4%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICusq8T2qZbQHGYAUTNHJ0Eh%2FDMeqXlDrVl4Zs4VXp0hAiEA9zBwTZfChFtmLykA0LPgXH%2F0olC1dak6bdDye92SIsAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHR%2F77rOu3j6xnAoMCrcAy90fLDk2NOJzOM6rGtnmQpZjzTU0R1W99eDO1LbqfG%2FCsRlTwBWHh8SeMxfP0H1ch9qeuPT9FNpRuQEoywopUVJnkuCY332FVKavD5BXpXGfyPn2HLr9XRId85k9kyfLZRJGIEpDO1qmuZZOtDTM1R7HEFaB9gfiItIy9fh2gZk76MK3Gtk1sQxiuJjN%2BfiTvmPGGLy2a5cef%2BaDt4dOlA1ycvB3C%2B85a9Zu6OJLBWWCzlR1S3D2yZ%2BWX3WGPAFxO5x1BfTqcyKATwz%2FFrg1CpNW48RsQdnutnqDqdWgtZiip0ky0IPcSXIXQqpdr0mZ0LwRVSYO%2FLR6Ilh5qtmiTQ0%2Fx9ggfBX6fIKQnVthECzhclSYF9m5MRbu7m5uGGbVrMoVVS1FAZ%2Bbx%2BfYjhDm%2FzSzhUqTFstd8SuGk%2FzstaZBK9%2FsKJv%2BnJwTWfyhq9I2x%2BM0lwo%2BWq4sN2PUTiS0IV7HjQUXxpJ1rCKP20g%2Fgd%2FDbE%2FX72eGCy5YfIfLCVeQx9G1jwaax1Pwhf07lOxO1lw9Zr6eL93LibRGPnC%2FbAaBslUnJhaydJUICQE1qcv%2BdhcOwco9s3MZWeJSyQ3NeCrOx8ZUbgJ6Rm22Gu6av9bdXhuJyVaXLOXsYZyMKDn3MYGOqUBJCoruae00vmX29vV%2BzyhSxzUrvd7VFvVv0lInJvZZ5aBOcohOF9x7Kq9EFe1stG7jeHYqhrrkLGiMxiwjkqUgWXN0eiu73NVSMidrJrImeu7PaNLsV8uos7TdNLb%2Bs4f27cv%2FQ46KqwwGg5jJkk5hbKcNho%2F9Y8pbk30rmlg2Sq9WsaZizjDmucM6YQXkmwu%2BjqDg%2BfBUOk6QaoVLNekFUcQjp0M&X-Amz-Signature=479d5219d3b40e904efd4782268376c0fb9d9856ee1d835dd0f20b2c838394e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


