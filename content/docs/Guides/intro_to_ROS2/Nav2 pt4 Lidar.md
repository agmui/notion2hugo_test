---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-29T16:07:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-29T16:07:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 154
toc: false
icon: ""
---

[Articulated Robotics guide](https://youtu.be/eJZXRncGaGM?si=p88bRTyt1R9TyuiY)

---

<details>
      <summary>What is Lidar?</summary>
      Lidar (light detection and ranging) is using lases to determine how far objects are.
  </details>

TODO:

[link to add other sensors (realsense)](https://docs.nav2.org/setup_guides/sensors/setup_sensors_gz.html)

Often in robotics Odometry is updates very quickly but is prone to drift.

On the other hand Lidar is effectively _“ground truth”_ because it can see the world around it however updates very slowly.

By using these two sensors together we can cover each others weaknesses.

In between the long update periods of Lidar we can use Odometry to get an accurate measurement of where we are. Then when the Lidar measurement eventually comes we correct the Odometry’s drift.

Just for this guide we will be sticking to a 2D Lidar but these instructions can be adapted to any kind of Lidar.

Nav2 expects Lidar data to be published on the `/scan` topic with type `sensor_msgs/LaserScan`

## Simulating Lidar in Gazebo

We must first add a Lidar link into our `urdf` to know where it is on the robot.

Also we have to add a Gazebo plugin to tell Gazebo simulate the Lidar

past this at the bottom of the file before the `</robot>` tag

```xml

  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

    <xacro:cylinder_inertia m="0.125" r="0.0508" h="0.055"/>
  </link>

  <joint name="lidar_joint" type="fixed">
    <parent link="base_link"/>
    <child link="lidar_link"/>
    <origin xyz="0 0 0.12" rpy="0 0 0"/>
  </joint>



  <!-- 2D Lidar New Gazebo Sensor Plugin  -->
  <gazebo reference="lidar_link">
    <sensor name="lidar" type="gpu_lidar">
      <always_on>true</always_on>
      <visualize>true</visualize>
      <update_rate>5</update_rate>
      <topic>scan</topic>
      <gz_frame_id>lidar_link</gz_frame_id>
      <lidar>
        <scan>
          <horizontal>
            <samples>360</samples>
            <resolution>1.000000</resolution>
            <min_angle>0.000000</min_angle>
            <max_angle>6.280000</max_angle>
          </horizontal>
        </scan>
        <range>
          <min>0.120000</min>
          <max>12.0</max>
          <resolution>0.015000</resolution>
        </range>
        <noise>
          <type>gaussian</type>
          <mean>0.0</mean>
          <stddev>0.02</stddev>
        </noise>
      </lidar>
    </sensor>
  </gazebo>
```

### Adding `/scan` topic in `bridge_config.yaml`

We have to bridge over the `/scan` topic from Gazebo

```yaml
- ros_topic_name: "/scan"
	gz_topic_name: "/scan"
	ros_type_name: "sensor_msgs/msg/LaserScan"
	gz_type_name: "gz.msgs.LaserScan"
	direction: GZ_TO_ROS
```

**Run:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

### Lidar Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFMOUNIE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYf%2Bzv5ba%2BMK06PxjreWKA%2F%2F71t3gUdDteu65qrtrmCAiBtQXfyp1ATYSzN1tlwoor%2Fkpg6vPBzTOPEawK1U2zvFiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPYlaqyATd4RFeqnEKtwDYDJ8RwcjNnaNAWX3WFGnTBPeGxYQDP0DoI2cJQw5ONloH4Jaj3cKTbfloSoRH0RNfPwB%2FmluOqcwqsL5rQCxjTaxbgAn0v4mL4G2cqG7tjQ9vLZcWsFl6d9IvjzwfOCXvwvgnRINT3TxuRRVsg1L6sz61zW3hE2dGWMwHhDZL%2B%2FHE6NTKvgsc0RctAWw%2FY5gCXUd3yw0jYsB5ymt4L23Lm4ncYDJ%2B3KnJJT8L36rCVN2Hwb4%2BVeNxR7YN0cZ7RJKt5T20jo%2FPdBRjMZwTB0108Bya9GQ9%2BoNxGg%2F1vZGyEkZXC3gZ6Vvcp8RqsEBvPEjXvNkM%2F4lbj2PHEy2Q7b5TUABVkPdgMqD85cYMsu5q07PEy6IWuL7tAAwm4gGtH2yJWgQ5%2FDOiIvx4cqc2HzcI6LLw0LaMtiknkE3azxTqdOnhAycXZRwHXzqQB08uIA6h6KAA25e3fmp85fpM%2BotfSnypnio0xY0s8%2FNn8rIsdO0mNs3U%2B66VdFSTmCj06l1CxbvppJ2g%2BMKdzmMAKFK0QuV1jshbenI8aX7z3mB%2F9I7z3XpgtrcY4vdhIHFbsJ%2Bx3wiFSb273dPcJFHcMAuieHFjyvM6tG8S2g8oz5lmE9P7bJdpJ9rO1R87mQwva2kxAY6pgGOOcRnmXfHu5CI6B%2FlaECV2%2F3nHJRGjbFvoyo5IBQZhTGWag1bFyxqro88RVM0F9oJvFKIthqV7gZa1kkgAk%2FyrhVc%2FY8P0Mv4CLF5XxjykjItVONPEHTwJkDxrc1%2BunSnejCl%2FJ0RIiBvm2K%2BRAvysyfwZ7dZHUy9yTCkSWljwLvay9c63BYylXBCZ2xsiECl0gUJmX0WW72AqAuR%2Fg8uX303tGg3&X-Amz-Signature=62eea6546ad7bf06aa589f8b3bdea1b6a5c137447e1a36ef2bfb1999d876b34a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFMOUNIE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYf%2Bzv5ba%2BMK06PxjreWKA%2F%2F71t3gUdDteu65qrtrmCAiBtQXfyp1ATYSzN1tlwoor%2Fkpg6vPBzTOPEawK1U2zvFiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPYlaqyATd4RFeqnEKtwDYDJ8RwcjNnaNAWX3WFGnTBPeGxYQDP0DoI2cJQw5ONloH4Jaj3cKTbfloSoRH0RNfPwB%2FmluOqcwqsL5rQCxjTaxbgAn0v4mL4G2cqG7tjQ9vLZcWsFl6d9IvjzwfOCXvwvgnRINT3TxuRRVsg1L6sz61zW3hE2dGWMwHhDZL%2B%2FHE6NTKvgsc0RctAWw%2FY5gCXUd3yw0jYsB5ymt4L23Lm4ncYDJ%2B3KnJJT8L36rCVN2Hwb4%2BVeNxR7YN0cZ7RJKt5T20jo%2FPdBRjMZwTB0108Bya9GQ9%2BoNxGg%2F1vZGyEkZXC3gZ6Vvcp8RqsEBvPEjXvNkM%2F4lbj2PHEy2Q7b5TUABVkPdgMqD85cYMsu5q07PEy6IWuL7tAAwm4gGtH2yJWgQ5%2FDOiIvx4cqc2HzcI6LLw0LaMtiknkE3azxTqdOnhAycXZRwHXzqQB08uIA6h6KAA25e3fmp85fpM%2BotfSnypnio0xY0s8%2FNn8rIsdO0mNs3U%2B66VdFSTmCj06l1CxbvppJ2g%2BMKdzmMAKFK0QuV1jshbenI8aX7z3mB%2F9I7z3XpgtrcY4vdhIHFbsJ%2Bx3wiFSb273dPcJFHcMAuieHFjyvM6tG8S2g8oz5lmE9P7bJdpJ9rO1R87mQwva2kxAY6pgGOOcRnmXfHu5CI6B%2FlaECV2%2F3nHJRGjbFvoyo5IBQZhTGWag1bFyxqro88RVM0F9oJvFKIthqV7gZa1kkgAk%2FyrhVc%2FY8P0Mv4CLF5XxjykjItVONPEHTwJkDxrc1%2BunSnejCl%2FJ0RIiBvm2K%2BRAvysyfwZ7dZHUy9yTCkSWljwLvay9c63BYylXBCZ2xsiECl0gUJmX0WW72AqAuR%2Fg8uX303tGg3&X-Amz-Signature=f6edb86f7806fe9ddca76c125b1d0a7c9f1c8f63b27c0e2b547f9004b45edf71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFMOUNIE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYf%2Bzv5ba%2BMK06PxjreWKA%2F%2F71t3gUdDteu65qrtrmCAiBtQXfyp1ATYSzN1tlwoor%2Fkpg6vPBzTOPEawK1U2zvFiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPYlaqyATd4RFeqnEKtwDYDJ8RwcjNnaNAWX3WFGnTBPeGxYQDP0DoI2cJQw5ONloH4Jaj3cKTbfloSoRH0RNfPwB%2FmluOqcwqsL5rQCxjTaxbgAn0v4mL4G2cqG7tjQ9vLZcWsFl6d9IvjzwfOCXvwvgnRINT3TxuRRVsg1L6sz61zW3hE2dGWMwHhDZL%2B%2FHE6NTKvgsc0RctAWw%2FY5gCXUd3yw0jYsB5ymt4L23Lm4ncYDJ%2B3KnJJT8L36rCVN2Hwb4%2BVeNxR7YN0cZ7RJKt5T20jo%2FPdBRjMZwTB0108Bya9GQ9%2BoNxGg%2F1vZGyEkZXC3gZ6Vvcp8RqsEBvPEjXvNkM%2F4lbj2PHEy2Q7b5TUABVkPdgMqD85cYMsu5q07PEy6IWuL7tAAwm4gGtH2yJWgQ5%2FDOiIvx4cqc2HzcI6LLw0LaMtiknkE3azxTqdOnhAycXZRwHXzqQB08uIA6h6KAA25e3fmp85fpM%2BotfSnypnio0xY0s8%2FNn8rIsdO0mNs3U%2B66VdFSTmCj06l1CxbvppJ2g%2BMKdzmMAKFK0QuV1jshbenI8aX7z3mB%2F9I7z3XpgtrcY4vdhIHFbsJ%2Bx3wiFSb273dPcJFHcMAuieHFjyvM6tG8S2g8oz5lmE9P7bJdpJ9rO1R87mQwva2kxAY6pgGOOcRnmXfHu5CI6B%2FlaECV2%2F3nHJRGjbFvoyo5IBQZhTGWag1bFyxqro88RVM0F9oJvFKIthqV7gZa1kkgAk%2FyrhVc%2FY8P0Mv4CLF5XxjykjItVONPEHTwJkDxrc1%2BunSnejCl%2FJ0RIiBvm2K%2BRAvysyfwZ7dZHUy9yTCkSWljwLvay9c63BYylXBCZ2xsiECl0gUJmX0WW72AqAuR%2Fg8uX303tGg3&X-Amz-Signature=5cd47c0530e69c037b62e73052ca5f727b9876901702042ce05f5dca62346d19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFMOUNIE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYf%2Bzv5ba%2BMK06PxjreWKA%2F%2F71t3gUdDteu65qrtrmCAiBtQXfyp1ATYSzN1tlwoor%2Fkpg6vPBzTOPEawK1U2zvFiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPYlaqyATd4RFeqnEKtwDYDJ8RwcjNnaNAWX3WFGnTBPeGxYQDP0DoI2cJQw5ONloH4Jaj3cKTbfloSoRH0RNfPwB%2FmluOqcwqsL5rQCxjTaxbgAn0v4mL4G2cqG7tjQ9vLZcWsFl6d9IvjzwfOCXvwvgnRINT3TxuRRVsg1L6sz61zW3hE2dGWMwHhDZL%2B%2FHE6NTKvgsc0RctAWw%2FY5gCXUd3yw0jYsB5ymt4L23Lm4ncYDJ%2B3KnJJT8L36rCVN2Hwb4%2BVeNxR7YN0cZ7RJKt5T20jo%2FPdBRjMZwTB0108Bya9GQ9%2BoNxGg%2F1vZGyEkZXC3gZ6Vvcp8RqsEBvPEjXvNkM%2F4lbj2PHEy2Q7b5TUABVkPdgMqD85cYMsu5q07PEy6IWuL7tAAwm4gGtH2yJWgQ5%2FDOiIvx4cqc2HzcI6LLw0LaMtiknkE3azxTqdOnhAycXZRwHXzqQB08uIA6h6KAA25e3fmp85fpM%2BotfSnypnio0xY0s8%2FNn8rIsdO0mNs3U%2B66VdFSTmCj06l1CxbvppJ2g%2BMKdzmMAKFK0QuV1jshbenI8aX7z3mB%2F9I7z3XpgtrcY4vdhIHFbsJ%2Bx3wiFSb273dPcJFHcMAuieHFjyvM6tG8S2g8oz5lmE9P7bJdpJ9rO1R87mQwva2kxAY6pgGOOcRnmXfHu5CI6B%2FlaECV2%2F3nHJRGjbFvoyo5IBQZhTGWag1bFyxqro88RVM0F9oJvFKIthqV7gZa1kkgAk%2FyrhVc%2FY8P0Mv4CLF5XxjykjItVONPEHTwJkDxrc1%2BunSnejCl%2FJ0RIiBvm2K%2BRAvysyfwZ7dZHUy9yTCkSWljwLvay9c63BYylXBCZ2xsiECl0gUJmX0WW72AqAuR%2Fg8uX303tGg3&X-Amz-Signature=d5141d3dff9e462923a625e12e6a5f28ef09849bbe3ae7acfbf928de87acad56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFMOUNIE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYf%2Bzv5ba%2BMK06PxjreWKA%2F%2F71t3gUdDteu65qrtrmCAiBtQXfyp1ATYSzN1tlwoor%2Fkpg6vPBzTOPEawK1U2zvFiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPYlaqyATd4RFeqnEKtwDYDJ8RwcjNnaNAWX3WFGnTBPeGxYQDP0DoI2cJQw5ONloH4Jaj3cKTbfloSoRH0RNfPwB%2FmluOqcwqsL5rQCxjTaxbgAn0v4mL4G2cqG7tjQ9vLZcWsFl6d9IvjzwfOCXvwvgnRINT3TxuRRVsg1L6sz61zW3hE2dGWMwHhDZL%2B%2FHE6NTKvgsc0RctAWw%2FY5gCXUd3yw0jYsB5ymt4L23Lm4ncYDJ%2B3KnJJT8L36rCVN2Hwb4%2BVeNxR7YN0cZ7RJKt5T20jo%2FPdBRjMZwTB0108Bya9GQ9%2BoNxGg%2F1vZGyEkZXC3gZ6Vvcp8RqsEBvPEjXvNkM%2F4lbj2PHEy2Q7b5TUABVkPdgMqD85cYMsu5q07PEy6IWuL7tAAwm4gGtH2yJWgQ5%2FDOiIvx4cqc2HzcI6LLw0LaMtiknkE3azxTqdOnhAycXZRwHXzqQB08uIA6h6KAA25e3fmp85fpM%2BotfSnypnio0xY0s8%2FNn8rIsdO0mNs3U%2B66VdFSTmCj06l1CxbvppJ2g%2BMKdzmMAKFK0QuV1jshbenI8aX7z3mB%2F9I7z3XpgtrcY4vdhIHFbsJ%2Bx3wiFSb273dPcJFHcMAuieHFjyvM6tG8S2g8oz5lmE9P7bJdpJ9rO1R87mQwva2kxAY6pgGOOcRnmXfHu5CI6B%2FlaECV2%2F3nHJRGjbFvoyo5IBQZhTGWag1bFyxqro88RVM0F9oJvFKIthqV7gZa1kkgAk%2FyrhVc%2FY8P0Mv4CLF5XxjykjItVONPEHTwJkDxrc1%2BunSnejCl%2FJ0RIiBvm2K%2BRAvysyfwZ7dZHUy9yTCkSWljwLvay9c63BYylXBCZ2xsiECl0gUJmX0WW72AqAuR%2Fg8uX303tGg3&X-Amz-Signature=a555468083b1e1f34929f50f1d8122121317bf04154b1892ae79ba9b8dc4629e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFMOUNIE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYf%2Bzv5ba%2BMK06PxjreWKA%2F%2F71t3gUdDteu65qrtrmCAiBtQXfyp1ATYSzN1tlwoor%2Fkpg6vPBzTOPEawK1U2zvFiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPYlaqyATd4RFeqnEKtwDYDJ8RwcjNnaNAWX3WFGnTBPeGxYQDP0DoI2cJQw5ONloH4Jaj3cKTbfloSoRH0RNfPwB%2FmluOqcwqsL5rQCxjTaxbgAn0v4mL4G2cqG7tjQ9vLZcWsFl6d9IvjzwfOCXvwvgnRINT3TxuRRVsg1L6sz61zW3hE2dGWMwHhDZL%2B%2FHE6NTKvgsc0RctAWw%2FY5gCXUd3yw0jYsB5ymt4L23Lm4ncYDJ%2B3KnJJT8L36rCVN2Hwb4%2BVeNxR7YN0cZ7RJKt5T20jo%2FPdBRjMZwTB0108Bya9GQ9%2BoNxGg%2F1vZGyEkZXC3gZ6Vvcp8RqsEBvPEjXvNkM%2F4lbj2PHEy2Q7b5TUABVkPdgMqD85cYMsu5q07PEy6IWuL7tAAwm4gGtH2yJWgQ5%2FDOiIvx4cqc2HzcI6LLw0LaMtiknkE3azxTqdOnhAycXZRwHXzqQB08uIA6h6KAA25e3fmp85fpM%2BotfSnypnio0xY0s8%2FNn8rIsdO0mNs3U%2B66VdFSTmCj06l1CxbvppJ2g%2BMKdzmMAKFK0QuV1jshbenI8aX7z3mB%2F9I7z3XpgtrcY4vdhIHFbsJ%2Bx3wiFSb273dPcJFHcMAuieHFjyvM6tG8S2g8oz5lmE9P7bJdpJ9rO1R87mQwva2kxAY6pgGOOcRnmXfHu5CI6B%2FlaECV2%2F3nHJRGjbFvoyo5IBQZhTGWag1bFyxqro88RVM0F9oJvFKIthqV7gZa1kkgAk%2FyrhVc%2FY8P0Mv4CLF5XxjykjItVONPEHTwJkDxrc1%2BunSnejCl%2FJ0RIiBvm2K%2BRAvysyfwZ7dZHUy9yTCkSWljwLvay9c63BYylXBCZ2xsiECl0gUJmX0WW72AqAuR%2Fg8uX303tGg3&X-Amz-Signature=fa916c904f7560b26751a2eddd70f497abb5436b8eb11520ae5baf448311308a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFMOUNIE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYf%2Bzv5ba%2BMK06PxjreWKA%2F%2F71t3gUdDteu65qrtrmCAiBtQXfyp1ATYSzN1tlwoor%2Fkpg6vPBzTOPEawK1U2zvFiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPYlaqyATd4RFeqnEKtwDYDJ8RwcjNnaNAWX3WFGnTBPeGxYQDP0DoI2cJQw5ONloH4Jaj3cKTbfloSoRH0RNfPwB%2FmluOqcwqsL5rQCxjTaxbgAn0v4mL4G2cqG7tjQ9vLZcWsFl6d9IvjzwfOCXvwvgnRINT3TxuRRVsg1L6sz61zW3hE2dGWMwHhDZL%2B%2FHE6NTKvgsc0RctAWw%2FY5gCXUd3yw0jYsB5ymt4L23Lm4ncYDJ%2B3KnJJT8L36rCVN2Hwb4%2BVeNxR7YN0cZ7RJKt5T20jo%2FPdBRjMZwTB0108Bya9GQ9%2BoNxGg%2F1vZGyEkZXC3gZ6Vvcp8RqsEBvPEjXvNkM%2F4lbj2PHEy2Q7b5TUABVkPdgMqD85cYMsu5q07PEy6IWuL7tAAwm4gGtH2yJWgQ5%2FDOiIvx4cqc2HzcI6LLw0LaMtiknkE3azxTqdOnhAycXZRwHXzqQB08uIA6h6KAA25e3fmp85fpM%2BotfSnypnio0xY0s8%2FNn8rIsdO0mNs3U%2B66VdFSTmCj06l1CxbvppJ2g%2BMKdzmMAKFK0QuV1jshbenI8aX7z3mB%2F9I7z3XpgtrcY4vdhIHFbsJ%2Bx3wiFSb273dPcJFHcMAuieHFjyvM6tG8S2g8oz5lmE9P7bJdpJ9rO1R87mQwva2kxAY6pgGOOcRnmXfHu5CI6B%2FlaECV2%2F3nHJRGjbFvoyo5IBQZhTGWag1bFyxqro88RVM0F9oJvFKIthqV7gZa1kkgAk%2FyrhVc%2FY8P0Mv4CLF5XxjykjItVONPEHTwJkDxrc1%2BunSnejCl%2FJ0RIiBvm2K%2BRAvysyfwZ7dZHUy9yTCkSWljwLvay9c63BYylXBCZ2xsiECl0gUJmX0WW72AqAuR%2Fg8uX303tGg3&X-Amz-Signature=e436a4b3d3652c2ee2251b7c035a0fd26fdfb87989d0af4220eb5460ea8b9f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFMOUNIE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYf%2Bzv5ba%2BMK06PxjreWKA%2F%2F71t3gUdDteu65qrtrmCAiBtQXfyp1ATYSzN1tlwoor%2Fkpg6vPBzTOPEawK1U2zvFiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPYlaqyATd4RFeqnEKtwDYDJ8RwcjNnaNAWX3WFGnTBPeGxYQDP0DoI2cJQw5ONloH4Jaj3cKTbfloSoRH0RNfPwB%2FmluOqcwqsL5rQCxjTaxbgAn0v4mL4G2cqG7tjQ9vLZcWsFl6d9IvjzwfOCXvwvgnRINT3TxuRRVsg1L6sz61zW3hE2dGWMwHhDZL%2B%2FHE6NTKvgsc0RctAWw%2FY5gCXUd3yw0jYsB5ymt4L23Lm4ncYDJ%2B3KnJJT8L36rCVN2Hwb4%2BVeNxR7YN0cZ7RJKt5T20jo%2FPdBRjMZwTB0108Bya9GQ9%2BoNxGg%2F1vZGyEkZXC3gZ6Vvcp8RqsEBvPEjXvNkM%2F4lbj2PHEy2Q7b5TUABVkPdgMqD85cYMsu5q07PEy6IWuL7tAAwm4gGtH2yJWgQ5%2FDOiIvx4cqc2HzcI6LLw0LaMtiknkE3azxTqdOnhAycXZRwHXzqQB08uIA6h6KAA25e3fmp85fpM%2BotfSnypnio0xY0s8%2FNn8rIsdO0mNs3U%2B66VdFSTmCj06l1CxbvppJ2g%2BMKdzmMAKFK0QuV1jshbenI8aX7z3mB%2F9I7z3XpgtrcY4vdhIHFbsJ%2Bx3wiFSb273dPcJFHcMAuieHFjyvM6tG8S2g8oz5lmE9P7bJdpJ9rO1R87mQwva2kxAY6pgGOOcRnmXfHu5CI6B%2FlaECV2%2F3nHJRGjbFvoyo5IBQZhTGWag1bFyxqro88RVM0F9oJvFKIthqV7gZa1kkgAk%2FyrhVc%2FY8P0Mv4CLF5XxjykjItVONPEHTwJkDxrc1%2BunSnejCl%2FJ0RIiBvm2K%2BRAvysyfwZ7dZHUy9yTCkSWljwLvay9c63BYylXBCZ2xsiECl0gUJmX0WW72AqAuR%2Fg8uX303tGg3&X-Amz-Signature=d53a1a9e1504496f59d2ebe4133a0e84c14b210ccf36e5ebbf10f6253cb58b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

{{< /table >}}

#### description:

publishes the `/scan` topic for RPLIDAR products

TODO: get official docs link

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python

    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
    ])
