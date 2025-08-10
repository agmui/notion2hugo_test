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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSGS4ZQN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcjrIRNTErbVuqygQQCPE7T0N3K%2BI34H9OOEuTaf0BDgIgYPRO80GFt%2Bygx9BgkNnFoEwp%2FWlWau16y4bPFPFKZAcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkI13A%2FnP4SMHonwyrcA0X8pKxO%2FukPKf9OSsY8%2Fef2qrNmjOdUpO2U6V4sB1G9uTcj6GPrSjUA1mhaeqUO75lioWRq1kBrbBbuASWydwzZZvaDf0unafA0Gpl1KUCFu%2Fu0sXYuxMBRdip7Xzkzbo%2F7fD96Ujve64K%2BPWyOiIz7HAS%2FlpMnUf1xcVI1bht03Pqf9xLKKl6uzdemBlQ09ruK5Y9h98DnNdWot0QFK5HtdiH7pGtu5JPlbjJCvPOAdVSihLzSlL%2BjKTnrwfIDkw%2FgrNgMbN1S49IsSW1jtLnmw4R5diHtR5otO4CZA0U0cs6BuKSQ0sKbjClSI%2BR6DF7%2FLpBAJZexpfpcTZ12bA9KwyF5dFF9clzuxxgwe37jRXRTAc%2BbaRX%2FIvR%2BsTKjAZFAQgA2XSG7cmrtO8eKqArryvF3Pd%2FGVaGHdZbLB6kuvWwnjobbZCWKMrq96B9zaNiLCMG7dMw9X0cn8mtLc7rT19DsRe856QvuuGOk6ogt6AR3Fsa6SXBLTAT%2BTYvk8PFnSm3W8i8F2JPirgL8cW9Yk1ZTEUvrcLBFXyjEdLjpIZ6dKaOpZANjLTBOWwse%2BNvlyMHhMwgWC4mP%2B99xCb5nVeolwFiM1jH4dxhOMwtDxoF2NL%2B3Ygwy%2BCDkMMCy38QGOqUBCLksUnf%2Fa%2Bn19ahjmk%2FyYH7V%2F3csGcIDax3WdwULyl758ij5RzMysjG212YNHLj1EIjI4%2BbyESNntL%2BiqA21EimSO95C6zt0lLY3bNaF8SD3uTZK9kIyYZaCK1n82ooMu%2F6j9CXVYBAEPkbu3LHlCvaK8taf18OmenQy%2FH1YBBbZzYOD5fTPjdk4CsQa6vq7nASzLWzRX9BFEiTfJTiJ7mcyxBAc&X-Amz-Signature=f4a56eeb6e4a16a2100a9086a88d40d55215d46ce74dbe3b8c0db49e5e0f8f11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSGS4ZQN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcjrIRNTErbVuqygQQCPE7T0N3K%2BI34H9OOEuTaf0BDgIgYPRO80GFt%2Bygx9BgkNnFoEwp%2FWlWau16y4bPFPFKZAcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkI13A%2FnP4SMHonwyrcA0X8pKxO%2FukPKf9OSsY8%2Fef2qrNmjOdUpO2U6V4sB1G9uTcj6GPrSjUA1mhaeqUO75lioWRq1kBrbBbuASWydwzZZvaDf0unafA0Gpl1KUCFu%2Fu0sXYuxMBRdip7Xzkzbo%2F7fD96Ujve64K%2BPWyOiIz7HAS%2FlpMnUf1xcVI1bht03Pqf9xLKKl6uzdemBlQ09ruK5Y9h98DnNdWot0QFK5HtdiH7pGtu5JPlbjJCvPOAdVSihLzSlL%2BjKTnrwfIDkw%2FgrNgMbN1S49IsSW1jtLnmw4R5diHtR5otO4CZA0U0cs6BuKSQ0sKbjClSI%2BR6DF7%2FLpBAJZexpfpcTZ12bA9KwyF5dFF9clzuxxgwe37jRXRTAc%2BbaRX%2FIvR%2BsTKjAZFAQgA2XSG7cmrtO8eKqArryvF3Pd%2FGVaGHdZbLB6kuvWwnjobbZCWKMrq96B9zaNiLCMG7dMw9X0cn8mtLc7rT19DsRe856QvuuGOk6ogt6AR3Fsa6SXBLTAT%2BTYvk8PFnSm3W8i8F2JPirgL8cW9Yk1ZTEUvrcLBFXyjEdLjpIZ6dKaOpZANjLTBOWwse%2BNvlyMHhMwgWC4mP%2B99xCb5nVeolwFiM1jH4dxhOMwtDxoF2NL%2B3Ygwy%2BCDkMMCy38QGOqUBCLksUnf%2Fa%2Bn19ahjmk%2FyYH7V%2F3csGcIDax3WdwULyl758ij5RzMysjG212YNHLj1EIjI4%2BbyESNntL%2BiqA21EimSO95C6zt0lLY3bNaF8SD3uTZK9kIyYZaCK1n82ooMu%2F6j9CXVYBAEPkbu3LHlCvaK8taf18OmenQy%2FH1YBBbZzYOD5fTPjdk4CsQa6vq7nASzLWzRX9BFEiTfJTiJ7mcyxBAc&X-Amz-Signature=1d4fb41182d3f581fedc955f66e5f13dd33631f32b77b901a38e10e302b14c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSGS4ZQN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcjrIRNTErbVuqygQQCPE7T0N3K%2BI34H9OOEuTaf0BDgIgYPRO80GFt%2Bygx9BgkNnFoEwp%2FWlWau16y4bPFPFKZAcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkI13A%2FnP4SMHonwyrcA0X8pKxO%2FukPKf9OSsY8%2Fef2qrNmjOdUpO2U6V4sB1G9uTcj6GPrSjUA1mhaeqUO75lioWRq1kBrbBbuASWydwzZZvaDf0unafA0Gpl1KUCFu%2Fu0sXYuxMBRdip7Xzkzbo%2F7fD96Ujve64K%2BPWyOiIz7HAS%2FlpMnUf1xcVI1bht03Pqf9xLKKl6uzdemBlQ09ruK5Y9h98DnNdWot0QFK5HtdiH7pGtu5JPlbjJCvPOAdVSihLzSlL%2BjKTnrwfIDkw%2FgrNgMbN1S49IsSW1jtLnmw4R5diHtR5otO4CZA0U0cs6BuKSQ0sKbjClSI%2BR6DF7%2FLpBAJZexpfpcTZ12bA9KwyF5dFF9clzuxxgwe37jRXRTAc%2BbaRX%2FIvR%2BsTKjAZFAQgA2XSG7cmrtO8eKqArryvF3Pd%2FGVaGHdZbLB6kuvWwnjobbZCWKMrq96B9zaNiLCMG7dMw9X0cn8mtLc7rT19DsRe856QvuuGOk6ogt6AR3Fsa6SXBLTAT%2BTYvk8PFnSm3W8i8F2JPirgL8cW9Yk1ZTEUvrcLBFXyjEdLjpIZ6dKaOpZANjLTBOWwse%2BNvlyMHhMwgWC4mP%2B99xCb5nVeolwFiM1jH4dxhOMwtDxoF2NL%2B3Ygwy%2BCDkMMCy38QGOqUBCLksUnf%2Fa%2Bn19ahjmk%2FyYH7V%2F3csGcIDax3WdwULyl758ij5RzMysjG212YNHLj1EIjI4%2BbyESNntL%2BiqA21EimSO95C6zt0lLY3bNaF8SD3uTZK9kIyYZaCK1n82ooMu%2F6j9CXVYBAEPkbu3LHlCvaK8taf18OmenQy%2FH1YBBbZzYOD5fTPjdk4CsQa6vq7nASzLWzRX9BFEiTfJTiJ7mcyxBAc&X-Amz-Signature=bcba78bcabe08f9dfebd3eea1caa1daa4cac32a3b0d64bd8754cf6afc29d7350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSGS4ZQN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcjrIRNTErbVuqygQQCPE7T0N3K%2BI34H9OOEuTaf0BDgIgYPRO80GFt%2Bygx9BgkNnFoEwp%2FWlWau16y4bPFPFKZAcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkI13A%2FnP4SMHonwyrcA0X8pKxO%2FukPKf9OSsY8%2Fef2qrNmjOdUpO2U6V4sB1G9uTcj6GPrSjUA1mhaeqUO75lioWRq1kBrbBbuASWydwzZZvaDf0unafA0Gpl1KUCFu%2Fu0sXYuxMBRdip7Xzkzbo%2F7fD96Ujve64K%2BPWyOiIz7HAS%2FlpMnUf1xcVI1bht03Pqf9xLKKl6uzdemBlQ09ruK5Y9h98DnNdWot0QFK5HtdiH7pGtu5JPlbjJCvPOAdVSihLzSlL%2BjKTnrwfIDkw%2FgrNgMbN1S49IsSW1jtLnmw4R5diHtR5otO4CZA0U0cs6BuKSQ0sKbjClSI%2BR6DF7%2FLpBAJZexpfpcTZ12bA9KwyF5dFF9clzuxxgwe37jRXRTAc%2BbaRX%2FIvR%2BsTKjAZFAQgA2XSG7cmrtO8eKqArryvF3Pd%2FGVaGHdZbLB6kuvWwnjobbZCWKMrq96B9zaNiLCMG7dMw9X0cn8mtLc7rT19DsRe856QvuuGOk6ogt6AR3Fsa6SXBLTAT%2BTYvk8PFnSm3W8i8F2JPirgL8cW9Yk1ZTEUvrcLBFXyjEdLjpIZ6dKaOpZANjLTBOWwse%2BNvlyMHhMwgWC4mP%2B99xCb5nVeolwFiM1jH4dxhOMwtDxoF2NL%2B3Ygwy%2BCDkMMCy38QGOqUBCLksUnf%2Fa%2Bn19ahjmk%2FyYH7V%2F3csGcIDax3WdwULyl758ij5RzMysjG212YNHLj1EIjI4%2BbyESNntL%2BiqA21EimSO95C6zt0lLY3bNaF8SD3uTZK9kIyYZaCK1n82ooMu%2F6j9CXVYBAEPkbu3LHlCvaK8taf18OmenQy%2FH1YBBbZzYOD5fTPjdk4CsQa6vq7nASzLWzRX9BFEiTfJTiJ7mcyxBAc&X-Amz-Signature=fc98846da9bd4dec990644b3a8e9d6bb5d6e22dece31770c267de47c4e7f824c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSMPB4OV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2S8P9OY0GyWrdMlDV1dUpjXDrpz0YpaZuF5DmbuUU7AiEA37SIJMySS4EfOuPWR2aEGG0xiRQ8BYE5FsAd%2FnW6qUYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmv3gf7uICHJLuMXircA%2FXyF7ibxLsq%2BVgVKRvo3gs5m%2F3WCFiyNTbciXXNVXX4oxnYtm%2FcdIX0ooGykXUCVQ0FuFcrtgzMc0UctomsYPugAC4YyRvnzJgtN1WPalQx1fFCbqtYgz3MAO8atIOfYZVftEbssojwSslTtjvw8wgGZRwmjPVrfirSX6DP2nknTjX2iBcWFUNxA6mOuOgurlhqG5MMhX6CUltwC%2BMHTtZu1qT0jO0Tzw3sPle%2BMSizSg8OxqyXSvKoV%2FVdBudq518UIiV6cgUlIe0SbpSx2OmFmKh8PIv5al7zbBQ1SfnJDv%2FOFw6iHYHG%2BijupbgX6Wd8IYerv2EZND0sza%2FGaLoi200PGOP0aRaEacodEV2PadpG37N2QcpScNKNOHZ3FETvzYrIfiSUVoGuzJVuQPR5VYiUtvYO%2BYXvP9ZMo1ZLzxxBjNnDAXsJHXBLCjmJeUmN%2F%2Blk38kjXCWHMHInchnBpnZDpz5HHGmoZ366hBYQy8Oqgepo8SVmaG2mQw9NdmGVSXTLRAo7WlxLilql9IAsMtvxarI3SGGENf9OmfcE3NcEnDGptZT64cpDlxmftHfJ4LMnia1O9xS%2BiB%2FHsQnUt%2BBQJYHd%2BvIftICFeJFhD8bLrkFvCApe1CRTMP2y38QGOqUBQ2aHPno6j3c83bH6dMZKf9%2BD%2FbXRfpE9S35Z%2FS8qsZNl%2BQftyHtwyM8jiNZ6CassGwxsQYAPhUf4GgafQ%2BgZABnsfIWyZdKabTixh6oRXwNVGYXnvOWHqbK%2FIMFGAnG1nl64O2Ulvq8rZbJ8GbFrotaqhlqknYf8wqCV4K99cAQpGNrh5QusG7%2FAjWsLLuVLoSbo%2BD8I4Hm5y%2Ftf5p7AvuV3WROn&X-Amz-Signature=8668152712387f69439f89fdb457be84277fdf943ebb0b73152610193f32ea85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSGS4ZQN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcjrIRNTErbVuqygQQCPE7T0N3K%2BI34H9OOEuTaf0BDgIgYPRO80GFt%2Bygx9BgkNnFoEwp%2FWlWau16y4bPFPFKZAcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkI13A%2FnP4SMHonwyrcA0X8pKxO%2FukPKf9OSsY8%2Fef2qrNmjOdUpO2U6V4sB1G9uTcj6GPrSjUA1mhaeqUO75lioWRq1kBrbBbuASWydwzZZvaDf0unafA0Gpl1KUCFu%2Fu0sXYuxMBRdip7Xzkzbo%2F7fD96Ujve64K%2BPWyOiIz7HAS%2FlpMnUf1xcVI1bht03Pqf9xLKKl6uzdemBlQ09ruK5Y9h98DnNdWot0QFK5HtdiH7pGtu5JPlbjJCvPOAdVSihLzSlL%2BjKTnrwfIDkw%2FgrNgMbN1S49IsSW1jtLnmw4R5diHtR5otO4CZA0U0cs6BuKSQ0sKbjClSI%2BR6DF7%2FLpBAJZexpfpcTZ12bA9KwyF5dFF9clzuxxgwe37jRXRTAc%2BbaRX%2FIvR%2BsTKjAZFAQgA2XSG7cmrtO8eKqArryvF3Pd%2FGVaGHdZbLB6kuvWwnjobbZCWKMrq96B9zaNiLCMG7dMw9X0cn8mtLc7rT19DsRe856QvuuGOk6ogt6AR3Fsa6SXBLTAT%2BTYvk8PFnSm3W8i8F2JPirgL8cW9Yk1ZTEUvrcLBFXyjEdLjpIZ6dKaOpZANjLTBOWwse%2BNvlyMHhMwgWC4mP%2B99xCb5nVeolwFiM1jH4dxhOMwtDxoF2NL%2B3Ygwy%2BCDkMMCy38QGOqUBCLksUnf%2Fa%2Bn19ahjmk%2FyYH7V%2F3csGcIDax3WdwULyl758ij5RzMysjG212YNHLj1EIjI4%2BbyESNntL%2BiqA21EimSO95C6zt0lLY3bNaF8SD3uTZK9kIyYZaCK1n82ooMu%2F6j9CXVYBAEPkbu3LHlCvaK8taf18OmenQy%2FH1YBBbZzYOD5fTPjdk4CsQa6vq7nASzLWzRX9BFEiTfJTiJ7mcyxBAc&X-Amz-Signature=8c1dfbd358fe7a310d189c184fa266c6369d5882f7c898d317b22883de42c71b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSGS4ZQN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcjrIRNTErbVuqygQQCPE7T0N3K%2BI34H9OOEuTaf0BDgIgYPRO80GFt%2Bygx9BgkNnFoEwp%2FWlWau16y4bPFPFKZAcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkI13A%2FnP4SMHonwyrcA0X8pKxO%2FukPKf9OSsY8%2Fef2qrNmjOdUpO2U6V4sB1G9uTcj6GPrSjUA1mhaeqUO75lioWRq1kBrbBbuASWydwzZZvaDf0unafA0Gpl1KUCFu%2Fu0sXYuxMBRdip7Xzkzbo%2F7fD96Ujve64K%2BPWyOiIz7HAS%2FlpMnUf1xcVI1bht03Pqf9xLKKl6uzdemBlQ09ruK5Y9h98DnNdWot0QFK5HtdiH7pGtu5JPlbjJCvPOAdVSihLzSlL%2BjKTnrwfIDkw%2FgrNgMbN1S49IsSW1jtLnmw4R5diHtR5otO4CZA0U0cs6BuKSQ0sKbjClSI%2BR6DF7%2FLpBAJZexpfpcTZ12bA9KwyF5dFF9clzuxxgwe37jRXRTAc%2BbaRX%2FIvR%2BsTKjAZFAQgA2XSG7cmrtO8eKqArryvF3Pd%2FGVaGHdZbLB6kuvWwnjobbZCWKMrq96B9zaNiLCMG7dMw9X0cn8mtLc7rT19DsRe856QvuuGOk6ogt6AR3Fsa6SXBLTAT%2BTYvk8PFnSm3W8i8F2JPirgL8cW9Yk1ZTEUvrcLBFXyjEdLjpIZ6dKaOpZANjLTBOWwse%2BNvlyMHhMwgWC4mP%2B99xCb5nVeolwFiM1jH4dxhOMwtDxoF2NL%2B3Ygwy%2BCDkMMCy38QGOqUBCLksUnf%2Fa%2Bn19ahjmk%2FyYH7V%2F3csGcIDax3WdwULyl758ij5RzMysjG212YNHLj1EIjI4%2BbyESNntL%2BiqA21EimSO95C6zt0lLY3bNaF8SD3uTZK9kIyYZaCK1n82ooMu%2F6j9CXVYBAEPkbu3LHlCvaK8taf18OmenQy%2FH1YBBbZzYOD5fTPjdk4CsQa6vq7nASzLWzRX9BFEiTfJTiJ7mcyxBAc&X-Amz-Signature=c0cbb8f9de5ceb5d6fa233ce54e831667a6a843435b1baebb088f5f7a28cde4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSGS4ZQN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcjrIRNTErbVuqygQQCPE7T0N3K%2BI34H9OOEuTaf0BDgIgYPRO80GFt%2Bygx9BgkNnFoEwp%2FWlWau16y4bPFPFKZAcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkI13A%2FnP4SMHonwyrcA0X8pKxO%2FukPKf9OSsY8%2Fef2qrNmjOdUpO2U6V4sB1G9uTcj6GPrSjUA1mhaeqUO75lioWRq1kBrbBbuASWydwzZZvaDf0unafA0Gpl1KUCFu%2Fu0sXYuxMBRdip7Xzkzbo%2F7fD96Ujve64K%2BPWyOiIz7HAS%2FlpMnUf1xcVI1bht03Pqf9xLKKl6uzdemBlQ09ruK5Y9h98DnNdWot0QFK5HtdiH7pGtu5JPlbjJCvPOAdVSihLzSlL%2BjKTnrwfIDkw%2FgrNgMbN1S49IsSW1jtLnmw4R5diHtR5otO4CZA0U0cs6BuKSQ0sKbjClSI%2BR6DF7%2FLpBAJZexpfpcTZ12bA9KwyF5dFF9clzuxxgwe37jRXRTAc%2BbaRX%2FIvR%2BsTKjAZFAQgA2XSG7cmrtO8eKqArryvF3Pd%2FGVaGHdZbLB6kuvWwnjobbZCWKMrq96B9zaNiLCMG7dMw9X0cn8mtLc7rT19DsRe856QvuuGOk6ogt6AR3Fsa6SXBLTAT%2BTYvk8PFnSm3W8i8F2JPirgL8cW9Yk1ZTEUvrcLBFXyjEdLjpIZ6dKaOpZANjLTBOWwse%2BNvlyMHhMwgWC4mP%2B99xCb5nVeolwFiM1jH4dxhOMwtDxoF2NL%2B3Ygwy%2BCDkMMCy38QGOqUBCLksUnf%2Fa%2Bn19ahjmk%2FyYH7V%2F3csGcIDax3WdwULyl758ij5RzMysjG212YNHLj1EIjI4%2BbyESNntL%2BiqA21EimSO95C6zt0lLY3bNaF8SD3uTZK9kIyYZaCK1n82ooMu%2F6j9CXVYBAEPkbu3LHlCvaK8taf18OmenQy%2FH1YBBbZzYOD5fTPjdk4CsQa6vq7nASzLWzRX9BFEiTfJTiJ7mcyxBAc&X-Amz-Signature=93568861c9db581062ec478abf8b0fca55200c725bfd5f1d5576fac244ba62ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSGS4ZQN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcjrIRNTErbVuqygQQCPE7T0N3K%2BI34H9OOEuTaf0BDgIgYPRO80GFt%2Bygx9BgkNnFoEwp%2FWlWau16y4bPFPFKZAcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkI13A%2FnP4SMHonwyrcA0X8pKxO%2FukPKf9OSsY8%2Fef2qrNmjOdUpO2U6V4sB1G9uTcj6GPrSjUA1mhaeqUO75lioWRq1kBrbBbuASWydwzZZvaDf0unafA0Gpl1KUCFu%2Fu0sXYuxMBRdip7Xzkzbo%2F7fD96Ujve64K%2BPWyOiIz7HAS%2FlpMnUf1xcVI1bht03Pqf9xLKKl6uzdemBlQ09ruK5Y9h98DnNdWot0QFK5HtdiH7pGtu5JPlbjJCvPOAdVSihLzSlL%2BjKTnrwfIDkw%2FgrNgMbN1S49IsSW1jtLnmw4R5diHtR5otO4CZA0U0cs6BuKSQ0sKbjClSI%2BR6DF7%2FLpBAJZexpfpcTZ12bA9KwyF5dFF9clzuxxgwe37jRXRTAc%2BbaRX%2FIvR%2BsTKjAZFAQgA2XSG7cmrtO8eKqArryvF3Pd%2FGVaGHdZbLB6kuvWwnjobbZCWKMrq96B9zaNiLCMG7dMw9X0cn8mtLc7rT19DsRe856QvuuGOk6ogt6AR3Fsa6SXBLTAT%2BTYvk8PFnSm3W8i8F2JPirgL8cW9Yk1ZTEUvrcLBFXyjEdLjpIZ6dKaOpZANjLTBOWwse%2BNvlyMHhMwgWC4mP%2B99xCb5nVeolwFiM1jH4dxhOMwtDxoF2NL%2B3Ygwy%2BCDkMMCy38QGOqUBCLksUnf%2Fa%2Bn19ahjmk%2FyYH7V%2F3csGcIDax3WdwULyl758ij5RzMysjG212YNHLj1EIjI4%2BbyESNntL%2BiqA21EimSO95C6zt0lLY3bNaF8SD3uTZK9kIyYZaCK1n82ooMu%2F6j9CXVYBAEPkbu3LHlCvaK8taf18OmenQy%2FH1YBBbZzYOD5fTPjdk4CsQa6vq7nASzLWzRX9BFEiTfJTiJ7mcyxBAc&X-Amz-Signature=4d2b61cd6abb76d1f4ede65f3ee859a4c700a3b0c1c56d7f5054124d51307804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSGS4ZQN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcjrIRNTErbVuqygQQCPE7T0N3K%2BI34H9OOEuTaf0BDgIgYPRO80GFt%2Bygx9BgkNnFoEwp%2FWlWau16y4bPFPFKZAcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkI13A%2FnP4SMHonwyrcA0X8pKxO%2FukPKf9OSsY8%2Fef2qrNmjOdUpO2U6V4sB1G9uTcj6GPrSjUA1mhaeqUO75lioWRq1kBrbBbuASWydwzZZvaDf0unafA0Gpl1KUCFu%2Fu0sXYuxMBRdip7Xzkzbo%2F7fD96Ujve64K%2BPWyOiIz7HAS%2FlpMnUf1xcVI1bht03Pqf9xLKKl6uzdemBlQ09ruK5Y9h98DnNdWot0QFK5HtdiH7pGtu5JPlbjJCvPOAdVSihLzSlL%2BjKTnrwfIDkw%2FgrNgMbN1S49IsSW1jtLnmw4R5diHtR5otO4CZA0U0cs6BuKSQ0sKbjClSI%2BR6DF7%2FLpBAJZexpfpcTZ12bA9KwyF5dFF9clzuxxgwe37jRXRTAc%2BbaRX%2FIvR%2BsTKjAZFAQgA2XSG7cmrtO8eKqArryvF3Pd%2FGVaGHdZbLB6kuvWwnjobbZCWKMrq96B9zaNiLCMG7dMw9X0cn8mtLc7rT19DsRe856QvuuGOk6ogt6AR3Fsa6SXBLTAT%2BTYvk8PFnSm3W8i8F2JPirgL8cW9Yk1ZTEUvrcLBFXyjEdLjpIZ6dKaOpZANjLTBOWwse%2BNvlyMHhMwgWC4mP%2B99xCb5nVeolwFiM1jH4dxhOMwtDxoF2NL%2B3Ygwy%2BCDkMMCy38QGOqUBCLksUnf%2Fa%2Bn19ahjmk%2FyYH7V%2F3csGcIDax3WdwULyl758ij5RzMysjG212YNHLj1EIjI4%2BbyESNntL%2BiqA21EimSO95C6zt0lLY3bNaF8SD3uTZK9kIyYZaCK1n82ooMu%2F6j9CXVYBAEPkbu3LHlCvaK8taf18OmenQy%2FH1YBBbZzYOD5fTPjdk4CsQa6vq7nASzLWzRX9BFEiTfJTiJ7mcyxBAc&X-Amz-Signature=efc6a3ed64d9fe628b7591dc6900346efab9fb1f004c0ec253d185a0e202c439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSGS4ZQN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcjrIRNTErbVuqygQQCPE7T0N3K%2BI34H9OOEuTaf0BDgIgYPRO80GFt%2Bygx9BgkNnFoEwp%2FWlWau16y4bPFPFKZAcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkI13A%2FnP4SMHonwyrcA0X8pKxO%2FukPKf9OSsY8%2Fef2qrNmjOdUpO2U6V4sB1G9uTcj6GPrSjUA1mhaeqUO75lioWRq1kBrbBbuASWydwzZZvaDf0unafA0Gpl1KUCFu%2Fu0sXYuxMBRdip7Xzkzbo%2F7fD96Ujve64K%2BPWyOiIz7HAS%2FlpMnUf1xcVI1bht03Pqf9xLKKl6uzdemBlQ09ruK5Y9h98DnNdWot0QFK5HtdiH7pGtu5JPlbjJCvPOAdVSihLzSlL%2BjKTnrwfIDkw%2FgrNgMbN1S49IsSW1jtLnmw4R5diHtR5otO4CZA0U0cs6BuKSQ0sKbjClSI%2BR6DF7%2FLpBAJZexpfpcTZ12bA9KwyF5dFF9clzuxxgwe37jRXRTAc%2BbaRX%2FIvR%2BsTKjAZFAQgA2XSG7cmrtO8eKqArryvF3Pd%2FGVaGHdZbLB6kuvWwnjobbZCWKMrq96B9zaNiLCMG7dMw9X0cn8mtLc7rT19DsRe856QvuuGOk6ogt6AR3Fsa6SXBLTAT%2BTYvk8PFnSm3W8i8F2JPirgL8cW9Yk1ZTEUvrcLBFXyjEdLjpIZ6dKaOpZANjLTBOWwse%2BNvlyMHhMwgWC4mP%2B99xCb5nVeolwFiM1jH4dxhOMwtDxoF2NL%2B3Ygwy%2BCDkMMCy38QGOqUBCLksUnf%2Fa%2Bn19ahjmk%2FyYH7V%2F3csGcIDax3WdwULyl758ij5RzMysjG212YNHLj1EIjI4%2BbyESNntL%2BiqA21EimSO95C6zt0lLY3bNaF8SD3uTZK9kIyYZaCK1n82ooMu%2F6j9CXVYBAEPkbu3LHlCvaK8taf18OmenQy%2FH1YBBbZzYOD5fTPjdk4CsQa6vq7nASzLWzRX9BFEiTfJTiJ7mcyxBAc&X-Amz-Signature=95218192274fef2755898bf32f649e03592393208ca07323f2dcd6ead1cc9f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
