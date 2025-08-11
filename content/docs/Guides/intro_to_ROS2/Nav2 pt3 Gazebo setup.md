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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ESA7L4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHuyoHm%2FQ8fRIQx63gHOsmDZ%2FB67%2F2eqlSoNFpmBc3aAiEA6mOu1cj90QND%2BWhQRu9gnDDrWoKXab8RKgMFZI79SwwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAg4ZK%2BZk7YB5ctqWyrcA%2FyIeVDrT1QMHtqgnKyv0SzgmkjwlDOupoaaUFrg6Vzm9%2Bg4F%2Fhv4hwi1G38ki%2BB0NyF71ZrWJ4Q5riAJcjz6O%2F7ss%2FEdaN7VPKeCfn5tDW4rCG%2BIKXrmq590Bq3WH46b%2FnPCgZNeMY3wyA2YgYSvoip6cGbFbjhZvJ9hBqv4xR1QzEEYJ7p9uIcMKYXir17%2FzaEPYz59%2FPjjA5z2GwzC0CBNCYbAXjWVTEFn6ab5dVzNqBk8T6dGL745MsJxuXTHEPvCmq8CdQYiXiJma%2BKhr0x%2Ft4wKIuprfj%2F%2FDxSbiAPj5zHhEBM4AAbpFU5SYO%2F0NuxvU%2FaXIBRwHIocxPzbmV2PIhPvYf8H1VV5kptUOb8DaJ2t5eC4xz1V1DvSRIL2oIt5ig0SZ%2BqKRvOVJRUhju5wVp%2FgT96vRSemNzs5MfxCHzEn9UWdU1foK5MTi4IhAdvjeoiHzvbWXuRPqlyHtx7KxLZb%2FjAGurqLwetk0GCKHYnSI9OV650tWj32R92i6TuqS6xFq%2BxZW2Md6WEIe3ejCNw5%2BALR8jsmsVic0dHu0RJC4NOdONRtI0tvxtS11fMBgLXVAUQCQkLG4HVUyzve0oiQZrVDrt4gzrWM6UPyk8hEanFO89uSGbqMJv35cQGOqUBiTuof2bzZSVZ1ARGUhSbUlhUlousrmPuBVUcsAyPrOuZJj6lXLRRHrMnMACbpNjFmEMwhLhnfww5YZRHpMUEkGJ3xkJYqGwJJT6yXFgS48GKqoFN6Ma2wVnOytzmjBCiGPoYonTisb3dJ0MRgA9otiFitiRlybVsXaLsQaomfmj9UWKELImjCxEupI5nnzQglPLi87louzXvuhqCFm8DylLCprFS&X-Amz-Signature=f79ec02dbcaca7b2f3fa707179a5cb595ef65c50a3b7bf1ebc8fd064c66bfb5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ESA7L4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHuyoHm%2FQ8fRIQx63gHOsmDZ%2FB67%2F2eqlSoNFpmBc3aAiEA6mOu1cj90QND%2BWhQRu9gnDDrWoKXab8RKgMFZI79SwwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAg4ZK%2BZk7YB5ctqWyrcA%2FyIeVDrT1QMHtqgnKyv0SzgmkjwlDOupoaaUFrg6Vzm9%2Bg4F%2Fhv4hwi1G38ki%2BB0NyF71ZrWJ4Q5riAJcjz6O%2F7ss%2FEdaN7VPKeCfn5tDW4rCG%2BIKXrmq590Bq3WH46b%2FnPCgZNeMY3wyA2YgYSvoip6cGbFbjhZvJ9hBqv4xR1QzEEYJ7p9uIcMKYXir17%2FzaEPYz59%2FPjjA5z2GwzC0CBNCYbAXjWVTEFn6ab5dVzNqBk8T6dGL745MsJxuXTHEPvCmq8CdQYiXiJma%2BKhr0x%2Ft4wKIuprfj%2F%2FDxSbiAPj5zHhEBM4AAbpFU5SYO%2F0NuxvU%2FaXIBRwHIocxPzbmV2PIhPvYf8H1VV5kptUOb8DaJ2t5eC4xz1V1DvSRIL2oIt5ig0SZ%2BqKRvOVJRUhju5wVp%2FgT96vRSemNzs5MfxCHzEn9UWdU1foK5MTi4IhAdvjeoiHzvbWXuRPqlyHtx7KxLZb%2FjAGurqLwetk0GCKHYnSI9OV650tWj32R92i6TuqS6xFq%2BxZW2Md6WEIe3ejCNw5%2BALR8jsmsVic0dHu0RJC4NOdONRtI0tvxtS11fMBgLXVAUQCQkLG4HVUyzve0oiQZrVDrt4gzrWM6UPyk8hEanFO89uSGbqMJv35cQGOqUBiTuof2bzZSVZ1ARGUhSbUlhUlousrmPuBVUcsAyPrOuZJj6lXLRRHrMnMACbpNjFmEMwhLhnfww5YZRHpMUEkGJ3xkJYqGwJJT6yXFgS48GKqoFN6Ma2wVnOytzmjBCiGPoYonTisb3dJ0MRgA9otiFitiRlybVsXaLsQaomfmj9UWKELImjCxEupI5nnzQglPLi87louzXvuhqCFm8DylLCprFS&X-Amz-Signature=fde37c2705a86e7187e2894befc292f45abdf13bbe47b6f97fd32012f85c6f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ESA7L4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHuyoHm%2FQ8fRIQx63gHOsmDZ%2FB67%2F2eqlSoNFpmBc3aAiEA6mOu1cj90QND%2BWhQRu9gnDDrWoKXab8RKgMFZI79SwwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAg4ZK%2BZk7YB5ctqWyrcA%2FyIeVDrT1QMHtqgnKyv0SzgmkjwlDOupoaaUFrg6Vzm9%2Bg4F%2Fhv4hwi1G38ki%2BB0NyF71ZrWJ4Q5riAJcjz6O%2F7ss%2FEdaN7VPKeCfn5tDW4rCG%2BIKXrmq590Bq3WH46b%2FnPCgZNeMY3wyA2YgYSvoip6cGbFbjhZvJ9hBqv4xR1QzEEYJ7p9uIcMKYXir17%2FzaEPYz59%2FPjjA5z2GwzC0CBNCYbAXjWVTEFn6ab5dVzNqBk8T6dGL745MsJxuXTHEPvCmq8CdQYiXiJma%2BKhr0x%2Ft4wKIuprfj%2F%2FDxSbiAPj5zHhEBM4AAbpFU5SYO%2F0NuxvU%2FaXIBRwHIocxPzbmV2PIhPvYf8H1VV5kptUOb8DaJ2t5eC4xz1V1DvSRIL2oIt5ig0SZ%2BqKRvOVJRUhju5wVp%2FgT96vRSemNzs5MfxCHzEn9UWdU1foK5MTi4IhAdvjeoiHzvbWXuRPqlyHtx7KxLZb%2FjAGurqLwetk0GCKHYnSI9OV650tWj32R92i6TuqS6xFq%2BxZW2Md6WEIe3ejCNw5%2BALR8jsmsVic0dHu0RJC4NOdONRtI0tvxtS11fMBgLXVAUQCQkLG4HVUyzve0oiQZrVDrt4gzrWM6UPyk8hEanFO89uSGbqMJv35cQGOqUBiTuof2bzZSVZ1ARGUhSbUlhUlousrmPuBVUcsAyPrOuZJj6lXLRRHrMnMACbpNjFmEMwhLhnfww5YZRHpMUEkGJ3xkJYqGwJJT6yXFgS48GKqoFN6Ma2wVnOytzmjBCiGPoYonTisb3dJ0MRgA9otiFitiRlybVsXaLsQaomfmj9UWKELImjCxEupI5nnzQglPLi87louzXvuhqCFm8DylLCprFS&X-Amz-Signature=8af7837d23c0fe63751a3260c0b0c31026c97a4d66ae2ca3b97b58a818c520cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ESA7L4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHuyoHm%2FQ8fRIQx63gHOsmDZ%2FB67%2F2eqlSoNFpmBc3aAiEA6mOu1cj90QND%2BWhQRu9gnDDrWoKXab8RKgMFZI79SwwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAg4ZK%2BZk7YB5ctqWyrcA%2FyIeVDrT1QMHtqgnKyv0SzgmkjwlDOupoaaUFrg6Vzm9%2Bg4F%2Fhv4hwi1G38ki%2BB0NyF71ZrWJ4Q5riAJcjz6O%2F7ss%2FEdaN7VPKeCfn5tDW4rCG%2BIKXrmq590Bq3WH46b%2FnPCgZNeMY3wyA2YgYSvoip6cGbFbjhZvJ9hBqv4xR1QzEEYJ7p9uIcMKYXir17%2FzaEPYz59%2FPjjA5z2GwzC0CBNCYbAXjWVTEFn6ab5dVzNqBk8T6dGL745MsJxuXTHEPvCmq8CdQYiXiJma%2BKhr0x%2Ft4wKIuprfj%2F%2FDxSbiAPj5zHhEBM4AAbpFU5SYO%2F0NuxvU%2FaXIBRwHIocxPzbmV2PIhPvYf8H1VV5kptUOb8DaJ2t5eC4xz1V1DvSRIL2oIt5ig0SZ%2BqKRvOVJRUhju5wVp%2FgT96vRSemNzs5MfxCHzEn9UWdU1foK5MTi4IhAdvjeoiHzvbWXuRPqlyHtx7KxLZb%2FjAGurqLwetk0GCKHYnSI9OV650tWj32R92i6TuqS6xFq%2BxZW2Md6WEIe3ejCNw5%2BALR8jsmsVic0dHu0RJC4NOdONRtI0tvxtS11fMBgLXVAUQCQkLG4HVUyzve0oiQZrVDrt4gzrWM6UPyk8hEanFO89uSGbqMJv35cQGOqUBiTuof2bzZSVZ1ARGUhSbUlhUlousrmPuBVUcsAyPrOuZJj6lXLRRHrMnMACbpNjFmEMwhLhnfww5YZRHpMUEkGJ3xkJYqGwJJT6yXFgS48GKqoFN6Ma2wVnOytzmjBCiGPoYonTisb3dJ0MRgA9otiFitiRlybVsXaLsQaomfmj9UWKELImjCxEupI5nnzQglPLi87louzXvuhqCFm8DylLCprFS&X-Amz-Signature=bed6eed527ad2447e1ddd11519b864f5ce8f1b52540411179baec7a7cfc5913c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZTM5IAQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDuqRgru%2Fg7Vsq6KLbBBHpfvUznRrASC6RHOCzxyba0HAiByP4CZl4ydSwPDrNvHfBkbtS%2Fsy4B93%2FqpKyD%2F5wNfjyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMftkwG9htt2pJbdJsKtwDdEpbXl01MMYTwr0hluFeblzMjzab%2BbRbxOSC1446VqLvT7i89dtuSpvILLi9DtulEloH7UbsNWrAxOyf9lH498M86YLuracfcOIj9TAxzULI3npQLk0wCkQjtQeQrntNCaWa52rATLb803YCaW6IHGNp9SByEZinDV%2FyKr20%2Betf4zjAbN9L5QEaVgKNMElhNsRF%2BToCIHafL77d3Jtund4yzCXkERO97KMOejmG7hAOgJAN8W2s%2BkqR1%2FT0JTKRhdo107J69zrCLueUlEofw1c%2F7FZkKvBId%2Fnc8IjbH8IhZ9ieR4iPYk5Qq3NKny7ptDbzlW817E7htjelb19wSSuRryM0vB7BG%2BvAuJje0jZ7D%2Bl5P10eGGvBYK48GeGMQi3dWqsgL6p06OnD91UjFLsQ7BtpcIjTaximv7rgzpzUZCzBvg9ybRBoHDXVSZdhytikJvBYHmlfP0T1ILBbsMmW6nbD4kBdPx30b%2BI1xhYd1N8sgDGBpJImar5%2FkU2kGkoDyxwPyTDER3VRQcXmcFmi%2BmaqzuOGxumymQG46%2FwAG73trhRlr%2FDBtJKk3n9JPnyZHVqfiURaCKlQMAPj4VaqRQ7XQwcxwNIQb6abL5h2x8Z3mXxwdrpX2msw8fflxAY6pgHoQu3lIAIEpVofDSC1kFy20OJMI775qln6vviKTeLogqA11EmFKevQHijhzVL%2BjtZnu782jG8oRm9JtSbZbM0XzcEzuK3fbs98CQ%2FRtuKBX0e1ON7ehcncQKpFzqi0WyeoALQyj2C3T4bfwSS3JqK8JRK7MYHp3KBmVtXrZt%2FbSvQeaqS89xazHrZZQ%2Fb9WKAee5EEUF6qyrN7FkHGkQEfqt16XiI%2F&X-Amz-Signature=4471e073c8344940a61e86b0412d2b11c7c25e3c5659b6195bb7abd9ad952c83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ESA7L4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHuyoHm%2FQ8fRIQx63gHOsmDZ%2FB67%2F2eqlSoNFpmBc3aAiEA6mOu1cj90QND%2BWhQRu9gnDDrWoKXab8RKgMFZI79SwwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAg4ZK%2BZk7YB5ctqWyrcA%2FyIeVDrT1QMHtqgnKyv0SzgmkjwlDOupoaaUFrg6Vzm9%2Bg4F%2Fhv4hwi1G38ki%2BB0NyF71ZrWJ4Q5riAJcjz6O%2F7ss%2FEdaN7VPKeCfn5tDW4rCG%2BIKXrmq590Bq3WH46b%2FnPCgZNeMY3wyA2YgYSvoip6cGbFbjhZvJ9hBqv4xR1QzEEYJ7p9uIcMKYXir17%2FzaEPYz59%2FPjjA5z2GwzC0CBNCYbAXjWVTEFn6ab5dVzNqBk8T6dGL745MsJxuXTHEPvCmq8CdQYiXiJma%2BKhr0x%2Ft4wKIuprfj%2F%2FDxSbiAPj5zHhEBM4AAbpFU5SYO%2F0NuxvU%2FaXIBRwHIocxPzbmV2PIhPvYf8H1VV5kptUOb8DaJ2t5eC4xz1V1DvSRIL2oIt5ig0SZ%2BqKRvOVJRUhju5wVp%2FgT96vRSemNzs5MfxCHzEn9UWdU1foK5MTi4IhAdvjeoiHzvbWXuRPqlyHtx7KxLZb%2FjAGurqLwetk0GCKHYnSI9OV650tWj32R92i6TuqS6xFq%2BxZW2Md6WEIe3ejCNw5%2BALR8jsmsVic0dHu0RJC4NOdONRtI0tvxtS11fMBgLXVAUQCQkLG4HVUyzve0oiQZrVDrt4gzrWM6UPyk8hEanFO89uSGbqMJv35cQGOqUBiTuof2bzZSVZ1ARGUhSbUlhUlousrmPuBVUcsAyPrOuZJj6lXLRRHrMnMACbpNjFmEMwhLhnfww5YZRHpMUEkGJ3xkJYqGwJJT6yXFgS48GKqoFN6Ma2wVnOytzmjBCiGPoYonTisb3dJ0MRgA9otiFitiRlybVsXaLsQaomfmj9UWKELImjCxEupI5nnzQglPLi87louzXvuhqCFm8DylLCprFS&X-Amz-Signature=9a2492df2a8dcd1e11c59e5cc0d86c16f191bb19d199a66571a94937e0a1f226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ESA7L4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHuyoHm%2FQ8fRIQx63gHOsmDZ%2FB67%2F2eqlSoNFpmBc3aAiEA6mOu1cj90QND%2BWhQRu9gnDDrWoKXab8RKgMFZI79SwwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAg4ZK%2BZk7YB5ctqWyrcA%2FyIeVDrT1QMHtqgnKyv0SzgmkjwlDOupoaaUFrg6Vzm9%2Bg4F%2Fhv4hwi1G38ki%2BB0NyF71ZrWJ4Q5riAJcjz6O%2F7ss%2FEdaN7VPKeCfn5tDW4rCG%2BIKXrmq590Bq3WH46b%2FnPCgZNeMY3wyA2YgYSvoip6cGbFbjhZvJ9hBqv4xR1QzEEYJ7p9uIcMKYXir17%2FzaEPYz59%2FPjjA5z2GwzC0CBNCYbAXjWVTEFn6ab5dVzNqBk8T6dGL745MsJxuXTHEPvCmq8CdQYiXiJma%2BKhr0x%2Ft4wKIuprfj%2F%2FDxSbiAPj5zHhEBM4AAbpFU5SYO%2F0NuxvU%2FaXIBRwHIocxPzbmV2PIhPvYf8H1VV5kptUOb8DaJ2t5eC4xz1V1DvSRIL2oIt5ig0SZ%2BqKRvOVJRUhju5wVp%2FgT96vRSemNzs5MfxCHzEn9UWdU1foK5MTi4IhAdvjeoiHzvbWXuRPqlyHtx7KxLZb%2FjAGurqLwetk0GCKHYnSI9OV650tWj32R92i6TuqS6xFq%2BxZW2Md6WEIe3ejCNw5%2BALR8jsmsVic0dHu0RJC4NOdONRtI0tvxtS11fMBgLXVAUQCQkLG4HVUyzve0oiQZrVDrt4gzrWM6UPyk8hEanFO89uSGbqMJv35cQGOqUBiTuof2bzZSVZ1ARGUhSbUlhUlousrmPuBVUcsAyPrOuZJj6lXLRRHrMnMACbpNjFmEMwhLhnfww5YZRHpMUEkGJ3xkJYqGwJJT6yXFgS48GKqoFN6Ma2wVnOytzmjBCiGPoYonTisb3dJ0MRgA9otiFitiRlybVsXaLsQaomfmj9UWKELImjCxEupI5nnzQglPLi87louzXvuhqCFm8DylLCprFS&X-Amz-Signature=09c5a28c1dceae094f14ba1e33a98af5e2496c8ccba90e7aff08a2115a1424da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ESA7L4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHuyoHm%2FQ8fRIQx63gHOsmDZ%2FB67%2F2eqlSoNFpmBc3aAiEA6mOu1cj90QND%2BWhQRu9gnDDrWoKXab8RKgMFZI79SwwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAg4ZK%2BZk7YB5ctqWyrcA%2FyIeVDrT1QMHtqgnKyv0SzgmkjwlDOupoaaUFrg6Vzm9%2Bg4F%2Fhv4hwi1G38ki%2BB0NyF71ZrWJ4Q5riAJcjz6O%2F7ss%2FEdaN7VPKeCfn5tDW4rCG%2BIKXrmq590Bq3WH46b%2FnPCgZNeMY3wyA2YgYSvoip6cGbFbjhZvJ9hBqv4xR1QzEEYJ7p9uIcMKYXir17%2FzaEPYz59%2FPjjA5z2GwzC0CBNCYbAXjWVTEFn6ab5dVzNqBk8T6dGL745MsJxuXTHEPvCmq8CdQYiXiJma%2BKhr0x%2Ft4wKIuprfj%2F%2FDxSbiAPj5zHhEBM4AAbpFU5SYO%2F0NuxvU%2FaXIBRwHIocxPzbmV2PIhPvYf8H1VV5kptUOb8DaJ2t5eC4xz1V1DvSRIL2oIt5ig0SZ%2BqKRvOVJRUhju5wVp%2FgT96vRSemNzs5MfxCHzEn9UWdU1foK5MTi4IhAdvjeoiHzvbWXuRPqlyHtx7KxLZb%2FjAGurqLwetk0GCKHYnSI9OV650tWj32R92i6TuqS6xFq%2BxZW2Md6WEIe3ejCNw5%2BALR8jsmsVic0dHu0RJC4NOdONRtI0tvxtS11fMBgLXVAUQCQkLG4HVUyzve0oiQZrVDrt4gzrWM6UPyk8hEanFO89uSGbqMJv35cQGOqUBiTuof2bzZSVZ1ARGUhSbUlhUlousrmPuBVUcsAyPrOuZJj6lXLRRHrMnMACbpNjFmEMwhLhnfww5YZRHpMUEkGJ3xkJYqGwJJT6yXFgS48GKqoFN6Ma2wVnOytzmjBCiGPoYonTisb3dJ0MRgA9otiFitiRlybVsXaLsQaomfmj9UWKELImjCxEupI5nnzQglPLi87louzXvuhqCFm8DylLCprFS&X-Amz-Signature=4c1a242ca8e4398706ddacb795723967569a6a0796ca5926b3133cf3293577ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ESA7L4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHuyoHm%2FQ8fRIQx63gHOsmDZ%2FB67%2F2eqlSoNFpmBc3aAiEA6mOu1cj90QND%2BWhQRu9gnDDrWoKXab8RKgMFZI79SwwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAg4ZK%2BZk7YB5ctqWyrcA%2FyIeVDrT1QMHtqgnKyv0SzgmkjwlDOupoaaUFrg6Vzm9%2Bg4F%2Fhv4hwi1G38ki%2BB0NyF71ZrWJ4Q5riAJcjz6O%2F7ss%2FEdaN7VPKeCfn5tDW4rCG%2BIKXrmq590Bq3WH46b%2FnPCgZNeMY3wyA2YgYSvoip6cGbFbjhZvJ9hBqv4xR1QzEEYJ7p9uIcMKYXir17%2FzaEPYz59%2FPjjA5z2GwzC0CBNCYbAXjWVTEFn6ab5dVzNqBk8T6dGL745MsJxuXTHEPvCmq8CdQYiXiJma%2BKhr0x%2Ft4wKIuprfj%2F%2FDxSbiAPj5zHhEBM4AAbpFU5SYO%2F0NuxvU%2FaXIBRwHIocxPzbmV2PIhPvYf8H1VV5kptUOb8DaJ2t5eC4xz1V1DvSRIL2oIt5ig0SZ%2BqKRvOVJRUhju5wVp%2FgT96vRSemNzs5MfxCHzEn9UWdU1foK5MTi4IhAdvjeoiHzvbWXuRPqlyHtx7KxLZb%2FjAGurqLwetk0GCKHYnSI9OV650tWj32R92i6TuqS6xFq%2BxZW2Md6WEIe3ejCNw5%2BALR8jsmsVic0dHu0RJC4NOdONRtI0tvxtS11fMBgLXVAUQCQkLG4HVUyzve0oiQZrVDrt4gzrWM6UPyk8hEanFO89uSGbqMJv35cQGOqUBiTuof2bzZSVZ1ARGUhSbUlhUlousrmPuBVUcsAyPrOuZJj6lXLRRHrMnMACbpNjFmEMwhLhnfww5YZRHpMUEkGJ3xkJYqGwJJT6yXFgS48GKqoFN6Ma2wVnOytzmjBCiGPoYonTisb3dJ0MRgA9otiFitiRlybVsXaLsQaomfmj9UWKELImjCxEupI5nnzQglPLi87louzXvuhqCFm8DylLCprFS&X-Amz-Signature=f6cc1dbf93c4a21d1278cd00005ce670f6fc9e398060c52db140bd443f73a3c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ESA7L4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHuyoHm%2FQ8fRIQx63gHOsmDZ%2FB67%2F2eqlSoNFpmBc3aAiEA6mOu1cj90QND%2BWhQRu9gnDDrWoKXab8RKgMFZI79SwwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAg4ZK%2BZk7YB5ctqWyrcA%2FyIeVDrT1QMHtqgnKyv0SzgmkjwlDOupoaaUFrg6Vzm9%2Bg4F%2Fhv4hwi1G38ki%2BB0NyF71ZrWJ4Q5riAJcjz6O%2F7ss%2FEdaN7VPKeCfn5tDW4rCG%2BIKXrmq590Bq3WH46b%2FnPCgZNeMY3wyA2YgYSvoip6cGbFbjhZvJ9hBqv4xR1QzEEYJ7p9uIcMKYXir17%2FzaEPYz59%2FPjjA5z2GwzC0CBNCYbAXjWVTEFn6ab5dVzNqBk8T6dGL745MsJxuXTHEPvCmq8CdQYiXiJma%2BKhr0x%2Ft4wKIuprfj%2F%2FDxSbiAPj5zHhEBM4AAbpFU5SYO%2F0NuxvU%2FaXIBRwHIocxPzbmV2PIhPvYf8H1VV5kptUOb8DaJ2t5eC4xz1V1DvSRIL2oIt5ig0SZ%2BqKRvOVJRUhju5wVp%2FgT96vRSemNzs5MfxCHzEn9UWdU1foK5MTi4IhAdvjeoiHzvbWXuRPqlyHtx7KxLZb%2FjAGurqLwetk0GCKHYnSI9OV650tWj32R92i6TuqS6xFq%2BxZW2Md6WEIe3ejCNw5%2BALR8jsmsVic0dHu0RJC4NOdONRtI0tvxtS11fMBgLXVAUQCQkLG4HVUyzve0oiQZrVDrt4gzrWM6UPyk8hEanFO89uSGbqMJv35cQGOqUBiTuof2bzZSVZ1ARGUhSbUlhUlousrmPuBVUcsAyPrOuZJj6lXLRRHrMnMACbpNjFmEMwhLhnfww5YZRHpMUEkGJ3xkJYqGwJJT6yXFgS48GKqoFN6Ma2wVnOytzmjBCiGPoYonTisb3dJ0MRgA9otiFitiRlybVsXaLsQaomfmj9UWKELImjCxEupI5nnzQglPLi87louzXvuhqCFm8DylLCprFS&X-Amz-Signature=623fd5e8c98a043b7541861752649b0b0baad257a4d1aab212f42eb6f728a0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ESA7L4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHuyoHm%2FQ8fRIQx63gHOsmDZ%2FB67%2F2eqlSoNFpmBc3aAiEA6mOu1cj90QND%2BWhQRu9gnDDrWoKXab8RKgMFZI79SwwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAg4ZK%2BZk7YB5ctqWyrcA%2FyIeVDrT1QMHtqgnKyv0SzgmkjwlDOupoaaUFrg6Vzm9%2Bg4F%2Fhv4hwi1G38ki%2BB0NyF71ZrWJ4Q5riAJcjz6O%2F7ss%2FEdaN7VPKeCfn5tDW4rCG%2BIKXrmq590Bq3WH46b%2FnPCgZNeMY3wyA2YgYSvoip6cGbFbjhZvJ9hBqv4xR1QzEEYJ7p9uIcMKYXir17%2FzaEPYz59%2FPjjA5z2GwzC0CBNCYbAXjWVTEFn6ab5dVzNqBk8T6dGL745MsJxuXTHEPvCmq8CdQYiXiJma%2BKhr0x%2Ft4wKIuprfj%2F%2FDxSbiAPj5zHhEBM4AAbpFU5SYO%2F0NuxvU%2FaXIBRwHIocxPzbmV2PIhPvYf8H1VV5kptUOb8DaJ2t5eC4xz1V1DvSRIL2oIt5ig0SZ%2BqKRvOVJRUhju5wVp%2FgT96vRSemNzs5MfxCHzEn9UWdU1foK5MTi4IhAdvjeoiHzvbWXuRPqlyHtx7KxLZb%2FjAGurqLwetk0GCKHYnSI9OV650tWj32R92i6TuqS6xFq%2BxZW2Md6WEIe3ejCNw5%2BALR8jsmsVic0dHu0RJC4NOdONRtI0tvxtS11fMBgLXVAUQCQkLG4HVUyzve0oiQZrVDrt4gzrWM6UPyk8hEanFO89uSGbqMJv35cQGOqUBiTuof2bzZSVZ1ARGUhSbUlhUlousrmPuBVUcsAyPrOuZJj6lXLRRHrMnMACbpNjFmEMwhLhnfww5YZRHpMUEkGJ3xkJYqGwJJT6yXFgS48GKqoFN6Ma2wVnOytzmjBCiGPoYonTisb3dJ0MRgA9otiFitiRlybVsXaLsQaomfmj9UWKELImjCxEupI5nnzQglPLi87louzXvuhqCFm8DylLCprFS&X-Amz-Signature=8226f27bb1ab9b923cbfaf9e960210729a889c89b2c1038eef6736bd1937317e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
