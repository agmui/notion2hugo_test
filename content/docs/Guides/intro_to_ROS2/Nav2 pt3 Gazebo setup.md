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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJ74YVW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHVLHeObLO6CsLfjx%2B%2FioCBFbFWiCeWJwACRfhNbjp5fAiEA9ZVu%2FBv5kWTV1v67Y5vhZ%2Fc%2BlhHEosdDvOX7kmUZQx4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDL%2Bv8GqBeYINQHcklSrcA8gjWrypI45Uz9L4OEtifuM2G4m85N50rVW%2BH5Wm157SbC%2B2seqD%2FDWChnKWQYnhnqAFpzXrzqRm%2FQtkrT581rg%2BMB4xLKaCmJfn%2B6FH35DmoXcSB%2Bf3Ua8%2FZ00ZLmf7PuoCA7BvA1TLR83FpP3s8h5ihmFy1k8EWLym0EDzO6y%2Fg8Qbrg8Hw8A2FEm37q9bYerQRfvUKy106Y3D7nzEShuu8U6aU0YNf2WFPCuyA9IrdxFg9%2BUblEtG4yUIHCYCrkXf%2Ff7NFZBvL8ZkfDXnfLDjFS%2BLAOBJWkk6UHfgaznXhLGQBpzcIPKx4echQS3zXFP9eQMUkurAVhbh7PR5pE2cDrPYTVUSiiE%2FYmDILke6bQLM9XiCXOLd7bPrMjUJTdhK7JUcrfdWAQOy7daGSnt5PXoEM%2F3rFny7Vuwz08LsrSgMwzClU78C16%2F19PGBzpYG2LgB%2Ba8VfRwh%2FLyUHDCaDwijqmEAk9F2zVrn9j0RH4Ttp1chv8xA6jLAqzLvWfgKQcvRVIusWA8ot3dHhiPxT4hKDSd0OqtOL4%2FVShEPtT8BZqkRwcj%2BC4dRgWXBPg2%2Fk2QdS8UcUMORiWYAxDAU5BnV9xtw3U6e3kphNeLJcKxPuZPfkDGunw%2F1MI3rzsQGOqUBo0G9kNGTAGUFMXNMRcNSbSs%2FlOGrznspY5%2F%2FAH3xE6w4CSf4bRjfvlFsvkEk4RiuvaxtCV6p1r7a9nkAyuVEyHYuGe28EnM7k2HUZb074DGMIdNzPB2pBP7nfOGSAKaQCXUD3B7rA0RF3FbZg7fC0hBANNkxnQ6glRKftB55tV2xfnWVqRt2bPL0GDdyKm1ec4UZvrk2tcNe5T%2BK4D0K4SekaeK1&X-Amz-Signature=cf53a3695b400e4f9374df58da244443ebd733c7e9ce88f50c6740204042e2d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJ74YVW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHVLHeObLO6CsLfjx%2B%2FioCBFbFWiCeWJwACRfhNbjp5fAiEA9ZVu%2FBv5kWTV1v67Y5vhZ%2Fc%2BlhHEosdDvOX7kmUZQx4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDL%2Bv8GqBeYINQHcklSrcA8gjWrypI45Uz9L4OEtifuM2G4m85N50rVW%2BH5Wm157SbC%2B2seqD%2FDWChnKWQYnhnqAFpzXrzqRm%2FQtkrT581rg%2BMB4xLKaCmJfn%2B6FH35DmoXcSB%2Bf3Ua8%2FZ00ZLmf7PuoCA7BvA1TLR83FpP3s8h5ihmFy1k8EWLym0EDzO6y%2Fg8Qbrg8Hw8A2FEm37q9bYerQRfvUKy106Y3D7nzEShuu8U6aU0YNf2WFPCuyA9IrdxFg9%2BUblEtG4yUIHCYCrkXf%2Ff7NFZBvL8ZkfDXnfLDjFS%2BLAOBJWkk6UHfgaznXhLGQBpzcIPKx4echQS3zXFP9eQMUkurAVhbh7PR5pE2cDrPYTVUSiiE%2FYmDILke6bQLM9XiCXOLd7bPrMjUJTdhK7JUcrfdWAQOy7daGSnt5PXoEM%2F3rFny7Vuwz08LsrSgMwzClU78C16%2F19PGBzpYG2LgB%2Ba8VfRwh%2FLyUHDCaDwijqmEAk9F2zVrn9j0RH4Ttp1chv8xA6jLAqzLvWfgKQcvRVIusWA8ot3dHhiPxT4hKDSd0OqtOL4%2FVShEPtT8BZqkRwcj%2BC4dRgWXBPg2%2Fk2QdS8UcUMORiWYAxDAU5BnV9xtw3U6e3kphNeLJcKxPuZPfkDGunw%2F1MI3rzsQGOqUBo0G9kNGTAGUFMXNMRcNSbSs%2FlOGrznspY5%2F%2FAH3xE6w4CSf4bRjfvlFsvkEk4RiuvaxtCV6p1r7a9nkAyuVEyHYuGe28EnM7k2HUZb074DGMIdNzPB2pBP7nfOGSAKaQCXUD3B7rA0RF3FbZg7fC0hBANNkxnQ6glRKftB55tV2xfnWVqRt2bPL0GDdyKm1ec4UZvrk2tcNe5T%2BK4D0K4SekaeK1&X-Amz-Signature=8dd5cf655496b906251e81f3b45dd0521bccfe664ae181e115bf510a66f1468d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJ74YVW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHVLHeObLO6CsLfjx%2B%2FioCBFbFWiCeWJwACRfhNbjp5fAiEA9ZVu%2FBv5kWTV1v67Y5vhZ%2Fc%2BlhHEosdDvOX7kmUZQx4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDL%2Bv8GqBeYINQHcklSrcA8gjWrypI45Uz9L4OEtifuM2G4m85N50rVW%2BH5Wm157SbC%2B2seqD%2FDWChnKWQYnhnqAFpzXrzqRm%2FQtkrT581rg%2BMB4xLKaCmJfn%2B6FH35DmoXcSB%2Bf3Ua8%2FZ00ZLmf7PuoCA7BvA1TLR83FpP3s8h5ihmFy1k8EWLym0EDzO6y%2Fg8Qbrg8Hw8A2FEm37q9bYerQRfvUKy106Y3D7nzEShuu8U6aU0YNf2WFPCuyA9IrdxFg9%2BUblEtG4yUIHCYCrkXf%2Ff7NFZBvL8ZkfDXnfLDjFS%2BLAOBJWkk6UHfgaznXhLGQBpzcIPKx4echQS3zXFP9eQMUkurAVhbh7PR5pE2cDrPYTVUSiiE%2FYmDILke6bQLM9XiCXOLd7bPrMjUJTdhK7JUcrfdWAQOy7daGSnt5PXoEM%2F3rFny7Vuwz08LsrSgMwzClU78C16%2F19PGBzpYG2LgB%2Ba8VfRwh%2FLyUHDCaDwijqmEAk9F2zVrn9j0RH4Ttp1chv8xA6jLAqzLvWfgKQcvRVIusWA8ot3dHhiPxT4hKDSd0OqtOL4%2FVShEPtT8BZqkRwcj%2BC4dRgWXBPg2%2Fk2QdS8UcUMORiWYAxDAU5BnV9xtw3U6e3kphNeLJcKxPuZPfkDGunw%2F1MI3rzsQGOqUBo0G9kNGTAGUFMXNMRcNSbSs%2FlOGrznspY5%2F%2FAH3xE6w4CSf4bRjfvlFsvkEk4RiuvaxtCV6p1r7a9nkAyuVEyHYuGe28EnM7k2HUZb074DGMIdNzPB2pBP7nfOGSAKaQCXUD3B7rA0RF3FbZg7fC0hBANNkxnQ6glRKftB55tV2xfnWVqRt2bPL0GDdyKm1ec4UZvrk2tcNe5T%2BK4D0K4SekaeK1&X-Amz-Signature=67ffeecb3e1a788ba6caaf753170f2e638254625aa75add102d54b5270d9ac7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJ74YVW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHVLHeObLO6CsLfjx%2B%2FioCBFbFWiCeWJwACRfhNbjp5fAiEA9ZVu%2FBv5kWTV1v67Y5vhZ%2Fc%2BlhHEosdDvOX7kmUZQx4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDL%2Bv8GqBeYINQHcklSrcA8gjWrypI45Uz9L4OEtifuM2G4m85N50rVW%2BH5Wm157SbC%2B2seqD%2FDWChnKWQYnhnqAFpzXrzqRm%2FQtkrT581rg%2BMB4xLKaCmJfn%2B6FH35DmoXcSB%2Bf3Ua8%2FZ00ZLmf7PuoCA7BvA1TLR83FpP3s8h5ihmFy1k8EWLym0EDzO6y%2Fg8Qbrg8Hw8A2FEm37q9bYerQRfvUKy106Y3D7nzEShuu8U6aU0YNf2WFPCuyA9IrdxFg9%2BUblEtG4yUIHCYCrkXf%2Ff7NFZBvL8ZkfDXnfLDjFS%2BLAOBJWkk6UHfgaznXhLGQBpzcIPKx4echQS3zXFP9eQMUkurAVhbh7PR5pE2cDrPYTVUSiiE%2FYmDILke6bQLM9XiCXOLd7bPrMjUJTdhK7JUcrfdWAQOy7daGSnt5PXoEM%2F3rFny7Vuwz08LsrSgMwzClU78C16%2F19PGBzpYG2LgB%2Ba8VfRwh%2FLyUHDCaDwijqmEAk9F2zVrn9j0RH4Ttp1chv8xA6jLAqzLvWfgKQcvRVIusWA8ot3dHhiPxT4hKDSd0OqtOL4%2FVShEPtT8BZqkRwcj%2BC4dRgWXBPg2%2Fk2QdS8UcUMORiWYAxDAU5BnV9xtw3U6e3kphNeLJcKxPuZPfkDGunw%2F1MI3rzsQGOqUBo0G9kNGTAGUFMXNMRcNSbSs%2FlOGrznspY5%2F%2FAH3xE6w4CSf4bRjfvlFsvkEk4RiuvaxtCV6p1r7a9nkAyuVEyHYuGe28EnM7k2HUZb074DGMIdNzPB2pBP7nfOGSAKaQCXUD3B7rA0RF3FbZg7fC0hBANNkxnQ6glRKftB55tV2xfnWVqRt2bPL0GDdyKm1ec4UZvrk2tcNe5T%2BK4D0K4SekaeK1&X-Amz-Signature=b8f6c142519dd425370002ccfe1639368299d4f6aca9b6166cae8c4b3f21fd64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGGBKXF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGyQm9nfgiXHJRv4twveGcYWp4fDbEYZzgvMTxjbdA8uAiEAkQYQGu919fwlgT7GcjAxveF1ePKv965%2FjMyDokH%2FQz8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOdzPyzeylQ0NsYs%2FyrcA8Gt8ECjw4BzFpO%2FNxCOhPP4ViRITCM%2BUbuhfmtJUm00fDNaH%2FW%2F74swO3k7e1VhCDM%2BQSRQ2r5zXIqoB2ri1CDnO2d4a0I2bBQQ9n33%2FlZr1e%2F6xneENL22dC6KBth42DevJfhyGGOAcJCaKyZNWTGyP5WejjpT%2BPzfPstOmXuD%2B10FoaowDns26KlN88BAsz6w0Nj6VsKkNTdPwIrrQmyKJvNNmxVvLFKH6xsaX0TOR28oaK%2FjK8%2BlD8CUgNsQV%2FXxf1pzgBR5j4i9fi0hKIVsrv7ZheDOFdm0F5V0Lp%2FJj46Xxh%2For85c8qAwU%2Beq%2B%2FIEVfBElRiv9ScSgBjROuj0Nhf%2BSW5E9jRT%2FNv0GllMjEugxxLo8vWtaFtuNRNuMNqQGjka74fVLA%2FmRXdqNqia8Y6NsjEiDJq5uyT2uYa30sNpaKx8mXdL0yIebxdnjUMMVHLS4rh%2Fme8U91Ow9h%2BNRLTrZ1j1gAXyv2NnECL5394NYFomsyO1aev41VHl%2FzBQQYX%2B9IdUfmdLOuwFhj9bFF%2Fb3r4a%2BrWC%2FnVmwovifee24S8mn6OzqdV4SfFWnfNAxPz8%2BVnG2LKEl5rwoPrjjpkiCJ%2FBAUsgTXKKwqCXA7jvqzR9wJuBHty5MIzrzsQGOqUBVXJkLs4FZK8GhkHXYOKTA3xiKYjLjzu4vxvkv0BvFT%2FHM3hkOh1bxfrC7qMBXspmQAEEfXcTmi32%2FGUiqY2g6jpjOxOml4nU5SoYyi2eIUQYyhSo1DO1r8SDbV4ILNiNkr41OIMYrboX%2FC0iGPZo9dWgFn14g2ZA282JklTb9X9sTK2koBiVqFeHk4l3v%2BOSHUpp7P6JWAnsaTDkHW9IAhy%2BmJqu&X-Amz-Signature=f1333ae875c32b5c013b73acf2d3cf953b41348f44776ad424b606d3a561d5cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJ74YVW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHVLHeObLO6CsLfjx%2B%2FioCBFbFWiCeWJwACRfhNbjp5fAiEA9ZVu%2FBv5kWTV1v67Y5vhZ%2Fc%2BlhHEosdDvOX7kmUZQx4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDL%2Bv8GqBeYINQHcklSrcA8gjWrypI45Uz9L4OEtifuM2G4m85N50rVW%2BH5Wm157SbC%2B2seqD%2FDWChnKWQYnhnqAFpzXrzqRm%2FQtkrT581rg%2BMB4xLKaCmJfn%2B6FH35DmoXcSB%2Bf3Ua8%2FZ00ZLmf7PuoCA7BvA1TLR83FpP3s8h5ihmFy1k8EWLym0EDzO6y%2Fg8Qbrg8Hw8A2FEm37q9bYerQRfvUKy106Y3D7nzEShuu8U6aU0YNf2WFPCuyA9IrdxFg9%2BUblEtG4yUIHCYCrkXf%2Ff7NFZBvL8ZkfDXnfLDjFS%2BLAOBJWkk6UHfgaznXhLGQBpzcIPKx4echQS3zXFP9eQMUkurAVhbh7PR5pE2cDrPYTVUSiiE%2FYmDILke6bQLM9XiCXOLd7bPrMjUJTdhK7JUcrfdWAQOy7daGSnt5PXoEM%2F3rFny7Vuwz08LsrSgMwzClU78C16%2F19PGBzpYG2LgB%2Ba8VfRwh%2FLyUHDCaDwijqmEAk9F2zVrn9j0RH4Ttp1chv8xA6jLAqzLvWfgKQcvRVIusWA8ot3dHhiPxT4hKDSd0OqtOL4%2FVShEPtT8BZqkRwcj%2BC4dRgWXBPg2%2Fk2QdS8UcUMORiWYAxDAU5BnV9xtw3U6e3kphNeLJcKxPuZPfkDGunw%2F1MI3rzsQGOqUBo0G9kNGTAGUFMXNMRcNSbSs%2FlOGrznspY5%2F%2FAH3xE6w4CSf4bRjfvlFsvkEk4RiuvaxtCV6p1r7a9nkAyuVEyHYuGe28EnM7k2HUZb074DGMIdNzPB2pBP7nfOGSAKaQCXUD3B7rA0RF3FbZg7fC0hBANNkxnQ6glRKftB55tV2xfnWVqRt2bPL0GDdyKm1ec4UZvrk2tcNe5T%2BK4D0K4SekaeK1&X-Amz-Signature=3eaa6e07b8127fffded358a37823e8a601ccc3022de184560a0545c6ea67468b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJ74YVW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHVLHeObLO6CsLfjx%2B%2FioCBFbFWiCeWJwACRfhNbjp5fAiEA9ZVu%2FBv5kWTV1v67Y5vhZ%2Fc%2BlhHEosdDvOX7kmUZQx4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDL%2Bv8GqBeYINQHcklSrcA8gjWrypI45Uz9L4OEtifuM2G4m85N50rVW%2BH5Wm157SbC%2B2seqD%2FDWChnKWQYnhnqAFpzXrzqRm%2FQtkrT581rg%2BMB4xLKaCmJfn%2B6FH35DmoXcSB%2Bf3Ua8%2FZ00ZLmf7PuoCA7BvA1TLR83FpP3s8h5ihmFy1k8EWLym0EDzO6y%2Fg8Qbrg8Hw8A2FEm37q9bYerQRfvUKy106Y3D7nzEShuu8U6aU0YNf2WFPCuyA9IrdxFg9%2BUblEtG4yUIHCYCrkXf%2Ff7NFZBvL8ZkfDXnfLDjFS%2BLAOBJWkk6UHfgaznXhLGQBpzcIPKx4echQS3zXFP9eQMUkurAVhbh7PR5pE2cDrPYTVUSiiE%2FYmDILke6bQLM9XiCXOLd7bPrMjUJTdhK7JUcrfdWAQOy7daGSnt5PXoEM%2F3rFny7Vuwz08LsrSgMwzClU78C16%2F19PGBzpYG2LgB%2Ba8VfRwh%2FLyUHDCaDwijqmEAk9F2zVrn9j0RH4Ttp1chv8xA6jLAqzLvWfgKQcvRVIusWA8ot3dHhiPxT4hKDSd0OqtOL4%2FVShEPtT8BZqkRwcj%2BC4dRgWXBPg2%2Fk2QdS8UcUMORiWYAxDAU5BnV9xtw3U6e3kphNeLJcKxPuZPfkDGunw%2F1MI3rzsQGOqUBo0G9kNGTAGUFMXNMRcNSbSs%2FlOGrznspY5%2F%2FAH3xE6w4CSf4bRjfvlFsvkEk4RiuvaxtCV6p1r7a9nkAyuVEyHYuGe28EnM7k2HUZb074DGMIdNzPB2pBP7nfOGSAKaQCXUD3B7rA0RF3FbZg7fC0hBANNkxnQ6glRKftB55tV2xfnWVqRt2bPL0GDdyKm1ec4UZvrk2tcNe5T%2BK4D0K4SekaeK1&X-Amz-Signature=06ad2fedc8756ca7fa2e77cff8b04a8944933f6c4048c314c3f2b604aa6d7e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJ74YVW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHVLHeObLO6CsLfjx%2B%2FioCBFbFWiCeWJwACRfhNbjp5fAiEA9ZVu%2FBv5kWTV1v67Y5vhZ%2Fc%2BlhHEosdDvOX7kmUZQx4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDL%2Bv8GqBeYINQHcklSrcA8gjWrypI45Uz9L4OEtifuM2G4m85N50rVW%2BH5Wm157SbC%2B2seqD%2FDWChnKWQYnhnqAFpzXrzqRm%2FQtkrT581rg%2BMB4xLKaCmJfn%2B6FH35DmoXcSB%2Bf3Ua8%2FZ00ZLmf7PuoCA7BvA1TLR83FpP3s8h5ihmFy1k8EWLym0EDzO6y%2Fg8Qbrg8Hw8A2FEm37q9bYerQRfvUKy106Y3D7nzEShuu8U6aU0YNf2WFPCuyA9IrdxFg9%2BUblEtG4yUIHCYCrkXf%2Ff7NFZBvL8ZkfDXnfLDjFS%2BLAOBJWkk6UHfgaznXhLGQBpzcIPKx4echQS3zXFP9eQMUkurAVhbh7PR5pE2cDrPYTVUSiiE%2FYmDILke6bQLM9XiCXOLd7bPrMjUJTdhK7JUcrfdWAQOy7daGSnt5PXoEM%2F3rFny7Vuwz08LsrSgMwzClU78C16%2F19PGBzpYG2LgB%2Ba8VfRwh%2FLyUHDCaDwijqmEAk9F2zVrn9j0RH4Ttp1chv8xA6jLAqzLvWfgKQcvRVIusWA8ot3dHhiPxT4hKDSd0OqtOL4%2FVShEPtT8BZqkRwcj%2BC4dRgWXBPg2%2Fk2QdS8UcUMORiWYAxDAU5BnV9xtw3U6e3kphNeLJcKxPuZPfkDGunw%2F1MI3rzsQGOqUBo0G9kNGTAGUFMXNMRcNSbSs%2FlOGrznspY5%2F%2FAH3xE6w4CSf4bRjfvlFsvkEk4RiuvaxtCV6p1r7a9nkAyuVEyHYuGe28EnM7k2HUZb074DGMIdNzPB2pBP7nfOGSAKaQCXUD3B7rA0RF3FbZg7fC0hBANNkxnQ6glRKftB55tV2xfnWVqRt2bPL0GDdyKm1ec4UZvrk2tcNe5T%2BK4D0K4SekaeK1&X-Amz-Signature=860fe356d46c2838e7b81e6e387cd4e43bdc33b172f436db1e686c1b8116c398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJ74YVW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHVLHeObLO6CsLfjx%2B%2FioCBFbFWiCeWJwACRfhNbjp5fAiEA9ZVu%2FBv5kWTV1v67Y5vhZ%2Fc%2BlhHEosdDvOX7kmUZQx4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDL%2Bv8GqBeYINQHcklSrcA8gjWrypI45Uz9L4OEtifuM2G4m85N50rVW%2BH5Wm157SbC%2B2seqD%2FDWChnKWQYnhnqAFpzXrzqRm%2FQtkrT581rg%2BMB4xLKaCmJfn%2B6FH35DmoXcSB%2Bf3Ua8%2FZ00ZLmf7PuoCA7BvA1TLR83FpP3s8h5ihmFy1k8EWLym0EDzO6y%2Fg8Qbrg8Hw8A2FEm37q9bYerQRfvUKy106Y3D7nzEShuu8U6aU0YNf2WFPCuyA9IrdxFg9%2BUblEtG4yUIHCYCrkXf%2Ff7NFZBvL8ZkfDXnfLDjFS%2BLAOBJWkk6UHfgaznXhLGQBpzcIPKx4echQS3zXFP9eQMUkurAVhbh7PR5pE2cDrPYTVUSiiE%2FYmDILke6bQLM9XiCXOLd7bPrMjUJTdhK7JUcrfdWAQOy7daGSnt5PXoEM%2F3rFny7Vuwz08LsrSgMwzClU78C16%2F19PGBzpYG2LgB%2Ba8VfRwh%2FLyUHDCaDwijqmEAk9F2zVrn9j0RH4Ttp1chv8xA6jLAqzLvWfgKQcvRVIusWA8ot3dHhiPxT4hKDSd0OqtOL4%2FVShEPtT8BZqkRwcj%2BC4dRgWXBPg2%2Fk2QdS8UcUMORiWYAxDAU5BnV9xtw3U6e3kphNeLJcKxPuZPfkDGunw%2F1MI3rzsQGOqUBo0G9kNGTAGUFMXNMRcNSbSs%2FlOGrznspY5%2F%2FAH3xE6w4CSf4bRjfvlFsvkEk4RiuvaxtCV6p1r7a9nkAyuVEyHYuGe28EnM7k2HUZb074DGMIdNzPB2pBP7nfOGSAKaQCXUD3B7rA0RF3FbZg7fC0hBANNkxnQ6glRKftB55tV2xfnWVqRt2bPL0GDdyKm1ec4UZvrk2tcNe5T%2BK4D0K4SekaeK1&X-Amz-Signature=a335bb544d874520c56cb2dc13123da93205ee6297dab69580a6261c25698143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJ74YVW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHVLHeObLO6CsLfjx%2B%2FioCBFbFWiCeWJwACRfhNbjp5fAiEA9ZVu%2FBv5kWTV1v67Y5vhZ%2Fc%2BlhHEosdDvOX7kmUZQx4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDL%2Bv8GqBeYINQHcklSrcA8gjWrypI45Uz9L4OEtifuM2G4m85N50rVW%2BH5Wm157SbC%2B2seqD%2FDWChnKWQYnhnqAFpzXrzqRm%2FQtkrT581rg%2BMB4xLKaCmJfn%2B6FH35DmoXcSB%2Bf3Ua8%2FZ00ZLmf7PuoCA7BvA1TLR83FpP3s8h5ihmFy1k8EWLym0EDzO6y%2Fg8Qbrg8Hw8A2FEm37q9bYerQRfvUKy106Y3D7nzEShuu8U6aU0YNf2WFPCuyA9IrdxFg9%2BUblEtG4yUIHCYCrkXf%2Ff7NFZBvL8ZkfDXnfLDjFS%2BLAOBJWkk6UHfgaznXhLGQBpzcIPKx4echQS3zXFP9eQMUkurAVhbh7PR5pE2cDrPYTVUSiiE%2FYmDILke6bQLM9XiCXOLd7bPrMjUJTdhK7JUcrfdWAQOy7daGSnt5PXoEM%2F3rFny7Vuwz08LsrSgMwzClU78C16%2F19PGBzpYG2LgB%2Ba8VfRwh%2FLyUHDCaDwijqmEAk9F2zVrn9j0RH4Ttp1chv8xA6jLAqzLvWfgKQcvRVIusWA8ot3dHhiPxT4hKDSd0OqtOL4%2FVShEPtT8BZqkRwcj%2BC4dRgWXBPg2%2Fk2QdS8UcUMORiWYAxDAU5BnV9xtw3U6e3kphNeLJcKxPuZPfkDGunw%2F1MI3rzsQGOqUBo0G9kNGTAGUFMXNMRcNSbSs%2FlOGrznspY5%2F%2FAH3xE6w4CSf4bRjfvlFsvkEk4RiuvaxtCV6p1r7a9nkAyuVEyHYuGe28EnM7k2HUZb074DGMIdNzPB2pBP7nfOGSAKaQCXUD3B7rA0RF3FbZg7fC0hBANNkxnQ6glRKftB55tV2xfnWVqRt2bPL0GDdyKm1ec4UZvrk2tcNe5T%2BK4D0K4SekaeK1&X-Amz-Signature=87077176c766ce13c050ef3533975d11f1b62729d9ad18b9330102de2cc630f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJ74YVW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHVLHeObLO6CsLfjx%2B%2FioCBFbFWiCeWJwACRfhNbjp5fAiEA9ZVu%2FBv5kWTV1v67Y5vhZ%2Fc%2BlhHEosdDvOX7kmUZQx4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDL%2Bv8GqBeYINQHcklSrcA8gjWrypI45Uz9L4OEtifuM2G4m85N50rVW%2BH5Wm157SbC%2B2seqD%2FDWChnKWQYnhnqAFpzXrzqRm%2FQtkrT581rg%2BMB4xLKaCmJfn%2B6FH35DmoXcSB%2Bf3Ua8%2FZ00ZLmf7PuoCA7BvA1TLR83FpP3s8h5ihmFy1k8EWLym0EDzO6y%2Fg8Qbrg8Hw8A2FEm37q9bYerQRfvUKy106Y3D7nzEShuu8U6aU0YNf2WFPCuyA9IrdxFg9%2BUblEtG4yUIHCYCrkXf%2Ff7NFZBvL8ZkfDXnfLDjFS%2BLAOBJWkk6UHfgaznXhLGQBpzcIPKx4echQS3zXFP9eQMUkurAVhbh7PR5pE2cDrPYTVUSiiE%2FYmDILke6bQLM9XiCXOLd7bPrMjUJTdhK7JUcrfdWAQOy7daGSnt5PXoEM%2F3rFny7Vuwz08LsrSgMwzClU78C16%2F19PGBzpYG2LgB%2Ba8VfRwh%2FLyUHDCaDwijqmEAk9F2zVrn9j0RH4Ttp1chv8xA6jLAqzLvWfgKQcvRVIusWA8ot3dHhiPxT4hKDSd0OqtOL4%2FVShEPtT8BZqkRwcj%2BC4dRgWXBPg2%2Fk2QdS8UcUMORiWYAxDAU5BnV9xtw3U6e3kphNeLJcKxPuZPfkDGunw%2F1MI3rzsQGOqUBo0G9kNGTAGUFMXNMRcNSbSs%2FlOGrznspY5%2F%2FAH3xE6w4CSf4bRjfvlFsvkEk4RiuvaxtCV6p1r7a9nkAyuVEyHYuGe28EnM7k2HUZb074DGMIdNzPB2pBP7nfOGSAKaQCXUD3B7rA0RF3FbZg7fC0hBANNkxnQ6glRKftB55tV2xfnWVqRt2bPL0GDdyKm1ec4UZvrk2tcNe5T%2BK4D0K4SekaeK1&X-Amz-Signature=872d59262dcefee75f189df6f517476fdc81c6a49e5efea47bae6895fd4f98a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
