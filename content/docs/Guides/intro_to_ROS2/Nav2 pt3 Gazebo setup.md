---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-08-02T01:01:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-08-02T01:01:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6S45BO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvDjasVparcwTdwQbCbdnKS3td%2B7T5oOvSvGS3VBXHSAiB4RDqT1lR%2FBsIcJDA%2Bd1Rtcrql03UBcg7tjfQ6wlfh1yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMPUsKeNI95ecDlffAKtwDUua1uWaa%2Fgub2F4BPMt%2BHBp7M1a0pVFHhJmj4aKtK%2FNjlH6Yq8o5fBqqdwyYY5P3SknUVR2mQ2%2Fl67I%2BRERvtWkKBED%2FyoPRolo8I1YHETrQMc4jYHPjxKIPOWZf1iG5vnnq419nvqipecHIE1MrgpzJMmnWt1N5hbQl5tT0KFO9R4MPIKK4M%2BGZio3vm74f1IWpCtgIR07B6rt4d%2Bz0jz4Qt6u7v%2BmE%2BSHwLqcTZvtCapAjCSSGSSmw9ILVNxEuq04BP%2FZWcjysb5wLZv93TappuLupa%2FYRMifsAsgEm5m1n%2FgslVBnQVvcKIkEmbk0zaL8ZvQlLehVUIf5L%2FGe3wfwnN1yzIDtmL9BY9gvr5DInCQEAxKdwc4gXiq1YZ2Huejck0wclxaei3dqFKNseewSDmcXuA9k%2F8HV8Xap1LliwVEj14aKEVjBdnDOUSgLfNjD%2FfKIXg8339ofPE0oUOGABVFvHgyT0qIBTeWBBYOdtj6kFA0Vf6ivZN%2F%2FrzTq2yZaYAOb4OnXv76BzaDNPtIfMkutOspgTG2pWXIkLn%2Fvidy0tz9nhv9gt9btC7ad2rSN9z2ovVMw190a8Hxi1Fct%2Fzk174KeiVE4Aj7%2BfoytJyOs2RusR9avlQcwkvC2xAY6pgGwHE1K%2BOPzMMRhxh1p1Qn8O3TNKMPirGlvVbOnLVqR3I89aLWRe3DmkOenhmBKJyuAkuzSk4zsHvxWwRqNH7XJ8iNMkfru9El47zMkkeEurZdG7hmgxAUYAkSVfbtDy7RQmpQRdewEAjzdG9G4T68wWwx%2F%2FbKftay26h13ofesR53AlSiI7yK%2FOyb2kNbQJFC4lSKR%2FuQRp1nxzrJxJZcXexOZtRMK&X-Amz-Signature=e83994f48e6377d079bc15dfd57e414dcc1b12566ce4c217c3ad068069181d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6S45BO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvDjasVparcwTdwQbCbdnKS3td%2B7T5oOvSvGS3VBXHSAiB4RDqT1lR%2FBsIcJDA%2Bd1Rtcrql03UBcg7tjfQ6wlfh1yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMPUsKeNI95ecDlffAKtwDUua1uWaa%2Fgub2F4BPMt%2BHBp7M1a0pVFHhJmj4aKtK%2FNjlH6Yq8o5fBqqdwyYY5P3SknUVR2mQ2%2Fl67I%2BRERvtWkKBED%2FyoPRolo8I1YHETrQMc4jYHPjxKIPOWZf1iG5vnnq419nvqipecHIE1MrgpzJMmnWt1N5hbQl5tT0KFO9R4MPIKK4M%2BGZio3vm74f1IWpCtgIR07B6rt4d%2Bz0jz4Qt6u7v%2BmE%2BSHwLqcTZvtCapAjCSSGSSmw9ILVNxEuq04BP%2FZWcjysb5wLZv93TappuLupa%2FYRMifsAsgEm5m1n%2FgslVBnQVvcKIkEmbk0zaL8ZvQlLehVUIf5L%2FGe3wfwnN1yzIDtmL9BY9gvr5DInCQEAxKdwc4gXiq1YZ2Huejck0wclxaei3dqFKNseewSDmcXuA9k%2F8HV8Xap1LliwVEj14aKEVjBdnDOUSgLfNjD%2FfKIXg8339ofPE0oUOGABVFvHgyT0qIBTeWBBYOdtj6kFA0Vf6ivZN%2F%2FrzTq2yZaYAOb4OnXv76BzaDNPtIfMkutOspgTG2pWXIkLn%2Fvidy0tz9nhv9gt9btC7ad2rSN9z2ovVMw190a8Hxi1Fct%2Fzk174KeiVE4Aj7%2BfoytJyOs2RusR9avlQcwkvC2xAY6pgGwHE1K%2BOPzMMRhxh1p1Qn8O3TNKMPirGlvVbOnLVqR3I89aLWRe3DmkOenhmBKJyuAkuzSk4zsHvxWwRqNH7XJ8iNMkfru9El47zMkkeEurZdG7hmgxAUYAkSVfbtDy7RQmpQRdewEAjzdG9G4T68wWwx%2F%2FbKftay26h13ofesR53AlSiI7yK%2FOyb2kNbQJFC4lSKR%2FuQRp1nxzrJxJZcXexOZtRMK&X-Amz-Signature=b13723db150355286fd968b85778f7b60ebeae022960b43e6277d9a158183d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6S45BO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvDjasVparcwTdwQbCbdnKS3td%2B7T5oOvSvGS3VBXHSAiB4RDqT1lR%2FBsIcJDA%2Bd1Rtcrql03UBcg7tjfQ6wlfh1yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMPUsKeNI95ecDlffAKtwDUua1uWaa%2Fgub2F4BPMt%2BHBp7M1a0pVFHhJmj4aKtK%2FNjlH6Yq8o5fBqqdwyYY5P3SknUVR2mQ2%2Fl67I%2BRERvtWkKBED%2FyoPRolo8I1YHETrQMc4jYHPjxKIPOWZf1iG5vnnq419nvqipecHIE1MrgpzJMmnWt1N5hbQl5tT0KFO9R4MPIKK4M%2BGZio3vm74f1IWpCtgIR07B6rt4d%2Bz0jz4Qt6u7v%2BmE%2BSHwLqcTZvtCapAjCSSGSSmw9ILVNxEuq04BP%2FZWcjysb5wLZv93TappuLupa%2FYRMifsAsgEm5m1n%2FgslVBnQVvcKIkEmbk0zaL8ZvQlLehVUIf5L%2FGe3wfwnN1yzIDtmL9BY9gvr5DInCQEAxKdwc4gXiq1YZ2Huejck0wclxaei3dqFKNseewSDmcXuA9k%2F8HV8Xap1LliwVEj14aKEVjBdnDOUSgLfNjD%2FfKIXg8339ofPE0oUOGABVFvHgyT0qIBTeWBBYOdtj6kFA0Vf6ivZN%2F%2FrzTq2yZaYAOb4OnXv76BzaDNPtIfMkutOspgTG2pWXIkLn%2Fvidy0tz9nhv9gt9btC7ad2rSN9z2ovVMw190a8Hxi1Fct%2Fzk174KeiVE4Aj7%2BfoytJyOs2RusR9avlQcwkvC2xAY6pgGwHE1K%2BOPzMMRhxh1p1Qn8O3TNKMPirGlvVbOnLVqR3I89aLWRe3DmkOenhmBKJyuAkuzSk4zsHvxWwRqNH7XJ8iNMkfru9El47zMkkeEurZdG7hmgxAUYAkSVfbtDy7RQmpQRdewEAjzdG9G4T68wWwx%2F%2FbKftay26h13ofesR53AlSiI7yK%2FOyb2kNbQJFC4lSKR%2FuQRp1nxzrJxJZcXexOZtRMK&X-Amz-Signature=bb46ba00dc30f39372e5cd1c09d8d3770ff40d6d0eea07a1057e79e66f9b8700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6S45BO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvDjasVparcwTdwQbCbdnKS3td%2B7T5oOvSvGS3VBXHSAiB4RDqT1lR%2FBsIcJDA%2Bd1Rtcrql03UBcg7tjfQ6wlfh1yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMPUsKeNI95ecDlffAKtwDUua1uWaa%2Fgub2F4BPMt%2BHBp7M1a0pVFHhJmj4aKtK%2FNjlH6Yq8o5fBqqdwyYY5P3SknUVR2mQ2%2Fl67I%2BRERvtWkKBED%2FyoPRolo8I1YHETrQMc4jYHPjxKIPOWZf1iG5vnnq419nvqipecHIE1MrgpzJMmnWt1N5hbQl5tT0KFO9R4MPIKK4M%2BGZio3vm74f1IWpCtgIR07B6rt4d%2Bz0jz4Qt6u7v%2BmE%2BSHwLqcTZvtCapAjCSSGSSmw9ILVNxEuq04BP%2FZWcjysb5wLZv93TappuLupa%2FYRMifsAsgEm5m1n%2FgslVBnQVvcKIkEmbk0zaL8ZvQlLehVUIf5L%2FGe3wfwnN1yzIDtmL9BY9gvr5DInCQEAxKdwc4gXiq1YZ2Huejck0wclxaei3dqFKNseewSDmcXuA9k%2F8HV8Xap1LliwVEj14aKEVjBdnDOUSgLfNjD%2FfKIXg8339ofPE0oUOGABVFvHgyT0qIBTeWBBYOdtj6kFA0Vf6ivZN%2F%2FrzTq2yZaYAOb4OnXv76BzaDNPtIfMkutOspgTG2pWXIkLn%2Fvidy0tz9nhv9gt9btC7ad2rSN9z2ovVMw190a8Hxi1Fct%2Fzk174KeiVE4Aj7%2BfoytJyOs2RusR9avlQcwkvC2xAY6pgGwHE1K%2BOPzMMRhxh1p1Qn8O3TNKMPirGlvVbOnLVqR3I89aLWRe3DmkOenhmBKJyuAkuzSk4zsHvxWwRqNH7XJ8iNMkfru9El47zMkkeEurZdG7hmgxAUYAkSVfbtDy7RQmpQRdewEAjzdG9G4T68wWwx%2F%2FbKftay26h13ofesR53AlSiI7yK%2FOyb2kNbQJFC4lSKR%2FuQRp1nxzrJxJZcXexOZtRMK&X-Amz-Signature=52503999a774de107fa39959bafd3bc2a762ba5e31a005281b57a24aef5fd8bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: test `fdir`

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
          ~~<fdir1>1 0 0</fdir1>~~
        </ode></friction></surface>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STKRN3XC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZWB74OpiaFKKN95LhxhHWjnIBbH%2B%2Ffr8s1JBUmuY68AiA6OYcqlQr7yraHokauEdhaxDdGwOiFWygzMC65TkLvaCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMlJof6gbvGSc9KAqmKtwDrf17LH6XapLjfubAw%2BfKfbZ68ZhITx2szpp7K0Wej2BLSbj0rQ8SzEM13hNHyKf8PfwuhGmiJRklkPPbUZbrl3UI2800fQgjbKzH1r0Lz8CTzEmEMFiRdnd5N19RA2jMt0feEZQiofX8NfU%2BeDc4%2BIHbgYIokAzqp%2FwJS9s6SBCnv0cGqtHw8WLCFN3AZ4g%2Fu4TKLjcVMsxYmtsAFPyiX836%2FxqCBLYpTvi%2FWB5RXsa1XQGMeOTU36wV8VuPf16lc4q89OvQWTGVPlEGm0GF828bkFW4dwXafukTDg4VHVgbPpDo4R8D8HT70EqcPhP1enAzUT5yk3aEkgHTSVYMJ2tRjjumsgOJwIBi45fy%2F2GMCtQCiT8ioLvtalRk1IH4oKlCcDcnXJ%2FXWDscdh4bwc8vHvv%2BIBrIDb9H%2F825kekXzBRhKth7XsyVftLt7b2siXHNEAv8BjacwdrQZrX13ImKKHhNPh%2FjP50Py2lcj8vl1DBDc8LafPwpHm%2BYsCgUBQknMYbP%2FdfuWoTTh6JnRTNPFiecKMa9zvTGc0ODis8ZSWwRHOF3Dv0fAK%2FHPTzj%2FcWfO3QZ5a87fox17xYtdcWOOprWwUiYSve2seaDoqXPrnfrlKQpDThTH%2Bkw5u%2B2xAY6pgH3X%2F74fi5d9KHAVOzkM1q2LI2aglY%2FG786zGMaypMn91AJRTNob%2FYZQWvO%2FUK8umqNItq0owy9k8JlTG9hdh5kvd%2F3%2B7tog8K%2F2WIN1LKk6g2JqyHvFM%2FGMcnAFsNlZbJBRw%2F3EB9oaCKwuHkvILChhA8%2FLnBmsSkh9heGdnuFyrnrRFyddSp%2BxmG5Y%2FWLovN0RzkAb67tPLgAibMHLZ10kXhZChYp&X-Amz-Signature=639713ddc7452ec50892d093da50bd056374519d77aacd85106fec8b85c3dba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6S45BO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvDjasVparcwTdwQbCbdnKS3td%2B7T5oOvSvGS3VBXHSAiB4RDqT1lR%2FBsIcJDA%2Bd1Rtcrql03UBcg7tjfQ6wlfh1yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMPUsKeNI95ecDlffAKtwDUua1uWaa%2Fgub2F4BPMt%2BHBp7M1a0pVFHhJmj4aKtK%2FNjlH6Yq8o5fBqqdwyYY5P3SknUVR2mQ2%2Fl67I%2BRERvtWkKBED%2FyoPRolo8I1YHETrQMc4jYHPjxKIPOWZf1iG5vnnq419nvqipecHIE1MrgpzJMmnWt1N5hbQl5tT0KFO9R4MPIKK4M%2BGZio3vm74f1IWpCtgIR07B6rt4d%2Bz0jz4Qt6u7v%2BmE%2BSHwLqcTZvtCapAjCSSGSSmw9ILVNxEuq04BP%2FZWcjysb5wLZv93TappuLupa%2FYRMifsAsgEm5m1n%2FgslVBnQVvcKIkEmbk0zaL8ZvQlLehVUIf5L%2FGe3wfwnN1yzIDtmL9BY9gvr5DInCQEAxKdwc4gXiq1YZ2Huejck0wclxaei3dqFKNseewSDmcXuA9k%2F8HV8Xap1LliwVEj14aKEVjBdnDOUSgLfNjD%2FfKIXg8339ofPE0oUOGABVFvHgyT0qIBTeWBBYOdtj6kFA0Vf6ivZN%2F%2FrzTq2yZaYAOb4OnXv76BzaDNPtIfMkutOspgTG2pWXIkLn%2Fvidy0tz9nhv9gt9btC7ad2rSN9z2ovVMw190a8Hxi1Fct%2Fzk174KeiVE4Aj7%2BfoytJyOs2RusR9avlQcwkvC2xAY6pgGwHE1K%2BOPzMMRhxh1p1Qn8O3TNKMPirGlvVbOnLVqR3I89aLWRe3DmkOenhmBKJyuAkuzSk4zsHvxWwRqNH7XJ8iNMkfru9El47zMkkeEurZdG7hmgxAUYAkSVfbtDy7RQmpQRdewEAjzdG9G4T68wWwx%2F%2FbKftay26h13ofesR53AlSiI7yK%2FOyb2kNbQJFC4lSKR%2FuQRp1nxzrJxJZcXexOZtRMK&X-Amz-Signature=cad6d8c82e282171fe3088705374b44622b251b0425bda2ed3fee5686a0b913c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6S45BO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvDjasVparcwTdwQbCbdnKS3td%2B7T5oOvSvGS3VBXHSAiB4RDqT1lR%2FBsIcJDA%2Bd1Rtcrql03UBcg7tjfQ6wlfh1yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMPUsKeNI95ecDlffAKtwDUua1uWaa%2Fgub2F4BPMt%2BHBp7M1a0pVFHhJmj4aKtK%2FNjlH6Yq8o5fBqqdwyYY5P3SknUVR2mQ2%2Fl67I%2BRERvtWkKBED%2FyoPRolo8I1YHETrQMc4jYHPjxKIPOWZf1iG5vnnq419nvqipecHIE1MrgpzJMmnWt1N5hbQl5tT0KFO9R4MPIKK4M%2BGZio3vm74f1IWpCtgIR07B6rt4d%2Bz0jz4Qt6u7v%2BmE%2BSHwLqcTZvtCapAjCSSGSSmw9ILVNxEuq04BP%2FZWcjysb5wLZv93TappuLupa%2FYRMifsAsgEm5m1n%2FgslVBnQVvcKIkEmbk0zaL8ZvQlLehVUIf5L%2FGe3wfwnN1yzIDtmL9BY9gvr5DInCQEAxKdwc4gXiq1YZ2Huejck0wclxaei3dqFKNseewSDmcXuA9k%2F8HV8Xap1LliwVEj14aKEVjBdnDOUSgLfNjD%2FfKIXg8339ofPE0oUOGABVFvHgyT0qIBTeWBBYOdtj6kFA0Vf6ivZN%2F%2FrzTq2yZaYAOb4OnXv76BzaDNPtIfMkutOspgTG2pWXIkLn%2Fvidy0tz9nhv9gt9btC7ad2rSN9z2ovVMw190a8Hxi1Fct%2Fzk174KeiVE4Aj7%2BfoytJyOs2RusR9avlQcwkvC2xAY6pgGwHE1K%2BOPzMMRhxh1p1Qn8O3TNKMPirGlvVbOnLVqR3I89aLWRe3DmkOenhmBKJyuAkuzSk4zsHvxWwRqNH7XJ8iNMkfru9El47zMkkeEurZdG7hmgxAUYAkSVfbtDy7RQmpQRdewEAjzdG9G4T68wWwx%2F%2FbKftay26h13ofesR53AlSiI7yK%2FOyb2kNbQJFC4lSKR%2FuQRp1nxzrJxJZcXexOZtRMK&X-Amz-Signature=52f3e5ac4678bc1753959d3b9389b56b5b7b1284a73de53ce894a3897a112eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6S45BO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvDjasVparcwTdwQbCbdnKS3td%2B7T5oOvSvGS3VBXHSAiB4RDqT1lR%2FBsIcJDA%2Bd1Rtcrql03UBcg7tjfQ6wlfh1yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMPUsKeNI95ecDlffAKtwDUua1uWaa%2Fgub2F4BPMt%2BHBp7M1a0pVFHhJmj4aKtK%2FNjlH6Yq8o5fBqqdwyYY5P3SknUVR2mQ2%2Fl67I%2BRERvtWkKBED%2FyoPRolo8I1YHETrQMc4jYHPjxKIPOWZf1iG5vnnq419nvqipecHIE1MrgpzJMmnWt1N5hbQl5tT0KFO9R4MPIKK4M%2BGZio3vm74f1IWpCtgIR07B6rt4d%2Bz0jz4Qt6u7v%2BmE%2BSHwLqcTZvtCapAjCSSGSSmw9ILVNxEuq04BP%2FZWcjysb5wLZv93TappuLupa%2FYRMifsAsgEm5m1n%2FgslVBnQVvcKIkEmbk0zaL8ZvQlLehVUIf5L%2FGe3wfwnN1yzIDtmL9BY9gvr5DInCQEAxKdwc4gXiq1YZ2Huejck0wclxaei3dqFKNseewSDmcXuA9k%2F8HV8Xap1LliwVEj14aKEVjBdnDOUSgLfNjD%2FfKIXg8339ofPE0oUOGABVFvHgyT0qIBTeWBBYOdtj6kFA0Vf6ivZN%2F%2FrzTq2yZaYAOb4OnXv76BzaDNPtIfMkutOspgTG2pWXIkLn%2Fvidy0tz9nhv9gt9btC7ad2rSN9z2ovVMw190a8Hxi1Fct%2Fzk174KeiVE4Aj7%2BfoytJyOs2RusR9avlQcwkvC2xAY6pgGwHE1K%2BOPzMMRhxh1p1Qn8O3TNKMPirGlvVbOnLVqR3I89aLWRe3DmkOenhmBKJyuAkuzSk4zsHvxWwRqNH7XJ8iNMkfru9El47zMkkeEurZdG7hmgxAUYAkSVfbtDy7RQmpQRdewEAjzdG9G4T68wWwx%2F%2FbKftay26h13ofesR53AlSiI7yK%2FOyb2kNbQJFC4lSKR%2FuQRp1nxzrJxJZcXexOZtRMK&X-Amz-Signature=427c9f2145bda53b7efc44b2079404d31c393fb4d1f02eb0f29f6bd7388201ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6S45BO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvDjasVparcwTdwQbCbdnKS3td%2B7T5oOvSvGS3VBXHSAiB4RDqT1lR%2FBsIcJDA%2Bd1Rtcrql03UBcg7tjfQ6wlfh1yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMPUsKeNI95ecDlffAKtwDUua1uWaa%2Fgub2F4BPMt%2BHBp7M1a0pVFHhJmj4aKtK%2FNjlH6Yq8o5fBqqdwyYY5P3SknUVR2mQ2%2Fl67I%2BRERvtWkKBED%2FyoPRolo8I1YHETrQMc4jYHPjxKIPOWZf1iG5vnnq419nvqipecHIE1MrgpzJMmnWt1N5hbQl5tT0KFO9R4MPIKK4M%2BGZio3vm74f1IWpCtgIR07B6rt4d%2Bz0jz4Qt6u7v%2BmE%2BSHwLqcTZvtCapAjCSSGSSmw9ILVNxEuq04BP%2FZWcjysb5wLZv93TappuLupa%2FYRMifsAsgEm5m1n%2FgslVBnQVvcKIkEmbk0zaL8ZvQlLehVUIf5L%2FGe3wfwnN1yzIDtmL9BY9gvr5DInCQEAxKdwc4gXiq1YZ2Huejck0wclxaei3dqFKNseewSDmcXuA9k%2F8HV8Xap1LliwVEj14aKEVjBdnDOUSgLfNjD%2FfKIXg8339ofPE0oUOGABVFvHgyT0qIBTeWBBYOdtj6kFA0Vf6ivZN%2F%2FrzTq2yZaYAOb4OnXv76BzaDNPtIfMkutOspgTG2pWXIkLn%2Fvidy0tz9nhv9gt9btC7ad2rSN9z2ovVMw190a8Hxi1Fct%2Fzk174KeiVE4Aj7%2BfoytJyOs2RusR9avlQcwkvC2xAY6pgGwHE1K%2BOPzMMRhxh1p1Qn8O3TNKMPirGlvVbOnLVqR3I89aLWRe3DmkOenhmBKJyuAkuzSk4zsHvxWwRqNH7XJ8iNMkfru9El47zMkkeEurZdG7hmgxAUYAkSVfbtDy7RQmpQRdewEAjzdG9G4T68wWwx%2F%2FbKftay26h13ofesR53AlSiI7yK%2FOyb2kNbQJFC4lSKR%2FuQRp1nxzrJxJZcXexOZtRMK&X-Amz-Signature=b45f41e95c8b792d6681120c442478137cb7b4832b4701cfaa6a8c9fa4023b4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6S45BO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvDjasVparcwTdwQbCbdnKS3td%2B7T5oOvSvGS3VBXHSAiB4RDqT1lR%2FBsIcJDA%2Bd1Rtcrql03UBcg7tjfQ6wlfh1yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMPUsKeNI95ecDlffAKtwDUua1uWaa%2Fgub2F4BPMt%2BHBp7M1a0pVFHhJmj4aKtK%2FNjlH6Yq8o5fBqqdwyYY5P3SknUVR2mQ2%2Fl67I%2BRERvtWkKBED%2FyoPRolo8I1YHETrQMc4jYHPjxKIPOWZf1iG5vnnq419nvqipecHIE1MrgpzJMmnWt1N5hbQl5tT0KFO9R4MPIKK4M%2BGZio3vm74f1IWpCtgIR07B6rt4d%2Bz0jz4Qt6u7v%2BmE%2BSHwLqcTZvtCapAjCSSGSSmw9ILVNxEuq04BP%2FZWcjysb5wLZv93TappuLupa%2FYRMifsAsgEm5m1n%2FgslVBnQVvcKIkEmbk0zaL8ZvQlLehVUIf5L%2FGe3wfwnN1yzIDtmL9BY9gvr5DInCQEAxKdwc4gXiq1YZ2Huejck0wclxaei3dqFKNseewSDmcXuA9k%2F8HV8Xap1LliwVEj14aKEVjBdnDOUSgLfNjD%2FfKIXg8339ofPE0oUOGABVFvHgyT0qIBTeWBBYOdtj6kFA0Vf6ivZN%2F%2FrzTq2yZaYAOb4OnXv76BzaDNPtIfMkutOspgTG2pWXIkLn%2Fvidy0tz9nhv9gt9btC7ad2rSN9z2ovVMw190a8Hxi1Fct%2Fzk174KeiVE4Aj7%2BfoytJyOs2RusR9avlQcwkvC2xAY6pgGwHE1K%2BOPzMMRhxh1p1Qn8O3TNKMPirGlvVbOnLVqR3I89aLWRe3DmkOenhmBKJyuAkuzSk4zsHvxWwRqNH7XJ8iNMkfru9El47zMkkeEurZdG7hmgxAUYAkSVfbtDy7RQmpQRdewEAjzdG9G4T68wWwx%2F%2FbKftay26h13ofesR53AlSiI7yK%2FOyb2kNbQJFC4lSKR%2FuQRp1nxzrJxJZcXexOZtRMK&X-Amz-Signature=c74cb401bea531718f7dd4db55ae3b615d715d6e8030c5967567c6e16e0bd996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6S45BO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvDjasVparcwTdwQbCbdnKS3td%2B7T5oOvSvGS3VBXHSAiB4RDqT1lR%2FBsIcJDA%2Bd1Rtcrql03UBcg7tjfQ6wlfh1yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMPUsKeNI95ecDlffAKtwDUua1uWaa%2Fgub2F4BPMt%2BHBp7M1a0pVFHhJmj4aKtK%2FNjlH6Yq8o5fBqqdwyYY5P3SknUVR2mQ2%2Fl67I%2BRERvtWkKBED%2FyoPRolo8I1YHETrQMc4jYHPjxKIPOWZf1iG5vnnq419nvqipecHIE1MrgpzJMmnWt1N5hbQl5tT0KFO9R4MPIKK4M%2BGZio3vm74f1IWpCtgIR07B6rt4d%2Bz0jz4Qt6u7v%2BmE%2BSHwLqcTZvtCapAjCSSGSSmw9ILVNxEuq04BP%2FZWcjysb5wLZv93TappuLupa%2FYRMifsAsgEm5m1n%2FgslVBnQVvcKIkEmbk0zaL8ZvQlLehVUIf5L%2FGe3wfwnN1yzIDtmL9BY9gvr5DInCQEAxKdwc4gXiq1YZ2Huejck0wclxaei3dqFKNseewSDmcXuA9k%2F8HV8Xap1LliwVEj14aKEVjBdnDOUSgLfNjD%2FfKIXg8339ofPE0oUOGABVFvHgyT0qIBTeWBBYOdtj6kFA0Vf6ivZN%2F%2FrzTq2yZaYAOb4OnXv76BzaDNPtIfMkutOspgTG2pWXIkLn%2Fvidy0tz9nhv9gt9btC7ad2rSN9z2ovVMw190a8Hxi1Fct%2Fzk174KeiVE4Aj7%2BfoytJyOs2RusR9avlQcwkvC2xAY6pgGwHE1K%2BOPzMMRhxh1p1Qn8O3TNKMPirGlvVbOnLVqR3I89aLWRe3DmkOenhmBKJyuAkuzSk4zsHvxWwRqNH7XJ8iNMkfru9El47zMkkeEurZdG7hmgxAUYAkSVfbtDy7RQmpQRdewEAjzdG9G4T68wWwx%2F%2FbKftay26h13ofesR53AlSiI7yK%2FOyb2kNbQJFC4lSKR%2FuQRp1nxzrJxJZcXexOZtRMK&X-Amz-Signature=4799e1a8a040ce62e1f890011f97241586e08a5638adc9a9c05ffa131264f487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
