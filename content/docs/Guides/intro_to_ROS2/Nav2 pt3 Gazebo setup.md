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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U53ABPDG%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ6a41wYRASICLnLhp4hIQHy3QNLu41ao3QDWdc1APTQIgScX58birPwgeeXZ3XiKYjUDUiLUMIFlLSutTt7Bv4m8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2Sqk3W1y%2FbuOeELSrcA%2F2x0gL%2FU47W8Ln12x7jeEa%2Fldfx0DBRAzyaMqetuB%2BcrJRFVchhFtRO%2BttAoH9IAktDh3bTzLhqcb89LgPhsCWbml3cyrxE3DG1MhGM7QBu%2FlHScZP037gcwuzrRrBYZK3egfbR%2Fd1yNo%2BtgQyKD3nx6TJWuQ7fEjGr86jpXtI2jf3fumqz%2FGb3NzQcuhsslXLkKhyMm%2FIgWbz4px8mQyOK7cOfuR7BPp0gRPaBq2oW63IpyAKTQRYGouNCGOZKPFEjynlSblNv%2BvpT1GG7KlDGzIm0EGxTCswFHGVy0r4JlIdhnpNPutMrk%2BgiramuhF%2FQWRYhQdcmqh7IYkKmqySuzoqsjKqx9uhUtQfMvX7DF48lq4XX77xP1wNoiByQkPloVU4nkgzYoYtJSGSy7Gow6EywY2WKEbzQ%2BAo7vN%2FRBfiO3eIAlB2oMgBf3p3SSKBCpJUvK7WuqV1vzkI4fPPVqZ%2BwX9UEz6Iu%2FMM%2FlxnlNe173JWtOXLbB8w4TYsHCpzMg1ormg6JQykDU4IvabpCX9Gxv4KmHdGtlh1oNceW8R0WPMxuGMVioZvdgWpNew0agRS%2FFCLgri4WbchavC2ndqF3Ft1QEfC%2B9FuH7YHU1Yn3W0%2BI3CJnCPDNMM7n7tMGOqUBmYayx3ohe%2B6h84OCakBmmBKXqugu0w9FmPnCl72S8sPpjme3Icl1X7q5QZVlcL5O2MQUGwKNt3HLebAYpWUX%2FO7z92da3RPXc%2BqtToY7XXPw8zWrhUD3Vy0V%2FRd1m%2BreGnDkVB%2BBzUzHBZTqMg%2B4o1XwWdBwJnzRILROzXGxgvHm1ky8Jk8NtUuOvrgl7p3Gsn259PwWeyNJhmNRob5KhgkX3HAF&X-Amz-Signature=26f23c5f21fb84c665ba5c80ac985f606c6ddf69212df917b29b09285b4d32c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U53ABPDG%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ6a41wYRASICLnLhp4hIQHy3QNLu41ao3QDWdc1APTQIgScX58birPwgeeXZ3XiKYjUDUiLUMIFlLSutTt7Bv4m8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2Sqk3W1y%2FbuOeELSrcA%2F2x0gL%2FU47W8Ln12x7jeEa%2Fldfx0DBRAzyaMqetuB%2BcrJRFVchhFtRO%2BttAoH9IAktDh3bTzLhqcb89LgPhsCWbml3cyrxE3DG1MhGM7QBu%2FlHScZP037gcwuzrRrBYZK3egfbR%2Fd1yNo%2BtgQyKD3nx6TJWuQ7fEjGr86jpXtI2jf3fumqz%2FGb3NzQcuhsslXLkKhyMm%2FIgWbz4px8mQyOK7cOfuR7BPp0gRPaBq2oW63IpyAKTQRYGouNCGOZKPFEjynlSblNv%2BvpT1GG7KlDGzIm0EGxTCswFHGVy0r4JlIdhnpNPutMrk%2BgiramuhF%2FQWRYhQdcmqh7IYkKmqySuzoqsjKqx9uhUtQfMvX7DF48lq4XX77xP1wNoiByQkPloVU4nkgzYoYtJSGSy7Gow6EywY2WKEbzQ%2BAo7vN%2FRBfiO3eIAlB2oMgBf3p3SSKBCpJUvK7WuqV1vzkI4fPPVqZ%2BwX9UEz6Iu%2FMM%2FlxnlNe173JWtOXLbB8w4TYsHCpzMg1ormg6JQykDU4IvabpCX9Gxv4KmHdGtlh1oNceW8R0WPMxuGMVioZvdgWpNew0agRS%2FFCLgri4WbchavC2ndqF3Ft1QEfC%2B9FuH7YHU1Yn3W0%2BI3CJnCPDNMM7n7tMGOqUBmYayx3ohe%2B6h84OCakBmmBKXqugu0w9FmPnCl72S8sPpjme3Icl1X7q5QZVlcL5O2MQUGwKNt3HLebAYpWUX%2FO7z92da3RPXc%2BqtToY7XXPw8zWrhUD3Vy0V%2FRd1m%2BreGnDkVB%2BBzUzHBZTqMg%2B4o1XwWdBwJnzRILROzXGxgvHm1ky8Jk8NtUuOvrgl7p3Gsn259PwWeyNJhmNRob5KhgkX3HAF&X-Amz-Signature=ff75b22ad3b7b53332830e08064813c54769fb6e144715ee4b9bf3f37a07c5ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U53ABPDG%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ6a41wYRASICLnLhp4hIQHy3QNLu41ao3QDWdc1APTQIgScX58birPwgeeXZ3XiKYjUDUiLUMIFlLSutTt7Bv4m8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2Sqk3W1y%2FbuOeELSrcA%2F2x0gL%2FU47W8Ln12x7jeEa%2Fldfx0DBRAzyaMqetuB%2BcrJRFVchhFtRO%2BttAoH9IAktDh3bTzLhqcb89LgPhsCWbml3cyrxE3DG1MhGM7QBu%2FlHScZP037gcwuzrRrBYZK3egfbR%2Fd1yNo%2BtgQyKD3nx6TJWuQ7fEjGr86jpXtI2jf3fumqz%2FGb3NzQcuhsslXLkKhyMm%2FIgWbz4px8mQyOK7cOfuR7BPp0gRPaBq2oW63IpyAKTQRYGouNCGOZKPFEjynlSblNv%2BvpT1GG7KlDGzIm0EGxTCswFHGVy0r4JlIdhnpNPutMrk%2BgiramuhF%2FQWRYhQdcmqh7IYkKmqySuzoqsjKqx9uhUtQfMvX7DF48lq4XX77xP1wNoiByQkPloVU4nkgzYoYtJSGSy7Gow6EywY2WKEbzQ%2BAo7vN%2FRBfiO3eIAlB2oMgBf3p3SSKBCpJUvK7WuqV1vzkI4fPPVqZ%2BwX9UEz6Iu%2FMM%2FlxnlNe173JWtOXLbB8w4TYsHCpzMg1ormg6JQykDU4IvabpCX9Gxv4KmHdGtlh1oNceW8R0WPMxuGMVioZvdgWpNew0agRS%2FFCLgri4WbchavC2ndqF3Ft1QEfC%2B9FuH7YHU1Yn3W0%2BI3CJnCPDNMM7n7tMGOqUBmYayx3ohe%2B6h84OCakBmmBKXqugu0w9FmPnCl72S8sPpjme3Icl1X7q5QZVlcL5O2MQUGwKNt3HLebAYpWUX%2FO7z92da3RPXc%2BqtToY7XXPw8zWrhUD3Vy0V%2FRd1m%2BreGnDkVB%2BBzUzHBZTqMg%2B4o1XwWdBwJnzRILROzXGxgvHm1ky8Jk8NtUuOvrgl7p3Gsn259PwWeyNJhmNRob5KhgkX3HAF&X-Amz-Signature=6219394e09e4859681e1ac50efe6109ebb21b1e035b169938b2fb20f4457267d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U53ABPDG%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ6a41wYRASICLnLhp4hIQHy3QNLu41ao3QDWdc1APTQIgScX58birPwgeeXZ3XiKYjUDUiLUMIFlLSutTt7Bv4m8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2Sqk3W1y%2FbuOeELSrcA%2F2x0gL%2FU47W8Ln12x7jeEa%2Fldfx0DBRAzyaMqetuB%2BcrJRFVchhFtRO%2BttAoH9IAktDh3bTzLhqcb89LgPhsCWbml3cyrxE3DG1MhGM7QBu%2FlHScZP037gcwuzrRrBYZK3egfbR%2Fd1yNo%2BtgQyKD3nx6TJWuQ7fEjGr86jpXtI2jf3fumqz%2FGb3NzQcuhsslXLkKhyMm%2FIgWbz4px8mQyOK7cOfuR7BPp0gRPaBq2oW63IpyAKTQRYGouNCGOZKPFEjynlSblNv%2BvpT1GG7KlDGzIm0EGxTCswFHGVy0r4JlIdhnpNPutMrk%2BgiramuhF%2FQWRYhQdcmqh7IYkKmqySuzoqsjKqx9uhUtQfMvX7DF48lq4XX77xP1wNoiByQkPloVU4nkgzYoYtJSGSy7Gow6EywY2WKEbzQ%2BAo7vN%2FRBfiO3eIAlB2oMgBf3p3SSKBCpJUvK7WuqV1vzkI4fPPVqZ%2BwX9UEz6Iu%2FMM%2FlxnlNe173JWtOXLbB8w4TYsHCpzMg1ormg6JQykDU4IvabpCX9Gxv4KmHdGtlh1oNceW8R0WPMxuGMVioZvdgWpNew0agRS%2FFCLgri4WbchavC2ndqF3Ft1QEfC%2B9FuH7YHU1Yn3W0%2BI3CJnCPDNMM7n7tMGOqUBmYayx3ohe%2B6h84OCakBmmBKXqugu0w9FmPnCl72S8sPpjme3Icl1X7q5QZVlcL5O2MQUGwKNt3HLebAYpWUX%2FO7z92da3RPXc%2BqtToY7XXPw8zWrhUD3Vy0V%2FRd1m%2BreGnDkVB%2BBzUzHBZTqMg%2B4o1XwWdBwJnzRILROzXGxgvHm1ky8Jk8NtUuOvrgl7p3Gsn259PwWeyNJhmNRob5KhgkX3HAF&X-Amz-Signature=3cd2541a8a1b436f8ae48a022f11346f5da8a7f7ffd1c08de9a7f97b52dd623a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HY5NTBF%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJA6wvNtfEjKE2IyxDndtdrkelIKgkqsdGVpvmyB5coAIhAIxpmvgd91jIDkZWgxqpQEfMgAkJG8tzHoWAuElyT%2BncKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKfJNF8up1hOJ8gksq3ANcX3mTd6OnvUTvdqFa14AvWtJpvcjiuw7K6IyB%2FkKnxIkCoAOJLR3VYqZ9xWltyoBQLNjRRxpWSv4HOrSfjkqVJmfW%2FWQyAEmvpLN6Mva5zLdJjN09h%2BxZddv5ac6Go6OAAFkHHKkS0gIwDowYkVzRkc%2BWoUxFs3xyfImlpSxPLT3qiHcYONHE3%2BtCsG31%2BhZcjN0tuj0%2FRG9QmRw3TdmWxvqx9kJsAcwqd1Kzy43WK8pjdJ9YcbHFsAVr6C9tjzvjcCbmdkygBin0Uwb6CO6YZnZ92k%2FWPsZI7ATxxADjSRrITziC6sXcDrFtTDAiLPnbkP%2FRzB7fRFnPMvTWPCjXTXB5Fl%2BIytRQ6fc5xnYLRjJLA8hta9LJgRFVcK5FgCtvIjWgYYD1axx0qe6GdNm%2FpKjNMnHaJY2R1pfgvgYk026ycKCGqrwt0P1vEmcclAWMIHFzr2AbTVFpvmoiav3Pi2UzjkNDLxzX%2FcWClNwKuCm48XTKaRq0dKz5yxx4qrNR6CnBsVLbYxFIFIY2QRsAaeL5EY%2FfI2%2BU%2FjMTOyiRtxi52Js6ihV%2B8jWN70uxlsnn3tpYoO4tDoTRgdf1ecwmJrrt1GIOzsNn4OPTAQmvgEf%2FPGAPtVE8OmHoyzDv6O7TBjqkAVjTLAfRXI1ojKDvecjtBJJz71sedc5t08YTij5QSe5I3okppCWTs15gDcLvRCaAnPFSMmpYKKYe7iOExMPw0rHBvAi2XhSeiIPySS%2BN8owmDgENDlqxbb15mhZKAeGNr3fGNk5%2FtJkOsk7YySyleNUv6Dc7ko2Iq3o1bbK%2BjEn4Bon1s8ymjmUcx2xhJIraR8yjserNpY9xoq8mjo8u5sHyCgIK&X-Amz-Signature=4037ad99befb87612911e4b838e6912bd07528f41987637c7709021059f46dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U53ABPDG%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ6a41wYRASICLnLhp4hIQHy3QNLu41ao3QDWdc1APTQIgScX58birPwgeeXZ3XiKYjUDUiLUMIFlLSutTt7Bv4m8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2Sqk3W1y%2FbuOeELSrcA%2F2x0gL%2FU47W8Ln12x7jeEa%2Fldfx0DBRAzyaMqetuB%2BcrJRFVchhFtRO%2BttAoH9IAktDh3bTzLhqcb89LgPhsCWbml3cyrxE3DG1MhGM7QBu%2FlHScZP037gcwuzrRrBYZK3egfbR%2Fd1yNo%2BtgQyKD3nx6TJWuQ7fEjGr86jpXtI2jf3fumqz%2FGb3NzQcuhsslXLkKhyMm%2FIgWbz4px8mQyOK7cOfuR7BPp0gRPaBq2oW63IpyAKTQRYGouNCGOZKPFEjynlSblNv%2BvpT1GG7KlDGzIm0EGxTCswFHGVy0r4JlIdhnpNPutMrk%2BgiramuhF%2FQWRYhQdcmqh7IYkKmqySuzoqsjKqx9uhUtQfMvX7DF48lq4XX77xP1wNoiByQkPloVU4nkgzYoYtJSGSy7Gow6EywY2WKEbzQ%2BAo7vN%2FRBfiO3eIAlB2oMgBf3p3SSKBCpJUvK7WuqV1vzkI4fPPVqZ%2BwX9UEz6Iu%2FMM%2FlxnlNe173JWtOXLbB8w4TYsHCpzMg1ormg6JQykDU4IvabpCX9Gxv4KmHdGtlh1oNceW8R0WPMxuGMVioZvdgWpNew0agRS%2FFCLgri4WbchavC2ndqF3Ft1QEfC%2B9FuH7YHU1Yn3W0%2BI3CJnCPDNMM7n7tMGOqUBmYayx3ohe%2B6h84OCakBmmBKXqugu0w9FmPnCl72S8sPpjme3Icl1X7q5QZVlcL5O2MQUGwKNt3HLebAYpWUX%2FO7z92da3RPXc%2BqtToY7XXPw8zWrhUD3Vy0V%2FRd1m%2BreGnDkVB%2BBzUzHBZTqMg%2B4o1XwWdBwJnzRILROzXGxgvHm1ky8Jk8NtUuOvrgl7p3Gsn259PwWeyNJhmNRob5KhgkX3HAF&X-Amz-Signature=d15441ea4faed76358f8ac5e2e3b4890d6c7f7f31caa9dfb0ddc6027d9ab4c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U53ABPDG%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ6a41wYRASICLnLhp4hIQHy3QNLu41ao3QDWdc1APTQIgScX58birPwgeeXZ3XiKYjUDUiLUMIFlLSutTt7Bv4m8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2Sqk3W1y%2FbuOeELSrcA%2F2x0gL%2FU47W8Ln12x7jeEa%2Fldfx0DBRAzyaMqetuB%2BcrJRFVchhFtRO%2BttAoH9IAktDh3bTzLhqcb89LgPhsCWbml3cyrxE3DG1MhGM7QBu%2FlHScZP037gcwuzrRrBYZK3egfbR%2Fd1yNo%2BtgQyKD3nx6TJWuQ7fEjGr86jpXtI2jf3fumqz%2FGb3NzQcuhsslXLkKhyMm%2FIgWbz4px8mQyOK7cOfuR7BPp0gRPaBq2oW63IpyAKTQRYGouNCGOZKPFEjynlSblNv%2BvpT1GG7KlDGzIm0EGxTCswFHGVy0r4JlIdhnpNPutMrk%2BgiramuhF%2FQWRYhQdcmqh7IYkKmqySuzoqsjKqx9uhUtQfMvX7DF48lq4XX77xP1wNoiByQkPloVU4nkgzYoYtJSGSy7Gow6EywY2WKEbzQ%2BAo7vN%2FRBfiO3eIAlB2oMgBf3p3SSKBCpJUvK7WuqV1vzkI4fPPVqZ%2BwX9UEz6Iu%2FMM%2FlxnlNe173JWtOXLbB8w4TYsHCpzMg1ormg6JQykDU4IvabpCX9Gxv4KmHdGtlh1oNceW8R0WPMxuGMVioZvdgWpNew0agRS%2FFCLgri4WbchavC2ndqF3Ft1QEfC%2B9FuH7YHU1Yn3W0%2BI3CJnCPDNMM7n7tMGOqUBmYayx3ohe%2B6h84OCakBmmBKXqugu0w9FmPnCl72S8sPpjme3Icl1X7q5QZVlcL5O2MQUGwKNt3HLebAYpWUX%2FO7z92da3RPXc%2BqtToY7XXPw8zWrhUD3Vy0V%2FRd1m%2BreGnDkVB%2BBzUzHBZTqMg%2B4o1XwWdBwJnzRILROzXGxgvHm1ky8Jk8NtUuOvrgl7p3Gsn259PwWeyNJhmNRob5KhgkX3HAF&X-Amz-Signature=4dcdbf22757b4a8e9ac513e1180c4e73af677dec13b26093ba87f0580b98a552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U53ABPDG%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ6a41wYRASICLnLhp4hIQHy3QNLu41ao3QDWdc1APTQIgScX58birPwgeeXZ3XiKYjUDUiLUMIFlLSutTt7Bv4m8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2Sqk3W1y%2FbuOeELSrcA%2F2x0gL%2FU47W8Ln12x7jeEa%2Fldfx0DBRAzyaMqetuB%2BcrJRFVchhFtRO%2BttAoH9IAktDh3bTzLhqcb89LgPhsCWbml3cyrxE3DG1MhGM7QBu%2FlHScZP037gcwuzrRrBYZK3egfbR%2Fd1yNo%2BtgQyKD3nx6TJWuQ7fEjGr86jpXtI2jf3fumqz%2FGb3NzQcuhsslXLkKhyMm%2FIgWbz4px8mQyOK7cOfuR7BPp0gRPaBq2oW63IpyAKTQRYGouNCGOZKPFEjynlSblNv%2BvpT1GG7KlDGzIm0EGxTCswFHGVy0r4JlIdhnpNPutMrk%2BgiramuhF%2FQWRYhQdcmqh7IYkKmqySuzoqsjKqx9uhUtQfMvX7DF48lq4XX77xP1wNoiByQkPloVU4nkgzYoYtJSGSy7Gow6EywY2WKEbzQ%2BAo7vN%2FRBfiO3eIAlB2oMgBf3p3SSKBCpJUvK7WuqV1vzkI4fPPVqZ%2BwX9UEz6Iu%2FMM%2FlxnlNe173JWtOXLbB8w4TYsHCpzMg1ormg6JQykDU4IvabpCX9Gxv4KmHdGtlh1oNceW8R0WPMxuGMVioZvdgWpNew0agRS%2FFCLgri4WbchavC2ndqF3Ft1QEfC%2B9FuH7YHU1Yn3W0%2BI3CJnCPDNMM7n7tMGOqUBmYayx3ohe%2B6h84OCakBmmBKXqugu0w9FmPnCl72S8sPpjme3Icl1X7q5QZVlcL5O2MQUGwKNt3HLebAYpWUX%2FO7z92da3RPXc%2BqtToY7XXPw8zWrhUD3Vy0V%2FRd1m%2BreGnDkVB%2BBzUzHBZTqMg%2B4o1XwWdBwJnzRILROzXGxgvHm1ky8Jk8NtUuOvrgl7p3Gsn259PwWeyNJhmNRob5KhgkX3HAF&X-Amz-Signature=0554c5d6df73f84cef24038f38ae747f9de1ed479c3aa515c169fe24f7ae8405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U53ABPDG%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ6a41wYRASICLnLhp4hIQHy3QNLu41ao3QDWdc1APTQIgScX58birPwgeeXZ3XiKYjUDUiLUMIFlLSutTt7Bv4m8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2Sqk3W1y%2FbuOeELSrcA%2F2x0gL%2FU47W8Ln12x7jeEa%2Fldfx0DBRAzyaMqetuB%2BcrJRFVchhFtRO%2BttAoH9IAktDh3bTzLhqcb89LgPhsCWbml3cyrxE3DG1MhGM7QBu%2FlHScZP037gcwuzrRrBYZK3egfbR%2Fd1yNo%2BtgQyKD3nx6TJWuQ7fEjGr86jpXtI2jf3fumqz%2FGb3NzQcuhsslXLkKhyMm%2FIgWbz4px8mQyOK7cOfuR7BPp0gRPaBq2oW63IpyAKTQRYGouNCGOZKPFEjynlSblNv%2BvpT1GG7KlDGzIm0EGxTCswFHGVy0r4JlIdhnpNPutMrk%2BgiramuhF%2FQWRYhQdcmqh7IYkKmqySuzoqsjKqx9uhUtQfMvX7DF48lq4XX77xP1wNoiByQkPloVU4nkgzYoYtJSGSy7Gow6EywY2WKEbzQ%2BAo7vN%2FRBfiO3eIAlB2oMgBf3p3SSKBCpJUvK7WuqV1vzkI4fPPVqZ%2BwX9UEz6Iu%2FMM%2FlxnlNe173JWtOXLbB8w4TYsHCpzMg1ormg6JQykDU4IvabpCX9Gxv4KmHdGtlh1oNceW8R0WPMxuGMVioZvdgWpNew0agRS%2FFCLgri4WbchavC2ndqF3Ft1QEfC%2B9FuH7YHU1Yn3W0%2BI3CJnCPDNMM7n7tMGOqUBmYayx3ohe%2B6h84OCakBmmBKXqugu0w9FmPnCl72S8sPpjme3Icl1X7q5QZVlcL5O2MQUGwKNt3HLebAYpWUX%2FO7z92da3RPXc%2BqtToY7XXPw8zWrhUD3Vy0V%2FRd1m%2BreGnDkVB%2BBzUzHBZTqMg%2B4o1XwWdBwJnzRILROzXGxgvHm1ky8Jk8NtUuOvrgl7p3Gsn259PwWeyNJhmNRob5KhgkX3HAF&X-Amz-Signature=9f75400f48399803ba00bf2264e4bd01535c0536dd32cd975bff1b29dd516011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U53ABPDG%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ6a41wYRASICLnLhp4hIQHy3QNLu41ao3QDWdc1APTQIgScX58birPwgeeXZ3XiKYjUDUiLUMIFlLSutTt7Bv4m8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2Sqk3W1y%2FbuOeELSrcA%2F2x0gL%2FU47W8Ln12x7jeEa%2Fldfx0DBRAzyaMqetuB%2BcrJRFVchhFtRO%2BttAoH9IAktDh3bTzLhqcb89LgPhsCWbml3cyrxE3DG1MhGM7QBu%2FlHScZP037gcwuzrRrBYZK3egfbR%2Fd1yNo%2BtgQyKD3nx6TJWuQ7fEjGr86jpXtI2jf3fumqz%2FGb3NzQcuhsslXLkKhyMm%2FIgWbz4px8mQyOK7cOfuR7BPp0gRPaBq2oW63IpyAKTQRYGouNCGOZKPFEjynlSblNv%2BvpT1GG7KlDGzIm0EGxTCswFHGVy0r4JlIdhnpNPutMrk%2BgiramuhF%2FQWRYhQdcmqh7IYkKmqySuzoqsjKqx9uhUtQfMvX7DF48lq4XX77xP1wNoiByQkPloVU4nkgzYoYtJSGSy7Gow6EywY2WKEbzQ%2BAo7vN%2FRBfiO3eIAlB2oMgBf3p3SSKBCpJUvK7WuqV1vzkI4fPPVqZ%2BwX9UEz6Iu%2FMM%2FlxnlNe173JWtOXLbB8w4TYsHCpzMg1ormg6JQykDU4IvabpCX9Gxv4KmHdGtlh1oNceW8R0WPMxuGMVioZvdgWpNew0agRS%2FFCLgri4WbchavC2ndqF3Ft1QEfC%2B9FuH7YHU1Yn3W0%2BI3CJnCPDNMM7n7tMGOqUBmYayx3ohe%2B6h84OCakBmmBKXqugu0w9FmPnCl72S8sPpjme3Icl1X7q5QZVlcL5O2MQUGwKNt3HLebAYpWUX%2FO7z92da3RPXc%2BqtToY7XXPw8zWrhUD3Vy0V%2FRd1m%2BreGnDkVB%2BBzUzHBZTqMg%2B4o1XwWdBwJnzRILROzXGxgvHm1ky8Jk8NtUuOvrgl7p3Gsn259PwWeyNJhmNRob5KhgkX3HAF&X-Amz-Signature=666c7442970538de1592b2d45b5a6cb3300fe20ef24ddfde41f14ae1bffc9838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U53ABPDG%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ6a41wYRASICLnLhp4hIQHy3QNLu41ao3QDWdc1APTQIgScX58birPwgeeXZ3XiKYjUDUiLUMIFlLSutTt7Bv4m8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2Sqk3W1y%2FbuOeELSrcA%2F2x0gL%2FU47W8Ln12x7jeEa%2Fldfx0DBRAzyaMqetuB%2BcrJRFVchhFtRO%2BttAoH9IAktDh3bTzLhqcb89LgPhsCWbml3cyrxE3DG1MhGM7QBu%2FlHScZP037gcwuzrRrBYZK3egfbR%2Fd1yNo%2BtgQyKD3nx6TJWuQ7fEjGr86jpXtI2jf3fumqz%2FGb3NzQcuhsslXLkKhyMm%2FIgWbz4px8mQyOK7cOfuR7BPp0gRPaBq2oW63IpyAKTQRYGouNCGOZKPFEjynlSblNv%2BvpT1GG7KlDGzIm0EGxTCswFHGVy0r4JlIdhnpNPutMrk%2BgiramuhF%2FQWRYhQdcmqh7IYkKmqySuzoqsjKqx9uhUtQfMvX7DF48lq4XX77xP1wNoiByQkPloVU4nkgzYoYtJSGSy7Gow6EywY2WKEbzQ%2BAo7vN%2FRBfiO3eIAlB2oMgBf3p3SSKBCpJUvK7WuqV1vzkI4fPPVqZ%2BwX9UEz6Iu%2FMM%2FlxnlNe173JWtOXLbB8w4TYsHCpzMg1ormg6JQykDU4IvabpCX9Gxv4KmHdGtlh1oNceW8R0WPMxuGMVioZvdgWpNew0agRS%2FFCLgri4WbchavC2ndqF3Ft1QEfC%2B9FuH7YHU1Yn3W0%2BI3CJnCPDNMM7n7tMGOqUBmYayx3ohe%2B6h84OCakBmmBKXqugu0w9FmPnCl72S8sPpjme3Icl1X7q5QZVlcL5O2MQUGwKNt3HLebAYpWUX%2FO7z92da3RPXc%2BqtToY7XXPw8zWrhUD3Vy0V%2FRd1m%2BreGnDkVB%2BBzUzHBZTqMg%2B4o1XwWdBwJnzRILROzXGxgvHm1ky8Jk8NtUuOvrgl7p3Gsn259PwWeyNJhmNRob5KhgkX3HAF&X-Amz-Signature=45e618f0e0b21d2c70f73c538ec48cc9be0a66e904c96ab00f06623d7941bbfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


