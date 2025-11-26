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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJQGT5N3%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjqSsvnIjpGjLC5QD1ALxlz%2F9r1wmGXd5vr%2BZzCjvCVgIgVpNEG5qdVb3CJ4c%2Fgd7%2BeaUZlcGJQGdX44WG4I8lmK4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBvuh%2BatL47YpEBZMCrcA5rrzhIQ%2BYDUbYQC%2FgtdEBUuCnAPomqIWrv0TTe8UZVMWldRuDgGhh77%2Fvrih0HUMdmBFzANw9vq%2B%2B2H1%2FZGjfAywfC9gxjiRAqnQZwl%2BWUv5Ft6418DYtNijCcPNJTIAxZjAMxpa%2BE3rE7JN5MeoH2jaYWklZlJjkOt7Y%2BVvvT1GFEDIW0qguHiLXNEJ%2BPGEhVPEsU9cpqFs5B6R2qUu9APFsgemzyYwXyGb2f0FGxn4J9m%2F%2Fr6GRVxXW0rYMbjf14SdIo3OPxLxW2L12i9W6S%2FwxHtUAJkilvWrCCnHS1IgngN%2Bk5qPQmmwbt%2BitE0vgjs%2BNUELbbNFavOVaOWDqxYpvFig6DFYY8MP6txGE%2F%2BLl3ve3hgE08s8CemMozjCb5vmQo7XNE1j9ssbZCAtKc2lMoEuM1uzvuP%2BDAVUd4WoaPp5KwGPTgRKFA27rJN2bm1q8L3WtZcD5JRPs1yfLfep%2Fe27QZWTg2g4pkhhU9RYc7A2sj0Gh8nGndbOOaylAkCuiGIsZusnesHWY2GRl82TlBjQKG43b4Rr455U1ZxmWEak6iqDVFHlC0OfS2mkiU%2Ffm3x9WR9A7RHPyAj41qRpodzgGOqNrG7kUEKOB8foUqDaR5jBbti%2FWEcMI2xmckGOqUBCC%2FaItGePFla7XbDDV2gQlPdOUYGUSH6FjQu70E%2BNA5MyM%2BzI5vZ%2BealDCYnm6btd2VlbKoabhoGO3V42i3%2B1D0hYq2Q4I7kQ4t2V0XcPN0Zj4ukps%2B57A0OzRBTGdc5IiY9iSBMcoB4abOFIelOTL567r%2FqkZuRwS1B1CHR6B%2FmDevbHvVWGxsqBeu0L2%2BO9IEq81wV6g5CsAhxkoIiNI0HzZEa&X-Amz-Signature=d7d5f8136307bbca24a1a4d96943a17eec1f79818d6a5fa785b1bd7e6cb10c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJQGT5N3%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjqSsvnIjpGjLC5QD1ALxlz%2F9r1wmGXd5vr%2BZzCjvCVgIgVpNEG5qdVb3CJ4c%2Fgd7%2BeaUZlcGJQGdX44WG4I8lmK4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBvuh%2BatL47YpEBZMCrcA5rrzhIQ%2BYDUbYQC%2FgtdEBUuCnAPomqIWrv0TTe8UZVMWldRuDgGhh77%2Fvrih0HUMdmBFzANw9vq%2B%2B2H1%2FZGjfAywfC9gxjiRAqnQZwl%2BWUv5Ft6418DYtNijCcPNJTIAxZjAMxpa%2BE3rE7JN5MeoH2jaYWklZlJjkOt7Y%2BVvvT1GFEDIW0qguHiLXNEJ%2BPGEhVPEsU9cpqFs5B6R2qUu9APFsgemzyYwXyGb2f0FGxn4J9m%2F%2Fr6GRVxXW0rYMbjf14SdIo3OPxLxW2L12i9W6S%2FwxHtUAJkilvWrCCnHS1IgngN%2Bk5qPQmmwbt%2BitE0vgjs%2BNUELbbNFavOVaOWDqxYpvFig6DFYY8MP6txGE%2F%2BLl3ve3hgE08s8CemMozjCb5vmQo7XNE1j9ssbZCAtKc2lMoEuM1uzvuP%2BDAVUd4WoaPp5KwGPTgRKFA27rJN2bm1q8L3WtZcD5JRPs1yfLfep%2Fe27QZWTg2g4pkhhU9RYc7A2sj0Gh8nGndbOOaylAkCuiGIsZusnesHWY2GRl82TlBjQKG43b4Rr455U1ZxmWEak6iqDVFHlC0OfS2mkiU%2Ffm3x9WR9A7RHPyAj41qRpodzgGOqNrG7kUEKOB8foUqDaR5jBbti%2FWEcMI2xmckGOqUBCC%2FaItGePFla7XbDDV2gQlPdOUYGUSH6FjQu70E%2BNA5MyM%2BzI5vZ%2BealDCYnm6btd2VlbKoabhoGO3V42i3%2B1D0hYq2Q4I7kQ4t2V0XcPN0Zj4ukps%2B57A0OzRBTGdc5IiY9iSBMcoB4abOFIelOTL567r%2FqkZuRwS1B1CHR6B%2FmDevbHvVWGxsqBeu0L2%2BO9IEq81wV6g5CsAhxkoIiNI0HzZEa&X-Amz-Signature=ae34d869992c3a0f8130931af83650bd4e7094905f8ba893001ff719dc991916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJQGT5N3%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjqSsvnIjpGjLC5QD1ALxlz%2F9r1wmGXd5vr%2BZzCjvCVgIgVpNEG5qdVb3CJ4c%2Fgd7%2BeaUZlcGJQGdX44WG4I8lmK4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBvuh%2BatL47YpEBZMCrcA5rrzhIQ%2BYDUbYQC%2FgtdEBUuCnAPomqIWrv0TTe8UZVMWldRuDgGhh77%2Fvrih0HUMdmBFzANw9vq%2B%2B2H1%2FZGjfAywfC9gxjiRAqnQZwl%2BWUv5Ft6418DYtNijCcPNJTIAxZjAMxpa%2BE3rE7JN5MeoH2jaYWklZlJjkOt7Y%2BVvvT1GFEDIW0qguHiLXNEJ%2BPGEhVPEsU9cpqFs5B6R2qUu9APFsgemzyYwXyGb2f0FGxn4J9m%2F%2Fr6GRVxXW0rYMbjf14SdIo3OPxLxW2L12i9W6S%2FwxHtUAJkilvWrCCnHS1IgngN%2Bk5qPQmmwbt%2BitE0vgjs%2BNUELbbNFavOVaOWDqxYpvFig6DFYY8MP6txGE%2F%2BLl3ve3hgE08s8CemMozjCb5vmQo7XNE1j9ssbZCAtKc2lMoEuM1uzvuP%2BDAVUd4WoaPp5KwGPTgRKFA27rJN2bm1q8L3WtZcD5JRPs1yfLfep%2Fe27QZWTg2g4pkhhU9RYc7A2sj0Gh8nGndbOOaylAkCuiGIsZusnesHWY2GRl82TlBjQKG43b4Rr455U1ZxmWEak6iqDVFHlC0OfS2mkiU%2Ffm3x9WR9A7RHPyAj41qRpodzgGOqNrG7kUEKOB8foUqDaR5jBbti%2FWEcMI2xmckGOqUBCC%2FaItGePFla7XbDDV2gQlPdOUYGUSH6FjQu70E%2BNA5MyM%2BzI5vZ%2BealDCYnm6btd2VlbKoabhoGO3V42i3%2B1D0hYq2Q4I7kQ4t2V0XcPN0Zj4ukps%2B57A0OzRBTGdc5IiY9iSBMcoB4abOFIelOTL567r%2FqkZuRwS1B1CHR6B%2FmDevbHvVWGxsqBeu0L2%2BO9IEq81wV6g5CsAhxkoIiNI0HzZEa&X-Amz-Signature=433f2a9d6081e07d3a6b5f3f31776e87fb8d3230076c18ada55e0b5fd782e373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJQGT5N3%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjqSsvnIjpGjLC5QD1ALxlz%2F9r1wmGXd5vr%2BZzCjvCVgIgVpNEG5qdVb3CJ4c%2Fgd7%2BeaUZlcGJQGdX44WG4I8lmK4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBvuh%2BatL47YpEBZMCrcA5rrzhIQ%2BYDUbYQC%2FgtdEBUuCnAPomqIWrv0TTe8UZVMWldRuDgGhh77%2Fvrih0HUMdmBFzANw9vq%2B%2B2H1%2FZGjfAywfC9gxjiRAqnQZwl%2BWUv5Ft6418DYtNijCcPNJTIAxZjAMxpa%2BE3rE7JN5MeoH2jaYWklZlJjkOt7Y%2BVvvT1GFEDIW0qguHiLXNEJ%2BPGEhVPEsU9cpqFs5B6R2qUu9APFsgemzyYwXyGb2f0FGxn4J9m%2F%2Fr6GRVxXW0rYMbjf14SdIo3OPxLxW2L12i9W6S%2FwxHtUAJkilvWrCCnHS1IgngN%2Bk5qPQmmwbt%2BitE0vgjs%2BNUELbbNFavOVaOWDqxYpvFig6DFYY8MP6txGE%2F%2BLl3ve3hgE08s8CemMozjCb5vmQo7XNE1j9ssbZCAtKc2lMoEuM1uzvuP%2BDAVUd4WoaPp5KwGPTgRKFA27rJN2bm1q8L3WtZcD5JRPs1yfLfep%2Fe27QZWTg2g4pkhhU9RYc7A2sj0Gh8nGndbOOaylAkCuiGIsZusnesHWY2GRl82TlBjQKG43b4Rr455U1ZxmWEak6iqDVFHlC0OfS2mkiU%2Ffm3x9WR9A7RHPyAj41qRpodzgGOqNrG7kUEKOB8foUqDaR5jBbti%2FWEcMI2xmckGOqUBCC%2FaItGePFla7XbDDV2gQlPdOUYGUSH6FjQu70E%2BNA5MyM%2BzI5vZ%2BealDCYnm6btd2VlbKoabhoGO3V42i3%2B1D0hYq2Q4I7kQ4t2V0XcPN0Zj4ukps%2B57A0OzRBTGdc5IiY9iSBMcoB4abOFIelOTL567r%2FqkZuRwS1B1CHR6B%2FmDevbHvVWGxsqBeu0L2%2BO9IEq81wV6g5CsAhxkoIiNI0HzZEa&X-Amz-Signature=948a36154f29555de7ed6d8ece765fe463fee0edec816e26bf32eb9ec9faf657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QR54HD7%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6OLLCbQzt4qd7bdpa3Ob%2FrIqhqu8IoTf42%2B22Mtw3zAiEArZacPmAb2DTOmsIndwuz3GWqQj%2FOLpIeq%2Fysa7roJdoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPEkCKWyjHc3Yw9J3SrcA5DpnkmZNfyZx2tXQp%2BTDBXG4cF4PWJ6is7qTeDeD0JAm6ps3WgrV%2FB1ICCPj75PiaLIduuRVDZARELZlaOq92L89LXl6veY%2FlgR20jkJvMQyoZRfKRJ6yiRf0kdaXOuCDigkiDBzJK6z9nWfKNS3xaj%2BlWLVATpkvXg5BFYtCqFYtAFMF%2F72R6NUR0CZEoe9hAlEF03CpGaUlh24RhWa4u4ts3QX%2BV3taId0YTtI42UiQyHhNCfdZrxM975KKyUR%2FaW2RIsBry3%2BoS210soh795txbSl0aam0X8M1%2Bob4tmLtDBVoVjNTITWyTlNWRXmGBtQpq8JUkVHrZ%2BvNY2aTXVOR6R57mi74MyLYTIs5IwBQWBcRNOrlvbI01Z73HUWHRS%2BVDfdlSCQO9Xb8xr8smmM7VFrnPt74%2BAKGo3vvtyRMIVPKVZDpO3lxJakISaFV%2BsrMaB69U47jJiRyCghJt0Ei35rLVDoZiJmWIhivfZbyB2%2BJpuTj05bSp1R%2BpgUeIiCYwI8BlrEVpuJJLaUOy%2BxDynbQKT8pGsMMse2zqDHQrtiIoa73P6s1R4h9%2FUjEPGAHExJkip8Kk7G4Ng%2FM%2FQ8MCIFGJyXn%2BVDnT2Ai809%2Fq7aBe4T22ahuSeMNuwmckGOqUBN1BplfDTzNJhDQJT8F2Ini4zzWjJJe65GTMimRhIDSiBg7uRqk8RRUdc19AhXD%2FWf5Oe6sYzkL3nm9mi46TV3rDdVpLOShX%2FBt9UUiuLfv%2FU6O3xKAdqKbQm6PkTkitx%2BxT0bHCxLCS2bPV3JI0moS32s11EZH%2FIWkoo51zGaBOkSaTpP9h0TQbtKLwQ%2F32Vzi0b%2FAuRE2vDJucfSA4dYcUm4tUi&X-Amz-Signature=21d91766e3e14c629f6495338e26f0199442bdd3a57326d035b77c870c4d7742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJQGT5N3%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjqSsvnIjpGjLC5QD1ALxlz%2F9r1wmGXd5vr%2BZzCjvCVgIgVpNEG5qdVb3CJ4c%2Fgd7%2BeaUZlcGJQGdX44WG4I8lmK4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBvuh%2BatL47YpEBZMCrcA5rrzhIQ%2BYDUbYQC%2FgtdEBUuCnAPomqIWrv0TTe8UZVMWldRuDgGhh77%2Fvrih0HUMdmBFzANw9vq%2B%2B2H1%2FZGjfAywfC9gxjiRAqnQZwl%2BWUv5Ft6418DYtNijCcPNJTIAxZjAMxpa%2BE3rE7JN5MeoH2jaYWklZlJjkOt7Y%2BVvvT1GFEDIW0qguHiLXNEJ%2BPGEhVPEsU9cpqFs5B6R2qUu9APFsgemzyYwXyGb2f0FGxn4J9m%2F%2Fr6GRVxXW0rYMbjf14SdIo3OPxLxW2L12i9W6S%2FwxHtUAJkilvWrCCnHS1IgngN%2Bk5qPQmmwbt%2BitE0vgjs%2BNUELbbNFavOVaOWDqxYpvFig6DFYY8MP6txGE%2F%2BLl3ve3hgE08s8CemMozjCb5vmQo7XNE1j9ssbZCAtKc2lMoEuM1uzvuP%2BDAVUd4WoaPp5KwGPTgRKFA27rJN2bm1q8L3WtZcD5JRPs1yfLfep%2Fe27QZWTg2g4pkhhU9RYc7A2sj0Gh8nGndbOOaylAkCuiGIsZusnesHWY2GRl82TlBjQKG43b4Rr455U1ZxmWEak6iqDVFHlC0OfS2mkiU%2Ffm3x9WR9A7RHPyAj41qRpodzgGOqNrG7kUEKOB8foUqDaR5jBbti%2FWEcMI2xmckGOqUBCC%2FaItGePFla7XbDDV2gQlPdOUYGUSH6FjQu70E%2BNA5MyM%2BzI5vZ%2BealDCYnm6btd2VlbKoabhoGO3V42i3%2B1D0hYq2Q4I7kQ4t2V0XcPN0Zj4ukps%2B57A0OzRBTGdc5IiY9iSBMcoB4abOFIelOTL567r%2FqkZuRwS1B1CHR6B%2FmDevbHvVWGxsqBeu0L2%2BO9IEq81wV6g5CsAhxkoIiNI0HzZEa&X-Amz-Signature=a251a9fe6d2879b387fa71f38d8d947fbb1e04259fee6a1c0f9ea48cd1de8313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJQGT5N3%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjqSsvnIjpGjLC5QD1ALxlz%2F9r1wmGXd5vr%2BZzCjvCVgIgVpNEG5qdVb3CJ4c%2Fgd7%2BeaUZlcGJQGdX44WG4I8lmK4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBvuh%2BatL47YpEBZMCrcA5rrzhIQ%2BYDUbYQC%2FgtdEBUuCnAPomqIWrv0TTe8UZVMWldRuDgGhh77%2Fvrih0HUMdmBFzANw9vq%2B%2B2H1%2FZGjfAywfC9gxjiRAqnQZwl%2BWUv5Ft6418DYtNijCcPNJTIAxZjAMxpa%2BE3rE7JN5MeoH2jaYWklZlJjkOt7Y%2BVvvT1GFEDIW0qguHiLXNEJ%2BPGEhVPEsU9cpqFs5B6R2qUu9APFsgemzyYwXyGb2f0FGxn4J9m%2F%2Fr6GRVxXW0rYMbjf14SdIo3OPxLxW2L12i9W6S%2FwxHtUAJkilvWrCCnHS1IgngN%2Bk5qPQmmwbt%2BitE0vgjs%2BNUELbbNFavOVaOWDqxYpvFig6DFYY8MP6txGE%2F%2BLl3ve3hgE08s8CemMozjCb5vmQo7XNE1j9ssbZCAtKc2lMoEuM1uzvuP%2BDAVUd4WoaPp5KwGPTgRKFA27rJN2bm1q8L3WtZcD5JRPs1yfLfep%2Fe27QZWTg2g4pkhhU9RYc7A2sj0Gh8nGndbOOaylAkCuiGIsZusnesHWY2GRl82TlBjQKG43b4Rr455U1ZxmWEak6iqDVFHlC0OfS2mkiU%2Ffm3x9WR9A7RHPyAj41qRpodzgGOqNrG7kUEKOB8foUqDaR5jBbti%2FWEcMI2xmckGOqUBCC%2FaItGePFla7XbDDV2gQlPdOUYGUSH6FjQu70E%2BNA5MyM%2BzI5vZ%2BealDCYnm6btd2VlbKoabhoGO3V42i3%2B1D0hYq2Q4I7kQ4t2V0XcPN0Zj4ukps%2B57A0OzRBTGdc5IiY9iSBMcoB4abOFIelOTL567r%2FqkZuRwS1B1CHR6B%2FmDevbHvVWGxsqBeu0L2%2BO9IEq81wV6g5CsAhxkoIiNI0HzZEa&X-Amz-Signature=efd36250e3c81fb9702f7a10435f8a69a1f6f36691d1284ea02865a17f6f926b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJQGT5N3%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjqSsvnIjpGjLC5QD1ALxlz%2F9r1wmGXd5vr%2BZzCjvCVgIgVpNEG5qdVb3CJ4c%2Fgd7%2BeaUZlcGJQGdX44WG4I8lmK4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBvuh%2BatL47YpEBZMCrcA5rrzhIQ%2BYDUbYQC%2FgtdEBUuCnAPomqIWrv0TTe8UZVMWldRuDgGhh77%2Fvrih0HUMdmBFzANw9vq%2B%2B2H1%2FZGjfAywfC9gxjiRAqnQZwl%2BWUv5Ft6418DYtNijCcPNJTIAxZjAMxpa%2BE3rE7JN5MeoH2jaYWklZlJjkOt7Y%2BVvvT1GFEDIW0qguHiLXNEJ%2BPGEhVPEsU9cpqFs5B6R2qUu9APFsgemzyYwXyGb2f0FGxn4J9m%2F%2Fr6GRVxXW0rYMbjf14SdIo3OPxLxW2L12i9W6S%2FwxHtUAJkilvWrCCnHS1IgngN%2Bk5qPQmmwbt%2BitE0vgjs%2BNUELbbNFavOVaOWDqxYpvFig6DFYY8MP6txGE%2F%2BLl3ve3hgE08s8CemMozjCb5vmQo7XNE1j9ssbZCAtKc2lMoEuM1uzvuP%2BDAVUd4WoaPp5KwGPTgRKFA27rJN2bm1q8L3WtZcD5JRPs1yfLfep%2Fe27QZWTg2g4pkhhU9RYc7A2sj0Gh8nGndbOOaylAkCuiGIsZusnesHWY2GRl82TlBjQKG43b4Rr455U1ZxmWEak6iqDVFHlC0OfS2mkiU%2Ffm3x9WR9A7RHPyAj41qRpodzgGOqNrG7kUEKOB8foUqDaR5jBbti%2FWEcMI2xmckGOqUBCC%2FaItGePFla7XbDDV2gQlPdOUYGUSH6FjQu70E%2BNA5MyM%2BzI5vZ%2BealDCYnm6btd2VlbKoabhoGO3V42i3%2B1D0hYq2Q4I7kQ4t2V0XcPN0Zj4ukps%2B57A0OzRBTGdc5IiY9iSBMcoB4abOFIelOTL567r%2FqkZuRwS1B1CHR6B%2FmDevbHvVWGxsqBeu0L2%2BO9IEq81wV6g5CsAhxkoIiNI0HzZEa&X-Amz-Signature=a2587819f45b16a310f648096b1149e084a742f99bc3c8685007c55b839befac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJQGT5N3%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjqSsvnIjpGjLC5QD1ALxlz%2F9r1wmGXd5vr%2BZzCjvCVgIgVpNEG5qdVb3CJ4c%2Fgd7%2BeaUZlcGJQGdX44WG4I8lmK4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBvuh%2BatL47YpEBZMCrcA5rrzhIQ%2BYDUbYQC%2FgtdEBUuCnAPomqIWrv0TTe8UZVMWldRuDgGhh77%2Fvrih0HUMdmBFzANw9vq%2B%2B2H1%2FZGjfAywfC9gxjiRAqnQZwl%2BWUv5Ft6418DYtNijCcPNJTIAxZjAMxpa%2BE3rE7JN5MeoH2jaYWklZlJjkOt7Y%2BVvvT1GFEDIW0qguHiLXNEJ%2BPGEhVPEsU9cpqFs5B6R2qUu9APFsgemzyYwXyGb2f0FGxn4J9m%2F%2Fr6GRVxXW0rYMbjf14SdIo3OPxLxW2L12i9W6S%2FwxHtUAJkilvWrCCnHS1IgngN%2Bk5qPQmmwbt%2BitE0vgjs%2BNUELbbNFavOVaOWDqxYpvFig6DFYY8MP6txGE%2F%2BLl3ve3hgE08s8CemMozjCb5vmQo7XNE1j9ssbZCAtKc2lMoEuM1uzvuP%2BDAVUd4WoaPp5KwGPTgRKFA27rJN2bm1q8L3WtZcD5JRPs1yfLfep%2Fe27QZWTg2g4pkhhU9RYc7A2sj0Gh8nGndbOOaylAkCuiGIsZusnesHWY2GRl82TlBjQKG43b4Rr455U1ZxmWEak6iqDVFHlC0OfS2mkiU%2Ffm3x9WR9A7RHPyAj41qRpodzgGOqNrG7kUEKOB8foUqDaR5jBbti%2FWEcMI2xmckGOqUBCC%2FaItGePFla7XbDDV2gQlPdOUYGUSH6FjQu70E%2BNA5MyM%2BzI5vZ%2BealDCYnm6btd2VlbKoabhoGO3V42i3%2B1D0hYq2Q4I7kQ4t2V0XcPN0Zj4ukps%2B57A0OzRBTGdc5IiY9iSBMcoB4abOFIelOTL567r%2FqkZuRwS1B1CHR6B%2FmDevbHvVWGxsqBeu0L2%2BO9IEq81wV6g5CsAhxkoIiNI0HzZEa&X-Amz-Signature=bf9945a3e32f0e2dfbc18c56e0489a76326ce2d2fd43292ae6c6a4915e565ed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJQGT5N3%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjqSsvnIjpGjLC5QD1ALxlz%2F9r1wmGXd5vr%2BZzCjvCVgIgVpNEG5qdVb3CJ4c%2Fgd7%2BeaUZlcGJQGdX44WG4I8lmK4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBvuh%2BatL47YpEBZMCrcA5rrzhIQ%2BYDUbYQC%2FgtdEBUuCnAPomqIWrv0TTe8UZVMWldRuDgGhh77%2Fvrih0HUMdmBFzANw9vq%2B%2B2H1%2FZGjfAywfC9gxjiRAqnQZwl%2BWUv5Ft6418DYtNijCcPNJTIAxZjAMxpa%2BE3rE7JN5MeoH2jaYWklZlJjkOt7Y%2BVvvT1GFEDIW0qguHiLXNEJ%2BPGEhVPEsU9cpqFs5B6R2qUu9APFsgemzyYwXyGb2f0FGxn4J9m%2F%2Fr6GRVxXW0rYMbjf14SdIo3OPxLxW2L12i9W6S%2FwxHtUAJkilvWrCCnHS1IgngN%2Bk5qPQmmwbt%2BitE0vgjs%2BNUELbbNFavOVaOWDqxYpvFig6DFYY8MP6txGE%2F%2BLl3ve3hgE08s8CemMozjCb5vmQo7XNE1j9ssbZCAtKc2lMoEuM1uzvuP%2BDAVUd4WoaPp5KwGPTgRKFA27rJN2bm1q8L3WtZcD5JRPs1yfLfep%2Fe27QZWTg2g4pkhhU9RYc7A2sj0Gh8nGndbOOaylAkCuiGIsZusnesHWY2GRl82TlBjQKG43b4Rr455U1ZxmWEak6iqDVFHlC0OfS2mkiU%2Ffm3x9WR9A7RHPyAj41qRpodzgGOqNrG7kUEKOB8foUqDaR5jBbti%2FWEcMI2xmckGOqUBCC%2FaItGePFla7XbDDV2gQlPdOUYGUSH6FjQu70E%2BNA5MyM%2BzI5vZ%2BealDCYnm6btd2VlbKoabhoGO3V42i3%2B1D0hYq2Q4I7kQ4t2V0XcPN0Zj4ukps%2B57A0OzRBTGdc5IiY9iSBMcoB4abOFIelOTL567r%2FqkZuRwS1B1CHR6B%2FmDevbHvVWGxsqBeu0L2%2BO9IEq81wV6g5CsAhxkoIiNI0HzZEa&X-Amz-Signature=241e6bc81f7c528f709125e9bef452d78b0fffc153bcdca16844957f66e855db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJQGT5N3%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjqSsvnIjpGjLC5QD1ALxlz%2F9r1wmGXd5vr%2BZzCjvCVgIgVpNEG5qdVb3CJ4c%2Fgd7%2BeaUZlcGJQGdX44WG4I8lmK4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBvuh%2BatL47YpEBZMCrcA5rrzhIQ%2BYDUbYQC%2FgtdEBUuCnAPomqIWrv0TTe8UZVMWldRuDgGhh77%2Fvrih0HUMdmBFzANw9vq%2B%2B2H1%2FZGjfAywfC9gxjiRAqnQZwl%2BWUv5Ft6418DYtNijCcPNJTIAxZjAMxpa%2BE3rE7JN5MeoH2jaYWklZlJjkOt7Y%2BVvvT1GFEDIW0qguHiLXNEJ%2BPGEhVPEsU9cpqFs5B6R2qUu9APFsgemzyYwXyGb2f0FGxn4J9m%2F%2Fr6GRVxXW0rYMbjf14SdIo3OPxLxW2L12i9W6S%2FwxHtUAJkilvWrCCnHS1IgngN%2Bk5qPQmmwbt%2BitE0vgjs%2BNUELbbNFavOVaOWDqxYpvFig6DFYY8MP6txGE%2F%2BLl3ve3hgE08s8CemMozjCb5vmQo7XNE1j9ssbZCAtKc2lMoEuM1uzvuP%2BDAVUd4WoaPp5KwGPTgRKFA27rJN2bm1q8L3WtZcD5JRPs1yfLfep%2Fe27QZWTg2g4pkhhU9RYc7A2sj0Gh8nGndbOOaylAkCuiGIsZusnesHWY2GRl82TlBjQKG43b4Rr455U1ZxmWEak6iqDVFHlC0OfS2mkiU%2Ffm3x9WR9A7RHPyAj41qRpodzgGOqNrG7kUEKOB8foUqDaR5jBbti%2FWEcMI2xmckGOqUBCC%2FaItGePFla7XbDDV2gQlPdOUYGUSH6FjQu70E%2BNA5MyM%2BzI5vZ%2BealDCYnm6btd2VlbKoabhoGO3V42i3%2B1D0hYq2Q4I7kQ4t2V0XcPN0Zj4ukps%2B57A0OzRBTGdc5IiY9iSBMcoB4abOFIelOTL567r%2FqkZuRwS1B1CHR6B%2FmDevbHvVWGxsqBeu0L2%2BO9IEq81wV6g5CsAhxkoIiNI0HzZEa&X-Amz-Signature=f2e12d8f03fd817c56891072d608b9aa28f35ff36a06814196e2f2294a6b3247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


