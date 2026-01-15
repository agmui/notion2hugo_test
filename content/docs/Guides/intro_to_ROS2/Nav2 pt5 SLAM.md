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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K7W5KSE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD5o%2BYjFIjJsZPWX%2FhnC3F0xTvLm1Uei0JhcOe1Erq7wQIhAM7QxNZQ2v5uacQVZWUdHeFmQJIBTEiOEzOg3FZOH4zrKv8DCCoQABoMNjM3NDIzMTgzODA1IgyBw3FVgA%2FNpXUlUrcq3ANV35LA8wJicU6SWuJsSzUbBYPtiQuKbWHAH9oKrNhl28VVf9AcOnmplwDqa%2BGCAEkre3wHOHCmjmm%2Fsl1W7s84%2FmACIoWmkDOMiHRhU6JiHqxCUc%2FVHGR30K1NNicCSE0f3hwUkgtDAvYklWHxuRUwTYe%2F6YmDOIEGi%2FQVibmNyquN8PkLEn%2Fk5M9Lt7aIR6DATUr5zycboGCHKP6SzJDbIelFnYRumDhoU%2BjUlDDi9eyJ3XE7DXAr5AtVB9v8qA8O3k3nRHgU9nxLX2wjky5H%2F02zg0DMbH%2B4H%2BHJx9BifLMX%2FbP7DDH8pUfrO5Jm1GNgT0sXAfLu8bgz3QrcaS60LfoHKblXymXrDh9uCL7SXrizCzUKoaejzIAa%2B4eCneSuApLFXR8QvXZw%2F2fPQWTOwkKoVisFbGvwiVjmA9lgd5xqB4ELqrQ%2BPF66yH0L7Xn70Hj01OEIRX1a7tYBx3KkYrJUasJo%2FASAKsONOwMo2MDRMFPquS6SS917zhz3jcxhz8oM8I3Ev3BV0H7BIcqeMKMZe2cUv4gp37CQggSvBN5kau7mp6QhpGjn2bWS%2F97IThkZoHLwNDwopkI4Pjq0Xr3uovsffD1yERL9t7b04hVHCg9NhBD3NBnVYjDHgKHLBjqkAdgv74n9Xk%2FhvUDemMQ5DAZd6YVqrAhrgSYlyz%2B6wVN1p0UOHPMMwstRBJQV51MjelhIvwEhejZmMgeGIJpEgw3Sh5Vp8N5Pfo7OwMXyTfJzrwEWW3GkVyZMKqbzmsHbIUgzHNDAWZ9NMaMnf2zmQlAgei4X%2Br7Kk3YSkwNK087War5IsNibI2Y%2BRSwZ6Jfr5h%2BMV4Yt4Z%2BHfeYo7kFCBVp6HNYM&X-Amz-Signature=a58aa9ede350a2e6eff3eece64c314489a4c08cdea14380ebf6d048b7a642572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K7W5KSE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD5o%2BYjFIjJsZPWX%2FhnC3F0xTvLm1Uei0JhcOe1Erq7wQIhAM7QxNZQ2v5uacQVZWUdHeFmQJIBTEiOEzOg3FZOH4zrKv8DCCoQABoMNjM3NDIzMTgzODA1IgyBw3FVgA%2FNpXUlUrcq3ANV35LA8wJicU6SWuJsSzUbBYPtiQuKbWHAH9oKrNhl28VVf9AcOnmplwDqa%2BGCAEkre3wHOHCmjmm%2Fsl1W7s84%2FmACIoWmkDOMiHRhU6JiHqxCUc%2FVHGR30K1NNicCSE0f3hwUkgtDAvYklWHxuRUwTYe%2F6YmDOIEGi%2FQVibmNyquN8PkLEn%2Fk5M9Lt7aIR6DATUr5zycboGCHKP6SzJDbIelFnYRumDhoU%2BjUlDDi9eyJ3XE7DXAr5AtVB9v8qA8O3k3nRHgU9nxLX2wjky5H%2F02zg0DMbH%2B4H%2BHJx9BifLMX%2FbP7DDH8pUfrO5Jm1GNgT0sXAfLu8bgz3QrcaS60LfoHKblXymXrDh9uCL7SXrizCzUKoaejzIAa%2B4eCneSuApLFXR8QvXZw%2F2fPQWTOwkKoVisFbGvwiVjmA9lgd5xqB4ELqrQ%2BPF66yH0L7Xn70Hj01OEIRX1a7tYBx3KkYrJUasJo%2FASAKsONOwMo2MDRMFPquS6SS917zhz3jcxhz8oM8I3Ev3BV0H7BIcqeMKMZe2cUv4gp37CQggSvBN5kau7mp6QhpGjn2bWS%2F97IThkZoHLwNDwopkI4Pjq0Xr3uovsffD1yERL9t7b04hVHCg9NhBD3NBnVYjDHgKHLBjqkAdgv74n9Xk%2FhvUDemMQ5DAZd6YVqrAhrgSYlyz%2B6wVN1p0UOHPMMwstRBJQV51MjelhIvwEhejZmMgeGIJpEgw3Sh5Vp8N5Pfo7OwMXyTfJzrwEWW3GkVyZMKqbzmsHbIUgzHNDAWZ9NMaMnf2zmQlAgei4X%2Br7Kk3YSkwNK087War5IsNibI2Y%2BRSwZ6Jfr5h%2BMV4Yt4Z%2BHfeYo7kFCBVp6HNYM&X-Amz-Signature=5ef0f4da073b417f46ef951bafb82cd9952c688ec3603c13187d5f6d87d192df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K7W5KSE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD5o%2BYjFIjJsZPWX%2FhnC3F0xTvLm1Uei0JhcOe1Erq7wQIhAM7QxNZQ2v5uacQVZWUdHeFmQJIBTEiOEzOg3FZOH4zrKv8DCCoQABoMNjM3NDIzMTgzODA1IgyBw3FVgA%2FNpXUlUrcq3ANV35LA8wJicU6SWuJsSzUbBYPtiQuKbWHAH9oKrNhl28VVf9AcOnmplwDqa%2BGCAEkre3wHOHCmjmm%2Fsl1W7s84%2FmACIoWmkDOMiHRhU6JiHqxCUc%2FVHGR30K1NNicCSE0f3hwUkgtDAvYklWHxuRUwTYe%2F6YmDOIEGi%2FQVibmNyquN8PkLEn%2Fk5M9Lt7aIR6DATUr5zycboGCHKP6SzJDbIelFnYRumDhoU%2BjUlDDi9eyJ3XE7DXAr5AtVB9v8qA8O3k3nRHgU9nxLX2wjky5H%2F02zg0DMbH%2B4H%2BHJx9BifLMX%2FbP7DDH8pUfrO5Jm1GNgT0sXAfLu8bgz3QrcaS60LfoHKblXymXrDh9uCL7SXrizCzUKoaejzIAa%2B4eCneSuApLFXR8QvXZw%2F2fPQWTOwkKoVisFbGvwiVjmA9lgd5xqB4ELqrQ%2BPF66yH0L7Xn70Hj01OEIRX1a7tYBx3KkYrJUasJo%2FASAKsONOwMo2MDRMFPquS6SS917zhz3jcxhz8oM8I3Ev3BV0H7BIcqeMKMZe2cUv4gp37CQggSvBN5kau7mp6QhpGjn2bWS%2F97IThkZoHLwNDwopkI4Pjq0Xr3uovsffD1yERL9t7b04hVHCg9NhBD3NBnVYjDHgKHLBjqkAdgv74n9Xk%2FhvUDemMQ5DAZd6YVqrAhrgSYlyz%2B6wVN1p0UOHPMMwstRBJQV51MjelhIvwEhejZmMgeGIJpEgw3Sh5Vp8N5Pfo7OwMXyTfJzrwEWW3GkVyZMKqbzmsHbIUgzHNDAWZ9NMaMnf2zmQlAgei4X%2Br7Kk3YSkwNK087War5IsNibI2Y%2BRSwZ6Jfr5h%2BMV4Yt4Z%2BHfeYo7kFCBVp6HNYM&X-Amz-Signature=7f364f74ed20f8b389bfee8230830ad1a3cdbcc997109921589202e2c7e81a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K7W5KSE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD5o%2BYjFIjJsZPWX%2FhnC3F0xTvLm1Uei0JhcOe1Erq7wQIhAM7QxNZQ2v5uacQVZWUdHeFmQJIBTEiOEzOg3FZOH4zrKv8DCCoQABoMNjM3NDIzMTgzODA1IgyBw3FVgA%2FNpXUlUrcq3ANV35LA8wJicU6SWuJsSzUbBYPtiQuKbWHAH9oKrNhl28VVf9AcOnmplwDqa%2BGCAEkre3wHOHCmjmm%2Fsl1W7s84%2FmACIoWmkDOMiHRhU6JiHqxCUc%2FVHGR30K1NNicCSE0f3hwUkgtDAvYklWHxuRUwTYe%2F6YmDOIEGi%2FQVibmNyquN8PkLEn%2Fk5M9Lt7aIR6DATUr5zycboGCHKP6SzJDbIelFnYRumDhoU%2BjUlDDi9eyJ3XE7DXAr5AtVB9v8qA8O3k3nRHgU9nxLX2wjky5H%2F02zg0DMbH%2B4H%2BHJx9BifLMX%2FbP7DDH8pUfrO5Jm1GNgT0sXAfLu8bgz3QrcaS60LfoHKblXymXrDh9uCL7SXrizCzUKoaejzIAa%2B4eCneSuApLFXR8QvXZw%2F2fPQWTOwkKoVisFbGvwiVjmA9lgd5xqB4ELqrQ%2BPF66yH0L7Xn70Hj01OEIRX1a7tYBx3KkYrJUasJo%2FASAKsONOwMo2MDRMFPquS6SS917zhz3jcxhz8oM8I3Ev3BV0H7BIcqeMKMZe2cUv4gp37CQggSvBN5kau7mp6QhpGjn2bWS%2F97IThkZoHLwNDwopkI4Pjq0Xr3uovsffD1yERL9t7b04hVHCg9NhBD3NBnVYjDHgKHLBjqkAdgv74n9Xk%2FhvUDemMQ5DAZd6YVqrAhrgSYlyz%2B6wVN1p0UOHPMMwstRBJQV51MjelhIvwEhejZmMgeGIJpEgw3Sh5Vp8N5Pfo7OwMXyTfJzrwEWW3GkVyZMKqbzmsHbIUgzHNDAWZ9NMaMnf2zmQlAgei4X%2Br7Kk3YSkwNK087War5IsNibI2Y%2BRSwZ6Jfr5h%2BMV4Yt4Z%2BHfeYo7kFCBVp6HNYM&X-Amz-Signature=32e74eb8df5b66e6ab5bf16b581e3e359815317c3f9d1487bc0570a6f90c6e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K7W5KSE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD5o%2BYjFIjJsZPWX%2FhnC3F0xTvLm1Uei0JhcOe1Erq7wQIhAM7QxNZQ2v5uacQVZWUdHeFmQJIBTEiOEzOg3FZOH4zrKv8DCCoQABoMNjM3NDIzMTgzODA1IgyBw3FVgA%2FNpXUlUrcq3ANV35LA8wJicU6SWuJsSzUbBYPtiQuKbWHAH9oKrNhl28VVf9AcOnmplwDqa%2BGCAEkre3wHOHCmjmm%2Fsl1W7s84%2FmACIoWmkDOMiHRhU6JiHqxCUc%2FVHGR30K1NNicCSE0f3hwUkgtDAvYklWHxuRUwTYe%2F6YmDOIEGi%2FQVibmNyquN8PkLEn%2Fk5M9Lt7aIR6DATUr5zycboGCHKP6SzJDbIelFnYRumDhoU%2BjUlDDi9eyJ3XE7DXAr5AtVB9v8qA8O3k3nRHgU9nxLX2wjky5H%2F02zg0DMbH%2B4H%2BHJx9BifLMX%2FbP7DDH8pUfrO5Jm1GNgT0sXAfLu8bgz3QrcaS60LfoHKblXymXrDh9uCL7SXrizCzUKoaejzIAa%2B4eCneSuApLFXR8QvXZw%2F2fPQWTOwkKoVisFbGvwiVjmA9lgd5xqB4ELqrQ%2BPF66yH0L7Xn70Hj01OEIRX1a7tYBx3KkYrJUasJo%2FASAKsONOwMo2MDRMFPquS6SS917zhz3jcxhz8oM8I3Ev3BV0H7BIcqeMKMZe2cUv4gp37CQggSvBN5kau7mp6QhpGjn2bWS%2F97IThkZoHLwNDwopkI4Pjq0Xr3uovsffD1yERL9t7b04hVHCg9NhBD3NBnVYjDHgKHLBjqkAdgv74n9Xk%2FhvUDemMQ5DAZd6YVqrAhrgSYlyz%2B6wVN1p0UOHPMMwstRBJQV51MjelhIvwEhejZmMgeGIJpEgw3Sh5Vp8N5Pfo7OwMXyTfJzrwEWW3GkVyZMKqbzmsHbIUgzHNDAWZ9NMaMnf2zmQlAgei4X%2Br7Kk3YSkwNK087War5IsNibI2Y%2BRSwZ6Jfr5h%2BMV4Yt4Z%2BHfeYo7kFCBVp6HNYM&X-Amz-Signature=a2113c93b0fa3f0cd3ffc2e9d86827eca141962a3bd471bd7cadcb0c1b8ba2d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K7W5KSE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD5o%2BYjFIjJsZPWX%2FhnC3F0xTvLm1Uei0JhcOe1Erq7wQIhAM7QxNZQ2v5uacQVZWUdHeFmQJIBTEiOEzOg3FZOH4zrKv8DCCoQABoMNjM3NDIzMTgzODA1IgyBw3FVgA%2FNpXUlUrcq3ANV35LA8wJicU6SWuJsSzUbBYPtiQuKbWHAH9oKrNhl28VVf9AcOnmplwDqa%2BGCAEkre3wHOHCmjmm%2Fsl1W7s84%2FmACIoWmkDOMiHRhU6JiHqxCUc%2FVHGR30K1NNicCSE0f3hwUkgtDAvYklWHxuRUwTYe%2F6YmDOIEGi%2FQVibmNyquN8PkLEn%2Fk5M9Lt7aIR6DATUr5zycboGCHKP6SzJDbIelFnYRumDhoU%2BjUlDDi9eyJ3XE7DXAr5AtVB9v8qA8O3k3nRHgU9nxLX2wjky5H%2F02zg0DMbH%2B4H%2BHJx9BifLMX%2FbP7DDH8pUfrO5Jm1GNgT0sXAfLu8bgz3QrcaS60LfoHKblXymXrDh9uCL7SXrizCzUKoaejzIAa%2B4eCneSuApLFXR8QvXZw%2F2fPQWTOwkKoVisFbGvwiVjmA9lgd5xqB4ELqrQ%2BPF66yH0L7Xn70Hj01OEIRX1a7tYBx3KkYrJUasJo%2FASAKsONOwMo2MDRMFPquS6SS917zhz3jcxhz8oM8I3Ev3BV0H7BIcqeMKMZe2cUv4gp37CQggSvBN5kau7mp6QhpGjn2bWS%2F97IThkZoHLwNDwopkI4Pjq0Xr3uovsffD1yERL9t7b04hVHCg9NhBD3NBnVYjDHgKHLBjqkAdgv74n9Xk%2FhvUDemMQ5DAZd6YVqrAhrgSYlyz%2B6wVN1p0UOHPMMwstRBJQV51MjelhIvwEhejZmMgeGIJpEgw3Sh5Vp8N5Pfo7OwMXyTfJzrwEWW3GkVyZMKqbzmsHbIUgzHNDAWZ9NMaMnf2zmQlAgei4X%2Br7Kk3YSkwNK087War5IsNibI2Y%2BRSwZ6Jfr5h%2BMV4Yt4Z%2BHfeYo7kFCBVp6HNYM&X-Amz-Signature=eccc5f78ed1ecc4733386e8560daec928227a114b53a29fc97e187a43f09d487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K7W5KSE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD5o%2BYjFIjJsZPWX%2FhnC3F0xTvLm1Uei0JhcOe1Erq7wQIhAM7QxNZQ2v5uacQVZWUdHeFmQJIBTEiOEzOg3FZOH4zrKv8DCCoQABoMNjM3NDIzMTgzODA1IgyBw3FVgA%2FNpXUlUrcq3ANV35LA8wJicU6SWuJsSzUbBYPtiQuKbWHAH9oKrNhl28VVf9AcOnmplwDqa%2BGCAEkre3wHOHCmjmm%2Fsl1W7s84%2FmACIoWmkDOMiHRhU6JiHqxCUc%2FVHGR30K1NNicCSE0f3hwUkgtDAvYklWHxuRUwTYe%2F6YmDOIEGi%2FQVibmNyquN8PkLEn%2Fk5M9Lt7aIR6DATUr5zycboGCHKP6SzJDbIelFnYRumDhoU%2BjUlDDi9eyJ3XE7DXAr5AtVB9v8qA8O3k3nRHgU9nxLX2wjky5H%2F02zg0DMbH%2B4H%2BHJx9BifLMX%2FbP7DDH8pUfrO5Jm1GNgT0sXAfLu8bgz3QrcaS60LfoHKblXymXrDh9uCL7SXrizCzUKoaejzIAa%2B4eCneSuApLFXR8QvXZw%2F2fPQWTOwkKoVisFbGvwiVjmA9lgd5xqB4ELqrQ%2BPF66yH0L7Xn70Hj01OEIRX1a7tYBx3KkYrJUasJo%2FASAKsONOwMo2MDRMFPquS6SS917zhz3jcxhz8oM8I3Ev3BV0H7BIcqeMKMZe2cUv4gp37CQggSvBN5kau7mp6QhpGjn2bWS%2F97IThkZoHLwNDwopkI4Pjq0Xr3uovsffD1yERL9t7b04hVHCg9NhBD3NBnVYjDHgKHLBjqkAdgv74n9Xk%2FhvUDemMQ5DAZd6YVqrAhrgSYlyz%2B6wVN1p0UOHPMMwstRBJQV51MjelhIvwEhejZmMgeGIJpEgw3Sh5Vp8N5Pfo7OwMXyTfJzrwEWW3GkVyZMKqbzmsHbIUgzHNDAWZ9NMaMnf2zmQlAgei4X%2Br7Kk3YSkwNK087War5IsNibI2Y%2BRSwZ6Jfr5h%2BMV4Yt4Z%2BHfeYo7kFCBVp6HNYM&X-Amz-Signature=8d226e0797e54122943a8f6242e50e65ee2ab0ae940ce8670430cdba42f16972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K7W5KSE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD5o%2BYjFIjJsZPWX%2FhnC3F0xTvLm1Uei0JhcOe1Erq7wQIhAM7QxNZQ2v5uacQVZWUdHeFmQJIBTEiOEzOg3FZOH4zrKv8DCCoQABoMNjM3NDIzMTgzODA1IgyBw3FVgA%2FNpXUlUrcq3ANV35LA8wJicU6SWuJsSzUbBYPtiQuKbWHAH9oKrNhl28VVf9AcOnmplwDqa%2BGCAEkre3wHOHCmjmm%2Fsl1W7s84%2FmACIoWmkDOMiHRhU6JiHqxCUc%2FVHGR30K1NNicCSE0f3hwUkgtDAvYklWHxuRUwTYe%2F6YmDOIEGi%2FQVibmNyquN8PkLEn%2Fk5M9Lt7aIR6DATUr5zycboGCHKP6SzJDbIelFnYRumDhoU%2BjUlDDi9eyJ3XE7DXAr5AtVB9v8qA8O3k3nRHgU9nxLX2wjky5H%2F02zg0DMbH%2B4H%2BHJx9BifLMX%2FbP7DDH8pUfrO5Jm1GNgT0sXAfLu8bgz3QrcaS60LfoHKblXymXrDh9uCL7SXrizCzUKoaejzIAa%2B4eCneSuApLFXR8QvXZw%2F2fPQWTOwkKoVisFbGvwiVjmA9lgd5xqB4ELqrQ%2BPF66yH0L7Xn70Hj01OEIRX1a7tYBx3KkYrJUasJo%2FASAKsONOwMo2MDRMFPquS6SS917zhz3jcxhz8oM8I3Ev3BV0H7BIcqeMKMZe2cUv4gp37CQggSvBN5kau7mp6QhpGjn2bWS%2F97IThkZoHLwNDwopkI4Pjq0Xr3uovsffD1yERL9t7b04hVHCg9NhBD3NBnVYjDHgKHLBjqkAdgv74n9Xk%2FhvUDemMQ5DAZd6YVqrAhrgSYlyz%2B6wVN1p0UOHPMMwstRBJQV51MjelhIvwEhejZmMgeGIJpEgw3Sh5Vp8N5Pfo7OwMXyTfJzrwEWW3GkVyZMKqbzmsHbIUgzHNDAWZ9NMaMnf2zmQlAgei4X%2Br7Kk3YSkwNK087War5IsNibI2Y%2BRSwZ6Jfr5h%2BMV4Yt4Z%2BHfeYo7kFCBVp6HNYM&X-Amz-Signature=42234ba807c89be0ea99f9a95162f45dddba15468efa2e0df58332aed9d3f91e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K7W5KSE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD5o%2BYjFIjJsZPWX%2FhnC3F0xTvLm1Uei0JhcOe1Erq7wQIhAM7QxNZQ2v5uacQVZWUdHeFmQJIBTEiOEzOg3FZOH4zrKv8DCCoQABoMNjM3NDIzMTgzODA1IgyBw3FVgA%2FNpXUlUrcq3ANV35LA8wJicU6SWuJsSzUbBYPtiQuKbWHAH9oKrNhl28VVf9AcOnmplwDqa%2BGCAEkre3wHOHCmjmm%2Fsl1W7s84%2FmACIoWmkDOMiHRhU6JiHqxCUc%2FVHGR30K1NNicCSE0f3hwUkgtDAvYklWHxuRUwTYe%2F6YmDOIEGi%2FQVibmNyquN8PkLEn%2Fk5M9Lt7aIR6DATUr5zycboGCHKP6SzJDbIelFnYRumDhoU%2BjUlDDi9eyJ3XE7DXAr5AtVB9v8qA8O3k3nRHgU9nxLX2wjky5H%2F02zg0DMbH%2B4H%2BHJx9BifLMX%2FbP7DDH8pUfrO5Jm1GNgT0sXAfLu8bgz3QrcaS60LfoHKblXymXrDh9uCL7SXrizCzUKoaejzIAa%2B4eCneSuApLFXR8QvXZw%2F2fPQWTOwkKoVisFbGvwiVjmA9lgd5xqB4ELqrQ%2BPF66yH0L7Xn70Hj01OEIRX1a7tYBx3KkYrJUasJo%2FASAKsONOwMo2MDRMFPquS6SS917zhz3jcxhz8oM8I3Ev3BV0H7BIcqeMKMZe2cUv4gp37CQggSvBN5kau7mp6QhpGjn2bWS%2F97IThkZoHLwNDwopkI4Pjq0Xr3uovsffD1yERL9t7b04hVHCg9NhBD3NBnVYjDHgKHLBjqkAdgv74n9Xk%2FhvUDemMQ5DAZd6YVqrAhrgSYlyz%2B6wVN1p0UOHPMMwstRBJQV51MjelhIvwEhejZmMgeGIJpEgw3Sh5Vp8N5Pfo7OwMXyTfJzrwEWW3GkVyZMKqbzmsHbIUgzHNDAWZ9NMaMnf2zmQlAgei4X%2Br7Kk3YSkwNK087War5IsNibI2Y%2BRSwZ6Jfr5h%2BMV4Yt4Z%2BHfeYo7kFCBVp6HNYM&X-Amz-Signature=d18e25f101956a077ac566ef222ba48969040c50e2e4d2a824f4a13ba6eecd4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K7W5KSE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD5o%2BYjFIjJsZPWX%2FhnC3F0xTvLm1Uei0JhcOe1Erq7wQIhAM7QxNZQ2v5uacQVZWUdHeFmQJIBTEiOEzOg3FZOH4zrKv8DCCoQABoMNjM3NDIzMTgzODA1IgyBw3FVgA%2FNpXUlUrcq3ANV35LA8wJicU6SWuJsSzUbBYPtiQuKbWHAH9oKrNhl28VVf9AcOnmplwDqa%2BGCAEkre3wHOHCmjmm%2Fsl1W7s84%2FmACIoWmkDOMiHRhU6JiHqxCUc%2FVHGR30K1NNicCSE0f3hwUkgtDAvYklWHxuRUwTYe%2F6YmDOIEGi%2FQVibmNyquN8PkLEn%2Fk5M9Lt7aIR6DATUr5zycboGCHKP6SzJDbIelFnYRumDhoU%2BjUlDDi9eyJ3XE7DXAr5AtVB9v8qA8O3k3nRHgU9nxLX2wjky5H%2F02zg0DMbH%2B4H%2BHJx9BifLMX%2FbP7DDH8pUfrO5Jm1GNgT0sXAfLu8bgz3QrcaS60LfoHKblXymXrDh9uCL7SXrizCzUKoaejzIAa%2B4eCneSuApLFXR8QvXZw%2F2fPQWTOwkKoVisFbGvwiVjmA9lgd5xqB4ELqrQ%2BPF66yH0L7Xn70Hj01OEIRX1a7tYBx3KkYrJUasJo%2FASAKsONOwMo2MDRMFPquS6SS917zhz3jcxhz8oM8I3Ev3BV0H7BIcqeMKMZe2cUv4gp37CQggSvBN5kau7mp6QhpGjn2bWS%2F97IThkZoHLwNDwopkI4Pjq0Xr3uovsffD1yERL9t7b04hVHCg9NhBD3NBnVYjDHgKHLBjqkAdgv74n9Xk%2FhvUDemMQ5DAZd6YVqrAhrgSYlyz%2B6wVN1p0UOHPMMwstRBJQV51MjelhIvwEhejZmMgeGIJpEgw3Sh5Vp8N5Pfo7OwMXyTfJzrwEWW3GkVyZMKqbzmsHbIUgzHNDAWZ9NMaMnf2zmQlAgei4X%2Br7Kk3YSkwNK087War5IsNibI2Y%2BRSwZ6Jfr5h%2BMV4Yt4Z%2BHfeYo7kFCBVp6HNYM&X-Amz-Signature=7763e0894f1ff673ecc6f45ed60e835497dce181aea55a2979624c5d30bc65a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K7W5KSE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD5o%2BYjFIjJsZPWX%2FhnC3F0xTvLm1Uei0JhcOe1Erq7wQIhAM7QxNZQ2v5uacQVZWUdHeFmQJIBTEiOEzOg3FZOH4zrKv8DCCoQABoMNjM3NDIzMTgzODA1IgyBw3FVgA%2FNpXUlUrcq3ANV35LA8wJicU6SWuJsSzUbBYPtiQuKbWHAH9oKrNhl28VVf9AcOnmplwDqa%2BGCAEkre3wHOHCmjmm%2Fsl1W7s84%2FmACIoWmkDOMiHRhU6JiHqxCUc%2FVHGR30K1NNicCSE0f3hwUkgtDAvYklWHxuRUwTYe%2F6YmDOIEGi%2FQVibmNyquN8PkLEn%2Fk5M9Lt7aIR6DATUr5zycboGCHKP6SzJDbIelFnYRumDhoU%2BjUlDDi9eyJ3XE7DXAr5AtVB9v8qA8O3k3nRHgU9nxLX2wjky5H%2F02zg0DMbH%2B4H%2BHJx9BifLMX%2FbP7DDH8pUfrO5Jm1GNgT0sXAfLu8bgz3QrcaS60LfoHKblXymXrDh9uCL7SXrizCzUKoaejzIAa%2B4eCneSuApLFXR8QvXZw%2F2fPQWTOwkKoVisFbGvwiVjmA9lgd5xqB4ELqrQ%2BPF66yH0L7Xn70Hj01OEIRX1a7tYBx3KkYrJUasJo%2FASAKsONOwMo2MDRMFPquS6SS917zhz3jcxhz8oM8I3Ev3BV0H7BIcqeMKMZe2cUv4gp37CQggSvBN5kau7mp6QhpGjn2bWS%2F97IThkZoHLwNDwopkI4Pjq0Xr3uovsffD1yERL9t7b04hVHCg9NhBD3NBnVYjDHgKHLBjqkAdgv74n9Xk%2FhvUDemMQ5DAZd6YVqrAhrgSYlyz%2B6wVN1p0UOHPMMwstRBJQV51MjelhIvwEhejZmMgeGIJpEgw3Sh5Vp8N5Pfo7OwMXyTfJzrwEWW3GkVyZMKqbzmsHbIUgzHNDAWZ9NMaMnf2zmQlAgei4X%2Br7Kk3YSkwNK087War5IsNibI2Y%2BRSwZ6Jfr5h%2BMV4Yt4Z%2BHfeYo7kFCBVp6HNYM&X-Amz-Signature=874dcd83deac68e0215e39d375dfa38a19e87aeb87711d43baadce52f4e64ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K7W5KSE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD5o%2BYjFIjJsZPWX%2FhnC3F0xTvLm1Uei0JhcOe1Erq7wQIhAM7QxNZQ2v5uacQVZWUdHeFmQJIBTEiOEzOg3FZOH4zrKv8DCCoQABoMNjM3NDIzMTgzODA1IgyBw3FVgA%2FNpXUlUrcq3ANV35LA8wJicU6SWuJsSzUbBYPtiQuKbWHAH9oKrNhl28VVf9AcOnmplwDqa%2BGCAEkre3wHOHCmjmm%2Fsl1W7s84%2FmACIoWmkDOMiHRhU6JiHqxCUc%2FVHGR30K1NNicCSE0f3hwUkgtDAvYklWHxuRUwTYe%2F6YmDOIEGi%2FQVibmNyquN8PkLEn%2Fk5M9Lt7aIR6DATUr5zycboGCHKP6SzJDbIelFnYRumDhoU%2BjUlDDi9eyJ3XE7DXAr5AtVB9v8qA8O3k3nRHgU9nxLX2wjky5H%2F02zg0DMbH%2B4H%2BHJx9BifLMX%2FbP7DDH8pUfrO5Jm1GNgT0sXAfLu8bgz3QrcaS60LfoHKblXymXrDh9uCL7SXrizCzUKoaejzIAa%2B4eCneSuApLFXR8QvXZw%2F2fPQWTOwkKoVisFbGvwiVjmA9lgd5xqB4ELqrQ%2BPF66yH0L7Xn70Hj01OEIRX1a7tYBx3KkYrJUasJo%2FASAKsONOwMo2MDRMFPquS6SS917zhz3jcxhz8oM8I3Ev3BV0H7BIcqeMKMZe2cUv4gp37CQggSvBN5kau7mp6QhpGjn2bWS%2F97IThkZoHLwNDwopkI4Pjq0Xr3uovsffD1yERL9t7b04hVHCg9NhBD3NBnVYjDHgKHLBjqkAdgv74n9Xk%2FhvUDemMQ5DAZd6YVqrAhrgSYlyz%2B6wVN1p0UOHPMMwstRBJQV51MjelhIvwEhejZmMgeGIJpEgw3Sh5Vp8N5Pfo7OwMXyTfJzrwEWW3GkVyZMKqbzmsHbIUgzHNDAWZ9NMaMnf2zmQlAgei4X%2Br7Kk3YSkwNK087War5IsNibI2Y%2BRSwZ6Jfr5h%2BMV4Yt4Z%2BHfeYo7kFCBVp6HNYM&X-Amz-Signature=45db725db4a45bd39eb3aea6b68a33de1906118c80b811998d05fcbda93e57a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K7W5KSE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD5o%2BYjFIjJsZPWX%2FhnC3F0xTvLm1Uei0JhcOe1Erq7wQIhAM7QxNZQ2v5uacQVZWUdHeFmQJIBTEiOEzOg3FZOH4zrKv8DCCoQABoMNjM3NDIzMTgzODA1IgyBw3FVgA%2FNpXUlUrcq3ANV35LA8wJicU6SWuJsSzUbBYPtiQuKbWHAH9oKrNhl28VVf9AcOnmplwDqa%2BGCAEkre3wHOHCmjmm%2Fsl1W7s84%2FmACIoWmkDOMiHRhU6JiHqxCUc%2FVHGR30K1NNicCSE0f3hwUkgtDAvYklWHxuRUwTYe%2F6YmDOIEGi%2FQVibmNyquN8PkLEn%2Fk5M9Lt7aIR6DATUr5zycboGCHKP6SzJDbIelFnYRumDhoU%2BjUlDDi9eyJ3XE7DXAr5AtVB9v8qA8O3k3nRHgU9nxLX2wjky5H%2F02zg0DMbH%2B4H%2BHJx9BifLMX%2FbP7DDH8pUfrO5Jm1GNgT0sXAfLu8bgz3QrcaS60LfoHKblXymXrDh9uCL7SXrizCzUKoaejzIAa%2B4eCneSuApLFXR8QvXZw%2F2fPQWTOwkKoVisFbGvwiVjmA9lgd5xqB4ELqrQ%2BPF66yH0L7Xn70Hj01OEIRX1a7tYBx3KkYrJUasJo%2FASAKsONOwMo2MDRMFPquS6SS917zhz3jcxhz8oM8I3Ev3BV0H7BIcqeMKMZe2cUv4gp37CQggSvBN5kau7mp6QhpGjn2bWS%2F97IThkZoHLwNDwopkI4Pjq0Xr3uovsffD1yERL9t7b04hVHCg9NhBD3NBnVYjDHgKHLBjqkAdgv74n9Xk%2FhvUDemMQ5DAZd6YVqrAhrgSYlyz%2B6wVN1p0UOHPMMwstRBJQV51MjelhIvwEhejZmMgeGIJpEgw3Sh5Vp8N5Pfo7OwMXyTfJzrwEWW3GkVyZMKqbzmsHbIUgzHNDAWZ9NMaMnf2zmQlAgei4X%2Br7Kk3YSkwNK087War5IsNibI2Y%2BRSwZ6Jfr5h%2BMV4Yt4Z%2BHfeYo7kFCBVp6HNYM&X-Amz-Signature=23e0e6f840e01fea64f084327362d85934d4adaaad33000f3f201795a3ba6a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K7W5KSE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD5o%2BYjFIjJsZPWX%2FhnC3F0xTvLm1Uei0JhcOe1Erq7wQIhAM7QxNZQ2v5uacQVZWUdHeFmQJIBTEiOEzOg3FZOH4zrKv8DCCoQABoMNjM3NDIzMTgzODA1IgyBw3FVgA%2FNpXUlUrcq3ANV35LA8wJicU6SWuJsSzUbBYPtiQuKbWHAH9oKrNhl28VVf9AcOnmplwDqa%2BGCAEkre3wHOHCmjmm%2Fsl1W7s84%2FmACIoWmkDOMiHRhU6JiHqxCUc%2FVHGR30K1NNicCSE0f3hwUkgtDAvYklWHxuRUwTYe%2F6YmDOIEGi%2FQVibmNyquN8PkLEn%2Fk5M9Lt7aIR6DATUr5zycboGCHKP6SzJDbIelFnYRumDhoU%2BjUlDDi9eyJ3XE7DXAr5AtVB9v8qA8O3k3nRHgU9nxLX2wjky5H%2F02zg0DMbH%2B4H%2BHJx9BifLMX%2FbP7DDH8pUfrO5Jm1GNgT0sXAfLu8bgz3QrcaS60LfoHKblXymXrDh9uCL7SXrizCzUKoaejzIAa%2B4eCneSuApLFXR8QvXZw%2F2fPQWTOwkKoVisFbGvwiVjmA9lgd5xqB4ELqrQ%2BPF66yH0L7Xn70Hj01OEIRX1a7tYBx3KkYrJUasJo%2FASAKsONOwMo2MDRMFPquS6SS917zhz3jcxhz8oM8I3Ev3BV0H7BIcqeMKMZe2cUv4gp37CQggSvBN5kau7mp6QhpGjn2bWS%2F97IThkZoHLwNDwopkI4Pjq0Xr3uovsffD1yERL9t7b04hVHCg9NhBD3NBnVYjDHgKHLBjqkAdgv74n9Xk%2FhvUDemMQ5DAZd6YVqrAhrgSYlyz%2B6wVN1p0UOHPMMwstRBJQV51MjelhIvwEhejZmMgeGIJpEgw3Sh5Vp8N5Pfo7OwMXyTfJzrwEWW3GkVyZMKqbzmsHbIUgzHNDAWZ9NMaMnf2zmQlAgei4X%2Br7Kk3YSkwNK087War5IsNibI2Y%2BRSwZ6Jfr5h%2BMV4Yt4Z%2BHfeYo7kFCBVp6HNYM&X-Amz-Signature=4f5fd1e74b8092788658a5edb42fbb8bb5574260dc7d4601e52e8e23f0c22151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
