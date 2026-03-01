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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6V6SHB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHltL%2BatD9xsBqFZR7VXQ%2Bm24qKZ4lhJBGEk89pqJuMMAiEAp%2FkzAn0eKYQaNIjSBup6wyOS4yisHrZGjh3zCRC%2FpTsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDEqfNio95SK7rqsVircA8rl4Y2jb1ZcN9OsqSRrz%2ByBqhdLEEgnJEqX5U%2FQ%2BRXayPy1ecEPDZ6U4EY4MdIyOgiOarVJAPAOrKTiJQT2hh%2FBp0oPSWzSSr1%2F6RcIZtmDRTCTqcmbLQRF4s0lX2851eYC1j9nAfIaXidVZIwo0kB3lbJeEsamZswMxkkTj7E%2Br6xsiN2xPxr8IZG%2B7jGKve0C3SkbesbpyOhu1vKdX%2FN%2B90VedwFgO%2B%2F3UltdEcPO9LUsomyPaUOu6SPFPkVizEOHZ83YiVp%2FEL9F5UGLLxLol0mriaRw9rw1U7hUmZGdjwiS7Y%2FdI36vqcfn3Hd4RoYY7GjefJBUMDBbi3mYNa58df1DLSNmDc2L0ka6osH529eduyDrQoD0TqTzgHacfqa8H%2B6Yio%2Bkas7XoKVsGoESZZcJaGT92WsATquTRp6UP%2FaCjdHhpEL3%2BTTe%2Ba3YPwLc1p%2BtU75%2BnKtftS0IPpRo79d9ksfmp3IGLDiHIp7DoLG%2FPwzRdcN5tVQ2hvbDoZmqKBP2xZYu3uzx5kAQQZzFsRDpctJMXxb7MJFBgjFL8%2FJa1p9YPXyekQfyHdEi38ts1NCEqC%2Fm3Gs6ZHDSgt3i2WoE7xmhySX3u8O3YHgiidg3gbEhDRyTstF0MJaujs0GOqUBX2rh%2BGNWHHon78Ab74LuC1BgHZOCXzXvY6tk1OyGEwWLJPpXeG6s0Ltd9QWx52fTECL1%2F0G5PmLZ%2Fs8PUAxtOdZjsrIlAfaGUvbSwg%2FQEqgE2mfA0gczj%2F5IoU8TlnC4UcGBUZbAu5py9amC9W7DVh2Amvsu8%2FSFdw73My0aOPXHn6J1GtK9nz9I5hZJnb3KjKcJqmnXPAxOII4UWUXkboYJSdW9&X-Amz-Signature=36acdf62b1be1a5fd06a9d729fefe4ef57bf51176b482e7a339ccadebfcf9fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6V6SHB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHltL%2BatD9xsBqFZR7VXQ%2Bm24qKZ4lhJBGEk89pqJuMMAiEAp%2FkzAn0eKYQaNIjSBup6wyOS4yisHrZGjh3zCRC%2FpTsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDEqfNio95SK7rqsVircA8rl4Y2jb1ZcN9OsqSRrz%2ByBqhdLEEgnJEqX5U%2FQ%2BRXayPy1ecEPDZ6U4EY4MdIyOgiOarVJAPAOrKTiJQT2hh%2FBp0oPSWzSSr1%2F6RcIZtmDRTCTqcmbLQRF4s0lX2851eYC1j9nAfIaXidVZIwo0kB3lbJeEsamZswMxkkTj7E%2Br6xsiN2xPxr8IZG%2B7jGKve0C3SkbesbpyOhu1vKdX%2FN%2B90VedwFgO%2B%2F3UltdEcPO9LUsomyPaUOu6SPFPkVizEOHZ83YiVp%2FEL9F5UGLLxLol0mriaRw9rw1U7hUmZGdjwiS7Y%2FdI36vqcfn3Hd4RoYY7GjefJBUMDBbi3mYNa58df1DLSNmDc2L0ka6osH529eduyDrQoD0TqTzgHacfqa8H%2B6Yio%2Bkas7XoKVsGoESZZcJaGT92WsATquTRp6UP%2FaCjdHhpEL3%2BTTe%2Ba3YPwLc1p%2BtU75%2BnKtftS0IPpRo79d9ksfmp3IGLDiHIp7DoLG%2FPwzRdcN5tVQ2hvbDoZmqKBP2xZYu3uzx5kAQQZzFsRDpctJMXxb7MJFBgjFL8%2FJa1p9YPXyekQfyHdEi38ts1NCEqC%2Fm3Gs6ZHDSgt3i2WoE7xmhySX3u8O3YHgiidg3gbEhDRyTstF0MJaujs0GOqUBX2rh%2BGNWHHon78Ab74LuC1BgHZOCXzXvY6tk1OyGEwWLJPpXeG6s0Ltd9QWx52fTECL1%2F0G5PmLZ%2Fs8PUAxtOdZjsrIlAfaGUvbSwg%2FQEqgE2mfA0gczj%2F5IoU8TlnC4UcGBUZbAu5py9amC9W7DVh2Amvsu8%2FSFdw73My0aOPXHn6J1GtK9nz9I5hZJnb3KjKcJqmnXPAxOII4UWUXkboYJSdW9&X-Amz-Signature=ad167d3f33b9ae6e6b4e05c7960834dd85ba43fb4a48d4de2fc14157c570d7f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6V6SHB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHltL%2BatD9xsBqFZR7VXQ%2Bm24qKZ4lhJBGEk89pqJuMMAiEAp%2FkzAn0eKYQaNIjSBup6wyOS4yisHrZGjh3zCRC%2FpTsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDEqfNio95SK7rqsVircA8rl4Y2jb1ZcN9OsqSRrz%2ByBqhdLEEgnJEqX5U%2FQ%2BRXayPy1ecEPDZ6U4EY4MdIyOgiOarVJAPAOrKTiJQT2hh%2FBp0oPSWzSSr1%2F6RcIZtmDRTCTqcmbLQRF4s0lX2851eYC1j9nAfIaXidVZIwo0kB3lbJeEsamZswMxkkTj7E%2Br6xsiN2xPxr8IZG%2B7jGKve0C3SkbesbpyOhu1vKdX%2FN%2B90VedwFgO%2B%2F3UltdEcPO9LUsomyPaUOu6SPFPkVizEOHZ83YiVp%2FEL9F5UGLLxLol0mriaRw9rw1U7hUmZGdjwiS7Y%2FdI36vqcfn3Hd4RoYY7GjefJBUMDBbi3mYNa58df1DLSNmDc2L0ka6osH529eduyDrQoD0TqTzgHacfqa8H%2B6Yio%2Bkas7XoKVsGoESZZcJaGT92WsATquTRp6UP%2FaCjdHhpEL3%2BTTe%2Ba3YPwLc1p%2BtU75%2BnKtftS0IPpRo79d9ksfmp3IGLDiHIp7DoLG%2FPwzRdcN5tVQ2hvbDoZmqKBP2xZYu3uzx5kAQQZzFsRDpctJMXxb7MJFBgjFL8%2FJa1p9YPXyekQfyHdEi38ts1NCEqC%2Fm3Gs6ZHDSgt3i2WoE7xmhySX3u8O3YHgiidg3gbEhDRyTstF0MJaujs0GOqUBX2rh%2BGNWHHon78Ab74LuC1BgHZOCXzXvY6tk1OyGEwWLJPpXeG6s0Ltd9QWx52fTECL1%2F0G5PmLZ%2Fs8PUAxtOdZjsrIlAfaGUvbSwg%2FQEqgE2mfA0gczj%2F5IoU8TlnC4UcGBUZbAu5py9amC9W7DVh2Amvsu8%2FSFdw73My0aOPXHn6J1GtK9nz9I5hZJnb3KjKcJqmnXPAxOII4UWUXkboYJSdW9&X-Amz-Signature=fbdbfd772a08dc0d59a64f227203d52b092428be397be5eb38d685bea14101ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6V6SHB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHltL%2BatD9xsBqFZR7VXQ%2Bm24qKZ4lhJBGEk89pqJuMMAiEAp%2FkzAn0eKYQaNIjSBup6wyOS4yisHrZGjh3zCRC%2FpTsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDEqfNio95SK7rqsVircA8rl4Y2jb1ZcN9OsqSRrz%2ByBqhdLEEgnJEqX5U%2FQ%2BRXayPy1ecEPDZ6U4EY4MdIyOgiOarVJAPAOrKTiJQT2hh%2FBp0oPSWzSSr1%2F6RcIZtmDRTCTqcmbLQRF4s0lX2851eYC1j9nAfIaXidVZIwo0kB3lbJeEsamZswMxkkTj7E%2Br6xsiN2xPxr8IZG%2B7jGKve0C3SkbesbpyOhu1vKdX%2FN%2B90VedwFgO%2B%2F3UltdEcPO9LUsomyPaUOu6SPFPkVizEOHZ83YiVp%2FEL9F5UGLLxLol0mriaRw9rw1U7hUmZGdjwiS7Y%2FdI36vqcfn3Hd4RoYY7GjefJBUMDBbi3mYNa58df1DLSNmDc2L0ka6osH529eduyDrQoD0TqTzgHacfqa8H%2B6Yio%2Bkas7XoKVsGoESZZcJaGT92WsATquTRp6UP%2FaCjdHhpEL3%2BTTe%2Ba3YPwLc1p%2BtU75%2BnKtftS0IPpRo79d9ksfmp3IGLDiHIp7DoLG%2FPwzRdcN5tVQ2hvbDoZmqKBP2xZYu3uzx5kAQQZzFsRDpctJMXxb7MJFBgjFL8%2FJa1p9YPXyekQfyHdEi38ts1NCEqC%2Fm3Gs6ZHDSgt3i2WoE7xmhySX3u8O3YHgiidg3gbEhDRyTstF0MJaujs0GOqUBX2rh%2BGNWHHon78Ab74LuC1BgHZOCXzXvY6tk1OyGEwWLJPpXeG6s0Ltd9QWx52fTECL1%2F0G5PmLZ%2Fs8PUAxtOdZjsrIlAfaGUvbSwg%2FQEqgE2mfA0gczj%2F5IoU8TlnC4UcGBUZbAu5py9amC9W7DVh2Amvsu8%2FSFdw73My0aOPXHn6J1GtK9nz9I5hZJnb3KjKcJqmnXPAxOII4UWUXkboYJSdW9&X-Amz-Signature=ff74c99d49d269e870d6b3e5e63b684b9259925557f3a84214247f87a915c34d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6V6SHB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHltL%2BatD9xsBqFZR7VXQ%2Bm24qKZ4lhJBGEk89pqJuMMAiEAp%2FkzAn0eKYQaNIjSBup6wyOS4yisHrZGjh3zCRC%2FpTsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDEqfNio95SK7rqsVircA8rl4Y2jb1ZcN9OsqSRrz%2ByBqhdLEEgnJEqX5U%2FQ%2BRXayPy1ecEPDZ6U4EY4MdIyOgiOarVJAPAOrKTiJQT2hh%2FBp0oPSWzSSr1%2F6RcIZtmDRTCTqcmbLQRF4s0lX2851eYC1j9nAfIaXidVZIwo0kB3lbJeEsamZswMxkkTj7E%2Br6xsiN2xPxr8IZG%2B7jGKve0C3SkbesbpyOhu1vKdX%2FN%2B90VedwFgO%2B%2F3UltdEcPO9LUsomyPaUOu6SPFPkVizEOHZ83YiVp%2FEL9F5UGLLxLol0mriaRw9rw1U7hUmZGdjwiS7Y%2FdI36vqcfn3Hd4RoYY7GjefJBUMDBbi3mYNa58df1DLSNmDc2L0ka6osH529eduyDrQoD0TqTzgHacfqa8H%2B6Yio%2Bkas7XoKVsGoESZZcJaGT92WsATquTRp6UP%2FaCjdHhpEL3%2BTTe%2Ba3YPwLc1p%2BtU75%2BnKtftS0IPpRo79d9ksfmp3IGLDiHIp7DoLG%2FPwzRdcN5tVQ2hvbDoZmqKBP2xZYu3uzx5kAQQZzFsRDpctJMXxb7MJFBgjFL8%2FJa1p9YPXyekQfyHdEi38ts1NCEqC%2Fm3Gs6ZHDSgt3i2WoE7xmhySX3u8O3YHgiidg3gbEhDRyTstF0MJaujs0GOqUBX2rh%2BGNWHHon78Ab74LuC1BgHZOCXzXvY6tk1OyGEwWLJPpXeG6s0Ltd9QWx52fTECL1%2F0G5PmLZ%2Fs8PUAxtOdZjsrIlAfaGUvbSwg%2FQEqgE2mfA0gczj%2F5IoU8TlnC4UcGBUZbAu5py9amC9W7DVh2Amvsu8%2FSFdw73My0aOPXHn6J1GtK9nz9I5hZJnb3KjKcJqmnXPAxOII4UWUXkboYJSdW9&X-Amz-Signature=279ef37bad6e3a0a65b45536cafa11b1fbadf204e5b1683d55c13b9f4312c50c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6V6SHB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHltL%2BatD9xsBqFZR7VXQ%2Bm24qKZ4lhJBGEk89pqJuMMAiEAp%2FkzAn0eKYQaNIjSBup6wyOS4yisHrZGjh3zCRC%2FpTsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDEqfNio95SK7rqsVircA8rl4Y2jb1ZcN9OsqSRrz%2ByBqhdLEEgnJEqX5U%2FQ%2BRXayPy1ecEPDZ6U4EY4MdIyOgiOarVJAPAOrKTiJQT2hh%2FBp0oPSWzSSr1%2F6RcIZtmDRTCTqcmbLQRF4s0lX2851eYC1j9nAfIaXidVZIwo0kB3lbJeEsamZswMxkkTj7E%2Br6xsiN2xPxr8IZG%2B7jGKve0C3SkbesbpyOhu1vKdX%2FN%2B90VedwFgO%2B%2F3UltdEcPO9LUsomyPaUOu6SPFPkVizEOHZ83YiVp%2FEL9F5UGLLxLol0mriaRw9rw1U7hUmZGdjwiS7Y%2FdI36vqcfn3Hd4RoYY7GjefJBUMDBbi3mYNa58df1DLSNmDc2L0ka6osH529eduyDrQoD0TqTzgHacfqa8H%2B6Yio%2Bkas7XoKVsGoESZZcJaGT92WsATquTRp6UP%2FaCjdHhpEL3%2BTTe%2Ba3YPwLc1p%2BtU75%2BnKtftS0IPpRo79d9ksfmp3IGLDiHIp7DoLG%2FPwzRdcN5tVQ2hvbDoZmqKBP2xZYu3uzx5kAQQZzFsRDpctJMXxb7MJFBgjFL8%2FJa1p9YPXyekQfyHdEi38ts1NCEqC%2Fm3Gs6ZHDSgt3i2WoE7xmhySX3u8O3YHgiidg3gbEhDRyTstF0MJaujs0GOqUBX2rh%2BGNWHHon78Ab74LuC1BgHZOCXzXvY6tk1OyGEwWLJPpXeG6s0Ltd9QWx52fTECL1%2F0G5PmLZ%2Fs8PUAxtOdZjsrIlAfaGUvbSwg%2FQEqgE2mfA0gczj%2F5IoU8TlnC4UcGBUZbAu5py9amC9W7DVh2Amvsu8%2FSFdw73My0aOPXHn6J1GtK9nz9I5hZJnb3KjKcJqmnXPAxOII4UWUXkboYJSdW9&X-Amz-Signature=173dde4cd648bdcfe9f24d8298604609dae4f08b10ebb5ba1c6281d3f7c2ae93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6V6SHB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHltL%2BatD9xsBqFZR7VXQ%2Bm24qKZ4lhJBGEk89pqJuMMAiEAp%2FkzAn0eKYQaNIjSBup6wyOS4yisHrZGjh3zCRC%2FpTsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDEqfNio95SK7rqsVircA8rl4Y2jb1ZcN9OsqSRrz%2ByBqhdLEEgnJEqX5U%2FQ%2BRXayPy1ecEPDZ6U4EY4MdIyOgiOarVJAPAOrKTiJQT2hh%2FBp0oPSWzSSr1%2F6RcIZtmDRTCTqcmbLQRF4s0lX2851eYC1j9nAfIaXidVZIwo0kB3lbJeEsamZswMxkkTj7E%2Br6xsiN2xPxr8IZG%2B7jGKve0C3SkbesbpyOhu1vKdX%2FN%2B90VedwFgO%2B%2F3UltdEcPO9LUsomyPaUOu6SPFPkVizEOHZ83YiVp%2FEL9F5UGLLxLol0mriaRw9rw1U7hUmZGdjwiS7Y%2FdI36vqcfn3Hd4RoYY7GjefJBUMDBbi3mYNa58df1DLSNmDc2L0ka6osH529eduyDrQoD0TqTzgHacfqa8H%2B6Yio%2Bkas7XoKVsGoESZZcJaGT92WsATquTRp6UP%2FaCjdHhpEL3%2BTTe%2Ba3YPwLc1p%2BtU75%2BnKtftS0IPpRo79d9ksfmp3IGLDiHIp7DoLG%2FPwzRdcN5tVQ2hvbDoZmqKBP2xZYu3uzx5kAQQZzFsRDpctJMXxb7MJFBgjFL8%2FJa1p9YPXyekQfyHdEi38ts1NCEqC%2Fm3Gs6ZHDSgt3i2WoE7xmhySX3u8O3YHgiidg3gbEhDRyTstF0MJaujs0GOqUBX2rh%2BGNWHHon78Ab74LuC1BgHZOCXzXvY6tk1OyGEwWLJPpXeG6s0Ltd9QWx52fTECL1%2F0G5PmLZ%2Fs8PUAxtOdZjsrIlAfaGUvbSwg%2FQEqgE2mfA0gczj%2F5IoU8TlnC4UcGBUZbAu5py9amC9W7DVh2Amvsu8%2FSFdw73My0aOPXHn6J1GtK9nz9I5hZJnb3KjKcJqmnXPAxOII4UWUXkboYJSdW9&X-Amz-Signature=b0d71b6f66cf66806774c83b02be29344bf9ccdac6a54f3d1c02184de8634e64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6V6SHB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHltL%2BatD9xsBqFZR7VXQ%2Bm24qKZ4lhJBGEk89pqJuMMAiEAp%2FkzAn0eKYQaNIjSBup6wyOS4yisHrZGjh3zCRC%2FpTsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDEqfNio95SK7rqsVircA8rl4Y2jb1ZcN9OsqSRrz%2ByBqhdLEEgnJEqX5U%2FQ%2BRXayPy1ecEPDZ6U4EY4MdIyOgiOarVJAPAOrKTiJQT2hh%2FBp0oPSWzSSr1%2F6RcIZtmDRTCTqcmbLQRF4s0lX2851eYC1j9nAfIaXidVZIwo0kB3lbJeEsamZswMxkkTj7E%2Br6xsiN2xPxr8IZG%2B7jGKve0C3SkbesbpyOhu1vKdX%2FN%2B90VedwFgO%2B%2F3UltdEcPO9LUsomyPaUOu6SPFPkVizEOHZ83YiVp%2FEL9F5UGLLxLol0mriaRw9rw1U7hUmZGdjwiS7Y%2FdI36vqcfn3Hd4RoYY7GjefJBUMDBbi3mYNa58df1DLSNmDc2L0ka6osH529eduyDrQoD0TqTzgHacfqa8H%2B6Yio%2Bkas7XoKVsGoESZZcJaGT92WsATquTRp6UP%2FaCjdHhpEL3%2BTTe%2Ba3YPwLc1p%2BtU75%2BnKtftS0IPpRo79d9ksfmp3IGLDiHIp7DoLG%2FPwzRdcN5tVQ2hvbDoZmqKBP2xZYu3uzx5kAQQZzFsRDpctJMXxb7MJFBgjFL8%2FJa1p9YPXyekQfyHdEi38ts1NCEqC%2Fm3Gs6ZHDSgt3i2WoE7xmhySX3u8O3YHgiidg3gbEhDRyTstF0MJaujs0GOqUBX2rh%2BGNWHHon78Ab74LuC1BgHZOCXzXvY6tk1OyGEwWLJPpXeG6s0Ltd9QWx52fTECL1%2F0G5PmLZ%2Fs8PUAxtOdZjsrIlAfaGUvbSwg%2FQEqgE2mfA0gczj%2F5IoU8TlnC4UcGBUZbAu5py9amC9W7DVh2Amvsu8%2FSFdw73My0aOPXHn6J1GtK9nz9I5hZJnb3KjKcJqmnXPAxOII4UWUXkboYJSdW9&X-Amz-Signature=aa6b7baed464162ae15b59f9a58c05f4506857cef3d409652b5e5808be585915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6V6SHB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHltL%2BatD9xsBqFZR7VXQ%2Bm24qKZ4lhJBGEk89pqJuMMAiEAp%2FkzAn0eKYQaNIjSBup6wyOS4yisHrZGjh3zCRC%2FpTsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDEqfNio95SK7rqsVircA8rl4Y2jb1ZcN9OsqSRrz%2ByBqhdLEEgnJEqX5U%2FQ%2BRXayPy1ecEPDZ6U4EY4MdIyOgiOarVJAPAOrKTiJQT2hh%2FBp0oPSWzSSr1%2F6RcIZtmDRTCTqcmbLQRF4s0lX2851eYC1j9nAfIaXidVZIwo0kB3lbJeEsamZswMxkkTj7E%2Br6xsiN2xPxr8IZG%2B7jGKve0C3SkbesbpyOhu1vKdX%2FN%2B90VedwFgO%2B%2F3UltdEcPO9LUsomyPaUOu6SPFPkVizEOHZ83YiVp%2FEL9F5UGLLxLol0mriaRw9rw1U7hUmZGdjwiS7Y%2FdI36vqcfn3Hd4RoYY7GjefJBUMDBbi3mYNa58df1DLSNmDc2L0ka6osH529eduyDrQoD0TqTzgHacfqa8H%2B6Yio%2Bkas7XoKVsGoESZZcJaGT92WsATquTRp6UP%2FaCjdHhpEL3%2BTTe%2Ba3YPwLc1p%2BtU75%2BnKtftS0IPpRo79d9ksfmp3IGLDiHIp7DoLG%2FPwzRdcN5tVQ2hvbDoZmqKBP2xZYu3uzx5kAQQZzFsRDpctJMXxb7MJFBgjFL8%2FJa1p9YPXyekQfyHdEi38ts1NCEqC%2Fm3Gs6ZHDSgt3i2WoE7xmhySX3u8O3YHgiidg3gbEhDRyTstF0MJaujs0GOqUBX2rh%2BGNWHHon78Ab74LuC1BgHZOCXzXvY6tk1OyGEwWLJPpXeG6s0Ltd9QWx52fTECL1%2F0G5PmLZ%2Fs8PUAxtOdZjsrIlAfaGUvbSwg%2FQEqgE2mfA0gczj%2F5IoU8TlnC4UcGBUZbAu5py9amC9W7DVh2Amvsu8%2FSFdw73My0aOPXHn6J1GtK9nz9I5hZJnb3KjKcJqmnXPAxOII4UWUXkboYJSdW9&X-Amz-Signature=86b4c804db85690d4f17da3414c9eb58a71d75be93ac0c8155d76db2e0fe7752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6V6SHB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHltL%2BatD9xsBqFZR7VXQ%2Bm24qKZ4lhJBGEk89pqJuMMAiEAp%2FkzAn0eKYQaNIjSBup6wyOS4yisHrZGjh3zCRC%2FpTsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDEqfNio95SK7rqsVircA8rl4Y2jb1ZcN9OsqSRrz%2ByBqhdLEEgnJEqX5U%2FQ%2BRXayPy1ecEPDZ6U4EY4MdIyOgiOarVJAPAOrKTiJQT2hh%2FBp0oPSWzSSr1%2F6RcIZtmDRTCTqcmbLQRF4s0lX2851eYC1j9nAfIaXidVZIwo0kB3lbJeEsamZswMxkkTj7E%2Br6xsiN2xPxr8IZG%2B7jGKve0C3SkbesbpyOhu1vKdX%2FN%2B90VedwFgO%2B%2F3UltdEcPO9LUsomyPaUOu6SPFPkVizEOHZ83YiVp%2FEL9F5UGLLxLol0mriaRw9rw1U7hUmZGdjwiS7Y%2FdI36vqcfn3Hd4RoYY7GjefJBUMDBbi3mYNa58df1DLSNmDc2L0ka6osH529eduyDrQoD0TqTzgHacfqa8H%2B6Yio%2Bkas7XoKVsGoESZZcJaGT92WsATquTRp6UP%2FaCjdHhpEL3%2BTTe%2Ba3YPwLc1p%2BtU75%2BnKtftS0IPpRo79d9ksfmp3IGLDiHIp7DoLG%2FPwzRdcN5tVQ2hvbDoZmqKBP2xZYu3uzx5kAQQZzFsRDpctJMXxb7MJFBgjFL8%2FJa1p9YPXyekQfyHdEi38ts1NCEqC%2Fm3Gs6ZHDSgt3i2WoE7xmhySX3u8O3YHgiidg3gbEhDRyTstF0MJaujs0GOqUBX2rh%2BGNWHHon78Ab74LuC1BgHZOCXzXvY6tk1OyGEwWLJPpXeG6s0Ltd9QWx52fTECL1%2F0G5PmLZ%2Fs8PUAxtOdZjsrIlAfaGUvbSwg%2FQEqgE2mfA0gczj%2F5IoU8TlnC4UcGBUZbAu5py9amC9W7DVh2Amvsu8%2FSFdw73My0aOPXHn6J1GtK9nz9I5hZJnb3KjKcJqmnXPAxOII4UWUXkboYJSdW9&X-Amz-Signature=cc3cbd8b1c4a6c1d9c2760521077eaeb4189093aca0246d5791fc2ccaef9630d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6V6SHB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHltL%2BatD9xsBqFZR7VXQ%2Bm24qKZ4lhJBGEk89pqJuMMAiEAp%2FkzAn0eKYQaNIjSBup6wyOS4yisHrZGjh3zCRC%2FpTsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDEqfNio95SK7rqsVircA8rl4Y2jb1ZcN9OsqSRrz%2ByBqhdLEEgnJEqX5U%2FQ%2BRXayPy1ecEPDZ6U4EY4MdIyOgiOarVJAPAOrKTiJQT2hh%2FBp0oPSWzSSr1%2F6RcIZtmDRTCTqcmbLQRF4s0lX2851eYC1j9nAfIaXidVZIwo0kB3lbJeEsamZswMxkkTj7E%2Br6xsiN2xPxr8IZG%2B7jGKve0C3SkbesbpyOhu1vKdX%2FN%2B90VedwFgO%2B%2F3UltdEcPO9LUsomyPaUOu6SPFPkVizEOHZ83YiVp%2FEL9F5UGLLxLol0mriaRw9rw1U7hUmZGdjwiS7Y%2FdI36vqcfn3Hd4RoYY7GjefJBUMDBbi3mYNa58df1DLSNmDc2L0ka6osH529eduyDrQoD0TqTzgHacfqa8H%2B6Yio%2Bkas7XoKVsGoESZZcJaGT92WsATquTRp6UP%2FaCjdHhpEL3%2BTTe%2Ba3YPwLc1p%2BtU75%2BnKtftS0IPpRo79d9ksfmp3IGLDiHIp7DoLG%2FPwzRdcN5tVQ2hvbDoZmqKBP2xZYu3uzx5kAQQZzFsRDpctJMXxb7MJFBgjFL8%2FJa1p9YPXyekQfyHdEi38ts1NCEqC%2Fm3Gs6ZHDSgt3i2WoE7xmhySX3u8O3YHgiidg3gbEhDRyTstF0MJaujs0GOqUBX2rh%2BGNWHHon78Ab74LuC1BgHZOCXzXvY6tk1OyGEwWLJPpXeG6s0Ltd9QWx52fTECL1%2F0G5PmLZ%2Fs8PUAxtOdZjsrIlAfaGUvbSwg%2FQEqgE2mfA0gczj%2F5IoU8TlnC4UcGBUZbAu5py9amC9W7DVh2Amvsu8%2FSFdw73My0aOPXHn6J1GtK9nz9I5hZJnb3KjKcJqmnXPAxOII4UWUXkboYJSdW9&X-Amz-Signature=a3156c5661c439d574417d9cdf8ed201e8f6712210d0eea45a9b13fff7fd8d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6V6SHB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHltL%2BatD9xsBqFZR7VXQ%2Bm24qKZ4lhJBGEk89pqJuMMAiEAp%2FkzAn0eKYQaNIjSBup6wyOS4yisHrZGjh3zCRC%2FpTsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDEqfNio95SK7rqsVircA8rl4Y2jb1ZcN9OsqSRrz%2ByBqhdLEEgnJEqX5U%2FQ%2BRXayPy1ecEPDZ6U4EY4MdIyOgiOarVJAPAOrKTiJQT2hh%2FBp0oPSWzSSr1%2F6RcIZtmDRTCTqcmbLQRF4s0lX2851eYC1j9nAfIaXidVZIwo0kB3lbJeEsamZswMxkkTj7E%2Br6xsiN2xPxr8IZG%2B7jGKve0C3SkbesbpyOhu1vKdX%2FN%2B90VedwFgO%2B%2F3UltdEcPO9LUsomyPaUOu6SPFPkVizEOHZ83YiVp%2FEL9F5UGLLxLol0mriaRw9rw1U7hUmZGdjwiS7Y%2FdI36vqcfn3Hd4RoYY7GjefJBUMDBbi3mYNa58df1DLSNmDc2L0ka6osH529eduyDrQoD0TqTzgHacfqa8H%2B6Yio%2Bkas7XoKVsGoESZZcJaGT92WsATquTRp6UP%2FaCjdHhpEL3%2BTTe%2Ba3YPwLc1p%2BtU75%2BnKtftS0IPpRo79d9ksfmp3IGLDiHIp7DoLG%2FPwzRdcN5tVQ2hvbDoZmqKBP2xZYu3uzx5kAQQZzFsRDpctJMXxb7MJFBgjFL8%2FJa1p9YPXyekQfyHdEi38ts1NCEqC%2Fm3Gs6ZHDSgt3i2WoE7xmhySX3u8O3YHgiidg3gbEhDRyTstF0MJaujs0GOqUBX2rh%2BGNWHHon78Ab74LuC1BgHZOCXzXvY6tk1OyGEwWLJPpXeG6s0Ltd9QWx52fTECL1%2F0G5PmLZ%2Fs8PUAxtOdZjsrIlAfaGUvbSwg%2FQEqgE2mfA0gczj%2F5IoU8TlnC4UcGBUZbAu5py9amC9W7DVh2Amvsu8%2FSFdw73My0aOPXHn6J1GtK9nz9I5hZJnb3KjKcJqmnXPAxOII4UWUXkboYJSdW9&X-Amz-Signature=085fb373c37742b7c298e4a71cf4cb5f698cd07a83c45ac557c4020bc7477a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6V6SHB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHltL%2BatD9xsBqFZR7VXQ%2Bm24qKZ4lhJBGEk89pqJuMMAiEAp%2FkzAn0eKYQaNIjSBup6wyOS4yisHrZGjh3zCRC%2FpTsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDEqfNio95SK7rqsVircA8rl4Y2jb1ZcN9OsqSRrz%2ByBqhdLEEgnJEqX5U%2FQ%2BRXayPy1ecEPDZ6U4EY4MdIyOgiOarVJAPAOrKTiJQT2hh%2FBp0oPSWzSSr1%2F6RcIZtmDRTCTqcmbLQRF4s0lX2851eYC1j9nAfIaXidVZIwo0kB3lbJeEsamZswMxkkTj7E%2Br6xsiN2xPxr8IZG%2B7jGKve0C3SkbesbpyOhu1vKdX%2FN%2B90VedwFgO%2B%2F3UltdEcPO9LUsomyPaUOu6SPFPkVizEOHZ83YiVp%2FEL9F5UGLLxLol0mriaRw9rw1U7hUmZGdjwiS7Y%2FdI36vqcfn3Hd4RoYY7GjefJBUMDBbi3mYNa58df1DLSNmDc2L0ka6osH529eduyDrQoD0TqTzgHacfqa8H%2B6Yio%2Bkas7XoKVsGoESZZcJaGT92WsATquTRp6UP%2FaCjdHhpEL3%2BTTe%2Ba3YPwLc1p%2BtU75%2BnKtftS0IPpRo79d9ksfmp3IGLDiHIp7DoLG%2FPwzRdcN5tVQ2hvbDoZmqKBP2xZYu3uzx5kAQQZzFsRDpctJMXxb7MJFBgjFL8%2FJa1p9YPXyekQfyHdEi38ts1NCEqC%2Fm3Gs6ZHDSgt3i2WoE7xmhySX3u8O3YHgiidg3gbEhDRyTstF0MJaujs0GOqUBX2rh%2BGNWHHon78Ab74LuC1BgHZOCXzXvY6tk1OyGEwWLJPpXeG6s0Ltd9QWx52fTECL1%2F0G5PmLZ%2Fs8PUAxtOdZjsrIlAfaGUvbSwg%2FQEqgE2mfA0gczj%2F5IoU8TlnC4UcGBUZbAu5py9amC9W7DVh2Amvsu8%2FSFdw73My0aOPXHn6J1GtK9nz9I5hZJnb3KjKcJqmnXPAxOII4UWUXkboYJSdW9&X-Amz-Signature=99daa2668461d1417503bda43ee597c66911e9e511ba1823f00535d43acaac6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6V6SHB%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHltL%2BatD9xsBqFZR7VXQ%2Bm24qKZ4lhJBGEk89pqJuMMAiEAp%2FkzAn0eKYQaNIjSBup6wyOS4yisHrZGjh3zCRC%2FpTsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDEqfNio95SK7rqsVircA8rl4Y2jb1ZcN9OsqSRrz%2ByBqhdLEEgnJEqX5U%2FQ%2BRXayPy1ecEPDZ6U4EY4MdIyOgiOarVJAPAOrKTiJQT2hh%2FBp0oPSWzSSr1%2F6RcIZtmDRTCTqcmbLQRF4s0lX2851eYC1j9nAfIaXidVZIwo0kB3lbJeEsamZswMxkkTj7E%2Br6xsiN2xPxr8IZG%2B7jGKve0C3SkbesbpyOhu1vKdX%2FN%2B90VedwFgO%2B%2F3UltdEcPO9LUsomyPaUOu6SPFPkVizEOHZ83YiVp%2FEL9F5UGLLxLol0mriaRw9rw1U7hUmZGdjwiS7Y%2FdI36vqcfn3Hd4RoYY7GjefJBUMDBbi3mYNa58df1DLSNmDc2L0ka6osH529eduyDrQoD0TqTzgHacfqa8H%2B6Yio%2Bkas7XoKVsGoESZZcJaGT92WsATquTRp6UP%2FaCjdHhpEL3%2BTTe%2Ba3YPwLc1p%2BtU75%2BnKtftS0IPpRo79d9ksfmp3IGLDiHIp7DoLG%2FPwzRdcN5tVQ2hvbDoZmqKBP2xZYu3uzx5kAQQZzFsRDpctJMXxb7MJFBgjFL8%2FJa1p9YPXyekQfyHdEi38ts1NCEqC%2Fm3Gs6ZHDSgt3i2WoE7xmhySX3u8O3YHgiidg3gbEhDRyTstF0MJaujs0GOqUBX2rh%2BGNWHHon78Ab74LuC1BgHZOCXzXvY6tk1OyGEwWLJPpXeG6s0Ltd9QWx52fTECL1%2F0G5PmLZ%2Fs8PUAxtOdZjsrIlAfaGUvbSwg%2FQEqgE2mfA0gczj%2F5IoU8TlnC4UcGBUZbAu5py9amC9W7DVh2Amvsu8%2FSFdw73My0aOPXHn6J1GtK9nz9I5hZJnb3KjKcJqmnXPAxOII4UWUXkboYJSdW9&X-Amz-Signature=502c8d32ab24997c0721d4928650a13bfef9b87ee053a643c211931d29ef6841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
