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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFYHTTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEZn%2FA1vSG%2BeahebrTxa5grZgjgccvjAVgFpWhQigi%2BwIhAO3fixEOq2U3L0vwDmb3UvpxXMjdr4CROcv9t6Z75EIaKv8DCBsQABoMNjM3NDIzMTgzODA1Igy%2FRygyzKF5wtNk1H4q3ANnMwXbthbnOtHh%2Fa1ElGje81QUWL6JBsm8CRDY85afwkHfDMTOiW7dtz3z62v%2FBSuCB2h%2FJpecY4v9vyIgpcKCLYT1hT1%2B6CutMUcphcEtNBg3UUfJkxqokSXyGARPyJlGWfgZ1BVnwBDu%2BslamvjqurxruWRY5XqqL%2FuwrK37DnRFpNaav%2Bwd5BTWTN1iwPxX79VwEVfPvrM3o8jLCu%2Bs1ud2c4zZjisQxiUOqr29nk%2Bjac9tHLeqI32Vfa24olc7y97GdNN%2FJeg60sT6wBlzIMnvn2%2B3B9YMpzYps6ZvdKYxL%2FaeZZClW0%2BF3%2BqSqV3fMrWk38CzxABv9PQlRub2%2FTqnjWbifSa%2F7MksRRc3uZ6%2BzZyaiZcUGLQPmX%2B3sAzTY6kKAsyxVCwBjpTnEEXHzZsr%2FY4gjcuDLfFUB3Bqjd16xvhLk4YCECkpwQq7jj0ZwSdSTKD6o%2BxV%2FzRDFw2VNZj8dJorYA8JOyq2m8NPCJKB9iJ6GN1w%2Fz39JE1szXzvJEL2J88IhLnEMMQ1zWs4HtdyXhQmAATCMXgThF1Zf5LuwM5X3OrbD%2BWfrJl4xVC%2FUQQ27h7uML%2B9kHOvE2nioXMKosrxNCRwpqok7UjdeGnnYeCwGVYtM%2Bw6VDDfnrnEBjqkARhbWt8Y23vWfNIacNWXtGx68FmaMt5EcgnuWFUIsT2AUl1Ngz2RRDDMwnUK%2BUHyXEWXGi2x6RrSW2%2FwDHf6q%2F5sraRXM6XbyFRB4DOQzhadcqbFpxyvOqLAvHNkaqQuKhz17EXPfYKSNjiHQhlFyg3HEOECw0fDe%2FjkcodkFlxdYoqBq%2FMafZ6rJI2VTX04PatMbZIXquI6jnY0OWkxuT17vlL8&X-Amz-Signature=7de1ec9ab2667bc56c77707211e66f7540ea13a3ec8232e8ede5e05f0d055613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFYHTTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEZn%2FA1vSG%2BeahebrTxa5grZgjgccvjAVgFpWhQigi%2BwIhAO3fixEOq2U3L0vwDmb3UvpxXMjdr4CROcv9t6Z75EIaKv8DCBsQABoMNjM3NDIzMTgzODA1Igy%2FRygyzKF5wtNk1H4q3ANnMwXbthbnOtHh%2Fa1ElGje81QUWL6JBsm8CRDY85afwkHfDMTOiW7dtz3z62v%2FBSuCB2h%2FJpecY4v9vyIgpcKCLYT1hT1%2B6CutMUcphcEtNBg3UUfJkxqokSXyGARPyJlGWfgZ1BVnwBDu%2BslamvjqurxruWRY5XqqL%2FuwrK37DnRFpNaav%2Bwd5BTWTN1iwPxX79VwEVfPvrM3o8jLCu%2Bs1ud2c4zZjisQxiUOqr29nk%2Bjac9tHLeqI32Vfa24olc7y97GdNN%2FJeg60sT6wBlzIMnvn2%2B3B9YMpzYps6ZvdKYxL%2FaeZZClW0%2BF3%2BqSqV3fMrWk38CzxABv9PQlRub2%2FTqnjWbifSa%2F7MksRRc3uZ6%2BzZyaiZcUGLQPmX%2B3sAzTY6kKAsyxVCwBjpTnEEXHzZsr%2FY4gjcuDLfFUB3Bqjd16xvhLk4YCECkpwQq7jj0ZwSdSTKD6o%2BxV%2FzRDFw2VNZj8dJorYA8JOyq2m8NPCJKB9iJ6GN1w%2Fz39JE1szXzvJEL2J88IhLnEMMQ1zWs4HtdyXhQmAATCMXgThF1Zf5LuwM5X3OrbD%2BWfrJl4xVC%2FUQQ27h7uML%2B9kHOvE2nioXMKosrxNCRwpqok7UjdeGnnYeCwGVYtM%2Bw6VDDfnrnEBjqkARhbWt8Y23vWfNIacNWXtGx68FmaMt5EcgnuWFUIsT2AUl1Ngz2RRDDMwnUK%2BUHyXEWXGi2x6RrSW2%2FwDHf6q%2F5sraRXM6XbyFRB4DOQzhadcqbFpxyvOqLAvHNkaqQuKhz17EXPfYKSNjiHQhlFyg3HEOECw0fDe%2FjkcodkFlxdYoqBq%2FMafZ6rJI2VTX04PatMbZIXquI6jnY0OWkxuT17vlL8&X-Amz-Signature=5b3c099e71b2ef17d779216f9159839d9746a918b7efe95e0d60b73035b84541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFYHTTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEZn%2FA1vSG%2BeahebrTxa5grZgjgccvjAVgFpWhQigi%2BwIhAO3fixEOq2U3L0vwDmb3UvpxXMjdr4CROcv9t6Z75EIaKv8DCBsQABoMNjM3NDIzMTgzODA1Igy%2FRygyzKF5wtNk1H4q3ANnMwXbthbnOtHh%2Fa1ElGje81QUWL6JBsm8CRDY85afwkHfDMTOiW7dtz3z62v%2FBSuCB2h%2FJpecY4v9vyIgpcKCLYT1hT1%2B6CutMUcphcEtNBg3UUfJkxqokSXyGARPyJlGWfgZ1BVnwBDu%2BslamvjqurxruWRY5XqqL%2FuwrK37DnRFpNaav%2Bwd5BTWTN1iwPxX79VwEVfPvrM3o8jLCu%2Bs1ud2c4zZjisQxiUOqr29nk%2Bjac9tHLeqI32Vfa24olc7y97GdNN%2FJeg60sT6wBlzIMnvn2%2B3B9YMpzYps6ZvdKYxL%2FaeZZClW0%2BF3%2BqSqV3fMrWk38CzxABv9PQlRub2%2FTqnjWbifSa%2F7MksRRc3uZ6%2BzZyaiZcUGLQPmX%2B3sAzTY6kKAsyxVCwBjpTnEEXHzZsr%2FY4gjcuDLfFUB3Bqjd16xvhLk4YCECkpwQq7jj0ZwSdSTKD6o%2BxV%2FzRDFw2VNZj8dJorYA8JOyq2m8NPCJKB9iJ6GN1w%2Fz39JE1szXzvJEL2J88IhLnEMMQ1zWs4HtdyXhQmAATCMXgThF1Zf5LuwM5X3OrbD%2BWfrJl4xVC%2FUQQ27h7uML%2B9kHOvE2nioXMKosrxNCRwpqok7UjdeGnnYeCwGVYtM%2Bw6VDDfnrnEBjqkARhbWt8Y23vWfNIacNWXtGx68FmaMt5EcgnuWFUIsT2AUl1Ngz2RRDDMwnUK%2BUHyXEWXGi2x6RrSW2%2FwDHf6q%2F5sraRXM6XbyFRB4DOQzhadcqbFpxyvOqLAvHNkaqQuKhz17EXPfYKSNjiHQhlFyg3HEOECw0fDe%2FjkcodkFlxdYoqBq%2FMafZ6rJI2VTX04PatMbZIXquI6jnY0OWkxuT17vlL8&X-Amz-Signature=af0ff7d92b52cb9d4c7cb836ca10f0b97da771dbf73eed3b752e773e91361b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFYHTTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEZn%2FA1vSG%2BeahebrTxa5grZgjgccvjAVgFpWhQigi%2BwIhAO3fixEOq2U3L0vwDmb3UvpxXMjdr4CROcv9t6Z75EIaKv8DCBsQABoMNjM3NDIzMTgzODA1Igy%2FRygyzKF5wtNk1H4q3ANnMwXbthbnOtHh%2Fa1ElGje81QUWL6JBsm8CRDY85afwkHfDMTOiW7dtz3z62v%2FBSuCB2h%2FJpecY4v9vyIgpcKCLYT1hT1%2B6CutMUcphcEtNBg3UUfJkxqokSXyGARPyJlGWfgZ1BVnwBDu%2BslamvjqurxruWRY5XqqL%2FuwrK37DnRFpNaav%2Bwd5BTWTN1iwPxX79VwEVfPvrM3o8jLCu%2Bs1ud2c4zZjisQxiUOqr29nk%2Bjac9tHLeqI32Vfa24olc7y97GdNN%2FJeg60sT6wBlzIMnvn2%2B3B9YMpzYps6ZvdKYxL%2FaeZZClW0%2BF3%2BqSqV3fMrWk38CzxABv9PQlRub2%2FTqnjWbifSa%2F7MksRRc3uZ6%2BzZyaiZcUGLQPmX%2B3sAzTY6kKAsyxVCwBjpTnEEXHzZsr%2FY4gjcuDLfFUB3Bqjd16xvhLk4YCECkpwQq7jj0ZwSdSTKD6o%2BxV%2FzRDFw2VNZj8dJorYA8JOyq2m8NPCJKB9iJ6GN1w%2Fz39JE1szXzvJEL2J88IhLnEMMQ1zWs4HtdyXhQmAATCMXgThF1Zf5LuwM5X3OrbD%2BWfrJl4xVC%2FUQQ27h7uML%2B9kHOvE2nioXMKosrxNCRwpqok7UjdeGnnYeCwGVYtM%2Bw6VDDfnrnEBjqkARhbWt8Y23vWfNIacNWXtGx68FmaMt5EcgnuWFUIsT2AUl1Ngz2RRDDMwnUK%2BUHyXEWXGi2x6RrSW2%2FwDHf6q%2F5sraRXM6XbyFRB4DOQzhadcqbFpxyvOqLAvHNkaqQuKhz17EXPfYKSNjiHQhlFyg3HEOECw0fDe%2FjkcodkFlxdYoqBq%2FMafZ6rJI2VTX04PatMbZIXquI6jnY0OWkxuT17vlL8&X-Amz-Signature=b408640f04658bb0188a23b8621f7ac90a0f69edbf0e6d2ab4141db33b697eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFYHTTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEZn%2FA1vSG%2BeahebrTxa5grZgjgccvjAVgFpWhQigi%2BwIhAO3fixEOq2U3L0vwDmb3UvpxXMjdr4CROcv9t6Z75EIaKv8DCBsQABoMNjM3NDIzMTgzODA1Igy%2FRygyzKF5wtNk1H4q3ANnMwXbthbnOtHh%2Fa1ElGje81QUWL6JBsm8CRDY85afwkHfDMTOiW7dtz3z62v%2FBSuCB2h%2FJpecY4v9vyIgpcKCLYT1hT1%2B6CutMUcphcEtNBg3UUfJkxqokSXyGARPyJlGWfgZ1BVnwBDu%2BslamvjqurxruWRY5XqqL%2FuwrK37DnRFpNaav%2Bwd5BTWTN1iwPxX79VwEVfPvrM3o8jLCu%2Bs1ud2c4zZjisQxiUOqr29nk%2Bjac9tHLeqI32Vfa24olc7y97GdNN%2FJeg60sT6wBlzIMnvn2%2B3B9YMpzYps6ZvdKYxL%2FaeZZClW0%2BF3%2BqSqV3fMrWk38CzxABv9PQlRub2%2FTqnjWbifSa%2F7MksRRc3uZ6%2BzZyaiZcUGLQPmX%2B3sAzTY6kKAsyxVCwBjpTnEEXHzZsr%2FY4gjcuDLfFUB3Bqjd16xvhLk4YCECkpwQq7jj0ZwSdSTKD6o%2BxV%2FzRDFw2VNZj8dJorYA8JOyq2m8NPCJKB9iJ6GN1w%2Fz39JE1szXzvJEL2J88IhLnEMMQ1zWs4HtdyXhQmAATCMXgThF1Zf5LuwM5X3OrbD%2BWfrJl4xVC%2FUQQ27h7uML%2B9kHOvE2nioXMKosrxNCRwpqok7UjdeGnnYeCwGVYtM%2Bw6VDDfnrnEBjqkARhbWt8Y23vWfNIacNWXtGx68FmaMt5EcgnuWFUIsT2AUl1Ngz2RRDDMwnUK%2BUHyXEWXGi2x6RrSW2%2FwDHf6q%2F5sraRXM6XbyFRB4DOQzhadcqbFpxyvOqLAvHNkaqQuKhz17EXPfYKSNjiHQhlFyg3HEOECw0fDe%2FjkcodkFlxdYoqBq%2FMafZ6rJI2VTX04PatMbZIXquI6jnY0OWkxuT17vlL8&X-Amz-Signature=398693d2335178ccdecbbb2bd6c2927bbf63ca18cba08e49317818494449e70e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFYHTTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEZn%2FA1vSG%2BeahebrTxa5grZgjgccvjAVgFpWhQigi%2BwIhAO3fixEOq2U3L0vwDmb3UvpxXMjdr4CROcv9t6Z75EIaKv8DCBsQABoMNjM3NDIzMTgzODA1Igy%2FRygyzKF5wtNk1H4q3ANnMwXbthbnOtHh%2Fa1ElGje81QUWL6JBsm8CRDY85afwkHfDMTOiW7dtz3z62v%2FBSuCB2h%2FJpecY4v9vyIgpcKCLYT1hT1%2B6CutMUcphcEtNBg3UUfJkxqokSXyGARPyJlGWfgZ1BVnwBDu%2BslamvjqurxruWRY5XqqL%2FuwrK37DnRFpNaav%2Bwd5BTWTN1iwPxX79VwEVfPvrM3o8jLCu%2Bs1ud2c4zZjisQxiUOqr29nk%2Bjac9tHLeqI32Vfa24olc7y97GdNN%2FJeg60sT6wBlzIMnvn2%2B3B9YMpzYps6ZvdKYxL%2FaeZZClW0%2BF3%2BqSqV3fMrWk38CzxABv9PQlRub2%2FTqnjWbifSa%2F7MksRRc3uZ6%2BzZyaiZcUGLQPmX%2B3sAzTY6kKAsyxVCwBjpTnEEXHzZsr%2FY4gjcuDLfFUB3Bqjd16xvhLk4YCECkpwQq7jj0ZwSdSTKD6o%2BxV%2FzRDFw2VNZj8dJorYA8JOyq2m8NPCJKB9iJ6GN1w%2Fz39JE1szXzvJEL2J88IhLnEMMQ1zWs4HtdyXhQmAATCMXgThF1Zf5LuwM5X3OrbD%2BWfrJl4xVC%2FUQQ27h7uML%2B9kHOvE2nioXMKosrxNCRwpqok7UjdeGnnYeCwGVYtM%2Bw6VDDfnrnEBjqkARhbWt8Y23vWfNIacNWXtGx68FmaMt5EcgnuWFUIsT2AUl1Ngz2RRDDMwnUK%2BUHyXEWXGi2x6RrSW2%2FwDHf6q%2F5sraRXM6XbyFRB4DOQzhadcqbFpxyvOqLAvHNkaqQuKhz17EXPfYKSNjiHQhlFyg3HEOECw0fDe%2FjkcodkFlxdYoqBq%2FMafZ6rJI2VTX04PatMbZIXquI6jnY0OWkxuT17vlL8&X-Amz-Signature=15b68d48441ea19500771133b40552dd0accaf12e73e7aca21722ea8fbfbe329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFYHTTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEZn%2FA1vSG%2BeahebrTxa5grZgjgccvjAVgFpWhQigi%2BwIhAO3fixEOq2U3L0vwDmb3UvpxXMjdr4CROcv9t6Z75EIaKv8DCBsQABoMNjM3NDIzMTgzODA1Igy%2FRygyzKF5wtNk1H4q3ANnMwXbthbnOtHh%2Fa1ElGje81QUWL6JBsm8CRDY85afwkHfDMTOiW7dtz3z62v%2FBSuCB2h%2FJpecY4v9vyIgpcKCLYT1hT1%2B6CutMUcphcEtNBg3UUfJkxqokSXyGARPyJlGWfgZ1BVnwBDu%2BslamvjqurxruWRY5XqqL%2FuwrK37DnRFpNaav%2Bwd5BTWTN1iwPxX79VwEVfPvrM3o8jLCu%2Bs1ud2c4zZjisQxiUOqr29nk%2Bjac9tHLeqI32Vfa24olc7y97GdNN%2FJeg60sT6wBlzIMnvn2%2B3B9YMpzYps6ZvdKYxL%2FaeZZClW0%2BF3%2BqSqV3fMrWk38CzxABv9PQlRub2%2FTqnjWbifSa%2F7MksRRc3uZ6%2BzZyaiZcUGLQPmX%2B3sAzTY6kKAsyxVCwBjpTnEEXHzZsr%2FY4gjcuDLfFUB3Bqjd16xvhLk4YCECkpwQq7jj0ZwSdSTKD6o%2BxV%2FzRDFw2VNZj8dJorYA8JOyq2m8NPCJKB9iJ6GN1w%2Fz39JE1szXzvJEL2J88IhLnEMMQ1zWs4HtdyXhQmAATCMXgThF1Zf5LuwM5X3OrbD%2BWfrJl4xVC%2FUQQ27h7uML%2B9kHOvE2nioXMKosrxNCRwpqok7UjdeGnnYeCwGVYtM%2Bw6VDDfnrnEBjqkARhbWt8Y23vWfNIacNWXtGx68FmaMt5EcgnuWFUIsT2AUl1Ngz2RRDDMwnUK%2BUHyXEWXGi2x6RrSW2%2FwDHf6q%2F5sraRXM6XbyFRB4DOQzhadcqbFpxyvOqLAvHNkaqQuKhz17EXPfYKSNjiHQhlFyg3HEOECw0fDe%2FjkcodkFlxdYoqBq%2FMafZ6rJI2VTX04PatMbZIXquI6jnY0OWkxuT17vlL8&X-Amz-Signature=24134bccd4a8c097285e117a8e1dcb0baf79dbdd5357768cc082c58772e35ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFYHTTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEZn%2FA1vSG%2BeahebrTxa5grZgjgccvjAVgFpWhQigi%2BwIhAO3fixEOq2U3L0vwDmb3UvpxXMjdr4CROcv9t6Z75EIaKv8DCBsQABoMNjM3NDIzMTgzODA1Igy%2FRygyzKF5wtNk1H4q3ANnMwXbthbnOtHh%2Fa1ElGje81QUWL6JBsm8CRDY85afwkHfDMTOiW7dtz3z62v%2FBSuCB2h%2FJpecY4v9vyIgpcKCLYT1hT1%2B6CutMUcphcEtNBg3UUfJkxqokSXyGARPyJlGWfgZ1BVnwBDu%2BslamvjqurxruWRY5XqqL%2FuwrK37DnRFpNaav%2Bwd5BTWTN1iwPxX79VwEVfPvrM3o8jLCu%2Bs1ud2c4zZjisQxiUOqr29nk%2Bjac9tHLeqI32Vfa24olc7y97GdNN%2FJeg60sT6wBlzIMnvn2%2B3B9YMpzYps6ZvdKYxL%2FaeZZClW0%2BF3%2BqSqV3fMrWk38CzxABv9PQlRub2%2FTqnjWbifSa%2F7MksRRc3uZ6%2BzZyaiZcUGLQPmX%2B3sAzTY6kKAsyxVCwBjpTnEEXHzZsr%2FY4gjcuDLfFUB3Bqjd16xvhLk4YCECkpwQq7jj0ZwSdSTKD6o%2BxV%2FzRDFw2VNZj8dJorYA8JOyq2m8NPCJKB9iJ6GN1w%2Fz39JE1szXzvJEL2J88IhLnEMMQ1zWs4HtdyXhQmAATCMXgThF1Zf5LuwM5X3OrbD%2BWfrJl4xVC%2FUQQ27h7uML%2B9kHOvE2nioXMKosrxNCRwpqok7UjdeGnnYeCwGVYtM%2Bw6VDDfnrnEBjqkARhbWt8Y23vWfNIacNWXtGx68FmaMt5EcgnuWFUIsT2AUl1Ngz2RRDDMwnUK%2BUHyXEWXGi2x6RrSW2%2FwDHf6q%2F5sraRXM6XbyFRB4DOQzhadcqbFpxyvOqLAvHNkaqQuKhz17EXPfYKSNjiHQhlFyg3HEOECw0fDe%2FjkcodkFlxdYoqBq%2FMafZ6rJI2VTX04PatMbZIXquI6jnY0OWkxuT17vlL8&X-Amz-Signature=529203538e86ae27219295f5e0445a9c6b019932777998736326b282c9989853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFYHTTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEZn%2FA1vSG%2BeahebrTxa5grZgjgccvjAVgFpWhQigi%2BwIhAO3fixEOq2U3L0vwDmb3UvpxXMjdr4CROcv9t6Z75EIaKv8DCBsQABoMNjM3NDIzMTgzODA1Igy%2FRygyzKF5wtNk1H4q3ANnMwXbthbnOtHh%2Fa1ElGje81QUWL6JBsm8CRDY85afwkHfDMTOiW7dtz3z62v%2FBSuCB2h%2FJpecY4v9vyIgpcKCLYT1hT1%2B6CutMUcphcEtNBg3UUfJkxqokSXyGARPyJlGWfgZ1BVnwBDu%2BslamvjqurxruWRY5XqqL%2FuwrK37DnRFpNaav%2Bwd5BTWTN1iwPxX79VwEVfPvrM3o8jLCu%2Bs1ud2c4zZjisQxiUOqr29nk%2Bjac9tHLeqI32Vfa24olc7y97GdNN%2FJeg60sT6wBlzIMnvn2%2B3B9YMpzYps6ZvdKYxL%2FaeZZClW0%2BF3%2BqSqV3fMrWk38CzxABv9PQlRub2%2FTqnjWbifSa%2F7MksRRc3uZ6%2BzZyaiZcUGLQPmX%2B3sAzTY6kKAsyxVCwBjpTnEEXHzZsr%2FY4gjcuDLfFUB3Bqjd16xvhLk4YCECkpwQq7jj0ZwSdSTKD6o%2BxV%2FzRDFw2VNZj8dJorYA8JOyq2m8NPCJKB9iJ6GN1w%2Fz39JE1szXzvJEL2J88IhLnEMMQ1zWs4HtdyXhQmAATCMXgThF1Zf5LuwM5X3OrbD%2BWfrJl4xVC%2FUQQ27h7uML%2B9kHOvE2nioXMKosrxNCRwpqok7UjdeGnnYeCwGVYtM%2Bw6VDDfnrnEBjqkARhbWt8Y23vWfNIacNWXtGx68FmaMt5EcgnuWFUIsT2AUl1Ngz2RRDDMwnUK%2BUHyXEWXGi2x6RrSW2%2FwDHf6q%2F5sraRXM6XbyFRB4DOQzhadcqbFpxyvOqLAvHNkaqQuKhz17EXPfYKSNjiHQhlFyg3HEOECw0fDe%2FjkcodkFlxdYoqBq%2FMafZ6rJI2VTX04PatMbZIXquI6jnY0OWkxuT17vlL8&X-Amz-Signature=90ea53ecb651e547313538d634922ce3e995b33079e499cff637a6140c45894e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFYHTTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEZn%2FA1vSG%2BeahebrTxa5grZgjgccvjAVgFpWhQigi%2BwIhAO3fixEOq2U3L0vwDmb3UvpxXMjdr4CROcv9t6Z75EIaKv8DCBsQABoMNjM3NDIzMTgzODA1Igy%2FRygyzKF5wtNk1H4q3ANnMwXbthbnOtHh%2Fa1ElGje81QUWL6JBsm8CRDY85afwkHfDMTOiW7dtz3z62v%2FBSuCB2h%2FJpecY4v9vyIgpcKCLYT1hT1%2B6CutMUcphcEtNBg3UUfJkxqokSXyGARPyJlGWfgZ1BVnwBDu%2BslamvjqurxruWRY5XqqL%2FuwrK37DnRFpNaav%2Bwd5BTWTN1iwPxX79VwEVfPvrM3o8jLCu%2Bs1ud2c4zZjisQxiUOqr29nk%2Bjac9tHLeqI32Vfa24olc7y97GdNN%2FJeg60sT6wBlzIMnvn2%2B3B9YMpzYps6ZvdKYxL%2FaeZZClW0%2BF3%2BqSqV3fMrWk38CzxABv9PQlRub2%2FTqnjWbifSa%2F7MksRRc3uZ6%2BzZyaiZcUGLQPmX%2B3sAzTY6kKAsyxVCwBjpTnEEXHzZsr%2FY4gjcuDLfFUB3Bqjd16xvhLk4YCECkpwQq7jj0ZwSdSTKD6o%2BxV%2FzRDFw2VNZj8dJorYA8JOyq2m8NPCJKB9iJ6GN1w%2Fz39JE1szXzvJEL2J88IhLnEMMQ1zWs4HtdyXhQmAATCMXgThF1Zf5LuwM5X3OrbD%2BWfrJl4xVC%2FUQQ27h7uML%2B9kHOvE2nioXMKosrxNCRwpqok7UjdeGnnYeCwGVYtM%2Bw6VDDfnrnEBjqkARhbWt8Y23vWfNIacNWXtGx68FmaMt5EcgnuWFUIsT2AUl1Ngz2RRDDMwnUK%2BUHyXEWXGi2x6RrSW2%2FwDHf6q%2F5sraRXM6XbyFRB4DOQzhadcqbFpxyvOqLAvHNkaqQuKhz17EXPfYKSNjiHQhlFyg3HEOECw0fDe%2FjkcodkFlxdYoqBq%2FMafZ6rJI2VTX04PatMbZIXquI6jnY0OWkxuT17vlL8&X-Amz-Signature=2a1f66f38ffb5b926e21648fe9d0880282c666e2b789918a02d9a2b95c78c780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFYHTTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEZn%2FA1vSG%2BeahebrTxa5grZgjgccvjAVgFpWhQigi%2BwIhAO3fixEOq2U3L0vwDmb3UvpxXMjdr4CROcv9t6Z75EIaKv8DCBsQABoMNjM3NDIzMTgzODA1Igy%2FRygyzKF5wtNk1H4q3ANnMwXbthbnOtHh%2Fa1ElGje81QUWL6JBsm8CRDY85afwkHfDMTOiW7dtz3z62v%2FBSuCB2h%2FJpecY4v9vyIgpcKCLYT1hT1%2B6CutMUcphcEtNBg3UUfJkxqokSXyGARPyJlGWfgZ1BVnwBDu%2BslamvjqurxruWRY5XqqL%2FuwrK37DnRFpNaav%2Bwd5BTWTN1iwPxX79VwEVfPvrM3o8jLCu%2Bs1ud2c4zZjisQxiUOqr29nk%2Bjac9tHLeqI32Vfa24olc7y97GdNN%2FJeg60sT6wBlzIMnvn2%2B3B9YMpzYps6ZvdKYxL%2FaeZZClW0%2BF3%2BqSqV3fMrWk38CzxABv9PQlRub2%2FTqnjWbifSa%2F7MksRRc3uZ6%2BzZyaiZcUGLQPmX%2B3sAzTY6kKAsyxVCwBjpTnEEXHzZsr%2FY4gjcuDLfFUB3Bqjd16xvhLk4YCECkpwQq7jj0ZwSdSTKD6o%2BxV%2FzRDFw2VNZj8dJorYA8JOyq2m8NPCJKB9iJ6GN1w%2Fz39JE1szXzvJEL2J88IhLnEMMQ1zWs4HtdyXhQmAATCMXgThF1Zf5LuwM5X3OrbD%2BWfrJl4xVC%2FUQQ27h7uML%2B9kHOvE2nioXMKosrxNCRwpqok7UjdeGnnYeCwGVYtM%2Bw6VDDfnrnEBjqkARhbWt8Y23vWfNIacNWXtGx68FmaMt5EcgnuWFUIsT2AUl1Ngz2RRDDMwnUK%2BUHyXEWXGi2x6RrSW2%2FwDHf6q%2F5sraRXM6XbyFRB4DOQzhadcqbFpxyvOqLAvHNkaqQuKhz17EXPfYKSNjiHQhlFyg3HEOECw0fDe%2FjkcodkFlxdYoqBq%2FMafZ6rJI2VTX04PatMbZIXquI6jnY0OWkxuT17vlL8&X-Amz-Signature=bfcf13d086e94819cbb7ea3e0516158d110cc29627f18ffb35e592edebf976a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFYHTTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEZn%2FA1vSG%2BeahebrTxa5grZgjgccvjAVgFpWhQigi%2BwIhAO3fixEOq2U3L0vwDmb3UvpxXMjdr4CROcv9t6Z75EIaKv8DCBsQABoMNjM3NDIzMTgzODA1Igy%2FRygyzKF5wtNk1H4q3ANnMwXbthbnOtHh%2Fa1ElGje81QUWL6JBsm8CRDY85afwkHfDMTOiW7dtz3z62v%2FBSuCB2h%2FJpecY4v9vyIgpcKCLYT1hT1%2B6CutMUcphcEtNBg3UUfJkxqokSXyGARPyJlGWfgZ1BVnwBDu%2BslamvjqurxruWRY5XqqL%2FuwrK37DnRFpNaav%2Bwd5BTWTN1iwPxX79VwEVfPvrM3o8jLCu%2Bs1ud2c4zZjisQxiUOqr29nk%2Bjac9tHLeqI32Vfa24olc7y97GdNN%2FJeg60sT6wBlzIMnvn2%2B3B9YMpzYps6ZvdKYxL%2FaeZZClW0%2BF3%2BqSqV3fMrWk38CzxABv9PQlRub2%2FTqnjWbifSa%2F7MksRRc3uZ6%2BzZyaiZcUGLQPmX%2B3sAzTY6kKAsyxVCwBjpTnEEXHzZsr%2FY4gjcuDLfFUB3Bqjd16xvhLk4YCECkpwQq7jj0ZwSdSTKD6o%2BxV%2FzRDFw2VNZj8dJorYA8JOyq2m8NPCJKB9iJ6GN1w%2Fz39JE1szXzvJEL2J88IhLnEMMQ1zWs4HtdyXhQmAATCMXgThF1Zf5LuwM5X3OrbD%2BWfrJl4xVC%2FUQQ27h7uML%2B9kHOvE2nioXMKosrxNCRwpqok7UjdeGnnYeCwGVYtM%2Bw6VDDfnrnEBjqkARhbWt8Y23vWfNIacNWXtGx68FmaMt5EcgnuWFUIsT2AUl1Ngz2RRDDMwnUK%2BUHyXEWXGi2x6RrSW2%2FwDHf6q%2F5sraRXM6XbyFRB4DOQzhadcqbFpxyvOqLAvHNkaqQuKhz17EXPfYKSNjiHQhlFyg3HEOECw0fDe%2FjkcodkFlxdYoqBq%2FMafZ6rJI2VTX04PatMbZIXquI6jnY0OWkxuT17vlL8&X-Amz-Signature=4a075a608b998cd667fb37a15d0df9e0510844ff0f4c6c87e562bbb240eb7b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFYHTTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEZn%2FA1vSG%2BeahebrTxa5grZgjgccvjAVgFpWhQigi%2BwIhAO3fixEOq2U3L0vwDmb3UvpxXMjdr4CROcv9t6Z75EIaKv8DCBsQABoMNjM3NDIzMTgzODA1Igy%2FRygyzKF5wtNk1H4q3ANnMwXbthbnOtHh%2Fa1ElGje81QUWL6JBsm8CRDY85afwkHfDMTOiW7dtz3z62v%2FBSuCB2h%2FJpecY4v9vyIgpcKCLYT1hT1%2B6CutMUcphcEtNBg3UUfJkxqokSXyGARPyJlGWfgZ1BVnwBDu%2BslamvjqurxruWRY5XqqL%2FuwrK37DnRFpNaav%2Bwd5BTWTN1iwPxX79VwEVfPvrM3o8jLCu%2Bs1ud2c4zZjisQxiUOqr29nk%2Bjac9tHLeqI32Vfa24olc7y97GdNN%2FJeg60sT6wBlzIMnvn2%2B3B9YMpzYps6ZvdKYxL%2FaeZZClW0%2BF3%2BqSqV3fMrWk38CzxABv9PQlRub2%2FTqnjWbifSa%2F7MksRRc3uZ6%2BzZyaiZcUGLQPmX%2B3sAzTY6kKAsyxVCwBjpTnEEXHzZsr%2FY4gjcuDLfFUB3Bqjd16xvhLk4YCECkpwQq7jj0ZwSdSTKD6o%2BxV%2FzRDFw2VNZj8dJorYA8JOyq2m8NPCJKB9iJ6GN1w%2Fz39JE1szXzvJEL2J88IhLnEMMQ1zWs4HtdyXhQmAATCMXgThF1Zf5LuwM5X3OrbD%2BWfrJl4xVC%2FUQQ27h7uML%2B9kHOvE2nioXMKosrxNCRwpqok7UjdeGnnYeCwGVYtM%2Bw6VDDfnrnEBjqkARhbWt8Y23vWfNIacNWXtGx68FmaMt5EcgnuWFUIsT2AUl1Ngz2RRDDMwnUK%2BUHyXEWXGi2x6RrSW2%2FwDHf6q%2F5sraRXM6XbyFRB4DOQzhadcqbFpxyvOqLAvHNkaqQuKhz17EXPfYKSNjiHQhlFyg3HEOECw0fDe%2FjkcodkFlxdYoqBq%2FMafZ6rJI2VTX04PatMbZIXquI6jnY0OWkxuT17vlL8&X-Amz-Signature=c73012c09b67f809101e741a784c4c08a58ecda09eb474291b29e8f08dfb20bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOFYHTTN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEZn%2FA1vSG%2BeahebrTxa5grZgjgccvjAVgFpWhQigi%2BwIhAO3fixEOq2U3L0vwDmb3UvpxXMjdr4CROcv9t6Z75EIaKv8DCBsQABoMNjM3NDIzMTgzODA1Igy%2FRygyzKF5wtNk1H4q3ANnMwXbthbnOtHh%2Fa1ElGje81QUWL6JBsm8CRDY85afwkHfDMTOiW7dtz3z62v%2FBSuCB2h%2FJpecY4v9vyIgpcKCLYT1hT1%2B6CutMUcphcEtNBg3UUfJkxqokSXyGARPyJlGWfgZ1BVnwBDu%2BslamvjqurxruWRY5XqqL%2FuwrK37DnRFpNaav%2Bwd5BTWTN1iwPxX79VwEVfPvrM3o8jLCu%2Bs1ud2c4zZjisQxiUOqr29nk%2Bjac9tHLeqI32Vfa24olc7y97GdNN%2FJeg60sT6wBlzIMnvn2%2B3B9YMpzYps6ZvdKYxL%2FaeZZClW0%2BF3%2BqSqV3fMrWk38CzxABv9PQlRub2%2FTqnjWbifSa%2F7MksRRc3uZ6%2BzZyaiZcUGLQPmX%2B3sAzTY6kKAsyxVCwBjpTnEEXHzZsr%2FY4gjcuDLfFUB3Bqjd16xvhLk4YCECkpwQq7jj0ZwSdSTKD6o%2BxV%2FzRDFw2VNZj8dJorYA8JOyq2m8NPCJKB9iJ6GN1w%2Fz39JE1szXzvJEL2J88IhLnEMMQ1zWs4HtdyXhQmAATCMXgThF1Zf5LuwM5X3OrbD%2BWfrJl4xVC%2FUQQ27h7uML%2B9kHOvE2nioXMKosrxNCRwpqok7UjdeGnnYeCwGVYtM%2Bw6VDDfnrnEBjqkARhbWt8Y23vWfNIacNWXtGx68FmaMt5EcgnuWFUIsT2AUl1Ngz2RRDDMwnUK%2BUHyXEWXGi2x6RrSW2%2FwDHf6q%2F5sraRXM6XbyFRB4DOQzhadcqbFpxyvOqLAvHNkaqQuKhz17EXPfYKSNjiHQhlFyg3HEOECw0fDe%2FjkcodkFlxdYoqBq%2FMafZ6rJI2VTX04PatMbZIXquI6jnY0OWkxuT17vlL8&X-Amz-Signature=071b945b8a9323de4dc7f36077585a10ab5b2077ed2adb98d882e86d313989ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
