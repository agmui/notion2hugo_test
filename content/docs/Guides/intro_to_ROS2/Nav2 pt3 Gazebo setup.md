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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTRF7MXO%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEHaMNQRJtXbI0WPU4FxsoChsdGozMLn6K0ImH1Kmi2yAiEA%2Bt9PkWgp54YVgOBcgafiZRG81xfVw0Vj2TRV79wR9OAqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQcJN2x8xm7ifhF2SrcA6n9nV6z68jh15nXCpzRjjVGeF60lgkKYoU5kzdLnVJruOSloW7lAnclRaVGQoAKPeJPh6u7DB39D%2B4x9vywQv5uN2JqsDHUeDPXYCVI5ACS2Wx7XYWKFIdVvL3qpE4%2FtVLsm2z4IL%2FjWgAkbMBkxe48sSc9RWwiie%2BcFkkS2bQBIAQ7pzIJC1fUuBegduuHqgY5uKYIj46%2Bdo3HUbMBepn7xttW1Tq%2B%2BpdTlzEDR3ZHdFIeeditJKVWW1noiVVVqMoVV%2FtFXN5jLmjVpOXESFZ8SnF8nhX7x7kYZV7VmH1SLbNRlvzi17O8SNElE8K71OBHCHc%2BlM1F%2FYL5QZ1fcCPKJmQcv9pJ9Uapk0WfNx9RUcqiCy6CB6ONz5S7thwbbua%2F32paF6Lk%2FaOCDvJlOOt5B0%2FcoduM9TAOmEZS1MrMfcMvBdEO6eRxVqbf6laMJOImm2NCp3AWmYvVC7eUzrDB6oOcLw7Wi6kc1j9uaOgIHJ4CVMQM%2BGIUe%2FI3HeI0DV1PKVwnWTO3Bk7eJdISm5MOnn2YHw37gdHYnzaetdhxncAmGBrQIGqKFBV2DDAVCVTK4qZivUimQ3d6I32lCWGlxfwWT00UiqEmHnZCqiDWvbKWbceRCgJtFSq9MO7OtMwGOqUBIl2sTj78zzuPNMg2yRpAfUy1DHMrr7zAwvSRH%2FFuS1QsCYaWNyAoyQdNEDBEst%2FJc%2FPWolG3934BxXK5FTWBczi96JFWkASj62IgwEuh28BDhMOuBR5KasKRu2p1eHiVTrQEbukvE2TOG3llhofdgkzHpX4nJuKPDtE9148uOTN9KIS23OLDO6njrpWmil1zsQtMQZhA9hbWvyI8fvvAXZTQ%2BBfS&X-Amz-Signature=ccc5859b74f5a7336242e16db2981a59875a574ad3f65ab2122682ed54b9d2fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTRF7MXO%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEHaMNQRJtXbI0WPU4FxsoChsdGozMLn6K0ImH1Kmi2yAiEA%2Bt9PkWgp54YVgOBcgafiZRG81xfVw0Vj2TRV79wR9OAqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQcJN2x8xm7ifhF2SrcA6n9nV6z68jh15nXCpzRjjVGeF60lgkKYoU5kzdLnVJruOSloW7lAnclRaVGQoAKPeJPh6u7DB39D%2B4x9vywQv5uN2JqsDHUeDPXYCVI5ACS2Wx7XYWKFIdVvL3qpE4%2FtVLsm2z4IL%2FjWgAkbMBkxe48sSc9RWwiie%2BcFkkS2bQBIAQ7pzIJC1fUuBegduuHqgY5uKYIj46%2Bdo3HUbMBepn7xttW1Tq%2B%2BpdTlzEDR3ZHdFIeeditJKVWW1noiVVVqMoVV%2FtFXN5jLmjVpOXESFZ8SnF8nhX7x7kYZV7VmH1SLbNRlvzi17O8SNElE8K71OBHCHc%2BlM1F%2FYL5QZ1fcCPKJmQcv9pJ9Uapk0WfNx9RUcqiCy6CB6ONz5S7thwbbua%2F32paF6Lk%2FaOCDvJlOOt5B0%2FcoduM9TAOmEZS1MrMfcMvBdEO6eRxVqbf6laMJOImm2NCp3AWmYvVC7eUzrDB6oOcLw7Wi6kc1j9uaOgIHJ4CVMQM%2BGIUe%2FI3HeI0DV1PKVwnWTO3Bk7eJdISm5MOnn2YHw37gdHYnzaetdhxncAmGBrQIGqKFBV2DDAVCVTK4qZivUimQ3d6I32lCWGlxfwWT00UiqEmHnZCqiDWvbKWbceRCgJtFSq9MO7OtMwGOqUBIl2sTj78zzuPNMg2yRpAfUy1DHMrr7zAwvSRH%2FFuS1QsCYaWNyAoyQdNEDBEst%2FJc%2FPWolG3934BxXK5FTWBczi96JFWkASj62IgwEuh28BDhMOuBR5KasKRu2p1eHiVTrQEbukvE2TOG3llhofdgkzHpX4nJuKPDtE9148uOTN9KIS23OLDO6njrpWmil1zsQtMQZhA9hbWvyI8fvvAXZTQ%2BBfS&X-Amz-Signature=697c00e2bfed749dec8ef2e3b1729fb52a0c589f5b48ba89708d76653709de16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTRF7MXO%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEHaMNQRJtXbI0WPU4FxsoChsdGozMLn6K0ImH1Kmi2yAiEA%2Bt9PkWgp54YVgOBcgafiZRG81xfVw0Vj2TRV79wR9OAqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQcJN2x8xm7ifhF2SrcA6n9nV6z68jh15nXCpzRjjVGeF60lgkKYoU5kzdLnVJruOSloW7lAnclRaVGQoAKPeJPh6u7DB39D%2B4x9vywQv5uN2JqsDHUeDPXYCVI5ACS2Wx7XYWKFIdVvL3qpE4%2FtVLsm2z4IL%2FjWgAkbMBkxe48sSc9RWwiie%2BcFkkS2bQBIAQ7pzIJC1fUuBegduuHqgY5uKYIj46%2Bdo3HUbMBepn7xttW1Tq%2B%2BpdTlzEDR3ZHdFIeeditJKVWW1noiVVVqMoVV%2FtFXN5jLmjVpOXESFZ8SnF8nhX7x7kYZV7VmH1SLbNRlvzi17O8SNElE8K71OBHCHc%2BlM1F%2FYL5QZ1fcCPKJmQcv9pJ9Uapk0WfNx9RUcqiCy6CB6ONz5S7thwbbua%2F32paF6Lk%2FaOCDvJlOOt5B0%2FcoduM9TAOmEZS1MrMfcMvBdEO6eRxVqbf6laMJOImm2NCp3AWmYvVC7eUzrDB6oOcLw7Wi6kc1j9uaOgIHJ4CVMQM%2BGIUe%2FI3HeI0DV1PKVwnWTO3Bk7eJdISm5MOnn2YHw37gdHYnzaetdhxncAmGBrQIGqKFBV2DDAVCVTK4qZivUimQ3d6I32lCWGlxfwWT00UiqEmHnZCqiDWvbKWbceRCgJtFSq9MO7OtMwGOqUBIl2sTj78zzuPNMg2yRpAfUy1DHMrr7zAwvSRH%2FFuS1QsCYaWNyAoyQdNEDBEst%2FJc%2FPWolG3934BxXK5FTWBczi96JFWkASj62IgwEuh28BDhMOuBR5KasKRu2p1eHiVTrQEbukvE2TOG3llhofdgkzHpX4nJuKPDtE9148uOTN9KIS23OLDO6njrpWmil1zsQtMQZhA9hbWvyI8fvvAXZTQ%2BBfS&X-Amz-Signature=3c4bcf81a5ef1b0d384b8e514a2b38cbd9fbdc8141226e9f659d4904a984980d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTRF7MXO%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEHaMNQRJtXbI0WPU4FxsoChsdGozMLn6K0ImH1Kmi2yAiEA%2Bt9PkWgp54YVgOBcgafiZRG81xfVw0Vj2TRV79wR9OAqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQcJN2x8xm7ifhF2SrcA6n9nV6z68jh15nXCpzRjjVGeF60lgkKYoU5kzdLnVJruOSloW7lAnclRaVGQoAKPeJPh6u7DB39D%2B4x9vywQv5uN2JqsDHUeDPXYCVI5ACS2Wx7XYWKFIdVvL3qpE4%2FtVLsm2z4IL%2FjWgAkbMBkxe48sSc9RWwiie%2BcFkkS2bQBIAQ7pzIJC1fUuBegduuHqgY5uKYIj46%2Bdo3HUbMBepn7xttW1Tq%2B%2BpdTlzEDR3ZHdFIeeditJKVWW1noiVVVqMoVV%2FtFXN5jLmjVpOXESFZ8SnF8nhX7x7kYZV7VmH1SLbNRlvzi17O8SNElE8K71OBHCHc%2BlM1F%2FYL5QZ1fcCPKJmQcv9pJ9Uapk0WfNx9RUcqiCy6CB6ONz5S7thwbbua%2F32paF6Lk%2FaOCDvJlOOt5B0%2FcoduM9TAOmEZS1MrMfcMvBdEO6eRxVqbf6laMJOImm2NCp3AWmYvVC7eUzrDB6oOcLw7Wi6kc1j9uaOgIHJ4CVMQM%2BGIUe%2FI3HeI0DV1PKVwnWTO3Bk7eJdISm5MOnn2YHw37gdHYnzaetdhxncAmGBrQIGqKFBV2DDAVCVTK4qZivUimQ3d6I32lCWGlxfwWT00UiqEmHnZCqiDWvbKWbceRCgJtFSq9MO7OtMwGOqUBIl2sTj78zzuPNMg2yRpAfUy1DHMrr7zAwvSRH%2FFuS1QsCYaWNyAoyQdNEDBEst%2FJc%2FPWolG3934BxXK5FTWBczi96JFWkASj62IgwEuh28BDhMOuBR5KasKRu2p1eHiVTrQEbukvE2TOG3llhofdgkzHpX4nJuKPDtE9148uOTN9KIS23OLDO6njrpWmil1zsQtMQZhA9hbWvyI8fvvAXZTQ%2BBfS&X-Amz-Signature=4942f707868e2e8a86935df00769f67d16a5118cc9088eb36f7d17308fbcd34c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOGH3W2V%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAjgOR9X8sV%2BjVL5LN2xiP0kWrWk5mQunenFNzmdDmt8AiEAklWUN%2FV%2Fep%2FIfKpS%2F%2Bu%2FdVb1E1iiO5GKqkLOVjQS%2Bo8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4xN6Wb6eblOFEwMyrcA5n4EH2%2BZqwsjThspjqRPPm2%2FA3vTALHZutjlt31UKT4gjk5TSMssIR7Gmopuu9RrDjfmEJSNp3YOnDnq8d7MpclTVB%2FC1lX2ECfqBB4btGWvCNwYYV8fS3L2caB9y9IwdjO5Z7r8cS5Pszg4sp1w5swEo%2B8cGKT53QycxrDz%2Fc9yom4ci%2F0gNOSVbepy80kDi04KSvUZswedUwDovxDPCtKG02cogFJD4qEUi%2Be1rQiwjSLBn8v9%2FteXCDXjQZ97VjrVxppunR3j0uJnUTh1QWJOrPLAtoYKCB4RrRsRXhgbdDvkfpzJlhTpIuga9gXPqKZPGf35O6BXWuLKDWQi3t44FxdG%2BIugQQce195E2zL6yQt0wVzSPLpXi8SD3y6jtpIc88uLoN56yE5MAcl3%2F0g3wX9KKEIdJZprF%2BSGujogAkqflRnzgdWNq78n91Bsn7XIRpkVuk6WvkPOmQnqpmUmI690oAb5B6yfp5Gu6H2v3nn%2F9mah86H7xSSUyoqGJ4gviYuCU7stNCTlhrzXMHq0jqQKmJMZo6aWFUtkH6rV0LbbkD%2FIavb7XWnM5ec4grATdpGQJqL510qbHFxfyjl%2FfsxhttbAiAHm5xtUmq1i8fpz%2B%2B4DWNtfsBCMNrNtMwGOqUBKdpiPYXobVqsjK3KLZaySnYy4TUtNoJD9Y92IGeZpP2gEUI5EuM%2BSavd%2BBLHNRG%2FmqMVu%2F9Fj5A7flAOEiT1WMoYSXbjK09gZQCVQm67SWcnB%2BdvJ3XXfaopLNQpqgPOWkAftJSqJq9bYgNzD6AAAZtznDSGhNVOZojbMp3ecDhyxVY4OdxpTqVq5n3KXuAdF881nreOMgd78q85YCwboeVgtMy9&X-Amz-Signature=cfbd152a0ef0d0e79ce8f341fbd93cb7d3dedd1ff8343e91024a3a62770f29c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTRF7MXO%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEHaMNQRJtXbI0WPU4FxsoChsdGozMLn6K0ImH1Kmi2yAiEA%2Bt9PkWgp54YVgOBcgafiZRG81xfVw0Vj2TRV79wR9OAqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQcJN2x8xm7ifhF2SrcA6n9nV6z68jh15nXCpzRjjVGeF60lgkKYoU5kzdLnVJruOSloW7lAnclRaVGQoAKPeJPh6u7DB39D%2B4x9vywQv5uN2JqsDHUeDPXYCVI5ACS2Wx7XYWKFIdVvL3qpE4%2FtVLsm2z4IL%2FjWgAkbMBkxe48sSc9RWwiie%2BcFkkS2bQBIAQ7pzIJC1fUuBegduuHqgY5uKYIj46%2Bdo3HUbMBepn7xttW1Tq%2B%2BpdTlzEDR3ZHdFIeeditJKVWW1noiVVVqMoVV%2FtFXN5jLmjVpOXESFZ8SnF8nhX7x7kYZV7VmH1SLbNRlvzi17O8SNElE8K71OBHCHc%2BlM1F%2FYL5QZ1fcCPKJmQcv9pJ9Uapk0WfNx9RUcqiCy6CB6ONz5S7thwbbua%2F32paF6Lk%2FaOCDvJlOOt5B0%2FcoduM9TAOmEZS1MrMfcMvBdEO6eRxVqbf6laMJOImm2NCp3AWmYvVC7eUzrDB6oOcLw7Wi6kc1j9uaOgIHJ4CVMQM%2BGIUe%2FI3HeI0DV1PKVwnWTO3Bk7eJdISm5MOnn2YHw37gdHYnzaetdhxncAmGBrQIGqKFBV2DDAVCVTK4qZivUimQ3d6I32lCWGlxfwWT00UiqEmHnZCqiDWvbKWbceRCgJtFSq9MO7OtMwGOqUBIl2sTj78zzuPNMg2yRpAfUy1DHMrr7zAwvSRH%2FFuS1QsCYaWNyAoyQdNEDBEst%2FJc%2FPWolG3934BxXK5FTWBczi96JFWkASj62IgwEuh28BDhMOuBR5KasKRu2p1eHiVTrQEbukvE2TOG3llhofdgkzHpX4nJuKPDtE9148uOTN9KIS23OLDO6njrpWmil1zsQtMQZhA9hbWvyI8fvvAXZTQ%2BBfS&X-Amz-Signature=f0ce992fb5c1995517bc781b85af249a83cbcae38329dc7f298b268f08a0f8f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTRF7MXO%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEHaMNQRJtXbI0WPU4FxsoChsdGozMLn6K0ImH1Kmi2yAiEA%2Bt9PkWgp54YVgOBcgafiZRG81xfVw0Vj2TRV79wR9OAqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQcJN2x8xm7ifhF2SrcA6n9nV6z68jh15nXCpzRjjVGeF60lgkKYoU5kzdLnVJruOSloW7lAnclRaVGQoAKPeJPh6u7DB39D%2B4x9vywQv5uN2JqsDHUeDPXYCVI5ACS2Wx7XYWKFIdVvL3qpE4%2FtVLsm2z4IL%2FjWgAkbMBkxe48sSc9RWwiie%2BcFkkS2bQBIAQ7pzIJC1fUuBegduuHqgY5uKYIj46%2Bdo3HUbMBepn7xttW1Tq%2B%2BpdTlzEDR3ZHdFIeeditJKVWW1noiVVVqMoVV%2FtFXN5jLmjVpOXESFZ8SnF8nhX7x7kYZV7VmH1SLbNRlvzi17O8SNElE8K71OBHCHc%2BlM1F%2FYL5QZ1fcCPKJmQcv9pJ9Uapk0WfNx9RUcqiCy6CB6ONz5S7thwbbua%2F32paF6Lk%2FaOCDvJlOOt5B0%2FcoduM9TAOmEZS1MrMfcMvBdEO6eRxVqbf6laMJOImm2NCp3AWmYvVC7eUzrDB6oOcLw7Wi6kc1j9uaOgIHJ4CVMQM%2BGIUe%2FI3HeI0DV1PKVwnWTO3Bk7eJdISm5MOnn2YHw37gdHYnzaetdhxncAmGBrQIGqKFBV2DDAVCVTK4qZivUimQ3d6I32lCWGlxfwWT00UiqEmHnZCqiDWvbKWbceRCgJtFSq9MO7OtMwGOqUBIl2sTj78zzuPNMg2yRpAfUy1DHMrr7zAwvSRH%2FFuS1QsCYaWNyAoyQdNEDBEst%2FJc%2FPWolG3934BxXK5FTWBczi96JFWkASj62IgwEuh28BDhMOuBR5KasKRu2p1eHiVTrQEbukvE2TOG3llhofdgkzHpX4nJuKPDtE9148uOTN9KIS23OLDO6njrpWmil1zsQtMQZhA9hbWvyI8fvvAXZTQ%2BBfS&X-Amz-Signature=a24645e6b020231dc90282b1ad4bd5119e8040047f1208fb787608c8be046864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTRF7MXO%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEHaMNQRJtXbI0WPU4FxsoChsdGozMLn6K0ImH1Kmi2yAiEA%2Bt9PkWgp54YVgOBcgafiZRG81xfVw0Vj2TRV79wR9OAqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQcJN2x8xm7ifhF2SrcA6n9nV6z68jh15nXCpzRjjVGeF60lgkKYoU5kzdLnVJruOSloW7lAnclRaVGQoAKPeJPh6u7DB39D%2B4x9vywQv5uN2JqsDHUeDPXYCVI5ACS2Wx7XYWKFIdVvL3qpE4%2FtVLsm2z4IL%2FjWgAkbMBkxe48sSc9RWwiie%2BcFkkS2bQBIAQ7pzIJC1fUuBegduuHqgY5uKYIj46%2Bdo3HUbMBepn7xttW1Tq%2B%2BpdTlzEDR3ZHdFIeeditJKVWW1noiVVVqMoVV%2FtFXN5jLmjVpOXESFZ8SnF8nhX7x7kYZV7VmH1SLbNRlvzi17O8SNElE8K71OBHCHc%2BlM1F%2FYL5QZ1fcCPKJmQcv9pJ9Uapk0WfNx9RUcqiCy6CB6ONz5S7thwbbua%2F32paF6Lk%2FaOCDvJlOOt5B0%2FcoduM9TAOmEZS1MrMfcMvBdEO6eRxVqbf6laMJOImm2NCp3AWmYvVC7eUzrDB6oOcLw7Wi6kc1j9uaOgIHJ4CVMQM%2BGIUe%2FI3HeI0DV1PKVwnWTO3Bk7eJdISm5MOnn2YHw37gdHYnzaetdhxncAmGBrQIGqKFBV2DDAVCVTK4qZivUimQ3d6I32lCWGlxfwWT00UiqEmHnZCqiDWvbKWbceRCgJtFSq9MO7OtMwGOqUBIl2sTj78zzuPNMg2yRpAfUy1DHMrr7zAwvSRH%2FFuS1QsCYaWNyAoyQdNEDBEst%2FJc%2FPWolG3934BxXK5FTWBczi96JFWkASj62IgwEuh28BDhMOuBR5KasKRu2p1eHiVTrQEbukvE2TOG3llhofdgkzHpX4nJuKPDtE9148uOTN9KIS23OLDO6njrpWmil1zsQtMQZhA9hbWvyI8fvvAXZTQ%2BBfS&X-Amz-Signature=ac0fd2021574f9a05eb4448ed2fa05c0060f60effec74f23654bdbb170722fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTRF7MXO%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEHaMNQRJtXbI0WPU4FxsoChsdGozMLn6K0ImH1Kmi2yAiEA%2Bt9PkWgp54YVgOBcgafiZRG81xfVw0Vj2TRV79wR9OAqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQcJN2x8xm7ifhF2SrcA6n9nV6z68jh15nXCpzRjjVGeF60lgkKYoU5kzdLnVJruOSloW7lAnclRaVGQoAKPeJPh6u7DB39D%2B4x9vywQv5uN2JqsDHUeDPXYCVI5ACS2Wx7XYWKFIdVvL3qpE4%2FtVLsm2z4IL%2FjWgAkbMBkxe48sSc9RWwiie%2BcFkkS2bQBIAQ7pzIJC1fUuBegduuHqgY5uKYIj46%2Bdo3HUbMBepn7xttW1Tq%2B%2BpdTlzEDR3ZHdFIeeditJKVWW1noiVVVqMoVV%2FtFXN5jLmjVpOXESFZ8SnF8nhX7x7kYZV7VmH1SLbNRlvzi17O8SNElE8K71OBHCHc%2BlM1F%2FYL5QZ1fcCPKJmQcv9pJ9Uapk0WfNx9RUcqiCy6CB6ONz5S7thwbbua%2F32paF6Lk%2FaOCDvJlOOt5B0%2FcoduM9TAOmEZS1MrMfcMvBdEO6eRxVqbf6laMJOImm2NCp3AWmYvVC7eUzrDB6oOcLw7Wi6kc1j9uaOgIHJ4CVMQM%2BGIUe%2FI3HeI0DV1PKVwnWTO3Bk7eJdISm5MOnn2YHw37gdHYnzaetdhxncAmGBrQIGqKFBV2DDAVCVTK4qZivUimQ3d6I32lCWGlxfwWT00UiqEmHnZCqiDWvbKWbceRCgJtFSq9MO7OtMwGOqUBIl2sTj78zzuPNMg2yRpAfUy1DHMrr7zAwvSRH%2FFuS1QsCYaWNyAoyQdNEDBEst%2FJc%2FPWolG3934BxXK5FTWBczi96JFWkASj62IgwEuh28BDhMOuBR5KasKRu2p1eHiVTrQEbukvE2TOG3llhofdgkzHpX4nJuKPDtE9148uOTN9KIS23OLDO6njrpWmil1zsQtMQZhA9hbWvyI8fvvAXZTQ%2BBfS&X-Amz-Signature=4e243996887d774091d6b3594da5171bc9297b6b7db8d25a28a1ce794c8f7e90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTRF7MXO%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEHaMNQRJtXbI0WPU4FxsoChsdGozMLn6K0ImH1Kmi2yAiEA%2Bt9PkWgp54YVgOBcgafiZRG81xfVw0Vj2TRV79wR9OAqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQcJN2x8xm7ifhF2SrcA6n9nV6z68jh15nXCpzRjjVGeF60lgkKYoU5kzdLnVJruOSloW7lAnclRaVGQoAKPeJPh6u7DB39D%2B4x9vywQv5uN2JqsDHUeDPXYCVI5ACS2Wx7XYWKFIdVvL3qpE4%2FtVLsm2z4IL%2FjWgAkbMBkxe48sSc9RWwiie%2BcFkkS2bQBIAQ7pzIJC1fUuBegduuHqgY5uKYIj46%2Bdo3HUbMBepn7xttW1Tq%2B%2BpdTlzEDR3ZHdFIeeditJKVWW1noiVVVqMoVV%2FtFXN5jLmjVpOXESFZ8SnF8nhX7x7kYZV7VmH1SLbNRlvzi17O8SNElE8K71OBHCHc%2BlM1F%2FYL5QZ1fcCPKJmQcv9pJ9Uapk0WfNx9RUcqiCy6CB6ONz5S7thwbbua%2F32paF6Lk%2FaOCDvJlOOt5B0%2FcoduM9TAOmEZS1MrMfcMvBdEO6eRxVqbf6laMJOImm2NCp3AWmYvVC7eUzrDB6oOcLw7Wi6kc1j9uaOgIHJ4CVMQM%2BGIUe%2FI3HeI0DV1PKVwnWTO3Bk7eJdISm5MOnn2YHw37gdHYnzaetdhxncAmGBrQIGqKFBV2DDAVCVTK4qZivUimQ3d6I32lCWGlxfwWT00UiqEmHnZCqiDWvbKWbceRCgJtFSq9MO7OtMwGOqUBIl2sTj78zzuPNMg2yRpAfUy1DHMrr7zAwvSRH%2FFuS1QsCYaWNyAoyQdNEDBEst%2FJc%2FPWolG3934BxXK5FTWBczi96JFWkASj62IgwEuh28BDhMOuBR5KasKRu2p1eHiVTrQEbukvE2TOG3llhofdgkzHpX4nJuKPDtE9148uOTN9KIS23OLDO6njrpWmil1zsQtMQZhA9hbWvyI8fvvAXZTQ%2BBfS&X-Amz-Signature=62cea93f25df52e1d016660673da391a31e22ad491670632066e58825ef3806c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTRF7MXO%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEHaMNQRJtXbI0WPU4FxsoChsdGozMLn6K0ImH1Kmi2yAiEA%2Bt9PkWgp54YVgOBcgafiZRG81xfVw0Vj2TRV79wR9OAqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQcJN2x8xm7ifhF2SrcA6n9nV6z68jh15nXCpzRjjVGeF60lgkKYoU5kzdLnVJruOSloW7lAnclRaVGQoAKPeJPh6u7DB39D%2B4x9vywQv5uN2JqsDHUeDPXYCVI5ACS2Wx7XYWKFIdVvL3qpE4%2FtVLsm2z4IL%2FjWgAkbMBkxe48sSc9RWwiie%2BcFkkS2bQBIAQ7pzIJC1fUuBegduuHqgY5uKYIj46%2Bdo3HUbMBepn7xttW1Tq%2B%2BpdTlzEDR3ZHdFIeeditJKVWW1noiVVVqMoVV%2FtFXN5jLmjVpOXESFZ8SnF8nhX7x7kYZV7VmH1SLbNRlvzi17O8SNElE8K71OBHCHc%2BlM1F%2FYL5QZ1fcCPKJmQcv9pJ9Uapk0WfNx9RUcqiCy6CB6ONz5S7thwbbua%2F32paF6Lk%2FaOCDvJlOOt5B0%2FcoduM9TAOmEZS1MrMfcMvBdEO6eRxVqbf6laMJOImm2NCp3AWmYvVC7eUzrDB6oOcLw7Wi6kc1j9uaOgIHJ4CVMQM%2BGIUe%2FI3HeI0DV1PKVwnWTO3Bk7eJdISm5MOnn2YHw37gdHYnzaetdhxncAmGBrQIGqKFBV2DDAVCVTK4qZivUimQ3d6I32lCWGlxfwWT00UiqEmHnZCqiDWvbKWbceRCgJtFSq9MO7OtMwGOqUBIl2sTj78zzuPNMg2yRpAfUy1DHMrr7zAwvSRH%2FFuS1QsCYaWNyAoyQdNEDBEst%2FJc%2FPWolG3934BxXK5FTWBczi96JFWkASj62IgwEuh28BDhMOuBR5KasKRu2p1eHiVTrQEbukvE2TOG3llhofdgkzHpX4nJuKPDtE9148uOTN9KIS23OLDO6njrpWmil1zsQtMQZhA9hbWvyI8fvvAXZTQ%2BBfS&X-Amz-Signature=d7fa3275c47ecd4f498051aaeb640b7ec226d335f7bfdfe5658df5407f0e8ef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


