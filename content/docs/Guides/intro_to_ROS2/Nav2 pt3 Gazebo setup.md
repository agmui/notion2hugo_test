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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XW7YL5O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAxRM5EyNm6jkSkDZq1LuHLF1KmrCc0KTHI16%2FFdE0yJAiB93%2FgEwduDe%2FA8a8p2i5FZb2Yf5ELCctWyJAaS6VB44Cr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMjGMl3NztcGYinpfvKtwDg4chLtL7pOI5yrevRs%2FR6Ze1CSIjLYdD9ccrb81mtwJ%2Fh8dD48T0zTDHmaFjLBs8UadZa5SX%2FYA6M24d%2FA%2FCVkUol1LnnYQjX%2FNtTG3XMxPeM0FYd%2Btr7J8KbCXQLhmuxnzpjVT%2FdJa3hxEKr57KCFlpB44OTipq7q%2BNxmWe9H8Zwi0xCKvBOoyfBEIt1NKnvCuffzU8UnS1YC%2B7jOAWk6EoeLtp1162N7iUEwJEPXE1bQmfGbaLnoKmIgkn%2BjShKdsx%2BAsaoxm%2FZE1ReKjfYcMNPp1rF2fwvmiIK0gC5Sewf7Ed%2BBOKZO8406rxf52ieicvUG82bgXhGihkh9zu9OBQNyK9%2FEvaNCDgDYgGsYu4Ql7CdZqhDmSgdgqauvVOlzEmJpi%2F5e807b3tGzDeuuiF1q3eZiz6mt5eqrWcFtMufSudK9DJ7c9f0mBvf7f%2BHE82rRk9vFc4hCNGfvflxZ8If%2BHICuNixrRifJ3en5pHO73mGv54xGK3LBYn4tx7wUeTWg2Zo1YOMRjzi9VOrIpulL4GkpZaL8dbPeceVjF%2Bl2R6r1LE0ryfPTNY8nEq%2BYiDISXPocehuT648ElUSTmszFCkS5mb0xwhBz9deW9UOdQq4nmVP%2Ffy7%2F0wodv9xAY6pgFnmLcFpJGwiMbsLWflDbqruyMab2eh2AbeNlaiJiFR%2Bc8ZWGfPLiGe32pPrbgMjPtL5lUnqOmuRIn8Yzl8B8ct%2F7EORp4xD%2Bpp3rLtkkOl0Q1qHTUAMdMnw2%2BEZ8cN%2B44Hl0ZeC%2B5QiYXDM5TAcOILN7xukYUwWgoTeFRvffy09uQbOZZ0MUAEcQCn2syGgkTILBJvQovX%2BR9nXyFr%2B8AoUKAx61qx&X-Amz-Signature=b52ff2d9ee0296cbf34a4320d58c6f708b030e25e8a41a53b82c886054d33df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XW7YL5O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAxRM5EyNm6jkSkDZq1LuHLF1KmrCc0KTHI16%2FFdE0yJAiB93%2FgEwduDe%2FA8a8p2i5FZb2Yf5ELCctWyJAaS6VB44Cr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMjGMl3NztcGYinpfvKtwDg4chLtL7pOI5yrevRs%2FR6Ze1CSIjLYdD9ccrb81mtwJ%2Fh8dD48T0zTDHmaFjLBs8UadZa5SX%2FYA6M24d%2FA%2FCVkUol1LnnYQjX%2FNtTG3XMxPeM0FYd%2Btr7J8KbCXQLhmuxnzpjVT%2FdJa3hxEKr57KCFlpB44OTipq7q%2BNxmWe9H8Zwi0xCKvBOoyfBEIt1NKnvCuffzU8UnS1YC%2B7jOAWk6EoeLtp1162N7iUEwJEPXE1bQmfGbaLnoKmIgkn%2BjShKdsx%2BAsaoxm%2FZE1ReKjfYcMNPp1rF2fwvmiIK0gC5Sewf7Ed%2BBOKZO8406rxf52ieicvUG82bgXhGihkh9zu9OBQNyK9%2FEvaNCDgDYgGsYu4Ql7CdZqhDmSgdgqauvVOlzEmJpi%2F5e807b3tGzDeuuiF1q3eZiz6mt5eqrWcFtMufSudK9DJ7c9f0mBvf7f%2BHE82rRk9vFc4hCNGfvflxZ8If%2BHICuNixrRifJ3en5pHO73mGv54xGK3LBYn4tx7wUeTWg2Zo1YOMRjzi9VOrIpulL4GkpZaL8dbPeceVjF%2Bl2R6r1LE0ryfPTNY8nEq%2BYiDISXPocehuT648ElUSTmszFCkS5mb0xwhBz9deW9UOdQq4nmVP%2Ffy7%2F0wodv9xAY6pgFnmLcFpJGwiMbsLWflDbqruyMab2eh2AbeNlaiJiFR%2Bc8ZWGfPLiGe32pPrbgMjPtL5lUnqOmuRIn8Yzl8B8ct%2F7EORp4xD%2Bpp3rLtkkOl0Q1qHTUAMdMnw2%2BEZ8cN%2B44Hl0ZeC%2B5QiYXDM5TAcOILN7xukYUwWgoTeFRvffy09uQbOZZ0MUAEcQCn2syGgkTILBJvQovX%2BR9nXyFr%2B8AoUKAx61qx&X-Amz-Signature=099030e060e213a6686945276fe326c78fd68c2f7108827e1fa77844a1d4937c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XW7YL5O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAxRM5EyNm6jkSkDZq1LuHLF1KmrCc0KTHI16%2FFdE0yJAiB93%2FgEwduDe%2FA8a8p2i5FZb2Yf5ELCctWyJAaS6VB44Cr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMjGMl3NztcGYinpfvKtwDg4chLtL7pOI5yrevRs%2FR6Ze1CSIjLYdD9ccrb81mtwJ%2Fh8dD48T0zTDHmaFjLBs8UadZa5SX%2FYA6M24d%2FA%2FCVkUol1LnnYQjX%2FNtTG3XMxPeM0FYd%2Btr7J8KbCXQLhmuxnzpjVT%2FdJa3hxEKr57KCFlpB44OTipq7q%2BNxmWe9H8Zwi0xCKvBOoyfBEIt1NKnvCuffzU8UnS1YC%2B7jOAWk6EoeLtp1162N7iUEwJEPXE1bQmfGbaLnoKmIgkn%2BjShKdsx%2BAsaoxm%2FZE1ReKjfYcMNPp1rF2fwvmiIK0gC5Sewf7Ed%2BBOKZO8406rxf52ieicvUG82bgXhGihkh9zu9OBQNyK9%2FEvaNCDgDYgGsYu4Ql7CdZqhDmSgdgqauvVOlzEmJpi%2F5e807b3tGzDeuuiF1q3eZiz6mt5eqrWcFtMufSudK9DJ7c9f0mBvf7f%2BHE82rRk9vFc4hCNGfvflxZ8If%2BHICuNixrRifJ3en5pHO73mGv54xGK3LBYn4tx7wUeTWg2Zo1YOMRjzi9VOrIpulL4GkpZaL8dbPeceVjF%2Bl2R6r1LE0ryfPTNY8nEq%2BYiDISXPocehuT648ElUSTmszFCkS5mb0xwhBz9deW9UOdQq4nmVP%2Ffy7%2F0wodv9xAY6pgFnmLcFpJGwiMbsLWflDbqruyMab2eh2AbeNlaiJiFR%2Bc8ZWGfPLiGe32pPrbgMjPtL5lUnqOmuRIn8Yzl8B8ct%2F7EORp4xD%2Bpp3rLtkkOl0Q1qHTUAMdMnw2%2BEZ8cN%2B44Hl0ZeC%2B5QiYXDM5TAcOILN7xukYUwWgoTeFRvffy09uQbOZZ0MUAEcQCn2syGgkTILBJvQovX%2BR9nXyFr%2B8AoUKAx61qx&X-Amz-Signature=d70f56c5cc562eb3ead32e365913fad5d649b6fa2e4bb9ac7f660b4f4f65dfc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XW7YL5O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAxRM5EyNm6jkSkDZq1LuHLF1KmrCc0KTHI16%2FFdE0yJAiB93%2FgEwduDe%2FA8a8p2i5FZb2Yf5ELCctWyJAaS6VB44Cr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMjGMl3NztcGYinpfvKtwDg4chLtL7pOI5yrevRs%2FR6Ze1CSIjLYdD9ccrb81mtwJ%2Fh8dD48T0zTDHmaFjLBs8UadZa5SX%2FYA6M24d%2FA%2FCVkUol1LnnYQjX%2FNtTG3XMxPeM0FYd%2Btr7J8KbCXQLhmuxnzpjVT%2FdJa3hxEKr57KCFlpB44OTipq7q%2BNxmWe9H8Zwi0xCKvBOoyfBEIt1NKnvCuffzU8UnS1YC%2B7jOAWk6EoeLtp1162N7iUEwJEPXE1bQmfGbaLnoKmIgkn%2BjShKdsx%2BAsaoxm%2FZE1ReKjfYcMNPp1rF2fwvmiIK0gC5Sewf7Ed%2BBOKZO8406rxf52ieicvUG82bgXhGihkh9zu9OBQNyK9%2FEvaNCDgDYgGsYu4Ql7CdZqhDmSgdgqauvVOlzEmJpi%2F5e807b3tGzDeuuiF1q3eZiz6mt5eqrWcFtMufSudK9DJ7c9f0mBvf7f%2BHE82rRk9vFc4hCNGfvflxZ8If%2BHICuNixrRifJ3en5pHO73mGv54xGK3LBYn4tx7wUeTWg2Zo1YOMRjzi9VOrIpulL4GkpZaL8dbPeceVjF%2Bl2R6r1LE0ryfPTNY8nEq%2BYiDISXPocehuT648ElUSTmszFCkS5mb0xwhBz9deW9UOdQq4nmVP%2Ffy7%2F0wodv9xAY6pgFnmLcFpJGwiMbsLWflDbqruyMab2eh2AbeNlaiJiFR%2Bc8ZWGfPLiGe32pPrbgMjPtL5lUnqOmuRIn8Yzl8B8ct%2F7EORp4xD%2Bpp3rLtkkOl0Q1qHTUAMdMnw2%2BEZ8cN%2B44Hl0ZeC%2B5QiYXDM5TAcOILN7xukYUwWgoTeFRvffy09uQbOZZ0MUAEcQCn2syGgkTILBJvQovX%2BR9nXyFr%2B8AoUKAx61qx&X-Amz-Signature=086069d0868d3342e1398a44e7de99221e5659ddc1e8286587b9a338d60eacb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O2ZDKLZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCYoSA5VzaNaPC20iYPsV01sP%2BaqrhaXR1ZUmmf4Em1zQIgSq3Ie%2BdLJCp4hFrJayYGe6qpdbYWDlBne%2FmWB2WQp24q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNs%2BirfAIotmWougASrcA5a0nzR9xUA8r3Vm4TibWMd4mz028OMsY0es5DPl5fjpUXmIdBZ9ayUe7SbW%2F6r9TeZN7mjfRF3gT4B%2B98YhIKydo1w6K1mUYT2OxhGXiMoxphnLKIOez32Q9Q0s2bHFAipLRqAtGIId3Zf7JtJ9nN1LjR6dwUfVn0cN47qm7jiRNrAGGjj43JE78sPYtvx1csg853BpgRHYcF8emR2WnAz9Vx5D1LJoDvz3E%2BmAJbPTj9u%2BI6t4%2FCeXZW9Vwgtq1BvO68UY8ohB0Fd6R%2Fk3Osdh%2Bmc0XXIO5oSlHAHkGL4xK2FnKyksyfGDp574acaSHrAHFPVPmRS7LXxaHjHMXLDP5sqwxsQO2OHEjne8zWCEZUfFcVsmenqHpK0mlBqCrzwLaLh54FqwUyv%2BksZZAlwlog%2FE610b3xOErKVcWqhBxCWvs7ifZ%2BPfjOyO2i9neLxxvXWT7L4HFMsx%2BZ%2Bt0tDIgp6dl6qSRPWRKGvzTA3zSoFfurAw%2BzakUlWF3ZM5EOBjUKdo4u9uOt4Dg7%2BoYveaS6uLLquqZO6rs4oEIHnPX4NS4KpryvyQ701Lx5iokkJBdG3Msjuq4aBK4aRfhI7IkAwm9HCsUCte8dRQV3e5bn2ZvnMnqECFipwOMKLb%2FcQGOqUBiyL%2B7BNT4z9JkbvcZNGund97jVp5nyyT3QTKLdxSU8D1%2BSJeLBgquxKUbctyHYhvEQE9HDaIQ3fvdj%2BbpYrTEAwJDz88iRlk7vSzudP%2FJAecE0nn7HjhQthcsO8SLkNly8lzmQ9jY3kLwr7uNpTstbFJu%2FwxGPqIECnqFuwzQDu4kBiOf0%2FeafFc2LGXRiV2%2BXNOt6LDuAqCiu2puUUi5N7WobWj&X-Amz-Signature=e33f5e8f4afa92c19e5f6301dc3984c752312bdc357e628ca09c22c6ddfddf42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XW7YL5O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAxRM5EyNm6jkSkDZq1LuHLF1KmrCc0KTHI16%2FFdE0yJAiB93%2FgEwduDe%2FA8a8p2i5FZb2Yf5ELCctWyJAaS6VB44Cr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMjGMl3NztcGYinpfvKtwDg4chLtL7pOI5yrevRs%2FR6Ze1CSIjLYdD9ccrb81mtwJ%2Fh8dD48T0zTDHmaFjLBs8UadZa5SX%2FYA6M24d%2FA%2FCVkUol1LnnYQjX%2FNtTG3XMxPeM0FYd%2Btr7J8KbCXQLhmuxnzpjVT%2FdJa3hxEKr57KCFlpB44OTipq7q%2BNxmWe9H8Zwi0xCKvBOoyfBEIt1NKnvCuffzU8UnS1YC%2B7jOAWk6EoeLtp1162N7iUEwJEPXE1bQmfGbaLnoKmIgkn%2BjShKdsx%2BAsaoxm%2FZE1ReKjfYcMNPp1rF2fwvmiIK0gC5Sewf7Ed%2BBOKZO8406rxf52ieicvUG82bgXhGihkh9zu9OBQNyK9%2FEvaNCDgDYgGsYu4Ql7CdZqhDmSgdgqauvVOlzEmJpi%2F5e807b3tGzDeuuiF1q3eZiz6mt5eqrWcFtMufSudK9DJ7c9f0mBvf7f%2BHE82rRk9vFc4hCNGfvflxZ8If%2BHICuNixrRifJ3en5pHO73mGv54xGK3LBYn4tx7wUeTWg2Zo1YOMRjzi9VOrIpulL4GkpZaL8dbPeceVjF%2Bl2R6r1LE0ryfPTNY8nEq%2BYiDISXPocehuT648ElUSTmszFCkS5mb0xwhBz9deW9UOdQq4nmVP%2Ffy7%2F0wodv9xAY6pgFnmLcFpJGwiMbsLWflDbqruyMab2eh2AbeNlaiJiFR%2Bc8ZWGfPLiGe32pPrbgMjPtL5lUnqOmuRIn8Yzl8B8ct%2F7EORp4xD%2Bpp3rLtkkOl0Q1qHTUAMdMnw2%2BEZ8cN%2B44Hl0ZeC%2B5QiYXDM5TAcOILN7xukYUwWgoTeFRvffy09uQbOZZ0MUAEcQCn2syGgkTILBJvQovX%2BR9nXyFr%2B8AoUKAx61qx&X-Amz-Signature=98c6d3168bd459542636125e9eba4139693cdb99dee1b646b716292b6d494d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XW7YL5O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAxRM5EyNm6jkSkDZq1LuHLF1KmrCc0KTHI16%2FFdE0yJAiB93%2FgEwduDe%2FA8a8p2i5FZb2Yf5ELCctWyJAaS6VB44Cr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMjGMl3NztcGYinpfvKtwDg4chLtL7pOI5yrevRs%2FR6Ze1CSIjLYdD9ccrb81mtwJ%2Fh8dD48T0zTDHmaFjLBs8UadZa5SX%2FYA6M24d%2FA%2FCVkUol1LnnYQjX%2FNtTG3XMxPeM0FYd%2Btr7J8KbCXQLhmuxnzpjVT%2FdJa3hxEKr57KCFlpB44OTipq7q%2BNxmWe9H8Zwi0xCKvBOoyfBEIt1NKnvCuffzU8UnS1YC%2B7jOAWk6EoeLtp1162N7iUEwJEPXE1bQmfGbaLnoKmIgkn%2BjShKdsx%2BAsaoxm%2FZE1ReKjfYcMNPp1rF2fwvmiIK0gC5Sewf7Ed%2BBOKZO8406rxf52ieicvUG82bgXhGihkh9zu9OBQNyK9%2FEvaNCDgDYgGsYu4Ql7CdZqhDmSgdgqauvVOlzEmJpi%2F5e807b3tGzDeuuiF1q3eZiz6mt5eqrWcFtMufSudK9DJ7c9f0mBvf7f%2BHE82rRk9vFc4hCNGfvflxZ8If%2BHICuNixrRifJ3en5pHO73mGv54xGK3LBYn4tx7wUeTWg2Zo1YOMRjzi9VOrIpulL4GkpZaL8dbPeceVjF%2Bl2R6r1LE0ryfPTNY8nEq%2BYiDISXPocehuT648ElUSTmszFCkS5mb0xwhBz9deW9UOdQq4nmVP%2Ffy7%2F0wodv9xAY6pgFnmLcFpJGwiMbsLWflDbqruyMab2eh2AbeNlaiJiFR%2Bc8ZWGfPLiGe32pPrbgMjPtL5lUnqOmuRIn8Yzl8B8ct%2F7EORp4xD%2Bpp3rLtkkOl0Q1qHTUAMdMnw2%2BEZ8cN%2B44Hl0ZeC%2B5QiYXDM5TAcOILN7xukYUwWgoTeFRvffy09uQbOZZ0MUAEcQCn2syGgkTILBJvQovX%2BR9nXyFr%2B8AoUKAx61qx&X-Amz-Signature=764d04eec9348ca2dae51f7c9b1c726d84113712d6bc3e40dd9fd2c139a6af58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XW7YL5O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAxRM5EyNm6jkSkDZq1LuHLF1KmrCc0KTHI16%2FFdE0yJAiB93%2FgEwduDe%2FA8a8p2i5FZb2Yf5ELCctWyJAaS6VB44Cr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMjGMl3NztcGYinpfvKtwDg4chLtL7pOI5yrevRs%2FR6Ze1CSIjLYdD9ccrb81mtwJ%2Fh8dD48T0zTDHmaFjLBs8UadZa5SX%2FYA6M24d%2FA%2FCVkUol1LnnYQjX%2FNtTG3XMxPeM0FYd%2Btr7J8KbCXQLhmuxnzpjVT%2FdJa3hxEKr57KCFlpB44OTipq7q%2BNxmWe9H8Zwi0xCKvBOoyfBEIt1NKnvCuffzU8UnS1YC%2B7jOAWk6EoeLtp1162N7iUEwJEPXE1bQmfGbaLnoKmIgkn%2BjShKdsx%2BAsaoxm%2FZE1ReKjfYcMNPp1rF2fwvmiIK0gC5Sewf7Ed%2BBOKZO8406rxf52ieicvUG82bgXhGihkh9zu9OBQNyK9%2FEvaNCDgDYgGsYu4Ql7CdZqhDmSgdgqauvVOlzEmJpi%2F5e807b3tGzDeuuiF1q3eZiz6mt5eqrWcFtMufSudK9DJ7c9f0mBvf7f%2BHE82rRk9vFc4hCNGfvflxZ8If%2BHICuNixrRifJ3en5pHO73mGv54xGK3LBYn4tx7wUeTWg2Zo1YOMRjzi9VOrIpulL4GkpZaL8dbPeceVjF%2Bl2R6r1LE0ryfPTNY8nEq%2BYiDISXPocehuT648ElUSTmszFCkS5mb0xwhBz9deW9UOdQq4nmVP%2Ffy7%2F0wodv9xAY6pgFnmLcFpJGwiMbsLWflDbqruyMab2eh2AbeNlaiJiFR%2Bc8ZWGfPLiGe32pPrbgMjPtL5lUnqOmuRIn8Yzl8B8ct%2F7EORp4xD%2Bpp3rLtkkOl0Q1qHTUAMdMnw2%2BEZ8cN%2B44Hl0ZeC%2B5QiYXDM5TAcOILN7xukYUwWgoTeFRvffy09uQbOZZ0MUAEcQCn2syGgkTILBJvQovX%2BR9nXyFr%2B8AoUKAx61qx&X-Amz-Signature=cb7b0ec74d477f8a54446c01c14f91ae46985f4a36ecd474133c5151e194d9e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XW7YL5O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAxRM5EyNm6jkSkDZq1LuHLF1KmrCc0KTHI16%2FFdE0yJAiB93%2FgEwduDe%2FA8a8p2i5FZb2Yf5ELCctWyJAaS6VB44Cr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMjGMl3NztcGYinpfvKtwDg4chLtL7pOI5yrevRs%2FR6Ze1CSIjLYdD9ccrb81mtwJ%2Fh8dD48T0zTDHmaFjLBs8UadZa5SX%2FYA6M24d%2FA%2FCVkUol1LnnYQjX%2FNtTG3XMxPeM0FYd%2Btr7J8KbCXQLhmuxnzpjVT%2FdJa3hxEKr57KCFlpB44OTipq7q%2BNxmWe9H8Zwi0xCKvBOoyfBEIt1NKnvCuffzU8UnS1YC%2B7jOAWk6EoeLtp1162N7iUEwJEPXE1bQmfGbaLnoKmIgkn%2BjShKdsx%2BAsaoxm%2FZE1ReKjfYcMNPp1rF2fwvmiIK0gC5Sewf7Ed%2BBOKZO8406rxf52ieicvUG82bgXhGihkh9zu9OBQNyK9%2FEvaNCDgDYgGsYu4Ql7CdZqhDmSgdgqauvVOlzEmJpi%2F5e807b3tGzDeuuiF1q3eZiz6mt5eqrWcFtMufSudK9DJ7c9f0mBvf7f%2BHE82rRk9vFc4hCNGfvflxZ8If%2BHICuNixrRifJ3en5pHO73mGv54xGK3LBYn4tx7wUeTWg2Zo1YOMRjzi9VOrIpulL4GkpZaL8dbPeceVjF%2Bl2R6r1LE0ryfPTNY8nEq%2BYiDISXPocehuT648ElUSTmszFCkS5mb0xwhBz9deW9UOdQq4nmVP%2Ffy7%2F0wodv9xAY6pgFnmLcFpJGwiMbsLWflDbqruyMab2eh2AbeNlaiJiFR%2Bc8ZWGfPLiGe32pPrbgMjPtL5lUnqOmuRIn8Yzl8B8ct%2F7EORp4xD%2Bpp3rLtkkOl0Q1qHTUAMdMnw2%2BEZ8cN%2B44Hl0ZeC%2B5QiYXDM5TAcOILN7xukYUwWgoTeFRvffy09uQbOZZ0MUAEcQCn2syGgkTILBJvQovX%2BR9nXyFr%2B8AoUKAx61qx&X-Amz-Signature=37163f7142551e308e6d44d0d0dfce30c1b296d7ad2b5ec7a2d7adb99d963ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XW7YL5O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAxRM5EyNm6jkSkDZq1LuHLF1KmrCc0KTHI16%2FFdE0yJAiB93%2FgEwduDe%2FA8a8p2i5FZb2Yf5ELCctWyJAaS6VB44Cr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMjGMl3NztcGYinpfvKtwDg4chLtL7pOI5yrevRs%2FR6Ze1CSIjLYdD9ccrb81mtwJ%2Fh8dD48T0zTDHmaFjLBs8UadZa5SX%2FYA6M24d%2FA%2FCVkUol1LnnYQjX%2FNtTG3XMxPeM0FYd%2Btr7J8KbCXQLhmuxnzpjVT%2FdJa3hxEKr57KCFlpB44OTipq7q%2BNxmWe9H8Zwi0xCKvBOoyfBEIt1NKnvCuffzU8UnS1YC%2B7jOAWk6EoeLtp1162N7iUEwJEPXE1bQmfGbaLnoKmIgkn%2BjShKdsx%2BAsaoxm%2FZE1ReKjfYcMNPp1rF2fwvmiIK0gC5Sewf7Ed%2BBOKZO8406rxf52ieicvUG82bgXhGihkh9zu9OBQNyK9%2FEvaNCDgDYgGsYu4Ql7CdZqhDmSgdgqauvVOlzEmJpi%2F5e807b3tGzDeuuiF1q3eZiz6mt5eqrWcFtMufSudK9DJ7c9f0mBvf7f%2BHE82rRk9vFc4hCNGfvflxZ8If%2BHICuNixrRifJ3en5pHO73mGv54xGK3LBYn4tx7wUeTWg2Zo1YOMRjzi9VOrIpulL4GkpZaL8dbPeceVjF%2Bl2R6r1LE0ryfPTNY8nEq%2BYiDISXPocehuT648ElUSTmszFCkS5mb0xwhBz9deW9UOdQq4nmVP%2Ffy7%2F0wodv9xAY6pgFnmLcFpJGwiMbsLWflDbqruyMab2eh2AbeNlaiJiFR%2Bc8ZWGfPLiGe32pPrbgMjPtL5lUnqOmuRIn8Yzl8B8ct%2F7EORp4xD%2Bpp3rLtkkOl0Q1qHTUAMdMnw2%2BEZ8cN%2B44Hl0ZeC%2B5QiYXDM5TAcOILN7xukYUwWgoTeFRvffy09uQbOZZ0MUAEcQCn2syGgkTILBJvQovX%2BR9nXyFr%2B8AoUKAx61qx&X-Amz-Signature=1d606bec2a080307b6e108fb873c9342ea35e4fea2f517621d131bceaa52d022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XW7YL5O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAxRM5EyNm6jkSkDZq1LuHLF1KmrCc0KTHI16%2FFdE0yJAiB93%2FgEwduDe%2FA8a8p2i5FZb2Yf5ELCctWyJAaS6VB44Cr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMjGMl3NztcGYinpfvKtwDg4chLtL7pOI5yrevRs%2FR6Ze1CSIjLYdD9ccrb81mtwJ%2Fh8dD48T0zTDHmaFjLBs8UadZa5SX%2FYA6M24d%2FA%2FCVkUol1LnnYQjX%2FNtTG3XMxPeM0FYd%2Btr7J8KbCXQLhmuxnzpjVT%2FdJa3hxEKr57KCFlpB44OTipq7q%2BNxmWe9H8Zwi0xCKvBOoyfBEIt1NKnvCuffzU8UnS1YC%2B7jOAWk6EoeLtp1162N7iUEwJEPXE1bQmfGbaLnoKmIgkn%2BjShKdsx%2BAsaoxm%2FZE1ReKjfYcMNPp1rF2fwvmiIK0gC5Sewf7Ed%2BBOKZO8406rxf52ieicvUG82bgXhGihkh9zu9OBQNyK9%2FEvaNCDgDYgGsYu4Ql7CdZqhDmSgdgqauvVOlzEmJpi%2F5e807b3tGzDeuuiF1q3eZiz6mt5eqrWcFtMufSudK9DJ7c9f0mBvf7f%2BHE82rRk9vFc4hCNGfvflxZ8If%2BHICuNixrRifJ3en5pHO73mGv54xGK3LBYn4tx7wUeTWg2Zo1YOMRjzi9VOrIpulL4GkpZaL8dbPeceVjF%2Bl2R6r1LE0ryfPTNY8nEq%2BYiDISXPocehuT648ElUSTmszFCkS5mb0xwhBz9deW9UOdQq4nmVP%2Ffy7%2F0wodv9xAY6pgFnmLcFpJGwiMbsLWflDbqruyMab2eh2AbeNlaiJiFR%2Bc8ZWGfPLiGe32pPrbgMjPtL5lUnqOmuRIn8Yzl8B8ct%2F7EORp4xD%2Bpp3rLtkkOl0Q1qHTUAMdMnw2%2BEZ8cN%2B44Hl0ZeC%2B5QiYXDM5TAcOILN7xukYUwWgoTeFRvffy09uQbOZZ0MUAEcQCn2syGgkTILBJvQovX%2BR9nXyFr%2B8AoUKAx61qx&X-Amz-Signature=b798d394d684711a75b8c99cf55b4d7078eb9c42dd51c8468ad56fb20b4230de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
