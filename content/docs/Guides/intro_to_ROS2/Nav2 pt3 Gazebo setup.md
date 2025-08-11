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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LNZQCM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5WTnhTy%2FYGMNcBiUzlNiYuuudC%2BW%2FnCE76RVRTgp4hgIgSteQ3tbEQ%2BMvd5uz0Pk3RIDF7Mhd42bvc5TQ2TzM3NUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBonTD4SdM26qVr0aCrcA%2Boco09gYvgYkkb4G%2Fb0vy24Sju0jP1hYyGab5xmekRhk%2Bi%2BhmN7VLoZy%2Fa8c5Yz3njxY0XogzOtRBmg8eqQwYKhOZfVxFBU9fVOzbRPorV9dT4NoT%2FujSYa6B4shutXFnxy3s8p7Aq30o8waZvhxNyqWyi6Ewh2rY5frKWs7hNmR0SHK0N0UI3lehnx1sWakI5Kl5uVZmdkZe5eicN5bxYOizx0jE42UASvpuKDiS7zOQDVVv6IKk8icCMdtet3jRSB7vGxuTOSG6iNenaVCkE7omnkyDBMWKefvdHqeWjZm%2FbsFGmZC8iw7uFvQornbVmuzbLrK6Ci6YUn9AMnG5aUUxN73Em19P8Cxhs2ggMM9t65Qi38hPNFHYIHbptRWcjBjcexPoi9QHMRhNlUCl%2BdR2to3yXctDAi67eX%2Bdcc0hD5XbiLvFK81wGyZkaxCNOmPAFHnm816QjDa7D7J0tB%2F8oPBez9zQZ%2BItITUWZxE2%2F8PkHTG68PsRsPUrZI%2B8r8%2B8pYabLH6H1OiGF6Ss1X5R1OaX84JOqQkvuo69q6iNzQwrEklVF%2B23RfyjeV2s%2BQmKLM4n4r6zBy9WToDxCnkgeiahS1my%2Fa7JZISEpWPRWEqrcL7%2FQG%2FlzVMJij58QGOqUBZt%2FcGaUDB%2FlgtXnqXRgq8agC8knkCZ4sp8W9U%2FV4mmmh%2BBZr8gR2imiyFO%2FnrzMgapfS3LllKirK9UdHxREOrGtgaiz%2Fw9NrFyY5nOSkZ7jHGL2CeiSNHl%2BD7GCP%2BS82upr8IjVrTY64zB3jNLPYQF2lXE7vzY1FpxeLej3TiObWhsXcBo0fVzIsu6tL1o%2FDMoax1uElA7i%2BPN7NST0EJtPzQTN3&X-Amz-Signature=c61b3b9f7c33caf073b55daf1efdce8c637ab892b5d40a6c0b14c34fa0cb3ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LNZQCM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5WTnhTy%2FYGMNcBiUzlNiYuuudC%2BW%2FnCE76RVRTgp4hgIgSteQ3tbEQ%2BMvd5uz0Pk3RIDF7Mhd42bvc5TQ2TzM3NUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBonTD4SdM26qVr0aCrcA%2Boco09gYvgYkkb4G%2Fb0vy24Sju0jP1hYyGab5xmekRhk%2Bi%2BhmN7VLoZy%2Fa8c5Yz3njxY0XogzOtRBmg8eqQwYKhOZfVxFBU9fVOzbRPorV9dT4NoT%2FujSYa6B4shutXFnxy3s8p7Aq30o8waZvhxNyqWyi6Ewh2rY5frKWs7hNmR0SHK0N0UI3lehnx1sWakI5Kl5uVZmdkZe5eicN5bxYOizx0jE42UASvpuKDiS7zOQDVVv6IKk8icCMdtet3jRSB7vGxuTOSG6iNenaVCkE7omnkyDBMWKefvdHqeWjZm%2FbsFGmZC8iw7uFvQornbVmuzbLrK6Ci6YUn9AMnG5aUUxN73Em19P8Cxhs2ggMM9t65Qi38hPNFHYIHbptRWcjBjcexPoi9QHMRhNlUCl%2BdR2to3yXctDAi67eX%2Bdcc0hD5XbiLvFK81wGyZkaxCNOmPAFHnm816QjDa7D7J0tB%2F8oPBez9zQZ%2BItITUWZxE2%2F8PkHTG68PsRsPUrZI%2B8r8%2B8pYabLH6H1OiGF6Ss1X5R1OaX84JOqQkvuo69q6iNzQwrEklVF%2B23RfyjeV2s%2BQmKLM4n4r6zBy9WToDxCnkgeiahS1my%2Fa7JZISEpWPRWEqrcL7%2FQG%2FlzVMJij58QGOqUBZt%2FcGaUDB%2FlgtXnqXRgq8agC8knkCZ4sp8W9U%2FV4mmmh%2BBZr8gR2imiyFO%2FnrzMgapfS3LllKirK9UdHxREOrGtgaiz%2Fw9NrFyY5nOSkZ7jHGL2CeiSNHl%2BD7GCP%2BS82upr8IjVrTY64zB3jNLPYQF2lXE7vzY1FpxeLej3TiObWhsXcBo0fVzIsu6tL1o%2FDMoax1uElA7i%2BPN7NST0EJtPzQTN3&X-Amz-Signature=afaf6dba383707ed7a486dbe99a79c796495995c5da114e8de81ca1a58e535c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LNZQCM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5WTnhTy%2FYGMNcBiUzlNiYuuudC%2BW%2FnCE76RVRTgp4hgIgSteQ3tbEQ%2BMvd5uz0Pk3RIDF7Mhd42bvc5TQ2TzM3NUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBonTD4SdM26qVr0aCrcA%2Boco09gYvgYkkb4G%2Fb0vy24Sju0jP1hYyGab5xmekRhk%2Bi%2BhmN7VLoZy%2Fa8c5Yz3njxY0XogzOtRBmg8eqQwYKhOZfVxFBU9fVOzbRPorV9dT4NoT%2FujSYa6B4shutXFnxy3s8p7Aq30o8waZvhxNyqWyi6Ewh2rY5frKWs7hNmR0SHK0N0UI3lehnx1sWakI5Kl5uVZmdkZe5eicN5bxYOizx0jE42UASvpuKDiS7zOQDVVv6IKk8icCMdtet3jRSB7vGxuTOSG6iNenaVCkE7omnkyDBMWKefvdHqeWjZm%2FbsFGmZC8iw7uFvQornbVmuzbLrK6Ci6YUn9AMnG5aUUxN73Em19P8Cxhs2ggMM9t65Qi38hPNFHYIHbptRWcjBjcexPoi9QHMRhNlUCl%2BdR2to3yXctDAi67eX%2Bdcc0hD5XbiLvFK81wGyZkaxCNOmPAFHnm816QjDa7D7J0tB%2F8oPBez9zQZ%2BItITUWZxE2%2F8PkHTG68PsRsPUrZI%2B8r8%2B8pYabLH6H1OiGF6Ss1X5R1OaX84JOqQkvuo69q6iNzQwrEklVF%2B23RfyjeV2s%2BQmKLM4n4r6zBy9WToDxCnkgeiahS1my%2Fa7JZISEpWPRWEqrcL7%2FQG%2FlzVMJij58QGOqUBZt%2FcGaUDB%2FlgtXnqXRgq8agC8knkCZ4sp8W9U%2FV4mmmh%2BBZr8gR2imiyFO%2FnrzMgapfS3LllKirK9UdHxREOrGtgaiz%2Fw9NrFyY5nOSkZ7jHGL2CeiSNHl%2BD7GCP%2BS82upr8IjVrTY64zB3jNLPYQF2lXE7vzY1FpxeLej3TiObWhsXcBo0fVzIsu6tL1o%2FDMoax1uElA7i%2BPN7NST0EJtPzQTN3&X-Amz-Signature=6bccdbdc0b3aa8e94fa5351703666ef4e4a020ec3f8becb6917ebc83e13a35fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LNZQCM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5WTnhTy%2FYGMNcBiUzlNiYuuudC%2BW%2FnCE76RVRTgp4hgIgSteQ3tbEQ%2BMvd5uz0Pk3RIDF7Mhd42bvc5TQ2TzM3NUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBonTD4SdM26qVr0aCrcA%2Boco09gYvgYkkb4G%2Fb0vy24Sju0jP1hYyGab5xmekRhk%2Bi%2BhmN7VLoZy%2Fa8c5Yz3njxY0XogzOtRBmg8eqQwYKhOZfVxFBU9fVOzbRPorV9dT4NoT%2FujSYa6B4shutXFnxy3s8p7Aq30o8waZvhxNyqWyi6Ewh2rY5frKWs7hNmR0SHK0N0UI3lehnx1sWakI5Kl5uVZmdkZe5eicN5bxYOizx0jE42UASvpuKDiS7zOQDVVv6IKk8icCMdtet3jRSB7vGxuTOSG6iNenaVCkE7omnkyDBMWKefvdHqeWjZm%2FbsFGmZC8iw7uFvQornbVmuzbLrK6Ci6YUn9AMnG5aUUxN73Em19P8Cxhs2ggMM9t65Qi38hPNFHYIHbptRWcjBjcexPoi9QHMRhNlUCl%2BdR2to3yXctDAi67eX%2Bdcc0hD5XbiLvFK81wGyZkaxCNOmPAFHnm816QjDa7D7J0tB%2F8oPBez9zQZ%2BItITUWZxE2%2F8PkHTG68PsRsPUrZI%2B8r8%2B8pYabLH6H1OiGF6Ss1X5R1OaX84JOqQkvuo69q6iNzQwrEklVF%2B23RfyjeV2s%2BQmKLM4n4r6zBy9WToDxCnkgeiahS1my%2Fa7JZISEpWPRWEqrcL7%2FQG%2FlzVMJij58QGOqUBZt%2FcGaUDB%2FlgtXnqXRgq8agC8knkCZ4sp8W9U%2FV4mmmh%2BBZr8gR2imiyFO%2FnrzMgapfS3LllKirK9UdHxREOrGtgaiz%2Fw9NrFyY5nOSkZ7jHGL2CeiSNHl%2BD7GCP%2BS82upr8IjVrTY64zB3jNLPYQF2lXE7vzY1FpxeLej3TiObWhsXcBo0fVzIsu6tL1o%2FDMoax1uElA7i%2BPN7NST0EJtPzQTN3&X-Amz-Signature=13a287c5b9da6499e1cd706e6d47dc6da6473097a3925e576bbcb39e5a8f89b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCD5U5J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtPG6AoZLV7fmBV9WniKF0xHWTDT%2FOnfS%2BQzOTgp6ZdQIgTtr4%2FklBwWYI8ehK%2F2jCJvoBeL9N8D2MQmkWJVCf22AqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvTCEzEQKWMahLQfircA9jrMMLCv9%2BHMw7IqR1mlAgoBYUlub4V1Si%2BBZHcCtfo%2Fe9TxAsUqZ1Q5OJ%2B1xsWtkcHbl03WjjTWpd1W7J4Z7ssoCrge5046n5Ji9pjdlztFWwhwi9lQPkfQFt5HK3ViwDhudFhaeLEdnQnfAwiSuA1eSfrJikY2ZYqKxr6Vwh1yCgk8cPDSCLOYuIq6qP3bbYEkpGR4EmdD3KmvdNx7za7MfIb0pdFLu%2Bxj4sa5nIiTaRv%2FNtlMHcZYsynDVSqnTpoT2o5zq0n%2F1%2BhKbDeBcAlQPyBbhP%2FJ%2BFGV2snb%2FOvXGah%2F%2B1mzJP4IqYgGxIH1Iva%2F0%2FmBFyBzOtGjznuXqhyJWeZOJS%2BcVDw63Pgzvd3Gz%2BIPQz2R4jEMIExvIPfmB9semrbvma84dur%2F50m7OUGzOEeGMdp2M8CtNVWxcYR5B5pkahmMZM2bI5%2BNDB%2B2jyt2R%2FamDPjeq0Ek3IyzoG3QdmeFFJ%2B06okjLWW3%2BCaJKq1p3stMHNcfoo4qoBVO5CE16qiKRY%2BWtuXrMyc5%2BanJfIO0UpNEGwE7hWnwRw1I2N%2BCR6xQvuuNr%2F%2FApNc%2B2te8s6cofTkCvPFrA1JyCXluZf%2BwwEpZaNYPbChSrleFJdrPjj5%2Bq6fC9kkMM%2Bi58QGOqUBwZJDp2mLIZdruu0tUF6nrLgKFqvfaTpCukmYnKWv8tfRejyiJUJL0%2FqUOsjpUDgZRfm6kTkJQrZTuUe95dGq4WMgQMKsjSazWsXhovivFNOnIL6Nj6mFlr2GKraryiBbduJQ3cx%2FXtsHssl6ndesOktJUFyCR%2BXz6Za%2F6DlkfjNkBYHbMl2PO1%2FnwmnLCzBXlbUsrQhkvy6RxbD3bCG3D8G3Y%2Fl5&X-Amz-Signature=0705c43139873b587367cce9b39a1092043389f8d69022585c9c4180dc2f9198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LNZQCM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5WTnhTy%2FYGMNcBiUzlNiYuuudC%2BW%2FnCE76RVRTgp4hgIgSteQ3tbEQ%2BMvd5uz0Pk3RIDF7Mhd42bvc5TQ2TzM3NUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBonTD4SdM26qVr0aCrcA%2Boco09gYvgYkkb4G%2Fb0vy24Sju0jP1hYyGab5xmekRhk%2Bi%2BhmN7VLoZy%2Fa8c5Yz3njxY0XogzOtRBmg8eqQwYKhOZfVxFBU9fVOzbRPorV9dT4NoT%2FujSYa6B4shutXFnxy3s8p7Aq30o8waZvhxNyqWyi6Ewh2rY5frKWs7hNmR0SHK0N0UI3lehnx1sWakI5Kl5uVZmdkZe5eicN5bxYOizx0jE42UASvpuKDiS7zOQDVVv6IKk8icCMdtet3jRSB7vGxuTOSG6iNenaVCkE7omnkyDBMWKefvdHqeWjZm%2FbsFGmZC8iw7uFvQornbVmuzbLrK6Ci6YUn9AMnG5aUUxN73Em19P8Cxhs2ggMM9t65Qi38hPNFHYIHbptRWcjBjcexPoi9QHMRhNlUCl%2BdR2to3yXctDAi67eX%2Bdcc0hD5XbiLvFK81wGyZkaxCNOmPAFHnm816QjDa7D7J0tB%2F8oPBez9zQZ%2BItITUWZxE2%2F8PkHTG68PsRsPUrZI%2B8r8%2B8pYabLH6H1OiGF6Ss1X5R1OaX84JOqQkvuo69q6iNzQwrEklVF%2B23RfyjeV2s%2BQmKLM4n4r6zBy9WToDxCnkgeiahS1my%2Fa7JZISEpWPRWEqrcL7%2FQG%2FlzVMJij58QGOqUBZt%2FcGaUDB%2FlgtXnqXRgq8agC8knkCZ4sp8W9U%2FV4mmmh%2BBZr8gR2imiyFO%2FnrzMgapfS3LllKirK9UdHxREOrGtgaiz%2Fw9NrFyY5nOSkZ7jHGL2CeiSNHl%2BD7GCP%2BS82upr8IjVrTY64zB3jNLPYQF2lXE7vzY1FpxeLej3TiObWhsXcBo0fVzIsu6tL1o%2FDMoax1uElA7i%2BPN7NST0EJtPzQTN3&X-Amz-Signature=eb95c103e3aac0efc0dc29df9bd9f9962db4e6b8fba402d6bca4611b7f15ea37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LNZQCM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5WTnhTy%2FYGMNcBiUzlNiYuuudC%2BW%2FnCE76RVRTgp4hgIgSteQ3tbEQ%2BMvd5uz0Pk3RIDF7Mhd42bvc5TQ2TzM3NUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBonTD4SdM26qVr0aCrcA%2Boco09gYvgYkkb4G%2Fb0vy24Sju0jP1hYyGab5xmekRhk%2Bi%2BhmN7VLoZy%2Fa8c5Yz3njxY0XogzOtRBmg8eqQwYKhOZfVxFBU9fVOzbRPorV9dT4NoT%2FujSYa6B4shutXFnxy3s8p7Aq30o8waZvhxNyqWyi6Ewh2rY5frKWs7hNmR0SHK0N0UI3lehnx1sWakI5Kl5uVZmdkZe5eicN5bxYOizx0jE42UASvpuKDiS7zOQDVVv6IKk8icCMdtet3jRSB7vGxuTOSG6iNenaVCkE7omnkyDBMWKefvdHqeWjZm%2FbsFGmZC8iw7uFvQornbVmuzbLrK6Ci6YUn9AMnG5aUUxN73Em19P8Cxhs2ggMM9t65Qi38hPNFHYIHbptRWcjBjcexPoi9QHMRhNlUCl%2BdR2to3yXctDAi67eX%2Bdcc0hD5XbiLvFK81wGyZkaxCNOmPAFHnm816QjDa7D7J0tB%2F8oPBez9zQZ%2BItITUWZxE2%2F8PkHTG68PsRsPUrZI%2B8r8%2B8pYabLH6H1OiGF6Ss1X5R1OaX84JOqQkvuo69q6iNzQwrEklVF%2B23RfyjeV2s%2BQmKLM4n4r6zBy9WToDxCnkgeiahS1my%2Fa7JZISEpWPRWEqrcL7%2FQG%2FlzVMJij58QGOqUBZt%2FcGaUDB%2FlgtXnqXRgq8agC8knkCZ4sp8W9U%2FV4mmmh%2BBZr8gR2imiyFO%2FnrzMgapfS3LllKirK9UdHxREOrGtgaiz%2Fw9NrFyY5nOSkZ7jHGL2CeiSNHl%2BD7GCP%2BS82upr8IjVrTY64zB3jNLPYQF2lXE7vzY1FpxeLej3TiObWhsXcBo0fVzIsu6tL1o%2FDMoax1uElA7i%2BPN7NST0EJtPzQTN3&X-Amz-Signature=b8c6d1dbca3b6e15e1f0a761a5e2afc316675a7cfc7ec4353cfe6a8de3e9c470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LNZQCM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5WTnhTy%2FYGMNcBiUzlNiYuuudC%2BW%2FnCE76RVRTgp4hgIgSteQ3tbEQ%2BMvd5uz0Pk3RIDF7Mhd42bvc5TQ2TzM3NUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBonTD4SdM26qVr0aCrcA%2Boco09gYvgYkkb4G%2Fb0vy24Sju0jP1hYyGab5xmekRhk%2Bi%2BhmN7VLoZy%2Fa8c5Yz3njxY0XogzOtRBmg8eqQwYKhOZfVxFBU9fVOzbRPorV9dT4NoT%2FujSYa6B4shutXFnxy3s8p7Aq30o8waZvhxNyqWyi6Ewh2rY5frKWs7hNmR0SHK0N0UI3lehnx1sWakI5Kl5uVZmdkZe5eicN5bxYOizx0jE42UASvpuKDiS7zOQDVVv6IKk8icCMdtet3jRSB7vGxuTOSG6iNenaVCkE7omnkyDBMWKefvdHqeWjZm%2FbsFGmZC8iw7uFvQornbVmuzbLrK6Ci6YUn9AMnG5aUUxN73Em19P8Cxhs2ggMM9t65Qi38hPNFHYIHbptRWcjBjcexPoi9QHMRhNlUCl%2BdR2to3yXctDAi67eX%2Bdcc0hD5XbiLvFK81wGyZkaxCNOmPAFHnm816QjDa7D7J0tB%2F8oPBez9zQZ%2BItITUWZxE2%2F8PkHTG68PsRsPUrZI%2B8r8%2B8pYabLH6H1OiGF6Ss1X5R1OaX84JOqQkvuo69q6iNzQwrEklVF%2B23RfyjeV2s%2BQmKLM4n4r6zBy9WToDxCnkgeiahS1my%2Fa7JZISEpWPRWEqrcL7%2FQG%2FlzVMJij58QGOqUBZt%2FcGaUDB%2FlgtXnqXRgq8agC8knkCZ4sp8W9U%2FV4mmmh%2BBZr8gR2imiyFO%2FnrzMgapfS3LllKirK9UdHxREOrGtgaiz%2Fw9NrFyY5nOSkZ7jHGL2CeiSNHl%2BD7GCP%2BS82upr8IjVrTY64zB3jNLPYQF2lXE7vzY1FpxeLej3TiObWhsXcBo0fVzIsu6tL1o%2FDMoax1uElA7i%2BPN7NST0EJtPzQTN3&X-Amz-Signature=c28c7e79ad396c968ecaccf5f9df27a9bad5dd900ac2be8920d569604327c991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LNZQCM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5WTnhTy%2FYGMNcBiUzlNiYuuudC%2BW%2FnCE76RVRTgp4hgIgSteQ3tbEQ%2BMvd5uz0Pk3RIDF7Mhd42bvc5TQ2TzM3NUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBonTD4SdM26qVr0aCrcA%2Boco09gYvgYkkb4G%2Fb0vy24Sju0jP1hYyGab5xmekRhk%2Bi%2BhmN7VLoZy%2Fa8c5Yz3njxY0XogzOtRBmg8eqQwYKhOZfVxFBU9fVOzbRPorV9dT4NoT%2FujSYa6B4shutXFnxy3s8p7Aq30o8waZvhxNyqWyi6Ewh2rY5frKWs7hNmR0SHK0N0UI3lehnx1sWakI5Kl5uVZmdkZe5eicN5bxYOizx0jE42UASvpuKDiS7zOQDVVv6IKk8icCMdtet3jRSB7vGxuTOSG6iNenaVCkE7omnkyDBMWKefvdHqeWjZm%2FbsFGmZC8iw7uFvQornbVmuzbLrK6Ci6YUn9AMnG5aUUxN73Em19P8Cxhs2ggMM9t65Qi38hPNFHYIHbptRWcjBjcexPoi9QHMRhNlUCl%2BdR2to3yXctDAi67eX%2Bdcc0hD5XbiLvFK81wGyZkaxCNOmPAFHnm816QjDa7D7J0tB%2F8oPBez9zQZ%2BItITUWZxE2%2F8PkHTG68PsRsPUrZI%2B8r8%2B8pYabLH6H1OiGF6Ss1X5R1OaX84JOqQkvuo69q6iNzQwrEklVF%2B23RfyjeV2s%2BQmKLM4n4r6zBy9WToDxCnkgeiahS1my%2Fa7JZISEpWPRWEqrcL7%2FQG%2FlzVMJij58QGOqUBZt%2FcGaUDB%2FlgtXnqXRgq8agC8knkCZ4sp8W9U%2FV4mmmh%2BBZr8gR2imiyFO%2FnrzMgapfS3LllKirK9UdHxREOrGtgaiz%2Fw9NrFyY5nOSkZ7jHGL2CeiSNHl%2BD7GCP%2BS82upr8IjVrTY64zB3jNLPYQF2lXE7vzY1FpxeLej3TiObWhsXcBo0fVzIsu6tL1o%2FDMoax1uElA7i%2BPN7NST0EJtPzQTN3&X-Amz-Signature=90eaf7a3128dea22dd2e1f65e9dff021c5bb6ce5765267ed2711b754302c9dd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LNZQCM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5WTnhTy%2FYGMNcBiUzlNiYuuudC%2BW%2FnCE76RVRTgp4hgIgSteQ3tbEQ%2BMvd5uz0Pk3RIDF7Mhd42bvc5TQ2TzM3NUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBonTD4SdM26qVr0aCrcA%2Boco09gYvgYkkb4G%2Fb0vy24Sju0jP1hYyGab5xmekRhk%2Bi%2BhmN7VLoZy%2Fa8c5Yz3njxY0XogzOtRBmg8eqQwYKhOZfVxFBU9fVOzbRPorV9dT4NoT%2FujSYa6B4shutXFnxy3s8p7Aq30o8waZvhxNyqWyi6Ewh2rY5frKWs7hNmR0SHK0N0UI3lehnx1sWakI5Kl5uVZmdkZe5eicN5bxYOizx0jE42UASvpuKDiS7zOQDVVv6IKk8icCMdtet3jRSB7vGxuTOSG6iNenaVCkE7omnkyDBMWKefvdHqeWjZm%2FbsFGmZC8iw7uFvQornbVmuzbLrK6Ci6YUn9AMnG5aUUxN73Em19P8Cxhs2ggMM9t65Qi38hPNFHYIHbptRWcjBjcexPoi9QHMRhNlUCl%2BdR2to3yXctDAi67eX%2Bdcc0hD5XbiLvFK81wGyZkaxCNOmPAFHnm816QjDa7D7J0tB%2F8oPBez9zQZ%2BItITUWZxE2%2F8PkHTG68PsRsPUrZI%2B8r8%2B8pYabLH6H1OiGF6Ss1X5R1OaX84JOqQkvuo69q6iNzQwrEklVF%2B23RfyjeV2s%2BQmKLM4n4r6zBy9WToDxCnkgeiahS1my%2Fa7JZISEpWPRWEqrcL7%2FQG%2FlzVMJij58QGOqUBZt%2FcGaUDB%2FlgtXnqXRgq8agC8knkCZ4sp8W9U%2FV4mmmh%2BBZr8gR2imiyFO%2FnrzMgapfS3LllKirK9UdHxREOrGtgaiz%2Fw9NrFyY5nOSkZ7jHGL2CeiSNHl%2BD7GCP%2BS82upr8IjVrTY64zB3jNLPYQF2lXE7vzY1FpxeLej3TiObWhsXcBo0fVzIsu6tL1o%2FDMoax1uElA7i%2BPN7NST0EJtPzQTN3&X-Amz-Signature=728ff83c85b819e199c1ef2faeec61ecc3195a7952fc48a2586c3d92f41b7f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LNZQCM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5WTnhTy%2FYGMNcBiUzlNiYuuudC%2BW%2FnCE76RVRTgp4hgIgSteQ3tbEQ%2BMvd5uz0Pk3RIDF7Mhd42bvc5TQ2TzM3NUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBonTD4SdM26qVr0aCrcA%2Boco09gYvgYkkb4G%2Fb0vy24Sju0jP1hYyGab5xmekRhk%2Bi%2BhmN7VLoZy%2Fa8c5Yz3njxY0XogzOtRBmg8eqQwYKhOZfVxFBU9fVOzbRPorV9dT4NoT%2FujSYa6B4shutXFnxy3s8p7Aq30o8waZvhxNyqWyi6Ewh2rY5frKWs7hNmR0SHK0N0UI3lehnx1sWakI5Kl5uVZmdkZe5eicN5bxYOizx0jE42UASvpuKDiS7zOQDVVv6IKk8icCMdtet3jRSB7vGxuTOSG6iNenaVCkE7omnkyDBMWKefvdHqeWjZm%2FbsFGmZC8iw7uFvQornbVmuzbLrK6Ci6YUn9AMnG5aUUxN73Em19P8Cxhs2ggMM9t65Qi38hPNFHYIHbptRWcjBjcexPoi9QHMRhNlUCl%2BdR2to3yXctDAi67eX%2Bdcc0hD5XbiLvFK81wGyZkaxCNOmPAFHnm816QjDa7D7J0tB%2F8oPBez9zQZ%2BItITUWZxE2%2F8PkHTG68PsRsPUrZI%2B8r8%2B8pYabLH6H1OiGF6Ss1X5R1OaX84JOqQkvuo69q6iNzQwrEklVF%2B23RfyjeV2s%2BQmKLM4n4r6zBy9WToDxCnkgeiahS1my%2Fa7JZISEpWPRWEqrcL7%2FQG%2FlzVMJij58QGOqUBZt%2FcGaUDB%2FlgtXnqXRgq8agC8knkCZ4sp8W9U%2FV4mmmh%2BBZr8gR2imiyFO%2FnrzMgapfS3LllKirK9UdHxREOrGtgaiz%2Fw9NrFyY5nOSkZ7jHGL2CeiSNHl%2BD7GCP%2BS82upr8IjVrTY64zB3jNLPYQF2lXE7vzY1FpxeLej3TiObWhsXcBo0fVzIsu6tL1o%2FDMoax1uElA7i%2BPN7NST0EJtPzQTN3&X-Amz-Signature=5340dc1c99d87afd39dcdf25260f8246fe97ebefa0491c888f9f6b6dfe373edd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
