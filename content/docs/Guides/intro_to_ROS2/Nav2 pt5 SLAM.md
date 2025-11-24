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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFKW3OR%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBIrHG2wmJ7PET96Usuk4hvPAK3v2cVG9pn8KvGVvBgIhANWwz4cHnXC4sjT4f0HTwhYPUedTX%2Bf1FjGJTZN6ojgqKv8DCEoQABoMNjM3NDIzMTgzODA1IgxLcbuKceuoYewQQD8q3AOQM4SV%2BgS%2B8AKZ4sNMlJ3Zs5%2FderMsZFOSojKbDXTyrJ2MJFM8pyeKgVb64u8gez94rJtBTsesX8W8KP4%2FPxaeV%2FwQWaj7gdpkwHPz6Cw8I2I6QljoBKIEsrmCPIw4JWcWvE%2FGGYxYn6%2Ba1avHOplww6KMjkJ2h3ZV%2FHVSV%2FyZp6jCE0MDRxDKiY9qHNJA%2BvfdX9U1FsM4MfsqiYaH9tbEvmQtjuER4zGwnG0R9ctFUEOF%2FQlo0iaGHsbeKjNtu6xJTAdTlZwVt4AydFdr%2FdHg0LzBZ8KRcTJNPv4Sn%2FZ71YvlS8gpjYTJxLcVcwMF9kZ3D5erp2mtqiFbyeeN%2BPT%2BB%2FZork6Q3WXoRsEw%2BzB2aKTMwnFtB%2BPZWBwyh%2Fx717yBr1%2B4P47Xv0fx7nAwbgWhWUDNL7vvMNWMePUEsgByV24c344JpQot2lBimA7JbjCBepmbJ0wlO32nlBLpG2c%2FnWQTwurGaNMwMgP%2F9Qfbww22LlW1cGB7dSltgG388CkYEBbfe5SNnRhFhwFJewNEheANI0RslAEODx%2BwF1BHd1Ra6AUDIXhxgUNgg8rx8ED%2BORlzlcvHlsPyTo18G6USffgYj9eHzDnNzzK3T6i4y2MjNhDB3%2BZvKj5NoDDR3I7JBjqkAffEZorBna4V7v%2BPJfjoMi1zYEUoExp6hXEwzt0XyrT3Bpw%2FxFJxCxZ%2BB%2FsIRT8vci7VWEnWBboO6aocrlF22BuW3B1rsUwX9pn3OJssLKhPM7GgokM%2FZwb6bW93jigf9%2BZJdkVgZVz3grO1HKMXW3KTmxhhywGFUxZklbMAjzXwsOKzV7EFjZbsxTsMjoHCRFegzbZKcjAXDgaJqYgg3Tt62RCT&X-Amz-Signature=9aa85aa10d9c3b9744977aa12c61caaaac559dd80ef63a03638af28a3fb37d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFKW3OR%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBIrHG2wmJ7PET96Usuk4hvPAK3v2cVG9pn8KvGVvBgIhANWwz4cHnXC4sjT4f0HTwhYPUedTX%2Bf1FjGJTZN6ojgqKv8DCEoQABoMNjM3NDIzMTgzODA1IgxLcbuKceuoYewQQD8q3AOQM4SV%2BgS%2B8AKZ4sNMlJ3Zs5%2FderMsZFOSojKbDXTyrJ2MJFM8pyeKgVb64u8gez94rJtBTsesX8W8KP4%2FPxaeV%2FwQWaj7gdpkwHPz6Cw8I2I6QljoBKIEsrmCPIw4JWcWvE%2FGGYxYn6%2Ba1avHOplww6KMjkJ2h3ZV%2FHVSV%2FyZp6jCE0MDRxDKiY9qHNJA%2BvfdX9U1FsM4MfsqiYaH9tbEvmQtjuER4zGwnG0R9ctFUEOF%2FQlo0iaGHsbeKjNtu6xJTAdTlZwVt4AydFdr%2FdHg0LzBZ8KRcTJNPv4Sn%2FZ71YvlS8gpjYTJxLcVcwMF9kZ3D5erp2mtqiFbyeeN%2BPT%2BB%2FZork6Q3WXoRsEw%2BzB2aKTMwnFtB%2BPZWBwyh%2Fx717yBr1%2B4P47Xv0fx7nAwbgWhWUDNL7vvMNWMePUEsgByV24c344JpQot2lBimA7JbjCBepmbJ0wlO32nlBLpG2c%2FnWQTwurGaNMwMgP%2F9Qfbww22LlW1cGB7dSltgG388CkYEBbfe5SNnRhFhwFJewNEheANI0RslAEODx%2BwF1BHd1Ra6AUDIXhxgUNgg8rx8ED%2BORlzlcvHlsPyTo18G6USffgYj9eHzDnNzzK3T6i4y2MjNhDB3%2BZvKj5NoDDR3I7JBjqkAffEZorBna4V7v%2BPJfjoMi1zYEUoExp6hXEwzt0XyrT3Bpw%2FxFJxCxZ%2BB%2FsIRT8vci7VWEnWBboO6aocrlF22BuW3B1rsUwX9pn3OJssLKhPM7GgokM%2FZwb6bW93jigf9%2BZJdkVgZVz3grO1HKMXW3KTmxhhywGFUxZklbMAjzXwsOKzV7EFjZbsxTsMjoHCRFegzbZKcjAXDgaJqYgg3Tt62RCT&X-Amz-Signature=b116cd99f48bac6cc0f656c696fcd66a4666f0cf78b113a8e25b82724b313ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFKW3OR%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBIrHG2wmJ7PET96Usuk4hvPAK3v2cVG9pn8KvGVvBgIhANWwz4cHnXC4sjT4f0HTwhYPUedTX%2Bf1FjGJTZN6ojgqKv8DCEoQABoMNjM3NDIzMTgzODA1IgxLcbuKceuoYewQQD8q3AOQM4SV%2BgS%2B8AKZ4sNMlJ3Zs5%2FderMsZFOSojKbDXTyrJ2MJFM8pyeKgVb64u8gez94rJtBTsesX8W8KP4%2FPxaeV%2FwQWaj7gdpkwHPz6Cw8I2I6QljoBKIEsrmCPIw4JWcWvE%2FGGYxYn6%2Ba1avHOplww6KMjkJ2h3ZV%2FHVSV%2FyZp6jCE0MDRxDKiY9qHNJA%2BvfdX9U1FsM4MfsqiYaH9tbEvmQtjuER4zGwnG0R9ctFUEOF%2FQlo0iaGHsbeKjNtu6xJTAdTlZwVt4AydFdr%2FdHg0LzBZ8KRcTJNPv4Sn%2FZ71YvlS8gpjYTJxLcVcwMF9kZ3D5erp2mtqiFbyeeN%2BPT%2BB%2FZork6Q3WXoRsEw%2BzB2aKTMwnFtB%2BPZWBwyh%2Fx717yBr1%2B4P47Xv0fx7nAwbgWhWUDNL7vvMNWMePUEsgByV24c344JpQot2lBimA7JbjCBepmbJ0wlO32nlBLpG2c%2FnWQTwurGaNMwMgP%2F9Qfbww22LlW1cGB7dSltgG388CkYEBbfe5SNnRhFhwFJewNEheANI0RslAEODx%2BwF1BHd1Ra6AUDIXhxgUNgg8rx8ED%2BORlzlcvHlsPyTo18G6USffgYj9eHzDnNzzK3T6i4y2MjNhDB3%2BZvKj5NoDDR3I7JBjqkAffEZorBna4V7v%2BPJfjoMi1zYEUoExp6hXEwzt0XyrT3Bpw%2FxFJxCxZ%2BB%2FsIRT8vci7VWEnWBboO6aocrlF22BuW3B1rsUwX9pn3OJssLKhPM7GgokM%2FZwb6bW93jigf9%2BZJdkVgZVz3grO1HKMXW3KTmxhhywGFUxZklbMAjzXwsOKzV7EFjZbsxTsMjoHCRFegzbZKcjAXDgaJqYgg3Tt62RCT&X-Amz-Signature=0ef2f4cf28e242b192a26b70c11b9d5f34a4ca675e2e4cf685a2336b03d89ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFKW3OR%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBIrHG2wmJ7PET96Usuk4hvPAK3v2cVG9pn8KvGVvBgIhANWwz4cHnXC4sjT4f0HTwhYPUedTX%2Bf1FjGJTZN6ojgqKv8DCEoQABoMNjM3NDIzMTgzODA1IgxLcbuKceuoYewQQD8q3AOQM4SV%2BgS%2B8AKZ4sNMlJ3Zs5%2FderMsZFOSojKbDXTyrJ2MJFM8pyeKgVb64u8gez94rJtBTsesX8W8KP4%2FPxaeV%2FwQWaj7gdpkwHPz6Cw8I2I6QljoBKIEsrmCPIw4JWcWvE%2FGGYxYn6%2Ba1avHOplww6KMjkJ2h3ZV%2FHVSV%2FyZp6jCE0MDRxDKiY9qHNJA%2BvfdX9U1FsM4MfsqiYaH9tbEvmQtjuER4zGwnG0R9ctFUEOF%2FQlo0iaGHsbeKjNtu6xJTAdTlZwVt4AydFdr%2FdHg0LzBZ8KRcTJNPv4Sn%2FZ71YvlS8gpjYTJxLcVcwMF9kZ3D5erp2mtqiFbyeeN%2BPT%2BB%2FZork6Q3WXoRsEw%2BzB2aKTMwnFtB%2BPZWBwyh%2Fx717yBr1%2B4P47Xv0fx7nAwbgWhWUDNL7vvMNWMePUEsgByV24c344JpQot2lBimA7JbjCBepmbJ0wlO32nlBLpG2c%2FnWQTwurGaNMwMgP%2F9Qfbww22LlW1cGB7dSltgG388CkYEBbfe5SNnRhFhwFJewNEheANI0RslAEODx%2BwF1BHd1Ra6AUDIXhxgUNgg8rx8ED%2BORlzlcvHlsPyTo18G6USffgYj9eHzDnNzzK3T6i4y2MjNhDB3%2BZvKj5NoDDR3I7JBjqkAffEZorBna4V7v%2BPJfjoMi1zYEUoExp6hXEwzt0XyrT3Bpw%2FxFJxCxZ%2BB%2FsIRT8vci7VWEnWBboO6aocrlF22BuW3B1rsUwX9pn3OJssLKhPM7GgokM%2FZwb6bW93jigf9%2BZJdkVgZVz3grO1HKMXW3KTmxhhywGFUxZklbMAjzXwsOKzV7EFjZbsxTsMjoHCRFegzbZKcjAXDgaJqYgg3Tt62RCT&X-Amz-Signature=dbdebb8dd4c877e3c04e00e33f494ee7078ddb4d70f9ec7810f649b7dbf46cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFKW3OR%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBIrHG2wmJ7PET96Usuk4hvPAK3v2cVG9pn8KvGVvBgIhANWwz4cHnXC4sjT4f0HTwhYPUedTX%2Bf1FjGJTZN6ojgqKv8DCEoQABoMNjM3NDIzMTgzODA1IgxLcbuKceuoYewQQD8q3AOQM4SV%2BgS%2B8AKZ4sNMlJ3Zs5%2FderMsZFOSojKbDXTyrJ2MJFM8pyeKgVb64u8gez94rJtBTsesX8W8KP4%2FPxaeV%2FwQWaj7gdpkwHPz6Cw8I2I6QljoBKIEsrmCPIw4JWcWvE%2FGGYxYn6%2Ba1avHOplww6KMjkJ2h3ZV%2FHVSV%2FyZp6jCE0MDRxDKiY9qHNJA%2BvfdX9U1FsM4MfsqiYaH9tbEvmQtjuER4zGwnG0R9ctFUEOF%2FQlo0iaGHsbeKjNtu6xJTAdTlZwVt4AydFdr%2FdHg0LzBZ8KRcTJNPv4Sn%2FZ71YvlS8gpjYTJxLcVcwMF9kZ3D5erp2mtqiFbyeeN%2BPT%2BB%2FZork6Q3WXoRsEw%2BzB2aKTMwnFtB%2BPZWBwyh%2Fx717yBr1%2B4P47Xv0fx7nAwbgWhWUDNL7vvMNWMePUEsgByV24c344JpQot2lBimA7JbjCBepmbJ0wlO32nlBLpG2c%2FnWQTwurGaNMwMgP%2F9Qfbww22LlW1cGB7dSltgG388CkYEBbfe5SNnRhFhwFJewNEheANI0RslAEODx%2BwF1BHd1Ra6AUDIXhxgUNgg8rx8ED%2BORlzlcvHlsPyTo18G6USffgYj9eHzDnNzzK3T6i4y2MjNhDB3%2BZvKj5NoDDR3I7JBjqkAffEZorBna4V7v%2BPJfjoMi1zYEUoExp6hXEwzt0XyrT3Bpw%2FxFJxCxZ%2BB%2FsIRT8vci7VWEnWBboO6aocrlF22BuW3B1rsUwX9pn3OJssLKhPM7GgokM%2FZwb6bW93jigf9%2BZJdkVgZVz3grO1HKMXW3KTmxhhywGFUxZklbMAjzXwsOKzV7EFjZbsxTsMjoHCRFegzbZKcjAXDgaJqYgg3Tt62RCT&X-Amz-Signature=27aa6c6008405f04ce0a8f87aebe0d6c7570e2f6109514cb19c066e13d68c49f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFKW3OR%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBIrHG2wmJ7PET96Usuk4hvPAK3v2cVG9pn8KvGVvBgIhANWwz4cHnXC4sjT4f0HTwhYPUedTX%2Bf1FjGJTZN6ojgqKv8DCEoQABoMNjM3NDIzMTgzODA1IgxLcbuKceuoYewQQD8q3AOQM4SV%2BgS%2B8AKZ4sNMlJ3Zs5%2FderMsZFOSojKbDXTyrJ2MJFM8pyeKgVb64u8gez94rJtBTsesX8W8KP4%2FPxaeV%2FwQWaj7gdpkwHPz6Cw8I2I6QljoBKIEsrmCPIw4JWcWvE%2FGGYxYn6%2Ba1avHOplww6KMjkJ2h3ZV%2FHVSV%2FyZp6jCE0MDRxDKiY9qHNJA%2BvfdX9U1FsM4MfsqiYaH9tbEvmQtjuER4zGwnG0R9ctFUEOF%2FQlo0iaGHsbeKjNtu6xJTAdTlZwVt4AydFdr%2FdHg0LzBZ8KRcTJNPv4Sn%2FZ71YvlS8gpjYTJxLcVcwMF9kZ3D5erp2mtqiFbyeeN%2BPT%2BB%2FZork6Q3WXoRsEw%2BzB2aKTMwnFtB%2BPZWBwyh%2Fx717yBr1%2B4P47Xv0fx7nAwbgWhWUDNL7vvMNWMePUEsgByV24c344JpQot2lBimA7JbjCBepmbJ0wlO32nlBLpG2c%2FnWQTwurGaNMwMgP%2F9Qfbww22LlW1cGB7dSltgG388CkYEBbfe5SNnRhFhwFJewNEheANI0RslAEODx%2BwF1BHd1Ra6AUDIXhxgUNgg8rx8ED%2BORlzlcvHlsPyTo18G6USffgYj9eHzDnNzzK3T6i4y2MjNhDB3%2BZvKj5NoDDR3I7JBjqkAffEZorBna4V7v%2BPJfjoMi1zYEUoExp6hXEwzt0XyrT3Bpw%2FxFJxCxZ%2BB%2FsIRT8vci7VWEnWBboO6aocrlF22BuW3B1rsUwX9pn3OJssLKhPM7GgokM%2FZwb6bW93jigf9%2BZJdkVgZVz3grO1HKMXW3KTmxhhywGFUxZklbMAjzXwsOKzV7EFjZbsxTsMjoHCRFegzbZKcjAXDgaJqYgg3Tt62RCT&X-Amz-Signature=def8ccc7c16a1c298c894cd0ef61f0da68b0d30610159f2ea2748d96612be8d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFKW3OR%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBIrHG2wmJ7PET96Usuk4hvPAK3v2cVG9pn8KvGVvBgIhANWwz4cHnXC4sjT4f0HTwhYPUedTX%2Bf1FjGJTZN6ojgqKv8DCEoQABoMNjM3NDIzMTgzODA1IgxLcbuKceuoYewQQD8q3AOQM4SV%2BgS%2B8AKZ4sNMlJ3Zs5%2FderMsZFOSojKbDXTyrJ2MJFM8pyeKgVb64u8gez94rJtBTsesX8W8KP4%2FPxaeV%2FwQWaj7gdpkwHPz6Cw8I2I6QljoBKIEsrmCPIw4JWcWvE%2FGGYxYn6%2Ba1avHOplww6KMjkJ2h3ZV%2FHVSV%2FyZp6jCE0MDRxDKiY9qHNJA%2BvfdX9U1FsM4MfsqiYaH9tbEvmQtjuER4zGwnG0R9ctFUEOF%2FQlo0iaGHsbeKjNtu6xJTAdTlZwVt4AydFdr%2FdHg0LzBZ8KRcTJNPv4Sn%2FZ71YvlS8gpjYTJxLcVcwMF9kZ3D5erp2mtqiFbyeeN%2BPT%2BB%2FZork6Q3WXoRsEw%2BzB2aKTMwnFtB%2BPZWBwyh%2Fx717yBr1%2B4P47Xv0fx7nAwbgWhWUDNL7vvMNWMePUEsgByV24c344JpQot2lBimA7JbjCBepmbJ0wlO32nlBLpG2c%2FnWQTwurGaNMwMgP%2F9Qfbww22LlW1cGB7dSltgG388CkYEBbfe5SNnRhFhwFJewNEheANI0RslAEODx%2BwF1BHd1Ra6AUDIXhxgUNgg8rx8ED%2BORlzlcvHlsPyTo18G6USffgYj9eHzDnNzzK3T6i4y2MjNhDB3%2BZvKj5NoDDR3I7JBjqkAffEZorBna4V7v%2BPJfjoMi1zYEUoExp6hXEwzt0XyrT3Bpw%2FxFJxCxZ%2BB%2FsIRT8vci7VWEnWBboO6aocrlF22BuW3B1rsUwX9pn3OJssLKhPM7GgokM%2FZwb6bW93jigf9%2BZJdkVgZVz3grO1HKMXW3KTmxhhywGFUxZklbMAjzXwsOKzV7EFjZbsxTsMjoHCRFegzbZKcjAXDgaJqYgg3Tt62RCT&X-Amz-Signature=9c70dc87f27bcadd728390765fa97c3a79c89c876787e1aa75d33aca10fc9b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFKW3OR%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBIrHG2wmJ7PET96Usuk4hvPAK3v2cVG9pn8KvGVvBgIhANWwz4cHnXC4sjT4f0HTwhYPUedTX%2Bf1FjGJTZN6ojgqKv8DCEoQABoMNjM3NDIzMTgzODA1IgxLcbuKceuoYewQQD8q3AOQM4SV%2BgS%2B8AKZ4sNMlJ3Zs5%2FderMsZFOSojKbDXTyrJ2MJFM8pyeKgVb64u8gez94rJtBTsesX8W8KP4%2FPxaeV%2FwQWaj7gdpkwHPz6Cw8I2I6QljoBKIEsrmCPIw4JWcWvE%2FGGYxYn6%2Ba1avHOplww6KMjkJ2h3ZV%2FHVSV%2FyZp6jCE0MDRxDKiY9qHNJA%2BvfdX9U1FsM4MfsqiYaH9tbEvmQtjuER4zGwnG0R9ctFUEOF%2FQlo0iaGHsbeKjNtu6xJTAdTlZwVt4AydFdr%2FdHg0LzBZ8KRcTJNPv4Sn%2FZ71YvlS8gpjYTJxLcVcwMF9kZ3D5erp2mtqiFbyeeN%2BPT%2BB%2FZork6Q3WXoRsEw%2BzB2aKTMwnFtB%2BPZWBwyh%2Fx717yBr1%2B4P47Xv0fx7nAwbgWhWUDNL7vvMNWMePUEsgByV24c344JpQot2lBimA7JbjCBepmbJ0wlO32nlBLpG2c%2FnWQTwurGaNMwMgP%2F9Qfbww22LlW1cGB7dSltgG388CkYEBbfe5SNnRhFhwFJewNEheANI0RslAEODx%2BwF1BHd1Ra6AUDIXhxgUNgg8rx8ED%2BORlzlcvHlsPyTo18G6USffgYj9eHzDnNzzK3T6i4y2MjNhDB3%2BZvKj5NoDDR3I7JBjqkAffEZorBna4V7v%2BPJfjoMi1zYEUoExp6hXEwzt0XyrT3Bpw%2FxFJxCxZ%2BB%2FsIRT8vci7VWEnWBboO6aocrlF22BuW3B1rsUwX9pn3OJssLKhPM7GgokM%2FZwb6bW93jigf9%2BZJdkVgZVz3grO1HKMXW3KTmxhhywGFUxZklbMAjzXwsOKzV7EFjZbsxTsMjoHCRFegzbZKcjAXDgaJqYgg3Tt62RCT&X-Amz-Signature=040d0773c05678b1257383d47865a0b9ecd0e4429f24b85572eaab87dd435836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFKW3OR%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBIrHG2wmJ7PET96Usuk4hvPAK3v2cVG9pn8KvGVvBgIhANWwz4cHnXC4sjT4f0HTwhYPUedTX%2Bf1FjGJTZN6ojgqKv8DCEoQABoMNjM3NDIzMTgzODA1IgxLcbuKceuoYewQQD8q3AOQM4SV%2BgS%2B8AKZ4sNMlJ3Zs5%2FderMsZFOSojKbDXTyrJ2MJFM8pyeKgVb64u8gez94rJtBTsesX8W8KP4%2FPxaeV%2FwQWaj7gdpkwHPz6Cw8I2I6QljoBKIEsrmCPIw4JWcWvE%2FGGYxYn6%2Ba1avHOplww6KMjkJ2h3ZV%2FHVSV%2FyZp6jCE0MDRxDKiY9qHNJA%2BvfdX9U1FsM4MfsqiYaH9tbEvmQtjuER4zGwnG0R9ctFUEOF%2FQlo0iaGHsbeKjNtu6xJTAdTlZwVt4AydFdr%2FdHg0LzBZ8KRcTJNPv4Sn%2FZ71YvlS8gpjYTJxLcVcwMF9kZ3D5erp2mtqiFbyeeN%2BPT%2BB%2FZork6Q3WXoRsEw%2BzB2aKTMwnFtB%2BPZWBwyh%2Fx717yBr1%2B4P47Xv0fx7nAwbgWhWUDNL7vvMNWMePUEsgByV24c344JpQot2lBimA7JbjCBepmbJ0wlO32nlBLpG2c%2FnWQTwurGaNMwMgP%2F9Qfbww22LlW1cGB7dSltgG388CkYEBbfe5SNnRhFhwFJewNEheANI0RslAEODx%2BwF1BHd1Ra6AUDIXhxgUNgg8rx8ED%2BORlzlcvHlsPyTo18G6USffgYj9eHzDnNzzK3T6i4y2MjNhDB3%2BZvKj5NoDDR3I7JBjqkAffEZorBna4V7v%2BPJfjoMi1zYEUoExp6hXEwzt0XyrT3Bpw%2FxFJxCxZ%2BB%2FsIRT8vci7VWEnWBboO6aocrlF22BuW3B1rsUwX9pn3OJssLKhPM7GgokM%2FZwb6bW93jigf9%2BZJdkVgZVz3grO1HKMXW3KTmxhhywGFUxZklbMAjzXwsOKzV7EFjZbsxTsMjoHCRFegzbZKcjAXDgaJqYgg3Tt62RCT&X-Amz-Signature=4333c2d3e9afc10d83af3b58bc7c4062d8cfbb7b0f7265610c1b2c074916b139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFKW3OR%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBIrHG2wmJ7PET96Usuk4hvPAK3v2cVG9pn8KvGVvBgIhANWwz4cHnXC4sjT4f0HTwhYPUedTX%2Bf1FjGJTZN6ojgqKv8DCEoQABoMNjM3NDIzMTgzODA1IgxLcbuKceuoYewQQD8q3AOQM4SV%2BgS%2B8AKZ4sNMlJ3Zs5%2FderMsZFOSojKbDXTyrJ2MJFM8pyeKgVb64u8gez94rJtBTsesX8W8KP4%2FPxaeV%2FwQWaj7gdpkwHPz6Cw8I2I6QljoBKIEsrmCPIw4JWcWvE%2FGGYxYn6%2Ba1avHOplww6KMjkJ2h3ZV%2FHVSV%2FyZp6jCE0MDRxDKiY9qHNJA%2BvfdX9U1FsM4MfsqiYaH9tbEvmQtjuER4zGwnG0R9ctFUEOF%2FQlo0iaGHsbeKjNtu6xJTAdTlZwVt4AydFdr%2FdHg0LzBZ8KRcTJNPv4Sn%2FZ71YvlS8gpjYTJxLcVcwMF9kZ3D5erp2mtqiFbyeeN%2BPT%2BB%2FZork6Q3WXoRsEw%2BzB2aKTMwnFtB%2BPZWBwyh%2Fx717yBr1%2B4P47Xv0fx7nAwbgWhWUDNL7vvMNWMePUEsgByV24c344JpQot2lBimA7JbjCBepmbJ0wlO32nlBLpG2c%2FnWQTwurGaNMwMgP%2F9Qfbww22LlW1cGB7dSltgG388CkYEBbfe5SNnRhFhwFJewNEheANI0RslAEODx%2BwF1BHd1Ra6AUDIXhxgUNgg8rx8ED%2BORlzlcvHlsPyTo18G6USffgYj9eHzDnNzzK3T6i4y2MjNhDB3%2BZvKj5NoDDR3I7JBjqkAffEZorBna4V7v%2BPJfjoMi1zYEUoExp6hXEwzt0XyrT3Bpw%2FxFJxCxZ%2BB%2FsIRT8vci7VWEnWBboO6aocrlF22BuW3B1rsUwX9pn3OJssLKhPM7GgokM%2FZwb6bW93jigf9%2BZJdkVgZVz3grO1HKMXW3KTmxhhywGFUxZklbMAjzXwsOKzV7EFjZbsxTsMjoHCRFegzbZKcjAXDgaJqYgg3Tt62RCT&X-Amz-Signature=98c6744afdcd02c55eda127606a3a0223539fcb0972b9f662d866a24f825c226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFKW3OR%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBIrHG2wmJ7PET96Usuk4hvPAK3v2cVG9pn8KvGVvBgIhANWwz4cHnXC4sjT4f0HTwhYPUedTX%2Bf1FjGJTZN6ojgqKv8DCEoQABoMNjM3NDIzMTgzODA1IgxLcbuKceuoYewQQD8q3AOQM4SV%2BgS%2B8AKZ4sNMlJ3Zs5%2FderMsZFOSojKbDXTyrJ2MJFM8pyeKgVb64u8gez94rJtBTsesX8W8KP4%2FPxaeV%2FwQWaj7gdpkwHPz6Cw8I2I6QljoBKIEsrmCPIw4JWcWvE%2FGGYxYn6%2Ba1avHOplww6KMjkJ2h3ZV%2FHVSV%2FyZp6jCE0MDRxDKiY9qHNJA%2BvfdX9U1FsM4MfsqiYaH9tbEvmQtjuER4zGwnG0R9ctFUEOF%2FQlo0iaGHsbeKjNtu6xJTAdTlZwVt4AydFdr%2FdHg0LzBZ8KRcTJNPv4Sn%2FZ71YvlS8gpjYTJxLcVcwMF9kZ3D5erp2mtqiFbyeeN%2BPT%2BB%2FZork6Q3WXoRsEw%2BzB2aKTMwnFtB%2BPZWBwyh%2Fx717yBr1%2B4P47Xv0fx7nAwbgWhWUDNL7vvMNWMePUEsgByV24c344JpQot2lBimA7JbjCBepmbJ0wlO32nlBLpG2c%2FnWQTwurGaNMwMgP%2F9Qfbww22LlW1cGB7dSltgG388CkYEBbfe5SNnRhFhwFJewNEheANI0RslAEODx%2BwF1BHd1Ra6AUDIXhxgUNgg8rx8ED%2BORlzlcvHlsPyTo18G6USffgYj9eHzDnNzzK3T6i4y2MjNhDB3%2BZvKj5NoDDR3I7JBjqkAffEZorBna4V7v%2BPJfjoMi1zYEUoExp6hXEwzt0XyrT3Bpw%2FxFJxCxZ%2BB%2FsIRT8vci7VWEnWBboO6aocrlF22BuW3B1rsUwX9pn3OJssLKhPM7GgokM%2FZwb6bW93jigf9%2BZJdkVgZVz3grO1HKMXW3KTmxhhywGFUxZklbMAjzXwsOKzV7EFjZbsxTsMjoHCRFegzbZKcjAXDgaJqYgg3Tt62RCT&X-Amz-Signature=6a0fb5b12a35c49aca59bda07509f344b5c755e3c4d4ef1634cfd1f7168ec4d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFKW3OR%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBIrHG2wmJ7PET96Usuk4hvPAK3v2cVG9pn8KvGVvBgIhANWwz4cHnXC4sjT4f0HTwhYPUedTX%2Bf1FjGJTZN6ojgqKv8DCEoQABoMNjM3NDIzMTgzODA1IgxLcbuKceuoYewQQD8q3AOQM4SV%2BgS%2B8AKZ4sNMlJ3Zs5%2FderMsZFOSojKbDXTyrJ2MJFM8pyeKgVb64u8gez94rJtBTsesX8W8KP4%2FPxaeV%2FwQWaj7gdpkwHPz6Cw8I2I6QljoBKIEsrmCPIw4JWcWvE%2FGGYxYn6%2Ba1avHOplww6KMjkJ2h3ZV%2FHVSV%2FyZp6jCE0MDRxDKiY9qHNJA%2BvfdX9U1FsM4MfsqiYaH9tbEvmQtjuER4zGwnG0R9ctFUEOF%2FQlo0iaGHsbeKjNtu6xJTAdTlZwVt4AydFdr%2FdHg0LzBZ8KRcTJNPv4Sn%2FZ71YvlS8gpjYTJxLcVcwMF9kZ3D5erp2mtqiFbyeeN%2BPT%2BB%2FZork6Q3WXoRsEw%2BzB2aKTMwnFtB%2BPZWBwyh%2Fx717yBr1%2B4P47Xv0fx7nAwbgWhWUDNL7vvMNWMePUEsgByV24c344JpQot2lBimA7JbjCBepmbJ0wlO32nlBLpG2c%2FnWQTwurGaNMwMgP%2F9Qfbww22LlW1cGB7dSltgG388CkYEBbfe5SNnRhFhwFJewNEheANI0RslAEODx%2BwF1BHd1Ra6AUDIXhxgUNgg8rx8ED%2BORlzlcvHlsPyTo18G6USffgYj9eHzDnNzzK3T6i4y2MjNhDB3%2BZvKj5NoDDR3I7JBjqkAffEZorBna4V7v%2BPJfjoMi1zYEUoExp6hXEwzt0XyrT3Bpw%2FxFJxCxZ%2BB%2FsIRT8vci7VWEnWBboO6aocrlF22BuW3B1rsUwX9pn3OJssLKhPM7GgokM%2FZwb6bW93jigf9%2BZJdkVgZVz3grO1HKMXW3KTmxhhywGFUxZklbMAjzXwsOKzV7EFjZbsxTsMjoHCRFegzbZKcjAXDgaJqYgg3Tt62RCT&X-Amz-Signature=815c1fdc9d1cc92776ca7259346303fa76f89a95b3197284d20701fec4587641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFKW3OR%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBIrHG2wmJ7PET96Usuk4hvPAK3v2cVG9pn8KvGVvBgIhANWwz4cHnXC4sjT4f0HTwhYPUedTX%2Bf1FjGJTZN6ojgqKv8DCEoQABoMNjM3NDIzMTgzODA1IgxLcbuKceuoYewQQD8q3AOQM4SV%2BgS%2B8AKZ4sNMlJ3Zs5%2FderMsZFOSojKbDXTyrJ2MJFM8pyeKgVb64u8gez94rJtBTsesX8W8KP4%2FPxaeV%2FwQWaj7gdpkwHPz6Cw8I2I6QljoBKIEsrmCPIw4JWcWvE%2FGGYxYn6%2Ba1avHOplww6KMjkJ2h3ZV%2FHVSV%2FyZp6jCE0MDRxDKiY9qHNJA%2BvfdX9U1FsM4MfsqiYaH9tbEvmQtjuER4zGwnG0R9ctFUEOF%2FQlo0iaGHsbeKjNtu6xJTAdTlZwVt4AydFdr%2FdHg0LzBZ8KRcTJNPv4Sn%2FZ71YvlS8gpjYTJxLcVcwMF9kZ3D5erp2mtqiFbyeeN%2BPT%2BB%2FZork6Q3WXoRsEw%2BzB2aKTMwnFtB%2BPZWBwyh%2Fx717yBr1%2B4P47Xv0fx7nAwbgWhWUDNL7vvMNWMePUEsgByV24c344JpQot2lBimA7JbjCBepmbJ0wlO32nlBLpG2c%2FnWQTwurGaNMwMgP%2F9Qfbww22LlW1cGB7dSltgG388CkYEBbfe5SNnRhFhwFJewNEheANI0RslAEODx%2BwF1BHd1Ra6AUDIXhxgUNgg8rx8ED%2BORlzlcvHlsPyTo18G6USffgYj9eHzDnNzzK3T6i4y2MjNhDB3%2BZvKj5NoDDR3I7JBjqkAffEZorBna4V7v%2BPJfjoMi1zYEUoExp6hXEwzt0XyrT3Bpw%2FxFJxCxZ%2BB%2FsIRT8vci7VWEnWBboO6aocrlF22BuW3B1rsUwX9pn3OJssLKhPM7GgokM%2FZwb6bW93jigf9%2BZJdkVgZVz3grO1HKMXW3KTmxhhywGFUxZklbMAjzXwsOKzV7EFjZbsxTsMjoHCRFegzbZKcjAXDgaJqYgg3Tt62RCT&X-Amz-Signature=caa2338916aa6822320948ddb272e7ef5aa9774b63628e31f177aaef2928e281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFKW3OR%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBIrHG2wmJ7PET96Usuk4hvPAK3v2cVG9pn8KvGVvBgIhANWwz4cHnXC4sjT4f0HTwhYPUedTX%2Bf1FjGJTZN6ojgqKv8DCEoQABoMNjM3NDIzMTgzODA1IgxLcbuKceuoYewQQD8q3AOQM4SV%2BgS%2B8AKZ4sNMlJ3Zs5%2FderMsZFOSojKbDXTyrJ2MJFM8pyeKgVb64u8gez94rJtBTsesX8W8KP4%2FPxaeV%2FwQWaj7gdpkwHPz6Cw8I2I6QljoBKIEsrmCPIw4JWcWvE%2FGGYxYn6%2Ba1avHOplww6KMjkJ2h3ZV%2FHVSV%2FyZp6jCE0MDRxDKiY9qHNJA%2BvfdX9U1FsM4MfsqiYaH9tbEvmQtjuER4zGwnG0R9ctFUEOF%2FQlo0iaGHsbeKjNtu6xJTAdTlZwVt4AydFdr%2FdHg0LzBZ8KRcTJNPv4Sn%2FZ71YvlS8gpjYTJxLcVcwMF9kZ3D5erp2mtqiFbyeeN%2BPT%2BB%2FZork6Q3WXoRsEw%2BzB2aKTMwnFtB%2BPZWBwyh%2Fx717yBr1%2B4P47Xv0fx7nAwbgWhWUDNL7vvMNWMePUEsgByV24c344JpQot2lBimA7JbjCBepmbJ0wlO32nlBLpG2c%2FnWQTwurGaNMwMgP%2F9Qfbww22LlW1cGB7dSltgG388CkYEBbfe5SNnRhFhwFJewNEheANI0RslAEODx%2BwF1BHd1Ra6AUDIXhxgUNgg8rx8ED%2BORlzlcvHlsPyTo18G6USffgYj9eHzDnNzzK3T6i4y2MjNhDB3%2BZvKj5NoDDR3I7JBjqkAffEZorBna4V7v%2BPJfjoMi1zYEUoExp6hXEwzt0XyrT3Bpw%2FxFJxCxZ%2BB%2FsIRT8vci7VWEnWBboO6aocrlF22BuW3B1rsUwX9pn3OJssLKhPM7GgokM%2FZwb6bW93jigf9%2BZJdkVgZVz3grO1HKMXW3KTmxhhywGFUxZklbMAjzXwsOKzV7EFjZbsxTsMjoHCRFegzbZKcjAXDgaJqYgg3Tt62RCT&X-Amz-Signature=d332cb458b8f6d0c9f38d9e637791d860d718718cf8a36f1ccc5bfb06f6c94cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
