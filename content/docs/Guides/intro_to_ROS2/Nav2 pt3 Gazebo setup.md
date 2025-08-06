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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CONS3KR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDViQGl05efWJBrygyTmnpvV6IKyBvcTt%2FHPWFzZ8lkNwIgJqDUranbyCc7q4%2BP7zHh%2FMYhyMx5qHYL4Q6WR1ly2%2B4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEtLUNK3TieVSjy0BircA1W0MECyPaoDfDd3fEnvoi9ABf4zc%2FhX%2FTc9BunKcUj2YveOM6DesBg%2BruIr2FrtditRfNROEqPcl%2FSUarxQb0yEzYtVBapJLalLC%2BThsJp9%2F4oZSKRObYcCdtkOTY5QQpwQGdobb6%2Bi1g2T9VRl3NtYp73Sj0KsZGSulgWw%2B4cr6qSygTa%2F96V38JvleQKLS9b4gq12jvmupdoiJ0g8F%2BdImSq36PGCOi%2BMB3EcZNK2sIO%2FPzo1LkfOg9TxCfZBwQAA6%2BmdCLWPEGGrmQLQMXe5hbo5Zvffjb%2BPL7oftw6vWPBt9%2BMp5IEwcSbonE8AytJQ7fmRBJEiEOrALcx1B6FsJv9T6AYKBTA4MeCLZJaXnd85m6mAzBgOXsrc%2BZbvSVCooBp8svEhxV%2FXYPIuXmH7lOKOGM4SwF9xax5PjIe91aPWTgwTjHzVMRFqR6wqODU0UHhsCJMZFqzemH32wFPIYn89LicaOFxe%2BEi%2BV2F8WyokcZHAFL5ozM62gSwhwyzhfvxv%2BBLLocQ3NIjbUzNNLT9i%2BAx77%2BCChPtJzSu4igBP6Fe%2BjMJeJFMOxDPSW5VYZmsc7tjqWF1O8GSmBJF%2FgVEu28At3JS%2F6VNTMQueNK2bLjaJ1NWPptlgMOrqzsQGOqUBXJl7Z3dwIWSMkrE59Kwd30QeKo2alNjtQWwnCEjkNe3X6idw1qCv3kTSLUL9NYgtCSL8GEPutYqW32P57vv9yn3V1rrMMlYnDwk1zUYPBBqWyD0BDdxYAp%2BtCU6N1NIi6YKfla1nQbD4Yb3hfZ00hZj0ZvRqgc8Nt%2BhxiLfuwZon%2BXMCmZFgzB0cIHV6g%2Fi9JjzNyit7IfC8Z8HuYz8%2B7aX%2F%2BoQy&X-Amz-Signature=13b8a43206a4441332b09b6e01c2c88fd67ec99730e97bd61f36fcd94b5f40a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CONS3KR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDViQGl05efWJBrygyTmnpvV6IKyBvcTt%2FHPWFzZ8lkNwIgJqDUranbyCc7q4%2BP7zHh%2FMYhyMx5qHYL4Q6WR1ly2%2B4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEtLUNK3TieVSjy0BircA1W0MECyPaoDfDd3fEnvoi9ABf4zc%2FhX%2FTc9BunKcUj2YveOM6DesBg%2BruIr2FrtditRfNROEqPcl%2FSUarxQb0yEzYtVBapJLalLC%2BThsJp9%2F4oZSKRObYcCdtkOTY5QQpwQGdobb6%2Bi1g2T9VRl3NtYp73Sj0KsZGSulgWw%2B4cr6qSygTa%2F96V38JvleQKLS9b4gq12jvmupdoiJ0g8F%2BdImSq36PGCOi%2BMB3EcZNK2sIO%2FPzo1LkfOg9TxCfZBwQAA6%2BmdCLWPEGGrmQLQMXe5hbo5Zvffjb%2BPL7oftw6vWPBt9%2BMp5IEwcSbonE8AytJQ7fmRBJEiEOrALcx1B6FsJv9T6AYKBTA4MeCLZJaXnd85m6mAzBgOXsrc%2BZbvSVCooBp8svEhxV%2FXYPIuXmH7lOKOGM4SwF9xax5PjIe91aPWTgwTjHzVMRFqR6wqODU0UHhsCJMZFqzemH32wFPIYn89LicaOFxe%2BEi%2BV2F8WyokcZHAFL5ozM62gSwhwyzhfvxv%2BBLLocQ3NIjbUzNNLT9i%2BAx77%2BCChPtJzSu4igBP6Fe%2BjMJeJFMOxDPSW5VYZmsc7tjqWF1O8GSmBJF%2FgVEu28At3JS%2F6VNTMQueNK2bLjaJ1NWPptlgMOrqzsQGOqUBXJl7Z3dwIWSMkrE59Kwd30QeKo2alNjtQWwnCEjkNe3X6idw1qCv3kTSLUL9NYgtCSL8GEPutYqW32P57vv9yn3V1rrMMlYnDwk1zUYPBBqWyD0BDdxYAp%2BtCU6N1NIi6YKfla1nQbD4Yb3hfZ00hZj0ZvRqgc8Nt%2BhxiLfuwZon%2BXMCmZFgzB0cIHV6g%2Fi9JjzNyit7IfC8Z8HuYz8%2B7aX%2F%2BoQy&X-Amz-Signature=c200adb43186cc5da0e6f8c8247ff7230c0dbe72045df309dbff4271929dadfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CONS3KR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDViQGl05efWJBrygyTmnpvV6IKyBvcTt%2FHPWFzZ8lkNwIgJqDUranbyCc7q4%2BP7zHh%2FMYhyMx5qHYL4Q6WR1ly2%2B4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEtLUNK3TieVSjy0BircA1W0MECyPaoDfDd3fEnvoi9ABf4zc%2FhX%2FTc9BunKcUj2YveOM6DesBg%2BruIr2FrtditRfNROEqPcl%2FSUarxQb0yEzYtVBapJLalLC%2BThsJp9%2F4oZSKRObYcCdtkOTY5QQpwQGdobb6%2Bi1g2T9VRl3NtYp73Sj0KsZGSulgWw%2B4cr6qSygTa%2F96V38JvleQKLS9b4gq12jvmupdoiJ0g8F%2BdImSq36PGCOi%2BMB3EcZNK2sIO%2FPzo1LkfOg9TxCfZBwQAA6%2BmdCLWPEGGrmQLQMXe5hbo5Zvffjb%2BPL7oftw6vWPBt9%2BMp5IEwcSbonE8AytJQ7fmRBJEiEOrALcx1B6FsJv9T6AYKBTA4MeCLZJaXnd85m6mAzBgOXsrc%2BZbvSVCooBp8svEhxV%2FXYPIuXmH7lOKOGM4SwF9xax5PjIe91aPWTgwTjHzVMRFqR6wqODU0UHhsCJMZFqzemH32wFPIYn89LicaOFxe%2BEi%2BV2F8WyokcZHAFL5ozM62gSwhwyzhfvxv%2BBLLocQ3NIjbUzNNLT9i%2BAx77%2BCChPtJzSu4igBP6Fe%2BjMJeJFMOxDPSW5VYZmsc7tjqWF1O8GSmBJF%2FgVEu28At3JS%2F6VNTMQueNK2bLjaJ1NWPptlgMOrqzsQGOqUBXJl7Z3dwIWSMkrE59Kwd30QeKo2alNjtQWwnCEjkNe3X6idw1qCv3kTSLUL9NYgtCSL8GEPutYqW32P57vv9yn3V1rrMMlYnDwk1zUYPBBqWyD0BDdxYAp%2BtCU6N1NIi6YKfla1nQbD4Yb3hfZ00hZj0ZvRqgc8Nt%2BhxiLfuwZon%2BXMCmZFgzB0cIHV6g%2Fi9JjzNyit7IfC8Z8HuYz8%2B7aX%2F%2BoQy&X-Amz-Signature=4a48251f0ab259fa972e4b554d8a78067bcbd06dec219d62a97f65cd46105128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CONS3KR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDViQGl05efWJBrygyTmnpvV6IKyBvcTt%2FHPWFzZ8lkNwIgJqDUranbyCc7q4%2BP7zHh%2FMYhyMx5qHYL4Q6WR1ly2%2B4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEtLUNK3TieVSjy0BircA1W0MECyPaoDfDd3fEnvoi9ABf4zc%2FhX%2FTc9BunKcUj2YveOM6DesBg%2BruIr2FrtditRfNROEqPcl%2FSUarxQb0yEzYtVBapJLalLC%2BThsJp9%2F4oZSKRObYcCdtkOTY5QQpwQGdobb6%2Bi1g2T9VRl3NtYp73Sj0KsZGSulgWw%2B4cr6qSygTa%2F96V38JvleQKLS9b4gq12jvmupdoiJ0g8F%2BdImSq36PGCOi%2BMB3EcZNK2sIO%2FPzo1LkfOg9TxCfZBwQAA6%2BmdCLWPEGGrmQLQMXe5hbo5Zvffjb%2BPL7oftw6vWPBt9%2BMp5IEwcSbonE8AytJQ7fmRBJEiEOrALcx1B6FsJv9T6AYKBTA4MeCLZJaXnd85m6mAzBgOXsrc%2BZbvSVCooBp8svEhxV%2FXYPIuXmH7lOKOGM4SwF9xax5PjIe91aPWTgwTjHzVMRFqR6wqODU0UHhsCJMZFqzemH32wFPIYn89LicaOFxe%2BEi%2BV2F8WyokcZHAFL5ozM62gSwhwyzhfvxv%2BBLLocQ3NIjbUzNNLT9i%2BAx77%2BCChPtJzSu4igBP6Fe%2BjMJeJFMOxDPSW5VYZmsc7tjqWF1O8GSmBJF%2FgVEu28At3JS%2F6VNTMQueNK2bLjaJ1NWPptlgMOrqzsQGOqUBXJl7Z3dwIWSMkrE59Kwd30QeKo2alNjtQWwnCEjkNe3X6idw1qCv3kTSLUL9NYgtCSL8GEPutYqW32P57vv9yn3V1rrMMlYnDwk1zUYPBBqWyD0BDdxYAp%2BtCU6N1NIi6YKfla1nQbD4Yb3hfZ00hZj0ZvRqgc8Nt%2BhxiLfuwZon%2BXMCmZFgzB0cIHV6g%2Fi9JjzNyit7IfC8Z8HuYz8%2B7aX%2F%2BoQy&X-Amz-Signature=651ab4c0f05c3c96bdeab0f8445cc0bab6a9e46f4d0c170916ae1b943dcdebe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635WSZQPR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDMKUUP%2FjKP638ooVDYIHCoTBNBuYZBcZTeXz8PwZ%2BMDAIgN%2FCRFOKScRkaooIUk78w8aPTQjGgepHl%2FqATRzMBcNYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLCHfax2WDg1kJ133ircAwoyqrNd8E88tS8gJQNbIEu3ruYH%2BgtS37gUeYbGf7DBa8C%2FQQ18luLc6yCYF5XshNZ4MST1roxkPlPJAWJwowY%2FVf9JTiheJ3fiRCsfvrmYhlompPHucORStANnQ8Yd4ueFjmlihixjFhN9nDzzJqz8E7KlmLVGP7DflkgLYskCtmomZXHIIvEeMjJsuQPdqaAClZhB16UPDeUgVCVyKvPkYBhIwG0Ccwqdt31utqeAK4WSbgd%2BbH0AJkzO3jw2FAs39lFwKzifRkf%2B%2Bo8dLozIQlAvy%2BrIkaI88%2FyV3T1kVrAsxlAsJ8YLSTgnH0YjVl4jze95D1un1z1ENHcVQhTmvhP7Kf52JQgpAFl10TPO1NPE1FFobflhIlQ2dJ6FmjD6T6WkOsZ3CriGBFi4Zqo5hfYRbLAS%2Bw92qCKeuvr5JxKaShKkoOUO7KQ5x7qbX%2B3%2F2IFQycr%2FdGOF1bA1UK9jkH5R3VZ8A3QT29z%2B4B0IddmUt9lvReP4Jzir8G10Dks5i%2BpcS7a9larXdpfeAcQWmLOjUO6vpKpLN61JepyMLis9ubF6pfBmvPzj6XB%2F66aqN96YHwsMgnXB9ZDi%2B%2BWSeZhWgERBa%2B1Moje3NniW1nlcPu98%2FUakT%2FYnMP%2FqzsQGOqUB6grWI6bZx0riYnZ2dbqEY8VKeDOCTwIBWbuD%2BPgFDtqsNeToUMdZeimXcHJOl0H87f9hDDFvK0UKUFm4xYAQ4yeToa5GVJ37jqfyA8bVEkJJT1rW4%2BocaM4BRk1um6LS%2BfdC0qru1y45YR%2FJmx%2FNLphgK0H1Se0yyCG3NO8LFsOLdUGANWGxcv9QuEbu8r9CJ4F6TKBs7d3MuRonkx6LadFvsbqD&X-Amz-Signature=5a743ddb16c0a27fd132a64732dd406e03bf55c0ee55c91406cce77df72a658a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CONS3KR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDViQGl05efWJBrygyTmnpvV6IKyBvcTt%2FHPWFzZ8lkNwIgJqDUranbyCc7q4%2BP7zHh%2FMYhyMx5qHYL4Q6WR1ly2%2B4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEtLUNK3TieVSjy0BircA1W0MECyPaoDfDd3fEnvoi9ABf4zc%2FhX%2FTc9BunKcUj2YveOM6DesBg%2BruIr2FrtditRfNROEqPcl%2FSUarxQb0yEzYtVBapJLalLC%2BThsJp9%2F4oZSKRObYcCdtkOTY5QQpwQGdobb6%2Bi1g2T9VRl3NtYp73Sj0KsZGSulgWw%2B4cr6qSygTa%2F96V38JvleQKLS9b4gq12jvmupdoiJ0g8F%2BdImSq36PGCOi%2BMB3EcZNK2sIO%2FPzo1LkfOg9TxCfZBwQAA6%2BmdCLWPEGGrmQLQMXe5hbo5Zvffjb%2BPL7oftw6vWPBt9%2BMp5IEwcSbonE8AytJQ7fmRBJEiEOrALcx1B6FsJv9T6AYKBTA4MeCLZJaXnd85m6mAzBgOXsrc%2BZbvSVCooBp8svEhxV%2FXYPIuXmH7lOKOGM4SwF9xax5PjIe91aPWTgwTjHzVMRFqR6wqODU0UHhsCJMZFqzemH32wFPIYn89LicaOFxe%2BEi%2BV2F8WyokcZHAFL5ozM62gSwhwyzhfvxv%2BBLLocQ3NIjbUzNNLT9i%2BAx77%2BCChPtJzSu4igBP6Fe%2BjMJeJFMOxDPSW5VYZmsc7tjqWF1O8GSmBJF%2FgVEu28At3JS%2F6VNTMQueNK2bLjaJ1NWPptlgMOrqzsQGOqUBXJl7Z3dwIWSMkrE59Kwd30QeKo2alNjtQWwnCEjkNe3X6idw1qCv3kTSLUL9NYgtCSL8GEPutYqW32P57vv9yn3V1rrMMlYnDwk1zUYPBBqWyD0BDdxYAp%2BtCU6N1NIi6YKfla1nQbD4Yb3hfZ00hZj0ZvRqgc8Nt%2BhxiLfuwZon%2BXMCmZFgzB0cIHV6g%2Fi9JjzNyit7IfC8Z8HuYz8%2B7aX%2F%2BoQy&X-Amz-Signature=e7fbb8184b2e976ecc1c170ee0311e872a605923500dd296b9e791e139128bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CONS3KR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDViQGl05efWJBrygyTmnpvV6IKyBvcTt%2FHPWFzZ8lkNwIgJqDUranbyCc7q4%2BP7zHh%2FMYhyMx5qHYL4Q6WR1ly2%2B4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEtLUNK3TieVSjy0BircA1W0MECyPaoDfDd3fEnvoi9ABf4zc%2FhX%2FTc9BunKcUj2YveOM6DesBg%2BruIr2FrtditRfNROEqPcl%2FSUarxQb0yEzYtVBapJLalLC%2BThsJp9%2F4oZSKRObYcCdtkOTY5QQpwQGdobb6%2Bi1g2T9VRl3NtYp73Sj0KsZGSulgWw%2B4cr6qSygTa%2F96V38JvleQKLS9b4gq12jvmupdoiJ0g8F%2BdImSq36PGCOi%2BMB3EcZNK2sIO%2FPzo1LkfOg9TxCfZBwQAA6%2BmdCLWPEGGrmQLQMXe5hbo5Zvffjb%2BPL7oftw6vWPBt9%2BMp5IEwcSbonE8AytJQ7fmRBJEiEOrALcx1B6FsJv9T6AYKBTA4MeCLZJaXnd85m6mAzBgOXsrc%2BZbvSVCooBp8svEhxV%2FXYPIuXmH7lOKOGM4SwF9xax5PjIe91aPWTgwTjHzVMRFqR6wqODU0UHhsCJMZFqzemH32wFPIYn89LicaOFxe%2BEi%2BV2F8WyokcZHAFL5ozM62gSwhwyzhfvxv%2BBLLocQ3NIjbUzNNLT9i%2BAx77%2BCChPtJzSu4igBP6Fe%2BjMJeJFMOxDPSW5VYZmsc7tjqWF1O8GSmBJF%2FgVEu28At3JS%2F6VNTMQueNK2bLjaJ1NWPptlgMOrqzsQGOqUBXJl7Z3dwIWSMkrE59Kwd30QeKo2alNjtQWwnCEjkNe3X6idw1qCv3kTSLUL9NYgtCSL8GEPutYqW32P57vv9yn3V1rrMMlYnDwk1zUYPBBqWyD0BDdxYAp%2BtCU6N1NIi6YKfla1nQbD4Yb3hfZ00hZj0ZvRqgc8Nt%2BhxiLfuwZon%2BXMCmZFgzB0cIHV6g%2Fi9JjzNyit7IfC8Z8HuYz8%2B7aX%2F%2BoQy&X-Amz-Signature=9d7c70c0376986b3a05606d4b7ba5d176b94c356cd8bc4b43b51433e39b0b3b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CONS3KR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDViQGl05efWJBrygyTmnpvV6IKyBvcTt%2FHPWFzZ8lkNwIgJqDUranbyCc7q4%2BP7zHh%2FMYhyMx5qHYL4Q6WR1ly2%2B4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEtLUNK3TieVSjy0BircA1W0MECyPaoDfDd3fEnvoi9ABf4zc%2FhX%2FTc9BunKcUj2YveOM6DesBg%2BruIr2FrtditRfNROEqPcl%2FSUarxQb0yEzYtVBapJLalLC%2BThsJp9%2F4oZSKRObYcCdtkOTY5QQpwQGdobb6%2Bi1g2T9VRl3NtYp73Sj0KsZGSulgWw%2B4cr6qSygTa%2F96V38JvleQKLS9b4gq12jvmupdoiJ0g8F%2BdImSq36PGCOi%2BMB3EcZNK2sIO%2FPzo1LkfOg9TxCfZBwQAA6%2BmdCLWPEGGrmQLQMXe5hbo5Zvffjb%2BPL7oftw6vWPBt9%2BMp5IEwcSbonE8AytJQ7fmRBJEiEOrALcx1B6FsJv9T6AYKBTA4MeCLZJaXnd85m6mAzBgOXsrc%2BZbvSVCooBp8svEhxV%2FXYPIuXmH7lOKOGM4SwF9xax5PjIe91aPWTgwTjHzVMRFqR6wqODU0UHhsCJMZFqzemH32wFPIYn89LicaOFxe%2BEi%2BV2F8WyokcZHAFL5ozM62gSwhwyzhfvxv%2BBLLocQ3NIjbUzNNLT9i%2BAx77%2BCChPtJzSu4igBP6Fe%2BjMJeJFMOxDPSW5VYZmsc7tjqWF1O8GSmBJF%2FgVEu28At3JS%2F6VNTMQueNK2bLjaJ1NWPptlgMOrqzsQGOqUBXJl7Z3dwIWSMkrE59Kwd30QeKo2alNjtQWwnCEjkNe3X6idw1qCv3kTSLUL9NYgtCSL8GEPutYqW32P57vv9yn3V1rrMMlYnDwk1zUYPBBqWyD0BDdxYAp%2BtCU6N1NIi6YKfla1nQbD4Yb3hfZ00hZj0ZvRqgc8Nt%2BhxiLfuwZon%2BXMCmZFgzB0cIHV6g%2Fi9JjzNyit7IfC8Z8HuYz8%2B7aX%2F%2BoQy&X-Amz-Signature=ad402f3e891eabe3c691f1f0007ddc2067c89912fe669e9bd0335bd23e9759ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CONS3KR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDViQGl05efWJBrygyTmnpvV6IKyBvcTt%2FHPWFzZ8lkNwIgJqDUranbyCc7q4%2BP7zHh%2FMYhyMx5qHYL4Q6WR1ly2%2B4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEtLUNK3TieVSjy0BircA1W0MECyPaoDfDd3fEnvoi9ABf4zc%2FhX%2FTc9BunKcUj2YveOM6DesBg%2BruIr2FrtditRfNROEqPcl%2FSUarxQb0yEzYtVBapJLalLC%2BThsJp9%2F4oZSKRObYcCdtkOTY5QQpwQGdobb6%2Bi1g2T9VRl3NtYp73Sj0KsZGSulgWw%2B4cr6qSygTa%2F96V38JvleQKLS9b4gq12jvmupdoiJ0g8F%2BdImSq36PGCOi%2BMB3EcZNK2sIO%2FPzo1LkfOg9TxCfZBwQAA6%2BmdCLWPEGGrmQLQMXe5hbo5Zvffjb%2BPL7oftw6vWPBt9%2BMp5IEwcSbonE8AytJQ7fmRBJEiEOrALcx1B6FsJv9T6AYKBTA4MeCLZJaXnd85m6mAzBgOXsrc%2BZbvSVCooBp8svEhxV%2FXYPIuXmH7lOKOGM4SwF9xax5PjIe91aPWTgwTjHzVMRFqR6wqODU0UHhsCJMZFqzemH32wFPIYn89LicaOFxe%2BEi%2BV2F8WyokcZHAFL5ozM62gSwhwyzhfvxv%2BBLLocQ3NIjbUzNNLT9i%2BAx77%2BCChPtJzSu4igBP6Fe%2BjMJeJFMOxDPSW5VYZmsc7tjqWF1O8GSmBJF%2FgVEu28At3JS%2F6VNTMQueNK2bLjaJ1NWPptlgMOrqzsQGOqUBXJl7Z3dwIWSMkrE59Kwd30QeKo2alNjtQWwnCEjkNe3X6idw1qCv3kTSLUL9NYgtCSL8GEPutYqW32P57vv9yn3V1rrMMlYnDwk1zUYPBBqWyD0BDdxYAp%2BtCU6N1NIi6YKfla1nQbD4Yb3hfZ00hZj0ZvRqgc8Nt%2BhxiLfuwZon%2BXMCmZFgzB0cIHV6g%2Fi9JjzNyit7IfC8Z8HuYz8%2B7aX%2F%2BoQy&X-Amz-Signature=deefa245d5a05b8f55e1a0fe965ba9f6f88bbc64619bf03157311ec1a3ea1587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CONS3KR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDViQGl05efWJBrygyTmnpvV6IKyBvcTt%2FHPWFzZ8lkNwIgJqDUranbyCc7q4%2BP7zHh%2FMYhyMx5qHYL4Q6WR1ly2%2B4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEtLUNK3TieVSjy0BircA1W0MECyPaoDfDd3fEnvoi9ABf4zc%2FhX%2FTc9BunKcUj2YveOM6DesBg%2BruIr2FrtditRfNROEqPcl%2FSUarxQb0yEzYtVBapJLalLC%2BThsJp9%2F4oZSKRObYcCdtkOTY5QQpwQGdobb6%2Bi1g2T9VRl3NtYp73Sj0KsZGSulgWw%2B4cr6qSygTa%2F96V38JvleQKLS9b4gq12jvmupdoiJ0g8F%2BdImSq36PGCOi%2BMB3EcZNK2sIO%2FPzo1LkfOg9TxCfZBwQAA6%2BmdCLWPEGGrmQLQMXe5hbo5Zvffjb%2BPL7oftw6vWPBt9%2BMp5IEwcSbonE8AytJQ7fmRBJEiEOrALcx1B6FsJv9T6AYKBTA4MeCLZJaXnd85m6mAzBgOXsrc%2BZbvSVCooBp8svEhxV%2FXYPIuXmH7lOKOGM4SwF9xax5PjIe91aPWTgwTjHzVMRFqR6wqODU0UHhsCJMZFqzemH32wFPIYn89LicaOFxe%2BEi%2BV2F8WyokcZHAFL5ozM62gSwhwyzhfvxv%2BBLLocQ3NIjbUzNNLT9i%2BAx77%2BCChPtJzSu4igBP6Fe%2BjMJeJFMOxDPSW5VYZmsc7tjqWF1O8GSmBJF%2FgVEu28At3JS%2F6VNTMQueNK2bLjaJ1NWPptlgMOrqzsQGOqUBXJl7Z3dwIWSMkrE59Kwd30QeKo2alNjtQWwnCEjkNe3X6idw1qCv3kTSLUL9NYgtCSL8GEPutYqW32P57vv9yn3V1rrMMlYnDwk1zUYPBBqWyD0BDdxYAp%2BtCU6N1NIi6YKfla1nQbD4Yb3hfZ00hZj0ZvRqgc8Nt%2BhxiLfuwZon%2BXMCmZFgzB0cIHV6g%2Fi9JjzNyit7IfC8Z8HuYz8%2B7aX%2F%2BoQy&X-Amz-Signature=e5cabfc59ecf108d6ec4abc5bff8b3b0cdf3bd6c3dadd50b48c83ef5cafb6725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CONS3KR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDViQGl05efWJBrygyTmnpvV6IKyBvcTt%2FHPWFzZ8lkNwIgJqDUranbyCc7q4%2BP7zHh%2FMYhyMx5qHYL4Q6WR1ly2%2B4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEtLUNK3TieVSjy0BircA1W0MECyPaoDfDd3fEnvoi9ABf4zc%2FhX%2FTc9BunKcUj2YveOM6DesBg%2BruIr2FrtditRfNROEqPcl%2FSUarxQb0yEzYtVBapJLalLC%2BThsJp9%2F4oZSKRObYcCdtkOTY5QQpwQGdobb6%2Bi1g2T9VRl3NtYp73Sj0KsZGSulgWw%2B4cr6qSygTa%2F96V38JvleQKLS9b4gq12jvmupdoiJ0g8F%2BdImSq36PGCOi%2BMB3EcZNK2sIO%2FPzo1LkfOg9TxCfZBwQAA6%2BmdCLWPEGGrmQLQMXe5hbo5Zvffjb%2BPL7oftw6vWPBt9%2BMp5IEwcSbonE8AytJQ7fmRBJEiEOrALcx1B6FsJv9T6AYKBTA4MeCLZJaXnd85m6mAzBgOXsrc%2BZbvSVCooBp8svEhxV%2FXYPIuXmH7lOKOGM4SwF9xax5PjIe91aPWTgwTjHzVMRFqR6wqODU0UHhsCJMZFqzemH32wFPIYn89LicaOFxe%2BEi%2BV2F8WyokcZHAFL5ozM62gSwhwyzhfvxv%2BBLLocQ3NIjbUzNNLT9i%2BAx77%2BCChPtJzSu4igBP6Fe%2BjMJeJFMOxDPSW5VYZmsc7tjqWF1O8GSmBJF%2FgVEu28At3JS%2F6VNTMQueNK2bLjaJ1NWPptlgMOrqzsQGOqUBXJl7Z3dwIWSMkrE59Kwd30QeKo2alNjtQWwnCEjkNe3X6idw1qCv3kTSLUL9NYgtCSL8GEPutYqW32P57vv9yn3V1rrMMlYnDwk1zUYPBBqWyD0BDdxYAp%2BtCU6N1NIi6YKfla1nQbD4Yb3hfZ00hZj0ZvRqgc8Nt%2BhxiLfuwZon%2BXMCmZFgzB0cIHV6g%2Fi9JjzNyit7IfC8Z8HuYz8%2B7aX%2F%2BoQy&X-Amz-Signature=0e76f577a02d06997288b4afa2a5255f8d5d4045fd98ac41c7c709a8e67f5b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
