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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CTONBO4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCp7ptk%2BxDTwRjKleUcCy%2BA6JCCIcUiKAQ8y%2FCd%2FISAaAIhAP3%2BQcVXwlcVbhCqnlBCclYA2YRtqTWeUD%2F3UHFdJ6iDKv8DCFAQABoMNjM3NDIzMTgzODA1IgwWtMV%2F0yMn3nBQUxEq3ANEc3K3kah8TITsmFl3nS9wqW0WhHNnNhdv96chbygYfKfSDHTbyS%2F3mNV5fi7M3xCn4kwNptpm6djUWToElSLTU5xoGqj9Yzitr87ofxTxR%2Bbsp1Jb0SuenYffUmZY%2BdZPIObtCBhGU7Da%2BY6HtPWx%2FUcrs2zdBunnZhlIvBx%2FKPzEB5%2FoZecbLRPCzvOOrcqNZVyELfoSXARVavoQDXrTavGhYXy5tMJrQbeL16Y2R2RSWVqzogwTcPxTh172ORm5%2FeLGIRSdkir7OO8PezL0l8Hk%2BfRdq58uy9DH%2FHzKhAQz5GjoIhURiR2P4Xq1%2FHZvyMj%2BjUN1cocZbIrhdq44BwqW0NGK2iGoQ97cuMP3V0AJmaDlbzbEuSIleRE%2F7SK2336TyC5FtdaYwTkmNPeiiiW6QMi%2BzCCCVoFJgCZVYIwZ%2FmM9ux0ikkfWCwaUX8%2Fw%2FJ%2FlfPtMot0ePlGdmf7b%2BIMIiUJLYLruYkKjqalXGStjJzfJXpWQKSsqrg1DbImYktgD5PMOf0ysE%2Fydr5%2Fr5UEsiBtc172Nd27cQwRBEoJq2NJrEbbj00XIxFVgJw0mkFd3vSp0eQwSbumlnTmLozHOnwhlmd1uCW6oA2ug19z59RMp6n9bdE%2FS%2FzCh9MTEBjqkAVDONtkrHn%2B%2BqwG19vHIEujugcEi9Om42uKVkILXod8ZaIAdsYwqhdzcgyovTJEA1mw4vEpQbT433nKiWg9LhIKnfF3fKW%2FMb7LF%2B9iaYPnUrvWm7PfKWcn4D6ecyolyvou5enymDxDUHBHIWdnWQRi2Vdkb%2FHpVJ6JBneobHb1brX9tDYB%2Brd4GzPk78AvrMnTI4VZyEL39PEDkvRG7ahv4qSrk&X-Amz-Signature=834c3e4e12fe972209abf4e17e698256150a967cd0b4143b4de32fffdbfc203a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CTONBO4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCp7ptk%2BxDTwRjKleUcCy%2BA6JCCIcUiKAQ8y%2FCd%2FISAaAIhAP3%2BQcVXwlcVbhCqnlBCclYA2YRtqTWeUD%2F3UHFdJ6iDKv8DCFAQABoMNjM3NDIzMTgzODA1IgwWtMV%2F0yMn3nBQUxEq3ANEc3K3kah8TITsmFl3nS9wqW0WhHNnNhdv96chbygYfKfSDHTbyS%2F3mNV5fi7M3xCn4kwNptpm6djUWToElSLTU5xoGqj9Yzitr87ofxTxR%2Bbsp1Jb0SuenYffUmZY%2BdZPIObtCBhGU7Da%2BY6HtPWx%2FUcrs2zdBunnZhlIvBx%2FKPzEB5%2FoZecbLRPCzvOOrcqNZVyELfoSXARVavoQDXrTavGhYXy5tMJrQbeL16Y2R2RSWVqzogwTcPxTh172ORm5%2FeLGIRSdkir7OO8PezL0l8Hk%2BfRdq58uy9DH%2FHzKhAQz5GjoIhURiR2P4Xq1%2FHZvyMj%2BjUN1cocZbIrhdq44BwqW0NGK2iGoQ97cuMP3V0AJmaDlbzbEuSIleRE%2F7SK2336TyC5FtdaYwTkmNPeiiiW6QMi%2BzCCCVoFJgCZVYIwZ%2FmM9ux0ikkfWCwaUX8%2Fw%2FJ%2FlfPtMot0ePlGdmf7b%2BIMIiUJLYLruYkKjqalXGStjJzfJXpWQKSsqrg1DbImYktgD5PMOf0ysE%2Fydr5%2Fr5UEsiBtc172Nd27cQwRBEoJq2NJrEbbj00XIxFVgJw0mkFd3vSp0eQwSbumlnTmLozHOnwhlmd1uCW6oA2ug19z59RMp6n9bdE%2FS%2FzCh9MTEBjqkAVDONtkrHn%2B%2BqwG19vHIEujugcEi9Om42uKVkILXod8ZaIAdsYwqhdzcgyovTJEA1mw4vEpQbT433nKiWg9LhIKnfF3fKW%2FMb7LF%2B9iaYPnUrvWm7PfKWcn4D6ecyolyvou5enymDxDUHBHIWdnWQRi2Vdkb%2FHpVJ6JBneobHb1brX9tDYB%2Brd4GzPk78AvrMnTI4VZyEL39PEDkvRG7ahv4qSrk&X-Amz-Signature=8521c8ad9dddd3e17ecc4e477a12f06baebd444b5f0eaa14c9552d44235c8c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CTONBO4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCp7ptk%2BxDTwRjKleUcCy%2BA6JCCIcUiKAQ8y%2FCd%2FISAaAIhAP3%2BQcVXwlcVbhCqnlBCclYA2YRtqTWeUD%2F3UHFdJ6iDKv8DCFAQABoMNjM3NDIzMTgzODA1IgwWtMV%2F0yMn3nBQUxEq3ANEc3K3kah8TITsmFl3nS9wqW0WhHNnNhdv96chbygYfKfSDHTbyS%2F3mNV5fi7M3xCn4kwNptpm6djUWToElSLTU5xoGqj9Yzitr87ofxTxR%2Bbsp1Jb0SuenYffUmZY%2BdZPIObtCBhGU7Da%2BY6HtPWx%2FUcrs2zdBunnZhlIvBx%2FKPzEB5%2FoZecbLRPCzvOOrcqNZVyELfoSXARVavoQDXrTavGhYXy5tMJrQbeL16Y2R2RSWVqzogwTcPxTh172ORm5%2FeLGIRSdkir7OO8PezL0l8Hk%2BfRdq58uy9DH%2FHzKhAQz5GjoIhURiR2P4Xq1%2FHZvyMj%2BjUN1cocZbIrhdq44BwqW0NGK2iGoQ97cuMP3V0AJmaDlbzbEuSIleRE%2F7SK2336TyC5FtdaYwTkmNPeiiiW6QMi%2BzCCCVoFJgCZVYIwZ%2FmM9ux0ikkfWCwaUX8%2Fw%2FJ%2FlfPtMot0ePlGdmf7b%2BIMIiUJLYLruYkKjqalXGStjJzfJXpWQKSsqrg1DbImYktgD5PMOf0ysE%2Fydr5%2Fr5UEsiBtc172Nd27cQwRBEoJq2NJrEbbj00XIxFVgJw0mkFd3vSp0eQwSbumlnTmLozHOnwhlmd1uCW6oA2ug19z59RMp6n9bdE%2FS%2FzCh9MTEBjqkAVDONtkrHn%2B%2BqwG19vHIEujugcEi9Om42uKVkILXod8ZaIAdsYwqhdzcgyovTJEA1mw4vEpQbT433nKiWg9LhIKnfF3fKW%2FMb7LF%2B9iaYPnUrvWm7PfKWcn4D6ecyolyvou5enymDxDUHBHIWdnWQRi2Vdkb%2FHpVJ6JBneobHb1brX9tDYB%2Brd4GzPk78AvrMnTI4VZyEL39PEDkvRG7ahv4qSrk&X-Amz-Signature=6458fd587c4dc553742f32109f6b85cc84835b92f49a02ac5f908326eb9e3264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CTONBO4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCp7ptk%2BxDTwRjKleUcCy%2BA6JCCIcUiKAQ8y%2FCd%2FISAaAIhAP3%2BQcVXwlcVbhCqnlBCclYA2YRtqTWeUD%2F3UHFdJ6iDKv8DCFAQABoMNjM3NDIzMTgzODA1IgwWtMV%2F0yMn3nBQUxEq3ANEc3K3kah8TITsmFl3nS9wqW0WhHNnNhdv96chbygYfKfSDHTbyS%2F3mNV5fi7M3xCn4kwNptpm6djUWToElSLTU5xoGqj9Yzitr87ofxTxR%2Bbsp1Jb0SuenYffUmZY%2BdZPIObtCBhGU7Da%2BY6HtPWx%2FUcrs2zdBunnZhlIvBx%2FKPzEB5%2FoZecbLRPCzvOOrcqNZVyELfoSXARVavoQDXrTavGhYXy5tMJrQbeL16Y2R2RSWVqzogwTcPxTh172ORm5%2FeLGIRSdkir7OO8PezL0l8Hk%2BfRdq58uy9DH%2FHzKhAQz5GjoIhURiR2P4Xq1%2FHZvyMj%2BjUN1cocZbIrhdq44BwqW0NGK2iGoQ97cuMP3V0AJmaDlbzbEuSIleRE%2F7SK2336TyC5FtdaYwTkmNPeiiiW6QMi%2BzCCCVoFJgCZVYIwZ%2FmM9ux0ikkfWCwaUX8%2Fw%2FJ%2FlfPtMot0ePlGdmf7b%2BIMIiUJLYLruYkKjqalXGStjJzfJXpWQKSsqrg1DbImYktgD5PMOf0ysE%2Fydr5%2Fr5UEsiBtc172Nd27cQwRBEoJq2NJrEbbj00XIxFVgJw0mkFd3vSp0eQwSbumlnTmLozHOnwhlmd1uCW6oA2ug19z59RMp6n9bdE%2FS%2FzCh9MTEBjqkAVDONtkrHn%2B%2BqwG19vHIEujugcEi9Om42uKVkILXod8ZaIAdsYwqhdzcgyovTJEA1mw4vEpQbT433nKiWg9LhIKnfF3fKW%2FMb7LF%2B9iaYPnUrvWm7PfKWcn4D6ecyolyvou5enymDxDUHBHIWdnWQRi2Vdkb%2FHpVJ6JBneobHb1brX9tDYB%2Brd4GzPk78AvrMnTI4VZyEL39PEDkvRG7ahv4qSrk&X-Amz-Signature=6323388d7ec28d190dacc34b58d7ef02b059d059fc2433d8ae91e3daefc12e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIEZZCWE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICzEbpRpSRfYqGBSh0u3RAUs8rgQ3zYikSziki7IPB58AiBlEYKM1yjZD07NDyHIHWwtsCp7n%2BrXAWUJRtyAft3EWir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMzHkTjXGxfyVjqme%2BKtwDFT%2FKAgZuWjDmMfO3JaSBnA%2BQjJ%2F6NP0r7oOnZ2p%2BfMsqgs%2FxccRdpSfwk8albOV2IeYejXX04ui%2FWMx6B6ETgwbq2Yr5%2F93%2FfyibPTppFhwQqXGkNLgu2PqdgZ00alVIZLlrWT%2FT%2FTxThguV4GVG8RYeC8wiBQq7iMDIjWDm7ut8z0DhTeJXq0dvCI%2BqCLGTIH%2B9X2uY2oxJhHRsaGWTzo1Gse5j%2FBBcfhDPnMRtIxmt99wiqjCg1yw1skiqoN92ZHnlfJ81%2FwydIj6LRb%2BeJkzp1XjAmn10KRUWJXDknJvJO0LrKULjkPr03gb20dyDmypO1W79RgIXJ7cP4Rc6EWiX%2Fnf3HFnemGy7t8aD%2BiZSoBegGIffafTgBpXjwGaA4ip70jIoWDGx%2FmilRGFK4jvLBT5roZoAYgtbTqBKnfseg7Yois2aRlszksSCmoCi7rvZufjCjDBiK5DM5xUrzMH%2F0NKwSmlnfCPfRgKS8x9uj9zUUpR%2FXImSPVHV1zQwgCOuUMtT%2F3agiWTJBNlpRc7VhXji0H3xnFT2iwPU82UiZsosXLOJGLgmqiXOUxLh5BsF3qULWgRysNyV%2Fx06sbcxs%2Fi9xrhHrtlOl3xAMPLaONIl8phNZmicu8Yw0PTExAY6pgGoe7XgLg1K295Dd4bLoliJTDXJD1XXgl0LqXciqmzddYmOGoHLjcpvQoeTeKqaxZ%2B1RwFtZ7lJUOkMgKeh%2BlidVKnu%2FSLTtvWM%2Fj0cNcTAF719b0uPGJIZNB8pnjswvsbBKRkg5uZAlEQIv%2FdWCobLmSLwwXerO0t61FmMz%2FkkcbvEBkcIR8uXSNY1amV8kvavjYGJTUmN8r0ZCi%2BFtCoeiiuVtBr%2F&X-Amz-Signature=bfe6f86e40e9e19156dc1553cd9b66ca133b7bbe6e386b88d8c07611c1447277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CTONBO4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCp7ptk%2BxDTwRjKleUcCy%2BA6JCCIcUiKAQ8y%2FCd%2FISAaAIhAP3%2BQcVXwlcVbhCqnlBCclYA2YRtqTWeUD%2F3UHFdJ6iDKv8DCFAQABoMNjM3NDIzMTgzODA1IgwWtMV%2F0yMn3nBQUxEq3ANEc3K3kah8TITsmFl3nS9wqW0WhHNnNhdv96chbygYfKfSDHTbyS%2F3mNV5fi7M3xCn4kwNptpm6djUWToElSLTU5xoGqj9Yzitr87ofxTxR%2Bbsp1Jb0SuenYffUmZY%2BdZPIObtCBhGU7Da%2BY6HtPWx%2FUcrs2zdBunnZhlIvBx%2FKPzEB5%2FoZecbLRPCzvOOrcqNZVyELfoSXARVavoQDXrTavGhYXy5tMJrQbeL16Y2R2RSWVqzogwTcPxTh172ORm5%2FeLGIRSdkir7OO8PezL0l8Hk%2BfRdq58uy9DH%2FHzKhAQz5GjoIhURiR2P4Xq1%2FHZvyMj%2BjUN1cocZbIrhdq44BwqW0NGK2iGoQ97cuMP3V0AJmaDlbzbEuSIleRE%2F7SK2336TyC5FtdaYwTkmNPeiiiW6QMi%2BzCCCVoFJgCZVYIwZ%2FmM9ux0ikkfWCwaUX8%2Fw%2FJ%2FlfPtMot0ePlGdmf7b%2BIMIiUJLYLruYkKjqalXGStjJzfJXpWQKSsqrg1DbImYktgD5PMOf0ysE%2Fydr5%2Fr5UEsiBtc172Nd27cQwRBEoJq2NJrEbbj00XIxFVgJw0mkFd3vSp0eQwSbumlnTmLozHOnwhlmd1uCW6oA2ug19z59RMp6n9bdE%2FS%2FzCh9MTEBjqkAVDONtkrHn%2B%2BqwG19vHIEujugcEi9Om42uKVkILXod8ZaIAdsYwqhdzcgyovTJEA1mw4vEpQbT433nKiWg9LhIKnfF3fKW%2FMb7LF%2B9iaYPnUrvWm7PfKWcn4D6ecyolyvou5enymDxDUHBHIWdnWQRi2Vdkb%2FHpVJ6JBneobHb1brX9tDYB%2Brd4GzPk78AvrMnTI4VZyEL39PEDkvRG7ahv4qSrk&X-Amz-Signature=d34ecd0530daf0707b35034297bbd70c2b97b6799c714c713b6b136d28673490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CTONBO4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCp7ptk%2BxDTwRjKleUcCy%2BA6JCCIcUiKAQ8y%2FCd%2FISAaAIhAP3%2BQcVXwlcVbhCqnlBCclYA2YRtqTWeUD%2F3UHFdJ6iDKv8DCFAQABoMNjM3NDIzMTgzODA1IgwWtMV%2F0yMn3nBQUxEq3ANEc3K3kah8TITsmFl3nS9wqW0WhHNnNhdv96chbygYfKfSDHTbyS%2F3mNV5fi7M3xCn4kwNptpm6djUWToElSLTU5xoGqj9Yzitr87ofxTxR%2Bbsp1Jb0SuenYffUmZY%2BdZPIObtCBhGU7Da%2BY6HtPWx%2FUcrs2zdBunnZhlIvBx%2FKPzEB5%2FoZecbLRPCzvOOrcqNZVyELfoSXARVavoQDXrTavGhYXy5tMJrQbeL16Y2R2RSWVqzogwTcPxTh172ORm5%2FeLGIRSdkir7OO8PezL0l8Hk%2BfRdq58uy9DH%2FHzKhAQz5GjoIhURiR2P4Xq1%2FHZvyMj%2BjUN1cocZbIrhdq44BwqW0NGK2iGoQ97cuMP3V0AJmaDlbzbEuSIleRE%2F7SK2336TyC5FtdaYwTkmNPeiiiW6QMi%2BzCCCVoFJgCZVYIwZ%2FmM9ux0ikkfWCwaUX8%2Fw%2FJ%2FlfPtMot0ePlGdmf7b%2BIMIiUJLYLruYkKjqalXGStjJzfJXpWQKSsqrg1DbImYktgD5PMOf0ysE%2Fydr5%2Fr5UEsiBtc172Nd27cQwRBEoJq2NJrEbbj00XIxFVgJw0mkFd3vSp0eQwSbumlnTmLozHOnwhlmd1uCW6oA2ug19z59RMp6n9bdE%2FS%2FzCh9MTEBjqkAVDONtkrHn%2B%2BqwG19vHIEujugcEi9Om42uKVkILXod8ZaIAdsYwqhdzcgyovTJEA1mw4vEpQbT433nKiWg9LhIKnfF3fKW%2FMb7LF%2B9iaYPnUrvWm7PfKWcn4D6ecyolyvou5enymDxDUHBHIWdnWQRi2Vdkb%2FHpVJ6JBneobHb1brX9tDYB%2Brd4GzPk78AvrMnTI4VZyEL39PEDkvRG7ahv4qSrk&X-Amz-Signature=463cd775862894d898f80eb24141f3588e9642cc96b645d70b2b60efb2330ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CTONBO4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCp7ptk%2BxDTwRjKleUcCy%2BA6JCCIcUiKAQ8y%2FCd%2FISAaAIhAP3%2BQcVXwlcVbhCqnlBCclYA2YRtqTWeUD%2F3UHFdJ6iDKv8DCFAQABoMNjM3NDIzMTgzODA1IgwWtMV%2F0yMn3nBQUxEq3ANEc3K3kah8TITsmFl3nS9wqW0WhHNnNhdv96chbygYfKfSDHTbyS%2F3mNV5fi7M3xCn4kwNptpm6djUWToElSLTU5xoGqj9Yzitr87ofxTxR%2Bbsp1Jb0SuenYffUmZY%2BdZPIObtCBhGU7Da%2BY6HtPWx%2FUcrs2zdBunnZhlIvBx%2FKPzEB5%2FoZecbLRPCzvOOrcqNZVyELfoSXARVavoQDXrTavGhYXy5tMJrQbeL16Y2R2RSWVqzogwTcPxTh172ORm5%2FeLGIRSdkir7OO8PezL0l8Hk%2BfRdq58uy9DH%2FHzKhAQz5GjoIhURiR2P4Xq1%2FHZvyMj%2BjUN1cocZbIrhdq44BwqW0NGK2iGoQ97cuMP3V0AJmaDlbzbEuSIleRE%2F7SK2336TyC5FtdaYwTkmNPeiiiW6QMi%2BzCCCVoFJgCZVYIwZ%2FmM9ux0ikkfWCwaUX8%2Fw%2FJ%2FlfPtMot0ePlGdmf7b%2BIMIiUJLYLruYkKjqalXGStjJzfJXpWQKSsqrg1DbImYktgD5PMOf0ysE%2Fydr5%2Fr5UEsiBtc172Nd27cQwRBEoJq2NJrEbbj00XIxFVgJw0mkFd3vSp0eQwSbumlnTmLozHOnwhlmd1uCW6oA2ug19z59RMp6n9bdE%2FS%2FzCh9MTEBjqkAVDONtkrHn%2B%2BqwG19vHIEujugcEi9Om42uKVkILXod8ZaIAdsYwqhdzcgyovTJEA1mw4vEpQbT433nKiWg9LhIKnfF3fKW%2FMb7LF%2B9iaYPnUrvWm7PfKWcn4D6ecyolyvou5enymDxDUHBHIWdnWQRi2Vdkb%2FHpVJ6JBneobHb1brX9tDYB%2Brd4GzPk78AvrMnTI4VZyEL39PEDkvRG7ahv4qSrk&X-Amz-Signature=d03ad0cac054c3c495e0507ed39830e3103bd0712c5c1e70e783e60ba44ac8de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CTONBO4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCp7ptk%2BxDTwRjKleUcCy%2BA6JCCIcUiKAQ8y%2FCd%2FISAaAIhAP3%2BQcVXwlcVbhCqnlBCclYA2YRtqTWeUD%2F3UHFdJ6iDKv8DCFAQABoMNjM3NDIzMTgzODA1IgwWtMV%2F0yMn3nBQUxEq3ANEc3K3kah8TITsmFl3nS9wqW0WhHNnNhdv96chbygYfKfSDHTbyS%2F3mNV5fi7M3xCn4kwNptpm6djUWToElSLTU5xoGqj9Yzitr87ofxTxR%2Bbsp1Jb0SuenYffUmZY%2BdZPIObtCBhGU7Da%2BY6HtPWx%2FUcrs2zdBunnZhlIvBx%2FKPzEB5%2FoZecbLRPCzvOOrcqNZVyELfoSXARVavoQDXrTavGhYXy5tMJrQbeL16Y2R2RSWVqzogwTcPxTh172ORm5%2FeLGIRSdkir7OO8PezL0l8Hk%2BfRdq58uy9DH%2FHzKhAQz5GjoIhURiR2P4Xq1%2FHZvyMj%2BjUN1cocZbIrhdq44BwqW0NGK2iGoQ97cuMP3V0AJmaDlbzbEuSIleRE%2F7SK2336TyC5FtdaYwTkmNPeiiiW6QMi%2BzCCCVoFJgCZVYIwZ%2FmM9ux0ikkfWCwaUX8%2Fw%2FJ%2FlfPtMot0ePlGdmf7b%2BIMIiUJLYLruYkKjqalXGStjJzfJXpWQKSsqrg1DbImYktgD5PMOf0ysE%2Fydr5%2Fr5UEsiBtc172Nd27cQwRBEoJq2NJrEbbj00XIxFVgJw0mkFd3vSp0eQwSbumlnTmLozHOnwhlmd1uCW6oA2ug19z59RMp6n9bdE%2FS%2FzCh9MTEBjqkAVDONtkrHn%2B%2BqwG19vHIEujugcEi9Om42uKVkILXod8ZaIAdsYwqhdzcgyovTJEA1mw4vEpQbT433nKiWg9LhIKnfF3fKW%2FMb7LF%2B9iaYPnUrvWm7PfKWcn4D6ecyolyvou5enymDxDUHBHIWdnWQRi2Vdkb%2FHpVJ6JBneobHb1brX9tDYB%2Brd4GzPk78AvrMnTI4VZyEL39PEDkvRG7ahv4qSrk&X-Amz-Signature=ee7c28d455a4250f2e0a9b7ecadc7e5310a737fddf45c09a45794b20d2ba5f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CTONBO4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCp7ptk%2BxDTwRjKleUcCy%2BA6JCCIcUiKAQ8y%2FCd%2FISAaAIhAP3%2BQcVXwlcVbhCqnlBCclYA2YRtqTWeUD%2F3UHFdJ6iDKv8DCFAQABoMNjM3NDIzMTgzODA1IgwWtMV%2F0yMn3nBQUxEq3ANEc3K3kah8TITsmFl3nS9wqW0WhHNnNhdv96chbygYfKfSDHTbyS%2F3mNV5fi7M3xCn4kwNptpm6djUWToElSLTU5xoGqj9Yzitr87ofxTxR%2Bbsp1Jb0SuenYffUmZY%2BdZPIObtCBhGU7Da%2BY6HtPWx%2FUcrs2zdBunnZhlIvBx%2FKPzEB5%2FoZecbLRPCzvOOrcqNZVyELfoSXARVavoQDXrTavGhYXy5tMJrQbeL16Y2R2RSWVqzogwTcPxTh172ORm5%2FeLGIRSdkir7OO8PezL0l8Hk%2BfRdq58uy9DH%2FHzKhAQz5GjoIhURiR2P4Xq1%2FHZvyMj%2BjUN1cocZbIrhdq44BwqW0NGK2iGoQ97cuMP3V0AJmaDlbzbEuSIleRE%2F7SK2336TyC5FtdaYwTkmNPeiiiW6QMi%2BzCCCVoFJgCZVYIwZ%2FmM9ux0ikkfWCwaUX8%2Fw%2FJ%2FlfPtMot0ePlGdmf7b%2BIMIiUJLYLruYkKjqalXGStjJzfJXpWQKSsqrg1DbImYktgD5PMOf0ysE%2Fydr5%2Fr5UEsiBtc172Nd27cQwRBEoJq2NJrEbbj00XIxFVgJw0mkFd3vSp0eQwSbumlnTmLozHOnwhlmd1uCW6oA2ug19z59RMp6n9bdE%2FS%2FzCh9MTEBjqkAVDONtkrHn%2B%2BqwG19vHIEujugcEi9Om42uKVkILXod8ZaIAdsYwqhdzcgyovTJEA1mw4vEpQbT433nKiWg9LhIKnfF3fKW%2FMb7LF%2B9iaYPnUrvWm7PfKWcn4D6ecyolyvou5enymDxDUHBHIWdnWQRi2Vdkb%2FHpVJ6JBneobHb1brX9tDYB%2Brd4GzPk78AvrMnTI4VZyEL39PEDkvRG7ahv4qSrk&X-Amz-Signature=55fd9e087f5fd11a6c73b41a4c9c4f2574ba07e3f435022669cd67c2a8a2c426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CTONBO4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCp7ptk%2BxDTwRjKleUcCy%2BA6JCCIcUiKAQ8y%2FCd%2FISAaAIhAP3%2BQcVXwlcVbhCqnlBCclYA2YRtqTWeUD%2F3UHFdJ6iDKv8DCFAQABoMNjM3NDIzMTgzODA1IgwWtMV%2F0yMn3nBQUxEq3ANEc3K3kah8TITsmFl3nS9wqW0WhHNnNhdv96chbygYfKfSDHTbyS%2F3mNV5fi7M3xCn4kwNptpm6djUWToElSLTU5xoGqj9Yzitr87ofxTxR%2Bbsp1Jb0SuenYffUmZY%2BdZPIObtCBhGU7Da%2BY6HtPWx%2FUcrs2zdBunnZhlIvBx%2FKPzEB5%2FoZecbLRPCzvOOrcqNZVyELfoSXARVavoQDXrTavGhYXy5tMJrQbeL16Y2R2RSWVqzogwTcPxTh172ORm5%2FeLGIRSdkir7OO8PezL0l8Hk%2BfRdq58uy9DH%2FHzKhAQz5GjoIhURiR2P4Xq1%2FHZvyMj%2BjUN1cocZbIrhdq44BwqW0NGK2iGoQ97cuMP3V0AJmaDlbzbEuSIleRE%2F7SK2336TyC5FtdaYwTkmNPeiiiW6QMi%2BzCCCVoFJgCZVYIwZ%2FmM9ux0ikkfWCwaUX8%2Fw%2FJ%2FlfPtMot0ePlGdmf7b%2BIMIiUJLYLruYkKjqalXGStjJzfJXpWQKSsqrg1DbImYktgD5PMOf0ysE%2Fydr5%2Fr5UEsiBtc172Nd27cQwRBEoJq2NJrEbbj00XIxFVgJw0mkFd3vSp0eQwSbumlnTmLozHOnwhlmd1uCW6oA2ug19z59RMp6n9bdE%2FS%2FzCh9MTEBjqkAVDONtkrHn%2B%2BqwG19vHIEujugcEi9Om42uKVkILXod8ZaIAdsYwqhdzcgyovTJEA1mw4vEpQbT433nKiWg9LhIKnfF3fKW%2FMb7LF%2B9iaYPnUrvWm7PfKWcn4D6ecyolyvou5enymDxDUHBHIWdnWQRi2Vdkb%2FHpVJ6JBneobHb1brX9tDYB%2Brd4GzPk78AvrMnTI4VZyEL39PEDkvRG7ahv4qSrk&X-Amz-Signature=122baf2f3df979d1dc807585781adbd401db8f3581e288c8b12f89ed30489c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
