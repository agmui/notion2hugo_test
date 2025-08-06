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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GINBWNF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCsBBjlZSfgj6DRAxKDqbuW8bmaB0qywLAbydBKG3%2B47gIgHq3DOsn86cH2UNjM0BH1KRz1BZFDDz5dQ9apRzgFJ6wq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFGzM2wUbUZSIeP4mSrcA0IdneObBzqVY6PEWQN7idNdUwbm%2FU%2FitO%2FATycslGYvZ%2BHJOVXmR4crgEL7TiwyYNnrSoRCJSrPStTDAbK4e1MVEA0R4e%2FKCKuVn2ip3Zqe1iJ1z%2BwqxhddqOrwN4095IsEB%2FiAtu5co12DcqeftKm8CfmohcEJPgOr8Wku2GTFyX%2FDDuMhv3eThZBIKZ%2FGb%2FEKoKuEgGZylApTuQHvT2%2BZYxBM9oml4hYdujA2qfKxwV4H6oE13z1zE4ijZt1DrCBnIbO60YAvrD%2Buw2TeoKcRcJh5Lv2eX2luXMT42Y1e1yWGUn7g7KMU092R%2B63CyOXRv0GGrvc1hhG%2BCnpH39SOtg8bT6gyHUWa%2F%2Fetg5rEln7X6zlepcvF4Fkac1hGhOQ3gmYVHa13X7rZx3vxWxU1knWeXtkErYcPYyiQSQdrV5OdZtYjbozUh3iEZpZ%2F%2BL8FDuSf65yOvO2jsnIncrFFGo2GwWx9W0n83L%2FoTA%2BVI7cIwp2uTWL8zoZ5sLukwt7aO0fmzGFZIb7nqde0l1AeeZ9Q7s%2B8fUV0vxaVr64LBSPiTkGS8V1Nc8xNl7fMm4bcxg0OunvwS64llZMpC6yHZdwaAxoKUqsu%2Ft19hGiCjngxNr07CkOYv0wiML7PzMQGOqUBVrIi8gR%2FTWiKxLoPBhOshuUwZhD2bYQJl7Chc8dB2lUMit1o%2FPRdWi0uRY8xHkzRMd%2BAo9Kcv0Cr9eHtZqs9svoWMOPSCx%2B8sJAeA8kgOkffrk37whv5FXvsnp9H%2B7VyxA3h5gOvlNDQuOhNJE1D2qh11po5%2BAHZWgGJqzd0MfxtER2bL9ps%2BAArE2hVwpOR8P3rEPj0FCoI%2F%2F1gyeGXy9zjpPpp&X-Amz-Signature=ed63fc0fe7a92399e33c5d8886398f576ba197752b3289e0c1ee8591de1d0cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GINBWNF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCsBBjlZSfgj6DRAxKDqbuW8bmaB0qywLAbydBKG3%2B47gIgHq3DOsn86cH2UNjM0BH1KRz1BZFDDz5dQ9apRzgFJ6wq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFGzM2wUbUZSIeP4mSrcA0IdneObBzqVY6PEWQN7idNdUwbm%2FU%2FitO%2FATycslGYvZ%2BHJOVXmR4crgEL7TiwyYNnrSoRCJSrPStTDAbK4e1MVEA0R4e%2FKCKuVn2ip3Zqe1iJ1z%2BwqxhddqOrwN4095IsEB%2FiAtu5co12DcqeftKm8CfmohcEJPgOr8Wku2GTFyX%2FDDuMhv3eThZBIKZ%2FGb%2FEKoKuEgGZylApTuQHvT2%2BZYxBM9oml4hYdujA2qfKxwV4H6oE13z1zE4ijZt1DrCBnIbO60YAvrD%2Buw2TeoKcRcJh5Lv2eX2luXMT42Y1e1yWGUn7g7KMU092R%2B63CyOXRv0GGrvc1hhG%2BCnpH39SOtg8bT6gyHUWa%2F%2Fetg5rEln7X6zlepcvF4Fkac1hGhOQ3gmYVHa13X7rZx3vxWxU1knWeXtkErYcPYyiQSQdrV5OdZtYjbozUh3iEZpZ%2F%2BL8FDuSf65yOvO2jsnIncrFFGo2GwWx9W0n83L%2FoTA%2BVI7cIwp2uTWL8zoZ5sLukwt7aO0fmzGFZIb7nqde0l1AeeZ9Q7s%2B8fUV0vxaVr64LBSPiTkGS8V1Nc8xNl7fMm4bcxg0OunvwS64llZMpC6yHZdwaAxoKUqsu%2Ft19hGiCjngxNr07CkOYv0wiML7PzMQGOqUBVrIi8gR%2FTWiKxLoPBhOshuUwZhD2bYQJl7Chc8dB2lUMit1o%2FPRdWi0uRY8xHkzRMd%2BAo9Kcv0Cr9eHtZqs9svoWMOPSCx%2B8sJAeA8kgOkffrk37whv5FXvsnp9H%2B7VyxA3h5gOvlNDQuOhNJE1D2qh11po5%2BAHZWgGJqzd0MfxtER2bL9ps%2BAArE2hVwpOR8P3rEPj0FCoI%2F%2F1gyeGXy9zjpPpp&X-Amz-Signature=f8cf643a1eb83405673b906edec2a097065fba804d5b1910eb609592270b2ff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GINBWNF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCsBBjlZSfgj6DRAxKDqbuW8bmaB0qywLAbydBKG3%2B47gIgHq3DOsn86cH2UNjM0BH1KRz1BZFDDz5dQ9apRzgFJ6wq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFGzM2wUbUZSIeP4mSrcA0IdneObBzqVY6PEWQN7idNdUwbm%2FU%2FitO%2FATycslGYvZ%2BHJOVXmR4crgEL7TiwyYNnrSoRCJSrPStTDAbK4e1MVEA0R4e%2FKCKuVn2ip3Zqe1iJ1z%2BwqxhddqOrwN4095IsEB%2FiAtu5co12DcqeftKm8CfmohcEJPgOr8Wku2GTFyX%2FDDuMhv3eThZBIKZ%2FGb%2FEKoKuEgGZylApTuQHvT2%2BZYxBM9oml4hYdujA2qfKxwV4H6oE13z1zE4ijZt1DrCBnIbO60YAvrD%2Buw2TeoKcRcJh5Lv2eX2luXMT42Y1e1yWGUn7g7KMU092R%2B63CyOXRv0GGrvc1hhG%2BCnpH39SOtg8bT6gyHUWa%2F%2Fetg5rEln7X6zlepcvF4Fkac1hGhOQ3gmYVHa13X7rZx3vxWxU1knWeXtkErYcPYyiQSQdrV5OdZtYjbozUh3iEZpZ%2F%2BL8FDuSf65yOvO2jsnIncrFFGo2GwWx9W0n83L%2FoTA%2BVI7cIwp2uTWL8zoZ5sLukwt7aO0fmzGFZIb7nqde0l1AeeZ9Q7s%2B8fUV0vxaVr64LBSPiTkGS8V1Nc8xNl7fMm4bcxg0OunvwS64llZMpC6yHZdwaAxoKUqsu%2Ft19hGiCjngxNr07CkOYv0wiML7PzMQGOqUBVrIi8gR%2FTWiKxLoPBhOshuUwZhD2bYQJl7Chc8dB2lUMit1o%2FPRdWi0uRY8xHkzRMd%2BAo9Kcv0Cr9eHtZqs9svoWMOPSCx%2B8sJAeA8kgOkffrk37whv5FXvsnp9H%2B7VyxA3h5gOvlNDQuOhNJE1D2qh11po5%2BAHZWgGJqzd0MfxtER2bL9ps%2BAArE2hVwpOR8P3rEPj0FCoI%2F%2F1gyeGXy9zjpPpp&X-Amz-Signature=a830caa19f744c6398030ffd134189cf428c9199b6b2193f2be7d30307d421f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GINBWNF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCsBBjlZSfgj6DRAxKDqbuW8bmaB0qywLAbydBKG3%2B47gIgHq3DOsn86cH2UNjM0BH1KRz1BZFDDz5dQ9apRzgFJ6wq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFGzM2wUbUZSIeP4mSrcA0IdneObBzqVY6PEWQN7idNdUwbm%2FU%2FitO%2FATycslGYvZ%2BHJOVXmR4crgEL7TiwyYNnrSoRCJSrPStTDAbK4e1MVEA0R4e%2FKCKuVn2ip3Zqe1iJ1z%2BwqxhddqOrwN4095IsEB%2FiAtu5co12DcqeftKm8CfmohcEJPgOr8Wku2GTFyX%2FDDuMhv3eThZBIKZ%2FGb%2FEKoKuEgGZylApTuQHvT2%2BZYxBM9oml4hYdujA2qfKxwV4H6oE13z1zE4ijZt1DrCBnIbO60YAvrD%2Buw2TeoKcRcJh5Lv2eX2luXMT42Y1e1yWGUn7g7KMU092R%2B63CyOXRv0GGrvc1hhG%2BCnpH39SOtg8bT6gyHUWa%2F%2Fetg5rEln7X6zlepcvF4Fkac1hGhOQ3gmYVHa13X7rZx3vxWxU1knWeXtkErYcPYyiQSQdrV5OdZtYjbozUh3iEZpZ%2F%2BL8FDuSf65yOvO2jsnIncrFFGo2GwWx9W0n83L%2FoTA%2BVI7cIwp2uTWL8zoZ5sLukwt7aO0fmzGFZIb7nqde0l1AeeZ9Q7s%2B8fUV0vxaVr64LBSPiTkGS8V1Nc8xNl7fMm4bcxg0OunvwS64llZMpC6yHZdwaAxoKUqsu%2Ft19hGiCjngxNr07CkOYv0wiML7PzMQGOqUBVrIi8gR%2FTWiKxLoPBhOshuUwZhD2bYQJl7Chc8dB2lUMit1o%2FPRdWi0uRY8xHkzRMd%2BAo9Kcv0Cr9eHtZqs9svoWMOPSCx%2B8sJAeA8kgOkffrk37whv5FXvsnp9H%2B7VyxA3h5gOvlNDQuOhNJE1D2qh11po5%2BAHZWgGJqzd0MfxtER2bL9ps%2BAArE2hVwpOR8P3rEPj0FCoI%2F%2F1gyeGXy9zjpPpp&X-Amz-Signature=cd8d49fb4e6d2b534968154c65e7664de90e62324ef12b8a2dfb4846f4009c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676PER7NC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICKphQsSiy3QP7pd5AHa4zKGfFzmZDa2bjbJ%2BI9ttikmAiBp11h8VEzrOyyPpJcnbbEmo1ChKxlb2LKns5%2BpmKc7xSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMV68GeWl4dg3fMoXnKtwDOo%2FeXvmbE7XOaQhqZdtLH96sns5dnrc7gF9yz5%2Bv6M%2FLFj%2F9nlfIIh0Mf3C%2F0QwDgneXQIVyOioTBmB42Sl3ipfC8qDsqpO%2B209Xk6n3agfvY%2F5PdufafH1GMlkBCjSuepAM%2BzkET0jxro%2BAHBIYJZ76tsVjDSwBMjdsGngJ5Mc1JpjQXKbbZzJuFmtvVtq5M%2B1AConQ5pB2D6d3Ya02%2BwHrzlPbzyeiete3Xm3aCjWkIaxn06Ia6UsQGXDXe6xFx5tnxjxdgY0EQk%2BfN%2BKygITwDzaIhcE90VMzzTZOJeKOwfRf2%2F99tUeMnw5cV4l%2BS8CgEegshNkxP9R%2B32carqmVQ3fSZtvny5MEjRkenXORnNvQdVUef9%2BCu0IyhbX3F%2FIAgvRIqLlGzsUizpyIn5y8FgUgYk9FKO%2FfeAzlmGVWf9hPR0nYecK6B0oIxecTuSqB3LJBrqMSY9li9r0%2FRzzmVC7XWNARMLR5%2FLXvfYEIvjc9KPiM16mBDVFYGqvaK%2BBnXPeOVEONmhgwEE3WvNFCdysHrRyFKL3K2Ai%2BeWbung%2FoQfmnWc8JTEC%2FEhqWVnP88mOwDm9h7md%2BKtL%2FR8nXhin%2Fxo6cHLxKBX%2BwLs%2Br22ZIS6nTTNyb%2BOIwq8%2FMxAY6pgErP13pojaLHHMfSCgsm97sHrtiYn8R7GdVtln%2FdJFuXquLSIK2MqXkZxG%2FmYSgaLd77JvHaNPymP8KMefBlXvWgBWSiaRLop27lsjmMbI0EZC8qYTVPwisa8Hd261ZCEukpb8YGsv7Xi8HzYPyp8uSm19v8lnZ65rPRVHg7hVoxsINgUkz09lmvhlmUydBRb7t9e%2Fa%2BuRG67SF7ThbvijbRt2nBryR&X-Amz-Signature=96100f3f2b2b490f0ac3dabfa54a2dcdbf099c354aa3e21f45f9164b8ab130ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GINBWNF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCsBBjlZSfgj6DRAxKDqbuW8bmaB0qywLAbydBKG3%2B47gIgHq3DOsn86cH2UNjM0BH1KRz1BZFDDz5dQ9apRzgFJ6wq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFGzM2wUbUZSIeP4mSrcA0IdneObBzqVY6PEWQN7idNdUwbm%2FU%2FitO%2FATycslGYvZ%2BHJOVXmR4crgEL7TiwyYNnrSoRCJSrPStTDAbK4e1MVEA0R4e%2FKCKuVn2ip3Zqe1iJ1z%2BwqxhddqOrwN4095IsEB%2FiAtu5co12DcqeftKm8CfmohcEJPgOr8Wku2GTFyX%2FDDuMhv3eThZBIKZ%2FGb%2FEKoKuEgGZylApTuQHvT2%2BZYxBM9oml4hYdujA2qfKxwV4H6oE13z1zE4ijZt1DrCBnIbO60YAvrD%2Buw2TeoKcRcJh5Lv2eX2luXMT42Y1e1yWGUn7g7KMU092R%2B63CyOXRv0GGrvc1hhG%2BCnpH39SOtg8bT6gyHUWa%2F%2Fetg5rEln7X6zlepcvF4Fkac1hGhOQ3gmYVHa13X7rZx3vxWxU1knWeXtkErYcPYyiQSQdrV5OdZtYjbozUh3iEZpZ%2F%2BL8FDuSf65yOvO2jsnIncrFFGo2GwWx9W0n83L%2FoTA%2BVI7cIwp2uTWL8zoZ5sLukwt7aO0fmzGFZIb7nqde0l1AeeZ9Q7s%2B8fUV0vxaVr64LBSPiTkGS8V1Nc8xNl7fMm4bcxg0OunvwS64llZMpC6yHZdwaAxoKUqsu%2Ft19hGiCjngxNr07CkOYv0wiML7PzMQGOqUBVrIi8gR%2FTWiKxLoPBhOshuUwZhD2bYQJl7Chc8dB2lUMit1o%2FPRdWi0uRY8xHkzRMd%2BAo9Kcv0Cr9eHtZqs9svoWMOPSCx%2B8sJAeA8kgOkffrk37whv5FXvsnp9H%2B7VyxA3h5gOvlNDQuOhNJE1D2qh11po5%2BAHZWgGJqzd0MfxtER2bL9ps%2BAArE2hVwpOR8P3rEPj0FCoI%2F%2F1gyeGXy9zjpPpp&X-Amz-Signature=96af57e2715ef6af6a90e07e5ee58b00e431024474fdd26d55ea2478f786329b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GINBWNF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCsBBjlZSfgj6DRAxKDqbuW8bmaB0qywLAbydBKG3%2B47gIgHq3DOsn86cH2UNjM0BH1KRz1BZFDDz5dQ9apRzgFJ6wq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFGzM2wUbUZSIeP4mSrcA0IdneObBzqVY6PEWQN7idNdUwbm%2FU%2FitO%2FATycslGYvZ%2BHJOVXmR4crgEL7TiwyYNnrSoRCJSrPStTDAbK4e1MVEA0R4e%2FKCKuVn2ip3Zqe1iJ1z%2BwqxhddqOrwN4095IsEB%2FiAtu5co12DcqeftKm8CfmohcEJPgOr8Wku2GTFyX%2FDDuMhv3eThZBIKZ%2FGb%2FEKoKuEgGZylApTuQHvT2%2BZYxBM9oml4hYdujA2qfKxwV4H6oE13z1zE4ijZt1DrCBnIbO60YAvrD%2Buw2TeoKcRcJh5Lv2eX2luXMT42Y1e1yWGUn7g7KMU092R%2B63CyOXRv0GGrvc1hhG%2BCnpH39SOtg8bT6gyHUWa%2F%2Fetg5rEln7X6zlepcvF4Fkac1hGhOQ3gmYVHa13X7rZx3vxWxU1knWeXtkErYcPYyiQSQdrV5OdZtYjbozUh3iEZpZ%2F%2BL8FDuSf65yOvO2jsnIncrFFGo2GwWx9W0n83L%2FoTA%2BVI7cIwp2uTWL8zoZ5sLukwt7aO0fmzGFZIb7nqde0l1AeeZ9Q7s%2B8fUV0vxaVr64LBSPiTkGS8V1Nc8xNl7fMm4bcxg0OunvwS64llZMpC6yHZdwaAxoKUqsu%2Ft19hGiCjngxNr07CkOYv0wiML7PzMQGOqUBVrIi8gR%2FTWiKxLoPBhOshuUwZhD2bYQJl7Chc8dB2lUMit1o%2FPRdWi0uRY8xHkzRMd%2BAo9Kcv0Cr9eHtZqs9svoWMOPSCx%2B8sJAeA8kgOkffrk37whv5FXvsnp9H%2B7VyxA3h5gOvlNDQuOhNJE1D2qh11po5%2BAHZWgGJqzd0MfxtER2bL9ps%2BAArE2hVwpOR8P3rEPj0FCoI%2F%2F1gyeGXy9zjpPpp&X-Amz-Signature=7343430104c1ac6ee4bea0ba06dd9cb4e81ee1a2ab27989b80b49eb4e2e0815e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GINBWNF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCsBBjlZSfgj6DRAxKDqbuW8bmaB0qywLAbydBKG3%2B47gIgHq3DOsn86cH2UNjM0BH1KRz1BZFDDz5dQ9apRzgFJ6wq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFGzM2wUbUZSIeP4mSrcA0IdneObBzqVY6PEWQN7idNdUwbm%2FU%2FitO%2FATycslGYvZ%2BHJOVXmR4crgEL7TiwyYNnrSoRCJSrPStTDAbK4e1MVEA0R4e%2FKCKuVn2ip3Zqe1iJ1z%2BwqxhddqOrwN4095IsEB%2FiAtu5co12DcqeftKm8CfmohcEJPgOr8Wku2GTFyX%2FDDuMhv3eThZBIKZ%2FGb%2FEKoKuEgGZylApTuQHvT2%2BZYxBM9oml4hYdujA2qfKxwV4H6oE13z1zE4ijZt1DrCBnIbO60YAvrD%2Buw2TeoKcRcJh5Lv2eX2luXMT42Y1e1yWGUn7g7KMU092R%2B63CyOXRv0GGrvc1hhG%2BCnpH39SOtg8bT6gyHUWa%2F%2Fetg5rEln7X6zlepcvF4Fkac1hGhOQ3gmYVHa13X7rZx3vxWxU1knWeXtkErYcPYyiQSQdrV5OdZtYjbozUh3iEZpZ%2F%2BL8FDuSf65yOvO2jsnIncrFFGo2GwWx9W0n83L%2FoTA%2BVI7cIwp2uTWL8zoZ5sLukwt7aO0fmzGFZIb7nqde0l1AeeZ9Q7s%2B8fUV0vxaVr64LBSPiTkGS8V1Nc8xNl7fMm4bcxg0OunvwS64llZMpC6yHZdwaAxoKUqsu%2Ft19hGiCjngxNr07CkOYv0wiML7PzMQGOqUBVrIi8gR%2FTWiKxLoPBhOshuUwZhD2bYQJl7Chc8dB2lUMit1o%2FPRdWi0uRY8xHkzRMd%2BAo9Kcv0Cr9eHtZqs9svoWMOPSCx%2B8sJAeA8kgOkffrk37whv5FXvsnp9H%2B7VyxA3h5gOvlNDQuOhNJE1D2qh11po5%2BAHZWgGJqzd0MfxtER2bL9ps%2BAArE2hVwpOR8P3rEPj0FCoI%2F%2F1gyeGXy9zjpPpp&X-Amz-Signature=f3b0603dfad050b9e1ee3392e125ac339d3bf92037a624cb0bc2e776f2dbcd1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GINBWNF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCsBBjlZSfgj6DRAxKDqbuW8bmaB0qywLAbydBKG3%2B47gIgHq3DOsn86cH2UNjM0BH1KRz1BZFDDz5dQ9apRzgFJ6wq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFGzM2wUbUZSIeP4mSrcA0IdneObBzqVY6PEWQN7idNdUwbm%2FU%2FitO%2FATycslGYvZ%2BHJOVXmR4crgEL7TiwyYNnrSoRCJSrPStTDAbK4e1MVEA0R4e%2FKCKuVn2ip3Zqe1iJ1z%2BwqxhddqOrwN4095IsEB%2FiAtu5co12DcqeftKm8CfmohcEJPgOr8Wku2GTFyX%2FDDuMhv3eThZBIKZ%2FGb%2FEKoKuEgGZylApTuQHvT2%2BZYxBM9oml4hYdujA2qfKxwV4H6oE13z1zE4ijZt1DrCBnIbO60YAvrD%2Buw2TeoKcRcJh5Lv2eX2luXMT42Y1e1yWGUn7g7KMU092R%2B63CyOXRv0GGrvc1hhG%2BCnpH39SOtg8bT6gyHUWa%2F%2Fetg5rEln7X6zlepcvF4Fkac1hGhOQ3gmYVHa13X7rZx3vxWxU1knWeXtkErYcPYyiQSQdrV5OdZtYjbozUh3iEZpZ%2F%2BL8FDuSf65yOvO2jsnIncrFFGo2GwWx9W0n83L%2FoTA%2BVI7cIwp2uTWL8zoZ5sLukwt7aO0fmzGFZIb7nqde0l1AeeZ9Q7s%2B8fUV0vxaVr64LBSPiTkGS8V1Nc8xNl7fMm4bcxg0OunvwS64llZMpC6yHZdwaAxoKUqsu%2Ft19hGiCjngxNr07CkOYv0wiML7PzMQGOqUBVrIi8gR%2FTWiKxLoPBhOshuUwZhD2bYQJl7Chc8dB2lUMit1o%2FPRdWi0uRY8xHkzRMd%2BAo9Kcv0Cr9eHtZqs9svoWMOPSCx%2B8sJAeA8kgOkffrk37whv5FXvsnp9H%2B7VyxA3h5gOvlNDQuOhNJE1D2qh11po5%2BAHZWgGJqzd0MfxtER2bL9ps%2BAArE2hVwpOR8P3rEPj0FCoI%2F%2F1gyeGXy9zjpPpp&X-Amz-Signature=49639878630886338dc728280cd41cadb387345cae9b2439cee2619255c87243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GINBWNF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCsBBjlZSfgj6DRAxKDqbuW8bmaB0qywLAbydBKG3%2B47gIgHq3DOsn86cH2UNjM0BH1KRz1BZFDDz5dQ9apRzgFJ6wq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFGzM2wUbUZSIeP4mSrcA0IdneObBzqVY6PEWQN7idNdUwbm%2FU%2FitO%2FATycslGYvZ%2BHJOVXmR4crgEL7TiwyYNnrSoRCJSrPStTDAbK4e1MVEA0R4e%2FKCKuVn2ip3Zqe1iJ1z%2BwqxhddqOrwN4095IsEB%2FiAtu5co12DcqeftKm8CfmohcEJPgOr8Wku2GTFyX%2FDDuMhv3eThZBIKZ%2FGb%2FEKoKuEgGZylApTuQHvT2%2BZYxBM9oml4hYdujA2qfKxwV4H6oE13z1zE4ijZt1DrCBnIbO60YAvrD%2Buw2TeoKcRcJh5Lv2eX2luXMT42Y1e1yWGUn7g7KMU092R%2B63CyOXRv0GGrvc1hhG%2BCnpH39SOtg8bT6gyHUWa%2F%2Fetg5rEln7X6zlepcvF4Fkac1hGhOQ3gmYVHa13X7rZx3vxWxU1knWeXtkErYcPYyiQSQdrV5OdZtYjbozUh3iEZpZ%2F%2BL8FDuSf65yOvO2jsnIncrFFGo2GwWx9W0n83L%2FoTA%2BVI7cIwp2uTWL8zoZ5sLukwt7aO0fmzGFZIb7nqde0l1AeeZ9Q7s%2B8fUV0vxaVr64LBSPiTkGS8V1Nc8xNl7fMm4bcxg0OunvwS64llZMpC6yHZdwaAxoKUqsu%2Ft19hGiCjngxNr07CkOYv0wiML7PzMQGOqUBVrIi8gR%2FTWiKxLoPBhOshuUwZhD2bYQJl7Chc8dB2lUMit1o%2FPRdWi0uRY8xHkzRMd%2BAo9Kcv0Cr9eHtZqs9svoWMOPSCx%2B8sJAeA8kgOkffrk37whv5FXvsnp9H%2B7VyxA3h5gOvlNDQuOhNJE1D2qh11po5%2BAHZWgGJqzd0MfxtER2bL9ps%2BAArE2hVwpOR8P3rEPj0FCoI%2F%2F1gyeGXy9zjpPpp&X-Amz-Signature=97b707bdb780ff76e08427b813739f902a6a8e0e3a28688c29589b1923fabdb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GINBWNF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCsBBjlZSfgj6DRAxKDqbuW8bmaB0qywLAbydBKG3%2B47gIgHq3DOsn86cH2UNjM0BH1KRz1BZFDDz5dQ9apRzgFJ6wq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFGzM2wUbUZSIeP4mSrcA0IdneObBzqVY6PEWQN7idNdUwbm%2FU%2FitO%2FATycslGYvZ%2BHJOVXmR4crgEL7TiwyYNnrSoRCJSrPStTDAbK4e1MVEA0R4e%2FKCKuVn2ip3Zqe1iJ1z%2BwqxhddqOrwN4095IsEB%2FiAtu5co12DcqeftKm8CfmohcEJPgOr8Wku2GTFyX%2FDDuMhv3eThZBIKZ%2FGb%2FEKoKuEgGZylApTuQHvT2%2BZYxBM9oml4hYdujA2qfKxwV4H6oE13z1zE4ijZt1DrCBnIbO60YAvrD%2Buw2TeoKcRcJh5Lv2eX2luXMT42Y1e1yWGUn7g7KMU092R%2B63CyOXRv0GGrvc1hhG%2BCnpH39SOtg8bT6gyHUWa%2F%2Fetg5rEln7X6zlepcvF4Fkac1hGhOQ3gmYVHa13X7rZx3vxWxU1knWeXtkErYcPYyiQSQdrV5OdZtYjbozUh3iEZpZ%2F%2BL8FDuSf65yOvO2jsnIncrFFGo2GwWx9W0n83L%2FoTA%2BVI7cIwp2uTWL8zoZ5sLukwt7aO0fmzGFZIb7nqde0l1AeeZ9Q7s%2B8fUV0vxaVr64LBSPiTkGS8V1Nc8xNl7fMm4bcxg0OunvwS64llZMpC6yHZdwaAxoKUqsu%2Ft19hGiCjngxNr07CkOYv0wiML7PzMQGOqUBVrIi8gR%2FTWiKxLoPBhOshuUwZhD2bYQJl7Chc8dB2lUMit1o%2FPRdWi0uRY8xHkzRMd%2BAo9Kcv0Cr9eHtZqs9svoWMOPSCx%2B8sJAeA8kgOkffrk37whv5FXvsnp9H%2B7VyxA3h5gOvlNDQuOhNJE1D2qh11po5%2BAHZWgGJqzd0MfxtER2bL9ps%2BAArE2hVwpOR8P3rEPj0FCoI%2F%2F1gyeGXy9zjpPpp&X-Amz-Signature=ec67e70b6715665c48b85decd5f183a6ffd54ade4ba8b0e9b6a55e841c28e241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
