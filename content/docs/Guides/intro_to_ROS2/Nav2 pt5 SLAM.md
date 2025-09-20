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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLDI5A6%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDdmRx3toegbJDc7YleQ86hx0ccLJsBlwEYd72ZyIWlhAIgGKXAH13JmfLOiPl0GyVTsZE44IZB3ZSoWaa0LxyPIoMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2YiOyGsC51S92TKCrcA82yOXDx%2FO8JrwjMoMpNCD0zivkEiIxE9pex0fM9BZoVkuSrMNDXDcGed4D8JEM9EKxz0UZpb4NlYRB6exTq0TCzjePxNr4l6eHjiHaqlmD6oQ%2FsBenuhL8H6b7ewdBCm%2Fpwfw0deg7yxqOgJZpXEKDmhzVezYPajRcUfGCipho1t4JJHG2zQ86QMn9Z%2BJv3VxnW4eGuP7HzGTyg%2F5RmSyo2azyp4HWM%2FdTF4MwP4sUmxQEJsWah7IBKzkHEzDBz0bBetNVpgD1GXkWO1NO76iTODWki2IhbeYKNym8v21ghmUMd1PcPNCGwPeTcgeqWpf4j%2BegI7lR5imqJIKqc0mUwK2LKGqB%2BYa1ptV0L%2BW%2BGQRLSj%2BKhq8rSH0hiHy69W3fmYeVVYdkQ3J3uEbJNhMgeNZ9hwan4IkMHyiS6u9Oiba%2FFHlkLL4%2BaA9edGiAtwbpsTjDWW%2BRHg59cPE9ZD%2BQSHPVSjSjnb%2FW%2B8Q98CsZ2755O0MFfxYYj8FG%2F481Mh1z3oyHDJdcKLjXx81MDe5VIDDBMXeH3ggmnQpVSPvLQU5onMZShF8p8R%2FlthbFxKT2mw%2Ft3ITZ8zZ8bssOYVEdtvQr4OdrLX30WBj7IPNcJyJKs1%2Bia5VruO%2FihMN3%2Ft8YGOqUBJkQXxyW2lecxs6FfhLmELKXoE%2BEV68FZqxQ6KSojFN3A5m3NOS3rTyZXWD%2FM27xPquR0X7JfWOwBO8STd4i%2Bc6it7F20MAScIRWVsAe%2BumbthICHi%2FXBDChhFuBuV17P6UsdchRg346tuq72Eut0H3qwHAunX9DPo3tjiIla8p5xFtKE1PQAF7tZiJbkL8KRuJ6rYEEeAosNHESEmo6q9JQetQn8&X-Amz-Signature=b14b6b7b8230e747eb028c278695914815fe20d228007a9870b2ee23eb676bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLDI5A6%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDdmRx3toegbJDc7YleQ86hx0ccLJsBlwEYd72ZyIWlhAIgGKXAH13JmfLOiPl0GyVTsZE44IZB3ZSoWaa0LxyPIoMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2YiOyGsC51S92TKCrcA82yOXDx%2FO8JrwjMoMpNCD0zivkEiIxE9pex0fM9BZoVkuSrMNDXDcGed4D8JEM9EKxz0UZpb4NlYRB6exTq0TCzjePxNr4l6eHjiHaqlmD6oQ%2FsBenuhL8H6b7ewdBCm%2Fpwfw0deg7yxqOgJZpXEKDmhzVezYPajRcUfGCipho1t4JJHG2zQ86QMn9Z%2BJv3VxnW4eGuP7HzGTyg%2F5RmSyo2azyp4HWM%2FdTF4MwP4sUmxQEJsWah7IBKzkHEzDBz0bBetNVpgD1GXkWO1NO76iTODWki2IhbeYKNym8v21ghmUMd1PcPNCGwPeTcgeqWpf4j%2BegI7lR5imqJIKqc0mUwK2LKGqB%2BYa1ptV0L%2BW%2BGQRLSj%2BKhq8rSH0hiHy69W3fmYeVVYdkQ3J3uEbJNhMgeNZ9hwan4IkMHyiS6u9Oiba%2FFHlkLL4%2BaA9edGiAtwbpsTjDWW%2BRHg59cPE9ZD%2BQSHPVSjSjnb%2FW%2B8Q98CsZ2755O0MFfxYYj8FG%2F481Mh1z3oyHDJdcKLjXx81MDe5VIDDBMXeH3ggmnQpVSPvLQU5onMZShF8p8R%2FlthbFxKT2mw%2Ft3ITZ8zZ8bssOYVEdtvQr4OdrLX30WBj7IPNcJyJKs1%2Bia5VruO%2FihMN3%2Ft8YGOqUBJkQXxyW2lecxs6FfhLmELKXoE%2BEV68FZqxQ6KSojFN3A5m3NOS3rTyZXWD%2FM27xPquR0X7JfWOwBO8STd4i%2Bc6it7F20MAScIRWVsAe%2BumbthICHi%2FXBDChhFuBuV17P6UsdchRg346tuq72Eut0H3qwHAunX9DPo3tjiIla8p5xFtKE1PQAF7tZiJbkL8KRuJ6rYEEeAosNHESEmo6q9JQetQn8&X-Amz-Signature=eca787fd9fbe38c393d89270862938571be6f0b040faf42703cb57d241ff12a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLDI5A6%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDdmRx3toegbJDc7YleQ86hx0ccLJsBlwEYd72ZyIWlhAIgGKXAH13JmfLOiPl0GyVTsZE44IZB3ZSoWaa0LxyPIoMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2YiOyGsC51S92TKCrcA82yOXDx%2FO8JrwjMoMpNCD0zivkEiIxE9pex0fM9BZoVkuSrMNDXDcGed4D8JEM9EKxz0UZpb4NlYRB6exTq0TCzjePxNr4l6eHjiHaqlmD6oQ%2FsBenuhL8H6b7ewdBCm%2Fpwfw0deg7yxqOgJZpXEKDmhzVezYPajRcUfGCipho1t4JJHG2zQ86QMn9Z%2BJv3VxnW4eGuP7HzGTyg%2F5RmSyo2azyp4HWM%2FdTF4MwP4sUmxQEJsWah7IBKzkHEzDBz0bBetNVpgD1GXkWO1NO76iTODWki2IhbeYKNym8v21ghmUMd1PcPNCGwPeTcgeqWpf4j%2BegI7lR5imqJIKqc0mUwK2LKGqB%2BYa1ptV0L%2BW%2BGQRLSj%2BKhq8rSH0hiHy69W3fmYeVVYdkQ3J3uEbJNhMgeNZ9hwan4IkMHyiS6u9Oiba%2FFHlkLL4%2BaA9edGiAtwbpsTjDWW%2BRHg59cPE9ZD%2BQSHPVSjSjnb%2FW%2B8Q98CsZ2755O0MFfxYYj8FG%2F481Mh1z3oyHDJdcKLjXx81MDe5VIDDBMXeH3ggmnQpVSPvLQU5onMZShF8p8R%2FlthbFxKT2mw%2Ft3ITZ8zZ8bssOYVEdtvQr4OdrLX30WBj7IPNcJyJKs1%2Bia5VruO%2FihMN3%2Ft8YGOqUBJkQXxyW2lecxs6FfhLmELKXoE%2BEV68FZqxQ6KSojFN3A5m3NOS3rTyZXWD%2FM27xPquR0X7JfWOwBO8STd4i%2Bc6it7F20MAScIRWVsAe%2BumbthICHi%2FXBDChhFuBuV17P6UsdchRg346tuq72Eut0H3qwHAunX9DPo3tjiIla8p5xFtKE1PQAF7tZiJbkL8KRuJ6rYEEeAosNHESEmo6q9JQetQn8&X-Amz-Signature=a1d6e430cf57757335c749eff28d08cf7a47696769befdf78c0ec42f3f08a073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLDI5A6%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDdmRx3toegbJDc7YleQ86hx0ccLJsBlwEYd72ZyIWlhAIgGKXAH13JmfLOiPl0GyVTsZE44IZB3ZSoWaa0LxyPIoMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2YiOyGsC51S92TKCrcA82yOXDx%2FO8JrwjMoMpNCD0zivkEiIxE9pex0fM9BZoVkuSrMNDXDcGed4D8JEM9EKxz0UZpb4NlYRB6exTq0TCzjePxNr4l6eHjiHaqlmD6oQ%2FsBenuhL8H6b7ewdBCm%2Fpwfw0deg7yxqOgJZpXEKDmhzVezYPajRcUfGCipho1t4JJHG2zQ86QMn9Z%2BJv3VxnW4eGuP7HzGTyg%2F5RmSyo2azyp4HWM%2FdTF4MwP4sUmxQEJsWah7IBKzkHEzDBz0bBetNVpgD1GXkWO1NO76iTODWki2IhbeYKNym8v21ghmUMd1PcPNCGwPeTcgeqWpf4j%2BegI7lR5imqJIKqc0mUwK2LKGqB%2BYa1ptV0L%2BW%2BGQRLSj%2BKhq8rSH0hiHy69W3fmYeVVYdkQ3J3uEbJNhMgeNZ9hwan4IkMHyiS6u9Oiba%2FFHlkLL4%2BaA9edGiAtwbpsTjDWW%2BRHg59cPE9ZD%2BQSHPVSjSjnb%2FW%2B8Q98CsZ2755O0MFfxYYj8FG%2F481Mh1z3oyHDJdcKLjXx81MDe5VIDDBMXeH3ggmnQpVSPvLQU5onMZShF8p8R%2FlthbFxKT2mw%2Ft3ITZ8zZ8bssOYVEdtvQr4OdrLX30WBj7IPNcJyJKs1%2Bia5VruO%2FihMN3%2Ft8YGOqUBJkQXxyW2lecxs6FfhLmELKXoE%2BEV68FZqxQ6KSojFN3A5m3NOS3rTyZXWD%2FM27xPquR0X7JfWOwBO8STd4i%2Bc6it7F20MAScIRWVsAe%2BumbthICHi%2FXBDChhFuBuV17P6UsdchRg346tuq72Eut0H3qwHAunX9DPo3tjiIla8p5xFtKE1PQAF7tZiJbkL8KRuJ6rYEEeAosNHESEmo6q9JQetQn8&X-Amz-Signature=032a2e4e63f3522a27fe82b7e444ea7aa43d49ad256fb2e44b845d8703db25c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLDI5A6%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDdmRx3toegbJDc7YleQ86hx0ccLJsBlwEYd72ZyIWlhAIgGKXAH13JmfLOiPl0GyVTsZE44IZB3ZSoWaa0LxyPIoMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2YiOyGsC51S92TKCrcA82yOXDx%2FO8JrwjMoMpNCD0zivkEiIxE9pex0fM9BZoVkuSrMNDXDcGed4D8JEM9EKxz0UZpb4NlYRB6exTq0TCzjePxNr4l6eHjiHaqlmD6oQ%2FsBenuhL8H6b7ewdBCm%2Fpwfw0deg7yxqOgJZpXEKDmhzVezYPajRcUfGCipho1t4JJHG2zQ86QMn9Z%2BJv3VxnW4eGuP7HzGTyg%2F5RmSyo2azyp4HWM%2FdTF4MwP4sUmxQEJsWah7IBKzkHEzDBz0bBetNVpgD1GXkWO1NO76iTODWki2IhbeYKNym8v21ghmUMd1PcPNCGwPeTcgeqWpf4j%2BegI7lR5imqJIKqc0mUwK2LKGqB%2BYa1ptV0L%2BW%2BGQRLSj%2BKhq8rSH0hiHy69W3fmYeVVYdkQ3J3uEbJNhMgeNZ9hwan4IkMHyiS6u9Oiba%2FFHlkLL4%2BaA9edGiAtwbpsTjDWW%2BRHg59cPE9ZD%2BQSHPVSjSjnb%2FW%2B8Q98CsZ2755O0MFfxYYj8FG%2F481Mh1z3oyHDJdcKLjXx81MDe5VIDDBMXeH3ggmnQpVSPvLQU5onMZShF8p8R%2FlthbFxKT2mw%2Ft3ITZ8zZ8bssOYVEdtvQr4OdrLX30WBj7IPNcJyJKs1%2Bia5VruO%2FihMN3%2Ft8YGOqUBJkQXxyW2lecxs6FfhLmELKXoE%2BEV68FZqxQ6KSojFN3A5m3NOS3rTyZXWD%2FM27xPquR0X7JfWOwBO8STd4i%2Bc6it7F20MAScIRWVsAe%2BumbthICHi%2FXBDChhFuBuV17P6UsdchRg346tuq72Eut0H3qwHAunX9DPo3tjiIla8p5xFtKE1PQAF7tZiJbkL8KRuJ6rYEEeAosNHESEmo6q9JQetQn8&X-Amz-Signature=77a4745abdd037fc3cb358e72b9f800b2e2188e003240131d4a8b111c007b331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLDI5A6%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDdmRx3toegbJDc7YleQ86hx0ccLJsBlwEYd72ZyIWlhAIgGKXAH13JmfLOiPl0GyVTsZE44IZB3ZSoWaa0LxyPIoMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2YiOyGsC51S92TKCrcA82yOXDx%2FO8JrwjMoMpNCD0zivkEiIxE9pex0fM9BZoVkuSrMNDXDcGed4D8JEM9EKxz0UZpb4NlYRB6exTq0TCzjePxNr4l6eHjiHaqlmD6oQ%2FsBenuhL8H6b7ewdBCm%2Fpwfw0deg7yxqOgJZpXEKDmhzVezYPajRcUfGCipho1t4JJHG2zQ86QMn9Z%2BJv3VxnW4eGuP7HzGTyg%2F5RmSyo2azyp4HWM%2FdTF4MwP4sUmxQEJsWah7IBKzkHEzDBz0bBetNVpgD1GXkWO1NO76iTODWki2IhbeYKNym8v21ghmUMd1PcPNCGwPeTcgeqWpf4j%2BegI7lR5imqJIKqc0mUwK2LKGqB%2BYa1ptV0L%2BW%2BGQRLSj%2BKhq8rSH0hiHy69W3fmYeVVYdkQ3J3uEbJNhMgeNZ9hwan4IkMHyiS6u9Oiba%2FFHlkLL4%2BaA9edGiAtwbpsTjDWW%2BRHg59cPE9ZD%2BQSHPVSjSjnb%2FW%2B8Q98CsZ2755O0MFfxYYj8FG%2F481Mh1z3oyHDJdcKLjXx81MDe5VIDDBMXeH3ggmnQpVSPvLQU5onMZShF8p8R%2FlthbFxKT2mw%2Ft3ITZ8zZ8bssOYVEdtvQr4OdrLX30WBj7IPNcJyJKs1%2Bia5VruO%2FihMN3%2Ft8YGOqUBJkQXxyW2lecxs6FfhLmELKXoE%2BEV68FZqxQ6KSojFN3A5m3NOS3rTyZXWD%2FM27xPquR0X7JfWOwBO8STd4i%2Bc6it7F20MAScIRWVsAe%2BumbthICHi%2FXBDChhFuBuV17P6UsdchRg346tuq72Eut0H3qwHAunX9DPo3tjiIla8p5xFtKE1PQAF7tZiJbkL8KRuJ6rYEEeAosNHESEmo6q9JQetQn8&X-Amz-Signature=0503a378c0ad7fad64235b1a17d4f86e7a1e8110c4f1928e169fdb618b8ac376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLDI5A6%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDdmRx3toegbJDc7YleQ86hx0ccLJsBlwEYd72ZyIWlhAIgGKXAH13JmfLOiPl0GyVTsZE44IZB3ZSoWaa0LxyPIoMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2YiOyGsC51S92TKCrcA82yOXDx%2FO8JrwjMoMpNCD0zivkEiIxE9pex0fM9BZoVkuSrMNDXDcGed4D8JEM9EKxz0UZpb4NlYRB6exTq0TCzjePxNr4l6eHjiHaqlmD6oQ%2FsBenuhL8H6b7ewdBCm%2Fpwfw0deg7yxqOgJZpXEKDmhzVezYPajRcUfGCipho1t4JJHG2zQ86QMn9Z%2BJv3VxnW4eGuP7HzGTyg%2F5RmSyo2azyp4HWM%2FdTF4MwP4sUmxQEJsWah7IBKzkHEzDBz0bBetNVpgD1GXkWO1NO76iTODWki2IhbeYKNym8v21ghmUMd1PcPNCGwPeTcgeqWpf4j%2BegI7lR5imqJIKqc0mUwK2LKGqB%2BYa1ptV0L%2BW%2BGQRLSj%2BKhq8rSH0hiHy69W3fmYeVVYdkQ3J3uEbJNhMgeNZ9hwan4IkMHyiS6u9Oiba%2FFHlkLL4%2BaA9edGiAtwbpsTjDWW%2BRHg59cPE9ZD%2BQSHPVSjSjnb%2FW%2B8Q98CsZ2755O0MFfxYYj8FG%2F481Mh1z3oyHDJdcKLjXx81MDe5VIDDBMXeH3ggmnQpVSPvLQU5onMZShF8p8R%2FlthbFxKT2mw%2Ft3ITZ8zZ8bssOYVEdtvQr4OdrLX30WBj7IPNcJyJKs1%2Bia5VruO%2FihMN3%2Ft8YGOqUBJkQXxyW2lecxs6FfhLmELKXoE%2BEV68FZqxQ6KSojFN3A5m3NOS3rTyZXWD%2FM27xPquR0X7JfWOwBO8STd4i%2Bc6it7F20MAScIRWVsAe%2BumbthICHi%2FXBDChhFuBuV17P6UsdchRg346tuq72Eut0H3qwHAunX9DPo3tjiIla8p5xFtKE1PQAF7tZiJbkL8KRuJ6rYEEeAosNHESEmo6q9JQetQn8&X-Amz-Signature=b70e9350959f0c490b05f3e4301da5e20be914c39f2817eb498c6c6f5406f98d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLDI5A6%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDdmRx3toegbJDc7YleQ86hx0ccLJsBlwEYd72ZyIWlhAIgGKXAH13JmfLOiPl0GyVTsZE44IZB3ZSoWaa0LxyPIoMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2YiOyGsC51S92TKCrcA82yOXDx%2FO8JrwjMoMpNCD0zivkEiIxE9pex0fM9BZoVkuSrMNDXDcGed4D8JEM9EKxz0UZpb4NlYRB6exTq0TCzjePxNr4l6eHjiHaqlmD6oQ%2FsBenuhL8H6b7ewdBCm%2Fpwfw0deg7yxqOgJZpXEKDmhzVezYPajRcUfGCipho1t4JJHG2zQ86QMn9Z%2BJv3VxnW4eGuP7HzGTyg%2F5RmSyo2azyp4HWM%2FdTF4MwP4sUmxQEJsWah7IBKzkHEzDBz0bBetNVpgD1GXkWO1NO76iTODWki2IhbeYKNym8v21ghmUMd1PcPNCGwPeTcgeqWpf4j%2BegI7lR5imqJIKqc0mUwK2LKGqB%2BYa1ptV0L%2BW%2BGQRLSj%2BKhq8rSH0hiHy69W3fmYeVVYdkQ3J3uEbJNhMgeNZ9hwan4IkMHyiS6u9Oiba%2FFHlkLL4%2BaA9edGiAtwbpsTjDWW%2BRHg59cPE9ZD%2BQSHPVSjSjnb%2FW%2B8Q98CsZ2755O0MFfxYYj8FG%2F481Mh1z3oyHDJdcKLjXx81MDe5VIDDBMXeH3ggmnQpVSPvLQU5onMZShF8p8R%2FlthbFxKT2mw%2Ft3ITZ8zZ8bssOYVEdtvQr4OdrLX30WBj7IPNcJyJKs1%2Bia5VruO%2FihMN3%2Ft8YGOqUBJkQXxyW2lecxs6FfhLmELKXoE%2BEV68FZqxQ6KSojFN3A5m3NOS3rTyZXWD%2FM27xPquR0X7JfWOwBO8STd4i%2Bc6it7F20MAScIRWVsAe%2BumbthICHi%2FXBDChhFuBuV17P6UsdchRg346tuq72Eut0H3qwHAunX9DPo3tjiIla8p5xFtKE1PQAF7tZiJbkL8KRuJ6rYEEeAosNHESEmo6q9JQetQn8&X-Amz-Signature=f3542aaae85ed66867405b3ed3c56e8f69576a1b78a8ddd3b72d8f4ab69dd3e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLDI5A6%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDdmRx3toegbJDc7YleQ86hx0ccLJsBlwEYd72ZyIWlhAIgGKXAH13JmfLOiPl0GyVTsZE44IZB3ZSoWaa0LxyPIoMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2YiOyGsC51S92TKCrcA82yOXDx%2FO8JrwjMoMpNCD0zivkEiIxE9pex0fM9BZoVkuSrMNDXDcGed4D8JEM9EKxz0UZpb4NlYRB6exTq0TCzjePxNr4l6eHjiHaqlmD6oQ%2FsBenuhL8H6b7ewdBCm%2Fpwfw0deg7yxqOgJZpXEKDmhzVezYPajRcUfGCipho1t4JJHG2zQ86QMn9Z%2BJv3VxnW4eGuP7HzGTyg%2F5RmSyo2azyp4HWM%2FdTF4MwP4sUmxQEJsWah7IBKzkHEzDBz0bBetNVpgD1GXkWO1NO76iTODWki2IhbeYKNym8v21ghmUMd1PcPNCGwPeTcgeqWpf4j%2BegI7lR5imqJIKqc0mUwK2LKGqB%2BYa1ptV0L%2BW%2BGQRLSj%2BKhq8rSH0hiHy69W3fmYeVVYdkQ3J3uEbJNhMgeNZ9hwan4IkMHyiS6u9Oiba%2FFHlkLL4%2BaA9edGiAtwbpsTjDWW%2BRHg59cPE9ZD%2BQSHPVSjSjnb%2FW%2B8Q98CsZ2755O0MFfxYYj8FG%2F481Mh1z3oyHDJdcKLjXx81MDe5VIDDBMXeH3ggmnQpVSPvLQU5onMZShF8p8R%2FlthbFxKT2mw%2Ft3ITZ8zZ8bssOYVEdtvQr4OdrLX30WBj7IPNcJyJKs1%2Bia5VruO%2FihMN3%2Ft8YGOqUBJkQXxyW2lecxs6FfhLmELKXoE%2BEV68FZqxQ6KSojFN3A5m3NOS3rTyZXWD%2FM27xPquR0X7JfWOwBO8STd4i%2Bc6it7F20MAScIRWVsAe%2BumbthICHi%2FXBDChhFuBuV17P6UsdchRg346tuq72Eut0H3qwHAunX9DPo3tjiIla8p5xFtKE1PQAF7tZiJbkL8KRuJ6rYEEeAosNHESEmo6q9JQetQn8&X-Amz-Signature=7945399dcb15e623c9562cd6514000ac6cd25be9334c45e0a5f6870fb7356d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLDI5A6%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDdmRx3toegbJDc7YleQ86hx0ccLJsBlwEYd72ZyIWlhAIgGKXAH13JmfLOiPl0GyVTsZE44IZB3ZSoWaa0LxyPIoMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2YiOyGsC51S92TKCrcA82yOXDx%2FO8JrwjMoMpNCD0zivkEiIxE9pex0fM9BZoVkuSrMNDXDcGed4D8JEM9EKxz0UZpb4NlYRB6exTq0TCzjePxNr4l6eHjiHaqlmD6oQ%2FsBenuhL8H6b7ewdBCm%2Fpwfw0deg7yxqOgJZpXEKDmhzVezYPajRcUfGCipho1t4JJHG2zQ86QMn9Z%2BJv3VxnW4eGuP7HzGTyg%2F5RmSyo2azyp4HWM%2FdTF4MwP4sUmxQEJsWah7IBKzkHEzDBz0bBetNVpgD1GXkWO1NO76iTODWki2IhbeYKNym8v21ghmUMd1PcPNCGwPeTcgeqWpf4j%2BegI7lR5imqJIKqc0mUwK2LKGqB%2BYa1ptV0L%2BW%2BGQRLSj%2BKhq8rSH0hiHy69W3fmYeVVYdkQ3J3uEbJNhMgeNZ9hwan4IkMHyiS6u9Oiba%2FFHlkLL4%2BaA9edGiAtwbpsTjDWW%2BRHg59cPE9ZD%2BQSHPVSjSjnb%2FW%2B8Q98CsZ2755O0MFfxYYj8FG%2F481Mh1z3oyHDJdcKLjXx81MDe5VIDDBMXeH3ggmnQpVSPvLQU5onMZShF8p8R%2FlthbFxKT2mw%2Ft3ITZ8zZ8bssOYVEdtvQr4OdrLX30WBj7IPNcJyJKs1%2Bia5VruO%2FihMN3%2Ft8YGOqUBJkQXxyW2lecxs6FfhLmELKXoE%2BEV68FZqxQ6KSojFN3A5m3NOS3rTyZXWD%2FM27xPquR0X7JfWOwBO8STd4i%2Bc6it7F20MAScIRWVsAe%2BumbthICHi%2FXBDChhFuBuV17P6UsdchRg346tuq72Eut0H3qwHAunX9DPo3tjiIla8p5xFtKE1PQAF7tZiJbkL8KRuJ6rYEEeAosNHESEmo6q9JQetQn8&X-Amz-Signature=07ae36083ae4ce6082af7b6a6ffc99a68d660011366434189814111317d676a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLDI5A6%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDdmRx3toegbJDc7YleQ86hx0ccLJsBlwEYd72ZyIWlhAIgGKXAH13JmfLOiPl0GyVTsZE44IZB3ZSoWaa0LxyPIoMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2YiOyGsC51S92TKCrcA82yOXDx%2FO8JrwjMoMpNCD0zivkEiIxE9pex0fM9BZoVkuSrMNDXDcGed4D8JEM9EKxz0UZpb4NlYRB6exTq0TCzjePxNr4l6eHjiHaqlmD6oQ%2FsBenuhL8H6b7ewdBCm%2Fpwfw0deg7yxqOgJZpXEKDmhzVezYPajRcUfGCipho1t4JJHG2zQ86QMn9Z%2BJv3VxnW4eGuP7HzGTyg%2F5RmSyo2azyp4HWM%2FdTF4MwP4sUmxQEJsWah7IBKzkHEzDBz0bBetNVpgD1GXkWO1NO76iTODWki2IhbeYKNym8v21ghmUMd1PcPNCGwPeTcgeqWpf4j%2BegI7lR5imqJIKqc0mUwK2LKGqB%2BYa1ptV0L%2BW%2BGQRLSj%2BKhq8rSH0hiHy69W3fmYeVVYdkQ3J3uEbJNhMgeNZ9hwan4IkMHyiS6u9Oiba%2FFHlkLL4%2BaA9edGiAtwbpsTjDWW%2BRHg59cPE9ZD%2BQSHPVSjSjnb%2FW%2B8Q98CsZ2755O0MFfxYYj8FG%2F481Mh1z3oyHDJdcKLjXx81MDe5VIDDBMXeH3ggmnQpVSPvLQU5onMZShF8p8R%2FlthbFxKT2mw%2Ft3ITZ8zZ8bssOYVEdtvQr4OdrLX30WBj7IPNcJyJKs1%2Bia5VruO%2FihMN3%2Ft8YGOqUBJkQXxyW2lecxs6FfhLmELKXoE%2BEV68FZqxQ6KSojFN3A5m3NOS3rTyZXWD%2FM27xPquR0X7JfWOwBO8STd4i%2Bc6it7F20MAScIRWVsAe%2BumbthICHi%2FXBDChhFuBuV17P6UsdchRg346tuq72Eut0H3qwHAunX9DPo3tjiIla8p5xFtKE1PQAF7tZiJbkL8KRuJ6rYEEeAosNHESEmo6q9JQetQn8&X-Amz-Signature=d4fdd9e7c7f5f9e1239234e152457ef680a76cb58d55d327163306b76c485b3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLDI5A6%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDdmRx3toegbJDc7YleQ86hx0ccLJsBlwEYd72ZyIWlhAIgGKXAH13JmfLOiPl0GyVTsZE44IZB3ZSoWaa0LxyPIoMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2YiOyGsC51S92TKCrcA82yOXDx%2FO8JrwjMoMpNCD0zivkEiIxE9pex0fM9BZoVkuSrMNDXDcGed4D8JEM9EKxz0UZpb4NlYRB6exTq0TCzjePxNr4l6eHjiHaqlmD6oQ%2FsBenuhL8H6b7ewdBCm%2Fpwfw0deg7yxqOgJZpXEKDmhzVezYPajRcUfGCipho1t4JJHG2zQ86QMn9Z%2BJv3VxnW4eGuP7HzGTyg%2F5RmSyo2azyp4HWM%2FdTF4MwP4sUmxQEJsWah7IBKzkHEzDBz0bBetNVpgD1GXkWO1NO76iTODWki2IhbeYKNym8v21ghmUMd1PcPNCGwPeTcgeqWpf4j%2BegI7lR5imqJIKqc0mUwK2LKGqB%2BYa1ptV0L%2BW%2BGQRLSj%2BKhq8rSH0hiHy69W3fmYeVVYdkQ3J3uEbJNhMgeNZ9hwan4IkMHyiS6u9Oiba%2FFHlkLL4%2BaA9edGiAtwbpsTjDWW%2BRHg59cPE9ZD%2BQSHPVSjSjnb%2FW%2B8Q98CsZ2755O0MFfxYYj8FG%2F481Mh1z3oyHDJdcKLjXx81MDe5VIDDBMXeH3ggmnQpVSPvLQU5onMZShF8p8R%2FlthbFxKT2mw%2Ft3ITZ8zZ8bssOYVEdtvQr4OdrLX30WBj7IPNcJyJKs1%2Bia5VruO%2FihMN3%2Ft8YGOqUBJkQXxyW2lecxs6FfhLmELKXoE%2BEV68FZqxQ6KSojFN3A5m3NOS3rTyZXWD%2FM27xPquR0X7JfWOwBO8STd4i%2Bc6it7F20MAScIRWVsAe%2BumbthICHi%2FXBDChhFuBuV17P6UsdchRg346tuq72Eut0H3qwHAunX9DPo3tjiIla8p5xFtKE1PQAF7tZiJbkL8KRuJ6rYEEeAosNHESEmo6q9JQetQn8&X-Amz-Signature=4085ca5c4f3425df9425c78b890010ab0f3d2b3abd0f0eaf98bc4b6f3ab7c60d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLDI5A6%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDdmRx3toegbJDc7YleQ86hx0ccLJsBlwEYd72ZyIWlhAIgGKXAH13JmfLOiPl0GyVTsZE44IZB3ZSoWaa0LxyPIoMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2YiOyGsC51S92TKCrcA82yOXDx%2FO8JrwjMoMpNCD0zivkEiIxE9pex0fM9BZoVkuSrMNDXDcGed4D8JEM9EKxz0UZpb4NlYRB6exTq0TCzjePxNr4l6eHjiHaqlmD6oQ%2FsBenuhL8H6b7ewdBCm%2Fpwfw0deg7yxqOgJZpXEKDmhzVezYPajRcUfGCipho1t4JJHG2zQ86QMn9Z%2BJv3VxnW4eGuP7HzGTyg%2F5RmSyo2azyp4HWM%2FdTF4MwP4sUmxQEJsWah7IBKzkHEzDBz0bBetNVpgD1GXkWO1NO76iTODWki2IhbeYKNym8v21ghmUMd1PcPNCGwPeTcgeqWpf4j%2BegI7lR5imqJIKqc0mUwK2LKGqB%2BYa1ptV0L%2BW%2BGQRLSj%2BKhq8rSH0hiHy69W3fmYeVVYdkQ3J3uEbJNhMgeNZ9hwan4IkMHyiS6u9Oiba%2FFHlkLL4%2BaA9edGiAtwbpsTjDWW%2BRHg59cPE9ZD%2BQSHPVSjSjnb%2FW%2B8Q98CsZ2755O0MFfxYYj8FG%2F481Mh1z3oyHDJdcKLjXx81MDe5VIDDBMXeH3ggmnQpVSPvLQU5onMZShF8p8R%2FlthbFxKT2mw%2Ft3ITZ8zZ8bssOYVEdtvQr4OdrLX30WBj7IPNcJyJKs1%2Bia5VruO%2FihMN3%2Ft8YGOqUBJkQXxyW2lecxs6FfhLmELKXoE%2BEV68FZqxQ6KSojFN3A5m3NOS3rTyZXWD%2FM27xPquR0X7JfWOwBO8STd4i%2Bc6it7F20MAScIRWVsAe%2BumbthICHi%2FXBDChhFuBuV17P6UsdchRg346tuq72Eut0H3qwHAunX9DPo3tjiIla8p5xFtKE1PQAF7tZiJbkL8KRuJ6rYEEeAosNHESEmo6q9JQetQn8&X-Amz-Signature=e047cea4e3a5a658a27654dbb12e7fbd33b1dd92904e90255a17a433d379ffaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLDI5A6%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDdmRx3toegbJDc7YleQ86hx0ccLJsBlwEYd72ZyIWlhAIgGKXAH13JmfLOiPl0GyVTsZE44IZB3ZSoWaa0LxyPIoMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2YiOyGsC51S92TKCrcA82yOXDx%2FO8JrwjMoMpNCD0zivkEiIxE9pex0fM9BZoVkuSrMNDXDcGed4D8JEM9EKxz0UZpb4NlYRB6exTq0TCzjePxNr4l6eHjiHaqlmD6oQ%2FsBenuhL8H6b7ewdBCm%2Fpwfw0deg7yxqOgJZpXEKDmhzVezYPajRcUfGCipho1t4JJHG2zQ86QMn9Z%2BJv3VxnW4eGuP7HzGTyg%2F5RmSyo2azyp4HWM%2FdTF4MwP4sUmxQEJsWah7IBKzkHEzDBz0bBetNVpgD1GXkWO1NO76iTODWki2IhbeYKNym8v21ghmUMd1PcPNCGwPeTcgeqWpf4j%2BegI7lR5imqJIKqc0mUwK2LKGqB%2BYa1ptV0L%2BW%2BGQRLSj%2BKhq8rSH0hiHy69W3fmYeVVYdkQ3J3uEbJNhMgeNZ9hwan4IkMHyiS6u9Oiba%2FFHlkLL4%2BaA9edGiAtwbpsTjDWW%2BRHg59cPE9ZD%2BQSHPVSjSjnb%2FW%2B8Q98CsZ2755O0MFfxYYj8FG%2F481Mh1z3oyHDJdcKLjXx81MDe5VIDDBMXeH3ggmnQpVSPvLQU5onMZShF8p8R%2FlthbFxKT2mw%2Ft3ITZ8zZ8bssOYVEdtvQr4OdrLX30WBj7IPNcJyJKs1%2Bia5VruO%2FihMN3%2Ft8YGOqUBJkQXxyW2lecxs6FfhLmELKXoE%2BEV68FZqxQ6KSojFN3A5m3NOS3rTyZXWD%2FM27xPquR0X7JfWOwBO8STd4i%2Bc6it7F20MAScIRWVsAe%2BumbthICHi%2FXBDChhFuBuV17P6UsdchRg346tuq72Eut0H3qwHAunX9DPo3tjiIla8p5xFtKE1PQAF7tZiJbkL8KRuJ6rYEEeAosNHESEmo6q9JQetQn8&X-Amz-Signature=10f3704cf2f77e24db6b228f569b85a7520fc15fdabf69f1044133ed302e9861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
