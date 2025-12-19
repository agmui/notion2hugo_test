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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO2ALECZ%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO5J259DPuzfiH%2B93FuJPiShEkt6%2B4aTA30KnzX63ZJAiAdu7W%2Fhgwhfo4gOfVts5FluK1dXnYsFAY7z%2FQHYufEmyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfRjmjOAAMur102hKtwDis24Mqqivsl%2BsRFact9tb17h5jJfcpbAMGiwWWuj0s27OV7eR3HJgDik7ie1TTIUn9WPXs6ma4v7bJkjDXpTaAY5z36%2BgffpMAKza8UVzil%2FrvNAP5Y5G5hZf21he0XWwl1PDKXw1GknHpb9Q23w7Wj%2FU7pQo%2FQP0T0CivmwGlz3xngfNM3eRiQSQGfyfzg7iJVGv9gRqy0mcMz%2FiBg%2BFHygy4Gl93pDKxaFig7kSSEuj%2F9kJVCB6ZbUUujdMvxp3RsTcDXHBCAaGh%2BXbbHs3CfJxk1vsY9hlTyQd6J2%2B%2BWPb%2By4gOyeodbKPUVNgpFw9CrFgzmulN12BBD%2FAuQoSYyzx%2BBQ%2BhAQgqT%2BP1YJV%2FpQWLUe4g%2FmCMannW%2BBRftUZpo1i5NwKhfyAxZJ2qALmpd3OZg%2BGC4%2BFVioXmhFOkLW2MGtssQeeA01gSSViTpEt1xvHJmUcGlrr9aiHY1EOlNs4HCqlidmWk8k1gXPy1cd%2BPKFBzhNhK%2FKGVMBR1TjilU909hH0hMIjvTY4b57LbqVI8CsSmGEjaTk4SxyZD6ySe9X%2F62EHjNFKt3%2FKaeSfGbLCDa%2BAOLZUdPpqfZ8ZR1yMYD0JqUp%2BpY9Pti5kUm5O%2FYltYhuGKcfLUIwusiSygY6pgEcXgSf318LuuyQi0AY%2BtlwTXLB0bL0yfjmMm5t5FnzwmmgJv3hX22KzS8gwgB032ZNO27v9g1lX5PfZKUjKnaM4qSn68w%2BVydb3yJUwsGDSxoS5r%2B6A7pQLQ5nkM5xyBq8M9FFykhCwqkwS7%2FgKBYlGkWVcVTV1MM3UJQR8qNgYle8iFnPEp4q36mnxhiWUv%2FJo4TX8VEF9dua7jwz6LezhdWTNShA&X-Amz-Signature=36f1e6bcd8c5592521eee2042ad0bfc4ca3d0538cc195d3ef8915ce22ced93c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO2ALECZ%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO5J259DPuzfiH%2B93FuJPiShEkt6%2B4aTA30KnzX63ZJAiAdu7W%2Fhgwhfo4gOfVts5FluK1dXnYsFAY7z%2FQHYufEmyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfRjmjOAAMur102hKtwDis24Mqqivsl%2BsRFact9tb17h5jJfcpbAMGiwWWuj0s27OV7eR3HJgDik7ie1TTIUn9WPXs6ma4v7bJkjDXpTaAY5z36%2BgffpMAKza8UVzil%2FrvNAP5Y5G5hZf21he0XWwl1PDKXw1GknHpb9Q23w7Wj%2FU7pQo%2FQP0T0CivmwGlz3xngfNM3eRiQSQGfyfzg7iJVGv9gRqy0mcMz%2FiBg%2BFHygy4Gl93pDKxaFig7kSSEuj%2F9kJVCB6ZbUUujdMvxp3RsTcDXHBCAaGh%2BXbbHs3CfJxk1vsY9hlTyQd6J2%2B%2BWPb%2By4gOyeodbKPUVNgpFw9CrFgzmulN12BBD%2FAuQoSYyzx%2BBQ%2BhAQgqT%2BP1YJV%2FpQWLUe4g%2FmCMannW%2BBRftUZpo1i5NwKhfyAxZJ2qALmpd3OZg%2BGC4%2BFVioXmhFOkLW2MGtssQeeA01gSSViTpEt1xvHJmUcGlrr9aiHY1EOlNs4HCqlidmWk8k1gXPy1cd%2BPKFBzhNhK%2FKGVMBR1TjilU909hH0hMIjvTY4b57LbqVI8CsSmGEjaTk4SxyZD6ySe9X%2F62EHjNFKt3%2FKaeSfGbLCDa%2BAOLZUdPpqfZ8ZR1yMYD0JqUp%2BpY9Pti5kUm5O%2FYltYhuGKcfLUIwusiSygY6pgEcXgSf318LuuyQi0AY%2BtlwTXLB0bL0yfjmMm5t5FnzwmmgJv3hX22KzS8gwgB032ZNO27v9g1lX5PfZKUjKnaM4qSn68w%2BVydb3yJUwsGDSxoS5r%2B6A7pQLQ5nkM5xyBq8M9FFykhCwqkwS7%2FgKBYlGkWVcVTV1MM3UJQR8qNgYle8iFnPEp4q36mnxhiWUv%2FJo4TX8VEF9dua7jwz6LezhdWTNShA&X-Amz-Signature=2e171a1ce6f27365fe6897c9bdaffce3b03db0f8b81beb917a4a7049c80ed12f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO2ALECZ%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO5J259DPuzfiH%2B93FuJPiShEkt6%2B4aTA30KnzX63ZJAiAdu7W%2Fhgwhfo4gOfVts5FluK1dXnYsFAY7z%2FQHYufEmyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfRjmjOAAMur102hKtwDis24Mqqivsl%2BsRFact9tb17h5jJfcpbAMGiwWWuj0s27OV7eR3HJgDik7ie1TTIUn9WPXs6ma4v7bJkjDXpTaAY5z36%2BgffpMAKza8UVzil%2FrvNAP5Y5G5hZf21he0XWwl1PDKXw1GknHpb9Q23w7Wj%2FU7pQo%2FQP0T0CivmwGlz3xngfNM3eRiQSQGfyfzg7iJVGv9gRqy0mcMz%2FiBg%2BFHygy4Gl93pDKxaFig7kSSEuj%2F9kJVCB6ZbUUujdMvxp3RsTcDXHBCAaGh%2BXbbHs3CfJxk1vsY9hlTyQd6J2%2B%2BWPb%2By4gOyeodbKPUVNgpFw9CrFgzmulN12BBD%2FAuQoSYyzx%2BBQ%2BhAQgqT%2BP1YJV%2FpQWLUe4g%2FmCMannW%2BBRftUZpo1i5NwKhfyAxZJ2qALmpd3OZg%2BGC4%2BFVioXmhFOkLW2MGtssQeeA01gSSViTpEt1xvHJmUcGlrr9aiHY1EOlNs4HCqlidmWk8k1gXPy1cd%2BPKFBzhNhK%2FKGVMBR1TjilU909hH0hMIjvTY4b57LbqVI8CsSmGEjaTk4SxyZD6ySe9X%2F62EHjNFKt3%2FKaeSfGbLCDa%2BAOLZUdPpqfZ8ZR1yMYD0JqUp%2BpY9Pti5kUm5O%2FYltYhuGKcfLUIwusiSygY6pgEcXgSf318LuuyQi0AY%2BtlwTXLB0bL0yfjmMm5t5FnzwmmgJv3hX22KzS8gwgB032ZNO27v9g1lX5PfZKUjKnaM4qSn68w%2BVydb3yJUwsGDSxoS5r%2B6A7pQLQ5nkM5xyBq8M9FFykhCwqkwS7%2FgKBYlGkWVcVTV1MM3UJQR8qNgYle8iFnPEp4q36mnxhiWUv%2FJo4TX8VEF9dua7jwz6LezhdWTNShA&X-Amz-Signature=a5fcdeae77f3545deec94470ed84b09514229898eab08a90ef9808711017bba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO2ALECZ%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO5J259DPuzfiH%2B93FuJPiShEkt6%2B4aTA30KnzX63ZJAiAdu7W%2Fhgwhfo4gOfVts5FluK1dXnYsFAY7z%2FQHYufEmyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfRjmjOAAMur102hKtwDis24Mqqivsl%2BsRFact9tb17h5jJfcpbAMGiwWWuj0s27OV7eR3HJgDik7ie1TTIUn9WPXs6ma4v7bJkjDXpTaAY5z36%2BgffpMAKza8UVzil%2FrvNAP5Y5G5hZf21he0XWwl1PDKXw1GknHpb9Q23w7Wj%2FU7pQo%2FQP0T0CivmwGlz3xngfNM3eRiQSQGfyfzg7iJVGv9gRqy0mcMz%2FiBg%2BFHygy4Gl93pDKxaFig7kSSEuj%2F9kJVCB6ZbUUujdMvxp3RsTcDXHBCAaGh%2BXbbHs3CfJxk1vsY9hlTyQd6J2%2B%2BWPb%2By4gOyeodbKPUVNgpFw9CrFgzmulN12BBD%2FAuQoSYyzx%2BBQ%2BhAQgqT%2BP1YJV%2FpQWLUe4g%2FmCMannW%2BBRftUZpo1i5NwKhfyAxZJ2qALmpd3OZg%2BGC4%2BFVioXmhFOkLW2MGtssQeeA01gSSViTpEt1xvHJmUcGlrr9aiHY1EOlNs4HCqlidmWk8k1gXPy1cd%2BPKFBzhNhK%2FKGVMBR1TjilU909hH0hMIjvTY4b57LbqVI8CsSmGEjaTk4SxyZD6ySe9X%2F62EHjNFKt3%2FKaeSfGbLCDa%2BAOLZUdPpqfZ8ZR1yMYD0JqUp%2BpY9Pti5kUm5O%2FYltYhuGKcfLUIwusiSygY6pgEcXgSf318LuuyQi0AY%2BtlwTXLB0bL0yfjmMm5t5FnzwmmgJv3hX22KzS8gwgB032ZNO27v9g1lX5PfZKUjKnaM4qSn68w%2BVydb3yJUwsGDSxoS5r%2B6A7pQLQ5nkM5xyBq8M9FFykhCwqkwS7%2FgKBYlGkWVcVTV1MM3UJQR8qNgYle8iFnPEp4q36mnxhiWUv%2FJo4TX8VEF9dua7jwz6LezhdWTNShA&X-Amz-Signature=53a9d6418bc65abcf3d7806b1ee5602f0b32676d050ae890ca535318d9ee245d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHSYEW7G%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYnlfN3IDP%2BsBHhooUDUsabR4iOnaihiqtwE0k6VJOpQIhAP76dmloYazW4Rx0%2FA6LT4sCQd0evI39Me%2BYjX7e%2B%2FEaKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9xYppxc8i%2BlYPfYoq3AOLeGNIJ4W5%2FtjKHgZj1N%2FgA%2BIFAvRR4avbuW8Y0oUIHKoZJGKUIGNj4%2Bl9sIfizhbALDPbfbjI8VIGoiNqpn%2FGrQ6qA4zvY91LbN%2BB%2FUOI%2FMkBpHFtfUxdd0eh6PfqglRj8ZdoqBU%2FyiY%2FDdhQyMdVFVDbBx%2BueIK%2BM6cb3Xg6UibccNWY%2FDRHsCNB0WBfSEqfKvZALIKoe3fnoALjvNuRAHe3DpLvyZM6e1ZzNuxRUbBHkKdaY5SJAdmFw%2B3T3TApkCDRjMXfeihr29OIeJNKvqahTzxUqFF20ebM3%2BbCEI4YpXntD6yrByrvaZMvfXNNWNJ4YgAH34vIBO6loFvdePcFqZsDvRhWQhtKBzlHOPbg%2BoAGrDtvUbcUFBpqXNadXg%2BNxZV1IRrAeYusI8w7T%2F2d7gnncolrRhUgkp5hWvBKRg69SxWrEqmBKd2gaXvV3IA2u5M12J0sSS4N8XgIYBrE%2FxIGHTtVG2X3u%2BJTjrmv86l9W0cw%2Fgj41vNlJ6m14MniQb65F%2F2PBgMkQfNhUIbsp0QLSACrpCIUbK21keVUxqpjIpgKZymlaxMT6B57k3pABSMsc4F2r9ibD2%2FRJ8iCiOfleG8lppWqiDt7biGfeD5dn0dimjq58DDGx5LKBjqkAf9h3LMKnjcNGQ3b8dpOPHJanfq0QqfJqKdfAbJSwhDN%2BF1vk%2BT09dSrJ2mj2rje5FEaa8OkovaoUmq%2Brm68nhjQjW7iEX99ibKW%2FBBzvebQZkcMTdkPYP6Px0cVoZSfSM2JuKbEKjFSWUY67Nfn7aI1ftG67otbPv3m8BxfmN0UhZPn%2BVEI7y4BqbuBTW6OIKyRQbPklqktLK%2FDrS0lutHDfQfn&X-Amz-Signature=204757ba0a0c3201680aea49a1130171510435e5e905a41b4f17acb8bec643a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO2ALECZ%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO5J259DPuzfiH%2B93FuJPiShEkt6%2B4aTA30KnzX63ZJAiAdu7W%2Fhgwhfo4gOfVts5FluK1dXnYsFAY7z%2FQHYufEmyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfRjmjOAAMur102hKtwDis24Mqqivsl%2BsRFact9tb17h5jJfcpbAMGiwWWuj0s27OV7eR3HJgDik7ie1TTIUn9WPXs6ma4v7bJkjDXpTaAY5z36%2BgffpMAKza8UVzil%2FrvNAP5Y5G5hZf21he0XWwl1PDKXw1GknHpb9Q23w7Wj%2FU7pQo%2FQP0T0CivmwGlz3xngfNM3eRiQSQGfyfzg7iJVGv9gRqy0mcMz%2FiBg%2BFHygy4Gl93pDKxaFig7kSSEuj%2F9kJVCB6ZbUUujdMvxp3RsTcDXHBCAaGh%2BXbbHs3CfJxk1vsY9hlTyQd6J2%2B%2BWPb%2By4gOyeodbKPUVNgpFw9CrFgzmulN12BBD%2FAuQoSYyzx%2BBQ%2BhAQgqT%2BP1YJV%2FpQWLUe4g%2FmCMannW%2BBRftUZpo1i5NwKhfyAxZJ2qALmpd3OZg%2BGC4%2BFVioXmhFOkLW2MGtssQeeA01gSSViTpEt1xvHJmUcGlrr9aiHY1EOlNs4HCqlidmWk8k1gXPy1cd%2BPKFBzhNhK%2FKGVMBR1TjilU909hH0hMIjvTY4b57LbqVI8CsSmGEjaTk4SxyZD6ySe9X%2F62EHjNFKt3%2FKaeSfGbLCDa%2BAOLZUdPpqfZ8ZR1yMYD0JqUp%2BpY9Pti5kUm5O%2FYltYhuGKcfLUIwusiSygY6pgEcXgSf318LuuyQi0AY%2BtlwTXLB0bL0yfjmMm5t5FnzwmmgJv3hX22KzS8gwgB032ZNO27v9g1lX5PfZKUjKnaM4qSn68w%2BVydb3yJUwsGDSxoS5r%2B6A7pQLQ5nkM5xyBq8M9FFykhCwqkwS7%2FgKBYlGkWVcVTV1MM3UJQR8qNgYle8iFnPEp4q36mnxhiWUv%2FJo4TX8VEF9dua7jwz6LezhdWTNShA&X-Amz-Signature=744f859b3064b7ad9a20a6ce8727645963d796d964d0f45d9b7893153ce5302f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO2ALECZ%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO5J259DPuzfiH%2B93FuJPiShEkt6%2B4aTA30KnzX63ZJAiAdu7W%2Fhgwhfo4gOfVts5FluK1dXnYsFAY7z%2FQHYufEmyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfRjmjOAAMur102hKtwDis24Mqqivsl%2BsRFact9tb17h5jJfcpbAMGiwWWuj0s27OV7eR3HJgDik7ie1TTIUn9WPXs6ma4v7bJkjDXpTaAY5z36%2BgffpMAKza8UVzil%2FrvNAP5Y5G5hZf21he0XWwl1PDKXw1GknHpb9Q23w7Wj%2FU7pQo%2FQP0T0CivmwGlz3xngfNM3eRiQSQGfyfzg7iJVGv9gRqy0mcMz%2FiBg%2BFHygy4Gl93pDKxaFig7kSSEuj%2F9kJVCB6ZbUUujdMvxp3RsTcDXHBCAaGh%2BXbbHs3CfJxk1vsY9hlTyQd6J2%2B%2BWPb%2By4gOyeodbKPUVNgpFw9CrFgzmulN12BBD%2FAuQoSYyzx%2BBQ%2BhAQgqT%2BP1YJV%2FpQWLUe4g%2FmCMannW%2BBRftUZpo1i5NwKhfyAxZJ2qALmpd3OZg%2BGC4%2BFVioXmhFOkLW2MGtssQeeA01gSSViTpEt1xvHJmUcGlrr9aiHY1EOlNs4HCqlidmWk8k1gXPy1cd%2BPKFBzhNhK%2FKGVMBR1TjilU909hH0hMIjvTY4b57LbqVI8CsSmGEjaTk4SxyZD6ySe9X%2F62EHjNFKt3%2FKaeSfGbLCDa%2BAOLZUdPpqfZ8ZR1yMYD0JqUp%2BpY9Pti5kUm5O%2FYltYhuGKcfLUIwusiSygY6pgEcXgSf318LuuyQi0AY%2BtlwTXLB0bL0yfjmMm5t5FnzwmmgJv3hX22KzS8gwgB032ZNO27v9g1lX5PfZKUjKnaM4qSn68w%2BVydb3yJUwsGDSxoS5r%2B6A7pQLQ5nkM5xyBq8M9FFykhCwqkwS7%2FgKBYlGkWVcVTV1MM3UJQR8qNgYle8iFnPEp4q36mnxhiWUv%2FJo4TX8VEF9dua7jwz6LezhdWTNShA&X-Amz-Signature=2c362cb910bb9c2a48cf5f7a7fb0042a9667444f72eaae4d6a393e3ef7fa7fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO2ALECZ%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO5J259DPuzfiH%2B93FuJPiShEkt6%2B4aTA30KnzX63ZJAiAdu7W%2Fhgwhfo4gOfVts5FluK1dXnYsFAY7z%2FQHYufEmyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfRjmjOAAMur102hKtwDis24Mqqivsl%2BsRFact9tb17h5jJfcpbAMGiwWWuj0s27OV7eR3HJgDik7ie1TTIUn9WPXs6ma4v7bJkjDXpTaAY5z36%2BgffpMAKza8UVzil%2FrvNAP5Y5G5hZf21he0XWwl1PDKXw1GknHpb9Q23w7Wj%2FU7pQo%2FQP0T0CivmwGlz3xngfNM3eRiQSQGfyfzg7iJVGv9gRqy0mcMz%2FiBg%2BFHygy4Gl93pDKxaFig7kSSEuj%2F9kJVCB6ZbUUujdMvxp3RsTcDXHBCAaGh%2BXbbHs3CfJxk1vsY9hlTyQd6J2%2B%2BWPb%2By4gOyeodbKPUVNgpFw9CrFgzmulN12BBD%2FAuQoSYyzx%2BBQ%2BhAQgqT%2BP1YJV%2FpQWLUe4g%2FmCMannW%2BBRftUZpo1i5NwKhfyAxZJ2qALmpd3OZg%2BGC4%2BFVioXmhFOkLW2MGtssQeeA01gSSViTpEt1xvHJmUcGlrr9aiHY1EOlNs4HCqlidmWk8k1gXPy1cd%2BPKFBzhNhK%2FKGVMBR1TjilU909hH0hMIjvTY4b57LbqVI8CsSmGEjaTk4SxyZD6ySe9X%2F62EHjNFKt3%2FKaeSfGbLCDa%2BAOLZUdPpqfZ8ZR1yMYD0JqUp%2BpY9Pti5kUm5O%2FYltYhuGKcfLUIwusiSygY6pgEcXgSf318LuuyQi0AY%2BtlwTXLB0bL0yfjmMm5t5FnzwmmgJv3hX22KzS8gwgB032ZNO27v9g1lX5PfZKUjKnaM4qSn68w%2BVydb3yJUwsGDSxoS5r%2B6A7pQLQ5nkM5xyBq8M9FFykhCwqkwS7%2FgKBYlGkWVcVTV1MM3UJQR8qNgYle8iFnPEp4q36mnxhiWUv%2FJo4TX8VEF9dua7jwz6LezhdWTNShA&X-Amz-Signature=0a744891cbb426f8abc3500de51635e1451f6c52f0419c7f882ad6fa21c422ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO2ALECZ%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO5J259DPuzfiH%2B93FuJPiShEkt6%2B4aTA30KnzX63ZJAiAdu7W%2Fhgwhfo4gOfVts5FluK1dXnYsFAY7z%2FQHYufEmyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfRjmjOAAMur102hKtwDis24Mqqivsl%2BsRFact9tb17h5jJfcpbAMGiwWWuj0s27OV7eR3HJgDik7ie1TTIUn9WPXs6ma4v7bJkjDXpTaAY5z36%2BgffpMAKza8UVzil%2FrvNAP5Y5G5hZf21he0XWwl1PDKXw1GknHpb9Q23w7Wj%2FU7pQo%2FQP0T0CivmwGlz3xngfNM3eRiQSQGfyfzg7iJVGv9gRqy0mcMz%2FiBg%2BFHygy4Gl93pDKxaFig7kSSEuj%2F9kJVCB6ZbUUujdMvxp3RsTcDXHBCAaGh%2BXbbHs3CfJxk1vsY9hlTyQd6J2%2B%2BWPb%2By4gOyeodbKPUVNgpFw9CrFgzmulN12BBD%2FAuQoSYyzx%2BBQ%2BhAQgqT%2BP1YJV%2FpQWLUe4g%2FmCMannW%2BBRftUZpo1i5NwKhfyAxZJ2qALmpd3OZg%2BGC4%2BFVioXmhFOkLW2MGtssQeeA01gSSViTpEt1xvHJmUcGlrr9aiHY1EOlNs4HCqlidmWk8k1gXPy1cd%2BPKFBzhNhK%2FKGVMBR1TjilU909hH0hMIjvTY4b57LbqVI8CsSmGEjaTk4SxyZD6ySe9X%2F62EHjNFKt3%2FKaeSfGbLCDa%2BAOLZUdPpqfZ8ZR1yMYD0JqUp%2BpY9Pti5kUm5O%2FYltYhuGKcfLUIwusiSygY6pgEcXgSf318LuuyQi0AY%2BtlwTXLB0bL0yfjmMm5t5FnzwmmgJv3hX22KzS8gwgB032ZNO27v9g1lX5PfZKUjKnaM4qSn68w%2BVydb3yJUwsGDSxoS5r%2B6A7pQLQ5nkM5xyBq8M9FFykhCwqkwS7%2FgKBYlGkWVcVTV1MM3UJQR8qNgYle8iFnPEp4q36mnxhiWUv%2FJo4TX8VEF9dua7jwz6LezhdWTNShA&X-Amz-Signature=c26a9d7c67b640aeb5bb5ee478b1f99a40f52e08b0ac643ff8d6adc9a542b4eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO2ALECZ%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO5J259DPuzfiH%2B93FuJPiShEkt6%2B4aTA30KnzX63ZJAiAdu7W%2Fhgwhfo4gOfVts5FluK1dXnYsFAY7z%2FQHYufEmyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfRjmjOAAMur102hKtwDis24Mqqivsl%2BsRFact9tb17h5jJfcpbAMGiwWWuj0s27OV7eR3HJgDik7ie1TTIUn9WPXs6ma4v7bJkjDXpTaAY5z36%2BgffpMAKza8UVzil%2FrvNAP5Y5G5hZf21he0XWwl1PDKXw1GknHpb9Q23w7Wj%2FU7pQo%2FQP0T0CivmwGlz3xngfNM3eRiQSQGfyfzg7iJVGv9gRqy0mcMz%2FiBg%2BFHygy4Gl93pDKxaFig7kSSEuj%2F9kJVCB6ZbUUujdMvxp3RsTcDXHBCAaGh%2BXbbHs3CfJxk1vsY9hlTyQd6J2%2B%2BWPb%2By4gOyeodbKPUVNgpFw9CrFgzmulN12BBD%2FAuQoSYyzx%2BBQ%2BhAQgqT%2BP1YJV%2FpQWLUe4g%2FmCMannW%2BBRftUZpo1i5NwKhfyAxZJ2qALmpd3OZg%2BGC4%2BFVioXmhFOkLW2MGtssQeeA01gSSViTpEt1xvHJmUcGlrr9aiHY1EOlNs4HCqlidmWk8k1gXPy1cd%2BPKFBzhNhK%2FKGVMBR1TjilU909hH0hMIjvTY4b57LbqVI8CsSmGEjaTk4SxyZD6ySe9X%2F62EHjNFKt3%2FKaeSfGbLCDa%2BAOLZUdPpqfZ8ZR1yMYD0JqUp%2BpY9Pti5kUm5O%2FYltYhuGKcfLUIwusiSygY6pgEcXgSf318LuuyQi0AY%2BtlwTXLB0bL0yfjmMm5t5FnzwmmgJv3hX22KzS8gwgB032ZNO27v9g1lX5PfZKUjKnaM4qSn68w%2BVydb3yJUwsGDSxoS5r%2B6A7pQLQ5nkM5xyBq8M9FFykhCwqkwS7%2FgKBYlGkWVcVTV1MM3UJQR8qNgYle8iFnPEp4q36mnxhiWUv%2FJo4TX8VEF9dua7jwz6LezhdWTNShA&X-Amz-Signature=356f320d4c7ea45990116fa1a121bad85327f285118bef76f9798d2b37a71b2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO2ALECZ%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO5J259DPuzfiH%2B93FuJPiShEkt6%2B4aTA30KnzX63ZJAiAdu7W%2Fhgwhfo4gOfVts5FluK1dXnYsFAY7z%2FQHYufEmyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfRjmjOAAMur102hKtwDis24Mqqivsl%2BsRFact9tb17h5jJfcpbAMGiwWWuj0s27OV7eR3HJgDik7ie1TTIUn9WPXs6ma4v7bJkjDXpTaAY5z36%2BgffpMAKza8UVzil%2FrvNAP5Y5G5hZf21he0XWwl1PDKXw1GknHpb9Q23w7Wj%2FU7pQo%2FQP0T0CivmwGlz3xngfNM3eRiQSQGfyfzg7iJVGv9gRqy0mcMz%2FiBg%2BFHygy4Gl93pDKxaFig7kSSEuj%2F9kJVCB6ZbUUujdMvxp3RsTcDXHBCAaGh%2BXbbHs3CfJxk1vsY9hlTyQd6J2%2B%2BWPb%2By4gOyeodbKPUVNgpFw9CrFgzmulN12BBD%2FAuQoSYyzx%2BBQ%2BhAQgqT%2BP1YJV%2FpQWLUe4g%2FmCMannW%2BBRftUZpo1i5NwKhfyAxZJ2qALmpd3OZg%2BGC4%2BFVioXmhFOkLW2MGtssQeeA01gSSViTpEt1xvHJmUcGlrr9aiHY1EOlNs4HCqlidmWk8k1gXPy1cd%2BPKFBzhNhK%2FKGVMBR1TjilU909hH0hMIjvTY4b57LbqVI8CsSmGEjaTk4SxyZD6ySe9X%2F62EHjNFKt3%2FKaeSfGbLCDa%2BAOLZUdPpqfZ8ZR1yMYD0JqUp%2BpY9Pti5kUm5O%2FYltYhuGKcfLUIwusiSygY6pgEcXgSf318LuuyQi0AY%2BtlwTXLB0bL0yfjmMm5t5FnzwmmgJv3hX22KzS8gwgB032ZNO27v9g1lX5PfZKUjKnaM4qSn68w%2BVydb3yJUwsGDSxoS5r%2B6A7pQLQ5nkM5xyBq8M9FFykhCwqkwS7%2FgKBYlGkWVcVTV1MM3UJQR8qNgYle8iFnPEp4q36mnxhiWUv%2FJo4TX8VEF9dua7jwz6LezhdWTNShA&X-Amz-Signature=238294228d7bc5f43bd4b59cf38ccb86b6cefc6ef9fe1f2441e83ae1d0f676de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


