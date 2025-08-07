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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLWN55WY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCA%2B4oH49RNj%2BBxS9WTp2ommyd%2FwHJzFK40yLJrhGyOegIgMl%2BQInaEVzG%2BZMKEk9CUS%2BI%2FqhNSnWpibZLNjbpCn3oqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcC0UuCMy2f8UVjPyrcA6zhaNuFtu%2Fe3C2dhASHTFTH%2B80I0Tz%2FzcuIxhy9yJJTNDHJxkwn6nvwDZFC3Gl9oih%2FYBYPjucf6CCIzVuWWybO0mkvb6muJZqhNvRTLCKAyEqZ96jOdXaJ6sDxeuyp5pyUD%2B5c6wXIyuR8YsM635RWpnlLe2BbZkRDxPJE730tFJ9I8PvNzKDP%2BjWz7PmInEmzHu9KEcHCzSGihz%2FJ9BoiIeyThoohFs%2B%2BULOSjYM%2FJy0OD6XnfAjXmU63Ea7Z3Y60sBjnNqdl4tWCUALXRPSciXbpJRoVBKOlI6xyMiuht%2FXsYxtjSs%2BJxt23d6baAUdtWG9mXTb76Z8qaiiSFoYcZ8Cooxwueye0wXHTdPNzaoT9e%2Bo3sDjq4OcC6Pu81SMWWTWuLQRDQZcXj5QMYTLsgtXqh%2FJw5PYc66OVQztUOPH2ySxkfanexngr3yFigFF6KOpen%2FQ3sA9nLMtVnUgIHdHulIDLSYJsXHDsAK7CQymzJhHJdp%2FmNtktPww6fX7LYxDeYSvq06Dsab9k6pKtD%2Fz0hWHF3KaNc9HPPHmqp2c1QNkyrDSPO%2F2EY%2BizI3RyloteKrCadSyz05xghmkBoht0Wi%2F%2BrX9x3gldoWLg%2FqGmc0OJaLXMxsanMP%2F40sQGOqUBI3Nl6%2Fz7G3KytpiLc4VTVvm1KiBYmUGiBT6%2BUEMTRuxUxAwNxFWK%2BzkUiJt3dLw7HkjxZX2vsbLHY7lFTn0Htar2Yv8oSwkdFdsbwHhgv%2FwFwPsrwtxUfN6dl6l7XH%2BbIUVQ0TPFc2eaI%2FYuteYA%2FkmE0llraEKxBrlTd%2BGvit0vYT44Ls0WCop8z2eYI%2FkrR3c0UoJiqp83nEEbPApzJ8WKNLpW&X-Amz-Signature=6e9bddfbfbe49a809a424562d47708feb50c9a80fc7e0e81f39d1bc93703549f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLWN55WY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCA%2B4oH49RNj%2BBxS9WTp2ommyd%2FwHJzFK40yLJrhGyOegIgMl%2BQInaEVzG%2BZMKEk9CUS%2BI%2FqhNSnWpibZLNjbpCn3oqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcC0UuCMy2f8UVjPyrcA6zhaNuFtu%2Fe3C2dhASHTFTH%2B80I0Tz%2FzcuIxhy9yJJTNDHJxkwn6nvwDZFC3Gl9oih%2FYBYPjucf6CCIzVuWWybO0mkvb6muJZqhNvRTLCKAyEqZ96jOdXaJ6sDxeuyp5pyUD%2B5c6wXIyuR8YsM635RWpnlLe2BbZkRDxPJE730tFJ9I8PvNzKDP%2BjWz7PmInEmzHu9KEcHCzSGihz%2FJ9BoiIeyThoohFs%2B%2BULOSjYM%2FJy0OD6XnfAjXmU63Ea7Z3Y60sBjnNqdl4tWCUALXRPSciXbpJRoVBKOlI6xyMiuht%2FXsYxtjSs%2BJxt23d6baAUdtWG9mXTb76Z8qaiiSFoYcZ8Cooxwueye0wXHTdPNzaoT9e%2Bo3sDjq4OcC6Pu81SMWWTWuLQRDQZcXj5QMYTLsgtXqh%2FJw5PYc66OVQztUOPH2ySxkfanexngr3yFigFF6KOpen%2FQ3sA9nLMtVnUgIHdHulIDLSYJsXHDsAK7CQymzJhHJdp%2FmNtktPww6fX7LYxDeYSvq06Dsab9k6pKtD%2Fz0hWHF3KaNc9HPPHmqp2c1QNkyrDSPO%2F2EY%2BizI3RyloteKrCadSyz05xghmkBoht0Wi%2F%2BrX9x3gldoWLg%2FqGmc0OJaLXMxsanMP%2F40sQGOqUBI3Nl6%2Fz7G3KytpiLc4VTVvm1KiBYmUGiBT6%2BUEMTRuxUxAwNxFWK%2BzkUiJt3dLw7HkjxZX2vsbLHY7lFTn0Htar2Yv8oSwkdFdsbwHhgv%2FwFwPsrwtxUfN6dl6l7XH%2BbIUVQ0TPFc2eaI%2FYuteYA%2FkmE0llraEKxBrlTd%2BGvit0vYT44Ls0WCop8z2eYI%2FkrR3c0UoJiqp83nEEbPApzJ8WKNLpW&X-Amz-Signature=b13a1f39a26b8a5bc96dddfaf1df02e39d4f2fdb6a7d5fb607cced4ef4afb905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLWN55WY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCA%2B4oH49RNj%2BBxS9WTp2ommyd%2FwHJzFK40yLJrhGyOegIgMl%2BQInaEVzG%2BZMKEk9CUS%2BI%2FqhNSnWpibZLNjbpCn3oqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcC0UuCMy2f8UVjPyrcA6zhaNuFtu%2Fe3C2dhASHTFTH%2B80I0Tz%2FzcuIxhy9yJJTNDHJxkwn6nvwDZFC3Gl9oih%2FYBYPjucf6CCIzVuWWybO0mkvb6muJZqhNvRTLCKAyEqZ96jOdXaJ6sDxeuyp5pyUD%2B5c6wXIyuR8YsM635RWpnlLe2BbZkRDxPJE730tFJ9I8PvNzKDP%2BjWz7PmInEmzHu9KEcHCzSGihz%2FJ9BoiIeyThoohFs%2B%2BULOSjYM%2FJy0OD6XnfAjXmU63Ea7Z3Y60sBjnNqdl4tWCUALXRPSciXbpJRoVBKOlI6xyMiuht%2FXsYxtjSs%2BJxt23d6baAUdtWG9mXTb76Z8qaiiSFoYcZ8Cooxwueye0wXHTdPNzaoT9e%2Bo3sDjq4OcC6Pu81SMWWTWuLQRDQZcXj5QMYTLsgtXqh%2FJw5PYc66OVQztUOPH2ySxkfanexngr3yFigFF6KOpen%2FQ3sA9nLMtVnUgIHdHulIDLSYJsXHDsAK7CQymzJhHJdp%2FmNtktPww6fX7LYxDeYSvq06Dsab9k6pKtD%2Fz0hWHF3KaNc9HPPHmqp2c1QNkyrDSPO%2F2EY%2BizI3RyloteKrCadSyz05xghmkBoht0Wi%2F%2BrX9x3gldoWLg%2FqGmc0OJaLXMxsanMP%2F40sQGOqUBI3Nl6%2Fz7G3KytpiLc4VTVvm1KiBYmUGiBT6%2BUEMTRuxUxAwNxFWK%2BzkUiJt3dLw7HkjxZX2vsbLHY7lFTn0Htar2Yv8oSwkdFdsbwHhgv%2FwFwPsrwtxUfN6dl6l7XH%2BbIUVQ0TPFc2eaI%2FYuteYA%2FkmE0llraEKxBrlTd%2BGvit0vYT44Ls0WCop8z2eYI%2FkrR3c0UoJiqp83nEEbPApzJ8WKNLpW&X-Amz-Signature=ab5285da24f19b4d0b0ba3d6b326a08d14a7e7b3f65271627d8583144cbc81f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLWN55WY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCA%2B4oH49RNj%2BBxS9WTp2ommyd%2FwHJzFK40yLJrhGyOegIgMl%2BQInaEVzG%2BZMKEk9CUS%2BI%2FqhNSnWpibZLNjbpCn3oqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcC0UuCMy2f8UVjPyrcA6zhaNuFtu%2Fe3C2dhASHTFTH%2B80I0Tz%2FzcuIxhy9yJJTNDHJxkwn6nvwDZFC3Gl9oih%2FYBYPjucf6CCIzVuWWybO0mkvb6muJZqhNvRTLCKAyEqZ96jOdXaJ6sDxeuyp5pyUD%2B5c6wXIyuR8YsM635RWpnlLe2BbZkRDxPJE730tFJ9I8PvNzKDP%2BjWz7PmInEmzHu9KEcHCzSGihz%2FJ9BoiIeyThoohFs%2B%2BULOSjYM%2FJy0OD6XnfAjXmU63Ea7Z3Y60sBjnNqdl4tWCUALXRPSciXbpJRoVBKOlI6xyMiuht%2FXsYxtjSs%2BJxt23d6baAUdtWG9mXTb76Z8qaiiSFoYcZ8Cooxwueye0wXHTdPNzaoT9e%2Bo3sDjq4OcC6Pu81SMWWTWuLQRDQZcXj5QMYTLsgtXqh%2FJw5PYc66OVQztUOPH2ySxkfanexngr3yFigFF6KOpen%2FQ3sA9nLMtVnUgIHdHulIDLSYJsXHDsAK7CQymzJhHJdp%2FmNtktPww6fX7LYxDeYSvq06Dsab9k6pKtD%2Fz0hWHF3KaNc9HPPHmqp2c1QNkyrDSPO%2F2EY%2BizI3RyloteKrCadSyz05xghmkBoht0Wi%2F%2BrX9x3gldoWLg%2FqGmc0OJaLXMxsanMP%2F40sQGOqUBI3Nl6%2Fz7G3KytpiLc4VTVvm1KiBYmUGiBT6%2BUEMTRuxUxAwNxFWK%2BzkUiJt3dLw7HkjxZX2vsbLHY7lFTn0Htar2Yv8oSwkdFdsbwHhgv%2FwFwPsrwtxUfN6dl6l7XH%2BbIUVQ0TPFc2eaI%2FYuteYA%2FkmE0llraEKxBrlTd%2BGvit0vYT44Ls0WCop8z2eYI%2FkrR3c0UoJiqp83nEEbPApzJ8WKNLpW&X-Amz-Signature=3456d67d1d24e373e8f1b34c9bc45c42615f613a499e27e2b6a5037dfc91fb93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW27HOO7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQC7giTfGeG5ofa%2FozF4v99lCxZ4eLfefowWtdnU3CSfgwIgN%2BliGUaSqC19oVY%2F4gX8Ui8zzmRd8eI4IvP5sI%2BGqQ8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFtICUH2qAkWracfircAwnNCXcYDchC7CkrNvVTRd9dtARs3Kxj8Fj%2Fsfoqjgvc0TYbT0pEgS7C5c8MCQxID3WYyjkgkUcJkVzicDryuKOGnGY79NMUzhjXk07yNbYbsf9e08vNdduR9%2BOrDbjACLRpy%2FXd%2F9nFfYVSvDwLD2%2BsyW4Ydxlt%2FO8lxPXqkDoi%2BE0KMXmquUJL3bvxh%2FNfxLn47nHOGQVZDfWe5GOUw43xsFzSR9BkyLzw8pf3VovdDg7LiEG%2FpD%2BjmXOM7a0USmbtjVvyTS7IIzFAmgU5OcO%2BZEIrgvVKUpo2tnH7wYiX5fE41MY%2F%2Bo1ZoKL6u9tl8ukrD%2BD2YlMWl5mfvr8yPVo1Y5jstKNAHKOr%2FfYl2GCM7AAtKePT%2BWHgyRLNtCzNZhAt5SseK%2B1kGtMz8zHrSjqBSCujjUgMmMFfDm72fmGDq3%2FH9tqxCgnLNDuZMHTKKowt400W8s1DGDYZYjT%2FghnOOjkyMA%2FxMIj6QPCCwAA%2FgS9hDj%2BOjVzo%2B5IXaaiWrXCsEvMUAjs8NjrwwAyVTT0%2BQPLYqAHyOCG%2Btug2IEICMoqHUTjcwXaP35gfaAtNi92cm4Gf2QcsA37DpOd8MFD9HNlod6XT8iInnQ7ffK6UedoGIW1l%2FHAsTxizMOH50sQGOqUB5QRQzrkbHIRCDiYC8Z8QyphY8mvqXBEg%2FHy91tArXhjBaLrdDKkllNwAiQWmcgODD%2FpFZPdcquW1Z5pHYfLpWGNVJdoI7Olk7it%2BuJn1wDaMpPmlA3CXM8HNwt2VyZD15qH64FE2a0bARfVIgfLuPOtbKP6ghuJW0EfBJcLuFKr4Vt7v8FOiUYKFrtcDtRqr8FTRBw5H7tODi9Fu0HWvjzqJaMds&X-Amz-Signature=5533d21e85cc999d9769e6e1c8079569676839a884faaf7477ad47e0c3543e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLWN55WY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCA%2B4oH49RNj%2BBxS9WTp2ommyd%2FwHJzFK40yLJrhGyOegIgMl%2BQInaEVzG%2BZMKEk9CUS%2BI%2FqhNSnWpibZLNjbpCn3oqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcC0UuCMy2f8UVjPyrcA6zhaNuFtu%2Fe3C2dhASHTFTH%2B80I0Tz%2FzcuIxhy9yJJTNDHJxkwn6nvwDZFC3Gl9oih%2FYBYPjucf6CCIzVuWWybO0mkvb6muJZqhNvRTLCKAyEqZ96jOdXaJ6sDxeuyp5pyUD%2B5c6wXIyuR8YsM635RWpnlLe2BbZkRDxPJE730tFJ9I8PvNzKDP%2BjWz7PmInEmzHu9KEcHCzSGihz%2FJ9BoiIeyThoohFs%2B%2BULOSjYM%2FJy0OD6XnfAjXmU63Ea7Z3Y60sBjnNqdl4tWCUALXRPSciXbpJRoVBKOlI6xyMiuht%2FXsYxtjSs%2BJxt23d6baAUdtWG9mXTb76Z8qaiiSFoYcZ8Cooxwueye0wXHTdPNzaoT9e%2Bo3sDjq4OcC6Pu81SMWWTWuLQRDQZcXj5QMYTLsgtXqh%2FJw5PYc66OVQztUOPH2ySxkfanexngr3yFigFF6KOpen%2FQ3sA9nLMtVnUgIHdHulIDLSYJsXHDsAK7CQymzJhHJdp%2FmNtktPww6fX7LYxDeYSvq06Dsab9k6pKtD%2Fz0hWHF3KaNc9HPPHmqp2c1QNkyrDSPO%2F2EY%2BizI3RyloteKrCadSyz05xghmkBoht0Wi%2F%2BrX9x3gldoWLg%2FqGmc0OJaLXMxsanMP%2F40sQGOqUBI3Nl6%2Fz7G3KytpiLc4VTVvm1KiBYmUGiBT6%2BUEMTRuxUxAwNxFWK%2BzkUiJt3dLw7HkjxZX2vsbLHY7lFTn0Htar2Yv8oSwkdFdsbwHhgv%2FwFwPsrwtxUfN6dl6l7XH%2BbIUVQ0TPFc2eaI%2FYuteYA%2FkmE0llraEKxBrlTd%2BGvit0vYT44Ls0WCop8z2eYI%2FkrR3c0UoJiqp83nEEbPApzJ8WKNLpW&X-Amz-Signature=1478820dd5eb234c8090585f05df2fd3dd347e6be87b9a92d26106018e683144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLWN55WY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCA%2B4oH49RNj%2BBxS9WTp2ommyd%2FwHJzFK40yLJrhGyOegIgMl%2BQInaEVzG%2BZMKEk9CUS%2BI%2FqhNSnWpibZLNjbpCn3oqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcC0UuCMy2f8UVjPyrcA6zhaNuFtu%2Fe3C2dhASHTFTH%2B80I0Tz%2FzcuIxhy9yJJTNDHJxkwn6nvwDZFC3Gl9oih%2FYBYPjucf6CCIzVuWWybO0mkvb6muJZqhNvRTLCKAyEqZ96jOdXaJ6sDxeuyp5pyUD%2B5c6wXIyuR8YsM635RWpnlLe2BbZkRDxPJE730tFJ9I8PvNzKDP%2BjWz7PmInEmzHu9KEcHCzSGihz%2FJ9BoiIeyThoohFs%2B%2BULOSjYM%2FJy0OD6XnfAjXmU63Ea7Z3Y60sBjnNqdl4tWCUALXRPSciXbpJRoVBKOlI6xyMiuht%2FXsYxtjSs%2BJxt23d6baAUdtWG9mXTb76Z8qaiiSFoYcZ8Cooxwueye0wXHTdPNzaoT9e%2Bo3sDjq4OcC6Pu81SMWWTWuLQRDQZcXj5QMYTLsgtXqh%2FJw5PYc66OVQztUOPH2ySxkfanexngr3yFigFF6KOpen%2FQ3sA9nLMtVnUgIHdHulIDLSYJsXHDsAK7CQymzJhHJdp%2FmNtktPww6fX7LYxDeYSvq06Dsab9k6pKtD%2Fz0hWHF3KaNc9HPPHmqp2c1QNkyrDSPO%2F2EY%2BizI3RyloteKrCadSyz05xghmkBoht0Wi%2F%2BrX9x3gldoWLg%2FqGmc0OJaLXMxsanMP%2F40sQGOqUBI3Nl6%2Fz7G3KytpiLc4VTVvm1KiBYmUGiBT6%2BUEMTRuxUxAwNxFWK%2BzkUiJt3dLw7HkjxZX2vsbLHY7lFTn0Htar2Yv8oSwkdFdsbwHhgv%2FwFwPsrwtxUfN6dl6l7XH%2BbIUVQ0TPFc2eaI%2FYuteYA%2FkmE0llraEKxBrlTd%2BGvit0vYT44Ls0WCop8z2eYI%2FkrR3c0UoJiqp83nEEbPApzJ8WKNLpW&X-Amz-Signature=21f93c5b5556a4908e99685facf36b8b4b13f8ea7ac55e742ae60d399746bc6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLWN55WY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCA%2B4oH49RNj%2BBxS9WTp2ommyd%2FwHJzFK40yLJrhGyOegIgMl%2BQInaEVzG%2BZMKEk9CUS%2BI%2FqhNSnWpibZLNjbpCn3oqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcC0UuCMy2f8UVjPyrcA6zhaNuFtu%2Fe3C2dhASHTFTH%2B80I0Tz%2FzcuIxhy9yJJTNDHJxkwn6nvwDZFC3Gl9oih%2FYBYPjucf6CCIzVuWWybO0mkvb6muJZqhNvRTLCKAyEqZ96jOdXaJ6sDxeuyp5pyUD%2B5c6wXIyuR8YsM635RWpnlLe2BbZkRDxPJE730tFJ9I8PvNzKDP%2BjWz7PmInEmzHu9KEcHCzSGihz%2FJ9BoiIeyThoohFs%2B%2BULOSjYM%2FJy0OD6XnfAjXmU63Ea7Z3Y60sBjnNqdl4tWCUALXRPSciXbpJRoVBKOlI6xyMiuht%2FXsYxtjSs%2BJxt23d6baAUdtWG9mXTb76Z8qaiiSFoYcZ8Cooxwueye0wXHTdPNzaoT9e%2Bo3sDjq4OcC6Pu81SMWWTWuLQRDQZcXj5QMYTLsgtXqh%2FJw5PYc66OVQztUOPH2ySxkfanexngr3yFigFF6KOpen%2FQ3sA9nLMtVnUgIHdHulIDLSYJsXHDsAK7CQymzJhHJdp%2FmNtktPww6fX7LYxDeYSvq06Dsab9k6pKtD%2Fz0hWHF3KaNc9HPPHmqp2c1QNkyrDSPO%2F2EY%2BizI3RyloteKrCadSyz05xghmkBoht0Wi%2F%2BrX9x3gldoWLg%2FqGmc0OJaLXMxsanMP%2F40sQGOqUBI3Nl6%2Fz7G3KytpiLc4VTVvm1KiBYmUGiBT6%2BUEMTRuxUxAwNxFWK%2BzkUiJt3dLw7HkjxZX2vsbLHY7lFTn0Htar2Yv8oSwkdFdsbwHhgv%2FwFwPsrwtxUfN6dl6l7XH%2BbIUVQ0TPFc2eaI%2FYuteYA%2FkmE0llraEKxBrlTd%2BGvit0vYT44Ls0WCop8z2eYI%2FkrR3c0UoJiqp83nEEbPApzJ8WKNLpW&X-Amz-Signature=f516bb00584fc3115e2f9aab38da4031a88a39e08ff164a01b3e6d09c13b9750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLWN55WY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCA%2B4oH49RNj%2BBxS9WTp2ommyd%2FwHJzFK40yLJrhGyOegIgMl%2BQInaEVzG%2BZMKEk9CUS%2BI%2FqhNSnWpibZLNjbpCn3oqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcC0UuCMy2f8UVjPyrcA6zhaNuFtu%2Fe3C2dhASHTFTH%2B80I0Tz%2FzcuIxhy9yJJTNDHJxkwn6nvwDZFC3Gl9oih%2FYBYPjucf6CCIzVuWWybO0mkvb6muJZqhNvRTLCKAyEqZ96jOdXaJ6sDxeuyp5pyUD%2B5c6wXIyuR8YsM635RWpnlLe2BbZkRDxPJE730tFJ9I8PvNzKDP%2BjWz7PmInEmzHu9KEcHCzSGihz%2FJ9BoiIeyThoohFs%2B%2BULOSjYM%2FJy0OD6XnfAjXmU63Ea7Z3Y60sBjnNqdl4tWCUALXRPSciXbpJRoVBKOlI6xyMiuht%2FXsYxtjSs%2BJxt23d6baAUdtWG9mXTb76Z8qaiiSFoYcZ8Cooxwueye0wXHTdPNzaoT9e%2Bo3sDjq4OcC6Pu81SMWWTWuLQRDQZcXj5QMYTLsgtXqh%2FJw5PYc66OVQztUOPH2ySxkfanexngr3yFigFF6KOpen%2FQ3sA9nLMtVnUgIHdHulIDLSYJsXHDsAK7CQymzJhHJdp%2FmNtktPww6fX7LYxDeYSvq06Dsab9k6pKtD%2Fz0hWHF3KaNc9HPPHmqp2c1QNkyrDSPO%2F2EY%2BizI3RyloteKrCadSyz05xghmkBoht0Wi%2F%2BrX9x3gldoWLg%2FqGmc0OJaLXMxsanMP%2F40sQGOqUBI3Nl6%2Fz7G3KytpiLc4VTVvm1KiBYmUGiBT6%2BUEMTRuxUxAwNxFWK%2BzkUiJt3dLw7HkjxZX2vsbLHY7lFTn0Htar2Yv8oSwkdFdsbwHhgv%2FwFwPsrwtxUfN6dl6l7XH%2BbIUVQ0TPFc2eaI%2FYuteYA%2FkmE0llraEKxBrlTd%2BGvit0vYT44Ls0WCop8z2eYI%2FkrR3c0UoJiqp83nEEbPApzJ8WKNLpW&X-Amz-Signature=2f1e0a994902478abe5524172b5afb1d90e33bcfadb850fb09c00f0a2c794818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLWN55WY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCA%2B4oH49RNj%2BBxS9WTp2ommyd%2FwHJzFK40yLJrhGyOegIgMl%2BQInaEVzG%2BZMKEk9CUS%2BI%2FqhNSnWpibZLNjbpCn3oqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcC0UuCMy2f8UVjPyrcA6zhaNuFtu%2Fe3C2dhASHTFTH%2B80I0Tz%2FzcuIxhy9yJJTNDHJxkwn6nvwDZFC3Gl9oih%2FYBYPjucf6CCIzVuWWybO0mkvb6muJZqhNvRTLCKAyEqZ96jOdXaJ6sDxeuyp5pyUD%2B5c6wXIyuR8YsM635RWpnlLe2BbZkRDxPJE730tFJ9I8PvNzKDP%2BjWz7PmInEmzHu9KEcHCzSGihz%2FJ9BoiIeyThoohFs%2B%2BULOSjYM%2FJy0OD6XnfAjXmU63Ea7Z3Y60sBjnNqdl4tWCUALXRPSciXbpJRoVBKOlI6xyMiuht%2FXsYxtjSs%2BJxt23d6baAUdtWG9mXTb76Z8qaiiSFoYcZ8Cooxwueye0wXHTdPNzaoT9e%2Bo3sDjq4OcC6Pu81SMWWTWuLQRDQZcXj5QMYTLsgtXqh%2FJw5PYc66OVQztUOPH2ySxkfanexngr3yFigFF6KOpen%2FQ3sA9nLMtVnUgIHdHulIDLSYJsXHDsAK7CQymzJhHJdp%2FmNtktPww6fX7LYxDeYSvq06Dsab9k6pKtD%2Fz0hWHF3KaNc9HPPHmqp2c1QNkyrDSPO%2F2EY%2BizI3RyloteKrCadSyz05xghmkBoht0Wi%2F%2BrX9x3gldoWLg%2FqGmc0OJaLXMxsanMP%2F40sQGOqUBI3Nl6%2Fz7G3KytpiLc4VTVvm1KiBYmUGiBT6%2BUEMTRuxUxAwNxFWK%2BzkUiJt3dLw7HkjxZX2vsbLHY7lFTn0Htar2Yv8oSwkdFdsbwHhgv%2FwFwPsrwtxUfN6dl6l7XH%2BbIUVQ0TPFc2eaI%2FYuteYA%2FkmE0llraEKxBrlTd%2BGvit0vYT44Ls0WCop8z2eYI%2FkrR3c0UoJiqp83nEEbPApzJ8WKNLpW&X-Amz-Signature=9ab537dda03d896acfcd4a74df7a117852763c0fa23af4d2f6d2315ba4c9c267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLWN55WY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCA%2B4oH49RNj%2BBxS9WTp2ommyd%2FwHJzFK40yLJrhGyOegIgMl%2BQInaEVzG%2BZMKEk9CUS%2BI%2FqhNSnWpibZLNjbpCn3oqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcC0UuCMy2f8UVjPyrcA6zhaNuFtu%2Fe3C2dhASHTFTH%2B80I0Tz%2FzcuIxhy9yJJTNDHJxkwn6nvwDZFC3Gl9oih%2FYBYPjucf6CCIzVuWWybO0mkvb6muJZqhNvRTLCKAyEqZ96jOdXaJ6sDxeuyp5pyUD%2B5c6wXIyuR8YsM635RWpnlLe2BbZkRDxPJE730tFJ9I8PvNzKDP%2BjWz7PmInEmzHu9KEcHCzSGihz%2FJ9BoiIeyThoohFs%2B%2BULOSjYM%2FJy0OD6XnfAjXmU63Ea7Z3Y60sBjnNqdl4tWCUALXRPSciXbpJRoVBKOlI6xyMiuht%2FXsYxtjSs%2BJxt23d6baAUdtWG9mXTb76Z8qaiiSFoYcZ8Cooxwueye0wXHTdPNzaoT9e%2Bo3sDjq4OcC6Pu81SMWWTWuLQRDQZcXj5QMYTLsgtXqh%2FJw5PYc66OVQztUOPH2ySxkfanexngr3yFigFF6KOpen%2FQ3sA9nLMtVnUgIHdHulIDLSYJsXHDsAK7CQymzJhHJdp%2FmNtktPww6fX7LYxDeYSvq06Dsab9k6pKtD%2Fz0hWHF3KaNc9HPPHmqp2c1QNkyrDSPO%2F2EY%2BizI3RyloteKrCadSyz05xghmkBoht0Wi%2F%2BrX9x3gldoWLg%2FqGmc0OJaLXMxsanMP%2F40sQGOqUBI3Nl6%2Fz7G3KytpiLc4VTVvm1KiBYmUGiBT6%2BUEMTRuxUxAwNxFWK%2BzkUiJt3dLw7HkjxZX2vsbLHY7lFTn0Htar2Yv8oSwkdFdsbwHhgv%2FwFwPsrwtxUfN6dl6l7XH%2BbIUVQ0TPFc2eaI%2FYuteYA%2FkmE0llraEKxBrlTd%2BGvit0vYT44Ls0WCop8z2eYI%2FkrR3c0UoJiqp83nEEbPApzJ8WKNLpW&X-Amz-Signature=38ca227a32181e3072167cb79863b90edf97dc04e5b1fa128f7829162cc6355f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
