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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZPVWP3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPEUH9%2BaZFSkmQtlKyKKFNggc2iiaBBDxQpUbCKgSKGAIgSSz5kdUnU2a3xx3QfIb3PnKdJdQQbdKFbY%2B6xdnPAkkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdzaK%2B%2FdzV4MIOzYCrcA7PoEVklLsnWGfJiqGb7Cf2LKJdLqQ7Ty2dRzJsprdbM3PWW%2FrFjIITWAhm0t0AU9T39x%2Bv8v7utt0vn8%2BczqfAlfCCUOG2QJsfjTFD7Vb2XLf78pzu62QJ%2FPiYnxEVZ02vQ0LqMVhe3SsoNvAzzBfqdPFG1iaS0KhHanzpa9%2FujWtVrjqXX%2Fmlrszo90hItWS0ZU3N%2BBBtMyE%2F9wR0gn5ob9kwnsMzn%2BDVN9FaF2xRbyEVs9rAp29VGJAz3V0q8SV78HOvr5REHJatisBKUk2bC13ybyxndoKs4eI7HJfdPUqch5%2FSt1IYNHS8dqY3Rv8okNfjI%2Bc3tdm2R6OgvJw3mDuD6Wz8FCuXNcBwYLA%2Bu97vRZPEfqMk7xtQihgUNRHxBD1JQEQqWxFvSJKtJMbqP4hXuXs9iuJ1uuRcrglr7qJULoZd9MQpqmLUxjo5%2FQmNWETGioH6mMqzpK4N5SSoa6D6%2BYjJf5P6NGnZEx1YC9bSNtkOhInGCgr3SdcFT4Eox82xFGxzbnIShY1eg7TXx%2F5H5xUSeHT1uiFNs%2BGZ9cYCvLN9KGrnhkrxII7iphQYiRqsuIdZKK6bdKgLPL2qm9tAQG6XMkXKvsZOOirRlJSG5fPs3CgHsyHc8MLX90skGOqUBeD315Qbaw9JrHfxIA9AsPWEHIcU5JnI%2ByhzNnY8qBv2dbjzgPCdyXEcjsCdgTk7bBm%2BM8X5PbqwlX%2FLcSFrafUJYj%2B7PBF06rP36SLU1yfL63dhgnliDm6AAHqNA2CH2pYWWdldPUqk78%2FBVBJk1K8ZuZrw0GNO77DdH1qpSd4yaQArDFal3vohQyEkIY9oYgoqA1M47YgZXsUh56sVvaJyeDkyO&X-Amz-Signature=bbbc13723bb80f55f5b4aeeeeb978da0df40d620efc7e7aa2c17fa7820d1a0d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZPVWP3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPEUH9%2BaZFSkmQtlKyKKFNggc2iiaBBDxQpUbCKgSKGAIgSSz5kdUnU2a3xx3QfIb3PnKdJdQQbdKFbY%2B6xdnPAkkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdzaK%2B%2FdzV4MIOzYCrcA7PoEVklLsnWGfJiqGb7Cf2LKJdLqQ7Ty2dRzJsprdbM3PWW%2FrFjIITWAhm0t0AU9T39x%2Bv8v7utt0vn8%2BczqfAlfCCUOG2QJsfjTFD7Vb2XLf78pzu62QJ%2FPiYnxEVZ02vQ0LqMVhe3SsoNvAzzBfqdPFG1iaS0KhHanzpa9%2FujWtVrjqXX%2Fmlrszo90hItWS0ZU3N%2BBBtMyE%2F9wR0gn5ob9kwnsMzn%2BDVN9FaF2xRbyEVs9rAp29VGJAz3V0q8SV78HOvr5REHJatisBKUk2bC13ybyxndoKs4eI7HJfdPUqch5%2FSt1IYNHS8dqY3Rv8okNfjI%2Bc3tdm2R6OgvJw3mDuD6Wz8FCuXNcBwYLA%2Bu97vRZPEfqMk7xtQihgUNRHxBD1JQEQqWxFvSJKtJMbqP4hXuXs9iuJ1uuRcrglr7qJULoZd9MQpqmLUxjo5%2FQmNWETGioH6mMqzpK4N5SSoa6D6%2BYjJf5P6NGnZEx1YC9bSNtkOhInGCgr3SdcFT4Eox82xFGxzbnIShY1eg7TXx%2F5H5xUSeHT1uiFNs%2BGZ9cYCvLN9KGrnhkrxII7iphQYiRqsuIdZKK6bdKgLPL2qm9tAQG6XMkXKvsZOOirRlJSG5fPs3CgHsyHc8MLX90skGOqUBeD315Qbaw9JrHfxIA9AsPWEHIcU5JnI%2ByhzNnY8qBv2dbjzgPCdyXEcjsCdgTk7bBm%2BM8X5PbqwlX%2FLcSFrafUJYj%2B7PBF06rP36SLU1yfL63dhgnliDm6AAHqNA2CH2pYWWdldPUqk78%2FBVBJk1K8ZuZrw0GNO77DdH1qpSd4yaQArDFal3vohQyEkIY9oYgoqA1M47YgZXsUh56sVvaJyeDkyO&X-Amz-Signature=ca9609179953962964eb4eed6a4e7b275e123bf81cb4db6fb7f4469933ecd58b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZPVWP3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPEUH9%2BaZFSkmQtlKyKKFNggc2iiaBBDxQpUbCKgSKGAIgSSz5kdUnU2a3xx3QfIb3PnKdJdQQbdKFbY%2B6xdnPAkkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdzaK%2B%2FdzV4MIOzYCrcA7PoEVklLsnWGfJiqGb7Cf2LKJdLqQ7Ty2dRzJsprdbM3PWW%2FrFjIITWAhm0t0AU9T39x%2Bv8v7utt0vn8%2BczqfAlfCCUOG2QJsfjTFD7Vb2XLf78pzu62QJ%2FPiYnxEVZ02vQ0LqMVhe3SsoNvAzzBfqdPFG1iaS0KhHanzpa9%2FujWtVrjqXX%2Fmlrszo90hItWS0ZU3N%2BBBtMyE%2F9wR0gn5ob9kwnsMzn%2BDVN9FaF2xRbyEVs9rAp29VGJAz3V0q8SV78HOvr5REHJatisBKUk2bC13ybyxndoKs4eI7HJfdPUqch5%2FSt1IYNHS8dqY3Rv8okNfjI%2Bc3tdm2R6OgvJw3mDuD6Wz8FCuXNcBwYLA%2Bu97vRZPEfqMk7xtQihgUNRHxBD1JQEQqWxFvSJKtJMbqP4hXuXs9iuJ1uuRcrglr7qJULoZd9MQpqmLUxjo5%2FQmNWETGioH6mMqzpK4N5SSoa6D6%2BYjJf5P6NGnZEx1YC9bSNtkOhInGCgr3SdcFT4Eox82xFGxzbnIShY1eg7TXx%2F5H5xUSeHT1uiFNs%2BGZ9cYCvLN9KGrnhkrxII7iphQYiRqsuIdZKK6bdKgLPL2qm9tAQG6XMkXKvsZOOirRlJSG5fPs3CgHsyHc8MLX90skGOqUBeD315Qbaw9JrHfxIA9AsPWEHIcU5JnI%2ByhzNnY8qBv2dbjzgPCdyXEcjsCdgTk7bBm%2BM8X5PbqwlX%2FLcSFrafUJYj%2B7PBF06rP36SLU1yfL63dhgnliDm6AAHqNA2CH2pYWWdldPUqk78%2FBVBJk1K8ZuZrw0GNO77DdH1qpSd4yaQArDFal3vohQyEkIY9oYgoqA1M47YgZXsUh56sVvaJyeDkyO&X-Amz-Signature=4b40e10f12091115f6a8fa2614eb57db39f055869e00dffb163913c10e3d5278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZPVWP3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPEUH9%2BaZFSkmQtlKyKKFNggc2iiaBBDxQpUbCKgSKGAIgSSz5kdUnU2a3xx3QfIb3PnKdJdQQbdKFbY%2B6xdnPAkkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdzaK%2B%2FdzV4MIOzYCrcA7PoEVklLsnWGfJiqGb7Cf2LKJdLqQ7Ty2dRzJsprdbM3PWW%2FrFjIITWAhm0t0AU9T39x%2Bv8v7utt0vn8%2BczqfAlfCCUOG2QJsfjTFD7Vb2XLf78pzu62QJ%2FPiYnxEVZ02vQ0LqMVhe3SsoNvAzzBfqdPFG1iaS0KhHanzpa9%2FujWtVrjqXX%2Fmlrszo90hItWS0ZU3N%2BBBtMyE%2F9wR0gn5ob9kwnsMzn%2BDVN9FaF2xRbyEVs9rAp29VGJAz3V0q8SV78HOvr5REHJatisBKUk2bC13ybyxndoKs4eI7HJfdPUqch5%2FSt1IYNHS8dqY3Rv8okNfjI%2Bc3tdm2R6OgvJw3mDuD6Wz8FCuXNcBwYLA%2Bu97vRZPEfqMk7xtQihgUNRHxBD1JQEQqWxFvSJKtJMbqP4hXuXs9iuJ1uuRcrglr7qJULoZd9MQpqmLUxjo5%2FQmNWETGioH6mMqzpK4N5SSoa6D6%2BYjJf5P6NGnZEx1YC9bSNtkOhInGCgr3SdcFT4Eox82xFGxzbnIShY1eg7TXx%2F5H5xUSeHT1uiFNs%2BGZ9cYCvLN9KGrnhkrxII7iphQYiRqsuIdZKK6bdKgLPL2qm9tAQG6XMkXKvsZOOirRlJSG5fPs3CgHsyHc8MLX90skGOqUBeD315Qbaw9JrHfxIA9AsPWEHIcU5JnI%2ByhzNnY8qBv2dbjzgPCdyXEcjsCdgTk7bBm%2BM8X5PbqwlX%2FLcSFrafUJYj%2B7PBF06rP36SLU1yfL63dhgnliDm6AAHqNA2CH2pYWWdldPUqk78%2FBVBJk1K8ZuZrw0GNO77DdH1qpSd4yaQArDFal3vohQyEkIY9oYgoqA1M47YgZXsUh56sVvaJyeDkyO&X-Amz-Signature=90d4f1b29c8d7a2cb5bd2b292cd6ae7cb76c1ac6216e2078df11b4a2b0eaaecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZPVWP3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPEUH9%2BaZFSkmQtlKyKKFNggc2iiaBBDxQpUbCKgSKGAIgSSz5kdUnU2a3xx3QfIb3PnKdJdQQbdKFbY%2B6xdnPAkkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdzaK%2B%2FdzV4MIOzYCrcA7PoEVklLsnWGfJiqGb7Cf2LKJdLqQ7Ty2dRzJsprdbM3PWW%2FrFjIITWAhm0t0AU9T39x%2Bv8v7utt0vn8%2BczqfAlfCCUOG2QJsfjTFD7Vb2XLf78pzu62QJ%2FPiYnxEVZ02vQ0LqMVhe3SsoNvAzzBfqdPFG1iaS0KhHanzpa9%2FujWtVrjqXX%2Fmlrszo90hItWS0ZU3N%2BBBtMyE%2F9wR0gn5ob9kwnsMzn%2BDVN9FaF2xRbyEVs9rAp29VGJAz3V0q8SV78HOvr5REHJatisBKUk2bC13ybyxndoKs4eI7HJfdPUqch5%2FSt1IYNHS8dqY3Rv8okNfjI%2Bc3tdm2R6OgvJw3mDuD6Wz8FCuXNcBwYLA%2Bu97vRZPEfqMk7xtQihgUNRHxBD1JQEQqWxFvSJKtJMbqP4hXuXs9iuJ1uuRcrglr7qJULoZd9MQpqmLUxjo5%2FQmNWETGioH6mMqzpK4N5SSoa6D6%2BYjJf5P6NGnZEx1YC9bSNtkOhInGCgr3SdcFT4Eox82xFGxzbnIShY1eg7TXx%2F5H5xUSeHT1uiFNs%2BGZ9cYCvLN9KGrnhkrxII7iphQYiRqsuIdZKK6bdKgLPL2qm9tAQG6XMkXKvsZOOirRlJSG5fPs3CgHsyHc8MLX90skGOqUBeD315Qbaw9JrHfxIA9AsPWEHIcU5JnI%2ByhzNnY8qBv2dbjzgPCdyXEcjsCdgTk7bBm%2BM8X5PbqwlX%2FLcSFrafUJYj%2B7PBF06rP36SLU1yfL63dhgnliDm6AAHqNA2CH2pYWWdldPUqk78%2FBVBJk1K8ZuZrw0GNO77DdH1qpSd4yaQArDFal3vohQyEkIY9oYgoqA1M47YgZXsUh56sVvaJyeDkyO&X-Amz-Signature=71225ab9c82099e6cf5ec990b8180222a4206fe440d3b9e198c6f1ea76f8c440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZPVWP3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPEUH9%2BaZFSkmQtlKyKKFNggc2iiaBBDxQpUbCKgSKGAIgSSz5kdUnU2a3xx3QfIb3PnKdJdQQbdKFbY%2B6xdnPAkkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdzaK%2B%2FdzV4MIOzYCrcA7PoEVklLsnWGfJiqGb7Cf2LKJdLqQ7Ty2dRzJsprdbM3PWW%2FrFjIITWAhm0t0AU9T39x%2Bv8v7utt0vn8%2BczqfAlfCCUOG2QJsfjTFD7Vb2XLf78pzu62QJ%2FPiYnxEVZ02vQ0LqMVhe3SsoNvAzzBfqdPFG1iaS0KhHanzpa9%2FujWtVrjqXX%2Fmlrszo90hItWS0ZU3N%2BBBtMyE%2F9wR0gn5ob9kwnsMzn%2BDVN9FaF2xRbyEVs9rAp29VGJAz3V0q8SV78HOvr5REHJatisBKUk2bC13ybyxndoKs4eI7HJfdPUqch5%2FSt1IYNHS8dqY3Rv8okNfjI%2Bc3tdm2R6OgvJw3mDuD6Wz8FCuXNcBwYLA%2Bu97vRZPEfqMk7xtQihgUNRHxBD1JQEQqWxFvSJKtJMbqP4hXuXs9iuJ1uuRcrglr7qJULoZd9MQpqmLUxjo5%2FQmNWETGioH6mMqzpK4N5SSoa6D6%2BYjJf5P6NGnZEx1YC9bSNtkOhInGCgr3SdcFT4Eox82xFGxzbnIShY1eg7TXx%2F5H5xUSeHT1uiFNs%2BGZ9cYCvLN9KGrnhkrxII7iphQYiRqsuIdZKK6bdKgLPL2qm9tAQG6XMkXKvsZOOirRlJSG5fPs3CgHsyHc8MLX90skGOqUBeD315Qbaw9JrHfxIA9AsPWEHIcU5JnI%2ByhzNnY8qBv2dbjzgPCdyXEcjsCdgTk7bBm%2BM8X5PbqwlX%2FLcSFrafUJYj%2B7PBF06rP36SLU1yfL63dhgnliDm6AAHqNA2CH2pYWWdldPUqk78%2FBVBJk1K8ZuZrw0GNO77DdH1qpSd4yaQArDFal3vohQyEkIY9oYgoqA1M47YgZXsUh56sVvaJyeDkyO&X-Amz-Signature=5bf583f32841497d97ce62d9a7220c35912c835330b6164126ef7d3abcc100a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZPVWP3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPEUH9%2BaZFSkmQtlKyKKFNggc2iiaBBDxQpUbCKgSKGAIgSSz5kdUnU2a3xx3QfIb3PnKdJdQQbdKFbY%2B6xdnPAkkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdzaK%2B%2FdzV4MIOzYCrcA7PoEVklLsnWGfJiqGb7Cf2LKJdLqQ7Ty2dRzJsprdbM3PWW%2FrFjIITWAhm0t0AU9T39x%2Bv8v7utt0vn8%2BczqfAlfCCUOG2QJsfjTFD7Vb2XLf78pzu62QJ%2FPiYnxEVZ02vQ0LqMVhe3SsoNvAzzBfqdPFG1iaS0KhHanzpa9%2FujWtVrjqXX%2Fmlrszo90hItWS0ZU3N%2BBBtMyE%2F9wR0gn5ob9kwnsMzn%2BDVN9FaF2xRbyEVs9rAp29VGJAz3V0q8SV78HOvr5REHJatisBKUk2bC13ybyxndoKs4eI7HJfdPUqch5%2FSt1IYNHS8dqY3Rv8okNfjI%2Bc3tdm2R6OgvJw3mDuD6Wz8FCuXNcBwYLA%2Bu97vRZPEfqMk7xtQihgUNRHxBD1JQEQqWxFvSJKtJMbqP4hXuXs9iuJ1uuRcrglr7qJULoZd9MQpqmLUxjo5%2FQmNWETGioH6mMqzpK4N5SSoa6D6%2BYjJf5P6NGnZEx1YC9bSNtkOhInGCgr3SdcFT4Eox82xFGxzbnIShY1eg7TXx%2F5H5xUSeHT1uiFNs%2BGZ9cYCvLN9KGrnhkrxII7iphQYiRqsuIdZKK6bdKgLPL2qm9tAQG6XMkXKvsZOOirRlJSG5fPs3CgHsyHc8MLX90skGOqUBeD315Qbaw9JrHfxIA9AsPWEHIcU5JnI%2ByhzNnY8qBv2dbjzgPCdyXEcjsCdgTk7bBm%2BM8X5PbqwlX%2FLcSFrafUJYj%2B7PBF06rP36SLU1yfL63dhgnliDm6AAHqNA2CH2pYWWdldPUqk78%2FBVBJk1K8ZuZrw0GNO77DdH1qpSd4yaQArDFal3vohQyEkIY9oYgoqA1M47YgZXsUh56sVvaJyeDkyO&X-Amz-Signature=5bf2cdf127274cc78fb2c6297872ef3b9562afbec2f08345adda33ee54b9d432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZPVWP3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPEUH9%2BaZFSkmQtlKyKKFNggc2iiaBBDxQpUbCKgSKGAIgSSz5kdUnU2a3xx3QfIb3PnKdJdQQbdKFbY%2B6xdnPAkkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdzaK%2B%2FdzV4MIOzYCrcA7PoEVklLsnWGfJiqGb7Cf2LKJdLqQ7Ty2dRzJsprdbM3PWW%2FrFjIITWAhm0t0AU9T39x%2Bv8v7utt0vn8%2BczqfAlfCCUOG2QJsfjTFD7Vb2XLf78pzu62QJ%2FPiYnxEVZ02vQ0LqMVhe3SsoNvAzzBfqdPFG1iaS0KhHanzpa9%2FujWtVrjqXX%2Fmlrszo90hItWS0ZU3N%2BBBtMyE%2F9wR0gn5ob9kwnsMzn%2BDVN9FaF2xRbyEVs9rAp29VGJAz3V0q8SV78HOvr5REHJatisBKUk2bC13ybyxndoKs4eI7HJfdPUqch5%2FSt1IYNHS8dqY3Rv8okNfjI%2Bc3tdm2R6OgvJw3mDuD6Wz8FCuXNcBwYLA%2Bu97vRZPEfqMk7xtQihgUNRHxBD1JQEQqWxFvSJKtJMbqP4hXuXs9iuJ1uuRcrglr7qJULoZd9MQpqmLUxjo5%2FQmNWETGioH6mMqzpK4N5SSoa6D6%2BYjJf5P6NGnZEx1YC9bSNtkOhInGCgr3SdcFT4Eox82xFGxzbnIShY1eg7TXx%2F5H5xUSeHT1uiFNs%2BGZ9cYCvLN9KGrnhkrxII7iphQYiRqsuIdZKK6bdKgLPL2qm9tAQG6XMkXKvsZOOirRlJSG5fPs3CgHsyHc8MLX90skGOqUBeD315Qbaw9JrHfxIA9AsPWEHIcU5JnI%2ByhzNnY8qBv2dbjzgPCdyXEcjsCdgTk7bBm%2BM8X5PbqwlX%2FLcSFrafUJYj%2B7PBF06rP36SLU1yfL63dhgnliDm6AAHqNA2CH2pYWWdldPUqk78%2FBVBJk1K8ZuZrw0GNO77DdH1qpSd4yaQArDFal3vohQyEkIY9oYgoqA1M47YgZXsUh56sVvaJyeDkyO&X-Amz-Signature=d3729f756c45fb07d03ddcbd20ff22b6b31389270caa6fd2387357c5323e2686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZPVWP3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPEUH9%2BaZFSkmQtlKyKKFNggc2iiaBBDxQpUbCKgSKGAIgSSz5kdUnU2a3xx3QfIb3PnKdJdQQbdKFbY%2B6xdnPAkkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdzaK%2B%2FdzV4MIOzYCrcA7PoEVklLsnWGfJiqGb7Cf2LKJdLqQ7Ty2dRzJsprdbM3PWW%2FrFjIITWAhm0t0AU9T39x%2Bv8v7utt0vn8%2BczqfAlfCCUOG2QJsfjTFD7Vb2XLf78pzu62QJ%2FPiYnxEVZ02vQ0LqMVhe3SsoNvAzzBfqdPFG1iaS0KhHanzpa9%2FujWtVrjqXX%2Fmlrszo90hItWS0ZU3N%2BBBtMyE%2F9wR0gn5ob9kwnsMzn%2BDVN9FaF2xRbyEVs9rAp29VGJAz3V0q8SV78HOvr5REHJatisBKUk2bC13ybyxndoKs4eI7HJfdPUqch5%2FSt1IYNHS8dqY3Rv8okNfjI%2Bc3tdm2R6OgvJw3mDuD6Wz8FCuXNcBwYLA%2Bu97vRZPEfqMk7xtQihgUNRHxBD1JQEQqWxFvSJKtJMbqP4hXuXs9iuJ1uuRcrglr7qJULoZd9MQpqmLUxjo5%2FQmNWETGioH6mMqzpK4N5SSoa6D6%2BYjJf5P6NGnZEx1YC9bSNtkOhInGCgr3SdcFT4Eox82xFGxzbnIShY1eg7TXx%2F5H5xUSeHT1uiFNs%2BGZ9cYCvLN9KGrnhkrxII7iphQYiRqsuIdZKK6bdKgLPL2qm9tAQG6XMkXKvsZOOirRlJSG5fPs3CgHsyHc8MLX90skGOqUBeD315Qbaw9JrHfxIA9AsPWEHIcU5JnI%2ByhzNnY8qBv2dbjzgPCdyXEcjsCdgTk7bBm%2BM8X5PbqwlX%2FLcSFrafUJYj%2B7PBF06rP36SLU1yfL63dhgnliDm6AAHqNA2CH2pYWWdldPUqk78%2FBVBJk1K8ZuZrw0GNO77DdH1qpSd4yaQArDFal3vohQyEkIY9oYgoqA1M47YgZXsUh56sVvaJyeDkyO&X-Amz-Signature=cdda6b529cb916a8abc8ddadd5fe7c3c82a81cc619868463aabaf44fbdfb7f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZPVWP3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPEUH9%2BaZFSkmQtlKyKKFNggc2iiaBBDxQpUbCKgSKGAIgSSz5kdUnU2a3xx3QfIb3PnKdJdQQbdKFbY%2B6xdnPAkkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdzaK%2B%2FdzV4MIOzYCrcA7PoEVklLsnWGfJiqGb7Cf2LKJdLqQ7Ty2dRzJsprdbM3PWW%2FrFjIITWAhm0t0AU9T39x%2Bv8v7utt0vn8%2BczqfAlfCCUOG2QJsfjTFD7Vb2XLf78pzu62QJ%2FPiYnxEVZ02vQ0LqMVhe3SsoNvAzzBfqdPFG1iaS0KhHanzpa9%2FujWtVrjqXX%2Fmlrszo90hItWS0ZU3N%2BBBtMyE%2F9wR0gn5ob9kwnsMzn%2BDVN9FaF2xRbyEVs9rAp29VGJAz3V0q8SV78HOvr5REHJatisBKUk2bC13ybyxndoKs4eI7HJfdPUqch5%2FSt1IYNHS8dqY3Rv8okNfjI%2Bc3tdm2R6OgvJw3mDuD6Wz8FCuXNcBwYLA%2Bu97vRZPEfqMk7xtQihgUNRHxBD1JQEQqWxFvSJKtJMbqP4hXuXs9iuJ1uuRcrglr7qJULoZd9MQpqmLUxjo5%2FQmNWETGioH6mMqzpK4N5SSoa6D6%2BYjJf5P6NGnZEx1YC9bSNtkOhInGCgr3SdcFT4Eox82xFGxzbnIShY1eg7TXx%2F5H5xUSeHT1uiFNs%2BGZ9cYCvLN9KGrnhkrxII7iphQYiRqsuIdZKK6bdKgLPL2qm9tAQG6XMkXKvsZOOirRlJSG5fPs3CgHsyHc8MLX90skGOqUBeD315Qbaw9JrHfxIA9AsPWEHIcU5JnI%2ByhzNnY8qBv2dbjzgPCdyXEcjsCdgTk7bBm%2BM8X5PbqwlX%2FLcSFrafUJYj%2B7PBF06rP36SLU1yfL63dhgnliDm6AAHqNA2CH2pYWWdldPUqk78%2FBVBJk1K8ZuZrw0GNO77DdH1qpSd4yaQArDFal3vohQyEkIY9oYgoqA1M47YgZXsUh56sVvaJyeDkyO&X-Amz-Signature=81cef9dacbc5f2d19750e2e16237e99473e271205fb510cfae4df949416277fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZPVWP3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPEUH9%2BaZFSkmQtlKyKKFNggc2iiaBBDxQpUbCKgSKGAIgSSz5kdUnU2a3xx3QfIb3PnKdJdQQbdKFbY%2B6xdnPAkkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdzaK%2B%2FdzV4MIOzYCrcA7PoEVklLsnWGfJiqGb7Cf2LKJdLqQ7Ty2dRzJsprdbM3PWW%2FrFjIITWAhm0t0AU9T39x%2Bv8v7utt0vn8%2BczqfAlfCCUOG2QJsfjTFD7Vb2XLf78pzu62QJ%2FPiYnxEVZ02vQ0LqMVhe3SsoNvAzzBfqdPFG1iaS0KhHanzpa9%2FujWtVrjqXX%2Fmlrszo90hItWS0ZU3N%2BBBtMyE%2F9wR0gn5ob9kwnsMzn%2BDVN9FaF2xRbyEVs9rAp29VGJAz3V0q8SV78HOvr5REHJatisBKUk2bC13ybyxndoKs4eI7HJfdPUqch5%2FSt1IYNHS8dqY3Rv8okNfjI%2Bc3tdm2R6OgvJw3mDuD6Wz8FCuXNcBwYLA%2Bu97vRZPEfqMk7xtQihgUNRHxBD1JQEQqWxFvSJKtJMbqP4hXuXs9iuJ1uuRcrglr7qJULoZd9MQpqmLUxjo5%2FQmNWETGioH6mMqzpK4N5SSoa6D6%2BYjJf5P6NGnZEx1YC9bSNtkOhInGCgr3SdcFT4Eox82xFGxzbnIShY1eg7TXx%2F5H5xUSeHT1uiFNs%2BGZ9cYCvLN9KGrnhkrxII7iphQYiRqsuIdZKK6bdKgLPL2qm9tAQG6XMkXKvsZOOirRlJSG5fPs3CgHsyHc8MLX90skGOqUBeD315Qbaw9JrHfxIA9AsPWEHIcU5JnI%2ByhzNnY8qBv2dbjzgPCdyXEcjsCdgTk7bBm%2BM8X5PbqwlX%2FLcSFrafUJYj%2B7PBF06rP36SLU1yfL63dhgnliDm6AAHqNA2CH2pYWWdldPUqk78%2FBVBJk1K8ZuZrw0GNO77DdH1qpSd4yaQArDFal3vohQyEkIY9oYgoqA1M47YgZXsUh56sVvaJyeDkyO&X-Amz-Signature=1942bd3420bce1717dbaf9ed4349049c21b207b12e79abf3cd60271299d11874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZPVWP3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPEUH9%2BaZFSkmQtlKyKKFNggc2iiaBBDxQpUbCKgSKGAIgSSz5kdUnU2a3xx3QfIb3PnKdJdQQbdKFbY%2B6xdnPAkkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdzaK%2B%2FdzV4MIOzYCrcA7PoEVklLsnWGfJiqGb7Cf2LKJdLqQ7Ty2dRzJsprdbM3PWW%2FrFjIITWAhm0t0AU9T39x%2Bv8v7utt0vn8%2BczqfAlfCCUOG2QJsfjTFD7Vb2XLf78pzu62QJ%2FPiYnxEVZ02vQ0LqMVhe3SsoNvAzzBfqdPFG1iaS0KhHanzpa9%2FujWtVrjqXX%2Fmlrszo90hItWS0ZU3N%2BBBtMyE%2F9wR0gn5ob9kwnsMzn%2BDVN9FaF2xRbyEVs9rAp29VGJAz3V0q8SV78HOvr5REHJatisBKUk2bC13ybyxndoKs4eI7HJfdPUqch5%2FSt1IYNHS8dqY3Rv8okNfjI%2Bc3tdm2R6OgvJw3mDuD6Wz8FCuXNcBwYLA%2Bu97vRZPEfqMk7xtQihgUNRHxBD1JQEQqWxFvSJKtJMbqP4hXuXs9iuJ1uuRcrglr7qJULoZd9MQpqmLUxjo5%2FQmNWETGioH6mMqzpK4N5SSoa6D6%2BYjJf5P6NGnZEx1YC9bSNtkOhInGCgr3SdcFT4Eox82xFGxzbnIShY1eg7TXx%2F5H5xUSeHT1uiFNs%2BGZ9cYCvLN9KGrnhkrxII7iphQYiRqsuIdZKK6bdKgLPL2qm9tAQG6XMkXKvsZOOirRlJSG5fPs3CgHsyHc8MLX90skGOqUBeD315Qbaw9JrHfxIA9AsPWEHIcU5JnI%2ByhzNnY8qBv2dbjzgPCdyXEcjsCdgTk7bBm%2BM8X5PbqwlX%2FLcSFrafUJYj%2B7PBF06rP36SLU1yfL63dhgnliDm6AAHqNA2CH2pYWWdldPUqk78%2FBVBJk1K8ZuZrw0GNO77DdH1qpSd4yaQArDFal3vohQyEkIY9oYgoqA1M47YgZXsUh56sVvaJyeDkyO&X-Amz-Signature=407bec50bf4c8199c73b204eb200baf3fe0f83fe26f15cbd7b5718b86ff3ab4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZPVWP3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPEUH9%2BaZFSkmQtlKyKKFNggc2iiaBBDxQpUbCKgSKGAIgSSz5kdUnU2a3xx3QfIb3PnKdJdQQbdKFbY%2B6xdnPAkkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdzaK%2B%2FdzV4MIOzYCrcA7PoEVklLsnWGfJiqGb7Cf2LKJdLqQ7Ty2dRzJsprdbM3PWW%2FrFjIITWAhm0t0AU9T39x%2Bv8v7utt0vn8%2BczqfAlfCCUOG2QJsfjTFD7Vb2XLf78pzu62QJ%2FPiYnxEVZ02vQ0LqMVhe3SsoNvAzzBfqdPFG1iaS0KhHanzpa9%2FujWtVrjqXX%2Fmlrszo90hItWS0ZU3N%2BBBtMyE%2F9wR0gn5ob9kwnsMzn%2BDVN9FaF2xRbyEVs9rAp29VGJAz3V0q8SV78HOvr5REHJatisBKUk2bC13ybyxndoKs4eI7HJfdPUqch5%2FSt1IYNHS8dqY3Rv8okNfjI%2Bc3tdm2R6OgvJw3mDuD6Wz8FCuXNcBwYLA%2Bu97vRZPEfqMk7xtQihgUNRHxBD1JQEQqWxFvSJKtJMbqP4hXuXs9iuJ1uuRcrglr7qJULoZd9MQpqmLUxjo5%2FQmNWETGioH6mMqzpK4N5SSoa6D6%2BYjJf5P6NGnZEx1YC9bSNtkOhInGCgr3SdcFT4Eox82xFGxzbnIShY1eg7TXx%2F5H5xUSeHT1uiFNs%2BGZ9cYCvLN9KGrnhkrxII7iphQYiRqsuIdZKK6bdKgLPL2qm9tAQG6XMkXKvsZOOirRlJSG5fPs3CgHsyHc8MLX90skGOqUBeD315Qbaw9JrHfxIA9AsPWEHIcU5JnI%2ByhzNnY8qBv2dbjzgPCdyXEcjsCdgTk7bBm%2BM8X5PbqwlX%2FLcSFrafUJYj%2B7PBF06rP36SLU1yfL63dhgnliDm6AAHqNA2CH2pYWWdldPUqk78%2FBVBJk1K8ZuZrw0GNO77DdH1qpSd4yaQArDFal3vohQyEkIY9oYgoqA1M47YgZXsUh56sVvaJyeDkyO&X-Amz-Signature=44f30a2ca649becf14dd6a0f4f261601a9ea2bd9ee0f7e4b4237f387d0e1bba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZPVWP3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPEUH9%2BaZFSkmQtlKyKKFNggc2iiaBBDxQpUbCKgSKGAIgSSz5kdUnU2a3xx3QfIb3PnKdJdQQbdKFbY%2B6xdnPAkkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdzaK%2B%2FdzV4MIOzYCrcA7PoEVklLsnWGfJiqGb7Cf2LKJdLqQ7Ty2dRzJsprdbM3PWW%2FrFjIITWAhm0t0AU9T39x%2Bv8v7utt0vn8%2BczqfAlfCCUOG2QJsfjTFD7Vb2XLf78pzu62QJ%2FPiYnxEVZ02vQ0LqMVhe3SsoNvAzzBfqdPFG1iaS0KhHanzpa9%2FujWtVrjqXX%2Fmlrszo90hItWS0ZU3N%2BBBtMyE%2F9wR0gn5ob9kwnsMzn%2BDVN9FaF2xRbyEVs9rAp29VGJAz3V0q8SV78HOvr5REHJatisBKUk2bC13ybyxndoKs4eI7HJfdPUqch5%2FSt1IYNHS8dqY3Rv8okNfjI%2Bc3tdm2R6OgvJw3mDuD6Wz8FCuXNcBwYLA%2Bu97vRZPEfqMk7xtQihgUNRHxBD1JQEQqWxFvSJKtJMbqP4hXuXs9iuJ1uuRcrglr7qJULoZd9MQpqmLUxjo5%2FQmNWETGioH6mMqzpK4N5SSoa6D6%2BYjJf5P6NGnZEx1YC9bSNtkOhInGCgr3SdcFT4Eox82xFGxzbnIShY1eg7TXx%2F5H5xUSeHT1uiFNs%2BGZ9cYCvLN9KGrnhkrxII7iphQYiRqsuIdZKK6bdKgLPL2qm9tAQG6XMkXKvsZOOirRlJSG5fPs3CgHsyHc8MLX90skGOqUBeD315Qbaw9JrHfxIA9AsPWEHIcU5JnI%2ByhzNnY8qBv2dbjzgPCdyXEcjsCdgTk7bBm%2BM8X5PbqwlX%2FLcSFrafUJYj%2B7PBF06rP36SLU1yfL63dhgnliDm6AAHqNA2CH2pYWWdldPUqk78%2FBVBJk1K8ZuZrw0GNO77DdH1qpSd4yaQArDFal3vohQyEkIY9oYgoqA1M47YgZXsUh56sVvaJyeDkyO&X-Amz-Signature=eb0ee7715230ec49be17f963ca92d2484471c0c2e09d0eef27f4bc13e1846c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
