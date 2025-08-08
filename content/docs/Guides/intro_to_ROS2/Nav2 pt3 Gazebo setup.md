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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTX3KWTE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIBTXpR0yhEgpkwliqcCb%2FKqLot6Vdb8gDh0kAottp9XpAiEAwFBthHvp7cpAcWE%2BQsh9ekWC%2B5fyBQXiNpIE24tS%2BewqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENzcRn3S7dSrozJRCrcAyzslWYiAyV%2Fc6lmk9QN5pXqj%2BSOD5jFHn%2FNFBujiOvhOtPdnvlYejI0qR%2BdYal0zxzaZceQZYUbiHtaRA6eS6fQBSy%2B8PP3os%2Fxyo9IOK%2BKqCLeOU1yg1TSSIOkvntjRAasgoEfh1I9gj4dt1LtnuileHzuxk0sEYxe%2FUeitTEEFUsAaTvF3MKqCWK3odNEQsQ8KUl9nSZFZVfFNTZ6MP02hrCiuBTeIZwH1TDXf4rdjQF8EykWFoD3H0IWnrWhAFzBZq1E5Y6q94DxkiYfCg7DnQecAWgPtbrpWpfPH6%2Fr%2FSRjm0IuAfG01FNsONJr1ugcjk4IlBeoML9gxsW9BjArihu6wMVPmX%2FrO%2Bgz%2BdiOgiHRROmkwXsYtN4dZobWm8P32CbsZwHtR202zIIjEmT90oBwsRrrzFF5W5qZLgk3iTZJ1wqR2FEpn2BfWsvsZ86NiRM9Wa7SGX7mc3%2Fnl3kgpa5a%2FsItay%2FBVI0SV49yuh61TPNl6QsX5cuSa0wv1osbQITNbeSn5e72U%2FkYfFJF5yktdXzpHb15NRnpGZhxrAtAU84Pp2RhufHBJrCiyMTAFH0OJVz7p1SHqoLAVKKK%2FyeW%2Fzw9JSiYUWBT3qEwMggUUqfx1Q4HrL03MPLH1sQGOqUBxaatb4PsSf55URkgx7EWkQJAwVxFUYncbBBnSkP5bB7PWVXUGOQz5zczW8%2BHg0%2BwKUpSzKkNVzJHEgfhCx%2FtunYpqc4kobRRnuWHpjo2kR8qIoQHso0YYKtG5UOTcbvw8ntmWthawJ894%2Fdt%2Fyuh21YbT0yh12Bln11U6M475xcoWvKvjvPPYenznazT2TGRR3MbAcYLhwQ%2Bc97WLqWVkhUhx7RY&X-Amz-Signature=5e37fabeacd6c470519d563fb3c0284f87923478a10dcfdde97ab7e65d2ebb07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTX3KWTE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIBTXpR0yhEgpkwliqcCb%2FKqLot6Vdb8gDh0kAottp9XpAiEAwFBthHvp7cpAcWE%2BQsh9ekWC%2B5fyBQXiNpIE24tS%2BewqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENzcRn3S7dSrozJRCrcAyzslWYiAyV%2Fc6lmk9QN5pXqj%2BSOD5jFHn%2FNFBujiOvhOtPdnvlYejI0qR%2BdYal0zxzaZceQZYUbiHtaRA6eS6fQBSy%2B8PP3os%2Fxyo9IOK%2BKqCLeOU1yg1TSSIOkvntjRAasgoEfh1I9gj4dt1LtnuileHzuxk0sEYxe%2FUeitTEEFUsAaTvF3MKqCWK3odNEQsQ8KUl9nSZFZVfFNTZ6MP02hrCiuBTeIZwH1TDXf4rdjQF8EykWFoD3H0IWnrWhAFzBZq1E5Y6q94DxkiYfCg7DnQecAWgPtbrpWpfPH6%2Fr%2FSRjm0IuAfG01FNsONJr1ugcjk4IlBeoML9gxsW9BjArihu6wMVPmX%2FrO%2Bgz%2BdiOgiHRROmkwXsYtN4dZobWm8P32CbsZwHtR202zIIjEmT90oBwsRrrzFF5W5qZLgk3iTZJ1wqR2FEpn2BfWsvsZ86NiRM9Wa7SGX7mc3%2Fnl3kgpa5a%2FsItay%2FBVI0SV49yuh61TPNl6QsX5cuSa0wv1osbQITNbeSn5e72U%2FkYfFJF5yktdXzpHb15NRnpGZhxrAtAU84Pp2RhufHBJrCiyMTAFH0OJVz7p1SHqoLAVKKK%2FyeW%2Fzw9JSiYUWBT3qEwMggUUqfx1Q4HrL03MPLH1sQGOqUBxaatb4PsSf55URkgx7EWkQJAwVxFUYncbBBnSkP5bB7PWVXUGOQz5zczW8%2BHg0%2BwKUpSzKkNVzJHEgfhCx%2FtunYpqc4kobRRnuWHpjo2kR8qIoQHso0YYKtG5UOTcbvw8ntmWthawJ894%2Fdt%2Fyuh21YbT0yh12Bln11U6M475xcoWvKvjvPPYenznazT2TGRR3MbAcYLhwQ%2Bc97WLqWVkhUhx7RY&X-Amz-Signature=7015495fe68c3e1704c248024a6d8c50ced7dbd5db6e8a1a319bafb253254183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTX3KWTE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIBTXpR0yhEgpkwliqcCb%2FKqLot6Vdb8gDh0kAottp9XpAiEAwFBthHvp7cpAcWE%2BQsh9ekWC%2B5fyBQXiNpIE24tS%2BewqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENzcRn3S7dSrozJRCrcAyzslWYiAyV%2Fc6lmk9QN5pXqj%2BSOD5jFHn%2FNFBujiOvhOtPdnvlYejI0qR%2BdYal0zxzaZceQZYUbiHtaRA6eS6fQBSy%2B8PP3os%2Fxyo9IOK%2BKqCLeOU1yg1TSSIOkvntjRAasgoEfh1I9gj4dt1LtnuileHzuxk0sEYxe%2FUeitTEEFUsAaTvF3MKqCWK3odNEQsQ8KUl9nSZFZVfFNTZ6MP02hrCiuBTeIZwH1TDXf4rdjQF8EykWFoD3H0IWnrWhAFzBZq1E5Y6q94DxkiYfCg7DnQecAWgPtbrpWpfPH6%2Fr%2FSRjm0IuAfG01FNsONJr1ugcjk4IlBeoML9gxsW9BjArihu6wMVPmX%2FrO%2Bgz%2BdiOgiHRROmkwXsYtN4dZobWm8P32CbsZwHtR202zIIjEmT90oBwsRrrzFF5W5qZLgk3iTZJ1wqR2FEpn2BfWsvsZ86NiRM9Wa7SGX7mc3%2Fnl3kgpa5a%2FsItay%2FBVI0SV49yuh61TPNl6QsX5cuSa0wv1osbQITNbeSn5e72U%2FkYfFJF5yktdXzpHb15NRnpGZhxrAtAU84Pp2RhufHBJrCiyMTAFH0OJVz7p1SHqoLAVKKK%2FyeW%2Fzw9JSiYUWBT3qEwMggUUqfx1Q4HrL03MPLH1sQGOqUBxaatb4PsSf55URkgx7EWkQJAwVxFUYncbBBnSkP5bB7PWVXUGOQz5zczW8%2BHg0%2BwKUpSzKkNVzJHEgfhCx%2FtunYpqc4kobRRnuWHpjo2kR8qIoQHso0YYKtG5UOTcbvw8ntmWthawJ894%2Fdt%2Fyuh21YbT0yh12Bln11U6M475xcoWvKvjvPPYenznazT2TGRR3MbAcYLhwQ%2Bc97WLqWVkhUhx7RY&X-Amz-Signature=9efcb632a83a692f565a1e667679b943e041d845b81ef667ab07cba0d265100c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTX3KWTE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIBTXpR0yhEgpkwliqcCb%2FKqLot6Vdb8gDh0kAottp9XpAiEAwFBthHvp7cpAcWE%2BQsh9ekWC%2B5fyBQXiNpIE24tS%2BewqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENzcRn3S7dSrozJRCrcAyzslWYiAyV%2Fc6lmk9QN5pXqj%2BSOD5jFHn%2FNFBujiOvhOtPdnvlYejI0qR%2BdYal0zxzaZceQZYUbiHtaRA6eS6fQBSy%2B8PP3os%2Fxyo9IOK%2BKqCLeOU1yg1TSSIOkvntjRAasgoEfh1I9gj4dt1LtnuileHzuxk0sEYxe%2FUeitTEEFUsAaTvF3MKqCWK3odNEQsQ8KUl9nSZFZVfFNTZ6MP02hrCiuBTeIZwH1TDXf4rdjQF8EykWFoD3H0IWnrWhAFzBZq1E5Y6q94DxkiYfCg7DnQecAWgPtbrpWpfPH6%2Fr%2FSRjm0IuAfG01FNsONJr1ugcjk4IlBeoML9gxsW9BjArihu6wMVPmX%2FrO%2Bgz%2BdiOgiHRROmkwXsYtN4dZobWm8P32CbsZwHtR202zIIjEmT90oBwsRrrzFF5W5qZLgk3iTZJ1wqR2FEpn2BfWsvsZ86NiRM9Wa7SGX7mc3%2Fnl3kgpa5a%2FsItay%2FBVI0SV49yuh61TPNl6QsX5cuSa0wv1osbQITNbeSn5e72U%2FkYfFJF5yktdXzpHb15NRnpGZhxrAtAU84Pp2RhufHBJrCiyMTAFH0OJVz7p1SHqoLAVKKK%2FyeW%2Fzw9JSiYUWBT3qEwMggUUqfx1Q4HrL03MPLH1sQGOqUBxaatb4PsSf55URkgx7EWkQJAwVxFUYncbBBnSkP5bB7PWVXUGOQz5zczW8%2BHg0%2BwKUpSzKkNVzJHEgfhCx%2FtunYpqc4kobRRnuWHpjo2kR8qIoQHso0YYKtG5UOTcbvw8ntmWthawJ894%2Fdt%2Fyuh21YbT0yh12Bln11U6M475xcoWvKvjvPPYenznazT2TGRR3MbAcYLhwQ%2Bc97WLqWVkhUhx7RY&X-Amz-Signature=82d51b5ba4a13057f312c5de9324f593de0e3c28d4cf511e01a010fba58ef059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHO2657E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIG44Ac647YeTdzQ%2FRg35uQ2b1IV7FzIq7%2FmI86lJwpYPAiEA4aiiQu9fG0n0fz723ddxv7yHj6Yo%2FMaPEHDtSA%2F96EwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2ieQMntrrF39RxgCrcAwryXKr3s7%2FrEx8Po85V%2FY%2BAAXFbweTANyIC5osgfHSKOjAsVCg0pr0DSkQdzq%2F1TS406YJSa579eYDx%2BZHGU3new6et8EFFDtS4bQ8TkhwmoJT6mtkz%2BIOWlv2O%2BVLMNe2H60%2FfeoYjjYVEhioxEvLObSItx40EtHwFSrZllDRXuhBgUgVGqWUmEuBZsvgNC4Y%2BxI3vYRUbQXh%2FKGUw%2FBkOgGNpD5TXOvwLlfFkWbJ6J0zd5KXc3BGwFa44A8TD1ebD61gvOnXtmDC7A74VeORjyUZLBRZe3cFTcB%2BywU458gOmJ2PAVN1%2FTX2sJkWxc%2F2N2kWb8QO6v26JQnx2NM9r70%2BwXwcFqFhOygYWmK9xLxYa4zNTpUyZJKdul8LDAcIEuVZZGgdQV3XUTVjzm5pOYDFDG%2FvwoZmnon1zNsAUIcR9cc9sqvS7pc307HraTjf46CJoCd1YnC3R36he%2Fn3SCNTlAZUsCdB4cpDlKIXOyGjek0WpkMoNqTdMKItKPzAcXN7ZEWAOW%2FLTuLdLIhFAcgSM0Kw6jD81NjF524JmXCfpoHj2aCeC%2BkL8x6VkcpEhNFUx2MPArhYe06hbsWAp9y3nbiYryNxE43VYqaaSiN7MLbbA8EpPW55HMKzH1sQGOqUBuJPRzeHhRP6VSJ66jweKVb8cdciUZHLBu1q8yyRIjWXk68Hoy252Da6E9ldEJLU7hlhnyTyKOtoY8Bc4XW0qf1mxsETuLBSIC%2BBQIZ1558pdazTAB5PGSi92NEyC3LGQ%2F53MawkSF0S2R%2Fq%2FI8oQC0kLtWytsBFsMgJwrzLJWJzu29GKVBSj8MDSmNH0IkeCEH51CkgWN116SopMSDKTbYATPtlG&X-Amz-Signature=d50d4145041eba635e6baa8eeb375532e8b5fe8de1a68207c6a88e1ca7d07f31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTX3KWTE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIBTXpR0yhEgpkwliqcCb%2FKqLot6Vdb8gDh0kAottp9XpAiEAwFBthHvp7cpAcWE%2BQsh9ekWC%2B5fyBQXiNpIE24tS%2BewqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENzcRn3S7dSrozJRCrcAyzslWYiAyV%2Fc6lmk9QN5pXqj%2BSOD5jFHn%2FNFBujiOvhOtPdnvlYejI0qR%2BdYal0zxzaZceQZYUbiHtaRA6eS6fQBSy%2B8PP3os%2Fxyo9IOK%2BKqCLeOU1yg1TSSIOkvntjRAasgoEfh1I9gj4dt1LtnuileHzuxk0sEYxe%2FUeitTEEFUsAaTvF3MKqCWK3odNEQsQ8KUl9nSZFZVfFNTZ6MP02hrCiuBTeIZwH1TDXf4rdjQF8EykWFoD3H0IWnrWhAFzBZq1E5Y6q94DxkiYfCg7DnQecAWgPtbrpWpfPH6%2Fr%2FSRjm0IuAfG01FNsONJr1ugcjk4IlBeoML9gxsW9BjArihu6wMVPmX%2FrO%2Bgz%2BdiOgiHRROmkwXsYtN4dZobWm8P32CbsZwHtR202zIIjEmT90oBwsRrrzFF5W5qZLgk3iTZJ1wqR2FEpn2BfWsvsZ86NiRM9Wa7SGX7mc3%2Fnl3kgpa5a%2FsItay%2FBVI0SV49yuh61TPNl6QsX5cuSa0wv1osbQITNbeSn5e72U%2FkYfFJF5yktdXzpHb15NRnpGZhxrAtAU84Pp2RhufHBJrCiyMTAFH0OJVz7p1SHqoLAVKKK%2FyeW%2Fzw9JSiYUWBT3qEwMggUUqfx1Q4HrL03MPLH1sQGOqUBxaatb4PsSf55URkgx7EWkQJAwVxFUYncbBBnSkP5bB7PWVXUGOQz5zczW8%2BHg0%2BwKUpSzKkNVzJHEgfhCx%2FtunYpqc4kobRRnuWHpjo2kR8qIoQHso0YYKtG5UOTcbvw8ntmWthawJ894%2Fdt%2Fyuh21YbT0yh12Bln11U6M475xcoWvKvjvPPYenznazT2TGRR3MbAcYLhwQ%2Bc97WLqWVkhUhx7RY&X-Amz-Signature=44bfa2f1894cd9c39f6474765bb665fe69c27ae7694566c8a2db9c22234d00a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTX3KWTE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIBTXpR0yhEgpkwliqcCb%2FKqLot6Vdb8gDh0kAottp9XpAiEAwFBthHvp7cpAcWE%2BQsh9ekWC%2B5fyBQXiNpIE24tS%2BewqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENzcRn3S7dSrozJRCrcAyzslWYiAyV%2Fc6lmk9QN5pXqj%2BSOD5jFHn%2FNFBujiOvhOtPdnvlYejI0qR%2BdYal0zxzaZceQZYUbiHtaRA6eS6fQBSy%2B8PP3os%2Fxyo9IOK%2BKqCLeOU1yg1TSSIOkvntjRAasgoEfh1I9gj4dt1LtnuileHzuxk0sEYxe%2FUeitTEEFUsAaTvF3MKqCWK3odNEQsQ8KUl9nSZFZVfFNTZ6MP02hrCiuBTeIZwH1TDXf4rdjQF8EykWFoD3H0IWnrWhAFzBZq1E5Y6q94DxkiYfCg7DnQecAWgPtbrpWpfPH6%2Fr%2FSRjm0IuAfG01FNsONJr1ugcjk4IlBeoML9gxsW9BjArihu6wMVPmX%2FrO%2Bgz%2BdiOgiHRROmkwXsYtN4dZobWm8P32CbsZwHtR202zIIjEmT90oBwsRrrzFF5W5qZLgk3iTZJ1wqR2FEpn2BfWsvsZ86NiRM9Wa7SGX7mc3%2Fnl3kgpa5a%2FsItay%2FBVI0SV49yuh61TPNl6QsX5cuSa0wv1osbQITNbeSn5e72U%2FkYfFJF5yktdXzpHb15NRnpGZhxrAtAU84Pp2RhufHBJrCiyMTAFH0OJVz7p1SHqoLAVKKK%2FyeW%2Fzw9JSiYUWBT3qEwMggUUqfx1Q4HrL03MPLH1sQGOqUBxaatb4PsSf55URkgx7EWkQJAwVxFUYncbBBnSkP5bB7PWVXUGOQz5zczW8%2BHg0%2BwKUpSzKkNVzJHEgfhCx%2FtunYpqc4kobRRnuWHpjo2kR8qIoQHso0YYKtG5UOTcbvw8ntmWthawJ894%2Fdt%2Fyuh21YbT0yh12Bln11U6M475xcoWvKvjvPPYenznazT2TGRR3MbAcYLhwQ%2Bc97WLqWVkhUhx7RY&X-Amz-Signature=38053bb77af109cab47a0264a5e7ea52f02d4e4f4b35b71e2e67fd5327a70acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTX3KWTE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIBTXpR0yhEgpkwliqcCb%2FKqLot6Vdb8gDh0kAottp9XpAiEAwFBthHvp7cpAcWE%2BQsh9ekWC%2B5fyBQXiNpIE24tS%2BewqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENzcRn3S7dSrozJRCrcAyzslWYiAyV%2Fc6lmk9QN5pXqj%2BSOD5jFHn%2FNFBujiOvhOtPdnvlYejI0qR%2BdYal0zxzaZceQZYUbiHtaRA6eS6fQBSy%2B8PP3os%2Fxyo9IOK%2BKqCLeOU1yg1TSSIOkvntjRAasgoEfh1I9gj4dt1LtnuileHzuxk0sEYxe%2FUeitTEEFUsAaTvF3MKqCWK3odNEQsQ8KUl9nSZFZVfFNTZ6MP02hrCiuBTeIZwH1TDXf4rdjQF8EykWFoD3H0IWnrWhAFzBZq1E5Y6q94DxkiYfCg7DnQecAWgPtbrpWpfPH6%2Fr%2FSRjm0IuAfG01FNsONJr1ugcjk4IlBeoML9gxsW9BjArihu6wMVPmX%2FrO%2Bgz%2BdiOgiHRROmkwXsYtN4dZobWm8P32CbsZwHtR202zIIjEmT90oBwsRrrzFF5W5qZLgk3iTZJ1wqR2FEpn2BfWsvsZ86NiRM9Wa7SGX7mc3%2Fnl3kgpa5a%2FsItay%2FBVI0SV49yuh61TPNl6QsX5cuSa0wv1osbQITNbeSn5e72U%2FkYfFJF5yktdXzpHb15NRnpGZhxrAtAU84Pp2RhufHBJrCiyMTAFH0OJVz7p1SHqoLAVKKK%2FyeW%2Fzw9JSiYUWBT3qEwMggUUqfx1Q4HrL03MPLH1sQGOqUBxaatb4PsSf55URkgx7EWkQJAwVxFUYncbBBnSkP5bB7PWVXUGOQz5zczW8%2BHg0%2BwKUpSzKkNVzJHEgfhCx%2FtunYpqc4kobRRnuWHpjo2kR8qIoQHso0YYKtG5UOTcbvw8ntmWthawJ894%2Fdt%2Fyuh21YbT0yh12Bln11U6M475xcoWvKvjvPPYenznazT2TGRR3MbAcYLhwQ%2Bc97WLqWVkhUhx7RY&X-Amz-Signature=65c125ceba6299a352154698bf8218eb032c82784d4222aeffc086b126e576a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTX3KWTE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIBTXpR0yhEgpkwliqcCb%2FKqLot6Vdb8gDh0kAottp9XpAiEAwFBthHvp7cpAcWE%2BQsh9ekWC%2B5fyBQXiNpIE24tS%2BewqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENzcRn3S7dSrozJRCrcAyzslWYiAyV%2Fc6lmk9QN5pXqj%2BSOD5jFHn%2FNFBujiOvhOtPdnvlYejI0qR%2BdYal0zxzaZceQZYUbiHtaRA6eS6fQBSy%2B8PP3os%2Fxyo9IOK%2BKqCLeOU1yg1TSSIOkvntjRAasgoEfh1I9gj4dt1LtnuileHzuxk0sEYxe%2FUeitTEEFUsAaTvF3MKqCWK3odNEQsQ8KUl9nSZFZVfFNTZ6MP02hrCiuBTeIZwH1TDXf4rdjQF8EykWFoD3H0IWnrWhAFzBZq1E5Y6q94DxkiYfCg7DnQecAWgPtbrpWpfPH6%2Fr%2FSRjm0IuAfG01FNsONJr1ugcjk4IlBeoML9gxsW9BjArihu6wMVPmX%2FrO%2Bgz%2BdiOgiHRROmkwXsYtN4dZobWm8P32CbsZwHtR202zIIjEmT90oBwsRrrzFF5W5qZLgk3iTZJ1wqR2FEpn2BfWsvsZ86NiRM9Wa7SGX7mc3%2Fnl3kgpa5a%2FsItay%2FBVI0SV49yuh61TPNl6QsX5cuSa0wv1osbQITNbeSn5e72U%2FkYfFJF5yktdXzpHb15NRnpGZhxrAtAU84Pp2RhufHBJrCiyMTAFH0OJVz7p1SHqoLAVKKK%2FyeW%2Fzw9JSiYUWBT3qEwMggUUqfx1Q4HrL03MPLH1sQGOqUBxaatb4PsSf55URkgx7EWkQJAwVxFUYncbBBnSkP5bB7PWVXUGOQz5zczW8%2BHg0%2BwKUpSzKkNVzJHEgfhCx%2FtunYpqc4kobRRnuWHpjo2kR8qIoQHso0YYKtG5UOTcbvw8ntmWthawJ894%2Fdt%2Fyuh21YbT0yh12Bln11U6M475xcoWvKvjvPPYenznazT2TGRR3MbAcYLhwQ%2Bc97WLqWVkhUhx7RY&X-Amz-Signature=6d60ebf53d1a38434f7f1f0d165667ec4d959c8c7d599d81537fa5271dd7c81c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTX3KWTE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIBTXpR0yhEgpkwliqcCb%2FKqLot6Vdb8gDh0kAottp9XpAiEAwFBthHvp7cpAcWE%2BQsh9ekWC%2B5fyBQXiNpIE24tS%2BewqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENzcRn3S7dSrozJRCrcAyzslWYiAyV%2Fc6lmk9QN5pXqj%2BSOD5jFHn%2FNFBujiOvhOtPdnvlYejI0qR%2BdYal0zxzaZceQZYUbiHtaRA6eS6fQBSy%2B8PP3os%2Fxyo9IOK%2BKqCLeOU1yg1TSSIOkvntjRAasgoEfh1I9gj4dt1LtnuileHzuxk0sEYxe%2FUeitTEEFUsAaTvF3MKqCWK3odNEQsQ8KUl9nSZFZVfFNTZ6MP02hrCiuBTeIZwH1TDXf4rdjQF8EykWFoD3H0IWnrWhAFzBZq1E5Y6q94DxkiYfCg7DnQecAWgPtbrpWpfPH6%2Fr%2FSRjm0IuAfG01FNsONJr1ugcjk4IlBeoML9gxsW9BjArihu6wMVPmX%2FrO%2Bgz%2BdiOgiHRROmkwXsYtN4dZobWm8P32CbsZwHtR202zIIjEmT90oBwsRrrzFF5W5qZLgk3iTZJ1wqR2FEpn2BfWsvsZ86NiRM9Wa7SGX7mc3%2Fnl3kgpa5a%2FsItay%2FBVI0SV49yuh61TPNl6QsX5cuSa0wv1osbQITNbeSn5e72U%2FkYfFJF5yktdXzpHb15NRnpGZhxrAtAU84Pp2RhufHBJrCiyMTAFH0OJVz7p1SHqoLAVKKK%2FyeW%2Fzw9JSiYUWBT3qEwMggUUqfx1Q4HrL03MPLH1sQGOqUBxaatb4PsSf55URkgx7EWkQJAwVxFUYncbBBnSkP5bB7PWVXUGOQz5zczW8%2BHg0%2BwKUpSzKkNVzJHEgfhCx%2FtunYpqc4kobRRnuWHpjo2kR8qIoQHso0YYKtG5UOTcbvw8ntmWthawJ894%2Fdt%2Fyuh21YbT0yh12Bln11U6M475xcoWvKvjvPPYenznazT2TGRR3MbAcYLhwQ%2Bc97WLqWVkhUhx7RY&X-Amz-Signature=dc9fd1c0962a88ba3301571f6340c9965e689e25bfd160d789ff60d775015413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTX3KWTE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIBTXpR0yhEgpkwliqcCb%2FKqLot6Vdb8gDh0kAottp9XpAiEAwFBthHvp7cpAcWE%2BQsh9ekWC%2B5fyBQXiNpIE24tS%2BewqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENzcRn3S7dSrozJRCrcAyzslWYiAyV%2Fc6lmk9QN5pXqj%2BSOD5jFHn%2FNFBujiOvhOtPdnvlYejI0qR%2BdYal0zxzaZceQZYUbiHtaRA6eS6fQBSy%2B8PP3os%2Fxyo9IOK%2BKqCLeOU1yg1TSSIOkvntjRAasgoEfh1I9gj4dt1LtnuileHzuxk0sEYxe%2FUeitTEEFUsAaTvF3MKqCWK3odNEQsQ8KUl9nSZFZVfFNTZ6MP02hrCiuBTeIZwH1TDXf4rdjQF8EykWFoD3H0IWnrWhAFzBZq1E5Y6q94DxkiYfCg7DnQecAWgPtbrpWpfPH6%2Fr%2FSRjm0IuAfG01FNsONJr1ugcjk4IlBeoML9gxsW9BjArihu6wMVPmX%2FrO%2Bgz%2BdiOgiHRROmkwXsYtN4dZobWm8P32CbsZwHtR202zIIjEmT90oBwsRrrzFF5W5qZLgk3iTZJ1wqR2FEpn2BfWsvsZ86NiRM9Wa7SGX7mc3%2Fnl3kgpa5a%2FsItay%2FBVI0SV49yuh61TPNl6QsX5cuSa0wv1osbQITNbeSn5e72U%2FkYfFJF5yktdXzpHb15NRnpGZhxrAtAU84Pp2RhufHBJrCiyMTAFH0OJVz7p1SHqoLAVKKK%2FyeW%2Fzw9JSiYUWBT3qEwMggUUqfx1Q4HrL03MPLH1sQGOqUBxaatb4PsSf55URkgx7EWkQJAwVxFUYncbBBnSkP5bB7PWVXUGOQz5zczW8%2BHg0%2BwKUpSzKkNVzJHEgfhCx%2FtunYpqc4kobRRnuWHpjo2kR8qIoQHso0YYKtG5UOTcbvw8ntmWthawJ894%2Fdt%2Fyuh21YbT0yh12Bln11U6M475xcoWvKvjvPPYenznazT2TGRR3MbAcYLhwQ%2Bc97WLqWVkhUhx7RY&X-Amz-Signature=be652c787fb4518dcd860aedef7b0e5b6a42fc7ed8447068204ad4931e30cf9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
