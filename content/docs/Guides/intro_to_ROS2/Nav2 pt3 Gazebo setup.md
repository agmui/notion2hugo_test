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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7cf4a1a2-11e8-4d21-b754-3ceb4cfa2973/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSX7LBWC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIFbYduAfqkVZTGdPbrdFzUo7kSDQ4z7nQ7zyg%2FTOwjVkAiEAtOS6EcGEbQyGq6bwqVQbBix88Gt2ML5o6L2TUh8ljTkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNtDaamgyif8kNc6ircA24nvy5ApA5NACe%2FF7QYugPgPm9fJ3Oa62VQ7j9lG0Vdb3eTbACQ5GvR3onI9AMN0MXDpaobBP7%2FkFMCMqLZPHs%2F84%2B1vtCTb3FBdrjYWYf6bP085Mnk0ett%2FRtl%2FqbITZqN8HMOr3XesbO665%2F9rSYmZSYsICDwT6rLOjPuYeCpZL7AYV2N%2FnId3JSXzbhgJWv0Z0j7OCR8G6FHiyeCf%2Fy7wOaYCCk5%2Bg21igZi4264Y9nxmaRwuhbunGYj1w3W9FKaY%2FLVHygVyg8389HaX3g%2F4TDWIp3HEwZpimzLiScZN1PQEBWCeHb6LuKvmXd1czZQXRUwPM53BEYb7cwhqUVhSqWfFHsu%2B4Qry9FB7cTi5a3ctWAEZzawuk3Jat3q85abrC7Ka8CdqPIIkZqssqEz%2BpCx8A4Qlgp%2Bs0AYOaqhHzwnvCyQdHN5MKQWAD4eRD2KZe2ZrXyH%2FYDOyssGUL9KhrMhxPe5Gpm1NsV8NiXk7IQbck3jj0MtoJlNVUwlXp22lY0dAsbXkMf8v2zytH%2FmN96DHLjpvYWs8EwnMCNWc78AIOhmYv%2Fnqpy0DVy5dJFK6w8otI8v1OvSe8CWC3W5riPB2CJr2TNNsxuT8T6GJfYz4yjeqYPURGqaMNjt08QGOqUB4nlkRi9DhQdSRNX%2F9xEdYkrfeuccu5PvDJViOUbrEvd1V3fbK77C%2BZQFgsIkNr9arvvkP7Q1UylR2bpqBguAsu6Zjos7ZQ8IvDeNTxp7QdvTVeB31rElv8BgHiogp8tGlEZehraDLCbiQitJSUX%2Fq%2B4DZJ3ee4TftQ3o5RV%2FmD2UzQNTpOt%2FcqOIl5tZUUNux2teG0MoXItBrdgYuaDU7T%2Fq0JWo&X-Amz-Signature=289514646caaa1b93b5a6a1f6f7825cc14c01a29385f15e77f800f40c07c0986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dc259c20-e0ad-4dfb-9a81-44687908505b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSX7LBWC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIFbYduAfqkVZTGdPbrdFzUo7kSDQ4z7nQ7zyg%2FTOwjVkAiEAtOS6EcGEbQyGq6bwqVQbBix88Gt2ML5o6L2TUh8ljTkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNtDaamgyif8kNc6ircA24nvy5ApA5NACe%2FF7QYugPgPm9fJ3Oa62VQ7j9lG0Vdb3eTbACQ5GvR3onI9AMN0MXDpaobBP7%2FkFMCMqLZPHs%2F84%2B1vtCTb3FBdrjYWYf6bP085Mnk0ett%2FRtl%2FqbITZqN8HMOr3XesbO665%2F9rSYmZSYsICDwT6rLOjPuYeCpZL7AYV2N%2FnId3JSXzbhgJWv0Z0j7OCR8G6FHiyeCf%2Fy7wOaYCCk5%2Bg21igZi4264Y9nxmaRwuhbunGYj1w3W9FKaY%2FLVHygVyg8389HaX3g%2F4TDWIp3HEwZpimzLiScZN1PQEBWCeHb6LuKvmXd1czZQXRUwPM53BEYb7cwhqUVhSqWfFHsu%2B4Qry9FB7cTi5a3ctWAEZzawuk3Jat3q85abrC7Ka8CdqPIIkZqssqEz%2BpCx8A4Qlgp%2Bs0AYOaqhHzwnvCyQdHN5MKQWAD4eRD2KZe2ZrXyH%2FYDOyssGUL9KhrMhxPe5Gpm1NsV8NiXk7IQbck3jj0MtoJlNVUwlXp22lY0dAsbXkMf8v2zytH%2FmN96DHLjpvYWs8EwnMCNWc78AIOhmYv%2Fnqpy0DVy5dJFK6w8otI8v1OvSe8CWC3W5riPB2CJr2TNNsxuT8T6GJfYz4yjeqYPURGqaMNjt08QGOqUB4nlkRi9DhQdSRNX%2F9xEdYkrfeuccu5PvDJViOUbrEvd1V3fbK77C%2BZQFgsIkNr9arvvkP7Q1UylR2bpqBguAsu6Zjos7ZQ8IvDeNTxp7QdvTVeB31rElv8BgHiogp8tGlEZehraDLCbiQitJSUX%2Fq%2B4DZJ3ee4TftQ3o5RV%2FmD2UzQNTpOt%2FcqOIl5tZUUNux2teG0MoXItBrdgYuaDU7T%2Fq0JWo&X-Amz-Signature=7d4788d5a3ec0802292d941073ed3af5da10156c6441f8deeee0564d0b693f45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Let us add Gazebo into our node diagram

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/86411373-ffd5-4a00-84c9-6bd2bdd1275d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSX7LBWC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIFbYduAfqkVZTGdPbrdFzUo7kSDQ4z7nQ7zyg%2FTOwjVkAiEAtOS6EcGEbQyGq6bwqVQbBix88Gt2ML5o6L2TUh8ljTkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNtDaamgyif8kNc6ircA24nvy5ApA5NACe%2FF7QYugPgPm9fJ3Oa62VQ7j9lG0Vdb3eTbACQ5GvR3onI9AMN0MXDpaobBP7%2FkFMCMqLZPHs%2F84%2B1vtCTb3FBdrjYWYf6bP085Mnk0ett%2FRtl%2FqbITZqN8HMOr3XesbO665%2F9rSYmZSYsICDwT6rLOjPuYeCpZL7AYV2N%2FnId3JSXzbhgJWv0Z0j7OCR8G6FHiyeCf%2Fy7wOaYCCk5%2Bg21igZi4264Y9nxmaRwuhbunGYj1w3W9FKaY%2FLVHygVyg8389HaX3g%2F4TDWIp3HEwZpimzLiScZN1PQEBWCeHb6LuKvmXd1czZQXRUwPM53BEYb7cwhqUVhSqWfFHsu%2B4Qry9FB7cTi5a3ctWAEZzawuk3Jat3q85abrC7Ka8CdqPIIkZqssqEz%2BpCx8A4Qlgp%2Bs0AYOaqhHzwnvCyQdHN5MKQWAD4eRD2KZe2ZrXyH%2FYDOyssGUL9KhrMhxPe5Gpm1NsV8NiXk7IQbck3jj0MtoJlNVUwlXp22lY0dAsbXkMf8v2zytH%2FmN96DHLjpvYWs8EwnMCNWc78AIOhmYv%2Fnqpy0DVy5dJFK6w8otI8v1OvSe8CWC3W5riPB2CJr2TNNsxuT8T6GJfYz4yjeqYPURGqaMNjt08QGOqUB4nlkRi9DhQdSRNX%2F9xEdYkrfeuccu5PvDJViOUbrEvd1V3fbK77C%2BZQFgsIkNr9arvvkP7Q1UylR2bpqBguAsu6Zjos7ZQ8IvDeNTxp7QdvTVeB31rElv8BgHiogp8tGlEZehraDLCbiQitJSUX%2Fq%2B4DZJ3ee4TftQ3o5RV%2FmD2UzQNTpOt%2FcqOIl5tZUUNux2teG0MoXItBrdgYuaDU7T%2Fq0JWo&X-Amz-Signature=33750fd221017c2a62b3afbbcfb960d27dc109d506ee2f55f95ba1906c6e8cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

