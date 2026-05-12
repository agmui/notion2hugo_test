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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZDLOFM%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCLp59HoQG%2BOusJtQ0AtTOj%2FuyqD15rKYO9XgGdn42diwIgAWwcs%2FINvog6ozgWeYu3l%2FV4%2BG7SmE3tK9I7VleiPAEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDC2y4iVYr%2BxmegQ%2B5ircA2RV2Mj6oXioXqWXqFY3vS84w1RsY%2BSDI90V5EUSzcjL2promIjhVZTAE4%2Bq9IW2%2Feoj9AGsWxrEH9rNwQPJMNAIZe2Vi2hDS9OonLRSCTvQgIctyVr26mXQFHNTu7vanj8n3NovUISAtjEe7wYSkUFOXDjJSiIxhPk%2FgVtHzqEvHaP7ly%2BPQGcbVkkt%2FqFaXw6qWSsVSFRIsCfabZTB5RAArEis0dDTGxi4YzDKyIuJgrGgVwduE%2FPUGA1PKJSiqkjbdeFxsmfHLRncPl9V0mZJoX2CMOePX0PlXkYIBABR%2BFbJP2Wn8j7vOLSZeNtzotVrEdb%2Fu3HMhNrmj4QduC5nxbd1QMaKqD2bP3pOkxgHi%2BJBzftfWLdEk%2F%2FTgjrUNW10vM%2BVO4dQvoV002GOEVXuy8GRImherxII%2FRRqVhJ8FXCb6V9YKDFK%2FL7VRaE9ck7HicbAKKZ6tLBr9zxY2TyJCtniaue8AVgI8qwtZarORxCtPUt6Ai7N2nuKP%2FGuyLoqAiRzpJwRDG0AUxnxIXvDFl6kdLlujCqc6TGhXhY5%2B6u%2FyDc52MwbP0cIXe5GKwpOsZkzGTL9RrBkLqpIf61WD%2BI2ZxZxVW%2BF%2FV5wmi%2BUpCdO8h3gqPM1RCWsMNSkitAGOqUBGUHWkhIuQzp35DEJLeTIFFK5tO4aZ5Ltx%2FRAaDHpxbfMHx4Kn1qOlMgqJTQIB8c9vpcJCOK7nY6kp8xy8y4lIl8v6OK55JZ8wr6ZUgIgoJ89Lt0vtBGKkNsQXznMijjHP4WzuFZiqCbAgFTeqKKwtB7bsgKTmDrDii1%2FCZCzq8XGkGnAM8mx%2F5eH%2FwXSi3msco3x1ZDIOBKXsdFzStzFbs%2FSvHa4&X-Amz-Signature=a7f8842d8e34c0f43c17e18efeff8e1df10b2568192b410ff15c85a7a1246503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZDLOFM%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCLp59HoQG%2BOusJtQ0AtTOj%2FuyqD15rKYO9XgGdn42diwIgAWwcs%2FINvog6ozgWeYu3l%2FV4%2BG7SmE3tK9I7VleiPAEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDC2y4iVYr%2BxmegQ%2B5ircA2RV2Mj6oXioXqWXqFY3vS84w1RsY%2BSDI90V5EUSzcjL2promIjhVZTAE4%2Bq9IW2%2Feoj9AGsWxrEH9rNwQPJMNAIZe2Vi2hDS9OonLRSCTvQgIctyVr26mXQFHNTu7vanj8n3NovUISAtjEe7wYSkUFOXDjJSiIxhPk%2FgVtHzqEvHaP7ly%2BPQGcbVkkt%2FqFaXw6qWSsVSFRIsCfabZTB5RAArEis0dDTGxi4YzDKyIuJgrGgVwduE%2FPUGA1PKJSiqkjbdeFxsmfHLRncPl9V0mZJoX2CMOePX0PlXkYIBABR%2BFbJP2Wn8j7vOLSZeNtzotVrEdb%2Fu3HMhNrmj4QduC5nxbd1QMaKqD2bP3pOkxgHi%2BJBzftfWLdEk%2F%2FTgjrUNW10vM%2BVO4dQvoV002GOEVXuy8GRImherxII%2FRRqVhJ8FXCb6V9YKDFK%2FL7VRaE9ck7HicbAKKZ6tLBr9zxY2TyJCtniaue8AVgI8qwtZarORxCtPUt6Ai7N2nuKP%2FGuyLoqAiRzpJwRDG0AUxnxIXvDFl6kdLlujCqc6TGhXhY5%2B6u%2FyDc52MwbP0cIXe5GKwpOsZkzGTL9RrBkLqpIf61WD%2BI2ZxZxVW%2BF%2FV5wmi%2BUpCdO8h3gqPM1RCWsMNSkitAGOqUBGUHWkhIuQzp35DEJLeTIFFK5tO4aZ5Ltx%2FRAaDHpxbfMHx4Kn1qOlMgqJTQIB8c9vpcJCOK7nY6kp8xy8y4lIl8v6OK55JZ8wr6ZUgIgoJ89Lt0vtBGKkNsQXznMijjHP4WzuFZiqCbAgFTeqKKwtB7bsgKTmDrDii1%2FCZCzq8XGkGnAM8mx%2F5eH%2FwXSi3msco3x1ZDIOBKXsdFzStzFbs%2FSvHa4&X-Amz-Signature=a98775a18c9a40757eb9ae007fb49bff58548ef83e00b13f23cbe4b7036d4cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZDLOFM%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCLp59HoQG%2BOusJtQ0AtTOj%2FuyqD15rKYO9XgGdn42diwIgAWwcs%2FINvog6ozgWeYu3l%2FV4%2BG7SmE3tK9I7VleiPAEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDC2y4iVYr%2BxmegQ%2B5ircA2RV2Mj6oXioXqWXqFY3vS84w1RsY%2BSDI90V5EUSzcjL2promIjhVZTAE4%2Bq9IW2%2Feoj9AGsWxrEH9rNwQPJMNAIZe2Vi2hDS9OonLRSCTvQgIctyVr26mXQFHNTu7vanj8n3NovUISAtjEe7wYSkUFOXDjJSiIxhPk%2FgVtHzqEvHaP7ly%2BPQGcbVkkt%2FqFaXw6qWSsVSFRIsCfabZTB5RAArEis0dDTGxi4YzDKyIuJgrGgVwduE%2FPUGA1PKJSiqkjbdeFxsmfHLRncPl9V0mZJoX2CMOePX0PlXkYIBABR%2BFbJP2Wn8j7vOLSZeNtzotVrEdb%2Fu3HMhNrmj4QduC5nxbd1QMaKqD2bP3pOkxgHi%2BJBzftfWLdEk%2F%2FTgjrUNW10vM%2BVO4dQvoV002GOEVXuy8GRImherxII%2FRRqVhJ8FXCb6V9YKDFK%2FL7VRaE9ck7HicbAKKZ6tLBr9zxY2TyJCtniaue8AVgI8qwtZarORxCtPUt6Ai7N2nuKP%2FGuyLoqAiRzpJwRDG0AUxnxIXvDFl6kdLlujCqc6TGhXhY5%2B6u%2FyDc52MwbP0cIXe5GKwpOsZkzGTL9RrBkLqpIf61WD%2BI2ZxZxVW%2BF%2FV5wmi%2BUpCdO8h3gqPM1RCWsMNSkitAGOqUBGUHWkhIuQzp35DEJLeTIFFK5tO4aZ5Ltx%2FRAaDHpxbfMHx4Kn1qOlMgqJTQIB8c9vpcJCOK7nY6kp8xy8y4lIl8v6OK55JZ8wr6ZUgIgoJ89Lt0vtBGKkNsQXznMijjHP4WzuFZiqCbAgFTeqKKwtB7bsgKTmDrDii1%2FCZCzq8XGkGnAM8mx%2F5eH%2FwXSi3msco3x1ZDIOBKXsdFzStzFbs%2FSvHa4&X-Amz-Signature=8920def8ba7d0f8b2890227907156ea4c8db6f04b20b6e5205071014b33668ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZDLOFM%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCLp59HoQG%2BOusJtQ0AtTOj%2FuyqD15rKYO9XgGdn42diwIgAWwcs%2FINvog6ozgWeYu3l%2FV4%2BG7SmE3tK9I7VleiPAEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDC2y4iVYr%2BxmegQ%2B5ircA2RV2Mj6oXioXqWXqFY3vS84w1RsY%2BSDI90V5EUSzcjL2promIjhVZTAE4%2Bq9IW2%2Feoj9AGsWxrEH9rNwQPJMNAIZe2Vi2hDS9OonLRSCTvQgIctyVr26mXQFHNTu7vanj8n3NovUISAtjEe7wYSkUFOXDjJSiIxhPk%2FgVtHzqEvHaP7ly%2BPQGcbVkkt%2FqFaXw6qWSsVSFRIsCfabZTB5RAArEis0dDTGxi4YzDKyIuJgrGgVwduE%2FPUGA1PKJSiqkjbdeFxsmfHLRncPl9V0mZJoX2CMOePX0PlXkYIBABR%2BFbJP2Wn8j7vOLSZeNtzotVrEdb%2Fu3HMhNrmj4QduC5nxbd1QMaKqD2bP3pOkxgHi%2BJBzftfWLdEk%2F%2FTgjrUNW10vM%2BVO4dQvoV002GOEVXuy8GRImherxII%2FRRqVhJ8FXCb6V9YKDFK%2FL7VRaE9ck7HicbAKKZ6tLBr9zxY2TyJCtniaue8AVgI8qwtZarORxCtPUt6Ai7N2nuKP%2FGuyLoqAiRzpJwRDG0AUxnxIXvDFl6kdLlujCqc6TGhXhY5%2B6u%2FyDc52MwbP0cIXe5GKwpOsZkzGTL9RrBkLqpIf61WD%2BI2ZxZxVW%2BF%2FV5wmi%2BUpCdO8h3gqPM1RCWsMNSkitAGOqUBGUHWkhIuQzp35DEJLeTIFFK5tO4aZ5Ltx%2FRAaDHpxbfMHx4Kn1qOlMgqJTQIB8c9vpcJCOK7nY6kp8xy8y4lIl8v6OK55JZ8wr6ZUgIgoJ89Lt0vtBGKkNsQXznMijjHP4WzuFZiqCbAgFTeqKKwtB7bsgKTmDrDii1%2FCZCzq8XGkGnAM8mx%2F5eH%2FwXSi3msco3x1ZDIOBKXsdFzStzFbs%2FSvHa4&X-Amz-Signature=27c49feebd015e4efc8bce5b6d726c6b49380c3c4fcdb3ea6eddd86fc472fb77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKWNRXCD%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIArkPs6sMCGthlgc%2FZtONV%2FbnasO2AJH2wi1zMZbo1hfAiEAyuVfL6QV7ph4mvMEYS5MRy7yg3FUHGBRq%2BNe8b4ExEwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAu6Pg8s8YPZGO4jNyrcA6XGVuIQuOeeXbms6DVVy9MEIVQGiW%2BdYFJdSdsTpBweyLPYd2UfsfLIO5kbdZIqUBIFH58FLFImpCW4SOlbfujT4xuqvpvPCKhscMMyFo6d2wvOOKqy71NhzF%2F0V3egbZ56rW8SpHNFIawW%2F9FBcgU%2FSIUcMqFJWVKrXSnKslwS4qtZCi0LwuDB%2BAmajR34uEDLtK7NVy0A9tHW6IF%2FzIEtH1dTm9iXBzG9y2jo1pKFTyIGmywqix2Dodw17qUwdl%2FcQrYvHSzJK8UITr6Q%2Fr5juGqxwXfcCI0Flw1CTHnWchMwcmfMZelqDL6gYUUQGqyjsAxn7vLwjiQaBX5xOkEWjJC6%2FtDjdSWpWiov0Dq6461QdFfsXfOXpBhuQ2ELu6b8O6YHIyHx424Dt7W9kQlxQWlkV1TCITlMIqvz2WudJDCoxAiLWM3CzMV4zrXHLRLyNUDQ8ZYyPDtlIXUonHPunWQ8GO%2B3NbFpX%2FzDk%2FHO9eZkGCn34Hs1JLoXRODCbBQZ34DooXoJage6l3uDsIGvs9jH5y3kZHkZij8TNpgq%2FsDSw0zIlndf2Pj1aOczNrIeTB%2BOtwzGDihUvU1RVdajmqcXrFaDDhB9pX5aFMkKbUkhfHiB1pubXKbHMLukitAGOqUBeO4VIuf8eOKiDbQxY%2FHASXHpis%2FvYStERnijc9aWYUZaoJZ8fvEy7caMAB3HvRqVKrrdTL0OFrB%2F%2Bhh7GCVpp7HQ6Yr4rjMv1atsOxIPxU%2F7sAj%2Fnlw0fNWKBjBBmJzOgFOi%2BAEv9JpiIoLrx6Ek5Hr%2BUpUIGEV7OMBFUWxXu7o5Tb6BSRa2XzdqXPI%2FxDVnIkqTD8cC8oJgoykR%2FVjBvp7p7eg3&X-Amz-Signature=3c915dc5d9c500d7fe498b280b4c7f4ecc7f43d8fc5cfacceb4eb44b027ac3ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZDLOFM%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCLp59HoQG%2BOusJtQ0AtTOj%2FuyqD15rKYO9XgGdn42diwIgAWwcs%2FINvog6ozgWeYu3l%2FV4%2BG7SmE3tK9I7VleiPAEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDC2y4iVYr%2BxmegQ%2B5ircA2RV2Mj6oXioXqWXqFY3vS84w1RsY%2BSDI90V5EUSzcjL2promIjhVZTAE4%2Bq9IW2%2Feoj9AGsWxrEH9rNwQPJMNAIZe2Vi2hDS9OonLRSCTvQgIctyVr26mXQFHNTu7vanj8n3NovUISAtjEe7wYSkUFOXDjJSiIxhPk%2FgVtHzqEvHaP7ly%2BPQGcbVkkt%2FqFaXw6qWSsVSFRIsCfabZTB5RAArEis0dDTGxi4YzDKyIuJgrGgVwduE%2FPUGA1PKJSiqkjbdeFxsmfHLRncPl9V0mZJoX2CMOePX0PlXkYIBABR%2BFbJP2Wn8j7vOLSZeNtzotVrEdb%2Fu3HMhNrmj4QduC5nxbd1QMaKqD2bP3pOkxgHi%2BJBzftfWLdEk%2F%2FTgjrUNW10vM%2BVO4dQvoV002GOEVXuy8GRImherxII%2FRRqVhJ8FXCb6V9YKDFK%2FL7VRaE9ck7HicbAKKZ6tLBr9zxY2TyJCtniaue8AVgI8qwtZarORxCtPUt6Ai7N2nuKP%2FGuyLoqAiRzpJwRDG0AUxnxIXvDFl6kdLlujCqc6TGhXhY5%2B6u%2FyDc52MwbP0cIXe5GKwpOsZkzGTL9RrBkLqpIf61WD%2BI2ZxZxVW%2BF%2FV5wmi%2BUpCdO8h3gqPM1RCWsMNSkitAGOqUBGUHWkhIuQzp35DEJLeTIFFK5tO4aZ5Ltx%2FRAaDHpxbfMHx4Kn1qOlMgqJTQIB8c9vpcJCOK7nY6kp8xy8y4lIl8v6OK55JZ8wr6ZUgIgoJ89Lt0vtBGKkNsQXznMijjHP4WzuFZiqCbAgFTeqKKwtB7bsgKTmDrDii1%2FCZCzq8XGkGnAM8mx%2F5eH%2FwXSi3msco3x1ZDIOBKXsdFzStzFbs%2FSvHa4&X-Amz-Signature=0b0010439f09be27711e4dcffbaf1af1c89b5dc529e1a8a3b9a56ed2ddacc554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZDLOFM%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCLp59HoQG%2BOusJtQ0AtTOj%2FuyqD15rKYO9XgGdn42diwIgAWwcs%2FINvog6ozgWeYu3l%2FV4%2BG7SmE3tK9I7VleiPAEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDC2y4iVYr%2BxmegQ%2B5ircA2RV2Mj6oXioXqWXqFY3vS84w1RsY%2BSDI90V5EUSzcjL2promIjhVZTAE4%2Bq9IW2%2Feoj9AGsWxrEH9rNwQPJMNAIZe2Vi2hDS9OonLRSCTvQgIctyVr26mXQFHNTu7vanj8n3NovUISAtjEe7wYSkUFOXDjJSiIxhPk%2FgVtHzqEvHaP7ly%2BPQGcbVkkt%2FqFaXw6qWSsVSFRIsCfabZTB5RAArEis0dDTGxi4YzDKyIuJgrGgVwduE%2FPUGA1PKJSiqkjbdeFxsmfHLRncPl9V0mZJoX2CMOePX0PlXkYIBABR%2BFbJP2Wn8j7vOLSZeNtzotVrEdb%2Fu3HMhNrmj4QduC5nxbd1QMaKqD2bP3pOkxgHi%2BJBzftfWLdEk%2F%2FTgjrUNW10vM%2BVO4dQvoV002GOEVXuy8GRImherxII%2FRRqVhJ8FXCb6V9YKDFK%2FL7VRaE9ck7HicbAKKZ6tLBr9zxY2TyJCtniaue8AVgI8qwtZarORxCtPUt6Ai7N2nuKP%2FGuyLoqAiRzpJwRDG0AUxnxIXvDFl6kdLlujCqc6TGhXhY5%2B6u%2FyDc52MwbP0cIXe5GKwpOsZkzGTL9RrBkLqpIf61WD%2BI2ZxZxVW%2BF%2FV5wmi%2BUpCdO8h3gqPM1RCWsMNSkitAGOqUBGUHWkhIuQzp35DEJLeTIFFK5tO4aZ5Ltx%2FRAaDHpxbfMHx4Kn1qOlMgqJTQIB8c9vpcJCOK7nY6kp8xy8y4lIl8v6OK55JZ8wr6ZUgIgoJ89Lt0vtBGKkNsQXznMijjHP4WzuFZiqCbAgFTeqKKwtB7bsgKTmDrDii1%2FCZCzq8XGkGnAM8mx%2F5eH%2FwXSi3msco3x1ZDIOBKXsdFzStzFbs%2FSvHa4&X-Amz-Signature=e4982a659526d8d6ed5648d1cf943f788aad48e3d93781d9360d0f23c993e577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZDLOFM%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCLp59HoQG%2BOusJtQ0AtTOj%2FuyqD15rKYO9XgGdn42diwIgAWwcs%2FINvog6ozgWeYu3l%2FV4%2BG7SmE3tK9I7VleiPAEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDC2y4iVYr%2BxmegQ%2B5ircA2RV2Mj6oXioXqWXqFY3vS84w1RsY%2BSDI90V5EUSzcjL2promIjhVZTAE4%2Bq9IW2%2Feoj9AGsWxrEH9rNwQPJMNAIZe2Vi2hDS9OonLRSCTvQgIctyVr26mXQFHNTu7vanj8n3NovUISAtjEe7wYSkUFOXDjJSiIxhPk%2FgVtHzqEvHaP7ly%2BPQGcbVkkt%2FqFaXw6qWSsVSFRIsCfabZTB5RAArEis0dDTGxi4YzDKyIuJgrGgVwduE%2FPUGA1PKJSiqkjbdeFxsmfHLRncPl9V0mZJoX2CMOePX0PlXkYIBABR%2BFbJP2Wn8j7vOLSZeNtzotVrEdb%2Fu3HMhNrmj4QduC5nxbd1QMaKqD2bP3pOkxgHi%2BJBzftfWLdEk%2F%2FTgjrUNW10vM%2BVO4dQvoV002GOEVXuy8GRImherxII%2FRRqVhJ8FXCb6V9YKDFK%2FL7VRaE9ck7HicbAKKZ6tLBr9zxY2TyJCtniaue8AVgI8qwtZarORxCtPUt6Ai7N2nuKP%2FGuyLoqAiRzpJwRDG0AUxnxIXvDFl6kdLlujCqc6TGhXhY5%2B6u%2FyDc52MwbP0cIXe5GKwpOsZkzGTL9RrBkLqpIf61WD%2BI2ZxZxVW%2BF%2FV5wmi%2BUpCdO8h3gqPM1RCWsMNSkitAGOqUBGUHWkhIuQzp35DEJLeTIFFK5tO4aZ5Ltx%2FRAaDHpxbfMHx4Kn1qOlMgqJTQIB8c9vpcJCOK7nY6kp8xy8y4lIl8v6OK55JZ8wr6ZUgIgoJ89Lt0vtBGKkNsQXznMijjHP4WzuFZiqCbAgFTeqKKwtB7bsgKTmDrDii1%2FCZCzq8XGkGnAM8mx%2F5eH%2FwXSi3msco3x1ZDIOBKXsdFzStzFbs%2FSvHa4&X-Amz-Signature=e21c42d5da290eb6a9b962673614fe89358b4eba96dd8fa258befc16a1252788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZDLOFM%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCLp59HoQG%2BOusJtQ0AtTOj%2FuyqD15rKYO9XgGdn42diwIgAWwcs%2FINvog6ozgWeYu3l%2FV4%2BG7SmE3tK9I7VleiPAEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDC2y4iVYr%2BxmegQ%2B5ircA2RV2Mj6oXioXqWXqFY3vS84w1RsY%2BSDI90V5EUSzcjL2promIjhVZTAE4%2Bq9IW2%2Feoj9AGsWxrEH9rNwQPJMNAIZe2Vi2hDS9OonLRSCTvQgIctyVr26mXQFHNTu7vanj8n3NovUISAtjEe7wYSkUFOXDjJSiIxhPk%2FgVtHzqEvHaP7ly%2BPQGcbVkkt%2FqFaXw6qWSsVSFRIsCfabZTB5RAArEis0dDTGxi4YzDKyIuJgrGgVwduE%2FPUGA1PKJSiqkjbdeFxsmfHLRncPl9V0mZJoX2CMOePX0PlXkYIBABR%2BFbJP2Wn8j7vOLSZeNtzotVrEdb%2Fu3HMhNrmj4QduC5nxbd1QMaKqD2bP3pOkxgHi%2BJBzftfWLdEk%2F%2FTgjrUNW10vM%2BVO4dQvoV002GOEVXuy8GRImherxII%2FRRqVhJ8FXCb6V9YKDFK%2FL7VRaE9ck7HicbAKKZ6tLBr9zxY2TyJCtniaue8AVgI8qwtZarORxCtPUt6Ai7N2nuKP%2FGuyLoqAiRzpJwRDG0AUxnxIXvDFl6kdLlujCqc6TGhXhY5%2B6u%2FyDc52MwbP0cIXe5GKwpOsZkzGTL9RrBkLqpIf61WD%2BI2ZxZxVW%2BF%2FV5wmi%2BUpCdO8h3gqPM1RCWsMNSkitAGOqUBGUHWkhIuQzp35DEJLeTIFFK5tO4aZ5Ltx%2FRAaDHpxbfMHx4Kn1qOlMgqJTQIB8c9vpcJCOK7nY6kp8xy8y4lIl8v6OK55JZ8wr6ZUgIgoJ89Lt0vtBGKkNsQXznMijjHP4WzuFZiqCbAgFTeqKKwtB7bsgKTmDrDii1%2FCZCzq8XGkGnAM8mx%2F5eH%2FwXSi3msco3x1ZDIOBKXsdFzStzFbs%2FSvHa4&X-Amz-Signature=7822db92c17f641fd2b2095ab5df1c1853a2f1453ce0e6ac71e1f130756530df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZDLOFM%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCLp59HoQG%2BOusJtQ0AtTOj%2FuyqD15rKYO9XgGdn42diwIgAWwcs%2FINvog6ozgWeYu3l%2FV4%2BG7SmE3tK9I7VleiPAEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDC2y4iVYr%2BxmegQ%2B5ircA2RV2Mj6oXioXqWXqFY3vS84w1RsY%2BSDI90V5EUSzcjL2promIjhVZTAE4%2Bq9IW2%2Feoj9AGsWxrEH9rNwQPJMNAIZe2Vi2hDS9OonLRSCTvQgIctyVr26mXQFHNTu7vanj8n3NovUISAtjEe7wYSkUFOXDjJSiIxhPk%2FgVtHzqEvHaP7ly%2BPQGcbVkkt%2FqFaXw6qWSsVSFRIsCfabZTB5RAArEis0dDTGxi4YzDKyIuJgrGgVwduE%2FPUGA1PKJSiqkjbdeFxsmfHLRncPl9V0mZJoX2CMOePX0PlXkYIBABR%2BFbJP2Wn8j7vOLSZeNtzotVrEdb%2Fu3HMhNrmj4QduC5nxbd1QMaKqD2bP3pOkxgHi%2BJBzftfWLdEk%2F%2FTgjrUNW10vM%2BVO4dQvoV002GOEVXuy8GRImherxII%2FRRqVhJ8FXCb6V9YKDFK%2FL7VRaE9ck7HicbAKKZ6tLBr9zxY2TyJCtniaue8AVgI8qwtZarORxCtPUt6Ai7N2nuKP%2FGuyLoqAiRzpJwRDG0AUxnxIXvDFl6kdLlujCqc6TGhXhY5%2B6u%2FyDc52MwbP0cIXe5GKwpOsZkzGTL9RrBkLqpIf61WD%2BI2ZxZxVW%2BF%2FV5wmi%2BUpCdO8h3gqPM1RCWsMNSkitAGOqUBGUHWkhIuQzp35DEJLeTIFFK5tO4aZ5Ltx%2FRAaDHpxbfMHx4Kn1qOlMgqJTQIB8c9vpcJCOK7nY6kp8xy8y4lIl8v6OK55JZ8wr6ZUgIgoJ89Lt0vtBGKkNsQXznMijjHP4WzuFZiqCbAgFTeqKKwtB7bsgKTmDrDii1%2FCZCzq8XGkGnAM8mx%2F5eH%2FwXSi3msco3x1ZDIOBKXsdFzStzFbs%2FSvHa4&X-Amz-Signature=308360c1493c90a933414fb846770bf85adb45158810221c0d5ba189818e1607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZDLOFM%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCLp59HoQG%2BOusJtQ0AtTOj%2FuyqD15rKYO9XgGdn42diwIgAWwcs%2FINvog6ozgWeYu3l%2FV4%2BG7SmE3tK9I7VleiPAEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDC2y4iVYr%2BxmegQ%2B5ircA2RV2Mj6oXioXqWXqFY3vS84w1RsY%2BSDI90V5EUSzcjL2promIjhVZTAE4%2Bq9IW2%2Feoj9AGsWxrEH9rNwQPJMNAIZe2Vi2hDS9OonLRSCTvQgIctyVr26mXQFHNTu7vanj8n3NovUISAtjEe7wYSkUFOXDjJSiIxhPk%2FgVtHzqEvHaP7ly%2BPQGcbVkkt%2FqFaXw6qWSsVSFRIsCfabZTB5RAArEis0dDTGxi4YzDKyIuJgrGgVwduE%2FPUGA1PKJSiqkjbdeFxsmfHLRncPl9V0mZJoX2CMOePX0PlXkYIBABR%2BFbJP2Wn8j7vOLSZeNtzotVrEdb%2Fu3HMhNrmj4QduC5nxbd1QMaKqD2bP3pOkxgHi%2BJBzftfWLdEk%2F%2FTgjrUNW10vM%2BVO4dQvoV002GOEVXuy8GRImherxII%2FRRqVhJ8FXCb6V9YKDFK%2FL7VRaE9ck7HicbAKKZ6tLBr9zxY2TyJCtniaue8AVgI8qwtZarORxCtPUt6Ai7N2nuKP%2FGuyLoqAiRzpJwRDG0AUxnxIXvDFl6kdLlujCqc6TGhXhY5%2B6u%2FyDc52MwbP0cIXe5GKwpOsZkzGTL9RrBkLqpIf61WD%2BI2ZxZxVW%2BF%2FV5wmi%2BUpCdO8h3gqPM1RCWsMNSkitAGOqUBGUHWkhIuQzp35DEJLeTIFFK5tO4aZ5Ltx%2FRAaDHpxbfMHx4Kn1qOlMgqJTQIB8c9vpcJCOK7nY6kp8xy8y4lIl8v6OK55JZ8wr6ZUgIgoJ89Lt0vtBGKkNsQXznMijjHP4WzuFZiqCbAgFTeqKKwtB7bsgKTmDrDii1%2FCZCzq8XGkGnAM8mx%2F5eH%2FwXSi3msco3x1ZDIOBKXsdFzStzFbs%2FSvHa4&X-Amz-Signature=172406b33155213d5c9d7a89ffa6d71dd2ae237840058713a51ea8a6aa22d1c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


