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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEIQLRSV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH0ukgINBRkqcQM0lXMHTKplP9zt50uC92OmrrBe7h8vAiEA%2BmFd1ChTZUuAhRVwRhQlNlo%2Bs3%2FbGJewo9eXsI4ns4wqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyy8vp0gW3sURaDFSrcA0elV2FGTm6vEIU8gmOtM1asRozNGd%2BzWJ6INlFCO3gCoqmc18dqz2Se2T5ZztQuznCOlzo8cwLFRlbXQpZgTS2wqa%2FzgU8WvXjBfoXvxMWbZEjfdz8IjU0y57iylZlmNVEBmB3HXc997weSPNxuNrurlhVJvzKGRTOGYVoFLcp8hSvUHTdaAAFr4msQ%2FEF2iaEGuSLFmfVoy4fDgeYlM2ghBSi4YxXRSN%2FX9x2AX5LRFN1C%2F3YSC%2BRIg%2Ftta2cg71Vzhx8wA0i0nNhfqGjq3s12egfPk%2FodKMhxSAd6u26mE4N%2FMlsFt7Sgmnz4QAgSeIPZHBG7PMIlAooc4sq3rWM3wvzk8086Idi5yf%2FwSeYm%2Fwsriw2zYxzAd%2FXHUI3LM1LDdtfjwWkXOxaSo5%2B5k8EQI9i7mGsfET3z9TFHpxe5m9O1P1iISy02QY6f5O2FUwAi0D55QTiNG3CnSjjjt%2FBIrKSB3ADBuwGsP62jvA%2F%2B9Ii0Imel4hkvSMz4C7DwDuhKLSyGy0KWQwvjXGgle%2F5i7ORXPjU2a5wFh%2Fpua%2BfEFyPJ1wyNuVxheSrgYPok8m9O6AqsqNP303o1oHM%2BBSSRuuD3ilYk24ARJ5i5%2BGhh1KLWNH3scNo8e73KMPSS2cQGOqUBLQjFRWdBlcfZLbXNQmeBR8S%2BijWAQAR9xNxwBLKqBLTzIpAQj2G2Y86NG8jxwY3XtatJU8osYGhIWWtErzS%2F%2FVAz29wHzP%2BLG5QFCac5Br03vJXtOecAUis7ciI8KAWSF34N0kn9mYgKq4hrH3I%2BdcxdN13gWDbwlHqb85RCPRKcpcQvi06Eq9EHEOGMtu8VFQR120o8FJdRIdC5SB%2BV0nCYISSl&X-Amz-Signature=2cf4f463459eec368c733c65ee027c78c193be9ee7675727fe5822761b112255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEIQLRSV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH0ukgINBRkqcQM0lXMHTKplP9zt50uC92OmrrBe7h8vAiEA%2BmFd1ChTZUuAhRVwRhQlNlo%2Bs3%2FbGJewo9eXsI4ns4wqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyy8vp0gW3sURaDFSrcA0elV2FGTm6vEIU8gmOtM1asRozNGd%2BzWJ6INlFCO3gCoqmc18dqz2Se2T5ZztQuznCOlzo8cwLFRlbXQpZgTS2wqa%2FzgU8WvXjBfoXvxMWbZEjfdz8IjU0y57iylZlmNVEBmB3HXc997weSPNxuNrurlhVJvzKGRTOGYVoFLcp8hSvUHTdaAAFr4msQ%2FEF2iaEGuSLFmfVoy4fDgeYlM2ghBSi4YxXRSN%2FX9x2AX5LRFN1C%2F3YSC%2BRIg%2Ftta2cg71Vzhx8wA0i0nNhfqGjq3s12egfPk%2FodKMhxSAd6u26mE4N%2FMlsFt7Sgmnz4QAgSeIPZHBG7PMIlAooc4sq3rWM3wvzk8086Idi5yf%2FwSeYm%2Fwsriw2zYxzAd%2FXHUI3LM1LDdtfjwWkXOxaSo5%2B5k8EQI9i7mGsfET3z9TFHpxe5m9O1P1iISy02QY6f5O2FUwAi0D55QTiNG3CnSjjjt%2FBIrKSB3ADBuwGsP62jvA%2F%2B9Ii0Imel4hkvSMz4C7DwDuhKLSyGy0KWQwvjXGgle%2F5i7ORXPjU2a5wFh%2Fpua%2BfEFyPJ1wyNuVxheSrgYPok8m9O6AqsqNP303o1oHM%2BBSSRuuD3ilYk24ARJ5i5%2BGhh1KLWNH3scNo8e73KMPSS2cQGOqUBLQjFRWdBlcfZLbXNQmeBR8S%2BijWAQAR9xNxwBLKqBLTzIpAQj2G2Y86NG8jxwY3XtatJU8osYGhIWWtErzS%2F%2FVAz29wHzP%2BLG5QFCac5Br03vJXtOecAUis7ciI8KAWSF34N0kn9mYgKq4hrH3I%2BdcxdN13gWDbwlHqb85RCPRKcpcQvi06Eq9EHEOGMtu8VFQR120o8FJdRIdC5SB%2BV0nCYISSl&X-Amz-Signature=5d25edd190a80f75dd5950979ab7cfe34bfc286c29f00738d1c6859913f0f982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEIQLRSV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH0ukgINBRkqcQM0lXMHTKplP9zt50uC92OmrrBe7h8vAiEA%2BmFd1ChTZUuAhRVwRhQlNlo%2Bs3%2FbGJewo9eXsI4ns4wqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyy8vp0gW3sURaDFSrcA0elV2FGTm6vEIU8gmOtM1asRozNGd%2BzWJ6INlFCO3gCoqmc18dqz2Se2T5ZztQuznCOlzo8cwLFRlbXQpZgTS2wqa%2FzgU8WvXjBfoXvxMWbZEjfdz8IjU0y57iylZlmNVEBmB3HXc997weSPNxuNrurlhVJvzKGRTOGYVoFLcp8hSvUHTdaAAFr4msQ%2FEF2iaEGuSLFmfVoy4fDgeYlM2ghBSi4YxXRSN%2FX9x2AX5LRFN1C%2F3YSC%2BRIg%2Ftta2cg71Vzhx8wA0i0nNhfqGjq3s12egfPk%2FodKMhxSAd6u26mE4N%2FMlsFt7Sgmnz4QAgSeIPZHBG7PMIlAooc4sq3rWM3wvzk8086Idi5yf%2FwSeYm%2Fwsriw2zYxzAd%2FXHUI3LM1LDdtfjwWkXOxaSo5%2B5k8EQI9i7mGsfET3z9TFHpxe5m9O1P1iISy02QY6f5O2FUwAi0D55QTiNG3CnSjjjt%2FBIrKSB3ADBuwGsP62jvA%2F%2B9Ii0Imel4hkvSMz4C7DwDuhKLSyGy0KWQwvjXGgle%2F5i7ORXPjU2a5wFh%2Fpua%2BfEFyPJ1wyNuVxheSrgYPok8m9O6AqsqNP303o1oHM%2BBSSRuuD3ilYk24ARJ5i5%2BGhh1KLWNH3scNo8e73KMPSS2cQGOqUBLQjFRWdBlcfZLbXNQmeBR8S%2BijWAQAR9xNxwBLKqBLTzIpAQj2G2Y86NG8jxwY3XtatJU8osYGhIWWtErzS%2F%2FVAz29wHzP%2BLG5QFCac5Br03vJXtOecAUis7ciI8KAWSF34N0kn9mYgKq4hrH3I%2BdcxdN13gWDbwlHqb85RCPRKcpcQvi06Eq9EHEOGMtu8VFQR120o8FJdRIdC5SB%2BV0nCYISSl&X-Amz-Signature=f66a7b0a80b080a826bc0d619dae7b0b3230210edfaba3397e8b63eb47ecb01b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEIQLRSV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH0ukgINBRkqcQM0lXMHTKplP9zt50uC92OmrrBe7h8vAiEA%2BmFd1ChTZUuAhRVwRhQlNlo%2Bs3%2FbGJewo9eXsI4ns4wqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyy8vp0gW3sURaDFSrcA0elV2FGTm6vEIU8gmOtM1asRozNGd%2BzWJ6INlFCO3gCoqmc18dqz2Se2T5ZztQuznCOlzo8cwLFRlbXQpZgTS2wqa%2FzgU8WvXjBfoXvxMWbZEjfdz8IjU0y57iylZlmNVEBmB3HXc997weSPNxuNrurlhVJvzKGRTOGYVoFLcp8hSvUHTdaAAFr4msQ%2FEF2iaEGuSLFmfVoy4fDgeYlM2ghBSi4YxXRSN%2FX9x2AX5LRFN1C%2F3YSC%2BRIg%2Ftta2cg71Vzhx8wA0i0nNhfqGjq3s12egfPk%2FodKMhxSAd6u26mE4N%2FMlsFt7Sgmnz4QAgSeIPZHBG7PMIlAooc4sq3rWM3wvzk8086Idi5yf%2FwSeYm%2Fwsriw2zYxzAd%2FXHUI3LM1LDdtfjwWkXOxaSo5%2B5k8EQI9i7mGsfET3z9TFHpxe5m9O1P1iISy02QY6f5O2FUwAi0D55QTiNG3CnSjjjt%2FBIrKSB3ADBuwGsP62jvA%2F%2B9Ii0Imel4hkvSMz4C7DwDuhKLSyGy0KWQwvjXGgle%2F5i7ORXPjU2a5wFh%2Fpua%2BfEFyPJ1wyNuVxheSrgYPok8m9O6AqsqNP303o1oHM%2BBSSRuuD3ilYk24ARJ5i5%2BGhh1KLWNH3scNo8e73KMPSS2cQGOqUBLQjFRWdBlcfZLbXNQmeBR8S%2BijWAQAR9xNxwBLKqBLTzIpAQj2G2Y86NG8jxwY3XtatJU8osYGhIWWtErzS%2F%2FVAz29wHzP%2BLG5QFCac5Br03vJXtOecAUis7ciI8KAWSF34N0kn9mYgKq4hrH3I%2BdcxdN13gWDbwlHqb85RCPRKcpcQvi06Eq9EHEOGMtu8VFQR120o8FJdRIdC5SB%2BV0nCYISSl&X-Amz-Signature=b9ed7dca9a3cbd72e86b52a13eb278c72a3164d55c4dff7ea9fd436a522b98c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP2WAIZL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCTjd2nJ6xPV%2BDR2wUd5jQixIq2A25T4lgLoc9Ju7peUQIhALqQaS0U1N0jfPTA5BZyX83T0KWstTN3MKDZ3adeORJfKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0tayOkcBxE%2FA6a1Yq3AO5II91rkTN6yVFxSBDU99Du8e%2FqmwIVQ7OomEsi5kd4kK7ZchmW4FZrt2jymPp5T0BPAOBYHg5awtq8TpENi18QAVc3n7cCzPaB5detU0TnYQGLcq4ttsMi%2BrrCeCq5mf7OzMJ6Y1ssJmMlDrupOJJaziopk0Ppe2Zwor8HagvGChk%2BmIIHfazszptBNoLlq5AX%2BO7igPAvT5FX3Stn2oknNBSwG4YbPKJ9rJV4mW0VAxPRbtTlNsrYPYUUhF5l3qQSOpGP2p9q0BXPzj5kLUzuV2jWZtH2lQwSMsT1EZh19hnsX2G3siSEzQXNgzclEzwOjTWQUERLUdPDZFr%2FZy9G0KTM4Jv8a6GpQruZ%2BE6ynnmL3kp0RKth2Jur%2FM3kL0mTqPrl%2Fc5gO1SWuL1Xq95XBeIvFGo53t%2B%2Bn68IaNuLG3Puy1ZaQv2CjsJGYG%2FO7SmThkXHU7Fszws3NQUlOq6%2BXzqvQrGRrpPBZlO5lp7n7tkYY80HLly782oeFWcZzCFTJiOAdQ8ZqP5IK1GoaSqGqvFMazL%2FX0IkUOxM4tLPHwduVcT6up3towo0A55x3FT3izONy67NR8pceU96P4DCnOm7bi5q%2Bf1Lhlw3n9yjbzHlVogO4vSLqt7mDC9ktnEBjqkAaCrelp7EswzEwbyEjdPqbpNR%2BlPB056yAgIKNfHnFcnfOUQ2L7ivH5ucHzE4gZOFYKU6W3YOGjY8v%2BEwcRzhsKWHU6f2NGTnZhSEIRhpsXrmnla4cCTYWQyqDC2o11mIqSShpyA4GKD%2BLmAQOnfZ4kVAvMBqOtYV%2F53QeOn9TqC4XAGs4LLJ%2BRrw5ZUFB16cWLT8YNINJkvHD4hmd86WRuhfAZb&X-Amz-Signature=90fe99136e3aa96aca2e07c14185b3aca9e671aa880ea0943211262f853fd240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEIQLRSV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH0ukgINBRkqcQM0lXMHTKplP9zt50uC92OmrrBe7h8vAiEA%2BmFd1ChTZUuAhRVwRhQlNlo%2Bs3%2FbGJewo9eXsI4ns4wqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyy8vp0gW3sURaDFSrcA0elV2FGTm6vEIU8gmOtM1asRozNGd%2BzWJ6INlFCO3gCoqmc18dqz2Se2T5ZztQuznCOlzo8cwLFRlbXQpZgTS2wqa%2FzgU8WvXjBfoXvxMWbZEjfdz8IjU0y57iylZlmNVEBmB3HXc997weSPNxuNrurlhVJvzKGRTOGYVoFLcp8hSvUHTdaAAFr4msQ%2FEF2iaEGuSLFmfVoy4fDgeYlM2ghBSi4YxXRSN%2FX9x2AX5LRFN1C%2F3YSC%2BRIg%2Ftta2cg71Vzhx8wA0i0nNhfqGjq3s12egfPk%2FodKMhxSAd6u26mE4N%2FMlsFt7Sgmnz4QAgSeIPZHBG7PMIlAooc4sq3rWM3wvzk8086Idi5yf%2FwSeYm%2Fwsriw2zYxzAd%2FXHUI3LM1LDdtfjwWkXOxaSo5%2B5k8EQI9i7mGsfET3z9TFHpxe5m9O1P1iISy02QY6f5O2FUwAi0D55QTiNG3CnSjjjt%2FBIrKSB3ADBuwGsP62jvA%2F%2B9Ii0Imel4hkvSMz4C7DwDuhKLSyGy0KWQwvjXGgle%2F5i7ORXPjU2a5wFh%2Fpua%2BfEFyPJ1wyNuVxheSrgYPok8m9O6AqsqNP303o1oHM%2BBSSRuuD3ilYk24ARJ5i5%2BGhh1KLWNH3scNo8e73KMPSS2cQGOqUBLQjFRWdBlcfZLbXNQmeBR8S%2BijWAQAR9xNxwBLKqBLTzIpAQj2G2Y86NG8jxwY3XtatJU8osYGhIWWtErzS%2F%2FVAz29wHzP%2BLG5QFCac5Br03vJXtOecAUis7ciI8KAWSF34N0kn9mYgKq4hrH3I%2BdcxdN13gWDbwlHqb85RCPRKcpcQvi06Eq9EHEOGMtu8VFQR120o8FJdRIdC5SB%2BV0nCYISSl&X-Amz-Signature=624dfb8adab334f75bc00e74d4a0d97d07ec5413ac88a8819f4d0b0a000105f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEIQLRSV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH0ukgINBRkqcQM0lXMHTKplP9zt50uC92OmrrBe7h8vAiEA%2BmFd1ChTZUuAhRVwRhQlNlo%2Bs3%2FbGJewo9eXsI4ns4wqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyy8vp0gW3sURaDFSrcA0elV2FGTm6vEIU8gmOtM1asRozNGd%2BzWJ6INlFCO3gCoqmc18dqz2Se2T5ZztQuznCOlzo8cwLFRlbXQpZgTS2wqa%2FzgU8WvXjBfoXvxMWbZEjfdz8IjU0y57iylZlmNVEBmB3HXc997weSPNxuNrurlhVJvzKGRTOGYVoFLcp8hSvUHTdaAAFr4msQ%2FEF2iaEGuSLFmfVoy4fDgeYlM2ghBSi4YxXRSN%2FX9x2AX5LRFN1C%2F3YSC%2BRIg%2Ftta2cg71Vzhx8wA0i0nNhfqGjq3s12egfPk%2FodKMhxSAd6u26mE4N%2FMlsFt7Sgmnz4QAgSeIPZHBG7PMIlAooc4sq3rWM3wvzk8086Idi5yf%2FwSeYm%2Fwsriw2zYxzAd%2FXHUI3LM1LDdtfjwWkXOxaSo5%2B5k8EQI9i7mGsfET3z9TFHpxe5m9O1P1iISy02QY6f5O2FUwAi0D55QTiNG3CnSjjjt%2FBIrKSB3ADBuwGsP62jvA%2F%2B9Ii0Imel4hkvSMz4C7DwDuhKLSyGy0KWQwvjXGgle%2F5i7ORXPjU2a5wFh%2Fpua%2BfEFyPJ1wyNuVxheSrgYPok8m9O6AqsqNP303o1oHM%2BBSSRuuD3ilYk24ARJ5i5%2BGhh1KLWNH3scNo8e73KMPSS2cQGOqUBLQjFRWdBlcfZLbXNQmeBR8S%2BijWAQAR9xNxwBLKqBLTzIpAQj2G2Y86NG8jxwY3XtatJU8osYGhIWWtErzS%2F%2FVAz29wHzP%2BLG5QFCac5Br03vJXtOecAUis7ciI8KAWSF34N0kn9mYgKq4hrH3I%2BdcxdN13gWDbwlHqb85RCPRKcpcQvi06Eq9EHEOGMtu8VFQR120o8FJdRIdC5SB%2BV0nCYISSl&X-Amz-Signature=f767e2692a72f6f221594897f7c9c219dc5f9d1c4dbe3382eb9830b3d829afa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEIQLRSV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH0ukgINBRkqcQM0lXMHTKplP9zt50uC92OmrrBe7h8vAiEA%2BmFd1ChTZUuAhRVwRhQlNlo%2Bs3%2FbGJewo9eXsI4ns4wqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyy8vp0gW3sURaDFSrcA0elV2FGTm6vEIU8gmOtM1asRozNGd%2BzWJ6INlFCO3gCoqmc18dqz2Se2T5ZztQuznCOlzo8cwLFRlbXQpZgTS2wqa%2FzgU8WvXjBfoXvxMWbZEjfdz8IjU0y57iylZlmNVEBmB3HXc997weSPNxuNrurlhVJvzKGRTOGYVoFLcp8hSvUHTdaAAFr4msQ%2FEF2iaEGuSLFmfVoy4fDgeYlM2ghBSi4YxXRSN%2FX9x2AX5LRFN1C%2F3YSC%2BRIg%2Ftta2cg71Vzhx8wA0i0nNhfqGjq3s12egfPk%2FodKMhxSAd6u26mE4N%2FMlsFt7Sgmnz4QAgSeIPZHBG7PMIlAooc4sq3rWM3wvzk8086Idi5yf%2FwSeYm%2Fwsriw2zYxzAd%2FXHUI3LM1LDdtfjwWkXOxaSo5%2B5k8EQI9i7mGsfET3z9TFHpxe5m9O1P1iISy02QY6f5O2FUwAi0D55QTiNG3CnSjjjt%2FBIrKSB3ADBuwGsP62jvA%2F%2B9Ii0Imel4hkvSMz4C7DwDuhKLSyGy0KWQwvjXGgle%2F5i7ORXPjU2a5wFh%2Fpua%2BfEFyPJ1wyNuVxheSrgYPok8m9O6AqsqNP303o1oHM%2BBSSRuuD3ilYk24ARJ5i5%2BGhh1KLWNH3scNo8e73KMPSS2cQGOqUBLQjFRWdBlcfZLbXNQmeBR8S%2BijWAQAR9xNxwBLKqBLTzIpAQj2G2Y86NG8jxwY3XtatJU8osYGhIWWtErzS%2F%2FVAz29wHzP%2BLG5QFCac5Br03vJXtOecAUis7ciI8KAWSF34N0kn9mYgKq4hrH3I%2BdcxdN13gWDbwlHqb85RCPRKcpcQvi06Eq9EHEOGMtu8VFQR120o8FJdRIdC5SB%2BV0nCYISSl&X-Amz-Signature=075aa1bb88b6c37f93b0c16337b372a0a97c289831dfb10bd1867ecba740a109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEIQLRSV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH0ukgINBRkqcQM0lXMHTKplP9zt50uC92OmrrBe7h8vAiEA%2BmFd1ChTZUuAhRVwRhQlNlo%2Bs3%2FbGJewo9eXsI4ns4wqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyy8vp0gW3sURaDFSrcA0elV2FGTm6vEIU8gmOtM1asRozNGd%2BzWJ6INlFCO3gCoqmc18dqz2Se2T5ZztQuznCOlzo8cwLFRlbXQpZgTS2wqa%2FzgU8WvXjBfoXvxMWbZEjfdz8IjU0y57iylZlmNVEBmB3HXc997weSPNxuNrurlhVJvzKGRTOGYVoFLcp8hSvUHTdaAAFr4msQ%2FEF2iaEGuSLFmfVoy4fDgeYlM2ghBSi4YxXRSN%2FX9x2AX5LRFN1C%2F3YSC%2BRIg%2Ftta2cg71Vzhx8wA0i0nNhfqGjq3s12egfPk%2FodKMhxSAd6u26mE4N%2FMlsFt7Sgmnz4QAgSeIPZHBG7PMIlAooc4sq3rWM3wvzk8086Idi5yf%2FwSeYm%2Fwsriw2zYxzAd%2FXHUI3LM1LDdtfjwWkXOxaSo5%2B5k8EQI9i7mGsfET3z9TFHpxe5m9O1P1iISy02QY6f5O2FUwAi0D55QTiNG3CnSjjjt%2FBIrKSB3ADBuwGsP62jvA%2F%2B9Ii0Imel4hkvSMz4C7DwDuhKLSyGy0KWQwvjXGgle%2F5i7ORXPjU2a5wFh%2Fpua%2BfEFyPJ1wyNuVxheSrgYPok8m9O6AqsqNP303o1oHM%2BBSSRuuD3ilYk24ARJ5i5%2BGhh1KLWNH3scNo8e73KMPSS2cQGOqUBLQjFRWdBlcfZLbXNQmeBR8S%2BijWAQAR9xNxwBLKqBLTzIpAQj2G2Y86NG8jxwY3XtatJU8osYGhIWWtErzS%2F%2FVAz29wHzP%2BLG5QFCac5Br03vJXtOecAUis7ciI8KAWSF34N0kn9mYgKq4hrH3I%2BdcxdN13gWDbwlHqb85RCPRKcpcQvi06Eq9EHEOGMtu8VFQR120o8FJdRIdC5SB%2BV0nCYISSl&X-Amz-Signature=09c95a7719880e27f26e3f444a86d0f346bd94103df338e49d3bafa900931e55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEIQLRSV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH0ukgINBRkqcQM0lXMHTKplP9zt50uC92OmrrBe7h8vAiEA%2BmFd1ChTZUuAhRVwRhQlNlo%2Bs3%2FbGJewo9eXsI4ns4wqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyy8vp0gW3sURaDFSrcA0elV2FGTm6vEIU8gmOtM1asRozNGd%2BzWJ6INlFCO3gCoqmc18dqz2Se2T5ZztQuznCOlzo8cwLFRlbXQpZgTS2wqa%2FzgU8WvXjBfoXvxMWbZEjfdz8IjU0y57iylZlmNVEBmB3HXc997weSPNxuNrurlhVJvzKGRTOGYVoFLcp8hSvUHTdaAAFr4msQ%2FEF2iaEGuSLFmfVoy4fDgeYlM2ghBSi4YxXRSN%2FX9x2AX5LRFN1C%2F3YSC%2BRIg%2Ftta2cg71Vzhx8wA0i0nNhfqGjq3s12egfPk%2FodKMhxSAd6u26mE4N%2FMlsFt7Sgmnz4QAgSeIPZHBG7PMIlAooc4sq3rWM3wvzk8086Idi5yf%2FwSeYm%2Fwsriw2zYxzAd%2FXHUI3LM1LDdtfjwWkXOxaSo5%2B5k8EQI9i7mGsfET3z9TFHpxe5m9O1P1iISy02QY6f5O2FUwAi0D55QTiNG3CnSjjjt%2FBIrKSB3ADBuwGsP62jvA%2F%2B9Ii0Imel4hkvSMz4C7DwDuhKLSyGy0KWQwvjXGgle%2F5i7ORXPjU2a5wFh%2Fpua%2BfEFyPJ1wyNuVxheSrgYPok8m9O6AqsqNP303o1oHM%2BBSSRuuD3ilYk24ARJ5i5%2BGhh1KLWNH3scNo8e73KMPSS2cQGOqUBLQjFRWdBlcfZLbXNQmeBR8S%2BijWAQAR9xNxwBLKqBLTzIpAQj2G2Y86NG8jxwY3XtatJU8osYGhIWWtErzS%2F%2FVAz29wHzP%2BLG5QFCac5Br03vJXtOecAUis7ciI8KAWSF34N0kn9mYgKq4hrH3I%2BdcxdN13gWDbwlHqb85RCPRKcpcQvi06Eq9EHEOGMtu8VFQR120o8FJdRIdC5SB%2BV0nCYISSl&X-Amz-Signature=2c231a4c5925f56130f1540d41842b44e8759aa60e3175e82589cecdb7fe71c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEIQLRSV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH0ukgINBRkqcQM0lXMHTKplP9zt50uC92OmrrBe7h8vAiEA%2BmFd1ChTZUuAhRVwRhQlNlo%2Bs3%2FbGJewo9eXsI4ns4wqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyy8vp0gW3sURaDFSrcA0elV2FGTm6vEIU8gmOtM1asRozNGd%2BzWJ6INlFCO3gCoqmc18dqz2Se2T5ZztQuznCOlzo8cwLFRlbXQpZgTS2wqa%2FzgU8WvXjBfoXvxMWbZEjfdz8IjU0y57iylZlmNVEBmB3HXc997weSPNxuNrurlhVJvzKGRTOGYVoFLcp8hSvUHTdaAAFr4msQ%2FEF2iaEGuSLFmfVoy4fDgeYlM2ghBSi4YxXRSN%2FX9x2AX5LRFN1C%2F3YSC%2BRIg%2Ftta2cg71Vzhx8wA0i0nNhfqGjq3s12egfPk%2FodKMhxSAd6u26mE4N%2FMlsFt7Sgmnz4QAgSeIPZHBG7PMIlAooc4sq3rWM3wvzk8086Idi5yf%2FwSeYm%2Fwsriw2zYxzAd%2FXHUI3LM1LDdtfjwWkXOxaSo5%2B5k8EQI9i7mGsfET3z9TFHpxe5m9O1P1iISy02QY6f5O2FUwAi0D55QTiNG3CnSjjjt%2FBIrKSB3ADBuwGsP62jvA%2F%2B9Ii0Imel4hkvSMz4C7DwDuhKLSyGy0KWQwvjXGgle%2F5i7ORXPjU2a5wFh%2Fpua%2BfEFyPJ1wyNuVxheSrgYPok8m9O6AqsqNP303o1oHM%2BBSSRuuD3ilYk24ARJ5i5%2BGhh1KLWNH3scNo8e73KMPSS2cQGOqUBLQjFRWdBlcfZLbXNQmeBR8S%2BijWAQAR9xNxwBLKqBLTzIpAQj2G2Y86NG8jxwY3XtatJU8osYGhIWWtErzS%2F%2FVAz29wHzP%2BLG5QFCac5Br03vJXtOecAUis7ciI8KAWSF34N0kn9mYgKq4hrH3I%2BdcxdN13gWDbwlHqb85RCPRKcpcQvi06Eq9EHEOGMtu8VFQR120o8FJdRIdC5SB%2BV0nCYISSl&X-Amz-Signature=85dc8e705e5bfbd31cf3d794f2dbc587f9e27fa3cdf32a66883b58cf31717711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