All we have done is simply swap `my_node` for `Gazebo` to switch between a physical robot and simulated robot

There is a general trend of just being able to hot swap nodes in ROS which is part of the reason it is so powerful.

What ever `robot_state_publisher` is connected to (debugging, real robot, sim) and `robot_state_publisher` does not know. Even the swap is simple only requiring one node change. 

## Adding gazebo configs

Gazebo takes a config file called `bridge_config.yaml` that just maps all internal Gazebo topics to the external ROS topics.

All Gazebo topics must _bridge_ though the `ros_gz_bridge` node

i.e. maps internal Gazebo topics to ROS topics  

Make a folder called `config` and put a file inside called `bridge_config.yaml`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f55ba2f3-5602-464e-ac5c-fe3340c30bb3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSX7LBWC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIFbYduAfqkVZTGdPbrdFzUo7kSDQ4z7nQ7zyg%2FTOwjVkAiEAtOS6EcGEbQyGq6bwqVQbBix88Gt2ML5o6L2TUh8ljTkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNtDaamgyif8kNc6ircA24nvy5ApA5NACe%2FF7QYugPgPm9fJ3Oa62VQ7j9lG0Vdb3eTbACQ5GvR3onI9AMN0MXDpaobBP7%2FkFMCMqLZPHs%2F84%2B1vtCTb3FBdrjYWYf6bP085Mnk0ett%2FRtl%2FqbITZqN8HMOr3XesbO665%2F9rSYmZSYsICDwT6rLOjPuYeCpZL7AYV2N%2FnId3JSXzbhgJWv0Z0j7OCR8G6FHiyeCf%2Fy7wOaYCCk5%2Bg21igZi4264Y9nxmaRwuhbunGYj1w3W9FKaY%2FLVHygVyg8389HaX3g%2F4TDWIp3HEwZpimzLiScZN1PQEBWCeHb6LuKvmXd1czZQXRUwPM53BEYb7cwhqUVhSqWfFHsu%2B4Qry9FB7cTi5a3ctWAEZzawuk3Jat3q85abrC7Ka8CdqPIIkZqssqEz%2BpCx8A4Qlgp%2Bs0AYOaqhHzwnvCyQdHN5MKQWAD4eRD2KZe2ZrXyH%2FYDOyssGUL9KhrMhxPe5Gpm1NsV8NiXk7IQbck3jj0MtoJlNVUwlXp22lY0dAsbXkMf8v2zytH%2FmN96DHLjpvYWs8EwnMCNWc78AIOhmYv%2Fnqpy0DVy5dJFK6w8otI8v1OvSe8CWC3W5riPB2CJr2TNNsxuT8T6GJfYz4yjeqYPURGqaMNjt08QGOqUB4nlkRi9DhQdSRNX%2F9xEdYkrfeuccu5PvDJViOUbrEvd1V3fbK77C%2BZQFgsIkNr9arvvkP7Q1UylR2bpqBguAsu6Zjos7ZQ8IvDeNTxp7QdvTVeB31rElv8BgHiogp8tGlEZehraDLCbiQitJSUX%2Fq%2B4DZJ3ee4TftQ3o5RV%2FmD2UzQNTpOt%2FcqOIl5tZUUNux2teG0MoXItBrdgYuaDU7T%2Fq0JWo&X-Amz-Signature=5c1bcc8e1047c8056c627f8300f212416d062c72807cb7151f95adae7f7571c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a231fdee-a516-474c-b191-a0d2309ea401/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHJ6K3IY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC4tXJ8q%2FfwKE09VUrnmydRGuW3y24u1b8LOachGWpxZAIhAMhC4uPr51ZiI8i%2BtDfBnTXw7wbz76U0JVRp7iyPPzW3KogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BpLac6VmI3mEp1rUq3AP5EmxD84BgKUA%2B3JKHipi1x9u%2FFzCttsfKPeu3YF2JLb4aO26AJabybiWxipOJnuCuAyVa9khXVec9f2Zcdf5Aai1E1MgF9W3yFAvVSYTpsmtII8TkGXwRP9bUVZyM6%2BCccdjLCh2UZUoZd3FZzXJLb4lDhFVfF%2Bo6dIiUnXvNepwX31yQO8g6DuLDQtWdVR2azhKB6L3Nk%2FOSKxj8xIc1A9AUjRleKTqzb1l4T532pDuDWK1yPLjuxcu4DKNBE4SOG0Kh%2FzQNn8F97Otq%2FWZBr87fS2R%2FESthb1YXNVgWFIGt%2Bo5T7%2Bp35WqJEEIB2N6sI6U7y%2FBhd%2BQPsn%2FOpa9T4982ziuth%2B%2FKKgW0CuMDvV5AW1DW2GfVrT3lP9gVp%2FBoD4BZamcAwYZR4mFMZvBP1edbkneERgikKbdExqFzrU6GFs3WmXkdGQo0q4uyOkNJfbVFVSJ%2BU4hRYWXlzTfjXk9cX8vaQroaVNwkood2OkcAPkhXzYp0fXkJ022b3plhgZIAy%2ByApz%2Fq4ECmoXU2Lbv5ooeRG1uT0avCLHxR3MQuzNY3dNJ2hbSmyeJ8BcJwuOewkki2pRrIyNWf8sbgeWYU1abEa3BjtMRBTzqlbGuXTtTf3bG7I76NajD17dPEBjqkAfWzB6bm44c%2FG92%2FNlKYPcS9AEjVZu2x%2Fl%2B88Oa4NOoEFfu5Lw97yXofh3jvtK44JppV%2Fe7M2zFLFk8aGOjRaG%2FUVsXwrUXZPZxAzOAJ2w61zDLtrWJAxgCL6MDpvVfNuOE3clPW5iLS6xV%2FQ09nmgSpO6MUmKcww4Aw%2FzV09735DhJas9Fu7pw6xvOPNiqGAfMK6KMdVdhDEEJAkhJXf%2B7D1IEa&X-Amz-Signature=c0e2f25d34f6ec09192cc5f1dc15df9bc597960410e52464821619e596c4f00a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

