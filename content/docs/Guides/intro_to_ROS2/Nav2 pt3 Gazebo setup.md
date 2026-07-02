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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LOFAHJA%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDB%2BkeirnX%2FimAbGwqGqiDpU%2BwN%2BdrTk%2FDy3kHJuK5XywIgeWJ4CZ%2Fa%2FqLgY3zPOhIAqwBbLsvTmY%2FBRKPgLj7m02sqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC3MLDTj9y725JOrSrcA86Fy8oew5dDwKYIogqieo2fqAydIBRcWI%2BsREGmMSIzujep4nnJ9V7UTw2hHlhKR6xipvxZaUX2qB9W5FVQ2b%2BGmbm6n2Efv0U8HKTrXo5svMaTdKrqca31rZBTbfhzc3ao58Q%2BKrGzCa%2BkOpGOea5K2EHjPgxXa8C2jrEJuTMf0tjeCo0ILRp5QvgMxM%2BEy7%2FUk0cEa39rglSBfyFWYZtYLc%2FAb8FnsQjZqM%2FkhsfEgcdBdj0SWHbgYw1vXFzJD3b3v0cCnjtXdZRqAykw5aV8wUDfgo2edhPzZvbvJ%2FEF9Oqeo49qNA7gu4oQyx%2BkzsvzAvpCRQO5qBvwWfuSgE3IIBgwmChuGw1h2%2FO9cNlh8kp%2BcvVdk9swLZ3G%2Fk%2BnivQnKsRkBkHUYO7Up4pYT5H9d%2BKrsVRuo7njaD8QrtcarDJrrLOjdq0y8%2FUE68QrlMdZ92w9K1fvILdZNB7Yvehd%2FZo9B2KAY5bymwshznXZPMowqueztLnSkuLw0PDZha4spRNg4a8JCWuelzo5p0c7TEHXfX8u6n29XE84vKuVtJYpa6R5oMZ6WMHRkjjQgdUZgT3e7SyuEJyyBJRfkxs6AU5BZarmM8EkdLZrRl24oUlpqeYQ7Irz9iBcMIKel9IGOqUBRs1M%2Bxq5Dl0d1apGkMp8MNTekM9Ok%2F%2B6d2E3DKgokNv3BFVyGejP7AM%2FixiYx9MrvvPR1I0gwxI4sO6OPgKO17DF7VeOffJCXW9gBhYgheHW20hxYz3UPEkIOpAHRfEW0NOu3ZujU6FJF38XuXfaxvAztspJXwwvD4np07VqoBAUyZp9ZyfWpPviKRXFywcTmGRNtvp8PFHhEqz9iUE3lF3alIul&X-Amz-Signature=b3495cdd773a3a658cea2d43db5702279f3d5310281042522b897e7a711c0374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LOFAHJA%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDB%2BkeirnX%2FimAbGwqGqiDpU%2BwN%2BdrTk%2FDy3kHJuK5XywIgeWJ4CZ%2Fa%2FqLgY3zPOhIAqwBbLsvTmY%2FBRKPgLj7m02sqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC3MLDTj9y725JOrSrcA86Fy8oew5dDwKYIogqieo2fqAydIBRcWI%2BsREGmMSIzujep4nnJ9V7UTw2hHlhKR6xipvxZaUX2qB9W5FVQ2b%2BGmbm6n2Efv0U8HKTrXo5svMaTdKrqca31rZBTbfhzc3ao58Q%2BKrGzCa%2BkOpGOea5K2EHjPgxXa8C2jrEJuTMf0tjeCo0ILRp5QvgMxM%2BEy7%2FUk0cEa39rglSBfyFWYZtYLc%2FAb8FnsQjZqM%2FkhsfEgcdBdj0SWHbgYw1vXFzJD3b3v0cCnjtXdZRqAykw5aV8wUDfgo2edhPzZvbvJ%2FEF9Oqeo49qNA7gu4oQyx%2BkzsvzAvpCRQO5qBvwWfuSgE3IIBgwmChuGw1h2%2FO9cNlh8kp%2BcvVdk9swLZ3G%2Fk%2BnivQnKsRkBkHUYO7Up4pYT5H9d%2BKrsVRuo7njaD8QrtcarDJrrLOjdq0y8%2FUE68QrlMdZ92w9K1fvILdZNB7Yvehd%2FZo9B2KAY5bymwshznXZPMowqueztLnSkuLw0PDZha4spRNg4a8JCWuelzo5p0c7TEHXfX8u6n29XE84vKuVtJYpa6R5oMZ6WMHRkjjQgdUZgT3e7SyuEJyyBJRfkxs6AU5BZarmM8EkdLZrRl24oUlpqeYQ7Irz9iBcMIKel9IGOqUBRs1M%2Bxq5Dl0d1apGkMp8MNTekM9Ok%2F%2B6d2E3DKgokNv3BFVyGejP7AM%2FixiYx9MrvvPR1I0gwxI4sO6OPgKO17DF7VeOffJCXW9gBhYgheHW20hxYz3UPEkIOpAHRfEW0NOu3ZujU6FJF38XuXfaxvAztspJXwwvD4np07VqoBAUyZp9ZyfWpPviKRXFywcTmGRNtvp8PFHhEqz9iUE3lF3alIul&X-Amz-Signature=e5b5e6a32e37607f2afa13554fc257d2a6b020f2982d5bf83c165bf128a55149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LOFAHJA%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDB%2BkeirnX%2FimAbGwqGqiDpU%2BwN%2BdrTk%2FDy3kHJuK5XywIgeWJ4CZ%2Fa%2FqLgY3zPOhIAqwBbLsvTmY%2FBRKPgLj7m02sqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC3MLDTj9y725JOrSrcA86Fy8oew5dDwKYIogqieo2fqAydIBRcWI%2BsREGmMSIzujep4nnJ9V7UTw2hHlhKR6xipvxZaUX2qB9W5FVQ2b%2BGmbm6n2Efv0U8HKTrXo5svMaTdKrqca31rZBTbfhzc3ao58Q%2BKrGzCa%2BkOpGOea5K2EHjPgxXa8C2jrEJuTMf0tjeCo0ILRp5QvgMxM%2BEy7%2FUk0cEa39rglSBfyFWYZtYLc%2FAb8FnsQjZqM%2FkhsfEgcdBdj0SWHbgYw1vXFzJD3b3v0cCnjtXdZRqAykw5aV8wUDfgo2edhPzZvbvJ%2FEF9Oqeo49qNA7gu4oQyx%2BkzsvzAvpCRQO5qBvwWfuSgE3IIBgwmChuGw1h2%2FO9cNlh8kp%2BcvVdk9swLZ3G%2Fk%2BnivQnKsRkBkHUYO7Up4pYT5H9d%2BKrsVRuo7njaD8QrtcarDJrrLOjdq0y8%2FUE68QrlMdZ92w9K1fvILdZNB7Yvehd%2FZo9B2KAY5bymwshznXZPMowqueztLnSkuLw0PDZha4spRNg4a8JCWuelzo5p0c7TEHXfX8u6n29XE84vKuVtJYpa6R5oMZ6WMHRkjjQgdUZgT3e7SyuEJyyBJRfkxs6AU5BZarmM8EkdLZrRl24oUlpqeYQ7Irz9iBcMIKel9IGOqUBRs1M%2Bxq5Dl0d1apGkMp8MNTekM9Ok%2F%2B6d2E3DKgokNv3BFVyGejP7AM%2FixiYx9MrvvPR1I0gwxI4sO6OPgKO17DF7VeOffJCXW9gBhYgheHW20hxYz3UPEkIOpAHRfEW0NOu3ZujU6FJF38XuXfaxvAztspJXwwvD4np07VqoBAUyZp9ZyfWpPviKRXFywcTmGRNtvp8PFHhEqz9iUE3lF3alIul&X-Amz-Signature=42b8daa002f8f5a9590eb2be298f53e1a5c83cbe3a4f97076a3014a72117c5d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LOFAHJA%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDB%2BkeirnX%2FimAbGwqGqiDpU%2BwN%2BdrTk%2FDy3kHJuK5XywIgeWJ4CZ%2Fa%2FqLgY3zPOhIAqwBbLsvTmY%2FBRKPgLj7m02sqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC3MLDTj9y725JOrSrcA86Fy8oew5dDwKYIogqieo2fqAydIBRcWI%2BsREGmMSIzujep4nnJ9V7UTw2hHlhKR6xipvxZaUX2qB9W5FVQ2b%2BGmbm6n2Efv0U8HKTrXo5svMaTdKrqca31rZBTbfhzc3ao58Q%2BKrGzCa%2BkOpGOea5K2EHjPgxXa8C2jrEJuTMf0tjeCo0ILRp5QvgMxM%2BEy7%2FUk0cEa39rglSBfyFWYZtYLc%2FAb8FnsQjZqM%2FkhsfEgcdBdj0SWHbgYw1vXFzJD3b3v0cCnjtXdZRqAykw5aV8wUDfgo2edhPzZvbvJ%2FEF9Oqeo49qNA7gu4oQyx%2BkzsvzAvpCRQO5qBvwWfuSgE3IIBgwmChuGw1h2%2FO9cNlh8kp%2BcvVdk9swLZ3G%2Fk%2BnivQnKsRkBkHUYO7Up4pYT5H9d%2BKrsVRuo7njaD8QrtcarDJrrLOjdq0y8%2FUE68QrlMdZ92w9K1fvILdZNB7Yvehd%2FZo9B2KAY5bymwshznXZPMowqueztLnSkuLw0PDZha4spRNg4a8JCWuelzo5p0c7TEHXfX8u6n29XE84vKuVtJYpa6R5oMZ6WMHRkjjQgdUZgT3e7SyuEJyyBJRfkxs6AU5BZarmM8EkdLZrRl24oUlpqeYQ7Irz9iBcMIKel9IGOqUBRs1M%2Bxq5Dl0d1apGkMp8MNTekM9Ok%2F%2B6d2E3DKgokNv3BFVyGejP7AM%2FixiYx9MrvvPR1I0gwxI4sO6OPgKO17DF7VeOffJCXW9gBhYgheHW20hxYz3UPEkIOpAHRfEW0NOu3ZujU6FJF38XuXfaxvAztspJXwwvD4np07VqoBAUyZp9ZyfWpPviKRXFywcTmGRNtvp8PFHhEqz9iUE3lF3alIul&X-Amz-Signature=28bea2cd1ee568d010eb4aa59caef115b4f9bfd2c19cc9042789f4a1d9c20190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHXCMOJK%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQD6Ko7IOEPFP3OjrEFZ3Dqr8gw3fEREP4vhCVlV3h%2Bm3gIhAO1%2BH%2B7Nk%2B4k4QJSkBXI%2FoUjDEHbyZHGyPWRqgGLMv19KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoD0VVa%2Bdzypg%2F46kq3AMO64hCl33EI0oGHJ4KyMd5pOKI0RXFygiidof5V6xVRQCtfbQ9b48o0Z8XJ%2BYu2ib0M9JLTRHNkPb%2FT4qXKWC5leVHtH96k7wQV7KxsAYdLt%2BdiFl%2FlokBEYS4R1%2Fw2DioNsUO%2BsoocFUyMYErvTKu00zWKpILB7hu5HF59TCO8Nbzg3MErRUZ75bj%2F0SlffGwzS83HffCiv19vc%2Fjz5vHSXonK7OHq7Yt8WAGNZG8pvu6w306GGUCvdbXW3xCpotEJa%2BfYlYh5BKtLig3ydEY%2BDQEqQc5Re2EK6EpL%2BMW1C1X%2F46cPTlW4ZrxfaW1VLRkBTf3HYtwUcmYKUJKTCLI%2FxMmKmeSrY35aKd5RgvBIqCPI0R5XfsvZv%2BL4T2c%2BSUzRm7ESmWWmf7omMRH44VUxNW%2BUhXJ7QYa0lrcb1xkUM7BjG%2F1fIR2jOoefAnnKBaVobXVmlQp%2Bh4WVEcIUDStB2Qjj4VK%2F0lQ7SXMjrWIIspU883meHQTOfGWlROa9NMXOMcZid8EjK6k9OJe4E2O91b4%2FJR%2B1IaythleWwfPHYV0YAggvRGeE6NaLtMm7Xyeo3wGMEU%2FV0ieGg6jgXxuajjvbuMtkou2T96NeFf02by3kgd5hc7bNYaoizCPoZfSBjqkAe38ef76F0WiU4KREjZAPZski0JhV1Wfj5pfhesVvW%2FXvc2QzvjmicpoFchj46y1%2BGkfZmXiOT0N98QfsoYqn%2Btp6mpieeeryEyagFO3gNgu98JZ7T5QVpOblnNDMU2j3SaDXTZ%2BPKBHbLYVaCQpf5ar%2Bf8vhBDwPP8b0YdHf1wx8aslNBZRFmB9IDP10g14iT%2FmxXvItIGORy1fzihR6oIAyFfZ&X-Amz-Signature=1ef169eb31cd8d132462d2b95df86ee7f534d5dfdd13b36601dcf6b541d1cd4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LOFAHJA%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDB%2BkeirnX%2FimAbGwqGqiDpU%2BwN%2BdrTk%2FDy3kHJuK5XywIgeWJ4CZ%2Fa%2FqLgY3zPOhIAqwBbLsvTmY%2FBRKPgLj7m02sqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC3MLDTj9y725JOrSrcA86Fy8oew5dDwKYIogqieo2fqAydIBRcWI%2BsREGmMSIzujep4nnJ9V7UTw2hHlhKR6xipvxZaUX2qB9W5FVQ2b%2BGmbm6n2Efv0U8HKTrXo5svMaTdKrqca31rZBTbfhzc3ao58Q%2BKrGzCa%2BkOpGOea5K2EHjPgxXa8C2jrEJuTMf0tjeCo0ILRp5QvgMxM%2BEy7%2FUk0cEa39rglSBfyFWYZtYLc%2FAb8FnsQjZqM%2FkhsfEgcdBdj0SWHbgYw1vXFzJD3b3v0cCnjtXdZRqAykw5aV8wUDfgo2edhPzZvbvJ%2FEF9Oqeo49qNA7gu4oQyx%2BkzsvzAvpCRQO5qBvwWfuSgE3IIBgwmChuGw1h2%2FO9cNlh8kp%2BcvVdk9swLZ3G%2Fk%2BnivQnKsRkBkHUYO7Up4pYT5H9d%2BKrsVRuo7njaD8QrtcarDJrrLOjdq0y8%2FUE68QrlMdZ92w9K1fvILdZNB7Yvehd%2FZo9B2KAY5bymwshznXZPMowqueztLnSkuLw0PDZha4spRNg4a8JCWuelzo5p0c7TEHXfX8u6n29XE84vKuVtJYpa6R5oMZ6WMHRkjjQgdUZgT3e7SyuEJyyBJRfkxs6AU5BZarmM8EkdLZrRl24oUlpqeYQ7Irz9iBcMIKel9IGOqUBRs1M%2Bxq5Dl0d1apGkMp8MNTekM9Ok%2F%2B6d2E3DKgokNv3BFVyGejP7AM%2FixiYx9MrvvPR1I0gwxI4sO6OPgKO17DF7VeOffJCXW9gBhYgheHW20hxYz3UPEkIOpAHRfEW0NOu3ZujU6FJF38XuXfaxvAztspJXwwvD4np07VqoBAUyZp9ZyfWpPviKRXFywcTmGRNtvp8PFHhEqz9iUE3lF3alIul&X-Amz-Signature=4356942aebcbcd7624db8204b101e9f26cd25ee87869617e7ebaa296c08e2506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LOFAHJA%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDB%2BkeirnX%2FimAbGwqGqiDpU%2BwN%2BdrTk%2FDy3kHJuK5XywIgeWJ4CZ%2Fa%2FqLgY3zPOhIAqwBbLsvTmY%2FBRKPgLj7m02sqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC3MLDTj9y725JOrSrcA86Fy8oew5dDwKYIogqieo2fqAydIBRcWI%2BsREGmMSIzujep4nnJ9V7UTw2hHlhKR6xipvxZaUX2qB9W5FVQ2b%2BGmbm6n2Efv0U8HKTrXo5svMaTdKrqca31rZBTbfhzc3ao58Q%2BKrGzCa%2BkOpGOea5K2EHjPgxXa8C2jrEJuTMf0tjeCo0ILRp5QvgMxM%2BEy7%2FUk0cEa39rglSBfyFWYZtYLc%2FAb8FnsQjZqM%2FkhsfEgcdBdj0SWHbgYw1vXFzJD3b3v0cCnjtXdZRqAykw5aV8wUDfgo2edhPzZvbvJ%2FEF9Oqeo49qNA7gu4oQyx%2BkzsvzAvpCRQO5qBvwWfuSgE3IIBgwmChuGw1h2%2FO9cNlh8kp%2BcvVdk9swLZ3G%2Fk%2BnivQnKsRkBkHUYO7Up4pYT5H9d%2BKrsVRuo7njaD8QrtcarDJrrLOjdq0y8%2FUE68QrlMdZ92w9K1fvILdZNB7Yvehd%2FZo9B2KAY5bymwshznXZPMowqueztLnSkuLw0PDZha4spRNg4a8JCWuelzo5p0c7TEHXfX8u6n29XE84vKuVtJYpa6R5oMZ6WMHRkjjQgdUZgT3e7SyuEJyyBJRfkxs6AU5BZarmM8EkdLZrRl24oUlpqeYQ7Irz9iBcMIKel9IGOqUBRs1M%2Bxq5Dl0d1apGkMp8MNTekM9Ok%2F%2B6d2E3DKgokNv3BFVyGejP7AM%2FixiYx9MrvvPR1I0gwxI4sO6OPgKO17DF7VeOffJCXW9gBhYgheHW20hxYz3UPEkIOpAHRfEW0NOu3ZujU6FJF38XuXfaxvAztspJXwwvD4np07VqoBAUyZp9ZyfWpPviKRXFywcTmGRNtvp8PFHhEqz9iUE3lF3alIul&X-Amz-Signature=fd3a9e241fad545ed804f36317686a1f0a5a5a4dfa02dc701bc3a009b107cb01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LOFAHJA%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDB%2BkeirnX%2FimAbGwqGqiDpU%2BwN%2BdrTk%2FDy3kHJuK5XywIgeWJ4CZ%2Fa%2FqLgY3zPOhIAqwBbLsvTmY%2FBRKPgLj7m02sqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC3MLDTj9y725JOrSrcA86Fy8oew5dDwKYIogqieo2fqAydIBRcWI%2BsREGmMSIzujep4nnJ9V7UTw2hHlhKR6xipvxZaUX2qB9W5FVQ2b%2BGmbm6n2Efv0U8HKTrXo5svMaTdKrqca31rZBTbfhzc3ao58Q%2BKrGzCa%2BkOpGOea5K2EHjPgxXa8C2jrEJuTMf0tjeCo0ILRp5QvgMxM%2BEy7%2FUk0cEa39rglSBfyFWYZtYLc%2FAb8FnsQjZqM%2FkhsfEgcdBdj0SWHbgYw1vXFzJD3b3v0cCnjtXdZRqAykw5aV8wUDfgo2edhPzZvbvJ%2FEF9Oqeo49qNA7gu4oQyx%2BkzsvzAvpCRQO5qBvwWfuSgE3IIBgwmChuGw1h2%2FO9cNlh8kp%2BcvVdk9swLZ3G%2Fk%2BnivQnKsRkBkHUYO7Up4pYT5H9d%2BKrsVRuo7njaD8QrtcarDJrrLOjdq0y8%2FUE68QrlMdZ92w9K1fvILdZNB7Yvehd%2FZo9B2KAY5bymwshznXZPMowqueztLnSkuLw0PDZha4spRNg4a8JCWuelzo5p0c7TEHXfX8u6n29XE84vKuVtJYpa6R5oMZ6WMHRkjjQgdUZgT3e7SyuEJyyBJRfkxs6AU5BZarmM8EkdLZrRl24oUlpqeYQ7Irz9iBcMIKel9IGOqUBRs1M%2Bxq5Dl0d1apGkMp8MNTekM9Ok%2F%2B6d2E3DKgokNv3BFVyGejP7AM%2FixiYx9MrvvPR1I0gwxI4sO6OPgKO17DF7VeOffJCXW9gBhYgheHW20hxYz3UPEkIOpAHRfEW0NOu3ZujU6FJF38XuXfaxvAztspJXwwvD4np07VqoBAUyZp9ZyfWpPviKRXFywcTmGRNtvp8PFHhEqz9iUE3lF3alIul&X-Amz-Signature=b306f772603855386b03bbfe722d63bbf76cc322a4b1765d9e68186fb171caba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LOFAHJA%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDB%2BkeirnX%2FimAbGwqGqiDpU%2BwN%2BdrTk%2FDy3kHJuK5XywIgeWJ4CZ%2Fa%2FqLgY3zPOhIAqwBbLsvTmY%2FBRKPgLj7m02sqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC3MLDTj9y725JOrSrcA86Fy8oew5dDwKYIogqieo2fqAydIBRcWI%2BsREGmMSIzujep4nnJ9V7UTw2hHlhKR6xipvxZaUX2qB9W5FVQ2b%2BGmbm6n2Efv0U8HKTrXo5svMaTdKrqca31rZBTbfhzc3ao58Q%2BKrGzCa%2BkOpGOea5K2EHjPgxXa8C2jrEJuTMf0tjeCo0ILRp5QvgMxM%2BEy7%2FUk0cEa39rglSBfyFWYZtYLc%2FAb8FnsQjZqM%2FkhsfEgcdBdj0SWHbgYw1vXFzJD3b3v0cCnjtXdZRqAykw5aV8wUDfgo2edhPzZvbvJ%2FEF9Oqeo49qNA7gu4oQyx%2BkzsvzAvpCRQO5qBvwWfuSgE3IIBgwmChuGw1h2%2FO9cNlh8kp%2BcvVdk9swLZ3G%2Fk%2BnivQnKsRkBkHUYO7Up4pYT5H9d%2BKrsVRuo7njaD8QrtcarDJrrLOjdq0y8%2FUE68QrlMdZ92w9K1fvILdZNB7Yvehd%2FZo9B2KAY5bymwshznXZPMowqueztLnSkuLw0PDZha4spRNg4a8JCWuelzo5p0c7TEHXfX8u6n29XE84vKuVtJYpa6R5oMZ6WMHRkjjQgdUZgT3e7SyuEJyyBJRfkxs6AU5BZarmM8EkdLZrRl24oUlpqeYQ7Irz9iBcMIKel9IGOqUBRs1M%2Bxq5Dl0d1apGkMp8MNTekM9Ok%2F%2B6d2E3DKgokNv3BFVyGejP7AM%2FixiYx9MrvvPR1I0gwxI4sO6OPgKO17DF7VeOffJCXW9gBhYgheHW20hxYz3UPEkIOpAHRfEW0NOu3ZujU6FJF38XuXfaxvAztspJXwwvD4np07VqoBAUyZp9ZyfWpPviKRXFywcTmGRNtvp8PFHhEqz9iUE3lF3alIul&X-Amz-Signature=259bc473d9ab79ce05fcc7c812a1cdb7fd0f13849162362a6a7e552f040187a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LOFAHJA%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDB%2BkeirnX%2FimAbGwqGqiDpU%2BwN%2BdrTk%2FDy3kHJuK5XywIgeWJ4CZ%2Fa%2FqLgY3zPOhIAqwBbLsvTmY%2FBRKPgLj7m02sqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC3MLDTj9y725JOrSrcA86Fy8oew5dDwKYIogqieo2fqAydIBRcWI%2BsREGmMSIzujep4nnJ9V7UTw2hHlhKR6xipvxZaUX2qB9W5FVQ2b%2BGmbm6n2Efv0U8HKTrXo5svMaTdKrqca31rZBTbfhzc3ao58Q%2BKrGzCa%2BkOpGOea5K2EHjPgxXa8C2jrEJuTMf0tjeCo0ILRp5QvgMxM%2BEy7%2FUk0cEa39rglSBfyFWYZtYLc%2FAb8FnsQjZqM%2FkhsfEgcdBdj0SWHbgYw1vXFzJD3b3v0cCnjtXdZRqAykw5aV8wUDfgo2edhPzZvbvJ%2FEF9Oqeo49qNA7gu4oQyx%2BkzsvzAvpCRQO5qBvwWfuSgE3IIBgwmChuGw1h2%2FO9cNlh8kp%2BcvVdk9swLZ3G%2Fk%2BnivQnKsRkBkHUYO7Up4pYT5H9d%2BKrsVRuo7njaD8QrtcarDJrrLOjdq0y8%2FUE68QrlMdZ92w9K1fvILdZNB7Yvehd%2FZo9B2KAY5bymwshznXZPMowqueztLnSkuLw0PDZha4spRNg4a8JCWuelzo5p0c7TEHXfX8u6n29XE84vKuVtJYpa6R5oMZ6WMHRkjjQgdUZgT3e7SyuEJyyBJRfkxs6AU5BZarmM8EkdLZrRl24oUlpqeYQ7Irz9iBcMIKel9IGOqUBRs1M%2Bxq5Dl0d1apGkMp8MNTekM9Ok%2F%2B6d2E3DKgokNv3BFVyGejP7AM%2FixiYx9MrvvPR1I0gwxI4sO6OPgKO17DF7VeOffJCXW9gBhYgheHW20hxYz3UPEkIOpAHRfEW0NOu3ZujU6FJF38XuXfaxvAztspJXwwvD4np07VqoBAUyZp9ZyfWpPviKRXFywcTmGRNtvp8PFHhEqz9iUE3lF3alIul&X-Amz-Signature=a975dadd4f50e071389074b9ffcb81ceb51f6e412ba71f4c1c2dd5270ca46a31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LOFAHJA%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDB%2BkeirnX%2FimAbGwqGqiDpU%2BwN%2BdrTk%2FDy3kHJuK5XywIgeWJ4CZ%2Fa%2FqLgY3zPOhIAqwBbLsvTmY%2FBRKPgLj7m02sqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC3MLDTj9y725JOrSrcA86Fy8oew5dDwKYIogqieo2fqAydIBRcWI%2BsREGmMSIzujep4nnJ9V7UTw2hHlhKR6xipvxZaUX2qB9W5FVQ2b%2BGmbm6n2Efv0U8HKTrXo5svMaTdKrqca31rZBTbfhzc3ao58Q%2BKrGzCa%2BkOpGOea5K2EHjPgxXa8C2jrEJuTMf0tjeCo0ILRp5QvgMxM%2BEy7%2FUk0cEa39rglSBfyFWYZtYLc%2FAb8FnsQjZqM%2FkhsfEgcdBdj0SWHbgYw1vXFzJD3b3v0cCnjtXdZRqAykw5aV8wUDfgo2edhPzZvbvJ%2FEF9Oqeo49qNA7gu4oQyx%2BkzsvzAvpCRQO5qBvwWfuSgE3IIBgwmChuGw1h2%2FO9cNlh8kp%2BcvVdk9swLZ3G%2Fk%2BnivQnKsRkBkHUYO7Up4pYT5H9d%2BKrsVRuo7njaD8QrtcarDJrrLOjdq0y8%2FUE68QrlMdZ92w9K1fvILdZNB7Yvehd%2FZo9B2KAY5bymwshznXZPMowqueztLnSkuLw0PDZha4spRNg4a8JCWuelzo5p0c7TEHXfX8u6n29XE84vKuVtJYpa6R5oMZ6WMHRkjjQgdUZgT3e7SyuEJyyBJRfkxs6AU5BZarmM8EkdLZrRl24oUlpqeYQ7Irz9iBcMIKel9IGOqUBRs1M%2Bxq5Dl0d1apGkMp8MNTekM9Ok%2F%2B6d2E3DKgokNv3BFVyGejP7AM%2FixiYx9MrvvPR1I0gwxI4sO6OPgKO17DF7VeOffJCXW9gBhYgheHW20hxYz3UPEkIOpAHRfEW0NOu3ZujU6FJF38XuXfaxvAztspJXwwvD4np07VqoBAUyZp9ZyfWpPviKRXFywcTmGRNtvp8PFHhEqz9iUE3lF3alIul&X-Amz-Signature=71513e7cb956d14f0a9a343b5bffb7ffa216cee6f01fd5ab60e464e0be34adea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


