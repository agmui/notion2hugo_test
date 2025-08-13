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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW35Q6AX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW6fI7W4gsPHheH5Te%2FooWDhejVsbjXMY3VFNSNfWxnAIhAORwR266%2FQxogs5f0SSrmKDdjIDLTOGtSfavxhLfqSy1Kv8DCDMQABoMNjM3NDIzMTgzODA1IgwDiNNwjGahLbwO63cq3APMiMcgpUA8tLGFmPrZ8OQVfmivgl0i0%2F7M%2FkLhPKOgAVD%2FE%2F1LUcnMU6JGPG05zIlFJMc4BPOTjR7Zx9jAhJxIpM4vWUaSPhXJmeyqlugOEWmTXQaV9wgBQvBOaBR6PBCBAOPvnG8vgNe%2F3M2SwLFugwjpEvm0dPvukPy%2BPxE2ghYqYGCXkTDE5EGyke0XfqIudiAUH%2Fg5ApIDSiHqmkzo3RBvUhtHyxWG1d8FjdTRlbyqRmy1w%2F0OrnzZiXNsMfrEMLP9GU6%2Fzaf1J4WUx%2BFxsaxNFVAylZBlhZhNSffQRTZTz2YgBe6uDO8HKhY%2BjODVfMTb46puxOm3fSkpkyCaXomqOr%2BxHYynuRX%2BiIIcMsKYwaTFFIO%2BkPt3oC8OyXt9ubFKN7lshT6DxxyrklZ91Cd1heHyFmwPZwAie4ZRWn6D%2BT%2FXqQzaqGk7KMqcK1Xv%2FRHtMkszBDi05GpJBcH3hPu1t5R2f%2BGoehCKgjtvJvkGBTxIcKM0C38BarP7%2FcRZs8cB8xsJUDQxC6msFSt578G2bMfAnWXdSs5RSMcQyIBYHNIEsDKOG10Cwi9hdfu1rhBdatAGfIjbeuYaixvUJ2v%2FRgUG2Ft2J33ATw1TVSNu%2B%2BJ73GyeL%2ByRCjD2n%2FPEBjqkAWpvv3S6zyZfn186v7IToHVndR7iQvK3ci%2Bl68AM6gTN6utnWx%2BU2RfqK5IX58kM7u5EolGjO8VtfYxc%2B9q5BWDhiFQ7UK0BKCrwYbOoNNlu2ajYm6kEPwTIbG7ZqnzdcSXpg3cCBEAc6lyHFGG2weuwHc0AtM0pWac%2FT9kQgU%2F3U1NhY9TjhcMPk3WhRjr8iFxCCNkQPA7NvwQMMOYmO2nS2STb&X-Amz-Signature=1979c58cd4a3228b15e836b3f5cff30db6ed621e688ee09b6dd2984c4cfefc86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW35Q6AX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW6fI7W4gsPHheH5Te%2FooWDhejVsbjXMY3VFNSNfWxnAIhAORwR266%2FQxogs5f0SSrmKDdjIDLTOGtSfavxhLfqSy1Kv8DCDMQABoMNjM3NDIzMTgzODA1IgwDiNNwjGahLbwO63cq3APMiMcgpUA8tLGFmPrZ8OQVfmivgl0i0%2F7M%2FkLhPKOgAVD%2FE%2F1LUcnMU6JGPG05zIlFJMc4BPOTjR7Zx9jAhJxIpM4vWUaSPhXJmeyqlugOEWmTXQaV9wgBQvBOaBR6PBCBAOPvnG8vgNe%2F3M2SwLFugwjpEvm0dPvukPy%2BPxE2ghYqYGCXkTDE5EGyke0XfqIudiAUH%2Fg5ApIDSiHqmkzo3RBvUhtHyxWG1d8FjdTRlbyqRmy1w%2F0OrnzZiXNsMfrEMLP9GU6%2Fzaf1J4WUx%2BFxsaxNFVAylZBlhZhNSffQRTZTz2YgBe6uDO8HKhY%2BjODVfMTb46puxOm3fSkpkyCaXomqOr%2BxHYynuRX%2BiIIcMsKYwaTFFIO%2BkPt3oC8OyXt9ubFKN7lshT6DxxyrklZ91Cd1heHyFmwPZwAie4ZRWn6D%2BT%2FXqQzaqGk7KMqcK1Xv%2FRHtMkszBDi05GpJBcH3hPu1t5R2f%2BGoehCKgjtvJvkGBTxIcKM0C38BarP7%2FcRZs8cB8xsJUDQxC6msFSt578G2bMfAnWXdSs5RSMcQyIBYHNIEsDKOG10Cwi9hdfu1rhBdatAGfIjbeuYaixvUJ2v%2FRgUG2Ft2J33ATw1TVSNu%2B%2BJ73GyeL%2ByRCjD2n%2FPEBjqkAWpvv3S6zyZfn186v7IToHVndR7iQvK3ci%2Bl68AM6gTN6utnWx%2BU2RfqK5IX58kM7u5EolGjO8VtfYxc%2B9q5BWDhiFQ7UK0BKCrwYbOoNNlu2ajYm6kEPwTIbG7ZqnzdcSXpg3cCBEAc6lyHFGG2weuwHc0AtM0pWac%2FT9kQgU%2F3U1NhY9TjhcMPk3WhRjr8iFxCCNkQPA7NvwQMMOYmO2nS2STb&X-Amz-Signature=22faba131057f8e25c0436392e184df14cc436f88e1f85a40d84afaf05a7d078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW35Q6AX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW6fI7W4gsPHheH5Te%2FooWDhejVsbjXMY3VFNSNfWxnAIhAORwR266%2FQxogs5f0SSrmKDdjIDLTOGtSfavxhLfqSy1Kv8DCDMQABoMNjM3NDIzMTgzODA1IgwDiNNwjGahLbwO63cq3APMiMcgpUA8tLGFmPrZ8OQVfmivgl0i0%2F7M%2FkLhPKOgAVD%2FE%2F1LUcnMU6JGPG05zIlFJMc4BPOTjR7Zx9jAhJxIpM4vWUaSPhXJmeyqlugOEWmTXQaV9wgBQvBOaBR6PBCBAOPvnG8vgNe%2F3M2SwLFugwjpEvm0dPvukPy%2BPxE2ghYqYGCXkTDE5EGyke0XfqIudiAUH%2Fg5ApIDSiHqmkzo3RBvUhtHyxWG1d8FjdTRlbyqRmy1w%2F0OrnzZiXNsMfrEMLP9GU6%2Fzaf1J4WUx%2BFxsaxNFVAylZBlhZhNSffQRTZTz2YgBe6uDO8HKhY%2BjODVfMTb46puxOm3fSkpkyCaXomqOr%2BxHYynuRX%2BiIIcMsKYwaTFFIO%2BkPt3oC8OyXt9ubFKN7lshT6DxxyrklZ91Cd1heHyFmwPZwAie4ZRWn6D%2BT%2FXqQzaqGk7KMqcK1Xv%2FRHtMkszBDi05GpJBcH3hPu1t5R2f%2BGoehCKgjtvJvkGBTxIcKM0C38BarP7%2FcRZs8cB8xsJUDQxC6msFSt578G2bMfAnWXdSs5RSMcQyIBYHNIEsDKOG10Cwi9hdfu1rhBdatAGfIjbeuYaixvUJ2v%2FRgUG2Ft2J33ATw1TVSNu%2B%2BJ73GyeL%2ByRCjD2n%2FPEBjqkAWpvv3S6zyZfn186v7IToHVndR7iQvK3ci%2Bl68AM6gTN6utnWx%2BU2RfqK5IX58kM7u5EolGjO8VtfYxc%2B9q5BWDhiFQ7UK0BKCrwYbOoNNlu2ajYm6kEPwTIbG7ZqnzdcSXpg3cCBEAc6lyHFGG2weuwHc0AtM0pWac%2FT9kQgU%2F3U1NhY9TjhcMPk3WhRjr8iFxCCNkQPA7NvwQMMOYmO2nS2STb&X-Amz-Signature=e6bf5b33b211fc72a425abc61a06d24cd5070db80517c9a931a808de89dda67f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW35Q6AX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW6fI7W4gsPHheH5Te%2FooWDhejVsbjXMY3VFNSNfWxnAIhAORwR266%2FQxogs5f0SSrmKDdjIDLTOGtSfavxhLfqSy1Kv8DCDMQABoMNjM3NDIzMTgzODA1IgwDiNNwjGahLbwO63cq3APMiMcgpUA8tLGFmPrZ8OQVfmivgl0i0%2F7M%2FkLhPKOgAVD%2FE%2F1LUcnMU6JGPG05zIlFJMc4BPOTjR7Zx9jAhJxIpM4vWUaSPhXJmeyqlugOEWmTXQaV9wgBQvBOaBR6PBCBAOPvnG8vgNe%2F3M2SwLFugwjpEvm0dPvukPy%2BPxE2ghYqYGCXkTDE5EGyke0XfqIudiAUH%2Fg5ApIDSiHqmkzo3RBvUhtHyxWG1d8FjdTRlbyqRmy1w%2F0OrnzZiXNsMfrEMLP9GU6%2Fzaf1J4WUx%2BFxsaxNFVAylZBlhZhNSffQRTZTz2YgBe6uDO8HKhY%2BjODVfMTb46puxOm3fSkpkyCaXomqOr%2BxHYynuRX%2BiIIcMsKYwaTFFIO%2BkPt3oC8OyXt9ubFKN7lshT6DxxyrklZ91Cd1heHyFmwPZwAie4ZRWn6D%2BT%2FXqQzaqGk7KMqcK1Xv%2FRHtMkszBDi05GpJBcH3hPu1t5R2f%2BGoehCKgjtvJvkGBTxIcKM0C38BarP7%2FcRZs8cB8xsJUDQxC6msFSt578G2bMfAnWXdSs5RSMcQyIBYHNIEsDKOG10Cwi9hdfu1rhBdatAGfIjbeuYaixvUJ2v%2FRgUG2Ft2J33ATw1TVSNu%2B%2BJ73GyeL%2ByRCjD2n%2FPEBjqkAWpvv3S6zyZfn186v7IToHVndR7iQvK3ci%2Bl68AM6gTN6utnWx%2BU2RfqK5IX58kM7u5EolGjO8VtfYxc%2B9q5BWDhiFQ7UK0BKCrwYbOoNNlu2ajYm6kEPwTIbG7ZqnzdcSXpg3cCBEAc6lyHFGG2weuwHc0AtM0pWac%2FT9kQgU%2F3U1NhY9TjhcMPk3WhRjr8iFxCCNkQPA7NvwQMMOYmO2nS2STb&X-Amz-Signature=4cf49d2b4b8a8b717a26c0a5a9635630499fba89b2f5b0156a91b7a0a05c9c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW35Q6AX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW6fI7W4gsPHheH5Te%2FooWDhejVsbjXMY3VFNSNfWxnAIhAORwR266%2FQxogs5f0SSrmKDdjIDLTOGtSfavxhLfqSy1Kv8DCDMQABoMNjM3NDIzMTgzODA1IgwDiNNwjGahLbwO63cq3APMiMcgpUA8tLGFmPrZ8OQVfmivgl0i0%2F7M%2FkLhPKOgAVD%2FE%2F1LUcnMU6JGPG05zIlFJMc4BPOTjR7Zx9jAhJxIpM4vWUaSPhXJmeyqlugOEWmTXQaV9wgBQvBOaBR6PBCBAOPvnG8vgNe%2F3M2SwLFugwjpEvm0dPvukPy%2BPxE2ghYqYGCXkTDE5EGyke0XfqIudiAUH%2Fg5ApIDSiHqmkzo3RBvUhtHyxWG1d8FjdTRlbyqRmy1w%2F0OrnzZiXNsMfrEMLP9GU6%2Fzaf1J4WUx%2BFxsaxNFVAylZBlhZhNSffQRTZTz2YgBe6uDO8HKhY%2BjODVfMTb46puxOm3fSkpkyCaXomqOr%2BxHYynuRX%2BiIIcMsKYwaTFFIO%2BkPt3oC8OyXt9ubFKN7lshT6DxxyrklZ91Cd1heHyFmwPZwAie4ZRWn6D%2BT%2FXqQzaqGk7KMqcK1Xv%2FRHtMkszBDi05GpJBcH3hPu1t5R2f%2BGoehCKgjtvJvkGBTxIcKM0C38BarP7%2FcRZs8cB8xsJUDQxC6msFSt578G2bMfAnWXdSs5RSMcQyIBYHNIEsDKOG10Cwi9hdfu1rhBdatAGfIjbeuYaixvUJ2v%2FRgUG2Ft2J33ATw1TVSNu%2B%2BJ73GyeL%2ByRCjD2n%2FPEBjqkAWpvv3S6zyZfn186v7IToHVndR7iQvK3ci%2Bl68AM6gTN6utnWx%2BU2RfqK5IX58kM7u5EolGjO8VtfYxc%2B9q5BWDhiFQ7UK0BKCrwYbOoNNlu2ajYm6kEPwTIbG7ZqnzdcSXpg3cCBEAc6lyHFGG2weuwHc0AtM0pWac%2FT9kQgU%2F3U1NhY9TjhcMPk3WhRjr8iFxCCNkQPA7NvwQMMOYmO2nS2STb&X-Amz-Signature=dd715a4cbf9345b3ceb81f3af0d5f5162197322ac1e2573463118a92ad07e420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW35Q6AX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW6fI7W4gsPHheH5Te%2FooWDhejVsbjXMY3VFNSNfWxnAIhAORwR266%2FQxogs5f0SSrmKDdjIDLTOGtSfavxhLfqSy1Kv8DCDMQABoMNjM3NDIzMTgzODA1IgwDiNNwjGahLbwO63cq3APMiMcgpUA8tLGFmPrZ8OQVfmivgl0i0%2F7M%2FkLhPKOgAVD%2FE%2F1LUcnMU6JGPG05zIlFJMc4BPOTjR7Zx9jAhJxIpM4vWUaSPhXJmeyqlugOEWmTXQaV9wgBQvBOaBR6PBCBAOPvnG8vgNe%2F3M2SwLFugwjpEvm0dPvukPy%2BPxE2ghYqYGCXkTDE5EGyke0XfqIudiAUH%2Fg5ApIDSiHqmkzo3RBvUhtHyxWG1d8FjdTRlbyqRmy1w%2F0OrnzZiXNsMfrEMLP9GU6%2Fzaf1J4WUx%2BFxsaxNFVAylZBlhZhNSffQRTZTz2YgBe6uDO8HKhY%2BjODVfMTb46puxOm3fSkpkyCaXomqOr%2BxHYynuRX%2BiIIcMsKYwaTFFIO%2BkPt3oC8OyXt9ubFKN7lshT6DxxyrklZ91Cd1heHyFmwPZwAie4ZRWn6D%2BT%2FXqQzaqGk7KMqcK1Xv%2FRHtMkszBDi05GpJBcH3hPu1t5R2f%2BGoehCKgjtvJvkGBTxIcKM0C38BarP7%2FcRZs8cB8xsJUDQxC6msFSt578G2bMfAnWXdSs5RSMcQyIBYHNIEsDKOG10Cwi9hdfu1rhBdatAGfIjbeuYaixvUJ2v%2FRgUG2Ft2J33ATw1TVSNu%2B%2BJ73GyeL%2ByRCjD2n%2FPEBjqkAWpvv3S6zyZfn186v7IToHVndR7iQvK3ci%2Bl68AM6gTN6utnWx%2BU2RfqK5IX58kM7u5EolGjO8VtfYxc%2B9q5BWDhiFQ7UK0BKCrwYbOoNNlu2ajYm6kEPwTIbG7ZqnzdcSXpg3cCBEAc6lyHFGG2weuwHc0AtM0pWac%2FT9kQgU%2F3U1NhY9TjhcMPk3WhRjr8iFxCCNkQPA7NvwQMMOYmO2nS2STb&X-Amz-Signature=5f7131982af0434a7532294cd61dfea9430b09ba46f1591411ff13094a27b5e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW35Q6AX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW6fI7W4gsPHheH5Te%2FooWDhejVsbjXMY3VFNSNfWxnAIhAORwR266%2FQxogs5f0SSrmKDdjIDLTOGtSfavxhLfqSy1Kv8DCDMQABoMNjM3NDIzMTgzODA1IgwDiNNwjGahLbwO63cq3APMiMcgpUA8tLGFmPrZ8OQVfmivgl0i0%2F7M%2FkLhPKOgAVD%2FE%2F1LUcnMU6JGPG05zIlFJMc4BPOTjR7Zx9jAhJxIpM4vWUaSPhXJmeyqlugOEWmTXQaV9wgBQvBOaBR6PBCBAOPvnG8vgNe%2F3M2SwLFugwjpEvm0dPvukPy%2BPxE2ghYqYGCXkTDE5EGyke0XfqIudiAUH%2Fg5ApIDSiHqmkzo3RBvUhtHyxWG1d8FjdTRlbyqRmy1w%2F0OrnzZiXNsMfrEMLP9GU6%2Fzaf1J4WUx%2BFxsaxNFVAylZBlhZhNSffQRTZTz2YgBe6uDO8HKhY%2BjODVfMTb46puxOm3fSkpkyCaXomqOr%2BxHYynuRX%2BiIIcMsKYwaTFFIO%2BkPt3oC8OyXt9ubFKN7lshT6DxxyrklZ91Cd1heHyFmwPZwAie4ZRWn6D%2BT%2FXqQzaqGk7KMqcK1Xv%2FRHtMkszBDi05GpJBcH3hPu1t5R2f%2BGoehCKgjtvJvkGBTxIcKM0C38BarP7%2FcRZs8cB8xsJUDQxC6msFSt578G2bMfAnWXdSs5RSMcQyIBYHNIEsDKOG10Cwi9hdfu1rhBdatAGfIjbeuYaixvUJ2v%2FRgUG2Ft2J33ATw1TVSNu%2B%2BJ73GyeL%2ByRCjD2n%2FPEBjqkAWpvv3S6zyZfn186v7IToHVndR7iQvK3ci%2Bl68AM6gTN6utnWx%2BU2RfqK5IX58kM7u5EolGjO8VtfYxc%2B9q5BWDhiFQ7UK0BKCrwYbOoNNlu2ajYm6kEPwTIbG7ZqnzdcSXpg3cCBEAc6lyHFGG2weuwHc0AtM0pWac%2FT9kQgU%2F3U1NhY9TjhcMPk3WhRjr8iFxCCNkQPA7NvwQMMOYmO2nS2STb&X-Amz-Signature=ba3deb1d26e489f23c239343e5f009dc5de238468124a91b5f0be4d6b308f142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW35Q6AX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW6fI7W4gsPHheH5Te%2FooWDhejVsbjXMY3VFNSNfWxnAIhAORwR266%2FQxogs5f0SSrmKDdjIDLTOGtSfavxhLfqSy1Kv8DCDMQABoMNjM3NDIzMTgzODA1IgwDiNNwjGahLbwO63cq3APMiMcgpUA8tLGFmPrZ8OQVfmivgl0i0%2F7M%2FkLhPKOgAVD%2FE%2F1LUcnMU6JGPG05zIlFJMc4BPOTjR7Zx9jAhJxIpM4vWUaSPhXJmeyqlugOEWmTXQaV9wgBQvBOaBR6PBCBAOPvnG8vgNe%2F3M2SwLFugwjpEvm0dPvukPy%2BPxE2ghYqYGCXkTDE5EGyke0XfqIudiAUH%2Fg5ApIDSiHqmkzo3RBvUhtHyxWG1d8FjdTRlbyqRmy1w%2F0OrnzZiXNsMfrEMLP9GU6%2Fzaf1J4WUx%2BFxsaxNFVAylZBlhZhNSffQRTZTz2YgBe6uDO8HKhY%2BjODVfMTb46puxOm3fSkpkyCaXomqOr%2BxHYynuRX%2BiIIcMsKYwaTFFIO%2BkPt3oC8OyXt9ubFKN7lshT6DxxyrklZ91Cd1heHyFmwPZwAie4ZRWn6D%2BT%2FXqQzaqGk7KMqcK1Xv%2FRHtMkszBDi05GpJBcH3hPu1t5R2f%2BGoehCKgjtvJvkGBTxIcKM0C38BarP7%2FcRZs8cB8xsJUDQxC6msFSt578G2bMfAnWXdSs5RSMcQyIBYHNIEsDKOG10Cwi9hdfu1rhBdatAGfIjbeuYaixvUJ2v%2FRgUG2Ft2J33ATw1TVSNu%2B%2BJ73GyeL%2ByRCjD2n%2FPEBjqkAWpvv3S6zyZfn186v7IToHVndR7iQvK3ci%2Bl68AM6gTN6utnWx%2BU2RfqK5IX58kM7u5EolGjO8VtfYxc%2B9q5BWDhiFQ7UK0BKCrwYbOoNNlu2ajYm6kEPwTIbG7ZqnzdcSXpg3cCBEAc6lyHFGG2weuwHc0AtM0pWac%2FT9kQgU%2F3U1NhY9TjhcMPk3WhRjr8iFxCCNkQPA7NvwQMMOYmO2nS2STb&X-Amz-Signature=a7e922cb506f5fec06abd6708b752a9df748853fc83c1aa3f78a853519ac9762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW35Q6AX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW6fI7W4gsPHheH5Te%2FooWDhejVsbjXMY3VFNSNfWxnAIhAORwR266%2FQxogs5f0SSrmKDdjIDLTOGtSfavxhLfqSy1Kv8DCDMQABoMNjM3NDIzMTgzODA1IgwDiNNwjGahLbwO63cq3APMiMcgpUA8tLGFmPrZ8OQVfmivgl0i0%2F7M%2FkLhPKOgAVD%2FE%2F1LUcnMU6JGPG05zIlFJMc4BPOTjR7Zx9jAhJxIpM4vWUaSPhXJmeyqlugOEWmTXQaV9wgBQvBOaBR6PBCBAOPvnG8vgNe%2F3M2SwLFugwjpEvm0dPvukPy%2BPxE2ghYqYGCXkTDE5EGyke0XfqIudiAUH%2Fg5ApIDSiHqmkzo3RBvUhtHyxWG1d8FjdTRlbyqRmy1w%2F0OrnzZiXNsMfrEMLP9GU6%2Fzaf1J4WUx%2BFxsaxNFVAylZBlhZhNSffQRTZTz2YgBe6uDO8HKhY%2BjODVfMTb46puxOm3fSkpkyCaXomqOr%2BxHYynuRX%2BiIIcMsKYwaTFFIO%2BkPt3oC8OyXt9ubFKN7lshT6DxxyrklZ91Cd1heHyFmwPZwAie4ZRWn6D%2BT%2FXqQzaqGk7KMqcK1Xv%2FRHtMkszBDi05GpJBcH3hPu1t5R2f%2BGoehCKgjtvJvkGBTxIcKM0C38BarP7%2FcRZs8cB8xsJUDQxC6msFSt578G2bMfAnWXdSs5RSMcQyIBYHNIEsDKOG10Cwi9hdfu1rhBdatAGfIjbeuYaixvUJ2v%2FRgUG2Ft2J33ATw1TVSNu%2B%2BJ73GyeL%2ByRCjD2n%2FPEBjqkAWpvv3S6zyZfn186v7IToHVndR7iQvK3ci%2Bl68AM6gTN6utnWx%2BU2RfqK5IX58kM7u5EolGjO8VtfYxc%2B9q5BWDhiFQ7UK0BKCrwYbOoNNlu2ajYm6kEPwTIbG7ZqnzdcSXpg3cCBEAc6lyHFGG2weuwHc0AtM0pWac%2FT9kQgU%2F3U1NhY9TjhcMPk3WhRjr8iFxCCNkQPA7NvwQMMOYmO2nS2STb&X-Amz-Signature=6eb4127fc386128830712369c8bcb1829a40ec0391226fe963467d0cc6c582bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW35Q6AX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW6fI7W4gsPHheH5Te%2FooWDhejVsbjXMY3VFNSNfWxnAIhAORwR266%2FQxogs5f0SSrmKDdjIDLTOGtSfavxhLfqSy1Kv8DCDMQABoMNjM3NDIzMTgzODA1IgwDiNNwjGahLbwO63cq3APMiMcgpUA8tLGFmPrZ8OQVfmivgl0i0%2F7M%2FkLhPKOgAVD%2FE%2F1LUcnMU6JGPG05zIlFJMc4BPOTjR7Zx9jAhJxIpM4vWUaSPhXJmeyqlugOEWmTXQaV9wgBQvBOaBR6PBCBAOPvnG8vgNe%2F3M2SwLFugwjpEvm0dPvukPy%2BPxE2ghYqYGCXkTDE5EGyke0XfqIudiAUH%2Fg5ApIDSiHqmkzo3RBvUhtHyxWG1d8FjdTRlbyqRmy1w%2F0OrnzZiXNsMfrEMLP9GU6%2Fzaf1J4WUx%2BFxsaxNFVAylZBlhZhNSffQRTZTz2YgBe6uDO8HKhY%2BjODVfMTb46puxOm3fSkpkyCaXomqOr%2BxHYynuRX%2BiIIcMsKYwaTFFIO%2BkPt3oC8OyXt9ubFKN7lshT6DxxyrklZ91Cd1heHyFmwPZwAie4ZRWn6D%2BT%2FXqQzaqGk7KMqcK1Xv%2FRHtMkszBDi05GpJBcH3hPu1t5R2f%2BGoehCKgjtvJvkGBTxIcKM0C38BarP7%2FcRZs8cB8xsJUDQxC6msFSt578G2bMfAnWXdSs5RSMcQyIBYHNIEsDKOG10Cwi9hdfu1rhBdatAGfIjbeuYaixvUJ2v%2FRgUG2Ft2J33ATw1TVSNu%2B%2BJ73GyeL%2ByRCjD2n%2FPEBjqkAWpvv3S6zyZfn186v7IToHVndR7iQvK3ci%2Bl68AM6gTN6utnWx%2BU2RfqK5IX58kM7u5EolGjO8VtfYxc%2B9q5BWDhiFQ7UK0BKCrwYbOoNNlu2ajYm6kEPwTIbG7ZqnzdcSXpg3cCBEAc6lyHFGG2weuwHc0AtM0pWac%2FT9kQgU%2F3U1NhY9TjhcMPk3WhRjr8iFxCCNkQPA7NvwQMMOYmO2nS2STb&X-Amz-Signature=7bf68a57249697db9f9a63e25b23ab94a14e762e00b5cbf8f171260a205550d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW35Q6AX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW6fI7W4gsPHheH5Te%2FooWDhejVsbjXMY3VFNSNfWxnAIhAORwR266%2FQxogs5f0SSrmKDdjIDLTOGtSfavxhLfqSy1Kv8DCDMQABoMNjM3NDIzMTgzODA1IgwDiNNwjGahLbwO63cq3APMiMcgpUA8tLGFmPrZ8OQVfmivgl0i0%2F7M%2FkLhPKOgAVD%2FE%2F1LUcnMU6JGPG05zIlFJMc4BPOTjR7Zx9jAhJxIpM4vWUaSPhXJmeyqlugOEWmTXQaV9wgBQvBOaBR6PBCBAOPvnG8vgNe%2F3M2SwLFugwjpEvm0dPvukPy%2BPxE2ghYqYGCXkTDE5EGyke0XfqIudiAUH%2Fg5ApIDSiHqmkzo3RBvUhtHyxWG1d8FjdTRlbyqRmy1w%2F0OrnzZiXNsMfrEMLP9GU6%2Fzaf1J4WUx%2BFxsaxNFVAylZBlhZhNSffQRTZTz2YgBe6uDO8HKhY%2BjODVfMTb46puxOm3fSkpkyCaXomqOr%2BxHYynuRX%2BiIIcMsKYwaTFFIO%2BkPt3oC8OyXt9ubFKN7lshT6DxxyrklZ91Cd1heHyFmwPZwAie4ZRWn6D%2BT%2FXqQzaqGk7KMqcK1Xv%2FRHtMkszBDi05GpJBcH3hPu1t5R2f%2BGoehCKgjtvJvkGBTxIcKM0C38BarP7%2FcRZs8cB8xsJUDQxC6msFSt578G2bMfAnWXdSs5RSMcQyIBYHNIEsDKOG10Cwi9hdfu1rhBdatAGfIjbeuYaixvUJ2v%2FRgUG2Ft2J33ATw1TVSNu%2B%2BJ73GyeL%2ByRCjD2n%2FPEBjqkAWpvv3S6zyZfn186v7IToHVndR7iQvK3ci%2Bl68AM6gTN6utnWx%2BU2RfqK5IX58kM7u5EolGjO8VtfYxc%2B9q5BWDhiFQ7UK0BKCrwYbOoNNlu2ajYm6kEPwTIbG7ZqnzdcSXpg3cCBEAc6lyHFGG2weuwHc0AtM0pWac%2FT9kQgU%2F3U1NhY9TjhcMPk3WhRjr8iFxCCNkQPA7NvwQMMOYmO2nS2STb&X-Amz-Signature=a3be406008fc98f58018362aaec7b296adaa767af4c5db12adb5e0dc453f918d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW35Q6AX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW6fI7W4gsPHheH5Te%2FooWDhejVsbjXMY3VFNSNfWxnAIhAORwR266%2FQxogs5f0SSrmKDdjIDLTOGtSfavxhLfqSy1Kv8DCDMQABoMNjM3NDIzMTgzODA1IgwDiNNwjGahLbwO63cq3APMiMcgpUA8tLGFmPrZ8OQVfmivgl0i0%2F7M%2FkLhPKOgAVD%2FE%2F1LUcnMU6JGPG05zIlFJMc4BPOTjR7Zx9jAhJxIpM4vWUaSPhXJmeyqlugOEWmTXQaV9wgBQvBOaBR6PBCBAOPvnG8vgNe%2F3M2SwLFugwjpEvm0dPvukPy%2BPxE2ghYqYGCXkTDE5EGyke0XfqIudiAUH%2Fg5ApIDSiHqmkzo3RBvUhtHyxWG1d8FjdTRlbyqRmy1w%2F0OrnzZiXNsMfrEMLP9GU6%2Fzaf1J4WUx%2BFxsaxNFVAylZBlhZhNSffQRTZTz2YgBe6uDO8HKhY%2BjODVfMTb46puxOm3fSkpkyCaXomqOr%2BxHYynuRX%2BiIIcMsKYwaTFFIO%2BkPt3oC8OyXt9ubFKN7lshT6DxxyrklZ91Cd1heHyFmwPZwAie4ZRWn6D%2BT%2FXqQzaqGk7KMqcK1Xv%2FRHtMkszBDi05GpJBcH3hPu1t5R2f%2BGoehCKgjtvJvkGBTxIcKM0C38BarP7%2FcRZs8cB8xsJUDQxC6msFSt578G2bMfAnWXdSs5RSMcQyIBYHNIEsDKOG10Cwi9hdfu1rhBdatAGfIjbeuYaixvUJ2v%2FRgUG2Ft2J33ATw1TVSNu%2B%2BJ73GyeL%2ByRCjD2n%2FPEBjqkAWpvv3S6zyZfn186v7IToHVndR7iQvK3ci%2Bl68AM6gTN6utnWx%2BU2RfqK5IX58kM7u5EolGjO8VtfYxc%2B9q5BWDhiFQ7UK0BKCrwYbOoNNlu2ajYm6kEPwTIbG7ZqnzdcSXpg3cCBEAc6lyHFGG2weuwHc0AtM0pWac%2FT9kQgU%2F3U1NhY9TjhcMPk3WhRjr8iFxCCNkQPA7NvwQMMOYmO2nS2STb&X-Amz-Signature=6a7571eecd0ed9fd1190d63838a8ef588232939e1dd426af92156348802c9515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW35Q6AX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW6fI7W4gsPHheH5Te%2FooWDhejVsbjXMY3VFNSNfWxnAIhAORwR266%2FQxogs5f0SSrmKDdjIDLTOGtSfavxhLfqSy1Kv8DCDMQABoMNjM3NDIzMTgzODA1IgwDiNNwjGahLbwO63cq3APMiMcgpUA8tLGFmPrZ8OQVfmivgl0i0%2F7M%2FkLhPKOgAVD%2FE%2F1LUcnMU6JGPG05zIlFJMc4BPOTjR7Zx9jAhJxIpM4vWUaSPhXJmeyqlugOEWmTXQaV9wgBQvBOaBR6PBCBAOPvnG8vgNe%2F3M2SwLFugwjpEvm0dPvukPy%2BPxE2ghYqYGCXkTDE5EGyke0XfqIudiAUH%2Fg5ApIDSiHqmkzo3RBvUhtHyxWG1d8FjdTRlbyqRmy1w%2F0OrnzZiXNsMfrEMLP9GU6%2Fzaf1J4WUx%2BFxsaxNFVAylZBlhZhNSffQRTZTz2YgBe6uDO8HKhY%2BjODVfMTb46puxOm3fSkpkyCaXomqOr%2BxHYynuRX%2BiIIcMsKYwaTFFIO%2BkPt3oC8OyXt9ubFKN7lshT6DxxyrklZ91Cd1heHyFmwPZwAie4ZRWn6D%2BT%2FXqQzaqGk7KMqcK1Xv%2FRHtMkszBDi05GpJBcH3hPu1t5R2f%2BGoehCKgjtvJvkGBTxIcKM0C38BarP7%2FcRZs8cB8xsJUDQxC6msFSt578G2bMfAnWXdSs5RSMcQyIBYHNIEsDKOG10Cwi9hdfu1rhBdatAGfIjbeuYaixvUJ2v%2FRgUG2Ft2J33ATw1TVSNu%2B%2BJ73GyeL%2ByRCjD2n%2FPEBjqkAWpvv3S6zyZfn186v7IToHVndR7iQvK3ci%2Bl68AM6gTN6utnWx%2BU2RfqK5IX58kM7u5EolGjO8VtfYxc%2B9q5BWDhiFQ7UK0BKCrwYbOoNNlu2ajYm6kEPwTIbG7ZqnzdcSXpg3cCBEAc6lyHFGG2weuwHc0AtM0pWac%2FT9kQgU%2F3U1NhY9TjhcMPk3WhRjr8iFxCCNkQPA7NvwQMMOYmO2nS2STb&X-Amz-Signature=28ba300f0168d6b10f857b12b64f6f4ab372cd59d2de8b202d3e88658b0c4f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW35Q6AX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW6fI7W4gsPHheH5Te%2FooWDhejVsbjXMY3VFNSNfWxnAIhAORwR266%2FQxogs5f0SSrmKDdjIDLTOGtSfavxhLfqSy1Kv8DCDMQABoMNjM3NDIzMTgzODA1IgwDiNNwjGahLbwO63cq3APMiMcgpUA8tLGFmPrZ8OQVfmivgl0i0%2F7M%2FkLhPKOgAVD%2FE%2F1LUcnMU6JGPG05zIlFJMc4BPOTjR7Zx9jAhJxIpM4vWUaSPhXJmeyqlugOEWmTXQaV9wgBQvBOaBR6PBCBAOPvnG8vgNe%2F3M2SwLFugwjpEvm0dPvukPy%2BPxE2ghYqYGCXkTDE5EGyke0XfqIudiAUH%2Fg5ApIDSiHqmkzo3RBvUhtHyxWG1d8FjdTRlbyqRmy1w%2F0OrnzZiXNsMfrEMLP9GU6%2Fzaf1J4WUx%2BFxsaxNFVAylZBlhZhNSffQRTZTz2YgBe6uDO8HKhY%2BjODVfMTb46puxOm3fSkpkyCaXomqOr%2BxHYynuRX%2BiIIcMsKYwaTFFIO%2BkPt3oC8OyXt9ubFKN7lshT6DxxyrklZ91Cd1heHyFmwPZwAie4ZRWn6D%2BT%2FXqQzaqGk7KMqcK1Xv%2FRHtMkszBDi05GpJBcH3hPu1t5R2f%2BGoehCKgjtvJvkGBTxIcKM0C38BarP7%2FcRZs8cB8xsJUDQxC6msFSt578G2bMfAnWXdSs5RSMcQyIBYHNIEsDKOG10Cwi9hdfu1rhBdatAGfIjbeuYaixvUJ2v%2FRgUG2Ft2J33ATw1TVSNu%2B%2BJ73GyeL%2ByRCjD2n%2FPEBjqkAWpvv3S6zyZfn186v7IToHVndR7iQvK3ci%2Bl68AM6gTN6utnWx%2BU2RfqK5IX58kM7u5EolGjO8VtfYxc%2B9q5BWDhiFQ7UK0BKCrwYbOoNNlu2ajYm6kEPwTIbG7ZqnzdcSXpg3cCBEAc6lyHFGG2weuwHc0AtM0pWac%2FT9kQgU%2F3U1NhY9TjhcMPk3WhRjr8iFxCCNkQPA7NvwQMMOYmO2nS2STb&X-Amz-Signature=75ab89a565ca318bb0cabca1d80ca616e853d205ca6904ac6e5b610d30daad5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