## Creating a simulated world

Last thing Gazebo needs is a simulated world for the robot to move in

make a folder called `world` and download this file `my_world.sdf` into that folder:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06cd64d2-79ef-4b3b-8c78-c5f32a00a3d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSX7LBWC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIFbYduAfqkVZTGdPbrdFzUo7kSDQ4z7nQ7zyg%2FTOwjVkAiEAtOS6EcGEbQyGq6bwqVQbBix88Gt2ML5o6L2TUh8ljTkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNtDaamgyif8kNc6ircA24nvy5ApA5NACe%2FF7QYugPgPm9fJ3Oa62VQ7j9lG0Vdb3eTbACQ5GvR3onI9AMN0MXDpaobBP7%2FkFMCMqLZPHs%2F84%2B1vtCTb3FBdrjYWYf6bP085Mnk0ett%2FRtl%2FqbITZqN8HMOr3XesbO665%2F9rSYmZSYsICDwT6rLOjPuYeCpZL7AYV2N%2FnId3JSXzbhgJWv0Z0j7OCR8G6FHiyeCf%2Fy7wOaYCCk5%2Bg21igZi4264Y9nxmaRwuhbunGYj1w3W9FKaY%2FLVHygVyg8389HaX3g%2F4TDWIp3HEwZpimzLiScZN1PQEBWCeHb6LuKvmXd1czZQXRUwPM53BEYb7cwhqUVhSqWfFHsu%2B4Qry9FB7cTi5a3ctWAEZzawuk3Jat3q85abrC7Ka8CdqPIIkZqssqEz%2BpCx8A4Qlgp%2Bs0AYOaqhHzwnvCyQdHN5MKQWAD4eRD2KZe2ZrXyH%2FYDOyssGUL9KhrMhxPe5Gpm1NsV8NiXk7IQbck3jj0MtoJlNVUwlXp22lY0dAsbXkMf8v2zytH%2FmN96DHLjpvYWs8EwnMCNWc78AIOhmYv%2Fnqpy0DVy5dJFK6w8otI8v1OvSe8CWC3W5riPB2CJr2TNNsxuT8T6GJfYz4yjeqYPURGqaMNjt08QGOqUB4nlkRi9DhQdSRNX%2F9xEdYkrfeuccu5PvDJViOUbrEvd1V3fbK77C%2BZQFgsIkNr9arvvkP7Q1UylR2bpqBguAsu6Zjos7ZQ8IvDeNTxp7QdvTVeB31rElv8BgHiogp8tGlEZehraDLCbiQitJSUX%2Fq%2B4DZJ3ee4TftQ3o5RV%2FmD2UzQNTpOt%2FcqOIl5tZUUNux2teG0MoXItBrdgYuaDU7T%2Fq0JWo&X-Amz-Signature=fd0f0fc0be5741ef6c295bf3863184d70b72f41142e0ed38e864564a6f98b7e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[my_world.sdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b46504d5-b360-4ea9-9f63-4078e10bca26/my_world.sdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSX7LBWC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIFbYduAfqkVZTGdPbrdFzUo7kSDQ4z7nQ7zyg%2FTOwjVkAiEAtOS6EcGEbQyGq6bwqVQbBix88Gt2ML5o6L2TUh8ljTkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNtDaamgyif8kNc6ircA24nvy5ApA5NACe%2FF7QYugPgPm9fJ3Oa62VQ7j9lG0Vdb3eTbACQ5GvR3onI9AMN0MXDpaobBP7%2FkFMCMqLZPHs%2F84%2B1vtCTb3FBdrjYWYf6bP085Mnk0ett%2FRtl%2FqbITZqN8HMOr3XesbO665%2F9rSYmZSYsICDwT6rLOjPuYeCpZL7AYV2N%2FnId3JSXzbhgJWv0Z0j7OCR8G6FHiyeCf%2Fy7wOaYCCk5%2Bg21igZi4264Y9nxmaRwuhbunGYj1w3W9FKaY%2FLVHygVyg8389HaX3g%2F4TDWIp3HEwZpimzLiScZN1PQEBWCeHb6LuKvmXd1czZQXRUwPM53BEYb7cwhqUVhSqWfFHsu%2B4Qry9FB7cTi5a3ctWAEZzawuk3Jat3q85abrC7Ka8CdqPIIkZqssqEz%2BpCx8A4Qlgp%2Bs0AYOaqhHzwnvCyQdHN5MKQWAD4eRD2KZe2ZrXyH%2FYDOyssGUL9KhrMhxPe5Gpm1NsV8NiXk7IQbck3jj0MtoJlNVUwlXp22lY0dAsbXkMf8v2zytH%2FmN96DHLjpvYWs8EwnMCNWc78AIOhmYv%2Fnqpy0DVy5dJFK6w8otI8v1OvSe8CWC3W5riPB2CJr2TNNsxuT8T6GJfYz4yjeqYPURGqaMNjt08QGOqUB4nlkRi9DhQdSRNX%2F9xEdYkrfeuccu5PvDJViOUbrEvd1V3fbK77C%2BZQFgsIkNr9arvvkP7Q1UylR2bpqBguAsu6Zjos7ZQ8IvDeNTxp7QdvTVeB31rElv8BgHiogp8tGlEZehraDLCbiQitJSUX%2Fq%2B4DZJ3ee4TftQ3o5RV%2FmD2UzQNTpOt%2FcqOIl5tZUUNux2teG0MoXItBrdgYuaDU7T%2Fq0JWo&X-Amz-Signature=43c90bb2c0a13365d30def5888d88720e5149232fd7ebda21145f0dc6748c3bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="info" %}}

