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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BWN5JJU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ5U4gYQeRUJtasdVSJ8EfQRF6FfX2hc602igAw%2Bn60AIhAOqfpVs0%2BTthUywZs7UJJPWUpXp02ZBa%2Fb4c8k9PeuICKv8DCCMQABoMNjM3NDIzMTgzODA1Igxd2hszvCW70ktkETcq3APaa0xtiS2hIcPgxaeyIEUzDuOuZFSTDPOqhvIVJVH9Ghr0YqGvbYFtn6TYfze%2FbwgVIBcphw30UOEeo0CGRZSSH5XTKgXjELdzGuByTA8ZeW94IdHMzJC61KqaVdTsAJFebBxIaYUaMCwo4p1GoiZTuWa5UzUbPjWWuFCLizfBb1r25fMh0IRiIKtKXADbg3OdJp%2BhPdZ9tXyjIhwWftYj%2B7Zia2W9i9VqefqLLuz7%2BDZsrJt44C8XCCAqS2hvqB0Z416hxxjcexesuGzlTnlE2W2fP8Wwg11EZIjm9R6WcBjyy3Sk%2Bfg2p8HHJdkDVzoMvYl%2FFb%2Ffo1zBww%2Bzrj8uOrnUFhyM5WbYtxqL1TOaEl2kz23SXtVC9bIlgxsd62K6I0NCHiht%2Bug4afpx0CEXulhNO%2BAKxjbxYKUhlnHqjsyFrhEOof9%2FIJeC38PsNs1Ga5kD3mvgApRouscfiqEtsT%2FQt1AYQmr5lbQPCTI4prkH%2BVVUYZKZ9L7e96tNiB9rnngQmQ1OJASP3W1v6Mp%2Bu3Se%2Fgaa2L064Wf7AyyxsOWLx7pQP%2BWTU0eJj%2FwrRHEqYbQMIXexfF%2FX8beojgCWMNr%2F15hyOytOoSvAq2vRqxBDeGBQ60XCUOfAmjCH2u%2FEBjqkATzjK60bSpnIVvZAjK%2F5IUYMtVSAAZnF8SBdi6yk0hksdQsgw675vk%2FjfFmmZG%2FCsKd9rJP%2BCScACObs4Dx0DLetwE5z9IAfRpAter20tRu1p5E85An6stTt3YP0k4gG%2BUVg5Grzya3CJwBAiPOXfGGRRgXhCQXwJL26pOtF%2BZvkNNm7iq2lGO2n6%2BaaT204fBaxi3IqBmcUb4BZvi6SD6TptTHa&X-Amz-Signature=da8a690830a3ef21acb09dde24c7fc4226cc2fede86eaf42162971850402e30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BWN5JJU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ5U4gYQeRUJtasdVSJ8EfQRF6FfX2hc602igAw%2Bn60AIhAOqfpVs0%2BTthUywZs7UJJPWUpXp02ZBa%2Fb4c8k9PeuICKv8DCCMQABoMNjM3NDIzMTgzODA1Igxd2hszvCW70ktkETcq3APaa0xtiS2hIcPgxaeyIEUzDuOuZFSTDPOqhvIVJVH9Ghr0YqGvbYFtn6TYfze%2FbwgVIBcphw30UOEeo0CGRZSSH5XTKgXjELdzGuByTA8ZeW94IdHMzJC61KqaVdTsAJFebBxIaYUaMCwo4p1GoiZTuWa5UzUbPjWWuFCLizfBb1r25fMh0IRiIKtKXADbg3OdJp%2BhPdZ9tXyjIhwWftYj%2B7Zia2W9i9VqefqLLuz7%2BDZsrJt44C8XCCAqS2hvqB0Z416hxxjcexesuGzlTnlE2W2fP8Wwg11EZIjm9R6WcBjyy3Sk%2Bfg2p8HHJdkDVzoMvYl%2FFb%2Ffo1zBww%2Bzrj8uOrnUFhyM5WbYtxqL1TOaEl2kz23SXtVC9bIlgxsd62K6I0NCHiht%2Bug4afpx0CEXulhNO%2BAKxjbxYKUhlnHqjsyFrhEOof9%2FIJeC38PsNs1Ga5kD3mvgApRouscfiqEtsT%2FQt1AYQmr5lbQPCTI4prkH%2BVVUYZKZ9L7e96tNiB9rnngQmQ1OJASP3W1v6Mp%2Bu3Se%2Fgaa2L064Wf7AyyxsOWLx7pQP%2BWTU0eJj%2FwrRHEqYbQMIXexfF%2FX8beojgCWMNr%2F15hyOytOoSvAq2vRqxBDeGBQ60XCUOfAmjCH2u%2FEBjqkATzjK60bSpnIVvZAjK%2F5IUYMtVSAAZnF8SBdi6yk0hksdQsgw675vk%2FjfFmmZG%2FCsKd9rJP%2BCScACObs4Dx0DLetwE5z9IAfRpAter20tRu1p5E85An6stTt3YP0k4gG%2BUVg5Grzya3CJwBAiPOXfGGRRgXhCQXwJL26pOtF%2BZvkNNm7iq2lGO2n6%2BaaT204fBaxi3IqBmcUb4BZvi6SD6TptTHa&X-Amz-Signature=867f1f846f8243959985b9ac2340bcc93071b30626b598efa04ef8e9792339fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BWN5JJU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ5U4gYQeRUJtasdVSJ8EfQRF6FfX2hc602igAw%2Bn60AIhAOqfpVs0%2BTthUywZs7UJJPWUpXp02ZBa%2Fb4c8k9PeuICKv8DCCMQABoMNjM3NDIzMTgzODA1Igxd2hszvCW70ktkETcq3APaa0xtiS2hIcPgxaeyIEUzDuOuZFSTDPOqhvIVJVH9Ghr0YqGvbYFtn6TYfze%2FbwgVIBcphw30UOEeo0CGRZSSH5XTKgXjELdzGuByTA8ZeW94IdHMzJC61KqaVdTsAJFebBxIaYUaMCwo4p1GoiZTuWa5UzUbPjWWuFCLizfBb1r25fMh0IRiIKtKXADbg3OdJp%2BhPdZ9tXyjIhwWftYj%2B7Zia2W9i9VqefqLLuz7%2BDZsrJt44C8XCCAqS2hvqB0Z416hxxjcexesuGzlTnlE2W2fP8Wwg11EZIjm9R6WcBjyy3Sk%2Bfg2p8HHJdkDVzoMvYl%2FFb%2Ffo1zBww%2Bzrj8uOrnUFhyM5WbYtxqL1TOaEl2kz23SXtVC9bIlgxsd62K6I0NCHiht%2Bug4afpx0CEXulhNO%2BAKxjbxYKUhlnHqjsyFrhEOof9%2FIJeC38PsNs1Ga5kD3mvgApRouscfiqEtsT%2FQt1AYQmr5lbQPCTI4prkH%2BVVUYZKZ9L7e96tNiB9rnngQmQ1OJASP3W1v6Mp%2Bu3Se%2Fgaa2L064Wf7AyyxsOWLx7pQP%2BWTU0eJj%2FwrRHEqYbQMIXexfF%2FX8beojgCWMNr%2F15hyOytOoSvAq2vRqxBDeGBQ60XCUOfAmjCH2u%2FEBjqkATzjK60bSpnIVvZAjK%2F5IUYMtVSAAZnF8SBdi6yk0hksdQsgw675vk%2FjfFmmZG%2FCsKd9rJP%2BCScACObs4Dx0DLetwE5z9IAfRpAter20tRu1p5E85An6stTt3YP0k4gG%2BUVg5Grzya3CJwBAiPOXfGGRRgXhCQXwJL26pOtF%2BZvkNNm7iq2lGO2n6%2BaaT204fBaxi3IqBmcUb4BZvi6SD6TptTHa&X-Amz-Signature=d5baf0f69332af99a50d610dd9f5525752a0ca75c984cac6c49806b5c7f90ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BWN5JJU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ5U4gYQeRUJtasdVSJ8EfQRF6FfX2hc602igAw%2Bn60AIhAOqfpVs0%2BTthUywZs7UJJPWUpXp02ZBa%2Fb4c8k9PeuICKv8DCCMQABoMNjM3NDIzMTgzODA1Igxd2hszvCW70ktkETcq3APaa0xtiS2hIcPgxaeyIEUzDuOuZFSTDPOqhvIVJVH9Ghr0YqGvbYFtn6TYfze%2FbwgVIBcphw30UOEeo0CGRZSSH5XTKgXjELdzGuByTA8ZeW94IdHMzJC61KqaVdTsAJFebBxIaYUaMCwo4p1GoiZTuWa5UzUbPjWWuFCLizfBb1r25fMh0IRiIKtKXADbg3OdJp%2BhPdZ9tXyjIhwWftYj%2B7Zia2W9i9VqefqLLuz7%2BDZsrJt44C8XCCAqS2hvqB0Z416hxxjcexesuGzlTnlE2W2fP8Wwg11EZIjm9R6WcBjyy3Sk%2Bfg2p8HHJdkDVzoMvYl%2FFb%2Ffo1zBww%2Bzrj8uOrnUFhyM5WbYtxqL1TOaEl2kz23SXtVC9bIlgxsd62K6I0NCHiht%2Bug4afpx0CEXulhNO%2BAKxjbxYKUhlnHqjsyFrhEOof9%2FIJeC38PsNs1Ga5kD3mvgApRouscfiqEtsT%2FQt1AYQmr5lbQPCTI4prkH%2BVVUYZKZ9L7e96tNiB9rnngQmQ1OJASP3W1v6Mp%2Bu3Se%2Fgaa2L064Wf7AyyxsOWLx7pQP%2BWTU0eJj%2FwrRHEqYbQMIXexfF%2FX8beojgCWMNr%2F15hyOytOoSvAq2vRqxBDeGBQ60XCUOfAmjCH2u%2FEBjqkATzjK60bSpnIVvZAjK%2F5IUYMtVSAAZnF8SBdi6yk0hksdQsgw675vk%2FjfFmmZG%2FCsKd9rJP%2BCScACObs4Dx0DLetwE5z9IAfRpAter20tRu1p5E85An6stTt3YP0k4gG%2BUVg5Grzya3CJwBAiPOXfGGRRgXhCQXwJL26pOtF%2BZvkNNm7iq2lGO2n6%2BaaT204fBaxi3IqBmcUb4BZvi6SD6TptTHa&X-Amz-Signature=7ecf95f1a4118c0c902d2dcc4be4ce0bf66ed1a6bb480dcf6e15f8b33344f1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUHGZRDT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9N9Lp8t%2FI4CT%2BsrsPEn35txvWV297j3j73mg5OhXtwAiBxRQhWklFK8cF9OKgpZgcKzcQ1lDvjqpWKmCe8pMOxkSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMjVUw%2BAraTDxnG%2Be5KtwDvdSmOye2F%2F4JD%2BxMSe7iBcAVbNW22GCz9UsR16HzqIKy663uY%2FSc6fBzBPI8Ex0I9gLw7Mlmxx%2FIWliu34ebq%2FaAfMk%2BSab8rKSlUgXHWZGZJUt2Dci0mX52tjm9%2F0dW1VfUIyQw6Nar0aUknCWQt4BxR%2BlCESXAgbFHEug1QqD1i3fVVT5AdLJVtBtUjzOQBZ6BhBqDyws0vo%2B92Drm8upfYfOQnXj5YENigS%2FVraELWPUfV5JAHUDSb6Epn28IoRIWKTXOTqED579P1eTb65v3e4Lm6IZYPMi3gh%2BCD%2Bw0ElS2jTBMqTyHhUrMl5sz91ipSgq2bu5U0fTMuCid7zlY%2B0yTQDHuSrpM07uwuB4OjLBCNxfh%2FJn5WPki5EeKg4O3Kq%2Flc1%2B69pMYg9nT1XRF%2B8OzNYXy9lmIL3p27TLnDWrsBUHJbtrDl1TgNmCaib6F9K33KM2AN3yckVyM%2FHjkKPx2yqkF8C8%2BvlPgiqIGsUd4rdrLNmuKq9zuabN1FOOS%2FXoVQQLmkVDpeMyEhrZ91ZiOhwAjRAit1U7qZkjmV3fPk1v5yBImtVQiwOiizOufQw%2BKvBmP0g4ZwzvmY5qCjKTeIitalu06wS0YQ9ey3aFyxmRFxP%2BBEyIw%2F9nvxAY6pgGnW4hWrw6%2FbH9BbHQneUdl0CSdj6dvCmReDUBuYQIgaWac1vg%2BjRaF4MUyhXFYPZIXG41ZOoMtJGfhySzSQN8UziIaQF28Se%2ByEjYNZurocqNwneItfZLzTkBmc6huO9ut%2BNUCrt21y3PgfKyxi0LX8tTH59aZjNTPwhnNbc%2FRxSqdbf16KKTzmnOczdbp76hwcbPiybNVwnOB2mAPUWVTvH6sbx7p&X-Amz-Signature=16c8ae76e2e0020d6a232fcbd82f157461e1569cf7e0535492a3d22bcd9c177f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BWN5JJU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ5U4gYQeRUJtasdVSJ8EfQRF6FfX2hc602igAw%2Bn60AIhAOqfpVs0%2BTthUywZs7UJJPWUpXp02ZBa%2Fb4c8k9PeuICKv8DCCMQABoMNjM3NDIzMTgzODA1Igxd2hszvCW70ktkETcq3APaa0xtiS2hIcPgxaeyIEUzDuOuZFSTDPOqhvIVJVH9Ghr0YqGvbYFtn6TYfze%2FbwgVIBcphw30UOEeo0CGRZSSH5XTKgXjELdzGuByTA8ZeW94IdHMzJC61KqaVdTsAJFebBxIaYUaMCwo4p1GoiZTuWa5UzUbPjWWuFCLizfBb1r25fMh0IRiIKtKXADbg3OdJp%2BhPdZ9tXyjIhwWftYj%2B7Zia2W9i9VqefqLLuz7%2BDZsrJt44C8XCCAqS2hvqB0Z416hxxjcexesuGzlTnlE2W2fP8Wwg11EZIjm9R6WcBjyy3Sk%2Bfg2p8HHJdkDVzoMvYl%2FFb%2Ffo1zBww%2Bzrj8uOrnUFhyM5WbYtxqL1TOaEl2kz23SXtVC9bIlgxsd62K6I0NCHiht%2Bug4afpx0CEXulhNO%2BAKxjbxYKUhlnHqjsyFrhEOof9%2FIJeC38PsNs1Ga5kD3mvgApRouscfiqEtsT%2FQt1AYQmr5lbQPCTI4prkH%2BVVUYZKZ9L7e96tNiB9rnngQmQ1OJASP3W1v6Mp%2Bu3Se%2Fgaa2L064Wf7AyyxsOWLx7pQP%2BWTU0eJj%2FwrRHEqYbQMIXexfF%2FX8beojgCWMNr%2F15hyOytOoSvAq2vRqxBDeGBQ60XCUOfAmjCH2u%2FEBjqkATzjK60bSpnIVvZAjK%2F5IUYMtVSAAZnF8SBdi6yk0hksdQsgw675vk%2FjfFmmZG%2FCsKd9rJP%2BCScACObs4Dx0DLetwE5z9IAfRpAter20tRu1p5E85An6stTt3YP0k4gG%2BUVg5Grzya3CJwBAiPOXfGGRRgXhCQXwJL26pOtF%2BZvkNNm7iq2lGO2n6%2BaaT204fBaxi3IqBmcUb4BZvi6SD6TptTHa&X-Amz-Signature=15ca6381084bf4daefacc488d4b227bf7f99eaac2ade7bbdab9153ae444d7484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BWN5JJU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ5U4gYQeRUJtasdVSJ8EfQRF6FfX2hc602igAw%2Bn60AIhAOqfpVs0%2BTthUywZs7UJJPWUpXp02ZBa%2Fb4c8k9PeuICKv8DCCMQABoMNjM3NDIzMTgzODA1Igxd2hszvCW70ktkETcq3APaa0xtiS2hIcPgxaeyIEUzDuOuZFSTDPOqhvIVJVH9Ghr0YqGvbYFtn6TYfze%2FbwgVIBcphw30UOEeo0CGRZSSH5XTKgXjELdzGuByTA8ZeW94IdHMzJC61KqaVdTsAJFebBxIaYUaMCwo4p1GoiZTuWa5UzUbPjWWuFCLizfBb1r25fMh0IRiIKtKXADbg3OdJp%2BhPdZ9tXyjIhwWftYj%2B7Zia2W9i9VqefqLLuz7%2BDZsrJt44C8XCCAqS2hvqB0Z416hxxjcexesuGzlTnlE2W2fP8Wwg11EZIjm9R6WcBjyy3Sk%2Bfg2p8HHJdkDVzoMvYl%2FFb%2Ffo1zBww%2Bzrj8uOrnUFhyM5WbYtxqL1TOaEl2kz23SXtVC9bIlgxsd62K6I0NCHiht%2Bug4afpx0CEXulhNO%2BAKxjbxYKUhlnHqjsyFrhEOof9%2FIJeC38PsNs1Ga5kD3mvgApRouscfiqEtsT%2FQt1AYQmr5lbQPCTI4prkH%2BVVUYZKZ9L7e96tNiB9rnngQmQ1OJASP3W1v6Mp%2Bu3Se%2Fgaa2L064Wf7AyyxsOWLx7pQP%2BWTU0eJj%2FwrRHEqYbQMIXexfF%2FX8beojgCWMNr%2F15hyOytOoSvAq2vRqxBDeGBQ60XCUOfAmjCH2u%2FEBjqkATzjK60bSpnIVvZAjK%2F5IUYMtVSAAZnF8SBdi6yk0hksdQsgw675vk%2FjfFmmZG%2FCsKd9rJP%2BCScACObs4Dx0DLetwE5z9IAfRpAter20tRu1p5E85An6stTt3YP0k4gG%2BUVg5Grzya3CJwBAiPOXfGGRRgXhCQXwJL26pOtF%2BZvkNNm7iq2lGO2n6%2BaaT204fBaxi3IqBmcUb4BZvi6SD6TptTHa&X-Amz-Signature=f272caca88d267cfeb5d8ea7df10bf9f4de4f364a7475310989c9e52142de044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BWN5JJU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ5U4gYQeRUJtasdVSJ8EfQRF6FfX2hc602igAw%2Bn60AIhAOqfpVs0%2BTthUywZs7UJJPWUpXp02ZBa%2Fb4c8k9PeuICKv8DCCMQABoMNjM3NDIzMTgzODA1Igxd2hszvCW70ktkETcq3APaa0xtiS2hIcPgxaeyIEUzDuOuZFSTDPOqhvIVJVH9Ghr0YqGvbYFtn6TYfze%2FbwgVIBcphw30UOEeo0CGRZSSH5XTKgXjELdzGuByTA8ZeW94IdHMzJC61KqaVdTsAJFebBxIaYUaMCwo4p1GoiZTuWa5UzUbPjWWuFCLizfBb1r25fMh0IRiIKtKXADbg3OdJp%2BhPdZ9tXyjIhwWftYj%2B7Zia2W9i9VqefqLLuz7%2BDZsrJt44C8XCCAqS2hvqB0Z416hxxjcexesuGzlTnlE2W2fP8Wwg11EZIjm9R6WcBjyy3Sk%2Bfg2p8HHJdkDVzoMvYl%2FFb%2Ffo1zBww%2Bzrj8uOrnUFhyM5WbYtxqL1TOaEl2kz23SXtVC9bIlgxsd62K6I0NCHiht%2Bug4afpx0CEXulhNO%2BAKxjbxYKUhlnHqjsyFrhEOof9%2FIJeC38PsNs1Ga5kD3mvgApRouscfiqEtsT%2FQt1AYQmr5lbQPCTI4prkH%2BVVUYZKZ9L7e96tNiB9rnngQmQ1OJASP3W1v6Mp%2Bu3Se%2Fgaa2L064Wf7AyyxsOWLx7pQP%2BWTU0eJj%2FwrRHEqYbQMIXexfF%2FX8beojgCWMNr%2F15hyOytOoSvAq2vRqxBDeGBQ60XCUOfAmjCH2u%2FEBjqkATzjK60bSpnIVvZAjK%2F5IUYMtVSAAZnF8SBdi6yk0hksdQsgw675vk%2FjfFmmZG%2FCsKd9rJP%2BCScACObs4Dx0DLetwE5z9IAfRpAter20tRu1p5E85An6stTt3YP0k4gG%2BUVg5Grzya3CJwBAiPOXfGGRRgXhCQXwJL26pOtF%2BZvkNNm7iq2lGO2n6%2BaaT204fBaxi3IqBmcUb4BZvi6SD6TptTHa&X-Amz-Signature=5f3b550de26316a8e754ae30274a4870d6cf6ba1be4a1d3c0d425d45bb07d470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BWN5JJU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ5U4gYQeRUJtasdVSJ8EfQRF6FfX2hc602igAw%2Bn60AIhAOqfpVs0%2BTthUywZs7UJJPWUpXp02ZBa%2Fb4c8k9PeuICKv8DCCMQABoMNjM3NDIzMTgzODA1Igxd2hszvCW70ktkETcq3APaa0xtiS2hIcPgxaeyIEUzDuOuZFSTDPOqhvIVJVH9Ghr0YqGvbYFtn6TYfze%2FbwgVIBcphw30UOEeo0CGRZSSH5XTKgXjELdzGuByTA8ZeW94IdHMzJC61KqaVdTsAJFebBxIaYUaMCwo4p1GoiZTuWa5UzUbPjWWuFCLizfBb1r25fMh0IRiIKtKXADbg3OdJp%2BhPdZ9tXyjIhwWftYj%2B7Zia2W9i9VqefqLLuz7%2BDZsrJt44C8XCCAqS2hvqB0Z416hxxjcexesuGzlTnlE2W2fP8Wwg11EZIjm9R6WcBjyy3Sk%2Bfg2p8HHJdkDVzoMvYl%2FFb%2Ffo1zBww%2Bzrj8uOrnUFhyM5WbYtxqL1TOaEl2kz23SXtVC9bIlgxsd62K6I0NCHiht%2Bug4afpx0CEXulhNO%2BAKxjbxYKUhlnHqjsyFrhEOof9%2FIJeC38PsNs1Ga5kD3mvgApRouscfiqEtsT%2FQt1AYQmr5lbQPCTI4prkH%2BVVUYZKZ9L7e96tNiB9rnngQmQ1OJASP3W1v6Mp%2Bu3Se%2Fgaa2L064Wf7AyyxsOWLx7pQP%2BWTU0eJj%2FwrRHEqYbQMIXexfF%2FX8beojgCWMNr%2F15hyOytOoSvAq2vRqxBDeGBQ60XCUOfAmjCH2u%2FEBjqkATzjK60bSpnIVvZAjK%2F5IUYMtVSAAZnF8SBdi6yk0hksdQsgw675vk%2FjfFmmZG%2FCsKd9rJP%2BCScACObs4Dx0DLetwE5z9IAfRpAter20tRu1p5E85An6stTt3YP0k4gG%2BUVg5Grzya3CJwBAiPOXfGGRRgXhCQXwJL26pOtF%2BZvkNNm7iq2lGO2n6%2BaaT204fBaxi3IqBmcUb4BZvi6SD6TptTHa&X-Amz-Signature=bfba1df23c4041c653580937cb2d2290ebcf2a65aa3046ceea753d00d68553ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BWN5JJU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ5U4gYQeRUJtasdVSJ8EfQRF6FfX2hc602igAw%2Bn60AIhAOqfpVs0%2BTthUywZs7UJJPWUpXp02ZBa%2Fb4c8k9PeuICKv8DCCMQABoMNjM3NDIzMTgzODA1Igxd2hszvCW70ktkETcq3APaa0xtiS2hIcPgxaeyIEUzDuOuZFSTDPOqhvIVJVH9Ghr0YqGvbYFtn6TYfze%2FbwgVIBcphw30UOEeo0CGRZSSH5XTKgXjELdzGuByTA8ZeW94IdHMzJC61KqaVdTsAJFebBxIaYUaMCwo4p1GoiZTuWa5UzUbPjWWuFCLizfBb1r25fMh0IRiIKtKXADbg3OdJp%2BhPdZ9tXyjIhwWftYj%2B7Zia2W9i9VqefqLLuz7%2BDZsrJt44C8XCCAqS2hvqB0Z416hxxjcexesuGzlTnlE2W2fP8Wwg11EZIjm9R6WcBjyy3Sk%2Bfg2p8HHJdkDVzoMvYl%2FFb%2Ffo1zBww%2Bzrj8uOrnUFhyM5WbYtxqL1TOaEl2kz23SXtVC9bIlgxsd62K6I0NCHiht%2Bug4afpx0CEXulhNO%2BAKxjbxYKUhlnHqjsyFrhEOof9%2FIJeC38PsNs1Ga5kD3mvgApRouscfiqEtsT%2FQt1AYQmr5lbQPCTI4prkH%2BVVUYZKZ9L7e96tNiB9rnngQmQ1OJASP3W1v6Mp%2Bu3Se%2Fgaa2L064Wf7AyyxsOWLx7pQP%2BWTU0eJj%2FwrRHEqYbQMIXexfF%2FX8beojgCWMNr%2F15hyOytOoSvAq2vRqxBDeGBQ60XCUOfAmjCH2u%2FEBjqkATzjK60bSpnIVvZAjK%2F5IUYMtVSAAZnF8SBdi6yk0hksdQsgw675vk%2FjfFmmZG%2FCsKd9rJP%2BCScACObs4Dx0DLetwE5z9IAfRpAter20tRu1p5E85An6stTt3YP0k4gG%2BUVg5Grzya3CJwBAiPOXfGGRRgXhCQXwJL26pOtF%2BZvkNNm7iq2lGO2n6%2BaaT204fBaxi3IqBmcUb4BZvi6SD6TptTHa&X-Amz-Signature=413ef01f229f06725f5cc927664c260dacac0ecd2a5275ddc6609ad99eb417c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BWN5JJU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ5U4gYQeRUJtasdVSJ8EfQRF6FfX2hc602igAw%2Bn60AIhAOqfpVs0%2BTthUywZs7UJJPWUpXp02ZBa%2Fb4c8k9PeuICKv8DCCMQABoMNjM3NDIzMTgzODA1Igxd2hszvCW70ktkETcq3APaa0xtiS2hIcPgxaeyIEUzDuOuZFSTDPOqhvIVJVH9Ghr0YqGvbYFtn6TYfze%2FbwgVIBcphw30UOEeo0CGRZSSH5XTKgXjELdzGuByTA8ZeW94IdHMzJC61KqaVdTsAJFebBxIaYUaMCwo4p1GoiZTuWa5UzUbPjWWuFCLizfBb1r25fMh0IRiIKtKXADbg3OdJp%2BhPdZ9tXyjIhwWftYj%2B7Zia2W9i9VqefqLLuz7%2BDZsrJt44C8XCCAqS2hvqB0Z416hxxjcexesuGzlTnlE2W2fP8Wwg11EZIjm9R6WcBjyy3Sk%2Bfg2p8HHJdkDVzoMvYl%2FFb%2Ffo1zBww%2Bzrj8uOrnUFhyM5WbYtxqL1TOaEl2kz23SXtVC9bIlgxsd62K6I0NCHiht%2Bug4afpx0CEXulhNO%2BAKxjbxYKUhlnHqjsyFrhEOof9%2FIJeC38PsNs1Ga5kD3mvgApRouscfiqEtsT%2FQt1AYQmr5lbQPCTI4prkH%2BVVUYZKZ9L7e96tNiB9rnngQmQ1OJASP3W1v6Mp%2Bu3Se%2Fgaa2L064Wf7AyyxsOWLx7pQP%2BWTU0eJj%2FwrRHEqYbQMIXexfF%2FX8beojgCWMNr%2F15hyOytOoSvAq2vRqxBDeGBQ60XCUOfAmjCH2u%2FEBjqkATzjK60bSpnIVvZAjK%2F5IUYMtVSAAZnF8SBdi6yk0hksdQsgw675vk%2FjfFmmZG%2FCsKd9rJP%2BCScACObs4Dx0DLetwE5z9IAfRpAter20tRu1p5E85An6stTt3YP0k4gG%2BUVg5Grzya3CJwBAiPOXfGGRRgXhCQXwJL26pOtF%2BZvkNNm7iq2lGO2n6%2BaaT204fBaxi3IqBmcUb4BZvi6SD6TptTHa&X-Amz-Signature=d98e01eed8158e9e1a396239a41ea7635ad50ba7bab28d1ed9ee6e08daf4f4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
