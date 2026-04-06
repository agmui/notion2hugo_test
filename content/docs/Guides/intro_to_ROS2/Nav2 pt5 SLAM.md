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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU236WN%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BhfVkuT6C4W2gmd9p%2BcxaFKhATthk%2BCSuOWCDHJ2Z4gIgTvwgtMxyxVRqKExWLIyPPFSJE0eT0oHJFJz5k8xCuowqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUNG0uMtXzQSLFwoircA06fFo8M3Co9o8eyMAlOTsozu%2FSz2CDad3omX2kZzutjZp7oZeDdVHbD8D2Dl3Ig%2Fw4vcx%2B3le5zNcdeSzW7urSKVWQ80i4VvNDldhnscFnWZyFqvhVIgEz15PfKn0GLaUQSrtwpE28hJok59s0Kk8ybVoFEbMmjHAMwg2DOcfVL%2FWubHsykq6q%2FjwePdzNExhuzwDyRNskPhNXdmqp8iJKkm9ePX8stmcN%2FROgmRc8CvxHbhyWyfKRJfV0o%2FjwSQEzJ0devhEGggRqhAJ7ncVVp7DGcO3vJ1vUeBjpgfr%2F%2FuD%2Bf9iso6xC3PTFQ7vZmK4eNhylE47aAiMhNDiTI1y%2F0ub9JPTv9A3skQa8Op05wWcPrTwqnIKPBFgEKmTyWlaU%2BS44gr9S89do4%2FY2rPM6LJmIvnH6hzRKiTgl3E%2Fzwb8vx00dK%2FBG1Wiu0K9QZrYPFhYe5X%2BM41%2FRa5nYIbSTHgRV9%2ByQOeZFLk%2FomTjMEh8MfIhgbly6w9O9VbtFZMnMVuTGUnF0OMqfdX79CAwVyxMRqxAYGQomtzYJjb8fPx1bd87RzzjdKetIB7Gcj2FYqPKDEZpcsXlwRZlIOQ5zOgiO%2Bk0nzSWMAUnc8c%2FSCI6xTxpviUuNKPpRGMMavzM4GOqUBVt2fD7cuBuHKLYPg4zGCWOQoMwtFJeXXVNv%2BEKlI9b%2BHRrL2A1lA4MqPUfL%2FrvINXx2KEjaSc05GeBpQmMmFYbKy59QEPMqMCIQlf46GF8%2F0OX3%2BQl%2BhWRBBkYhRj%2B8UQPV1LipbryuV0nYmjdIrV03C20PMBA8c5BYnUgpnEVffzH9EFAXyy2yLbvhaU1BEJxCneQskInUD4ub9%2BHPPIYLmCYIn&X-Amz-Signature=c9b07674d898bed0551d901d1fbd9e4d5536e978bfe6fc7b92f4e1edf492ccde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU236WN%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BhfVkuT6C4W2gmd9p%2BcxaFKhATthk%2BCSuOWCDHJ2Z4gIgTvwgtMxyxVRqKExWLIyPPFSJE0eT0oHJFJz5k8xCuowqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUNG0uMtXzQSLFwoircA06fFo8M3Co9o8eyMAlOTsozu%2FSz2CDad3omX2kZzutjZp7oZeDdVHbD8D2Dl3Ig%2Fw4vcx%2B3le5zNcdeSzW7urSKVWQ80i4VvNDldhnscFnWZyFqvhVIgEz15PfKn0GLaUQSrtwpE28hJok59s0Kk8ybVoFEbMmjHAMwg2DOcfVL%2FWubHsykq6q%2FjwePdzNExhuzwDyRNskPhNXdmqp8iJKkm9ePX8stmcN%2FROgmRc8CvxHbhyWyfKRJfV0o%2FjwSQEzJ0devhEGggRqhAJ7ncVVp7DGcO3vJ1vUeBjpgfr%2F%2FuD%2Bf9iso6xC3PTFQ7vZmK4eNhylE47aAiMhNDiTI1y%2F0ub9JPTv9A3skQa8Op05wWcPrTwqnIKPBFgEKmTyWlaU%2BS44gr9S89do4%2FY2rPM6LJmIvnH6hzRKiTgl3E%2Fzwb8vx00dK%2FBG1Wiu0K9QZrYPFhYe5X%2BM41%2FRa5nYIbSTHgRV9%2ByQOeZFLk%2FomTjMEh8MfIhgbly6w9O9VbtFZMnMVuTGUnF0OMqfdX79CAwVyxMRqxAYGQomtzYJjb8fPx1bd87RzzjdKetIB7Gcj2FYqPKDEZpcsXlwRZlIOQ5zOgiO%2Bk0nzSWMAUnc8c%2FSCI6xTxpviUuNKPpRGMMavzM4GOqUBVt2fD7cuBuHKLYPg4zGCWOQoMwtFJeXXVNv%2BEKlI9b%2BHRrL2A1lA4MqPUfL%2FrvINXx2KEjaSc05GeBpQmMmFYbKy59QEPMqMCIQlf46GF8%2F0OX3%2BQl%2BhWRBBkYhRj%2B8UQPV1LipbryuV0nYmjdIrV03C20PMBA8c5BYnUgpnEVffzH9EFAXyy2yLbvhaU1BEJxCneQskInUD4ub9%2BHPPIYLmCYIn&X-Amz-Signature=9c3b510079b6cc9859c584df4297f8b2a3f35167ba459c0f75de32eadb9e7892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU236WN%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BhfVkuT6C4W2gmd9p%2BcxaFKhATthk%2BCSuOWCDHJ2Z4gIgTvwgtMxyxVRqKExWLIyPPFSJE0eT0oHJFJz5k8xCuowqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUNG0uMtXzQSLFwoircA06fFo8M3Co9o8eyMAlOTsozu%2FSz2CDad3omX2kZzutjZp7oZeDdVHbD8D2Dl3Ig%2Fw4vcx%2B3le5zNcdeSzW7urSKVWQ80i4VvNDldhnscFnWZyFqvhVIgEz15PfKn0GLaUQSrtwpE28hJok59s0Kk8ybVoFEbMmjHAMwg2DOcfVL%2FWubHsykq6q%2FjwePdzNExhuzwDyRNskPhNXdmqp8iJKkm9ePX8stmcN%2FROgmRc8CvxHbhyWyfKRJfV0o%2FjwSQEzJ0devhEGggRqhAJ7ncVVp7DGcO3vJ1vUeBjpgfr%2F%2FuD%2Bf9iso6xC3PTFQ7vZmK4eNhylE47aAiMhNDiTI1y%2F0ub9JPTv9A3skQa8Op05wWcPrTwqnIKPBFgEKmTyWlaU%2BS44gr9S89do4%2FY2rPM6LJmIvnH6hzRKiTgl3E%2Fzwb8vx00dK%2FBG1Wiu0K9QZrYPFhYe5X%2BM41%2FRa5nYIbSTHgRV9%2ByQOeZFLk%2FomTjMEh8MfIhgbly6w9O9VbtFZMnMVuTGUnF0OMqfdX79CAwVyxMRqxAYGQomtzYJjb8fPx1bd87RzzjdKetIB7Gcj2FYqPKDEZpcsXlwRZlIOQ5zOgiO%2Bk0nzSWMAUnc8c%2FSCI6xTxpviUuNKPpRGMMavzM4GOqUBVt2fD7cuBuHKLYPg4zGCWOQoMwtFJeXXVNv%2BEKlI9b%2BHRrL2A1lA4MqPUfL%2FrvINXx2KEjaSc05GeBpQmMmFYbKy59QEPMqMCIQlf46GF8%2F0OX3%2BQl%2BhWRBBkYhRj%2B8UQPV1LipbryuV0nYmjdIrV03C20PMBA8c5BYnUgpnEVffzH9EFAXyy2yLbvhaU1BEJxCneQskInUD4ub9%2BHPPIYLmCYIn&X-Amz-Signature=3e17614bf6f4c39da19d9093fa0c66debc9430d62fbcf2fca88aea6307584a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU236WN%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BhfVkuT6C4W2gmd9p%2BcxaFKhATthk%2BCSuOWCDHJ2Z4gIgTvwgtMxyxVRqKExWLIyPPFSJE0eT0oHJFJz5k8xCuowqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUNG0uMtXzQSLFwoircA06fFo8M3Co9o8eyMAlOTsozu%2FSz2CDad3omX2kZzutjZp7oZeDdVHbD8D2Dl3Ig%2Fw4vcx%2B3le5zNcdeSzW7urSKVWQ80i4VvNDldhnscFnWZyFqvhVIgEz15PfKn0GLaUQSrtwpE28hJok59s0Kk8ybVoFEbMmjHAMwg2DOcfVL%2FWubHsykq6q%2FjwePdzNExhuzwDyRNskPhNXdmqp8iJKkm9ePX8stmcN%2FROgmRc8CvxHbhyWyfKRJfV0o%2FjwSQEzJ0devhEGggRqhAJ7ncVVp7DGcO3vJ1vUeBjpgfr%2F%2FuD%2Bf9iso6xC3PTFQ7vZmK4eNhylE47aAiMhNDiTI1y%2F0ub9JPTv9A3skQa8Op05wWcPrTwqnIKPBFgEKmTyWlaU%2BS44gr9S89do4%2FY2rPM6LJmIvnH6hzRKiTgl3E%2Fzwb8vx00dK%2FBG1Wiu0K9QZrYPFhYe5X%2BM41%2FRa5nYIbSTHgRV9%2ByQOeZFLk%2FomTjMEh8MfIhgbly6w9O9VbtFZMnMVuTGUnF0OMqfdX79CAwVyxMRqxAYGQomtzYJjb8fPx1bd87RzzjdKetIB7Gcj2FYqPKDEZpcsXlwRZlIOQ5zOgiO%2Bk0nzSWMAUnc8c%2FSCI6xTxpviUuNKPpRGMMavzM4GOqUBVt2fD7cuBuHKLYPg4zGCWOQoMwtFJeXXVNv%2BEKlI9b%2BHRrL2A1lA4MqPUfL%2FrvINXx2KEjaSc05GeBpQmMmFYbKy59QEPMqMCIQlf46GF8%2F0OX3%2BQl%2BhWRBBkYhRj%2B8UQPV1LipbryuV0nYmjdIrV03C20PMBA8c5BYnUgpnEVffzH9EFAXyy2yLbvhaU1BEJxCneQskInUD4ub9%2BHPPIYLmCYIn&X-Amz-Signature=97481e43303377b26ca51c23fe3ebc44486d032a27b592455ea4cc4ec30f4013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU236WN%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BhfVkuT6C4W2gmd9p%2BcxaFKhATthk%2BCSuOWCDHJ2Z4gIgTvwgtMxyxVRqKExWLIyPPFSJE0eT0oHJFJz5k8xCuowqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUNG0uMtXzQSLFwoircA06fFo8M3Co9o8eyMAlOTsozu%2FSz2CDad3omX2kZzutjZp7oZeDdVHbD8D2Dl3Ig%2Fw4vcx%2B3le5zNcdeSzW7urSKVWQ80i4VvNDldhnscFnWZyFqvhVIgEz15PfKn0GLaUQSrtwpE28hJok59s0Kk8ybVoFEbMmjHAMwg2DOcfVL%2FWubHsykq6q%2FjwePdzNExhuzwDyRNskPhNXdmqp8iJKkm9ePX8stmcN%2FROgmRc8CvxHbhyWyfKRJfV0o%2FjwSQEzJ0devhEGggRqhAJ7ncVVp7DGcO3vJ1vUeBjpgfr%2F%2FuD%2Bf9iso6xC3PTFQ7vZmK4eNhylE47aAiMhNDiTI1y%2F0ub9JPTv9A3skQa8Op05wWcPrTwqnIKPBFgEKmTyWlaU%2BS44gr9S89do4%2FY2rPM6LJmIvnH6hzRKiTgl3E%2Fzwb8vx00dK%2FBG1Wiu0K9QZrYPFhYe5X%2BM41%2FRa5nYIbSTHgRV9%2ByQOeZFLk%2FomTjMEh8MfIhgbly6w9O9VbtFZMnMVuTGUnF0OMqfdX79CAwVyxMRqxAYGQomtzYJjb8fPx1bd87RzzjdKetIB7Gcj2FYqPKDEZpcsXlwRZlIOQ5zOgiO%2Bk0nzSWMAUnc8c%2FSCI6xTxpviUuNKPpRGMMavzM4GOqUBVt2fD7cuBuHKLYPg4zGCWOQoMwtFJeXXVNv%2BEKlI9b%2BHRrL2A1lA4MqPUfL%2FrvINXx2KEjaSc05GeBpQmMmFYbKy59QEPMqMCIQlf46GF8%2F0OX3%2BQl%2BhWRBBkYhRj%2B8UQPV1LipbryuV0nYmjdIrV03C20PMBA8c5BYnUgpnEVffzH9EFAXyy2yLbvhaU1BEJxCneQskInUD4ub9%2BHPPIYLmCYIn&X-Amz-Signature=6c62804f9bee05f99c1588cb02312d847f1bc7ac4e3585ff5d74d8e88807c6d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU236WN%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BhfVkuT6C4W2gmd9p%2BcxaFKhATthk%2BCSuOWCDHJ2Z4gIgTvwgtMxyxVRqKExWLIyPPFSJE0eT0oHJFJz5k8xCuowqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUNG0uMtXzQSLFwoircA06fFo8M3Co9o8eyMAlOTsozu%2FSz2CDad3omX2kZzutjZp7oZeDdVHbD8D2Dl3Ig%2Fw4vcx%2B3le5zNcdeSzW7urSKVWQ80i4VvNDldhnscFnWZyFqvhVIgEz15PfKn0GLaUQSrtwpE28hJok59s0Kk8ybVoFEbMmjHAMwg2DOcfVL%2FWubHsykq6q%2FjwePdzNExhuzwDyRNskPhNXdmqp8iJKkm9ePX8stmcN%2FROgmRc8CvxHbhyWyfKRJfV0o%2FjwSQEzJ0devhEGggRqhAJ7ncVVp7DGcO3vJ1vUeBjpgfr%2F%2FuD%2Bf9iso6xC3PTFQ7vZmK4eNhylE47aAiMhNDiTI1y%2F0ub9JPTv9A3skQa8Op05wWcPrTwqnIKPBFgEKmTyWlaU%2BS44gr9S89do4%2FY2rPM6LJmIvnH6hzRKiTgl3E%2Fzwb8vx00dK%2FBG1Wiu0K9QZrYPFhYe5X%2BM41%2FRa5nYIbSTHgRV9%2ByQOeZFLk%2FomTjMEh8MfIhgbly6w9O9VbtFZMnMVuTGUnF0OMqfdX79CAwVyxMRqxAYGQomtzYJjb8fPx1bd87RzzjdKetIB7Gcj2FYqPKDEZpcsXlwRZlIOQ5zOgiO%2Bk0nzSWMAUnc8c%2FSCI6xTxpviUuNKPpRGMMavzM4GOqUBVt2fD7cuBuHKLYPg4zGCWOQoMwtFJeXXVNv%2BEKlI9b%2BHRrL2A1lA4MqPUfL%2FrvINXx2KEjaSc05GeBpQmMmFYbKy59QEPMqMCIQlf46GF8%2F0OX3%2BQl%2BhWRBBkYhRj%2B8UQPV1LipbryuV0nYmjdIrV03C20PMBA8c5BYnUgpnEVffzH9EFAXyy2yLbvhaU1BEJxCneQskInUD4ub9%2BHPPIYLmCYIn&X-Amz-Signature=5ad77118c6a621624213023af76827013049c52bc065bbabd5b71d4edff67808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU236WN%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BhfVkuT6C4W2gmd9p%2BcxaFKhATthk%2BCSuOWCDHJ2Z4gIgTvwgtMxyxVRqKExWLIyPPFSJE0eT0oHJFJz5k8xCuowqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUNG0uMtXzQSLFwoircA06fFo8M3Co9o8eyMAlOTsozu%2FSz2CDad3omX2kZzutjZp7oZeDdVHbD8D2Dl3Ig%2Fw4vcx%2B3le5zNcdeSzW7urSKVWQ80i4VvNDldhnscFnWZyFqvhVIgEz15PfKn0GLaUQSrtwpE28hJok59s0Kk8ybVoFEbMmjHAMwg2DOcfVL%2FWubHsykq6q%2FjwePdzNExhuzwDyRNskPhNXdmqp8iJKkm9ePX8stmcN%2FROgmRc8CvxHbhyWyfKRJfV0o%2FjwSQEzJ0devhEGggRqhAJ7ncVVp7DGcO3vJ1vUeBjpgfr%2F%2FuD%2Bf9iso6xC3PTFQ7vZmK4eNhylE47aAiMhNDiTI1y%2F0ub9JPTv9A3skQa8Op05wWcPrTwqnIKPBFgEKmTyWlaU%2BS44gr9S89do4%2FY2rPM6LJmIvnH6hzRKiTgl3E%2Fzwb8vx00dK%2FBG1Wiu0K9QZrYPFhYe5X%2BM41%2FRa5nYIbSTHgRV9%2ByQOeZFLk%2FomTjMEh8MfIhgbly6w9O9VbtFZMnMVuTGUnF0OMqfdX79CAwVyxMRqxAYGQomtzYJjb8fPx1bd87RzzjdKetIB7Gcj2FYqPKDEZpcsXlwRZlIOQ5zOgiO%2Bk0nzSWMAUnc8c%2FSCI6xTxpviUuNKPpRGMMavzM4GOqUBVt2fD7cuBuHKLYPg4zGCWOQoMwtFJeXXVNv%2BEKlI9b%2BHRrL2A1lA4MqPUfL%2FrvINXx2KEjaSc05GeBpQmMmFYbKy59QEPMqMCIQlf46GF8%2F0OX3%2BQl%2BhWRBBkYhRj%2B8UQPV1LipbryuV0nYmjdIrV03C20PMBA8c5BYnUgpnEVffzH9EFAXyy2yLbvhaU1BEJxCneQskInUD4ub9%2BHPPIYLmCYIn&X-Amz-Signature=7d8562b90689431a664d47c72b8bd9622e59cff2a6de0c173a517a3bee93a00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU236WN%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BhfVkuT6C4W2gmd9p%2BcxaFKhATthk%2BCSuOWCDHJ2Z4gIgTvwgtMxyxVRqKExWLIyPPFSJE0eT0oHJFJz5k8xCuowqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUNG0uMtXzQSLFwoircA06fFo8M3Co9o8eyMAlOTsozu%2FSz2CDad3omX2kZzutjZp7oZeDdVHbD8D2Dl3Ig%2Fw4vcx%2B3le5zNcdeSzW7urSKVWQ80i4VvNDldhnscFnWZyFqvhVIgEz15PfKn0GLaUQSrtwpE28hJok59s0Kk8ybVoFEbMmjHAMwg2DOcfVL%2FWubHsykq6q%2FjwePdzNExhuzwDyRNskPhNXdmqp8iJKkm9ePX8stmcN%2FROgmRc8CvxHbhyWyfKRJfV0o%2FjwSQEzJ0devhEGggRqhAJ7ncVVp7DGcO3vJ1vUeBjpgfr%2F%2FuD%2Bf9iso6xC3PTFQ7vZmK4eNhylE47aAiMhNDiTI1y%2F0ub9JPTv9A3skQa8Op05wWcPrTwqnIKPBFgEKmTyWlaU%2BS44gr9S89do4%2FY2rPM6LJmIvnH6hzRKiTgl3E%2Fzwb8vx00dK%2FBG1Wiu0K9QZrYPFhYe5X%2BM41%2FRa5nYIbSTHgRV9%2ByQOeZFLk%2FomTjMEh8MfIhgbly6w9O9VbtFZMnMVuTGUnF0OMqfdX79CAwVyxMRqxAYGQomtzYJjb8fPx1bd87RzzjdKetIB7Gcj2FYqPKDEZpcsXlwRZlIOQ5zOgiO%2Bk0nzSWMAUnc8c%2FSCI6xTxpviUuNKPpRGMMavzM4GOqUBVt2fD7cuBuHKLYPg4zGCWOQoMwtFJeXXVNv%2BEKlI9b%2BHRrL2A1lA4MqPUfL%2FrvINXx2KEjaSc05GeBpQmMmFYbKy59QEPMqMCIQlf46GF8%2F0OX3%2BQl%2BhWRBBkYhRj%2B8UQPV1LipbryuV0nYmjdIrV03C20PMBA8c5BYnUgpnEVffzH9EFAXyy2yLbvhaU1BEJxCneQskInUD4ub9%2BHPPIYLmCYIn&X-Amz-Signature=4850e2c90ed73ab5d39b799053a799e4208f729a71735d3eb2018ffabca9cd53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU236WN%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BhfVkuT6C4W2gmd9p%2BcxaFKhATthk%2BCSuOWCDHJ2Z4gIgTvwgtMxyxVRqKExWLIyPPFSJE0eT0oHJFJz5k8xCuowqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUNG0uMtXzQSLFwoircA06fFo8M3Co9o8eyMAlOTsozu%2FSz2CDad3omX2kZzutjZp7oZeDdVHbD8D2Dl3Ig%2Fw4vcx%2B3le5zNcdeSzW7urSKVWQ80i4VvNDldhnscFnWZyFqvhVIgEz15PfKn0GLaUQSrtwpE28hJok59s0Kk8ybVoFEbMmjHAMwg2DOcfVL%2FWubHsykq6q%2FjwePdzNExhuzwDyRNskPhNXdmqp8iJKkm9ePX8stmcN%2FROgmRc8CvxHbhyWyfKRJfV0o%2FjwSQEzJ0devhEGggRqhAJ7ncVVp7DGcO3vJ1vUeBjpgfr%2F%2FuD%2Bf9iso6xC3PTFQ7vZmK4eNhylE47aAiMhNDiTI1y%2F0ub9JPTv9A3skQa8Op05wWcPrTwqnIKPBFgEKmTyWlaU%2BS44gr9S89do4%2FY2rPM6LJmIvnH6hzRKiTgl3E%2Fzwb8vx00dK%2FBG1Wiu0K9QZrYPFhYe5X%2BM41%2FRa5nYIbSTHgRV9%2ByQOeZFLk%2FomTjMEh8MfIhgbly6w9O9VbtFZMnMVuTGUnF0OMqfdX79CAwVyxMRqxAYGQomtzYJjb8fPx1bd87RzzjdKetIB7Gcj2FYqPKDEZpcsXlwRZlIOQ5zOgiO%2Bk0nzSWMAUnc8c%2FSCI6xTxpviUuNKPpRGMMavzM4GOqUBVt2fD7cuBuHKLYPg4zGCWOQoMwtFJeXXVNv%2BEKlI9b%2BHRrL2A1lA4MqPUfL%2FrvINXx2KEjaSc05GeBpQmMmFYbKy59QEPMqMCIQlf46GF8%2F0OX3%2BQl%2BhWRBBkYhRj%2B8UQPV1LipbryuV0nYmjdIrV03C20PMBA8c5BYnUgpnEVffzH9EFAXyy2yLbvhaU1BEJxCneQskInUD4ub9%2BHPPIYLmCYIn&X-Amz-Signature=f5c6d6f8ed33c776e3b78d8e8bf5654f8e1f3d191cb7ba1cefff231ecb54f9d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU236WN%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BhfVkuT6C4W2gmd9p%2BcxaFKhATthk%2BCSuOWCDHJ2Z4gIgTvwgtMxyxVRqKExWLIyPPFSJE0eT0oHJFJz5k8xCuowqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUNG0uMtXzQSLFwoircA06fFo8M3Co9o8eyMAlOTsozu%2FSz2CDad3omX2kZzutjZp7oZeDdVHbD8D2Dl3Ig%2Fw4vcx%2B3le5zNcdeSzW7urSKVWQ80i4VvNDldhnscFnWZyFqvhVIgEz15PfKn0GLaUQSrtwpE28hJok59s0Kk8ybVoFEbMmjHAMwg2DOcfVL%2FWubHsykq6q%2FjwePdzNExhuzwDyRNskPhNXdmqp8iJKkm9ePX8stmcN%2FROgmRc8CvxHbhyWyfKRJfV0o%2FjwSQEzJ0devhEGggRqhAJ7ncVVp7DGcO3vJ1vUeBjpgfr%2F%2FuD%2Bf9iso6xC3PTFQ7vZmK4eNhylE47aAiMhNDiTI1y%2F0ub9JPTv9A3skQa8Op05wWcPrTwqnIKPBFgEKmTyWlaU%2BS44gr9S89do4%2FY2rPM6LJmIvnH6hzRKiTgl3E%2Fzwb8vx00dK%2FBG1Wiu0K9QZrYPFhYe5X%2BM41%2FRa5nYIbSTHgRV9%2ByQOeZFLk%2FomTjMEh8MfIhgbly6w9O9VbtFZMnMVuTGUnF0OMqfdX79CAwVyxMRqxAYGQomtzYJjb8fPx1bd87RzzjdKetIB7Gcj2FYqPKDEZpcsXlwRZlIOQ5zOgiO%2Bk0nzSWMAUnc8c%2FSCI6xTxpviUuNKPpRGMMavzM4GOqUBVt2fD7cuBuHKLYPg4zGCWOQoMwtFJeXXVNv%2BEKlI9b%2BHRrL2A1lA4MqPUfL%2FrvINXx2KEjaSc05GeBpQmMmFYbKy59QEPMqMCIQlf46GF8%2F0OX3%2BQl%2BhWRBBkYhRj%2B8UQPV1LipbryuV0nYmjdIrV03C20PMBA8c5BYnUgpnEVffzH9EFAXyy2yLbvhaU1BEJxCneQskInUD4ub9%2BHPPIYLmCYIn&X-Amz-Signature=767eb4c54aace1a105aa98b5617624aa602ebb01a5521299118109af0514ff18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU236WN%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BhfVkuT6C4W2gmd9p%2BcxaFKhATthk%2BCSuOWCDHJ2Z4gIgTvwgtMxyxVRqKExWLIyPPFSJE0eT0oHJFJz5k8xCuowqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUNG0uMtXzQSLFwoircA06fFo8M3Co9o8eyMAlOTsozu%2FSz2CDad3omX2kZzutjZp7oZeDdVHbD8D2Dl3Ig%2Fw4vcx%2B3le5zNcdeSzW7urSKVWQ80i4VvNDldhnscFnWZyFqvhVIgEz15PfKn0GLaUQSrtwpE28hJok59s0Kk8ybVoFEbMmjHAMwg2DOcfVL%2FWubHsykq6q%2FjwePdzNExhuzwDyRNskPhNXdmqp8iJKkm9ePX8stmcN%2FROgmRc8CvxHbhyWyfKRJfV0o%2FjwSQEzJ0devhEGggRqhAJ7ncVVp7DGcO3vJ1vUeBjpgfr%2F%2FuD%2Bf9iso6xC3PTFQ7vZmK4eNhylE47aAiMhNDiTI1y%2F0ub9JPTv9A3skQa8Op05wWcPrTwqnIKPBFgEKmTyWlaU%2BS44gr9S89do4%2FY2rPM6LJmIvnH6hzRKiTgl3E%2Fzwb8vx00dK%2FBG1Wiu0K9QZrYPFhYe5X%2BM41%2FRa5nYIbSTHgRV9%2ByQOeZFLk%2FomTjMEh8MfIhgbly6w9O9VbtFZMnMVuTGUnF0OMqfdX79CAwVyxMRqxAYGQomtzYJjb8fPx1bd87RzzjdKetIB7Gcj2FYqPKDEZpcsXlwRZlIOQ5zOgiO%2Bk0nzSWMAUnc8c%2FSCI6xTxpviUuNKPpRGMMavzM4GOqUBVt2fD7cuBuHKLYPg4zGCWOQoMwtFJeXXVNv%2BEKlI9b%2BHRrL2A1lA4MqPUfL%2FrvINXx2KEjaSc05GeBpQmMmFYbKy59QEPMqMCIQlf46GF8%2F0OX3%2BQl%2BhWRBBkYhRj%2B8UQPV1LipbryuV0nYmjdIrV03C20PMBA8c5BYnUgpnEVffzH9EFAXyy2yLbvhaU1BEJxCneQskInUD4ub9%2BHPPIYLmCYIn&X-Amz-Signature=6dc07a65193c17a5b6b4a1a42b58f2df30479087c1f3a1ffdd32ad47c0cd18c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU236WN%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BhfVkuT6C4W2gmd9p%2BcxaFKhATthk%2BCSuOWCDHJ2Z4gIgTvwgtMxyxVRqKExWLIyPPFSJE0eT0oHJFJz5k8xCuowqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUNG0uMtXzQSLFwoircA06fFo8M3Co9o8eyMAlOTsozu%2FSz2CDad3omX2kZzutjZp7oZeDdVHbD8D2Dl3Ig%2Fw4vcx%2B3le5zNcdeSzW7urSKVWQ80i4VvNDldhnscFnWZyFqvhVIgEz15PfKn0GLaUQSrtwpE28hJok59s0Kk8ybVoFEbMmjHAMwg2DOcfVL%2FWubHsykq6q%2FjwePdzNExhuzwDyRNskPhNXdmqp8iJKkm9ePX8stmcN%2FROgmRc8CvxHbhyWyfKRJfV0o%2FjwSQEzJ0devhEGggRqhAJ7ncVVp7DGcO3vJ1vUeBjpgfr%2F%2FuD%2Bf9iso6xC3PTFQ7vZmK4eNhylE47aAiMhNDiTI1y%2F0ub9JPTv9A3skQa8Op05wWcPrTwqnIKPBFgEKmTyWlaU%2BS44gr9S89do4%2FY2rPM6LJmIvnH6hzRKiTgl3E%2Fzwb8vx00dK%2FBG1Wiu0K9QZrYPFhYe5X%2BM41%2FRa5nYIbSTHgRV9%2ByQOeZFLk%2FomTjMEh8MfIhgbly6w9O9VbtFZMnMVuTGUnF0OMqfdX79CAwVyxMRqxAYGQomtzYJjb8fPx1bd87RzzjdKetIB7Gcj2FYqPKDEZpcsXlwRZlIOQ5zOgiO%2Bk0nzSWMAUnc8c%2FSCI6xTxpviUuNKPpRGMMavzM4GOqUBVt2fD7cuBuHKLYPg4zGCWOQoMwtFJeXXVNv%2BEKlI9b%2BHRrL2A1lA4MqPUfL%2FrvINXx2KEjaSc05GeBpQmMmFYbKy59QEPMqMCIQlf46GF8%2F0OX3%2BQl%2BhWRBBkYhRj%2B8UQPV1LipbryuV0nYmjdIrV03C20PMBA8c5BYnUgpnEVffzH9EFAXyy2yLbvhaU1BEJxCneQskInUD4ub9%2BHPPIYLmCYIn&X-Amz-Signature=3dc09c835d799ce71c04d73a04dad4db9dd06016c1ea39cd3870bb339075e5a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU236WN%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BhfVkuT6C4W2gmd9p%2BcxaFKhATthk%2BCSuOWCDHJ2Z4gIgTvwgtMxyxVRqKExWLIyPPFSJE0eT0oHJFJz5k8xCuowqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUNG0uMtXzQSLFwoircA06fFo8M3Co9o8eyMAlOTsozu%2FSz2CDad3omX2kZzutjZp7oZeDdVHbD8D2Dl3Ig%2Fw4vcx%2B3le5zNcdeSzW7urSKVWQ80i4VvNDldhnscFnWZyFqvhVIgEz15PfKn0GLaUQSrtwpE28hJok59s0Kk8ybVoFEbMmjHAMwg2DOcfVL%2FWubHsykq6q%2FjwePdzNExhuzwDyRNskPhNXdmqp8iJKkm9ePX8stmcN%2FROgmRc8CvxHbhyWyfKRJfV0o%2FjwSQEzJ0devhEGggRqhAJ7ncVVp7DGcO3vJ1vUeBjpgfr%2F%2FuD%2Bf9iso6xC3PTFQ7vZmK4eNhylE47aAiMhNDiTI1y%2F0ub9JPTv9A3skQa8Op05wWcPrTwqnIKPBFgEKmTyWlaU%2BS44gr9S89do4%2FY2rPM6LJmIvnH6hzRKiTgl3E%2Fzwb8vx00dK%2FBG1Wiu0K9QZrYPFhYe5X%2BM41%2FRa5nYIbSTHgRV9%2ByQOeZFLk%2FomTjMEh8MfIhgbly6w9O9VbtFZMnMVuTGUnF0OMqfdX79CAwVyxMRqxAYGQomtzYJjb8fPx1bd87RzzjdKetIB7Gcj2FYqPKDEZpcsXlwRZlIOQ5zOgiO%2Bk0nzSWMAUnc8c%2FSCI6xTxpviUuNKPpRGMMavzM4GOqUBVt2fD7cuBuHKLYPg4zGCWOQoMwtFJeXXVNv%2BEKlI9b%2BHRrL2A1lA4MqPUfL%2FrvINXx2KEjaSc05GeBpQmMmFYbKy59QEPMqMCIQlf46GF8%2F0OX3%2BQl%2BhWRBBkYhRj%2B8UQPV1LipbryuV0nYmjdIrV03C20PMBA8c5BYnUgpnEVffzH9EFAXyy2yLbvhaU1BEJxCneQskInUD4ub9%2BHPPIYLmCYIn&X-Amz-Signature=3c2779c24a72d267a594c13c8a22765840541b7d514831f1d8fc26796f362bd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU236WN%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BhfVkuT6C4W2gmd9p%2BcxaFKhATthk%2BCSuOWCDHJ2Z4gIgTvwgtMxyxVRqKExWLIyPPFSJE0eT0oHJFJz5k8xCuowqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUNG0uMtXzQSLFwoircA06fFo8M3Co9o8eyMAlOTsozu%2FSz2CDad3omX2kZzutjZp7oZeDdVHbD8D2Dl3Ig%2Fw4vcx%2B3le5zNcdeSzW7urSKVWQ80i4VvNDldhnscFnWZyFqvhVIgEz15PfKn0GLaUQSrtwpE28hJok59s0Kk8ybVoFEbMmjHAMwg2DOcfVL%2FWubHsykq6q%2FjwePdzNExhuzwDyRNskPhNXdmqp8iJKkm9ePX8stmcN%2FROgmRc8CvxHbhyWyfKRJfV0o%2FjwSQEzJ0devhEGggRqhAJ7ncVVp7DGcO3vJ1vUeBjpgfr%2F%2FuD%2Bf9iso6xC3PTFQ7vZmK4eNhylE47aAiMhNDiTI1y%2F0ub9JPTv9A3skQa8Op05wWcPrTwqnIKPBFgEKmTyWlaU%2BS44gr9S89do4%2FY2rPM6LJmIvnH6hzRKiTgl3E%2Fzwb8vx00dK%2FBG1Wiu0K9QZrYPFhYe5X%2BM41%2FRa5nYIbSTHgRV9%2ByQOeZFLk%2FomTjMEh8MfIhgbly6w9O9VbtFZMnMVuTGUnF0OMqfdX79CAwVyxMRqxAYGQomtzYJjb8fPx1bd87RzzjdKetIB7Gcj2FYqPKDEZpcsXlwRZlIOQ5zOgiO%2Bk0nzSWMAUnc8c%2FSCI6xTxpviUuNKPpRGMMavzM4GOqUBVt2fD7cuBuHKLYPg4zGCWOQoMwtFJeXXVNv%2BEKlI9b%2BHRrL2A1lA4MqPUfL%2FrvINXx2KEjaSc05GeBpQmMmFYbKy59QEPMqMCIQlf46GF8%2F0OX3%2BQl%2BhWRBBkYhRj%2B8UQPV1LipbryuV0nYmjdIrV03C20PMBA8c5BYnUgpnEVffzH9EFAXyy2yLbvhaU1BEJxCneQskInUD4ub9%2BHPPIYLmCYIn&X-Amz-Signature=c60d7a7c05bb2c50708e97ef95067639c6c3ce0f44790c5b6c5fa3b6331bf41a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
