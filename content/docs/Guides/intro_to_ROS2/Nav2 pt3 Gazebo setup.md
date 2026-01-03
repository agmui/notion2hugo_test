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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2GCP6N%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAJNKwE4gFB6ERtKw%2BaiuouLDNFpAWCEm4AR56x0dSvxAiEAyB5Tdi9iMS1fmBiNnbfBTIWC%2F%2BvTc1q7HLSxxuiiF0Aq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDMkvrA8YMAxVpWKh0ircA7mGeN52JcHJbfNce4Z46u49k6wj1BVu8c2lU1bCj1nWYZkXCilF56sOaZ%2F0S2lvCpKFjFLRhHRuV4rrzKZwvhNBdQF%2FTbs7mXK9BWOHqiXuH27%2FGPE1Bf0tJjHQQGHOjKCXw3ojuV1P1DBln91MGqH5gdvTGOOSf93pmLJ8Ts%2BBq1I3KEvgogoINNXHqXbnXcybP%2BVj1UGrRZFDHn0Iw1VabFC5Z1lfYbpKcH4R4e%2FuBIcvbD2xLaIdOjUHwef7%2B8BbuWB5Cg43QKALdog5yRvlfguGSVStGncMJL9Bemk1Tz6X9CqVkE0Npc1kFsmrKpE7Qpx7axKA20OTTahLY4iY4OSIALXCnXpAnMABCXW8Cxy%2F19HB7zyBrQmYAfU3Ko956xZIfqkHv1evG1ACpCDuTcgZUlW4X4Ck7ZWDUrRPIUyl3XzZtpJb2kRjLK6g4vuS24CN0EdzCNi1SBZcdZrDaIfRDCIxx0pxIHRAIdhFZFGidwQ97rafEa5QBCb%2FHkg%2FXTfQXsTro%2BGbgFWa4e10QFHBD1xKejaDRogvTNuDrwRNKsW768bKwGOCyzb6jhXP2qz0owJpAtBl5W8lBnpVFtUmb%2Bm7s%2BVqQejqtYr39vvs1ME%2FqErfaPQTMKPK4MoGOqUBaSczd%2F4SB9iBwkC7BJYMK8AElY%2F1WPl%2FfFXqgR7pPTKguCDtiT%2FI%2Bv%2BkNmXBsPCyNam5anPbxNZOuo3Z5X3a8ZRaFjUWUExxeDoTzRUt6LRaKEVkZ2zmQLgS7asLFAWmC937JgMo%2BTn3eAoMvzy84N%2FvVyc9MHMKvnbKdb%2F5%2BLLugDE004lX1TvvG3qGzRDHbYogX6rqMfi3KrTVUNLuB6DuWM84&X-Amz-Signature=587dbd03f067680930dce145b0c1bd70b222749fd5ac49a0156c08ca62c0d5a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2GCP6N%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAJNKwE4gFB6ERtKw%2BaiuouLDNFpAWCEm4AR56x0dSvxAiEAyB5Tdi9iMS1fmBiNnbfBTIWC%2F%2BvTc1q7HLSxxuiiF0Aq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDMkvrA8YMAxVpWKh0ircA7mGeN52JcHJbfNce4Z46u49k6wj1BVu8c2lU1bCj1nWYZkXCilF56sOaZ%2F0S2lvCpKFjFLRhHRuV4rrzKZwvhNBdQF%2FTbs7mXK9BWOHqiXuH27%2FGPE1Bf0tJjHQQGHOjKCXw3ojuV1P1DBln91MGqH5gdvTGOOSf93pmLJ8Ts%2BBq1I3KEvgogoINNXHqXbnXcybP%2BVj1UGrRZFDHn0Iw1VabFC5Z1lfYbpKcH4R4e%2FuBIcvbD2xLaIdOjUHwef7%2B8BbuWB5Cg43QKALdog5yRvlfguGSVStGncMJL9Bemk1Tz6X9CqVkE0Npc1kFsmrKpE7Qpx7axKA20OTTahLY4iY4OSIALXCnXpAnMABCXW8Cxy%2F19HB7zyBrQmYAfU3Ko956xZIfqkHv1evG1ACpCDuTcgZUlW4X4Ck7ZWDUrRPIUyl3XzZtpJb2kRjLK6g4vuS24CN0EdzCNi1SBZcdZrDaIfRDCIxx0pxIHRAIdhFZFGidwQ97rafEa5QBCb%2FHkg%2FXTfQXsTro%2BGbgFWa4e10QFHBD1xKejaDRogvTNuDrwRNKsW768bKwGOCyzb6jhXP2qz0owJpAtBl5W8lBnpVFtUmb%2Bm7s%2BVqQejqtYr39vvs1ME%2FqErfaPQTMKPK4MoGOqUBaSczd%2F4SB9iBwkC7BJYMK8AElY%2F1WPl%2FfFXqgR7pPTKguCDtiT%2FI%2Bv%2BkNmXBsPCyNam5anPbxNZOuo3Z5X3a8ZRaFjUWUExxeDoTzRUt6LRaKEVkZ2zmQLgS7asLFAWmC937JgMo%2BTn3eAoMvzy84N%2FvVyc9MHMKvnbKdb%2F5%2BLLugDE004lX1TvvG3qGzRDHbYogX6rqMfi3KrTVUNLuB6DuWM84&X-Amz-Signature=67ad34fb7c8af7fedde192ed78dd8a992462584378ce75ddb8dc2a57b2d3e6a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2GCP6N%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAJNKwE4gFB6ERtKw%2BaiuouLDNFpAWCEm4AR56x0dSvxAiEAyB5Tdi9iMS1fmBiNnbfBTIWC%2F%2BvTc1q7HLSxxuiiF0Aq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDMkvrA8YMAxVpWKh0ircA7mGeN52JcHJbfNce4Z46u49k6wj1BVu8c2lU1bCj1nWYZkXCilF56sOaZ%2F0S2lvCpKFjFLRhHRuV4rrzKZwvhNBdQF%2FTbs7mXK9BWOHqiXuH27%2FGPE1Bf0tJjHQQGHOjKCXw3ojuV1P1DBln91MGqH5gdvTGOOSf93pmLJ8Ts%2BBq1I3KEvgogoINNXHqXbnXcybP%2BVj1UGrRZFDHn0Iw1VabFC5Z1lfYbpKcH4R4e%2FuBIcvbD2xLaIdOjUHwef7%2B8BbuWB5Cg43QKALdog5yRvlfguGSVStGncMJL9Bemk1Tz6X9CqVkE0Npc1kFsmrKpE7Qpx7axKA20OTTahLY4iY4OSIALXCnXpAnMABCXW8Cxy%2F19HB7zyBrQmYAfU3Ko956xZIfqkHv1evG1ACpCDuTcgZUlW4X4Ck7ZWDUrRPIUyl3XzZtpJb2kRjLK6g4vuS24CN0EdzCNi1SBZcdZrDaIfRDCIxx0pxIHRAIdhFZFGidwQ97rafEa5QBCb%2FHkg%2FXTfQXsTro%2BGbgFWa4e10QFHBD1xKejaDRogvTNuDrwRNKsW768bKwGOCyzb6jhXP2qz0owJpAtBl5W8lBnpVFtUmb%2Bm7s%2BVqQejqtYr39vvs1ME%2FqErfaPQTMKPK4MoGOqUBaSczd%2F4SB9iBwkC7BJYMK8AElY%2F1WPl%2FfFXqgR7pPTKguCDtiT%2FI%2Bv%2BkNmXBsPCyNam5anPbxNZOuo3Z5X3a8ZRaFjUWUExxeDoTzRUt6LRaKEVkZ2zmQLgS7asLFAWmC937JgMo%2BTn3eAoMvzy84N%2FvVyc9MHMKvnbKdb%2F5%2BLLugDE004lX1TvvG3qGzRDHbYogX6rqMfi3KrTVUNLuB6DuWM84&X-Amz-Signature=b8090cbcbbcbe8e739f860bf9e6d99cefe156e160acfd4c1ac99142f053cc6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2GCP6N%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAJNKwE4gFB6ERtKw%2BaiuouLDNFpAWCEm4AR56x0dSvxAiEAyB5Tdi9iMS1fmBiNnbfBTIWC%2F%2BvTc1q7HLSxxuiiF0Aq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDMkvrA8YMAxVpWKh0ircA7mGeN52JcHJbfNce4Z46u49k6wj1BVu8c2lU1bCj1nWYZkXCilF56sOaZ%2F0S2lvCpKFjFLRhHRuV4rrzKZwvhNBdQF%2FTbs7mXK9BWOHqiXuH27%2FGPE1Bf0tJjHQQGHOjKCXw3ojuV1P1DBln91MGqH5gdvTGOOSf93pmLJ8Ts%2BBq1I3KEvgogoINNXHqXbnXcybP%2BVj1UGrRZFDHn0Iw1VabFC5Z1lfYbpKcH4R4e%2FuBIcvbD2xLaIdOjUHwef7%2B8BbuWB5Cg43QKALdog5yRvlfguGSVStGncMJL9Bemk1Tz6X9CqVkE0Npc1kFsmrKpE7Qpx7axKA20OTTahLY4iY4OSIALXCnXpAnMABCXW8Cxy%2F19HB7zyBrQmYAfU3Ko956xZIfqkHv1evG1ACpCDuTcgZUlW4X4Ck7ZWDUrRPIUyl3XzZtpJb2kRjLK6g4vuS24CN0EdzCNi1SBZcdZrDaIfRDCIxx0pxIHRAIdhFZFGidwQ97rafEa5QBCb%2FHkg%2FXTfQXsTro%2BGbgFWa4e10QFHBD1xKejaDRogvTNuDrwRNKsW768bKwGOCyzb6jhXP2qz0owJpAtBl5W8lBnpVFtUmb%2Bm7s%2BVqQejqtYr39vvs1ME%2FqErfaPQTMKPK4MoGOqUBaSczd%2F4SB9iBwkC7BJYMK8AElY%2F1WPl%2FfFXqgR7pPTKguCDtiT%2FI%2Bv%2BkNmXBsPCyNam5anPbxNZOuo3Z5X3a8ZRaFjUWUExxeDoTzRUt6LRaKEVkZ2zmQLgS7asLFAWmC937JgMo%2BTn3eAoMvzy84N%2FvVyc9MHMKvnbKdb%2F5%2BLLugDE004lX1TvvG3qGzRDHbYogX6rqMfi3KrTVUNLuB6DuWM84&X-Amz-Signature=c609bb36457d4e02825b0ee288fc46a2c830c48e67cf00e404f5c1971b3a36a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6K26OZT%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBCu6MIIdSPi0AI8JQzE%2BRYoPqon%2FqW%2B3OiY36fWRdGYAiA6px20OyHPhlBva%2BCWI8teOyNXwIEamMHm6bN%2BiKoNhSr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIMJ%2FyagDUG1%2BZAlpQGKtwDpfmOn%2FfbPk3CnY%2FLjDHULEOrLwDOZSoIGM%2BPAfm%2BdevxHgEH2ysC2J%2FmlcuPNkbIZFXpuyh2w8H5gAq9BtWeMGvepiyYDA1UeLWkyF6WyWp2w3Gh7SqMG7n3UlZZz8Yc0%2Fi2bnhIIochfmb%2BgXieRsW95iIyd%2FHFQ%2F8r9iAeXY79O%2B%2Frw0NN2sLcPxLOr8rRoZqiDTQlZoS4KJqRCJr%2FWpKLIvaIB1y5UqfWV12GTvElV7u47ITuxFc32yPHwcJf0fRJeV6gpBV26oS0IFEKG0NMF4D9lW9Lx%2Bj0bXEo%2BNlOCE%2BwO7DkB9RSgy5XToY52Wh0DqptXjBFddmOhb9e0ugrmAjfNpvmkm0XTnHAEru0h%2FfN90W1Xu6Pmh1poeyrAah6tPFgL3HuRIiVh0Y7u0daTjqPliYfcvnStskJx5rcIXZ6sMEf0r%2F7MgVOB9icFtx52k6SNWx01g6Tz%2F9e%2FW57Zm44LL6MSiOhyeSnJ43no7ygqo9bosSgjSIe9QNWFJr7ajIUbSYfRfWeZrgim3WNgt1MVuq0hu%2FVXag9ouRsjob9iV2oUd%2BX5dULZoiJEKP%2BGY0%2BYHoDbrGeWP5nzO%2Fu3kXJPAvNoitcPQUaAOO8BLFflXVudaPLKOowo8%2FgygY6pgFRxgUzGDM451SAW8Vy6Vztegike6sGr9kxIsWe4q%2FzIzoViQqJQhQf4OGwE%2BeNMF62nB9b7wGWUPIIovvUajDGbChqRDbTu5Cnz72dSjaI9Yyvtn1%2FSwI7YPKN%2BXS%2BFCM%2BoqGJFE4Ahk%2BbH7S5Lky4FHpHPBzL4HEPrjAk12me3L2AiVZFR2puhzC2xTb9HGkLtH%2FtyHOfJecYuAi65GseLSm%2BKXtY&X-Amz-Signature=c7a64c09f6ddecee317b58650346693df79f37abd2d684a9afc3512fdd4a11c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2GCP6N%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAJNKwE4gFB6ERtKw%2BaiuouLDNFpAWCEm4AR56x0dSvxAiEAyB5Tdi9iMS1fmBiNnbfBTIWC%2F%2BvTc1q7HLSxxuiiF0Aq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDMkvrA8YMAxVpWKh0ircA7mGeN52JcHJbfNce4Z46u49k6wj1BVu8c2lU1bCj1nWYZkXCilF56sOaZ%2F0S2lvCpKFjFLRhHRuV4rrzKZwvhNBdQF%2FTbs7mXK9BWOHqiXuH27%2FGPE1Bf0tJjHQQGHOjKCXw3ojuV1P1DBln91MGqH5gdvTGOOSf93pmLJ8Ts%2BBq1I3KEvgogoINNXHqXbnXcybP%2BVj1UGrRZFDHn0Iw1VabFC5Z1lfYbpKcH4R4e%2FuBIcvbD2xLaIdOjUHwef7%2B8BbuWB5Cg43QKALdog5yRvlfguGSVStGncMJL9Bemk1Tz6X9CqVkE0Npc1kFsmrKpE7Qpx7axKA20OTTahLY4iY4OSIALXCnXpAnMABCXW8Cxy%2F19HB7zyBrQmYAfU3Ko956xZIfqkHv1evG1ACpCDuTcgZUlW4X4Ck7ZWDUrRPIUyl3XzZtpJb2kRjLK6g4vuS24CN0EdzCNi1SBZcdZrDaIfRDCIxx0pxIHRAIdhFZFGidwQ97rafEa5QBCb%2FHkg%2FXTfQXsTro%2BGbgFWa4e10QFHBD1xKejaDRogvTNuDrwRNKsW768bKwGOCyzb6jhXP2qz0owJpAtBl5W8lBnpVFtUmb%2Bm7s%2BVqQejqtYr39vvs1ME%2FqErfaPQTMKPK4MoGOqUBaSczd%2F4SB9iBwkC7BJYMK8AElY%2F1WPl%2FfFXqgR7pPTKguCDtiT%2FI%2Bv%2BkNmXBsPCyNam5anPbxNZOuo3Z5X3a8ZRaFjUWUExxeDoTzRUt6LRaKEVkZ2zmQLgS7asLFAWmC937JgMo%2BTn3eAoMvzy84N%2FvVyc9MHMKvnbKdb%2F5%2BLLugDE004lX1TvvG3qGzRDHbYogX6rqMfi3KrTVUNLuB6DuWM84&X-Amz-Signature=e3c9b030d337fa931255687b08d3a33dc175e90b26022bf32944e20f584be902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2GCP6N%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAJNKwE4gFB6ERtKw%2BaiuouLDNFpAWCEm4AR56x0dSvxAiEAyB5Tdi9iMS1fmBiNnbfBTIWC%2F%2BvTc1q7HLSxxuiiF0Aq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDMkvrA8YMAxVpWKh0ircA7mGeN52JcHJbfNce4Z46u49k6wj1BVu8c2lU1bCj1nWYZkXCilF56sOaZ%2F0S2lvCpKFjFLRhHRuV4rrzKZwvhNBdQF%2FTbs7mXK9BWOHqiXuH27%2FGPE1Bf0tJjHQQGHOjKCXw3ojuV1P1DBln91MGqH5gdvTGOOSf93pmLJ8Ts%2BBq1I3KEvgogoINNXHqXbnXcybP%2BVj1UGrRZFDHn0Iw1VabFC5Z1lfYbpKcH4R4e%2FuBIcvbD2xLaIdOjUHwef7%2B8BbuWB5Cg43QKALdog5yRvlfguGSVStGncMJL9Bemk1Tz6X9CqVkE0Npc1kFsmrKpE7Qpx7axKA20OTTahLY4iY4OSIALXCnXpAnMABCXW8Cxy%2F19HB7zyBrQmYAfU3Ko956xZIfqkHv1evG1ACpCDuTcgZUlW4X4Ck7ZWDUrRPIUyl3XzZtpJb2kRjLK6g4vuS24CN0EdzCNi1SBZcdZrDaIfRDCIxx0pxIHRAIdhFZFGidwQ97rafEa5QBCb%2FHkg%2FXTfQXsTro%2BGbgFWa4e10QFHBD1xKejaDRogvTNuDrwRNKsW768bKwGOCyzb6jhXP2qz0owJpAtBl5W8lBnpVFtUmb%2Bm7s%2BVqQejqtYr39vvs1ME%2FqErfaPQTMKPK4MoGOqUBaSczd%2F4SB9iBwkC7BJYMK8AElY%2F1WPl%2FfFXqgR7pPTKguCDtiT%2FI%2Bv%2BkNmXBsPCyNam5anPbxNZOuo3Z5X3a8ZRaFjUWUExxeDoTzRUt6LRaKEVkZ2zmQLgS7asLFAWmC937JgMo%2BTn3eAoMvzy84N%2FvVyc9MHMKvnbKdb%2F5%2BLLugDE004lX1TvvG3qGzRDHbYogX6rqMfi3KrTVUNLuB6DuWM84&X-Amz-Signature=9f272ef8c6ca90a093ce42339cba1cdb1bf22af039615429e76ffc8f12aa65d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2GCP6N%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAJNKwE4gFB6ERtKw%2BaiuouLDNFpAWCEm4AR56x0dSvxAiEAyB5Tdi9iMS1fmBiNnbfBTIWC%2F%2BvTc1q7HLSxxuiiF0Aq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDMkvrA8YMAxVpWKh0ircA7mGeN52JcHJbfNce4Z46u49k6wj1BVu8c2lU1bCj1nWYZkXCilF56sOaZ%2F0S2lvCpKFjFLRhHRuV4rrzKZwvhNBdQF%2FTbs7mXK9BWOHqiXuH27%2FGPE1Bf0tJjHQQGHOjKCXw3ojuV1P1DBln91MGqH5gdvTGOOSf93pmLJ8Ts%2BBq1I3KEvgogoINNXHqXbnXcybP%2BVj1UGrRZFDHn0Iw1VabFC5Z1lfYbpKcH4R4e%2FuBIcvbD2xLaIdOjUHwef7%2B8BbuWB5Cg43QKALdog5yRvlfguGSVStGncMJL9Bemk1Tz6X9CqVkE0Npc1kFsmrKpE7Qpx7axKA20OTTahLY4iY4OSIALXCnXpAnMABCXW8Cxy%2F19HB7zyBrQmYAfU3Ko956xZIfqkHv1evG1ACpCDuTcgZUlW4X4Ck7ZWDUrRPIUyl3XzZtpJb2kRjLK6g4vuS24CN0EdzCNi1SBZcdZrDaIfRDCIxx0pxIHRAIdhFZFGidwQ97rafEa5QBCb%2FHkg%2FXTfQXsTro%2BGbgFWa4e10QFHBD1xKejaDRogvTNuDrwRNKsW768bKwGOCyzb6jhXP2qz0owJpAtBl5W8lBnpVFtUmb%2Bm7s%2BVqQejqtYr39vvs1ME%2FqErfaPQTMKPK4MoGOqUBaSczd%2F4SB9iBwkC7BJYMK8AElY%2F1WPl%2FfFXqgR7pPTKguCDtiT%2FI%2Bv%2BkNmXBsPCyNam5anPbxNZOuo3Z5X3a8ZRaFjUWUExxeDoTzRUt6LRaKEVkZ2zmQLgS7asLFAWmC937JgMo%2BTn3eAoMvzy84N%2FvVyc9MHMKvnbKdb%2F5%2BLLugDE004lX1TvvG3qGzRDHbYogX6rqMfi3KrTVUNLuB6DuWM84&X-Amz-Signature=f5fb335912e79e826d728e36e07de849d44b3bdf22255b270a82c44b024b0ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2GCP6N%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAJNKwE4gFB6ERtKw%2BaiuouLDNFpAWCEm4AR56x0dSvxAiEAyB5Tdi9iMS1fmBiNnbfBTIWC%2F%2BvTc1q7HLSxxuiiF0Aq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDMkvrA8YMAxVpWKh0ircA7mGeN52JcHJbfNce4Z46u49k6wj1BVu8c2lU1bCj1nWYZkXCilF56sOaZ%2F0S2lvCpKFjFLRhHRuV4rrzKZwvhNBdQF%2FTbs7mXK9BWOHqiXuH27%2FGPE1Bf0tJjHQQGHOjKCXw3ojuV1P1DBln91MGqH5gdvTGOOSf93pmLJ8Ts%2BBq1I3KEvgogoINNXHqXbnXcybP%2BVj1UGrRZFDHn0Iw1VabFC5Z1lfYbpKcH4R4e%2FuBIcvbD2xLaIdOjUHwef7%2B8BbuWB5Cg43QKALdog5yRvlfguGSVStGncMJL9Bemk1Tz6X9CqVkE0Npc1kFsmrKpE7Qpx7axKA20OTTahLY4iY4OSIALXCnXpAnMABCXW8Cxy%2F19HB7zyBrQmYAfU3Ko956xZIfqkHv1evG1ACpCDuTcgZUlW4X4Ck7ZWDUrRPIUyl3XzZtpJb2kRjLK6g4vuS24CN0EdzCNi1SBZcdZrDaIfRDCIxx0pxIHRAIdhFZFGidwQ97rafEa5QBCb%2FHkg%2FXTfQXsTro%2BGbgFWa4e10QFHBD1xKejaDRogvTNuDrwRNKsW768bKwGOCyzb6jhXP2qz0owJpAtBl5W8lBnpVFtUmb%2Bm7s%2BVqQejqtYr39vvs1ME%2FqErfaPQTMKPK4MoGOqUBaSczd%2F4SB9iBwkC7BJYMK8AElY%2F1WPl%2FfFXqgR7pPTKguCDtiT%2FI%2Bv%2BkNmXBsPCyNam5anPbxNZOuo3Z5X3a8ZRaFjUWUExxeDoTzRUt6LRaKEVkZ2zmQLgS7asLFAWmC937JgMo%2BTn3eAoMvzy84N%2FvVyc9MHMKvnbKdb%2F5%2BLLugDE004lX1TvvG3qGzRDHbYogX6rqMfi3KrTVUNLuB6DuWM84&X-Amz-Signature=aa332756bb528f97c5bab44b6f9b687e4a5e93b6a30d1c3abd5e6ec6571b8334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2GCP6N%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAJNKwE4gFB6ERtKw%2BaiuouLDNFpAWCEm4AR56x0dSvxAiEAyB5Tdi9iMS1fmBiNnbfBTIWC%2F%2BvTc1q7HLSxxuiiF0Aq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDMkvrA8YMAxVpWKh0ircA7mGeN52JcHJbfNce4Z46u49k6wj1BVu8c2lU1bCj1nWYZkXCilF56sOaZ%2F0S2lvCpKFjFLRhHRuV4rrzKZwvhNBdQF%2FTbs7mXK9BWOHqiXuH27%2FGPE1Bf0tJjHQQGHOjKCXw3ojuV1P1DBln91MGqH5gdvTGOOSf93pmLJ8Ts%2BBq1I3KEvgogoINNXHqXbnXcybP%2BVj1UGrRZFDHn0Iw1VabFC5Z1lfYbpKcH4R4e%2FuBIcvbD2xLaIdOjUHwef7%2B8BbuWB5Cg43QKALdog5yRvlfguGSVStGncMJL9Bemk1Tz6X9CqVkE0Npc1kFsmrKpE7Qpx7axKA20OTTahLY4iY4OSIALXCnXpAnMABCXW8Cxy%2F19HB7zyBrQmYAfU3Ko956xZIfqkHv1evG1ACpCDuTcgZUlW4X4Ck7ZWDUrRPIUyl3XzZtpJb2kRjLK6g4vuS24CN0EdzCNi1SBZcdZrDaIfRDCIxx0pxIHRAIdhFZFGidwQ97rafEa5QBCb%2FHkg%2FXTfQXsTro%2BGbgFWa4e10QFHBD1xKejaDRogvTNuDrwRNKsW768bKwGOCyzb6jhXP2qz0owJpAtBl5W8lBnpVFtUmb%2Bm7s%2BVqQejqtYr39vvs1ME%2FqErfaPQTMKPK4MoGOqUBaSczd%2F4SB9iBwkC7BJYMK8AElY%2F1WPl%2FfFXqgR7pPTKguCDtiT%2FI%2Bv%2BkNmXBsPCyNam5anPbxNZOuo3Z5X3a8ZRaFjUWUExxeDoTzRUt6LRaKEVkZ2zmQLgS7asLFAWmC937JgMo%2BTn3eAoMvzy84N%2FvVyc9MHMKvnbKdb%2F5%2BLLugDE004lX1TvvG3qGzRDHbYogX6rqMfi3KrTVUNLuB6DuWM84&X-Amz-Signature=1175dcf5e8c62aa364ab7183a24eb5566ccafd83c27096addbfc6eb481a1d493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2GCP6N%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAJNKwE4gFB6ERtKw%2BaiuouLDNFpAWCEm4AR56x0dSvxAiEAyB5Tdi9iMS1fmBiNnbfBTIWC%2F%2BvTc1q7HLSxxuiiF0Aq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDMkvrA8YMAxVpWKh0ircA7mGeN52JcHJbfNce4Z46u49k6wj1BVu8c2lU1bCj1nWYZkXCilF56sOaZ%2F0S2lvCpKFjFLRhHRuV4rrzKZwvhNBdQF%2FTbs7mXK9BWOHqiXuH27%2FGPE1Bf0tJjHQQGHOjKCXw3ojuV1P1DBln91MGqH5gdvTGOOSf93pmLJ8Ts%2BBq1I3KEvgogoINNXHqXbnXcybP%2BVj1UGrRZFDHn0Iw1VabFC5Z1lfYbpKcH4R4e%2FuBIcvbD2xLaIdOjUHwef7%2B8BbuWB5Cg43QKALdog5yRvlfguGSVStGncMJL9Bemk1Tz6X9CqVkE0Npc1kFsmrKpE7Qpx7axKA20OTTahLY4iY4OSIALXCnXpAnMABCXW8Cxy%2F19HB7zyBrQmYAfU3Ko956xZIfqkHv1evG1ACpCDuTcgZUlW4X4Ck7ZWDUrRPIUyl3XzZtpJb2kRjLK6g4vuS24CN0EdzCNi1SBZcdZrDaIfRDCIxx0pxIHRAIdhFZFGidwQ97rafEa5QBCb%2FHkg%2FXTfQXsTro%2BGbgFWa4e10QFHBD1xKejaDRogvTNuDrwRNKsW768bKwGOCyzb6jhXP2qz0owJpAtBl5W8lBnpVFtUmb%2Bm7s%2BVqQejqtYr39vvs1ME%2FqErfaPQTMKPK4MoGOqUBaSczd%2F4SB9iBwkC7BJYMK8AElY%2F1WPl%2FfFXqgR7pPTKguCDtiT%2FI%2Bv%2BkNmXBsPCyNam5anPbxNZOuo3Z5X3a8ZRaFjUWUExxeDoTzRUt6LRaKEVkZ2zmQLgS7asLFAWmC937JgMo%2BTn3eAoMvzy84N%2FvVyc9MHMKvnbKdb%2F5%2BLLugDE004lX1TvvG3qGzRDHbYogX6rqMfi3KrTVUNLuB6DuWM84&X-Amz-Signature=1e54259000267a03fc3daf5db0801c007c23788ff07d902fe199e2f9fdb2bcd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


