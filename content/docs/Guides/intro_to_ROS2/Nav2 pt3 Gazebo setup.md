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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLQ7AWB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB5xZZpaY6yfM77Jvrzz09gMGS2aYpElvdMhuNxQ017AIhAKN1d8LTWd%2BJF77%2BaTU12Ipi8ErBab%2BkYMfXkkbVP60dKv8DCEEQABoMNjM3NDIzMTgzODA1IgzWoEXEKugDQjCXw9Mq3AOoQca45clC9%2Fo9UQBT8r1jEzdn0bUA%2B7aLfnxwOpV5bzHp8ZPzs65QVqzjJo9U6Hzoztof4GjmULB4PS5pmad4E34afF4tFAMFvzuvscWZyQfRcGSx%2FbJLvwg8Dyla2xoG0gARDzpBS23jmwM%2FrlQCHhlmHzf97zujEqNA8VN1W00K2SpYdEsSVlk0LKY1t0aKIRS%2B7rQ09t7pcn3I5qBytvtPkKFSqsH5Jr6NVg7WOc7sv33qfX5VuJOqxEIm1lTjnrKprfwEWNBOXtt%2BNPUHharapA%2B3B7BIyVrJ96%2FfsWq7p%2BzMnFAF8iEJ%2BkmKbYQNf7j1WM9tBvA75YbCljEe8XuQ0CU8HbbvCpG57flM7gGljKX1UhxLc5UPtne5VJg73DfOoEUu4ZMeVEjNC04G2LYQJE%2F1SBuiVRBDq2WrQBJF4APKJcqMix7flKiYrIS7VFajJ5HFu6dfxypn0V2qbQkrgvA3Nxvqay2FmWxe7nG1zhtCo34J4eRuaj7QNWGczhu3%2F7pWTvxsO0%2FHsi7pdxquG5aeTbnjSUvTVKaerWXgrtdgnFJJOvUmmPn2Dp75hnbA3b33Db5k2dV1fwsGGd8Ah5%2Fc%2FaFFXXSKpU1Mhc5RTFGcxT7CZTnMODCOrvbEBjqkAb7CdNGCIKkodE8YNKHwek6GAcgf8%2B%2FQAx1Rq3ISG7fo6sje7lbZvrGdOvkIhOwN1kJMNEEvi0vXrSkCQlhVYPYwNrii1xXpgSsf408zPocUWmwCh2M2W6waxyDGc8rq8N2ADqWkA6%2BkEfkTQjzsghCTCwPqkMx5Q2JFnQ0bYmfD%2BsiXqKneev1FmqeTrhJqsyXjFDGGHdeqcvMVk4CyxlE8NbWt&X-Amz-Signature=ef25e5181643d108272a85b2c19cb633879f3ba00d0a25618054f3c0435c2ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLQ7AWB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB5xZZpaY6yfM77Jvrzz09gMGS2aYpElvdMhuNxQ017AIhAKN1d8LTWd%2BJF77%2BaTU12Ipi8ErBab%2BkYMfXkkbVP60dKv8DCEEQABoMNjM3NDIzMTgzODA1IgzWoEXEKugDQjCXw9Mq3AOoQca45clC9%2Fo9UQBT8r1jEzdn0bUA%2B7aLfnxwOpV5bzHp8ZPzs65QVqzjJo9U6Hzoztof4GjmULB4PS5pmad4E34afF4tFAMFvzuvscWZyQfRcGSx%2FbJLvwg8Dyla2xoG0gARDzpBS23jmwM%2FrlQCHhlmHzf97zujEqNA8VN1W00K2SpYdEsSVlk0LKY1t0aKIRS%2B7rQ09t7pcn3I5qBytvtPkKFSqsH5Jr6NVg7WOc7sv33qfX5VuJOqxEIm1lTjnrKprfwEWNBOXtt%2BNPUHharapA%2B3B7BIyVrJ96%2FfsWq7p%2BzMnFAF8iEJ%2BkmKbYQNf7j1WM9tBvA75YbCljEe8XuQ0CU8HbbvCpG57flM7gGljKX1UhxLc5UPtne5VJg73DfOoEUu4ZMeVEjNC04G2LYQJE%2F1SBuiVRBDq2WrQBJF4APKJcqMix7flKiYrIS7VFajJ5HFu6dfxypn0V2qbQkrgvA3Nxvqay2FmWxe7nG1zhtCo34J4eRuaj7QNWGczhu3%2F7pWTvxsO0%2FHsi7pdxquG5aeTbnjSUvTVKaerWXgrtdgnFJJOvUmmPn2Dp75hnbA3b33Db5k2dV1fwsGGd8Ah5%2Fc%2FaFFXXSKpU1Mhc5RTFGcxT7CZTnMODCOrvbEBjqkAb7CdNGCIKkodE8YNKHwek6GAcgf8%2B%2FQAx1Rq3ISG7fo6sje7lbZvrGdOvkIhOwN1kJMNEEvi0vXrSkCQlhVYPYwNrii1xXpgSsf408zPocUWmwCh2M2W6waxyDGc8rq8N2ADqWkA6%2BkEfkTQjzsghCTCwPqkMx5Q2JFnQ0bYmfD%2BsiXqKneev1FmqeTrhJqsyXjFDGGHdeqcvMVk4CyxlE8NbWt&X-Amz-Signature=f2f50075cc3695bffe61c5e7334e87d262508b13e8bad81e7005f9b07066941a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLQ7AWB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB5xZZpaY6yfM77Jvrzz09gMGS2aYpElvdMhuNxQ017AIhAKN1d8LTWd%2BJF77%2BaTU12Ipi8ErBab%2BkYMfXkkbVP60dKv8DCEEQABoMNjM3NDIzMTgzODA1IgzWoEXEKugDQjCXw9Mq3AOoQca45clC9%2Fo9UQBT8r1jEzdn0bUA%2B7aLfnxwOpV5bzHp8ZPzs65QVqzjJo9U6Hzoztof4GjmULB4PS5pmad4E34afF4tFAMFvzuvscWZyQfRcGSx%2FbJLvwg8Dyla2xoG0gARDzpBS23jmwM%2FrlQCHhlmHzf97zujEqNA8VN1W00K2SpYdEsSVlk0LKY1t0aKIRS%2B7rQ09t7pcn3I5qBytvtPkKFSqsH5Jr6NVg7WOc7sv33qfX5VuJOqxEIm1lTjnrKprfwEWNBOXtt%2BNPUHharapA%2B3B7BIyVrJ96%2FfsWq7p%2BzMnFAF8iEJ%2BkmKbYQNf7j1WM9tBvA75YbCljEe8XuQ0CU8HbbvCpG57flM7gGljKX1UhxLc5UPtne5VJg73DfOoEUu4ZMeVEjNC04G2LYQJE%2F1SBuiVRBDq2WrQBJF4APKJcqMix7flKiYrIS7VFajJ5HFu6dfxypn0V2qbQkrgvA3Nxvqay2FmWxe7nG1zhtCo34J4eRuaj7QNWGczhu3%2F7pWTvxsO0%2FHsi7pdxquG5aeTbnjSUvTVKaerWXgrtdgnFJJOvUmmPn2Dp75hnbA3b33Db5k2dV1fwsGGd8Ah5%2Fc%2FaFFXXSKpU1Mhc5RTFGcxT7CZTnMODCOrvbEBjqkAb7CdNGCIKkodE8YNKHwek6GAcgf8%2B%2FQAx1Rq3ISG7fo6sje7lbZvrGdOvkIhOwN1kJMNEEvi0vXrSkCQlhVYPYwNrii1xXpgSsf408zPocUWmwCh2M2W6waxyDGc8rq8N2ADqWkA6%2BkEfkTQjzsghCTCwPqkMx5Q2JFnQ0bYmfD%2BsiXqKneev1FmqeTrhJqsyXjFDGGHdeqcvMVk4CyxlE8NbWt&X-Amz-Signature=352a7055fcde68bd392bb2ceaca1df96655e75100983e5761afd75d59c756370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLQ7AWB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB5xZZpaY6yfM77Jvrzz09gMGS2aYpElvdMhuNxQ017AIhAKN1d8LTWd%2BJF77%2BaTU12Ipi8ErBab%2BkYMfXkkbVP60dKv8DCEEQABoMNjM3NDIzMTgzODA1IgzWoEXEKugDQjCXw9Mq3AOoQca45clC9%2Fo9UQBT8r1jEzdn0bUA%2B7aLfnxwOpV5bzHp8ZPzs65QVqzjJo9U6Hzoztof4GjmULB4PS5pmad4E34afF4tFAMFvzuvscWZyQfRcGSx%2FbJLvwg8Dyla2xoG0gARDzpBS23jmwM%2FrlQCHhlmHzf97zujEqNA8VN1W00K2SpYdEsSVlk0LKY1t0aKIRS%2B7rQ09t7pcn3I5qBytvtPkKFSqsH5Jr6NVg7WOc7sv33qfX5VuJOqxEIm1lTjnrKprfwEWNBOXtt%2BNPUHharapA%2B3B7BIyVrJ96%2FfsWq7p%2BzMnFAF8iEJ%2BkmKbYQNf7j1WM9tBvA75YbCljEe8XuQ0CU8HbbvCpG57flM7gGljKX1UhxLc5UPtne5VJg73DfOoEUu4ZMeVEjNC04G2LYQJE%2F1SBuiVRBDq2WrQBJF4APKJcqMix7flKiYrIS7VFajJ5HFu6dfxypn0V2qbQkrgvA3Nxvqay2FmWxe7nG1zhtCo34J4eRuaj7QNWGczhu3%2F7pWTvxsO0%2FHsi7pdxquG5aeTbnjSUvTVKaerWXgrtdgnFJJOvUmmPn2Dp75hnbA3b33Db5k2dV1fwsGGd8Ah5%2Fc%2FaFFXXSKpU1Mhc5RTFGcxT7CZTnMODCOrvbEBjqkAb7CdNGCIKkodE8YNKHwek6GAcgf8%2B%2FQAx1Rq3ISG7fo6sje7lbZvrGdOvkIhOwN1kJMNEEvi0vXrSkCQlhVYPYwNrii1xXpgSsf408zPocUWmwCh2M2W6waxyDGc8rq8N2ADqWkA6%2BkEfkTQjzsghCTCwPqkMx5Q2JFnQ0bYmfD%2BsiXqKneev1FmqeTrhJqsyXjFDGGHdeqcvMVk4CyxlE8NbWt&X-Amz-Signature=122493cf5069fdef56a65fd5fd74039c68851a9ea311d94627f3beccfbe727c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KX2ISDS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxjxtsqbtkMGao8ROpEind3bQFlcjZnpZ8S1xd3sklRgIgLvLgPlSkdIqnu8E%2BKVZ%2Bxfw8aSXRy2ZgnKQZLRCanncq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAALtxlS7UHMVZ8CWircA2s15sOAy8otlke7Pgp6B8fZPHWuSfMwGhqMeFX%2FGO6PfxH2ymRfWrkNAL8VNRPwDAqc7igGfmcwU9Bcwm%2BiaasUEbe50CQwfofGmHjR%2Flsibs2HwO9YTzVGSfecBna18pHj7YG%2BUIAzLSnxUzVQz7va1Uk2%2BnziuXctZ%2FeY3EScAfHn3e7xbC4o7LLFUL%2B2kDE7YtzLTMfTinm8NowbOgldQUnlQRgLmfJFnIFO%2Bz9526%2FPMEXsjP1uf7Mjbe888PZPMmzjeT52Wv%2Br3T5BNXmU%2B9AM%2BkjtgCdbfjDLWiNmidJcwOTMyJzEqn6xf%2Brp1RFN9EfzHor2%2FdJ%2F29JD5toLQ%2FAKvl4Q06QRhV929IBcMS7a%2FDbkBBzBSdlLA%2F%2Bt3WAWuA%2BIcH%2BGE98XfHw7A72Q2zKH%2B1Of%2B9Fz9hpcoQadXcG6r%2F0k5rFVuX1oDPOLRsT12GEyzC3LokiiF9eWjoFlcp1SU6NreuYFQrm%2F%2Fj%2F37pYMRbsY80GBnypwvCWsmYtcEclMzHusWHvyMKQQo19USDDYm45lvHWBM8jSsYUmMU7sDGKgoWpwuXyBMdr8CwYp6S33Y5q1ersTQKnDQTgWV%2FbFU8C3TRxDUBtQ6GfH256UHvzholexZEc8MKav9sQGOqUBROfieNS%2Fv7U2JObtao0MXrovisoANCNTh7BYGFrCaKxOHB9H8hKHVY61l6xq2A3q07P8O7p7erknKMdXlaTMDocHyYcmKD4c2eYLQPnnae4L4yzPTHrnr57LbJMAzASpF0mBFSPNOKKmPUkjUIEQJ57lyvA7S9UMsKF8Hzg%2FBGkJdx9sHZhAfPqetfOLU2gQ5dVUAlhqxWzD7sEswKMfzMaGuvX5&X-Amz-Signature=44fcbdadb06dcd572c1810ae9eccf4de43841daa860f331eca4202757e6376da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLQ7AWB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB5xZZpaY6yfM77Jvrzz09gMGS2aYpElvdMhuNxQ017AIhAKN1d8LTWd%2BJF77%2BaTU12Ipi8ErBab%2BkYMfXkkbVP60dKv8DCEEQABoMNjM3NDIzMTgzODA1IgzWoEXEKugDQjCXw9Mq3AOoQca45clC9%2Fo9UQBT8r1jEzdn0bUA%2B7aLfnxwOpV5bzHp8ZPzs65QVqzjJo9U6Hzoztof4GjmULB4PS5pmad4E34afF4tFAMFvzuvscWZyQfRcGSx%2FbJLvwg8Dyla2xoG0gARDzpBS23jmwM%2FrlQCHhlmHzf97zujEqNA8VN1W00K2SpYdEsSVlk0LKY1t0aKIRS%2B7rQ09t7pcn3I5qBytvtPkKFSqsH5Jr6NVg7WOc7sv33qfX5VuJOqxEIm1lTjnrKprfwEWNBOXtt%2BNPUHharapA%2B3B7BIyVrJ96%2FfsWq7p%2BzMnFAF8iEJ%2BkmKbYQNf7j1WM9tBvA75YbCljEe8XuQ0CU8HbbvCpG57flM7gGljKX1UhxLc5UPtne5VJg73DfOoEUu4ZMeVEjNC04G2LYQJE%2F1SBuiVRBDq2WrQBJF4APKJcqMix7flKiYrIS7VFajJ5HFu6dfxypn0V2qbQkrgvA3Nxvqay2FmWxe7nG1zhtCo34J4eRuaj7QNWGczhu3%2F7pWTvxsO0%2FHsi7pdxquG5aeTbnjSUvTVKaerWXgrtdgnFJJOvUmmPn2Dp75hnbA3b33Db5k2dV1fwsGGd8Ah5%2Fc%2FaFFXXSKpU1Mhc5RTFGcxT7CZTnMODCOrvbEBjqkAb7CdNGCIKkodE8YNKHwek6GAcgf8%2B%2FQAx1Rq3ISG7fo6sje7lbZvrGdOvkIhOwN1kJMNEEvi0vXrSkCQlhVYPYwNrii1xXpgSsf408zPocUWmwCh2M2W6waxyDGc8rq8N2ADqWkA6%2BkEfkTQjzsghCTCwPqkMx5Q2JFnQ0bYmfD%2BsiXqKneev1FmqeTrhJqsyXjFDGGHdeqcvMVk4CyxlE8NbWt&X-Amz-Signature=2c65895de0f765775cd32f242a20e16dde7c756627d9f8b9a1113e8b1c600e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLQ7AWB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB5xZZpaY6yfM77Jvrzz09gMGS2aYpElvdMhuNxQ017AIhAKN1d8LTWd%2BJF77%2BaTU12Ipi8ErBab%2BkYMfXkkbVP60dKv8DCEEQABoMNjM3NDIzMTgzODA1IgzWoEXEKugDQjCXw9Mq3AOoQca45clC9%2Fo9UQBT8r1jEzdn0bUA%2B7aLfnxwOpV5bzHp8ZPzs65QVqzjJo9U6Hzoztof4GjmULB4PS5pmad4E34afF4tFAMFvzuvscWZyQfRcGSx%2FbJLvwg8Dyla2xoG0gARDzpBS23jmwM%2FrlQCHhlmHzf97zujEqNA8VN1W00K2SpYdEsSVlk0LKY1t0aKIRS%2B7rQ09t7pcn3I5qBytvtPkKFSqsH5Jr6NVg7WOc7sv33qfX5VuJOqxEIm1lTjnrKprfwEWNBOXtt%2BNPUHharapA%2B3B7BIyVrJ96%2FfsWq7p%2BzMnFAF8iEJ%2BkmKbYQNf7j1WM9tBvA75YbCljEe8XuQ0CU8HbbvCpG57flM7gGljKX1UhxLc5UPtne5VJg73DfOoEUu4ZMeVEjNC04G2LYQJE%2F1SBuiVRBDq2WrQBJF4APKJcqMix7flKiYrIS7VFajJ5HFu6dfxypn0V2qbQkrgvA3Nxvqay2FmWxe7nG1zhtCo34J4eRuaj7QNWGczhu3%2F7pWTvxsO0%2FHsi7pdxquG5aeTbnjSUvTVKaerWXgrtdgnFJJOvUmmPn2Dp75hnbA3b33Db5k2dV1fwsGGd8Ah5%2Fc%2FaFFXXSKpU1Mhc5RTFGcxT7CZTnMODCOrvbEBjqkAb7CdNGCIKkodE8YNKHwek6GAcgf8%2B%2FQAx1Rq3ISG7fo6sje7lbZvrGdOvkIhOwN1kJMNEEvi0vXrSkCQlhVYPYwNrii1xXpgSsf408zPocUWmwCh2M2W6waxyDGc8rq8N2ADqWkA6%2BkEfkTQjzsghCTCwPqkMx5Q2JFnQ0bYmfD%2BsiXqKneev1FmqeTrhJqsyXjFDGGHdeqcvMVk4CyxlE8NbWt&X-Amz-Signature=7f9adc90216b064b3749386b6db8b5977f208f991527839ec25bade135d754a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLQ7AWB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB5xZZpaY6yfM77Jvrzz09gMGS2aYpElvdMhuNxQ017AIhAKN1d8LTWd%2BJF77%2BaTU12Ipi8ErBab%2BkYMfXkkbVP60dKv8DCEEQABoMNjM3NDIzMTgzODA1IgzWoEXEKugDQjCXw9Mq3AOoQca45clC9%2Fo9UQBT8r1jEzdn0bUA%2B7aLfnxwOpV5bzHp8ZPzs65QVqzjJo9U6Hzoztof4GjmULB4PS5pmad4E34afF4tFAMFvzuvscWZyQfRcGSx%2FbJLvwg8Dyla2xoG0gARDzpBS23jmwM%2FrlQCHhlmHzf97zujEqNA8VN1W00K2SpYdEsSVlk0LKY1t0aKIRS%2B7rQ09t7pcn3I5qBytvtPkKFSqsH5Jr6NVg7WOc7sv33qfX5VuJOqxEIm1lTjnrKprfwEWNBOXtt%2BNPUHharapA%2B3B7BIyVrJ96%2FfsWq7p%2BzMnFAF8iEJ%2BkmKbYQNf7j1WM9tBvA75YbCljEe8XuQ0CU8HbbvCpG57flM7gGljKX1UhxLc5UPtne5VJg73DfOoEUu4ZMeVEjNC04G2LYQJE%2F1SBuiVRBDq2WrQBJF4APKJcqMix7flKiYrIS7VFajJ5HFu6dfxypn0V2qbQkrgvA3Nxvqay2FmWxe7nG1zhtCo34J4eRuaj7QNWGczhu3%2F7pWTvxsO0%2FHsi7pdxquG5aeTbnjSUvTVKaerWXgrtdgnFJJOvUmmPn2Dp75hnbA3b33Db5k2dV1fwsGGd8Ah5%2Fc%2FaFFXXSKpU1Mhc5RTFGcxT7CZTnMODCOrvbEBjqkAb7CdNGCIKkodE8YNKHwek6GAcgf8%2B%2FQAx1Rq3ISG7fo6sje7lbZvrGdOvkIhOwN1kJMNEEvi0vXrSkCQlhVYPYwNrii1xXpgSsf408zPocUWmwCh2M2W6waxyDGc8rq8N2ADqWkA6%2BkEfkTQjzsghCTCwPqkMx5Q2JFnQ0bYmfD%2BsiXqKneev1FmqeTrhJqsyXjFDGGHdeqcvMVk4CyxlE8NbWt&X-Amz-Signature=4c8a3b5d76bf71a81d0bc78f2447a0d5beb834926471dcaa2cbdf46821c062b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLQ7AWB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB5xZZpaY6yfM77Jvrzz09gMGS2aYpElvdMhuNxQ017AIhAKN1d8LTWd%2BJF77%2BaTU12Ipi8ErBab%2BkYMfXkkbVP60dKv8DCEEQABoMNjM3NDIzMTgzODA1IgzWoEXEKugDQjCXw9Mq3AOoQca45clC9%2Fo9UQBT8r1jEzdn0bUA%2B7aLfnxwOpV5bzHp8ZPzs65QVqzjJo9U6Hzoztof4GjmULB4PS5pmad4E34afF4tFAMFvzuvscWZyQfRcGSx%2FbJLvwg8Dyla2xoG0gARDzpBS23jmwM%2FrlQCHhlmHzf97zujEqNA8VN1W00K2SpYdEsSVlk0LKY1t0aKIRS%2B7rQ09t7pcn3I5qBytvtPkKFSqsH5Jr6NVg7WOc7sv33qfX5VuJOqxEIm1lTjnrKprfwEWNBOXtt%2BNPUHharapA%2B3B7BIyVrJ96%2FfsWq7p%2BzMnFAF8iEJ%2BkmKbYQNf7j1WM9tBvA75YbCljEe8XuQ0CU8HbbvCpG57flM7gGljKX1UhxLc5UPtne5VJg73DfOoEUu4ZMeVEjNC04G2LYQJE%2F1SBuiVRBDq2WrQBJF4APKJcqMix7flKiYrIS7VFajJ5HFu6dfxypn0V2qbQkrgvA3Nxvqay2FmWxe7nG1zhtCo34J4eRuaj7QNWGczhu3%2F7pWTvxsO0%2FHsi7pdxquG5aeTbnjSUvTVKaerWXgrtdgnFJJOvUmmPn2Dp75hnbA3b33Db5k2dV1fwsGGd8Ah5%2Fc%2FaFFXXSKpU1Mhc5RTFGcxT7CZTnMODCOrvbEBjqkAb7CdNGCIKkodE8YNKHwek6GAcgf8%2B%2FQAx1Rq3ISG7fo6sje7lbZvrGdOvkIhOwN1kJMNEEvi0vXrSkCQlhVYPYwNrii1xXpgSsf408zPocUWmwCh2M2W6waxyDGc8rq8N2ADqWkA6%2BkEfkTQjzsghCTCwPqkMx5Q2JFnQ0bYmfD%2BsiXqKneev1FmqeTrhJqsyXjFDGGHdeqcvMVk4CyxlE8NbWt&X-Amz-Signature=a3506c1838b74985b778b9038cb1c795e62c3bddd64bc7cf8fa047b82fdf49bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLQ7AWB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB5xZZpaY6yfM77Jvrzz09gMGS2aYpElvdMhuNxQ017AIhAKN1d8LTWd%2BJF77%2BaTU12Ipi8ErBab%2BkYMfXkkbVP60dKv8DCEEQABoMNjM3NDIzMTgzODA1IgzWoEXEKugDQjCXw9Mq3AOoQca45clC9%2Fo9UQBT8r1jEzdn0bUA%2B7aLfnxwOpV5bzHp8ZPzs65QVqzjJo9U6Hzoztof4GjmULB4PS5pmad4E34afF4tFAMFvzuvscWZyQfRcGSx%2FbJLvwg8Dyla2xoG0gARDzpBS23jmwM%2FrlQCHhlmHzf97zujEqNA8VN1W00K2SpYdEsSVlk0LKY1t0aKIRS%2B7rQ09t7pcn3I5qBytvtPkKFSqsH5Jr6NVg7WOc7sv33qfX5VuJOqxEIm1lTjnrKprfwEWNBOXtt%2BNPUHharapA%2B3B7BIyVrJ96%2FfsWq7p%2BzMnFAF8iEJ%2BkmKbYQNf7j1WM9tBvA75YbCljEe8XuQ0CU8HbbvCpG57flM7gGljKX1UhxLc5UPtne5VJg73DfOoEUu4ZMeVEjNC04G2LYQJE%2F1SBuiVRBDq2WrQBJF4APKJcqMix7flKiYrIS7VFajJ5HFu6dfxypn0V2qbQkrgvA3Nxvqay2FmWxe7nG1zhtCo34J4eRuaj7QNWGczhu3%2F7pWTvxsO0%2FHsi7pdxquG5aeTbnjSUvTVKaerWXgrtdgnFJJOvUmmPn2Dp75hnbA3b33Db5k2dV1fwsGGd8Ah5%2Fc%2FaFFXXSKpU1Mhc5RTFGcxT7CZTnMODCOrvbEBjqkAb7CdNGCIKkodE8YNKHwek6GAcgf8%2B%2FQAx1Rq3ISG7fo6sje7lbZvrGdOvkIhOwN1kJMNEEvi0vXrSkCQlhVYPYwNrii1xXpgSsf408zPocUWmwCh2M2W6waxyDGc8rq8N2ADqWkA6%2BkEfkTQjzsghCTCwPqkMx5Q2JFnQ0bYmfD%2BsiXqKneev1FmqeTrhJqsyXjFDGGHdeqcvMVk4CyxlE8NbWt&X-Amz-Signature=d9869d740f2f8b61afac14ceb49e88af3175e9f198e5ee09bb09e70c4ed16eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLQ7AWB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB5xZZpaY6yfM77Jvrzz09gMGS2aYpElvdMhuNxQ017AIhAKN1d8LTWd%2BJF77%2BaTU12Ipi8ErBab%2BkYMfXkkbVP60dKv8DCEEQABoMNjM3NDIzMTgzODA1IgzWoEXEKugDQjCXw9Mq3AOoQca45clC9%2Fo9UQBT8r1jEzdn0bUA%2B7aLfnxwOpV5bzHp8ZPzs65QVqzjJo9U6Hzoztof4GjmULB4PS5pmad4E34afF4tFAMFvzuvscWZyQfRcGSx%2FbJLvwg8Dyla2xoG0gARDzpBS23jmwM%2FrlQCHhlmHzf97zujEqNA8VN1W00K2SpYdEsSVlk0LKY1t0aKIRS%2B7rQ09t7pcn3I5qBytvtPkKFSqsH5Jr6NVg7WOc7sv33qfX5VuJOqxEIm1lTjnrKprfwEWNBOXtt%2BNPUHharapA%2B3B7BIyVrJ96%2FfsWq7p%2BzMnFAF8iEJ%2BkmKbYQNf7j1WM9tBvA75YbCljEe8XuQ0CU8HbbvCpG57flM7gGljKX1UhxLc5UPtne5VJg73DfOoEUu4ZMeVEjNC04G2LYQJE%2F1SBuiVRBDq2WrQBJF4APKJcqMix7flKiYrIS7VFajJ5HFu6dfxypn0V2qbQkrgvA3Nxvqay2FmWxe7nG1zhtCo34J4eRuaj7QNWGczhu3%2F7pWTvxsO0%2FHsi7pdxquG5aeTbnjSUvTVKaerWXgrtdgnFJJOvUmmPn2Dp75hnbA3b33Db5k2dV1fwsGGd8Ah5%2Fc%2FaFFXXSKpU1Mhc5RTFGcxT7CZTnMODCOrvbEBjqkAb7CdNGCIKkodE8YNKHwek6GAcgf8%2B%2FQAx1Rq3ISG7fo6sje7lbZvrGdOvkIhOwN1kJMNEEvi0vXrSkCQlhVYPYwNrii1xXpgSsf408zPocUWmwCh2M2W6waxyDGc8rq8N2ADqWkA6%2BkEfkTQjzsghCTCwPqkMx5Q2JFnQ0bYmfD%2BsiXqKneev1FmqeTrhJqsyXjFDGGHdeqcvMVk4CyxlE8NbWt&X-Amz-Signature=6a9ca414aa09b6dfc36a66675e981b77b12a5ebab01687542a7a2374ebaa61b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
