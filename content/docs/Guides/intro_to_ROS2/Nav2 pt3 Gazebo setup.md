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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQDBYL2%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFrqejAmUR%2B9RlrE7Le4hhJvwDSltHFIhAnbgWLC0R3hAiEAkdZLNNE3ucyNV4ohOSu673C9BMTHBwLELZGaMSLWZNAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJA0Nit8fYXBfMkjTCrcA37A%2FcULGjQKcUGXJOX%2FOVUt56r5mPrDw8SprRq4gvDzKblsLBx9%2BV%2B0Y1p%2BgJKINJwxKQ0Zfjfs3eHMhzSnWrfZ4uCNxXWhVP2TsNkaYqw1R3YhOoxRWw5cj2n9Ied681jgxj%2FvISN4kqH8nhl%2Fz8RjiFBuZD7qz5HraIGK5R8ae0eM4LuHHIQV%2BbQDQlHePzbY%2Bd%2BhU75b1R66MKw10aElIh82ib1mow6IE8ONYnnnwvdLCiWZ610oyurYHuDdcl%2BlOxOKi3jEvTOG2FJyh%2FeQdeTkSanDkIQyCM%2BIaqR8uF8yfd3%2FURHPRL0xhbwwepVYjo8LiOaVpcK7tGArYJfuvYvKa4iPN8Sz4jDaMn5LYEm66i8A6npCKWNQ2u7tmdsS3buBYmd8eNKgSG8QfJVEWQ%2FobIrTDqD3y3rZeTiaVhwkftgNB59YZC71Cju8mnUMcGIPs1hPp18psl9yvn2IuqtNL379k2dnf7CIt%2BpZUsLNQ9h5xeAQ6O88aD%2FkrtocLi4Aser6VWjZ4kA1G0dhY57I3bDnWWlgqiYW76gUAXbpTu4kPuRat5MHXu5v5Uc3pm6Cip4jJv%2FmpshlD3Cf99pNWBtRjFpwiD9hANFlLjT%2BicAtbEnQGEc1MKXa%2FMkGOqUBqgG8hZs8h%2FHqSiyK0jEspQd1mFdkEUii5%2F8gZc%2B8w2VvS3Yof%2F1DmBvC5CeFTIJ0Bf2WouuQpvlGQOvW2I1hNqPUrOYkbjcu5yltxj%2F5rJtfyizdDbT7BB3GYfkCNFBnUhQJIbJY%2BmFq%2FWin%2BpJxkkw9kgX71Gkts6m2Ht46GyQVmzkCzm0b%2FEOmnPJrG3d673I7BM%2Fimy204kCxjyCp8d%2FWpxi6&X-Amz-Signature=eb65a1a1277a590c17f96e97bf81a009626f8359e32722a39b2880372157a8c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQDBYL2%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFrqejAmUR%2B9RlrE7Le4hhJvwDSltHFIhAnbgWLC0R3hAiEAkdZLNNE3ucyNV4ohOSu673C9BMTHBwLELZGaMSLWZNAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJA0Nit8fYXBfMkjTCrcA37A%2FcULGjQKcUGXJOX%2FOVUt56r5mPrDw8SprRq4gvDzKblsLBx9%2BV%2B0Y1p%2BgJKINJwxKQ0Zfjfs3eHMhzSnWrfZ4uCNxXWhVP2TsNkaYqw1R3YhOoxRWw5cj2n9Ied681jgxj%2FvISN4kqH8nhl%2Fz8RjiFBuZD7qz5HraIGK5R8ae0eM4LuHHIQV%2BbQDQlHePzbY%2Bd%2BhU75b1R66MKw10aElIh82ib1mow6IE8ONYnnnwvdLCiWZ610oyurYHuDdcl%2BlOxOKi3jEvTOG2FJyh%2FeQdeTkSanDkIQyCM%2BIaqR8uF8yfd3%2FURHPRL0xhbwwepVYjo8LiOaVpcK7tGArYJfuvYvKa4iPN8Sz4jDaMn5LYEm66i8A6npCKWNQ2u7tmdsS3buBYmd8eNKgSG8QfJVEWQ%2FobIrTDqD3y3rZeTiaVhwkftgNB59YZC71Cju8mnUMcGIPs1hPp18psl9yvn2IuqtNL379k2dnf7CIt%2BpZUsLNQ9h5xeAQ6O88aD%2FkrtocLi4Aser6VWjZ4kA1G0dhY57I3bDnWWlgqiYW76gUAXbpTu4kPuRat5MHXu5v5Uc3pm6Cip4jJv%2FmpshlD3Cf99pNWBtRjFpwiD9hANFlLjT%2BicAtbEnQGEc1MKXa%2FMkGOqUBqgG8hZs8h%2FHqSiyK0jEspQd1mFdkEUii5%2F8gZc%2B8w2VvS3Yof%2F1DmBvC5CeFTIJ0Bf2WouuQpvlGQOvW2I1hNqPUrOYkbjcu5yltxj%2F5rJtfyizdDbT7BB3GYfkCNFBnUhQJIbJY%2BmFq%2FWin%2BpJxkkw9kgX71Gkts6m2Ht46GyQVmzkCzm0b%2FEOmnPJrG3d673I7BM%2Fimy204kCxjyCp8d%2FWpxi6&X-Amz-Signature=c0013acabcf25202f32d3641d9f647a7899bfabf288f924a9e9e0899ca828742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQDBYL2%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFrqejAmUR%2B9RlrE7Le4hhJvwDSltHFIhAnbgWLC0R3hAiEAkdZLNNE3ucyNV4ohOSu673C9BMTHBwLELZGaMSLWZNAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJA0Nit8fYXBfMkjTCrcA37A%2FcULGjQKcUGXJOX%2FOVUt56r5mPrDw8SprRq4gvDzKblsLBx9%2BV%2B0Y1p%2BgJKINJwxKQ0Zfjfs3eHMhzSnWrfZ4uCNxXWhVP2TsNkaYqw1R3YhOoxRWw5cj2n9Ied681jgxj%2FvISN4kqH8nhl%2Fz8RjiFBuZD7qz5HraIGK5R8ae0eM4LuHHIQV%2BbQDQlHePzbY%2Bd%2BhU75b1R66MKw10aElIh82ib1mow6IE8ONYnnnwvdLCiWZ610oyurYHuDdcl%2BlOxOKi3jEvTOG2FJyh%2FeQdeTkSanDkIQyCM%2BIaqR8uF8yfd3%2FURHPRL0xhbwwepVYjo8LiOaVpcK7tGArYJfuvYvKa4iPN8Sz4jDaMn5LYEm66i8A6npCKWNQ2u7tmdsS3buBYmd8eNKgSG8QfJVEWQ%2FobIrTDqD3y3rZeTiaVhwkftgNB59YZC71Cju8mnUMcGIPs1hPp18psl9yvn2IuqtNL379k2dnf7CIt%2BpZUsLNQ9h5xeAQ6O88aD%2FkrtocLi4Aser6VWjZ4kA1G0dhY57I3bDnWWlgqiYW76gUAXbpTu4kPuRat5MHXu5v5Uc3pm6Cip4jJv%2FmpshlD3Cf99pNWBtRjFpwiD9hANFlLjT%2BicAtbEnQGEc1MKXa%2FMkGOqUBqgG8hZs8h%2FHqSiyK0jEspQd1mFdkEUii5%2F8gZc%2B8w2VvS3Yof%2F1DmBvC5CeFTIJ0Bf2WouuQpvlGQOvW2I1hNqPUrOYkbjcu5yltxj%2F5rJtfyizdDbT7BB3GYfkCNFBnUhQJIbJY%2BmFq%2FWin%2BpJxkkw9kgX71Gkts6m2Ht46GyQVmzkCzm0b%2FEOmnPJrG3d673I7BM%2Fimy204kCxjyCp8d%2FWpxi6&X-Amz-Signature=feb9904095f3dcecd82d4e6d42e8177a6ca8f6510dd648aede99ef31b27c100a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQDBYL2%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFrqejAmUR%2B9RlrE7Le4hhJvwDSltHFIhAnbgWLC0R3hAiEAkdZLNNE3ucyNV4ohOSu673C9BMTHBwLELZGaMSLWZNAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJA0Nit8fYXBfMkjTCrcA37A%2FcULGjQKcUGXJOX%2FOVUt56r5mPrDw8SprRq4gvDzKblsLBx9%2BV%2B0Y1p%2BgJKINJwxKQ0Zfjfs3eHMhzSnWrfZ4uCNxXWhVP2TsNkaYqw1R3YhOoxRWw5cj2n9Ied681jgxj%2FvISN4kqH8nhl%2Fz8RjiFBuZD7qz5HraIGK5R8ae0eM4LuHHIQV%2BbQDQlHePzbY%2Bd%2BhU75b1R66MKw10aElIh82ib1mow6IE8ONYnnnwvdLCiWZ610oyurYHuDdcl%2BlOxOKi3jEvTOG2FJyh%2FeQdeTkSanDkIQyCM%2BIaqR8uF8yfd3%2FURHPRL0xhbwwepVYjo8LiOaVpcK7tGArYJfuvYvKa4iPN8Sz4jDaMn5LYEm66i8A6npCKWNQ2u7tmdsS3buBYmd8eNKgSG8QfJVEWQ%2FobIrTDqD3y3rZeTiaVhwkftgNB59YZC71Cju8mnUMcGIPs1hPp18psl9yvn2IuqtNL379k2dnf7CIt%2BpZUsLNQ9h5xeAQ6O88aD%2FkrtocLi4Aser6VWjZ4kA1G0dhY57I3bDnWWlgqiYW76gUAXbpTu4kPuRat5MHXu5v5Uc3pm6Cip4jJv%2FmpshlD3Cf99pNWBtRjFpwiD9hANFlLjT%2BicAtbEnQGEc1MKXa%2FMkGOqUBqgG8hZs8h%2FHqSiyK0jEspQd1mFdkEUii5%2F8gZc%2B8w2VvS3Yof%2F1DmBvC5CeFTIJ0Bf2WouuQpvlGQOvW2I1hNqPUrOYkbjcu5yltxj%2F5rJtfyizdDbT7BB3GYfkCNFBnUhQJIbJY%2BmFq%2FWin%2BpJxkkw9kgX71Gkts6m2Ht46GyQVmzkCzm0b%2FEOmnPJrG3d673I7BM%2Fimy204kCxjyCp8d%2FWpxi6&X-Amz-Signature=d3ecfbf7dc99c8a7f6bb1f95bfa145a6336cd9b63d04f1d19632a4e3214d6780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466553MJDKU%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIA2K4%2FeU9TakjTCcIPAm2EmdUzTHWCwHWPb4egN4CzLkAiEAkTw98U0nhmzgOxGh%2BqOuHWGLeZhSJ1%2FO4j0JOS8o10Aq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGG2puEt%2BKaTLI4QLSrcA%2BX%2FJQOsJ5u8vZbStc04jrWcno%2FmCXJIcAwsT0yh2qC9L60vS710e%2Fao0AMls4Lo2t4sM8vkc%2FmzUHNVWsYx1okyM%2BzW9YRFSgNDJSlK59NTiYZ6gUcxIXpDtOM9RB7vCdz8QOdQ%2FtNpST8cruqn3OIFO8VWztN%2BdMes41Xg4EeauUouqsfNgo8YqMuk6e71YZTip1DNCXk5pc0Y9XzyCnDMAnBXJLCL8WaQm3%2FP3b2tZ7Z4XwV4HPLW76GrUcC6SMZXniNGOGAtuUYHejzt1O56%2FwpQ8oetJWnTB2TPmNEZTsA8wwEBgPb2wzMjN6Y1lMvy%2Blrg4AAcgtSsHuoaq3qZ2ctIo7T0DidMjGTXttRyt9tC5UxMXuTdupr%2FopCsI3un%2FLzo5%2Fe70zW%2F%2BL56OXS5h1A%2F8UaTCzB61aPVBLkbi7CJ5kDm5WvSpklZgKJlG15rzBJ6f071KUn0R1gm9R1qMtqcUJhvbuEwRndMsqp2vRahqM2vAKwi%2BwMQ4fhJWY41%2FTScBpk64Fte589Wu9%2FljxyoBplQFFO8ajt3GNZVlSpc47v2yUAw1UfWig3a47YxeyNrTGzg37oQtrb5SknS7vHk2zKaEaPfyS4FakYHc7YErAqE0ksAzqtUMNLa%2FMkGOqUBOQJcUwzGta0rPZh34a2DWuMcSdrRP9eOIjKBQSSwNwFsT8bQWDZSm%2BhHQlLemKiQKj2IDAauIyvj1K03xy2PCoKuxdURUr6R1s8CIzYG6a8RJBV9URcY7FnjhW%2BNc2RngzfBqI3OaQIbH%2FCYqrN7KrXgWouW7pRVAx0xGxpQL%2FnBwp%2BcgBwLU6Mnjx6v8k79Ww4aW2sJczx0anb7Sl0ODvNgz7M0&X-Amz-Signature=4250c88bcc70b6156d8522de26c6ed5e1c8a4bfa8c066b7f0f5247cbabcaae87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQDBYL2%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFrqejAmUR%2B9RlrE7Le4hhJvwDSltHFIhAnbgWLC0R3hAiEAkdZLNNE3ucyNV4ohOSu673C9BMTHBwLELZGaMSLWZNAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJA0Nit8fYXBfMkjTCrcA37A%2FcULGjQKcUGXJOX%2FOVUt56r5mPrDw8SprRq4gvDzKblsLBx9%2BV%2B0Y1p%2BgJKINJwxKQ0Zfjfs3eHMhzSnWrfZ4uCNxXWhVP2TsNkaYqw1R3YhOoxRWw5cj2n9Ied681jgxj%2FvISN4kqH8nhl%2Fz8RjiFBuZD7qz5HraIGK5R8ae0eM4LuHHIQV%2BbQDQlHePzbY%2Bd%2BhU75b1R66MKw10aElIh82ib1mow6IE8ONYnnnwvdLCiWZ610oyurYHuDdcl%2BlOxOKi3jEvTOG2FJyh%2FeQdeTkSanDkIQyCM%2BIaqR8uF8yfd3%2FURHPRL0xhbwwepVYjo8LiOaVpcK7tGArYJfuvYvKa4iPN8Sz4jDaMn5LYEm66i8A6npCKWNQ2u7tmdsS3buBYmd8eNKgSG8QfJVEWQ%2FobIrTDqD3y3rZeTiaVhwkftgNB59YZC71Cju8mnUMcGIPs1hPp18psl9yvn2IuqtNL379k2dnf7CIt%2BpZUsLNQ9h5xeAQ6O88aD%2FkrtocLi4Aser6VWjZ4kA1G0dhY57I3bDnWWlgqiYW76gUAXbpTu4kPuRat5MHXu5v5Uc3pm6Cip4jJv%2FmpshlD3Cf99pNWBtRjFpwiD9hANFlLjT%2BicAtbEnQGEc1MKXa%2FMkGOqUBqgG8hZs8h%2FHqSiyK0jEspQd1mFdkEUii5%2F8gZc%2B8w2VvS3Yof%2F1DmBvC5CeFTIJ0Bf2WouuQpvlGQOvW2I1hNqPUrOYkbjcu5yltxj%2F5rJtfyizdDbT7BB3GYfkCNFBnUhQJIbJY%2BmFq%2FWin%2BpJxkkw9kgX71Gkts6m2Ht46GyQVmzkCzm0b%2FEOmnPJrG3d673I7BM%2Fimy204kCxjyCp8d%2FWpxi6&X-Amz-Signature=1fd4ebb51efa916233ecaa537f26e37858304dee81d47a218c76b8104e207868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQDBYL2%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFrqejAmUR%2B9RlrE7Le4hhJvwDSltHFIhAnbgWLC0R3hAiEAkdZLNNE3ucyNV4ohOSu673C9BMTHBwLELZGaMSLWZNAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJA0Nit8fYXBfMkjTCrcA37A%2FcULGjQKcUGXJOX%2FOVUt56r5mPrDw8SprRq4gvDzKblsLBx9%2BV%2B0Y1p%2BgJKINJwxKQ0Zfjfs3eHMhzSnWrfZ4uCNxXWhVP2TsNkaYqw1R3YhOoxRWw5cj2n9Ied681jgxj%2FvISN4kqH8nhl%2Fz8RjiFBuZD7qz5HraIGK5R8ae0eM4LuHHIQV%2BbQDQlHePzbY%2Bd%2BhU75b1R66MKw10aElIh82ib1mow6IE8ONYnnnwvdLCiWZ610oyurYHuDdcl%2BlOxOKi3jEvTOG2FJyh%2FeQdeTkSanDkIQyCM%2BIaqR8uF8yfd3%2FURHPRL0xhbwwepVYjo8LiOaVpcK7tGArYJfuvYvKa4iPN8Sz4jDaMn5LYEm66i8A6npCKWNQ2u7tmdsS3buBYmd8eNKgSG8QfJVEWQ%2FobIrTDqD3y3rZeTiaVhwkftgNB59YZC71Cju8mnUMcGIPs1hPp18psl9yvn2IuqtNL379k2dnf7CIt%2BpZUsLNQ9h5xeAQ6O88aD%2FkrtocLi4Aser6VWjZ4kA1G0dhY57I3bDnWWlgqiYW76gUAXbpTu4kPuRat5MHXu5v5Uc3pm6Cip4jJv%2FmpshlD3Cf99pNWBtRjFpwiD9hANFlLjT%2BicAtbEnQGEc1MKXa%2FMkGOqUBqgG8hZs8h%2FHqSiyK0jEspQd1mFdkEUii5%2F8gZc%2B8w2VvS3Yof%2F1DmBvC5CeFTIJ0Bf2WouuQpvlGQOvW2I1hNqPUrOYkbjcu5yltxj%2F5rJtfyizdDbT7BB3GYfkCNFBnUhQJIbJY%2BmFq%2FWin%2BpJxkkw9kgX71Gkts6m2Ht46GyQVmzkCzm0b%2FEOmnPJrG3d673I7BM%2Fimy204kCxjyCp8d%2FWpxi6&X-Amz-Signature=c85ca9ce7c3192a183600e9b202646eb78699fa3c22557a71ef7c63cc51fab81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQDBYL2%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFrqejAmUR%2B9RlrE7Le4hhJvwDSltHFIhAnbgWLC0R3hAiEAkdZLNNE3ucyNV4ohOSu673C9BMTHBwLELZGaMSLWZNAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJA0Nit8fYXBfMkjTCrcA37A%2FcULGjQKcUGXJOX%2FOVUt56r5mPrDw8SprRq4gvDzKblsLBx9%2BV%2B0Y1p%2BgJKINJwxKQ0Zfjfs3eHMhzSnWrfZ4uCNxXWhVP2TsNkaYqw1R3YhOoxRWw5cj2n9Ied681jgxj%2FvISN4kqH8nhl%2Fz8RjiFBuZD7qz5HraIGK5R8ae0eM4LuHHIQV%2BbQDQlHePzbY%2Bd%2BhU75b1R66MKw10aElIh82ib1mow6IE8ONYnnnwvdLCiWZ610oyurYHuDdcl%2BlOxOKi3jEvTOG2FJyh%2FeQdeTkSanDkIQyCM%2BIaqR8uF8yfd3%2FURHPRL0xhbwwepVYjo8LiOaVpcK7tGArYJfuvYvKa4iPN8Sz4jDaMn5LYEm66i8A6npCKWNQ2u7tmdsS3buBYmd8eNKgSG8QfJVEWQ%2FobIrTDqD3y3rZeTiaVhwkftgNB59YZC71Cju8mnUMcGIPs1hPp18psl9yvn2IuqtNL379k2dnf7CIt%2BpZUsLNQ9h5xeAQ6O88aD%2FkrtocLi4Aser6VWjZ4kA1G0dhY57I3bDnWWlgqiYW76gUAXbpTu4kPuRat5MHXu5v5Uc3pm6Cip4jJv%2FmpshlD3Cf99pNWBtRjFpwiD9hANFlLjT%2BicAtbEnQGEc1MKXa%2FMkGOqUBqgG8hZs8h%2FHqSiyK0jEspQd1mFdkEUii5%2F8gZc%2B8w2VvS3Yof%2F1DmBvC5CeFTIJ0Bf2WouuQpvlGQOvW2I1hNqPUrOYkbjcu5yltxj%2F5rJtfyizdDbT7BB3GYfkCNFBnUhQJIbJY%2BmFq%2FWin%2BpJxkkw9kgX71Gkts6m2Ht46GyQVmzkCzm0b%2FEOmnPJrG3d673I7BM%2Fimy204kCxjyCp8d%2FWpxi6&X-Amz-Signature=dede2ee614475cbcc74fc20ebcd257014142d07424a370dd9f2782da1c151626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQDBYL2%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFrqejAmUR%2B9RlrE7Le4hhJvwDSltHFIhAnbgWLC0R3hAiEAkdZLNNE3ucyNV4ohOSu673C9BMTHBwLELZGaMSLWZNAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJA0Nit8fYXBfMkjTCrcA37A%2FcULGjQKcUGXJOX%2FOVUt56r5mPrDw8SprRq4gvDzKblsLBx9%2BV%2B0Y1p%2BgJKINJwxKQ0Zfjfs3eHMhzSnWrfZ4uCNxXWhVP2TsNkaYqw1R3YhOoxRWw5cj2n9Ied681jgxj%2FvISN4kqH8nhl%2Fz8RjiFBuZD7qz5HraIGK5R8ae0eM4LuHHIQV%2BbQDQlHePzbY%2Bd%2BhU75b1R66MKw10aElIh82ib1mow6IE8ONYnnnwvdLCiWZ610oyurYHuDdcl%2BlOxOKi3jEvTOG2FJyh%2FeQdeTkSanDkIQyCM%2BIaqR8uF8yfd3%2FURHPRL0xhbwwepVYjo8LiOaVpcK7tGArYJfuvYvKa4iPN8Sz4jDaMn5LYEm66i8A6npCKWNQ2u7tmdsS3buBYmd8eNKgSG8QfJVEWQ%2FobIrTDqD3y3rZeTiaVhwkftgNB59YZC71Cju8mnUMcGIPs1hPp18psl9yvn2IuqtNL379k2dnf7CIt%2BpZUsLNQ9h5xeAQ6O88aD%2FkrtocLi4Aser6VWjZ4kA1G0dhY57I3bDnWWlgqiYW76gUAXbpTu4kPuRat5MHXu5v5Uc3pm6Cip4jJv%2FmpshlD3Cf99pNWBtRjFpwiD9hANFlLjT%2BicAtbEnQGEc1MKXa%2FMkGOqUBqgG8hZs8h%2FHqSiyK0jEspQd1mFdkEUii5%2F8gZc%2B8w2VvS3Yof%2F1DmBvC5CeFTIJ0Bf2WouuQpvlGQOvW2I1hNqPUrOYkbjcu5yltxj%2F5rJtfyizdDbT7BB3GYfkCNFBnUhQJIbJY%2BmFq%2FWin%2BpJxkkw9kgX71Gkts6m2Ht46GyQVmzkCzm0b%2FEOmnPJrG3d673I7BM%2Fimy204kCxjyCp8d%2FWpxi6&X-Amz-Signature=40a332b956f6d6bf50ccba679683519caaf08fe78254a48b24052732289116dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQDBYL2%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFrqejAmUR%2B9RlrE7Le4hhJvwDSltHFIhAnbgWLC0R3hAiEAkdZLNNE3ucyNV4ohOSu673C9BMTHBwLELZGaMSLWZNAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJA0Nit8fYXBfMkjTCrcA37A%2FcULGjQKcUGXJOX%2FOVUt56r5mPrDw8SprRq4gvDzKblsLBx9%2BV%2B0Y1p%2BgJKINJwxKQ0Zfjfs3eHMhzSnWrfZ4uCNxXWhVP2TsNkaYqw1R3YhOoxRWw5cj2n9Ied681jgxj%2FvISN4kqH8nhl%2Fz8RjiFBuZD7qz5HraIGK5R8ae0eM4LuHHIQV%2BbQDQlHePzbY%2Bd%2BhU75b1R66MKw10aElIh82ib1mow6IE8ONYnnnwvdLCiWZ610oyurYHuDdcl%2BlOxOKi3jEvTOG2FJyh%2FeQdeTkSanDkIQyCM%2BIaqR8uF8yfd3%2FURHPRL0xhbwwepVYjo8LiOaVpcK7tGArYJfuvYvKa4iPN8Sz4jDaMn5LYEm66i8A6npCKWNQ2u7tmdsS3buBYmd8eNKgSG8QfJVEWQ%2FobIrTDqD3y3rZeTiaVhwkftgNB59YZC71Cju8mnUMcGIPs1hPp18psl9yvn2IuqtNL379k2dnf7CIt%2BpZUsLNQ9h5xeAQ6O88aD%2FkrtocLi4Aser6VWjZ4kA1G0dhY57I3bDnWWlgqiYW76gUAXbpTu4kPuRat5MHXu5v5Uc3pm6Cip4jJv%2FmpshlD3Cf99pNWBtRjFpwiD9hANFlLjT%2BicAtbEnQGEc1MKXa%2FMkGOqUBqgG8hZs8h%2FHqSiyK0jEspQd1mFdkEUii5%2F8gZc%2B8w2VvS3Yof%2F1DmBvC5CeFTIJ0Bf2WouuQpvlGQOvW2I1hNqPUrOYkbjcu5yltxj%2F5rJtfyizdDbT7BB3GYfkCNFBnUhQJIbJY%2BmFq%2FWin%2BpJxkkw9kgX71Gkts6m2Ht46GyQVmzkCzm0b%2FEOmnPJrG3d673I7BM%2Fimy204kCxjyCp8d%2FWpxi6&X-Amz-Signature=fbbb8dd29e527da6bc9c2587a5c90d152f8675aab0c36871f6c4e0b6e0c21d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQDBYL2%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFrqejAmUR%2B9RlrE7Le4hhJvwDSltHFIhAnbgWLC0R3hAiEAkdZLNNE3ucyNV4ohOSu673C9BMTHBwLELZGaMSLWZNAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJA0Nit8fYXBfMkjTCrcA37A%2FcULGjQKcUGXJOX%2FOVUt56r5mPrDw8SprRq4gvDzKblsLBx9%2BV%2B0Y1p%2BgJKINJwxKQ0Zfjfs3eHMhzSnWrfZ4uCNxXWhVP2TsNkaYqw1R3YhOoxRWw5cj2n9Ied681jgxj%2FvISN4kqH8nhl%2Fz8RjiFBuZD7qz5HraIGK5R8ae0eM4LuHHIQV%2BbQDQlHePzbY%2Bd%2BhU75b1R66MKw10aElIh82ib1mow6IE8ONYnnnwvdLCiWZ610oyurYHuDdcl%2BlOxOKi3jEvTOG2FJyh%2FeQdeTkSanDkIQyCM%2BIaqR8uF8yfd3%2FURHPRL0xhbwwepVYjo8LiOaVpcK7tGArYJfuvYvKa4iPN8Sz4jDaMn5LYEm66i8A6npCKWNQ2u7tmdsS3buBYmd8eNKgSG8QfJVEWQ%2FobIrTDqD3y3rZeTiaVhwkftgNB59YZC71Cju8mnUMcGIPs1hPp18psl9yvn2IuqtNL379k2dnf7CIt%2BpZUsLNQ9h5xeAQ6O88aD%2FkrtocLi4Aser6VWjZ4kA1G0dhY57I3bDnWWlgqiYW76gUAXbpTu4kPuRat5MHXu5v5Uc3pm6Cip4jJv%2FmpshlD3Cf99pNWBtRjFpwiD9hANFlLjT%2BicAtbEnQGEc1MKXa%2FMkGOqUBqgG8hZs8h%2FHqSiyK0jEspQd1mFdkEUii5%2F8gZc%2B8w2VvS3Yof%2F1DmBvC5CeFTIJ0Bf2WouuQpvlGQOvW2I1hNqPUrOYkbjcu5yltxj%2F5rJtfyizdDbT7BB3GYfkCNFBnUhQJIbJY%2BmFq%2FWin%2BpJxkkw9kgX71Gkts6m2Ht46GyQVmzkCzm0b%2FEOmnPJrG3d673I7BM%2Fimy204kCxjyCp8d%2FWpxi6&X-Amz-Signature=c677bce2293e92137acc308bc1b74dde45e7da032a458d1f2cc10751475bd165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO: add code

</details>


