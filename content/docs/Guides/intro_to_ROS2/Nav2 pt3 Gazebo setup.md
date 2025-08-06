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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K23ZQAY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCqBM%2BjIw6vrrzZqwklrBS4wOxAkv4PT6nbVu6dFw%2BzxAIgAp9uuVrR4np0Wos1n1HU416V4%2BgAP8rr6pgiH8WDBaIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMhvzBU%2BgG7My9G%2FdCrcAx4bgySJR1id3rufbfjCGACSJNma%2BXHapsR%2BwphEEaL3breAYY8uTIGVQnpWl1tm4kBpwmSkS5gAsXG12RfbDTI0nIg9W3kRo6zm4BVLu13Ya7mE8sqatZkCp3tAyvnqH%2Fqkn81bBhqlauaJJNIhd57XhxkiJHYRRd6RULgMoHn1Osa%2FCkL36tLPcy3WbqzhdMOj6psU3OOyQb1WFvxEGETkTfjH1ngBAvwYDuFgNaiozVPAQw2p3GnVPwkNmodcccfZZGi8FN1ivA%2BEwqdizbfA1kJdIzVGlrikMjLneo7Q0mF5%2FoxwgDrNORXFmAtNQM7jkYw9I1SSrs5Z3FDJrEdKzvf5BF2%2FbM8Z69AxTZzYxAwfmzH61%2BjuGfuU0lNY0ST6I1QlRv7IFdfAc15JnWe%2FW7DQyLl%2BKXv2LNlYdi054uow8U8qOGkhY1yk4yRDqTbzIvDYqOdHvyxLrGU04H3%2B4NGvkfca4wnAt%2FJNKZ%2FUeU3NuR55OKKy2SUgkiIJCE00%2BgvD2dfTQSMW7j9iMB17MvL%2FNit%2BCY6Bcfvtn%2F%2FQv4v8aQcnAEx0T%2FIR9mtZEyAcL%2BC6vFg1X5H%2BktWozGHSnbf%2FxtgN2hTSEhnrSIYLRkSm%2BTXAk91zSfCqMJGOz8QGOqUBtM%2FKfsK%2B%2BJgjEsM8smb9EpycBN0cLzDyRgU4wcnml%2F2RgXN0ZJUAOpGnjA%2BLB3bBizOW%2BmRzLY9enRFM45GCDHtQX5SUZxOgMlUiT%2FwnwjEnhpDrGRueP%2F%2BhjAGe93q%2BeLVUCPRO5ALq6Wchaq8hFTfjFWNohk44LBbZ92%2B7p37Her%2BBE9pQ58CbOh6EV5PDOl2cee7Pk8dM8Fnda50KQOQ6v1nP&X-Amz-Signature=b3f611bfe9493df0e207092561a38b2e6c9a778e8bec9bc6670eefd0141bc50e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K23ZQAY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCqBM%2BjIw6vrrzZqwklrBS4wOxAkv4PT6nbVu6dFw%2BzxAIgAp9uuVrR4np0Wos1n1HU416V4%2BgAP8rr6pgiH8WDBaIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMhvzBU%2BgG7My9G%2FdCrcAx4bgySJR1id3rufbfjCGACSJNma%2BXHapsR%2BwphEEaL3breAYY8uTIGVQnpWl1tm4kBpwmSkS5gAsXG12RfbDTI0nIg9W3kRo6zm4BVLu13Ya7mE8sqatZkCp3tAyvnqH%2Fqkn81bBhqlauaJJNIhd57XhxkiJHYRRd6RULgMoHn1Osa%2FCkL36tLPcy3WbqzhdMOj6psU3OOyQb1WFvxEGETkTfjH1ngBAvwYDuFgNaiozVPAQw2p3GnVPwkNmodcccfZZGi8FN1ivA%2BEwqdizbfA1kJdIzVGlrikMjLneo7Q0mF5%2FoxwgDrNORXFmAtNQM7jkYw9I1SSrs5Z3FDJrEdKzvf5BF2%2FbM8Z69AxTZzYxAwfmzH61%2BjuGfuU0lNY0ST6I1QlRv7IFdfAc15JnWe%2FW7DQyLl%2BKXv2LNlYdi054uow8U8qOGkhY1yk4yRDqTbzIvDYqOdHvyxLrGU04H3%2B4NGvkfca4wnAt%2FJNKZ%2FUeU3NuR55OKKy2SUgkiIJCE00%2BgvD2dfTQSMW7j9iMB17MvL%2FNit%2BCY6Bcfvtn%2F%2FQv4v8aQcnAEx0T%2FIR9mtZEyAcL%2BC6vFg1X5H%2BktWozGHSnbf%2FxtgN2hTSEhnrSIYLRkSm%2BTXAk91zSfCqMJGOz8QGOqUBtM%2FKfsK%2B%2BJgjEsM8smb9EpycBN0cLzDyRgU4wcnml%2F2RgXN0ZJUAOpGnjA%2BLB3bBizOW%2BmRzLY9enRFM45GCDHtQX5SUZxOgMlUiT%2FwnwjEnhpDrGRueP%2F%2BhjAGe93q%2BeLVUCPRO5ALq6Wchaq8hFTfjFWNohk44LBbZ92%2B7p37Her%2BBE9pQ58CbOh6EV5PDOl2cee7Pk8dM8Fnda50KQOQ6v1nP&X-Amz-Signature=fa688aa9b3ff8cb43c0d706c48831bbb77b84e6fef6210f2d8dc112a5df27d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K23ZQAY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCqBM%2BjIw6vrrzZqwklrBS4wOxAkv4PT6nbVu6dFw%2BzxAIgAp9uuVrR4np0Wos1n1HU416V4%2BgAP8rr6pgiH8WDBaIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMhvzBU%2BgG7My9G%2FdCrcAx4bgySJR1id3rufbfjCGACSJNma%2BXHapsR%2BwphEEaL3breAYY8uTIGVQnpWl1tm4kBpwmSkS5gAsXG12RfbDTI0nIg9W3kRo6zm4BVLu13Ya7mE8sqatZkCp3tAyvnqH%2Fqkn81bBhqlauaJJNIhd57XhxkiJHYRRd6RULgMoHn1Osa%2FCkL36tLPcy3WbqzhdMOj6psU3OOyQb1WFvxEGETkTfjH1ngBAvwYDuFgNaiozVPAQw2p3GnVPwkNmodcccfZZGi8FN1ivA%2BEwqdizbfA1kJdIzVGlrikMjLneo7Q0mF5%2FoxwgDrNORXFmAtNQM7jkYw9I1SSrs5Z3FDJrEdKzvf5BF2%2FbM8Z69AxTZzYxAwfmzH61%2BjuGfuU0lNY0ST6I1QlRv7IFdfAc15JnWe%2FW7DQyLl%2BKXv2LNlYdi054uow8U8qOGkhY1yk4yRDqTbzIvDYqOdHvyxLrGU04H3%2B4NGvkfca4wnAt%2FJNKZ%2FUeU3NuR55OKKy2SUgkiIJCE00%2BgvD2dfTQSMW7j9iMB17MvL%2FNit%2BCY6Bcfvtn%2F%2FQv4v8aQcnAEx0T%2FIR9mtZEyAcL%2BC6vFg1X5H%2BktWozGHSnbf%2FxtgN2hTSEhnrSIYLRkSm%2BTXAk91zSfCqMJGOz8QGOqUBtM%2FKfsK%2B%2BJgjEsM8smb9EpycBN0cLzDyRgU4wcnml%2F2RgXN0ZJUAOpGnjA%2BLB3bBizOW%2BmRzLY9enRFM45GCDHtQX5SUZxOgMlUiT%2FwnwjEnhpDrGRueP%2F%2BhjAGe93q%2BeLVUCPRO5ALq6Wchaq8hFTfjFWNohk44LBbZ92%2B7p37Her%2BBE9pQ58CbOh6EV5PDOl2cee7Pk8dM8Fnda50KQOQ6v1nP&X-Amz-Signature=1c84d4128acb622ace1e4a43295be0665f4fb59013ccfaced6ef46cb38436de1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K23ZQAY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCqBM%2BjIw6vrrzZqwklrBS4wOxAkv4PT6nbVu6dFw%2BzxAIgAp9uuVrR4np0Wos1n1HU416V4%2BgAP8rr6pgiH8WDBaIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMhvzBU%2BgG7My9G%2FdCrcAx4bgySJR1id3rufbfjCGACSJNma%2BXHapsR%2BwphEEaL3breAYY8uTIGVQnpWl1tm4kBpwmSkS5gAsXG12RfbDTI0nIg9W3kRo6zm4BVLu13Ya7mE8sqatZkCp3tAyvnqH%2Fqkn81bBhqlauaJJNIhd57XhxkiJHYRRd6RULgMoHn1Osa%2FCkL36tLPcy3WbqzhdMOj6psU3OOyQb1WFvxEGETkTfjH1ngBAvwYDuFgNaiozVPAQw2p3GnVPwkNmodcccfZZGi8FN1ivA%2BEwqdizbfA1kJdIzVGlrikMjLneo7Q0mF5%2FoxwgDrNORXFmAtNQM7jkYw9I1SSrs5Z3FDJrEdKzvf5BF2%2FbM8Z69AxTZzYxAwfmzH61%2BjuGfuU0lNY0ST6I1QlRv7IFdfAc15JnWe%2FW7DQyLl%2BKXv2LNlYdi054uow8U8qOGkhY1yk4yRDqTbzIvDYqOdHvyxLrGU04H3%2B4NGvkfca4wnAt%2FJNKZ%2FUeU3NuR55OKKy2SUgkiIJCE00%2BgvD2dfTQSMW7j9iMB17MvL%2FNit%2BCY6Bcfvtn%2F%2FQv4v8aQcnAEx0T%2FIR9mtZEyAcL%2BC6vFg1X5H%2BktWozGHSnbf%2FxtgN2hTSEhnrSIYLRkSm%2BTXAk91zSfCqMJGOz8QGOqUBtM%2FKfsK%2B%2BJgjEsM8smb9EpycBN0cLzDyRgU4wcnml%2F2RgXN0ZJUAOpGnjA%2BLB3bBizOW%2BmRzLY9enRFM45GCDHtQX5SUZxOgMlUiT%2FwnwjEnhpDrGRueP%2F%2BhjAGe93q%2BeLVUCPRO5ALq6Wchaq8hFTfjFWNohk44LBbZ92%2B7p37Her%2BBE9pQ58CbOh6EV5PDOl2cee7Pk8dM8Fnda50KQOQ6v1nP&X-Amz-Signature=cc3189c0c94587ef887b1b806bc5492bb163a7061377a34e80a55d368fd6a90f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3GVIP4O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIDRS2FV1mNirSu0830H%2BkwfjqPdsP5d4yAx7u%2Fw%2BswiwAiBWluZhNb5bvYeWENptDQkAojF%2FgIcxoZs2DjglYn2MsSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMuWVytgguZX7Q7HONKtwDkaxrvnxCBJ7mlz0Latsb5WfO8f%2Bah2UmF1dmScOd02uv0EVTArhdPPN%2BgWvHe8xFTaBpWroLH8Xnsqw9tZ5pZ9RhLvUBd%2BdCdllUnTyfPnNMny8jjDuHRsH%2BRWBrF4zN7473JObykZ8ZCYH3WWfRGwRQpwNsyN1Xpw6tFgoE%2FSOurmOoHPK%2FCg796kUNCVnrzm0jK81RhneXNMMS8ClTR4sJdkGWmbEOMC3gGsC2G0Gcdk8%2FgFn3NfWeK2Ocztt2DEUlG1qRj0xTIi70y5gL0LXo%2FL0LfnrvbIuGtN6dY3JzkPVoHhG4pz4McGG9Gh3d4miLnp9c6f6DzHPkJFtAo5oN72n%2BrZ6LFBZw6xaagxed9%2FL7xzvlXCSQe3xd6MzT5tbnr3DoW1NQ5v9Ih4btNUGONiJRPz7x9hjrNvTdOiFKTYVn0gGr6R6w6Ko%2BDk5%2FwJ4ofMhjTb1AbScoE17Qrzz6klyJyUBNXtH1QtNu%2BB5T28fOUalKvMpx42DG44JvwJmwGM8eqqRt2HJ%2F4rspS%2BuiTF3DjHyTVirvBHgGwxuQwwgh%2F007qJRPMY9HAr77ndNAlROFnvqLYKjNB7VMlz12t3tNTNIT44X3gGoUuZYUg1ToCTz8JrNYei8wu47PxAY6pgExG5Ch8fskJF%2F1%2Blzspj%2F%2BuHGP53YVY3THlaC2MFPPy4DZgmFB8%2BdnYRKNaAORzUMu13%2Fd%2FlP%2FuRmbPWxoH5V0npyXmF%2BfKsUaLFtdGXcer6e3spGm3jD4IL%2FpLY76jK6Rr0VzemVqs3z6gzNC8KYnpA%2B79AeU6mHau%2BQrhL5glt7AsVxyH4RD%2B23h8atTjwdIuuc7q2RkflR3KX2VvlipIRtMQpjV&X-Amz-Signature=284422ce8fe9f65212111a8b8457e7dcf3e48470e41d0b8e2908cf73b334c070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K23ZQAY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCqBM%2BjIw6vrrzZqwklrBS4wOxAkv4PT6nbVu6dFw%2BzxAIgAp9uuVrR4np0Wos1n1HU416V4%2BgAP8rr6pgiH8WDBaIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMhvzBU%2BgG7My9G%2FdCrcAx4bgySJR1id3rufbfjCGACSJNma%2BXHapsR%2BwphEEaL3breAYY8uTIGVQnpWl1tm4kBpwmSkS5gAsXG12RfbDTI0nIg9W3kRo6zm4BVLu13Ya7mE8sqatZkCp3tAyvnqH%2Fqkn81bBhqlauaJJNIhd57XhxkiJHYRRd6RULgMoHn1Osa%2FCkL36tLPcy3WbqzhdMOj6psU3OOyQb1WFvxEGETkTfjH1ngBAvwYDuFgNaiozVPAQw2p3GnVPwkNmodcccfZZGi8FN1ivA%2BEwqdizbfA1kJdIzVGlrikMjLneo7Q0mF5%2FoxwgDrNORXFmAtNQM7jkYw9I1SSrs5Z3FDJrEdKzvf5BF2%2FbM8Z69AxTZzYxAwfmzH61%2BjuGfuU0lNY0ST6I1QlRv7IFdfAc15JnWe%2FW7DQyLl%2BKXv2LNlYdi054uow8U8qOGkhY1yk4yRDqTbzIvDYqOdHvyxLrGU04H3%2B4NGvkfca4wnAt%2FJNKZ%2FUeU3NuR55OKKy2SUgkiIJCE00%2BgvD2dfTQSMW7j9iMB17MvL%2FNit%2BCY6Bcfvtn%2F%2FQv4v8aQcnAEx0T%2FIR9mtZEyAcL%2BC6vFg1X5H%2BktWozGHSnbf%2FxtgN2hTSEhnrSIYLRkSm%2BTXAk91zSfCqMJGOz8QGOqUBtM%2FKfsK%2B%2BJgjEsM8smb9EpycBN0cLzDyRgU4wcnml%2F2RgXN0ZJUAOpGnjA%2BLB3bBizOW%2BmRzLY9enRFM45GCDHtQX5SUZxOgMlUiT%2FwnwjEnhpDrGRueP%2F%2BhjAGe93q%2BeLVUCPRO5ALq6Wchaq8hFTfjFWNohk44LBbZ92%2B7p37Her%2BBE9pQ58CbOh6EV5PDOl2cee7Pk8dM8Fnda50KQOQ6v1nP&X-Amz-Signature=b4f8a1eedc4ae59e528300ed73a7e6d7604485c214e533959a567f19a28c9471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K23ZQAY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCqBM%2BjIw6vrrzZqwklrBS4wOxAkv4PT6nbVu6dFw%2BzxAIgAp9uuVrR4np0Wos1n1HU416V4%2BgAP8rr6pgiH8WDBaIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMhvzBU%2BgG7My9G%2FdCrcAx4bgySJR1id3rufbfjCGACSJNma%2BXHapsR%2BwphEEaL3breAYY8uTIGVQnpWl1tm4kBpwmSkS5gAsXG12RfbDTI0nIg9W3kRo6zm4BVLu13Ya7mE8sqatZkCp3tAyvnqH%2Fqkn81bBhqlauaJJNIhd57XhxkiJHYRRd6RULgMoHn1Osa%2FCkL36tLPcy3WbqzhdMOj6psU3OOyQb1WFvxEGETkTfjH1ngBAvwYDuFgNaiozVPAQw2p3GnVPwkNmodcccfZZGi8FN1ivA%2BEwqdizbfA1kJdIzVGlrikMjLneo7Q0mF5%2FoxwgDrNORXFmAtNQM7jkYw9I1SSrs5Z3FDJrEdKzvf5BF2%2FbM8Z69AxTZzYxAwfmzH61%2BjuGfuU0lNY0ST6I1QlRv7IFdfAc15JnWe%2FW7DQyLl%2BKXv2LNlYdi054uow8U8qOGkhY1yk4yRDqTbzIvDYqOdHvyxLrGU04H3%2B4NGvkfca4wnAt%2FJNKZ%2FUeU3NuR55OKKy2SUgkiIJCE00%2BgvD2dfTQSMW7j9iMB17MvL%2FNit%2BCY6Bcfvtn%2F%2FQv4v8aQcnAEx0T%2FIR9mtZEyAcL%2BC6vFg1X5H%2BktWozGHSnbf%2FxtgN2hTSEhnrSIYLRkSm%2BTXAk91zSfCqMJGOz8QGOqUBtM%2FKfsK%2B%2BJgjEsM8smb9EpycBN0cLzDyRgU4wcnml%2F2RgXN0ZJUAOpGnjA%2BLB3bBizOW%2BmRzLY9enRFM45GCDHtQX5SUZxOgMlUiT%2FwnwjEnhpDrGRueP%2F%2BhjAGe93q%2BeLVUCPRO5ALq6Wchaq8hFTfjFWNohk44LBbZ92%2B7p37Her%2BBE9pQ58CbOh6EV5PDOl2cee7Pk8dM8Fnda50KQOQ6v1nP&X-Amz-Signature=f3b5e64858af127a7cc09909d587add534b9188d6a5b3216fd13411708d31498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K23ZQAY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCqBM%2BjIw6vrrzZqwklrBS4wOxAkv4PT6nbVu6dFw%2BzxAIgAp9uuVrR4np0Wos1n1HU416V4%2BgAP8rr6pgiH8WDBaIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMhvzBU%2BgG7My9G%2FdCrcAx4bgySJR1id3rufbfjCGACSJNma%2BXHapsR%2BwphEEaL3breAYY8uTIGVQnpWl1tm4kBpwmSkS5gAsXG12RfbDTI0nIg9W3kRo6zm4BVLu13Ya7mE8sqatZkCp3tAyvnqH%2Fqkn81bBhqlauaJJNIhd57XhxkiJHYRRd6RULgMoHn1Osa%2FCkL36tLPcy3WbqzhdMOj6psU3OOyQb1WFvxEGETkTfjH1ngBAvwYDuFgNaiozVPAQw2p3GnVPwkNmodcccfZZGi8FN1ivA%2BEwqdizbfA1kJdIzVGlrikMjLneo7Q0mF5%2FoxwgDrNORXFmAtNQM7jkYw9I1SSrs5Z3FDJrEdKzvf5BF2%2FbM8Z69AxTZzYxAwfmzH61%2BjuGfuU0lNY0ST6I1QlRv7IFdfAc15JnWe%2FW7DQyLl%2BKXv2LNlYdi054uow8U8qOGkhY1yk4yRDqTbzIvDYqOdHvyxLrGU04H3%2B4NGvkfca4wnAt%2FJNKZ%2FUeU3NuR55OKKy2SUgkiIJCE00%2BgvD2dfTQSMW7j9iMB17MvL%2FNit%2BCY6Bcfvtn%2F%2FQv4v8aQcnAEx0T%2FIR9mtZEyAcL%2BC6vFg1X5H%2BktWozGHSnbf%2FxtgN2hTSEhnrSIYLRkSm%2BTXAk91zSfCqMJGOz8QGOqUBtM%2FKfsK%2B%2BJgjEsM8smb9EpycBN0cLzDyRgU4wcnml%2F2RgXN0ZJUAOpGnjA%2BLB3bBizOW%2BmRzLY9enRFM45GCDHtQX5SUZxOgMlUiT%2FwnwjEnhpDrGRueP%2F%2BhjAGe93q%2BeLVUCPRO5ALq6Wchaq8hFTfjFWNohk44LBbZ92%2B7p37Her%2BBE9pQ58CbOh6EV5PDOl2cee7Pk8dM8Fnda50KQOQ6v1nP&X-Amz-Signature=f3f56560d8d4f12d161c9d65f443a9ddab3d762d0492b1fc73784b25c366fc80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K23ZQAY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCqBM%2BjIw6vrrzZqwklrBS4wOxAkv4PT6nbVu6dFw%2BzxAIgAp9uuVrR4np0Wos1n1HU416V4%2BgAP8rr6pgiH8WDBaIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMhvzBU%2BgG7My9G%2FdCrcAx4bgySJR1id3rufbfjCGACSJNma%2BXHapsR%2BwphEEaL3breAYY8uTIGVQnpWl1tm4kBpwmSkS5gAsXG12RfbDTI0nIg9W3kRo6zm4BVLu13Ya7mE8sqatZkCp3tAyvnqH%2Fqkn81bBhqlauaJJNIhd57XhxkiJHYRRd6RULgMoHn1Osa%2FCkL36tLPcy3WbqzhdMOj6psU3OOyQb1WFvxEGETkTfjH1ngBAvwYDuFgNaiozVPAQw2p3GnVPwkNmodcccfZZGi8FN1ivA%2BEwqdizbfA1kJdIzVGlrikMjLneo7Q0mF5%2FoxwgDrNORXFmAtNQM7jkYw9I1SSrs5Z3FDJrEdKzvf5BF2%2FbM8Z69AxTZzYxAwfmzH61%2BjuGfuU0lNY0ST6I1QlRv7IFdfAc15JnWe%2FW7DQyLl%2BKXv2LNlYdi054uow8U8qOGkhY1yk4yRDqTbzIvDYqOdHvyxLrGU04H3%2B4NGvkfca4wnAt%2FJNKZ%2FUeU3NuR55OKKy2SUgkiIJCE00%2BgvD2dfTQSMW7j9iMB17MvL%2FNit%2BCY6Bcfvtn%2F%2FQv4v8aQcnAEx0T%2FIR9mtZEyAcL%2BC6vFg1X5H%2BktWozGHSnbf%2FxtgN2hTSEhnrSIYLRkSm%2BTXAk91zSfCqMJGOz8QGOqUBtM%2FKfsK%2B%2BJgjEsM8smb9EpycBN0cLzDyRgU4wcnml%2F2RgXN0ZJUAOpGnjA%2BLB3bBizOW%2BmRzLY9enRFM45GCDHtQX5SUZxOgMlUiT%2FwnwjEnhpDrGRueP%2F%2BhjAGe93q%2BeLVUCPRO5ALq6Wchaq8hFTfjFWNohk44LBbZ92%2B7p37Her%2BBE9pQ58CbOh6EV5PDOl2cee7Pk8dM8Fnda50KQOQ6v1nP&X-Amz-Signature=cff4f5571506d4ba2399556ed9987b11fdd1e4acf15a6b3cc735fc7057dbb8f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K23ZQAY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCqBM%2BjIw6vrrzZqwklrBS4wOxAkv4PT6nbVu6dFw%2BzxAIgAp9uuVrR4np0Wos1n1HU416V4%2BgAP8rr6pgiH8WDBaIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMhvzBU%2BgG7My9G%2FdCrcAx4bgySJR1id3rufbfjCGACSJNma%2BXHapsR%2BwphEEaL3breAYY8uTIGVQnpWl1tm4kBpwmSkS5gAsXG12RfbDTI0nIg9W3kRo6zm4BVLu13Ya7mE8sqatZkCp3tAyvnqH%2Fqkn81bBhqlauaJJNIhd57XhxkiJHYRRd6RULgMoHn1Osa%2FCkL36tLPcy3WbqzhdMOj6psU3OOyQb1WFvxEGETkTfjH1ngBAvwYDuFgNaiozVPAQw2p3GnVPwkNmodcccfZZGi8FN1ivA%2BEwqdizbfA1kJdIzVGlrikMjLneo7Q0mF5%2FoxwgDrNORXFmAtNQM7jkYw9I1SSrs5Z3FDJrEdKzvf5BF2%2FbM8Z69AxTZzYxAwfmzH61%2BjuGfuU0lNY0ST6I1QlRv7IFdfAc15JnWe%2FW7DQyLl%2BKXv2LNlYdi054uow8U8qOGkhY1yk4yRDqTbzIvDYqOdHvyxLrGU04H3%2B4NGvkfca4wnAt%2FJNKZ%2FUeU3NuR55OKKy2SUgkiIJCE00%2BgvD2dfTQSMW7j9iMB17MvL%2FNit%2BCY6Bcfvtn%2F%2FQv4v8aQcnAEx0T%2FIR9mtZEyAcL%2BC6vFg1X5H%2BktWozGHSnbf%2FxtgN2hTSEhnrSIYLRkSm%2BTXAk91zSfCqMJGOz8QGOqUBtM%2FKfsK%2B%2BJgjEsM8smb9EpycBN0cLzDyRgU4wcnml%2F2RgXN0ZJUAOpGnjA%2BLB3bBizOW%2BmRzLY9enRFM45GCDHtQX5SUZxOgMlUiT%2FwnwjEnhpDrGRueP%2F%2BhjAGe93q%2BeLVUCPRO5ALq6Wchaq8hFTfjFWNohk44LBbZ92%2B7p37Her%2BBE9pQ58CbOh6EV5PDOl2cee7Pk8dM8Fnda50KQOQ6v1nP&X-Amz-Signature=632dcbc882fcfd50988420d101bdeb702018b2277e2d86a46c9c7a8042d81b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K23ZQAY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCqBM%2BjIw6vrrzZqwklrBS4wOxAkv4PT6nbVu6dFw%2BzxAIgAp9uuVrR4np0Wos1n1HU416V4%2BgAP8rr6pgiH8WDBaIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMhvzBU%2BgG7My9G%2FdCrcAx4bgySJR1id3rufbfjCGACSJNma%2BXHapsR%2BwphEEaL3breAYY8uTIGVQnpWl1tm4kBpwmSkS5gAsXG12RfbDTI0nIg9W3kRo6zm4BVLu13Ya7mE8sqatZkCp3tAyvnqH%2Fqkn81bBhqlauaJJNIhd57XhxkiJHYRRd6RULgMoHn1Osa%2FCkL36tLPcy3WbqzhdMOj6psU3OOyQb1WFvxEGETkTfjH1ngBAvwYDuFgNaiozVPAQw2p3GnVPwkNmodcccfZZGi8FN1ivA%2BEwqdizbfA1kJdIzVGlrikMjLneo7Q0mF5%2FoxwgDrNORXFmAtNQM7jkYw9I1SSrs5Z3FDJrEdKzvf5BF2%2FbM8Z69AxTZzYxAwfmzH61%2BjuGfuU0lNY0ST6I1QlRv7IFdfAc15JnWe%2FW7DQyLl%2BKXv2LNlYdi054uow8U8qOGkhY1yk4yRDqTbzIvDYqOdHvyxLrGU04H3%2B4NGvkfca4wnAt%2FJNKZ%2FUeU3NuR55OKKy2SUgkiIJCE00%2BgvD2dfTQSMW7j9iMB17MvL%2FNit%2BCY6Bcfvtn%2F%2FQv4v8aQcnAEx0T%2FIR9mtZEyAcL%2BC6vFg1X5H%2BktWozGHSnbf%2FxtgN2hTSEhnrSIYLRkSm%2BTXAk91zSfCqMJGOz8QGOqUBtM%2FKfsK%2B%2BJgjEsM8smb9EpycBN0cLzDyRgU4wcnml%2F2RgXN0ZJUAOpGnjA%2BLB3bBizOW%2BmRzLY9enRFM45GCDHtQX5SUZxOgMlUiT%2FwnwjEnhpDrGRueP%2F%2BhjAGe93q%2BeLVUCPRO5ALq6Wchaq8hFTfjFWNohk44LBbZ92%2B7p37Her%2BBE9pQ58CbOh6EV5PDOl2cee7Pk8dM8Fnda50KQOQ6v1nP&X-Amz-Signature=c26bb0c0c3addb640878ef244b340d2e8d49f47c57e6eb46412a2ff553c69062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
