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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM267ZZV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBey084nWrZLfXAuOW76BIc36npARf3SowHtdzQ80GWfAiEAnpwoagLXZvhtn8G4kDVm7ZMu6kmWBovEjqDxkbX0%2BTIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMETecSmd4t1cSt7lyrcA%2BAYPfBye%2BOnM17H7Y89f2WY1gRorP6265JKvIIPb6pUjAQ6BTwwWbvw7oh9JRWJAaFmfzISTB0r05TCrFFHz8fbeUTiTdERGrsOhyOHNVpSCvs0VFBED%2FjrcEv3hPkj%2BurMD0JcCrkVxXEk5glLriyOW0%2F%2F2Ep7em5e4JA5RFwwzGlmutcOmmsHkLA9Fo92oA%2FtfMa1MA%2BQv3H6rkgfCHnxjt%2B1s8r2BbPTXbSqi7KkQgxx0%2FPi5ch0fI%2Fx6PI9aUo%2ByGi%2BYDZf5ofhlX4gmJgFA7FunSfo2oj9MagSCRlinl1qimxyRr6GnqoRwBSEuVORrKvYwMmy9U5X5lVyETK2JNhSgGMxsflh47tdFtKq2LZYegk0%2B2At%2BrDITOu6OSakLru2Xvcq1V02PjVaDfG0%2F8r4C9%2FNkeR4eV9O6KuglxW5ZIBCnm%2BoKWuzmnjSg6y9N8XG1yP6%2FEUvudIKcyRxcgrOkh4%2BLFpE1T72Qwjhjf57y%2B3fZrQGg3%2Bh4fAsoCl4XQxbxBosFOQ7kKv72r2ekOWewIhD8MpKSMybxlbGxH9WF9%2Fz%2F00jJngmjOMTOO025rT5iaI4CfyW48TWNkb713qWPD465Rj6Z3aOm9%2Bz0ZeBv8ZQT42U0nBtMLnq3MQGOqUB5kD%2BotWqhFME8ZFUh%2F6V60A8PwrRsmq%2BB9cBMB5VFdCSKRtJTh3E0QkqmY8o7vdgXFD2pa70Nvsxl65FAmemKwHV8yIOPilCTPjSkF1o3iQT1%2BN%2FobuGVbwnMIsIeRlt1hDA0ec6JeCJ0gjiNmDkpBCx1CP12O2FzxBYFknG%2F1gNHjcaGsBJEN%2B442q8hWGite8xvYBoEhCqMkgt%2FbkKOQ%2Fkiyxv&X-Amz-Signature=4bcc7c16e0ecd385e664bd82e57ee93b5717bb18cb9bd198598db55e8634f9f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM267ZZV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBey084nWrZLfXAuOW76BIc36npARf3SowHtdzQ80GWfAiEAnpwoagLXZvhtn8G4kDVm7ZMu6kmWBovEjqDxkbX0%2BTIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMETecSmd4t1cSt7lyrcA%2BAYPfBye%2BOnM17H7Y89f2WY1gRorP6265JKvIIPb6pUjAQ6BTwwWbvw7oh9JRWJAaFmfzISTB0r05TCrFFHz8fbeUTiTdERGrsOhyOHNVpSCvs0VFBED%2FjrcEv3hPkj%2BurMD0JcCrkVxXEk5glLriyOW0%2F%2F2Ep7em5e4JA5RFwwzGlmutcOmmsHkLA9Fo92oA%2FtfMa1MA%2BQv3H6rkgfCHnxjt%2B1s8r2BbPTXbSqi7KkQgxx0%2FPi5ch0fI%2Fx6PI9aUo%2ByGi%2BYDZf5ofhlX4gmJgFA7FunSfo2oj9MagSCRlinl1qimxyRr6GnqoRwBSEuVORrKvYwMmy9U5X5lVyETK2JNhSgGMxsflh47tdFtKq2LZYegk0%2B2At%2BrDITOu6OSakLru2Xvcq1V02PjVaDfG0%2F8r4C9%2FNkeR4eV9O6KuglxW5ZIBCnm%2BoKWuzmnjSg6y9N8XG1yP6%2FEUvudIKcyRxcgrOkh4%2BLFpE1T72Qwjhjf57y%2B3fZrQGg3%2Bh4fAsoCl4XQxbxBosFOQ7kKv72r2ekOWewIhD8MpKSMybxlbGxH9WF9%2Fz%2F00jJngmjOMTOO025rT5iaI4CfyW48TWNkb713qWPD465Rj6Z3aOm9%2Bz0ZeBv8ZQT42U0nBtMLnq3MQGOqUB5kD%2BotWqhFME8ZFUh%2F6V60A8PwrRsmq%2BB9cBMB5VFdCSKRtJTh3E0QkqmY8o7vdgXFD2pa70Nvsxl65FAmemKwHV8yIOPilCTPjSkF1o3iQT1%2BN%2FobuGVbwnMIsIeRlt1hDA0ec6JeCJ0gjiNmDkpBCx1CP12O2FzxBYFknG%2F1gNHjcaGsBJEN%2B442q8hWGite8xvYBoEhCqMkgt%2FbkKOQ%2Fkiyxv&X-Amz-Signature=506d624c3a8e53b9be2f7e1b941155572c9b8686b7e57f635884c1f3e20f0fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM267ZZV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBey084nWrZLfXAuOW76BIc36npARf3SowHtdzQ80GWfAiEAnpwoagLXZvhtn8G4kDVm7ZMu6kmWBovEjqDxkbX0%2BTIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMETecSmd4t1cSt7lyrcA%2BAYPfBye%2BOnM17H7Y89f2WY1gRorP6265JKvIIPb6pUjAQ6BTwwWbvw7oh9JRWJAaFmfzISTB0r05TCrFFHz8fbeUTiTdERGrsOhyOHNVpSCvs0VFBED%2FjrcEv3hPkj%2BurMD0JcCrkVxXEk5glLriyOW0%2F%2F2Ep7em5e4JA5RFwwzGlmutcOmmsHkLA9Fo92oA%2FtfMa1MA%2BQv3H6rkgfCHnxjt%2B1s8r2BbPTXbSqi7KkQgxx0%2FPi5ch0fI%2Fx6PI9aUo%2ByGi%2BYDZf5ofhlX4gmJgFA7FunSfo2oj9MagSCRlinl1qimxyRr6GnqoRwBSEuVORrKvYwMmy9U5X5lVyETK2JNhSgGMxsflh47tdFtKq2LZYegk0%2B2At%2BrDITOu6OSakLru2Xvcq1V02PjVaDfG0%2F8r4C9%2FNkeR4eV9O6KuglxW5ZIBCnm%2BoKWuzmnjSg6y9N8XG1yP6%2FEUvudIKcyRxcgrOkh4%2BLFpE1T72Qwjhjf57y%2B3fZrQGg3%2Bh4fAsoCl4XQxbxBosFOQ7kKv72r2ekOWewIhD8MpKSMybxlbGxH9WF9%2Fz%2F00jJngmjOMTOO025rT5iaI4CfyW48TWNkb713qWPD465Rj6Z3aOm9%2Bz0ZeBv8ZQT42U0nBtMLnq3MQGOqUB5kD%2BotWqhFME8ZFUh%2F6V60A8PwrRsmq%2BB9cBMB5VFdCSKRtJTh3E0QkqmY8o7vdgXFD2pa70Nvsxl65FAmemKwHV8yIOPilCTPjSkF1o3iQT1%2BN%2FobuGVbwnMIsIeRlt1hDA0ec6JeCJ0gjiNmDkpBCx1CP12O2FzxBYFknG%2F1gNHjcaGsBJEN%2B442q8hWGite8xvYBoEhCqMkgt%2FbkKOQ%2Fkiyxv&X-Amz-Signature=434d1e6e9a563f39858982e3fe81f132418115927cfd7b975a4bc903537ea7cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM267ZZV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBey084nWrZLfXAuOW76BIc36npARf3SowHtdzQ80GWfAiEAnpwoagLXZvhtn8G4kDVm7ZMu6kmWBovEjqDxkbX0%2BTIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMETecSmd4t1cSt7lyrcA%2BAYPfBye%2BOnM17H7Y89f2WY1gRorP6265JKvIIPb6pUjAQ6BTwwWbvw7oh9JRWJAaFmfzISTB0r05TCrFFHz8fbeUTiTdERGrsOhyOHNVpSCvs0VFBED%2FjrcEv3hPkj%2BurMD0JcCrkVxXEk5glLriyOW0%2F%2F2Ep7em5e4JA5RFwwzGlmutcOmmsHkLA9Fo92oA%2FtfMa1MA%2BQv3H6rkgfCHnxjt%2B1s8r2BbPTXbSqi7KkQgxx0%2FPi5ch0fI%2Fx6PI9aUo%2ByGi%2BYDZf5ofhlX4gmJgFA7FunSfo2oj9MagSCRlinl1qimxyRr6GnqoRwBSEuVORrKvYwMmy9U5X5lVyETK2JNhSgGMxsflh47tdFtKq2LZYegk0%2B2At%2BrDITOu6OSakLru2Xvcq1V02PjVaDfG0%2F8r4C9%2FNkeR4eV9O6KuglxW5ZIBCnm%2BoKWuzmnjSg6y9N8XG1yP6%2FEUvudIKcyRxcgrOkh4%2BLFpE1T72Qwjhjf57y%2B3fZrQGg3%2Bh4fAsoCl4XQxbxBosFOQ7kKv72r2ekOWewIhD8MpKSMybxlbGxH9WF9%2Fz%2F00jJngmjOMTOO025rT5iaI4CfyW48TWNkb713qWPD465Rj6Z3aOm9%2Bz0ZeBv8ZQT42U0nBtMLnq3MQGOqUB5kD%2BotWqhFME8ZFUh%2F6V60A8PwrRsmq%2BB9cBMB5VFdCSKRtJTh3E0QkqmY8o7vdgXFD2pa70Nvsxl65FAmemKwHV8yIOPilCTPjSkF1o3iQT1%2BN%2FobuGVbwnMIsIeRlt1hDA0ec6JeCJ0gjiNmDkpBCx1CP12O2FzxBYFknG%2F1gNHjcaGsBJEN%2B442q8hWGite8xvYBoEhCqMkgt%2FbkKOQ%2Fkiyxv&X-Amz-Signature=95bc2c5470b1140bf47e51c01085d96abf10c66450c775c3c168ab4999ac9359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM267ZZV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBey084nWrZLfXAuOW76BIc36npARf3SowHtdzQ80GWfAiEAnpwoagLXZvhtn8G4kDVm7ZMu6kmWBovEjqDxkbX0%2BTIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMETecSmd4t1cSt7lyrcA%2BAYPfBye%2BOnM17H7Y89f2WY1gRorP6265JKvIIPb6pUjAQ6BTwwWbvw7oh9JRWJAaFmfzISTB0r05TCrFFHz8fbeUTiTdERGrsOhyOHNVpSCvs0VFBED%2FjrcEv3hPkj%2BurMD0JcCrkVxXEk5glLriyOW0%2F%2F2Ep7em5e4JA5RFwwzGlmutcOmmsHkLA9Fo92oA%2FtfMa1MA%2BQv3H6rkgfCHnxjt%2B1s8r2BbPTXbSqi7KkQgxx0%2FPi5ch0fI%2Fx6PI9aUo%2ByGi%2BYDZf5ofhlX4gmJgFA7FunSfo2oj9MagSCRlinl1qimxyRr6GnqoRwBSEuVORrKvYwMmy9U5X5lVyETK2JNhSgGMxsflh47tdFtKq2LZYegk0%2B2At%2BrDITOu6OSakLru2Xvcq1V02PjVaDfG0%2F8r4C9%2FNkeR4eV9O6KuglxW5ZIBCnm%2BoKWuzmnjSg6y9N8XG1yP6%2FEUvudIKcyRxcgrOkh4%2BLFpE1T72Qwjhjf57y%2B3fZrQGg3%2Bh4fAsoCl4XQxbxBosFOQ7kKv72r2ekOWewIhD8MpKSMybxlbGxH9WF9%2Fz%2F00jJngmjOMTOO025rT5iaI4CfyW48TWNkb713qWPD465Rj6Z3aOm9%2Bz0ZeBv8ZQT42U0nBtMLnq3MQGOqUB5kD%2BotWqhFME8ZFUh%2F6V60A8PwrRsmq%2BB9cBMB5VFdCSKRtJTh3E0QkqmY8o7vdgXFD2pa70Nvsxl65FAmemKwHV8yIOPilCTPjSkF1o3iQT1%2BN%2FobuGVbwnMIsIeRlt1hDA0ec6JeCJ0gjiNmDkpBCx1CP12O2FzxBYFknG%2F1gNHjcaGsBJEN%2B442q8hWGite8xvYBoEhCqMkgt%2FbkKOQ%2Fkiyxv&X-Amz-Signature=4d38b398d0033c9d6362c6abed3475c8339458b14357863e4e3ad25368b20c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM267ZZV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBey084nWrZLfXAuOW76BIc36npARf3SowHtdzQ80GWfAiEAnpwoagLXZvhtn8G4kDVm7ZMu6kmWBovEjqDxkbX0%2BTIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMETecSmd4t1cSt7lyrcA%2BAYPfBye%2BOnM17H7Y89f2WY1gRorP6265JKvIIPb6pUjAQ6BTwwWbvw7oh9JRWJAaFmfzISTB0r05TCrFFHz8fbeUTiTdERGrsOhyOHNVpSCvs0VFBED%2FjrcEv3hPkj%2BurMD0JcCrkVxXEk5glLriyOW0%2F%2F2Ep7em5e4JA5RFwwzGlmutcOmmsHkLA9Fo92oA%2FtfMa1MA%2BQv3H6rkgfCHnxjt%2B1s8r2BbPTXbSqi7KkQgxx0%2FPi5ch0fI%2Fx6PI9aUo%2ByGi%2BYDZf5ofhlX4gmJgFA7FunSfo2oj9MagSCRlinl1qimxyRr6GnqoRwBSEuVORrKvYwMmy9U5X5lVyETK2JNhSgGMxsflh47tdFtKq2LZYegk0%2B2At%2BrDITOu6OSakLru2Xvcq1V02PjVaDfG0%2F8r4C9%2FNkeR4eV9O6KuglxW5ZIBCnm%2BoKWuzmnjSg6y9N8XG1yP6%2FEUvudIKcyRxcgrOkh4%2BLFpE1T72Qwjhjf57y%2B3fZrQGg3%2Bh4fAsoCl4XQxbxBosFOQ7kKv72r2ekOWewIhD8MpKSMybxlbGxH9WF9%2Fz%2F00jJngmjOMTOO025rT5iaI4CfyW48TWNkb713qWPD465Rj6Z3aOm9%2Bz0ZeBv8ZQT42U0nBtMLnq3MQGOqUB5kD%2BotWqhFME8ZFUh%2F6V60A8PwrRsmq%2BB9cBMB5VFdCSKRtJTh3E0QkqmY8o7vdgXFD2pa70Nvsxl65FAmemKwHV8yIOPilCTPjSkF1o3iQT1%2BN%2FobuGVbwnMIsIeRlt1hDA0ec6JeCJ0gjiNmDkpBCx1CP12O2FzxBYFknG%2F1gNHjcaGsBJEN%2B442q8hWGite8xvYBoEhCqMkgt%2FbkKOQ%2Fkiyxv&X-Amz-Signature=291c67c6136df159362393771c90fcfb9c30de5af737e80eb10475723cff52ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM267ZZV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBey084nWrZLfXAuOW76BIc36npARf3SowHtdzQ80GWfAiEAnpwoagLXZvhtn8G4kDVm7ZMu6kmWBovEjqDxkbX0%2BTIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMETecSmd4t1cSt7lyrcA%2BAYPfBye%2BOnM17H7Y89f2WY1gRorP6265JKvIIPb6pUjAQ6BTwwWbvw7oh9JRWJAaFmfzISTB0r05TCrFFHz8fbeUTiTdERGrsOhyOHNVpSCvs0VFBED%2FjrcEv3hPkj%2BurMD0JcCrkVxXEk5glLriyOW0%2F%2F2Ep7em5e4JA5RFwwzGlmutcOmmsHkLA9Fo92oA%2FtfMa1MA%2BQv3H6rkgfCHnxjt%2B1s8r2BbPTXbSqi7KkQgxx0%2FPi5ch0fI%2Fx6PI9aUo%2ByGi%2BYDZf5ofhlX4gmJgFA7FunSfo2oj9MagSCRlinl1qimxyRr6GnqoRwBSEuVORrKvYwMmy9U5X5lVyETK2JNhSgGMxsflh47tdFtKq2LZYegk0%2B2At%2BrDITOu6OSakLru2Xvcq1V02PjVaDfG0%2F8r4C9%2FNkeR4eV9O6KuglxW5ZIBCnm%2BoKWuzmnjSg6y9N8XG1yP6%2FEUvudIKcyRxcgrOkh4%2BLFpE1T72Qwjhjf57y%2B3fZrQGg3%2Bh4fAsoCl4XQxbxBosFOQ7kKv72r2ekOWewIhD8MpKSMybxlbGxH9WF9%2Fz%2F00jJngmjOMTOO025rT5iaI4CfyW48TWNkb713qWPD465Rj6Z3aOm9%2Bz0ZeBv8ZQT42U0nBtMLnq3MQGOqUB5kD%2BotWqhFME8ZFUh%2F6V60A8PwrRsmq%2BB9cBMB5VFdCSKRtJTh3E0QkqmY8o7vdgXFD2pa70Nvsxl65FAmemKwHV8yIOPilCTPjSkF1o3iQT1%2BN%2FobuGVbwnMIsIeRlt1hDA0ec6JeCJ0gjiNmDkpBCx1CP12O2FzxBYFknG%2F1gNHjcaGsBJEN%2B442q8hWGite8xvYBoEhCqMkgt%2FbkKOQ%2Fkiyxv&X-Amz-Signature=062fd9c3e0f399b8cda3967cba66d99303b6e90a50eb1f4931e706e5aa450bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM267ZZV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBey084nWrZLfXAuOW76BIc36npARf3SowHtdzQ80GWfAiEAnpwoagLXZvhtn8G4kDVm7ZMu6kmWBovEjqDxkbX0%2BTIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMETecSmd4t1cSt7lyrcA%2BAYPfBye%2BOnM17H7Y89f2WY1gRorP6265JKvIIPb6pUjAQ6BTwwWbvw7oh9JRWJAaFmfzISTB0r05TCrFFHz8fbeUTiTdERGrsOhyOHNVpSCvs0VFBED%2FjrcEv3hPkj%2BurMD0JcCrkVxXEk5glLriyOW0%2F%2F2Ep7em5e4JA5RFwwzGlmutcOmmsHkLA9Fo92oA%2FtfMa1MA%2BQv3H6rkgfCHnxjt%2B1s8r2BbPTXbSqi7KkQgxx0%2FPi5ch0fI%2Fx6PI9aUo%2ByGi%2BYDZf5ofhlX4gmJgFA7FunSfo2oj9MagSCRlinl1qimxyRr6GnqoRwBSEuVORrKvYwMmy9U5X5lVyETK2JNhSgGMxsflh47tdFtKq2LZYegk0%2B2At%2BrDITOu6OSakLru2Xvcq1V02PjVaDfG0%2F8r4C9%2FNkeR4eV9O6KuglxW5ZIBCnm%2BoKWuzmnjSg6y9N8XG1yP6%2FEUvudIKcyRxcgrOkh4%2BLFpE1T72Qwjhjf57y%2B3fZrQGg3%2Bh4fAsoCl4XQxbxBosFOQ7kKv72r2ekOWewIhD8MpKSMybxlbGxH9WF9%2Fz%2F00jJngmjOMTOO025rT5iaI4CfyW48TWNkb713qWPD465Rj6Z3aOm9%2Bz0ZeBv8ZQT42U0nBtMLnq3MQGOqUB5kD%2BotWqhFME8ZFUh%2F6V60A8PwrRsmq%2BB9cBMB5VFdCSKRtJTh3E0QkqmY8o7vdgXFD2pa70Nvsxl65FAmemKwHV8yIOPilCTPjSkF1o3iQT1%2BN%2FobuGVbwnMIsIeRlt1hDA0ec6JeCJ0gjiNmDkpBCx1CP12O2FzxBYFknG%2F1gNHjcaGsBJEN%2B442q8hWGite8xvYBoEhCqMkgt%2FbkKOQ%2Fkiyxv&X-Amz-Signature=01a5df6b7dc6b56fbce9b4944c9843adbff359c3bb81624d4d01b4f30b331f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM267ZZV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBey084nWrZLfXAuOW76BIc36npARf3SowHtdzQ80GWfAiEAnpwoagLXZvhtn8G4kDVm7ZMu6kmWBovEjqDxkbX0%2BTIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMETecSmd4t1cSt7lyrcA%2BAYPfBye%2BOnM17H7Y89f2WY1gRorP6265JKvIIPb6pUjAQ6BTwwWbvw7oh9JRWJAaFmfzISTB0r05TCrFFHz8fbeUTiTdERGrsOhyOHNVpSCvs0VFBED%2FjrcEv3hPkj%2BurMD0JcCrkVxXEk5glLriyOW0%2F%2F2Ep7em5e4JA5RFwwzGlmutcOmmsHkLA9Fo92oA%2FtfMa1MA%2BQv3H6rkgfCHnxjt%2B1s8r2BbPTXbSqi7KkQgxx0%2FPi5ch0fI%2Fx6PI9aUo%2ByGi%2BYDZf5ofhlX4gmJgFA7FunSfo2oj9MagSCRlinl1qimxyRr6GnqoRwBSEuVORrKvYwMmy9U5X5lVyETK2JNhSgGMxsflh47tdFtKq2LZYegk0%2B2At%2BrDITOu6OSakLru2Xvcq1V02PjVaDfG0%2F8r4C9%2FNkeR4eV9O6KuglxW5ZIBCnm%2BoKWuzmnjSg6y9N8XG1yP6%2FEUvudIKcyRxcgrOkh4%2BLFpE1T72Qwjhjf57y%2B3fZrQGg3%2Bh4fAsoCl4XQxbxBosFOQ7kKv72r2ekOWewIhD8MpKSMybxlbGxH9WF9%2Fz%2F00jJngmjOMTOO025rT5iaI4CfyW48TWNkb713qWPD465Rj6Z3aOm9%2Bz0ZeBv8ZQT42U0nBtMLnq3MQGOqUB5kD%2BotWqhFME8ZFUh%2F6V60A8PwrRsmq%2BB9cBMB5VFdCSKRtJTh3E0QkqmY8o7vdgXFD2pa70Nvsxl65FAmemKwHV8yIOPilCTPjSkF1o3iQT1%2BN%2FobuGVbwnMIsIeRlt1hDA0ec6JeCJ0gjiNmDkpBCx1CP12O2FzxBYFknG%2F1gNHjcaGsBJEN%2B442q8hWGite8xvYBoEhCqMkgt%2FbkKOQ%2Fkiyxv&X-Amz-Signature=e8eacfceddb2a0553867e6698642dc794520ad51412298c53610e96eec299ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM267ZZV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBey084nWrZLfXAuOW76BIc36npARf3SowHtdzQ80GWfAiEAnpwoagLXZvhtn8G4kDVm7ZMu6kmWBovEjqDxkbX0%2BTIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMETecSmd4t1cSt7lyrcA%2BAYPfBye%2BOnM17H7Y89f2WY1gRorP6265JKvIIPb6pUjAQ6BTwwWbvw7oh9JRWJAaFmfzISTB0r05TCrFFHz8fbeUTiTdERGrsOhyOHNVpSCvs0VFBED%2FjrcEv3hPkj%2BurMD0JcCrkVxXEk5glLriyOW0%2F%2F2Ep7em5e4JA5RFwwzGlmutcOmmsHkLA9Fo92oA%2FtfMa1MA%2BQv3H6rkgfCHnxjt%2B1s8r2BbPTXbSqi7KkQgxx0%2FPi5ch0fI%2Fx6PI9aUo%2ByGi%2BYDZf5ofhlX4gmJgFA7FunSfo2oj9MagSCRlinl1qimxyRr6GnqoRwBSEuVORrKvYwMmy9U5X5lVyETK2JNhSgGMxsflh47tdFtKq2LZYegk0%2B2At%2BrDITOu6OSakLru2Xvcq1V02PjVaDfG0%2F8r4C9%2FNkeR4eV9O6KuglxW5ZIBCnm%2BoKWuzmnjSg6y9N8XG1yP6%2FEUvudIKcyRxcgrOkh4%2BLFpE1T72Qwjhjf57y%2B3fZrQGg3%2Bh4fAsoCl4XQxbxBosFOQ7kKv72r2ekOWewIhD8MpKSMybxlbGxH9WF9%2Fz%2F00jJngmjOMTOO025rT5iaI4CfyW48TWNkb713qWPD465Rj6Z3aOm9%2Bz0ZeBv8ZQT42U0nBtMLnq3MQGOqUB5kD%2BotWqhFME8ZFUh%2F6V60A8PwrRsmq%2BB9cBMB5VFdCSKRtJTh3E0QkqmY8o7vdgXFD2pa70Nvsxl65FAmemKwHV8yIOPilCTPjSkF1o3iQT1%2BN%2FobuGVbwnMIsIeRlt1hDA0ec6JeCJ0gjiNmDkpBCx1CP12O2FzxBYFknG%2F1gNHjcaGsBJEN%2B442q8hWGite8xvYBoEhCqMkgt%2FbkKOQ%2Fkiyxv&X-Amz-Signature=224ae0743d2da88eb52634d6d1e54a5bc43b911c4d9a36eb25aac9e8c9bd264b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM267ZZV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBey084nWrZLfXAuOW76BIc36npARf3SowHtdzQ80GWfAiEAnpwoagLXZvhtn8G4kDVm7ZMu6kmWBovEjqDxkbX0%2BTIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMETecSmd4t1cSt7lyrcA%2BAYPfBye%2BOnM17H7Y89f2WY1gRorP6265JKvIIPb6pUjAQ6BTwwWbvw7oh9JRWJAaFmfzISTB0r05TCrFFHz8fbeUTiTdERGrsOhyOHNVpSCvs0VFBED%2FjrcEv3hPkj%2BurMD0JcCrkVxXEk5glLriyOW0%2F%2F2Ep7em5e4JA5RFwwzGlmutcOmmsHkLA9Fo92oA%2FtfMa1MA%2BQv3H6rkgfCHnxjt%2B1s8r2BbPTXbSqi7KkQgxx0%2FPi5ch0fI%2Fx6PI9aUo%2ByGi%2BYDZf5ofhlX4gmJgFA7FunSfo2oj9MagSCRlinl1qimxyRr6GnqoRwBSEuVORrKvYwMmy9U5X5lVyETK2JNhSgGMxsflh47tdFtKq2LZYegk0%2B2At%2BrDITOu6OSakLru2Xvcq1V02PjVaDfG0%2F8r4C9%2FNkeR4eV9O6KuglxW5ZIBCnm%2BoKWuzmnjSg6y9N8XG1yP6%2FEUvudIKcyRxcgrOkh4%2BLFpE1T72Qwjhjf57y%2B3fZrQGg3%2Bh4fAsoCl4XQxbxBosFOQ7kKv72r2ekOWewIhD8MpKSMybxlbGxH9WF9%2Fz%2F00jJngmjOMTOO025rT5iaI4CfyW48TWNkb713qWPD465Rj6Z3aOm9%2Bz0ZeBv8ZQT42U0nBtMLnq3MQGOqUB5kD%2BotWqhFME8ZFUh%2F6V60A8PwrRsmq%2BB9cBMB5VFdCSKRtJTh3E0QkqmY8o7vdgXFD2pa70Nvsxl65FAmemKwHV8yIOPilCTPjSkF1o3iQT1%2BN%2FobuGVbwnMIsIeRlt1hDA0ec6JeCJ0gjiNmDkpBCx1CP12O2FzxBYFknG%2F1gNHjcaGsBJEN%2B442q8hWGite8xvYBoEhCqMkgt%2FbkKOQ%2Fkiyxv&X-Amz-Signature=3a91a9d294e17c0847b46757a787f6e55d6278c9420017cd8436b552e81c89f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM267ZZV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBey084nWrZLfXAuOW76BIc36npARf3SowHtdzQ80GWfAiEAnpwoagLXZvhtn8G4kDVm7ZMu6kmWBovEjqDxkbX0%2BTIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMETecSmd4t1cSt7lyrcA%2BAYPfBye%2BOnM17H7Y89f2WY1gRorP6265JKvIIPb6pUjAQ6BTwwWbvw7oh9JRWJAaFmfzISTB0r05TCrFFHz8fbeUTiTdERGrsOhyOHNVpSCvs0VFBED%2FjrcEv3hPkj%2BurMD0JcCrkVxXEk5glLriyOW0%2F%2F2Ep7em5e4JA5RFwwzGlmutcOmmsHkLA9Fo92oA%2FtfMa1MA%2BQv3H6rkgfCHnxjt%2B1s8r2BbPTXbSqi7KkQgxx0%2FPi5ch0fI%2Fx6PI9aUo%2ByGi%2BYDZf5ofhlX4gmJgFA7FunSfo2oj9MagSCRlinl1qimxyRr6GnqoRwBSEuVORrKvYwMmy9U5X5lVyETK2JNhSgGMxsflh47tdFtKq2LZYegk0%2B2At%2BrDITOu6OSakLru2Xvcq1V02PjVaDfG0%2F8r4C9%2FNkeR4eV9O6KuglxW5ZIBCnm%2BoKWuzmnjSg6y9N8XG1yP6%2FEUvudIKcyRxcgrOkh4%2BLFpE1T72Qwjhjf57y%2B3fZrQGg3%2Bh4fAsoCl4XQxbxBosFOQ7kKv72r2ekOWewIhD8MpKSMybxlbGxH9WF9%2Fz%2F00jJngmjOMTOO025rT5iaI4CfyW48TWNkb713qWPD465Rj6Z3aOm9%2Bz0ZeBv8ZQT42U0nBtMLnq3MQGOqUB5kD%2BotWqhFME8ZFUh%2F6V60A8PwrRsmq%2BB9cBMB5VFdCSKRtJTh3E0QkqmY8o7vdgXFD2pa70Nvsxl65FAmemKwHV8yIOPilCTPjSkF1o3iQT1%2BN%2FobuGVbwnMIsIeRlt1hDA0ec6JeCJ0gjiNmDkpBCx1CP12O2FzxBYFknG%2F1gNHjcaGsBJEN%2B442q8hWGite8xvYBoEhCqMkgt%2FbkKOQ%2Fkiyxv&X-Amz-Signature=aab81eb832cad21a179790f58addb52035d288b2ce7f729c1cc2afde5edf4911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM267ZZV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBey084nWrZLfXAuOW76BIc36npARf3SowHtdzQ80GWfAiEAnpwoagLXZvhtn8G4kDVm7ZMu6kmWBovEjqDxkbX0%2BTIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMETecSmd4t1cSt7lyrcA%2BAYPfBye%2BOnM17H7Y89f2WY1gRorP6265JKvIIPb6pUjAQ6BTwwWbvw7oh9JRWJAaFmfzISTB0r05TCrFFHz8fbeUTiTdERGrsOhyOHNVpSCvs0VFBED%2FjrcEv3hPkj%2BurMD0JcCrkVxXEk5glLriyOW0%2F%2F2Ep7em5e4JA5RFwwzGlmutcOmmsHkLA9Fo92oA%2FtfMa1MA%2BQv3H6rkgfCHnxjt%2B1s8r2BbPTXbSqi7KkQgxx0%2FPi5ch0fI%2Fx6PI9aUo%2ByGi%2BYDZf5ofhlX4gmJgFA7FunSfo2oj9MagSCRlinl1qimxyRr6GnqoRwBSEuVORrKvYwMmy9U5X5lVyETK2JNhSgGMxsflh47tdFtKq2LZYegk0%2B2At%2BrDITOu6OSakLru2Xvcq1V02PjVaDfG0%2F8r4C9%2FNkeR4eV9O6KuglxW5ZIBCnm%2BoKWuzmnjSg6y9N8XG1yP6%2FEUvudIKcyRxcgrOkh4%2BLFpE1T72Qwjhjf57y%2B3fZrQGg3%2Bh4fAsoCl4XQxbxBosFOQ7kKv72r2ekOWewIhD8MpKSMybxlbGxH9WF9%2Fz%2F00jJngmjOMTOO025rT5iaI4CfyW48TWNkb713qWPD465Rj6Z3aOm9%2Bz0ZeBv8ZQT42U0nBtMLnq3MQGOqUB5kD%2BotWqhFME8ZFUh%2F6V60A8PwrRsmq%2BB9cBMB5VFdCSKRtJTh3E0QkqmY8o7vdgXFD2pa70Nvsxl65FAmemKwHV8yIOPilCTPjSkF1o3iQT1%2BN%2FobuGVbwnMIsIeRlt1hDA0ec6JeCJ0gjiNmDkpBCx1CP12O2FzxBYFknG%2F1gNHjcaGsBJEN%2B442q8hWGite8xvYBoEhCqMkgt%2FbkKOQ%2Fkiyxv&X-Amz-Signature=45e826ef197636bff69ad7756bcbd7ba28069baff93de544d91291f4ba3db0a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM267ZZV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBey084nWrZLfXAuOW76BIc36npARf3SowHtdzQ80GWfAiEAnpwoagLXZvhtn8G4kDVm7ZMu6kmWBovEjqDxkbX0%2BTIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMETecSmd4t1cSt7lyrcA%2BAYPfBye%2BOnM17H7Y89f2WY1gRorP6265JKvIIPb6pUjAQ6BTwwWbvw7oh9JRWJAaFmfzISTB0r05TCrFFHz8fbeUTiTdERGrsOhyOHNVpSCvs0VFBED%2FjrcEv3hPkj%2BurMD0JcCrkVxXEk5glLriyOW0%2F%2F2Ep7em5e4JA5RFwwzGlmutcOmmsHkLA9Fo92oA%2FtfMa1MA%2BQv3H6rkgfCHnxjt%2B1s8r2BbPTXbSqi7KkQgxx0%2FPi5ch0fI%2Fx6PI9aUo%2ByGi%2BYDZf5ofhlX4gmJgFA7FunSfo2oj9MagSCRlinl1qimxyRr6GnqoRwBSEuVORrKvYwMmy9U5X5lVyETK2JNhSgGMxsflh47tdFtKq2LZYegk0%2B2At%2BrDITOu6OSakLru2Xvcq1V02PjVaDfG0%2F8r4C9%2FNkeR4eV9O6KuglxW5ZIBCnm%2BoKWuzmnjSg6y9N8XG1yP6%2FEUvudIKcyRxcgrOkh4%2BLFpE1T72Qwjhjf57y%2B3fZrQGg3%2Bh4fAsoCl4XQxbxBosFOQ7kKv72r2ekOWewIhD8MpKSMybxlbGxH9WF9%2Fz%2F00jJngmjOMTOO025rT5iaI4CfyW48TWNkb713qWPD465Rj6Z3aOm9%2Bz0ZeBv8ZQT42U0nBtMLnq3MQGOqUB5kD%2BotWqhFME8ZFUh%2F6V60A8PwrRsmq%2BB9cBMB5VFdCSKRtJTh3E0QkqmY8o7vdgXFD2pa70Nvsxl65FAmemKwHV8yIOPilCTPjSkF1o3iQT1%2BN%2FobuGVbwnMIsIeRlt1hDA0ec6JeCJ0gjiNmDkpBCx1CP12O2FzxBYFknG%2F1gNHjcaGsBJEN%2B442q8hWGite8xvYBoEhCqMkgt%2FbkKOQ%2Fkiyxv&X-Amz-Signature=60b0306a02675590600cfae97ae2a3da6e67e2021da080fb7944746b8262ba4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
