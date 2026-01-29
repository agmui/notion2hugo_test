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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2D4YTYQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlsyXmzYrds81L6YQOo0wrzjkrP%2Fe80sAGUbEUHU%2FOgAiEA7ylEPRNB4WKX5p2l4MO5PkQraeoqW5mYXgULcP0AHA4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDI3fvthjZ2DLxBQdPircA3HJ%2BItfuqqzPORNhVAe9S8Z6OYx0cYN%2B9tPkBew3uOxlPOMUcJ%2FGO4xDSTD759bkn9%2FucbQCLaGAURmHHRtdaCYD47%2F9s%2FddR8HoSdhmvgHVs6mp4C5rMvyTjZ%2BbU%2F2QzAoLZebv9g9mCz%2FVY4tAPjVGvD2vy%2BstTGie4xgulF0iUEqhgX6sdmKduxCslivpsU2fqtYVNR23q3utEFlK7J4I2nmK%2FsIWkLB91a58KNuhBkxz3w5vtyX88nJmU2r6ezC4CV7FZdTzeRXcS9Y9v4lSmd0GQkPsarhltLmI3vK5FJfiyMpJ3fslbQPZqCX8inqhfpPOi1AqT0zIjMbHAgV2ufi2dxmfngS4WdT2tt5g2BWsi1Rv0lqJCIfGVzzm8GeAedOvzEsx77g0qYmybQop%2FdX9zmeFN2YSW%2FzdrNW9Q4jaYRcVRaCJWdRFbsJHaw0NOBnkQLSioYC1y8n1CtyBrw7%2FnkN12pineoJ28XF2NItTcM7mZjgzPAcwpYidwwxkt0lPBZNNQAfHww3%2BQIuHUy5PLtKCgbZglHJbdvOnoVg0R%2Bxq9Y%2FHGkiCN17YVan2OlhCzue3fKmcs2lwbMaXKxecTGnibrwCeVzf8A%2F355vLTdfMVn4EBzmMLH16ssGOqUB2Wll0O5w3vEpA1QcsMIrAwKZLsH1R7ZgfRqFwMMdZsZubuDgv8nzj0680gR%2BQLQT%2Bwnr%2FIpa%2F8Lwo0W3h3jLluKaSq1Vq4pGVcB72CyWC2HlKAPGoYlPB2qpHhAd%2BkPNPAj1FlYdVBaTFZNAIN1zL4TC4SiPorpz%2B1%2FVZfHZRfj1Uij25110gDXD4SOogPByD%2B0k9IUwW8FnrdCiAr1G5vsNLDXR&X-Amz-Signature=b220a8a345a72fe831e6ae2eca9fab586340b947b9fa79861f25cfd65729a9ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2D4YTYQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlsyXmzYrds81L6YQOo0wrzjkrP%2Fe80sAGUbEUHU%2FOgAiEA7ylEPRNB4WKX5p2l4MO5PkQraeoqW5mYXgULcP0AHA4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDI3fvthjZ2DLxBQdPircA3HJ%2BItfuqqzPORNhVAe9S8Z6OYx0cYN%2B9tPkBew3uOxlPOMUcJ%2FGO4xDSTD759bkn9%2FucbQCLaGAURmHHRtdaCYD47%2F9s%2FddR8HoSdhmvgHVs6mp4C5rMvyTjZ%2BbU%2F2QzAoLZebv9g9mCz%2FVY4tAPjVGvD2vy%2BstTGie4xgulF0iUEqhgX6sdmKduxCslivpsU2fqtYVNR23q3utEFlK7J4I2nmK%2FsIWkLB91a58KNuhBkxz3w5vtyX88nJmU2r6ezC4CV7FZdTzeRXcS9Y9v4lSmd0GQkPsarhltLmI3vK5FJfiyMpJ3fslbQPZqCX8inqhfpPOi1AqT0zIjMbHAgV2ufi2dxmfngS4WdT2tt5g2BWsi1Rv0lqJCIfGVzzm8GeAedOvzEsx77g0qYmybQop%2FdX9zmeFN2YSW%2FzdrNW9Q4jaYRcVRaCJWdRFbsJHaw0NOBnkQLSioYC1y8n1CtyBrw7%2FnkN12pineoJ28XF2NItTcM7mZjgzPAcwpYidwwxkt0lPBZNNQAfHww3%2BQIuHUy5PLtKCgbZglHJbdvOnoVg0R%2Bxq9Y%2FHGkiCN17YVan2OlhCzue3fKmcs2lwbMaXKxecTGnibrwCeVzf8A%2F355vLTdfMVn4EBzmMLH16ssGOqUB2Wll0O5w3vEpA1QcsMIrAwKZLsH1R7ZgfRqFwMMdZsZubuDgv8nzj0680gR%2BQLQT%2Bwnr%2FIpa%2F8Lwo0W3h3jLluKaSq1Vq4pGVcB72CyWC2HlKAPGoYlPB2qpHhAd%2BkPNPAj1FlYdVBaTFZNAIN1zL4TC4SiPorpz%2B1%2FVZfHZRfj1Uij25110gDXD4SOogPByD%2B0k9IUwW8FnrdCiAr1G5vsNLDXR&X-Amz-Signature=c6a96f0c1a09bba62efbbb2d13c342a6d736e3f640182420e79032e49d49f0a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2D4YTYQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlsyXmzYrds81L6YQOo0wrzjkrP%2Fe80sAGUbEUHU%2FOgAiEA7ylEPRNB4WKX5p2l4MO5PkQraeoqW5mYXgULcP0AHA4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDI3fvthjZ2DLxBQdPircA3HJ%2BItfuqqzPORNhVAe9S8Z6OYx0cYN%2B9tPkBew3uOxlPOMUcJ%2FGO4xDSTD759bkn9%2FucbQCLaGAURmHHRtdaCYD47%2F9s%2FddR8HoSdhmvgHVs6mp4C5rMvyTjZ%2BbU%2F2QzAoLZebv9g9mCz%2FVY4tAPjVGvD2vy%2BstTGie4xgulF0iUEqhgX6sdmKduxCslivpsU2fqtYVNR23q3utEFlK7J4I2nmK%2FsIWkLB91a58KNuhBkxz3w5vtyX88nJmU2r6ezC4CV7FZdTzeRXcS9Y9v4lSmd0GQkPsarhltLmI3vK5FJfiyMpJ3fslbQPZqCX8inqhfpPOi1AqT0zIjMbHAgV2ufi2dxmfngS4WdT2tt5g2BWsi1Rv0lqJCIfGVzzm8GeAedOvzEsx77g0qYmybQop%2FdX9zmeFN2YSW%2FzdrNW9Q4jaYRcVRaCJWdRFbsJHaw0NOBnkQLSioYC1y8n1CtyBrw7%2FnkN12pineoJ28XF2NItTcM7mZjgzPAcwpYidwwxkt0lPBZNNQAfHww3%2BQIuHUy5PLtKCgbZglHJbdvOnoVg0R%2Bxq9Y%2FHGkiCN17YVan2OlhCzue3fKmcs2lwbMaXKxecTGnibrwCeVzf8A%2F355vLTdfMVn4EBzmMLH16ssGOqUB2Wll0O5w3vEpA1QcsMIrAwKZLsH1R7ZgfRqFwMMdZsZubuDgv8nzj0680gR%2BQLQT%2Bwnr%2FIpa%2F8Lwo0W3h3jLluKaSq1Vq4pGVcB72CyWC2HlKAPGoYlPB2qpHhAd%2BkPNPAj1FlYdVBaTFZNAIN1zL4TC4SiPorpz%2B1%2FVZfHZRfj1Uij25110gDXD4SOogPByD%2B0k9IUwW8FnrdCiAr1G5vsNLDXR&X-Amz-Signature=a2d25dd62f986f2740a97f5d7aa4ca02e10bb07e77296297d2572d92ed9e1686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2D4YTYQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlsyXmzYrds81L6YQOo0wrzjkrP%2Fe80sAGUbEUHU%2FOgAiEA7ylEPRNB4WKX5p2l4MO5PkQraeoqW5mYXgULcP0AHA4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDI3fvthjZ2DLxBQdPircA3HJ%2BItfuqqzPORNhVAe9S8Z6OYx0cYN%2B9tPkBew3uOxlPOMUcJ%2FGO4xDSTD759bkn9%2FucbQCLaGAURmHHRtdaCYD47%2F9s%2FddR8HoSdhmvgHVs6mp4C5rMvyTjZ%2BbU%2F2QzAoLZebv9g9mCz%2FVY4tAPjVGvD2vy%2BstTGie4xgulF0iUEqhgX6sdmKduxCslivpsU2fqtYVNR23q3utEFlK7J4I2nmK%2FsIWkLB91a58KNuhBkxz3w5vtyX88nJmU2r6ezC4CV7FZdTzeRXcS9Y9v4lSmd0GQkPsarhltLmI3vK5FJfiyMpJ3fslbQPZqCX8inqhfpPOi1AqT0zIjMbHAgV2ufi2dxmfngS4WdT2tt5g2BWsi1Rv0lqJCIfGVzzm8GeAedOvzEsx77g0qYmybQop%2FdX9zmeFN2YSW%2FzdrNW9Q4jaYRcVRaCJWdRFbsJHaw0NOBnkQLSioYC1y8n1CtyBrw7%2FnkN12pineoJ28XF2NItTcM7mZjgzPAcwpYidwwxkt0lPBZNNQAfHww3%2BQIuHUy5PLtKCgbZglHJbdvOnoVg0R%2Bxq9Y%2FHGkiCN17YVan2OlhCzue3fKmcs2lwbMaXKxecTGnibrwCeVzf8A%2F355vLTdfMVn4EBzmMLH16ssGOqUB2Wll0O5w3vEpA1QcsMIrAwKZLsH1R7ZgfRqFwMMdZsZubuDgv8nzj0680gR%2BQLQT%2Bwnr%2FIpa%2F8Lwo0W3h3jLluKaSq1Vq4pGVcB72CyWC2HlKAPGoYlPB2qpHhAd%2BkPNPAj1FlYdVBaTFZNAIN1zL4TC4SiPorpz%2B1%2FVZfHZRfj1Uij25110gDXD4SOogPByD%2B0k9IUwW8FnrdCiAr1G5vsNLDXR&X-Amz-Signature=b68445bc89b3da609ec786c059cb2cbb0893cfcf2d4c3df842c96769691aa2e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDSXSVQE%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2Be56yho3zffS2XEVpvLyun6mDOuhrAqEAyj8pl%2BatkAiEAg2p5nn3TNw4D5JDfFcMquA3Clas5VlHpW2t8Zw%2FsLiYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCnv4B96MsS11MbnMircA7mARtlY16qDzL4fL8y3K82MO4Np0p7iTZMRwMy0cZXNXeDC1bCMUayC4hiDTOYlbJNdQJ%2FlEhKn3lPGMmKz%2FkBNwGzyagfy%2F4fiOFY2GSoCu4CwgmCcJSQbPgT%2BWeEfk9ySbuTfeLEkuU%2FqQ7rbhyUUk%2BJ8CDKR1DS2C0P0CsbjPpXyC5HeQ9evH8J8dG654drEjQ7zUzRY%2FxWlNBrmLVTK0nuxwl%2FeF6rT2HpRQiTTVLUYYZoK9VFfiMntqE4ao3ElPN0f3yyonU3l3HdRmkEltyYn7M8P7MCE9FxOV2tzL6AjlIsk5XgSalEIBmms9us5VSvIaSXthjvU%2BHe7RNHP9aoHct5caGeYKOM26K%2F0ZXqYYydWtGVaNTiebNoRsIGNphLsuqI7qX0SBeeT4XsVUp6jMyUC5YeP4NTFH4j7fgiog0Hyjv8hVg%2FhWHlq5%2FpSPQlDvs3c4F1TqBS%2FzKJR7d%2F9nzcTS1KYswZLBtYRoXGRsugDrfkTnqdQnZLSABUjAZNb7VYe1ZjhzYO4fyO1FcVETr%2Fp5hZINrh6IGzG6XzrE%2BxS%2Ft%2BwrL0frRyN%2BKjX%2BVuOjnoBF551DPwiD5SM6WwKdTt%2BLjRiyEtHW12iw2k3EQ1m%2B3%2Fnnx8mMMT16ssGOqUB7bNxQZ2tPhgzaRNqABwBS%2FiB3z0NfGHVPbyAbVaj52x4Qu359tNogdtuZgZBluco3BVU03XOcZvgBKl6FNFN7Wshv9k9TyENvJC6ew5BKL5MXrfTVX93ghQ%2FuKbfaviP3IGzmRE4DyVutXx%2B775lImkI3gZfcA81ghykeh6%2BJDu6kXUDW9AhfOzyles6opFRSToWZZ9e0FhidsPhQX%2BAxPvXfkJz&X-Amz-Signature=a0a6da79b1894e89744f9ff4974434d20111827b8ccf5c1038eadc836c11432d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2D4YTYQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlsyXmzYrds81L6YQOo0wrzjkrP%2Fe80sAGUbEUHU%2FOgAiEA7ylEPRNB4WKX5p2l4MO5PkQraeoqW5mYXgULcP0AHA4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDI3fvthjZ2DLxBQdPircA3HJ%2BItfuqqzPORNhVAe9S8Z6OYx0cYN%2B9tPkBew3uOxlPOMUcJ%2FGO4xDSTD759bkn9%2FucbQCLaGAURmHHRtdaCYD47%2F9s%2FddR8HoSdhmvgHVs6mp4C5rMvyTjZ%2BbU%2F2QzAoLZebv9g9mCz%2FVY4tAPjVGvD2vy%2BstTGie4xgulF0iUEqhgX6sdmKduxCslivpsU2fqtYVNR23q3utEFlK7J4I2nmK%2FsIWkLB91a58KNuhBkxz3w5vtyX88nJmU2r6ezC4CV7FZdTzeRXcS9Y9v4lSmd0GQkPsarhltLmI3vK5FJfiyMpJ3fslbQPZqCX8inqhfpPOi1AqT0zIjMbHAgV2ufi2dxmfngS4WdT2tt5g2BWsi1Rv0lqJCIfGVzzm8GeAedOvzEsx77g0qYmybQop%2FdX9zmeFN2YSW%2FzdrNW9Q4jaYRcVRaCJWdRFbsJHaw0NOBnkQLSioYC1y8n1CtyBrw7%2FnkN12pineoJ28XF2NItTcM7mZjgzPAcwpYidwwxkt0lPBZNNQAfHww3%2BQIuHUy5PLtKCgbZglHJbdvOnoVg0R%2Bxq9Y%2FHGkiCN17YVan2OlhCzue3fKmcs2lwbMaXKxecTGnibrwCeVzf8A%2F355vLTdfMVn4EBzmMLH16ssGOqUB2Wll0O5w3vEpA1QcsMIrAwKZLsH1R7ZgfRqFwMMdZsZubuDgv8nzj0680gR%2BQLQT%2Bwnr%2FIpa%2F8Lwo0W3h3jLluKaSq1Vq4pGVcB72CyWC2HlKAPGoYlPB2qpHhAd%2BkPNPAj1FlYdVBaTFZNAIN1zL4TC4SiPorpz%2B1%2FVZfHZRfj1Uij25110gDXD4SOogPByD%2B0k9IUwW8FnrdCiAr1G5vsNLDXR&X-Amz-Signature=8359d9d46d7b5b4d4ae359186096accc223541ac2588713e03a4cf17edaf5856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2D4YTYQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlsyXmzYrds81L6YQOo0wrzjkrP%2Fe80sAGUbEUHU%2FOgAiEA7ylEPRNB4WKX5p2l4MO5PkQraeoqW5mYXgULcP0AHA4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDI3fvthjZ2DLxBQdPircA3HJ%2BItfuqqzPORNhVAe9S8Z6OYx0cYN%2B9tPkBew3uOxlPOMUcJ%2FGO4xDSTD759bkn9%2FucbQCLaGAURmHHRtdaCYD47%2F9s%2FddR8HoSdhmvgHVs6mp4C5rMvyTjZ%2BbU%2F2QzAoLZebv9g9mCz%2FVY4tAPjVGvD2vy%2BstTGie4xgulF0iUEqhgX6sdmKduxCslivpsU2fqtYVNR23q3utEFlK7J4I2nmK%2FsIWkLB91a58KNuhBkxz3w5vtyX88nJmU2r6ezC4CV7FZdTzeRXcS9Y9v4lSmd0GQkPsarhltLmI3vK5FJfiyMpJ3fslbQPZqCX8inqhfpPOi1AqT0zIjMbHAgV2ufi2dxmfngS4WdT2tt5g2BWsi1Rv0lqJCIfGVzzm8GeAedOvzEsx77g0qYmybQop%2FdX9zmeFN2YSW%2FzdrNW9Q4jaYRcVRaCJWdRFbsJHaw0NOBnkQLSioYC1y8n1CtyBrw7%2FnkN12pineoJ28XF2NItTcM7mZjgzPAcwpYidwwxkt0lPBZNNQAfHww3%2BQIuHUy5PLtKCgbZglHJbdvOnoVg0R%2Bxq9Y%2FHGkiCN17YVan2OlhCzue3fKmcs2lwbMaXKxecTGnibrwCeVzf8A%2F355vLTdfMVn4EBzmMLH16ssGOqUB2Wll0O5w3vEpA1QcsMIrAwKZLsH1R7ZgfRqFwMMdZsZubuDgv8nzj0680gR%2BQLQT%2Bwnr%2FIpa%2F8Lwo0W3h3jLluKaSq1Vq4pGVcB72CyWC2HlKAPGoYlPB2qpHhAd%2BkPNPAj1FlYdVBaTFZNAIN1zL4TC4SiPorpz%2B1%2FVZfHZRfj1Uij25110gDXD4SOogPByD%2B0k9IUwW8FnrdCiAr1G5vsNLDXR&X-Amz-Signature=cfc16eaa3b2720169e4d5a24a26dcb4a72745cfc8cd5e05e1d4388814c39de2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2D4YTYQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlsyXmzYrds81L6YQOo0wrzjkrP%2Fe80sAGUbEUHU%2FOgAiEA7ylEPRNB4WKX5p2l4MO5PkQraeoqW5mYXgULcP0AHA4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDI3fvthjZ2DLxBQdPircA3HJ%2BItfuqqzPORNhVAe9S8Z6OYx0cYN%2B9tPkBew3uOxlPOMUcJ%2FGO4xDSTD759bkn9%2FucbQCLaGAURmHHRtdaCYD47%2F9s%2FddR8HoSdhmvgHVs6mp4C5rMvyTjZ%2BbU%2F2QzAoLZebv9g9mCz%2FVY4tAPjVGvD2vy%2BstTGie4xgulF0iUEqhgX6sdmKduxCslivpsU2fqtYVNR23q3utEFlK7J4I2nmK%2FsIWkLB91a58KNuhBkxz3w5vtyX88nJmU2r6ezC4CV7FZdTzeRXcS9Y9v4lSmd0GQkPsarhltLmI3vK5FJfiyMpJ3fslbQPZqCX8inqhfpPOi1AqT0zIjMbHAgV2ufi2dxmfngS4WdT2tt5g2BWsi1Rv0lqJCIfGVzzm8GeAedOvzEsx77g0qYmybQop%2FdX9zmeFN2YSW%2FzdrNW9Q4jaYRcVRaCJWdRFbsJHaw0NOBnkQLSioYC1y8n1CtyBrw7%2FnkN12pineoJ28XF2NItTcM7mZjgzPAcwpYidwwxkt0lPBZNNQAfHww3%2BQIuHUy5PLtKCgbZglHJbdvOnoVg0R%2Bxq9Y%2FHGkiCN17YVan2OlhCzue3fKmcs2lwbMaXKxecTGnibrwCeVzf8A%2F355vLTdfMVn4EBzmMLH16ssGOqUB2Wll0O5w3vEpA1QcsMIrAwKZLsH1R7ZgfRqFwMMdZsZubuDgv8nzj0680gR%2BQLQT%2Bwnr%2FIpa%2F8Lwo0W3h3jLluKaSq1Vq4pGVcB72CyWC2HlKAPGoYlPB2qpHhAd%2BkPNPAj1FlYdVBaTFZNAIN1zL4TC4SiPorpz%2B1%2FVZfHZRfj1Uij25110gDXD4SOogPByD%2B0k9IUwW8FnrdCiAr1G5vsNLDXR&X-Amz-Signature=a07c810d4b3a610c3ee374c483dc794c8b025421c0b5abff3b816d7492d64f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2D4YTYQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlsyXmzYrds81L6YQOo0wrzjkrP%2Fe80sAGUbEUHU%2FOgAiEA7ylEPRNB4WKX5p2l4MO5PkQraeoqW5mYXgULcP0AHA4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDI3fvthjZ2DLxBQdPircA3HJ%2BItfuqqzPORNhVAe9S8Z6OYx0cYN%2B9tPkBew3uOxlPOMUcJ%2FGO4xDSTD759bkn9%2FucbQCLaGAURmHHRtdaCYD47%2F9s%2FddR8HoSdhmvgHVs6mp4C5rMvyTjZ%2BbU%2F2QzAoLZebv9g9mCz%2FVY4tAPjVGvD2vy%2BstTGie4xgulF0iUEqhgX6sdmKduxCslivpsU2fqtYVNR23q3utEFlK7J4I2nmK%2FsIWkLB91a58KNuhBkxz3w5vtyX88nJmU2r6ezC4CV7FZdTzeRXcS9Y9v4lSmd0GQkPsarhltLmI3vK5FJfiyMpJ3fslbQPZqCX8inqhfpPOi1AqT0zIjMbHAgV2ufi2dxmfngS4WdT2tt5g2BWsi1Rv0lqJCIfGVzzm8GeAedOvzEsx77g0qYmybQop%2FdX9zmeFN2YSW%2FzdrNW9Q4jaYRcVRaCJWdRFbsJHaw0NOBnkQLSioYC1y8n1CtyBrw7%2FnkN12pineoJ28XF2NItTcM7mZjgzPAcwpYidwwxkt0lPBZNNQAfHww3%2BQIuHUy5PLtKCgbZglHJbdvOnoVg0R%2Bxq9Y%2FHGkiCN17YVan2OlhCzue3fKmcs2lwbMaXKxecTGnibrwCeVzf8A%2F355vLTdfMVn4EBzmMLH16ssGOqUB2Wll0O5w3vEpA1QcsMIrAwKZLsH1R7ZgfRqFwMMdZsZubuDgv8nzj0680gR%2BQLQT%2Bwnr%2FIpa%2F8Lwo0W3h3jLluKaSq1Vq4pGVcB72CyWC2HlKAPGoYlPB2qpHhAd%2BkPNPAj1FlYdVBaTFZNAIN1zL4TC4SiPorpz%2B1%2FVZfHZRfj1Uij25110gDXD4SOogPByD%2B0k9IUwW8FnrdCiAr1G5vsNLDXR&X-Amz-Signature=c29eaeecf3f43031251949a2a69e4f1bf959e0905666401933df797c34d959ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2D4YTYQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlsyXmzYrds81L6YQOo0wrzjkrP%2Fe80sAGUbEUHU%2FOgAiEA7ylEPRNB4WKX5p2l4MO5PkQraeoqW5mYXgULcP0AHA4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDI3fvthjZ2DLxBQdPircA3HJ%2BItfuqqzPORNhVAe9S8Z6OYx0cYN%2B9tPkBew3uOxlPOMUcJ%2FGO4xDSTD759bkn9%2FucbQCLaGAURmHHRtdaCYD47%2F9s%2FddR8HoSdhmvgHVs6mp4C5rMvyTjZ%2BbU%2F2QzAoLZebv9g9mCz%2FVY4tAPjVGvD2vy%2BstTGie4xgulF0iUEqhgX6sdmKduxCslivpsU2fqtYVNR23q3utEFlK7J4I2nmK%2FsIWkLB91a58KNuhBkxz3w5vtyX88nJmU2r6ezC4CV7FZdTzeRXcS9Y9v4lSmd0GQkPsarhltLmI3vK5FJfiyMpJ3fslbQPZqCX8inqhfpPOi1AqT0zIjMbHAgV2ufi2dxmfngS4WdT2tt5g2BWsi1Rv0lqJCIfGVzzm8GeAedOvzEsx77g0qYmybQop%2FdX9zmeFN2YSW%2FzdrNW9Q4jaYRcVRaCJWdRFbsJHaw0NOBnkQLSioYC1y8n1CtyBrw7%2FnkN12pineoJ28XF2NItTcM7mZjgzPAcwpYidwwxkt0lPBZNNQAfHww3%2BQIuHUy5PLtKCgbZglHJbdvOnoVg0R%2Bxq9Y%2FHGkiCN17YVan2OlhCzue3fKmcs2lwbMaXKxecTGnibrwCeVzf8A%2F355vLTdfMVn4EBzmMLH16ssGOqUB2Wll0O5w3vEpA1QcsMIrAwKZLsH1R7ZgfRqFwMMdZsZubuDgv8nzj0680gR%2BQLQT%2Bwnr%2FIpa%2F8Lwo0W3h3jLluKaSq1Vq4pGVcB72CyWC2HlKAPGoYlPB2qpHhAd%2BkPNPAj1FlYdVBaTFZNAIN1zL4TC4SiPorpz%2B1%2FVZfHZRfj1Uij25110gDXD4SOogPByD%2B0k9IUwW8FnrdCiAr1G5vsNLDXR&X-Amz-Signature=f721792f46ffa3957475ed67778232e60fd56adb44058222559e40772c1d6383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2D4YTYQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlsyXmzYrds81L6YQOo0wrzjkrP%2Fe80sAGUbEUHU%2FOgAiEA7ylEPRNB4WKX5p2l4MO5PkQraeoqW5mYXgULcP0AHA4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDI3fvthjZ2DLxBQdPircA3HJ%2BItfuqqzPORNhVAe9S8Z6OYx0cYN%2B9tPkBew3uOxlPOMUcJ%2FGO4xDSTD759bkn9%2FucbQCLaGAURmHHRtdaCYD47%2F9s%2FddR8HoSdhmvgHVs6mp4C5rMvyTjZ%2BbU%2F2QzAoLZebv9g9mCz%2FVY4tAPjVGvD2vy%2BstTGie4xgulF0iUEqhgX6sdmKduxCslivpsU2fqtYVNR23q3utEFlK7J4I2nmK%2FsIWkLB91a58KNuhBkxz3w5vtyX88nJmU2r6ezC4CV7FZdTzeRXcS9Y9v4lSmd0GQkPsarhltLmI3vK5FJfiyMpJ3fslbQPZqCX8inqhfpPOi1AqT0zIjMbHAgV2ufi2dxmfngS4WdT2tt5g2BWsi1Rv0lqJCIfGVzzm8GeAedOvzEsx77g0qYmybQop%2FdX9zmeFN2YSW%2FzdrNW9Q4jaYRcVRaCJWdRFbsJHaw0NOBnkQLSioYC1y8n1CtyBrw7%2FnkN12pineoJ28XF2NItTcM7mZjgzPAcwpYidwwxkt0lPBZNNQAfHww3%2BQIuHUy5PLtKCgbZglHJbdvOnoVg0R%2Bxq9Y%2FHGkiCN17YVan2OlhCzue3fKmcs2lwbMaXKxecTGnibrwCeVzf8A%2F355vLTdfMVn4EBzmMLH16ssGOqUB2Wll0O5w3vEpA1QcsMIrAwKZLsH1R7ZgfRqFwMMdZsZubuDgv8nzj0680gR%2BQLQT%2Bwnr%2FIpa%2F8Lwo0W3h3jLluKaSq1Vq4pGVcB72CyWC2HlKAPGoYlPB2qpHhAd%2BkPNPAj1FlYdVBaTFZNAIN1zL4TC4SiPorpz%2B1%2FVZfHZRfj1Uij25110gDXD4SOogPByD%2B0k9IUwW8FnrdCiAr1G5vsNLDXR&X-Amz-Signature=3b5068964356d47bdc844f8d5cf30d4a22ae3a9080e4856c2422a38b4600c8a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


