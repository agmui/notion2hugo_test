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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBTMGY73%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD%2Fo6EuHD4%2BsKAPmOYG0IaLZEo%2BGRZIJRaBbj5ebW7lrgIhAOTJDnGgFVL9QM2O7Kr3v%2BchQWQhy54dl4%2BRpaVb6QNXKv8DCCoQABoMNjM3NDIzMTgzODA1Igxfv%2F5SCBzCCpIic%2Fkq3AOgrRRykhfM7J11nU2rCBGCPAgkw8gAXRGfdo1EfaWiSavFwPIL581a%2FwIjp%2BXRo3jV7%2FNxkX4matYJZtw5jlVVC0M5RyLBtoUDD62e0OQ6eN6mhs1b55u11EVhv0LUoSmT460%2Bh3UqLNYp56P41tExe%2BY77i0JvvK%2FGYDJY70fYhBUI2BfTE%2FZZx4fuPQLoq3Ys5CBxQJxUO8vmcQiewd5pBdwo8JVhlEbNYFMZE2K3X2yWPs3ho3AQ4JnJoc9JB50s49NOoTzaACXLV4BAWQ8Nc7RDUxd6JmPvYeiCX1xB0qCT0z6LDT6x%2BZwDcFmStJZN5FISOcXECXGYW5pOcCwhgKMbnsh6EWAfRpyQEsmcwllaLoRs%2BE6R%2BMxs6kdn4ajvf38xY8K0P0Xs5sibbdTun1UpNeNiYpx%2Bu33t8SPNEUeZQMc5xJ%2B5SzjaljvvNC3YQLPDqcvdGjveN8zN65mM5VTou8APeJcL9Fy4kMK%2BWGzJTO1IvtowQrgS2vq6li3sPYkxSUIdJ2bUhoGlRpktwpS5ikwopgwdPqPTjJgoCmutn6tANwRxpP1A%2FNfbUWl%2F8A%2BUCX%2BUJNni1EM8l1GMGY2h728WxbOvPwfkqGPK4CD%2BnS%2Fd7Sf%2FUgAYjCklvjJBjqkAdMh6dy7ILcavjN0D2pUL8oag8L9RQzu1UcFATKK9cs3232D0gd0wDpGf5JqYeNheWWDKQDxTVJM7ocK7H%2BpJsbh6FdUcoMi8%2BPkgx7qFqk0Wu%2Bfx2qQiYLAj%2FnkLhK6PCWgwahhYfu2jK3sWk5yiXPQ418wJ8tFvAKE2TRwAdaw7ZdN0yLe0FYG8XEgNMM1JLDV%2BhTNMAq9hIzqIMNtWFAn4%2FG3&X-Amz-Signature=2af6de0d2cf0616430464cb47bb28becde242327b92fdf69aaa19cd65d7ea64e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBTMGY73%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD%2Fo6EuHD4%2BsKAPmOYG0IaLZEo%2BGRZIJRaBbj5ebW7lrgIhAOTJDnGgFVL9QM2O7Kr3v%2BchQWQhy54dl4%2BRpaVb6QNXKv8DCCoQABoMNjM3NDIzMTgzODA1Igxfv%2F5SCBzCCpIic%2Fkq3AOgrRRykhfM7J11nU2rCBGCPAgkw8gAXRGfdo1EfaWiSavFwPIL581a%2FwIjp%2BXRo3jV7%2FNxkX4matYJZtw5jlVVC0M5RyLBtoUDD62e0OQ6eN6mhs1b55u11EVhv0LUoSmT460%2Bh3UqLNYp56P41tExe%2BY77i0JvvK%2FGYDJY70fYhBUI2BfTE%2FZZx4fuPQLoq3Ys5CBxQJxUO8vmcQiewd5pBdwo8JVhlEbNYFMZE2K3X2yWPs3ho3AQ4JnJoc9JB50s49NOoTzaACXLV4BAWQ8Nc7RDUxd6JmPvYeiCX1xB0qCT0z6LDT6x%2BZwDcFmStJZN5FISOcXECXGYW5pOcCwhgKMbnsh6EWAfRpyQEsmcwllaLoRs%2BE6R%2BMxs6kdn4ajvf38xY8K0P0Xs5sibbdTun1UpNeNiYpx%2Bu33t8SPNEUeZQMc5xJ%2B5SzjaljvvNC3YQLPDqcvdGjveN8zN65mM5VTou8APeJcL9Fy4kMK%2BWGzJTO1IvtowQrgS2vq6li3sPYkxSUIdJ2bUhoGlRpktwpS5ikwopgwdPqPTjJgoCmutn6tANwRxpP1A%2FNfbUWl%2F8A%2BUCX%2BUJNni1EM8l1GMGY2h728WxbOvPwfkqGPK4CD%2BnS%2Fd7Sf%2FUgAYjCklvjJBjqkAdMh6dy7ILcavjN0D2pUL8oag8L9RQzu1UcFATKK9cs3232D0gd0wDpGf5JqYeNheWWDKQDxTVJM7ocK7H%2BpJsbh6FdUcoMi8%2BPkgx7qFqk0Wu%2Bfx2qQiYLAj%2FnkLhK6PCWgwahhYfu2jK3sWk5yiXPQ418wJ8tFvAKE2TRwAdaw7ZdN0yLe0FYG8XEgNMM1JLDV%2BhTNMAq9hIzqIMNtWFAn4%2FG3&X-Amz-Signature=e08a4493475dee38bcc18bf42ce844a8812f204c39abe7aa469ba92c8dc26cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBTMGY73%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD%2Fo6EuHD4%2BsKAPmOYG0IaLZEo%2BGRZIJRaBbj5ebW7lrgIhAOTJDnGgFVL9QM2O7Kr3v%2BchQWQhy54dl4%2BRpaVb6QNXKv8DCCoQABoMNjM3NDIzMTgzODA1Igxfv%2F5SCBzCCpIic%2Fkq3AOgrRRykhfM7J11nU2rCBGCPAgkw8gAXRGfdo1EfaWiSavFwPIL581a%2FwIjp%2BXRo3jV7%2FNxkX4matYJZtw5jlVVC0M5RyLBtoUDD62e0OQ6eN6mhs1b55u11EVhv0LUoSmT460%2Bh3UqLNYp56P41tExe%2BY77i0JvvK%2FGYDJY70fYhBUI2BfTE%2FZZx4fuPQLoq3Ys5CBxQJxUO8vmcQiewd5pBdwo8JVhlEbNYFMZE2K3X2yWPs3ho3AQ4JnJoc9JB50s49NOoTzaACXLV4BAWQ8Nc7RDUxd6JmPvYeiCX1xB0qCT0z6LDT6x%2BZwDcFmStJZN5FISOcXECXGYW5pOcCwhgKMbnsh6EWAfRpyQEsmcwllaLoRs%2BE6R%2BMxs6kdn4ajvf38xY8K0P0Xs5sibbdTun1UpNeNiYpx%2Bu33t8SPNEUeZQMc5xJ%2B5SzjaljvvNC3YQLPDqcvdGjveN8zN65mM5VTou8APeJcL9Fy4kMK%2BWGzJTO1IvtowQrgS2vq6li3sPYkxSUIdJ2bUhoGlRpktwpS5ikwopgwdPqPTjJgoCmutn6tANwRxpP1A%2FNfbUWl%2F8A%2BUCX%2BUJNni1EM8l1GMGY2h728WxbOvPwfkqGPK4CD%2BnS%2Fd7Sf%2FUgAYjCklvjJBjqkAdMh6dy7ILcavjN0D2pUL8oag8L9RQzu1UcFATKK9cs3232D0gd0wDpGf5JqYeNheWWDKQDxTVJM7ocK7H%2BpJsbh6FdUcoMi8%2BPkgx7qFqk0Wu%2Bfx2qQiYLAj%2FnkLhK6PCWgwahhYfu2jK3sWk5yiXPQ418wJ8tFvAKE2TRwAdaw7ZdN0yLe0FYG8XEgNMM1JLDV%2BhTNMAq9hIzqIMNtWFAn4%2FG3&X-Amz-Signature=284886bc7579071fce806fb74bb1b9d0f6a6beb68afd1e93cbddcfa4ae8a56e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBTMGY73%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD%2Fo6EuHD4%2BsKAPmOYG0IaLZEo%2BGRZIJRaBbj5ebW7lrgIhAOTJDnGgFVL9QM2O7Kr3v%2BchQWQhy54dl4%2BRpaVb6QNXKv8DCCoQABoMNjM3NDIzMTgzODA1Igxfv%2F5SCBzCCpIic%2Fkq3AOgrRRykhfM7J11nU2rCBGCPAgkw8gAXRGfdo1EfaWiSavFwPIL581a%2FwIjp%2BXRo3jV7%2FNxkX4matYJZtw5jlVVC0M5RyLBtoUDD62e0OQ6eN6mhs1b55u11EVhv0LUoSmT460%2Bh3UqLNYp56P41tExe%2BY77i0JvvK%2FGYDJY70fYhBUI2BfTE%2FZZx4fuPQLoq3Ys5CBxQJxUO8vmcQiewd5pBdwo8JVhlEbNYFMZE2K3X2yWPs3ho3AQ4JnJoc9JB50s49NOoTzaACXLV4BAWQ8Nc7RDUxd6JmPvYeiCX1xB0qCT0z6LDT6x%2BZwDcFmStJZN5FISOcXECXGYW5pOcCwhgKMbnsh6EWAfRpyQEsmcwllaLoRs%2BE6R%2BMxs6kdn4ajvf38xY8K0P0Xs5sibbdTun1UpNeNiYpx%2Bu33t8SPNEUeZQMc5xJ%2B5SzjaljvvNC3YQLPDqcvdGjveN8zN65mM5VTou8APeJcL9Fy4kMK%2BWGzJTO1IvtowQrgS2vq6li3sPYkxSUIdJ2bUhoGlRpktwpS5ikwopgwdPqPTjJgoCmutn6tANwRxpP1A%2FNfbUWl%2F8A%2BUCX%2BUJNni1EM8l1GMGY2h728WxbOvPwfkqGPK4CD%2BnS%2Fd7Sf%2FUgAYjCklvjJBjqkAdMh6dy7ILcavjN0D2pUL8oag8L9RQzu1UcFATKK9cs3232D0gd0wDpGf5JqYeNheWWDKQDxTVJM7ocK7H%2BpJsbh6FdUcoMi8%2BPkgx7qFqk0Wu%2Bfx2qQiYLAj%2FnkLhK6PCWgwahhYfu2jK3sWk5yiXPQ418wJ8tFvAKE2TRwAdaw7ZdN0yLe0FYG8XEgNMM1JLDV%2BhTNMAq9hIzqIMNtWFAn4%2FG3&X-Amz-Signature=67f93fcb6ac0b05e64b07671dacddd708f729ee46d17f736225d5d132225983c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBTMGY73%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD%2Fo6EuHD4%2BsKAPmOYG0IaLZEo%2BGRZIJRaBbj5ebW7lrgIhAOTJDnGgFVL9QM2O7Kr3v%2BchQWQhy54dl4%2BRpaVb6QNXKv8DCCoQABoMNjM3NDIzMTgzODA1Igxfv%2F5SCBzCCpIic%2Fkq3AOgrRRykhfM7J11nU2rCBGCPAgkw8gAXRGfdo1EfaWiSavFwPIL581a%2FwIjp%2BXRo3jV7%2FNxkX4matYJZtw5jlVVC0M5RyLBtoUDD62e0OQ6eN6mhs1b55u11EVhv0LUoSmT460%2Bh3UqLNYp56P41tExe%2BY77i0JvvK%2FGYDJY70fYhBUI2BfTE%2FZZx4fuPQLoq3Ys5CBxQJxUO8vmcQiewd5pBdwo8JVhlEbNYFMZE2K3X2yWPs3ho3AQ4JnJoc9JB50s49NOoTzaACXLV4BAWQ8Nc7RDUxd6JmPvYeiCX1xB0qCT0z6LDT6x%2BZwDcFmStJZN5FISOcXECXGYW5pOcCwhgKMbnsh6EWAfRpyQEsmcwllaLoRs%2BE6R%2BMxs6kdn4ajvf38xY8K0P0Xs5sibbdTun1UpNeNiYpx%2Bu33t8SPNEUeZQMc5xJ%2B5SzjaljvvNC3YQLPDqcvdGjveN8zN65mM5VTou8APeJcL9Fy4kMK%2BWGzJTO1IvtowQrgS2vq6li3sPYkxSUIdJ2bUhoGlRpktwpS5ikwopgwdPqPTjJgoCmutn6tANwRxpP1A%2FNfbUWl%2F8A%2BUCX%2BUJNni1EM8l1GMGY2h728WxbOvPwfkqGPK4CD%2BnS%2Fd7Sf%2FUgAYjCklvjJBjqkAdMh6dy7ILcavjN0D2pUL8oag8L9RQzu1UcFATKK9cs3232D0gd0wDpGf5JqYeNheWWDKQDxTVJM7ocK7H%2BpJsbh6FdUcoMi8%2BPkgx7qFqk0Wu%2Bfx2qQiYLAj%2FnkLhK6PCWgwahhYfu2jK3sWk5yiXPQ418wJ8tFvAKE2TRwAdaw7ZdN0yLe0FYG8XEgNMM1JLDV%2BhTNMAq9hIzqIMNtWFAn4%2FG3&X-Amz-Signature=b58d8f8c299b1dbf0db26943ba2d8b9c8bbe4a57849aabb8526a306a4e609cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBTMGY73%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD%2Fo6EuHD4%2BsKAPmOYG0IaLZEo%2BGRZIJRaBbj5ebW7lrgIhAOTJDnGgFVL9QM2O7Kr3v%2BchQWQhy54dl4%2BRpaVb6QNXKv8DCCoQABoMNjM3NDIzMTgzODA1Igxfv%2F5SCBzCCpIic%2Fkq3AOgrRRykhfM7J11nU2rCBGCPAgkw8gAXRGfdo1EfaWiSavFwPIL581a%2FwIjp%2BXRo3jV7%2FNxkX4matYJZtw5jlVVC0M5RyLBtoUDD62e0OQ6eN6mhs1b55u11EVhv0LUoSmT460%2Bh3UqLNYp56P41tExe%2BY77i0JvvK%2FGYDJY70fYhBUI2BfTE%2FZZx4fuPQLoq3Ys5CBxQJxUO8vmcQiewd5pBdwo8JVhlEbNYFMZE2K3X2yWPs3ho3AQ4JnJoc9JB50s49NOoTzaACXLV4BAWQ8Nc7RDUxd6JmPvYeiCX1xB0qCT0z6LDT6x%2BZwDcFmStJZN5FISOcXECXGYW5pOcCwhgKMbnsh6EWAfRpyQEsmcwllaLoRs%2BE6R%2BMxs6kdn4ajvf38xY8K0P0Xs5sibbdTun1UpNeNiYpx%2Bu33t8SPNEUeZQMc5xJ%2B5SzjaljvvNC3YQLPDqcvdGjveN8zN65mM5VTou8APeJcL9Fy4kMK%2BWGzJTO1IvtowQrgS2vq6li3sPYkxSUIdJ2bUhoGlRpktwpS5ikwopgwdPqPTjJgoCmutn6tANwRxpP1A%2FNfbUWl%2F8A%2BUCX%2BUJNni1EM8l1GMGY2h728WxbOvPwfkqGPK4CD%2BnS%2Fd7Sf%2FUgAYjCklvjJBjqkAdMh6dy7ILcavjN0D2pUL8oag8L9RQzu1UcFATKK9cs3232D0gd0wDpGf5JqYeNheWWDKQDxTVJM7ocK7H%2BpJsbh6FdUcoMi8%2BPkgx7qFqk0Wu%2Bfx2qQiYLAj%2FnkLhK6PCWgwahhYfu2jK3sWk5yiXPQ418wJ8tFvAKE2TRwAdaw7ZdN0yLe0FYG8XEgNMM1JLDV%2BhTNMAq9hIzqIMNtWFAn4%2FG3&X-Amz-Signature=96e6385c84f49e24342ada67ea3027c9553cc422d0e0e01e484fff447230b737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBTMGY73%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD%2Fo6EuHD4%2BsKAPmOYG0IaLZEo%2BGRZIJRaBbj5ebW7lrgIhAOTJDnGgFVL9QM2O7Kr3v%2BchQWQhy54dl4%2BRpaVb6QNXKv8DCCoQABoMNjM3NDIzMTgzODA1Igxfv%2F5SCBzCCpIic%2Fkq3AOgrRRykhfM7J11nU2rCBGCPAgkw8gAXRGfdo1EfaWiSavFwPIL581a%2FwIjp%2BXRo3jV7%2FNxkX4matYJZtw5jlVVC0M5RyLBtoUDD62e0OQ6eN6mhs1b55u11EVhv0LUoSmT460%2Bh3UqLNYp56P41tExe%2BY77i0JvvK%2FGYDJY70fYhBUI2BfTE%2FZZx4fuPQLoq3Ys5CBxQJxUO8vmcQiewd5pBdwo8JVhlEbNYFMZE2K3X2yWPs3ho3AQ4JnJoc9JB50s49NOoTzaACXLV4BAWQ8Nc7RDUxd6JmPvYeiCX1xB0qCT0z6LDT6x%2BZwDcFmStJZN5FISOcXECXGYW5pOcCwhgKMbnsh6EWAfRpyQEsmcwllaLoRs%2BE6R%2BMxs6kdn4ajvf38xY8K0P0Xs5sibbdTun1UpNeNiYpx%2Bu33t8SPNEUeZQMc5xJ%2B5SzjaljvvNC3YQLPDqcvdGjveN8zN65mM5VTou8APeJcL9Fy4kMK%2BWGzJTO1IvtowQrgS2vq6li3sPYkxSUIdJ2bUhoGlRpktwpS5ikwopgwdPqPTjJgoCmutn6tANwRxpP1A%2FNfbUWl%2F8A%2BUCX%2BUJNni1EM8l1GMGY2h728WxbOvPwfkqGPK4CD%2BnS%2Fd7Sf%2FUgAYjCklvjJBjqkAdMh6dy7ILcavjN0D2pUL8oag8L9RQzu1UcFATKK9cs3232D0gd0wDpGf5JqYeNheWWDKQDxTVJM7ocK7H%2BpJsbh6FdUcoMi8%2BPkgx7qFqk0Wu%2Bfx2qQiYLAj%2FnkLhK6PCWgwahhYfu2jK3sWk5yiXPQ418wJ8tFvAKE2TRwAdaw7ZdN0yLe0FYG8XEgNMM1JLDV%2BhTNMAq9hIzqIMNtWFAn4%2FG3&X-Amz-Signature=e2a00475b34570b25cd307266e7754868bfe528416804b8755bbd382325c552f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBTMGY73%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD%2Fo6EuHD4%2BsKAPmOYG0IaLZEo%2BGRZIJRaBbj5ebW7lrgIhAOTJDnGgFVL9QM2O7Kr3v%2BchQWQhy54dl4%2BRpaVb6QNXKv8DCCoQABoMNjM3NDIzMTgzODA1Igxfv%2F5SCBzCCpIic%2Fkq3AOgrRRykhfM7J11nU2rCBGCPAgkw8gAXRGfdo1EfaWiSavFwPIL581a%2FwIjp%2BXRo3jV7%2FNxkX4matYJZtw5jlVVC0M5RyLBtoUDD62e0OQ6eN6mhs1b55u11EVhv0LUoSmT460%2Bh3UqLNYp56P41tExe%2BY77i0JvvK%2FGYDJY70fYhBUI2BfTE%2FZZx4fuPQLoq3Ys5CBxQJxUO8vmcQiewd5pBdwo8JVhlEbNYFMZE2K3X2yWPs3ho3AQ4JnJoc9JB50s49NOoTzaACXLV4BAWQ8Nc7RDUxd6JmPvYeiCX1xB0qCT0z6LDT6x%2BZwDcFmStJZN5FISOcXECXGYW5pOcCwhgKMbnsh6EWAfRpyQEsmcwllaLoRs%2BE6R%2BMxs6kdn4ajvf38xY8K0P0Xs5sibbdTun1UpNeNiYpx%2Bu33t8SPNEUeZQMc5xJ%2B5SzjaljvvNC3YQLPDqcvdGjveN8zN65mM5VTou8APeJcL9Fy4kMK%2BWGzJTO1IvtowQrgS2vq6li3sPYkxSUIdJ2bUhoGlRpktwpS5ikwopgwdPqPTjJgoCmutn6tANwRxpP1A%2FNfbUWl%2F8A%2BUCX%2BUJNni1EM8l1GMGY2h728WxbOvPwfkqGPK4CD%2BnS%2Fd7Sf%2FUgAYjCklvjJBjqkAdMh6dy7ILcavjN0D2pUL8oag8L9RQzu1UcFATKK9cs3232D0gd0wDpGf5JqYeNheWWDKQDxTVJM7ocK7H%2BpJsbh6FdUcoMi8%2BPkgx7qFqk0Wu%2Bfx2qQiYLAj%2FnkLhK6PCWgwahhYfu2jK3sWk5yiXPQ418wJ8tFvAKE2TRwAdaw7ZdN0yLe0FYG8XEgNMM1JLDV%2BhTNMAq9hIzqIMNtWFAn4%2FG3&X-Amz-Signature=1b836875c56a66345b9b06b4a9e080f62ce1c10d5a2fefeb5b1509b92dac323e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBTMGY73%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD%2Fo6EuHD4%2BsKAPmOYG0IaLZEo%2BGRZIJRaBbj5ebW7lrgIhAOTJDnGgFVL9QM2O7Kr3v%2BchQWQhy54dl4%2BRpaVb6QNXKv8DCCoQABoMNjM3NDIzMTgzODA1Igxfv%2F5SCBzCCpIic%2Fkq3AOgrRRykhfM7J11nU2rCBGCPAgkw8gAXRGfdo1EfaWiSavFwPIL581a%2FwIjp%2BXRo3jV7%2FNxkX4matYJZtw5jlVVC0M5RyLBtoUDD62e0OQ6eN6mhs1b55u11EVhv0LUoSmT460%2Bh3UqLNYp56P41tExe%2BY77i0JvvK%2FGYDJY70fYhBUI2BfTE%2FZZx4fuPQLoq3Ys5CBxQJxUO8vmcQiewd5pBdwo8JVhlEbNYFMZE2K3X2yWPs3ho3AQ4JnJoc9JB50s49NOoTzaACXLV4BAWQ8Nc7RDUxd6JmPvYeiCX1xB0qCT0z6LDT6x%2BZwDcFmStJZN5FISOcXECXGYW5pOcCwhgKMbnsh6EWAfRpyQEsmcwllaLoRs%2BE6R%2BMxs6kdn4ajvf38xY8K0P0Xs5sibbdTun1UpNeNiYpx%2Bu33t8SPNEUeZQMc5xJ%2B5SzjaljvvNC3YQLPDqcvdGjveN8zN65mM5VTou8APeJcL9Fy4kMK%2BWGzJTO1IvtowQrgS2vq6li3sPYkxSUIdJ2bUhoGlRpktwpS5ikwopgwdPqPTjJgoCmutn6tANwRxpP1A%2FNfbUWl%2F8A%2BUCX%2BUJNni1EM8l1GMGY2h728WxbOvPwfkqGPK4CD%2BnS%2Fd7Sf%2FUgAYjCklvjJBjqkAdMh6dy7ILcavjN0D2pUL8oag8L9RQzu1UcFATKK9cs3232D0gd0wDpGf5JqYeNheWWDKQDxTVJM7ocK7H%2BpJsbh6FdUcoMi8%2BPkgx7qFqk0Wu%2Bfx2qQiYLAj%2FnkLhK6PCWgwahhYfu2jK3sWk5yiXPQ418wJ8tFvAKE2TRwAdaw7ZdN0yLe0FYG8XEgNMM1JLDV%2BhTNMAq9hIzqIMNtWFAn4%2FG3&X-Amz-Signature=21c0b4b7cab56e0dee4c43369d25a34fb91ef059d15d13b2c70c0125aa3117ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBTMGY73%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD%2Fo6EuHD4%2BsKAPmOYG0IaLZEo%2BGRZIJRaBbj5ebW7lrgIhAOTJDnGgFVL9QM2O7Kr3v%2BchQWQhy54dl4%2BRpaVb6QNXKv8DCCoQABoMNjM3NDIzMTgzODA1Igxfv%2F5SCBzCCpIic%2Fkq3AOgrRRykhfM7J11nU2rCBGCPAgkw8gAXRGfdo1EfaWiSavFwPIL581a%2FwIjp%2BXRo3jV7%2FNxkX4matYJZtw5jlVVC0M5RyLBtoUDD62e0OQ6eN6mhs1b55u11EVhv0LUoSmT460%2Bh3UqLNYp56P41tExe%2BY77i0JvvK%2FGYDJY70fYhBUI2BfTE%2FZZx4fuPQLoq3Ys5CBxQJxUO8vmcQiewd5pBdwo8JVhlEbNYFMZE2K3X2yWPs3ho3AQ4JnJoc9JB50s49NOoTzaACXLV4BAWQ8Nc7RDUxd6JmPvYeiCX1xB0qCT0z6LDT6x%2BZwDcFmStJZN5FISOcXECXGYW5pOcCwhgKMbnsh6EWAfRpyQEsmcwllaLoRs%2BE6R%2BMxs6kdn4ajvf38xY8K0P0Xs5sibbdTun1UpNeNiYpx%2Bu33t8SPNEUeZQMc5xJ%2B5SzjaljvvNC3YQLPDqcvdGjveN8zN65mM5VTou8APeJcL9Fy4kMK%2BWGzJTO1IvtowQrgS2vq6li3sPYkxSUIdJ2bUhoGlRpktwpS5ikwopgwdPqPTjJgoCmutn6tANwRxpP1A%2FNfbUWl%2F8A%2BUCX%2BUJNni1EM8l1GMGY2h728WxbOvPwfkqGPK4CD%2BnS%2Fd7Sf%2FUgAYjCklvjJBjqkAdMh6dy7ILcavjN0D2pUL8oag8L9RQzu1UcFATKK9cs3232D0gd0wDpGf5JqYeNheWWDKQDxTVJM7ocK7H%2BpJsbh6FdUcoMi8%2BPkgx7qFqk0Wu%2Bfx2qQiYLAj%2FnkLhK6PCWgwahhYfu2jK3sWk5yiXPQ418wJ8tFvAKE2TRwAdaw7ZdN0yLe0FYG8XEgNMM1JLDV%2BhTNMAq9hIzqIMNtWFAn4%2FG3&X-Amz-Signature=714b4f6b0e51e24aac8e4f1403be5b7b07944d0d0cf287796faf01e2bb5c1ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBTMGY73%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD%2Fo6EuHD4%2BsKAPmOYG0IaLZEo%2BGRZIJRaBbj5ebW7lrgIhAOTJDnGgFVL9QM2O7Kr3v%2BchQWQhy54dl4%2BRpaVb6QNXKv8DCCoQABoMNjM3NDIzMTgzODA1Igxfv%2F5SCBzCCpIic%2Fkq3AOgrRRykhfM7J11nU2rCBGCPAgkw8gAXRGfdo1EfaWiSavFwPIL581a%2FwIjp%2BXRo3jV7%2FNxkX4matYJZtw5jlVVC0M5RyLBtoUDD62e0OQ6eN6mhs1b55u11EVhv0LUoSmT460%2Bh3UqLNYp56P41tExe%2BY77i0JvvK%2FGYDJY70fYhBUI2BfTE%2FZZx4fuPQLoq3Ys5CBxQJxUO8vmcQiewd5pBdwo8JVhlEbNYFMZE2K3X2yWPs3ho3AQ4JnJoc9JB50s49NOoTzaACXLV4BAWQ8Nc7RDUxd6JmPvYeiCX1xB0qCT0z6LDT6x%2BZwDcFmStJZN5FISOcXECXGYW5pOcCwhgKMbnsh6EWAfRpyQEsmcwllaLoRs%2BE6R%2BMxs6kdn4ajvf38xY8K0P0Xs5sibbdTun1UpNeNiYpx%2Bu33t8SPNEUeZQMc5xJ%2B5SzjaljvvNC3YQLPDqcvdGjveN8zN65mM5VTou8APeJcL9Fy4kMK%2BWGzJTO1IvtowQrgS2vq6li3sPYkxSUIdJ2bUhoGlRpktwpS5ikwopgwdPqPTjJgoCmutn6tANwRxpP1A%2FNfbUWl%2F8A%2BUCX%2BUJNni1EM8l1GMGY2h728WxbOvPwfkqGPK4CD%2BnS%2Fd7Sf%2FUgAYjCklvjJBjqkAdMh6dy7ILcavjN0D2pUL8oag8L9RQzu1UcFATKK9cs3232D0gd0wDpGf5JqYeNheWWDKQDxTVJM7ocK7H%2BpJsbh6FdUcoMi8%2BPkgx7qFqk0Wu%2Bfx2qQiYLAj%2FnkLhK6PCWgwahhYfu2jK3sWk5yiXPQ418wJ8tFvAKE2TRwAdaw7ZdN0yLe0FYG8XEgNMM1JLDV%2BhTNMAq9hIzqIMNtWFAn4%2FG3&X-Amz-Signature=8d8a105cb5c5c65ef33635904dcd73b2f8ad4c1812c31cc4e0bbdcd067cfa879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBTMGY73%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD%2Fo6EuHD4%2BsKAPmOYG0IaLZEo%2BGRZIJRaBbj5ebW7lrgIhAOTJDnGgFVL9QM2O7Kr3v%2BchQWQhy54dl4%2BRpaVb6QNXKv8DCCoQABoMNjM3NDIzMTgzODA1Igxfv%2F5SCBzCCpIic%2Fkq3AOgrRRykhfM7J11nU2rCBGCPAgkw8gAXRGfdo1EfaWiSavFwPIL581a%2FwIjp%2BXRo3jV7%2FNxkX4matYJZtw5jlVVC0M5RyLBtoUDD62e0OQ6eN6mhs1b55u11EVhv0LUoSmT460%2Bh3UqLNYp56P41tExe%2BY77i0JvvK%2FGYDJY70fYhBUI2BfTE%2FZZx4fuPQLoq3Ys5CBxQJxUO8vmcQiewd5pBdwo8JVhlEbNYFMZE2K3X2yWPs3ho3AQ4JnJoc9JB50s49NOoTzaACXLV4BAWQ8Nc7RDUxd6JmPvYeiCX1xB0qCT0z6LDT6x%2BZwDcFmStJZN5FISOcXECXGYW5pOcCwhgKMbnsh6EWAfRpyQEsmcwllaLoRs%2BE6R%2BMxs6kdn4ajvf38xY8K0P0Xs5sibbdTun1UpNeNiYpx%2Bu33t8SPNEUeZQMc5xJ%2B5SzjaljvvNC3YQLPDqcvdGjveN8zN65mM5VTou8APeJcL9Fy4kMK%2BWGzJTO1IvtowQrgS2vq6li3sPYkxSUIdJ2bUhoGlRpktwpS5ikwopgwdPqPTjJgoCmutn6tANwRxpP1A%2FNfbUWl%2F8A%2BUCX%2BUJNni1EM8l1GMGY2h728WxbOvPwfkqGPK4CD%2BnS%2Fd7Sf%2FUgAYjCklvjJBjqkAdMh6dy7ILcavjN0D2pUL8oag8L9RQzu1UcFATKK9cs3232D0gd0wDpGf5JqYeNheWWDKQDxTVJM7ocK7H%2BpJsbh6FdUcoMi8%2BPkgx7qFqk0Wu%2Bfx2qQiYLAj%2FnkLhK6PCWgwahhYfu2jK3sWk5yiXPQ418wJ8tFvAKE2TRwAdaw7ZdN0yLe0FYG8XEgNMM1JLDV%2BhTNMAq9hIzqIMNtWFAn4%2FG3&X-Amz-Signature=fd318d72ca5f61867b4f2d3ca03d3e74d029ad240656d83758313683bb211340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBTMGY73%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD%2Fo6EuHD4%2BsKAPmOYG0IaLZEo%2BGRZIJRaBbj5ebW7lrgIhAOTJDnGgFVL9QM2O7Kr3v%2BchQWQhy54dl4%2BRpaVb6QNXKv8DCCoQABoMNjM3NDIzMTgzODA1Igxfv%2F5SCBzCCpIic%2Fkq3AOgrRRykhfM7J11nU2rCBGCPAgkw8gAXRGfdo1EfaWiSavFwPIL581a%2FwIjp%2BXRo3jV7%2FNxkX4matYJZtw5jlVVC0M5RyLBtoUDD62e0OQ6eN6mhs1b55u11EVhv0LUoSmT460%2Bh3UqLNYp56P41tExe%2BY77i0JvvK%2FGYDJY70fYhBUI2BfTE%2FZZx4fuPQLoq3Ys5CBxQJxUO8vmcQiewd5pBdwo8JVhlEbNYFMZE2K3X2yWPs3ho3AQ4JnJoc9JB50s49NOoTzaACXLV4BAWQ8Nc7RDUxd6JmPvYeiCX1xB0qCT0z6LDT6x%2BZwDcFmStJZN5FISOcXECXGYW5pOcCwhgKMbnsh6EWAfRpyQEsmcwllaLoRs%2BE6R%2BMxs6kdn4ajvf38xY8K0P0Xs5sibbdTun1UpNeNiYpx%2Bu33t8SPNEUeZQMc5xJ%2B5SzjaljvvNC3YQLPDqcvdGjveN8zN65mM5VTou8APeJcL9Fy4kMK%2BWGzJTO1IvtowQrgS2vq6li3sPYkxSUIdJ2bUhoGlRpktwpS5ikwopgwdPqPTjJgoCmutn6tANwRxpP1A%2FNfbUWl%2F8A%2BUCX%2BUJNni1EM8l1GMGY2h728WxbOvPwfkqGPK4CD%2BnS%2Fd7Sf%2FUgAYjCklvjJBjqkAdMh6dy7ILcavjN0D2pUL8oag8L9RQzu1UcFATKK9cs3232D0gd0wDpGf5JqYeNheWWDKQDxTVJM7ocK7H%2BpJsbh6FdUcoMi8%2BPkgx7qFqk0Wu%2Bfx2qQiYLAj%2FnkLhK6PCWgwahhYfu2jK3sWk5yiXPQ418wJ8tFvAKE2TRwAdaw7ZdN0yLe0FYG8XEgNMM1JLDV%2BhTNMAq9hIzqIMNtWFAn4%2FG3&X-Amz-Signature=70c81d075b5c781743733c9dd290630ff13004f32302dde5c80fd773020df029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBTMGY73%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD%2Fo6EuHD4%2BsKAPmOYG0IaLZEo%2BGRZIJRaBbj5ebW7lrgIhAOTJDnGgFVL9QM2O7Kr3v%2BchQWQhy54dl4%2BRpaVb6QNXKv8DCCoQABoMNjM3NDIzMTgzODA1Igxfv%2F5SCBzCCpIic%2Fkq3AOgrRRykhfM7J11nU2rCBGCPAgkw8gAXRGfdo1EfaWiSavFwPIL581a%2FwIjp%2BXRo3jV7%2FNxkX4matYJZtw5jlVVC0M5RyLBtoUDD62e0OQ6eN6mhs1b55u11EVhv0LUoSmT460%2Bh3UqLNYp56P41tExe%2BY77i0JvvK%2FGYDJY70fYhBUI2BfTE%2FZZx4fuPQLoq3Ys5CBxQJxUO8vmcQiewd5pBdwo8JVhlEbNYFMZE2K3X2yWPs3ho3AQ4JnJoc9JB50s49NOoTzaACXLV4BAWQ8Nc7RDUxd6JmPvYeiCX1xB0qCT0z6LDT6x%2BZwDcFmStJZN5FISOcXECXGYW5pOcCwhgKMbnsh6EWAfRpyQEsmcwllaLoRs%2BE6R%2BMxs6kdn4ajvf38xY8K0P0Xs5sibbdTun1UpNeNiYpx%2Bu33t8SPNEUeZQMc5xJ%2B5SzjaljvvNC3YQLPDqcvdGjveN8zN65mM5VTou8APeJcL9Fy4kMK%2BWGzJTO1IvtowQrgS2vq6li3sPYkxSUIdJ2bUhoGlRpktwpS5ikwopgwdPqPTjJgoCmutn6tANwRxpP1A%2FNfbUWl%2F8A%2BUCX%2BUJNni1EM8l1GMGY2h728WxbOvPwfkqGPK4CD%2BnS%2Fd7Sf%2FUgAYjCklvjJBjqkAdMh6dy7ILcavjN0D2pUL8oag8L9RQzu1UcFATKK9cs3232D0gd0wDpGf5JqYeNheWWDKQDxTVJM7ocK7H%2BpJsbh6FdUcoMi8%2BPkgx7qFqk0Wu%2Bfx2qQiYLAj%2FnkLhK6PCWgwahhYfu2jK3sWk5yiXPQ418wJ8tFvAKE2TRwAdaw7ZdN0yLe0FYG8XEgNMM1JLDV%2BhTNMAq9hIzqIMNtWFAn4%2FG3&X-Amz-Signature=67e47049c237014558c119a42b46faf207e7e24af41621a5d792e000885774db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
