---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-29T23:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-29T23:56:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
      <summary>What is slam?</summary>
      TODO:
  </details>

ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PUXAVR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoVMSsVHxLuZi3R8eZjdcIjBn3DtX8duQ7ks92OerJxwIhAOCKpdQxaa8%2Fuu8A4CJTc1T7TV5jSbOXzai%2BuFPGsp9XKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0rQlljb3Z%2B6b%2Br%2FYq3APdTTAWIO9fNAGhGZChk8oL51Kw0R6qdJvNCzJZwffxbI1xveemNzLSSkYUz2fV%2FjaOZ3NKL42rb7HhM6bwuLmge4s%2Bp8zQKpf%2FvxIoIkL4T%2BfhVLgNosdpdAPAVppx3PV7Q%2B0W3ZUfZlu1AHabqX9EiKijUzBuuDWGJIXKoapcBdafn6JdC963ynhF1eX7StBe%2BaRxQ5pSegwq8l8H5NC1JKOLlLN23f9cCXDE9m1maSnww%2B7eJOjNvxmRkWoS8WZtLk9Xz1if%2BL6BxrFxqNboKZ4Q%2FTm073zpMm5CVdxDhC6uNkhvR9exUld30a8EM55M9%2FwTDY5BEskQpNQj%2Fg8VUE%2FAtGTXJKOp80P597isOH4bBUVwEnheT%2BWTCEY9rkmERHrub42v4z2NbJqkjVHhamIRljfORAvlyrE3D3noJIArpmF2%2FOYy8rXKDQUCqTvXgyWuO%2BDq1ZMoF9LBf6lBiT8XJFmFEYXeow0GV0OObdfHr9ydxuqS0yl65Z4cE3tbfki0LKbG%2BsmspctqTzd%2B3jDhYuMzbyGnAzY8OorlrvJ%2FhyQ3CBn9MjiWYbAu%2FV6U7l7NqQ9yoj95BbPLj2u1%2BoBjmg4o7PXQaC1VkizX0iFgaunGsiNbS1ogCjD5mqbEBjqkAXSL7Z3rHxl7Nkfl8O7a3WjqggC%2F2gFjFlPEUbHkcaAEBRD4hU%2F5sAlyhCg8E%2F9AtQBfZtkEu3%2FHz6TNxlC9B%2BZbpTtbEKP46RydLgIoDVevysSkPbq%2BAktRVFWw%2FdML8QCYOWECCRnR89uoi2mLtrG5wYe5nDdqSGtC12Ed4zy1d2tCdCbV2B9zE6pZF4IhsHQ6BQ47ShY9hSq2EeQpiEvUybxv&X-Amz-Signature=d45c0ab531413205ee3ecfd1eb4d6d2b425da9ede36d0e825424d8cc8df83ddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

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
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

