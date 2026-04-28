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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5G3PIEZ%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAMUrx3%2BJPM5iahbmaladNUFkFjps6yr7LP2h8afJrnhAiATQQh3Fvp9bcrc7a2QJf6LjVn9CN01Pbgls5TCNHcK%2FCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME%2BFyV8WQCLR5k4p3KtwDU5jieDZ5b0YVarOhmFiYtAjQ5bcCKqteP18buuDIQqlF9Qn865TgCAdMHwIeq1Rf5B%2FhPDkdFEuUciF6xbat4lmlqolSS%2BOPSsjvVGS%2FYA3Nk2nNOQPw8KpZqAABdwZfg6viT%2Bdn0A%2FA56oci50VOU%2B%2BO4Hv%2BsvFuceT42YfpJXckV8s%2BrtnndnT%2BkFejV9Xb%2FwD8wRN07Dc6Ccpl1co824bN9iLlT6%2FTNSx5IZX0zrFVQKYfagUOgAnlses0EBSNYHN4fx%2B5DBr6E%2FCeDNNOYSI8ni3ONWbvd0sLMmL6%2F0hrJ2OjbX30Nxv3qB35lH3wPuWPdDPTP4srie7aWob7U8rLeWeg8o%2FxoCCTcwGBkdQD6eyJRhbGzWSm0x3X0hzqtkdq%2F23ls0P9B%2FVNPr9Wjt2iGCzO0s8FqALjIDA5%2BNUJctgxDIxqYNL8ywpC6629HM%2FHnxL7ZyRUY07qXoaWd%2BfY9wCd76PMONTYySvofeC2TeldMSMZWEt%2BtBTCa3Lj5sfjzKN8hguUb67Nnb1Ny7IkOVJRn2c0MDqC1SzXr4VJpw5CZhCIkiW3PoHZ6%2B15BRKqhKgfoaq2AHMzQa2snL5fR57IGkCnc65GmxViqimT9vTMvebL1W4tdYwoKTAzwY6pgFyGQ884sJ7MS29Lob2yNUBRgA8A1kFE4pzVsLb%2FdfDJqauEmLZLl8z9xg%2BlAF0TGHmPj%2BWikkh%2BZm%2F349%2FLlneHTkWpTGStxpeWM3yhNwe%2FqlKplM%2FVLJV%2BoUunRe4qT7ACUDnohF6tdskCJwoqkI7QGufdrbLs%2FLzRlqpggQrn18DT56M5ytTg22KaqR05Tu0Za2CAp49ohEWTVzLBEMsnlfwrfKs&X-Amz-Signature=2b72f87555ff80524f16f61d7602588cbf8ab5c5caa90facc7c8d05c6a42cc83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5G3PIEZ%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAMUrx3%2BJPM5iahbmaladNUFkFjps6yr7LP2h8afJrnhAiATQQh3Fvp9bcrc7a2QJf6LjVn9CN01Pbgls5TCNHcK%2FCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME%2BFyV8WQCLR5k4p3KtwDU5jieDZ5b0YVarOhmFiYtAjQ5bcCKqteP18buuDIQqlF9Qn865TgCAdMHwIeq1Rf5B%2FhPDkdFEuUciF6xbat4lmlqolSS%2BOPSsjvVGS%2FYA3Nk2nNOQPw8KpZqAABdwZfg6viT%2Bdn0A%2FA56oci50VOU%2B%2BO4Hv%2BsvFuceT42YfpJXckV8s%2BrtnndnT%2BkFejV9Xb%2FwD8wRN07Dc6Ccpl1co824bN9iLlT6%2FTNSx5IZX0zrFVQKYfagUOgAnlses0EBSNYHN4fx%2B5DBr6E%2FCeDNNOYSI8ni3ONWbvd0sLMmL6%2F0hrJ2OjbX30Nxv3qB35lH3wPuWPdDPTP4srie7aWob7U8rLeWeg8o%2FxoCCTcwGBkdQD6eyJRhbGzWSm0x3X0hzqtkdq%2F23ls0P9B%2FVNPr9Wjt2iGCzO0s8FqALjIDA5%2BNUJctgxDIxqYNL8ywpC6629HM%2FHnxL7ZyRUY07qXoaWd%2BfY9wCd76PMONTYySvofeC2TeldMSMZWEt%2BtBTCa3Lj5sfjzKN8hguUb67Nnb1Ny7IkOVJRn2c0MDqC1SzXr4VJpw5CZhCIkiW3PoHZ6%2B15BRKqhKgfoaq2AHMzQa2snL5fR57IGkCnc65GmxViqimT9vTMvebL1W4tdYwoKTAzwY6pgFyGQ884sJ7MS29Lob2yNUBRgA8A1kFE4pzVsLb%2FdfDJqauEmLZLl8z9xg%2BlAF0TGHmPj%2BWikkh%2BZm%2F349%2FLlneHTkWpTGStxpeWM3yhNwe%2FqlKplM%2FVLJV%2BoUunRe4qT7ACUDnohF6tdskCJwoqkI7QGufdrbLs%2FLzRlqpggQrn18DT56M5ytTg22KaqR05Tu0Za2CAp49ohEWTVzLBEMsnlfwrfKs&X-Amz-Signature=215a896af96e0a41a4458cd716db7a83e7775625d07acde3af615a5f153de6d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5G3PIEZ%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAMUrx3%2BJPM5iahbmaladNUFkFjps6yr7LP2h8afJrnhAiATQQh3Fvp9bcrc7a2QJf6LjVn9CN01Pbgls5TCNHcK%2FCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME%2BFyV8WQCLR5k4p3KtwDU5jieDZ5b0YVarOhmFiYtAjQ5bcCKqteP18buuDIQqlF9Qn865TgCAdMHwIeq1Rf5B%2FhPDkdFEuUciF6xbat4lmlqolSS%2BOPSsjvVGS%2FYA3Nk2nNOQPw8KpZqAABdwZfg6viT%2Bdn0A%2FA56oci50VOU%2B%2BO4Hv%2BsvFuceT42YfpJXckV8s%2BrtnndnT%2BkFejV9Xb%2FwD8wRN07Dc6Ccpl1co824bN9iLlT6%2FTNSx5IZX0zrFVQKYfagUOgAnlses0EBSNYHN4fx%2B5DBr6E%2FCeDNNOYSI8ni3ONWbvd0sLMmL6%2F0hrJ2OjbX30Nxv3qB35lH3wPuWPdDPTP4srie7aWob7U8rLeWeg8o%2FxoCCTcwGBkdQD6eyJRhbGzWSm0x3X0hzqtkdq%2F23ls0P9B%2FVNPr9Wjt2iGCzO0s8FqALjIDA5%2BNUJctgxDIxqYNL8ywpC6629HM%2FHnxL7ZyRUY07qXoaWd%2BfY9wCd76PMONTYySvofeC2TeldMSMZWEt%2BtBTCa3Lj5sfjzKN8hguUb67Nnb1Ny7IkOVJRn2c0MDqC1SzXr4VJpw5CZhCIkiW3PoHZ6%2B15BRKqhKgfoaq2AHMzQa2snL5fR57IGkCnc65GmxViqimT9vTMvebL1W4tdYwoKTAzwY6pgFyGQ884sJ7MS29Lob2yNUBRgA8A1kFE4pzVsLb%2FdfDJqauEmLZLl8z9xg%2BlAF0TGHmPj%2BWikkh%2BZm%2F349%2FLlneHTkWpTGStxpeWM3yhNwe%2FqlKplM%2FVLJV%2BoUunRe4qT7ACUDnohF6tdskCJwoqkI7QGufdrbLs%2FLzRlqpggQrn18DT56M5ytTg22KaqR05Tu0Za2CAp49ohEWTVzLBEMsnlfwrfKs&X-Amz-Signature=923992144ea0673f3d1aa1da8ffe45df8a42a83fe715eb86ce43cae5a55808f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5G3PIEZ%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAMUrx3%2BJPM5iahbmaladNUFkFjps6yr7LP2h8afJrnhAiATQQh3Fvp9bcrc7a2QJf6LjVn9CN01Pbgls5TCNHcK%2FCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME%2BFyV8WQCLR5k4p3KtwDU5jieDZ5b0YVarOhmFiYtAjQ5bcCKqteP18buuDIQqlF9Qn865TgCAdMHwIeq1Rf5B%2FhPDkdFEuUciF6xbat4lmlqolSS%2BOPSsjvVGS%2FYA3Nk2nNOQPw8KpZqAABdwZfg6viT%2Bdn0A%2FA56oci50VOU%2B%2BO4Hv%2BsvFuceT42YfpJXckV8s%2BrtnndnT%2BkFejV9Xb%2FwD8wRN07Dc6Ccpl1co824bN9iLlT6%2FTNSx5IZX0zrFVQKYfagUOgAnlses0EBSNYHN4fx%2B5DBr6E%2FCeDNNOYSI8ni3ONWbvd0sLMmL6%2F0hrJ2OjbX30Nxv3qB35lH3wPuWPdDPTP4srie7aWob7U8rLeWeg8o%2FxoCCTcwGBkdQD6eyJRhbGzWSm0x3X0hzqtkdq%2F23ls0P9B%2FVNPr9Wjt2iGCzO0s8FqALjIDA5%2BNUJctgxDIxqYNL8ywpC6629HM%2FHnxL7ZyRUY07qXoaWd%2BfY9wCd76PMONTYySvofeC2TeldMSMZWEt%2BtBTCa3Lj5sfjzKN8hguUb67Nnb1Ny7IkOVJRn2c0MDqC1SzXr4VJpw5CZhCIkiW3PoHZ6%2B15BRKqhKgfoaq2AHMzQa2snL5fR57IGkCnc65GmxViqimT9vTMvebL1W4tdYwoKTAzwY6pgFyGQ884sJ7MS29Lob2yNUBRgA8A1kFE4pzVsLb%2FdfDJqauEmLZLl8z9xg%2BlAF0TGHmPj%2BWikkh%2BZm%2F349%2FLlneHTkWpTGStxpeWM3yhNwe%2FqlKplM%2FVLJV%2BoUunRe4qT7ACUDnohF6tdskCJwoqkI7QGufdrbLs%2FLzRlqpggQrn18DT56M5ytTg22KaqR05Tu0Za2CAp49ohEWTVzLBEMsnlfwrfKs&X-Amz-Signature=8de451eda971d76a569bea0a95c248c9f5b0cbbd7503bc323c2c553f537cbda7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O6S5V7M%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIH2euoq9AWisiGB57WZt4HK%2BzINL28Cc%2BOoG89P2RxA7AiEAim1yJYB1LamFztlgRbhC5qkL2i%2FOW0VYMvPw%2Fqe%2BVyoqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnbR8TLoKv91o%2FZASrcAzxWos5Ypa%2BGYh416tm43v5oM539UhLZsQzLtCnkAmjcSOJ2faSqFFtL5a87lgXONXJxUs1cBKBQ%2FhouQKrmtS1TOXpRrLHzkcLbuVVBSd3Qhhk08HXWdjT30Oq8Nrf5as3pSpygDN6ZnPjcqPMr8HWQ6woIsYl5aWKQp35AEuGkPEiw1PHv02cmkrXwOup8IuD4wjbPaHqQ19%2Fmjw4QIt5%2FWRf36HsDw%2FzvRPLF8DaZoeo1C9F%2B65tqqcfktt0XVKFoFzhBnvq%2FmBAUTKrBxZJYc8abc7x0a6jcWNCcA5v48PNnYZdAjOEXBmjyB%2F1s1gadjse2Q6NKfijxDeDt132eD%2FjEhhZ%2BVWtKFEItClZA8D%2BgOvXIKX%2FUtHMrKHSclUOF6Hc50PmqBVE%2F5duP7ROVeFLss%2FnstRal2JkwWYQdSpeV5hEVfwh5qoDLcjvx6VcFeZ4ti2TNFt%2Bn1jjvMYTM0nZrhXHr20WZDdxWFsuwOk0JLh886xBb4Ryn2VgNLTq0kHC623Bpj5q9mhFTgN4j5vD0pqMkmGXBDJTqjXCWMH5i942da5sGSDmHz%2FoG0IJB2%2F1%2FqY0kw9FjjTxkh5oYINh27nAoNq%2Fu8jFAJRTy33xXRU4t4VufsP4%2BMKCjwM8GOqUBu8vofCwPIFb0QCYZFiBMzfGgcMGIHzzCHubycQ%2BThehDTJPITZtu3dLDuc0uz4GXMGPTpbmwP2%2B2uoJuqMjCZ4HOit%2FoUHUor6cjKyB48eGIK8%2FmfvwPox0Usb6trNrDkSk5UjOgl4uAO1xFSeCNthWd%2FuXxhKd9S%2FF3V0A9MlPBbt%2F2Nt8XlbNppGNtJ%2BlfRx90fVnHXHVc2nRlk%2BEQ%2BhZViqZS&X-Amz-Signature=c9771be8b8bb0300340a7fbddeaee5930a72225bb9aed3147a3d349a14b00274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5G3PIEZ%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAMUrx3%2BJPM5iahbmaladNUFkFjps6yr7LP2h8afJrnhAiATQQh3Fvp9bcrc7a2QJf6LjVn9CN01Pbgls5TCNHcK%2FCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME%2BFyV8WQCLR5k4p3KtwDU5jieDZ5b0YVarOhmFiYtAjQ5bcCKqteP18buuDIQqlF9Qn865TgCAdMHwIeq1Rf5B%2FhPDkdFEuUciF6xbat4lmlqolSS%2BOPSsjvVGS%2FYA3Nk2nNOQPw8KpZqAABdwZfg6viT%2Bdn0A%2FA56oci50VOU%2B%2BO4Hv%2BsvFuceT42YfpJXckV8s%2BrtnndnT%2BkFejV9Xb%2FwD8wRN07Dc6Ccpl1co824bN9iLlT6%2FTNSx5IZX0zrFVQKYfagUOgAnlses0EBSNYHN4fx%2B5DBr6E%2FCeDNNOYSI8ni3ONWbvd0sLMmL6%2F0hrJ2OjbX30Nxv3qB35lH3wPuWPdDPTP4srie7aWob7U8rLeWeg8o%2FxoCCTcwGBkdQD6eyJRhbGzWSm0x3X0hzqtkdq%2F23ls0P9B%2FVNPr9Wjt2iGCzO0s8FqALjIDA5%2BNUJctgxDIxqYNL8ywpC6629HM%2FHnxL7ZyRUY07qXoaWd%2BfY9wCd76PMONTYySvofeC2TeldMSMZWEt%2BtBTCa3Lj5sfjzKN8hguUb67Nnb1Ny7IkOVJRn2c0MDqC1SzXr4VJpw5CZhCIkiW3PoHZ6%2B15BRKqhKgfoaq2AHMzQa2snL5fR57IGkCnc65GmxViqimT9vTMvebL1W4tdYwoKTAzwY6pgFyGQ884sJ7MS29Lob2yNUBRgA8A1kFE4pzVsLb%2FdfDJqauEmLZLl8z9xg%2BlAF0TGHmPj%2BWikkh%2BZm%2F349%2FLlneHTkWpTGStxpeWM3yhNwe%2FqlKplM%2FVLJV%2BoUunRe4qT7ACUDnohF6tdskCJwoqkI7QGufdrbLs%2FLzRlqpggQrn18DT56M5ytTg22KaqR05Tu0Za2CAp49ohEWTVzLBEMsnlfwrfKs&X-Amz-Signature=5a7c0ea29b62fda4981a7e691135bd7f4e7c6da1dca3561158949d87806a5d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5G3PIEZ%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAMUrx3%2BJPM5iahbmaladNUFkFjps6yr7LP2h8afJrnhAiATQQh3Fvp9bcrc7a2QJf6LjVn9CN01Pbgls5TCNHcK%2FCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME%2BFyV8WQCLR5k4p3KtwDU5jieDZ5b0YVarOhmFiYtAjQ5bcCKqteP18buuDIQqlF9Qn865TgCAdMHwIeq1Rf5B%2FhPDkdFEuUciF6xbat4lmlqolSS%2BOPSsjvVGS%2FYA3Nk2nNOQPw8KpZqAABdwZfg6viT%2Bdn0A%2FA56oci50VOU%2B%2BO4Hv%2BsvFuceT42YfpJXckV8s%2BrtnndnT%2BkFejV9Xb%2FwD8wRN07Dc6Ccpl1co824bN9iLlT6%2FTNSx5IZX0zrFVQKYfagUOgAnlses0EBSNYHN4fx%2B5DBr6E%2FCeDNNOYSI8ni3ONWbvd0sLMmL6%2F0hrJ2OjbX30Nxv3qB35lH3wPuWPdDPTP4srie7aWob7U8rLeWeg8o%2FxoCCTcwGBkdQD6eyJRhbGzWSm0x3X0hzqtkdq%2F23ls0P9B%2FVNPr9Wjt2iGCzO0s8FqALjIDA5%2BNUJctgxDIxqYNL8ywpC6629HM%2FHnxL7ZyRUY07qXoaWd%2BfY9wCd76PMONTYySvofeC2TeldMSMZWEt%2BtBTCa3Lj5sfjzKN8hguUb67Nnb1Ny7IkOVJRn2c0MDqC1SzXr4VJpw5CZhCIkiW3PoHZ6%2B15BRKqhKgfoaq2AHMzQa2snL5fR57IGkCnc65GmxViqimT9vTMvebL1W4tdYwoKTAzwY6pgFyGQ884sJ7MS29Lob2yNUBRgA8A1kFE4pzVsLb%2FdfDJqauEmLZLl8z9xg%2BlAF0TGHmPj%2BWikkh%2BZm%2F349%2FLlneHTkWpTGStxpeWM3yhNwe%2FqlKplM%2FVLJV%2BoUunRe4qT7ACUDnohF6tdskCJwoqkI7QGufdrbLs%2FLzRlqpggQrn18DT56M5ytTg22KaqR05Tu0Za2CAp49ohEWTVzLBEMsnlfwrfKs&X-Amz-Signature=7dd47c6a7dd588bb3e65cbc9898cc4b6249aaff9179b39f8a21f0751e9d537e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5G3PIEZ%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAMUrx3%2BJPM5iahbmaladNUFkFjps6yr7LP2h8afJrnhAiATQQh3Fvp9bcrc7a2QJf6LjVn9CN01Pbgls5TCNHcK%2FCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME%2BFyV8WQCLR5k4p3KtwDU5jieDZ5b0YVarOhmFiYtAjQ5bcCKqteP18buuDIQqlF9Qn865TgCAdMHwIeq1Rf5B%2FhPDkdFEuUciF6xbat4lmlqolSS%2BOPSsjvVGS%2FYA3Nk2nNOQPw8KpZqAABdwZfg6viT%2Bdn0A%2FA56oci50VOU%2B%2BO4Hv%2BsvFuceT42YfpJXckV8s%2BrtnndnT%2BkFejV9Xb%2FwD8wRN07Dc6Ccpl1co824bN9iLlT6%2FTNSx5IZX0zrFVQKYfagUOgAnlses0EBSNYHN4fx%2B5DBr6E%2FCeDNNOYSI8ni3ONWbvd0sLMmL6%2F0hrJ2OjbX30Nxv3qB35lH3wPuWPdDPTP4srie7aWob7U8rLeWeg8o%2FxoCCTcwGBkdQD6eyJRhbGzWSm0x3X0hzqtkdq%2F23ls0P9B%2FVNPr9Wjt2iGCzO0s8FqALjIDA5%2BNUJctgxDIxqYNL8ywpC6629HM%2FHnxL7ZyRUY07qXoaWd%2BfY9wCd76PMONTYySvofeC2TeldMSMZWEt%2BtBTCa3Lj5sfjzKN8hguUb67Nnb1Ny7IkOVJRn2c0MDqC1SzXr4VJpw5CZhCIkiW3PoHZ6%2B15BRKqhKgfoaq2AHMzQa2snL5fR57IGkCnc65GmxViqimT9vTMvebL1W4tdYwoKTAzwY6pgFyGQ884sJ7MS29Lob2yNUBRgA8A1kFE4pzVsLb%2FdfDJqauEmLZLl8z9xg%2BlAF0TGHmPj%2BWikkh%2BZm%2F349%2FLlneHTkWpTGStxpeWM3yhNwe%2FqlKplM%2FVLJV%2BoUunRe4qT7ACUDnohF6tdskCJwoqkI7QGufdrbLs%2FLzRlqpggQrn18DT56M5ytTg22KaqR05Tu0Za2CAp49ohEWTVzLBEMsnlfwrfKs&X-Amz-Signature=6cfec2308389704998c8fa8ac00ae3845d19259e455638d7fae3afc4ec95b34e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5G3PIEZ%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAMUrx3%2BJPM5iahbmaladNUFkFjps6yr7LP2h8afJrnhAiATQQh3Fvp9bcrc7a2QJf6LjVn9CN01Pbgls5TCNHcK%2FCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME%2BFyV8WQCLR5k4p3KtwDU5jieDZ5b0YVarOhmFiYtAjQ5bcCKqteP18buuDIQqlF9Qn865TgCAdMHwIeq1Rf5B%2FhPDkdFEuUciF6xbat4lmlqolSS%2BOPSsjvVGS%2FYA3Nk2nNOQPw8KpZqAABdwZfg6viT%2Bdn0A%2FA56oci50VOU%2B%2BO4Hv%2BsvFuceT42YfpJXckV8s%2BrtnndnT%2BkFejV9Xb%2FwD8wRN07Dc6Ccpl1co824bN9iLlT6%2FTNSx5IZX0zrFVQKYfagUOgAnlses0EBSNYHN4fx%2B5DBr6E%2FCeDNNOYSI8ni3ONWbvd0sLMmL6%2F0hrJ2OjbX30Nxv3qB35lH3wPuWPdDPTP4srie7aWob7U8rLeWeg8o%2FxoCCTcwGBkdQD6eyJRhbGzWSm0x3X0hzqtkdq%2F23ls0P9B%2FVNPr9Wjt2iGCzO0s8FqALjIDA5%2BNUJctgxDIxqYNL8ywpC6629HM%2FHnxL7ZyRUY07qXoaWd%2BfY9wCd76PMONTYySvofeC2TeldMSMZWEt%2BtBTCa3Lj5sfjzKN8hguUb67Nnb1Ny7IkOVJRn2c0MDqC1SzXr4VJpw5CZhCIkiW3PoHZ6%2B15BRKqhKgfoaq2AHMzQa2snL5fR57IGkCnc65GmxViqimT9vTMvebL1W4tdYwoKTAzwY6pgFyGQ884sJ7MS29Lob2yNUBRgA8A1kFE4pzVsLb%2FdfDJqauEmLZLl8z9xg%2BlAF0TGHmPj%2BWikkh%2BZm%2F349%2FLlneHTkWpTGStxpeWM3yhNwe%2FqlKplM%2FVLJV%2BoUunRe4qT7ACUDnohF6tdskCJwoqkI7QGufdrbLs%2FLzRlqpggQrn18DT56M5ytTg22KaqR05Tu0Za2CAp49ohEWTVzLBEMsnlfwrfKs&X-Amz-Signature=a439b5d8239ef515e05bbd7a9a7c20a061949b9fdccc0f9ecb8fe379148bcb5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5G3PIEZ%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAMUrx3%2BJPM5iahbmaladNUFkFjps6yr7LP2h8afJrnhAiATQQh3Fvp9bcrc7a2QJf6LjVn9CN01Pbgls5TCNHcK%2FCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME%2BFyV8WQCLR5k4p3KtwDU5jieDZ5b0YVarOhmFiYtAjQ5bcCKqteP18buuDIQqlF9Qn865TgCAdMHwIeq1Rf5B%2FhPDkdFEuUciF6xbat4lmlqolSS%2BOPSsjvVGS%2FYA3Nk2nNOQPw8KpZqAABdwZfg6viT%2Bdn0A%2FA56oci50VOU%2B%2BO4Hv%2BsvFuceT42YfpJXckV8s%2BrtnndnT%2BkFejV9Xb%2FwD8wRN07Dc6Ccpl1co824bN9iLlT6%2FTNSx5IZX0zrFVQKYfagUOgAnlses0EBSNYHN4fx%2B5DBr6E%2FCeDNNOYSI8ni3ONWbvd0sLMmL6%2F0hrJ2OjbX30Nxv3qB35lH3wPuWPdDPTP4srie7aWob7U8rLeWeg8o%2FxoCCTcwGBkdQD6eyJRhbGzWSm0x3X0hzqtkdq%2F23ls0P9B%2FVNPr9Wjt2iGCzO0s8FqALjIDA5%2BNUJctgxDIxqYNL8ywpC6629HM%2FHnxL7ZyRUY07qXoaWd%2BfY9wCd76PMONTYySvofeC2TeldMSMZWEt%2BtBTCa3Lj5sfjzKN8hguUb67Nnb1Ny7IkOVJRn2c0MDqC1SzXr4VJpw5CZhCIkiW3PoHZ6%2B15BRKqhKgfoaq2AHMzQa2snL5fR57IGkCnc65GmxViqimT9vTMvebL1W4tdYwoKTAzwY6pgFyGQ884sJ7MS29Lob2yNUBRgA8A1kFE4pzVsLb%2FdfDJqauEmLZLl8z9xg%2BlAF0TGHmPj%2BWikkh%2BZm%2F349%2FLlneHTkWpTGStxpeWM3yhNwe%2FqlKplM%2FVLJV%2BoUunRe4qT7ACUDnohF6tdskCJwoqkI7QGufdrbLs%2FLzRlqpggQrn18DT56M5ytTg22KaqR05Tu0Za2CAp49ohEWTVzLBEMsnlfwrfKs&X-Amz-Signature=07a976477b3abdb28c13fae5a1d651d76581c18b922e29cd6562bde5fedbb6dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5G3PIEZ%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAMUrx3%2BJPM5iahbmaladNUFkFjps6yr7LP2h8afJrnhAiATQQh3Fvp9bcrc7a2QJf6LjVn9CN01Pbgls5TCNHcK%2FCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME%2BFyV8WQCLR5k4p3KtwDU5jieDZ5b0YVarOhmFiYtAjQ5bcCKqteP18buuDIQqlF9Qn865TgCAdMHwIeq1Rf5B%2FhPDkdFEuUciF6xbat4lmlqolSS%2BOPSsjvVGS%2FYA3Nk2nNOQPw8KpZqAABdwZfg6viT%2Bdn0A%2FA56oci50VOU%2B%2BO4Hv%2BsvFuceT42YfpJXckV8s%2BrtnndnT%2BkFejV9Xb%2FwD8wRN07Dc6Ccpl1co824bN9iLlT6%2FTNSx5IZX0zrFVQKYfagUOgAnlses0EBSNYHN4fx%2B5DBr6E%2FCeDNNOYSI8ni3ONWbvd0sLMmL6%2F0hrJ2OjbX30Nxv3qB35lH3wPuWPdDPTP4srie7aWob7U8rLeWeg8o%2FxoCCTcwGBkdQD6eyJRhbGzWSm0x3X0hzqtkdq%2F23ls0P9B%2FVNPr9Wjt2iGCzO0s8FqALjIDA5%2BNUJctgxDIxqYNL8ywpC6629HM%2FHnxL7ZyRUY07qXoaWd%2BfY9wCd76PMONTYySvofeC2TeldMSMZWEt%2BtBTCa3Lj5sfjzKN8hguUb67Nnb1Ny7IkOVJRn2c0MDqC1SzXr4VJpw5CZhCIkiW3PoHZ6%2B15BRKqhKgfoaq2AHMzQa2snL5fR57IGkCnc65GmxViqimT9vTMvebL1W4tdYwoKTAzwY6pgFyGQ884sJ7MS29Lob2yNUBRgA8A1kFE4pzVsLb%2FdfDJqauEmLZLl8z9xg%2BlAF0TGHmPj%2BWikkh%2BZm%2F349%2FLlneHTkWpTGStxpeWM3yhNwe%2FqlKplM%2FVLJV%2BoUunRe4qT7ACUDnohF6tdskCJwoqkI7QGufdrbLs%2FLzRlqpggQrn18DT56M5ytTg22KaqR05Tu0Za2CAp49ohEWTVzLBEMsnlfwrfKs&X-Amz-Signature=62a25c207c03d8dcd782d811900233e729ca20d548e8cf6558eca984d7338fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


