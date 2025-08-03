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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DK5UG5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL7Y%2FFPW12T5hUl2%2Fs%2FRoYi4CkiT651xEkyf4WOBYMiQIhAJ%2F65PUh56%2B1VejF8fu%2Fkqsb00euJrUNlxtB%2F%2FbrbZJiKv8DCC8QABoMNjM3NDIzMTgzODA1IgyyvruLExuBlwRMY0Aq3AODzDIHfZUaac3jzI2nYIbwewjWKSl76gLtXChImcYvww46ndyJ%2F%2FtrEC7kO2QcR112iD9HJ9Nr0F%2Bw6Z6DCdZzkXBJcdt0bqTgrGaYukp5ESGbT4mJQcfsSgKlRr4Z7UzbLivd0uNJjmHDxOBPjENYrrUwaW1bNP4y7zWS7%2Bh1Td1pXbzlpPHP3HjaE7ZtL3g8JGkQP9pd4zHbDeiu1lOiqD6Mk9M9fcuDrnL9FS2AGZYu84woQp1W2FhAeBLalIU9LF8KvfWLMu0OKoQzghNoSiZ10yF%2FUvVLR23F4I9Gpv5RiiFFO%2FroasGbeS8N2TEL071Xc7qJAPjlL9Bn5XB9%2BuwgpHP2Dw%2BjFU7bnCmcqMWc1JfgXLwPRS7d6SGWYQ3dOnRrkHT%2BMdpynfMUm4oYNPRtNbHYEvFupXgkt3VRKws4qsH7DsIx0atTQtwLnCEN1Q49IQxs7QcyK%2FWzboEylG78EYZ76C9XcWgx6Fx6tvKi0m56BruKs9Jud6pDwiZuy8%2BWZr%2FlZUNwYg4cdFhl8X4R95KyMb0%2BWkn5ONup72OqXmE1LJUDrkdHe0RUO8oBnA10qyfhpz%2B316YAfTwTUwgPM3VYOm0tVZ1Xjazm27XrD0kATsiXqM39PDDQ0r3EBjqkAWI6jbjV8hkYb0mtKPpGQ9FCRDaYtp4PE5QLTBcv7tTXZr66LN%2Bcx83iWt0rSzVMOvWNEFTXa7XAex8cFOy9WTHof7x2mcnxGBgDYDxzExkSSPIGvztx%2FZYF9rYy%2B3OLc6Ryi2MB64M%2ByUvbPxM3HO1qv%2FZOS2OCJKnJnP87IaDNVg49gosXgeKVY816v5gic6ucywLIJWpvrORisLBvOPdXLkqv&X-Amz-Signature=723656fe5c87a22f5767ff4ce9ca246476b9809e1d9bae7a4b372ef2443adae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DK5UG5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL7Y%2FFPW12T5hUl2%2Fs%2FRoYi4CkiT651xEkyf4WOBYMiQIhAJ%2F65PUh56%2B1VejF8fu%2Fkqsb00euJrUNlxtB%2F%2FbrbZJiKv8DCC8QABoMNjM3NDIzMTgzODA1IgyyvruLExuBlwRMY0Aq3AODzDIHfZUaac3jzI2nYIbwewjWKSl76gLtXChImcYvww46ndyJ%2F%2FtrEC7kO2QcR112iD9HJ9Nr0F%2Bw6Z6DCdZzkXBJcdt0bqTgrGaYukp5ESGbT4mJQcfsSgKlRr4Z7UzbLivd0uNJjmHDxOBPjENYrrUwaW1bNP4y7zWS7%2Bh1Td1pXbzlpPHP3HjaE7ZtL3g8JGkQP9pd4zHbDeiu1lOiqD6Mk9M9fcuDrnL9FS2AGZYu84woQp1W2FhAeBLalIU9LF8KvfWLMu0OKoQzghNoSiZ10yF%2FUvVLR23F4I9Gpv5RiiFFO%2FroasGbeS8N2TEL071Xc7qJAPjlL9Bn5XB9%2BuwgpHP2Dw%2BjFU7bnCmcqMWc1JfgXLwPRS7d6SGWYQ3dOnRrkHT%2BMdpynfMUm4oYNPRtNbHYEvFupXgkt3VRKws4qsH7DsIx0atTQtwLnCEN1Q49IQxs7QcyK%2FWzboEylG78EYZ76C9XcWgx6Fx6tvKi0m56BruKs9Jud6pDwiZuy8%2BWZr%2FlZUNwYg4cdFhl8X4R95KyMb0%2BWkn5ONup72OqXmE1LJUDrkdHe0RUO8oBnA10qyfhpz%2B316YAfTwTUwgPM3VYOm0tVZ1Xjazm27XrD0kATsiXqM39PDDQ0r3EBjqkAWI6jbjV8hkYb0mtKPpGQ9FCRDaYtp4PE5QLTBcv7tTXZr66LN%2Bcx83iWt0rSzVMOvWNEFTXa7XAex8cFOy9WTHof7x2mcnxGBgDYDxzExkSSPIGvztx%2FZYF9rYy%2B3OLc6Ryi2MB64M%2ByUvbPxM3HO1qv%2FZOS2OCJKnJnP87IaDNVg49gosXgeKVY816v5gic6ucywLIJWpvrORisLBvOPdXLkqv&X-Amz-Signature=8c156f7ab2bcdba649edf3d4b13bdbd6ac50ce85dda8c3f7472b5fff2b3da5a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DK5UG5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL7Y%2FFPW12T5hUl2%2Fs%2FRoYi4CkiT651xEkyf4WOBYMiQIhAJ%2F65PUh56%2B1VejF8fu%2Fkqsb00euJrUNlxtB%2F%2FbrbZJiKv8DCC8QABoMNjM3NDIzMTgzODA1IgyyvruLExuBlwRMY0Aq3AODzDIHfZUaac3jzI2nYIbwewjWKSl76gLtXChImcYvww46ndyJ%2F%2FtrEC7kO2QcR112iD9HJ9Nr0F%2Bw6Z6DCdZzkXBJcdt0bqTgrGaYukp5ESGbT4mJQcfsSgKlRr4Z7UzbLivd0uNJjmHDxOBPjENYrrUwaW1bNP4y7zWS7%2Bh1Td1pXbzlpPHP3HjaE7ZtL3g8JGkQP9pd4zHbDeiu1lOiqD6Mk9M9fcuDrnL9FS2AGZYu84woQp1W2FhAeBLalIU9LF8KvfWLMu0OKoQzghNoSiZ10yF%2FUvVLR23F4I9Gpv5RiiFFO%2FroasGbeS8N2TEL071Xc7qJAPjlL9Bn5XB9%2BuwgpHP2Dw%2BjFU7bnCmcqMWc1JfgXLwPRS7d6SGWYQ3dOnRrkHT%2BMdpynfMUm4oYNPRtNbHYEvFupXgkt3VRKws4qsH7DsIx0atTQtwLnCEN1Q49IQxs7QcyK%2FWzboEylG78EYZ76C9XcWgx6Fx6tvKi0m56BruKs9Jud6pDwiZuy8%2BWZr%2FlZUNwYg4cdFhl8X4R95KyMb0%2BWkn5ONup72OqXmE1LJUDrkdHe0RUO8oBnA10qyfhpz%2B316YAfTwTUwgPM3VYOm0tVZ1Xjazm27XrD0kATsiXqM39PDDQ0r3EBjqkAWI6jbjV8hkYb0mtKPpGQ9FCRDaYtp4PE5QLTBcv7tTXZr66LN%2Bcx83iWt0rSzVMOvWNEFTXa7XAex8cFOy9WTHof7x2mcnxGBgDYDxzExkSSPIGvztx%2FZYF9rYy%2B3OLc6Ryi2MB64M%2ByUvbPxM3HO1qv%2FZOS2OCJKnJnP87IaDNVg49gosXgeKVY816v5gic6ucywLIJWpvrORisLBvOPdXLkqv&X-Amz-Signature=c57bcebf0afb3c9f7419e5767bfd0df6b5a5d577227bf5943aaa94e292b46b55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DK5UG5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL7Y%2FFPW12T5hUl2%2Fs%2FRoYi4CkiT651xEkyf4WOBYMiQIhAJ%2F65PUh56%2B1VejF8fu%2Fkqsb00euJrUNlxtB%2F%2FbrbZJiKv8DCC8QABoMNjM3NDIzMTgzODA1IgyyvruLExuBlwRMY0Aq3AODzDIHfZUaac3jzI2nYIbwewjWKSl76gLtXChImcYvww46ndyJ%2F%2FtrEC7kO2QcR112iD9HJ9Nr0F%2Bw6Z6DCdZzkXBJcdt0bqTgrGaYukp5ESGbT4mJQcfsSgKlRr4Z7UzbLivd0uNJjmHDxOBPjENYrrUwaW1bNP4y7zWS7%2Bh1Td1pXbzlpPHP3HjaE7ZtL3g8JGkQP9pd4zHbDeiu1lOiqD6Mk9M9fcuDrnL9FS2AGZYu84woQp1W2FhAeBLalIU9LF8KvfWLMu0OKoQzghNoSiZ10yF%2FUvVLR23F4I9Gpv5RiiFFO%2FroasGbeS8N2TEL071Xc7qJAPjlL9Bn5XB9%2BuwgpHP2Dw%2BjFU7bnCmcqMWc1JfgXLwPRS7d6SGWYQ3dOnRrkHT%2BMdpynfMUm4oYNPRtNbHYEvFupXgkt3VRKws4qsH7DsIx0atTQtwLnCEN1Q49IQxs7QcyK%2FWzboEylG78EYZ76C9XcWgx6Fx6tvKi0m56BruKs9Jud6pDwiZuy8%2BWZr%2FlZUNwYg4cdFhl8X4R95KyMb0%2BWkn5ONup72OqXmE1LJUDrkdHe0RUO8oBnA10qyfhpz%2B316YAfTwTUwgPM3VYOm0tVZ1Xjazm27XrD0kATsiXqM39PDDQ0r3EBjqkAWI6jbjV8hkYb0mtKPpGQ9FCRDaYtp4PE5QLTBcv7tTXZr66LN%2Bcx83iWt0rSzVMOvWNEFTXa7XAex8cFOy9WTHof7x2mcnxGBgDYDxzExkSSPIGvztx%2FZYF9rYy%2B3OLc6Ryi2MB64M%2ByUvbPxM3HO1qv%2FZOS2OCJKnJnP87IaDNVg49gosXgeKVY816v5gic6ucywLIJWpvrORisLBvOPdXLkqv&X-Amz-Signature=87507a7056b3859212cf501e4480e8c268a298658c0471684335389012020155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HLNKVM4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDH2Yr5KSOu4xH%2FtWDvhTYGTXfMYrD4Br0Y6TYrR6xOAAiEAj%2Ftunj62p%2BeU0LTs%2BR8n0PR4Ukf9Uw0G9AwNTZJF1YAq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDG9UQP7OzbSnqpqxFSrcA7Gsoas5N6L7EdKbLcbdc%2FxIDF%2FKDNCe04F9TbxxFezi4%2FV77oqfNvQYOAaKTaUMhhAVLfTQoEnjpkYekwcpOTpDJM9o1NV0Ui9iKbUYw8eMPmAejXGw9YoUTXbzEABvu%2B5iJzEYs0OllXDbKqLCRQcIvcCxceRX7bCP6BWeUf1%2BMpFOH73LPViY%2FmZ9ap8EXXBVcB9sVRFGcde%2BImANZjVYXMZcCyJiUGfwOvJZp3voj6UN6KFEg5DL61XpdQLR0hUYyCMuMviAj3wFj5jO07YP%2Bwy1DJy8txYLSGL2%2BIbfAqegjqGjvh5%2FxWeU0fPaxR0YXclDMgHed1rNg4q9%2BtV9BKvSNm8%2FHBMVYle%2FXdXXG7x2kxqZ2NDr%2FUHmCbLKWTx5M5NGkHtg5fc4ShXRAZiJxER6IuprdH2%2Fgqjp%2Fbt5rRU7LTvSZ8G5RZznkQvTZTUJuWG3fU6qo1p3Fv0Ak52WH2eqM1AH2k1TH5I41TxrYIekAhxiQ9Hfma5F0pqcc1kvH4YkxjYWrk7TjrdK7wf9TegU%2Bgbc2MjgsxIUkcmKgH5kp%2FTiW4fJABiBYIWyEJYlzTtv6xVJ8GQBHYzOD86XJNBVJ204R4h%2FoPlbwD7YEmil8eu1iAFooWJfMLDSvcQGOqUBoX3wchrGN57QpLNOWVdGTj%2B%2BCYuUJskzQKeC4SSSRkIIONTm4HXIboYJH0tLaIBlVFGjB52Wpx37lWtVlhhCP1e6kK7BzM%2BIQoJpr8Q6Wl9y0%2BING%2FYNCUP0uDBLm2hq6AC1e6L%2F2pAALDbd8KGWjoqh%2F%2F%2B4DwbycpgbBqKuujRZisrbRbm55%2F2PF%2Fx4YdZGchIRQvwMctFquLzkeFmJvLMi6rwZ&X-Amz-Signature=90ecfc02286052279802df6c500c084b731c70de94cd1c6c3dab5b57a8d67ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DK5UG5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL7Y%2FFPW12T5hUl2%2Fs%2FRoYi4CkiT651xEkyf4WOBYMiQIhAJ%2F65PUh56%2B1VejF8fu%2Fkqsb00euJrUNlxtB%2F%2FbrbZJiKv8DCC8QABoMNjM3NDIzMTgzODA1IgyyvruLExuBlwRMY0Aq3AODzDIHfZUaac3jzI2nYIbwewjWKSl76gLtXChImcYvww46ndyJ%2F%2FtrEC7kO2QcR112iD9HJ9Nr0F%2Bw6Z6DCdZzkXBJcdt0bqTgrGaYukp5ESGbT4mJQcfsSgKlRr4Z7UzbLivd0uNJjmHDxOBPjENYrrUwaW1bNP4y7zWS7%2Bh1Td1pXbzlpPHP3HjaE7ZtL3g8JGkQP9pd4zHbDeiu1lOiqD6Mk9M9fcuDrnL9FS2AGZYu84woQp1W2FhAeBLalIU9LF8KvfWLMu0OKoQzghNoSiZ10yF%2FUvVLR23F4I9Gpv5RiiFFO%2FroasGbeS8N2TEL071Xc7qJAPjlL9Bn5XB9%2BuwgpHP2Dw%2BjFU7bnCmcqMWc1JfgXLwPRS7d6SGWYQ3dOnRrkHT%2BMdpynfMUm4oYNPRtNbHYEvFupXgkt3VRKws4qsH7DsIx0atTQtwLnCEN1Q49IQxs7QcyK%2FWzboEylG78EYZ76C9XcWgx6Fx6tvKi0m56BruKs9Jud6pDwiZuy8%2BWZr%2FlZUNwYg4cdFhl8X4R95KyMb0%2BWkn5ONup72OqXmE1LJUDrkdHe0RUO8oBnA10qyfhpz%2B316YAfTwTUwgPM3VYOm0tVZ1Xjazm27XrD0kATsiXqM39PDDQ0r3EBjqkAWI6jbjV8hkYb0mtKPpGQ9FCRDaYtp4PE5QLTBcv7tTXZr66LN%2Bcx83iWt0rSzVMOvWNEFTXa7XAex8cFOy9WTHof7x2mcnxGBgDYDxzExkSSPIGvztx%2FZYF9rYy%2B3OLc6Ryi2MB64M%2ByUvbPxM3HO1qv%2FZOS2OCJKnJnP87IaDNVg49gosXgeKVY816v5gic6ucywLIJWpvrORisLBvOPdXLkqv&X-Amz-Signature=f01bdacb1b3d5e6373a0eb5f027b8f8977b517b46e080c4a3f2da8660e1ab7ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DK5UG5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL7Y%2FFPW12T5hUl2%2Fs%2FRoYi4CkiT651xEkyf4WOBYMiQIhAJ%2F65PUh56%2B1VejF8fu%2Fkqsb00euJrUNlxtB%2F%2FbrbZJiKv8DCC8QABoMNjM3NDIzMTgzODA1IgyyvruLExuBlwRMY0Aq3AODzDIHfZUaac3jzI2nYIbwewjWKSl76gLtXChImcYvww46ndyJ%2F%2FtrEC7kO2QcR112iD9HJ9Nr0F%2Bw6Z6DCdZzkXBJcdt0bqTgrGaYukp5ESGbT4mJQcfsSgKlRr4Z7UzbLivd0uNJjmHDxOBPjENYrrUwaW1bNP4y7zWS7%2Bh1Td1pXbzlpPHP3HjaE7ZtL3g8JGkQP9pd4zHbDeiu1lOiqD6Mk9M9fcuDrnL9FS2AGZYu84woQp1W2FhAeBLalIU9LF8KvfWLMu0OKoQzghNoSiZ10yF%2FUvVLR23F4I9Gpv5RiiFFO%2FroasGbeS8N2TEL071Xc7qJAPjlL9Bn5XB9%2BuwgpHP2Dw%2BjFU7bnCmcqMWc1JfgXLwPRS7d6SGWYQ3dOnRrkHT%2BMdpynfMUm4oYNPRtNbHYEvFupXgkt3VRKws4qsH7DsIx0atTQtwLnCEN1Q49IQxs7QcyK%2FWzboEylG78EYZ76C9XcWgx6Fx6tvKi0m56BruKs9Jud6pDwiZuy8%2BWZr%2FlZUNwYg4cdFhl8X4R95KyMb0%2BWkn5ONup72OqXmE1LJUDrkdHe0RUO8oBnA10qyfhpz%2B316YAfTwTUwgPM3VYOm0tVZ1Xjazm27XrD0kATsiXqM39PDDQ0r3EBjqkAWI6jbjV8hkYb0mtKPpGQ9FCRDaYtp4PE5QLTBcv7tTXZr66LN%2Bcx83iWt0rSzVMOvWNEFTXa7XAex8cFOy9WTHof7x2mcnxGBgDYDxzExkSSPIGvztx%2FZYF9rYy%2B3OLc6Ryi2MB64M%2ByUvbPxM3HO1qv%2FZOS2OCJKnJnP87IaDNVg49gosXgeKVY816v5gic6ucywLIJWpvrORisLBvOPdXLkqv&X-Amz-Signature=75dfc839f8e9046d89b25fb19e16ff0ddc8d0013f34acfda6e466940e44d16d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DK5UG5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL7Y%2FFPW12T5hUl2%2Fs%2FRoYi4CkiT651xEkyf4WOBYMiQIhAJ%2F65PUh56%2B1VejF8fu%2Fkqsb00euJrUNlxtB%2F%2FbrbZJiKv8DCC8QABoMNjM3NDIzMTgzODA1IgyyvruLExuBlwRMY0Aq3AODzDIHfZUaac3jzI2nYIbwewjWKSl76gLtXChImcYvww46ndyJ%2F%2FtrEC7kO2QcR112iD9HJ9Nr0F%2Bw6Z6DCdZzkXBJcdt0bqTgrGaYukp5ESGbT4mJQcfsSgKlRr4Z7UzbLivd0uNJjmHDxOBPjENYrrUwaW1bNP4y7zWS7%2Bh1Td1pXbzlpPHP3HjaE7ZtL3g8JGkQP9pd4zHbDeiu1lOiqD6Mk9M9fcuDrnL9FS2AGZYu84woQp1W2FhAeBLalIU9LF8KvfWLMu0OKoQzghNoSiZ10yF%2FUvVLR23F4I9Gpv5RiiFFO%2FroasGbeS8N2TEL071Xc7qJAPjlL9Bn5XB9%2BuwgpHP2Dw%2BjFU7bnCmcqMWc1JfgXLwPRS7d6SGWYQ3dOnRrkHT%2BMdpynfMUm4oYNPRtNbHYEvFupXgkt3VRKws4qsH7DsIx0atTQtwLnCEN1Q49IQxs7QcyK%2FWzboEylG78EYZ76C9XcWgx6Fx6tvKi0m56BruKs9Jud6pDwiZuy8%2BWZr%2FlZUNwYg4cdFhl8X4R95KyMb0%2BWkn5ONup72OqXmE1LJUDrkdHe0RUO8oBnA10qyfhpz%2B316YAfTwTUwgPM3VYOm0tVZ1Xjazm27XrD0kATsiXqM39PDDQ0r3EBjqkAWI6jbjV8hkYb0mtKPpGQ9FCRDaYtp4PE5QLTBcv7tTXZr66LN%2Bcx83iWt0rSzVMOvWNEFTXa7XAex8cFOy9WTHof7x2mcnxGBgDYDxzExkSSPIGvztx%2FZYF9rYy%2B3OLc6Ryi2MB64M%2ByUvbPxM3HO1qv%2FZOS2OCJKnJnP87IaDNVg49gosXgeKVY816v5gic6ucywLIJWpvrORisLBvOPdXLkqv&X-Amz-Signature=1d0422482412dca7863e3cc1b59d7a89ad3618509788849998a70d48e7599266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DK5UG5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL7Y%2FFPW12T5hUl2%2Fs%2FRoYi4CkiT651xEkyf4WOBYMiQIhAJ%2F65PUh56%2B1VejF8fu%2Fkqsb00euJrUNlxtB%2F%2FbrbZJiKv8DCC8QABoMNjM3NDIzMTgzODA1IgyyvruLExuBlwRMY0Aq3AODzDIHfZUaac3jzI2nYIbwewjWKSl76gLtXChImcYvww46ndyJ%2F%2FtrEC7kO2QcR112iD9HJ9Nr0F%2Bw6Z6DCdZzkXBJcdt0bqTgrGaYukp5ESGbT4mJQcfsSgKlRr4Z7UzbLivd0uNJjmHDxOBPjENYrrUwaW1bNP4y7zWS7%2Bh1Td1pXbzlpPHP3HjaE7ZtL3g8JGkQP9pd4zHbDeiu1lOiqD6Mk9M9fcuDrnL9FS2AGZYu84woQp1W2FhAeBLalIU9LF8KvfWLMu0OKoQzghNoSiZ10yF%2FUvVLR23F4I9Gpv5RiiFFO%2FroasGbeS8N2TEL071Xc7qJAPjlL9Bn5XB9%2BuwgpHP2Dw%2BjFU7bnCmcqMWc1JfgXLwPRS7d6SGWYQ3dOnRrkHT%2BMdpynfMUm4oYNPRtNbHYEvFupXgkt3VRKws4qsH7DsIx0atTQtwLnCEN1Q49IQxs7QcyK%2FWzboEylG78EYZ76C9XcWgx6Fx6tvKi0m56BruKs9Jud6pDwiZuy8%2BWZr%2FlZUNwYg4cdFhl8X4R95KyMb0%2BWkn5ONup72OqXmE1LJUDrkdHe0RUO8oBnA10qyfhpz%2B316YAfTwTUwgPM3VYOm0tVZ1Xjazm27XrD0kATsiXqM39PDDQ0r3EBjqkAWI6jbjV8hkYb0mtKPpGQ9FCRDaYtp4PE5QLTBcv7tTXZr66LN%2Bcx83iWt0rSzVMOvWNEFTXa7XAex8cFOy9WTHof7x2mcnxGBgDYDxzExkSSPIGvztx%2FZYF9rYy%2B3OLc6Ryi2MB64M%2ByUvbPxM3HO1qv%2FZOS2OCJKnJnP87IaDNVg49gosXgeKVY816v5gic6ucywLIJWpvrORisLBvOPdXLkqv&X-Amz-Signature=d0fc24797993ffafc80e4ab7116dde5129f1fb1580d7a31329140bacb8779da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DK5UG5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL7Y%2FFPW12T5hUl2%2Fs%2FRoYi4CkiT651xEkyf4WOBYMiQIhAJ%2F65PUh56%2B1VejF8fu%2Fkqsb00euJrUNlxtB%2F%2FbrbZJiKv8DCC8QABoMNjM3NDIzMTgzODA1IgyyvruLExuBlwRMY0Aq3AODzDIHfZUaac3jzI2nYIbwewjWKSl76gLtXChImcYvww46ndyJ%2F%2FtrEC7kO2QcR112iD9HJ9Nr0F%2Bw6Z6DCdZzkXBJcdt0bqTgrGaYukp5ESGbT4mJQcfsSgKlRr4Z7UzbLivd0uNJjmHDxOBPjENYrrUwaW1bNP4y7zWS7%2Bh1Td1pXbzlpPHP3HjaE7ZtL3g8JGkQP9pd4zHbDeiu1lOiqD6Mk9M9fcuDrnL9FS2AGZYu84woQp1W2FhAeBLalIU9LF8KvfWLMu0OKoQzghNoSiZ10yF%2FUvVLR23F4I9Gpv5RiiFFO%2FroasGbeS8N2TEL071Xc7qJAPjlL9Bn5XB9%2BuwgpHP2Dw%2BjFU7bnCmcqMWc1JfgXLwPRS7d6SGWYQ3dOnRrkHT%2BMdpynfMUm4oYNPRtNbHYEvFupXgkt3VRKws4qsH7DsIx0atTQtwLnCEN1Q49IQxs7QcyK%2FWzboEylG78EYZ76C9XcWgx6Fx6tvKi0m56BruKs9Jud6pDwiZuy8%2BWZr%2FlZUNwYg4cdFhl8X4R95KyMb0%2BWkn5ONup72OqXmE1LJUDrkdHe0RUO8oBnA10qyfhpz%2B316YAfTwTUwgPM3VYOm0tVZ1Xjazm27XrD0kATsiXqM39PDDQ0r3EBjqkAWI6jbjV8hkYb0mtKPpGQ9FCRDaYtp4PE5QLTBcv7tTXZr66LN%2Bcx83iWt0rSzVMOvWNEFTXa7XAex8cFOy9WTHof7x2mcnxGBgDYDxzExkSSPIGvztx%2FZYF9rYy%2B3OLc6Ryi2MB64M%2ByUvbPxM3HO1qv%2FZOS2OCJKnJnP87IaDNVg49gosXgeKVY816v5gic6ucywLIJWpvrORisLBvOPdXLkqv&X-Amz-Signature=5c7ae6761fd4f1021d115c46dd3b52c00067302350a6fa9d034e1dec81c5707c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DK5UG5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL7Y%2FFPW12T5hUl2%2Fs%2FRoYi4CkiT651xEkyf4WOBYMiQIhAJ%2F65PUh56%2B1VejF8fu%2Fkqsb00euJrUNlxtB%2F%2FbrbZJiKv8DCC8QABoMNjM3NDIzMTgzODA1IgyyvruLExuBlwRMY0Aq3AODzDIHfZUaac3jzI2nYIbwewjWKSl76gLtXChImcYvww46ndyJ%2F%2FtrEC7kO2QcR112iD9HJ9Nr0F%2Bw6Z6DCdZzkXBJcdt0bqTgrGaYukp5ESGbT4mJQcfsSgKlRr4Z7UzbLivd0uNJjmHDxOBPjENYrrUwaW1bNP4y7zWS7%2Bh1Td1pXbzlpPHP3HjaE7ZtL3g8JGkQP9pd4zHbDeiu1lOiqD6Mk9M9fcuDrnL9FS2AGZYu84woQp1W2FhAeBLalIU9LF8KvfWLMu0OKoQzghNoSiZ10yF%2FUvVLR23F4I9Gpv5RiiFFO%2FroasGbeS8N2TEL071Xc7qJAPjlL9Bn5XB9%2BuwgpHP2Dw%2BjFU7bnCmcqMWc1JfgXLwPRS7d6SGWYQ3dOnRrkHT%2BMdpynfMUm4oYNPRtNbHYEvFupXgkt3VRKws4qsH7DsIx0atTQtwLnCEN1Q49IQxs7QcyK%2FWzboEylG78EYZ76C9XcWgx6Fx6tvKi0m56BruKs9Jud6pDwiZuy8%2BWZr%2FlZUNwYg4cdFhl8X4R95KyMb0%2BWkn5ONup72OqXmE1LJUDrkdHe0RUO8oBnA10qyfhpz%2B316YAfTwTUwgPM3VYOm0tVZ1Xjazm27XrD0kATsiXqM39PDDQ0r3EBjqkAWI6jbjV8hkYb0mtKPpGQ9FCRDaYtp4PE5QLTBcv7tTXZr66LN%2Bcx83iWt0rSzVMOvWNEFTXa7XAex8cFOy9WTHof7x2mcnxGBgDYDxzExkSSPIGvztx%2FZYF9rYy%2B3OLc6Ryi2MB64M%2ByUvbPxM3HO1qv%2FZOS2OCJKnJnP87IaDNVg49gosXgeKVY816v5gic6ucywLIJWpvrORisLBvOPdXLkqv&X-Amz-Signature=4b2c8becb17688559f8903ec0fc290199a2afbb2b6e75d5ee69ed483e3d48a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
