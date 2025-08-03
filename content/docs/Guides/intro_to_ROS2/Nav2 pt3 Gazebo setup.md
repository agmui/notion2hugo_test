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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QJ6AWQJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKCM6gRu%2FpM8aq14NBUFVhlL9LXdWJJqzKPI9uAjwcyAiEA5aoWgpSeIov8syKcxb%2Bxqfn%2FGCj3E1ONodvgInK5%2F74q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB%2FsD5rnZPajHntm%2BCrcA3dLAzcFsP9%2BWTTijma8%2Bq0vnWsIG%2F7wrVfbYm79%2FVAQt1V0wLi2wrfa0J0c72cQ85s6BQiBb3V1r0M%2FVyXyRuDLrGIJNcdI%2By5p%2FAWYn4ii2LHzBxHvnbMazG1xFPLwnqTkddzKzUb9tU%2F0mqlROw6luLZATjDdH%2Fm%2B6r6UnHritjWpCY40CP3ylSseCuap%2Fyam2z1hnJfoNHNXKoZpwqe7iTsONqMtHfM3x88bAWU6RlqZ6JFjr%2B28eQiM9MxtTUirPJC5fEFdvtwUUMGwBRiG8N5NP059OWWjZwm0HZ0FYsqY3Mfw6zKGKdWH3VUWCG7uerLb%2FhpK%2B9i4YkY%2F84AsfE9Y1uMiPCOZkVaqOTWxq16fm7BJNEkY5BOwFexFjMfOW5SKe%2Bzu9fVk1n5jlBI%2FO%2BeHlqX3tykyTIXUj186mEcDMs2cMUsYQyKb2hgdVXWCvh3eG%2F55mdDhBN%2FeapSOnT8kXkeytbRH1y19UqBUqXwC0PCqGC08BZ8Pbltb4TCXtGQspSIvH0iNC64FRnH1%2Fk%2B3%2FloKHMtH1f5If%2BgufN7LrB6X40Y17RfySzjX8lwyqOTwPSDJa%2Fa5BqktxX96sxzRtjq0aQgWgqS%2B5Zyde0W%2BihE8gY8B5VJGMKqBusQGOqUBMsaNzEdTu8vrqSYyBWFwaY8X6L38N03Fhc0yDC6vPyvZg%2BY6JhJ2BSVixZYTLPFrA7%2BnmkXfT%2BZLmfeDSTsL4nxzvAbRG%2BWfBmtxnbSFXwTUpJEN43s2t021MTOz2Or2khRL%2FXm31qmZQ6rxo0EiEMMqIzAQxM0DNQKiHa%2Fy4ls8Zm1ByE%2FSoHOKJ6dvrczz2keyUBu5KrtFHBR7zxN1zWzzfgLf&X-Amz-Signature=a1a2c228816810955e5b4052d6d1e41540ccc461f9d81dae99e634a3ee7abc06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QJ6AWQJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKCM6gRu%2FpM8aq14NBUFVhlL9LXdWJJqzKPI9uAjwcyAiEA5aoWgpSeIov8syKcxb%2Bxqfn%2FGCj3E1ONodvgInK5%2F74q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB%2FsD5rnZPajHntm%2BCrcA3dLAzcFsP9%2BWTTijma8%2Bq0vnWsIG%2F7wrVfbYm79%2FVAQt1V0wLi2wrfa0J0c72cQ85s6BQiBb3V1r0M%2FVyXyRuDLrGIJNcdI%2By5p%2FAWYn4ii2LHzBxHvnbMazG1xFPLwnqTkddzKzUb9tU%2F0mqlROw6luLZATjDdH%2Fm%2B6r6UnHritjWpCY40CP3ylSseCuap%2Fyam2z1hnJfoNHNXKoZpwqe7iTsONqMtHfM3x88bAWU6RlqZ6JFjr%2B28eQiM9MxtTUirPJC5fEFdvtwUUMGwBRiG8N5NP059OWWjZwm0HZ0FYsqY3Mfw6zKGKdWH3VUWCG7uerLb%2FhpK%2B9i4YkY%2F84AsfE9Y1uMiPCOZkVaqOTWxq16fm7BJNEkY5BOwFexFjMfOW5SKe%2Bzu9fVk1n5jlBI%2FO%2BeHlqX3tykyTIXUj186mEcDMs2cMUsYQyKb2hgdVXWCvh3eG%2F55mdDhBN%2FeapSOnT8kXkeytbRH1y19UqBUqXwC0PCqGC08BZ8Pbltb4TCXtGQspSIvH0iNC64FRnH1%2Fk%2B3%2FloKHMtH1f5If%2BgufN7LrB6X40Y17RfySzjX8lwyqOTwPSDJa%2Fa5BqktxX96sxzRtjq0aQgWgqS%2B5Zyde0W%2BihE8gY8B5VJGMKqBusQGOqUBMsaNzEdTu8vrqSYyBWFwaY8X6L38N03Fhc0yDC6vPyvZg%2BY6JhJ2BSVixZYTLPFrA7%2BnmkXfT%2BZLmfeDSTsL4nxzvAbRG%2BWfBmtxnbSFXwTUpJEN43s2t021MTOz2Or2khRL%2FXm31qmZQ6rxo0EiEMMqIzAQxM0DNQKiHa%2Fy4ls8Zm1ByE%2FSoHOKJ6dvrczz2keyUBu5KrtFHBR7zxN1zWzzfgLf&X-Amz-Signature=2ca4d6a3e5b395161e919ef47ac76f252c8d3559d8f4a52778700a15efd56a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QJ6AWQJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKCM6gRu%2FpM8aq14NBUFVhlL9LXdWJJqzKPI9uAjwcyAiEA5aoWgpSeIov8syKcxb%2Bxqfn%2FGCj3E1ONodvgInK5%2F74q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB%2FsD5rnZPajHntm%2BCrcA3dLAzcFsP9%2BWTTijma8%2Bq0vnWsIG%2F7wrVfbYm79%2FVAQt1V0wLi2wrfa0J0c72cQ85s6BQiBb3V1r0M%2FVyXyRuDLrGIJNcdI%2By5p%2FAWYn4ii2LHzBxHvnbMazG1xFPLwnqTkddzKzUb9tU%2F0mqlROw6luLZATjDdH%2Fm%2B6r6UnHritjWpCY40CP3ylSseCuap%2Fyam2z1hnJfoNHNXKoZpwqe7iTsONqMtHfM3x88bAWU6RlqZ6JFjr%2B28eQiM9MxtTUirPJC5fEFdvtwUUMGwBRiG8N5NP059OWWjZwm0HZ0FYsqY3Mfw6zKGKdWH3VUWCG7uerLb%2FhpK%2B9i4YkY%2F84AsfE9Y1uMiPCOZkVaqOTWxq16fm7BJNEkY5BOwFexFjMfOW5SKe%2Bzu9fVk1n5jlBI%2FO%2BeHlqX3tykyTIXUj186mEcDMs2cMUsYQyKb2hgdVXWCvh3eG%2F55mdDhBN%2FeapSOnT8kXkeytbRH1y19UqBUqXwC0PCqGC08BZ8Pbltb4TCXtGQspSIvH0iNC64FRnH1%2Fk%2B3%2FloKHMtH1f5If%2BgufN7LrB6X40Y17RfySzjX8lwyqOTwPSDJa%2Fa5BqktxX96sxzRtjq0aQgWgqS%2B5Zyde0W%2BihE8gY8B5VJGMKqBusQGOqUBMsaNzEdTu8vrqSYyBWFwaY8X6L38N03Fhc0yDC6vPyvZg%2BY6JhJ2BSVixZYTLPFrA7%2BnmkXfT%2BZLmfeDSTsL4nxzvAbRG%2BWfBmtxnbSFXwTUpJEN43s2t021MTOz2Or2khRL%2FXm31qmZQ6rxo0EiEMMqIzAQxM0DNQKiHa%2Fy4ls8Zm1ByE%2FSoHOKJ6dvrczz2keyUBu5KrtFHBR7zxN1zWzzfgLf&X-Amz-Signature=e8ea7bdc41d61dd42e510ed806abf7c10b5e14288ddbe142e7f3a39c69eaf8e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QJ6AWQJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKCM6gRu%2FpM8aq14NBUFVhlL9LXdWJJqzKPI9uAjwcyAiEA5aoWgpSeIov8syKcxb%2Bxqfn%2FGCj3E1ONodvgInK5%2F74q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB%2FsD5rnZPajHntm%2BCrcA3dLAzcFsP9%2BWTTijma8%2Bq0vnWsIG%2F7wrVfbYm79%2FVAQt1V0wLi2wrfa0J0c72cQ85s6BQiBb3V1r0M%2FVyXyRuDLrGIJNcdI%2By5p%2FAWYn4ii2LHzBxHvnbMazG1xFPLwnqTkddzKzUb9tU%2F0mqlROw6luLZATjDdH%2Fm%2B6r6UnHritjWpCY40CP3ylSseCuap%2Fyam2z1hnJfoNHNXKoZpwqe7iTsONqMtHfM3x88bAWU6RlqZ6JFjr%2B28eQiM9MxtTUirPJC5fEFdvtwUUMGwBRiG8N5NP059OWWjZwm0HZ0FYsqY3Mfw6zKGKdWH3VUWCG7uerLb%2FhpK%2B9i4YkY%2F84AsfE9Y1uMiPCOZkVaqOTWxq16fm7BJNEkY5BOwFexFjMfOW5SKe%2Bzu9fVk1n5jlBI%2FO%2BeHlqX3tykyTIXUj186mEcDMs2cMUsYQyKb2hgdVXWCvh3eG%2F55mdDhBN%2FeapSOnT8kXkeytbRH1y19UqBUqXwC0PCqGC08BZ8Pbltb4TCXtGQspSIvH0iNC64FRnH1%2Fk%2B3%2FloKHMtH1f5If%2BgufN7LrB6X40Y17RfySzjX8lwyqOTwPSDJa%2Fa5BqktxX96sxzRtjq0aQgWgqS%2B5Zyde0W%2BihE8gY8B5VJGMKqBusQGOqUBMsaNzEdTu8vrqSYyBWFwaY8X6L38N03Fhc0yDC6vPyvZg%2BY6JhJ2BSVixZYTLPFrA7%2BnmkXfT%2BZLmfeDSTsL4nxzvAbRG%2BWfBmtxnbSFXwTUpJEN43s2t021MTOz2Or2khRL%2FXm31qmZQ6rxo0EiEMMqIzAQxM0DNQKiHa%2Fy4ls8Zm1ByE%2FSoHOKJ6dvrczz2keyUBu5KrtFHBR7zxN1zWzzfgLf&X-Amz-Signature=6bff4a6f270601706446ad009b11810871092de58bcdb6100d49077fca8b08f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TPS4XLU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0GlIpheGZr1Ml59qCMD5zmcTnFzPLgj3KRBHV%2BiLuEAIgdeFXukZdXR9Fo6I063VYldRdrCyutn7zUj1e1Qvlwe0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDOPbkg%2FCqzAd10xE%2BSrcA02c%2FqvBGTBXEz0Kj%2BtWPXWcUySbVqLhDqDZD61IVYvz9S2s2ShnlTYFe%2FfXlTkPazbH39j1CPV1Utgq6QFTVOFCCIEINa1AOt7j4ggj8m7w52xRic97tlVY1v62bW93JUw5dhKYZeAZ%2FCGIftkVFeSye7DKgILZnq73gliirE9e5psecy7s3Bj5NgJ0xb2zLkX%2BO%2Fx1m7spwXFFN20FHCgoo%2BmNG%2FaLjemQAui5oZS4VfBAuCTLm9OmxRhPNvErLBeyClzDH37dbsBnG3F3aWXeopmzYFbgJvlgMn0e8bF5KBdtnR3InQVfxc2m0zl7TR6oPt5qpd937pd0moHz%2FP%2FyeAzEQTTd54opb6BsH%2BFzBOVXfN4K5s46BPem%2FYq02NQyTv9wKGSctvmcpUYnU4%2Bjevc1wuiwh5snp%2BgifAwXSiYpaWmUp7Q7savZKIKhPioa%2FWYvp1JwPgPRIAA6yPsKN3gWogVSQgCkmeww5SQIb2blqvSChinHDGe5X9kLLxOChMYBzsgPw7jMV%2B%2FnOq2lmf1j257jRSotWTVHlICqFkBni%2BsB64PZ9stVSTXXFuAl4Bim1%2FjNOXkxbguUkRoWu3rsI1llnbZv6UrixrJNItBNpZQFn%2BS6roTdMNeAusQGOqUBk3dQRk95fli%2BUmtgn%2BlebNncp%2BhxxJ7VkKXicXeP%2Bmsf028b6PEoFjSUo76v4zxEzFv2GkiDEuQ369wPZhUNGnda0twQHAApG4o9lBrpanDIUNbdUaud2FqASHYZWvRUHSPsjnmjsULQrWQTlE2DqIOha4fDVJ6aUnKm25w2T%2Ftpn4LuM2RIgO9X%2Br%2FesQdxIGi9Txqoc7%2FrVSHRNW%2F5feXIFXqV&X-Amz-Signature=d6427829268f018857895c04df3f496ebcce05a903214718d71f641103d3485b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QJ6AWQJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKCM6gRu%2FpM8aq14NBUFVhlL9LXdWJJqzKPI9uAjwcyAiEA5aoWgpSeIov8syKcxb%2Bxqfn%2FGCj3E1ONodvgInK5%2F74q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB%2FsD5rnZPajHntm%2BCrcA3dLAzcFsP9%2BWTTijma8%2Bq0vnWsIG%2F7wrVfbYm79%2FVAQt1V0wLi2wrfa0J0c72cQ85s6BQiBb3V1r0M%2FVyXyRuDLrGIJNcdI%2By5p%2FAWYn4ii2LHzBxHvnbMazG1xFPLwnqTkddzKzUb9tU%2F0mqlROw6luLZATjDdH%2Fm%2B6r6UnHritjWpCY40CP3ylSseCuap%2Fyam2z1hnJfoNHNXKoZpwqe7iTsONqMtHfM3x88bAWU6RlqZ6JFjr%2B28eQiM9MxtTUirPJC5fEFdvtwUUMGwBRiG8N5NP059OWWjZwm0HZ0FYsqY3Mfw6zKGKdWH3VUWCG7uerLb%2FhpK%2B9i4YkY%2F84AsfE9Y1uMiPCOZkVaqOTWxq16fm7BJNEkY5BOwFexFjMfOW5SKe%2Bzu9fVk1n5jlBI%2FO%2BeHlqX3tykyTIXUj186mEcDMs2cMUsYQyKb2hgdVXWCvh3eG%2F55mdDhBN%2FeapSOnT8kXkeytbRH1y19UqBUqXwC0PCqGC08BZ8Pbltb4TCXtGQspSIvH0iNC64FRnH1%2Fk%2B3%2FloKHMtH1f5If%2BgufN7LrB6X40Y17RfySzjX8lwyqOTwPSDJa%2Fa5BqktxX96sxzRtjq0aQgWgqS%2B5Zyde0W%2BihE8gY8B5VJGMKqBusQGOqUBMsaNzEdTu8vrqSYyBWFwaY8X6L38N03Fhc0yDC6vPyvZg%2BY6JhJ2BSVixZYTLPFrA7%2BnmkXfT%2BZLmfeDSTsL4nxzvAbRG%2BWfBmtxnbSFXwTUpJEN43s2t021MTOz2Or2khRL%2FXm31qmZQ6rxo0EiEMMqIzAQxM0DNQKiHa%2Fy4ls8Zm1ByE%2FSoHOKJ6dvrczz2keyUBu5KrtFHBR7zxN1zWzzfgLf&X-Amz-Signature=302f4b23772e4af01723b960543394596b3189e6e58d9bb0a33305f297125b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QJ6AWQJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKCM6gRu%2FpM8aq14NBUFVhlL9LXdWJJqzKPI9uAjwcyAiEA5aoWgpSeIov8syKcxb%2Bxqfn%2FGCj3E1ONodvgInK5%2F74q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB%2FsD5rnZPajHntm%2BCrcA3dLAzcFsP9%2BWTTijma8%2Bq0vnWsIG%2F7wrVfbYm79%2FVAQt1V0wLi2wrfa0J0c72cQ85s6BQiBb3V1r0M%2FVyXyRuDLrGIJNcdI%2By5p%2FAWYn4ii2LHzBxHvnbMazG1xFPLwnqTkddzKzUb9tU%2F0mqlROw6luLZATjDdH%2Fm%2B6r6UnHritjWpCY40CP3ylSseCuap%2Fyam2z1hnJfoNHNXKoZpwqe7iTsONqMtHfM3x88bAWU6RlqZ6JFjr%2B28eQiM9MxtTUirPJC5fEFdvtwUUMGwBRiG8N5NP059OWWjZwm0HZ0FYsqY3Mfw6zKGKdWH3VUWCG7uerLb%2FhpK%2B9i4YkY%2F84AsfE9Y1uMiPCOZkVaqOTWxq16fm7BJNEkY5BOwFexFjMfOW5SKe%2Bzu9fVk1n5jlBI%2FO%2BeHlqX3tykyTIXUj186mEcDMs2cMUsYQyKb2hgdVXWCvh3eG%2F55mdDhBN%2FeapSOnT8kXkeytbRH1y19UqBUqXwC0PCqGC08BZ8Pbltb4TCXtGQspSIvH0iNC64FRnH1%2Fk%2B3%2FloKHMtH1f5If%2BgufN7LrB6X40Y17RfySzjX8lwyqOTwPSDJa%2Fa5BqktxX96sxzRtjq0aQgWgqS%2B5Zyde0W%2BihE8gY8B5VJGMKqBusQGOqUBMsaNzEdTu8vrqSYyBWFwaY8X6L38N03Fhc0yDC6vPyvZg%2BY6JhJ2BSVixZYTLPFrA7%2BnmkXfT%2BZLmfeDSTsL4nxzvAbRG%2BWfBmtxnbSFXwTUpJEN43s2t021MTOz2Or2khRL%2FXm31qmZQ6rxo0EiEMMqIzAQxM0DNQKiHa%2Fy4ls8Zm1ByE%2FSoHOKJ6dvrczz2keyUBu5KrtFHBR7zxN1zWzzfgLf&X-Amz-Signature=5c35d9db5cf897398cc6ba4e8e162f897f66e2c89e07b37825870f1b69ca550c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QJ6AWQJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKCM6gRu%2FpM8aq14NBUFVhlL9LXdWJJqzKPI9uAjwcyAiEA5aoWgpSeIov8syKcxb%2Bxqfn%2FGCj3E1ONodvgInK5%2F74q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB%2FsD5rnZPajHntm%2BCrcA3dLAzcFsP9%2BWTTijma8%2Bq0vnWsIG%2F7wrVfbYm79%2FVAQt1V0wLi2wrfa0J0c72cQ85s6BQiBb3V1r0M%2FVyXyRuDLrGIJNcdI%2By5p%2FAWYn4ii2LHzBxHvnbMazG1xFPLwnqTkddzKzUb9tU%2F0mqlROw6luLZATjDdH%2Fm%2B6r6UnHritjWpCY40CP3ylSseCuap%2Fyam2z1hnJfoNHNXKoZpwqe7iTsONqMtHfM3x88bAWU6RlqZ6JFjr%2B28eQiM9MxtTUirPJC5fEFdvtwUUMGwBRiG8N5NP059OWWjZwm0HZ0FYsqY3Mfw6zKGKdWH3VUWCG7uerLb%2FhpK%2B9i4YkY%2F84AsfE9Y1uMiPCOZkVaqOTWxq16fm7BJNEkY5BOwFexFjMfOW5SKe%2Bzu9fVk1n5jlBI%2FO%2BeHlqX3tykyTIXUj186mEcDMs2cMUsYQyKb2hgdVXWCvh3eG%2F55mdDhBN%2FeapSOnT8kXkeytbRH1y19UqBUqXwC0PCqGC08BZ8Pbltb4TCXtGQspSIvH0iNC64FRnH1%2Fk%2B3%2FloKHMtH1f5If%2BgufN7LrB6X40Y17RfySzjX8lwyqOTwPSDJa%2Fa5BqktxX96sxzRtjq0aQgWgqS%2B5Zyde0W%2BihE8gY8B5VJGMKqBusQGOqUBMsaNzEdTu8vrqSYyBWFwaY8X6L38N03Fhc0yDC6vPyvZg%2BY6JhJ2BSVixZYTLPFrA7%2BnmkXfT%2BZLmfeDSTsL4nxzvAbRG%2BWfBmtxnbSFXwTUpJEN43s2t021MTOz2Or2khRL%2FXm31qmZQ6rxo0EiEMMqIzAQxM0DNQKiHa%2Fy4ls8Zm1ByE%2FSoHOKJ6dvrczz2keyUBu5KrtFHBR7zxN1zWzzfgLf&X-Amz-Signature=6d4b09d94404a265c34b0d809c84b21faf5d9fe76153620775ab5171c29bcc6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QJ6AWQJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKCM6gRu%2FpM8aq14NBUFVhlL9LXdWJJqzKPI9uAjwcyAiEA5aoWgpSeIov8syKcxb%2Bxqfn%2FGCj3E1ONodvgInK5%2F74q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB%2FsD5rnZPajHntm%2BCrcA3dLAzcFsP9%2BWTTijma8%2Bq0vnWsIG%2F7wrVfbYm79%2FVAQt1V0wLi2wrfa0J0c72cQ85s6BQiBb3V1r0M%2FVyXyRuDLrGIJNcdI%2By5p%2FAWYn4ii2LHzBxHvnbMazG1xFPLwnqTkddzKzUb9tU%2F0mqlROw6luLZATjDdH%2Fm%2B6r6UnHritjWpCY40CP3ylSseCuap%2Fyam2z1hnJfoNHNXKoZpwqe7iTsONqMtHfM3x88bAWU6RlqZ6JFjr%2B28eQiM9MxtTUirPJC5fEFdvtwUUMGwBRiG8N5NP059OWWjZwm0HZ0FYsqY3Mfw6zKGKdWH3VUWCG7uerLb%2FhpK%2B9i4YkY%2F84AsfE9Y1uMiPCOZkVaqOTWxq16fm7BJNEkY5BOwFexFjMfOW5SKe%2Bzu9fVk1n5jlBI%2FO%2BeHlqX3tykyTIXUj186mEcDMs2cMUsYQyKb2hgdVXWCvh3eG%2F55mdDhBN%2FeapSOnT8kXkeytbRH1y19UqBUqXwC0PCqGC08BZ8Pbltb4TCXtGQspSIvH0iNC64FRnH1%2Fk%2B3%2FloKHMtH1f5If%2BgufN7LrB6X40Y17RfySzjX8lwyqOTwPSDJa%2Fa5BqktxX96sxzRtjq0aQgWgqS%2B5Zyde0W%2BihE8gY8B5VJGMKqBusQGOqUBMsaNzEdTu8vrqSYyBWFwaY8X6L38N03Fhc0yDC6vPyvZg%2BY6JhJ2BSVixZYTLPFrA7%2BnmkXfT%2BZLmfeDSTsL4nxzvAbRG%2BWfBmtxnbSFXwTUpJEN43s2t021MTOz2Or2khRL%2FXm31qmZQ6rxo0EiEMMqIzAQxM0DNQKiHa%2Fy4ls8Zm1ByE%2FSoHOKJ6dvrczz2keyUBu5KrtFHBR7zxN1zWzzfgLf&X-Amz-Signature=a4a659304bbcd021d675a204f29e156bd5bfbac7e882b9fc9e69c1f7766e40a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QJ6AWQJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKCM6gRu%2FpM8aq14NBUFVhlL9LXdWJJqzKPI9uAjwcyAiEA5aoWgpSeIov8syKcxb%2Bxqfn%2FGCj3E1ONodvgInK5%2F74q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB%2FsD5rnZPajHntm%2BCrcA3dLAzcFsP9%2BWTTijma8%2Bq0vnWsIG%2F7wrVfbYm79%2FVAQt1V0wLi2wrfa0J0c72cQ85s6BQiBb3V1r0M%2FVyXyRuDLrGIJNcdI%2By5p%2FAWYn4ii2LHzBxHvnbMazG1xFPLwnqTkddzKzUb9tU%2F0mqlROw6luLZATjDdH%2Fm%2B6r6UnHritjWpCY40CP3ylSseCuap%2Fyam2z1hnJfoNHNXKoZpwqe7iTsONqMtHfM3x88bAWU6RlqZ6JFjr%2B28eQiM9MxtTUirPJC5fEFdvtwUUMGwBRiG8N5NP059OWWjZwm0HZ0FYsqY3Mfw6zKGKdWH3VUWCG7uerLb%2FhpK%2B9i4YkY%2F84AsfE9Y1uMiPCOZkVaqOTWxq16fm7BJNEkY5BOwFexFjMfOW5SKe%2Bzu9fVk1n5jlBI%2FO%2BeHlqX3tykyTIXUj186mEcDMs2cMUsYQyKb2hgdVXWCvh3eG%2F55mdDhBN%2FeapSOnT8kXkeytbRH1y19UqBUqXwC0PCqGC08BZ8Pbltb4TCXtGQspSIvH0iNC64FRnH1%2Fk%2B3%2FloKHMtH1f5If%2BgufN7LrB6X40Y17RfySzjX8lwyqOTwPSDJa%2Fa5BqktxX96sxzRtjq0aQgWgqS%2B5Zyde0W%2BihE8gY8B5VJGMKqBusQGOqUBMsaNzEdTu8vrqSYyBWFwaY8X6L38N03Fhc0yDC6vPyvZg%2BY6JhJ2BSVixZYTLPFrA7%2BnmkXfT%2BZLmfeDSTsL4nxzvAbRG%2BWfBmtxnbSFXwTUpJEN43s2t021MTOz2Or2khRL%2FXm31qmZQ6rxo0EiEMMqIzAQxM0DNQKiHa%2Fy4ls8Zm1ByE%2FSoHOKJ6dvrczz2keyUBu5KrtFHBR7zxN1zWzzfgLf&X-Amz-Signature=2a32669bea81c1b4df5865e70af8c8e73ed96950cde21ba87da52fc217f0eae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QJ6AWQJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKCM6gRu%2FpM8aq14NBUFVhlL9LXdWJJqzKPI9uAjwcyAiEA5aoWgpSeIov8syKcxb%2Bxqfn%2FGCj3E1ONodvgInK5%2F74q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB%2FsD5rnZPajHntm%2BCrcA3dLAzcFsP9%2BWTTijma8%2Bq0vnWsIG%2F7wrVfbYm79%2FVAQt1V0wLi2wrfa0J0c72cQ85s6BQiBb3V1r0M%2FVyXyRuDLrGIJNcdI%2By5p%2FAWYn4ii2LHzBxHvnbMazG1xFPLwnqTkddzKzUb9tU%2F0mqlROw6luLZATjDdH%2Fm%2B6r6UnHritjWpCY40CP3ylSseCuap%2Fyam2z1hnJfoNHNXKoZpwqe7iTsONqMtHfM3x88bAWU6RlqZ6JFjr%2B28eQiM9MxtTUirPJC5fEFdvtwUUMGwBRiG8N5NP059OWWjZwm0HZ0FYsqY3Mfw6zKGKdWH3VUWCG7uerLb%2FhpK%2B9i4YkY%2F84AsfE9Y1uMiPCOZkVaqOTWxq16fm7BJNEkY5BOwFexFjMfOW5SKe%2Bzu9fVk1n5jlBI%2FO%2BeHlqX3tykyTIXUj186mEcDMs2cMUsYQyKb2hgdVXWCvh3eG%2F55mdDhBN%2FeapSOnT8kXkeytbRH1y19UqBUqXwC0PCqGC08BZ8Pbltb4TCXtGQspSIvH0iNC64FRnH1%2Fk%2B3%2FloKHMtH1f5If%2BgufN7LrB6X40Y17RfySzjX8lwyqOTwPSDJa%2Fa5BqktxX96sxzRtjq0aQgWgqS%2B5Zyde0W%2BihE8gY8B5VJGMKqBusQGOqUBMsaNzEdTu8vrqSYyBWFwaY8X6L38N03Fhc0yDC6vPyvZg%2BY6JhJ2BSVixZYTLPFrA7%2BnmkXfT%2BZLmfeDSTsL4nxzvAbRG%2BWfBmtxnbSFXwTUpJEN43s2t021MTOz2Or2khRL%2FXm31qmZQ6rxo0EiEMMqIzAQxM0DNQKiHa%2Fy4ls8Zm1ByE%2FSoHOKJ6dvrczz2keyUBu5KrtFHBR7zxN1zWzzfgLf&X-Amz-Signature=8c364d350a7c7785202b1cfb2584440d04f90914c949a9c6d94bc76fe4db328a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
