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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2GRKGL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD5onscvM7%2BYNzfqeT%2Bp2g2CGqLpirjFhitv3AOdGAoUgIhAOpGvoundIPXwi26826A9e8Qv7OCeB27m%2F%2B2lEBudZWeKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNI%2BN7a6hEn2MpoPQq3APMhaUsuhuuX6Tq9GZop%2B%2BLsCSpGaYW%2FAy%2FKKS%2FUvhuHDrUPbDT4Qf0mWkCMec9Q%2Bvml7tik7bTfIv8ylW9cynAro%2FSYY0BmjG5XBbIlEb74L%2B2U4TF46x%2FGPqwneFs89jHx5yh%2FI9rgcmxGBKDF8FD79WGTBFhnDLxMUdqitx7vfFD8C%2B7AlIkquH%2F6iiJI4zmq1khzjesJonZGU54QhmjlT%2FI4JPPrJRQLTy9cSirhuEkxJ8esRCqzAEnBFveWAXwAFfLMjEby%2FMSAKm%2FXDi5ib%2BXOVaeRSmpUf22OMqldyFQM2F6dDyqqHk0eJVrFkvbZadJEayRqphUf1TaJuL4tnL%2F%2BauSmAhfEgxYEtgi0KlqJlV2WPIe4sFXNhvMX7XDljEQK6yxiT7Q%2FsioyJFp2vwEwdhbRg%2FaItHn5dssVq8sbRwo9ueF6ZhK25PN7PHmJMVxfUODUOL3JbhrbXWYTpzxUH04G92waWmEvQhciQH4yI8b7phEKfcxEay62lItIHSzbRoguBEiJoD4rVCxRnioNarpTFmYfHWFuF9i7GmQgC6rUyPy1oBgupOzdRZ2TVbv%2FMppYqCwymIgiGOiAv%2F%2B7qq70f%2BzPH5Yy7EZDNiglfQAlzvKhZiJXTDE5pbHBjqkAVvUePQjiqW5s0LMqFJqnrTfLm1sAS8oiepBwJ6dn%2BYIdLdjtbgeaZaqHN2ZJBWN0jv58cI%2Bt4125v842TbM%2F2LggzE0MQwN7RBo0xv7MRxG0Xs2kh3T6NTJfqXKI%2FWyomV2eJAjj45cK99idaMJub6TwVt%2Bpu7cZxQ%2FMWKW0V%2FH75hcMcqgzFchtEjuNtN2%2FGagmbfhVAHRHT17Nzbfuv8VrfYs&X-Amz-Signature=40a75aa3867be356b394d2632e924ea48b8020333f69704ca72ca592c1824d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2GRKGL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD5onscvM7%2BYNzfqeT%2Bp2g2CGqLpirjFhitv3AOdGAoUgIhAOpGvoundIPXwi26826A9e8Qv7OCeB27m%2F%2B2lEBudZWeKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNI%2BN7a6hEn2MpoPQq3APMhaUsuhuuX6Tq9GZop%2B%2BLsCSpGaYW%2FAy%2FKKS%2FUvhuHDrUPbDT4Qf0mWkCMec9Q%2Bvml7tik7bTfIv8ylW9cynAro%2FSYY0BmjG5XBbIlEb74L%2B2U4TF46x%2FGPqwneFs89jHx5yh%2FI9rgcmxGBKDF8FD79WGTBFhnDLxMUdqitx7vfFD8C%2B7AlIkquH%2F6iiJI4zmq1khzjesJonZGU54QhmjlT%2FI4JPPrJRQLTy9cSirhuEkxJ8esRCqzAEnBFveWAXwAFfLMjEby%2FMSAKm%2FXDi5ib%2BXOVaeRSmpUf22OMqldyFQM2F6dDyqqHk0eJVrFkvbZadJEayRqphUf1TaJuL4tnL%2F%2BauSmAhfEgxYEtgi0KlqJlV2WPIe4sFXNhvMX7XDljEQK6yxiT7Q%2FsioyJFp2vwEwdhbRg%2FaItHn5dssVq8sbRwo9ueF6ZhK25PN7PHmJMVxfUODUOL3JbhrbXWYTpzxUH04G92waWmEvQhciQH4yI8b7phEKfcxEay62lItIHSzbRoguBEiJoD4rVCxRnioNarpTFmYfHWFuF9i7GmQgC6rUyPy1oBgupOzdRZ2TVbv%2FMppYqCwymIgiGOiAv%2F%2B7qq70f%2BzPH5Yy7EZDNiglfQAlzvKhZiJXTDE5pbHBjqkAVvUePQjiqW5s0LMqFJqnrTfLm1sAS8oiepBwJ6dn%2BYIdLdjtbgeaZaqHN2ZJBWN0jv58cI%2Bt4125v842TbM%2F2LggzE0MQwN7RBo0xv7MRxG0Xs2kh3T6NTJfqXKI%2FWyomV2eJAjj45cK99idaMJub6TwVt%2Bpu7cZxQ%2FMWKW0V%2FH75hcMcqgzFchtEjuNtN2%2FGagmbfhVAHRHT17Nzbfuv8VrfYs&X-Amz-Signature=2a13ee0e871257ea4d2fbce3a8aedf91c63981f9f2e85b1e3f8e6ee7973cff31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2GRKGL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD5onscvM7%2BYNzfqeT%2Bp2g2CGqLpirjFhitv3AOdGAoUgIhAOpGvoundIPXwi26826A9e8Qv7OCeB27m%2F%2B2lEBudZWeKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNI%2BN7a6hEn2MpoPQq3APMhaUsuhuuX6Tq9GZop%2B%2BLsCSpGaYW%2FAy%2FKKS%2FUvhuHDrUPbDT4Qf0mWkCMec9Q%2Bvml7tik7bTfIv8ylW9cynAro%2FSYY0BmjG5XBbIlEb74L%2B2U4TF46x%2FGPqwneFs89jHx5yh%2FI9rgcmxGBKDF8FD79WGTBFhnDLxMUdqitx7vfFD8C%2B7AlIkquH%2F6iiJI4zmq1khzjesJonZGU54QhmjlT%2FI4JPPrJRQLTy9cSirhuEkxJ8esRCqzAEnBFveWAXwAFfLMjEby%2FMSAKm%2FXDi5ib%2BXOVaeRSmpUf22OMqldyFQM2F6dDyqqHk0eJVrFkvbZadJEayRqphUf1TaJuL4tnL%2F%2BauSmAhfEgxYEtgi0KlqJlV2WPIe4sFXNhvMX7XDljEQK6yxiT7Q%2FsioyJFp2vwEwdhbRg%2FaItHn5dssVq8sbRwo9ueF6ZhK25PN7PHmJMVxfUODUOL3JbhrbXWYTpzxUH04G92waWmEvQhciQH4yI8b7phEKfcxEay62lItIHSzbRoguBEiJoD4rVCxRnioNarpTFmYfHWFuF9i7GmQgC6rUyPy1oBgupOzdRZ2TVbv%2FMppYqCwymIgiGOiAv%2F%2B7qq70f%2BzPH5Yy7EZDNiglfQAlzvKhZiJXTDE5pbHBjqkAVvUePQjiqW5s0LMqFJqnrTfLm1sAS8oiepBwJ6dn%2BYIdLdjtbgeaZaqHN2ZJBWN0jv58cI%2Bt4125v842TbM%2F2LggzE0MQwN7RBo0xv7MRxG0Xs2kh3T6NTJfqXKI%2FWyomV2eJAjj45cK99idaMJub6TwVt%2Bpu7cZxQ%2FMWKW0V%2FH75hcMcqgzFchtEjuNtN2%2FGagmbfhVAHRHT17Nzbfuv8VrfYs&X-Amz-Signature=f88787120210b15b7339976324663d08047dead1b3095dcb32e3da044361f7c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2GRKGL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD5onscvM7%2BYNzfqeT%2Bp2g2CGqLpirjFhitv3AOdGAoUgIhAOpGvoundIPXwi26826A9e8Qv7OCeB27m%2F%2B2lEBudZWeKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNI%2BN7a6hEn2MpoPQq3APMhaUsuhuuX6Tq9GZop%2B%2BLsCSpGaYW%2FAy%2FKKS%2FUvhuHDrUPbDT4Qf0mWkCMec9Q%2Bvml7tik7bTfIv8ylW9cynAro%2FSYY0BmjG5XBbIlEb74L%2B2U4TF46x%2FGPqwneFs89jHx5yh%2FI9rgcmxGBKDF8FD79WGTBFhnDLxMUdqitx7vfFD8C%2B7AlIkquH%2F6iiJI4zmq1khzjesJonZGU54QhmjlT%2FI4JPPrJRQLTy9cSirhuEkxJ8esRCqzAEnBFveWAXwAFfLMjEby%2FMSAKm%2FXDi5ib%2BXOVaeRSmpUf22OMqldyFQM2F6dDyqqHk0eJVrFkvbZadJEayRqphUf1TaJuL4tnL%2F%2BauSmAhfEgxYEtgi0KlqJlV2WPIe4sFXNhvMX7XDljEQK6yxiT7Q%2FsioyJFp2vwEwdhbRg%2FaItHn5dssVq8sbRwo9ueF6ZhK25PN7PHmJMVxfUODUOL3JbhrbXWYTpzxUH04G92waWmEvQhciQH4yI8b7phEKfcxEay62lItIHSzbRoguBEiJoD4rVCxRnioNarpTFmYfHWFuF9i7GmQgC6rUyPy1oBgupOzdRZ2TVbv%2FMppYqCwymIgiGOiAv%2F%2B7qq70f%2BzPH5Yy7EZDNiglfQAlzvKhZiJXTDE5pbHBjqkAVvUePQjiqW5s0LMqFJqnrTfLm1sAS8oiepBwJ6dn%2BYIdLdjtbgeaZaqHN2ZJBWN0jv58cI%2Bt4125v842TbM%2F2LggzE0MQwN7RBo0xv7MRxG0Xs2kh3T6NTJfqXKI%2FWyomV2eJAjj45cK99idaMJub6TwVt%2Bpu7cZxQ%2FMWKW0V%2FH75hcMcqgzFchtEjuNtN2%2FGagmbfhVAHRHT17Nzbfuv8VrfYs&X-Amz-Signature=823cbcd90caffb3967d626d079daffd47b3d1699e356019e66a2ea80fd5fe838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6CCGQC%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDQn9y6eiwLSKQN%2FH8pP8wYcaaPcM4%2F69yFnm8zsO06XAiEA8862vijiafELjvrOrp6Qbr%2FdGA1SDouZdXVIhPzB2k0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBucYpzEV7zSqrkVircAwVlrpekORs%2B41ggKRlPSluF0EIr%2BdcQxCawKqXh%2F2xnhsubX%2FuTBDs1ZGRYlrTpqP%2F75xKvoh7pxs9FYkwdfO%2BpgPuCTvENjwSRoQeWK978GCBa2LlWXHTwm9LmYA490TfkcftE5z%2FKlWa23m%2FqeSsNH2xpwjq9Ue6zUyyJLVfO0G6rcsv0XeifDkkbJtlsEAGlPyw7AlCo3De10e2FKIbM7Jrn%2FEJOXT3bzwZkYJ4DC7UikNJvgENyxYRMQHQIToZ8BiXNrAWXldKb%2FuU4IxQz1CC%2Ff6TOOSbdV1DRXLxvBOIXPFiGFtq%2BjNtTlz07htTmNDhIqy5Ccl2Z1rqIN8egx02EZKVo1UPDRXmkvooYiaI55zzJ0WsvZEIKBUpd5pniBD6Hc%2FXb1m7Edb0skofi7ytWQJp%2F4S5Lxzm7f18eSeJ3xiZLVFzebuIInoZYMtUiZvfIKqjkp8piS2%2FOgnC4ry0EKKbwgQmn%2BymKzP%2Bi1onKkoCld3QXdT308SZQ3draYc%2B%2FzpIHYmytkZ1XLRYAqAc4ypKMmKRSrxRPjS3ygJWcKnloSWgodAEsiMuUwlBdbwAYBULIhV6DuEGGrcTWvgm%2FmiCL1vECdoZUSfnS7JC%2BGN9UibfloQa1MOLmlscGOqUBfOzTf6ujjp0PdIVYaHAF%2BXS2WEtca7IMLfehGILVVn7z2CFZQUmOhmbPjyWEOcTDg67N9Tn3jZSTFgeiL0DJGKVtdb1NXrrgc4KIYZZGW4AkQlmTqMCrd%2FtkKTgYcY28wsSIEujt1vBqhHJRAMQqI6svj%2BDSws4lUS%2FTdeCaFVgn0byWiNonHcjxQEc4BUY52PgxDzqBNlJv%2BHNc6wq8F3jEjcUs&X-Amz-Signature=de09be9b7c0bcde5b4d56de2370162ee7f49b792cfc317978cfa68213d727ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2GRKGL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD5onscvM7%2BYNzfqeT%2Bp2g2CGqLpirjFhitv3AOdGAoUgIhAOpGvoundIPXwi26826A9e8Qv7OCeB27m%2F%2B2lEBudZWeKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNI%2BN7a6hEn2MpoPQq3APMhaUsuhuuX6Tq9GZop%2B%2BLsCSpGaYW%2FAy%2FKKS%2FUvhuHDrUPbDT4Qf0mWkCMec9Q%2Bvml7tik7bTfIv8ylW9cynAro%2FSYY0BmjG5XBbIlEb74L%2B2U4TF46x%2FGPqwneFs89jHx5yh%2FI9rgcmxGBKDF8FD79WGTBFhnDLxMUdqitx7vfFD8C%2B7AlIkquH%2F6iiJI4zmq1khzjesJonZGU54QhmjlT%2FI4JPPrJRQLTy9cSirhuEkxJ8esRCqzAEnBFveWAXwAFfLMjEby%2FMSAKm%2FXDi5ib%2BXOVaeRSmpUf22OMqldyFQM2F6dDyqqHk0eJVrFkvbZadJEayRqphUf1TaJuL4tnL%2F%2BauSmAhfEgxYEtgi0KlqJlV2WPIe4sFXNhvMX7XDljEQK6yxiT7Q%2FsioyJFp2vwEwdhbRg%2FaItHn5dssVq8sbRwo9ueF6ZhK25PN7PHmJMVxfUODUOL3JbhrbXWYTpzxUH04G92waWmEvQhciQH4yI8b7phEKfcxEay62lItIHSzbRoguBEiJoD4rVCxRnioNarpTFmYfHWFuF9i7GmQgC6rUyPy1oBgupOzdRZ2TVbv%2FMppYqCwymIgiGOiAv%2F%2B7qq70f%2BzPH5Yy7EZDNiglfQAlzvKhZiJXTDE5pbHBjqkAVvUePQjiqW5s0LMqFJqnrTfLm1sAS8oiepBwJ6dn%2BYIdLdjtbgeaZaqHN2ZJBWN0jv58cI%2Bt4125v842TbM%2F2LggzE0MQwN7RBo0xv7MRxG0Xs2kh3T6NTJfqXKI%2FWyomV2eJAjj45cK99idaMJub6TwVt%2Bpu7cZxQ%2FMWKW0V%2FH75hcMcqgzFchtEjuNtN2%2FGagmbfhVAHRHT17Nzbfuv8VrfYs&X-Amz-Signature=7d9915c47765faf166cf93f7d79ba6a9bb5e376321ee064d420f4b190a3a80da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2GRKGL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD5onscvM7%2BYNzfqeT%2Bp2g2CGqLpirjFhitv3AOdGAoUgIhAOpGvoundIPXwi26826A9e8Qv7OCeB27m%2F%2B2lEBudZWeKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNI%2BN7a6hEn2MpoPQq3APMhaUsuhuuX6Tq9GZop%2B%2BLsCSpGaYW%2FAy%2FKKS%2FUvhuHDrUPbDT4Qf0mWkCMec9Q%2Bvml7tik7bTfIv8ylW9cynAro%2FSYY0BmjG5XBbIlEb74L%2B2U4TF46x%2FGPqwneFs89jHx5yh%2FI9rgcmxGBKDF8FD79WGTBFhnDLxMUdqitx7vfFD8C%2B7AlIkquH%2F6iiJI4zmq1khzjesJonZGU54QhmjlT%2FI4JPPrJRQLTy9cSirhuEkxJ8esRCqzAEnBFveWAXwAFfLMjEby%2FMSAKm%2FXDi5ib%2BXOVaeRSmpUf22OMqldyFQM2F6dDyqqHk0eJVrFkvbZadJEayRqphUf1TaJuL4tnL%2F%2BauSmAhfEgxYEtgi0KlqJlV2WPIe4sFXNhvMX7XDljEQK6yxiT7Q%2FsioyJFp2vwEwdhbRg%2FaItHn5dssVq8sbRwo9ueF6ZhK25PN7PHmJMVxfUODUOL3JbhrbXWYTpzxUH04G92waWmEvQhciQH4yI8b7phEKfcxEay62lItIHSzbRoguBEiJoD4rVCxRnioNarpTFmYfHWFuF9i7GmQgC6rUyPy1oBgupOzdRZ2TVbv%2FMppYqCwymIgiGOiAv%2F%2B7qq70f%2BzPH5Yy7EZDNiglfQAlzvKhZiJXTDE5pbHBjqkAVvUePQjiqW5s0LMqFJqnrTfLm1sAS8oiepBwJ6dn%2BYIdLdjtbgeaZaqHN2ZJBWN0jv58cI%2Bt4125v842TbM%2F2LggzE0MQwN7RBo0xv7MRxG0Xs2kh3T6NTJfqXKI%2FWyomV2eJAjj45cK99idaMJub6TwVt%2Bpu7cZxQ%2FMWKW0V%2FH75hcMcqgzFchtEjuNtN2%2FGagmbfhVAHRHT17Nzbfuv8VrfYs&X-Amz-Signature=5a72ea6f116512d271b9381b3722bcc38fb57945facccf9dda3fb379714ad3c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2GRKGL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD5onscvM7%2BYNzfqeT%2Bp2g2CGqLpirjFhitv3AOdGAoUgIhAOpGvoundIPXwi26826A9e8Qv7OCeB27m%2F%2B2lEBudZWeKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNI%2BN7a6hEn2MpoPQq3APMhaUsuhuuX6Tq9GZop%2B%2BLsCSpGaYW%2FAy%2FKKS%2FUvhuHDrUPbDT4Qf0mWkCMec9Q%2Bvml7tik7bTfIv8ylW9cynAro%2FSYY0BmjG5XBbIlEb74L%2B2U4TF46x%2FGPqwneFs89jHx5yh%2FI9rgcmxGBKDF8FD79WGTBFhnDLxMUdqitx7vfFD8C%2B7AlIkquH%2F6iiJI4zmq1khzjesJonZGU54QhmjlT%2FI4JPPrJRQLTy9cSirhuEkxJ8esRCqzAEnBFveWAXwAFfLMjEby%2FMSAKm%2FXDi5ib%2BXOVaeRSmpUf22OMqldyFQM2F6dDyqqHk0eJVrFkvbZadJEayRqphUf1TaJuL4tnL%2F%2BauSmAhfEgxYEtgi0KlqJlV2WPIe4sFXNhvMX7XDljEQK6yxiT7Q%2FsioyJFp2vwEwdhbRg%2FaItHn5dssVq8sbRwo9ueF6ZhK25PN7PHmJMVxfUODUOL3JbhrbXWYTpzxUH04G92waWmEvQhciQH4yI8b7phEKfcxEay62lItIHSzbRoguBEiJoD4rVCxRnioNarpTFmYfHWFuF9i7GmQgC6rUyPy1oBgupOzdRZ2TVbv%2FMppYqCwymIgiGOiAv%2F%2B7qq70f%2BzPH5Yy7EZDNiglfQAlzvKhZiJXTDE5pbHBjqkAVvUePQjiqW5s0LMqFJqnrTfLm1sAS8oiepBwJ6dn%2BYIdLdjtbgeaZaqHN2ZJBWN0jv58cI%2Bt4125v842TbM%2F2LggzE0MQwN7RBo0xv7MRxG0Xs2kh3T6NTJfqXKI%2FWyomV2eJAjj45cK99idaMJub6TwVt%2Bpu7cZxQ%2FMWKW0V%2FH75hcMcqgzFchtEjuNtN2%2FGagmbfhVAHRHT17Nzbfuv8VrfYs&X-Amz-Signature=7146dd7f1ad7f6aa8555101a29dbdc9ef1ec02826a1ba811c37e64e57716992b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2GRKGL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD5onscvM7%2BYNzfqeT%2Bp2g2CGqLpirjFhitv3AOdGAoUgIhAOpGvoundIPXwi26826A9e8Qv7OCeB27m%2F%2B2lEBudZWeKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNI%2BN7a6hEn2MpoPQq3APMhaUsuhuuX6Tq9GZop%2B%2BLsCSpGaYW%2FAy%2FKKS%2FUvhuHDrUPbDT4Qf0mWkCMec9Q%2Bvml7tik7bTfIv8ylW9cynAro%2FSYY0BmjG5XBbIlEb74L%2B2U4TF46x%2FGPqwneFs89jHx5yh%2FI9rgcmxGBKDF8FD79WGTBFhnDLxMUdqitx7vfFD8C%2B7AlIkquH%2F6iiJI4zmq1khzjesJonZGU54QhmjlT%2FI4JPPrJRQLTy9cSirhuEkxJ8esRCqzAEnBFveWAXwAFfLMjEby%2FMSAKm%2FXDi5ib%2BXOVaeRSmpUf22OMqldyFQM2F6dDyqqHk0eJVrFkvbZadJEayRqphUf1TaJuL4tnL%2F%2BauSmAhfEgxYEtgi0KlqJlV2WPIe4sFXNhvMX7XDljEQK6yxiT7Q%2FsioyJFp2vwEwdhbRg%2FaItHn5dssVq8sbRwo9ueF6ZhK25PN7PHmJMVxfUODUOL3JbhrbXWYTpzxUH04G92waWmEvQhciQH4yI8b7phEKfcxEay62lItIHSzbRoguBEiJoD4rVCxRnioNarpTFmYfHWFuF9i7GmQgC6rUyPy1oBgupOzdRZ2TVbv%2FMppYqCwymIgiGOiAv%2F%2B7qq70f%2BzPH5Yy7EZDNiglfQAlzvKhZiJXTDE5pbHBjqkAVvUePQjiqW5s0LMqFJqnrTfLm1sAS8oiepBwJ6dn%2BYIdLdjtbgeaZaqHN2ZJBWN0jv58cI%2Bt4125v842TbM%2F2LggzE0MQwN7RBo0xv7MRxG0Xs2kh3T6NTJfqXKI%2FWyomV2eJAjj45cK99idaMJub6TwVt%2Bpu7cZxQ%2FMWKW0V%2FH75hcMcqgzFchtEjuNtN2%2FGagmbfhVAHRHT17Nzbfuv8VrfYs&X-Amz-Signature=9c419bf5205f8478285151f1ab7f35b29fdc50c523e5a070a65d3e50c99962ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2GRKGL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD5onscvM7%2BYNzfqeT%2Bp2g2CGqLpirjFhitv3AOdGAoUgIhAOpGvoundIPXwi26826A9e8Qv7OCeB27m%2F%2B2lEBudZWeKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNI%2BN7a6hEn2MpoPQq3APMhaUsuhuuX6Tq9GZop%2B%2BLsCSpGaYW%2FAy%2FKKS%2FUvhuHDrUPbDT4Qf0mWkCMec9Q%2Bvml7tik7bTfIv8ylW9cynAro%2FSYY0BmjG5XBbIlEb74L%2B2U4TF46x%2FGPqwneFs89jHx5yh%2FI9rgcmxGBKDF8FD79WGTBFhnDLxMUdqitx7vfFD8C%2B7AlIkquH%2F6iiJI4zmq1khzjesJonZGU54QhmjlT%2FI4JPPrJRQLTy9cSirhuEkxJ8esRCqzAEnBFveWAXwAFfLMjEby%2FMSAKm%2FXDi5ib%2BXOVaeRSmpUf22OMqldyFQM2F6dDyqqHk0eJVrFkvbZadJEayRqphUf1TaJuL4tnL%2F%2BauSmAhfEgxYEtgi0KlqJlV2WPIe4sFXNhvMX7XDljEQK6yxiT7Q%2FsioyJFp2vwEwdhbRg%2FaItHn5dssVq8sbRwo9ueF6ZhK25PN7PHmJMVxfUODUOL3JbhrbXWYTpzxUH04G92waWmEvQhciQH4yI8b7phEKfcxEay62lItIHSzbRoguBEiJoD4rVCxRnioNarpTFmYfHWFuF9i7GmQgC6rUyPy1oBgupOzdRZ2TVbv%2FMppYqCwymIgiGOiAv%2F%2B7qq70f%2BzPH5Yy7EZDNiglfQAlzvKhZiJXTDE5pbHBjqkAVvUePQjiqW5s0LMqFJqnrTfLm1sAS8oiepBwJ6dn%2BYIdLdjtbgeaZaqHN2ZJBWN0jv58cI%2Bt4125v842TbM%2F2LggzE0MQwN7RBo0xv7MRxG0Xs2kh3T6NTJfqXKI%2FWyomV2eJAjj45cK99idaMJub6TwVt%2Bpu7cZxQ%2FMWKW0V%2FH75hcMcqgzFchtEjuNtN2%2FGagmbfhVAHRHT17Nzbfuv8VrfYs&X-Amz-Signature=3f48980d46f929cb5f500af7a2c32fd4c959ff7a696149b6bc301b20b721c39c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2GRKGL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD5onscvM7%2BYNzfqeT%2Bp2g2CGqLpirjFhitv3AOdGAoUgIhAOpGvoundIPXwi26826A9e8Qv7OCeB27m%2F%2B2lEBudZWeKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNI%2BN7a6hEn2MpoPQq3APMhaUsuhuuX6Tq9GZop%2B%2BLsCSpGaYW%2FAy%2FKKS%2FUvhuHDrUPbDT4Qf0mWkCMec9Q%2Bvml7tik7bTfIv8ylW9cynAro%2FSYY0BmjG5XBbIlEb74L%2B2U4TF46x%2FGPqwneFs89jHx5yh%2FI9rgcmxGBKDF8FD79WGTBFhnDLxMUdqitx7vfFD8C%2B7AlIkquH%2F6iiJI4zmq1khzjesJonZGU54QhmjlT%2FI4JPPrJRQLTy9cSirhuEkxJ8esRCqzAEnBFveWAXwAFfLMjEby%2FMSAKm%2FXDi5ib%2BXOVaeRSmpUf22OMqldyFQM2F6dDyqqHk0eJVrFkvbZadJEayRqphUf1TaJuL4tnL%2F%2BauSmAhfEgxYEtgi0KlqJlV2WPIe4sFXNhvMX7XDljEQK6yxiT7Q%2FsioyJFp2vwEwdhbRg%2FaItHn5dssVq8sbRwo9ueF6ZhK25PN7PHmJMVxfUODUOL3JbhrbXWYTpzxUH04G92waWmEvQhciQH4yI8b7phEKfcxEay62lItIHSzbRoguBEiJoD4rVCxRnioNarpTFmYfHWFuF9i7GmQgC6rUyPy1oBgupOzdRZ2TVbv%2FMppYqCwymIgiGOiAv%2F%2B7qq70f%2BzPH5Yy7EZDNiglfQAlzvKhZiJXTDE5pbHBjqkAVvUePQjiqW5s0LMqFJqnrTfLm1sAS8oiepBwJ6dn%2BYIdLdjtbgeaZaqHN2ZJBWN0jv58cI%2Bt4125v842TbM%2F2LggzE0MQwN7RBo0xv7MRxG0Xs2kh3T6NTJfqXKI%2FWyomV2eJAjj45cK99idaMJub6TwVt%2Bpu7cZxQ%2FMWKW0V%2FH75hcMcqgzFchtEjuNtN2%2FGagmbfhVAHRHT17Nzbfuv8VrfYs&X-Amz-Signature=de0cab74d62b734cb8ff98c28737e05bdfa6be2cf247e1f1d17744f507c5f025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


