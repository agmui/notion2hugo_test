---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-29T23:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-29T23:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SYMV3S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6l%2FEriU8AZR%2FhLwaA4mtZv3RsztMV1kI9cj6GuZSCXQIhAK0%2BuLbFMb5HxGd%2BvB0BsuzFab3VWYqPsKPM7o7X2Vc7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHlMcpk3U7O7QP8oUq3APtQRj3od9PJioGE%2Bb%2FqY3jiofk7LUwXUFT9HSjC1GvND4H7%2F7bXKXAzbWXKC2kY4xSjNfxloZ2DMzEwNqUl7k2%2BDNi%2BcfNiA9rJSKxd6yqhqcObNa%2BUlLUGnk6hfHRUgZMPl%2BTeruXVW8KxmNJdb4RkplcBo9i2maMEFBMkQ8JfHxgiK8ZZTzZBRKykGFvAAXlu3JJTbhcKlLH%2F7320MFku0nAkk9P77t%2B7b2syiUFn4kbLOUHhZGe3BgYL7e%2BEMmLW3QbjSvqvrB09ltijZNNXtlYN42TZe6WyM05A4%2Fkcdq1%2FnU%2F1sQ9Zjh%2BV9dfe5s5DDLJ2N6UnwcWjhTvlh%2B5SHNGEW4fdACw1BiM3j5pBDiEmyl%2B0N2CY4PQ6DeX4Dq2wQwLp9UAIDkrmA7QWe2Xgo8wwv5%2FcagMxgYyX0a8V312cz6Tck0rpRrwi%2FZQBeahIeWV0UYtQRGuOMTe4ahCCPf2sRJXofQXaMvtBWqBVWd9QaBdwWqZOHkJfDq78axNoyCn4d1CIitWzv%2Bq2f6Wg9AthRZIdYPJ3SF4ZlUb98Cpfi12Tid%2F9qaF4IvdubYKhXfmP2m84TmStv62IdlDAbmbDbzWMVvp6Sd8DGe0e855hLIWN2yYQrSj9TCwuKXEBjqkAXew%2FSTSrx%2FR36dr1FSti6HwoXMpSJNVXglBcIjEet5vHUhLOtGgeTdBvALSeGjUcfq%2BEywPM9Et0vnb6kD1bh183acNLmo0Vm22Kbb1BUe0e2BJ2JwbLAQ5rIb5RZHRaHPJz8xMQhI6qElEyuk8BVydsNgKAv%2Fr9xzoWHKZIToKWFOJXoiuQ0Er5m37HWCc7G3naL9N%2BzLGyTpIphzIgGqLec%2Fw&X-Amz-Signature=7a74321800d48c5d451516b2153326a494fb7168231213b95cceb5ea508f99a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: add rviz guide of viewing scanned map

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SYMV3S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6l%2FEriU8AZR%2FhLwaA4mtZv3RsztMV1kI9cj6GuZSCXQIhAK0%2BuLbFMb5HxGd%2BvB0BsuzFab3VWYqPsKPM7o7X2Vc7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHlMcpk3U7O7QP8oUq3APtQRj3od9PJioGE%2Bb%2FqY3jiofk7LUwXUFT9HSjC1GvND4H7%2F7bXKXAzbWXKC2kY4xSjNfxloZ2DMzEwNqUl7k2%2BDNi%2BcfNiA9rJSKxd6yqhqcObNa%2BUlLUGnk6hfHRUgZMPl%2BTeruXVW8KxmNJdb4RkplcBo9i2maMEFBMkQ8JfHxgiK8ZZTzZBRKykGFvAAXlu3JJTbhcKlLH%2F7320MFku0nAkk9P77t%2B7b2syiUFn4kbLOUHhZGe3BgYL7e%2BEMmLW3QbjSvqvrB09ltijZNNXtlYN42TZe6WyM05A4%2Fkcdq1%2FnU%2F1sQ9Zjh%2BV9dfe5s5DDLJ2N6UnwcWjhTvlh%2B5SHNGEW4fdACw1BiM3j5pBDiEmyl%2B0N2CY4PQ6DeX4Dq2wQwLp9UAIDkrmA7QWe2Xgo8wwv5%2FcagMxgYyX0a8V312cz6Tck0rpRrwi%2FZQBeahIeWV0UYtQRGuOMTe4ahCCPf2sRJXofQXaMvtBWqBVWd9QaBdwWqZOHkJfDq78axNoyCn4d1CIitWzv%2Bq2f6Wg9AthRZIdYPJ3SF4ZlUb98Cpfi12Tid%2F9qaF4IvdubYKhXfmP2m84TmStv62IdlDAbmbDbzWMVvp6Sd8DGe0e855hLIWN2yYQrSj9TCwuKXEBjqkAXew%2FSTSrx%2FR36dr1FSti6HwoXMpSJNVXglBcIjEet5vHUhLOtGgeTdBvALSeGjUcfq%2BEywPM9Et0vnb6kD1bh183acNLmo0Vm22Kbb1BUe0e2BJ2JwbLAQ5rIb5RZHRaHPJz8xMQhI6qElEyuk8BVydsNgKAv%2Fr9xzoWHKZIToKWFOJXoiuQ0Er5m37HWCc7G3naL9N%2BzLGyTpIphzIgGqLec%2Fw&X-Amz-Signature=fc26b69b9836642ab8c6fac28f95dd4b846eab9b33020d5fd4786ac57ae13072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SYMV3S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6l%2FEriU8AZR%2FhLwaA4mtZv3RsztMV1kI9cj6GuZSCXQIhAK0%2BuLbFMb5HxGd%2BvB0BsuzFab3VWYqPsKPM7o7X2Vc7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHlMcpk3U7O7QP8oUq3APtQRj3od9PJioGE%2Bb%2FqY3jiofk7LUwXUFT9HSjC1GvND4H7%2F7bXKXAzbWXKC2kY4xSjNfxloZ2DMzEwNqUl7k2%2BDNi%2BcfNiA9rJSKxd6yqhqcObNa%2BUlLUGnk6hfHRUgZMPl%2BTeruXVW8KxmNJdb4RkplcBo9i2maMEFBMkQ8JfHxgiK8ZZTzZBRKykGFvAAXlu3JJTbhcKlLH%2F7320MFku0nAkk9P77t%2B7b2syiUFn4kbLOUHhZGe3BgYL7e%2BEMmLW3QbjSvqvrB09ltijZNNXtlYN42TZe6WyM05A4%2Fkcdq1%2FnU%2F1sQ9Zjh%2BV9dfe5s5DDLJ2N6UnwcWjhTvlh%2B5SHNGEW4fdACw1BiM3j5pBDiEmyl%2B0N2CY4PQ6DeX4Dq2wQwLp9UAIDkrmA7QWe2Xgo8wwv5%2FcagMxgYyX0a8V312cz6Tck0rpRrwi%2FZQBeahIeWV0UYtQRGuOMTe4ahCCPf2sRJXofQXaMvtBWqBVWd9QaBdwWqZOHkJfDq78axNoyCn4d1CIitWzv%2Bq2f6Wg9AthRZIdYPJ3SF4ZlUb98Cpfi12Tid%2F9qaF4IvdubYKhXfmP2m84TmStv62IdlDAbmbDbzWMVvp6Sd8DGe0e855hLIWN2yYQrSj9TCwuKXEBjqkAXew%2FSTSrx%2FR36dr1FSti6HwoXMpSJNVXglBcIjEet5vHUhLOtGgeTdBvALSeGjUcfq%2BEywPM9Et0vnb6kD1bh183acNLmo0Vm22Kbb1BUe0e2BJ2JwbLAQ5rIb5RZHRaHPJz8xMQhI6qElEyuk8BVydsNgKAv%2Fr9xzoWHKZIToKWFOJXoiuQ0Er5m37HWCc7G3naL9N%2BzLGyTpIphzIgGqLec%2Fw&X-Amz-Signature=caa0b46ec94f2497c35307b6b18d3a97ea247882fff2ac89d33b1b121ffd34a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

