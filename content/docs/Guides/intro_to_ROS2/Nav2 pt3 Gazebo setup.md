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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AI5GKDI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCQ6xqjVmZ2v1iqKGdelJP%2FDlHkFmUdfsNKxLBnJYa3sQIgYSFf4KxyhJdq5Xd5J9wPAAh97aqHt4nIvY1w9NoYSHMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxBnGvcVAjDxqzNIircA6V93077UOOHiP%2F5nWjiC8zmmfbL7JBeptIyXkSlZ8y3WKDCl9YyEBXGmxzTPfmVN4wNvtyGuja5kh%2BzS7UIEn4NeZGpAryG2RwhQJklgvi9ubsT%2BFPHoK3BDTb3Xm4csHPsA%2FsHq%2FWJ1OO5qSJHBwtCEE2YjqxOvTBfJsWGzgeR2TinjmgK8M7aUIrbVcpJemnBdZ4%2FZOb1XJtRNhTBA5W0d0wm5ZaAtR6zhejWfRIFse8bH%2Bmw0Ik1TN6Z7m6DAywWaFCBO%2F%2BFOVSzX789AFTuBFAHIAVpT%2BCDEjpJYnR7PPZbvgXMzeWBE5DjGTzQe4hV5OHJWMQp2ZS0ntumcAcWDiQS4rT4TsLhDvpReH98CijrH1TDf5Vtd5543NT%2BkT%2FNcXpz%2BsYFPqnRSzp63It3XJwKVVX3mLNS0thAv8zcC%2B66DEEY3e5Xir2a%2ByaCmLJuuU%2FSmp0CTST8S%2FaQ88UY5a8cUeOiKKP72y%2ByCpmoBvEXv1CNiClh1iVqtCkW1Glf86IXiMEQh0Lm7QBEcTLt09Df%2B6VfoBka6KQWg6aeqOvB60sHjn3TwoyA71hK%2BciIVZ7Peckiy%2BLfmXvOVyN4TAsLda2YTE4DyL%2FYYewxmvI0bzWAWyWXfL6tMM6i08QGOqUBhcw3U9rXfqkXOa1guS%2F%2FidnyakOECHH0%2Fr90Ts3dbq7Q%2F1RUhuWCNvIqhWC4N33CiMaP61%2B9wVMxkJzI9osztZ6R0LXFt3i2ilu01LlAaZWdIs2wvmODRdli90%2BRJDqvR38Pptudr4UBrYI8UMU06jvUWgRSuRHgvqsRUCFZRF39pPFA%2FeF%2Fh4kNal5KKsBRy6XQHjgVhI4%2Ftu5J2LaRwfuaXLFF&X-Amz-Signature=d7585e2d2950ec73d6393d494ea0216626ebdebe366628c8e6cb61df66c20029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AI5GKDI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCQ6xqjVmZ2v1iqKGdelJP%2FDlHkFmUdfsNKxLBnJYa3sQIgYSFf4KxyhJdq5Xd5J9wPAAh97aqHt4nIvY1w9NoYSHMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxBnGvcVAjDxqzNIircA6V93077UOOHiP%2F5nWjiC8zmmfbL7JBeptIyXkSlZ8y3WKDCl9YyEBXGmxzTPfmVN4wNvtyGuja5kh%2BzS7UIEn4NeZGpAryG2RwhQJklgvi9ubsT%2BFPHoK3BDTb3Xm4csHPsA%2FsHq%2FWJ1OO5qSJHBwtCEE2YjqxOvTBfJsWGzgeR2TinjmgK8M7aUIrbVcpJemnBdZ4%2FZOb1XJtRNhTBA5W0d0wm5ZaAtR6zhejWfRIFse8bH%2Bmw0Ik1TN6Z7m6DAywWaFCBO%2F%2BFOVSzX789AFTuBFAHIAVpT%2BCDEjpJYnR7PPZbvgXMzeWBE5DjGTzQe4hV5OHJWMQp2ZS0ntumcAcWDiQS4rT4TsLhDvpReH98CijrH1TDf5Vtd5543NT%2BkT%2FNcXpz%2BsYFPqnRSzp63It3XJwKVVX3mLNS0thAv8zcC%2B66DEEY3e5Xir2a%2ByaCmLJuuU%2FSmp0CTST8S%2FaQ88UY5a8cUeOiKKP72y%2ByCpmoBvEXv1CNiClh1iVqtCkW1Glf86IXiMEQh0Lm7QBEcTLt09Df%2B6VfoBka6KQWg6aeqOvB60sHjn3TwoyA71hK%2BciIVZ7Peckiy%2BLfmXvOVyN4TAsLda2YTE4DyL%2FYYewxmvI0bzWAWyWXfL6tMM6i08QGOqUBhcw3U9rXfqkXOa1guS%2F%2FidnyakOECHH0%2Fr90Ts3dbq7Q%2F1RUhuWCNvIqhWC4N33CiMaP61%2B9wVMxkJzI9osztZ6R0LXFt3i2ilu01LlAaZWdIs2wvmODRdli90%2BRJDqvR38Pptudr4UBrYI8UMU06jvUWgRSuRHgvqsRUCFZRF39pPFA%2FeF%2Fh4kNal5KKsBRy6XQHjgVhI4%2Ftu5J2LaRwfuaXLFF&X-Amz-Signature=0d0b47cb841d8eb3441a595f1be85f764bc25bd402bee65f3ae329a37bd6cca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AI5GKDI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCQ6xqjVmZ2v1iqKGdelJP%2FDlHkFmUdfsNKxLBnJYa3sQIgYSFf4KxyhJdq5Xd5J9wPAAh97aqHt4nIvY1w9NoYSHMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxBnGvcVAjDxqzNIircA6V93077UOOHiP%2F5nWjiC8zmmfbL7JBeptIyXkSlZ8y3WKDCl9YyEBXGmxzTPfmVN4wNvtyGuja5kh%2BzS7UIEn4NeZGpAryG2RwhQJklgvi9ubsT%2BFPHoK3BDTb3Xm4csHPsA%2FsHq%2FWJ1OO5qSJHBwtCEE2YjqxOvTBfJsWGzgeR2TinjmgK8M7aUIrbVcpJemnBdZ4%2FZOb1XJtRNhTBA5W0d0wm5ZaAtR6zhejWfRIFse8bH%2Bmw0Ik1TN6Z7m6DAywWaFCBO%2F%2BFOVSzX789AFTuBFAHIAVpT%2BCDEjpJYnR7PPZbvgXMzeWBE5DjGTzQe4hV5OHJWMQp2ZS0ntumcAcWDiQS4rT4TsLhDvpReH98CijrH1TDf5Vtd5543NT%2BkT%2FNcXpz%2BsYFPqnRSzp63It3XJwKVVX3mLNS0thAv8zcC%2B66DEEY3e5Xir2a%2ByaCmLJuuU%2FSmp0CTST8S%2FaQ88UY5a8cUeOiKKP72y%2ByCpmoBvEXv1CNiClh1iVqtCkW1Glf86IXiMEQh0Lm7QBEcTLt09Df%2B6VfoBka6KQWg6aeqOvB60sHjn3TwoyA71hK%2BciIVZ7Peckiy%2BLfmXvOVyN4TAsLda2YTE4DyL%2FYYewxmvI0bzWAWyWXfL6tMM6i08QGOqUBhcw3U9rXfqkXOa1guS%2F%2FidnyakOECHH0%2Fr90Ts3dbq7Q%2F1RUhuWCNvIqhWC4N33CiMaP61%2B9wVMxkJzI9osztZ6R0LXFt3i2ilu01LlAaZWdIs2wvmODRdli90%2BRJDqvR38Pptudr4UBrYI8UMU06jvUWgRSuRHgvqsRUCFZRF39pPFA%2FeF%2Fh4kNal5KKsBRy6XQHjgVhI4%2Ftu5J2LaRwfuaXLFF&X-Amz-Signature=96f79276fe12eac0cf56eaf200d088965f3092070e125f842261faeba9cc018e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AI5GKDI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCQ6xqjVmZ2v1iqKGdelJP%2FDlHkFmUdfsNKxLBnJYa3sQIgYSFf4KxyhJdq5Xd5J9wPAAh97aqHt4nIvY1w9NoYSHMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxBnGvcVAjDxqzNIircA6V93077UOOHiP%2F5nWjiC8zmmfbL7JBeptIyXkSlZ8y3WKDCl9YyEBXGmxzTPfmVN4wNvtyGuja5kh%2BzS7UIEn4NeZGpAryG2RwhQJklgvi9ubsT%2BFPHoK3BDTb3Xm4csHPsA%2FsHq%2FWJ1OO5qSJHBwtCEE2YjqxOvTBfJsWGzgeR2TinjmgK8M7aUIrbVcpJemnBdZ4%2FZOb1XJtRNhTBA5W0d0wm5ZaAtR6zhejWfRIFse8bH%2Bmw0Ik1TN6Z7m6DAywWaFCBO%2F%2BFOVSzX789AFTuBFAHIAVpT%2BCDEjpJYnR7PPZbvgXMzeWBE5DjGTzQe4hV5OHJWMQp2ZS0ntumcAcWDiQS4rT4TsLhDvpReH98CijrH1TDf5Vtd5543NT%2BkT%2FNcXpz%2BsYFPqnRSzp63It3XJwKVVX3mLNS0thAv8zcC%2B66DEEY3e5Xir2a%2ByaCmLJuuU%2FSmp0CTST8S%2FaQ88UY5a8cUeOiKKP72y%2ByCpmoBvEXv1CNiClh1iVqtCkW1Glf86IXiMEQh0Lm7QBEcTLt09Df%2B6VfoBka6KQWg6aeqOvB60sHjn3TwoyA71hK%2BciIVZ7Peckiy%2BLfmXvOVyN4TAsLda2YTE4DyL%2FYYewxmvI0bzWAWyWXfL6tMM6i08QGOqUBhcw3U9rXfqkXOa1guS%2F%2FidnyakOECHH0%2Fr90Ts3dbq7Q%2F1RUhuWCNvIqhWC4N33CiMaP61%2B9wVMxkJzI9osztZ6R0LXFt3i2ilu01LlAaZWdIs2wvmODRdli90%2BRJDqvR38Pptudr4UBrYI8UMU06jvUWgRSuRHgvqsRUCFZRF39pPFA%2FeF%2Fh4kNal5KKsBRy6XQHjgVhI4%2Ftu5J2LaRwfuaXLFF&X-Amz-Signature=7d9bef32809513e686d6e744c296397dee4afcf6b98797db4af6da051b80bcb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IWR5N6Y%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCaLAClaB3DB%2Fn88Ad3lFe2KxX%2F01S6DSqAMLQZn9Lf9gIgc%2B%2ByoGNa7upqur0tDoKRadsAJymInvJRjMmBOZA2SZYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdQQExP02coRiQhBSrcAzIpuMFG5e0yr%2Fcrx6XYKm6e61dstBi4gkIAkJt6RY6O10HxKnGxpBtaYK5CIVi5rmrPB7lVvQh7w6IbopV%2BU9xBGa2zNLRNIrj54m6JwUxeYZUDzVH%2FL3Il%2Ba%2BqpBiNZVXg7vyMV8RYa9AzgtEuqQ0vhkBwN3o8dpbhq5rCcdNF0Oif8Inj%2FxyUczJ6jDI6Eikc3mqCYV%2FUmfvF68ITmI4OxsnBHInzhCVVUfQeDSmXDicPBaZBhKE4oRzpEAtG87yRKYNLAEXfiqdXit5xp7hOUeoYMFIRFNujNApGbbFhxgUuFgixzYQUw%2F9rNUMQ%2FrqZXV5D%2Fun185lmGPtpY7f677C1cyGA0yGdUysA6tHbAvXJ%2Fwf5N%2BnabAEcWfSpZ6h08rpRj3BTfiATih904OL4tpd5dC1iNJxNPEPN6OX%2FAubh2NLCiaw6dnOKXMBqKQGQSY5yNKeXHoEPvizN7UI%2FVohiug9z%2Bn%2BIXZj8G4bXmza%2FYKLzr4yVJM%2FFMddntfrizRiofPly9%2FxHwYBk4fD29gFbHz0C9rx9S8Hw2C9zhtxDIpjghwZ4LAiQru%2Bi9SoZK2XMt8GyWN2iRo44xVItrpXqA%2BQxWJ%2Fcwjc9rIVr153lgdpzLbycsTxYMPGh08QGOqUBPH8qHL2xCg5OddY0H8zgn%2BrUHtw%2BwUjL1MJXBLXhJ3pFY9jKURpnv1IoyA%2Bt%2B5%2F3kFWeS5fdbjqnoLYFojPKMHOCFNy%2FcWFBI9k5d0P5VdfvXNpcx3ckXO3%2BV1cjwyIfUEKEX6i%2B8rMRqzXeqjYqjRHU8oYTAYqFTYmBOWhLxapx1gsxnt8zNN3sBddtFQZvk%2FxzTBb2QoBFhq5cmwBG1W8lzv8s&X-Amz-Signature=2c3769a89196eb3f3da2ed88e2c574d3d87fecbc9f055639f6c633448829b736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AI5GKDI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCQ6xqjVmZ2v1iqKGdelJP%2FDlHkFmUdfsNKxLBnJYa3sQIgYSFf4KxyhJdq5Xd5J9wPAAh97aqHt4nIvY1w9NoYSHMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxBnGvcVAjDxqzNIircA6V93077UOOHiP%2F5nWjiC8zmmfbL7JBeptIyXkSlZ8y3WKDCl9YyEBXGmxzTPfmVN4wNvtyGuja5kh%2BzS7UIEn4NeZGpAryG2RwhQJklgvi9ubsT%2BFPHoK3BDTb3Xm4csHPsA%2FsHq%2FWJ1OO5qSJHBwtCEE2YjqxOvTBfJsWGzgeR2TinjmgK8M7aUIrbVcpJemnBdZ4%2FZOb1XJtRNhTBA5W0d0wm5ZaAtR6zhejWfRIFse8bH%2Bmw0Ik1TN6Z7m6DAywWaFCBO%2F%2BFOVSzX789AFTuBFAHIAVpT%2BCDEjpJYnR7PPZbvgXMzeWBE5DjGTzQe4hV5OHJWMQp2ZS0ntumcAcWDiQS4rT4TsLhDvpReH98CijrH1TDf5Vtd5543NT%2BkT%2FNcXpz%2BsYFPqnRSzp63It3XJwKVVX3mLNS0thAv8zcC%2B66DEEY3e5Xir2a%2ByaCmLJuuU%2FSmp0CTST8S%2FaQ88UY5a8cUeOiKKP72y%2ByCpmoBvEXv1CNiClh1iVqtCkW1Glf86IXiMEQh0Lm7QBEcTLt09Df%2B6VfoBka6KQWg6aeqOvB60sHjn3TwoyA71hK%2BciIVZ7Peckiy%2BLfmXvOVyN4TAsLda2YTE4DyL%2FYYewxmvI0bzWAWyWXfL6tMM6i08QGOqUBhcw3U9rXfqkXOa1guS%2F%2FidnyakOECHH0%2Fr90Ts3dbq7Q%2F1RUhuWCNvIqhWC4N33CiMaP61%2B9wVMxkJzI9osztZ6R0LXFt3i2ilu01LlAaZWdIs2wvmODRdli90%2BRJDqvR38Pptudr4UBrYI8UMU06jvUWgRSuRHgvqsRUCFZRF39pPFA%2FeF%2Fh4kNal5KKsBRy6XQHjgVhI4%2Ftu5J2LaRwfuaXLFF&X-Amz-Signature=61aa7511be774356918b68d31608736b63d1555582f4e22ecd7f2c147cb4712e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AI5GKDI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCQ6xqjVmZ2v1iqKGdelJP%2FDlHkFmUdfsNKxLBnJYa3sQIgYSFf4KxyhJdq5Xd5J9wPAAh97aqHt4nIvY1w9NoYSHMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxBnGvcVAjDxqzNIircA6V93077UOOHiP%2F5nWjiC8zmmfbL7JBeptIyXkSlZ8y3WKDCl9YyEBXGmxzTPfmVN4wNvtyGuja5kh%2BzS7UIEn4NeZGpAryG2RwhQJklgvi9ubsT%2BFPHoK3BDTb3Xm4csHPsA%2FsHq%2FWJ1OO5qSJHBwtCEE2YjqxOvTBfJsWGzgeR2TinjmgK8M7aUIrbVcpJemnBdZ4%2FZOb1XJtRNhTBA5W0d0wm5ZaAtR6zhejWfRIFse8bH%2Bmw0Ik1TN6Z7m6DAywWaFCBO%2F%2BFOVSzX789AFTuBFAHIAVpT%2BCDEjpJYnR7PPZbvgXMzeWBE5DjGTzQe4hV5OHJWMQp2ZS0ntumcAcWDiQS4rT4TsLhDvpReH98CijrH1TDf5Vtd5543NT%2BkT%2FNcXpz%2BsYFPqnRSzp63It3XJwKVVX3mLNS0thAv8zcC%2B66DEEY3e5Xir2a%2ByaCmLJuuU%2FSmp0CTST8S%2FaQ88UY5a8cUeOiKKP72y%2ByCpmoBvEXv1CNiClh1iVqtCkW1Glf86IXiMEQh0Lm7QBEcTLt09Df%2B6VfoBka6KQWg6aeqOvB60sHjn3TwoyA71hK%2BciIVZ7Peckiy%2BLfmXvOVyN4TAsLda2YTE4DyL%2FYYewxmvI0bzWAWyWXfL6tMM6i08QGOqUBhcw3U9rXfqkXOa1guS%2F%2FidnyakOECHH0%2Fr90Ts3dbq7Q%2F1RUhuWCNvIqhWC4N33CiMaP61%2B9wVMxkJzI9osztZ6R0LXFt3i2ilu01LlAaZWdIs2wvmODRdli90%2BRJDqvR38Pptudr4UBrYI8UMU06jvUWgRSuRHgvqsRUCFZRF39pPFA%2FeF%2Fh4kNal5KKsBRy6XQHjgVhI4%2Ftu5J2LaRwfuaXLFF&X-Amz-Signature=b82c8e036f389d75887d5c0b33c006597f264682533c64e9226d2fcbd576c1bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AI5GKDI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCQ6xqjVmZ2v1iqKGdelJP%2FDlHkFmUdfsNKxLBnJYa3sQIgYSFf4KxyhJdq5Xd5J9wPAAh97aqHt4nIvY1w9NoYSHMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxBnGvcVAjDxqzNIircA6V93077UOOHiP%2F5nWjiC8zmmfbL7JBeptIyXkSlZ8y3WKDCl9YyEBXGmxzTPfmVN4wNvtyGuja5kh%2BzS7UIEn4NeZGpAryG2RwhQJklgvi9ubsT%2BFPHoK3BDTb3Xm4csHPsA%2FsHq%2FWJ1OO5qSJHBwtCEE2YjqxOvTBfJsWGzgeR2TinjmgK8M7aUIrbVcpJemnBdZ4%2FZOb1XJtRNhTBA5W0d0wm5ZaAtR6zhejWfRIFse8bH%2Bmw0Ik1TN6Z7m6DAywWaFCBO%2F%2BFOVSzX789AFTuBFAHIAVpT%2BCDEjpJYnR7PPZbvgXMzeWBE5DjGTzQe4hV5OHJWMQp2ZS0ntumcAcWDiQS4rT4TsLhDvpReH98CijrH1TDf5Vtd5543NT%2BkT%2FNcXpz%2BsYFPqnRSzp63It3XJwKVVX3mLNS0thAv8zcC%2B66DEEY3e5Xir2a%2ByaCmLJuuU%2FSmp0CTST8S%2FaQ88UY5a8cUeOiKKP72y%2ByCpmoBvEXv1CNiClh1iVqtCkW1Glf86IXiMEQh0Lm7QBEcTLt09Df%2B6VfoBka6KQWg6aeqOvB60sHjn3TwoyA71hK%2BciIVZ7Peckiy%2BLfmXvOVyN4TAsLda2YTE4DyL%2FYYewxmvI0bzWAWyWXfL6tMM6i08QGOqUBhcw3U9rXfqkXOa1guS%2F%2FidnyakOECHH0%2Fr90Ts3dbq7Q%2F1RUhuWCNvIqhWC4N33CiMaP61%2B9wVMxkJzI9osztZ6R0LXFt3i2ilu01LlAaZWdIs2wvmODRdli90%2BRJDqvR38Pptudr4UBrYI8UMU06jvUWgRSuRHgvqsRUCFZRF39pPFA%2FeF%2Fh4kNal5KKsBRy6XQHjgVhI4%2Ftu5J2LaRwfuaXLFF&X-Amz-Signature=11294abdf952ddee6e24c3aa5acf880f080761c08c7fc803430f8ccf799ea095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AI5GKDI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCQ6xqjVmZ2v1iqKGdelJP%2FDlHkFmUdfsNKxLBnJYa3sQIgYSFf4KxyhJdq5Xd5J9wPAAh97aqHt4nIvY1w9NoYSHMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxBnGvcVAjDxqzNIircA6V93077UOOHiP%2F5nWjiC8zmmfbL7JBeptIyXkSlZ8y3WKDCl9YyEBXGmxzTPfmVN4wNvtyGuja5kh%2BzS7UIEn4NeZGpAryG2RwhQJklgvi9ubsT%2BFPHoK3BDTb3Xm4csHPsA%2FsHq%2FWJ1OO5qSJHBwtCEE2YjqxOvTBfJsWGzgeR2TinjmgK8M7aUIrbVcpJemnBdZ4%2FZOb1XJtRNhTBA5W0d0wm5ZaAtR6zhejWfRIFse8bH%2Bmw0Ik1TN6Z7m6DAywWaFCBO%2F%2BFOVSzX789AFTuBFAHIAVpT%2BCDEjpJYnR7PPZbvgXMzeWBE5DjGTzQe4hV5OHJWMQp2ZS0ntumcAcWDiQS4rT4TsLhDvpReH98CijrH1TDf5Vtd5543NT%2BkT%2FNcXpz%2BsYFPqnRSzp63It3XJwKVVX3mLNS0thAv8zcC%2B66DEEY3e5Xir2a%2ByaCmLJuuU%2FSmp0CTST8S%2FaQ88UY5a8cUeOiKKP72y%2ByCpmoBvEXv1CNiClh1iVqtCkW1Glf86IXiMEQh0Lm7QBEcTLt09Df%2B6VfoBka6KQWg6aeqOvB60sHjn3TwoyA71hK%2BciIVZ7Peckiy%2BLfmXvOVyN4TAsLda2YTE4DyL%2FYYewxmvI0bzWAWyWXfL6tMM6i08QGOqUBhcw3U9rXfqkXOa1guS%2F%2FidnyakOECHH0%2Fr90Ts3dbq7Q%2F1RUhuWCNvIqhWC4N33CiMaP61%2B9wVMxkJzI9osztZ6R0LXFt3i2ilu01LlAaZWdIs2wvmODRdli90%2BRJDqvR38Pptudr4UBrYI8UMU06jvUWgRSuRHgvqsRUCFZRF39pPFA%2FeF%2Fh4kNal5KKsBRy6XQHjgVhI4%2Ftu5J2LaRwfuaXLFF&X-Amz-Signature=77ad8afff456d9be1a4f89037429e67b42ec677cee91bacf643846eb01de6970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AI5GKDI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCQ6xqjVmZ2v1iqKGdelJP%2FDlHkFmUdfsNKxLBnJYa3sQIgYSFf4KxyhJdq5Xd5J9wPAAh97aqHt4nIvY1w9NoYSHMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxBnGvcVAjDxqzNIircA6V93077UOOHiP%2F5nWjiC8zmmfbL7JBeptIyXkSlZ8y3WKDCl9YyEBXGmxzTPfmVN4wNvtyGuja5kh%2BzS7UIEn4NeZGpAryG2RwhQJklgvi9ubsT%2BFPHoK3BDTb3Xm4csHPsA%2FsHq%2FWJ1OO5qSJHBwtCEE2YjqxOvTBfJsWGzgeR2TinjmgK8M7aUIrbVcpJemnBdZ4%2FZOb1XJtRNhTBA5W0d0wm5ZaAtR6zhejWfRIFse8bH%2Bmw0Ik1TN6Z7m6DAywWaFCBO%2F%2BFOVSzX789AFTuBFAHIAVpT%2BCDEjpJYnR7PPZbvgXMzeWBE5DjGTzQe4hV5OHJWMQp2ZS0ntumcAcWDiQS4rT4TsLhDvpReH98CijrH1TDf5Vtd5543NT%2BkT%2FNcXpz%2BsYFPqnRSzp63It3XJwKVVX3mLNS0thAv8zcC%2B66DEEY3e5Xir2a%2ByaCmLJuuU%2FSmp0CTST8S%2FaQ88UY5a8cUeOiKKP72y%2ByCpmoBvEXv1CNiClh1iVqtCkW1Glf86IXiMEQh0Lm7QBEcTLt09Df%2B6VfoBka6KQWg6aeqOvB60sHjn3TwoyA71hK%2BciIVZ7Peckiy%2BLfmXvOVyN4TAsLda2YTE4DyL%2FYYewxmvI0bzWAWyWXfL6tMM6i08QGOqUBhcw3U9rXfqkXOa1guS%2F%2FidnyakOECHH0%2Fr90Ts3dbq7Q%2F1RUhuWCNvIqhWC4N33CiMaP61%2B9wVMxkJzI9osztZ6R0LXFt3i2ilu01LlAaZWdIs2wvmODRdli90%2BRJDqvR38Pptudr4UBrYI8UMU06jvUWgRSuRHgvqsRUCFZRF39pPFA%2FeF%2Fh4kNal5KKsBRy6XQHjgVhI4%2Ftu5J2LaRwfuaXLFF&X-Amz-Signature=639b18ad6ca0583d3ab02145c17f19481b24a11304f0f256a46de2676ea2230d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AI5GKDI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCQ6xqjVmZ2v1iqKGdelJP%2FDlHkFmUdfsNKxLBnJYa3sQIgYSFf4KxyhJdq5Xd5J9wPAAh97aqHt4nIvY1w9NoYSHMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxBnGvcVAjDxqzNIircA6V93077UOOHiP%2F5nWjiC8zmmfbL7JBeptIyXkSlZ8y3WKDCl9YyEBXGmxzTPfmVN4wNvtyGuja5kh%2BzS7UIEn4NeZGpAryG2RwhQJklgvi9ubsT%2BFPHoK3BDTb3Xm4csHPsA%2FsHq%2FWJ1OO5qSJHBwtCEE2YjqxOvTBfJsWGzgeR2TinjmgK8M7aUIrbVcpJemnBdZ4%2FZOb1XJtRNhTBA5W0d0wm5ZaAtR6zhejWfRIFse8bH%2Bmw0Ik1TN6Z7m6DAywWaFCBO%2F%2BFOVSzX789AFTuBFAHIAVpT%2BCDEjpJYnR7PPZbvgXMzeWBE5DjGTzQe4hV5OHJWMQp2ZS0ntumcAcWDiQS4rT4TsLhDvpReH98CijrH1TDf5Vtd5543NT%2BkT%2FNcXpz%2BsYFPqnRSzp63It3XJwKVVX3mLNS0thAv8zcC%2B66DEEY3e5Xir2a%2ByaCmLJuuU%2FSmp0CTST8S%2FaQ88UY5a8cUeOiKKP72y%2ByCpmoBvEXv1CNiClh1iVqtCkW1Glf86IXiMEQh0Lm7QBEcTLt09Df%2B6VfoBka6KQWg6aeqOvB60sHjn3TwoyA71hK%2BciIVZ7Peckiy%2BLfmXvOVyN4TAsLda2YTE4DyL%2FYYewxmvI0bzWAWyWXfL6tMM6i08QGOqUBhcw3U9rXfqkXOa1guS%2F%2FidnyakOECHH0%2Fr90Ts3dbq7Q%2F1RUhuWCNvIqhWC4N33CiMaP61%2B9wVMxkJzI9osztZ6R0LXFt3i2ilu01LlAaZWdIs2wvmODRdli90%2BRJDqvR38Pptudr4UBrYI8UMU06jvUWgRSuRHgvqsRUCFZRF39pPFA%2FeF%2Fh4kNal5KKsBRy6XQHjgVhI4%2Ftu5J2LaRwfuaXLFF&X-Amz-Signature=9611e28150a029aebcd5b6f85ef2527462f6cb25f227aacbe665ff7fe6c930d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
