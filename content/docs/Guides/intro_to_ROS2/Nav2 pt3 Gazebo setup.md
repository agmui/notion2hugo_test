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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHO6GLD3%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3IWyIEVLvBW%2FI9bQ6HsTTTOJ8dJH6Y2WUrRlglAhzFAiEAutVyg7o3z%2FZEcidM1BETmjaaLxVd%2BXmejUFhXKfKusgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDgBc2c7xb8tuhcWfCrcA%2FeIHhTclEerukr2I61zMGeg3y9KeX1x8cpaDhO2K9TNk8uC%2Bbajt09FRmYIdU%2FHvVaOJ01LhDv%2Fry5sJ2vQZ1MT7%2FQry6hYkUOcm8AVZxG3fkS4%2BG0Wy0IpwMe%2B5YV4%2BvrWwI7mgEQ1eTCkIAo5tHeiGrLlBnDHRWK%2F2xf5AFMM2CUV4RXtltnqiu9WU9VSBtZnFRt%2Fjr6%2FWP1OLa%2FZNUcdlGMk4nNQ1Hve69sZx9gG1OxgYgxRWl%2BxruPVi%2FsfdurcTWT6FEtPj03jrOBkhefPiiWEAv%2B5VaxBBgPRhDpX3q0Rr%2BbhCQ%2FrV27mKLKS0ONnvYtliP0fvTh9d%2FEbmD80Mm0AuOkNcQ70pM2bd5TeXYBzHB774x2nRFJiLzd61GXz3i4mYH3taiR5Wt0yinxtbtEdnQzzJS8ZY7MRotNU0Q0btrPG7B8lKkAb%2BxecWXT6l6EDyLjKopincgVdN5Bz448Jiv3RDxcnE3zLFbf4iJZkMq1Pt%2FytstPpcU2v6y5PRM4i0y6OST9D3cEaFyKK%2FYlGXoeQvnMttnSxWHiwsT4%2FIeJlquqsIkWVtvqQx3WmpgF0JdJqUrBDqm3tUg4qwItWcPoYYS6MDTJEDajeRum6Y%2FFc9Fx5kCYPMLzdqcgGOqUBYZ9yewgDCo78rwm2qNN11MS%2BL9UdIEZv25gB8XD2l0MK1nl10H3ec27o%2BH89PQRPTfDtkfXqsmpvgPb66OsSMwvlbWdJ2edKW8zs%2FJVydruyBgIz%2FF0MEP36fiB9kTbgokfqRaNuwTqF7NhS9xcV0dl5MWT2Hu1rDXNEYDjeIvaJwtfH%2BJlaIEiCZynvWQFeGtONR5yppniEBt%2F%2FVHOzTvx%2BD9Ae&X-Amz-Signature=8df0be9334d9c3e36f3f995b658a3b54a1fac539381fb76861770c94a05a6506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHO6GLD3%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3IWyIEVLvBW%2FI9bQ6HsTTTOJ8dJH6Y2WUrRlglAhzFAiEAutVyg7o3z%2FZEcidM1BETmjaaLxVd%2BXmejUFhXKfKusgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDgBc2c7xb8tuhcWfCrcA%2FeIHhTclEerukr2I61zMGeg3y9KeX1x8cpaDhO2K9TNk8uC%2Bbajt09FRmYIdU%2FHvVaOJ01LhDv%2Fry5sJ2vQZ1MT7%2FQry6hYkUOcm8AVZxG3fkS4%2BG0Wy0IpwMe%2B5YV4%2BvrWwI7mgEQ1eTCkIAo5tHeiGrLlBnDHRWK%2F2xf5AFMM2CUV4RXtltnqiu9WU9VSBtZnFRt%2Fjr6%2FWP1OLa%2FZNUcdlGMk4nNQ1Hve69sZx9gG1OxgYgxRWl%2BxruPVi%2FsfdurcTWT6FEtPj03jrOBkhefPiiWEAv%2B5VaxBBgPRhDpX3q0Rr%2BbhCQ%2FrV27mKLKS0ONnvYtliP0fvTh9d%2FEbmD80Mm0AuOkNcQ70pM2bd5TeXYBzHB774x2nRFJiLzd61GXz3i4mYH3taiR5Wt0yinxtbtEdnQzzJS8ZY7MRotNU0Q0btrPG7B8lKkAb%2BxecWXT6l6EDyLjKopincgVdN5Bz448Jiv3RDxcnE3zLFbf4iJZkMq1Pt%2FytstPpcU2v6y5PRM4i0y6OST9D3cEaFyKK%2FYlGXoeQvnMttnSxWHiwsT4%2FIeJlquqsIkWVtvqQx3WmpgF0JdJqUrBDqm3tUg4qwItWcPoYYS6MDTJEDajeRum6Y%2FFc9Fx5kCYPMLzdqcgGOqUBYZ9yewgDCo78rwm2qNN11MS%2BL9UdIEZv25gB8XD2l0MK1nl10H3ec27o%2BH89PQRPTfDtkfXqsmpvgPb66OsSMwvlbWdJ2edKW8zs%2FJVydruyBgIz%2FF0MEP36fiB9kTbgokfqRaNuwTqF7NhS9xcV0dl5MWT2Hu1rDXNEYDjeIvaJwtfH%2BJlaIEiCZynvWQFeGtONR5yppniEBt%2F%2FVHOzTvx%2BD9Ae&X-Amz-Signature=36abc993a6eb12cd793c0752c22d0f99452831afcdbf70cf8a67da5f89a0e002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHO6GLD3%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3IWyIEVLvBW%2FI9bQ6HsTTTOJ8dJH6Y2WUrRlglAhzFAiEAutVyg7o3z%2FZEcidM1BETmjaaLxVd%2BXmejUFhXKfKusgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDgBc2c7xb8tuhcWfCrcA%2FeIHhTclEerukr2I61zMGeg3y9KeX1x8cpaDhO2K9TNk8uC%2Bbajt09FRmYIdU%2FHvVaOJ01LhDv%2Fry5sJ2vQZ1MT7%2FQry6hYkUOcm8AVZxG3fkS4%2BG0Wy0IpwMe%2B5YV4%2BvrWwI7mgEQ1eTCkIAo5tHeiGrLlBnDHRWK%2F2xf5AFMM2CUV4RXtltnqiu9WU9VSBtZnFRt%2Fjr6%2FWP1OLa%2FZNUcdlGMk4nNQ1Hve69sZx9gG1OxgYgxRWl%2BxruPVi%2FsfdurcTWT6FEtPj03jrOBkhefPiiWEAv%2B5VaxBBgPRhDpX3q0Rr%2BbhCQ%2FrV27mKLKS0ONnvYtliP0fvTh9d%2FEbmD80Mm0AuOkNcQ70pM2bd5TeXYBzHB774x2nRFJiLzd61GXz3i4mYH3taiR5Wt0yinxtbtEdnQzzJS8ZY7MRotNU0Q0btrPG7B8lKkAb%2BxecWXT6l6EDyLjKopincgVdN5Bz448Jiv3RDxcnE3zLFbf4iJZkMq1Pt%2FytstPpcU2v6y5PRM4i0y6OST9D3cEaFyKK%2FYlGXoeQvnMttnSxWHiwsT4%2FIeJlquqsIkWVtvqQx3WmpgF0JdJqUrBDqm3tUg4qwItWcPoYYS6MDTJEDajeRum6Y%2FFc9Fx5kCYPMLzdqcgGOqUBYZ9yewgDCo78rwm2qNN11MS%2BL9UdIEZv25gB8XD2l0MK1nl10H3ec27o%2BH89PQRPTfDtkfXqsmpvgPb66OsSMwvlbWdJ2edKW8zs%2FJVydruyBgIz%2FF0MEP36fiB9kTbgokfqRaNuwTqF7NhS9xcV0dl5MWT2Hu1rDXNEYDjeIvaJwtfH%2BJlaIEiCZynvWQFeGtONR5yppniEBt%2F%2FVHOzTvx%2BD9Ae&X-Amz-Signature=aaf940bb6df2019dfafff93c3c81d327d0cb14c59f593fdf73fa7a4c4c9be2ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHO6GLD3%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3IWyIEVLvBW%2FI9bQ6HsTTTOJ8dJH6Y2WUrRlglAhzFAiEAutVyg7o3z%2FZEcidM1BETmjaaLxVd%2BXmejUFhXKfKusgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDgBc2c7xb8tuhcWfCrcA%2FeIHhTclEerukr2I61zMGeg3y9KeX1x8cpaDhO2K9TNk8uC%2Bbajt09FRmYIdU%2FHvVaOJ01LhDv%2Fry5sJ2vQZ1MT7%2FQry6hYkUOcm8AVZxG3fkS4%2BG0Wy0IpwMe%2B5YV4%2BvrWwI7mgEQ1eTCkIAo5tHeiGrLlBnDHRWK%2F2xf5AFMM2CUV4RXtltnqiu9WU9VSBtZnFRt%2Fjr6%2FWP1OLa%2FZNUcdlGMk4nNQ1Hve69sZx9gG1OxgYgxRWl%2BxruPVi%2FsfdurcTWT6FEtPj03jrOBkhefPiiWEAv%2B5VaxBBgPRhDpX3q0Rr%2BbhCQ%2FrV27mKLKS0ONnvYtliP0fvTh9d%2FEbmD80Mm0AuOkNcQ70pM2bd5TeXYBzHB774x2nRFJiLzd61GXz3i4mYH3taiR5Wt0yinxtbtEdnQzzJS8ZY7MRotNU0Q0btrPG7B8lKkAb%2BxecWXT6l6EDyLjKopincgVdN5Bz448Jiv3RDxcnE3zLFbf4iJZkMq1Pt%2FytstPpcU2v6y5PRM4i0y6OST9D3cEaFyKK%2FYlGXoeQvnMttnSxWHiwsT4%2FIeJlquqsIkWVtvqQx3WmpgF0JdJqUrBDqm3tUg4qwItWcPoYYS6MDTJEDajeRum6Y%2FFc9Fx5kCYPMLzdqcgGOqUBYZ9yewgDCo78rwm2qNN11MS%2BL9UdIEZv25gB8XD2l0MK1nl10H3ec27o%2BH89PQRPTfDtkfXqsmpvgPb66OsSMwvlbWdJ2edKW8zs%2FJVydruyBgIz%2FF0MEP36fiB9kTbgokfqRaNuwTqF7NhS9xcV0dl5MWT2Hu1rDXNEYDjeIvaJwtfH%2BJlaIEiCZynvWQFeGtONR5yppniEBt%2F%2FVHOzTvx%2BD9Ae&X-Amz-Signature=a65666f4cc5cf26290de045362c45f8659bc51cef79d539b4530d111bfb10099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M7IYYZ2%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY5ifrFNX600wRUW3BXSM%2FxOZijuS522e5ECs7J6lSpwIgCjyyabayNHIyO20G2mdKFbJjIvax87kaxWT%2B91QssNcq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDP0dvdhYCDqyLRKGkyrcA2uycoxyUJxR6bu5hdvgXHjDBp4VsI2HAYcT%2FtHkI2yM4wKm0oPIx2uugCwV9x162XoCyLhO6NqM01N%2BOX5mn7BN%2Bx1tVK%2FDi4nB1gDXtBTLKDKqHWweEYIUgwsxz4hQiRyxcEPZBK1%2FU0zCRWkKoJC1ha3QJprn1SO46uubNzpyKrJS52SYCop53WbT%2F87uuwq4UAGPsZ07RH5EsQPtU%2B6KCFf5k%2FL5wNdh2L0nd8hRVI7Wh7AfJaQqwz7pTUZB%2FiNmvasDUe6ANIl2rLAVW%2BeufMkimEqEC%2FA2FY4PYqyfA7cNIuUl04feQazWQuAgRiMgKSzQy8W%2B7ZDy9QtspdEvYMYEYEubwiKOQi%2FvHfAOn657V3TLStM0uHrrbcQw8Xjlvs6llgDavSZyHJwOFHR8Y%2BYk7X4%2Bf8ZLnRXGgI%2BtVA7e7%2F9OSF%2F3qv%2FAtMY90UfT6Kx%2FWPWvvFmWlMWo87RhiX4H%2FJHjxJjCoLsW7jjD5rXClZvcorcGrMyfGZrOq%2FhBZDT579WwL563CVV138mN1T0BDdKIxes3NEGwtIJKQVsN5hc0MpzI4RpX5pfyf2C3Q1CI5uf08kVkztcO3oLLdi0gaQc9kLMg0z6shi54Jz%2BkvyIoArOImcH%2BMNjdqcgGOqUBsbmSuaCDF3KakNDDbE911kaGW%2BnQ0ss8TsBAn3hC0VHeB7pQOxpfp3Ak9QXp71F7f2kpSBvXQK1I3ZtFUJF7QOCYEM9UBG264sXuer%2BF%2FkZ69M18LvejqfB4RQ6grbOHyrV4yAxKcty8TFFwDJlGxI3BfczVxS%2BBtvwj%2FZS64w%2BjnxWUcj2BOF7C5IM%2BasZ66l4eQhsOx7iMY99Q2eBakMFZ3%2BhZ&X-Amz-Signature=936c45b4e4101596cac88d9b0566efda0599fa2381ffa1bbeb421cac61d4d00f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHO6GLD3%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3IWyIEVLvBW%2FI9bQ6HsTTTOJ8dJH6Y2WUrRlglAhzFAiEAutVyg7o3z%2FZEcidM1BETmjaaLxVd%2BXmejUFhXKfKusgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDgBc2c7xb8tuhcWfCrcA%2FeIHhTclEerukr2I61zMGeg3y9KeX1x8cpaDhO2K9TNk8uC%2Bbajt09FRmYIdU%2FHvVaOJ01LhDv%2Fry5sJ2vQZ1MT7%2FQry6hYkUOcm8AVZxG3fkS4%2BG0Wy0IpwMe%2B5YV4%2BvrWwI7mgEQ1eTCkIAo5tHeiGrLlBnDHRWK%2F2xf5AFMM2CUV4RXtltnqiu9WU9VSBtZnFRt%2Fjr6%2FWP1OLa%2FZNUcdlGMk4nNQ1Hve69sZx9gG1OxgYgxRWl%2BxruPVi%2FsfdurcTWT6FEtPj03jrOBkhefPiiWEAv%2B5VaxBBgPRhDpX3q0Rr%2BbhCQ%2FrV27mKLKS0ONnvYtliP0fvTh9d%2FEbmD80Mm0AuOkNcQ70pM2bd5TeXYBzHB774x2nRFJiLzd61GXz3i4mYH3taiR5Wt0yinxtbtEdnQzzJS8ZY7MRotNU0Q0btrPG7B8lKkAb%2BxecWXT6l6EDyLjKopincgVdN5Bz448Jiv3RDxcnE3zLFbf4iJZkMq1Pt%2FytstPpcU2v6y5PRM4i0y6OST9D3cEaFyKK%2FYlGXoeQvnMttnSxWHiwsT4%2FIeJlquqsIkWVtvqQx3WmpgF0JdJqUrBDqm3tUg4qwItWcPoYYS6MDTJEDajeRum6Y%2FFc9Fx5kCYPMLzdqcgGOqUBYZ9yewgDCo78rwm2qNN11MS%2BL9UdIEZv25gB8XD2l0MK1nl10H3ec27o%2BH89PQRPTfDtkfXqsmpvgPb66OsSMwvlbWdJ2edKW8zs%2FJVydruyBgIz%2FF0MEP36fiB9kTbgokfqRaNuwTqF7NhS9xcV0dl5MWT2Hu1rDXNEYDjeIvaJwtfH%2BJlaIEiCZynvWQFeGtONR5yppniEBt%2F%2FVHOzTvx%2BD9Ae&X-Amz-Signature=b23171eebfbcbd74f1ff931357d2578704f2e1d1610e7a16ab4ff9c476f9d224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHO6GLD3%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3IWyIEVLvBW%2FI9bQ6HsTTTOJ8dJH6Y2WUrRlglAhzFAiEAutVyg7o3z%2FZEcidM1BETmjaaLxVd%2BXmejUFhXKfKusgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDgBc2c7xb8tuhcWfCrcA%2FeIHhTclEerukr2I61zMGeg3y9KeX1x8cpaDhO2K9TNk8uC%2Bbajt09FRmYIdU%2FHvVaOJ01LhDv%2Fry5sJ2vQZ1MT7%2FQry6hYkUOcm8AVZxG3fkS4%2BG0Wy0IpwMe%2B5YV4%2BvrWwI7mgEQ1eTCkIAo5tHeiGrLlBnDHRWK%2F2xf5AFMM2CUV4RXtltnqiu9WU9VSBtZnFRt%2Fjr6%2FWP1OLa%2FZNUcdlGMk4nNQ1Hve69sZx9gG1OxgYgxRWl%2BxruPVi%2FsfdurcTWT6FEtPj03jrOBkhefPiiWEAv%2B5VaxBBgPRhDpX3q0Rr%2BbhCQ%2FrV27mKLKS0ONnvYtliP0fvTh9d%2FEbmD80Mm0AuOkNcQ70pM2bd5TeXYBzHB774x2nRFJiLzd61GXz3i4mYH3taiR5Wt0yinxtbtEdnQzzJS8ZY7MRotNU0Q0btrPG7B8lKkAb%2BxecWXT6l6EDyLjKopincgVdN5Bz448Jiv3RDxcnE3zLFbf4iJZkMq1Pt%2FytstPpcU2v6y5PRM4i0y6OST9D3cEaFyKK%2FYlGXoeQvnMttnSxWHiwsT4%2FIeJlquqsIkWVtvqQx3WmpgF0JdJqUrBDqm3tUg4qwItWcPoYYS6MDTJEDajeRum6Y%2FFc9Fx5kCYPMLzdqcgGOqUBYZ9yewgDCo78rwm2qNN11MS%2BL9UdIEZv25gB8XD2l0MK1nl10H3ec27o%2BH89PQRPTfDtkfXqsmpvgPb66OsSMwvlbWdJ2edKW8zs%2FJVydruyBgIz%2FF0MEP36fiB9kTbgokfqRaNuwTqF7NhS9xcV0dl5MWT2Hu1rDXNEYDjeIvaJwtfH%2BJlaIEiCZynvWQFeGtONR5yppniEBt%2F%2FVHOzTvx%2BD9Ae&X-Amz-Signature=71d5be4bdec635f11746eadce76663dccd7a5c484f60c01523f9b0b72c3c82ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHO6GLD3%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3IWyIEVLvBW%2FI9bQ6HsTTTOJ8dJH6Y2WUrRlglAhzFAiEAutVyg7o3z%2FZEcidM1BETmjaaLxVd%2BXmejUFhXKfKusgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDgBc2c7xb8tuhcWfCrcA%2FeIHhTclEerukr2I61zMGeg3y9KeX1x8cpaDhO2K9TNk8uC%2Bbajt09FRmYIdU%2FHvVaOJ01LhDv%2Fry5sJ2vQZ1MT7%2FQry6hYkUOcm8AVZxG3fkS4%2BG0Wy0IpwMe%2B5YV4%2BvrWwI7mgEQ1eTCkIAo5tHeiGrLlBnDHRWK%2F2xf5AFMM2CUV4RXtltnqiu9WU9VSBtZnFRt%2Fjr6%2FWP1OLa%2FZNUcdlGMk4nNQ1Hve69sZx9gG1OxgYgxRWl%2BxruPVi%2FsfdurcTWT6FEtPj03jrOBkhefPiiWEAv%2B5VaxBBgPRhDpX3q0Rr%2BbhCQ%2FrV27mKLKS0ONnvYtliP0fvTh9d%2FEbmD80Mm0AuOkNcQ70pM2bd5TeXYBzHB774x2nRFJiLzd61GXz3i4mYH3taiR5Wt0yinxtbtEdnQzzJS8ZY7MRotNU0Q0btrPG7B8lKkAb%2BxecWXT6l6EDyLjKopincgVdN5Bz448Jiv3RDxcnE3zLFbf4iJZkMq1Pt%2FytstPpcU2v6y5PRM4i0y6OST9D3cEaFyKK%2FYlGXoeQvnMttnSxWHiwsT4%2FIeJlquqsIkWVtvqQx3WmpgF0JdJqUrBDqm3tUg4qwItWcPoYYS6MDTJEDajeRum6Y%2FFc9Fx5kCYPMLzdqcgGOqUBYZ9yewgDCo78rwm2qNN11MS%2BL9UdIEZv25gB8XD2l0MK1nl10H3ec27o%2BH89PQRPTfDtkfXqsmpvgPb66OsSMwvlbWdJ2edKW8zs%2FJVydruyBgIz%2FF0MEP36fiB9kTbgokfqRaNuwTqF7NhS9xcV0dl5MWT2Hu1rDXNEYDjeIvaJwtfH%2BJlaIEiCZynvWQFeGtONR5yppniEBt%2F%2FVHOzTvx%2BD9Ae&X-Amz-Signature=11b04d537d62c61e9e6d42030990a70ca5e09a63823c8c4fda7610ab13df8fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHO6GLD3%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3IWyIEVLvBW%2FI9bQ6HsTTTOJ8dJH6Y2WUrRlglAhzFAiEAutVyg7o3z%2FZEcidM1BETmjaaLxVd%2BXmejUFhXKfKusgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDgBc2c7xb8tuhcWfCrcA%2FeIHhTclEerukr2I61zMGeg3y9KeX1x8cpaDhO2K9TNk8uC%2Bbajt09FRmYIdU%2FHvVaOJ01LhDv%2Fry5sJ2vQZ1MT7%2FQry6hYkUOcm8AVZxG3fkS4%2BG0Wy0IpwMe%2B5YV4%2BvrWwI7mgEQ1eTCkIAo5tHeiGrLlBnDHRWK%2F2xf5AFMM2CUV4RXtltnqiu9WU9VSBtZnFRt%2Fjr6%2FWP1OLa%2FZNUcdlGMk4nNQ1Hve69sZx9gG1OxgYgxRWl%2BxruPVi%2FsfdurcTWT6FEtPj03jrOBkhefPiiWEAv%2B5VaxBBgPRhDpX3q0Rr%2BbhCQ%2FrV27mKLKS0ONnvYtliP0fvTh9d%2FEbmD80Mm0AuOkNcQ70pM2bd5TeXYBzHB774x2nRFJiLzd61GXz3i4mYH3taiR5Wt0yinxtbtEdnQzzJS8ZY7MRotNU0Q0btrPG7B8lKkAb%2BxecWXT6l6EDyLjKopincgVdN5Bz448Jiv3RDxcnE3zLFbf4iJZkMq1Pt%2FytstPpcU2v6y5PRM4i0y6OST9D3cEaFyKK%2FYlGXoeQvnMttnSxWHiwsT4%2FIeJlquqsIkWVtvqQx3WmpgF0JdJqUrBDqm3tUg4qwItWcPoYYS6MDTJEDajeRum6Y%2FFc9Fx5kCYPMLzdqcgGOqUBYZ9yewgDCo78rwm2qNN11MS%2BL9UdIEZv25gB8XD2l0MK1nl10H3ec27o%2BH89PQRPTfDtkfXqsmpvgPb66OsSMwvlbWdJ2edKW8zs%2FJVydruyBgIz%2FF0MEP36fiB9kTbgokfqRaNuwTqF7NhS9xcV0dl5MWT2Hu1rDXNEYDjeIvaJwtfH%2BJlaIEiCZynvWQFeGtONR5yppniEBt%2F%2FVHOzTvx%2BD9Ae&X-Amz-Signature=0b68e4fe2dadc79ab07a98e9dbb875da19ba1ad7a1a8fda1728920a8b8a12d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHO6GLD3%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3IWyIEVLvBW%2FI9bQ6HsTTTOJ8dJH6Y2WUrRlglAhzFAiEAutVyg7o3z%2FZEcidM1BETmjaaLxVd%2BXmejUFhXKfKusgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDgBc2c7xb8tuhcWfCrcA%2FeIHhTclEerukr2I61zMGeg3y9KeX1x8cpaDhO2K9TNk8uC%2Bbajt09FRmYIdU%2FHvVaOJ01LhDv%2Fry5sJ2vQZ1MT7%2FQry6hYkUOcm8AVZxG3fkS4%2BG0Wy0IpwMe%2B5YV4%2BvrWwI7mgEQ1eTCkIAo5tHeiGrLlBnDHRWK%2F2xf5AFMM2CUV4RXtltnqiu9WU9VSBtZnFRt%2Fjr6%2FWP1OLa%2FZNUcdlGMk4nNQ1Hve69sZx9gG1OxgYgxRWl%2BxruPVi%2FsfdurcTWT6FEtPj03jrOBkhefPiiWEAv%2B5VaxBBgPRhDpX3q0Rr%2BbhCQ%2FrV27mKLKS0ONnvYtliP0fvTh9d%2FEbmD80Mm0AuOkNcQ70pM2bd5TeXYBzHB774x2nRFJiLzd61GXz3i4mYH3taiR5Wt0yinxtbtEdnQzzJS8ZY7MRotNU0Q0btrPG7B8lKkAb%2BxecWXT6l6EDyLjKopincgVdN5Bz448Jiv3RDxcnE3zLFbf4iJZkMq1Pt%2FytstPpcU2v6y5PRM4i0y6OST9D3cEaFyKK%2FYlGXoeQvnMttnSxWHiwsT4%2FIeJlquqsIkWVtvqQx3WmpgF0JdJqUrBDqm3tUg4qwItWcPoYYS6MDTJEDajeRum6Y%2FFc9Fx5kCYPMLzdqcgGOqUBYZ9yewgDCo78rwm2qNN11MS%2BL9UdIEZv25gB8XD2l0MK1nl10H3ec27o%2BH89PQRPTfDtkfXqsmpvgPb66OsSMwvlbWdJ2edKW8zs%2FJVydruyBgIz%2FF0MEP36fiB9kTbgokfqRaNuwTqF7NhS9xcV0dl5MWT2Hu1rDXNEYDjeIvaJwtfH%2BJlaIEiCZynvWQFeGtONR5yppniEBt%2F%2FVHOzTvx%2BD9Ae&X-Amz-Signature=1b8a9f354f06a2e07f65860af7807ff77ab511988680ae3ea92c871efb932242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHO6GLD3%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3IWyIEVLvBW%2FI9bQ6HsTTTOJ8dJH6Y2WUrRlglAhzFAiEAutVyg7o3z%2FZEcidM1BETmjaaLxVd%2BXmejUFhXKfKusgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDgBc2c7xb8tuhcWfCrcA%2FeIHhTclEerukr2I61zMGeg3y9KeX1x8cpaDhO2K9TNk8uC%2Bbajt09FRmYIdU%2FHvVaOJ01LhDv%2Fry5sJ2vQZ1MT7%2FQry6hYkUOcm8AVZxG3fkS4%2BG0Wy0IpwMe%2B5YV4%2BvrWwI7mgEQ1eTCkIAo5tHeiGrLlBnDHRWK%2F2xf5AFMM2CUV4RXtltnqiu9WU9VSBtZnFRt%2Fjr6%2FWP1OLa%2FZNUcdlGMk4nNQ1Hve69sZx9gG1OxgYgxRWl%2BxruPVi%2FsfdurcTWT6FEtPj03jrOBkhefPiiWEAv%2B5VaxBBgPRhDpX3q0Rr%2BbhCQ%2FrV27mKLKS0ONnvYtliP0fvTh9d%2FEbmD80Mm0AuOkNcQ70pM2bd5TeXYBzHB774x2nRFJiLzd61GXz3i4mYH3taiR5Wt0yinxtbtEdnQzzJS8ZY7MRotNU0Q0btrPG7B8lKkAb%2BxecWXT6l6EDyLjKopincgVdN5Bz448Jiv3RDxcnE3zLFbf4iJZkMq1Pt%2FytstPpcU2v6y5PRM4i0y6OST9D3cEaFyKK%2FYlGXoeQvnMttnSxWHiwsT4%2FIeJlquqsIkWVtvqQx3WmpgF0JdJqUrBDqm3tUg4qwItWcPoYYS6MDTJEDajeRum6Y%2FFc9Fx5kCYPMLzdqcgGOqUBYZ9yewgDCo78rwm2qNN11MS%2BL9UdIEZv25gB8XD2l0MK1nl10H3ec27o%2BH89PQRPTfDtkfXqsmpvgPb66OsSMwvlbWdJ2edKW8zs%2FJVydruyBgIz%2FF0MEP36fiB9kTbgokfqRaNuwTqF7NhS9xcV0dl5MWT2Hu1rDXNEYDjeIvaJwtfH%2BJlaIEiCZynvWQFeGtONR5yppniEBt%2F%2FVHOzTvx%2BD9Ae&X-Amz-Signature=894320ca0d24cc257478d980a77d0eeaa498f147cf79f1f8f030ec49f0e95286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