```

<details>
      <summary>Finding Lidar USB port:</summary>
      ```bash
ls /dev/ttyUSB*
```
  </details>

To launch the Lidar node use this command below.

 

{{% alert context="warning" %}}

# NOTE: YOUR RPLIDAR MODEL MIGHT BE DIFFERENT

I am using the a2m8 model so I run the launch file below.

However, your model may be different so please look at this guide to find which launch file to run.

[https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz](https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz)

{{% /alert %}}

```bash
ros2 launch rplidar_ros view_rplidar_a2m8_launch.py scan_mode:=Boost serial_port:=/dev/ttyUSB0
```

```xml
ros2 launch mbot_pkg display.launch.py
```

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFMOUNIE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYf%2Bzv5ba%2BMK06PxjreWKA%2F%2F71t3gUdDteu65qrtrmCAiBtQXfyp1ATYSzN1tlwoor%2Fkpg6vPBzTOPEawK1U2zvFiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPYlaqyATd4RFeqnEKtwDYDJ8RwcjNnaNAWX3WFGnTBPeGxYQDP0DoI2cJQw5ONloH4Jaj3cKTbfloSoRH0RNfPwB%2FmluOqcwqsL5rQCxjTaxbgAn0v4mL4G2cqG7tjQ9vLZcWsFl6d9IvjzwfOCXvwvgnRINT3TxuRRVsg1L6sz61zW3hE2dGWMwHhDZL%2B%2FHE6NTKvgsc0RctAWw%2FY5gCXUd3yw0jYsB5ymt4L23Lm4ncYDJ%2B3KnJJT8L36rCVN2Hwb4%2BVeNxR7YN0cZ7RJKt5T20jo%2FPdBRjMZwTB0108Bya9GQ9%2BoNxGg%2F1vZGyEkZXC3gZ6Vvcp8RqsEBvPEjXvNkM%2F4lbj2PHEy2Q7b5TUABVkPdgMqD85cYMsu5q07PEy6IWuL7tAAwm4gGtH2yJWgQ5%2FDOiIvx4cqc2HzcI6LLw0LaMtiknkE3azxTqdOnhAycXZRwHXzqQB08uIA6h6KAA25e3fmp85fpM%2BotfSnypnio0xY0s8%2FNn8rIsdO0mNs3U%2B66VdFSTmCj06l1CxbvppJ2g%2BMKdzmMAKFK0QuV1jshbenI8aX7z3mB%2F9I7z3XpgtrcY4vdhIHFbsJ%2Bx3wiFSb273dPcJFHcMAuieHFjyvM6tG8S2g8oz5lmE9P7bJdpJ9rO1R87mQwva2kxAY6pgGOOcRnmXfHu5CI6B%2FlaECV2%2F3nHJRGjbFvoyo5IBQZhTGWag1bFyxqro88RVM0F9oJvFKIthqV7gZa1kkgAk%2FyrhVc%2FY8P0Mv4CLF5XxjykjItVONPEHTwJkDxrc1%2BunSnejCl%2FJ0RIiBvm2K%2BRAvysyfwZ7dZHUy9yTCkSWljwLvay9c63BYylXBCZ2xsiECl0gUJmX0WW72AqAuR%2Fg8uX303tGg3&X-Amz-Signature=4db50bf53cd60d32afb7f9036fef364420b1992c60678576c360c47c2b83681f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

## adding to launch

idk tell them to look at the launch file to see which exact prams to put in

```python

 def generate_launch_description():
		 ...
		 
     lidar_node = Node(
        package='rplidar_ros',
        executable='rplidar_node',
        name='rplidar_node',
        parameters=[{'channel_type': 'serial',
                     'serial_port': '/dev/ttyUSB0', #recomended to do /dev/serial/by-path/...
                     'serial_baudrate': 115200,
                     'frame_id': 'lidar_link',
                     'scan_mode': 'Boost'}],
        output='screen')

 
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
    ])
