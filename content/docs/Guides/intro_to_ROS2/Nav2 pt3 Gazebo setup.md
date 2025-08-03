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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZ5WHCK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93x7cv4nQa6kYXd9gQlr4fpZ6VVDxRRFhV0%2FFyVJmkwIhAL9%2BlIVl2yATnA4n9D0cnrGNtxlwRQJElCqNbc5dy3AyKv8DCDQQABoMNjM3NDIzMTgzODA1IgxhJZEfp%2BakEFaIEGsq3AMgxnAnC5D2m35G4oglK37ftKKctmTeGV46i2paUS4%2F1gu9%2BHBzAogOzCI5BgapQJeoLAh8Kgc5eVW3IGs6n1shZo4kkBGwhRpPSV8Tn6PdVXLXJxFY66BBA03KyPprVnocHq0JWf7PIXZh0me%2FfJsx7vYx5HCR%2F09Z73ZRQclGB2qzhFzg%2BiTdnidwJbPgV%2B9DXMQpnRabQQQ%2FVAOj%2FUQCZtDy7if2bFT5wC2FNqvQBKRAo4qhp8KzCMj%2F0M5xllc8oUDHyfBgnWmFLfJQ1nb4F0kL4ntpuWCtJVYBcYpC1%2BfFjqyJmHgOg7XqKtYI%2BUCw2a3jxNPAJjYrcb8Kn%2F0sduZV9zrtOZLbDOT%2FrDMV0ibaPUHyROH9zqOjLlsR5Yy8w7dh%2F%2FGZyA%2BGba5C%2FqkATFlOei%2BZMGoEAYz7UVFQT6mA4rVVlQUw7lNzhzitx00dTdMl28bCl%2B28gIiKbvPec4pVp1gI%2BFwXajKuZhO2xJD0nf3UkfCyg%2Bvh%2BMj7CZxImR%2FxMibpVY3vJ5YyJ87akHA0RAPA2I4aHmYOnfUmJesraEekLYEMUcIinNDRWnHvRhQbYTu%2BA6Q6pxJ0E2iM4F2B7T3ugHlfFb1I12YQzn7ilKUZM5yPuyVMdTCQ2b7EBjqkAfedYRs2lm9MD9Et8NPEpscPJKG8lx6tYqoB6zjdOlHpFwiC7MvxPGgGg3yWut3YbnOQ%2Fi%2BnTu5hksN29R7McrDGjP%2FejxQ26en6J%2FeR64qmjOiPbLk0sw7gc%2FMO8KIs00KqECKv8uuY%2BG5Ao7z6NW%2FjRJ1DFgQBF%2BpQ%2ByjO%2B4TGXvjQ0YYDLO5liIVXPenqivdrAUHSCK%2F6gu8iBjBMfmmlCJry&X-Amz-Signature=bce43caa30849c2e6814f5901e38dfebf58fbbc09bb40de232da1a1cb088eefb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZ5WHCK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93x7cv4nQa6kYXd9gQlr4fpZ6VVDxRRFhV0%2FFyVJmkwIhAL9%2BlIVl2yATnA4n9D0cnrGNtxlwRQJElCqNbc5dy3AyKv8DCDQQABoMNjM3NDIzMTgzODA1IgxhJZEfp%2BakEFaIEGsq3AMgxnAnC5D2m35G4oglK37ftKKctmTeGV46i2paUS4%2F1gu9%2BHBzAogOzCI5BgapQJeoLAh8Kgc5eVW3IGs6n1shZo4kkBGwhRpPSV8Tn6PdVXLXJxFY66BBA03KyPprVnocHq0JWf7PIXZh0me%2FfJsx7vYx5HCR%2F09Z73ZRQclGB2qzhFzg%2BiTdnidwJbPgV%2B9DXMQpnRabQQQ%2FVAOj%2FUQCZtDy7if2bFT5wC2FNqvQBKRAo4qhp8KzCMj%2F0M5xllc8oUDHyfBgnWmFLfJQ1nb4F0kL4ntpuWCtJVYBcYpC1%2BfFjqyJmHgOg7XqKtYI%2BUCw2a3jxNPAJjYrcb8Kn%2F0sduZV9zrtOZLbDOT%2FrDMV0ibaPUHyROH9zqOjLlsR5Yy8w7dh%2F%2FGZyA%2BGba5C%2FqkATFlOei%2BZMGoEAYz7UVFQT6mA4rVVlQUw7lNzhzitx00dTdMl28bCl%2B28gIiKbvPec4pVp1gI%2BFwXajKuZhO2xJD0nf3UkfCyg%2Bvh%2BMj7CZxImR%2FxMibpVY3vJ5YyJ87akHA0RAPA2I4aHmYOnfUmJesraEekLYEMUcIinNDRWnHvRhQbYTu%2BA6Q6pxJ0E2iM4F2B7T3ugHlfFb1I12YQzn7ilKUZM5yPuyVMdTCQ2b7EBjqkAfedYRs2lm9MD9Et8NPEpscPJKG8lx6tYqoB6zjdOlHpFwiC7MvxPGgGg3yWut3YbnOQ%2Fi%2BnTu5hksN29R7McrDGjP%2FejxQ26en6J%2FeR64qmjOiPbLk0sw7gc%2FMO8KIs00KqECKv8uuY%2BG5Ao7z6NW%2FjRJ1DFgQBF%2BpQ%2ByjO%2B4TGXvjQ0YYDLO5liIVXPenqivdrAUHSCK%2F6gu8iBjBMfmmlCJry&X-Amz-Signature=384de47154405203a0342a75a751e9a14b359014fc94fa3280a11f23f030d24e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZ5WHCK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93x7cv4nQa6kYXd9gQlr4fpZ6VVDxRRFhV0%2FFyVJmkwIhAL9%2BlIVl2yATnA4n9D0cnrGNtxlwRQJElCqNbc5dy3AyKv8DCDQQABoMNjM3NDIzMTgzODA1IgxhJZEfp%2BakEFaIEGsq3AMgxnAnC5D2m35G4oglK37ftKKctmTeGV46i2paUS4%2F1gu9%2BHBzAogOzCI5BgapQJeoLAh8Kgc5eVW3IGs6n1shZo4kkBGwhRpPSV8Tn6PdVXLXJxFY66BBA03KyPprVnocHq0JWf7PIXZh0me%2FfJsx7vYx5HCR%2F09Z73ZRQclGB2qzhFzg%2BiTdnidwJbPgV%2B9DXMQpnRabQQQ%2FVAOj%2FUQCZtDy7if2bFT5wC2FNqvQBKRAo4qhp8KzCMj%2F0M5xllc8oUDHyfBgnWmFLfJQ1nb4F0kL4ntpuWCtJVYBcYpC1%2BfFjqyJmHgOg7XqKtYI%2BUCw2a3jxNPAJjYrcb8Kn%2F0sduZV9zrtOZLbDOT%2FrDMV0ibaPUHyROH9zqOjLlsR5Yy8w7dh%2F%2FGZyA%2BGba5C%2FqkATFlOei%2BZMGoEAYz7UVFQT6mA4rVVlQUw7lNzhzitx00dTdMl28bCl%2B28gIiKbvPec4pVp1gI%2BFwXajKuZhO2xJD0nf3UkfCyg%2Bvh%2BMj7CZxImR%2FxMibpVY3vJ5YyJ87akHA0RAPA2I4aHmYOnfUmJesraEekLYEMUcIinNDRWnHvRhQbYTu%2BA6Q6pxJ0E2iM4F2B7T3ugHlfFb1I12YQzn7ilKUZM5yPuyVMdTCQ2b7EBjqkAfedYRs2lm9MD9Et8NPEpscPJKG8lx6tYqoB6zjdOlHpFwiC7MvxPGgGg3yWut3YbnOQ%2Fi%2BnTu5hksN29R7McrDGjP%2FejxQ26en6J%2FeR64qmjOiPbLk0sw7gc%2FMO8KIs00KqECKv8uuY%2BG5Ao7z6NW%2FjRJ1DFgQBF%2BpQ%2ByjO%2B4TGXvjQ0YYDLO5liIVXPenqivdrAUHSCK%2F6gu8iBjBMfmmlCJry&X-Amz-Signature=8e42f5879a8c44d0700fa98b64224afe537b5f85e1261189ff6c3da72e42d3fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZ5WHCK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93x7cv4nQa6kYXd9gQlr4fpZ6VVDxRRFhV0%2FFyVJmkwIhAL9%2BlIVl2yATnA4n9D0cnrGNtxlwRQJElCqNbc5dy3AyKv8DCDQQABoMNjM3NDIzMTgzODA1IgxhJZEfp%2BakEFaIEGsq3AMgxnAnC5D2m35G4oglK37ftKKctmTeGV46i2paUS4%2F1gu9%2BHBzAogOzCI5BgapQJeoLAh8Kgc5eVW3IGs6n1shZo4kkBGwhRpPSV8Tn6PdVXLXJxFY66BBA03KyPprVnocHq0JWf7PIXZh0me%2FfJsx7vYx5HCR%2F09Z73ZRQclGB2qzhFzg%2BiTdnidwJbPgV%2B9DXMQpnRabQQQ%2FVAOj%2FUQCZtDy7if2bFT5wC2FNqvQBKRAo4qhp8KzCMj%2F0M5xllc8oUDHyfBgnWmFLfJQ1nb4F0kL4ntpuWCtJVYBcYpC1%2BfFjqyJmHgOg7XqKtYI%2BUCw2a3jxNPAJjYrcb8Kn%2F0sduZV9zrtOZLbDOT%2FrDMV0ibaPUHyROH9zqOjLlsR5Yy8w7dh%2F%2FGZyA%2BGba5C%2FqkATFlOei%2BZMGoEAYz7UVFQT6mA4rVVlQUw7lNzhzitx00dTdMl28bCl%2B28gIiKbvPec4pVp1gI%2BFwXajKuZhO2xJD0nf3UkfCyg%2Bvh%2BMj7CZxImR%2FxMibpVY3vJ5YyJ87akHA0RAPA2I4aHmYOnfUmJesraEekLYEMUcIinNDRWnHvRhQbYTu%2BA6Q6pxJ0E2iM4F2B7T3ugHlfFb1I12YQzn7ilKUZM5yPuyVMdTCQ2b7EBjqkAfedYRs2lm9MD9Et8NPEpscPJKG8lx6tYqoB6zjdOlHpFwiC7MvxPGgGg3yWut3YbnOQ%2Fi%2BnTu5hksN29R7McrDGjP%2FejxQ26en6J%2FeR64qmjOiPbLk0sw7gc%2FMO8KIs00KqECKv8uuY%2BG5Ao7z6NW%2FjRJ1DFgQBF%2BpQ%2ByjO%2B4TGXvjQ0YYDLO5liIVXPenqivdrAUHSCK%2F6gu8iBjBMfmmlCJry&X-Amz-Signature=8c4488c41b67da9d945458fcbc7bea2c99159b172058797ff9174a00bb0765a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HJYK5WZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5h2yyKvN5UvQ3%2FpmMlLGVv7whIo0MlAHtlMD3NY%2FBoAIgaHNb2B8XkXPBW7fY0Jycwkn2TbETptjkD%2FdAW7wYddAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNOWRdEorE%2B%2Ffr8vNCrcA%2BH7UeFE5%2F1xEw0aUxVKjfvexUPop3Lv%2BR30zO6cWpNSt963TJs5JhpqZkrVi%2BEbw074CRMNYxLyG9u0rGQ4rj7LHyE7%2BDYf5xvZZvprZMsSfxJSORMVg3fPFHbs7KRE1wMMHtME3ENyYZqPdohn10RCSCZtLR1csHUiJ0HuST6a%2FYQOq9lS9B4EqyyCSXHg7%2F9jCGrdXylKs%2BPdJOXST5Z%2BUd%2F3mxc%2B%2Fl9j%2Fr8lkKWnpBOwRoWm%2F%2FIeJkqyj9b3QCiQ2xhpGHcM0uCCasOhPpserde9oALMRer%2BtSHLepEAbqQ%2FyaE3Pkr2n5aKi1ZBBBElxSx3sRvfoL%2F%2B7aZmMrgb0moS8Z9EZp9%2BBw%2B%2FtlJDG%2FS55xREm3kWjhenSFDc8V9q4QxjoTDBUf%2F5Ho%2Fs73tob%2Bh%2B0X%2FoWajnhlidrdvn20L9aJuVDpN9Xlu2qB1kXfExWMk3vU5v4KUSfeplcBFi7lHzZKcG0i7n5WdwCquzo6ea4NjKaQtTPx8DJcTZVIRrnJoksYhS56ZQSKg9mQUXEWk1hLdyBXGCiDw00xl9t%2Fnr%2FImqtvJaqvhvvjcLsGKL3UXemfQC6blirRRHS%2FTwX0TH5du20v%2FdE1P2cUag0H5Jk%2BxyEfTUpqikMK%2FZvsQGOqUBU%2BvTgkHVHIwweM0pDQCF5CsQy9Eeubiz%2FvFDr%2F4so%2F%2BDX2zODvC1CW0SggmTanuaN%2F%2FIO9GOWqcQuxK7WsYEwoxtxvo3Jg4zRd3LXTCOEwj3EcBCBW7COFd%2FfJuV26KTpBhfbTd2xRQ0uz9xoeb6duFowrPP73A9N7JuyoyXeXn7%2FN4SzpK%2BOVwr1PaslmovSl9nUzRCPp%2BnNlRovQGi63AgHpkl&X-Amz-Signature=40573392eaafbcaa3939d5ff78e0d10e4c64bc3a30621cb8afcefa384255fabb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZ5WHCK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93x7cv4nQa6kYXd9gQlr4fpZ6VVDxRRFhV0%2FFyVJmkwIhAL9%2BlIVl2yATnA4n9D0cnrGNtxlwRQJElCqNbc5dy3AyKv8DCDQQABoMNjM3NDIzMTgzODA1IgxhJZEfp%2BakEFaIEGsq3AMgxnAnC5D2m35G4oglK37ftKKctmTeGV46i2paUS4%2F1gu9%2BHBzAogOzCI5BgapQJeoLAh8Kgc5eVW3IGs6n1shZo4kkBGwhRpPSV8Tn6PdVXLXJxFY66BBA03KyPprVnocHq0JWf7PIXZh0me%2FfJsx7vYx5HCR%2F09Z73ZRQclGB2qzhFzg%2BiTdnidwJbPgV%2B9DXMQpnRabQQQ%2FVAOj%2FUQCZtDy7if2bFT5wC2FNqvQBKRAo4qhp8KzCMj%2F0M5xllc8oUDHyfBgnWmFLfJQ1nb4F0kL4ntpuWCtJVYBcYpC1%2BfFjqyJmHgOg7XqKtYI%2BUCw2a3jxNPAJjYrcb8Kn%2F0sduZV9zrtOZLbDOT%2FrDMV0ibaPUHyROH9zqOjLlsR5Yy8w7dh%2F%2FGZyA%2BGba5C%2FqkATFlOei%2BZMGoEAYz7UVFQT6mA4rVVlQUw7lNzhzitx00dTdMl28bCl%2B28gIiKbvPec4pVp1gI%2BFwXajKuZhO2xJD0nf3UkfCyg%2Bvh%2BMj7CZxImR%2FxMibpVY3vJ5YyJ87akHA0RAPA2I4aHmYOnfUmJesraEekLYEMUcIinNDRWnHvRhQbYTu%2BA6Q6pxJ0E2iM4F2B7T3ugHlfFb1I12YQzn7ilKUZM5yPuyVMdTCQ2b7EBjqkAfedYRs2lm9MD9Et8NPEpscPJKG8lx6tYqoB6zjdOlHpFwiC7MvxPGgGg3yWut3YbnOQ%2Fi%2BnTu5hksN29R7McrDGjP%2FejxQ26en6J%2FeR64qmjOiPbLk0sw7gc%2FMO8KIs00KqECKv8uuY%2BG5Ao7z6NW%2FjRJ1DFgQBF%2BpQ%2ByjO%2B4TGXvjQ0YYDLO5liIVXPenqivdrAUHSCK%2F6gu8iBjBMfmmlCJry&X-Amz-Signature=1541f1fb0d75a5a6ccd5d694a309ecd628c4483993c234e7a32cb509f6b8fd54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZ5WHCK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93x7cv4nQa6kYXd9gQlr4fpZ6VVDxRRFhV0%2FFyVJmkwIhAL9%2BlIVl2yATnA4n9D0cnrGNtxlwRQJElCqNbc5dy3AyKv8DCDQQABoMNjM3NDIzMTgzODA1IgxhJZEfp%2BakEFaIEGsq3AMgxnAnC5D2m35G4oglK37ftKKctmTeGV46i2paUS4%2F1gu9%2BHBzAogOzCI5BgapQJeoLAh8Kgc5eVW3IGs6n1shZo4kkBGwhRpPSV8Tn6PdVXLXJxFY66BBA03KyPprVnocHq0JWf7PIXZh0me%2FfJsx7vYx5HCR%2F09Z73ZRQclGB2qzhFzg%2BiTdnidwJbPgV%2B9DXMQpnRabQQQ%2FVAOj%2FUQCZtDy7if2bFT5wC2FNqvQBKRAo4qhp8KzCMj%2F0M5xllc8oUDHyfBgnWmFLfJQ1nb4F0kL4ntpuWCtJVYBcYpC1%2BfFjqyJmHgOg7XqKtYI%2BUCw2a3jxNPAJjYrcb8Kn%2F0sduZV9zrtOZLbDOT%2FrDMV0ibaPUHyROH9zqOjLlsR5Yy8w7dh%2F%2FGZyA%2BGba5C%2FqkATFlOei%2BZMGoEAYz7UVFQT6mA4rVVlQUw7lNzhzitx00dTdMl28bCl%2B28gIiKbvPec4pVp1gI%2BFwXajKuZhO2xJD0nf3UkfCyg%2Bvh%2BMj7CZxImR%2FxMibpVY3vJ5YyJ87akHA0RAPA2I4aHmYOnfUmJesraEekLYEMUcIinNDRWnHvRhQbYTu%2BA6Q6pxJ0E2iM4F2B7T3ugHlfFb1I12YQzn7ilKUZM5yPuyVMdTCQ2b7EBjqkAfedYRs2lm9MD9Et8NPEpscPJKG8lx6tYqoB6zjdOlHpFwiC7MvxPGgGg3yWut3YbnOQ%2Fi%2BnTu5hksN29R7McrDGjP%2FejxQ26en6J%2FeR64qmjOiPbLk0sw7gc%2FMO8KIs00KqECKv8uuY%2BG5Ao7z6NW%2FjRJ1DFgQBF%2BpQ%2ByjO%2B4TGXvjQ0YYDLO5liIVXPenqivdrAUHSCK%2F6gu8iBjBMfmmlCJry&X-Amz-Signature=77b36dbf50ad4e528691f65c9309397ce8a0162abb38330f762945efb6ce4b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZ5WHCK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93x7cv4nQa6kYXd9gQlr4fpZ6VVDxRRFhV0%2FFyVJmkwIhAL9%2BlIVl2yATnA4n9D0cnrGNtxlwRQJElCqNbc5dy3AyKv8DCDQQABoMNjM3NDIzMTgzODA1IgxhJZEfp%2BakEFaIEGsq3AMgxnAnC5D2m35G4oglK37ftKKctmTeGV46i2paUS4%2F1gu9%2BHBzAogOzCI5BgapQJeoLAh8Kgc5eVW3IGs6n1shZo4kkBGwhRpPSV8Tn6PdVXLXJxFY66BBA03KyPprVnocHq0JWf7PIXZh0me%2FfJsx7vYx5HCR%2F09Z73ZRQclGB2qzhFzg%2BiTdnidwJbPgV%2B9DXMQpnRabQQQ%2FVAOj%2FUQCZtDy7if2bFT5wC2FNqvQBKRAo4qhp8KzCMj%2F0M5xllc8oUDHyfBgnWmFLfJQ1nb4F0kL4ntpuWCtJVYBcYpC1%2BfFjqyJmHgOg7XqKtYI%2BUCw2a3jxNPAJjYrcb8Kn%2F0sduZV9zrtOZLbDOT%2FrDMV0ibaPUHyROH9zqOjLlsR5Yy8w7dh%2F%2FGZyA%2BGba5C%2FqkATFlOei%2BZMGoEAYz7UVFQT6mA4rVVlQUw7lNzhzitx00dTdMl28bCl%2B28gIiKbvPec4pVp1gI%2BFwXajKuZhO2xJD0nf3UkfCyg%2Bvh%2BMj7CZxImR%2FxMibpVY3vJ5YyJ87akHA0RAPA2I4aHmYOnfUmJesraEekLYEMUcIinNDRWnHvRhQbYTu%2BA6Q6pxJ0E2iM4F2B7T3ugHlfFb1I12YQzn7ilKUZM5yPuyVMdTCQ2b7EBjqkAfedYRs2lm9MD9Et8NPEpscPJKG8lx6tYqoB6zjdOlHpFwiC7MvxPGgGg3yWut3YbnOQ%2Fi%2BnTu5hksN29R7McrDGjP%2FejxQ26en6J%2FeR64qmjOiPbLk0sw7gc%2FMO8KIs00KqECKv8uuY%2BG5Ao7z6NW%2FjRJ1DFgQBF%2BpQ%2ByjO%2B4TGXvjQ0YYDLO5liIVXPenqivdrAUHSCK%2F6gu8iBjBMfmmlCJry&X-Amz-Signature=dfc1cb4e4482c4009d10af7a7af2048cb0d2bcbee17df62dee1005b658e530fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZ5WHCK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93x7cv4nQa6kYXd9gQlr4fpZ6VVDxRRFhV0%2FFyVJmkwIhAL9%2BlIVl2yATnA4n9D0cnrGNtxlwRQJElCqNbc5dy3AyKv8DCDQQABoMNjM3NDIzMTgzODA1IgxhJZEfp%2BakEFaIEGsq3AMgxnAnC5D2m35G4oglK37ftKKctmTeGV46i2paUS4%2F1gu9%2BHBzAogOzCI5BgapQJeoLAh8Kgc5eVW3IGs6n1shZo4kkBGwhRpPSV8Tn6PdVXLXJxFY66BBA03KyPprVnocHq0JWf7PIXZh0me%2FfJsx7vYx5HCR%2F09Z73ZRQclGB2qzhFzg%2BiTdnidwJbPgV%2B9DXMQpnRabQQQ%2FVAOj%2FUQCZtDy7if2bFT5wC2FNqvQBKRAo4qhp8KzCMj%2F0M5xllc8oUDHyfBgnWmFLfJQ1nb4F0kL4ntpuWCtJVYBcYpC1%2BfFjqyJmHgOg7XqKtYI%2BUCw2a3jxNPAJjYrcb8Kn%2F0sduZV9zrtOZLbDOT%2FrDMV0ibaPUHyROH9zqOjLlsR5Yy8w7dh%2F%2FGZyA%2BGba5C%2FqkATFlOei%2BZMGoEAYz7UVFQT6mA4rVVlQUw7lNzhzitx00dTdMl28bCl%2B28gIiKbvPec4pVp1gI%2BFwXajKuZhO2xJD0nf3UkfCyg%2Bvh%2BMj7CZxImR%2FxMibpVY3vJ5YyJ87akHA0RAPA2I4aHmYOnfUmJesraEekLYEMUcIinNDRWnHvRhQbYTu%2BA6Q6pxJ0E2iM4F2B7T3ugHlfFb1I12YQzn7ilKUZM5yPuyVMdTCQ2b7EBjqkAfedYRs2lm9MD9Et8NPEpscPJKG8lx6tYqoB6zjdOlHpFwiC7MvxPGgGg3yWut3YbnOQ%2Fi%2BnTu5hksN29R7McrDGjP%2FejxQ26en6J%2FeR64qmjOiPbLk0sw7gc%2FMO8KIs00KqECKv8uuY%2BG5Ao7z6NW%2FjRJ1DFgQBF%2BpQ%2ByjO%2B4TGXvjQ0YYDLO5liIVXPenqivdrAUHSCK%2F6gu8iBjBMfmmlCJry&X-Amz-Signature=48b64234199fe874030aabe10ebba90644cb0dcc3c7d0197d506f29fa3394bc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZ5WHCK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93x7cv4nQa6kYXd9gQlr4fpZ6VVDxRRFhV0%2FFyVJmkwIhAL9%2BlIVl2yATnA4n9D0cnrGNtxlwRQJElCqNbc5dy3AyKv8DCDQQABoMNjM3NDIzMTgzODA1IgxhJZEfp%2BakEFaIEGsq3AMgxnAnC5D2m35G4oglK37ftKKctmTeGV46i2paUS4%2F1gu9%2BHBzAogOzCI5BgapQJeoLAh8Kgc5eVW3IGs6n1shZo4kkBGwhRpPSV8Tn6PdVXLXJxFY66BBA03KyPprVnocHq0JWf7PIXZh0me%2FfJsx7vYx5HCR%2F09Z73ZRQclGB2qzhFzg%2BiTdnidwJbPgV%2B9DXMQpnRabQQQ%2FVAOj%2FUQCZtDy7if2bFT5wC2FNqvQBKRAo4qhp8KzCMj%2F0M5xllc8oUDHyfBgnWmFLfJQ1nb4F0kL4ntpuWCtJVYBcYpC1%2BfFjqyJmHgOg7XqKtYI%2BUCw2a3jxNPAJjYrcb8Kn%2F0sduZV9zrtOZLbDOT%2FrDMV0ibaPUHyROH9zqOjLlsR5Yy8w7dh%2F%2FGZyA%2BGba5C%2FqkATFlOei%2BZMGoEAYz7UVFQT6mA4rVVlQUw7lNzhzitx00dTdMl28bCl%2B28gIiKbvPec4pVp1gI%2BFwXajKuZhO2xJD0nf3UkfCyg%2Bvh%2BMj7CZxImR%2FxMibpVY3vJ5YyJ87akHA0RAPA2I4aHmYOnfUmJesraEekLYEMUcIinNDRWnHvRhQbYTu%2BA6Q6pxJ0E2iM4F2B7T3ugHlfFb1I12YQzn7ilKUZM5yPuyVMdTCQ2b7EBjqkAfedYRs2lm9MD9Et8NPEpscPJKG8lx6tYqoB6zjdOlHpFwiC7MvxPGgGg3yWut3YbnOQ%2Fi%2BnTu5hksN29R7McrDGjP%2FejxQ26en6J%2FeR64qmjOiPbLk0sw7gc%2FMO8KIs00KqECKv8uuY%2BG5Ao7z6NW%2FjRJ1DFgQBF%2BpQ%2ByjO%2B4TGXvjQ0YYDLO5liIVXPenqivdrAUHSCK%2F6gu8iBjBMfmmlCJry&X-Amz-Signature=4aa1e3135a586510d2093aef3c2a951ef590118557fb617a89c176588ab9a59b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZ5WHCK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93x7cv4nQa6kYXd9gQlr4fpZ6VVDxRRFhV0%2FFyVJmkwIhAL9%2BlIVl2yATnA4n9D0cnrGNtxlwRQJElCqNbc5dy3AyKv8DCDQQABoMNjM3NDIzMTgzODA1IgxhJZEfp%2BakEFaIEGsq3AMgxnAnC5D2m35G4oglK37ftKKctmTeGV46i2paUS4%2F1gu9%2BHBzAogOzCI5BgapQJeoLAh8Kgc5eVW3IGs6n1shZo4kkBGwhRpPSV8Tn6PdVXLXJxFY66BBA03KyPprVnocHq0JWf7PIXZh0me%2FfJsx7vYx5HCR%2F09Z73ZRQclGB2qzhFzg%2BiTdnidwJbPgV%2B9DXMQpnRabQQQ%2FVAOj%2FUQCZtDy7if2bFT5wC2FNqvQBKRAo4qhp8KzCMj%2F0M5xllc8oUDHyfBgnWmFLfJQ1nb4F0kL4ntpuWCtJVYBcYpC1%2BfFjqyJmHgOg7XqKtYI%2BUCw2a3jxNPAJjYrcb8Kn%2F0sduZV9zrtOZLbDOT%2FrDMV0ibaPUHyROH9zqOjLlsR5Yy8w7dh%2F%2FGZyA%2BGba5C%2FqkATFlOei%2BZMGoEAYz7UVFQT6mA4rVVlQUw7lNzhzitx00dTdMl28bCl%2B28gIiKbvPec4pVp1gI%2BFwXajKuZhO2xJD0nf3UkfCyg%2Bvh%2BMj7CZxImR%2FxMibpVY3vJ5YyJ87akHA0RAPA2I4aHmYOnfUmJesraEekLYEMUcIinNDRWnHvRhQbYTu%2BA6Q6pxJ0E2iM4F2B7T3ugHlfFb1I12YQzn7ilKUZM5yPuyVMdTCQ2b7EBjqkAfedYRs2lm9MD9Et8NPEpscPJKG8lx6tYqoB6zjdOlHpFwiC7MvxPGgGg3yWut3YbnOQ%2Fi%2BnTu5hksN29R7McrDGjP%2FejxQ26en6J%2FeR64qmjOiPbLk0sw7gc%2FMO8KIs00KqECKv8uuY%2BG5Ao7z6NW%2FjRJ1DFgQBF%2BpQ%2ByjO%2B4TGXvjQ0YYDLO5liIVXPenqivdrAUHSCK%2F6gu8iBjBMfmmlCJry&X-Amz-Signature=41dc21bbf854692f5be46bbb721bce302fb9de3ae502e240f295b524294f6b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
