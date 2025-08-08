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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5FJR64%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDErmA2GzEWMvmZWstZnxOt5lvyonX6AVbQE%2BoOfdZfawIhAL4YV972cNXVk7p2k3razEjq5FKrXSs8y9B9a%2F9OMGMzKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKAG1BgDn15ZonYmgq3ANClssYyXYPtfhn%2BTkS3ogM5Hhfjf1xr5GUcd5BklZ4OOMwnq7qmv2yziGYjNSn2BjfzM%2FVT35O%2B1YZgjank%2FmALtW5Kq55PjxoYjrfVAKMETxcP23Vkbze6VNgboGsOznOp2YEUxohPv8DufCa9kN1ZSFYMCmg6aSR6pSkCulKZ1WE0XossJ5T%2F8zyQnjjgoG1goR4Q1aAy856Sqb8yQpX0aBhBHrhODBhCuRYchgZBVrzZDqznMKGZdqQVCaS8Fy%2FKoAU7JO7mMTBE8hiE5YIQpYEyL4fIfH3FouXpbXgj2nmuhRHLCzKQ74fr50omX384OUHf5JXAGyP1zbea3kMNVuSabW%2BV5SZtdfM1S1WiuIBzY85Vim%2FpG3RG2cY6ygs74AY8LFnp%2FV5P2cP4BYqBw7h022Mum57TU4ATUpQBMGu%2BwvPn0nY63Pde7VexVnjE%2Fs63%2FewKl%2B%2By%2Fda1nTNKmTOl2Wk8HVO9gtD0eAojXebPsAzU0lX0UxsAHAKYLDkEwAHNnNuKUBO1ggbMLuI7EY9ya4kAbUh2iaWPg43Us3e%2B9%2BH9SHYtNpmOunLVM1I9niYsWoavOGlxvsBILVzqmJ5Hb6WOM4cuvkMbbPB44GCUBtVWf8EtEjh2zDhptjEBjqkAVJ%2FAK7m6vGei0RdLuCD88joxqCyLBjZ0jLb1xB2aDGZBXhPVsNLjFxIBcF0q2vFEGyqieikc0T5n4Bs%2F0jPRXllqI8o5JgNJ9rVmLHZHhaSjPrrFZtdXoGP8NfgKzOYK1VPoDduHorQgsL%2B9wiieptUYV9cO3ezhQEpUS0ySPkrUsQqJBgxO%2BC5STzT1MYMKVdQP%2B4n0xMAxNiW1CtnpJkHwW%2FL&X-Amz-Signature=1f4b1dd004587cb55c39e645235ff55aa3fadce093c712f86d2b48e5fb5b14c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5FJR64%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDErmA2GzEWMvmZWstZnxOt5lvyonX6AVbQE%2BoOfdZfawIhAL4YV972cNXVk7p2k3razEjq5FKrXSs8y9B9a%2F9OMGMzKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKAG1BgDn15ZonYmgq3ANClssYyXYPtfhn%2BTkS3ogM5Hhfjf1xr5GUcd5BklZ4OOMwnq7qmv2yziGYjNSn2BjfzM%2FVT35O%2B1YZgjank%2FmALtW5Kq55PjxoYjrfVAKMETxcP23Vkbze6VNgboGsOznOp2YEUxohPv8DufCa9kN1ZSFYMCmg6aSR6pSkCulKZ1WE0XossJ5T%2F8zyQnjjgoG1goR4Q1aAy856Sqb8yQpX0aBhBHrhODBhCuRYchgZBVrzZDqznMKGZdqQVCaS8Fy%2FKoAU7JO7mMTBE8hiE5YIQpYEyL4fIfH3FouXpbXgj2nmuhRHLCzKQ74fr50omX384OUHf5JXAGyP1zbea3kMNVuSabW%2BV5SZtdfM1S1WiuIBzY85Vim%2FpG3RG2cY6ygs74AY8LFnp%2FV5P2cP4BYqBw7h022Mum57TU4ATUpQBMGu%2BwvPn0nY63Pde7VexVnjE%2Fs63%2FewKl%2B%2By%2Fda1nTNKmTOl2Wk8HVO9gtD0eAojXebPsAzU0lX0UxsAHAKYLDkEwAHNnNuKUBO1ggbMLuI7EY9ya4kAbUh2iaWPg43Us3e%2B9%2BH9SHYtNpmOunLVM1I9niYsWoavOGlxvsBILVzqmJ5Hb6WOM4cuvkMbbPB44GCUBtVWf8EtEjh2zDhptjEBjqkAVJ%2FAK7m6vGei0RdLuCD88joxqCyLBjZ0jLb1xB2aDGZBXhPVsNLjFxIBcF0q2vFEGyqieikc0T5n4Bs%2F0jPRXllqI8o5JgNJ9rVmLHZHhaSjPrrFZtdXoGP8NfgKzOYK1VPoDduHorQgsL%2B9wiieptUYV9cO3ezhQEpUS0ySPkrUsQqJBgxO%2BC5STzT1MYMKVdQP%2B4n0xMAxNiW1CtnpJkHwW%2FL&X-Amz-Signature=4e0f197a11f7382fc6a8de4c46dcd038c98172703798aa181c43b9df0d2047a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5FJR64%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDErmA2GzEWMvmZWstZnxOt5lvyonX6AVbQE%2BoOfdZfawIhAL4YV972cNXVk7p2k3razEjq5FKrXSs8y9B9a%2F9OMGMzKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKAG1BgDn15ZonYmgq3ANClssYyXYPtfhn%2BTkS3ogM5Hhfjf1xr5GUcd5BklZ4OOMwnq7qmv2yziGYjNSn2BjfzM%2FVT35O%2B1YZgjank%2FmALtW5Kq55PjxoYjrfVAKMETxcP23Vkbze6VNgboGsOznOp2YEUxohPv8DufCa9kN1ZSFYMCmg6aSR6pSkCulKZ1WE0XossJ5T%2F8zyQnjjgoG1goR4Q1aAy856Sqb8yQpX0aBhBHrhODBhCuRYchgZBVrzZDqznMKGZdqQVCaS8Fy%2FKoAU7JO7mMTBE8hiE5YIQpYEyL4fIfH3FouXpbXgj2nmuhRHLCzKQ74fr50omX384OUHf5JXAGyP1zbea3kMNVuSabW%2BV5SZtdfM1S1WiuIBzY85Vim%2FpG3RG2cY6ygs74AY8LFnp%2FV5P2cP4BYqBw7h022Mum57TU4ATUpQBMGu%2BwvPn0nY63Pde7VexVnjE%2Fs63%2FewKl%2B%2By%2Fda1nTNKmTOl2Wk8HVO9gtD0eAojXebPsAzU0lX0UxsAHAKYLDkEwAHNnNuKUBO1ggbMLuI7EY9ya4kAbUh2iaWPg43Us3e%2B9%2BH9SHYtNpmOunLVM1I9niYsWoavOGlxvsBILVzqmJ5Hb6WOM4cuvkMbbPB44GCUBtVWf8EtEjh2zDhptjEBjqkAVJ%2FAK7m6vGei0RdLuCD88joxqCyLBjZ0jLb1xB2aDGZBXhPVsNLjFxIBcF0q2vFEGyqieikc0T5n4Bs%2F0jPRXllqI8o5JgNJ9rVmLHZHhaSjPrrFZtdXoGP8NfgKzOYK1VPoDduHorQgsL%2B9wiieptUYV9cO3ezhQEpUS0ySPkrUsQqJBgxO%2BC5STzT1MYMKVdQP%2B4n0xMAxNiW1CtnpJkHwW%2FL&X-Amz-Signature=6b438452fedfee28a866e4a2e6d0699b3388ff910699d28006a7dad19d260f27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5FJR64%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDErmA2GzEWMvmZWstZnxOt5lvyonX6AVbQE%2BoOfdZfawIhAL4YV972cNXVk7p2k3razEjq5FKrXSs8y9B9a%2F9OMGMzKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKAG1BgDn15ZonYmgq3ANClssYyXYPtfhn%2BTkS3ogM5Hhfjf1xr5GUcd5BklZ4OOMwnq7qmv2yziGYjNSn2BjfzM%2FVT35O%2B1YZgjank%2FmALtW5Kq55PjxoYjrfVAKMETxcP23Vkbze6VNgboGsOznOp2YEUxohPv8DufCa9kN1ZSFYMCmg6aSR6pSkCulKZ1WE0XossJ5T%2F8zyQnjjgoG1goR4Q1aAy856Sqb8yQpX0aBhBHrhODBhCuRYchgZBVrzZDqznMKGZdqQVCaS8Fy%2FKoAU7JO7mMTBE8hiE5YIQpYEyL4fIfH3FouXpbXgj2nmuhRHLCzKQ74fr50omX384OUHf5JXAGyP1zbea3kMNVuSabW%2BV5SZtdfM1S1WiuIBzY85Vim%2FpG3RG2cY6ygs74AY8LFnp%2FV5P2cP4BYqBw7h022Mum57TU4ATUpQBMGu%2BwvPn0nY63Pde7VexVnjE%2Fs63%2FewKl%2B%2By%2Fda1nTNKmTOl2Wk8HVO9gtD0eAojXebPsAzU0lX0UxsAHAKYLDkEwAHNnNuKUBO1ggbMLuI7EY9ya4kAbUh2iaWPg43Us3e%2B9%2BH9SHYtNpmOunLVM1I9niYsWoavOGlxvsBILVzqmJ5Hb6WOM4cuvkMbbPB44GCUBtVWf8EtEjh2zDhptjEBjqkAVJ%2FAK7m6vGei0RdLuCD88joxqCyLBjZ0jLb1xB2aDGZBXhPVsNLjFxIBcF0q2vFEGyqieikc0T5n4Bs%2F0jPRXllqI8o5JgNJ9rVmLHZHhaSjPrrFZtdXoGP8NfgKzOYK1VPoDduHorQgsL%2B9wiieptUYV9cO3ezhQEpUS0ySPkrUsQqJBgxO%2BC5STzT1MYMKVdQP%2B4n0xMAxNiW1CtnpJkHwW%2FL&X-Amz-Signature=3e4122751398373300a9f6779c0f1c8517fddd68c1e8f62cc24610c4a74e9308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5FJR64%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDErmA2GzEWMvmZWstZnxOt5lvyonX6AVbQE%2BoOfdZfawIhAL4YV972cNXVk7p2k3razEjq5FKrXSs8y9B9a%2F9OMGMzKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKAG1BgDn15ZonYmgq3ANClssYyXYPtfhn%2BTkS3ogM5Hhfjf1xr5GUcd5BklZ4OOMwnq7qmv2yziGYjNSn2BjfzM%2FVT35O%2B1YZgjank%2FmALtW5Kq55PjxoYjrfVAKMETxcP23Vkbze6VNgboGsOznOp2YEUxohPv8DufCa9kN1ZSFYMCmg6aSR6pSkCulKZ1WE0XossJ5T%2F8zyQnjjgoG1goR4Q1aAy856Sqb8yQpX0aBhBHrhODBhCuRYchgZBVrzZDqznMKGZdqQVCaS8Fy%2FKoAU7JO7mMTBE8hiE5YIQpYEyL4fIfH3FouXpbXgj2nmuhRHLCzKQ74fr50omX384OUHf5JXAGyP1zbea3kMNVuSabW%2BV5SZtdfM1S1WiuIBzY85Vim%2FpG3RG2cY6ygs74AY8LFnp%2FV5P2cP4BYqBw7h022Mum57TU4ATUpQBMGu%2BwvPn0nY63Pde7VexVnjE%2Fs63%2FewKl%2B%2By%2Fda1nTNKmTOl2Wk8HVO9gtD0eAojXebPsAzU0lX0UxsAHAKYLDkEwAHNnNuKUBO1ggbMLuI7EY9ya4kAbUh2iaWPg43Us3e%2B9%2BH9SHYtNpmOunLVM1I9niYsWoavOGlxvsBILVzqmJ5Hb6WOM4cuvkMbbPB44GCUBtVWf8EtEjh2zDhptjEBjqkAVJ%2FAK7m6vGei0RdLuCD88joxqCyLBjZ0jLb1xB2aDGZBXhPVsNLjFxIBcF0q2vFEGyqieikc0T5n4Bs%2F0jPRXllqI8o5JgNJ9rVmLHZHhaSjPrrFZtdXoGP8NfgKzOYK1VPoDduHorQgsL%2B9wiieptUYV9cO3ezhQEpUS0ySPkrUsQqJBgxO%2BC5STzT1MYMKVdQP%2B4n0xMAxNiW1CtnpJkHwW%2FL&X-Amz-Signature=adf3a3cab5ba4372e8ffe388e738b8b86846b160442090144f1e91b6472151be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5FJR64%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDErmA2GzEWMvmZWstZnxOt5lvyonX6AVbQE%2BoOfdZfawIhAL4YV972cNXVk7p2k3razEjq5FKrXSs8y9B9a%2F9OMGMzKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKAG1BgDn15ZonYmgq3ANClssYyXYPtfhn%2BTkS3ogM5Hhfjf1xr5GUcd5BklZ4OOMwnq7qmv2yziGYjNSn2BjfzM%2FVT35O%2B1YZgjank%2FmALtW5Kq55PjxoYjrfVAKMETxcP23Vkbze6VNgboGsOznOp2YEUxohPv8DufCa9kN1ZSFYMCmg6aSR6pSkCulKZ1WE0XossJ5T%2F8zyQnjjgoG1goR4Q1aAy856Sqb8yQpX0aBhBHrhODBhCuRYchgZBVrzZDqznMKGZdqQVCaS8Fy%2FKoAU7JO7mMTBE8hiE5YIQpYEyL4fIfH3FouXpbXgj2nmuhRHLCzKQ74fr50omX384OUHf5JXAGyP1zbea3kMNVuSabW%2BV5SZtdfM1S1WiuIBzY85Vim%2FpG3RG2cY6ygs74AY8LFnp%2FV5P2cP4BYqBw7h022Mum57TU4ATUpQBMGu%2BwvPn0nY63Pde7VexVnjE%2Fs63%2FewKl%2B%2By%2Fda1nTNKmTOl2Wk8HVO9gtD0eAojXebPsAzU0lX0UxsAHAKYLDkEwAHNnNuKUBO1ggbMLuI7EY9ya4kAbUh2iaWPg43Us3e%2B9%2BH9SHYtNpmOunLVM1I9niYsWoavOGlxvsBILVzqmJ5Hb6WOM4cuvkMbbPB44GCUBtVWf8EtEjh2zDhptjEBjqkAVJ%2FAK7m6vGei0RdLuCD88joxqCyLBjZ0jLb1xB2aDGZBXhPVsNLjFxIBcF0q2vFEGyqieikc0T5n4Bs%2F0jPRXllqI8o5JgNJ9rVmLHZHhaSjPrrFZtdXoGP8NfgKzOYK1VPoDduHorQgsL%2B9wiieptUYV9cO3ezhQEpUS0ySPkrUsQqJBgxO%2BC5STzT1MYMKVdQP%2B4n0xMAxNiW1CtnpJkHwW%2FL&X-Amz-Signature=860cbe10692ed099f009d015344b9fa0885e4d9486507ee61445e0730360a7d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5FJR64%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDErmA2GzEWMvmZWstZnxOt5lvyonX6AVbQE%2BoOfdZfawIhAL4YV972cNXVk7p2k3razEjq5FKrXSs8y9B9a%2F9OMGMzKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKAG1BgDn15ZonYmgq3ANClssYyXYPtfhn%2BTkS3ogM5Hhfjf1xr5GUcd5BklZ4OOMwnq7qmv2yziGYjNSn2BjfzM%2FVT35O%2B1YZgjank%2FmALtW5Kq55PjxoYjrfVAKMETxcP23Vkbze6VNgboGsOznOp2YEUxohPv8DufCa9kN1ZSFYMCmg6aSR6pSkCulKZ1WE0XossJ5T%2F8zyQnjjgoG1goR4Q1aAy856Sqb8yQpX0aBhBHrhODBhCuRYchgZBVrzZDqznMKGZdqQVCaS8Fy%2FKoAU7JO7mMTBE8hiE5YIQpYEyL4fIfH3FouXpbXgj2nmuhRHLCzKQ74fr50omX384OUHf5JXAGyP1zbea3kMNVuSabW%2BV5SZtdfM1S1WiuIBzY85Vim%2FpG3RG2cY6ygs74AY8LFnp%2FV5P2cP4BYqBw7h022Mum57TU4ATUpQBMGu%2BwvPn0nY63Pde7VexVnjE%2Fs63%2FewKl%2B%2By%2Fda1nTNKmTOl2Wk8HVO9gtD0eAojXebPsAzU0lX0UxsAHAKYLDkEwAHNnNuKUBO1ggbMLuI7EY9ya4kAbUh2iaWPg43Us3e%2B9%2BH9SHYtNpmOunLVM1I9niYsWoavOGlxvsBILVzqmJ5Hb6WOM4cuvkMbbPB44GCUBtVWf8EtEjh2zDhptjEBjqkAVJ%2FAK7m6vGei0RdLuCD88joxqCyLBjZ0jLb1xB2aDGZBXhPVsNLjFxIBcF0q2vFEGyqieikc0T5n4Bs%2F0jPRXllqI8o5JgNJ9rVmLHZHhaSjPrrFZtdXoGP8NfgKzOYK1VPoDduHorQgsL%2B9wiieptUYV9cO3ezhQEpUS0ySPkrUsQqJBgxO%2BC5STzT1MYMKVdQP%2B4n0xMAxNiW1CtnpJkHwW%2FL&X-Amz-Signature=672a294ba26f89d4b591ff3b3c557397b93ff9514fa1c7fcaa37472041eb2082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5FJR64%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDErmA2GzEWMvmZWstZnxOt5lvyonX6AVbQE%2BoOfdZfawIhAL4YV972cNXVk7p2k3razEjq5FKrXSs8y9B9a%2F9OMGMzKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKAG1BgDn15ZonYmgq3ANClssYyXYPtfhn%2BTkS3ogM5Hhfjf1xr5GUcd5BklZ4OOMwnq7qmv2yziGYjNSn2BjfzM%2FVT35O%2B1YZgjank%2FmALtW5Kq55PjxoYjrfVAKMETxcP23Vkbze6VNgboGsOznOp2YEUxohPv8DufCa9kN1ZSFYMCmg6aSR6pSkCulKZ1WE0XossJ5T%2F8zyQnjjgoG1goR4Q1aAy856Sqb8yQpX0aBhBHrhODBhCuRYchgZBVrzZDqznMKGZdqQVCaS8Fy%2FKoAU7JO7mMTBE8hiE5YIQpYEyL4fIfH3FouXpbXgj2nmuhRHLCzKQ74fr50omX384OUHf5JXAGyP1zbea3kMNVuSabW%2BV5SZtdfM1S1WiuIBzY85Vim%2FpG3RG2cY6ygs74AY8LFnp%2FV5P2cP4BYqBw7h022Mum57TU4ATUpQBMGu%2BwvPn0nY63Pde7VexVnjE%2Fs63%2FewKl%2B%2By%2Fda1nTNKmTOl2Wk8HVO9gtD0eAojXebPsAzU0lX0UxsAHAKYLDkEwAHNnNuKUBO1ggbMLuI7EY9ya4kAbUh2iaWPg43Us3e%2B9%2BH9SHYtNpmOunLVM1I9niYsWoavOGlxvsBILVzqmJ5Hb6WOM4cuvkMbbPB44GCUBtVWf8EtEjh2zDhptjEBjqkAVJ%2FAK7m6vGei0RdLuCD88joxqCyLBjZ0jLb1xB2aDGZBXhPVsNLjFxIBcF0q2vFEGyqieikc0T5n4Bs%2F0jPRXllqI8o5JgNJ9rVmLHZHhaSjPrrFZtdXoGP8NfgKzOYK1VPoDduHorQgsL%2B9wiieptUYV9cO3ezhQEpUS0ySPkrUsQqJBgxO%2BC5STzT1MYMKVdQP%2B4n0xMAxNiW1CtnpJkHwW%2FL&X-Amz-Signature=febc90acc7119dac2263c3f05208e423bf01de386fb36ff5b8667f9a547048b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5FJR64%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDErmA2GzEWMvmZWstZnxOt5lvyonX6AVbQE%2BoOfdZfawIhAL4YV972cNXVk7p2k3razEjq5FKrXSs8y9B9a%2F9OMGMzKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKAG1BgDn15ZonYmgq3ANClssYyXYPtfhn%2BTkS3ogM5Hhfjf1xr5GUcd5BklZ4OOMwnq7qmv2yziGYjNSn2BjfzM%2FVT35O%2B1YZgjank%2FmALtW5Kq55PjxoYjrfVAKMETxcP23Vkbze6VNgboGsOznOp2YEUxohPv8DufCa9kN1ZSFYMCmg6aSR6pSkCulKZ1WE0XossJ5T%2F8zyQnjjgoG1goR4Q1aAy856Sqb8yQpX0aBhBHrhODBhCuRYchgZBVrzZDqznMKGZdqQVCaS8Fy%2FKoAU7JO7mMTBE8hiE5YIQpYEyL4fIfH3FouXpbXgj2nmuhRHLCzKQ74fr50omX384OUHf5JXAGyP1zbea3kMNVuSabW%2BV5SZtdfM1S1WiuIBzY85Vim%2FpG3RG2cY6ygs74AY8LFnp%2FV5P2cP4BYqBw7h022Mum57TU4ATUpQBMGu%2BwvPn0nY63Pde7VexVnjE%2Fs63%2FewKl%2B%2By%2Fda1nTNKmTOl2Wk8HVO9gtD0eAojXebPsAzU0lX0UxsAHAKYLDkEwAHNnNuKUBO1ggbMLuI7EY9ya4kAbUh2iaWPg43Us3e%2B9%2BH9SHYtNpmOunLVM1I9niYsWoavOGlxvsBILVzqmJ5Hb6WOM4cuvkMbbPB44GCUBtVWf8EtEjh2zDhptjEBjqkAVJ%2FAK7m6vGei0RdLuCD88joxqCyLBjZ0jLb1xB2aDGZBXhPVsNLjFxIBcF0q2vFEGyqieikc0T5n4Bs%2F0jPRXllqI8o5JgNJ9rVmLHZHhaSjPrrFZtdXoGP8NfgKzOYK1VPoDduHorQgsL%2B9wiieptUYV9cO3ezhQEpUS0ySPkrUsQqJBgxO%2BC5STzT1MYMKVdQP%2B4n0xMAxNiW1CtnpJkHwW%2FL&X-Amz-Signature=5b3ccba4925f423df113a92a960a27573e1f159dcec56b0e878837e128afe8cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5FJR64%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDErmA2GzEWMvmZWstZnxOt5lvyonX6AVbQE%2BoOfdZfawIhAL4YV972cNXVk7p2k3razEjq5FKrXSs8y9B9a%2F9OMGMzKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKAG1BgDn15ZonYmgq3ANClssYyXYPtfhn%2BTkS3ogM5Hhfjf1xr5GUcd5BklZ4OOMwnq7qmv2yziGYjNSn2BjfzM%2FVT35O%2B1YZgjank%2FmALtW5Kq55PjxoYjrfVAKMETxcP23Vkbze6VNgboGsOznOp2YEUxohPv8DufCa9kN1ZSFYMCmg6aSR6pSkCulKZ1WE0XossJ5T%2F8zyQnjjgoG1goR4Q1aAy856Sqb8yQpX0aBhBHrhODBhCuRYchgZBVrzZDqznMKGZdqQVCaS8Fy%2FKoAU7JO7mMTBE8hiE5YIQpYEyL4fIfH3FouXpbXgj2nmuhRHLCzKQ74fr50omX384OUHf5JXAGyP1zbea3kMNVuSabW%2BV5SZtdfM1S1WiuIBzY85Vim%2FpG3RG2cY6ygs74AY8LFnp%2FV5P2cP4BYqBw7h022Mum57TU4ATUpQBMGu%2BwvPn0nY63Pde7VexVnjE%2Fs63%2FewKl%2B%2By%2Fda1nTNKmTOl2Wk8HVO9gtD0eAojXebPsAzU0lX0UxsAHAKYLDkEwAHNnNuKUBO1ggbMLuI7EY9ya4kAbUh2iaWPg43Us3e%2B9%2BH9SHYtNpmOunLVM1I9niYsWoavOGlxvsBILVzqmJ5Hb6WOM4cuvkMbbPB44GCUBtVWf8EtEjh2zDhptjEBjqkAVJ%2FAK7m6vGei0RdLuCD88joxqCyLBjZ0jLb1xB2aDGZBXhPVsNLjFxIBcF0q2vFEGyqieikc0T5n4Bs%2F0jPRXllqI8o5JgNJ9rVmLHZHhaSjPrrFZtdXoGP8NfgKzOYK1VPoDduHorQgsL%2B9wiieptUYV9cO3ezhQEpUS0ySPkrUsQqJBgxO%2BC5STzT1MYMKVdQP%2B4n0xMAxNiW1CtnpJkHwW%2FL&X-Amz-Signature=a578136695d9ff9647431556a86daa4d882faff9577a381b03af427d1b54d40a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5FJR64%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDErmA2GzEWMvmZWstZnxOt5lvyonX6AVbQE%2BoOfdZfawIhAL4YV972cNXVk7p2k3razEjq5FKrXSs8y9B9a%2F9OMGMzKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKAG1BgDn15ZonYmgq3ANClssYyXYPtfhn%2BTkS3ogM5Hhfjf1xr5GUcd5BklZ4OOMwnq7qmv2yziGYjNSn2BjfzM%2FVT35O%2B1YZgjank%2FmALtW5Kq55PjxoYjrfVAKMETxcP23Vkbze6VNgboGsOznOp2YEUxohPv8DufCa9kN1ZSFYMCmg6aSR6pSkCulKZ1WE0XossJ5T%2F8zyQnjjgoG1goR4Q1aAy856Sqb8yQpX0aBhBHrhODBhCuRYchgZBVrzZDqznMKGZdqQVCaS8Fy%2FKoAU7JO7mMTBE8hiE5YIQpYEyL4fIfH3FouXpbXgj2nmuhRHLCzKQ74fr50omX384OUHf5JXAGyP1zbea3kMNVuSabW%2BV5SZtdfM1S1WiuIBzY85Vim%2FpG3RG2cY6ygs74AY8LFnp%2FV5P2cP4BYqBw7h022Mum57TU4ATUpQBMGu%2BwvPn0nY63Pde7VexVnjE%2Fs63%2FewKl%2B%2By%2Fda1nTNKmTOl2Wk8HVO9gtD0eAojXebPsAzU0lX0UxsAHAKYLDkEwAHNnNuKUBO1ggbMLuI7EY9ya4kAbUh2iaWPg43Us3e%2B9%2BH9SHYtNpmOunLVM1I9niYsWoavOGlxvsBILVzqmJ5Hb6WOM4cuvkMbbPB44GCUBtVWf8EtEjh2zDhptjEBjqkAVJ%2FAK7m6vGei0RdLuCD88joxqCyLBjZ0jLb1xB2aDGZBXhPVsNLjFxIBcF0q2vFEGyqieikc0T5n4Bs%2F0jPRXllqI8o5JgNJ9rVmLHZHhaSjPrrFZtdXoGP8NfgKzOYK1VPoDduHorQgsL%2B9wiieptUYV9cO3ezhQEpUS0ySPkrUsQqJBgxO%2BC5STzT1MYMKVdQP%2B4n0xMAxNiW1CtnpJkHwW%2FL&X-Amz-Signature=e490219a2695b15087f58eaf49520f887eda1ed01c1bd3f6e0695a8a5cf83880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5FJR64%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDErmA2GzEWMvmZWstZnxOt5lvyonX6AVbQE%2BoOfdZfawIhAL4YV972cNXVk7p2k3razEjq5FKrXSs8y9B9a%2F9OMGMzKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKAG1BgDn15ZonYmgq3ANClssYyXYPtfhn%2BTkS3ogM5Hhfjf1xr5GUcd5BklZ4OOMwnq7qmv2yziGYjNSn2BjfzM%2FVT35O%2B1YZgjank%2FmALtW5Kq55PjxoYjrfVAKMETxcP23Vkbze6VNgboGsOznOp2YEUxohPv8DufCa9kN1ZSFYMCmg6aSR6pSkCulKZ1WE0XossJ5T%2F8zyQnjjgoG1goR4Q1aAy856Sqb8yQpX0aBhBHrhODBhCuRYchgZBVrzZDqznMKGZdqQVCaS8Fy%2FKoAU7JO7mMTBE8hiE5YIQpYEyL4fIfH3FouXpbXgj2nmuhRHLCzKQ74fr50omX384OUHf5JXAGyP1zbea3kMNVuSabW%2BV5SZtdfM1S1WiuIBzY85Vim%2FpG3RG2cY6ygs74AY8LFnp%2FV5P2cP4BYqBw7h022Mum57TU4ATUpQBMGu%2BwvPn0nY63Pde7VexVnjE%2Fs63%2FewKl%2B%2By%2Fda1nTNKmTOl2Wk8HVO9gtD0eAojXebPsAzU0lX0UxsAHAKYLDkEwAHNnNuKUBO1ggbMLuI7EY9ya4kAbUh2iaWPg43Us3e%2B9%2BH9SHYtNpmOunLVM1I9niYsWoavOGlxvsBILVzqmJ5Hb6WOM4cuvkMbbPB44GCUBtVWf8EtEjh2zDhptjEBjqkAVJ%2FAK7m6vGei0RdLuCD88joxqCyLBjZ0jLb1xB2aDGZBXhPVsNLjFxIBcF0q2vFEGyqieikc0T5n4Bs%2F0jPRXllqI8o5JgNJ9rVmLHZHhaSjPrrFZtdXoGP8NfgKzOYK1VPoDduHorQgsL%2B9wiieptUYV9cO3ezhQEpUS0ySPkrUsQqJBgxO%2BC5STzT1MYMKVdQP%2B4n0xMAxNiW1CtnpJkHwW%2FL&X-Amz-Signature=5d678422eb9767bfe78bc0ecc6347893ad32c138c7cb245f21142df144cf19d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5FJR64%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDErmA2GzEWMvmZWstZnxOt5lvyonX6AVbQE%2BoOfdZfawIhAL4YV972cNXVk7p2k3razEjq5FKrXSs8y9B9a%2F9OMGMzKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKAG1BgDn15ZonYmgq3ANClssYyXYPtfhn%2BTkS3ogM5Hhfjf1xr5GUcd5BklZ4OOMwnq7qmv2yziGYjNSn2BjfzM%2FVT35O%2B1YZgjank%2FmALtW5Kq55PjxoYjrfVAKMETxcP23Vkbze6VNgboGsOznOp2YEUxohPv8DufCa9kN1ZSFYMCmg6aSR6pSkCulKZ1WE0XossJ5T%2F8zyQnjjgoG1goR4Q1aAy856Sqb8yQpX0aBhBHrhODBhCuRYchgZBVrzZDqznMKGZdqQVCaS8Fy%2FKoAU7JO7mMTBE8hiE5YIQpYEyL4fIfH3FouXpbXgj2nmuhRHLCzKQ74fr50omX384OUHf5JXAGyP1zbea3kMNVuSabW%2BV5SZtdfM1S1WiuIBzY85Vim%2FpG3RG2cY6ygs74AY8LFnp%2FV5P2cP4BYqBw7h022Mum57TU4ATUpQBMGu%2BwvPn0nY63Pde7VexVnjE%2Fs63%2FewKl%2B%2By%2Fda1nTNKmTOl2Wk8HVO9gtD0eAojXebPsAzU0lX0UxsAHAKYLDkEwAHNnNuKUBO1ggbMLuI7EY9ya4kAbUh2iaWPg43Us3e%2B9%2BH9SHYtNpmOunLVM1I9niYsWoavOGlxvsBILVzqmJ5Hb6WOM4cuvkMbbPB44GCUBtVWf8EtEjh2zDhptjEBjqkAVJ%2FAK7m6vGei0RdLuCD88joxqCyLBjZ0jLb1xB2aDGZBXhPVsNLjFxIBcF0q2vFEGyqieikc0T5n4Bs%2F0jPRXllqI8o5JgNJ9rVmLHZHhaSjPrrFZtdXoGP8NfgKzOYK1VPoDduHorQgsL%2B9wiieptUYV9cO3ezhQEpUS0ySPkrUsQqJBgxO%2BC5STzT1MYMKVdQP%2B4n0xMAxNiW1CtnpJkHwW%2FL&X-Amz-Signature=3f107517fa1faf7ba3cda6fae1d567628ea565d0416fbb8121681e08c24d4bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5FJR64%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDErmA2GzEWMvmZWstZnxOt5lvyonX6AVbQE%2BoOfdZfawIhAL4YV972cNXVk7p2k3razEjq5FKrXSs8y9B9a%2F9OMGMzKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKAG1BgDn15ZonYmgq3ANClssYyXYPtfhn%2BTkS3ogM5Hhfjf1xr5GUcd5BklZ4OOMwnq7qmv2yziGYjNSn2BjfzM%2FVT35O%2B1YZgjank%2FmALtW5Kq55PjxoYjrfVAKMETxcP23Vkbze6VNgboGsOznOp2YEUxohPv8DufCa9kN1ZSFYMCmg6aSR6pSkCulKZ1WE0XossJ5T%2F8zyQnjjgoG1goR4Q1aAy856Sqb8yQpX0aBhBHrhODBhCuRYchgZBVrzZDqznMKGZdqQVCaS8Fy%2FKoAU7JO7mMTBE8hiE5YIQpYEyL4fIfH3FouXpbXgj2nmuhRHLCzKQ74fr50omX384OUHf5JXAGyP1zbea3kMNVuSabW%2BV5SZtdfM1S1WiuIBzY85Vim%2FpG3RG2cY6ygs74AY8LFnp%2FV5P2cP4BYqBw7h022Mum57TU4ATUpQBMGu%2BwvPn0nY63Pde7VexVnjE%2Fs63%2FewKl%2B%2By%2Fda1nTNKmTOl2Wk8HVO9gtD0eAojXebPsAzU0lX0UxsAHAKYLDkEwAHNnNuKUBO1ggbMLuI7EY9ya4kAbUh2iaWPg43Us3e%2B9%2BH9SHYtNpmOunLVM1I9niYsWoavOGlxvsBILVzqmJ5Hb6WOM4cuvkMbbPB44GCUBtVWf8EtEjh2zDhptjEBjqkAVJ%2FAK7m6vGei0RdLuCD88joxqCyLBjZ0jLb1xB2aDGZBXhPVsNLjFxIBcF0q2vFEGyqieikc0T5n4Bs%2F0jPRXllqI8o5JgNJ9rVmLHZHhaSjPrrFZtdXoGP8NfgKzOYK1VPoDduHorQgsL%2B9wiieptUYV9cO3ezhQEpUS0ySPkrUsQqJBgxO%2BC5STzT1MYMKVdQP%2B4n0xMAxNiW1CtnpJkHwW%2FL&X-Amz-Signature=c0123eace735ea095c68a6fe3d377f584bba69cebfb24acc7beb187992a3be15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
