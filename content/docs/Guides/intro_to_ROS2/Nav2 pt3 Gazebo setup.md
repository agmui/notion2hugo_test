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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTE2NE6%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEqfWapFY4ZptdHVjfQzbhnJzYaMsgu34rgZd3Gvz%2BpQAiBBvt0ACJJRjUY5u3ovCjWXRwYuuWslo%2B493bT9xRS2ESqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNI00jT2ksNkGsjY0KtwDzRJ0AXRB6GKrlL5GzPAMSx11x0dcMiD43LsQJ6K%2BvyHSVcm9ToayPrxCbOg3FiEMJ0r1%2F5O5%2Febrs1vbVsBhF8Z26%2B%2F9LDlgEoVNoZjmF06ElVSuyInRFCPXYFs3j2HIQK0UslWstG5UI6buh%2FzKj0kE5uI85trzBjY5nRgWDAYuBcOTXEtxFKolfvxsa2Fjfd4G2JL4rHlSHnK3Gi0PfoDapEpeV5z%2F%2FV%2B1%2BGB%2FMoqP4NG931Z38d%2B6MXf1bTXgHlkw5uXVlrn%2BuHnHGaeais%2BK0TLOruKhj9gEgd1L%2FotQunuR90LGdeIg1Q3wXOkWsyHhTePXxOEuFaRCeVT4bKHdaumdI6GEFawAxSbh1scsvR0JRU0dy9tQBcMHY1m3pMaZYH47zIbIMuRv7Adgf9hTUjiOVZkujGU%2Buc79XzL2ScfXAKKOEWOtBKEMTiIPPr4CFcBemRIKHX9HLA8%2B73uZcAsCzlDoiinRqoSKaxzREf6lrOdwq8qb33QWyvHJ1JCz6WaG5Tjvm6pa9joXXjsHw6Vk1MzRZFHfU0wQLCoI3d64Vy7ErYd%2Bl9GVHNYMAwJ32EKTY7ia4lHDE2nCPVkZBg%2FtIht40IvlFg74%2FpFDPSMx2iMI%2FHCGee4wzoaAzAY6pgHZzKOcm3DQzkcMtP9c9dvIF%2BAi%2BklPCqUINeuNmlx023gX2usaYBrDhHt50OCDqVF0UXjHB2Pp2mTKLIjegy9M9bC56%2Fv7J2qk%2BQah43zyvDFEW4AzdHDy%2Fzy2I2G19azR%2BGR508m2PoT2ywIshqN8bA3QcyR1oauf5lu%2FzrSpksCDLJqYfu5DtlffV7zi%2B1ojuaVVvX2uDGOHDvZIUPGCOmfPEXRS&X-Amz-Signature=dea091bac3ce9306cd74bf0c065d225ddcf93c58c65e70c6662180d80f8b4ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTE2NE6%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEqfWapFY4ZptdHVjfQzbhnJzYaMsgu34rgZd3Gvz%2BpQAiBBvt0ACJJRjUY5u3ovCjWXRwYuuWslo%2B493bT9xRS2ESqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNI00jT2ksNkGsjY0KtwDzRJ0AXRB6GKrlL5GzPAMSx11x0dcMiD43LsQJ6K%2BvyHSVcm9ToayPrxCbOg3FiEMJ0r1%2F5O5%2Febrs1vbVsBhF8Z26%2B%2F9LDlgEoVNoZjmF06ElVSuyInRFCPXYFs3j2HIQK0UslWstG5UI6buh%2FzKj0kE5uI85trzBjY5nRgWDAYuBcOTXEtxFKolfvxsa2Fjfd4G2JL4rHlSHnK3Gi0PfoDapEpeV5z%2F%2FV%2B1%2BGB%2FMoqP4NG931Z38d%2B6MXf1bTXgHlkw5uXVlrn%2BuHnHGaeais%2BK0TLOruKhj9gEgd1L%2FotQunuR90LGdeIg1Q3wXOkWsyHhTePXxOEuFaRCeVT4bKHdaumdI6GEFawAxSbh1scsvR0JRU0dy9tQBcMHY1m3pMaZYH47zIbIMuRv7Adgf9hTUjiOVZkujGU%2Buc79XzL2ScfXAKKOEWOtBKEMTiIPPr4CFcBemRIKHX9HLA8%2B73uZcAsCzlDoiinRqoSKaxzREf6lrOdwq8qb33QWyvHJ1JCz6WaG5Tjvm6pa9joXXjsHw6Vk1MzRZFHfU0wQLCoI3d64Vy7ErYd%2Bl9GVHNYMAwJ32EKTY7ia4lHDE2nCPVkZBg%2FtIht40IvlFg74%2FpFDPSMx2iMI%2FHCGee4wzoaAzAY6pgHZzKOcm3DQzkcMtP9c9dvIF%2BAi%2BklPCqUINeuNmlx023gX2usaYBrDhHt50OCDqVF0UXjHB2Pp2mTKLIjegy9M9bC56%2Fv7J2qk%2BQah43zyvDFEW4AzdHDy%2Fzy2I2G19azR%2BGR508m2PoT2ywIshqN8bA3QcyR1oauf5lu%2FzrSpksCDLJqYfu5DtlffV7zi%2B1ojuaVVvX2uDGOHDvZIUPGCOmfPEXRS&X-Amz-Signature=89dce0e9cfcfbacf325a992fb0daa3d551cc415b6aef96cc1bdc40dc506ea817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTE2NE6%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEqfWapFY4ZptdHVjfQzbhnJzYaMsgu34rgZd3Gvz%2BpQAiBBvt0ACJJRjUY5u3ovCjWXRwYuuWslo%2B493bT9xRS2ESqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNI00jT2ksNkGsjY0KtwDzRJ0AXRB6GKrlL5GzPAMSx11x0dcMiD43LsQJ6K%2BvyHSVcm9ToayPrxCbOg3FiEMJ0r1%2F5O5%2Febrs1vbVsBhF8Z26%2B%2F9LDlgEoVNoZjmF06ElVSuyInRFCPXYFs3j2HIQK0UslWstG5UI6buh%2FzKj0kE5uI85trzBjY5nRgWDAYuBcOTXEtxFKolfvxsa2Fjfd4G2JL4rHlSHnK3Gi0PfoDapEpeV5z%2F%2FV%2B1%2BGB%2FMoqP4NG931Z38d%2B6MXf1bTXgHlkw5uXVlrn%2BuHnHGaeais%2BK0TLOruKhj9gEgd1L%2FotQunuR90LGdeIg1Q3wXOkWsyHhTePXxOEuFaRCeVT4bKHdaumdI6GEFawAxSbh1scsvR0JRU0dy9tQBcMHY1m3pMaZYH47zIbIMuRv7Adgf9hTUjiOVZkujGU%2Buc79XzL2ScfXAKKOEWOtBKEMTiIPPr4CFcBemRIKHX9HLA8%2B73uZcAsCzlDoiinRqoSKaxzREf6lrOdwq8qb33QWyvHJ1JCz6WaG5Tjvm6pa9joXXjsHw6Vk1MzRZFHfU0wQLCoI3d64Vy7ErYd%2Bl9GVHNYMAwJ32EKTY7ia4lHDE2nCPVkZBg%2FtIht40IvlFg74%2FpFDPSMx2iMI%2FHCGee4wzoaAzAY6pgHZzKOcm3DQzkcMtP9c9dvIF%2BAi%2BklPCqUINeuNmlx023gX2usaYBrDhHt50OCDqVF0UXjHB2Pp2mTKLIjegy9M9bC56%2Fv7J2qk%2BQah43zyvDFEW4AzdHDy%2Fzy2I2G19azR%2BGR508m2PoT2ywIshqN8bA3QcyR1oauf5lu%2FzrSpksCDLJqYfu5DtlffV7zi%2B1ojuaVVvX2uDGOHDvZIUPGCOmfPEXRS&X-Amz-Signature=3577b3d65d516f7c4e7a49b785406240dca1e5392ff541e8789d4436da9ee6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTE2NE6%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEqfWapFY4ZptdHVjfQzbhnJzYaMsgu34rgZd3Gvz%2BpQAiBBvt0ACJJRjUY5u3ovCjWXRwYuuWslo%2B493bT9xRS2ESqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNI00jT2ksNkGsjY0KtwDzRJ0AXRB6GKrlL5GzPAMSx11x0dcMiD43LsQJ6K%2BvyHSVcm9ToayPrxCbOg3FiEMJ0r1%2F5O5%2Febrs1vbVsBhF8Z26%2B%2F9LDlgEoVNoZjmF06ElVSuyInRFCPXYFs3j2HIQK0UslWstG5UI6buh%2FzKj0kE5uI85trzBjY5nRgWDAYuBcOTXEtxFKolfvxsa2Fjfd4G2JL4rHlSHnK3Gi0PfoDapEpeV5z%2F%2FV%2B1%2BGB%2FMoqP4NG931Z38d%2B6MXf1bTXgHlkw5uXVlrn%2BuHnHGaeais%2BK0TLOruKhj9gEgd1L%2FotQunuR90LGdeIg1Q3wXOkWsyHhTePXxOEuFaRCeVT4bKHdaumdI6GEFawAxSbh1scsvR0JRU0dy9tQBcMHY1m3pMaZYH47zIbIMuRv7Adgf9hTUjiOVZkujGU%2Buc79XzL2ScfXAKKOEWOtBKEMTiIPPr4CFcBemRIKHX9HLA8%2B73uZcAsCzlDoiinRqoSKaxzREf6lrOdwq8qb33QWyvHJ1JCz6WaG5Tjvm6pa9joXXjsHw6Vk1MzRZFHfU0wQLCoI3d64Vy7ErYd%2Bl9GVHNYMAwJ32EKTY7ia4lHDE2nCPVkZBg%2FtIht40IvlFg74%2FpFDPSMx2iMI%2FHCGee4wzoaAzAY6pgHZzKOcm3DQzkcMtP9c9dvIF%2BAi%2BklPCqUINeuNmlx023gX2usaYBrDhHt50OCDqVF0UXjHB2Pp2mTKLIjegy9M9bC56%2Fv7J2qk%2BQah43zyvDFEW4AzdHDy%2Fzy2I2G19azR%2BGR508m2PoT2ywIshqN8bA3QcyR1oauf5lu%2FzrSpksCDLJqYfu5DtlffV7zi%2B1ojuaVVvX2uDGOHDvZIUPGCOmfPEXRS&X-Amz-Signature=9be8367d977c6cd212f4f1d4300dd4777b49912537e9de5df943d745a03a0e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLJ5ZTKA%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDhlF3PF2xflvHhKN07NBJfhY7M8iB13MUTTGv2WhqPYwIgW1iZ9nau1Q1oOvckocSNASSsd1LSKOYOIsQybcnbDcwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUsE2gHvXkL60YmJircA8wFo%2BoiFcJnKO9JHgTvJrkpOjTIhVJMQCsvwzQ0DxCYiMLTmj2xx4zOmpzmb%2FGLoVcDU9uG%2BFSEtARsHTXaT%2Bw8VAKjBbbYrC9snojJI%2F8B1Y6mdaO5bv1MXdd9zBhGSkmu5m1sFQP8IzKUYU%2FmN8xNZd5Z%2BPpbtfpusHxLZz9D3k%2B00dptRvHDYQT3%2Fx7j0Un0390KrcXggoS8rqMc%2B2sBmclqzNLQk9NUgl93GDXjS5ZqeIONMcIvMFJh7KhOiSMAuK0%2FWDTHF1DhHkxfpJlQ2IO4hIM4hduWXavspZik3ilhCAnyTY9rGP3yS7wDbRg30fUKXdcadhky7eyqFQHtJ6tNUsOKCLySnTQXg78PnmB70nvidZXUovMWqh%2Fu3Ffa6pwp2n3L0fQcnmI%2B47j7SSFC9%2FWdmtJ%2BQojdPyEHe7o%2FFGuYzXSbaM9dj6y4khM%2FfqdHxlHe%2BNYm9Mz9g9%2F0z%2BjK2SIoUjQzqSY1ize%2F%2FDxN8HM2E0CL0IdwgbaHpR9gAKFDTzNXYUAj8nOyAdoLjkOSmnWs4UQqFlEANHlT434a3JvkfBx88iKJ6cDJNY4Zu4t%2B%2BO4f23SFTw7acj2MhXiDO9mZ5M2xgj648HagSIebknE6p3JHyaYdMJiIgMwGOqUBvogXhX0JozrJQC%2FttNukspxy7riqRmI%2BL1T6Z53hBAaMUD8hOBApvhyOmFLX4fHdPWaHweWEUbKM2lEwVVourQark1Y9aQ4NU%2B9dbrCBppr4vx%2FD5kj4Xm1XZPut1c5OFjrtDC36Qv9nvgUMabT8c4RlTDk7wMJDWrE4uqFjAJSNbde%2BJN4d%2FnyeFgTSdmu6GH%2Ba1s8IcQvcIfJscr4jKFhUvs5a&X-Amz-Signature=09aa89ae62653f0d8b33edf12a4e588830637e16a52a303f00faabb8a181d6c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTE2NE6%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEqfWapFY4ZptdHVjfQzbhnJzYaMsgu34rgZd3Gvz%2BpQAiBBvt0ACJJRjUY5u3ovCjWXRwYuuWslo%2B493bT9xRS2ESqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNI00jT2ksNkGsjY0KtwDzRJ0AXRB6GKrlL5GzPAMSx11x0dcMiD43LsQJ6K%2BvyHSVcm9ToayPrxCbOg3FiEMJ0r1%2F5O5%2Febrs1vbVsBhF8Z26%2B%2F9LDlgEoVNoZjmF06ElVSuyInRFCPXYFs3j2HIQK0UslWstG5UI6buh%2FzKj0kE5uI85trzBjY5nRgWDAYuBcOTXEtxFKolfvxsa2Fjfd4G2JL4rHlSHnK3Gi0PfoDapEpeV5z%2F%2FV%2B1%2BGB%2FMoqP4NG931Z38d%2B6MXf1bTXgHlkw5uXVlrn%2BuHnHGaeais%2BK0TLOruKhj9gEgd1L%2FotQunuR90LGdeIg1Q3wXOkWsyHhTePXxOEuFaRCeVT4bKHdaumdI6GEFawAxSbh1scsvR0JRU0dy9tQBcMHY1m3pMaZYH47zIbIMuRv7Adgf9hTUjiOVZkujGU%2Buc79XzL2ScfXAKKOEWOtBKEMTiIPPr4CFcBemRIKHX9HLA8%2B73uZcAsCzlDoiinRqoSKaxzREf6lrOdwq8qb33QWyvHJ1JCz6WaG5Tjvm6pa9joXXjsHw6Vk1MzRZFHfU0wQLCoI3d64Vy7ErYd%2Bl9GVHNYMAwJ32EKTY7ia4lHDE2nCPVkZBg%2FtIht40IvlFg74%2FpFDPSMx2iMI%2FHCGee4wzoaAzAY6pgHZzKOcm3DQzkcMtP9c9dvIF%2BAi%2BklPCqUINeuNmlx023gX2usaYBrDhHt50OCDqVF0UXjHB2Pp2mTKLIjegy9M9bC56%2Fv7J2qk%2BQah43zyvDFEW4AzdHDy%2Fzy2I2G19azR%2BGR508m2PoT2ywIshqN8bA3QcyR1oauf5lu%2FzrSpksCDLJqYfu5DtlffV7zi%2B1ojuaVVvX2uDGOHDvZIUPGCOmfPEXRS&X-Amz-Signature=95e19d7bb064a3335aa1f85115aaedc46d163a0a9de4af748532ffc01e2d38f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTE2NE6%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEqfWapFY4ZptdHVjfQzbhnJzYaMsgu34rgZd3Gvz%2BpQAiBBvt0ACJJRjUY5u3ovCjWXRwYuuWslo%2B493bT9xRS2ESqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNI00jT2ksNkGsjY0KtwDzRJ0AXRB6GKrlL5GzPAMSx11x0dcMiD43LsQJ6K%2BvyHSVcm9ToayPrxCbOg3FiEMJ0r1%2F5O5%2Febrs1vbVsBhF8Z26%2B%2F9LDlgEoVNoZjmF06ElVSuyInRFCPXYFs3j2HIQK0UslWstG5UI6buh%2FzKj0kE5uI85trzBjY5nRgWDAYuBcOTXEtxFKolfvxsa2Fjfd4G2JL4rHlSHnK3Gi0PfoDapEpeV5z%2F%2FV%2B1%2BGB%2FMoqP4NG931Z38d%2B6MXf1bTXgHlkw5uXVlrn%2BuHnHGaeais%2BK0TLOruKhj9gEgd1L%2FotQunuR90LGdeIg1Q3wXOkWsyHhTePXxOEuFaRCeVT4bKHdaumdI6GEFawAxSbh1scsvR0JRU0dy9tQBcMHY1m3pMaZYH47zIbIMuRv7Adgf9hTUjiOVZkujGU%2Buc79XzL2ScfXAKKOEWOtBKEMTiIPPr4CFcBemRIKHX9HLA8%2B73uZcAsCzlDoiinRqoSKaxzREf6lrOdwq8qb33QWyvHJ1JCz6WaG5Tjvm6pa9joXXjsHw6Vk1MzRZFHfU0wQLCoI3d64Vy7ErYd%2Bl9GVHNYMAwJ32EKTY7ia4lHDE2nCPVkZBg%2FtIht40IvlFg74%2FpFDPSMx2iMI%2FHCGee4wzoaAzAY6pgHZzKOcm3DQzkcMtP9c9dvIF%2BAi%2BklPCqUINeuNmlx023gX2usaYBrDhHt50OCDqVF0UXjHB2Pp2mTKLIjegy9M9bC56%2Fv7J2qk%2BQah43zyvDFEW4AzdHDy%2Fzy2I2G19azR%2BGR508m2PoT2ywIshqN8bA3QcyR1oauf5lu%2FzrSpksCDLJqYfu5DtlffV7zi%2B1ojuaVVvX2uDGOHDvZIUPGCOmfPEXRS&X-Amz-Signature=e26905916c2e649f60d9cde2e59391f1811a92003b2c55463e1dfa74306803b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTE2NE6%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEqfWapFY4ZptdHVjfQzbhnJzYaMsgu34rgZd3Gvz%2BpQAiBBvt0ACJJRjUY5u3ovCjWXRwYuuWslo%2B493bT9xRS2ESqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNI00jT2ksNkGsjY0KtwDzRJ0AXRB6GKrlL5GzPAMSx11x0dcMiD43LsQJ6K%2BvyHSVcm9ToayPrxCbOg3FiEMJ0r1%2F5O5%2Febrs1vbVsBhF8Z26%2B%2F9LDlgEoVNoZjmF06ElVSuyInRFCPXYFs3j2HIQK0UslWstG5UI6buh%2FzKj0kE5uI85trzBjY5nRgWDAYuBcOTXEtxFKolfvxsa2Fjfd4G2JL4rHlSHnK3Gi0PfoDapEpeV5z%2F%2FV%2B1%2BGB%2FMoqP4NG931Z38d%2B6MXf1bTXgHlkw5uXVlrn%2BuHnHGaeais%2BK0TLOruKhj9gEgd1L%2FotQunuR90LGdeIg1Q3wXOkWsyHhTePXxOEuFaRCeVT4bKHdaumdI6GEFawAxSbh1scsvR0JRU0dy9tQBcMHY1m3pMaZYH47zIbIMuRv7Adgf9hTUjiOVZkujGU%2Buc79XzL2ScfXAKKOEWOtBKEMTiIPPr4CFcBemRIKHX9HLA8%2B73uZcAsCzlDoiinRqoSKaxzREf6lrOdwq8qb33QWyvHJ1JCz6WaG5Tjvm6pa9joXXjsHw6Vk1MzRZFHfU0wQLCoI3d64Vy7ErYd%2Bl9GVHNYMAwJ32EKTY7ia4lHDE2nCPVkZBg%2FtIht40IvlFg74%2FpFDPSMx2iMI%2FHCGee4wzoaAzAY6pgHZzKOcm3DQzkcMtP9c9dvIF%2BAi%2BklPCqUINeuNmlx023gX2usaYBrDhHt50OCDqVF0UXjHB2Pp2mTKLIjegy9M9bC56%2Fv7J2qk%2BQah43zyvDFEW4AzdHDy%2Fzy2I2G19azR%2BGR508m2PoT2ywIshqN8bA3QcyR1oauf5lu%2FzrSpksCDLJqYfu5DtlffV7zi%2B1ojuaVVvX2uDGOHDvZIUPGCOmfPEXRS&X-Amz-Signature=f210c1ba5ab010d0c18869c910d55e2fa2ee5acc98a6c77c28eab63dac12456e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTE2NE6%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEqfWapFY4ZptdHVjfQzbhnJzYaMsgu34rgZd3Gvz%2BpQAiBBvt0ACJJRjUY5u3ovCjWXRwYuuWslo%2B493bT9xRS2ESqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNI00jT2ksNkGsjY0KtwDzRJ0AXRB6GKrlL5GzPAMSx11x0dcMiD43LsQJ6K%2BvyHSVcm9ToayPrxCbOg3FiEMJ0r1%2F5O5%2Febrs1vbVsBhF8Z26%2B%2F9LDlgEoVNoZjmF06ElVSuyInRFCPXYFs3j2HIQK0UslWstG5UI6buh%2FzKj0kE5uI85trzBjY5nRgWDAYuBcOTXEtxFKolfvxsa2Fjfd4G2JL4rHlSHnK3Gi0PfoDapEpeV5z%2F%2FV%2B1%2BGB%2FMoqP4NG931Z38d%2B6MXf1bTXgHlkw5uXVlrn%2BuHnHGaeais%2BK0TLOruKhj9gEgd1L%2FotQunuR90LGdeIg1Q3wXOkWsyHhTePXxOEuFaRCeVT4bKHdaumdI6GEFawAxSbh1scsvR0JRU0dy9tQBcMHY1m3pMaZYH47zIbIMuRv7Adgf9hTUjiOVZkujGU%2Buc79XzL2ScfXAKKOEWOtBKEMTiIPPr4CFcBemRIKHX9HLA8%2B73uZcAsCzlDoiinRqoSKaxzREf6lrOdwq8qb33QWyvHJ1JCz6WaG5Tjvm6pa9joXXjsHw6Vk1MzRZFHfU0wQLCoI3d64Vy7ErYd%2Bl9GVHNYMAwJ32EKTY7ia4lHDE2nCPVkZBg%2FtIht40IvlFg74%2FpFDPSMx2iMI%2FHCGee4wzoaAzAY6pgHZzKOcm3DQzkcMtP9c9dvIF%2BAi%2BklPCqUINeuNmlx023gX2usaYBrDhHt50OCDqVF0UXjHB2Pp2mTKLIjegy9M9bC56%2Fv7J2qk%2BQah43zyvDFEW4AzdHDy%2Fzy2I2G19azR%2BGR508m2PoT2ywIshqN8bA3QcyR1oauf5lu%2FzrSpksCDLJqYfu5DtlffV7zi%2B1ojuaVVvX2uDGOHDvZIUPGCOmfPEXRS&X-Amz-Signature=698ef84d9452d97af5f93fabba0a4a1d71e197cb8f27a34761e2012d0a9eefb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTE2NE6%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEqfWapFY4ZptdHVjfQzbhnJzYaMsgu34rgZd3Gvz%2BpQAiBBvt0ACJJRjUY5u3ovCjWXRwYuuWslo%2B493bT9xRS2ESqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNI00jT2ksNkGsjY0KtwDzRJ0AXRB6GKrlL5GzPAMSx11x0dcMiD43LsQJ6K%2BvyHSVcm9ToayPrxCbOg3FiEMJ0r1%2F5O5%2Febrs1vbVsBhF8Z26%2B%2F9LDlgEoVNoZjmF06ElVSuyInRFCPXYFs3j2HIQK0UslWstG5UI6buh%2FzKj0kE5uI85trzBjY5nRgWDAYuBcOTXEtxFKolfvxsa2Fjfd4G2JL4rHlSHnK3Gi0PfoDapEpeV5z%2F%2FV%2B1%2BGB%2FMoqP4NG931Z38d%2B6MXf1bTXgHlkw5uXVlrn%2BuHnHGaeais%2BK0TLOruKhj9gEgd1L%2FotQunuR90LGdeIg1Q3wXOkWsyHhTePXxOEuFaRCeVT4bKHdaumdI6GEFawAxSbh1scsvR0JRU0dy9tQBcMHY1m3pMaZYH47zIbIMuRv7Adgf9hTUjiOVZkujGU%2Buc79XzL2ScfXAKKOEWOtBKEMTiIPPr4CFcBemRIKHX9HLA8%2B73uZcAsCzlDoiinRqoSKaxzREf6lrOdwq8qb33QWyvHJ1JCz6WaG5Tjvm6pa9joXXjsHw6Vk1MzRZFHfU0wQLCoI3d64Vy7ErYd%2Bl9GVHNYMAwJ32EKTY7ia4lHDE2nCPVkZBg%2FtIht40IvlFg74%2FpFDPSMx2iMI%2FHCGee4wzoaAzAY6pgHZzKOcm3DQzkcMtP9c9dvIF%2BAi%2BklPCqUINeuNmlx023gX2usaYBrDhHt50OCDqVF0UXjHB2Pp2mTKLIjegy9M9bC56%2Fv7J2qk%2BQah43zyvDFEW4AzdHDy%2Fzy2I2G19azR%2BGR508m2PoT2ywIshqN8bA3QcyR1oauf5lu%2FzrSpksCDLJqYfu5DtlffV7zi%2B1ojuaVVvX2uDGOHDvZIUPGCOmfPEXRS&X-Amz-Signature=389a5a6e1e4464896f91afb250b7c70370a9ee0543aef16a3fe7de5cc9fbf6dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTE2NE6%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEqfWapFY4ZptdHVjfQzbhnJzYaMsgu34rgZd3Gvz%2BpQAiBBvt0ACJJRjUY5u3ovCjWXRwYuuWslo%2B493bT9xRS2ESqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNI00jT2ksNkGsjY0KtwDzRJ0AXRB6GKrlL5GzPAMSx11x0dcMiD43LsQJ6K%2BvyHSVcm9ToayPrxCbOg3FiEMJ0r1%2F5O5%2Febrs1vbVsBhF8Z26%2B%2F9LDlgEoVNoZjmF06ElVSuyInRFCPXYFs3j2HIQK0UslWstG5UI6buh%2FzKj0kE5uI85trzBjY5nRgWDAYuBcOTXEtxFKolfvxsa2Fjfd4G2JL4rHlSHnK3Gi0PfoDapEpeV5z%2F%2FV%2B1%2BGB%2FMoqP4NG931Z38d%2B6MXf1bTXgHlkw5uXVlrn%2BuHnHGaeais%2BK0TLOruKhj9gEgd1L%2FotQunuR90LGdeIg1Q3wXOkWsyHhTePXxOEuFaRCeVT4bKHdaumdI6GEFawAxSbh1scsvR0JRU0dy9tQBcMHY1m3pMaZYH47zIbIMuRv7Adgf9hTUjiOVZkujGU%2Buc79XzL2ScfXAKKOEWOtBKEMTiIPPr4CFcBemRIKHX9HLA8%2B73uZcAsCzlDoiinRqoSKaxzREf6lrOdwq8qb33QWyvHJ1JCz6WaG5Tjvm6pa9joXXjsHw6Vk1MzRZFHfU0wQLCoI3d64Vy7ErYd%2Bl9GVHNYMAwJ32EKTY7ia4lHDE2nCPVkZBg%2FtIht40IvlFg74%2FpFDPSMx2iMI%2FHCGee4wzoaAzAY6pgHZzKOcm3DQzkcMtP9c9dvIF%2BAi%2BklPCqUINeuNmlx023gX2usaYBrDhHt50OCDqVF0UXjHB2Pp2mTKLIjegy9M9bC56%2Fv7J2qk%2BQah43zyvDFEW4AzdHDy%2Fzy2I2G19azR%2BGR508m2PoT2ywIshqN8bA3QcyR1oauf5lu%2FzrSpksCDLJqYfu5DtlffV7zi%2B1ojuaVVvX2uDGOHDvZIUPGCOmfPEXRS&X-Amz-Signature=cff71cb8ade2aa5e2668bf083d371787ca4a468206cbda54137956b795e93e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


