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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NKSMPKD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2G8B2nuxNlSf00%2BOUYcgvO2fJphQFJnE%2FPyzrXe0P0AIgZFaYuRkJAVShb8NY7E6V6SyzgA7bsB8BwNPiUyak7yYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEBkVejl1ZRrJ6KwuircA8ulpmOndfUMJn7c627smgPWzjbjREbwoS4v0hqao%2BqUfLCuaylUrfdbFS%2FDSh50ccvVbie2v6pi59XlSru7mJKa7KurbmcWnSs6PcwZEoNFfaQ2H4pP68FIKbgGCnxJVMnaeevlOwTYeiQvFEZ6s%2B5AKNJJ8AWQ6%2Fup%2Blg4z6ZoB3x00QNm3XrmFWabvsYDI9v%2BkBBmXr1v5D2se0AN0E%2BhWsl9ojH2svvJPl%2FBzIxCw4zUOehoa6iJykil2LIB3hHjg20PfLOHMBWTraj2fHQUhNmbBuAQVe0c4ZfjJTiqpwX4H1i6%2BGK9tr3X5pqX97NWy1UKkH%2BGBrW2OGkK2S4UvUsXm0wEGLmQ%2Fmnk9wz03bhFcqivhFlB2h9FG7vMP%2BZVk6YgbRYvpa%2F%2BnqrRdPDyhOrysQ4XTfqpa63eY1Euj691lIxwuk0imeFxxyIjTB8dTB3qu%2F8CqtxyhuOWsCJXMsi2fB2QIpJu5jzq3HhuOLW9iwNrT0HUy3N%2BY54XbE8LKDTtOEm%2Fj6gUqOWqYnn%2BEpaTVFh4nYL3QHflhKFHc8dL%2Bh1xF4pw5BcQVNvS44g99jAFSh36eTsodWu2X4sRecE8uWcr5UXcgUusOhylrsaM3XkZDg1MufSIMLvbwcQGOqUBhkffO1tZRHbnH9yk49qLWD%2FngaHUeiR9Q5bXj6e4IIczgTE2RZe5w4srvF%2Fk4zb0Ihdowpq6QfY6%2BKjWtxCmbUHHyHn3Ax7jqQW%2FaoRcmgwR1gYEUMKTKdrz0sm8DuA9%2BTxGzdfFL%2B7TLSWwIobw3nsjBpGV3gu3Nyakx0X4b2cdF1cVxrMl%2FTfYSSOVyMEQedmzCyO24jpRyIglqPyWqMJLFm1u&X-Amz-Signature=58cd2aec84d616f846928aefbc415d5bbf8d9408c1f500012b307e9313505683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NKSMPKD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2G8B2nuxNlSf00%2BOUYcgvO2fJphQFJnE%2FPyzrXe0P0AIgZFaYuRkJAVShb8NY7E6V6SyzgA7bsB8BwNPiUyak7yYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEBkVejl1ZRrJ6KwuircA8ulpmOndfUMJn7c627smgPWzjbjREbwoS4v0hqao%2BqUfLCuaylUrfdbFS%2FDSh50ccvVbie2v6pi59XlSru7mJKa7KurbmcWnSs6PcwZEoNFfaQ2H4pP68FIKbgGCnxJVMnaeevlOwTYeiQvFEZ6s%2B5AKNJJ8AWQ6%2Fup%2Blg4z6ZoB3x00QNm3XrmFWabvsYDI9v%2BkBBmXr1v5D2se0AN0E%2BhWsl9ojH2svvJPl%2FBzIxCw4zUOehoa6iJykil2LIB3hHjg20PfLOHMBWTraj2fHQUhNmbBuAQVe0c4ZfjJTiqpwX4H1i6%2BGK9tr3X5pqX97NWy1UKkH%2BGBrW2OGkK2S4UvUsXm0wEGLmQ%2Fmnk9wz03bhFcqivhFlB2h9FG7vMP%2BZVk6YgbRYvpa%2F%2BnqrRdPDyhOrysQ4XTfqpa63eY1Euj691lIxwuk0imeFxxyIjTB8dTB3qu%2F8CqtxyhuOWsCJXMsi2fB2QIpJu5jzq3HhuOLW9iwNrT0HUy3N%2BY54XbE8LKDTtOEm%2Fj6gUqOWqYnn%2BEpaTVFh4nYL3QHflhKFHc8dL%2Bh1xF4pw5BcQVNvS44g99jAFSh36eTsodWu2X4sRecE8uWcr5UXcgUusOhylrsaM3XkZDg1MufSIMLvbwcQGOqUBhkffO1tZRHbnH9yk49qLWD%2FngaHUeiR9Q5bXj6e4IIczgTE2RZe5w4srvF%2Fk4zb0Ihdowpq6QfY6%2BKjWtxCmbUHHyHn3Ax7jqQW%2FaoRcmgwR1gYEUMKTKdrz0sm8DuA9%2BTxGzdfFL%2B7TLSWwIobw3nsjBpGV3gu3Nyakx0X4b2cdF1cVxrMl%2FTfYSSOVyMEQedmzCyO24jpRyIglqPyWqMJLFm1u&X-Amz-Signature=9106d7e017655438bb1cd6cbedcb82ac88ee6c9925bf18790f55e8557f454133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NKSMPKD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2G8B2nuxNlSf00%2BOUYcgvO2fJphQFJnE%2FPyzrXe0P0AIgZFaYuRkJAVShb8NY7E6V6SyzgA7bsB8BwNPiUyak7yYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEBkVejl1ZRrJ6KwuircA8ulpmOndfUMJn7c627smgPWzjbjREbwoS4v0hqao%2BqUfLCuaylUrfdbFS%2FDSh50ccvVbie2v6pi59XlSru7mJKa7KurbmcWnSs6PcwZEoNFfaQ2H4pP68FIKbgGCnxJVMnaeevlOwTYeiQvFEZ6s%2B5AKNJJ8AWQ6%2Fup%2Blg4z6ZoB3x00QNm3XrmFWabvsYDI9v%2BkBBmXr1v5D2se0AN0E%2BhWsl9ojH2svvJPl%2FBzIxCw4zUOehoa6iJykil2LIB3hHjg20PfLOHMBWTraj2fHQUhNmbBuAQVe0c4ZfjJTiqpwX4H1i6%2BGK9tr3X5pqX97NWy1UKkH%2BGBrW2OGkK2S4UvUsXm0wEGLmQ%2Fmnk9wz03bhFcqivhFlB2h9FG7vMP%2BZVk6YgbRYvpa%2F%2BnqrRdPDyhOrysQ4XTfqpa63eY1Euj691lIxwuk0imeFxxyIjTB8dTB3qu%2F8CqtxyhuOWsCJXMsi2fB2QIpJu5jzq3HhuOLW9iwNrT0HUy3N%2BY54XbE8LKDTtOEm%2Fj6gUqOWqYnn%2BEpaTVFh4nYL3QHflhKFHc8dL%2Bh1xF4pw5BcQVNvS44g99jAFSh36eTsodWu2X4sRecE8uWcr5UXcgUusOhylrsaM3XkZDg1MufSIMLvbwcQGOqUBhkffO1tZRHbnH9yk49qLWD%2FngaHUeiR9Q5bXj6e4IIczgTE2RZe5w4srvF%2Fk4zb0Ihdowpq6QfY6%2BKjWtxCmbUHHyHn3Ax7jqQW%2FaoRcmgwR1gYEUMKTKdrz0sm8DuA9%2BTxGzdfFL%2B7TLSWwIobw3nsjBpGV3gu3Nyakx0X4b2cdF1cVxrMl%2FTfYSSOVyMEQedmzCyO24jpRyIglqPyWqMJLFm1u&X-Amz-Signature=2d7397c2a1186c657662f6db674e24523dc8a39841717ac1f9e1554efbed80df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NKSMPKD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2G8B2nuxNlSf00%2BOUYcgvO2fJphQFJnE%2FPyzrXe0P0AIgZFaYuRkJAVShb8NY7E6V6SyzgA7bsB8BwNPiUyak7yYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEBkVejl1ZRrJ6KwuircA8ulpmOndfUMJn7c627smgPWzjbjREbwoS4v0hqao%2BqUfLCuaylUrfdbFS%2FDSh50ccvVbie2v6pi59XlSru7mJKa7KurbmcWnSs6PcwZEoNFfaQ2H4pP68FIKbgGCnxJVMnaeevlOwTYeiQvFEZ6s%2B5AKNJJ8AWQ6%2Fup%2Blg4z6ZoB3x00QNm3XrmFWabvsYDI9v%2BkBBmXr1v5D2se0AN0E%2BhWsl9ojH2svvJPl%2FBzIxCw4zUOehoa6iJykil2LIB3hHjg20PfLOHMBWTraj2fHQUhNmbBuAQVe0c4ZfjJTiqpwX4H1i6%2BGK9tr3X5pqX97NWy1UKkH%2BGBrW2OGkK2S4UvUsXm0wEGLmQ%2Fmnk9wz03bhFcqivhFlB2h9FG7vMP%2BZVk6YgbRYvpa%2F%2BnqrRdPDyhOrysQ4XTfqpa63eY1Euj691lIxwuk0imeFxxyIjTB8dTB3qu%2F8CqtxyhuOWsCJXMsi2fB2QIpJu5jzq3HhuOLW9iwNrT0HUy3N%2BY54XbE8LKDTtOEm%2Fj6gUqOWqYnn%2BEpaTVFh4nYL3QHflhKFHc8dL%2Bh1xF4pw5BcQVNvS44g99jAFSh36eTsodWu2X4sRecE8uWcr5UXcgUusOhylrsaM3XkZDg1MufSIMLvbwcQGOqUBhkffO1tZRHbnH9yk49qLWD%2FngaHUeiR9Q5bXj6e4IIczgTE2RZe5w4srvF%2Fk4zb0Ihdowpq6QfY6%2BKjWtxCmbUHHyHn3Ax7jqQW%2FaoRcmgwR1gYEUMKTKdrz0sm8DuA9%2BTxGzdfFL%2B7TLSWwIobw3nsjBpGV3gu3Nyakx0X4b2cdF1cVxrMl%2FTfYSSOVyMEQedmzCyO24jpRyIglqPyWqMJLFm1u&X-Amz-Signature=1f239001f23919b3e69fde1b735d8d468bbd8a26efc1f5215e2f75cd85a7b26c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NKSMPKD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2G8B2nuxNlSf00%2BOUYcgvO2fJphQFJnE%2FPyzrXe0P0AIgZFaYuRkJAVShb8NY7E6V6SyzgA7bsB8BwNPiUyak7yYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEBkVejl1ZRrJ6KwuircA8ulpmOndfUMJn7c627smgPWzjbjREbwoS4v0hqao%2BqUfLCuaylUrfdbFS%2FDSh50ccvVbie2v6pi59XlSru7mJKa7KurbmcWnSs6PcwZEoNFfaQ2H4pP68FIKbgGCnxJVMnaeevlOwTYeiQvFEZ6s%2B5AKNJJ8AWQ6%2Fup%2Blg4z6ZoB3x00QNm3XrmFWabvsYDI9v%2BkBBmXr1v5D2se0AN0E%2BhWsl9ojH2svvJPl%2FBzIxCw4zUOehoa6iJykil2LIB3hHjg20PfLOHMBWTraj2fHQUhNmbBuAQVe0c4ZfjJTiqpwX4H1i6%2BGK9tr3X5pqX97NWy1UKkH%2BGBrW2OGkK2S4UvUsXm0wEGLmQ%2Fmnk9wz03bhFcqivhFlB2h9FG7vMP%2BZVk6YgbRYvpa%2F%2BnqrRdPDyhOrysQ4XTfqpa63eY1Euj691lIxwuk0imeFxxyIjTB8dTB3qu%2F8CqtxyhuOWsCJXMsi2fB2QIpJu5jzq3HhuOLW9iwNrT0HUy3N%2BY54XbE8LKDTtOEm%2Fj6gUqOWqYnn%2BEpaTVFh4nYL3QHflhKFHc8dL%2Bh1xF4pw5BcQVNvS44g99jAFSh36eTsodWu2X4sRecE8uWcr5UXcgUusOhylrsaM3XkZDg1MufSIMLvbwcQGOqUBhkffO1tZRHbnH9yk49qLWD%2FngaHUeiR9Q5bXj6e4IIczgTE2RZe5w4srvF%2Fk4zb0Ihdowpq6QfY6%2BKjWtxCmbUHHyHn3Ax7jqQW%2FaoRcmgwR1gYEUMKTKdrz0sm8DuA9%2BTxGzdfFL%2B7TLSWwIobw3nsjBpGV3gu3Nyakx0X4b2cdF1cVxrMl%2FTfYSSOVyMEQedmzCyO24jpRyIglqPyWqMJLFm1u&X-Amz-Signature=351b44f7b0e6e9c5ef2e9f12f687373b504f8e956f44b4044d453fbe09b8c7b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NKSMPKD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2G8B2nuxNlSf00%2BOUYcgvO2fJphQFJnE%2FPyzrXe0P0AIgZFaYuRkJAVShb8NY7E6V6SyzgA7bsB8BwNPiUyak7yYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEBkVejl1ZRrJ6KwuircA8ulpmOndfUMJn7c627smgPWzjbjREbwoS4v0hqao%2BqUfLCuaylUrfdbFS%2FDSh50ccvVbie2v6pi59XlSru7mJKa7KurbmcWnSs6PcwZEoNFfaQ2H4pP68FIKbgGCnxJVMnaeevlOwTYeiQvFEZ6s%2B5AKNJJ8AWQ6%2Fup%2Blg4z6ZoB3x00QNm3XrmFWabvsYDI9v%2BkBBmXr1v5D2se0AN0E%2BhWsl9ojH2svvJPl%2FBzIxCw4zUOehoa6iJykil2LIB3hHjg20PfLOHMBWTraj2fHQUhNmbBuAQVe0c4ZfjJTiqpwX4H1i6%2BGK9tr3X5pqX97NWy1UKkH%2BGBrW2OGkK2S4UvUsXm0wEGLmQ%2Fmnk9wz03bhFcqivhFlB2h9FG7vMP%2BZVk6YgbRYvpa%2F%2BnqrRdPDyhOrysQ4XTfqpa63eY1Euj691lIxwuk0imeFxxyIjTB8dTB3qu%2F8CqtxyhuOWsCJXMsi2fB2QIpJu5jzq3HhuOLW9iwNrT0HUy3N%2BY54XbE8LKDTtOEm%2Fj6gUqOWqYnn%2BEpaTVFh4nYL3QHflhKFHc8dL%2Bh1xF4pw5BcQVNvS44g99jAFSh36eTsodWu2X4sRecE8uWcr5UXcgUusOhylrsaM3XkZDg1MufSIMLvbwcQGOqUBhkffO1tZRHbnH9yk49qLWD%2FngaHUeiR9Q5bXj6e4IIczgTE2RZe5w4srvF%2Fk4zb0Ihdowpq6QfY6%2BKjWtxCmbUHHyHn3Ax7jqQW%2FaoRcmgwR1gYEUMKTKdrz0sm8DuA9%2BTxGzdfFL%2B7TLSWwIobw3nsjBpGV3gu3Nyakx0X4b2cdF1cVxrMl%2FTfYSSOVyMEQedmzCyO24jpRyIglqPyWqMJLFm1u&X-Amz-Signature=1874063c10a03a3bd4d67997dab6965fe52bd84341fbecc3cfa7bdbabad4acee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NKSMPKD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2G8B2nuxNlSf00%2BOUYcgvO2fJphQFJnE%2FPyzrXe0P0AIgZFaYuRkJAVShb8NY7E6V6SyzgA7bsB8BwNPiUyak7yYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEBkVejl1ZRrJ6KwuircA8ulpmOndfUMJn7c627smgPWzjbjREbwoS4v0hqao%2BqUfLCuaylUrfdbFS%2FDSh50ccvVbie2v6pi59XlSru7mJKa7KurbmcWnSs6PcwZEoNFfaQ2H4pP68FIKbgGCnxJVMnaeevlOwTYeiQvFEZ6s%2B5AKNJJ8AWQ6%2Fup%2Blg4z6ZoB3x00QNm3XrmFWabvsYDI9v%2BkBBmXr1v5D2se0AN0E%2BhWsl9ojH2svvJPl%2FBzIxCw4zUOehoa6iJykil2LIB3hHjg20PfLOHMBWTraj2fHQUhNmbBuAQVe0c4ZfjJTiqpwX4H1i6%2BGK9tr3X5pqX97NWy1UKkH%2BGBrW2OGkK2S4UvUsXm0wEGLmQ%2Fmnk9wz03bhFcqivhFlB2h9FG7vMP%2BZVk6YgbRYvpa%2F%2BnqrRdPDyhOrysQ4XTfqpa63eY1Euj691lIxwuk0imeFxxyIjTB8dTB3qu%2F8CqtxyhuOWsCJXMsi2fB2QIpJu5jzq3HhuOLW9iwNrT0HUy3N%2BY54XbE8LKDTtOEm%2Fj6gUqOWqYnn%2BEpaTVFh4nYL3QHflhKFHc8dL%2Bh1xF4pw5BcQVNvS44g99jAFSh36eTsodWu2X4sRecE8uWcr5UXcgUusOhylrsaM3XkZDg1MufSIMLvbwcQGOqUBhkffO1tZRHbnH9yk49qLWD%2FngaHUeiR9Q5bXj6e4IIczgTE2RZe5w4srvF%2Fk4zb0Ihdowpq6QfY6%2BKjWtxCmbUHHyHn3Ax7jqQW%2FaoRcmgwR1gYEUMKTKdrz0sm8DuA9%2BTxGzdfFL%2B7TLSWwIobw3nsjBpGV3gu3Nyakx0X4b2cdF1cVxrMl%2FTfYSSOVyMEQedmzCyO24jpRyIglqPyWqMJLFm1u&X-Amz-Signature=5612b0d738b6201cd02afc88ae6e10f7c14407616e3342920a8d09ff66fc4519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NKSMPKD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2G8B2nuxNlSf00%2BOUYcgvO2fJphQFJnE%2FPyzrXe0P0AIgZFaYuRkJAVShb8NY7E6V6SyzgA7bsB8BwNPiUyak7yYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEBkVejl1ZRrJ6KwuircA8ulpmOndfUMJn7c627smgPWzjbjREbwoS4v0hqao%2BqUfLCuaylUrfdbFS%2FDSh50ccvVbie2v6pi59XlSru7mJKa7KurbmcWnSs6PcwZEoNFfaQ2H4pP68FIKbgGCnxJVMnaeevlOwTYeiQvFEZ6s%2B5AKNJJ8AWQ6%2Fup%2Blg4z6ZoB3x00QNm3XrmFWabvsYDI9v%2BkBBmXr1v5D2se0AN0E%2BhWsl9ojH2svvJPl%2FBzIxCw4zUOehoa6iJykil2LIB3hHjg20PfLOHMBWTraj2fHQUhNmbBuAQVe0c4ZfjJTiqpwX4H1i6%2BGK9tr3X5pqX97NWy1UKkH%2BGBrW2OGkK2S4UvUsXm0wEGLmQ%2Fmnk9wz03bhFcqivhFlB2h9FG7vMP%2BZVk6YgbRYvpa%2F%2BnqrRdPDyhOrysQ4XTfqpa63eY1Euj691lIxwuk0imeFxxyIjTB8dTB3qu%2F8CqtxyhuOWsCJXMsi2fB2QIpJu5jzq3HhuOLW9iwNrT0HUy3N%2BY54XbE8LKDTtOEm%2Fj6gUqOWqYnn%2BEpaTVFh4nYL3QHflhKFHc8dL%2Bh1xF4pw5BcQVNvS44g99jAFSh36eTsodWu2X4sRecE8uWcr5UXcgUusOhylrsaM3XkZDg1MufSIMLvbwcQGOqUBhkffO1tZRHbnH9yk49qLWD%2FngaHUeiR9Q5bXj6e4IIczgTE2RZe5w4srvF%2Fk4zb0Ihdowpq6QfY6%2BKjWtxCmbUHHyHn3Ax7jqQW%2FaoRcmgwR1gYEUMKTKdrz0sm8DuA9%2BTxGzdfFL%2B7TLSWwIobw3nsjBpGV3gu3Nyakx0X4b2cdF1cVxrMl%2FTfYSSOVyMEQedmzCyO24jpRyIglqPyWqMJLFm1u&X-Amz-Signature=f630b6af04ba383a080c926378eae1c925e7904297c8a9b1399f2d8bbaf874fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NKSMPKD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2G8B2nuxNlSf00%2BOUYcgvO2fJphQFJnE%2FPyzrXe0P0AIgZFaYuRkJAVShb8NY7E6V6SyzgA7bsB8BwNPiUyak7yYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEBkVejl1ZRrJ6KwuircA8ulpmOndfUMJn7c627smgPWzjbjREbwoS4v0hqao%2BqUfLCuaylUrfdbFS%2FDSh50ccvVbie2v6pi59XlSru7mJKa7KurbmcWnSs6PcwZEoNFfaQ2H4pP68FIKbgGCnxJVMnaeevlOwTYeiQvFEZ6s%2B5AKNJJ8AWQ6%2Fup%2Blg4z6ZoB3x00QNm3XrmFWabvsYDI9v%2BkBBmXr1v5D2se0AN0E%2BhWsl9ojH2svvJPl%2FBzIxCw4zUOehoa6iJykil2LIB3hHjg20PfLOHMBWTraj2fHQUhNmbBuAQVe0c4ZfjJTiqpwX4H1i6%2BGK9tr3X5pqX97NWy1UKkH%2BGBrW2OGkK2S4UvUsXm0wEGLmQ%2Fmnk9wz03bhFcqivhFlB2h9FG7vMP%2BZVk6YgbRYvpa%2F%2BnqrRdPDyhOrysQ4XTfqpa63eY1Euj691lIxwuk0imeFxxyIjTB8dTB3qu%2F8CqtxyhuOWsCJXMsi2fB2QIpJu5jzq3HhuOLW9iwNrT0HUy3N%2BY54XbE8LKDTtOEm%2Fj6gUqOWqYnn%2BEpaTVFh4nYL3QHflhKFHc8dL%2Bh1xF4pw5BcQVNvS44g99jAFSh36eTsodWu2X4sRecE8uWcr5UXcgUusOhylrsaM3XkZDg1MufSIMLvbwcQGOqUBhkffO1tZRHbnH9yk49qLWD%2FngaHUeiR9Q5bXj6e4IIczgTE2RZe5w4srvF%2Fk4zb0Ihdowpq6QfY6%2BKjWtxCmbUHHyHn3Ax7jqQW%2FaoRcmgwR1gYEUMKTKdrz0sm8DuA9%2BTxGzdfFL%2B7TLSWwIobw3nsjBpGV3gu3Nyakx0X4b2cdF1cVxrMl%2FTfYSSOVyMEQedmzCyO24jpRyIglqPyWqMJLFm1u&X-Amz-Signature=a0b77f34bd37de4606e9c39a59d9bf0beb0351cee8f0e4b9931d5ee53284f1c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NKSMPKD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2G8B2nuxNlSf00%2BOUYcgvO2fJphQFJnE%2FPyzrXe0P0AIgZFaYuRkJAVShb8NY7E6V6SyzgA7bsB8BwNPiUyak7yYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEBkVejl1ZRrJ6KwuircA8ulpmOndfUMJn7c627smgPWzjbjREbwoS4v0hqao%2BqUfLCuaylUrfdbFS%2FDSh50ccvVbie2v6pi59XlSru7mJKa7KurbmcWnSs6PcwZEoNFfaQ2H4pP68FIKbgGCnxJVMnaeevlOwTYeiQvFEZ6s%2B5AKNJJ8AWQ6%2Fup%2Blg4z6ZoB3x00QNm3XrmFWabvsYDI9v%2BkBBmXr1v5D2se0AN0E%2BhWsl9ojH2svvJPl%2FBzIxCw4zUOehoa6iJykil2LIB3hHjg20PfLOHMBWTraj2fHQUhNmbBuAQVe0c4ZfjJTiqpwX4H1i6%2BGK9tr3X5pqX97NWy1UKkH%2BGBrW2OGkK2S4UvUsXm0wEGLmQ%2Fmnk9wz03bhFcqivhFlB2h9FG7vMP%2BZVk6YgbRYvpa%2F%2BnqrRdPDyhOrysQ4XTfqpa63eY1Euj691lIxwuk0imeFxxyIjTB8dTB3qu%2F8CqtxyhuOWsCJXMsi2fB2QIpJu5jzq3HhuOLW9iwNrT0HUy3N%2BY54XbE8LKDTtOEm%2Fj6gUqOWqYnn%2BEpaTVFh4nYL3QHflhKFHc8dL%2Bh1xF4pw5BcQVNvS44g99jAFSh36eTsodWu2X4sRecE8uWcr5UXcgUusOhylrsaM3XkZDg1MufSIMLvbwcQGOqUBhkffO1tZRHbnH9yk49qLWD%2FngaHUeiR9Q5bXj6e4IIczgTE2RZe5w4srvF%2Fk4zb0Ihdowpq6QfY6%2BKjWtxCmbUHHyHn3Ax7jqQW%2FaoRcmgwR1gYEUMKTKdrz0sm8DuA9%2BTxGzdfFL%2B7TLSWwIobw3nsjBpGV3gu3Nyakx0X4b2cdF1cVxrMl%2FTfYSSOVyMEQedmzCyO24jpRyIglqPyWqMJLFm1u&X-Amz-Signature=e4fa6a750cc9a1db18ae3a29d0269a0f1e6d9e55101c1c743b80fa1cf856f40b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NKSMPKD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2G8B2nuxNlSf00%2BOUYcgvO2fJphQFJnE%2FPyzrXe0P0AIgZFaYuRkJAVShb8NY7E6V6SyzgA7bsB8BwNPiUyak7yYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEBkVejl1ZRrJ6KwuircA8ulpmOndfUMJn7c627smgPWzjbjREbwoS4v0hqao%2BqUfLCuaylUrfdbFS%2FDSh50ccvVbie2v6pi59XlSru7mJKa7KurbmcWnSs6PcwZEoNFfaQ2H4pP68FIKbgGCnxJVMnaeevlOwTYeiQvFEZ6s%2B5AKNJJ8AWQ6%2Fup%2Blg4z6ZoB3x00QNm3XrmFWabvsYDI9v%2BkBBmXr1v5D2se0AN0E%2BhWsl9ojH2svvJPl%2FBzIxCw4zUOehoa6iJykil2LIB3hHjg20PfLOHMBWTraj2fHQUhNmbBuAQVe0c4ZfjJTiqpwX4H1i6%2BGK9tr3X5pqX97NWy1UKkH%2BGBrW2OGkK2S4UvUsXm0wEGLmQ%2Fmnk9wz03bhFcqivhFlB2h9FG7vMP%2BZVk6YgbRYvpa%2F%2BnqrRdPDyhOrysQ4XTfqpa63eY1Euj691lIxwuk0imeFxxyIjTB8dTB3qu%2F8CqtxyhuOWsCJXMsi2fB2QIpJu5jzq3HhuOLW9iwNrT0HUy3N%2BY54XbE8LKDTtOEm%2Fj6gUqOWqYnn%2BEpaTVFh4nYL3QHflhKFHc8dL%2Bh1xF4pw5BcQVNvS44g99jAFSh36eTsodWu2X4sRecE8uWcr5UXcgUusOhylrsaM3XkZDg1MufSIMLvbwcQGOqUBhkffO1tZRHbnH9yk49qLWD%2FngaHUeiR9Q5bXj6e4IIczgTE2RZe5w4srvF%2Fk4zb0Ihdowpq6QfY6%2BKjWtxCmbUHHyHn3Ax7jqQW%2FaoRcmgwR1gYEUMKTKdrz0sm8DuA9%2BTxGzdfFL%2B7TLSWwIobw3nsjBpGV3gu3Nyakx0X4b2cdF1cVxrMl%2FTfYSSOVyMEQedmzCyO24jpRyIglqPyWqMJLFm1u&X-Amz-Signature=2f416fc66a8304e7d1aa794aed08a731db753a684c146867ec8bf07d2e247649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NKSMPKD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2G8B2nuxNlSf00%2BOUYcgvO2fJphQFJnE%2FPyzrXe0P0AIgZFaYuRkJAVShb8NY7E6V6SyzgA7bsB8BwNPiUyak7yYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEBkVejl1ZRrJ6KwuircA8ulpmOndfUMJn7c627smgPWzjbjREbwoS4v0hqao%2BqUfLCuaylUrfdbFS%2FDSh50ccvVbie2v6pi59XlSru7mJKa7KurbmcWnSs6PcwZEoNFfaQ2H4pP68FIKbgGCnxJVMnaeevlOwTYeiQvFEZ6s%2B5AKNJJ8AWQ6%2Fup%2Blg4z6ZoB3x00QNm3XrmFWabvsYDI9v%2BkBBmXr1v5D2se0AN0E%2BhWsl9ojH2svvJPl%2FBzIxCw4zUOehoa6iJykil2LIB3hHjg20PfLOHMBWTraj2fHQUhNmbBuAQVe0c4ZfjJTiqpwX4H1i6%2BGK9tr3X5pqX97NWy1UKkH%2BGBrW2OGkK2S4UvUsXm0wEGLmQ%2Fmnk9wz03bhFcqivhFlB2h9FG7vMP%2BZVk6YgbRYvpa%2F%2BnqrRdPDyhOrysQ4XTfqpa63eY1Euj691lIxwuk0imeFxxyIjTB8dTB3qu%2F8CqtxyhuOWsCJXMsi2fB2QIpJu5jzq3HhuOLW9iwNrT0HUy3N%2BY54XbE8LKDTtOEm%2Fj6gUqOWqYnn%2BEpaTVFh4nYL3QHflhKFHc8dL%2Bh1xF4pw5BcQVNvS44g99jAFSh36eTsodWu2X4sRecE8uWcr5UXcgUusOhylrsaM3XkZDg1MufSIMLvbwcQGOqUBhkffO1tZRHbnH9yk49qLWD%2FngaHUeiR9Q5bXj6e4IIczgTE2RZe5w4srvF%2Fk4zb0Ihdowpq6QfY6%2BKjWtxCmbUHHyHn3Ax7jqQW%2FaoRcmgwR1gYEUMKTKdrz0sm8DuA9%2BTxGzdfFL%2B7TLSWwIobw3nsjBpGV3gu3Nyakx0X4b2cdF1cVxrMl%2FTfYSSOVyMEQedmzCyO24jpRyIglqPyWqMJLFm1u&X-Amz-Signature=3a8ecb255fa32227d5a8c5925540dae5a5ca0043e7ebf4999b1f5772816435b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NKSMPKD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2G8B2nuxNlSf00%2BOUYcgvO2fJphQFJnE%2FPyzrXe0P0AIgZFaYuRkJAVShb8NY7E6V6SyzgA7bsB8BwNPiUyak7yYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEBkVejl1ZRrJ6KwuircA8ulpmOndfUMJn7c627smgPWzjbjREbwoS4v0hqao%2BqUfLCuaylUrfdbFS%2FDSh50ccvVbie2v6pi59XlSru7mJKa7KurbmcWnSs6PcwZEoNFfaQ2H4pP68FIKbgGCnxJVMnaeevlOwTYeiQvFEZ6s%2B5AKNJJ8AWQ6%2Fup%2Blg4z6ZoB3x00QNm3XrmFWabvsYDI9v%2BkBBmXr1v5D2se0AN0E%2BhWsl9ojH2svvJPl%2FBzIxCw4zUOehoa6iJykil2LIB3hHjg20PfLOHMBWTraj2fHQUhNmbBuAQVe0c4ZfjJTiqpwX4H1i6%2BGK9tr3X5pqX97NWy1UKkH%2BGBrW2OGkK2S4UvUsXm0wEGLmQ%2Fmnk9wz03bhFcqivhFlB2h9FG7vMP%2BZVk6YgbRYvpa%2F%2BnqrRdPDyhOrysQ4XTfqpa63eY1Euj691lIxwuk0imeFxxyIjTB8dTB3qu%2F8CqtxyhuOWsCJXMsi2fB2QIpJu5jzq3HhuOLW9iwNrT0HUy3N%2BY54XbE8LKDTtOEm%2Fj6gUqOWqYnn%2BEpaTVFh4nYL3QHflhKFHc8dL%2Bh1xF4pw5BcQVNvS44g99jAFSh36eTsodWu2X4sRecE8uWcr5UXcgUusOhylrsaM3XkZDg1MufSIMLvbwcQGOqUBhkffO1tZRHbnH9yk49qLWD%2FngaHUeiR9Q5bXj6e4IIczgTE2RZe5w4srvF%2Fk4zb0Ihdowpq6QfY6%2BKjWtxCmbUHHyHn3Ax7jqQW%2FaoRcmgwR1gYEUMKTKdrz0sm8DuA9%2BTxGzdfFL%2B7TLSWwIobw3nsjBpGV3gu3Nyakx0X4b2cdF1cVxrMl%2FTfYSSOVyMEQedmzCyO24jpRyIglqPyWqMJLFm1u&X-Amz-Signature=14fa9f539220fcdbb14fd715d355660154394a9b01c1258b0b3c730a37a8a520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NKSMPKD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC2G8B2nuxNlSf00%2BOUYcgvO2fJphQFJnE%2FPyzrXe0P0AIgZFaYuRkJAVShb8NY7E6V6SyzgA7bsB8BwNPiUyak7yYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEBkVejl1ZRrJ6KwuircA8ulpmOndfUMJn7c627smgPWzjbjREbwoS4v0hqao%2BqUfLCuaylUrfdbFS%2FDSh50ccvVbie2v6pi59XlSru7mJKa7KurbmcWnSs6PcwZEoNFfaQ2H4pP68FIKbgGCnxJVMnaeevlOwTYeiQvFEZ6s%2B5AKNJJ8AWQ6%2Fup%2Blg4z6ZoB3x00QNm3XrmFWabvsYDI9v%2BkBBmXr1v5D2se0AN0E%2BhWsl9ojH2svvJPl%2FBzIxCw4zUOehoa6iJykil2LIB3hHjg20PfLOHMBWTraj2fHQUhNmbBuAQVe0c4ZfjJTiqpwX4H1i6%2BGK9tr3X5pqX97NWy1UKkH%2BGBrW2OGkK2S4UvUsXm0wEGLmQ%2Fmnk9wz03bhFcqivhFlB2h9FG7vMP%2BZVk6YgbRYvpa%2F%2BnqrRdPDyhOrysQ4XTfqpa63eY1Euj691lIxwuk0imeFxxyIjTB8dTB3qu%2F8CqtxyhuOWsCJXMsi2fB2QIpJu5jzq3HhuOLW9iwNrT0HUy3N%2BY54XbE8LKDTtOEm%2Fj6gUqOWqYnn%2BEpaTVFh4nYL3QHflhKFHc8dL%2Bh1xF4pw5BcQVNvS44g99jAFSh36eTsodWu2X4sRecE8uWcr5UXcgUusOhylrsaM3XkZDg1MufSIMLvbwcQGOqUBhkffO1tZRHbnH9yk49qLWD%2FngaHUeiR9Q5bXj6e4IIczgTE2RZe5w4srvF%2Fk4zb0Ihdowpq6QfY6%2BKjWtxCmbUHHyHn3Ax7jqQW%2FaoRcmgwR1gYEUMKTKdrz0sm8DuA9%2BTxGzdfFL%2B7TLSWwIobw3nsjBpGV3gu3Nyakx0X4b2cdF1cVxrMl%2FTfYSSOVyMEQedmzCyO24jpRyIglqPyWqMJLFm1u&X-Amz-Signature=8319014bf321d907795ee56ac127123de8028a7520d1483c72993b5ed65cb6de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
