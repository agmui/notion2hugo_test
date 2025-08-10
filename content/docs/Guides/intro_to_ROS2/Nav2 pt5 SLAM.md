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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZSDNZ4O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B6hUnkYt5c87y7G8P17Gu0pxh4TavHbtSF9tgiOXWgAIhAIj0h5eXn6DNGseFh1FuGjVqQdfSxke4AeiU%2FOEyzhkxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJvqYcwNRoKWEJr54q3APxZrgFaE0alYT%2F%2FWVKhVvrjlzsHuDmYtvDW%2FkmDqpjiPSeCk3NkbGbGZR7dv0NKti1foU0SWugubstfyX2DaUD%2Fw5OvooKA55SbsqKRRh0ET0CXiWK%2BcvWFztc%2BQ4m25FHUrxIzWNWAksyzc83trbHc2Lvz2AvtI5jgLWwm8L78IXUI2Egtj09RT696M3LPIQZATHxBVUk7QIVqxZ09TJeJg5ZzB3C2LOv99tCPgkv74J8ZYyntf1Bt7kQ1WGROgc4eRrfzRXfXisIzxUB03FQs%2Bjn0RXjYc0Bvf8EE913gSrSDmxMFqwqGrW%2F7O5JOv%2BvJm0nddmuUJ34AtgWwUSwy6O7pDO4CrjSqEqQzOgm367wnVF%2Bs4QgPTkoluUFo3mCJvRCQ9LM9PPw05t5HpVq6N%2FjRaegnmQZR1r0E%2BTYE2fmWHBa%2F%2BClgcQ0Erj54AuhOKql44p9J4OPy1ZA4D5rHdMKpVVjTMpi7rfOeij%2FmVHzCVRH7SeMjNyqcprXrHMFKEMbbtxu1LOftg07NLO1KuUHAhtqRj4DVGYRITC1xBCjTunjtvZWy7nYakpO%2FkK8V4UFddiWVGLiqO0upFUwMzkHBuDAvbn%2Bzk1wSgt%2Ftqz2EbKHySqDZTavejCSmOLEBjqkATe8SrtOjM4kx85FHqQnip7UAW8cFax4RK%2FrI%2FNn2fCFUP7xVlKIUtbt0vMeSNeFrCd3xWYFFdd25k2MA0hF3ZvpC1j%2BeYQjwwb2vY5XKxLqYKTKhVsZ9ElXRKVcDZPey8NhURRXRhVIGyu5L6MmCLU6vmdivGLDqRPS9iMCWrxw1%2BMlQgF9U5%2BE%2FCQfplKxN28VK%2Bgd3%2FUG0MO5BnMVhNc1phxs&X-Amz-Signature=6388b4e950fd4b47bb6265f395755a5dfaf8ebd5e99b64c83e1e925ec66561a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZSDNZ4O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B6hUnkYt5c87y7G8P17Gu0pxh4TavHbtSF9tgiOXWgAIhAIj0h5eXn6DNGseFh1FuGjVqQdfSxke4AeiU%2FOEyzhkxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJvqYcwNRoKWEJr54q3APxZrgFaE0alYT%2F%2FWVKhVvrjlzsHuDmYtvDW%2FkmDqpjiPSeCk3NkbGbGZR7dv0NKti1foU0SWugubstfyX2DaUD%2Fw5OvooKA55SbsqKRRh0ET0CXiWK%2BcvWFztc%2BQ4m25FHUrxIzWNWAksyzc83trbHc2Lvz2AvtI5jgLWwm8L78IXUI2Egtj09RT696M3LPIQZATHxBVUk7QIVqxZ09TJeJg5ZzB3C2LOv99tCPgkv74J8ZYyntf1Bt7kQ1WGROgc4eRrfzRXfXisIzxUB03FQs%2Bjn0RXjYc0Bvf8EE913gSrSDmxMFqwqGrW%2F7O5JOv%2BvJm0nddmuUJ34AtgWwUSwy6O7pDO4CrjSqEqQzOgm367wnVF%2Bs4QgPTkoluUFo3mCJvRCQ9LM9PPw05t5HpVq6N%2FjRaegnmQZR1r0E%2BTYE2fmWHBa%2F%2BClgcQ0Erj54AuhOKql44p9J4OPy1ZA4D5rHdMKpVVjTMpi7rfOeij%2FmVHzCVRH7SeMjNyqcprXrHMFKEMbbtxu1LOftg07NLO1KuUHAhtqRj4DVGYRITC1xBCjTunjtvZWy7nYakpO%2FkK8V4UFddiWVGLiqO0upFUwMzkHBuDAvbn%2Bzk1wSgt%2Ftqz2EbKHySqDZTavejCSmOLEBjqkATe8SrtOjM4kx85FHqQnip7UAW8cFax4RK%2FrI%2FNn2fCFUP7xVlKIUtbt0vMeSNeFrCd3xWYFFdd25k2MA0hF3ZvpC1j%2BeYQjwwb2vY5XKxLqYKTKhVsZ9ElXRKVcDZPey8NhURRXRhVIGyu5L6MmCLU6vmdivGLDqRPS9iMCWrxw1%2BMlQgF9U5%2BE%2FCQfplKxN28VK%2Bgd3%2FUG0MO5BnMVhNc1phxs&X-Amz-Signature=c4b407035ff494c30b294549c7f4a23f80457fd4d24d7064c38889501f4489d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZSDNZ4O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B6hUnkYt5c87y7G8P17Gu0pxh4TavHbtSF9tgiOXWgAIhAIj0h5eXn6DNGseFh1FuGjVqQdfSxke4AeiU%2FOEyzhkxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJvqYcwNRoKWEJr54q3APxZrgFaE0alYT%2F%2FWVKhVvrjlzsHuDmYtvDW%2FkmDqpjiPSeCk3NkbGbGZR7dv0NKti1foU0SWugubstfyX2DaUD%2Fw5OvooKA55SbsqKRRh0ET0CXiWK%2BcvWFztc%2BQ4m25FHUrxIzWNWAksyzc83trbHc2Lvz2AvtI5jgLWwm8L78IXUI2Egtj09RT696M3LPIQZATHxBVUk7QIVqxZ09TJeJg5ZzB3C2LOv99tCPgkv74J8ZYyntf1Bt7kQ1WGROgc4eRrfzRXfXisIzxUB03FQs%2Bjn0RXjYc0Bvf8EE913gSrSDmxMFqwqGrW%2F7O5JOv%2BvJm0nddmuUJ34AtgWwUSwy6O7pDO4CrjSqEqQzOgm367wnVF%2Bs4QgPTkoluUFo3mCJvRCQ9LM9PPw05t5HpVq6N%2FjRaegnmQZR1r0E%2BTYE2fmWHBa%2F%2BClgcQ0Erj54AuhOKql44p9J4OPy1ZA4D5rHdMKpVVjTMpi7rfOeij%2FmVHzCVRH7SeMjNyqcprXrHMFKEMbbtxu1LOftg07NLO1KuUHAhtqRj4DVGYRITC1xBCjTunjtvZWy7nYakpO%2FkK8V4UFddiWVGLiqO0upFUwMzkHBuDAvbn%2Bzk1wSgt%2Ftqz2EbKHySqDZTavejCSmOLEBjqkATe8SrtOjM4kx85FHqQnip7UAW8cFax4RK%2FrI%2FNn2fCFUP7xVlKIUtbt0vMeSNeFrCd3xWYFFdd25k2MA0hF3ZvpC1j%2BeYQjwwb2vY5XKxLqYKTKhVsZ9ElXRKVcDZPey8NhURRXRhVIGyu5L6MmCLU6vmdivGLDqRPS9iMCWrxw1%2BMlQgF9U5%2BE%2FCQfplKxN28VK%2Bgd3%2FUG0MO5BnMVhNc1phxs&X-Amz-Signature=68170e3efa4454c8179d5c2893203ea9d4bd22495ea5dc04693368f69a996b1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZSDNZ4O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B6hUnkYt5c87y7G8P17Gu0pxh4TavHbtSF9tgiOXWgAIhAIj0h5eXn6DNGseFh1FuGjVqQdfSxke4AeiU%2FOEyzhkxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJvqYcwNRoKWEJr54q3APxZrgFaE0alYT%2F%2FWVKhVvrjlzsHuDmYtvDW%2FkmDqpjiPSeCk3NkbGbGZR7dv0NKti1foU0SWugubstfyX2DaUD%2Fw5OvooKA55SbsqKRRh0ET0CXiWK%2BcvWFztc%2BQ4m25FHUrxIzWNWAksyzc83trbHc2Lvz2AvtI5jgLWwm8L78IXUI2Egtj09RT696M3LPIQZATHxBVUk7QIVqxZ09TJeJg5ZzB3C2LOv99tCPgkv74J8ZYyntf1Bt7kQ1WGROgc4eRrfzRXfXisIzxUB03FQs%2Bjn0RXjYc0Bvf8EE913gSrSDmxMFqwqGrW%2F7O5JOv%2BvJm0nddmuUJ34AtgWwUSwy6O7pDO4CrjSqEqQzOgm367wnVF%2Bs4QgPTkoluUFo3mCJvRCQ9LM9PPw05t5HpVq6N%2FjRaegnmQZR1r0E%2BTYE2fmWHBa%2F%2BClgcQ0Erj54AuhOKql44p9J4OPy1ZA4D5rHdMKpVVjTMpi7rfOeij%2FmVHzCVRH7SeMjNyqcprXrHMFKEMbbtxu1LOftg07NLO1KuUHAhtqRj4DVGYRITC1xBCjTunjtvZWy7nYakpO%2FkK8V4UFddiWVGLiqO0upFUwMzkHBuDAvbn%2Bzk1wSgt%2Ftqz2EbKHySqDZTavejCSmOLEBjqkATe8SrtOjM4kx85FHqQnip7UAW8cFax4RK%2FrI%2FNn2fCFUP7xVlKIUtbt0vMeSNeFrCd3xWYFFdd25k2MA0hF3ZvpC1j%2BeYQjwwb2vY5XKxLqYKTKhVsZ9ElXRKVcDZPey8NhURRXRhVIGyu5L6MmCLU6vmdivGLDqRPS9iMCWrxw1%2BMlQgF9U5%2BE%2FCQfplKxN28VK%2Bgd3%2FUG0MO5BnMVhNc1phxs&X-Amz-Signature=1b6060bad9845401774373d87305ccf1fc653ab665d11b5b3fcae2b218ceeea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZSDNZ4O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B6hUnkYt5c87y7G8P17Gu0pxh4TavHbtSF9tgiOXWgAIhAIj0h5eXn6DNGseFh1FuGjVqQdfSxke4AeiU%2FOEyzhkxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJvqYcwNRoKWEJr54q3APxZrgFaE0alYT%2F%2FWVKhVvrjlzsHuDmYtvDW%2FkmDqpjiPSeCk3NkbGbGZR7dv0NKti1foU0SWugubstfyX2DaUD%2Fw5OvooKA55SbsqKRRh0ET0CXiWK%2BcvWFztc%2BQ4m25FHUrxIzWNWAksyzc83trbHc2Lvz2AvtI5jgLWwm8L78IXUI2Egtj09RT696M3LPIQZATHxBVUk7QIVqxZ09TJeJg5ZzB3C2LOv99tCPgkv74J8ZYyntf1Bt7kQ1WGROgc4eRrfzRXfXisIzxUB03FQs%2Bjn0RXjYc0Bvf8EE913gSrSDmxMFqwqGrW%2F7O5JOv%2BvJm0nddmuUJ34AtgWwUSwy6O7pDO4CrjSqEqQzOgm367wnVF%2Bs4QgPTkoluUFo3mCJvRCQ9LM9PPw05t5HpVq6N%2FjRaegnmQZR1r0E%2BTYE2fmWHBa%2F%2BClgcQ0Erj54AuhOKql44p9J4OPy1ZA4D5rHdMKpVVjTMpi7rfOeij%2FmVHzCVRH7SeMjNyqcprXrHMFKEMbbtxu1LOftg07NLO1KuUHAhtqRj4DVGYRITC1xBCjTunjtvZWy7nYakpO%2FkK8V4UFddiWVGLiqO0upFUwMzkHBuDAvbn%2Bzk1wSgt%2Ftqz2EbKHySqDZTavejCSmOLEBjqkATe8SrtOjM4kx85FHqQnip7UAW8cFax4RK%2FrI%2FNn2fCFUP7xVlKIUtbt0vMeSNeFrCd3xWYFFdd25k2MA0hF3ZvpC1j%2BeYQjwwb2vY5XKxLqYKTKhVsZ9ElXRKVcDZPey8NhURRXRhVIGyu5L6MmCLU6vmdivGLDqRPS9iMCWrxw1%2BMlQgF9U5%2BE%2FCQfplKxN28VK%2Bgd3%2FUG0MO5BnMVhNc1phxs&X-Amz-Signature=9b17d55a0704cb09c0fa024bd46c6c41c15b93339dd61b75530720297de45094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZSDNZ4O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B6hUnkYt5c87y7G8P17Gu0pxh4TavHbtSF9tgiOXWgAIhAIj0h5eXn6DNGseFh1FuGjVqQdfSxke4AeiU%2FOEyzhkxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJvqYcwNRoKWEJr54q3APxZrgFaE0alYT%2F%2FWVKhVvrjlzsHuDmYtvDW%2FkmDqpjiPSeCk3NkbGbGZR7dv0NKti1foU0SWugubstfyX2DaUD%2Fw5OvooKA55SbsqKRRh0ET0CXiWK%2BcvWFztc%2BQ4m25FHUrxIzWNWAksyzc83trbHc2Lvz2AvtI5jgLWwm8L78IXUI2Egtj09RT696M3LPIQZATHxBVUk7QIVqxZ09TJeJg5ZzB3C2LOv99tCPgkv74J8ZYyntf1Bt7kQ1WGROgc4eRrfzRXfXisIzxUB03FQs%2Bjn0RXjYc0Bvf8EE913gSrSDmxMFqwqGrW%2F7O5JOv%2BvJm0nddmuUJ34AtgWwUSwy6O7pDO4CrjSqEqQzOgm367wnVF%2Bs4QgPTkoluUFo3mCJvRCQ9LM9PPw05t5HpVq6N%2FjRaegnmQZR1r0E%2BTYE2fmWHBa%2F%2BClgcQ0Erj54AuhOKql44p9J4OPy1ZA4D5rHdMKpVVjTMpi7rfOeij%2FmVHzCVRH7SeMjNyqcprXrHMFKEMbbtxu1LOftg07NLO1KuUHAhtqRj4DVGYRITC1xBCjTunjtvZWy7nYakpO%2FkK8V4UFddiWVGLiqO0upFUwMzkHBuDAvbn%2Bzk1wSgt%2Ftqz2EbKHySqDZTavejCSmOLEBjqkATe8SrtOjM4kx85FHqQnip7UAW8cFax4RK%2FrI%2FNn2fCFUP7xVlKIUtbt0vMeSNeFrCd3xWYFFdd25k2MA0hF3ZvpC1j%2BeYQjwwb2vY5XKxLqYKTKhVsZ9ElXRKVcDZPey8NhURRXRhVIGyu5L6MmCLU6vmdivGLDqRPS9iMCWrxw1%2BMlQgF9U5%2BE%2FCQfplKxN28VK%2Bgd3%2FUG0MO5BnMVhNc1phxs&X-Amz-Signature=3823b7a13eccf309a4f89a237e130c624556500f064b0b53aa97c1e5688ca2cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZSDNZ4O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B6hUnkYt5c87y7G8P17Gu0pxh4TavHbtSF9tgiOXWgAIhAIj0h5eXn6DNGseFh1FuGjVqQdfSxke4AeiU%2FOEyzhkxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJvqYcwNRoKWEJr54q3APxZrgFaE0alYT%2F%2FWVKhVvrjlzsHuDmYtvDW%2FkmDqpjiPSeCk3NkbGbGZR7dv0NKti1foU0SWugubstfyX2DaUD%2Fw5OvooKA55SbsqKRRh0ET0CXiWK%2BcvWFztc%2BQ4m25FHUrxIzWNWAksyzc83trbHc2Lvz2AvtI5jgLWwm8L78IXUI2Egtj09RT696M3LPIQZATHxBVUk7QIVqxZ09TJeJg5ZzB3C2LOv99tCPgkv74J8ZYyntf1Bt7kQ1WGROgc4eRrfzRXfXisIzxUB03FQs%2Bjn0RXjYc0Bvf8EE913gSrSDmxMFqwqGrW%2F7O5JOv%2BvJm0nddmuUJ34AtgWwUSwy6O7pDO4CrjSqEqQzOgm367wnVF%2Bs4QgPTkoluUFo3mCJvRCQ9LM9PPw05t5HpVq6N%2FjRaegnmQZR1r0E%2BTYE2fmWHBa%2F%2BClgcQ0Erj54AuhOKql44p9J4OPy1ZA4D5rHdMKpVVjTMpi7rfOeij%2FmVHzCVRH7SeMjNyqcprXrHMFKEMbbtxu1LOftg07NLO1KuUHAhtqRj4DVGYRITC1xBCjTunjtvZWy7nYakpO%2FkK8V4UFddiWVGLiqO0upFUwMzkHBuDAvbn%2Bzk1wSgt%2Ftqz2EbKHySqDZTavejCSmOLEBjqkATe8SrtOjM4kx85FHqQnip7UAW8cFax4RK%2FrI%2FNn2fCFUP7xVlKIUtbt0vMeSNeFrCd3xWYFFdd25k2MA0hF3ZvpC1j%2BeYQjwwb2vY5XKxLqYKTKhVsZ9ElXRKVcDZPey8NhURRXRhVIGyu5L6MmCLU6vmdivGLDqRPS9iMCWrxw1%2BMlQgF9U5%2BE%2FCQfplKxN28VK%2Bgd3%2FUG0MO5BnMVhNc1phxs&X-Amz-Signature=edea7dcce0f291a8ea339fd172bedf7196afb2e16a433cde281385218edb6817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZSDNZ4O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B6hUnkYt5c87y7G8P17Gu0pxh4TavHbtSF9tgiOXWgAIhAIj0h5eXn6DNGseFh1FuGjVqQdfSxke4AeiU%2FOEyzhkxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJvqYcwNRoKWEJr54q3APxZrgFaE0alYT%2F%2FWVKhVvrjlzsHuDmYtvDW%2FkmDqpjiPSeCk3NkbGbGZR7dv0NKti1foU0SWugubstfyX2DaUD%2Fw5OvooKA55SbsqKRRh0ET0CXiWK%2BcvWFztc%2BQ4m25FHUrxIzWNWAksyzc83trbHc2Lvz2AvtI5jgLWwm8L78IXUI2Egtj09RT696M3LPIQZATHxBVUk7QIVqxZ09TJeJg5ZzB3C2LOv99tCPgkv74J8ZYyntf1Bt7kQ1WGROgc4eRrfzRXfXisIzxUB03FQs%2Bjn0RXjYc0Bvf8EE913gSrSDmxMFqwqGrW%2F7O5JOv%2BvJm0nddmuUJ34AtgWwUSwy6O7pDO4CrjSqEqQzOgm367wnVF%2Bs4QgPTkoluUFo3mCJvRCQ9LM9PPw05t5HpVq6N%2FjRaegnmQZR1r0E%2BTYE2fmWHBa%2F%2BClgcQ0Erj54AuhOKql44p9J4OPy1ZA4D5rHdMKpVVjTMpi7rfOeij%2FmVHzCVRH7SeMjNyqcprXrHMFKEMbbtxu1LOftg07NLO1KuUHAhtqRj4DVGYRITC1xBCjTunjtvZWy7nYakpO%2FkK8V4UFddiWVGLiqO0upFUwMzkHBuDAvbn%2Bzk1wSgt%2Ftqz2EbKHySqDZTavejCSmOLEBjqkATe8SrtOjM4kx85FHqQnip7UAW8cFax4RK%2FrI%2FNn2fCFUP7xVlKIUtbt0vMeSNeFrCd3xWYFFdd25k2MA0hF3ZvpC1j%2BeYQjwwb2vY5XKxLqYKTKhVsZ9ElXRKVcDZPey8NhURRXRhVIGyu5L6MmCLU6vmdivGLDqRPS9iMCWrxw1%2BMlQgF9U5%2BE%2FCQfplKxN28VK%2Bgd3%2FUG0MO5BnMVhNc1phxs&X-Amz-Signature=29cdfe86171903134f2098ccbb89fed32b2f0d998f7b6b82babd7f3a82f3535d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZSDNZ4O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B6hUnkYt5c87y7G8P17Gu0pxh4TavHbtSF9tgiOXWgAIhAIj0h5eXn6DNGseFh1FuGjVqQdfSxke4AeiU%2FOEyzhkxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJvqYcwNRoKWEJr54q3APxZrgFaE0alYT%2F%2FWVKhVvrjlzsHuDmYtvDW%2FkmDqpjiPSeCk3NkbGbGZR7dv0NKti1foU0SWugubstfyX2DaUD%2Fw5OvooKA55SbsqKRRh0ET0CXiWK%2BcvWFztc%2BQ4m25FHUrxIzWNWAksyzc83trbHc2Lvz2AvtI5jgLWwm8L78IXUI2Egtj09RT696M3LPIQZATHxBVUk7QIVqxZ09TJeJg5ZzB3C2LOv99tCPgkv74J8ZYyntf1Bt7kQ1WGROgc4eRrfzRXfXisIzxUB03FQs%2Bjn0RXjYc0Bvf8EE913gSrSDmxMFqwqGrW%2F7O5JOv%2BvJm0nddmuUJ34AtgWwUSwy6O7pDO4CrjSqEqQzOgm367wnVF%2Bs4QgPTkoluUFo3mCJvRCQ9LM9PPw05t5HpVq6N%2FjRaegnmQZR1r0E%2BTYE2fmWHBa%2F%2BClgcQ0Erj54AuhOKql44p9J4OPy1ZA4D5rHdMKpVVjTMpi7rfOeij%2FmVHzCVRH7SeMjNyqcprXrHMFKEMbbtxu1LOftg07NLO1KuUHAhtqRj4DVGYRITC1xBCjTunjtvZWy7nYakpO%2FkK8V4UFddiWVGLiqO0upFUwMzkHBuDAvbn%2Bzk1wSgt%2Ftqz2EbKHySqDZTavejCSmOLEBjqkATe8SrtOjM4kx85FHqQnip7UAW8cFax4RK%2FrI%2FNn2fCFUP7xVlKIUtbt0vMeSNeFrCd3xWYFFdd25k2MA0hF3ZvpC1j%2BeYQjwwb2vY5XKxLqYKTKhVsZ9ElXRKVcDZPey8NhURRXRhVIGyu5L6MmCLU6vmdivGLDqRPS9iMCWrxw1%2BMlQgF9U5%2BE%2FCQfplKxN28VK%2Bgd3%2FUG0MO5BnMVhNc1phxs&X-Amz-Signature=ba776eae040f6d79e9c50786c45c2f8b34a0e888a966794fc1503b16146a749c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZSDNZ4O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B6hUnkYt5c87y7G8P17Gu0pxh4TavHbtSF9tgiOXWgAIhAIj0h5eXn6DNGseFh1FuGjVqQdfSxke4AeiU%2FOEyzhkxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJvqYcwNRoKWEJr54q3APxZrgFaE0alYT%2F%2FWVKhVvrjlzsHuDmYtvDW%2FkmDqpjiPSeCk3NkbGbGZR7dv0NKti1foU0SWugubstfyX2DaUD%2Fw5OvooKA55SbsqKRRh0ET0CXiWK%2BcvWFztc%2BQ4m25FHUrxIzWNWAksyzc83trbHc2Lvz2AvtI5jgLWwm8L78IXUI2Egtj09RT696M3LPIQZATHxBVUk7QIVqxZ09TJeJg5ZzB3C2LOv99tCPgkv74J8ZYyntf1Bt7kQ1WGROgc4eRrfzRXfXisIzxUB03FQs%2Bjn0RXjYc0Bvf8EE913gSrSDmxMFqwqGrW%2F7O5JOv%2BvJm0nddmuUJ34AtgWwUSwy6O7pDO4CrjSqEqQzOgm367wnVF%2Bs4QgPTkoluUFo3mCJvRCQ9LM9PPw05t5HpVq6N%2FjRaegnmQZR1r0E%2BTYE2fmWHBa%2F%2BClgcQ0Erj54AuhOKql44p9J4OPy1ZA4D5rHdMKpVVjTMpi7rfOeij%2FmVHzCVRH7SeMjNyqcprXrHMFKEMbbtxu1LOftg07NLO1KuUHAhtqRj4DVGYRITC1xBCjTunjtvZWy7nYakpO%2FkK8V4UFddiWVGLiqO0upFUwMzkHBuDAvbn%2Bzk1wSgt%2Ftqz2EbKHySqDZTavejCSmOLEBjqkATe8SrtOjM4kx85FHqQnip7UAW8cFax4RK%2FrI%2FNn2fCFUP7xVlKIUtbt0vMeSNeFrCd3xWYFFdd25k2MA0hF3ZvpC1j%2BeYQjwwb2vY5XKxLqYKTKhVsZ9ElXRKVcDZPey8NhURRXRhVIGyu5L6MmCLU6vmdivGLDqRPS9iMCWrxw1%2BMlQgF9U5%2BE%2FCQfplKxN28VK%2Bgd3%2FUG0MO5BnMVhNc1phxs&X-Amz-Signature=3d9241fafb18116f507b3e92aa0ae65d3608dadc94ab66dbaa25157a94d65488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZSDNZ4O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B6hUnkYt5c87y7G8P17Gu0pxh4TavHbtSF9tgiOXWgAIhAIj0h5eXn6DNGseFh1FuGjVqQdfSxke4AeiU%2FOEyzhkxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJvqYcwNRoKWEJr54q3APxZrgFaE0alYT%2F%2FWVKhVvrjlzsHuDmYtvDW%2FkmDqpjiPSeCk3NkbGbGZR7dv0NKti1foU0SWugubstfyX2DaUD%2Fw5OvooKA55SbsqKRRh0ET0CXiWK%2BcvWFztc%2BQ4m25FHUrxIzWNWAksyzc83trbHc2Lvz2AvtI5jgLWwm8L78IXUI2Egtj09RT696M3LPIQZATHxBVUk7QIVqxZ09TJeJg5ZzB3C2LOv99tCPgkv74J8ZYyntf1Bt7kQ1WGROgc4eRrfzRXfXisIzxUB03FQs%2Bjn0RXjYc0Bvf8EE913gSrSDmxMFqwqGrW%2F7O5JOv%2BvJm0nddmuUJ34AtgWwUSwy6O7pDO4CrjSqEqQzOgm367wnVF%2Bs4QgPTkoluUFo3mCJvRCQ9LM9PPw05t5HpVq6N%2FjRaegnmQZR1r0E%2BTYE2fmWHBa%2F%2BClgcQ0Erj54AuhOKql44p9J4OPy1ZA4D5rHdMKpVVjTMpi7rfOeij%2FmVHzCVRH7SeMjNyqcprXrHMFKEMbbtxu1LOftg07NLO1KuUHAhtqRj4DVGYRITC1xBCjTunjtvZWy7nYakpO%2FkK8V4UFddiWVGLiqO0upFUwMzkHBuDAvbn%2Bzk1wSgt%2Ftqz2EbKHySqDZTavejCSmOLEBjqkATe8SrtOjM4kx85FHqQnip7UAW8cFax4RK%2FrI%2FNn2fCFUP7xVlKIUtbt0vMeSNeFrCd3xWYFFdd25k2MA0hF3ZvpC1j%2BeYQjwwb2vY5XKxLqYKTKhVsZ9ElXRKVcDZPey8NhURRXRhVIGyu5L6MmCLU6vmdivGLDqRPS9iMCWrxw1%2BMlQgF9U5%2BE%2FCQfplKxN28VK%2Bgd3%2FUG0MO5BnMVhNc1phxs&X-Amz-Signature=10956d2345b776c6b9681b79dd9c34e25b896876d8399a4942c4e82f1631d04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZSDNZ4O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B6hUnkYt5c87y7G8P17Gu0pxh4TavHbtSF9tgiOXWgAIhAIj0h5eXn6DNGseFh1FuGjVqQdfSxke4AeiU%2FOEyzhkxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJvqYcwNRoKWEJr54q3APxZrgFaE0alYT%2F%2FWVKhVvrjlzsHuDmYtvDW%2FkmDqpjiPSeCk3NkbGbGZR7dv0NKti1foU0SWugubstfyX2DaUD%2Fw5OvooKA55SbsqKRRh0ET0CXiWK%2BcvWFztc%2BQ4m25FHUrxIzWNWAksyzc83trbHc2Lvz2AvtI5jgLWwm8L78IXUI2Egtj09RT696M3LPIQZATHxBVUk7QIVqxZ09TJeJg5ZzB3C2LOv99tCPgkv74J8ZYyntf1Bt7kQ1WGROgc4eRrfzRXfXisIzxUB03FQs%2Bjn0RXjYc0Bvf8EE913gSrSDmxMFqwqGrW%2F7O5JOv%2BvJm0nddmuUJ34AtgWwUSwy6O7pDO4CrjSqEqQzOgm367wnVF%2Bs4QgPTkoluUFo3mCJvRCQ9LM9PPw05t5HpVq6N%2FjRaegnmQZR1r0E%2BTYE2fmWHBa%2F%2BClgcQ0Erj54AuhOKql44p9J4OPy1ZA4D5rHdMKpVVjTMpi7rfOeij%2FmVHzCVRH7SeMjNyqcprXrHMFKEMbbtxu1LOftg07NLO1KuUHAhtqRj4DVGYRITC1xBCjTunjtvZWy7nYakpO%2FkK8V4UFddiWVGLiqO0upFUwMzkHBuDAvbn%2Bzk1wSgt%2Ftqz2EbKHySqDZTavejCSmOLEBjqkATe8SrtOjM4kx85FHqQnip7UAW8cFax4RK%2FrI%2FNn2fCFUP7xVlKIUtbt0vMeSNeFrCd3xWYFFdd25k2MA0hF3ZvpC1j%2BeYQjwwb2vY5XKxLqYKTKhVsZ9ElXRKVcDZPey8NhURRXRhVIGyu5L6MmCLU6vmdivGLDqRPS9iMCWrxw1%2BMlQgF9U5%2BE%2FCQfplKxN28VK%2Bgd3%2FUG0MO5BnMVhNc1phxs&X-Amz-Signature=5ecb3d7c826e675be55c68e3e90443a7fe40a6170d9a7539cd45a38898a0aa4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZSDNZ4O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B6hUnkYt5c87y7G8P17Gu0pxh4TavHbtSF9tgiOXWgAIhAIj0h5eXn6DNGseFh1FuGjVqQdfSxke4AeiU%2FOEyzhkxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJvqYcwNRoKWEJr54q3APxZrgFaE0alYT%2F%2FWVKhVvrjlzsHuDmYtvDW%2FkmDqpjiPSeCk3NkbGbGZR7dv0NKti1foU0SWugubstfyX2DaUD%2Fw5OvooKA55SbsqKRRh0ET0CXiWK%2BcvWFztc%2BQ4m25FHUrxIzWNWAksyzc83trbHc2Lvz2AvtI5jgLWwm8L78IXUI2Egtj09RT696M3LPIQZATHxBVUk7QIVqxZ09TJeJg5ZzB3C2LOv99tCPgkv74J8ZYyntf1Bt7kQ1WGROgc4eRrfzRXfXisIzxUB03FQs%2Bjn0RXjYc0Bvf8EE913gSrSDmxMFqwqGrW%2F7O5JOv%2BvJm0nddmuUJ34AtgWwUSwy6O7pDO4CrjSqEqQzOgm367wnVF%2Bs4QgPTkoluUFo3mCJvRCQ9LM9PPw05t5HpVq6N%2FjRaegnmQZR1r0E%2BTYE2fmWHBa%2F%2BClgcQ0Erj54AuhOKql44p9J4OPy1ZA4D5rHdMKpVVjTMpi7rfOeij%2FmVHzCVRH7SeMjNyqcprXrHMFKEMbbtxu1LOftg07NLO1KuUHAhtqRj4DVGYRITC1xBCjTunjtvZWy7nYakpO%2FkK8V4UFddiWVGLiqO0upFUwMzkHBuDAvbn%2Bzk1wSgt%2Ftqz2EbKHySqDZTavejCSmOLEBjqkATe8SrtOjM4kx85FHqQnip7UAW8cFax4RK%2FrI%2FNn2fCFUP7xVlKIUtbt0vMeSNeFrCd3xWYFFdd25k2MA0hF3ZvpC1j%2BeYQjwwb2vY5XKxLqYKTKhVsZ9ElXRKVcDZPey8NhURRXRhVIGyu5L6MmCLU6vmdivGLDqRPS9iMCWrxw1%2BMlQgF9U5%2BE%2FCQfplKxN28VK%2Bgd3%2FUG0MO5BnMVhNc1phxs&X-Amz-Signature=6ed56a9f83a391b5fda2fa25e1ac8ea9d658c5e655e6e2d138e9ebb7cac0ce7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZSDNZ4O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B6hUnkYt5c87y7G8P17Gu0pxh4TavHbtSF9tgiOXWgAIhAIj0h5eXn6DNGseFh1FuGjVqQdfSxke4AeiU%2FOEyzhkxKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJvqYcwNRoKWEJr54q3APxZrgFaE0alYT%2F%2FWVKhVvrjlzsHuDmYtvDW%2FkmDqpjiPSeCk3NkbGbGZR7dv0NKti1foU0SWugubstfyX2DaUD%2Fw5OvooKA55SbsqKRRh0ET0CXiWK%2BcvWFztc%2BQ4m25FHUrxIzWNWAksyzc83trbHc2Lvz2AvtI5jgLWwm8L78IXUI2Egtj09RT696M3LPIQZATHxBVUk7QIVqxZ09TJeJg5ZzB3C2LOv99tCPgkv74J8ZYyntf1Bt7kQ1WGROgc4eRrfzRXfXisIzxUB03FQs%2Bjn0RXjYc0Bvf8EE913gSrSDmxMFqwqGrW%2F7O5JOv%2BvJm0nddmuUJ34AtgWwUSwy6O7pDO4CrjSqEqQzOgm367wnVF%2Bs4QgPTkoluUFo3mCJvRCQ9LM9PPw05t5HpVq6N%2FjRaegnmQZR1r0E%2BTYE2fmWHBa%2F%2BClgcQ0Erj54AuhOKql44p9J4OPy1ZA4D5rHdMKpVVjTMpi7rfOeij%2FmVHzCVRH7SeMjNyqcprXrHMFKEMbbtxu1LOftg07NLO1KuUHAhtqRj4DVGYRITC1xBCjTunjtvZWy7nYakpO%2FkK8V4UFddiWVGLiqO0upFUwMzkHBuDAvbn%2Bzk1wSgt%2Ftqz2EbKHySqDZTavejCSmOLEBjqkATe8SrtOjM4kx85FHqQnip7UAW8cFax4RK%2FrI%2FNn2fCFUP7xVlKIUtbt0vMeSNeFrCd3xWYFFdd25k2MA0hF3ZvpC1j%2BeYQjwwb2vY5XKxLqYKTKhVsZ9ElXRKVcDZPey8NhURRXRhVIGyu5L6MmCLU6vmdivGLDqRPS9iMCWrxw1%2BMlQgF9U5%2BE%2FCQfplKxN28VK%2Bgd3%2FUG0MO5BnMVhNc1phxs&X-Amz-Signature=3f43ce7fa978508f573eaf9862c0b9013ccc6da5c93e390f364d7acf805e6f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
