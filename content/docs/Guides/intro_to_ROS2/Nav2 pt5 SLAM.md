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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAFQPL2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RonII0y%2Bg54tqMlIYKt5OarhcyKxLKe5ce9oGevO5QIgL7jAQS%2Bw30KXT85POXHfwhOgyD6mUBBjh%2BrGrv6ykssqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPwDOHzfCZGSbhojircA0KLwwSE2B4FyqJhXkWp54bJfw2H%2B%2F5u20l34qZACiMDhWdi%2F3ZUgZdwq%2Bgkh6kcRpxvvE9Xr7hgnIvOvh3glhYVOTcp%2FI91f9%2BUVCpDuZQarRaKscUabhuPtnCMYqD7qohCKK4MKfSFKh3Q%2BV4o6MF0dI8hHAGi2UO5gIMunKxKE8AAJGCX9IIQPmQA8p4rU2%2BomG%2BrEtT8a9feq4lrRsn95ok3c1XemkzE19Q58aU1QTf9ugINfL765X9kgeqvk2LcfZVQHTi6fbrMKpnbnyo8%2FVGUQ2wrE6DBFJV9OU3gPCbzV9rd9%2FNWU9hO81MR16rutd3dkJHrLa4OSPtH3s%2Fo1XeqSNiYYz8E%2Fah5LjOTSv7UFyvomYVkMY0ywp%2FxBwLvNw31CezGBuoEXQu1MEYM5xnaRmADIOJEGA1DIStQhRrtTMCwLG1HEUghGIP3LFOuoHapNKkHeRMJxkZ09SjVKRW%2Bs5u1bWo7nXrYpibxRd34CvYWScbHist%2Fyy0lfRQkWrVMsSOEkMnqTNoEzL0GKOk8uhAOFnsXecUjizvmgK139SmaTHx40uhH0BemLwogRTUKSslSm%2BVRAjOO5fCqS3RbrcXNy%2BXjQkWd50R1ulW2Jg%2FcNw%2B%2BCRclMIy%2F4sQGOqUBCoJYJcSDI9r%2Bjbwrpt4%2BikLpd3QkFH4%2FkaJu9RU0YX46Lh0eUQ7xSsyjwY8vaoAWLLXihjiLnPAI8BIg4axWsMwTQ0lctRui7YO4APRemADm%2FFZAKR2FYqvwkHVYIhBtcq%2Fyhc8VOf%2FoxvI4t0kcQjrO1bc9tDi%2Bai4zSNV8J2oJgcoIcu2ZXpuWXssFoimw3izR5nbeInkg6DA%2FjZROxOS%2FWyQe&X-Amz-Signature=bdd2e178c3326a3968af5e52d0c39bf38af928ecbaa16f4a124466f222811485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAFQPL2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RonII0y%2Bg54tqMlIYKt5OarhcyKxLKe5ce9oGevO5QIgL7jAQS%2Bw30KXT85POXHfwhOgyD6mUBBjh%2BrGrv6ykssqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPwDOHzfCZGSbhojircA0KLwwSE2B4FyqJhXkWp54bJfw2H%2B%2F5u20l34qZACiMDhWdi%2F3ZUgZdwq%2Bgkh6kcRpxvvE9Xr7hgnIvOvh3glhYVOTcp%2FI91f9%2BUVCpDuZQarRaKscUabhuPtnCMYqD7qohCKK4MKfSFKh3Q%2BV4o6MF0dI8hHAGi2UO5gIMunKxKE8AAJGCX9IIQPmQA8p4rU2%2BomG%2BrEtT8a9feq4lrRsn95ok3c1XemkzE19Q58aU1QTf9ugINfL765X9kgeqvk2LcfZVQHTi6fbrMKpnbnyo8%2FVGUQ2wrE6DBFJV9OU3gPCbzV9rd9%2FNWU9hO81MR16rutd3dkJHrLa4OSPtH3s%2Fo1XeqSNiYYz8E%2Fah5LjOTSv7UFyvomYVkMY0ywp%2FxBwLvNw31CezGBuoEXQu1MEYM5xnaRmADIOJEGA1DIStQhRrtTMCwLG1HEUghGIP3LFOuoHapNKkHeRMJxkZ09SjVKRW%2Bs5u1bWo7nXrYpibxRd34CvYWScbHist%2Fyy0lfRQkWrVMsSOEkMnqTNoEzL0GKOk8uhAOFnsXecUjizvmgK139SmaTHx40uhH0BemLwogRTUKSslSm%2BVRAjOO5fCqS3RbrcXNy%2BXjQkWd50R1ulW2Jg%2FcNw%2B%2BCRclMIy%2F4sQGOqUBCoJYJcSDI9r%2Bjbwrpt4%2BikLpd3QkFH4%2FkaJu9RU0YX46Lh0eUQ7xSsyjwY8vaoAWLLXihjiLnPAI8BIg4axWsMwTQ0lctRui7YO4APRemADm%2FFZAKR2FYqvwkHVYIhBtcq%2Fyhc8VOf%2FoxvI4t0kcQjrO1bc9tDi%2Bai4zSNV8J2oJgcoIcu2ZXpuWXssFoimw3izR5nbeInkg6DA%2FjZROxOS%2FWyQe&X-Amz-Signature=01f40434cd2f3df02404d82497300f2c2d0cd1ac5ea431770b0a7dced721624c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAFQPL2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RonII0y%2Bg54tqMlIYKt5OarhcyKxLKe5ce9oGevO5QIgL7jAQS%2Bw30KXT85POXHfwhOgyD6mUBBjh%2BrGrv6ykssqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPwDOHzfCZGSbhojircA0KLwwSE2B4FyqJhXkWp54bJfw2H%2B%2F5u20l34qZACiMDhWdi%2F3ZUgZdwq%2Bgkh6kcRpxvvE9Xr7hgnIvOvh3glhYVOTcp%2FI91f9%2BUVCpDuZQarRaKscUabhuPtnCMYqD7qohCKK4MKfSFKh3Q%2BV4o6MF0dI8hHAGi2UO5gIMunKxKE8AAJGCX9IIQPmQA8p4rU2%2BomG%2BrEtT8a9feq4lrRsn95ok3c1XemkzE19Q58aU1QTf9ugINfL765X9kgeqvk2LcfZVQHTi6fbrMKpnbnyo8%2FVGUQ2wrE6DBFJV9OU3gPCbzV9rd9%2FNWU9hO81MR16rutd3dkJHrLa4OSPtH3s%2Fo1XeqSNiYYz8E%2Fah5LjOTSv7UFyvomYVkMY0ywp%2FxBwLvNw31CezGBuoEXQu1MEYM5xnaRmADIOJEGA1DIStQhRrtTMCwLG1HEUghGIP3LFOuoHapNKkHeRMJxkZ09SjVKRW%2Bs5u1bWo7nXrYpibxRd34CvYWScbHist%2Fyy0lfRQkWrVMsSOEkMnqTNoEzL0GKOk8uhAOFnsXecUjizvmgK139SmaTHx40uhH0BemLwogRTUKSslSm%2BVRAjOO5fCqS3RbrcXNy%2BXjQkWd50R1ulW2Jg%2FcNw%2B%2BCRclMIy%2F4sQGOqUBCoJYJcSDI9r%2Bjbwrpt4%2BikLpd3QkFH4%2FkaJu9RU0YX46Lh0eUQ7xSsyjwY8vaoAWLLXihjiLnPAI8BIg4axWsMwTQ0lctRui7YO4APRemADm%2FFZAKR2FYqvwkHVYIhBtcq%2Fyhc8VOf%2FoxvI4t0kcQjrO1bc9tDi%2Bai4zSNV8J2oJgcoIcu2ZXpuWXssFoimw3izR5nbeInkg6DA%2FjZROxOS%2FWyQe&X-Amz-Signature=542be5e89e1f7b4a33d90249b107ada5c1279001b5df43dc15f2114ad1c663b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAFQPL2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RonII0y%2Bg54tqMlIYKt5OarhcyKxLKe5ce9oGevO5QIgL7jAQS%2Bw30KXT85POXHfwhOgyD6mUBBjh%2BrGrv6ykssqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPwDOHzfCZGSbhojircA0KLwwSE2B4FyqJhXkWp54bJfw2H%2B%2F5u20l34qZACiMDhWdi%2F3ZUgZdwq%2Bgkh6kcRpxvvE9Xr7hgnIvOvh3glhYVOTcp%2FI91f9%2BUVCpDuZQarRaKscUabhuPtnCMYqD7qohCKK4MKfSFKh3Q%2BV4o6MF0dI8hHAGi2UO5gIMunKxKE8AAJGCX9IIQPmQA8p4rU2%2BomG%2BrEtT8a9feq4lrRsn95ok3c1XemkzE19Q58aU1QTf9ugINfL765X9kgeqvk2LcfZVQHTi6fbrMKpnbnyo8%2FVGUQ2wrE6DBFJV9OU3gPCbzV9rd9%2FNWU9hO81MR16rutd3dkJHrLa4OSPtH3s%2Fo1XeqSNiYYz8E%2Fah5LjOTSv7UFyvomYVkMY0ywp%2FxBwLvNw31CezGBuoEXQu1MEYM5xnaRmADIOJEGA1DIStQhRrtTMCwLG1HEUghGIP3LFOuoHapNKkHeRMJxkZ09SjVKRW%2Bs5u1bWo7nXrYpibxRd34CvYWScbHist%2Fyy0lfRQkWrVMsSOEkMnqTNoEzL0GKOk8uhAOFnsXecUjizvmgK139SmaTHx40uhH0BemLwogRTUKSslSm%2BVRAjOO5fCqS3RbrcXNy%2BXjQkWd50R1ulW2Jg%2FcNw%2B%2BCRclMIy%2F4sQGOqUBCoJYJcSDI9r%2Bjbwrpt4%2BikLpd3QkFH4%2FkaJu9RU0YX46Lh0eUQ7xSsyjwY8vaoAWLLXihjiLnPAI8BIg4axWsMwTQ0lctRui7YO4APRemADm%2FFZAKR2FYqvwkHVYIhBtcq%2Fyhc8VOf%2FoxvI4t0kcQjrO1bc9tDi%2Bai4zSNV8J2oJgcoIcu2ZXpuWXssFoimw3izR5nbeInkg6DA%2FjZROxOS%2FWyQe&X-Amz-Signature=f393d772ff9e7af8eeac3967f6ea90dd85fc6f96c0fb92f5adcc35fab7c6aabf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAFQPL2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RonII0y%2Bg54tqMlIYKt5OarhcyKxLKe5ce9oGevO5QIgL7jAQS%2Bw30KXT85POXHfwhOgyD6mUBBjh%2BrGrv6ykssqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPwDOHzfCZGSbhojircA0KLwwSE2B4FyqJhXkWp54bJfw2H%2B%2F5u20l34qZACiMDhWdi%2F3ZUgZdwq%2Bgkh6kcRpxvvE9Xr7hgnIvOvh3glhYVOTcp%2FI91f9%2BUVCpDuZQarRaKscUabhuPtnCMYqD7qohCKK4MKfSFKh3Q%2BV4o6MF0dI8hHAGi2UO5gIMunKxKE8AAJGCX9IIQPmQA8p4rU2%2BomG%2BrEtT8a9feq4lrRsn95ok3c1XemkzE19Q58aU1QTf9ugINfL765X9kgeqvk2LcfZVQHTi6fbrMKpnbnyo8%2FVGUQ2wrE6DBFJV9OU3gPCbzV9rd9%2FNWU9hO81MR16rutd3dkJHrLa4OSPtH3s%2Fo1XeqSNiYYz8E%2Fah5LjOTSv7UFyvomYVkMY0ywp%2FxBwLvNw31CezGBuoEXQu1MEYM5xnaRmADIOJEGA1DIStQhRrtTMCwLG1HEUghGIP3LFOuoHapNKkHeRMJxkZ09SjVKRW%2Bs5u1bWo7nXrYpibxRd34CvYWScbHist%2Fyy0lfRQkWrVMsSOEkMnqTNoEzL0GKOk8uhAOFnsXecUjizvmgK139SmaTHx40uhH0BemLwogRTUKSslSm%2BVRAjOO5fCqS3RbrcXNy%2BXjQkWd50R1ulW2Jg%2FcNw%2B%2BCRclMIy%2F4sQGOqUBCoJYJcSDI9r%2Bjbwrpt4%2BikLpd3QkFH4%2FkaJu9RU0YX46Lh0eUQ7xSsyjwY8vaoAWLLXihjiLnPAI8BIg4axWsMwTQ0lctRui7YO4APRemADm%2FFZAKR2FYqvwkHVYIhBtcq%2Fyhc8VOf%2FoxvI4t0kcQjrO1bc9tDi%2Bai4zSNV8J2oJgcoIcu2ZXpuWXssFoimw3izR5nbeInkg6DA%2FjZROxOS%2FWyQe&X-Amz-Signature=15287c2277eae853bb61a45d88a60fde395063ad109cbd4cef94777d9564138a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAFQPL2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RonII0y%2Bg54tqMlIYKt5OarhcyKxLKe5ce9oGevO5QIgL7jAQS%2Bw30KXT85POXHfwhOgyD6mUBBjh%2BrGrv6ykssqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPwDOHzfCZGSbhojircA0KLwwSE2B4FyqJhXkWp54bJfw2H%2B%2F5u20l34qZACiMDhWdi%2F3ZUgZdwq%2Bgkh6kcRpxvvE9Xr7hgnIvOvh3glhYVOTcp%2FI91f9%2BUVCpDuZQarRaKscUabhuPtnCMYqD7qohCKK4MKfSFKh3Q%2BV4o6MF0dI8hHAGi2UO5gIMunKxKE8AAJGCX9IIQPmQA8p4rU2%2BomG%2BrEtT8a9feq4lrRsn95ok3c1XemkzE19Q58aU1QTf9ugINfL765X9kgeqvk2LcfZVQHTi6fbrMKpnbnyo8%2FVGUQ2wrE6DBFJV9OU3gPCbzV9rd9%2FNWU9hO81MR16rutd3dkJHrLa4OSPtH3s%2Fo1XeqSNiYYz8E%2Fah5LjOTSv7UFyvomYVkMY0ywp%2FxBwLvNw31CezGBuoEXQu1MEYM5xnaRmADIOJEGA1DIStQhRrtTMCwLG1HEUghGIP3LFOuoHapNKkHeRMJxkZ09SjVKRW%2Bs5u1bWo7nXrYpibxRd34CvYWScbHist%2Fyy0lfRQkWrVMsSOEkMnqTNoEzL0GKOk8uhAOFnsXecUjizvmgK139SmaTHx40uhH0BemLwogRTUKSslSm%2BVRAjOO5fCqS3RbrcXNy%2BXjQkWd50R1ulW2Jg%2FcNw%2B%2BCRclMIy%2F4sQGOqUBCoJYJcSDI9r%2Bjbwrpt4%2BikLpd3QkFH4%2FkaJu9RU0YX46Lh0eUQ7xSsyjwY8vaoAWLLXihjiLnPAI8BIg4axWsMwTQ0lctRui7YO4APRemADm%2FFZAKR2FYqvwkHVYIhBtcq%2Fyhc8VOf%2FoxvI4t0kcQjrO1bc9tDi%2Bai4zSNV8J2oJgcoIcu2ZXpuWXssFoimw3izR5nbeInkg6DA%2FjZROxOS%2FWyQe&X-Amz-Signature=92a62718d04563d2442f92c25df5d91b04214cb26fc8c8a7352940dc5c00ed32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAFQPL2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RonII0y%2Bg54tqMlIYKt5OarhcyKxLKe5ce9oGevO5QIgL7jAQS%2Bw30KXT85POXHfwhOgyD6mUBBjh%2BrGrv6ykssqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPwDOHzfCZGSbhojircA0KLwwSE2B4FyqJhXkWp54bJfw2H%2B%2F5u20l34qZACiMDhWdi%2F3ZUgZdwq%2Bgkh6kcRpxvvE9Xr7hgnIvOvh3glhYVOTcp%2FI91f9%2BUVCpDuZQarRaKscUabhuPtnCMYqD7qohCKK4MKfSFKh3Q%2BV4o6MF0dI8hHAGi2UO5gIMunKxKE8AAJGCX9IIQPmQA8p4rU2%2BomG%2BrEtT8a9feq4lrRsn95ok3c1XemkzE19Q58aU1QTf9ugINfL765X9kgeqvk2LcfZVQHTi6fbrMKpnbnyo8%2FVGUQ2wrE6DBFJV9OU3gPCbzV9rd9%2FNWU9hO81MR16rutd3dkJHrLa4OSPtH3s%2Fo1XeqSNiYYz8E%2Fah5LjOTSv7UFyvomYVkMY0ywp%2FxBwLvNw31CezGBuoEXQu1MEYM5xnaRmADIOJEGA1DIStQhRrtTMCwLG1HEUghGIP3LFOuoHapNKkHeRMJxkZ09SjVKRW%2Bs5u1bWo7nXrYpibxRd34CvYWScbHist%2Fyy0lfRQkWrVMsSOEkMnqTNoEzL0GKOk8uhAOFnsXecUjizvmgK139SmaTHx40uhH0BemLwogRTUKSslSm%2BVRAjOO5fCqS3RbrcXNy%2BXjQkWd50R1ulW2Jg%2FcNw%2B%2BCRclMIy%2F4sQGOqUBCoJYJcSDI9r%2Bjbwrpt4%2BikLpd3QkFH4%2FkaJu9RU0YX46Lh0eUQ7xSsyjwY8vaoAWLLXihjiLnPAI8BIg4axWsMwTQ0lctRui7YO4APRemADm%2FFZAKR2FYqvwkHVYIhBtcq%2Fyhc8VOf%2FoxvI4t0kcQjrO1bc9tDi%2Bai4zSNV8J2oJgcoIcu2ZXpuWXssFoimw3izR5nbeInkg6DA%2FjZROxOS%2FWyQe&X-Amz-Signature=3cc25e73959644fafe8ad0a5d8b693e0ad658e1921624c5eeb5c9e5b1e6e3b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAFQPL2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RonII0y%2Bg54tqMlIYKt5OarhcyKxLKe5ce9oGevO5QIgL7jAQS%2Bw30KXT85POXHfwhOgyD6mUBBjh%2BrGrv6ykssqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPwDOHzfCZGSbhojircA0KLwwSE2B4FyqJhXkWp54bJfw2H%2B%2F5u20l34qZACiMDhWdi%2F3ZUgZdwq%2Bgkh6kcRpxvvE9Xr7hgnIvOvh3glhYVOTcp%2FI91f9%2BUVCpDuZQarRaKscUabhuPtnCMYqD7qohCKK4MKfSFKh3Q%2BV4o6MF0dI8hHAGi2UO5gIMunKxKE8AAJGCX9IIQPmQA8p4rU2%2BomG%2BrEtT8a9feq4lrRsn95ok3c1XemkzE19Q58aU1QTf9ugINfL765X9kgeqvk2LcfZVQHTi6fbrMKpnbnyo8%2FVGUQ2wrE6DBFJV9OU3gPCbzV9rd9%2FNWU9hO81MR16rutd3dkJHrLa4OSPtH3s%2Fo1XeqSNiYYz8E%2Fah5LjOTSv7UFyvomYVkMY0ywp%2FxBwLvNw31CezGBuoEXQu1MEYM5xnaRmADIOJEGA1DIStQhRrtTMCwLG1HEUghGIP3LFOuoHapNKkHeRMJxkZ09SjVKRW%2Bs5u1bWo7nXrYpibxRd34CvYWScbHist%2Fyy0lfRQkWrVMsSOEkMnqTNoEzL0GKOk8uhAOFnsXecUjizvmgK139SmaTHx40uhH0BemLwogRTUKSslSm%2BVRAjOO5fCqS3RbrcXNy%2BXjQkWd50R1ulW2Jg%2FcNw%2B%2BCRclMIy%2F4sQGOqUBCoJYJcSDI9r%2Bjbwrpt4%2BikLpd3QkFH4%2FkaJu9RU0YX46Lh0eUQ7xSsyjwY8vaoAWLLXihjiLnPAI8BIg4axWsMwTQ0lctRui7YO4APRemADm%2FFZAKR2FYqvwkHVYIhBtcq%2Fyhc8VOf%2FoxvI4t0kcQjrO1bc9tDi%2Bai4zSNV8J2oJgcoIcu2ZXpuWXssFoimw3izR5nbeInkg6DA%2FjZROxOS%2FWyQe&X-Amz-Signature=0a9ab0c837d3bff0a1998701ee8060976ea7853774922e9897ccdb36cd544852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAFQPL2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RonII0y%2Bg54tqMlIYKt5OarhcyKxLKe5ce9oGevO5QIgL7jAQS%2Bw30KXT85POXHfwhOgyD6mUBBjh%2BrGrv6ykssqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPwDOHzfCZGSbhojircA0KLwwSE2B4FyqJhXkWp54bJfw2H%2B%2F5u20l34qZACiMDhWdi%2F3ZUgZdwq%2Bgkh6kcRpxvvE9Xr7hgnIvOvh3glhYVOTcp%2FI91f9%2BUVCpDuZQarRaKscUabhuPtnCMYqD7qohCKK4MKfSFKh3Q%2BV4o6MF0dI8hHAGi2UO5gIMunKxKE8AAJGCX9IIQPmQA8p4rU2%2BomG%2BrEtT8a9feq4lrRsn95ok3c1XemkzE19Q58aU1QTf9ugINfL765X9kgeqvk2LcfZVQHTi6fbrMKpnbnyo8%2FVGUQ2wrE6DBFJV9OU3gPCbzV9rd9%2FNWU9hO81MR16rutd3dkJHrLa4OSPtH3s%2Fo1XeqSNiYYz8E%2Fah5LjOTSv7UFyvomYVkMY0ywp%2FxBwLvNw31CezGBuoEXQu1MEYM5xnaRmADIOJEGA1DIStQhRrtTMCwLG1HEUghGIP3LFOuoHapNKkHeRMJxkZ09SjVKRW%2Bs5u1bWo7nXrYpibxRd34CvYWScbHist%2Fyy0lfRQkWrVMsSOEkMnqTNoEzL0GKOk8uhAOFnsXecUjizvmgK139SmaTHx40uhH0BemLwogRTUKSslSm%2BVRAjOO5fCqS3RbrcXNy%2BXjQkWd50R1ulW2Jg%2FcNw%2B%2BCRclMIy%2F4sQGOqUBCoJYJcSDI9r%2Bjbwrpt4%2BikLpd3QkFH4%2FkaJu9RU0YX46Lh0eUQ7xSsyjwY8vaoAWLLXihjiLnPAI8BIg4axWsMwTQ0lctRui7YO4APRemADm%2FFZAKR2FYqvwkHVYIhBtcq%2Fyhc8VOf%2FoxvI4t0kcQjrO1bc9tDi%2Bai4zSNV8J2oJgcoIcu2ZXpuWXssFoimw3izR5nbeInkg6DA%2FjZROxOS%2FWyQe&X-Amz-Signature=1d6abb955137a2e257b36d9b1fccd3cd632a60d3aa5cbe2e4acaeea4c4dc77e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAFQPL2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RonII0y%2Bg54tqMlIYKt5OarhcyKxLKe5ce9oGevO5QIgL7jAQS%2Bw30KXT85POXHfwhOgyD6mUBBjh%2BrGrv6ykssqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPwDOHzfCZGSbhojircA0KLwwSE2B4FyqJhXkWp54bJfw2H%2B%2F5u20l34qZACiMDhWdi%2F3ZUgZdwq%2Bgkh6kcRpxvvE9Xr7hgnIvOvh3glhYVOTcp%2FI91f9%2BUVCpDuZQarRaKscUabhuPtnCMYqD7qohCKK4MKfSFKh3Q%2BV4o6MF0dI8hHAGi2UO5gIMunKxKE8AAJGCX9IIQPmQA8p4rU2%2BomG%2BrEtT8a9feq4lrRsn95ok3c1XemkzE19Q58aU1QTf9ugINfL765X9kgeqvk2LcfZVQHTi6fbrMKpnbnyo8%2FVGUQ2wrE6DBFJV9OU3gPCbzV9rd9%2FNWU9hO81MR16rutd3dkJHrLa4OSPtH3s%2Fo1XeqSNiYYz8E%2Fah5LjOTSv7UFyvomYVkMY0ywp%2FxBwLvNw31CezGBuoEXQu1MEYM5xnaRmADIOJEGA1DIStQhRrtTMCwLG1HEUghGIP3LFOuoHapNKkHeRMJxkZ09SjVKRW%2Bs5u1bWo7nXrYpibxRd34CvYWScbHist%2Fyy0lfRQkWrVMsSOEkMnqTNoEzL0GKOk8uhAOFnsXecUjizvmgK139SmaTHx40uhH0BemLwogRTUKSslSm%2BVRAjOO5fCqS3RbrcXNy%2BXjQkWd50R1ulW2Jg%2FcNw%2B%2BCRclMIy%2F4sQGOqUBCoJYJcSDI9r%2Bjbwrpt4%2BikLpd3QkFH4%2FkaJu9RU0YX46Lh0eUQ7xSsyjwY8vaoAWLLXihjiLnPAI8BIg4axWsMwTQ0lctRui7YO4APRemADm%2FFZAKR2FYqvwkHVYIhBtcq%2Fyhc8VOf%2FoxvI4t0kcQjrO1bc9tDi%2Bai4zSNV8J2oJgcoIcu2ZXpuWXssFoimw3izR5nbeInkg6DA%2FjZROxOS%2FWyQe&X-Amz-Signature=ef6279be4ed97947450dec83920583c2279b984d5cb01608bac6ec32b6852946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAFQPL2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RonII0y%2Bg54tqMlIYKt5OarhcyKxLKe5ce9oGevO5QIgL7jAQS%2Bw30KXT85POXHfwhOgyD6mUBBjh%2BrGrv6ykssqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPwDOHzfCZGSbhojircA0KLwwSE2B4FyqJhXkWp54bJfw2H%2B%2F5u20l34qZACiMDhWdi%2F3ZUgZdwq%2Bgkh6kcRpxvvE9Xr7hgnIvOvh3glhYVOTcp%2FI91f9%2BUVCpDuZQarRaKscUabhuPtnCMYqD7qohCKK4MKfSFKh3Q%2BV4o6MF0dI8hHAGi2UO5gIMunKxKE8AAJGCX9IIQPmQA8p4rU2%2BomG%2BrEtT8a9feq4lrRsn95ok3c1XemkzE19Q58aU1QTf9ugINfL765X9kgeqvk2LcfZVQHTi6fbrMKpnbnyo8%2FVGUQ2wrE6DBFJV9OU3gPCbzV9rd9%2FNWU9hO81MR16rutd3dkJHrLa4OSPtH3s%2Fo1XeqSNiYYz8E%2Fah5LjOTSv7UFyvomYVkMY0ywp%2FxBwLvNw31CezGBuoEXQu1MEYM5xnaRmADIOJEGA1DIStQhRrtTMCwLG1HEUghGIP3LFOuoHapNKkHeRMJxkZ09SjVKRW%2Bs5u1bWo7nXrYpibxRd34CvYWScbHist%2Fyy0lfRQkWrVMsSOEkMnqTNoEzL0GKOk8uhAOFnsXecUjizvmgK139SmaTHx40uhH0BemLwogRTUKSslSm%2BVRAjOO5fCqS3RbrcXNy%2BXjQkWd50R1ulW2Jg%2FcNw%2B%2BCRclMIy%2F4sQGOqUBCoJYJcSDI9r%2Bjbwrpt4%2BikLpd3QkFH4%2FkaJu9RU0YX46Lh0eUQ7xSsyjwY8vaoAWLLXihjiLnPAI8BIg4axWsMwTQ0lctRui7YO4APRemADm%2FFZAKR2FYqvwkHVYIhBtcq%2Fyhc8VOf%2FoxvI4t0kcQjrO1bc9tDi%2Bai4zSNV8J2oJgcoIcu2ZXpuWXssFoimw3izR5nbeInkg6DA%2FjZROxOS%2FWyQe&X-Amz-Signature=8f82dead5e7eeef6a5d8c1489d2196e92d85f1ed2237cc9d0f685951df16a17e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAFQPL2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RonII0y%2Bg54tqMlIYKt5OarhcyKxLKe5ce9oGevO5QIgL7jAQS%2Bw30KXT85POXHfwhOgyD6mUBBjh%2BrGrv6ykssqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPwDOHzfCZGSbhojircA0KLwwSE2B4FyqJhXkWp54bJfw2H%2B%2F5u20l34qZACiMDhWdi%2F3ZUgZdwq%2Bgkh6kcRpxvvE9Xr7hgnIvOvh3glhYVOTcp%2FI91f9%2BUVCpDuZQarRaKscUabhuPtnCMYqD7qohCKK4MKfSFKh3Q%2BV4o6MF0dI8hHAGi2UO5gIMunKxKE8AAJGCX9IIQPmQA8p4rU2%2BomG%2BrEtT8a9feq4lrRsn95ok3c1XemkzE19Q58aU1QTf9ugINfL765X9kgeqvk2LcfZVQHTi6fbrMKpnbnyo8%2FVGUQ2wrE6DBFJV9OU3gPCbzV9rd9%2FNWU9hO81MR16rutd3dkJHrLa4OSPtH3s%2Fo1XeqSNiYYz8E%2Fah5LjOTSv7UFyvomYVkMY0ywp%2FxBwLvNw31CezGBuoEXQu1MEYM5xnaRmADIOJEGA1DIStQhRrtTMCwLG1HEUghGIP3LFOuoHapNKkHeRMJxkZ09SjVKRW%2Bs5u1bWo7nXrYpibxRd34CvYWScbHist%2Fyy0lfRQkWrVMsSOEkMnqTNoEzL0GKOk8uhAOFnsXecUjizvmgK139SmaTHx40uhH0BemLwogRTUKSslSm%2BVRAjOO5fCqS3RbrcXNy%2BXjQkWd50R1ulW2Jg%2FcNw%2B%2BCRclMIy%2F4sQGOqUBCoJYJcSDI9r%2Bjbwrpt4%2BikLpd3QkFH4%2FkaJu9RU0YX46Lh0eUQ7xSsyjwY8vaoAWLLXihjiLnPAI8BIg4axWsMwTQ0lctRui7YO4APRemADm%2FFZAKR2FYqvwkHVYIhBtcq%2Fyhc8VOf%2FoxvI4t0kcQjrO1bc9tDi%2Bai4zSNV8J2oJgcoIcu2ZXpuWXssFoimw3izR5nbeInkg6DA%2FjZROxOS%2FWyQe&X-Amz-Signature=f8d9bae71e10e650973ff15f5ffb2268d5e70794a3a4a48e05725af74f763674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAFQPL2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RonII0y%2Bg54tqMlIYKt5OarhcyKxLKe5ce9oGevO5QIgL7jAQS%2Bw30KXT85POXHfwhOgyD6mUBBjh%2BrGrv6ykssqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPwDOHzfCZGSbhojircA0KLwwSE2B4FyqJhXkWp54bJfw2H%2B%2F5u20l34qZACiMDhWdi%2F3ZUgZdwq%2Bgkh6kcRpxvvE9Xr7hgnIvOvh3glhYVOTcp%2FI91f9%2BUVCpDuZQarRaKscUabhuPtnCMYqD7qohCKK4MKfSFKh3Q%2BV4o6MF0dI8hHAGi2UO5gIMunKxKE8AAJGCX9IIQPmQA8p4rU2%2BomG%2BrEtT8a9feq4lrRsn95ok3c1XemkzE19Q58aU1QTf9ugINfL765X9kgeqvk2LcfZVQHTi6fbrMKpnbnyo8%2FVGUQ2wrE6DBFJV9OU3gPCbzV9rd9%2FNWU9hO81MR16rutd3dkJHrLa4OSPtH3s%2Fo1XeqSNiYYz8E%2Fah5LjOTSv7UFyvomYVkMY0ywp%2FxBwLvNw31CezGBuoEXQu1MEYM5xnaRmADIOJEGA1DIStQhRrtTMCwLG1HEUghGIP3LFOuoHapNKkHeRMJxkZ09SjVKRW%2Bs5u1bWo7nXrYpibxRd34CvYWScbHist%2Fyy0lfRQkWrVMsSOEkMnqTNoEzL0GKOk8uhAOFnsXecUjizvmgK139SmaTHx40uhH0BemLwogRTUKSslSm%2BVRAjOO5fCqS3RbrcXNy%2BXjQkWd50R1ulW2Jg%2FcNw%2B%2BCRclMIy%2F4sQGOqUBCoJYJcSDI9r%2Bjbwrpt4%2BikLpd3QkFH4%2FkaJu9RU0YX46Lh0eUQ7xSsyjwY8vaoAWLLXihjiLnPAI8BIg4axWsMwTQ0lctRui7YO4APRemADm%2FFZAKR2FYqvwkHVYIhBtcq%2Fyhc8VOf%2FoxvI4t0kcQjrO1bc9tDi%2Bai4zSNV8J2oJgcoIcu2ZXpuWXssFoimw3izR5nbeInkg6DA%2FjZROxOS%2FWyQe&X-Amz-Signature=3714ae2ebcf170aa41653e082e318e64ab52ec1833f05110c274f05e2dd89964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAFQPL2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RonII0y%2Bg54tqMlIYKt5OarhcyKxLKe5ce9oGevO5QIgL7jAQS%2Bw30KXT85POXHfwhOgyD6mUBBjh%2BrGrv6ykssqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPwDOHzfCZGSbhojircA0KLwwSE2B4FyqJhXkWp54bJfw2H%2B%2F5u20l34qZACiMDhWdi%2F3ZUgZdwq%2Bgkh6kcRpxvvE9Xr7hgnIvOvh3glhYVOTcp%2FI91f9%2BUVCpDuZQarRaKscUabhuPtnCMYqD7qohCKK4MKfSFKh3Q%2BV4o6MF0dI8hHAGi2UO5gIMunKxKE8AAJGCX9IIQPmQA8p4rU2%2BomG%2BrEtT8a9feq4lrRsn95ok3c1XemkzE19Q58aU1QTf9ugINfL765X9kgeqvk2LcfZVQHTi6fbrMKpnbnyo8%2FVGUQ2wrE6DBFJV9OU3gPCbzV9rd9%2FNWU9hO81MR16rutd3dkJHrLa4OSPtH3s%2Fo1XeqSNiYYz8E%2Fah5LjOTSv7UFyvomYVkMY0ywp%2FxBwLvNw31CezGBuoEXQu1MEYM5xnaRmADIOJEGA1DIStQhRrtTMCwLG1HEUghGIP3LFOuoHapNKkHeRMJxkZ09SjVKRW%2Bs5u1bWo7nXrYpibxRd34CvYWScbHist%2Fyy0lfRQkWrVMsSOEkMnqTNoEzL0GKOk8uhAOFnsXecUjizvmgK139SmaTHx40uhH0BemLwogRTUKSslSm%2BVRAjOO5fCqS3RbrcXNy%2BXjQkWd50R1ulW2Jg%2FcNw%2B%2BCRclMIy%2F4sQGOqUBCoJYJcSDI9r%2Bjbwrpt4%2BikLpd3QkFH4%2FkaJu9RU0YX46Lh0eUQ7xSsyjwY8vaoAWLLXihjiLnPAI8BIg4axWsMwTQ0lctRui7YO4APRemADm%2FFZAKR2FYqvwkHVYIhBtcq%2Fyhc8VOf%2FoxvI4t0kcQjrO1bc9tDi%2Bai4zSNV8J2oJgcoIcu2ZXpuWXssFoimw3izR5nbeInkg6DA%2FjZROxOS%2FWyQe&X-Amz-Signature=d184bc3462105aa6a4dc947e6f11ed15276a6e853a3eea7e9c94cbdf410978e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