TODO: add rviz guide of viewing scanned map

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PUXAVR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoVMSsVHxLuZi3R8eZjdcIjBn3DtX8duQ7ks92OerJxwIhAOCKpdQxaa8%2Fuu8A4CJTc1T7TV5jSbOXzai%2BuFPGsp9XKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0rQlljb3Z%2B6b%2Br%2FYq3APdTTAWIO9fNAGhGZChk8oL51Kw0R6qdJvNCzJZwffxbI1xveemNzLSSkYUz2fV%2FjaOZ3NKL42rb7HhM6bwuLmge4s%2Bp8zQKpf%2FvxIoIkL4T%2BfhVLgNosdpdAPAVppx3PV7Q%2B0W3ZUfZlu1AHabqX9EiKijUzBuuDWGJIXKoapcBdafn6JdC963ynhF1eX7StBe%2BaRxQ5pSegwq8l8H5NC1JKOLlLN23f9cCXDE9m1maSnww%2B7eJOjNvxmRkWoS8WZtLk9Xz1if%2BL6BxrFxqNboKZ4Q%2FTm073zpMm5CVdxDhC6uNkhvR9exUld30a8EM55M9%2FwTDY5BEskQpNQj%2Fg8VUE%2FAtGTXJKOp80P597isOH4bBUVwEnheT%2BWTCEY9rkmERHrub42v4z2NbJqkjVHhamIRljfORAvlyrE3D3noJIArpmF2%2FOYy8rXKDQUCqTvXgyWuO%2BDq1ZMoF9LBf6lBiT8XJFmFEYXeow0GV0OObdfHr9ydxuqS0yl65Z4cE3tbfki0LKbG%2BsmspctqTzd%2B3jDhYuMzbyGnAzY8OorlrvJ%2FhyQ3CBn9MjiWYbAu%2FV6U7l7NqQ9yoj95BbPLj2u1%2BoBjmg4o7PXQaC1VkizX0iFgaunGsiNbS1ogCjD5mqbEBjqkAXSL7Z3rHxl7Nkfl8O7a3WjqggC%2F2gFjFlPEUbHkcaAEBRD4hU%2F5sAlyhCg8E%2F9AtQBfZtkEu3%2FHz6TNxlC9B%2BZbpTtbEKP46RydLgIoDVevysSkPbq%2BAktRVFWw%2FdML8QCYOWECCRnR89uoi2mLtrG5wYe5nDdqSGtC12Ed4zy1d2tCdCbV2B9zE6pZF4IhsHQ6BQ47ShY9hSq2EeQpiEvUybxv&X-Amz-Signature=f71dd4fe9da47f076602163c1c80b611e86fed4a68196519c84e5d3a2ec9fa49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PUXAVR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoVMSsVHxLuZi3R8eZjdcIjBn3DtX8duQ7ks92OerJxwIhAOCKpdQxaa8%2Fuu8A4CJTc1T7TV5jSbOXzai%2BuFPGsp9XKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0rQlljb3Z%2B6b%2Br%2FYq3APdTTAWIO9fNAGhGZChk8oL51Kw0R6qdJvNCzJZwffxbI1xveemNzLSSkYUz2fV%2FjaOZ3NKL42rb7HhM6bwuLmge4s%2Bp8zQKpf%2FvxIoIkL4T%2BfhVLgNosdpdAPAVppx3PV7Q%2B0W3ZUfZlu1AHabqX9EiKijUzBuuDWGJIXKoapcBdafn6JdC963ynhF1eX7StBe%2BaRxQ5pSegwq8l8H5NC1JKOLlLN23f9cCXDE9m1maSnww%2B7eJOjNvxmRkWoS8WZtLk9Xz1if%2BL6BxrFxqNboKZ4Q%2FTm073zpMm5CVdxDhC6uNkhvR9exUld30a8EM55M9%2FwTDY5BEskQpNQj%2Fg8VUE%2FAtGTXJKOp80P597isOH4bBUVwEnheT%2BWTCEY9rkmERHrub42v4z2NbJqkjVHhamIRljfORAvlyrE3D3noJIArpmF2%2FOYy8rXKDQUCqTvXgyWuO%2BDq1ZMoF9LBf6lBiT8XJFmFEYXeow0GV0OObdfHr9ydxuqS0yl65Z4cE3tbfki0LKbG%2BsmspctqTzd%2B3jDhYuMzbyGnAzY8OorlrvJ%2FhyQ3CBn9MjiWYbAu%2FV6U7l7NqQ9yoj95BbPLj2u1%2BoBjmg4o7PXQaC1VkizX0iFgaunGsiNbS1ogCjD5mqbEBjqkAXSL7Z3rHxl7Nkfl8O7a3WjqggC%2F2gFjFlPEUbHkcaAEBRD4hU%2F5sAlyhCg8E%2F9AtQBfZtkEu3%2FHz6TNxlC9B%2BZbpTtbEKP46RydLgIoDVevysSkPbq%2BAktRVFWw%2FdML8QCYOWECCRnR89uoi2mLtrG5wYe5nDdqSGtC12Ed4zy1d2tCdCbV2B9zE6pZF4IhsHQ6BQ47ShY9hSq2EeQpiEvUybxv&X-Amz-Signature=feaa6ec17cb3a2323a0673ab6e4ca75d3de5f013a0bdecc57ef786cc557d519f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

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
        
        lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

