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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZG2TNI%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCEe1fC9pbN3Cu0gve3hqaeQ%2BxzMSpu1KPU1MnnTXDzHwIgFqebQKdoQqpe44W52UkdT5q7lUTnqc%2BodiLBq7AWyB0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN6u2TFMKCdSudtqACrcA9z9D21GZcTH8iVL16mAnoUZAh0U9ux9naPIpS3ELqpP5k9GpAZ3vnBOAUeyIas8QGKqitVP63rPAdprXIBf8fJLDDyCvvBAE8hLu%2B6svB9hj%2BIyfWmufnVumlWpKS%2FMV6qyQ5O7hTUsZCSJsUPz0%2FcNIFO%2B7N5o2%2BQdhRz0mSGC4m8kEKLfZ%2BUc27nWF86yocm1%2F9hAkQ40MJ6TRJyGRAA%2Bro4Uo4mlpV6YQXImLkZ5rkWSULoyo13Hdk43jqfYUmbx6J7yfzlFoPhwXrPTMnCVt81v31t8ZXX8Oa1FnGx0lmYHIpWXDkFIkEwh4cqsDwlgjdIsNBd%2Fesp8RurswDYPDQ%2FsBKC0nq5%2FFEfpH3gJDg2UrbG%2FDhQQskAuNUPZeYUOL6tgQG8Hk1xsEWHzQv7UilAphjraQn7BcBFL6%2BYxmZSxxQn6%2Fi1hY6IAUSwuvxcKj5Q33ftQb9TTjLuy2oQmmIDS0%2BTKnrhmu%2Fz%2FUMVxcgRU8oGfLxLtHWX2aRPfteEcot1CKtmALibApEn6EYDrUCZYXAw9flJmX7EQVPB8sDnEw3554ZIsHaPtMwOyOnkZNsy%2BxMnNPreNp8KEd5%2BRa55GfGTSmmxQ%2BwcHxNNFBBS9Mp5Fojdyju48MMH%2FoMsGOqUBhpvJTJajCmFXHL4MYMdGhQO15OTzwGxqvr2JCSXQQMJW6khZ4p5gXYpQ4kV4MBFaNtfh6OfuND2RAEMwMQeKl3ZeaQzNXQ1C44e6Y%2BpxUfgrfjUgzKvNh6gFWFDz7yiAOoA6%2Bq%2Fb%2BhIUthD1AbHmoc5HdvJKnUh0CIKnwQmSPZIa55n6SFwnZg77ZsE%2FI5vhph5czX3e3ABObRZCvOAjYPyhfqn3&X-Amz-Signature=d83f473f12e2b86f4cfe5efcecf5f76c4955b83224cd8c84dfb46ddac334279f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZG2TNI%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCEe1fC9pbN3Cu0gve3hqaeQ%2BxzMSpu1KPU1MnnTXDzHwIgFqebQKdoQqpe44W52UkdT5q7lUTnqc%2BodiLBq7AWyB0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN6u2TFMKCdSudtqACrcA9z9D21GZcTH8iVL16mAnoUZAh0U9ux9naPIpS3ELqpP5k9GpAZ3vnBOAUeyIas8QGKqitVP63rPAdprXIBf8fJLDDyCvvBAE8hLu%2B6svB9hj%2BIyfWmufnVumlWpKS%2FMV6qyQ5O7hTUsZCSJsUPz0%2FcNIFO%2B7N5o2%2BQdhRz0mSGC4m8kEKLfZ%2BUc27nWF86yocm1%2F9hAkQ40MJ6TRJyGRAA%2Bro4Uo4mlpV6YQXImLkZ5rkWSULoyo13Hdk43jqfYUmbx6J7yfzlFoPhwXrPTMnCVt81v31t8ZXX8Oa1FnGx0lmYHIpWXDkFIkEwh4cqsDwlgjdIsNBd%2Fesp8RurswDYPDQ%2FsBKC0nq5%2FFEfpH3gJDg2UrbG%2FDhQQskAuNUPZeYUOL6tgQG8Hk1xsEWHzQv7UilAphjraQn7BcBFL6%2BYxmZSxxQn6%2Fi1hY6IAUSwuvxcKj5Q33ftQb9TTjLuy2oQmmIDS0%2BTKnrhmu%2Fz%2FUMVxcgRU8oGfLxLtHWX2aRPfteEcot1CKtmALibApEn6EYDrUCZYXAw9flJmX7EQVPB8sDnEw3554ZIsHaPtMwOyOnkZNsy%2BxMnNPreNp8KEd5%2BRa55GfGTSmmxQ%2BwcHxNNFBBS9Mp5Fojdyju48MMH%2FoMsGOqUBhpvJTJajCmFXHL4MYMdGhQO15OTzwGxqvr2JCSXQQMJW6khZ4p5gXYpQ4kV4MBFaNtfh6OfuND2RAEMwMQeKl3ZeaQzNXQ1C44e6Y%2BpxUfgrfjUgzKvNh6gFWFDz7yiAOoA6%2Bq%2Fb%2BhIUthD1AbHmoc5HdvJKnUh0CIKnwQmSPZIa55n6SFwnZg77ZsE%2FI5vhph5czX3e3ABObRZCvOAjYPyhfqn3&X-Amz-Signature=d107632eeddfddd098a29ca2f7f5d201c99ad10d85957ee1720a2e415f9b626b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZG2TNI%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCEe1fC9pbN3Cu0gve3hqaeQ%2BxzMSpu1KPU1MnnTXDzHwIgFqebQKdoQqpe44W52UkdT5q7lUTnqc%2BodiLBq7AWyB0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN6u2TFMKCdSudtqACrcA9z9D21GZcTH8iVL16mAnoUZAh0U9ux9naPIpS3ELqpP5k9GpAZ3vnBOAUeyIas8QGKqitVP63rPAdprXIBf8fJLDDyCvvBAE8hLu%2B6svB9hj%2BIyfWmufnVumlWpKS%2FMV6qyQ5O7hTUsZCSJsUPz0%2FcNIFO%2B7N5o2%2BQdhRz0mSGC4m8kEKLfZ%2BUc27nWF86yocm1%2F9hAkQ40MJ6TRJyGRAA%2Bro4Uo4mlpV6YQXImLkZ5rkWSULoyo13Hdk43jqfYUmbx6J7yfzlFoPhwXrPTMnCVt81v31t8ZXX8Oa1FnGx0lmYHIpWXDkFIkEwh4cqsDwlgjdIsNBd%2Fesp8RurswDYPDQ%2FsBKC0nq5%2FFEfpH3gJDg2UrbG%2FDhQQskAuNUPZeYUOL6tgQG8Hk1xsEWHzQv7UilAphjraQn7BcBFL6%2BYxmZSxxQn6%2Fi1hY6IAUSwuvxcKj5Q33ftQb9TTjLuy2oQmmIDS0%2BTKnrhmu%2Fz%2FUMVxcgRU8oGfLxLtHWX2aRPfteEcot1CKtmALibApEn6EYDrUCZYXAw9flJmX7EQVPB8sDnEw3554ZIsHaPtMwOyOnkZNsy%2BxMnNPreNp8KEd5%2BRa55GfGTSmmxQ%2BwcHxNNFBBS9Mp5Fojdyju48MMH%2FoMsGOqUBhpvJTJajCmFXHL4MYMdGhQO15OTzwGxqvr2JCSXQQMJW6khZ4p5gXYpQ4kV4MBFaNtfh6OfuND2RAEMwMQeKl3ZeaQzNXQ1C44e6Y%2BpxUfgrfjUgzKvNh6gFWFDz7yiAOoA6%2Bq%2Fb%2BhIUthD1AbHmoc5HdvJKnUh0CIKnwQmSPZIa55n6SFwnZg77ZsE%2FI5vhph5czX3e3ABObRZCvOAjYPyhfqn3&X-Amz-Signature=6b497ad741bad855d50094d0b15cd73d496cea325a453e160a093db49c1370d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZG2TNI%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCEe1fC9pbN3Cu0gve3hqaeQ%2BxzMSpu1KPU1MnnTXDzHwIgFqebQKdoQqpe44W52UkdT5q7lUTnqc%2BodiLBq7AWyB0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN6u2TFMKCdSudtqACrcA9z9D21GZcTH8iVL16mAnoUZAh0U9ux9naPIpS3ELqpP5k9GpAZ3vnBOAUeyIas8QGKqitVP63rPAdprXIBf8fJLDDyCvvBAE8hLu%2B6svB9hj%2BIyfWmufnVumlWpKS%2FMV6qyQ5O7hTUsZCSJsUPz0%2FcNIFO%2B7N5o2%2BQdhRz0mSGC4m8kEKLfZ%2BUc27nWF86yocm1%2F9hAkQ40MJ6TRJyGRAA%2Bro4Uo4mlpV6YQXImLkZ5rkWSULoyo13Hdk43jqfYUmbx6J7yfzlFoPhwXrPTMnCVt81v31t8ZXX8Oa1FnGx0lmYHIpWXDkFIkEwh4cqsDwlgjdIsNBd%2Fesp8RurswDYPDQ%2FsBKC0nq5%2FFEfpH3gJDg2UrbG%2FDhQQskAuNUPZeYUOL6tgQG8Hk1xsEWHzQv7UilAphjraQn7BcBFL6%2BYxmZSxxQn6%2Fi1hY6IAUSwuvxcKj5Q33ftQb9TTjLuy2oQmmIDS0%2BTKnrhmu%2Fz%2FUMVxcgRU8oGfLxLtHWX2aRPfteEcot1CKtmALibApEn6EYDrUCZYXAw9flJmX7EQVPB8sDnEw3554ZIsHaPtMwOyOnkZNsy%2BxMnNPreNp8KEd5%2BRa55GfGTSmmxQ%2BwcHxNNFBBS9Mp5Fojdyju48MMH%2FoMsGOqUBhpvJTJajCmFXHL4MYMdGhQO15OTzwGxqvr2JCSXQQMJW6khZ4p5gXYpQ4kV4MBFaNtfh6OfuND2RAEMwMQeKl3ZeaQzNXQ1C44e6Y%2BpxUfgrfjUgzKvNh6gFWFDz7yiAOoA6%2Bq%2Fb%2BhIUthD1AbHmoc5HdvJKnUh0CIKnwQmSPZIa55n6SFwnZg77ZsE%2FI5vhph5czX3e3ABObRZCvOAjYPyhfqn3&X-Amz-Signature=921adff7a0b7698ce7fb2f522653c45d68c9f6032c204d4d60ecc76f14f980ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD6B7YBJ%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIE9Pvvd7q8PA2wQH%2BzD%2Fgln35N9Ona7FEjEp8MKNfwiuAiEAwh7tWQpqAiNI10llj14lxbtSp10tm%2BOoZu6Cia5HKIsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMNF2190Vj4SP%2BsDoCrcA%2FJdzexN1DS4Ec4TR%2Fv8x5apc7nfktQpakDAQeKIuH2D1SQCNU4rnyP0RzjcqlRJVaiX4WZaPaWbTlzppLViRfZhSmzuetI4pRSF93SCwQfiwOT4BzTGhtmPDgugGZ5lzsseTK7Ykl65RhsYmz3ji5NW0f9g1i%2FSJSBoCyseMUrvzRotySsAJX7zILf2m0qRhHc%2BQBiqx1YNsIMM2l0t9uUwa%2B4aSYMdri8LRR7aaDjnsdhaBifzYdub6I0O53yjt46iKBuEScewPGicms6el1BTnXz%2BQq3sA6DGCyWsaPrRkPoxNxuCdGZyWx1TRhRIOM7UflCKaWOn7JAVimrsCJGZAf%2F64s%2Fx5VtROrRsohN7v%2BsqIYIZCx1NYExstlgPa4DkXU05xAIYLn%2F%2BnsucLkUx%2F3iZ3JmqNX0Q83Q85TlnT0OS4WuAThRUMunkxEHz7l4h0oqcD1584DTbUkuEhdQQmdNf7P%2FWPaxzge5F00sFGP2gDoVX4qD27FKSILA6dyfre%2FQYF6cBx25Z7eEpm%2F5JbWjWOda5EfQWh1a%2FjHEZkj%2F5rGO2gCATKy8Q0N0oAa0auA7AXmmLRPz8ADxdANvU9G2PjVDJN0A7Iqmb74bHNuouwlndkbz83F9cMPv%2FoMsGOqUB%2BHIKnLt7t6kymdTdZLjDpZWxS2pneAYNchwYJQgJmg8Tce%2FR12dA%2BakNHJ1kcxP2u4PiJ54YO%2F7GSQu06XQYt%2BQIuXJHwEbt0MS5tXcfm3lg9wA4ZbFMmpkO%2BpqLbHqAvjSG2RtxGO84yIJRMj1Vce4xObvNl3voBXFipBqVynh2j%2B7VFRJ9Li69ikYYOops5y0AMorN6GovhIAfwyTWu4k1vaTa&X-Amz-Signature=58c5ce8cc2e7ac519c420242727366a187410883203b17fb072075744783a3c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZG2TNI%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCEe1fC9pbN3Cu0gve3hqaeQ%2BxzMSpu1KPU1MnnTXDzHwIgFqebQKdoQqpe44W52UkdT5q7lUTnqc%2BodiLBq7AWyB0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN6u2TFMKCdSudtqACrcA9z9D21GZcTH8iVL16mAnoUZAh0U9ux9naPIpS3ELqpP5k9GpAZ3vnBOAUeyIas8QGKqitVP63rPAdprXIBf8fJLDDyCvvBAE8hLu%2B6svB9hj%2BIyfWmufnVumlWpKS%2FMV6qyQ5O7hTUsZCSJsUPz0%2FcNIFO%2B7N5o2%2BQdhRz0mSGC4m8kEKLfZ%2BUc27nWF86yocm1%2F9hAkQ40MJ6TRJyGRAA%2Bro4Uo4mlpV6YQXImLkZ5rkWSULoyo13Hdk43jqfYUmbx6J7yfzlFoPhwXrPTMnCVt81v31t8ZXX8Oa1FnGx0lmYHIpWXDkFIkEwh4cqsDwlgjdIsNBd%2Fesp8RurswDYPDQ%2FsBKC0nq5%2FFEfpH3gJDg2UrbG%2FDhQQskAuNUPZeYUOL6tgQG8Hk1xsEWHzQv7UilAphjraQn7BcBFL6%2BYxmZSxxQn6%2Fi1hY6IAUSwuvxcKj5Q33ftQb9TTjLuy2oQmmIDS0%2BTKnrhmu%2Fz%2FUMVxcgRU8oGfLxLtHWX2aRPfteEcot1CKtmALibApEn6EYDrUCZYXAw9flJmX7EQVPB8sDnEw3554ZIsHaPtMwOyOnkZNsy%2BxMnNPreNp8KEd5%2BRa55GfGTSmmxQ%2BwcHxNNFBBS9Mp5Fojdyju48MMH%2FoMsGOqUBhpvJTJajCmFXHL4MYMdGhQO15OTzwGxqvr2JCSXQQMJW6khZ4p5gXYpQ4kV4MBFaNtfh6OfuND2RAEMwMQeKl3ZeaQzNXQ1C44e6Y%2BpxUfgrfjUgzKvNh6gFWFDz7yiAOoA6%2Bq%2Fb%2BhIUthD1AbHmoc5HdvJKnUh0CIKnwQmSPZIa55n6SFwnZg77ZsE%2FI5vhph5czX3e3ABObRZCvOAjYPyhfqn3&X-Amz-Signature=cb37594c600124b0a3c4a90921e5f94951825c72528ba6cb05c639b1cf12cbef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZG2TNI%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCEe1fC9pbN3Cu0gve3hqaeQ%2BxzMSpu1KPU1MnnTXDzHwIgFqebQKdoQqpe44W52UkdT5q7lUTnqc%2BodiLBq7AWyB0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN6u2TFMKCdSudtqACrcA9z9D21GZcTH8iVL16mAnoUZAh0U9ux9naPIpS3ELqpP5k9GpAZ3vnBOAUeyIas8QGKqitVP63rPAdprXIBf8fJLDDyCvvBAE8hLu%2B6svB9hj%2BIyfWmufnVumlWpKS%2FMV6qyQ5O7hTUsZCSJsUPz0%2FcNIFO%2B7N5o2%2BQdhRz0mSGC4m8kEKLfZ%2BUc27nWF86yocm1%2F9hAkQ40MJ6TRJyGRAA%2Bro4Uo4mlpV6YQXImLkZ5rkWSULoyo13Hdk43jqfYUmbx6J7yfzlFoPhwXrPTMnCVt81v31t8ZXX8Oa1FnGx0lmYHIpWXDkFIkEwh4cqsDwlgjdIsNBd%2Fesp8RurswDYPDQ%2FsBKC0nq5%2FFEfpH3gJDg2UrbG%2FDhQQskAuNUPZeYUOL6tgQG8Hk1xsEWHzQv7UilAphjraQn7BcBFL6%2BYxmZSxxQn6%2Fi1hY6IAUSwuvxcKj5Q33ftQb9TTjLuy2oQmmIDS0%2BTKnrhmu%2Fz%2FUMVxcgRU8oGfLxLtHWX2aRPfteEcot1CKtmALibApEn6EYDrUCZYXAw9flJmX7EQVPB8sDnEw3554ZIsHaPtMwOyOnkZNsy%2BxMnNPreNp8KEd5%2BRa55GfGTSmmxQ%2BwcHxNNFBBS9Mp5Fojdyju48MMH%2FoMsGOqUBhpvJTJajCmFXHL4MYMdGhQO15OTzwGxqvr2JCSXQQMJW6khZ4p5gXYpQ4kV4MBFaNtfh6OfuND2RAEMwMQeKl3ZeaQzNXQ1C44e6Y%2BpxUfgrfjUgzKvNh6gFWFDz7yiAOoA6%2Bq%2Fb%2BhIUthD1AbHmoc5HdvJKnUh0CIKnwQmSPZIa55n6SFwnZg77ZsE%2FI5vhph5czX3e3ABObRZCvOAjYPyhfqn3&X-Amz-Signature=30b98855d75f1461549fcd8523f748a22d6de5fa3027a7bbadca15e8be1537f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZG2TNI%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCEe1fC9pbN3Cu0gve3hqaeQ%2BxzMSpu1KPU1MnnTXDzHwIgFqebQKdoQqpe44W52UkdT5q7lUTnqc%2BodiLBq7AWyB0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN6u2TFMKCdSudtqACrcA9z9D21GZcTH8iVL16mAnoUZAh0U9ux9naPIpS3ELqpP5k9GpAZ3vnBOAUeyIas8QGKqitVP63rPAdprXIBf8fJLDDyCvvBAE8hLu%2B6svB9hj%2BIyfWmufnVumlWpKS%2FMV6qyQ5O7hTUsZCSJsUPz0%2FcNIFO%2B7N5o2%2BQdhRz0mSGC4m8kEKLfZ%2BUc27nWF86yocm1%2F9hAkQ40MJ6TRJyGRAA%2Bro4Uo4mlpV6YQXImLkZ5rkWSULoyo13Hdk43jqfYUmbx6J7yfzlFoPhwXrPTMnCVt81v31t8ZXX8Oa1FnGx0lmYHIpWXDkFIkEwh4cqsDwlgjdIsNBd%2Fesp8RurswDYPDQ%2FsBKC0nq5%2FFEfpH3gJDg2UrbG%2FDhQQskAuNUPZeYUOL6tgQG8Hk1xsEWHzQv7UilAphjraQn7BcBFL6%2BYxmZSxxQn6%2Fi1hY6IAUSwuvxcKj5Q33ftQb9TTjLuy2oQmmIDS0%2BTKnrhmu%2Fz%2FUMVxcgRU8oGfLxLtHWX2aRPfteEcot1CKtmALibApEn6EYDrUCZYXAw9flJmX7EQVPB8sDnEw3554ZIsHaPtMwOyOnkZNsy%2BxMnNPreNp8KEd5%2BRa55GfGTSmmxQ%2BwcHxNNFBBS9Mp5Fojdyju48MMH%2FoMsGOqUBhpvJTJajCmFXHL4MYMdGhQO15OTzwGxqvr2JCSXQQMJW6khZ4p5gXYpQ4kV4MBFaNtfh6OfuND2RAEMwMQeKl3ZeaQzNXQ1C44e6Y%2BpxUfgrfjUgzKvNh6gFWFDz7yiAOoA6%2Bq%2Fb%2BhIUthD1AbHmoc5HdvJKnUh0CIKnwQmSPZIa55n6SFwnZg77ZsE%2FI5vhph5czX3e3ABObRZCvOAjYPyhfqn3&X-Amz-Signature=24422cb0c00e20686e2a5ab7bf3ee4bfddd269a98f10963a6b1be6c12611f588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZG2TNI%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCEe1fC9pbN3Cu0gve3hqaeQ%2BxzMSpu1KPU1MnnTXDzHwIgFqebQKdoQqpe44W52UkdT5q7lUTnqc%2BodiLBq7AWyB0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN6u2TFMKCdSudtqACrcA9z9D21GZcTH8iVL16mAnoUZAh0U9ux9naPIpS3ELqpP5k9GpAZ3vnBOAUeyIas8QGKqitVP63rPAdprXIBf8fJLDDyCvvBAE8hLu%2B6svB9hj%2BIyfWmufnVumlWpKS%2FMV6qyQ5O7hTUsZCSJsUPz0%2FcNIFO%2B7N5o2%2BQdhRz0mSGC4m8kEKLfZ%2BUc27nWF86yocm1%2F9hAkQ40MJ6TRJyGRAA%2Bro4Uo4mlpV6YQXImLkZ5rkWSULoyo13Hdk43jqfYUmbx6J7yfzlFoPhwXrPTMnCVt81v31t8ZXX8Oa1FnGx0lmYHIpWXDkFIkEwh4cqsDwlgjdIsNBd%2Fesp8RurswDYPDQ%2FsBKC0nq5%2FFEfpH3gJDg2UrbG%2FDhQQskAuNUPZeYUOL6tgQG8Hk1xsEWHzQv7UilAphjraQn7BcBFL6%2BYxmZSxxQn6%2Fi1hY6IAUSwuvxcKj5Q33ftQb9TTjLuy2oQmmIDS0%2BTKnrhmu%2Fz%2FUMVxcgRU8oGfLxLtHWX2aRPfteEcot1CKtmALibApEn6EYDrUCZYXAw9flJmX7EQVPB8sDnEw3554ZIsHaPtMwOyOnkZNsy%2BxMnNPreNp8KEd5%2BRa55GfGTSmmxQ%2BwcHxNNFBBS9Mp5Fojdyju48MMH%2FoMsGOqUBhpvJTJajCmFXHL4MYMdGhQO15OTzwGxqvr2JCSXQQMJW6khZ4p5gXYpQ4kV4MBFaNtfh6OfuND2RAEMwMQeKl3ZeaQzNXQ1C44e6Y%2BpxUfgrfjUgzKvNh6gFWFDz7yiAOoA6%2Bq%2Fb%2BhIUthD1AbHmoc5HdvJKnUh0CIKnwQmSPZIa55n6SFwnZg77ZsE%2FI5vhph5czX3e3ABObRZCvOAjYPyhfqn3&X-Amz-Signature=b3cbc6ca15b533a91d93f0fa93076e0054fa537542f5425425c72059f018a261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZG2TNI%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCEe1fC9pbN3Cu0gve3hqaeQ%2BxzMSpu1KPU1MnnTXDzHwIgFqebQKdoQqpe44W52UkdT5q7lUTnqc%2BodiLBq7AWyB0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN6u2TFMKCdSudtqACrcA9z9D21GZcTH8iVL16mAnoUZAh0U9ux9naPIpS3ELqpP5k9GpAZ3vnBOAUeyIas8QGKqitVP63rPAdprXIBf8fJLDDyCvvBAE8hLu%2B6svB9hj%2BIyfWmufnVumlWpKS%2FMV6qyQ5O7hTUsZCSJsUPz0%2FcNIFO%2B7N5o2%2BQdhRz0mSGC4m8kEKLfZ%2BUc27nWF86yocm1%2F9hAkQ40MJ6TRJyGRAA%2Bro4Uo4mlpV6YQXImLkZ5rkWSULoyo13Hdk43jqfYUmbx6J7yfzlFoPhwXrPTMnCVt81v31t8ZXX8Oa1FnGx0lmYHIpWXDkFIkEwh4cqsDwlgjdIsNBd%2Fesp8RurswDYPDQ%2FsBKC0nq5%2FFEfpH3gJDg2UrbG%2FDhQQskAuNUPZeYUOL6tgQG8Hk1xsEWHzQv7UilAphjraQn7BcBFL6%2BYxmZSxxQn6%2Fi1hY6IAUSwuvxcKj5Q33ftQb9TTjLuy2oQmmIDS0%2BTKnrhmu%2Fz%2FUMVxcgRU8oGfLxLtHWX2aRPfteEcot1CKtmALibApEn6EYDrUCZYXAw9flJmX7EQVPB8sDnEw3554ZIsHaPtMwOyOnkZNsy%2BxMnNPreNp8KEd5%2BRa55GfGTSmmxQ%2BwcHxNNFBBS9Mp5Fojdyju48MMH%2FoMsGOqUBhpvJTJajCmFXHL4MYMdGhQO15OTzwGxqvr2JCSXQQMJW6khZ4p5gXYpQ4kV4MBFaNtfh6OfuND2RAEMwMQeKl3ZeaQzNXQ1C44e6Y%2BpxUfgrfjUgzKvNh6gFWFDz7yiAOoA6%2Bq%2Fb%2BhIUthD1AbHmoc5HdvJKnUh0CIKnwQmSPZIa55n6SFwnZg77ZsE%2FI5vhph5czX3e3ABObRZCvOAjYPyhfqn3&X-Amz-Signature=3d33b2ac8c6120d19eb51491d7eb8e8f63e03539e25f5524d201d48e7b787a3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZG2TNI%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCEe1fC9pbN3Cu0gve3hqaeQ%2BxzMSpu1KPU1MnnTXDzHwIgFqebQKdoQqpe44W52UkdT5q7lUTnqc%2BodiLBq7AWyB0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN6u2TFMKCdSudtqACrcA9z9D21GZcTH8iVL16mAnoUZAh0U9ux9naPIpS3ELqpP5k9GpAZ3vnBOAUeyIas8QGKqitVP63rPAdprXIBf8fJLDDyCvvBAE8hLu%2B6svB9hj%2BIyfWmufnVumlWpKS%2FMV6qyQ5O7hTUsZCSJsUPz0%2FcNIFO%2B7N5o2%2BQdhRz0mSGC4m8kEKLfZ%2BUc27nWF86yocm1%2F9hAkQ40MJ6TRJyGRAA%2Bro4Uo4mlpV6YQXImLkZ5rkWSULoyo13Hdk43jqfYUmbx6J7yfzlFoPhwXrPTMnCVt81v31t8ZXX8Oa1FnGx0lmYHIpWXDkFIkEwh4cqsDwlgjdIsNBd%2Fesp8RurswDYPDQ%2FsBKC0nq5%2FFEfpH3gJDg2UrbG%2FDhQQskAuNUPZeYUOL6tgQG8Hk1xsEWHzQv7UilAphjraQn7BcBFL6%2BYxmZSxxQn6%2Fi1hY6IAUSwuvxcKj5Q33ftQb9TTjLuy2oQmmIDS0%2BTKnrhmu%2Fz%2FUMVxcgRU8oGfLxLtHWX2aRPfteEcot1CKtmALibApEn6EYDrUCZYXAw9flJmX7EQVPB8sDnEw3554ZIsHaPtMwOyOnkZNsy%2BxMnNPreNp8KEd5%2BRa55GfGTSmmxQ%2BwcHxNNFBBS9Mp5Fojdyju48MMH%2FoMsGOqUBhpvJTJajCmFXHL4MYMdGhQO15OTzwGxqvr2JCSXQQMJW6khZ4p5gXYpQ4kV4MBFaNtfh6OfuND2RAEMwMQeKl3ZeaQzNXQ1C44e6Y%2BpxUfgrfjUgzKvNh6gFWFDz7yiAOoA6%2Bq%2Fb%2BhIUthD1AbHmoc5HdvJKnUh0CIKnwQmSPZIa55n6SFwnZg77ZsE%2FI5vhph5czX3e3ABObRZCvOAjYPyhfqn3&X-Amz-Signature=8b866befc1d656c079a3853ae6a7ddfc70b6dd1e9968796607ea8976cad8b3cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


