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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDJQ6I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIAwfWwPX7owfdO08KDy%2Fq0OKzmaueSCh8jKZjydJCnUIAiEAi6zgRBdH6bpgNtxnpAXifrJbIY2dLWrRfS25%2B7CyVmEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNOfEZw7uYEH9rMnCrcA1j7lLi0%2FY6TeuFEywAr6JXhse%2BE1Luu%2F%2F5kPn155j8ArZcdxcT9eoqJjXl%2B5vnSaq6HXw5TZXOfyscJnjYpyNjbGDYz7g%2BAlh5ANfz14PVucbi%2BTeVw0Bm7HIntOxsa4spqwIopUHojr6OWcquCZGvpbA3Ap%2FFR6PO7H%2BY%2FkbxFw4VbsRLrQwKXz9V7orjR0xiXp5vIGJI3eMlam4bGHTyNNTvDlxqzPFGib9EPF6gNENyZh0%2Fm6nCuERi5d9XkurGeqXTOE6qiTwdvPaF%2BaObkR51XrcTw4k7zRyxpDEHjSSJnP0z800UlGqXNYSHACFtHgkxWbvSsjtUY0tOJ%2FaUj0FtCklH8VJVCc2SIEqPb67TWZVija%2FWR3SZVr1l%2BM2SScR3uXqNYrW5o04q7yfuW7EjecM1a4OcNfrHeqH88fYZlKh7LS6aLujN4UF3SBNSiZPjH2%2F2w%2BffgdWlVb8IYcZS5qoOiZ84428HR24u8vwurbdSfzDlmUJjEYD76osKl6IUyyjLBh6%2FE5bVrdUyzQ1Q8836lOUsJYOgrKucB0JC5%2FfHEK%2B8V0ZDy2QeWDegVKCEUXCuKMCFKh%2BnQiIQ5xlgpryxjkT17OrQvhLTcH4aDNdYZGA4d5wuoMOKt1cQGOqUBOB4wVbsq3XXP0S78tzo8O%2BzpexQrvK%2BoGexgvfFVTCd6L78P9Nfyb%2FZ20Kl6E5P9l01KDHCxnR4ImsFnA4aop42jtTHQXwbTOit0P4WT1uBn32yp3xDJwWisvzQb7vDdyZJnby4PcxHLrubD4wN9MkbX06s8gWsLNz2GlI1qK8kumgfWDSNXCM3e%2BlEgzRoB9DjudRkfzE%2B4lyjf3%2BuyO2hGoxHK&X-Amz-Signature=77325a4ed6b3f93134dd96b49dc5002c3711140644909d8c2022d78b5968434a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDJQ6I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIAwfWwPX7owfdO08KDy%2Fq0OKzmaueSCh8jKZjydJCnUIAiEAi6zgRBdH6bpgNtxnpAXifrJbIY2dLWrRfS25%2B7CyVmEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNOfEZw7uYEH9rMnCrcA1j7lLi0%2FY6TeuFEywAr6JXhse%2BE1Luu%2F%2F5kPn155j8ArZcdxcT9eoqJjXl%2B5vnSaq6HXw5TZXOfyscJnjYpyNjbGDYz7g%2BAlh5ANfz14PVucbi%2BTeVw0Bm7HIntOxsa4spqwIopUHojr6OWcquCZGvpbA3Ap%2FFR6PO7H%2BY%2FkbxFw4VbsRLrQwKXz9V7orjR0xiXp5vIGJI3eMlam4bGHTyNNTvDlxqzPFGib9EPF6gNENyZh0%2Fm6nCuERi5d9XkurGeqXTOE6qiTwdvPaF%2BaObkR51XrcTw4k7zRyxpDEHjSSJnP0z800UlGqXNYSHACFtHgkxWbvSsjtUY0tOJ%2FaUj0FtCklH8VJVCc2SIEqPb67TWZVija%2FWR3SZVr1l%2BM2SScR3uXqNYrW5o04q7yfuW7EjecM1a4OcNfrHeqH88fYZlKh7LS6aLujN4UF3SBNSiZPjH2%2F2w%2BffgdWlVb8IYcZS5qoOiZ84428HR24u8vwurbdSfzDlmUJjEYD76osKl6IUyyjLBh6%2FE5bVrdUyzQ1Q8836lOUsJYOgrKucB0JC5%2FfHEK%2B8V0ZDy2QeWDegVKCEUXCuKMCFKh%2BnQiIQ5xlgpryxjkT17OrQvhLTcH4aDNdYZGA4d5wuoMOKt1cQGOqUBOB4wVbsq3XXP0S78tzo8O%2BzpexQrvK%2BoGexgvfFVTCd6L78P9Nfyb%2FZ20Kl6E5P9l01KDHCxnR4ImsFnA4aop42jtTHQXwbTOit0P4WT1uBn32yp3xDJwWisvzQb7vDdyZJnby4PcxHLrubD4wN9MkbX06s8gWsLNz2GlI1qK8kumgfWDSNXCM3e%2BlEgzRoB9DjudRkfzE%2B4lyjf3%2BuyO2hGoxHK&X-Amz-Signature=4dbf8ed4a58aaaddb9326eaae01f918d32e7ea557cfb0d73d39fe45bdc398463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDJQ6I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIAwfWwPX7owfdO08KDy%2Fq0OKzmaueSCh8jKZjydJCnUIAiEAi6zgRBdH6bpgNtxnpAXifrJbIY2dLWrRfS25%2B7CyVmEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNOfEZw7uYEH9rMnCrcA1j7lLi0%2FY6TeuFEywAr6JXhse%2BE1Luu%2F%2F5kPn155j8ArZcdxcT9eoqJjXl%2B5vnSaq6HXw5TZXOfyscJnjYpyNjbGDYz7g%2BAlh5ANfz14PVucbi%2BTeVw0Bm7HIntOxsa4spqwIopUHojr6OWcquCZGvpbA3Ap%2FFR6PO7H%2BY%2FkbxFw4VbsRLrQwKXz9V7orjR0xiXp5vIGJI3eMlam4bGHTyNNTvDlxqzPFGib9EPF6gNENyZh0%2Fm6nCuERi5d9XkurGeqXTOE6qiTwdvPaF%2BaObkR51XrcTw4k7zRyxpDEHjSSJnP0z800UlGqXNYSHACFtHgkxWbvSsjtUY0tOJ%2FaUj0FtCklH8VJVCc2SIEqPb67TWZVija%2FWR3SZVr1l%2BM2SScR3uXqNYrW5o04q7yfuW7EjecM1a4OcNfrHeqH88fYZlKh7LS6aLujN4UF3SBNSiZPjH2%2F2w%2BffgdWlVb8IYcZS5qoOiZ84428HR24u8vwurbdSfzDlmUJjEYD76osKl6IUyyjLBh6%2FE5bVrdUyzQ1Q8836lOUsJYOgrKucB0JC5%2FfHEK%2B8V0ZDy2QeWDegVKCEUXCuKMCFKh%2BnQiIQ5xlgpryxjkT17OrQvhLTcH4aDNdYZGA4d5wuoMOKt1cQGOqUBOB4wVbsq3XXP0S78tzo8O%2BzpexQrvK%2BoGexgvfFVTCd6L78P9Nfyb%2FZ20Kl6E5P9l01KDHCxnR4ImsFnA4aop42jtTHQXwbTOit0P4WT1uBn32yp3xDJwWisvzQb7vDdyZJnby4PcxHLrubD4wN9MkbX06s8gWsLNz2GlI1qK8kumgfWDSNXCM3e%2BlEgzRoB9DjudRkfzE%2B4lyjf3%2BuyO2hGoxHK&X-Amz-Signature=0b9bd992b0be8afca36789d6b4350b5a8fbeb73ab44174993f889417e6dd7c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDJQ6I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIAwfWwPX7owfdO08KDy%2Fq0OKzmaueSCh8jKZjydJCnUIAiEAi6zgRBdH6bpgNtxnpAXifrJbIY2dLWrRfS25%2B7CyVmEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNOfEZw7uYEH9rMnCrcA1j7lLi0%2FY6TeuFEywAr6JXhse%2BE1Luu%2F%2F5kPn155j8ArZcdxcT9eoqJjXl%2B5vnSaq6HXw5TZXOfyscJnjYpyNjbGDYz7g%2BAlh5ANfz14PVucbi%2BTeVw0Bm7HIntOxsa4spqwIopUHojr6OWcquCZGvpbA3Ap%2FFR6PO7H%2BY%2FkbxFw4VbsRLrQwKXz9V7orjR0xiXp5vIGJI3eMlam4bGHTyNNTvDlxqzPFGib9EPF6gNENyZh0%2Fm6nCuERi5d9XkurGeqXTOE6qiTwdvPaF%2BaObkR51XrcTw4k7zRyxpDEHjSSJnP0z800UlGqXNYSHACFtHgkxWbvSsjtUY0tOJ%2FaUj0FtCklH8VJVCc2SIEqPb67TWZVija%2FWR3SZVr1l%2BM2SScR3uXqNYrW5o04q7yfuW7EjecM1a4OcNfrHeqH88fYZlKh7LS6aLujN4UF3SBNSiZPjH2%2F2w%2BffgdWlVb8IYcZS5qoOiZ84428HR24u8vwurbdSfzDlmUJjEYD76osKl6IUyyjLBh6%2FE5bVrdUyzQ1Q8836lOUsJYOgrKucB0JC5%2FfHEK%2B8V0ZDy2QeWDegVKCEUXCuKMCFKh%2BnQiIQ5xlgpryxjkT17OrQvhLTcH4aDNdYZGA4d5wuoMOKt1cQGOqUBOB4wVbsq3XXP0S78tzo8O%2BzpexQrvK%2BoGexgvfFVTCd6L78P9Nfyb%2FZ20Kl6E5P9l01KDHCxnR4ImsFnA4aop42jtTHQXwbTOit0P4WT1uBn32yp3xDJwWisvzQb7vDdyZJnby4PcxHLrubD4wN9MkbX06s8gWsLNz2GlI1qK8kumgfWDSNXCM3e%2BlEgzRoB9DjudRkfzE%2B4lyjf3%2BuyO2hGoxHK&X-Amz-Signature=2ecfac8a1e536d2a7f60af4608ddcff0e099d29805b2241f06e5af6f1748df2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N7PJTIU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJFMEMCH32YKNlwth1nmLRd4DDY9ZnpzO8YnMt3sBPI1%2BNF5fACIBNIf6SFvDLFhp9awMmcBXgb9TSoUPr%2FXnbJU%2FnNlaL3KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC8vWPow2oFw5xz1Qq3AOkdpuuvmJmbvdVBU%2B5o%2FURpSIA9Ztb1nOqlAidLypwMgtYwEL9jQdfvONV37xO1XWMiv%2FTay8sHZDlK0rZibH5xntXfTTE%2BsShlZgmfxaCCE%2FbMXisTx1DfDsAU%2FPkM1GF%2Bxib4Uujap%2B8VVDp8%2Bc23eizNRq%2FC8QjA4aBIc%2F%2FnFipYMEHWypDas0CTlKlTe0J71zXQLpm5UmoJWfoj1x65SwUKl3qhWCQx%2FZMW5tmZ1eFHjodbryPWCgzheAcjLxNQtWUyuhUzTIrZO3x8ECkDfxyFQB504IMwt9s%2FOPFcH%2F0u%2Fk4Ep48RHv%2FGr4GMz4sIinFP%2BzW3PSifvExVD7gmdPnukHhNcm7B7OqUrkDj0g5mxr3K%2B81fBJRT8ncA%2BjZfIQbhfOvfVEpVaFVBmn%2BdDTe6IYhjCp5fBej1414vVqD8WctsmXzsN6gLiUWKWQQvhtw9x%2BG9G6s%2FMVv%2BtTG1ucVz1G9XmG8szNtB%2B6hbdYV3PVFNQtd15xtoW4MKx80lON14OLZ%2Bz7%2FaBtwIJoErq9t8%2FsnvB3nrI2Pjt6IEPwkkLaYvdPgR85Ff2vh5mfk5VWPZDiGDG%2FcqyH7tR7RN68EOSdN2TP%2BGa23TK4zJxsN4o0Q4pqj3zkxsDCbrtXEBjqnASSGo2MMjcpSVUSgU%2B%2FeWHdBolR3DsVJyET998kHjqGzpAkhXUGDyectgDm0Obl9tWGeDZl2zFThekUbWTXoVdR2QvGK%2Bc8Q3POiWQUJYoCvSebX4%2FdRZ5xwLaqYZl7fLbIVwAG8XjonVOVu%2B%2B3fx2NKS2yEdUs%2B0JYebNiT2TtKn9j1OwFqG4qW48BBVz%2FB58F4h8CelSyiTesQjWG9R1f%2BzfgHMrr5&X-Amz-Signature=11cacbb7b9838fca1e24df1605bc5bd09d7ba0a93a13d9ad24103012f13190d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDJQ6I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIAwfWwPX7owfdO08KDy%2Fq0OKzmaueSCh8jKZjydJCnUIAiEAi6zgRBdH6bpgNtxnpAXifrJbIY2dLWrRfS25%2B7CyVmEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNOfEZw7uYEH9rMnCrcA1j7lLi0%2FY6TeuFEywAr6JXhse%2BE1Luu%2F%2F5kPn155j8ArZcdxcT9eoqJjXl%2B5vnSaq6HXw5TZXOfyscJnjYpyNjbGDYz7g%2BAlh5ANfz14PVucbi%2BTeVw0Bm7HIntOxsa4spqwIopUHojr6OWcquCZGvpbA3Ap%2FFR6PO7H%2BY%2FkbxFw4VbsRLrQwKXz9V7orjR0xiXp5vIGJI3eMlam4bGHTyNNTvDlxqzPFGib9EPF6gNENyZh0%2Fm6nCuERi5d9XkurGeqXTOE6qiTwdvPaF%2BaObkR51XrcTw4k7zRyxpDEHjSSJnP0z800UlGqXNYSHACFtHgkxWbvSsjtUY0tOJ%2FaUj0FtCklH8VJVCc2SIEqPb67TWZVija%2FWR3SZVr1l%2BM2SScR3uXqNYrW5o04q7yfuW7EjecM1a4OcNfrHeqH88fYZlKh7LS6aLujN4UF3SBNSiZPjH2%2F2w%2BffgdWlVb8IYcZS5qoOiZ84428HR24u8vwurbdSfzDlmUJjEYD76osKl6IUyyjLBh6%2FE5bVrdUyzQ1Q8836lOUsJYOgrKucB0JC5%2FfHEK%2B8V0ZDy2QeWDegVKCEUXCuKMCFKh%2BnQiIQ5xlgpryxjkT17OrQvhLTcH4aDNdYZGA4d5wuoMOKt1cQGOqUBOB4wVbsq3XXP0S78tzo8O%2BzpexQrvK%2BoGexgvfFVTCd6L78P9Nfyb%2FZ20Kl6E5P9l01KDHCxnR4ImsFnA4aop42jtTHQXwbTOit0P4WT1uBn32yp3xDJwWisvzQb7vDdyZJnby4PcxHLrubD4wN9MkbX06s8gWsLNz2GlI1qK8kumgfWDSNXCM3e%2BlEgzRoB9DjudRkfzE%2B4lyjf3%2BuyO2hGoxHK&X-Amz-Signature=d54355b91e7d74ed31e924b3d9f96fad67c662ebe7acdc52469799916b4f9e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDJQ6I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIAwfWwPX7owfdO08KDy%2Fq0OKzmaueSCh8jKZjydJCnUIAiEAi6zgRBdH6bpgNtxnpAXifrJbIY2dLWrRfS25%2B7CyVmEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNOfEZw7uYEH9rMnCrcA1j7lLi0%2FY6TeuFEywAr6JXhse%2BE1Luu%2F%2F5kPn155j8ArZcdxcT9eoqJjXl%2B5vnSaq6HXw5TZXOfyscJnjYpyNjbGDYz7g%2BAlh5ANfz14PVucbi%2BTeVw0Bm7HIntOxsa4spqwIopUHojr6OWcquCZGvpbA3Ap%2FFR6PO7H%2BY%2FkbxFw4VbsRLrQwKXz9V7orjR0xiXp5vIGJI3eMlam4bGHTyNNTvDlxqzPFGib9EPF6gNENyZh0%2Fm6nCuERi5d9XkurGeqXTOE6qiTwdvPaF%2BaObkR51XrcTw4k7zRyxpDEHjSSJnP0z800UlGqXNYSHACFtHgkxWbvSsjtUY0tOJ%2FaUj0FtCklH8VJVCc2SIEqPb67TWZVija%2FWR3SZVr1l%2BM2SScR3uXqNYrW5o04q7yfuW7EjecM1a4OcNfrHeqH88fYZlKh7LS6aLujN4UF3SBNSiZPjH2%2F2w%2BffgdWlVb8IYcZS5qoOiZ84428HR24u8vwurbdSfzDlmUJjEYD76osKl6IUyyjLBh6%2FE5bVrdUyzQ1Q8836lOUsJYOgrKucB0JC5%2FfHEK%2B8V0ZDy2QeWDegVKCEUXCuKMCFKh%2BnQiIQ5xlgpryxjkT17OrQvhLTcH4aDNdYZGA4d5wuoMOKt1cQGOqUBOB4wVbsq3XXP0S78tzo8O%2BzpexQrvK%2BoGexgvfFVTCd6L78P9Nfyb%2FZ20Kl6E5P9l01KDHCxnR4ImsFnA4aop42jtTHQXwbTOit0P4WT1uBn32yp3xDJwWisvzQb7vDdyZJnby4PcxHLrubD4wN9MkbX06s8gWsLNz2GlI1qK8kumgfWDSNXCM3e%2BlEgzRoB9DjudRkfzE%2B4lyjf3%2BuyO2hGoxHK&X-Amz-Signature=1a542ec889ac757b7c29cec718d0b767c3cb62038451c95409b6607ae34740d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDJQ6I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIAwfWwPX7owfdO08KDy%2Fq0OKzmaueSCh8jKZjydJCnUIAiEAi6zgRBdH6bpgNtxnpAXifrJbIY2dLWrRfS25%2B7CyVmEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNOfEZw7uYEH9rMnCrcA1j7lLi0%2FY6TeuFEywAr6JXhse%2BE1Luu%2F%2F5kPn155j8ArZcdxcT9eoqJjXl%2B5vnSaq6HXw5TZXOfyscJnjYpyNjbGDYz7g%2BAlh5ANfz14PVucbi%2BTeVw0Bm7HIntOxsa4spqwIopUHojr6OWcquCZGvpbA3Ap%2FFR6PO7H%2BY%2FkbxFw4VbsRLrQwKXz9V7orjR0xiXp5vIGJI3eMlam4bGHTyNNTvDlxqzPFGib9EPF6gNENyZh0%2Fm6nCuERi5d9XkurGeqXTOE6qiTwdvPaF%2BaObkR51XrcTw4k7zRyxpDEHjSSJnP0z800UlGqXNYSHACFtHgkxWbvSsjtUY0tOJ%2FaUj0FtCklH8VJVCc2SIEqPb67TWZVija%2FWR3SZVr1l%2BM2SScR3uXqNYrW5o04q7yfuW7EjecM1a4OcNfrHeqH88fYZlKh7LS6aLujN4UF3SBNSiZPjH2%2F2w%2BffgdWlVb8IYcZS5qoOiZ84428HR24u8vwurbdSfzDlmUJjEYD76osKl6IUyyjLBh6%2FE5bVrdUyzQ1Q8836lOUsJYOgrKucB0JC5%2FfHEK%2B8V0ZDy2QeWDegVKCEUXCuKMCFKh%2BnQiIQ5xlgpryxjkT17OrQvhLTcH4aDNdYZGA4d5wuoMOKt1cQGOqUBOB4wVbsq3XXP0S78tzo8O%2BzpexQrvK%2BoGexgvfFVTCd6L78P9Nfyb%2FZ20Kl6E5P9l01KDHCxnR4ImsFnA4aop42jtTHQXwbTOit0P4WT1uBn32yp3xDJwWisvzQb7vDdyZJnby4PcxHLrubD4wN9MkbX06s8gWsLNz2GlI1qK8kumgfWDSNXCM3e%2BlEgzRoB9DjudRkfzE%2B4lyjf3%2BuyO2hGoxHK&X-Amz-Signature=5804fc428d6f484075763ecc3ef3a00d1e5593952d6eb9240461cff39db1651c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDJQ6I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIAwfWwPX7owfdO08KDy%2Fq0OKzmaueSCh8jKZjydJCnUIAiEAi6zgRBdH6bpgNtxnpAXifrJbIY2dLWrRfS25%2B7CyVmEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNOfEZw7uYEH9rMnCrcA1j7lLi0%2FY6TeuFEywAr6JXhse%2BE1Luu%2F%2F5kPn155j8ArZcdxcT9eoqJjXl%2B5vnSaq6HXw5TZXOfyscJnjYpyNjbGDYz7g%2BAlh5ANfz14PVucbi%2BTeVw0Bm7HIntOxsa4spqwIopUHojr6OWcquCZGvpbA3Ap%2FFR6PO7H%2BY%2FkbxFw4VbsRLrQwKXz9V7orjR0xiXp5vIGJI3eMlam4bGHTyNNTvDlxqzPFGib9EPF6gNENyZh0%2Fm6nCuERi5d9XkurGeqXTOE6qiTwdvPaF%2BaObkR51XrcTw4k7zRyxpDEHjSSJnP0z800UlGqXNYSHACFtHgkxWbvSsjtUY0tOJ%2FaUj0FtCklH8VJVCc2SIEqPb67TWZVija%2FWR3SZVr1l%2BM2SScR3uXqNYrW5o04q7yfuW7EjecM1a4OcNfrHeqH88fYZlKh7LS6aLujN4UF3SBNSiZPjH2%2F2w%2BffgdWlVb8IYcZS5qoOiZ84428HR24u8vwurbdSfzDlmUJjEYD76osKl6IUyyjLBh6%2FE5bVrdUyzQ1Q8836lOUsJYOgrKucB0JC5%2FfHEK%2B8V0ZDy2QeWDegVKCEUXCuKMCFKh%2BnQiIQ5xlgpryxjkT17OrQvhLTcH4aDNdYZGA4d5wuoMOKt1cQGOqUBOB4wVbsq3XXP0S78tzo8O%2BzpexQrvK%2BoGexgvfFVTCd6L78P9Nfyb%2FZ20Kl6E5P9l01KDHCxnR4ImsFnA4aop42jtTHQXwbTOit0P4WT1uBn32yp3xDJwWisvzQb7vDdyZJnby4PcxHLrubD4wN9MkbX06s8gWsLNz2GlI1qK8kumgfWDSNXCM3e%2BlEgzRoB9DjudRkfzE%2B4lyjf3%2BuyO2hGoxHK&X-Amz-Signature=3e8a7cc343938d675ffbe7626f6d2c94bf2ce89a622e520139069dcee0e2dc81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDJQ6I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIAwfWwPX7owfdO08KDy%2Fq0OKzmaueSCh8jKZjydJCnUIAiEAi6zgRBdH6bpgNtxnpAXifrJbIY2dLWrRfS25%2B7CyVmEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNOfEZw7uYEH9rMnCrcA1j7lLi0%2FY6TeuFEywAr6JXhse%2BE1Luu%2F%2F5kPn155j8ArZcdxcT9eoqJjXl%2B5vnSaq6HXw5TZXOfyscJnjYpyNjbGDYz7g%2BAlh5ANfz14PVucbi%2BTeVw0Bm7HIntOxsa4spqwIopUHojr6OWcquCZGvpbA3Ap%2FFR6PO7H%2BY%2FkbxFw4VbsRLrQwKXz9V7orjR0xiXp5vIGJI3eMlam4bGHTyNNTvDlxqzPFGib9EPF6gNENyZh0%2Fm6nCuERi5d9XkurGeqXTOE6qiTwdvPaF%2BaObkR51XrcTw4k7zRyxpDEHjSSJnP0z800UlGqXNYSHACFtHgkxWbvSsjtUY0tOJ%2FaUj0FtCklH8VJVCc2SIEqPb67TWZVija%2FWR3SZVr1l%2BM2SScR3uXqNYrW5o04q7yfuW7EjecM1a4OcNfrHeqH88fYZlKh7LS6aLujN4UF3SBNSiZPjH2%2F2w%2BffgdWlVb8IYcZS5qoOiZ84428HR24u8vwurbdSfzDlmUJjEYD76osKl6IUyyjLBh6%2FE5bVrdUyzQ1Q8836lOUsJYOgrKucB0JC5%2FfHEK%2B8V0ZDy2QeWDegVKCEUXCuKMCFKh%2BnQiIQ5xlgpryxjkT17OrQvhLTcH4aDNdYZGA4d5wuoMOKt1cQGOqUBOB4wVbsq3XXP0S78tzo8O%2BzpexQrvK%2BoGexgvfFVTCd6L78P9Nfyb%2FZ20Kl6E5P9l01KDHCxnR4ImsFnA4aop42jtTHQXwbTOit0P4WT1uBn32yp3xDJwWisvzQb7vDdyZJnby4PcxHLrubD4wN9MkbX06s8gWsLNz2GlI1qK8kumgfWDSNXCM3e%2BlEgzRoB9DjudRkfzE%2B4lyjf3%2BuyO2hGoxHK&X-Amz-Signature=1c2a88b6fa26cdbabad2c1e58371f59e7843ed18d1bf2cefc7677c175de97ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDJQ6I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIAwfWwPX7owfdO08KDy%2Fq0OKzmaueSCh8jKZjydJCnUIAiEAi6zgRBdH6bpgNtxnpAXifrJbIY2dLWrRfS25%2B7CyVmEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNOfEZw7uYEH9rMnCrcA1j7lLi0%2FY6TeuFEywAr6JXhse%2BE1Luu%2F%2F5kPn155j8ArZcdxcT9eoqJjXl%2B5vnSaq6HXw5TZXOfyscJnjYpyNjbGDYz7g%2BAlh5ANfz14PVucbi%2BTeVw0Bm7HIntOxsa4spqwIopUHojr6OWcquCZGvpbA3Ap%2FFR6PO7H%2BY%2FkbxFw4VbsRLrQwKXz9V7orjR0xiXp5vIGJI3eMlam4bGHTyNNTvDlxqzPFGib9EPF6gNENyZh0%2Fm6nCuERi5d9XkurGeqXTOE6qiTwdvPaF%2BaObkR51XrcTw4k7zRyxpDEHjSSJnP0z800UlGqXNYSHACFtHgkxWbvSsjtUY0tOJ%2FaUj0FtCklH8VJVCc2SIEqPb67TWZVija%2FWR3SZVr1l%2BM2SScR3uXqNYrW5o04q7yfuW7EjecM1a4OcNfrHeqH88fYZlKh7LS6aLujN4UF3SBNSiZPjH2%2F2w%2BffgdWlVb8IYcZS5qoOiZ84428HR24u8vwurbdSfzDlmUJjEYD76osKl6IUyyjLBh6%2FE5bVrdUyzQ1Q8836lOUsJYOgrKucB0JC5%2FfHEK%2B8V0ZDy2QeWDegVKCEUXCuKMCFKh%2BnQiIQ5xlgpryxjkT17OrQvhLTcH4aDNdYZGA4d5wuoMOKt1cQGOqUBOB4wVbsq3XXP0S78tzo8O%2BzpexQrvK%2BoGexgvfFVTCd6L78P9Nfyb%2FZ20Kl6E5P9l01KDHCxnR4ImsFnA4aop42jtTHQXwbTOit0P4WT1uBn32yp3xDJwWisvzQb7vDdyZJnby4PcxHLrubD4wN9MkbX06s8gWsLNz2GlI1qK8kumgfWDSNXCM3e%2BlEgzRoB9DjudRkfzE%2B4lyjf3%2BuyO2hGoxHK&X-Amz-Signature=8ed3bd78a9542af0b4a48562207384ad759fe7aac9d3af8638d02281387c534a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
