---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEX6ZMS2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZJUovoUk5NL%2B9lG7x03znzuwKm%2FT%2BWJFkhu%2BUg8uOBwIgOxEa2JBwrIMxVQf1iUyhbJ23jpwy9WUhMxryr4E1CUwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvQOI4kqQR%2BobJytSrcA7wLOQpzzxJcECcJikAIvMJLg7dAXWvpEd3gB%2B54V4e2nGgzcUKejiswwsV%2F7OOUEKGUpAvJ%2BVd1F1DSUUSmuEtZsW0mzFNgquZeia2dQJp6gxWUUAkjir352WsoQYSUkywuY6vPXiETrzkPk%2BXp%2BeC0jDnVj6Vpa8F3%2BIXvAraaUQVytlY%2BY7J07IzKoDioRFKmIrZwRvymEiq0SW4VQctNI1dVFMRQoosD29aBPllX9LDbz0YJ799%2BVppRw0hKJ4vqJWa06L4DK7o0h7CwYZieVYg8lU%2FtjQyhT6FTUt%2FMxB3H3fajq7qpPuga7v9Br95Y1pdQ5MOAnNCVY8LruHlrfhWRwMdZ0zjNRDjatG8HuS4k%2BfxobXsXTMgv4xC%2F8N1riJpGCr3uQYLOm72TmzZVnRRjXJIhGAXhpeY6OhJHqxeEqU0gWlpJac864IeaQhQQMDLpbETUwE5X2AEcySUVxUCrubj4zyRqrvyO9mkWdtRvwOGiuYKo0fWsdbWPkEeYl36VKkefWjSTN1%2Fpbykq1Uo%2FYrTq0vELjf2xYKrl5P6wc2%2Bt4%2FlVv9psvz6J8m%2BOL2XuiYZ8vDeWwo%2FMHD2mA2diE9%2Fqqv%2BUvI%2F1XXv0qppmAWaYl8NpDcdrMNCcrcQGOqUB3IrdFirqNxc7i3a679wkNUs73o0V6wLM0iuAZEhSDvQuIoECzSjL%2BMLpoKCC4pvalghnDTHjialla68kKCAiRErplJpUutYxp9adIiuLt%2B5NzPmEI5mRBBzI8B1PaFCuPuo659OhopMDuceCTNhduSXfY6Rt8V2uf%2FR%2Bv3U4DlUEKVNH08pjJzapkfpAiGa6CVvocIYnHonDn%2B2gQTDubxoRbcOx&X-Amz-Signature=e195a2f98c44b48ce4dfad206a09844ab1da531b6b5c71791a00a83b38d7586f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEX6ZMS2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZJUovoUk5NL%2B9lG7x03znzuwKm%2FT%2BWJFkhu%2BUg8uOBwIgOxEa2JBwrIMxVQf1iUyhbJ23jpwy9WUhMxryr4E1CUwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvQOI4kqQR%2BobJytSrcA7wLOQpzzxJcECcJikAIvMJLg7dAXWvpEd3gB%2B54V4e2nGgzcUKejiswwsV%2F7OOUEKGUpAvJ%2BVd1F1DSUUSmuEtZsW0mzFNgquZeia2dQJp6gxWUUAkjir352WsoQYSUkywuY6vPXiETrzkPk%2BXp%2BeC0jDnVj6Vpa8F3%2BIXvAraaUQVytlY%2BY7J07IzKoDioRFKmIrZwRvymEiq0SW4VQctNI1dVFMRQoosD29aBPllX9LDbz0YJ799%2BVppRw0hKJ4vqJWa06L4DK7o0h7CwYZieVYg8lU%2FtjQyhT6FTUt%2FMxB3H3fajq7qpPuga7v9Br95Y1pdQ5MOAnNCVY8LruHlrfhWRwMdZ0zjNRDjatG8HuS4k%2BfxobXsXTMgv4xC%2F8N1riJpGCr3uQYLOm72TmzZVnRRjXJIhGAXhpeY6OhJHqxeEqU0gWlpJac864IeaQhQQMDLpbETUwE5X2AEcySUVxUCrubj4zyRqrvyO9mkWdtRvwOGiuYKo0fWsdbWPkEeYl36VKkefWjSTN1%2Fpbykq1Uo%2FYrTq0vELjf2xYKrl5P6wc2%2Bt4%2FlVv9psvz6J8m%2BOL2XuiYZ8vDeWwo%2FMHD2mA2diE9%2Fqqv%2BUvI%2F1XXv0qppmAWaYl8NpDcdrMNCcrcQGOqUB3IrdFirqNxc7i3a679wkNUs73o0V6wLM0iuAZEhSDvQuIoECzSjL%2BMLpoKCC4pvalghnDTHjialla68kKCAiRErplJpUutYxp9adIiuLt%2B5NzPmEI5mRBBzI8B1PaFCuPuo659OhopMDuceCTNhduSXfY6Rt8V2uf%2FR%2Bv3U4DlUEKVNH08pjJzapkfpAiGa6CVvocIYnHonDn%2B2gQTDubxoRbcOx&X-Amz-Signature=2ec5b5a2b2dd3af78c17a149123644d3ab3b4a17d4dca9154fe4498106bf59e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEX6ZMS2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZJUovoUk5NL%2B9lG7x03znzuwKm%2FT%2BWJFkhu%2BUg8uOBwIgOxEa2JBwrIMxVQf1iUyhbJ23jpwy9WUhMxryr4E1CUwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvQOI4kqQR%2BobJytSrcA7wLOQpzzxJcECcJikAIvMJLg7dAXWvpEd3gB%2B54V4e2nGgzcUKejiswwsV%2F7OOUEKGUpAvJ%2BVd1F1DSUUSmuEtZsW0mzFNgquZeia2dQJp6gxWUUAkjir352WsoQYSUkywuY6vPXiETrzkPk%2BXp%2BeC0jDnVj6Vpa8F3%2BIXvAraaUQVytlY%2BY7J07IzKoDioRFKmIrZwRvymEiq0SW4VQctNI1dVFMRQoosD29aBPllX9LDbz0YJ799%2BVppRw0hKJ4vqJWa06L4DK7o0h7CwYZieVYg8lU%2FtjQyhT6FTUt%2FMxB3H3fajq7qpPuga7v9Br95Y1pdQ5MOAnNCVY8LruHlrfhWRwMdZ0zjNRDjatG8HuS4k%2BfxobXsXTMgv4xC%2F8N1riJpGCr3uQYLOm72TmzZVnRRjXJIhGAXhpeY6OhJHqxeEqU0gWlpJac864IeaQhQQMDLpbETUwE5X2AEcySUVxUCrubj4zyRqrvyO9mkWdtRvwOGiuYKo0fWsdbWPkEeYl36VKkefWjSTN1%2Fpbykq1Uo%2FYrTq0vELjf2xYKrl5P6wc2%2Bt4%2FlVv9psvz6J8m%2BOL2XuiYZ8vDeWwo%2FMHD2mA2diE9%2Fqqv%2BUvI%2F1XXv0qppmAWaYl8NpDcdrMNCcrcQGOqUB3IrdFirqNxc7i3a679wkNUs73o0V6wLM0iuAZEhSDvQuIoECzSjL%2BMLpoKCC4pvalghnDTHjialla68kKCAiRErplJpUutYxp9adIiuLt%2B5NzPmEI5mRBBzI8B1PaFCuPuo659OhopMDuceCTNhduSXfY6Rt8V2uf%2FR%2Bv3U4DlUEKVNH08pjJzapkfpAiGa6CVvocIYnHonDn%2B2gQTDubxoRbcOx&X-Amz-Signature=fd80c14e87b6446dc1485b9d1aea27ce17cd7f22f29ef690bf591099608d5807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEX6ZMS2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZJUovoUk5NL%2B9lG7x03znzuwKm%2FT%2BWJFkhu%2BUg8uOBwIgOxEa2JBwrIMxVQf1iUyhbJ23jpwy9WUhMxryr4E1CUwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvQOI4kqQR%2BobJytSrcA7wLOQpzzxJcECcJikAIvMJLg7dAXWvpEd3gB%2B54V4e2nGgzcUKejiswwsV%2F7OOUEKGUpAvJ%2BVd1F1DSUUSmuEtZsW0mzFNgquZeia2dQJp6gxWUUAkjir352WsoQYSUkywuY6vPXiETrzkPk%2BXp%2BeC0jDnVj6Vpa8F3%2BIXvAraaUQVytlY%2BY7J07IzKoDioRFKmIrZwRvymEiq0SW4VQctNI1dVFMRQoosD29aBPllX9LDbz0YJ799%2BVppRw0hKJ4vqJWa06L4DK7o0h7CwYZieVYg8lU%2FtjQyhT6FTUt%2FMxB3H3fajq7qpPuga7v9Br95Y1pdQ5MOAnNCVY8LruHlrfhWRwMdZ0zjNRDjatG8HuS4k%2BfxobXsXTMgv4xC%2F8N1riJpGCr3uQYLOm72TmzZVnRRjXJIhGAXhpeY6OhJHqxeEqU0gWlpJac864IeaQhQQMDLpbETUwE5X2AEcySUVxUCrubj4zyRqrvyO9mkWdtRvwOGiuYKo0fWsdbWPkEeYl36VKkefWjSTN1%2Fpbykq1Uo%2FYrTq0vELjf2xYKrl5P6wc2%2Bt4%2FlVv9psvz6J8m%2BOL2XuiYZ8vDeWwo%2FMHD2mA2diE9%2Fqqv%2BUvI%2F1XXv0qppmAWaYl8NpDcdrMNCcrcQGOqUB3IrdFirqNxc7i3a679wkNUs73o0V6wLM0iuAZEhSDvQuIoECzSjL%2BMLpoKCC4pvalghnDTHjialla68kKCAiRErplJpUutYxp9adIiuLt%2B5NzPmEI5mRBBzI8B1PaFCuPuo659OhopMDuceCTNhduSXfY6Rt8V2uf%2FR%2Bv3U4DlUEKVNH08pjJzapkfpAiGa6CVvocIYnHonDn%2B2gQTDubxoRbcOx&X-Amz-Signature=d280ea8fcf1884b1676ba7abe3d494cef77d068dd101db6adf8c8bb9e5dd64a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEX6ZMS2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZJUovoUk5NL%2B9lG7x03znzuwKm%2FT%2BWJFkhu%2BUg8uOBwIgOxEa2JBwrIMxVQf1iUyhbJ23jpwy9WUhMxryr4E1CUwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvQOI4kqQR%2BobJytSrcA7wLOQpzzxJcECcJikAIvMJLg7dAXWvpEd3gB%2B54V4e2nGgzcUKejiswwsV%2F7OOUEKGUpAvJ%2BVd1F1DSUUSmuEtZsW0mzFNgquZeia2dQJp6gxWUUAkjir352WsoQYSUkywuY6vPXiETrzkPk%2BXp%2BeC0jDnVj6Vpa8F3%2BIXvAraaUQVytlY%2BY7J07IzKoDioRFKmIrZwRvymEiq0SW4VQctNI1dVFMRQoosD29aBPllX9LDbz0YJ799%2BVppRw0hKJ4vqJWa06L4DK7o0h7CwYZieVYg8lU%2FtjQyhT6FTUt%2FMxB3H3fajq7qpPuga7v9Br95Y1pdQ5MOAnNCVY8LruHlrfhWRwMdZ0zjNRDjatG8HuS4k%2BfxobXsXTMgv4xC%2F8N1riJpGCr3uQYLOm72TmzZVnRRjXJIhGAXhpeY6OhJHqxeEqU0gWlpJac864IeaQhQQMDLpbETUwE5X2AEcySUVxUCrubj4zyRqrvyO9mkWdtRvwOGiuYKo0fWsdbWPkEeYl36VKkefWjSTN1%2Fpbykq1Uo%2FYrTq0vELjf2xYKrl5P6wc2%2Bt4%2FlVv9psvz6J8m%2BOL2XuiYZ8vDeWwo%2FMHD2mA2diE9%2Fqqv%2BUvI%2F1XXv0qppmAWaYl8NpDcdrMNCcrcQGOqUB3IrdFirqNxc7i3a679wkNUs73o0V6wLM0iuAZEhSDvQuIoECzSjL%2BMLpoKCC4pvalghnDTHjialla68kKCAiRErplJpUutYxp9adIiuLt%2B5NzPmEI5mRBBzI8B1PaFCuPuo659OhopMDuceCTNhduSXfY6Rt8V2uf%2FR%2Bv3U4DlUEKVNH08pjJzapkfpAiGa6CVvocIYnHonDn%2B2gQTDubxoRbcOx&X-Amz-Signature=283ee833da7b1bd43b006c026ae1e2f57214925688de448b6fb0e9a8b5e39275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEX6ZMS2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZJUovoUk5NL%2B9lG7x03znzuwKm%2FT%2BWJFkhu%2BUg8uOBwIgOxEa2JBwrIMxVQf1iUyhbJ23jpwy9WUhMxryr4E1CUwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvQOI4kqQR%2BobJytSrcA7wLOQpzzxJcECcJikAIvMJLg7dAXWvpEd3gB%2B54V4e2nGgzcUKejiswwsV%2F7OOUEKGUpAvJ%2BVd1F1DSUUSmuEtZsW0mzFNgquZeia2dQJp6gxWUUAkjir352WsoQYSUkywuY6vPXiETrzkPk%2BXp%2BeC0jDnVj6Vpa8F3%2BIXvAraaUQVytlY%2BY7J07IzKoDioRFKmIrZwRvymEiq0SW4VQctNI1dVFMRQoosD29aBPllX9LDbz0YJ799%2BVppRw0hKJ4vqJWa06L4DK7o0h7CwYZieVYg8lU%2FtjQyhT6FTUt%2FMxB3H3fajq7qpPuga7v9Br95Y1pdQ5MOAnNCVY8LruHlrfhWRwMdZ0zjNRDjatG8HuS4k%2BfxobXsXTMgv4xC%2F8N1riJpGCr3uQYLOm72TmzZVnRRjXJIhGAXhpeY6OhJHqxeEqU0gWlpJac864IeaQhQQMDLpbETUwE5X2AEcySUVxUCrubj4zyRqrvyO9mkWdtRvwOGiuYKo0fWsdbWPkEeYl36VKkefWjSTN1%2Fpbykq1Uo%2FYrTq0vELjf2xYKrl5P6wc2%2Bt4%2FlVv9psvz6J8m%2BOL2XuiYZ8vDeWwo%2FMHD2mA2diE9%2Fqqv%2BUvI%2F1XXv0qppmAWaYl8NpDcdrMNCcrcQGOqUB3IrdFirqNxc7i3a679wkNUs73o0V6wLM0iuAZEhSDvQuIoECzSjL%2BMLpoKCC4pvalghnDTHjialla68kKCAiRErplJpUutYxp9adIiuLt%2B5NzPmEI5mRBBzI8B1PaFCuPuo659OhopMDuceCTNhduSXfY6Rt8V2uf%2FR%2Bv3U4DlUEKVNH08pjJzapkfpAiGa6CVvocIYnHonDn%2B2gQTDubxoRbcOx&X-Amz-Signature=4b8b2d5ddafd880cc3608be463ed59660732fec35f2a0eac51ce00c9ef46af30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEX6ZMS2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZJUovoUk5NL%2B9lG7x03znzuwKm%2FT%2BWJFkhu%2BUg8uOBwIgOxEa2JBwrIMxVQf1iUyhbJ23jpwy9WUhMxryr4E1CUwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvQOI4kqQR%2BobJytSrcA7wLOQpzzxJcECcJikAIvMJLg7dAXWvpEd3gB%2B54V4e2nGgzcUKejiswwsV%2F7OOUEKGUpAvJ%2BVd1F1DSUUSmuEtZsW0mzFNgquZeia2dQJp6gxWUUAkjir352WsoQYSUkywuY6vPXiETrzkPk%2BXp%2BeC0jDnVj6Vpa8F3%2BIXvAraaUQVytlY%2BY7J07IzKoDioRFKmIrZwRvymEiq0SW4VQctNI1dVFMRQoosD29aBPllX9LDbz0YJ799%2BVppRw0hKJ4vqJWa06L4DK7o0h7CwYZieVYg8lU%2FtjQyhT6FTUt%2FMxB3H3fajq7qpPuga7v9Br95Y1pdQ5MOAnNCVY8LruHlrfhWRwMdZ0zjNRDjatG8HuS4k%2BfxobXsXTMgv4xC%2F8N1riJpGCr3uQYLOm72TmzZVnRRjXJIhGAXhpeY6OhJHqxeEqU0gWlpJac864IeaQhQQMDLpbETUwE5X2AEcySUVxUCrubj4zyRqrvyO9mkWdtRvwOGiuYKo0fWsdbWPkEeYl36VKkefWjSTN1%2Fpbykq1Uo%2FYrTq0vELjf2xYKrl5P6wc2%2Bt4%2FlVv9psvz6J8m%2BOL2XuiYZ8vDeWwo%2FMHD2mA2diE9%2Fqqv%2BUvI%2F1XXv0qppmAWaYl8NpDcdrMNCcrcQGOqUB3IrdFirqNxc7i3a679wkNUs73o0V6wLM0iuAZEhSDvQuIoECzSjL%2BMLpoKCC4pvalghnDTHjialla68kKCAiRErplJpUutYxp9adIiuLt%2B5NzPmEI5mRBBzI8B1PaFCuPuo659OhopMDuceCTNhduSXfY6Rt8V2uf%2FR%2Bv3U4DlUEKVNH08pjJzapkfpAiGa6CVvocIYnHonDn%2B2gQTDubxoRbcOx&X-Amz-Signature=e14f442442b89bd466308f99d59112259699ac1d7170e819b97b6345f481e6c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEX6ZMS2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZJUovoUk5NL%2B9lG7x03znzuwKm%2FT%2BWJFkhu%2BUg8uOBwIgOxEa2JBwrIMxVQf1iUyhbJ23jpwy9WUhMxryr4E1CUwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvQOI4kqQR%2BobJytSrcA7wLOQpzzxJcECcJikAIvMJLg7dAXWvpEd3gB%2B54V4e2nGgzcUKejiswwsV%2F7OOUEKGUpAvJ%2BVd1F1DSUUSmuEtZsW0mzFNgquZeia2dQJp6gxWUUAkjir352WsoQYSUkywuY6vPXiETrzkPk%2BXp%2BeC0jDnVj6Vpa8F3%2BIXvAraaUQVytlY%2BY7J07IzKoDioRFKmIrZwRvymEiq0SW4VQctNI1dVFMRQoosD29aBPllX9LDbz0YJ799%2BVppRw0hKJ4vqJWa06L4DK7o0h7CwYZieVYg8lU%2FtjQyhT6FTUt%2FMxB3H3fajq7qpPuga7v9Br95Y1pdQ5MOAnNCVY8LruHlrfhWRwMdZ0zjNRDjatG8HuS4k%2BfxobXsXTMgv4xC%2F8N1riJpGCr3uQYLOm72TmzZVnRRjXJIhGAXhpeY6OhJHqxeEqU0gWlpJac864IeaQhQQMDLpbETUwE5X2AEcySUVxUCrubj4zyRqrvyO9mkWdtRvwOGiuYKo0fWsdbWPkEeYl36VKkefWjSTN1%2Fpbykq1Uo%2FYrTq0vELjf2xYKrl5P6wc2%2Bt4%2FlVv9psvz6J8m%2BOL2XuiYZ8vDeWwo%2FMHD2mA2diE9%2Fqqv%2BUvI%2F1XXv0qppmAWaYl8NpDcdrMNCcrcQGOqUB3IrdFirqNxc7i3a679wkNUs73o0V6wLM0iuAZEhSDvQuIoECzSjL%2BMLpoKCC4pvalghnDTHjialla68kKCAiRErplJpUutYxp9adIiuLt%2B5NzPmEI5mRBBzI8B1PaFCuPuo659OhopMDuceCTNhduSXfY6Rt8V2uf%2FR%2Bv3U4DlUEKVNH08pjJzapkfpAiGa6CVvocIYnHonDn%2B2gQTDubxoRbcOx&X-Amz-Signature=2923a9ce659d2e7f1baf7dfade52617b1bc96dc9af46217d4a9863eae78c9033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEX6ZMS2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZJUovoUk5NL%2B9lG7x03znzuwKm%2FT%2BWJFkhu%2BUg8uOBwIgOxEa2JBwrIMxVQf1iUyhbJ23jpwy9WUhMxryr4E1CUwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvQOI4kqQR%2BobJytSrcA7wLOQpzzxJcECcJikAIvMJLg7dAXWvpEd3gB%2B54V4e2nGgzcUKejiswwsV%2F7OOUEKGUpAvJ%2BVd1F1DSUUSmuEtZsW0mzFNgquZeia2dQJp6gxWUUAkjir352WsoQYSUkywuY6vPXiETrzkPk%2BXp%2BeC0jDnVj6Vpa8F3%2BIXvAraaUQVytlY%2BY7J07IzKoDioRFKmIrZwRvymEiq0SW4VQctNI1dVFMRQoosD29aBPllX9LDbz0YJ799%2BVppRw0hKJ4vqJWa06L4DK7o0h7CwYZieVYg8lU%2FtjQyhT6FTUt%2FMxB3H3fajq7qpPuga7v9Br95Y1pdQ5MOAnNCVY8LruHlrfhWRwMdZ0zjNRDjatG8HuS4k%2BfxobXsXTMgv4xC%2F8N1riJpGCr3uQYLOm72TmzZVnRRjXJIhGAXhpeY6OhJHqxeEqU0gWlpJac864IeaQhQQMDLpbETUwE5X2AEcySUVxUCrubj4zyRqrvyO9mkWdtRvwOGiuYKo0fWsdbWPkEeYl36VKkefWjSTN1%2Fpbykq1Uo%2FYrTq0vELjf2xYKrl5P6wc2%2Bt4%2FlVv9psvz6J8m%2BOL2XuiYZ8vDeWwo%2FMHD2mA2diE9%2Fqqv%2BUvI%2F1XXv0qppmAWaYl8NpDcdrMNCcrcQGOqUB3IrdFirqNxc7i3a679wkNUs73o0V6wLM0iuAZEhSDvQuIoECzSjL%2BMLpoKCC4pvalghnDTHjialla68kKCAiRErplJpUutYxp9adIiuLt%2B5NzPmEI5mRBBzI8B1PaFCuPuo659OhopMDuceCTNhduSXfY6Rt8V2uf%2FR%2Bv3U4DlUEKVNH08pjJzapkfpAiGa6CVvocIYnHonDn%2B2gQTDubxoRbcOx&X-Amz-Signature=f6dcb838db250e32f8390984b1e6cc7bc1d831a244ea04f7879659cf7ea850fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEX6ZMS2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZJUovoUk5NL%2B9lG7x03znzuwKm%2FT%2BWJFkhu%2BUg8uOBwIgOxEa2JBwrIMxVQf1iUyhbJ23jpwy9WUhMxryr4E1CUwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvQOI4kqQR%2BobJytSrcA7wLOQpzzxJcECcJikAIvMJLg7dAXWvpEd3gB%2B54V4e2nGgzcUKejiswwsV%2F7OOUEKGUpAvJ%2BVd1F1DSUUSmuEtZsW0mzFNgquZeia2dQJp6gxWUUAkjir352WsoQYSUkywuY6vPXiETrzkPk%2BXp%2BeC0jDnVj6Vpa8F3%2BIXvAraaUQVytlY%2BY7J07IzKoDioRFKmIrZwRvymEiq0SW4VQctNI1dVFMRQoosD29aBPllX9LDbz0YJ799%2BVppRw0hKJ4vqJWa06L4DK7o0h7CwYZieVYg8lU%2FtjQyhT6FTUt%2FMxB3H3fajq7qpPuga7v9Br95Y1pdQ5MOAnNCVY8LruHlrfhWRwMdZ0zjNRDjatG8HuS4k%2BfxobXsXTMgv4xC%2F8N1riJpGCr3uQYLOm72TmzZVnRRjXJIhGAXhpeY6OhJHqxeEqU0gWlpJac864IeaQhQQMDLpbETUwE5X2AEcySUVxUCrubj4zyRqrvyO9mkWdtRvwOGiuYKo0fWsdbWPkEeYl36VKkefWjSTN1%2Fpbykq1Uo%2FYrTq0vELjf2xYKrl5P6wc2%2Bt4%2FlVv9psvz6J8m%2BOL2XuiYZ8vDeWwo%2FMHD2mA2diE9%2Fqqv%2BUvI%2F1XXv0qppmAWaYl8NpDcdrMNCcrcQGOqUB3IrdFirqNxc7i3a679wkNUs73o0V6wLM0iuAZEhSDvQuIoECzSjL%2BMLpoKCC4pvalghnDTHjialla68kKCAiRErplJpUutYxp9adIiuLt%2B5NzPmEI5mRBBzI8B1PaFCuPuo659OhopMDuceCTNhduSXfY6Rt8V2uf%2FR%2Bv3U4DlUEKVNH08pjJzapkfpAiGa6CVvocIYnHonDn%2B2gQTDubxoRbcOx&X-Amz-Signature=95a305c1fd611694d2facc27917a67dad8df2aea7ad9de071405b944b5dcef8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEX6ZMS2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZJUovoUk5NL%2B9lG7x03znzuwKm%2FT%2BWJFkhu%2BUg8uOBwIgOxEa2JBwrIMxVQf1iUyhbJ23jpwy9WUhMxryr4E1CUwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvQOI4kqQR%2BobJytSrcA7wLOQpzzxJcECcJikAIvMJLg7dAXWvpEd3gB%2B54V4e2nGgzcUKejiswwsV%2F7OOUEKGUpAvJ%2BVd1F1DSUUSmuEtZsW0mzFNgquZeia2dQJp6gxWUUAkjir352WsoQYSUkywuY6vPXiETrzkPk%2BXp%2BeC0jDnVj6Vpa8F3%2BIXvAraaUQVytlY%2BY7J07IzKoDioRFKmIrZwRvymEiq0SW4VQctNI1dVFMRQoosD29aBPllX9LDbz0YJ799%2BVppRw0hKJ4vqJWa06L4DK7o0h7CwYZieVYg8lU%2FtjQyhT6FTUt%2FMxB3H3fajq7qpPuga7v9Br95Y1pdQ5MOAnNCVY8LruHlrfhWRwMdZ0zjNRDjatG8HuS4k%2BfxobXsXTMgv4xC%2F8N1riJpGCr3uQYLOm72TmzZVnRRjXJIhGAXhpeY6OhJHqxeEqU0gWlpJac864IeaQhQQMDLpbETUwE5X2AEcySUVxUCrubj4zyRqrvyO9mkWdtRvwOGiuYKo0fWsdbWPkEeYl36VKkefWjSTN1%2Fpbykq1Uo%2FYrTq0vELjf2xYKrl5P6wc2%2Bt4%2FlVv9psvz6J8m%2BOL2XuiYZ8vDeWwo%2FMHD2mA2diE9%2Fqqv%2BUvI%2F1XXv0qppmAWaYl8NpDcdrMNCcrcQGOqUB3IrdFirqNxc7i3a679wkNUs73o0V6wLM0iuAZEhSDvQuIoECzSjL%2BMLpoKCC4pvalghnDTHjialla68kKCAiRErplJpUutYxp9adIiuLt%2B5NzPmEI5mRBBzI8B1PaFCuPuo659OhopMDuceCTNhduSXfY6Rt8V2uf%2FR%2Bv3U4DlUEKVNH08pjJzapkfpAiGa6CVvocIYnHonDn%2B2gQTDubxoRbcOx&X-Amz-Signature=052014b66e50c89ddcbd7ba98a35db514df2685ea3129e307aed0652a282e96e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEX6ZMS2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZJUovoUk5NL%2B9lG7x03znzuwKm%2FT%2BWJFkhu%2BUg8uOBwIgOxEa2JBwrIMxVQf1iUyhbJ23jpwy9WUhMxryr4E1CUwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvQOI4kqQR%2BobJytSrcA7wLOQpzzxJcECcJikAIvMJLg7dAXWvpEd3gB%2B54V4e2nGgzcUKejiswwsV%2F7OOUEKGUpAvJ%2BVd1F1DSUUSmuEtZsW0mzFNgquZeia2dQJp6gxWUUAkjir352WsoQYSUkywuY6vPXiETrzkPk%2BXp%2BeC0jDnVj6Vpa8F3%2BIXvAraaUQVytlY%2BY7J07IzKoDioRFKmIrZwRvymEiq0SW4VQctNI1dVFMRQoosD29aBPllX9LDbz0YJ799%2BVppRw0hKJ4vqJWa06L4DK7o0h7CwYZieVYg8lU%2FtjQyhT6FTUt%2FMxB3H3fajq7qpPuga7v9Br95Y1pdQ5MOAnNCVY8LruHlrfhWRwMdZ0zjNRDjatG8HuS4k%2BfxobXsXTMgv4xC%2F8N1riJpGCr3uQYLOm72TmzZVnRRjXJIhGAXhpeY6OhJHqxeEqU0gWlpJac864IeaQhQQMDLpbETUwE5X2AEcySUVxUCrubj4zyRqrvyO9mkWdtRvwOGiuYKo0fWsdbWPkEeYl36VKkefWjSTN1%2Fpbykq1Uo%2FYrTq0vELjf2xYKrl5P6wc2%2Bt4%2FlVv9psvz6J8m%2BOL2XuiYZ8vDeWwo%2FMHD2mA2diE9%2Fqqv%2BUvI%2F1XXv0qppmAWaYl8NpDcdrMNCcrcQGOqUB3IrdFirqNxc7i3a679wkNUs73o0V6wLM0iuAZEhSDvQuIoECzSjL%2BMLpoKCC4pvalghnDTHjialla68kKCAiRErplJpUutYxp9adIiuLt%2B5NzPmEI5mRBBzI8B1PaFCuPuo659OhopMDuceCTNhduSXfY6Rt8V2uf%2FR%2Bv3U4DlUEKVNH08pjJzapkfpAiGa6CVvocIYnHonDn%2B2gQTDubxoRbcOx&X-Amz-Signature=6f643576a9b62859eac3a4da08fa0c0d479a67c6c8f931b5e0951a5b32d1f64e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEX6ZMS2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZJUovoUk5NL%2B9lG7x03znzuwKm%2FT%2BWJFkhu%2BUg8uOBwIgOxEa2JBwrIMxVQf1iUyhbJ23jpwy9WUhMxryr4E1CUwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvQOI4kqQR%2BobJytSrcA7wLOQpzzxJcECcJikAIvMJLg7dAXWvpEd3gB%2B54V4e2nGgzcUKejiswwsV%2F7OOUEKGUpAvJ%2BVd1F1DSUUSmuEtZsW0mzFNgquZeia2dQJp6gxWUUAkjir352WsoQYSUkywuY6vPXiETrzkPk%2BXp%2BeC0jDnVj6Vpa8F3%2BIXvAraaUQVytlY%2BY7J07IzKoDioRFKmIrZwRvymEiq0SW4VQctNI1dVFMRQoosD29aBPllX9LDbz0YJ799%2BVppRw0hKJ4vqJWa06L4DK7o0h7CwYZieVYg8lU%2FtjQyhT6FTUt%2FMxB3H3fajq7qpPuga7v9Br95Y1pdQ5MOAnNCVY8LruHlrfhWRwMdZ0zjNRDjatG8HuS4k%2BfxobXsXTMgv4xC%2F8N1riJpGCr3uQYLOm72TmzZVnRRjXJIhGAXhpeY6OhJHqxeEqU0gWlpJac864IeaQhQQMDLpbETUwE5X2AEcySUVxUCrubj4zyRqrvyO9mkWdtRvwOGiuYKo0fWsdbWPkEeYl36VKkefWjSTN1%2Fpbykq1Uo%2FYrTq0vELjf2xYKrl5P6wc2%2Bt4%2FlVv9psvz6J8m%2BOL2XuiYZ8vDeWwo%2FMHD2mA2diE9%2Fqqv%2BUvI%2F1XXv0qppmAWaYl8NpDcdrMNCcrcQGOqUB3IrdFirqNxc7i3a679wkNUs73o0V6wLM0iuAZEhSDvQuIoECzSjL%2BMLpoKCC4pvalghnDTHjialla68kKCAiRErplJpUutYxp9adIiuLt%2B5NzPmEI5mRBBzI8B1PaFCuPuo659OhopMDuceCTNhduSXfY6Rt8V2uf%2FR%2Bv3U4DlUEKVNH08pjJzapkfpAiGa6CVvocIYnHonDn%2B2gQTDubxoRbcOx&X-Amz-Signature=cda5ec086f0bce19174273fa5d508f48c5c4f32a42525f8d2446f38e44ea764f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEX6ZMS2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZJUovoUk5NL%2B9lG7x03znzuwKm%2FT%2BWJFkhu%2BUg8uOBwIgOxEa2JBwrIMxVQf1iUyhbJ23jpwy9WUhMxryr4E1CUwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvQOI4kqQR%2BobJytSrcA7wLOQpzzxJcECcJikAIvMJLg7dAXWvpEd3gB%2B54V4e2nGgzcUKejiswwsV%2F7OOUEKGUpAvJ%2BVd1F1DSUUSmuEtZsW0mzFNgquZeia2dQJp6gxWUUAkjir352WsoQYSUkywuY6vPXiETrzkPk%2BXp%2BeC0jDnVj6Vpa8F3%2BIXvAraaUQVytlY%2BY7J07IzKoDioRFKmIrZwRvymEiq0SW4VQctNI1dVFMRQoosD29aBPllX9LDbz0YJ799%2BVppRw0hKJ4vqJWa06L4DK7o0h7CwYZieVYg8lU%2FtjQyhT6FTUt%2FMxB3H3fajq7qpPuga7v9Br95Y1pdQ5MOAnNCVY8LruHlrfhWRwMdZ0zjNRDjatG8HuS4k%2BfxobXsXTMgv4xC%2F8N1riJpGCr3uQYLOm72TmzZVnRRjXJIhGAXhpeY6OhJHqxeEqU0gWlpJac864IeaQhQQMDLpbETUwE5X2AEcySUVxUCrubj4zyRqrvyO9mkWdtRvwOGiuYKo0fWsdbWPkEeYl36VKkefWjSTN1%2Fpbykq1Uo%2FYrTq0vELjf2xYKrl5P6wc2%2Bt4%2FlVv9psvz6J8m%2BOL2XuiYZ8vDeWwo%2FMHD2mA2diE9%2Fqqv%2BUvI%2F1XXv0qppmAWaYl8NpDcdrMNCcrcQGOqUB3IrdFirqNxc7i3a679wkNUs73o0V6wLM0iuAZEhSDvQuIoECzSjL%2BMLpoKCC4pvalghnDTHjialla68kKCAiRErplJpUutYxp9adIiuLt%2B5NzPmEI5mRBBzI8B1PaFCuPuo659OhopMDuceCTNhduSXfY6Rt8V2uf%2FR%2Bv3U4DlUEKVNH08pjJzapkfpAiGa6CVvocIYnHonDn%2B2gQTDubxoRbcOx&X-Amz-Signature=eebdc5bd7eb89625fb982526b5cb9b4e6d1effa490330313a5f4a7ca8c3ba733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