If you are in Robomasters here is a gazebo world that is the 2025 field:

[field.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/823fd884-b9f2-48b0-ac9d-4d71c2583e12/field.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSX7LBWC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIFbYduAfqkVZTGdPbrdFzUo7kSDQ4z7nQ7zyg%2FTOwjVkAiEAtOS6EcGEbQyGq6bwqVQbBix88Gt2ML5o6L2TUh8ljTkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNtDaamgyif8kNc6ircA24nvy5ApA5NACe%2FF7QYugPgPm9fJ3Oa62VQ7j9lG0Vdb3eTbACQ5GvR3onI9AMN0MXDpaobBP7%2FkFMCMqLZPHs%2F84%2B1vtCTb3FBdrjYWYf6bP085Mnk0ett%2FRtl%2FqbITZqN8HMOr3XesbO665%2F9rSYmZSYsICDwT6rLOjPuYeCpZL7AYV2N%2FnId3JSXzbhgJWv0Z0j7OCR8G6FHiyeCf%2Fy7wOaYCCk5%2Bg21igZi4264Y9nxmaRwuhbunGYj1w3W9FKaY%2FLVHygVyg8389HaX3g%2F4TDWIp3HEwZpimzLiScZN1PQEBWCeHb6LuKvmXd1czZQXRUwPM53BEYb7cwhqUVhSqWfFHsu%2B4Qry9FB7cTi5a3ctWAEZzawuk3Jat3q85abrC7Ka8CdqPIIkZqssqEz%2BpCx8A4Qlgp%2Bs0AYOaqhHzwnvCyQdHN5MKQWAD4eRD2KZe2ZrXyH%2FYDOyssGUL9KhrMhxPe5Gpm1NsV8NiXk7IQbck3jj0MtoJlNVUwlXp22lY0dAsbXkMf8v2zytH%2FmN96DHLjpvYWs8EwnMCNWc78AIOhmYv%2Fnqpy0DVy5dJFK6w8otI8v1OvSe8CWC3W5riPB2CJr2TNNsxuT8T6GJfYz4yjeqYPURGqaMNjt08QGOqUB4nlkRi9DhQdSRNX%2F9xEdYkrfeuccu5PvDJViOUbrEvd1V3fbK77C%2BZQFgsIkNr9arvvkP7Q1UylR2bpqBguAsu6Zjos7ZQ8IvDeNTxp7QdvTVeB31rElv8BgHiogp8tGlEZehraDLCbiQitJSUX%2Fq%2B4DZJ3ee4TftQ3o5RV%2FmD2UzQNTpOt%2FcqOIl5tZUUNux2teG0MoXItBrdgYuaDU7T%2Fq0JWo&X-Amz-Signature=038fd951387127fa5a7b6b73ce7871c863584b4e48ba473bf23a84f5e9c7d514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

It contains 2 files a `field.sdf` and `mesh.stl` they have to stay together in the same folder. You can later swap `mesh.stl` or any `.stl` model, with the same filename, to import you own map! 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4fe1bb37-9bef-4d74-bc82-20351d345a25/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSX7LBWC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIFbYduAfqkVZTGdPbrdFzUo7kSDQ4z7nQ7zyg%2FTOwjVkAiEAtOS6EcGEbQyGq6bwqVQbBix88Gt2ML5o6L2TUh8ljTkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNtDaamgyif8kNc6ircA24nvy5ApA5NACe%2FF7QYugPgPm9fJ3Oa62VQ7j9lG0Vdb3eTbACQ5GvR3onI9AMN0MXDpaobBP7%2FkFMCMqLZPHs%2F84%2B1vtCTb3FBdrjYWYf6bP085Mnk0ett%2FRtl%2FqbITZqN8HMOr3XesbO665%2F9rSYmZSYsICDwT6rLOjPuYeCpZL7AYV2N%2FnId3JSXzbhgJWv0Z0j7OCR8G6FHiyeCf%2Fy7wOaYCCk5%2Bg21igZi4264Y9nxmaRwuhbunGYj1w3W9FKaY%2FLVHygVyg8389HaX3g%2F4TDWIp3HEwZpimzLiScZN1PQEBWCeHb6LuKvmXd1czZQXRUwPM53BEYb7cwhqUVhSqWfFHsu%2B4Qry9FB7cTi5a3ctWAEZzawuk3Jat3q85abrC7Ka8CdqPIIkZqssqEz%2BpCx8A4Qlgp%2Bs0AYOaqhHzwnvCyQdHN5MKQWAD4eRD2KZe2ZrXyH%2FYDOyssGUL9KhrMhxPe5Gpm1NsV8NiXk7IQbck3jj0MtoJlNVUwlXp22lY0dAsbXkMf8v2zytH%2FmN96DHLjpvYWs8EwnMCNWc78AIOhmYv%2Fnqpy0DVy5dJFK6w8otI8v1OvSe8CWC3W5riPB2CJr2TNNsxuT8T6GJfYz4yjeqYPURGqaMNjt08QGOqUB4nlkRi9DhQdSRNX%2F9xEdYkrfeuccu5PvDJViOUbrEvd1V3fbK77C%2BZQFgsIkNr9arvvkP7Q1UylR2bpqBguAsu6Zjos7ZQ8IvDeNTxp7QdvTVeB31rElv8BgHiogp8tGlEZehraDLCbiQitJSUX%2Fq%2B4DZJ3ee4TftQ3o5RV%2FmD2UzQNTpOt%2FcqOIl5tZUUNux2teG0MoXItBrdgYuaDU7T%2Fq0JWo&X-Amz-Signature=92ac6cb58fec3eb457ebf99dce1b0396a13c6b59bf69284d7742d406431adb26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/619274eb-4ec6-419b-8419-5d86c8995f0f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSX7LBWC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIFbYduAfqkVZTGdPbrdFzUo7kSDQ4z7nQ7zyg%2FTOwjVkAiEAtOS6EcGEbQyGq6bwqVQbBix88Gt2ML5o6L2TUh8ljTkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNtDaamgyif8kNc6ircA24nvy5ApA5NACe%2FF7QYugPgPm9fJ3Oa62VQ7j9lG0Vdb3eTbACQ5GvR3onI9AMN0MXDpaobBP7%2FkFMCMqLZPHs%2F84%2B1vtCTb3FBdrjYWYf6bP085Mnk0ett%2FRtl%2FqbITZqN8HMOr3XesbO665%2F9rSYmZSYsICDwT6rLOjPuYeCpZL7AYV2N%2FnId3JSXzbhgJWv0Z0j7OCR8G6FHiyeCf%2Fy7wOaYCCk5%2Bg21igZi4264Y9nxmaRwuhbunGYj1w3W9FKaY%2FLVHygVyg8389HaX3g%2F4TDWIp3HEwZpimzLiScZN1PQEBWCeHb6LuKvmXd1czZQXRUwPM53BEYb7cwhqUVhSqWfFHsu%2B4Qry9FB7cTi5a3ctWAEZzawuk3Jat3q85abrC7Ka8CdqPIIkZqssqEz%2BpCx8A4Qlgp%2Bs0AYOaqhHzwnvCyQdHN5MKQWAD4eRD2KZe2ZrXyH%2FYDOyssGUL9KhrMhxPe5Gpm1NsV8NiXk7IQbck3jj0MtoJlNVUwlXp22lY0dAsbXkMf8v2zytH%2FmN96DHLjpvYWs8EwnMCNWc78AIOhmYv%2Fnqpy0DVy5dJFK6w8otI8v1OvSe8CWC3W5riPB2CJr2TNNsxuT8T6GJfYz4yjeqYPURGqaMNjt08QGOqUB4nlkRi9DhQdSRNX%2F9xEdYkrfeuccu5PvDJViOUbrEvd1V3fbK77C%2BZQFgsIkNr9arvvkP7Q1UylR2bpqBguAsu6Zjos7ZQ8IvDeNTxp7QdvTVeB31rElv8BgHiogp8tGlEZehraDLCbiQitJSUX%2Fq%2B4DZJ3ee4TftQ3o5RV%2FmD2UzQNTpOt%2FcqOIl5tZUUNux2teG0MoXItBrdgYuaDU7T%2Fq0JWo&X-Amz-Signature=3d2b4cbe138cd0f79c16cd1cb38256ec2aa66c2a797d96afc41abd910ffccdd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To move the robot, in a different terminal run:

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31231f9a-cab5-4aa7-98c1-56766ee51df8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSX7LBWC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIFbYduAfqkVZTGdPbrdFzUo7kSDQ4z7nQ7zyg%2FTOwjVkAiEAtOS6EcGEbQyGq6bwqVQbBix88Gt2ML5o6L2TUh8ljTkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNtDaamgyif8kNc6ircA24nvy5ApA5NACe%2FF7QYugPgPm9fJ3Oa62VQ7j9lG0Vdb3eTbACQ5GvR3onI9AMN0MXDpaobBP7%2FkFMCMqLZPHs%2F84%2B1vtCTb3FBdrjYWYf6bP085Mnk0ett%2FRtl%2FqbITZqN8HMOr3XesbO665%2F9rSYmZSYsICDwT6rLOjPuYeCpZL7AYV2N%2FnId3JSXzbhgJWv0Z0j7OCR8G6FHiyeCf%2Fy7wOaYCCk5%2Bg21igZi4264Y9nxmaRwuhbunGYj1w3W9FKaY%2FLVHygVyg8389HaX3g%2F4TDWIp3HEwZpimzLiScZN1PQEBWCeHb6LuKvmXd1czZQXRUwPM53BEYb7cwhqUVhSqWfFHsu%2B4Qry9FB7cTi5a3ctWAEZzawuk3Jat3q85abrC7Ka8CdqPIIkZqssqEz%2BpCx8A4Qlgp%2Bs0AYOaqhHzwnvCyQdHN5MKQWAD4eRD2KZe2ZrXyH%2FYDOyssGUL9KhrMhxPe5Gpm1NsV8NiXk7IQbck3jj0MtoJlNVUwlXp22lY0dAsbXkMf8v2zytH%2FmN96DHLjpvYWs8EwnMCNWc78AIOhmYv%2Fnqpy0DVy5dJFK6w8otI8v1OvSe8CWC3W5riPB2CJr2TNNsxuT8T6GJfYz4yjeqYPURGqaMNjt08QGOqUB4nlkRi9DhQdSRNX%2F9xEdYkrfeuccu5PvDJViOUbrEvd1V3fbK77C%2BZQFgsIkNr9arvvkP7Q1UylR2bpqBguAsu6Zjos7ZQ8IvDeNTxp7QdvTVeB31rElv8BgHiogp8tGlEZehraDLCbiQitJSUX%2Fq%2B4DZJ3ee4TftQ3o5RV%2FmD2UzQNTpOt%2FcqOIl5tZUUNux2teG0MoXItBrdgYuaDU7T%2Fq0JWo&X-Amz-Signature=2d657f546267c13c6668ce6ff67dcc3c97ab465bdc2b75dd50f97ed4c59d4195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Final code</summary>
      TODO: add code
  </details>
