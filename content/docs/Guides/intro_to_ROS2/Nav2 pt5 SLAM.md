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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MS4LCO%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDTk%2FA%2BZKiwMs%2FI8SZgH73lgKDnTrdWBHkApW5Ei1Q3PgIhAId3d68htpCfuc%2BdEI7gjgcbWe3KmRqrl0fkJDC3VpP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2jDBDa6BANaysYakq3AOqqAZcpOVcuGSvk0MeiQSUf6ndrAkP%2BjG%2F7k6aQl6biv5cggbOGgQprFilR4U6370AQbyKRzCi%2BKRn8jLxFYvVRNiQ%2BTucnsQr5v2Oj38QZrPAEhRi5YHEIK8Jw1weVhD0zlipREPZu8G0So4lUMA7fefLRWYP2znnvOnk%2BCDkUYv2QGbsbHW5KMJg0Ug2brrf6Ms5lExYmEAprGVN0qjBt4sls76%2B5HPmcnaCUtPico4eoV22uedML6yX5PluUwQ%2BA0VvzVlmqHq%2B1daMdxGWfcc15Cvu7iNsp9QEwHJ7mYFGSnU%2Fbx%2BjCWRTXjCVPTJ8Xq2ffAKQ3RaS7qPTziprRnbdD%2FzSBq75ULYUOXiGU1GYNFIJ2HVwi9fi8y63jjomkkPA9WGb%2FaxRy8tbQm7nYJaHQI6WNLDhdGZarfQk%2B0t%2BbJoy8AhFL6AJgkw8DBtGCM8DaX7ooeh9zn2Zx%2F2%2BNJf3xrZOAL%2BllL6v%2BPw1lwijAhdWl1na225bxKYLCKI%2FVi1v%2Be1nigfyF92yA4y8STMiqzuuO38EYxOFhlffh9wdE1ZOBfvdG4t3IdsklGyt8DunO%2FO%2F%2FdPFQ%2BWameGxAWiUxh9rMaC9quL50Ob6EcYEXiQht6b5HjpaHTDIwrrTBjqkAaTjKI3PiDCASM9ttsnM8%2BodFekOoRbIUPjLtduDtMj7GIaVygudpAm07Igbt%2BfKWOicGjgqdtyF%2BvPd4iwOW8z9aKH%2BTsvqkCjqHhvN1vD3U1fe1TtwvYt0Sq5PPlTCSfnihfqR3ZyHn8UzsaA%2FhmBRQzByY4Q8j0%2BPgKLeDpOOxiDOGPL%2FEg7dVjQp6Ct8obBckAQvNQFGyzwjGTXyAYdz7bmI&X-Amz-Signature=4f9ef0fe157a15c8d91b4bfe2be5f57ba9be8a8e07d57b99e67f51f21d689d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MS4LCO%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDTk%2FA%2BZKiwMs%2FI8SZgH73lgKDnTrdWBHkApW5Ei1Q3PgIhAId3d68htpCfuc%2BdEI7gjgcbWe3KmRqrl0fkJDC3VpP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2jDBDa6BANaysYakq3AOqqAZcpOVcuGSvk0MeiQSUf6ndrAkP%2BjG%2F7k6aQl6biv5cggbOGgQprFilR4U6370AQbyKRzCi%2BKRn8jLxFYvVRNiQ%2BTucnsQr5v2Oj38QZrPAEhRi5YHEIK8Jw1weVhD0zlipREPZu8G0So4lUMA7fefLRWYP2znnvOnk%2BCDkUYv2QGbsbHW5KMJg0Ug2brrf6Ms5lExYmEAprGVN0qjBt4sls76%2B5HPmcnaCUtPico4eoV22uedML6yX5PluUwQ%2BA0VvzVlmqHq%2B1daMdxGWfcc15Cvu7iNsp9QEwHJ7mYFGSnU%2Fbx%2BjCWRTXjCVPTJ8Xq2ffAKQ3RaS7qPTziprRnbdD%2FzSBq75ULYUOXiGU1GYNFIJ2HVwi9fi8y63jjomkkPA9WGb%2FaxRy8tbQm7nYJaHQI6WNLDhdGZarfQk%2B0t%2BbJoy8AhFL6AJgkw8DBtGCM8DaX7ooeh9zn2Zx%2F2%2BNJf3xrZOAL%2BllL6v%2BPw1lwijAhdWl1na225bxKYLCKI%2FVi1v%2Be1nigfyF92yA4y8STMiqzuuO38EYxOFhlffh9wdE1ZOBfvdG4t3IdsklGyt8DunO%2FO%2F%2FdPFQ%2BWameGxAWiUxh9rMaC9quL50Ob6EcYEXiQht6b5HjpaHTDIwrrTBjqkAaTjKI3PiDCASM9ttsnM8%2BodFekOoRbIUPjLtduDtMj7GIaVygudpAm07Igbt%2BfKWOicGjgqdtyF%2BvPd4iwOW8z9aKH%2BTsvqkCjqHhvN1vD3U1fe1TtwvYt0Sq5PPlTCSfnihfqR3ZyHn8UzsaA%2FhmBRQzByY4Q8j0%2BPgKLeDpOOxiDOGPL%2FEg7dVjQp6Ct8obBckAQvNQFGyzwjGTXyAYdz7bmI&X-Amz-Signature=73a5c27071e9d16114679b0a9844e1962288e063426c09147717a2931c0217a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MS4LCO%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDTk%2FA%2BZKiwMs%2FI8SZgH73lgKDnTrdWBHkApW5Ei1Q3PgIhAId3d68htpCfuc%2BdEI7gjgcbWe3KmRqrl0fkJDC3VpP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2jDBDa6BANaysYakq3AOqqAZcpOVcuGSvk0MeiQSUf6ndrAkP%2BjG%2F7k6aQl6biv5cggbOGgQprFilR4U6370AQbyKRzCi%2BKRn8jLxFYvVRNiQ%2BTucnsQr5v2Oj38QZrPAEhRi5YHEIK8Jw1weVhD0zlipREPZu8G0So4lUMA7fefLRWYP2znnvOnk%2BCDkUYv2QGbsbHW5KMJg0Ug2brrf6Ms5lExYmEAprGVN0qjBt4sls76%2B5HPmcnaCUtPico4eoV22uedML6yX5PluUwQ%2BA0VvzVlmqHq%2B1daMdxGWfcc15Cvu7iNsp9QEwHJ7mYFGSnU%2Fbx%2BjCWRTXjCVPTJ8Xq2ffAKQ3RaS7qPTziprRnbdD%2FzSBq75ULYUOXiGU1GYNFIJ2HVwi9fi8y63jjomkkPA9WGb%2FaxRy8tbQm7nYJaHQI6WNLDhdGZarfQk%2B0t%2BbJoy8AhFL6AJgkw8DBtGCM8DaX7ooeh9zn2Zx%2F2%2BNJf3xrZOAL%2BllL6v%2BPw1lwijAhdWl1na225bxKYLCKI%2FVi1v%2Be1nigfyF92yA4y8STMiqzuuO38EYxOFhlffh9wdE1ZOBfvdG4t3IdsklGyt8DunO%2FO%2F%2FdPFQ%2BWameGxAWiUxh9rMaC9quL50Ob6EcYEXiQht6b5HjpaHTDIwrrTBjqkAaTjKI3PiDCASM9ttsnM8%2BodFekOoRbIUPjLtduDtMj7GIaVygudpAm07Igbt%2BfKWOicGjgqdtyF%2BvPd4iwOW8z9aKH%2BTsvqkCjqHhvN1vD3U1fe1TtwvYt0Sq5PPlTCSfnihfqR3ZyHn8UzsaA%2FhmBRQzByY4Q8j0%2BPgKLeDpOOxiDOGPL%2FEg7dVjQp6Ct8obBckAQvNQFGyzwjGTXyAYdz7bmI&X-Amz-Signature=cd329153430a992f9f497cccec518e2687bfd0db91d82169c3fcd41ffa304c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MS4LCO%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDTk%2FA%2BZKiwMs%2FI8SZgH73lgKDnTrdWBHkApW5Ei1Q3PgIhAId3d68htpCfuc%2BdEI7gjgcbWe3KmRqrl0fkJDC3VpP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2jDBDa6BANaysYakq3AOqqAZcpOVcuGSvk0MeiQSUf6ndrAkP%2BjG%2F7k6aQl6biv5cggbOGgQprFilR4U6370AQbyKRzCi%2BKRn8jLxFYvVRNiQ%2BTucnsQr5v2Oj38QZrPAEhRi5YHEIK8Jw1weVhD0zlipREPZu8G0So4lUMA7fefLRWYP2znnvOnk%2BCDkUYv2QGbsbHW5KMJg0Ug2brrf6Ms5lExYmEAprGVN0qjBt4sls76%2B5HPmcnaCUtPico4eoV22uedML6yX5PluUwQ%2BA0VvzVlmqHq%2B1daMdxGWfcc15Cvu7iNsp9QEwHJ7mYFGSnU%2Fbx%2BjCWRTXjCVPTJ8Xq2ffAKQ3RaS7qPTziprRnbdD%2FzSBq75ULYUOXiGU1GYNFIJ2HVwi9fi8y63jjomkkPA9WGb%2FaxRy8tbQm7nYJaHQI6WNLDhdGZarfQk%2B0t%2BbJoy8AhFL6AJgkw8DBtGCM8DaX7ooeh9zn2Zx%2F2%2BNJf3xrZOAL%2BllL6v%2BPw1lwijAhdWl1na225bxKYLCKI%2FVi1v%2Be1nigfyF92yA4y8STMiqzuuO38EYxOFhlffh9wdE1ZOBfvdG4t3IdsklGyt8DunO%2FO%2F%2FdPFQ%2BWameGxAWiUxh9rMaC9quL50Ob6EcYEXiQht6b5HjpaHTDIwrrTBjqkAaTjKI3PiDCASM9ttsnM8%2BodFekOoRbIUPjLtduDtMj7GIaVygudpAm07Igbt%2BfKWOicGjgqdtyF%2BvPd4iwOW8z9aKH%2BTsvqkCjqHhvN1vD3U1fe1TtwvYt0Sq5PPlTCSfnihfqR3ZyHn8UzsaA%2FhmBRQzByY4Q8j0%2BPgKLeDpOOxiDOGPL%2FEg7dVjQp6Ct8obBckAQvNQFGyzwjGTXyAYdz7bmI&X-Amz-Signature=c7a98345e80f6cc6e43dc09df5baf516c2d0568981322de5d2440b7f28647e54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MS4LCO%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDTk%2FA%2BZKiwMs%2FI8SZgH73lgKDnTrdWBHkApW5Ei1Q3PgIhAId3d68htpCfuc%2BdEI7gjgcbWe3KmRqrl0fkJDC3VpP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2jDBDa6BANaysYakq3AOqqAZcpOVcuGSvk0MeiQSUf6ndrAkP%2BjG%2F7k6aQl6biv5cggbOGgQprFilR4U6370AQbyKRzCi%2BKRn8jLxFYvVRNiQ%2BTucnsQr5v2Oj38QZrPAEhRi5YHEIK8Jw1weVhD0zlipREPZu8G0So4lUMA7fefLRWYP2znnvOnk%2BCDkUYv2QGbsbHW5KMJg0Ug2brrf6Ms5lExYmEAprGVN0qjBt4sls76%2B5HPmcnaCUtPico4eoV22uedML6yX5PluUwQ%2BA0VvzVlmqHq%2B1daMdxGWfcc15Cvu7iNsp9QEwHJ7mYFGSnU%2Fbx%2BjCWRTXjCVPTJ8Xq2ffAKQ3RaS7qPTziprRnbdD%2FzSBq75ULYUOXiGU1GYNFIJ2HVwi9fi8y63jjomkkPA9WGb%2FaxRy8tbQm7nYJaHQI6WNLDhdGZarfQk%2B0t%2BbJoy8AhFL6AJgkw8DBtGCM8DaX7ooeh9zn2Zx%2F2%2BNJf3xrZOAL%2BllL6v%2BPw1lwijAhdWl1na225bxKYLCKI%2FVi1v%2Be1nigfyF92yA4y8STMiqzuuO38EYxOFhlffh9wdE1ZOBfvdG4t3IdsklGyt8DunO%2FO%2F%2FdPFQ%2BWameGxAWiUxh9rMaC9quL50Ob6EcYEXiQht6b5HjpaHTDIwrrTBjqkAaTjKI3PiDCASM9ttsnM8%2BodFekOoRbIUPjLtduDtMj7GIaVygudpAm07Igbt%2BfKWOicGjgqdtyF%2BvPd4iwOW8z9aKH%2BTsvqkCjqHhvN1vD3U1fe1TtwvYt0Sq5PPlTCSfnihfqR3ZyHn8UzsaA%2FhmBRQzByY4Q8j0%2BPgKLeDpOOxiDOGPL%2FEg7dVjQp6Ct8obBckAQvNQFGyzwjGTXyAYdz7bmI&X-Amz-Signature=e11b13e2ac97745c4ae6c4788d5ae378ed381c55f53f91fe368c38881ac945b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MS4LCO%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDTk%2FA%2BZKiwMs%2FI8SZgH73lgKDnTrdWBHkApW5Ei1Q3PgIhAId3d68htpCfuc%2BdEI7gjgcbWe3KmRqrl0fkJDC3VpP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2jDBDa6BANaysYakq3AOqqAZcpOVcuGSvk0MeiQSUf6ndrAkP%2BjG%2F7k6aQl6biv5cggbOGgQprFilR4U6370AQbyKRzCi%2BKRn8jLxFYvVRNiQ%2BTucnsQr5v2Oj38QZrPAEhRi5YHEIK8Jw1weVhD0zlipREPZu8G0So4lUMA7fefLRWYP2znnvOnk%2BCDkUYv2QGbsbHW5KMJg0Ug2brrf6Ms5lExYmEAprGVN0qjBt4sls76%2B5HPmcnaCUtPico4eoV22uedML6yX5PluUwQ%2BA0VvzVlmqHq%2B1daMdxGWfcc15Cvu7iNsp9QEwHJ7mYFGSnU%2Fbx%2BjCWRTXjCVPTJ8Xq2ffAKQ3RaS7qPTziprRnbdD%2FzSBq75ULYUOXiGU1GYNFIJ2HVwi9fi8y63jjomkkPA9WGb%2FaxRy8tbQm7nYJaHQI6WNLDhdGZarfQk%2B0t%2BbJoy8AhFL6AJgkw8DBtGCM8DaX7ooeh9zn2Zx%2F2%2BNJf3xrZOAL%2BllL6v%2BPw1lwijAhdWl1na225bxKYLCKI%2FVi1v%2Be1nigfyF92yA4y8STMiqzuuO38EYxOFhlffh9wdE1ZOBfvdG4t3IdsklGyt8DunO%2FO%2F%2FdPFQ%2BWameGxAWiUxh9rMaC9quL50Ob6EcYEXiQht6b5HjpaHTDIwrrTBjqkAaTjKI3PiDCASM9ttsnM8%2BodFekOoRbIUPjLtduDtMj7GIaVygudpAm07Igbt%2BfKWOicGjgqdtyF%2BvPd4iwOW8z9aKH%2BTsvqkCjqHhvN1vD3U1fe1TtwvYt0Sq5PPlTCSfnihfqR3ZyHn8UzsaA%2FhmBRQzByY4Q8j0%2BPgKLeDpOOxiDOGPL%2FEg7dVjQp6Ct8obBckAQvNQFGyzwjGTXyAYdz7bmI&X-Amz-Signature=5bc33f22c23f22b8ae0f23fbf95f04d94a46ef93bd0ef8747d7ecc9d795a89af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MS4LCO%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDTk%2FA%2BZKiwMs%2FI8SZgH73lgKDnTrdWBHkApW5Ei1Q3PgIhAId3d68htpCfuc%2BdEI7gjgcbWe3KmRqrl0fkJDC3VpP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2jDBDa6BANaysYakq3AOqqAZcpOVcuGSvk0MeiQSUf6ndrAkP%2BjG%2F7k6aQl6biv5cggbOGgQprFilR4U6370AQbyKRzCi%2BKRn8jLxFYvVRNiQ%2BTucnsQr5v2Oj38QZrPAEhRi5YHEIK8Jw1weVhD0zlipREPZu8G0So4lUMA7fefLRWYP2znnvOnk%2BCDkUYv2QGbsbHW5KMJg0Ug2brrf6Ms5lExYmEAprGVN0qjBt4sls76%2B5HPmcnaCUtPico4eoV22uedML6yX5PluUwQ%2BA0VvzVlmqHq%2B1daMdxGWfcc15Cvu7iNsp9QEwHJ7mYFGSnU%2Fbx%2BjCWRTXjCVPTJ8Xq2ffAKQ3RaS7qPTziprRnbdD%2FzSBq75ULYUOXiGU1GYNFIJ2HVwi9fi8y63jjomkkPA9WGb%2FaxRy8tbQm7nYJaHQI6WNLDhdGZarfQk%2B0t%2BbJoy8AhFL6AJgkw8DBtGCM8DaX7ooeh9zn2Zx%2F2%2BNJf3xrZOAL%2BllL6v%2BPw1lwijAhdWl1na225bxKYLCKI%2FVi1v%2Be1nigfyF92yA4y8STMiqzuuO38EYxOFhlffh9wdE1ZOBfvdG4t3IdsklGyt8DunO%2FO%2F%2FdPFQ%2BWameGxAWiUxh9rMaC9quL50Ob6EcYEXiQht6b5HjpaHTDIwrrTBjqkAaTjKI3PiDCASM9ttsnM8%2BodFekOoRbIUPjLtduDtMj7GIaVygudpAm07Igbt%2BfKWOicGjgqdtyF%2BvPd4iwOW8z9aKH%2BTsvqkCjqHhvN1vD3U1fe1TtwvYt0Sq5PPlTCSfnihfqR3ZyHn8UzsaA%2FhmBRQzByY4Q8j0%2BPgKLeDpOOxiDOGPL%2FEg7dVjQp6Ct8obBckAQvNQFGyzwjGTXyAYdz7bmI&X-Amz-Signature=34b701645f552422442de8f13efb44ae6def955fe8a885acc51028f03aa8c8c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MS4LCO%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDTk%2FA%2BZKiwMs%2FI8SZgH73lgKDnTrdWBHkApW5Ei1Q3PgIhAId3d68htpCfuc%2BdEI7gjgcbWe3KmRqrl0fkJDC3VpP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2jDBDa6BANaysYakq3AOqqAZcpOVcuGSvk0MeiQSUf6ndrAkP%2BjG%2F7k6aQl6biv5cggbOGgQprFilR4U6370AQbyKRzCi%2BKRn8jLxFYvVRNiQ%2BTucnsQr5v2Oj38QZrPAEhRi5YHEIK8Jw1weVhD0zlipREPZu8G0So4lUMA7fefLRWYP2znnvOnk%2BCDkUYv2QGbsbHW5KMJg0Ug2brrf6Ms5lExYmEAprGVN0qjBt4sls76%2B5HPmcnaCUtPico4eoV22uedML6yX5PluUwQ%2BA0VvzVlmqHq%2B1daMdxGWfcc15Cvu7iNsp9QEwHJ7mYFGSnU%2Fbx%2BjCWRTXjCVPTJ8Xq2ffAKQ3RaS7qPTziprRnbdD%2FzSBq75ULYUOXiGU1GYNFIJ2HVwi9fi8y63jjomkkPA9WGb%2FaxRy8tbQm7nYJaHQI6WNLDhdGZarfQk%2B0t%2BbJoy8AhFL6AJgkw8DBtGCM8DaX7ooeh9zn2Zx%2F2%2BNJf3xrZOAL%2BllL6v%2BPw1lwijAhdWl1na225bxKYLCKI%2FVi1v%2Be1nigfyF92yA4y8STMiqzuuO38EYxOFhlffh9wdE1ZOBfvdG4t3IdsklGyt8DunO%2FO%2F%2FdPFQ%2BWameGxAWiUxh9rMaC9quL50Ob6EcYEXiQht6b5HjpaHTDIwrrTBjqkAaTjKI3PiDCASM9ttsnM8%2BodFekOoRbIUPjLtduDtMj7GIaVygudpAm07Igbt%2BfKWOicGjgqdtyF%2BvPd4iwOW8z9aKH%2BTsvqkCjqHhvN1vD3U1fe1TtwvYt0Sq5PPlTCSfnihfqR3ZyHn8UzsaA%2FhmBRQzByY4Q8j0%2BPgKLeDpOOxiDOGPL%2FEg7dVjQp6Ct8obBckAQvNQFGyzwjGTXyAYdz7bmI&X-Amz-Signature=126c44def3375203d1afa64aad60affbdea3bcff5cc14cd7418f8bc26036f402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MS4LCO%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDTk%2FA%2BZKiwMs%2FI8SZgH73lgKDnTrdWBHkApW5Ei1Q3PgIhAId3d68htpCfuc%2BdEI7gjgcbWe3KmRqrl0fkJDC3VpP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2jDBDa6BANaysYakq3AOqqAZcpOVcuGSvk0MeiQSUf6ndrAkP%2BjG%2F7k6aQl6biv5cggbOGgQprFilR4U6370AQbyKRzCi%2BKRn8jLxFYvVRNiQ%2BTucnsQr5v2Oj38QZrPAEhRi5YHEIK8Jw1weVhD0zlipREPZu8G0So4lUMA7fefLRWYP2znnvOnk%2BCDkUYv2QGbsbHW5KMJg0Ug2brrf6Ms5lExYmEAprGVN0qjBt4sls76%2B5HPmcnaCUtPico4eoV22uedML6yX5PluUwQ%2BA0VvzVlmqHq%2B1daMdxGWfcc15Cvu7iNsp9QEwHJ7mYFGSnU%2Fbx%2BjCWRTXjCVPTJ8Xq2ffAKQ3RaS7qPTziprRnbdD%2FzSBq75ULYUOXiGU1GYNFIJ2HVwi9fi8y63jjomkkPA9WGb%2FaxRy8tbQm7nYJaHQI6WNLDhdGZarfQk%2B0t%2BbJoy8AhFL6AJgkw8DBtGCM8DaX7ooeh9zn2Zx%2F2%2BNJf3xrZOAL%2BllL6v%2BPw1lwijAhdWl1na225bxKYLCKI%2FVi1v%2Be1nigfyF92yA4y8STMiqzuuO38EYxOFhlffh9wdE1ZOBfvdG4t3IdsklGyt8DunO%2FO%2F%2FdPFQ%2BWameGxAWiUxh9rMaC9quL50Ob6EcYEXiQht6b5HjpaHTDIwrrTBjqkAaTjKI3PiDCASM9ttsnM8%2BodFekOoRbIUPjLtduDtMj7GIaVygudpAm07Igbt%2BfKWOicGjgqdtyF%2BvPd4iwOW8z9aKH%2BTsvqkCjqHhvN1vD3U1fe1TtwvYt0Sq5PPlTCSfnihfqR3ZyHn8UzsaA%2FhmBRQzByY4Q8j0%2BPgKLeDpOOxiDOGPL%2FEg7dVjQp6Ct8obBckAQvNQFGyzwjGTXyAYdz7bmI&X-Amz-Signature=54691a966689f315a9d272aa57d34d5caa14bc1dde184458a488f741271a240b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MS4LCO%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDTk%2FA%2BZKiwMs%2FI8SZgH73lgKDnTrdWBHkApW5Ei1Q3PgIhAId3d68htpCfuc%2BdEI7gjgcbWe3KmRqrl0fkJDC3VpP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2jDBDa6BANaysYakq3AOqqAZcpOVcuGSvk0MeiQSUf6ndrAkP%2BjG%2F7k6aQl6biv5cggbOGgQprFilR4U6370AQbyKRzCi%2BKRn8jLxFYvVRNiQ%2BTucnsQr5v2Oj38QZrPAEhRi5YHEIK8Jw1weVhD0zlipREPZu8G0So4lUMA7fefLRWYP2znnvOnk%2BCDkUYv2QGbsbHW5KMJg0Ug2brrf6Ms5lExYmEAprGVN0qjBt4sls76%2B5HPmcnaCUtPico4eoV22uedML6yX5PluUwQ%2BA0VvzVlmqHq%2B1daMdxGWfcc15Cvu7iNsp9QEwHJ7mYFGSnU%2Fbx%2BjCWRTXjCVPTJ8Xq2ffAKQ3RaS7qPTziprRnbdD%2FzSBq75ULYUOXiGU1GYNFIJ2HVwi9fi8y63jjomkkPA9WGb%2FaxRy8tbQm7nYJaHQI6WNLDhdGZarfQk%2B0t%2BbJoy8AhFL6AJgkw8DBtGCM8DaX7ooeh9zn2Zx%2F2%2BNJf3xrZOAL%2BllL6v%2BPw1lwijAhdWl1na225bxKYLCKI%2FVi1v%2Be1nigfyF92yA4y8STMiqzuuO38EYxOFhlffh9wdE1ZOBfvdG4t3IdsklGyt8DunO%2FO%2F%2FdPFQ%2BWameGxAWiUxh9rMaC9quL50Ob6EcYEXiQht6b5HjpaHTDIwrrTBjqkAaTjKI3PiDCASM9ttsnM8%2BodFekOoRbIUPjLtduDtMj7GIaVygudpAm07Igbt%2BfKWOicGjgqdtyF%2BvPd4iwOW8z9aKH%2BTsvqkCjqHhvN1vD3U1fe1TtwvYt0Sq5PPlTCSfnihfqR3ZyHn8UzsaA%2FhmBRQzByY4Q8j0%2BPgKLeDpOOxiDOGPL%2FEg7dVjQp6Ct8obBckAQvNQFGyzwjGTXyAYdz7bmI&X-Amz-Signature=ee18768966fa47ceb29fa0bbfc8c6ad9c231a6e47d2b1b2a99eabc80c85b1576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MS4LCO%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDTk%2FA%2BZKiwMs%2FI8SZgH73lgKDnTrdWBHkApW5Ei1Q3PgIhAId3d68htpCfuc%2BdEI7gjgcbWe3KmRqrl0fkJDC3VpP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2jDBDa6BANaysYakq3AOqqAZcpOVcuGSvk0MeiQSUf6ndrAkP%2BjG%2F7k6aQl6biv5cggbOGgQprFilR4U6370AQbyKRzCi%2BKRn8jLxFYvVRNiQ%2BTucnsQr5v2Oj38QZrPAEhRi5YHEIK8Jw1weVhD0zlipREPZu8G0So4lUMA7fefLRWYP2znnvOnk%2BCDkUYv2QGbsbHW5KMJg0Ug2brrf6Ms5lExYmEAprGVN0qjBt4sls76%2B5HPmcnaCUtPico4eoV22uedML6yX5PluUwQ%2BA0VvzVlmqHq%2B1daMdxGWfcc15Cvu7iNsp9QEwHJ7mYFGSnU%2Fbx%2BjCWRTXjCVPTJ8Xq2ffAKQ3RaS7qPTziprRnbdD%2FzSBq75ULYUOXiGU1GYNFIJ2HVwi9fi8y63jjomkkPA9WGb%2FaxRy8tbQm7nYJaHQI6WNLDhdGZarfQk%2B0t%2BbJoy8AhFL6AJgkw8DBtGCM8DaX7ooeh9zn2Zx%2F2%2BNJf3xrZOAL%2BllL6v%2BPw1lwijAhdWl1na225bxKYLCKI%2FVi1v%2Be1nigfyF92yA4y8STMiqzuuO38EYxOFhlffh9wdE1ZOBfvdG4t3IdsklGyt8DunO%2FO%2F%2FdPFQ%2BWameGxAWiUxh9rMaC9quL50Ob6EcYEXiQht6b5HjpaHTDIwrrTBjqkAaTjKI3PiDCASM9ttsnM8%2BodFekOoRbIUPjLtduDtMj7GIaVygudpAm07Igbt%2BfKWOicGjgqdtyF%2BvPd4iwOW8z9aKH%2BTsvqkCjqHhvN1vD3U1fe1TtwvYt0Sq5PPlTCSfnihfqR3ZyHn8UzsaA%2FhmBRQzByY4Q8j0%2BPgKLeDpOOxiDOGPL%2FEg7dVjQp6Ct8obBckAQvNQFGyzwjGTXyAYdz7bmI&X-Amz-Signature=d893cc4b32e59175e084dcca48063c7909ec1923ebbe011cc6e58dca2f4141fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MS4LCO%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDTk%2FA%2BZKiwMs%2FI8SZgH73lgKDnTrdWBHkApW5Ei1Q3PgIhAId3d68htpCfuc%2BdEI7gjgcbWe3KmRqrl0fkJDC3VpP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2jDBDa6BANaysYakq3AOqqAZcpOVcuGSvk0MeiQSUf6ndrAkP%2BjG%2F7k6aQl6biv5cggbOGgQprFilR4U6370AQbyKRzCi%2BKRn8jLxFYvVRNiQ%2BTucnsQr5v2Oj38QZrPAEhRi5YHEIK8Jw1weVhD0zlipREPZu8G0So4lUMA7fefLRWYP2znnvOnk%2BCDkUYv2QGbsbHW5KMJg0Ug2brrf6Ms5lExYmEAprGVN0qjBt4sls76%2B5HPmcnaCUtPico4eoV22uedML6yX5PluUwQ%2BA0VvzVlmqHq%2B1daMdxGWfcc15Cvu7iNsp9QEwHJ7mYFGSnU%2Fbx%2BjCWRTXjCVPTJ8Xq2ffAKQ3RaS7qPTziprRnbdD%2FzSBq75ULYUOXiGU1GYNFIJ2HVwi9fi8y63jjomkkPA9WGb%2FaxRy8tbQm7nYJaHQI6WNLDhdGZarfQk%2B0t%2BbJoy8AhFL6AJgkw8DBtGCM8DaX7ooeh9zn2Zx%2F2%2BNJf3xrZOAL%2BllL6v%2BPw1lwijAhdWl1na225bxKYLCKI%2FVi1v%2Be1nigfyF92yA4y8STMiqzuuO38EYxOFhlffh9wdE1ZOBfvdG4t3IdsklGyt8DunO%2FO%2F%2FdPFQ%2BWameGxAWiUxh9rMaC9quL50Ob6EcYEXiQht6b5HjpaHTDIwrrTBjqkAaTjKI3PiDCASM9ttsnM8%2BodFekOoRbIUPjLtduDtMj7GIaVygudpAm07Igbt%2BfKWOicGjgqdtyF%2BvPd4iwOW8z9aKH%2BTsvqkCjqHhvN1vD3U1fe1TtwvYt0Sq5PPlTCSfnihfqR3ZyHn8UzsaA%2FhmBRQzByY4Q8j0%2BPgKLeDpOOxiDOGPL%2FEg7dVjQp6Ct8obBckAQvNQFGyzwjGTXyAYdz7bmI&X-Amz-Signature=b060eeda5972e24fcea669f64fefecb9e143e4ec71bd4296504a49e912e7776b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MS4LCO%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDTk%2FA%2BZKiwMs%2FI8SZgH73lgKDnTrdWBHkApW5Ei1Q3PgIhAId3d68htpCfuc%2BdEI7gjgcbWe3KmRqrl0fkJDC3VpP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2jDBDa6BANaysYakq3AOqqAZcpOVcuGSvk0MeiQSUf6ndrAkP%2BjG%2F7k6aQl6biv5cggbOGgQprFilR4U6370AQbyKRzCi%2BKRn8jLxFYvVRNiQ%2BTucnsQr5v2Oj38QZrPAEhRi5YHEIK8Jw1weVhD0zlipREPZu8G0So4lUMA7fefLRWYP2znnvOnk%2BCDkUYv2QGbsbHW5KMJg0Ug2brrf6Ms5lExYmEAprGVN0qjBt4sls76%2B5HPmcnaCUtPico4eoV22uedML6yX5PluUwQ%2BA0VvzVlmqHq%2B1daMdxGWfcc15Cvu7iNsp9QEwHJ7mYFGSnU%2Fbx%2BjCWRTXjCVPTJ8Xq2ffAKQ3RaS7qPTziprRnbdD%2FzSBq75ULYUOXiGU1GYNFIJ2HVwi9fi8y63jjomkkPA9WGb%2FaxRy8tbQm7nYJaHQI6WNLDhdGZarfQk%2B0t%2BbJoy8AhFL6AJgkw8DBtGCM8DaX7ooeh9zn2Zx%2F2%2BNJf3xrZOAL%2BllL6v%2BPw1lwijAhdWl1na225bxKYLCKI%2FVi1v%2Be1nigfyF92yA4y8STMiqzuuO38EYxOFhlffh9wdE1ZOBfvdG4t3IdsklGyt8DunO%2FO%2F%2FdPFQ%2BWameGxAWiUxh9rMaC9quL50Ob6EcYEXiQht6b5HjpaHTDIwrrTBjqkAaTjKI3PiDCASM9ttsnM8%2BodFekOoRbIUPjLtduDtMj7GIaVygudpAm07Igbt%2BfKWOicGjgqdtyF%2BvPd4iwOW8z9aKH%2BTsvqkCjqHhvN1vD3U1fe1TtwvYt0Sq5PPlTCSfnihfqR3ZyHn8UzsaA%2FhmBRQzByY4Q8j0%2BPgKLeDpOOxiDOGPL%2FEg7dVjQp6Ct8obBckAQvNQFGyzwjGTXyAYdz7bmI&X-Amz-Signature=9f7ee773fdb8705044eec920397fadd3f1478628781bf793219ea24be08fec81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MS4LCO%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDTk%2FA%2BZKiwMs%2FI8SZgH73lgKDnTrdWBHkApW5Ei1Q3PgIhAId3d68htpCfuc%2BdEI7gjgcbWe3KmRqrl0fkJDC3VpP%2FKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2jDBDa6BANaysYakq3AOqqAZcpOVcuGSvk0MeiQSUf6ndrAkP%2BjG%2F7k6aQl6biv5cggbOGgQprFilR4U6370AQbyKRzCi%2BKRn8jLxFYvVRNiQ%2BTucnsQr5v2Oj38QZrPAEhRi5YHEIK8Jw1weVhD0zlipREPZu8G0So4lUMA7fefLRWYP2znnvOnk%2BCDkUYv2QGbsbHW5KMJg0Ug2brrf6Ms5lExYmEAprGVN0qjBt4sls76%2B5HPmcnaCUtPico4eoV22uedML6yX5PluUwQ%2BA0VvzVlmqHq%2B1daMdxGWfcc15Cvu7iNsp9QEwHJ7mYFGSnU%2Fbx%2BjCWRTXjCVPTJ8Xq2ffAKQ3RaS7qPTziprRnbdD%2FzSBq75ULYUOXiGU1GYNFIJ2HVwi9fi8y63jjomkkPA9WGb%2FaxRy8tbQm7nYJaHQI6WNLDhdGZarfQk%2B0t%2BbJoy8AhFL6AJgkw8DBtGCM8DaX7ooeh9zn2Zx%2F2%2BNJf3xrZOAL%2BllL6v%2BPw1lwijAhdWl1na225bxKYLCKI%2FVi1v%2Be1nigfyF92yA4y8STMiqzuuO38EYxOFhlffh9wdE1ZOBfvdG4t3IdsklGyt8DunO%2FO%2F%2FdPFQ%2BWameGxAWiUxh9rMaC9quL50Ob6EcYEXiQht6b5HjpaHTDIwrrTBjqkAaTjKI3PiDCASM9ttsnM8%2BodFekOoRbIUPjLtduDtMj7GIaVygudpAm07Igbt%2BfKWOicGjgqdtyF%2BvPd4iwOW8z9aKH%2BTsvqkCjqHhvN1vD3U1fe1TtwvYt0Sq5PPlTCSfnihfqR3ZyHn8UzsaA%2FhmBRQzByY4Q8j0%2BPgKLeDpOOxiDOGPL%2FEg7dVjQp6Ct8obBckAQvNQFGyzwjGTXyAYdz7bmI&X-Amz-Signature=8af32b29799703b32ebb8793b2e4c00aac7345524cf63c9dd13edfe47657396b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
