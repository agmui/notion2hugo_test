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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBEJA52%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFGAzeFCPGuHlp%2Bga0fu9S9ZcS7A%2BHzZuuTdPe6jZ6HYAiEA8smfcIhQkoTcNXfCYp34a3AtrIc1BxnJAKbIBJXhrBcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoliUpdEv5aIOLZzyrcA%2FnLU0VsgqbzgkNvQkh33YVTMJ9zGSrOhBNgic5iqIwgh3Nmn6YhX92waGJxUB%2BcRSKky4cJHBU%2Ftz%2B6JDmOUVv4wPxYGIXdajHdIoKY%2FADCwtMek164iHtiHcvNzRtl79iDFfauvHjGcJ%2BOHbVsscIrzO6aSW%2F1RUHCH%2FLfjalayZh8jqbBguHv25v%2BgeKlHTAE03YAqfGaB0n2QcQxAxkyyEZN5P0bUsHwdUTXJbp%2BWf9RNUTeYUGRQh%2B8%2BFdA%2BzR8jM56KJGYYDzyCsZF2qG20ZTdkvTiJDOz5sPVzT0R%2B6%2B9eo2AjK4jRXpk%2B1AfP4R%2FKbbIVadvuZgdmNc7%2BL8bJb2axc0UJSadSON%2FjBoAY%2BhlqhYbkM1BcVgYhFoqcIm52EUioVCrhHUxDudGYyLYqlDbwAMQCp1ojweQZliF%2Fr7JkhYZR0%2FJ9MPiex1rnyUDii6zLF3Hd8wMQR0rWh2dcDHJa%2FIlwq3DEFytqXF08Wf7RFH9zrBjLu9UqtLC89u8Du93exPWLwz5DE6VDpH0ffVGyzhza5NN4NmPLHJMVcARtQYLC%2BQ2tKxwpIUKoJcRZY0y1NsIXfO4Oh2L1iocGtQZ1oKmDarpLqposNQbHuGixKf0ahyG%2BXS2MKKn2MQGOqUBs24JkGCoCld4l2tMirwUcXTHEOFvITnWRe81VNmvK9SiQhtOft%2BB1WSGZ52F%2FE%2FhUxRR5WPihlaphXEHJFFhOPyYGzCK5qMp4B2dYi4C98uAo3JfZBUPc8pnbbG0qjpkNJ%2BG4YzSKSQTJ9oZLKkiK%2B6y2fhTqeWFt0Aq4C6jEr%2FxLIbPKIfAW9gN3FB1WOCPzVvkFGdfRr8VAHh%2BY9RSRmJZ4ta8&X-Amz-Signature=ee39b4c8dd472d9e66e496a7b924e74606a86ad435be157caed77d66e2bf3256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBEJA52%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFGAzeFCPGuHlp%2Bga0fu9S9ZcS7A%2BHzZuuTdPe6jZ6HYAiEA8smfcIhQkoTcNXfCYp34a3AtrIc1BxnJAKbIBJXhrBcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoliUpdEv5aIOLZzyrcA%2FnLU0VsgqbzgkNvQkh33YVTMJ9zGSrOhBNgic5iqIwgh3Nmn6YhX92waGJxUB%2BcRSKky4cJHBU%2Ftz%2B6JDmOUVv4wPxYGIXdajHdIoKY%2FADCwtMek164iHtiHcvNzRtl79iDFfauvHjGcJ%2BOHbVsscIrzO6aSW%2F1RUHCH%2FLfjalayZh8jqbBguHv25v%2BgeKlHTAE03YAqfGaB0n2QcQxAxkyyEZN5P0bUsHwdUTXJbp%2BWf9RNUTeYUGRQh%2B8%2BFdA%2BzR8jM56KJGYYDzyCsZF2qG20ZTdkvTiJDOz5sPVzT0R%2B6%2B9eo2AjK4jRXpk%2B1AfP4R%2FKbbIVadvuZgdmNc7%2BL8bJb2axc0UJSadSON%2FjBoAY%2BhlqhYbkM1BcVgYhFoqcIm52EUioVCrhHUxDudGYyLYqlDbwAMQCp1ojweQZliF%2Fr7JkhYZR0%2FJ9MPiex1rnyUDii6zLF3Hd8wMQR0rWh2dcDHJa%2FIlwq3DEFytqXF08Wf7RFH9zrBjLu9UqtLC89u8Du93exPWLwz5DE6VDpH0ffVGyzhza5NN4NmPLHJMVcARtQYLC%2BQ2tKxwpIUKoJcRZY0y1NsIXfO4Oh2L1iocGtQZ1oKmDarpLqposNQbHuGixKf0ahyG%2BXS2MKKn2MQGOqUBs24JkGCoCld4l2tMirwUcXTHEOFvITnWRe81VNmvK9SiQhtOft%2BB1WSGZ52F%2FE%2FhUxRR5WPihlaphXEHJFFhOPyYGzCK5qMp4B2dYi4C98uAo3JfZBUPc8pnbbG0qjpkNJ%2BG4YzSKSQTJ9oZLKkiK%2B6y2fhTqeWFt0Aq4C6jEr%2FxLIbPKIfAW9gN3FB1WOCPzVvkFGdfRr8VAHh%2BY9RSRmJZ4ta8&X-Amz-Signature=2edc2b4af7fc76568891e9af9f86c4bc8d461dd3a4f235297ed23666ae3d722a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBEJA52%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFGAzeFCPGuHlp%2Bga0fu9S9ZcS7A%2BHzZuuTdPe6jZ6HYAiEA8smfcIhQkoTcNXfCYp34a3AtrIc1BxnJAKbIBJXhrBcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoliUpdEv5aIOLZzyrcA%2FnLU0VsgqbzgkNvQkh33YVTMJ9zGSrOhBNgic5iqIwgh3Nmn6YhX92waGJxUB%2BcRSKky4cJHBU%2Ftz%2B6JDmOUVv4wPxYGIXdajHdIoKY%2FADCwtMek164iHtiHcvNzRtl79iDFfauvHjGcJ%2BOHbVsscIrzO6aSW%2F1RUHCH%2FLfjalayZh8jqbBguHv25v%2BgeKlHTAE03YAqfGaB0n2QcQxAxkyyEZN5P0bUsHwdUTXJbp%2BWf9RNUTeYUGRQh%2B8%2BFdA%2BzR8jM56KJGYYDzyCsZF2qG20ZTdkvTiJDOz5sPVzT0R%2B6%2B9eo2AjK4jRXpk%2B1AfP4R%2FKbbIVadvuZgdmNc7%2BL8bJb2axc0UJSadSON%2FjBoAY%2BhlqhYbkM1BcVgYhFoqcIm52EUioVCrhHUxDudGYyLYqlDbwAMQCp1ojweQZliF%2Fr7JkhYZR0%2FJ9MPiex1rnyUDii6zLF3Hd8wMQR0rWh2dcDHJa%2FIlwq3DEFytqXF08Wf7RFH9zrBjLu9UqtLC89u8Du93exPWLwz5DE6VDpH0ffVGyzhza5NN4NmPLHJMVcARtQYLC%2BQ2tKxwpIUKoJcRZY0y1NsIXfO4Oh2L1iocGtQZ1oKmDarpLqposNQbHuGixKf0ahyG%2BXS2MKKn2MQGOqUBs24JkGCoCld4l2tMirwUcXTHEOFvITnWRe81VNmvK9SiQhtOft%2BB1WSGZ52F%2FE%2FhUxRR5WPihlaphXEHJFFhOPyYGzCK5qMp4B2dYi4C98uAo3JfZBUPc8pnbbG0qjpkNJ%2BG4YzSKSQTJ9oZLKkiK%2B6y2fhTqeWFt0Aq4C6jEr%2FxLIbPKIfAW9gN3FB1WOCPzVvkFGdfRr8VAHh%2BY9RSRmJZ4ta8&X-Amz-Signature=d6c960ef47720fec6404dc2a26443ffb142e6b560b63186f19f93c4ea544c1c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBEJA52%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFGAzeFCPGuHlp%2Bga0fu9S9ZcS7A%2BHzZuuTdPe6jZ6HYAiEA8smfcIhQkoTcNXfCYp34a3AtrIc1BxnJAKbIBJXhrBcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoliUpdEv5aIOLZzyrcA%2FnLU0VsgqbzgkNvQkh33YVTMJ9zGSrOhBNgic5iqIwgh3Nmn6YhX92waGJxUB%2BcRSKky4cJHBU%2Ftz%2B6JDmOUVv4wPxYGIXdajHdIoKY%2FADCwtMek164iHtiHcvNzRtl79iDFfauvHjGcJ%2BOHbVsscIrzO6aSW%2F1RUHCH%2FLfjalayZh8jqbBguHv25v%2BgeKlHTAE03YAqfGaB0n2QcQxAxkyyEZN5P0bUsHwdUTXJbp%2BWf9RNUTeYUGRQh%2B8%2BFdA%2BzR8jM56KJGYYDzyCsZF2qG20ZTdkvTiJDOz5sPVzT0R%2B6%2B9eo2AjK4jRXpk%2B1AfP4R%2FKbbIVadvuZgdmNc7%2BL8bJb2axc0UJSadSON%2FjBoAY%2BhlqhYbkM1BcVgYhFoqcIm52EUioVCrhHUxDudGYyLYqlDbwAMQCp1ojweQZliF%2Fr7JkhYZR0%2FJ9MPiex1rnyUDii6zLF3Hd8wMQR0rWh2dcDHJa%2FIlwq3DEFytqXF08Wf7RFH9zrBjLu9UqtLC89u8Du93exPWLwz5DE6VDpH0ffVGyzhza5NN4NmPLHJMVcARtQYLC%2BQ2tKxwpIUKoJcRZY0y1NsIXfO4Oh2L1iocGtQZ1oKmDarpLqposNQbHuGixKf0ahyG%2BXS2MKKn2MQGOqUBs24JkGCoCld4l2tMirwUcXTHEOFvITnWRe81VNmvK9SiQhtOft%2BB1WSGZ52F%2FE%2FhUxRR5WPihlaphXEHJFFhOPyYGzCK5qMp4B2dYi4C98uAo3JfZBUPc8pnbbG0qjpkNJ%2BG4YzSKSQTJ9oZLKkiK%2B6y2fhTqeWFt0Aq4C6jEr%2FxLIbPKIfAW9gN3FB1WOCPzVvkFGdfRr8VAHh%2BY9RSRmJZ4ta8&X-Amz-Signature=e4d7a796c74d0201cb70f12af211cf93d2e2fe63a7ef5fe7233e10dd264120fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOA5HSBP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD%2B2s7EKmtLWDmrvmeMVGVF6sel9vG%2BwVcDt5Xk6PHr6AIhAKbFcl%2BNBzDqWtL9wdBApqhOORBbwOYM9SRQXT5DKhCaKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvIpmtWIqONnN0AnYq3APhwm2dXbAjXPYUzm%2F%2BG4e6Uy66U1OH%2BzAmGmt0UU0QfTCRGRu31SKheueaIO4ErmViH2Lni4z6jqNtIKSvnnvuQ8UTP%2Be1NslfR2WhxViHIUe9JUu8qVFn6A5Cvz9vKjT1hFExQS8tDflMGeQ87G9Y497XmFUZwCKl6oUNQMRBmYOQGQplhzNtHUYFwcbJB%2BKvpEJGEheg54e%2Bk4LAUu6rO%2FlWrT1l4rIc1daJtepQD%2FHVweTq6CBfR3o7vNPkC%2F5sOYnaSMj2QgP63FFHqZcF4TETEGAf4of6ziIh9ADOe%2BJuwLuWJP%2BM8LfbA4VF%2BmZHSnnXFlTxeecBzdKGPIhHbnRYFl8RaxVa8TMisQ06%2FfTlF4Yw1I40QXRDpvnMfUc0FjrXRIhBT%2BFEOTqzwBaqbvZxjJPJrooS2%2FesWjnp96y%2BVoo1wJD9TQzjTyGTFzc3JWRZ5Vxm1oIelsyUFrSBU7lwYoDr6fcoYw6YhzHQkdLArXV82H5wXDOwUQHr9HweSl37oo6B8rMKXMjPDUrA74eOJc6bFHrKmtfXkd2DlxLZd41BxXfn0Ef2MLKybL%2BR6fqNJqeGp8%2BeOsHg1avOkHaXifgMQeIKFdrDGrlCkLPepEjwjijiF56VyzD1p9jEBjqkAa762J0zkOix45qndH%2BHo%2F5TJtDqjcEewuhKtwvMKDrpmKCzzv09zOiDIn2B8voMWHc5qqQxbZESGaEIjAvHLq8aSzihOvRyetTDJkKWVP5ZMNjj5qyaHyd9il9B5P7ECH8lGumAGN3xjbhSzkDijjuo%2BSZtfPwVoSyiahm01gH4eMq9t%2FhGWYUoEfMq0grCLnzWEiwKkMgbTHnKmgU07r01ZxVs&X-Amz-Signature=28a05742b9f9819b1f70dd077201a5ab328026a210413d8b040ff841662e815e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBEJA52%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFGAzeFCPGuHlp%2Bga0fu9S9ZcS7A%2BHzZuuTdPe6jZ6HYAiEA8smfcIhQkoTcNXfCYp34a3AtrIc1BxnJAKbIBJXhrBcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoliUpdEv5aIOLZzyrcA%2FnLU0VsgqbzgkNvQkh33YVTMJ9zGSrOhBNgic5iqIwgh3Nmn6YhX92waGJxUB%2BcRSKky4cJHBU%2Ftz%2B6JDmOUVv4wPxYGIXdajHdIoKY%2FADCwtMek164iHtiHcvNzRtl79iDFfauvHjGcJ%2BOHbVsscIrzO6aSW%2F1RUHCH%2FLfjalayZh8jqbBguHv25v%2BgeKlHTAE03YAqfGaB0n2QcQxAxkyyEZN5P0bUsHwdUTXJbp%2BWf9RNUTeYUGRQh%2B8%2BFdA%2BzR8jM56KJGYYDzyCsZF2qG20ZTdkvTiJDOz5sPVzT0R%2B6%2B9eo2AjK4jRXpk%2B1AfP4R%2FKbbIVadvuZgdmNc7%2BL8bJb2axc0UJSadSON%2FjBoAY%2BhlqhYbkM1BcVgYhFoqcIm52EUioVCrhHUxDudGYyLYqlDbwAMQCp1ojweQZliF%2Fr7JkhYZR0%2FJ9MPiex1rnyUDii6zLF3Hd8wMQR0rWh2dcDHJa%2FIlwq3DEFytqXF08Wf7RFH9zrBjLu9UqtLC89u8Du93exPWLwz5DE6VDpH0ffVGyzhza5NN4NmPLHJMVcARtQYLC%2BQ2tKxwpIUKoJcRZY0y1NsIXfO4Oh2L1iocGtQZ1oKmDarpLqposNQbHuGixKf0ahyG%2BXS2MKKn2MQGOqUBs24JkGCoCld4l2tMirwUcXTHEOFvITnWRe81VNmvK9SiQhtOft%2BB1WSGZ52F%2FE%2FhUxRR5WPihlaphXEHJFFhOPyYGzCK5qMp4B2dYi4C98uAo3JfZBUPc8pnbbG0qjpkNJ%2BG4YzSKSQTJ9oZLKkiK%2B6y2fhTqeWFt0Aq4C6jEr%2FxLIbPKIfAW9gN3FB1WOCPzVvkFGdfRr8VAHh%2BY9RSRmJZ4ta8&X-Amz-Signature=5eddad4e2fb58f9d9d31e458e6f54d25abda184f801f55056649eea9ac9a195b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBEJA52%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFGAzeFCPGuHlp%2Bga0fu9S9ZcS7A%2BHzZuuTdPe6jZ6HYAiEA8smfcIhQkoTcNXfCYp34a3AtrIc1BxnJAKbIBJXhrBcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoliUpdEv5aIOLZzyrcA%2FnLU0VsgqbzgkNvQkh33YVTMJ9zGSrOhBNgic5iqIwgh3Nmn6YhX92waGJxUB%2BcRSKky4cJHBU%2Ftz%2B6JDmOUVv4wPxYGIXdajHdIoKY%2FADCwtMek164iHtiHcvNzRtl79iDFfauvHjGcJ%2BOHbVsscIrzO6aSW%2F1RUHCH%2FLfjalayZh8jqbBguHv25v%2BgeKlHTAE03YAqfGaB0n2QcQxAxkyyEZN5P0bUsHwdUTXJbp%2BWf9RNUTeYUGRQh%2B8%2BFdA%2BzR8jM56KJGYYDzyCsZF2qG20ZTdkvTiJDOz5sPVzT0R%2B6%2B9eo2AjK4jRXpk%2B1AfP4R%2FKbbIVadvuZgdmNc7%2BL8bJb2axc0UJSadSON%2FjBoAY%2BhlqhYbkM1BcVgYhFoqcIm52EUioVCrhHUxDudGYyLYqlDbwAMQCp1ojweQZliF%2Fr7JkhYZR0%2FJ9MPiex1rnyUDii6zLF3Hd8wMQR0rWh2dcDHJa%2FIlwq3DEFytqXF08Wf7RFH9zrBjLu9UqtLC89u8Du93exPWLwz5DE6VDpH0ffVGyzhza5NN4NmPLHJMVcARtQYLC%2BQ2tKxwpIUKoJcRZY0y1NsIXfO4Oh2L1iocGtQZ1oKmDarpLqposNQbHuGixKf0ahyG%2BXS2MKKn2MQGOqUBs24JkGCoCld4l2tMirwUcXTHEOFvITnWRe81VNmvK9SiQhtOft%2BB1WSGZ52F%2FE%2FhUxRR5WPihlaphXEHJFFhOPyYGzCK5qMp4B2dYi4C98uAo3JfZBUPc8pnbbG0qjpkNJ%2BG4YzSKSQTJ9oZLKkiK%2B6y2fhTqeWFt0Aq4C6jEr%2FxLIbPKIfAW9gN3FB1WOCPzVvkFGdfRr8VAHh%2BY9RSRmJZ4ta8&X-Amz-Signature=f07a8fb2fb891564e482564f00cafd2d3ec6f47610f85b8e5cbc62a617ebb953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBEJA52%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFGAzeFCPGuHlp%2Bga0fu9S9ZcS7A%2BHzZuuTdPe6jZ6HYAiEA8smfcIhQkoTcNXfCYp34a3AtrIc1BxnJAKbIBJXhrBcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoliUpdEv5aIOLZzyrcA%2FnLU0VsgqbzgkNvQkh33YVTMJ9zGSrOhBNgic5iqIwgh3Nmn6YhX92waGJxUB%2BcRSKky4cJHBU%2Ftz%2B6JDmOUVv4wPxYGIXdajHdIoKY%2FADCwtMek164iHtiHcvNzRtl79iDFfauvHjGcJ%2BOHbVsscIrzO6aSW%2F1RUHCH%2FLfjalayZh8jqbBguHv25v%2BgeKlHTAE03YAqfGaB0n2QcQxAxkyyEZN5P0bUsHwdUTXJbp%2BWf9RNUTeYUGRQh%2B8%2BFdA%2BzR8jM56KJGYYDzyCsZF2qG20ZTdkvTiJDOz5sPVzT0R%2B6%2B9eo2AjK4jRXpk%2B1AfP4R%2FKbbIVadvuZgdmNc7%2BL8bJb2axc0UJSadSON%2FjBoAY%2BhlqhYbkM1BcVgYhFoqcIm52EUioVCrhHUxDudGYyLYqlDbwAMQCp1ojweQZliF%2Fr7JkhYZR0%2FJ9MPiex1rnyUDii6zLF3Hd8wMQR0rWh2dcDHJa%2FIlwq3DEFytqXF08Wf7RFH9zrBjLu9UqtLC89u8Du93exPWLwz5DE6VDpH0ffVGyzhza5NN4NmPLHJMVcARtQYLC%2BQ2tKxwpIUKoJcRZY0y1NsIXfO4Oh2L1iocGtQZ1oKmDarpLqposNQbHuGixKf0ahyG%2BXS2MKKn2MQGOqUBs24JkGCoCld4l2tMirwUcXTHEOFvITnWRe81VNmvK9SiQhtOft%2BB1WSGZ52F%2FE%2FhUxRR5WPihlaphXEHJFFhOPyYGzCK5qMp4B2dYi4C98uAo3JfZBUPc8pnbbG0qjpkNJ%2BG4YzSKSQTJ9oZLKkiK%2B6y2fhTqeWFt0Aq4C6jEr%2FxLIbPKIfAW9gN3FB1WOCPzVvkFGdfRr8VAHh%2BY9RSRmJZ4ta8&X-Amz-Signature=5318a7f509b38219e401326c3cd27bb908dd7ab0a931092cb875ecdf7f31d4f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBEJA52%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFGAzeFCPGuHlp%2Bga0fu9S9ZcS7A%2BHzZuuTdPe6jZ6HYAiEA8smfcIhQkoTcNXfCYp34a3AtrIc1BxnJAKbIBJXhrBcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoliUpdEv5aIOLZzyrcA%2FnLU0VsgqbzgkNvQkh33YVTMJ9zGSrOhBNgic5iqIwgh3Nmn6YhX92waGJxUB%2BcRSKky4cJHBU%2Ftz%2B6JDmOUVv4wPxYGIXdajHdIoKY%2FADCwtMek164iHtiHcvNzRtl79iDFfauvHjGcJ%2BOHbVsscIrzO6aSW%2F1RUHCH%2FLfjalayZh8jqbBguHv25v%2BgeKlHTAE03YAqfGaB0n2QcQxAxkyyEZN5P0bUsHwdUTXJbp%2BWf9RNUTeYUGRQh%2B8%2BFdA%2BzR8jM56KJGYYDzyCsZF2qG20ZTdkvTiJDOz5sPVzT0R%2B6%2B9eo2AjK4jRXpk%2B1AfP4R%2FKbbIVadvuZgdmNc7%2BL8bJb2axc0UJSadSON%2FjBoAY%2BhlqhYbkM1BcVgYhFoqcIm52EUioVCrhHUxDudGYyLYqlDbwAMQCp1ojweQZliF%2Fr7JkhYZR0%2FJ9MPiex1rnyUDii6zLF3Hd8wMQR0rWh2dcDHJa%2FIlwq3DEFytqXF08Wf7RFH9zrBjLu9UqtLC89u8Du93exPWLwz5DE6VDpH0ffVGyzhza5NN4NmPLHJMVcARtQYLC%2BQ2tKxwpIUKoJcRZY0y1NsIXfO4Oh2L1iocGtQZ1oKmDarpLqposNQbHuGixKf0ahyG%2BXS2MKKn2MQGOqUBs24JkGCoCld4l2tMirwUcXTHEOFvITnWRe81VNmvK9SiQhtOft%2BB1WSGZ52F%2FE%2FhUxRR5WPihlaphXEHJFFhOPyYGzCK5qMp4B2dYi4C98uAo3JfZBUPc8pnbbG0qjpkNJ%2BG4YzSKSQTJ9oZLKkiK%2B6y2fhTqeWFt0Aq4C6jEr%2FxLIbPKIfAW9gN3FB1WOCPzVvkFGdfRr8VAHh%2BY9RSRmJZ4ta8&X-Amz-Signature=9b4e55fef5a0e8e81c0b666b7e54161d13f561372ec6131f265099108361e13b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBEJA52%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFGAzeFCPGuHlp%2Bga0fu9S9ZcS7A%2BHzZuuTdPe6jZ6HYAiEA8smfcIhQkoTcNXfCYp34a3AtrIc1BxnJAKbIBJXhrBcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoliUpdEv5aIOLZzyrcA%2FnLU0VsgqbzgkNvQkh33YVTMJ9zGSrOhBNgic5iqIwgh3Nmn6YhX92waGJxUB%2BcRSKky4cJHBU%2Ftz%2B6JDmOUVv4wPxYGIXdajHdIoKY%2FADCwtMek164iHtiHcvNzRtl79iDFfauvHjGcJ%2BOHbVsscIrzO6aSW%2F1RUHCH%2FLfjalayZh8jqbBguHv25v%2BgeKlHTAE03YAqfGaB0n2QcQxAxkyyEZN5P0bUsHwdUTXJbp%2BWf9RNUTeYUGRQh%2B8%2BFdA%2BzR8jM56KJGYYDzyCsZF2qG20ZTdkvTiJDOz5sPVzT0R%2B6%2B9eo2AjK4jRXpk%2B1AfP4R%2FKbbIVadvuZgdmNc7%2BL8bJb2axc0UJSadSON%2FjBoAY%2BhlqhYbkM1BcVgYhFoqcIm52EUioVCrhHUxDudGYyLYqlDbwAMQCp1ojweQZliF%2Fr7JkhYZR0%2FJ9MPiex1rnyUDii6zLF3Hd8wMQR0rWh2dcDHJa%2FIlwq3DEFytqXF08Wf7RFH9zrBjLu9UqtLC89u8Du93exPWLwz5DE6VDpH0ffVGyzhza5NN4NmPLHJMVcARtQYLC%2BQ2tKxwpIUKoJcRZY0y1NsIXfO4Oh2L1iocGtQZ1oKmDarpLqposNQbHuGixKf0ahyG%2BXS2MKKn2MQGOqUBs24JkGCoCld4l2tMirwUcXTHEOFvITnWRe81VNmvK9SiQhtOft%2BB1WSGZ52F%2FE%2FhUxRR5WPihlaphXEHJFFhOPyYGzCK5qMp4B2dYi4C98uAo3JfZBUPc8pnbbG0qjpkNJ%2BG4YzSKSQTJ9oZLKkiK%2B6y2fhTqeWFt0Aq4C6jEr%2FxLIbPKIfAW9gN3FB1WOCPzVvkFGdfRr8VAHh%2BY9RSRmJZ4ta8&X-Amz-Signature=ec0152b09618284b67eba3a4b0ecceded48a956502e869281c302614096c0670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBEJA52%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFGAzeFCPGuHlp%2Bga0fu9S9ZcS7A%2BHzZuuTdPe6jZ6HYAiEA8smfcIhQkoTcNXfCYp34a3AtrIc1BxnJAKbIBJXhrBcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoliUpdEv5aIOLZzyrcA%2FnLU0VsgqbzgkNvQkh33YVTMJ9zGSrOhBNgic5iqIwgh3Nmn6YhX92waGJxUB%2BcRSKky4cJHBU%2Ftz%2B6JDmOUVv4wPxYGIXdajHdIoKY%2FADCwtMek164iHtiHcvNzRtl79iDFfauvHjGcJ%2BOHbVsscIrzO6aSW%2F1RUHCH%2FLfjalayZh8jqbBguHv25v%2BgeKlHTAE03YAqfGaB0n2QcQxAxkyyEZN5P0bUsHwdUTXJbp%2BWf9RNUTeYUGRQh%2B8%2BFdA%2BzR8jM56KJGYYDzyCsZF2qG20ZTdkvTiJDOz5sPVzT0R%2B6%2B9eo2AjK4jRXpk%2B1AfP4R%2FKbbIVadvuZgdmNc7%2BL8bJb2axc0UJSadSON%2FjBoAY%2BhlqhYbkM1BcVgYhFoqcIm52EUioVCrhHUxDudGYyLYqlDbwAMQCp1ojweQZliF%2Fr7JkhYZR0%2FJ9MPiex1rnyUDii6zLF3Hd8wMQR0rWh2dcDHJa%2FIlwq3DEFytqXF08Wf7RFH9zrBjLu9UqtLC89u8Du93exPWLwz5DE6VDpH0ffVGyzhza5NN4NmPLHJMVcARtQYLC%2BQ2tKxwpIUKoJcRZY0y1NsIXfO4Oh2L1iocGtQZ1oKmDarpLqposNQbHuGixKf0ahyG%2BXS2MKKn2MQGOqUBs24JkGCoCld4l2tMirwUcXTHEOFvITnWRe81VNmvK9SiQhtOft%2BB1WSGZ52F%2FE%2FhUxRR5WPihlaphXEHJFFhOPyYGzCK5qMp4B2dYi4C98uAo3JfZBUPc8pnbbG0qjpkNJ%2BG4YzSKSQTJ9oZLKkiK%2B6y2fhTqeWFt0Aq4C6jEr%2FxLIbPKIfAW9gN3FB1WOCPzVvkFGdfRr8VAHh%2BY9RSRmJZ4ta8&X-Amz-Signature=382052922296556726cb362915126ae802f594360f55a86c39cf802040401425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
