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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPMEXZCP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFR3m4vpnq4FsNCPfCI3xcgklAy39KKElTZ84CU9E7Q5AiAJ86xzhZL0hyptrc21G9vNcT9woOZdVoSDrsCvCwyiASr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMqYbDHbslGWoHn29vKtwDer%2F%2BpTaYWURfi%2FR16Q0WTMCIU1Xx35cfbM3kVuuQ2gbcNW84SCtP77jMpcggYGLnbQJot9B53YYng4J0RnPektqjfXFO6AG98K2b5J%2Bkwlh7iJaaoiLpfDiWpfuCsUHd6NlztfuWQYZJRbsh5dvKa8YB4%2Ba%2FgT3ZFUzk0LVNKLEoefxMN6o%2BeSquZEp3XrLYBn3mwK%2Bf51IZRTGts%2FmN82eX%2BFJOloMvhvHzsMglo2QpC0jZeM7Gnl56A74m71RpU0NlI%2Bhdjn7%2F8DDFV9NdR0KPjJyNON%2Bx7E4hSmZENyDHU2Emfizv9ffAwRjskkFpchQLcpCQ6aPKqiXePFkGd2gjd%2BwR8qugWGFduqY1nY9u7idtZv1%2F%2Fce560ADVs3DmGHRqS1BTpQfL940CviaEZFMBrMtDcspVgNM5I78EhDlL4BvOjvYlSh98Ybfcz4Q8KMAlFdPAy14W9iS2E9VXIbV%2FXbNkJY480XWzHBe%2F3Cv0U%2BU12KWfsCV0zQQiFxt1aiN7en4v%2FjMQOBImnSaJo1%2BelCvL5G7MnLpPabaGB0RFBjyKN3GKs%2Fle1hAdAhnwropbcROkWjIfgmE6lZBuxS9mrV3hnbRMH%2BHZN4nN9GeWgQ71vEM1VH53sEwpKu%2BxAY6pgGJMV3MmtoTH4o6PPqk8x4Iih2XNvnf2qVSHE4ab41QwZ5KeVXm6NQyWiyiyKyQVLQAavNv3MMDSTqCcYPYSQA6tzP2qxuy1jaqPJgVWjLbpWWN%2BgEQqS8a7OUDGyoUlC7e6kFPWBJVMahXpu4MsJrsF6oMaoAGtubDW8lQDaRGoPM2WGJalhwkenRWp9unN%2FmmQhhQTgTDD3MG2ySQSVnMZ8xOzSiT&X-Amz-Signature=6b4a4302112c22dd6f2668a9659ec1dc2fc31a0b9c10a8ce3dd0ba226bd22b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPMEXZCP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFR3m4vpnq4FsNCPfCI3xcgklAy39KKElTZ84CU9E7Q5AiAJ86xzhZL0hyptrc21G9vNcT9woOZdVoSDrsCvCwyiASr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMqYbDHbslGWoHn29vKtwDer%2F%2BpTaYWURfi%2FR16Q0WTMCIU1Xx35cfbM3kVuuQ2gbcNW84SCtP77jMpcggYGLnbQJot9B53YYng4J0RnPektqjfXFO6AG98K2b5J%2Bkwlh7iJaaoiLpfDiWpfuCsUHd6NlztfuWQYZJRbsh5dvKa8YB4%2Ba%2FgT3ZFUzk0LVNKLEoefxMN6o%2BeSquZEp3XrLYBn3mwK%2Bf51IZRTGts%2FmN82eX%2BFJOloMvhvHzsMglo2QpC0jZeM7Gnl56A74m71RpU0NlI%2Bhdjn7%2F8DDFV9NdR0KPjJyNON%2Bx7E4hSmZENyDHU2Emfizv9ffAwRjskkFpchQLcpCQ6aPKqiXePFkGd2gjd%2BwR8qugWGFduqY1nY9u7idtZv1%2F%2Fce560ADVs3DmGHRqS1BTpQfL940CviaEZFMBrMtDcspVgNM5I78EhDlL4BvOjvYlSh98Ybfcz4Q8KMAlFdPAy14W9iS2E9VXIbV%2FXbNkJY480XWzHBe%2F3Cv0U%2BU12KWfsCV0zQQiFxt1aiN7en4v%2FjMQOBImnSaJo1%2BelCvL5G7MnLpPabaGB0RFBjyKN3GKs%2Fle1hAdAhnwropbcROkWjIfgmE6lZBuxS9mrV3hnbRMH%2BHZN4nN9GeWgQ71vEM1VH53sEwpKu%2BxAY6pgGJMV3MmtoTH4o6PPqk8x4Iih2XNvnf2qVSHE4ab41QwZ5KeVXm6NQyWiyiyKyQVLQAavNv3MMDSTqCcYPYSQA6tzP2qxuy1jaqPJgVWjLbpWWN%2BgEQqS8a7OUDGyoUlC7e6kFPWBJVMahXpu4MsJrsF6oMaoAGtubDW8lQDaRGoPM2WGJalhwkenRWp9unN%2FmmQhhQTgTDD3MG2ySQSVnMZ8xOzSiT&X-Amz-Signature=85e1b7f5be9a54fa93921d357b94d0408da56a1d53c044ea91e22c39093a7088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPMEXZCP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFR3m4vpnq4FsNCPfCI3xcgklAy39KKElTZ84CU9E7Q5AiAJ86xzhZL0hyptrc21G9vNcT9woOZdVoSDrsCvCwyiASr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMqYbDHbslGWoHn29vKtwDer%2F%2BpTaYWURfi%2FR16Q0WTMCIU1Xx35cfbM3kVuuQ2gbcNW84SCtP77jMpcggYGLnbQJot9B53YYng4J0RnPektqjfXFO6AG98K2b5J%2Bkwlh7iJaaoiLpfDiWpfuCsUHd6NlztfuWQYZJRbsh5dvKa8YB4%2Ba%2FgT3ZFUzk0LVNKLEoefxMN6o%2BeSquZEp3XrLYBn3mwK%2Bf51IZRTGts%2FmN82eX%2BFJOloMvhvHzsMglo2QpC0jZeM7Gnl56A74m71RpU0NlI%2Bhdjn7%2F8DDFV9NdR0KPjJyNON%2Bx7E4hSmZENyDHU2Emfizv9ffAwRjskkFpchQLcpCQ6aPKqiXePFkGd2gjd%2BwR8qugWGFduqY1nY9u7idtZv1%2F%2Fce560ADVs3DmGHRqS1BTpQfL940CviaEZFMBrMtDcspVgNM5I78EhDlL4BvOjvYlSh98Ybfcz4Q8KMAlFdPAy14W9iS2E9VXIbV%2FXbNkJY480XWzHBe%2F3Cv0U%2BU12KWfsCV0zQQiFxt1aiN7en4v%2FjMQOBImnSaJo1%2BelCvL5G7MnLpPabaGB0RFBjyKN3GKs%2Fle1hAdAhnwropbcROkWjIfgmE6lZBuxS9mrV3hnbRMH%2BHZN4nN9GeWgQ71vEM1VH53sEwpKu%2BxAY6pgGJMV3MmtoTH4o6PPqk8x4Iih2XNvnf2qVSHE4ab41QwZ5KeVXm6NQyWiyiyKyQVLQAavNv3MMDSTqCcYPYSQA6tzP2qxuy1jaqPJgVWjLbpWWN%2BgEQqS8a7OUDGyoUlC7e6kFPWBJVMahXpu4MsJrsF6oMaoAGtubDW8lQDaRGoPM2WGJalhwkenRWp9unN%2FmmQhhQTgTDD3MG2ySQSVnMZ8xOzSiT&X-Amz-Signature=44aa08f1eb412e8a8f768d87612b9e522e4b9df46dceb1d180e6fdbecef7e6e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPMEXZCP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFR3m4vpnq4FsNCPfCI3xcgklAy39KKElTZ84CU9E7Q5AiAJ86xzhZL0hyptrc21G9vNcT9woOZdVoSDrsCvCwyiASr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMqYbDHbslGWoHn29vKtwDer%2F%2BpTaYWURfi%2FR16Q0WTMCIU1Xx35cfbM3kVuuQ2gbcNW84SCtP77jMpcggYGLnbQJot9B53YYng4J0RnPektqjfXFO6AG98K2b5J%2Bkwlh7iJaaoiLpfDiWpfuCsUHd6NlztfuWQYZJRbsh5dvKa8YB4%2Ba%2FgT3ZFUzk0LVNKLEoefxMN6o%2BeSquZEp3XrLYBn3mwK%2Bf51IZRTGts%2FmN82eX%2BFJOloMvhvHzsMglo2QpC0jZeM7Gnl56A74m71RpU0NlI%2Bhdjn7%2F8DDFV9NdR0KPjJyNON%2Bx7E4hSmZENyDHU2Emfizv9ffAwRjskkFpchQLcpCQ6aPKqiXePFkGd2gjd%2BwR8qugWGFduqY1nY9u7idtZv1%2F%2Fce560ADVs3DmGHRqS1BTpQfL940CviaEZFMBrMtDcspVgNM5I78EhDlL4BvOjvYlSh98Ybfcz4Q8KMAlFdPAy14W9iS2E9VXIbV%2FXbNkJY480XWzHBe%2F3Cv0U%2BU12KWfsCV0zQQiFxt1aiN7en4v%2FjMQOBImnSaJo1%2BelCvL5G7MnLpPabaGB0RFBjyKN3GKs%2Fle1hAdAhnwropbcROkWjIfgmE6lZBuxS9mrV3hnbRMH%2BHZN4nN9GeWgQ71vEM1VH53sEwpKu%2BxAY6pgGJMV3MmtoTH4o6PPqk8x4Iih2XNvnf2qVSHE4ab41QwZ5KeVXm6NQyWiyiyKyQVLQAavNv3MMDSTqCcYPYSQA6tzP2qxuy1jaqPJgVWjLbpWWN%2BgEQqS8a7OUDGyoUlC7e6kFPWBJVMahXpu4MsJrsF6oMaoAGtubDW8lQDaRGoPM2WGJalhwkenRWp9unN%2FmmQhhQTgTDD3MG2ySQSVnMZ8xOzSiT&X-Amz-Signature=8ef35f47fc1c31a010d4e0b0e930c68721c0d43aa13bd764a859276e517ba29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH5F56LD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIR5GLIgalRfY8uM2OuiXZTk%2FBEPe6HXuCwdFUg06OoAIhAJTfYTWmTPNlPuzlorAqf0EtZLt5eYn%2FyN%2FBNlyuVzg5Kv8DCDIQABoMNjM3NDIzMTgzODA1Igy1LWyvnEhEGViFOYcq3ANzfoPcFcLWAnTeSA380PGSHtDkv2gapMczqG93KACbMdbtwO1bjVlekppmquKOBoVNPA%2F8nCXHH6yfyWOikzojDIZ0MAFIH0hM%2F2zBVaQgsXQFY9KLHzL1cZ%2BKwuRqFLtYOMQQiIfMjpeuMD4K7haZfu2g1EiRL5LwNDdfnNe%2BVCShtbp66H4clS66qx%2Bma%2F2vLPZPHz9po2Q19JACj4hxpWqJ%2BCtHTQq2Gx3HNrTQ9GVY9ZZ0fYh9We8%2FC4MxVSiJovSzCvF%2FnRsmu8GBQtB4s%2Bw8hVbW5pfLZaKojJfvgxhfiwqd4iqFJKzt3eyZnaNkkp%2BRetl5vuLoTFNAZ69bkO1NTdY9Z2QGgBkdNnKwOddId%2B4YuvKDd33P5YjHNQMDEX8HX0ZSHxnWEL0fL%2BR1cQ02rvkHN9o50fiTvL6qugc26GA0%2BViabFGKsIOB%2FWFYSICJfBRCZ73S3fj2vLsJQtmh7%2F0VVnh%2BS%2BQrXFfUq4bxeMb4CFgU%2BFkblBNjhUmuamfjMU0v635YCFyzWUoA71w%2BrIro2LEFuDCEznTyl4WA2JoDJ%2FOfZ2%2FQG%2FR2ySTUMUjTSvaWnR26hvpSsg9m%2BeC64rUB7Du6EguwpxrQam6JXebT99atqTKKSjDPq77EBjqkAeBce0E3SIhVdvSo%2Bpzrk55o%2FZeTUDd4PYmvyivt%2FFeXDLjKXH%2FL7nxhJlBD5QSarx%2BSV6kqNj9jWqKj928eR7dGs82sk2U65m%2FhHQgODWNlvP53KgWy84butmkHfpuFuHgqieptEFJAfUHOb5hNtWVbHSTk%2BJin35OVVaEZWcbtUBSkfDObEqu3N%2FHj0evJrwi7No5Td%2BF4NAB2bznp1lGRECBc&X-Amz-Signature=97151b50ec052b6fe85a5ee790cb9565827df13ab3a722960b9d685ec83a1a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPMEXZCP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFR3m4vpnq4FsNCPfCI3xcgklAy39KKElTZ84CU9E7Q5AiAJ86xzhZL0hyptrc21G9vNcT9woOZdVoSDrsCvCwyiASr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMqYbDHbslGWoHn29vKtwDer%2F%2BpTaYWURfi%2FR16Q0WTMCIU1Xx35cfbM3kVuuQ2gbcNW84SCtP77jMpcggYGLnbQJot9B53YYng4J0RnPektqjfXFO6AG98K2b5J%2Bkwlh7iJaaoiLpfDiWpfuCsUHd6NlztfuWQYZJRbsh5dvKa8YB4%2Ba%2FgT3ZFUzk0LVNKLEoefxMN6o%2BeSquZEp3XrLYBn3mwK%2Bf51IZRTGts%2FmN82eX%2BFJOloMvhvHzsMglo2QpC0jZeM7Gnl56A74m71RpU0NlI%2Bhdjn7%2F8DDFV9NdR0KPjJyNON%2Bx7E4hSmZENyDHU2Emfizv9ffAwRjskkFpchQLcpCQ6aPKqiXePFkGd2gjd%2BwR8qugWGFduqY1nY9u7idtZv1%2F%2Fce560ADVs3DmGHRqS1BTpQfL940CviaEZFMBrMtDcspVgNM5I78EhDlL4BvOjvYlSh98Ybfcz4Q8KMAlFdPAy14W9iS2E9VXIbV%2FXbNkJY480XWzHBe%2F3Cv0U%2BU12KWfsCV0zQQiFxt1aiN7en4v%2FjMQOBImnSaJo1%2BelCvL5G7MnLpPabaGB0RFBjyKN3GKs%2Fle1hAdAhnwropbcROkWjIfgmE6lZBuxS9mrV3hnbRMH%2BHZN4nN9GeWgQ71vEM1VH53sEwpKu%2BxAY6pgGJMV3MmtoTH4o6PPqk8x4Iih2XNvnf2qVSHE4ab41QwZ5KeVXm6NQyWiyiyKyQVLQAavNv3MMDSTqCcYPYSQA6tzP2qxuy1jaqPJgVWjLbpWWN%2BgEQqS8a7OUDGyoUlC7e6kFPWBJVMahXpu4MsJrsF6oMaoAGtubDW8lQDaRGoPM2WGJalhwkenRWp9unN%2FmmQhhQTgTDD3MG2ySQSVnMZ8xOzSiT&X-Amz-Signature=a4afbd6f45c99df99482172d09e3519aaa1af42d4734aa67c744c031b1706d92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPMEXZCP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFR3m4vpnq4FsNCPfCI3xcgklAy39KKElTZ84CU9E7Q5AiAJ86xzhZL0hyptrc21G9vNcT9woOZdVoSDrsCvCwyiASr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMqYbDHbslGWoHn29vKtwDer%2F%2BpTaYWURfi%2FR16Q0WTMCIU1Xx35cfbM3kVuuQ2gbcNW84SCtP77jMpcggYGLnbQJot9B53YYng4J0RnPektqjfXFO6AG98K2b5J%2Bkwlh7iJaaoiLpfDiWpfuCsUHd6NlztfuWQYZJRbsh5dvKa8YB4%2Ba%2FgT3ZFUzk0LVNKLEoefxMN6o%2BeSquZEp3XrLYBn3mwK%2Bf51IZRTGts%2FmN82eX%2BFJOloMvhvHzsMglo2QpC0jZeM7Gnl56A74m71RpU0NlI%2Bhdjn7%2F8DDFV9NdR0KPjJyNON%2Bx7E4hSmZENyDHU2Emfizv9ffAwRjskkFpchQLcpCQ6aPKqiXePFkGd2gjd%2BwR8qugWGFduqY1nY9u7idtZv1%2F%2Fce560ADVs3DmGHRqS1BTpQfL940CviaEZFMBrMtDcspVgNM5I78EhDlL4BvOjvYlSh98Ybfcz4Q8KMAlFdPAy14W9iS2E9VXIbV%2FXbNkJY480XWzHBe%2F3Cv0U%2BU12KWfsCV0zQQiFxt1aiN7en4v%2FjMQOBImnSaJo1%2BelCvL5G7MnLpPabaGB0RFBjyKN3GKs%2Fle1hAdAhnwropbcROkWjIfgmE6lZBuxS9mrV3hnbRMH%2BHZN4nN9GeWgQ71vEM1VH53sEwpKu%2BxAY6pgGJMV3MmtoTH4o6PPqk8x4Iih2XNvnf2qVSHE4ab41QwZ5KeVXm6NQyWiyiyKyQVLQAavNv3MMDSTqCcYPYSQA6tzP2qxuy1jaqPJgVWjLbpWWN%2BgEQqS8a7OUDGyoUlC7e6kFPWBJVMahXpu4MsJrsF6oMaoAGtubDW8lQDaRGoPM2WGJalhwkenRWp9unN%2FmmQhhQTgTDD3MG2ySQSVnMZ8xOzSiT&X-Amz-Signature=226311fe33bf8cf8abd61adb0e3c76ec8b898400b562f7f85d26aa5a708a31d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPMEXZCP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFR3m4vpnq4FsNCPfCI3xcgklAy39KKElTZ84CU9E7Q5AiAJ86xzhZL0hyptrc21G9vNcT9woOZdVoSDrsCvCwyiASr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMqYbDHbslGWoHn29vKtwDer%2F%2BpTaYWURfi%2FR16Q0WTMCIU1Xx35cfbM3kVuuQ2gbcNW84SCtP77jMpcggYGLnbQJot9B53YYng4J0RnPektqjfXFO6AG98K2b5J%2Bkwlh7iJaaoiLpfDiWpfuCsUHd6NlztfuWQYZJRbsh5dvKa8YB4%2Ba%2FgT3ZFUzk0LVNKLEoefxMN6o%2BeSquZEp3XrLYBn3mwK%2Bf51IZRTGts%2FmN82eX%2BFJOloMvhvHzsMglo2QpC0jZeM7Gnl56A74m71RpU0NlI%2Bhdjn7%2F8DDFV9NdR0KPjJyNON%2Bx7E4hSmZENyDHU2Emfizv9ffAwRjskkFpchQLcpCQ6aPKqiXePFkGd2gjd%2BwR8qugWGFduqY1nY9u7idtZv1%2F%2Fce560ADVs3DmGHRqS1BTpQfL940CviaEZFMBrMtDcspVgNM5I78EhDlL4BvOjvYlSh98Ybfcz4Q8KMAlFdPAy14W9iS2E9VXIbV%2FXbNkJY480XWzHBe%2F3Cv0U%2BU12KWfsCV0zQQiFxt1aiN7en4v%2FjMQOBImnSaJo1%2BelCvL5G7MnLpPabaGB0RFBjyKN3GKs%2Fle1hAdAhnwropbcROkWjIfgmE6lZBuxS9mrV3hnbRMH%2BHZN4nN9GeWgQ71vEM1VH53sEwpKu%2BxAY6pgGJMV3MmtoTH4o6PPqk8x4Iih2XNvnf2qVSHE4ab41QwZ5KeVXm6NQyWiyiyKyQVLQAavNv3MMDSTqCcYPYSQA6tzP2qxuy1jaqPJgVWjLbpWWN%2BgEQqS8a7OUDGyoUlC7e6kFPWBJVMahXpu4MsJrsF6oMaoAGtubDW8lQDaRGoPM2WGJalhwkenRWp9unN%2FmmQhhQTgTDD3MG2ySQSVnMZ8xOzSiT&X-Amz-Signature=703be53c81bf7c95478780a47c6074aa3cc1c4a9d7bccca1d71d34b9d6950236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPMEXZCP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFR3m4vpnq4FsNCPfCI3xcgklAy39KKElTZ84CU9E7Q5AiAJ86xzhZL0hyptrc21G9vNcT9woOZdVoSDrsCvCwyiASr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMqYbDHbslGWoHn29vKtwDer%2F%2BpTaYWURfi%2FR16Q0WTMCIU1Xx35cfbM3kVuuQ2gbcNW84SCtP77jMpcggYGLnbQJot9B53YYng4J0RnPektqjfXFO6AG98K2b5J%2Bkwlh7iJaaoiLpfDiWpfuCsUHd6NlztfuWQYZJRbsh5dvKa8YB4%2Ba%2FgT3ZFUzk0LVNKLEoefxMN6o%2BeSquZEp3XrLYBn3mwK%2Bf51IZRTGts%2FmN82eX%2BFJOloMvhvHzsMglo2QpC0jZeM7Gnl56A74m71RpU0NlI%2Bhdjn7%2F8DDFV9NdR0KPjJyNON%2Bx7E4hSmZENyDHU2Emfizv9ffAwRjskkFpchQLcpCQ6aPKqiXePFkGd2gjd%2BwR8qugWGFduqY1nY9u7idtZv1%2F%2Fce560ADVs3DmGHRqS1BTpQfL940CviaEZFMBrMtDcspVgNM5I78EhDlL4BvOjvYlSh98Ybfcz4Q8KMAlFdPAy14W9iS2E9VXIbV%2FXbNkJY480XWzHBe%2F3Cv0U%2BU12KWfsCV0zQQiFxt1aiN7en4v%2FjMQOBImnSaJo1%2BelCvL5G7MnLpPabaGB0RFBjyKN3GKs%2Fle1hAdAhnwropbcROkWjIfgmE6lZBuxS9mrV3hnbRMH%2BHZN4nN9GeWgQ71vEM1VH53sEwpKu%2BxAY6pgGJMV3MmtoTH4o6PPqk8x4Iih2XNvnf2qVSHE4ab41QwZ5KeVXm6NQyWiyiyKyQVLQAavNv3MMDSTqCcYPYSQA6tzP2qxuy1jaqPJgVWjLbpWWN%2BgEQqS8a7OUDGyoUlC7e6kFPWBJVMahXpu4MsJrsF6oMaoAGtubDW8lQDaRGoPM2WGJalhwkenRWp9unN%2FmmQhhQTgTDD3MG2ySQSVnMZ8xOzSiT&X-Amz-Signature=7626a2d91b6030fd1712e7eb843295cd71956089274d97ddcfcdf0fb813fcdd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPMEXZCP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFR3m4vpnq4FsNCPfCI3xcgklAy39KKElTZ84CU9E7Q5AiAJ86xzhZL0hyptrc21G9vNcT9woOZdVoSDrsCvCwyiASr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMqYbDHbslGWoHn29vKtwDer%2F%2BpTaYWURfi%2FR16Q0WTMCIU1Xx35cfbM3kVuuQ2gbcNW84SCtP77jMpcggYGLnbQJot9B53YYng4J0RnPektqjfXFO6AG98K2b5J%2Bkwlh7iJaaoiLpfDiWpfuCsUHd6NlztfuWQYZJRbsh5dvKa8YB4%2Ba%2FgT3ZFUzk0LVNKLEoefxMN6o%2BeSquZEp3XrLYBn3mwK%2Bf51IZRTGts%2FmN82eX%2BFJOloMvhvHzsMglo2QpC0jZeM7Gnl56A74m71RpU0NlI%2Bhdjn7%2F8DDFV9NdR0KPjJyNON%2Bx7E4hSmZENyDHU2Emfizv9ffAwRjskkFpchQLcpCQ6aPKqiXePFkGd2gjd%2BwR8qugWGFduqY1nY9u7idtZv1%2F%2Fce560ADVs3DmGHRqS1BTpQfL940CviaEZFMBrMtDcspVgNM5I78EhDlL4BvOjvYlSh98Ybfcz4Q8KMAlFdPAy14W9iS2E9VXIbV%2FXbNkJY480XWzHBe%2F3Cv0U%2BU12KWfsCV0zQQiFxt1aiN7en4v%2FjMQOBImnSaJo1%2BelCvL5G7MnLpPabaGB0RFBjyKN3GKs%2Fle1hAdAhnwropbcROkWjIfgmE6lZBuxS9mrV3hnbRMH%2BHZN4nN9GeWgQ71vEM1VH53sEwpKu%2BxAY6pgGJMV3MmtoTH4o6PPqk8x4Iih2XNvnf2qVSHE4ab41QwZ5KeVXm6NQyWiyiyKyQVLQAavNv3MMDSTqCcYPYSQA6tzP2qxuy1jaqPJgVWjLbpWWN%2BgEQqS8a7OUDGyoUlC7e6kFPWBJVMahXpu4MsJrsF6oMaoAGtubDW8lQDaRGoPM2WGJalhwkenRWp9unN%2FmmQhhQTgTDD3MG2ySQSVnMZ8xOzSiT&X-Amz-Signature=f5cac6b3b8dea6084cde7310010969b61746a35ff30ca15930d0f9e32f2de748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPMEXZCP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFR3m4vpnq4FsNCPfCI3xcgklAy39KKElTZ84CU9E7Q5AiAJ86xzhZL0hyptrc21G9vNcT9woOZdVoSDrsCvCwyiASr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMqYbDHbslGWoHn29vKtwDer%2F%2BpTaYWURfi%2FR16Q0WTMCIU1Xx35cfbM3kVuuQ2gbcNW84SCtP77jMpcggYGLnbQJot9B53YYng4J0RnPektqjfXFO6AG98K2b5J%2Bkwlh7iJaaoiLpfDiWpfuCsUHd6NlztfuWQYZJRbsh5dvKa8YB4%2Ba%2FgT3ZFUzk0LVNKLEoefxMN6o%2BeSquZEp3XrLYBn3mwK%2Bf51IZRTGts%2FmN82eX%2BFJOloMvhvHzsMglo2QpC0jZeM7Gnl56A74m71RpU0NlI%2Bhdjn7%2F8DDFV9NdR0KPjJyNON%2Bx7E4hSmZENyDHU2Emfizv9ffAwRjskkFpchQLcpCQ6aPKqiXePFkGd2gjd%2BwR8qugWGFduqY1nY9u7idtZv1%2F%2Fce560ADVs3DmGHRqS1BTpQfL940CviaEZFMBrMtDcspVgNM5I78EhDlL4BvOjvYlSh98Ybfcz4Q8KMAlFdPAy14W9iS2E9VXIbV%2FXbNkJY480XWzHBe%2F3Cv0U%2BU12KWfsCV0zQQiFxt1aiN7en4v%2FjMQOBImnSaJo1%2BelCvL5G7MnLpPabaGB0RFBjyKN3GKs%2Fle1hAdAhnwropbcROkWjIfgmE6lZBuxS9mrV3hnbRMH%2BHZN4nN9GeWgQ71vEM1VH53sEwpKu%2BxAY6pgGJMV3MmtoTH4o6PPqk8x4Iih2XNvnf2qVSHE4ab41QwZ5KeVXm6NQyWiyiyKyQVLQAavNv3MMDSTqCcYPYSQA6tzP2qxuy1jaqPJgVWjLbpWWN%2BgEQqS8a7OUDGyoUlC7e6kFPWBJVMahXpu4MsJrsF6oMaoAGtubDW8lQDaRGoPM2WGJalhwkenRWp9unN%2FmmQhhQTgTDD3MG2ySQSVnMZ8xOzSiT&X-Amz-Signature=6f92f0b04d8b5f7eecc50b604b573e0be85d02647c08941ed0dacf7b8640d68e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
