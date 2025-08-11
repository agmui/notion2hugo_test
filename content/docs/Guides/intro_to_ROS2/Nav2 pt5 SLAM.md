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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AMAM2NB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEvj0fdFj%2Bs91plzDx4YtRfJIErqjEK5W6aCGxVFWWYQIgD2LRHTwBg52VUqfm3QItgZD6e5jai%2BzCWvVbqbK4hGcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUiP1rNgyajMroftircAzOhPYvgHK51vc1ou1s1Ftba8%2B2t3OcGt9CH%2BlduSzRRhM5HauCYlugSqpg3nJjTckGfYE8jsZ29%2BUKX3n3DkLz7MijDRfIJA%2BqVtOn9iiFno28n7nYkspw5QFNtbEIW%2BWXNIH4JwfptrPf4wu66pGTJLcKW5Riwbzuuk1fACF5JJWWlYbHXDOScGaarbmFjWsB9K5DWP%2BmtM4LnnK537FmX8vaISsqItglNKE0ZD39u77v2ysTlkv%2BYFFJBv81dBrV3kmwxX0GobQ8pPcU63lN%2FREraMSFxHZBY4%2B3j6YI9Jdbv4yGdEW7hi5nlEWkaHY3q0W1deodHVfMjs5zvgLjkk9pvqTmx0zJAqCtRb5srMhGYmvVrP%2BcIyeXsOn3%2BTUFMb3TnXGY9jCfRYtIBER7XPZqdSgnK9NT12PPiIZ8Bby0zckXoKOBpPbFRNEnUdXGAHAlpJLf7CnxE4vbXr1miFY0%2BWjRU%2BdbkTk6x4nvMaJrZ3UZsx%2FPovem5ovol2Do5UedKYs6x6Sj5vgEZ8oetK%2F4b%2B3Ryilz69aRlATQvUTOqByuZbYKhNnKKavz1uaxTjfs5vlKuht0ObL3FH3EwAaryQ6RXOB0DhGy6ITtH7Br%2BxsHoKeAmEw10MPv35cQGOqUBiJ%2Bf89Jjfvcr%2Fl612%2BN2G8z5QWiAxQHbeJ0Vl2UKMsjlC8XBTCmpkZo1D5KrRccdOwunHo9v9f1yNoXVjYCB6KOjg6Uek7euW0v3BFD6NLtCafLZRRZ5B1Jbai6JrSYYH%2BJwwuWsiIAh63Dj9P%2F0LDWbJ%2FE38x9xu%2FxHnr1fALRVAbvlqZV6GEmMwBbSpOzfPFBHBzKYWdyGPMLYMHLTczj52ZXy&X-Amz-Signature=be3109c34fd1a71e1bf880104e44025ba9ec096ca297bd4ef3e2ccc95b9b1cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AMAM2NB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEvj0fdFj%2Bs91plzDx4YtRfJIErqjEK5W6aCGxVFWWYQIgD2LRHTwBg52VUqfm3QItgZD6e5jai%2BzCWvVbqbK4hGcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUiP1rNgyajMroftircAzOhPYvgHK51vc1ou1s1Ftba8%2B2t3OcGt9CH%2BlduSzRRhM5HauCYlugSqpg3nJjTckGfYE8jsZ29%2BUKX3n3DkLz7MijDRfIJA%2BqVtOn9iiFno28n7nYkspw5QFNtbEIW%2BWXNIH4JwfptrPf4wu66pGTJLcKW5Riwbzuuk1fACF5JJWWlYbHXDOScGaarbmFjWsB9K5DWP%2BmtM4LnnK537FmX8vaISsqItglNKE0ZD39u77v2ysTlkv%2BYFFJBv81dBrV3kmwxX0GobQ8pPcU63lN%2FREraMSFxHZBY4%2B3j6YI9Jdbv4yGdEW7hi5nlEWkaHY3q0W1deodHVfMjs5zvgLjkk9pvqTmx0zJAqCtRb5srMhGYmvVrP%2BcIyeXsOn3%2BTUFMb3TnXGY9jCfRYtIBER7XPZqdSgnK9NT12PPiIZ8Bby0zckXoKOBpPbFRNEnUdXGAHAlpJLf7CnxE4vbXr1miFY0%2BWjRU%2BdbkTk6x4nvMaJrZ3UZsx%2FPovem5ovol2Do5UedKYs6x6Sj5vgEZ8oetK%2F4b%2B3Ryilz69aRlATQvUTOqByuZbYKhNnKKavz1uaxTjfs5vlKuht0ObL3FH3EwAaryQ6RXOB0DhGy6ITtH7Br%2BxsHoKeAmEw10MPv35cQGOqUBiJ%2Bf89Jjfvcr%2Fl612%2BN2G8z5QWiAxQHbeJ0Vl2UKMsjlC8XBTCmpkZo1D5KrRccdOwunHo9v9f1yNoXVjYCB6KOjg6Uek7euW0v3BFD6NLtCafLZRRZ5B1Jbai6JrSYYH%2BJwwuWsiIAh63Dj9P%2F0LDWbJ%2FE38x9xu%2FxHnr1fALRVAbvlqZV6GEmMwBbSpOzfPFBHBzKYWdyGPMLYMHLTczj52ZXy&X-Amz-Signature=f986116899b38618c52469fc60fcff56061e14cd07af46b0c722b24be69f0a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AMAM2NB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEvj0fdFj%2Bs91plzDx4YtRfJIErqjEK5W6aCGxVFWWYQIgD2LRHTwBg52VUqfm3QItgZD6e5jai%2BzCWvVbqbK4hGcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUiP1rNgyajMroftircAzOhPYvgHK51vc1ou1s1Ftba8%2B2t3OcGt9CH%2BlduSzRRhM5HauCYlugSqpg3nJjTckGfYE8jsZ29%2BUKX3n3DkLz7MijDRfIJA%2BqVtOn9iiFno28n7nYkspw5QFNtbEIW%2BWXNIH4JwfptrPf4wu66pGTJLcKW5Riwbzuuk1fACF5JJWWlYbHXDOScGaarbmFjWsB9K5DWP%2BmtM4LnnK537FmX8vaISsqItglNKE0ZD39u77v2ysTlkv%2BYFFJBv81dBrV3kmwxX0GobQ8pPcU63lN%2FREraMSFxHZBY4%2B3j6YI9Jdbv4yGdEW7hi5nlEWkaHY3q0W1deodHVfMjs5zvgLjkk9pvqTmx0zJAqCtRb5srMhGYmvVrP%2BcIyeXsOn3%2BTUFMb3TnXGY9jCfRYtIBER7XPZqdSgnK9NT12PPiIZ8Bby0zckXoKOBpPbFRNEnUdXGAHAlpJLf7CnxE4vbXr1miFY0%2BWjRU%2BdbkTk6x4nvMaJrZ3UZsx%2FPovem5ovol2Do5UedKYs6x6Sj5vgEZ8oetK%2F4b%2B3Ryilz69aRlATQvUTOqByuZbYKhNnKKavz1uaxTjfs5vlKuht0ObL3FH3EwAaryQ6RXOB0DhGy6ITtH7Br%2BxsHoKeAmEw10MPv35cQGOqUBiJ%2Bf89Jjfvcr%2Fl612%2BN2G8z5QWiAxQHbeJ0Vl2UKMsjlC8XBTCmpkZo1D5KrRccdOwunHo9v9f1yNoXVjYCB6KOjg6Uek7euW0v3BFD6NLtCafLZRRZ5B1Jbai6JrSYYH%2BJwwuWsiIAh63Dj9P%2F0LDWbJ%2FE38x9xu%2FxHnr1fALRVAbvlqZV6GEmMwBbSpOzfPFBHBzKYWdyGPMLYMHLTczj52ZXy&X-Amz-Signature=bf477d64001428d211cea48d6ce758a3adac05673d11970c859b1856da4baeff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AMAM2NB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEvj0fdFj%2Bs91plzDx4YtRfJIErqjEK5W6aCGxVFWWYQIgD2LRHTwBg52VUqfm3QItgZD6e5jai%2BzCWvVbqbK4hGcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUiP1rNgyajMroftircAzOhPYvgHK51vc1ou1s1Ftba8%2B2t3OcGt9CH%2BlduSzRRhM5HauCYlugSqpg3nJjTckGfYE8jsZ29%2BUKX3n3DkLz7MijDRfIJA%2BqVtOn9iiFno28n7nYkspw5QFNtbEIW%2BWXNIH4JwfptrPf4wu66pGTJLcKW5Riwbzuuk1fACF5JJWWlYbHXDOScGaarbmFjWsB9K5DWP%2BmtM4LnnK537FmX8vaISsqItglNKE0ZD39u77v2ysTlkv%2BYFFJBv81dBrV3kmwxX0GobQ8pPcU63lN%2FREraMSFxHZBY4%2B3j6YI9Jdbv4yGdEW7hi5nlEWkaHY3q0W1deodHVfMjs5zvgLjkk9pvqTmx0zJAqCtRb5srMhGYmvVrP%2BcIyeXsOn3%2BTUFMb3TnXGY9jCfRYtIBER7XPZqdSgnK9NT12PPiIZ8Bby0zckXoKOBpPbFRNEnUdXGAHAlpJLf7CnxE4vbXr1miFY0%2BWjRU%2BdbkTk6x4nvMaJrZ3UZsx%2FPovem5ovol2Do5UedKYs6x6Sj5vgEZ8oetK%2F4b%2B3Ryilz69aRlATQvUTOqByuZbYKhNnKKavz1uaxTjfs5vlKuht0ObL3FH3EwAaryQ6RXOB0DhGy6ITtH7Br%2BxsHoKeAmEw10MPv35cQGOqUBiJ%2Bf89Jjfvcr%2Fl612%2BN2G8z5QWiAxQHbeJ0Vl2UKMsjlC8XBTCmpkZo1D5KrRccdOwunHo9v9f1yNoXVjYCB6KOjg6Uek7euW0v3BFD6NLtCafLZRRZ5B1Jbai6JrSYYH%2BJwwuWsiIAh63Dj9P%2F0LDWbJ%2FE38x9xu%2FxHnr1fALRVAbvlqZV6GEmMwBbSpOzfPFBHBzKYWdyGPMLYMHLTczj52ZXy&X-Amz-Signature=74f9e15983187669fdc299902126af54d59be1b72ef616c51cb26889e7958218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AMAM2NB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEvj0fdFj%2Bs91plzDx4YtRfJIErqjEK5W6aCGxVFWWYQIgD2LRHTwBg52VUqfm3QItgZD6e5jai%2BzCWvVbqbK4hGcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUiP1rNgyajMroftircAzOhPYvgHK51vc1ou1s1Ftba8%2B2t3OcGt9CH%2BlduSzRRhM5HauCYlugSqpg3nJjTckGfYE8jsZ29%2BUKX3n3DkLz7MijDRfIJA%2BqVtOn9iiFno28n7nYkspw5QFNtbEIW%2BWXNIH4JwfptrPf4wu66pGTJLcKW5Riwbzuuk1fACF5JJWWlYbHXDOScGaarbmFjWsB9K5DWP%2BmtM4LnnK537FmX8vaISsqItglNKE0ZD39u77v2ysTlkv%2BYFFJBv81dBrV3kmwxX0GobQ8pPcU63lN%2FREraMSFxHZBY4%2B3j6YI9Jdbv4yGdEW7hi5nlEWkaHY3q0W1deodHVfMjs5zvgLjkk9pvqTmx0zJAqCtRb5srMhGYmvVrP%2BcIyeXsOn3%2BTUFMb3TnXGY9jCfRYtIBER7XPZqdSgnK9NT12PPiIZ8Bby0zckXoKOBpPbFRNEnUdXGAHAlpJLf7CnxE4vbXr1miFY0%2BWjRU%2BdbkTk6x4nvMaJrZ3UZsx%2FPovem5ovol2Do5UedKYs6x6Sj5vgEZ8oetK%2F4b%2B3Ryilz69aRlATQvUTOqByuZbYKhNnKKavz1uaxTjfs5vlKuht0ObL3FH3EwAaryQ6RXOB0DhGy6ITtH7Br%2BxsHoKeAmEw10MPv35cQGOqUBiJ%2Bf89Jjfvcr%2Fl612%2BN2G8z5QWiAxQHbeJ0Vl2UKMsjlC8XBTCmpkZo1D5KrRccdOwunHo9v9f1yNoXVjYCB6KOjg6Uek7euW0v3BFD6NLtCafLZRRZ5B1Jbai6JrSYYH%2BJwwuWsiIAh63Dj9P%2F0LDWbJ%2FE38x9xu%2FxHnr1fALRVAbvlqZV6GEmMwBbSpOzfPFBHBzKYWdyGPMLYMHLTczj52ZXy&X-Amz-Signature=72933ec9c10aa4fa302723d3ea7fdd8168deeee9baf145954ba498cb04f966b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AMAM2NB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEvj0fdFj%2Bs91plzDx4YtRfJIErqjEK5W6aCGxVFWWYQIgD2LRHTwBg52VUqfm3QItgZD6e5jai%2BzCWvVbqbK4hGcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUiP1rNgyajMroftircAzOhPYvgHK51vc1ou1s1Ftba8%2B2t3OcGt9CH%2BlduSzRRhM5HauCYlugSqpg3nJjTckGfYE8jsZ29%2BUKX3n3DkLz7MijDRfIJA%2BqVtOn9iiFno28n7nYkspw5QFNtbEIW%2BWXNIH4JwfptrPf4wu66pGTJLcKW5Riwbzuuk1fACF5JJWWlYbHXDOScGaarbmFjWsB9K5DWP%2BmtM4LnnK537FmX8vaISsqItglNKE0ZD39u77v2ysTlkv%2BYFFJBv81dBrV3kmwxX0GobQ8pPcU63lN%2FREraMSFxHZBY4%2B3j6YI9Jdbv4yGdEW7hi5nlEWkaHY3q0W1deodHVfMjs5zvgLjkk9pvqTmx0zJAqCtRb5srMhGYmvVrP%2BcIyeXsOn3%2BTUFMb3TnXGY9jCfRYtIBER7XPZqdSgnK9NT12PPiIZ8Bby0zckXoKOBpPbFRNEnUdXGAHAlpJLf7CnxE4vbXr1miFY0%2BWjRU%2BdbkTk6x4nvMaJrZ3UZsx%2FPovem5ovol2Do5UedKYs6x6Sj5vgEZ8oetK%2F4b%2B3Ryilz69aRlATQvUTOqByuZbYKhNnKKavz1uaxTjfs5vlKuht0ObL3FH3EwAaryQ6RXOB0DhGy6ITtH7Br%2BxsHoKeAmEw10MPv35cQGOqUBiJ%2Bf89Jjfvcr%2Fl612%2BN2G8z5QWiAxQHbeJ0Vl2UKMsjlC8XBTCmpkZo1D5KrRccdOwunHo9v9f1yNoXVjYCB6KOjg6Uek7euW0v3BFD6NLtCafLZRRZ5B1Jbai6JrSYYH%2BJwwuWsiIAh63Dj9P%2F0LDWbJ%2FE38x9xu%2FxHnr1fALRVAbvlqZV6GEmMwBbSpOzfPFBHBzKYWdyGPMLYMHLTczj52ZXy&X-Amz-Signature=b8133a3fe9eeebe872d910412ece7c9a8331e08d0f4197d684d5c2db0e5de322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AMAM2NB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEvj0fdFj%2Bs91plzDx4YtRfJIErqjEK5W6aCGxVFWWYQIgD2LRHTwBg52VUqfm3QItgZD6e5jai%2BzCWvVbqbK4hGcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUiP1rNgyajMroftircAzOhPYvgHK51vc1ou1s1Ftba8%2B2t3OcGt9CH%2BlduSzRRhM5HauCYlugSqpg3nJjTckGfYE8jsZ29%2BUKX3n3DkLz7MijDRfIJA%2BqVtOn9iiFno28n7nYkspw5QFNtbEIW%2BWXNIH4JwfptrPf4wu66pGTJLcKW5Riwbzuuk1fACF5JJWWlYbHXDOScGaarbmFjWsB9K5DWP%2BmtM4LnnK537FmX8vaISsqItglNKE0ZD39u77v2ysTlkv%2BYFFJBv81dBrV3kmwxX0GobQ8pPcU63lN%2FREraMSFxHZBY4%2B3j6YI9Jdbv4yGdEW7hi5nlEWkaHY3q0W1deodHVfMjs5zvgLjkk9pvqTmx0zJAqCtRb5srMhGYmvVrP%2BcIyeXsOn3%2BTUFMb3TnXGY9jCfRYtIBER7XPZqdSgnK9NT12PPiIZ8Bby0zckXoKOBpPbFRNEnUdXGAHAlpJLf7CnxE4vbXr1miFY0%2BWjRU%2BdbkTk6x4nvMaJrZ3UZsx%2FPovem5ovol2Do5UedKYs6x6Sj5vgEZ8oetK%2F4b%2B3Ryilz69aRlATQvUTOqByuZbYKhNnKKavz1uaxTjfs5vlKuht0ObL3FH3EwAaryQ6RXOB0DhGy6ITtH7Br%2BxsHoKeAmEw10MPv35cQGOqUBiJ%2Bf89Jjfvcr%2Fl612%2BN2G8z5QWiAxQHbeJ0Vl2UKMsjlC8XBTCmpkZo1D5KrRccdOwunHo9v9f1yNoXVjYCB6KOjg6Uek7euW0v3BFD6NLtCafLZRRZ5B1Jbai6JrSYYH%2BJwwuWsiIAh63Dj9P%2F0LDWbJ%2FE38x9xu%2FxHnr1fALRVAbvlqZV6GEmMwBbSpOzfPFBHBzKYWdyGPMLYMHLTczj52ZXy&X-Amz-Signature=69c8a2a68cb2c7a9c5686e9d5c0503fd7526740150179de6060846d3dd802b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AMAM2NB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEvj0fdFj%2Bs91plzDx4YtRfJIErqjEK5W6aCGxVFWWYQIgD2LRHTwBg52VUqfm3QItgZD6e5jai%2BzCWvVbqbK4hGcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUiP1rNgyajMroftircAzOhPYvgHK51vc1ou1s1Ftba8%2B2t3OcGt9CH%2BlduSzRRhM5HauCYlugSqpg3nJjTckGfYE8jsZ29%2BUKX3n3DkLz7MijDRfIJA%2BqVtOn9iiFno28n7nYkspw5QFNtbEIW%2BWXNIH4JwfptrPf4wu66pGTJLcKW5Riwbzuuk1fACF5JJWWlYbHXDOScGaarbmFjWsB9K5DWP%2BmtM4LnnK537FmX8vaISsqItglNKE0ZD39u77v2ysTlkv%2BYFFJBv81dBrV3kmwxX0GobQ8pPcU63lN%2FREraMSFxHZBY4%2B3j6YI9Jdbv4yGdEW7hi5nlEWkaHY3q0W1deodHVfMjs5zvgLjkk9pvqTmx0zJAqCtRb5srMhGYmvVrP%2BcIyeXsOn3%2BTUFMb3TnXGY9jCfRYtIBER7XPZqdSgnK9NT12PPiIZ8Bby0zckXoKOBpPbFRNEnUdXGAHAlpJLf7CnxE4vbXr1miFY0%2BWjRU%2BdbkTk6x4nvMaJrZ3UZsx%2FPovem5ovol2Do5UedKYs6x6Sj5vgEZ8oetK%2F4b%2B3Ryilz69aRlATQvUTOqByuZbYKhNnKKavz1uaxTjfs5vlKuht0ObL3FH3EwAaryQ6RXOB0DhGy6ITtH7Br%2BxsHoKeAmEw10MPv35cQGOqUBiJ%2Bf89Jjfvcr%2Fl612%2BN2G8z5QWiAxQHbeJ0Vl2UKMsjlC8XBTCmpkZo1D5KrRccdOwunHo9v9f1yNoXVjYCB6KOjg6Uek7euW0v3BFD6NLtCafLZRRZ5B1Jbai6JrSYYH%2BJwwuWsiIAh63Dj9P%2F0LDWbJ%2FE38x9xu%2FxHnr1fALRVAbvlqZV6GEmMwBbSpOzfPFBHBzKYWdyGPMLYMHLTczj52ZXy&X-Amz-Signature=ea8503d197aec5d34798ec0760c9ab1907a09ae04951cf6fd6d2882dfda00adc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AMAM2NB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEvj0fdFj%2Bs91plzDx4YtRfJIErqjEK5W6aCGxVFWWYQIgD2LRHTwBg52VUqfm3QItgZD6e5jai%2BzCWvVbqbK4hGcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUiP1rNgyajMroftircAzOhPYvgHK51vc1ou1s1Ftba8%2B2t3OcGt9CH%2BlduSzRRhM5HauCYlugSqpg3nJjTckGfYE8jsZ29%2BUKX3n3DkLz7MijDRfIJA%2BqVtOn9iiFno28n7nYkspw5QFNtbEIW%2BWXNIH4JwfptrPf4wu66pGTJLcKW5Riwbzuuk1fACF5JJWWlYbHXDOScGaarbmFjWsB9K5DWP%2BmtM4LnnK537FmX8vaISsqItglNKE0ZD39u77v2ysTlkv%2BYFFJBv81dBrV3kmwxX0GobQ8pPcU63lN%2FREraMSFxHZBY4%2B3j6YI9Jdbv4yGdEW7hi5nlEWkaHY3q0W1deodHVfMjs5zvgLjkk9pvqTmx0zJAqCtRb5srMhGYmvVrP%2BcIyeXsOn3%2BTUFMb3TnXGY9jCfRYtIBER7XPZqdSgnK9NT12PPiIZ8Bby0zckXoKOBpPbFRNEnUdXGAHAlpJLf7CnxE4vbXr1miFY0%2BWjRU%2BdbkTk6x4nvMaJrZ3UZsx%2FPovem5ovol2Do5UedKYs6x6Sj5vgEZ8oetK%2F4b%2B3Ryilz69aRlATQvUTOqByuZbYKhNnKKavz1uaxTjfs5vlKuht0ObL3FH3EwAaryQ6RXOB0DhGy6ITtH7Br%2BxsHoKeAmEw10MPv35cQGOqUBiJ%2Bf89Jjfvcr%2Fl612%2BN2G8z5QWiAxQHbeJ0Vl2UKMsjlC8XBTCmpkZo1D5KrRccdOwunHo9v9f1yNoXVjYCB6KOjg6Uek7euW0v3BFD6NLtCafLZRRZ5B1Jbai6JrSYYH%2BJwwuWsiIAh63Dj9P%2F0LDWbJ%2FE38x9xu%2FxHnr1fALRVAbvlqZV6GEmMwBbSpOzfPFBHBzKYWdyGPMLYMHLTczj52ZXy&X-Amz-Signature=789622bc0576b17caa2b3da9f0e83ff11c7ebec2e01c7733ceee37be82789786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AMAM2NB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEvj0fdFj%2Bs91plzDx4YtRfJIErqjEK5W6aCGxVFWWYQIgD2LRHTwBg52VUqfm3QItgZD6e5jai%2BzCWvVbqbK4hGcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUiP1rNgyajMroftircAzOhPYvgHK51vc1ou1s1Ftba8%2B2t3OcGt9CH%2BlduSzRRhM5HauCYlugSqpg3nJjTckGfYE8jsZ29%2BUKX3n3DkLz7MijDRfIJA%2BqVtOn9iiFno28n7nYkspw5QFNtbEIW%2BWXNIH4JwfptrPf4wu66pGTJLcKW5Riwbzuuk1fACF5JJWWlYbHXDOScGaarbmFjWsB9K5DWP%2BmtM4LnnK537FmX8vaISsqItglNKE0ZD39u77v2ysTlkv%2BYFFJBv81dBrV3kmwxX0GobQ8pPcU63lN%2FREraMSFxHZBY4%2B3j6YI9Jdbv4yGdEW7hi5nlEWkaHY3q0W1deodHVfMjs5zvgLjkk9pvqTmx0zJAqCtRb5srMhGYmvVrP%2BcIyeXsOn3%2BTUFMb3TnXGY9jCfRYtIBER7XPZqdSgnK9NT12PPiIZ8Bby0zckXoKOBpPbFRNEnUdXGAHAlpJLf7CnxE4vbXr1miFY0%2BWjRU%2BdbkTk6x4nvMaJrZ3UZsx%2FPovem5ovol2Do5UedKYs6x6Sj5vgEZ8oetK%2F4b%2B3Ryilz69aRlATQvUTOqByuZbYKhNnKKavz1uaxTjfs5vlKuht0ObL3FH3EwAaryQ6RXOB0DhGy6ITtH7Br%2BxsHoKeAmEw10MPv35cQGOqUBiJ%2Bf89Jjfvcr%2Fl612%2BN2G8z5QWiAxQHbeJ0Vl2UKMsjlC8XBTCmpkZo1D5KrRccdOwunHo9v9f1yNoXVjYCB6KOjg6Uek7euW0v3BFD6NLtCafLZRRZ5B1Jbai6JrSYYH%2BJwwuWsiIAh63Dj9P%2F0LDWbJ%2FE38x9xu%2FxHnr1fALRVAbvlqZV6GEmMwBbSpOzfPFBHBzKYWdyGPMLYMHLTczj52ZXy&X-Amz-Signature=586ab94d7a042915c29ff4798925a0801ef2cf256151c3d6997ced91835c3084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AMAM2NB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEvj0fdFj%2Bs91plzDx4YtRfJIErqjEK5W6aCGxVFWWYQIgD2LRHTwBg52VUqfm3QItgZD6e5jai%2BzCWvVbqbK4hGcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUiP1rNgyajMroftircAzOhPYvgHK51vc1ou1s1Ftba8%2B2t3OcGt9CH%2BlduSzRRhM5HauCYlugSqpg3nJjTckGfYE8jsZ29%2BUKX3n3DkLz7MijDRfIJA%2BqVtOn9iiFno28n7nYkspw5QFNtbEIW%2BWXNIH4JwfptrPf4wu66pGTJLcKW5Riwbzuuk1fACF5JJWWlYbHXDOScGaarbmFjWsB9K5DWP%2BmtM4LnnK537FmX8vaISsqItglNKE0ZD39u77v2ysTlkv%2BYFFJBv81dBrV3kmwxX0GobQ8pPcU63lN%2FREraMSFxHZBY4%2B3j6YI9Jdbv4yGdEW7hi5nlEWkaHY3q0W1deodHVfMjs5zvgLjkk9pvqTmx0zJAqCtRb5srMhGYmvVrP%2BcIyeXsOn3%2BTUFMb3TnXGY9jCfRYtIBER7XPZqdSgnK9NT12PPiIZ8Bby0zckXoKOBpPbFRNEnUdXGAHAlpJLf7CnxE4vbXr1miFY0%2BWjRU%2BdbkTk6x4nvMaJrZ3UZsx%2FPovem5ovol2Do5UedKYs6x6Sj5vgEZ8oetK%2F4b%2B3Ryilz69aRlATQvUTOqByuZbYKhNnKKavz1uaxTjfs5vlKuht0ObL3FH3EwAaryQ6RXOB0DhGy6ITtH7Br%2BxsHoKeAmEw10MPv35cQGOqUBiJ%2Bf89Jjfvcr%2Fl612%2BN2G8z5QWiAxQHbeJ0Vl2UKMsjlC8XBTCmpkZo1D5KrRccdOwunHo9v9f1yNoXVjYCB6KOjg6Uek7euW0v3BFD6NLtCafLZRRZ5B1Jbai6JrSYYH%2BJwwuWsiIAh63Dj9P%2F0LDWbJ%2FE38x9xu%2FxHnr1fALRVAbvlqZV6GEmMwBbSpOzfPFBHBzKYWdyGPMLYMHLTczj52ZXy&X-Amz-Signature=70ecfa78642cb6ca940f6be990836e9c83775ff32c7001445e19b551e17cf718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AMAM2NB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEvj0fdFj%2Bs91plzDx4YtRfJIErqjEK5W6aCGxVFWWYQIgD2LRHTwBg52VUqfm3QItgZD6e5jai%2BzCWvVbqbK4hGcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUiP1rNgyajMroftircAzOhPYvgHK51vc1ou1s1Ftba8%2B2t3OcGt9CH%2BlduSzRRhM5HauCYlugSqpg3nJjTckGfYE8jsZ29%2BUKX3n3DkLz7MijDRfIJA%2BqVtOn9iiFno28n7nYkspw5QFNtbEIW%2BWXNIH4JwfptrPf4wu66pGTJLcKW5Riwbzuuk1fACF5JJWWlYbHXDOScGaarbmFjWsB9K5DWP%2BmtM4LnnK537FmX8vaISsqItglNKE0ZD39u77v2ysTlkv%2BYFFJBv81dBrV3kmwxX0GobQ8pPcU63lN%2FREraMSFxHZBY4%2B3j6YI9Jdbv4yGdEW7hi5nlEWkaHY3q0W1deodHVfMjs5zvgLjkk9pvqTmx0zJAqCtRb5srMhGYmvVrP%2BcIyeXsOn3%2BTUFMb3TnXGY9jCfRYtIBER7XPZqdSgnK9NT12PPiIZ8Bby0zckXoKOBpPbFRNEnUdXGAHAlpJLf7CnxE4vbXr1miFY0%2BWjRU%2BdbkTk6x4nvMaJrZ3UZsx%2FPovem5ovol2Do5UedKYs6x6Sj5vgEZ8oetK%2F4b%2B3Ryilz69aRlATQvUTOqByuZbYKhNnKKavz1uaxTjfs5vlKuht0ObL3FH3EwAaryQ6RXOB0DhGy6ITtH7Br%2BxsHoKeAmEw10MPv35cQGOqUBiJ%2Bf89Jjfvcr%2Fl612%2BN2G8z5QWiAxQHbeJ0Vl2UKMsjlC8XBTCmpkZo1D5KrRccdOwunHo9v9f1yNoXVjYCB6KOjg6Uek7euW0v3BFD6NLtCafLZRRZ5B1Jbai6JrSYYH%2BJwwuWsiIAh63Dj9P%2F0LDWbJ%2FE38x9xu%2FxHnr1fALRVAbvlqZV6GEmMwBbSpOzfPFBHBzKYWdyGPMLYMHLTczj52ZXy&X-Amz-Signature=1e1b0a33473c863ccebcde66b203a4afbd3098888359d9a2248bb15329ec3f57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AMAM2NB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEvj0fdFj%2Bs91plzDx4YtRfJIErqjEK5W6aCGxVFWWYQIgD2LRHTwBg52VUqfm3QItgZD6e5jai%2BzCWvVbqbK4hGcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUiP1rNgyajMroftircAzOhPYvgHK51vc1ou1s1Ftba8%2B2t3OcGt9CH%2BlduSzRRhM5HauCYlugSqpg3nJjTckGfYE8jsZ29%2BUKX3n3DkLz7MijDRfIJA%2BqVtOn9iiFno28n7nYkspw5QFNtbEIW%2BWXNIH4JwfptrPf4wu66pGTJLcKW5Riwbzuuk1fACF5JJWWlYbHXDOScGaarbmFjWsB9K5DWP%2BmtM4LnnK537FmX8vaISsqItglNKE0ZD39u77v2ysTlkv%2BYFFJBv81dBrV3kmwxX0GobQ8pPcU63lN%2FREraMSFxHZBY4%2B3j6YI9Jdbv4yGdEW7hi5nlEWkaHY3q0W1deodHVfMjs5zvgLjkk9pvqTmx0zJAqCtRb5srMhGYmvVrP%2BcIyeXsOn3%2BTUFMb3TnXGY9jCfRYtIBER7XPZqdSgnK9NT12PPiIZ8Bby0zckXoKOBpPbFRNEnUdXGAHAlpJLf7CnxE4vbXr1miFY0%2BWjRU%2BdbkTk6x4nvMaJrZ3UZsx%2FPovem5ovol2Do5UedKYs6x6Sj5vgEZ8oetK%2F4b%2B3Ryilz69aRlATQvUTOqByuZbYKhNnKKavz1uaxTjfs5vlKuht0ObL3FH3EwAaryQ6RXOB0DhGy6ITtH7Br%2BxsHoKeAmEw10MPv35cQGOqUBiJ%2Bf89Jjfvcr%2Fl612%2BN2G8z5QWiAxQHbeJ0Vl2UKMsjlC8XBTCmpkZo1D5KrRccdOwunHo9v9f1yNoXVjYCB6KOjg6Uek7euW0v3BFD6NLtCafLZRRZ5B1Jbai6JrSYYH%2BJwwuWsiIAh63Dj9P%2F0LDWbJ%2FE38x9xu%2FxHnr1fALRVAbvlqZV6GEmMwBbSpOzfPFBHBzKYWdyGPMLYMHLTczj52ZXy&X-Amz-Signature=ffbef5c20e31b41402491e33789fbc035560a77658d9d0359610f03da1dca1a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AMAM2NB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEvj0fdFj%2Bs91plzDx4YtRfJIErqjEK5W6aCGxVFWWYQIgD2LRHTwBg52VUqfm3QItgZD6e5jai%2BzCWvVbqbK4hGcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUiP1rNgyajMroftircAzOhPYvgHK51vc1ou1s1Ftba8%2B2t3OcGt9CH%2BlduSzRRhM5HauCYlugSqpg3nJjTckGfYE8jsZ29%2BUKX3n3DkLz7MijDRfIJA%2BqVtOn9iiFno28n7nYkspw5QFNtbEIW%2BWXNIH4JwfptrPf4wu66pGTJLcKW5Riwbzuuk1fACF5JJWWlYbHXDOScGaarbmFjWsB9K5DWP%2BmtM4LnnK537FmX8vaISsqItglNKE0ZD39u77v2ysTlkv%2BYFFJBv81dBrV3kmwxX0GobQ8pPcU63lN%2FREraMSFxHZBY4%2B3j6YI9Jdbv4yGdEW7hi5nlEWkaHY3q0W1deodHVfMjs5zvgLjkk9pvqTmx0zJAqCtRb5srMhGYmvVrP%2BcIyeXsOn3%2BTUFMb3TnXGY9jCfRYtIBER7XPZqdSgnK9NT12PPiIZ8Bby0zckXoKOBpPbFRNEnUdXGAHAlpJLf7CnxE4vbXr1miFY0%2BWjRU%2BdbkTk6x4nvMaJrZ3UZsx%2FPovem5ovol2Do5UedKYs6x6Sj5vgEZ8oetK%2F4b%2B3Ryilz69aRlATQvUTOqByuZbYKhNnKKavz1uaxTjfs5vlKuht0ObL3FH3EwAaryQ6RXOB0DhGy6ITtH7Br%2BxsHoKeAmEw10MPv35cQGOqUBiJ%2Bf89Jjfvcr%2Fl612%2BN2G8z5QWiAxQHbeJ0Vl2UKMsjlC8XBTCmpkZo1D5KrRccdOwunHo9v9f1yNoXVjYCB6KOjg6Uek7euW0v3BFD6NLtCafLZRRZ5B1Jbai6JrSYYH%2BJwwuWsiIAh63Dj9P%2F0LDWbJ%2FE38x9xu%2FxHnr1fALRVAbvlqZV6GEmMwBbSpOzfPFBHBzKYWdyGPMLYMHLTczj52ZXy&X-Amz-Signature=e9be0b15eef632543c184a9e1b3083fc8919328a1a3a00bc16c9195990dfbce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
