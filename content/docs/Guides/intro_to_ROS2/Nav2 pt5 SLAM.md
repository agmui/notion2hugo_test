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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH5T7O7P%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb8XdSL5HWmFY3lgalAXT4LzJFB7R0zF%2F7PiyAnXNp%2FAiBFoh0YZlbkmzUyEGM4EnUpagOfkxsj%2FWXFrzCr%2Bt2KmSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM62LN1hKmeK5GW1s3KtwDOLd8OtR9DTClaakTw6dX38PERKhEGP6OBz%2F6Wmq4kRUtGvokwsJj5AFFNYpJ7vXMn7YJiTu3yAGXVgweHBY3Iqguyk1h24ZLZ8eHz%2FoMxa14BtY%2BsC2oKTeNZXZ8PpbQ9z1Wu0ukOdd%2B4KKsFB85npYbGJpzEUG0OrTnprm%2FwB7u6CDQZ%2FknfWfOCg9gnxb8%2BF8B03ncX1RJKJAsV0Z05EWykXVZ6n65Df9N2pVrPQdQyKuXOuV0wqWq0%2B0nQFI4hOfo6WZVF4GlCx9bwRD72X7IvOJp6ilUitMZaIMUULpywDVBVTlIqnBPWhV5Tc74aprspT5lYvwlPiJIi0ZfjTMTpR9WAKGf3NsSBhxnlYfGZ%2BZicB9i2R2Hc7PATeTtc8oz5vQxy5aE3HvS3rbP%2FgEJkgUqwK%2FOhw%2FyGDMH%2FSWecI8%2FOsRsDxgTOaQ6O152Ci5xLV4qWaGSlTjAMD%2B67P1E%2FIp2PodyyXMd%2BOtBfWFfZLlH4%2BIH2x71Y5mNSXx4Yznnkz5nGtRPsqiddb2OSoOuMsRlGlWUOk6M3QomhZ39VJw3NZZ5rMj8c4yBsuKKvxGkM6MfJSotYlWiC7I8vIDyeg6jZvk%2FgkrOOjOQupE6fRwwTNO%2F9j3tUigw7cSj1AY6pgG0ATOcYzLa2VG1F7htXpIpp3AYuEC6%2FAlN1dwZCmLTryBJhB2xYgUsixqEXBkv6bZQicPTG6eTxQSC2JuTvlmVRHO8GWOM07O15yMteCkWFdaAQiRxkOZoLxZhfDBb8Lx1jQe2J0lmyfgCVvfDKBfBju6x%2FSg5R4Rg%2Bu3NcUj7TbE%2Bh%2FivT0tczeOAgsWLG5WLT5GVkuzagkDojRzGPb7IoT3SnrB6&X-Amz-Signature=ceaf6e8086b0a9cfd79113d77e4aa3ccfd226bb34d34dfd291430ab2e8a9f9c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH5T7O7P%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb8XdSL5HWmFY3lgalAXT4LzJFB7R0zF%2F7PiyAnXNp%2FAiBFoh0YZlbkmzUyEGM4EnUpagOfkxsj%2FWXFrzCr%2Bt2KmSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM62LN1hKmeK5GW1s3KtwDOLd8OtR9DTClaakTw6dX38PERKhEGP6OBz%2F6Wmq4kRUtGvokwsJj5AFFNYpJ7vXMn7YJiTu3yAGXVgweHBY3Iqguyk1h24ZLZ8eHz%2FoMxa14BtY%2BsC2oKTeNZXZ8PpbQ9z1Wu0ukOdd%2B4KKsFB85npYbGJpzEUG0OrTnprm%2FwB7u6CDQZ%2FknfWfOCg9gnxb8%2BF8B03ncX1RJKJAsV0Z05EWykXVZ6n65Df9N2pVrPQdQyKuXOuV0wqWq0%2B0nQFI4hOfo6WZVF4GlCx9bwRD72X7IvOJp6ilUitMZaIMUULpywDVBVTlIqnBPWhV5Tc74aprspT5lYvwlPiJIi0ZfjTMTpR9WAKGf3NsSBhxnlYfGZ%2BZicB9i2R2Hc7PATeTtc8oz5vQxy5aE3HvS3rbP%2FgEJkgUqwK%2FOhw%2FyGDMH%2FSWecI8%2FOsRsDxgTOaQ6O152Ci5xLV4qWaGSlTjAMD%2B67P1E%2FIp2PodyyXMd%2BOtBfWFfZLlH4%2BIH2x71Y5mNSXx4Yznnkz5nGtRPsqiddb2OSoOuMsRlGlWUOk6M3QomhZ39VJw3NZZ5rMj8c4yBsuKKvxGkM6MfJSotYlWiC7I8vIDyeg6jZvk%2FgkrOOjOQupE6fRwwTNO%2F9j3tUigw7cSj1AY6pgG0ATOcYzLa2VG1F7htXpIpp3AYuEC6%2FAlN1dwZCmLTryBJhB2xYgUsixqEXBkv6bZQicPTG6eTxQSC2JuTvlmVRHO8GWOM07O15yMteCkWFdaAQiRxkOZoLxZhfDBb8Lx1jQe2J0lmyfgCVvfDKBfBju6x%2FSg5R4Rg%2Bu3NcUj7TbE%2Bh%2FivT0tczeOAgsWLG5WLT5GVkuzagkDojRzGPb7IoT3SnrB6&X-Amz-Signature=7db3f1bb1b8e48ae7208bfb9dfdb9a4ecee3af056e1988856768b67339a2f1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH5T7O7P%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb8XdSL5HWmFY3lgalAXT4LzJFB7R0zF%2F7PiyAnXNp%2FAiBFoh0YZlbkmzUyEGM4EnUpagOfkxsj%2FWXFrzCr%2Bt2KmSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM62LN1hKmeK5GW1s3KtwDOLd8OtR9DTClaakTw6dX38PERKhEGP6OBz%2F6Wmq4kRUtGvokwsJj5AFFNYpJ7vXMn7YJiTu3yAGXVgweHBY3Iqguyk1h24ZLZ8eHz%2FoMxa14BtY%2BsC2oKTeNZXZ8PpbQ9z1Wu0ukOdd%2B4KKsFB85npYbGJpzEUG0OrTnprm%2FwB7u6CDQZ%2FknfWfOCg9gnxb8%2BF8B03ncX1RJKJAsV0Z05EWykXVZ6n65Df9N2pVrPQdQyKuXOuV0wqWq0%2B0nQFI4hOfo6WZVF4GlCx9bwRD72X7IvOJp6ilUitMZaIMUULpywDVBVTlIqnBPWhV5Tc74aprspT5lYvwlPiJIi0ZfjTMTpR9WAKGf3NsSBhxnlYfGZ%2BZicB9i2R2Hc7PATeTtc8oz5vQxy5aE3HvS3rbP%2FgEJkgUqwK%2FOhw%2FyGDMH%2FSWecI8%2FOsRsDxgTOaQ6O152Ci5xLV4qWaGSlTjAMD%2B67P1E%2FIp2PodyyXMd%2BOtBfWFfZLlH4%2BIH2x71Y5mNSXx4Yznnkz5nGtRPsqiddb2OSoOuMsRlGlWUOk6M3QomhZ39VJw3NZZ5rMj8c4yBsuKKvxGkM6MfJSotYlWiC7I8vIDyeg6jZvk%2FgkrOOjOQupE6fRwwTNO%2F9j3tUigw7cSj1AY6pgG0ATOcYzLa2VG1F7htXpIpp3AYuEC6%2FAlN1dwZCmLTryBJhB2xYgUsixqEXBkv6bZQicPTG6eTxQSC2JuTvlmVRHO8GWOM07O15yMteCkWFdaAQiRxkOZoLxZhfDBb8Lx1jQe2J0lmyfgCVvfDKBfBju6x%2FSg5R4Rg%2Bu3NcUj7TbE%2Bh%2FivT0tczeOAgsWLG5WLT5GVkuzagkDojRzGPb7IoT3SnrB6&X-Amz-Signature=16dfce8cc00b917afeead3ec276fe98eb4dd5bdc3c5f5c05f849445477f99a26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH5T7O7P%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb8XdSL5HWmFY3lgalAXT4LzJFB7R0zF%2F7PiyAnXNp%2FAiBFoh0YZlbkmzUyEGM4EnUpagOfkxsj%2FWXFrzCr%2Bt2KmSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM62LN1hKmeK5GW1s3KtwDOLd8OtR9DTClaakTw6dX38PERKhEGP6OBz%2F6Wmq4kRUtGvokwsJj5AFFNYpJ7vXMn7YJiTu3yAGXVgweHBY3Iqguyk1h24ZLZ8eHz%2FoMxa14BtY%2BsC2oKTeNZXZ8PpbQ9z1Wu0ukOdd%2B4KKsFB85npYbGJpzEUG0OrTnprm%2FwB7u6CDQZ%2FknfWfOCg9gnxb8%2BF8B03ncX1RJKJAsV0Z05EWykXVZ6n65Df9N2pVrPQdQyKuXOuV0wqWq0%2B0nQFI4hOfo6WZVF4GlCx9bwRD72X7IvOJp6ilUitMZaIMUULpywDVBVTlIqnBPWhV5Tc74aprspT5lYvwlPiJIi0ZfjTMTpR9WAKGf3NsSBhxnlYfGZ%2BZicB9i2R2Hc7PATeTtc8oz5vQxy5aE3HvS3rbP%2FgEJkgUqwK%2FOhw%2FyGDMH%2FSWecI8%2FOsRsDxgTOaQ6O152Ci5xLV4qWaGSlTjAMD%2B67P1E%2FIp2PodyyXMd%2BOtBfWFfZLlH4%2BIH2x71Y5mNSXx4Yznnkz5nGtRPsqiddb2OSoOuMsRlGlWUOk6M3QomhZ39VJw3NZZ5rMj8c4yBsuKKvxGkM6MfJSotYlWiC7I8vIDyeg6jZvk%2FgkrOOjOQupE6fRwwTNO%2F9j3tUigw7cSj1AY6pgG0ATOcYzLa2VG1F7htXpIpp3AYuEC6%2FAlN1dwZCmLTryBJhB2xYgUsixqEXBkv6bZQicPTG6eTxQSC2JuTvlmVRHO8GWOM07O15yMteCkWFdaAQiRxkOZoLxZhfDBb8Lx1jQe2J0lmyfgCVvfDKBfBju6x%2FSg5R4Rg%2Bu3NcUj7TbE%2Bh%2FivT0tczeOAgsWLG5WLT5GVkuzagkDojRzGPb7IoT3SnrB6&X-Amz-Signature=2a231de6b487db0be578483c9ebdc6061a0625f89d85daeafa81db8773755a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH5T7O7P%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb8XdSL5HWmFY3lgalAXT4LzJFB7R0zF%2F7PiyAnXNp%2FAiBFoh0YZlbkmzUyEGM4EnUpagOfkxsj%2FWXFrzCr%2Bt2KmSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM62LN1hKmeK5GW1s3KtwDOLd8OtR9DTClaakTw6dX38PERKhEGP6OBz%2F6Wmq4kRUtGvokwsJj5AFFNYpJ7vXMn7YJiTu3yAGXVgweHBY3Iqguyk1h24ZLZ8eHz%2FoMxa14BtY%2BsC2oKTeNZXZ8PpbQ9z1Wu0ukOdd%2B4KKsFB85npYbGJpzEUG0OrTnprm%2FwB7u6CDQZ%2FknfWfOCg9gnxb8%2BF8B03ncX1RJKJAsV0Z05EWykXVZ6n65Df9N2pVrPQdQyKuXOuV0wqWq0%2B0nQFI4hOfo6WZVF4GlCx9bwRD72X7IvOJp6ilUitMZaIMUULpywDVBVTlIqnBPWhV5Tc74aprspT5lYvwlPiJIi0ZfjTMTpR9WAKGf3NsSBhxnlYfGZ%2BZicB9i2R2Hc7PATeTtc8oz5vQxy5aE3HvS3rbP%2FgEJkgUqwK%2FOhw%2FyGDMH%2FSWecI8%2FOsRsDxgTOaQ6O152Ci5xLV4qWaGSlTjAMD%2B67P1E%2FIp2PodyyXMd%2BOtBfWFfZLlH4%2BIH2x71Y5mNSXx4Yznnkz5nGtRPsqiddb2OSoOuMsRlGlWUOk6M3QomhZ39VJw3NZZ5rMj8c4yBsuKKvxGkM6MfJSotYlWiC7I8vIDyeg6jZvk%2FgkrOOjOQupE6fRwwTNO%2F9j3tUigw7cSj1AY6pgG0ATOcYzLa2VG1F7htXpIpp3AYuEC6%2FAlN1dwZCmLTryBJhB2xYgUsixqEXBkv6bZQicPTG6eTxQSC2JuTvlmVRHO8GWOM07O15yMteCkWFdaAQiRxkOZoLxZhfDBb8Lx1jQe2J0lmyfgCVvfDKBfBju6x%2FSg5R4Rg%2Bu3NcUj7TbE%2Bh%2FivT0tczeOAgsWLG5WLT5GVkuzagkDojRzGPb7IoT3SnrB6&X-Amz-Signature=407023536381a4ccd55666e7c0a7593ed9259227020c72c66349995488eea404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH5T7O7P%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb8XdSL5HWmFY3lgalAXT4LzJFB7R0zF%2F7PiyAnXNp%2FAiBFoh0YZlbkmzUyEGM4EnUpagOfkxsj%2FWXFrzCr%2Bt2KmSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM62LN1hKmeK5GW1s3KtwDOLd8OtR9DTClaakTw6dX38PERKhEGP6OBz%2F6Wmq4kRUtGvokwsJj5AFFNYpJ7vXMn7YJiTu3yAGXVgweHBY3Iqguyk1h24ZLZ8eHz%2FoMxa14BtY%2BsC2oKTeNZXZ8PpbQ9z1Wu0ukOdd%2B4KKsFB85npYbGJpzEUG0OrTnprm%2FwB7u6CDQZ%2FknfWfOCg9gnxb8%2BF8B03ncX1RJKJAsV0Z05EWykXVZ6n65Df9N2pVrPQdQyKuXOuV0wqWq0%2B0nQFI4hOfo6WZVF4GlCx9bwRD72X7IvOJp6ilUitMZaIMUULpywDVBVTlIqnBPWhV5Tc74aprspT5lYvwlPiJIi0ZfjTMTpR9WAKGf3NsSBhxnlYfGZ%2BZicB9i2R2Hc7PATeTtc8oz5vQxy5aE3HvS3rbP%2FgEJkgUqwK%2FOhw%2FyGDMH%2FSWecI8%2FOsRsDxgTOaQ6O152Ci5xLV4qWaGSlTjAMD%2B67P1E%2FIp2PodyyXMd%2BOtBfWFfZLlH4%2BIH2x71Y5mNSXx4Yznnkz5nGtRPsqiddb2OSoOuMsRlGlWUOk6M3QomhZ39VJw3NZZ5rMj8c4yBsuKKvxGkM6MfJSotYlWiC7I8vIDyeg6jZvk%2FgkrOOjOQupE6fRwwTNO%2F9j3tUigw7cSj1AY6pgG0ATOcYzLa2VG1F7htXpIpp3AYuEC6%2FAlN1dwZCmLTryBJhB2xYgUsixqEXBkv6bZQicPTG6eTxQSC2JuTvlmVRHO8GWOM07O15yMteCkWFdaAQiRxkOZoLxZhfDBb8Lx1jQe2J0lmyfgCVvfDKBfBju6x%2FSg5R4Rg%2Bu3NcUj7TbE%2Bh%2FivT0tczeOAgsWLG5WLT5GVkuzagkDojRzGPb7IoT3SnrB6&X-Amz-Signature=91935bdc8f4eb2a6bf554370b6c46a16996152b1112989d4a0ce7bd0ef249f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH5T7O7P%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb8XdSL5HWmFY3lgalAXT4LzJFB7R0zF%2F7PiyAnXNp%2FAiBFoh0YZlbkmzUyEGM4EnUpagOfkxsj%2FWXFrzCr%2Bt2KmSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM62LN1hKmeK5GW1s3KtwDOLd8OtR9DTClaakTw6dX38PERKhEGP6OBz%2F6Wmq4kRUtGvokwsJj5AFFNYpJ7vXMn7YJiTu3yAGXVgweHBY3Iqguyk1h24ZLZ8eHz%2FoMxa14BtY%2BsC2oKTeNZXZ8PpbQ9z1Wu0ukOdd%2B4KKsFB85npYbGJpzEUG0OrTnprm%2FwB7u6CDQZ%2FknfWfOCg9gnxb8%2BF8B03ncX1RJKJAsV0Z05EWykXVZ6n65Df9N2pVrPQdQyKuXOuV0wqWq0%2B0nQFI4hOfo6WZVF4GlCx9bwRD72X7IvOJp6ilUitMZaIMUULpywDVBVTlIqnBPWhV5Tc74aprspT5lYvwlPiJIi0ZfjTMTpR9WAKGf3NsSBhxnlYfGZ%2BZicB9i2R2Hc7PATeTtc8oz5vQxy5aE3HvS3rbP%2FgEJkgUqwK%2FOhw%2FyGDMH%2FSWecI8%2FOsRsDxgTOaQ6O152Ci5xLV4qWaGSlTjAMD%2B67P1E%2FIp2PodyyXMd%2BOtBfWFfZLlH4%2BIH2x71Y5mNSXx4Yznnkz5nGtRPsqiddb2OSoOuMsRlGlWUOk6M3QomhZ39VJw3NZZ5rMj8c4yBsuKKvxGkM6MfJSotYlWiC7I8vIDyeg6jZvk%2FgkrOOjOQupE6fRwwTNO%2F9j3tUigw7cSj1AY6pgG0ATOcYzLa2VG1F7htXpIpp3AYuEC6%2FAlN1dwZCmLTryBJhB2xYgUsixqEXBkv6bZQicPTG6eTxQSC2JuTvlmVRHO8GWOM07O15yMteCkWFdaAQiRxkOZoLxZhfDBb8Lx1jQe2J0lmyfgCVvfDKBfBju6x%2FSg5R4Rg%2Bu3NcUj7TbE%2Bh%2FivT0tczeOAgsWLG5WLT5GVkuzagkDojRzGPb7IoT3SnrB6&X-Amz-Signature=d8bd3752b9b11390eaf12b2c2e36cb23e93be4d1535aa2179965f78012705cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH5T7O7P%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb8XdSL5HWmFY3lgalAXT4LzJFB7R0zF%2F7PiyAnXNp%2FAiBFoh0YZlbkmzUyEGM4EnUpagOfkxsj%2FWXFrzCr%2Bt2KmSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM62LN1hKmeK5GW1s3KtwDOLd8OtR9DTClaakTw6dX38PERKhEGP6OBz%2F6Wmq4kRUtGvokwsJj5AFFNYpJ7vXMn7YJiTu3yAGXVgweHBY3Iqguyk1h24ZLZ8eHz%2FoMxa14BtY%2BsC2oKTeNZXZ8PpbQ9z1Wu0ukOdd%2B4KKsFB85npYbGJpzEUG0OrTnprm%2FwB7u6CDQZ%2FknfWfOCg9gnxb8%2BF8B03ncX1RJKJAsV0Z05EWykXVZ6n65Df9N2pVrPQdQyKuXOuV0wqWq0%2B0nQFI4hOfo6WZVF4GlCx9bwRD72X7IvOJp6ilUitMZaIMUULpywDVBVTlIqnBPWhV5Tc74aprspT5lYvwlPiJIi0ZfjTMTpR9WAKGf3NsSBhxnlYfGZ%2BZicB9i2R2Hc7PATeTtc8oz5vQxy5aE3HvS3rbP%2FgEJkgUqwK%2FOhw%2FyGDMH%2FSWecI8%2FOsRsDxgTOaQ6O152Ci5xLV4qWaGSlTjAMD%2B67P1E%2FIp2PodyyXMd%2BOtBfWFfZLlH4%2BIH2x71Y5mNSXx4Yznnkz5nGtRPsqiddb2OSoOuMsRlGlWUOk6M3QomhZ39VJw3NZZ5rMj8c4yBsuKKvxGkM6MfJSotYlWiC7I8vIDyeg6jZvk%2FgkrOOjOQupE6fRwwTNO%2F9j3tUigw7cSj1AY6pgG0ATOcYzLa2VG1F7htXpIpp3AYuEC6%2FAlN1dwZCmLTryBJhB2xYgUsixqEXBkv6bZQicPTG6eTxQSC2JuTvlmVRHO8GWOM07O15yMteCkWFdaAQiRxkOZoLxZhfDBb8Lx1jQe2J0lmyfgCVvfDKBfBju6x%2FSg5R4Rg%2Bu3NcUj7TbE%2Bh%2FivT0tczeOAgsWLG5WLT5GVkuzagkDojRzGPb7IoT3SnrB6&X-Amz-Signature=fd65e8ed87599229ec24dec831d724bbbc8b1e67289395b8a9756978b477a4e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH5T7O7P%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb8XdSL5HWmFY3lgalAXT4LzJFB7R0zF%2F7PiyAnXNp%2FAiBFoh0YZlbkmzUyEGM4EnUpagOfkxsj%2FWXFrzCr%2Bt2KmSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM62LN1hKmeK5GW1s3KtwDOLd8OtR9DTClaakTw6dX38PERKhEGP6OBz%2F6Wmq4kRUtGvokwsJj5AFFNYpJ7vXMn7YJiTu3yAGXVgweHBY3Iqguyk1h24ZLZ8eHz%2FoMxa14BtY%2BsC2oKTeNZXZ8PpbQ9z1Wu0ukOdd%2B4KKsFB85npYbGJpzEUG0OrTnprm%2FwB7u6CDQZ%2FknfWfOCg9gnxb8%2BF8B03ncX1RJKJAsV0Z05EWykXVZ6n65Df9N2pVrPQdQyKuXOuV0wqWq0%2B0nQFI4hOfo6WZVF4GlCx9bwRD72X7IvOJp6ilUitMZaIMUULpywDVBVTlIqnBPWhV5Tc74aprspT5lYvwlPiJIi0ZfjTMTpR9WAKGf3NsSBhxnlYfGZ%2BZicB9i2R2Hc7PATeTtc8oz5vQxy5aE3HvS3rbP%2FgEJkgUqwK%2FOhw%2FyGDMH%2FSWecI8%2FOsRsDxgTOaQ6O152Ci5xLV4qWaGSlTjAMD%2B67P1E%2FIp2PodyyXMd%2BOtBfWFfZLlH4%2BIH2x71Y5mNSXx4Yznnkz5nGtRPsqiddb2OSoOuMsRlGlWUOk6M3QomhZ39VJw3NZZ5rMj8c4yBsuKKvxGkM6MfJSotYlWiC7I8vIDyeg6jZvk%2FgkrOOjOQupE6fRwwTNO%2F9j3tUigw7cSj1AY6pgG0ATOcYzLa2VG1F7htXpIpp3AYuEC6%2FAlN1dwZCmLTryBJhB2xYgUsixqEXBkv6bZQicPTG6eTxQSC2JuTvlmVRHO8GWOM07O15yMteCkWFdaAQiRxkOZoLxZhfDBb8Lx1jQe2J0lmyfgCVvfDKBfBju6x%2FSg5R4Rg%2Bu3NcUj7TbE%2Bh%2FivT0tczeOAgsWLG5WLT5GVkuzagkDojRzGPb7IoT3SnrB6&X-Amz-Signature=fdec703cf2e3717e010c203985fb31248ce4864b49ddf286de82676afc343c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH5T7O7P%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb8XdSL5HWmFY3lgalAXT4LzJFB7R0zF%2F7PiyAnXNp%2FAiBFoh0YZlbkmzUyEGM4EnUpagOfkxsj%2FWXFrzCr%2Bt2KmSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM62LN1hKmeK5GW1s3KtwDOLd8OtR9DTClaakTw6dX38PERKhEGP6OBz%2F6Wmq4kRUtGvokwsJj5AFFNYpJ7vXMn7YJiTu3yAGXVgweHBY3Iqguyk1h24ZLZ8eHz%2FoMxa14BtY%2BsC2oKTeNZXZ8PpbQ9z1Wu0ukOdd%2B4KKsFB85npYbGJpzEUG0OrTnprm%2FwB7u6CDQZ%2FknfWfOCg9gnxb8%2BF8B03ncX1RJKJAsV0Z05EWykXVZ6n65Df9N2pVrPQdQyKuXOuV0wqWq0%2B0nQFI4hOfo6WZVF4GlCx9bwRD72X7IvOJp6ilUitMZaIMUULpywDVBVTlIqnBPWhV5Tc74aprspT5lYvwlPiJIi0ZfjTMTpR9WAKGf3NsSBhxnlYfGZ%2BZicB9i2R2Hc7PATeTtc8oz5vQxy5aE3HvS3rbP%2FgEJkgUqwK%2FOhw%2FyGDMH%2FSWecI8%2FOsRsDxgTOaQ6O152Ci5xLV4qWaGSlTjAMD%2B67P1E%2FIp2PodyyXMd%2BOtBfWFfZLlH4%2BIH2x71Y5mNSXx4Yznnkz5nGtRPsqiddb2OSoOuMsRlGlWUOk6M3QomhZ39VJw3NZZ5rMj8c4yBsuKKvxGkM6MfJSotYlWiC7I8vIDyeg6jZvk%2FgkrOOjOQupE6fRwwTNO%2F9j3tUigw7cSj1AY6pgG0ATOcYzLa2VG1F7htXpIpp3AYuEC6%2FAlN1dwZCmLTryBJhB2xYgUsixqEXBkv6bZQicPTG6eTxQSC2JuTvlmVRHO8GWOM07O15yMteCkWFdaAQiRxkOZoLxZhfDBb8Lx1jQe2J0lmyfgCVvfDKBfBju6x%2FSg5R4Rg%2Bu3NcUj7TbE%2Bh%2FivT0tczeOAgsWLG5WLT5GVkuzagkDojRzGPb7IoT3SnrB6&X-Amz-Signature=e1fa33657e1cee360aef345a301a43be8b89deae5380b6dd2dee07180764f7b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH5T7O7P%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb8XdSL5HWmFY3lgalAXT4LzJFB7R0zF%2F7PiyAnXNp%2FAiBFoh0YZlbkmzUyEGM4EnUpagOfkxsj%2FWXFrzCr%2Bt2KmSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM62LN1hKmeK5GW1s3KtwDOLd8OtR9DTClaakTw6dX38PERKhEGP6OBz%2F6Wmq4kRUtGvokwsJj5AFFNYpJ7vXMn7YJiTu3yAGXVgweHBY3Iqguyk1h24ZLZ8eHz%2FoMxa14BtY%2BsC2oKTeNZXZ8PpbQ9z1Wu0ukOdd%2B4KKsFB85npYbGJpzEUG0OrTnprm%2FwB7u6CDQZ%2FknfWfOCg9gnxb8%2BF8B03ncX1RJKJAsV0Z05EWykXVZ6n65Df9N2pVrPQdQyKuXOuV0wqWq0%2B0nQFI4hOfo6WZVF4GlCx9bwRD72X7IvOJp6ilUitMZaIMUULpywDVBVTlIqnBPWhV5Tc74aprspT5lYvwlPiJIi0ZfjTMTpR9WAKGf3NsSBhxnlYfGZ%2BZicB9i2R2Hc7PATeTtc8oz5vQxy5aE3HvS3rbP%2FgEJkgUqwK%2FOhw%2FyGDMH%2FSWecI8%2FOsRsDxgTOaQ6O152Ci5xLV4qWaGSlTjAMD%2B67P1E%2FIp2PodyyXMd%2BOtBfWFfZLlH4%2BIH2x71Y5mNSXx4Yznnkz5nGtRPsqiddb2OSoOuMsRlGlWUOk6M3QomhZ39VJw3NZZ5rMj8c4yBsuKKvxGkM6MfJSotYlWiC7I8vIDyeg6jZvk%2FgkrOOjOQupE6fRwwTNO%2F9j3tUigw7cSj1AY6pgG0ATOcYzLa2VG1F7htXpIpp3AYuEC6%2FAlN1dwZCmLTryBJhB2xYgUsixqEXBkv6bZQicPTG6eTxQSC2JuTvlmVRHO8GWOM07O15yMteCkWFdaAQiRxkOZoLxZhfDBb8Lx1jQe2J0lmyfgCVvfDKBfBju6x%2FSg5R4Rg%2Bu3NcUj7TbE%2Bh%2FivT0tczeOAgsWLG5WLT5GVkuzagkDojRzGPb7IoT3SnrB6&X-Amz-Signature=3cb4dae7f5858d2b7949c6db71109cf3ea8aa500714b58709eb7c3e476e870d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH5T7O7P%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb8XdSL5HWmFY3lgalAXT4LzJFB7R0zF%2F7PiyAnXNp%2FAiBFoh0YZlbkmzUyEGM4EnUpagOfkxsj%2FWXFrzCr%2Bt2KmSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM62LN1hKmeK5GW1s3KtwDOLd8OtR9DTClaakTw6dX38PERKhEGP6OBz%2F6Wmq4kRUtGvokwsJj5AFFNYpJ7vXMn7YJiTu3yAGXVgweHBY3Iqguyk1h24ZLZ8eHz%2FoMxa14BtY%2BsC2oKTeNZXZ8PpbQ9z1Wu0ukOdd%2B4KKsFB85npYbGJpzEUG0OrTnprm%2FwB7u6CDQZ%2FknfWfOCg9gnxb8%2BF8B03ncX1RJKJAsV0Z05EWykXVZ6n65Df9N2pVrPQdQyKuXOuV0wqWq0%2B0nQFI4hOfo6WZVF4GlCx9bwRD72X7IvOJp6ilUitMZaIMUULpywDVBVTlIqnBPWhV5Tc74aprspT5lYvwlPiJIi0ZfjTMTpR9WAKGf3NsSBhxnlYfGZ%2BZicB9i2R2Hc7PATeTtc8oz5vQxy5aE3HvS3rbP%2FgEJkgUqwK%2FOhw%2FyGDMH%2FSWecI8%2FOsRsDxgTOaQ6O152Ci5xLV4qWaGSlTjAMD%2B67P1E%2FIp2PodyyXMd%2BOtBfWFfZLlH4%2BIH2x71Y5mNSXx4Yznnkz5nGtRPsqiddb2OSoOuMsRlGlWUOk6M3QomhZ39VJw3NZZ5rMj8c4yBsuKKvxGkM6MfJSotYlWiC7I8vIDyeg6jZvk%2FgkrOOjOQupE6fRwwTNO%2F9j3tUigw7cSj1AY6pgG0ATOcYzLa2VG1F7htXpIpp3AYuEC6%2FAlN1dwZCmLTryBJhB2xYgUsixqEXBkv6bZQicPTG6eTxQSC2JuTvlmVRHO8GWOM07O15yMteCkWFdaAQiRxkOZoLxZhfDBb8Lx1jQe2J0lmyfgCVvfDKBfBju6x%2FSg5R4Rg%2Bu3NcUj7TbE%2Bh%2FivT0tczeOAgsWLG5WLT5GVkuzagkDojRzGPb7IoT3SnrB6&X-Amz-Signature=9a1f0c94ea7d6e9363e19b217253f3f1124b0e986d2852e6e7ad9f96d9e0e74a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH5T7O7P%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb8XdSL5HWmFY3lgalAXT4LzJFB7R0zF%2F7PiyAnXNp%2FAiBFoh0YZlbkmzUyEGM4EnUpagOfkxsj%2FWXFrzCr%2Bt2KmSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM62LN1hKmeK5GW1s3KtwDOLd8OtR9DTClaakTw6dX38PERKhEGP6OBz%2F6Wmq4kRUtGvokwsJj5AFFNYpJ7vXMn7YJiTu3yAGXVgweHBY3Iqguyk1h24ZLZ8eHz%2FoMxa14BtY%2BsC2oKTeNZXZ8PpbQ9z1Wu0ukOdd%2B4KKsFB85npYbGJpzEUG0OrTnprm%2FwB7u6CDQZ%2FknfWfOCg9gnxb8%2BF8B03ncX1RJKJAsV0Z05EWykXVZ6n65Df9N2pVrPQdQyKuXOuV0wqWq0%2B0nQFI4hOfo6WZVF4GlCx9bwRD72X7IvOJp6ilUitMZaIMUULpywDVBVTlIqnBPWhV5Tc74aprspT5lYvwlPiJIi0ZfjTMTpR9WAKGf3NsSBhxnlYfGZ%2BZicB9i2R2Hc7PATeTtc8oz5vQxy5aE3HvS3rbP%2FgEJkgUqwK%2FOhw%2FyGDMH%2FSWecI8%2FOsRsDxgTOaQ6O152Ci5xLV4qWaGSlTjAMD%2B67P1E%2FIp2PodyyXMd%2BOtBfWFfZLlH4%2BIH2x71Y5mNSXx4Yznnkz5nGtRPsqiddb2OSoOuMsRlGlWUOk6M3QomhZ39VJw3NZZ5rMj8c4yBsuKKvxGkM6MfJSotYlWiC7I8vIDyeg6jZvk%2FgkrOOjOQupE6fRwwTNO%2F9j3tUigw7cSj1AY6pgG0ATOcYzLa2VG1F7htXpIpp3AYuEC6%2FAlN1dwZCmLTryBJhB2xYgUsixqEXBkv6bZQicPTG6eTxQSC2JuTvlmVRHO8GWOM07O15yMteCkWFdaAQiRxkOZoLxZhfDBb8Lx1jQe2J0lmyfgCVvfDKBfBju6x%2FSg5R4Rg%2Bu3NcUj7TbE%2Bh%2FivT0tczeOAgsWLG5WLT5GVkuzagkDojRzGPb7IoT3SnrB6&X-Amz-Signature=df3efa27ad8ebbfddd6b7794745a1326c08b62c85b327bba814ed724f1579a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH5T7O7P%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb8XdSL5HWmFY3lgalAXT4LzJFB7R0zF%2F7PiyAnXNp%2FAiBFoh0YZlbkmzUyEGM4EnUpagOfkxsj%2FWXFrzCr%2Bt2KmSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM62LN1hKmeK5GW1s3KtwDOLd8OtR9DTClaakTw6dX38PERKhEGP6OBz%2F6Wmq4kRUtGvokwsJj5AFFNYpJ7vXMn7YJiTu3yAGXVgweHBY3Iqguyk1h24ZLZ8eHz%2FoMxa14BtY%2BsC2oKTeNZXZ8PpbQ9z1Wu0ukOdd%2B4KKsFB85npYbGJpzEUG0OrTnprm%2FwB7u6CDQZ%2FknfWfOCg9gnxb8%2BF8B03ncX1RJKJAsV0Z05EWykXVZ6n65Df9N2pVrPQdQyKuXOuV0wqWq0%2B0nQFI4hOfo6WZVF4GlCx9bwRD72X7IvOJp6ilUitMZaIMUULpywDVBVTlIqnBPWhV5Tc74aprspT5lYvwlPiJIi0ZfjTMTpR9WAKGf3NsSBhxnlYfGZ%2BZicB9i2R2Hc7PATeTtc8oz5vQxy5aE3HvS3rbP%2FgEJkgUqwK%2FOhw%2FyGDMH%2FSWecI8%2FOsRsDxgTOaQ6O152Ci5xLV4qWaGSlTjAMD%2B67P1E%2FIp2PodyyXMd%2BOtBfWFfZLlH4%2BIH2x71Y5mNSXx4Yznnkz5nGtRPsqiddb2OSoOuMsRlGlWUOk6M3QomhZ39VJw3NZZ5rMj8c4yBsuKKvxGkM6MfJSotYlWiC7I8vIDyeg6jZvk%2FgkrOOjOQupE6fRwwTNO%2F9j3tUigw7cSj1AY6pgG0ATOcYzLa2VG1F7htXpIpp3AYuEC6%2FAlN1dwZCmLTryBJhB2xYgUsixqEXBkv6bZQicPTG6eTxQSC2JuTvlmVRHO8GWOM07O15yMteCkWFdaAQiRxkOZoLxZhfDBb8Lx1jQe2J0lmyfgCVvfDKBfBju6x%2FSg5R4Rg%2Bu3NcUj7TbE%2Bh%2FivT0tczeOAgsWLG5WLT5GVkuzagkDojRzGPb7IoT3SnrB6&X-Amz-Signature=ae7deeb0e558bc79898d9e030e474c226331fd7d78567dcbf408c7a80d485dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