### SLAM Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PUXAVR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoVMSsVHxLuZi3R8eZjdcIjBn3DtX8duQ7ks92OerJxwIhAOCKpdQxaa8%2Fuu8A4CJTc1T7TV5jSbOXzai%2BuFPGsp9XKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0rQlljb3Z%2B6b%2Br%2FYq3APdTTAWIO9fNAGhGZChk8oL51Kw0R6qdJvNCzJZwffxbI1xveemNzLSSkYUz2fV%2FjaOZ3NKL42rb7HhM6bwuLmge4s%2Bp8zQKpf%2FvxIoIkL4T%2BfhVLgNosdpdAPAVppx3PV7Q%2B0W3ZUfZlu1AHabqX9EiKijUzBuuDWGJIXKoapcBdafn6JdC963ynhF1eX7StBe%2BaRxQ5pSegwq8l8H5NC1JKOLlLN23f9cCXDE9m1maSnww%2B7eJOjNvxmRkWoS8WZtLk9Xz1if%2BL6BxrFxqNboKZ4Q%2FTm073zpMm5CVdxDhC6uNkhvR9exUld30a8EM55M9%2FwTDY5BEskQpNQj%2Fg8VUE%2FAtGTXJKOp80P597isOH4bBUVwEnheT%2BWTCEY9rkmERHrub42v4z2NbJqkjVHhamIRljfORAvlyrE3D3noJIArpmF2%2FOYy8rXKDQUCqTvXgyWuO%2BDq1ZMoF9LBf6lBiT8XJFmFEYXeow0GV0OObdfHr9ydxuqS0yl65Z4cE3tbfki0LKbG%2BsmspctqTzd%2B3jDhYuMzbyGnAzY8OorlrvJ%2FhyQ3CBn9MjiWYbAu%2FV6U7l7NqQ9yoj95BbPLj2u1%2BoBjmg4o7PXQaC1VkizX0iFgaunGsiNbS1ogCjD5mqbEBjqkAXSL7Z3rHxl7Nkfl8O7a3WjqggC%2F2gFjFlPEUbHkcaAEBRD4hU%2F5sAlyhCg8E%2F9AtQBfZtkEu3%2FHz6TNxlC9B%2BZbpTtbEKP46RydLgIoDVevysSkPbq%2BAktRVFWw%2FdML8QCYOWECCRnR89uoi2mLtrG5wYe5nDdqSGtC12Ed4zy1d2tCdCbV2B9zE6pZF4IhsHQ6BQ47ShY9hSq2EeQpiEvUybxv&X-Amz-Signature=eea8e26afee08aaa19bd3b02d9b2019e159edc1a7da8112b6a9b056b99b971cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PUXAVR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoVMSsVHxLuZi3R8eZjdcIjBn3DtX8duQ7ks92OerJxwIhAOCKpdQxaa8%2Fuu8A4CJTc1T7TV5jSbOXzai%2BuFPGsp9XKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0rQlljb3Z%2B6b%2Br%2FYq3APdTTAWIO9fNAGhGZChk8oL51Kw0R6qdJvNCzJZwffxbI1xveemNzLSSkYUz2fV%2FjaOZ3NKL42rb7HhM6bwuLmge4s%2Bp8zQKpf%2FvxIoIkL4T%2BfhVLgNosdpdAPAVppx3PV7Q%2B0W3ZUfZlu1AHabqX9EiKijUzBuuDWGJIXKoapcBdafn6JdC963ynhF1eX7StBe%2BaRxQ5pSegwq8l8H5NC1JKOLlLN23f9cCXDE9m1maSnww%2B7eJOjNvxmRkWoS8WZtLk9Xz1if%2BL6BxrFxqNboKZ4Q%2FTm073zpMm5CVdxDhC6uNkhvR9exUld30a8EM55M9%2FwTDY5BEskQpNQj%2Fg8VUE%2FAtGTXJKOp80P597isOH4bBUVwEnheT%2BWTCEY9rkmERHrub42v4z2NbJqkjVHhamIRljfORAvlyrE3D3noJIArpmF2%2FOYy8rXKDQUCqTvXgyWuO%2BDq1ZMoF9LBf6lBiT8XJFmFEYXeow0GV0OObdfHr9ydxuqS0yl65Z4cE3tbfki0LKbG%2BsmspctqTzd%2B3jDhYuMzbyGnAzY8OorlrvJ%2FhyQ3CBn9MjiWYbAu%2FV6U7l7NqQ9yoj95BbPLj2u1%2BoBjmg4o7PXQaC1VkizX0iFgaunGsiNbS1ogCjD5mqbEBjqkAXSL7Z3rHxl7Nkfl8O7a3WjqggC%2F2gFjFlPEUbHkcaAEBRD4hU%2F5sAlyhCg8E%2F9AtQBfZtkEu3%2FHz6TNxlC9B%2BZbpTtbEKP46RydLgIoDVevysSkPbq%2BAktRVFWw%2FdML8QCYOWECCRnR89uoi2mLtrG5wYe5nDdqSGtC12Ed4zy1d2tCdCbV2B9zE6pZF4IhsHQ6BQ47ShY9hSq2EeQpiEvUybxv&X-Amz-Signature=6d963c474cdbc7e7a9bdff2bc28e584423605cb98a76178dbd7af7ff37a5673e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PUXAVR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoVMSsVHxLuZi3R8eZjdcIjBn3DtX8duQ7ks92OerJxwIhAOCKpdQxaa8%2Fuu8A4CJTc1T7TV5jSbOXzai%2BuFPGsp9XKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0rQlljb3Z%2B6b%2Br%2FYq3APdTTAWIO9fNAGhGZChk8oL51Kw0R6qdJvNCzJZwffxbI1xveemNzLSSkYUz2fV%2FjaOZ3NKL42rb7HhM6bwuLmge4s%2Bp8zQKpf%2FvxIoIkL4T%2BfhVLgNosdpdAPAVppx3PV7Q%2B0W3ZUfZlu1AHabqX9EiKijUzBuuDWGJIXKoapcBdafn6JdC963ynhF1eX7StBe%2BaRxQ5pSegwq8l8H5NC1JKOLlLN23f9cCXDE9m1maSnww%2B7eJOjNvxmRkWoS8WZtLk9Xz1if%2BL6BxrFxqNboKZ4Q%2FTm073zpMm5CVdxDhC6uNkhvR9exUld30a8EM55M9%2FwTDY5BEskQpNQj%2Fg8VUE%2FAtGTXJKOp80P597isOH4bBUVwEnheT%2BWTCEY9rkmERHrub42v4z2NbJqkjVHhamIRljfORAvlyrE3D3noJIArpmF2%2FOYy8rXKDQUCqTvXgyWuO%2BDq1ZMoF9LBf6lBiT8XJFmFEYXeow0GV0OObdfHr9ydxuqS0yl65Z4cE3tbfki0LKbG%2BsmspctqTzd%2B3jDhYuMzbyGnAzY8OorlrvJ%2FhyQ3CBn9MjiWYbAu%2FV6U7l7NqQ9yoj95BbPLj2u1%2BoBjmg4o7PXQaC1VkizX0iFgaunGsiNbS1ogCjD5mqbEBjqkAXSL7Z3rHxl7Nkfl8O7a3WjqggC%2F2gFjFlPEUbHkcaAEBRD4hU%2F5sAlyhCg8E%2F9AtQBfZtkEu3%2FHz6TNxlC9B%2BZbpTtbEKP46RydLgIoDVevysSkPbq%2BAktRVFWw%2FdML8QCYOWECCRnR89uoi2mLtrG5wYe5nDdqSGtC12Ed4zy1d2tCdCbV2B9zE6pZF4IhsHQ6BQ47ShY9hSq2EeQpiEvUybxv&X-Amz-Signature=3b9f26ef3eafd6625931d7b108c6a0d6c3fb8a9c90c8827171d2a68b73d76a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PUXAVR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoVMSsVHxLuZi3R8eZjdcIjBn3DtX8duQ7ks92OerJxwIhAOCKpdQxaa8%2Fuu8A4CJTc1T7TV5jSbOXzai%2BuFPGsp9XKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0rQlljb3Z%2B6b%2Br%2FYq3APdTTAWIO9fNAGhGZChk8oL51Kw0R6qdJvNCzJZwffxbI1xveemNzLSSkYUz2fV%2FjaOZ3NKL42rb7HhM6bwuLmge4s%2Bp8zQKpf%2FvxIoIkL4T%2BfhVLgNosdpdAPAVppx3PV7Q%2B0W3ZUfZlu1AHabqX9EiKijUzBuuDWGJIXKoapcBdafn6JdC963ynhF1eX7StBe%2BaRxQ5pSegwq8l8H5NC1JKOLlLN23f9cCXDE9m1maSnww%2B7eJOjNvxmRkWoS8WZtLk9Xz1if%2BL6BxrFxqNboKZ4Q%2FTm073zpMm5CVdxDhC6uNkhvR9exUld30a8EM55M9%2FwTDY5BEskQpNQj%2Fg8VUE%2FAtGTXJKOp80P597isOH4bBUVwEnheT%2BWTCEY9rkmERHrub42v4z2NbJqkjVHhamIRljfORAvlyrE3D3noJIArpmF2%2FOYy8rXKDQUCqTvXgyWuO%2BDq1ZMoF9LBf6lBiT8XJFmFEYXeow0GV0OObdfHr9ydxuqS0yl65Z4cE3tbfki0LKbG%2BsmspctqTzd%2B3jDhYuMzbyGnAzY8OorlrvJ%2FhyQ3CBn9MjiWYbAu%2FV6U7l7NqQ9yoj95BbPLj2u1%2BoBjmg4o7PXQaC1VkizX0iFgaunGsiNbS1ogCjD5mqbEBjqkAXSL7Z3rHxl7Nkfl8O7a3WjqggC%2F2gFjFlPEUbHkcaAEBRD4hU%2F5sAlyhCg8E%2F9AtQBfZtkEu3%2FHz6TNxlC9B%2BZbpTtbEKP46RydLgIoDVevysSkPbq%2BAktRVFWw%2FdML8QCYOWECCRnR89uoi2mLtrG5wYe5nDdqSGtC12Ed4zy1d2tCdCbV2B9zE6pZF4IhsHQ6BQ47ShY9hSq2EeQpiEvUybxv&X-Amz-Signature=839071c93ab00c92c8d0bbf1b0f869352d15665d08d2f342826bb88a7a95ff53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PUXAVR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoVMSsVHxLuZi3R8eZjdcIjBn3DtX8duQ7ks92OerJxwIhAOCKpdQxaa8%2Fuu8A4CJTc1T7TV5jSbOXzai%2BuFPGsp9XKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0rQlljb3Z%2B6b%2Br%2FYq3APdTTAWIO9fNAGhGZChk8oL51Kw0R6qdJvNCzJZwffxbI1xveemNzLSSkYUz2fV%2FjaOZ3NKL42rb7HhM6bwuLmge4s%2Bp8zQKpf%2FvxIoIkL4T%2BfhVLgNosdpdAPAVppx3PV7Q%2B0W3ZUfZlu1AHabqX9EiKijUzBuuDWGJIXKoapcBdafn6JdC963ynhF1eX7StBe%2BaRxQ5pSegwq8l8H5NC1JKOLlLN23f9cCXDE9m1maSnww%2B7eJOjNvxmRkWoS8WZtLk9Xz1if%2BL6BxrFxqNboKZ4Q%2FTm073zpMm5CVdxDhC6uNkhvR9exUld30a8EM55M9%2FwTDY5BEskQpNQj%2Fg8VUE%2FAtGTXJKOp80P597isOH4bBUVwEnheT%2BWTCEY9rkmERHrub42v4z2NbJqkjVHhamIRljfORAvlyrE3D3noJIArpmF2%2FOYy8rXKDQUCqTvXgyWuO%2BDq1ZMoF9LBf6lBiT8XJFmFEYXeow0GV0OObdfHr9ydxuqS0yl65Z4cE3tbfki0LKbG%2BsmspctqTzd%2B3jDhYuMzbyGnAzY8OorlrvJ%2FhyQ3CBn9MjiWYbAu%2FV6U7l7NqQ9yoj95BbPLj2u1%2BoBjmg4o7PXQaC1VkizX0iFgaunGsiNbS1ogCjD5mqbEBjqkAXSL7Z3rHxl7Nkfl8O7a3WjqggC%2F2gFjFlPEUbHkcaAEBRD4hU%2F5sAlyhCg8E%2F9AtQBfZtkEu3%2FHz6TNxlC9B%2BZbpTtbEKP46RydLgIoDVevysSkPbq%2BAktRVFWw%2FdML8QCYOWECCRnR89uoi2mLtrG5wYe5nDdqSGtC12Ed4zy1d2tCdCbV2B9zE6pZF4IhsHQ6BQ47ShY9hSq2EeQpiEvUybxv&X-Amz-Signature=5924bce077ac0c8090c751566c9ba702bf2868d90c4f7e5672ff14455a74509a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PUXAVR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoVMSsVHxLuZi3R8eZjdcIjBn3DtX8duQ7ks92OerJxwIhAOCKpdQxaa8%2Fuu8A4CJTc1T7TV5jSbOXzai%2BuFPGsp9XKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0rQlljb3Z%2B6b%2Br%2FYq3APdTTAWIO9fNAGhGZChk8oL51Kw0R6qdJvNCzJZwffxbI1xveemNzLSSkYUz2fV%2FjaOZ3NKL42rb7HhM6bwuLmge4s%2Bp8zQKpf%2FvxIoIkL4T%2BfhVLgNosdpdAPAVppx3PV7Q%2B0W3ZUfZlu1AHabqX9EiKijUzBuuDWGJIXKoapcBdafn6JdC963ynhF1eX7StBe%2BaRxQ5pSegwq8l8H5NC1JKOLlLN23f9cCXDE9m1maSnww%2B7eJOjNvxmRkWoS8WZtLk9Xz1if%2BL6BxrFxqNboKZ4Q%2FTm073zpMm5CVdxDhC6uNkhvR9exUld30a8EM55M9%2FwTDY5BEskQpNQj%2Fg8VUE%2FAtGTXJKOp80P597isOH4bBUVwEnheT%2BWTCEY9rkmERHrub42v4z2NbJqkjVHhamIRljfORAvlyrE3D3noJIArpmF2%2FOYy8rXKDQUCqTvXgyWuO%2BDq1ZMoF9LBf6lBiT8XJFmFEYXeow0GV0OObdfHr9ydxuqS0yl65Z4cE3tbfki0LKbG%2BsmspctqTzd%2B3jDhYuMzbyGnAzY8OorlrvJ%2FhyQ3CBn9MjiWYbAu%2FV6U7l7NqQ9yoj95BbPLj2u1%2BoBjmg4o7PXQaC1VkizX0iFgaunGsiNbS1ogCjD5mqbEBjqkAXSL7Z3rHxl7Nkfl8O7a3WjqggC%2F2gFjFlPEUbHkcaAEBRD4hU%2F5sAlyhCg8E%2F9AtQBfZtkEu3%2FHz6TNxlC9B%2BZbpTtbEKP46RydLgIoDVevysSkPbq%2BAktRVFWw%2FdML8QCYOWECCRnR89uoi2mLtrG5wYe5nDdqSGtC12Ed4zy1d2tCdCbV2B9zE6pZF4IhsHQ6BQ47ShY9hSq2EeQpiEvUybxv&X-Amz-Signature=97207bd1365fdd4fd5f1bef0d318a0e855f840514a8ac47652f3f59997a92e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
        }.items()
    )
    
    
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PUXAVR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoVMSsVHxLuZi3R8eZjdcIjBn3DtX8duQ7ks92OerJxwIhAOCKpdQxaa8%2Fuu8A4CJTc1T7TV5jSbOXzai%2BuFPGsp9XKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0rQlljb3Z%2B6b%2Br%2FYq3APdTTAWIO9fNAGhGZChk8oL51Kw0R6qdJvNCzJZwffxbI1xveemNzLSSkYUz2fV%2FjaOZ3NKL42rb7HhM6bwuLmge4s%2Bp8zQKpf%2FvxIoIkL4T%2BfhVLgNosdpdAPAVppx3PV7Q%2B0W3ZUfZlu1AHabqX9EiKijUzBuuDWGJIXKoapcBdafn6JdC963ynhF1eX7StBe%2BaRxQ5pSegwq8l8H5NC1JKOLlLN23f9cCXDE9m1maSnww%2B7eJOjNvxmRkWoS8WZtLk9Xz1if%2BL6BxrFxqNboKZ4Q%2FTm073zpMm5CVdxDhC6uNkhvR9exUld30a8EM55M9%2FwTDY5BEskQpNQj%2Fg8VUE%2FAtGTXJKOp80P597isOH4bBUVwEnheT%2BWTCEY9rkmERHrub42v4z2NbJqkjVHhamIRljfORAvlyrE3D3noJIArpmF2%2FOYy8rXKDQUCqTvXgyWuO%2BDq1ZMoF9LBf6lBiT8XJFmFEYXeow0GV0OObdfHr9ydxuqS0yl65Z4cE3tbfki0LKbG%2BsmspctqTzd%2B3jDhYuMzbyGnAzY8OorlrvJ%2FhyQ3CBn9MjiWYbAu%2FV6U7l7NqQ9yoj95BbPLj2u1%2BoBjmg4o7PXQaC1VkizX0iFgaunGsiNbS1ogCjD5mqbEBjqkAXSL7Z3rHxl7Nkfl8O7a3WjqggC%2F2gFjFlPEUbHkcaAEBRD4hU%2F5sAlyhCg8E%2F9AtQBfZtkEu3%2FHz6TNxlC9B%2BZbpTtbEKP46RydLgIoDVevysSkPbq%2BAktRVFWw%2FdML8QCYOWECCRnR89uoi2mLtrG5wYe5nDdqSGtC12Ed4zy1d2tCdCbV2B9zE6pZF4IhsHQ6BQ47ShY9hSq2EeQpiEvUybxv&X-Amz-Signature=1ed37ee68f32b7f4174e4fac1e297f3e6961b9380483af9d2c0f5b6d03d92a93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PUXAVR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoVMSsVHxLuZi3R8eZjdcIjBn3DtX8duQ7ks92OerJxwIhAOCKpdQxaa8%2Fuu8A4CJTc1T7TV5jSbOXzai%2BuFPGsp9XKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0rQlljb3Z%2B6b%2Br%2FYq3APdTTAWIO9fNAGhGZChk8oL51Kw0R6qdJvNCzJZwffxbI1xveemNzLSSkYUz2fV%2FjaOZ3NKL42rb7HhM6bwuLmge4s%2Bp8zQKpf%2FvxIoIkL4T%2BfhVLgNosdpdAPAVppx3PV7Q%2B0W3ZUfZlu1AHabqX9EiKijUzBuuDWGJIXKoapcBdafn6JdC963ynhF1eX7StBe%2BaRxQ5pSegwq8l8H5NC1JKOLlLN23f9cCXDE9m1maSnww%2B7eJOjNvxmRkWoS8WZtLk9Xz1if%2BL6BxrFxqNboKZ4Q%2FTm073zpMm5CVdxDhC6uNkhvR9exUld30a8EM55M9%2FwTDY5BEskQpNQj%2Fg8VUE%2FAtGTXJKOp80P597isOH4bBUVwEnheT%2BWTCEY9rkmERHrub42v4z2NbJqkjVHhamIRljfORAvlyrE3D3noJIArpmF2%2FOYy8rXKDQUCqTvXgyWuO%2BDq1ZMoF9LBf6lBiT8XJFmFEYXeow0GV0OObdfHr9ydxuqS0yl65Z4cE3tbfki0LKbG%2BsmspctqTzd%2B3jDhYuMzbyGnAzY8OorlrvJ%2FhyQ3CBn9MjiWYbAu%2FV6U7l7NqQ9yoj95BbPLj2u1%2BoBjmg4o7PXQaC1VkizX0iFgaunGsiNbS1ogCjD5mqbEBjqkAXSL7Z3rHxl7Nkfl8O7a3WjqggC%2F2gFjFlPEUbHkcaAEBRD4hU%2F5sAlyhCg8E%2F9AtQBfZtkEu3%2FHz6TNxlC9B%2BZbpTtbEKP46RydLgIoDVevysSkPbq%2BAktRVFWw%2FdML8QCYOWECCRnR89uoi2mLtrG5wYe5nDdqSGtC12Ed4zy1d2tCdCbV2B9zE6pZF4IhsHQ6BQ47ShY9hSq2EeQpiEvUybxv&X-Amz-Signature=2c777e99df659c63a7983778b0c49cf6268979b220fc1a53498e908a6a9aed9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PUXAVR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoVMSsVHxLuZi3R8eZjdcIjBn3DtX8duQ7ks92OerJxwIhAOCKpdQxaa8%2Fuu8A4CJTc1T7TV5jSbOXzai%2BuFPGsp9XKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0rQlljb3Z%2B6b%2Br%2FYq3APdTTAWIO9fNAGhGZChk8oL51Kw0R6qdJvNCzJZwffxbI1xveemNzLSSkYUz2fV%2FjaOZ3NKL42rb7HhM6bwuLmge4s%2Bp8zQKpf%2FvxIoIkL4T%2BfhVLgNosdpdAPAVppx3PV7Q%2B0W3ZUfZlu1AHabqX9EiKijUzBuuDWGJIXKoapcBdafn6JdC963ynhF1eX7StBe%2BaRxQ5pSegwq8l8H5NC1JKOLlLN23f9cCXDE9m1maSnww%2B7eJOjNvxmRkWoS8WZtLk9Xz1if%2BL6BxrFxqNboKZ4Q%2FTm073zpMm5CVdxDhC6uNkhvR9exUld30a8EM55M9%2FwTDY5BEskQpNQj%2Fg8VUE%2FAtGTXJKOp80P597isOH4bBUVwEnheT%2BWTCEY9rkmERHrub42v4z2NbJqkjVHhamIRljfORAvlyrE3D3noJIArpmF2%2FOYy8rXKDQUCqTvXgyWuO%2BDq1ZMoF9LBf6lBiT8XJFmFEYXeow0GV0OObdfHr9ydxuqS0yl65Z4cE3tbfki0LKbG%2BsmspctqTzd%2B3jDhYuMzbyGnAzY8OorlrvJ%2FhyQ3CBn9MjiWYbAu%2FV6U7l7NqQ9yoj95BbPLj2u1%2BoBjmg4o7PXQaC1VkizX0iFgaunGsiNbS1ogCjD5mqbEBjqkAXSL7Z3rHxl7Nkfl8O7a3WjqggC%2F2gFjFlPEUbHkcaAEBRD4hU%2F5sAlyhCg8E%2F9AtQBfZtkEu3%2FHz6TNxlC9B%2BZbpTtbEKP46RydLgIoDVevysSkPbq%2BAktRVFWw%2FdML8QCYOWECCRnR89uoi2mLtrG5wYe5nDdqSGtC12Ed4zy1d2tCdCbV2B9zE6pZF4IhsHQ6BQ47ShY9hSq2EeQpiEvUybxv&X-Amz-Signature=7489d9d2af521315d286dc8c381fb8deeb2277e79d255b937332660694c6f5eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PUXAVR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoVMSsVHxLuZi3R8eZjdcIjBn3DtX8duQ7ks92OerJxwIhAOCKpdQxaa8%2Fuu8A4CJTc1T7TV5jSbOXzai%2BuFPGsp9XKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0rQlljb3Z%2B6b%2Br%2FYq3APdTTAWIO9fNAGhGZChk8oL51Kw0R6qdJvNCzJZwffxbI1xveemNzLSSkYUz2fV%2FjaOZ3NKL42rb7HhM6bwuLmge4s%2Bp8zQKpf%2FvxIoIkL4T%2BfhVLgNosdpdAPAVppx3PV7Q%2B0W3ZUfZlu1AHabqX9EiKijUzBuuDWGJIXKoapcBdafn6JdC963ynhF1eX7StBe%2BaRxQ5pSegwq8l8H5NC1JKOLlLN23f9cCXDE9m1maSnww%2B7eJOjNvxmRkWoS8WZtLk9Xz1if%2BL6BxrFxqNboKZ4Q%2FTm073zpMm5CVdxDhC6uNkhvR9exUld30a8EM55M9%2FwTDY5BEskQpNQj%2Fg8VUE%2FAtGTXJKOp80P597isOH4bBUVwEnheT%2BWTCEY9rkmERHrub42v4z2NbJqkjVHhamIRljfORAvlyrE3D3noJIArpmF2%2FOYy8rXKDQUCqTvXgyWuO%2BDq1ZMoF9LBf6lBiT8XJFmFEYXeow0GV0OObdfHr9ydxuqS0yl65Z4cE3tbfki0LKbG%2BsmspctqTzd%2B3jDhYuMzbyGnAzY8OorlrvJ%2FhyQ3CBn9MjiWYbAu%2FV6U7l7NqQ9yoj95BbPLj2u1%2BoBjmg4o7PXQaC1VkizX0iFgaunGsiNbS1ogCjD5mqbEBjqkAXSL7Z3rHxl7Nkfl8O7a3WjqggC%2F2gFjFlPEUbHkcaAEBRD4hU%2F5sAlyhCg8E%2F9AtQBfZtkEu3%2FHz6TNxlC9B%2BZbpTtbEKP46RydLgIoDVevysSkPbq%2BAktRVFWw%2FdML8QCYOWECCRnR89uoi2mLtrG5wYe5nDdqSGtC12Ed4zy1d2tCdCbV2B9zE6pZF4IhsHQ6BQ47ShY9hSq2EeQpiEvUybxv&X-Amz-Signature=8804cd834a4e5b248edc73d48831bec612febaa53830e74b80bebb7f8441980e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PUXAVR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoVMSsVHxLuZi3R8eZjdcIjBn3DtX8duQ7ks92OerJxwIhAOCKpdQxaa8%2Fuu8A4CJTc1T7TV5jSbOXzai%2BuFPGsp9XKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0rQlljb3Z%2B6b%2Br%2FYq3APdTTAWIO9fNAGhGZChk8oL51Kw0R6qdJvNCzJZwffxbI1xveemNzLSSkYUz2fV%2FjaOZ3NKL42rb7HhM6bwuLmge4s%2Bp8zQKpf%2FvxIoIkL4T%2BfhVLgNosdpdAPAVppx3PV7Q%2B0W3ZUfZlu1AHabqX9EiKijUzBuuDWGJIXKoapcBdafn6JdC963ynhF1eX7StBe%2BaRxQ5pSegwq8l8H5NC1JKOLlLN23f9cCXDE9m1maSnww%2B7eJOjNvxmRkWoS8WZtLk9Xz1if%2BL6BxrFxqNboKZ4Q%2FTm073zpMm5CVdxDhC6uNkhvR9exUld30a8EM55M9%2FwTDY5BEskQpNQj%2Fg8VUE%2FAtGTXJKOp80P597isOH4bBUVwEnheT%2BWTCEY9rkmERHrub42v4z2NbJqkjVHhamIRljfORAvlyrE3D3noJIArpmF2%2FOYy8rXKDQUCqTvXgyWuO%2BDq1ZMoF9LBf6lBiT8XJFmFEYXeow0GV0OObdfHr9ydxuqS0yl65Z4cE3tbfki0LKbG%2BsmspctqTzd%2B3jDhYuMzbyGnAzY8OorlrvJ%2FhyQ3CBn9MjiWYbAu%2FV6U7l7NqQ9yoj95BbPLj2u1%2BoBjmg4o7PXQaC1VkizX0iFgaunGsiNbS1ogCjD5mqbEBjqkAXSL7Z3rHxl7Nkfl8O7a3WjqggC%2F2gFjFlPEUbHkcaAEBRD4hU%2F5sAlyhCg8E%2F9AtQBfZtkEu3%2FHz6TNxlC9B%2BZbpTtbEKP46RydLgIoDVevysSkPbq%2BAktRVFWw%2FdML8QCYOWECCRnR89uoi2mLtrG5wYe5nDdqSGtC12Ed4zy1d2tCdCbV2B9zE6pZF4IhsHQ6BQ47ShY9hSq2EeQpiEvUybxv&X-Amz-Signature=4551852b595d1d7ce78156d1f8bacf3850abbf6108e8db702f2c5bf930981f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
