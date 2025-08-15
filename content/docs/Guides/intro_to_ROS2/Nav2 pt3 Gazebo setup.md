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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSA5VTSE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAr6N4eKmFp2FGBgCwQonFX%2FYbShj8xuKadq9e%2BC94KLAiBPEo1udohoxHADRDFTPoneEs8O9leGMYGvl51gM00Eqyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMpjci3tY0a6j8pYawKtwDc%2FtfkOnUcampclHSr2ytQ2v2f488VpBXj35TMXAX6qNwdHshNDN6Om%2BMUzbYA0lE6CaTza8pznD0ag2Lv6ZfAeuN1%2BuiCC1zi6dutyho9dkSrEcUonMKoYLnqIT9h74HPkbY62%2F%2BCcN4f183g0RMvhUVUrHxHrD44CW5o%2F5idyPvc2OuuqO6ZecmCJWFTAy%2FMMMGI96gKeDAErxsqQIH%2Fq2gyx%2Bf7HjdhGa9uTTIPEI4rRfMPWaq%2FAtje5hVqR0Q9wt7U8ziagFVYqOverdH6zf4S%2BwURnMBBZNesupzQYR63x2dsFCg%2Bbla%2FJUoGK0q%2FlNryurxhZ0gLqKndMUQ7IXbYMsh6yzjch%2FaLsgdoYMoL5AiwzoAVABVLOozygAJsDmS11ujlOro152%2Bw136X62YD0X7jlZbkCLPv9xLGzo7usu1ySVHBYDGBLFv%2FnPhxuIlG7g4ToD%2B6gF0KolU4AWTfT4fweWnbnaLAUq565RYN9sdKPssZqUdlunRYIshtJaE%2BgRxHYSwQ7mQGEIbSimhaGoyhG%2F8q5mgzdnV9%2BlWJwx%2BXJ4bulE6U6RyJGD3yV6U2rkkVcjzWS1iG7RjyCVFLcsZGfRiLG881qg9lZ8tiJ1UW1WHiR9E46swv9j%2BxAY6pgFzA0QQcMI%2BQwiBACA5AS3v1cRYcBcUaCwwnSROCnSgHDBW6uVtcMumnqEcxWYE5m80vwvB%2BsSSWFKyL%2BAX7uT9N%2F%2FvsMtp2uBnV8VN4vN3yXqjbPBqDYB%2FAt4XKTiZC%2Fi%2FssDfEzmLUpqte5x1cQfKwBZSSyhiaDdm5aYp38EMKHzi7gfE0i57JCupv%2BpLyasxUVsI0TE2BTnG8izhb7m687pigYkd&X-Amz-Signature=4d5b6f35c094fc87c855268f7800527bc36e450b69e80ba5fba9fc840bf6937e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSA5VTSE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAr6N4eKmFp2FGBgCwQonFX%2FYbShj8xuKadq9e%2BC94KLAiBPEo1udohoxHADRDFTPoneEs8O9leGMYGvl51gM00Eqyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMpjci3tY0a6j8pYawKtwDc%2FtfkOnUcampclHSr2ytQ2v2f488VpBXj35TMXAX6qNwdHshNDN6Om%2BMUzbYA0lE6CaTza8pznD0ag2Lv6ZfAeuN1%2BuiCC1zi6dutyho9dkSrEcUonMKoYLnqIT9h74HPkbY62%2F%2BCcN4f183g0RMvhUVUrHxHrD44CW5o%2F5idyPvc2OuuqO6ZecmCJWFTAy%2FMMMGI96gKeDAErxsqQIH%2Fq2gyx%2Bf7HjdhGa9uTTIPEI4rRfMPWaq%2FAtje5hVqR0Q9wt7U8ziagFVYqOverdH6zf4S%2BwURnMBBZNesupzQYR63x2dsFCg%2Bbla%2FJUoGK0q%2FlNryurxhZ0gLqKndMUQ7IXbYMsh6yzjch%2FaLsgdoYMoL5AiwzoAVABVLOozygAJsDmS11ujlOro152%2Bw136X62YD0X7jlZbkCLPv9xLGzo7usu1ySVHBYDGBLFv%2FnPhxuIlG7g4ToD%2B6gF0KolU4AWTfT4fweWnbnaLAUq565RYN9sdKPssZqUdlunRYIshtJaE%2BgRxHYSwQ7mQGEIbSimhaGoyhG%2F8q5mgzdnV9%2BlWJwx%2BXJ4bulE6U6RyJGD3yV6U2rkkVcjzWS1iG7RjyCVFLcsZGfRiLG881qg9lZ8tiJ1UW1WHiR9E46swv9j%2BxAY6pgFzA0QQcMI%2BQwiBACA5AS3v1cRYcBcUaCwwnSROCnSgHDBW6uVtcMumnqEcxWYE5m80vwvB%2BsSSWFKyL%2BAX7uT9N%2F%2FvsMtp2uBnV8VN4vN3yXqjbPBqDYB%2FAt4XKTiZC%2Fi%2FssDfEzmLUpqte5x1cQfKwBZSSyhiaDdm5aYp38EMKHzi7gfE0i57JCupv%2BpLyasxUVsI0TE2BTnG8izhb7m687pigYkd&X-Amz-Signature=f7585ad4c149d787a247fd4991fe061143c428900a2c96705aff0631a885d158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSA5VTSE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAr6N4eKmFp2FGBgCwQonFX%2FYbShj8xuKadq9e%2BC94KLAiBPEo1udohoxHADRDFTPoneEs8O9leGMYGvl51gM00Eqyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMpjci3tY0a6j8pYawKtwDc%2FtfkOnUcampclHSr2ytQ2v2f488VpBXj35TMXAX6qNwdHshNDN6Om%2BMUzbYA0lE6CaTza8pznD0ag2Lv6ZfAeuN1%2BuiCC1zi6dutyho9dkSrEcUonMKoYLnqIT9h74HPkbY62%2F%2BCcN4f183g0RMvhUVUrHxHrD44CW5o%2F5idyPvc2OuuqO6ZecmCJWFTAy%2FMMMGI96gKeDAErxsqQIH%2Fq2gyx%2Bf7HjdhGa9uTTIPEI4rRfMPWaq%2FAtje5hVqR0Q9wt7U8ziagFVYqOverdH6zf4S%2BwURnMBBZNesupzQYR63x2dsFCg%2Bbla%2FJUoGK0q%2FlNryurxhZ0gLqKndMUQ7IXbYMsh6yzjch%2FaLsgdoYMoL5AiwzoAVABVLOozygAJsDmS11ujlOro152%2Bw136X62YD0X7jlZbkCLPv9xLGzo7usu1ySVHBYDGBLFv%2FnPhxuIlG7g4ToD%2B6gF0KolU4AWTfT4fweWnbnaLAUq565RYN9sdKPssZqUdlunRYIshtJaE%2BgRxHYSwQ7mQGEIbSimhaGoyhG%2F8q5mgzdnV9%2BlWJwx%2BXJ4bulE6U6RyJGD3yV6U2rkkVcjzWS1iG7RjyCVFLcsZGfRiLG881qg9lZ8tiJ1UW1WHiR9E46swv9j%2BxAY6pgFzA0QQcMI%2BQwiBACA5AS3v1cRYcBcUaCwwnSROCnSgHDBW6uVtcMumnqEcxWYE5m80vwvB%2BsSSWFKyL%2BAX7uT9N%2F%2FvsMtp2uBnV8VN4vN3yXqjbPBqDYB%2FAt4XKTiZC%2Fi%2FssDfEzmLUpqte5x1cQfKwBZSSyhiaDdm5aYp38EMKHzi7gfE0i57JCupv%2BpLyasxUVsI0TE2BTnG8izhb7m687pigYkd&X-Amz-Signature=d6a391867ca5f5cbc693d03a22c288dc6d6249bf8c1a8023448ee693a4eab629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSA5VTSE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAr6N4eKmFp2FGBgCwQonFX%2FYbShj8xuKadq9e%2BC94KLAiBPEo1udohoxHADRDFTPoneEs8O9leGMYGvl51gM00Eqyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMpjci3tY0a6j8pYawKtwDc%2FtfkOnUcampclHSr2ytQ2v2f488VpBXj35TMXAX6qNwdHshNDN6Om%2BMUzbYA0lE6CaTza8pznD0ag2Lv6ZfAeuN1%2BuiCC1zi6dutyho9dkSrEcUonMKoYLnqIT9h74HPkbY62%2F%2BCcN4f183g0RMvhUVUrHxHrD44CW5o%2F5idyPvc2OuuqO6ZecmCJWFTAy%2FMMMGI96gKeDAErxsqQIH%2Fq2gyx%2Bf7HjdhGa9uTTIPEI4rRfMPWaq%2FAtje5hVqR0Q9wt7U8ziagFVYqOverdH6zf4S%2BwURnMBBZNesupzQYR63x2dsFCg%2Bbla%2FJUoGK0q%2FlNryurxhZ0gLqKndMUQ7IXbYMsh6yzjch%2FaLsgdoYMoL5AiwzoAVABVLOozygAJsDmS11ujlOro152%2Bw136X62YD0X7jlZbkCLPv9xLGzo7usu1ySVHBYDGBLFv%2FnPhxuIlG7g4ToD%2B6gF0KolU4AWTfT4fweWnbnaLAUq565RYN9sdKPssZqUdlunRYIshtJaE%2BgRxHYSwQ7mQGEIbSimhaGoyhG%2F8q5mgzdnV9%2BlWJwx%2BXJ4bulE6U6RyJGD3yV6U2rkkVcjzWS1iG7RjyCVFLcsZGfRiLG881qg9lZ8tiJ1UW1WHiR9E46swv9j%2BxAY6pgFzA0QQcMI%2BQwiBACA5AS3v1cRYcBcUaCwwnSROCnSgHDBW6uVtcMumnqEcxWYE5m80vwvB%2BsSSWFKyL%2BAX7uT9N%2F%2FvsMtp2uBnV8VN4vN3yXqjbPBqDYB%2FAt4XKTiZC%2Fi%2FssDfEzmLUpqte5x1cQfKwBZSSyhiaDdm5aYp38EMKHzi7gfE0i57JCupv%2BpLyasxUVsI0TE2BTnG8izhb7m687pigYkd&X-Amz-Signature=5be25b59df1f50002521bee65e12a04fb7f7cbd56a5d49ddcab35350c9018fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RCJWG5L%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDJWxE8KtqT8014MI8GxSMdH8XsdtWowrusRkX2zIbGkAiEA%2BOkqXcB%2B08zu%2BUpKfrS0pBE2ryhs4AWQLe5LXKWUvBgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFUH16j6Uq2nHgXlyircA02R%2BqCY9lrKQ15KCUfU7PQxOPPGzylQEsrYhiLRtMvixdLNH6ArmiYwr84HZNkc9YONYqxtiKN3S2dme7gkY5AIAIltkGORPmaEVz%2FO3Gj3gwJatvN1jTciP0PIfwux%2B9gUMcqpeA7PxnIET7eb9S%2FDTmW1Lhea4Q3KgcG4Kb5rsypSLl61aCYKA96mGo%2F0B1g0%2BuvsnKuBjf2q3V9aNAb7SLwQwgLdih7IBzfV7OI8b%2B%2BHBh%2FYmke89RBhXFvzO7Z01sTXscnGd9A7c0%2FtSmfZiLi0aqgzlDBV5uitNw9aIL%2Bwdh4bZ5verf1537Zw1e%2B6rILp7PXuZ1OPM5QIozUsovY8wG9JBb3OHOKGNpKieP7ghV0P5Gx3CvVSaT%2Fh2tgOtIF4544hkNAoQvMmC0537SzLAqGx2khsWV1XH6Qzwp3BEqMhub4umNf84s%2FVehtSuyi97QxzeJQswUp6jocOvT4Ki38IEGURly9xlsB%2BjF67yJjxqZ8GPe%2FRhSZ1UnwKdlNkMneYcAOY6dD%2BHGslqEthpoDjWjQJrD%2FFwlfZgfk10U9A2GWN3H2Tv4RQuzHn2NVYvKSE97LUMncbq4aEY77M9ewd7YPBlzAxmh0d59vFFMsyfd3ZW6I%2BMJ7Y%2FsQGOqUBjrKsRdmjoElY9%2Bp4s8UHrb0FFJ1XJWD8sF88E7udP%2BT%2Bj6OVjQ%2BeqCsLhCqG16c6PEBD4ZfBqNzgAjCwVhQ993WrdeX61jjScfF55BlV7yEIUnM9DjylIR3X0s8DfMrDRCraqa2tomPvUA72JTaIvwdQigXTvdDi5rVHPxemJ8AP3Yo%2BfiQkFOyf6VxwrxH9YFbNRxb6F%2FwXU5hfM%2BGKmwXp6UF5&X-Amz-Signature=27f2537d9559d3e6cd9fd0cc23110be29c009cdbc3c7cd401701e2745b3e5468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSA5VTSE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAr6N4eKmFp2FGBgCwQonFX%2FYbShj8xuKadq9e%2BC94KLAiBPEo1udohoxHADRDFTPoneEs8O9leGMYGvl51gM00Eqyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMpjci3tY0a6j8pYawKtwDc%2FtfkOnUcampclHSr2ytQ2v2f488VpBXj35TMXAX6qNwdHshNDN6Om%2BMUzbYA0lE6CaTza8pznD0ag2Lv6ZfAeuN1%2BuiCC1zi6dutyho9dkSrEcUonMKoYLnqIT9h74HPkbY62%2F%2BCcN4f183g0RMvhUVUrHxHrD44CW5o%2F5idyPvc2OuuqO6ZecmCJWFTAy%2FMMMGI96gKeDAErxsqQIH%2Fq2gyx%2Bf7HjdhGa9uTTIPEI4rRfMPWaq%2FAtje5hVqR0Q9wt7U8ziagFVYqOverdH6zf4S%2BwURnMBBZNesupzQYR63x2dsFCg%2Bbla%2FJUoGK0q%2FlNryurxhZ0gLqKndMUQ7IXbYMsh6yzjch%2FaLsgdoYMoL5AiwzoAVABVLOozygAJsDmS11ujlOro152%2Bw136X62YD0X7jlZbkCLPv9xLGzo7usu1ySVHBYDGBLFv%2FnPhxuIlG7g4ToD%2B6gF0KolU4AWTfT4fweWnbnaLAUq565RYN9sdKPssZqUdlunRYIshtJaE%2BgRxHYSwQ7mQGEIbSimhaGoyhG%2F8q5mgzdnV9%2BlWJwx%2BXJ4bulE6U6RyJGD3yV6U2rkkVcjzWS1iG7RjyCVFLcsZGfRiLG881qg9lZ8tiJ1UW1WHiR9E46swv9j%2BxAY6pgFzA0QQcMI%2BQwiBACA5AS3v1cRYcBcUaCwwnSROCnSgHDBW6uVtcMumnqEcxWYE5m80vwvB%2BsSSWFKyL%2BAX7uT9N%2F%2FvsMtp2uBnV8VN4vN3yXqjbPBqDYB%2FAt4XKTiZC%2Fi%2FssDfEzmLUpqte5x1cQfKwBZSSyhiaDdm5aYp38EMKHzi7gfE0i57JCupv%2BpLyasxUVsI0TE2BTnG8izhb7m687pigYkd&X-Amz-Signature=c7a33fd73353c42e03219b7b2af3f5884776a6aaff78159d62de44dc3fbd5885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSA5VTSE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAr6N4eKmFp2FGBgCwQonFX%2FYbShj8xuKadq9e%2BC94KLAiBPEo1udohoxHADRDFTPoneEs8O9leGMYGvl51gM00Eqyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMpjci3tY0a6j8pYawKtwDc%2FtfkOnUcampclHSr2ytQ2v2f488VpBXj35TMXAX6qNwdHshNDN6Om%2BMUzbYA0lE6CaTza8pznD0ag2Lv6ZfAeuN1%2BuiCC1zi6dutyho9dkSrEcUonMKoYLnqIT9h74HPkbY62%2F%2BCcN4f183g0RMvhUVUrHxHrD44CW5o%2F5idyPvc2OuuqO6ZecmCJWFTAy%2FMMMGI96gKeDAErxsqQIH%2Fq2gyx%2Bf7HjdhGa9uTTIPEI4rRfMPWaq%2FAtje5hVqR0Q9wt7U8ziagFVYqOverdH6zf4S%2BwURnMBBZNesupzQYR63x2dsFCg%2Bbla%2FJUoGK0q%2FlNryurxhZ0gLqKndMUQ7IXbYMsh6yzjch%2FaLsgdoYMoL5AiwzoAVABVLOozygAJsDmS11ujlOro152%2Bw136X62YD0X7jlZbkCLPv9xLGzo7usu1ySVHBYDGBLFv%2FnPhxuIlG7g4ToD%2B6gF0KolU4AWTfT4fweWnbnaLAUq565RYN9sdKPssZqUdlunRYIshtJaE%2BgRxHYSwQ7mQGEIbSimhaGoyhG%2F8q5mgzdnV9%2BlWJwx%2BXJ4bulE6U6RyJGD3yV6U2rkkVcjzWS1iG7RjyCVFLcsZGfRiLG881qg9lZ8tiJ1UW1WHiR9E46swv9j%2BxAY6pgFzA0QQcMI%2BQwiBACA5AS3v1cRYcBcUaCwwnSROCnSgHDBW6uVtcMumnqEcxWYE5m80vwvB%2BsSSWFKyL%2BAX7uT9N%2F%2FvsMtp2uBnV8VN4vN3yXqjbPBqDYB%2FAt4XKTiZC%2Fi%2FssDfEzmLUpqte5x1cQfKwBZSSyhiaDdm5aYp38EMKHzi7gfE0i57JCupv%2BpLyasxUVsI0TE2BTnG8izhb7m687pigYkd&X-Amz-Signature=f8a1786d6a0afdd9d14d9cbe95d83446e1ed48c4b3fc461551463e8fed1087c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSA5VTSE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAr6N4eKmFp2FGBgCwQonFX%2FYbShj8xuKadq9e%2BC94KLAiBPEo1udohoxHADRDFTPoneEs8O9leGMYGvl51gM00Eqyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMpjci3tY0a6j8pYawKtwDc%2FtfkOnUcampclHSr2ytQ2v2f488VpBXj35TMXAX6qNwdHshNDN6Om%2BMUzbYA0lE6CaTza8pznD0ag2Lv6ZfAeuN1%2BuiCC1zi6dutyho9dkSrEcUonMKoYLnqIT9h74HPkbY62%2F%2BCcN4f183g0RMvhUVUrHxHrD44CW5o%2F5idyPvc2OuuqO6ZecmCJWFTAy%2FMMMGI96gKeDAErxsqQIH%2Fq2gyx%2Bf7HjdhGa9uTTIPEI4rRfMPWaq%2FAtje5hVqR0Q9wt7U8ziagFVYqOverdH6zf4S%2BwURnMBBZNesupzQYR63x2dsFCg%2Bbla%2FJUoGK0q%2FlNryurxhZ0gLqKndMUQ7IXbYMsh6yzjch%2FaLsgdoYMoL5AiwzoAVABVLOozygAJsDmS11ujlOro152%2Bw136X62YD0X7jlZbkCLPv9xLGzo7usu1ySVHBYDGBLFv%2FnPhxuIlG7g4ToD%2B6gF0KolU4AWTfT4fweWnbnaLAUq565RYN9sdKPssZqUdlunRYIshtJaE%2BgRxHYSwQ7mQGEIbSimhaGoyhG%2F8q5mgzdnV9%2BlWJwx%2BXJ4bulE6U6RyJGD3yV6U2rkkVcjzWS1iG7RjyCVFLcsZGfRiLG881qg9lZ8tiJ1UW1WHiR9E46swv9j%2BxAY6pgFzA0QQcMI%2BQwiBACA5AS3v1cRYcBcUaCwwnSROCnSgHDBW6uVtcMumnqEcxWYE5m80vwvB%2BsSSWFKyL%2BAX7uT9N%2F%2FvsMtp2uBnV8VN4vN3yXqjbPBqDYB%2FAt4XKTiZC%2Fi%2FssDfEzmLUpqte5x1cQfKwBZSSyhiaDdm5aYp38EMKHzi7gfE0i57JCupv%2BpLyasxUVsI0TE2BTnG8izhb7m687pigYkd&X-Amz-Signature=0484a56a1683d11fae2d410a13b53f2ab2dcaa4365252700be476fca6ef4f477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSA5VTSE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAr6N4eKmFp2FGBgCwQonFX%2FYbShj8xuKadq9e%2BC94KLAiBPEo1udohoxHADRDFTPoneEs8O9leGMYGvl51gM00Eqyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMpjci3tY0a6j8pYawKtwDc%2FtfkOnUcampclHSr2ytQ2v2f488VpBXj35TMXAX6qNwdHshNDN6Om%2BMUzbYA0lE6CaTza8pznD0ag2Lv6ZfAeuN1%2BuiCC1zi6dutyho9dkSrEcUonMKoYLnqIT9h74HPkbY62%2F%2BCcN4f183g0RMvhUVUrHxHrD44CW5o%2F5idyPvc2OuuqO6ZecmCJWFTAy%2FMMMGI96gKeDAErxsqQIH%2Fq2gyx%2Bf7HjdhGa9uTTIPEI4rRfMPWaq%2FAtje5hVqR0Q9wt7U8ziagFVYqOverdH6zf4S%2BwURnMBBZNesupzQYR63x2dsFCg%2Bbla%2FJUoGK0q%2FlNryurxhZ0gLqKndMUQ7IXbYMsh6yzjch%2FaLsgdoYMoL5AiwzoAVABVLOozygAJsDmS11ujlOro152%2Bw136X62YD0X7jlZbkCLPv9xLGzo7usu1ySVHBYDGBLFv%2FnPhxuIlG7g4ToD%2B6gF0KolU4AWTfT4fweWnbnaLAUq565RYN9sdKPssZqUdlunRYIshtJaE%2BgRxHYSwQ7mQGEIbSimhaGoyhG%2F8q5mgzdnV9%2BlWJwx%2BXJ4bulE6U6RyJGD3yV6U2rkkVcjzWS1iG7RjyCVFLcsZGfRiLG881qg9lZ8tiJ1UW1WHiR9E46swv9j%2BxAY6pgFzA0QQcMI%2BQwiBACA5AS3v1cRYcBcUaCwwnSROCnSgHDBW6uVtcMumnqEcxWYE5m80vwvB%2BsSSWFKyL%2BAX7uT9N%2F%2FvsMtp2uBnV8VN4vN3yXqjbPBqDYB%2FAt4XKTiZC%2Fi%2FssDfEzmLUpqte5x1cQfKwBZSSyhiaDdm5aYp38EMKHzi7gfE0i57JCupv%2BpLyasxUVsI0TE2BTnG8izhb7m687pigYkd&X-Amz-Signature=e60c9b2fb71327cf4e2581d4ad668c2280e026e73c6fe02eb5fc0375fff2846a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSA5VTSE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAr6N4eKmFp2FGBgCwQonFX%2FYbShj8xuKadq9e%2BC94KLAiBPEo1udohoxHADRDFTPoneEs8O9leGMYGvl51gM00Eqyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMpjci3tY0a6j8pYawKtwDc%2FtfkOnUcampclHSr2ytQ2v2f488VpBXj35TMXAX6qNwdHshNDN6Om%2BMUzbYA0lE6CaTza8pznD0ag2Lv6ZfAeuN1%2BuiCC1zi6dutyho9dkSrEcUonMKoYLnqIT9h74HPkbY62%2F%2BCcN4f183g0RMvhUVUrHxHrD44CW5o%2F5idyPvc2OuuqO6ZecmCJWFTAy%2FMMMGI96gKeDAErxsqQIH%2Fq2gyx%2Bf7HjdhGa9uTTIPEI4rRfMPWaq%2FAtje5hVqR0Q9wt7U8ziagFVYqOverdH6zf4S%2BwURnMBBZNesupzQYR63x2dsFCg%2Bbla%2FJUoGK0q%2FlNryurxhZ0gLqKndMUQ7IXbYMsh6yzjch%2FaLsgdoYMoL5AiwzoAVABVLOozygAJsDmS11ujlOro152%2Bw136X62YD0X7jlZbkCLPv9xLGzo7usu1ySVHBYDGBLFv%2FnPhxuIlG7g4ToD%2B6gF0KolU4AWTfT4fweWnbnaLAUq565RYN9sdKPssZqUdlunRYIshtJaE%2BgRxHYSwQ7mQGEIbSimhaGoyhG%2F8q5mgzdnV9%2BlWJwx%2BXJ4bulE6U6RyJGD3yV6U2rkkVcjzWS1iG7RjyCVFLcsZGfRiLG881qg9lZ8tiJ1UW1WHiR9E46swv9j%2BxAY6pgFzA0QQcMI%2BQwiBACA5AS3v1cRYcBcUaCwwnSROCnSgHDBW6uVtcMumnqEcxWYE5m80vwvB%2BsSSWFKyL%2BAX7uT9N%2F%2FvsMtp2uBnV8VN4vN3yXqjbPBqDYB%2FAt4XKTiZC%2Fi%2FssDfEzmLUpqte5x1cQfKwBZSSyhiaDdm5aYp38EMKHzi7gfE0i57JCupv%2BpLyasxUVsI0TE2BTnG8izhb7m687pigYkd&X-Amz-Signature=9e360ede69df08ef925d4088a7619e6fae4d3726b9e981b4248bd621155d2b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSA5VTSE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAr6N4eKmFp2FGBgCwQonFX%2FYbShj8xuKadq9e%2BC94KLAiBPEo1udohoxHADRDFTPoneEs8O9leGMYGvl51gM00Eqyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMpjci3tY0a6j8pYawKtwDc%2FtfkOnUcampclHSr2ytQ2v2f488VpBXj35TMXAX6qNwdHshNDN6Om%2BMUzbYA0lE6CaTza8pznD0ag2Lv6ZfAeuN1%2BuiCC1zi6dutyho9dkSrEcUonMKoYLnqIT9h74HPkbY62%2F%2BCcN4f183g0RMvhUVUrHxHrD44CW5o%2F5idyPvc2OuuqO6ZecmCJWFTAy%2FMMMGI96gKeDAErxsqQIH%2Fq2gyx%2Bf7HjdhGa9uTTIPEI4rRfMPWaq%2FAtje5hVqR0Q9wt7U8ziagFVYqOverdH6zf4S%2BwURnMBBZNesupzQYR63x2dsFCg%2Bbla%2FJUoGK0q%2FlNryurxhZ0gLqKndMUQ7IXbYMsh6yzjch%2FaLsgdoYMoL5AiwzoAVABVLOozygAJsDmS11ujlOro152%2Bw136X62YD0X7jlZbkCLPv9xLGzo7usu1ySVHBYDGBLFv%2FnPhxuIlG7g4ToD%2B6gF0KolU4AWTfT4fweWnbnaLAUq565RYN9sdKPssZqUdlunRYIshtJaE%2BgRxHYSwQ7mQGEIbSimhaGoyhG%2F8q5mgzdnV9%2BlWJwx%2BXJ4bulE6U6RyJGD3yV6U2rkkVcjzWS1iG7RjyCVFLcsZGfRiLG881qg9lZ8tiJ1UW1WHiR9E46swv9j%2BxAY6pgFzA0QQcMI%2BQwiBACA5AS3v1cRYcBcUaCwwnSROCnSgHDBW6uVtcMumnqEcxWYE5m80vwvB%2BsSSWFKyL%2BAX7uT9N%2F%2FvsMtp2uBnV8VN4vN3yXqjbPBqDYB%2FAt4XKTiZC%2Fi%2FssDfEzmLUpqte5x1cQfKwBZSSyhiaDdm5aYp38EMKHzi7gfE0i57JCupv%2BpLyasxUVsI0TE2BTnG8izhb7m687pigYkd&X-Amz-Signature=8eed25b23ba03af9b76cd4de377456e3d5269135e0ae8f0c912bd1e40207caff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
