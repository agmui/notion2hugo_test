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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXISKV2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHljjwmRPWxPBdb8grQaWsvouaRLMfituhRfRLijuk8iAiEAl0Yq75z%2B8JHkFwvv8y26VEJXXNkxPdRV7ao77SU%2FKBMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPasYJFmQBREyX3zkCrcAzcE4JQmOS4NlfgMR0c2ryM0kx%2FmAl1myXCIopuBbr2guhuhHCkS7wbj1UJOkuJb0V9SJFEBuuNjgUwP14hwVEyIntBbZJOO%2BDgzmIvJcPLsWGPAQo6tpvA1hxAGvPgjDP3TbarwzPXzXcHjNQoVEYZkj%2FPAVFElVW002CpmSmSk%2BiCzBrVsubOC%2BsqsdtNITA%2F3wi5Ook33lbpeEcK%2FnBWxMUIR%2B7qrtyqUE%2F82Rv%2BvCXJKD5%2BMcr45hkHYDq7YqyW5tmYP64ZJT2jvJHA6DjV0sxKBjxYFBH2VA6%2FYKOPj%2FFguvMNz08ntOoCXUUSH3VgRoGIAnA928GMw%2FGa1xv7DWYbYIxfYeN16uvONjR9cZqorn0z8SQP4mLFWyeh%2B5glks1ClxEecqC7ENemd0KEutHGqCZLaisiFmxq3xG8z5Q%2Fokm3FgQmRY9xE1774IXwXfKsYUQKUz0Ym2cvM4SSGsoDv1nGhkJ%2BrIDR24JyU1mcBUIS6T6Udx178mBQf6%2Bah3N7cZfx3ru5mjmdgbBLOIdcugj84SU6oqUXw4%2Fy1j%2FTvQ6lH%2B5xWqzZgVuawwpq4EDGvhgJ55DvjjZGOGxFnQ5ekflwRMJTFKA155K4z1XxGZcisXJI7LHVBMMzZvsQGOqUBxI3FXRPmv3rUCAgOsg%2Btn1fC8kxq3uA2WHEAWX4TrUzzbxK20II8hHz3LHpxT3Am%2BPZo%2FkFoWmGYkiZkIJ6rjNAPKorzpFyyoMj6rTinMkCprvbgGPXUtSEB4V8Z1aMhd%2FsWqwxAriPUQmjwNppy6hXkVdoRT4fK5Tg8Z9sqw175h78VNaiL5sbmqKwom%2FZtW44532VTADov9%2B%2FIfG1y770e6voK&X-Amz-Signature=cfa0f0658949cc6a7971d96a2a12b55088685965f01ba90a6c80963231583b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXISKV2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHljjwmRPWxPBdb8grQaWsvouaRLMfituhRfRLijuk8iAiEAl0Yq75z%2B8JHkFwvv8y26VEJXXNkxPdRV7ao77SU%2FKBMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPasYJFmQBREyX3zkCrcAzcE4JQmOS4NlfgMR0c2ryM0kx%2FmAl1myXCIopuBbr2guhuhHCkS7wbj1UJOkuJb0V9SJFEBuuNjgUwP14hwVEyIntBbZJOO%2BDgzmIvJcPLsWGPAQo6tpvA1hxAGvPgjDP3TbarwzPXzXcHjNQoVEYZkj%2FPAVFElVW002CpmSmSk%2BiCzBrVsubOC%2BsqsdtNITA%2F3wi5Ook33lbpeEcK%2FnBWxMUIR%2B7qrtyqUE%2F82Rv%2BvCXJKD5%2BMcr45hkHYDq7YqyW5tmYP64ZJT2jvJHA6DjV0sxKBjxYFBH2VA6%2FYKOPj%2FFguvMNz08ntOoCXUUSH3VgRoGIAnA928GMw%2FGa1xv7DWYbYIxfYeN16uvONjR9cZqorn0z8SQP4mLFWyeh%2B5glks1ClxEecqC7ENemd0KEutHGqCZLaisiFmxq3xG8z5Q%2Fokm3FgQmRY9xE1774IXwXfKsYUQKUz0Ym2cvM4SSGsoDv1nGhkJ%2BrIDR24JyU1mcBUIS6T6Udx178mBQf6%2Bah3N7cZfx3ru5mjmdgbBLOIdcugj84SU6oqUXw4%2Fy1j%2FTvQ6lH%2B5xWqzZgVuawwpq4EDGvhgJ55DvjjZGOGxFnQ5ekflwRMJTFKA155K4z1XxGZcisXJI7LHVBMMzZvsQGOqUBxI3FXRPmv3rUCAgOsg%2Btn1fC8kxq3uA2WHEAWX4TrUzzbxK20II8hHz3LHpxT3Am%2BPZo%2FkFoWmGYkiZkIJ6rjNAPKorzpFyyoMj6rTinMkCprvbgGPXUtSEB4V8Z1aMhd%2FsWqwxAriPUQmjwNppy6hXkVdoRT4fK5Tg8Z9sqw175h78VNaiL5sbmqKwom%2FZtW44532VTADov9%2B%2FIfG1y770e6voK&X-Amz-Signature=bca9e6a45eb4f3fa01643c5ae387c2792f65442d77c433bab88a4ca0f7d60d29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXISKV2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHljjwmRPWxPBdb8grQaWsvouaRLMfituhRfRLijuk8iAiEAl0Yq75z%2B8JHkFwvv8y26VEJXXNkxPdRV7ao77SU%2FKBMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPasYJFmQBREyX3zkCrcAzcE4JQmOS4NlfgMR0c2ryM0kx%2FmAl1myXCIopuBbr2guhuhHCkS7wbj1UJOkuJb0V9SJFEBuuNjgUwP14hwVEyIntBbZJOO%2BDgzmIvJcPLsWGPAQo6tpvA1hxAGvPgjDP3TbarwzPXzXcHjNQoVEYZkj%2FPAVFElVW002CpmSmSk%2BiCzBrVsubOC%2BsqsdtNITA%2F3wi5Ook33lbpeEcK%2FnBWxMUIR%2B7qrtyqUE%2F82Rv%2BvCXJKD5%2BMcr45hkHYDq7YqyW5tmYP64ZJT2jvJHA6DjV0sxKBjxYFBH2VA6%2FYKOPj%2FFguvMNz08ntOoCXUUSH3VgRoGIAnA928GMw%2FGa1xv7DWYbYIxfYeN16uvONjR9cZqorn0z8SQP4mLFWyeh%2B5glks1ClxEecqC7ENemd0KEutHGqCZLaisiFmxq3xG8z5Q%2Fokm3FgQmRY9xE1774IXwXfKsYUQKUz0Ym2cvM4SSGsoDv1nGhkJ%2BrIDR24JyU1mcBUIS6T6Udx178mBQf6%2Bah3N7cZfx3ru5mjmdgbBLOIdcugj84SU6oqUXw4%2Fy1j%2FTvQ6lH%2B5xWqzZgVuawwpq4EDGvhgJ55DvjjZGOGxFnQ5ekflwRMJTFKA155K4z1XxGZcisXJI7LHVBMMzZvsQGOqUBxI3FXRPmv3rUCAgOsg%2Btn1fC8kxq3uA2WHEAWX4TrUzzbxK20II8hHz3LHpxT3Am%2BPZo%2FkFoWmGYkiZkIJ6rjNAPKorzpFyyoMj6rTinMkCprvbgGPXUtSEB4V8Z1aMhd%2FsWqwxAriPUQmjwNppy6hXkVdoRT4fK5Tg8Z9sqw175h78VNaiL5sbmqKwom%2FZtW44532VTADov9%2B%2FIfG1y770e6voK&X-Amz-Signature=395e97c8276a06167cb2bfd9921dcdbd04b4471403003c5adb17ffcd8d8d2722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXISKV2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHljjwmRPWxPBdb8grQaWsvouaRLMfituhRfRLijuk8iAiEAl0Yq75z%2B8JHkFwvv8y26VEJXXNkxPdRV7ao77SU%2FKBMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPasYJFmQBREyX3zkCrcAzcE4JQmOS4NlfgMR0c2ryM0kx%2FmAl1myXCIopuBbr2guhuhHCkS7wbj1UJOkuJb0V9SJFEBuuNjgUwP14hwVEyIntBbZJOO%2BDgzmIvJcPLsWGPAQo6tpvA1hxAGvPgjDP3TbarwzPXzXcHjNQoVEYZkj%2FPAVFElVW002CpmSmSk%2BiCzBrVsubOC%2BsqsdtNITA%2F3wi5Ook33lbpeEcK%2FnBWxMUIR%2B7qrtyqUE%2F82Rv%2BvCXJKD5%2BMcr45hkHYDq7YqyW5tmYP64ZJT2jvJHA6DjV0sxKBjxYFBH2VA6%2FYKOPj%2FFguvMNz08ntOoCXUUSH3VgRoGIAnA928GMw%2FGa1xv7DWYbYIxfYeN16uvONjR9cZqorn0z8SQP4mLFWyeh%2B5glks1ClxEecqC7ENemd0KEutHGqCZLaisiFmxq3xG8z5Q%2Fokm3FgQmRY9xE1774IXwXfKsYUQKUz0Ym2cvM4SSGsoDv1nGhkJ%2BrIDR24JyU1mcBUIS6T6Udx178mBQf6%2Bah3N7cZfx3ru5mjmdgbBLOIdcugj84SU6oqUXw4%2Fy1j%2FTvQ6lH%2B5xWqzZgVuawwpq4EDGvhgJ55DvjjZGOGxFnQ5ekflwRMJTFKA155K4z1XxGZcisXJI7LHVBMMzZvsQGOqUBxI3FXRPmv3rUCAgOsg%2Btn1fC8kxq3uA2WHEAWX4TrUzzbxK20II8hHz3LHpxT3Am%2BPZo%2FkFoWmGYkiZkIJ6rjNAPKorzpFyyoMj6rTinMkCprvbgGPXUtSEB4V8Z1aMhd%2FsWqwxAriPUQmjwNppy6hXkVdoRT4fK5Tg8Z9sqw175h78VNaiL5sbmqKwom%2FZtW44532VTADov9%2B%2FIfG1y770e6voK&X-Amz-Signature=19a2442fb178d51c788be94f8ad3c559cc06b990ab79db9ca5bc37df36d4773d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGBXQIL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhPMqv2%2FMRwzECUUeoY69l1DA8K36C5zERtcV0uok3JAiEA3OgblHGVzYKRp5T%2F2w0MI2VD3GjLjiixaUC67pbx%2BZQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNCkVFiVDqjnHV4RIircA6ZIivrjNPPqeE0dTeKWZCOuzB9Oe6N%2B6MrePCxeHSCRoKSENGheLukWvXCP2JMEAih%2FMjOT7WC10QN9Gtbf4oBsn5zkYeW20%2Ftdg23KGyzR505C4Jic%2B24061Q0f6n9tkIJVYvPndkfL52dvDrknZBKHvsQrHfLXXbcBG3GTtonh0lUOjnNQJAXL5HywQJKvgix%2FmmN5%2Fc9%2BpcKNADjq6g4pmxLoKzQKu%2FRc9mIBm5B%2FgX2xWfzxQn6U%2BxUJM2jj3ga8C%2B143NEOhUQcAIqtZHq6w9CADSqFX7G8jQTMahJXOLyJX%2BSQofItlHZofRfzWMcmq8r1F82IsnjFjsEqbUm0SmISHpm0q0glfOrRZNt1e0zv3awjCwNrbi%2BwZ9fRL4Pl5u%2FyH5AJHMRS%2FjOYkm5OiaPZPRnk01qZC4W1gd3JgWbVRJN5ntyXPWR59syGcD4p97t9Obalx0j85PBphPCwOFMirUMcoysiwWi3piwbvGVVQKU3AT%2FNQhc9UGOV7L3I6R%2B1huAhDK0g26h4lp2szGXmTxOcVVklqAsfXm3pULwhx1Jr8HrOGqTIoWBtnxcgPhZxKbhaWPchidO5HjBOdpCU%2FY9ydh7W8D7SLnZXNcOMka%2FwrBllWOUMKTZvsQGOqUBcFIhHAdjJnU8KCHQLL2JEAluTEilPzS0zO2z6siVWZDebmpxtG5WUOEvjUrFfAlldjiWFoJwj5R%2B1TvjPEEcaPWt%2FmfLQG0Gt3cQq7QJRe5GmL6x6L8oh%2FGhOXBjW7GLd5P5DZzAVQUzpzA8JneuzG1QqHCpQYtaM0mjnZcsiG6h3B9zEnj6yc3oNgj1h2BwNHyv2Oj5f0vt6THLMraUGxvfrAtS&X-Amz-Signature=12ddc8feb0a35c0e6abd105a9d3f24ac94e9fcadc5e088f18535c1d13239233c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXISKV2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHljjwmRPWxPBdb8grQaWsvouaRLMfituhRfRLijuk8iAiEAl0Yq75z%2B8JHkFwvv8y26VEJXXNkxPdRV7ao77SU%2FKBMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPasYJFmQBREyX3zkCrcAzcE4JQmOS4NlfgMR0c2ryM0kx%2FmAl1myXCIopuBbr2guhuhHCkS7wbj1UJOkuJb0V9SJFEBuuNjgUwP14hwVEyIntBbZJOO%2BDgzmIvJcPLsWGPAQo6tpvA1hxAGvPgjDP3TbarwzPXzXcHjNQoVEYZkj%2FPAVFElVW002CpmSmSk%2BiCzBrVsubOC%2BsqsdtNITA%2F3wi5Ook33lbpeEcK%2FnBWxMUIR%2B7qrtyqUE%2F82Rv%2BvCXJKD5%2BMcr45hkHYDq7YqyW5tmYP64ZJT2jvJHA6DjV0sxKBjxYFBH2VA6%2FYKOPj%2FFguvMNz08ntOoCXUUSH3VgRoGIAnA928GMw%2FGa1xv7DWYbYIxfYeN16uvONjR9cZqorn0z8SQP4mLFWyeh%2B5glks1ClxEecqC7ENemd0KEutHGqCZLaisiFmxq3xG8z5Q%2Fokm3FgQmRY9xE1774IXwXfKsYUQKUz0Ym2cvM4SSGsoDv1nGhkJ%2BrIDR24JyU1mcBUIS6T6Udx178mBQf6%2Bah3N7cZfx3ru5mjmdgbBLOIdcugj84SU6oqUXw4%2Fy1j%2FTvQ6lH%2B5xWqzZgVuawwpq4EDGvhgJ55DvjjZGOGxFnQ5ekflwRMJTFKA155K4z1XxGZcisXJI7LHVBMMzZvsQGOqUBxI3FXRPmv3rUCAgOsg%2Btn1fC8kxq3uA2WHEAWX4TrUzzbxK20II8hHz3LHpxT3Am%2BPZo%2FkFoWmGYkiZkIJ6rjNAPKorzpFyyoMj6rTinMkCprvbgGPXUtSEB4V8Z1aMhd%2FsWqwxAriPUQmjwNppy6hXkVdoRT4fK5Tg8Z9sqw175h78VNaiL5sbmqKwom%2FZtW44532VTADov9%2B%2FIfG1y770e6voK&X-Amz-Signature=edb76720c50c9a8c1dfc33a227655fd2208def7c8b9219a3eea37a51d03734e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXISKV2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHljjwmRPWxPBdb8grQaWsvouaRLMfituhRfRLijuk8iAiEAl0Yq75z%2B8JHkFwvv8y26VEJXXNkxPdRV7ao77SU%2FKBMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPasYJFmQBREyX3zkCrcAzcE4JQmOS4NlfgMR0c2ryM0kx%2FmAl1myXCIopuBbr2guhuhHCkS7wbj1UJOkuJb0V9SJFEBuuNjgUwP14hwVEyIntBbZJOO%2BDgzmIvJcPLsWGPAQo6tpvA1hxAGvPgjDP3TbarwzPXzXcHjNQoVEYZkj%2FPAVFElVW002CpmSmSk%2BiCzBrVsubOC%2BsqsdtNITA%2F3wi5Ook33lbpeEcK%2FnBWxMUIR%2B7qrtyqUE%2F82Rv%2BvCXJKD5%2BMcr45hkHYDq7YqyW5tmYP64ZJT2jvJHA6DjV0sxKBjxYFBH2VA6%2FYKOPj%2FFguvMNz08ntOoCXUUSH3VgRoGIAnA928GMw%2FGa1xv7DWYbYIxfYeN16uvONjR9cZqorn0z8SQP4mLFWyeh%2B5glks1ClxEecqC7ENemd0KEutHGqCZLaisiFmxq3xG8z5Q%2Fokm3FgQmRY9xE1774IXwXfKsYUQKUz0Ym2cvM4SSGsoDv1nGhkJ%2BrIDR24JyU1mcBUIS6T6Udx178mBQf6%2Bah3N7cZfx3ru5mjmdgbBLOIdcugj84SU6oqUXw4%2Fy1j%2FTvQ6lH%2B5xWqzZgVuawwpq4EDGvhgJ55DvjjZGOGxFnQ5ekflwRMJTFKA155K4z1XxGZcisXJI7LHVBMMzZvsQGOqUBxI3FXRPmv3rUCAgOsg%2Btn1fC8kxq3uA2WHEAWX4TrUzzbxK20II8hHz3LHpxT3Am%2BPZo%2FkFoWmGYkiZkIJ6rjNAPKorzpFyyoMj6rTinMkCprvbgGPXUtSEB4V8Z1aMhd%2FsWqwxAriPUQmjwNppy6hXkVdoRT4fK5Tg8Z9sqw175h78VNaiL5sbmqKwom%2FZtW44532VTADov9%2B%2FIfG1y770e6voK&X-Amz-Signature=2cb0d075e066d4659fab3f070eb70f9811b15db00c184c2ae170812d42dc3332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXISKV2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHljjwmRPWxPBdb8grQaWsvouaRLMfituhRfRLijuk8iAiEAl0Yq75z%2B8JHkFwvv8y26VEJXXNkxPdRV7ao77SU%2FKBMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPasYJFmQBREyX3zkCrcAzcE4JQmOS4NlfgMR0c2ryM0kx%2FmAl1myXCIopuBbr2guhuhHCkS7wbj1UJOkuJb0V9SJFEBuuNjgUwP14hwVEyIntBbZJOO%2BDgzmIvJcPLsWGPAQo6tpvA1hxAGvPgjDP3TbarwzPXzXcHjNQoVEYZkj%2FPAVFElVW002CpmSmSk%2BiCzBrVsubOC%2BsqsdtNITA%2F3wi5Ook33lbpeEcK%2FnBWxMUIR%2B7qrtyqUE%2F82Rv%2BvCXJKD5%2BMcr45hkHYDq7YqyW5tmYP64ZJT2jvJHA6DjV0sxKBjxYFBH2VA6%2FYKOPj%2FFguvMNz08ntOoCXUUSH3VgRoGIAnA928GMw%2FGa1xv7DWYbYIxfYeN16uvONjR9cZqorn0z8SQP4mLFWyeh%2B5glks1ClxEecqC7ENemd0KEutHGqCZLaisiFmxq3xG8z5Q%2Fokm3FgQmRY9xE1774IXwXfKsYUQKUz0Ym2cvM4SSGsoDv1nGhkJ%2BrIDR24JyU1mcBUIS6T6Udx178mBQf6%2Bah3N7cZfx3ru5mjmdgbBLOIdcugj84SU6oqUXw4%2Fy1j%2FTvQ6lH%2B5xWqzZgVuawwpq4EDGvhgJ55DvjjZGOGxFnQ5ekflwRMJTFKA155K4z1XxGZcisXJI7LHVBMMzZvsQGOqUBxI3FXRPmv3rUCAgOsg%2Btn1fC8kxq3uA2WHEAWX4TrUzzbxK20II8hHz3LHpxT3Am%2BPZo%2FkFoWmGYkiZkIJ6rjNAPKorzpFyyoMj6rTinMkCprvbgGPXUtSEB4V8Z1aMhd%2FsWqwxAriPUQmjwNppy6hXkVdoRT4fK5Tg8Z9sqw175h78VNaiL5sbmqKwom%2FZtW44532VTADov9%2B%2FIfG1y770e6voK&X-Amz-Signature=5e2c273f24204bcfff7432dad85ee8695bb8fde13d1f4d59e96526ace7634601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXISKV2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHljjwmRPWxPBdb8grQaWsvouaRLMfituhRfRLijuk8iAiEAl0Yq75z%2B8JHkFwvv8y26VEJXXNkxPdRV7ao77SU%2FKBMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPasYJFmQBREyX3zkCrcAzcE4JQmOS4NlfgMR0c2ryM0kx%2FmAl1myXCIopuBbr2guhuhHCkS7wbj1UJOkuJb0V9SJFEBuuNjgUwP14hwVEyIntBbZJOO%2BDgzmIvJcPLsWGPAQo6tpvA1hxAGvPgjDP3TbarwzPXzXcHjNQoVEYZkj%2FPAVFElVW002CpmSmSk%2BiCzBrVsubOC%2BsqsdtNITA%2F3wi5Ook33lbpeEcK%2FnBWxMUIR%2B7qrtyqUE%2F82Rv%2BvCXJKD5%2BMcr45hkHYDq7YqyW5tmYP64ZJT2jvJHA6DjV0sxKBjxYFBH2VA6%2FYKOPj%2FFguvMNz08ntOoCXUUSH3VgRoGIAnA928GMw%2FGa1xv7DWYbYIxfYeN16uvONjR9cZqorn0z8SQP4mLFWyeh%2B5glks1ClxEecqC7ENemd0KEutHGqCZLaisiFmxq3xG8z5Q%2Fokm3FgQmRY9xE1774IXwXfKsYUQKUz0Ym2cvM4SSGsoDv1nGhkJ%2BrIDR24JyU1mcBUIS6T6Udx178mBQf6%2Bah3N7cZfx3ru5mjmdgbBLOIdcugj84SU6oqUXw4%2Fy1j%2FTvQ6lH%2B5xWqzZgVuawwpq4EDGvhgJ55DvjjZGOGxFnQ5ekflwRMJTFKA155K4z1XxGZcisXJI7LHVBMMzZvsQGOqUBxI3FXRPmv3rUCAgOsg%2Btn1fC8kxq3uA2WHEAWX4TrUzzbxK20II8hHz3LHpxT3Am%2BPZo%2FkFoWmGYkiZkIJ6rjNAPKorzpFyyoMj6rTinMkCprvbgGPXUtSEB4V8Z1aMhd%2FsWqwxAriPUQmjwNppy6hXkVdoRT4fK5Tg8Z9sqw175h78VNaiL5sbmqKwom%2FZtW44532VTADov9%2B%2FIfG1y770e6voK&X-Amz-Signature=687c2dcc668a7c6ec0428b5ab92c3f08875316938c230d8dc3920cfd9762eb20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXISKV2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHljjwmRPWxPBdb8grQaWsvouaRLMfituhRfRLijuk8iAiEAl0Yq75z%2B8JHkFwvv8y26VEJXXNkxPdRV7ao77SU%2FKBMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPasYJFmQBREyX3zkCrcAzcE4JQmOS4NlfgMR0c2ryM0kx%2FmAl1myXCIopuBbr2guhuhHCkS7wbj1UJOkuJb0V9SJFEBuuNjgUwP14hwVEyIntBbZJOO%2BDgzmIvJcPLsWGPAQo6tpvA1hxAGvPgjDP3TbarwzPXzXcHjNQoVEYZkj%2FPAVFElVW002CpmSmSk%2BiCzBrVsubOC%2BsqsdtNITA%2F3wi5Ook33lbpeEcK%2FnBWxMUIR%2B7qrtyqUE%2F82Rv%2BvCXJKD5%2BMcr45hkHYDq7YqyW5tmYP64ZJT2jvJHA6DjV0sxKBjxYFBH2VA6%2FYKOPj%2FFguvMNz08ntOoCXUUSH3VgRoGIAnA928GMw%2FGa1xv7DWYbYIxfYeN16uvONjR9cZqorn0z8SQP4mLFWyeh%2B5glks1ClxEecqC7ENemd0KEutHGqCZLaisiFmxq3xG8z5Q%2Fokm3FgQmRY9xE1774IXwXfKsYUQKUz0Ym2cvM4SSGsoDv1nGhkJ%2BrIDR24JyU1mcBUIS6T6Udx178mBQf6%2Bah3N7cZfx3ru5mjmdgbBLOIdcugj84SU6oqUXw4%2Fy1j%2FTvQ6lH%2B5xWqzZgVuawwpq4EDGvhgJ55DvjjZGOGxFnQ5ekflwRMJTFKA155K4z1XxGZcisXJI7LHVBMMzZvsQGOqUBxI3FXRPmv3rUCAgOsg%2Btn1fC8kxq3uA2WHEAWX4TrUzzbxK20II8hHz3LHpxT3Am%2BPZo%2FkFoWmGYkiZkIJ6rjNAPKorzpFyyoMj6rTinMkCprvbgGPXUtSEB4V8Z1aMhd%2FsWqwxAriPUQmjwNppy6hXkVdoRT4fK5Tg8Z9sqw175h78VNaiL5sbmqKwom%2FZtW44532VTADov9%2B%2FIfG1y770e6voK&X-Amz-Signature=96eb969ac3d065be8ac24afbb11852af661e24b907f2d61019a36f4950e4d88a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXISKV2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHljjwmRPWxPBdb8grQaWsvouaRLMfituhRfRLijuk8iAiEAl0Yq75z%2B8JHkFwvv8y26VEJXXNkxPdRV7ao77SU%2FKBMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPasYJFmQBREyX3zkCrcAzcE4JQmOS4NlfgMR0c2ryM0kx%2FmAl1myXCIopuBbr2guhuhHCkS7wbj1UJOkuJb0V9SJFEBuuNjgUwP14hwVEyIntBbZJOO%2BDgzmIvJcPLsWGPAQo6tpvA1hxAGvPgjDP3TbarwzPXzXcHjNQoVEYZkj%2FPAVFElVW002CpmSmSk%2BiCzBrVsubOC%2BsqsdtNITA%2F3wi5Ook33lbpeEcK%2FnBWxMUIR%2B7qrtyqUE%2F82Rv%2BvCXJKD5%2BMcr45hkHYDq7YqyW5tmYP64ZJT2jvJHA6DjV0sxKBjxYFBH2VA6%2FYKOPj%2FFguvMNz08ntOoCXUUSH3VgRoGIAnA928GMw%2FGa1xv7DWYbYIxfYeN16uvONjR9cZqorn0z8SQP4mLFWyeh%2B5glks1ClxEecqC7ENemd0KEutHGqCZLaisiFmxq3xG8z5Q%2Fokm3FgQmRY9xE1774IXwXfKsYUQKUz0Ym2cvM4SSGsoDv1nGhkJ%2BrIDR24JyU1mcBUIS6T6Udx178mBQf6%2Bah3N7cZfx3ru5mjmdgbBLOIdcugj84SU6oqUXw4%2Fy1j%2FTvQ6lH%2B5xWqzZgVuawwpq4EDGvhgJ55DvjjZGOGxFnQ5ekflwRMJTFKA155K4z1XxGZcisXJI7LHVBMMzZvsQGOqUBxI3FXRPmv3rUCAgOsg%2Btn1fC8kxq3uA2WHEAWX4TrUzzbxK20II8hHz3LHpxT3Am%2BPZo%2FkFoWmGYkiZkIJ6rjNAPKorzpFyyoMj6rTinMkCprvbgGPXUtSEB4V8Z1aMhd%2FsWqwxAriPUQmjwNppy6hXkVdoRT4fK5Tg8Z9sqw175h78VNaiL5sbmqKwom%2FZtW44532VTADov9%2B%2FIfG1y770e6voK&X-Amz-Signature=c5c0f2824900afaffe7a12dedf8ee28e36d4cbee3d375e8a20b9d569418fe1fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