```

**Result:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFMOUNIE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYf%2Bzv5ba%2BMK06PxjreWKA%2F%2F71t3gUdDteu65qrtrmCAiBtQXfyp1ATYSzN1tlwoor%2Fkpg6vPBzTOPEawK1U2zvFiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPYlaqyATd4RFeqnEKtwDYDJ8RwcjNnaNAWX3WFGnTBPeGxYQDP0DoI2cJQw5ONloH4Jaj3cKTbfloSoRH0RNfPwB%2FmluOqcwqsL5rQCxjTaxbgAn0v4mL4G2cqG7tjQ9vLZcWsFl6d9IvjzwfOCXvwvgnRINT3TxuRRVsg1L6sz61zW3hE2dGWMwHhDZL%2B%2FHE6NTKvgsc0RctAWw%2FY5gCXUd3yw0jYsB5ymt4L23Lm4ncYDJ%2B3KnJJT8L36rCVN2Hwb4%2BVeNxR7YN0cZ7RJKt5T20jo%2FPdBRjMZwTB0108Bya9GQ9%2BoNxGg%2F1vZGyEkZXC3gZ6Vvcp8RqsEBvPEjXvNkM%2F4lbj2PHEy2Q7b5TUABVkPdgMqD85cYMsu5q07PEy6IWuL7tAAwm4gGtH2yJWgQ5%2FDOiIvx4cqc2HzcI6LLw0LaMtiknkE3azxTqdOnhAycXZRwHXzqQB08uIA6h6KAA25e3fmp85fpM%2BotfSnypnio0xY0s8%2FNn8rIsdO0mNs3U%2B66VdFSTmCj06l1CxbvppJ2g%2BMKdzmMAKFK0QuV1jshbenI8aX7z3mB%2F9I7z3XpgtrcY4vdhIHFbsJ%2Bx3wiFSb273dPcJFHcMAuieHFjyvM6tG8S2g8oz5lmE9P7bJdpJ9rO1R87mQwva2kxAY6pgGOOcRnmXfHu5CI6B%2FlaECV2%2F3nHJRGjbFvoyo5IBQZhTGWag1bFyxqro88RVM0F9oJvFKIthqV7gZa1kkgAk%2FyrhVc%2FY8P0Mv4CLF5XxjykjItVONPEHTwJkDxrc1%2BunSnejCl%2FJ0RIiBvm2K%2BRAvysyfwZ7dZHUy9yTCkSWljwLvay9c63BYylXBCZ2xsiECl0gUJmX0WW72AqAuR%2Fg8uX303tGg3&X-Amz-Signature=552192182e412a6ee5c133d5e894c1d361092a7c1be77c5eac7f3b6cfb7cae1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
