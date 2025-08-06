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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB2AN4D%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEEx%2FNdfdnpn8%2FcyLuLouW0msMBvivQKEo2uCOcfxF6yAiBAY105zTLs4Rh7TVd%2B0FC6cy7N%2BppQGVTMVO6VQNPzXSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM8wpb6PuX2Od2T2ISKtwDJ%2Bl0N8vb9lBjugGJuPGfCHYVXgLn08CKguRrb7dOKqRn8%2F5M0fEE0AVC7sHiLhb1lnPiK4%2FpR5ozTNCj%2BUuIgCJhFgAmsAyPGW8C3YOlooRln3eQI7QU19SEw9H48il%2BqBzucoSLHXCUHsa0rmT0y8p0u1fWcXK1AO0tQ6SnI%2F4P%2B34i0yFE%2FyPZxjycVVBLaP2tYtqbY1uynwK9TUETEPUX3hebP6tp5%2F34D4VyYROvbuZ%2FW%2BxS9m6T8qyKUgHjvuBFuJRcU1hJSMDeA776JpGtF1uUPQJXKlcT%2Bd44JZStkM0jecAFkYcj3mwNCSz1zL2MvGXGNgML5CD7%2FgqjlB8DPZE3ofizOpOxweB%2FTvI2obXBEblNteXdvHh3KaxSoevfBrF%2Fa8KnBFA8vM2ZN8wmXVHyEY4tyU9C4HCE%2Fl85NugXQmDRTyhGj%2Bz7bQfcd6ZDgmYbOz0NBXbWQ%2Fw2b7Mm%2BVDMyDoxhX%2BNwECKsxCYThys2HiMNN2s8G%2B%2FrD3MbTfsTypGR7puRn%2BAos4AJIXQ4bW1sqhXQ1DbtAM%2FNYHXKFfB86kVNOYFW%2FxHFq6KH7KLew9mr09BVqOmgXSb8TaRf5OUZP5dZCAEJJugImsUTG1FBXEeLSwVqJkwuYTNxAY6pgEM0%2Fbbin6JXBK9lxe%2BQsGOvQKo1CJo0knGgroS83ceyb%2FHeA4k1VjFq%2FxBRkz4il07ag7MzvqdYy5zHTWLOTC7b%2BPw01enMeC1ySKBzb8H4Zb47k7J2XMQ%2Fxby9gV1pMqHCUJW2M9%2BmlE8aiHjuxGpdlmM3yqW4kDpM7ImMsbW7f3e3TMrI%2Bzn6ZycCny1DG08eiQ6ZKE6hVIvT15SPJU1cH2JN6CM&X-Amz-Signature=da10b5a2a307c726c65180decfe4266ca28b7c427987def0515834be0b5731bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB2AN4D%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEEx%2FNdfdnpn8%2FcyLuLouW0msMBvivQKEo2uCOcfxF6yAiBAY105zTLs4Rh7TVd%2B0FC6cy7N%2BppQGVTMVO6VQNPzXSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM8wpb6PuX2Od2T2ISKtwDJ%2Bl0N8vb9lBjugGJuPGfCHYVXgLn08CKguRrb7dOKqRn8%2F5M0fEE0AVC7sHiLhb1lnPiK4%2FpR5ozTNCj%2BUuIgCJhFgAmsAyPGW8C3YOlooRln3eQI7QU19SEw9H48il%2BqBzucoSLHXCUHsa0rmT0y8p0u1fWcXK1AO0tQ6SnI%2F4P%2B34i0yFE%2FyPZxjycVVBLaP2tYtqbY1uynwK9TUETEPUX3hebP6tp5%2F34D4VyYROvbuZ%2FW%2BxS9m6T8qyKUgHjvuBFuJRcU1hJSMDeA776JpGtF1uUPQJXKlcT%2Bd44JZStkM0jecAFkYcj3mwNCSz1zL2MvGXGNgML5CD7%2FgqjlB8DPZE3ofizOpOxweB%2FTvI2obXBEblNteXdvHh3KaxSoevfBrF%2Fa8KnBFA8vM2ZN8wmXVHyEY4tyU9C4HCE%2Fl85NugXQmDRTyhGj%2Bz7bQfcd6ZDgmYbOz0NBXbWQ%2Fw2b7Mm%2BVDMyDoxhX%2BNwECKsxCYThys2HiMNN2s8G%2B%2FrD3MbTfsTypGR7puRn%2BAos4AJIXQ4bW1sqhXQ1DbtAM%2FNYHXKFfB86kVNOYFW%2FxHFq6KH7KLew9mr09BVqOmgXSb8TaRf5OUZP5dZCAEJJugImsUTG1FBXEeLSwVqJkwuYTNxAY6pgEM0%2Fbbin6JXBK9lxe%2BQsGOvQKo1CJo0knGgroS83ceyb%2FHeA4k1VjFq%2FxBRkz4il07ag7MzvqdYy5zHTWLOTC7b%2BPw01enMeC1ySKBzb8H4Zb47k7J2XMQ%2Fxby9gV1pMqHCUJW2M9%2BmlE8aiHjuxGpdlmM3yqW4kDpM7ImMsbW7f3e3TMrI%2Bzn6ZycCny1DG08eiQ6ZKE6hVIvT15SPJU1cH2JN6CM&X-Amz-Signature=6bd7c3c144f625dcc1ac4589fabd0fbd4d73ae499001014a6b299364e4361594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB2AN4D%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEEx%2FNdfdnpn8%2FcyLuLouW0msMBvivQKEo2uCOcfxF6yAiBAY105zTLs4Rh7TVd%2B0FC6cy7N%2BppQGVTMVO6VQNPzXSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM8wpb6PuX2Od2T2ISKtwDJ%2Bl0N8vb9lBjugGJuPGfCHYVXgLn08CKguRrb7dOKqRn8%2F5M0fEE0AVC7sHiLhb1lnPiK4%2FpR5ozTNCj%2BUuIgCJhFgAmsAyPGW8C3YOlooRln3eQI7QU19SEw9H48il%2BqBzucoSLHXCUHsa0rmT0y8p0u1fWcXK1AO0tQ6SnI%2F4P%2B34i0yFE%2FyPZxjycVVBLaP2tYtqbY1uynwK9TUETEPUX3hebP6tp5%2F34D4VyYROvbuZ%2FW%2BxS9m6T8qyKUgHjvuBFuJRcU1hJSMDeA776JpGtF1uUPQJXKlcT%2Bd44JZStkM0jecAFkYcj3mwNCSz1zL2MvGXGNgML5CD7%2FgqjlB8DPZE3ofizOpOxweB%2FTvI2obXBEblNteXdvHh3KaxSoevfBrF%2Fa8KnBFA8vM2ZN8wmXVHyEY4tyU9C4HCE%2Fl85NugXQmDRTyhGj%2Bz7bQfcd6ZDgmYbOz0NBXbWQ%2Fw2b7Mm%2BVDMyDoxhX%2BNwECKsxCYThys2HiMNN2s8G%2B%2FrD3MbTfsTypGR7puRn%2BAos4AJIXQ4bW1sqhXQ1DbtAM%2FNYHXKFfB86kVNOYFW%2FxHFq6KH7KLew9mr09BVqOmgXSb8TaRf5OUZP5dZCAEJJugImsUTG1FBXEeLSwVqJkwuYTNxAY6pgEM0%2Fbbin6JXBK9lxe%2BQsGOvQKo1CJo0knGgroS83ceyb%2FHeA4k1VjFq%2FxBRkz4il07ag7MzvqdYy5zHTWLOTC7b%2BPw01enMeC1ySKBzb8H4Zb47k7J2XMQ%2Fxby9gV1pMqHCUJW2M9%2BmlE8aiHjuxGpdlmM3yqW4kDpM7ImMsbW7f3e3TMrI%2Bzn6ZycCny1DG08eiQ6ZKE6hVIvT15SPJU1cH2JN6CM&X-Amz-Signature=10c183edaaa93997447d8d0ba0615867115f2d7aa3156f2f9a82c799d3046091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB2AN4D%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEEx%2FNdfdnpn8%2FcyLuLouW0msMBvivQKEo2uCOcfxF6yAiBAY105zTLs4Rh7TVd%2B0FC6cy7N%2BppQGVTMVO6VQNPzXSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM8wpb6PuX2Od2T2ISKtwDJ%2Bl0N8vb9lBjugGJuPGfCHYVXgLn08CKguRrb7dOKqRn8%2F5M0fEE0AVC7sHiLhb1lnPiK4%2FpR5ozTNCj%2BUuIgCJhFgAmsAyPGW8C3YOlooRln3eQI7QU19SEw9H48il%2BqBzucoSLHXCUHsa0rmT0y8p0u1fWcXK1AO0tQ6SnI%2F4P%2B34i0yFE%2FyPZxjycVVBLaP2tYtqbY1uynwK9TUETEPUX3hebP6tp5%2F34D4VyYROvbuZ%2FW%2BxS9m6T8qyKUgHjvuBFuJRcU1hJSMDeA776JpGtF1uUPQJXKlcT%2Bd44JZStkM0jecAFkYcj3mwNCSz1zL2MvGXGNgML5CD7%2FgqjlB8DPZE3ofizOpOxweB%2FTvI2obXBEblNteXdvHh3KaxSoevfBrF%2Fa8KnBFA8vM2ZN8wmXVHyEY4tyU9C4HCE%2Fl85NugXQmDRTyhGj%2Bz7bQfcd6ZDgmYbOz0NBXbWQ%2Fw2b7Mm%2BVDMyDoxhX%2BNwECKsxCYThys2HiMNN2s8G%2B%2FrD3MbTfsTypGR7puRn%2BAos4AJIXQ4bW1sqhXQ1DbtAM%2FNYHXKFfB86kVNOYFW%2FxHFq6KH7KLew9mr09BVqOmgXSb8TaRf5OUZP5dZCAEJJugImsUTG1FBXEeLSwVqJkwuYTNxAY6pgEM0%2Fbbin6JXBK9lxe%2BQsGOvQKo1CJo0knGgroS83ceyb%2FHeA4k1VjFq%2FxBRkz4il07ag7MzvqdYy5zHTWLOTC7b%2BPw01enMeC1ySKBzb8H4Zb47k7J2XMQ%2Fxby9gV1pMqHCUJW2M9%2BmlE8aiHjuxGpdlmM3yqW4kDpM7ImMsbW7f3e3TMrI%2Bzn6ZycCny1DG08eiQ6ZKE6hVIvT15SPJU1cH2JN6CM&X-Amz-Signature=71edd8a66ca23b8037344ce079c68492cadfb42fdba3b92d1d90c83249cd10e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHJW2NKQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCVq%2F2%2FIYZq5SpmDUrD6jORetFrVOjRED2K%2BtnSsnhwOwIgYcFH8BXJZCGmqI1WrHzt3HPlMg9FwvCwHTrwi6LDPLwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLeA7Pz5lie%2FDErVkyrcA0fSIlD8UfesnXjJGMUzBxYtg8vnxvQY3TpdwuxlOaCJaxioiWVoeWzZMZ%2F6Uzk9ddqwIdvuKBn5e0hXLNpCLDAdVnWoi%2F5aTc%2FhS%2Bsom9kTMGdd%2Fhr7w4dt65jynpHB6ZS7sdDR%2FO6Of8BaelmOk0Xh42WxIOADq2AeRWzka5OQlCRZUj7fRFh4MjCnGaimbeAqQ8aGiaAZ7c15MOEvhxtKCHlF7E35DpWoaVPS8sBqmc19Zqgn7UV4wSWB5xQ3eJEfqFJy%2BA5jpe7Csmrp5QfMkhFklxUtxOcjPQlHYbikjMB%2B%2FaXhQ4ajZZ0Y3OipRhSrBXGm7F6gXBjMHSMDlv%2BaFcTGTmu%2Ba2rwkUaFRtLnFndCORCnaz5JxNKkKGbYFWZIVDxvuPgsFDOe04I2pw1hpdNvrPHsQLw82ZEW44mDBdNWkLBirXmlJ2%2FjpltQE8nyNebxl5lSuOEGa%2FnWzRa8zkZLnVA5TpnctCEjeKwOC9II0CBIi6t5njY5fB1xWBf6%2F7JrDe6WXXewuTzYPgVzzq%2BR%2F%2BIkNezEEqVBsluhlFDrgvjnyIRSd8RlR4YC%2FEuVbD6dfBEOW6ofSIOPm12AWC4kEDonHEm1x%2BiwLP%2FEqF8XdXcc8DrBLpYUMJGFzcQGOqUB5z8aLpDeYmAn9WYU3QqodQVxYY0aFj0FxkQtNb2ac%2FUUjcZnqLIhx9QMos7hl8gev0aGPZpy1Tgi4aSd0YBuoJoXrXvZgdt%2BthpXHn4DFBBh5epRTXp95VpPSryW%2BMEVIgVCgjqDCqYMRBh4yo6jSGV8BsbkQAnJhDIKRC0UescdfZU514UEBzbkifdzpQ0aQu%2BuRxABlIikrjXmfhJxr0B7msrt&X-Amz-Signature=6f00745b74045ce9de35826cff6b59aac82536276b71534f39e8acfc1d004e97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB2AN4D%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEEx%2FNdfdnpn8%2FcyLuLouW0msMBvivQKEo2uCOcfxF6yAiBAY105zTLs4Rh7TVd%2B0FC6cy7N%2BppQGVTMVO6VQNPzXSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM8wpb6PuX2Od2T2ISKtwDJ%2Bl0N8vb9lBjugGJuPGfCHYVXgLn08CKguRrb7dOKqRn8%2F5M0fEE0AVC7sHiLhb1lnPiK4%2FpR5ozTNCj%2BUuIgCJhFgAmsAyPGW8C3YOlooRln3eQI7QU19SEw9H48il%2BqBzucoSLHXCUHsa0rmT0y8p0u1fWcXK1AO0tQ6SnI%2F4P%2B34i0yFE%2FyPZxjycVVBLaP2tYtqbY1uynwK9TUETEPUX3hebP6tp5%2F34D4VyYROvbuZ%2FW%2BxS9m6T8qyKUgHjvuBFuJRcU1hJSMDeA776JpGtF1uUPQJXKlcT%2Bd44JZStkM0jecAFkYcj3mwNCSz1zL2MvGXGNgML5CD7%2FgqjlB8DPZE3ofizOpOxweB%2FTvI2obXBEblNteXdvHh3KaxSoevfBrF%2Fa8KnBFA8vM2ZN8wmXVHyEY4tyU9C4HCE%2Fl85NugXQmDRTyhGj%2Bz7bQfcd6ZDgmYbOz0NBXbWQ%2Fw2b7Mm%2BVDMyDoxhX%2BNwECKsxCYThys2HiMNN2s8G%2B%2FrD3MbTfsTypGR7puRn%2BAos4AJIXQ4bW1sqhXQ1DbtAM%2FNYHXKFfB86kVNOYFW%2FxHFq6KH7KLew9mr09BVqOmgXSb8TaRf5OUZP5dZCAEJJugImsUTG1FBXEeLSwVqJkwuYTNxAY6pgEM0%2Fbbin6JXBK9lxe%2BQsGOvQKo1CJo0knGgroS83ceyb%2FHeA4k1VjFq%2FxBRkz4il07ag7MzvqdYy5zHTWLOTC7b%2BPw01enMeC1ySKBzb8H4Zb47k7J2XMQ%2Fxby9gV1pMqHCUJW2M9%2BmlE8aiHjuxGpdlmM3yqW4kDpM7ImMsbW7f3e3TMrI%2Bzn6ZycCny1DG08eiQ6ZKE6hVIvT15SPJU1cH2JN6CM&X-Amz-Signature=6e5f7063154bd7673868aa9e73b54598650786e1632421140bb37b78214ab663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB2AN4D%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEEx%2FNdfdnpn8%2FcyLuLouW0msMBvivQKEo2uCOcfxF6yAiBAY105zTLs4Rh7TVd%2B0FC6cy7N%2BppQGVTMVO6VQNPzXSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM8wpb6PuX2Od2T2ISKtwDJ%2Bl0N8vb9lBjugGJuPGfCHYVXgLn08CKguRrb7dOKqRn8%2F5M0fEE0AVC7sHiLhb1lnPiK4%2FpR5ozTNCj%2BUuIgCJhFgAmsAyPGW8C3YOlooRln3eQI7QU19SEw9H48il%2BqBzucoSLHXCUHsa0rmT0y8p0u1fWcXK1AO0tQ6SnI%2F4P%2B34i0yFE%2FyPZxjycVVBLaP2tYtqbY1uynwK9TUETEPUX3hebP6tp5%2F34D4VyYROvbuZ%2FW%2BxS9m6T8qyKUgHjvuBFuJRcU1hJSMDeA776JpGtF1uUPQJXKlcT%2Bd44JZStkM0jecAFkYcj3mwNCSz1zL2MvGXGNgML5CD7%2FgqjlB8DPZE3ofizOpOxweB%2FTvI2obXBEblNteXdvHh3KaxSoevfBrF%2Fa8KnBFA8vM2ZN8wmXVHyEY4tyU9C4HCE%2Fl85NugXQmDRTyhGj%2Bz7bQfcd6ZDgmYbOz0NBXbWQ%2Fw2b7Mm%2BVDMyDoxhX%2BNwECKsxCYThys2HiMNN2s8G%2B%2FrD3MbTfsTypGR7puRn%2BAos4AJIXQ4bW1sqhXQ1DbtAM%2FNYHXKFfB86kVNOYFW%2FxHFq6KH7KLew9mr09BVqOmgXSb8TaRf5OUZP5dZCAEJJugImsUTG1FBXEeLSwVqJkwuYTNxAY6pgEM0%2Fbbin6JXBK9lxe%2BQsGOvQKo1CJo0knGgroS83ceyb%2FHeA4k1VjFq%2FxBRkz4il07ag7MzvqdYy5zHTWLOTC7b%2BPw01enMeC1ySKBzb8H4Zb47k7J2XMQ%2Fxby9gV1pMqHCUJW2M9%2BmlE8aiHjuxGpdlmM3yqW4kDpM7ImMsbW7f3e3TMrI%2Bzn6ZycCny1DG08eiQ6ZKE6hVIvT15SPJU1cH2JN6CM&X-Amz-Signature=5128caced7553b71590864d8675855cc7f7c23bc038cd026bf83a01ce8d2e3ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB2AN4D%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEEx%2FNdfdnpn8%2FcyLuLouW0msMBvivQKEo2uCOcfxF6yAiBAY105zTLs4Rh7TVd%2B0FC6cy7N%2BppQGVTMVO6VQNPzXSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM8wpb6PuX2Od2T2ISKtwDJ%2Bl0N8vb9lBjugGJuPGfCHYVXgLn08CKguRrb7dOKqRn8%2F5M0fEE0AVC7sHiLhb1lnPiK4%2FpR5ozTNCj%2BUuIgCJhFgAmsAyPGW8C3YOlooRln3eQI7QU19SEw9H48il%2BqBzucoSLHXCUHsa0rmT0y8p0u1fWcXK1AO0tQ6SnI%2F4P%2B34i0yFE%2FyPZxjycVVBLaP2tYtqbY1uynwK9TUETEPUX3hebP6tp5%2F34D4VyYROvbuZ%2FW%2BxS9m6T8qyKUgHjvuBFuJRcU1hJSMDeA776JpGtF1uUPQJXKlcT%2Bd44JZStkM0jecAFkYcj3mwNCSz1zL2MvGXGNgML5CD7%2FgqjlB8DPZE3ofizOpOxweB%2FTvI2obXBEblNteXdvHh3KaxSoevfBrF%2Fa8KnBFA8vM2ZN8wmXVHyEY4tyU9C4HCE%2Fl85NugXQmDRTyhGj%2Bz7bQfcd6ZDgmYbOz0NBXbWQ%2Fw2b7Mm%2BVDMyDoxhX%2BNwECKsxCYThys2HiMNN2s8G%2B%2FrD3MbTfsTypGR7puRn%2BAos4AJIXQ4bW1sqhXQ1DbtAM%2FNYHXKFfB86kVNOYFW%2FxHFq6KH7KLew9mr09BVqOmgXSb8TaRf5OUZP5dZCAEJJugImsUTG1FBXEeLSwVqJkwuYTNxAY6pgEM0%2Fbbin6JXBK9lxe%2BQsGOvQKo1CJo0knGgroS83ceyb%2FHeA4k1VjFq%2FxBRkz4il07ag7MzvqdYy5zHTWLOTC7b%2BPw01enMeC1ySKBzb8H4Zb47k7J2XMQ%2Fxby9gV1pMqHCUJW2M9%2BmlE8aiHjuxGpdlmM3yqW4kDpM7ImMsbW7f3e3TMrI%2Bzn6ZycCny1DG08eiQ6ZKE6hVIvT15SPJU1cH2JN6CM&X-Amz-Signature=46a7ed6a1187367328fc6bd5715cd15cb8d3155869136512c9ea6aeace6b248e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB2AN4D%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEEx%2FNdfdnpn8%2FcyLuLouW0msMBvivQKEo2uCOcfxF6yAiBAY105zTLs4Rh7TVd%2B0FC6cy7N%2BppQGVTMVO6VQNPzXSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM8wpb6PuX2Od2T2ISKtwDJ%2Bl0N8vb9lBjugGJuPGfCHYVXgLn08CKguRrb7dOKqRn8%2F5M0fEE0AVC7sHiLhb1lnPiK4%2FpR5ozTNCj%2BUuIgCJhFgAmsAyPGW8C3YOlooRln3eQI7QU19SEw9H48il%2BqBzucoSLHXCUHsa0rmT0y8p0u1fWcXK1AO0tQ6SnI%2F4P%2B34i0yFE%2FyPZxjycVVBLaP2tYtqbY1uynwK9TUETEPUX3hebP6tp5%2F34D4VyYROvbuZ%2FW%2BxS9m6T8qyKUgHjvuBFuJRcU1hJSMDeA776JpGtF1uUPQJXKlcT%2Bd44JZStkM0jecAFkYcj3mwNCSz1zL2MvGXGNgML5CD7%2FgqjlB8DPZE3ofizOpOxweB%2FTvI2obXBEblNteXdvHh3KaxSoevfBrF%2Fa8KnBFA8vM2ZN8wmXVHyEY4tyU9C4HCE%2Fl85NugXQmDRTyhGj%2Bz7bQfcd6ZDgmYbOz0NBXbWQ%2Fw2b7Mm%2BVDMyDoxhX%2BNwECKsxCYThys2HiMNN2s8G%2B%2FrD3MbTfsTypGR7puRn%2BAos4AJIXQ4bW1sqhXQ1DbtAM%2FNYHXKFfB86kVNOYFW%2FxHFq6KH7KLew9mr09BVqOmgXSb8TaRf5OUZP5dZCAEJJugImsUTG1FBXEeLSwVqJkwuYTNxAY6pgEM0%2Fbbin6JXBK9lxe%2BQsGOvQKo1CJo0knGgroS83ceyb%2FHeA4k1VjFq%2FxBRkz4il07ag7MzvqdYy5zHTWLOTC7b%2BPw01enMeC1ySKBzb8H4Zb47k7J2XMQ%2Fxby9gV1pMqHCUJW2M9%2BmlE8aiHjuxGpdlmM3yqW4kDpM7ImMsbW7f3e3TMrI%2Bzn6ZycCny1DG08eiQ6ZKE6hVIvT15SPJU1cH2JN6CM&X-Amz-Signature=398896943262695377c74d6263544429385013faf020542e66599d8ea2eb4a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB2AN4D%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEEx%2FNdfdnpn8%2FcyLuLouW0msMBvivQKEo2uCOcfxF6yAiBAY105zTLs4Rh7TVd%2B0FC6cy7N%2BppQGVTMVO6VQNPzXSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM8wpb6PuX2Od2T2ISKtwDJ%2Bl0N8vb9lBjugGJuPGfCHYVXgLn08CKguRrb7dOKqRn8%2F5M0fEE0AVC7sHiLhb1lnPiK4%2FpR5ozTNCj%2BUuIgCJhFgAmsAyPGW8C3YOlooRln3eQI7QU19SEw9H48il%2BqBzucoSLHXCUHsa0rmT0y8p0u1fWcXK1AO0tQ6SnI%2F4P%2B34i0yFE%2FyPZxjycVVBLaP2tYtqbY1uynwK9TUETEPUX3hebP6tp5%2F34D4VyYROvbuZ%2FW%2BxS9m6T8qyKUgHjvuBFuJRcU1hJSMDeA776JpGtF1uUPQJXKlcT%2Bd44JZStkM0jecAFkYcj3mwNCSz1zL2MvGXGNgML5CD7%2FgqjlB8DPZE3ofizOpOxweB%2FTvI2obXBEblNteXdvHh3KaxSoevfBrF%2Fa8KnBFA8vM2ZN8wmXVHyEY4tyU9C4HCE%2Fl85NugXQmDRTyhGj%2Bz7bQfcd6ZDgmYbOz0NBXbWQ%2Fw2b7Mm%2BVDMyDoxhX%2BNwECKsxCYThys2HiMNN2s8G%2B%2FrD3MbTfsTypGR7puRn%2BAos4AJIXQ4bW1sqhXQ1DbtAM%2FNYHXKFfB86kVNOYFW%2FxHFq6KH7KLew9mr09BVqOmgXSb8TaRf5OUZP5dZCAEJJugImsUTG1FBXEeLSwVqJkwuYTNxAY6pgEM0%2Fbbin6JXBK9lxe%2BQsGOvQKo1CJo0knGgroS83ceyb%2FHeA4k1VjFq%2FxBRkz4il07ag7MzvqdYy5zHTWLOTC7b%2BPw01enMeC1ySKBzb8H4Zb47k7J2XMQ%2Fxby9gV1pMqHCUJW2M9%2BmlE8aiHjuxGpdlmM3yqW4kDpM7ImMsbW7f3e3TMrI%2Bzn6ZycCny1DG08eiQ6ZKE6hVIvT15SPJU1cH2JN6CM&X-Amz-Signature=09febd10f10e64a4ba336c73634c52c1ebf062a7080ba7cf4f63ece005705241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB2AN4D%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEEx%2FNdfdnpn8%2FcyLuLouW0msMBvivQKEo2uCOcfxF6yAiBAY105zTLs4Rh7TVd%2B0FC6cy7N%2BppQGVTMVO6VQNPzXSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM8wpb6PuX2Od2T2ISKtwDJ%2Bl0N8vb9lBjugGJuPGfCHYVXgLn08CKguRrb7dOKqRn8%2F5M0fEE0AVC7sHiLhb1lnPiK4%2FpR5ozTNCj%2BUuIgCJhFgAmsAyPGW8C3YOlooRln3eQI7QU19SEw9H48il%2BqBzucoSLHXCUHsa0rmT0y8p0u1fWcXK1AO0tQ6SnI%2F4P%2B34i0yFE%2FyPZxjycVVBLaP2tYtqbY1uynwK9TUETEPUX3hebP6tp5%2F34D4VyYROvbuZ%2FW%2BxS9m6T8qyKUgHjvuBFuJRcU1hJSMDeA776JpGtF1uUPQJXKlcT%2Bd44JZStkM0jecAFkYcj3mwNCSz1zL2MvGXGNgML5CD7%2FgqjlB8DPZE3ofizOpOxweB%2FTvI2obXBEblNteXdvHh3KaxSoevfBrF%2Fa8KnBFA8vM2ZN8wmXVHyEY4tyU9C4HCE%2Fl85NugXQmDRTyhGj%2Bz7bQfcd6ZDgmYbOz0NBXbWQ%2Fw2b7Mm%2BVDMyDoxhX%2BNwECKsxCYThys2HiMNN2s8G%2B%2FrD3MbTfsTypGR7puRn%2BAos4AJIXQ4bW1sqhXQ1DbtAM%2FNYHXKFfB86kVNOYFW%2FxHFq6KH7KLew9mr09BVqOmgXSb8TaRf5OUZP5dZCAEJJugImsUTG1FBXEeLSwVqJkwuYTNxAY6pgEM0%2Fbbin6JXBK9lxe%2BQsGOvQKo1CJo0knGgroS83ceyb%2FHeA4k1VjFq%2FxBRkz4il07ag7MzvqdYy5zHTWLOTC7b%2BPw01enMeC1ySKBzb8H4Zb47k7J2XMQ%2Fxby9gV1pMqHCUJW2M9%2BmlE8aiHjuxGpdlmM3yqW4kDpM7ImMsbW7f3e3TMrI%2Bzn6ZycCny1DG08eiQ6ZKE6hVIvT15SPJU1cH2JN6CM&X-Amz-Signature=a2f71a363a86bb30cc8ed7e6628ef7babbd47a11e919dfe80d3b7cb3077b4c81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
