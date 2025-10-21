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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ7HTTM2%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCREhLtZasf666R%2FlRFCVcCZD%2FmbKGeEz1NoO%2BaydVo8wIgfUtakfg16f4e7IhM8E1X2vUQwv3kaOZvvwSYzAKIKRsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCw6gy4J%2B3n7OWbPSrcA0zk%2BcEGQnRSkSJQ64VvFw3NAvrOIckUukej%2FOkCneX4xzqHV%2BeSH4zO9O4N9CejlHLDEwedO5XxCd9FmSAaiDDa675nBsP745oaECWqxC5%2FlFO8tu2Su%2FsUyYkb8fzQ8ry8YH9k2FA3gNleVzXTKzTIN0CJfQQq2ljOrycvFjRoZfj5kEJijJAhbqrwcLceA1GOUgEoFsvPNrTfNrAMTdE%2B8h98YwY55oIah2ovVMZY34DZ5bdv9K2ZNtB3QilJpmnTpkI67oxwxfJrD6%2Ficrz8znHcWdFVD2G6CxYs23LujetIB3RcedfdJHA4kfkvIU09fjxGnKBnHKNF7bSk0gNINp%2Blp0T%2FgjDif%2BApUzkeNOBOhtN668yYRH97BN26uiQfnp9WEMeC2dWhcoIYy2AiJm%2BYtP4I9yvYKJlf7YtH1yjXEtG9uTPm6r6T2oEr0N1buWryPLK7YICb%2Fl0d%2FRGCaPMsLEI6V6%2B35KtVc7wqC%2BLekKGJ39DWMW9KMfEu%2F1ZTdakhnC%2BKpudoCAK3sNEni8f3H%2FW%2FAXanKl2vKqm3n6yoUrsrdkxF%2FX1AcoTP4rTyr2oZ9mxTxGKqQ8BwYrsavcafLtarMZCF74DfMMaA8VpEGoMb2Yy0KOBwMJSs28cGOqUBkJA928aiYdu2G8MiDOMYVtU7j1LVXZekzMnoWaICA184UAEvFxKUHQpJEigtg6vi7U7llnTcvrfu1s88YVZWDoc%2FB1QTfMYh%2F0yNWzLj7ZUMQvzYXps79pMjDfeWQyDctMt2EWkL222uJ27dUaVoGfSfd6pxFT7Vdvy7uc0Em07p4mJadAG7%2FpxBtdmes2tLL1CdBrk29RDoQL1X55HEO6EZJBpL&X-Amz-Signature=319cc2265cbaf8527ead4d63c3d3c633cede273b09ca67d2e29b2fcd9c23318a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ7HTTM2%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCREhLtZasf666R%2FlRFCVcCZD%2FmbKGeEz1NoO%2BaydVo8wIgfUtakfg16f4e7IhM8E1X2vUQwv3kaOZvvwSYzAKIKRsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCw6gy4J%2B3n7OWbPSrcA0zk%2BcEGQnRSkSJQ64VvFw3NAvrOIckUukej%2FOkCneX4xzqHV%2BeSH4zO9O4N9CejlHLDEwedO5XxCd9FmSAaiDDa675nBsP745oaECWqxC5%2FlFO8tu2Su%2FsUyYkb8fzQ8ry8YH9k2FA3gNleVzXTKzTIN0CJfQQq2ljOrycvFjRoZfj5kEJijJAhbqrwcLceA1GOUgEoFsvPNrTfNrAMTdE%2B8h98YwY55oIah2ovVMZY34DZ5bdv9K2ZNtB3QilJpmnTpkI67oxwxfJrD6%2Ficrz8znHcWdFVD2G6CxYs23LujetIB3RcedfdJHA4kfkvIU09fjxGnKBnHKNF7bSk0gNINp%2Blp0T%2FgjDif%2BApUzkeNOBOhtN668yYRH97BN26uiQfnp9WEMeC2dWhcoIYy2AiJm%2BYtP4I9yvYKJlf7YtH1yjXEtG9uTPm6r6T2oEr0N1buWryPLK7YICb%2Fl0d%2FRGCaPMsLEI6V6%2B35KtVc7wqC%2BLekKGJ39DWMW9KMfEu%2F1ZTdakhnC%2BKpudoCAK3sNEni8f3H%2FW%2FAXanKl2vKqm3n6yoUrsrdkxF%2FX1AcoTP4rTyr2oZ9mxTxGKqQ8BwYrsavcafLtarMZCF74DfMMaA8VpEGoMb2Yy0KOBwMJSs28cGOqUBkJA928aiYdu2G8MiDOMYVtU7j1LVXZekzMnoWaICA184UAEvFxKUHQpJEigtg6vi7U7llnTcvrfu1s88YVZWDoc%2FB1QTfMYh%2F0yNWzLj7ZUMQvzYXps79pMjDfeWQyDctMt2EWkL222uJ27dUaVoGfSfd6pxFT7Vdvy7uc0Em07p4mJadAG7%2FpxBtdmes2tLL1CdBrk29RDoQL1X55HEO6EZJBpL&X-Amz-Signature=b54a101e5fe20d1f346f4036e83318677618399e3c50e858f9ebf31ba848b5b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ7HTTM2%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCREhLtZasf666R%2FlRFCVcCZD%2FmbKGeEz1NoO%2BaydVo8wIgfUtakfg16f4e7IhM8E1X2vUQwv3kaOZvvwSYzAKIKRsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCw6gy4J%2B3n7OWbPSrcA0zk%2BcEGQnRSkSJQ64VvFw3NAvrOIckUukej%2FOkCneX4xzqHV%2BeSH4zO9O4N9CejlHLDEwedO5XxCd9FmSAaiDDa675nBsP745oaECWqxC5%2FlFO8tu2Su%2FsUyYkb8fzQ8ry8YH9k2FA3gNleVzXTKzTIN0CJfQQq2ljOrycvFjRoZfj5kEJijJAhbqrwcLceA1GOUgEoFsvPNrTfNrAMTdE%2B8h98YwY55oIah2ovVMZY34DZ5bdv9K2ZNtB3QilJpmnTpkI67oxwxfJrD6%2Ficrz8znHcWdFVD2G6CxYs23LujetIB3RcedfdJHA4kfkvIU09fjxGnKBnHKNF7bSk0gNINp%2Blp0T%2FgjDif%2BApUzkeNOBOhtN668yYRH97BN26uiQfnp9WEMeC2dWhcoIYy2AiJm%2BYtP4I9yvYKJlf7YtH1yjXEtG9uTPm6r6T2oEr0N1buWryPLK7YICb%2Fl0d%2FRGCaPMsLEI6V6%2B35KtVc7wqC%2BLekKGJ39DWMW9KMfEu%2F1ZTdakhnC%2BKpudoCAK3sNEni8f3H%2FW%2FAXanKl2vKqm3n6yoUrsrdkxF%2FX1AcoTP4rTyr2oZ9mxTxGKqQ8BwYrsavcafLtarMZCF74DfMMaA8VpEGoMb2Yy0KOBwMJSs28cGOqUBkJA928aiYdu2G8MiDOMYVtU7j1LVXZekzMnoWaICA184UAEvFxKUHQpJEigtg6vi7U7llnTcvrfu1s88YVZWDoc%2FB1QTfMYh%2F0yNWzLj7ZUMQvzYXps79pMjDfeWQyDctMt2EWkL222uJ27dUaVoGfSfd6pxFT7Vdvy7uc0Em07p4mJadAG7%2FpxBtdmes2tLL1CdBrk29RDoQL1X55HEO6EZJBpL&X-Amz-Signature=0d73a3cc5a287277948d551c0a4552a20cd8c2ba95a07d45a16a0620c320d89b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ7HTTM2%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCREhLtZasf666R%2FlRFCVcCZD%2FmbKGeEz1NoO%2BaydVo8wIgfUtakfg16f4e7IhM8E1X2vUQwv3kaOZvvwSYzAKIKRsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCw6gy4J%2B3n7OWbPSrcA0zk%2BcEGQnRSkSJQ64VvFw3NAvrOIckUukej%2FOkCneX4xzqHV%2BeSH4zO9O4N9CejlHLDEwedO5XxCd9FmSAaiDDa675nBsP745oaECWqxC5%2FlFO8tu2Su%2FsUyYkb8fzQ8ry8YH9k2FA3gNleVzXTKzTIN0CJfQQq2ljOrycvFjRoZfj5kEJijJAhbqrwcLceA1GOUgEoFsvPNrTfNrAMTdE%2B8h98YwY55oIah2ovVMZY34DZ5bdv9K2ZNtB3QilJpmnTpkI67oxwxfJrD6%2Ficrz8znHcWdFVD2G6CxYs23LujetIB3RcedfdJHA4kfkvIU09fjxGnKBnHKNF7bSk0gNINp%2Blp0T%2FgjDif%2BApUzkeNOBOhtN668yYRH97BN26uiQfnp9WEMeC2dWhcoIYy2AiJm%2BYtP4I9yvYKJlf7YtH1yjXEtG9uTPm6r6T2oEr0N1buWryPLK7YICb%2Fl0d%2FRGCaPMsLEI6V6%2B35KtVc7wqC%2BLekKGJ39DWMW9KMfEu%2F1ZTdakhnC%2BKpudoCAK3sNEni8f3H%2FW%2FAXanKl2vKqm3n6yoUrsrdkxF%2FX1AcoTP4rTyr2oZ9mxTxGKqQ8BwYrsavcafLtarMZCF74DfMMaA8VpEGoMb2Yy0KOBwMJSs28cGOqUBkJA928aiYdu2G8MiDOMYVtU7j1LVXZekzMnoWaICA184UAEvFxKUHQpJEigtg6vi7U7llnTcvrfu1s88YVZWDoc%2FB1QTfMYh%2F0yNWzLj7ZUMQvzYXps79pMjDfeWQyDctMt2EWkL222uJ27dUaVoGfSfd6pxFT7Vdvy7uc0Em07p4mJadAG7%2FpxBtdmes2tLL1CdBrk29RDoQL1X55HEO6EZJBpL&X-Amz-Signature=67b70d57b7901db2446d7b59afa42630e4dd6dd75a85d72574f9cbd7239dee2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3WQXA3D%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAggQ%2FmF5%2FfZatq0KBSUhK0QKZ%2BY3ErFXUxzm9ZjooayAiEA2JvFUS1sB%2B1arusSgU8ciDdwqtV5xMV%2FQOVuoKG9g%2BsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKKbQ6EqaSwTnQIQ%2BSrcAyOk1rw8dqXosL6YlkzgYwWTCAe3mWU3NY6zPljZL615Sx2C10ypo0mZdRvuYXl5gxyGo4T2rb1oHkUD6lkJZxEzP70cj%2BkcdctRpaHf1nKyQnvgJDfnWhQFG3LvKJjXQg32MCRhNVH7Y0vnHfUv2OsO%2B7gp02U%2Bj5Qj8tjm%2BXHXxXLehCB7BG30gr6uui1giM5S5ZOuWH17hFv91OynJi9H2SUBOeN7n42lT%2FUkK0G9qaPMp02SqFAGEW2TODNySymPeZMvtyEruZ2h55vUfZQMDx2QWkWhw%2FkKlfSVwirzH7XsgA2AkM58JjNPoGOPqzoGAk9kRnHbV8gallm6VnfokmXpABcWP2SIR4%2Fqh%2Fy4y1fd58amCMQmWTVr6C5kz2wxy23OtnCA%2BEzZ91wF%2BUGu9TgEY%2FkyWv57%2BCWP%2BGC0Di%2FnK821n8WTAQlhnPwNPjEvJFahncxmj2jHerLdeabdniKCtJej0kLzychOWM64djJrHH43lMzgUrAYfay8JSwehnbz1NShx2D4VokQ%2BA2aNuNTuEaPmjpRZOGE97b8900ltpV7xSkMigwriLB3Mh1Xe12aZhZ1JpNAxTAZ2VFSmj8XRplIz6XugtynAjfNXyGsZPnBYgpIFCTSMLKt28cGOqUBSpqc7XWiAFITnJsqTN9e5sxGjzoTOnhk35EkTrlGc%2B4NRiBu1pfL20qrs7p2fFLKsTJGxT3YlG7NFjoYYHYnreKWSvm0rN82GGWEdw1jRZSriG3usA0%2B2HBynWp865%2FpgFMhxPjhVUeXbwMU1%2F%2F7B%2FQZ3T%2FdxbcNAz9tg6Tl7tfu9KXAlgAN9uuFsdMhGx7gY0eEpZHBhfvHrdIGS2SkjWbCBiOT&X-Amz-Signature=b5c80005df5139fb2fe212efd2b145a0c48524648e1fc3d8a44b289678869669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ7HTTM2%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCREhLtZasf666R%2FlRFCVcCZD%2FmbKGeEz1NoO%2BaydVo8wIgfUtakfg16f4e7IhM8E1X2vUQwv3kaOZvvwSYzAKIKRsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCw6gy4J%2B3n7OWbPSrcA0zk%2BcEGQnRSkSJQ64VvFw3NAvrOIckUukej%2FOkCneX4xzqHV%2BeSH4zO9O4N9CejlHLDEwedO5XxCd9FmSAaiDDa675nBsP745oaECWqxC5%2FlFO8tu2Su%2FsUyYkb8fzQ8ry8YH9k2FA3gNleVzXTKzTIN0CJfQQq2ljOrycvFjRoZfj5kEJijJAhbqrwcLceA1GOUgEoFsvPNrTfNrAMTdE%2B8h98YwY55oIah2ovVMZY34DZ5bdv9K2ZNtB3QilJpmnTpkI67oxwxfJrD6%2Ficrz8znHcWdFVD2G6CxYs23LujetIB3RcedfdJHA4kfkvIU09fjxGnKBnHKNF7bSk0gNINp%2Blp0T%2FgjDif%2BApUzkeNOBOhtN668yYRH97BN26uiQfnp9WEMeC2dWhcoIYy2AiJm%2BYtP4I9yvYKJlf7YtH1yjXEtG9uTPm6r6T2oEr0N1buWryPLK7YICb%2Fl0d%2FRGCaPMsLEI6V6%2B35KtVc7wqC%2BLekKGJ39DWMW9KMfEu%2F1ZTdakhnC%2BKpudoCAK3sNEni8f3H%2FW%2FAXanKl2vKqm3n6yoUrsrdkxF%2FX1AcoTP4rTyr2oZ9mxTxGKqQ8BwYrsavcafLtarMZCF74DfMMaA8VpEGoMb2Yy0KOBwMJSs28cGOqUBkJA928aiYdu2G8MiDOMYVtU7j1LVXZekzMnoWaICA184UAEvFxKUHQpJEigtg6vi7U7llnTcvrfu1s88YVZWDoc%2FB1QTfMYh%2F0yNWzLj7ZUMQvzYXps79pMjDfeWQyDctMt2EWkL222uJ27dUaVoGfSfd6pxFT7Vdvy7uc0Em07p4mJadAG7%2FpxBtdmes2tLL1CdBrk29RDoQL1X55HEO6EZJBpL&X-Amz-Signature=3416be9ae6354ade8456ab6c408d6c60249a2c47da92326cf0f737f002568173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ7HTTM2%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCREhLtZasf666R%2FlRFCVcCZD%2FmbKGeEz1NoO%2BaydVo8wIgfUtakfg16f4e7IhM8E1X2vUQwv3kaOZvvwSYzAKIKRsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCw6gy4J%2B3n7OWbPSrcA0zk%2BcEGQnRSkSJQ64VvFw3NAvrOIckUukej%2FOkCneX4xzqHV%2BeSH4zO9O4N9CejlHLDEwedO5XxCd9FmSAaiDDa675nBsP745oaECWqxC5%2FlFO8tu2Su%2FsUyYkb8fzQ8ry8YH9k2FA3gNleVzXTKzTIN0CJfQQq2ljOrycvFjRoZfj5kEJijJAhbqrwcLceA1GOUgEoFsvPNrTfNrAMTdE%2B8h98YwY55oIah2ovVMZY34DZ5bdv9K2ZNtB3QilJpmnTpkI67oxwxfJrD6%2Ficrz8znHcWdFVD2G6CxYs23LujetIB3RcedfdJHA4kfkvIU09fjxGnKBnHKNF7bSk0gNINp%2Blp0T%2FgjDif%2BApUzkeNOBOhtN668yYRH97BN26uiQfnp9WEMeC2dWhcoIYy2AiJm%2BYtP4I9yvYKJlf7YtH1yjXEtG9uTPm6r6T2oEr0N1buWryPLK7YICb%2Fl0d%2FRGCaPMsLEI6V6%2B35KtVc7wqC%2BLekKGJ39DWMW9KMfEu%2F1ZTdakhnC%2BKpudoCAK3sNEni8f3H%2FW%2FAXanKl2vKqm3n6yoUrsrdkxF%2FX1AcoTP4rTyr2oZ9mxTxGKqQ8BwYrsavcafLtarMZCF74DfMMaA8VpEGoMb2Yy0KOBwMJSs28cGOqUBkJA928aiYdu2G8MiDOMYVtU7j1LVXZekzMnoWaICA184UAEvFxKUHQpJEigtg6vi7U7llnTcvrfu1s88YVZWDoc%2FB1QTfMYh%2F0yNWzLj7ZUMQvzYXps79pMjDfeWQyDctMt2EWkL222uJ27dUaVoGfSfd6pxFT7Vdvy7uc0Em07p4mJadAG7%2FpxBtdmes2tLL1CdBrk29RDoQL1X55HEO6EZJBpL&X-Amz-Signature=3cf6d3b57efe1a37946ac55b9a8d5bb93c4b75c94d5aa5794a017691aefb2d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ7HTTM2%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCREhLtZasf666R%2FlRFCVcCZD%2FmbKGeEz1NoO%2BaydVo8wIgfUtakfg16f4e7IhM8E1X2vUQwv3kaOZvvwSYzAKIKRsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCw6gy4J%2B3n7OWbPSrcA0zk%2BcEGQnRSkSJQ64VvFw3NAvrOIckUukej%2FOkCneX4xzqHV%2BeSH4zO9O4N9CejlHLDEwedO5XxCd9FmSAaiDDa675nBsP745oaECWqxC5%2FlFO8tu2Su%2FsUyYkb8fzQ8ry8YH9k2FA3gNleVzXTKzTIN0CJfQQq2ljOrycvFjRoZfj5kEJijJAhbqrwcLceA1GOUgEoFsvPNrTfNrAMTdE%2B8h98YwY55oIah2ovVMZY34DZ5bdv9K2ZNtB3QilJpmnTpkI67oxwxfJrD6%2Ficrz8znHcWdFVD2G6CxYs23LujetIB3RcedfdJHA4kfkvIU09fjxGnKBnHKNF7bSk0gNINp%2Blp0T%2FgjDif%2BApUzkeNOBOhtN668yYRH97BN26uiQfnp9WEMeC2dWhcoIYy2AiJm%2BYtP4I9yvYKJlf7YtH1yjXEtG9uTPm6r6T2oEr0N1buWryPLK7YICb%2Fl0d%2FRGCaPMsLEI6V6%2B35KtVc7wqC%2BLekKGJ39DWMW9KMfEu%2F1ZTdakhnC%2BKpudoCAK3sNEni8f3H%2FW%2FAXanKl2vKqm3n6yoUrsrdkxF%2FX1AcoTP4rTyr2oZ9mxTxGKqQ8BwYrsavcafLtarMZCF74DfMMaA8VpEGoMb2Yy0KOBwMJSs28cGOqUBkJA928aiYdu2G8MiDOMYVtU7j1LVXZekzMnoWaICA184UAEvFxKUHQpJEigtg6vi7U7llnTcvrfu1s88YVZWDoc%2FB1QTfMYh%2F0yNWzLj7ZUMQvzYXps79pMjDfeWQyDctMt2EWkL222uJ27dUaVoGfSfd6pxFT7Vdvy7uc0Em07p4mJadAG7%2FpxBtdmes2tLL1CdBrk29RDoQL1X55HEO6EZJBpL&X-Amz-Signature=4b97755e95b503be289a4fc824fd9d070b4c70e31d69c13cfde0be6f8654fc00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ7HTTM2%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCREhLtZasf666R%2FlRFCVcCZD%2FmbKGeEz1NoO%2BaydVo8wIgfUtakfg16f4e7IhM8E1X2vUQwv3kaOZvvwSYzAKIKRsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCw6gy4J%2B3n7OWbPSrcA0zk%2BcEGQnRSkSJQ64VvFw3NAvrOIckUukej%2FOkCneX4xzqHV%2BeSH4zO9O4N9CejlHLDEwedO5XxCd9FmSAaiDDa675nBsP745oaECWqxC5%2FlFO8tu2Su%2FsUyYkb8fzQ8ry8YH9k2FA3gNleVzXTKzTIN0CJfQQq2ljOrycvFjRoZfj5kEJijJAhbqrwcLceA1GOUgEoFsvPNrTfNrAMTdE%2B8h98YwY55oIah2ovVMZY34DZ5bdv9K2ZNtB3QilJpmnTpkI67oxwxfJrD6%2Ficrz8znHcWdFVD2G6CxYs23LujetIB3RcedfdJHA4kfkvIU09fjxGnKBnHKNF7bSk0gNINp%2Blp0T%2FgjDif%2BApUzkeNOBOhtN668yYRH97BN26uiQfnp9WEMeC2dWhcoIYy2AiJm%2BYtP4I9yvYKJlf7YtH1yjXEtG9uTPm6r6T2oEr0N1buWryPLK7YICb%2Fl0d%2FRGCaPMsLEI6V6%2B35KtVc7wqC%2BLekKGJ39DWMW9KMfEu%2F1ZTdakhnC%2BKpudoCAK3sNEni8f3H%2FW%2FAXanKl2vKqm3n6yoUrsrdkxF%2FX1AcoTP4rTyr2oZ9mxTxGKqQ8BwYrsavcafLtarMZCF74DfMMaA8VpEGoMb2Yy0KOBwMJSs28cGOqUBkJA928aiYdu2G8MiDOMYVtU7j1LVXZekzMnoWaICA184UAEvFxKUHQpJEigtg6vi7U7llnTcvrfu1s88YVZWDoc%2FB1QTfMYh%2F0yNWzLj7ZUMQvzYXps79pMjDfeWQyDctMt2EWkL222uJ27dUaVoGfSfd6pxFT7Vdvy7uc0Em07p4mJadAG7%2FpxBtdmes2tLL1CdBrk29RDoQL1X55HEO6EZJBpL&X-Amz-Signature=7834f396c1295d0c104dd6fb000ce3c30026ff53672f09414069fec954ecdbbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ7HTTM2%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCREhLtZasf666R%2FlRFCVcCZD%2FmbKGeEz1NoO%2BaydVo8wIgfUtakfg16f4e7IhM8E1X2vUQwv3kaOZvvwSYzAKIKRsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCw6gy4J%2B3n7OWbPSrcA0zk%2BcEGQnRSkSJQ64VvFw3NAvrOIckUukej%2FOkCneX4xzqHV%2BeSH4zO9O4N9CejlHLDEwedO5XxCd9FmSAaiDDa675nBsP745oaECWqxC5%2FlFO8tu2Su%2FsUyYkb8fzQ8ry8YH9k2FA3gNleVzXTKzTIN0CJfQQq2ljOrycvFjRoZfj5kEJijJAhbqrwcLceA1GOUgEoFsvPNrTfNrAMTdE%2B8h98YwY55oIah2ovVMZY34DZ5bdv9K2ZNtB3QilJpmnTpkI67oxwxfJrD6%2Ficrz8znHcWdFVD2G6CxYs23LujetIB3RcedfdJHA4kfkvIU09fjxGnKBnHKNF7bSk0gNINp%2Blp0T%2FgjDif%2BApUzkeNOBOhtN668yYRH97BN26uiQfnp9WEMeC2dWhcoIYy2AiJm%2BYtP4I9yvYKJlf7YtH1yjXEtG9uTPm6r6T2oEr0N1buWryPLK7YICb%2Fl0d%2FRGCaPMsLEI6V6%2B35KtVc7wqC%2BLekKGJ39DWMW9KMfEu%2F1ZTdakhnC%2BKpudoCAK3sNEni8f3H%2FW%2FAXanKl2vKqm3n6yoUrsrdkxF%2FX1AcoTP4rTyr2oZ9mxTxGKqQ8BwYrsavcafLtarMZCF74DfMMaA8VpEGoMb2Yy0KOBwMJSs28cGOqUBkJA928aiYdu2G8MiDOMYVtU7j1LVXZekzMnoWaICA184UAEvFxKUHQpJEigtg6vi7U7llnTcvrfu1s88YVZWDoc%2FB1QTfMYh%2F0yNWzLj7ZUMQvzYXps79pMjDfeWQyDctMt2EWkL222uJ27dUaVoGfSfd6pxFT7Vdvy7uc0Em07p4mJadAG7%2FpxBtdmes2tLL1CdBrk29RDoQL1X55HEO6EZJBpL&X-Amz-Signature=b63bbed55d1cb6018bdbd6987fd3f18bfc4d985b1a18fb5768c29f1bf2e2ae2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ7HTTM2%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCREhLtZasf666R%2FlRFCVcCZD%2FmbKGeEz1NoO%2BaydVo8wIgfUtakfg16f4e7IhM8E1X2vUQwv3kaOZvvwSYzAKIKRsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCw6gy4J%2B3n7OWbPSrcA0zk%2BcEGQnRSkSJQ64VvFw3NAvrOIckUukej%2FOkCneX4xzqHV%2BeSH4zO9O4N9CejlHLDEwedO5XxCd9FmSAaiDDa675nBsP745oaECWqxC5%2FlFO8tu2Su%2FsUyYkb8fzQ8ry8YH9k2FA3gNleVzXTKzTIN0CJfQQq2ljOrycvFjRoZfj5kEJijJAhbqrwcLceA1GOUgEoFsvPNrTfNrAMTdE%2B8h98YwY55oIah2ovVMZY34DZ5bdv9K2ZNtB3QilJpmnTpkI67oxwxfJrD6%2Ficrz8znHcWdFVD2G6CxYs23LujetIB3RcedfdJHA4kfkvIU09fjxGnKBnHKNF7bSk0gNINp%2Blp0T%2FgjDif%2BApUzkeNOBOhtN668yYRH97BN26uiQfnp9WEMeC2dWhcoIYy2AiJm%2BYtP4I9yvYKJlf7YtH1yjXEtG9uTPm6r6T2oEr0N1buWryPLK7YICb%2Fl0d%2FRGCaPMsLEI6V6%2B35KtVc7wqC%2BLekKGJ39DWMW9KMfEu%2F1ZTdakhnC%2BKpudoCAK3sNEni8f3H%2FW%2FAXanKl2vKqm3n6yoUrsrdkxF%2FX1AcoTP4rTyr2oZ9mxTxGKqQ8BwYrsavcafLtarMZCF74DfMMaA8VpEGoMb2Yy0KOBwMJSs28cGOqUBkJA928aiYdu2G8MiDOMYVtU7j1LVXZekzMnoWaICA184UAEvFxKUHQpJEigtg6vi7U7llnTcvrfu1s88YVZWDoc%2FB1QTfMYh%2F0yNWzLj7ZUMQvzYXps79pMjDfeWQyDctMt2EWkL222uJ27dUaVoGfSfd6pxFT7Vdvy7uc0Em07p4mJadAG7%2FpxBtdmes2tLL1CdBrk29RDoQL1X55HEO6EZJBpL&X-Amz-Signature=8513a7507726e05491151166417d8f65ae2742e71725a36b9958773cdb2cac8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


