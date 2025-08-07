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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVXJQJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICYtkk232HabuYWxlzuKVidnUGRH3wrTQAL5%2FLCBLxs5AiEApFzM3pf7QO%2FW432Ys6jKehBuWjOQaxho7i%2BcikMg0IoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYs4OKhHj0cHU6MrCrcA0%2F578Z%2FTs90fi58cLr5p5fEU0SCOclB672NW4eLNDwQDfV0eIA80A5XUeB6sp55Szgar8yZYaljfBCqpsbFEDMmC9BISVCdrpc%2BtfK3ud6EWgZ5ic6TCzKTlQb9HDRwgX%2F07wu50G1FJAmZ0CqTQa5CWyAJqhF4j6XtCGFiYzj1b6xtlmouo%2Bui%2FPrg5Ftmu6zS8i1g5ixU6d5WyhDXrYhmpPNZidKdZ1J37tNnnSSL27O2GuAjgli%2BK42Prk%2BZ76ymwWxJdH9yi8OFWz3n2iVoKk%2Fi61JvoyJDMnfmgaphIdmFvWPo3PJXUewDxvMSANeL8CHpKbJ%2FibhdZEMOcChwYV9enDtNlJTwxXKENZjk9z0uqQgxLNFFUENSEYcgRnKRPX2NyffjqFWQ%2FZDTPvBPfY2%2FrbW4m5%2B6%2FMZJ3%2Fd1tHnrDfTZoPGHZWQaHUAVw2MdlrLU%2Ba5E35%2F1r4wTaW%2BS%2BhGBLeS8K8iIKBsrs1RRgWDq4R5djeWaiyByWLCJfe1dvT7duIeI5ddeEQsIkQzPHlmx0HHBfMLvIjwQ90ncxqjBk5ifyV0sW3Rbg55HSNEka6l%2FBUFhp3fHf3qlCmRAt0SIXyos1Q%2BtbG0yHLbkldjyKdPngAwUYCUOMN3j0cQGOqUBazJFUZBxJBFCvaUso63CvpowBidI71xMXt%2FGtsqpk8jdX2hgcdA0GGk46OoF6hXGJcRHaLAoqHK6ieTDuAgbbtpE8O73guGwFi9nT4YQ6uQ31T3Ur0ejkq1C0jZHPQv2iEsqC%2FTBcj%2BWAp%2F2uJ30sI1CyyjWbLf9%2Bf5sObhxT1q0uM%2BHPPXwHK1IPAjXG%2BxVxsSwJA0%2BXgBVCtt6QiI7zZJxIwPP&X-Amz-Signature=b087821277cbc33ad073bc6d88775f744af95e96520c26fc08d0c308494147fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVXJQJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICYtkk232HabuYWxlzuKVidnUGRH3wrTQAL5%2FLCBLxs5AiEApFzM3pf7QO%2FW432Ys6jKehBuWjOQaxho7i%2BcikMg0IoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYs4OKhHj0cHU6MrCrcA0%2F578Z%2FTs90fi58cLr5p5fEU0SCOclB672NW4eLNDwQDfV0eIA80A5XUeB6sp55Szgar8yZYaljfBCqpsbFEDMmC9BISVCdrpc%2BtfK3ud6EWgZ5ic6TCzKTlQb9HDRwgX%2F07wu50G1FJAmZ0CqTQa5CWyAJqhF4j6XtCGFiYzj1b6xtlmouo%2Bui%2FPrg5Ftmu6zS8i1g5ixU6d5WyhDXrYhmpPNZidKdZ1J37tNnnSSL27O2GuAjgli%2BK42Prk%2BZ76ymwWxJdH9yi8OFWz3n2iVoKk%2Fi61JvoyJDMnfmgaphIdmFvWPo3PJXUewDxvMSANeL8CHpKbJ%2FibhdZEMOcChwYV9enDtNlJTwxXKENZjk9z0uqQgxLNFFUENSEYcgRnKRPX2NyffjqFWQ%2FZDTPvBPfY2%2FrbW4m5%2B6%2FMZJ3%2Fd1tHnrDfTZoPGHZWQaHUAVw2MdlrLU%2Ba5E35%2F1r4wTaW%2BS%2BhGBLeS8K8iIKBsrs1RRgWDq4R5djeWaiyByWLCJfe1dvT7duIeI5ddeEQsIkQzPHlmx0HHBfMLvIjwQ90ncxqjBk5ifyV0sW3Rbg55HSNEka6l%2FBUFhp3fHf3qlCmRAt0SIXyos1Q%2BtbG0yHLbkldjyKdPngAwUYCUOMN3j0cQGOqUBazJFUZBxJBFCvaUso63CvpowBidI71xMXt%2FGtsqpk8jdX2hgcdA0GGk46OoF6hXGJcRHaLAoqHK6ieTDuAgbbtpE8O73guGwFi9nT4YQ6uQ31T3Ur0ejkq1C0jZHPQv2iEsqC%2FTBcj%2BWAp%2F2uJ30sI1CyyjWbLf9%2Bf5sObhxT1q0uM%2BHPPXwHK1IPAjXG%2BxVxsSwJA0%2BXgBVCtt6QiI7zZJxIwPP&X-Amz-Signature=1a50afbe0806d629c8946fd5d4e8e0f4e590f13875c18e616791e10c4c02a08b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVXJQJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICYtkk232HabuYWxlzuKVidnUGRH3wrTQAL5%2FLCBLxs5AiEApFzM3pf7QO%2FW432Ys6jKehBuWjOQaxho7i%2BcikMg0IoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYs4OKhHj0cHU6MrCrcA0%2F578Z%2FTs90fi58cLr5p5fEU0SCOclB672NW4eLNDwQDfV0eIA80A5XUeB6sp55Szgar8yZYaljfBCqpsbFEDMmC9BISVCdrpc%2BtfK3ud6EWgZ5ic6TCzKTlQb9HDRwgX%2F07wu50G1FJAmZ0CqTQa5CWyAJqhF4j6XtCGFiYzj1b6xtlmouo%2Bui%2FPrg5Ftmu6zS8i1g5ixU6d5WyhDXrYhmpPNZidKdZ1J37tNnnSSL27O2GuAjgli%2BK42Prk%2BZ76ymwWxJdH9yi8OFWz3n2iVoKk%2Fi61JvoyJDMnfmgaphIdmFvWPo3PJXUewDxvMSANeL8CHpKbJ%2FibhdZEMOcChwYV9enDtNlJTwxXKENZjk9z0uqQgxLNFFUENSEYcgRnKRPX2NyffjqFWQ%2FZDTPvBPfY2%2FrbW4m5%2B6%2FMZJ3%2Fd1tHnrDfTZoPGHZWQaHUAVw2MdlrLU%2Ba5E35%2F1r4wTaW%2BS%2BhGBLeS8K8iIKBsrs1RRgWDq4R5djeWaiyByWLCJfe1dvT7duIeI5ddeEQsIkQzPHlmx0HHBfMLvIjwQ90ncxqjBk5ifyV0sW3Rbg55HSNEka6l%2FBUFhp3fHf3qlCmRAt0SIXyos1Q%2BtbG0yHLbkldjyKdPngAwUYCUOMN3j0cQGOqUBazJFUZBxJBFCvaUso63CvpowBidI71xMXt%2FGtsqpk8jdX2hgcdA0GGk46OoF6hXGJcRHaLAoqHK6ieTDuAgbbtpE8O73guGwFi9nT4YQ6uQ31T3Ur0ejkq1C0jZHPQv2iEsqC%2FTBcj%2BWAp%2F2uJ30sI1CyyjWbLf9%2Bf5sObhxT1q0uM%2BHPPXwHK1IPAjXG%2BxVxsSwJA0%2BXgBVCtt6QiI7zZJxIwPP&X-Amz-Signature=a30ca7932eaa812e5bf695e753a22368f4ad20c12b76f86bcf222ec30a2c22ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVXJQJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICYtkk232HabuYWxlzuKVidnUGRH3wrTQAL5%2FLCBLxs5AiEApFzM3pf7QO%2FW432Ys6jKehBuWjOQaxho7i%2BcikMg0IoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYs4OKhHj0cHU6MrCrcA0%2F578Z%2FTs90fi58cLr5p5fEU0SCOclB672NW4eLNDwQDfV0eIA80A5XUeB6sp55Szgar8yZYaljfBCqpsbFEDMmC9BISVCdrpc%2BtfK3ud6EWgZ5ic6TCzKTlQb9HDRwgX%2F07wu50G1FJAmZ0CqTQa5CWyAJqhF4j6XtCGFiYzj1b6xtlmouo%2Bui%2FPrg5Ftmu6zS8i1g5ixU6d5WyhDXrYhmpPNZidKdZ1J37tNnnSSL27O2GuAjgli%2BK42Prk%2BZ76ymwWxJdH9yi8OFWz3n2iVoKk%2Fi61JvoyJDMnfmgaphIdmFvWPo3PJXUewDxvMSANeL8CHpKbJ%2FibhdZEMOcChwYV9enDtNlJTwxXKENZjk9z0uqQgxLNFFUENSEYcgRnKRPX2NyffjqFWQ%2FZDTPvBPfY2%2FrbW4m5%2B6%2FMZJ3%2Fd1tHnrDfTZoPGHZWQaHUAVw2MdlrLU%2Ba5E35%2F1r4wTaW%2BS%2BhGBLeS8K8iIKBsrs1RRgWDq4R5djeWaiyByWLCJfe1dvT7duIeI5ddeEQsIkQzPHlmx0HHBfMLvIjwQ90ncxqjBk5ifyV0sW3Rbg55HSNEka6l%2FBUFhp3fHf3qlCmRAt0SIXyos1Q%2BtbG0yHLbkldjyKdPngAwUYCUOMN3j0cQGOqUBazJFUZBxJBFCvaUso63CvpowBidI71xMXt%2FGtsqpk8jdX2hgcdA0GGk46OoF6hXGJcRHaLAoqHK6ieTDuAgbbtpE8O73guGwFi9nT4YQ6uQ31T3Ur0ejkq1C0jZHPQv2iEsqC%2FTBcj%2BWAp%2F2uJ30sI1CyyjWbLf9%2Bf5sObhxT1q0uM%2BHPPXwHK1IPAjXG%2BxVxsSwJA0%2BXgBVCtt6QiI7zZJxIwPP&X-Amz-Signature=656e03be1de6481fde8d7a728c1ee385a00ce9a113731c921908084b05ba5e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KH73ALW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIA5GXqgzc2d8bchX6mJkjSElBNqpV6zs4Ik1Vp8a1%2FeBAiEA2ekFgeuwRRbGAjaUuOBxnzLvm1%2Bi9QXs92udkJ9xR0wqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIvA000%2B%2FBlBIlEbtSrcA7P2%2Fiwo3ETvFjcwzhmPAYm%2BTKEYMDxauoC2jcnDQ%2B%2BsBv6AiBL6HU%2FDpcOdUAx%2B3vfA%2F5Crn14Gy%2BYiXXAHsuQ9hKLNzkO394RDmKNzR3yR4MO6lYg88x7xbZExyTHULyeSaz5xWvUDl292TbsJmAcGQt45hqKXiGfUaDUcH00mVL2aQgJz5xG5ft8e5bVpQFcWvVKxcjGahYvezke9D5BAHuUBpwnMVqB0X2z0nOC8xUk7%2FowhcAgmn4VbQvA4KQsx7n3VrPUGQn%2FzGl9h%2B83aM6zKcnodCzunpqJH8%2F2X6VZEhlq1EtsZGhmQHuwYNU0Z536fskolk%2B6ULtm3SQvrbRhqlr8SQiql9SrUdzdTX9cAx35gVN82K%2BlJ29shU1xMnOgB1FdqI5C5Gm%2F59bEWgfGQQwZ2tfs87XaxJzU%2FdRluZSFqokX8mb61yJgNEGbF2gjRHO7iKQd8%2BxJVvp%2FwSv77dAhnYpmW48re4dX9s9mhDt0HA3DP7DQPnTgdtHbXrM7c%2Fj%2Fp5wx%2FEXmFnKZgU3MptuPXwFAaTZp8ZArco55SuJFS3hELD71Txh4CIwphirZyK%2FtP%2FlNpH3BhrewrZ%2BHqKwgi8E9QSlUxErlwDkCzkos00cr2vIp%2FMO%2Fj0cQGOqUBcm8sLedD4WQ9UK1mqhvr1rn85JsHzUSsDgxjKtztTeo5YYTi6w0LZ%2Fj6YDx9o5ZjBJaQy6M9h0YqThcQFz3lagRU%2FIPswMiqaX%2BcBpqwWtVQV5lPi9cL%2F44AmDjeAsz%2FufxR4W2pQzHgH38XmsWtl9OmJURn1aGB8XVN1EjF6%2BXYQUjgPvjYDG%2BXExUcCLvs%2BZx0CrC2dHtwuM8grz5Azn1ZYbgR&X-Amz-Signature=52d4ce3ee25639a1c354a1b101ae08605eee3ae98e1f9a90d49ffa6aea8b2171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVXJQJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICYtkk232HabuYWxlzuKVidnUGRH3wrTQAL5%2FLCBLxs5AiEApFzM3pf7QO%2FW432Ys6jKehBuWjOQaxho7i%2BcikMg0IoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYs4OKhHj0cHU6MrCrcA0%2F578Z%2FTs90fi58cLr5p5fEU0SCOclB672NW4eLNDwQDfV0eIA80A5XUeB6sp55Szgar8yZYaljfBCqpsbFEDMmC9BISVCdrpc%2BtfK3ud6EWgZ5ic6TCzKTlQb9HDRwgX%2F07wu50G1FJAmZ0CqTQa5CWyAJqhF4j6XtCGFiYzj1b6xtlmouo%2Bui%2FPrg5Ftmu6zS8i1g5ixU6d5WyhDXrYhmpPNZidKdZ1J37tNnnSSL27O2GuAjgli%2BK42Prk%2BZ76ymwWxJdH9yi8OFWz3n2iVoKk%2Fi61JvoyJDMnfmgaphIdmFvWPo3PJXUewDxvMSANeL8CHpKbJ%2FibhdZEMOcChwYV9enDtNlJTwxXKENZjk9z0uqQgxLNFFUENSEYcgRnKRPX2NyffjqFWQ%2FZDTPvBPfY2%2FrbW4m5%2B6%2FMZJ3%2Fd1tHnrDfTZoPGHZWQaHUAVw2MdlrLU%2Ba5E35%2F1r4wTaW%2BS%2BhGBLeS8K8iIKBsrs1RRgWDq4R5djeWaiyByWLCJfe1dvT7duIeI5ddeEQsIkQzPHlmx0HHBfMLvIjwQ90ncxqjBk5ifyV0sW3Rbg55HSNEka6l%2FBUFhp3fHf3qlCmRAt0SIXyos1Q%2BtbG0yHLbkldjyKdPngAwUYCUOMN3j0cQGOqUBazJFUZBxJBFCvaUso63CvpowBidI71xMXt%2FGtsqpk8jdX2hgcdA0GGk46OoF6hXGJcRHaLAoqHK6ieTDuAgbbtpE8O73guGwFi9nT4YQ6uQ31T3Ur0ejkq1C0jZHPQv2iEsqC%2FTBcj%2BWAp%2F2uJ30sI1CyyjWbLf9%2Bf5sObhxT1q0uM%2BHPPXwHK1IPAjXG%2BxVxsSwJA0%2BXgBVCtt6QiI7zZJxIwPP&X-Amz-Signature=4b7a5ca6f4eb1ae85e06d6f54e198bed78d7fc3a61183a8162372207228f02c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVXJQJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICYtkk232HabuYWxlzuKVidnUGRH3wrTQAL5%2FLCBLxs5AiEApFzM3pf7QO%2FW432Ys6jKehBuWjOQaxho7i%2BcikMg0IoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYs4OKhHj0cHU6MrCrcA0%2F578Z%2FTs90fi58cLr5p5fEU0SCOclB672NW4eLNDwQDfV0eIA80A5XUeB6sp55Szgar8yZYaljfBCqpsbFEDMmC9BISVCdrpc%2BtfK3ud6EWgZ5ic6TCzKTlQb9HDRwgX%2F07wu50G1FJAmZ0CqTQa5CWyAJqhF4j6XtCGFiYzj1b6xtlmouo%2Bui%2FPrg5Ftmu6zS8i1g5ixU6d5WyhDXrYhmpPNZidKdZ1J37tNnnSSL27O2GuAjgli%2BK42Prk%2BZ76ymwWxJdH9yi8OFWz3n2iVoKk%2Fi61JvoyJDMnfmgaphIdmFvWPo3PJXUewDxvMSANeL8CHpKbJ%2FibhdZEMOcChwYV9enDtNlJTwxXKENZjk9z0uqQgxLNFFUENSEYcgRnKRPX2NyffjqFWQ%2FZDTPvBPfY2%2FrbW4m5%2B6%2FMZJ3%2Fd1tHnrDfTZoPGHZWQaHUAVw2MdlrLU%2Ba5E35%2F1r4wTaW%2BS%2BhGBLeS8K8iIKBsrs1RRgWDq4R5djeWaiyByWLCJfe1dvT7duIeI5ddeEQsIkQzPHlmx0HHBfMLvIjwQ90ncxqjBk5ifyV0sW3Rbg55HSNEka6l%2FBUFhp3fHf3qlCmRAt0SIXyos1Q%2BtbG0yHLbkldjyKdPngAwUYCUOMN3j0cQGOqUBazJFUZBxJBFCvaUso63CvpowBidI71xMXt%2FGtsqpk8jdX2hgcdA0GGk46OoF6hXGJcRHaLAoqHK6ieTDuAgbbtpE8O73guGwFi9nT4YQ6uQ31T3Ur0ejkq1C0jZHPQv2iEsqC%2FTBcj%2BWAp%2F2uJ30sI1CyyjWbLf9%2Bf5sObhxT1q0uM%2BHPPXwHK1IPAjXG%2BxVxsSwJA0%2BXgBVCtt6QiI7zZJxIwPP&X-Amz-Signature=7cdda1218da8d78895fbd7257d66c6474928c5f575365b54a5ca1b8fc0158993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVXJQJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICYtkk232HabuYWxlzuKVidnUGRH3wrTQAL5%2FLCBLxs5AiEApFzM3pf7QO%2FW432Ys6jKehBuWjOQaxho7i%2BcikMg0IoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYs4OKhHj0cHU6MrCrcA0%2F578Z%2FTs90fi58cLr5p5fEU0SCOclB672NW4eLNDwQDfV0eIA80A5XUeB6sp55Szgar8yZYaljfBCqpsbFEDMmC9BISVCdrpc%2BtfK3ud6EWgZ5ic6TCzKTlQb9HDRwgX%2F07wu50G1FJAmZ0CqTQa5CWyAJqhF4j6XtCGFiYzj1b6xtlmouo%2Bui%2FPrg5Ftmu6zS8i1g5ixU6d5WyhDXrYhmpPNZidKdZ1J37tNnnSSL27O2GuAjgli%2BK42Prk%2BZ76ymwWxJdH9yi8OFWz3n2iVoKk%2Fi61JvoyJDMnfmgaphIdmFvWPo3PJXUewDxvMSANeL8CHpKbJ%2FibhdZEMOcChwYV9enDtNlJTwxXKENZjk9z0uqQgxLNFFUENSEYcgRnKRPX2NyffjqFWQ%2FZDTPvBPfY2%2FrbW4m5%2B6%2FMZJ3%2Fd1tHnrDfTZoPGHZWQaHUAVw2MdlrLU%2Ba5E35%2F1r4wTaW%2BS%2BhGBLeS8K8iIKBsrs1RRgWDq4R5djeWaiyByWLCJfe1dvT7duIeI5ddeEQsIkQzPHlmx0HHBfMLvIjwQ90ncxqjBk5ifyV0sW3Rbg55HSNEka6l%2FBUFhp3fHf3qlCmRAt0SIXyos1Q%2BtbG0yHLbkldjyKdPngAwUYCUOMN3j0cQGOqUBazJFUZBxJBFCvaUso63CvpowBidI71xMXt%2FGtsqpk8jdX2hgcdA0GGk46OoF6hXGJcRHaLAoqHK6ieTDuAgbbtpE8O73guGwFi9nT4YQ6uQ31T3Ur0ejkq1C0jZHPQv2iEsqC%2FTBcj%2BWAp%2F2uJ30sI1CyyjWbLf9%2Bf5sObhxT1q0uM%2BHPPXwHK1IPAjXG%2BxVxsSwJA0%2BXgBVCtt6QiI7zZJxIwPP&X-Amz-Signature=f26009b62eb15596c2e92910a3cdc6906ec77d63d6237ee91863b5745bd9ace4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVXJQJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICYtkk232HabuYWxlzuKVidnUGRH3wrTQAL5%2FLCBLxs5AiEApFzM3pf7QO%2FW432Ys6jKehBuWjOQaxho7i%2BcikMg0IoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYs4OKhHj0cHU6MrCrcA0%2F578Z%2FTs90fi58cLr5p5fEU0SCOclB672NW4eLNDwQDfV0eIA80A5XUeB6sp55Szgar8yZYaljfBCqpsbFEDMmC9BISVCdrpc%2BtfK3ud6EWgZ5ic6TCzKTlQb9HDRwgX%2F07wu50G1FJAmZ0CqTQa5CWyAJqhF4j6XtCGFiYzj1b6xtlmouo%2Bui%2FPrg5Ftmu6zS8i1g5ixU6d5WyhDXrYhmpPNZidKdZ1J37tNnnSSL27O2GuAjgli%2BK42Prk%2BZ76ymwWxJdH9yi8OFWz3n2iVoKk%2Fi61JvoyJDMnfmgaphIdmFvWPo3PJXUewDxvMSANeL8CHpKbJ%2FibhdZEMOcChwYV9enDtNlJTwxXKENZjk9z0uqQgxLNFFUENSEYcgRnKRPX2NyffjqFWQ%2FZDTPvBPfY2%2FrbW4m5%2B6%2FMZJ3%2Fd1tHnrDfTZoPGHZWQaHUAVw2MdlrLU%2Ba5E35%2F1r4wTaW%2BS%2BhGBLeS8K8iIKBsrs1RRgWDq4R5djeWaiyByWLCJfe1dvT7duIeI5ddeEQsIkQzPHlmx0HHBfMLvIjwQ90ncxqjBk5ifyV0sW3Rbg55HSNEka6l%2FBUFhp3fHf3qlCmRAt0SIXyos1Q%2BtbG0yHLbkldjyKdPngAwUYCUOMN3j0cQGOqUBazJFUZBxJBFCvaUso63CvpowBidI71xMXt%2FGtsqpk8jdX2hgcdA0GGk46OoF6hXGJcRHaLAoqHK6ieTDuAgbbtpE8O73guGwFi9nT4YQ6uQ31T3Ur0ejkq1C0jZHPQv2iEsqC%2FTBcj%2BWAp%2F2uJ30sI1CyyjWbLf9%2Bf5sObhxT1q0uM%2BHPPXwHK1IPAjXG%2BxVxsSwJA0%2BXgBVCtt6QiI7zZJxIwPP&X-Amz-Signature=20406e5c76680c2189dfa2dd5801733ee04bc7bd42501bb9ff3b7ad08f27871d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVXJQJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICYtkk232HabuYWxlzuKVidnUGRH3wrTQAL5%2FLCBLxs5AiEApFzM3pf7QO%2FW432Ys6jKehBuWjOQaxho7i%2BcikMg0IoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYs4OKhHj0cHU6MrCrcA0%2F578Z%2FTs90fi58cLr5p5fEU0SCOclB672NW4eLNDwQDfV0eIA80A5XUeB6sp55Szgar8yZYaljfBCqpsbFEDMmC9BISVCdrpc%2BtfK3ud6EWgZ5ic6TCzKTlQb9HDRwgX%2F07wu50G1FJAmZ0CqTQa5CWyAJqhF4j6XtCGFiYzj1b6xtlmouo%2Bui%2FPrg5Ftmu6zS8i1g5ixU6d5WyhDXrYhmpPNZidKdZ1J37tNnnSSL27O2GuAjgli%2BK42Prk%2BZ76ymwWxJdH9yi8OFWz3n2iVoKk%2Fi61JvoyJDMnfmgaphIdmFvWPo3PJXUewDxvMSANeL8CHpKbJ%2FibhdZEMOcChwYV9enDtNlJTwxXKENZjk9z0uqQgxLNFFUENSEYcgRnKRPX2NyffjqFWQ%2FZDTPvBPfY2%2FrbW4m5%2B6%2FMZJ3%2Fd1tHnrDfTZoPGHZWQaHUAVw2MdlrLU%2Ba5E35%2F1r4wTaW%2BS%2BhGBLeS8K8iIKBsrs1RRgWDq4R5djeWaiyByWLCJfe1dvT7duIeI5ddeEQsIkQzPHlmx0HHBfMLvIjwQ90ncxqjBk5ifyV0sW3Rbg55HSNEka6l%2FBUFhp3fHf3qlCmRAt0SIXyos1Q%2BtbG0yHLbkldjyKdPngAwUYCUOMN3j0cQGOqUBazJFUZBxJBFCvaUso63CvpowBidI71xMXt%2FGtsqpk8jdX2hgcdA0GGk46OoF6hXGJcRHaLAoqHK6ieTDuAgbbtpE8O73guGwFi9nT4YQ6uQ31T3Ur0ejkq1C0jZHPQv2iEsqC%2FTBcj%2BWAp%2F2uJ30sI1CyyjWbLf9%2Bf5sObhxT1q0uM%2BHPPXwHK1IPAjXG%2BxVxsSwJA0%2BXgBVCtt6QiI7zZJxIwPP&X-Amz-Signature=c13b8d0b98c78ddc763ec8dde009ca9f495204b848f096651d2498478a589b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTVXJQJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICYtkk232HabuYWxlzuKVidnUGRH3wrTQAL5%2FLCBLxs5AiEApFzM3pf7QO%2FW432Ys6jKehBuWjOQaxho7i%2BcikMg0IoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYs4OKhHj0cHU6MrCrcA0%2F578Z%2FTs90fi58cLr5p5fEU0SCOclB672NW4eLNDwQDfV0eIA80A5XUeB6sp55Szgar8yZYaljfBCqpsbFEDMmC9BISVCdrpc%2BtfK3ud6EWgZ5ic6TCzKTlQb9HDRwgX%2F07wu50G1FJAmZ0CqTQa5CWyAJqhF4j6XtCGFiYzj1b6xtlmouo%2Bui%2FPrg5Ftmu6zS8i1g5ixU6d5WyhDXrYhmpPNZidKdZ1J37tNnnSSL27O2GuAjgli%2BK42Prk%2BZ76ymwWxJdH9yi8OFWz3n2iVoKk%2Fi61JvoyJDMnfmgaphIdmFvWPo3PJXUewDxvMSANeL8CHpKbJ%2FibhdZEMOcChwYV9enDtNlJTwxXKENZjk9z0uqQgxLNFFUENSEYcgRnKRPX2NyffjqFWQ%2FZDTPvBPfY2%2FrbW4m5%2B6%2FMZJ3%2Fd1tHnrDfTZoPGHZWQaHUAVw2MdlrLU%2Ba5E35%2F1r4wTaW%2BS%2BhGBLeS8K8iIKBsrs1RRgWDq4R5djeWaiyByWLCJfe1dvT7duIeI5ddeEQsIkQzPHlmx0HHBfMLvIjwQ90ncxqjBk5ifyV0sW3Rbg55HSNEka6l%2FBUFhp3fHf3qlCmRAt0SIXyos1Q%2BtbG0yHLbkldjyKdPngAwUYCUOMN3j0cQGOqUBazJFUZBxJBFCvaUso63CvpowBidI71xMXt%2FGtsqpk8jdX2hgcdA0GGk46OoF6hXGJcRHaLAoqHK6ieTDuAgbbtpE8O73guGwFi9nT4YQ6uQ31T3Ur0ejkq1C0jZHPQv2iEsqC%2FTBcj%2BWAp%2F2uJ30sI1CyyjWbLf9%2Bf5sObhxT1q0uM%2BHPPXwHK1IPAjXG%2BxVxsSwJA0%2BXgBVCtt6QiI7zZJxIwPP&X-Amz-Signature=af8e8a0aa27dd2acb107df2a1864c09dc08858ae7ea678b6699f7529bba0dccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
