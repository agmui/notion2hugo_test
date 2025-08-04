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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622GW3FOW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBD5QE1%2BY%2BK9ii03%2ByO4f1xXiFPhTul5iaynaKgNzQOjAiA6VtT326N6wm4iLvd2ywKq7WRrctwJiCo0SsntJ2aRRyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMdcxA2qsuhG2rGQRKKtwD6UEjJE4AkRF%2BatTd0KHBtRcz2Xn4s61fhz8MUjvNSjbxmUaiTGpzHPrgU%2FKKrY5be2NmT4WkCyz2AEKZvksqidQl1K25QKtT8BWp8Vw5GKLZlQW4mlwXcIBvD3KBf3fctkOKHB2oiUGt6wiuo8Mh%2BDMEW9rDDGZmR%2B4fbEOF25vK8RiUNyt43Yeor32kQ50y5ViGA1a0UYjW9QElEUTwxkhJpa21xWETkv8Rb1x8R2WBFWMkeaomdYDT8XZJK5E8v70vgUHmuejEW09keo%2BRnFZDe2FwxFqFN9fFtKa2UwRJNXC8dAa5yiPu7OawoNEFodYvp4W2WIO0XTLIXsNHE4mvFFrq5CfS%2BBMqRYTaJHMyTg3sgZujl%2Fhq9xzjfWTP2vjlkMj689XUzHUKVAuh1oWiWlH0VHVvChR%2BMzhKUfBtQKCb4g25heHeZzghoZiK35WMZyPeu3nKizkeRpov9Wu85rCkp8bwZ%2BV3X5eAmWSEJAX%2FTGLLTlp0pLub6DaVvwmCT91Y24U7m1gOfpv%2FxEc1ItK8h%2BKbwtz3mVmGe7Wv%2FuIjUEJu1yw1DshQL8FCp9FsQKuvriC%2FsYiyLUZJpbQp%2FhM5KbWraRoXkU1NqztuSiqmeuOxzilKJLkwx6fCxAY6pgEyTiEy7DCIJU1OAvJEHl%2BIhZfymT9X5r6TL%2FY0jupBO3ju7GY%2BH6rt65eHalTg7TRFnsScFqlAlDa9jrTaKG98%2FPL2tM4dks8ygZ2OUjcvd3BUIW9pKgZTLKtnYU1aU%2BtwEh707R6ifmu1FL2pMUmK03jDO4ad9VeZpj7cj4GA9YVpqHL6HJ2fJbylBpRvYVqG0MhzlRh3wOUaYr48L3O3XuTmmxgC&X-Amz-Signature=3a6b3cba69222f566fd27df0fda799872bc6567bcd5bc96c3e2cb686612e69ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622GW3FOW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBD5QE1%2BY%2BK9ii03%2ByO4f1xXiFPhTul5iaynaKgNzQOjAiA6VtT326N6wm4iLvd2ywKq7WRrctwJiCo0SsntJ2aRRyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMdcxA2qsuhG2rGQRKKtwD6UEjJE4AkRF%2BatTd0KHBtRcz2Xn4s61fhz8MUjvNSjbxmUaiTGpzHPrgU%2FKKrY5be2NmT4WkCyz2AEKZvksqidQl1K25QKtT8BWp8Vw5GKLZlQW4mlwXcIBvD3KBf3fctkOKHB2oiUGt6wiuo8Mh%2BDMEW9rDDGZmR%2B4fbEOF25vK8RiUNyt43Yeor32kQ50y5ViGA1a0UYjW9QElEUTwxkhJpa21xWETkv8Rb1x8R2WBFWMkeaomdYDT8XZJK5E8v70vgUHmuejEW09keo%2BRnFZDe2FwxFqFN9fFtKa2UwRJNXC8dAa5yiPu7OawoNEFodYvp4W2WIO0XTLIXsNHE4mvFFrq5CfS%2BBMqRYTaJHMyTg3sgZujl%2Fhq9xzjfWTP2vjlkMj689XUzHUKVAuh1oWiWlH0VHVvChR%2BMzhKUfBtQKCb4g25heHeZzghoZiK35WMZyPeu3nKizkeRpov9Wu85rCkp8bwZ%2BV3X5eAmWSEJAX%2FTGLLTlp0pLub6DaVvwmCT91Y24U7m1gOfpv%2FxEc1ItK8h%2BKbwtz3mVmGe7Wv%2FuIjUEJu1yw1DshQL8FCp9FsQKuvriC%2FsYiyLUZJpbQp%2FhM5KbWraRoXkU1NqztuSiqmeuOxzilKJLkwx6fCxAY6pgEyTiEy7DCIJU1OAvJEHl%2BIhZfymT9X5r6TL%2FY0jupBO3ju7GY%2BH6rt65eHalTg7TRFnsScFqlAlDa9jrTaKG98%2FPL2tM4dks8ygZ2OUjcvd3BUIW9pKgZTLKtnYU1aU%2BtwEh707R6ifmu1FL2pMUmK03jDO4ad9VeZpj7cj4GA9YVpqHL6HJ2fJbylBpRvYVqG0MhzlRh3wOUaYr48L3O3XuTmmxgC&X-Amz-Signature=56c2f1e5ffd772d0ef5616b3a1016656a2d90657e9aa2a5e70d37bc732d6c290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622GW3FOW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBD5QE1%2BY%2BK9ii03%2ByO4f1xXiFPhTul5iaynaKgNzQOjAiA6VtT326N6wm4iLvd2ywKq7WRrctwJiCo0SsntJ2aRRyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMdcxA2qsuhG2rGQRKKtwD6UEjJE4AkRF%2BatTd0KHBtRcz2Xn4s61fhz8MUjvNSjbxmUaiTGpzHPrgU%2FKKrY5be2NmT4WkCyz2AEKZvksqidQl1K25QKtT8BWp8Vw5GKLZlQW4mlwXcIBvD3KBf3fctkOKHB2oiUGt6wiuo8Mh%2BDMEW9rDDGZmR%2B4fbEOF25vK8RiUNyt43Yeor32kQ50y5ViGA1a0UYjW9QElEUTwxkhJpa21xWETkv8Rb1x8R2WBFWMkeaomdYDT8XZJK5E8v70vgUHmuejEW09keo%2BRnFZDe2FwxFqFN9fFtKa2UwRJNXC8dAa5yiPu7OawoNEFodYvp4W2WIO0XTLIXsNHE4mvFFrq5CfS%2BBMqRYTaJHMyTg3sgZujl%2Fhq9xzjfWTP2vjlkMj689XUzHUKVAuh1oWiWlH0VHVvChR%2BMzhKUfBtQKCb4g25heHeZzghoZiK35WMZyPeu3nKizkeRpov9Wu85rCkp8bwZ%2BV3X5eAmWSEJAX%2FTGLLTlp0pLub6DaVvwmCT91Y24U7m1gOfpv%2FxEc1ItK8h%2BKbwtz3mVmGe7Wv%2FuIjUEJu1yw1DshQL8FCp9FsQKuvriC%2FsYiyLUZJpbQp%2FhM5KbWraRoXkU1NqztuSiqmeuOxzilKJLkwx6fCxAY6pgEyTiEy7DCIJU1OAvJEHl%2BIhZfymT9X5r6TL%2FY0jupBO3ju7GY%2BH6rt65eHalTg7TRFnsScFqlAlDa9jrTaKG98%2FPL2tM4dks8ygZ2OUjcvd3BUIW9pKgZTLKtnYU1aU%2BtwEh707R6ifmu1FL2pMUmK03jDO4ad9VeZpj7cj4GA9YVpqHL6HJ2fJbylBpRvYVqG0MhzlRh3wOUaYr48L3O3XuTmmxgC&X-Amz-Signature=0b5e0aeecebd715b761512f7baec4d2c70606338509286b992db787cb090ffcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622GW3FOW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBD5QE1%2BY%2BK9ii03%2ByO4f1xXiFPhTul5iaynaKgNzQOjAiA6VtT326N6wm4iLvd2ywKq7WRrctwJiCo0SsntJ2aRRyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMdcxA2qsuhG2rGQRKKtwD6UEjJE4AkRF%2BatTd0KHBtRcz2Xn4s61fhz8MUjvNSjbxmUaiTGpzHPrgU%2FKKrY5be2NmT4WkCyz2AEKZvksqidQl1K25QKtT8BWp8Vw5GKLZlQW4mlwXcIBvD3KBf3fctkOKHB2oiUGt6wiuo8Mh%2BDMEW9rDDGZmR%2B4fbEOF25vK8RiUNyt43Yeor32kQ50y5ViGA1a0UYjW9QElEUTwxkhJpa21xWETkv8Rb1x8R2WBFWMkeaomdYDT8XZJK5E8v70vgUHmuejEW09keo%2BRnFZDe2FwxFqFN9fFtKa2UwRJNXC8dAa5yiPu7OawoNEFodYvp4W2WIO0XTLIXsNHE4mvFFrq5CfS%2BBMqRYTaJHMyTg3sgZujl%2Fhq9xzjfWTP2vjlkMj689XUzHUKVAuh1oWiWlH0VHVvChR%2BMzhKUfBtQKCb4g25heHeZzghoZiK35WMZyPeu3nKizkeRpov9Wu85rCkp8bwZ%2BV3X5eAmWSEJAX%2FTGLLTlp0pLub6DaVvwmCT91Y24U7m1gOfpv%2FxEc1ItK8h%2BKbwtz3mVmGe7Wv%2FuIjUEJu1yw1DshQL8FCp9FsQKuvriC%2FsYiyLUZJpbQp%2FhM5KbWraRoXkU1NqztuSiqmeuOxzilKJLkwx6fCxAY6pgEyTiEy7DCIJU1OAvJEHl%2BIhZfymT9X5r6TL%2FY0jupBO3ju7GY%2BH6rt65eHalTg7TRFnsScFqlAlDa9jrTaKG98%2FPL2tM4dks8ygZ2OUjcvd3BUIW9pKgZTLKtnYU1aU%2BtwEh707R6ifmu1FL2pMUmK03jDO4ad9VeZpj7cj4GA9YVpqHL6HJ2fJbylBpRvYVqG0MhzlRh3wOUaYr48L3O3XuTmmxgC&X-Amz-Signature=5b94a61b3cbc1809c804f05a6bb2bbaa50fb0306301924b1cc6c07d585e83a60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZOI3J6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAaZ9p4j06yGqtdNFKOplTh0dXj2WbxgSPHhIW23%2FVvXAiBB%2F7WNxpk%2BRUKQATrnlz2BKVKL1CSGJ6bJh1ebQe%2FmsSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMyyMuJixIVsWuiaPKKtwDlJ3R2vAmxWcSbm3Yy6nV6fLAUQovSQHPc3DfLOnplXB1s5DIbd7KEP4%2FcH4JCwZgGryV%2F8hzNbuaOx7W%2FrkyqlhnuNZ0SrloJkIjo5HeFAvD%2BsfFDTEwBg39hBj79Y5HDOGoOtZuGnIu9hhyuvQlM18D5Z07CC1%2B4PbysLF%2BFjoe04Jtzyz9A5YH9zuyHfiX87M7lvDGaimst0MNowQHg7Yz1xlLJq6k44SWtKNz%2BdUrjTlZaVWs4Z2UoEUyyTgxdqrKjV6ns6jjgZAJ1md%2Fve9BRTnScJy1%2B52friOyYW%2BY%2FujUZizorlG%2FiAoGWAoHZNmx5pZSsR8MNRByB%2FbN1mPa8Hv4r%2BMhh6OaopAkEF0tbPqy6q99rN3J9ixf8%2F43IUjWQaROekRuaCE6jQz463JSLwPCSqZ%2FDeIYYg8EIZvLOViPD4KAjwsdBt%2Fa0R89P8beT4g5xbVrokUGHu3V2dcGMwKCKwKHl2QGBkXGR7hTZ%2F0weYrR%2FtibbBaPJV9%2FqFpUfZGUo1%2F%2FhlMbHiBNK3E3471eOYv1ZTcgeylgCfr7QX1Pm0m%2FpbFebHMZ2c%2BRIedsAXChyKWdgnVTU8xGa0BqNBLcNvsnqz12wNUGb4j6VGjRcEh%2Bo8AjSyAwpKbCxAY6pgExRCo%2B%2FbKrORnAX4DcTCkwDRZEZj95mVZslx2yfStLLQSDEw%2Be%2Bc8M84I7C3rfgz5JTkEM8BGN1Vkb5cu6U2UkzwvDJj0CtHBQaXgzgBNdPkHIILaSBeOy05URQkPFr%2BBIzUOQCN4XjOcR86gN3k61KMfdntmQKilX54MTWWzg%2BnzXp1phUI4GJnzqj7aU%2F5VS7Usby%2BUrrI3Q8BVY3WwVJW8fiXqs&X-Amz-Signature=c270551fb59e1c6e5ed464cdb912410e350c447a93eaf8da028f01572dbfe0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622GW3FOW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBD5QE1%2BY%2BK9ii03%2ByO4f1xXiFPhTul5iaynaKgNzQOjAiA6VtT326N6wm4iLvd2ywKq7WRrctwJiCo0SsntJ2aRRyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMdcxA2qsuhG2rGQRKKtwD6UEjJE4AkRF%2BatTd0KHBtRcz2Xn4s61fhz8MUjvNSjbxmUaiTGpzHPrgU%2FKKrY5be2NmT4WkCyz2AEKZvksqidQl1K25QKtT8BWp8Vw5GKLZlQW4mlwXcIBvD3KBf3fctkOKHB2oiUGt6wiuo8Mh%2BDMEW9rDDGZmR%2B4fbEOF25vK8RiUNyt43Yeor32kQ50y5ViGA1a0UYjW9QElEUTwxkhJpa21xWETkv8Rb1x8R2WBFWMkeaomdYDT8XZJK5E8v70vgUHmuejEW09keo%2BRnFZDe2FwxFqFN9fFtKa2UwRJNXC8dAa5yiPu7OawoNEFodYvp4W2WIO0XTLIXsNHE4mvFFrq5CfS%2BBMqRYTaJHMyTg3sgZujl%2Fhq9xzjfWTP2vjlkMj689XUzHUKVAuh1oWiWlH0VHVvChR%2BMzhKUfBtQKCb4g25heHeZzghoZiK35WMZyPeu3nKizkeRpov9Wu85rCkp8bwZ%2BV3X5eAmWSEJAX%2FTGLLTlp0pLub6DaVvwmCT91Y24U7m1gOfpv%2FxEc1ItK8h%2BKbwtz3mVmGe7Wv%2FuIjUEJu1yw1DshQL8FCp9FsQKuvriC%2FsYiyLUZJpbQp%2FhM5KbWraRoXkU1NqztuSiqmeuOxzilKJLkwx6fCxAY6pgEyTiEy7DCIJU1OAvJEHl%2BIhZfymT9X5r6TL%2FY0jupBO3ju7GY%2BH6rt65eHalTg7TRFnsScFqlAlDa9jrTaKG98%2FPL2tM4dks8ygZ2OUjcvd3BUIW9pKgZTLKtnYU1aU%2BtwEh707R6ifmu1FL2pMUmK03jDO4ad9VeZpj7cj4GA9YVpqHL6HJ2fJbylBpRvYVqG0MhzlRh3wOUaYr48L3O3XuTmmxgC&X-Amz-Signature=89aa4e6fcf33b6142cdf3d292e33c2baf6d34385d2403fcda74372c482bf4d9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622GW3FOW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBD5QE1%2BY%2BK9ii03%2ByO4f1xXiFPhTul5iaynaKgNzQOjAiA6VtT326N6wm4iLvd2ywKq7WRrctwJiCo0SsntJ2aRRyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMdcxA2qsuhG2rGQRKKtwD6UEjJE4AkRF%2BatTd0KHBtRcz2Xn4s61fhz8MUjvNSjbxmUaiTGpzHPrgU%2FKKrY5be2NmT4WkCyz2AEKZvksqidQl1K25QKtT8BWp8Vw5GKLZlQW4mlwXcIBvD3KBf3fctkOKHB2oiUGt6wiuo8Mh%2BDMEW9rDDGZmR%2B4fbEOF25vK8RiUNyt43Yeor32kQ50y5ViGA1a0UYjW9QElEUTwxkhJpa21xWETkv8Rb1x8R2WBFWMkeaomdYDT8XZJK5E8v70vgUHmuejEW09keo%2BRnFZDe2FwxFqFN9fFtKa2UwRJNXC8dAa5yiPu7OawoNEFodYvp4W2WIO0XTLIXsNHE4mvFFrq5CfS%2BBMqRYTaJHMyTg3sgZujl%2Fhq9xzjfWTP2vjlkMj689XUzHUKVAuh1oWiWlH0VHVvChR%2BMzhKUfBtQKCb4g25heHeZzghoZiK35WMZyPeu3nKizkeRpov9Wu85rCkp8bwZ%2BV3X5eAmWSEJAX%2FTGLLTlp0pLub6DaVvwmCT91Y24U7m1gOfpv%2FxEc1ItK8h%2BKbwtz3mVmGe7Wv%2FuIjUEJu1yw1DshQL8FCp9FsQKuvriC%2FsYiyLUZJpbQp%2FhM5KbWraRoXkU1NqztuSiqmeuOxzilKJLkwx6fCxAY6pgEyTiEy7DCIJU1OAvJEHl%2BIhZfymT9X5r6TL%2FY0jupBO3ju7GY%2BH6rt65eHalTg7TRFnsScFqlAlDa9jrTaKG98%2FPL2tM4dks8ygZ2OUjcvd3BUIW9pKgZTLKtnYU1aU%2BtwEh707R6ifmu1FL2pMUmK03jDO4ad9VeZpj7cj4GA9YVpqHL6HJ2fJbylBpRvYVqG0MhzlRh3wOUaYr48L3O3XuTmmxgC&X-Amz-Signature=ebca44507548bdf89e5169c97d73087f3acc317d5264633118bec88ba9c7626a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622GW3FOW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBD5QE1%2BY%2BK9ii03%2ByO4f1xXiFPhTul5iaynaKgNzQOjAiA6VtT326N6wm4iLvd2ywKq7WRrctwJiCo0SsntJ2aRRyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMdcxA2qsuhG2rGQRKKtwD6UEjJE4AkRF%2BatTd0KHBtRcz2Xn4s61fhz8MUjvNSjbxmUaiTGpzHPrgU%2FKKrY5be2NmT4WkCyz2AEKZvksqidQl1K25QKtT8BWp8Vw5GKLZlQW4mlwXcIBvD3KBf3fctkOKHB2oiUGt6wiuo8Mh%2BDMEW9rDDGZmR%2B4fbEOF25vK8RiUNyt43Yeor32kQ50y5ViGA1a0UYjW9QElEUTwxkhJpa21xWETkv8Rb1x8R2WBFWMkeaomdYDT8XZJK5E8v70vgUHmuejEW09keo%2BRnFZDe2FwxFqFN9fFtKa2UwRJNXC8dAa5yiPu7OawoNEFodYvp4W2WIO0XTLIXsNHE4mvFFrq5CfS%2BBMqRYTaJHMyTg3sgZujl%2Fhq9xzjfWTP2vjlkMj689XUzHUKVAuh1oWiWlH0VHVvChR%2BMzhKUfBtQKCb4g25heHeZzghoZiK35WMZyPeu3nKizkeRpov9Wu85rCkp8bwZ%2BV3X5eAmWSEJAX%2FTGLLTlp0pLub6DaVvwmCT91Y24U7m1gOfpv%2FxEc1ItK8h%2BKbwtz3mVmGe7Wv%2FuIjUEJu1yw1DshQL8FCp9FsQKuvriC%2FsYiyLUZJpbQp%2FhM5KbWraRoXkU1NqztuSiqmeuOxzilKJLkwx6fCxAY6pgEyTiEy7DCIJU1OAvJEHl%2BIhZfymT9X5r6TL%2FY0jupBO3ju7GY%2BH6rt65eHalTg7TRFnsScFqlAlDa9jrTaKG98%2FPL2tM4dks8ygZ2OUjcvd3BUIW9pKgZTLKtnYU1aU%2BtwEh707R6ifmu1FL2pMUmK03jDO4ad9VeZpj7cj4GA9YVpqHL6HJ2fJbylBpRvYVqG0MhzlRh3wOUaYr48L3O3XuTmmxgC&X-Amz-Signature=82aead6542691c2f64c3ca190e108b7d6eacb20d5b0fb73266166e9774511daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622GW3FOW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBD5QE1%2BY%2BK9ii03%2ByO4f1xXiFPhTul5iaynaKgNzQOjAiA6VtT326N6wm4iLvd2ywKq7WRrctwJiCo0SsntJ2aRRyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMdcxA2qsuhG2rGQRKKtwD6UEjJE4AkRF%2BatTd0KHBtRcz2Xn4s61fhz8MUjvNSjbxmUaiTGpzHPrgU%2FKKrY5be2NmT4WkCyz2AEKZvksqidQl1K25QKtT8BWp8Vw5GKLZlQW4mlwXcIBvD3KBf3fctkOKHB2oiUGt6wiuo8Mh%2BDMEW9rDDGZmR%2B4fbEOF25vK8RiUNyt43Yeor32kQ50y5ViGA1a0UYjW9QElEUTwxkhJpa21xWETkv8Rb1x8R2WBFWMkeaomdYDT8XZJK5E8v70vgUHmuejEW09keo%2BRnFZDe2FwxFqFN9fFtKa2UwRJNXC8dAa5yiPu7OawoNEFodYvp4W2WIO0XTLIXsNHE4mvFFrq5CfS%2BBMqRYTaJHMyTg3sgZujl%2Fhq9xzjfWTP2vjlkMj689XUzHUKVAuh1oWiWlH0VHVvChR%2BMzhKUfBtQKCb4g25heHeZzghoZiK35WMZyPeu3nKizkeRpov9Wu85rCkp8bwZ%2BV3X5eAmWSEJAX%2FTGLLTlp0pLub6DaVvwmCT91Y24U7m1gOfpv%2FxEc1ItK8h%2BKbwtz3mVmGe7Wv%2FuIjUEJu1yw1DshQL8FCp9FsQKuvriC%2FsYiyLUZJpbQp%2FhM5KbWraRoXkU1NqztuSiqmeuOxzilKJLkwx6fCxAY6pgEyTiEy7DCIJU1OAvJEHl%2BIhZfymT9X5r6TL%2FY0jupBO3ju7GY%2BH6rt65eHalTg7TRFnsScFqlAlDa9jrTaKG98%2FPL2tM4dks8ygZ2OUjcvd3BUIW9pKgZTLKtnYU1aU%2BtwEh707R6ifmu1FL2pMUmK03jDO4ad9VeZpj7cj4GA9YVpqHL6HJ2fJbylBpRvYVqG0MhzlRh3wOUaYr48L3O3XuTmmxgC&X-Amz-Signature=fd243da28fad154a40420a79d01f49b357dc284c04cf81ce087147be0e15d901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622GW3FOW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBD5QE1%2BY%2BK9ii03%2ByO4f1xXiFPhTul5iaynaKgNzQOjAiA6VtT326N6wm4iLvd2ywKq7WRrctwJiCo0SsntJ2aRRyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMdcxA2qsuhG2rGQRKKtwD6UEjJE4AkRF%2BatTd0KHBtRcz2Xn4s61fhz8MUjvNSjbxmUaiTGpzHPrgU%2FKKrY5be2NmT4WkCyz2AEKZvksqidQl1K25QKtT8BWp8Vw5GKLZlQW4mlwXcIBvD3KBf3fctkOKHB2oiUGt6wiuo8Mh%2BDMEW9rDDGZmR%2B4fbEOF25vK8RiUNyt43Yeor32kQ50y5ViGA1a0UYjW9QElEUTwxkhJpa21xWETkv8Rb1x8R2WBFWMkeaomdYDT8XZJK5E8v70vgUHmuejEW09keo%2BRnFZDe2FwxFqFN9fFtKa2UwRJNXC8dAa5yiPu7OawoNEFodYvp4W2WIO0XTLIXsNHE4mvFFrq5CfS%2BBMqRYTaJHMyTg3sgZujl%2Fhq9xzjfWTP2vjlkMj689XUzHUKVAuh1oWiWlH0VHVvChR%2BMzhKUfBtQKCb4g25heHeZzghoZiK35WMZyPeu3nKizkeRpov9Wu85rCkp8bwZ%2BV3X5eAmWSEJAX%2FTGLLTlp0pLub6DaVvwmCT91Y24U7m1gOfpv%2FxEc1ItK8h%2BKbwtz3mVmGe7Wv%2FuIjUEJu1yw1DshQL8FCp9FsQKuvriC%2FsYiyLUZJpbQp%2FhM5KbWraRoXkU1NqztuSiqmeuOxzilKJLkwx6fCxAY6pgEyTiEy7DCIJU1OAvJEHl%2BIhZfymT9X5r6TL%2FY0jupBO3ju7GY%2BH6rt65eHalTg7TRFnsScFqlAlDa9jrTaKG98%2FPL2tM4dks8ygZ2OUjcvd3BUIW9pKgZTLKtnYU1aU%2BtwEh707R6ifmu1FL2pMUmK03jDO4ad9VeZpj7cj4GA9YVpqHL6HJ2fJbylBpRvYVqG0MhzlRh3wOUaYr48L3O3XuTmmxgC&X-Amz-Signature=5eac4decc3b92e3aa3a1ea0bd78de5d8f26b590f230bb5cfc14b62119c67d9b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622GW3FOW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBD5QE1%2BY%2BK9ii03%2ByO4f1xXiFPhTul5iaynaKgNzQOjAiA6VtT326N6wm4iLvd2ywKq7WRrctwJiCo0SsntJ2aRRyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMdcxA2qsuhG2rGQRKKtwD6UEjJE4AkRF%2BatTd0KHBtRcz2Xn4s61fhz8MUjvNSjbxmUaiTGpzHPrgU%2FKKrY5be2NmT4WkCyz2AEKZvksqidQl1K25QKtT8BWp8Vw5GKLZlQW4mlwXcIBvD3KBf3fctkOKHB2oiUGt6wiuo8Mh%2BDMEW9rDDGZmR%2B4fbEOF25vK8RiUNyt43Yeor32kQ50y5ViGA1a0UYjW9QElEUTwxkhJpa21xWETkv8Rb1x8R2WBFWMkeaomdYDT8XZJK5E8v70vgUHmuejEW09keo%2BRnFZDe2FwxFqFN9fFtKa2UwRJNXC8dAa5yiPu7OawoNEFodYvp4W2WIO0XTLIXsNHE4mvFFrq5CfS%2BBMqRYTaJHMyTg3sgZujl%2Fhq9xzjfWTP2vjlkMj689XUzHUKVAuh1oWiWlH0VHVvChR%2BMzhKUfBtQKCb4g25heHeZzghoZiK35WMZyPeu3nKizkeRpov9Wu85rCkp8bwZ%2BV3X5eAmWSEJAX%2FTGLLTlp0pLub6DaVvwmCT91Y24U7m1gOfpv%2FxEc1ItK8h%2BKbwtz3mVmGe7Wv%2FuIjUEJu1yw1DshQL8FCp9FsQKuvriC%2FsYiyLUZJpbQp%2FhM5KbWraRoXkU1NqztuSiqmeuOxzilKJLkwx6fCxAY6pgEyTiEy7DCIJU1OAvJEHl%2BIhZfymT9X5r6TL%2FY0jupBO3ju7GY%2BH6rt65eHalTg7TRFnsScFqlAlDa9jrTaKG98%2FPL2tM4dks8ygZ2OUjcvd3BUIW9pKgZTLKtnYU1aU%2BtwEh707R6ifmu1FL2pMUmK03jDO4ad9VeZpj7cj4GA9YVpqHL6HJ2fJbylBpRvYVqG0MhzlRh3wOUaYr48L3O3XuTmmxgC&X-Amz-Signature=c0080a645d55d22014ef93568ab228f01f21c3c822e7c11849f41fc4dd8fb71e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
