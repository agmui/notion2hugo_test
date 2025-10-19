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
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA6RUTA%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICLAQdvGKQ8IpXUebYCrRtlOVBQ9pzNNjzcI69tOXGn1AiEAgRnYB8fgTmVEQp1feW5bWQ7%2BXEgYTNweV3E9F5tXhhMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmU4KdAnqDQJOOl8ircA86EsXvg8tc626eXkma5pOf3KJG7v4oZLlHZKh%2BjuXVpiBXKqJnHcI0%2FtberTQRl3txfrJRI0BgdUPJyDR8KchfbiqgBeyUwFHanbCAeU3tSygEZqlL2FDfH9RWcV9MR17VxHNMjGPDlNyBKoNnpC2pANPV6ugV6To9AZXl7L3dg8HiE4nnT4IQLBDt8f1bZle3AKuXHak0m2ZKFNY2HoMqya4vfXJA3BNFuTKIbys8pVpiC9NQVeWCTqqsrbgQph%2BVXDyDKIm3um2iNEKP2DuJHPmI0nhw7X8%2Fe5awUuq%2BFI3L3KW3XV82s9LpmxNbq8RvoTa28hP%2B9i1s7DdQy1RdyruZHsaSX9oCspEqD3bDSK9agEMwetc%2B5vXAk1YcxlrjMkdSdtGsjA3QQsTl2m19a9I2JjWZd%2BlZ%2BCbmKIz05mSlRlLycO%2Fu5X6unC1xQMtdg6ZRh7lzae%2FqTQwf7jWQ7WZj%2F3lHrTuctpPOwSQb1qIwv7pa%2BsVMGKiGJGXSnX36aDzT5Y6VNrNHbHwaNnEG%2BWWvc7HZQAZ6kc8vFvQ8lM3jAF011JsBv8jflsosSR3OnAGQJg4QapHigZbBJrX2ci92nejE%2FqQFO8H1AyOgctK94ZdIwFOhAosJhMI3%2B0McGOqUB3fg35VFJXpkxPhbAQAETHc33D72%2F3J3yLzNayEvycVXAgpGz%2BAvjL2kya%2B9emqW%2FiTDhOQDOd1nVCA3xYsRv503HmdWBpApT1kcmvu3kQJ4F6WvNVJnWmtnwDgcg4lXiiPvBfSiRUoRDMVZZjfaELX0mAW0Uaf%2FDKA2IKjhsGK6MKdKa%2BEUWoWXNvokeFtCdBEGYZ%2FdAmByve3QT%2B9BIwyqMwtV3&X-Amz-Signature=6067d4c3f1cf97e19917fe593a54ed2cb39b76d9eb64f734c48978e8e7fd1ad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA6RUTA%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICLAQdvGKQ8IpXUebYCrRtlOVBQ9pzNNjzcI69tOXGn1AiEAgRnYB8fgTmVEQp1feW5bWQ7%2BXEgYTNweV3E9F5tXhhMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmU4KdAnqDQJOOl8ircA86EsXvg8tc626eXkma5pOf3KJG7v4oZLlHZKh%2BjuXVpiBXKqJnHcI0%2FtberTQRl3txfrJRI0BgdUPJyDR8KchfbiqgBeyUwFHanbCAeU3tSygEZqlL2FDfH9RWcV9MR17VxHNMjGPDlNyBKoNnpC2pANPV6ugV6To9AZXl7L3dg8HiE4nnT4IQLBDt8f1bZle3AKuXHak0m2ZKFNY2HoMqya4vfXJA3BNFuTKIbys8pVpiC9NQVeWCTqqsrbgQph%2BVXDyDKIm3um2iNEKP2DuJHPmI0nhw7X8%2Fe5awUuq%2BFI3L3KW3XV82s9LpmxNbq8RvoTa28hP%2B9i1s7DdQy1RdyruZHsaSX9oCspEqD3bDSK9agEMwetc%2B5vXAk1YcxlrjMkdSdtGsjA3QQsTl2m19a9I2JjWZd%2BlZ%2BCbmKIz05mSlRlLycO%2Fu5X6unC1xQMtdg6ZRh7lzae%2FqTQwf7jWQ7WZj%2F3lHrTuctpPOwSQb1qIwv7pa%2BsVMGKiGJGXSnX36aDzT5Y6VNrNHbHwaNnEG%2BWWvc7HZQAZ6kc8vFvQ8lM3jAF011JsBv8jflsosSR3OnAGQJg4QapHigZbBJrX2ci92nejE%2FqQFO8H1AyOgctK94ZdIwFOhAosJhMI3%2B0McGOqUB3fg35VFJXpkxPhbAQAETHc33D72%2F3J3yLzNayEvycVXAgpGz%2BAvjL2kya%2B9emqW%2FiTDhOQDOd1nVCA3xYsRv503HmdWBpApT1kcmvu3kQJ4F6WvNVJnWmtnwDgcg4lXiiPvBfSiRUoRDMVZZjfaELX0mAW0Uaf%2FDKA2IKjhsGK6MKdKa%2BEUWoWXNvokeFtCdBEGYZ%2FdAmByve3QT%2B9BIwyqMwtV3&X-Amz-Signature=49e673337de6477c39a08d4b35e83dc80a7d40fa4ddaf6f3de03cab0b9697d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA6RUTA%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICLAQdvGKQ8IpXUebYCrRtlOVBQ9pzNNjzcI69tOXGn1AiEAgRnYB8fgTmVEQp1feW5bWQ7%2BXEgYTNweV3E9F5tXhhMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmU4KdAnqDQJOOl8ircA86EsXvg8tc626eXkma5pOf3KJG7v4oZLlHZKh%2BjuXVpiBXKqJnHcI0%2FtberTQRl3txfrJRI0BgdUPJyDR8KchfbiqgBeyUwFHanbCAeU3tSygEZqlL2FDfH9RWcV9MR17VxHNMjGPDlNyBKoNnpC2pANPV6ugV6To9AZXl7L3dg8HiE4nnT4IQLBDt8f1bZle3AKuXHak0m2ZKFNY2HoMqya4vfXJA3BNFuTKIbys8pVpiC9NQVeWCTqqsrbgQph%2BVXDyDKIm3um2iNEKP2DuJHPmI0nhw7X8%2Fe5awUuq%2BFI3L3KW3XV82s9LpmxNbq8RvoTa28hP%2B9i1s7DdQy1RdyruZHsaSX9oCspEqD3bDSK9agEMwetc%2B5vXAk1YcxlrjMkdSdtGsjA3QQsTl2m19a9I2JjWZd%2BlZ%2BCbmKIz05mSlRlLycO%2Fu5X6unC1xQMtdg6ZRh7lzae%2FqTQwf7jWQ7WZj%2F3lHrTuctpPOwSQb1qIwv7pa%2BsVMGKiGJGXSnX36aDzT5Y6VNrNHbHwaNnEG%2BWWvc7HZQAZ6kc8vFvQ8lM3jAF011JsBv8jflsosSR3OnAGQJg4QapHigZbBJrX2ci92nejE%2FqQFO8H1AyOgctK94ZdIwFOhAosJhMI3%2B0McGOqUB3fg35VFJXpkxPhbAQAETHc33D72%2F3J3yLzNayEvycVXAgpGz%2BAvjL2kya%2B9emqW%2FiTDhOQDOd1nVCA3xYsRv503HmdWBpApT1kcmvu3kQJ4F6WvNVJnWmtnwDgcg4lXiiPvBfSiRUoRDMVZZjfaELX0mAW0Uaf%2FDKA2IKjhsGK6MKdKa%2BEUWoWXNvokeFtCdBEGYZ%2FdAmByve3QT%2B9BIwyqMwtV3&X-Amz-Signature=610b0cf6c4feee9def1d9d6827c44e29d58b8b3a1c510f10b969b225cc4352e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA6RUTA%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICLAQdvGKQ8IpXUebYCrRtlOVBQ9pzNNjzcI69tOXGn1AiEAgRnYB8fgTmVEQp1feW5bWQ7%2BXEgYTNweV3E9F5tXhhMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmU4KdAnqDQJOOl8ircA86EsXvg8tc626eXkma5pOf3KJG7v4oZLlHZKh%2BjuXVpiBXKqJnHcI0%2FtberTQRl3txfrJRI0BgdUPJyDR8KchfbiqgBeyUwFHanbCAeU3tSygEZqlL2FDfH9RWcV9MR17VxHNMjGPDlNyBKoNnpC2pANPV6ugV6To9AZXl7L3dg8HiE4nnT4IQLBDt8f1bZle3AKuXHak0m2ZKFNY2HoMqya4vfXJA3BNFuTKIbys8pVpiC9NQVeWCTqqsrbgQph%2BVXDyDKIm3um2iNEKP2DuJHPmI0nhw7X8%2Fe5awUuq%2BFI3L3KW3XV82s9LpmxNbq8RvoTa28hP%2B9i1s7DdQy1RdyruZHsaSX9oCspEqD3bDSK9agEMwetc%2B5vXAk1YcxlrjMkdSdtGsjA3QQsTl2m19a9I2JjWZd%2BlZ%2BCbmKIz05mSlRlLycO%2Fu5X6unC1xQMtdg6ZRh7lzae%2FqTQwf7jWQ7WZj%2F3lHrTuctpPOwSQb1qIwv7pa%2BsVMGKiGJGXSnX36aDzT5Y6VNrNHbHwaNnEG%2BWWvc7HZQAZ6kc8vFvQ8lM3jAF011JsBv8jflsosSR3OnAGQJg4QapHigZbBJrX2ci92nejE%2FqQFO8H1AyOgctK94ZdIwFOhAosJhMI3%2B0McGOqUB3fg35VFJXpkxPhbAQAETHc33D72%2F3J3yLzNayEvycVXAgpGz%2BAvjL2kya%2B9emqW%2FiTDhOQDOd1nVCA3xYsRv503HmdWBpApT1kcmvu3kQJ4F6WvNVJnWmtnwDgcg4lXiiPvBfSiRUoRDMVZZjfaELX0mAW0Uaf%2FDKA2IKjhsGK6MKdKa%2BEUWoWXNvokeFtCdBEGYZ%2FdAmByve3QT%2B9BIwyqMwtV3&X-Amz-Signature=7ea6cfdf03c4316ffcf8034508d90c7209205ae3d018d4851df082c6a3fe5555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA6RUTA%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICLAQdvGKQ8IpXUebYCrRtlOVBQ9pzNNjzcI69tOXGn1AiEAgRnYB8fgTmVEQp1feW5bWQ7%2BXEgYTNweV3E9F5tXhhMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmU4KdAnqDQJOOl8ircA86EsXvg8tc626eXkma5pOf3KJG7v4oZLlHZKh%2BjuXVpiBXKqJnHcI0%2FtberTQRl3txfrJRI0BgdUPJyDR8KchfbiqgBeyUwFHanbCAeU3tSygEZqlL2FDfH9RWcV9MR17VxHNMjGPDlNyBKoNnpC2pANPV6ugV6To9AZXl7L3dg8HiE4nnT4IQLBDt8f1bZle3AKuXHak0m2ZKFNY2HoMqya4vfXJA3BNFuTKIbys8pVpiC9NQVeWCTqqsrbgQph%2BVXDyDKIm3um2iNEKP2DuJHPmI0nhw7X8%2Fe5awUuq%2BFI3L3KW3XV82s9LpmxNbq8RvoTa28hP%2B9i1s7DdQy1RdyruZHsaSX9oCspEqD3bDSK9agEMwetc%2B5vXAk1YcxlrjMkdSdtGsjA3QQsTl2m19a9I2JjWZd%2BlZ%2BCbmKIz05mSlRlLycO%2Fu5X6unC1xQMtdg6ZRh7lzae%2FqTQwf7jWQ7WZj%2F3lHrTuctpPOwSQb1qIwv7pa%2BsVMGKiGJGXSnX36aDzT5Y6VNrNHbHwaNnEG%2BWWvc7HZQAZ6kc8vFvQ8lM3jAF011JsBv8jflsosSR3OnAGQJg4QapHigZbBJrX2ci92nejE%2FqQFO8H1AyOgctK94ZdIwFOhAosJhMI3%2B0McGOqUB3fg35VFJXpkxPhbAQAETHc33D72%2F3J3yLzNayEvycVXAgpGz%2BAvjL2kya%2B9emqW%2FiTDhOQDOd1nVCA3xYsRv503HmdWBpApT1kcmvu3kQJ4F6WvNVJnWmtnwDgcg4lXiiPvBfSiRUoRDMVZZjfaELX0mAW0Uaf%2FDKA2IKjhsGK6MKdKa%2BEUWoWXNvokeFtCdBEGYZ%2FdAmByve3QT%2B9BIwyqMwtV3&X-Amz-Signature=ce710a16c2094d637d79890461bc7e72166ed0694f1ccee73ad279c6dcd01641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA6RUTA%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICLAQdvGKQ8IpXUebYCrRtlOVBQ9pzNNjzcI69tOXGn1AiEAgRnYB8fgTmVEQp1feW5bWQ7%2BXEgYTNweV3E9F5tXhhMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmU4KdAnqDQJOOl8ircA86EsXvg8tc626eXkma5pOf3KJG7v4oZLlHZKh%2BjuXVpiBXKqJnHcI0%2FtberTQRl3txfrJRI0BgdUPJyDR8KchfbiqgBeyUwFHanbCAeU3tSygEZqlL2FDfH9RWcV9MR17VxHNMjGPDlNyBKoNnpC2pANPV6ugV6To9AZXl7L3dg8HiE4nnT4IQLBDt8f1bZle3AKuXHak0m2ZKFNY2HoMqya4vfXJA3BNFuTKIbys8pVpiC9NQVeWCTqqsrbgQph%2BVXDyDKIm3um2iNEKP2DuJHPmI0nhw7X8%2Fe5awUuq%2BFI3L3KW3XV82s9LpmxNbq8RvoTa28hP%2B9i1s7DdQy1RdyruZHsaSX9oCspEqD3bDSK9agEMwetc%2B5vXAk1YcxlrjMkdSdtGsjA3QQsTl2m19a9I2JjWZd%2BlZ%2BCbmKIz05mSlRlLycO%2Fu5X6unC1xQMtdg6ZRh7lzae%2FqTQwf7jWQ7WZj%2F3lHrTuctpPOwSQb1qIwv7pa%2BsVMGKiGJGXSnX36aDzT5Y6VNrNHbHwaNnEG%2BWWvc7HZQAZ6kc8vFvQ8lM3jAF011JsBv8jflsosSR3OnAGQJg4QapHigZbBJrX2ci92nejE%2FqQFO8H1AyOgctK94ZdIwFOhAosJhMI3%2B0McGOqUB3fg35VFJXpkxPhbAQAETHc33D72%2F3J3yLzNayEvycVXAgpGz%2BAvjL2kya%2B9emqW%2FiTDhOQDOd1nVCA3xYsRv503HmdWBpApT1kcmvu3kQJ4F6WvNVJnWmtnwDgcg4lXiiPvBfSiRUoRDMVZZjfaELX0mAW0Uaf%2FDKA2IKjhsGK6MKdKa%2BEUWoWXNvokeFtCdBEGYZ%2FdAmByve3QT%2B9BIwyqMwtV3&X-Amz-Signature=82e13e2f24afea9b0ca4b9b89196b0b3dd7302ef904c3737f447145e9ac8f08e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA6RUTA%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICLAQdvGKQ8IpXUebYCrRtlOVBQ9pzNNjzcI69tOXGn1AiEAgRnYB8fgTmVEQp1feW5bWQ7%2BXEgYTNweV3E9F5tXhhMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmU4KdAnqDQJOOl8ircA86EsXvg8tc626eXkma5pOf3KJG7v4oZLlHZKh%2BjuXVpiBXKqJnHcI0%2FtberTQRl3txfrJRI0BgdUPJyDR8KchfbiqgBeyUwFHanbCAeU3tSygEZqlL2FDfH9RWcV9MR17VxHNMjGPDlNyBKoNnpC2pANPV6ugV6To9AZXl7L3dg8HiE4nnT4IQLBDt8f1bZle3AKuXHak0m2ZKFNY2HoMqya4vfXJA3BNFuTKIbys8pVpiC9NQVeWCTqqsrbgQph%2BVXDyDKIm3um2iNEKP2DuJHPmI0nhw7X8%2Fe5awUuq%2BFI3L3KW3XV82s9LpmxNbq8RvoTa28hP%2B9i1s7DdQy1RdyruZHsaSX9oCspEqD3bDSK9agEMwetc%2B5vXAk1YcxlrjMkdSdtGsjA3QQsTl2m19a9I2JjWZd%2BlZ%2BCbmKIz05mSlRlLycO%2Fu5X6unC1xQMtdg6ZRh7lzae%2FqTQwf7jWQ7WZj%2F3lHrTuctpPOwSQb1qIwv7pa%2BsVMGKiGJGXSnX36aDzT5Y6VNrNHbHwaNnEG%2BWWvc7HZQAZ6kc8vFvQ8lM3jAF011JsBv8jflsosSR3OnAGQJg4QapHigZbBJrX2ci92nejE%2FqQFO8H1AyOgctK94ZdIwFOhAosJhMI3%2B0McGOqUB3fg35VFJXpkxPhbAQAETHc33D72%2F3J3yLzNayEvycVXAgpGz%2BAvjL2kya%2B9emqW%2FiTDhOQDOd1nVCA3xYsRv503HmdWBpApT1kcmvu3kQJ4F6WvNVJnWmtnwDgcg4lXiiPvBfSiRUoRDMVZZjfaELX0mAW0Uaf%2FDKA2IKjhsGK6MKdKa%2BEUWoWXNvokeFtCdBEGYZ%2FdAmByve3QT%2B9BIwyqMwtV3&X-Amz-Signature=cbad123aabf689b0637965d70bfcc7c7066c70e510f18ec43dab5b0a7a3ca835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA6RUTA%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICLAQdvGKQ8IpXUebYCrRtlOVBQ9pzNNjzcI69tOXGn1AiEAgRnYB8fgTmVEQp1feW5bWQ7%2BXEgYTNweV3E9F5tXhhMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmU4KdAnqDQJOOl8ircA86EsXvg8tc626eXkma5pOf3KJG7v4oZLlHZKh%2BjuXVpiBXKqJnHcI0%2FtberTQRl3txfrJRI0BgdUPJyDR8KchfbiqgBeyUwFHanbCAeU3tSygEZqlL2FDfH9RWcV9MR17VxHNMjGPDlNyBKoNnpC2pANPV6ugV6To9AZXl7L3dg8HiE4nnT4IQLBDt8f1bZle3AKuXHak0m2ZKFNY2HoMqya4vfXJA3BNFuTKIbys8pVpiC9NQVeWCTqqsrbgQph%2BVXDyDKIm3um2iNEKP2DuJHPmI0nhw7X8%2Fe5awUuq%2BFI3L3KW3XV82s9LpmxNbq8RvoTa28hP%2B9i1s7DdQy1RdyruZHsaSX9oCspEqD3bDSK9agEMwetc%2B5vXAk1YcxlrjMkdSdtGsjA3QQsTl2m19a9I2JjWZd%2BlZ%2BCbmKIz05mSlRlLycO%2Fu5X6unC1xQMtdg6ZRh7lzae%2FqTQwf7jWQ7WZj%2F3lHrTuctpPOwSQb1qIwv7pa%2BsVMGKiGJGXSnX36aDzT5Y6VNrNHbHwaNnEG%2BWWvc7HZQAZ6kc8vFvQ8lM3jAF011JsBv8jflsosSR3OnAGQJg4QapHigZbBJrX2ci92nejE%2FqQFO8H1AyOgctK94ZdIwFOhAosJhMI3%2B0McGOqUB3fg35VFJXpkxPhbAQAETHc33D72%2F3J3yLzNayEvycVXAgpGz%2BAvjL2kya%2B9emqW%2FiTDhOQDOd1nVCA3xYsRv503HmdWBpApT1kcmvu3kQJ4F6WvNVJnWmtnwDgcg4lXiiPvBfSiRUoRDMVZZjfaELX0mAW0Uaf%2FDKA2IKjhsGK6MKdKa%2BEUWoWXNvokeFtCdBEGYZ%2FdAmByve3QT%2B9BIwyqMwtV3&X-Amz-Signature=ac4bb8c271c99a032aa8e03524dc07a3698160cb4832cfaf6cb5b0e60b267c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA6RUTA%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICLAQdvGKQ8IpXUebYCrRtlOVBQ9pzNNjzcI69tOXGn1AiEAgRnYB8fgTmVEQp1feW5bWQ7%2BXEgYTNweV3E9F5tXhhMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmU4KdAnqDQJOOl8ircA86EsXvg8tc626eXkma5pOf3KJG7v4oZLlHZKh%2BjuXVpiBXKqJnHcI0%2FtberTQRl3txfrJRI0BgdUPJyDR8KchfbiqgBeyUwFHanbCAeU3tSygEZqlL2FDfH9RWcV9MR17VxHNMjGPDlNyBKoNnpC2pANPV6ugV6To9AZXl7L3dg8HiE4nnT4IQLBDt8f1bZle3AKuXHak0m2ZKFNY2HoMqya4vfXJA3BNFuTKIbys8pVpiC9NQVeWCTqqsrbgQph%2BVXDyDKIm3um2iNEKP2DuJHPmI0nhw7X8%2Fe5awUuq%2BFI3L3KW3XV82s9LpmxNbq8RvoTa28hP%2B9i1s7DdQy1RdyruZHsaSX9oCspEqD3bDSK9agEMwetc%2B5vXAk1YcxlrjMkdSdtGsjA3QQsTl2m19a9I2JjWZd%2BlZ%2BCbmKIz05mSlRlLycO%2Fu5X6unC1xQMtdg6ZRh7lzae%2FqTQwf7jWQ7WZj%2F3lHrTuctpPOwSQb1qIwv7pa%2BsVMGKiGJGXSnX36aDzT5Y6VNrNHbHwaNnEG%2BWWvc7HZQAZ6kc8vFvQ8lM3jAF011JsBv8jflsosSR3OnAGQJg4QapHigZbBJrX2ci92nejE%2FqQFO8H1AyOgctK94ZdIwFOhAosJhMI3%2B0McGOqUB3fg35VFJXpkxPhbAQAETHc33D72%2F3J3yLzNayEvycVXAgpGz%2BAvjL2kya%2B9emqW%2FiTDhOQDOd1nVCA3xYsRv503HmdWBpApT1kcmvu3kQJ4F6WvNVJnWmtnwDgcg4lXiiPvBfSiRUoRDMVZZjfaELX0mAW0Uaf%2FDKA2IKjhsGK6MKdKa%2BEUWoWXNvokeFtCdBEGYZ%2FdAmByve3QT%2B9BIwyqMwtV3&X-Amz-Signature=2d6cd21df56b97a9dc278480cf53adb52d7e5274c78ff309f466580d1e8430de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA6RUTA%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICLAQdvGKQ8IpXUebYCrRtlOVBQ9pzNNjzcI69tOXGn1AiEAgRnYB8fgTmVEQp1feW5bWQ7%2BXEgYTNweV3E9F5tXhhMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmU4KdAnqDQJOOl8ircA86EsXvg8tc626eXkma5pOf3KJG7v4oZLlHZKh%2BjuXVpiBXKqJnHcI0%2FtberTQRl3txfrJRI0BgdUPJyDR8KchfbiqgBeyUwFHanbCAeU3tSygEZqlL2FDfH9RWcV9MR17VxHNMjGPDlNyBKoNnpC2pANPV6ugV6To9AZXl7L3dg8HiE4nnT4IQLBDt8f1bZle3AKuXHak0m2ZKFNY2HoMqya4vfXJA3BNFuTKIbys8pVpiC9NQVeWCTqqsrbgQph%2BVXDyDKIm3um2iNEKP2DuJHPmI0nhw7X8%2Fe5awUuq%2BFI3L3KW3XV82s9LpmxNbq8RvoTa28hP%2B9i1s7DdQy1RdyruZHsaSX9oCspEqD3bDSK9agEMwetc%2B5vXAk1YcxlrjMkdSdtGsjA3QQsTl2m19a9I2JjWZd%2BlZ%2BCbmKIz05mSlRlLycO%2Fu5X6unC1xQMtdg6ZRh7lzae%2FqTQwf7jWQ7WZj%2F3lHrTuctpPOwSQb1qIwv7pa%2BsVMGKiGJGXSnX36aDzT5Y6VNrNHbHwaNnEG%2BWWvc7HZQAZ6kc8vFvQ8lM3jAF011JsBv8jflsosSR3OnAGQJg4QapHigZbBJrX2ci92nejE%2FqQFO8H1AyOgctK94ZdIwFOhAosJhMI3%2B0McGOqUB3fg35VFJXpkxPhbAQAETHc33D72%2F3J3yLzNayEvycVXAgpGz%2BAvjL2kya%2B9emqW%2FiTDhOQDOd1nVCA3xYsRv503HmdWBpApT1kcmvu3kQJ4F6WvNVJnWmtnwDgcg4lXiiPvBfSiRUoRDMVZZjfaELX0mAW0Uaf%2FDKA2IKjhsGK6MKdKa%2BEUWoWXNvokeFtCdBEGYZ%2FdAmByve3QT%2B9BIwyqMwtV3&X-Amz-Signature=550aec6b9e437f7eda8b0c473041f51f83fa7588c3a461268ca80778635eea54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA6RUTA%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICLAQdvGKQ8IpXUebYCrRtlOVBQ9pzNNjzcI69tOXGn1AiEAgRnYB8fgTmVEQp1feW5bWQ7%2BXEgYTNweV3E9F5tXhhMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmU4KdAnqDQJOOl8ircA86EsXvg8tc626eXkma5pOf3KJG7v4oZLlHZKh%2BjuXVpiBXKqJnHcI0%2FtberTQRl3txfrJRI0BgdUPJyDR8KchfbiqgBeyUwFHanbCAeU3tSygEZqlL2FDfH9RWcV9MR17VxHNMjGPDlNyBKoNnpC2pANPV6ugV6To9AZXl7L3dg8HiE4nnT4IQLBDt8f1bZle3AKuXHak0m2ZKFNY2HoMqya4vfXJA3BNFuTKIbys8pVpiC9NQVeWCTqqsrbgQph%2BVXDyDKIm3um2iNEKP2DuJHPmI0nhw7X8%2Fe5awUuq%2BFI3L3KW3XV82s9LpmxNbq8RvoTa28hP%2B9i1s7DdQy1RdyruZHsaSX9oCspEqD3bDSK9agEMwetc%2B5vXAk1YcxlrjMkdSdtGsjA3QQsTl2m19a9I2JjWZd%2BlZ%2BCbmKIz05mSlRlLycO%2Fu5X6unC1xQMtdg6ZRh7lzae%2FqTQwf7jWQ7WZj%2F3lHrTuctpPOwSQb1qIwv7pa%2BsVMGKiGJGXSnX36aDzT5Y6VNrNHbHwaNnEG%2BWWvc7HZQAZ6kc8vFvQ8lM3jAF011JsBv8jflsosSR3OnAGQJg4QapHigZbBJrX2ci92nejE%2FqQFO8H1AyOgctK94ZdIwFOhAosJhMI3%2B0McGOqUB3fg35VFJXpkxPhbAQAETHc33D72%2F3J3yLzNayEvycVXAgpGz%2BAvjL2kya%2B9emqW%2FiTDhOQDOd1nVCA3xYsRv503HmdWBpApT1kcmvu3kQJ4F6WvNVJnWmtnwDgcg4lXiiPvBfSiRUoRDMVZZjfaELX0mAW0Uaf%2FDKA2IKjhsGK6MKdKa%2BEUWoWXNvokeFtCdBEGYZ%2FdAmByve3QT%2B9BIwyqMwtV3&X-Amz-Signature=499af3b71c3b56501a396ef8f799979bcade24e91bcdab3a08890fd0b0eb2413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA6RUTA%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICLAQdvGKQ8IpXUebYCrRtlOVBQ9pzNNjzcI69tOXGn1AiEAgRnYB8fgTmVEQp1feW5bWQ7%2BXEgYTNweV3E9F5tXhhMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmU4KdAnqDQJOOl8ircA86EsXvg8tc626eXkma5pOf3KJG7v4oZLlHZKh%2BjuXVpiBXKqJnHcI0%2FtberTQRl3txfrJRI0BgdUPJyDR8KchfbiqgBeyUwFHanbCAeU3tSygEZqlL2FDfH9RWcV9MR17VxHNMjGPDlNyBKoNnpC2pANPV6ugV6To9AZXl7L3dg8HiE4nnT4IQLBDt8f1bZle3AKuXHak0m2ZKFNY2HoMqya4vfXJA3BNFuTKIbys8pVpiC9NQVeWCTqqsrbgQph%2BVXDyDKIm3um2iNEKP2DuJHPmI0nhw7X8%2Fe5awUuq%2BFI3L3KW3XV82s9LpmxNbq8RvoTa28hP%2B9i1s7DdQy1RdyruZHsaSX9oCspEqD3bDSK9agEMwetc%2B5vXAk1YcxlrjMkdSdtGsjA3QQsTl2m19a9I2JjWZd%2BlZ%2BCbmKIz05mSlRlLycO%2Fu5X6unC1xQMtdg6ZRh7lzae%2FqTQwf7jWQ7WZj%2F3lHrTuctpPOwSQb1qIwv7pa%2BsVMGKiGJGXSnX36aDzT5Y6VNrNHbHwaNnEG%2BWWvc7HZQAZ6kc8vFvQ8lM3jAF011JsBv8jflsosSR3OnAGQJg4QapHigZbBJrX2ci92nejE%2FqQFO8H1AyOgctK94ZdIwFOhAosJhMI3%2B0McGOqUB3fg35VFJXpkxPhbAQAETHc33D72%2F3J3yLzNayEvycVXAgpGz%2BAvjL2kya%2B9emqW%2FiTDhOQDOd1nVCA3xYsRv503HmdWBpApT1kcmvu3kQJ4F6WvNVJnWmtnwDgcg4lXiiPvBfSiRUoRDMVZZjfaELX0mAW0Uaf%2FDKA2IKjhsGK6MKdKa%2BEUWoWXNvokeFtCdBEGYZ%2FdAmByve3QT%2B9BIwyqMwtV3&X-Amz-Signature=2ce5a4065c4463e32a11052970d6c8d5af0f00f76943a3aca647fe9792713bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA6RUTA%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICLAQdvGKQ8IpXUebYCrRtlOVBQ9pzNNjzcI69tOXGn1AiEAgRnYB8fgTmVEQp1feW5bWQ7%2BXEgYTNweV3E9F5tXhhMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmU4KdAnqDQJOOl8ircA86EsXvg8tc626eXkma5pOf3KJG7v4oZLlHZKh%2BjuXVpiBXKqJnHcI0%2FtberTQRl3txfrJRI0BgdUPJyDR8KchfbiqgBeyUwFHanbCAeU3tSygEZqlL2FDfH9RWcV9MR17VxHNMjGPDlNyBKoNnpC2pANPV6ugV6To9AZXl7L3dg8HiE4nnT4IQLBDt8f1bZle3AKuXHak0m2ZKFNY2HoMqya4vfXJA3BNFuTKIbys8pVpiC9NQVeWCTqqsrbgQph%2BVXDyDKIm3um2iNEKP2DuJHPmI0nhw7X8%2Fe5awUuq%2BFI3L3KW3XV82s9LpmxNbq8RvoTa28hP%2B9i1s7DdQy1RdyruZHsaSX9oCspEqD3bDSK9agEMwetc%2B5vXAk1YcxlrjMkdSdtGsjA3QQsTl2m19a9I2JjWZd%2BlZ%2BCbmKIz05mSlRlLycO%2Fu5X6unC1xQMtdg6ZRh7lzae%2FqTQwf7jWQ7WZj%2F3lHrTuctpPOwSQb1qIwv7pa%2BsVMGKiGJGXSnX36aDzT5Y6VNrNHbHwaNnEG%2BWWvc7HZQAZ6kc8vFvQ8lM3jAF011JsBv8jflsosSR3OnAGQJg4QapHigZbBJrX2ci92nejE%2FqQFO8H1AyOgctK94ZdIwFOhAosJhMI3%2B0McGOqUB3fg35VFJXpkxPhbAQAETHc33D72%2F3J3yLzNayEvycVXAgpGz%2BAvjL2kya%2B9emqW%2FiTDhOQDOd1nVCA3xYsRv503HmdWBpApT1kcmvu3kQJ4F6WvNVJnWmtnwDgcg4lXiiPvBfSiRUoRDMVZZjfaELX0mAW0Uaf%2FDKA2IKjhsGK6MKdKa%2BEUWoWXNvokeFtCdBEGYZ%2FdAmByve3QT%2B9BIwyqMwtV3&X-Amz-Signature=f7e19dc47f999136a25d1f62fceff169547af97fdbf3f8bd205771fd54ca8c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA6RUTA%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICLAQdvGKQ8IpXUebYCrRtlOVBQ9pzNNjzcI69tOXGn1AiEAgRnYB8fgTmVEQp1feW5bWQ7%2BXEgYTNweV3E9F5tXhhMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmU4KdAnqDQJOOl8ircA86EsXvg8tc626eXkma5pOf3KJG7v4oZLlHZKh%2BjuXVpiBXKqJnHcI0%2FtberTQRl3txfrJRI0BgdUPJyDR8KchfbiqgBeyUwFHanbCAeU3tSygEZqlL2FDfH9RWcV9MR17VxHNMjGPDlNyBKoNnpC2pANPV6ugV6To9AZXl7L3dg8HiE4nnT4IQLBDt8f1bZle3AKuXHak0m2ZKFNY2HoMqya4vfXJA3BNFuTKIbys8pVpiC9NQVeWCTqqsrbgQph%2BVXDyDKIm3um2iNEKP2DuJHPmI0nhw7X8%2Fe5awUuq%2BFI3L3KW3XV82s9LpmxNbq8RvoTa28hP%2B9i1s7DdQy1RdyruZHsaSX9oCspEqD3bDSK9agEMwetc%2B5vXAk1YcxlrjMkdSdtGsjA3QQsTl2m19a9I2JjWZd%2BlZ%2BCbmKIz05mSlRlLycO%2Fu5X6unC1xQMtdg6ZRh7lzae%2FqTQwf7jWQ7WZj%2F3lHrTuctpPOwSQb1qIwv7pa%2BsVMGKiGJGXSnX36aDzT5Y6VNrNHbHwaNnEG%2BWWvc7HZQAZ6kc8vFvQ8lM3jAF011JsBv8jflsosSR3OnAGQJg4QapHigZbBJrX2ci92nejE%2FqQFO8H1AyOgctK94ZdIwFOhAosJhMI3%2B0McGOqUB3fg35VFJXpkxPhbAQAETHc33D72%2F3J3yLzNayEvycVXAgpGz%2BAvjL2kya%2B9emqW%2FiTDhOQDOd1nVCA3xYsRv503HmdWBpApT1kcmvu3kQJ4F6WvNVJnWmtnwDgcg4lXiiPvBfSiRUoRDMVZZjfaELX0mAW0Uaf%2FDKA2IKjhsGK6MKdKa%2BEUWoWXNvokeFtCdBEGYZ%2FdAmByve3QT%2B9BIwyqMwtV3&X-Amz-Signature=c9b2aec69fadb9fffa5d363ba7aabe0499091277289b25acd49e62fe86c818fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
