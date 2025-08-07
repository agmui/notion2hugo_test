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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCEIG2IY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDnWBWCDvIBmhNfHMC2FUcTeysK0f7SMgSBnAX256coYQIgUmGl5t8jr3lIp8g2pkO61bhaSia6OXRONxF9ojzEsgUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw5V6tXMR3b7LxATyrcA4b3h3AlE4oeYtho7IPlUkZMczSiPZR8ydaxFHWn8grlCy71UFSUrHw2t9lsul7UsohzuwklRDcHLewqkStm6PPx%2BJV8QSxfwCvZzijV3CKUZkl%2BpUZuaWmV3W30XqtS%2FsfZztbCQQKqEDD%2BrCqq1m2xtSNEbNzBofIp%2BXPn1WYd%2Bn1Te2KtQgOpXoaZDsccDzFu6lLHzry56hJJuumTt61zmr7v7wgPTyoJUUFpC8H4ip1ANwDK6oFeHuTXWC%2BWmgPly%2FsjlCWS8Yl0g7fmHQeIyLsLdPQbBYsMpuQTHStrKFoy69ZwdXixum2Ql%2Ff2JgQ3eKu1BKwmKL2at68RabR3qeY5Z7IKfeLp0iQGVY9EgSz6Yak%2Bd8sq373MEUztzwPh7jF5w2mevHa%2BQ4MI1tosRE2Sf3BFPSG3C2SlUrYmiL7NkdxmHAY2tENKE3fJVAkr3SOAIu6YF3tLrPyCwuuwgZGP4cuB44GJWHUd5CMoJIN%2BItI0T0KsMYjlttjUQUgOMT%2BeaETC%2Bfvlgf5ej1Z6sTSMaU0sRR6Wlxll8u%2F6x1eXkz9IEwPfdQhtDBeQhStThr1D3gTWZ85lia3MmspOca521ahznjQgNxYpsNSwM%2FmIFAK4cWF3qkicMObI0MQGOqUB4BzcnRhQJF22l4qqgqfIuOTDH%2BdrUVpYId4aznjlMygOI%2B7ebJoD0acWEvSxSnYyOgsfknn6GB%2BF4%2B%2B3qfY6M1qjUbpjustPHOqXK2QRe9GVz1fKTIJ%2BZdECaLhNaQN1Vo97k6CGVHRbEHkxqgus%2FkbxERumgWBuc0G9j4Vjuaizkf3DUoJbBtwQrE%2FiSRV2veDiNXyVHu2bSc2m8uLhibWmJRYL&X-Amz-Signature=c1df66856964a3cefd47f1f701db4266037e4bffddd252a084d09ca12e8950b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCEIG2IY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDnWBWCDvIBmhNfHMC2FUcTeysK0f7SMgSBnAX256coYQIgUmGl5t8jr3lIp8g2pkO61bhaSia6OXRONxF9ojzEsgUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw5V6tXMR3b7LxATyrcA4b3h3AlE4oeYtho7IPlUkZMczSiPZR8ydaxFHWn8grlCy71UFSUrHw2t9lsul7UsohzuwklRDcHLewqkStm6PPx%2BJV8QSxfwCvZzijV3CKUZkl%2BpUZuaWmV3W30XqtS%2FsfZztbCQQKqEDD%2BrCqq1m2xtSNEbNzBofIp%2BXPn1WYd%2Bn1Te2KtQgOpXoaZDsccDzFu6lLHzry56hJJuumTt61zmr7v7wgPTyoJUUFpC8H4ip1ANwDK6oFeHuTXWC%2BWmgPly%2FsjlCWS8Yl0g7fmHQeIyLsLdPQbBYsMpuQTHStrKFoy69ZwdXixum2Ql%2Ff2JgQ3eKu1BKwmKL2at68RabR3qeY5Z7IKfeLp0iQGVY9EgSz6Yak%2Bd8sq373MEUztzwPh7jF5w2mevHa%2BQ4MI1tosRE2Sf3BFPSG3C2SlUrYmiL7NkdxmHAY2tENKE3fJVAkr3SOAIu6YF3tLrPyCwuuwgZGP4cuB44GJWHUd5CMoJIN%2BItI0T0KsMYjlttjUQUgOMT%2BeaETC%2Bfvlgf5ej1Z6sTSMaU0sRR6Wlxll8u%2F6x1eXkz9IEwPfdQhtDBeQhStThr1D3gTWZ85lia3MmspOca521ahznjQgNxYpsNSwM%2FmIFAK4cWF3qkicMObI0MQGOqUB4BzcnRhQJF22l4qqgqfIuOTDH%2BdrUVpYId4aznjlMygOI%2B7ebJoD0acWEvSxSnYyOgsfknn6GB%2BF4%2B%2B3qfY6M1qjUbpjustPHOqXK2QRe9GVz1fKTIJ%2BZdECaLhNaQN1Vo97k6CGVHRbEHkxqgus%2FkbxERumgWBuc0G9j4Vjuaizkf3DUoJbBtwQrE%2FiSRV2veDiNXyVHu2bSc2m8uLhibWmJRYL&X-Amz-Signature=1eeeb4f6c8c7e5e3774a4d0b5468f9f45807dddc6224c4f2bc788c673d76538d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCEIG2IY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDnWBWCDvIBmhNfHMC2FUcTeysK0f7SMgSBnAX256coYQIgUmGl5t8jr3lIp8g2pkO61bhaSia6OXRONxF9ojzEsgUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw5V6tXMR3b7LxATyrcA4b3h3AlE4oeYtho7IPlUkZMczSiPZR8ydaxFHWn8grlCy71UFSUrHw2t9lsul7UsohzuwklRDcHLewqkStm6PPx%2BJV8QSxfwCvZzijV3CKUZkl%2BpUZuaWmV3W30XqtS%2FsfZztbCQQKqEDD%2BrCqq1m2xtSNEbNzBofIp%2BXPn1WYd%2Bn1Te2KtQgOpXoaZDsccDzFu6lLHzry56hJJuumTt61zmr7v7wgPTyoJUUFpC8H4ip1ANwDK6oFeHuTXWC%2BWmgPly%2FsjlCWS8Yl0g7fmHQeIyLsLdPQbBYsMpuQTHStrKFoy69ZwdXixum2Ql%2Ff2JgQ3eKu1BKwmKL2at68RabR3qeY5Z7IKfeLp0iQGVY9EgSz6Yak%2Bd8sq373MEUztzwPh7jF5w2mevHa%2BQ4MI1tosRE2Sf3BFPSG3C2SlUrYmiL7NkdxmHAY2tENKE3fJVAkr3SOAIu6YF3tLrPyCwuuwgZGP4cuB44GJWHUd5CMoJIN%2BItI0T0KsMYjlttjUQUgOMT%2BeaETC%2Bfvlgf5ej1Z6sTSMaU0sRR6Wlxll8u%2F6x1eXkz9IEwPfdQhtDBeQhStThr1D3gTWZ85lia3MmspOca521ahznjQgNxYpsNSwM%2FmIFAK4cWF3qkicMObI0MQGOqUB4BzcnRhQJF22l4qqgqfIuOTDH%2BdrUVpYId4aznjlMygOI%2B7ebJoD0acWEvSxSnYyOgsfknn6GB%2BF4%2B%2B3qfY6M1qjUbpjustPHOqXK2QRe9GVz1fKTIJ%2BZdECaLhNaQN1Vo97k6CGVHRbEHkxqgus%2FkbxERumgWBuc0G9j4Vjuaizkf3DUoJbBtwQrE%2FiSRV2veDiNXyVHu2bSc2m8uLhibWmJRYL&X-Amz-Signature=87b0b33b70faad3769e8a0be6528093197722b34234c32807c8e7c4054bda5f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCEIG2IY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDnWBWCDvIBmhNfHMC2FUcTeysK0f7SMgSBnAX256coYQIgUmGl5t8jr3lIp8g2pkO61bhaSia6OXRONxF9ojzEsgUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw5V6tXMR3b7LxATyrcA4b3h3AlE4oeYtho7IPlUkZMczSiPZR8ydaxFHWn8grlCy71UFSUrHw2t9lsul7UsohzuwklRDcHLewqkStm6PPx%2BJV8QSxfwCvZzijV3CKUZkl%2BpUZuaWmV3W30XqtS%2FsfZztbCQQKqEDD%2BrCqq1m2xtSNEbNzBofIp%2BXPn1WYd%2Bn1Te2KtQgOpXoaZDsccDzFu6lLHzry56hJJuumTt61zmr7v7wgPTyoJUUFpC8H4ip1ANwDK6oFeHuTXWC%2BWmgPly%2FsjlCWS8Yl0g7fmHQeIyLsLdPQbBYsMpuQTHStrKFoy69ZwdXixum2Ql%2Ff2JgQ3eKu1BKwmKL2at68RabR3qeY5Z7IKfeLp0iQGVY9EgSz6Yak%2Bd8sq373MEUztzwPh7jF5w2mevHa%2BQ4MI1tosRE2Sf3BFPSG3C2SlUrYmiL7NkdxmHAY2tENKE3fJVAkr3SOAIu6YF3tLrPyCwuuwgZGP4cuB44GJWHUd5CMoJIN%2BItI0T0KsMYjlttjUQUgOMT%2BeaETC%2Bfvlgf5ej1Z6sTSMaU0sRR6Wlxll8u%2F6x1eXkz9IEwPfdQhtDBeQhStThr1D3gTWZ85lia3MmspOca521ahznjQgNxYpsNSwM%2FmIFAK4cWF3qkicMObI0MQGOqUB4BzcnRhQJF22l4qqgqfIuOTDH%2BdrUVpYId4aznjlMygOI%2B7ebJoD0acWEvSxSnYyOgsfknn6GB%2BF4%2B%2B3qfY6M1qjUbpjustPHOqXK2QRe9GVz1fKTIJ%2BZdECaLhNaQN1Vo97k6CGVHRbEHkxqgus%2FkbxERumgWBuc0G9j4Vjuaizkf3DUoJbBtwQrE%2FiSRV2veDiNXyVHu2bSc2m8uLhibWmJRYL&X-Amz-Signature=45bb5258252a3fc79d06069743ec484a3b0df4230050a1dbe674278182a31e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCEIG2IY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDnWBWCDvIBmhNfHMC2FUcTeysK0f7SMgSBnAX256coYQIgUmGl5t8jr3lIp8g2pkO61bhaSia6OXRONxF9ojzEsgUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw5V6tXMR3b7LxATyrcA4b3h3AlE4oeYtho7IPlUkZMczSiPZR8ydaxFHWn8grlCy71UFSUrHw2t9lsul7UsohzuwklRDcHLewqkStm6PPx%2BJV8QSxfwCvZzijV3CKUZkl%2BpUZuaWmV3W30XqtS%2FsfZztbCQQKqEDD%2BrCqq1m2xtSNEbNzBofIp%2BXPn1WYd%2Bn1Te2KtQgOpXoaZDsccDzFu6lLHzry56hJJuumTt61zmr7v7wgPTyoJUUFpC8H4ip1ANwDK6oFeHuTXWC%2BWmgPly%2FsjlCWS8Yl0g7fmHQeIyLsLdPQbBYsMpuQTHStrKFoy69ZwdXixum2Ql%2Ff2JgQ3eKu1BKwmKL2at68RabR3qeY5Z7IKfeLp0iQGVY9EgSz6Yak%2Bd8sq373MEUztzwPh7jF5w2mevHa%2BQ4MI1tosRE2Sf3BFPSG3C2SlUrYmiL7NkdxmHAY2tENKE3fJVAkr3SOAIu6YF3tLrPyCwuuwgZGP4cuB44GJWHUd5CMoJIN%2BItI0T0KsMYjlttjUQUgOMT%2BeaETC%2Bfvlgf5ej1Z6sTSMaU0sRR6Wlxll8u%2F6x1eXkz9IEwPfdQhtDBeQhStThr1D3gTWZ85lia3MmspOca521ahznjQgNxYpsNSwM%2FmIFAK4cWF3qkicMObI0MQGOqUB4BzcnRhQJF22l4qqgqfIuOTDH%2BdrUVpYId4aznjlMygOI%2B7ebJoD0acWEvSxSnYyOgsfknn6GB%2BF4%2B%2B3qfY6M1qjUbpjustPHOqXK2QRe9GVz1fKTIJ%2BZdECaLhNaQN1Vo97k6CGVHRbEHkxqgus%2FkbxERumgWBuc0G9j4Vjuaizkf3DUoJbBtwQrE%2FiSRV2veDiNXyVHu2bSc2m8uLhibWmJRYL&X-Amz-Signature=0a8b7ac08c94a9b8abb99eb97ba7ebded5505e28652bd0d661ca3bccf9ba9ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCEIG2IY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDnWBWCDvIBmhNfHMC2FUcTeysK0f7SMgSBnAX256coYQIgUmGl5t8jr3lIp8g2pkO61bhaSia6OXRONxF9ojzEsgUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw5V6tXMR3b7LxATyrcA4b3h3AlE4oeYtho7IPlUkZMczSiPZR8ydaxFHWn8grlCy71UFSUrHw2t9lsul7UsohzuwklRDcHLewqkStm6PPx%2BJV8QSxfwCvZzijV3CKUZkl%2BpUZuaWmV3W30XqtS%2FsfZztbCQQKqEDD%2BrCqq1m2xtSNEbNzBofIp%2BXPn1WYd%2Bn1Te2KtQgOpXoaZDsccDzFu6lLHzry56hJJuumTt61zmr7v7wgPTyoJUUFpC8H4ip1ANwDK6oFeHuTXWC%2BWmgPly%2FsjlCWS8Yl0g7fmHQeIyLsLdPQbBYsMpuQTHStrKFoy69ZwdXixum2Ql%2Ff2JgQ3eKu1BKwmKL2at68RabR3qeY5Z7IKfeLp0iQGVY9EgSz6Yak%2Bd8sq373MEUztzwPh7jF5w2mevHa%2BQ4MI1tosRE2Sf3BFPSG3C2SlUrYmiL7NkdxmHAY2tENKE3fJVAkr3SOAIu6YF3tLrPyCwuuwgZGP4cuB44GJWHUd5CMoJIN%2BItI0T0KsMYjlttjUQUgOMT%2BeaETC%2Bfvlgf5ej1Z6sTSMaU0sRR6Wlxll8u%2F6x1eXkz9IEwPfdQhtDBeQhStThr1D3gTWZ85lia3MmspOca521ahznjQgNxYpsNSwM%2FmIFAK4cWF3qkicMObI0MQGOqUB4BzcnRhQJF22l4qqgqfIuOTDH%2BdrUVpYId4aznjlMygOI%2B7ebJoD0acWEvSxSnYyOgsfknn6GB%2BF4%2B%2B3qfY6M1qjUbpjustPHOqXK2QRe9GVz1fKTIJ%2BZdECaLhNaQN1Vo97k6CGVHRbEHkxqgus%2FkbxERumgWBuc0G9j4Vjuaizkf3DUoJbBtwQrE%2FiSRV2veDiNXyVHu2bSc2m8uLhibWmJRYL&X-Amz-Signature=40b72fe3b9111188305c6db5ba6fcca39a29e17323e2cc40ea12e51e124be399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCEIG2IY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDnWBWCDvIBmhNfHMC2FUcTeysK0f7SMgSBnAX256coYQIgUmGl5t8jr3lIp8g2pkO61bhaSia6OXRONxF9ojzEsgUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw5V6tXMR3b7LxATyrcA4b3h3AlE4oeYtho7IPlUkZMczSiPZR8ydaxFHWn8grlCy71UFSUrHw2t9lsul7UsohzuwklRDcHLewqkStm6PPx%2BJV8QSxfwCvZzijV3CKUZkl%2BpUZuaWmV3W30XqtS%2FsfZztbCQQKqEDD%2BrCqq1m2xtSNEbNzBofIp%2BXPn1WYd%2Bn1Te2KtQgOpXoaZDsccDzFu6lLHzry56hJJuumTt61zmr7v7wgPTyoJUUFpC8H4ip1ANwDK6oFeHuTXWC%2BWmgPly%2FsjlCWS8Yl0g7fmHQeIyLsLdPQbBYsMpuQTHStrKFoy69ZwdXixum2Ql%2Ff2JgQ3eKu1BKwmKL2at68RabR3qeY5Z7IKfeLp0iQGVY9EgSz6Yak%2Bd8sq373MEUztzwPh7jF5w2mevHa%2BQ4MI1tosRE2Sf3BFPSG3C2SlUrYmiL7NkdxmHAY2tENKE3fJVAkr3SOAIu6YF3tLrPyCwuuwgZGP4cuB44GJWHUd5CMoJIN%2BItI0T0KsMYjlttjUQUgOMT%2BeaETC%2Bfvlgf5ej1Z6sTSMaU0sRR6Wlxll8u%2F6x1eXkz9IEwPfdQhtDBeQhStThr1D3gTWZ85lia3MmspOca521ahznjQgNxYpsNSwM%2FmIFAK4cWF3qkicMObI0MQGOqUB4BzcnRhQJF22l4qqgqfIuOTDH%2BdrUVpYId4aznjlMygOI%2B7ebJoD0acWEvSxSnYyOgsfknn6GB%2BF4%2B%2B3qfY6M1qjUbpjustPHOqXK2QRe9GVz1fKTIJ%2BZdECaLhNaQN1Vo97k6CGVHRbEHkxqgus%2FkbxERumgWBuc0G9j4Vjuaizkf3DUoJbBtwQrE%2FiSRV2veDiNXyVHu2bSc2m8uLhibWmJRYL&X-Amz-Signature=8eb558971b16c10a67d95dc43409729afdf65ce574a86a5da692721eb735115c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCEIG2IY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDnWBWCDvIBmhNfHMC2FUcTeysK0f7SMgSBnAX256coYQIgUmGl5t8jr3lIp8g2pkO61bhaSia6OXRONxF9ojzEsgUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw5V6tXMR3b7LxATyrcA4b3h3AlE4oeYtho7IPlUkZMczSiPZR8ydaxFHWn8grlCy71UFSUrHw2t9lsul7UsohzuwklRDcHLewqkStm6PPx%2BJV8QSxfwCvZzijV3CKUZkl%2BpUZuaWmV3W30XqtS%2FsfZztbCQQKqEDD%2BrCqq1m2xtSNEbNzBofIp%2BXPn1WYd%2Bn1Te2KtQgOpXoaZDsccDzFu6lLHzry56hJJuumTt61zmr7v7wgPTyoJUUFpC8H4ip1ANwDK6oFeHuTXWC%2BWmgPly%2FsjlCWS8Yl0g7fmHQeIyLsLdPQbBYsMpuQTHStrKFoy69ZwdXixum2Ql%2Ff2JgQ3eKu1BKwmKL2at68RabR3qeY5Z7IKfeLp0iQGVY9EgSz6Yak%2Bd8sq373MEUztzwPh7jF5w2mevHa%2BQ4MI1tosRE2Sf3BFPSG3C2SlUrYmiL7NkdxmHAY2tENKE3fJVAkr3SOAIu6YF3tLrPyCwuuwgZGP4cuB44GJWHUd5CMoJIN%2BItI0T0KsMYjlttjUQUgOMT%2BeaETC%2Bfvlgf5ej1Z6sTSMaU0sRR6Wlxll8u%2F6x1eXkz9IEwPfdQhtDBeQhStThr1D3gTWZ85lia3MmspOca521ahznjQgNxYpsNSwM%2FmIFAK4cWF3qkicMObI0MQGOqUB4BzcnRhQJF22l4qqgqfIuOTDH%2BdrUVpYId4aznjlMygOI%2B7ebJoD0acWEvSxSnYyOgsfknn6GB%2BF4%2B%2B3qfY6M1qjUbpjustPHOqXK2QRe9GVz1fKTIJ%2BZdECaLhNaQN1Vo97k6CGVHRbEHkxqgus%2FkbxERumgWBuc0G9j4Vjuaizkf3DUoJbBtwQrE%2FiSRV2veDiNXyVHu2bSc2m8uLhibWmJRYL&X-Amz-Signature=074631c2e05c72837a143cb8770c384752ebfaf81c152753552467c77cccfecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCEIG2IY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDnWBWCDvIBmhNfHMC2FUcTeysK0f7SMgSBnAX256coYQIgUmGl5t8jr3lIp8g2pkO61bhaSia6OXRONxF9ojzEsgUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw5V6tXMR3b7LxATyrcA4b3h3AlE4oeYtho7IPlUkZMczSiPZR8ydaxFHWn8grlCy71UFSUrHw2t9lsul7UsohzuwklRDcHLewqkStm6PPx%2BJV8QSxfwCvZzijV3CKUZkl%2BpUZuaWmV3W30XqtS%2FsfZztbCQQKqEDD%2BrCqq1m2xtSNEbNzBofIp%2BXPn1WYd%2Bn1Te2KtQgOpXoaZDsccDzFu6lLHzry56hJJuumTt61zmr7v7wgPTyoJUUFpC8H4ip1ANwDK6oFeHuTXWC%2BWmgPly%2FsjlCWS8Yl0g7fmHQeIyLsLdPQbBYsMpuQTHStrKFoy69ZwdXixum2Ql%2Ff2JgQ3eKu1BKwmKL2at68RabR3qeY5Z7IKfeLp0iQGVY9EgSz6Yak%2Bd8sq373MEUztzwPh7jF5w2mevHa%2BQ4MI1tosRE2Sf3BFPSG3C2SlUrYmiL7NkdxmHAY2tENKE3fJVAkr3SOAIu6YF3tLrPyCwuuwgZGP4cuB44GJWHUd5CMoJIN%2BItI0T0KsMYjlttjUQUgOMT%2BeaETC%2Bfvlgf5ej1Z6sTSMaU0sRR6Wlxll8u%2F6x1eXkz9IEwPfdQhtDBeQhStThr1D3gTWZ85lia3MmspOca521ahznjQgNxYpsNSwM%2FmIFAK4cWF3qkicMObI0MQGOqUB4BzcnRhQJF22l4qqgqfIuOTDH%2BdrUVpYId4aznjlMygOI%2B7ebJoD0acWEvSxSnYyOgsfknn6GB%2BF4%2B%2B3qfY6M1qjUbpjustPHOqXK2QRe9GVz1fKTIJ%2BZdECaLhNaQN1Vo97k6CGVHRbEHkxqgus%2FkbxERumgWBuc0G9j4Vjuaizkf3DUoJbBtwQrE%2FiSRV2veDiNXyVHu2bSc2m8uLhibWmJRYL&X-Amz-Signature=41a3237d55bee1842bd1b436c98160ebc32f324bb3a1d0452d20d6058a908f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCEIG2IY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDnWBWCDvIBmhNfHMC2FUcTeysK0f7SMgSBnAX256coYQIgUmGl5t8jr3lIp8g2pkO61bhaSia6OXRONxF9ojzEsgUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw5V6tXMR3b7LxATyrcA4b3h3AlE4oeYtho7IPlUkZMczSiPZR8ydaxFHWn8grlCy71UFSUrHw2t9lsul7UsohzuwklRDcHLewqkStm6PPx%2BJV8QSxfwCvZzijV3CKUZkl%2BpUZuaWmV3W30XqtS%2FsfZztbCQQKqEDD%2BrCqq1m2xtSNEbNzBofIp%2BXPn1WYd%2Bn1Te2KtQgOpXoaZDsccDzFu6lLHzry56hJJuumTt61zmr7v7wgPTyoJUUFpC8H4ip1ANwDK6oFeHuTXWC%2BWmgPly%2FsjlCWS8Yl0g7fmHQeIyLsLdPQbBYsMpuQTHStrKFoy69ZwdXixum2Ql%2Ff2JgQ3eKu1BKwmKL2at68RabR3qeY5Z7IKfeLp0iQGVY9EgSz6Yak%2Bd8sq373MEUztzwPh7jF5w2mevHa%2BQ4MI1tosRE2Sf3BFPSG3C2SlUrYmiL7NkdxmHAY2tENKE3fJVAkr3SOAIu6YF3tLrPyCwuuwgZGP4cuB44GJWHUd5CMoJIN%2BItI0T0KsMYjlttjUQUgOMT%2BeaETC%2Bfvlgf5ej1Z6sTSMaU0sRR6Wlxll8u%2F6x1eXkz9IEwPfdQhtDBeQhStThr1D3gTWZ85lia3MmspOca521ahznjQgNxYpsNSwM%2FmIFAK4cWF3qkicMObI0MQGOqUB4BzcnRhQJF22l4qqgqfIuOTDH%2BdrUVpYId4aznjlMygOI%2B7ebJoD0acWEvSxSnYyOgsfknn6GB%2BF4%2B%2B3qfY6M1qjUbpjustPHOqXK2QRe9GVz1fKTIJ%2BZdECaLhNaQN1Vo97k6CGVHRbEHkxqgus%2FkbxERumgWBuc0G9j4Vjuaizkf3DUoJbBtwQrE%2FiSRV2veDiNXyVHu2bSc2m8uLhibWmJRYL&X-Amz-Signature=21cf0126f1fe3d78659f0430a0a6db41ede12052bb17d9d6b9ce2ae2d5f5fc91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCEIG2IY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDnWBWCDvIBmhNfHMC2FUcTeysK0f7SMgSBnAX256coYQIgUmGl5t8jr3lIp8g2pkO61bhaSia6OXRONxF9ojzEsgUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw5V6tXMR3b7LxATyrcA4b3h3AlE4oeYtho7IPlUkZMczSiPZR8ydaxFHWn8grlCy71UFSUrHw2t9lsul7UsohzuwklRDcHLewqkStm6PPx%2BJV8QSxfwCvZzijV3CKUZkl%2BpUZuaWmV3W30XqtS%2FsfZztbCQQKqEDD%2BrCqq1m2xtSNEbNzBofIp%2BXPn1WYd%2Bn1Te2KtQgOpXoaZDsccDzFu6lLHzry56hJJuumTt61zmr7v7wgPTyoJUUFpC8H4ip1ANwDK6oFeHuTXWC%2BWmgPly%2FsjlCWS8Yl0g7fmHQeIyLsLdPQbBYsMpuQTHStrKFoy69ZwdXixum2Ql%2Ff2JgQ3eKu1BKwmKL2at68RabR3qeY5Z7IKfeLp0iQGVY9EgSz6Yak%2Bd8sq373MEUztzwPh7jF5w2mevHa%2BQ4MI1tosRE2Sf3BFPSG3C2SlUrYmiL7NkdxmHAY2tENKE3fJVAkr3SOAIu6YF3tLrPyCwuuwgZGP4cuB44GJWHUd5CMoJIN%2BItI0T0KsMYjlttjUQUgOMT%2BeaETC%2Bfvlgf5ej1Z6sTSMaU0sRR6Wlxll8u%2F6x1eXkz9IEwPfdQhtDBeQhStThr1D3gTWZ85lia3MmspOca521ahznjQgNxYpsNSwM%2FmIFAK4cWF3qkicMObI0MQGOqUB4BzcnRhQJF22l4qqgqfIuOTDH%2BdrUVpYId4aznjlMygOI%2B7ebJoD0acWEvSxSnYyOgsfknn6GB%2BF4%2B%2B3qfY6M1qjUbpjustPHOqXK2QRe9GVz1fKTIJ%2BZdECaLhNaQN1Vo97k6CGVHRbEHkxqgus%2FkbxERumgWBuc0G9j4Vjuaizkf3DUoJbBtwQrE%2FiSRV2veDiNXyVHu2bSc2m8uLhibWmJRYL&X-Amz-Signature=4413a08f45087782ae1ee37c1298be6f7ceac1746a8d5c28a5fe07d48f68e145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCEIG2IY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDnWBWCDvIBmhNfHMC2FUcTeysK0f7SMgSBnAX256coYQIgUmGl5t8jr3lIp8g2pkO61bhaSia6OXRONxF9ojzEsgUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw5V6tXMR3b7LxATyrcA4b3h3AlE4oeYtho7IPlUkZMczSiPZR8ydaxFHWn8grlCy71UFSUrHw2t9lsul7UsohzuwklRDcHLewqkStm6PPx%2BJV8QSxfwCvZzijV3CKUZkl%2BpUZuaWmV3W30XqtS%2FsfZztbCQQKqEDD%2BrCqq1m2xtSNEbNzBofIp%2BXPn1WYd%2Bn1Te2KtQgOpXoaZDsccDzFu6lLHzry56hJJuumTt61zmr7v7wgPTyoJUUFpC8H4ip1ANwDK6oFeHuTXWC%2BWmgPly%2FsjlCWS8Yl0g7fmHQeIyLsLdPQbBYsMpuQTHStrKFoy69ZwdXixum2Ql%2Ff2JgQ3eKu1BKwmKL2at68RabR3qeY5Z7IKfeLp0iQGVY9EgSz6Yak%2Bd8sq373MEUztzwPh7jF5w2mevHa%2BQ4MI1tosRE2Sf3BFPSG3C2SlUrYmiL7NkdxmHAY2tENKE3fJVAkr3SOAIu6YF3tLrPyCwuuwgZGP4cuB44GJWHUd5CMoJIN%2BItI0T0KsMYjlttjUQUgOMT%2BeaETC%2Bfvlgf5ej1Z6sTSMaU0sRR6Wlxll8u%2F6x1eXkz9IEwPfdQhtDBeQhStThr1D3gTWZ85lia3MmspOca521ahznjQgNxYpsNSwM%2FmIFAK4cWF3qkicMObI0MQGOqUB4BzcnRhQJF22l4qqgqfIuOTDH%2BdrUVpYId4aznjlMygOI%2B7ebJoD0acWEvSxSnYyOgsfknn6GB%2BF4%2B%2B3qfY6M1qjUbpjustPHOqXK2QRe9GVz1fKTIJ%2BZdECaLhNaQN1Vo97k6CGVHRbEHkxqgus%2FkbxERumgWBuc0G9j4Vjuaizkf3DUoJbBtwQrE%2FiSRV2veDiNXyVHu2bSc2m8uLhibWmJRYL&X-Amz-Signature=9aa907339f1f8560d390560abb0f8d9390261fe4237ca93db3a3ff2bcbc706e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCEIG2IY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDnWBWCDvIBmhNfHMC2FUcTeysK0f7SMgSBnAX256coYQIgUmGl5t8jr3lIp8g2pkO61bhaSia6OXRONxF9ojzEsgUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw5V6tXMR3b7LxATyrcA4b3h3AlE4oeYtho7IPlUkZMczSiPZR8ydaxFHWn8grlCy71UFSUrHw2t9lsul7UsohzuwklRDcHLewqkStm6PPx%2BJV8QSxfwCvZzijV3CKUZkl%2BpUZuaWmV3W30XqtS%2FsfZztbCQQKqEDD%2BrCqq1m2xtSNEbNzBofIp%2BXPn1WYd%2Bn1Te2KtQgOpXoaZDsccDzFu6lLHzry56hJJuumTt61zmr7v7wgPTyoJUUFpC8H4ip1ANwDK6oFeHuTXWC%2BWmgPly%2FsjlCWS8Yl0g7fmHQeIyLsLdPQbBYsMpuQTHStrKFoy69ZwdXixum2Ql%2Ff2JgQ3eKu1BKwmKL2at68RabR3qeY5Z7IKfeLp0iQGVY9EgSz6Yak%2Bd8sq373MEUztzwPh7jF5w2mevHa%2BQ4MI1tosRE2Sf3BFPSG3C2SlUrYmiL7NkdxmHAY2tENKE3fJVAkr3SOAIu6YF3tLrPyCwuuwgZGP4cuB44GJWHUd5CMoJIN%2BItI0T0KsMYjlttjUQUgOMT%2BeaETC%2Bfvlgf5ej1Z6sTSMaU0sRR6Wlxll8u%2F6x1eXkz9IEwPfdQhtDBeQhStThr1D3gTWZ85lia3MmspOca521ahznjQgNxYpsNSwM%2FmIFAK4cWF3qkicMObI0MQGOqUB4BzcnRhQJF22l4qqgqfIuOTDH%2BdrUVpYId4aznjlMygOI%2B7ebJoD0acWEvSxSnYyOgsfknn6GB%2BF4%2B%2B3qfY6M1qjUbpjustPHOqXK2QRe9GVz1fKTIJ%2BZdECaLhNaQN1Vo97k6CGVHRbEHkxqgus%2FkbxERumgWBuc0G9j4Vjuaizkf3DUoJbBtwQrE%2FiSRV2veDiNXyVHu2bSc2m8uLhibWmJRYL&X-Amz-Signature=678e75e04f60993e93a6129c5c251d22baecdb2e0134684c3d4a7ae61f3923a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCEIG2IY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDnWBWCDvIBmhNfHMC2FUcTeysK0f7SMgSBnAX256coYQIgUmGl5t8jr3lIp8g2pkO61bhaSia6OXRONxF9ojzEsgUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw5V6tXMR3b7LxATyrcA4b3h3AlE4oeYtho7IPlUkZMczSiPZR8ydaxFHWn8grlCy71UFSUrHw2t9lsul7UsohzuwklRDcHLewqkStm6PPx%2BJV8QSxfwCvZzijV3CKUZkl%2BpUZuaWmV3W30XqtS%2FsfZztbCQQKqEDD%2BrCqq1m2xtSNEbNzBofIp%2BXPn1WYd%2Bn1Te2KtQgOpXoaZDsccDzFu6lLHzry56hJJuumTt61zmr7v7wgPTyoJUUFpC8H4ip1ANwDK6oFeHuTXWC%2BWmgPly%2FsjlCWS8Yl0g7fmHQeIyLsLdPQbBYsMpuQTHStrKFoy69ZwdXixum2Ql%2Ff2JgQ3eKu1BKwmKL2at68RabR3qeY5Z7IKfeLp0iQGVY9EgSz6Yak%2Bd8sq373MEUztzwPh7jF5w2mevHa%2BQ4MI1tosRE2Sf3BFPSG3C2SlUrYmiL7NkdxmHAY2tENKE3fJVAkr3SOAIu6YF3tLrPyCwuuwgZGP4cuB44GJWHUd5CMoJIN%2BItI0T0KsMYjlttjUQUgOMT%2BeaETC%2Bfvlgf5ej1Z6sTSMaU0sRR6Wlxll8u%2F6x1eXkz9IEwPfdQhtDBeQhStThr1D3gTWZ85lia3MmspOca521ahznjQgNxYpsNSwM%2FmIFAK4cWF3qkicMObI0MQGOqUB4BzcnRhQJF22l4qqgqfIuOTDH%2BdrUVpYId4aznjlMygOI%2B7ebJoD0acWEvSxSnYyOgsfknn6GB%2BF4%2B%2B3qfY6M1qjUbpjustPHOqXK2QRe9GVz1fKTIJ%2BZdECaLhNaQN1Vo97k6CGVHRbEHkxqgus%2FkbxERumgWBuc0G9j4Vjuaizkf3DUoJbBtwQrE%2FiSRV2veDiNXyVHu2bSc2m8uLhibWmJRYL&X-Amz-Signature=6799cd1ad8488debb2b0e0712e6c472117fb066d1624fb71487c018b77978097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
