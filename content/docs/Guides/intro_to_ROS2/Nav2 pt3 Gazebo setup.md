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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEZYCNAW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqpUuh2HfdEKuIZyUbraCZPEO2sYb6spjpJF3QaNj7IgIgK0ryt94lg6cOOOJofJkWZMyQkmUuKuu%2Foe2iNVWixwUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFmFV7hPzfRavov9kyrcA3%2B53meEilQb7PV4jYpi8id5bJKX8IH937SLlaRRs%2F5QlfufxpAyDnNaP0mR9vG2iutBqk6RiLRry%2BBcLRYTLBlrTeFgC33WI8lD3v8hG5s6yoYQ7dqN%2B0Y2s3w%2BjG8Y9QfXuaNqZzKDs6EGq2RCYjiJggGIj%2FRGjIWpaXUYeLr22Np0kAzlqC7JeWmPdYR0UxYrVnsqLG3mn0TM2lnalM5IC1KiFXEpbt2nbYdgynWMJauIsSayrpddEWcI1rAdtVFD3pMXlOEB%2FzjZ4XwAmiImdyGJzbCu%2BW7dF9qI9iK%2FwvVxtjh8nR3M9VwKozO7LAFtZ6Wm9StTmlBphns8%2FXKl%2BLhtAmSU5u0Fi01OCv4noItZN8BIIxu6aofIwss%2BXAh6c83ZjUEZ3dUt%2B3knH901AV28syVcQcALd4%2BILnwjJTbWTKq2hRBNOg%2B%2FVBEeJjFPwvIjwoMuEOfR1AE5ezsbG10AkCQogSw%2F2l6XbQ7vTxKkAPD%2FzlS3cmGJCMGc6V3RaZVK0TQb4fHdva7daDetQBlZ2%2Bn%2FnJVQ6v%2FvlXRUZHRLehKhc%2FkSS8mPwrtWTquZ1SO5FNgZ58485hrPzHZLWIQXXb0QAc2bejcFKw2SYRzRNKF%2FUzxf2REPMLjG8cQGOqUBB8D%2FnPMBboGdiypMCIB0YWxSWFxPCyWETIeAI%2BAZL3WAZIvn2cRZz%2B0vroML%2BBpy0TY8IFbnPLCsT2QmqYktXLSzBQnbSO194gEpjFTYU0677zz1bxt8m%2BHy%2BzbPs53kIS4dXI6WQE9qs5uLJSGXkzgEhdlgHlQgDRHursP3SqtHQPh%2Bh8tpouzcAa2usCtTCD5Oi8tZu%2BgM44heO%2Fn3bKxJVvcZ&X-Amz-Signature=407de04a1777d2190d8cac98456e8eee73df0b27c537af4272e4166587c2d6a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEZYCNAW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqpUuh2HfdEKuIZyUbraCZPEO2sYb6spjpJF3QaNj7IgIgK0ryt94lg6cOOOJofJkWZMyQkmUuKuu%2Foe2iNVWixwUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFmFV7hPzfRavov9kyrcA3%2B53meEilQb7PV4jYpi8id5bJKX8IH937SLlaRRs%2F5QlfufxpAyDnNaP0mR9vG2iutBqk6RiLRry%2BBcLRYTLBlrTeFgC33WI8lD3v8hG5s6yoYQ7dqN%2B0Y2s3w%2BjG8Y9QfXuaNqZzKDs6EGq2RCYjiJggGIj%2FRGjIWpaXUYeLr22Np0kAzlqC7JeWmPdYR0UxYrVnsqLG3mn0TM2lnalM5IC1KiFXEpbt2nbYdgynWMJauIsSayrpddEWcI1rAdtVFD3pMXlOEB%2FzjZ4XwAmiImdyGJzbCu%2BW7dF9qI9iK%2FwvVxtjh8nR3M9VwKozO7LAFtZ6Wm9StTmlBphns8%2FXKl%2BLhtAmSU5u0Fi01OCv4noItZN8BIIxu6aofIwss%2BXAh6c83ZjUEZ3dUt%2B3knH901AV28syVcQcALd4%2BILnwjJTbWTKq2hRBNOg%2B%2FVBEeJjFPwvIjwoMuEOfR1AE5ezsbG10AkCQogSw%2F2l6XbQ7vTxKkAPD%2FzlS3cmGJCMGc6V3RaZVK0TQb4fHdva7daDetQBlZ2%2Bn%2FnJVQ6v%2FvlXRUZHRLehKhc%2FkSS8mPwrtWTquZ1SO5FNgZ58485hrPzHZLWIQXXb0QAc2bejcFKw2SYRzRNKF%2FUzxf2REPMLjG8cQGOqUBB8D%2FnPMBboGdiypMCIB0YWxSWFxPCyWETIeAI%2BAZL3WAZIvn2cRZz%2B0vroML%2BBpy0TY8IFbnPLCsT2QmqYktXLSzBQnbSO194gEpjFTYU0677zz1bxt8m%2BHy%2BzbPs53kIS4dXI6WQE9qs5uLJSGXkzgEhdlgHlQgDRHursP3SqtHQPh%2Bh8tpouzcAa2usCtTCD5Oi8tZu%2BgM44heO%2Fn3bKxJVvcZ&X-Amz-Signature=6e6fb63e2d9a53c2a5a9d61aa73407d1641c45f0a20c58b81b408ba062ac25d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEZYCNAW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqpUuh2HfdEKuIZyUbraCZPEO2sYb6spjpJF3QaNj7IgIgK0ryt94lg6cOOOJofJkWZMyQkmUuKuu%2Foe2iNVWixwUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFmFV7hPzfRavov9kyrcA3%2B53meEilQb7PV4jYpi8id5bJKX8IH937SLlaRRs%2F5QlfufxpAyDnNaP0mR9vG2iutBqk6RiLRry%2BBcLRYTLBlrTeFgC33WI8lD3v8hG5s6yoYQ7dqN%2B0Y2s3w%2BjG8Y9QfXuaNqZzKDs6EGq2RCYjiJggGIj%2FRGjIWpaXUYeLr22Np0kAzlqC7JeWmPdYR0UxYrVnsqLG3mn0TM2lnalM5IC1KiFXEpbt2nbYdgynWMJauIsSayrpddEWcI1rAdtVFD3pMXlOEB%2FzjZ4XwAmiImdyGJzbCu%2BW7dF9qI9iK%2FwvVxtjh8nR3M9VwKozO7LAFtZ6Wm9StTmlBphns8%2FXKl%2BLhtAmSU5u0Fi01OCv4noItZN8BIIxu6aofIwss%2BXAh6c83ZjUEZ3dUt%2B3knH901AV28syVcQcALd4%2BILnwjJTbWTKq2hRBNOg%2B%2FVBEeJjFPwvIjwoMuEOfR1AE5ezsbG10AkCQogSw%2F2l6XbQ7vTxKkAPD%2FzlS3cmGJCMGc6V3RaZVK0TQb4fHdva7daDetQBlZ2%2Bn%2FnJVQ6v%2FvlXRUZHRLehKhc%2FkSS8mPwrtWTquZ1SO5FNgZ58485hrPzHZLWIQXXb0QAc2bejcFKw2SYRzRNKF%2FUzxf2REPMLjG8cQGOqUBB8D%2FnPMBboGdiypMCIB0YWxSWFxPCyWETIeAI%2BAZL3WAZIvn2cRZz%2B0vroML%2BBpy0TY8IFbnPLCsT2QmqYktXLSzBQnbSO194gEpjFTYU0677zz1bxt8m%2BHy%2BzbPs53kIS4dXI6WQE9qs5uLJSGXkzgEhdlgHlQgDRHursP3SqtHQPh%2Bh8tpouzcAa2usCtTCD5Oi8tZu%2BgM44heO%2Fn3bKxJVvcZ&X-Amz-Signature=e59cb1ada9c686c46bafb04d8484ed73b40d3c07cfba1dd26314c1fd89d97e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEZYCNAW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqpUuh2HfdEKuIZyUbraCZPEO2sYb6spjpJF3QaNj7IgIgK0ryt94lg6cOOOJofJkWZMyQkmUuKuu%2Foe2iNVWixwUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFmFV7hPzfRavov9kyrcA3%2B53meEilQb7PV4jYpi8id5bJKX8IH937SLlaRRs%2F5QlfufxpAyDnNaP0mR9vG2iutBqk6RiLRry%2BBcLRYTLBlrTeFgC33WI8lD3v8hG5s6yoYQ7dqN%2B0Y2s3w%2BjG8Y9QfXuaNqZzKDs6EGq2RCYjiJggGIj%2FRGjIWpaXUYeLr22Np0kAzlqC7JeWmPdYR0UxYrVnsqLG3mn0TM2lnalM5IC1KiFXEpbt2nbYdgynWMJauIsSayrpddEWcI1rAdtVFD3pMXlOEB%2FzjZ4XwAmiImdyGJzbCu%2BW7dF9qI9iK%2FwvVxtjh8nR3M9VwKozO7LAFtZ6Wm9StTmlBphns8%2FXKl%2BLhtAmSU5u0Fi01OCv4noItZN8BIIxu6aofIwss%2BXAh6c83ZjUEZ3dUt%2B3knH901AV28syVcQcALd4%2BILnwjJTbWTKq2hRBNOg%2B%2FVBEeJjFPwvIjwoMuEOfR1AE5ezsbG10AkCQogSw%2F2l6XbQ7vTxKkAPD%2FzlS3cmGJCMGc6V3RaZVK0TQb4fHdva7daDetQBlZ2%2Bn%2FnJVQ6v%2FvlXRUZHRLehKhc%2FkSS8mPwrtWTquZ1SO5FNgZ58485hrPzHZLWIQXXb0QAc2bejcFKw2SYRzRNKF%2FUzxf2REPMLjG8cQGOqUBB8D%2FnPMBboGdiypMCIB0YWxSWFxPCyWETIeAI%2BAZL3WAZIvn2cRZz%2B0vroML%2BBpy0TY8IFbnPLCsT2QmqYktXLSzBQnbSO194gEpjFTYU0677zz1bxt8m%2BHy%2BzbPs53kIS4dXI6WQE9qs5uLJSGXkzgEhdlgHlQgDRHursP3SqtHQPh%2Bh8tpouzcAa2usCtTCD5Oi8tZu%2BgM44heO%2Fn3bKxJVvcZ&X-Amz-Signature=8943380add0c60e1550bdc4fba751c4afb635cf7ff4c10c3bb491ba89db26ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBNQOJM2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCnt5100UIbGuxXcZJMOu%2Bd8JPnTHuxw%2FQQmj60zNgUwIgYwkZzE9i0COUb7LmkMO5aE2%2FOxdtDe95yM%2FndgDHa1Qq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDC%2BLqwbnqjjxn4FxnircAwoh6GrD7YX%2Bl3S1Ivvj9gZXJ%2FofZ2wroNY%2Fu5U%2F1rgGYYMxz9D5%2BKPrPKOtE1YcMM4uXsQoQnyBfqJRh%2BB5yYQdSgYKWnuN1xT%2BFEfRNroy0iosoDY17N2M5wrULwAfKG6vrUWv2XS6cqCuYzhap3daaRmuU10fxENRRuocTrpANeRasUko8clxwahIfkIpWS4GA1KmS8LjrLzZyblGs2VGRQE3lHowcGs9VQ7miPq6k78qxySu%2Fba9hJs8MAwFGotGamCydVh%2F9t3iGrsZ9NHoq6sCewbT2aAZwvzwXli%2BCNDt4sZD%2BrOn%2B9pes1Qife5uwC2Wj4ANbTgCsxQR3mM9CNSDK3cxDMwEv2lEyZF7TIIbmx3M1r8JZ3ov1MBjpcQrzZBk%2FoHPaJusSLCowh%2Fs2dc0t32koyip8C3%2FiNfjCNul5XUrwO%2BCA6YUHX59fjK%2ByHpNSfafWEo9UAnBGmgu6Y2wsgOntViC35hso1tz1%2BjETeDh1rCVH7vZGTOKt8VCXZRu7ZCV3WCNZeZFKGPelnsKHdWUeWNvtKavp8IBQtgMqH6AgwZtVBniz7cRINYw43BgYlPGf%2BxPHxqDrf71hikr51hgu8uRIHECeiAQhMFRQ4ahk%2B5sWmEOMMfG8cQGOqUBKFHjC0snSbAGz0TmNk2ikwvd6JgF91A%2FKsNjY%2BABB6Whj%2FprGsneKYn%2FdmxIUP%2BOw5O2P1ADwfSRv0Ujk4HRPR55C3I%2B%2BQR1rIkGTsZ4yVWQK27%2FOgXQosbggbt5rD7Pf8HZU3jf%2BAH0vPPQqP%2F9jfNZvy7E%2FeNcnL7ifxb8YMek7j7Sl6yCZkEIwgryKcfZhFRBzVu5ObN%2FwhZfn57L67O%2FBK%2Bu&X-Amz-Signature=80956eeda71da8594f544f891f1bf3a54282ae94915711c3f10438025b7e1182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEZYCNAW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqpUuh2HfdEKuIZyUbraCZPEO2sYb6spjpJF3QaNj7IgIgK0ryt94lg6cOOOJofJkWZMyQkmUuKuu%2Foe2iNVWixwUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFmFV7hPzfRavov9kyrcA3%2B53meEilQb7PV4jYpi8id5bJKX8IH937SLlaRRs%2F5QlfufxpAyDnNaP0mR9vG2iutBqk6RiLRry%2BBcLRYTLBlrTeFgC33WI8lD3v8hG5s6yoYQ7dqN%2B0Y2s3w%2BjG8Y9QfXuaNqZzKDs6EGq2RCYjiJggGIj%2FRGjIWpaXUYeLr22Np0kAzlqC7JeWmPdYR0UxYrVnsqLG3mn0TM2lnalM5IC1KiFXEpbt2nbYdgynWMJauIsSayrpddEWcI1rAdtVFD3pMXlOEB%2FzjZ4XwAmiImdyGJzbCu%2BW7dF9qI9iK%2FwvVxtjh8nR3M9VwKozO7LAFtZ6Wm9StTmlBphns8%2FXKl%2BLhtAmSU5u0Fi01OCv4noItZN8BIIxu6aofIwss%2BXAh6c83ZjUEZ3dUt%2B3knH901AV28syVcQcALd4%2BILnwjJTbWTKq2hRBNOg%2B%2FVBEeJjFPwvIjwoMuEOfR1AE5ezsbG10AkCQogSw%2F2l6XbQ7vTxKkAPD%2FzlS3cmGJCMGc6V3RaZVK0TQb4fHdva7daDetQBlZ2%2Bn%2FnJVQ6v%2FvlXRUZHRLehKhc%2FkSS8mPwrtWTquZ1SO5FNgZ58485hrPzHZLWIQXXb0QAc2bejcFKw2SYRzRNKF%2FUzxf2REPMLjG8cQGOqUBB8D%2FnPMBboGdiypMCIB0YWxSWFxPCyWETIeAI%2BAZL3WAZIvn2cRZz%2B0vroML%2BBpy0TY8IFbnPLCsT2QmqYktXLSzBQnbSO194gEpjFTYU0677zz1bxt8m%2BHy%2BzbPs53kIS4dXI6WQE9qs5uLJSGXkzgEhdlgHlQgDRHursP3SqtHQPh%2Bh8tpouzcAa2usCtTCD5Oi8tZu%2BgM44heO%2Fn3bKxJVvcZ&X-Amz-Signature=3c0de10b734e93763241d973e38ef26ea9d27fc8158d589ec816af9303b4a41a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEZYCNAW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqpUuh2HfdEKuIZyUbraCZPEO2sYb6spjpJF3QaNj7IgIgK0ryt94lg6cOOOJofJkWZMyQkmUuKuu%2Foe2iNVWixwUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFmFV7hPzfRavov9kyrcA3%2B53meEilQb7PV4jYpi8id5bJKX8IH937SLlaRRs%2F5QlfufxpAyDnNaP0mR9vG2iutBqk6RiLRry%2BBcLRYTLBlrTeFgC33WI8lD3v8hG5s6yoYQ7dqN%2B0Y2s3w%2BjG8Y9QfXuaNqZzKDs6EGq2RCYjiJggGIj%2FRGjIWpaXUYeLr22Np0kAzlqC7JeWmPdYR0UxYrVnsqLG3mn0TM2lnalM5IC1KiFXEpbt2nbYdgynWMJauIsSayrpddEWcI1rAdtVFD3pMXlOEB%2FzjZ4XwAmiImdyGJzbCu%2BW7dF9qI9iK%2FwvVxtjh8nR3M9VwKozO7LAFtZ6Wm9StTmlBphns8%2FXKl%2BLhtAmSU5u0Fi01OCv4noItZN8BIIxu6aofIwss%2BXAh6c83ZjUEZ3dUt%2B3knH901AV28syVcQcALd4%2BILnwjJTbWTKq2hRBNOg%2B%2FVBEeJjFPwvIjwoMuEOfR1AE5ezsbG10AkCQogSw%2F2l6XbQ7vTxKkAPD%2FzlS3cmGJCMGc6V3RaZVK0TQb4fHdva7daDetQBlZ2%2Bn%2FnJVQ6v%2FvlXRUZHRLehKhc%2FkSS8mPwrtWTquZ1SO5FNgZ58485hrPzHZLWIQXXb0QAc2bejcFKw2SYRzRNKF%2FUzxf2REPMLjG8cQGOqUBB8D%2FnPMBboGdiypMCIB0YWxSWFxPCyWETIeAI%2BAZL3WAZIvn2cRZz%2B0vroML%2BBpy0TY8IFbnPLCsT2QmqYktXLSzBQnbSO194gEpjFTYU0677zz1bxt8m%2BHy%2BzbPs53kIS4dXI6WQE9qs5uLJSGXkzgEhdlgHlQgDRHursP3SqtHQPh%2Bh8tpouzcAa2usCtTCD5Oi8tZu%2BgM44heO%2Fn3bKxJVvcZ&X-Amz-Signature=28523f37ec42da784645abcb8c8a3769a7f113099ef371d148de387d987e4627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEZYCNAW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqpUuh2HfdEKuIZyUbraCZPEO2sYb6spjpJF3QaNj7IgIgK0ryt94lg6cOOOJofJkWZMyQkmUuKuu%2Foe2iNVWixwUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFmFV7hPzfRavov9kyrcA3%2B53meEilQb7PV4jYpi8id5bJKX8IH937SLlaRRs%2F5QlfufxpAyDnNaP0mR9vG2iutBqk6RiLRry%2BBcLRYTLBlrTeFgC33WI8lD3v8hG5s6yoYQ7dqN%2B0Y2s3w%2BjG8Y9QfXuaNqZzKDs6EGq2RCYjiJggGIj%2FRGjIWpaXUYeLr22Np0kAzlqC7JeWmPdYR0UxYrVnsqLG3mn0TM2lnalM5IC1KiFXEpbt2nbYdgynWMJauIsSayrpddEWcI1rAdtVFD3pMXlOEB%2FzjZ4XwAmiImdyGJzbCu%2BW7dF9qI9iK%2FwvVxtjh8nR3M9VwKozO7LAFtZ6Wm9StTmlBphns8%2FXKl%2BLhtAmSU5u0Fi01OCv4noItZN8BIIxu6aofIwss%2BXAh6c83ZjUEZ3dUt%2B3knH901AV28syVcQcALd4%2BILnwjJTbWTKq2hRBNOg%2B%2FVBEeJjFPwvIjwoMuEOfR1AE5ezsbG10AkCQogSw%2F2l6XbQ7vTxKkAPD%2FzlS3cmGJCMGc6V3RaZVK0TQb4fHdva7daDetQBlZ2%2Bn%2FnJVQ6v%2FvlXRUZHRLehKhc%2FkSS8mPwrtWTquZ1SO5FNgZ58485hrPzHZLWIQXXb0QAc2bejcFKw2SYRzRNKF%2FUzxf2REPMLjG8cQGOqUBB8D%2FnPMBboGdiypMCIB0YWxSWFxPCyWETIeAI%2BAZL3WAZIvn2cRZz%2B0vroML%2BBpy0TY8IFbnPLCsT2QmqYktXLSzBQnbSO194gEpjFTYU0677zz1bxt8m%2BHy%2BzbPs53kIS4dXI6WQE9qs5uLJSGXkzgEhdlgHlQgDRHursP3SqtHQPh%2Bh8tpouzcAa2usCtTCD5Oi8tZu%2BgM44heO%2Fn3bKxJVvcZ&X-Amz-Signature=31a21e123a01d0c9b532031f5da69b4c40e8dbb03d53ad69934db0bfc5ba3555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEZYCNAW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqpUuh2HfdEKuIZyUbraCZPEO2sYb6spjpJF3QaNj7IgIgK0ryt94lg6cOOOJofJkWZMyQkmUuKuu%2Foe2iNVWixwUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFmFV7hPzfRavov9kyrcA3%2B53meEilQb7PV4jYpi8id5bJKX8IH937SLlaRRs%2F5QlfufxpAyDnNaP0mR9vG2iutBqk6RiLRry%2BBcLRYTLBlrTeFgC33WI8lD3v8hG5s6yoYQ7dqN%2B0Y2s3w%2BjG8Y9QfXuaNqZzKDs6EGq2RCYjiJggGIj%2FRGjIWpaXUYeLr22Np0kAzlqC7JeWmPdYR0UxYrVnsqLG3mn0TM2lnalM5IC1KiFXEpbt2nbYdgynWMJauIsSayrpddEWcI1rAdtVFD3pMXlOEB%2FzjZ4XwAmiImdyGJzbCu%2BW7dF9qI9iK%2FwvVxtjh8nR3M9VwKozO7LAFtZ6Wm9StTmlBphns8%2FXKl%2BLhtAmSU5u0Fi01OCv4noItZN8BIIxu6aofIwss%2BXAh6c83ZjUEZ3dUt%2B3knH901AV28syVcQcALd4%2BILnwjJTbWTKq2hRBNOg%2B%2FVBEeJjFPwvIjwoMuEOfR1AE5ezsbG10AkCQogSw%2F2l6XbQ7vTxKkAPD%2FzlS3cmGJCMGc6V3RaZVK0TQb4fHdva7daDetQBlZ2%2Bn%2FnJVQ6v%2FvlXRUZHRLehKhc%2FkSS8mPwrtWTquZ1SO5FNgZ58485hrPzHZLWIQXXb0QAc2bejcFKw2SYRzRNKF%2FUzxf2REPMLjG8cQGOqUBB8D%2FnPMBboGdiypMCIB0YWxSWFxPCyWETIeAI%2BAZL3WAZIvn2cRZz%2B0vroML%2BBpy0TY8IFbnPLCsT2QmqYktXLSzBQnbSO194gEpjFTYU0677zz1bxt8m%2BHy%2BzbPs53kIS4dXI6WQE9qs5uLJSGXkzgEhdlgHlQgDRHursP3SqtHQPh%2Bh8tpouzcAa2usCtTCD5Oi8tZu%2BgM44heO%2Fn3bKxJVvcZ&X-Amz-Signature=0f06b81f934330a6c5a64be3046790180f95b34c0dcdc75c72351c5633c23fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEZYCNAW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqpUuh2HfdEKuIZyUbraCZPEO2sYb6spjpJF3QaNj7IgIgK0ryt94lg6cOOOJofJkWZMyQkmUuKuu%2Foe2iNVWixwUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFmFV7hPzfRavov9kyrcA3%2B53meEilQb7PV4jYpi8id5bJKX8IH937SLlaRRs%2F5QlfufxpAyDnNaP0mR9vG2iutBqk6RiLRry%2BBcLRYTLBlrTeFgC33WI8lD3v8hG5s6yoYQ7dqN%2B0Y2s3w%2BjG8Y9QfXuaNqZzKDs6EGq2RCYjiJggGIj%2FRGjIWpaXUYeLr22Np0kAzlqC7JeWmPdYR0UxYrVnsqLG3mn0TM2lnalM5IC1KiFXEpbt2nbYdgynWMJauIsSayrpddEWcI1rAdtVFD3pMXlOEB%2FzjZ4XwAmiImdyGJzbCu%2BW7dF9qI9iK%2FwvVxtjh8nR3M9VwKozO7LAFtZ6Wm9StTmlBphns8%2FXKl%2BLhtAmSU5u0Fi01OCv4noItZN8BIIxu6aofIwss%2BXAh6c83ZjUEZ3dUt%2B3knH901AV28syVcQcALd4%2BILnwjJTbWTKq2hRBNOg%2B%2FVBEeJjFPwvIjwoMuEOfR1AE5ezsbG10AkCQogSw%2F2l6XbQ7vTxKkAPD%2FzlS3cmGJCMGc6V3RaZVK0TQb4fHdva7daDetQBlZ2%2Bn%2FnJVQ6v%2FvlXRUZHRLehKhc%2FkSS8mPwrtWTquZ1SO5FNgZ58485hrPzHZLWIQXXb0QAc2bejcFKw2SYRzRNKF%2FUzxf2REPMLjG8cQGOqUBB8D%2FnPMBboGdiypMCIB0YWxSWFxPCyWETIeAI%2BAZL3WAZIvn2cRZz%2B0vroML%2BBpy0TY8IFbnPLCsT2QmqYktXLSzBQnbSO194gEpjFTYU0677zz1bxt8m%2BHy%2BzbPs53kIS4dXI6WQE9qs5uLJSGXkzgEhdlgHlQgDRHursP3SqtHQPh%2Bh8tpouzcAa2usCtTCD5Oi8tZu%2BgM44heO%2Fn3bKxJVvcZ&X-Amz-Signature=268ea23d3646e05cd24390db816cfde4cc9bece4f8151a641f70f0f8f5c9e6b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEZYCNAW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqpUuh2HfdEKuIZyUbraCZPEO2sYb6spjpJF3QaNj7IgIgK0ryt94lg6cOOOJofJkWZMyQkmUuKuu%2Foe2iNVWixwUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFmFV7hPzfRavov9kyrcA3%2B53meEilQb7PV4jYpi8id5bJKX8IH937SLlaRRs%2F5QlfufxpAyDnNaP0mR9vG2iutBqk6RiLRry%2BBcLRYTLBlrTeFgC33WI8lD3v8hG5s6yoYQ7dqN%2B0Y2s3w%2BjG8Y9QfXuaNqZzKDs6EGq2RCYjiJggGIj%2FRGjIWpaXUYeLr22Np0kAzlqC7JeWmPdYR0UxYrVnsqLG3mn0TM2lnalM5IC1KiFXEpbt2nbYdgynWMJauIsSayrpddEWcI1rAdtVFD3pMXlOEB%2FzjZ4XwAmiImdyGJzbCu%2BW7dF9qI9iK%2FwvVxtjh8nR3M9VwKozO7LAFtZ6Wm9StTmlBphns8%2FXKl%2BLhtAmSU5u0Fi01OCv4noItZN8BIIxu6aofIwss%2BXAh6c83ZjUEZ3dUt%2B3knH901AV28syVcQcALd4%2BILnwjJTbWTKq2hRBNOg%2B%2FVBEeJjFPwvIjwoMuEOfR1AE5ezsbG10AkCQogSw%2F2l6XbQ7vTxKkAPD%2FzlS3cmGJCMGc6V3RaZVK0TQb4fHdva7daDetQBlZ2%2Bn%2FnJVQ6v%2FvlXRUZHRLehKhc%2FkSS8mPwrtWTquZ1SO5FNgZ58485hrPzHZLWIQXXb0QAc2bejcFKw2SYRzRNKF%2FUzxf2REPMLjG8cQGOqUBB8D%2FnPMBboGdiypMCIB0YWxSWFxPCyWETIeAI%2BAZL3WAZIvn2cRZz%2B0vroML%2BBpy0TY8IFbnPLCsT2QmqYktXLSzBQnbSO194gEpjFTYU0677zz1bxt8m%2BHy%2BzbPs53kIS4dXI6WQE9qs5uLJSGXkzgEhdlgHlQgDRHursP3SqtHQPh%2Bh8tpouzcAa2usCtTCD5Oi8tZu%2BgM44heO%2Fn3bKxJVvcZ&X-Amz-Signature=e8551e3030aca708e67ee07d2a6d398ca2f677508b291db1e3689198f63630ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
