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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJS4VHOP%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFb2GtaqdOt7T%2F1XPbTyqxF8c9wQm3MFDuTpZcs8X%2FKyAiAqkMx4TyYlsOoPN6qmqLYOmoYC%2BYgPajcfOBN48olJryqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEIhVh5kpwRwBA6O2KtwDauOlenQKUVyXNYmmXAU01bKGM6WzmYOrcmaZ0lSZM5HUrE6QUznctgvgDkIfp7jm%2FZku97o8ryobwnX7UZfu%2FmtXjIFcOV82MvpR1BsWZ67zS35ONeRnXpWMJrpHWjYn5xR322u4%2BKRdD%2FNXHfM%2BdC80%2FBTmMcBTiQq3gJ2n2zGKT2%2FiS62TGqyVwpPOTgckUolygfq7kAAMnDH3T8j%2BtTDWzYDg6FGpG7gKIQNP2Y6OKlSoK93o2RDk%2Bnbv53dnHvyCbSNGpBQjuDYHT8JLOQxoWNb%2BPe9mo1BtpkKGnnYqyUTpk7G7MDXuRSU%2BVQ8qkpm3an17pwheKIuPsMInmB7tEDZcq6c3sNzG94En0tpEF9D9C5Jb0onroqkpd%2FOMAUFkvHKQbkVOLTDm3zjNv1zbNkUiAh4w3diNlbXQQ%2Bd2hslwMCMmMbh2D46QneOqHLsLnwRmdsThF%2Bp3VDc%2BcGEBLs2fROdHJS%2Bik%2BqHE%2BpfBeW%2BErOAaAJIcQUwuPeR7BjwmfAeqIAptioHOwk9g%2B2X5%2FKc6YhZfA8rBY4KFsK0EtoU8QmpKcS0HXI75Bg420M7yxf6Vh9yBivb0ZwTgURsmWZBEQ0opvHDtOoGwZJjazFy0hGwwSxop%2BowhNfFywY6pgG49JZ4Y%2Fqzz97P640mPm%2F5dvVN8oOoKPQLnDeogYzCOQm%2FuiyIRKY9vpuoP3HHm4xVWbAN19PIeuvA5LRrGnaORHBufvZiifWLXRd%2BilpZBKiLn8Xa6lXv2ahXMsggJHozVXosg9P9eIQIK8vfz1EI%2ByBgGN1YtLrL9gK3NQSLNp%2FpwAucACRXxrVgbqlGCPap%2BykrXBVP7vPIlj2mFcd%2BGpFIJIf8&X-Amz-Signature=af8bc2d286833f41b4427888fc6c66403f7328d2b224461cc2e094bcf1976acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJS4VHOP%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFb2GtaqdOt7T%2F1XPbTyqxF8c9wQm3MFDuTpZcs8X%2FKyAiAqkMx4TyYlsOoPN6qmqLYOmoYC%2BYgPajcfOBN48olJryqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEIhVh5kpwRwBA6O2KtwDauOlenQKUVyXNYmmXAU01bKGM6WzmYOrcmaZ0lSZM5HUrE6QUznctgvgDkIfp7jm%2FZku97o8ryobwnX7UZfu%2FmtXjIFcOV82MvpR1BsWZ67zS35ONeRnXpWMJrpHWjYn5xR322u4%2BKRdD%2FNXHfM%2BdC80%2FBTmMcBTiQq3gJ2n2zGKT2%2FiS62TGqyVwpPOTgckUolygfq7kAAMnDH3T8j%2BtTDWzYDg6FGpG7gKIQNP2Y6OKlSoK93o2RDk%2Bnbv53dnHvyCbSNGpBQjuDYHT8JLOQxoWNb%2BPe9mo1BtpkKGnnYqyUTpk7G7MDXuRSU%2BVQ8qkpm3an17pwheKIuPsMInmB7tEDZcq6c3sNzG94En0tpEF9D9C5Jb0onroqkpd%2FOMAUFkvHKQbkVOLTDm3zjNv1zbNkUiAh4w3diNlbXQQ%2Bd2hslwMCMmMbh2D46QneOqHLsLnwRmdsThF%2Bp3VDc%2BcGEBLs2fROdHJS%2Bik%2BqHE%2BpfBeW%2BErOAaAJIcQUwuPeR7BjwmfAeqIAptioHOwk9g%2B2X5%2FKc6YhZfA8rBY4KFsK0EtoU8QmpKcS0HXI75Bg420M7yxf6Vh9yBivb0ZwTgURsmWZBEQ0opvHDtOoGwZJjazFy0hGwwSxop%2BowhNfFywY6pgG49JZ4Y%2Fqzz97P640mPm%2F5dvVN8oOoKPQLnDeogYzCOQm%2FuiyIRKY9vpuoP3HHm4xVWbAN19PIeuvA5LRrGnaORHBufvZiifWLXRd%2BilpZBKiLn8Xa6lXv2ahXMsggJHozVXosg9P9eIQIK8vfz1EI%2ByBgGN1YtLrL9gK3NQSLNp%2FpwAucACRXxrVgbqlGCPap%2BykrXBVP7vPIlj2mFcd%2BGpFIJIf8&X-Amz-Signature=3bbff538eacc7311815feed59de381887e8054e07de584d1d3fd8b133dfc8d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJS4VHOP%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFb2GtaqdOt7T%2F1XPbTyqxF8c9wQm3MFDuTpZcs8X%2FKyAiAqkMx4TyYlsOoPN6qmqLYOmoYC%2BYgPajcfOBN48olJryqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEIhVh5kpwRwBA6O2KtwDauOlenQKUVyXNYmmXAU01bKGM6WzmYOrcmaZ0lSZM5HUrE6QUznctgvgDkIfp7jm%2FZku97o8ryobwnX7UZfu%2FmtXjIFcOV82MvpR1BsWZ67zS35ONeRnXpWMJrpHWjYn5xR322u4%2BKRdD%2FNXHfM%2BdC80%2FBTmMcBTiQq3gJ2n2zGKT2%2FiS62TGqyVwpPOTgckUolygfq7kAAMnDH3T8j%2BtTDWzYDg6FGpG7gKIQNP2Y6OKlSoK93o2RDk%2Bnbv53dnHvyCbSNGpBQjuDYHT8JLOQxoWNb%2BPe9mo1BtpkKGnnYqyUTpk7G7MDXuRSU%2BVQ8qkpm3an17pwheKIuPsMInmB7tEDZcq6c3sNzG94En0tpEF9D9C5Jb0onroqkpd%2FOMAUFkvHKQbkVOLTDm3zjNv1zbNkUiAh4w3diNlbXQQ%2Bd2hslwMCMmMbh2D46QneOqHLsLnwRmdsThF%2Bp3VDc%2BcGEBLs2fROdHJS%2Bik%2BqHE%2BpfBeW%2BErOAaAJIcQUwuPeR7BjwmfAeqIAptioHOwk9g%2B2X5%2FKc6YhZfA8rBY4KFsK0EtoU8QmpKcS0HXI75Bg420M7yxf6Vh9yBivb0ZwTgURsmWZBEQ0opvHDtOoGwZJjazFy0hGwwSxop%2BowhNfFywY6pgG49JZ4Y%2Fqzz97P640mPm%2F5dvVN8oOoKPQLnDeogYzCOQm%2FuiyIRKY9vpuoP3HHm4xVWbAN19PIeuvA5LRrGnaORHBufvZiifWLXRd%2BilpZBKiLn8Xa6lXv2ahXMsggJHozVXosg9P9eIQIK8vfz1EI%2ByBgGN1YtLrL9gK3NQSLNp%2FpwAucACRXxrVgbqlGCPap%2BykrXBVP7vPIlj2mFcd%2BGpFIJIf8&X-Amz-Signature=a235f587de84a22ba2c287019dc1453f6faaeebe3d549d628fb420b446c18181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJS4VHOP%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFb2GtaqdOt7T%2F1XPbTyqxF8c9wQm3MFDuTpZcs8X%2FKyAiAqkMx4TyYlsOoPN6qmqLYOmoYC%2BYgPajcfOBN48olJryqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEIhVh5kpwRwBA6O2KtwDauOlenQKUVyXNYmmXAU01bKGM6WzmYOrcmaZ0lSZM5HUrE6QUznctgvgDkIfp7jm%2FZku97o8ryobwnX7UZfu%2FmtXjIFcOV82MvpR1BsWZ67zS35ONeRnXpWMJrpHWjYn5xR322u4%2BKRdD%2FNXHfM%2BdC80%2FBTmMcBTiQq3gJ2n2zGKT2%2FiS62TGqyVwpPOTgckUolygfq7kAAMnDH3T8j%2BtTDWzYDg6FGpG7gKIQNP2Y6OKlSoK93o2RDk%2Bnbv53dnHvyCbSNGpBQjuDYHT8JLOQxoWNb%2BPe9mo1BtpkKGnnYqyUTpk7G7MDXuRSU%2BVQ8qkpm3an17pwheKIuPsMInmB7tEDZcq6c3sNzG94En0tpEF9D9C5Jb0onroqkpd%2FOMAUFkvHKQbkVOLTDm3zjNv1zbNkUiAh4w3diNlbXQQ%2Bd2hslwMCMmMbh2D46QneOqHLsLnwRmdsThF%2Bp3VDc%2BcGEBLs2fROdHJS%2Bik%2BqHE%2BpfBeW%2BErOAaAJIcQUwuPeR7BjwmfAeqIAptioHOwk9g%2B2X5%2FKc6YhZfA8rBY4KFsK0EtoU8QmpKcS0HXI75Bg420M7yxf6Vh9yBivb0ZwTgURsmWZBEQ0opvHDtOoGwZJjazFy0hGwwSxop%2BowhNfFywY6pgG49JZ4Y%2Fqzz97P640mPm%2F5dvVN8oOoKPQLnDeogYzCOQm%2FuiyIRKY9vpuoP3HHm4xVWbAN19PIeuvA5LRrGnaORHBufvZiifWLXRd%2BilpZBKiLn8Xa6lXv2ahXMsggJHozVXosg9P9eIQIK8vfz1EI%2ByBgGN1YtLrL9gK3NQSLNp%2FpwAucACRXxrVgbqlGCPap%2BykrXBVP7vPIlj2mFcd%2BGpFIJIf8&X-Amz-Signature=215b6db48445657063668105763101abb159ba787b2668fef203006b177f9f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2PHY4S%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCuK3eRsZMrZTBKzZSZuxsBXNvmwpI0kLtdMwDsjl1A6AIgP4VYGqiRUV2%2F9z5NsmAG3%2FJcvE6nodaq14o4jsPUtqUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSi%2BWJblKN%2BwfyUMSrcA2WTR9Y3k8raIwLFHP2WreEHD9oC80GPkcTuxf1KRX%2BAWRe2aD5%2F7%2FFpsWrbntXjm%2BxIsoHE9M%2BFs%2F5PR%2BrP0uazm12jXtmw5o6YnmaJE9iyZ0bz13hitVWQzbk5mN31TMih8f565%2BadMvlqR1tvfKW2Tkdv60kwM9U2lTvFxeBKpRoCMZxmgv50G%2F9ZbWKf0k1Q%2BK19svMXPGTGy8T83%2BeXv5GwhX4D5vUcCWolRM9VxNIh7Z3TnW7kCfAsTLwhjoKXRqXSoy%2FGxHuzuNlHo0JuORUjBFFq0MnwGcWzue6liJBzuW1vhQz2GnWVytRlsFN36MOWT%2B%2Bp6Tc4Z0lX%2BDTMlaJnYN5cd7YRcGYNYm999eSUx%2Bmzc2%2BFS8%2BeIH9W%2FR4ZZ%2By23OUNsG3IDilCjnJPYB2A170%2Fgx1%2F40%2BiWF1iK9U2rlNOAtC2SieCfAqwLsyg%2BRxbfDPlmS054QxBESDy8rwumJ3LikiPKNHKieZDurd1giG2tthZ2JTWXWwFycUDOQAHu%2FS%2FgMngXEJDHofLIkwLuY%2Bu%2B8ZJzSOluHjFto%2BtlO8vK0YUxzx7NxFc0E0CDX%2Fnim2oz%2FRpGNoxxy8w20gwl0EM6j0FUMW9flmfXQh0Gn4YgmBZXq11MIHYxcsGOqUBt9NE4u9TFOT9AgvI5yri7wQoMXDGH1tOc6Orjokxz1G3p80TYWikDcNPGm44CsXImiFliHEu4lxtXPCp3vhfKdXX6DvkH%2BC5froX4Q8jZtFIoXNGNUVbUFysTj7dDEc75x6kW0ZHB2MO5yU8Xzlhl1cqlaMg0cbXRm7UFnXFUwI3fVMTMh4NiQtnKvTVLX1%2FLo%2FVWrIQxp5nefBg9R%2FdYEkVTzl8&X-Amz-Signature=4480449a134b42d258686b0f0c7db9110da799a7274ee01e953bfbe505f42d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJS4VHOP%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFb2GtaqdOt7T%2F1XPbTyqxF8c9wQm3MFDuTpZcs8X%2FKyAiAqkMx4TyYlsOoPN6qmqLYOmoYC%2BYgPajcfOBN48olJryqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEIhVh5kpwRwBA6O2KtwDauOlenQKUVyXNYmmXAU01bKGM6WzmYOrcmaZ0lSZM5HUrE6QUznctgvgDkIfp7jm%2FZku97o8ryobwnX7UZfu%2FmtXjIFcOV82MvpR1BsWZ67zS35ONeRnXpWMJrpHWjYn5xR322u4%2BKRdD%2FNXHfM%2BdC80%2FBTmMcBTiQq3gJ2n2zGKT2%2FiS62TGqyVwpPOTgckUolygfq7kAAMnDH3T8j%2BtTDWzYDg6FGpG7gKIQNP2Y6OKlSoK93o2RDk%2Bnbv53dnHvyCbSNGpBQjuDYHT8JLOQxoWNb%2BPe9mo1BtpkKGnnYqyUTpk7G7MDXuRSU%2BVQ8qkpm3an17pwheKIuPsMInmB7tEDZcq6c3sNzG94En0tpEF9D9C5Jb0onroqkpd%2FOMAUFkvHKQbkVOLTDm3zjNv1zbNkUiAh4w3diNlbXQQ%2Bd2hslwMCMmMbh2D46QneOqHLsLnwRmdsThF%2Bp3VDc%2BcGEBLs2fROdHJS%2Bik%2BqHE%2BpfBeW%2BErOAaAJIcQUwuPeR7BjwmfAeqIAptioHOwk9g%2B2X5%2FKc6YhZfA8rBY4KFsK0EtoU8QmpKcS0HXI75Bg420M7yxf6Vh9yBivb0ZwTgURsmWZBEQ0opvHDtOoGwZJjazFy0hGwwSxop%2BowhNfFywY6pgG49JZ4Y%2Fqzz97P640mPm%2F5dvVN8oOoKPQLnDeogYzCOQm%2FuiyIRKY9vpuoP3HHm4xVWbAN19PIeuvA5LRrGnaORHBufvZiifWLXRd%2BilpZBKiLn8Xa6lXv2ahXMsggJHozVXosg9P9eIQIK8vfz1EI%2ByBgGN1YtLrL9gK3NQSLNp%2FpwAucACRXxrVgbqlGCPap%2BykrXBVP7vPIlj2mFcd%2BGpFIJIf8&X-Amz-Signature=285004e499c341c1f5115ae84c4d07fec44b02cf2f02100613d77e5e5676b13f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJS4VHOP%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFb2GtaqdOt7T%2F1XPbTyqxF8c9wQm3MFDuTpZcs8X%2FKyAiAqkMx4TyYlsOoPN6qmqLYOmoYC%2BYgPajcfOBN48olJryqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEIhVh5kpwRwBA6O2KtwDauOlenQKUVyXNYmmXAU01bKGM6WzmYOrcmaZ0lSZM5HUrE6QUznctgvgDkIfp7jm%2FZku97o8ryobwnX7UZfu%2FmtXjIFcOV82MvpR1BsWZ67zS35ONeRnXpWMJrpHWjYn5xR322u4%2BKRdD%2FNXHfM%2BdC80%2FBTmMcBTiQq3gJ2n2zGKT2%2FiS62TGqyVwpPOTgckUolygfq7kAAMnDH3T8j%2BtTDWzYDg6FGpG7gKIQNP2Y6OKlSoK93o2RDk%2Bnbv53dnHvyCbSNGpBQjuDYHT8JLOQxoWNb%2BPe9mo1BtpkKGnnYqyUTpk7G7MDXuRSU%2BVQ8qkpm3an17pwheKIuPsMInmB7tEDZcq6c3sNzG94En0tpEF9D9C5Jb0onroqkpd%2FOMAUFkvHKQbkVOLTDm3zjNv1zbNkUiAh4w3diNlbXQQ%2Bd2hslwMCMmMbh2D46QneOqHLsLnwRmdsThF%2Bp3VDc%2BcGEBLs2fROdHJS%2Bik%2BqHE%2BpfBeW%2BErOAaAJIcQUwuPeR7BjwmfAeqIAptioHOwk9g%2B2X5%2FKc6YhZfA8rBY4KFsK0EtoU8QmpKcS0HXI75Bg420M7yxf6Vh9yBivb0ZwTgURsmWZBEQ0opvHDtOoGwZJjazFy0hGwwSxop%2BowhNfFywY6pgG49JZ4Y%2Fqzz97P640mPm%2F5dvVN8oOoKPQLnDeogYzCOQm%2FuiyIRKY9vpuoP3HHm4xVWbAN19PIeuvA5LRrGnaORHBufvZiifWLXRd%2BilpZBKiLn8Xa6lXv2ahXMsggJHozVXosg9P9eIQIK8vfz1EI%2ByBgGN1YtLrL9gK3NQSLNp%2FpwAucACRXxrVgbqlGCPap%2BykrXBVP7vPIlj2mFcd%2BGpFIJIf8&X-Amz-Signature=6bae920f3be5da8c3ce8da5a09a03e5c1531bb1035b86ea418d6c08a8ed8c05d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJS4VHOP%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFb2GtaqdOt7T%2F1XPbTyqxF8c9wQm3MFDuTpZcs8X%2FKyAiAqkMx4TyYlsOoPN6qmqLYOmoYC%2BYgPajcfOBN48olJryqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEIhVh5kpwRwBA6O2KtwDauOlenQKUVyXNYmmXAU01bKGM6WzmYOrcmaZ0lSZM5HUrE6QUznctgvgDkIfp7jm%2FZku97o8ryobwnX7UZfu%2FmtXjIFcOV82MvpR1BsWZ67zS35ONeRnXpWMJrpHWjYn5xR322u4%2BKRdD%2FNXHfM%2BdC80%2FBTmMcBTiQq3gJ2n2zGKT2%2FiS62TGqyVwpPOTgckUolygfq7kAAMnDH3T8j%2BtTDWzYDg6FGpG7gKIQNP2Y6OKlSoK93o2RDk%2Bnbv53dnHvyCbSNGpBQjuDYHT8JLOQxoWNb%2BPe9mo1BtpkKGnnYqyUTpk7G7MDXuRSU%2BVQ8qkpm3an17pwheKIuPsMInmB7tEDZcq6c3sNzG94En0tpEF9D9C5Jb0onroqkpd%2FOMAUFkvHKQbkVOLTDm3zjNv1zbNkUiAh4w3diNlbXQQ%2Bd2hslwMCMmMbh2D46QneOqHLsLnwRmdsThF%2Bp3VDc%2BcGEBLs2fROdHJS%2Bik%2BqHE%2BpfBeW%2BErOAaAJIcQUwuPeR7BjwmfAeqIAptioHOwk9g%2B2X5%2FKc6YhZfA8rBY4KFsK0EtoU8QmpKcS0HXI75Bg420M7yxf6Vh9yBivb0ZwTgURsmWZBEQ0opvHDtOoGwZJjazFy0hGwwSxop%2BowhNfFywY6pgG49JZ4Y%2Fqzz97P640mPm%2F5dvVN8oOoKPQLnDeogYzCOQm%2FuiyIRKY9vpuoP3HHm4xVWbAN19PIeuvA5LRrGnaORHBufvZiifWLXRd%2BilpZBKiLn8Xa6lXv2ahXMsggJHozVXosg9P9eIQIK8vfz1EI%2ByBgGN1YtLrL9gK3NQSLNp%2FpwAucACRXxrVgbqlGCPap%2BykrXBVP7vPIlj2mFcd%2BGpFIJIf8&X-Amz-Signature=82ed44b7ce67cfef67bc3ed9dc1f8827fbba67d784b99a5f56d881cca685d3a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJS4VHOP%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFb2GtaqdOt7T%2F1XPbTyqxF8c9wQm3MFDuTpZcs8X%2FKyAiAqkMx4TyYlsOoPN6qmqLYOmoYC%2BYgPajcfOBN48olJryqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEIhVh5kpwRwBA6O2KtwDauOlenQKUVyXNYmmXAU01bKGM6WzmYOrcmaZ0lSZM5HUrE6QUznctgvgDkIfp7jm%2FZku97o8ryobwnX7UZfu%2FmtXjIFcOV82MvpR1BsWZ67zS35ONeRnXpWMJrpHWjYn5xR322u4%2BKRdD%2FNXHfM%2BdC80%2FBTmMcBTiQq3gJ2n2zGKT2%2FiS62TGqyVwpPOTgckUolygfq7kAAMnDH3T8j%2BtTDWzYDg6FGpG7gKIQNP2Y6OKlSoK93o2RDk%2Bnbv53dnHvyCbSNGpBQjuDYHT8JLOQxoWNb%2BPe9mo1BtpkKGnnYqyUTpk7G7MDXuRSU%2BVQ8qkpm3an17pwheKIuPsMInmB7tEDZcq6c3sNzG94En0tpEF9D9C5Jb0onroqkpd%2FOMAUFkvHKQbkVOLTDm3zjNv1zbNkUiAh4w3diNlbXQQ%2Bd2hslwMCMmMbh2D46QneOqHLsLnwRmdsThF%2Bp3VDc%2BcGEBLs2fROdHJS%2Bik%2BqHE%2BpfBeW%2BErOAaAJIcQUwuPeR7BjwmfAeqIAptioHOwk9g%2B2X5%2FKc6YhZfA8rBY4KFsK0EtoU8QmpKcS0HXI75Bg420M7yxf6Vh9yBivb0ZwTgURsmWZBEQ0opvHDtOoGwZJjazFy0hGwwSxop%2BowhNfFywY6pgG49JZ4Y%2Fqzz97P640mPm%2F5dvVN8oOoKPQLnDeogYzCOQm%2FuiyIRKY9vpuoP3HHm4xVWbAN19PIeuvA5LRrGnaORHBufvZiifWLXRd%2BilpZBKiLn8Xa6lXv2ahXMsggJHozVXosg9P9eIQIK8vfz1EI%2ByBgGN1YtLrL9gK3NQSLNp%2FpwAucACRXxrVgbqlGCPap%2BykrXBVP7vPIlj2mFcd%2BGpFIJIf8&X-Amz-Signature=bd7d6e1b37381735bfc4d09452b1f9af00c2c6ba2aa705adb99e30c8d76af8f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJS4VHOP%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFb2GtaqdOt7T%2F1XPbTyqxF8c9wQm3MFDuTpZcs8X%2FKyAiAqkMx4TyYlsOoPN6qmqLYOmoYC%2BYgPajcfOBN48olJryqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEIhVh5kpwRwBA6O2KtwDauOlenQKUVyXNYmmXAU01bKGM6WzmYOrcmaZ0lSZM5HUrE6QUznctgvgDkIfp7jm%2FZku97o8ryobwnX7UZfu%2FmtXjIFcOV82MvpR1BsWZ67zS35ONeRnXpWMJrpHWjYn5xR322u4%2BKRdD%2FNXHfM%2BdC80%2FBTmMcBTiQq3gJ2n2zGKT2%2FiS62TGqyVwpPOTgckUolygfq7kAAMnDH3T8j%2BtTDWzYDg6FGpG7gKIQNP2Y6OKlSoK93o2RDk%2Bnbv53dnHvyCbSNGpBQjuDYHT8JLOQxoWNb%2BPe9mo1BtpkKGnnYqyUTpk7G7MDXuRSU%2BVQ8qkpm3an17pwheKIuPsMInmB7tEDZcq6c3sNzG94En0tpEF9D9C5Jb0onroqkpd%2FOMAUFkvHKQbkVOLTDm3zjNv1zbNkUiAh4w3diNlbXQQ%2Bd2hslwMCMmMbh2D46QneOqHLsLnwRmdsThF%2Bp3VDc%2BcGEBLs2fROdHJS%2Bik%2BqHE%2BpfBeW%2BErOAaAJIcQUwuPeR7BjwmfAeqIAptioHOwk9g%2B2X5%2FKc6YhZfA8rBY4KFsK0EtoU8QmpKcS0HXI75Bg420M7yxf6Vh9yBivb0ZwTgURsmWZBEQ0opvHDtOoGwZJjazFy0hGwwSxop%2BowhNfFywY6pgG49JZ4Y%2Fqzz97P640mPm%2F5dvVN8oOoKPQLnDeogYzCOQm%2FuiyIRKY9vpuoP3HHm4xVWbAN19PIeuvA5LRrGnaORHBufvZiifWLXRd%2BilpZBKiLn8Xa6lXv2ahXMsggJHozVXosg9P9eIQIK8vfz1EI%2ByBgGN1YtLrL9gK3NQSLNp%2FpwAucACRXxrVgbqlGCPap%2BykrXBVP7vPIlj2mFcd%2BGpFIJIf8&X-Amz-Signature=58085919a117ad466420aa3614d43f59cd84c14322dc4e044cd25c74dd14dcdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJS4VHOP%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFb2GtaqdOt7T%2F1XPbTyqxF8c9wQm3MFDuTpZcs8X%2FKyAiAqkMx4TyYlsOoPN6qmqLYOmoYC%2BYgPajcfOBN48olJryqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEIhVh5kpwRwBA6O2KtwDauOlenQKUVyXNYmmXAU01bKGM6WzmYOrcmaZ0lSZM5HUrE6QUznctgvgDkIfp7jm%2FZku97o8ryobwnX7UZfu%2FmtXjIFcOV82MvpR1BsWZ67zS35ONeRnXpWMJrpHWjYn5xR322u4%2BKRdD%2FNXHfM%2BdC80%2FBTmMcBTiQq3gJ2n2zGKT2%2FiS62TGqyVwpPOTgckUolygfq7kAAMnDH3T8j%2BtTDWzYDg6FGpG7gKIQNP2Y6OKlSoK93o2RDk%2Bnbv53dnHvyCbSNGpBQjuDYHT8JLOQxoWNb%2BPe9mo1BtpkKGnnYqyUTpk7G7MDXuRSU%2BVQ8qkpm3an17pwheKIuPsMInmB7tEDZcq6c3sNzG94En0tpEF9D9C5Jb0onroqkpd%2FOMAUFkvHKQbkVOLTDm3zjNv1zbNkUiAh4w3diNlbXQQ%2Bd2hslwMCMmMbh2D46QneOqHLsLnwRmdsThF%2Bp3VDc%2BcGEBLs2fROdHJS%2Bik%2BqHE%2BpfBeW%2BErOAaAJIcQUwuPeR7BjwmfAeqIAptioHOwk9g%2B2X5%2FKc6YhZfA8rBY4KFsK0EtoU8QmpKcS0HXI75Bg420M7yxf6Vh9yBivb0ZwTgURsmWZBEQ0opvHDtOoGwZJjazFy0hGwwSxop%2BowhNfFywY6pgG49JZ4Y%2Fqzz97P640mPm%2F5dvVN8oOoKPQLnDeogYzCOQm%2FuiyIRKY9vpuoP3HHm4xVWbAN19PIeuvA5LRrGnaORHBufvZiifWLXRd%2BilpZBKiLn8Xa6lXv2ahXMsggJHozVXosg9P9eIQIK8vfz1EI%2ByBgGN1YtLrL9gK3NQSLNp%2FpwAucACRXxrVgbqlGCPap%2BykrXBVP7vPIlj2mFcd%2BGpFIJIf8&X-Amz-Signature=bbb00c07fbfc11eb6048eb9f1eec084f204f829bfcbaf1de006d8b83090fd364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


