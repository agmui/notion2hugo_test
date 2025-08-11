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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIXC5IC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4MdYT0ajv%2FdSGvW1RpCOtsKw4xwJ%2FKCJeNOxGctJaKAiBtB%2FS7d5oySmidy04zXvs2yWoL9rWjujTZ2RNUiNNY4SqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQda%2FfdukzhJHdr%2FnKtwDdbAuuyFoKu0GasLs%2BVi64d4G9mixhXjsP2GUec8fteF%2BjPlyxT5yukNaKA9UQdiU3Jks%2FARKbedDPemMhIlZPP8m4jIzc5A3g5vy6ztgHSk3YBXmkJhWdWSjUti5ZhSpS6PPJYIn8qTUx1r%2B%2FSNU1vxerBEnjGRqbEDxipS2xFEaKKTQgEIB%2Fl6LH8mXBmeu31wF%2B56oDNEpSNOfnHd5IV%2BH1OJLLgFxsE8avonP0LRTXwHLAX8YCJbeaerkTxnabMpKnaobVV34xEV7hD1o4thdycObSRf53ZblMb8%2FUQwAflLeZlsdxWvLr5zuxKMMh1NEMR23hBSI8vGCh4gp4rJSi5S4hCEFStADrkGsm0reb5lpLHCaEVCdnUguHjG1Xzw6cXBcm6MO0rpcow3q1yMZP41VfAm6ObGt3ELEI51PK2gjbg2HoPJL1o%2BSIQdphGPV%2Bab8ASx7gr%2BKKdtdMPTHzMXW73KsNi7eOHkMiW4m83ET0zT8nVRMD6keJd%2BESzwtiR67tXQaw34n5%2FXcWVNkcJ3lxpqPIIeajjyG7FFexb0VyXMjiXELXfrV5FN4G2JuJiyaXyDZQNDxAn%2BuUZ92%2FDdjz3l7nIVbuCgrqimHojAJlcEuMH%2BVJzAw6fjmxAY6pgF2ffDDXn%2BERV7TY334rkqCKiB%2BCY%2BkyPoRzIvmRWWCTEBUDG0seXuBXZ8GdQan5HykcslmMZiIxM3XFb1GGg21p2h5eCabfjigTQqGeO5Kj37huVWPXWa4BnzfEZu7oEpl42Xrtk4DfEPeHVhrMCWH2pkwvZgF%2B8H%2Bp6DnsJQNyDJx68B7IDIRF9uQP6KUzAXZQ8N3pbY4QpgFGrTFB78yVuiIN5Ue&X-Amz-Signature=4644414398422112020146b50af4e839476737fe1a68ef115d843c034c55e6dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIXC5IC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4MdYT0ajv%2FdSGvW1RpCOtsKw4xwJ%2FKCJeNOxGctJaKAiBtB%2FS7d5oySmidy04zXvs2yWoL9rWjujTZ2RNUiNNY4SqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQda%2FfdukzhJHdr%2FnKtwDdbAuuyFoKu0GasLs%2BVi64d4G9mixhXjsP2GUec8fteF%2BjPlyxT5yukNaKA9UQdiU3Jks%2FARKbedDPemMhIlZPP8m4jIzc5A3g5vy6ztgHSk3YBXmkJhWdWSjUti5ZhSpS6PPJYIn8qTUx1r%2B%2FSNU1vxerBEnjGRqbEDxipS2xFEaKKTQgEIB%2Fl6LH8mXBmeu31wF%2B56oDNEpSNOfnHd5IV%2BH1OJLLgFxsE8avonP0LRTXwHLAX8YCJbeaerkTxnabMpKnaobVV34xEV7hD1o4thdycObSRf53ZblMb8%2FUQwAflLeZlsdxWvLr5zuxKMMh1NEMR23hBSI8vGCh4gp4rJSi5S4hCEFStADrkGsm0reb5lpLHCaEVCdnUguHjG1Xzw6cXBcm6MO0rpcow3q1yMZP41VfAm6ObGt3ELEI51PK2gjbg2HoPJL1o%2BSIQdphGPV%2Bab8ASx7gr%2BKKdtdMPTHzMXW73KsNi7eOHkMiW4m83ET0zT8nVRMD6keJd%2BESzwtiR67tXQaw34n5%2FXcWVNkcJ3lxpqPIIeajjyG7FFexb0VyXMjiXELXfrV5FN4G2JuJiyaXyDZQNDxAn%2BuUZ92%2FDdjz3l7nIVbuCgrqimHojAJlcEuMH%2BVJzAw6fjmxAY6pgF2ffDDXn%2BERV7TY334rkqCKiB%2BCY%2BkyPoRzIvmRWWCTEBUDG0seXuBXZ8GdQan5HykcslmMZiIxM3XFb1GGg21p2h5eCabfjigTQqGeO5Kj37huVWPXWa4BnzfEZu7oEpl42Xrtk4DfEPeHVhrMCWH2pkwvZgF%2B8H%2Bp6DnsJQNyDJx68B7IDIRF9uQP6KUzAXZQ8N3pbY4QpgFGrTFB78yVuiIN5Ue&X-Amz-Signature=436e21eefeec918ce4c0b9b49e07333539aec767f7e39c119ba3457fdf27b9b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIXC5IC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4MdYT0ajv%2FdSGvW1RpCOtsKw4xwJ%2FKCJeNOxGctJaKAiBtB%2FS7d5oySmidy04zXvs2yWoL9rWjujTZ2RNUiNNY4SqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQda%2FfdukzhJHdr%2FnKtwDdbAuuyFoKu0GasLs%2BVi64d4G9mixhXjsP2GUec8fteF%2BjPlyxT5yukNaKA9UQdiU3Jks%2FARKbedDPemMhIlZPP8m4jIzc5A3g5vy6ztgHSk3YBXmkJhWdWSjUti5ZhSpS6PPJYIn8qTUx1r%2B%2FSNU1vxerBEnjGRqbEDxipS2xFEaKKTQgEIB%2Fl6LH8mXBmeu31wF%2B56oDNEpSNOfnHd5IV%2BH1OJLLgFxsE8avonP0LRTXwHLAX8YCJbeaerkTxnabMpKnaobVV34xEV7hD1o4thdycObSRf53ZblMb8%2FUQwAflLeZlsdxWvLr5zuxKMMh1NEMR23hBSI8vGCh4gp4rJSi5S4hCEFStADrkGsm0reb5lpLHCaEVCdnUguHjG1Xzw6cXBcm6MO0rpcow3q1yMZP41VfAm6ObGt3ELEI51PK2gjbg2HoPJL1o%2BSIQdphGPV%2Bab8ASx7gr%2BKKdtdMPTHzMXW73KsNi7eOHkMiW4m83ET0zT8nVRMD6keJd%2BESzwtiR67tXQaw34n5%2FXcWVNkcJ3lxpqPIIeajjyG7FFexb0VyXMjiXELXfrV5FN4G2JuJiyaXyDZQNDxAn%2BuUZ92%2FDdjz3l7nIVbuCgrqimHojAJlcEuMH%2BVJzAw6fjmxAY6pgF2ffDDXn%2BERV7TY334rkqCKiB%2BCY%2BkyPoRzIvmRWWCTEBUDG0seXuBXZ8GdQan5HykcslmMZiIxM3XFb1GGg21p2h5eCabfjigTQqGeO5Kj37huVWPXWa4BnzfEZu7oEpl42Xrtk4DfEPeHVhrMCWH2pkwvZgF%2B8H%2Bp6DnsJQNyDJx68B7IDIRF9uQP6KUzAXZQ8N3pbY4QpgFGrTFB78yVuiIN5Ue&X-Amz-Signature=920c6c1f57382922ed10bb46f2d9b681d640d4717046e0e22e1a65186042dadb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIXC5IC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4MdYT0ajv%2FdSGvW1RpCOtsKw4xwJ%2FKCJeNOxGctJaKAiBtB%2FS7d5oySmidy04zXvs2yWoL9rWjujTZ2RNUiNNY4SqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQda%2FfdukzhJHdr%2FnKtwDdbAuuyFoKu0GasLs%2BVi64d4G9mixhXjsP2GUec8fteF%2BjPlyxT5yukNaKA9UQdiU3Jks%2FARKbedDPemMhIlZPP8m4jIzc5A3g5vy6ztgHSk3YBXmkJhWdWSjUti5ZhSpS6PPJYIn8qTUx1r%2B%2FSNU1vxerBEnjGRqbEDxipS2xFEaKKTQgEIB%2Fl6LH8mXBmeu31wF%2B56oDNEpSNOfnHd5IV%2BH1OJLLgFxsE8avonP0LRTXwHLAX8YCJbeaerkTxnabMpKnaobVV34xEV7hD1o4thdycObSRf53ZblMb8%2FUQwAflLeZlsdxWvLr5zuxKMMh1NEMR23hBSI8vGCh4gp4rJSi5S4hCEFStADrkGsm0reb5lpLHCaEVCdnUguHjG1Xzw6cXBcm6MO0rpcow3q1yMZP41VfAm6ObGt3ELEI51PK2gjbg2HoPJL1o%2BSIQdphGPV%2Bab8ASx7gr%2BKKdtdMPTHzMXW73KsNi7eOHkMiW4m83ET0zT8nVRMD6keJd%2BESzwtiR67tXQaw34n5%2FXcWVNkcJ3lxpqPIIeajjyG7FFexb0VyXMjiXELXfrV5FN4G2JuJiyaXyDZQNDxAn%2BuUZ92%2FDdjz3l7nIVbuCgrqimHojAJlcEuMH%2BVJzAw6fjmxAY6pgF2ffDDXn%2BERV7TY334rkqCKiB%2BCY%2BkyPoRzIvmRWWCTEBUDG0seXuBXZ8GdQan5HykcslmMZiIxM3XFb1GGg21p2h5eCabfjigTQqGeO5Kj37huVWPXWa4BnzfEZu7oEpl42Xrtk4DfEPeHVhrMCWH2pkwvZgF%2B8H%2Bp6DnsJQNyDJx68B7IDIRF9uQP6KUzAXZQ8N3pbY4QpgFGrTFB78yVuiIN5Ue&X-Amz-Signature=32ab89d00c53faffebdde970c8434d16025d9d1b9a6138252387502004cdbac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KRXSII%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz2SXH5XKmzcJAnp4DDfu0uZ9X7yOzfFirGeBzskBEfQIhAMde3S5THTF2wIBs695UQU97i2ujz1FU4wCTTRR1S8DqKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw06S8tULuY0YgXn8Mq3APA7Ncy3FBNhS2pvzMUJDY8x0A62gw7Wb45mzFgoA8Xn2Z0JTfKmEPcpmGYxcT77WStCeM9YMuNtFnT9G2rTu2Us1Wljw0NZPDx%2BsQnUgzAUcg3lcbfzmb8cGzZnh630GMqgAFpXwXzsLiJmVeNDZ1IrgkHaPqVkKTrEL2K%2FdnDO1naVUQG%2BqWUef44JOxQBQRWrplO7Ntm7sUig%2FV7%2FkhJ37Eg6YdTTW6D4BO%2FiCqL94nfeBP9qBh6MhVh16KmyVBseQk3IgiPmzeXumC01gagrKM%2F6cXWg3LcapOzMUb2K%2Bttd4aCkV1ifQ81Kue0Q3zvBXrB3ywiuscggsUWcmMXf3Y6oZilQRJr3H5sAagcNZHO3rQ3%2B6T%2BuyJVeQ7QK1EUYEXGCjDkkqMOcMpqefuW%2FVRfc9B5KrxWZMj4Yg4VXWf3ENMhFq4VGzTWyGmYmGH%2BRh8s6w0rJ8nePps7NCXIeDeRYLl076f9jUG30CkRjd%2BNphJGq1AaR6%2FvlhwLYueofobIplk%2FBGK7N%2F40OsohISGJXAn1SmcVkPncYV80TOmKq%2FWHrr8sKUWKHtDZ7v9G1w2rF04xkxFl%2Fl2NAwdR9pwViRbK2Ny3sazmBSKRjZ%2BxQSuTDNvbrQRQATDh%2BObEBjqkAda3UD8lK1AXIOJmWz%2FoC3XXgHNv1wF%2Fb0xB1OSbwKQwDUzB06iddHyzTBqd23o97zBWIDIBPUkor4T3kGqzsaUjACMR56FF9EvaQEafPGQDZQgeZZIwH244An9hidAIuzeGrCQ0f6vff%2Bza5p5KRK27MJPUTI8BdEFa5KK02jBiNzcPR9u47YUIV2Hk147i5ebWWXCvt%2FeQqPPb997jT4aOFA6k&X-Amz-Signature=4673248c76289be457c426b258ad22ff5c02b6b6f9f52f1296c5c15b54336363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIXC5IC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4MdYT0ajv%2FdSGvW1RpCOtsKw4xwJ%2FKCJeNOxGctJaKAiBtB%2FS7d5oySmidy04zXvs2yWoL9rWjujTZ2RNUiNNY4SqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQda%2FfdukzhJHdr%2FnKtwDdbAuuyFoKu0GasLs%2BVi64d4G9mixhXjsP2GUec8fteF%2BjPlyxT5yukNaKA9UQdiU3Jks%2FARKbedDPemMhIlZPP8m4jIzc5A3g5vy6ztgHSk3YBXmkJhWdWSjUti5ZhSpS6PPJYIn8qTUx1r%2B%2FSNU1vxerBEnjGRqbEDxipS2xFEaKKTQgEIB%2Fl6LH8mXBmeu31wF%2B56oDNEpSNOfnHd5IV%2BH1OJLLgFxsE8avonP0LRTXwHLAX8YCJbeaerkTxnabMpKnaobVV34xEV7hD1o4thdycObSRf53ZblMb8%2FUQwAflLeZlsdxWvLr5zuxKMMh1NEMR23hBSI8vGCh4gp4rJSi5S4hCEFStADrkGsm0reb5lpLHCaEVCdnUguHjG1Xzw6cXBcm6MO0rpcow3q1yMZP41VfAm6ObGt3ELEI51PK2gjbg2HoPJL1o%2BSIQdphGPV%2Bab8ASx7gr%2BKKdtdMPTHzMXW73KsNi7eOHkMiW4m83ET0zT8nVRMD6keJd%2BESzwtiR67tXQaw34n5%2FXcWVNkcJ3lxpqPIIeajjyG7FFexb0VyXMjiXELXfrV5FN4G2JuJiyaXyDZQNDxAn%2BuUZ92%2FDdjz3l7nIVbuCgrqimHojAJlcEuMH%2BVJzAw6fjmxAY6pgF2ffDDXn%2BERV7TY334rkqCKiB%2BCY%2BkyPoRzIvmRWWCTEBUDG0seXuBXZ8GdQan5HykcslmMZiIxM3XFb1GGg21p2h5eCabfjigTQqGeO5Kj37huVWPXWa4BnzfEZu7oEpl42Xrtk4DfEPeHVhrMCWH2pkwvZgF%2B8H%2Bp6DnsJQNyDJx68B7IDIRF9uQP6KUzAXZQ8N3pbY4QpgFGrTFB78yVuiIN5Ue&X-Amz-Signature=75ebc67dcbcf3a201989f802ce96e741b3535869d5afb01e857c04d81152a55f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIXC5IC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4MdYT0ajv%2FdSGvW1RpCOtsKw4xwJ%2FKCJeNOxGctJaKAiBtB%2FS7d5oySmidy04zXvs2yWoL9rWjujTZ2RNUiNNY4SqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQda%2FfdukzhJHdr%2FnKtwDdbAuuyFoKu0GasLs%2BVi64d4G9mixhXjsP2GUec8fteF%2BjPlyxT5yukNaKA9UQdiU3Jks%2FARKbedDPemMhIlZPP8m4jIzc5A3g5vy6ztgHSk3YBXmkJhWdWSjUti5ZhSpS6PPJYIn8qTUx1r%2B%2FSNU1vxerBEnjGRqbEDxipS2xFEaKKTQgEIB%2Fl6LH8mXBmeu31wF%2B56oDNEpSNOfnHd5IV%2BH1OJLLgFxsE8avonP0LRTXwHLAX8YCJbeaerkTxnabMpKnaobVV34xEV7hD1o4thdycObSRf53ZblMb8%2FUQwAflLeZlsdxWvLr5zuxKMMh1NEMR23hBSI8vGCh4gp4rJSi5S4hCEFStADrkGsm0reb5lpLHCaEVCdnUguHjG1Xzw6cXBcm6MO0rpcow3q1yMZP41VfAm6ObGt3ELEI51PK2gjbg2HoPJL1o%2BSIQdphGPV%2Bab8ASx7gr%2BKKdtdMPTHzMXW73KsNi7eOHkMiW4m83ET0zT8nVRMD6keJd%2BESzwtiR67tXQaw34n5%2FXcWVNkcJ3lxpqPIIeajjyG7FFexb0VyXMjiXELXfrV5FN4G2JuJiyaXyDZQNDxAn%2BuUZ92%2FDdjz3l7nIVbuCgrqimHojAJlcEuMH%2BVJzAw6fjmxAY6pgF2ffDDXn%2BERV7TY334rkqCKiB%2BCY%2BkyPoRzIvmRWWCTEBUDG0seXuBXZ8GdQan5HykcslmMZiIxM3XFb1GGg21p2h5eCabfjigTQqGeO5Kj37huVWPXWa4BnzfEZu7oEpl42Xrtk4DfEPeHVhrMCWH2pkwvZgF%2B8H%2Bp6DnsJQNyDJx68B7IDIRF9uQP6KUzAXZQ8N3pbY4QpgFGrTFB78yVuiIN5Ue&X-Amz-Signature=f3e9933f2ecbd5373ab00406f1e5ca278f9d3a50fa52faa0065d5eacd071941c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIXC5IC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4MdYT0ajv%2FdSGvW1RpCOtsKw4xwJ%2FKCJeNOxGctJaKAiBtB%2FS7d5oySmidy04zXvs2yWoL9rWjujTZ2RNUiNNY4SqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQda%2FfdukzhJHdr%2FnKtwDdbAuuyFoKu0GasLs%2BVi64d4G9mixhXjsP2GUec8fteF%2BjPlyxT5yukNaKA9UQdiU3Jks%2FARKbedDPemMhIlZPP8m4jIzc5A3g5vy6ztgHSk3YBXmkJhWdWSjUti5ZhSpS6PPJYIn8qTUx1r%2B%2FSNU1vxerBEnjGRqbEDxipS2xFEaKKTQgEIB%2Fl6LH8mXBmeu31wF%2B56oDNEpSNOfnHd5IV%2BH1OJLLgFxsE8avonP0LRTXwHLAX8YCJbeaerkTxnabMpKnaobVV34xEV7hD1o4thdycObSRf53ZblMb8%2FUQwAflLeZlsdxWvLr5zuxKMMh1NEMR23hBSI8vGCh4gp4rJSi5S4hCEFStADrkGsm0reb5lpLHCaEVCdnUguHjG1Xzw6cXBcm6MO0rpcow3q1yMZP41VfAm6ObGt3ELEI51PK2gjbg2HoPJL1o%2BSIQdphGPV%2Bab8ASx7gr%2BKKdtdMPTHzMXW73KsNi7eOHkMiW4m83ET0zT8nVRMD6keJd%2BESzwtiR67tXQaw34n5%2FXcWVNkcJ3lxpqPIIeajjyG7FFexb0VyXMjiXELXfrV5FN4G2JuJiyaXyDZQNDxAn%2BuUZ92%2FDdjz3l7nIVbuCgrqimHojAJlcEuMH%2BVJzAw6fjmxAY6pgF2ffDDXn%2BERV7TY334rkqCKiB%2BCY%2BkyPoRzIvmRWWCTEBUDG0seXuBXZ8GdQan5HykcslmMZiIxM3XFb1GGg21p2h5eCabfjigTQqGeO5Kj37huVWPXWa4BnzfEZu7oEpl42Xrtk4DfEPeHVhrMCWH2pkwvZgF%2B8H%2Bp6DnsJQNyDJx68B7IDIRF9uQP6KUzAXZQ8N3pbY4QpgFGrTFB78yVuiIN5Ue&X-Amz-Signature=ac5147d3e907e4f3bac9525ba4ceabe9b7b7d35cef46088dfe6eeb4686a3cbf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIXC5IC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4MdYT0ajv%2FdSGvW1RpCOtsKw4xwJ%2FKCJeNOxGctJaKAiBtB%2FS7d5oySmidy04zXvs2yWoL9rWjujTZ2RNUiNNY4SqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQda%2FfdukzhJHdr%2FnKtwDdbAuuyFoKu0GasLs%2BVi64d4G9mixhXjsP2GUec8fteF%2BjPlyxT5yukNaKA9UQdiU3Jks%2FARKbedDPemMhIlZPP8m4jIzc5A3g5vy6ztgHSk3YBXmkJhWdWSjUti5ZhSpS6PPJYIn8qTUx1r%2B%2FSNU1vxerBEnjGRqbEDxipS2xFEaKKTQgEIB%2Fl6LH8mXBmeu31wF%2B56oDNEpSNOfnHd5IV%2BH1OJLLgFxsE8avonP0LRTXwHLAX8YCJbeaerkTxnabMpKnaobVV34xEV7hD1o4thdycObSRf53ZblMb8%2FUQwAflLeZlsdxWvLr5zuxKMMh1NEMR23hBSI8vGCh4gp4rJSi5S4hCEFStADrkGsm0reb5lpLHCaEVCdnUguHjG1Xzw6cXBcm6MO0rpcow3q1yMZP41VfAm6ObGt3ELEI51PK2gjbg2HoPJL1o%2BSIQdphGPV%2Bab8ASx7gr%2BKKdtdMPTHzMXW73KsNi7eOHkMiW4m83ET0zT8nVRMD6keJd%2BESzwtiR67tXQaw34n5%2FXcWVNkcJ3lxpqPIIeajjyG7FFexb0VyXMjiXELXfrV5FN4G2JuJiyaXyDZQNDxAn%2BuUZ92%2FDdjz3l7nIVbuCgrqimHojAJlcEuMH%2BVJzAw6fjmxAY6pgF2ffDDXn%2BERV7TY334rkqCKiB%2BCY%2BkyPoRzIvmRWWCTEBUDG0seXuBXZ8GdQan5HykcslmMZiIxM3XFb1GGg21p2h5eCabfjigTQqGeO5Kj37huVWPXWa4BnzfEZu7oEpl42Xrtk4DfEPeHVhrMCWH2pkwvZgF%2B8H%2Bp6DnsJQNyDJx68B7IDIRF9uQP6KUzAXZQ8N3pbY4QpgFGrTFB78yVuiIN5Ue&X-Amz-Signature=3d2799a8e1b179ada92810315127ea6f97b7a7407e0c165ea60427fc72298611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIXC5IC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4MdYT0ajv%2FdSGvW1RpCOtsKw4xwJ%2FKCJeNOxGctJaKAiBtB%2FS7d5oySmidy04zXvs2yWoL9rWjujTZ2RNUiNNY4SqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQda%2FfdukzhJHdr%2FnKtwDdbAuuyFoKu0GasLs%2BVi64d4G9mixhXjsP2GUec8fteF%2BjPlyxT5yukNaKA9UQdiU3Jks%2FARKbedDPemMhIlZPP8m4jIzc5A3g5vy6ztgHSk3YBXmkJhWdWSjUti5ZhSpS6PPJYIn8qTUx1r%2B%2FSNU1vxerBEnjGRqbEDxipS2xFEaKKTQgEIB%2Fl6LH8mXBmeu31wF%2B56oDNEpSNOfnHd5IV%2BH1OJLLgFxsE8avonP0LRTXwHLAX8YCJbeaerkTxnabMpKnaobVV34xEV7hD1o4thdycObSRf53ZblMb8%2FUQwAflLeZlsdxWvLr5zuxKMMh1NEMR23hBSI8vGCh4gp4rJSi5S4hCEFStADrkGsm0reb5lpLHCaEVCdnUguHjG1Xzw6cXBcm6MO0rpcow3q1yMZP41VfAm6ObGt3ELEI51PK2gjbg2HoPJL1o%2BSIQdphGPV%2Bab8ASx7gr%2BKKdtdMPTHzMXW73KsNi7eOHkMiW4m83ET0zT8nVRMD6keJd%2BESzwtiR67tXQaw34n5%2FXcWVNkcJ3lxpqPIIeajjyG7FFexb0VyXMjiXELXfrV5FN4G2JuJiyaXyDZQNDxAn%2BuUZ92%2FDdjz3l7nIVbuCgrqimHojAJlcEuMH%2BVJzAw6fjmxAY6pgF2ffDDXn%2BERV7TY334rkqCKiB%2BCY%2BkyPoRzIvmRWWCTEBUDG0seXuBXZ8GdQan5HykcslmMZiIxM3XFb1GGg21p2h5eCabfjigTQqGeO5Kj37huVWPXWa4BnzfEZu7oEpl42Xrtk4DfEPeHVhrMCWH2pkwvZgF%2B8H%2Bp6DnsJQNyDJx68B7IDIRF9uQP6KUzAXZQ8N3pbY4QpgFGrTFB78yVuiIN5Ue&X-Amz-Signature=1f1168db0b4c73e9aa9ee3110af7b80d875adf33086810c71ca564e58fc52518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIXC5IC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4MdYT0ajv%2FdSGvW1RpCOtsKw4xwJ%2FKCJeNOxGctJaKAiBtB%2FS7d5oySmidy04zXvs2yWoL9rWjujTZ2RNUiNNY4SqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQda%2FfdukzhJHdr%2FnKtwDdbAuuyFoKu0GasLs%2BVi64d4G9mixhXjsP2GUec8fteF%2BjPlyxT5yukNaKA9UQdiU3Jks%2FARKbedDPemMhIlZPP8m4jIzc5A3g5vy6ztgHSk3YBXmkJhWdWSjUti5ZhSpS6PPJYIn8qTUx1r%2B%2FSNU1vxerBEnjGRqbEDxipS2xFEaKKTQgEIB%2Fl6LH8mXBmeu31wF%2B56oDNEpSNOfnHd5IV%2BH1OJLLgFxsE8avonP0LRTXwHLAX8YCJbeaerkTxnabMpKnaobVV34xEV7hD1o4thdycObSRf53ZblMb8%2FUQwAflLeZlsdxWvLr5zuxKMMh1NEMR23hBSI8vGCh4gp4rJSi5S4hCEFStADrkGsm0reb5lpLHCaEVCdnUguHjG1Xzw6cXBcm6MO0rpcow3q1yMZP41VfAm6ObGt3ELEI51PK2gjbg2HoPJL1o%2BSIQdphGPV%2Bab8ASx7gr%2BKKdtdMPTHzMXW73KsNi7eOHkMiW4m83ET0zT8nVRMD6keJd%2BESzwtiR67tXQaw34n5%2FXcWVNkcJ3lxpqPIIeajjyG7FFexb0VyXMjiXELXfrV5FN4G2JuJiyaXyDZQNDxAn%2BuUZ92%2FDdjz3l7nIVbuCgrqimHojAJlcEuMH%2BVJzAw6fjmxAY6pgF2ffDDXn%2BERV7TY334rkqCKiB%2BCY%2BkyPoRzIvmRWWCTEBUDG0seXuBXZ8GdQan5HykcslmMZiIxM3XFb1GGg21p2h5eCabfjigTQqGeO5Kj37huVWPXWa4BnzfEZu7oEpl42Xrtk4DfEPeHVhrMCWH2pkwvZgF%2B8H%2Bp6DnsJQNyDJx68B7IDIRF9uQP6KUzAXZQ8N3pbY4QpgFGrTFB78yVuiIN5Ue&X-Amz-Signature=3e730003d66ec47b9f9f6159e2f709faf71dd41b71e55a5272923f5abe4838ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
