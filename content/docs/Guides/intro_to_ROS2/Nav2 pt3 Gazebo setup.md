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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCNV64UP%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3rmGV%2FMJWC9zrTy9OCpL34N%2BOxmf3dal7%2BNyDRNBK8wIhAP%2FHvGflqT91rk5S%2F4MFzSz735nW4fi2%2B5kGMyz%2F2vXHKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUKvveJuB864ZMgO4q3APzwLIhzT1C0U84C0cabWts0bYK0IgBwMlClc0jtAPiOdmKzxbDqVdE4QS1ezc1MCMFu4WwOvfpEi5fub%2BpjH5zUf%2B9Ztllah1y%2FXwT4TgF4%2FI63IdvTV%2F27UOIhkJgse6hsUqY6XXH3Ojn8XZR2hTfMuo%2FbrRF1aH4iO4KCBxGAB346HxoJZSeGl7RVKcHazi9z0w1MYPI1JsI93LwKCEup0gffw%2FGAG4BSZPU%2Bl3xegahrDA%2FujV%2FSQhMqML6TDPeCgfnG5p5epOcguer0PMECJDJxwkFL53e4%2BzeBkoPv4IOB1q7p4sToxDIq8tYTGLfPiN81MJAHuxNj7j3cN8YmzfzZt9RcxS5lVnLjYOd%2B4PvD%2FFo5vFic%2F9OwhKEwK09avDqEDIxcm77HsORr8y1pM7S7XCxNKlQQTNiuMnhKALVYmrxurFFaawYgMbGkwo84DOSrsyj5W%2Br4MBDdtqnIVxpEsSbMFe6An7Yrikfinmwr1v7xlSMJdqS8FKrmB7KSWAF%2BNr7oa5R1Fv604IpAdyD5Fm1XI%2FUgQki5hCVlTpe9fZoAQawo%2F57bm4PEtWZRKQL7fEkVxu3kyXXfDQKnvW%2F76g0u1olID6hjVzgcKc9rJAHDKD35nlRSDCv89HKBjqkAfbDPQ4p1YfeqqO0oEEa%2BBzoPrjD%2FQso5quxnnRsnMqP73gOavtMuVIBO%2BopBrlKsVadt8sgryOEB2pVqNPvvrIgP4h2xd%2FklQPKwDUriEoME4rLSjEjHMpGNNJVpUI3FeFlVB6nOp4OWRHyEVanbuqlMoOVFTLySsEQBH3NJwmyca7bUwRWnIHHhPytXbP9ge0FmtQb4LBTxHZSaGaR7uZEyaFr&X-Amz-Signature=5e3c05d058f9ea951ff097590cdb9efbb4c40c4a53c31cc0c764434e2e78389e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCNV64UP%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3rmGV%2FMJWC9zrTy9OCpL34N%2BOxmf3dal7%2BNyDRNBK8wIhAP%2FHvGflqT91rk5S%2F4MFzSz735nW4fi2%2B5kGMyz%2F2vXHKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUKvveJuB864ZMgO4q3APzwLIhzT1C0U84C0cabWts0bYK0IgBwMlClc0jtAPiOdmKzxbDqVdE4QS1ezc1MCMFu4WwOvfpEi5fub%2BpjH5zUf%2B9Ztllah1y%2FXwT4TgF4%2FI63IdvTV%2F27UOIhkJgse6hsUqY6XXH3Ojn8XZR2hTfMuo%2FbrRF1aH4iO4KCBxGAB346HxoJZSeGl7RVKcHazi9z0w1MYPI1JsI93LwKCEup0gffw%2FGAG4BSZPU%2Bl3xegahrDA%2FujV%2FSQhMqML6TDPeCgfnG5p5epOcguer0PMECJDJxwkFL53e4%2BzeBkoPv4IOB1q7p4sToxDIq8tYTGLfPiN81MJAHuxNj7j3cN8YmzfzZt9RcxS5lVnLjYOd%2B4PvD%2FFo5vFic%2F9OwhKEwK09avDqEDIxcm77HsORr8y1pM7S7XCxNKlQQTNiuMnhKALVYmrxurFFaawYgMbGkwo84DOSrsyj5W%2Br4MBDdtqnIVxpEsSbMFe6An7Yrikfinmwr1v7xlSMJdqS8FKrmB7KSWAF%2BNr7oa5R1Fv604IpAdyD5Fm1XI%2FUgQki5hCVlTpe9fZoAQawo%2F57bm4PEtWZRKQL7fEkVxu3kyXXfDQKnvW%2F76g0u1olID6hjVzgcKc9rJAHDKD35nlRSDCv89HKBjqkAfbDPQ4p1YfeqqO0oEEa%2BBzoPrjD%2FQso5quxnnRsnMqP73gOavtMuVIBO%2BopBrlKsVadt8sgryOEB2pVqNPvvrIgP4h2xd%2FklQPKwDUriEoME4rLSjEjHMpGNNJVpUI3FeFlVB6nOp4OWRHyEVanbuqlMoOVFTLySsEQBH3NJwmyca7bUwRWnIHHhPytXbP9ge0FmtQb4LBTxHZSaGaR7uZEyaFr&X-Amz-Signature=87a4f4a4f26dc74104e5131b717ae8dc4e9f500fd104263bd9c27340e92acf1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCNV64UP%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3rmGV%2FMJWC9zrTy9OCpL34N%2BOxmf3dal7%2BNyDRNBK8wIhAP%2FHvGflqT91rk5S%2F4MFzSz735nW4fi2%2B5kGMyz%2F2vXHKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUKvveJuB864ZMgO4q3APzwLIhzT1C0U84C0cabWts0bYK0IgBwMlClc0jtAPiOdmKzxbDqVdE4QS1ezc1MCMFu4WwOvfpEi5fub%2BpjH5zUf%2B9Ztllah1y%2FXwT4TgF4%2FI63IdvTV%2F27UOIhkJgse6hsUqY6XXH3Ojn8XZR2hTfMuo%2FbrRF1aH4iO4KCBxGAB346HxoJZSeGl7RVKcHazi9z0w1MYPI1JsI93LwKCEup0gffw%2FGAG4BSZPU%2Bl3xegahrDA%2FujV%2FSQhMqML6TDPeCgfnG5p5epOcguer0PMECJDJxwkFL53e4%2BzeBkoPv4IOB1q7p4sToxDIq8tYTGLfPiN81MJAHuxNj7j3cN8YmzfzZt9RcxS5lVnLjYOd%2B4PvD%2FFo5vFic%2F9OwhKEwK09avDqEDIxcm77HsORr8y1pM7S7XCxNKlQQTNiuMnhKALVYmrxurFFaawYgMbGkwo84DOSrsyj5W%2Br4MBDdtqnIVxpEsSbMFe6An7Yrikfinmwr1v7xlSMJdqS8FKrmB7KSWAF%2BNr7oa5R1Fv604IpAdyD5Fm1XI%2FUgQki5hCVlTpe9fZoAQawo%2F57bm4PEtWZRKQL7fEkVxu3kyXXfDQKnvW%2F76g0u1olID6hjVzgcKc9rJAHDKD35nlRSDCv89HKBjqkAfbDPQ4p1YfeqqO0oEEa%2BBzoPrjD%2FQso5quxnnRsnMqP73gOavtMuVIBO%2BopBrlKsVadt8sgryOEB2pVqNPvvrIgP4h2xd%2FklQPKwDUriEoME4rLSjEjHMpGNNJVpUI3FeFlVB6nOp4OWRHyEVanbuqlMoOVFTLySsEQBH3NJwmyca7bUwRWnIHHhPytXbP9ge0FmtQb4LBTxHZSaGaR7uZEyaFr&X-Amz-Signature=368a9d954a7dc76820006dce4bf9cf1e74d70293c10b710610cb7315b52feee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCNV64UP%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3rmGV%2FMJWC9zrTy9OCpL34N%2BOxmf3dal7%2BNyDRNBK8wIhAP%2FHvGflqT91rk5S%2F4MFzSz735nW4fi2%2B5kGMyz%2F2vXHKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUKvveJuB864ZMgO4q3APzwLIhzT1C0U84C0cabWts0bYK0IgBwMlClc0jtAPiOdmKzxbDqVdE4QS1ezc1MCMFu4WwOvfpEi5fub%2BpjH5zUf%2B9Ztllah1y%2FXwT4TgF4%2FI63IdvTV%2F27UOIhkJgse6hsUqY6XXH3Ojn8XZR2hTfMuo%2FbrRF1aH4iO4KCBxGAB346HxoJZSeGl7RVKcHazi9z0w1MYPI1JsI93LwKCEup0gffw%2FGAG4BSZPU%2Bl3xegahrDA%2FujV%2FSQhMqML6TDPeCgfnG5p5epOcguer0PMECJDJxwkFL53e4%2BzeBkoPv4IOB1q7p4sToxDIq8tYTGLfPiN81MJAHuxNj7j3cN8YmzfzZt9RcxS5lVnLjYOd%2B4PvD%2FFo5vFic%2F9OwhKEwK09avDqEDIxcm77HsORr8y1pM7S7XCxNKlQQTNiuMnhKALVYmrxurFFaawYgMbGkwo84DOSrsyj5W%2Br4MBDdtqnIVxpEsSbMFe6An7Yrikfinmwr1v7xlSMJdqS8FKrmB7KSWAF%2BNr7oa5R1Fv604IpAdyD5Fm1XI%2FUgQki5hCVlTpe9fZoAQawo%2F57bm4PEtWZRKQL7fEkVxu3kyXXfDQKnvW%2F76g0u1olID6hjVzgcKc9rJAHDKD35nlRSDCv89HKBjqkAfbDPQ4p1YfeqqO0oEEa%2BBzoPrjD%2FQso5quxnnRsnMqP73gOavtMuVIBO%2BopBrlKsVadt8sgryOEB2pVqNPvvrIgP4h2xd%2FklQPKwDUriEoME4rLSjEjHMpGNNJVpUI3FeFlVB6nOp4OWRHyEVanbuqlMoOVFTLySsEQBH3NJwmyca7bUwRWnIHHhPytXbP9ge0FmtQb4LBTxHZSaGaR7uZEyaFr&X-Amz-Signature=8bdb9b39958d0b71a09fd56edf7e5bd4b0d53385bb1520ba1ab85444ea014e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G4FWNZ5%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7O44MVacrNABBdxV8oPpRXnmWwHGeAlLA%2F1Vx83NWwQIhAI%2BKQnODJnai%2FBIk%2Fw10SwZ%2B%2BtMJyzmzgBjifz2dQa%2BnKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2B2ZyOgjfOQjU8%2BAq3AMJKxdItEUmYppMdHqFPbHGmwS7rLxgBmmdMQL75p0rSq0iD3ExSi6okBHEXUoVjEjdapvuuwUKeTzRt%2BxLACF%2BWmPG1Xvge%2B6NbMEwLpPDBMIu7AtDGEuqJ6cUWu9HlCqZFgI98Zn%2B1wFUZwSYPiW%2F9b0mHSYs6es8MhElcEg1DhwMHO7NUnQ8GukEjGqac0cFS2BeMqIMhWVas2lU3F%2BCbSXm5EgvXAKbmod6Pb91mPMKgUxRIZ5A9pLnyJVYrLOkrkH52q%2FmFTyCBkNutqLTBmA8yqaeJeBKpBsrX%2BIk7QNVViGuH1sz7vhuFs8Vhv9P6KgUxOMxIQW%2BHfkXg9eAltYaWv3BtWaoGUkPAdBu7IlegP4RtjfigIcwg%2BqiRAqR1cw4%2BiV2akrZNW0TfYV7STWgXQS5RslO%2F%2FI9IvBXPHRbN25su7dM3tVnupYQbJuaVgqZhId%2Fy5ciu%2FyZPeF3jdLGdXcF8D9EcpKWGxQ%2Bnq5t%2BiYnJlRmhs%2Bz71QghbnRbekHED2hEJeqj3YB00Sa56gG3jLpS%2FNHflYUOxnYSiO1M5Q%2BiT1TaOEYh%2F3o3L%2FXLEdIPJ6deWO%2B%2FwNA3C7jV0HY9utnAKkfKtbpFmRru2cJdfAcL0EY%2FeVDRTDF79HKBjqkAfWHIGXhSnK%2BAu561S1HaXW7M3X3LIACUA6kovqi745ELeCX1k4OvG9j9XSx3JMiB7bYpyicRxiisAV6sNHKB4c5KaWJlHON1%2FS1cD8ujtTuxhc7mrLkrnhM12qn528RA9aT%2Fo1XNpYGUnFvKYWu7EUNJKNWonCmZXvtS%2F6QhJa20goXEDFhSTvo0uLGIVAaRczKiSblvg8wqPr9tZdDh9VXWz3F&X-Amz-Signature=f709279f5fa1f4348069a9b3a427bb8fe3d14856a5d65e7ba94cf2f3a433e18a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCNV64UP%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3rmGV%2FMJWC9zrTy9OCpL34N%2BOxmf3dal7%2BNyDRNBK8wIhAP%2FHvGflqT91rk5S%2F4MFzSz735nW4fi2%2B5kGMyz%2F2vXHKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUKvveJuB864ZMgO4q3APzwLIhzT1C0U84C0cabWts0bYK0IgBwMlClc0jtAPiOdmKzxbDqVdE4QS1ezc1MCMFu4WwOvfpEi5fub%2BpjH5zUf%2B9Ztllah1y%2FXwT4TgF4%2FI63IdvTV%2F27UOIhkJgse6hsUqY6XXH3Ojn8XZR2hTfMuo%2FbrRF1aH4iO4KCBxGAB346HxoJZSeGl7RVKcHazi9z0w1MYPI1JsI93LwKCEup0gffw%2FGAG4BSZPU%2Bl3xegahrDA%2FujV%2FSQhMqML6TDPeCgfnG5p5epOcguer0PMECJDJxwkFL53e4%2BzeBkoPv4IOB1q7p4sToxDIq8tYTGLfPiN81MJAHuxNj7j3cN8YmzfzZt9RcxS5lVnLjYOd%2B4PvD%2FFo5vFic%2F9OwhKEwK09avDqEDIxcm77HsORr8y1pM7S7XCxNKlQQTNiuMnhKALVYmrxurFFaawYgMbGkwo84DOSrsyj5W%2Br4MBDdtqnIVxpEsSbMFe6An7Yrikfinmwr1v7xlSMJdqS8FKrmB7KSWAF%2BNr7oa5R1Fv604IpAdyD5Fm1XI%2FUgQki5hCVlTpe9fZoAQawo%2F57bm4PEtWZRKQL7fEkVxu3kyXXfDQKnvW%2F76g0u1olID6hjVzgcKc9rJAHDKD35nlRSDCv89HKBjqkAfbDPQ4p1YfeqqO0oEEa%2BBzoPrjD%2FQso5quxnnRsnMqP73gOavtMuVIBO%2BopBrlKsVadt8sgryOEB2pVqNPvvrIgP4h2xd%2FklQPKwDUriEoME4rLSjEjHMpGNNJVpUI3FeFlVB6nOp4OWRHyEVanbuqlMoOVFTLySsEQBH3NJwmyca7bUwRWnIHHhPytXbP9ge0FmtQb4LBTxHZSaGaR7uZEyaFr&X-Amz-Signature=63cf4f167149dfca74f6ca546761ca68146a6267fee4e163620819d9cf93f2fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCNV64UP%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3rmGV%2FMJWC9zrTy9OCpL34N%2BOxmf3dal7%2BNyDRNBK8wIhAP%2FHvGflqT91rk5S%2F4MFzSz735nW4fi2%2B5kGMyz%2F2vXHKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUKvveJuB864ZMgO4q3APzwLIhzT1C0U84C0cabWts0bYK0IgBwMlClc0jtAPiOdmKzxbDqVdE4QS1ezc1MCMFu4WwOvfpEi5fub%2BpjH5zUf%2B9Ztllah1y%2FXwT4TgF4%2FI63IdvTV%2F27UOIhkJgse6hsUqY6XXH3Ojn8XZR2hTfMuo%2FbrRF1aH4iO4KCBxGAB346HxoJZSeGl7RVKcHazi9z0w1MYPI1JsI93LwKCEup0gffw%2FGAG4BSZPU%2Bl3xegahrDA%2FujV%2FSQhMqML6TDPeCgfnG5p5epOcguer0PMECJDJxwkFL53e4%2BzeBkoPv4IOB1q7p4sToxDIq8tYTGLfPiN81MJAHuxNj7j3cN8YmzfzZt9RcxS5lVnLjYOd%2B4PvD%2FFo5vFic%2F9OwhKEwK09avDqEDIxcm77HsORr8y1pM7S7XCxNKlQQTNiuMnhKALVYmrxurFFaawYgMbGkwo84DOSrsyj5W%2Br4MBDdtqnIVxpEsSbMFe6An7Yrikfinmwr1v7xlSMJdqS8FKrmB7KSWAF%2BNr7oa5R1Fv604IpAdyD5Fm1XI%2FUgQki5hCVlTpe9fZoAQawo%2F57bm4PEtWZRKQL7fEkVxu3kyXXfDQKnvW%2F76g0u1olID6hjVzgcKc9rJAHDKD35nlRSDCv89HKBjqkAfbDPQ4p1YfeqqO0oEEa%2BBzoPrjD%2FQso5quxnnRsnMqP73gOavtMuVIBO%2BopBrlKsVadt8sgryOEB2pVqNPvvrIgP4h2xd%2FklQPKwDUriEoME4rLSjEjHMpGNNJVpUI3FeFlVB6nOp4OWRHyEVanbuqlMoOVFTLySsEQBH3NJwmyca7bUwRWnIHHhPytXbP9ge0FmtQb4LBTxHZSaGaR7uZEyaFr&X-Amz-Signature=975bbd18f9e5b9f2eb6c0a7fce33aff58443d1e6c785867ccdc02c4a251d2d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCNV64UP%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3rmGV%2FMJWC9zrTy9OCpL34N%2BOxmf3dal7%2BNyDRNBK8wIhAP%2FHvGflqT91rk5S%2F4MFzSz735nW4fi2%2B5kGMyz%2F2vXHKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUKvveJuB864ZMgO4q3APzwLIhzT1C0U84C0cabWts0bYK0IgBwMlClc0jtAPiOdmKzxbDqVdE4QS1ezc1MCMFu4WwOvfpEi5fub%2BpjH5zUf%2B9Ztllah1y%2FXwT4TgF4%2FI63IdvTV%2F27UOIhkJgse6hsUqY6XXH3Ojn8XZR2hTfMuo%2FbrRF1aH4iO4KCBxGAB346HxoJZSeGl7RVKcHazi9z0w1MYPI1JsI93LwKCEup0gffw%2FGAG4BSZPU%2Bl3xegahrDA%2FujV%2FSQhMqML6TDPeCgfnG5p5epOcguer0PMECJDJxwkFL53e4%2BzeBkoPv4IOB1q7p4sToxDIq8tYTGLfPiN81MJAHuxNj7j3cN8YmzfzZt9RcxS5lVnLjYOd%2B4PvD%2FFo5vFic%2F9OwhKEwK09avDqEDIxcm77HsORr8y1pM7S7XCxNKlQQTNiuMnhKALVYmrxurFFaawYgMbGkwo84DOSrsyj5W%2Br4MBDdtqnIVxpEsSbMFe6An7Yrikfinmwr1v7xlSMJdqS8FKrmB7KSWAF%2BNr7oa5R1Fv604IpAdyD5Fm1XI%2FUgQki5hCVlTpe9fZoAQawo%2F57bm4PEtWZRKQL7fEkVxu3kyXXfDQKnvW%2F76g0u1olID6hjVzgcKc9rJAHDKD35nlRSDCv89HKBjqkAfbDPQ4p1YfeqqO0oEEa%2BBzoPrjD%2FQso5quxnnRsnMqP73gOavtMuVIBO%2BopBrlKsVadt8sgryOEB2pVqNPvvrIgP4h2xd%2FklQPKwDUriEoME4rLSjEjHMpGNNJVpUI3FeFlVB6nOp4OWRHyEVanbuqlMoOVFTLySsEQBH3NJwmyca7bUwRWnIHHhPytXbP9ge0FmtQb4LBTxHZSaGaR7uZEyaFr&X-Amz-Signature=05748f9a6fe91aa80d79a5907d794ca022da007596724dc189f3fde8f230105e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCNV64UP%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3rmGV%2FMJWC9zrTy9OCpL34N%2BOxmf3dal7%2BNyDRNBK8wIhAP%2FHvGflqT91rk5S%2F4MFzSz735nW4fi2%2B5kGMyz%2F2vXHKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUKvveJuB864ZMgO4q3APzwLIhzT1C0U84C0cabWts0bYK0IgBwMlClc0jtAPiOdmKzxbDqVdE4QS1ezc1MCMFu4WwOvfpEi5fub%2BpjH5zUf%2B9Ztllah1y%2FXwT4TgF4%2FI63IdvTV%2F27UOIhkJgse6hsUqY6XXH3Ojn8XZR2hTfMuo%2FbrRF1aH4iO4KCBxGAB346HxoJZSeGl7RVKcHazi9z0w1MYPI1JsI93LwKCEup0gffw%2FGAG4BSZPU%2Bl3xegahrDA%2FujV%2FSQhMqML6TDPeCgfnG5p5epOcguer0PMECJDJxwkFL53e4%2BzeBkoPv4IOB1q7p4sToxDIq8tYTGLfPiN81MJAHuxNj7j3cN8YmzfzZt9RcxS5lVnLjYOd%2B4PvD%2FFo5vFic%2F9OwhKEwK09avDqEDIxcm77HsORr8y1pM7S7XCxNKlQQTNiuMnhKALVYmrxurFFaawYgMbGkwo84DOSrsyj5W%2Br4MBDdtqnIVxpEsSbMFe6An7Yrikfinmwr1v7xlSMJdqS8FKrmB7KSWAF%2BNr7oa5R1Fv604IpAdyD5Fm1XI%2FUgQki5hCVlTpe9fZoAQawo%2F57bm4PEtWZRKQL7fEkVxu3kyXXfDQKnvW%2F76g0u1olID6hjVzgcKc9rJAHDKD35nlRSDCv89HKBjqkAfbDPQ4p1YfeqqO0oEEa%2BBzoPrjD%2FQso5quxnnRsnMqP73gOavtMuVIBO%2BopBrlKsVadt8sgryOEB2pVqNPvvrIgP4h2xd%2FklQPKwDUriEoME4rLSjEjHMpGNNJVpUI3FeFlVB6nOp4OWRHyEVanbuqlMoOVFTLySsEQBH3NJwmyca7bUwRWnIHHhPytXbP9ge0FmtQb4LBTxHZSaGaR7uZEyaFr&X-Amz-Signature=1997a2874d67850b5a145ace2e39f1e1327edaed42f783e3bf6ff71a090e59e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCNV64UP%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3rmGV%2FMJWC9zrTy9OCpL34N%2BOxmf3dal7%2BNyDRNBK8wIhAP%2FHvGflqT91rk5S%2F4MFzSz735nW4fi2%2B5kGMyz%2F2vXHKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUKvveJuB864ZMgO4q3APzwLIhzT1C0U84C0cabWts0bYK0IgBwMlClc0jtAPiOdmKzxbDqVdE4QS1ezc1MCMFu4WwOvfpEi5fub%2BpjH5zUf%2B9Ztllah1y%2FXwT4TgF4%2FI63IdvTV%2F27UOIhkJgse6hsUqY6XXH3Ojn8XZR2hTfMuo%2FbrRF1aH4iO4KCBxGAB346HxoJZSeGl7RVKcHazi9z0w1MYPI1JsI93LwKCEup0gffw%2FGAG4BSZPU%2Bl3xegahrDA%2FujV%2FSQhMqML6TDPeCgfnG5p5epOcguer0PMECJDJxwkFL53e4%2BzeBkoPv4IOB1q7p4sToxDIq8tYTGLfPiN81MJAHuxNj7j3cN8YmzfzZt9RcxS5lVnLjYOd%2B4PvD%2FFo5vFic%2F9OwhKEwK09avDqEDIxcm77HsORr8y1pM7S7XCxNKlQQTNiuMnhKALVYmrxurFFaawYgMbGkwo84DOSrsyj5W%2Br4MBDdtqnIVxpEsSbMFe6An7Yrikfinmwr1v7xlSMJdqS8FKrmB7KSWAF%2BNr7oa5R1Fv604IpAdyD5Fm1XI%2FUgQki5hCVlTpe9fZoAQawo%2F57bm4PEtWZRKQL7fEkVxu3kyXXfDQKnvW%2F76g0u1olID6hjVzgcKc9rJAHDKD35nlRSDCv89HKBjqkAfbDPQ4p1YfeqqO0oEEa%2BBzoPrjD%2FQso5quxnnRsnMqP73gOavtMuVIBO%2BopBrlKsVadt8sgryOEB2pVqNPvvrIgP4h2xd%2FklQPKwDUriEoME4rLSjEjHMpGNNJVpUI3FeFlVB6nOp4OWRHyEVanbuqlMoOVFTLySsEQBH3NJwmyca7bUwRWnIHHhPytXbP9ge0FmtQb4LBTxHZSaGaR7uZEyaFr&X-Amz-Signature=1768f8261d1a62cb65f0eefd619533b61324f397bd785f608e6d07cd79cfe1db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCNV64UP%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3rmGV%2FMJWC9zrTy9OCpL34N%2BOxmf3dal7%2BNyDRNBK8wIhAP%2FHvGflqT91rk5S%2F4MFzSz735nW4fi2%2B5kGMyz%2F2vXHKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUKvveJuB864ZMgO4q3APzwLIhzT1C0U84C0cabWts0bYK0IgBwMlClc0jtAPiOdmKzxbDqVdE4QS1ezc1MCMFu4WwOvfpEi5fub%2BpjH5zUf%2B9Ztllah1y%2FXwT4TgF4%2FI63IdvTV%2F27UOIhkJgse6hsUqY6XXH3Ojn8XZR2hTfMuo%2FbrRF1aH4iO4KCBxGAB346HxoJZSeGl7RVKcHazi9z0w1MYPI1JsI93LwKCEup0gffw%2FGAG4BSZPU%2Bl3xegahrDA%2FujV%2FSQhMqML6TDPeCgfnG5p5epOcguer0PMECJDJxwkFL53e4%2BzeBkoPv4IOB1q7p4sToxDIq8tYTGLfPiN81MJAHuxNj7j3cN8YmzfzZt9RcxS5lVnLjYOd%2B4PvD%2FFo5vFic%2F9OwhKEwK09avDqEDIxcm77HsORr8y1pM7S7XCxNKlQQTNiuMnhKALVYmrxurFFaawYgMbGkwo84DOSrsyj5W%2Br4MBDdtqnIVxpEsSbMFe6An7Yrikfinmwr1v7xlSMJdqS8FKrmB7KSWAF%2BNr7oa5R1Fv604IpAdyD5Fm1XI%2FUgQki5hCVlTpe9fZoAQawo%2F57bm4PEtWZRKQL7fEkVxu3kyXXfDQKnvW%2F76g0u1olID6hjVzgcKc9rJAHDKD35nlRSDCv89HKBjqkAfbDPQ4p1YfeqqO0oEEa%2BBzoPrjD%2FQso5quxnnRsnMqP73gOavtMuVIBO%2BopBrlKsVadt8sgryOEB2pVqNPvvrIgP4h2xd%2FklQPKwDUriEoME4rLSjEjHMpGNNJVpUI3FeFlVB6nOp4OWRHyEVanbuqlMoOVFTLySsEQBH3NJwmyca7bUwRWnIHHhPytXbP9ge0FmtQb4LBTxHZSaGaR7uZEyaFr&X-Amz-Signature=3f84a0455333f9edc75da69b3e7d2b80fce01e9bd27e61cb12aba427d6973199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


