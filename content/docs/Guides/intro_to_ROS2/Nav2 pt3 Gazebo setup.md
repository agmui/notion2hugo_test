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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDYO2TD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBIbMKoxxBi%2F9MECnwE1U0tKAUeg9ZGWpQlwhdhTb5uJAiEAh3%2FnkQA%2FguZqDqZDrO4yENNDDQOSVlvl%2FDeDNd69rv0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAHslkirWQcjFfICAyrcAz1IsdV%2BHkbdLlQwSc%2FS8sXqPpxSffnsx7PWCqi1%2Bw8wOW459F2DotKgx0abhWjCCt6%2Fgv31nfvIojixMkghszAVEjZvrynYgp8d4Tsm9yELYj5Ol8ZKhRptKVybdC46mqUw7qVK9mRjv26mhI6knlKyQevV400cN5vGzciWMIH1BkA8cvm0%2FYQjTpsCqaumOL6kge%2F8rTqJYrKahLDkQuLQNAyTQL%2BZWCd6%2Fts%2FRN32yl%2FVVD08kVDnK7O8L42rLSf335A07IDkumnXez2N7hhm3WAI5PIwAptQIfmAvBCgRqVvXyk8b7GU3MrKRCvl2R0AZWbBaIlgI9SY%2Fm%2FuNJ4elFQhBsRfwbOg%2BzUKbplE26yUS8OozUQCS8tb25MHo9TusH68lLUbVeJ0U6mix0fHanLatMVR6Hup4%2FuCwWXKei5ZJ90NA5inC7n5YDKWu%2FZrTIbRYnC%2BofJixzyD3h4kOtEH6SStmLWDadvR9k%2FiDuCVdo8wtpBKcHWfd8lezCigQcOX46qYVM3HdR1nSpFtMf9sqGwEgJ0ANrMX5Pptu5Yr1Xl2YEq5I5Q4MPej0Pnlj6vM5og%2FixpArFB8hs%2F1m%2B4ATnJdL%2Btc1vcwHbM3t9CDEOFSnbq%2BNjq1ML78%2BcQGOqUB3S1ILYfk%2BZDP9935yJM%2FjPzD%2BGNzyTmf5HxF6q9YevB2Ze4%2BqUVeLOcxu7H%2FwWnlLGCdZb%2BvD1bmXtbwlepoEOx6Lky1O%2Fmz7GO1x1uElIngdD288IU0n6ta5KiTMPeS2BUDxoJLpurTl8f312qtQoKVSNCliiIfFWIjbdo9HvFuktn3rNs7KvjEHZZU13Mzibo97JdHhbjHYtsH7u6zRuA2eDFs&X-Amz-Signature=2babf74e73f3b3ac22518e949d91fefaca6584f9b5951446471262326bf16dca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDYO2TD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBIbMKoxxBi%2F9MECnwE1U0tKAUeg9ZGWpQlwhdhTb5uJAiEAh3%2FnkQA%2FguZqDqZDrO4yENNDDQOSVlvl%2FDeDNd69rv0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAHslkirWQcjFfICAyrcAz1IsdV%2BHkbdLlQwSc%2FS8sXqPpxSffnsx7PWCqi1%2Bw8wOW459F2DotKgx0abhWjCCt6%2Fgv31nfvIojixMkghszAVEjZvrynYgp8d4Tsm9yELYj5Ol8ZKhRptKVybdC46mqUw7qVK9mRjv26mhI6knlKyQevV400cN5vGzciWMIH1BkA8cvm0%2FYQjTpsCqaumOL6kge%2F8rTqJYrKahLDkQuLQNAyTQL%2BZWCd6%2Fts%2FRN32yl%2FVVD08kVDnK7O8L42rLSf335A07IDkumnXez2N7hhm3WAI5PIwAptQIfmAvBCgRqVvXyk8b7GU3MrKRCvl2R0AZWbBaIlgI9SY%2Fm%2FuNJ4elFQhBsRfwbOg%2BzUKbplE26yUS8OozUQCS8tb25MHo9TusH68lLUbVeJ0U6mix0fHanLatMVR6Hup4%2FuCwWXKei5ZJ90NA5inC7n5YDKWu%2FZrTIbRYnC%2BofJixzyD3h4kOtEH6SStmLWDadvR9k%2FiDuCVdo8wtpBKcHWfd8lezCigQcOX46qYVM3HdR1nSpFtMf9sqGwEgJ0ANrMX5Pptu5Yr1Xl2YEq5I5Q4MPej0Pnlj6vM5og%2FixpArFB8hs%2F1m%2B4ATnJdL%2Btc1vcwHbM3t9CDEOFSnbq%2BNjq1ML78%2BcQGOqUB3S1ILYfk%2BZDP9935yJM%2FjPzD%2BGNzyTmf5HxF6q9YevB2Ze4%2BqUVeLOcxu7H%2FwWnlLGCdZb%2BvD1bmXtbwlepoEOx6Lky1O%2Fmz7GO1x1uElIngdD288IU0n6ta5KiTMPeS2BUDxoJLpurTl8f312qtQoKVSNCliiIfFWIjbdo9HvFuktn3rNs7KvjEHZZU13Mzibo97JdHhbjHYtsH7u6zRuA2eDFs&X-Amz-Signature=ab3a93420c49fb94afa101c212848aff11470d44ff9ac2bc985748be9398d1a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDYO2TD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBIbMKoxxBi%2F9MECnwE1U0tKAUeg9ZGWpQlwhdhTb5uJAiEAh3%2FnkQA%2FguZqDqZDrO4yENNDDQOSVlvl%2FDeDNd69rv0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAHslkirWQcjFfICAyrcAz1IsdV%2BHkbdLlQwSc%2FS8sXqPpxSffnsx7PWCqi1%2Bw8wOW459F2DotKgx0abhWjCCt6%2Fgv31nfvIojixMkghszAVEjZvrynYgp8d4Tsm9yELYj5Ol8ZKhRptKVybdC46mqUw7qVK9mRjv26mhI6knlKyQevV400cN5vGzciWMIH1BkA8cvm0%2FYQjTpsCqaumOL6kge%2F8rTqJYrKahLDkQuLQNAyTQL%2BZWCd6%2Fts%2FRN32yl%2FVVD08kVDnK7O8L42rLSf335A07IDkumnXez2N7hhm3WAI5PIwAptQIfmAvBCgRqVvXyk8b7GU3MrKRCvl2R0AZWbBaIlgI9SY%2Fm%2FuNJ4elFQhBsRfwbOg%2BzUKbplE26yUS8OozUQCS8tb25MHo9TusH68lLUbVeJ0U6mix0fHanLatMVR6Hup4%2FuCwWXKei5ZJ90NA5inC7n5YDKWu%2FZrTIbRYnC%2BofJixzyD3h4kOtEH6SStmLWDadvR9k%2FiDuCVdo8wtpBKcHWfd8lezCigQcOX46qYVM3HdR1nSpFtMf9sqGwEgJ0ANrMX5Pptu5Yr1Xl2YEq5I5Q4MPej0Pnlj6vM5og%2FixpArFB8hs%2F1m%2B4ATnJdL%2Btc1vcwHbM3t9CDEOFSnbq%2BNjq1ML78%2BcQGOqUB3S1ILYfk%2BZDP9935yJM%2FjPzD%2BGNzyTmf5HxF6q9YevB2Ze4%2BqUVeLOcxu7H%2FwWnlLGCdZb%2BvD1bmXtbwlepoEOx6Lky1O%2Fmz7GO1x1uElIngdD288IU0n6ta5KiTMPeS2BUDxoJLpurTl8f312qtQoKVSNCliiIfFWIjbdo9HvFuktn3rNs7KvjEHZZU13Mzibo97JdHhbjHYtsH7u6zRuA2eDFs&X-Amz-Signature=43a97f01df3660303f2e6a9f2d1a868b5179d0ce87d9f6175967c5f9ac501a8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDYO2TD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBIbMKoxxBi%2F9MECnwE1U0tKAUeg9ZGWpQlwhdhTb5uJAiEAh3%2FnkQA%2FguZqDqZDrO4yENNDDQOSVlvl%2FDeDNd69rv0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAHslkirWQcjFfICAyrcAz1IsdV%2BHkbdLlQwSc%2FS8sXqPpxSffnsx7PWCqi1%2Bw8wOW459F2DotKgx0abhWjCCt6%2Fgv31nfvIojixMkghszAVEjZvrynYgp8d4Tsm9yELYj5Ol8ZKhRptKVybdC46mqUw7qVK9mRjv26mhI6knlKyQevV400cN5vGzciWMIH1BkA8cvm0%2FYQjTpsCqaumOL6kge%2F8rTqJYrKahLDkQuLQNAyTQL%2BZWCd6%2Fts%2FRN32yl%2FVVD08kVDnK7O8L42rLSf335A07IDkumnXez2N7hhm3WAI5PIwAptQIfmAvBCgRqVvXyk8b7GU3MrKRCvl2R0AZWbBaIlgI9SY%2Fm%2FuNJ4elFQhBsRfwbOg%2BzUKbplE26yUS8OozUQCS8tb25MHo9TusH68lLUbVeJ0U6mix0fHanLatMVR6Hup4%2FuCwWXKei5ZJ90NA5inC7n5YDKWu%2FZrTIbRYnC%2BofJixzyD3h4kOtEH6SStmLWDadvR9k%2FiDuCVdo8wtpBKcHWfd8lezCigQcOX46qYVM3HdR1nSpFtMf9sqGwEgJ0ANrMX5Pptu5Yr1Xl2YEq5I5Q4MPej0Pnlj6vM5og%2FixpArFB8hs%2F1m%2B4ATnJdL%2Btc1vcwHbM3t9CDEOFSnbq%2BNjq1ML78%2BcQGOqUB3S1ILYfk%2BZDP9935yJM%2FjPzD%2BGNzyTmf5HxF6q9YevB2Ze4%2BqUVeLOcxu7H%2FwWnlLGCdZb%2BvD1bmXtbwlepoEOx6Lky1O%2Fmz7GO1x1uElIngdD288IU0n6ta5KiTMPeS2BUDxoJLpurTl8f312qtQoKVSNCliiIfFWIjbdo9HvFuktn3rNs7KvjEHZZU13Mzibo97JdHhbjHYtsH7u6zRuA2eDFs&X-Amz-Signature=dd81f85e94e3d84e086530cab7064618466b510cf2d099fa7d2d9efa4c27ce67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZECGLRL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIH3B6UUEBvYKkNsbcbucGGt6ucwfsvAO3FbM8ePWTeIOAiAyq8np3jOXV9cCGXBuSmgg5cRa84ha1ZdvAyA8vizVXCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMVsWBVf4HsEj2GNA0KtwDxxj929F2DTgohWE0db5xJ7iEI8HinsTqaM%2ByyB7dFow8igpHsy7%2Fgacv28Wa2SyWr7sBE%2FCtsdjRP7CtVVOUc4nLtPbzYYigt00Uz6umkEeHBBCMCVqAZ2xpxowieh%2FXMlxvOuT3JANmIoKuTjDNanMmYcIwMzKP3%2F5X%2BbOkURq9jjhY8oqrSV66hnAN6o9NfeAlMtWoVdKAU35BCeXSBX6VYckJuP1PSDNB8iWNFrezz9TaCRj9eAW4x2L%2B4X3vF%2BKnBdht%2FY%2FCUz%2BrSVL1UdWz4mvsl2tbYFrU4ibwyIuV5EzYRX1Zpj4cKqkmy30JUkI3tQhUgTX6%2FXP5QTQ%2FgqxzI4lFjx%2BlYQ1jK%2BEqQ2VQW9OA6agAxFRZG4%2FlWhITEEIIVLoEQQHhV3mtCIhZU%2F85rZbRXUrbGykySgcF0rOncBcE4lG2aflokpm6x1bzUvqexl2KOV1RkGPOrObBJQxO2xun4%2Fvq8nLRIAgzOavawJBYI6rV5T5DTNUAkImMdX2vnR7apTvxr17HskmkmsZNl%2FGPj9WbQa8reF4f89DHwcuz1yNbYaBGS6i%2F70bhDqvGKF%2BXu48K8hP5GNyS%2FfrazcRYj4eAunQwrbHB47WIwJj9GHR97ooKkaswnfz5xAY6pgH7cjVBZ%2BTtnbM1okqAvom%2B1ofwlLWzRmRuAGKMSMX7CAwExUXJAxBrwToRgWHAhd9OTOG8d9TVQuYm0B1X76DfCOm1WlS5t5ohn0Vrk7E8ZjkkkNAsEMdXziNaFevDug2b8b9S92mRsPF0G%2Bvqq8U9FusDILSH8T46A1mFKBNbYCmIcUrwa%2FY%2FHUenDcpieICD2tIs9v0Gx7UWbTb1%2B5LUouWXza6D&X-Amz-Signature=dc7c91dc262ec1dcab7126f5c29bed324983088c8635cdaa5b821e9c868f9e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDYO2TD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBIbMKoxxBi%2F9MECnwE1U0tKAUeg9ZGWpQlwhdhTb5uJAiEAh3%2FnkQA%2FguZqDqZDrO4yENNDDQOSVlvl%2FDeDNd69rv0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAHslkirWQcjFfICAyrcAz1IsdV%2BHkbdLlQwSc%2FS8sXqPpxSffnsx7PWCqi1%2Bw8wOW459F2DotKgx0abhWjCCt6%2Fgv31nfvIojixMkghszAVEjZvrynYgp8d4Tsm9yELYj5Ol8ZKhRptKVybdC46mqUw7qVK9mRjv26mhI6knlKyQevV400cN5vGzciWMIH1BkA8cvm0%2FYQjTpsCqaumOL6kge%2F8rTqJYrKahLDkQuLQNAyTQL%2BZWCd6%2Fts%2FRN32yl%2FVVD08kVDnK7O8L42rLSf335A07IDkumnXez2N7hhm3WAI5PIwAptQIfmAvBCgRqVvXyk8b7GU3MrKRCvl2R0AZWbBaIlgI9SY%2Fm%2FuNJ4elFQhBsRfwbOg%2BzUKbplE26yUS8OozUQCS8tb25MHo9TusH68lLUbVeJ0U6mix0fHanLatMVR6Hup4%2FuCwWXKei5ZJ90NA5inC7n5YDKWu%2FZrTIbRYnC%2BofJixzyD3h4kOtEH6SStmLWDadvR9k%2FiDuCVdo8wtpBKcHWfd8lezCigQcOX46qYVM3HdR1nSpFtMf9sqGwEgJ0ANrMX5Pptu5Yr1Xl2YEq5I5Q4MPej0Pnlj6vM5og%2FixpArFB8hs%2F1m%2B4ATnJdL%2Btc1vcwHbM3t9CDEOFSnbq%2BNjq1ML78%2BcQGOqUB3S1ILYfk%2BZDP9935yJM%2FjPzD%2BGNzyTmf5HxF6q9YevB2Ze4%2BqUVeLOcxu7H%2FwWnlLGCdZb%2BvD1bmXtbwlepoEOx6Lky1O%2Fmz7GO1x1uElIngdD288IU0n6ta5KiTMPeS2BUDxoJLpurTl8f312qtQoKVSNCliiIfFWIjbdo9HvFuktn3rNs7KvjEHZZU13Mzibo97JdHhbjHYtsH7u6zRuA2eDFs&X-Amz-Signature=2f4a21d58dc7bf791699ce3a8c623725ca7f24ba2f2d9a60a609d6af339e8847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDYO2TD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBIbMKoxxBi%2F9MECnwE1U0tKAUeg9ZGWpQlwhdhTb5uJAiEAh3%2FnkQA%2FguZqDqZDrO4yENNDDQOSVlvl%2FDeDNd69rv0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAHslkirWQcjFfICAyrcAz1IsdV%2BHkbdLlQwSc%2FS8sXqPpxSffnsx7PWCqi1%2Bw8wOW459F2DotKgx0abhWjCCt6%2Fgv31nfvIojixMkghszAVEjZvrynYgp8d4Tsm9yELYj5Ol8ZKhRptKVybdC46mqUw7qVK9mRjv26mhI6knlKyQevV400cN5vGzciWMIH1BkA8cvm0%2FYQjTpsCqaumOL6kge%2F8rTqJYrKahLDkQuLQNAyTQL%2BZWCd6%2Fts%2FRN32yl%2FVVD08kVDnK7O8L42rLSf335A07IDkumnXez2N7hhm3WAI5PIwAptQIfmAvBCgRqVvXyk8b7GU3MrKRCvl2R0AZWbBaIlgI9SY%2Fm%2FuNJ4elFQhBsRfwbOg%2BzUKbplE26yUS8OozUQCS8tb25MHo9TusH68lLUbVeJ0U6mix0fHanLatMVR6Hup4%2FuCwWXKei5ZJ90NA5inC7n5YDKWu%2FZrTIbRYnC%2BofJixzyD3h4kOtEH6SStmLWDadvR9k%2FiDuCVdo8wtpBKcHWfd8lezCigQcOX46qYVM3HdR1nSpFtMf9sqGwEgJ0ANrMX5Pptu5Yr1Xl2YEq5I5Q4MPej0Pnlj6vM5og%2FixpArFB8hs%2F1m%2B4ATnJdL%2Btc1vcwHbM3t9CDEOFSnbq%2BNjq1ML78%2BcQGOqUB3S1ILYfk%2BZDP9935yJM%2FjPzD%2BGNzyTmf5HxF6q9YevB2Ze4%2BqUVeLOcxu7H%2FwWnlLGCdZb%2BvD1bmXtbwlepoEOx6Lky1O%2Fmz7GO1x1uElIngdD288IU0n6ta5KiTMPeS2BUDxoJLpurTl8f312qtQoKVSNCliiIfFWIjbdo9HvFuktn3rNs7KvjEHZZU13Mzibo97JdHhbjHYtsH7u6zRuA2eDFs&X-Amz-Signature=ecce7f5b96cb689ff6750b2b7ad2ba5d84eba59ac8e1787208b1846d3f476dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDYO2TD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBIbMKoxxBi%2F9MECnwE1U0tKAUeg9ZGWpQlwhdhTb5uJAiEAh3%2FnkQA%2FguZqDqZDrO4yENNDDQOSVlvl%2FDeDNd69rv0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAHslkirWQcjFfICAyrcAz1IsdV%2BHkbdLlQwSc%2FS8sXqPpxSffnsx7PWCqi1%2Bw8wOW459F2DotKgx0abhWjCCt6%2Fgv31nfvIojixMkghszAVEjZvrynYgp8d4Tsm9yELYj5Ol8ZKhRptKVybdC46mqUw7qVK9mRjv26mhI6knlKyQevV400cN5vGzciWMIH1BkA8cvm0%2FYQjTpsCqaumOL6kge%2F8rTqJYrKahLDkQuLQNAyTQL%2BZWCd6%2Fts%2FRN32yl%2FVVD08kVDnK7O8L42rLSf335A07IDkumnXez2N7hhm3WAI5PIwAptQIfmAvBCgRqVvXyk8b7GU3MrKRCvl2R0AZWbBaIlgI9SY%2Fm%2FuNJ4elFQhBsRfwbOg%2BzUKbplE26yUS8OozUQCS8tb25MHo9TusH68lLUbVeJ0U6mix0fHanLatMVR6Hup4%2FuCwWXKei5ZJ90NA5inC7n5YDKWu%2FZrTIbRYnC%2BofJixzyD3h4kOtEH6SStmLWDadvR9k%2FiDuCVdo8wtpBKcHWfd8lezCigQcOX46qYVM3HdR1nSpFtMf9sqGwEgJ0ANrMX5Pptu5Yr1Xl2YEq5I5Q4MPej0Pnlj6vM5og%2FixpArFB8hs%2F1m%2B4ATnJdL%2Btc1vcwHbM3t9CDEOFSnbq%2BNjq1ML78%2BcQGOqUB3S1ILYfk%2BZDP9935yJM%2FjPzD%2BGNzyTmf5HxF6q9YevB2Ze4%2BqUVeLOcxu7H%2FwWnlLGCdZb%2BvD1bmXtbwlepoEOx6Lky1O%2Fmz7GO1x1uElIngdD288IU0n6ta5KiTMPeS2BUDxoJLpurTl8f312qtQoKVSNCliiIfFWIjbdo9HvFuktn3rNs7KvjEHZZU13Mzibo97JdHhbjHYtsH7u6zRuA2eDFs&X-Amz-Signature=3e71ad97fc6e13e7504fb0ceca772673bc5111b40b6165f935915359862b49d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDYO2TD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBIbMKoxxBi%2F9MECnwE1U0tKAUeg9ZGWpQlwhdhTb5uJAiEAh3%2FnkQA%2FguZqDqZDrO4yENNDDQOSVlvl%2FDeDNd69rv0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAHslkirWQcjFfICAyrcAz1IsdV%2BHkbdLlQwSc%2FS8sXqPpxSffnsx7PWCqi1%2Bw8wOW459F2DotKgx0abhWjCCt6%2Fgv31nfvIojixMkghszAVEjZvrynYgp8d4Tsm9yELYj5Ol8ZKhRptKVybdC46mqUw7qVK9mRjv26mhI6knlKyQevV400cN5vGzciWMIH1BkA8cvm0%2FYQjTpsCqaumOL6kge%2F8rTqJYrKahLDkQuLQNAyTQL%2BZWCd6%2Fts%2FRN32yl%2FVVD08kVDnK7O8L42rLSf335A07IDkumnXez2N7hhm3WAI5PIwAptQIfmAvBCgRqVvXyk8b7GU3MrKRCvl2R0AZWbBaIlgI9SY%2Fm%2FuNJ4elFQhBsRfwbOg%2BzUKbplE26yUS8OozUQCS8tb25MHo9TusH68lLUbVeJ0U6mix0fHanLatMVR6Hup4%2FuCwWXKei5ZJ90NA5inC7n5YDKWu%2FZrTIbRYnC%2BofJixzyD3h4kOtEH6SStmLWDadvR9k%2FiDuCVdo8wtpBKcHWfd8lezCigQcOX46qYVM3HdR1nSpFtMf9sqGwEgJ0ANrMX5Pptu5Yr1Xl2YEq5I5Q4MPej0Pnlj6vM5og%2FixpArFB8hs%2F1m%2B4ATnJdL%2Btc1vcwHbM3t9CDEOFSnbq%2BNjq1ML78%2BcQGOqUB3S1ILYfk%2BZDP9935yJM%2FjPzD%2BGNzyTmf5HxF6q9YevB2Ze4%2BqUVeLOcxu7H%2FwWnlLGCdZb%2BvD1bmXtbwlepoEOx6Lky1O%2Fmz7GO1x1uElIngdD288IU0n6ta5KiTMPeS2BUDxoJLpurTl8f312qtQoKVSNCliiIfFWIjbdo9HvFuktn3rNs7KvjEHZZU13Mzibo97JdHhbjHYtsH7u6zRuA2eDFs&X-Amz-Signature=e40e92e84a3254f75874eae3daef1774a2dabe77ce254f3caa6ec967318ee6b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDYO2TD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBIbMKoxxBi%2F9MECnwE1U0tKAUeg9ZGWpQlwhdhTb5uJAiEAh3%2FnkQA%2FguZqDqZDrO4yENNDDQOSVlvl%2FDeDNd69rv0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAHslkirWQcjFfICAyrcAz1IsdV%2BHkbdLlQwSc%2FS8sXqPpxSffnsx7PWCqi1%2Bw8wOW459F2DotKgx0abhWjCCt6%2Fgv31nfvIojixMkghszAVEjZvrynYgp8d4Tsm9yELYj5Ol8ZKhRptKVybdC46mqUw7qVK9mRjv26mhI6knlKyQevV400cN5vGzciWMIH1BkA8cvm0%2FYQjTpsCqaumOL6kge%2F8rTqJYrKahLDkQuLQNAyTQL%2BZWCd6%2Fts%2FRN32yl%2FVVD08kVDnK7O8L42rLSf335A07IDkumnXez2N7hhm3WAI5PIwAptQIfmAvBCgRqVvXyk8b7GU3MrKRCvl2R0AZWbBaIlgI9SY%2Fm%2FuNJ4elFQhBsRfwbOg%2BzUKbplE26yUS8OozUQCS8tb25MHo9TusH68lLUbVeJ0U6mix0fHanLatMVR6Hup4%2FuCwWXKei5ZJ90NA5inC7n5YDKWu%2FZrTIbRYnC%2BofJixzyD3h4kOtEH6SStmLWDadvR9k%2FiDuCVdo8wtpBKcHWfd8lezCigQcOX46qYVM3HdR1nSpFtMf9sqGwEgJ0ANrMX5Pptu5Yr1Xl2YEq5I5Q4MPej0Pnlj6vM5og%2FixpArFB8hs%2F1m%2B4ATnJdL%2Btc1vcwHbM3t9CDEOFSnbq%2BNjq1ML78%2BcQGOqUB3S1ILYfk%2BZDP9935yJM%2FjPzD%2BGNzyTmf5HxF6q9YevB2Ze4%2BqUVeLOcxu7H%2FwWnlLGCdZb%2BvD1bmXtbwlepoEOx6Lky1O%2Fmz7GO1x1uElIngdD288IU0n6ta5KiTMPeS2BUDxoJLpurTl8f312qtQoKVSNCliiIfFWIjbdo9HvFuktn3rNs7KvjEHZZU13Mzibo97JdHhbjHYtsH7u6zRuA2eDFs&X-Amz-Signature=5b05cec4d4680a93d33d0cf7490502549bd72f36637bc6bf6f44cf5c11bae1d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDYO2TD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBIbMKoxxBi%2F9MECnwE1U0tKAUeg9ZGWpQlwhdhTb5uJAiEAh3%2FnkQA%2FguZqDqZDrO4yENNDDQOSVlvl%2FDeDNd69rv0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAHslkirWQcjFfICAyrcAz1IsdV%2BHkbdLlQwSc%2FS8sXqPpxSffnsx7PWCqi1%2Bw8wOW459F2DotKgx0abhWjCCt6%2Fgv31nfvIojixMkghszAVEjZvrynYgp8d4Tsm9yELYj5Ol8ZKhRptKVybdC46mqUw7qVK9mRjv26mhI6knlKyQevV400cN5vGzciWMIH1BkA8cvm0%2FYQjTpsCqaumOL6kge%2F8rTqJYrKahLDkQuLQNAyTQL%2BZWCd6%2Fts%2FRN32yl%2FVVD08kVDnK7O8L42rLSf335A07IDkumnXez2N7hhm3WAI5PIwAptQIfmAvBCgRqVvXyk8b7GU3MrKRCvl2R0AZWbBaIlgI9SY%2Fm%2FuNJ4elFQhBsRfwbOg%2BzUKbplE26yUS8OozUQCS8tb25MHo9TusH68lLUbVeJ0U6mix0fHanLatMVR6Hup4%2FuCwWXKei5ZJ90NA5inC7n5YDKWu%2FZrTIbRYnC%2BofJixzyD3h4kOtEH6SStmLWDadvR9k%2FiDuCVdo8wtpBKcHWfd8lezCigQcOX46qYVM3HdR1nSpFtMf9sqGwEgJ0ANrMX5Pptu5Yr1Xl2YEq5I5Q4MPej0Pnlj6vM5og%2FixpArFB8hs%2F1m%2B4ATnJdL%2Btc1vcwHbM3t9CDEOFSnbq%2BNjq1ML78%2BcQGOqUB3S1ILYfk%2BZDP9935yJM%2FjPzD%2BGNzyTmf5HxF6q9YevB2Ze4%2BqUVeLOcxu7H%2FwWnlLGCdZb%2BvD1bmXtbwlepoEOx6Lky1O%2Fmz7GO1x1uElIngdD288IU0n6ta5KiTMPeS2BUDxoJLpurTl8f312qtQoKVSNCliiIfFWIjbdo9HvFuktn3rNs7KvjEHZZU13Mzibo97JdHhbjHYtsH7u6zRuA2eDFs&X-Amz-Signature=00e9f95a86f673497bfb2eb9b5fc10d0e199ecc2de0befc8d3dad33399574145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
