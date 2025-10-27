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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEMCHEDB%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyoJ4Fd2uU90%2B6149FHuLpT4MkeFnDK4XlRPxc8r%2FWCAiA6KertpAyqHTgzw4I7XoiKx2LriX9BgZ98iCCXe5Vu6iqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSvs1G%2FwbzVaMa5GKtwDsaBPVHr9b%2FDWgUWy1lEdkXu6914FzfcSfzSFqHB%2BS%2Fj6YmL9JR6VUjPXlI19uuGKsKqzi9loyqd9RM3czXMkW9jrPF3quExH4OCVbmlQf7Voj37m4i3fOSmk7QupE6KTW4NerDuSU%2FNLjaDDB%2FCHOkp2Ybpko%2BNn%2BcUC3Z2QKjnodlcg35a6GcdBnrAn%2FaPL72pmhDAmpPftWp6%2FzzXHdz%2BSXK5gTHvDSaVk1CKAr3dPDRviQ9Ig9PByWo8g6VuRCr3VVFHG1wL5serJcxnRUe15vxp2XHy%2F%2BKBKhVGZ62sJ1QDla5AO3fG1u%2B0X%2BVLb1Ch80pWiahDPttsipthil05C86eHS4Spm5BsFjqxiZ3pRefpMZ4a1hLqeJc0pzXn5f14lAOQmxbBKWtXTWVFLU%2Buv%2F0GT5FIAuZAdbciJ%2Biu8Qdd1Rym2Zr9vAcia1iYeQZKj2jtK5YxN8pmrfA8MoWLrYqz%2BmfkBABbjnwcAM2%2BXF3A5UKweKTs6F3dcrxBWNVtvaOgl%2B3yQmVvkF%2BRK4ku5AMkw1ZjUGLUeytDWrwbOlsAMznVZpJyXITZqFBnIGHlCHRd1QwYCBAZk7VubfLhz2DjhgeBqK4jdTcCK%2BRfnxF%2FYSEcDPm8Ljcw6o37xwY6pgEeWI2uI%2FGk%2FNUX8MRMCpO37P4X%2FuPFgOKYsDmeZ3O0m6ZDME06JldNSpBxiX5LMsPeTrJiNODNhs8fGh2LyE9ESr9Sx%2FE0n0CUZO70nEPopdiBbd%2FQGFBHZI8ZAl1nQhJ%2BMiDSqNDtpWX3b0kc7tGjudgqZFenMUwqpBbzTOewIqjuKzou2UkykoZ5g3HnktmMpAMGnT%2BZJlxyMd3lMODTZOGOlS6F&X-Amz-Signature=0d017ba3a2bb7b268801dee483de8e98a2a8643a48a971067ca39dde5534de94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEMCHEDB%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyoJ4Fd2uU90%2B6149FHuLpT4MkeFnDK4XlRPxc8r%2FWCAiA6KertpAyqHTgzw4I7XoiKx2LriX9BgZ98iCCXe5Vu6iqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSvs1G%2FwbzVaMa5GKtwDsaBPVHr9b%2FDWgUWy1lEdkXu6914FzfcSfzSFqHB%2BS%2Fj6YmL9JR6VUjPXlI19uuGKsKqzi9loyqd9RM3czXMkW9jrPF3quExH4OCVbmlQf7Voj37m4i3fOSmk7QupE6KTW4NerDuSU%2FNLjaDDB%2FCHOkp2Ybpko%2BNn%2BcUC3Z2QKjnodlcg35a6GcdBnrAn%2FaPL72pmhDAmpPftWp6%2FzzXHdz%2BSXK5gTHvDSaVk1CKAr3dPDRviQ9Ig9PByWo8g6VuRCr3VVFHG1wL5serJcxnRUe15vxp2XHy%2F%2BKBKhVGZ62sJ1QDla5AO3fG1u%2B0X%2BVLb1Ch80pWiahDPttsipthil05C86eHS4Spm5BsFjqxiZ3pRefpMZ4a1hLqeJc0pzXn5f14lAOQmxbBKWtXTWVFLU%2Buv%2F0GT5FIAuZAdbciJ%2Biu8Qdd1Rym2Zr9vAcia1iYeQZKj2jtK5YxN8pmrfA8MoWLrYqz%2BmfkBABbjnwcAM2%2BXF3A5UKweKTs6F3dcrxBWNVtvaOgl%2B3yQmVvkF%2BRK4ku5AMkw1ZjUGLUeytDWrwbOlsAMznVZpJyXITZqFBnIGHlCHRd1QwYCBAZk7VubfLhz2DjhgeBqK4jdTcCK%2BRfnxF%2FYSEcDPm8Ljcw6o37xwY6pgEeWI2uI%2FGk%2FNUX8MRMCpO37P4X%2FuPFgOKYsDmeZ3O0m6ZDME06JldNSpBxiX5LMsPeTrJiNODNhs8fGh2LyE9ESr9Sx%2FE0n0CUZO70nEPopdiBbd%2FQGFBHZI8ZAl1nQhJ%2BMiDSqNDtpWX3b0kc7tGjudgqZFenMUwqpBbzTOewIqjuKzou2UkykoZ5g3HnktmMpAMGnT%2BZJlxyMd3lMODTZOGOlS6F&X-Amz-Signature=4977293e5701a0a70247d964600e488dc0a85804c38fb434d6325b6859047792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEMCHEDB%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyoJ4Fd2uU90%2B6149FHuLpT4MkeFnDK4XlRPxc8r%2FWCAiA6KertpAyqHTgzw4I7XoiKx2LriX9BgZ98iCCXe5Vu6iqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSvs1G%2FwbzVaMa5GKtwDsaBPVHr9b%2FDWgUWy1lEdkXu6914FzfcSfzSFqHB%2BS%2Fj6YmL9JR6VUjPXlI19uuGKsKqzi9loyqd9RM3czXMkW9jrPF3quExH4OCVbmlQf7Voj37m4i3fOSmk7QupE6KTW4NerDuSU%2FNLjaDDB%2FCHOkp2Ybpko%2BNn%2BcUC3Z2QKjnodlcg35a6GcdBnrAn%2FaPL72pmhDAmpPftWp6%2FzzXHdz%2BSXK5gTHvDSaVk1CKAr3dPDRviQ9Ig9PByWo8g6VuRCr3VVFHG1wL5serJcxnRUe15vxp2XHy%2F%2BKBKhVGZ62sJ1QDla5AO3fG1u%2B0X%2BVLb1Ch80pWiahDPttsipthil05C86eHS4Spm5BsFjqxiZ3pRefpMZ4a1hLqeJc0pzXn5f14lAOQmxbBKWtXTWVFLU%2Buv%2F0GT5FIAuZAdbciJ%2Biu8Qdd1Rym2Zr9vAcia1iYeQZKj2jtK5YxN8pmrfA8MoWLrYqz%2BmfkBABbjnwcAM2%2BXF3A5UKweKTs6F3dcrxBWNVtvaOgl%2B3yQmVvkF%2BRK4ku5AMkw1ZjUGLUeytDWrwbOlsAMznVZpJyXITZqFBnIGHlCHRd1QwYCBAZk7VubfLhz2DjhgeBqK4jdTcCK%2BRfnxF%2FYSEcDPm8Ljcw6o37xwY6pgEeWI2uI%2FGk%2FNUX8MRMCpO37P4X%2FuPFgOKYsDmeZ3O0m6ZDME06JldNSpBxiX5LMsPeTrJiNODNhs8fGh2LyE9ESr9Sx%2FE0n0CUZO70nEPopdiBbd%2FQGFBHZI8ZAl1nQhJ%2BMiDSqNDtpWX3b0kc7tGjudgqZFenMUwqpBbzTOewIqjuKzou2UkykoZ5g3HnktmMpAMGnT%2BZJlxyMd3lMODTZOGOlS6F&X-Amz-Signature=4b1886799f0e5c6f1982e528903f89cbf0910b984f9a37cb9b5a2e318c223994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEMCHEDB%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyoJ4Fd2uU90%2B6149FHuLpT4MkeFnDK4XlRPxc8r%2FWCAiA6KertpAyqHTgzw4I7XoiKx2LriX9BgZ98iCCXe5Vu6iqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSvs1G%2FwbzVaMa5GKtwDsaBPVHr9b%2FDWgUWy1lEdkXu6914FzfcSfzSFqHB%2BS%2Fj6YmL9JR6VUjPXlI19uuGKsKqzi9loyqd9RM3czXMkW9jrPF3quExH4OCVbmlQf7Voj37m4i3fOSmk7QupE6KTW4NerDuSU%2FNLjaDDB%2FCHOkp2Ybpko%2BNn%2BcUC3Z2QKjnodlcg35a6GcdBnrAn%2FaPL72pmhDAmpPftWp6%2FzzXHdz%2BSXK5gTHvDSaVk1CKAr3dPDRviQ9Ig9PByWo8g6VuRCr3VVFHG1wL5serJcxnRUe15vxp2XHy%2F%2BKBKhVGZ62sJ1QDla5AO3fG1u%2B0X%2BVLb1Ch80pWiahDPttsipthil05C86eHS4Spm5BsFjqxiZ3pRefpMZ4a1hLqeJc0pzXn5f14lAOQmxbBKWtXTWVFLU%2Buv%2F0GT5FIAuZAdbciJ%2Biu8Qdd1Rym2Zr9vAcia1iYeQZKj2jtK5YxN8pmrfA8MoWLrYqz%2BmfkBABbjnwcAM2%2BXF3A5UKweKTs6F3dcrxBWNVtvaOgl%2B3yQmVvkF%2BRK4ku5AMkw1ZjUGLUeytDWrwbOlsAMznVZpJyXITZqFBnIGHlCHRd1QwYCBAZk7VubfLhz2DjhgeBqK4jdTcCK%2BRfnxF%2FYSEcDPm8Ljcw6o37xwY6pgEeWI2uI%2FGk%2FNUX8MRMCpO37P4X%2FuPFgOKYsDmeZ3O0m6ZDME06JldNSpBxiX5LMsPeTrJiNODNhs8fGh2LyE9ESr9Sx%2FE0n0CUZO70nEPopdiBbd%2FQGFBHZI8ZAl1nQhJ%2BMiDSqNDtpWX3b0kc7tGjudgqZFenMUwqpBbzTOewIqjuKzou2UkykoZ5g3HnktmMpAMGnT%2BZJlxyMd3lMODTZOGOlS6F&X-Amz-Signature=2e835a4ea1f9c32a1ebc4722be0e0f977e5fae202c9b6d31cd4f6e102fb0d346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GUHBF33%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJZQj43vzrOVJhDnmtKMmocixYto8UiNXBMR%2F3RVXiHAiBR9eT%2FFIS5spj5PlwGCvvVq77w7f4Z1G7BcDRO7sNXKSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI8Cp4oJAjblYIXvrKtwDSirY9qhWYj5huo8xzHA%2FDXT%2BT0NsdXyAIO5TkI3GtuNopWdYUuh4PMPY511Ju2PEHfnfbUd8iscAljWZVU7kN3DYsLxk%2BFK5QMrZlu3QfgT3Kfg7kEnXaHej4yScsj6siO%2BNSkBOP0Oa6r9Apb7p%2Bz%2BF%2FYIS3FHPb4MnqIw2p2iksFXNYXq1ytzPqQWnvXx90GoRuDCby7MSWrGZTI1plrlyN56Zl2ihPx6JWHLiuifsGDiN2MPj0QHWSHM321e5EQ1uLrXyWiIyjfxC6ebbaAFCSpM9hqbxR3ub%2B1Xelqfgm75%2FkegMFHdMmlPE3ioT0364XsWW4c4eLo2l06envv4jJTZl3zLc7T3gMWFfr%2F8rexf0Qomx0y7%2BFDdKAbC3an0Ak%2F0whHsan60qzWkduAFBgl%2FEqB0UQWMsPj8GW69Cc8vR0kADTKfaLhAurLXa%2BKoVjoy4fo9zQlNsvaQxknEHZkiNjNgzHbTnwVymBZvU2RGYV3SgbB0f5t1EYMa29QD5VpShlPUHdzEW7GnxPrcROmzYCaJbaRQb5ZZOxhPK%2Fb7pK%2BrIq0b7QKM31A9ITz3gjuDkP7GBz9bZ5S%2Fz2dDADrDpDv9yxySm5QI2od8VGY8s0iF0JUxxlB4wkI%2F7xwY6pgGV8qnX%2BmDfMGg%2Ba8Dq4SEh4v%2FFxSIHdbOo%2FkrZOcDx8Ol7Qns7bgeWWCmRWlzFkAIkBo1Ylxj44mOECLZFClLAoMUxU285QWeIFFDnPWt%2FVewJUdFzui2KPnd1EWV9MhGcejV6B%2BfQ59w0sCoWCVs5%2FDhrPXO4rYq2NYumitWM2xM5%2BwzstFfpgBwrmBvH4Zdw847UIA8NjMy43LPwR%2FsfzKosVjay&X-Amz-Signature=a5a6e77e6c71ba130ffce171f800ab8d3298b88e8bbe40bc4c7f9bae8f330fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEMCHEDB%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyoJ4Fd2uU90%2B6149FHuLpT4MkeFnDK4XlRPxc8r%2FWCAiA6KertpAyqHTgzw4I7XoiKx2LriX9BgZ98iCCXe5Vu6iqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSvs1G%2FwbzVaMa5GKtwDsaBPVHr9b%2FDWgUWy1lEdkXu6914FzfcSfzSFqHB%2BS%2Fj6YmL9JR6VUjPXlI19uuGKsKqzi9loyqd9RM3czXMkW9jrPF3quExH4OCVbmlQf7Voj37m4i3fOSmk7QupE6KTW4NerDuSU%2FNLjaDDB%2FCHOkp2Ybpko%2BNn%2BcUC3Z2QKjnodlcg35a6GcdBnrAn%2FaPL72pmhDAmpPftWp6%2FzzXHdz%2BSXK5gTHvDSaVk1CKAr3dPDRviQ9Ig9PByWo8g6VuRCr3VVFHG1wL5serJcxnRUe15vxp2XHy%2F%2BKBKhVGZ62sJ1QDla5AO3fG1u%2B0X%2BVLb1Ch80pWiahDPttsipthil05C86eHS4Spm5BsFjqxiZ3pRefpMZ4a1hLqeJc0pzXn5f14lAOQmxbBKWtXTWVFLU%2Buv%2F0GT5FIAuZAdbciJ%2Biu8Qdd1Rym2Zr9vAcia1iYeQZKj2jtK5YxN8pmrfA8MoWLrYqz%2BmfkBABbjnwcAM2%2BXF3A5UKweKTs6F3dcrxBWNVtvaOgl%2B3yQmVvkF%2BRK4ku5AMkw1ZjUGLUeytDWrwbOlsAMznVZpJyXITZqFBnIGHlCHRd1QwYCBAZk7VubfLhz2DjhgeBqK4jdTcCK%2BRfnxF%2FYSEcDPm8Ljcw6o37xwY6pgEeWI2uI%2FGk%2FNUX8MRMCpO37P4X%2FuPFgOKYsDmeZ3O0m6ZDME06JldNSpBxiX5LMsPeTrJiNODNhs8fGh2LyE9ESr9Sx%2FE0n0CUZO70nEPopdiBbd%2FQGFBHZI8ZAl1nQhJ%2BMiDSqNDtpWX3b0kc7tGjudgqZFenMUwqpBbzTOewIqjuKzou2UkykoZ5g3HnktmMpAMGnT%2BZJlxyMd3lMODTZOGOlS6F&X-Amz-Signature=1fb1aa4aaafd0ed52db8d2f7be211e95102da87282984adeb85645792411b7ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEMCHEDB%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyoJ4Fd2uU90%2B6149FHuLpT4MkeFnDK4XlRPxc8r%2FWCAiA6KertpAyqHTgzw4I7XoiKx2LriX9BgZ98iCCXe5Vu6iqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSvs1G%2FwbzVaMa5GKtwDsaBPVHr9b%2FDWgUWy1lEdkXu6914FzfcSfzSFqHB%2BS%2Fj6YmL9JR6VUjPXlI19uuGKsKqzi9loyqd9RM3czXMkW9jrPF3quExH4OCVbmlQf7Voj37m4i3fOSmk7QupE6KTW4NerDuSU%2FNLjaDDB%2FCHOkp2Ybpko%2BNn%2BcUC3Z2QKjnodlcg35a6GcdBnrAn%2FaPL72pmhDAmpPftWp6%2FzzXHdz%2BSXK5gTHvDSaVk1CKAr3dPDRviQ9Ig9PByWo8g6VuRCr3VVFHG1wL5serJcxnRUe15vxp2XHy%2F%2BKBKhVGZ62sJ1QDla5AO3fG1u%2B0X%2BVLb1Ch80pWiahDPttsipthil05C86eHS4Spm5BsFjqxiZ3pRefpMZ4a1hLqeJc0pzXn5f14lAOQmxbBKWtXTWVFLU%2Buv%2F0GT5FIAuZAdbciJ%2Biu8Qdd1Rym2Zr9vAcia1iYeQZKj2jtK5YxN8pmrfA8MoWLrYqz%2BmfkBABbjnwcAM2%2BXF3A5UKweKTs6F3dcrxBWNVtvaOgl%2B3yQmVvkF%2BRK4ku5AMkw1ZjUGLUeytDWrwbOlsAMznVZpJyXITZqFBnIGHlCHRd1QwYCBAZk7VubfLhz2DjhgeBqK4jdTcCK%2BRfnxF%2FYSEcDPm8Ljcw6o37xwY6pgEeWI2uI%2FGk%2FNUX8MRMCpO37P4X%2FuPFgOKYsDmeZ3O0m6ZDME06JldNSpBxiX5LMsPeTrJiNODNhs8fGh2LyE9ESr9Sx%2FE0n0CUZO70nEPopdiBbd%2FQGFBHZI8ZAl1nQhJ%2BMiDSqNDtpWX3b0kc7tGjudgqZFenMUwqpBbzTOewIqjuKzou2UkykoZ5g3HnktmMpAMGnT%2BZJlxyMd3lMODTZOGOlS6F&X-Amz-Signature=4b5c54a3c8a9b0469d25db9cd259e147daeb0537e8f6a3f18358082290f03f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEMCHEDB%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyoJ4Fd2uU90%2B6149FHuLpT4MkeFnDK4XlRPxc8r%2FWCAiA6KertpAyqHTgzw4I7XoiKx2LriX9BgZ98iCCXe5Vu6iqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSvs1G%2FwbzVaMa5GKtwDsaBPVHr9b%2FDWgUWy1lEdkXu6914FzfcSfzSFqHB%2BS%2Fj6YmL9JR6VUjPXlI19uuGKsKqzi9loyqd9RM3czXMkW9jrPF3quExH4OCVbmlQf7Voj37m4i3fOSmk7QupE6KTW4NerDuSU%2FNLjaDDB%2FCHOkp2Ybpko%2BNn%2BcUC3Z2QKjnodlcg35a6GcdBnrAn%2FaPL72pmhDAmpPftWp6%2FzzXHdz%2BSXK5gTHvDSaVk1CKAr3dPDRviQ9Ig9PByWo8g6VuRCr3VVFHG1wL5serJcxnRUe15vxp2XHy%2F%2BKBKhVGZ62sJ1QDla5AO3fG1u%2B0X%2BVLb1Ch80pWiahDPttsipthil05C86eHS4Spm5BsFjqxiZ3pRefpMZ4a1hLqeJc0pzXn5f14lAOQmxbBKWtXTWVFLU%2Buv%2F0GT5FIAuZAdbciJ%2Biu8Qdd1Rym2Zr9vAcia1iYeQZKj2jtK5YxN8pmrfA8MoWLrYqz%2BmfkBABbjnwcAM2%2BXF3A5UKweKTs6F3dcrxBWNVtvaOgl%2B3yQmVvkF%2BRK4ku5AMkw1ZjUGLUeytDWrwbOlsAMznVZpJyXITZqFBnIGHlCHRd1QwYCBAZk7VubfLhz2DjhgeBqK4jdTcCK%2BRfnxF%2FYSEcDPm8Ljcw6o37xwY6pgEeWI2uI%2FGk%2FNUX8MRMCpO37P4X%2FuPFgOKYsDmeZ3O0m6ZDME06JldNSpBxiX5LMsPeTrJiNODNhs8fGh2LyE9ESr9Sx%2FE0n0CUZO70nEPopdiBbd%2FQGFBHZI8ZAl1nQhJ%2BMiDSqNDtpWX3b0kc7tGjudgqZFenMUwqpBbzTOewIqjuKzou2UkykoZ5g3HnktmMpAMGnT%2BZJlxyMd3lMODTZOGOlS6F&X-Amz-Signature=6c01918db5ab814cac8b2013f34e66c37008f8197b3eb18ca4da34856bc07584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEMCHEDB%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyoJ4Fd2uU90%2B6149FHuLpT4MkeFnDK4XlRPxc8r%2FWCAiA6KertpAyqHTgzw4I7XoiKx2LriX9BgZ98iCCXe5Vu6iqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSvs1G%2FwbzVaMa5GKtwDsaBPVHr9b%2FDWgUWy1lEdkXu6914FzfcSfzSFqHB%2BS%2Fj6YmL9JR6VUjPXlI19uuGKsKqzi9loyqd9RM3czXMkW9jrPF3quExH4OCVbmlQf7Voj37m4i3fOSmk7QupE6KTW4NerDuSU%2FNLjaDDB%2FCHOkp2Ybpko%2BNn%2BcUC3Z2QKjnodlcg35a6GcdBnrAn%2FaPL72pmhDAmpPftWp6%2FzzXHdz%2BSXK5gTHvDSaVk1CKAr3dPDRviQ9Ig9PByWo8g6VuRCr3VVFHG1wL5serJcxnRUe15vxp2XHy%2F%2BKBKhVGZ62sJ1QDla5AO3fG1u%2B0X%2BVLb1Ch80pWiahDPttsipthil05C86eHS4Spm5BsFjqxiZ3pRefpMZ4a1hLqeJc0pzXn5f14lAOQmxbBKWtXTWVFLU%2Buv%2F0GT5FIAuZAdbciJ%2Biu8Qdd1Rym2Zr9vAcia1iYeQZKj2jtK5YxN8pmrfA8MoWLrYqz%2BmfkBABbjnwcAM2%2BXF3A5UKweKTs6F3dcrxBWNVtvaOgl%2B3yQmVvkF%2BRK4ku5AMkw1ZjUGLUeytDWrwbOlsAMznVZpJyXITZqFBnIGHlCHRd1QwYCBAZk7VubfLhz2DjhgeBqK4jdTcCK%2BRfnxF%2FYSEcDPm8Ljcw6o37xwY6pgEeWI2uI%2FGk%2FNUX8MRMCpO37P4X%2FuPFgOKYsDmeZ3O0m6ZDME06JldNSpBxiX5LMsPeTrJiNODNhs8fGh2LyE9ESr9Sx%2FE0n0CUZO70nEPopdiBbd%2FQGFBHZI8ZAl1nQhJ%2BMiDSqNDtpWX3b0kc7tGjudgqZFenMUwqpBbzTOewIqjuKzou2UkykoZ5g3HnktmMpAMGnT%2BZJlxyMd3lMODTZOGOlS6F&X-Amz-Signature=66b56778376c2a8eb17e07ed3ff9f8e35bf0b4f47b0f4fe3d28e5c081c3980a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEMCHEDB%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyoJ4Fd2uU90%2B6149FHuLpT4MkeFnDK4XlRPxc8r%2FWCAiA6KertpAyqHTgzw4I7XoiKx2LriX9BgZ98iCCXe5Vu6iqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSvs1G%2FwbzVaMa5GKtwDsaBPVHr9b%2FDWgUWy1lEdkXu6914FzfcSfzSFqHB%2BS%2Fj6YmL9JR6VUjPXlI19uuGKsKqzi9loyqd9RM3czXMkW9jrPF3quExH4OCVbmlQf7Voj37m4i3fOSmk7QupE6KTW4NerDuSU%2FNLjaDDB%2FCHOkp2Ybpko%2BNn%2BcUC3Z2QKjnodlcg35a6GcdBnrAn%2FaPL72pmhDAmpPftWp6%2FzzXHdz%2BSXK5gTHvDSaVk1CKAr3dPDRviQ9Ig9PByWo8g6VuRCr3VVFHG1wL5serJcxnRUe15vxp2XHy%2F%2BKBKhVGZ62sJ1QDla5AO3fG1u%2B0X%2BVLb1Ch80pWiahDPttsipthil05C86eHS4Spm5BsFjqxiZ3pRefpMZ4a1hLqeJc0pzXn5f14lAOQmxbBKWtXTWVFLU%2Buv%2F0GT5FIAuZAdbciJ%2Biu8Qdd1Rym2Zr9vAcia1iYeQZKj2jtK5YxN8pmrfA8MoWLrYqz%2BmfkBABbjnwcAM2%2BXF3A5UKweKTs6F3dcrxBWNVtvaOgl%2B3yQmVvkF%2BRK4ku5AMkw1ZjUGLUeytDWrwbOlsAMznVZpJyXITZqFBnIGHlCHRd1QwYCBAZk7VubfLhz2DjhgeBqK4jdTcCK%2BRfnxF%2FYSEcDPm8Ljcw6o37xwY6pgEeWI2uI%2FGk%2FNUX8MRMCpO37P4X%2FuPFgOKYsDmeZ3O0m6ZDME06JldNSpBxiX5LMsPeTrJiNODNhs8fGh2LyE9ESr9Sx%2FE0n0CUZO70nEPopdiBbd%2FQGFBHZI8ZAl1nQhJ%2BMiDSqNDtpWX3b0kc7tGjudgqZFenMUwqpBbzTOewIqjuKzou2UkykoZ5g3HnktmMpAMGnT%2BZJlxyMd3lMODTZOGOlS6F&X-Amz-Signature=013fac39b3c412c588c1fe26c7d8d33097f8695731d2656f023746c7acced08a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEMCHEDB%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyoJ4Fd2uU90%2B6149FHuLpT4MkeFnDK4XlRPxc8r%2FWCAiA6KertpAyqHTgzw4I7XoiKx2LriX9BgZ98iCCXe5Vu6iqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSvs1G%2FwbzVaMa5GKtwDsaBPVHr9b%2FDWgUWy1lEdkXu6914FzfcSfzSFqHB%2BS%2Fj6YmL9JR6VUjPXlI19uuGKsKqzi9loyqd9RM3czXMkW9jrPF3quExH4OCVbmlQf7Voj37m4i3fOSmk7QupE6KTW4NerDuSU%2FNLjaDDB%2FCHOkp2Ybpko%2BNn%2BcUC3Z2QKjnodlcg35a6GcdBnrAn%2FaPL72pmhDAmpPftWp6%2FzzXHdz%2BSXK5gTHvDSaVk1CKAr3dPDRviQ9Ig9PByWo8g6VuRCr3VVFHG1wL5serJcxnRUe15vxp2XHy%2F%2BKBKhVGZ62sJ1QDla5AO3fG1u%2B0X%2BVLb1Ch80pWiahDPttsipthil05C86eHS4Spm5BsFjqxiZ3pRefpMZ4a1hLqeJc0pzXn5f14lAOQmxbBKWtXTWVFLU%2Buv%2F0GT5FIAuZAdbciJ%2Biu8Qdd1Rym2Zr9vAcia1iYeQZKj2jtK5YxN8pmrfA8MoWLrYqz%2BmfkBABbjnwcAM2%2BXF3A5UKweKTs6F3dcrxBWNVtvaOgl%2B3yQmVvkF%2BRK4ku5AMkw1ZjUGLUeytDWrwbOlsAMznVZpJyXITZqFBnIGHlCHRd1QwYCBAZk7VubfLhz2DjhgeBqK4jdTcCK%2BRfnxF%2FYSEcDPm8Ljcw6o37xwY6pgEeWI2uI%2FGk%2FNUX8MRMCpO37P4X%2FuPFgOKYsDmeZ3O0m6ZDME06JldNSpBxiX5LMsPeTrJiNODNhs8fGh2LyE9ESr9Sx%2FE0n0CUZO70nEPopdiBbd%2FQGFBHZI8ZAl1nQhJ%2BMiDSqNDtpWX3b0kc7tGjudgqZFenMUwqpBbzTOewIqjuKzou2UkykoZ5g3HnktmMpAMGnT%2BZJlxyMd3lMODTZOGOlS6F&X-Amz-Signature=f009b988aa045efc75ed983c135d7994daad493193af90af70e018a57216d679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


