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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLKIATA%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgoQZJM5AwgkOL6o8TeYv6jNKUqpB3PCTim9SOMFdCHgIgaMc%2FBCnG7FxfvosDknmshFDwO6lyED%2BmfuYN711M1qEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJjA0fV%2BvqlcJr4mircA5C41FP8M%2FIyL%2F0o7w5UkWAe51R9gGPhztGmQgx5lA0kEJB7xUDFsto4iygKMMde8i6%2Byuw9fotE2ncBJvRrYPvyP4jkVVSkON2SGCpAYwinbI9uSUxR%2BjBV8ZhahdGghzf8CUSvKqw5WOMxz4JmfrsoOJi%2BgRYUaUhsRGTnGuTvPhxhctdEgM%2BvHUu%2FCjV6AC%2Bgkxgk1awLMkZ%2F%2FSN2dxi3bDn0eglBB1igXNkqhXZNe0ZJJVmPtWyz7p5ZjYlP%2Fcxc7KdFmtos%2BCPdn0DejYxz6yzlaTwEt6%2BQZAcjF77binElR8t8gDX3vdIpL4YwaIW%2BiNV1P4ctv4rZEHBhLeJ3ECLiJwnMTe3GluJnW3Y%2FPxbHmZOWDZ8sgv7%2BhH1ueU%2BAgRBDoqVmA1Bj6gzTc068WfdpYMCkCW9nERj08%2BKexF0txVJrAQiHEHgkNwgfzJSJGKPxm0BLe%2FbA2IA1VTiebpu%2F4Gtq2XL%2FN%2Fgm7Y4wN699tSmJ4KWclVVwQRK6HdaPOkYyX04rr0wl%2FjSdfgP4%2By%2BoZPa0FsSjURDNBUoIZ9Q%2B2GMobh7xbAeiealFR4zaXXdPWWV6U5py26WhEkqMqSa5p3NXmOs6s1rumVmV0Dx2AS6njRnpTslnMIPnlscGOqUBlCdQId8gRnJy1i5ApI%2Bk7C4QitLk7BKU8goliyXoG4BWh98jF0PZR3d2GYO6AjNBEnxUrCQyMEoHqxpJqkWl1GV%2F2227w4Qjsa%2FV2fHS%2BeHfGil8%2BPyY1l%2BWIxx4YKaQ3C3NRcTHyd86dx1D3L8MGrf1JtKHPFhLo9n8BsuApsZ2RssejKPHivC3dVPH5hcA13q2WUHLPlTw1Sq7foC0%2B9fBZZW0&X-Amz-Signature=5f672ad64636ad26e6ff0b61d1abb062ac0af6c3f1584e95366fe890e0334ac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLKIATA%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgoQZJM5AwgkOL6o8TeYv6jNKUqpB3PCTim9SOMFdCHgIgaMc%2FBCnG7FxfvosDknmshFDwO6lyED%2BmfuYN711M1qEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJjA0fV%2BvqlcJr4mircA5C41FP8M%2FIyL%2F0o7w5UkWAe51R9gGPhztGmQgx5lA0kEJB7xUDFsto4iygKMMde8i6%2Byuw9fotE2ncBJvRrYPvyP4jkVVSkON2SGCpAYwinbI9uSUxR%2BjBV8ZhahdGghzf8CUSvKqw5WOMxz4JmfrsoOJi%2BgRYUaUhsRGTnGuTvPhxhctdEgM%2BvHUu%2FCjV6AC%2Bgkxgk1awLMkZ%2F%2FSN2dxi3bDn0eglBB1igXNkqhXZNe0ZJJVmPtWyz7p5ZjYlP%2Fcxc7KdFmtos%2BCPdn0DejYxz6yzlaTwEt6%2BQZAcjF77binElR8t8gDX3vdIpL4YwaIW%2BiNV1P4ctv4rZEHBhLeJ3ECLiJwnMTe3GluJnW3Y%2FPxbHmZOWDZ8sgv7%2BhH1ueU%2BAgRBDoqVmA1Bj6gzTc068WfdpYMCkCW9nERj08%2BKexF0txVJrAQiHEHgkNwgfzJSJGKPxm0BLe%2FbA2IA1VTiebpu%2F4Gtq2XL%2FN%2Fgm7Y4wN699tSmJ4KWclVVwQRK6HdaPOkYyX04rr0wl%2FjSdfgP4%2By%2BoZPa0FsSjURDNBUoIZ9Q%2B2GMobh7xbAeiealFR4zaXXdPWWV6U5py26WhEkqMqSa5p3NXmOs6s1rumVmV0Dx2AS6njRnpTslnMIPnlscGOqUBlCdQId8gRnJy1i5ApI%2Bk7C4QitLk7BKU8goliyXoG4BWh98jF0PZR3d2GYO6AjNBEnxUrCQyMEoHqxpJqkWl1GV%2F2227w4Qjsa%2FV2fHS%2BeHfGil8%2BPyY1l%2BWIxx4YKaQ3C3NRcTHyd86dx1D3L8MGrf1JtKHPFhLo9n8BsuApsZ2RssejKPHivC3dVPH5hcA13q2WUHLPlTw1Sq7foC0%2B9fBZZW0&X-Amz-Signature=e122ffe98f0475ef8c3e9b75bf15980eee9d041533ad3527cb81b0e55eaf1b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLKIATA%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgoQZJM5AwgkOL6o8TeYv6jNKUqpB3PCTim9SOMFdCHgIgaMc%2FBCnG7FxfvosDknmshFDwO6lyED%2BmfuYN711M1qEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJjA0fV%2BvqlcJr4mircA5C41FP8M%2FIyL%2F0o7w5UkWAe51R9gGPhztGmQgx5lA0kEJB7xUDFsto4iygKMMde8i6%2Byuw9fotE2ncBJvRrYPvyP4jkVVSkON2SGCpAYwinbI9uSUxR%2BjBV8ZhahdGghzf8CUSvKqw5WOMxz4JmfrsoOJi%2BgRYUaUhsRGTnGuTvPhxhctdEgM%2BvHUu%2FCjV6AC%2Bgkxgk1awLMkZ%2F%2FSN2dxi3bDn0eglBB1igXNkqhXZNe0ZJJVmPtWyz7p5ZjYlP%2Fcxc7KdFmtos%2BCPdn0DejYxz6yzlaTwEt6%2BQZAcjF77binElR8t8gDX3vdIpL4YwaIW%2BiNV1P4ctv4rZEHBhLeJ3ECLiJwnMTe3GluJnW3Y%2FPxbHmZOWDZ8sgv7%2BhH1ueU%2BAgRBDoqVmA1Bj6gzTc068WfdpYMCkCW9nERj08%2BKexF0txVJrAQiHEHgkNwgfzJSJGKPxm0BLe%2FbA2IA1VTiebpu%2F4Gtq2XL%2FN%2Fgm7Y4wN699tSmJ4KWclVVwQRK6HdaPOkYyX04rr0wl%2FjSdfgP4%2By%2BoZPa0FsSjURDNBUoIZ9Q%2B2GMobh7xbAeiealFR4zaXXdPWWV6U5py26WhEkqMqSa5p3NXmOs6s1rumVmV0Dx2AS6njRnpTslnMIPnlscGOqUBlCdQId8gRnJy1i5ApI%2Bk7C4QitLk7BKU8goliyXoG4BWh98jF0PZR3d2GYO6AjNBEnxUrCQyMEoHqxpJqkWl1GV%2F2227w4Qjsa%2FV2fHS%2BeHfGil8%2BPyY1l%2BWIxx4YKaQ3C3NRcTHyd86dx1D3L8MGrf1JtKHPFhLo9n8BsuApsZ2RssejKPHivC3dVPH5hcA13q2WUHLPlTw1Sq7foC0%2B9fBZZW0&X-Amz-Signature=0e2951850410b4105e1c719b3c62936ccb87101361bef797942fd4d11dfd318e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLKIATA%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgoQZJM5AwgkOL6o8TeYv6jNKUqpB3PCTim9SOMFdCHgIgaMc%2FBCnG7FxfvosDknmshFDwO6lyED%2BmfuYN711M1qEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJjA0fV%2BvqlcJr4mircA5C41FP8M%2FIyL%2F0o7w5UkWAe51R9gGPhztGmQgx5lA0kEJB7xUDFsto4iygKMMde8i6%2Byuw9fotE2ncBJvRrYPvyP4jkVVSkON2SGCpAYwinbI9uSUxR%2BjBV8ZhahdGghzf8CUSvKqw5WOMxz4JmfrsoOJi%2BgRYUaUhsRGTnGuTvPhxhctdEgM%2BvHUu%2FCjV6AC%2Bgkxgk1awLMkZ%2F%2FSN2dxi3bDn0eglBB1igXNkqhXZNe0ZJJVmPtWyz7p5ZjYlP%2Fcxc7KdFmtos%2BCPdn0DejYxz6yzlaTwEt6%2BQZAcjF77binElR8t8gDX3vdIpL4YwaIW%2BiNV1P4ctv4rZEHBhLeJ3ECLiJwnMTe3GluJnW3Y%2FPxbHmZOWDZ8sgv7%2BhH1ueU%2BAgRBDoqVmA1Bj6gzTc068WfdpYMCkCW9nERj08%2BKexF0txVJrAQiHEHgkNwgfzJSJGKPxm0BLe%2FbA2IA1VTiebpu%2F4Gtq2XL%2FN%2Fgm7Y4wN699tSmJ4KWclVVwQRK6HdaPOkYyX04rr0wl%2FjSdfgP4%2By%2BoZPa0FsSjURDNBUoIZ9Q%2B2GMobh7xbAeiealFR4zaXXdPWWV6U5py26WhEkqMqSa5p3NXmOs6s1rumVmV0Dx2AS6njRnpTslnMIPnlscGOqUBlCdQId8gRnJy1i5ApI%2Bk7C4QitLk7BKU8goliyXoG4BWh98jF0PZR3d2GYO6AjNBEnxUrCQyMEoHqxpJqkWl1GV%2F2227w4Qjsa%2FV2fHS%2BeHfGil8%2BPyY1l%2BWIxx4YKaQ3C3NRcTHyd86dx1D3L8MGrf1JtKHPFhLo9n8BsuApsZ2RssejKPHivC3dVPH5hcA13q2WUHLPlTw1Sq7foC0%2B9fBZZW0&X-Amz-Signature=ac06f29100dd1280261c0d8390ee7b59ff19f60a0bf11b5fdd9201ee87e112c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLKIATA%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgoQZJM5AwgkOL6o8TeYv6jNKUqpB3PCTim9SOMFdCHgIgaMc%2FBCnG7FxfvosDknmshFDwO6lyED%2BmfuYN711M1qEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJjA0fV%2BvqlcJr4mircA5C41FP8M%2FIyL%2F0o7w5UkWAe51R9gGPhztGmQgx5lA0kEJB7xUDFsto4iygKMMde8i6%2Byuw9fotE2ncBJvRrYPvyP4jkVVSkON2SGCpAYwinbI9uSUxR%2BjBV8ZhahdGghzf8CUSvKqw5WOMxz4JmfrsoOJi%2BgRYUaUhsRGTnGuTvPhxhctdEgM%2BvHUu%2FCjV6AC%2Bgkxgk1awLMkZ%2F%2FSN2dxi3bDn0eglBB1igXNkqhXZNe0ZJJVmPtWyz7p5ZjYlP%2Fcxc7KdFmtos%2BCPdn0DejYxz6yzlaTwEt6%2BQZAcjF77binElR8t8gDX3vdIpL4YwaIW%2BiNV1P4ctv4rZEHBhLeJ3ECLiJwnMTe3GluJnW3Y%2FPxbHmZOWDZ8sgv7%2BhH1ueU%2BAgRBDoqVmA1Bj6gzTc068WfdpYMCkCW9nERj08%2BKexF0txVJrAQiHEHgkNwgfzJSJGKPxm0BLe%2FbA2IA1VTiebpu%2F4Gtq2XL%2FN%2Fgm7Y4wN699tSmJ4KWclVVwQRK6HdaPOkYyX04rr0wl%2FjSdfgP4%2By%2BoZPa0FsSjURDNBUoIZ9Q%2B2GMobh7xbAeiealFR4zaXXdPWWV6U5py26WhEkqMqSa5p3NXmOs6s1rumVmV0Dx2AS6njRnpTslnMIPnlscGOqUBlCdQId8gRnJy1i5ApI%2Bk7C4QitLk7BKU8goliyXoG4BWh98jF0PZR3d2GYO6AjNBEnxUrCQyMEoHqxpJqkWl1GV%2F2227w4Qjsa%2FV2fHS%2BeHfGil8%2BPyY1l%2BWIxx4YKaQ3C3NRcTHyd86dx1D3L8MGrf1JtKHPFhLo9n8BsuApsZ2RssejKPHivC3dVPH5hcA13q2WUHLPlTw1Sq7foC0%2B9fBZZW0&X-Amz-Signature=1694cdc190a45de0059d86460d238e18bf5a3ad06dcc3e5bce3660d48e17dfb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLKIATA%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgoQZJM5AwgkOL6o8TeYv6jNKUqpB3PCTim9SOMFdCHgIgaMc%2FBCnG7FxfvosDknmshFDwO6lyED%2BmfuYN711M1qEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJjA0fV%2BvqlcJr4mircA5C41FP8M%2FIyL%2F0o7w5UkWAe51R9gGPhztGmQgx5lA0kEJB7xUDFsto4iygKMMde8i6%2Byuw9fotE2ncBJvRrYPvyP4jkVVSkON2SGCpAYwinbI9uSUxR%2BjBV8ZhahdGghzf8CUSvKqw5WOMxz4JmfrsoOJi%2BgRYUaUhsRGTnGuTvPhxhctdEgM%2BvHUu%2FCjV6AC%2Bgkxgk1awLMkZ%2F%2FSN2dxi3bDn0eglBB1igXNkqhXZNe0ZJJVmPtWyz7p5ZjYlP%2Fcxc7KdFmtos%2BCPdn0DejYxz6yzlaTwEt6%2BQZAcjF77binElR8t8gDX3vdIpL4YwaIW%2BiNV1P4ctv4rZEHBhLeJ3ECLiJwnMTe3GluJnW3Y%2FPxbHmZOWDZ8sgv7%2BhH1ueU%2BAgRBDoqVmA1Bj6gzTc068WfdpYMCkCW9nERj08%2BKexF0txVJrAQiHEHgkNwgfzJSJGKPxm0BLe%2FbA2IA1VTiebpu%2F4Gtq2XL%2FN%2Fgm7Y4wN699tSmJ4KWclVVwQRK6HdaPOkYyX04rr0wl%2FjSdfgP4%2By%2BoZPa0FsSjURDNBUoIZ9Q%2B2GMobh7xbAeiealFR4zaXXdPWWV6U5py26WhEkqMqSa5p3NXmOs6s1rumVmV0Dx2AS6njRnpTslnMIPnlscGOqUBlCdQId8gRnJy1i5ApI%2Bk7C4QitLk7BKU8goliyXoG4BWh98jF0PZR3d2GYO6AjNBEnxUrCQyMEoHqxpJqkWl1GV%2F2227w4Qjsa%2FV2fHS%2BeHfGil8%2BPyY1l%2BWIxx4YKaQ3C3NRcTHyd86dx1D3L8MGrf1JtKHPFhLo9n8BsuApsZ2RssejKPHivC3dVPH5hcA13q2WUHLPlTw1Sq7foC0%2B9fBZZW0&X-Amz-Signature=89d2c1715ace5e3845dede69c7ed2fe707d3860658b5525e78326b3b796725b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLKIATA%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgoQZJM5AwgkOL6o8TeYv6jNKUqpB3PCTim9SOMFdCHgIgaMc%2FBCnG7FxfvosDknmshFDwO6lyED%2BmfuYN711M1qEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJjA0fV%2BvqlcJr4mircA5C41FP8M%2FIyL%2F0o7w5UkWAe51R9gGPhztGmQgx5lA0kEJB7xUDFsto4iygKMMde8i6%2Byuw9fotE2ncBJvRrYPvyP4jkVVSkON2SGCpAYwinbI9uSUxR%2BjBV8ZhahdGghzf8CUSvKqw5WOMxz4JmfrsoOJi%2BgRYUaUhsRGTnGuTvPhxhctdEgM%2BvHUu%2FCjV6AC%2Bgkxgk1awLMkZ%2F%2FSN2dxi3bDn0eglBB1igXNkqhXZNe0ZJJVmPtWyz7p5ZjYlP%2Fcxc7KdFmtos%2BCPdn0DejYxz6yzlaTwEt6%2BQZAcjF77binElR8t8gDX3vdIpL4YwaIW%2BiNV1P4ctv4rZEHBhLeJ3ECLiJwnMTe3GluJnW3Y%2FPxbHmZOWDZ8sgv7%2BhH1ueU%2BAgRBDoqVmA1Bj6gzTc068WfdpYMCkCW9nERj08%2BKexF0txVJrAQiHEHgkNwgfzJSJGKPxm0BLe%2FbA2IA1VTiebpu%2F4Gtq2XL%2FN%2Fgm7Y4wN699tSmJ4KWclVVwQRK6HdaPOkYyX04rr0wl%2FjSdfgP4%2By%2BoZPa0FsSjURDNBUoIZ9Q%2B2GMobh7xbAeiealFR4zaXXdPWWV6U5py26WhEkqMqSa5p3NXmOs6s1rumVmV0Dx2AS6njRnpTslnMIPnlscGOqUBlCdQId8gRnJy1i5ApI%2Bk7C4QitLk7BKU8goliyXoG4BWh98jF0PZR3d2GYO6AjNBEnxUrCQyMEoHqxpJqkWl1GV%2F2227w4Qjsa%2FV2fHS%2BeHfGil8%2BPyY1l%2BWIxx4YKaQ3C3NRcTHyd86dx1D3L8MGrf1JtKHPFhLo9n8BsuApsZ2RssejKPHivC3dVPH5hcA13q2WUHLPlTw1Sq7foC0%2B9fBZZW0&X-Amz-Signature=a0da58c7e51d3fa0cb17bdd4a88e63db41d9c8b24a8c22916519622fb01396e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLKIATA%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgoQZJM5AwgkOL6o8TeYv6jNKUqpB3PCTim9SOMFdCHgIgaMc%2FBCnG7FxfvosDknmshFDwO6lyED%2BmfuYN711M1qEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJjA0fV%2BvqlcJr4mircA5C41FP8M%2FIyL%2F0o7w5UkWAe51R9gGPhztGmQgx5lA0kEJB7xUDFsto4iygKMMde8i6%2Byuw9fotE2ncBJvRrYPvyP4jkVVSkON2SGCpAYwinbI9uSUxR%2BjBV8ZhahdGghzf8CUSvKqw5WOMxz4JmfrsoOJi%2BgRYUaUhsRGTnGuTvPhxhctdEgM%2BvHUu%2FCjV6AC%2Bgkxgk1awLMkZ%2F%2FSN2dxi3bDn0eglBB1igXNkqhXZNe0ZJJVmPtWyz7p5ZjYlP%2Fcxc7KdFmtos%2BCPdn0DejYxz6yzlaTwEt6%2BQZAcjF77binElR8t8gDX3vdIpL4YwaIW%2BiNV1P4ctv4rZEHBhLeJ3ECLiJwnMTe3GluJnW3Y%2FPxbHmZOWDZ8sgv7%2BhH1ueU%2BAgRBDoqVmA1Bj6gzTc068WfdpYMCkCW9nERj08%2BKexF0txVJrAQiHEHgkNwgfzJSJGKPxm0BLe%2FbA2IA1VTiebpu%2F4Gtq2XL%2FN%2Fgm7Y4wN699tSmJ4KWclVVwQRK6HdaPOkYyX04rr0wl%2FjSdfgP4%2By%2BoZPa0FsSjURDNBUoIZ9Q%2B2GMobh7xbAeiealFR4zaXXdPWWV6U5py26WhEkqMqSa5p3NXmOs6s1rumVmV0Dx2AS6njRnpTslnMIPnlscGOqUBlCdQId8gRnJy1i5ApI%2Bk7C4QitLk7BKU8goliyXoG4BWh98jF0PZR3d2GYO6AjNBEnxUrCQyMEoHqxpJqkWl1GV%2F2227w4Qjsa%2FV2fHS%2BeHfGil8%2BPyY1l%2BWIxx4YKaQ3C3NRcTHyd86dx1D3L8MGrf1JtKHPFhLo9n8BsuApsZ2RssejKPHivC3dVPH5hcA13q2WUHLPlTw1Sq7foC0%2B9fBZZW0&X-Amz-Signature=74392c56ee66c21ac75d51c31e64ab7d817c083aba82a5fcf5eb35f07a6c30eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLKIATA%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgoQZJM5AwgkOL6o8TeYv6jNKUqpB3PCTim9SOMFdCHgIgaMc%2FBCnG7FxfvosDknmshFDwO6lyED%2BmfuYN711M1qEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJjA0fV%2BvqlcJr4mircA5C41FP8M%2FIyL%2F0o7w5UkWAe51R9gGPhztGmQgx5lA0kEJB7xUDFsto4iygKMMde8i6%2Byuw9fotE2ncBJvRrYPvyP4jkVVSkON2SGCpAYwinbI9uSUxR%2BjBV8ZhahdGghzf8CUSvKqw5WOMxz4JmfrsoOJi%2BgRYUaUhsRGTnGuTvPhxhctdEgM%2BvHUu%2FCjV6AC%2Bgkxgk1awLMkZ%2F%2FSN2dxi3bDn0eglBB1igXNkqhXZNe0ZJJVmPtWyz7p5ZjYlP%2Fcxc7KdFmtos%2BCPdn0DejYxz6yzlaTwEt6%2BQZAcjF77binElR8t8gDX3vdIpL4YwaIW%2BiNV1P4ctv4rZEHBhLeJ3ECLiJwnMTe3GluJnW3Y%2FPxbHmZOWDZ8sgv7%2BhH1ueU%2BAgRBDoqVmA1Bj6gzTc068WfdpYMCkCW9nERj08%2BKexF0txVJrAQiHEHgkNwgfzJSJGKPxm0BLe%2FbA2IA1VTiebpu%2F4Gtq2XL%2FN%2Fgm7Y4wN699tSmJ4KWclVVwQRK6HdaPOkYyX04rr0wl%2FjSdfgP4%2By%2BoZPa0FsSjURDNBUoIZ9Q%2B2GMobh7xbAeiealFR4zaXXdPWWV6U5py26WhEkqMqSa5p3NXmOs6s1rumVmV0Dx2AS6njRnpTslnMIPnlscGOqUBlCdQId8gRnJy1i5ApI%2Bk7C4QitLk7BKU8goliyXoG4BWh98jF0PZR3d2GYO6AjNBEnxUrCQyMEoHqxpJqkWl1GV%2F2227w4Qjsa%2FV2fHS%2BeHfGil8%2BPyY1l%2BWIxx4YKaQ3C3NRcTHyd86dx1D3L8MGrf1JtKHPFhLo9n8BsuApsZ2RssejKPHivC3dVPH5hcA13q2WUHLPlTw1Sq7foC0%2B9fBZZW0&X-Amz-Signature=d969e117c0a33e71afa337ff37ef0acd339077cc3438481bf7d5f1593ce3dbc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLKIATA%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgoQZJM5AwgkOL6o8TeYv6jNKUqpB3PCTim9SOMFdCHgIgaMc%2FBCnG7FxfvosDknmshFDwO6lyED%2BmfuYN711M1qEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJjA0fV%2BvqlcJr4mircA5C41FP8M%2FIyL%2F0o7w5UkWAe51R9gGPhztGmQgx5lA0kEJB7xUDFsto4iygKMMde8i6%2Byuw9fotE2ncBJvRrYPvyP4jkVVSkON2SGCpAYwinbI9uSUxR%2BjBV8ZhahdGghzf8CUSvKqw5WOMxz4JmfrsoOJi%2BgRYUaUhsRGTnGuTvPhxhctdEgM%2BvHUu%2FCjV6AC%2Bgkxgk1awLMkZ%2F%2FSN2dxi3bDn0eglBB1igXNkqhXZNe0ZJJVmPtWyz7p5ZjYlP%2Fcxc7KdFmtos%2BCPdn0DejYxz6yzlaTwEt6%2BQZAcjF77binElR8t8gDX3vdIpL4YwaIW%2BiNV1P4ctv4rZEHBhLeJ3ECLiJwnMTe3GluJnW3Y%2FPxbHmZOWDZ8sgv7%2BhH1ueU%2BAgRBDoqVmA1Bj6gzTc068WfdpYMCkCW9nERj08%2BKexF0txVJrAQiHEHgkNwgfzJSJGKPxm0BLe%2FbA2IA1VTiebpu%2F4Gtq2XL%2FN%2Fgm7Y4wN699tSmJ4KWclVVwQRK6HdaPOkYyX04rr0wl%2FjSdfgP4%2By%2BoZPa0FsSjURDNBUoIZ9Q%2B2GMobh7xbAeiealFR4zaXXdPWWV6U5py26WhEkqMqSa5p3NXmOs6s1rumVmV0Dx2AS6njRnpTslnMIPnlscGOqUBlCdQId8gRnJy1i5ApI%2Bk7C4QitLk7BKU8goliyXoG4BWh98jF0PZR3d2GYO6AjNBEnxUrCQyMEoHqxpJqkWl1GV%2F2227w4Qjsa%2FV2fHS%2BeHfGil8%2BPyY1l%2BWIxx4YKaQ3C3NRcTHyd86dx1D3L8MGrf1JtKHPFhLo9n8BsuApsZ2RssejKPHivC3dVPH5hcA13q2WUHLPlTw1Sq7foC0%2B9fBZZW0&X-Amz-Signature=15b871efc0464fe5d8705de539a97e3c18dd565749c037e1eca1f92e9742a50a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLKIATA%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgoQZJM5AwgkOL6o8TeYv6jNKUqpB3PCTim9SOMFdCHgIgaMc%2FBCnG7FxfvosDknmshFDwO6lyED%2BmfuYN711M1qEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJjA0fV%2BvqlcJr4mircA5C41FP8M%2FIyL%2F0o7w5UkWAe51R9gGPhztGmQgx5lA0kEJB7xUDFsto4iygKMMde8i6%2Byuw9fotE2ncBJvRrYPvyP4jkVVSkON2SGCpAYwinbI9uSUxR%2BjBV8ZhahdGghzf8CUSvKqw5WOMxz4JmfrsoOJi%2BgRYUaUhsRGTnGuTvPhxhctdEgM%2BvHUu%2FCjV6AC%2Bgkxgk1awLMkZ%2F%2FSN2dxi3bDn0eglBB1igXNkqhXZNe0ZJJVmPtWyz7p5ZjYlP%2Fcxc7KdFmtos%2BCPdn0DejYxz6yzlaTwEt6%2BQZAcjF77binElR8t8gDX3vdIpL4YwaIW%2BiNV1P4ctv4rZEHBhLeJ3ECLiJwnMTe3GluJnW3Y%2FPxbHmZOWDZ8sgv7%2BhH1ueU%2BAgRBDoqVmA1Bj6gzTc068WfdpYMCkCW9nERj08%2BKexF0txVJrAQiHEHgkNwgfzJSJGKPxm0BLe%2FbA2IA1VTiebpu%2F4Gtq2XL%2FN%2Fgm7Y4wN699tSmJ4KWclVVwQRK6HdaPOkYyX04rr0wl%2FjSdfgP4%2By%2BoZPa0FsSjURDNBUoIZ9Q%2B2GMobh7xbAeiealFR4zaXXdPWWV6U5py26WhEkqMqSa5p3NXmOs6s1rumVmV0Dx2AS6njRnpTslnMIPnlscGOqUBlCdQId8gRnJy1i5ApI%2Bk7C4QitLk7BKU8goliyXoG4BWh98jF0PZR3d2GYO6AjNBEnxUrCQyMEoHqxpJqkWl1GV%2F2227w4Qjsa%2FV2fHS%2BeHfGil8%2BPyY1l%2BWIxx4YKaQ3C3NRcTHyd86dx1D3L8MGrf1JtKHPFhLo9n8BsuApsZ2RssejKPHivC3dVPH5hcA13q2WUHLPlTw1Sq7foC0%2B9fBZZW0&X-Amz-Signature=02bab6f3f4c496b4994789fc06f2a112720e8132e0ae04fb74dd251668090ec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLKIATA%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgoQZJM5AwgkOL6o8TeYv6jNKUqpB3PCTim9SOMFdCHgIgaMc%2FBCnG7FxfvosDknmshFDwO6lyED%2BmfuYN711M1qEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJjA0fV%2BvqlcJr4mircA5C41FP8M%2FIyL%2F0o7w5UkWAe51R9gGPhztGmQgx5lA0kEJB7xUDFsto4iygKMMde8i6%2Byuw9fotE2ncBJvRrYPvyP4jkVVSkON2SGCpAYwinbI9uSUxR%2BjBV8ZhahdGghzf8CUSvKqw5WOMxz4JmfrsoOJi%2BgRYUaUhsRGTnGuTvPhxhctdEgM%2BvHUu%2FCjV6AC%2Bgkxgk1awLMkZ%2F%2FSN2dxi3bDn0eglBB1igXNkqhXZNe0ZJJVmPtWyz7p5ZjYlP%2Fcxc7KdFmtos%2BCPdn0DejYxz6yzlaTwEt6%2BQZAcjF77binElR8t8gDX3vdIpL4YwaIW%2BiNV1P4ctv4rZEHBhLeJ3ECLiJwnMTe3GluJnW3Y%2FPxbHmZOWDZ8sgv7%2BhH1ueU%2BAgRBDoqVmA1Bj6gzTc068WfdpYMCkCW9nERj08%2BKexF0txVJrAQiHEHgkNwgfzJSJGKPxm0BLe%2FbA2IA1VTiebpu%2F4Gtq2XL%2FN%2Fgm7Y4wN699tSmJ4KWclVVwQRK6HdaPOkYyX04rr0wl%2FjSdfgP4%2By%2BoZPa0FsSjURDNBUoIZ9Q%2B2GMobh7xbAeiealFR4zaXXdPWWV6U5py26WhEkqMqSa5p3NXmOs6s1rumVmV0Dx2AS6njRnpTslnMIPnlscGOqUBlCdQId8gRnJy1i5ApI%2Bk7C4QitLk7BKU8goliyXoG4BWh98jF0PZR3d2GYO6AjNBEnxUrCQyMEoHqxpJqkWl1GV%2F2227w4Qjsa%2FV2fHS%2BeHfGil8%2BPyY1l%2BWIxx4YKaQ3C3NRcTHyd86dx1D3L8MGrf1JtKHPFhLo9n8BsuApsZ2RssejKPHivC3dVPH5hcA13q2WUHLPlTw1Sq7foC0%2B9fBZZW0&X-Amz-Signature=600ce81d2c5286c7dfa3396a6ebb36d0d31e5d581a856e13f2d03c913728eee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLKIATA%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgoQZJM5AwgkOL6o8TeYv6jNKUqpB3PCTim9SOMFdCHgIgaMc%2FBCnG7FxfvosDknmshFDwO6lyED%2BmfuYN711M1qEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJjA0fV%2BvqlcJr4mircA5C41FP8M%2FIyL%2F0o7w5UkWAe51R9gGPhztGmQgx5lA0kEJB7xUDFsto4iygKMMde8i6%2Byuw9fotE2ncBJvRrYPvyP4jkVVSkON2SGCpAYwinbI9uSUxR%2BjBV8ZhahdGghzf8CUSvKqw5WOMxz4JmfrsoOJi%2BgRYUaUhsRGTnGuTvPhxhctdEgM%2BvHUu%2FCjV6AC%2Bgkxgk1awLMkZ%2F%2FSN2dxi3bDn0eglBB1igXNkqhXZNe0ZJJVmPtWyz7p5ZjYlP%2Fcxc7KdFmtos%2BCPdn0DejYxz6yzlaTwEt6%2BQZAcjF77binElR8t8gDX3vdIpL4YwaIW%2BiNV1P4ctv4rZEHBhLeJ3ECLiJwnMTe3GluJnW3Y%2FPxbHmZOWDZ8sgv7%2BhH1ueU%2BAgRBDoqVmA1Bj6gzTc068WfdpYMCkCW9nERj08%2BKexF0txVJrAQiHEHgkNwgfzJSJGKPxm0BLe%2FbA2IA1VTiebpu%2F4Gtq2XL%2FN%2Fgm7Y4wN699tSmJ4KWclVVwQRK6HdaPOkYyX04rr0wl%2FjSdfgP4%2By%2BoZPa0FsSjURDNBUoIZ9Q%2B2GMobh7xbAeiealFR4zaXXdPWWV6U5py26WhEkqMqSa5p3NXmOs6s1rumVmV0Dx2AS6njRnpTslnMIPnlscGOqUBlCdQId8gRnJy1i5ApI%2Bk7C4QitLk7BKU8goliyXoG4BWh98jF0PZR3d2GYO6AjNBEnxUrCQyMEoHqxpJqkWl1GV%2F2227w4Qjsa%2FV2fHS%2BeHfGil8%2BPyY1l%2BWIxx4YKaQ3C3NRcTHyd86dx1D3L8MGrf1JtKHPFhLo9n8BsuApsZ2RssejKPHivC3dVPH5hcA13q2WUHLPlTw1Sq7foC0%2B9fBZZW0&X-Amz-Signature=2b0a0cf2beaf7b6c08643b8c0be37705a1d1ae87cb4e07614bac9393226d1f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLKIATA%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCgoQZJM5AwgkOL6o8TeYv6jNKUqpB3PCTim9SOMFdCHgIgaMc%2FBCnG7FxfvosDknmshFDwO6lyED%2BmfuYN711M1qEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJjA0fV%2BvqlcJr4mircA5C41FP8M%2FIyL%2F0o7w5UkWAe51R9gGPhztGmQgx5lA0kEJB7xUDFsto4iygKMMde8i6%2Byuw9fotE2ncBJvRrYPvyP4jkVVSkON2SGCpAYwinbI9uSUxR%2BjBV8ZhahdGghzf8CUSvKqw5WOMxz4JmfrsoOJi%2BgRYUaUhsRGTnGuTvPhxhctdEgM%2BvHUu%2FCjV6AC%2Bgkxgk1awLMkZ%2F%2FSN2dxi3bDn0eglBB1igXNkqhXZNe0ZJJVmPtWyz7p5ZjYlP%2Fcxc7KdFmtos%2BCPdn0DejYxz6yzlaTwEt6%2BQZAcjF77binElR8t8gDX3vdIpL4YwaIW%2BiNV1P4ctv4rZEHBhLeJ3ECLiJwnMTe3GluJnW3Y%2FPxbHmZOWDZ8sgv7%2BhH1ueU%2BAgRBDoqVmA1Bj6gzTc068WfdpYMCkCW9nERj08%2BKexF0txVJrAQiHEHgkNwgfzJSJGKPxm0BLe%2FbA2IA1VTiebpu%2F4Gtq2XL%2FN%2Fgm7Y4wN699tSmJ4KWclVVwQRK6HdaPOkYyX04rr0wl%2FjSdfgP4%2By%2BoZPa0FsSjURDNBUoIZ9Q%2B2GMobh7xbAeiealFR4zaXXdPWWV6U5py26WhEkqMqSa5p3NXmOs6s1rumVmV0Dx2AS6njRnpTslnMIPnlscGOqUBlCdQId8gRnJy1i5ApI%2Bk7C4QitLk7BKU8goliyXoG4BWh98jF0PZR3d2GYO6AjNBEnxUrCQyMEoHqxpJqkWl1GV%2F2227w4Qjsa%2FV2fHS%2BeHfGil8%2BPyY1l%2BWIxx4YKaQ3C3NRcTHyd86dx1D3L8MGrf1JtKHPFhLo9n8BsuApsZ2RssejKPHivC3dVPH5hcA13q2WUHLPlTw1Sq7foC0%2B9fBZZW0&X-Amz-Signature=a382dc4a30b9a0ffda4f22b9af6440260f8db710b67d7c4def3d3f6348684318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
