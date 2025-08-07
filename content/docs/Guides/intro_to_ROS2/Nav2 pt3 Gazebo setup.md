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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HF2TLQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICCNg4rj7o51IJbTJjLzlq8z%2FeklFMqsR6S%2BfKTlFbLeAiBwhlwR3xJKt3UvvcHmhoi9g5AF5ZkMez605cLELgdS8CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA9UpbBC03%2B0nEZ50KtwD6s1YtT1KUAcWZ61u8eCxH1V%2FPrgh2GDm19rpMSTG%2FiQkusQ%2FS7%2BhtCn%2B4bEEv7C7kz2cjckrRRxdNB1R4a3aAqHnPT9UZ7Xd6Mp40ogsrOloNlKpjTmb9IYLfB88rFzUbUERlpaTN0wVigx9Kff2wbNtZYJfzAFfBf%2Bh7i9pzLcykDDKO4m%2BaLEzeTs2%2FGL944fFfolLezOklXdJmYY%2BPaTx7SKTld5L0zqzHw9qi0e%2FiWvgPbczpL2imVAJx%2BKIv%2BsTMyaZNnMaoRi5TgwSMZy%2B578IvIBM1Ftf5ZHGAe6Dby2A7HFSkAbbkEGd335QO%2BMSFNJKbvNtcBPiliWg5sgBh0HMsjtjeSUPSojrAYr6fbTSHRJqUW0abZLXNjVcnkQhijrK%2BjirrjDFNrWGfkAhuAnykKwf5tbb36jAU5rG3a8D%2Bf6N17K1265J1IMUqCcsMs9Q9SPda8JOg2zTIP4G%2FvQ%2BeNGKmrkoavavsJJgdPMNv%2FDsdetdrjZfig3axPxtwXDIlSjINNyySChTU8Pwl8hIxl9U4DskJE%2Fq1rwSoiJidZzYW%2F%2BTKja0UxHiXTN6RX9Qy8fovDgKhNXhoKrFfcLyn9Ji9hw4OjGg8FBUeUkc81Vj1SqPg8IwjcjQxAY6pgGWD0hebRF%2FZTPG75ifXJDHhvQriYYi5wJUyrze%2BfeDHSkRurtaMioEVYDPEja%2FP%2F6JMliR32kX2dRTSPnjdIY19Qwlsx%2BlCw%2F7S46Hr2VjmBx49sdpmIv5vttWVFRsLoZDesLwU%2FFOEpSNIJ%2BETuDByOqUyozcMxAEKlYogkgQ0m19AFaTJ8KD%2BkDWixAvwtOd3SDjdecSixCrCK6yJUZV%2BO9M%2Ffw%2B&X-Amz-Signature=a80a40fbcdbef99e3824f96625d275634f91c3c9b7ed1aaaa9eb7e379635fac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HF2TLQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICCNg4rj7o51IJbTJjLzlq8z%2FeklFMqsR6S%2BfKTlFbLeAiBwhlwR3xJKt3UvvcHmhoi9g5AF5ZkMez605cLELgdS8CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA9UpbBC03%2B0nEZ50KtwD6s1YtT1KUAcWZ61u8eCxH1V%2FPrgh2GDm19rpMSTG%2FiQkusQ%2FS7%2BhtCn%2B4bEEv7C7kz2cjckrRRxdNB1R4a3aAqHnPT9UZ7Xd6Mp40ogsrOloNlKpjTmb9IYLfB88rFzUbUERlpaTN0wVigx9Kff2wbNtZYJfzAFfBf%2Bh7i9pzLcykDDKO4m%2BaLEzeTs2%2FGL944fFfolLezOklXdJmYY%2BPaTx7SKTld5L0zqzHw9qi0e%2FiWvgPbczpL2imVAJx%2BKIv%2BsTMyaZNnMaoRi5TgwSMZy%2B578IvIBM1Ftf5ZHGAe6Dby2A7HFSkAbbkEGd335QO%2BMSFNJKbvNtcBPiliWg5sgBh0HMsjtjeSUPSojrAYr6fbTSHRJqUW0abZLXNjVcnkQhijrK%2BjirrjDFNrWGfkAhuAnykKwf5tbb36jAU5rG3a8D%2Bf6N17K1265J1IMUqCcsMs9Q9SPda8JOg2zTIP4G%2FvQ%2BeNGKmrkoavavsJJgdPMNv%2FDsdetdrjZfig3axPxtwXDIlSjINNyySChTU8Pwl8hIxl9U4DskJE%2Fq1rwSoiJidZzYW%2F%2BTKja0UxHiXTN6RX9Qy8fovDgKhNXhoKrFfcLyn9Ji9hw4OjGg8FBUeUkc81Vj1SqPg8IwjcjQxAY6pgGWD0hebRF%2FZTPG75ifXJDHhvQriYYi5wJUyrze%2BfeDHSkRurtaMioEVYDPEja%2FP%2F6JMliR32kX2dRTSPnjdIY19Qwlsx%2BlCw%2F7S46Hr2VjmBx49sdpmIv5vttWVFRsLoZDesLwU%2FFOEpSNIJ%2BETuDByOqUyozcMxAEKlYogkgQ0m19AFaTJ8KD%2BkDWixAvwtOd3SDjdecSixCrCK6yJUZV%2BO9M%2Ffw%2B&X-Amz-Signature=1fc4d2612e8aba20bfdadf405d88aa382f58efd34c40d13b5e1c2bf206e82f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HF2TLQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICCNg4rj7o51IJbTJjLzlq8z%2FeklFMqsR6S%2BfKTlFbLeAiBwhlwR3xJKt3UvvcHmhoi9g5AF5ZkMez605cLELgdS8CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA9UpbBC03%2B0nEZ50KtwD6s1YtT1KUAcWZ61u8eCxH1V%2FPrgh2GDm19rpMSTG%2FiQkusQ%2FS7%2BhtCn%2B4bEEv7C7kz2cjckrRRxdNB1R4a3aAqHnPT9UZ7Xd6Mp40ogsrOloNlKpjTmb9IYLfB88rFzUbUERlpaTN0wVigx9Kff2wbNtZYJfzAFfBf%2Bh7i9pzLcykDDKO4m%2BaLEzeTs2%2FGL944fFfolLezOklXdJmYY%2BPaTx7SKTld5L0zqzHw9qi0e%2FiWvgPbczpL2imVAJx%2BKIv%2BsTMyaZNnMaoRi5TgwSMZy%2B578IvIBM1Ftf5ZHGAe6Dby2A7HFSkAbbkEGd335QO%2BMSFNJKbvNtcBPiliWg5sgBh0HMsjtjeSUPSojrAYr6fbTSHRJqUW0abZLXNjVcnkQhijrK%2BjirrjDFNrWGfkAhuAnykKwf5tbb36jAU5rG3a8D%2Bf6N17K1265J1IMUqCcsMs9Q9SPda8JOg2zTIP4G%2FvQ%2BeNGKmrkoavavsJJgdPMNv%2FDsdetdrjZfig3axPxtwXDIlSjINNyySChTU8Pwl8hIxl9U4DskJE%2Fq1rwSoiJidZzYW%2F%2BTKja0UxHiXTN6RX9Qy8fovDgKhNXhoKrFfcLyn9Ji9hw4OjGg8FBUeUkc81Vj1SqPg8IwjcjQxAY6pgGWD0hebRF%2FZTPG75ifXJDHhvQriYYi5wJUyrze%2BfeDHSkRurtaMioEVYDPEja%2FP%2F6JMliR32kX2dRTSPnjdIY19Qwlsx%2BlCw%2F7S46Hr2VjmBx49sdpmIv5vttWVFRsLoZDesLwU%2FFOEpSNIJ%2BETuDByOqUyozcMxAEKlYogkgQ0m19AFaTJ8KD%2BkDWixAvwtOd3SDjdecSixCrCK6yJUZV%2BO9M%2Ffw%2B&X-Amz-Signature=dfc94992d4aef2b48f9654e22334408cd8579110bc9fc383ce62e929c3f55527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HF2TLQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICCNg4rj7o51IJbTJjLzlq8z%2FeklFMqsR6S%2BfKTlFbLeAiBwhlwR3xJKt3UvvcHmhoi9g5AF5ZkMez605cLELgdS8CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA9UpbBC03%2B0nEZ50KtwD6s1YtT1KUAcWZ61u8eCxH1V%2FPrgh2GDm19rpMSTG%2FiQkusQ%2FS7%2BhtCn%2B4bEEv7C7kz2cjckrRRxdNB1R4a3aAqHnPT9UZ7Xd6Mp40ogsrOloNlKpjTmb9IYLfB88rFzUbUERlpaTN0wVigx9Kff2wbNtZYJfzAFfBf%2Bh7i9pzLcykDDKO4m%2BaLEzeTs2%2FGL944fFfolLezOklXdJmYY%2BPaTx7SKTld5L0zqzHw9qi0e%2FiWvgPbczpL2imVAJx%2BKIv%2BsTMyaZNnMaoRi5TgwSMZy%2B578IvIBM1Ftf5ZHGAe6Dby2A7HFSkAbbkEGd335QO%2BMSFNJKbvNtcBPiliWg5sgBh0HMsjtjeSUPSojrAYr6fbTSHRJqUW0abZLXNjVcnkQhijrK%2BjirrjDFNrWGfkAhuAnykKwf5tbb36jAU5rG3a8D%2Bf6N17K1265J1IMUqCcsMs9Q9SPda8JOg2zTIP4G%2FvQ%2BeNGKmrkoavavsJJgdPMNv%2FDsdetdrjZfig3axPxtwXDIlSjINNyySChTU8Pwl8hIxl9U4DskJE%2Fq1rwSoiJidZzYW%2F%2BTKja0UxHiXTN6RX9Qy8fovDgKhNXhoKrFfcLyn9Ji9hw4OjGg8FBUeUkc81Vj1SqPg8IwjcjQxAY6pgGWD0hebRF%2FZTPG75ifXJDHhvQriYYi5wJUyrze%2BfeDHSkRurtaMioEVYDPEja%2FP%2F6JMliR32kX2dRTSPnjdIY19Qwlsx%2BlCw%2F7S46Hr2VjmBx49sdpmIv5vttWVFRsLoZDesLwU%2FFOEpSNIJ%2BETuDByOqUyozcMxAEKlYogkgQ0m19AFaTJ8KD%2BkDWixAvwtOd3SDjdecSixCrCK6yJUZV%2BO9M%2Ffw%2B&X-Amz-Signature=5b844c845ff3baa3091147497f20d85519a671f11ac2aa4e06e9a5f3336cd3cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAW6JFL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQD9EIVW3j3UQnyMpDiVZ1RZgs6r1JKPUtjyspaFYlZNPwIgP2HPqsjxBg5G10rO6wRuI3cWdePL%2FGjZ38SJcqdAGSgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaNyeYEJDttzxLuVyrcA6i1sSIMtIGX4w5zoXZ3hatwWhABIO6Jrh6YyH0q6b%2FjQ0bn4jbHCaX%2FUojKqXGXNUbbLKnkIIE3ylOVtEKVbHZHvtJOcv5L2kZ8roinx1SHEXsylqGOP0MsI%2BSjkLPoeAMXCGZrTmBokECyD1pQa%2Bkkk5TPLbN6IRjVEbwUVTNP%2FNBcRO%2BLO8xS4fX7y9766hz1AQp8cV6qawysGH7N7kGb%2F5qKtgnUAXfSNlVgLjXCh0WyNv13ZeWHThGti5Dbqm7WXqnW9geFdTS2OJCHFLU8GjWEfTOBz81zEbZVaELRaG%2B%2Fqns2VTBT50eZkG6ntefLS%2Foy25bvGzXg1FCeqVTjjod4m7mJCQXqI%2BeOPUFsK4N3KxCtj01BbuB4gMEuqp5njn1mXD6a82ZTPUSTJsH28FD%2BK8msFsF79%2BprM5zchd1QFZ60haU2CnnUWmS91IwTi3HLDuSuPLyMbhUMDFJil%2BmoIKG7msJGhdgXJaLHKtEYy8IH3rv4aqkG01QAUF7rivJz5BoRt9839soISbAtMQ8EAXrExyMRhqana7zp9IxIcaggBBuc8kMvohm0mTepEe3%2F0WJ%2Fr3Wv2VS%2BcFj30rHsyseagTGrY5oVjw7jgdYrVQ3kanof9sOiMKrI0MQGOqUBdC84DAsWQG0lrPQUneH5TS%2BgC8LFfBbOanqQvLgxro2FxXF8ZPfmfSmZDGJPiV8NcOgHaZki967dr4M0K%2FHylPStXPbwHnHtpYuzQ1hKVJ%2BIKAzPuEA9F2LgSLaQxisyv6Y3B9aLRZwWhIFkC3IEnB0W%2FlDbKkQ1lmgqc5TbXhF13F5Q4%2BiHLISQdHm1ZoxMQSxI4WCNDmLokJCTiqQRycUBXHGS&X-Amz-Signature=49aa2b745d50b3702ead00d45cc76e5640698da42c0d32f0e223e22f92a89a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HF2TLQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICCNg4rj7o51IJbTJjLzlq8z%2FeklFMqsR6S%2BfKTlFbLeAiBwhlwR3xJKt3UvvcHmhoi9g5AF5ZkMez605cLELgdS8CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA9UpbBC03%2B0nEZ50KtwD6s1YtT1KUAcWZ61u8eCxH1V%2FPrgh2GDm19rpMSTG%2FiQkusQ%2FS7%2BhtCn%2B4bEEv7C7kz2cjckrRRxdNB1R4a3aAqHnPT9UZ7Xd6Mp40ogsrOloNlKpjTmb9IYLfB88rFzUbUERlpaTN0wVigx9Kff2wbNtZYJfzAFfBf%2Bh7i9pzLcykDDKO4m%2BaLEzeTs2%2FGL944fFfolLezOklXdJmYY%2BPaTx7SKTld5L0zqzHw9qi0e%2FiWvgPbczpL2imVAJx%2BKIv%2BsTMyaZNnMaoRi5TgwSMZy%2B578IvIBM1Ftf5ZHGAe6Dby2A7HFSkAbbkEGd335QO%2BMSFNJKbvNtcBPiliWg5sgBh0HMsjtjeSUPSojrAYr6fbTSHRJqUW0abZLXNjVcnkQhijrK%2BjirrjDFNrWGfkAhuAnykKwf5tbb36jAU5rG3a8D%2Bf6N17K1265J1IMUqCcsMs9Q9SPda8JOg2zTIP4G%2FvQ%2BeNGKmrkoavavsJJgdPMNv%2FDsdetdrjZfig3axPxtwXDIlSjINNyySChTU8Pwl8hIxl9U4DskJE%2Fq1rwSoiJidZzYW%2F%2BTKja0UxHiXTN6RX9Qy8fovDgKhNXhoKrFfcLyn9Ji9hw4OjGg8FBUeUkc81Vj1SqPg8IwjcjQxAY6pgGWD0hebRF%2FZTPG75ifXJDHhvQriYYi5wJUyrze%2BfeDHSkRurtaMioEVYDPEja%2FP%2F6JMliR32kX2dRTSPnjdIY19Qwlsx%2BlCw%2F7S46Hr2VjmBx49sdpmIv5vttWVFRsLoZDesLwU%2FFOEpSNIJ%2BETuDByOqUyozcMxAEKlYogkgQ0m19AFaTJ8KD%2BkDWixAvwtOd3SDjdecSixCrCK6yJUZV%2BO9M%2Ffw%2B&X-Amz-Signature=702302b772003cdadf8b1a4ca89a764d69d1eaf18f94a00013fa80e44a4f4fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HF2TLQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICCNg4rj7o51IJbTJjLzlq8z%2FeklFMqsR6S%2BfKTlFbLeAiBwhlwR3xJKt3UvvcHmhoi9g5AF5ZkMez605cLELgdS8CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA9UpbBC03%2B0nEZ50KtwD6s1YtT1KUAcWZ61u8eCxH1V%2FPrgh2GDm19rpMSTG%2FiQkusQ%2FS7%2BhtCn%2B4bEEv7C7kz2cjckrRRxdNB1R4a3aAqHnPT9UZ7Xd6Mp40ogsrOloNlKpjTmb9IYLfB88rFzUbUERlpaTN0wVigx9Kff2wbNtZYJfzAFfBf%2Bh7i9pzLcykDDKO4m%2BaLEzeTs2%2FGL944fFfolLezOklXdJmYY%2BPaTx7SKTld5L0zqzHw9qi0e%2FiWvgPbczpL2imVAJx%2BKIv%2BsTMyaZNnMaoRi5TgwSMZy%2B578IvIBM1Ftf5ZHGAe6Dby2A7HFSkAbbkEGd335QO%2BMSFNJKbvNtcBPiliWg5sgBh0HMsjtjeSUPSojrAYr6fbTSHRJqUW0abZLXNjVcnkQhijrK%2BjirrjDFNrWGfkAhuAnykKwf5tbb36jAU5rG3a8D%2Bf6N17K1265J1IMUqCcsMs9Q9SPda8JOg2zTIP4G%2FvQ%2BeNGKmrkoavavsJJgdPMNv%2FDsdetdrjZfig3axPxtwXDIlSjINNyySChTU8Pwl8hIxl9U4DskJE%2Fq1rwSoiJidZzYW%2F%2BTKja0UxHiXTN6RX9Qy8fovDgKhNXhoKrFfcLyn9Ji9hw4OjGg8FBUeUkc81Vj1SqPg8IwjcjQxAY6pgGWD0hebRF%2FZTPG75ifXJDHhvQriYYi5wJUyrze%2BfeDHSkRurtaMioEVYDPEja%2FP%2F6JMliR32kX2dRTSPnjdIY19Qwlsx%2BlCw%2F7S46Hr2VjmBx49sdpmIv5vttWVFRsLoZDesLwU%2FFOEpSNIJ%2BETuDByOqUyozcMxAEKlYogkgQ0m19AFaTJ8KD%2BkDWixAvwtOd3SDjdecSixCrCK6yJUZV%2BO9M%2Ffw%2B&X-Amz-Signature=fb1744eb3c1ac542d0ba3e1e7666a0e3f5c7b9de726a58e623e073ba09fe8373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HF2TLQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICCNg4rj7o51IJbTJjLzlq8z%2FeklFMqsR6S%2BfKTlFbLeAiBwhlwR3xJKt3UvvcHmhoi9g5AF5ZkMez605cLELgdS8CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA9UpbBC03%2B0nEZ50KtwD6s1YtT1KUAcWZ61u8eCxH1V%2FPrgh2GDm19rpMSTG%2FiQkusQ%2FS7%2BhtCn%2B4bEEv7C7kz2cjckrRRxdNB1R4a3aAqHnPT9UZ7Xd6Mp40ogsrOloNlKpjTmb9IYLfB88rFzUbUERlpaTN0wVigx9Kff2wbNtZYJfzAFfBf%2Bh7i9pzLcykDDKO4m%2BaLEzeTs2%2FGL944fFfolLezOklXdJmYY%2BPaTx7SKTld5L0zqzHw9qi0e%2FiWvgPbczpL2imVAJx%2BKIv%2BsTMyaZNnMaoRi5TgwSMZy%2B578IvIBM1Ftf5ZHGAe6Dby2A7HFSkAbbkEGd335QO%2BMSFNJKbvNtcBPiliWg5sgBh0HMsjtjeSUPSojrAYr6fbTSHRJqUW0abZLXNjVcnkQhijrK%2BjirrjDFNrWGfkAhuAnykKwf5tbb36jAU5rG3a8D%2Bf6N17K1265J1IMUqCcsMs9Q9SPda8JOg2zTIP4G%2FvQ%2BeNGKmrkoavavsJJgdPMNv%2FDsdetdrjZfig3axPxtwXDIlSjINNyySChTU8Pwl8hIxl9U4DskJE%2Fq1rwSoiJidZzYW%2F%2BTKja0UxHiXTN6RX9Qy8fovDgKhNXhoKrFfcLyn9Ji9hw4OjGg8FBUeUkc81Vj1SqPg8IwjcjQxAY6pgGWD0hebRF%2FZTPG75ifXJDHhvQriYYi5wJUyrze%2BfeDHSkRurtaMioEVYDPEja%2FP%2F6JMliR32kX2dRTSPnjdIY19Qwlsx%2BlCw%2F7S46Hr2VjmBx49sdpmIv5vttWVFRsLoZDesLwU%2FFOEpSNIJ%2BETuDByOqUyozcMxAEKlYogkgQ0m19AFaTJ8KD%2BkDWixAvwtOd3SDjdecSixCrCK6yJUZV%2BO9M%2Ffw%2B&X-Amz-Signature=8e81c5758339e95b92b1233e52e869e66f45863ddf4af1ba5cbeccdc25b6a5ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HF2TLQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICCNg4rj7o51IJbTJjLzlq8z%2FeklFMqsR6S%2BfKTlFbLeAiBwhlwR3xJKt3UvvcHmhoi9g5AF5ZkMez605cLELgdS8CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA9UpbBC03%2B0nEZ50KtwD6s1YtT1KUAcWZ61u8eCxH1V%2FPrgh2GDm19rpMSTG%2FiQkusQ%2FS7%2BhtCn%2B4bEEv7C7kz2cjckrRRxdNB1R4a3aAqHnPT9UZ7Xd6Mp40ogsrOloNlKpjTmb9IYLfB88rFzUbUERlpaTN0wVigx9Kff2wbNtZYJfzAFfBf%2Bh7i9pzLcykDDKO4m%2BaLEzeTs2%2FGL944fFfolLezOklXdJmYY%2BPaTx7SKTld5L0zqzHw9qi0e%2FiWvgPbczpL2imVAJx%2BKIv%2BsTMyaZNnMaoRi5TgwSMZy%2B578IvIBM1Ftf5ZHGAe6Dby2A7HFSkAbbkEGd335QO%2BMSFNJKbvNtcBPiliWg5sgBh0HMsjtjeSUPSojrAYr6fbTSHRJqUW0abZLXNjVcnkQhijrK%2BjirrjDFNrWGfkAhuAnykKwf5tbb36jAU5rG3a8D%2Bf6N17K1265J1IMUqCcsMs9Q9SPda8JOg2zTIP4G%2FvQ%2BeNGKmrkoavavsJJgdPMNv%2FDsdetdrjZfig3axPxtwXDIlSjINNyySChTU8Pwl8hIxl9U4DskJE%2Fq1rwSoiJidZzYW%2F%2BTKja0UxHiXTN6RX9Qy8fovDgKhNXhoKrFfcLyn9Ji9hw4OjGg8FBUeUkc81Vj1SqPg8IwjcjQxAY6pgGWD0hebRF%2FZTPG75ifXJDHhvQriYYi5wJUyrze%2BfeDHSkRurtaMioEVYDPEja%2FP%2F6JMliR32kX2dRTSPnjdIY19Qwlsx%2BlCw%2F7S46Hr2VjmBx49sdpmIv5vttWVFRsLoZDesLwU%2FFOEpSNIJ%2BETuDByOqUyozcMxAEKlYogkgQ0m19AFaTJ8KD%2BkDWixAvwtOd3SDjdecSixCrCK6yJUZV%2BO9M%2Ffw%2B&X-Amz-Signature=e9adf982bb37f5cbb1450dd146a6526f06206e939226df572d1b4fbe1c738aff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HF2TLQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICCNg4rj7o51IJbTJjLzlq8z%2FeklFMqsR6S%2BfKTlFbLeAiBwhlwR3xJKt3UvvcHmhoi9g5AF5ZkMez605cLELgdS8CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA9UpbBC03%2B0nEZ50KtwD6s1YtT1KUAcWZ61u8eCxH1V%2FPrgh2GDm19rpMSTG%2FiQkusQ%2FS7%2BhtCn%2B4bEEv7C7kz2cjckrRRxdNB1R4a3aAqHnPT9UZ7Xd6Mp40ogsrOloNlKpjTmb9IYLfB88rFzUbUERlpaTN0wVigx9Kff2wbNtZYJfzAFfBf%2Bh7i9pzLcykDDKO4m%2BaLEzeTs2%2FGL944fFfolLezOklXdJmYY%2BPaTx7SKTld5L0zqzHw9qi0e%2FiWvgPbczpL2imVAJx%2BKIv%2BsTMyaZNnMaoRi5TgwSMZy%2B578IvIBM1Ftf5ZHGAe6Dby2A7HFSkAbbkEGd335QO%2BMSFNJKbvNtcBPiliWg5sgBh0HMsjtjeSUPSojrAYr6fbTSHRJqUW0abZLXNjVcnkQhijrK%2BjirrjDFNrWGfkAhuAnykKwf5tbb36jAU5rG3a8D%2Bf6N17K1265J1IMUqCcsMs9Q9SPda8JOg2zTIP4G%2FvQ%2BeNGKmrkoavavsJJgdPMNv%2FDsdetdrjZfig3axPxtwXDIlSjINNyySChTU8Pwl8hIxl9U4DskJE%2Fq1rwSoiJidZzYW%2F%2BTKja0UxHiXTN6RX9Qy8fovDgKhNXhoKrFfcLyn9Ji9hw4OjGg8FBUeUkc81Vj1SqPg8IwjcjQxAY6pgGWD0hebRF%2FZTPG75ifXJDHhvQriYYi5wJUyrze%2BfeDHSkRurtaMioEVYDPEja%2FP%2F6JMliR32kX2dRTSPnjdIY19Qwlsx%2BlCw%2F7S46Hr2VjmBx49sdpmIv5vttWVFRsLoZDesLwU%2FFOEpSNIJ%2BETuDByOqUyozcMxAEKlYogkgQ0m19AFaTJ8KD%2BkDWixAvwtOd3SDjdecSixCrCK6yJUZV%2BO9M%2Ffw%2B&X-Amz-Signature=49ac71a48aa5214ae94985d9658a921a0a62aa803ae826ff036b89fa4e12be5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HF2TLQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICCNg4rj7o51IJbTJjLzlq8z%2FeklFMqsR6S%2BfKTlFbLeAiBwhlwR3xJKt3UvvcHmhoi9g5AF5ZkMez605cLELgdS8CqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA9UpbBC03%2B0nEZ50KtwD6s1YtT1KUAcWZ61u8eCxH1V%2FPrgh2GDm19rpMSTG%2FiQkusQ%2FS7%2BhtCn%2B4bEEv7C7kz2cjckrRRxdNB1R4a3aAqHnPT9UZ7Xd6Mp40ogsrOloNlKpjTmb9IYLfB88rFzUbUERlpaTN0wVigx9Kff2wbNtZYJfzAFfBf%2Bh7i9pzLcykDDKO4m%2BaLEzeTs2%2FGL944fFfolLezOklXdJmYY%2BPaTx7SKTld5L0zqzHw9qi0e%2FiWvgPbczpL2imVAJx%2BKIv%2BsTMyaZNnMaoRi5TgwSMZy%2B578IvIBM1Ftf5ZHGAe6Dby2A7HFSkAbbkEGd335QO%2BMSFNJKbvNtcBPiliWg5sgBh0HMsjtjeSUPSojrAYr6fbTSHRJqUW0abZLXNjVcnkQhijrK%2BjirrjDFNrWGfkAhuAnykKwf5tbb36jAU5rG3a8D%2Bf6N17K1265J1IMUqCcsMs9Q9SPda8JOg2zTIP4G%2FvQ%2BeNGKmrkoavavsJJgdPMNv%2FDsdetdrjZfig3axPxtwXDIlSjINNyySChTU8Pwl8hIxl9U4DskJE%2Fq1rwSoiJidZzYW%2F%2BTKja0UxHiXTN6RX9Qy8fovDgKhNXhoKrFfcLyn9Ji9hw4OjGg8FBUeUkc81Vj1SqPg8IwjcjQxAY6pgGWD0hebRF%2FZTPG75ifXJDHhvQriYYi5wJUyrze%2BfeDHSkRurtaMioEVYDPEja%2FP%2F6JMliR32kX2dRTSPnjdIY19Qwlsx%2BlCw%2F7S46Hr2VjmBx49sdpmIv5vttWVFRsLoZDesLwU%2FFOEpSNIJ%2BETuDByOqUyozcMxAEKlYogkgQ0m19AFaTJ8KD%2BkDWixAvwtOd3SDjdecSixCrCK6yJUZV%2BO9M%2Ffw%2B&X-Amz-Signature=d89b6ae838608437da89985632a06c38983e832d29f6b7f98fdcad6e02b985dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
