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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEHOY7Y%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICYkjbmnk8nGXziy3ulR0NutkowTqpdHCv3%2BijtTM7cWAiEA8Z6vNaaGh7xeyLXdXqfI0LtIuG0PaONI1lispTeIAzgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDKOK8jbpHfUqmDTTeCrcA77esaoiDfamPgpY7giY3O5G%2BpAJYbfxGhaiMmnkHRqOz2Atmk3Exgj3EOHxz1ukVEQURGe5KKWmep9YJRDw5fw2%2Fat9essDXVCQBaejlJbyE4KPcXT8urEGV%2FL%2BWhTiMOEg9cxv1eKcIrxz%2BACuIa5E%2FozQXQnqKyTjMUIcSDKD5R1%2FmjXYnoGFpIujYcxYdLHTFMTsHlTHU8oii2opwvp8UesSjcvHatVigdm5TrEjj5eDfpO5jq3lNl%2FPaGGE38CZqs9oPIhTErobBM8wd0zwaMuk%2ByEKgEkaMOVrk9pHHjw6zzkUhJlAnv51J2zDP6AJchb%2Fcnh6VLMdWmSyYHXK05gk0x8%2FtgDp2sIeNWoCup1hrH%2BZ6PQ%2BoeD0CSbyjC3Agsn1mWvcw3e1zcz1%2FHg6Q232kH4wQYiQa4%2B61vibTdEOYUOHY1Ir1N%2FzGfJyGT0LYp0nL1xqiX05m8JnOdOfNRcI1OlyRsiaQhTkjWCadGvLm%2BZeiFR8d1QIHuaJaO%2F%2F%2BuTbBiZpL56pNU6jAgUQnI64dLfDz9EELT600wMtTehDhvoPZLOwCk407WvqNqcCOvgVScMYWTorKwwqU1XLaPq9pLE9UMjzGAPXLDWaf1r36OUbYkZSx2quMPTz8skGOqUBmmUaEdMlXsYIH4IHL5AFlhNvleL%2Bp4U6jpMKjMxfAPq0TOB0DtkgXsNNsxG3xo2WWR%2FVl6p7ZGCuhRY3mgkBt0In5P1XO45f2%2BV%2B8wlj9WaujL48Q2KzcAgoctBDAiCCO7b5a5GbQVubzTZT5NribCXWsT4FecsZ8a38E67Dy8%2B4OjoDR84papcJVCoPW2eE2843FwUY0fH%2BUEtDRZ%2Bqz8vvOqzN&X-Amz-Signature=703cf751306b044abc7da51c06cf0fab698b64afd75126bdbc92501b95a3f870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEHOY7Y%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICYkjbmnk8nGXziy3ulR0NutkowTqpdHCv3%2BijtTM7cWAiEA8Z6vNaaGh7xeyLXdXqfI0LtIuG0PaONI1lispTeIAzgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDKOK8jbpHfUqmDTTeCrcA77esaoiDfamPgpY7giY3O5G%2BpAJYbfxGhaiMmnkHRqOz2Atmk3Exgj3EOHxz1ukVEQURGe5KKWmep9YJRDw5fw2%2Fat9essDXVCQBaejlJbyE4KPcXT8urEGV%2FL%2BWhTiMOEg9cxv1eKcIrxz%2BACuIa5E%2FozQXQnqKyTjMUIcSDKD5R1%2FmjXYnoGFpIujYcxYdLHTFMTsHlTHU8oii2opwvp8UesSjcvHatVigdm5TrEjj5eDfpO5jq3lNl%2FPaGGE38CZqs9oPIhTErobBM8wd0zwaMuk%2ByEKgEkaMOVrk9pHHjw6zzkUhJlAnv51J2zDP6AJchb%2Fcnh6VLMdWmSyYHXK05gk0x8%2FtgDp2sIeNWoCup1hrH%2BZ6PQ%2BoeD0CSbyjC3Agsn1mWvcw3e1zcz1%2FHg6Q232kH4wQYiQa4%2B61vibTdEOYUOHY1Ir1N%2FzGfJyGT0LYp0nL1xqiX05m8JnOdOfNRcI1OlyRsiaQhTkjWCadGvLm%2BZeiFR8d1QIHuaJaO%2F%2F%2BuTbBiZpL56pNU6jAgUQnI64dLfDz9EELT600wMtTehDhvoPZLOwCk407WvqNqcCOvgVScMYWTorKwwqU1XLaPq9pLE9UMjzGAPXLDWaf1r36OUbYkZSx2quMPTz8skGOqUBmmUaEdMlXsYIH4IHL5AFlhNvleL%2Bp4U6jpMKjMxfAPq0TOB0DtkgXsNNsxG3xo2WWR%2FVl6p7ZGCuhRY3mgkBt0In5P1XO45f2%2BV%2B8wlj9WaujL48Q2KzcAgoctBDAiCCO7b5a5GbQVubzTZT5NribCXWsT4FecsZ8a38E67Dy8%2B4OjoDR84papcJVCoPW2eE2843FwUY0fH%2BUEtDRZ%2Bqz8vvOqzN&X-Amz-Signature=1774ab9899972139353728f4a57988c54e12f23e82f1c1d7afec50db9fe18a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEHOY7Y%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICYkjbmnk8nGXziy3ulR0NutkowTqpdHCv3%2BijtTM7cWAiEA8Z6vNaaGh7xeyLXdXqfI0LtIuG0PaONI1lispTeIAzgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDKOK8jbpHfUqmDTTeCrcA77esaoiDfamPgpY7giY3O5G%2BpAJYbfxGhaiMmnkHRqOz2Atmk3Exgj3EOHxz1ukVEQURGe5KKWmep9YJRDw5fw2%2Fat9essDXVCQBaejlJbyE4KPcXT8urEGV%2FL%2BWhTiMOEg9cxv1eKcIrxz%2BACuIa5E%2FozQXQnqKyTjMUIcSDKD5R1%2FmjXYnoGFpIujYcxYdLHTFMTsHlTHU8oii2opwvp8UesSjcvHatVigdm5TrEjj5eDfpO5jq3lNl%2FPaGGE38CZqs9oPIhTErobBM8wd0zwaMuk%2ByEKgEkaMOVrk9pHHjw6zzkUhJlAnv51J2zDP6AJchb%2Fcnh6VLMdWmSyYHXK05gk0x8%2FtgDp2sIeNWoCup1hrH%2BZ6PQ%2BoeD0CSbyjC3Agsn1mWvcw3e1zcz1%2FHg6Q232kH4wQYiQa4%2B61vibTdEOYUOHY1Ir1N%2FzGfJyGT0LYp0nL1xqiX05m8JnOdOfNRcI1OlyRsiaQhTkjWCadGvLm%2BZeiFR8d1QIHuaJaO%2F%2F%2BuTbBiZpL56pNU6jAgUQnI64dLfDz9EELT600wMtTehDhvoPZLOwCk407WvqNqcCOvgVScMYWTorKwwqU1XLaPq9pLE9UMjzGAPXLDWaf1r36OUbYkZSx2quMPTz8skGOqUBmmUaEdMlXsYIH4IHL5AFlhNvleL%2Bp4U6jpMKjMxfAPq0TOB0DtkgXsNNsxG3xo2WWR%2FVl6p7ZGCuhRY3mgkBt0In5P1XO45f2%2BV%2B8wlj9WaujL48Q2KzcAgoctBDAiCCO7b5a5GbQVubzTZT5NribCXWsT4FecsZ8a38E67Dy8%2B4OjoDR84papcJVCoPW2eE2843FwUY0fH%2BUEtDRZ%2Bqz8vvOqzN&X-Amz-Signature=c02fd6df1343efc13f605f9f40d44a02283205f147abb1b3101ee4a8c91b4727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEHOY7Y%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICYkjbmnk8nGXziy3ulR0NutkowTqpdHCv3%2BijtTM7cWAiEA8Z6vNaaGh7xeyLXdXqfI0LtIuG0PaONI1lispTeIAzgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDKOK8jbpHfUqmDTTeCrcA77esaoiDfamPgpY7giY3O5G%2BpAJYbfxGhaiMmnkHRqOz2Atmk3Exgj3EOHxz1ukVEQURGe5KKWmep9YJRDw5fw2%2Fat9essDXVCQBaejlJbyE4KPcXT8urEGV%2FL%2BWhTiMOEg9cxv1eKcIrxz%2BACuIa5E%2FozQXQnqKyTjMUIcSDKD5R1%2FmjXYnoGFpIujYcxYdLHTFMTsHlTHU8oii2opwvp8UesSjcvHatVigdm5TrEjj5eDfpO5jq3lNl%2FPaGGE38CZqs9oPIhTErobBM8wd0zwaMuk%2ByEKgEkaMOVrk9pHHjw6zzkUhJlAnv51J2zDP6AJchb%2Fcnh6VLMdWmSyYHXK05gk0x8%2FtgDp2sIeNWoCup1hrH%2BZ6PQ%2BoeD0CSbyjC3Agsn1mWvcw3e1zcz1%2FHg6Q232kH4wQYiQa4%2B61vibTdEOYUOHY1Ir1N%2FzGfJyGT0LYp0nL1xqiX05m8JnOdOfNRcI1OlyRsiaQhTkjWCadGvLm%2BZeiFR8d1QIHuaJaO%2F%2F%2BuTbBiZpL56pNU6jAgUQnI64dLfDz9EELT600wMtTehDhvoPZLOwCk407WvqNqcCOvgVScMYWTorKwwqU1XLaPq9pLE9UMjzGAPXLDWaf1r36OUbYkZSx2quMPTz8skGOqUBmmUaEdMlXsYIH4IHL5AFlhNvleL%2Bp4U6jpMKjMxfAPq0TOB0DtkgXsNNsxG3xo2WWR%2FVl6p7ZGCuhRY3mgkBt0In5P1XO45f2%2BV%2B8wlj9WaujL48Q2KzcAgoctBDAiCCO7b5a5GbQVubzTZT5NribCXWsT4FecsZ8a38E67Dy8%2B4OjoDR84papcJVCoPW2eE2843FwUY0fH%2BUEtDRZ%2Bqz8vvOqzN&X-Amz-Signature=e1b5848bad85c624b259e1a5f00decd55933c5ebe06d1d6c90b639e25a622fbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVRQXJIX%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDNiiUAhL0yBCCJDSxTIU0PZDyVsk04EGHGr2nex3r3oAiBYC1Y9wtkm%2B12EuXQCfV%2Fdadn1fLfORVjf0qMwWQdmHSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMAZAWdEWhHJ0oLS1nKtwDuCLFLDJZcbheTHtPgZS8Z0kfobaTsGFpvlY0emuROO5%2B6Xp3ERA%2B0QrM%2BWlnOgzKsU8H550S5x6YdFeYZZLtakS0Vl7NBml1gcOHSyHtWp8I2kBmtNqJdVZbwMZU%2F9ou%2BCeICmu%2BpgTRNgP%2FGphgNwNjl7T3rcjp6aK2fHYSb5AhtGKxKetCZaJS4WAoIZuwJ7gQ80UOtsCAZcMED5v8ZD7kRLKpD4eK84q56Rqr3Z9RsqDzxXpNd9y1F6Qc%2FAtoEa92QX7D%2Fi90BFvWyeNgWX2cFW83t5PAlf6Ojy7tMU7tDVbbYopHvZYdl0aE%2Fc5orj7i4DeczlI3QbZvsa6gnzwryMogDEDv6z2n6vvLsrK6t7T1LwiWR6RgYNhWoeLKSbX0At9duyMBAr7SXrRRrxTnOej03tu%2BEsLsQKmcCv0%2BxBoCr3UGfq5XcVuIaZPZn8J8BtYvndHTFBbyW1YHkCnQRDVVI73pRS7YyEDXzKgwRLUvFW6taDWudUkI0BCmVzP5zK9Brs7exws%2FUimykCl3JfSiXJ2kKTryXzr4zNoDjtEv39xP1vf%2FS8k8VDQM%2FPBWlvjcRTUhf0EgHB%2FTSS82FRBp2CZFLz%2B4hqLU11vQhEMUuFMsuojyJ0sw5%2FPyyQY6pgFYEOjvVj10HFRCzfN13fgUGYCSIicsD%2B27056epozEnkB3w%2FmSqTbh222GzYTbWR%2B79QLWcxBPL3uN9kSe2jVlQSs0ODSsou6jeHj1ejkhGGnHtYKJuHo6Up0FAvC0SE42Blj1M%2FGiXnVEDJLkYyu5wgulAmsNOgrcC7sIP3BGffKp5%2F6MrzwAzbLf4xgdOhQQXuTy%2FDCawgG1tF0WSGfWPEJ28grt&X-Amz-Signature=60ac17a79f64f1635a906dbbace5424cc85cd5e934982bf5e9162779c303c735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEHOY7Y%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICYkjbmnk8nGXziy3ulR0NutkowTqpdHCv3%2BijtTM7cWAiEA8Z6vNaaGh7xeyLXdXqfI0LtIuG0PaONI1lispTeIAzgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDKOK8jbpHfUqmDTTeCrcA77esaoiDfamPgpY7giY3O5G%2BpAJYbfxGhaiMmnkHRqOz2Atmk3Exgj3EOHxz1ukVEQURGe5KKWmep9YJRDw5fw2%2Fat9essDXVCQBaejlJbyE4KPcXT8urEGV%2FL%2BWhTiMOEg9cxv1eKcIrxz%2BACuIa5E%2FozQXQnqKyTjMUIcSDKD5R1%2FmjXYnoGFpIujYcxYdLHTFMTsHlTHU8oii2opwvp8UesSjcvHatVigdm5TrEjj5eDfpO5jq3lNl%2FPaGGE38CZqs9oPIhTErobBM8wd0zwaMuk%2ByEKgEkaMOVrk9pHHjw6zzkUhJlAnv51J2zDP6AJchb%2Fcnh6VLMdWmSyYHXK05gk0x8%2FtgDp2sIeNWoCup1hrH%2BZ6PQ%2BoeD0CSbyjC3Agsn1mWvcw3e1zcz1%2FHg6Q232kH4wQYiQa4%2B61vibTdEOYUOHY1Ir1N%2FzGfJyGT0LYp0nL1xqiX05m8JnOdOfNRcI1OlyRsiaQhTkjWCadGvLm%2BZeiFR8d1QIHuaJaO%2F%2F%2BuTbBiZpL56pNU6jAgUQnI64dLfDz9EELT600wMtTehDhvoPZLOwCk407WvqNqcCOvgVScMYWTorKwwqU1XLaPq9pLE9UMjzGAPXLDWaf1r36OUbYkZSx2quMPTz8skGOqUBmmUaEdMlXsYIH4IHL5AFlhNvleL%2Bp4U6jpMKjMxfAPq0TOB0DtkgXsNNsxG3xo2WWR%2FVl6p7ZGCuhRY3mgkBt0In5P1XO45f2%2BV%2B8wlj9WaujL48Q2KzcAgoctBDAiCCO7b5a5GbQVubzTZT5NribCXWsT4FecsZ8a38E67Dy8%2B4OjoDR84papcJVCoPW2eE2843FwUY0fH%2BUEtDRZ%2Bqz8vvOqzN&X-Amz-Signature=03403082e1e0eda72adacb926db31fd05451ad273fc47e3d271d02254a6e1c22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEHOY7Y%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICYkjbmnk8nGXziy3ulR0NutkowTqpdHCv3%2BijtTM7cWAiEA8Z6vNaaGh7xeyLXdXqfI0LtIuG0PaONI1lispTeIAzgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDKOK8jbpHfUqmDTTeCrcA77esaoiDfamPgpY7giY3O5G%2BpAJYbfxGhaiMmnkHRqOz2Atmk3Exgj3EOHxz1ukVEQURGe5KKWmep9YJRDw5fw2%2Fat9essDXVCQBaejlJbyE4KPcXT8urEGV%2FL%2BWhTiMOEg9cxv1eKcIrxz%2BACuIa5E%2FozQXQnqKyTjMUIcSDKD5R1%2FmjXYnoGFpIujYcxYdLHTFMTsHlTHU8oii2opwvp8UesSjcvHatVigdm5TrEjj5eDfpO5jq3lNl%2FPaGGE38CZqs9oPIhTErobBM8wd0zwaMuk%2ByEKgEkaMOVrk9pHHjw6zzkUhJlAnv51J2zDP6AJchb%2Fcnh6VLMdWmSyYHXK05gk0x8%2FtgDp2sIeNWoCup1hrH%2BZ6PQ%2BoeD0CSbyjC3Agsn1mWvcw3e1zcz1%2FHg6Q232kH4wQYiQa4%2B61vibTdEOYUOHY1Ir1N%2FzGfJyGT0LYp0nL1xqiX05m8JnOdOfNRcI1OlyRsiaQhTkjWCadGvLm%2BZeiFR8d1QIHuaJaO%2F%2F%2BuTbBiZpL56pNU6jAgUQnI64dLfDz9EELT600wMtTehDhvoPZLOwCk407WvqNqcCOvgVScMYWTorKwwqU1XLaPq9pLE9UMjzGAPXLDWaf1r36OUbYkZSx2quMPTz8skGOqUBmmUaEdMlXsYIH4IHL5AFlhNvleL%2Bp4U6jpMKjMxfAPq0TOB0DtkgXsNNsxG3xo2WWR%2FVl6p7ZGCuhRY3mgkBt0In5P1XO45f2%2BV%2B8wlj9WaujL48Q2KzcAgoctBDAiCCO7b5a5GbQVubzTZT5NribCXWsT4FecsZ8a38E67Dy8%2B4OjoDR84papcJVCoPW2eE2843FwUY0fH%2BUEtDRZ%2Bqz8vvOqzN&X-Amz-Signature=5dc5d1a22d173b9c2c3099637ed3e90afbb1ec179aabc424cbb7c42ce26dc60c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEHOY7Y%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICYkjbmnk8nGXziy3ulR0NutkowTqpdHCv3%2BijtTM7cWAiEA8Z6vNaaGh7xeyLXdXqfI0LtIuG0PaONI1lispTeIAzgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDKOK8jbpHfUqmDTTeCrcA77esaoiDfamPgpY7giY3O5G%2BpAJYbfxGhaiMmnkHRqOz2Atmk3Exgj3EOHxz1ukVEQURGe5KKWmep9YJRDw5fw2%2Fat9essDXVCQBaejlJbyE4KPcXT8urEGV%2FL%2BWhTiMOEg9cxv1eKcIrxz%2BACuIa5E%2FozQXQnqKyTjMUIcSDKD5R1%2FmjXYnoGFpIujYcxYdLHTFMTsHlTHU8oii2opwvp8UesSjcvHatVigdm5TrEjj5eDfpO5jq3lNl%2FPaGGE38CZqs9oPIhTErobBM8wd0zwaMuk%2ByEKgEkaMOVrk9pHHjw6zzkUhJlAnv51J2zDP6AJchb%2Fcnh6VLMdWmSyYHXK05gk0x8%2FtgDp2sIeNWoCup1hrH%2BZ6PQ%2BoeD0CSbyjC3Agsn1mWvcw3e1zcz1%2FHg6Q232kH4wQYiQa4%2B61vibTdEOYUOHY1Ir1N%2FzGfJyGT0LYp0nL1xqiX05m8JnOdOfNRcI1OlyRsiaQhTkjWCadGvLm%2BZeiFR8d1QIHuaJaO%2F%2F%2BuTbBiZpL56pNU6jAgUQnI64dLfDz9EELT600wMtTehDhvoPZLOwCk407WvqNqcCOvgVScMYWTorKwwqU1XLaPq9pLE9UMjzGAPXLDWaf1r36OUbYkZSx2quMPTz8skGOqUBmmUaEdMlXsYIH4IHL5AFlhNvleL%2Bp4U6jpMKjMxfAPq0TOB0DtkgXsNNsxG3xo2WWR%2FVl6p7ZGCuhRY3mgkBt0In5P1XO45f2%2BV%2B8wlj9WaujL48Q2KzcAgoctBDAiCCO7b5a5GbQVubzTZT5NribCXWsT4FecsZ8a38E67Dy8%2B4OjoDR84papcJVCoPW2eE2843FwUY0fH%2BUEtDRZ%2Bqz8vvOqzN&X-Amz-Signature=80d857208fe6fd6930f63b6aebccac821fd1b7a8a441df41def04aebd3ef52f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEHOY7Y%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICYkjbmnk8nGXziy3ulR0NutkowTqpdHCv3%2BijtTM7cWAiEA8Z6vNaaGh7xeyLXdXqfI0LtIuG0PaONI1lispTeIAzgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDKOK8jbpHfUqmDTTeCrcA77esaoiDfamPgpY7giY3O5G%2BpAJYbfxGhaiMmnkHRqOz2Atmk3Exgj3EOHxz1ukVEQURGe5KKWmep9YJRDw5fw2%2Fat9essDXVCQBaejlJbyE4KPcXT8urEGV%2FL%2BWhTiMOEg9cxv1eKcIrxz%2BACuIa5E%2FozQXQnqKyTjMUIcSDKD5R1%2FmjXYnoGFpIujYcxYdLHTFMTsHlTHU8oii2opwvp8UesSjcvHatVigdm5TrEjj5eDfpO5jq3lNl%2FPaGGE38CZqs9oPIhTErobBM8wd0zwaMuk%2ByEKgEkaMOVrk9pHHjw6zzkUhJlAnv51J2zDP6AJchb%2Fcnh6VLMdWmSyYHXK05gk0x8%2FtgDp2sIeNWoCup1hrH%2BZ6PQ%2BoeD0CSbyjC3Agsn1mWvcw3e1zcz1%2FHg6Q232kH4wQYiQa4%2B61vibTdEOYUOHY1Ir1N%2FzGfJyGT0LYp0nL1xqiX05m8JnOdOfNRcI1OlyRsiaQhTkjWCadGvLm%2BZeiFR8d1QIHuaJaO%2F%2F%2BuTbBiZpL56pNU6jAgUQnI64dLfDz9EELT600wMtTehDhvoPZLOwCk407WvqNqcCOvgVScMYWTorKwwqU1XLaPq9pLE9UMjzGAPXLDWaf1r36OUbYkZSx2quMPTz8skGOqUBmmUaEdMlXsYIH4IHL5AFlhNvleL%2Bp4U6jpMKjMxfAPq0TOB0DtkgXsNNsxG3xo2WWR%2FVl6p7ZGCuhRY3mgkBt0In5P1XO45f2%2BV%2B8wlj9WaujL48Q2KzcAgoctBDAiCCO7b5a5GbQVubzTZT5NribCXWsT4FecsZ8a38E67Dy8%2B4OjoDR84papcJVCoPW2eE2843FwUY0fH%2BUEtDRZ%2Bqz8vvOqzN&X-Amz-Signature=4def35209a813d53d14d9f6f0c5f9b64223ac54739731a901c58b935a61aa00a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEHOY7Y%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICYkjbmnk8nGXziy3ulR0NutkowTqpdHCv3%2BijtTM7cWAiEA8Z6vNaaGh7xeyLXdXqfI0LtIuG0PaONI1lispTeIAzgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDKOK8jbpHfUqmDTTeCrcA77esaoiDfamPgpY7giY3O5G%2BpAJYbfxGhaiMmnkHRqOz2Atmk3Exgj3EOHxz1ukVEQURGe5KKWmep9YJRDw5fw2%2Fat9essDXVCQBaejlJbyE4KPcXT8urEGV%2FL%2BWhTiMOEg9cxv1eKcIrxz%2BACuIa5E%2FozQXQnqKyTjMUIcSDKD5R1%2FmjXYnoGFpIujYcxYdLHTFMTsHlTHU8oii2opwvp8UesSjcvHatVigdm5TrEjj5eDfpO5jq3lNl%2FPaGGE38CZqs9oPIhTErobBM8wd0zwaMuk%2ByEKgEkaMOVrk9pHHjw6zzkUhJlAnv51J2zDP6AJchb%2Fcnh6VLMdWmSyYHXK05gk0x8%2FtgDp2sIeNWoCup1hrH%2BZ6PQ%2BoeD0CSbyjC3Agsn1mWvcw3e1zcz1%2FHg6Q232kH4wQYiQa4%2B61vibTdEOYUOHY1Ir1N%2FzGfJyGT0LYp0nL1xqiX05m8JnOdOfNRcI1OlyRsiaQhTkjWCadGvLm%2BZeiFR8d1QIHuaJaO%2F%2F%2BuTbBiZpL56pNU6jAgUQnI64dLfDz9EELT600wMtTehDhvoPZLOwCk407WvqNqcCOvgVScMYWTorKwwqU1XLaPq9pLE9UMjzGAPXLDWaf1r36OUbYkZSx2quMPTz8skGOqUBmmUaEdMlXsYIH4IHL5AFlhNvleL%2Bp4U6jpMKjMxfAPq0TOB0DtkgXsNNsxG3xo2WWR%2FVl6p7ZGCuhRY3mgkBt0In5P1XO45f2%2BV%2B8wlj9WaujL48Q2KzcAgoctBDAiCCO7b5a5GbQVubzTZT5NribCXWsT4FecsZ8a38E67Dy8%2B4OjoDR84papcJVCoPW2eE2843FwUY0fH%2BUEtDRZ%2Bqz8vvOqzN&X-Amz-Signature=13075db5b908e200ce2f5c63c011a61083e5e07644a3ca9dbfca7afd652afd0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDEHOY7Y%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICYkjbmnk8nGXziy3ulR0NutkowTqpdHCv3%2BijtTM7cWAiEA8Z6vNaaGh7xeyLXdXqfI0LtIuG0PaONI1lispTeIAzgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDKOK8jbpHfUqmDTTeCrcA77esaoiDfamPgpY7giY3O5G%2BpAJYbfxGhaiMmnkHRqOz2Atmk3Exgj3EOHxz1ukVEQURGe5KKWmep9YJRDw5fw2%2Fat9essDXVCQBaejlJbyE4KPcXT8urEGV%2FL%2BWhTiMOEg9cxv1eKcIrxz%2BACuIa5E%2FozQXQnqKyTjMUIcSDKD5R1%2FmjXYnoGFpIujYcxYdLHTFMTsHlTHU8oii2opwvp8UesSjcvHatVigdm5TrEjj5eDfpO5jq3lNl%2FPaGGE38CZqs9oPIhTErobBM8wd0zwaMuk%2ByEKgEkaMOVrk9pHHjw6zzkUhJlAnv51J2zDP6AJchb%2Fcnh6VLMdWmSyYHXK05gk0x8%2FtgDp2sIeNWoCup1hrH%2BZ6PQ%2BoeD0CSbyjC3Agsn1mWvcw3e1zcz1%2FHg6Q232kH4wQYiQa4%2B61vibTdEOYUOHY1Ir1N%2FzGfJyGT0LYp0nL1xqiX05m8JnOdOfNRcI1OlyRsiaQhTkjWCadGvLm%2BZeiFR8d1QIHuaJaO%2F%2F%2BuTbBiZpL56pNU6jAgUQnI64dLfDz9EELT600wMtTehDhvoPZLOwCk407WvqNqcCOvgVScMYWTorKwwqU1XLaPq9pLE9UMjzGAPXLDWaf1r36OUbYkZSx2quMPTz8skGOqUBmmUaEdMlXsYIH4IHL5AFlhNvleL%2Bp4U6jpMKjMxfAPq0TOB0DtkgXsNNsxG3xo2WWR%2FVl6p7ZGCuhRY3mgkBt0In5P1XO45f2%2BV%2B8wlj9WaujL48Q2KzcAgoctBDAiCCO7b5a5GbQVubzTZT5NribCXWsT4FecsZ8a38E67Dy8%2B4OjoDR84papcJVCoPW2eE2843FwUY0fH%2BUEtDRZ%2Bqz8vvOqzN&X-Amz-Signature=a6d574ebbc821ab2a5c9ed66eee58b82a31100b3fbe31cdc4d5993eb38c18bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


