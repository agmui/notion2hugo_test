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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQOMRZW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIA33tohdfFHCDsaDalqdy9Dyyo4CdKvPila9Vfs0JxEnAiAzGCOHNioWaqvica7cQbeAVdJWovEp4Rw19SlxWrC7nir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMeGcisdWPbkvPX206KtwDYKeJFM7kZicfBDGArjHVp0nWIS6z93BNYWuDjOit1rXL3FPPzV9Bq48zGiYR5uhQYHiQgji%2FY2IiV52nJZL98mUpf03lljBcuB497AdfmHV0R0HAvo2gHhLiuuXSzJSfI1nH0LsjpEjGySCbvhVWZMCYn6yxg5XBMOzFu0P8TdiCUS2ko0wSKs7HETwPM7t%2BYt97EKJbN3OYsF9gOAJIqxFNEGVFcCJ9lkzEhbyZiSv0TjwWHSVuSGs50WOrGbSoWPJt51xfnvn1P4I1lwej3Pb9k59Ugbq0QAtpBe63FSBWhO4HpY1crMzpc2%2FTq0N37Yao%2FoxCUxcOw81hLne1BcY0H0GrKFfalR1JL6MHw%2FMEveoKOlpT3AwDAXoaQJWacInjRuVSsvD0HJLAhpnWWjKZuZyEknl6VvJdTR96m7lP7YXuEACtzUe9SkdkiJNwivoTJVJ33JT%2BtnmMwaVghCzLUCpAJWNwwlv3Xr%2BkYXkn6WwMBC%2FomuBysLn9O%2FuhKcZQUuvV8mKebWiN2sdXE5AtsNeAoy%2BBQASa1C%2BiUpjOdQy8ryz2YFd5zXH5kWXGYe7fhgSfu%2FZDBydPtDR7RdTey9xfUr%2BzPY%2B8V%2F9QXAB2gxiS83G0umrPKr0woJ%2F4xAY6pgEEEIWea59gCT8IDtrYGYO7syDjAL83ACUYMxq%2FNr%2FI2JVTsTBTEVG%2B6vHvbbq%2BuvlDwd0ndqe6JTKen4pItP%2BfkYVeTQ7Q2eSBhHQaAO1uHHiYC66%2BjJF3owt9CXPAGJn3TYXw3wrUfFm%2B19gA3pAQl8HxgzjhdFbq478yQKABSdp62FOgOCtse30ti5RyYgzmGspbCw1z3NimCHg8sAeftBFuY0fx&X-Amz-Signature=3f36b25435370940349381318e53e3db9cc1ca64aff62b0abc82701d1fe50d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQOMRZW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIA33tohdfFHCDsaDalqdy9Dyyo4CdKvPila9Vfs0JxEnAiAzGCOHNioWaqvica7cQbeAVdJWovEp4Rw19SlxWrC7nir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMeGcisdWPbkvPX206KtwDYKeJFM7kZicfBDGArjHVp0nWIS6z93BNYWuDjOit1rXL3FPPzV9Bq48zGiYR5uhQYHiQgji%2FY2IiV52nJZL98mUpf03lljBcuB497AdfmHV0R0HAvo2gHhLiuuXSzJSfI1nH0LsjpEjGySCbvhVWZMCYn6yxg5XBMOzFu0P8TdiCUS2ko0wSKs7HETwPM7t%2BYt97EKJbN3OYsF9gOAJIqxFNEGVFcCJ9lkzEhbyZiSv0TjwWHSVuSGs50WOrGbSoWPJt51xfnvn1P4I1lwej3Pb9k59Ugbq0QAtpBe63FSBWhO4HpY1crMzpc2%2FTq0N37Yao%2FoxCUxcOw81hLne1BcY0H0GrKFfalR1JL6MHw%2FMEveoKOlpT3AwDAXoaQJWacInjRuVSsvD0HJLAhpnWWjKZuZyEknl6VvJdTR96m7lP7YXuEACtzUe9SkdkiJNwivoTJVJ33JT%2BtnmMwaVghCzLUCpAJWNwwlv3Xr%2BkYXkn6WwMBC%2FomuBysLn9O%2FuhKcZQUuvV8mKebWiN2sdXE5AtsNeAoy%2BBQASa1C%2BiUpjOdQy8ryz2YFd5zXH5kWXGYe7fhgSfu%2FZDBydPtDR7RdTey9xfUr%2BzPY%2B8V%2F9QXAB2gxiS83G0umrPKr0woJ%2F4xAY6pgEEEIWea59gCT8IDtrYGYO7syDjAL83ACUYMxq%2FNr%2FI2JVTsTBTEVG%2B6vHvbbq%2BuvlDwd0ndqe6JTKen4pItP%2BfkYVeTQ7Q2eSBhHQaAO1uHHiYC66%2BjJF3owt9CXPAGJn3TYXw3wrUfFm%2B19gA3pAQl8HxgzjhdFbq478yQKABSdp62FOgOCtse30ti5RyYgzmGspbCw1z3NimCHg8sAeftBFuY0fx&X-Amz-Signature=e157eb6bfa2bd541c7314259973997d7fdeceec570863469cc69c620ce22c59f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQOMRZW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIA33tohdfFHCDsaDalqdy9Dyyo4CdKvPila9Vfs0JxEnAiAzGCOHNioWaqvica7cQbeAVdJWovEp4Rw19SlxWrC7nir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMeGcisdWPbkvPX206KtwDYKeJFM7kZicfBDGArjHVp0nWIS6z93BNYWuDjOit1rXL3FPPzV9Bq48zGiYR5uhQYHiQgji%2FY2IiV52nJZL98mUpf03lljBcuB497AdfmHV0R0HAvo2gHhLiuuXSzJSfI1nH0LsjpEjGySCbvhVWZMCYn6yxg5XBMOzFu0P8TdiCUS2ko0wSKs7HETwPM7t%2BYt97EKJbN3OYsF9gOAJIqxFNEGVFcCJ9lkzEhbyZiSv0TjwWHSVuSGs50WOrGbSoWPJt51xfnvn1P4I1lwej3Pb9k59Ugbq0QAtpBe63FSBWhO4HpY1crMzpc2%2FTq0N37Yao%2FoxCUxcOw81hLne1BcY0H0GrKFfalR1JL6MHw%2FMEveoKOlpT3AwDAXoaQJWacInjRuVSsvD0HJLAhpnWWjKZuZyEknl6VvJdTR96m7lP7YXuEACtzUe9SkdkiJNwivoTJVJ33JT%2BtnmMwaVghCzLUCpAJWNwwlv3Xr%2BkYXkn6WwMBC%2FomuBysLn9O%2FuhKcZQUuvV8mKebWiN2sdXE5AtsNeAoy%2BBQASa1C%2BiUpjOdQy8ryz2YFd5zXH5kWXGYe7fhgSfu%2FZDBydPtDR7RdTey9xfUr%2BzPY%2B8V%2F9QXAB2gxiS83G0umrPKr0woJ%2F4xAY6pgEEEIWea59gCT8IDtrYGYO7syDjAL83ACUYMxq%2FNr%2FI2JVTsTBTEVG%2B6vHvbbq%2BuvlDwd0ndqe6JTKen4pItP%2BfkYVeTQ7Q2eSBhHQaAO1uHHiYC66%2BjJF3owt9CXPAGJn3TYXw3wrUfFm%2B19gA3pAQl8HxgzjhdFbq478yQKABSdp62FOgOCtse30ti5RyYgzmGspbCw1z3NimCHg8sAeftBFuY0fx&X-Amz-Signature=a00e181fd0a660fe503f4c1ba36ed997b8a4f8831f7be87ce8295dc2df2d33e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQOMRZW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIA33tohdfFHCDsaDalqdy9Dyyo4CdKvPila9Vfs0JxEnAiAzGCOHNioWaqvica7cQbeAVdJWovEp4Rw19SlxWrC7nir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMeGcisdWPbkvPX206KtwDYKeJFM7kZicfBDGArjHVp0nWIS6z93BNYWuDjOit1rXL3FPPzV9Bq48zGiYR5uhQYHiQgji%2FY2IiV52nJZL98mUpf03lljBcuB497AdfmHV0R0HAvo2gHhLiuuXSzJSfI1nH0LsjpEjGySCbvhVWZMCYn6yxg5XBMOzFu0P8TdiCUS2ko0wSKs7HETwPM7t%2BYt97EKJbN3OYsF9gOAJIqxFNEGVFcCJ9lkzEhbyZiSv0TjwWHSVuSGs50WOrGbSoWPJt51xfnvn1P4I1lwej3Pb9k59Ugbq0QAtpBe63FSBWhO4HpY1crMzpc2%2FTq0N37Yao%2FoxCUxcOw81hLne1BcY0H0GrKFfalR1JL6MHw%2FMEveoKOlpT3AwDAXoaQJWacInjRuVSsvD0HJLAhpnWWjKZuZyEknl6VvJdTR96m7lP7YXuEACtzUe9SkdkiJNwivoTJVJ33JT%2BtnmMwaVghCzLUCpAJWNwwlv3Xr%2BkYXkn6WwMBC%2FomuBysLn9O%2FuhKcZQUuvV8mKebWiN2sdXE5AtsNeAoy%2BBQASa1C%2BiUpjOdQy8ryz2YFd5zXH5kWXGYe7fhgSfu%2FZDBydPtDR7RdTey9xfUr%2BzPY%2B8V%2F9QXAB2gxiS83G0umrPKr0woJ%2F4xAY6pgEEEIWea59gCT8IDtrYGYO7syDjAL83ACUYMxq%2FNr%2FI2JVTsTBTEVG%2B6vHvbbq%2BuvlDwd0ndqe6JTKen4pItP%2BfkYVeTQ7Q2eSBhHQaAO1uHHiYC66%2BjJF3owt9CXPAGJn3TYXw3wrUfFm%2B19gA3pAQl8HxgzjhdFbq478yQKABSdp62FOgOCtse30ti5RyYgzmGspbCw1z3NimCHg8sAeftBFuY0fx&X-Amz-Signature=3b779e9cb6a87c434039951dcd4eafa8a48fe813a5e13d13f718e5db4bc1f15a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQOMRZW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIA33tohdfFHCDsaDalqdy9Dyyo4CdKvPila9Vfs0JxEnAiAzGCOHNioWaqvica7cQbeAVdJWovEp4Rw19SlxWrC7nir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMeGcisdWPbkvPX206KtwDYKeJFM7kZicfBDGArjHVp0nWIS6z93BNYWuDjOit1rXL3FPPzV9Bq48zGiYR5uhQYHiQgji%2FY2IiV52nJZL98mUpf03lljBcuB497AdfmHV0R0HAvo2gHhLiuuXSzJSfI1nH0LsjpEjGySCbvhVWZMCYn6yxg5XBMOzFu0P8TdiCUS2ko0wSKs7HETwPM7t%2BYt97EKJbN3OYsF9gOAJIqxFNEGVFcCJ9lkzEhbyZiSv0TjwWHSVuSGs50WOrGbSoWPJt51xfnvn1P4I1lwej3Pb9k59Ugbq0QAtpBe63FSBWhO4HpY1crMzpc2%2FTq0N37Yao%2FoxCUxcOw81hLne1BcY0H0GrKFfalR1JL6MHw%2FMEveoKOlpT3AwDAXoaQJWacInjRuVSsvD0HJLAhpnWWjKZuZyEknl6VvJdTR96m7lP7YXuEACtzUe9SkdkiJNwivoTJVJ33JT%2BtnmMwaVghCzLUCpAJWNwwlv3Xr%2BkYXkn6WwMBC%2FomuBysLn9O%2FuhKcZQUuvV8mKebWiN2sdXE5AtsNeAoy%2BBQASa1C%2BiUpjOdQy8ryz2YFd5zXH5kWXGYe7fhgSfu%2FZDBydPtDR7RdTey9xfUr%2BzPY%2B8V%2F9QXAB2gxiS83G0umrPKr0woJ%2F4xAY6pgEEEIWea59gCT8IDtrYGYO7syDjAL83ACUYMxq%2FNr%2FI2JVTsTBTEVG%2B6vHvbbq%2BuvlDwd0ndqe6JTKen4pItP%2BfkYVeTQ7Q2eSBhHQaAO1uHHiYC66%2BjJF3owt9CXPAGJn3TYXw3wrUfFm%2B19gA3pAQl8HxgzjhdFbq478yQKABSdp62FOgOCtse30ti5RyYgzmGspbCw1z3NimCHg8sAeftBFuY0fx&X-Amz-Signature=8f4ed3de67d9ccff5f858214b94514a1e036eac4b3865f2916b8b9ff1ae99e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQOMRZW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIA33tohdfFHCDsaDalqdy9Dyyo4CdKvPila9Vfs0JxEnAiAzGCOHNioWaqvica7cQbeAVdJWovEp4Rw19SlxWrC7nir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMeGcisdWPbkvPX206KtwDYKeJFM7kZicfBDGArjHVp0nWIS6z93BNYWuDjOit1rXL3FPPzV9Bq48zGiYR5uhQYHiQgji%2FY2IiV52nJZL98mUpf03lljBcuB497AdfmHV0R0HAvo2gHhLiuuXSzJSfI1nH0LsjpEjGySCbvhVWZMCYn6yxg5XBMOzFu0P8TdiCUS2ko0wSKs7HETwPM7t%2BYt97EKJbN3OYsF9gOAJIqxFNEGVFcCJ9lkzEhbyZiSv0TjwWHSVuSGs50WOrGbSoWPJt51xfnvn1P4I1lwej3Pb9k59Ugbq0QAtpBe63FSBWhO4HpY1crMzpc2%2FTq0N37Yao%2FoxCUxcOw81hLne1BcY0H0GrKFfalR1JL6MHw%2FMEveoKOlpT3AwDAXoaQJWacInjRuVSsvD0HJLAhpnWWjKZuZyEknl6VvJdTR96m7lP7YXuEACtzUe9SkdkiJNwivoTJVJ33JT%2BtnmMwaVghCzLUCpAJWNwwlv3Xr%2BkYXkn6WwMBC%2FomuBysLn9O%2FuhKcZQUuvV8mKebWiN2sdXE5AtsNeAoy%2BBQASa1C%2BiUpjOdQy8ryz2YFd5zXH5kWXGYe7fhgSfu%2FZDBydPtDR7RdTey9xfUr%2BzPY%2B8V%2F9QXAB2gxiS83G0umrPKr0woJ%2F4xAY6pgEEEIWea59gCT8IDtrYGYO7syDjAL83ACUYMxq%2FNr%2FI2JVTsTBTEVG%2B6vHvbbq%2BuvlDwd0ndqe6JTKen4pItP%2BfkYVeTQ7Q2eSBhHQaAO1uHHiYC66%2BjJF3owt9CXPAGJn3TYXw3wrUfFm%2B19gA3pAQl8HxgzjhdFbq478yQKABSdp62FOgOCtse30ti5RyYgzmGspbCw1z3NimCHg8sAeftBFuY0fx&X-Amz-Signature=697916f387bd97acf278b4cce918b189402ca3c202778fb5b1e9a3171d15b873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQOMRZW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIA33tohdfFHCDsaDalqdy9Dyyo4CdKvPila9Vfs0JxEnAiAzGCOHNioWaqvica7cQbeAVdJWovEp4Rw19SlxWrC7nir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMeGcisdWPbkvPX206KtwDYKeJFM7kZicfBDGArjHVp0nWIS6z93BNYWuDjOit1rXL3FPPzV9Bq48zGiYR5uhQYHiQgji%2FY2IiV52nJZL98mUpf03lljBcuB497AdfmHV0R0HAvo2gHhLiuuXSzJSfI1nH0LsjpEjGySCbvhVWZMCYn6yxg5XBMOzFu0P8TdiCUS2ko0wSKs7HETwPM7t%2BYt97EKJbN3OYsF9gOAJIqxFNEGVFcCJ9lkzEhbyZiSv0TjwWHSVuSGs50WOrGbSoWPJt51xfnvn1P4I1lwej3Pb9k59Ugbq0QAtpBe63FSBWhO4HpY1crMzpc2%2FTq0N37Yao%2FoxCUxcOw81hLne1BcY0H0GrKFfalR1JL6MHw%2FMEveoKOlpT3AwDAXoaQJWacInjRuVSsvD0HJLAhpnWWjKZuZyEknl6VvJdTR96m7lP7YXuEACtzUe9SkdkiJNwivoTJVJ33JT%2BtnmMwaVghCzLUCpAJWNwwlv3Xr%2BkYXkn6WwMBC%2FomuBysLn9O%2FuhKcZQUuvV8mKebWiN2sdXE5AtsNeAoy%2BBQASa1C%2BiUpjOdQy8ryz2YFd5zXH5kWXGYe7fhgSfu%2FZDBydPtDR7RdTey9xfUr%2BzPY%2B8V%2F9QXAB2gxiS83G0umrPKr0woJ%2F4xAY6pgEEEIWea59gCT8IDtrYGYO7syDjAL83ACUYMxq%2FNr%2FI2JVTsTBTEVG%2B6vHvbbq%2BuvlDwd0ndqe6JTKen4pItP%2BfkYVeTQ7Q2eSBhHQaAO1uHHiYC66%2BjJF3owt9CXPAGJn3TYXw3wrUfFm%2B19gA3pAQl8HxgzjhdFbq478yQKABSdp62FOgOCtse30ti5RyYgzmGspbCw1z3NimCHg8sAeftBFuY0fx&X-Amz-Signature=f161e3386caf104df29baa343dbd8693056a3f38246ac3fde2dbe418321a759b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQOMRZW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIA33tohdfFHCDsaDalqdy9Dyyo4CdKvPila9Vfs0JxEnAiAzGCOHNioWaqvica7cQbeAVdJWovEp4Rw19SlxWrC7nir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMeGcisdWPbkvPX206KtwDYKeJFM7kZicfBDGArjHVp0nWIS6z93BNYWuDjOit1rXL3FPPzV9Bq48zGiYR5uhQYHiQgji%2FY2IiV52nJZL98mUpf03lljBcuB497AdfmHV0R0HAvo2gHhLiuuXSzJSfI1nH0LsjpEjGySCbvhVWZMCYn6yxg5XBMOzFu0P8TdiCUS2ko0wSKs7HETwPM7t%2BYt97EKJbN3OYsF9gOAJIqxFNEGVFcCJ9lkzEhbyZiSv0TjwWHSVuSGs50WOrGbSoWPJt51xfnvn1P4I1lwej3Pb9k59Ugbq0QAtpBe63FSBWhO4HpY1crMzpc2%2FTq0N37Yao%2FoxCUxcOw81hLne1BcY0H0GrKFfalR1JL6MHw%2FMEveoKOlpT3AwDAXoaQJWacInjRuVSsvD0HJLAhpnWWjKZuZyEknl6VvJdTR96m7lP7YXuEACtzUe9SkdkiJNwivoTJVJ33JT%2BtnmMwaVghCzLUCpAJWNwwlv3Xr%2BkYXkn6WwMBC%2FomuBysLn9O%2FuhKcZQUuvV8mKebWiN2sdXE5AtsNeAoy%2BBQASa1C%2BiUpjOdQy8ryz2YFd5zXH5kWXGYe7fhgSfu%2FZDBydPtDR7RdTey9xfUr%2BzPY%2B8V%2F9QXAB2gxiS83G0umrPKr0woJ%2F4xAY6pgEEEIWea59gCT8IDtrYGYO7syDjAL83ACUYMxq%2FNr%2FI2JVTsTBTEVG%2B6vHvbbq%2BuvlDwd0ndqe6JTKen4pItP%2BfkYVeTQ7Q2eSBhHQaAO1uHHiYC66%2BjJF3owt9CXPAGJn3TYXw3wrUfFm%2B19gA3pAQl8HxgzjhdFbq478yQKABSdp62FOgOCtse30ti5RyYgzmGspbCw1z3NimCHg8sAeftBFuY0fx&X-Amz-Signature=405af3a0ad19592058add43022776f6b39501662a05c66402549d44719cd95c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQOMRZW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIA33tohdfFHCDsaDalqdy9Dyyo4CdKvPila9Vfs0JxEnAiAzGCOHNioWaqvica7cQbeAVdJWovEp4Rw19SlxWrC7nir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMeGcisdWPbkvPX206KtwDYKeJFM7kZicfBDGArjHVp0nWIS6z93BNYWuDjOit1rXL3FPPzV9Bq48zGiYR5uhQYHiQgji%2FY2IiV52nJZL98mUpf03lljBcuB497AdfmHV0R0HAvo2gHhLiuuXSzJSfI1nH0LsjpEjGySCbvhVWZMCYn6yxg5XBMOzFu0P8TdiCUS2ko0wSKs7HETwPM7t%2BYt97EKJbN3OYsF9gOAJIqxFNEGVFcCJ9lkzEhbyZiSv0TjwWHSVuSGs50WOrGbSoWPJt51xfnvn1P4I1lwej3Pb9k59Ugbq0QAtpBe63FSBWhO4HpY1crMzpc2%2FTq0N37Yao%2FoxCUxcOw81hLne1BcY0H0GrKFfalR1JL6MHw%2FMEveoKOlpT3AwDAXoaQJWacInjRuVSsvD0HJLAhpnWWjKZuZyEknl6VvJdTR96m7lP7YXuEACtzUe9SkdkiJNwivoTJVJ33JT%2BtnmMwaVghCzLUCpAJWNwwlv3Xr%2BkYXkn6WwMBC%2FomuBysLn9O%2FuhKcZQUuvV8mKebWiN2sdXE5AtsNeAoy%2BBQASa1C%2BiUpjOdQy8ryz2YFd5zXH5kWXGYe7fhgSfu%2FZDBydPtDR7RdTey9xfUr%2BzPY%2B8V%2F9QXAB2gxiS83G0umrPKr0woJ%2F4xAY6pgEEEIWea59gCT8IDtrYGYO7syDjAL83ACUYMxq%2FNr%2FI2JVTsTBTEVG%2B6vHvbbq%2BuvlDwd0ndqe6JTKen4pItP%2BfkYVeTQ7Q2eSBhHQaAO1uHHiYC66%2BjJF3owt9CXPAGJn3TYXw3wrUfFm%2B19gA3pAQl8HxgzjhdFbq478yQKABSdp62FOgOCtse30ti5RyYgzmGspbCw1z3NimCHg8sAeftBFuY0fx&X-Amz-Signature=6518d95e2c053a624830f45420c788b935c81fb369f6df4a58e452f2f9e744e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQOMRZW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIA33tohdfFHCDsaDalqdy9Dyyo4CdKvPila9Vfs0JxEnAiAzGCOHNioWaqvica7cQbeAVdJWovEp4Rw19SlxWrC7nir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMeGcisdWPbkvPX206KtwDYKeJFM7kZicfBDGArjHVp0nWIS6z93BNYWuDjOit1rXL3FPPzV9Bq48zGiYR5uhQYHiQgji%2FY2IiV52nJZL98mUpf03lljBcuB497AdfmHV0R0HAvo2gHhLiuuXSzJSfI1nH0LsjpEjGySCbvhVWZMCYn6yxg5XBMOzFu0P8TdiCUS2ko0wSKs7HETwPM7t%2BYt97EKJbN3OYsF9gOAJIqxFNEGVFcCJ9lkzEhbyZiSv0TjwWHSVuSGs50WOrGbSoWPJt51xfnvn1P4I1lwej3Pb9k59Ugbq0QAtpBe63FSBWhO4HpY1crMzpc2%2FTq0N37Yao%2FoxCUxcOw81hLne1BcY0H0GrKFfalR1JL6MHw%2FMEveoKOlpT3AwDAXoaQJWacInjRuVSsvD0HJLAhpnWWjKZuZyEknl6VvJdTR96m7lP7YXuEACtzUe9SkdkiJNwivoTJVJ33JT%2BtnmMwaVghCzLUCpAJWNwwlv3Xr%2BkYXkn6WwMBC%2FomuBysLn9O%2FuhKcZQUuvV8mKebWiN2sdXE5AtsNeAoy%2BBQASa1C%2BiUpjOdQy8ryz2YFd5zXH5kWXGYe7fhgSfu%2FZDBydPtDR7RdTey9xfUr%2BzPY%2B8V%2F9QXAB2gxiS83G0umrPKr0woJ%2F4xAY6pgEEEIWea59gCT8IDtrYGYO7syDjAL83ACUYMxq%2FNr%2FI2JVTsTBTEVG%2B6vHvbbq%2BuvlDwd0ndqe6JTKen4pItP%2BfkYVeTQ7Q2eSBhHQaAO1uHHiYC66%2BjJF3owt9CXPAGJn3TYXw3wrUfFm%2B19gA3pAQl8HxgzjhdFbq478yQKABSdp62FOgOCtse30ti5RyYgzmGspbCw1z3NimCHg8sAeftBFuY0fx&X-Amz-Signature=cdddf9c14b983740636c608246b395867b2c17174007493e1f8dc6c927ec3008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQOMRZW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIA33tohdfFHCDsaDalqdy9Dyyo4CdKvPila9Vfs0JxEnAiAzGCOHNioWaqvica7cQbeAVdJWovEp4Rw19SlxWrC7nir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMeGcisdWPbkvPX206KtwDYKeJFM7kZicfBDGArjHVp0nWIS6z93BNYWuDjOit1rXL3FPPzV9Bq48zGiYR5uhQYHiQgji%2FY2IiV52nJZL98mUpf03lljBcuB497AdfmHV0R0HAvo2gHhLiuuXSzJSfI1nH0LsjpEjGySCbvhVWZMCYn6yxg5XBMOzFu0P8TdiCUS2ko0wSKs7HETwPM7t%2BYt97EKJbN3OYsF9gOAJIqxFNEGVFcCJ9lkzEhbyZiSv0TjwWHSVuSGs50WOrGbSoWPJt51xfnvn1P4I1lwej3Pb9k59Ugbq0QAtpBe63FSBWhO4HpY1crMzpc2%2FTq0N37Yao%2FoxCUxcOw81hLne1BcY0H0GrKFfalR1JL6MHw%2FMEveoKOlpT3AwDAXoaQJWacInjRuVSsvD0HJLAhpnWWjKZuZyEknl6VvJdTR96m7lP7YXuEACtzUe9SkdkiJNwivoTJVJ33JT%2BtnmMwaVghCzLUCpAJWNwwlv3Xr%2BkYXkn6WwMBC%2FomuBysLn9O%2FuhKcZQUuvV8mKebWiN2sdXE5AtsNeAoy%2BBQASa1C%2BiUpjOdQy8ryz2YFd5zXH5kWXGYe7fhgSfu%2FZDBydPtDR7RdTey9xfUr%2BzPY%2B8V%2F9QXAB2gxiS83G0umrPKr0woJ%2F4xAY6pgEEEIWea59gCT8IDtrYGYO7syDjAL83ACUYMxq%2FNr%2FI2JVTsTBTEVG%2B6vHvbbq%2BuvlDwd0ndqe6JTKen4pItP%2BfkYVeTQ7Q2eSBhHQaAO1uHHiYC66%2BjJF3owt9CXPAGJn3TYXw3wrUfFm%2B19gA3pAQl8HxgzjhdFbq478yQKABSdp62FOgOCtse30ti5RyYgzmGspbCw1z3NimCHg8sAeftBFuY0fx&X-Amz-Signature=ba69f039e83acb628738b57c642013f46b34d0b5492a2f4556605b7c08dd636a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQOMRZW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIA33tohdfFHCDsaDalqdy9Dyyo4CdKvPila9Vfs0JxEnAiAzGCOHNioWaqvica7cQbeAVdJWovEp4Rw19SlxWrC7nir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMeGcisdWPbkvPX206KtwDYKeJFM7kZicfBDGArjHVp0nWIS6z93BNYWuDjOit1rXL3FPPzV9Bq48zGiYR5uhQYHiQgji%2FY2IiV52nJZL98mUpf03lljBcuB497AdfmHV0R0HAvo2gHhLiuuXSzJSfI1nH0LsjpEjGySCbvhVWZMCYn6yxg5XBMOzFu0P8TdiCUS2ko0wSKs7HETwPM7t%2BYt97EKJbN3OYsF9gOAJIqxFNEGVFcCJ9lkzEhbyZiSv0TjwWHSVuSGs50WOrGbSoWPJt51xfnvn1P4I1lwej3Pb9k59Ugbq0QAtpBe63FSBWhO4HpY1crMzpc2%2FTq0N37Yao%2FoxCUxcOw81hLne1BcY0H0GrKFfalR1JL6MHw%2FMEveoKOlpT3AwDAXoaQJWacInjRuVSsvD0HJLAhpnWWjKZuZyEknl6VvJdTR96m7lP7YXuEACtzUe9SkdkiJNwivoTJVJ33JT%2BtnmMwaVghCzLUCpAJWNwwlv3Xr%2BkYXkn6WwMBC%2FomuBysLn9O%2FuhKcZQUuvV8mKebWiN2sdXE5AtsNeAoy%2BBQASa1C%2BiUpjOdQy8ryz2YFd5zXH5kWXGYe7fhgSfu%2FZDBydPtDR7RdTey9xfUr%2BzPY%2B8V%2F9QXAB2gxiS83G0umrPKr0woJ%2F4xAY6pgEEEIWea59gCT8IDtrYGYO7syDjAL83ACUYMxq%2FNr%2FI2JVTsTBTEVG%2B6vHvbbq%2BuvlDwd0ndqe6JTKen4pItP%2BfkYVeTQ7Q2eSBhHQaAO1uHHiYC66%2BjJF3owt9CXPAGJn3TYXw3wrUfFm%2B19gA3pAQl8HxgzjhdFbq478yQKABSdp62FOgOCtse30ti5RyYgzmGspbCw1z3NimCHg8sAeftBFuY0fx&X-Amz-Signature=9c94398484617c767443ce5e373747acf63f7a80f7091feb00d90a343bc50c00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQOMRZW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIA33tohdfFHCDsaDalqdy9Dyyo4CdKvPila9Vfs0JxEnAiAzGCOHNioWaqvica7cQbeAVdJWovEp4Rw19SlxWrC7nir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMeGcisdWPbkvPX206KtwDYKeJFM7kZicfBDGArjHVp0nWIS6z93BNYWuDjOit1rXL3FPPzV9Bq48zGiYR5uhQYHiQgji%2FY2IiV52nJZL98mUpf03lljBcuB497AdfmHV0R0HAvo2gHhLiuuXSzJSfI1nH0LsjpEjGySCbvhVWZMCYn6yxg5XBMOzFu0P8TdiCUS2ko0wSKs7HETwPM7t%2BYt97EKJbN3OYsF9gOAJIqxFNEGVFcCJ9lkzEhbyZiSv0TjwWHSVuSGs50WOrGbSoWPJt51xfnvn1P4I1lwej3Pb9k59Ugbq0QAtpBe63FSBWhO4HpY1crMzpc2%2FTq0N37Yao%2FoxCUxcOw81hLne1BcY0H0GrKFfalR1JL6MHw%2FMEveoKOlpT3AwDAXoaQJWacInjRuVSsvD0HJLAhpnWWjKZuZyEknl6VvJdTR96m7lP7YXuEACtzUe9SkdkiJNwivoTJVJ33JT%2BtnmMwaVghCzLUCpAJWNwwlv3Xr%2BkYXkn6WwMBC%2FomuBysLn9O%2FuhKcZQUuvV8mKebWiN2sdXE5AtsNeAoy%2BBQASa1C%2BiUpjOdQy8ryz2YFd5zXH5kWXGYe7fhgSfu%2FZDBydPtDR7RdTey9xfUr%2BzPY%2B8V%2F9QXAB2gxiS83G0umrPKr0woJ%2F4xAY6pgEEEIWea59gCT8IDtrYGYO7syDjAL83ACUYMxq%2FNr%2FI2JVTsTBTEVG%2B6vHvbbq%2BuvlDwd0ndqe6JTKen4pItP%2BfkYVeTQ7Q2eSBhHQaAO1uHHiYC66%2BjJF3owt9CXPAGJn3TYXw3wrUfFm%2B19gA3pAQl8HxgzjhdFbq478yQKABSdp62FOgOCtse30ti5RyYgzmGspbCw1z3NimCHg8sAeftBFuY0fx&X-Amz-Signature=4ea1c909c1805cbb8d1cbd8aeb8ba9bde3c8ce67091346a7ebae317c3f28d951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQOMRZW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIA33tohdfFHCDsaDalqdy9Dyyo4CdKvPila9Vfs0JxEnAiAzGCOHNioWaqvica7cQbeAVdJWovEp4Rw19SlxWrC7nir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMeGcisdWPbkvPX206KtwDYKeJFM7kZicfBDGArjHVp0nWIS6z93BNYWuDjOit1rXL3FPPzV9Bq48zGiYR5uhQYHiQgji%2FY2IiV52nJZL98mUpf03lljBcuB497AdfmHV0R0HAvo2gHhLiuuXSzJSfI1nH0LsjpEjGySCbvhVWZMCYn6yxg5XBMOzFu0P8TdiCUS2ko0wSKs7HETwPM7t%2BYt97EKJbN3OYsF9gOAJIqxFNEGVFcCJ9lkzEhbyZiSv0TjwWHSVuSGs50WOrGbSoWPJt51xfnvn1P4I1lwej3Pb9k59Ugbq0QAtpBe63FSBWhO4HpY1crMzpc2%2FTq0N37Yao%2FoxCUxcOw81hLne1BcY0H0GrKFfalR1JL6MHw%2FMEveoKOlpT3AwDAXoaQJWacInjRuVSsvD0HJLAhpnWWjKZuZyEknl6VvJdTR96m7lP7YXuEACtzUe9SkdkiJNwivoTJVJ33JT%2BtnmMwaVghCzLUCpAJWNwwlv3Xr%2BkYXkn6WwMBC%2FomuBysLn9O%2FuhKcZQUuvV8mKebWiN2sdXE5AtsNeAoy%2BBQASa1C%2BiUpjOdQy8ryz2YFd5zXH5kWXGYe7fhgSfu%2FZDBydPtDR7RdTey9xfUr%2BzPY%2B8V%2F9QXAB2gxiS83G0umrPKr0woJ%2F4xAY6pgEEEIWea59gCT8IDtrYGYO7syDjAL83ACUYMxq%2FNr%2FI2JVTsTBTEVG%2B6vHvbbq%2BuvlDwd0ndqe6JTKen4pItP%2BfkYVeTQ7Q2eSBhHQaAO1uHHiYC66%2BjJF3owt9CXPAGJn3TYXw3wrUfFm%2B19gA3pAQl8HxgzjhdFbq478yQKABSdp62FOgOCtse30ti5RyYgzmGspbCw1z3NimCHg8sAeftBFuY0fx&X-Amz-Signature=7a563e0a310aa05641f7dafbd1b9aef5171d3272b0e04205b555b0627431cec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
