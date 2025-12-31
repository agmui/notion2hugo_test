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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXI3FXZU%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzRXTRrTuXyIhQ8uaZ10dEcUzj5oR1NBOWGWQQOh1dkAiEAiofCXnReq2mQ4uw4ma%2BB34I5IkAhuf34i%2BSn%2FM%2B8FJIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNksSeWqT8jYy0fzOircAzzl%2B%2BELW5emDVFzCX%2BG2S1TGN5Z82zPuBXcHF4gCycT43gP3nfuHyxVMM5sWeEqQxewt4qBus5kKQvYMMAl%2B%2FQ5urnd0c0P5GI7a82WHLG5JwZaWvywKWwRmJE8xWX89EKx%2F1cxoqEBab7g8bPmZ88cZMft3ywqrQn%2BmtnmZvk01YM0FIUVUqU2%2Fxb85KnDvWMJKZX1bnB0mm2HgPEdrtfXb83y8gUWarGxdpcUH1BkWZ%2Fr3GE0UkUKotC3Rkj5V142CGgrk%2BlttYAM9mkvCaRSNe77KaFXTGvNtPegcdG7glh5kHPfSZMnt0BNCa5Ja4INuUIsIyK0pO1qUQ0mu86jyj2qkWqRRfFccdX%2FEYlpS92r%2Bn62E7xxATai5yovE1yy6%2B7uRWowB%2B9UFwvYmk6StdxmkfHtpkgK3aLED8yJ4GeGwAVq0Ce0SxWr5IxjhyZOhHA5RzvfsBufduzzLsUxUHkMq6wz39HM2d%2BAZWqqZE6AwQ68fa9kgn1Z2rY7vRSk6yoMgagcwBswsf7NJSinVsUjH5E4NSPB1bpq%2BlQSTwXKovaR524dsALH6qMR%2Faxy%2FpgzVn6vHFwC6WIZ9S8zWQNaDL5fUp6PguIYvmfJBPXBTkMtMj8vtSgnMMTw0coGOqUBPsUvmM9E8%2FDn1c06LsZOaqlz0jZWS2yYZREozytasRXv0YMe%2BzlzBS6xHtDOarEzP22kDqN14Lox%2BqBGNcLNBy4zqM5qqZr3avIfmUtvsYMxtxe%2FfIyxuZh%2BWljBs2Cix%2BxyaT%2BnR%2Bog%2BU5seMWpBDBR3M81xrJu%2FLJesVgOLt%2FQLX5A5aIGCpBRJHkCtPInztNHcIfN33967Q77bWxBq9HN5mDG&X-Amz-Signature=938c68be85f84f5a0a0fb94e5bbc635a55ef225491979e47245db5422fbda76e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXI3FXZU%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzRXTRrTuXyIhQ8uaZ10dEcUzj5oR1NBOWGWQQOh1dkAiEAiofCXnReq2mQ4uw4ma%2BB34I5IkAhuf34i%2BSn%2FM%2B8FJIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNksSeWqT8jYy0fzOircAzzl%2B%2BELW5emDVFzCX%2BG2S1TGN5Z82zPuBXcHF4gCycT43gP3nfuHyxVMM5sWeEqQxewt4qBus5kKQvYMMAl%2B%2FQ5urnd0c0P5GI7a82WHLG5JwZaWvywKWwRmJE8xWX89EKx%2F1cxoqEBab7g8bPmZ88cZMft3ywqrQn%2BmtnmZvk01YM0FIUVUqU2%2Fxb85KnDvWMJKZX1bnB0mm2HgPEdrtfXb83y8gUWarGxdpcUH1BkWZ%2Fr3GE0UkUKotC3Rkj5V142CGgrk%2BlttYAM9mkvCaRSNe77KaFXTGvNtPegcdG7glh5kHPfSZMnt0BNCa5Ja4INuUIsIyK0pO1qUQ0mu86jyj2qkWqRRfFccdX%2FEYlpS92r%2Bn62E7xxATai5yovE1yy6%2B7uRWowB%2B9UFwvYmk6StdxmkfHtpkgK3aLED8yJ4GeGwAVq0Ce0SxWr5IxjhyZOhHA5RzvfsBufduzzLsUxUHkMq6wz39HM2d%2BAZWqqZE6AwQ68fa9kgn1Z2rY7vRSk6yoMgagcwBswsf7NJSinVsUjH5E4NSPB1bpq%2BlQSTwXKovaR524dsALH6qMR%2Faxy%2FpgzVn6vHFwC6WIZ9S8zWQNaDL5fUp6PguIYvmfJBPXBTkMtMj8vtSgnMMTw0coGOqUBPsUvmM9E8%2FDn1c06LsZOaqlz0jZWS2yYZREozytasRXv0YMe%2BzlzBS6xHtDOarEzP22kDqN14Lox%2BqBGNcLNBy4zqM5qqZr3avIfmUtvsYMxtxe%2FfIyxuZh%2BWljBs2Cix%2BxyaT%2BnR%2Bog%2BU5seMWpBDBR3M81xrJu%2FLJesVgOLt%2FQLX5A5aIGCpBRJHkCtPInztNHcIfN33967Q77bWxBq9HN5mDG&X-Amz-Signature=dfbd0f8f5cac9bca00c14cf60490126ee6aa31c2d970a0046c20f03981e396b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXI3FXZU%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzRXTRrTuXyIhQ8uaZ10dEcUzj5oR1NBOWGWQQOh1dkAiEAiofCXnReq2mQ4uw4ma%2BB34I5IkAhuf34i%2BSn%2FM%2B8FJIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNksSeWqT8jYy0fzOircAzzl%2B%2BELW5emDVFzCX%2BG2S1TGN5Z82zPuBXcHF4gCycT43gP3nfuHyxVMM5sWeEqQxewt4qBus5kKQvYMMAl%2B%2FQ5urnd0c0P5GI7a82WHLG5JwZaWvywKWwRmJE8xWX89EKx%2F1cxoqEBab7g8bPmZ88cZMft3ywqrQn%2BmtnmZvk01YM0FIUVUqU2%2Fxb85KnDvWMJKZX1bnB0mm2HgPEdrtfXb83y8gUWarGxdpcUH1BkWZ%2Fr3GE0UkUKotC3Rkj5V142CGgrk%2BlttYAM9mkvCaRSNe77KaFXTGvNtPegcdG7glh5kHPfSZMnt0BNCa5Ja4INuUIsIyK0pO1qUQ0mu86jyj2qkWqRRfFccdX%2FEYlpS92r%2Bn62E7xxATai5yovE1yy6%2B7uRWowB%2B9UFwvYmk6StdxmkfHtpkgK3aLED8yJ4GeGwAVq0Ce0SxWr5IxjhyZOhHA5RzvfsBufduzzLsUxUHkMq6wz39HM2d%2BAZWqqZE6AwQ68fa9kgn1Z2rY7vRSk6yoMgagcwBswsf7NJSinVsUjH5E4NSPB1bpq%2BlQSTwXKovaR524dsALH6qMR%2Faxy%2FpgzVn6vHFwC6WIZ9S8zWQNaDL5fUp6PguIYvmfJBPXBTkMtMj8vtSgnMMTw0coGOqUBPsUvmM9E8%2FDn1c06LsZOaqlz0jZWS2yYZREozytasRXv0YMe%2BzlzBS6xHtDOarEzP22kDqN14Lox%2BqBGNcLNBy4zqM5qqZr3avIfmUtvsYMxtxe%2FfIyxuZh%2BWljBs2Cix%2BxyaT%2BnR%2Bog%2BU5seMWpBDBR3M81xrJu%2FLJesVgOLt%2FQLX5A5aIGCpBRJHkCtPInztNHcIfN33967Q77bWxBq9HN5mDG&X-Amz-Signature=98d42f4280ba9afd152274c726c0f86e0dab206aaf0f40b333c713f68d365fd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXI3FXZU%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzRXTRrTuXyIhQ8uaZ10dEcUzj5oR1NBOWGWQQOh1dkAiEAiofCXnReq2mQ4uw4ma%2BB34I5IkAhuf34i%2BSn%2FM%2B8FJIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNksSeWqT8jYy0fzOircAzzl%2B%2BELW5emDVFzCX%2BG2S1TGN5Z82zPuBXcHF4gCycT43gP3nfuHyxVMM5sWeEqQxewt4qBus5kKQvYMMAl%2B%2FQ5urnd0c0P5GI7a82WHLG5JwZaWvywKWwRmJE8xWX89EKx%2F1cxoqEBab7g8bPmZ88cZMft3ywqrQn%2BmtnmZvk01YM0FIUVUqU2%2Fxb85KnDvWMJKZX1bnB0mm2HgPEdrtfXb83y8gUWarGxdpcUH1BkWZ%2Fr3GE0UkUKotC3Rkj5V142CGgrk%2BlttYAM9mkvCaRSNe77KaFXTGvNtPegcdG7glh5kHPfSZMnt0BNCa5Ja4INuUIsIyK0pO1qUQ0mu86jyj2qkWqRRfFccdX%2FEYlpS92r%2Bn62E7xxATai5yovE1yy6%2B7uRWowB%2B9UFwvYmk6StdxmkfHtpkgK3aLED8yJ4GeGwAVq0Ce0SxWr5IxjhyZOhHA5RzvfsBufduzzLsUxUHkMq6wz39HM2d%2BAZWqqZE6AwQ68fa9kgn1Z2rY7vRSk6yoMgagcwBswsf7NJSinVsUjH5E4NSPB1bpq%2BlQSTwXKovaR524dsALH6qMR%2Faxy%2FpgzVn6vHFwC6WIZ9S8zWQNaDL5fUp6PguIYvmfJBPXBTkMtMj8vtSgnMMTw0coGOqUBPsUvmM9E8%2FDn1c06LsZOaqlz0jZWS2yYZREozytasRXv0YMe%2BzlzBS6xHtDOarEzP22kDqN14Lox%2BqBGNcLNBy4zqM5qqZr3avIfmUtvsYMxtxe%2FfIyxuZh%2BWljBs2Cix%2BxyaT%2BnR%2Bog%2BU5seMWpBDBR3M81xrJu%2FLJesVgOLt%2FQLX5A5aIGCpBRJHkCtPInztNHcIfN33967Q77bWxBq9HN5mDG&X-Amz-Signature=d56fe1dfe7e0646a63b3b84034f16f67cf43f1c94e209297a6cec7c4a059222a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXI3FXZU%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzRXTRrTuXyIhQ8uaZ10dEcUzj5oR1NBOWGWQQOh1dkAiEAiofCXnReq2mQ4uw4ma%2BB34I5IkAhuf34i%2BSn%2FM%2B8FJIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNksSeWqT8jYy0fzOircAzzl%2B%2BELW5emDVFzCX%2BG2S1TGN5Z82zPuBXcHF4gCycT43gP3nfuHyxVMM5sWeEqQxewt4qBus5kKQvYMMAl%2B%2FQ5urnd0c0P5GI7a82WHLG5JwZaWvywKWwRmJE8xWX89EKx%2F1cxoqEBab7g8bPmZ88cZMft3ywqrQn%2BmtnmZvk01YM0FIUVUqU2%2Fxb85KnDvWMJKZX1bnB0mm2HgPEdrtfXb83y8gUWarGxdpcUH1BkWZ%2Fr3GE0UkUKotC3Rkj5V142CGgrk%2BlttYAM9mkvCaRSNe77KaFXTGvNtPegcdG7glh5kHPfSZMnt0BNCa5Ja4INuUIsIyK0pO1qUQ0mu86jyj2qkWqRRfFccdX%2FEYlpS92r%2Bn62E7xxATai5yovE1yy6%2B7uRWowB%2B9UFwvYmk6StdxmkfHtpkgK3aLED8yJ4GeGwAVq0Ce0SxWr5IxjhyZOhHA5RzvfsBufduzzLsUxUHkMq6wz39HM2d%2BAZWqqZE6AwQ68fa9kgn1Z2rY7vRSk6yoMgagcwBswsf7NJSinVsUjH5E4NSPB1bpq%2BlQSTwXKovaR524dsALH6qMR%2Faxy%2FpgzVn6vHFwC6WIZ9S8zWQNaDL5fUp6PguIYvmfJBPXBTkMtMj8vtSgnMMTw0coGOqUBPsUvmM9E8%2FDn1c06LsZOaqlz0jZWS2yYZREozytasRXv0YMe%2BzlzBS6xHtDOarEzP22kDqN14Lox%2BqBGNcLNBy4zqM5qqZr3avIfmUtvsYMxtxe%2FfIyxuZh%2BWljBs2Cix%2BxyaT%2BnR%2Bog%2BU5seMWpBDBR3M81xrJu%2FLJesVgOLt%2FQLX5A5aIGCpBRJHkCtPInztNHcIfN33967Q77bWxBq9HN5mDG&X-Amz-Signature=021dbbb58d10b3698695b5e6d7b2a753009ac7ec276e3399798400bd36255166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXI3FXZU%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzRXTRrTuXyIhQ8uaZ10dEcUzj5oR1NBOWGWQQOh1dkAiEAiofCXnReq2mQ4uw4ma%2BB34I5IkAhuf34i%2BSn%2FM%2B8FJIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNksSeWqT8jYy0fzOircAzzl%2B%2BELW5emDVFzCX%2BG2S1TGN5Z82zPuBXcHF4gCycT43gP3nfuHyxVMM5sWeEqQxewt4qBus5kKQvYMMAl%2B%2FQ5urnd0c0P5GI7a82WHLG5JwZaWvywKWwRmJE8xWX89EKx%2F1cxoqEBab7g8bPmZ88cZMft3ywqrQn%2BmtnmZvk01YM0FIUVUqU2%2Fxb85KnDvWMJKZX1bnB0mm2HgPEdrtfXb83y8gUWarGxdpcUH1BkWZ%2Fr3GE0UkUKotC3Rkj5V142CGgrk%2BlttYAM9mkvCaRSNe77KaFXTGvNtPegcdG7glh5kHPfSZMnt0BNCa5Ja4INuUIsIyK0pO1qUQ0mu86jyj2qkWqRRfFccdX%2FEYlpS92r%2Bn62E7xxATai5yovE1yy6%2B7uRWowB%2B9UFwvYmk6StdxmkfHtpkgK3aLED8yJ4GeGwAVq0Ce0SxWr5IxjhyZOhHA5RzvfsBufduzzLsUxUHkMq6wz39HM2d%2BAZWqqZE6AwQ68fa9kgn1Z2rY7vRSk6yoMgagcwBswsf7NJSinVsUjH5E4NSPB1bpq%2BlQSTwXKovaR524dsALH6qMR%2Faxy%2FpgzVn6vHFwC6WIZ9S8zWQNaDL5fUp6PguIYvmfJBPXBTkMtMj8vtSgnMMTw0coGOqUBPsUvmM9E8%2FDn1c06LsZOaqlz0jZWS2yYZREozytasRXv0YMe%2BzlzBS6xHtDOarEzP22kDqN14Lox%2BqBGNcLNBy4zqM5qqZr3avIfmUtvsYMxtxe%2FfIyxuZh%2BWljBs2Cix%2BxyaT%2BnR%2Bog%2BU5seMWpBDBR3M81xrJu%2FLJesVgOLt%2FQLX5A5aIGCpBRJHkCtPInztNHcIfN33967Q77bWxBq9HN5mDG&X-Amz-Signature=5e379706cd29dcf80eaa0234fa5f7dbb7453531ae9d52303ab6f175f821eb836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXI3FXZU%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzRXTRrTuXyIhQ8uaZ10dEcUzj5oR1NBOWGWQQOh1dkAiEAiofCXnReq2mQ4uw4ma%2BB34I5IkAhuf34i%2BSn%2FM%2B8FJIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNksSeWqT8jYy0fzOircAzzl%2B%2BELW5emDVFzCX%2BG2S1TGN5Z82zPuBXcHF4gCycT43gP3nfuHyxVMM5sWeEqQxewt4qBus5kKQvYMMAl%2B%2FQ5urnd0c0P5GI7a82WHLG5JwZaWvywKWwRmJE8xWX89EKx%2F1cxoqEBab7g8bPmZ88cZMft3ywqrQn%2BmtnmZvk01YM0FIUVUqU2%2Fxb85KnDvWMJKZX1bnB0mm2HgPEdrtfXb83y8gUWarGxdpcUH1BkWZ%2Fr3GE0UkUKotC3Rkj5V142CGgrk%2BlttYAM9mkvCaRSNe77KaFXTGvNtPegcdG7glh5kHPfSZMnt0BNCa5Ja4INuUIsIyK0pO1qUQ0mu86jyj2qkWqRRfFccdX%2FEYlpS92r%2Bn62E7xxATai5yovE1yy6%2B7uRWowB%2B9UFwvYmk6StdxmkfHtpkgK3aLED8yJ4GeGwAVq0Ce0SxWr5IxjhyZOhHA5RzvfsBufduzzLsUxUHkMq6wz39HM2d%2BAZWqqZE6AwQ68fa9kgn1Z2rY7vRSk6yoMgagcwBswsf7NJSinVsUjH5E4NSPB1bpq%2BlQSTwXKovaR524dsALH6qMR%2Faxy%2FpgzVn6vHFwC6WIZ9S8zWQNaDL5fUp6PguIYvmfJBPXBTkMtMj8vtSgnMMTw0coGOqUBPsUvmM9E8%2FDn1c06LsZOaqlz0jZWS2yYZREozytasRXv0YMe%2BzlzBS6xHtDOarEzP22kDqN14Lox%2BqBGNcLNBy4zqM5qqZr3avIfmUtvsYMxtxe%2FfIyxuZh%2BWljBs2Cix%2BxyaT%2BnR%2Bog%2BU5seMWpBDBR3M81xrJu%2FLJesVgOLt%2FQLX5A5aIGCpBRJHkCtPInztNHcIfN33967Q77bWxBq9HN5mDG&X-Amz-Signature=7b55b34dc0edde93372d8b7fb6901ddf3ad2ef1bf0ec21e57126f58554628d10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXI3FXZU%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzRXTRrTuXyIhQ8uaZ10dEcUzj5oR1NBOWGWQQOh1dkAiEAiofCXnReq2mQ4uw4ma%2BB34I5IkAhuf34i%2BSn%2FM%2B8FJIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNksSeWqT8jYy0fzOircAzzl%2B%2BELW5emDVFzCX%2BG2S1TGN5Z82zPuBXcHF4gCycT43gP3nfuHyxVMM5sWeEqQxewt4qBus5kKQvYMMAl%2B%2FQ5urnd0c0P5GI7a82WHLG5JwZaWvywKWwRmJE8xWX89EKx%2F1cxoqEBab7g8bPmZ88cZMft3ywqrQn%2BmtnmZvk01YM0FIUVUqU2%2Fxb85KnDvWMJKZX1bnB0mm2HgPEdrtfXb83y8gUWarGxdpcUH1BkWZ%2Fr3GE0UkUKotC3Rkj5V142CGgrk%2BlttYAM9mkvCaRSNe77KaFXTGvNtPegcdG7glh5kHPfSZMnt0BNCa5Ja4INuUIsIyK0pO1qUQ0mu86jyj2qkWqRRfFccdX%2FEYlpS92r%2Bn62E7xxATai5yovE1yy6%2B7uRWowB%2B9UFwvYmk6StdxmkfHtpkgK3aLED8yJ4GeGwAVq0Ce0SxWr5IxjhyZOhHA5RzvfsBufduzzLsUxUHkMq6wz39HM2d%2BAZWqqZE6AwQ68fa9kgn1Z2rY7vRSk6yoMgagcwBswsf7NJSinVsUjH5E4NSPB1bpq%2BlQSTwXKovaR524dsALH6qMR%2Faxy%2FpgzVn6vHFwC6WIZ9S8zWQNaDL5fUp6PguIYvmfJBPXBTkMtMj8vtSgnMMTw0coGOqUBPsUvmM9E8%2FDn1c06LsZOaqlz0jZWS2yYZREozytasRXv0YMe%2BzlzBS6xHtDOarEzP22kDqN14Lox%2BqBGNcLNBy4zqM5qqZr3avIfmUtvsYMxtxe%2FfIyxuZh%2BWljBs2Cix%2BxyaT%2BnR%2Bog%2BU5seMWpBDBR3M81xrJu%2FLJesVgOLt%2FQLX5A5aIGCpBRJHkCtPInztNHcIfN33967Q77bWxBq9HN5mDG&X-Amz-Signature=1ffacde0bd6472b4a4f68a0bedb76343eebba1b662dec66f7306c364f49c23ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXI3FXZU%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzRXTRrTuXyIhQ8uaZ10dEcUzj5oR1NBOWGWQQOh1dkAiEAiofCXnReq2mQ4uw4ma%2BB34I5IkAhuf34i%2BSn%2FM%2B8FJIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNksSeWqT8jYy0fzOircAzzl%2B%2BELW5emDVFzCX%2BG2S1TGN5Z82zPuBXcHF4gCycT43gP3nfuHyxVMM5sWeEqQxewt4qBus5kKQvYMMAl%2B%2FQ5urnd0c0P5GI7a82WHLG5JwZaWvywKWwRmJE8xWX89EKx%2F1cxoqEBab7g8bPmZ88cZMft3ywqrQn%2BmtnmZvk01YM0FIUVUqU2%2Fxb85KnDvWMJKZX1bnB0mm2HgPEdrtfXb83y8gUWarGxdpcUH1BkWZ%2Fr3GE0UkUKotC3Rkj5V142CGgrk%2BlttYAM9mkvCaRSNe77KaFXTGvNtPegcdG7glh5kHPfSZMnt0BNCa5Ja4INuUIsIyK0pO1qUQ0mu86jyj2qkWqRRfFccdX%2FEYlpS92r%2Bn62E7xxATai5yovE1yy6%2B7uRWowB%2B9UFwvYmk6StdxmkfHtpkgK3aLED8yJ4GeGwAVq0Ce0SxWr5IxjhyZOhHA5RzvfsBufduzzLsUxUHkMq6wz39HM2d%2BAZWqqZE6AwQ68fa9kgn1Z2rY7vRSk6yoMgagcwBswsf7NJSinVsUjH5E4NSPB1bpq%2BlQSTwXKovaR524dsALH6qMR%2Faxy%2FpgzVn6vHFwC6WIZ9S8zWQNaDL5fUp6PguIYvmfJBPXBTkMtMj8vtSgnMMTw0coGOqUBPsUvmM9E8%2FDn1c06LsZOaqlz0jZWS2yYZREozytasRXv0YMe%2BzlzBS6xHtDOarEzP22kDqN14Lox%2BqBGNcLNBy4zqM5qqZr3avIfmUtvsYMxtxe%2FfIyxuZh%2BWljBs2Cix%2BxyaT%2BnR%2Bog%2BU5seMWpBDBR3M81xrJu%2FLJesVgOLt%2FQLX5A5aIGCpBRJHkCtPInztNHcIfN33967Q77bWxBq9HN5mDG&X-Amz-Signature=cbfe369447eed91b7a9f6d24fe125a6a2d93c28730b31bce40d6d87d44ee638b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXI3FXZU%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzRXTRrTuXyIhQ8uaZ10dEcUzj5oR1NBOWGWQQOh1dkAiEAiofCXnReq2mQ4uw4ma%2BB34I5IkAhuf34i%2BSn%2FM%2B8FJIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNksSeWqT8jYy0fzOircAzzl%2B%2BELW5emDVFzCX%2BG2S1TGN5Z82zPuBXcHF4gCycT43gP3nfuHyxVMM5sWeEqQxewt4qBus5kKQvYMMAl%2B%2FQ5urnd0c0P5GI7a82WHLG5JwZaWvywKWwRmJE8xWX89EKx%2F1cxoqEBab7g8bPmZ88cZMft3ywqrQn%2BmtnmZvk01YM0FIUVUqU2%2Fxb85KnDvWMJKZX1bnB0mm2HgPEdrtfXb83y8gUWarGxdpcUH1BkWZ%2Fr3GE0UkUKotC3Rkj5V142CGgrk%2BlttYAM9mkvCaRSNe77KaFXTGvNtPegcdG7glh5kHPfSZMnt0BNCa5Ja4INuUIsIyK0pO1qUQ0mu86jyj2qkWqRRfFccdX%2FEYlpS92r%2Bn62E7xxATai5yovE1yy6%2B7uRWowB%2B9UFwvYmk6StdxmkfHtpkgK3aLED8yJ4GeGwAVq0Ce0SxWr5IxjhyZOhHA5RzvfsBufduzzLsUxUHkMq6wz39HM2d%2BAZWqqZE6AwQ68fa9kgn1Z2rY7vRSk6yoMgagcwBswsf7NJSinVsUjH5E4NSPB1bpq%2BlQSTwXKovaR524dsALH6qMR%2Faxy%2FpgzVn6vHFwC6WIZ9S8zWQNaDL5fUp6PguIYvmfJBPXBTkMtMj8vtSgnMMTw0coGOqUBPsUvmM9E8%2FDn1c06LsZOaqlz0jZWS2yYZREozytasRXv0YMe%2BzlzBS6xHtDOarEzP22kDqN14Lox%2BqBGNcLNBy4zqM5qqZr3avIfmUtvsYMxtxe%2FfIyxuZh%2BWljBs2Cix%2BxyaT%2BnR%2Bog%2BU5seMWpBDBR3M81xrJu%2FLJesVgOLt%2FQLX5A5aIGCpBRJHkCtPInztNHcIfN33967Q77bWxBq9HN5mDG&X-Amz-Signature=b7ec4519fe2593158a16562a82875db95329afe09a27ae7323d4b3aa282e4fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXI3FXZU%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzRXTRrTuXyIhQ8uaZ10dEcUzj5oR1NBOWGWQQOh1dkAiEAiofCXnReq2mQ4uw4ma%2BB34I5IkAhuf34i%2BSn%2FM%2B8FJIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNksSeWqT8jYy0fzOircAzzl%2B%2BELW5emDVFzCX%2BG2S1TGN5Z82zPuBXcHF4gCycT43gP3nfuHyxVMM5sWeEqQxewt4qBus5kKQvYMMAl%2B%2FQ5urnd0c0P5GI7a82WHLG5JwZaWvywKWwRmJE8xWX89EKx%2F1cxoqEBab7g8bPmZ88cZMft3ywqrQn%2BmtnmZvk01YM0FIUVUqU2%2Fxb85KnDvWMJKZX1bnB0mm2HgPEdrtfXb83y8gUWarGxdpcUH1BkWZ%2Fr3GE0UkUKotC3Rkj5V142CGgrk%2BlttYAM9mkvCaRSNe77KaFXTGvNtPegcdG7glh5kHPfSZMnt0BNCa5Ja4INuUIsIyK0pO1qUQ0mu86jyj2qkWqRRfFccdX%2FEYlpS92r%2Bn62E7xxATai5yovE1yy6%2B7uRWowB%2B9UFwvYmk6StdxmkfHtpkgK3aLED8yJ4GeGwAVq0Ce0SxWr5IxjhyZOhHA5RzvfsBufduzzLsUxUHkMq6wz39HM2d%2BAZWqqZE6AwQ68fa9kgn1Z2rY7vRSk6yoMgagcwBswsf7NJSinVsUjH5E4NSPB1bpq%2BlQSTwXKovaR524dsALH6qMR%2Faxy%2FpgzVn6vHFwC6WIZ9S8zWQNaDL5fUp6PguIYvmfJBPXBTkMtMj8vtSgnMMTw0coGOqUBPsUvmM9E8%2FDn1c06LsZOaqlz0jZWS2yYZREozytasRXv0YMe%2BzlzBS6xHtDOarEzP22kDqN14Lox%2BqBGNcLNBy4zqM5qqZr3avIfmUtvsYMxtxe%2FfIyxuZh%2BWljBs2Cix%2BxyaT%2BnR%2Bog%2BU5seMWpBDBR3M81xrJu%2FLJesVgOLt%2FQLX5A5aIGCpBRJHkCtPInztNHcIfN33967Q77bWxBq9HN5mDG&X-Amz-Signature=7e6584d3702bedcb1f3346a56a6123e184707e0a00dde0fc7bfe6ae006f92bee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXI3FXZU%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzRXTRrTuXyIhQ8uaZ10dEcUzj5oR1NBOWGWQQOh1dkAiEAiofCXnReq2mQ4uw4ma%2BB34I5IkAhuf34i%2BSn%2FM%2B8FJIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNksSeWqT8jYy0fzOircAzzl%2B%2BELW5emDVFzCX%2BG2S1TGN5Z82zPuBXcHF4gCycT43gP3nfuHyxVMM5sWeEqQxewt4qBus5kKQvYMMAl%2B%2FQ5urnd0c0P5GI7a82WHLG5JwZaWvywKWwRmJE8xWX89EKx%2F1cxoqEBab7g8bPmZ88cZMft3ywqrQn%2BmtnmZvk01YM0FIUVUqU2%2Fxb85KnDvWMJKZX1bnB0mm2HgPEdrtfXb83y8gUWarGxdpcUH1BkWZ%2Fr3GE0UkUKotC3Rkj5V142CGgrk%2BlttYAM9mkvCaRSNe77KaFXTGvNtPegcdG7glh5kHPfSZMnt0BNCa5Ja4INuUIsIyK0pO1qUQ0mu86jyj2qkWqRRfFccdX%2FEYlpS92r%2Bn62E7xxATai5yovE1yy6%2B7uRWowB%2B9UFwvYmk6StdxmkfHtpkgK3aLED8yJ4GeGwAVq0Ce0SxWr5IxjhyZOhHA5RzvfsBufduzzLsUxUHkMq6wz39HM2d%2BAZWqqZE6AwQ68fa9kgn1Z2rY7vRSk6yoMgagcwBswsf7NJSinVsUjH5E4NSPB1bpq%2BlQSTwXKovaR524dsALH6qMR%2Faxy%2FpgzVn6vHFwC6WIZ9S8zWQNaDL5fUp6PguIYvmfJBPXBTkMtMj8vtSgnMMTw0coGOqUBPsUvmM9E8%2FDn1c06LsZOaqlz0jZWS2yYZREozytasRXv0YMe%2BzlzBS6xHtDOarEzP22kDqN14Lox%2BqBGNcLNBy4zqM5qqZr3avIfmUtvsYMxtxe%2FfIyxuZh%2BWljBs2Cix%2BxyaT%2BnR%2Bog%2BU5seMWpBDBR3M81xrJu%2FLJesVgOLt%2FQLX5A5aIGCpBRJHkCtPInztNHcIfN33967Q77bWxBq9HN5mDG&X-Amz-Signature=c7789486c0b21aeded29b49b0043f5b509b7ca2750b974eb705865a077f15299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXI3FXZU%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzRXTRrTuXyIhQ8uaZ10dEcUzj5oR1NBOWGWQQOh1dkAiEAiofCXnReq2mQ4uw4ma%2BB34I5IkAhuf34i%2BSn%2FM%2B8FJIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNksSeWqT8jYy0fzOircAzzl%2B%2BELW5emDVFzCX%2BG2S1TGN5Z82zPuBXcHF4gCycT43gP3nfuHyxVMM5sWeEqQxewt4qBus5kKQvYMMAl%2B%2FQ5urnd0c0P5GI7a82WHLG5JwZaWvywKWwRmJE8xWX89EKx%2F1cxoqEBab7g8bPmZ88cZMft3ywqrQn%2BmtnmZvk01YM0FIUVUqU2%2Fxb85KnDvWMJKZX1bnB0mm2HgPEdrtfXb83y8gUWarGxdpcUH1BkWZ%2Fr3GE0UkUKotC3Rkj5V142CGgrk%2BlttYAM9mkvCaRSNe77KaFXTGvNtPegcdG7glh5kHPfSZMnt0BNCa5Ja4INuUIsIyK0pO1qUQ0mu86jyj2qkWqRRfFccdX%2FEYlpS92r%2Bn62E7xxATai5yovE1yy6%2B7uRWowB%2B9UFwvYmk6StdxmkfHtpkgK3aLED8yJ4GeGwAVq0Ce0SxWr5IxjhyZOhHA5RzvfsBufduzzLsUxUHkMq6wz39HM2d%2BAZWqqZE6AwQ68fa9kgn1Z2rY7vRSk6yoMgagcwBswsf7NJSinVsUjH5E4NSPB1bpq%2BlQSTwXKovaR524dsALH6qMR%2Faxy%2FpgzVn6vHFwC6WIZ9S8zWQNaDL5fUp6PguIYvmfJBPXBTkMtMj8vtSgnMMTw0coGOqUBPsUvmM9E8%2FDn1c06LsZOaqlz0jZWS2yYZREozytasRXv0YMe%2BzlzBS6xHtDOarEzP22kDqN14Lox%2BqBGNcLNBy4zqM5qqZr3avIfmUtvsYMxtxe%2FfIyxuZh%2BWljBs2Cix%2BxyaT%2BnR%2Bog%2BU5seMWpBDBR3M81xrJu%2FLJesVgOLt%2FQLX5A5aIGCpBRJHkCtPInztNHcIfN33967Q77bWxBq9HN5mDG&X-Amz-Signature=3f57c734835ca13b8503fd37ffd82de3c28438af72fadf59849a2023c8f1113c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXI3FXZU%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzRXTRrTuXyIhQ8uaZ10dEcUzj5oR1NBOWGWQQOh1dkAiEAiofCXnReq2mQ4uw4ma%2BB34I5IkAhuf34i%2BSn%2FM%2B8FJIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNksSeWqT8jYy0fzOircAzzl%2B%2BELW5emDVFzCX%2BG2S1TGN5Z82zPuBXcHF4gCycT43gP3nfuHyxVMM5sWeEqQxewt4qBus5kKQvYMMAl%2B%2FQ5urnd0c0P5GI7a82WHLG5JwZaWvywKWwRmJE8xWX89EKx%2F1cxoqEBab7g8bPmZ88cZMft3ywqrQn%2BmtnmZvk01YM0FIUVUqU2%2Fxb85KnDvWMJKZX1bnB0mm2HgPEdrtfXb83y8gUWarGxdpcUH1BkWZ%2Fr3GE0UkUKotC3Rkj5V142CGgrk%2BlttYAM9mkvCaRSNe77KaFXTGvNtPegcdG7glh5kHPfSZMnt0BNCa5Ja4INuUIsIyK0pO1qUQ0mu86jyj2qkWqRRfFccdX%2FEYlpS92r%2Bn62E7xxATai5yovE1yy6%2B7uRWowB%2B9UFwvYmk6StdxmkfHtpkgK3aLED8yJ4GeGwAVq0Ce0SxWr5IxjhyZOhHA5RzvfsBufduzzLsUxUHkMq6wz39HM2d%2BAZWqqZE6AwQ68fa9kgn1Z2rY7vRSk6yoMgagcwBswsf7NJSinVsUjH5E4NSPB1bpq%2BlQSTwXKovaR524dsALH6qMR%2Faxy%2FpgzVn6vHFwC6WIZ9S8zWQNaDL5fUp6PguIYvmfJBPXBTkMtMj8vtSgnMMTw0coGOqUBPsUvmM9E8%2FDn1c06LsZOaqlz0jZWS2yYZREozytasRXv0YMe%2BzlzBS6xHtDOarEzP22kDqN14Lox%2BqBGNcLNBy4zqM5qqZr3avIfmUtvsYMxtxe%2FfIyxuZh%2BWljBs2Cix%2BxyaT%2BnR%2Bog%2BU5seMWpBDBR3M81xrJu%2FLJesVgOLt%2FQLX5A5aIGCpBRJHkCtPInztNHcIfN33967Q77bWxBq9HN5mDG&X-Amz-Signature=c9f4334e8f96e380207894c8a597935c370750af5dcad1e16f59b28aaed3175b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
