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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVJ6D2J%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCWx8HysPNg9I1HaPWOvd8xrke0JpX8WBqxSYQ54dARwAIhAI7bFBlfA7vMO9YFm2xolzz%2FYeg0g2zK9NnNjlUcSbrCKv8DCGUQABoMNjM3NDIzMTgzODA1IgxZBF9qg3nU0nfnGmwq3AMh4SYa1z7%2BcFO%2Fmb8u7%2FCyCSm1sFsGoHyzp7qxyXrWqHaGSriiiFdgneboHXZwtYWDhghnNNOTjWOwp3ysvYWn2A7yi5HRRy8kCYWt88l7z1FvBUIJt5KCQmSNGScsdX42wjWWC6JrQfKB2EBcL5nTyPWSIUghrJT2jGpjESGSaG8MJjuCGfLizMNEoDVul%2F2fWZw8F78QsFBo3MvywM2dGRncBPmiXlr90P7uvpzkuyigUVX0cGgDrELvkSH%2BbZqja7zso4nRGd2kb1P2hYqluYC%2BlLH7Zfd3H0jXjhQlbLQ5EjMT90L7UlgINqiCQB%2FJH3RVFOzj%2BS7clhRuGnijJdc324oYWHUKaDN%2FGqLQW9dHedYOmPFgPbzE9LQjfMI5OHcJBymS7sFwsVJqn1a%2FS4pfyavLhNWG%2BpiC6ZZg%2FUkrGO%2BcP7RZRlbcAF2uvkd4bzS4uoiSq9UgU%2FWW8%2FRg8wxjxLCiLcX6E5ZDpLidk69jsmqhAEI9AvBPhzOzVB3wVto1B1SWax1Z%2Bwzdj6LXZOf58AKao4tTnYJxqMpm32t%2FsdpGdS94XHL6RtEoUa2INarzKyPfJRz160zeMHn2IGVYKy%2FXNTOseJNH8j6V%2F0qJruMYnuZLSL93uDDrvMnEBjqkAQspK9wnLwcFEd8kINHRvwreNPR4yAlsaE4X8KYMq%2F2OHK0obpZtmtRdrXH5Vf8%2BnmWsvEuRBa64o1jw5ehI0m8K8g4BnJi%2BUlTLckf6qcmiF5qh7KRb9jwZ6Tq4iybG2nsB0fcPJmfxYVG%2BdscyIF2wv01edz8PfS3bLOfEpzBltTyLsKzK4VTyumaVqtWQCk%2B9kJZC1kp%2B41ibkJHq2hTFQNHG&X-Amz-Signature=235577f81c0638d65309cb0ab683da9c3b46ec431116b6959915414fabbe1044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVJ6D2J%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCWx8HysPNg9I1HaPWOvd8xrke0JpX8WBqxSYQ54dARwAIhAI7bFBlfA7vMO9YFm2xolzz%2FYeg0g2zK9NnNjlUcSbrCKv8DCGUQABoMNjM3NDIzMTgzODA1IgxZBF9qg3nU0nfnGmwq3AMh4SYa1z7%2BcFO%2Fmb8u7%2FCyCSm1sFsGoHyzp7qxyXrWqHaGSriiiFdgneboHXZwtYWDhghnNNOTjWOwp3ysvYWn2A7yi5HRRy8kCYWt88l7z1FvBUIJt5KCQmSNGScsdX42wjWWC6JrQfKB2EBcL5nTyPWSIUghrJT2jGpjESGSaG8MJjuCGfLizMNEoDVul%2F2fWZw8F78QsFBo3MvywM2dGRncBPmiXlr90P7uvpzkuyigUVX0cGgDrELvkSH%2BbZqja7zso4nRGd2kb1P2hYqluYC%2BlLH7Zfd3H0jXjhQlbLQ5EjMT90L7UlgINqiCQB%2FJH3RVFOzj%2BS7clhRuGnijJdc324oYWHUKaDN%2FGqLQW9dHedYOmPFgPbzE9LQjfMI5OHcJBymS7sFwsVJqn1a%2FS4pfyavLhNWG%2BpiC6ZZg%2FUkrGO%2BcP7RZRlbcAF2uvkd4bzS4uoiSq9UgU%2FWW8%2FRg8wxjxLCiLcX6E5ZDpLidk69jsmqhAEI9AvBPhzOzVB3wVto1B1SWax1Z%2Bwzdj6LXZOf58AKao4tTnYJxqMpm32t%2FsdpGdS94XHL6RtEoUa2INarzKyPfJRz160zeMHn2IGVYKy%2FXNTOseJNH8j6V%2F0qJruMYnuZLSL93uDDrvMnEBjqkAQspK9wnLwcFEd8kINHRvwreNPR4yAlsaE4X8KYMq%2F2OHK0obpZtmtRdrXH5Vf8%2BnmWsvEuRBa64o1jw5ehI0m8K8g4BnJi%2BUlTLckf6qcmiF5qh7KRb9jwZ6Tq4iybG2nsB0fcPJmfxYVG%2BdscyIF2wv01edz8PfS3bLOfEpzBltTyLsKzK4VTyumaVqtWQCk%2B9kJZC1kp%2B41ibkJHq2hTFQNHG&X-Amz-Signature=9e43e31905f035cfcc6ed1fbe18e68450cd42cbd3509841aa6770fd360745095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVJ6D2J%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCWx8HysPNg9I1HaPWOvd8xrke0JpX8WBqxSYQ54dARwAIhAI7bFBlfA7vMO9YFm2xolzz%2FYeg0g2zK9NnNjlUcSbrCKv8DCGUQABoMNjM3NDIzMTgzODA1IgxZBF9qg3nU0nfnGmwq3AMh4SYa1z7%2BcFO%2Fmb8u7%2FCyCSm1sFsGoHyzp7qxyXrWqHaGSriiiFdgneboHXZwtYWDhghnNNOTjWOwp3ysvYWn2A7yi5HRRy8kCYWt88l7z1FvBUIJt5KCQmSNGScsdX42wjWWC6JrQfKB2EBcL5nTyPWSIUghrJT2jGpjESGSaG8MJjuCGfLizMNEoDVul%2F2fWZw8F78QsFBo3MvywM2dGRncBPmiXlr90P7uvpzkuyigUVX0cGgDrELvkSH%2BbZqja7zso4nRGd2kb1P2hYqluYC%2BlLH7Zfd3H0jXjhQlbLQ5EjMT90L7UlgINqiCQB%2FJH3RVFOzj%2BS7clhRuGnijJdc324oYWHUKaDN%2FGqLQW9dHedYOmPFgPbzE9LQjfMI5OHcJBymS7sFwsVJqn1a%2FS4pfyavLhNWG%2BpiC6ZZg%2FUkrGO%2BcP7RZRlbcAF2uvkd4bzS4uoiSq9UgU%2FWW8%2FRg8wxjxLCiLcX6E5ZDpLidk69jsmqhAEI9AvBPhzOzVB3wVto1B1SWax1Z%2Bwzdj6LXZOf58AKao4tTnYJxqMpm32t%2FsdpGdS94XHL6RtEoUa2INarzKyPfJRz160zeMHn2IGVYKy%2FXNTOseJNH8j6V%2F0qJruMYnuZLSL93uDDrvMnEBjqkAQspK9wnLwcFEd8kINHRvwreNPR4yAlsaE4X8KYMq%2F2OHK0obpZtmtRdrXH5Vf8%2BnmWsvEuRBa64o1jw5ehI0m8K8g4BnJi%2BUlTLckf6qcmiF5qh7KRb9jwZ6Tq4iybG2nsB0fcPJmfxYVG%2BdscyIF2wv01edz8PfS3bLOfEpzBltTyLsKzK4VTyumaVqtWQCk%2B9kJZC1kp%2B41ibkJHq2hTFQNHG&X-Amz-Signature=66999591c4705e4b0f686287f1b92be3bdd314d62852b350c4737db86d2ca6b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVJ6D2J%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCWx8HysPNg9I1HaPWOvd8xrke0JpX8WBqxSYQ54dARwAIhAI7bFBlfA7vMO9YFm2xolzz%2FYeg0g2zK9NnNjlUcSbrCKv8DCGUQABoMNjM3NDIzMTgzODA1IgxZBF9qg3nU0nfnGmwq3AMh4SYa1z7%2BcFO%2Fmb8u7%2FCyCSm1sFsGoHyzp7qxyXrWqHaGSriiiFdgneboHXZwtYWDhghnNNOTjWOwp3ysvYWn2A7yi5HRRy8kCYWt88l7z1FvBUIJt5KCQmSNGScsdX42wjWWC6JrQfKB2EBcL5nTyPWSIUghrJT2jGpjESGSaG8MJjuCGfLizMNEoDVul%2F2fWZw8F78QsFBo3MvywM2dGRncBPmiXlr90P7uvpzkuyigUVX0cGgDrELvkSH%2BbZqja7zso4nRGd2kb1P2hYqluYC%2BlLH7Zfd3H0jXjhQlbLQ5EjMT90L7UlgINqiCQB%2FJH3RVFOzj%2BS7clhRuGnijJdc324oYWHUKaDN%2FGqLQW9dHedYOmPFgPbzE9LQjfMI5OHcJBymS7sFwsVJqn1a%2FS4pfyavLhNWG%2BpiC6ZZg%2FUkrGO%2BcP7RZRlbcAF2uvkd4bzS4uoiSq9UgU%2FWW8%2FRg8wxjxLCiLcX6E5ZDpLidk69jsmqhAEI9AvBPhzOzVB3wVto1B1SWax1Z%2Bwzdj6LXZOf58AKao4tTnYJxqMpm32t%2FsdpGdS94XHL6RtEoUa2INarzKyPfJRz160zeMHn2IGVYKy%2FXNTOseJNH8j6V%2F0qJruMYnuZLSL93uDDrvMnEBjqkAQspK9wnLwcFEd8kINHRvwreNPR4yAlsaE4X8KYMq%2F2OHK0obpZtmtRdrXH5Vf8%2BnmWsvEuRBa64o1jw5ehI0m8K8g4BnJi%2BUlTLckf6qcmiF5qh7KRb9jwZ6Tq4iybG2nsB0fcPJmfxYVG%2BdscyIF2wv01edz8PfS3bLOfEpzBltTyLsKzK4VTyumaVqtWQCk%2B9kJZC1kp%2B41ibkJHq2hTFQNHG&X-Amz-Signature=d343c6a0956092a95f4e2a259e43bf7fdc0f77f7276ab2fa5bf432ae444c8548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U3JCGRF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCOCs9stLsN38f9pfApILMmnuWtj06cwmE7LyBdZxJGyAIhAPlxR6D1sZQHUhvQtC%2BUPcEXFnK3d1ej6wQFFAKn5vryKv8DCGUQABoMNjM3NDIzMTgzODA1Igz6DMbZKMjQDrZtCH8q3APLR6Fs3cmZ7Rz3Dvb8nOepQugRjW9U7CnRrf3dfeiCPGlGYLnUoNIsf8%2BS%2FjeGaibFxCLJMNjUh8VsUstt1nobAy%2Fg9DJRBOqzuTJu%2BAR4gAlPNXcjH6GmfdnzVbqHHscQL9uShDLwTgur1HYXkKZ%2BYV6NsE%2BNlgSUzMXDXYzHs9vuZgLfA6tywldk%2FZxuQ9bQudOdEzN7bCjXS0VhHFAV9L87f8%2FRRr7buL5Hx6Py9IyND3rNH6StUEg1l64C4M3GaGvdAIH10q1MCpawrjLeEmcDPwcRsGIMA0t%2BQI%2FDOOQhWocQ1XXUsE11eP%2FhDgTh9hLITQktZpOmjRDJ1EAlWd5qQ34h9N33nd6bQ8vUgcPozQvAzk5hIWiQDFR7RdiTQv6eP%2F67XXbtJSiQRRSQhNF%2Fn72VrwSDfWq9ZetPG8lMbpXilosaRJBoG1HYZOajGzEaEZH0aHqc%2FvE4OKmuWy5iYVMAaJEd96wRWCnk0PJPDFuPmV%2Flhya6RWBLtVC3fZOoqF%2BtP%2BbrX6Y2dHcHAiHYARnDVTIfxaX9fmLFFE85lKDC2xRPBOc6QIBtcjC%2Fnd%2FcooQ0WNrJHEKZJn2S6mY0BKGOMnrvz4aK3Z9HZTJcvGaYX2rXPdj%2B2jDdu8nEBjqkAe1s2%2B4zDkzUfh6sv%2BJRaeKoCC8X399vL2S0OdmpOd0KWA6xBIt7Y%2BoZ6LLAt0vacrFK%2FpN3ISmFjliA84TGadWA36vZaWWR5fNJLGhthU3uil5JmSS%2FRes9wJhwTdAb%2FoST6%2FveKKbdAbap712ub%2FlcS7oMoaYFJMCABWWZZTVdDE%2Bb49C4vKxsUo89U0g5XbxY3Mi%2B7iCEbeQiuZPcSQO22MpO&X-Amz-Signature=0ea8598a987debd305cf2e248a3614fe3d32752edb3a3062a62328ac067a9e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVJ6D2J%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCWx8HysPNg9I1HaPWOvd8xrke0JpX8WBqxSYQ54dARwAIhAI7bFBlfA7vMO9YFm2xolzz%2FYeg0g2zK9NnNjlUcSbrCKv8DCGUQABoMNjM3NDIzMTgzODA1IgxZBF9qg3nU0nfnGmwq3AMh4SYa1z7%2BcFO%2Fmb8u7%2FCyCSm1sFsGoHyzp7qxyXrWqHaGSriiiFdgneboHXZwtYWDhghnNNOTjWOwp3ysvYWn2A7yi5HRRy8kCYWt88l7z1FvBUIJt5KCQmSNGScsdX42wjWWC6JrQfKB2EBcL5nTyPWSIUghrJT2jGpjESGSaG8MJjuCGfLizMNEoDVul%2F2fWZw8F78QsFBo3MvywM2dGRncBPmiXlr90P7uvpzkuyigUVX0cGgDrELvkSH%2BbZqja7zso4nRGd2kb1P2hYqluYC%2BlLH7Zfd3H0jXjhQlbLQ5EjMT90L7UlgINqiCQB%2FJH3RVFOzj%2BS7clhRuGnijJdc324oYWHUKaDN%2FGqLQW9dHedYOmPFgPbzE9LQjfMI5OHcJBymS7sFwsVJqn1a%2FS4pfyavLhNWG%2BpiC6ZZg%2FUkrGO%2BcP7RZRlbcAF2uvkd4bzS4uoiSq9UgU%2FWW8%2FRg8wxjxLCiLcX6E5ZDpLidk69jsmqhAEI9AvBPhzOzVB3wVto1B1SWax1Z%2Bwzdj6LXZOf58AKao4tTnYJxqMpm32t%2FsdpGdS94XHL6RtEoUa2INarzKyPfJRz160zeMHn2IGVYKy%2FXNTOseJNH8j6V%2F0qJruMYnuZLSL93uDDrvMnEBjqkAQspK9wnLwcFEd8kINHRvwreNPR4yAlsaE4X8KYMq%2F2OHK0obpZtmtRdrXH5Vf8%2BnmWsvEuRBa64o1jw5ehI0m8K8g4BnJi%2BUlTLckf6qcmiF5qh7KRb9jwZ6Tq4iybG2nsB0fcPJmfxYVG%2BdscyIF2wv01edz8PfS3bLOfEpzBltTyLsKzK4VTyumaVqtWQCk%2B9kJZC1kp%2B41ibkJHq2hTFQNHG&X-Amz-Signature=fb3dda17dbb473d36a176ad70ff5d19df7ea1cb020f49a5b0a3fce8d24f1c292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVJ6D2J%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCWx8HysPNg9I1HaPWOvd8xrke0JpX8WBqxSYQ54dARwAIhAI7bFBlfA7vMO9YFm2xolzz%2FYeg0g2zK9NnNjlUcSbrCKv8DCGUQABoMNjM3NDIzMTgzODA1IgxZBF9qg3nU0nfnGmwq3AMh4SYa1z7%2BcFO%2Fmb8u7%2FCyCSm1sFsGoHyzp7qxyXrWqHaGSriiiFdgneboHXZwtYWDhghnNNOTjWOwp3ysvYWn2A7yi5HRRy8kCYWt88l7z1FvBUIJt5KCQmSNGScsdX42wjWWC6JrQfKB2EBcL5nTyPWSIUghrJT2jGpjESGSaG8MJjuCGfLizMNEoDVul%2F2fWZw8F78QsFBo3MvywM2dGRncBPmiXlr90P7uvpzkuyigUVX0cGgDrELvkSH%2BbZqja7zso4nRGd2kb1P2hYqluYC%2BlLH7Zfd3H0jXjhQlbLQ5EjMT90L7UlgINqiCQB%2FJH3RVFOzj%2BS7clhRuGnijJdc324oYWHUKaDN%2FGqLQW9dHedYOmPFgPbzE9LQjfMI5OHcJBymS7sFwsVJqn1a%2FS4pfyavLhNWG%2BpiC6ZZg%2FUkrGO%2BcP7RZRlbcAF2uvkd4bzS4uoiSq9UgU%2FWW8%2FRg8wxjxLCiLcX6E5ZDpLidk69jsmqhAEI9AvBPhzOzVB3wVto1B1SWax1Z%2Bwzdj6LXZOf58AKao4tTnYJxqMpm32t%2FsdpGdS94XHL6RtEoUa2INarzKyPfJRz160zeMHn2IGVYKy%2FXNTOseJNH8j6V%2F0qJruMYnuZLSL93uDDrvMnEBjqkAQspK9wnLwcFEd8kINHRvwreNPR4yAlsaE4X8KYMq%2F2OHK0obpZtmtRdrXH5Vf8%2BnmWsvEuRBa64o1jw5ehI0m8K8g4BnJi%2BUlTLckf6qcmiF5qh7KRb9jwZ6Tq4iybG2nsB0fcPJmfxYVG%2BdscyIF2wv01edz8PfS3bLOfEpzBltTyLsKzK4VTyumaVqtWQCk%2B9kJZC1kp%2B41ibkJHq2hTFQNHG&X-Amz-Signature=702aaba417d3d1cac109cced20ccbc9f74f59c988f84062580d8ddf5731413df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVJ6D2J%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCWx8HysPNg9I1HaPWOvd8xrke0JpX8WBqxSYQ54dARwAIhAI7bFBlfA7vMO9YFm2xolzz%2FYeg0g2zK9NnNjlUcSbrCKv8DCGUQABoMNjM3NDIzMTgzODA1IgxZBF9qg3nU0nfnGmwq3AMh4SYa1z7%2BcFO%2Fmb8u7%2FCyCSm1sFsGoHyzp7qxyXrWqHaGSriiiFdgneboHXZwtYWDhghnNNOTjWOwp3ysvYWn2A7yi5HRRy8kCYWt88l7z1FvBUIJt5KCQmSNGScsdX42wjWWC6JrQfKB2EBcL5nTyPWSIUghrJT2jGpjESGSaG8MJjuCGfLizMNEoDVul%2F2fWZw8F78QsFBo3MvywM2dGRncBPmiXlr90P7uvpzkuyigUVX0cGgDrELvkSH%2BbZqja7zso4nRGd2kb1P2hYqluYC%2BlLH7Zfd3H0jXjhQlbLQ5EjMT90L7UlgINqiCQB%2FJH3RVFOzj%2BS7clhRuGnijJdc324oYWHUKaDN%2FGqLQW9dHedYOmPFgPbzE9LQjfMI5OHcJBymS7sFwsVJqn1a%2FS4pfyavLhNWG%2BpiC6ZZg%2FUkrGO%2BcP7RZRlbcAF2uvkd4bzS4uoiSq9UgU%2FWW8%2FRg8wxjxLCiLcX6E5ZDpLidk69jsmqhAEI9AvBPhzOzVB3wVto1B1SWax1Z%2Bwzdj6LXZOf58AKao4tTnYJxqMpm32t%2FsdpGdS94XHL6RtEoUa2INarzKyPfJRz160zeMHn2IGVYKy%2FXNTOseJNH8j6V%2F0qJruMYnuZLSL93uDDrvMnEBjqkAQspK9wnLwcFEd8kINHRvwreNPR4yAlsaE4X8KYMq%2F2OHK0obpZtmtRdrXH5Vf8%2BnmWsvEuRBa64o1jw5ehI0m8K8g4BnJi%2BUlTLckf6qcmiF5qh7KRb9jwZ6Tq4iybG2nsB0fcPJmfxYVG%2BdscyIF2wv01edz8PfS3bLOfEpzBltTyLsKzK4VTyumaVqtWQCk%2B9kJZC1kp%2B41ibkJHq2hTFQNHG&X-Amz-Signature=7791f44e5ada284dee940965fc54dc4d87b54a6f4c9ac253e5600c936b42c901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVJ6D2J%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCWx8HysPNg9I1HaPWOvd8xrke0JpX8WBqxSYQ54dARwAIhAI7bFBlfA7vMO9YFm2xolzz%2FYeg0g2zK9NnNjlUcSbrCKv8DCGUQABoMNjM3NDIzMTgzODA1IgxZBF9qg3nU0nfnGmwq3AMh4SYa1z7%2BcFO%2Fmb8u7%2FCyCSm1sFsGoHyzp7qxyXrWqHaGSriiiFdgneboHXZwtYWDhghnNNOTjWOwp3ysvYWn2A7yi5HRRy8kCYWt88l7z1FvBUIJt5KCQmSNGScsdX42wjWWC6JrQfKB2EBcL5nTyPWSIUghrJT2jGpjESGSaG8MJjuCGfLizMNEoDVul%2F2fWZw8F78QsFBo3MvywM2dGRncBPmiXlr90P7uvpzkuyigUVX0cGgDrELvkSH%2BbZqja7zso4nRGd2kb1P2hYqluYC%2BlLH7Zfd3H0jXjhQlbLQ5EjMT90L7UlgINqiCQB%2FJH3RVFOzj%2BS7clhRuGnijJdc324oYWHUKaDN%2FGqLQW9dHedYOmPFgPbzE9LQjfMI5OHcJBymS7sFwsVJqn1a%2FS4pfyavLhNWG%2BpiC6ZZg%2FUkrGO%2BcP7RZRlbcAF2uvkd4bzS4uoiSq9UgU%2FWW8%2FRg8wxjxLCiLcX6E5ZDpLidk69jsmqhAEI9AvBPhzOzVB3wVto1B1SWax1Z%2Bwzdj6LXZOf58AKao4tTnYJxqMpm32t%2FsdpGdS94XHL6RtEoUa2INarzKyPfJRz160zeMHn2IGVYKy%2FXNTOseJNH8j6V%2F0qJruMYnuZLSL93uDDrvMnEBjqkAQspK9wnLwcFEd8kINHRvwreNPR4yAlsaE4X8KYMq%2F2OHK0obpZtmtRdrXH5Vf8%2BnmWsvEuRBa64o1jw5ehI0m8K8g4BnJi%2BUlTLckf6qcmiF5qh7KRb9jwZ6Tq4iybG2nsB0fcPJmfxYVG%2BdscyIF2wv01edz8PfS3bLOfEpzBltTyLsKzK4VTyumaVqtWQCk%2B9kJZC1kp%2B41ibkJHq2hTFQNHG&X-Amz-Signature=688d8e4c8844771e71fb21ea2b3884b3140898b2826dc3de393a58754937c72c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVJ6D2J%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCWx8HysPNg9I1HaPWOvd8xrke0JpX8WBqxSYQ54dARwAIhAI7bFBlfA7vMO9YFm2xolzz%2FYeg0g2zK9NnNjlUcSbrCKv8DCGUQABoMNjM3NDIzMTgzODA1IgxZBF9qg3nU0nfnGmwq3AMh4SYa1z7%2BcFO%2Fmb8u7%2FCyCSm1sFsGoHyzp7qxyXrWqHaGSriiiFdgneboHXZwtYWDhghnNNOTjWOwp3ysvYWn2A7yi5HRRy8kCYWt88l7z1FvBUIJt5KCQmSNGScsdX42wjWWC6JrQfKB2EBcL5nTyPWSIUghrJT2jGpjESGSaG8MJjuCGfLizMNEoDVul%2F2fWZw8F78QsFBo3MvywM2dGRncBPmiXlr90P7uvpzkuyigUVX0cGgDrELvkSH%2BbZqja7zso4nRGd2kb1P2hYqluYC%2BlLH7Zfd3H0jXjhQlbLQ5EjMT90L7UlgINqiCQB%2FJH3RVFOzj%2BS7clhRuGnijJdc324oYWHUKaDN%2FGqLQW9dHedYOmPFgPbzE9LQjfMI5OHcJBymS7sFwsVJqn1a%2FS4pfyavLhNWG%2BpiC6ZZg%2FUkrGO%2BcP7RZRlbcAF2uvkd4bzS4uoiSq9UgU%2FWW8%2FRg8wxjxLCiLcX6E5ZDpLidk69jsmqhAEI9AvBPhzOzVB3wVto1B1SWax1Z%2Bwzdj6LXZOf58AKao4tTnYJxqMpm32t%2FsdpGdS94XHL6RtEoUa2INarzKyPfJRz160zeMHn2IGVYKy%2FXNTOseJNH8j6V%2F0qJruMYnuZLSL93uDDrvMnEBjqkAQspK9wnLwcFEd8kINHRvwreNPR4yAlsaE4X8KYMq%2F2OHK0obpZtmtRdrXH5Vf8%2BnmWsvEuRBa64o1jw5ehI0m8K8g4BnJi%2BUlTLckf6qcmiF5qh7KRb9jwZ6Tq4iybG2nsB0fcPJmfxYVG%2BdscyIF2wv01edz8PfS3bLOfEpzBltTyLsKzK4VTyumaVqtWQCk%2B9kJZC1kp%2B41ibkJHq2hTFQNHG&X-Amz-Signature=0a40c34373a25d07f984c87df2e3c647147c37594bcc49903bc4b75d4d6b8539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVJ6D2J%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCWx8HysPNg9I1HaPWOvd8xrke0JpX8WBqxSYQ54dARwAIhAI7bFBlfA7vMO9YFm2xolzz%2FYeg0g2zK9NnNjlUcSbrCKv8DCGUQABoMNjM3NDIzMTgzODA1IgxZBF9qg3nU0nfnGmwq3AMh4SYa1z7%2BcFO%2Fmb8u7%2FCyCSm1sFsGoHyzp7qxyXrWqHaGSriiiFdgneboHXZwtYWDhghnNNOTjWOwp3ysvYWn2A7yi5HRRy8kCYWt88l7z1FvBUIJt5KCQmSNGScsdX42wjWWC6JrQfKB2EBcL5nTyPWSIUghrJT2jGpjESGSaG8MJjuCGfLizMNEoDVul%2F2fWZw8F78QsFBo3MvywM2dGRncBPmiXlr90P7uvpzkuyigUVX0cGgDrELvkSH%2BbZqja7zso4nRGd2kb1P2hYqluYC%2BlLH7Zfd3H0jXjhQlbLQ5EjMT90L7UlgINqiCQB%2FJH3RVFOzj%2BS7clhRuGnijJdc324oYWHUKaDN%2FGqLQW9dHedYOmPFgPbzE9LQjfMI5OHcJBymS7sFwsVJqn1a%2FS4pfyavLhNWG%2BpiC6ZZg%2FUkrGO%2BcP7RZRlbcAF2uvkd4bzS4uoiSq9UgU%2FWW8%2FRg8wxjxLCiLcX6E5ZDpLidk69jsmqhAEI9AvBPhzOzVB3wVto1B1SWax1Z%2Bwzdj6LXZOf58AKao4tTnYJxqMpm32t%2FsdpGdS94XHL6RtEoUa2INarzKyPfJRz160zeMHn2IGVYKy%2FXNTOseJNH8j6V%2F0qJruMYnuZLSL93uDDrvMnEBjqkAQspK9wnLwcFEd8kINHRvwreNPR4yAlsaE4X8KYMq%2F2OHK0obpZtmtRdrXH5Vf8%2BnmWsvEuRBa64o1jw5ehI0m8K8g4BnJi%2BUlTLckf6qcmiF5qh7KRb9jwZ6Tq4iybG2nsB0fcPJmfxYVG%2BdscyIF2wv01edz8PfS3bLOfEpzBltTyLsKzK4VTyumaVqtWQCk%2B9kJZC1kp%2B41ibkJHq2hTFQNHG&X-Amz-Signature=659774066198caa76f7cd6eac6f0661373ee9580289531797c0be85249896154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
