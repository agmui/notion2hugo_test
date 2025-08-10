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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVTAAP7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCERcz8WVYs4HNBjXlbH7yFFwrw3GcixV%2BNBDmMaDUELAIhAOXT6wSoh3s6yvAnPGxI%2BHtu6zKmbL29T8wgY36uMQlMKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8V2dLykpKuf6IGEIq3AN6nlnWmIoMa3dGI4iPLIK88E2vxiUk9%2FSUR0zTto0Qj9MMrYVv1qUAgh2XR4wMgD01W1O4qUlSmIHIPtadf%2BJB3BVeq1YVW5qfYa%2Be3msNVgw1qL1RuJxKoTauiTmN2VgbIqiJjfkdyJBU6gUoPmge23fZNVXrofFncgdoZ0RVg5TplP%2Bw3rJZ7Db6V%2BqMcPzqj8ZCddPOIA2dU3%2FLlo8M5m6fUyRMv0POatHv1IoXMpD2LBWffSxkZT8w9FNF5vjlDXoBSq9R2J0wecN3bTANzGLho8JYg4Mc%2BgTeafGPsg94yqpnYfQmVA5vDKSAf7%2FN%2FI1aulx9EjA%2BPFjKWzz4i3H3ts1hBikV%2Fuv7Jc2R%2F%2FUn25fY3%2Fy853akD6%2BLHbfokz6litX0%2BEhX9jAyb8KLfI7SYu%2FWveLOJIgpb0YFPMBFTVYvlzBcESbs%2FDZoCBfVpuiMJmQ7%2FnrzaObz9FYbJ5LOzTBa4RDKLfgCnxl90x%2FtWNREKAmH2pY1x5dWIP9Q0NFhfpbhvrKN3HGod1WngjohpqbLyhae87wF8nMZYMrzmFoc%2B1J4IcbYRjx4h8p4ud%2Fl8EjaM7LJ4fwAXoO0jTrq4ilGVMt5QoUfIF20yADpw3W15nXeSq3poDCdmOLEBjqkAdrrTqtLrL98FI1bbuU6HOQsl7FqJvNcwHkT83CZD7OMDYpLgx15iCsj2WMqrGdRh%2Fjn2nXxQoyvT71q8qhO3ZN%2BIVhrupcKm1whO3%2FyFF%2FTr0MzRFdVGeIyuQBbur22puorkmFkcyCMmDUnc3wyQfGQVD0lQi1dnK6H4yUW2EWXq7WXfQxMiXbACZvxiav5QpdGyAYc7OpWvuCqXzrjHUMHh%2Frw&X-Amz-Signature=fb9dda05bf6fa9003ec9fdd94bae03f93b06107560d7bc9ebf5d3d8989a72898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVTAAP7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCERcz8WVYs4HNBjXlbH7yFFwrw3GcixV%2BNBDmMaDUELAIhAOXT6wSoh3s6yvAnPGxI%2BHtu6zKmbL29T8wgY36uMQlMKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8V2dLykpKuf6IGEIq3AN6nlnWmIoMa3dGI4iPLIK88E2vxiUk9%2FSUR0zTto0Qj9MMrYVv1qUAgh2XR4wMgD01W1O4qUlSmIHIPtadf%2BJB3BVeq1YVW5qfYa%2Be3msNVgw1qL1RuJxKoTauiTmN2VgbIqiJjfkdyJBU6gUoPmge23fZNVXrofFncgdoZ0RVg5TplP%2Bw3rJZ7Db6V%2BqMcPzqj8ZCddPOIA2dU3%2FLlo8M5m6fUyRMv0POatHv1IoXMpD2LBWffSxkZT8w9FNF5vjlDXoBSq9R2J0wecN3bTANzGLho8JYg4Mc%2BgTeafGPsg94yqpnYfQmVA5vDKSAf7%2FN%2FI1aulx9EjA%2BPFjKWzz4i3H3ts1hBikV%2Fuv7Jc2R%2F%2FUn25fY3%2Fy853akD6%2BLHbfokz6litX0%2BEhX9jAyb8KLfI7SYu%2FWveLOJIgpb0YFPMBFTVYvlzBcESbs%2FDZoCBfVpuiMJmQ7%2FnrzaObz9FYbJ5LOzTBa4RDKLfgCnxl90x%2FtWNREKAmH2pY1x5dWIP9Q0NFhfpbhvrKN3HGod1WngjohpqbLyhae87wF8nMZYMrzmFoc%2B1J4IcbYRjx4h8p4ud%2Fl8EjaM7LJ4fwAXoO0jTrq4ilGVMt5QoUfIF20yADpw3W15nXeSq3poDCdmOLEBjqkAdrrTqtLrL98FI1bbuU6HOQsl7FqJvNcwHkT83CZD7OMDYpLgx15iCsj2WMqrGdRh%2Fjn2nXxQoyvT71q8qhO3ZN%2BIVhrupcKm1whO3%2FyFF%2FTr0MzRFdVGeIyuQBbur22puorkmFkcyCMmDUnc3wyQfGQVD0lQi1dnK6H4yUW2EWXq7WXfQxMiXbACZvxiav5QpdGyAYc7OpWvuCqXzrjHUMHh%2Frw&X-Amz-Signature=b22f08e53347795f5b4383e80dcc1771bb23759b960fedf1a87f9ee8d7d589d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVTAAP7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCERcz8WVYs4HNBjXlbH7yFFwrw3GcixV%2BNBDmMaDUELAIhAOXT6wSoh3s6yvAnPGxI%2BHtu6zKmbL29T8wgY36uMQlMKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8V2dLykpKuf6IGEIq3AN6nlnWmIoMa3dGI4iPLIK88E2vxiUk9%2FSUR0zTto0Qj9MMrYVv1qUAgh2XR4wMgD01W1O4qUlSmIHIPtadf%2BJB3BVeq1YVW5qfYa%2Be3msNVgw1qL1RuJxKoTauiTmN2VgbIqiJjfkdyJBU6gUoPmge23fZNVXrofFncgdoZ0RVg5TplP%2Bw3rJZ7Db6V%2BqMcPzqj8ZCddPOIA2dU3%2FLlo8M5m6fUyRMv0POatHv1IoXMpD2LBWffSxkZT8w9FNF5vjlDXoBSq9R2J0wecN3bTANzGLho8JYg4Mc%2BgTeafGPsg94yqpnYfQmVA5vDKSAf7%2FN%2FI1aulx9EjA%2BPFjKWzz4i3H3ts1hBikV%2Fuv7Jc2R%2F%2FUn25fY3%2Fy853akD6%2BLHbfokz6litX0%2BEhX9jAyb8KLfI7SYu%2FWveLOJIgpb0YFPMBFTVYvlzBcESbs%2FDZoCBfVpuiMJmQ7%2FnrzaObz9FYbJ5LOzTBa4RDKLfgCnxl90x%2FtWNREKAmH2pY1x5dWIP9Q0NFhfpbhvrKN3HGod1WngjohpqbLyhae87wF8nMZYMrzmFoc%2B1J4IcbYRjx4h8p4ud%2Fl8EjaM7LJ4fwAXoO0jTrq4ilGVMt5QoUfIF20yADpw3W15nXeSq3poDCdmOLEBjqkAdrrTqtLrL98FI1bbuU6HOQsl7FqJvNcwHkT83CZD7OMDYpLgx15iCsj2WMqrGdRh%2Fjn2nXxQoyvT71q8qhO3ZN%2BIVhrupcKm1whO3%2FyFF%2FTr0MzRFdVGeIyuQBbur22puorkmFkcyCMmDUnc3wyQfGQVD0lQi1dnK6H4yUW2EWXq7WXfQxMiXbACZvxiav5QpdGyAYc7OpWvuCqXzrjHUMHh%2Frw&X-Amz-Signature=71acc46214796d6fd893bc06ac20b757c74881f618199b3eadf71659d4924f70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVTAAP7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCERcz8WVYs4HNBjXlbH7yFFwrw3GcixV%2BNBDmMaDUELAIhAOXT6wSoh3s6yvAnPGxI%2BHtu6zKmbL29T8wgY36uMQlMKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8V2dLykpKuf6IGEIq3AN6nlnWmIoMa3dGI4iPLIK88E2vxiUk9%2FSUR0zTto0Qj9MMrYVv1qUAgh2XR4wMgD01W1O4qUlSmIHIPtadf%2BJB3BVeq1YVW5qfYa%2Be3msNVgw1qL1RuJxKoTauiTmN2VgbIqiJjfkdyJBU6gUoPmge23fZNVXrofFncgdoZ0RVg5TplP%2Bw3rJZ7Db6V%2BqMcPzqj8ZCddPOIA2dU3%2FLlo8M5m6fUyRMv0POatHv1IoXMpD2LBWffSxkZT8w9FNF5vjlDXoBSq9R2J0wecN3bTANzGLho8JYg4Mc%2BgTeafGPsg94yqpnYfQmVA5vDKSAf7%2FN%2FI1aulx9EjA%2BPFjKWzz4i3H3ts1hBikV%2Fuv7Jc2R%2F%2FUn25fY3%2Fy853akD6%2BLHbfokz6litX0%2BEhX9jAyb8KLfI7SYu%2FWveLOJIgpb0YFPMBFTVYvlzBcESbs%2FDZoCBfVpuiMJmQ7%2FnrzaObz9FYbJ5LOzTBa4RDKLfgCnxl90x%2FtWNREKAmH2pY1x5dWIP9Q0NFhfpbhvrKN3HGod1WngjohpqbLyhae87wF8nMZYMrzmFoc%2B1J4IcbYRjx4h8p4ud%2Fl8EjaM7LJ4fwAXoO0jTrq4ilGVMt5QoUfIF20yADpw3W15nXeSq3poDCdmOLEBjqkAdrrTqtLrL98FI1bbuU6HOQsl7FqJvNcwHkT83CZD7OMDYpLgx15iCsj2WMqrGdRh%2Fjn2nXxQoyvT71q8qhO3ZN%2BIVhrupcKm1whO3%2FyFF%2FTr0MzRFdVGeIyuQBbur22puorkmFkcyCMmDUnc3wyQfGQVD0lQi1dnK6H4yUW2EWXq7WXfQxMiXbACZvxiav5QpdGyAYc7OpWvuCqXzrjHUMHh%2Frw&X-Amz-Signature=352d34c0051f8f8bae7b04fb74942a29be659401cbd235da5fe927bec61d9d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXLPE4LZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA1c3AkL9xJ%2F4Ox%2F%2Fz5jfVv4TQHYzVx0gkINooe4ln4AIgN48F7SRNJlyjGX8SNqdtuMO0D3ZU8DhD4HxjGyAjUvIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BYMLh3AslrFtVgwCrcA38RZm%2FTRzSe5Kokb9Z3WuLF6Q2Br7hN0n5LeT%2BI3yngCBRI%2FkmjFX7uYSbSD2XX0CTmSjyC5U2XIEf89eZ1li0Ckzk3UeYzv63ZFUV3BKNqB81%2BRzKmy1tPjny5eswDukDkpZb0O4TtJA4AhT9qPSZq2Ca0HJ1Qm3bL5lvmrpYM5fEfYLLxXLf9W48N2BPWiteFo3N9Ty%2ByiyljMXfMTBSmhln8s4mchQFipmlJkqt3mDOKjto9ggDRMDCjixhWatsvhtITcjHyk5YnSTqWPNh6JeCfwqFlt%2F8Z4g%2BImXBWCxtUgjS4%2F9g3G2Q%2F13wRisARN0IXfYNoyJy3ua8JHcnb68WJnHn5BK%2BXUGZGzF%2BBD9uVwbTqvuolt7cbBjQW3%2B%2FeiRXvPEXnvvGrQriJF2AYo%2F5KBPLXTXCwuyS5LylzpUQ1d5MOY1hXgDQpDjSu7BLbQfLA%2FVo6byFsJVOq6NFooKx%2BgRzzIkJ6mUrR5WKlgldpBNa39dC1wuKvyHZvZDhLwXBaiO9cZx3GaHRCRv4cWWRi%2FEoUplb02cJkBjieYay4YjpkIOtymXzDuukIcmIn5AWDPaB5ln32we0UjixG6TzwEUZmca3k7Fr9jibtzbZEkyp0HfGGtcH4MOKY4sQGOqUBGep4O4pLTm6fVs7Gpv2nFOTN6HHzpIM8CNd1M0YsgF24GPy04gsIhH3V3HW8jUp8MIahRlHvN2Jf5Jt%2BDEePit2w5n1wo4013GPrJhPNsufHSPY9ugkHVxX3yQo8S%2BPGV1VNfTug4Ze2rnYx5iLcYjPkBlIFNodbmq8815%2Fovd8%2F9G%2FLrsFZrZ4LlF7nyjfpNgm%2FTJLDeCschbPB1mLahzdNOz6B&X-Amz-Signature=31d32f19f4bcc99d294339c873ef4588588584492e90ac757627dbeeddeff3ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVTAAP7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCERcz8WVYs4HNBjXlbH7yFFwrw3GcixV%2BNBDmMaDUELAIhAOXT6wSoh3s6yvAnPGxI%2BHtu6zKmbL29T8wgY36uMQlMKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8V2dLykpKuf6IGEIq3AN6nlnWmIoMa3dGI4iPLIK88E2vxiUk9%2FSUR0zTto0Qj9MMrYVv1qUAgh2XR4wMgD01W1O4qUlSmIHIPtadf%2BJB3BVeq1YVW5qfYa%2Be3msNVgw1qL1RuJxKoTauiTmN2VgbIqiJjfkdyJBU6gUoPmge23fZNVXrofFncgdoZ0RVg5TplP%2Bw3rJZ7Db6V%2BqMcPzqj8ZCddPOIA2dU3%2FLlo8M5m6fUyRMv0POatHv1IoXMpD2LBWffSxkZT8w9FNF5vjlDXoBSq9R2J0wecN3bTANzGLho8JYg4Mc%2BgTeafGPsg94yqpnYfQmVA5vDKSAf7%2FN%2FI1aulx9EjA%2BPFjKWzz4i3H3ts1hBikV%2Fuv7Jc2R%2F%2FUn25fY3%2Fy853akD6%2BLHbfokz6litX0%2BEhX9jAyb8KLfI7SYu%2FWveLOJIgpb0YFPMBFTVYvlzBcESbs%2FDZoCBfVpuiMJmQ7%2FnrzaObz9FYbJ5LOzTBa4RDKLfgCnxl90x%2FtWNREKAmH2pY1x5dWIP9Q0NFhfpbhvrKN3HGod1WngjohpqbLyhae87wF8nMZYMrzmFoc%2B1J4IcbYRjx4h8p4ud%2Fl8EjaM7LJ4fwAXoO0jTrq4ilGVMt5QoUfIF20yADpw3W15nXeSq3poDCdmOLEBjqkAdrrTqtLrL98FI1bbuU6HOQsl7FqJvNcwHkT83CZD7OMDYpLgx15iCsj2WMqrGdRh%2Fjn2nXxQoyvT71q8qhO3ZN%2BIVhrupcKm1whO3%2FyFF%2FTr0MzRFdVGeIyuQBbur22puorkmFkcyCMmDUnc3wyQfGQVD0lQi1dnK6H4yUW2EWXq7WXfQxMiXbACZvxiav5QpdGyAYc7OpWvuCqXzrjHUMHh%2Frw&X-Amz-Signature=456957a8a4f35fe8bb0a058b580fd584b97cbc18fb0bc70c44d39c8586d3838e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVTAAP7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCERcz8WVYs4HNBjXlbH7yFFwrw3GcixV%2BNBDmMaDUELAIhAOXT6wSoh3s6yvAnPGxI%2BHtu6zKmbL29T8wgY36uMQlMKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8V2dLykpKuf6IGEIq3AN6nlnWmIoMa3dGI4iPLIK88E2vxiUk9%2FSUR0zTto0Qj9MMrYVv1qUAgh2XR4wMgD01W1O4qUlSmIHIPtadf%2BJB3BVeq1YVW5qfYa%2Be3msNVgw1qL1RuJxKoTauiTmN2VgbIqiJjfkdyJBU6gUoPmge23fZNVXrofFncgdoZ0RVg5TplP%2Bw3rJZ7Db6V%2BqMcPzqj8ZCddPOIA2dU3%2FLlo8M5m6fUyRMv0POatHv1IoXMpD2LBWffSxkZT8w9FNF5vjlDXoBSq9R2J0wecN3bTANzGLho8JYg4Mc%2BgTeafGPsg94yqpnYfQmVA5vDKSAf7%2FN%2FI1aulx9EjA%2BPFjKWzz4i3H3ts1hBikV%2Fuv7Jc2R%2F%2FUn25fY3%2Fy853akD6%2BLHbfokz6litX0%2BEhX9jAyb8KLfI7SYu%2FWveLOJIgpb0YFPMBFTVYvlzBcESbs%2FDZoCBfVpuiMJmQ7%2FnrzaObz9FYbJ5LOzTBa4RDKLfgCnxl90x%2FtWNREKAmH2pY1x5dWIP9Q0NFhfpbhvrKN3HGod1WngjohpqbLyhae87wF8nMZYMrzmFoc%2B1J4IcbYRjx4h8p4ud%2Fl8EjaM7LJ4fwAXoO0jTrq4ilGVMt5QoUfIF20yADpw3W15nXeSq3poDCdmOLEBjqkAdrrTqtLrL98FI1bbuU6HOQsl7FqJvNcwHkT83CZD7OMDYpLgx15iCsj2WMqrGdRh%2Fjn2nXxQoyvT71q8qhO3ZN%2BIVhrupcKm1whO3%2FyFF%2FTr0MzRFdVGeIyuQBbur22puorkmFkcyCMmDUnc3wyQfGQVD0lQi1dnK6H4yUW2EWXq7WXfQxMiXbACZvxiav5QpdGyAYc7OpWvuCqXzrjHUMHh%2Frw&X-Amz-Signature=db7046f072fa24d167dc8220ebf40822d8bee3f1de8e9f46c65568b5cace12b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVTAAP7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCERcz8WVYs4HNBjXlbH7yFFwrw3GcixV%2BNBDmMaDUELAIhAOXT6wSoh3s6yvAnPGxI%2BHtu6zKmbL29T8wgY36uMQlMKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8V2dLykpKuf6IGEIq3AN6nlnWmIoMa3dGI4iPLIK88E2vxiUk9%2FSUR0zTto0Qj9MMrYVv1qUAgh2XR4wMgD01W1O4qUlSmIHIPtadf%2BJB3BVeq1YVW5qfYa%2Be3msNVgw1qL1RuJxKoTauiTmN2VgbIqiJjfkdyJBU6gUoPmge23fZNVXrofFncgdoZ0RVg5TplP%2Bw3rJZ7Db6V%2BqMcPzqj8ZCddPOIA2dU3%2FLlo8M5m6fUyRMv0POatHv1IoXMpD2LBWffSxkZT8w9FNF5vjlDXoBSq9R2J0wecN3bTANzGLho8JYg4Mc%2BgTeafGPsg94yqpnYfQmVA5vDKSAf7%2FN%2FI1aulx9EjA%2BPFjKWzz4i3H3ts1hBikV%2Fuv7Jc2R%2F%2FUn25fY3%2Fy853akD6%2BLHbfokz6litX0%2BEhX9jAyb8KLfI7SYu%2FWveLOJIgpb0YFPMBFTVYvlzBcESbs%2FDZoCBfVpuiMJmQ7%2FnrzaObz9FYbJ5LOzTBa4RDKLfgCnxl90x%2FtWNREKAmH2pY1x5dWIP9Q0NFhfpbhvrKN3HGod1WngjohpqbLyhae87wF8nMZYMrzmFoc%2B1J4IcbYRjx4h8p4ud%2Fl8EjaM7LJ4fwAXoO0jTrq4ilGVMt5QoUfIF20yADpw3W15nXeSq3poDCdmOLEBjqkAdrrTqtLrL98FI1bbuU6HOQsl7FqJvNcwHkT83CZD7OMDYpLgx15iCsj2WMqrGdRh%2Fjn2nXxQoyvT71q8qhO3ZN%2BIVhrupcKm1whO3%2FyFF%2FTr0MzRFdVGeIyuQBbur22puorkmFkcyCMmDUnc3wyQfGQVD0lQi1dnK6H4yUW2EWXq7WXfQxMiXbACZvxiav5QpdGyAYc7OpWvuCqXzrjHUMHh%2Frw&X-Amz-Signature=c4a410a90a396b1cc7ee41a060adc8552968faadeb6e93026e53278d6ab099bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVTAAP7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCERcz8WVYs4HNBjXlbH7yFFwrw3GcixV%2BNBDmMaDUELAIhAOXT6wSoh3s6yvAnPGxI%2BHtu6zKmbL29T8wgY36uMQlMKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8V2dLykpKuf6IGEIq3AN6nlnWmIoMa3dGI4iPLIK88E2vxiUk9%2FSUR0zTto0Qj9MMrYVv1qUAgh2XR4wMgD01W1O4qUlSmIHIPtadf%2BJB3BVeq1YVW5qfYa%2Be3msNVgw1qL1RuJxKoTauiTmN2VgbIqiJjfkdyJBU6gUoPmge23fZNVXrofFncgdoZ0RVg5TplP%2Bw3rJZ7Db6V%2BqMcPzqj8ZCddPOIA2dU3%2FLlo8M5m6fUyRMv0POatHv1IoXMpD2LBWffSxkZT8w9FNF5vjlDXoBSq9R2J0wecN3bTANzGLho8JYg4Mc%2BgTeafGPsg94yqpnYfQmVA5vDKSAf7%2FN%2FI1aulx9EjA%2BPFjKWzz4i3H3ts1hBikV%2Fuv7Jc2R%2F%2FUn25fY3%2Fy853akD6%2BLHbfokz6litX0%2BEhX9jAyb8KLfI7SYu%2FWveLOJIgpb0YFPMBFTVYvlzBcESbs%2FDZoCBfVpuiMJmQ7%2FnrzaObz9FYbJ5LOzTBa4RDKLfgCnxl90x%2FtWNREKAmH2pY1x5dWIP9Q0NFhfpbhvrKN3HGod1WngjohpqbLyhae87wF8nMZYMrzmFoc%2B1J4IcbYRjx4h8p4ud%2Fl8EjaM7LJ4fwAXoO0jTrq4ilGVMt5QoUfIF20yADpw3W15nXeSq3poDCdmOLEBjqkAdrrTqtLrL98FI1bbuU6HOQsl7FqJvNcwHkT83CZD7OMDYpLgx15iCsj2WMqrGdRh%2Fjn2nXxQoyvT71q8qhO3ZN%2BIVhrupcKm1whO3%2FyFF%2FTr0MzRFdVGeIyuQBbur22puorkmFkcyCMmDUnc3wyQfGQVD0lQi1dnK6H4yUW2EWXq7WXfQxMiXbACZvxiav5QpdGyAYc7OpWvuCqXzrjHUMHh%2Frw&X-Amz-Signature=eb25488dd5eff379102d40f69ce0d511d5fd9fcf60ddb7f1bd7d3e0268dec568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVTAAP7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCERcz8WVYs4HNBjXlbH7yFFwrw3GcixV%2BNBDmMaDUELAIhAOXT6wSoh3s6yvAnPGxI%2BHtu6zKmbL29T8wgY36uMQlMKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8V2dLykpKuf6IGEIq3AN6nlnWmIoMa3dGI4iPLIK88E2vxiUk9%2FSUR0zTto0Qj9MMrYVv1qUAgh2XR4wMgD01W1O4qUlSmIHIPtadf%2BJB3BVeq1YVW5qfYa%2Be3msNVgw1qL1RuJxKoTauiTmN2VgbIqiJjfkdyJBU6gUoPmge23fZNVXrofFncgdoZ0RVg5TplP%2Bw3rJZ7Db6V%2BqMcPzqj8ZCddPOIA2dU3%2FLlo8M5m6fUyRMv0POatHv1IoXMpD2LBWffSxkZT8w9FNF5vjlDXoBSq9R2J0wecN3bTANzGLho8JYg4Mc%2BgTeafGPsg94yqpnYfQmVA5vDKSAf7%2FN%2FI1aulx9EjA%2BPFjKWzz4i3H3ts1hBikV%2Fuv7Jc2R%2F%2FUn25fY3%2Fy853akD6%2BLHbfokz6litX0%2BEhX9jAyb8KLfI7SYu%2FWveLOJIgpb0YFPMBFTVYvlzBcESbs%2FDZoCBfVpuiMJmQ7%2FnrzaObz9FYbJ5LOzTBa4RDKLfgCnxl90x%2FtWNREKAmH2pY1x5dWIP9Q0NFhfpbhvrKN3HGod1WngjohpqbLyhae87wF8nMZYMrzmFoc%2B1J4IcbYRjx4h8p4ud%2Fl8EjaM7LJ4fwAXoO0jTrq4ilGVMt5QoUfIF20yADpw3W15nXeSq3poDCdmOLEBjqkAdrrTqtLrL98FI1bbuU6HOQsl7FqJvNcwHkT83CZD7OMDYpLgx15iCsj2WMqrGdRh%2Fjn2nXxQoyvT71q8qhO3ZN%2BIVhrupcKm1whO3%2FyFF%2FTr0MzRFdVGeIyuQBbur22puorkmFkcyCMmDUnc3wyQfGQVD0lQi1dnK6H4yUW2EWXq7WXfQxMiXbACZvxiav5QpdGyAYc7OpWvuCqXzrjHUMHh%2Frw&X-Amz-Signature=75d0db7bce097b777bccbfbc8b330ed5b5c50b46052ea67928a898525b71f555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVTAAP7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCERcz8WVYs4HNBjXlbH7yFFwrw3GcixV%2BNBDmMaDUELAIhAOXT6wSoh3s6yvAnPGxI%2BHtu6zKmbL29T8wgY36uMQlMKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8V2dLykpKuf6IGEIq3AN6nlnWmIoMa3dGI4iPLIK88E2vxiUk9%2FSUR0zTto0Qj9MMrYVv1qUAgh2XR4wMgD01W1O4qUlSmIHIPtadf%2BJB3BVeq1YVW5qfYa%2Be3msNVgw1qL1RuJxKoTauiTmN2VgbIqiJjfkdyJBU6gUoPmge23fZNVXrofFncgdoZ0RVg5TplP%2Bw3rJZ7Db6V%2BqMcPzqj8ZCddPOIA2dU3%2FLlo8M5m6fUyRMv0POatHv1IoXMpD2LBWffSxkZT8w9FNF5vjlDXoBSq9R2J0wecN3bTANzGLho8JYg4Mc%2BgTeafGPsg94yqpnYfQmVA5vDKSAf7%2FN%2FI1aulx9EjA%2BPFjKWzz4i3H3ts1hBikV%2Fuv7Jc2R%2F%2FUn25fY3%2Fy853akD6%2BLHbfokz6litX0%2BEhX9jAyb8KLfI7SYu%2FWveLOJIgpb0YFPMBFTVYvlzBcESbs%2FDZoCBfVpuiMJmQ7%2FnrzaObz9FYbJ5LOzTBa4RDKLfgCnxl90x%2FtWNREKAmH2pY1x5dWIP9Q0NFhfpbhvrKN3HGod1WngjohpqbLyhae87wF8nMZYMrzmFoc%2B1J4IcbYRjx4h8p4ud%2Fl8EjaM7LJ4fwAXoO0jTrq4ilGVMt5QoUfIF20yADpw3W15nXeSq3poDCdmOLEBjqkAdrrTqtLrL98FI1bbuU6HOQsl7FqJvNcwHkT83CZD7OMDYpLgx15iCsj2WMqrGdRh%2Fjn2nXxQoyvT71q8qhO3ZN%2BIVhrupcKm1whO3%2FyFF%2FTr0MzRFdVGeIyuQBbur22puorkmFkcyCMmDUnc3wyQfGQVD0lQi1dnK6H4yUW2EWXq7WXfQxMiXbACZvxiav5QpdGyAYc7OpWvuCqXzrjHUMHh%2Frw&X-Amz-Signature=e148472ae361314148a7a33d1129d8ae5322ce082abd5f869a9739c81023bc07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
