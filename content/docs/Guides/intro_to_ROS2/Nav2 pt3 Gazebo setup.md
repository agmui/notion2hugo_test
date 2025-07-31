---
sys:
  pageId: "1d0da3bc-6297-80fb-8efb-e233f8606981"
  createdTime: "2025-04-09T14:40:00.000Z"
  lastEditedTime: "2025-07-30T06:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt3 Gazebo setup.md"
title: "Nav2 pt3 Gazebo setup"
date: "2025-07-30T06:24:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOKIVDNY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpDv%2F6ktI2IFAt5%2BhVH9p79X%2Bzd68XpbCz1Xmtnmd2JwIgf5n2i27SSSviy3dgbGAjYUMEf4gBxesaWAt13XDBOJgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzOxJlmDGk3KNG0bCrcA952ReLpPfRZp%2BuvsjNi6HdQAKSdPAof3JJRVRdo%2BpkyR9fvDhSVqaCdbTiaq8VKl%2FBbfmX3IpuK1ON%2FYXUsDbO60BBAftJApntswQhc69HWZtjYHQfBFugUYB0Zx5OjotulclTCOA0CR1kPP57Fv9lgAo1QkmDhSVgHsgghny9A%2Buq9m83Rrh2hpYc%2BAFCHiJ99PHyLbgPXXsbD2q%2F7IO6gDgYztI7y9eliX6ye%2Fp%2FSzXOCeJfWyNLhl%2F24GIO0wTcs2atd64xZGLwS0NFhOAQ6ORm%2FBOB06KOA3oQz2nlmI9hTaxPWNtEpaSkCdWt2y7tkEIaZwIoJf%2FAYL0AHzKzD8PqM4nZknpCYmyyG4WRlBGOwjJDzGjbef7VCB%2B4X7%2Bs2ZVrezQUNeA6BaUbvO7ygqImUKmmQiCnOiNxjozQo2xznq%2FU680x2QASBbSPBRkF6TegKvzeDFa9md0p%2FHOCWbFT46EPQWe2tMQUoneXQsIH%2F5F%2FA2%2FycJ7qxnccp8ByIz1SYJm9RPR2spPdiyleWu0NrFLkKgSVQ2Kaxw0EKaECcfb%2FsyR3%2B3drhkKbkdSjKIvjQ6wyD5N1t%2BIBQ9TNPYhSgMUEYzpytCcaHD5%2B8JjjC5gJRXkWKCbr%2FMNCcrcQGOqUB1c8fU48udkx7DaaJ5dd3fEk%2BLdu6Aomddw5xD8WEH4zK8WlQNd4IkjK9m4GIl7eXtq1pdRM%2FJvJ%2FmfOkfz4vkM3TX8D0e1o6LIynKsdq4w5%2F1BMQbdYOIjYQg7ZYEmSQH2S%2BC%2BXkXk%2F8oaLl4B9KnBc%2FWpi481xFm3q4JbLwTH9ozPq%2F8iYQfEkt8V5BQaa3PshTRTbefeQgg0hAW7YaVqCmW8G4&X-Amz-Signature=85e0ceeaa05d8c1e67e860f7a13d615e006781be36e87495f43684b1aafa14c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOKIVDNY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpDv%2F6ktI2IFAt5%2BhVH9p79X%2Bzd68XpbCz1Xmtnmd2JwIgf5n2i27SSSviy3dgbGAjYUMEf4gBxesaWAt13XDBOJgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzOxJlmDGk3KNG0bCrcA952ReLpPfRZp%2BuvsjNi6HdQAKSdPAof3JJRVRdo%2BpkyR9fvDhSVqaCdbTiaq8VKl%2FBbfmX3IpuK1ON%2FYXUsDbO60BBAftJApntswQhc69HWZtjYHQfBFugUYB0Zx5OjotulclTCOA0CR1kPP57Fv9lgAo1QkmDhSVgHsgghny9A%2Buq9m83Rrh2hpYc%2BAFCHiJ99PHyLbgPXXsbD2q%2F7IO6gDgYztI7y9eliX6ye%2Fp%2FSzXOCeJfWyNLhl%2F24GIO0wTcs2atd64xZGLwS0NFhOAQ6ORm%2FBOB06KOA3oQz2nlmI9hTaxPWNtEpaSkCdWt2y7tkEIaZwIoJf%2FAYL0AHzKzD8PqM4nZknpCYmyyG4WRlBGOwjJDzGjbef7VCB%2B4X7%2Bs2ZVrezQUNeA6BaUbvO7ygqImUKmmQiCnOiNxjozQo2xznq%2FU680x2QASBbSPBRkF6TegKvzeDFa9md0p%2FHOCWbFT46EPQWe2tMQUoneXQsIH%2F5F%2FA2%2FycJ7qxnccp8ByIz1SYJm9RPR2spPdiyleWu0NrFLkKgSVQ2Kaxw0EKaECcfb%2FsyR3%2B3drhkKbkdSjKIvjQ6wyD5N1t%2BIBQ9TNPYhSgMUEYzpytCcaHD5%2B8JjjC5gJRXkWKCbr%2FMNCcrcQGOqUB1c8fU48udkx7DaaJ5dd3fEk%2BLdu6Aomddw5xD8WEH4zK8WlQNd4IkjK9m4GIl7eXtq1pdRM%2FJvJ%2FmfOkfz4vkM3TX8D0e1o6LIynKsdq4w5%2F1BMQbdYOIjYQg7ZYEmSQH2S%2BC%2BXkXk%2F8oaLl4B9KnBc%2FWpi481xFm3q4JbLwTH9ozPq%2F8iYQfEkt8V5BQaa3PshTRTbefeQgg0hAW7YaVqCmW8G4&X-Amz-Signature=fbd8a6bfea7e196a8098b4406519f04e95961e56f3075f71f7f8fa0a5c793152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOKIVDNY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpDv%2F6ktI2IFAt5%2BhVH9p79X%2Bzd68XpbCz1Xmtnmd2JwIgf5n2i27SSSviy3dgbGAjYUMEf4gBxesaWAt13XDBOJgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzOxJlmDGk3KNG0bCrcA952ReLpPfRZp%2BuvsjNi6HdQAKSdPAof3JJRVRdo%2BpkyR9fvDhSVqaCdbTiaq8VKl%2FBbfmX3IpuK1ON%2FYXUsDbO60BBAftJApntswQhc69HWZtjYHQfBFugUYB0Zx5OjotulclTCOA0CR1kPP57Fv9lgAo1QkmDhSVgHsgghny9A%2Buq9m83Rrh2hpYc%2BAFCHiJ99PHyLbgPXXsbD2q%2F7IO6gDgYztI7y9eliX6ye%2Fp%2FSzXOCeJfWyNLhl%2F24GIO0wTcs2atd64xZGLwS0NFhOAQ6ORm%2FBOB06KOA3oQz2nlmI9hTaxPWNtEpaSkCdWt2y7tkEIaZwIoJf%2FAYL0AHzKzD8PqM4nZknpCYmyyG4WRlBGOwjJDzGjbef7VCB%2B4X7%2Bs2ZVrezQUNeA6BaUbvO7ygqImUKmmQiCnOiNxjozQo2xznq%2FU680x2QASBbSPBRkF6TegKvzeDFa9md0p%2FHOCWbFT46EPQWe2tMQUoneXQsIH%2F5F%2FA2%2FycJ7qxnccp8ByIz1SYJm9RPR2spPdiyleWu0NrFLkKgSVQ2Kaxw0EKaECcfb%2FsyR3%2B3drhkKbkdSjKIvjQ6wyD5N1t%2BIBQ9TNPYhSgMUEYzpytCcaHD5%2B8JjjC5gJRXkWKCbr%2FMNCcrcQGOqUB1c8fU48udkx7DaaJ5dd3fEk%2BLdu6Aomddw5xD8WEH4zK8WlQNd4IkjK9m4GIl7eXtq1pdRM%2FJvJ%2FmfOkfz4vkM3TX8D0e1o6LIynKsdq4w5%2F1BMQbdYOIjYQg7ZYEmSQH2S%2BC%2BXkXk%2F8oaLl4B9KnBc%2FWpi481xFm3q4JbLwTH9ozPq%2F8iYQfEkt8V5BQaa3PshTRTbefeQgg0hAW7YaVqCmW8G4&X-Amz-Signature=d453e47c729e4ca8f321ce73603fd36832c3a6722127682907abea1b08956c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOKIVDNY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpDv%2F6ktI2IFAt5%2BhVH9p79X%2Bzd68XpbCz1Xmtnmd2JwIgf5n2i27SSSviy3dgbGAjYUMEf4gBxesaWAt13XDBOJgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzOxJlmDGk3KNG0bCrcA952ReLpPfRZp%2BuvsjNi6HdQAKSdPAof3JJRVRdo%2BpkyR9fvDhSVqaCdbTiaq8VKl%2FBbfmX3IpuK1ON%2FYXUsDbO60BBAftJApntswQhc69HWZtjYHQfBFugUYB0Zx5OjotulclTCOA0CR1kPP57Fv9lgAo1QkmDhSVgHsgghny9A%2Buq9m83Rrh2hpYc%2BAFCHiJ99PHyLbgPXXsbD2q%2F7IO6gDgYztI7y9eliX6ye%2Fp%2FSzXOCeJfWyNLhl%2F24GIO0wTcs2atd64xZGLwS0NFhOAQ6ORm%2FBOB06KOA3oQz2nlmI9hTaxPWNtEpaSkCdWt2y7tkEIaZwIoJf%2FAYL0AHzKzD8PqM4nZknpCYmyyG4WRlBGOwjJDzGjbef7VCB%2B4X7%2Bs2ZVrezQUNeA6BaUbvO7ygqImUKmmQiCnOiNxjozQo2xznq%2FU680x2QASBbSPBRkF6TegKvzeDFa9md0p%2FHOCWbFT46EPQWe2tMQUoneXQsIH%2F5F%2FA2%2FycJ7qxnccp8ByIz1SYJm9RPR2spPdiyleWu0NrFLkKgSVQ2Kaxw0EKaECcfb%2FsyR3%2B3drhkKbkdSjKIvjQ6wyD5N1t%2BIBQ9TNPYhSgMUEYzpytCcaHD5%2B8JjjC5gJRXkWKCbr%2FMNCcrcQGOqUB1c8fU48udkx7DaaJ5dd3fEk%2BLdu6Aomddw5xD8WEH4zK8WlQNd4IkjK9m4GIl7eXtq1pdRM%2FJvJ%2FmfOkfz4vkM3TX8D0e1o6LIynKsdq4w5%2F1BMQbdYOIjYQg7ZYEmSQH2S%2BC%2BXkXk%2F8oaLl4B9KnBc%2FWpi481xFm3q4JbLwTH9ozPq%2F8iYQfEkt8V5BQaa3PshTRTbefeQgg0hAW7YaVqCmW8G4&X-Amz-Signature=0bfca8cf5095eeba4f8e14d0ed0989f3867b393ffc2ec605adcf0571b6962c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOKIVDNY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpDv%2F6ktI2IFAt5%2BhVH9p79X%2Bzd68XpbCz1Xmtnmd2JwIgf5n2i27SSSviy3dgbGAjYUMEf4gBxesaWAt13XDBOJgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzOxJlmDGk3KNG0bCrcA952ReLpPfRZp%2BuvsjNi6HdQAKSdPAof3JJRVRdo%2BpkyR9fvDhSVqaCdbTiaq8VKl%2FBbfmX3IpuK1ON%2FYXUsDbO60BBAftJApntswQhc69HWZtjYHQfBFugUYB0Zx5OjotulclTCOA0CR1kPP57Fv9lgAo1QkmDhSVgHsgghny9A%2Buq9m83Rrh2hpYc%2BAFCHiJ99PHyLbgPXXsbD2q%2F7IO6gDgYztI7y9eliX6ye%2Fp%2FSzXOCeJfWyNLhl%2F24GIO0wTcs2atd64xZGLwS0NFhOAQ6ORm%2FBOB06KOA3oQz2nlmI9hTaxPWNtEpaSkCdWt2y7tkEIaZwIoJf%2FAYL0AHzKzD8PqM4nZknpCYmyyG4WRlBGOwjJDzGjbef7VCB%2B4X7%2Bs2ZVrezQUNeA6BaUbvO7ygqImUKmmQiCnOiNxjozQo2xznq%2FU680x2QASBbSPBRkF6TegKvzeDFa9md0p%2FHOCWbFT46EPQWe2tMQUoneXQsIH%2F5F%2FA2%2FycJ7qxnccp8ByIz1SYJm9RPR2spPdiyleWu0NrFLkKgSVQ2Kaxw0EKaECcfb%2FsyR3%2B3drhkKbkdSjKIvjQ6wyD5N1t%2BIBQ9TNPYhSgMUEYzpytCcaHD5%2B8JjjC5gJRXkWKCbr%2FMNCcrcQGOqUB1c8fU48udkx7DaaJ5dd3fEk%2BLdu6Aomddw5xD8WEH4zK8WlQNd4IkjK9m4GIl7eXtq1pdRM%2FJvJ%2FmfOkfz4vkM3TX8D0e1o6LIynKsdq4w5%2F1BMQbdYOIjYQg7ZYEmSQH2S%2BC%2BXkXk%2F8oaLl4B9KnBc%2FWpi481xFm3q4JbLwTH9ozPq%2F8iYQfEkt8V5BQaa3PshTRTbefeQgg0hAW7YaVqCmW8G4&X-Amz-Signature=feab81c4ab3be394c7826b41c0ec3636b77a05938563d8931cbe6d7e9988cb45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOKIVDNY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpDv%2F6ktI2IFAt5%2BhVH9p79X%2Bzd68XpbCz1Xmtnmd2JwIgf5n2i27SSSviy3dgbGAjYUMEf4gBxesaWAt13XDBOJgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzOxJlmDGk3KNG0bCrcA952ReLpPfRZp%2BuvsjNi6HdQAKSdPAof3JJRVRdo%2BpkyR9fvDhSVqaCdbTiaq8VKl%2FBbfmX3IpuK1ON%2FYXUsDbO60BBAftJApntswQhc69HWZtjYHQfBFugUYB0Zx5OjotulclTCOA0CR1kPP57Fv9lgAo1QkmDhSVgHsgghny9A%2Buq9m83Rrh2hpYc%2BAFCHiJ99PHyLbgPXXsbD2q%2F7IO6gDgYztI7y9eliX6ye%2Fp%2FSzXOCeJfWyNLhl%2F24GIO0wTcs2atd64xZGLwS0NFhOAQ6ORm%2FBOB06KOA3oQz2nlmI9hTaxPWNtEpaSkCdWt2y7tkEIaZwIoJf%2FAYL0AHzKzD8PqM4nZknpCYmyyG4WRlBGOwjJDzGjbef7VCB%2B4X7%2Bs2ZVrezQUNeA6BaUbvO7ygqImUKmmQiCnOiNxjozQo2xznq%2FU680x2QASBbSPBRkF6TegKvzeDFa9md0p%2FHOCWbFT46EPQWe2tMQUoneXQsIH%2F5F%2FA2%2FycJ7qxnccp8ByIz1SYJm9RPR2spPdiyleWu0NrFLkKgSVQ2Kaxw0EKaECcfb%2FsyR3%2B3drhkKbkdSjKIvjQ6wyD5N1t%2BIBQ9TNPYhSgMUEYzpytCcaHD5%2B8JjjC5gJRXkWKCbr%2FMNCcrcQGOqUB1c8fU48udkx7DaaJ5dd3fEk%2BLdu6Aomddw5xD8WEH4zK8WlQNd4IkjK9m4GIl7eXtq1pdRM%2FJvJ%2FmfOkfz4vkM3TX8D0e1o6LIynKsdq4w5%2F1BMQbdYOIjYQg7ZYEmSQH2S%2BC%2BXkXk%2F8oaLl4B9KnBc%2FWpi481xFm3q4JbLwTH9ozPq%2F8iYQfEkt8V5BQaa3PshTRTbefeQgg0hAW7YaVqCmW8G4&X-Amz-Signature=afedfd05dfe8178df6e016bb82f179196a6b0d80bc4ef7b1c2ff7628a4774b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOKIVDNY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpDv%2F6ktI2IFAt5%2BhVH9p79X%2Bzd68XpbCz1Xmtnmd2JwIgf5n2i27SSSviy3dgbGAjYUMEf4gBxesaWAt13XDBOJgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzOxJlmDGk3KNG0bCrcA952ReLpPfRZp%2BuvsjNi6HdQAKSdPAof3JJRVRdo%2BpkyR9fvDhSVqaCdbTiaq8VKl%2FBbfmX3IpuK1ON%2FYXUsDbO60BBAftJApntswQhc69HWZtjYHQfBFugUYB0Zx5OjotulclTCOA0CR1kPP57Fv9lgAo1QkmDhSVgHsgghny9A%2Buq9m83Rrh2hpYc%2BAFCHiJ99PHyLbgPXXsbD2q%2F7IO6gDgYztI7y9eliX6ye%2Fp%2FSzXOCeJfWyNLhl%2F24GIO0wTcs2atd64xZGLwS0NFhOAQ6ORm%2FBOB06KOA3oQz2nlmI9hTaxPWNtEpaSkCdWt2y7tkEIaZwIoJf%2FAYL0AHzKzD8PqM4nZknpCYmyyG4WRlBGOwjJDzGjbef7VCB%2B4X7%2Bs2ZVrezQUNeA6BaUbvO7ygqImUKmmQiCnOiNxjozQo2xznq%2FU680x2QASBbSPBRkF6TegKvzeDFa9md0p%2FHOCWbFT46EPQWe2tMQUoneXQsIH%2F5F%2FA2%2FycJ7qxnccp8ByIz1SYJm9RPR2spPdiyleWu0NrFLkKgSVQ2Kaxw0EKaECcfb%2FsyR3%2B3drhkKbkdSjKIvjQ6wyD5N1t%2BIBQ9TNPYhSgMUEYzpytCcaHD5%2B8JjjC5gJRXkWKCbr%2FMNCcrcQGOqUB1c8fU48udkx7DaaJ5dd3fEk%2BLdu6Aomddw5xD8WEH4zK8WlQNd4IkjK9m4GIl7eXtq1pdRM%2FJvJ%2FmfOkfz4vkM3TX8D0e1o6LIynKsdq4w5%2F1BMQbdYOIjYQg7ZYEmSQH2S%2BC%2BXkXk%2F8oaLl4B9KnBc%2FWpi481xFm3q4JbLwTH9ozPq%2F8iYQfEkt8V5BQaa3PshTRTbefeQgg0hAW7YaVqCmW8G4&X-Amz-Signature=6233bac6109a6a4ee72b1be52a1eee932eaa87ee0174430737e2d6c5b916f678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOKIVDNY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpDv%2F6ktI2IFAt5%2BhVH9p79X%2Bzd68XpbCz1Xmtnmd2JwIgf5n2i27SSSviy3dgbGAjYUMEf4gBxesaWAt13XDBOJgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzOxJlmDGk3KNG0bCrcA952ReLpPfRZp%2BuvsjNi6HdQAKSdPAof3JJRVRdo%2BpkyR9fvDhSVqaCdbTiaq8VKl%2FBbfmX3IpuK1ON%2FYXUsDbO60BBAftJApntswQhc69HWZtjYHQfBFugUYB0Zx5OjotulclTCOA0CR1kPP57Fv9lgAo1QkmDhSVgHsgghny9A%2Buq9m83Rrh2hpYc%2BAFCHiJ99PHyLbgPXXsbD2q%2F7IO6gDgYztI7y9eliX6ye%2Fp%2FSzXOCeJfWyNLhl%2F24GIO0wTcs2atd64xZGLwS0NFhOAQ6ORm%2FBOB06KOA3oQz2nlmI9hTaxPWNtEpaSkCdWt2y7tkEIaZwIoJf%2FAYL0AHzKzD8PqM4nZknpCYmyyG4WRlBGOwjJDzGjbef7VCB%2B4X7%2Bs2ZVrezQUNeA6BaUbvO7ygqImUKmmQiCnOiNxjozQo2xznq%2FU680x2QASBbSPBRkF6TegKvzeDFa9md0p%2FHOCWbFT46EPQWe2tMQUoneXQsIH%2F5F%2FA2%2FycJ7qxnccp8ByIz1SYJm9RPR2spPdiyleWu0NrFLkKgSVQ2Kaxw0EKaECcfb%2FsyR3%2B3drhkKbkdSjKIvjQ6wyD5N1t%2BIBQ9TNPYhSgMUEYzpytCcaHD5%2B8JjjC5gJRXkWKCbr%2FMNCcrcQGOqUB1c8fU48udkx7DaaJ5dd3fEk%2BLdu6Aomddw5xD8WEH4zK8WlQNd4IkjK9m4GIl7eXtq1pdRM%2FJvJ%2FmfOkfz4vkM3TX8D0e1o6LIynKsdq4w5%2F1BMQbdYOIjYQg7ZYEmSQH2S%2BC%2BXkXk%2F8oaLl4B9KnBc%2FWpi481xFm3q4JbLwTH9ozPq%2F8iYQfEkt8V5BQaa3PshTRTbefeQgg0hAW7YaVqCmW8G4&X-Amz-Signature=386697e717d62baa1940dcae1bac2006afa640d96849e029bea7a5c615425b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOKIVDNY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpDv%2F6ktI2IFAt5%2BhVH9p79X%2Bzd68XpbCz1Xmtnmd2JwIgf5n2i27SSSviy3dgbGAjYUMEf4gBxesaWAt13XDBOJgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzOxJlmDGk3KNG0bCrcA952ReLpPfRZp%2BuvsjNi6HdQAKSdPAof3JJRVRdo%2BpkyR9fvDhSVqaCdbTiaq8VKl%2FBbfmX3IpuK1ON%2FYXUsDbO60BBAftJApntswQhc69HWZtjYHQfBFugUYB0Zx5OjotulclTCOA0CR1kPP57Fv9lgAo1QkmDhSVgHsgghny9A%2Buq9m83Rrh2hpYc%2BAFCHiJ99PHyLbgPXXsbD2q%2F7IO6gDgYztI7y9eliX6ye%2Fp%2FSzXOCeJfWyNLhl%2F24GIO0wTcs2atd64xZGLwS0NFhOAQ6ORm%2FBOB06KOA3oQz2nlmI9hTaxPWNtEpaSkCdWt2y7tkEIaZwIoJf%2FAYL0AHzKzD8PqM4nZknpCYmyyG4WRlBGOwjJDzGjbef7VCB%2B4X7%2Bs2ZVrezQUNeA6BaUbvO7ygqImUKmmQiCnOiNxjozQo2xznq%2FU680x2QASBbSPBRkF6TegKvzeDFa9md0p%2FHOCWbFT46EPQWe2tMQUoneXQsIH%2F5F%2FA2%2FycJ7qxnccp8ByIz1SYJm9RPR2spPdiyleWu0NrFLkKgSVQ2Kaxw0EKaECcfb%2FsyR3%2B3drhkKbkdSjKIvjQ6wyD5N1t%2BIBQ9TNPYhSgMUEYzpytCcaHD5%2B8JjjC5gJRXkWKCbr%2FMNCcrcQGOqUB1c8fU48udkx7DaaJ5dd3fEk%2BLdu6Aomddw5xD8WEH4zK8WlQNd4IkjK9m4GIl7eXtq1pdRM%2FJvJ%2FmfOkfz4vkM3TX8D0e1o6LIynKsdq4w5%2F1BMQbdYOIjYQg7ZYEmSQH2S%2BC%2BXkXk%2F8oaLl4B9KnBc%2FWpi481xFm3q4JbLwTH9ozPq%2F8iYQfEkt8V5BQaa3PshTRTbefeQgg0hAW7YaVqCmW8G4&X-Amz-Signature=a2c347fc4558338126c0b46b4b835e4868218c9bbbaa2c22b08ca309f4081ccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOKIVDNY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpDv%2F6ktI2IFAt5%2BhVH9p79X%2Bzd68XpbCz1Xmtnmd2JwIgf5n2i27SSSviy3dgbGAjYUMEf4gBxesaWAt13XDBOJgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzOxJlmDGk3KNG0bCrcA952ReLpPfRZp%2BuvsjNi6HdQAKSdPAof3JJRVRdo%2BpkyR9fvDhSVqaCdbTiaq8VKl%2FBbfmX3IpuK1ON%2FYXUsDbO60BBAftJApntswQhc69HWZtjYHQfBFugUYB0Zx5OjotulclTCOA0CR1kPP57Fv9lgAo1QkmDhSVgHsgghny9A%2Buq9m83Rrh2hpYc%2BAFCHiJ99PHyLbgPXXsbD2q%2F7IO6gDgYztI7y9eliX6ye%2Fp%2FSzXOCeJfWyNLhl%2F24GIO0wTcs2atd64xZGLwS0NFhOAQ6ORm%2FBOB06KOA3oQz2nlmI9hTaxPWNtEpaSkCdWt2y7tkEIaZwIoJf%2FAYL0AHzKzD8PqM4nZknpCYmyyG4WRlBGOwjJDzGjbef7VCB%2B4X7%2Bs2ZVrezQUNeA6BaUbvO7ygqImUKmmQiCnOiNxjozQo2xznq%2FU680x2QASBbSPBRkF6TegKvzeDFa9md0p%2FHOCWbFT46EPQWe2tMQUoneXQsIH%2F5F%2FA2%2FycJ7qxnccp8ByIz1SYJm9RPR2spPdiyleWu0NrFLkKgSVQ2Kaxw0EKaECcfb%2FsyR3%2B3drhkKbkdSjKIvjQ6wyD5N1t%2BIBQ9TNPYhSgMUEYzpytCcaHD5%2B8JjjC5gJRXkWKCbr%2FMNCcrcQGOqUB1c8fU48udkx7DaaJ5dd3fEk%2BLdu6Aomddw5xD8WEH4zK8WlQNd4IkjK9m4GIl7eXtq1pdRM%2FJvJ%2FmfOkfz4vkM3TX8D0e1o6LIynKsdq4w5%2F1BMQbdYOIjYQg7ZYEmSQH2S%2BC%2BXkXk%2F8oaLl4B9KnBc%2FWpi481xFm3q4JbLwTH9ozPq%2F8iYQfEkt8V5BQaa3PshTRTbefeQgg0hAW7YaVqCmW8G4&X-Amz-Signature=5380645264becc890f41871ca190a74a1c22414a794aceac7000b247f3257d75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

TODO: idk mention + link Robot Localization node

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
