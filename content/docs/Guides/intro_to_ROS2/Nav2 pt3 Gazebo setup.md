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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VO3APQ6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGC2vYQSWYaiWQMFx%2Bb4RmcP4z7kG4oOAwjuW0xApFWaAiEAn8ymnW%2B9%2BgtmvfowSNbDUlSuuefipReAqyZpewB62bcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP618L19cnYi0kCpuircAzu78HoH1814utrbMHByOMYc9FWWCxfu%2BdmZWvfUqar3FDy8KwB9OExkQS2SzKr6vPDtNemEAZZec%2Beba63GGBAtelpX8UUQqTZ6l32kqLXHnjeNkXz6SOhrdfAtIKX6%2FcscBXOMRRHkI%2Bi9YWUlim8ZcfEygIpU70whZaoL2HKOCEHYpGl7KXoLZB9a1aj7sSiDcq8A%2F99Oz%2F0MqEzgMqCN2LnaQNSEAhwWBHTQbeoXNhL%2FpSmazmKtIsl5l5W9XBPCq1jobgUiLFpf6xknySPERW9CsPZs2PxF%2B8o3QSeL68%2BTuIcCzl%2F%2FaENwQ7FhVmQ%2BPPIVtV8LChj4xu8OwsG1t2r8sW8o1%2BnqLk56DwKjiEfsF9lCwFO3KfVQCVREDl5hw5etlrWyc3FTieCLSdDvQc2YGrNWE7UkZhIbAhxt4j8dX%2FKVhvlqhwKPIcOdHZtBTlXgvpYG6NVQq1z6Pa%2BbuXPoyheFmyHSTdOskax7GlC7SVO4BGdI0E3iJ3xMlO5uE9%2BTwSKbB9mo6m4RaEZTwGKa3dJEN5kWTXypdJL2gcCatinw0sT8lPeAamdF%2F8LhGkspnmj5ZFVLoJL0g64f9aIO4AC4saQQrKCyjtzqZspfwEE2Yawrx8uzMNL50sQGOqUBfGyQAHou3JAlYaPcFVu2g5OhCXJGyrYqvZTk3NpHYk0p6TQzhm1wHaqVvOvMbs6SSxQAdAmAJSXWT8vFglPDBW3Y7HmIjJhY9g29wXxmvFAp4MzPqdhhXI5523bwZc6EjCUBSBwiG20OrCYQ6CofUzvpXneSIv4XFlFg6iEV5elgrgJzjH5QMZDn9YbQ%2BlDaTLRqxYcmFRtyD%2FxiDH017aHQjrD%2B&X-Amz-Signature=bb7e2aaab5483830fc96352898c157123e0fb9eafd8c00c395b65596dd88cad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VO3APQ6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGC2vYQSWYaiWQMFx%2Bb4RmcP4z7kG4oOAwjuW0xApFWaAiEAn8ymnW%2B9%2BgtmvfowSNbDUlSuuefipReAqyZpewB62bcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP618L19cnYi0kCpuircAzu78HoH1814utrbMHByOMYc9FWWCxfu%2BdmZWvfUqar3FDy8KwB9OExkQS2SzKr6vPDtNemEAZZec%2Beba63GGBAtelpX8UUQqTZ6l32kqLXHnjeNkXz6SOhrdfAtIKX6%2FcscBXOMRRHkI%2Bi9YWUlim8ZcfEygIpU70whZaoL2HKOCEHYpGl7KXoLZB9a1aj7sSiDcq8A%2F99Oz%2F0MqEzgMqCN2LnaQNSEAhwWBHTQbeoXNhL%2FpSmazmKtIsl5l5W9XBPCq1jobgUiLFpf6xknySPERW9CsPZs2PxF%2B8o3QSeL68%2BTuIcCzl%2F%2FaENwQ7FhVmQ%2BPPIVtV8LChj4xu8OwsG1t2r8sW8o1%2BnqLk56DwKjiEfsF9lCwFO3KfVQCVREDl5hw5etlrWyc3FTieCLSdDvQc2YGrNWE7UkZhIbAhxt4j8dX%2FKVhvlqhwKPIcOdHZtBTlXgvpYG6NVQq1z6Pa%2BbuXPoyheFmyHSTdOskax7GlC7SVO4BGdI0E3iJ3xMlO5uE9%2BTwSKbB9mo6m4RaEZTwGKa3dJEN5kWTXypdJL2gcCatinw0sT8lPeAamdF%2F8LhGkspnmj5ZFVLoJL0g64f9aIO4AC4saQQrKCyjtzqZspfwEE2Yawrx8uzMNL50sQGOqUBfGyQAHou3JAlYaPcFVu2g5OhCXJGyrYqvZTk3NpHYk0p6TQzhm1wHaqVvOvMbs6SSxQAdAmAJSXWT8vFglPDBW3Y7HmIjJhY9g29wXxmvFAp4MzPqdhhXI5523bwZc6EjCUBSBwiG20OrCYQ6CofUzvpXneSIv4XFlFg6iEV5elgrgJzjH5QMZDn9YbQ%2BlDaTLRqxYcmFRtyD%2FxiDH017aHQjrD%2B&X-Amz-Signature=7e44fe1c09ca0b632c42000ae2024c88bfdd50d33a069d7f83bdbd7912e56488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VO3APQ6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGC2vYQSWYaiWQMFx%2Bb4RmcP4z7kG4oOAwjuW0xApFWaAiEAn8ymnW%2B9%2BgtmvfowSNbDUlSuuefipReAqyZpewB62bcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP618L19cnYi0kCpuircAzu78HoH1814utrbMHByOMYc9FWWCxfu%2BdmZWvfUqar3FDy8KwB9OExkQS2SzKr6vPDtNemEAZZec%2Beba63GGBAtelpX8UUQqTZ6l32kqLXHnjeNkXz6SOhrdfAtIKX6%2FcscBXOMRRHkI%2Bi9YWUlim8ZcfEygIpU70whZaoL2HKOCEHYpGl7KXoLZB9a1aj7sSiDcq8A%2F99Oz%2F0MqEzgMqCN2LnaQNSEAhwWBHTQbeoXNhL%2FpSmazmKtIsl5l5W9XBPCq1jobgUiLFpf6xknySPERW9CsPZs2PxF%2B8o3QSeL68%2BTuIcCzl%2F%2FaENwQ7FhVmQ%2BPPIVtV8LChj4xu8OwsG1t2r8sW8o1%2BnqLk56DwKjiEfsF9lCwFO3KfVQCVREDl5hw5etlrWyc3FTieCLSdDvQc2YGrNWE7UkZhIbAhxt4j8dX%2FKVhvlqhwKPIcOdHZtBTlXgvpYG6NVQq1z6Pa%2BbuXPoyheFmyHSTdOskax7GlC7SVO4BGdI0E3iJ3xMlO5uE9%2BTwSKbB9mo6m4RaEZTwGKa3dJEN5kWTXypdJL2gcCatinw0sT8lPeAamdF%2F8LhGkspnmj5ZFVLoJL0g64f9aIO4AC4saQQrKCyjtzqZspfwEE2Yawrx8uzMNL50sQGOqUBfGyQAHou3JAlYaPcFVu2g5OhCXJGyrYqvZTk3NpHYk0p6TQzhm1wHaqVvOvMbs6SSxQAdAmAJSXWT8vFglPDBW3Y7HmIjJhY9g29wXxmvFAp4MzPqdhhXI5523bwZc6EjCUBSBwiG20OrCYQ6CofUzvpXneSIv4XFlFg6iEV5elgrgJzjH5QMZDn9YbQ%2BlDaTLRqxYcmFRtyD%2FxiDH017aHQjrD%2B&X-Amz-Signature=e71d093a2d4a00af3d71a62ed0a4774853164c92624456449345e2e6146d9195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VO3APQ6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGC2vYQSWYaiWQMFx%2Bb4RmcP4z7kG4oOAwjuW0xApFWaAiEAn8ymnW%2B9%2BgtmvfowSNbDUlSuuefipReAqyZpewB62bcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP618L19cnYi0kCpuircAzu78HoH1814utrbMHByOMYc9FWWCxfu%2BdmZWvfUqar3FDy8KwB9OExkQS2SzKr6vPDtNemEAZZec%2Beba63GGBAtelpX8UUQqTZ6l32kqLXHnjeNkXz6SOhrdfAtIKX6%2FcscBXOMRRHkI%2Bi9YWUlim8ZcfEygIpU70whZaoL2HKOCEHYpGl7KXoLZB9a1aj7sSiDcq8A%2F99Oz%2F0MqEzgMqCN2LnaQNSEAhwWBHTQbeoXNhL%2FpSmazmKtIsl5l5W9XBPCq1jobgUiLFpf6xknySPERW9CsPZs2PxF%2B8o3QSeL68%2BTuIcCzl%2F%2FaENwQ7FhVmQ%2BPPIVtV8LChj4xu8OwsG1t2r8sW8o1%2BnqLk56DwKjiEfsF9lCwFO3KfVQCVREDl5hw5etlrWyc3FTieCLSdDvQc2YGrNWE7UkZhIbAhxt4j8dX%2FKVhvlqhwKPIcOdHZtBTlXgvpYG6NVQq1z6Pa%2BbuXPoyheFmyHSTdOskax7GlC7SVO4BGdI0E3iJ3xMlO5uE9%2BTwSKbB9mo6m4RaEZTwGKa3dJEN5kWTXypdJL2gcCatinw0sT8lPeAamdF%2F8LhGkspnmj5ZFVLoJL0g64f9aIO4AC4saQQrKCyjtzqZspfwEE2Yawrx8uzMNL50sQGOqUBfGyQAHou3JAlYaPcFVu2g5OhCXJGyrYqvZTk3NpHYk0p6TQzhm1wHaqVvOvMbs6SSxQAdAmAJSXWT8vFglPDBW3Y7HmIjJhY9g29wXxmvFAp4MzPqdhhXI5523bwZc6EjCUBSBwiG20OrCYQ6CofUzvpXneSIv4XFlFg6iEV5elgrgJzjH5QMZDn9YbQ%2BlDaTLRqxYcmFRtyD%2FxiDH017aHQjrD%2B&X-Amz-Signature=848a78133a9ed1e58f1e760567738716f19355d26ab8ad497d8d778d7e46006c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HIJ5IG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDJ6OoOrJkdmfn4lTsloDGv%2FlB8FrUPZLWTHnOiVSCvgwIhAJmjd5oOZlYka%2FGKjHUC6ZHASjwhaVHiHwMTKpudl45NKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAx5DU%2F3goMUs0pbMq3AMiQLyKgObS2kqLOa%2FyhCpAR%2F51Q%2F34%2BrN7M%2FoPg3OaMCEcmk2hdgw0oDGvy6eeddyIJtOIhMdA4nRup%2FaQWU6Sqsdd6An47VRvEToKau6%2Bzm89xwfZs%2B7u%2FP%2Fhxevr1QAmzD5pXa3IOCmnieE7ncWv7iRl7LZPHF49AHMMWB5bl4VFmYvj%2Fl8URSYZeJtNldqSNrMMbi7NNhPzXXeOlOcPtg9rLxvhGXHrRjXaOdbxLX4VGOcqFJHmPLMjRE3rGxQIQIz5CC6dsdb7tQuYazdEWBmP5INLCIcI1Cmbp3XGKxGxcCid8l4gi8u9LeGRCm5uD%2FSJX%2BG7I3%2Bb4BqchyprnyZr4773cgEO5pl5bKXN48yRlpeOmvszBOkoploq8TKY89lWFqnudrAcx%2FQl%2FUNQp262fXWSq%2BD%2F5yrc%2BXM%2FA%2F2f3Fy9USDyOBpBew1uKQJlvvUNJmThLrcDNbisS86V3Z8f9pJ%2BGeu%2FL7djTIU2gIT1riIaK4B2mHHbdPn%2F9iz76WpCcBQNly3SflfZ6NP5b0ZTCcmm1E3gMBSkMMIgLLqknZR901XVkEfnyOkohKd0zZfF%2Bc%2BW5XjuPe9ldCAVRGivNrfKCzaSx08mWby724foiqf%2FUeauNAHOqDCH%2BdLEBjqkAXCX8r86p1tnWVnZBSeSKrrPRpQV0U%2B8hPRCHqj3oIed91wgrKVZsYfgaVB6T9sveIrU7bz4eyCgzpho9k0h%2FV%2FlW5y3%2BKNYhHswRIPfWN3Vq%2Bspg3c284m%2FUcAKwReh39lsZkSJUKcYxvFKXdNMjML6FnbN5PqE56SWnU0n7W4%2Bu2KmZZh%2FgYBDNC6kaJQs0W1p%2BHga98lDybgURImIQMJTmUuh&X-Amz-Signature=52ae3a89e0e07eeec28dc28a9776e7be0f563964551070f84be5ec925393891d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VO3APQ6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGC2vYQSWYaiWQMFx%2Bb4RmcP4z7kG4oOAwjuW0xApFWaAiEAn8ymnW%2B9%2BgtmvfowSNbDUlSuuefipReAqyZpewB62bcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP618L19cnYi0kCpuircAzu78HoH1814utrbMHByOMYc9FWWCxfu%2BdmZWvfUqar3FDy8KwB9OExkQS2SzKr6vPDtNemEAZZec%2Beba63GGBAtelpX8UUQqTZ6l32kqLXHnjeNkXz6SOhrdfAtIKX6%2FcscBXOMRRHkI%2Bi9YWUlim8ZcfEygIpU70whZaoL2HKOCEHYpGl7KXoLZB9a1aj7sSiDcq8A%2F99Oz%2F0MqEzgMqCN2LnaQNSEAhwWBHTQbeoXNhL%2FpSmazmKtIsl5l5W9XBPCq1jobgUiLFpf6xknySPERW9CsPZs2PxF%2B8o3QSeL68%2BTuIcCzl%2F%2FaENwQ7FhVmQ%2BPPIVtV8LChj4xu8OwsG1t2r8sW8o1%2BnqLk56DwKjiEfsF9lCwFO3KfVQCVREDl5hw5etlrWyc3FTieCLSdDvQc2YGrNWE7UkZhIbAhxt4j8dX%2FKVhvlqhwKPIcOdHZtBTlXgvpYG6NVQq1z6Pa%2BbuXPoyheFmyHSTdOskax7GlC7SVO4BGdI0E3iJ3xMlO5uE9%2BTwSKbB9mo6m4RaEZTwGKa3dJEN5kWTXypdJL2gcCatinw0sT8lPeAamdF%2F8LhGkspnmj5ZFVLoJL0g64f9aIO4AC4saQQrKCyjtzqZspfwEE2Yawrx8uzMNL50sQGOqUBfGyQAHou3JAlYaPcFVu2g5OhCXJGyrYqvZTk3NpHYk0p6TQzhm1wHaqVvOvMbs6SSxQAdAmAJSXWT8vFglPDBW3Y7HmIjJhY9g29wXxmvFAp4MzPqdhhXI5523bwZc6EjCUBSBwiG20OrCYQ6CofUzvpXneSIv4XFlFg6iEV5elgrgJzjH5QMZDn9YbQ%2BlDaTLRqxYcmFRtyD%2FxiDH017aHQjrD%2B&X-Amz-Signature=801c28d3137f61a053adc1513bdf8e07a6344b0e123a523d7dcf5576b4bbe905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VO3APQ6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGC2vYQSWYaiWQMFx%2Bb4RmcP4z7kG4oOAwjuW0xApFWaAiEAn8ymnW%2B9%2BgtmvfowSNbDUlSuuefipReAqyZpewB62bcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP618L19cnYi0kCpuircAzu78HoH1814utrbMHByOMYc9FWWCxfu%2BdmZWvfUqar3FDy8KwB9OExkQS2SzKr6vPDtNemEAZZec%2Beba63GGBAtelpX8UUQqTZ6l32kqLXHnjeNkXz6SOhrdfAtIKX6%2FcscBXOMRRHkI%2Bi9YWUlim8ZcfEygIpU70whZaoL2HKOCEHYpGl7KXoLZB9a1aj7sSiDcq8A%2F99Oz%2F0MqEzgMqCN2LnaQNSEAhwWBHTQbeoXNhL%2FpSmazmKtIsl5l5W9XBPCq1jobgUiLFpf6xknySPERW9CsPZs2PxF%2B8o3QSeL68%2BTuIcCzl%2F%2FaENwQ7FhVmQ%2BPPIVtV8LChj4xu8OwsG1t2r8sW8o1%2BnqLk56DwKjiEfsF9lCwFO3KfVQCVREDl5hw5etlrWyc3FTieCLSdDvQc2YGrNWE7UkZhIbAhxt4j8dX%2FKVhvlqhwKPIcOdHZtBTlXgvpYG6NVQq1z6Pa%2BbuXPoyheFmyHSTdOskax7GlC7SVO4BGdI0E3iJ3xMlO5uE9%2BTwSKbB9mo6m4RaEZTwGKa3dJEN5kWTXypdJL2gcCatinw0sT8lPeAamdF%2F8LhGkspnmj5ZFVLoJL0g64f9aIO4AC4saQQrKCyjtzqZspfwEE2Yawrx8uzMNL50sQGOqUBfGyQAHou3JAlYaPcFVu2g5OhCXJGyrYqvZTk3NpHYk0p6TQzhm1wHaqVvOvMbs6SSxQAdAmAJSXWT8vFglPDBW3Y7HmIjJhY9g29wXxmvFAp4MzPqdhhXI5523bwZc6EjCUBSBwiG20OrCYQ6CofUzvpXneSIv4XFlFg6iEV5elgrgJzjH5QMZDn9YbQ%2BlDaTLRqxYcmFRtyD%2FxiDH017aHQjrD%2B&X-Amz-Signature=61428ec038f3d40f5849e7e0953be2482213192560c9e839afae89fa2e777874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VO3APQ6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGC2vYQSWYaiWQMFx%2Bb4RmcP4z7kG4oOAwjuW0xApFWaAiEAn8ymnW%2B9%2BgtmvfowSNbDUlSuuefipReAqyZpewB62bcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP618L19cnYi0kCpuircAzu78HoH1814utrbMHByOMYc9FWWCxfu%2BdmZWvfUqar3FDy8KwB9OExkQS2SzKr6vPDtNemEAZZec%2Beba63GGBAtelpX8UUQqTZ6l32kqLXHnjeNkXz6SOhrdfAtIKX6%2FcscBXOMRRHkI%2Bi9YWUlim8ZcfEygIpU70whZaoL2HKOCEHYpGl7KXoLZB9a1aj7sSiDcq8A%2F99Oz%2F0MqEzgMqCN2LnaQNSEAhwWBHTQbeoXNhL%2FpSmazmKtIsl5l5W9XBPCq1jobgUiLFpf6xknySPERW9CsPZs2PxF%2B8o3QSeL68%2BTuIcCzl%2F%2FaENwQ7FhVmQ%2BPPIVtV8LChj4xu8OwsG1t2r8sW8o1%2BnqLk56DwKjiEfsF9lCwFO3KfVQCVREDl5hw5etlrWyc3FTieCLSdDvQc2YGrNWE7UkZhIbAhxt4j8dX%2FKVhvlqhwKPIcOdHZtBTlXgvpYG6NVQq1z6Pa%2BbuXPoyheFmyHSTdOskax7GlC7SVO4BGdI0E3iJ3xMlO5uE9%2BTwSKbB9mo6m4RaEZTwGKa3dJEN5kWTXypdJL2gcCatinw0sT8lPeAamdF%2F8LhGkspnmj5ZFVLoJL0g64f9aIO4AC4saQQrKCyjtzqZspfwEE2Yawrx8uzMNL50sQGOqUBfGyQAHou3JAlYaPcFVu2g5OhCXJGyrYqvZTk3NpHYk0p6TQzhm1wHaqVvOvMbs6SSxQAdAmAJSXWT8vFglPDBW3Y7HmIjJhY9g29wXxmvFAp4MzPqdhhXI5523bwZc6EjCUBSBwiG20OrCYQ6CofUzvpXneSIv4XFlFg6iEV5elgrgJzjH5QMZDn9YbQ%2BlDaTLRqxYcmFRtyD%2FxiDH017aHQjrD%2B&X-Amz-Signature=b6abbb6bdc1ee457ad590c7db1ec81b8e17901ed41e0e4b1bede8de1326659e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VO3APQ6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGC2vYQSWYaiWQMFx%2Bb4RmcP4z7kG4oOAwjuW0xApFWaAiEAn8ymnW%2B9%2BgtmvfowSNbDUlSuuefipReAqyZpewB62bcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP618L19cnYi0kCpuircAzu78HoH1814utrbMHByOMYc9FWWCxfu%2BdmZWvfUqar3FDy8KwB9OExkQS2SzKr6vPDtNemEAZZec%2Beba63GGBAtelpX8UUQqTZ6l32kqLXHnjeNkXz6SOhrdfAtIKX6%2FcscBXOMRRHkI%2Bi9YWUlim8ZcfEygIpU70whZaoL2HKOCEHYpGl7KXoLZB9a1aj7sSiDcq8A%2F99Oz%2F0MqEzgMqCN2LnaQNSEAhwWBHTQbeoXNhL%2FpSmazmKtIsl5l5W9XBPCq1jobgUiLFpf6xknySPERW9CsPZs2PxF%2B8o3QSeL68%2BTuIcCzl%2F%2FaENwQ7FhVmQ%2BPPIVtV8LChj4xu8OwsG1t2r8sW8o1%2BnqLk56DwKjiEfsF9lCwFO3KfVQCVREDl5hw5etlrWyc3FTieCLSdDvQc2YGrNWE7UkZhIbAhxt4j8dX%2FKVhvlqhwKPIcOdHZtBTlXgvpYG6NVQq1z6Pa%2BbuXPoyheFmyHSTdOskax7GlC7SVO4BGdI0E3iJ3xMlO5uE9%2BTwSKbB9mo6m4RaEZTwGKa3dJEN5kWTXypdJL2gcCatinw0sT8lPeAamdF%2F8LhGkspnmj5ZFVLoJL0g64f9aIO4AC4saQQrKCyjtzqZspfwEE2Yawrx8uzMNL50sQGOqUBfGyQAHou3JAlYaPcFVu2g5OhCXJGyrYqvZTk3NpHYk0p6TQzhm1wHaqVvOvMbs6SSxQAdAmAJSXWT8vFglPDBW3Y7HmIjJhY9g29wXxmvFAp4MzPqdhhXI5523bwZc6EjCUBSBwiG20OrCYQ6CofUzvpXneSIv4XFlFg6iEV5elgrgJzjH5QMZDn9YbQ%2BlDaTLRqxYcmFRtyD%2FxiDH017aHQjrD%2B&X-Amz-Signature=c3616490e6c30f611313b61f964b97b2063e53e505eeaf925d1273abdfdc724e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VO3APQ6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGC2vYQSWYaiWQMFx%2Bb4RmcP4z7kG4oOAwjuW0xApFWaAiEAn8ymnW%2B9%2BgtmvfowSNbDUlSuuefipReAqyZpewB62bcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP618L19cnYi0kCpuircAzu78HoH1814utrbMHByOMYc9FWWCxfu%2BdmZWvfUqar3FDy8KwB9OExkQS2SzKr6vPDtNemEAZZec%2Beba63GGBAtelpX8UUQqTZ6l32kqLXHnjeNkXz6SOhrdfAtIKX6%2FcscBXOMRRHkI%2Bi9YWUlim8ZcfEygIpU70whZaoL2HKOCEHYpGl7KXoLZB9a1aj7sSiDcq8A%2F99Oz%2F0MqEzgMqCN2LnaQNSEAhwWBHTQbeoXNhL%2FpSmazmKtIsl5l5W9XBPCq1jobgUiLFpf6xknySPERW9CsPZs2PxF%2B8o3QSeL68%2BTuIcCzl%2F%2FaENwQ7FhVmQ%2BPPIVtV8LChj4xu8OwsG1t2r8sW8o1%2BnqLk56DwKjiEfsF9lCwFO3KfVQCVREDl5hw5etlrWyc3FTieCLSdDvQc2YGrNWE7UkZhIbAhxt4j8dX%2FKVhvlqhwKPIcOdHZtBTlXgvpYG6NVQq1z6Pa%2BbuXPoyheFmyHSTdOskax7GlC7SVO4BGdI0E3iJ3xMlO5uE9%2BTwSKbB9mo6m4RaEZTwGKa3dJEN5kWTXypdJL2gcCatinw0sT8lPeAamdF%2F8LhGkspnmj5ZFVLoJL0g64f9aIO4AC4saQQrKCyjtzqZspfwEE2Yawrx8uzMNL50sQGOqUBfGyQAHou3JAlYaPcFVu2g5OhCXJGyrYqvZTk3NpHYk0p6TQzhm1wHaqVvOvMbs6SSxQAdAmAJSXWT8vFglPDBW3Y7HmIjJhY9g29wXxmvFAp4MzPqdhhXI5523bwZc6EjCUBSBwiG20OrCYQ6CofUzvpXneSIv4XFlFg6iEV5elgrgJzjH5QMZDn9YbQ%2BlDaTLRqxYcmFRtyD%2FxiDH017aHQjrD%2B&X-Amz-Signature=286c739494094e374275ef5ee154741bb25dd25aed668fd54f431f9d0442b15c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VO3APQ6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGC2vYQSWYaiWQMFx%2Bb4RmcP4z7kG4oOAwjuW0xApFWaAiEAn8ymnW%2B9%2BgtmvfowSNbDUlSuuefipReAqyZpewB62bcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP618L19cnYi0kCpuircAzu78HoH1814utrbMHByOMYc9FWWCxfu%2BdmZWvfUqar3FDy8KwB9OExkQS2SzKr6vPDtNemEAZZec%2Beba63GGBAtelpX8UUQqTZ6l32kqLXHnjeNkXz6SOhrdfAtIKX6%2FcscBXOMRRHkI%2Bi9YWUlim8ZcfEygIpU70whZaoL2HKOCEHYpGl7KXoLZB9a1aj7sSiDcq8A%2F99Oz%2F0MqEzgMqCN2LnaQNSEAhwWBHTQbeoXNhL%2FpSmazmKtIsl5l5W9XBPCq1jobgUiLFpf6xknySPERW9CsPZs2PxF%2B8o3QSeL68%2BTuIcCzl%2F%2FaENwQ7FhVmQ%2BPPIVtV8LChj4xu8OwsG1t2r8sW8o1%2BnqLk56DwKjiEfsF9lCwFO3KfVQCVREDl5hw5etlrWyc3FTieCLSdDvQc2YGrNWE7UkZhIbAhxt4j8dX%2FKVhvlqhwKPIcOdHZtBTlXgvpYG6NVQq1z6Pa%2BbuXPoyheFmyHSTdOskax7GlC7SVO4BGdI0E3iJ3xMlO5uE9%2BTwSKbB9mo6m4RaEZTwGKa3dJEN5kWTXypdJL2gcCatinw0sT8lPeAamdF%2F8LhGkspnmj5ZFVLoJL0g64f9aIO4AC4saQQrKCyjtzqZspfwEE2Yawrx8uzMNL50sQGOqUBfGyQAHou3JAlYaPcFVu2g5OhCXJGyrYqvZTk3NpHYk0p6TQzhm1wHaqVvOvMbs6SSxQAdAmAJSXWT8vFglPDBW3Y7HmIjJhY9g29wXxmvFAp4MzPqdhhXI5523bwZc6EjCUBSBwiG20OrCYQ6CofUzvpXneSIv4XFlFg6iEV5elgrgJzjH5QMZDn9YbQ%2BlDaTLRqxYcmFRtyD%2FxiDH017aHQjrD%2B&X-Amz-Signature=4eec773f5818b2aad4cf7b00aa69d3c2aea4c7aa8666c008764f769e474fc480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
