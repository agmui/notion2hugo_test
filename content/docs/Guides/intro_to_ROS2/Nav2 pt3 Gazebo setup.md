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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ52NIKA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzmXbvYN7Ud9GEMXjQxH07bE2508XOuPDS%2FwkSIxr1yAIgV%2BssKcdvw9z8%2BKA21VfIbpgct2iGE%2BS2PSPXqUCGbJIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAGpwg9aEHK0uEms3CrcAwRfH4rwhxVavWb9NDLICj1Q85iNf1eag65hXqOCRQ2NXhNKEVsUH91pqWOMHQssmxmICBXfD66TljF8AuK2Ak1sjLQ1Bq1BxfTz4l%2BvjjHq6MMGrDBc4OxlWgctqfGTNEXCwfVDt%2Fc7pqJhlLrX7x4%2FS3Mw98Tq1KHpdy3e%2FanIKkFDv3Zrgm1KwaDK2WL2NaC35mPK9TaOadO2IqQQ1XrhhCStbVnskkADOMRH1%2FyQ2TPCEhH96hoBbdv%2FWktdomTLs%2BbURi%2BKZ4REpC%2BldB%2Fk5MRqstQfLA1%2FGMpfWhEW3Gvt0MaJGn7fbmFO0w26eOGnAtUKugEIO5rbUvl9bXR5NhDZ3p8qj5CaNU%2FeOgkNl1isYgWpXqmrgnQFa4%2FLnmk6Oroj8H3WaL%2Fy9sqXvVFQyrjBFBn%2BtTOlFLCG9w3zaLdyDiTD3UzDkT9g6HJiUENxOdQy3Htbh8Kww6l2HWQYzPxLTKzHHSLmt6z6X7x5q0Ye5LGClxJeorja8zQeAUEgfXR6WXEapTb1G0TnV86BlyQlHEvrxCJlEULNolBbPikdqabHbPWhRFUIgmUsoGoAacIpcxRm24jluBuaCcPHW%2FvhbxFR7tZRbbMuddz42hu3wWhNpH6%2BqUcQMNmLuMQGOqUBgDIgh4LZHVruZu%2Fr18sC922HYhq7XMDHW%2FUmU1YaAeB%2BGd3OWhE1tkFs%2FKFUIkN1Z%2F0dbHy3ACnsUEECKtPXbOrNWjqIxPAdJIbLnU16yw%2FkPiSzkrufwxDjo0w46k27NvMHs09hQcGELF59VN%2BrCYfQtF2GacQTtbRh6Mj9U7vpthYidnNsGPRGpJKN8ZIUoXQNxz5VD6b6y2Q98qmG5DgdGvz%2F&X-Amz-Signature=ee04cdcf7f1b25e937ffe782ddb5b8ba319dd1f6cb62798c4d1f340ad7344c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ52NIKA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzmXbvYN7Ud9GEMXjQxH07bE2508XOuPDS%2FwkSIxr1yAIgV%2BssKcdvw9z8%2BKA21VfIbpgct2iGE%2BS2PSPXqUCGbJIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAGpwg9aEHK0uEms3CrcAwRfH4rwhxVavWb9NDLICj1Q85iNf1eag65hXqOCRQ2NXhNKEVsUH91pqWOMHQssmxmICBXfD66TljF8AuK2Ak1sjLQ1Bq1BxfTz4l%2BvjjHq6MMGrDBc4OxlWgctqfGTNEXCwfVDt%2Fc7pqJhlLrX7x4%2FS3Mw98Tq1KHpdy3e%2FanIKkFDv3Zrgm1KwaDK2WL2NaC35mPK9TaOadO2IqQQ1XrhhCStbVnskkADOMRH1%2FyQ2TPCEhH96hoBbdv%2FWktdomTLs%2BbURi%2BKZ4REpC%2BldB%2Fk5MRqstQfLA1%2FGMpfWhEW3Gvt0MaJGn7fbmFO0w26eOGnAtUKugEIO5rbUvl9bXR5NhDZ3p8qj5CaNU%2FeOgkNl1isYgWpXqmrgnQFa4%2FLnmk6Oroj8H3WaL%2Fy9sqXvVFQyrjBFBn%2BtTOlFLCG9w3zaLdyDiTD3UzDkT9g6HJiUENxOdQy3Htbh8Kww6l2HWQYzPxLTKzHHSLmt6z6X7x5q0Ye5LGClxJeorja8zQeAUEgfXR6WXEapTb1G0TnV86BlyQlHEvrxCJlEULNolBbPikdqabHbPWhRFUIgmUsoGoAacIpcxRm24jluBuaCcPHW%2FvhbxFR7tZRbbMuddz42hu3wWhNpH6%2BqUcQMNmLuMQGOqUBgDIgh4LZHVruZu%2Fr18sC922HYhq7XMDHW%2FUmU1YaAeB%2BGd3OWhE1tkFs%2FKFUIkN1Z%2F0dbHy3ACnsUEECKtPXbOrNWjqIxPAdJIbLnU16yw%2FkPiSzkrufwxDjo0w46k27NvMHs09hQcGELF59VN%2BrCYfQtF2GacQTtbRh6Mj9U7vpthYidnNsGPRGpJKN8ZIUoXQNxz5VD6b6y2Q98qmG5DgdGvz%2F&X-Amz-Signature=6af52c2c9217e5f34ebc6e123105fe9d35cd45b3302348681546ca60fcd31c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ52NIKA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzmXbvYN7Ud9GEMXjQxH07bE2508XOuPDS%2FwkSIxr1yAIgV%2BssKcdvw9z8%2BKA21VfIbpgct2iGE%2BS2PSPXqUCGbJIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAGpwg9aEHK0uEms3CrcAwRfH4rwhxVavWb9NDLICj1Q85iNf1eag65hXqOCRQ2NXhNKEVsUH91pqWOMHQssmxmICBXfD66TljF8AuK2Ak1sjLQ1Bq1BxfTz4l%2BvjjHq6MMGrDBc4OxlWgctqfGTNEXCwfVDt%2Fc7pqJhlLrX7x4%2FS3Mw98Tq1KHpdy3e%2FanIKkFDv3Zrgm1KwaDK2WL2NaC35mPK9TaOadO2IqQQ1XrhhCStbVnskkADOMRH1%2FyQ2TPCEhH96hoBbdv%2FWktdomTLs%2BbURi%2BKZ4REpC%2BldB%2Fk5MRqstQfLA1%2FGMpfWhEW3Gvt0MaJGn7fbmFO0w26eOGnAtUKugEIO5rbUvl9bXR5NhDZ3p8qj5CaNU%2FeOgkNl1isYgWpXqmrgnQFa4%2FLnmk6Oroj8H3WaL%2Fy9sqXvVFQyrjBFBn%2BtTOlFLCG9w3zaLdyDiTD3UzDkT9g6HJiUENxOdQy3Htbh8Kww6l2HWQYzPxLTKzHHSLmt6z6X7x5q0Ye5LGClxJeorja8zQeAUEgfXR6WXEapTb1G0TnV86BlyQlHEvrxCJlEULNolBbPikdqabHbPWhRFUIgmUsoGoAacIpcxRm24jluBuaCcPHW%2FvhbxFR7tZRbbMuddz42hu3wWhNpH6%2BqUcQMNmLuMQGOqUBgDIgh4LZHVruZu%2Fr18sC922HYhq7XMDHW%2FUmU1YaAeB%2BGd3OWhE1tkFs%2FKFUIkN1Z%2F0dbHy3ACnsUEECKtPXbOrNWjqIxPAdJIbLnU16yw%2FkPiSzkrufwxDjo0w46k27NvMHs09hQcGELF59VN%2BrCYfQtF2GacQTtbRh6Mj9U7vpthYidnNsGPRGpJKN8ZIUoXQNxz5VD6b6y2Q98qmG5DgdGvz%2F&X-Amz-Signature=10773204e0ab61403bacb83f8fb6d1ce8cfc8e7749377149f65d6bddc10c8277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ52NIKA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzmXbvYN7Ud9GEMXjQxH07bE2508XOuPDS%2FwkSIxr1yAIgV%2BssKcdvw9z8%2BKA21VfIbpgct2iGE%2BS2PSPXqUCGbJIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAGpwg9aEHK0uEms3CrcAwRfH4rwhxVavWb9NDLICj1Q85iNf1eag65hXqOCRQ2NXhNKEVsUH91pqWOMHQssmxmICBXfD66TljF8AuK2Ak1sjLQ1Bq1BxfTz4l%2BvjjHq6MMGrDBc4OxlWgctqfGTNEXCwfVDt%2Fc7pqJhlLrX7x4%2FS3Mw98Tq1KHpdy3e%2FanIKkFDv3Zrgm1KwaDK2WL2NaC35mPK9TaOadO2IqQQ1XrhhCStbVnskkADOMRH1%2FyQ2TPCEhH96hoBbdv%2FWktdomTLs%2BbURi%2BKZ4REpC%2BldB%2Fk5MRqstQfLA1%2FGMpfWhEW3Gvt0MaJGn7fbmFO0w26eOGnAtUKugEIO5rbUvl9bXR5NhDZ3p8qj5CaNU%2FeOgkNl1isYgWpXqmrgnQFa4%2FLnmk6Oroj8H3WaL%2Fy9sqXvVFQyrjBFBn%2BtTOlFLCG9w3zaLdyDiTD3UzDkT9g6HJiUENxOdQy3Htbh8Kww6l2HWQYzPxLTKzHHSLmt6z6X7x5q0Ye5LGClxJeorja8zQeAUEgfXR6WXEapTb1G0TnV86BlyQlHEvrxCJlEULNolBbPikdqabHbPWhRFUIgmUsoGoAacIpcxRm24jluBuaCcPHW%2FvhbxFR7tZRbbMuddz42hu3wWhNpH6%2BqUcQMNmLuMQGOqUBgDIgh4LZHVruZu%2Fr18sC922HYhq7XMDHW%2FUmU1YaAeB%2BGd3OWhE1tkFs%2FKFUIkN1Z%2F0dbHy3ACnsUEECKtPXbOrNWjqIxPAdJIbLnU16yw%2FkPiSzkrufwxDjo0w46k27NvMHs09hQcGELF59VN%2BrCYfQtF2GacQTtbRh6Mj9U7vpthYidnNsGPRGpJKN8ZIUoXQNxz5VD6b6y2Q98qmG5DgdGvz%2F&X-Amz-Signature=0a088918921bbc1fc2b8968808ffcca6a1c31c3f9b97bd07f335f23af7616aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P2KV62T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGl7a%2FFbYrSH6rJQ7ZBTijAMiDbsc4Lfjd2zTEJq2R31AiEApoZ9tG9Qc%2BL0674%2BxIZwPMNufkJk1aPC8Jff94r5%2FBMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLC3j2djMoam2OETjCrcAyIk6Q5HL8ep75aXfQXzviTfcjjREvBnAWvu5Cq8DI9r%2FbvRdodnUfYs8AMdRjAmXmKm0wETS02E2vPlX1tVBXpnF1PwFfvgXnoGJLlOhNQRxKssPgjFOt6S95T5b6fS3B2CunXTk%2Fh8TPst3yXI78Puo4PVv7RsRuhHywFBtwmuy2NNz98hITqT5YoZbTDRIT74gdsl1MJ94VgoiGoH4%2FDTVdbz9axfzsSUZzg3SpuPd5fbqEJ3nwpCnba%2Fgc%2Fk%2FenLajjO3KBkbn4Knx1W00A8KI7djIBzf1dMiH0xT%2FV5mrXys3jidsKZaHODduM5FxadfS03%2B02S2APh8ISSl7oNhd0rKZ8O979WGeZ21CUQElQaJ8Q16bNEw2qBiRUlx3nS7tjRuzxVADA9k7rET75gzuHychPPjoPiC%2FkEiYXK4zSbShQAFWvqaCMnEMFd1YuBwo9c4tv9fVXhPkhD9acOxEIj0RVzE557CuvRRVueRn4wLe%2B%2F6q9ejDLaP4d%2BWgKkJvdXMfYdOQ0YBymgUIy1cqhK%2BxT3SRlBEqHmU%2FmGgwzPBawf6roooYDpwh3drmqfl1EYNuTJw%2F8ML2qlkJJWYZ%2BoTYwbIU3iLcbY8xK6XRxPk9vgiAG76QaEMNCOuMQGOqUB5gNeYdASs4bW1PeGXOUsra0PpyU2XStuaeZC8%2BwbSK8Z068jQGk3%2BEa5HwI2lxBQgtk2xyz%2FKWcYzhY13KnYL%2FFdC%2BwFHYvUg9IxchsupRZJT7znf23azXK%2BZL%2Bb3dRv4d6aOPIkLage0AXCQ4YDrrlCuOzPgImC6%2BRj0Kt64ivYlfP7pKvpVrDEVpVhxG%2FkbgR9zyywaMuYN1ao2PmR7mIShDGl&X-Amz-Signature=7f7456598e065f90a365fecc27c3fab85269aad3dc65c2b220928af967cec3c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ52NIKA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzmXbvYN7Ud9GEMXjQxH07bE2508XOuPDS%2FwkSIxr1yAIgV%2BssKcdvw9z8%2BKA21VfIbpgct2iGE%2BS2PSPXqUCGbJIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAGpwg9aEHK0uEms3CrcAwRfH4rwhxVavWb9NDLICj1Q85iNf1eag65hXqOCRQ2NXhNKEVsUH91pqWOMHQssmxmICBXfD66TljF8AuK2Ak1sjLQ1Bq1BxfTz4l%2BvjjHq6MMGrDBc4OxlWgctqfGTNEXCwfVDt%2Fc7pqJhlLrX7x4%2FS3Mw98Tq1KHpdy3e%2FanIKkFDv3Zrgm1KwaDK2WL2NaC35mPK9TaOadO2IqQQ1XrhhCStbVnskkADOMRH1%2FyQ2TPCEhH96hoBbdv%2FWktdomTLs%2BbURi%2BKZ4REpC%2BldB%2Fk5MRqstQfLA1%2FGMpfWhEW3Gvt0MaJGn7fbmFO0w26eOGnAtUKugEIO5rbUvl9bXR5NhDZ3p8qj5CaNU%2FeOgkNl1isYgWpXqmrgnQFa4%2FLnmk6Oroj8H3WaL%2Fy9sqXvVFQyrjBFBn%2BtTOlFLCG9w3zaLdyDiTD3UzDkT9g6HJiUENxOdQy3Htbh8Kww6l2HWQYzPxLTKzHHSLmt6z6X7x5q0Ye5LGClxJeorja8zQeAUEgfXR6WXEapTb1G0TnV86BlyQlHEvrxCJlEULNolBbPikdqabHbPWhRFUIgmUsoGoAacIpcxRm24jluBuaCcPHW%2FvhbxFR7tZRbbMuddz42hu3wWhNpH6%2BqUcQMNmLuMQGOqUBgDIgh4LZHVruZu%2Fr18sC922HYhq7XMDHW%2FUmU1YaAeB%2BGd3OWhE1tkFs%2FKFUIkN1Z%2F0dbHy3ACnsUEECKtPXbOrNWjqIxPAdJIbLnU16yw%2FkPiSzkrufwxDjo0w46k27NvMHs09hQcGELF59VN%2BrCYfQtF2GacQTtbRh6Mj9U7vpthYidnNsGPRGpJKN8ZIUoXQNxz5VD6b6y2Q98qmG5DgdGvz%2F&X-Amz-Signature=aa07c0b1747218d670e642a4be62cfe365d76d02c17eded1594e97c26c01688d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ52NIKA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzmXbvYN7Ud9GEMXjQxH07bE2508XOuPDS%2FwkSIxr1yAIgV%2BssKcdvw9z8%2BKA21VfIbpgct2iGE%2BS2PSPXqUCGbJIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAGpwg9aEHK0uEms3CrcAwRfH4rwhxVavWb9NDLICj1Q85iNf1eag65hXqOCRQ2NXhNKEVsUH91pqWOMHQssmxmICBXfD66TljF8AuK2Ak1sjLQ1Bq1BxfTz4l%2BvjjHq6MMGrDBc4OxlWgctqfGTNEXCwfVDt%2Fc7pqJhlLrX7x4%2FS3Mw98Tq1KHpdy3e%2FanIKkFDv3Zrgm1KwaDK2WL2NaC35mPK9TaOadO2IqQQ1XrhhCStbVnskkADOMRH1%2FyQ2TPCEhH96hoBbdv%2FWktdomTLs%2BbURi%2BKZ4REpC%2BldB%2Fk5MRqstQfLA1%2FGMpfWhEW3Gvt0MaJGn7fbmFO0w26eOGnAtUKugEIO5rbUvl9bXR5NhDZ3p8qj5CaNU%2FeOgkNl1isYgWpXqmrgnQFa4%2FLnmk6Oroj8H3WaL%2Fy9sqXvVFQyrjBFBn%2BtTOlFLCG9w3zaLdyDiTD3UzDkT9g6HJiUENxOdQy3Htbh8Kww6l2HWQYzPxLTKzHHSLmt6z6X7x5q0Ye5LGClxJeorja8zQeAUEgfXR6WXEapTb1G0TnV86BlyQlHEvrxCJlEULNolBbPikdqabHbPWhRFUIgmUsoGoAacIpcxRm24jluBuaCcPHW%2FvhbxFR7tZRbbMuddz42hu3wWhNpH6%2BqUcQMNmLuMQGOqUBgDIgh4LZHVruZu%2Fr18sC922HYhq7XMDHW%2FUmU1YaAeB%2BGd3OWhE1tkFs%2FKFUIkN1Z%2F0dbHy3ACnsUEECKtPXbOrNWjqIxPAdJIbLnU16yw%2FkPiSzkrufwxDjo0w46k27NvMHs09hQcGELF59VN%2BrCYfQtF2GacQTtbRh6Mj9U7vpthYidnNsGPRGpJKN8ZIUoXQNxz5VD6b6y2Q98qmG5DgdGvz%2F&X-Amz-Signature=4a0e4934b8f66c0892fdb8006feaada3e307c4ac260deec85ab986e5881a8478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ52NIKA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzmXbvYN7Ud9GEMXjQxH07bE2508XOuPDS%2FwkSIxr1yAIgV%2BssKcdvw9z8%2BKA21VfIbpgct2iGE%2BS2PSPXqUCGbJIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAGpwg9aEHK0uEms3CrcAwRfH4rwhxVavWb9NDLICj1Q85iNf1eag65hXqOCRQ2NXhNKEVsUH91pqWOMHQssmxmICBXfD66TljF8AuK2Ak1sjLQ1Bq1BxfTz4l%2BvjjHq6MMGrDBc4OxlWgctqfGTNEXCwfVDt%2Fc7pqJhlLrX7x4%2FS3Mw98Tq1KHpdy3e%2FanIKkFDv3Zrgm1KwaDK2WL2NaC35mPK9TaOadO2IqQQ1XrhhCStbVnskkADOMRH1%2FyQ2TPCEhH96hoBbdv%2FWktdomTLs%2BbURi%2BKZ4REpC%2BldB%2Fk5MRqstQfLA1%2FGMpfWhEW3Gvt0MaJGn7fbmFO0w26eOGnAtUKugEIO5rbUvl9bXR5NhDZ3p8qj5CaNU%2FeOgkNl1isYgWpXqmrgnQFa4%2FLnmk6Oroj8H3WaL%2Fy9sqXvVFQyrjBFBn%2BtTOlFLCG9w3zaLdyDiTD3UzDkT9g6HJiUENxOdQy3Htbh8Kww6l2HWQYzPxLTKzHHSLmt6z6X7x5q0Ye5LGClxJeorja8zQeAUEgfXR6WXEapTb1G0TnV86BlyQlHEvrxCJlEULNolBbPikdqabHbPWhRFUIgmUsoGoAacIpcxRm24jluBuaCcPHW%2FvhbxFR7tZRbbMuddz42hu3wWhNpH6%2BqUcQMNmLuMQGOqUBgDIgh4LZHVruZu%2Fr18sC922HYhq7XMDHW%2FUmU1YaAeB%2BGd3OWhE1tkFs%2FKFUIkN1Z%2F0dbHy3ACnsUEECKtPXbOrNWjqIxPAdJIbLnU16yw%2FkPiSzkrufwxDjo0w46k27NvMHs09hQcGELF59VN%2BrCYfQtF2GacQTtbRh6Mj9U7vpthYidnNsGPRGpJKN8ZIUoXQNxz5VD6b6y2Q98qmG5DgdGvz%2F&X-Amz-Signature=d30a090395150184d13e9866593b637856e10c4b5cba71bbf0232e589347de5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ52NIKA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzmXbvYN7Ud9GEMXjQxH07bE2508XOuPDS%2FwkSIxr1yAIgV%2BssKcdvw9z8%2BKA21VfIbpgct2iGE%2BS2PSPXqUCGbJIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAGpwg9aEHK0uEms3CrcAwRfH4rwhxVavWb9NDLICj1Q85iNf1eag65hXqOCRQ2NXhNKEVsUH91pqWOMHQssmxmICBXfD66TljF8AuK2Ak1sjLQ1Bq1BxfTz4l%2BvjjHq6MMGrDBc4OxlWgctqfGTNEXCwfVDt%2Fc7pqJhlLrX7x4%2FS3Mw98Tq1KHpdy3e%2FanIKkFDv3Zrgm1KwaDK2WL2NaC35mPK9TaOadO2IqQQ1XrhhCStbVnskkADOMRH1%2FyQ2TPCEhH96hoBbdv%2FWktdomTLs%2BbURi%2BKZ4REpC%2BldB%2Fk5MRqstQfLA1%2FGMpfWhEW3Gvt0MaJGn7fbmFO0w26eOGnAtUKugEIO5rbUvl9bXR5NhDZ3p8qj5CaNU%2FeOgkNl1isYgWpXqmrgnQFa4%2FLnmk6Oroj8H3WaL%2Fy9sqXvVFQyrjBFBn%2BtTOlFLCG9w3zaLdyDiTD3UzDkT9g6HJiUENxOdQy3Htbh8Kww6l2HWQYzPxLTKzHHSLmt6z6X7x5q0Ye5LGClxJeorja8zQeAUEgfXR6WXEapTb1G0TnV86BlyQlHEvrxCJlEULNolBbPikdqabHbPWhRFUIgmUsoGoAacIpcxRm24jluBuaCcPHW%2FvhbxFR7tZRbbMuddz42hu3wWhNpH6%2BqUcQMNmLuMQGOqUBgDIgh4LZHVruZu%2Fr18sC922HYhq7XMDHW%2FUmU1YaAeB%2BGd3OWhE1tkFs%2FKFUIkN1Z%2F0dbHy3ACnsUEECKtPXbOrNWjqIxPAdJIbLnU16yw%2FkPiSzkrufwxDjo0w46k27NvMHs09hQcGELF59VN%2BrCYfQtF2GacQTtbRh6Mj9U7vpthYidnNsGPRGpJKN8ZIUoXQNxz5VD6b6y2Q98qmG5DgdGvz%2F&X-Amz-Signature=8fba2a77b6e58e400476016fbc525f4838ab21f2d9f10e315a38cec1bdd5652e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ52NIKA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzmXbvYN7Ud9GEMXjQxH07bE2508XOuPDS%2FwkSIxr1yAIgV%2BssKcdvw9z8%2BKA21VfIbpgct2iGE%2BS2PSPXqUCGbJIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAGpwg9aEHK0uEms3CrcAwRfH4rwhxVavWb9NDLICj1Q85iNf1eag65hXqOCRQ2NXhNKEVsUH91pqWOMHQssmxmICBXfD66TljF8AuK2Ak1sjLQ1Bq1BxfTz4l%2BvjjHq6MMGrDBc4OxlWgctqfGTNEXCwfVDt%2Fc7pqJhlLrX7x4%2FS3Mw98Tq1KHpdy3e%2FanIKkFDv3Zrgm1KwaDK2WL2NaC35mPK9TaOadO2IqQQ1XrhhCStbVnskkADOMRH1%2FyQ2TPCEhH96hoBbdv%2FWktdomTLs%2BbURi%2BKZ4REpC%2BldB%2Fk5MRqstQfLA1%2FGMpfWhEW3Gvt0MaJGn7fbmFO0w26eOGnAtUKugEIO5rbUvl9bXR5NhDZ3p8qj5CaNU%2FeOgkNl1isYgWpXqmrgnQFa4%2FLnmk6Oroj8H3WaL%2Fy9sqXvVFQyrjBFBn%2BtTOlFLCG9w3zaLdyDiTD3UzDkT9g6HJiUENxOdQy3Htbh8Kww6l2HWQYzPxLTKzHHSLmt6z6X7x5q0Ye5LGClxJeorja8zQeAUEgfXR6WXEapTb1G0TnV86BlyQlHEvrxCJlEULNolBbPikdqabHbPWhRFUIgmUsoGoAacIpcxRm24jluBuaCcPHW%2FvhbxFR7tZRbbMuddz42hu3wWhNpH6%2BqUcQMNmLuMQGOqUBgDIgh4LZHVruZu%2Fr18sC922HYhq7XMDHW%2FUmU1YaAeB%2BGd3OWhE1tkFs%2FKFUIkN1Z%2F0dbHy3ACnsUEECKtPXbOrNWjqIxPAdJIbLnU16yw%2FkPiSzkrufwxDjo0w46k27NvMHs09hQcGELF59VN%2BrCYfQtF2GacQTtbRh6Mj9U7vpthYidnNsGPRGpJKN8ZIUoXQNxz5VD6b6y2Q98qmG5DgdGvz%2F&X-Amz-Signature=adea30a8b6daa6f39323b615f88e8c49b2b7621761e8dcc05fe2c5752bf5d928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ52NIKA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzmXbvYN7Ud9GEMXjQxH07bE2508XOuPDS%2FwkSIxr1yAIgV%2BssKcdvw9z8%2BKA21VfIbpgct2iGE%2BS2PSPXqUCGbJIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAGpwg9aEHK0uEms3CrcAwRfH4rwhxVavWb9NDLICj1Q85iNf1eag65hXqOCRQ2NXhNKEVsUH91pqWOMHQssmxmICBXfD66TljF8AuK2Ak1sjLQ1Bq1BxfTz4l%2BvjjHq6MMGrDBc4OxlWgctqfGTNEXCwfVDt%2Fc7pqJhlLrX7x4%2FS3Mw98Tq1KHpdy3e%2FanIKkFDv3Zrgm1KwaDK2WL2NaC35mPK9TaOadO2IqQQ1XrhhCStbVnskkADOMRH1%2FyQ2TPCEhH96hoBbdv%2FWktdomTLs%2BbURi%2BKZ4REpC%2BldB%2Fk5MRqstQfLA1%2FGMpfWhEW3Gvt0MaJGn7fbmFO0w26eOGnAtUKugEIO5rbUvl9bXR5NhDZ3p8qj5CaNU%2FeOgkNl1isYgWpXqmrgnQFa4%2FLnmk6Oroj8H3WaL%2Fy9sqXvVFQyrjBFBn%2BtTOlFLCG9w3zaLdyDiTD3UzDkT9g6HJiUENxOdQy3Htbh8Kww6l2HWQYzPxLTKzHHSLmt6z6X7x5q0Ye5LGClxJeorja8zQeAUEgfXR6WXEapTb1G0TnV86BlyQlHEvrxCJlEULNolBbPikdqabHbPWhRFUIgmUsoGoAacIpcxRm24jluBuaCcPHW%2FvhbxFR7tZRbbMuddz42hu3wWhNpH6%2BqUcQMNmLuMQGOqUBgDIgh4LZHVruZu%2Fr18sC922HYhq7XMDHW%2FUmU1YaAeB%2BGd3OWhE1tkFs%2FKFUIkN1Z%2F0dbHy3ACnsUEECKtPXbOrNWjqIxPAdJIbLnU16yw%2FkPiSzkrufwxDjo0w46k27NvMHs09hQcGELF59VN%2BrCYfQtF2GacQTtbRh6Mj9U7vpthYidnNsGPRGpJKN8ZIUoXQNxz5VD6b6y2Q98qmG5DgdGvz%2F&X-Amz-Signature=df4ca634f87e1b9913d87dff9882bc39a1545c0e56b4c0eb9bfd26eacbbf8043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
