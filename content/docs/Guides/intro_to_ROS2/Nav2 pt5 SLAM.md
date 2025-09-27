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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG4GVLDB%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDK496thnM19BgCdwJhuCrK1IAw%2BzMBiSoOrKo4zcXOuwIgL3eK0QWL21zPHc7PAJZMf8RV5wE77ySNnfP1hwxzwCQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRe7mcksfqdFkSG3ircAzd%2Fp9%2BZbNJtHn7F6e%2FGN4z8ca9RkXGolkWmFcqcKJnVLN0cMkdewZX4ADdfWWC3cIAGUmw91syq%2B1tOvZc5CZQ4jS%2BjFnbbNmB1XlG1%2BI1ZKizZJkgd32JXVAQreh8WGnQyixTItPC9sMzqdfa4EyB9cybEy%2B4GArMrCzdEXYzW9CHWOu%2Bm%2Bacz38zvlaMUe4QgyJjozP%2BzA%2FZL9z7JwWf4AEJF9o49DxVwjA8XJIjV5dOOf%2FFH6C1ZnNfFTvV%2FUuOtw3ypf%2BMZerIi%2Ft4S6indMQtAesaK%2BhB1ClQtgGZKx%2BC2dJlq9xDPrc8UCHUeOhnXaJ%2BxkwjHCpAubmjwE4zkRq29wKJkzRi6AcWYwmmtXaFTbGpHFvyeZUPCJ%2BRhaBYmcFpdH%2FyNkdh4jgQ96uerZFtKU79SW8y4kkfGKadH7ansf4FdRl7DGjGC2owUj29Q4HGWsuBwRWYpkf50K3ihMC8%2BZ%2FhJiQ94z1qeIahkMfMi6doT1VTDc43zCiEUK7F%2BRWY0sU7uek7WxaJwpwLF4YfVYEZ1%2BNaN2dAsL9DCvyzlM%2FcXr6eWu8CT%2F5zWISO4%2BlJGuH3T6Bnam6VNi8i5pb%2BMl9ERAnrZ4i8XWq74hqsRaXUtR0FofiViMIPo3MYGOqUBqCoPllM%2BuTOsx%2BLjIxmC3Mmd7it0Sy17L3%2FNjJ8Y1CEVlylqzuZwr1UYkJNk19f6ccyxuzjU7152t70FjxjrlGOx6fR8sQjQDE8wGXtCuHvu1cnc1VLW5%2FHkiF9gHmoVpct6HDmg698mIj%2B8Kz4ZcqIxlzDLGkoHw4Mmqa%2BhNmE%2BQYtVNNpz4oVJ3wgliwQQbNAbNzTuRjXWfxV%2B%2BLu3alkxn5w3&X-Amz-Signature=aaa5a4f3ff2bcf8e33f1565b45305a1c47c103678fe76ff2da88beab37aeef68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG4GVLDB%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDK496thnM19BgCdwJhuCrK1IAw%2BzMBiSoOrKo4zcXOuwIgL3eK0QWL21zPHc7PAJZMf8RV5wE77ySNnfP1hwxzwCQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRe7mcksfqdFkSG3ircAzd%2Fp9%2BZbNJtHn7F6e%2FGN4z8ca9RkXGolkWmFcqcKJnVLN0cMkdewZX4ADdfWWC3cIAGUmw91syq%2B1tOvZc5CZQ4jS%2BjFnbbNmB1XlG1%2BI1ZKizZJkgd32JXVAQreh8WGnQyixTItPC9sMzqdfa4EyB9cybEy%2B4GArMrCzdEXYzW9CHWOu%2Bm%2Bacz38zvlaMUe4QgyJjozP%2BzA%2FZL9z7JwWf4AEJF9o49DxVwjA8XJIjV5dOOf%2FFH6C1ZnNfFTvV%2FUuOtw3ypf%2BMZerIi%2Ft4S6indMQtAesaK%2BhB1ClQtgGZKx%2BC2dJlq9xDPrc8UCHUeOhnXaJ%2BxkwjHCpAubmjwE4zkRq29wKJkzRi6AcWYwmmtXaFTbGpHFvyeZUPCJ%2BRhaBYmcFpdH%2FyNkdh4jgQ96uerZFtKU79SW8y4kkfGKadH7ansf4FdRl7DGjGC2owUj29Q4HGWsuBwRWYpkf50K3ihMC8%2BZ%2FhJiQ94z1qeIahkMfMi6doT1VTDc43zCiEUK7F%2BRWY0sU7uek7WxaJwpwLF4YfVYEZ1%2BNaN2dAsL9DCvyzlM%2FcXr6eWu8CT%2F5zWISO4%2BlJGuH3T6Bnam6VNi8i5pb%2BMl9ERAnrZ4i8XWq74hqsRaXUtR0FofiViMIPo3MYGOqUBqCoPllM%2BuTOsx%2BLjIxmC3Mmd7it0Sy17L3%2FNjJ8Y1CEVlylqzuZwr1UYkJNk19f6ccyxuzjU7152t70FjxjrlGOx6fR8sQjQDE8wGXtCuHvu1cnc1VLW5%2FHkiF9gHmoVpct6HDmg698mIj%2B8Kz4ZcqIxlzDLGkoHw4Mmqa%2BhNmE%2BQYtVNNpz4oVJ3wgliwQQbNAbNzTuRjXWfxV%2B%2BLu3alkxn5w3&X-Amz-Signature=b6a874f322aa3366c32f0240fd2a04543df29db8162cd46dd49311f972d7f16e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG4GVLDB%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDK496thnM19BgCdwJhuCrK1IAw%2BzMBiSoOrKo4zcXOuwIgL3eK0QWL21zPHc7PAJZMf8RV5wE77ySNnfP1hwxzwCQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRe7mcksfqdFkSG3ircAzd%2Fp9%2BZbNJtHn7F6e%2FGN4z8ca9RkXGolkWmFcqcKJnVLN0cMkdewZX4ADdfWWC3cIAGUmw91syq%2B1tOvZc5CZQ4jS%2BjFnbbNmB1XlG1%2BI1ZKizZJkgd32JXVAQreh8WGnQyixTItPC9sMzqdfa4EyB9cybEy%2B4GArMrCzdEXYzW9CHWOu%2Bm%2Bacz38zvlaMUe4QgyJjozP%2BzA%2FZL9z7JwWf4AEJF9o49DxVwjA8XJIjV5dOOf%2FFH6C1ZnNfFTvV%2FUuOtw3ypf%2BMZerIi%2Ft4S6indMQtAesaK%2BhB1ClQtgGZKx%2BC2dJlq9xDPrc8UCHUeOhnXaJ%2BxkwjHCpAubmjwE4zkRq29wKJkzRi6AcWYwmmtXaFTbGpHFvyeZUPCJ%2BRhaBYmcFpdH%2FyNkdh4jgQ96uerZFtKU79SW8y4kkfGKadH7ansf4FdRl7DGjGC2owUj29Q4HGWsuBwRWYpkf50K3ihMC8%2BZ%2FhJiQ94z1qeIahkMfMi6doT1VTDc43zCiEUK7F%2BRWY0sU7uek7WxaJwpwLF4YfVYEZ1%2BNaN2dAsL9DCvyzlM%2FcXr6eWu8CT%2F5zWISO4%2BlJGuH3T6Bnam6VNi8i5pb%2BMl9ERAnrZ4i8XWq74hqsRaXUtR0FofiViMIPo3MYGOqUBqCoPllM%2BuTOsx%2BLjIxmC3Mmd7it0Sy17L3%2FNjJ8Y1CEVlylqzuZwr1UYkJNk19f6ccyxuzjU7152t70FjxjrlGOx6fR8sQjQDE8wGXtCuHvu1cnc1VLW5%2FHkiF9gHmoVpct6HDmg698mIj%2B8Kz4ZcqIxlzDLGkoHw4Mmqa%2BhNmE%2BQYtVNNpz4oVJ3wgliwQQbNAbNzTuRjXWfxV%2B%2BLu3alkxn5w3&X-Amz-Signature=aca19d8c6564909d997f2bd56baa4324e9d4184b8d5d4e778f59596460bf73f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG4GVLDB%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDK496thnM19BgCdwJhuCrK1IAw%2BzMBiSoOrKo4zcXOuwIgL3eK0QWL21zPHc7PAJZMf8RV5wE77ySNnfP1hwxzwCQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRe7mcksfqdFkSG3ircAzd%2Fp9%2BZbNJtHn7F6e%2FGN4z8ca9RkXGolkWmFcqcKJnVLN0cMkdewZX4ADdfWWC3cIAGUmw91syq%2B1tOvZc5CZQ4jS%2BjFnbbNmB1XlG1%2BI1ZKizZJkgd32JXVAQreh8WGnQyixTItPC9sMzqdfa4EyB9cybEy%2B4GArMrCzdEXYzW9CHWOu%2Bm%2Bacz38zvlaMUe4QgyJjozP%2BzA%2FZL9z7JwWf4AEJF9o49DxVwjA8XJIjV5dOOf%2FFH6C1ZnNfFTvV%2FUuOtw3ypf%2BMZerIi%2Ft4S6indMQtAesaK%2BhB1ClQtgGZKx%2BC2dJlq9xDPrc8UCHUeOhnXaJ%2BxkwjHCpAubmjwE4zkRq29wKJkzRi6AcWYwmmtXaFTbGpHFvyeZUPCJ%2BRhaBYmcFpdH%2FyNkdh4jgQ96uerZFtKU79SW8y4kkfGKadH7ansf4FdRl7DGjGC2owUj29Q4HGWsuBwRWYpkf50K3ihMC8%2BZ%2FhJiQ94z1qeIahkMfMi6doT1VTDc43zCiEUK7F%2BRWY0sU7uek7WxaJwpwLF4YfVYEZ1%2BNaN2dAsL9DCvyzlM%2FcXr6eWu8CT%2F5zWISO4%2BlJGuH3T6Bnam6VNi8i5pb%2BMl9ERAnrZ4i8XWq74hqsRaXUtR0FofiViMIPo3MYGOqUBqCoPllM%2BuTOsx%2BLjIxmC3Mmd7it0Sy17L3%2FNjJ8Y1CEVlylqzuZwr1UYkJNk19f6ccyxuzjU7152t70FjxjrlGOx6fR8sQjQDE8wGXtCuHvu1cnc1VLW5%2FHkiF9gHmoVpct6HDmg698mIj%2B8Kz4ZcqIxlzDLGkoHw4Mmqa%2BhNmE%2BQYtVNNpz4oVJ3wgliwQQbNAbNzTuRjXWfxV%2B%2BLu3alkxn5w3&X-Amz-Signature=6281051eea7280d8585edd444e0e9c514dc6cc99e4e93f80052673e60957fe79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG4GVLDB%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDK496thnM19BgCdwJhuCrK1IAw%2BzMBiSoOrKo4zcXOuwIgL3eK0QWL21zPHc7PAJZMf8RV5wE77ySNnfP1hwxzwCQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRe7mcksfqdFkSG3ircAzd%2Fp9%2BZbNJtHn7F6e%2FGN4z8ca9RkXGolkWmFcqcKJnVLN0cMkdewZX4ADdfWWC3cIAGUmw91syq%2B1tOvZc5CZQ4jS%2BjFnbbNmB1XlG1%2BI1ZKizZJkgd32JXVAQreh8WGnQyixTItPC9sMzqdfa4EyB9cybEy%2B4GArMrCzdEXYzW9CHWOu%2Bm%2Bacz38zvlaMUe4QgyJjozP%2BzA%2FZL9z7JwWf4AEJF9o49DxVwjA8XJIjV5dOOf%2FFH6C1ZnNfFTvV%2FUuOtw3ypf%2BMZerIi%2Ft4S6indMQtAesaK%2BhB1ClQtgGZKx%2BC2dJlq9xDPrc8UCHUeOhnXaJ%2BxkwjHCpAubmjwE4zkRq29wKJkzRi6AcWYwmmtXaFTbGpHFvyeZUPCJ%2BRhaBYmcFpdH%2FyNkdh4jgQ96uerZFtKU79SW8y4kkfGKadH7ansf4FdRl7DGjGC2owUj29Q4HGWsuBwRWYpkf50K3ihMC8%2BZ%2FhJiQ94z1qeIahkMfMi6doT1VTDc43zCiEUK7F%2BRWY0sU7uek7WxaJwpwLF4YfVYEZ1%2BNaN2dAsL9DCvyzlM%2FcXr6eWu8CT%2F5zWISO4%2BlJGuH3T6Bnam6VNi8i5pb%2BMl9ERAnrZ4i8XWq74hqsRaXUtR0FofiViMIPo3MYGOqUBqCoPllM%2BuTOsx%2BLjIxmC3Mmd7it0Sy17L3%2FNjJ8Y1CEVlylqzuZwr1UYkJNk19f6ccyxuzjU7152t70FjxjrlGOx6fR8sQjQDE8wGXtCuHvu1cnc1VLW5%2FHkiF9gHmoVpct6HDmg698mIj%2B8Kz4ZcqIxlzDLGkoHw4Mmqa%2BhNmE%2BQYtVNNpz4oVJ3wgliwQQbNAbNzTuRjXWfxV%2B%2BLu3alkxn5w3&X-Amz-Signature=49bcc2d5c0e7dfd52c15afb7995b0c7c53851834f92d493f0c2cddd58dc28cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG4GVLDB%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDK496thnM19BgCdwJhuCrK1IAw%2BzMBiSoOrKo4zcXOuwIgL3eK0QWL21zPHc7PAJZMf8RV5wE77ySNnfP1hwxzwCQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRe7mcksfqdFkSG3ircAzd%2Fp9%2BZbNJtHn7F6e%2FGN4z8ca9RkXGolkWmFcqcKJnVLN0cMkdewZX4ADdfWWC3cIAGUmw91syq%2B1tOvZc5CZQ4jS%2BjFnbbNmB1XlG1%2BI1ZKizZJkgd32JXVAQreh8WGnQyixTItPC9sMzqdfa4EyB9cybEy%2B4GArMrCzdEXYzW9CHWOu%2Bm%2Bacz38zvlaMUe4QgyJjozP%2BzA%2FZL9z7JwWf4AEJF9o49DxVwjA8XJIjV5dOOf%2FFH6C1ZnNfFTvV%2FUuOtw3ypf%2BMZerIi%2Ft4S6indMQtAesaK%2BhB1ClQtgGZKx%2BC2dJlq9xDPrc8UCHUeOhnXaJ%2BxkwjHCpAubmjwE4zkRq29wKJkzRi6AcWYwmmtXaFTbGpHFvyeZUPCJ%2BRhaBYmcFpdH%2FyNkdh4jgQ96uerZFtKU79SW8y4kkfGKadH7ansf4FdRl7DGjGC2owUj29Q4HGWsuBwRWYpkf50K3ihMC8%2BZ%2FhJiQ94z1qeIahkMfMi6doT1VTDc43zCiEUK7F%2BRWY0sU7uek7WxaJwpwLF4YfVYEZ1%2BNaN2dAsL9DCvyzlM%2FcXr6eWu8CT%2F5zWISO4%2BlJGuH3T6Bnam6VNi8i5pb%2BMl9ERAnrZ4i8XWq74hqsRaXUtR0FofiViMIPo3MYGOqUBqCoPllM%2BuTOsx%2BLjIxmC3Mmd7it0Sy17L3%2FNjJ8Y1CEVlylqzuZwr1UYkJNk19f6ccyxuzjU7152t70FjxjrlGOx6fR8sQjQDE8wGXtCuHvu1cnc1VLW5%2FHkiF9gHmoVpct6HDmg698mIj%2B8Kz4ZcqIxlzDLGkoHw4Mmqa%2BhNmE%2BQYtVNNpz4oVJ3wgliwQQbNAbNzTuRjXWfxV%2B%2BLu3alkxn5w3&X-Amz-Signature=e3da6a361c3fea39610529a02cd404e77c5400716d7c9836ffe40e71d118d3db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG4GVLDB%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDK496thnM19BgCdwJhuCrK1IAw%2BzMBiSoOrKo4zcXOuwIgL3eK0QWL21zPHc7PAJZMf8RV5wE77ySNnfP1hwxzwCQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRe7mcksfqdFkSG3ircAzd%2Fp9%2BZbNJtHn7F6e%2FGN4z8ca9RkXGolkWmFcqcKJnVLN0cMkdewZX4ADdfWWC3cIAGUmw91syq%2B1tOvZc5CZQ4jS%2BjFnbbNmB1XlG1%2BI1ZKizZJkgd32JXVAQreh8WGnQyixTItPC9sMzqdfa4EyB9cybEy%2B4GArMrCzdEXYzW9CHWOu%2Bm%2Bacz38zvlaMUe4QgyJjozP%2BzA%2FZL9z7JwWf4AEJF9o49DxVwjA8XJIjV5dOOf%2FFH6C1ZnNfFTvV%2FUuOtw3ypf%2BMZerIi%2Ft4S6indMQtAesaK%2BhB1ClQtgGZKx%2BC2dJlq9xDPrc8UCHUeOhnXaJ%2BxkwjHCpAubmjwE4zkRq29wKJkzRi6AcWYwmmtXaFTbGpHFvyeZUPCJ%2BRhaBYmcFpdH%2FyNkdh4jgQ96uerZFtKU79SW8y4kkfGKadH7ansf4FdRl7DGjGC2owUj29Q4HGWsuBwRWYpkf50K3ihMC8%2BZ%2FhJiQ94z1qeIahkMfMi6doT1VTDc43zCiEUK7F%2BRWY0sU7uek7WxaJwpwLF4YfVYEZ1%2BNaN2dAsL9DCvyzlM%2FcXr6eWu8CT%2F5zWISO4%2BlJGuH3T6Bnam6VNi8i5pb%2BMl9ERAnrZ4i8XWq74hqsRaXUtR0FofiViMIPo3MYGOqUBqCoPllM%2BuTOsx%2BLjIxmC3Mmd7it0Sy17L3%2FNjJ8Y1CEVlylqzuZwr1UYkJNk19f6ccyxuzjU7152t70FjxjrlGOx6fR8sQjQDE8wGXtCuHvu1cnc1VLW5%2FHkiF9gHmoVpct6HDmg698mIj%2B8Kz4ZcqIxlzDLGkoHw4Mmqa%2BhNmE%2BQYtVNNpz4oVJ3wgliwQQbNAbNzTuRjXWfxV%2B%2BLu3alkxn5w3&X-Amz-Signature=bac12bbeadcc2ebcd501b6b7ac8460b4569675e9f1092ccb0da96ead569a4b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG4GVLDB%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDK496thnM19BgCdwJhuCrK1IAw%2BzMBiSoOrKo4zcXOuwIgL3eK0QWL21zPHc7PAJZMf8RV5wE77ySNnfP1hwxzwCQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRe7mcksfqdFkSG3ircAzd%2Fp9%2BZbNJtHn7F6e%2FGN4z8ca9RkXGolkWmFcqcKJnVLN0cMkdewZX4ADdfWWC3cIAGUmw91syq%2B1tOvZc5CZQ4jS%2BjFnbbNmB1XlG1%2BI1ZKizZJkgd32JXVAQreh8WGnQyixTItPC9sMzqdfa4EyB9cybEy%2B4GArMrCzdEXYzW9CHWOu%2Bm%2Bacz38zvlaMUe4QgyJjozP%2BzA%2FZL9z7JwWf4AEJF9o49DxVwjA8XJIjV5dOOf%2FFH6C1ZnNfFTvV%2FUuOtw3ypf%2BMZerIi%2Ft4S6indMQtAesaK%2BhB1ClQtgGZKx%2BC2dJlq9xDPrc8UCHUeOhnXaJ%2BxkwjHCpAubmjwE4zkRq29wKJkzRi6AcWYwmmtXaFTbGpHFvyeZUPCJ%2BRhaBYmcFpdH%2FyNkdh4jgQ96uerZFtKU79SW8y4kkfGKadH7ansf4FdRl7DGjGC2owUj29Q4HGWsuBwRWYpkf50K3ihMC8%2BZ%2FhJiQ94z1qeIahkMfMi6doT1VTDc43zCiEUK7F%2BRWY0sU7uek7WxaJwpwLF4YfVYEZ1%2BNaN2dAsL9DCvyzlM%2FcXr6eWu8CT%2F5zWISO4%2BlJGuH3T6Bnam6VNi8i5pb%2BMl9ERAnrZ4i8XWq74hqsRaXUtR0FofiViMIPo3MYGOqUBqCoPllM%2BuTOsx%2BLjIxmC3Mmd7it0Sy17L3%2FNjJ8Y1CEVlylqzuZwr1UYkJNk19f6ccyxuzjU7152t70FjxjrlGOx6fR8sQjQDE8wGXtCuHvu1cnc1VLW5%2FHkiF9gHmoVpct6HDmg698mIj%2B8Kz4ZcqIxlzDLGkoHw4Mmqa%2BhNmE%2BQYtVNNpz4oVJ3wgliwQQbNAbNzTuRjXWfxV%2B%2BLu3alkxn5w3&X-Amz-Signature=85123649378b4c7c99b90bd6bd44bc7a067a8b9e8cc147a14eaa85fedb23b548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG4GVLDB%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDK496thnM19BgCdwJhuCrK1IAw%2BzMBiSoOrKo4zcXOuwIgL3eK0QWL21zPHc7PAJZMf8RV5wE77ySNnfP1hwxzwCQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRe7mcksfqdFkSG3ircAzd%2Fp9%2BZbNJtHn7F6e%2FGN4z8ca9RkXGolkWmFcqcKJnVLN0cMkdewZX4ADdfWWC3cIAGUmw91syq%2B1tOvZc5CZQ4jS%2BjFnbbNmB1XlG1%2BI1ZKizZJkgd32JXVAQreh8WGnQyixTItPC9sMzqdfa4EyB9cybEy%2B4GArMrCzdEXYzW9CHWOu%2Bm%2Bacz38zvlaMUe4QgyJjozP%2BzA%2FZL9z7JwWf4AEJF9o49DxVwjA8XJIjV5dOOf%2FFH6C1ZnNfFTvV%2FUuOtw3ypf%2BMZerIi%2Ft4S6indMQtAesaK%2BhB1ClQtgGZKx%2BC2dJlq9xDPrc8UCHUeOhnXaJ%2BxkwjHCpAubmjwE4zkRq29wKJkzRi6AcWYwmmtXaFTbGpHFvyeZUPCJ%2BRhaBYmcFpdH%2FyNkdh4jgQ96uerZFtKU79SW8y4kkfGKadH7ansf4FdRl7DGjGC2owUj29Q4HGWsuBwRWYpkf50K3ihMC8%2BZ%2FhJiQ94z1qeIahkMfMi6doT1VTDc43zCiEUK7F%2BRWY0sU7uek7WxaJwpwLF4YfVYEZ1%2BNaN2dAsL9DCvyzlM%2FcXr6eWu8CT%2F5zWISO4%2BlJGuH3T6Bnam6VNi8i5pb%2BMl9ERAnrZ4i8XWq74hqsRaXUtR0FofiViMIPo3MYGOqUBqCoPllM%2BuTOsx%2BLjIxmC3Mmd7it0Sy17L3%2FNjJ8Y1CEVlylqzuZwr1UYkJNk19f6ccyxuzjU7152t70FjxjrlGOx6fR8sQjQDE8wGXtCuHvu1cnc1VLW5%2FHkiF9gHmoVpct6HDmg698mIj%2B8Kz4ZcqIxlzDLGkoHw4Mmqa%2BhNmE%2BQYtVNNpz4oVJ3wgliwQQbNAbNzTuRjXWfxV%2B%2BLu3alkxn5w3&X-Amz-Signature=d9eba03e62417af8e1290f5c03cae2da8705cea15d9d54099f7a045bf07940f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG4GVLDB%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDK496thnM19BgCdwJhuCrK1IAw%2BzMBiSoOrKo4zcXOuwIgL3eK0QWL21zPHc7PAJZMf8RV5wE77ySNnfP1hwxzwCQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRe7mcksfqdFkSG3ircAzd%2Fp9%2BZbNJtHn7F6e%2FGN4z8ca9RkXGolkWmFcqcKJnVLN0cMkdewZX4ADdfWWC3cIAGUmw91syq%2B1tOvZc5CZQ4jS%2BjFnbbNmB1XlG1%2BI1ZKizZJkgd32JXVAQreh8WGnQyixTItPC9sMzqdfa4EyB9cybEy%2B4GArMrCzdEXYzW9CHWOu%2Bm%2Bacz38zvlaMUe4QgyJjozP%2BzA%2FZL9z7JwWf4AEJF9o49DxVwjA8XJIjV5dOOf%2FFH6C1ZnNfFTvV%2FUuOtw3ypf%2BMZerIi%2Ft4S6indMQtAesaK%2BhB1ClQtgGZKx%2BC2dJlq9xDPrc8UCHUeOhnXaJ%2BxkwjHCpAubmjwE4zkRq29wKJkzRi6AcWYwmmtXaFTbGpHFvyeZUPCJ%2BRhaBYmcFpdH%2FyNkdh4jgQ96uerZFtKU79SW8y4kkfGKadH7ansf4FdRl7DGjGC2owUj29Q4HGWsuBwRWYpkf50K3ihMC8%2BZ%2FhJiQ94z1qeIahkMfMi6doT1VTDc43zCiEUK7F%2BRWY0sU7uek7WxaJwpwLF4YfVYEZ1%2BNaN2dAsL9DCvyzlM%2FcXr6eWu8CT%2F5zWISO4%2BlJGuH3T6Bnam6VNi8i5pb%2BMl9ERAnrZ4i8XWq74hqsRaXUtR0FofiViMIPo3MYGOqUBqCoPllM%2BuTOsx%2BLjIxmC3Mmd7it0Sy17L3%2FNjJ8Y1CEVlylqzuZwr1UYkJNk19f6ccyxuzjU7152t70FjxjrlGOx6fR8sQjQDE8wGXtCuHvu1cnc1VLW5%2FHkiF9gHmoVpct6HDmg698mIj%2B8Kz4ZcqIxlzDLGkoHw4Mmqa%2BhNmE%2BQYtVNNpz4oVJ3wgliwQQbNAbNzTuRjXWfxV%2B%2BLu3alkxn5w3&X-Amz-Signature=7648a9b8e35ee0a7b5adb5c3e9eb55448742f4ae7864fb5c71fac62b681e082e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG4GVLDB%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDK496thnM19BgCdwJhuCrK1IAw%2BzMBiSoOrKo4zcXOuwIgL3eK0QWL21zPHc7PAJZMf8RV5wE77ySNnfP1hwxzwCQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRe7mcksfqdFkSG3ircAzd%2Fp9%2BZbNJtHn7F6e%2FGN4z8ca9RkXGolkWmFcqcKJnVLN0cMkdewZX4ADdfWWC3cIAGUmw91syq%2B1tOvZc5CZQ4jS%2BjFnbbNmB1XlG1%2BI1ZKizZJkgd32JXVAQreh8WGnQyixTItPC9sMzqdfa4EyB9cybEy%2B4GArMrCzdEXYzW9CHWOu%2Bm%2Bacz38zvlaMUe4QgyJjozP%2BzA%2FZL9z7JwWf4AEJF9o49DxVwjA8XJIjV5dOOf%2FFH6C1ZnNfFTvV%2FUuOtw3ypf%2BMZerIi%2Ft4S6indMQtAesaK%2BhB1ClQtgGZKx%2BC2dJlq9xDPrc8UCHUeOhnXaJ%2BxkwjHCpAubmjwE4zkRq29wKJkzRi6AcWYwmmtXaFTbGpHFvyeZUPCJ%2BRhaBYmcFpdH%2FyNkdh4jgQ96uerZFtKU79SW8y4kkfGKadH7ansf4FdRl7DGjGC2owUj29Q4HGWsuBwRWYpkf50K3ihMC8%2BZ%2FhJiQ94z1qeIahkMfMi6doT1VTDc43zCiEUK7F%2BRWY0sU7uek7WxaJwpwLF4YfVYEZ1%2BNaN2dAsL9DCvyzlM%2FcXr6eWu8CT%2F5zWISO4%2BlJGuH3T6Bnam6VNi8i5pb%2BMl9ERAnrZ4i8XWq74hqsRaXUtR0FofiViMIPo3MYGOqUBqCoPllM%2BuTOsx%2BLjIxmC3Mmd7it0Sy17L3%2FNjJ8Y1CEVlylqzuZwr1UYkJNk19f6ccyxuzjU7152t70FjxjrlGOx6fR8sQjQDE8wGXtCuHvu1cnc1VLW5%2FHkiF9gHmoVpct6HDmg698mIj%2B8Kz4ZcqIxlzDLGkoHw4Mmqa%2BhNmE%2BQYtVNNpz4oVJ3wgliwQQbNAbNzTuRjXWfxV%2B%2BLu3alkxn5w3&X-Amz-Signature=f5b79f72ef1cf2b5d6563d6197ddeeaa0b57c876dff565a7e50b868dfbd8a4d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG4GVLDB%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDK496thnM19BgCdwJhuCrK1IAw%2BzMBiSoOrKo4zcXOuwIgL3eK0QWL21zPHc7PAJZMf8RV5wE77ySNnfP1hwxzwCQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRe7mcksfqdFkSG3ircAzd%2Fp9%2BZbNJtHn7F6e%2FGN4z8ca9RkXGolkWmFcqcKJnVLN0cMkdewZX4ADdfWWC3cIAGUmw91syq%2B1tOvZc5CZQ4jS%2BjFnbbNmB1XlG1%2BI1ZKizZJkgd32JXVAQreh8WGnQyixTItPC9sMzqdfa4EyB9cybEy%2B4GArMrCzdEXYzW9CHWOu%2Bm%2Bacz38zvlaMUe4QgyJjozP%2BzA%2FZL9z7JwWf4AEJF9o49DxVwjA8XJIjV5dOOf%2FFH6C1ZnNfFTvV%2FUuOtw3ypf%2BMZerIi%2Ft4S6indMQtAesaK%2BhB1ClQtgGZKx%2BC2dJlq9xDPrc8UCHUeOhnXaJ%2BxkwjHCpAubmjwE4zkRq29wKJkzRi6AcWYwmmtXaFTbGpHFvyeZUPCJ%2BRhaBYmcFpdH%2FyNkdh4jgQ96uerZFtKU79SW8y4kkfGKadH7ansf4FdRl7DGjGC2owUj29Q4HGWsuBwRWYpkf50K3ihMC8%2BZ%2FhJiQ94z1qeIahkMfMi6doT1VTDc43zCiEUK7F%2BRWY0sU7uek7WxaJwpwLF4YfVYEZ1%2BNaN2dAsL9DCvyzlM%2FcXr6eWu8CT%2F5zWISO4%2BlJGuH3T6Bnam6VNi8i5pb%2BMl9ERAnrZ4i8XWq74hqsRaXUtR0FofiViMIPo3MYGOqUBqCoPllM%2BuTOsx%2BLjIxmC3Mmd7it0Sy17L3%2FNjJ8Y1CEVlylqzuZwr1UYkJNk19f6ccyxuzjU7152t70FjxjrlGOx6fR8sQjQDE8wGXtCuHvu1cnc1VLW5%2FHkiF9gHmoVpct6HDmg698mIj%2B8Kz4ZcqIxlzDLGkoHw4Mmqa%2BhNmE%2BQYtVNNpz4oVJ3wgliwQQbNAbNzTuRjXWfxV%2B%2BLu3alkxn5w3&X-Amz-Signature=536afc0b5b0c334421142c4e0b54746ddc1cd380ac86cbe76d67366ef0d031be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG4GVLDB%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDK496thnM19BgCdwJhuCrK1IAw%2BzMBiSoOrKo4zcXOuwIgL3eK0QWL21zPHc7PAJZMf8RV5wE77ySNnfP1hwxzwCQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRe7mcksfqdFkSG3ircAzd%2Fp9%2BZbNJtHn7F6e%2FGN4z8ca9RkXGolkWmFcqcKJnVLN0cMkdewZX4ADdfWWC3cIAGUmw91syq%2B1tOvZc5CZQ4jS%2BjFnbbNmB1XlG1%2BI1ZKizZJkgd32JXVAQreh8WGnQyixTItPC9sMzqdfa4EyB9cybEy%2B4GArMrCzdEXYzW9CHWOu%2Bm%2Bacz38zvlaMUe4QgyJjozP%2BzA%2FZL9z7JwWf4AEJF9o49DxVwjA8XJIjV5dOOf%2FFH6C1ZnNfFTvV%2FUuOtw3ypf%2BMZerIi%2Ft4S6indMQtAesaK%2BhB1ClQtgGZKx%2BC2dJlq9xDPrc8UCHUeOhnXaJ%2BxkwjHCpAubmjwE4zkRq29wKJkzRi6AcWYwmmtXaFTbGpHFvyeZUPCJ%2BRhaBYmcFpdH%2FyNkdh4jgQ96uerZFtKU79SW8y4kkfGKadH7ansf4FdRl7DGjGC2owUj29Q4HGWsuBwRWYpkf50K3ihMC8%2BZ%2FhJiQ94z1qeIahkMfMi6doT1VTDc43zCiEUK7F%2BRWY0sU7uek7WxaJwpwLF4YfVYEZ1%2BNaN2dAsL9DCvyzlM%2FcXr6eWu8CT%2F5zWISO4%2BlJGuH3T6Bnam6VNi8i5pb%2BMl9ERAnrZ4i8XWq74hqsRaXUtR0FofiViMIPo3MYGOqUBqCoPllM%2BuTOsx%2BLjIxmC3Mmd7it0Sy17L3%2FNjJ8Y1CEVlylqzuZwr1UYkJNk19f6ccyxuzjU7152t70FjxjrlGOx6fR8sQjQDE8wGXtCuHvu1cnc1VLW5%2FHkiF9gHmoVpct6HDmg698mIj%2B8Kz4ZcqIxlzDLGkoHw4Mmqa%2BhNmE%2BQYtVNNpz4oVJ3wgliwQQbNAbNzTuRjXWfxV%2B%2BLu3alkxn5w3&X-Amz-Signature=63ea65e5ad73a05d9147f18e33405ea60cd5a05c036885dfb230366cc9f78651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG4GVLDB%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDK496thnM19BgCdwJhuCrK1IAw%2BzMBiSoOrKo4zcXOuwIgL3eK0QWL21zPHc7PAJZMf8RV5wE77ySNnfP1hwxzwCQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRe7mcksfqdFkSG3ircAzd%2Fp9%2BZbNJtHn7F6e%2FGN4z8ca9RkXGolkWmFcqcKJnVLN0cMkdewZX4ADdfWWC3cIAGUmw91syq%2B1tOvZc5CZQ4jS%2BjFnbbNmB1XlG1%2BI1ZKizZJkgd32JXVAQreh8WGnQyixTItPC9sMzqdfa4EyB9cybEy%2B4GArMrCzdEXYzW9CHWOu%2Bm%2Bacz38zvlaMUe4QgyJjozP%2BzA%2FZL9z7JwWf4AEJF9o49DxVwjA8XJIjV5dOOf%2FFH6C1ZnNfFTvV%2FUuOtw3ypf%2BMZerIi%2Ft4S6indMQtAesaK%2BhB1ClQtgGZKx%2BC2dJlq9xDPrc8UCHUeOhnXaJ%2BxkwjHCpAubmjwE4zkRq29wKJkzRi6AcWYwmmtXaFTbGpHFvyeZUPCJ%2BRhaBYmcFpdH%2FyNkdh4jgQ96uerZFtKU79SW8y4kkfGKadH7ansf4FdRl7DGjGC2owUj29Q4HGWsuBwRWYpkf50K3ihMC8%2BZ%2FhJiQ94z1qeIahkMfMi6doT1VTDc43zCiEUK7F%2BRWY0sU7uek7WxaJwpwLF4YfVYEZ1%2BNaN2dAsL9DCvyzlM%2FcXr6eWu8CT%2F5zWISO4%2BlJGuH3T6Bnam6VNi8i5pb%2BMl9ERAnrZ4i8XWq74hqsRaXUtR0FofiViMIPo3MYGOqUBqCoPllM%2BuTOsx%2BLjIxmC3Mmd7it0Sy17L3%2FNjJ8Y1CEVlylqzuZwr1UYkJNk19f6ccyxuzjU7152t70FjxjrlGOx6fR8sQjQDE8wGXtCuHvu1cnc1VLW5%2FHkiF9gHmoVpct6HDmg698mIj%2B8Kz4ZcqIxlzDLGkoHw4Mmqa%2BhNmE%2BQYtVNNpz4oVJ3wgliwQQbNAbNzTuRjXWfxV%2B%2BLu3alkxn5w3&X-Amz-Signature=258dc3d3f82eee9a729eef8628dce7bff0acc9d45042ca7cf497cae307fb99cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
