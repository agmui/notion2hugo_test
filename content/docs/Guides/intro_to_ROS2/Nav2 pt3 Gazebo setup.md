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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XAAYS5E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDsrnUBASpsabCMk8dcXeyngxgkyTp0HSU2n15w3pO4BAiAI4n11Zkr%2FM7jqURJxoyLGODivhQFONBwh7SHuFg3VUSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV16kDynWOuIm0JTfKtwDUqan0NymdE6FTL%2BIvZYQlaGSLYK9J7uoHSRqM7e8jc4Xe0wZPiNip835%2B6z4riXPL8FyBXTGNJqyo8Su7gu%2FEJ2heFjpnbZkGmnF6HfXh9iYe7GhZyyJQek89aG8b8lzN2TPPpWGxYw8B66c1Vk%2F0x2zi2ddIiXUDmnOLgpAohp57BR1wlPgVL7Uhzq1d020wclE8uxdMetZq%2BoL98GFJb9RdRI11Fwz8mnKjuY03IIO3BwGm9E9tRvlnR5uPws3euMSy1UI%2BR7OpVDU5451BcACx5cRtoqbgqGaut1DhJMc%2BWG5t48W2%2FjWlrtuUmOloKf4z%2BvvoQ3AABdNOEMPATIfDe2aH22yE0D1%2BE3ADYMQ1UcshVJKcuZirF3zerubeaeWfu19uRRTi6QPdR5jo4%2F2dso1ot1yP0vnWOKM4hIP%2Be1VeHjYS5%2ByaDt9wZEWsKoz6VeveslfxeZBBXQgPA9nZrmC4o9bIprpYd1rABYpKo55a%2B5pa%2FLNhyTgPqEzata6TP93E0Zot%2BzszbThzrKRpMDy0yYhkorh8n%2FmF7Jd40T1foZPxM6FYVH4ZRHdMapboXJvs6ZOMFKD%2F1RrTCIALUpleYT5TiiU4vwEKS7r40sECgAytMUcz3ow6p%2FWxAY6pgFDxPocahJg6IQ6LaDgpNrE9PzLTSTggOf8hNip0%2FmUNAPIWmcYpFzU4gsK9JXjnLZmiPM%2FO73p8gMYBZgCL3gjbZIcEUz%2BPxzFN20B4JVhQnzR0gzpeC5t%2FuCo0kQdij6bPM6XxeZdSLQRT8O30nkBN%2B6a34hQx1J5seE0q5JpFOiRISaRNx1hNjifFFEypXdMn85uuxUnM7wi0JIkMsyImhgqeEdM&X-Amz-Signature=cea221bc431d430090b6c38b6ced0ef166caac3473b2b745de288654b5c75e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XAAYS5E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDsrnUBASpsabCMk8dcXeyngxgkyTp0HSU2n15w3pO4BAiAI4n11Zkr%2FM7jqURJxoyLGODivhQFONBwh7SHuFg3VUSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV16kDynWOuIm0JTfKtwDUqan0NymdE6FTL%2BIvZYQlaGSLYK9J7uoHSRqM7e8jc4Xe0wZPiNip835%2B6z4riXPL8FyBXTGNJqyo8Su7gu%2FEJ2heFjpnbZkGmnF6HfXh9iYe7GhZyyJQek89aG8b8lzN2TPPpWGxYw8B66c1Vk%2F0x2zi2ddIiXUDmnOLgpAohp57BR1wlPgVL7Uhzq1d020wclE8uxdMetZq%2BoL98GFJb9RdRI11Fwz8mnKjuY03IIO3BwGm9E9tRvlnR5uPws3euMSy1UI%2BR7OpVDU5451BcACx5cRtoqbgqGaut1DhJMc%2BWG5t48W2%2FjWlrtuUmOloKf4z%2BvvoQ3AABdNOEMPATIfDe2aH22yE0D1%2BE3ADYMQ1UcshVJKcuZirF3zerubeaeWfu19uRRTi6QPdR5jo4%2F2dso1ot1yP0vnWOKM4hIP%2Be1VeHjYS5%2ByaDt9wZEWsKoz6VeveslfxeZBBXQgPA9nZrmC4o9bIprpYd1rABYpKo55a%2B5pa%2FLNhyTgPqEzata6TP93E0Zot%2BzszbThzrKRpMDy0yYhkorh8n%2FmF7Jd40T1foZPxM6FYVH4ZRHdMapboXJvs6ZOMFKD%2F1RrTCIALUpleYT5TiiU4vwEKS7r40sECgAytMUcz3ow6p%2FWxAY6pgFDxPocahJg6IQ6LaDgpNrE9PzLTSTggOf8hNip0%2FmUNAPIWmcYpFzU4gsK9JXjnLZmiPM%2FO73p8gMYBZgCL3gjbZIcEUz%2BPxzFN20B4JVhQnzR0gzpeC5t%2FuCo0kQdij6bPM6XxeZdSLQRT8O30nkBN%2B6a34hQx1J5seE0q5JpFOiRISaRNx1hNjifFFEypXdMn85uuxUnM7wi0JIkMsyImhgqeEdM&X-Amz-Signature=f0e9ff9abf6decd6d453716261bc02119c7ff231a31aea71f5d077b943db0222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XAAYS5E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDsrnUBASpsabCMk8dcXeyngxgkyTp0HSU2n15w3pO4BAiAI4n11Zkr%2FM7jqURJxoyLGODivhQFONBwh7SHuFg3VUSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV16kDynWOuIm0JTfKtwDUqan0NymdE6FTL%2BIvZYQlaGSLYK9J7uoHSRqM7e8jc4Xe0wZPiNip835%2B6z4riXPL8FyBXTGNJqyo8Su7gu%2FEJ2heFjpnbZkGmnF6HfXh9iYe7GhZyyJQek89aG8b8lzN2TPPpWGxYw8B66c1Vk%2F0x2zi2ddIiXUDmnOLgpAohp57BR1wlPgVL7Uhzq1d020wclE8uxdMetZq%2BoL98GFJb9RdRI11Fwz8mnKjuY03IIO3BwGm9E9tRvlnR5uPws3euMSy1UI%2BR7OpVDU5451BcACx5cRtoqbgqGaut1DhJMc%2BWG5t48W2%2FjWlrtuUmOloKf4z%2BvvoQ3AABdNOEMPATIfDe2aH22yE0D1%2BE3ADYMQ1UcshVJKcuZirF3zerubeaeWfu19uRRTi6QPdR5jo4%2F2dso1ot1yP0vnWOKM4hIP%2Be1VeHjYS5%2ByaDt9wZEWsKoz6VeveslfxeZBBXQgPA9nZrmC4o9bIprpYd1rABYpKo55a%2B5pa%2FLNhyTgPqEzata6TP93E0Zot%2BzszbThzrKRpMDy0yYhkorh8n%2FmF7Jd40T1foZPxM6FYVH4ZRHdMapboXJvs6ZOMFKD%2F1RrTCIALUpleYT5TiiU4vwEKS7r40sECgAytMUcz3ow6p%2FWxAY6pgFDxPocahJg6IQ6LaDgpNrE9PzLTSTggOf8hNip0%2FmUNAPIWmcYpFzU4gsK9JXjnLZmiPM%2FO73p8gMYBZgCL3gjbZIcEUz%2BPxzFN20B4JVhQnzR0gzpeC5t%2FuCo0kQdij6bPM6XxeZdSLQRT8O30nkBN%2B6a34hQx1J5seE0q5JpFOiRISaRNx1hNjifFFEypXdMn85uuxUnM7wi0JIkMsyImhgqeEdM&X-Amz-Signature=08d04fddfdeeb198a561260b62b566d15beca5835f3e8df836526da89a44cd54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XAAYS5E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDsrnUBASpsabCMk8dcXeyngxgkyTp0HSU2n15w3pO4BAiAI4n11Zkr%2FM7jqURJxoyLGODivhQFONBwh7SHuFg3VUSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV16kDynWOuIm0JTfKtwDUqan0NymdE6FTL%2BIvZYQlaGSLYK9J7uoHSRqM7e8jc4Xe0wZPiNip835%2B6z4riXPL8FyBXTGNJqyo8Su7gu%2FEJ2heFjpnbZkGmnF6HfXh9iYe7GhZyyJQek89aG8b8lzN2TPPpWGxYw8B66c1Vk%2F0x2zi2ddIiXUDmnOLgpAohp57BR1wlPgVL7Uhzq1d020wclE8uxdMetZq%2BoL98GFJb9RdRI11Fwz8mnKjuY03IIO3BwGm9E9tRvlnR5uPws3euMSy1UI%2BR7OpVDU5451BcACx5cRtoqbgqGaut1DhJMc%2BWG5t48W2%2FjWlrtuUmOloKf4z%2BvvoQ3AABdNOEMPATIfDe2aH22yE0D1%2BE3ADYMQ1UcshVJKcuZirF3zerubeaeWfu19uRRTi6QPdR5jo4%2F2dso1ot1yP0vnWOKM4hIP%2Be1VeHjYS5%2ByaDt9wZEWsKoz6VeveslfxeZBBXQgPA9nZrmC4o9bIprpYd1rABYpKo55a%2B5pa%2FLNhyTgPqEzata6TP93E0Zot%2BzszbThzrKRpMDy0yYhkorh8n%2FmF7Jd40T1foZPxM6FYVH4ZRHdMapboXJvs6ZOMFKD%2F1RrTCIALUpleYT5TiiU4vwEKS7r40sECgAytMUcz3ow6p%2FWxAY6pgFDxPocahJg6IQ6LaDgpNrE9PzLTSTggOf8hNip0%2FmUNAPIWmcYpFzU4gsK9JXjnLZmiPM%2FO73p8gMYBZgCL3gjbZIcEUz%2BPxzFN20B4JVhQnzR0gzpeC5t%2FuCo0kQdij6bPM6XxeZdSLQRT8O30nkBN%2B6a34hQx1J5seE0q5JpFOiRISaRNx1hNjifFFEypXdMn85uuxUnM7wi0JIkMsyImhgqeEdM&X-Amz-Signature=4874afde0545933778514f1757e91f5bf925eccfb9a2350dc3169beee37b893b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAUWXLMD%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC8DzakWDLeeByZzqDxrH8nr6QMSZqkuVq5fvdXaRCtfwIhAIEzrBjXo8dnntaJWWdw3m8yDbmXNkq9K0TOQNVndZX0KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOSjIAXU5qf5dMyIoq3AP8L2xI62dagCDbckDCl17eTDDu%2Ft0c%2BGDGJMY0erQ53MG1JTb%2FL3Tkrz1tVAflJmQo0lxEk02tXpfZrz%2B8SBS%2FeGwFlgnq7P4%2Fl39GMNOpWJhQ6vgNbonhVC5oeG3nwfm7rDL%2BnIsw5LIsOAWezPaZrNKO1wS9oMSUrfPukMZ3%2BV%2FhY7och%2BuVazvOUL9OCBsrCucCdJxAAu3DAY6Wn4AxauSNeWnb2TpQ5Ffg2nJhm6liV5qE4pWbdgczKUdnciatCmqN3xEJ%2BmdInIcvdLvtjHnekuBv595YYVBiQCut2K9catFgi%2B2r1MD3aaiP5q7NlKQ94AqL7q5KVeEVx%2Fh0g%2FMIN%2Fo%2FcS7DVbdnXRerUUsuVKl%2B4x5TIcLN97yUfOzl7lIqlbf3j%2Bdp8vWIyaI3NZeJHOGUcfAsfRST9Hs%2Bo%2FotDGa5r1hYPEnN8pNkoziLSG7nOaWOUZql%2B4ByW8AbMOxMQh52zj312T2pLm80Pk5qnOKz5GVi%2FN9RLAo67zQcrYKU%2BpBYp2WoKFSS9gezjQtH9EvT%2BCEH6umghTEPaNOFG8%2FvA78YoNzzCsQ%2BipqW%2FBGLTfma0epxp32rbKQhISrxdsKhLNnJTT5Bqf81vjiI02YKOw%2FNUGuVnDCKoNbEBjqkASvWd%2BOjmsZ1eGbaI%2Bwd4jkcGPPokoyFygMz9dc%2FKREVHrlaF76eiy4sCAIsyBujxu%2BC4q%2BgKNhDCY5bExONegFJSZZFq250eWMsEhXJJZDQ4CV6jqZ%2Bpv5TP5pTRNTqJ9YnKUBSrD1%2FlWFxWkBZwMaZPdsat%2F3lKTG9wMN%2BdNiPScamLcTlCwWpfAmGII9SlLnKJb5eF%2BzBqYns%2B2HY5UvJ6k33&X-Amz-Signature=f65aeca7eb09617a1c6ed53defd8ba86828686e770a36b03053e02312a4cb5a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XAAYS5E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDsrnUBASpsabCMk8dcXeyngxgkyTp0HSU2n15w3pO4BAiAI4n11Zkr%2FM7jqURJxoyLGODivhQFONBwh7SHuFg3VUSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV16kDynWOuIm0JTfKtwDUqan0NymdE6FTL%2BIvZYQlaGSLYK9J7uoHSRqM7e8jc4Xe0wZPiNip835%2B6z4riXPL8FyBXTGNJqyo8Su7gu%2FEJ2heFjpnbZkGmnF6HfXh9iYe7GhZyyJQek89aG8b8lzN2TPPpWGxYw8B66c1Vk%2F0x2zi2ddIiXUDmnOLgpAohp57BR1wlPgVL7Uhzq1d020wclE8uxdMetZq%2BoL98GFJb9RdRI11Fwz8mnKjuY03IIO3BwGm9E9tRvlnR5uPws3euMSy1UI%2BR7OpVDU5451BcACx5cRtoqbgqGaut1DhJMc%2BWG5t48W2%2FjWlrtuUmOloKf4z%2BvvoQ3AABdNOEMPATIfDe2aH22yE0D1%2BE3ADYMQ1UcshVJKcuZirF3zerubeaeWfu19uRRTi6QPdR5jo4%2F2dso1ot1yP0vnWOKM4hIP%2Be1VeHjYS5%2ByaDt9wZEWsKoz6VeveslfxeZBBXQgPA9nZrmC4o9bIprpYd1rABYpKo55a%2B5pa%2FLNhyTgPqEzata6TP93E0Zot%2BzszbThzrKRpMDy0yYhkorh8n%2FmF7Jd40T1foZPxM6FYVH4ZRHdMapboXJvs6ZOMFKD%2F1RrTCIALUpleYT5TiiU4vwEKS7r40sECgAytMUcz3ow6p%2FWxAY6pgFDxPocahJg6IQ6LaDgpNrE9PzLTSTggOf8hNip0%2FmUNAPIWmcYpFzU4gsK9JXjnLZmiPM%2FO73p8gMYBZgCL3gjbZIcEUz%2BPxzFN20B4JVhQnzR0gzpeC5t%2FuCo0kQdij6bPM6XxeZdSLQRT8O30nkBN%2B6a34hQx1J5seE0q5JpFOiRISaRNx1hNjifFFEypXdMn85uuxUnM7wi0JIkMsyImhgqeEdM&X-Amz-Signature=a0c2b72f1abafe8dbedda66cf24f3b661092b43646dfa08e41c03fc898c983f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XAAYS5E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDsrnUBASpsabCMk8dcXeyngxgkyTp0HSU2n15w3pO4BAiAI4n11Zkr%2FM7jqURJxoyLGODivhQFONBwh7SHuFg3VUSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV16kDynWOuIm0JTfKtwDUqan0NymdE6FTL%2BIvZYQlaGSLYK9J7uoHSRqM7e8jc4Xe0wZPiNip835%2B6z4riXPL8FyBXTGNJqyo8Su7gu%2FEJ2heFjpnbZkGmnF6HfXh9iYe7GhZyyJQek89aG8b8lzN2TPPpWGxYw8B66c1Vk%2F0x2zi2ddIiXUDmnOLgpAohp57BR1wlPgVL7Uhzq1d020wclE8uxdMetZq%2BoL98GFJb9RdRI11Fwz8mnKjuY03IIO3BwGm9E9tRvlnR5uPws3euMSy1UI%2BR7OpVDU5451BcACx5cRtoqbgqGaut1DhJMc%2BWG5t48W2%2FjWlrtuUmOloKf4z%2BvvoQ3AABdNOEMPATIfDe2aH22yE0D1%2BE3ADYMQ1UcshVJKcuZirF3zerubeaeWfu19uRRTi6QPdR5jo4%2F2dso1ot1yP0vnWOKM4hIP%2Be1VeHjYS5%2ByaDt9wZEWsKoz6VeveslfxeZBBXQgPA9nZrmC4o9bIprpYd1rABYpKo55a%2B5pa%2FLNhyTgPqEzata6TP93E0Zot%2BzszbThzrKRpMDy0yYhkorh8n%2FmF7Jd40T1foZPxM6FYVH4ZRHdMapboXJvs6ZOMFKD%2F1RrTCIALUpleYT5TiiU4vwEKS7r40sECgAytMUcz3ow6p%2FWxAY6pgFDxPocahJg6IQ6LaDgpNrE9PzLTSTggOf8hNip0%2FmUNAPIWmcYpFzU4gsK9JXjnLZmiPM%2FO73p8gMYBZgCL3gjbZIcEUz%2BPxzFN20B4JVhQnzR0gzpeC5t%2FuCo0kQdij6bPM6XxeZdSLQRT8O30nkBN%2B6a34hQx1J5seE0q5JpFOiRISaRNx1hNjifFFEypXdMn85uuxUnM7wi0JIkMsyImhgqeEdM&X-Amz-Signature=8757aedc55dd0796685643193c979745193fcedc9a61abb21e28bdb1ca22efb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XAAYS5E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDsrnUBASpsabCMk8dcXeyngxgkyTp0HSU2n15w3pO4BAiAI4n11Zkr%2FM7jqURJxoyLGODivhQFONBwh7SHuFg3VUSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV16kDynWOuIm0JTfKtwDUqan0NymdE6FTL%2BIvZYQlaGSLYK9J7uoHSRqM7e8jc4Xe0wZPiNip835%2B6z4riXPL8FyBXTGNJqyo8Su7gu%2FEJ2heFjpnbZkGmnF6HfXh9iYe7GhZyyJQek89aG8b8lzN2TPPpWGxYw8B66c1Vk%2F0x2zi2ddIiXUDmnOLgpAohp57BR1wlPgVL7Uhzq1d020wclE8uxdMetZq%2BoL98GFJb9RdRI11Fwz8mnKjuY03IIO3BwGm9E9tRvlnR5uPws3euMSy1UI%2BR7OpVDU5451BcACx5cRtoqbgqGaut1DhJMc%2BWG5t48W2%2FjWlrtuUmOloKf4z%2BvvoQ3AABdNOEMPATIfDe2aH22yE0D1%2BE3ADYMQ1UcshVJKcuZirF3zerubeaeWfu19uRRTi6QPdR5jo4%2F2dso1ot1yP0vnWOKM4hIP%2Be1VeHjYS5%2ByaDt9wZEWsKoz6VeveslfxeZBBXQgPA9nZrmC4o9bIprpYd1rABYpKo55a%2B5pa%2FLNhyTgPqEzata6TP93E0Zot%2BzszbThzrKRpMDy0yYhkorh8n%2FmF7Jd40T1foZPxM6FYVH4ZRHdMapboXJvs6ZOMFKD%2F1RrTCIALUpleYT5TiiU4vwEKS7r40sECgAytMUcz3ow6p%2FWxAY6pgFDxPocahJg6IQ6LaDgpNrE9PzLTSTggOf8hNip0%2FmUNAPIWmcYpFzU4gsK9JXjnLZmiPM%2FO73p8gMYBZgCL3gjbZIcEUz%2BPxzFN20B4JVhQnzR0gzpeC5t%2FuCo0kQdij6bPM6XxeZdSLQRT8O30nkBN%2B6a34hQx1J5seE0q5JpFOiRISaRNx1hNjifFFEypXdMn85uuxUnM7wi0JIkMsyImhgqeEdM&X-Amz-Signature=ea264c9f152190e9930e140681d7c2234ee56f727bbddd4d8388b53e65373764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XAAYS5E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDsrnUBASpsabCMk8dcXeyngxgkyTp0HSU2n15w3pO4BAiAI4n11Zkr%2FM7jqURJxoyLGODivhQFONBwh7SHuFg3VUSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV16kDynWOuIm0JTfKtwDUqan0NymdE6FTL%2BIvZYQlaGSLYK9J7uoHSRqM7e8jc4Xe0wZPiNip835%2B6z4riXPL8FyBXTGNJqyo8Su7gu%2FEJ2heFjpnbZkGmnF6HfXh9iYe7GhZyyJQek89aG8b8lzN2TPPpWGxYw8B66c1Vk%2F0x2zi2ddIiXUDmnOLgpAohp57BR1wlPgVL7Uhzq1d020wclE8uxdMetZq%2BoL98GFJb9RdRI11Fwz8mnKjuY03IIO3BwGm9E9tRvlnR5uPws3euMSy1UI%2BR7OpVDU5451BcACx5cRtoqbgqGaut1DhJMc%2BWG5t48W2%2FjWlrtuUmOloKf4z%2BvvoQ3AABdNOEMPATIfDe2aH22yE0D1%2BE3ADYMQ1UcshVJKcuZirF3zerubeaeWfu19uRRTi6QPdR5jo4%2F2dso1ot1yP0vnWOKM4hIP%2Be1VeHjYS5%2ByaDt9wZEWsKoz6VeveslfxeZBBXQgPA9nZrmC4o9bIprpYd1rABYpKo55a%2B5pa%2FLNhyTgPqEzata6TP93E0Zot%2BzszbThzrKRpMDy0yYhkorh8n%2FmF7Jd40T1foZPxM6FYVH4ZRHdMapboXJvs6ZOMFKD%2F1RrTCIALUpleYT5TiiU4vwEKS7r40sECgAytMUcz3ow6p%2FWxAY6pgFDxPocahJg6IQ6LaDgpNrE9PzLTSTggOf8hNip0%2FmUNAPIWmcYpFzU4gsK9JXjnLZmiPM%2FO73p8gMYBZgCL3gjbZIcEUz%2BPxzFN20B4JVhQnzR0gzpeC5t%2FuCo0kQdij6bPM6XxeZdSLQRT8O30nkBN%2B6a34hQx1J5seE0q5JpFOiRISaRNx1hNjifFFEypXdMn85uuxUnM7wi0JIkMsyImhgqeEdM&X-Amz-Signature=b01cb8ff5486d159b12fa7a49d83579ecab1086c110a9cbc54f75f443c7d1156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XAAYS5E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDsrnUBASpsabCMk8dcXeyngxgkyTp0HSU2n15w3pO4BAiAI4n11Zkr%2FM7jqURJxoyLGODivhQFONBwh7SHuFg3VUSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV16kDynWOuIm0JTfKtwDUqan0NymdE6FTL%2BIvZYQlaGSLYK9J7uoHSRqM7e8jc4Xe0wZPiNip835%2B6z4riXPL8FyBXTGNJqyo8Su7gu%2FEJ2heFjpnbZkGmnF6HfXh9iYe7GhZyyJQek89aG8b8lzN2TPPpWGxYw8B66c1Vk%2F0x2zi2ddIiXUDmnOLgpAohp57BR1wlPgVL7Uhzq1d020wclE8uxdMetZq%2BoL98GFJb9RdRI11Fwz8mnKjuY03IIO3BwGm9E9tRvlnR5uPws3euMSy1UI%2BR7OpVDU5451BcACx5cRtoqbgqGaut1DhJMc%2BWG5t48W2%2FjWlrtuUmOloKf4z%2BvvoQ3AABdNOEMPATIfDe2aH22yE0D1%2BE3ADYMQ1UcshVJKcuZirF3zerubeaeWfu19uRRTi6QPdR5jo4%2F2dso1ot1yP0vnWOKM4hIP%2Be1VeHjYS5%2ByaDt9wZEWsKoz6VeveslfxeZBBXQgPA9nZrmC4o9bIprpYd1rABYpKo55a%2B5pa%2FLNhyTgPqEzata6TP93E0Zot%2BzszbThzrKRpMDy0yYhkorh8n%2FmF7Jd40T1foZPxM6FYVH4ZRHdMapboXJvs6ZOMFKD%2F1RrTCIALUpleYT5TiiU4vwEKS7r40sECgAytMUcz3ow6p%2FWxAY6pgFDxPocahJg6IQ6LaDgpNrE9PzLTSTggOf8hNip0%2FmUNAPIWmcYpFzU4gsK9JXjnLZmiPM%2FO73p8gMYBZgCL3gjbZIcEUz%2BPxzFN20B4JVhQnzR0gzpeC5t%2FuCo0kQdij6bPM6XxeZdSLQRT8O30nkBN%2B6a34hQx1J5seE0q5JpFOiRISaRNx1hNjifFFEypXdMn85uuxUnM7wi0JIkMsyImhgqeEdM&X-Amz-Signature=42478745f4a76a76c37c6cc97c4a13085acb370464e414d1bcad8139964c94a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XAAYS5E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDsrnUBASpsabCMk8dcXeyngxgkyTp0HSU2n15w3pO4BAiAI4n11Zkr%2FM7jqURJxoyLGODivhQFONBwh7SHuFg3VUSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV16kDynWOuIm0JTfKtwDUqan0NymdE6FTL%2BIvZYQlaGSLYK9J7uoHSRqM7e8jc4Xe0wZPiNip835%2B6z4riXPL8FyBXTGNJqyo8Su7gu%2FEJ2heFjpnbZkGmnF6HfXh9iYe7GhZyyJQek89aG8b8lzN2TPPpWGxYw8B66c1Vk%2F0x2zi2ddIiXUDmnOLgpAohp57BR1wlPgVL7Uhzq1d020wclE8uxdMetZq%2BoL98GFJb9RdRI11Fwz8mnKjuY03IIO3BwGm9E9tRvlnR5uPws3euMSy1UI%2BR7OpVDU5451BcACx5cRtoqbgqGaut1DhJMc%2BWG5t48W2%2FjWlrtuUmOloKf4z%2BvvoQ3AABdNOEMPATIfDe2aH22yE0D1%2BE3ADYMQ1UcshVJKcuZirF3zerubeaeWfu19uRRTi6QPdR5jo4%2F2dso1ot1yP0vnWOKM4hIP%2Be1VeHjYS5%2ByaDt9wZEWsKoz6VeveslfxeZBBXQgPA9nZrmC4o9bIprpYd1rABYpKo55a%2B5pa%2FLNhyTgPqEzata6TP93E0Zot%2BzszbThzrKRpMDy0yYhkorh8n%2FmF7Jd40T1foZPxM6FYVH4ZRHdMapboXJvs6ZOMFKD%2F1RrTCIALUpleYT5TiiU4vwEKS7r40sECgAytMUcz3ow6p%2FWxAY6pgFDxPocahJg6IQ6LaDgpNrE9PzLTSTggOf8hNip0%2FmUNAPIWmcYpFzU4gsK9JXjnLZmiPM%2FO73p8gMYBZgCL3gjbZIcEUz%2BPxzFN20B4JVhQnzR0gzpeC5t%2FuCo0kQdij6bPM6XxeZdSLQRT8O30nkBN%2B6a34hQx1J5seE0q5JpFOiRISaRNx1hNjifFFEypXdMn85uuxUnM7wi0JIkMsyImhgqeEdM&X-Amz-Signature=e7985451cb7ec3b637fad9501dc9c582c2ce6715bc537b83839cd0501842cc11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
