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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GO7TT7S%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBlpt%2F37SH1RLdZR74cOFxfG1%2FkOXrHd8qg69exJnXxQAiAdeGcpqe1twvgbe%2FbvzCLZchhwMBiZ2lEqF3NTFnvNMyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJo2QTI9IEW66WSg0KtwD4%2BMtgLywuLtmyORzkF2gbmt1IyGOb%2BliFD0b6VJ35ARHFyqkbQTzrTp79HSSrlQ2y4iY%2FNUWpNVhbcCNyOMPmUXi4CVAHH%2Fguuu%2FLkQvuv6%2Ba2rNgtIOd9xz8M0G%2F5jUubbYgQawEB18qs2X%2BgJzdi%2BQMnAJr0DcT%2Fr2uEkEz%2F3YSuVjR4IeuQVEKuOFuafAhzb97ilpradP89LAe2nmUnI%2BnoiYJDROid5Xorgg5sPCIK9XRQ27Yexatug7fRzMKm7CBMUA2Hzm%2BY655yQtPWWvqXNnZ6dLTPCTGA4LVkR2fiecF8ET2CxOtIdssNfG6CQMV2uitacwx%2BbpzKTtBU0MJJKkpaGe%2BXucCQZGYPqQygQiXcVJyp6JPu7wfk%2FLHUqA82WyD3pGa3hgqEbr2mL3z%2BcxUeVVRVvZJdBvnfW0S4rZXt9I%2BW%2BGGgr7koZvLjbNEqgnciNNzF0w3c1LHrTF4DjxRATF1AeF08gBfOJL2a9JeTrN5WtikOhYZHdO%2BOgFa3yK3vnFghojFsZTdnQrWKsU5yEfgQPB7zVJJPGCvDiPtti9CoZqJQ7P6xFQoDNEdd%2BfCzZJ13NxMaQl8g633L644uPn1sOtPmfJgSs5mgrfYHhEN9oiBsow7uW%2F0wY6pgG7p%2BqjvEi%2BlQDO7ruY5vI7YjwtChP%2FTg9y2ALaYotPqjUqHTB%2BayA16Q59KIaDPFgR54sjL6UnwqWSaUqzxKnSNeogZ1FT249Fb73ojoBWpPwbqSdGzxZsjis9sLZLOBByMF308%2FcLKm6LNCsCOdMyDstyUSfX6%2Fq1O8FjXndZi3gBgoC04HWeuBd6Gf3tfK9c3j6Ra0IDem%2BayUYoSMm%2FGOJdnYoc&X-Amz-Signature=22af0133ec77ecb1564f071839c68324ff6c39b670a0ea02c70c7fcc53fb7af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GO7TT7S%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBlpt%2F37SH1RLdZR74cOFxfG1%2FkOXrHd8qg69exJnXxQAiAdeGcpqe1twvgbe%2FbvzCLZchhwMBiZ2lEqF3NTFnvNMyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJo2QTI9IEW66WSg0KtwD4%2BMtgLywuLtmyORzkF2gbmt1IyGOb%2BliFD0b6VJ35ARHFyqkbQTzrTp79HSSrlQ2y4iY%2FNUWpNVhbcCNyOMPmUXi4CVAHH%2Fguuu%2FLkQvuv6%2Ba2rNgtIOd9xz8M0G%2F5jUubbYgQawEB18qs2X%2BgJzdi%2BQMnAJr0DcT%2Fr2uEkEz%2F3YSuVjR4IeuQVEKuOFuafAhzb97ilpradP89LAe2nmUnI%2BnoiYJDROid5Xorgg5sPCIK9XRQ27Yexatug7fRzMKm7CBMUA2Hzm%2BY655yQtPWWvqXNnZ6dLTPCTGA4LVkR2fiecF8ET2CxOtIdssNfG6CQMV2uitacwx%2BbpzKTtBU0MJJKkpaGe%2BXucCQZGYPqQygQiXcVJyp6JPu7wfk%2FLHUqA82WyD3pGa3hgqEbr2mL3z%2BcxUeVVRVvZJdBvnfW0S4rZXt9I%2BW%2BGGgr7koZvLjbNEqgnciNNzF0w3c1LHrTF4DjxRATF1AeF08gBfOJL2a9JeTrN5WtikOhYZHdO%2BOgFa3yK3vnFghojFsZTdnQrWKsU5yEfgQPB7zVJJPGCvDiPtti9CoZqJQ7P6xFQoDNEdd%2BfCzZJ13NxMaQl8g633L644uPn1sOtPmfJgSs5mgrfYHhEN9oiBsow7uW%2F0wY6pgG7p%2BqjvEi%2BlQDO7ruY5vI7YjwtChP%2FTg9y2ALaYotPqjUqHTB%2BayA16Q59KIaDPFgR54sjL6UnwqWSaUqzxKnSNeogZ1FT249Fb73ojoBWpPwbqSdGzxZsjis9sLZLOBByMF308%2FcLKm6LNCsCOdMyDstyUSfX6%2Fq1O8FjXndZi3gBgoC04HWeuBd6Gf3tfK9c3j6Ra0IDem%2BayUYoSMm%2FGOJdnYoc&X-Amz-Signature=e1e829a52166222b8c93b1dcfd35f857a5b5fecd8cd6a1b31ee014a6ba2d4f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GO7TT7S%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBlpt%2F37SH1RLdZR74cOFxfG1%2FkOXrHd8qg69exJnXxQAiAdeGcpqe1twvgbe%2FbvzCLZchhwMBiZ2lEqF3NTFnvNMyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJo2QTI9IEW66WSg0KtwD4%2BMtgLywuLtmyORzkF2gbmt1IyGOb%2BliFD0b6VJ35ARHFyqkbQTzrTp79HSSrlQ2y4iY%2FNUWpNVhbcCNyOMPmUXi4CVAHH%2Fguuu%2FLkQvuv6%2Ba2rNgtIOd9xz8M0G%2F5jUubbYgQawEB18qs2X%2BgJzdi%2BQMnAJr0DcT%2Fr2uEkEz%2F3YSuVjR4IeuQVEKuOFuafAhzb97ilpradP89LAe2nmUnI%2BnoiYJDROid5Xorgg5sPCIK9XRQ27Yexatug7fRzMKm7CBMUA2Hzm%2BY655yQtPWWvqXNnZ6dLTPCTGA4LVkR2fiecF8ET2CxOtIdssNfG6CQMV2uitacwx%2BbpzKTtBU0MJJKkpaGe%2BXucCQZGYPqQygQiXcVJyp6JPu7wfk%2FLHUqA82WyD3pGa3hgqEbr2mL3z%2BcxUeVVRVvZJdBvnfW0S4rZXt9I%2BW%2BGGgr7koZvLjbNEqgnciNNzF0w3c1LHrTF4DjxRATF1AeF08gBfOJL2a9JeTrN5WtikOhYZHdO%2BOgFa3yK3vnFghojFsZTdnQrWKsU5yEfgQPB7zVJJPGCvDiPtti9CoZqJQ7P6xFQoDNEdd%2BfCzZJ13NxMaQl8g633L644uPn1sOtPmfJgSs5mgrfYHhEN9oiBsow7uW%2F0wY6pgG7p%2BqjvEi%2BlQDO7ruY5vI7YjwtChP%2FTg9y2ALaYotPqjUqHTB%2BayA16Q59KIaDPFgR54sjL6UnwqWSaUqzxKnSNeogZ1FT249Fb73ojoBWpPwbqSdGzxZsjis9sLZLOBByMF308%2FcLKm6LNCsCOdMyDstyUSfX6%2Fq1O8FjXndZi3gBgoC04HWeuBd6Gf3tfK9c3j6Ra0IDem%2BayUYoSMm%2FGOJdnYoc&X-Amz-Signature=0066fe56d303a55f3334e8d63713c6d0454c905644ff2d03c359277bf4f25fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GO7TT7S%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBlpt%2F37SH1RLdZR74cOFxfG1%2FkOXrHd8qg69exJnXxQAiAdeGcpqe1twvgbe%2FbvzCLZchhwMBiZ2lEqF3NTFnvNMyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJo2QTI9IEW66WSg0KtwD4%2BMtgLywuLtmyORzkF2gbmt1IyGOb%2BliFD0b6VJ35ARHFyqkbQTzrTp79HSSrlQ2y4iY%2FNUWpNVhbcCNyOMPmUXi4CVAHH%2Fguuu%2FLkQvuv6%2Ba2rNgtIOd9xz8M0G%2F5jUubbYgQawEB18qs2X%2BgJzdi%2BQMnAJr0DcT%2Fr2uEkEz%2F3YSuVjR4IeuQVEKuOFuafAhzb97ilpradP89LAe2nmUnI%2BnoiYJDROid5Xorgg5sPCIK9XRQ27Yexatug7fRzMKm7CBMUA2Hzm%2BY655yQtPWWvqXNnZ6dLTPCTGA4LVkR2fiecF8ET2CxOtIdssNfG6CQMV2uitacwx%2BbpzKTtBU0MJJKkpaGe%2BXucCQZGYPqQygQiXcVJyp6JPu7wfk%2FLHUqA82WyD3pGa3hgqEbr2mL3z%2BcxUeVVRVvZJdBvnfW0S4rZXt9I%2BW%2BGGgr7koZvLjbNEqgnciNNzF0w3c1LHrTF4DjxRATF1AeF08gBfOJL2a9JeTrN5WtikOhYZHdO%2BOgFa3yK3vnFghojFsZTdnQrWKsU5yEfgQPB7zVJJPGCvDiPtti9CoZqJQ7P6xFQoDNEdd%2BfCzZJ13NxMaQl8g633L644uPn1sOtPmfJgSs5mgrfYHhEN9oiBsow7uW%2F0wY6pgG7p%2BqjvEi%2BlQDO7ruY5vI7YjwtChP%2FTg9y2ALaYotPqjUqHTB%2BayA16Q59KIaDPFgR54sjL6UnwqWSaUqzxKnSNeogZ1FT249Fb73ojoBWpPwbqSdGzxZsjis9sLZLOBByMF308%2FcLKm6LNCsCOdMyDstyUSfX6%2Fq1O8FjXndZi3gBgoC04HWeuBd6Gf3tfK9c3j6Ra0IDem%2BayUYoSMm%2FGOJdnYoc&X-Amz-Signature=794a013d82932512a1be3be212e571bb01e16a79fd5dc59d63e2253e493d78af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSTHPWMR%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDO%2FN%2FmlwiW7HJvx5yBEh1I5mlX7POR3BXPAHqsXBIWKwIgTUvjOW9r%2BOxgQ8uxl8YE%2FSKUszr7euUjGvqoCne5eaMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4NqeTuibIMzIRyeyrcAyFG0glRC2JQeTJI%2F4AaaRk9rxZfw6pV1uicwwut8fbxKFv1T5Nhh8xd3W2F5hEUtz23%2B0ayDXFtiFkt7KhhAkR9E7Q83LL7JpPJUoaAdbFsls3R9%2FlsrcK0fMxMF5EPm58P4C6OnMz1GTggjpETy2tkiJJ7S0ZjhlK8xcEf16oGEMkBpSZDGNfjPEKGinMqeah1XoWGhad6BUqr3nVetNuPvzfCSV20hVzSJ3ndVjCFuElszjvp7iq13XukWNoq1WLNKdYAEaHKPNJc9LwkOH651NXsWZSLXj4c5xwodLxqr%2BgcQr3ulT1Xc0SxKCY28a9KTmYiRdb%2BksZ5oKLKOCEE36rkfMrXRzQ7Os75waHjoss%2FmdKyf%2B%2FLoo%2FfOCvPMrzorAK%2BAwEnkQgXvGl88EldTLcNMtPfnM%2FqDDHotNJaWpZx5qGNSIc6hBOoIEBDZ9eZ5R0d5ooELhAEGJ%2FdvkwLouBgnrNpOgvlCQ3skYVd5u708XfNVbYhsQz3e%2BqI77IlEwSBKzU3N32Y3rmnliHcs73ZQJ%2FnOIkM7DzmiEDjNroPdMdSKnPkOE1c3uFFBRglDhSd%2F4bFh1JlkrdlRoRlT8HIQBLb160190zXjIBAchD6ziXyDvYhFTziMLLkv9MGOqUBsHlpDZQno3uv1LpTVrvcicbA25hp6CuLWPnxpTS6fBE7AQx8%2F21lwZhDtmxHCOnRBstDJVekkbOIaoUNawncTNPvroQ0Pei5PMZ%2Bz9EwBuRaQWESielcUSmLr7QJmbIE%2Bt1aFF%2BQq4jL%2BVnBCxDaPtJHdTuabcrbAXqnOPmxju4pI3VZ3z%2FanST5HE38IARjVIkmqbcH0vJwhHmxFImmgaVZxoCm&X-Amz-Signature=d4aa71e8202a74239238bf4e057096141f82ce8602d2dabeb56f9a35a598b36b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GO7TT7S%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBlpt%2F37SH1RLdZR74cOFxfG1%2FkOXrHd8qg69exJnXxQAiAdeGcpqe1twvgbe%2FbvzCLZchhwMBiZ2lEqF3NTFnvNMyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJo2QTI9IEW66WSg0KtwD4%2BMtgLywuLtmyORzkF2gbmt1IyGOb%2BliFD0b6VJ35ARHFyqkbQTzrTp79HSSrlQ2y4iY%2FNUWpNVhbcCNyOMPmUXi4CVAHH%2Fguuu%2FLkQvuv6%2Ba2rNgtIOd9xz8M0G%2F5jUubbYgQawEB18qs2X%2BgJzdi%2BQMnAJr0DcT%2Fr2uEkEz%2F3YSuVjR4IeuQVEKuOFuafAhzb97ilpradP89LAe2nmUnI%2BnoiYJDROid5Xorgg5sPCIK9XRQ27Yexatug7fRzMKm7CBMUA2Hzm%2BY655yQtPWWvqXNnZ6dLTPCTGA4LVkR2fiecF8ET2CxOtIdssNfG6CQMV2uitacwx%2BbpzKTtBU0MJJKkpaGe%2BXucCQZGYPqQygQiXcVJyp6JPu7wfk%2FLHUqA82WyD3pGa3hgqEbr2mL3z%2BcxUeVVRVvZJdBvnfW0S4rZXt9I%2BW%2BGGgr7koZvLjbNEqgnciNNzF0w3c1LHrTF4DjxRATF1AeF08gBfOJL2a9JeTrN5WtikOhYZHdO%2BOgFa3yK3vnFghojFsZTdnQrWKsU5yEfgQPB7zVJJPGCvDiPtti9CoZqJQ7P6xFQoDNEdd%2BfCzZJ13NxMaQl8g633L644uPn1sOtPmfJgSs5mgrfYHhEN9oiBsow7uW%2F0wY6pgG7p%2BqjvEi%2BlQDO7ruY5vI7YjwtChP%2FTg9y2ALaYotPqjUqHTB%2BayA16Q59KIaDPFgR54sjL6UnwqWSaUqzxKnSNeogZ1FT249Fb73ojoBWpPwbqSdGzxZsjis9sLZLOBByMF308%2FcLKm6LNCsCOdMyDstyUSfX6%2Fq1O8FjXndZi3gBgoC04HWeuBd6Gf3tfK9c3j6Ra0IDem%2BayUYoSMm%2FGOJdnYoc&X-Amz-Signature=025672b37eba0d9a43836eba31f9ad36fc5adaf67e51b7ef9a935f442ca30886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GO7TT7S%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBlpt%2F37SH1RLdZR74cOFxfG1%2FkOXrHd8qg69exJnXxQAiAdeGcpqe1twvgbe%2FbvzCLZchhwMBiZ2lEqF3NTFnvNMyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJo2QTI9IEW66WSg0KtwD4%2BMtgLywuLtmyORzkF2gbmt1IyGOb%2BliFD0b6VJ35ARHFyqkbQTzrTp79HSSrlQ2y4iY%2FNUWpNVhbcCNyOMPmUXi4CVAHH%2Fguuu%2FLkQvuv6%2Ba2rNgtIOd9xz8M0G%2F5jUubbYgQawEB18qs2X%2BgJzdi%2BQMnAJr0DcT%2Fr2uEkEz%2F3YSuVjR4IeuQVEKuOFuafAhzb97ilpradP89LAe2nmUnI%2BnoiYJDROid5Xorgg5sPCIK9XRQ27Yexatug7fRzMKm7CBMUA2Hzm%2BY655yQtPWWvqXNnZ6dLTPCTGA4LVkR2fiecF8ET2CxOtIdssNfG6CQMV2uitacwx%2BbpzKTtBU0MJJKkpaGe%2BXucCQZGYPqQygQiXcVJyp6JPu7wfk%2FLHUqA82WyD3pGa3hgqEbr2mL3z%2BcxUeVVRVvZJdBvnfW0S4rZXt9I%2BW%2BGGgr7koZvLjbNEqgnciNNzF0w3c1LHrTF4DjxRATF1AeF08gBfOJL2a9JeTrN5WtikOhYZHdO%2BOgFa3yK3vnFghojFsZTdnQrWKsU5yEfgQPB7zVJJPGCvDiPtti9CoZqJQ7P6xFQoDNEdd%2BfCzZJ13NxMaQl8g633L644uPn1sOtPmfJgSs5mgrfYHhEN9oiBsow7uW%2F0wY6pgG7p%2BqjvEi%2BlQDO7ruY5vI7YjwtChP%2FTg9y2ALaYotPqjUqHTB%2BayA16Q59KIaDPFgR54sjL6UnwqWSaUqzxKnSNeogZ1FT249Fb73ojoBWpPwbqSdGzxZsjis9sLZLOBByMF308%2FcLKm6LNCsCOdMyDstyUSfX6%2Fq1O8FjXndZi3gBgoC04HWeuBd6Gf3tfK9c3j6Ra0IDem%2BayUYoSMm%2FGOJdnYoc&X-Amz-Signature=af905316e090b5cf197374f5d75c1dacc5a03bd3593ccd42568391c4a814db2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GO7TT7S%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBlpt%2F37SH1RLdZR74cOFxfG1%2FkOXrHd8qg69exJnXxQAiAdeGcpqe1twvgbe%2FbvzCLZchhwMBiZ2lEqF3NTFnvNMyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJo2QTI9IEW66WSg0KtwD4%2BMtgLywuLtmyORzkF2gbmt1IyGOb%2BliFD0b6VJ35ARHFyqkbQTzrTp79HSSrlQ2y4iY%2FNUWpNVhbcCNyOMPmUXi4CVAHH%2Fguuu%2FLkQvuv6%2Ba2rNgtIOd9xz8M0G%2F5jUubbYgQawEB18qs2X%2BgJzdi%2BQMnAJr0DcT%2Fr2uEkEz%2F3YSuVjR4IeuQVEKuOFuafAhzb97ilpradP89LAe2nmUnI%2BnoiYJDROid5Xorgg5sPCIK9XRQ27Yexatug7fRzMKm7CBMUA2Hzm%2BY655yQtPWWvqXNnZ6dLTPCTGA4LVkR2fiecF8ET2CxOtIdssNfG6CQMV2uitacwx%2BbpzKTtBU0MJJKkpaGe%2BXucCQZGYPqQygQiXcVJyp6JPu7wfk%2FLHUqA82WyD3pGa3hgqEbr2mL3z%2BcxUeVVRVvZJdBvnfW0S4rZXt9I%2BW%2BGGgr7koZvLjbNEqgnciNNzF0w3c1LHrTF4DjxRATF1AeF08gBfOJL2a9JeTrN5WtikOhYZHdO%2BOgFa3yK3vnFghojFsZTdnQrWKsU5yEfgQPB7zVJJPGCvDiPtti9CoZqJQ7P6xFQoDNEdd%2BfCzZJ13NxMaQl8g633L644uPn1sOtPmfJgSs5mgrfYHhEN9oiBsow7uW%2F0wY6pgG7p%2BqjvEi%2BlQDO7ruY5vI7YjwtChP%2FTg9y2ALaYotPqjUqHTB%2BayA16Q59KIaDPFgR54sjL6UnwqWSaUqzxKnSNeogZ1FT249Fb73ojoBWpPwbqSdGzxZsjis9sLZLOBByMF308%2FcLKm6LNCsCOdMyDstyUSfX6%2Fq1O8FjXndZi3gBgoC04HWeuBd6Gf3tfK9c3j6Ra0IDem%2BayUYoSMm%2FGOJdnYoc&X-Amz-Signature=996baa7e4f07015af989d945ff90eff48d268abec661d57b659caa9c2894c84f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GO7TT7S%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBlpt%2F37SH1RLdZR74cOFxfG1%2FkOXrHd8qg69exJnXxQAiAdeGcpqe1twvgbe%2FbvzCLZchhwMBiZ2lEqF3NTFnvNMyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJo2QTI9IEW66WSg0KtwD4%2BMtgLywuLtmyORzkF2gbmt1IyGOb%2BliFD0b6VJ35ARHFyqkbQTzrTp79HSSrlQ2y4iY%2FNUWpNVhbcCNyOMPmUXi4CVAHH%2Fguuu%2FLkQvuv6%2Ba2rNgtIOd9xz8M0G%2F5jUubbYgQawEB18qs2X%2BgJzdi%2BQMnAJr0DcT%2Fr2uEkEz%2F3YSuVjR4IeuQVEKuOFuafAhzb97ilpradP89LAe2nmUnI%2BnoiYJDROid5Xorgg5sPCIK9XRQ27Yexatug7fRzMKm7CBMUA2Hzm%2BY655yQtPWWvqXNnZ6dLTPCTGA4LVkR2fiecF8ET2CxOtIdssNfG6CQMV2uitacwx%2BbpzKTtBU0MJJKkpaGe%2BXucCQZGYPqQygQiXcVJyp6JPu7wfk%2FLHUqA82WyD3pGa3hgqEbr2mL3z%2BcxUeVVRVvZJdBvnfW0S4rZXt9I%2BW%2BGGgr7koZvLjbNEqgnciNNzF0w3c1LHrTF4DjxRATF1AeF08gBfOJL2a9JeTrN5WtikOhYZHdO%2BOgFa3yK3vnFghojFsZTdnQrWKsU5yEfgQPB7zVJJPGCvDiPtti9CoZqJQ7P6xFQoDNEdd%2BfCzZJ13NxMaQl8g633L644uPn1sOtPmfJgSs5mgrfYHhEN9oiBsow7uW%2F0wY6pgG7p%2BqjvEi%2BlQDO7ruY5vI7YjwtChP%2FTg9y2ALaYotPqjUqHTB%2BayA16Q59KIaDPFgR54sjL6UnwqWSaUqzxKnSNeogZ1FT249Fb73ojoBWpPwbqSdGzxZsjis9sLZLOBByMF308%2FcLKm6LNCsCOdMyDstyUSfX6%2Fq1O8FjXndZi3gBgoC04HWeuBd6Gf3tfK9c3j6Ra0IDem%2BayUYoSMm%2FGOJdnYoc&X-Amz-Signature=688528027624420c85f5d408844c3a92b8b38cbc78552c15f4178b9848739260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GO7TT7S%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBlpt%2F37SH1RLdZR74cOFxfG1%2FkOXrHd8qg69exJnXxQAiAdeGcpqe1twvgbe%2FbvzCLZchhwMBiZ2lEqF3NTFnvNMyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJo2QTI9IEW66WSg0KtwD4%2BMtgLywuLtmyORzkF2gbmt1IyGOb%2BliFD0b6VJ35ARHFyqkbQTzrTp79HSSrlQ2y4iY%2FNUWpNVhbcCNyOMPmUXi4CVAHH%2Fguuu%2FLkQvuv6%2Ba2rNgtIOd9xz8M0G%2F5jUubbYgQawEB18qs2X%2BgJzdi%2BQMnAJr0DcT%2Fr2uEkEz%2F3YSuVjR4IeuQVEKuOFuafAhzb97ilpradP89LAe2nmUnI%2BnoiYJDROid5Xorgg5sPCIK9XRQ27Yexatug7fRzMKm7CBMUA2Hzm%2BY655yQtPWWvqXNnZ6dLTPCTGA4LVkR2fiecF8ET2CxOtIdssNfG6CQMV2uitacwx%2BbpzKTtBU0MJJKkpaGe%2BXucCQZGYPqQygQiXcVJyp6JPu7wfk%2FLHUqA82WyD3pGa3hgqEbr2mL3z%2BcxUeVVRVvZJdBvnfW0S4rZXt9I%2BW%2BGGgr7koZvLjbNEqgnciNNzF0w3c1LHrTF4DjxRATF1AeF08gBfOJL2a9JeTrN5WtikOhYZHdO%2BOgFa3yK3vnFghojFsZTdnQrWKsU5yEfgQPB7zVJJPGCvDiPtti9CoZqJQ7P6xFQoDNEdd%2BfCzZJ13NxMaQl8g633L644uPn1sOtPmfJgSs5mgrfYHhEN9oiBsow7uW%2F0wY6pgG7p%2BqjvEi%2BlQDO7ruY5vI7YjwtChP%2FTg9y2ALaYotPqjUqHTB%2BayA16Q59KIaDPFgR54sjL6UnwqWSaUqzxKnSNeogZ1FT249Fb73ojoBWpPwbqSdGzxZsjis9sLZLOBByMF308%2FcLKm6LNCsCOdMyDstyUSfX6%2Fq1O8FjXndZi3gBgoC04HWeuBd6Gf3tfK9c3j6Ra0IDem%2BayUYoSMm%2FGOJdnYoc&X-Amz-Signature=231f5f5ce46dfae7c120abc691a901f6a8a2c602def7dcaf7a55b740a65ecb60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GO7TT7S%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBlpt%2F37SH1RLdZR74cOFxfG1%2FkOXrHd8qg69exJnXxQAiAdeGcpqe1twvgbe%2FbvzCLZchhwMBiZ2lEqF3NTFnvNMyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJo2QTI9IEW66WSg0KtwD4%2BMtgLywuLtmyORzkF2gbmt1IyGOb%2BliFD0b6VJ35ARHFyqkbQTzrTp79HSSrlQ2y4iY%2FNUWpNVhbcCNyOMPmUXi4CVAHH%2Fguuu%2FLkQvuv6%2Ba2rNgtIOd9xz8M0G%2F5jUubbYgQawEB18qs2X%2BgJzdi%2BQMnAJr0DcT%2Fr2uEkEz%2F3YSuVjR4IeuQVEKuOFuafAhzb97ilpradP89LAe2nmUnI%2BnoiYJDROid5Xorgg5sPCIK9XRQ27Yexatug7fRzMKm7CBMUA2Hzm%2BY655yQtPWWvqXNnZ6dLTPCTGA4LVkR2fiecF8ET2CxOtIdssNfG6CQMV2uitacwx%2BbpzKTtBU0MJJKkpaGe%2BXucCQZGYPqQygQiXcVJyp6JPu7wfk%2FLHUqA82WyD3pGa3hgqEbr2mL3z%2BcxUeVVRVvZJdBvnfW0S4rZXt9I%2BW%2BGGgr7koZvLjbNEqgnciNNzF0w3c1LHrTF4DjxRATF1AeF08gBfOJL2a9JeTrN5WtikOhYZHdO%2BOgFa3yK3vnFghojFsZTdnQrWKsU5yEfgQPB7zVJJPGCvDiPtti9CoZqJQ7P6xFQoDNEdd%2BfCzZJ13NxMaQl8g633L644uPn1sOtPmfJgSs5mgrfYHhEN9oiBsow7uW%2F0wY6pgG7p%2BqjvEi%2BlQDO7ruY5vI7YjwtChP%2FTg9y2ALaYotPqjUqHTB%2BayA16Q59KIaDPFgR54sjL6UnwqWSaUqzxKnSNeogZ1FT249Fb73ojoBWpPwbqSdGzxZsjis9sLZLOBByMF308%2FcLKm6LNCsCOdMyDstyUSfX6%2Fq1O8FjXndZi3gBgoC04HWeuBd6Gf3tfK9c3j6Ra0IDem%2BayUYoSMm%2FGOJdnYoc&X-Amz-Signature=871276c4fc3a1e7758ace3f8c999dc746c6ec82137e73ecbc7465998aecb8841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


