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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252NQ4KD%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF8JCPMqZpuNqWEpX8NHRFHzqEN9xLNODkuShJedI6VwIgc2mo4haP2PzKGsxGbWRf3s3UKThuA296uDjKpA1lxv8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDH%2Fh54whFDcgcclCFyrcA2CBmjcydq7IIyRloNuXfF41HWqnhusYpRg0qSGELG4qhbxnMz9Rlkoh4PdoxqH6CbaT0KNjaTyqfXxLciFWKm9GWraxsl4RIvXItUpqAaVGYVanp09FzZkEfLLVfnlOSzoo0t8Xq9uRjN2OWAOnlsTWkII1TtKSYOAL4e4LV1zYquhb41S1I2gYQehEW4gNGxMPQbAwGjPjbPFjQLyEwRf%2FNa%2FajJcREcp5jh49v9uFxwuEQzOaSueeoUZdrDMabqRc9i3AVIlIUQA5bulUUxUQr5paT36KsywFmwlFlFvNNwOBcs0aL%2BBdhktgJJq2cFPmhw7RoRRZHT%2BUcQQMk%2FTUnOOmygu54xd1lxqQFDRIUzhOoySDms78jGtKVie6FerI5fd4GBLQ1FU%2FVL1GE3fMXM7B%2FW9OICEOwhE8DLrmCJBPP7ZfrFdkIEjBZ4e7WaNccxH1xiJveMT%2FYpQvJwoJGkqD2d1ZWVWYuONfncYGOWt3uxJYeTede8UchWbKVpza2i0z7FwdKHpQL0psCkPFmflavgC47ODPJ9%2BcLO35npasmzN30W0Er1veUudauqYP9UzGpqGiyY6wHaSfDEsiEOMOLTCmN3cyKPICX04adW0W4WQye8Q0Qt2lMJ31hscGOqUBDkgcSjkZnFlKkllht24u4DJ2qVIOH3mzzRCi%2BzZzxm6F2KM%2BofrXyr9KP%2FCR8jKWVzXx4cRAxODVG0FHwbIG4C0zOWlsZLQTrkEIuoz5wuauYiBIK3WeQmTVXAiHxyRUp5osNJeowX%2FTKWjkjTf4FLFMhLL68AIURHJfNZN7Rv6nzEPQca2H2wZ6J%2BxEBYFKx9D2xbWI1XorSktT%2FVc0zRb66LU3&X-Amz-Signature=5830c47404c1e0c6b0f0d3a57e425d36a109a7606d22e81885f755daddcf4a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252NQ4KD%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF8JCPMqZpuNqWEpX8NHRFHzqEN9xLNODkuShJedI6VwIgc2mo4haP2PzKGsxGbWRf3s3UKThuA296uDjKpA1lxv8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDH%2Fh54whFDcgcclCFyrcA2CBmjcydq7IIyRloNuXfF41HWqnhusYpRg0qSGELG4qhbxnMz9Rlkoh4PdoxqH6CbaT0KNjaTyqfXxLciFWKm9GWraxsl4RIvXItUpqAaVGYVanp09FzZkEfLLVfnlOSzoo0t8Xq9uRjN2OWAOnlsTWkII1TtKSYOAL4e4LV1zYquhb41S1I2gYQehEW4gNGxMPQbAwGjPjbPFjQLyEwRf%2FNa%2FajJcREcp5jh49v9uFxwuEQzOaSueeoUZdrDMabqRc9i3AVIlIUQA5bulUUxUQr5paT36KsywFmwlFlFvNNwOBcs0aL%2BBdhktgJJq2cFPmhw7RoRRZHT%2BUcQQMk%2FTUnOOmygu54xd1lxqQFDRIUzhOoySDms78jGtKVie6FerI5fd4GBLQ1FU%2FVL1GE3fMXM7B%2FW9OICEOwhE8DLrmCJBPP7ZfrFdkIEjBZ4e7WaNccxH1xiJveMT%2FYpQvJwoJGkqD2d1ZWVWYuONfncYGOWt3uxJYeTede8UchWbKVpza2i0z7FwdKHpQL0psCkPFmflavgC47ODPJ9%2BcLO35npasmzN30W0Er1veUudauqYP9UzGpqGiyY6wHaSfDEsiEOMOLTCmN3cyKPICX04adW0W4WQye8Q0Qt2lMJ31hscGOqUBDkgcSjkZnFlKkllht24u4DJ2qVIOH3mzzRCi%2BzZzxm6F2KM%2BofrXyr9KP%2FCR8jKWVzXx4cRAxODVG0FHwbIG4C0zOWlsZLQTrkEIuoz5wuauYiBIK3WeQmTVXAiHxyRUp5osNJeowX%2FTKWjkjTf4FLFMhLL68AIURHJfNZN7Rv6nzEPQca2H2wZ6J%2BxEBYFKx9D2xbWI1XorSktT%2FVc0zRb66LU3&X-Amz-Signature=053ec2145bd2fb84cddc9bace77837716de4210b5986c90f2bea50ee390cdffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252NQ4KD%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF8JCPMqZpuNqWEpX8NHRFHzqEN9xLNODkuShJedI6VwIgc2mo4haP2PzKGsxGbWRf3s3UKThuA296uDjKpA1lxv8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDH%2Fh54whFDcgcclCFyrcA2CBmjcydq7IIyRloNuXfF41HWqnhusYpRg0qSGELG4qhbxnMz9Rlkoh4PdoxqH6CbaT0KNjaTyqfXxLciFWKm9GWraxsl4RIvXItUpqAaVGYVanp09FzZkEfLLVfnlOSzoo0t8Xq9uRjN2OWAOnlsTWkII1TtKSYOAL4e4LV1zYquhb41S1I2gYQehEW4gNGxMPQbAwGjPjbPFjQLyEwRf%2FNa%2FajJcREcp5jh49v9uFxwuEQzOaSueeoUZdrDMabqRc9i3AVIlIUQA5bulUUxUQr5paT36KsywFmwlFlFvNNwOBcs0aL%2BBdhktgJJq2cFPmhw7RoRRZHT%2BUcQQMk%2FTUnOOmygu54xd1lxqQFDRIUzhOoySDms78jGtKVie6FerI5fd4GBLQ1FU%2FVL1GE3fMXM7B%2FW9OICEOwhE8DLrmCJBPP7ZfrFdkIEjBZ4e7WaNccxH1xiJveMT%2FYpQvJwoJGkqD2d1ZWVWYuONfncYGOWt3uxJYeTede8UchWbKVpza2i0z7FwdKHpQL0psCkPFmflavgC47ODPJ9%2BcLO35npasmzN30W0Er1veUudauqYP9UzGpqGiyY6wHaSfDEsiEOMOLTCmN3cyKPICX04adW0W4WQye8Q0Qt2lMJ31hscGOqUBDkgcSjkZnFlKkllht24u4DJ2qVIOH3mzzRCi%2BzZzxm6F2KM%2BofrXyr9KP%2FCR8jKWVzXx4cRAxODVG0FHwbIG4C0zOWlsZLQTrkEIuoz5wuauYiBIK3WeQmTVXAiHxyRUp5osNJeowX%2FTKWjkjTf4FLFMhLL68AIURHJfNZN7Rv6nzEPQca2H2wZ6J%2BxEBYFKx9D2xbWI1XorSktT%2FVc0zRb66LU3&X-Amz-Signature=e3d9a101dccdbf7d43d093e838f2c92ba2737789ef72ed0ff75ed48eac5fae45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252NQ4KD%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF8JCPMqZpuNqWEpX8NHRFHzqEN9xLNODkuShJedI6VwIgc2mo4haP2PzKGsxGbWRf3s3UKThuA296uDjKpA1lxv8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDH%2Fh54whFDcgcclCFyrcA2CBmjcydq7IIyRloNuXfF41HWqnhusYpRg0qSGELG4qhbxnMz9Rlkoh4PdoxqH6CbaT0KNjaTyqfXxLciFWKm9GWraxsl4RIvXItUpqAaVGYVanp09FzZkEfLLVfnlOSzoo0t8Xq9uRjN2OWAOnlsTWkII1TtKSYOAL4e4LV1zYquhb41S1I2gYQehEW4gNGxMPQbAwGjPjbPFjQLyEwRf%2FNa%2FajJcREcp5jh49v9uFxwuEQzOaSueeoUZdrDMabqRc9i3AVIlIUQA5bulUUxUQr5paT36KsywFmwlFlFvNNwOBcs0aL%2BBdhktgJJq2cFPmhw7RoRRZHT%2BUcQQMk%2FTUnOOmygu54xd1lxqQFDRIUzhOoySDms78jGtKVie6FerI5fd4GBLQ1FU%2FVL1GE3fMXM7B%2FW9OICEOwhE8DLrmCJBPP7ZfrFdkIEjBZ4e7WaNccxH1xiJveMT%2FYpQvJwoJGkqD2d1ZWVWYuONfncYGOWt3uxJYeTede8UchWbKVpza2i0z7FwdKHpQL0psCkPFmflavgC47ODPJ9%2BcLO35npasmzN30W0Er1veUudauqYP9UzGpqGiyY6wHaSfDEsiEOMOLTCmN3cyKPICX04adW0W4WQye8Q0Qt2lMJ31hscGOqUBDkgcSjkZnFlKkllht24u4DJ2qVIOH3mzzRCi%2BzZzxm6F2KM%2BofrXyr9KP%2FCR8jKWVzXx4cRAxODVG0FHwbIG4C0zOWlsZLQTrkEIuoz5wuauYiBIK3WeQmTVXAiHxyRUp5osNJeowX%2FTKWjkjTf4FLFMhLL68AIURHJfNZN7Rv6nzEPQca2H2wZ6J%2BxEBYFKx9D2xbWI1XorSktT%2FVc0zRb66LU3&X-Amz-Signature=9248a452e3e8b9230dcdef85af55a0f21f5ce0af19b27115176e06d45f593e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LROXLQ2%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgmz5JQ3OQu%2BIc%2BT7Dz3Jx848b8BVhgo54g1VGt7Nc4wIhAOfjiSUFXivbxbT4V%2BElPuBs5mviGMd5SD92alOjwqERKv8DCGkQABoMNjM3NDIzMTgzODA1IgyJCwpZA99B%2BLgzIWkq3AMW217idyomKl%2BPU%2BRwYBVymcwV7YFWYUzK7IiF2VEMGqaIfoQ%2Fd0rQib06zQ%2FNnDwT5pHxlVjDwuBQfo2IxKh%2FV2dk5kaH8%2FMJduKUB%2B6BZX47sxkOx9%2BJR%2F%2BhKYmikiZbB4qrGBe%2Bx6OJA27vyzfiNftJuyvy23GR42HrrojCIzDD7KtyEdmfwG%2FFHSCishkuz63JxHa0VpSqmmRw87LpyXBPQm4Poak4gzU4HvGO5ROxG2wpceRBBE06KGOufN5mu8tATLxU0sVrawl8UWc%2BmWmJk9UbFm5FPizozJzlx4qD8jgyXw%2B9m3VlAk50v11hCeANg4pHsrzW6D%2B5aKDyc1iV8a%2BUqkg7yNdJ9%2FucBgeekAo90L8ApMKGMx4oRyrqDkoSadA9CxTS1FjbiwinD7dPuE1deXuNTGZ6YP2IiAd618ta9kL%2FtVh%2B1Adyy80bLnHbFbIfEH4eQ%2B%2BIOkEmavD3WcItYZBbaIgfTwTLIpqsWQDbLzZSNeeeJeTxPJ1QSahLT7aAiDv%2FwTt1gc6S%2FtMKK3nYessG6un8RcLVkOMFEw2P7s0TL2eZ6xxNvvYP%2BTsf4ODx5MwYO1Dy7uU9IP49Wet0f2sLdJYlTtsrIfDHIcnpdQUTjt38pjDz9IbHBjqkARvtCnFjTlSr0737%2FASjgliUm9sKr1Oq%2BMW9jUWhaqEs0kX7RBb2Oo5fyZ0OcQTPPnPm2FFtNGcSTBnMqUpI71o10j8M2smJx291wCntf8EYmMAgnFFBdRy8%2B4X3WP7Zxu%2Bosee02PenNF0X%2BEWD3aIDaazqfBa7xtSk1se1hRozYVk2XongxJMStUBW5jjW%2F0PGB8eBjRMZ23IQ6c%2FceoQzYNzW&X-Amz-Signature=20ba1500e437811232fa9b80673ad92314c178aae0b318a76e8ac7c0d5b52954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252NQ4KD%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF8JCPMqZpuNqWEpX8NHRFHzqEN9xLNODkuShJedI6VwIgc2mo4haP2PzKGsxGbWRf3s3UKThuA296uDjKpA1lxv8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDH%2Fh54whFDcgcclCFyrcA2CBmjcydq7IIyRloNuXfF41HWqnhusYpRg0qSGELG4qhbxnMz9Rlkoh4PdoxqH6CbaT0KNjaTyqfXxLciFWKm9GWraxsl4RIvXItUpqAaVGYVanp09FzZkEfLLVfnlOSzoo0t8Xq9uRjN2OWAOnlsTWkII1TtKSYOAL4e4LV1zYquhb41S1I2gYQehEW4gNGxMPQbAwGjPjbPFjQLyEwRf%2FNa%2FajJcREcp5jh49v9uFxwuEQzOaSueeoUZdrDMabqRc9i3AVIlIUQA5bulUUxUQr5paT36KsywFmwlFlFvNNwOBcs0aL%2BBdhktgJJq2cFPmhw7RoRRZHT%2BUcQQMk%2FTUnOOmygu54xd1lxqQFDRIUzhOoySDms78jGtKVie6FerI5fd4GBLQ1FU%2FVL1GE3fMXM7B%2FW9OICEOwhE8DLrmCJBPP7ZfrFdkIEjBZ4e7WaNccxH1xiJveMT%2FYpQvJwoJGkqD2d1ZWVWYuONfncYGOWt3uxJYeTede8UchWbKVpza2i0z7FwdKHpQL0psCkPFmflavgC47ODPJ9%2BcLO35npasmzN30W0Er1veUudauqYP9UzGpqGiyY6wHaSfDEsiEOMOLTCmN3cyKPICX04adW0W4WQye8Q0Qt2lMJ31hscGOqUBDkgcSjkZnFlKkllht24u4DJ2qVIOH3mzzRCi%2BzZzxm6F2KM%2BofrXyr9KP%2FCR8jKWVzXx4cRAxODVG0FHwbIG4C0zOWlsZLQTrkEIuoz5wuauYiBIK3WeQmTVXAiHxyRUp5osNJeowX%2FTKWjkjTf4FLFMhLL68AIURHJfNZN7Rv6nzEPQca2H2wZ6J%2BxEBYFKx9D2xbWI1XorSktT%2FVc0zRb66LU3&X-Amz-Signature=04297e5905443a0f9462e177bd2419551d9c55f092b49e891b90404c86069902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252NQ4KD%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF8JCPMqZpuNqWEpX8NHRFHzqEN9xLNODkuShJedI6VwIgc2mo4haP2PzKGsxGbWRf3s3UKThuA296uDjKpA1lxv8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDH%2Fh54whFDcgcclCFyrcA2CBmjcydq7IIyRloNuXfF41HWqnhusYpRg0qSGELG4qhbxnMz9Rlkoh4PdoxqH6CbaT0KNjaTyqfXxLciFWKm9GWraxsl4RIvXItUpqAaVGYVanp09FzZkEfLLVfnlOSzoo0t8Xq9uRjN2OWAOnlsTWkII1TtKSYOAL4e4LV1zYquhb41S1I2gYQehEW4gNGxMPQbAwGjPjbPFjQLyEwRf%2FNa%2FajJcREcp5jh49v9uFxwuEQzOaSueeoUZdrDMabqRc9i3AVIlIUQA5bulUUxUQr5paT36KsywFmwlFlFvNNwOBcs0aL%2BBdhktgJJq2cFPmhw7RoRRZHT%2BUcQQMk%2FTUnOOmygu54xd1lxqQFDRIUzhOoySDms78jGtKVie6FerI5fd4GBLQ1FU%2FVL1GE3fMXM7B%2FW9OICEOwhE8DLrmCJBPP7ZfrFdkIEjBZ4e7WaNccxH1xiJveMT%2FYpQvJwoJGkqD2d1ZWVWYuONfncYGOWt3uxJYeTede8UchWbKVpza2i0z7FwdKHpQL0psCkPFmflavgC47ODPJ9%2BcLO35npasmzN30W0Er1veUudauqYP9UzGpqGiyY6wHaSfDEsiEOMOLTCmN3cyKPICX04adW0W4WQye8Q0Qt2lMJ31hscGOqUBDkgcSjkZnFlKkllht24u4DJ2qVIOH3mzzRCi%2BzZzxm6F2KM%2BofrXyr9KP%2FCR8jKWVzXx4cRAxODVG0FHwbIG4C0zOWlsZLQTrkEIuoz5wuauYiBIK3WeQmTVXAiHxyRUp5osNJeowX%2FTKWjkjTf4FLFMhLL68AIURHJfNZN7Rv6nzEPQca2H2wZ6J%2BxEBYFKx9D2xbWI1XorSktT%2FVc0zRb66LU3&X-Amz-Signature=5c33257327aa1610f2adeeb959ea0f03a943b42ed861b5c2d7ea8317c95a3ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252NQ4KD%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF8JCPMqZpuNqWEpX8NHRFHzqEN9xLNODkuShJedI6VwIgc2mo4haP2PzKGsxGbWRf3s3UKThuA296uDjKpA1lxv8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDH%2Fh54whFDcgcclCFyrcA2CBmjcydq7IIyRloNuXfF41HWqnhusYpRg0qSGELG4qhbxnMz9Rlkoh4PdoxqH6CbaT0KNjaTyqfXxLciFWKm9GWraxsl4RIvXItUpqAaVGYVanp09FzZkEfLLVfnlOSzoo0t8Xq9uRjN2OWAOnlsTWkII1TtKSYOAL4e4LV1zYquhb41S1I2gYQehEW4gNGxMPQbAwGjPjbPFjQLyEwRf%2FNa%2FajJcREcp5jh49v9uFxwuEQzOaSueeoUZdrDMabqRc9i3AVIlIUQA5bulUUxUQr5paT36KsywFmwlFlFvNNwOBcs0aL%2BBdhktgJJq2cFPmhw7RoRRZHT%2BUcQQMk%2FTUnOOmygu54xd1lxqQFDRIUzhOoySDms78jGtKVie6FerI5fd4GBLQ1FU%2FVL1GE3fMXM7B%2FW9OICEOwhE8DLrmCJBPP7ZfrFdkIEjBZ4e7WaNccxH1xiJveMT%2FYpQvJwoJGkqD2d1ZWVWYuONfncYGOWt3uxJYeTede8UchWbKVpza2i0z7FwdKHpQL0psCkPFmflavgC47ODPJ9%2BcLO35npasmzN30W0Er1veUudauqYP9UzGpqGiyY6wHaSfDEsiEOMOLTCmN3cyKPICX04adW0W4WQye8Q0Qt2lMJ31hscGOqUBDkgcSjkZnFlKkllht24u4DJ2qVIOH3mzzRCi%2BzZzxm6F2KM%2BofrXyr9KP%2FCR8jKWVzXx4cRAxODVG0FHwbIG4C0zOWlsZLQTrkEIuoz5wuauYiBIK3WeQmTVXAiHxyRUp5osNJeowX%2FTKWjkjTf4FLFMhLL68AIURHJfNZN7Rv6nzEPQca2H2wZ6J%2BxEBYFKx9D2xbWI1XorSktT%2FVc0zRb66LU3&X-Amz-Signature=b1aaec62936aa3434c5dd9ce21f6212dfe582ee28aa04064ad4ce9758a0b9438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252NQ4KD%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF8JCPMqZpuNqWEpX8NHRFHzqEN9xLNODkuShJedI6VwIgc2mo4haP2PzKGsxGbWRf3s3UKThuA296uDjKpA1lxv8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDH%2Fh54whFDcgcclCFyrcA2CBmjcydq7IIyRloNuXfF41HWqnhusYpRg0qSGELG4qhbxnMz9Rlkoh4PdoxqH6CbaT0KNjaTyqfXxLciFWKm9GWraxsl4RIvXItUpqAaVGYVanp09FzZkEfLLVfnlOSzoo0t8Xq9uRjN2OWAOnlsTWkII1TtKSYOAL4e4LV1zYquhb41S1I2gYQehEW4gNGxMPQbAwGjPjbPFjQLyEwRf%2FNa%2FajJcREcp5jh49v9uFxwuEQzOaSueeoUZdrDMabqRc9i3AVIlIUQA5bulUUxUQr5paT36KsywFmwlFlFvNNwOBcs0aL%2BBdhktgJJq2cFPmhw7RoRRZHT%2BUcQQMk%2FTUnOOmygu54xd1lxqQFDRIUzhOoySDms78jGtKVie6FerI5fd4GBLQ1FU%2FVL1GE3fMXM7B%2FW9OICEOwhE8DLrmCJBPP7ZfrFdkIEjBZ4e7WaNccxH1xiJveMT%2FYpQvJwoJGkqD2d1ZWVWYuONfncYGOWt3uxJYeTede8UchWbKVpza2i0z7FwdKHpQL0psCkPFmflavgC47ODPJ9%2BcLO35npasmzN30W0Er1veUudauqYP9UzGpqGiyY6wHaSfDEsiEOMOLTCmN3cyKPICX04adW0W4WQye8Q0Qt2lMJ31hscGOqUBDkgcSjkZnFlKkllht24u4DJ2qVIOH3mzzRCi%2BzZzxm6F2KM%2BofrXyr9KP%2FCR8jKWVzXx4cRAxODVG0FHwbIG4C0zOWlsZLQTrkEIuoz5wuauYiBIK3WeQmTVXAiHxyRUp5osNJeowX%2FTKWjkjTf4FLFMhLL68AIURHJfNZN7Rv6nzEPQca2H2wZ6J%2BxEBYFKx9D2xbWI1XorSktT%2FVc0zRb66LU3&X-Amz-Signature=1b78c1290ff3077f464c861969a7676ed1bd4cf75b7b54909825a67f1974fa1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252NQ4KD%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF8JCPMqZpuNqWEpX8NHRFHzqEN9xLNODkuShJedI6VwIgc2mo4haP2PzKGsxGbWRf3s3UKThuA296uDjKpA1lxv8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDH%2Fh54whFDcgcclCFyrcA2CBmjcydq7IIyRloNuXfF41HWqnhusYpRg0qSGELG4qhbxnMz9Rlkoh4PdoxqH6CbaT0KNjaTyqfXxLciFWKm9GWraxsl4RIvXItUpqAaVGYVanp09FzZkEfLLVfnlOSzoo0t8Xq9uRjN2OWAOnlsTWkII1TtKSYOAL4e4LV1zYquhb41S1I2gYQehEW4gNGxMPQbAwGjPjbPFjQLyEwRf%2FNa%2FajJcREcp5jh49v9uFxwuEQzOaSueeoUZdrDMabqRc9i3AVIlIUQA5bulUUxUQr5paT36KsywFmwlFlFvNNwOBcs0aL%2BBdhktgJJq2cFPmhw7RoRRZHT%2BUcQQMk%2FTUnOOmygu54xd1lxqQFDRIUzhOoySDms78jGtKVie6FerI5fd4GBLQ1FU%2FVL1GE3fMXM7B%2FW9OICEOwhE8DLrmCJBPP7ZfrFdkIEjBZ4e7WaNccxH1xiJveMT%2FYpQvJwoJGkqD2d1ZWVWYuONfncYGOWt3uxJYeTede8UchWbKVpza2i0z7FwdKHpQL0psCkPFmflavgC47ODPJ9%2BcLO35npasmzN30W0Er1veUudauqYP9UzGpqGiyY6wHaSfDEsiEOMOLTCmN3cyKPICX04adW0W4WQye8Q0Qt2lMJ31hscGOqUBDkgcSjkZnFlKkllht24u4DJ2qVIOH3mzzRCi%2BzZzxm6F2KM%2BofrXyr9KP%2FCR8jKWVzXx4cRAxODVG0FHwbIG4C0zOWlsZLQTrkEIuoz5wuauYiBIK3WeQmTVXAiHxyRUp5osNJeowX%2FTKWjkjTf4FLFMhLL68AIURHJfNZN7Rv6nzEPQca2H2wZ6J%2BxEBYFKx9D2xbWI1XorSktT%2FVc0zRb66LU3&X-Amz-Signature=68ffa522d43327ef2b5a9c57290290b0b633160458c4e8abc07b307b6986ffba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252NQ4KD%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF8JCPMqZpuNqWEpX8NHRFHzqEN9xLNODkuShJedI6VwIgc2mo4haP2PzKGsxGbWRf3s3UKThuA296uDjKpA1lxv8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDH%2Fh54whFDcgcclCFyrcA2CBmjcydq7IIyRloNuXfF41HWqnhusYpRg0qSGELG4qhbxnMz9Rlkoh4PdoxqH6CbaT0KNjaTyqfXxLciFWKm9GWraxsl4RIvXItUpqAaVGYVanp09FzZkEfLLVfnlOSzoo0t8Xq9uRjN2OWAOnlsTWkII1TtKSYOAL4e4LV1zYquhb41S1I2gYQehEW4gNGxMPQbAwGjPjbPFjQLyEwRf%2FNa%2FajJcREcp5jh49v9uFxwuEQzOaSueeoUZdrDMabqRc9i3AVIlIUQA5bulUUxUQr5paT36KsywFmwlFlFvNNwOBcs0aL%2BBdhktgJJq2cFPmhw7RoRRZHT%2BUcQQMk%2FTUnOOmygu54xd1lxqQFDRIUzhOoySDms78jGtKVie6FerI5fd4GBLQ1FU%2FVL1GE3fMXM7B%2FW9OICEOwhE8DLrmCJBPP7ZfrFdkIEjBZ4e7WaNccxH1xiJveMT%2FYpQvJwoJGkqD2d1ZWVWYuONfncYGOWt3uxJYeTede8UchWbKVpza2i0z7FwdKHpQL0psCkPFmflavgC47ODPJ9%2BcLO35npasmzN30W0Er1veUudauqYP9UzGpqGiyY6wHaSfDEsiEOMOLTCmN3cyKPICX04adW0W4WQye8Q0Qt2lMJ31hscGOqUBDkgcSjkZnFlKkllht24u4DJ2qVIOH3mzzRCi%2BzZzxm6F2KM%2BofrXyr9KP%2FCR8jKWVzXx4cRAxODVG0FHwbIG4C0zOWlsZLQTrkEIuoz5wuauYiBIK3WeQmTVXAiHxyRUp5osNJeowX%2FTKWjkjTf4FLFMhLL68AIURHJfNZN7Rv6nzEPQca2H2wZ6J%2BxEBYFKx9D2xbWI1XorSktT%2FVc0zRb66LU3&X-Amz-Signature=1958f85f6c8fa9bdd56003af8b416769ad99069a648c7dd7740f1bd12ab7bf83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


