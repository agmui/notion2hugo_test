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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U236NQLI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClfV454CYYXmPe%2Fv6QZF%2BKkGKA3z1A%2FDFt9lqFoHFy9QIgBGOOVoHADQlBdv%2BHRz9khiuUGVxBnHDFsG3yjvfmC04qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGnoQ%2FI6vppBI%2BvwSrcA%2B%2FAHHI6hMWIR5uJsPNk9znmfeIXifnrQ0jsXPh22BB%2FxRgEWFpdL8cXwWd81mDJ70ToRANUB1sU68qllUvpp9xFT8nG6hRpVJJw83dfwY2KRZzb3V5MOMxfn472qTlOySXEuudXLVF2s10hnUIdKCihaRV8LAORF9Qa4laDmSxINx%2Bm%2FNqD0MaogdW8UipOcY7XCxRDSyXqM9pnYRoEN2eDR6t%2BLqzCkekZ%2FNZElH35aDKjqNEdWbmTtQq1QKltL%2F1z9wChavtcSKG35mRJG3hmVvzyu7bcA2bbb4%2FmHiZ9BBx0EAspdztfJMqV%2BL2KXwNjb9st0I1zn0Qf1LkWw12ZcLzRLL7ur2uRLUhBUsNd6q3Ym8ts5fzvx47O5Y%2FqOOW%2Ft6RG%2FPTsgbBNBQPzHBbBiCluvK58kEp9P0Ikfn%2FecELbp33RJl2AyjSlq1FezHVcgSDciisSiqGJOfT3Sep89ODO7Ym7ztX6JUE9c1HzvsaCMajSgSMjnOZuPaTuHJA9SuNxWlcMK4cS58SSYoWLIslEr%2BoewuUwIMrMWidcP42%2Fu%2BaZlx2jRowcM5akoZuQN6c38uqJkBvgRNOgLo58zd1kcVuHZ%2FpGyOrAt5yJ2nhti0t%2BWskY%2FmWfMOT14MQGOqUBKbm27swnSPKv25Plu96g26WQtrzQn2QZBguTX2RtXS41Pzk0u5c1cSo%2Fy4TLYn06T1L1xuKCsGbfXa1S0YAoMAy1%2B9pi%2BUAXrGrQzjAogsjklcJGFHAoAHVI7Vi3YfPIyKacsxGMBgh%2FlmngT9IenajtPMKfobtyPo%2FjNWpufX0iDY0OywTbRfmHG8stMIQyLwiuiBPJlBcaWPqulimn5Cab9VlD&X-Amz-Signature=b3aecc122c4349626d825ece3c104b9e8ff55a262c4d48543c54ba4a11747ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U236NQLI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClfV454CYYXmPe%2Fv6QZF%2BKkGKA3z1A%2FDFt9lqFoHFy9QIgBGOOVoHADQlBdv%2BHRz9khiuUGVxBnHDFsG3yjvfmC04qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGnoQ%2FI6vppBI%2BvwSrcA%2B%2FAHHI6hMWIR5uJsPNk9znmfeIXifnrQ0jsXPh22BB%2FxRgEWFpdL8cXwWd81mDJ70ToRANUB1sU68qllUvpp9xFT8nG6hRpVJJw83dfwY2KRZzb3V5MOMxfn472qTlOySXEuudXLVF2s10hnUIdKCihaRV8LAORF9Qa4laDmSxINx%2Bm%2FNqD0MaogdW8UipOcY7XCxRDSyXqM9pnYRoEN2eDR6t%2BLqzCkekZ%2FNZElH35aDKjqNEdWbmTtQq1QKltL%2F1z9wChavtcSKG35mRJG3hmVvzyu7bcA2bbb4%2FmHiZ9BBx0EAspdztfJMqV%2BL2KXwNjb9st0I1zn0Qf1LkWw12ZcLzRLL7ur2uRLUhBUsNd6q3Ym8ts5fzvx47O5Y%2FqOOW%2Ft6RG%2FPTsgbBNBQPzHBbBiCluvK58kEp9P0Ikfn%2FecELbp33RJl2AyjSlq1FezHVcgSDciisSiqGJOfT3Sep89ODO7Ym7ztX6JUE9c1HzvsaCMajSgSMjnOZuPaTuHJA9SuNxWlcMK4cS58SSYoWLIslEr%2BoewuUwIMrMWidcP42%2Fu%2BaZlx2jRowcM5akoZuQN6c38uqJkBvgRNOgLo58zd1kcVuHZ%2FpGyOrAt5yJ2nhti0t%2BWskY%2FmWfMOT14MQGOqUBKbm27swnSPKv25Plu96g26WQtrzQn2QZBguTX2RtXS41Pzk0u5c1cSo%2Fy4TLYn06T1L1xuKCsGbfXa1S0YAoMAy1%2B9pi%2BUAXrGrQzjAogsjklcJGFHAoAHVI7Vi3YfPIyKacsxGMBgh%2FlmngT9IenajtPMKfobtyPo%2FjNWpufX0iDY0OywTbRfmHG8stMIQyLwiuiBPJlBcaWPqulimn5Cab9VlD&X-Amz-Signature=8cec071680bb81ac3564cf132630660918f253928c7c8e95274aec5a27856d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U236NQLI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClfV454CYYXmPe%2Fv6QZF%2BKkGKA3z1A%2FDFt9lqFoHFy9QIgBGOOVoHADQlBdv%2BHRz9khiuUGVxBnHDFsG3yjvfmC04qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGnoQ%2FI6vppBI%2BvwSrcA%2B%2FAHHI6hMWIR5uJsPNk9znmfeIXifnrQ0jsXPh22BB%2FxRgEWFpdL8cXwWd81mDJ70ToRANUB1sU68qllUvpp9xFT8nG6hRpVJJw83dfwY2KRZzb3V5MOMxfn472qTlOySXEuudXLVF2s10hnUIdKCihaRV8LAORF9Qa4laDmSxINx%2Bm%2FNqD0MaogdW8UipOcY7XCxRDSyXqM9pnYRoEN2eDR6t%2BLqzCkekZ%2FNZElH35aDKjqNEdWbmTtQq1QKltL%2F1z9wChavtcSKG35mRJG3hmVvzyu7bcA2bbb4%2FmHiZ9BBx0EAspdztfJMqV%2BL2KXwNjb9st0I1zn0Qf1LkWw12ZcLzRLL7ur2uRLUhBUsNd6q3Ym8ts5fzvx47O5Y%2FqOOW%2Ft6RG%2FPTsgbBNBQPzHBbBiCluvK58kEp9P0Ikfn%2FecELbp33RJl2AyjSlq1FezHVcgSDciisSiqGJOfT3Sep89ODO7Ym7ztX6JUE9c1HzvsaCMajSgSMjnOZuPaTuHJA9SuNxWlcMK4cS58SSYoWLIslEr%2BoewuUwIMrMWidcP42%2Fu%2BaZlx2jRowcM5akoZuQN6c38uqJkBvgRNOgLo58zd1kcVuHZ%2FpGyOrAt5yJ2nhti0t%2BWskY%2FmWfMOT14MQGOqUBKbm27swnSPKv25Plu96g26WQtrzQn2QZBguTX2RtXS41Pzk0u5c1cSo%2Fy4TLYn06T1L1xuKCsGbfXa1S0YAoMAy1%2B9pi%2BUAXrGrQzjAogsjklcJGFHAoAHVI7Vi3YfPIyKacsxGMBgh%2FlmngT9IenajtPMKfobtyPo%2FjNWpufX0iDY0OywTbRfmHG8stMIQyLwiuiBPJlBcaWPqulimn5Cab9VlD&X-Amz-Signature=aa3a6ad4609f479fceac8c208aa6f66650f32ed2bfada6accc56a3fbf812a40e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U236NQLI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClfV454CYYXmPe%2Fv6QZF%2BKkGKA3z1A%2FDFt9lqFoHFy9QIgBGOOVoHADQlBdv%2BHRz9khiuUGVxBnHDFsG3yjvfmC04qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGnoQ%2FI6vppBI%2BvwSrcA%2B%2FAHHI6hMWIR5uJsPNk9znmfeIXifnrQ0jsXPh22BB%2FxRgEWFpdL8cXwWd81mDJ70ToRANUB1sU68qllUvpp9xFT8nG6hRpVJJw83dfwY2KRZzb3V5MOMxfn472qTlOySXEuudXLVF2s10hnUIdKCihaRV8LAORF9Qa4laDmSxINx%2Bm%2FNqD0MaogdW8UipOcY7XCxRDSyXqM9pnYRoEN2eDR6t%2BLqzCkekZ%2FNZElH35aDKjqNEdWbmTtQq1QKltL%2F1z9wChavtcSKG35mRJG3hmVvzyu7bcA2bbb4%2FmHiZ9BBx0EAspdztfJMqV%2BL2KXwNjb9st0I1zn0Qf1LkWw12ZcLzRLL7ur2uRLUhBUsNd6q3Ym8ts5fzvx47O5Y%2FqOOW%2Ft6RG%2FPTsgbBNBQPzHBbBiCluvK58kEp9P0Ikfn%2FecELbp33RJl2AyjSlq1FezHVcgSDciisSiqGJOfT3Sep89ODO7Ym7ztX6JUE9c1HzvsaCMajSgSMjnOZuPaTuHJA9SuNxWlcMK4cS58SSYoWLIslEr%2BoewuUwIMrMWidcP42%2Fu%2BaZlx2jRowcM5akoZuQN6c38uqJkBvgRNOgLo58zd1kcVuHZ%2FpGyOrAt5yJ2nhti0t%2BWskY%2FmWfMOT14MQGOqUBKbm27swnSPKv25Plu96g26WQtrzQn2QZBguTX2RtXS41Pzk0u5c1cSo%2Fy4TLYn06T1L1xuKCsGbfXa1S0YAoMAy1%2B9pi%2BUAXrGrQzjAogsjklcJGFHAoAHVI7Vi3YfPIyKacsxGMBgh%2FlmngT9IenajtPMKfobtyPo%2FjNWpufX0iDY0OywTbRfmHG8stMIQyLwiuiBPJlBcaWPqulimn5Cab9VlD&X-Amz-Signature=eebe068f168c2d1f0f1913881c1e118f2fab45d568560fcf7c6ac63f9930699f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPYHMYS2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFb1zS3eBZkjAFlHR8%2B8bAmnKcFCAV48oDL8IebEUoL6AiALXXJxBdgXAscNSEPCXl1ko%2BlUJSE7tPqevOlchh3tTCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTTmpOxOSO5CCP3zuKtwDUZVU0IS5J0lEmZup45lEwd0204JC3IdQTwfHGqfiPf8ZcNMTPIQ0v9XvG7F8IxcSfKHP69x7Jv79rcB6JqxrphIIewK7uXuuS6Tr%2BZzSIitt7bd8KKRfH1l98HocR%2BmFARuIzeTtkzoGlOw2a2UpPupw0UmkDchEpbVdo6sD8ulWRoov7YIg8jPt6plmercuM4S8R19XVaMZMA6wbefbidp5uAxtRLOnMOxPj3u0KOFmECsRj3mZGCB7EulgdmfTwEjee2zcqkpTXICG0NmOJiat1zbyt9h%2BEm8bik26Kjs%2F8txc2Z%2F%2B%2BBPcSUUazrbueq4GaQxKZ1dxaDKSL2LdVQ%2BpreZUyBJEbSiDxCqVaeNishc7sLwV%2BWu9LyT%2FhfX2SR53nSrQEqIgKa%2FWGkONo%2Bd8wdP3ke%2FnVIuNuRrbq4%2F%2FmQRTiqueBSe6Dkb4%2BL65WcKbFpiUhJ3cgq8nEWkJwg%2B3ow5LZR5Nn%2F7VXuOaqinDeSqxJsZZcMP5oKzRqcmRGbfdnJXYl%2Bu1vEmffjV7I8LoRAqAzSXF0MkB5XTPVqGzKqsPZFAZDzzbLbbm%2F76Oa%2BL47EvSkI4gdStNKuEkLBCyz6w6NaD2q810YC0FejgzhxOyuWiRXRmXob8w7%2FXgxAY6pgFCrdtu9V6P6mdmc4kUaNtub9zrF6u9T0IZCGDFavXklEG0KvIztIWfq9WVRYgb091vOW%2BEv%2BybiD9dBSN9gnQUqSlsymff8A8izDVauFIbXNo0vhFvQFSxULN%2BnHz%2FaeZnGy%2FaEOUEBZznF4pAVQUtaal9tqfD48DHRl1V5CDTBGMFn5UrKOhkbNUI49HY6s3TdRKccpomdFXIBD%2FrvbKTG0QCEgEv&X-Amz-Signature=5225208f8b770dfd1a3ac6b8d0dfa8416a69887e57a4725df44c95ee59f0b2c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U236NQLI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClfV454CYYXmPe%2Fv6QZF%2BKkGKA3z1A%2FDFt9lqFoHFy9QIgBGOOVoHADQlBdv%2BHRz9khiuUGVxBnHDFsG3yjvfmC04qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGnoQ%2FI6vppBI%2BvwSrcA%2B%2FAHHI6hMWIR5uJsPNk9znmfeIXifnrQ0jsXPh22BB%2FxRgEWFpdL8cXwWd81mDJ70ToRANUB1sU68qllUvpp9xFT8nG6hRpVJJw83dfwY2KRZzb3V5MOMxfn472qTlOySXEuudXLVF2s10hnUIdKCihaRV8LAORF9Qa4laDmSxINx%2Bm%2FNqD0MaogdW8UipOcY7XCxRDSyXqM9pnYRoEN2eDR6t%2BLqzCkekZ%2FNZElH35aDKjqNEdWbmTtQq1QKltL%2F1z9wChavtcSKG35mRJG3hmVvzyu7bcA2bbb4%2FmHiZ9BBx0EAspdztfJMqV%2BL2KXwNjb9st0I1zn0Qf1LkWw12ZcLzRLL7ur2uRLUhBUsNd6q3Ym8ts5fzvx47O5Y%2FqOOW%2Ft6RG%2FPTsgbBNBQPzHBbBiCluvK58kEp9P0Ikfn%2FecELbp33RJl2AyjSlq1FezHVcgSDciisSiqGJOfT3Sep89ODO7Ym7ztX6JUE9c1HzvsaCMajSgSMjnOZuPaTuHJA9SuNxWlcMK4cS58SSYoWLIslEr%2BoewuUwIMrMWidcP42%2Fu%2BaZlx2jRowcM5akoZuQN6c38uqJkBvgRNOgLo58zd1kcVuHZ%2FpGyOrAt5yJ2nhti0t%2BWskY%2FmWfMOT14MQGOqUBKbm27swnSPKv25Plu96g26WQtrzQn2QZBguTX2RtXS41Pzk0u5c1cSo%2Fy4TLYn06T1L1xuKCsGbfXa1S0YAoMAy1%2B9pi%2BUAXrGrQzjAogsjklcJGFHAoAHVI7Vi3YfPIyKacsxGMBgh%2FlmngT9IenajtPMKfobtyPo%2FjNWpufX0iDY0OywTbRfmHG8stMIQyLwiuiBPJlBcaWPqulimn5Cab9VlD&X-Amz-Signature=da1911cf99ccf00ef19528d1e2007d7dd6f395eddec7f394a9afa6dc86a7d150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U236NQLI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClfV454CYYXmPe%2Fv6QZF%2BKkGKA3z1A%2FDFt9lqFoHFy9QIgBGOOVoHADQlBdv%2BHRz9khiuUGVxBnHDFsG3yjvfmC04qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGnoQ%2FI6vppBI%2BvwSrcA%2B%2FAHHI6hMWIR5uJsPNk9znmfeIXifnrQ0jsXPh22BB%2FxRgEWFpdL8cXwWd81mDJ70ToRANUB1sU68qllUvpp9xFT8nG6hRpVJJw83dfwY2KRZzb3V5MOMxfn472qTlOySXEuudXLVF2s10hnUIdKCihaRV8LAORF9Qa4laDmSxINx%2Bm%2FNqD0MaogdW8UipOcY7XCxRDSyXqM9pnYRoEN2eDR6t%2BLqzCkekZ%2FNZElH35aDKjqNEdWbmTtQq1QKltL%2F1z9wChavtcSKG35mRJG3hmVvzyu7bcA2bbb4%2FmHiZ9BBx0EAspdztfJMqV%2BL2KXwNjb9st0I1zn0Qf1LkWw12ZcLzRLL7ur2uRLUhBUsNd6q3Ym8ts5fzvx47O5Y%2FqOOW%2Ft6RG%2FPTsgbBNBQPzHBbBiCluvK58kEp9P0Ikfn%2FecELbp33RJl2AyjSlq1FezHVcgSDciisSiqGJOfT3Sep89ODO7Ym7ztX6JUE9c1HzvsaCMajSgSMjnOZuPaTuHJA9SuNxWlcMK4cS58SSYoWLIslEr%2BoewuUwIMrMWidcP42%2Fu%2BaZlx2jRowcM5akoZuQN6c38uqJkBvgRNOgLo58zd1kcVuHZ%2FpGyOrAt5yJ2nhti0t%2BWskY%2FmWfMOT14MQGOqUBKbm27swnSPKv25Plu96g26WQtrzQn2QZBguTX2RtXS41Pzk0u5c1cSo%2Fy4TLYn06T1L1xuKCsGbfXa1S0YAoMAy1%2B9pi%2BUAXrGrQzjAogsjklcJGFHAoAHVI7Vi3YfPIyKacsxGMBgh%2FlmngT9IenajtPMKfobtyPo%2FjNWpufX0iDY0OywTbRfmHG8stMIQyLwiuiBPJlBcaWPqulimn5Cab9VlD&X-Amz-Signature=481542088fb57b28054f66f1f2328f5f3edece06d6f781f8a0ed6d19266f260e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U236NQLI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClfV454CYYXmPe%2Fv6QZF%2BKkGKA3z1A%2FDFt9lqFoHFy9QIgBGOOVoHADQlBdv%2BHRz9khiuUGVxBnHDFsG3yjvfmC04qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGnoQ%2FI6vppBI%2BvwSrcA%2B%2FAHHI6hMWIR5uJsPNk9znmfeIXifnrQ0jsXPh22BB%2FxRgEWFpdL8cXwWd81mDJ70ToRANUB1sU68qllUvpp9xFT8nG6hRpVJJw83dfwY2KRZzb3V5MOMxfn472qTlOySXEuudXLVF2s10hnUIdKCihaRV8LAORF9Qa4laDmSxINx%2Bm%2FNqD0MaogdW8UipOcY7XCxRDSyXqM9pnYRoEN2eDR6t%2BLqzCkekZ%2FNZElH35aDKjqNEdWbmTtQq1QKltL%2F1z9wChavtcSKG35mRJG3hmVvzyu7bcA2bbb4%2FmHiZ9BBx0EAspdztfJMqV%2BL2KXwNjb9st0I1zn0Qf1LkWw12ZcLzRLL7ur2uRLUhBUsNd6q3Ym8ts5fzvx47O5Y%2FqOOW%2Ft6RG%2FPTsgbBNBQPzHBbBiCluvK58kEp9P0Ikfn%2FecELbp33RJl2AyjSlq1FezHVcgSDciisSiqGJOfT3Sep89ODO7Ym7ztX6JUE9c1HzvsaCMajSgSMjnOZuPaTuHJA9SuNxWlcMK4cS58SSYoWLIslEr%2BoewuUwIMrMWidcP42%2Fu%2BaZlx2jRowcM5akoZuQN6c38uqJkBvgRNOgLo58zd1kcVuHZ%2FpGyOrAt5yJ2nhti0t%2BWskY%2FmWfMOT14MQGOqUBKbm27swnSPKv25Plu96g26WQtrzQn2QZBguTX2RtXS41Pzk0u5c1cSo%2Fy4TLYn06T1L1xuKCsGbfXa1S0YAoMAy1%2B9pi%2BUAXrGrQzjAogsjklcJGFHAoAHVI7Vi3YfPIyKacsxGMBgh%2FlmngT9IenajtPMKfobtyPo%2FjNWpufX0iDY0OywTbRfmHG8stMIQyLwiuiBPJlBcaWPqulimn5Cab9VlD&X-Amz-Signature=564f65cb8beaae164ad8953375dfd2f9faf00de160d01b3d0955c095e317d342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U236NQLI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClfV454CYYXmPe%2Fv6QZF%2BKkGKA3z1A%2FDFt9lqFoHFy9QIgBGOOVoHADQlBdv%2BHRz9khiuUGVxBnHDFsG3yjvfmC04qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGnoQ%2FI6vppBI%2BvwSrcA%2B%2FAHHI6hMWIR5uJsPNk9znmfeIXifnrQ0jsXPh22BB%2FxRgEWFpdL8cXwWd81mDJ70ToRANUB1sU68qllUvpp9xFT8nG6hRpVJJw83dfwY2KRZzb3V5MOMxfn472qTlOySXEuudXLVF2s10hnUIdKCihaRV8LAORF9Qa4laDmSxINx%2Bm%2FNqD0MaogdW8UipOcY7XCxRDSyXqM9pnYRoEN2eDR6t%2BLqzCkekZ%2FNZElH35aDKjqNEdWbmTtQq1QKltL%2F1z9wChavtcSKG35mRJG3hmVvzyu7bcA2bbb4%2FmHiZ9BBx0EAspdztfJMqV%2BL2KXwNjb9st0I1zn0Qf1LkWw12ZcLzRLL7ur2uRLUhBUsNd6q3Ym8ts5fzvx47O5Y%2FqOOW%2Ft6RG%2FPTsgbBNBQPzHBbBiCluvK58kEp9P0Ikfn%2FecELbp33RJl2AyjSlq1FezHVcgSDciisSiqGJOfT3Sep89ODO7Ym7ztX6JUE9c1HzvsaCMajSgSMjnOZuPaTuHJA9SuNxWlcMK4cS58SSYoWLIslEr%2BoewuUwIMrMWidcP42%2Fu%2BaZlx2jRowcM5akoZuQN6c38uqJkBvgRNOgLo58zd1kcVuHZ%2FpGyOrAt5yJ2nhti0t%2BWskY%2FmWfMOT14MQGOqUBKbm27swnSPKv25Plu96g26WQtrzQn2QZBguTX2RtXS41Pzk0u5c1cSo%2Fy4TLYn06T1L1xuKCsGbfXa1S0YAoMAy1%2B9pi%2BUAXrGrQzjAogsjklcJGFHAoAHVI7Vi3YfPIyKacsxGMBgh%2FlmngT9IenajtPMKfobtyPo%2FjNWpufX0iDY0OywTbRfmHG8stMIQyLwiuiBPJlBcaWPqulimn5Cab9VlD&X-Amz-Signature=c4bc3dda762f76eff6e946467a79504093852e431475aae4a57370a2ebccd18b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U236NQLI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClfV454CYYXmPe%2Fv6QZF%2BKkGKA3z1A%2FDFt9lqFoHFy9QIgBGOOVoHADQlBdv%2BHRz9khiuUGVxBnHDFsG3yjvfmC04qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGnoQ%2FI6vppBI%2BvwSrcA%2B%2FAHHI6hMWIR5uJsPNk9znmfeIXifnrQ0jsXPh22BB%2FxRgEWFpdL8cXwWd81mDJ70ToRANUB1sU68qllUvpp9xFT8nG6hRpVJJw83dfwY2KRZzb3V5MOMxfn472qTlOySXEuudXLVF2s10hnUIdKCihaRV8LAORF9Qa4laDmSxINx%2Bm%2FNqD0MaogdW8UipOcY7XCxRDSyXqM9pnYRoEN2eDR6t%2BLqzCkekZ%2FNZElH35aDKjqNEdWbmTtQq1QKltL%2F1z9wChavtcSKG35mRJG3hmVvzyu7bcA2bbb4%2FmHiZ9BBx0EAspdztfJMqV%2BL2KXwNjb9st0I1zn0Qf1LkWw12ZcLzRLL7ur2uRLUhBUsNd6q3Ym8ts5fzvx47O5Y%2FqOOW%2Ft6RG%2FPTsgbBNBQPzHBbBiCluvK58kEp9P0Ikfn%2FecELbp33RJl2AyjSlq1FezHVcgSDciisSiqGJOfT3Sep89ODO7Ym7ztX6JUE9c1HzvsaCMajSgSMjnOZuPaTuHJA9SuNxWlcMK4cS58SSYoWLIslEr%2BoewuUwIMrMWidcP42%2Fu%2BaZlx2jRowcM5akoZuQN6c38uqJkBvgRNOgLo58zd1kcVuHZ%2FpGyOrAt5yJ2nhti0t%2BWskY%2FmWfMOT14MQGOqUBKbm27swnSPKv25Plu96g26WQtrzQn2QZBguTX2RtXS41Pzk0u5c1cSo%2Fy4TLYn06T1L1xuKCsGbfXa1S0YAoMAy1%2B9pi%2BUAXrGrQzjAogsjklcJGFHAoAHVI7Vi3YfPIyKacsxGMBgh%2FlmngT9IenajtPMKfobtyPo%2FjNWpufX0iDY0OywTbRfmHG8stMIQyLwiuiBPJlBcaWPqulimn5Cab9VlD&X-Amz-Signature=29c35b0ed1794bc8d0578fe307f1fe69244e64fe403eb26779581bd83d296143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U236NQLI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClfV454CYYXmPe%2Fv6QZF%2BKkGKA3z1A%2FDFt9lqFoHFy9QIgBGOOVoHADQlBdv%2BHRz9khiuUGVxBnHDFsG3yjvfmC04qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGnoQ%2FI6vppBI%2BvwSrcA%2B%2FAHHI6hMWIR5uJsPNk9znmfeIXifnrQ0jsXPh22BB%2FxRgEWFpdL8cXwWd81mDJ70ToRANUB1sU68qllUvpp9xFT8nG6hRpVJJw83dfwY2KRZzb3V5MOMxfn472qTlOySXEuudXLVF2s10hnUIdKCihaRV8LAORF9Qa4laDmSxINx%2Bm%2FNqD0MaogdW8UipOcY7XCxRDSyXqM9pnYRoEN2eDR6t%2BLqzCkekZ%2FNZElH35aDKjqNEdWbmTtQq1QKltL%2F1z9wChavtcSKG35mRJG3hmVvzyu7bcA2bbb4%2FmHiZ9BBx0EAspdztfJMqV%2BL2KXwNjb9st0I1zn0Qf1LkWw12ZcLzRLL7ur2uRLUhBUsNd6q3Ym8ts5fzvx47O5Y%2FqOOW%2Ft6RG%2FPTsgbBNBQPzHBbBiCluvK58kEp9P0Ikfn%2FecELbp33RJl2AyjSlq1FezHVcgSDciisSiqGJOfT3Sep89ODO7Ym7ztX6JUE9c1HzvsaCMajSgSMjnOZuPaTuHJA9SuNxWlcMK4cS58SSYoWLIslEr%2BoewuUwIMrMWidcP42%2Fu%2BaZlx2jRowcM5akoZuQN6c38uqJkBvgRNOgLo58zd1kcVuHZ%2FpGyOrAt5yJ2nhti0t%2BWskY%2FmWfMOT14MQGOqUBKbm27swnSPKv25Plu96g26WQtrzQn2QZBguTX2RtXS41Pzk0u5c1cSo%2Fy4TLYn06T1L1xuKCsGbfXa1S0YAoMAy1%2B9pi%2BUAXrGrQzjAogsjklcJGFHAoAHVI7Vi3YfPIyKacsxGMBgh%2FlmngT9IenajtPMKfobtyPo%2FjNWpufX0iDY0OywTbRfmHG8stMIQyLwiuiBPJlBcaWPqulimn5Cab9VlD&X-Amz-Signature=1c8aaa005296d63a3c8484608242b91ce1624d74f7f3a8cc39ef974d73467071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
