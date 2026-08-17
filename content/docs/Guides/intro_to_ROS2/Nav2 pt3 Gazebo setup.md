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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOSOHM7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAu%2Bpe42f0Y3eDsILI5jmUEkH1TCob4PWz1ensrXwf4RAiEA8AMEoayybhr6BZsHIC%2BHPV3Rx4xB9pGohvo6nYX%2B0UQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBn5jMkjs7hNEZeRXircA8hjWVwm2ak60yvTexhHstKyMOotrogjhRHt56GFwM16eQzJ%2FdEGvFF1b2s0lhtdeKf5xTI9ZepCcArRW1fprzVKNBGyorSMtYzzK7smkxkYcNliAzuW4oWVnp9LH%2Bo3DtLYGwWSE3t6Fvsyg%2BxcXCyPgA1%2F6jm2HLoo%2BKk4qbNIGaCdEShw0GTVdG6gMzloqmVXJliqXYKIVqsGBVNgTfbFCB4d4i2rtXmwTCMxtgpOJfLbH%2FpJCUnYXjtXX5tOTyka%2B0hvEPY4%2BEsIz%2FMmymX%2F4FL9nrThYVWuxv%2BAcHJS1YyTfCfgzTgw26JS0OJSehQrR39Zw282DTpwjnJTifI7TM8uHE60hPZD06GRiuxi3%2Bl6RyaYGnDidfTbI155F7VKqGfbwTeIrG3YbcuQVre6pvRmqMsEBfVtnwO%2FR2nTdkjbGLFu2U6UonZi3V9Aya40p7BNKU37quHO57Xb6z5musNYTTH0mZPkD4fMg8SOrSK5Ash4Bh39L76VwOK2DyW%2FQ4UWS4lXgEGOazy0uXtvxo77C%2FfXbpQGrD2NqM0aQZq8w52q7cMM8%2Fbg0nXMzpfAslRfaBkg1PWeTwR2%2FUR9PHuMTHr6uTVoPGZRtywf6TMuMOWMwPZM9z8hMOWridQGOqUBFjfaEwDVLrqIAqlqdXsyrmgJ64W8FC8o2vIssFy9wpZvscd7h3%2BxD5ESyIxSNIXi54QGYi5PSOUxAA9AiemWW0ZZyx3JEtYghhQjypcOhGYZwseWHO6yewfxfrphAzRjJJKm7%2BupLm08a5oNEv6TlpWFAjZaC4Hs1ZX4g3qKLfPNqQ%2Fbp7ekvQchuf%2BjpiT6ppWp1zbLKUXpzLmhM1G3YNUDr6fP&X-Amz-Signature=7e4959324011eff445c74b35d10ec89aa5a419d649f2852d4d86584b60478016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOSOHM7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAu%2Bpe42f0Y3eDsILI5jmUEkH1TCob4PWz1ensrXwf4RAiEA8AMEoayybhr6BZsHIC%2BHPV3Rx4xB9pGohvo6nYX%2B0UQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBn5jMkjs7hNEZeRXircA8hjWVwm2ak60yvTexhHstKyMOotrogjhRHt56GFwM16eQzJ%2FdEGvFF1b2s0lhtdeKf5xTI9ZepCcArRW1fprzVKNBGyorSMtYzzK7smkxkYcNliAzuW4oWVnp9LH%2Bo3DtLYGwWSE3t6Fvsyg%2BxcXCyPgA1%2F6jm2HLoo%2BKk4qbNIGaCdEShw0GTVdG6gMzloqmVXJliqXYKIVqsGBVNgTfbFCB4d4i2rtXmwTCMxtgpOJfLbH%2FpJCUnYXjtXX5tOTyka%2B0hvEPY4%2BEsIz%2FMmymX%2F4FL9nrThYVWuxv%2BAcHJS1YyTfCfgzTgw26JS0OJSehQrR39Zw282DTpwjnJTifI7TM8uHE60hPZD06GRiuxi3%2Bl6RyaYGnDidfTbI155F7VKqGfbwTeIrG3YbcuQVre6pvRmqMsEBfVtnwO%2FR2nTdkjbGLFu2U6UonZi3V9Aya40p7BNKU37quHO57Xb6z5musNYTTH0mZPkD4fMg8SOrSK5Ash4Bh39L76VwOK2DyW%2FQ4UWS4lXgEGOazy0uXtvxo77C%2FfXbpQGrD2NqM0aQZq8w52q7cMM8%2Fbg0nXMzpfAslRfaBkg1PWeTwR2%2FUR9PHuMTHr6uTVoPGZRtywf6TMuMOWMwPZM9z8hMOWridQGOqUBFjfaEwDVLrqIAqlqdXsyrmgJ64W8FC8o2vIssFy9wpZvscd7h3%2BxD5ESyIxSNIXi54QGYi5PSOUxAA9AiemWW0ZZyx3JEtYghhQjypcOhGYZwseWHO6yewfxfrphAzRjJJKm7%2BupLm08a5oNEv6TlpWFAjZaC4Hs1ZX4g3qKLfPNqQ%2Fbp7ekvQchuf%2BjpiT6ppWp1zbLKUXpzLmhM1G3YNUDr6fP&X-Amz-Signature=d829ad19f88439fb9849b61b2b8f68c64c04a8ba26a8b0085caeb380ac7a26aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOSOHM7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAu%2Bpe42f0Y3eDsILI5jmUEkH1TCob4PWz1ensrXwf4RAiEA8AMEoayybhr6BZsHIC%2BHPV3Rx4xB9pGohvo6nYX%2B0UQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBn5jMkjs7hNEZeRXircA8hjWVwm2ak60yvTexhHstKyMOotrogjhRHt56GFwM16eQzJ%2FdEGvFF1b2s0lhtdeKf5xTI9ZepCcArRW1fprzVKNBGyorSMtYzzK7smkxkYcNliAzuW4oWVnp9LH%2Bo3DtLYGwWSE3t6Fvsyg%2BxcXCyPgA1%2F6jm2HLoo%2BKk4qbNIGaCdEShw0GTVdG6gMzloqmVXJliqXYKIVqsGBVNgTfbFCB4d4i2rtXmwTCMxtgpOJfLbH%2FpJCUnYXjtXX5tOTyka%2B0hvEPY4%2BEsIz%2FMmymX%2F4FL9nrThYVWuxv%2BAcHJS1YyTfCfgzTgw26JS0OJSehQrR39Zw282DTpwjnJTifI7TM8uHE60hPZD06GRiuxi3%2Bl6RyaYGnDidfTbI155F7VKqGfbwTeIrG3YbcuQVre6pvRmqMsEBfVtnwO%2FR2nTdkjbGLFu2U6UonZi3V9Aya40p7BNKU37quHO57Xb6z5musNYTTH0mZPkD4fMg8SOrSK5Ash4Bh39L76VwOK2DyW%2FQ4UWS4lXgEGOazy0uXtvxo77C%2FfXbpQGrD2NqM0aQZq8w52q7cMM8%2Fbg0nXMzpfAslRfaBkg1PWeTwR2%2FUR9PHuMTHr6uTVoPGZRtywf6TMuMOWMwPZM9z8hMOWridQGOqUBFjfaEwDVLrqIAqlqdXsyrmgJ64W8FC8o2vIssFy9wpZvscd7h3%2BxD5ESyIxSNIXi54QGYi5PSOUxAA9AiemWW0ZZyx3JEtYghhQjypcOhGYZwseWHO6yewfxfrphAzRjJJKm7%2BupLm08a5oNEv6TlpWFAjZaC4Hs1ZX4g3qKLfPNqQ%2Fbp7ekvQchuf%2BjpiT6ppWp1zbLKUXpzLmhM1G3YNUDr6fP&X-Amz-Signature=714bb22c66c9a7b90e8b96c583fc1f5e68ebcde274a0473db6dd00ba3b7eb142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOSOHM7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAu%2Bpe42f0Y3eDsILI5jmUEkH1TCob4PWz1ensrXwf4RAiEA8AMEoayybhr6BZsHIC%2BHPV3Rx4xB9pGohvo6nYX%2B0UQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBn5jMkjs7hNEZeRXircA8hjWVwm2ak60yvTexhHstKyMOotrogjhRHt56GFwM16eQzJ%2FdEGvFF1b2s0lhtdeKf5xTI9ZepCcArRW1fprzVKNBGyorSMtYzzK7smkxkYcNliAzuW4oWVnp9LH%2Bo3DtLYGwWSE3t6Fvsyg%2BxcXCyPgA1%2F6jm2HLoo%2BKk4qbNIGaCdEShw0GTVdG6gMzloqmVXJliqXYKIVqsGBVNgTfbFCB4d4i2rtXmwTCMxtgpOJfLbH%2FpJCUnYXjtXX5tOTyka%2B0hvEPY4%2BEsIz%2FMmymX%2F4FL9nrThYVWuxv%2BAcHJS1YyTfCfgzTgw26JS0OJSehQrR39Zw282DTpwjnJTifI7TM8uHE60hPZD06GRiuxi3%2Bl6RyaYGnDidfTbI155F7VKqGfbwTeIrG3YbcuQVre6pvRmqMsEBfVtnwO%2FR2nTdkjbGLFu2U6UonZi3V9Aya40p7BNKU37quHO57Xb6z5musNYTTH0mZPkD4fMg8SOrSK5Ash4Bh39L76VwOK2DyW%2FQ4UWS4lXgEGOazy0uXtvxo77C%2FfXbpQGrD2NqM0aQZq8w52q7cMM8%2Fbg0nXMzpfAslRfaBkg1PWeTwR2%2FUR9PHuMTHr6uTVoPGZRtywf6TMuMOWMwPZM9z8hMOWridQGOqUBFjfaEwDVLrqIAqlqdXsyrmgJ64W8FC8o2vIssFy9wpZvscd7h3%2BxD5ESyIxSNIXi54QGYi5PSOUxAA9AiemWW0ZZyx3JEtYghhQjypcOhGYZwseWHO6yewfxfrphAzRjJJKm7%2BupLm08a5oNEv6TlpWFAjZaC4Hs1ZX4g3qKLfPNqQ%2Fbp7ekvQchuf%2BjpiT6ppWp1zbLKUXpzLmhM1G3YNUDr6fP&X-Amz-Signature=55307f4cc49874afc5db6128c0a27fe3516cdb79e260c3acbb33a880f213b800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN6SRYR7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAd4NwKEnRZoCc9X9vfrRnl4c6uEDnGnrWl2jFh7yMKdAiEA77iriZ%2BCb1bgFJ5PW%2BFjM75Pn1crDdtd3MDfysPuNKQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDP0oc0bAjOwcyU7MjyrcA7mKDNiLT897SorTERNXJfdUYBaOJW4XdRUyn07S5yH45k3wRggKVJ7uJVvJovwJZcvdvpLMoLKZhtTtmHzYzfO16TJyJb3UhtW2l6AsJDMdW4I0YsWjOyeo6ASh6g2QYRRDpPU02KchtqXOr83h5Y46eZFXGdfwVPlSafZr39lDcafMJE8McWOfnoRi4MDMeiR6f%2BaJ3%2F5bOfx9mDtrE9RJXFEV3hWP0nv8MuzfMDo%2F8pbLWRyJf6c8sXJprOiF%2FPQuB587I0Hk4mSO5X9h5%2BB0YOfNFlp0FwsJTL9nMpq7KHMShOwG8b%2B3nCFrS%2FcDzueI9ov6Jts%2BBon52uNL%2BhmrwbFSMGHhCMwPeJYY4Rud7ao13PZDRKxSKKKD2OvvXTHQJeroSOTo3WlJVzhjQgZ99EQt52VIB05kxfAmnpDB8%2Brig8rd4dcE82xr8swIsqw%2BI0hwKgJN53hyTt11QV%2BWB0Ebg58%2BtakQtFtqXQI%2BT8wUnSCjtuLOvoduRhwQeER6dJY1JHXEeilCPfLbPa%2F9umH9aq4G8dUpTyc4gB%2BNmaU2NKXPnegHJytEJEZ7crgyDlJ%2FhdRotWRKTqcolAv626vRMUxkyUhfkhlI4JEQB%2FN2Xz35SX%2FD8CrDMKKtidQGOqUBRSvkQ3woW42hgHc0teAk0bP3Z3DRNke8EPiXTpB1DCff5LL8Q3ZbUob2ceKp8CeiXPSvi1y0rmfp38yfXXINg4LwgurlJ37VNWUCZg6PPHERT%2BU61DZgGms%2BvSAN8hocC0Moa00ms1b%2F%2BUZBrgNzllsQSKf6ZGDTeetEByqRfbhKP4%2FGGsASjup7EjC8LQRB0zV%2Fyg%2Be9eCBXbDrlhH115HKQ8RH&X-Amz-Signature=42de68147db17510c655098b5931c4ce8685964b5b7d5f8770e2b3aa5ed75d7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOSOHM7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAu%2Bpe42f0Y3eDsILI5jmUEkH1TCob4PWz1ensrXwf4RAiEA8AMEoayybhr6BZsHIC%2BHPV3Rx4xB9pGohvo6nYX%2B0UQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBn5jMkjs7hNEZeRXircA8hjWVwm2ak60yvTexhHstKyMOotrogjhRHt56GFwM16eQzJ%2FdEGvFF1b2s0lhtdeKf5xTI9ZepCcArRW1fprzVKNBGyorSMtYzzK7smkxkYcNliAzuW4oWVnp9LH%2Bo3DtLYGwWSE3t6Fvsyg%2BxcXCyPgA1%2F6jm2HLoo%2BKk4qbNIGaCdEShw0GTVdG6gMzloqmVXJliqXYKIVqsGBVNgTfbFCB4d4i2rtXmwTCMxtgpOJfLbH%2FpJCUnYXjtXX5tOTyka%2B0hvEPY4%2BEsIz%2FMmymX%2F4FL9nrThYVWuxv%2BAcHJS1YyTfCfgzTgw26JS0OJSehQrR39Zw282DTpwjnJTifI7TM8uHE60hPZD06GRiuxi3%2Bl6RyaYGnDidfTbI155F7VKqGfbwTeIrG3YbcuQVre6pvRmqMsEBfVtnwO%2FR2nTdkjbGLFu2U6UonZi3V9Aya40p7BNKU37quHO57Xb6z5musNYTTH0mZPkD4fMg8SOrSK5Ash4Bh39L76VwOK2DyW%2FQ4UWS4lXgEGOazy0uXtvxo77C%2FfXbpQGrD2NqM0aQZq8w52q7cMM8%2Fbg0nXMzpfAslRfaBkg1PWeTwR2%2FUR9PHuMTHr6uTVoPGZRtywf6TMuMOWMwPZM9z8hMOWridQGOqUBFjfaEwDVLrqIAqlqdXsyrmgJ64W8FC8o2vIssFy9wpZvscd7h3%2BxD5ESyIxSNIXi54QGYi5PSOUxAA9AiemWW0ZZyx3JEtYghhQjypcOhGYZwseWHO6yewfxfrphAzRjJJKm7%2BupLm08a5oNEv6TlpWFAjZaC4Hs1ZX4g3qKLfPNqQ%2Fbp7ekvQchuf%2BjpiT6ppWp1zbLKUXpzLmhM1G3YNUDr6fP&X-Amz-Signature=af152b4ff25680a4ede7309184f8724907358f5e3b4ed43a55b782e033caeb01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOSOHM7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAu%2Bpe42f0Y3eDsILI5jmUEkH1TCob4PWz1ensrXwf4RAiEA8AMEoayybhr6BZsHIC%2BHPV3Rx4xB9pGohvo6nYX%2B0UQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBn5jMkjs7hNEZeRXircA8hjWVwm2ak60yvTexhHstKyMOotrogjhRHt56GFwM16eQzJ%2FdEGvFF1b2s0lhtdeKf5xTI9ZepCcArRW1fprzVKNBGyorSMtYzzK7smkxkYcNliAzuW4oWVnp9LH%2Bo3DtLYGwWSE3t6Fvsyg%2BxcXCyPgA1%2F6jm2HLoo%2BKk4qbNIGaCdEShw0GTVdG6gMzloqmVXJliqXYKIVqsGBVNgTfbFCB4d4i2rtXmwTCMxtgpOJfLbH%2FpJCUnYXjtXX5tOTyka%2B0hvEPY4%2BEsIz%2FMmymX%2F4FL9nrThYVWuxv%2BAcHJS1YyTfCfgzTgw26JS0OJSehQrR39Zw282DTpwjnJTifI7TM8uHE60hPZD06GRiuxi3%2Bl6RyaYGnDidfTbI155F7VKqGfbwTeIrG3YbcuQVre6pvRmqMsEBfVtnwO%2FR2nTdkjbGLFu2U6UonZi3V9Aya40p7BNKU37quHO57Xb6z5musNYTTH0mZPkD4fMg8SOrSK5Ash4Bh39L76VwOK2DyW%2FQ4UWS4lXgEGOazy0uXtvxo77C%2FfXbpQGrD2NqM0aQZq8w52q7cMM8%2Fbg0nXMzpfAslRfaBkg1PWeTwR2%2FUR9PHuMTHr6uTVoPGZRtywf6TMuMOWMwPZM9z8hMOWridQGOqUBFjfaEwDVLrqIAqlqdXsyrmgJ64W8FC8o2vIssFy9wpZvscd7h3%2BxD5ESyIxSNIXi54QGYi5PSOUxAA9AiemWW0ZZyx3JEtYghhQjypcOhGYZwseWHO6yewfxfrphAzRjJJKm7%2BupLm08a5oNEv6TlpWFAjZaC4Hs1ZX4g3qKLfPNqQ%2Fbp7ekvQchuf%2BjpiT6ppWp1zbLKUXpzLmhM1G3YNUDr6fP&X-Amz-Signature=659bf320b0d2305037eb1f42e3132f668ab7a6f1bbcad8a9142c37a8d85b2c4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOSOHM7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAu%2Bpe42f0Y3eDsILI5jmUEkH1TCob4PWz1ensrXwf4RAiEA8AMEoayybhr6BZsHIC%2BHPV3Rx4xB9pGohvo6nYX%2B0UQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBn5jMkjs7hNEZeRXircA8hjWVwm2ak60yvTexhHstKyMOotrogjhRHt56GFwM16eQzJ%2FdEGvFF1b2s0lhtdeKf5xTI9ZepCcArRW1fprzVKNBGyorSMtYzzK7smkxkYcNliAzuW4oWVnp9LH%2Bo3DtLYGwWSE3t6Fvsyg%2BxcXCyPgA1%2F6jm2HLoo%2BKk4qbNIGaCdEShw0GTVdG6gMzloqmVXJliqXYKIVqsGBVNgTfbFCB4d4i2rtXmwTCMxtgpOJfLbH%2FpJCUnYXjtXX5tOTyka%2B0hvEPY4%2BEsIz%2FMmymX%2F4FL9nrThYVWuxv%2BAcHJS1YyTfCfgzTgw26JS0OJSehQrR39Zw282DTpwjnJTifI7TM8uHE60hPZD06GRiuxi3%2Bl6RyaYGnDidfTbI155F7VKqGfbwTeIrG3YbcuQVre6pvRmqMsEBfVtnwO%2FR2nTdkjbGLFu2U6UonZi3V9Aya40p7BNKU37quHO57Xb6z5musNYTTH0mZPkD4fMg8SOrSK5Ash4Bh39L76VwOK2DyW%2FQ4UWS4lXgEGOazy0uXtvxo77C%2FfXbpQGrD2NqM0aQZq8w52q7cMM8%2Fbg0nXMzpfAslRfaBkg1PWeTwR2%2FUR9PHuMTHr6uTVoPGZRtywf6TMuMOWMwPZM9z8hMOWridQGOqUBFjfaEwDVLrqIAqlqdXsyrmgJ64W8FC8o2vIssFy9wpZvscd7h3%2BxD5ESyIxSNIXi54QGYi5PSOUxAA9AiemWW0ZZyx3JEtYghhQjypcOhGYZwseWHO6yewfxfrphAzRjJJKm7%2BupLm08a5oNEv6TlpWFAjZaC4Hs1ZX4g3qKLfPNqQ%2Fbp7ekvQchuf%2BjpiT6ppWp1zbLKUXpzLmhM1G3YNUDr6fP&X-Amz-Signature=a41566af7ae89b22772378d1605a9dd96d930d67369e10543bea271279f56063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOSOHM7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAu%2Bpe42f0Y3eDsILI5jmUEkH1TCob4PWz1ensrXwf4RAiEA8AMEoayybhr6BZsHIC%2BHPV3Rx4xB9pGohvo6nYX%2B0UQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBn5jMkjs7hNEZeRXircA8hjWVwm2ak60yvTexhHstKyMOotrogjhRHt56GFwM16eQzJ%2FdEGvFF1b2s0lhtdeKf5xTI9ZepCcArRW1fprzVKNBGyorSMtYzzK7smkxkYcNliAzuW4oWVnp9LH%2Bo3DtLYGwWSE3t6Fvsyg%2BxcXCyPgA1%2F6jm2HLoo%2BKk4qbNIGaCdEShw0GTVdG6gMzloqmVXJliqXYKIVqsGBVNgTfbFCB4d4i2rtXmwTCMxtgpOJfLbH%2FpJCUnYXjtXX5tOTyka%2B0hvEPY4%2BEsIz%2FMmymX%2F4FL9nrThYVWuxv%2BAcHJS1YyTfCfgzTgw26JS0OJSehQrR39Zw282DTpwjnJTifI7TM8uHE60hPZD06GRiuxi3%2Bl6RyaYGnDidfTbI155F7VKqGfbwTeIrG3YbcuQVre6pvRmqMsEBfVtnwO%2FR2nTdkjbGLFu2U6UonZi3V9Aya40p7BNKU37quHO57Xb6z5musNYTTH0mZPkD4fMg8SOrSK5Ash4Bh39L76VwOK2DyW%2FQ4UWS4lXgEGOazy0uXtvxo77C%2FfXbpQGrD2NqM0aQZq8w52q7cMM8%2Fbg0nXMzpfAslRfaBkg1PWeTwR2%2FUR9PHuMTHr6uTVoPGZRtywf6TMuMOWMwPZM9z8hMOWridQGOqUBFjfaEwDVLrqIAqlqdXsyrmgJ64W8FC8o2vIssFy9wpZvscd7h3%2BxD5ESyIxSNIXi54QGYi5PSOUxAA9AiemWW0ZZyx3JEtYghhQjypcOhGYZwseWHO6yewfxfrphAzRjJJKm7%2BupLm08a5oNEv6TlpWFAjZaC4Hs1ZX4g3qKLfPNqQ%2Fbp7ekvQchuf%2BjpiT6ppWp1zbLKUXpzLmhM1G3YNUDr6fP&X-Amz-Signature=04fbf68ddf2537ee8ebd6a0891d59e9581d31ccb590fabb1f97cf89db14b2582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOSOHM7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAu%2Bpe42f0Y3eDsILI5jmUEkH1TCob4PWz1ensrXwf4RAiEA8AMEoayybhr6BZsHIC%2BHPV3Rx4xB9pGohvo6nYX%2B0UQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBn5jMkjs7hNEZeRXircA8hjWVwm2ak60yvTexhHstKyMOotrogjhRHt56GFwM16eQzJ%2FdEGvFF1b2s0lhtdeKf5xTI9ZepCcArRW1fprzVKNBGyorSMtYzzK7smkxkYcNliAzuW4oWVnp9LH%2Bo3DtLYGwWSE3t6Fvsyg%2BxcXCyPgA1%2F6jm2HLoo%2BKk4qbNIGaCdEShw0GTVdG6gMzloqmVXJliqXYKIVqsGBVNgTfbFCB4d4i2rtXmwTCMxtgpOJfLbH%2FpJCUnYXjtXX5tOTyka%2B0hvEPY4%2BEsIz%2FMmymX%2F4FL9nrThYVWuxv%2BAcHJS1YyTfCfgzTgw26JS0OJSehQrR39Zw282DTpwjnJTifI7TM8uHE60hPZD06GRiuxi3%2Bl6RyaYGnDidfTbI155F7VKqGfbwTeIrG3YbcuQVre6pvRmqMsEBfVtnwO%2FR2nTdkjbGLFu2U6UonZi3V9Aya40p7BNKU37quHO57Xb6z5musNYTTH0mZPkD4fMg8SOrSK5Ash4Bh39L76VwOK2DyW%2FQ4UWS4lXgEGOazy0uXtvxo77C%2FfXbpQGrD2NqM0aQZq8w52q7cMM8%2Fbg0nXMzpfAslRfaBkg1PWeTwR2%2FUR9PHuMTHr6uTVoPGZRtywf6TMuMOWMwPZM9z8hMOWridQGOqUBFjfaEwDVLrqIAqlqdXsyrmgJ64W8FC8o2vIssFy9wpZvscd7h3%2BxD5ESyIxSNIXi54QGYi5PSOUxAA9AiemWW0ZZyx3JEtYghhQjypcOhGYZwseWHO6yewfxfrphAzRjJJKm7%2BupLm08a5oNEv6TlpWFAjZaC4Hs1ZX4g3qKLfPNqQ%2Fbp7ekvQchuf%2BjpiT6ppWp1zbLKUXpzLmhM1G3YNUDr6fP&X-Amz-Signature=5ea7311e7660740950384d844f8b581caa711488acd56f853e49a443ac8cfebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOSOHM7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAu%2Bpe42f0Y3eDsILI5jmUEkH1TCob4PWz1ensrXwf4RAiEA8AMEoayybhr6BZsHIC%2BHPV3Rx4xB9pGohvo6nYX%2B0UQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBn5jMkjs7hNEZeRXircA8hjWVwm2ak60yvTexhHstKyMOotrogjhRHt56GFwM16eQzJ%2FdEGvFF1b2s0lhtdeKf5xTI9ZepCcArRW1fprzVKNBGyorSMtYzzK7smkxkYcNliAzuW4oWVnp9LH%2Bo3DtLYGwWSE3t6Fvsyg%2BxcXCyPgA1%2F6jm2HLoo%2BKk4qbNIGaCdEShw0GTVdG6gMzloqmVXJliqXYKIVqsGBVNgTfbFCB4d4i2rtXmwTCMxtgpOJfLbH%2FpJCUnYXjtXX5tOTyka%2B0hvEPY4%2BEsIz%2FMmymX%2F4FL9nrThYVWuxv%2BAcHJS1YyTfCfgzTgw26JS0OJSehQrR39Zw282DTpwjnJTifI7TM8uHE60hPZD06GRiuxi3%2Bl6RyaYGnDidfTbI155F7VKqGfbwTeIrG3YbcuQVre6pvRmqMsEBfVtnwO%2FR2nTdkjbGLFu2U6UonZi3V9Aya40p7BNKU37quHO57Xb6z5musNYTTH0mZPkD4fMg8SOrSK5Ash4Bh39L76VwOK2DyW%2FQ4UWS4lXgEGOazy0uXtvxo77C%2FfXbpQGrD2NqM0aQZq8w52q7cMM8%2Fbg0nXMzpfAslRfaBkg1PWeTwR2%2FUR9PHuMTHr6uTVoPGZRtywf6TMuMOWMwPZM9z8hMOWridQGOqUBFjfaEwDVLrqIAqlqdXsyrmgJ64W8FC8o2vIssFy9wpZvscd7h3%2BxD5ESyIxSNIXi54QGYi5PSOUxAA9AiemWW0ZZyx3JEtYghhQjypcOhGYZwseWHO6yewfxfrphAzRjJJKm7%2BupLm08a5oNEv6TlpWFAjZaC4Hs1ZX4g3qKLfPNqQ%2Fbp7ekvQchuf%2BjpiT6ppWp1zbLKUXpzLmhM1G3YNUDr6fP&X-Amz-Signature=914593aff4132dac1e6bba7b6f64b86b17f20b473c12a1bc95108442a94cffdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


