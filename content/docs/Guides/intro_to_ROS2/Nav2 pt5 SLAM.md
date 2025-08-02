---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFBF6NU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvAwlt6LJdGecIAGj5c88Epxes7DQF75G%2F2pbPDG7XPAiA25jV%2BjNG0Gvwh0uSLChO9BuZm99CroQACrEE%2F35RQGCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8psTYbC6GCLLT28KtwDr8wXQhilnoRQx1YSUcpO9Ip37FHdRIEWfDR%2Bw%2FDiMpjYABWVXBJ5Q5R2iWwrE5eFB4N%2B71vrqsGmDYx%2BgvVIjWmfCl2IWZewP5S52YDIRmQ7H4PIqJBoAj74VYHpbBoa1nWbCplQgL%2BW6vUKePG4eQFsXwH1esAq5L%2B6NTkeOCDJYGxWEd3Ry825gQa%2FrZTnFxefT0KXFTYig4gS6CwH0mvsZpbmJpDc8acDClw7X3GKcwJdtuVkIfEL68fUCAUNBWFG9NUnK8Fy%2FtBlDpJRnBTpIjbk%2FiNmPq6C4nE69yylMW5E9VawCCnghfPj5%2BttvL8u98lcBr6GCdwRxfhdw8V4cgOIRgq%2Bmqqk0CFFTOmBdIGeZPa8PV96jNd%2F3OglO86GWMygBcTR9si3BpknjDLovJELr2rYe1tFw34BMkv3ZMHMlDvubU9e9Ce9KrJ%2Fu8f7cqdVpjadSwSA0CO0PJ2cvPqCQVjgRAKAdjPH9mLyUo3xVoaJvSHKJ6%2Fynr%2FcWTwClqepLZUUpOWXTp61qUYAPT%2F82A%2B1YaBM%2BRJSrtH3KPQj1oZ4CyF9B%2FssFwOZSELn452mTFg5nSQE74hZ7ORCkCse7ucC%2B7ikb1CLqFWtIAtsDEEN700aQGAws5y2xAY6pgEkWkQ8Qbq0uREdkc1lB7tbk5HyPE%2FlZYkAfGy%2BqbiZE0Uuhxx9jXmeRKnG8f4QuA0j4gtmQvtgQmFKv13I0tL6I57zsea88TRG5CsOfV1pJ1TJvZgR6DFxBfW4D8rP%2BXWvMvRVn32fG%2F74GC33V%2BBmLpWpgAxigROLY%2F5zb5ZRkNnugMlezcKIlhAdV4uP%2FrIUZxG2io1ANWXWTXGuVQJi7Csn%2Bw4e&X-Amz-Signature=a9347e32d8ba9a300f5000d35874211e38a129ade51c49bfb8cb74e16e54c0e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFBF6NU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvAwlt6LJdGecIAGj5c88Epxes7DQF75G%2F2pbPDG7XPAiA25jV%2BjNG0Gvwh0uSLChO9BuZm99CroQACrEE%2F35RQGCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8psTYbC6GCLLT28KtwDr8wXQhilnoRQx1YSUcpO9Ip37FHdRIEWfDR%2Bw%2FDiMpjYABWVXBJ5Q5R2iWwrE5eFB4N%2B71vrqsGmDYx%2BgvVIjWmfCl2IWZewP5S52YDIRmQ7H4PIqJBoAj74VYHpbBoa1nWbCplQgL%2BW6vUKePG4eQFsXwH1esAq5L%2B6NTkeOCDJYGxWEd3Ry825gQa%2FrZTnFxefT0KXFTYig4gS6CwH0mvsZpbmJpDc8acDClw7X3GKcwJdtuVkIfEL68fUCAUNBWFG9NUnK8Fy%2FtBlDpJRnBTpIjbk%2FiNmPq6C4nE69yylMW5E9VawCCnghfPj5%2BttvL8u98lcBr6GCdwRxfhdw8V4cgOIRgq%2Bmqqk0CFFTOmBdIGeZPa8PV96jNd%2F3OglO86GWMygBcTR9si3BpknjDLovJELr2rYe1tFw34BMkv3ZMHMlDvubU9e9Ce9KrJ%2Fu8f7cqdVpjadSwSA0CO0PJ2cvPqCQVjgRAKAdjPH9mLyUo3xVoaJvSHKJ6%2Fynr%2FcWTwClqepLZUUpOWXTp61qUYAPT%2F82A%2B1YaBM%2BRJSrtH3KPQj1oZ4CyF9B%2FssFwOZSELn452mTFg5nSQE74hZ7ORCkCse7ucC%2B7ikb1CLqFWtIAtsDEEN700aQGAws5y2xAY6pgEkWkQ8Qbq0uREdkc1lB7tbk5HyPE%2FlZYkAfGy%2BqbiZE0Uuhxx9jXmeRKnG8f4QuA0j4gtmQvtgQmFKv13I0tL6I57zsea88TRG5CsOfV1pJ1TJvZgR6DFxBfW4D8rP%2BXWvMvRVn32fG%2F74GC33V%2BBmLpWpgAxigROLY%2F5zb5ZRkNnugMlezcKIlhAdV4uP%2FrIUZxG2io1ANWXWTXGuVQJi7Csn%2Bw4e&X-Amz-Signature=1be8895d789c176f94a0350d2de76af7b4ba862b3163c6e176a68bc29fa35f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFBF6NU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvAwlt6LJdGecIAGj5c88Epxes7DQF75G%2F2pbPDG7XPAiA25jV%2BjNG0Gvwh0uSLChO9BuZm99CroQACrEE%2F35RQGCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8psTYbC6GCLLT28KtwDr8wXQhilnoRQx1YSUcpO9Ip37FHdRIEWfDR%2Bw%2FDiMpjYABWVXBJ5Q5R2iWwrE5eFB4N%2B71vrqsGmDYx%2BgvVIjWmfCl2IWZewP5S52YDIRmQ7H4PIqJBoAj74VYHpbBoa1nWbCplQgL%2BW6vUKePG4eQFsXwH1esAq5L%2B6NTkeOCDJYGxWEd3Ry825gQa%2FrZTnFxefT0KXFTYig4gS6CwH0mvsZpbmJpDc8acDClw7X3GKcwJdtuVkIfEL68fUCAUNBWFG9NUnK8Fy%2FtBlDpJRnBTpIjbk%2FiNmPq6C4nE69yylMW5E9VawCCnghfPj5%2BttvL8u98lcBr6GCdwRxfhdw8V4cgOIRgq%2Bmqqk0CFFTOmBdIGeZPa8PV96jNd%2F3OglO86GWMygBcTR9si3BpknjDLovJELr2rYe1tFw34BMkv3ZMHMlDvubU9e9Ce9KrJ%2Fu8f7cqdVpjadSwSA0CO0PJ2cvPqCQVjgRAKAdjPH9mLyUo3xVoaJvSHKJ6%2Fynr%2FcWTwClqepLZUUpOWXTp61qUYAPT%2F82A%2B1YaBM%2BRJSrtH3KPQj1oZ4CyF9B%2FssFwOZSELn452mTFg5nSQE74hZ7ORCkCse7ucC%2B7ikb1CLqFWtIAtsDEEN700aQGAws5y2xAY6pgEkWkQ8Qbq0uREdkc1lB7tbk5HyPE%2FlZYkAfGy%2BqbiZE0Uuhxx9jXmeRKnG8f4QuA0j4gtmQvtgQmFKv13I0tL6I57zsea88TRG5CsOfV1pJ1TJvZgR6DFxBfW4D8rP%2BXWvMvRVn32fG%2F74GC33V%2BBmLpWpgAxigROLY%2F5zb5ZRkNnugMlezcKIlhAdV4uP%2FrIUZxG2io1ANWXWTXGuVQJi7Csn%2Bw4e&X-Amz-Signature=11963177fedad9d02751816ff4b9501ad2512eef3e0fb67ed2e1cd8f4ca8c7c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFBF6NU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvAwlt6LJdGecIAGj5c88Epxes7DQF75G%2F2pbPDG7XPAiA25jV%2BjNG0Gvwh0uSLChO9BuZm99CroQACrEE%2F35RQGCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8psTYbC6GCLLT28KtwDr8wXQhilnoRQx1YSUcpO9Ip37FHdRIEWfDR%2Bw%2FDiMpjYABWVXBJ5Q5R2iWwrE5eFB4N%2B71vrqsGmDYx%2BgvVIjWmfCl2IWZewP5S52YDIRmQ7H4PIqJBoAj74VYHpbBoa1nWbCplQgL%2BW6vUKePG4eQFsXwH1esAq5L%2B6NTkeOCDJYGxWEd3Ry825gQa%2FrZTnFxefT0KXFTYig4gS6CwH0mvsZpbmJpDc8acDClw7X3GKcwJdtuVkIfEL68fUCAUNBWFG9NUnK8Fy%2FtBlDpJRnBTpIjbk%2FiNmPq6C4nE69yylMW5E9VawCCnghfPj5%2BttvL8u98lcBr6GCdwRxfhdw8V4cgOIRgq%2Bmqqk0CFFTOmBdIGeZPa8PV96jNd%2F3OglO86GWMygBcTR9si3BpknjDLovJELr2rYe1tFw34BMkv3ZMHMlDvubU9e9Ce9KrJ%2Fu8f7cqdVpjadSwSA0CO0PJ2cvPqCQVjgRAKAdjPH9mLyUo3xVoaJvSHKJ6%2Fynr%2FcWTwClqepLZUUpOWXTp61qUYAPT%2F82A%2B1YaBM%2BRJSrtH3KPQj1oZ4CyF9B%2FssFwOZSELn452mTFg5nSQE74hZ7ORCkCse7ucC%2B7ikb1CLqFWtIAtsDEEN700aQGAws5y2xAY6pgEkWkQ8Qbq0uREdkc1lB7tbk5HyPE%2FlZYkAfGy%2BqbiZE0Uuhxx9jXmeRKnG8f4QuA0j4gtmQvtgQmFKv13I0tL6I57zsea88TRG5CsOfV1pJ1TJvZgR6DFxBfW4D8rP%2BXWvMvRVn32fG%2F74GC33V%2BBmLpWpgAxigROLY%2F5zb5ZRkNnugMlezcKIlhAdV4uP%2FrIUZxG2io1ANWXWTXGuVQJi7Csn%2Bw4e&X-Amz-Signature=e1511c26e8e2eca72b7766f5c6dd46d6bdee295e5f396061b606a31fed7e4fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFBF6NU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvAwlt6LJdGecIAGj5c88Epxes7DQF75G%2F2pbPDG7XPAiA25jV%2BjNG0Gvwh0uSLChO9BuZm99CroQACrEE%2F35RQGCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8psTYbC6GCLLT28KtwDr8wXQhilnoRQx1YSUcpO9Ip37FHdRIEWfDR%2Bw%2FDiMpjYABWVXBJ5Q5R2iWwrE5eFB4N%2B71vrqsGmDYx%2BgvVIjWmfCl2IWZewP5S52YDIRmQ7H4PIqJBoAj74VYHpbBoa1nWbCplQgL%2BW6vUKePG4eQFsXwH1esAq5L%2B6NTkeOCDJYGxWEd3Ry825gQa%2FrZTnFxefT0KXFTYig4gS6CwH0mvsZpbmJpDc8acDClw7X3GKcwJdtuVkIfEL68fUCAUNBWFG9NUnK8Fy%2FtBlDpJRnBTpIjbk%2FiNmPq6C4nE69yylMW5E9VawCCnghfPj5%2BttvL8u98lcBr6GCdwRxfhdw8V4cgOIRgq%2Bmqqk0CFFTOmBdIGeZPa8PV96jNd%2F3OglO86GWMygBcTR9si3BpknjDLovJELr2rYe1tFw34BMkv3ZMHMlDvubU9e9Ce9KrJ%2Fu8f7cqdVpjadSwSA0CO0PJ2cvPqCQVjgRAKAdjPH9mLyUo3xVoaJvSHKJ6%2Fynr%2FcWTwClqepLZUUpOWXTp61qUYAPT%2F82A%2B1YaBM%2BRJSrtH3KPQj1oZ4CyF9B%2FssFwOZSELn452mTFg5nSQE74hZ7ORCkCse7ucC%2B7ikb1CLqFWtIAtsDEEN700aQGAws5y2xAY6pgEkWkQ8Qbq0uREdkc1lB7tbk5HyPE%2FlZYkAfGy%2BqbiZE0Uuhxx9jXmeRKnG8f4QuA0j4gtmQvtgQmFKv13I0tL6I57zsea88TRG5CsOfV1pJ1TJvZgR6DFxBfW4D8rP%2BXWvMvRVn32fG%2F74GC33V%2BBmLpWpgAxigROLY%2F5zb5ZRkNnugMlezcKIlhAdV4uP%2FrIUZxG2io1ANWXWTXGuVQJi7Csn%2Bw4e&X-Amz-Signature=643715444f0b67085e94de0833f2364f350f8e2e9b7b9f07c3da06fc468ec28b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFBF6NU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvAwlt6LJdGecIAGj5c88Epxes7DQF75G%2F2pbPDG7XPAiA25jV%2BjNG0Gvwh0uSLChO9BuZm99CroQACrEE%2F35RQGCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8psTYbC6GCLLT28KtwDr8wXQhilnoRQx1YSUcpO9Ip37FHdRIEWfDR%2Bw%2FDiMpjYABWVXBJ5Q5R2iWwrE5eFB4N%2B71vrqsGmDYx%2BgvVIjWmfCl2IWZewP5S52YDIRmQ7H4PIqJBoAj74VYHpbBoa1nWbCplQgL%2BW6vUKePG4eQFsXwH1esAq5L%2B6NTkeOCDJYGxWEd3Ry825gQa%2FrZTnFxefT0KXFTYig4gS6CwH0mvsZpbmJpDc8acDClw7X3GKcwJdtuVkIfEL68fUCAUNBWFG9NUnK8Fy%2FtBlDpJRnBTpIjbk%2FiNmPq6C4nE69yylMW5E9VawCCnghfPj5%2BttvL8u98lcBr6GCdwRxfhdw8V4cgOIRgq%2Bmqqk0CFFTOmBdIGeZPa8PV96jNd%2F3OglO86GWMygBcTR9si3BpknjDLovJELr2rYe1tFw34BMkv3ZMHMlDvubU9e9Ce9KrJ%2Fu8f7cqdVpjadSwSA0CO0PJ2cvPqCQVjgRAKAdjPH9mLyUo3xVoaJvSHKJ6%2Fynr%2FcWTwClqepLZUUpOWXTp61qUYAPT%2F82A%2B1YaBM%2BRJSrtH3KPQj1oZ4CyF9B%2FssFwOZSELn452mTFg5nSQE74hZ7ORCkCse7ucC%2B7ikb1CLqFWtIAtsDEEN700aQGAws5y2xAY6pgEkWkQ8Qbq0uREdkc1lB7tbk5HyPE%2FlZYkAfGy%2BqbiZE0Uuhxx9jXmeRKnG8f4QuA0j4gtmQvtgQmFKv13I0tL6I57zsea88TRG5CsOfV1pJ1TJvZgR6DFxBfW4D8rP%2BXWvMvRVn32fG%2F74GC33V%2BBmLpWpgAxigROLY%2F5zb5ZRkNnugMlezcKIlhAdV4uP%2FrIUZxG2io1ANWXWTXGuVQJi7Csn%2Bw4e&X-Amz-Signature=9f863b2cb6f37364e047ff11e855c6a40278c21d99e2a4172e1b5525f8cbdcf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFBF6NU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvAwlt6LJdGecIAGj5c88Epxes7DQF75G%2F2pbPDG7XPAiA25jV%2BjNG0Gvwh0uSLChO9BuZm99CroQACrEE%2F35RQGCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8psTYbC6GCLLT28KtwDr8wXQhilnoRQx1YSUcpO9Ip37FHdRIEWfDR%2Bw%2FDiMpjYABWVXBJ5Q5R2iWwrE5eFB4N%2B71vrqsGmDYx%2BgvVIjWmfCl2IWZewP5S52YDIRmQ7H4PIqJBoAj74VYHpbBoa1nWbCplQgL%2BW6vUKePG4eQFsXwH1esAq5L%2B6NTkeOCDJYGxWEd3Ry825gQa%2FrZTnFxefT0KXFTYig4gS6CwH0mvsZpbmJpDc8acDClw7X3GKcwJdtuVkIfEL68fUCAUNBWFG9NUnK8Fy%2FtBlDpJRnBTpIjbk%2FiNmPq6C4nE69yylMW5E9VawCCnghfPj5%2BttvL8u98lcBr6GCdwRxfhdw8V4cgOIRgq%2Bmqqk0CFFTOmBdIGeZPa8PV96jNd%2F3OglO86GWMygBcTR9si3BpknjDLovJELr2rYe1tFw34BMkv3ZMHMlDvubU9e9Ce9KrJ%2Fu8f7cqdVpjadSwSA0CO0PJ2cvPqCQVjgRAKAdjPH9mLyUo3xVoaJvSHKJ6%2Fynr%2FcWTwClqepLZUUpOWXTp61qUYAPT%2F82A%2B1YaBM%2BRJSrtH3KPQj1oZ4CyF9B%2FssFwOZSELn452mTFg5nSQE74hZ7ORCkCse7ucC%2B7ikb1CLqFWtIAtsDEEN700aQGAws5y2xAY6pgEkWkQ8Qbq0uREdkc1lB7tbk5HyPE%2FlZYkAfGy%2BqbiZE0Uuhxx9jXmeRKnG8f4QuA0j4gtmQvtgQmFKv13I0tL6I57zsea88TRG5CsOfV1pJ1TJvZgR6DFxBfW4D8rP%2BXWvMvRVn32fG%2F74GC33V%2BBmLpWpgAxigROLY%2F5zb5ZRkNnugMlezcKIlhAdV4uP%2FrIUZxG2io1ANWXWTXGuVQJi7Csn%2Bw4e&X-Amz-Signature=e378fb18e6ef19728fff0e9253f35917657f5ebea929adc903dc00fc98ca4c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFBF6NU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvAwlt6LJdGecIAGj5c88Epxes7DQF75G%2F2pbPDG7XPAiA25jV%2BjNG0Gvwh0uSLChO9BuZm99CroQACrEE%2F35RQGCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8psTYbC6GCLLT28KtwDr8wXQhilnoRQx1YSUcpO9Ip37FHdRIEWfDR%2Bw%2FDiMpjYABWVXBJ5Q5R2iWwrE5eFB4N%2B71vrqsGmDYx%2BgvVIjWmfCl2IWZewP5S52YDIRmQ7H4PIqJBoAj74VYHpbBoa1nWbCplQgL%2BW6vUKePG4eQFsXwH1esAq5L%2B6NTkeOCDJYGxWEd3Ry825gQa%2FrZTnFxefT0KXFTYig4gS6CwH0mvsZpbmJpDc8acDClw7X3GKcwJdtuVkIfEL68fUCAUNBWFG9NUnK8Fy%2FtBlDpJRnBTpIjbk%2FiNmPq6C4nE69yylMW5E9VawCCnghfPj5%2BttvL8u98lcBr6GCdwRxfhdw8V4cgOIRgq%2Bmqqk0CFFTOmBdIGeZPa8PV96jNd%2F3OglO86GWMygBcTR9si3BpknjDLovJELr2rYe1tFw34BMkv3ZMHMlDvubU9e9Ce9KrJ%2Fu8f7cqdVpjadSwSA0CO0PJ2cvPqCQVjgRAKAdjPH9mLyUo3xVoaJvSHKJ6%2Fynr%2FcWTwClqepLZUUpOWXTp61qUYAPT%2F82A%2B1YaBM%2BRJSrtH3KPQj1oZ4CyF9B%2FssFwOZSELn452mTFg5nSQE74hZ7ORCkCse7ucC%2B7ikb1CLqFWtIAtsDEEN700aQGAws5y2xAY6pgEkWkQ8Qbq0uREdkc1lB7tbk5HyPE%2FlZYkAfGy%2BqbiZE0Uuhxx9jXmeRKnG8f4QuA0j4gtmQvtgQmFKv13I0tL6I57zsea88TRG5CsOfV1pJ1TJvZgR6DFxBfW4D8rP%2BXWvMvRVn32fG%2F74GC33V%2BBmLpWpgAxigROLY%2F5zb5ZRkNnugMlezcKIlhAdV4uP%2FrIUZxG2io1ANWXWTXGuVQJi7Csn%2Bw4e&X-Amz-Signature=950b63059f8b2141bf190594856e303fca53d09750dea8034ba313d47fe62830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFBF6NU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvAwlt6LJdGecIAGj5c88Epxes7DQF75G%2F2pbPDG7XPAiA25jV%2BjNG0Gvwh0uSLChO9BuZm99CroQACrEE%2F35RQGCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8psTYbC6GCLLT28KtwDr8wXQhilnoRQx1YSUcpO9Ip37FHdRIEWfDR%2Bw%2FDiMpjYABWVXBJ5Q5R2iWwrE5eFB4N%2B71vrqsGmDYx%2BgvVIjWmfCl2IWZewP5S52YDIRmQ7H4PIqJBoAj74VYHpbBoa1nWbCplQgL%2BW6vUKePG4eQFsXwH1esAq5L%2B6NTkeOCDJYGxWEd3Ry825gQa%2FrZTnFxefT0KXFTYig4gS6CwH0mvsZpbmJpDc8acDClw7X3GKcwJdtuVkIfEL68fUCAUNBWFG9NUnK8Fy%2FtBlDpJRnBTpIjbk%2FiNmPq6C4nE69yylMW5E9VawCCnghfPj5%2BttvL8u98lcBr6GCdwRxfhdw8V4cgOIRgq%2Bmqqk0CFFTOmBdIGeZPa8PV96jNd%2F3OglO86GWMygBcTR9si3BpknjDLovJELr2rYe1tFw34BMkv3ZMHMlDvubU9e9Ce9KrJ%2Fu8f7cqdVpjadSwSA0CO0PJ2cvPqCQVjgRAKAdjPH9mLyUo3xVoaJvSHKJ6%2Fynr%2FcWTwClqepLZUUpOWXTp61qUYAPT%2F82A%2B1YaBM%2BRJSrtH3KPQj1oZ4CyF9B%2FssFwOZSELn452mTFg5nSQE74hZ7ORCkCse7ucC%2B7ikb1CLqFWtIAtsDEEN700aQGAws5y2xAY6pgEkWkQ8Qbq0uREdkc1lB7tbk5HyPE%2FlZYkAfGy%2BqbiZE0Uuhxx9jXmeRKnG8f4QuA0j4gtmQvtgQmFKv13I0tL6I57zsea88TRG5CsOfV1pJ1TJvZgR6DFxBfW4D8rP%2BXWvMvRVn32fG%2F74GC33V%2BBmLpWpgAxigROLY%2F5zb5ZRkNnugMlezcKIlhAdV4uP%2FrIUZxG2io1ANWXWTXGuVQJi7Csn%2Bw4e&X-Amz-Signature=c0f452621a7522d82915544268bc72e021554832bc9ce106f370992ab136a763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFBF6NU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvAwlt6LJdGecIAGj5c88Epxes7DQF75G%2F2pbPDG7XPAiA25jV%2BjNG0Gvwh0uSLChO9BuZm99CroQACrEE%2F35RQGCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8psTYbC6GCLLT28KtwDr8wXQhilnoRQx1YSUcpO9Ip37FHdRIEWfDR%2Bw%2FDiMpjYABWVXBJ5Q5R2iWwrE5eFB4N%2B71vrqsGmDYx%2BgvVIjWmfCl2IWZewP5S52YDIRmQ7H4PIqJBoAj74VYHpbBoa1nWbCplQgL%2BW6vUKePG4eQFsXwH1esAq5L%2B6NTkeOCDJYGxWEd3Ry825gQa%2FrZTnFxefT0KXFTYig4gS6CwH0mvsZpbmJpDc8acDClw7X3GKcwJdtuVkIfEL68fUCAUNBWFG9NUnK8Fy%2FtBlDpJRnBTpIjbk%2FiNmPq6C4nE69yylMW5E9VawCCnghfPj5%2BttvL8u98lcBr6GCdwRxfhdw8V4cgOIRgq%2Bmqqk0CFFTOmBdIGeZPa8PV96jNd%2F3OglO86GWMygBcTR9si3BpknjDLovJELr2rYe1tFw34BMkv3ZMHMlDvubU9e9Ce9KrJ%2Fu8f7cqdVpjadSwSA0CO0PJ2cvPqCQVjgRAKAdjPH9mLyUo3xVoaJvSHKJ6%2Fynr%2FcWTwClqepLZUUpOWXTp61qUYAPT%2F82A%2B1YaBM%2BRJSrtH3KPQj1oZ4CyF9B%2FssFwOZSELn452mTFg5nSQE74hZ7ORCkCse7ucC%2B7ikb1CLqFWtIAtsDEEN700aQGAws5y2xAY6pgEkWkQ8Qbq0uREdkc1lB7tbk5HyPE%2FlZYkAfGy%2BqbiZE0Uuhxx9jXmeRKnG8f4QuA0j4gtmQvtgQmFKv13I0tL6I57zsea88TRG5CsOfV1pJ1TJvZgR6DFxBfW4D8rP%2BXWvMvRVn32fG%2F74GC33V%2BBmLpWpgAxigROLY%2F5zb5ZRkNnugMlezcKIlhAdV4uP%2FrIUZxG2io1ANWXWTXGuVQJi7Csn%2Bw4e&X-Amz-Signature=4e0ba6101804f0901f7adf58be6c13b863272029e70bbc831f103d8aac2fcdfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFBF6NU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvAwlt6LJdGecIAGj5c88Epxes7DQF75G%2F2pbPDG7XPAiA25jV%2BjNG0Gvwh0uSLChO9BuZm99CroQACrEE%2F35RQGCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8psTYbC6GCLLT28KtwDr8wXQhilnoRQx1YSUcpO9Ip37FHdRIEWfDR%2Bw%2FDiMpjYABWVXBJ5Q5R2iWwrE5eFB4N%2B71vrqsGmDYx%2BgvVIjWmfCl2IWZewP5S52YDIRmQ7H4PIqJBoAj74VYHpbBoa1nWbCplQgL%2BW6vUKePG4eQFsXwH1esAq5L%2B6NTkeOCDJYGxWEd3Ry825gQa%2FrZTnFxefT0KXFTYig4gS6CwH0mvsZpbmJpDc8acDClw7X3GKcwJdtuVkIfEL68fUCAUNBWFG9NUnK8Fy%2FtBlDpJRnBTpIjbk%2FiNmPq6C4nE69yylMW5E9VawCCnghfPj5%2BttvL8u98lcBr6GCdwRxfhdw8V4cgOIRgq%2Bmqqk0CFFTOmBdIGeZPa8PV96jNd%2F3OglO86GWMygBcTR9si3BpknjDLovJELr2rYe1tFw34BMkv3ZMHMlDvubU9e9Ce9KrJ%2Fu8f7cqdVpjadSwSA0CO0PJ2cvPqCQVjgRAKAdjPH9mLyUo3xVoaJvSHKJ6%2Fynr%2FcWTwClqepLZUUpOWXTp61qUYAPT%2F82A%2B1YaBM%2BRJSrtH3KPQj1oZ4CyF9B%2FssFwOZSELn452mTFg5nSQE74hZ7ORCkCse7ucC%2B7ikb1CLqFWtIAtsDEEN700aQGAws5y2xAY6pgEkWkQ8Qbq0uREdkc1lB7tbk5HyPE%2FlZYkAfGy%2BqbiZE0Uuhxx9jXmeRKnG8f4QuA0j4gtmQvtgQmFKv13I0tL6I57zsea88TRG5CsOfV1pJ1TJvZgR6DFxBfW4D8rP%2BXWvMvRVn32fG%2F74GC33V%2BBmLpWpgAxigROLY%2F5zb5ZRkNnugMlezcKIlhAdV4uP%2FrIUZxG2io1ANWXWTXGuVQJi7Csn%2Bw4e&X-Amz-Signature=195ea9737762400c022da02a0ecdf1261a35915c1f1a9208f911d7a563d683f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFBF6NU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvAwlt6LJdGecIAGj5c88Epxes7DQF75G%2F2pbPDG7XPAiA25jV%2BjNG0Gvwh0uSLChO9BuZm99CroQACrEE%2F35RQGCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8psTYbC6GCLLT28KtwDr8wXQhilnoRQx1YSUcpO9Ip37FHdRIEWfDR%2Bw%2FDiMpjYABWVXBJ5Q5R2iWwrE5eFB4N%2B71vrqsGmDYx%2BgvVIjWmfCl2IWZewP5S52YDIRmQ7H4PIqJBoAj74VYHpbBoa1nWbCplQgL%2BW6vUKePG4eQFsXwH1esAq5L%2B6NTkeOCDJYGxWEd3Ry825gQa%2FrZTnFxefT0KXFTYig4gS6CwH0mvsZpbmJpDc8acDClw7X3GKcwJdtuVkIfEL68fUCAUNBWFG9NUnK8Fy%2FtBlDpJRnBTpIjbk%2FiNmPq6C4nE69yylMW5E9VawCCnghfPj5%2BttvL8u98lcBr6GCdwRxfhdw8V4cgOIRgq%2Bmqqk0CFFTOmBdIGeZPa8PV96jNd%2F3OglO86GWMygBcTR9si3BpknjDLovJELr2rYe1tFw34BMkv3ZMHMlDvubU9e9Ce9KrJ%2Fu8f7cqdVpjadSwSA0CO0PJ2cvPqCQVjgRAKAdjPH9mLyUo3xVoaJvSHKJ6%2Fynr%2FcWTwClqepLZUUpOWXTp61qUYAPT%2F82A%2B1YaBM%2BRJSrtH3KPQj1oZ4CyF9B%2FssFwOZSELn452mTFg5nSQE74hZ7ORCkCse7ucC%2B7ikb1CLqFWtIAtsDEEN700aQGAws5y2xAY6pgEkWkQ8Qbq0uREdkc1lB7tbk5HyPE%2FlZYkAfGy%2BqbiZE0Uuhxx9jXmeRKnG8f4QuA0j4gtmQvtgQmFKv13I0tL6I57zsea88TRG5CsOfV1pJ1TJvZgR6DFxBfW4D8rP%2BXWvMvRVn32fG%2F74GC33V%2BBmLpWpgAxigROLY%2F5zb5ZRkNnugMlezcKIlhAdV4uP%2FrIUZxG2io1ANWXWTXGuVQJi7Csn%2Bw4e&X-Amz-Signature=2ae2a71c01e8b269a6ce606a8c76283df35dfbc3bfe7f8f42e231f05a2fc936d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFBF6NU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvAwlt6LJdGecIAGj5c88Epxes7DQF75G%2F2pbPDG7XPAiA25jV%2BjNG0Gvwh0uSLChO9BuZm99CroQACrEE%2F35RQGCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8psTYbC6GCLLT28KtwDr8wXQhilnoRQx1YSUcpO9Ip37FHdRIEWfDR%2Bw%2FDiMpjYABWVXBJ5Q5R2iWwrE5eFB4N%2B71vrqsGmDYx%2BgvVIjWmfCl2IWZewP5S52YDIRmQ7H4PIqJBoAj74VYHpbBoa1nWbCplQgL%2BW6vUKePG4eQFsXwH1esAq5L%2B6NTkeOCDJYGxWEd3Ry825gQa%2FrZTnFxefT0KXFTYig4gS6CwH0mvsZpbmJpDc8acDClw7X3GKcwJdtuVkIfEL68fUCAUNBWFG9NUnK8Fy%2FtBlDpJRnBTpIjbk%2FiNmPq6C4nE69yylMW5E9VawCCnghfPj5%2BttvL8u98lcBr6GCdwRxfhdw8V4cgOIRgq%2Bmqqk0CFFTOmBdIGeZPa8PV96jNd%2F3OglO86GWMygBcTR9si3BpknjDLovJELr2rYe1tFw34BMkv3ZMHMlDvubU9e9Ce9KrJ%2Fu8f7cqdVpjadSwSA0CO0PJ2cvPqCQVjgRAKAdjPH9mLyUo3xVoaJvSHKJ6%2Fynr%2FcWTwClqepLZUUpOWXTp61qUYAPT%2F82A%2B1YaBM%2BRJSrtH3KPQj1oZ4CyF9B%2FssFwOZSELn452mTFg5nSQE74hZ7ORCkCse7ucC%2B7ikb1CLqFWtIAtsDEEN700aQGAws5y2xAY6pgEkWkQ8Qbq0uREdkc1lB7tbk5HyPE%2FlZYkAfGy%2BqbiZE0Uuhxx9jXmeRKnG8f4QuA0j4gtmQvtgQmFKv13I0tL6I57zsea88TRG5CsOfV1pJ1TJvZgR6DFxBfW4D8rP%2BXWvMvRVn32fG%2F74GC33V%2BBmLpWpgAxigROLY%2F5zb5ZRkNnugMlezcKIlhAdV4uP%2FrIUZxG2io1ANWXWTXGuVQJi7Csn%2Bw4e&X-Amz-Signature=1a236561762c992585a45412c11ea149d922813324a9ab49f2f52d932c7a331b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFBF6NU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvAwlt6LJdGecIAGj5c88Epxes7DQF75G%2F2pbPDG7XPAiA25jV%2BjNG0Gvwh0uSLChO9BuZm99CroQACrEE%2F35RQGCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8psTYbC6GCLLT28KtwDr8wXQhilnoRQx1YSUcpO9Ip37FHdRIEWfDR%2Bw%2FDiMpjYABWVXBJ5Q5R2iWwrE5eFB4N%2B71vrqsGmDYx%2BgvVIjWmfCl2IWZewP5S52YDIRmQ7H4PIqJBoAj74VYHpbBoa1nWbCplQgL%2BW6vUKePG4eQFsXwH1esAq5L%2B6NTkeOCDJYGxWEd3Ry825gQa%2FrZTnFxefT0KXFTYig4gS6CwH0mvsZpbmJpDc8acDClw7X3GKcwJdtuVkIfEL68fUCAUNBWFG9NUnK8Fy%2FtBlDpJRnBTpIjbk%2FiNmPq6C4nE69yylMW5E9VawCCnghfPj5%2BttvL8u98lcBr6GCdwRxfhdw8V4cgOIRgq%2Bmqqk0CFFTOmBdIGeZPa8PV96jNd%2F3OglO86GWMygBcTR9si3BpknjDLovJELr2rYe1tFw34BMkv3ZMHMlDvubU9e9Ce9KrJ%2Fu8f7cqdVpjadSwSA0CO0PJ2cvPqCQVjgRAKAdjPH9mLyUo3xVoaJvSHKJ6%2Fynr%2FcWTwClqepLZUUpOWXTp61qUYAPT%2F82A%2B1YaBM%2BRJSrtH3KPQj1oZ4CyF9B%2FssFwOZSELn452mTFg5nSQE74hZ7ORCkCse7ucC%2B7ikb1CLqFWtIAtsDEEN700aQGAws5y2xAY6pgEkWkQ8Qbq0uREdkc1lB7tbk5HyPE%2FlZYkAfGy%2BqbiZE0Uuhxx9jXmeRKnG8f4QuA0j4gtmQvtgQmFKv13I0tL6I57zsea88TRG5CsOfV1pJ1TJvZgR6DFxBfW4D8rP%2BXWvMvRVn32fG%2F74GC33V%2BBmLpWpgAxigROLY%2F5zb5ZRkNnugMlezcKIlhAdV4uP%2FrIUZxG2io1ANWXWTXGuVQJi7Csn%2Bw4e&X-Amz-Signature=6ac126b131d725ec83b10f459265113ccdc8e407bd4035b543646b10252cace7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
