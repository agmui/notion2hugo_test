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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SFE3YZJ%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw0Ihd4Qo7NOsfmhIK6GyFQJ4wE5SMZBPW%2FgUWFsqt7AIhANTAZujr1GlH6p8I1%2BQmvsayw3azP7%2BDpH6CRbN7s%2BNHKv8DCCEQABoMNjM3NDIzMTgzODA1IgyoG7fbl%2B6y0UNNi8kq3APQY6ZRvYEv6%2Fnx00hjIAxX%2FdV3ZHErjjUeCz0SgNgmM9zTZ5GvKVHhzoyJyaWChCAHmFgMYYi19r6FQ0L6yeFULUo0ZCToW88bsFW52wGWMjOsGA8aycHmVa5CwxDN6q9pgw%2BdUJYtoaMTdPK3DibzOF3TG%2Bkph66H3PfTD%2FEV%2BrCa3oU1sx3myP2%2BQWESqyAwKXSUnfz2NQpVqMxY3K%2BVQqzlztBYgHNZJ4Ms%2B426EvgG6CCc%2FYxRZHRuyBpKXa%2BRG4KJCAQS6KC9gt0S46fDpJ71eb8EwAyvQuoh9AfUona1Qw%2BLvsR70vBlqaeHlxYcoA65hhxPLqLelnem36R%2F0VIpHVk5RnqoS3RMry%2B65a4G3jU5mA9CexhnD9aUAYQ5zbHr7I5MrNn24F3jLixOQfvxCfT1FdI9ambsGXH2cOoFP9dJ%2FflGeu8HUhbJn8xJc82V82brm2QlGX6Wb0JJxp7zg%2FpO%2FmuEfThchCUJFZ6qR2tZyUapANgZA9esQYoO8NrDkMOxAsn9orQDbQfnlpy1kpytLwZRMmgeEQIgJ60YfwefYAggwMUEcPRMCIp3gTFY6pgFWLrzJELi7glfKzLCeNlULjJVB81wHzNPstGrqBE9rsr%2BBiPWZTCNjqTFBjqkAbBB6nUYSsNomLp3zt3NmkBO3WINkPiDVTOyVC7z4lo2nJJb8cRIMeACC0VdRU3UwlXL7Rz9ikg4Mb7ugXIc51o7IE4Rso1t%2FjaISreJ7pBYZxBHeGX1yXLmd2sn3objFZNovG5%2FgSddhipHvuZaSl2xgyD66P3xfa%2FjDtHk10%2FqjZ0qcV28LZVExBRiino5jaSconi2eODyUt5LS25OuZxgTJTx&X-Amz-Signature=2406004102a837508af93cfdef001b0813f37b2f321cfacc70b1cdcf971ae2e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SFE3YZJ%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw0Ihd4Qo7NOsfmhIK6GyFQJ4wE5SMZBPW%2FgUWFsqt7AIhANTAZujr1GlH6p8I1%2BQmvsayw3azP7%2BDpH6CRbN7s%2BNHKv8DCCEQABoMNjM3NDIzMTgzODA1IgyoG7fbl%2B6y0UNNi8kq3APQY6ZRvYEv6%2Fnx00hjIAxX%2FdV3ZHErjjUeCz0SgNgmM9zTZ5GvKVHhzoyJyaWChCAHmFgMYYi19r6FQ0L6yeFULUo0ZCToW88bsFW52wGWMjOsGA8aycHmVa5CwxDN6q9pgw%2BdUJYtoaMTdPK3DibzOF3TG%2Bkph66H3PfTD%2FEV%2BrCa3oU1sx3myP2%2BQWESqyAwKXSUnfz2NQpVqMxY3K%2BVQqzlztBYgHNZJ4Ms%2B426EvgG6CCc%2FYxRZHRuyBpKXa%2BRG4KJCAQS6KC9gt0S46fDpJ71eb8EwAyvQuoh9AfUona1Qw%2BLvsR70vBlqaeHlxYcoA65hhxPLqLelnem36R%2F0VIpHVk5RnqoS3RMry%2B65a4G3jU5mA9CexhnD9aUAYQ5zbHr7I5MrNn24F3jLixOQfvxCfT1FdI9ambsGXH2cOoFP9dJ%2FflGeu8HUhbJn8xJc82V82brm2QlGX6Wb0JJxp7zg%2FpO%2FmuEfThchCUJFZ6qR2tZyUapANgZA9esQYoO8NrDkMOxAsn9orQDbQfnlpy1kpytLwZRMmgeEQIgJ60YfwefYAggwMUEcPRMCIp3gTFY6pgFWLrzJELi7glfKzLCeNlULjJVB81wHzNPstGrqBE9rsr%2BBiPWZTCNjqTFBjqkAbBB6nUYSsNomLp3zt3NmkBO3WINkPiDVTOyVC7z4lo2nJJb8cRIMeACC0VdRU3UwlXL7Rz9ikg4Mb7ugXIc51o7IE4Rso1t%2FjaISreJ7pBYZxBHeGX1yXLmd2sn3objFZNovG5%2FgSddhipHvuZaSl2xgyD66P3xfa%2FjDtHk10%2FqjZ0qcV28LZVExBRiino5jaSconi2eODyUt5LS25OuZxgTJTx&X-Amz-Signature=403d8726115f8f262914e8f3a0d4687604cbd7646397b2cb7bb3b6ac81c8bfa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SFE3YZJ%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw0Ihd4Qo7NOsfmhIK6GyFQJ4wE5SMZBPW%2FgUWFsqt7AIhANTAZujr1GlH6p8I1%2BQmvsayw3azP7%2BDpH6CRbN7s%2BNHKv8DCCEQABoMNjM3NDIzMTgzODA1IgyoG7fbl%2B6y0UNNi8kq3APQY6ZRvYEv6%2Fnx00hjIAxX%2FdV3ZHErjjUeCz0SgNgmM9zTZ5GvKVHhzoyJyaWChCAHmFgMYYi19r6FQ0L6yeFULUo0ZCToW88bsFW52wGWMjOsGA8aycHmVa5CwxDN6q9pgw%2BdUJYtoaMTdPK3DibzOF3TG%2Bkph66H3PfTD%2FEV%2BrCa3oU1sx3myP2%2BQWESqyAwKXSUnfz2NQpVqMxY3K%2BVQqzlztBYgHNZJ4Ms%2B426EvgG6CCc%2FYxRZHRuyBpKXa%2BRG4KJCAQS6KC9gt0S46fDpJ71eb8EwAyvQuoh9AfUona1Qw%2BLvsR70vBlqaeHlxYcoA65hhxPLqLelnem36R%2F0VIpHVk5RnqoS3RMry%2B65a4G3jU5mA9CexhnD9aUAYQ5zbHr7I5MrNn24F3jLixOQfvxCfT1FdI9ambsGXH2cOoFP9dJ%2FflGeu8HUhbJn8xJc82V82brm2QlGX6Wb0JJxp7zg%2FpO%2FmuEfThchCUJFZ6qR2tZyUapANgZA9esQYoO8NrDkMOxAsn9orQDbQfnlpy1kpytLwZRMmgeEQIgJ60YfwefYAggwMUEcPRMCIp3gTFY6pgFWLrzJELi7glfKzLCeNlULjJVB81wHzNPstGrqBE9rsr%2BBiPWZTCNjqTFBjqkAbBB6nUYSsNomLp3zt3NmkBO3WINkPiDVTOyVC7z4lo2nJJb8cRIMeACC0VdRU3UwlXL7Rz9ikg4Mb7ugXIc51o7IE4Rso1t%2FjaISreJ7pBYZxBHeGX1yXLmd2sn3objFZNovG5%2FgSddhipHvuZaSl2xgyD66P3xfa%2FjDtHk10%2FqjZ0qcV28LZVExBRiino5jaSconi2eODyUt5LS25OuZxgTJTx&X-Amz-Signature=d9c8288f57be163ba7ab465e2fa29f013f5ead426b97877500bf4199fa36fff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SFE3YZJ%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw0Ihd4Qo7NOsfmhIK6GyFQJ4wE5SMZBPW%2FgUWFsqt7AIhANTAZujr1GlH6p8I1%2BQmvsayw3azP7%2BDpH6CRbN7s%2BNHKv8DCCEQABoMNjM3NDIzMTgzODA1IgyoG7fbl%2B6y0UNNi8kq3APQY6ZRvYEv6%2Fnx00hjIAxX%2FdV3ZHErjjUeCz0SgNgmM9zTZ5GvKVHhzoyJyaWChCAHmFgMYYi19r6FQ0L6yeFULUo0ZCToW88bsFW52wGWMjOsGA8aycHmVa5CwxDN6q9pgw%2BdUJYtoaMTdPK3DibzOF3TG%2Bkph66H3PfTD%2FEV%2BrCa3oU1sx3myP2%2BQWESqyAwKXSUnfz2NQpVqMxY3K%2BVQqzlztBYgHNZJ4Ms%2B426EvgG6CCc%2FYxRZHRuyBpKXa%2BRG4KJCAQS6KC9gt0S46fDpJ71eb8EwAyvQuoh9AfUona1Qw%2BLvsR70vBlqaeHlxYcoA65hhxPLqLelnem36R%2F0VIpHVk5RnqoS3RMry%2B65a4G3jU5mA9CexhnD9aUAYQ5zbHr7I5MrNn24F3jLixOQfvxCfT1FdI9ambsGXH2cOoFP9dJ%2FflGeu8HUhbJn8xJc82V82brm2QlGX6Wb0JJxp7zg%2FpO%2FmuEfThchCUJFZ6qR2tZyUapANgZA9esQYoO8NrDkMOxAsn9orQDbQfnlpy1kpytLwZRMmgeEQIgJ60YfwefYAggwMUEcPRMCIp3gTFY6pgFWLrzJELi7glfKzLCeNlULjJVB81wHzNPstGrqBE9rsr%2BBiPWZTCNjqTFBjqkAbBB6nUYSsNomLp3zt3NmkBO3WINkPiDVTOyVC7z4lo2nJJb8cRIMeACC0VdRU3UwlXL7Rz9ikg4Mb7ugXIc51o7IE4Rso1t%2FjaISreJ7pBYZxBHeGX1yXLmd2sn3objFZNovG5%2FgSddhipHvuZaSl2xgyD66P3xfa%2FjDtHk10%2FqjZ0qcV28LZVExBRiino5jaSconi2eODyUt5LS25OuZxgTJTx&X-Amz-Signature=d5918cb0a4e99410da5335bb2f42285f5f8ef60d52ae1f9f626422f65b99540f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CHLH7FT%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXAdwwoM%2BbKbN4xFL324D42ejpgTdjpRztgQ%2Bs0BYKigIgZXHoSoHD18JF9Xs7UrkmQNZOksXvihT9synSCS3a0Lgq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLZcg9fngXnM3JKnVSrcAy8P8qZ%2FRtg%2BHocT7UPxmmfpm4mReqnHfxg%2BFTnnlXtG8c6AM%2FDRFf98TAKznIdhSxNRZ4g4qfpXpWxSY4rPrkK7ltSITbGJajKzBfyolmoOkCAzq7OT%2BiEESXi%2Bbea56g25lraRR9mFSA2bHbmZh89rkTwj55sMMaG%2FPJQt%2B08UVUOgMuk3ZBYEYYduln7gOuk9NKWUDpUcgVr5QjgjVQ5aiVDHYuBdd7sbf3E8YrXnyO648%2BgM7iDmF%2BZTSBtFx5WGrySfyB2vvAGNCSf%2B13hcSeaZtzK87Qgyb53G20TJhqCuRMo%2BuTn9uCyPVT8gq4sh8pXtx10IWpJCWiStx7UL%2BhgqAVKpgVRlMHOXBm%2BvuHomZm0p6GoO7zYWtsh4WV66N3O3ANBCFaGgs0W11pZhEh9ezTGFPioEsf24Ykk8J6gzhdT7PWQu89zBctNWRTQ6ZqD0vCG4HRGQb3j4lNcF9F632gxfrUxzscj5KKVF8CZzhrqK9Yf06Evzh9IukTw7e55GVYZ9aguApHQr5bi7Pt9d0Si5kbIhqKM3e0d%2BfMcHLMrB5GSxSFRbCAEeMyD9SkBrOaV5%2Fhu3YAMBBTvsqdk5GUhcZazpSbp3TGWkJI%2FvYSfgTZCmb608MOyPpMUGOqUBGP%2Bg0Jm6QBYaBK08zAJvE5WSvJYGDMeCf8PeUlCNksMDv3GFw5cye3PuUoLr4OhfKQEPSRA1GOx1i1D53f3yC%2FqSRU3VT7%2BmI1dCkhgD7muftWj5P%2B18fkXn4LwVdra%2F9K5BusFlTXGzoRIDjIaKhCenvLDqSUNFzNK13DrBTFj5Pcv4IyoWTj4nZRcDOWbVeUQ5jp2AZ9UcILZ3ikkqc2xuj9HE&X-Amz-Signature=c00c5bec9c76b2479808a7ae0a0ac116600fa78b74df18c1be01ae1e2c6c7017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SFE3YZJ%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw0Ihd4Qo7NOsfmhIK6GyFQJ4wE5SMZBPW%2FgUWFsqt7AIhANTAZujr1GlH6p8I1%2BQmvsayw3azP7%2BDpH6CRbN7s%2BNHKv8DCCEQABoMNjM3NDIzMTgzODA1IgyoG7fbl%2B6y0UNNi8kq3APQY6ZRvYEv6%2Fnx00hjIAxX%2FdV3ZHErjjUeCz0SgNgmM9zTZ5GvKVHhzoyJyaWChCAHmFgMYYi19r6FQ0L6yeFULUo0ZCToW88bsFW52wGWMjOsGA8aycHmVa5CwxDN6q9pgw%2BdUJYtoaMTdPK3DibzOF3TG%2Bkph66H3PfTD%2FEV%2BrCa3oU1sx3myP2%2BQWESqyAwKXSUnfz2NQpVqMxY3K%2BVQqzlztBYgHNZJ4Ms%2B426EvgG6CCc%2FYxRZHRuyBpKXa%2BRG4KJCAQS6KC9gt0S46fDpJ71eb8EwAyvQuoh9AfUona1Qw%2BLvsR70vBlqaeHlxYcoA65hhxPLqLelnem36R%2F0VIpHVk5RnqoS3RMry%2B65a4G3jU5mA9CexhnD9aUAYQ5zbHr7I5MrNn24F3jLixOQfvxCfT1FdI9ambsGXH2cOoFP9dJ%2FflGeu8HUhbJn8xJc82V82brm2QlGX6Wb0JJxp7zg%2FpO%2FmuEfThchCUJFZ6qR2tZyUapANgZA9esQYoO8NrDkMOxAsn9orQDbQfnlpy1kpytLwZRMmgeEQIgJ60YfwefYAggwMUEcPRMCIp3gTFY6pgFWLrzJELi7glfKzLCeNlULjJVB81wHzNPstGrqBE9rsr%2BBiPWZTCNjqTFBjqkAbBB6nUYSsNomLp3zt3NmkBO3WINkPiDVTOyVC7z4lo2nJJb8cRIMeACC0VdRU3UwlXL7Rz9ikg4Mb7ugXIc51o7IE4Rso1t%2FjaISreJ7pBYZxBHeGX1yXLmd2sn3objFZNovG5%2FgSddhipHvuZaSl2xgyD66P3xfa%2FjDtHk10%2FqjZ0qcV28LZVExBRiino5jaSconi2eODyUt5LS25OuZxgTJTx&X-Amz-Signature=5bfe82a8e5541a36a8a5a78d292683725e699da5b8e8fa60f4eae15746015fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SFE3YZJ%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw0Ihd4Qo7NOsfmhIK6GyFQJ4wE5SMZBPW%2FgUWFsqt7AIhANTAZujr1GlH6p8I1%2BQmvsayw3azP7%2BDpH6CRbN7s%2BNHKv8DCCEQABoMNjM3NDIzMTgzODA1IgyoG7fbl%2B6y0UNNi8kq3APQY6ZRvYEv6%2Fnx00hjIAxX%2FdV3ZHErjjUeCz0SgNgmM9zTZ5GvKVHhzoyJyaWChCAHmFgMYYi19r6FQ0L6yeFULUo0ZCToW88bsFW52wGWMjOsGA8aycHmVa5CwxDN6q9pgw%2BdUJYtoaMTdPK3DibzOF3TG%2Bkph66H3PfTD%2FEV%2BrCa3oU1sx3myP2%2BQWESqyAwKXSUnfz2NQpVqMxY3K%2BVQqzlztBYgHNZJ4Ms%2B426EvgG6CCc%2FYxRZHRuyBpKXa%2BRG4KJCAQS6KC9gt0S46fDpJ71eb8EwAyvQuoh9AfUona1Qw%2BLvsR70vBlqaeHlxYcoA65hhxPLqLelnem36R%2F0VIpHVk5RnqoS3RMry%2B65a4G3jU5mA9CexhnD9aUAYQ5zbHr7I5MrNn24F3jLixOQfvxCfT1FdI9ambsGXH2cOoFP9dJ%2FflGeu8HUhbJn8xJc82V82brm2QlGX6Wb0JJxp7zg%2FpO%2FmuEfThchCUJFZ6qR2tZyUapANgZA9esQYoO8NrDkMOxAsn9orQDbQfnlpy1kpytLwZRMmgeEQIgJ60YfwefYAggwMUEcPRMCIp3gTFY6pgFWLrzJELi7glfKzLCeNlULjJVB81wHzNPstGrqBE9rsr%2BBiPWZTCNjqTFBjqkAbBB6nUYSsNomLp3zt3NmkBO3WINkPiDVTOyVC7z4lo2nJJb8cRIMeACC0VdRU3UwlXL7Rz9ikg4Mb7ugXIc51o7IE4Rso1t%2FjaISreJ7pBYZxBHeGX1yXLmd2sn3objFZNovG5%2FgSddhipHvuZaSl2xgyD66P3xfa%2FjDtHk10%2FqjZ0qcV28LZVExBRiino5jaSconi2eODyUt5LS25OuZxgTJTx&X-Amz-Signature=e19b1cfa5560f92088cbfd42287c6820426e985caa66ded5f606c5d126340b19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SFE3YZJ%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw0Ihd4Qo7NOsfmhIK6GyFQJ4wE5SMZBPW%2FgUWFsqt7AIhANTAZujr1GlH6p8I1%2BQmvsayw3azP7%2BDpH6CRbN7s%2BNHKv8DCCEQABoMNjM3NDIzMTgzODA1IgyoG7fbl%2B6y0UNNi8kq3APQY6ZRvYEv6%2Fnx00hjIAxX%2FdV3ZHErjjUeCz0SgNgmM9zTZ5GvKVHhzoyJyaWChCAHmFgMYYi19r6FQ0L6yeFULUo0ZCToW88bsFW52wGWMjOsGA8aycHmVa5CwxDN6q9pgw%2BdUJYtoaMTdPK3DibzOF3TG%2Bkph66H3PfTD%2FEV%2BrCa3oU1sx3myP2%2BQWESqyAwKXSUnfz2NQpVqMxY3K%2BVQqzlztBYgHNZJ4Ms%2B426EvgG6CCc%2FYxRZHRuyBpKXa%2BRG4KJCAQS6KC9gt0S46fDpJ71eb8EwAyvQuoh9AfUona1Qw%2BLvsR70vBlqaeHlxYcoA65hhxPLqLelnem36R%2F0VIpHVk5RnqoS3RMry%2B65a4G3jU5mA9CexhnD9aUAYQ5zbHr7I5MrNn24F3jLixOQfvxCfT1FdI9ambsGXH2cOoFP9dJ%2FflGeu8HUhbJn8xJc82V82brm2QlGX6Wb0JJxp7zg%2FpO%2FmuEfThchCUJFZ6qR2tZyUapANgZA9esQYoO8NrDkMOxAsn9orQDbQfnlpy1kpytLwZRMmgeEQIgJ60YfwefYAggwMUEcPRMCIp3gTFY6pgFWLrzJELi7glfKzLCeNlULjJVB81wHzNPstGrqBE9rsr%2BBiPWZTCNjqTFBjqkAbBB6nUYSsNomLp3zt3NmkBO3WINkPiDVTOyVC7z4lo2nJJb8cRIMeACC0VdRU3UwlXL7Rz9ikg4Mb7ugXIc51o7IE4Rso1t%2FjaISreJ7pBYZxBHeGX1yXLmd2sn3objFZNovG5%2FgSddhipHvuZaSl2xgyD66P3xfa%2FjDtHk10%2FqjZ0qcV28LZVExBRiino5jaSconi2eODyUt5LS25OuZxgTJTx&X-Amz-Signature=ec20d2464602ea23e70758e87ca9906c1d1813c8244ad1de92d01fd42f03c2f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SFE3YZJ%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw0Ihd4Qo7NOsfmhIK6GyFQJ4wE5SMZBPW%2FgUWFsqt7AIhANTAZujr1GlH6p8I1%2BQmvsayw3azP7%2BDpH6CRbN7s%2BNHKv8DCCEQABoMNjM3NDIzMTgzODA1IgyoG7fbl%2B6y0UNNi8kq3APQY6ZRvYEv6%2Fnx00hjIAxX%2FdV3ZHErjjUeCz0SgNgmM9zTZ5GvKVHhzoyJyaWChCAHmFgMYYi19r6FQ0L6yeFULUo0ZCToW88bsFW52wGWMjOsGA8aycHmVa5CwxDN6q9pgw%2BdUJYtoaMTdPK3DibzOF3TG%2Bkph66H3PfTD%2FEV%2BrCa3oU1sx3myP2%2BQWESqyAwKXSUnfz2NQpVqMxY3K%2BVQqzlztBYgHNZJ4Ms%2B426EvgG6CCc%2FYxRZHRuyBpKXa%2BRG4KJCAQS6KC9gt0S46fDpJ71eb8EwAyvQuoh9AfUona1Qw%2BLvsR70vBlqaeHlxYcoA65hhxPLqLelnem36R%2F0VIpHVk5RnqoS3RMry%2B65a4G3jU5mA9CexhnD9aUAYQ5zbHr7I5MrNn24F3jLixOQfvxCfT1FdI9ambsGXH2cOoFP9dJ%2FflGeu8HUhbJn8xJc82V82brm2QlGX6Wb0JJxp7zg%2FpO%2FmuEfThchCUJFZ6qR2tZyUapANgZA9esQYoO8NrDkMOxAsn9orQDbQfnlpy1kpytLwZRMmgeEQIgJ60YfwefYAggwMUEcPRMCIp3gTFY6pgFWLrzJELi7glfKzLCeNlULjJVB81wHzNPstGrqBE9rsr%2BBiPWZTCNjqTFBjqkAbBB6nUYSsNomLp3zt3NmkBO3WINkPiDVTOyVC7z4lo2nJJb8cRIMeACC0VdRU3UwlXL7Rz9ikg4Mb7ugXIc51o7IE4Rso1t%2FjaISreJ7pBYZxBHeGX1yXLmd2sn3objFZNovG5%2FgSddhipHvuZaSl2xgyD66P3xfa%2FjDtHk10%2FqjZ0qcV28LZVExBRiino5jaSconi2eODyUt5LS25OuZxgTJTx&X-Amz-Signature=561815145d04e3cbcbd8adab1894f5fd6e7325f558e0af08a713d54ae6e9aeb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SFE3YZJ%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw0Ihd4Qo7NOsfmhIK6GyFQJ4wE5SMZBPW%2FgUWFsqt7AIhANTAZujr1GlH6p8I1%2BQmvsayw3azP7%2BDpH6CRbN7s%2BNHKv8DCCEQABoMNjM3NDIzMTgzODA1IgyoG7fbl%2B6y0UNNi8kq3APQY6ZRvYEv6%2Fnx00hjIAxX%2FdV3ZHErjjUeCz0SgNgmM9zTZ5GvKVHhzoyJyaWChCAHmFgMYYi19r6FQ0L6yeFULUo0ZCToW88bsFW52wGWMjOsGA8aycHmVa5CwxDN6q9pgw%2BdUJYtoaMTdPK3DibzOF3TG%2Bkph66H3PfTD%2FEV%2BrCa3oU1sx3myP2%2BQWESqyAwKXSUnfz2NQpVqMxY3K%2BVQqzlztBYgHNZJ4Ms%2B426EvgG6CCc%2FYxRZHRuyBpKXa%2BRG4KJCAQS6KC9gt0S46fDpJ71eb8EwAyvQuoh9AfUona1Qw%2BLvsR70vBlqaeHlxYcoA65hhxPLqLelnem36R%2F0VIpHVk5RnqoS3RMry%2B65a4G3jU5mA9CexhnD9aUAYQ5zbHr7I5MrNn24F3jLixOQfvxCfT1FdI9ambsGXH2cOoFP9dJ%2FflGeu8HUhbJn8xJc82V82brm2QlGX6Wb0JJxp7zg%2FpO%2FmuEfThchCUJFZ6qR2tZyUapANgZA9esQYoO8NrDkMOxAsn9orQDbQfnlpy1kpytLwZRMmgeEQIgJ60YfwefYAggwMUEcPRMCIp3gTFY6pgFWLrzJELi7glfKzLCeNlULjJVB81wHzNPstGrqBE9rsr%2BBiPWZTCNjqTFBjqkAbBB6nUYSsNomLp3zt3NmkBO3WINkPiDVTOyVC7z4lo2nJJb8cRIMeACC0VdRU3UwlXL7Rz9ikg4Mb7ugXIc51o7IE4Rso1t%2FjaISreJ7pBYZxBHeGX1yXLmd2sn3objFZNovG5%2FgSddhipHvuZaSl2xgyD66P3xfa%2FjDtHk10%2FqjZ0qcV28LZVExBRiino5jaSconi2eODyUt5LS25OuZxgTJTx&X-Amz-Signature=0d2def1cf64f1cf52d564c01266fa01cef9afd7cd1ea48db658a0e1feecbb966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SFE3YZJ%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw0Ihd4Qo7NOsfmhIK6GyFQJ4wE5SMZBPW%2FgUWFsqt7AIhANTAZujr1GlH6p8I1%2BQmvsayw3azP7%2BDpH6CRbN7s%2BNHKv8DCCEQABoMNjM3NDIzMTgzODA1IgyoG7fbl%2B6y0UNNi8kq3APQY6ZRvYEv6%2Fnx00hjIAxX%2FdV3ZHErjjUeCz0SgNgmM9zTZ5GvKVHhzoyJyaWChCAHmFgMYYi19r6FQ0L6yeFULUo0ZCToW88bsFW52wGWMjOsGA8aycHmVa5CwxDN6q9pgw%2BdUJYtoaMTdPK3DibzOF3TG%2Bkph66H3PfTD%2FEV%2BrCa3oU1sx3myP2%2BQWESqyAwKXSUnfz2NQpVqMxY3K%2BVQqzlztBYgHNZJ4Ms%2B426EvgG6CCc%2FYxRZHRuyBpKXa%2BRG4KJCAQS6KC9gt0S46fDpJ71eb8EwAyvQuoh9AfUona1Qw%2BLvsR70vBlqaeHlxYcoA65hhxPLqLelnem36R%2F0VIpHVk5RnqoS3RMry%2B65a4G3jU5mA9CexhnD9aUAYQ5zbHr7I5MrNn24F3jLixOQfvxCfT1FdI9ambsGXH2cOoFP9dJ%2FflGeu8HUhbJn8xJc82V82brm2QlGX6Wb0JJxp7zg%2FpO%2FmuEfThchCUJFZ6qR2tZyUapANgZA9esQYoO8NrDkMOxAsn9orQDbQfnlpy1kpytLwZRMmgeEQIgJ60YfwefYAggwMUEcPRMCIp3gTFY6pgFWLrzJELi7glfKzLCeNlULjJVB81wHzNPstGrqBE9rsr%2BBiPWZTCNjqTFBjqkAbBB6nUYSsNomLp3zt3NmkBO3WINkPiDVTOyVC7z4lo2nJJb8cRIMeACC0VdRU3UwlXL7Rz9ikg4Mb7ugXIc51o7IE4Rso1t%2FjaISreJ7pBYZxBHeGX1yXLmd2sn3objFZNovG5%2FgSddhipHvuZaSl2xgyD66P3xfa%2FjDtHk10%2FqjZ0qcV28LZVExBRiino5jaSconi2eODyUt5LS25OuZxgTJTx&X-Amz-Signature=cc5c816b163405f4c3bf8697c0f1ee05b83b15f134d3e6301470b27618d61ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