### SLAM Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SYMV3S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6l%2FEriU8AZR%2FhLwaA4mtZv3RsztMV1kI9cj6GuZSCXQIhAK0%2BuLbFMb5HxGd%2BvB0BsuzFab3VWYqPsKPM7o7X2Vc7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHlMcpk3U7O7QP8oUq3APtQRj3od9PJioGE%2Bb%2FqY3jiofk7LUwXUFT9HSjC1GvND4H7%2F7bXKXAzbWXKC2kY4xSjNfxloZ2DMzEwNqUl7k2%2BDNi%2BcfNiA9rJSKxd6yqhqcObNa%2BUlLUGnk6hfHRUgZMPl%2BTeruXVW8KxmNJdb4RkplcBo9i2maMEFBMkQ8JfHxgiK8ZZTzZBRKykGFvAAXlu3JJTbhcKlLH%2F7320MFku0nAkk9P77t%2B7b2syiUFn4kbLOUHhZGe3BgYL7e%2BEMmLW3QbjSvqvrB09ltijZNNXtlYN42TZe6WyM05A4%2Fkcdq1%2FnU%2F1sQ9Zjh%2BV9dfe5s5DDLJ2N6UnwcWjhTvlh%2B5SHNGEW4fdACw1BiM3j5pBDiEmyl%2B0N2CY4PQ6DeX4Dq2wQwLp9UAIDkrmA7QWe2Xgo8wwv5%2FcagMxgYyX0a8V312cz6Tck0rpRrwi%2FZQBeahIeWV0UYtQRGuOMTe4ahCCPf2sRJXofQXaMvtBWqBVWd9QaBdwWqZOHkJfDq78axNoyCn4d1CIitWzv%2Bq2f6Wg9AthRZIdYPJ3SF4ZlUb98Cpfi12Tid%2F9qaF4IvdubYKhXfmP2m84TmStv62IdlDAbmbDbzWMVvp6Sd8DGe0e855hLIWN2yYQrSj9TCwuKXEBjqkAXew%2FSTSrx%2FR36dr1FSti6HwoXMpSJNVXglBcIjEet5vHUhLOtGgeTdBvALSeGjUcfq%2BEywPM9Et0vnb6kD1bh183acNLmo0Vm22Kbb1BUe0e2BJ2JwbLAQ5rIb5RZHRaHPJz8xMQhI6qElEyuk8BVydsNgKAv%2Fr9xzoWHKZIToKWFOJXoiuQ0Er5m37HWCc7G3naL9N%2BzLGyTpIphzIgGqLec%2Fw&X-Amz-Signature=9f9631ba96519341459300683d6ac6fa0281baf7ff92e0a7ddfa2bd7e42c72dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SYMV3S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6l%2FEriU8AZR%2FhLwaA4mtZv3RsztMV1kI9cj6GuZSCXQIhAK0%2BuLbFMb5HxGd%2BvB0BsuzFab3VWYqPsKPM7o7X2Vc7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHlMcpk3U7O7QP8oUq3APtQRj3od9PJioGE%2Bb%2FqY3jiofk7LUwXUFT9HSjC1GvND4H7%2F7bXKXAzbWXKC2kY4xSjNfxloZ2DMzEwNqUl7k2%2BDNi%2BcfNiA9rJSKxd6yqhqcObNa%2BUlLUGnk6hfHRUgZMPl%2BTeruXVW8KxmNJdb4RkplcBo9i2maMEFBMkQ8JfHxgiK8ZZTzZBRKykGFvAAXlu3JJTbhcKlLH%2F7320MFku0nAkk9P77t%2B7b2syiUFn4kbLOUHhZGe3BgYL7e%2BEMmLW3QbjSvqvrB09ltijZNNXtlYN42TZe6WyM05A4%2Fkcdq1%2FnU%2F1sQ9Zjh%2BV9dfe5s5DDLJ2N6UnwcWjhTvlh%2B5SHNGEW4fdACw1BiM3j5pBDiEmyl%2B0N2CY4PQ6DeX4Dq2wQwLp9UAIDkrmA7QWe2Xgo8wwv5%2FcagMxgYyX0a8V312cz6Tck0rpRrwi%2FZQBeahIeWV0UYtQRGuOMTe4ahCCPf2sRJXofQXaMvtBWqBVWd9QaBdwWqZOHkJfDq78axNoyCn4d1CIitWzv%2Bq2f6Wg9AthRZIdYPJ3SF4ZlUb98Cpfi12Tid%2F9qaF4IvdubYKhXfmP2m84TmStv62IdlDAbmbDbzWMVvp6Sd8DGe0e855hLIWN2yYQrSj9TCwuKXEBjqkAXew%2FSTSrx%2FR36dr1FSti6HwoXMpSJNVXglBcIjEet5vHUhLOtGgeTdBvALSeGjUcfq%2BEywPM9Et0vnb6kD1bh183acNLmo0Vm22Kbb1BUe0e2BJ2JwbLAQ5rIb5RZHRaHPJz8xMQhI6qElEyuk8BVydsNgKAv%2Fr9xzoWHKZIToKWFOJXoiuQ0Er5m37HWCc7G3naL9N%2BzLGyTpIphzIgGqLec%2Fw&X-Amz-Signature=ea1684791f66f16cda30b08a2eccb8f432c9788a8b011062a7f8c4689383c743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SYMV3S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6l%2FEriU8AZR%2FhLwaA4mtZv3RsztMV1kI9cj6GuZSCXQIhAK0%2BuLbFMb5HxGd%2BvB0BsuzFab3VWYqPsKPM7o7X2Vc7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHlMcpk3U7O7QP8oUq3APtQRj3od9PJioGE%2Bb%2FqY3jiofk7LUwXUFT9HSjC1GvND4H7%2F7bXKXAzbWXKC2kY4xSjNfxloZ2DMzEwNqUl7k2%2BDNi%2BcfNiA9rJSKxd6yqhqcObNa%2BUlLUGnk6hfHRUgZMPl%2BTeruXVW8KxmNJdb4RkplcBo9i2maMEFBMkQ8JfHxgiK8ZZTzZBRKykGFvAAXlu3JJTbhcKlLH%2F7320MFku0nAkk9P77t%2B7b2syiUFn4kbLOUHhZGe3BgYL7e%2BEMmLW3QbjSvqvrB09ltijZNNXtlYN42TZe6WyM05A4%2Fkcdq1%2FnU%2F1sQ9Zjh%2BV9dfe5s5DDLJ2N6UnwcWjhTvlh%2B5SHNGEW4fdACw1BiM3j5pBDiEmyl%2B0N2CY4PQ6DeX4Dq2wQwLp9UAIDkrmA7QWe2Xgo8wwv5%2FcagMxgYyX0a8V312cz6Tck0rpRrwi%2FZQBeahIeWV0UYtQRGuOMTe4ahCCPf2sRJXofQXaMvtBWqBVWd9QaBdwWqZOHkJfDq78axNoyCn4d1CIitWzv%2Bq2f6Wg9AthRZIdYPJ3SF4ZlUb98Cpfi12Tid%2F9qaF4IvdubYKhXfmP2m84TmStv62IdlDAbmbDbzWMVvp6Sd8DGe0e855hLIWN2yYQrSj9TCwuKXEBjqkAXew%2FSTSrx%2FR36dr1FSti6HwoXMpSJNVXglBcIjEet5vHUhLOtGgeTdBvALSeGjUcfq%2BEywPM9Et0vnb6kD1bh183acNLmo0Vm22Kbb1BUe0e2BJ2JwbLAQ5rIb5RZHRaHPJz8xMQhI6qElEyuk8BVydsNgKAv%2Fr9xzoWHKZIToKWFOJXoiuQ0Er5m37HWCc7G3naL9N%2BzLGyTpIphzIgGqLec%2Fw&X-Amz-Signature=0ecef6b038878babcc52325e7e28416c9a29e6eeecaa4ae4edfb96aedbb83998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SYMV3S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6l%2FEriU8AZR%2FhLwaA4mtZv3RsztMV1kI9cj6GuZSCXQIhAK0%2BuLbFMb5HxGd%2BvB0BsuzFab3VWYqPsKPM7o7X2Vc7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHlMcpk3U7O7QP8oUq3APtQRj3od9PJioGE%2Bb%2FqY3jiofk7LUwXUFT9HSjC1GvND4H7%2F7bXKXAzbWXKC2kY4xSjNfxloZ2DMzEwNqUl7k2%2BDNi%2BcfNiA9rJSKxd6yqhqcObNa%2BUlLUGnk6hfHRUgZMPl%2BTeruXVW8KxmNJdb4RkplcBo9i2maMEFBMkQ8JfHxgiK8ZZTzZBRKykGFvAAXlu3JJTbhcKlLH%2F7320MFku0nAkk9P77t%2B7b2syiUFn4kbLOUHhZGe3BgYL7e%2BEMmLW3QbjSvqvrB09ltijZNNXtlYN42TZe6WyM05A4%2Fkcdq1%2FnU%2F1sQ9Zjh%2BV9dfe5s5DDLJ2N6UnwcWjhTvlh%2B5SHNGEW4fdACw1BiM3j5pBDiEmyl%2B0N2CY4PQ6DeX4Dq2wQwLp9UAIDkrmA7QWe2Xgo8wwv5%2FcagMxgYyX0a8V312cz6Tck0rpRrwi%2FZQBeahIeWV0UYtQRGuOMTe4ahCCPf2sRJXofQXaMvtBWqBVWd9QaBdwWqZOHkJfDq78axNoyCn4d1CIitWzv%2Bq2f6Wg9AthRZIdYPJ3SF4ZlUb98Cpfi12Tid%2F9qaF4IvdubYKhXfmP2m84TmStv62IdlDAbmbDbzWMVvp6Sd8DGe0e855hLIWN2yYQrSj9TCwuKXEBjqkAXew%2FSTSrx%2FR36dr1FSti6HwoXMpSJNVXglBcIjEet5vHUhLOtGgeTdBvALSeGjUcfq%2BEywPM9Et0vnb6kD1bh183acNLmo0Vm22Kbb1BUe0e2BJ2JwbLAQ5rIb5RZHRaHPJz8xMQhI6qElEyuk8BVydsNgKAv%2Fr9xzoWHKZIToKWFOJXoiuQ0Er5m37HWCc7G3naL9N%2BzLGyTpIphzIgGqLec%2Fw&X-Amz-Signature=c062094d303560293f6c89e86edf3c7dc7cb885660cf46594690225876cddd60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SYMV3S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6l%2FEriU8AZR%2FhLwaA4mtZv3RsztMV1kI9cj6GuZSCXQIhAK0%2BuLbFMb5HxGd%2BvB0BsuzFab3VWYqPsKPM7o7X2Vc7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHlMcpk3U7O7QP8oUq3APtQRj3od9PJioGE%2Bb%2FqY3jiofk7LUwXUFT9HSjC1GvND4H7%2F7bXKXAzbWXKC2kY4xSjNfxloZ2DMzEwNqUl7k2%2BDNi%2BcfNiA9rJSKxd6yqhqcObNa%2BUlLUGnk6hfHRUgZMPl%2BTeruXVW8KxmNJdb4RkplcBo9i2maMEFBMkQ8JfHxgiK8ZZTzZBRKykGFvAAXlu3JJTbhcKlLH%2F7320MFku0nAkk9P77t%2B7b2syiUFn4kbLOUHhZGe3BgYL7e%2BEMmLW3QbjSvqvrB09ltijZNNXtlYN42TZe6WyM05A4%2Fkcdq1%2FnU%2F1sQ9Zjh%2BV9dfe5s5DDLJ2N6UnwcWjhTvlh%2B5SHNGEW4fdACw1BiM3j5pBDiEmyl%2B0N2CY4PQ6DeX4Dq2wQwLp9UAIDkrmA7QWe2Xgo8wwv5%2FcagMxgYyX0a8V312cz6Tck0rpRrwi%2FZQBeahIeWV0UYtQRGuOMTe4ahCCPf2sRJXofQXaMvtBWqBVWd9QaBdwWqZOHkJfDq78axNoyCn4d1CIitWzv%2Bq2f6Wg9AthRZIdYPJ3SF4ZlUb98Cpfi12Tid%2F9qaF4IvdubYKhXfmP2m84TmStv62IdlDAbmbDbzWMVvp6Sd8DGe0e855hLIWN2yYQrSj9TCwuKXEBjqkAXew%2FSTSrx%2FR36dr1FSti6HwoXMpSJNVXglBcIjEet5vHUhLOtGgeTdBvALSeGjUcfq%2BEywPM9Et0vnb6kD1bh183acNLmo0Vm22Kbb1BUe0e2BJ2JwbLAQ5rIb5RZHRaHPJz8xMQhI6qElEyuk8BVydsNgKAv%2Fr9xzoWHKZIToKWFOJXoiuQ0Er5m37HWCc7G3naL9N%2BzLGyTpIphzIgGqLec%2Fw&X-Amz-Signature=7bf6f7ce63e70b35dacfabeba5fe43b045e48cf41adab873a127d4d9f86d12fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SYMV3S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6l%2FEriU8AZR%2FhLwaA4mtZv3RsztMV1kI9cj6GuZSCXQIhAK0%2BuLbFMb5HxGd%2BvB0BsuzFab3VWYqPsKPM7o7X2Vc7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHlMcpk3U7O7QP8oUq3APtQRj3od9PJioGE%2Bb%2FqY3jiofk7LUwXUFT9HSjC1GvND4H7%2F7bXKXAzbWXKC2kY4xSjNfxloZ2DMzEwNqUl7k2%2BDNi%2BcfNiA9rJSKxd6yqhqcObNa%2BUlLUGnk6hfHRUgZMPl%2BTeruXVW8KxmNJdb4RkplcBo9i2maMEFBMkQ8JfHxgiK8ZZTzZBRKykGFvAAXlu3JJTbhcKlLH%2F7320MFku0nAkk9P77t%2B7b2syiUFn4kbLOUHhZGe3BgYL7e%2BEMmLW3QbjSvqvrB09ltijZNNXtlYN42TZe6WyM05A4%2Fkcdq1%2FnU%2F1sQ9Zjh%2BV9dfe5s5DDLJ2N6UnwcWjhTvlh%2B5SHNGEW4fdACw1BiM3j5pBDiEmyl%2B0N2CY4PQ6DeX4Dq2wQwLp9UAIDkrmA7QWe2Xgo8wwv5%2FcagMxgYyX0a8V312cz6Tck0rpRrwi%2FZQBeahIeWV0UYtQRGuOMTe4ahCCPf2sRJXofQXaMvtBWqBVWd9QaBdwWqZOHkJfDq78axNoyCn4d1CIitWzv%2Bq2f6Wg9AthRZIdYPJ3SF4ZlUb98Cpfi12Tid%2F9qaF4IvdubYKhXfmP2m84TmStv62IdlDAbmbDbzWMVvp6Sd8DGe0e855hLIWN2yYQrSj9TCwuKXEBjqkAXew%2FSTSrx%2FR36dr1FSti6HwoXMpSJNVXglBcIjEet5vHUhLOtGgeTdBvALSeGjUcfq%2BEywPM9Et0vnb6kD1bh183acNLmo0Vm22Kbb1BUe0e2BJ2JwbLAQ5rIb5RZHRaHPJz8xMQhI6qElEyuk8BVydsNgKAv%2Fr9xzoWHKZIToKWFOJXoiuQ0Er5m37HWCc7G3naL9N%2BzLGyTpIphzIgGqLec%2Fw&X-Amz-Signature=de69738056288bda186317d82eec32ec29e62f3bb97d6af895f3eb0af6772bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SYMV3S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6l%2FEriU8AZR%2FhLwaA4mtZv3RsztMV1kI9cj6GuZSCXQIhAK0%2BuLbFMb5HxGd%2BvB0BsuzFab3VWYqPsKPM7o7X2Vc7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHlMcpk3U7O7QP8oUq3APtQRj3od9PJioGE%2Bb%2FqY3jiofk7LUwXUFT9HSjC1GvND4H7%2F7bXKXAzbWXKC2kY4xSjNfxloZ2DMzEwNqUl7k2%2BDNi%2BcfNiA9rJSKxd6yqhqcObNa%2BUlLUGnk6hfHRUgZMPl%2BTeruXVW8KxmNJdb4RkplcBo9i2maMEFBMkQ8JfHxgiK8ZZTzZBRKykGFvAAXlu3JJTbhcKlLH%2F7320MFku0nAkk9P77t%2B7b2syiUFn4kbLOUHhZGe3BgYL7e%2BEMmLW3QbjSvqvrB09ltijZNNXtlYN42TZe6WyM05A4%2Fkcdq1%2FnU%2F1sQ9Zjh%2BV9dfe5s5DDLJ2N6UnwcWjhTvlh%2B5SHNGEW4fdACw1BiM3j5pBDiEmyl%2B0N2CY4PQ6DeX4Dq2wQwLp9UAIDkrmA7QWe2Xgo8wwv5%2FcagMxgYyX0a8V312cz6Tck0rpRrwi%2FZQBeahIeWV0UYtQRGuOMTe4ahCCPf2sRJXofQXaMvtBWqBVWd9QaBdwWqZOHkJfDq78axNoyCn4d1CIitWzv%2Bq2f6Wg9AthRZIdYPJ3SF4ZlUb98Cpfi12Tid%2F9qaF4IvdubYKhXfmP2m84TmStv62IdlDAbmbDbzWMVvp6Sd8DGe0e855hLIWN2yYQrSj9TCwuKXEBjqkAXew%2FSTSrx%2FR36dr1FSti6HwoXMpSJNVXglBcIjEet5vHUhLOtGgeTdBvALSeGjUcfq%2BEywPM9Et0vnb6kD1bh183acNLmo0Vm22Kbb1BUe0e2BJ2JwbLAQ5rIb5RZHRaHPJz8xMQhI6qElEyuk8BVydsNgKAv%2Fr9xzoWHKZIToKWFOJXoiuQ0Er5m37HWCc7G3naL9N%2BzLGyTpIphzIgGqLec%2Fw&X-Amz-Signature=f9e4ee423b82c90d9dee1ff036cf5cbdf507bfd2764dcea2c216adf5c1725ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SYMV3S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6l%2FEriU8AZR%2FhLwaA4mtZv3RsztMV1kI9cj6GuZSCXQIhAK0%2BuLbFMb5HxGd%2BvB0BsuzFab3VWYqPsKPM7o7X2Vc7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHlMcpk3U7O7QP8oUq3APtQRj3od9PJioGE%2Bb%2FqY3jiofk7LUwXUFT9HSjC1GvND4H7%2F7bXKXAzbWXKC2kY4xSjNfxloZ2DMzEwNqUl7k2%2BDNi%2BcfNiA9rJSKxd6yqhqcObNa%2BUlLUGnk6hfHRUgZMPl%2BTeruXVW8KxmNJdb4RkplcBo9i2maMEFBMkQ8JfHxgiK8ZZTzZBRKykGFvAAXlu3JJTbhcKlLH%2F7320MFku0nAkk9P77t%2B7b2syiUFn4kbLOUHhZGe3BgYL7e%2BEMmLW3QbjSvqvrB09ltijZNNXtlYN42TZe6WyM05A4%2Fkcdq1%2FnU%2F1sQ9Zjh%2BV9dfe5s5DDLJ2N6UnwcWjhTvlh%2B5SHNGEW4fdACw1BiM3j5pBDiEmyl%2B0N2CY4PQ6DeX4Dq2wQwLp9UAIDkrmA7QWe2Xgo8wwv5%2FcagMxgYyX0a8V312cz6Tck0rpRrwi%2FZQBeahIeWV0UYtQRGuOMTe4ahCCPf2sRJXofQXaMvtBWqBVWd9QaBdwWqZOHkJfDq78axNoyCn4d1CIitWzv%2Bq2f6Wg9AthRZIdYPJ3SF4ZlUb98Cpfi12Tid%2F9qaF4IvdubYKhXfmP2m84TmStv62IdlDAbmbDbzWMVvp6Sd8DGe0e855hLIWN2yYQrSj9TCwuKXEBjqkAXew%2FSTSrx%2FR36dr1FSti6HwoXMpSJNVXglBcIjEet5vHUhLOtGgeTdBvALSeGjUcfq%2BEywPM9Et0vnb6kD1bh183acNLmo0Vm22Kbb1BUe0e2BJ2JwbLAQ5rIb5RZHRaHPJz8xMQhI6qElEyuk8BVydsNgKAv%2Fr9xzoWHKZIToKWFOJXoiuQ0Er5m37HWCc7G3naL9N%2BzLGyTpIphzIgGqLec%2Fw&X-Amz-Signature=49958b94122950b748fa80868c933180e23fecc4a60b2043e6274e403eb8309c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SYMV3S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6l%2FEriU8AZR%2FhLwaA4mtZv3RsztMV1kI9cj6GuZSCXQIhAK0%2BuLbFMb5HxGd%2BvB0BsuzFab3VWYqPsKPM7o7X2Vc7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHlMcpk3U7O7QP8oUq3APtQRj3od9PJioGE%2Bb%2FqY3jiofk7LUwXUFT9HSjC1GvND4H7%2F7bXKXAzbWXKC2kY4xSjNfxloZ2DMzEwNqUl7k2%2BDNi%2BcfNiA9rJSKxd6yqhqcObNa%2BUlLUGnk6hfHRUgZMPl%2BTeruXVW8KxmNJdb4RkplcBo9i2maMEFBMkQ8JfHxgiK8ZZTzZBRKykGFvAAXlu3JJTbhcKlLH%2F7320MFku0nAkk9P77t%2B7b2syiUFn4kbLOUHhZGe3BgYL7e%2BEMmLW3QbjSvqvrB09ltijZNNXtlYN42TZe6WyM05A4%2Fkcdq1%2FnU%2F1sQ9Zjh%2BV9dfe5s5DDLJ2N6UnwcWjhTvlh%2B5SHNGEW4fdACw1BiM3j5pBDiEmyl%2B0N2CY4PQ6DeX4Dq2wQwLp9UAIDkrmA7QWe2Xgo8wwv5%2FcagMxgYyX0a8V312cz6Tck0rpRrwi%2FZQBeahIeWV0UYtQRGuOMTe4ahCCPf2sRJXofQXaMvtBWqBVWd9QaBdwWqZOHkJfDq78axNoyCn4d1CIitWzv%2Bq2f6Wg9AthRZIdYPJ3SF4ZlUb98Cpfi12Tid%2F9qaF4IvdubYKhXfmP2m84TmStv62IdlDAbmbDbzWMVvp6Sd8DGe0e855hLIWN2yYQrSj9TCwuKXEBjqkAXew%2FSTSrx%2FR36dr1FSti6HwoXMpSJNVXglBcIjEet5vHUhLOtGgeTdBvALSeGjUcfq%2BEywPM9Et0vnb6kD1bh183acNLmo0Vm22Kbb1BUe0e2BJ2JwbLAQ5rIb5RZHRaHPJz8xMQhI6qElEyuk8BVydsNgKAv%2Fr9xzoWHKZIToKWFOJXoiuQ0Er5m37HWCc7G3naL9N%2BzLGyTpIphzIgGqLec%2Fw&X-Amz-Signature=9b5569ec76c57d60caddee2d0945c8dbae1fc4c43317e34e21328ded35f832fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SYMV3S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6l%2FEriU8AZR%2FhLwaA4mtZv3RsztMV1kI9cj6GuZSCXQIhAK0%2BuLbFMb5HxGd%2BvB0BsuzFab3VWYqPsKPM7o7X2Vc7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHlMcpk3U7O7QP8oUq3APtQRj3od9PJioGE%2Bb%2FqY3jiofk7LUwXUFT9HSjC1GvND4H7%2F7bXKXAzbWXKC2kY4xSjNfxloZ2DMzEwNqUl7k2%2BDNi%2BcfNiA9rJSKxd6yqhqcObNa%2BUlLUGnk6hfHRUgZMPl%2BTeruXVW8KxmNJdb4RkplcBo9i2maMEFBMkQ8JfHxgiK8ZZTzZBRKykGFvAAXlu3JJTbhcKlLH%2F7320MFku0nAkk9P77t%2B7b2syiUFn4kbLOUHhZGe3BgYL7e%2BEMmLW3QbjSvqvrB09ltijZNNXtlYN42TZe6WyM05A4%2Fkcdq1%2FnU%2F1sQ9Zjh%2BV9dfe5s5DDLJ2N6UnwcWjhTvlh%2B5SHNGEW4fdACw1BiM3j5pBDiEmyl%2B0N2CY4PQ6DeX4Dq2wQwLp9UAIDkrmA7QWe2Xgo8wwv5%2FcagMxgYyX0a8V312cz6Tck0rpRrwi%2FZQBeahIeWV0UYtQRGuOMTe4ahCCPf2sRJXofQXaMvtBWqBVWd9QaBdwWqZOHkJfDq78axNoyCn4d1CIitWzv%2Bq2f6Wg9AthRZIdYPJ3SF4ZlUb98Cpfi12Tid%2F9qaF4IvdubYKhXfmP2m84TmStv62IdlDAbmbDbzWMVvp6Sd8DGe0e855hLIWN2yYQrSj9TCwuKXEBjqkAXew%2FSTSrx%2FR36dr1FSti6HwoXMpSJNVXglBcIjEet5vHUhLOtGgeTdBvALSeGjUcfq%2BEywPM9Et0vnb6kD1bh183acNLmo0Vm22Kbb1BUe0e2BJ2JwbLAQ5rIb5RZHRaHPJz8xMQhI6qElEyuk8BVydsNgKAv%2Fr9xzoWHKZIToKWFOJXoiuQ0Er5m37HWCc7G3naL9N%2BzLGyTpIphzIgGqLec%2Fw&X-Amz-Signature=b18822ccf6b7615fca0cea637465ef02c340c1a54359e2b3492e21b0e914fec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SYMV3S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6l%2FEriU8AZR%2FhLwaA4mtZv3RsztMV1kI9cj6GuZSCXQIhAK0%2BuLbFMb5HxGd%2BvB0BsuzFab3VWYqPsKPM7o7X2Vc7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHlMcpk3U7O7QP8oUq3APtQRj3od9PJioGE%2Bb%2FqY3jiofk7LUwXUFT9HSjC1GvND4H7%2F7bXKXAzbWXKC2kY4xSjNfxloZ2DMzEwNqUl7k2%2BDNi%2BcfNiA9rJSKxd6yqhqcObNa%2BUlLUGnk6hfHRUgZMPl%2BTeruXVW8KxmNJdb4RkplcBo9i2maMEFBMkQ8JfHxgiK8ZZTzZBRKykGFvAAXlu3JJTbhcKlLH%2F7320MFku0nAkk9P77t%2B7b2syiUFn4kbLOUHhZGe3BgYL7e%2BEMmLW3QbjSvqvrB09ltijZNNXtlYN42TZe6WyM05A4%2Fkcdq1%2FnU%2F1sQ9Zjh%2BV9dfe5s5DDLJ2N6UnwcWjhTvlh%2B5SHNGEW4fdACw1BiM3j5pBDiEmyl%2B0N2CY4PQ6DeX4Dq2wQwLp9UAIDkrmA7QWe2Xgo8wwv5%2FcagMxgYyX0a8V312cz6Tck0rpRrwi%2FZQBeahIeWV0UYtQRGuOMTe4ahCCPf2sRJXofQXaMvtBWqBVWd9QaBdwWqZOHkJfDq78axNoyCn4d1CIitWzv%2Bq2f6Wg9AthRZIdYPJ3SF4ZlUb98Cpfi12Tid%2F9qaF4IvdubYKhXfmP2m84TmStv62IdlDAbmbDbzWMVvp6Sd8DGe0e855hLIWN2yYQrSj9TCwuKXEBjqkAXew%2FSTSrx%2FR36dr1FSti6HwoXMpSJNVXglBcIjEet5vHUhLOtGgeTdBvALSeGjUcfq%2BEywPM9Et0vnb6kD1bh183acNLmo0Vm22Kbb1BUe0e2BJ2JwbLAQ5rIb5RZHRaHPJz8xMQhI6qElEyuk8BVydsNgKAv%2Fr9xzoWHKZIToKWFOJXoiuQ0Er5m37HWCc7G3naL9N%2BzLGyTpIphzIgGqLec%2Fw&X-Amz-Signature=4045858a601c8031a458b9f19566068c493c50a8cf9599af49500b3bc812563e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
