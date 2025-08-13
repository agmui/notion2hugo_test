---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJZD4AP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApIye4vXcsymsGFiECFEc1JfNbWRIJHphj3nQuMIl5rAiBWYY%2B44YoYfQ0xcEq4ugx%2B28ZkWWvwRXeJmp%2B4gvxrfir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMgSrp49ObHnA3ikuRKtwDdiKvnnEWQU0FDRvQJZFYUO4U1qLqj4yKjHFJfAPux4VumD%2F2q%2FesBJYAP13CVkhQvMAlnW4R6aJO2tK%2Fw2QZkFKThz5iJfVfMZu2exzggqKSM10pajXxcBBpsMu5Lqz6wHUe3ywl1Z4%2FAjHwXEmrnFCve%2FNWNa9sJTox7sCRLTV7M6NStkSyWwtitvFfKArHvCpF208V3lYGdyaqOKUKRtv6weYK7UGEVeALwctgGEA2j%2BZLLnmW3KDQzlm9pOY%2FOW6nlucpCk66Z4oh%2FsXe1BhrMLoYRKWBYBrCv%2FDrDon%2FWDyIzGrqTQYWipdvUaOpvnQvsqiaZqTcSzm%2FReYBfflmC%2F89pcq2NaO9ZML3mohB3sXf44jt5w%2B1zVBI%2FHwC0OagzLyh70M0I%2F52JwupkDnHV7QCk1XMd0qoW6g0Wl9PlTPJgSi0m%2B1RJOkS7pLe2jA06PhmdFRywXPss2AvDZVLra03WsOZzS1GZ5A%2B6Hx5j2AeGUCm5vit9MQOHB3bYTEdjOV57QOZ8jqUPH4adFklij1eSbGreF%2BT4Aib9%2B0c9Yqu%2BTG32NoNG3Vhr56QYL%2BgPpRxZDJfz3Q7sqZ3oxrqNsZ2%2BYjiB4kMiBYMj1CK8xU%2FydTxj0Wz2hQwp4bwxAY6pgEAOqFnMh1DPmqJGTOo7Vot%2BsNsk07gRBXrGejkaZCkrd74n0SaEjpsN8ZkGBoOMn3QC6cn%2BxjCPAoi%2BJTQZsf4Iwd0ZS%2BZwAaDaV9QOdHxwsv%2F50HPBocb%2BocUXzzsg8QDVCU4souC8uUUOV42qk3Dy0mEcXKG7KqrYBBJlguEDQKVAxdlzuh%2F0zFiNIYIh2DRDjm1yvUSwGLDzxfZ4j0xGy9YVLkD&X-Amz-Signature=ee0feba31146266aec293b6a9f443afe4b69a92ab8ecd8f5eee271fd15222f2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJZD4AP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApIye4vXcsymsGFiECFEc1JfNbWRIJHphj3nQuMIl5rAiBWYY%2B44YoYfQ0xcEq4ugx%2B28ZkWWvwRXeJmp%2B4gvxrfir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMgSrp49ObHnA3ikuRKtwDdiKvnnEWQU0FDRvQJZFYUO4U1qLqj4yKjHFJfAPux4VumD%2F2q%2FesBJYAP13CVkhQvMAlnW4R6aJO2tK%2Fw2QZkFKThz5iJfVfMZu2exzggqKSM10pajXxcBBpsMu5Lqz6wHUe3ywl1Z4%2FAjHwXEmrnFCve%2FNWNa9sJTox7sCRLTV7M6NStkSyWwtitvFfKArHvCpF208V3lYGdyaqOKUKRtv6weYK7UGEVeALwctgGEA2j%2BZLLnmW3KDQzlm9pOY%2FOW6nlucpCk66Z4oh%2FsXe1BhrMLoYRKWBYBrCv%2FDrDon%2FWDyIzGrqTQYWipdvUaOpvnQvsqiaZqTcSzm%2FReYBfflmC%2F89pcq2NaO9ZML3mohB3sXf44jt5w%2B1zVBI%2FHwC0OagzLyh70M0I%2F52JwupkDnHV7QCk1XMd0qoW6g0Wl9PlTPJgSi0m%2B1RJOkS7pLe2jA06PhmdFRywXPss2AvDZVLra03WsOZzS1GZ5A%2B6Hx5j2AeGUCm5vit9MQOHB3bYTEdjOV57QOZ8jqUPH4adFklij1eSbGreF%2BT4Aib9%2B0c9Yqu%2BTG32NoNG3Vhr56QYL%2BgPpRxZDJfz3Q7sqZ3oxrqNsZ2%2BYjiB4kMiBYMj1CK8xU%2FydTxj0Wz2hQwp4bwxAY6pgEAOqFnMh1DPmqJGTOo7Vot%2BsNsk07gRBXrGejkaZCkrd74n0SaEjpsN8ZkGBoOMn3QC6cn%2BxjCPAoi%2BJTQZsf4Iwd0ZS%2BZwAaDaV9QOdHxwsv%2F50HPBocb%2BocUXzzsg8QDVCU4souC8uUUOV42qk3Dy0mEcXKG7KqrYBBJlguEDQKVAxdlzuh%2F0zFiNIYIh2DRDjm1yvUSwGLDzxfZ4j0xGy9YVLkD&X-Amz-Signature=0d13107b1085a3ed5488beb0767376bcc6b12c5563c5cb2653b362674bda6648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJZD4AP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApIye4vXcsymsGFiECFEc1JfNbWRIJHphj3nQuMIl5rAiBWYY%2B44YoYfQ0xcEq4ugx%2B28ZkWWvwRXeJmp%2B4gvxrfir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMgSrp49ObHnA3ikuRKtwDdiKvnnEWQU0FDRvQJZFYUO4U1qLqj4yKjHFJfAPux4VumD%2F2q%2FesBJYAP13CVkhQvMAlnW4R6aJO2tK%2Fw2QZkFKThz5iJfVfMZu2exzggqKSM10pajXxcBBpsMu5Lqz6wHUe3ywl1Z4%2FAjHwXEmrnFCve%2FNWNa9sJTox7sCRLTV7M6NStkSyWwtitvFfKArHvCpF208V3lYGdyaqOKUKRtv6weYK7UGEVeALwctgGEA2j%2BZLLnmW3KDQzlm9pOY%2FOW6nlucpCk66Z4oh%2FsXe1BhrMLoYRKWBYBrCv%2FDrDon%2FWDyIzGrqTQYWipdvUaOpvnQvsqiaZqTcSzm%2FReYBfflmC%2F89pcq2NaO9ZML3mohB3sXf44jt5w%2B1zVBI%2FHwC0OagzLyh70M0I%2F52JwupkDnHV7QCk1XMd0qoW6g0Wl9PlTPJgSi0m%2B1RJOkS7pLe2jA06PhmdFRywXPss2AvDZVLra03WsOZzS1GZ5A%2B6Hx5j2AeGUCm5vit9MQOHB3bYTEdjOV57QOZ8jqUPH4adFklij1eSbGreF%2BT4Aib9%2B0c9Yqu%2BTG32NoNG3Vhr56QYL%2BgPpRxZDJfz3Q7sqZ3oxrqNsZ2%2BYjiB4kMiBYMj1CK8xU%2FydTxj0Wz2hQwp4bwxAY6pgEAOqFnMh1DPmqJGTOo7Vot%2BsNsk07gRBXrGejkaZCkrd74n0SaEjpsN8ZkGBoOMn3QC6cn%2BxjCPAoi%2BJTQZsf4Iwd0ZS%2BZwAaDaV9QOdHxwsv%2F50HPBocb%2BocUXzzsg8QDVCU4souC8uUUOV42qk3Dy0mEcXKG7KqrYBBJlguEDQKVAxdlzuh%2F0zFiNIYIh2DRDjm1yvUSwGLDzxfZ4j0xGy9YVLkD&X-Amz-Signature=8a6d9580c0633402e7398a65a53ee0f2b14fd06fa1edd66c2c4958a8e4415bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJZD4AP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApIye4vXcsymsGFiECFEc1JfNbWRIJHphj3nQuMIl5rAiBWYY%2B44YoYfQ0xcEq4ugx%2B28ZkWWvwRXeJmp%2B4gvxrfir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMgSrp49ObHnA3ikuRKtwDdiKvnnEWQU0FDRvQJZFYUO4U1qLqj4yKjHFJfAPux4VumD%2F2q%2FesBJYAP13CVkhQvMAlnW4R6aJO2tK%2Fw2QZkFKThz5iJfVfMZu2exzggqKSM10pajXxcBBpsMu5Lqz6wHUe3ywl1Z4%2FAjHwXEmrnFCve%2FNWNa9sJTox7sCRLTV7M6NStkSyWwtitvFfKArHvCpF208V3lYGdyaqOKUKRtv6weYK7UGEVeALwctgGEA2j%2BZLLnmW3KDQzlm9pOY%2FOW6nlucpCk66Z4oh%2FsXe1BhrMLoYRKWBYBrCv%2FDrDon%2FWDyIzGrqTQYWipdvUaOpvnQvsqiaZqTcSzm%2FReYBfflmC%2F89pcq2NaO9ZML3mohB3sXf44jt5w%2B1zVBI%2FHwC0OagzLyh70M0I%2F52JwupkDnHV7QCk1XMd0qoW6g0Wl9PlTPJgSi0m%2B1RJOkS7pLe2jA06PhmdFRywXPss2AvDZVLra03WsOZzS1GZ5A%2B6Hx5j2AeGUCm5vit9MQOHB3bYTEdjOV57QOZ8jqUPH4adFklij1eSbGreF%2BT4Aib9%2B0c9Yqu%2BTG32NoNG3Vhr56QYL%2BgPpRxZDJfz3Q7sqZ3oxrqNsZ2%2BYjiB4kMiBYMj1CK8xU%2FydTxj0Wz2hQwp4bwxAY6pgEAOqFnMh1DPmqJGTOo7Vot%2BsNsk07gRBXrGejkaZCkrd74n0SaEjpsN8ZkGBoOMn3QC6cn%2BxjCPAoi%2BJTQZsf4Iwd0ZS%2BZwAaDaV9QOdHxwsv%2F50HPBocb%2BocUXzzsg8QDVCU4souC8uUUOV42qk3Dy0mEcXKG7KqrYBBJlguEDQKVAxdlzuh%2F0zFiNIYIh2DRDjm1yvUSwGLDzxfZ4j0xGy9YVLkD&X-Amz-Signature=74b340b2ca5d0b411b6f6798380a57d62df24b0f1768a34b0c352401ca5143fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJZD4AP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApIye4vXcsymsGFiECFEc1JfNbWRIJHphj3nQuMIl5rAiBWYY%2B44YoYfQ0xcEq4ugx%2B28ZkWWvwRXeJmp%2B4gvxrfir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMgSrp49ObHnA3ikuRKtwDdiKvnnEWQU0FDRvQJZFYUO4U1qLqj4yKjHFJfAPux4VumD%2F2q%2FesBJYAP13CVkhQvMAlnW4R6aJO2tK%2Fw2QZkFKThz5iJfVfMZu2exzggqKSM10pajXxcBBpsMu5Lqz6wHUe3ywl1Z4%2FAjHwXEmrnFCve%2FNWNa9sJTox7sCRLTV7M6NStkSyWwtitvFfKArHvCpF208V3lYGdyaqOKUKRtv6weYK7UGEVeALwctgGEA2j%2BZLLnmW3KDQzlm9pOY%2FOW6nlucpCk66Z4oh%2FsXe1BhrMLoYRKWBYBrCv%2FDrDon%2FWDyIzGrqTQYWipdvUaOpvnQvsqiaZqTcSzm%2FReYBfflmC%2F89pcq2NaO9ZML3mohB3sXf44jt5w%2B1zVBI%2FHwC0OagzLyh70M0I%2F52JwupkDnHV7QCk1XMd0qoW6g0Wl9PlTPJgSi0m%2B1RJOkS7pLe2jA06PhmdFRywXPss2AvDZVLra03WsOZzS1GZ5A%2B6Hx5j2AeGUCm5vit9MQOHB3bYTEdjOV57QOZ8jqUPH4adFklij1eSbGreF%2BT4Aib9%2B0c9Yqu%2BTG32NoNG3Vhr56QYL%2BgPpRxZDJfz3Q7sqZ3oxrqNsZ2%2BYjiB4kMiBYMj1CK8xU%2FydTxj0Wz2hQwp4bwxAY6pgEAOqFnMh1DPmqJGTOo7Vot%2BsNsk07gRBXrGejkaZCkrd74n0SaEjpsN8ZkGBoOMn3QC6cn%2BxjCPAoi%2BJTQZsf4Iwd0ZS%2BZwAaDaV9QOdHxwsv%2F50HPBocb%2BocUXzzsg8QDVCU4souC8uUUOV42qk3Dy0mEcXKG7KqrYBBJlguEDQKVAxdlzuh%2F0zFiNIYIh2DRDjm1yvUSwGLDzxfZ4j0xGy9YVLkD&X-Amz-Signature=0ca789d712660ce8df76eee249d175adc0be3aa306820f323cf970f4bca9aacf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJZD4AP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApIye4vXcsymsGFiECFEc1JfNbWRIJHphj3nQuMIl5rAiBWYY%2B44YoYfQ0xcEq4ugx%2B28ZkWWvwRXeJmp%2B4gvxrfir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMgSrp49ObHnA3ikuRKtwDdiKvnnEWQU0FDRvQJZFYUO4U1qLqj4yKjHFJfAPux4VumD%2F2q%2FesBJYAP13CVkhQvMAlnW4R6aJO2tK%2Fw2QZkFKThz5iJfVfMZu2exzggqKSM10pajXxcBBpsMu5Lqz6wHUe3ywl1Z4%2FAjHwXEmrnFCve%2FNWNa9sJTox7sCRLTV7M6NStkSyWwtitvFfKArHvCpF208V3lYGdyaqOKUKRtv6weYK7UGEVeALwctgGEA2j%2BZLLnmW3KDQzlm9pOY%2FOW6nlucpCk66Z4oh%2FsXe1BhrMLoYRKWBYBrCv%2FDrDon%2FWDyIzGrqTQYWipdvUaOpvnQvsqiaZqTcSzm%2FReYBfflmC%2F89pcq2NaO9ZML3mohB3sXf44jt5w%2B1zVBI%2FHwC0OagzLyh70M0I%2F52JwupkDnHV7QCk1XMd0qoW6g0Wl9PlTPJgSi0m%2B1RJOkS7pLe2jA06PhmdFRywXPss2AvDZVLra03WsOZzS1GZ5A%2B6Hx5j2AeGUCm5vit9MQOHB3bYTEdjOV57QOZ8jqUPH4adFklij1eSbGreF%2BT4Aib9%2B0c9Yqu%2BTG32NoNG3Vhr56QYL%2BgPpRxZDJfz3Q7sqZ3oxrqNsZ2%2BYjiB4kMiBYMj1CK8xU%2FydTxj0Wz2hQwp4bwxAY6pgEAOqFnMh1DPmqJGTOo7Vot%2BsNsk07gRBXrGejkaZCkrd74n0SaEjpsN8ZkGBoOMn3QC6cn%2BxjCPAoi%2BJTQZsf4Iwd0ZS%2BZwAaDaV9QOdHxwsv%2F50HPBocb%2BocUXzzsg8QDVCU4souC8uUUOV42qk3Dy0mEcXKG7KqrYBBJlguEDQKVAxdlzuh%2F0zFiNIYIh2DRDjm1yvUSwGLDzxfZ4j0xGy9YVLkD&X-Amz-Signature=9bc73a6802ff224a7dbce3ad70d89b7dcca1daddd4dbf66dac5a258e7b79a977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJZD4AP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApIye4vXcsymsGFiECFEc1JfNbWRIJHphj3nQuMIl5rAiBWYY%2B44YoYfQ0xcEq4ugx%2B28ZkWWvwRXeJmp%2B4gvxrfir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMgSrp49ObHnA3ikuRKtwDdiKvnnEWQU0FDRvQJZFYUO4U1qLqj4yKjHFJfAPux4VumD%2F2q%2FesBJYAP13CVkhQvMAlnW4R6aJO2tK%2Fw2QZkFKThz5iJfVfMZu2exzggqKSM10pajXxcBBpsMu5Lqz6wHUe3ywl1Z4%2FAjHwXEmrnFCve%2FNWNa9sJTox7sCRLTV7M6NStkSyWwtitvFfKArHvCpF208V3lYGdyaqOKUKRtv6weYK7UGEVeALwctgGEA2j%2BZLLnmW3KDQzlm9pOY%2FOW6nlucpCk66Z4oh%2FsXe1BhrMLoYRKWBYBrCv%2FDrDon%2FWDyIzGrqTQYWipdvUaOpvnQvsqiaZqTcSzm%2FReYBfflmC%2F89pcq2NaO9ZML3mohB3sXf44jt5w%2B1zVBI%2FHwC0OagzLyh70M0I%2F52JwupkDnHV7QCk1XMd0qoW6g0Wl9PlTPJgSi0m%2B1RJOkS7pLe2jA06PhmdFRywXPss2AvDZVLra03WsOZzS1GZ5A%2B6Hx5j2AeGUCm5vit9MQOHB3bYTEdjOV57QOZ8jqUPH4adFklij1eSbGreF%2BT4Aib9%2B0c9Yqu%2BTG32NoNG3Vhr56QYL%2BgPpRxZDJfz3Q7sqZ3oxrqNsZ2%2BYjiB4kMiBYMj1CK8xU%2FydTxj0Wz2hQwp4bwxAY6pgEAOqFnMh1DPmqJGTOo7Vot%2BsNsk07gRBXrGejkaZCkrd74n0SaEjpsN8ZkGBoOMn3QC6cn%2BxjCPAoi%2BJTQZsf4Iwd0ZS%2BZwAaDaV9QOdHxwsv%2F50HPBocb%2BocUXzzsg8QDVCU4souC8uUUOV42qk3Dy0mEcXKG7KqrYBBJlguEDQKVAxdlzuh%2F0zFiNIYIh2DRDjm1yvUSwGLDzxfZ4j0xGy9YVLkD&X-Amz-Signature=5bc13def93ad3441cf59e32848b3c3f74c9ca635993711af3b818154a3e97ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJZD4AP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApIye4vXcsymsGFiECFEc1JfNbWRIJHphj3nQuMIl5rAiBWYY%2B44YoYfQ0xcEq4ugx%2B28ZkWWvwRXeJmp%2B4gvxrfir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMgSrp49ObHnA3ikuRKtwDdiKvnnEWQU0FDRvQJZFYUO4U1qLqj4yKjHFJfAPux4VumD%2F2q%2FesBJYAP13CVkhQvMAlnW4R6aJO2tK%2Fw2QZkFKThz5iJfVfMZu2exzggqKSM10pajXxcBBpsMu5Lqz6wHUe3ywl1Z4%2FAjHwXEmrnFCve%2FNWNa9sJTox7sCRLTV7M6NStkSyWwtitvFfKArHvCpF208V3lYGdyaqOKUKRtv6weYK7UGEVeALwctgGEA2j%2BZLLnmW3KDQzlm9pOY%2FOW6nlucpCk66Z4oh%2FsXe1BhrMLoYRKWBYBrCv%2FDrDon%2FWDyIzGrqTQYWipdvUaOpvnQvsqiaZqTcSzm%2FReYBfflmC%2F89pcq2NaO9ZML3mohB3sXf44jt5w%2B1zVBI%2FHwC0OagzLyh70M0I%2F52JwupkDnHV7QCk1XMd0qoW6g0Wl9PlTPJgSi0m%2B1RJOkS7pLe2jA06PhmdFRywXPss2AvDZVLra03WsOZzS1GZ5A%2B6Hx5j2AeGUCm5vit9MQOHB3bYTEdjOV57QOZ8jqUPH4adFklij1eSbGreF%2BT4Aib9%2B0c9Yqu%2BTG32NoNG3Vhr56QYL%2BgPpRxZDJfz3Q7sqZ3oxrqNsZ2%2BYjiB4kMiBYMj1CK8xU%2FydTxj0Wz2hQwp4bwxAY6pgEAOqFnMh1DPmqJGTOo7Vot%2BsNsk07gRBXrGejkaZCkrd74n0SaEjpsN8ZkGBoOMn3QC6cn%2BxjCPAoi%2BJTQZsf4Iwd0ZS%2BZwAaDaV9QOdHxwsv%2F50HPBocb%2BocUXzzsg8QDVCU4souC8uUUOV42qk3Dy0mEcXKG7KqrYBBJlguEDQKVAxdlzuh%2F0zFiNIYIh2DRDjm1yvUSwGLDzxfZ4j0xGy9YVLkD&X-Amz-Signature=daffc219fd1e23c0d10e999e5595211a5737a407e29bffc3a72cc59912da04b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJZD4AP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApIye4vXcsymsGFiECFEc1JfNbWRIJHphj3nQuMIl5rAiBWYY%2B44YoYfQ0xcEq4ugx%2B28ZkWWvwRXeJmp%2B4gvxrfir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMgSrp49ObHnA3ikuRKtwDdiKvnnEWQU0FDRvQJZFYUO4U1qLqj4yKjHFJfAPux4VumD%2F2q%2FesBJYAP13CVkhQvMAlnW4R6aJO2tK%2Fw2QZkFKThz5iJfVfMZu2exzggqKSM10pajXxcBBpsMu5Lqz6wHUe3ywl1Z4%2FAjHwXEmrnFCve%2FNWNa9sJTox7sCRLTV7M6NStkSyWwtitvFfKArHvCpF208V3lYGdyaqOKUKRtv6weYK7UGEVeALwctgGEA2j%2BZLLnmW3KDQzlm9pOY%2FOW6nlucpCk66Z4oh%2FsXe1BhrMLoYRKWBYBrCv%2FDrDon%2FWDyIzGrqTQYWipdvUaOpvnQvsqiaZqTcSzm%2FReYBfflmC%2F89pcq2NaO9ZML3mohB3sXf44jt5w%2B1zVBI%2FHwC0OagzLyh70M0I%2F52JwupkDnHV7QCk1XMd0qoW6g0Wl9PlTPJgSi0m%2B1RJOkS7pLe2jA06PhmdFRywXPss2AvDZVLra03WsOZzS1GZ5A%2B6Hx5j2AeGUCm5vit9MQOHB3bYTEdjOV57QOZ8jqUPH4adFklij1eSbGreF%2BT4Aib9%2B0c9Yqu%2BTG32NoNG3Vhr56QYL%2BgPpRxZDJfz3Q7sqZ3oxrqNsZ2%2BYjiB4kMiBYMj1CK8xU%2FydTxj0Wz2hQwp4bwxAY6pgEAOqFnMh1DPmqJGTOo7Vot%2BsNsk07gRBXrGejkaZCkrd74n0SaEjpsN8ZkGBoOMn3QC6cn%2BxjCPAoi%2BJTQZsf4Iwd0ZS%2BZwAaDaV9QOdHxwsv%2F50HPBocb%2BocUXzzsg8QDVCU4souC8uUUOV42qk3Dy0mEcXKG7KqrYBBJlguEDQKVAxdlzuh%2F0zFiNIYIh2DRDjm1yvUSwGLDzxfZ4j0xGy9YVLkD&X-Amz-Signature=837bd32c39371c016d05b772c9a96600e93248ffa9ee7071f5c7c90f547130cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJZD4AP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApIye4vXcsymsGFiECFEc1JfNbWRIJHphj3nQuMIl5rAiBWYY%2B44YoYfQ0xcEq4ugx%2B28ZkWWvwRXeJmp%2B4gvxrfir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMgSrp49ObHnA3ikuRKtwDdiKvnnEWQU0FDRvQJZFYUO4U1qLqj4yKjHFJfAPux4VumD%2F2q%2FesBJYAP13CVkhQvMAlnW4R6aJO2tK%2Fw2QZkFKThz5iJfVfMZu2exzggqKSM10pajXxcBBpsMu5Lqz6wHUe3ywl1Z4%2FAjHwXEmrnFCve%2FNWNa9sJTox7sCRLTV7M6NStkSyWwtitvFfKArHvCpF208V3lYGdyaqOKUKRtv6weYK7UGEVeALwctgGEA2j%2BZLLnmW3KDQzlm9pOY%2FOW6nlucpCk66Z4oh%2FsXe1BhrMLoYRKWBYBrCv%2FDrDon%2FWDyIzGrqTQYWipdvUaOpvnQvsqiaZqTcSzm%2FReYBfflmC%2F89pcq2NaO9ZML3mohB3sXf44jt5w%2B1zVBI%2FHwC0OagzLyh70M0I%2F52JwupkDnHV7QCk1XMd0qoW6g0Wl9PlTPJgSi0m%2B1RJOkS7pLe2jA06PhmdFRywXPss2AvDZVLra03WsOZzS1GZ5A%2B6Hx5j2AeGUCm5vit9MQOHB3bYTEdjOV57QOZ8jqUPH4adFklij1eSbGreF%2BT4Aib9%2B0c9Yqu%2BTG32NoNG3Vhr56QYL%2BgPpRxZDJfz3Q7sqZ3oxrqNsZ2%2BYjiB4kMiBYMj1CK8xU%2FydTxj0Wz2hQwp4bwxAY6pgEAOqFnMh1DPmqJGTOo7Vot%2BsNsk07gRBXrGejkaZCkrd74n0SaEjpsN8ZkGBoOMn3QC6cn%2BxjCPAoi%2BJTQZsf4Iwd0ZS%2BZwAaDaV9QOdHxwsv%2F50HPBocb%2BocUXzzsg8QDVCU4souC8uUUOV42qk3Dy0mEcXKG7KqrYBBJlguEDQKVAxdlzuh%2F0zFiNIYIh2DRDjm1yvUSwGLDzxfZ4j0xGy9YVLkD&X-Amz-Signature=4c36e4150ae6a61b5f8b6c423780a5b64a1649efde84c7d62c321a37a1e78a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJZD4AP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApIye4vXcsymsGFiECFEc1JfNbWRIJHphj3nQuMIl5rAiBWYY%2B44YoYfQ0xcEq4ugx%2B28ZkWWvwRXeJmp%2B4gvxrfir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMgSrp49ObHnA3ikuRKtwDdiKvnnEWQU0FDRvQJZFYUO4U1qLqj4yKjHFJfAPux4VumD%2F2q%2FesBJYAP13CVkhQvMAlnW4R6aJO2tK%2Fw2QZkFKThz5iJfVfMZu2exzggqKSM10pajXxcBBpsMu5Lqz6wHUe3ywl1Z4%2FAjHwXEmrnFCve%2FNWNa9sJTox7sCRLTV7M6NStkSyWwtitvFfKArHvCpF208V3lYGdyaqOKUKRtv6weYK7UGEVeALwctgGEA2j%2BZLLnmW3KDQzlm9pOY%2FOW6nlucpCk66Z4oh%2FsXe1BhrMLoYRKWBYBrCv%2FDrDon%2FWDyIzGrqTQYWipdvUaOpvnQvsqiaZqTcSzm%2FReYBfflmC%2F89pcq2NaO9ZML3mohB3sXf44jt5w%2B1zVBI%2FHwC0OagzLyh70M0I%2F52JwupkDnHV7QCk1XMd0qoW6g0Wl9PlTPJgSi0m%2B1RJOkS7pLe2jA06PhmdFRywXPss2AvDZVLra03WsOZzS1GZ5A%2B6Hx5j2AeGUCm5vit9MQOHB3bYTEdjOV57QOZ8jqUPH4adFklij1eSbGreF%2BT4Aib9%2B0c9Yqu%2BTG32NoNG3Vhr56QYL%2BgPpRxZDJfz3Q7sqZ3oxrqNsZ2%2BYjiB4kMiBYMj1CK8xU%2FydTxj0Wz2hQwp4bwxAY6pgEAOqFnMh1DPmqJGTOo7Vot%2BsNsk07gRBXrGejkaZCkrd74n0SaEjpsN8ZkGBoOMn3QC6cn%2BxjCPAoi%2BJTQZsf4Iwd0ZS%2BZwAaDaV9QOdHxwsv%2F50HPBocb%2BocUXzzsg8QDVCU4souC8uUUOV42qk3Dy0mEcXKG7KqrYBBJlguEDQKVAxdlzuh%2F0zFiNIYIh2DRDjm1yvUSwGLDzxfZ4j0xGy9YVLkD&X-Amz-Signature=2ce78b4f29787beb79bee89d41bbe6312f8631f580d9ccd368873b1354a05f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJZD4AP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApIye4vXcsymsGFiECFEc1JfNbWRIJHphj3nQuMIl5rAiBWYY%2B44YoYfQ0xcEq4ugx%2B28ZkWWvwRXeJmp%2B4gvxrfir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMgSrp49ObHnA3ikuRKtwDdiKvnnEWQU0FDRvQJZFYUO4U1qLqj4yKjHFJfAPux4VumD%2F2q%2FesBJYAP13CVkhQvMAlnW4R6aJO2tK%2Fw2QZkFKThz5iJfVfMZu2exzggqKSM10pajXxcBBpsMu5Lqz6wHUe3ywl1Z4%2FAjHwXEmrnFCve%2FNWNa9sJTox7sCRLTV7M6NStkSyWwtitvFfKArHvCpF208V3lYGdyaqOKUKRtv6weYK7UGEVeALwctgGEA2j%2BZLLnmW3KDQzlm9pOY%2FOW6nlucpCk66Z4oh%2FsXe1BhrMLoYRKWBYBrCv%2FDrDon%2FWDyIzGrqTQYWipdvUaOpvnQvsqiaZqTcSzm%2FReYBfflmC%2F89pcq2NaO9ZML3mohB3sXf44jt5w%2B1zVBI%2FHwC0OagzLyh70M0I%2F52JwupkDnHV7QCk1XMd0qoW6g0Wl9PlTPJgSi0m%2B1RJOkS7pLe2jA06PhmdFRywXPss2AvDZVLra03WsOZzS1GZ5A%2B6Hx5j2AeGUCm5vit9MQOHB3bYTEdjOV57QOZ8jqUPH4adFklij1eSbGreF%2BT4Aib9%2B0c9Yqu%2BTG32NoNG3Vhr56QYL%2BgPpRxZDJfz3Q7sqZ3oxrqNsZ2%2BYjiB4kMiBYMj1CK8xU%2FydTxj0Wz2hQwp4bwxAY6pgEAOqFnMh1DPmqJGTOo7Vot%2BsNsk07gRBXrGejkaZCkrd74n0SaEjpsN8ZkGBoOMn3QC6cn%2BxjCPAoi%2BJTQZsf4Iwd0ZS%2BZwAaDaV9QOdHxwsv%2F50HPBocb%2BocUXzzsg8QDVCU4souC8uUUOV42qk3Dy0mEcXKG7KqrYBBJlguEDQKVAxdlzuh%2F0zFiNIYIh2DRDjm1yvUSwGLDzxfZ4j0xGy9YVLkD&X-Amz-Signature=5da859f1c6e4fad838f13a5357275e99bf16f961075d32230c4587fb416cbf84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJZD4AP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApIye4vXcsymsGFiECFEc1JfNbWRIJHphj3nQuMIl5rAiBWYY%2B44YoYfQ0xcEq4ugx%2B28ZkWWvwRXeJmp%2B4gvxrfir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMgSrp49ObHnA3ikuRKtwDdiKvnnEWQU0FDRvQJZFYUO4U1qLqj4yKjHFJfAPux4VumD%2F2q%2FesBJYAP13CVkhQvMAlnW4R6aJO2tK%2Fw2QZkFKThz5iJfVfMZu2exzggqKSM10pajXxcBBpsMu5Lqz6wHUe3ywl1Z4%2FAjHwXEmrnFCve%2FNWNa9sJTox7sCRLTV7M6NStkSyWwtitvFfKArHvCpF208V3lYGdyaqOKUKRtv6weYK7UGEVeALwctgGEA2j%2BZLLnmW3KDQzlm9pOY%2FOW6nlucpCk66Z4oh%2FsXe1BhrMLoYRKWBYBrCv%2FDrDon%2FWDyIzGrqTQYWipdvUaOpvnQvsqiaZqTcSzm%2FReYBfflmC%2F89pcq2NaO9ZML3mohB3sXf44jt5w%2B1zVBI%2FHwC0OagzLyh70M0I%2F52JwupkDnHV7QCk1XMd0qoW6g0Wl9PlTPJgSi0m%2B1RJOkS7pLe2jA06PhmdFRywXPss2AvDZVLra03WsOZzS1GZ5A%2B6Hx5j2AeGUCm5vit9MQOHB3bYTEdjOV57QOZ8jqUPH4adFklij1eSbGreF%2BT4Aib9%2B0c9Yqu%2BTG32NoNG3Vhr56QYL%2BgPpRxZDJfz3Q7sqZ3oxrqNsZ2%2BYjiB4kMiBYMj1CK8xU%2FydTxj0Wz2hQwp4bwxAY6pgEAOqFnMh1DPmqJGTOo7Vot%2BsNsk07gRBXrGejkaZCkrd74n0SaEjpsN8ZkGBoOMn3QC6cn%2BxjCPAoi%2BJTQZsf4Iwd0ZS%2BZwAaDaV9QOdHxwsv%2F50HPBocb%2BocUXzzsg8QDVCU4souC8uUUOV42qk3Dy0mEcXKG7KqrYBBJlguEDQKVAxdlzuh%2F0zFiNIYIh2DRDjm1yvUSwGLDzxfZ4j0xGy9YVLkD&X-Amz-Signature=4548fa1de3b99b7dc556eddd25e5e538c91c2cb8f44c5361afd44a48245125d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJZD4AP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApIye4vXcsymsGFiECFEc1JfNbWRIJHphj3nQuMIl5rAiBWYY%2B44YoYfQ0xcEq4ugx%2B28ZkWWvwRXeJmp%2B4gvxrfir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMgSrp49ObHnA3ikuRKtwDdiKvnnEWQU0FDRvQJZFYUO4U1qLqj4yKjHFJfAPux4VumD%2F2q%2FesBJYAP13CVkhQvMAlnW4R6aJO2tK%2Fw2QZkFKThz5iJfVfMZu2exzggqKSM10pajXxcBBpsMu5Lqz6wHUe3ywl1Z4%2FAjHwXEmrnFCve%2FNWNa9sJTox7sCRLTV7M6NStkSyWwtitvFfKArHvCpF208V3lYGdyaqOKUKRtv6weYK7UGEVeALwctgGEA2j%2BZLLnmW3KDQzlm9pOY%2FOW6nlucpCk66Z4oh%2FsXe1BhrMLoYRKWBYBrCv%2FDrDon%2FWDyIzGrqTQYWipdvUaOpvnQvsqiaZqTcSzm%2FReYBfflmC%2F89pcq2NaO9ZML3mohB3sXf44jt5w%2B1zVBI%2FHwC0OagzLyh70M0I%2F52JwupkDnHV7QCk1XMd0qoW6g0Wl9PlTPJgSi0m%2B1RJOkS7pLe2jA06PhmdFRywXPss2AvDZVLra03WsOZzS1GZ5A%2B6Hx5j2AeGUCm5vit9MQOHB3bYTEdjOV57QOZ8jqUPH4adFklij1eSbGreF%2BT4Aib9%2B0c9Yqu%2BTG32NoNG3Vhr56QYL%2BgPpRxZDJfz3Q7sqZ3oxrqNsZ2%2BYjiB4kMiBYMj1CK8xU%2FydTxj0Wz2hQwp4bwxAY6pgEAOqFnMh1DPmqJGTOo7Vot%2BsNsk07gRBXrGejkaZCkrd74n0SaEjpsN8ZkGBoOMn3QC6cn%2BxjCPAoi%2BJTQZsf4Iwd0ZS%2BZwAaDaV9QOdHxwsv%2F50HPBocb%2BocUXzzsg8QDVCU4souC8uUUOV42qk3Dy0mEcXKG7KqrYBBJlguEDQKVAxdlzuh%2F0zFiNIYIh2DRDjm1yvUSwGLDzxfZ4j0xGy9YVLkD&X-Amz-Signature=31f3ae59ef0d078020922c21aa3913436c34cfe616d2af165844f82a44d06f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
