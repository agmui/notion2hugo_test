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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMBLCMG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFCvORJOKAExkCLSnVJHmWiJpNGUeI59yuuDRT3JJGqcAiAWf7gRFl4YLKNgyYc88695q4JgZd6yWeYn8A6DS0fymSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaG1%2Fm4IVUbjFmPriKtwDZ6xcrcoT0e3YNuLx8Xyk8Wq8GNw7OSSF3BkE%2BwqBOnETcEVOj9I6svTwbQOd%2FwcMJtBWDkiC4hOwpaKAsm8ZD7oQUweSnaQLjBgENyp1WHsvEdBxpAMDfoChQzyddWYCaxve7bgDoCCxx%2BLbPlAHLoLns2uEvH3FnnrMvLau7xwKEKUP1eS7UeCLb5zkWdI9HZ6ypTUmIn2hAtqSidu6J6vBaDYky56TA3UFWUsxez1yKtoHCvHnKu60UtMZwtQSKFydhnHkQ9cNbuDyR1P4LiRksils4yPJVCUGPHhJniZVr9x2srYrTDAxhMhX7JzbnACi00h7ZP8hI5o52FAoPg%2FkXbITILKoIUtt5x%2BFq%2BkVrfSWM7OzLizROvcwiLyyd22pvDq4G0VNpHChHxcmRqmEjlt0lf4v8Wh7KvOrDyV3bv8h00QSewbcLmNgVfsPkszAPe1vs2wraGI276arHuP4IG9Rn5joQlBxM6eX7i9aI%2FewNHvZiLLcjt0HQDbTKJpYppopvpndkZWRDlSM67SpRO4VpKWrkYunNhjRQFwKn9ryEFHpQqr%2Fm49FPU5wuvwr8U0xrI%2BV9%2FL1bpAiDoHb5GDrktCns4WhG6e5xhRSPCRROMcj5O1jmZ8wn7XRxAY6pgG5Yu1AQMTrzSAk2I1X6%2F6DcZwrKic3A0cA4my47EZQA2tFZ1dhWnpYR20uON6Rpag9ORN7chslBuLrD90oG9%2FXTlzhOnl1OZw%2Bjo0BezLMrWQ2O%2Fry3rr6tCWkV8occ98WbtxaFxMwMEBFyhRyU%2Fa8N4KJM12Tf6HDZZVAzY9vsVUpyxKmKcsmtzX9ezDJFiKk9wVO8qBR7P1Y36fJ49MfJMkSLLVn&X-Amz-Signature=a68874c54c77281b0331a2b643d749a8d721262cb21789c7b6d3820e2965b56d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMBLCMG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFCvORJOKAExkCLSnVJHmWiJpNGUeI59yuuDRT3JJGqcAiAWf7gRFl4YLKNgyYc88695q4JgZd6yWeYn8A6DS0fymSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaG1%2Fm4IVUbjFmPriKtwDZ6xcrcoT0e3YNuLx8Xyk8Wq8GNw7OSSF3BkE%2BwqBOnETcEVOj9I6svTwbQOd%2FwcMJtBWDkiC4hOwpaKAsm8ZD7oQUweSnaQLjBgENyp1WHsvEdBxpAMDfoChQzyddWYCaxve7bgDoCCxx%2BLbPlAHLoLns2uEvH3FnnrMvLau7xwKEKUP1eS7UeCLb5zkWdI9HZ6ypTUmIn2hAtqSidu6J6vBaDYky56TA3UFWUsxez1yKtoHCvHnKu60UtMZwtQSKFydhnHkQ9cNbuDyR1P4LiRksils4yPJVCUGPHhJniZVr9x2srYrTDAxhMhX7JzbnACi00h7ZP8hI5o52FAoPg%2FkXbITILKoIUtt5x%2BFq%2BkVrfSWM7OzLizROvcwiLyyd22pvDq4G0VNpHChHxcmRqmEjlt0lf4v8Wh7KvOrDyV3bv8h00QSewbcLmNgVfsPkszAPe1vs2wraGI276arHuP4IG9Rn5joQlBxM6eX7i9aI%2FewNHvZiLLcjt0HQDbTKJpYppopvpndkZWRDlSM67SpRO4VpKWrkYunNhjRQFwKn9ryEFHpQqr%2Fm49FPU5wuvwr8U0xrI%2BV9%2FL1bpAiDoHb5GDrktCns4WhG6e5xhRSPCRROMcj5O1jmZ8wn7XRxAY6pgG5Yu1AQMTrzSAk2I1X6%2F6DcZwrKic3A0cA4my47EZQA2tFZ1dhWnpYR20uON6Rpag9ORN7chslBuLrD90oG9%2FXTlzhOnl1OZw%2Bjo0BezLMrWQ2O%2Fry3rr6tCWkV8occ98WbtxaFxMwMEBFyhRyU%2Fa8N4KJM12Tf6HDZZVAzY9vsVUpyxKmKcsmtzX9ezDJFiKk9wVO8qBR7P1Y36fJ49MfJMkSLLVn&X-Amz-Signature=ba297d6eb90310e97dd1cd3db35082c53bea1e91f241d8c8db9c24d2e7130ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMBLCMG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFCvORJOKAExkCLSnVJHmWiJpNGUeI59yuuDRT3JJGqcAiAWf7gRFl4YLKNgyYc88695q4JgZd6yWeYn8A6DS0fymSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaG1%2Fm4IVUbjFmPriKtwDZ6xcrcoT0e3YNuLx8Xyk8Wq8GNw7OSSF3BkE%2BwqBOnETcEVOj9I6svTwbQOd%2FwcMJtBWDkiC4hOwpaKAsm8ZD7oQUweSnaQLjBgENyp1WHsvEdBxpAMDfoChQzyddWYCaxve7bgDoCCxx%2BLbPlAHLoLns2uEvH3FnnrMvLau7xwKEKUP1eS7UeCLb5zkWdI9HZ6ypTUmIn2hAtqSidu6J6vBaDYky56TA3UFWUsxez1yKtoHCvHnKu60UtMZwtQSKFydhnHkQ9cNbuDyR1P4LiRksils4yPJVCUGPHhJniZVr9x2srYrTDAxhMhX7JzbnACi00h7ZP8hI5o52FAoPg%2FkXbITILKoIUtt5x%2BFq%2BkVrfSWM7OzLizROvcwiLyyd22pvDq4G0VNpHChHxcmRqmEjlt0lf4v8Wh7KvOrDyV3bv8h00QSewbcLmNgVfsPkszAPe1vs2wraGI276arHuP4IG9Rn5joQlBxM6eX7i9aI%2FewNHvZiLLcjt0HQDbTKJpYppopvpndkZWRDlSM67SpRO4VpKWrkYunNhjRQFwKn9ryEFHpQqr%2Fm49FPU5wuvwr8U0xrI%2BV9%2FL1bpAiDoHb5GDrktCns4WhG6e5xhRSPCRROMcj5O1jmZ8wn7XRxAY6pgG5Yu1AQMTrzSAk2I1X6%2F6DcZwrKic3A0cA4my47EZQA2tFZ1dhWnpYR20uON6Rpag9ORN7chslBuLrD90oG9%2FXTlzhOnl1OZw%2Bjo0BezLMrWQ2O%2Fry3rr6tCWkV8occ98WbtxaFxMwMEBFyhRyU%2Fa8N4KJM12Tf6HDZZVAzY9vsVUpyxKmKcsmtzX9ezDJFiKk9wVO8qBR7P1Y36fJ49MfJMkSLLVn&X-Amz-Signature=d24fd5dc0731e0bdc0ed4a8eb84dad1aad967a0c84a1b7268ed06836b4a2c4f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMBLCMG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFCvORJOKAExkCLSnVJHmWiJpNGUeI59yuuDRT3JJGqcAiAWf7gRFl4YLKNgyYc88695q4JgZd6yWeYn8A6DS0fymSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaG1%2Fm4IVUbjFmPriKtwDZ6xcrcoT0e3YNuLx8Xyk8Wq8GNw7OSSF3BkE%2BwqBOnETcEVOj9I6svTwbQOd%2FwcMJtBWDkiC4hOwpaKAsm8ZD7oQUweSnaQLjBgENyp1WHsvEdBxpAMDfoChQzyddWYCaxve7bgDoCCxx%2BLbPlAHLoLns2uEvH3FnnrMvLau7xwKEKUP1eS7UeCLb5zkWdI9HZ6ypTUmIn2hAtqSidu6J6vBaDYky56TA3UFWUsxez1yKtoHCvHnKu60UtMZwtQSKFydhnHkQ9cNbuDyR1P4LiRksils4yPJVCUGPHhJniZVr9x2srYrTDAxhMhX7JzbnACi00h7ZP8hI5o52FAoPg%2FkXbITILKoIUtt5x%2BFq%2BkVrfSWM7OzLizROvcwiLyyd22pvDq4G0VNpHChHxcmRqmEjlt0lf4v8Wh7KvOrDyV3bv8h00QSewbcLmNgVfsPkszAPe1vs2wraGI276arHuP4IG9Rn5joQlBxM6eX7i9aI%2FewNHvZiLLcjt0HQDbTKJpYppopvpndkZWRDlSM67SpRO4VpKWrkYunNhjRQFwKn9ryEFHpQqr%2Fm49FPU5wuvwr8U0xrI%2BV9%2FL1bpAiDoHb5GDrktCns4WhG6e5xhRSPCRROMcj5O1jmZ8wn7XRxAY6pgG5Yu1AQMTrzSAk2I1X6%2F6DcZwrKic3A0cA4my47EZQA2tFZ1dhWnpYR20uON6Rpag9ORN7chslBuLrD90oG9%2FXTlzhOnl1OZw%2Bjo0BezLMrWQ2O%2Fry3rr6tCWkV8occ98WbtxaFxMwMEBFyhRyU%2Fa8N4KJM12Tf6HDZZVAzY9vsVUpyxKmKcsmtzX9ezDJFiKk9wVO8qBR7P1Y36fJ49MfJMkSLLVn&X-Amz-Signature=4c91147d686ad8d7b36171e5bfe0acf42f4c97eaac2a08fee044f891b0eb0f2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FB7K4ZA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDce1ssn8T0AYKrp4GJfddWMVVH%2F1JioWqmjt3%2BSHJOjQIhAI8n86qN5QHl26aavWZeRCWm6KgQyBI1wz2cb3Cp7ZkAKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMdzJxwffrUcrQ3fsq3AMYP8x1MwBgF5Y%2FrbxU6lGGO6cggev%2BRhNy%2Foh4hjUhC0NEQ%2Fk%2FTWvu7MquQ%2BFrLQ2OSQ%2B5DyXE7%2BiRetBKyMw9bzVfhfWO95Xn00rFw%2BZdpYHEUBfx1%2FaxOpaQ%2FgHxW%2Fdu%2B47mcA7bso9NW%2Bl%2FSglzXfSgJRxiGuIm5yU2bVqC7de7t%2Bvk1ALoBkPmNGOzzy2qo%2F3kclKmTUcR0TYkMuxGPq3yOPl3qpEGSCgS9AW5cCVNtFqeWH%2B4JD9nr4HNFnKRD6z3DC7NUQlFUWfdXrk3SyzX0uEgNJXnG2HD3dLTGx8vZ7j7eZ7hNeQsn9py4tr5SHW%2FfCflO2wglnEzf0KUB40ssyrzDb9kuYX0fTfvuQRQx7fx2sLDEUcF9s8N4pvSBHy1HCa5hukcTB0E%2ByN2HmkJj0Tgwcp6Xi3DwTvecEAGheZv8txFOTPR9ec0yrn2nvmfGgJn34izDC%2FSAfcBpZVubRtZWWq3xP9IhqnQntsTLjSqD5LkIuGxPMBrQQiS%2FBjH%2BVVUTONEOjuGTl0X0VLfe8x%2FjJ3EFwIlxJxmrKiKkvcKhDxccT7x1o8DF2mEARBTW1QgjbesB4N6fPBo25j%2FIOQCtm5tKtAZFK0azkfdGLde1sYpJ7%2BqTDDPtNHEBjqkAdJug2KbXah7qR7eRIHzmYeyUmqnSDhc5EbFlsh5yGtjBzpl9knwTJGsqBKPbLgPFVqdJTWY5OV1NSK3WH02gI2ecAolMV7NxOJbAkimg5f973SS4R0oDGpTJFhNqk1uwxKrzAXUQcn372py9qObEqeidOF2OWhD5du70tZM9xzJK3HAELMt1qnkgWAmbJi4q39jDxlQs38fktkYOXTn98T79%2F%2Bz&X-Amz-Signature=a66ba254641cb64646f51b2a5300efc1ce4432ba908fa70e9a27eca0c3aacaa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMBLCMG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFCvORJOKAExkCLSnVJHmWiJpNGUeI59yuuDRT3JJGqcAiAWf7gRFl4YLKNgyYc88695q4JgZd6yWeYn8A6DS0fymSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaG1%2Fm4IVUbjFmPriKtwDZ6xcrcoT0e3YNuLx8Xyk8Wq8GNw7OSSF3BkE%2BwqBOnETcEVOj9I6svTwbQOd%2FwcMJtBWDkiC4hOwpaKAsm8ZD7oQUweSnaQLjBgENyp1WHsvEdBxpAMDfoChQzyddWYCaxve7bgDoCCxx%2BLbPlAHLoLns2uEvH3FnnrMvLau7xwKEKUP1eS7UeCLb5zkWdI9HZ6ypTUmIn2hAtqSidu6J6vBaDYky56TA3UFWUsxez1yKtoHCvHnKu60UtMZwtQSKFydhnHkQ9cNbuDyR1P4LiRksils4yPJVCUGPHhJniZVr9x2srYrTDAxhMhX7JzbnACi00h7ZP8hI5o52FAoPg%2FkXbITILKoIUtt5x%2BFq%2BkVrfSWM7OzLizROvcwiLyyd22pvDq4G0VNpHChHxcmRqmEjlt0lf4v8Wh7KvOrDyV3bv8h00QSewbcLmNgVfsPkszAPe1vs2wraGI276arHuP4IG9Rn5joQlBxM6eX7i9aI%2FewNHvZiLLcjt0HQDbTKJpYppopvpndkZWRDlSM67SpRO4VpKWrkYunNhjRQFwKn9ryEFHpQqr%2Fm49FPU5wuvwr8U0xrI%2BV9%2FL1bpAiDoHb5GDrktCns4WhG6e5xhRSPCRROMcj5O1jmZ8wn7XRxAY6pgG5Yu1AQMTrzSAk2I1X6%2F6DcZwrKic3A0cA4my47EZQA2tFZ1dhWnpYR20uON6Rpag9ORN7chslBuLrD90oG9%2FXTlzhOnl1OZw%2Bjo0BezLMrWQ2O%2Fry3rr6tCWkV8occ98WbtxaFxMwMEBFyhRyU%2Fa8N4KJM12Tf6HDZZVAzY9vsVUpyxKmKcsmtzX9ezDJFiKk9wVO8qBR7P1Y36fJ49MfJMkSLLVn&X-Amz-Signature=637117cf97390a252ee28c48dfd30ca046b79c25cb7f4ca67daea5cf05b5c31e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMBLCMG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFCvORJOKAExkCLSnVJHmWiJpNGUeI59yuuDRT3JJGqcAiAWf7gRFl4YLKNgyYc88695q4JgZd6yWeYn8A6DS0fymSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaG1%2Fm4IVUbjFmPriKtwDZ6xcrcoT0e3YNuLx8Xyk8Wq8GNw7OSSF3BkE%2BwqBOnETcEVOj9I6svTwbQOd%2FwcMJtBWDkiC4hOwpaKAsm8ZD7oQUweSnaQLjBgENyp1WHsvEdBxpAMDfoChQzyddWYCaxve7bgDoCCxx%2BLbPlAHLoLns2uEvH3FnnrMvLau7xwKEKUP1eS7UeCLb5zkWdI9HZ6ypTUmIn2hAtqSidu6J6vBaDYky56TA3UFWUsxez1yKtoHCvHnKu60UtMZwtQSKFydhnHkQ9cNbuDyR1P4LiRksils4yPJVCUGPHhJniZVr9x2srYrTDAxhMhX7JzbnACi00h7ZP8hI5o52FAoPg%2FkXbITILKoIUtt5x%2BFq%2BkVrfSWM7OzLizROvcwiLyyd22pvDq4G0VNpHChHxcmRqmEjlt0lf4v8Wh7KvOrDyV3bv8h00QSewbcLmNgVfsPkszAPe1vs2wraGI276arHuP4IG9Rn5joQlBxM6eX7i9aI%2FewNHvZiLLcjt0HQDbTKJpYppopvpndkZWRDlSM67SpRO4VpKWrkYunNhjRQFwKn9ryEFHpQqr%2Fm49FPU5wuvwr8U0xrI%2BV9%2FL1bpAiDoHb5GDrktCns4WhG6e5xhRSPCRROMcj5O1jmZ8wn7XRxAY6pgG5Yu1AQMTrzSAk2I1X6%2F6DcZwrKic3A0cA4my47EZQA2tFZ1dhWnpYR20uON6Rpag9ORN7chslBuLrD90oG9%2FXTlzhOnl1OZw%2Bjo0BezLMrWQ2O%2Fry3rr6tCWkV8occ98WbtxaFxMwMEBFyhRyU%2Fa8N4KJM12Tf6HDZZVAzY9vsVUpyxKmKcsmtzX9ezDJFiKk9wVO8qBR7P1Y36fJ49MfJMkSLLVn&X-Amz-Signature=c4aca1c7a06ec8a3122ee18dbe922214bf2b83f010a8548fad0fb8577ccf5e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMBLCMG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFCvORJOKAExkCLSnVJHmWiJpNGUeI59yuuDRT3JJGqcAiAWf7gRFl4YLKNgyYc88695q4JgZd6yWeYn8A6DS0fymSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaG1%2Fm4IVUbjFmPriKtwDZ6xcrcoT0e3YNuLx8Xyk8Wq8GNw7OSSF3BkE%2BwqBOnETcEVOj9I6svTwbQOd%2FwcMJtBWDkiC4hOwpaKAsm8ZD7oQUweSnaQLjBgENyp1WHsvEdBxpAMDfoChQzyddWYCaxve7bgDoCCxx%2BLbPlAHLoLns2uEvH3FnnrMvLau7xwKEKUP1eS7UeCLb5zkWdI9HZ6ypTUmIn2hAtqSidu6J6vBaDYky56TA3UFWUsxez1yKtoHCvHnKu60UtMZwtQSKFydhnHkQ9cNbuDyR1P4LiRksils4yPJVCUGPHhJniZVr9x2srYrTDAxhMhX7JzbnACi00h7ZP8hI5o52FAoPg%2FkXbITILKoIUtt5x%2BFq%2BkVrfSWM7OzLizROvcwiLyyd22pvDq4G0VNpHChHxcmRqmEjlt0lf4v8Wh7KvOrDyV3bv8h00QSewbcLmNgVfsPkszAPe1vs2wraGI276arHuP4IG9Rn5joQlBxM6eX7i9aI%2FewNHvZiLLcjt0HQDbTKJpYppopvpndkZWRDlSM67SpRO4VpKWrkYunNhjRQFwKn9ryEFHpQqr%2Fm49FPU5wuvwr8U0xrI%2BV9%2FL1bpAiDoHb5GDrktCns4WhG6e5xhRSPCRROMcj5O1jmZ8wn7XRxAY6pgG5Yu1AQMTrzSAk2I1X6%2F6DcZwrKic3A0cA4my47EZQA2tFZ1dhWnpYR20uON6Rpag9ORN7chslBuLrD90oG9%2FXTlzhOnl1OZw%2Bjo0BezLMrWQ2O%2Fry3rr6tCWkV8occ98WbtxaFxMwMEBFyhRyU%2Fa8N4KJM12Tf6HDZZVAzY9vsVUpyxKmKcsmtzX9ezDJFiKk9wVO8qBR7P1Y36fJ49MfJMkSLLVn&X-Amz-Signature=da584edda5aaef56d53f88f7988eb03ae644eb38fd54ac3d86416244dd1cd638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMBLCMG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFCvORJOKAExkCLSnVJHmWiJpNGUeI59yuuDRT3JJGqcAiAWf7gRFl4YLKNgyYc88695q4JgZd6yWeYn8A6DS0fymSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaG1%2Fm4IVUbjFmPriKtwDZ6xcrcoT0e3YNuLx8Xyk8Wq8GNw7OSSF3BkE%2BwqBOnETcEVOj9I6svTwbQOd%2FwcMJtBWDkiC4hOwpaKAsm8ZD7oQUweSnaQLjBgENyp1WHsvEdBxpAMDfoChQzyddWYCaxve7bgDoCCxx%2BLbPlAHLoLns2uEvH3FnnrMvLau7xwKEKUP1eS7UeCLb5zkWdI9HZ6ypTUmIn2hAtqSidu6J6vBaDYky56TA3UFWUsxez1yKtoHCvHnKu60UtMZwtQSKFydhnHkQ9cNbuDyR1P4LiRksils4yPJVCUGPHhJniZVr9x2srYrTDAxhMhX7JzbnACi00h7ZP8hI5o52FAoPg%2FkXbITILKoIUtt5x%2BFq%2BkVrfSWM7OzLizROvcwiLyyd22pvDq4G0VNpHChHxcmRqmEjlt0lf4v8Wh7KvOrDyV3bv8h00QSewbcLmNgVfsPkszAPe1vs2wraGI276arHuP4IG9Rn5joQlBxM6eX7i9aI%2FewNHvZiLLcjt0HQDbTKJpYppopvpndkZWRDlSM67SpRO4VpKWrkYunNhjRQFwKn9ryEFHpQqr%2Fm49FPU5wuvwr8U0xrI%2BV9%2FL1bpAiDoHb5GDrktCns4WhG6e5xhRSPCRROMcj5O1jmZ8wn7XRxAY6pgG5Yu1AQMTrzSAk2I1X6%2F6DcZwrKic3A0cA4my47EZQA2tFZ1dhWnpYR20uON6Rpag9ORN7chslBuLrD90oG9%2FXTlzhOnl1OZw%2Bjo0BezLMrWQ2O%2Fry3rr6tCWkV8occ98WbtxaFxMwMEBFyhRyU%2Fa8N4KJM12Tf6HDZZVAzY9vsVUpyxKmKcsmtzX9ezDJFiKk9wVO8qBR7P1Y36fJ49MfJMkSLLVn&X-Amz-Signature=6880f995dfa340f738981547bafd2c8b4950e0588680678afb7ddab241048d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMBLCMG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFCvORJOKAExkCLSnVJHmWiJpNGUeI59yuuDRT3JJGqcAiAWf7gRFl4YLKNgyYc88695q4JgZd6yWeYn8A6DS0fymSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaG1%2Fm4IVUbjFmPriKtwDZ6xcrcoT0e3YNuLx8Xyk8Wq8GNw7OSSF3BkE%2BwqBOnETcEVOj9I6svTwbQOd%2FwcMJtBWDkiC4hOwpaKAsm8ZD7oQUweSnaQLjBgENyp1WHsvEdBxpAMDfoChQzyddWYCaxve7bgDoCCxx%2BLbPlAHLoLns2uEvH3FnnrMvLau7xwKEKUP1eS7UeCLb5zkWdI9HZ6ypTUmIn2hAtqSidu6J6vBaDYky56TA3UFWUsxez1yKtoHCvHnKu60UtMZwtQSKFydhnHkQ9cNbuDyR1P4LiRksils4yPJVCUGPHhJniZVr9x2srYrTDAxhMhX7JzbnACi00h7ZP8hI5o52FAoPg%2FkXbITILKoIUtt5x%2BFq%2BkVrfSWM7OzLizROvcwiLyyd22pvDq4G0VNpHChHxcmRqmEjlt0lf4v8Wh7KvOrDyV3bv8h00QSewbcLmNgVfsPkszAPe1vs2wraGI276arHuP4IG9Rn5joQlBxM6eX7i9aI%2FewNHvZiLLcjt0HQDbTKJpYppopvpndkZWRDlSM67SpRO4VpKWrkYunNhjRQFwKn9ryEFHpQqr%2Fm49FPU5wuvwr8U0xrI%2BV9%2FL1bpAiDoHb5GDrktCns4WhG6e5xhRSPCRROMcj5O1jmZ8wn7XRxAY6pgG5Yu1AQMTrzSAk2I1X6%2F6DcZwrKic3A0cA4my47EZQA2tFZ1dhWnpYR20uON6Rpag9ORN7chslBuLrD90oG9%2FXTlzhOnl1OZw%2Bjo0BezLMrWQ2O%2Fry3rr6tCWkV8occ98WbtxaFxMwMEBFyhRyU%2Fa8N4KJM12Tf6HDZZVAzY9vsVUpyxKmKcsmtzX9ezDJFiKk9wVO8qBR7P1Y36fJ49MfJMkSLLVn&X-Amz-Signature=bfcccc992649fa00021b409fd92f23d4ba2a9fdc926d2a24bf48ace167f30ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMBLCMG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFCvORJOKAExkCLSnVJHmWiJpNGUeI59yuuDRT3JJGqcAiAWf7gRFl4YLKNgyYc88695q4JgZd6yWeYn8A6DS0fymSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaG1%2Fm4IVUbjFmPriKtwDZ6xcrcoT0e3YNuLx8Xyk8Wq8GNw7OSSF3BkE%2BwqBOnETcEVOj9I6svTwbQOd%2FwcMJtBWDkiC4hOwpaKAsm8ZD7oQUweSnaQLjBgENyp1WHsvEdBxpAMDfoChQzyddWYCaxve7bgDoCCxx%2BLbPlAHLoLns2uEvH3FnnrMvLau7xwKEKUP1eS7UeCLb5zkWdI9HZ6ypTUmIn2hAtqSidu6J6vBaDYky56TA3UFWUsxez1yKtoHCvHnKu60UtMZwtQSKFydhnHkQ9cNbuDyR1P4LiRksils4yPJVCUGPHhJniZVr9x2srYrTDAxhMhX7JzbnACi00h7ZP8hI5o52FAoPg%2FkXbITILKoIUtt5x%2BFq%2BkVrfSWM7OzLizROvcwiLyyd22pvDq4G0VNpHChHxcmRqmEjlt0lf4v8Wh7KvOrDyV3bv8h00QSewbcLmNgVfsPkszAPe1vs2wraGI276arHuP4IG9Rn5joQlBxM6eX7i9aI%2FewNHvZiLLcjt0HQDbTKJpYppopvpndkZWRDlSM67SpRO4VpKWrkYunNhjRQFwKn9ryEFHpQqr%2Fm49FPU5wuvwr8U0xrI%2BV9%2FL1bpAiDoHb5GDrktCns4WhG6e5xhRSPCRROMcj5O1jmZ8wn7XRxAY6pgG5Yu1AQMTrzSAk2I1X6%2F6DcZwrKic3A0cA4my47EZQA2tFZ1dhWnpYR20uON6Rpag9ORN7chslBuLrD90oG9%2FXTlzhOnl1OZw%2Bjo0BezLMrWQ2O%2Fry3rr6tCWkV8occ98WbtxaFxMwMEBFyhRyU%2Fa8N4KJM12Tf6HDZZVAzY9vsVUpyxKmKcsmtzX9ezDJFiKk9wVO8qBR7P1Y36fJ49MfJMkSLLVn&X-Amz-Signature=b6cbc533a06077cf74ca54432640fe2430abfcae0406b881db55f3a6b7636e70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
