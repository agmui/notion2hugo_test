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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWWUSZD%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGioCCX1WPGffz1fLYhpfFu1F37VfvPOcYnexy4Y6WImAiEAkhZOnTjFeadPf58DJBwLClP0cHMfApoqWF7bvx2%2FPxsqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiPPPDZlaI9dXBGoSrcA3uFUd2XgKf9BtIghp0yf7Ub5d2lkg6lTdiRDAqB6AP0BGAFa28NYpufjbpO7LIsZWRQi4mT4%2FxPTOa90DTSqesDDuDJYnx7nzDcQ8h2tVoWiPTeYstZWp9hUc5cPiirS9Jy%2B7XyD5CrKGsCEzbrEcbiVN2nq8BsvN4LDIaCfmRQAUmc%2FnciN6JUr0AukUczGOr5l9Qpl4gtFK68RdEtb%2FFASZZ485PVD3D6PgvVfD8PX5o98Lf7%2FGec14zKxpJEeCKla4LvS3z%2FWLhd4ZC7MU8h0VTP5CUjutXFj8SdMoOqY%2BEfraUR9sacjNP5g2Aapx4e7IFntAlPzfD6a%2Bpw7CmOlHd3l5uFdqOjqhGa5vS0rk1bj13PdAUXzAPD%2Br1Rth%2BXNCUbpmU3MCsljnpM64U%2BH39nPgv6uUd2gvQrcz6P3h4U3ULarvtrQ7bZKoo07hNLT6QfCMBnmZxAvPB%2BBhUF7AVeEdaTKTWhQVVcODsot7CBJLQ65jR6hDaoiEi0eLzmt5BnVXQQwfyFvkT6OrJPZP6lDnh%2FsAGgcrDoyfVtpQjaYs3lEbl2WbCcxSj62Gx73kSWGB4WL4moFu3EmfOISY5%2F%2F8RRelCVh%2F5iN0T89OOX4yIgCe1EFCyuMOuX78gGOqUBwUFrtmAZqbKRa2%2F7zU9ZUFBQhQOpW0SynvQ5mVKCjm7foethc%2BonpFZcbBIDd6ITDeFBYZ%2Bj6Z6VD74tDq45eHVao6uPTm1Kl1NQxxlDx3XDIH%2FP%2FDy%2B8Nlf5L2%2Fcfqj%2Fn9mFgxTOSqewzHbBFlOG6xuuAu3IFo1MlMMlw1r1vE6IoHc%2FqM0kfLxIMeUVdq6uiz8kngtn7v%2BG3cCPmiJ%2BP7uDF%2Fz&X-Amz-Signature=1e0cfae2332148371ac7686b2ef43a2f4bdbc4ae9ab4075892d826612a1376f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWWUSZD%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGioCCX1WPGffz1fLYhpfFu1F37VfvPOcYnexy4Y6WImAiEAkhZOnTjFeadPf58DJBwLClP0cHMfApoqWF7bvx2%2FPxsqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiPPPDZlaI9dXBGoSrcA3uFUd2XgKf9BtIghp0yf7Ub5d2lkg6lTdiRDAqB6AP0BGAFa28NYpufjbpO7LIsZWRQi4mT4%2FxPTOa90DTSqesDDuDJYnx7nzDcQ8h2tVoWiPTeYstZWp9hUc5cPiirS9Jy%2B7XyD5CrKGsCEzbrEcbiVN2nq8BsvN4LDIaCfmRQAUmc%2FnciN6JUr0AukUczGOr5l9Qpl4gtFK68RdEtb%2FFASZZ485PVD3D6PgvVfD8PX5o98Lf7%2FGec14zKxpJEeCKla4LvS3z%2FWLhd4ZC7MU8h0VTP5CUjutXFj8SdMoOqY%2BEfraUR9sacjNP5g2Aapx4e7IFntAlPzfD6a%2Bpw7CmOlHd3l5uFdqOjqhGa5vS0rk1bj13PdAUXzAPD%2Br1Rth%2BXNCUbpmU3MCsljnpM64U%2BH39nPgv6uUd2gvQrcz6P3h4U3ULarvtrQ7bZKoo07hNLT6QfCMBnmZxAvPB%2BBhUF7AVeEdaTKTWhQVVcODsot7CBJLQ65jR6hDaoiEi0eLzmt5BnVXQQwfyFvkT6OrJPZP6lDnh%2FsAGgcrDoyfVtpQjaYs3lEbl2WbCcxSj62Gx73kSWGB4WL4moFu3EmfOISY5%2F%2F8RRelCVh%2F5iN0T89OOX4yIgCe1EFCyuMOuX78gGOqUBwUFrtmAZqbKRa2%2F7zU9ZUFBQhQOpW0SynvQ5mVKCjm7foethc%2BonpFZcbBIDd6ITDeFBYZ%2Bj6Z6VD74tDq45eHVao6uPTm1Kl1NQxxlDx3XDIH%2FP%2FDy%2B8Nlf5L2%2Fcfqj%2Fn9mFgxTOSqewzHbBFlOG6xuuAu3IFo1MlMMlw1r1vE6IoHc%2FqM0kfLxIMeUVdq6uiz8kngtn7v%2BG3cCPmiJ%2BP7uDF%2Fz&X-Amz-Signature=e5cbbd67957f20268b95aad81f060acff5047a71eb28abd58f59fda4faf2fc58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWWUSZD%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGioCCX1WPGffz1fLYhpfFu1F37VfvPOcYnexy4Y6WImAiEAkhZOnTjFeadPf58DJBwLClP0cHMfApoqWF7bvx2%2FPxsqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiPPPDZlaI9dXBGoSrcA3uFUd2XgKf9BtIghp0yf7Ub5d2lkg6lTdiRDAqB6AP0BGAFa28NYpufjbpO7LIsZWRQi4mT4%2FxPTOa90DTSqesDDuDJYnx7nzDcQ8h2tVoWiPTeYstZWp9hUc5cPiirS9Jy%2B7XyD5CrKGsCEzbrEcbiVN2nq8BsvN4LDIaCfmRQAUmc%2FnciN6JUr0AukUczGOr5l9Qpl4gtFK68RdEtb%2FFASZZ485PVD3D6PgvVfD8PX5o98Lf7%2FGec14zKxpJEeCKla4LvS3z%2FWLhd4ZC7MU8h0VTP5CUjutXFj8SdMoOqY%2BEfraUR9sacjNP5g2Aapx4e7IFntAlPzfD6a%2Bpw7CmOlHd3l5uFdqOjqhGa5vS0rk1bj13PdAUXzAPD%2Br1Rth%2BXNCUbpmU3MCsljnpM64U%2BH39nPgv6uUd2gvQrcz6P3h4U3ULarvtrQ7bZKoo07hNLT6QfCMBnmZxAvPB%2BBhUF7AVeEdaTKTWhQVVcODsot7CBJLQ65jR6hDaoiEi0eLzmt5BnVXQQwfyFvkT6OrJPZP6lDnh%2FsAGgcrDoyfVtpQjaYs3lEbl2WbCcxSj62Gx73kSWGB4WL4moFu3EmfOISY5%2F%2F8RRelCVh%2F5iN0T89OOX4yIgCe1EFCyuMOuX78gGOqUBwUFrtmAZqbKRa2%2F7zU9ZUFBQhQOpW0SynvQ5mVKCjm7foethc%2BonpFZcbBIDd6ITDeFBYZ%2Bj6Z6VD74tDq45eHVao6uPTm1Kl1NQxxlDx3XDIH%2FP%2FDy%2B8Nlf5L2%2Fcfqj%2Fn9mFgxTOSqewzHbBFlOG6xuuAu3IFo1MlMMlw1r1vE6IoHc%2FqM0kfLxIMeUVdq6uiz8kngtn7v%2BG3cCPmiJ%2BP7uDF%2Fz&X-Amz-Signature=beeac0fabea3a75773bb62a68ba689e79764f7368ba83e8282752e01741b9f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWWUSZD%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGioCCX1WPGffz1fLYhpfFu1F37VfvPOcYnexy4Y6WImAiEAkhZOnTjFeadPf58DJBwLClP0cHMfApoqWF7bvx2%2FPxsqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiPPPDZlaI9dXBGoSrcA3uFUd2XgKf9BtIghp0yf7Ub5d2lkg6lTdiRDAqB6AP0BGAFa28NYpufjbpO7LIsZWRQi4mT4%2FxPTOa90DTSqesDDuDJYnx7nzDcQ8h2tVoWiPTeYstZWp9hUc5cPiirS9Jy%2B7XyD5CrKGsCEzbrEcbiVN2nq8BsvN4LDIaCfmRQAUmc%2FnciN6JUr0AukUczGOr5l9Qpl4gtFK68RdEtb%2FFASZZ485PVD3D6PgvVfD8PX5o98Lf7%2FGec14zKxpJEeCKla4LvS3z%2FWLhd4ZC7MU8h0VTP5CUjutXFj8SdMoOqY%2BEfraUR9sacjNP5g2Aapx4e7IFntAlPzfD6a%2Bpw7CmOlHd3l5uFdqOjqhGa5vS0rk1bj13PdAUXzAPD%2Br1Rth%2BXNCUbpmU3MCsljnpM64U%2BH39nPgv6uUd2gvQrcz6P3h4U3ULarvtrQ7bZKoo07hNLT6QfCMBnmZxAvPB%2BBhUF7AVeEdaTKTWhQVVcODsot7CBJLQ65jR6hDaoiEi0eLzmt5BnVXQQwfyFvkT6OrJPZP6lDnh%2FsAGgcrDoyfVtpQjaYs3lEbl2WbCcxSj62Gx73kSWGB4WL4moFu3EmfOISY5%2F%2F8RRelCVh%2F5iN0T89OOX4yIgCe1EFCyuMOuX78gGOqUBwUFrtmAZqbKRa2%2F7zU9ZUFBQhQOpW0SynvQ5mVKCjm7foethc%2BonpFZcbBIDd6ITDeFBYZ%2Bj6Z6VD74tDq45eHVao6uPTm1Kl1NQxxlDx3XDIH%2FP%2FDy%2B8Nlf5L2%2Fcfqj%2Fn9mFgxTOSqewzHbBFlOG6xuuAu3IFo1MlMMlw1r1vE6IoHc%2FqM0kfLxIMeUVdq6uiz8kngtn7v%2BG3cCPmiJ%2BP7uDF%2Fz&X-Amz-Signature=dcc024f136cfe05108a0aa69dbb4265c01d0dea1787b35f4dbc927ccbb28d73c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZSDEIXP%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEEhYO%2F29wNa3zFvsbksFxo3Iq6fVxiqaWSM7I7OWaLgIhANFz34K9%2F0Ygd8RJ1v%2Bki8GkT7aVncWPnDH9sX7mkg69KogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5AjboExbLkOzYKTQq3AM6DJvyBwkR4wTDWRrYx3oUbl15L2FweV2D8vLoiVJLws%2FLvyduzR80pZIWqDXMGdss10HIrnsiz3Pu%2BAHfIufHapcTZi2zEKviUKT2xVEzvOZx%2Fc2WaMkYhpOPqKKbObE5axxAlV8DlHe64UcMXIZ%2BcxFnbuDxoyfiSgo4ip%2F6qwmBpdDdNVrPazbuGqqJdDxcixhrOal%2FKkDVoS36Rrf8oOM7OhCZv3I%2Fb68VJP0g1uqBzaf2eHXAtj9gPADgPBdMxz%2BnVRbSAiICyzuHoUTfNECmcr5efwmzL4xos9czkB2wrqxNQi4UUmfBGavKm%2FfD5ql08seAODY2Q4d7uStKQcDJk2be5ewrxFyuzYNgpnxqqgmFPQx0%2FCW6QfbY3hz5wLV%2BbT%2Fcowq7A1YGhZrN6KeNv0gH%2FA%2F%2FrndSVPhPPfEUFheFB3EzL%2BS4QzO%2BAsZE1EIJ4ktOMAswFAGt%2FRtHhyjhOLM%2FZEHaMcXw%2BvKC8kWwFQyfRwxUA1ZOj0KLBdTwkKTiybO3mgK6zasRY3MccOowsWxV2G%2FipWEBO3%2Behmzt6gUuSxMS6AMiMaf5Mxyr2sLnk%2BtPN%2BlDZGcJlUiyQjl9LBUkak42Ae%2Ba5mi3BGmhitbfxWJKfXIJeDCEme%2FIBjqkAeya6Lq0tpBXmKLrqQLWlUSrfHtv4FdIRLEaxP1ZexAHK1gNIMc7k0Z5F7DLD9Dd7DU%2B4uKSAVmiPs9h1Uwy2cU50oP1ayxKUXs1xY%2F712xpxSpFaeI%2FdarOCYE3bY0CTdtoMDAWR8a%2BKlUSGksmmvFS84Wau%2FgwReOdQgufjS6jcCMj%2Fhpzd38MqtJ1tp6lOUnwBigKFGztJpAEsvsicaeAQuWq&X-Amz-Signature=7744953d43617f05767c34eeb22a964a829770e43bd775b3fcf82d59508a6ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWWUSZD%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGioCCX1WPGffz1fLYhpfFu1F37VfvPOcYnexy4Y6WImAiEAkhZOnTjFeadPf58DJBwLClP0cHMfApoqWF7bvx2%2FPxsqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiPPPDZlaI9dXBGoSrcA3uFUd2XgKf9BtIghp0yf7Ub5d2lkg6lTdiRDAqB6AP0BGAFa28NYpufjbpO7LIsZWRQi4mT4%2FxPTOa90DTSqesDDuDJYnx7nzDcQ8h2tVoWiPTeYstZWp9hUc5cPiirS9Jy%2B7XyD5CrKGsCEzbrEcbiVN2nq8BsvN4LDIaCfmRQAUmc%2FnciN6JUr0AukUczGOr5l9Qpl4gtFK68RdEtb%2FFASZZ485PVD3D6PgvVfD8PX5o98Lf7%2FGec14zKxpJEeCKla4LvS3z%2FWLhd4ZC7MU8h0VTP5CUjutXFj8SdMoOqY%2BEfraUR9sacjNP5g2Aapx4e7IFntAlPzfD6a%2Bpw7CmOlHd3l5uFdqOjqhGa5vS0rk1bj13PdAUXzAPD%2Br1Rth%2BXNCUbpmU3MCsljnpM64U%2BH39nPgv6uUd2gvQrcz6P3h4U3ULarvtrQ7bZKoo07hNLT6QfCMBnmZxAvPB%2BBhUF7AVeEdaTKTWhQVVcODsot7CBJLQ65jR6hDaoiEi0eLzmt5BnVXQQwfyFvkT6OrJPZP6lDnh%2FsAGgcrDoyfVtpQjaYs3lEbl2WbCcxSj62Gx73kSWGB4WL4moFu3EmfOISY5%2F%2F8RRelCVh%2F5iN0T89OOX4yIgCe1EFCyuMOuX78gGOqUBwUFrtmAZqbKRa2%2F7zU9ZUFBQhQOpW0SynvQ5mVKCjm7foethc%2BonpFZcbBIDd6ITDeFBYZ%2Bj6Z6VD74tDq45eHVao6uPTm1Kl1NQxxlDx3XDIH%2FP%2FDy%2B8Nlf5L2%2Fcfqj%2Fn9mFgxTOSqewzHbBFlOG6xuuAu3IFo1MlMMlw1r1vE6IoHc%2FqM0kfLxIMeUVdq6uiz8kngtn7v%2BG3cCPmiJ%2BP7uDF%2Fz&X-Amz-Signature=c53684ca34b45691aec243cc25b85ec70a1a02b1a11d2c6eaa6fb8a9560c5c10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWWUSZD%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGioCCX1WPGffz1fLYhpfFu1F37VfvPOcYnexy4Y6WImAiEAkhZOnTjFeadPf58DJBwLClP0cHMfApoqWF7bvx2%2FPxsqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiPPPDZlaI9dXBGoSrcA3uFUd2XgKf9BtIghp0yf7Ub5d2lkg6lTdiRDAqB6AP0BGAFa28NYpufjbpO7LIsZWRQi4mT4%2FxPTOa90DTSqesDDuDJYnx7nzDcQ8h2tVoWiPTeYstZWp9hUc5cPiirS9Jy%2B7XyD5CrKGsCEzbrEcbiVN2nq8BsvN4LDIaCfmRQAUmc%2FnciN6JUr0AukUczGOr5l9Qpl4gtFK68RdEtb%2FFASZZ485PVD3D6PgvVfD8PX5o98Lf7%2FGec14zKxpJEeCKla4LvS3z%2FWLhd4ZC7MU8h0VTP5CUjutXFj8SdMoOqY%2BEfraUR9sacjNP5g2Aapx4e7IFntAlPzfD6a%2Bpw7CmOlHd3l5uFdqOjqhGa5vS0rk1bj13PdAUXzAPD%2Br1Rth%2BXNCUbpmU3MCsljnpM64U%2BH39nPgv6uUd2gvQrcz6P3h4U3ULarvtrQ7bZKoo07hNLT6QfCMBnmZxAvPB%2BBhUF7AVeEdaTKTWhQVVcODsot7CBJLQ65jR6hDaoiEi0eLzmt5BnVXQQwfyFvkT6OrJPZP6lDnh%2FsAGgcrDoyfVtpQjaYs3lEbl2WbCcxSj62Gx73kSWGB4WL4moFu3EmfOISY5%2F%2F8RRelCVh%2F5iN0T89OOX4yIgCe1EFCyuMOuX78gGOqUBwUFrtmAZqbKRa2%2F7zU9ZUFBQhQOpW0SynvQ5mVKCjm7foethc%2BonpFZcbBIDd6ITDeFBYZ%2Bj6Z6VD74tDq45eHVao6uPTm1Kl1NQxxlDx3XDIH%2FP%2FDy%2B8Nlf5L2%2Fcfqj%2Fn9mFgxTOSqewzHbBFlOG6xuuAu3IFo1MlMMlw1r1vE6IoHc%2FqM0kfLxIMeUVdq6uiz8kngtn7v%2BG3cCPmiJ%2BP7uDF%2Fz&X-Amz-Signature=d09f0e056c12c178f06ed9ea2a9130151e1084dd4c9a8a94a39182042b698557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWWUSZD%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGioCCX1WPGffz1fLYhpfFu1F37VfvPOcYnexy4Y6WImAiEAkhZOnTjFeadPf58DJBwLClP0cHMfApoqWF7bvx2%2FPxsqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiPPPDZlaI9dXBGoSrcA3uFUd2XgKf9BtIghp0yf7Ub5d2lkg6lTdiRDAqB6AP0BGAFa28NYpufjbpO7LIsZWRQi4mT4%2FxPTOa90DTSqesDDuDJYnx7nzDcQ8h2tVoWiPTeYstZWp9hUc5cPiirS9Jy%2B7XyD5CrKGsCEzbrEcbiVN2nq8BsvN4LDIaCfmRQAUmc%2FnciN6JUr0AukUczGOr5l9Qpl4gtFK68RdEtb%2FFASZZ485PVD3D6PgvVfD8PX5o98Lf7%2FGec14zKxpJEeCKla4LvS3z%2FWLhd4ZC7MU8h0VTP5CUjutXFj8SdMoOqY%2BEfraUR9sacjNP5g2Aapx4e7IFntAlPzfD6a%2Bpw7CmOlHd3l5uFdqOjqhGa5vS0rk1bj13PdAUXzAPD%2Br1Rth%2BXNCUbpmU3MCsljnpM64U%2BH39nPgv6uUd2gvQrcz6P3h4U3ULarvtrQ7bZKoo07hNLT6QfCMBnmZxAvPB%2BBhUF7AVeEdaTKTWhQVVcODsot7CBJLQ65jR6hDaoiEi0eLzmt5BnVXQQwfyFvkT6OrJPZP6lDnh%2FsAGgcrDoyfVtpQjaYs3lEbl2WbCcxSj62Gx73kSWGB4WL4moFu3EmfOISY5%2F%2F8RRelCVh%2F5iN0T89OOX4yIgCe1EFCyuMOuX78gGOqUBwUFrtmAZqbKRa2%2F7zU9ZUFBQhQOpW0SynvQ5mVKCjm7foethc%2BonpFZcbBIDd6ITDeFBYZ%2Bj6Z6VD74tDq45eHVao6uPTm1Kl1NQxxlDx3XDIH%2FP%2FDy%2B8Nlf5L2%2Fcfqj%2Fn9mFgxTOSqewzHbBFlOG6xuuAu3IFo1MlMMlw1r1vE6IoHc%2FqM0kfLxIMeUVdq6uiz8kngtn7v%2BG3cCPmiJ%2BP7uDF%2Fz&X-Amz-Signature=2b3a04f8a009a71253cc3bafbbeb9683ee3c06bcd8dfa266a7e8fad69e99b013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWWUSZD%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGioCCX1WPGffz1fLYhpfFu1F37VfvPOcYnexy4Y6WImAiEAkhZOnTjFeadPf58DJBwLClP0cHMfApoqWF7bvx2%2FPxsqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiPPPDZlaI9dXBGoSrcA3uFUd2XgKf9BtIghp0yf7Ub5d2lkg6lTdiRDAqB6AP0BGAFa28NYpufjbpO7LIsZWRQi4mT4%2FxPTOa90DTSqesDDuDJYnx7nzDcQ8h2tVoWiPTeYstZWp9hUc5cPiirS9Jy%2B7XyD5CrKGsCEzbrEcbiVN2nq8BsvN4LDIaCfmRQAUmc%2FnciN6JUr0AukUczGOr5l9Qpl4gtFK68RdEtb%2FFASZZ485PVD3D6PgvVfD8PX5o98Lf7%2FGec14zKxpJEeCKla4LvS3z%2FWLhd4ZC7MU8h0VTP5CUjutXFj8SdMoOqY%2BEfraUR9sacjNP5g2Aapx4e7IFntAlPzfD6a%2Bpw7CmOlHd3l5uFdqOjqhGa5vS0rk1bj13PdAUXzAPD%2Br1Rth%2BXNCUbpmU3MCsljnpM64U%2BH39nPgv6uUd2gvQrcz6P3h4U3ULarvtrQ7bZKoo07hNLT6QfCMBnmZxAvPB%2BBhUF7AVeEdaTKTWhQVVcODsot7CBJLQ65jR6hDaoiEi0eLzmt5BnVXQQwfyFvkT6OrJPZP6lDnh%2FsAGgcrDoyfVtpQjaYs3lEbl2WbCcxSj62Gx73kSWGB4WL4moFu3EmfOISY5%2F%2F8RRelCVh%2F5iN0T89OOX4yIgCe1EFCyuMOuX78gGOqUBwUFrtmAZqbKRa2%2F7zU9ZUFBQhQOpW0SynvQ5mVKCjm7foethc%2BonpFZcbBIDd6ITDeFBYZ%2Bj6Z6VD74tDq45eHVao6uPTm1Kl1NQxxlDx3XDIH%2FP%2FDy%2B8Nlf5L2%2Fcfqj%2Fn9mFgxTOSqewzHbBFlOG6xuuAu3IFo1MlMMlw1r1vE6IoHc%2FqM0kfLxIMeUVdq6uiz8kngtn7v%2BG3cCPmiJ%2BP7uDF%2Fz&X-Amz-Signature=ff4f3c42023c770cd294da257b8381d291f9cbf9b531a8eee85c1d71a8f79637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWWUSZD%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGioCCX1WPGffz1fLYhpfFu1F37VfvPOcYnexy4Y6WImAiEAkhZOnTjFeadPf58DJBwLClP0cHMfApoqWF7bvx2%2FPxsqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiPPPDZlaI9dXBGoSrcA3uFUd2XgKf9BtIghp0yf7Ub5d2lkg6lTdiRDAqB6AP0BGAFa28NYpufjbpO7LIsZWRQi4mT4%2FxPTOa90DTSqesDDuDJYnx7nzDcQ8h2tVoWiPTeYstZWp9hUc5cPiirS9Jy%2B7XyD5CrKGsCEzbrEcbiVN2nq8BsvN4LDIaCfmRQAUmc%2FnciN6JUr0AukUczGOr5l9Qpl4gtFK68RdEtb%2FFASZZ485PVD3D6PgvVfD8PX5o98Lf7%2FGec14zKxpJEeCKla4LvS3z%2FWLhd4ZC7MU8h0VTP5CUjutXFj8SdMoOqY%2BEfraUR9sacjNP5g2Aapx4e7IFntAlPzfD6a%2Bpw7CmOlHd3l5uFdqOjqhGa5vS0rk1bj13PdAUXzAPD%2Br1Rth%2BXNCUbpmU3MCsljnpM64U%2BH39nPgv6uUd2gvQrcz6P3h4U3ULarvtrQ7bZKoo07hNLT6QfCMBnmZxAvPB%2BBhUF7AVeEdaTKTWhQVVcODsot7CBJLQ65jR6hDaoiEi0eLzmt5BnVXQQwfyFvkT6OrJPZP6lDnh%2FsAGgcrDoyfVtpQjaYs3lEbl2WbCcxSj62Gx73kSWGB4WL4moFu3EmfOISY5%2F%2F8RRelCVh%2F5iN0T89OOX4yIgCe1EFCyuMOuX78gGOqUBwUFrtmAZqbKRa2%2F7zU9ZUFBQhQOpW0SynvQ5mVKCjm7foethc%2BonpFZcbBIDd6ITDeFBYZ%2Bj6Z6VD74tDq45eHVao6uPTm1Kl1NQxxlDx3XDIH%2FP%2FDy%2B8Nlf5L2%2Fcfqj%2Fn9mFgxTOSqewzHbBFlOG6xuuAu3IFo1MlMMlw1r1vE6IoHc%2FqM0kfLxIMeUVdq6uiz8kngtn7v%2BG3cCPmiJ%2BP7uDF%2Fz&X-Amz-Signature=c3ce19b610e8106e5aa98f13be673050681116ca89ce297a6edd6c9407ec65c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWWUSZD%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGioCCX1WPGffz1fLYhpfFu1F37VfvPOcYnexy4Y6WImAiEAkhZOnTjFeadPf58DJBwLClP0cHMfApoqWF7bvx2%2FPxsqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiPPPDZlaI9dXBGoSrcA3uFUd2XgKf9BtIghp0yf7Ub5d2lkg6lTdiRDAqB6AP0BGAFa28NYpufjbpO7LIsZWRQi4mT4%2FxPTOa90DTSqesDDuDJYnx7nzDcQ8h2tVoWiPTeYstZWp9hUc5cPiirS9Jy%2B7XyD5CrKGsCEzbrEcbiVN2nq8BsvN4LDIaCfmRQAUmc%2FnciN6JUr0AukUczGOr5l9Qpl4gtFK68RdEtb%2FFASZZ485PVD3D6PgvVfD8PX5o98Lf7%2FGec14zKxpJEeCKla4LvS3z%2FWLhd4ZC7MU8h0VTP5CUjutXFj8SdMoOqY%2BEfraUR9sacjNP5g2Aapx4e7IFntAlPzfD6a%2Bpw7CmOlHd3l5uFdqOjqhGa5vS0rk1bj13PdAUXzAPD%2Br1Rth%2BXNCUbpmU3MCsljnpM64U%2BH39nPgv6uUd2gvQrcz6P3h4U3ULarvtrQ7bZKoo07hNLT6QfCMBnmZxAvPB%2BBhUF7AVeEdaTKTWhQVVcODsot7CBJLQ65jR6hDaoiEi0eLzmt5BnVXQQwfyFvkT6OrJPZP6lDnh%2FsAGgcrDoyfVtpQjaYs3lEbl2WbCcxSj62Gx73kSWGB4WL4moFu3EmfOISY5%2F%2F8RRelCVh%2F5iN0T89OOX4yIgCe1EFCyuMOuX78gGOqUBwUFrtmAZqbKRa2%2F7zU9ZUFBQhQOpW0SynvQ5mVKCjm7foethc%2BonpFZcbBIDd6ITDeFBYZ%2Bj6Z6VD74tDq45eHVao6uPTm1Kl1NQxxlDx3XDIH%2FP%2FDy%2B8Nlf5L2%2Fcfqj%2Fn9mFgxTOSqewzHbBFlOG6xuuAu3IFo1MlMMlw1r1vE6IoHc%2FqM0kfLxIMeUVdq6uiz8kngtn7v%2BG3cCPmiJ%2BP7uDF%2Fz&X-Amz-Signature=125b88ed9188b05f24ac2c342ea76700a72612b5b84b675b2b7e0ad57fb8aa23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


