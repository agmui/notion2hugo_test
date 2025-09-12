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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB5MILF%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzbJdAflzoDpoLi2Q9RV%2BQDi9i0KihBg%2BnBBKOkxM2iAiBL0mnEct83nV%2BN2YRQ%2BZPQnbSOHZR3R%2BGcT%2BwctGvfkCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM1B3SAcPVXBSf%2F4IEKtwDZb6KY89Vuchdk3EHkN19BUlV93aRb%2FJPmp76UuBAVDdFeEXu2APws%2BQukJSi1PF1b5mepRbjVwkoxm6i6IaKMyok1T5XIKisfEvXW9VgnUQt%2FOewJ3d2HVFBjObGCeCafTlPF4CegfwYXmZevvh6gM91ZPPYvMe60Uy8yo18oMpw%2BIxPGb514IjtBjnFmkkuWs9r%2FJ9GpVv8XP1BTrplNusxgloLE50dgq%2FMUUQOIDZvu%2BVkZUpeL2w8vPqmtEs5FDBSe2W5euaEj1flVpg1ldT%2BhqNzfEOfX8ZD6%2BuHAIdNxj97b2jB1OL5WJYxR%2BgnmDRkBzTWDyzCBtKJEbaDaVO%2FsBKbbrp%2F2tUpBntVbgqkyFE9PPJqUMqqy11Rg1RDrzm%2B7Cg9nMNBUKS%2F37SfE2OOr6f70Ghrn88h9Q4qQSiFkcKZLDw0w%2B3BKCA%2BJ2gfW3ta7a7iZlpqLXnt24U07bao7Y9YRlPMFmWeS7vvbHzmjakPbPhy92VbFePJT7EHgpK9fNvMSsjY1y0TNERfcCAAVBIha6HIVqQFPlDOJbEnatPIa%2BBC9q%2FJ5TggINdQQqL1dYzXurrzkD3Jgp6p%2FLeOAAmPjks86%2BMb6HpIAZOg6ltdhKobqDazNrcwwtCNxgY6pgHLOeykWQ%2Bfq%2F6DlUQvoRuuQkSwuCBMQSVVhUd1Ri2hw6rUBaTFgvoO1YPB1CTgUhoGxc3ch2UJR9Qbsvsp1XCtPwV%2F35xexMIOQ4ppcwjomaUwZsQ8JhApjLedBazMlaH4m9ZFHZ%2B%2B8k8SYdTEz9wly4b3su7PXXKVqngkUid%2F%2FHqP%2Bm9cv948onkrNJyFteOsR67g8fNWWcS0yWrlk83nXRs59137&X-Amz-Signature=ee8a190fea438583d3673037677e71fd5e9a6021043b4f896275384c0b473d34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB5MILF%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzbJdAflzoDpoLi2Q9RV%2BQDi9i0KihBg%2BnBBKOkxM2iAiBL0mnEct83nV%2BN2YRQ%2BZPQnbSOHZR3R%2BGcT%2BwctGvfkCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM1B3SAcPVXBSf%2F4IEKtwDZb6KY89Vuchdk3EHkN19BUlV93aRb%2FJPmp76UuBAVDdFeEXu2APws%2BQukJSi1PF1b5mepRbjVwkoxm6i6IaKMyok1T5XIKisfEvXW9VgnUQt%2FOewJ3d2HVFBjObGCeCafTlPF4CegfwYXmZevvh6gM91ZPPYvMe60Uy8yo18oMpw%2BIxPGb514IjtBjnFmkkuWs9r%2FJ9GpVv8XP1BTrplNusxgloLE50dgq%2FMUUQOIDZvu%2BVkZUpeL2w8vPqmtEs5FDBSe2W5euaEj1flVpg1ldT%2BhqNzfEOfX8ZD6%2BuHAIdNxj97b2jB1OL5WJYxR%2BgnmDRkBzTWDyzCBtKJEbaDaVO%2FsBKbbrp%2F2tUpBntVbgqkyFE9PPJqUMqqy11Rg1RDrzm%2B7Cg9nMNBUKS%2F37SfE2OOr6f70Ghrn88h9Q4qQSiFkcKZLDw0w%2B3BKCA%2BJ2gfW3ta7a7iZlpqLXnt24U07bao7Y9YRlPMFmWeS7vvbHzmjakPbPhy92VbFePJT7EHgpK9fNvMSsjY1y0TNERfcCAAVBIha6HIVqQFPlDOJbEnatPIa%2BBC9q%2FJ5TggINdQQqL1dYzXurrzkD3Jgp6p%2FLeOAAmPjks86%2BMb6HpIAZOg6ltdhKobqDazNrcwwtCNxgY6pgHLOeykWQ%2Bfq%2F6DlUQvoRuuQkSwuCBMQSVVhUd1Ri2hw6rUBaTFgvoO1YPB1CTgUhoGxc3ch2UJR9Qbsvsp1XCtPwV%2F35xexMIOQ4ppcwjomaUwZsQ8JhApjLedBazMlaH4m9ZFHZ%2B%2B8k8SYdTEz9wly4b3su7PXXKVqngkUid%2F%2FHqP%2Bm9cv948onkrNJyFteOsR67g8fNWWcS0yWrlk83nXRs59137&X-Amz-Signature=13e1577929ffae757b6855e87940139c6f0f4ed8f200b1800bb3b317c9daa40c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB5MILF%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzbJdAflzoDpoLi2Q9RV%2BQDi9i0KihBg%2BnBBKOkxM2iAiBL0mnEct83nV%2BN2YRQ%2BZPQnbSOHZR3R%2BGcT%2BwctGvfkCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM1B3SAcPVXBSf%2F4IEKtwDZb6KY89Vuchdk3EHkN19BUlV93aRb%2FJPmp76UuBAVDdFeEXu2APws%2BQukJSi1PF1b5mepRbjVwkoxm6i6IaKMyok1T5XIKisfEvXW9VgnUQt%2FOewJ3d2HVFBjObGCeCafTlPF4CegfwYXmZevvh6gM91ZPPYvMe60Uy8yo18oMpw%2BIxPGb514IjtBjnFmkkuWs9r%2FJ9GpVv8XP1BTrplNusxgloLE50dgq%2FMUUQOIDZvu%2BVkZUpeL2w8vPqmtEs5FDBSe2W5euaEj1flVpg1ldT%2BhqNzfEOfX8ZD6%2BuHAIdNxj97b2jB1OL5WJYxR%2BgnmDRkBzTWDyzCBtKJEbaDaVO%2FsBKbbrp%2F2tUpBntVbgqkyFE9PPJqUMqqy11Rg1RDrzm%2B7Cg9nMNBUKS%2F37SfE2OOr6f70Ghrn88h9Q4qQSiFkcKZLDw0w%2B3BKCA%2BJ2gfW3ta7a7iZlpqLXnt24U07bao7Y9YRlPMFmWeS7vvbHzmjakPbPhy92VbFePJT7EHgpK9fNvMSsjY1y0TNERfcCAAVBIha6HIVqQFPlDOJbEnatPIa%2BBC9q%2FJ5TggINdQQqL1dYzXurrzkD3Jgp6p%2FLeOAAmPjks86%2BMb6HpIAZOg6ltdhKobqDazNrcwwtCNxgY6pgHLOeykWQ%2Bfq%2F6DlUQvoRuuQkSwuCBMQSVVhUd1Ri2hw6rUBaTFgvoO1YPB1CTgUhoGxc3ch2UJR9Qbsvsp1XCtPwV%2F35xexMIOQ4ppcwjomaUwZsQ8JhApjLedBazMlaH4m9ZFHZ%2B%2B8k8SYdTEz9wly4b3su7PXXKVqngkUid%2F%2FHqP%2Bm9cv948onkrNJyFteOsR67g8fNWWcS0yWrlk83nXRs59137&X-Amz-Signature=6a3025a820fd72754145a6de06691410588eb70eaab49c3f0aa49c7ac0483c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB5MILF%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzbJdAflzoDpoLi2Q9RV%2BQDi9i0KihBg%2BnBBKOkxM2iAiBL0mnEct83nV%2BN2YRQ%2BZPQnbSOHZR3R%2BGcT%2BwctGvfkCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM1B3SAcPVXBSf%2F4IEKtwDZb6KY89Vuchdk3EHkN19BUlV93aRb%2FJPmp76UuBAVDdFeEXu2APws%2BQukJSi1PF1b5mepRbjVwkoxm6i6IaKMyok1T5XIKisfEvXW9VgnUQt%2FOewJ3d2HVFBjObGCeCafTlPF4CegfwYXmZevvh6gM91ZPPYvMe60Uy8yo18oMpw%2BIxPGb514IjtBjnFmkkuWs9r%2FJ9GpVv8XP1BTrplNusxgloLE50dgq%2FMUUQOIDZvu%2BVkZUpeL2w8vPqmtEs5FDBSe2W5euaEj1flVpg1ldT%2BhqNzfEOfX8ZD6%2BuHAIdNxj97b2jB1OL5WJYxR%2BgnmDRkBzTWDyzCBtKJEbaDaVO%2FsBKbbrp%2F2tUpBntVbgqkyFE9PPJqUMqqy11Rg1RDrzm%2B7Cg9nMNBUKS%2F37SfE2OOr6f70Ghrn88h9Q4qQSiFkcKZLDw0w%2B3BKCA%2BJ2gfW3ta7a7iZlpqLXnt24U07bao7Y9YRlPMFmWeS7vvbHzmjakPbPhy92VbFePJT7EHgpK9fNvMSsjY1y0TNERfcCAAVBIha6HIVqQFPlDOJbEnatPIa%2BBC9q%2FJ5TggINdQQqL1dYzXurrzkD3Jgp6p%2FLeOAAmPjks86%2BMb6HpIAZOg6ltdhKobqDazNrcwwtCNxgY6pgHLOeykWQ%2Bfq%2F6DlUQvoRuuQkSwuCBMQSVVhUd1Ri2hw6rUBaTFgvoO1YPB1CTgUhoGxc3ch2UJR9Qbsvsp1XCtPwV%2F35xexMIOQ4ppcwjomaUwZsQ8JhApjLedBazMlaH4m9ZFHZ%2B%2B8k8SYdTEz9wly4b3su7PXXKVqngkUid%2F%2FHqP%2Bm9cv948onkrNJyFteOsR67g8fNWWcS0yWrlk83nXRs59137&X-Amz-Signature=14bd8ad74ecddced7f8e98ff64713f12e91a6e621fc7e09e6e420b5e02b8dbdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCW6I6JC%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC43OJ1e7VQceQI2YOxCNtJPf47PPH1g9FjG36CpbpegIgJhVfhchUw8kwaZcoodgIo6B3FLgWVIG6criqVt74swAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDNhKyuWX7o21TnVhcSrcAwBzxVAwQXowY7slNPP4R7oCYpWuX%2Foyre2Ct1yxg9w%2Bt0cfrsmwhAMC97z4%2BUE8cgWT%2BGo0Z7mTR4dfYvw8x461rZGXWyCd4qKpLKkSZgMIR7J0F8mIBbab7MVFrINyVAaw4hO3V5b5fYrC7f%2BQ22hGv9iWUUoA2WKgYpSwaQJgYU%2BffgahRj%2B%2FXkzQS6hm%2FMeuKwV9ph30%2FbCco2vI8W5xYWbjaB5mfRwFfBgODdcBgSdUoehBT6FiYnbL28aPbb5kzo1OziY%2BAM5zxn7%2BXpJEPko3Asyv%2FVXwfS%2F73%2BXYEJwaKz3UgA4NcoXtCn5bHbXEl7NzWQzsm%2Fhtf%2B1SnGAQ%2BrRIJ%2F1X%2FaSO2zNzXGB6RBNjYPD8ADuAP9LJ%2FVVDD8iI%2FvY63hRsI4PP51b9qy2m%2FpyVS67JqQ5rJ%2F1BcidyOhxWvLmgvGwRkU8YlaW2AM93Nq7g684yByUUcxEnF6rpawCeRVoJZLNInKAo8WarJNiFyUAnqafllNPOcV0htubYo4QsQFwyosFntWAVdw0nm4ITdl59vt%2Fl9J1oq9t%2FM4tQv2vfAlYhHYG%2Bq6Dvw0WnL0Fn%2FU8%2FywkrSSd3E0fazLE%2B6RPI6FB05cC1T7SwVjAem9K5OlkO5WVfMLXRjcYGOqUBSkyTN1gde5Efg5OF2015xzzlcXcw3evp7PJN%2FKmRL9CcGL%2BdclEf%2F3eK0a67N00zsyV1VrqRn2OcxKXB8kLowPPYjAE4B%2FZPF4Ig06bmA32%2BaQKIlvR5R%2FDtbvh8M40EeF27X9%2Ffa75BZSvFkHH2mbLxlXLVB7xTXyhRdw1Ylio9AyDZ4liVo60qzORMI531ri8V%2BrTdOQb%2FOsVK8FUq7JMk%2FBB5&X-Amz-Signature=b8c515434c201bbaf2ce2ec15a63ef13879158a3e98fecd423e2dafeca38fa52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB5MILF%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzbJdAflzoDpoLi2Q9RV%2BQDi9i0KihBg%2BnBBKOkxM2iAiBL0mnEct83nV%2BN2YRQ%2BZPQnbSOHZR3R%2BGcT%2BwctGvfkCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM1B3SAcPVXBSf%2F4IEKtwDZb6KY89Vuchdk3EHkN19BUlV93aRb%2FJPmp76UuBAVDdFeEXu2APws%2BQukJSi1PF1b5mepRbjVwkoxm6i6IaKMyok1T5XIKisfEvXW9VgnUQt%2FOewJ3d2HVFBjObGCeCafTlPF4CegfwYXmZevvh6gM91ZPPYvMe60Uy8yo18oMpw%2BIxPGb514IjtBjnFmkkuWs9r%2FJ9GpVv8XP1BTrplNusxgloLE50dgq%2FMUUQOIDZvu%2BVkZUpeL2w8vPqmtEs5FDBSe2W5euaEj1flVpg1ldT%2BhqNzfEOfX8ZD6%2BuHAIdNxj97b2jB1OL5WJYxR%2BgnmDRkBzTWDyzCBtKJEbaDaVO%2FsBKbbrp%2F2tUpBntVbgqkyFE9PPJqUMqqy11Rg1RDrzm%2B7Cg9nMNBUKS%2F37SfE2OOr6f70Ghrn88h9Q4qQSiFkcKZLDw0w%2B3BKCA%2BJ2gfW3ta7a7iZlpqLXnt24U07bao7Y9YRlPMFmWeS7vvbHzmjakPbPhy92VbFePJT7EHgpK9fNvMSsjY1y0TNERfcCAAVBIha6HIVqQFPlDOJbEnatPIa%2BBC9q%2FJ5TggINdQQqL1dYzXurrzkD3Jgp6p%2FLeOAAmPjks86%2BMb6HpIAZOg6ltdhKobqDazNrcwwtCNxgY6pgHLOeykWQ%2Bfq%2F6DlUQvoRuuQkSwuCBMQSVVhUd1Ri2hw6rUBaTFgvoO1YPB1CTgUhoGxc3ch2UJR9Qbsvsp1XCtPwV%2F35xexMIOQ4ppcwjomaUwZsQ8JhApjLedBazMlaH4m9ZFHZ%2B%2B8k8SYdTEz9wly4b3su7PXXKVqngkUid%2F%2FHqP%2Bm9cv948onkrNJyFteOsR67g8fNWWcS0yWrlk83nXRs59137&X-Amz-Signature=0effed0fb2dba39dbe4e09423d2b66e84ec470d440681d13dc8029fed144c6f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB5MILF%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzbJdAflzoDpoLi2Q9RV%2BQDi9i0KihBg%2BnBBKOkxM2iAiBL0mnEct83nV%2BN2YRQ%2BZPQnbSOHZR3R%2BGcT%2BwctGvfkCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM1B3SAcPVXBSf%2F4IEKtwDZb6KY89Vuchdk3EHkN19BUlV93aRb%2FJPmp76UuBAVDdFeEXu2APws%2BQukJSi1PF1b5mepRbjVwkoxm6i6IaKMyok1T5XIKisfEvXW9VgnUQt%2FOewJ3d2HVFBjObGCeCafTlPF4CegfwYXmZevvh6gM91ZPPYvMe60Uy8yo18oMpw%2BIxPGb514IjtBjnFmkkuWs9r%2FJ9GpVv8XP1BTrplNusxgloLE50dgq%2FMUUQOIDZvu%2BVkZUpeL2w8vPqmtEs5FDBSe2W5euaEj1flVpg1ldT%2BhqNzfEOfX8ZD6%2BuHAIdNxj97b2jB1OL5WJYxR%2BgnmDRkBzTWDyzCBtKJEbaDaVO%2FsBKbbrp%2F2tUpBntVbgqkyFE9PPJqUMqqy11Rg1RDrzm%2B7Cg9nMNBUKS%2F37SfE2OOr6f70Ghrn88h9Q4qQSiFkcKZLDw0w%2B3BKCA%2BJ2gfW3ta7a7iZlpqLXnt24U07bao7Y9YRlPMFmWeS7vvbHzmjakPbPhy92VbFePJT7EHgpK9fNvMSsjY1y0TNERfcCAAVBIha6HIVqQFPlDOJbEnatPIa%2BBC9q%2FJ5TggINdQQqL1dYzXurrzkD3Jgp6p%2FLeOAAmPjks86%2BMb6HpIAZOg6ltdhKobqDazNrcwwtCNxgY6pgHLOeykWQ%2Bfq%2F6DlUQvoRuuQkSwuCBMQSVVhUd1Ri2hw6rUBaTFgvoO1YPB1CTgUhoGxc3ch2UJR9Qbsvsp1XCtPwV%2F35xexMIOQ4ppcwjomaUwZsQ8JhApjLedBazMlaH4m9ZFHZ%2B%2B8k8SYdTEz9wly4b3su7PXXKVqngkUid%2F%2FHqP%2Bm9cv948onkrNJyFteOsR67g8fNWWcS0yWrlk83nXRs59137&X-Amz-Signature=f135b9d967e0ee4e2f0621e3e91d6c0c5c63ee908bc8c4ff040d3ca294329ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB5MILF%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzbJdAflzoDpoLi2Q9RV%2BQDi9i0KihBg%2BnBBKOkxM2iAiBL0mnEct83nV%2BN2YRQ%2BZPQnbSOHZR3R%2BGcT%2BwctGvfkCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM1B3SAcPVXBSf%2F4IEKtwDZb6KY89Vuchdk3EHkN19BUlV93aRb%2FJPmp76UuBAVDdFeEXu2APws%2BQukJSi1PF1b5mepRbjVwkoxm6i6IaKMyok1T5XIKisfEvXW9VgnUQt%2FOewJ3d2HVFBjObGCeCafTlPF4CegfwYXmZevvh6gM91ZPPYvMe60Uy8yo18oMpw%2BIxPGb514IjtBjnFmkkuWs9r%2FJ9GpVv8XP1BTrplNusxgloLE50dgq%2FMUUQOIDZvu%2BVkZUpeL2w8vPqmtEs5FDBSe2W5euaEj1flVpg1ldT%2BhqNzfEOfX8ZD6%2BuHAIdNxj97b2jB1OL5WJYxR%2BgnmDRkBzTWDyzCBtKJEbaDaVO%2FsBKbbrp%2F2tUpBntVbgqkyFE9PPJqUMqqy11Rg1RDrzm%2B7Cg9nMNBUKS%2F37SfE2OOr6f70Ghrn88h9Q4qQSiFkcKZLDw0w%2B3BKCA%2BJ2gfW3ta7a7iZlpqLXnt24U07bao7Y9YRlPMFmWeS7vvbHzmjakPbPhy92VbFePJT7EHgpK9fNvMSsjY1y0TNERfcCAAVBIha6HIVqQFPlDOJbEnatPIa%2BBC9q%2FJ5TggINdQQqL1dYzXurrzkD3Jgp6p%2FLeOAAmPjks86%2BMb6HpIAZOg6ltdhKobqDazNrcwwtCNxgY6pgHLOeykWQ%2Bfq%2F6DlUQvoRuuQkSwuCBMQSVVhUd1Ri2hw6rUBaTFgvoO1YPB1CTgUhoGxc3ch2UJR9Qbsvsp1XCtPwV%2F35xexMIOQ4ppcwjomaUwZsQ8JhApjLedBazMlaH4m9ZFHZ%2B%2B8k8SYdTEz9wly4b3su7PXXKVqngkUid%2F%2FHqP%2Bm9cv948onkrNJyFteOsR67g8fNWWcS0yWrlk83nXRs59137&X-Amz-Signature=cf974371a876600017629b8097d0fd3ff7d31cc8f5e06724b12ba1a931914862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB5MILF%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzbJdAflzoDpoLi2Q9RV%2BQDi9i0KihBg%2BnBBKOkxM2iAiBL0mnEct83nV%2BN2YRQ%2BZPQnbSOHZR3R%2BGcT%2BwctGvfkCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM1B3SAcPVXBSf%2F4IEKtwDZb6KY89Vuchdk3EHkN19BUlV93aRb%2FJPmp76UuBAVDdFeEXu2APws%2BQukJSi1PF1b5mepRbjVwkoxm6i6IaKMyok1T5XIKisfEvXW9VgnUQt%2FOewJ3d2HVFBjObGCeCafTlPF4CegfwYXmZevvh6gM91ZPPYvMe60Uy8yo18oMpw%2BIxPGb514IjtBjnFmkkuWs9r%2FJ9GpVv8XP1BTrplNusxgloLE50dgq%2FMUUQOIDZvu%2BVkZUpeL2w8vPqmtEs5FDBSe2W5euaEj1flVpg1ldT%2BhqNzfEOfX8ZD6%2BuHAIdNxj97b2jB1OL5WJYxR%2BgnmDRkBzTWDyzCBtKJEbaDaVO%2FsBKbbrp%2F2tUpBntVbgqkyFE9PPJqUMqqy11Rg1RDrzm%2B7Cg9nMNBUKS%2F37SfE2OOr6f70Ghrn88h9Q4qQSiFkcKZLDw0w%2B3BKCA%2BJ2gfW3ta7a7iZlpqLXnt24U07bao7Y9YRlPMFmWeS7vvbHzmjakPbPhy92VbFePJT7EHgpK9fNvMSsjY1y0TNERfcCAAVBIha6HIVqQFPlDOJbEnatPIa%2BBC9q%2FJ5TggINdQQqL1dYzXurrzkD3Jgp6p%2FLeOAAmPjks86%2BMb6HpIAZOg6ltdhKobqDazNrcwwtCNxgY6pgHLOeykWQ%2Bfq%2F6DlUQvoRuuQkSwuCBMQSVVhUd1Ri2hw6rUBaTFgvoO1YPB1CTgUhoGxc3ch2UJR9Qbsvsp1XCtPwV%2F35xexMIOQ4ppcwjomaUwZsQ8JhApjLedBazMlaH4m9ZFHZ%2B%2B8k8SYdTEz9wly4b3su7PXXKVqngkUid%2F%2FHqP%2Bm9cv948onkrNJyFteOsR67g8fNWWcS0yWrlk83nXRs59137&X-Amz-Signature=87b2aa578ef1625667cb568fe57bc8448aae2027d74f35487e55cb4a377c1cc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB5MILF%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzbJdAflzoDpoLi2Q9RV%2BQDi9i0KihBg%2BnBBKOkxM2iAiBL0mnEct83nV%2BN2YRQ%2BZPQnbSOHZR3R%2BGcT%2BwctGvfkCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM1B3SAcPVXBSf%2F4IEKtwDZb6KY89Vuchdk3EHkN19BUlV93aRb%2FJPmp76UuBAVDdFeEXu2APws%2BQukJSi1PF1b5mepRbjVwkoxm6i6IaKMyok1T5XIKisfEvXW9VgnUQt%2FOewJ3d2HVFBjObGCeCafTlPF4CegfwYXmZevvh6gM91ZPPYvMe60Uy8yo18oMpw%2BIxPGb514IjtBjnFmkkuWs9r%2FJ9GpVv8XP1BTrplNusxgloLE50dgq%2FMUUQOIDZvu%2BVkZUpeL2w8vPqmtEs5FDBSe2W5euaEj1flVpg1ldT%2BhqNzfEOfX8ZD6%2BuHAIdNxj97b2jB1OL5WJYxR%2BgnmDRkBzTWDyzCBtKJEbaDaVO%2FsBKbbrp%2F2tUpBntVbgqkyFE9PPJqUMqqy11Rg1RDrzm%2B7Cg9nMNBUKS%2F37SfE2OOr6f70Ghrn88h9Q4qQSiFkcKZLDw0w%2B3BKCA%2BJ2gfW3ta7a7iZlpqLXnt24U07bao7Y9YRlPMFmWeS7vvbHzmjakPbPhy92VbFePJT7EHgpK9fNvMSsjY1y0TNERfcCAAVBIha6HIVqQFPlDOJbEnatPIa%2BBC9q%2FJ5TggINdQQqL1dYzXurrzkD3Jgp6p%2FLeOAAmPjks86%2BMb6HpIAZOg6ltdhKobqDazNrcwwtCNxgY6pgHLOeykWQ%2Bfq%2F6DlUQvoRuuQkSwuCBMQSVVhUd1Ri2hw6rUBaTFgvoO1YPB1CTgUhoGxc3ch2UJR9Qbsvsp1XCtPwV%2F35xexMIOQ4ppcwjomaUwZsQ8JhApjLedBazMlaH4m9ZFHZ%2B%2B8k8SYdTEz9wly4b3su7PXXKVqngkUid%2F%2FHqP%2Bm9cv948onkrNJyFteOsR67g8fNWWcS0yWrlk83nXRs59137&X-Amz-Signature=21a4b8d956321f4abb4061434a3be41399b3c53f32edec1f550e9068e1346905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB5MILF%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzbJdAflzoDpoLi2Q9RV%2BQDi9i0KihBg%2BnBBKOkxM2iAiBL0mnEct83nV%2BN2YRQ%2BZPQnbSOHZR3R%2BGcT%2BwctGvfkCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM1B3SAcPVXBSf%2F4IEKtwDZb6KY89Vuchdk3EHkN19BUlV93aRb%2FJPmp76UuBAVDdFeEXu2APws%2BQukJSi1PF1b5mepRbjVwkoxm6i6IaKMyok1T5XIKisfEvXW9VgnUQt%2FOewJ3d2HVFBjObGCeCafTlPF4CegfwYXmZevvh6gM91ZPPYvMe60Uy8yo18oMpw%2BIxPGb514IjtBjnFmkkuWs9r%2FJ9GpVv8XP1BTrplNusxgloLE50dgq%2FMUUQOIDZvu%2BVkZUpeL2w8vPqmtEs5FDBSe2W5euaEj1flVpg1ldT%2BhqNzfEOfX8ZD6%2BuHAIdNxj97b2jB1OL5WJYxR%2BgnmDRkBzTWDyzCBtKJEbaDaVO%2FsBKbbrp%2F2tUpBntVbgqkyFE9PPJqUMqqy11Rg1RDrzm%2B7Cg9nMNBUKS%2F37SfE2OOr6f70Ghrn88h9Q4qQSiFkcKZLDw0w%2B3BKCA%2BJ2gfW3ta7a7iZlpqLXnt24U07bao7Y9YRlPMFmWeS7vvbHzmjakPbPhy92VbFePJT7EHgpK9fNvMSsjY1y0TNERfcCAAVBIha6HIVqQFPlDOJbEnatPIa%2BBC9q%2FJ5TggINdQQqL1dYzXurrzkD3Jgp6p%2FLeOAAmPjks86%2BMb6HpIAZOg6ltdhKobqDazNrcwwtCNxgY6pgHLOeykWQ%2Bfq%2F6DlUQvoRuuQkSwuCBMQSVVhUd1Ri2hw6rUBaTFgvoO1YPB1CTgUhoGxc3ch2UJR9Qbsvsp1XCtPwV%2F35xexMIOQ4ppcwjomaUwZsQ8JhApjLedBazMlaH4m9ZFHZ%2B%2B8k8SYdTEz9wly4b3su7PXXKVqngkUid%2F%2FHqP%2Bm9cv948onkrNJyFteOsR67g8fNWWcS0yWrlk83nXRs59137&X-Amz-Signature=7d864d21ba92ea3eafb2352ba26b9dd721c013809a8d8ba9b0411aa9b552e017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


