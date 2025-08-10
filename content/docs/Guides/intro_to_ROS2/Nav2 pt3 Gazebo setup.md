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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ZL6LE5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD6G8GUZUD0qfmKM1WQKobkJjFkVjeFH%2BpicWXb6gbzwIhAKkPKLr6KhtgxnpTKcZWPrbctH1lh4T3ldaA33wr6zN%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyykyZBIN9srMfcxCMq3AMmBx9RG%2BNB1BqxRq8QxsI8RO2mI99cGdj1jYA%2BhNzlzONXVmR%2BFK9A%2BGUE76YcVE7yM2IgKEB98xR6sKYctw0ojhqjkXttahmKFW0XNEdwRhX6JRmMtxVXcZQlXCdzIauFmXbYTeDpr9hhr1SAV36fcgqUZw3Yni7FB8zj91BKNy2%2FqteDPZ9h9Vf70WEhoP7KxNy%2Fa2WBZ49ZylwVHeGtZrzLzVKcOnnVUv%2BtzoD3bHdPUm22eSjCETJU0cy5YImZ%2BxzE6Eqe%2BWnKkmeTGMDDN4Qb0vq131OAamoQ8Ls9yGSxcyXFDgEm2PdyA3VB3viRapsWfwgDBECXt3ieF8D058h9ora%2Bj31CuhjWpQu%2FOhWKkxqtTCyMYFvosF7XmnLqmvSiQMmB5G2vohDOTjlu9GiwrZsQzuF0h6ILV15KVXi8Lva0sHpLB54MRX%2FwmoafmrHVi%2BazpDCj1O93p3aV0ee%2FeRaP%2BhVuAx1TuqWYd4zsPS3CFe6mKLSu1cWKiNo1kLFJ5FFQqoHqyWuA3rZo5Yzm988ebpIjPWGBn%2FO8vOcj6%2Bp5XoqlxKQ043cSuDxaAHO3bG5x6kmnUHpiqU2%2FtWPVXW192dT1oS%2FNPgfaDzaPqeviATXEfVVZkDCYv%2BLEBjqkAc8mQZvOs527AANT1J0tnMaIx0hqagjMOoVuzYua%2Ft3R7PbpofmV70hfF9EEVYPvWKuxNRW38vTkDlQmatdLKnHV%2BH748cFBEcA3yUyhj%2FKpa2dDw6CKlWNn1KDGwD7m%2F%2FZNqRJkHC7ChCfueeA1bgezqCJ5oROdXSr4dEb4mqaePDiNnxMPnwrDQvQ6tTY4dfZ7kH0jvbHO7FEGAuH%2BSG7%2BBp4j&X-Amz-Signature=bec95b33ef8e1d93bf7118d7a1b92c6974e5d077b19ee3d477b0d8a14f553fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ZL6LE5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD6G8GUZUD0qfmKM1WQKobkJjFkVjeFH%2BpicWXb6gbzwIhAKkPKLr6KhtgxnpTKcZWPrbctH1lh4T3ldaA33wr6zN%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyykyZBIN9srMfcxCMq3AMmBx9RG%2BNB1BqxRq8QxsI8RO2mI99cGdj1jYA%2BhNzlzONXVmR%2BFK9A%2BGUE76YcVE7yM2IgKEB98xR6sKYctw0ojhqjkXttahmKFW0XNEdwRhX6JRmMtxVXcZQlXCdzIauFmXbYTeDpr9hhr1SAV36fcgqUZw3Yni7FB8zj91BKNy2%2FqteDPZ9h9Vf70WEhoP7KxNy%2Fa2WBZ49ZylwVHeGtZrzLzVKcOnnVUv%2BtzoD3bHdPUm22eSjCETJU0cy5YImZ%2BxzE6Eqe%2BWnKkmeTGMDDN4Qb0vq131OAamoQ8Ls9yGSxcyXFDgEm2PdyA3VB3viRapsWfwgDBECXt3ieF8D058h9ora%2Bj31CuhjWpQu%2FOhWKkxqtTCyMYFvosF7XmnLqmvSiQMmB5G2vohDOTjlu9GiwrZsQzuF0h6ILV15KVXi8Lva0sHpLB54MRX%2FwmoafmrHVi%2BazpDCj1O93p3aV0ee%2FeRaP%2BhVuAx1TuqWYd4zsPS3CFe6mKLSu1cWKiNo1kLFJ5FFQqoHqyWuA3rZo5Yzm988ebpIjPWGBn%2FO8vOcj6%2Bp5XoqlxKQ043cSuDxaAHO3bG5x6kmnUHpiqU2%2FtWPVXW192dT1oS%2FNPgfaDzaPqeviATXEfVVZkDCYv%2BLEBjqkAc8mQZvOs527AANT1J0tnMaIx0hqagjMOoVuzYua%2Ft3R7PbpofmV70hfF9EEVYPvWKuxNRW38vTkDlQmatdLKnHV%2BH748cFBEcA3yUyhj%2FKpa2dDw6CKlWNn1KDGwD7m%2F%2FZNqRJkHC7ChCfueeA1bgezqCJ5oROdXSr4dEb4mqaePDiNnxMPnwrDQvQ6tTY4dfZ7kH0jvbHO7FEGAuH%2BSG7%2BBp4j&X-Amz-Signature=5840f0e584a9610a38444e694c076bd962bc1b6f241c7d887421f2ec31e4c72d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ZL6LE5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD6G8GUZUD0qfmKM1WQKobkJjFkVjeFH%2BpicWXb6gbzwIhAKkPKLr6KhtgxnpTKcZWPrbctH1lh4T3ldaA33wr6zN%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyykyZBIN9srMfcxCMq3AMmBx9RG%2BNB1BqxRq8QxsI8RO2mI99cGdj1jYA%2BhNzlzONXVmR%2BFK9A%2BGUE76YcVE7yM2IgKEB98xR6sKYctw0ojhqjkXttahmKFW0XNEdwRhX6JRmMtxVXcZQlXCdzIauFmXbYTeDpr9hhr1SAV36fcgqUZw3Yni7FB8zj91BKNy2%2FqteDPZ9h9Vf70WEhoP7KxNy%2Fa2WBZ49ZylwVHeGtZrzLzVKcOnnVUv%2BtzoD3bHdPUm22eSjCETJU0cy5YImZ%2BxzE6Eqe%2BWnKkmeTGMDDN4Qb0vq131OAamoQ8Ls9yGSxcyXFDgEm2PdyA3VB3viRapsWfwgDBECXt3ieF8D058h9ora%2Bj31CuhjWpQu%2FOhWKkxqtTCyMYFvosF7XmnLqmvSiQMmB5G2vohDOTjlu9GiwrZsQzuF0h6ILV15KVXi8Lva0sHpLB54MRX%2FwmoafmrHVi%2BazpDCj1O93p3aV0ee%2FeRaP%2BhVuAx1TuqWYd4zsPS3CFe6mKLSu1cWKiNo1kLFJ5FFQqoHqyWuA3rZo5Yzm988ebpIjPWGBn%2FO8vOcj6%2Bp5XoqlxKQ043cSuDxaAHO3bG5x6kmnUHpiqU2%2FtWPVXW192dT1oS%2FNPgfaDzaPqeviATXEfVVZkDCYv%2BLEBjqkAc8mQZvOs527AANT1J0tnMaIx0hqagjMOoVuzYua%2Ft3R7PbpofmV70hfF9EEVYPvWKuxNRW38vTkDlQmatdLKnHV%2BH748cFBEcA3yUyhj%2FKpa2dDw6CKlWNn1KDGwD7m%2F%2FZNqRJkHC7ChCfueeA1bgezqCJ5oROdXSr4dEb4mqaePDiNnxMPnwrDQvQ6tTY4dfZ7kH0jvbHO7FEGAuH%2BSG7%2BBp4j&X-Amz-Signature=89af7d200f8e81002bbef618fd5f15664ae110850bbe7a5922e828ac695b7504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ZL6LE5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD6G8GUZUD0qfmKM1WQKobkJjFkVjeFH%2BpicWXb6gbzwIhAKkPKLr6KhtgxnpTKcZWPrbctH1lh4T3ldaA33wr6zN%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyykyZBIN9srMfcxCMq3AMmBx9RG%2BNB1BqxRq8QxsI8RO2mI99cGdj1jYA%2BhNzlzONXVmR%2BFK9A%2BGUE76YcVE7yM2IgKEB98xR6sKYctw0ojhqjkXttahmKFW0XNEdwRhX6JRmMtxVXcZQlXCdzIauFmXbYTeDpr9hhr1SAV36fcgqUZw3Yni7FB8zj91BKNy2%2FqteDPZ9h9Vf70WEhoP7KxNy%2Fa2WBZ49ZylwVHeGtZrzLzVKcOnnVUv%2BtzoD3bHdPUm22eSjCETJU0cy5YImZ%2BxzE6Eqe%2BWnKkmeTGMDDN4Qb0vq131OAamoQ8Ls9yGSxcyXFDgEm2PdyA3VB3viRapsWfwgDBECXt3ieF8D058h9ora%2Bj31CuhjWpQu%2FOhWKkxqtTCyMYFvosF7XmnLqmvSiQMmB5G2vohDOTjlu9GiwrZsQzuF0h6ILV15KVXi8Lva0sHpLB54MRX%2FwmoafmrHVi%2BazpDCj1O93p3aV0ee%2FeRaP%2BhVuAx1TuqWYd4zsPS3CFe6mKLSu1cWKiNo1kLFJ5FFQqoHqyWuA3rZo5Yzm988ebpIjPWGBn%2FO8vOcj6%2Bp5XoqlxKQ043cSuDxaAHO3bG5x6kmnUHpiqU2%2FtWPVXW192dT1oS%2FNPgfaDzaPqeviATXEfVVZkDCYv%2BLEBjqkAc8mQZvOs527AANT1J0tnMaIx0hqagjMOoVuzYua%2Ft3R7PbpofmV70hfF9EEVYPvWKuxNRW38vTkDlQmatdLKnHV%2BH748cFBEcA3yUyhj%2FKpa2dDw6CKlWNn1KDGwD7m%2F%2FZNqRJkHC7ChCfueeA1bgezqCJ5oROdXSr4dEb4mqaePDiNnxMPnwrDQvQ6tTY4dfZ7kH0jvbHO7FEGAuH%2BSG7%2BBp4j&X-Amz-Signature=d10164dd5b9e9ea9d6c6b3b0ea05f04ea4ef047851c730a56445ea2a51512cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFIEUV65%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj3y8PgTaGekl%2BkhfweRlRnBievfRwv8EHT3agjsZ1MwIhAMMjFAhhK99xgNSUF9CXgu7hXpxmIY13lLFiX54%2FvnkGKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3Ww9ODppwdUMn2V0q3AMWHtkVNbqaSwhDULSQ7QzKYvM%2F0H2W6%2Bqs7ImDwPhxkV5cVoiAEeBXLwgmsBvbA2kjy925CSsxh3xIWRTHj76xukfP2NYQjGtwqUd4Xz1nxLSqSh8XRmghXoe%2F9waUXxg0a3lEZNUrI8vMm%2FVpmDMiloVYIheCX2flx%2F9Cu02ugD2EZoB2IHU5sn%2F1kg0xqzKKQmJQYboZ9rx3ecrD2y1upInRQ%2Bls7%2BEFwCafwml11oU28omsa7gb3kFw0M%2BXxZ5KxwLUnprrbq1noryT2MOl1JtAKw1T1MX%2FjUfENbJ8mu8kMB81rQSi%2FFCYRBVNFe3PcRM3ADbZUBpwwWw%2BBgbvp1UVkzjte%2F5M%2B2BhP60HucJIMuEYEeCs72varMqy95QuORfoo%2FFHdgoWmLf8fxeSO3axAneju0X2%2BYxGPINKht6DDkyB1Vpx3RBtBW%2B5jYLQMgIxrG4AoaXcZbHY%2F14DvqY3gmXXTSmFF50Ds9MSRp3%2F1Zpj6p7ygvIRa4gaPUq1Pd46%2B78nQKna8QG28iv0XU2jLjyK%2FEbsLJMGvfBCskUUy%2BgIWmcmr%2Bea4KIlr1%2FGM1ES2Gc7gmf%2Bp6L%2F%2FTeOLCZzkuCLQ5tR4FZ2ZGQeCJcDNMEeyoa950PEMDCDv%2BLEBjqkAUYUoOkJk0avc6FiwY226KcAaLyzZmkp4X5llU36xee5NIhNwlLLz3mZfqHWyjHPMcGrTk2qo9qdms2gM1AUL6vKS0GkuNg1vN7QpsHLbQKehoDUlYVvS%2Fn2S1xNrNIRwo14jpSX5BQYDleCuoMj16N0Ek7MxFE3EhHTPUIJ3%2BEtmLdoUuTYj5MbEQLUJR0pbWr9o4iMqA6d65z3XsxxjhjuZqKZ&X-Amz-Signature=5ab50f88384f4d7651243da9990367bf1e1111177231c05e29f1587d31b094c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ZL6LE5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD6G8GUZUD0qfmKM1WQKobkJjFkVjeFH%2BpicWXb6gbzwIhAKkPKLr6KhtgxnpTKcZWPrbctH1lh4T3ldaA33wr6zN%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyykyZBIN9srMfcxCMq3AMmBx9RG%2BNB1BqxRq8QxsI8RO2mI99cGdj1jYA%2BhNzlzONXVmR%2BFK9A%2BGUE76YcVE7yM2IgKEB98xR6sKYctw0ojhqjkXttahmKFW0XNEdwRhX6JRmMtxVXcZQlXCdzIauFmXbYTeDpr9hhr1SAV36fcgqUZw3Yni7FB8zj91BKNy2%2FqteDPZ9h9Vf70WEhoP7KxNy%2Fa2WBZ49ZylwVHeGtZrzLzVKcOnnVUv%2BtzoD3bHdPUm22eSjCETJU0cy5YImZ%2BxzE6Eqe%2BWnKkmeTGMDDN4Qb0vq131OAamoQ8Ls9yGSxcyXFDgEm2PdyA3VB3viRapsWfwgDBECXt3ieF8D058h9ora%2Bj31CuhjWpQu%2FOhWKkxqtTCyMYFvosF7XmnLqmvSiQMmB5G2vohDOTjlu9GiwrZsQzuF0h6ILV15KVXi8Lva0sHpLB54MRX%2FwmoafmrHVi%2BazpDCj1O93p3aV0ee%2FeRaP%2BhVuAx1TuqWYd4zsPS3CFe6mKLSu1cWKiNo1kLFJ5FFQqoHqyWuA3rZo5Yzm988ebpIjPWGBn%2FO8vOcj6%2Bp5XoqlxKQ043cSuDxaAHO3bG5x6kmnUHpiqU2%2FtWPVXW192dT1oS%2FNPgfaDzaPqeviATXEfVVZkDCYv%2BLEBjqkAc8mQZvOs527AANT1J0tnMaIx0hqagjMOoVuzYua%2Ft3R7PbpofmV70hfF9EEVYPvWKuxNRW38vTkDlQmatdLKnHV%2BH748cFBEcA3yUyhj%2FKpa2dDw6CKlWNn1KDGwD7m%2F%2FZNqRJkHC7ChCfueeA1bgezqCJ5oROdXSr4dEb4mqaePDiNnxMPnwrDQvQ6tTY4dfZ7kH0jvbHO7FEGAuH%2BSG7%2BBp4j&X-Amz-Signature=81b43f8570e8b05ca4c04503a6634a185c65503282cad9b00656821ad0f0e826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ZL6LE5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD6G8GUZUD0qfmKM1WQKobkJjFkVjeFH%2BpicWXb6gbzwIhAKkPKLr6KhtgxnpTKcZWPrbctH1lh4T3ldaA33wr6zN%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyykyZBIN9srMfcxCMq3AMmBx9RG%2BNB1BqxRq8QxsI8RO2mI99cGdj1jYA%2BhNzlzONXVmR%2BFK9A%2BGUE76YcVE7yM2IgKEB98xR6sKYctw0ojhqjkXttahmKFW0XNEdwRhX6JRmMtxVXcZQlXCdzIauFmXbYTeDpr9hhr1SAV36fcgqUZw3Yni7FB8zj91BKNy2%2FqteDPZ9h9Vf70WEhoP7KxNy%2Fa2WBZ49ZylwVHeGtZrzLzVKcOnnVUv%2BtzoD3bHdPUm22eSjCETJU0cy5YImZ%2BxzE6Eqe%2BWnKkmeTGMDDN4Qb0vq131OAamoQ8Ls9yGSxcyXFDgEm2PdyA3VB3viRapsWfwgDBECXt3ieF8D058h9ora%2Bj31CuhjWpQu%2FOhWKkxqtTCyMYFvosF7XmnLqmvSiQMmB5G2vohDOTjlu9GiwrZsQzuF0h6ILV15KVXi8Lva0sHpLB54MRX%2FwmoafmrHVi%2BazpDCj1O93p3aV0ee%2FeRaP%2BhVuAx1TuqWYd4zsPS3CFe6mKLSu1cWKiNo1kLFJ5FFQqoHqyWuA3rZo5Yzm988ebpIjPWGBn%2FO8vOcj6%2Bp5XoqlxKQ043cSuDxaAHO3bG5x6kmnUHpiqU2%2FtWPVXW192dT1oS%2FNPgfaDzaPqeviATXEfVVZkDCYv%2BLEBjqkAc8mQZvOs527AANT1J0tnMaIx0hqagjMOoVuzYua%2Ft3R7PbpofmV70hfF9EEVYPvWKuxNRW38vTkDlQmatdLKnHV%2BH748cFBEcA3yUyhj%2FKpa2dDw6CKlWNn1KDGwD7m%2F%2FZNqRJkHC7ChCfueeA1bgezqCJ5oROdXSr4dEb4mqaePDiNnxMPnwrDQvQ6tTY4dfZ7kH0jvbHO7FEGAuH%2BSG7%2BBp4j&X-Amz-Signature=b46b6a422fcf647173a0504bbc8db80d6170d3b47df0146d1d5fb6679c8c3c91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ZL6LE5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD6G8GUZUD0qfmKM1WQKobkJjFkVjeFH%2BpicWXb6gbzwIhAKkPKLr6KhtgxnpTKcZWPrbctH1lh4T3ldaA33wr6zN%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyykyZBIN9srMfcxCMq3AMmBx9RG%2BNB1BqxRq8QxsI8RO2mI99cGdj1jYA%2BhNzlzONXVmR%2BFK9A%2BGUE76YcVE7yM2IgKEB98xR6sKYctw0ojhqjkXttahmKFW0XNEdwRhX6JRmMtxVXcZQlXCdzIauFmXbYTeDpr9hhr1SAV36fcgqUZw3Yni7FB8zj91BKNy2%2FqteDPZ9h9Vf70WEhoP7KxNy%2Fa2WBZ49ZylwVHeGtZrzLzVKcOnnVUv%2BtzoD3bHdPUm22eSjCETJU0cy5YImZ%2BxzE6Eqe%2BWnKkmeTGMDDN4Qb0vq131OAamoQ8Ls9yGSxcyXFDgEm2PdyA3VB3viRapsWfwgDBECXt3ieF8D058h9ora%2Bj31CuhjWpQu%2FOhWKkxqtTCyMYFvosF7XmnLqmvSiQMmB5G2vohDOTjlu9GiwrZsQzuF0h6ILV15KVXi8Lva0sHpLB54MRX%2FwmoafmrHVi%2BazpDCj1O93p3aV0ee%2FeRaP%2BhVuAx1TuqWYd4zsPS3CFe6mKLSu1cWKiNo1kLFJ5FFQqoHqyWuA3rZo5Yzm988ebpIjPWGBn%2FO8vOcj6%2Bp5XoqlxKQ043cSuDxaAHO3bG5x6kmnUHpiqU2%2FtWPVXW192dT1oS%2FNPgfaDzaPqeviATXEfVVZkDCYv%2BLEBjqkAc8mQZvOs527AANT1J0tnMaIx0hqagjMOoVuzYua%2Ft3R7PbpofmV70hfF9EEVYPvWKuxNRW38vTkDlQmatdLKnHV%2BH748cFBEcA3yUyhj%2FKpa2dDw6CKlWNn1KDGwD7m%2F%2FZNqRJkHC7ChCfueeA1bgezqCJ5oROdXSr4dEb4mqaePDiNnxMPnwrDQvQ6tTY4dfZ7kH0jvbHO7FEGAuH%2BSG7%2BBp4j&X-Amz-Signature=5bd7c380aeeddf90b20a156e97bf8a59ee4f01ebc08f8823ffaac9c8dae649ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ZL6LE5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD6G8GUZUD0qfmKM1WQKobkJjFkVjeFH%2BpicWXb6gbzwIhAKkPKLr6KhtgxnpTKcZWPrbctH1lh4T3ldaA33wr6zN%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyykyZBIN9srMfcxCMq3AMmBx9RG%2BNB1BqxRq8QxsI8RO2mI99cGdj1jYA%2BhNzlzONXVmR%2BFK9A%2BGUE76YcVE7yM2IgKEB98xR6sKYctw0ojhqjkXttahmKFW0XNEdwRhX6JRmMtxVXcZQlXCdzIauFmXbYTeDpr9hhr1SAV36fcgqUZw3Yni7FB8zj91BKNy2%2FqteDPZ9h9Vf70WEhoP7KxNy%2Fa2WBZ49ZylwVHeGtZrzLzVKcOnnVUv%2BtzoD3bHdPUm22eSjCETJU0cy5YImZ%2BxzE6Eqe%2BWnKkmeTGMDDN4Qb0vq131OAamoQ8Ls9yGSxcyXFDgEm2PdyA3VB3viRapsWfwgDBECXt3ieF8D058h9ora%2Bj31CuhjWpQu%2FOhWKkxqtTCyMYFvosF7XmnLqmvSiQMmB5G2vohDOTjlu9GiwrZsQzuF0h6ILV15KVXi8Lva0sHpLB54MRX%2FwmoafmrHVi%2BazpDCj1O93p3aV0ee%2FeRaP%2BhVuAx1TuqWYd4zsPS3CFe6mKLSu1cWKiNo1kLFJ5FFQqoHqyWuA3rZo5Yzm988ebpIjPWGBn%2FO8vOcj6%2Bp5XoqlxKQ043cSuDxaAHO3bG5x6kmnUHpiqU2%2FtWPVXW192dT1oS%2FNPgfaDzaPqeviATXEfVVZkDCYv%2BLEBjqkAc8mQZvOs527AANT1J0tnMaIx0hqagjMOoVuzYua%2Ft3R7PbpofmV70hfF9EEVYPvWKuxNRW38vTkDlQmatdLKnHV%2BH748cFBEcA3yUyhj%2FKpa2dDw6CKlWNn1KDGwD7m%2F%2FZNqRJkHC7ChCfueeA1bgezqCJ5oROdXSr4dEb4mqaePDiNnxMPnwrDQvQ6tTY4dfZ7kH0jvbHO7FEGAuH%2BSG7%2BBp4j&X-Amz-Signature=6aa4cfa2d0015bb97ff1023ee996bbef24c68d1535889f994c67aee3fbef5d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ZL6LE5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD6G8GUZUD0qfmKM1WQKobkJjFkVjeFH%2BpicWXb6gbzwIhAKkPKLr6KhtgxnpTKcZWPrbctH1lh4T3ldaA33wr6zN%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyykyZBIN9srMfcxCMq3AMmBx9RG%2BNB1BqxRq8QxsI8RO2mI99cGdj1jYA%2BhNzlzONXVmR%2BFK9A%2BGUE76YcVE7yM2IgKEB98xR6sKYctw0ojhqjkXttahmKFW0XNEdwRhX6JRmMtxVXcZQlXCdzIauFmXbYTeDpr9hhr1SAV36fcgqUZw3Yni7FB8zj91BKNy2%2FqteDPZ9h9Vf70WEhoP7KxNy%2Fa2WBZ49ZylwVHeGtZrzLzVKcOnnVUv%2BtzoD3bHdPUm22eSjCETJU0cy5YImZ%2BxzE6Eqe%2BWnKkmeTGMDDN4Qb0vq131OAamoQ8Ls9yGSxcyXFDgEm2PdyA3VB3viRapsWfwgDBECXt3ieF8D058h9ora%2Bj31CuhjWpQu%2FOhWKkxqtTCyMYFvosF7XmnLqmvSiQMmB5G2vohDOTjlu9GiwrZsQzuF0h6ILV15KVXi8Lva0sHpLB54MRX%2FwmoafmrHVi%2BazpDCj1O93p3aV0ee%2FeRaP%2BhVuAx1TuqWYd4zsPS3CFe6mKLSu1cWKiNo1kLFJ5FFQqoHqyWuA3rZo5Yzm988ebpIjPWGBn%2FO8vOcj6%2Bp5XoqlxKQ043cSuDxaAHO3bG5x6kmnUHpiqU2%2FtWPVXW192dT1oS%2FNPgfaDzaPqeviATXEfVVZkDCYv%2BLEBjqkAc8mQZvOs527AANT1J0tnMaIx0hqagjMOoVuzYua%2Ft3R7PbpofmV70hfF9EEVYPvWKuxNRW38vTkDlQmatdLKnHV%2BH748cFBEcA3yUyhj%2FKpa2dDw6CKlWNn1KDGwD7m%2F%2FZNqRJkHC7ChCfueeA1bgezqCJ5oROdXSr4dEb4mqaePDiNnxMPnwrDQvQ6tTY4dfZ7kH0jvbHO7FEGAuH%2BSG7%2BBp4j&X-Amz-Signature=0dbaa372c3e82fed382b9f72ad5dabaddd3718761d702021c69e58facd945885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ZL6LE5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD6G8GUZUD0qfmKM1WQKobkJjFkVjeFH%2BpicWXb6gbzwIhAKkPKLr6KhtgxnpTKcZWPrbctH1lh4T3ldaA33wr6zN%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyykyZBIN9srMfcxCMq3AMmBx9RG%2BNB1BqxRq8QxsI8RO2mI99cGdj1jYA%2BhNzlzONXVmR%2BFK9A%2BGUE76YcVE7yM2IgKEB98xR6sKYctw0ojhqjkXttahmKFW0XNEdwRhX6JRmMtxVXcZQlXCdzIauFmXbYTeDpr9hhr1SAV36fcgqUZw3Yni7FB8zj91BKNy2%2FqteDPZ9h9Vf70WEhoP7KxNy%2Fa2WBZ49ZylwVHeGtZrzLzVKcOnnVUv%2BtzoD3bHdPUm22eSjCETJU0cy5YImZ%2BxzE6Eqe%2BWnKkmeTGMDDN4Qb0vq131OAamoQ8Ls9yGSxcyXFDgEm2PdyA3VB3viRapsWfwgDBECXt3ieF8D058h9ora%2Bj31CuhjWpQu%2FOhWKkxqtTCyMYFvosF7XmnLqmvSiQMmB5G2vohDOTjlu9GiwrZsQzuF0h6ILV15KVXi8Lva0sHpLB54MRX%2FwmoafmrHVi%2BazpDCj1O93p3aV0ee%2FeRaP%2BhVuAx1TuqWYd4zsPS3CFe6mKLSu1cWKiNo1kLFJ5FFQqoHqyWuA3rZo5Yzm988ebpIjPWGBn%2FO8vOcj6%2Bp5XoqlxKQ043cSuDxaAHO3bG5x6kmnUHpiqU2%2FtWPVXW192dT1oS%2FNPgfaDzaPqeviATXEfVVZkDCYv%2BLEBjqkAc8mQZvOs527AANT1J0tnMaIx0hqagjMOoVuzYua%2Ft3R7PbpofmV70hfF9EEVYPvWKuxNRW38vTkDlQmatdLKnHV%2BH748cFBEcA3yUyhj%2FKpa2dDw6CKlWNn1KDGwD7m%2F%2FZNqRJkHC7ChCfueeA1bgezqCJ5oROdXSr4dEb4mqaePDiNnxMPnwrDQvQ6tTY4dfZ7kH0jvbHO7FEGAuH%2BSG7%2BBp4j&X-Amz-Signature=a52393ee195c56ba777a959212206cbdf53fc123ce1a5f6b72518a00e3bc71b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
