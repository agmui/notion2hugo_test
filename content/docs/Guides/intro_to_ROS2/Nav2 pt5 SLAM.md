---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-29T01:30:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-29T01:30:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647T6AAKH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDuFE9LG97dTyD7Wgmykmk1bkyY9nRV1%2BL4T4lkMEOk6wIhAPbDGIOMYbO0uQOib%2F1NaxBWrQLptQbwdgCH4h66ghxxKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSheTlTy56z34p1F4q3APvlksHnilKBvmdJpvCOxjd8RflWcxKBJ0zbhVqlJ1c0%2Fp0HKBG7I2BnF1Y39tjOvOfUIjvQScAQ%2FHAukzrblKsy3wb4hOuuCSM86jqz6y7CH5%2F0GvYcl6IpPloIKugeHVGB94cyjaD9p3Uutt%2FBLUaQIaaNJHzFxnXIFod%2B4Cjxm0VPdl3vDFWZ%2F4NaWC%2FLEANIZd036u63sV3OteiloOKC5jg1JDc7tGNG%2B9glBCTtVt1OZY1c885tBsxW6T05KNon9IcjPk%2BWSEcABR7YKlHBvTmzYHGv2%2BpTdfNq0FtY%2FfLaQiNVIfSAEoPA%2BaHIcMecoB0FaQ3KQNbTCJ52%2BfYDAII0Z8yJgEj6e9TSWJj2yVdr9wEa5eeV9RWyLuTt1F8XAecBKjjGQRGF8ejFSiFPbajKXMbXxP%2BEFUbrYl%2FMVaVJvcqLTKuGgWkiw8WvEKF%2BqTXjjzndA4X0WYqZ29ZoAxmSLGJUmZw1T7Dyl3U5DZHPKxRF7zCmaEK35lb6mLInopyIGNxg%2B6SaexacMM48qe1MC4%2BmtpALUmOzV1%2Bp8c4%2BarPy1lnAwyFgUDGaRsp2qn5HCUtD8bGXmsRx1BCkeQDPzQljVCNi52oVE%2BEvRwt0FJb0gGH3LClDjCTtKHEBjqkAYISwKnwcS4zTxYLMexy1tC2APfxgJOK%2FVIt84lBeCud3qr7xMbG%2Bx6QVP6LqQsBOQuDjnSmqt%2FIWa6Yv2HFI8ZGIuPk3dii8JHzXckNFRy5ds55pi%2FevSIaoZIUkWjBB%2FLN%2FUljTd139FEIKTPZch6qfWNFWjO5AfM4FTIJ283uQYoDpZYdeO29J3Ub9sqp6cOdlSy3TdyyuP2O2rszC4idCb%2Bv&X-Amz-Signature=dc3c21750c8301d259132c017938099e9ed431475607caa422ebdb94b59496d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647T6AAKH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDuFE9LG97dTyD7Wgmykmk1bkyY9nRV1%2BL4T4lkMEOk6wIhAPbDGIOMYbO0uQOib%2F1NaxBWrQLptQbwdgCH4h66ghxxKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSheTlTy56z34p1F4q3APvlksHnilKBvmdJpvCOxjd8RflWcxKBJ0zbhVqlJ1c0%2Fp0HKBG7I2BnF1Y39tjOvOfUIjvQScAQ%2FHAukzrblKsy3wb4hOuuCSM86jqz6y7CH5%2F0GvYcl6IpPloIKugeHVGB94cyjaD9p3Uutt%2FBLUaQIaaNJHzFxnXIFod%2B4Cjxm0VPdl3vDFWZ%2F4NaWC%2FLEANIZd036u63sV3OteiloOKC5jg1JDc7tGNG%2B9glBCTtVt1OZY1c885tBsxW6T05KNon9IcjPk%2BWSEcABR7YKlHBvTmzYHGv2%2BpTdfNq0FtY%2FfLaQiNVIfSAEoPA%2BaHIcMecoB0FaQ3KQNbTCJ52%2BfYDAII0Z8yJgEj6e9TSWJj2yVdr9wEa5eeV9RWyLuTt1F8XAecBKjjGQRGF8ejFSiFPbajKXMbXxP%2BEFUbrYl%2FMVaVJvcqLTKuGgWkiw8WvEKF%2BqTXjjzndA4X0WYqZ29ZoAxmSLGJUmZw1T7Dyl3U5DZHPKxRF7zCmaEK35lb6mLInopyIGNxg%2B6SaexacMM48qe1MC4%2BmtpALUmOzV1%2Bp8c4%2BarPy1lnAwyFgUDGaRsp2qn5HCUtD8bGXmsRx1BCkeQDPzQljVCNi52oVE%2BEvRwt0FJb0gGH3LClDjCTtKHEBjqkAYISwKnwcS4zTxYLMexy1tC2APfxgJOK%2FVIt84lBeCud3qr7xMbG%2Bx6QVP6LqQsBOQuDjnSmqt%2FIWa6Yv2HFI8ZGIuPk3dii8JHzXckNFRy5ds55pi%2FevSIaoZIUkWjBB%2FLN%2FUljTd139FEIKTPZch6qfWNFWjO5AfM4FTIJ283uQYoDpZYdeO29J3Ub9sqp6cOdlSy3TdyyuP2O2rszC4idCb%2Bv&X-Amz-Signature=b5d6455b2a09389a99cea43ba1dddb90900673efe94cbfaa7928530dea0948b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647T6AAKH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDuFE9LG97dTyD7Wgmykmk1bkyY9nRV1%2BL4T4lkMEOk6wIhAPbDGIOMYbO0uQOib%2F1NaxBWrQLptQbwdgCH4h66ghxxKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSheTlTy56z34p1F4q3APvlksHnilKBvmdJpvCOxjd8RflWcxKBJ0zbhVqlJ1c0%2Fp0HKBG7I2BnF1Y39tjOvOfUIjvQScAQ%2FHAukzrblKsy3wb4hOuuCSM86jqz6y7CH5%2F0GvYcl6IpPloIKugeHVGB94cyjaD9p3Uutt%2FBLUaQIaaNJHzFxnXIFod%2B4Cjxm0VPdl3vDFWZ%2F4NaWC%2FLEANIZd036u63sV3OteiloOKC5jg1JDc7tGNG%2B9glBCTtVt1OZY1c885tBsxW6T05KNon9IcjPk%2BWSEcABR7YKlHBvTmzYHGv2%2BpTdfNq0FtY%2FfLaQiNVIfSAEoPA%2BaHIcMecoB0FaQ3KQNbTCJ52%2BfYDAII0Z8yJgEj6e9TSWJj2yVdr9wEa5eeV9RWyLuTt1F8XAecBKjjGQRGF8ejFSiFPbajKXMbXxP%2BEFUbrYl%2FMVaVJvcqLTKuGgWkiw8WvEKF%2BqTXjjzndA4X0WYqZ29ZoAxmSLGJUmZw1T7Dyl3U5DZHPKxRF7zCmaEK35lb6mLInopyIGNxg%2B6SaexacMM48qe1MC4%2BmtpALUmOzV1%2Bp8c4%2BarPy1lnAwyFgUDGaRsp2qn5HCUtD8bGXmsRx1BCkeQDPzQljVCNi52oVE%2BEvRwt0FJb0gGH3LClDjCTtKHEBjqkAYISwKnwcS4zTxYLMexy1tC2APfxgJOK%2FVIt84lBeCud3qr7xMbG%2Bx6QVP6LqQsBOQuDjnSmqt%2FIWa6Yv2HFI8ZGIuPk3dii8JHzXckNFRy5ds55pi%2FevSIaoZIUkWjBB%2FLN%2FUljTd139FEIKTPZch6qfWNFWjO5AfM4FTIJ283uQYoDpZYdeO29J3Ub9sqp6cOdlSy3TdyyuP2O2rszC4idCb%2Bv&X-Amz-Signature=6d73c6d2c8ee6d91c6a0012418077abcef3296f4c473841bd3208d7d2836ecab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647T6AAKH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDuFE9LG97dTyD7Wgmykmk1bkyY9nRV1%2BL4T4lkMEOk6wIhAPbDGIOMYbO0uQOib%2F1NaxBWrQLptQbwdgCH4h66ghxxKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSheTlTy56z34p1F4q3APvlksHnilKBvmdJpvCOxjd8RflWcxKBJ0zbhVqlJ1c0%2Fp0HKBG7I2BnF1Y39tjOvOfUIjvQScAQ%2FHAukzrblKsy3wb4hOuuCSM86jqz6y7CH5%2F0GvYcl6IpPloIKugeHVGB94cyjaD9p3Uutt%2FBLUaQIaaNJHzFxnXIFod%2B4Cjxm0VPdl3vDFWZ%2F4NaWC%2FLEANIZd036u63sV3OteiloOKC5jg1JDc7tGNG%2B9glBCTtVt1OZY1c885tBsxW6T05KNon9IcjPk%2BWSEcABR7YKlHBvTmzYHGv2%2BpTdfNq0FtY%2FfLaQiNVIfSAEoPA%2BaHIcMecoB0FaQ3KQNbTCJ52%2BfYDAII0Z8yJgEj6e9TSWJj2yVdr9wEa5eeV9RWyLuTt1F8XAecBKjjGQRGF8ejFSiFPbajKXMbXxP%2BEFUbrYl%2FMVaVJvcqLTKuGgWkiw8WvEKF%2BqTXjjzndA4X0WYqZ29ZoAxmSLGJUmZw1T7Dyl3U5DZHPKxRF7zCmaEK35lb6mLInopyIGNxg%2B6SaexacMM48qe1MC4%2BmtpALUmOzV1%2Bp8c4%2BarPy1lnAwyFgUDGaRsp2qn5HCUtD8bGXmsRx1BCkeQDPzQljVCNi52oVE%2BEvRwt0FJb0gGH3LClDjCTtKHEBjqkAYISwKnwcS4zTxYLMexy1tC2APfxgJOK%2FVIt84lBeCud3qr7xMbG%2Bx6QVP6LqQsBOQuDjnSmqt%2FIWa6Yv2HFI8ZGIuPk3dii8JHzXckNFRy5ds55pi%2FevSIaoZIUkWjBB%2FLN%2FUljTd139FEIKTPZch6qfWNFWjO5AfM4FTIJ283uQYoDpZYdeO29J3Ub9sqp6cOdlSy3TdyyuP2O2rszC4idCb%2Bv&X-Amz-Signature=8073d0fe91c0897bbab77c06c9e2cf86ad02bea482578d7cfc5da3efd8ae4c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647T6AAKH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDuFE9LG97dTyD7Wgmykmk1bkyY9nRV1%2BL4T4lkMEOk6wIhAPbDGIOMYbO0uQOib%2F1NaxBWrQLptQbwdgCH4h66ghxxKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSheTlTy56z34p1F4q3APvlksHnilKBvmdJpvCOxjd8RflWcxKBJ0zbhVqlJ1c0%2Fp0HKBG7I2BnF1Y39tjOvOfUIjvQScAQ%2FHAukzrblKsy3wb4hOuuCSM86jqz6y7CH5%2F0GvYcl6IpPloIKugeHVGB94cyjaD9p3Uutt%2FBLUaQIaaNJHzFxnXIFod%2B4Cjxm0VPdl3vDFWZ%2F4NaWC%2FLEANIZd036u63sV3OteiloOKC5jg1JDc7tGNG%2B9glBCTtVt1OZY1c885tBsxW6T05KNon9IcjPk%2BWSEcABR7YKlHBvTmzYHGv2%2BpTdfNq0FtY%2FfLaQiNVIfSAEoPA%2BaHIcMecoB0FaQ3KQNbTCJ52%2BfYDAII0Z8yJgEj6e9TSWJj2yVdr9wEa5eeV9RWyLuTt1F8XAecBKjjGQRGF8ejFSiFPbajKXMbXxP%2BEFUbrYl%2FMVaVJvcqLTKuGgWkiw8WvEKF%2BqTXjjzndA4X0WYqZ29ZoAxmSLGJUmZw1T7Dyl3U5DZHPKxRF7zCmaEK35lb6mLInopyIGNxg%2B6SaexacMM48qe1MC4%2BmtpALUmOzV1%2Bp8c4%2BarPy1lnAwyFgUDGaRsp2qn5HCUtD8bGXmsRx1BCkeQDPzQljVCNi52oVE%2BEvRwt0FJb0gGH3LClDjCTtKHEBjqkAYISwKnwcS4zTxYLMexy1tC2APfxgJOK%2FVIt84lBeCud3qr7xMbG%2Bx6QVP6LqQsBOQuDjnSmqt%2FIWa6Yv2HFI8ZGIuPk3dii8JHzXckNFRy5ds55pi%2FevSIaoZIUkWjBB%2FLN%2FUljTd139FEIKTPZch6qfWNFWjO5AfM4FTIJ283uQYoDpZYdeO29J3Ub9sqp6cOdlSy3TdyyuP2O2rszC4idCb%2Bv&X-Amz-Signature=d409d0d173cb78ab0f8dfed91adf5ee027bd3087672c7e462e0a70a1c05639ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647T6AAKH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDuFE9LG97dTyD7Wgmykmk1bkyY9nRV1%2BL4T4lkMEOk6wIhAPbDGIOMYbO0uQOib%2F1NaxBWrQLptQbwdgCH4h66ghxxKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSheTlTy56z34p1F4q3APvlksHnilKBvmdJpvCOxjd8RflWcxKBJ0zbhVqlJ1c0%2Fp0HKBG7I2BnF1Y39tjOvOfUIjvQScAQ%2FHAukzrblKsy3wb4hOuuCSM86jqz6y7CH5%2F0GvYcl6IpPloIKugeHVGB94cyjaD9p3Uutt%2FBLUaQIaaNJHzFxnXIFod%2B4Cjxm0VPdl3vDFWZ%2F4NaWC%2FLEANIZd036u63sV3OteiloOKC5jg1JDc7tGNG%2B9glBCTtVt1OZY1c885tBsxW6T05KNon9IcjPk%2BWSEcABR7YKlHBvTmzYHGv2%2BpTdfNq0FtY%2FfLaQiNVIfSAEoPA%2BaHIcMecoB0FaQ3KQNbTCJ52%2BfYDAII0Z8yJgEj6e9TSWJj2yVdr9wEa5eeV9RWyLuTt1F8XAecBKjjGQRGF8ejFSiFPbajKXMbXxP%2BEFUbrYl%2FMVaVJvcqLTKuGgWkiw8WvEKF%2BqTXjjzndA4X0WYqZ29ZoAxmSLGJUmZw1T7Dyl3U5DZHPKxRF7zCmaEK35lb6mLInopyIGNxg%2B6SaexacMM48qe1MC4%2BmtpALUmOzV1%2Bp8c4%2BarPy1lnAwyFgUDGaRsp2qn5HCUtD8bGXmsRx1BCkeQDPzQljVCNi52oVE%2BEvRwt0FJb0gGH3LClDjCTtKHEBjqkAYISwKnwcS4zTxYLMexy1tC2APfxgJOK%2FVIt84lBeCud3qr7xMbG%2Bx6QVP6LqQsBOQuDjnSmqt%2FIWa6Yv2HFI8ZGIuPk3dii8JHzXckNFRy5ds55pi%2FevSIaoZIUkWjBB%2FLN%2FUljTd139FEIKTPZch6qfWNFWjO5AfM4FTIJ283uQYoDpZYdeO29J3Ub9sqp6cOdlSy3TdyyuP2O2rszC4idCb%2Bv&X-Amz-Signature=c3520a82562ee0cb61fec9b68b6de3c8a961e9bbe7361531f7e974bff662ff5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647T6AAKH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDuFE9LG97dTyD7Wgmykmk1bkyY9nRV1%2BL4T4lkMEOk6wIhAPbDGIOMYbO0uQOib%2F1NaxBWrQLptQbwdgCH4h66ghxxKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSheTlTy56z34p1F4q3APvlksHnilKBvmdJpvCOxjd8RflWcxKBJ0zbhVqlJ1c0%2Fp0HKBG7I2BnF1Y39tjOvOfUIjvQScAQ%2FHAukzrblKsy3wb4hOuuCSM86jqz6y7CH5%2F0GvYcl6IpPloIKugeHVGB94cyjaD9p3Uutt%2FBLUaQIaaNJHzFxnXIFod%2B4Cjxm0VPdl3vDFWZ%2F4NaWC%2FLEANIZd036u63sV3OteiloOKC5jg1JDc7tGNG%2B9glBCTtVt1OZY1c885tBsxW6T05KNon9IcjPk%2BWSEcABR7YKlHBvTmzYHGv2%2BpTdfNq0FtY%2FfLaQiNVIfSAEoPA%2BaHIcMecoB0FaQ3KQNbTCJ52%2BfYDAII0Z8yJgEj6e9TSWJj2yVdr9wEa5eeV9RWyLuTt1F8XAecBKjjGQRGF8ejFSiFPbajKXMbXxP%2BEFUbrYl%2FMVaVJvcqLTKuGgWkiw8WvEKF%2BqTXjjzndA4X0WYqZ29ZoAxmSLGJUmZw1T7Dyl3U5DZHPKxRF7zCmaEK35lb6mLInopyIGNxg%2B6SaexacMM48qe1MC4%2BmtpALUmOzV1%2Bp8c4%2BarPy1lnAwyFgUDGaRsp2qn5HCUtD8bGXmsRx1BCkeQDPzQljVCNi52oVE%2BEvRwt0FJb0gGH3LClDjCTtKHEBjqkAYISwKnwcS4zTxYLMexy1tC2APfxgJOK%2FVIt84lBeCud3qr7xMbG%2Bx6QVP6LqQsBOQuDjnSmqt%2FIWa6Yv2HFI8ZGIuPk3dii8JHzXckNFRy5ds55pi%2FevSIaoZIUkWjBB%2FLN%2FUljTd139FEIKTPZch6qfWNFWjO5AfM4FTIJ283uQYoDpZYdeO29J3Ub9sqp6cOdlSy3TdyyuP2O2rszC4idCb%2Bv&X-Amz-Signature=66445f1dc6983c01d62ebe35f80b4daa7d978db76578dc4ae8d2ade70ac8a7e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647T6AAKH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDuFE9LG97dTyD7Wgmykmk1bkyY9nRV1%2BL4T4lkMEOk6wIhAPbDGIOMYbO0uQOib%2F1NaxBWrQLptQbwdgCH4h66ghxxKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSheTlTy56z34p1F4q3APvlksHnilKBvmdJpvCOxjd8RflWcxKBJ0zbhVqlJ1c0%2Fp0HKBG7I2BnF1Y39tjOvOfUIjvQScAQ%2FHAukzrblKsy3wb4hOuuCSM86jqz6y7CH5%2F0GvYcl6IpPloIKugeHVGB94cyjaD9p3Uutt%2FBLUaQIaaNJHzFxnXIFod%2B4Cjxm0VPdl3vDFWZ%2F4NaWC%2FLEANIZd036u63sV3OteiloOKC5jg1JDc7tGNG%2B9glBCTtVt1OZY1c885tBsxW6T05KNon9IcjPk%2BWSEcABR7YKlHBvTmzYHGv2%2BpTdfNq0FtY%2FfLaQiNVIfSAEoPA%2BaHIcMecoB0FaQ3KQNbTCJ52%2BfYDAII0Z8yJgEj6e9TSWJj2yVdr9wEa5eeV9RWyLuTt1F8XAecBKjjGQRGF8ejFSiFPbajKXMbXxP%2BEFUbrYl%2FMVaVJvcqLTKuGgWkiw8WvEKF%2BqTXjjzndA4X0WYqZ29ZoAxmSLGJUmZw1T7Dyl3U5DZHPKxRF7zCmaEK35lb6mLInopyIGNxg%2B6SaexacMM48qe1MC4%2BmtpALUmOzV1%2Bp8c4%2BarPy1lnAwyFgUDGaRsp2qn5HCUtD8bGXmsRx1BCkeQDPzQljVCNi52oVE%2BEvRwt0FJb0gGH3LClDjCTtKHEBjqkAYISwKnwcS4zTxYLMexy1tC2APfxgJOK%2FVIt84lBeCud3qr7xMbG%2Bx6QVP6LqQsBOQuDjnSmqt%2FIWa6Yv2HFI8ZGIuPk3dii8JHzXckNFRy5ds55pi%2FevSIaoZIUkWjBB%2FLN%2FUljTd139FEIKTPZch6qfWNFWjO5AfM4FTIJ283uQYoDpZYdeO29J3Ub9sqp6cOdlSy3TdyyuP2O2rszC4idCb%2Bv&X-Amz-Signature=dce3229ef7cd45901ef2920279a878b61df82060772bf440a6dd0dda5f106f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647T6AAKH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDuFE9LG97dTyD7Wgmykmk1bkyY9nRV1%2BL4T4lkMEOk6wIhAPbDGIOMYbO0uQOib%2F1NaxBWrQLptQbwdgCH4h66ghxxKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSheTlTy56z34p1F4q3APvlksHnilKBvmdJpvCOxjd8RflWcxKBJ0zbhVqlJ1c0%2Fp0HKBG7I2BnF1Y39tjOvOfUIjvQScAQ%2FHAukzrblKsy3wb4hOuuCSM86jqz6y7CH5%2F0GvYcl6IpPloIKugeHVGB94cyjaD9p3Uutt%2FBLUaQIaaNJHzFxnXIFod%2B4Cjxm0VPdl3vDFWZ%2F4NaWC%2FLEANIZd036u63sV3OteiloOKC5jg1JDc7tGNG%2B9glBCTtVt1OZY1c885tBsxW6T05KNon9IcjPk%2BWSEcABR7YKlHBvTmzYHGv2%2BpTdfNq0FtY%2FfLaQiNVIfSAEoPA%2BaHIcMecoB0FaQ3KQNbTCJ52%2BfYDAII0Z8yJgEj6e9TSWJj2yVdr9wEa5eeV9RWyLuTt1F8XAecBKjjGQRGF8ejFSiFPbajKXMbXxP%2BEFUbrYl%2FMVaVJvcqLTKuGgWkiw8WvEKF%2BqTXjjzndA4X0WYqZ29ZoAxmSLGJUmZw1T7Dyl3U5DZHPKxRF7zCmaEK35lb6mLInopyIGNxg%2B6SaexacMM48qe1MC4%2BmtpALUmOzV1%2Bp8c4%2BarPy1lnAwyFgUDGaRsp2qn5HCUtD8bGXmsRx1BCkeQDPzQljVCNi52oVE%2BEvRwt0FJb0gGH3LClDjCTtKHEBjqkAYISwKnwcS4zTxYLMexy1tC2APfxgJOK%2FVIt84lBeCud3qr7xMbG%2Bx6QVP6LqQsBOQuDjnSmqt%2FIWa6Yv2HFI8ZGIuPk3dii8JHzXckNFRy5ds55pi%2FevSIaoZIUkWjBB%2FLN%2FUljTd139FEIKTPZch6qfWNFWjO5AfM4FTIJ283uQYoDpZYdeO29J3Ub9sqp6cOdlSy3TdyyuP2O2rszC4idCb%2Bv&X-Amz-Signature=112c3b8b501781eb536dee377e09868ac7c062a5dcddf3d4fd7f2d2e7aebb5e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647T6AAKH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDuFE9LG97dTyD7Wgmykmk1bkyY9nRV1%2BL4T4lkMEOk6wIhAPbDGIOMYbO0uQOib%2F1NaxBWrQLptQbwdgCH4h66ghxxKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSheTlTy56z34p1F4q3APvlksHnilKBvmdJpvCOxjd8RflWcxKBJ0zbhVqlJ1c0%2Fp0HKBG7I2BnF1Y39tjOvOfUIjvQScAQ%2FHAukzrblKsy3wb4hOuuCSM86jqz6y7CH5%2F0GvYcl6IpPloIKugeHVGB94cyjaD9p3Uutt%2FBLUaQIaaNJHzFxnXIFod%2B4Cjxm0VPdl3vDFWZ%2F4NaWC%2FLEANIZd036u63sV3OteiloOKC5jg1JDc7tGNG%2B9glBCTtVt1OZY1c885tBsxW6T05KNon9IcjPk%2BWSEcABR7YKlHBvTmzYHGv2%2BpTdfNq0FtY%2FfLaQiNVIfSAEoPA%2BaHIcMecoB0FaQ3KQNbTCJ52%2BfYDAII0Z8yJgEj6e9TSWJj2yVdr9wEa5eeV9RWyLuTt1F8XAecBKjjGQRGF8ejFSiFPbajKXMbXxP%2BEFUbrYl%2FMVaVJvcqLTKuGgWkiw8WvEKF%2BqTXjjzndA4X0WYqZ29ZoAxmSLGJUmZw1T7Dyl3U5DZHPKxRF7zCmaEK35lb6mLInopyIGNxg%2B6SaexacMM48qe1MC4%2BmtpALUmOzV1%2Bp8c4%2BarPy1lnAwyFgUDGaRsp2qn5HCUtD8bGXmsRx1BCkeQDPzQljVCNi52oVE%2BEvRwt0FJb0gGH3LClDjCTtKHEBjqkAYISwKnwcS4zTxYLMexy1tC2APfxgJOK%2FVIt84lBeCud3qr7xMbG%2Bx6QVP6LqQsBOQuDjnSmqt%2FIWa6Yv2HFI8ZGIuPk3dii8JHzXckNFRy5ds55pi%2FevSIaoZIUkWjBB%2FLN%2FUljTd139FEIKTPZch6qfWNFWjO5AfM4FTIJ283uQYoDpZYdeO29J3Ub9sqp6cOdlSy3TdyyuP2O2rszC4idCb%2Bv&X-Amz-Signature=a312b1edb7e8cbd94269d1ea20f1d2b54ee699bd6194dc523dc9570bc6a86741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647T6AAKH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDuFE9LG97dTyD7Wgmykmk1bkyY9nRV1%2BL4T4lkMEOk6wIhAPbDGIOMYbO0uQOib%2F1NaxBWrQLptQbwdgCH4h66ghxxKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSheTlTy56z34p1F4q3APvlksHnilKBvmdJpvCOxjd8RflWcxKBJ0zbhVqlJ1c0%2Fp0HKBG7I2BnF1Y39tjOvOfUIjvQScAQ%2FHAukzrblKsy3wb4hOuuCSM86jqz6y7CH5%2F0GvYcl6IpPloIKugeHVGB94cyjaD9p3Uutt%2FBLUaQIaaNJHzFxnXIFod%2B4Cjxm0VPdl3vDFWZ%2F4NaWC%2FLEANIZd036u63sV3OteiloOKC5jg1JDc7tGNG%2B9glBCTtVt1OZY1c885tBsxW6T05KNon9IcjPk%2BWSEcABR7YKlHBvTmzYHGv2%2BpTdfNq0FtY%2FfLaQiNVIfSAEoPA%2BaHIcMecoB0FaQ3KQNbTCJ52%2BfYDAII0Z8yJgEj6e9TSWJj2yVdr9wEa5eeV9RWyLuTt1F8XAecBKjjGQRGF8ejFSiFPbajKXMbXxP%2BEFUbrYl%2FMVaVJvcqLTKuGgWkiw8WvEKF%2BqTXjjzndA4X0WYqZ29ZoAxmSLGJUmZw1T7Dyl3U5DZHPKxRF7zCmaEK35lb6mLInopyIGNxg%2B6SaexacMM48qe1MC4%2BmtpALUmOzV1%2Bp8c4%2BarPy1lnAwyFgUDGaRsp2qn5HCUtD8bGXmsRx1BCkeQDPzQljVCNi52oVE%2BEvRwt0FJb0gGH3LClDjCTtKHEBjqkAYISwKnwcS4zTxYLMexy1tC2APfxgJOK%2FVIt84lBeCud3qr7xMbG%2Bx6QVP6LqQsBOQuDjnSmqt%2FIWa6Yv2HFI8ZGIuPk3dii8JHzXckNFRy5ds55pi%2FevSIaoZIUkWjBB%2FLN%2FUljTd139FEIKTPZch6qfWNFWjO5AfM4FTIJ283uQYoDpZYdeO29J3Ub9sqp6cOdlSy3TdyyuP2O2rszC4idCb%2Bv&X-Amz-Signature=4e8ced2f6c46c099295538bdb17b7c7cb3c18cc447a392dc9d8318362b68c28a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647T6AAKH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDuFE9LG97dTyD7Wgmykmk1bkyY9nRV1%2BL4T4lkMEOk6wIhAPbDGIOMYbO0uQOib%2F1NaxBWrQLptQbwdgCH4h66ghxxKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSheTlTy56z34p1F4q3APvlksHnilKBvmdJpvCOxjd8RflWcxKBJ0zbhVqlJ1c0%2Fp0HKBG7I2BnF1Y39tjOvOfUIjvQScAQ%2FHAukzrblKsy3wb4hOuuCSM86jqz6y7CH5%2F0GvYcl6IpPloIKugeHVGB94cyjaD9p3Uutt%2FBLUaQIaaNJHzFxnXIFod%2B4Cjxm0VPdl3vDFWZ%2F4NaWC%2FLEANIZd036u63sV3OteiloOKC5jg1JDc7tGNG%2B9glBCTtVt1OZY1c885tBsxW6T05KNon9IcjPk%2BWSEcABR7YKlHBvTmzYHGv2%2BpTdfNq0FtY%2FfLaQiNVIfSAEoPA%2BaHIcMecoB0FaQ3KQNbTCJ52%2BfYDAII0Z8yJgEj6e9TSWJj2yVdr9wEa5eeV9RWyLuTt1F8XAecBKjjGQRGF8ejFSiFPbajKXMbXxP%2BEFUbrYl%2FMVaVJvcqLTKuGgWkiw8WvEKF%2BqTXjjzndA4X0WYqZ29ZoAxmSLGJUmZw1T7Dyl3U5DZHPKxRF7zCmaEK35lb6mLInopyIGNxg%2B6SaexacMM48qe1MC4%2BmtpALUmOzV1%2Bp8c4%2BarPy1lnAwyFgUDGaRsp2qn5HCUtD8bGXmsRx1BCkeQDPzQljVCNi52oVE%2BEvRwt0FJb0gGH3LClDjCTtKHEBjqkAYISwKnwcS4zTxYLMexy1tC2APfxgJOK%2FVIt84lBeCud3qr7xMbG%2Bx6QVP6LqQsBOQuDjnSmqt%2FIWa6Yv2HFI8ZGIuPk3dii8JHzXckNFRy5ds55pi%2FevSIaoZIUkWjBB%2FLN%2FUljTd139FEIKTPZch6qfWNFWjO5AfM4FTIJ283uQYoDpZYdeO29J3Ub9sqp6cOdlSy3TdyyuP2O2rszC4idCb%2Bv&X-Amz-Signature=fd7aaa9ccf448672788beaa5f28e6c85bf973e95115e6f2326d6afe38bc79808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647T6AAKH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDuFE9LG97dTyD7Wgmykmk1bkyY9nRV1%2BL4T4lkMEOk6wIhAPbDGIOMYbO0uQOib%2F1NaxBWrQLptQbwdgCH4h66ghxxKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSheTlTy56z34p1F4q3APvlksHnilKBvmdJpvCOxjd8RflWcxKBJ0zbhVqlJ1c0%2Fp0HKBG7I2BnF1Y39tjOvOfUIjvQScAQ%2FHAukzrblKsy3wb4hOuuCSM86jqz6y7CH5%2F0GvYcl6IpPloIKugeHVGB94cyjaD9p3Uutt%2FBLUaQIaaNJHzFxnXIFod%2B4Cjxm0VPdl3vDFWZ%2F4NaWC%2FLEANIZd036u63sV3OteiloOKC5jg1JDc7tGNG%2B9glBCTtVt1OZY1c885tBsxW6T05KNon9IcjPk%2BWSEcABR7YKlHBvTmzYHGv2%2BpTdfNq0FtY%2FfLaQiNVIfSAEoPA%2BaHIcMecoB0FaQ3KQNbTCJ52%2BfYDAII0Z8yJgEj6e9TSWJj2yVdr9wEa5eeV9RWyLuTt1F8XAecBKjjGQRGF8ejFSiFPbajKXMbXxP%2BEFUbrYl%2FMVaVJvcqLTKuGgWkiw8WvEKF%2BqTXjjzndA4X0WYqZ29ZoAxmSLGJUmZw1T7Dyl3U5DZHPKxRF7zCmaEK35lb6mLInopyIGNxg%2B6SaexacMM48qe1MC4%2BmtpALUmOzV1%2Bp8c4%2BarPy1lnAwyFgUDGaRsp2qn5HCUtD8bGXmsRx1BCkeQDPzQljVCNi52oVE%2BEvRwt0FJb0gGH3LClDjCTtKHEBjqkAYISwKnwcS4zTxYLMexy1tC2APfxgJOK%2FVIt84lBeCud3qr7xMbG%2Bx6QVP6LqQsBOQuDjnSmqt%2FIWa6Yv2HFI8ZGIuPk3dii8JHzXckNFRy5ds55pi%2FevSIaoZIUkWjBB%2FLN%2FUljTd139FEIKTPZch6qfWNFWjO5AfM4FTIJ283uQYoDpZYdeO29J3Ub9sqp6cOdlSy3TdyyuP2O2rszC4idCb%2Bv&X-Amz-Signature=d22c46b57efe322064de9d90525c269f63b293eb67487c35456d7aaf2a14f60e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored map

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

TODO: add pic

For further configuration go to: TODO: link to slam docs config guide 
