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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IGV6EGG%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRE50IyiAuFAujBKbG7IXwAy74tqsaTkDYLcvNgp%2B9OAiEA6L3D6SrqZvhRbNgagkj2BU2WXYqiaBOpe1b%2FXKNvqDgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBs87Qt3Ow1HoSryYSrcA6sV6geqCLz4OtBXoFA8yYxLxc36Y%2BGh%2BNZKHjbv1q08kTiMmoyCfMp4a5x23k%2Fr7O09ZLqrvvCm%2Fks%2BIZyY5qoy1t5%2FxsYO1RVa4Q35Bug%2Fn%2BsWlyeJhRLRCe6sDEN7CRNi9g2%2BXmeLP8b27QIhquOv5cAvOYWiVqkdyEwBf%2FaGElkGbGPgZYg7wnqhUj7kkcIE5VQgxpBu4gOrbinaLmVBsywiMsGV3yCz%2F%2Bc6I%2BF6DB0OfWIWIhoV1bW1s1sFU28zXuliTsOidIL1iBH18vDiTNjT9%2FXB8wN3tF6XHfGsFPPIH2r%2BPlV6mK1c%2BdRtMgNTV1j3trpPAauAFW7uU%2FG9Xc0SSG75oRIgmYET1ivUovmMqhFfQNY4GhNCxgVR08r16og2JOfYwFaBtDElebxdRf68%2BpuW0hpDgSgrFemdfzqBBHPu%2FJzhwvs16AptEnDiHDidM0omrGgUiQ1d3UuV3v9jwQCfRsgoCHn4tjr%2FLwS4i0v3zm2QQ8bCXa4dbc3ewGCGAGs%2FbZbNosfcqB%2FaG6m29AjXgiZJX%2FhtpWJpyKZXMBGeLRGB3dtVw%2FH1Q2YJVIn9nS7zo2NnIeECpasR0Somu0lOdqDfb%2Bm%2FC7xxGttDemQ37Kb6C0HxMKPLk8kGOqUBqO%2BgtPeFIZAt6W%2BW6JVTEzMbdXKoPD091SZlybcKwvpBRVXrrAHENoua6YseF9GQpvYzy9Khob2rbW%2BzB7eVV1QsxcpKyy1EShC%2BRZQGYvVacPEyZ5k9xfNyC5F8sr4qwvXyfY1G4KWSVYo9MeKGFGzhEbuG9WGZVEPmGqSoJ2u306MoAny7lLU06QeMKqy8%2BBynSVWdYBuypJrOZupYFxMTfU3K&X-Amz-Signature=08343f3ca25528f8bf8fbef1cdc2f11b65a7633bd024f493be6b9deded3585b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IGV6EGG%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRE50IyiAuFAujBKbG7IXwAy74tqsaTkDYLcvNgp%2B9OAiEA6L3D6SrqZvhRbNgagkj2BU2WXYqiaBOpe1b%2FXKNvqDgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBs87Qt3Ow1HoSryYSrcA6sV6geqCLz4OtBXoFA8yYxLxc36Y%2BGh%2BNZKHjbv1q08kTiMmoyCfMp4a5x23k%2Fr7O09ZLqrvvCm%2Fks%2BIZyY5qoy1t5%2FxsYO1RVa4Q35Bug%2Fn%2BsWlyeJhRLRCe6sDEN7CRNi9g2%2BXmeLP8b27QIhquOv5cAvOYWiVqkdyEwBf%2FaGElkGbGPgZYg7wnqhUj7kkcIE5VQgxpBu4gOrbinaLmVBsywiMsGV3yCz%2F%2Bc6I%2BF6DB0OfWIWIhoV1bW1s1sFU28zXuliTsOidIL1iBH18vDiTNjT9%2FXB8wN3tF6XHfGsFPPIH2r%2BPlV6mK1c%2BdRtMgNTV1j3trpPAauAFW7uU%2FG9Xc0SSG75oRIgmYET1ivUovmMqhFfQNY4GhNCxgVR08r16og2JOfYwFaBtDElebxdRf68%2BpuW0hpDgSgrFemdfzqBBHPu%2FJzhwvs16AptEnDiHDidM0omrGgUiQ1d3UuV3v9jwQCfRsgoCHn4tjr%2FLwS4i0v3zm2QQ8bCXa4dbc3ewGCGAGs%2FbZbNosfcqB%2FaG6m29AjXgiZJX%2FhtpWJpyKZXMBGeLRGB3dtVw%2FH1Q2YJVIn9nS7zo2NnIeECpasR0Somu0lOdqDfb%2Bm%2FC7xxGttDemQ37Kb6C0HxMKPLk8kGOqUBqO%2BgtPeFIZAt6W%2BW6JVTEzMbdXKoPD091SZlybcKwvpBRVXrrAHENoua6YseF9GQpvYzy9Khob2rbW%2BzB7eVV1QsxcpKyy1EShC%2BRZQGYvVacPEyZ5k9xfNyC5F8sr4qwvXyfY1G4KWSVYo9MeKGFGzhEbuG9WGZVEPmGqSoJ2u306MoAny7lLU06QeMKqy8%2BBynSVWdYBuypJrOZupYFxMTfU3K&X-Amz-Signature=2d430976eeeb5d230f53509dcc08bf4348cb4c1a7ae2b12d787272b4bf5a4c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IGV6EGG%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRE50IyiAuFAujBKbG7IXwAy74tqsaTkDYLcvNgp%2B9OAiEA6L3D6SrqZvhRbNgagkj2BU2WXYqiaBOpe1b%2FXKNvqDgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBs87Qt3Ow1HoSryYSrcA6sV6geqCLz4OtBXoFA8yYxLxc36Y%2BGh%2BNZKHjbv1q08kTiMmoyCfMp4a5x23k%2Fr7O09ZLqrvvCm%2Fks%2BIZyY5qoy1t5%2FxsYO1RVa4Q35Bug%2Fn%2BsWlyeJhRLRCe6sDEN7CRNi9g2%2BXmeLP8b27QIhquOv5cAvOYWiVqkdyEwBf%2FaGElkGbGPgZYg7wnqhUj7kkcIE5VQgxpBu4gOrbinaLmVBsywiMsGV3yCz%2F%2Bc6I%2BF6DB0OfWIWIhoV1bW1s1sFU28zXuliTsOidIL1iBH18vDiTNjT9%2FXB8wN3tF6XHfGsFPPIH2r%2BPlV6mK1c%2BdRtMgNTV1j3trpPAauAFW7uU%2FG9Xc0SSG75oRIgmYET1ivUovmMqhFfQNY4GhNCxgVR08r16og2JOfYwFaBtDElebxdRf68%2BpuW0hpDgSgrFemdfzqBBHPu%2FJzhwvs16AptEnDiHDidM0omrGgUiQ1d3UuV3v9jwQCfRsgoCHn4tjr%2FLwS4i0v3zm2QQ8bCXa4dbc3ewGCGAGs%2FbZbNosfcqB%2FaG6m29AjXgiZJX%2FhtpWJpyKZXMBGeLRGB3dtVw%2FH1Q2YJVIn9nS7zo2NnIeECpasR0Somu0lOdqDfb%2Bm%2FC7xxGttDemQ37Kb6C0HxMKPLk8kGOqUBqO%2BgtPeFIZAt6W%2BW6JVTEzMbdXKoPD091SZlybcKwvpBRVXrrAHENoua6YseF9GQpvYzy9Khob2rbW%2BzB7eVV1QsxcpKyy1EShC%2BRZQGYvVacPEyZ5k9xfNyC5F8sr4qwvXyfY1G4KWSVYo9MeKGFGzhEbuG9WGZVEPmGqSoJ2u306MoAny7lLU06QeMKqy8%2BBynSVWdYBuypJrOZupYFxMTfU3K&X-Amz-Signature=45a3612f3ccbd556ae7ec8f55d30870b97c9bfaf1942cc175a896908e8f71dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IGV6EGG%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRE50IyiAuFAujBKbG7IXwAy74tqsaTkDYLcvNgp%2B9OAiEA6L3D6SrqZvhRbNgagkj2BU2WXYqiaBOpe1b%2FXKNvqDgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBs87Qt3Ow1HoSryYSrcA6sV6geqCLz4OtBXoFA8yYxLxc36Y%2BGh%2BNZKHjbv1q08kTiMmoyCfMp4a5x23k%2Fr7O09ZLqrvvCm%2Fks%2BIZyY5qoy1t5%2FxsYO1RVa4Q35Bug%2Fn%2BsWlyeJhRLRCe6sDEN7CRNi9g2%2BXmeLP8b27QIhquOv5cAvOYWiVqkdyEwBf%2FaGElkGbGPgZYg7wnqhUj7kkcIE5VQgxpBu4gOrbinaLmVBsywiMsGV3yCz%2F%2Bc6I%2BF6DB0OfWIWIhoV1bW1s1sFU28zXuliTsOidIL1iBH18vDiTNjT9%2FXB8wN3tF6XHfGsFPPIH2r%2BPlV6mK1c%2BdRtMgNTV1j3trpPAauAFW7uU%2FG9Xc0SSG75oRIgmYET1ivUovmMqhFfQNY4GhNCxgVR08r16og2JOfYwFaBtDElebxdRf68%2BpuW0hpDgSgrFemdfzqBBHPu%2FJzhwvs16AptEnDiHDidM0omrGgUiQ1d3UuV3v9jwQCfRsgoCHn4tjr%2FLwS4i0v3zm2QQ8bCXa4dbc3ewGCGAGs%2FbZbNosfcqB%2FaG6m29AjXgiZJX%2FhtpWJpyKZXMBGeLRGB3dtVw%2FH1Q2YJVIn9nS7zo2NnIeECpasR0Somu0lOdqDfb%2Bm%2FC7xxGttDemQ37Kb6C0HxMKPLk8kGOqUBqO%2BgtPeFIZAt6W%2BW6JVTEzMbdXKoPD091SZlybcKwvpBRVXrrAHENoua6YseF9GQpvYzy9Khob2rbW%2BzB7eVV1QsxcpKyy1EShC%2BRZQGYvVacPEyZ5k9xfNyC5F8sr4qwvXyfY1G4KWSVYo9MeKGFGzhEbuG9WGZVEPmGqSoJ2u306MoAny7lLU06QeMKqy8%2BBynSVWdYBuypJrOZupYFxMTfU3K&X-Amz-Signature=037e95ec4ea8b055e0770c4e3a20162ec24093cbdf33d7fde46dcba57d3905d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IXOF2SA%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0p17PNVvbXsPWiN7kpWXv07jia1BdHBJAHXMPdoGzWAiEAtOCVoPjZDENCAglYymPC4aVUihyVXJtFqWmfmd8i%2Bywq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDE9h%2BzIvtfrSEvFO8CrcAzr46%2FBCcKKzlD9kjIunAygLvecjHiuYZG79DKA6cuRGuQxkbKH2nUbZikbprmOxEAPAz0%2BIyKJbnZVTAT0rexZXG1oxGnxiT5itkaKYa%2Fy3uUOSPmVsp4gejVorncHgD1cDup8Wwpp3oa3Ua4T2VLk8gjyP7bAvtdXK10%2B291tkHFPguJcKiEzNNltG%2BcQS4OBDEU9JmXTQcP%2B8%2FKtMr%2FdEQ7WEn4moy37qUc5xuFavsp9b%2Bw8IDTH9HH%2BcVM7b54enT%2FiLw0V5J%2BO32GM5k2J2VEwxPysoHsmVYJ8%2Ba%2BQDdi%2F9Ugja4lKNF7xIYiV34KRBkPHYpIUMUYyKOWUeCMGFyBH%2BX3ut0plLpAfSOfzvXptRZWYO6BTqpSyjR6Td1VJawTcEQPa2WKl%2BVA%2Ff4ICGOl%2FDjFjCRqgtaTzAWFdvV6pa5%2FrV%2FMZEZ28UpGx%2FXZO3v8zti15DYbNxv48hgtOlAwirtuvvaB%2Bq4bky1xHVBtaYIQrL48GVlLB9QIV6k1qfNgBuBzZQTU8DdaxVp53Aa2o4Z8cLqFj77ygZF3GnQmrcez%2FfWLzHcbY0wy3RZTvrgUHv7OIzqjVKEV60RNiTIWQUkrwkd5Hur6CFg6VtZKf%2BL%2FmGisd873iqMOTKk8kGOqUBxmZFBI6fIfXWNVFJH1sZJWA9eFSMAe1OMwhPuQSigBsq7IHLUH87AR%2BMS2c5XQU%2Bq4BnJiwCCYbTLZ6IbomdYLlILuAooaZ9acOQdQBZQZ0gFRwC1fi8LDWOi%2Bo2nDEe8J3ccS4iIzp0BY044RG%2FvVuAly1CJF%2BvJwDA4psqp19Lit1pQBwyS9wukwPUiWOqZNCQ1W7BK50768VTSLtNwwCAQFRE&X-Amz-Signature=a6cb1a4a32dad839e2ee353916418cae245f02dde50bef1bcd78baba904dce00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IGV6EGG%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRE50IyiAuFAujBKbG7IXwAy74tqsaTkDYLcvNgp%2B9OAiEA6L3D6SrqZvhRbNgagkj2BU2WXYqiaBOpe1b%2FXKNvqDgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBs87Qt3Ow1HoSryYSrcA6sV6geqCLz4OtBXoFA8yYxLxc36Y%2BGh%2BNZKHjbv1q08kTiMmoyCfMp4a5x23k%2Fr7O09ZLqrvvCm%2Fks%2BIZyY5qoy1t5%2FxsYO1RVa4Q35Bug%2Fn%2BsWlyeJhRLRCe6sDEN7CRNi9g2%2BXmeLP8b27QIhquOv5cAvOYWiVqkdyEwBf%2FaGElkGbGPgZYg7wnqhUj7kkcIE5VQgxpBu4gOrbinaLmVBsywiMsGV3yCz%2F%2Bc6I%2BF6DB0OfWIWIhoV1bW1s1sFU28zXuliTsOidIL1iBH18vDiTNjT9%2FXB8wN3tF6XHfGsFPPIH2r%2BPlV6mK1c%2BdRtMgNTV1j3trpPAauAFW7uU%2FG9Xc0SSG75oRIgmYET1ivUovmMqhFfQNY4GhNCxgVR08r16og2JOfYwFaBtDElebxdRf68%2BpuW0hpDgSgrFemdfzqBBHPu%2FJzhwvs16AptEnDiHDidM0omrGgUiQ1d3UuV3v9jwQCfRsgoCHn4tjr%2FLwS4i0v3zm2QQ8bCXa4dbc3ewGCGAGs%2FbZbNosfcqB%2FaG6m29AjXgiZJX%2FhtpWJpyKZXMBGeLRGB3dtVw%2FH1Q2YJVIn9nS7zo2NnIeECpasR0Somu0lOdqDfb%2Bm%2FC7xxGttDemQ37Kb6C0HxMKPLk8kGOqUBqO%2BgtPeFIZAt6W%2BW6JVTEzMbdXKoPD091SZlybcKwvpBRVXrrAHENoua6YseF9GQpvYzy9Khob2rbW%2BzB7eVV1QsxcpKyy1EShC%2BRZQGYvVacPEyZ5k9xfNyC5F8sr4qwvXyfY1G4KWSVYo9MeKGFGzhEbuG9WGZVEPmGqSoJ2u306MoAny7lLU06QeMKqy8%2BBynSVWdYBuypJrOZupYFxMTfU3K&X-Amz-Signature=0b25cccc2f91965619470d1bd2d675c3d51429046c4d3c9fa8c3582663f312dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IGV6EGG%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRE50IyiAuFAujBKbG7IXwAy74tqsaTkDYLcvNgp%2B9OAiEA6L3D6SrqZvhRbNgagkj2BU2WXYqiaBOpe1b%2FXKNvqDgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBs87Qt3Ow1HoSryYSrcA6sV6geqCLz4OtBXoFA8yYxLxc36Y%2BGh%2BNZKHjbv1q08kTiMmoyCfMp4a5x23k%2Fr7O09ZLqrvvCm%2Fks%2BIZyY5qoy1t5%2FxsYO1RVa4Q35Bug%2Fn%2BsWlyeJhRLRCe6sDEN7CRNi9g2%2BXmeLP8b27QIhquOv5cAvOYWiVqkdyEwBf%2FaGElkGbGPgZYg7wnqhUj7kkcIE5VQgxpBu4gOrbinaLmVBsywiMsGV3yCz%2F%2Bc6I%2BF6DB0OfWIWIhoV1bW1s1sFU28zXuliTsOidIL1iBH18vDiTNjT9%2FXB8wN3tF6XHfGsFPPIH2r%2BPlV6mK1c%2BdRtMgNTV1j3trpPAauAFW7uU%2FG9Xc0SSG75oRIgmYET1ivUovmMqhFfQNY4GhNCxgVR08r16og2JOfYwFaBtDElebxdRf68%2BpuW0hpDgSgrFemdfzqBBHPu%2FJzhwvs16AptEnDiHDidM0omrGgUiQ1d3UuV3v9jwQCfRsgoCHn4tjr%2FLwS4i0v3zm2QQ8bCXa4dbc3ewGCGAGs%2FbZbNosfcqB%2FaG6m29AjXgiZJX%2FhtpWJpyKZXMBGeLRGB3dtVw%2FH1Q2YJVIn9nS7zo2NnIeECpasR0Somu0lOdqDfb%2Bm%2FC7xxGttDemQ37Kb6C0HxMKPLk8kGOqUBqO%2BgtPeFIZAt6W%2BW6JVTEzMbdXKoPD091SZlybcKwvpBRVXrrAHENoua6YseF9GQpvYzy9Khob2rbW%2BzB7eVV1QsxcpKyy1EShC%2BRZQGYvVacPEyZ5k9xfNyC5F8sr4qwvXyfY1G4KWSVYo9MeKGFGzhEbuG9WGZVEPmGqSoJ2u306MoAny7lLU06QeMKqy8%2BBynSVWdYBuypJrOZupYFxMTfU3K&X-Amz-Signature=372a8603afbd79e228cfa3d7ca1b020ef5aad764eb53c0fb34a814a83b4637bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IGV6EGG%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRE50IyiAuFAujBKbG7IXwAy74tqsaTkDYLcvNgp%2B9OAiEA6L3D6SrqZvhRbNgagkj2BU2WXYqiaBOpe1b%2FXKNvqDgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBs87Qt3Ow1HoSryYSrcA6sV6geqCLz4OtBXoFA8yYxLxc36Y%2BGh%2BNZKHjbv1q08kTiMmoyCfMp4a5x23k%2Fr7O09ZLqrvvCm%2Fks%2BIZyY5qoy1t5%2FxsYO1RVa4Q35Bug%2Fn%2BsWlyeJhRLRCe6sDEN7CRNi9g2%2BXmeLP8b27QIhquOv5cAvOYWiVqkdyEwBf%2FaGElkGbGPgZYg7wnqhUj7kkcIE5VQgxpBu4gOrbinaLmVBsywiMsGV3yCz%2F%2Bc6I%2BF6DB0OfWIWIhoV1bW1s1sFU28zXuliTsOidIL1iBH18vDiTNjT9%2FXB8wN3tF6XHfGsFPPIH2r%2BPlV6mK1c%2BdRtMgNTV1j3trpPAauAFW7uU%2FG9Xc0SSG75oRIgmYET1ivUovmMqhFfQNY4GhNCxgVR08r16og2JOfYwFaBtDElebxdRf68%2BpuW0hpDgSgrFemdfzqBBHPu%2FJzhwvs16AptEnDiHDidM0omrGgUiQ1d3UuV3v9jwQCfRsgoCHn4tjr%2FLwS4i0v3zm2QQ8bCXa4dbc3ewGCGAGs%2FbZbNosfcqB%2FaG6m29AjXgiZJX%2FhtpWJpyKZXMBGeLRGB3dtVw%2FH1Q2YJVIn9nS7zo2NnIeECpasR0Somu0lOdqDfb%2Bm%2FC7xxGttDemQ37Kb6C0HxMKPLk8kGOqUBqO%2BgtPeFIZAt6W%2BW6JVTEzMbdXKoPD091SZlybcKwvpBRVXrrAHENoua6YseF9GQpvYzy9Khob2rbW%2BzB7eVV1QsxcpKyy1EShC%2BRZQGYvVacPEyZ5k9xfNyC5F8sr4qwvXyfY1G4KWSVYo9MeKGFGzhEbuG9WGZVEPmGqSoJ2u306MoAny7lLU06QeMKqy8%2BBynSVWdYBuypJrOZupYFxMTfU3K&X-Amz-Signature=d7784d3b189d679a5d7a127bf34af6d7e38f3b79050d2eb631b7e3b72a3887ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IGV6EGG%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRE50IyiAuFAujBKbG7IXwAy74tqsaTkDYLcvNgp%2B9OAiEA6L3D6SrqZvhRbNgagkj2BU2WXYqiaBOpe1b%2FXKNvqDgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBs87Qt3Ow1HoSryYSrcA6sV6geqCLz4OtBXoFA8yYxLxc36Y%2BGh%2BNZKHjbv1q08kTiMmoyCfMp4a5x23k%2Fr7O09ZLqrvvCm%2Fks%2BIZyY5qoy1t5%2FxsYO1RVa4Q35Bug%2Fn%2BsWlyeJhRLRCe6sDEN7CRNi9g2%2BXmeLP8b27QIhquOv5cAvOYWiVqkdyEwBf%2FaGElkGbGPgZYg7wnqhUj7kkcIE5VQgxpBu4gOrbinaLmVBsywiMsGV3yCz%2F%2Bc6I%2BF6DB0OfWIWIhoV1bW1s1sFU28zXuliTsOidIL1iBH18vDiTNjT9%2FXB8wN3tF6XHfGsFPPIH2r%2BPlV6mK1c%2BdRtMgNTV1j3trpPAauAFW7uU%2FG9Xc0SSG75oRIgmYET1ivUovmMqhFfQNY4GhNCxgVR08r16og2JOfYwFaBtDElebxdRf68%2BpuW0hpDgSgrFemdfzqBBHPu%2FJzhwvs16AptEnDiHDidM0omrGgUiQ1d3UuV3v9jwQCfRsgoCHn4tjr%2FLwS4i0v3zm2QQ8bCXa4dbc3ewGCGAGs%2FbZbNosfcqB%2FaG6m29AjXgiZJX%2FhtpWJpyKZXMBGeLRGB3dtVw%2FH1Q2YJVIn9nS7zo2NnIeECpasR0Somu0lOdqDfb%2Bm%2FC7xxGttDemQ37Kb6C0HxMKPLk8kGOqUBqO%2BgtPeFIZAt6W%2BW6JVTEzMbdXKoPD091SZlybcKwvpBRVXrrAHENoua6YseF9GQpvYzy9Khob2rbW%2BzB7eVV1QsxcpKyy1EShC%2BRZQGYvVacPEyZ5k9xfNyC5F8sr4qwvXyfY1G4KWSVYo9MeKGFGzhEbuG9WGZVEPmGqSoJ2u306MoAny7lLU06QeMKqy8%2BBynSVWdYBuypJrOZupYFxMTfU3K&X-Amz-Signature=82fc8a193bc462106efd7265d990c0828472bc1807fc734d5bfe944cdc64c4ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IGV6EGG%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRE50IyiAuFAujBKbG7IXwAy74tqsaTkDYLcvNgp%2B9OAiEA6L3D6SrqZvhRbNgagkj2BU2WXYqiaBOpe1b%2FXKNvqDgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBs87Qt3Ow1HoSryYSrcA6sV6geqCLz4OtBXoFA8yYxLxc36Y%2BGh%2BNZKHjbv1q08kTiMmoyCfMp4a5x23k%2Fr7O09ZLqrvvCm%2Fks%2BIZyY5qoy1t5%2FxsYO1RVa4Q35Bug%2Fn%2BsWlyeJhRLRCe6sDEN7CRNi9g2%2BXmeLP8b27QIhquOv5cAvOYWiVqkdyEwBf%2FaGElkGbGPgZYg7wnqhUj7kkcIE5VQgxpBu4gOrbinaLmVBsywiMsGV3yCz%2F%2Bc6I%2BF6DB0OfWIWIhoV1bW1s1sFU28zXuliTsOidIL1iBH18vDiTNjT9%2FXB8wN3tF6XHfGsFPPIH2r%2BPlV6mK1c%2BdRtMgNTV1j3trpPAauAFW7uU%2FG9Xc0SSG75oRIgmYET1ivUovmMqhFfQNY4GhNCxgVR08r16og2JOfYwFaBtDElebxdRf68%2BpuW0hpDgSgrFemdfzqBBHPu%2FJzhwvs16AptEnDiHDidM0omrGgUiQ1d3UuV3v9jwQCfRsgoCHn4tjr%2FLwS4i0v3zm2QQ8bCXa4dbc3ewGCGAGs%2FbZbNosfcqB%2FaG6m29AjXgiZJX%2FhtpWJpyKZXMBGeLRGB3dtVw%2FH1Q2YJVIn9nS7zo2NnIeECpasR0Somu0lOdqDfb%2Bm%2FC7xxGttDemQ37Kb6C0HxMKPLk8kGOqUBqO%2BgtPeFIZAt6W%2BW6JVTEzMbdXKoPD091SZlybcKwvpBRVXrrAHENoua6YseF9GQpvYzy9Khob2rbW%2BzB7eVV1QsxcpKyy1EShC%2BRZQGYvVacPEyZ5k9xfNyC5F8sr4qwvXyfY1G4KWSVYo9MeKGFGzhEbuG9WGZVEPmGqSoJ2u306MoAny7lLU06QeMKqy8%2BBynSVWdYBuypJrOZupYFxMTfU3K&X-Amz-Signature=f9049ed59eb1369b283d05c8c1c745ac7253ab43954079e2a6c130f6078059a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IGV6EGG%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRE50IyiAuFAujBKbG7IXwAy74tqsaTkDYLcvNgp%2B9OAiEA6L3D6SrqZvhRbNgagkj2BU2WXYqiaBOpe1b%2FXKNvqDgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBs87Qt3Ow1HoSryYSrcA6sV6geqCLz4OtBXoFA8yYxLxc36Y%2BGh%2BNZKHjbv1q08kTiMmoyCfMp4a5x23k%2Fr7O09ZLqrvvCm%2Fks%2BIZyY5qoy1t5%2FxsYO1RVa4Q35Bug%2Fn%2BsWlyeJhRLRCe6sDEN7CRNi9g2%2BXmeLP8b27QIhquOv5cAvOYWiVqkdyEwBf%2FaGElkGbGPgZYg7wnqhUj7kkcIE5VQgxpBu4gOrbinaLmVBsywiMsGV3yCz%2F%2Bc6I%2BF6DB0OfWIWIhoV1bW1s1sFU28zXuliTsOidIL1iBH18vDiTNjT9%2FXB8wN3tF6XHfGsFPPIH2r%2BPlV6mK1c%2BdRtMgNTV1j3trpPAauAFW7uU%2FG9Xc0SSG75oRIgmYET1ivUovmMqhFfQNY4GhNCxgVR08r16og2JOfYwFaBtDElebxdRf68%2BpuW0hpDgSgrFemdfzqBBHPu%2FJzhwvs16AptEnDiHDidM0omrGgUiQ1d3UuV3v9jwQCfRsgoCHn4tjr%2FLwS4i0v3zm2QQ8bCXa4dbc3ewGCGAGs%2FbZbNosfcqB%2FaG6m29AjXgiZJX%2FhtpWJpyKZXMBGeLRGB3dtVw%2FH1Q2YJVIn9nS7zo2NnIeECpasR0Somu0lOdqDfb%2Bm%2FC7xxGttDemQ37Kb6C0HxMKPLk8kGOqUBqO%2BgtPeFIZAt6W%2BW6JVTEzMbdXKoPD091SZlybcKwvpBRVXrrAHENoua6YseF9GQpvYzy9Khob2rbW%2BzB7eVV1QsxcpKyy1EShC%2BRZQGYvVacPEyZ5k9xfNyC5F8sr4qwvXyfY1G4KWSVYo9MeKGFGzhEbuG9WGZVEPmGqSoJ2u306MoAny7lLU06QeMKqy8%2BBynSVWdYBuypJrOZupYFxMTfU3K&X-Amz-Signature=6f755c93702be11dd4e4d2b7e7daf033f0472ac15afe1b094d04adde2e3e5fa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


