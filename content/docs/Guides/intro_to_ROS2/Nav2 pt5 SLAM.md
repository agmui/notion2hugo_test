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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LVRVRV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDSCy9N0%2BooH7Dw81%2FXnoN%2B1Qd%2BvnUc1P8vcT5c33jOogIgY67b%2B5nL9AU14f2JLbH2Lk22aj3OarnRb5O2eLvNdicq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKa0%2FGCqtaZ3YGGvXyrcA2TLRB6pYxNSyMXiaS08VuW%2FGHoJf727Moxo2FkTtVBPjkEEqGAC51zZHnzT%2B%2FuZQPNs7Y9NY%2BEGrLjQGLiHai8YsVXBDuCIrqTcaOY%2FIsFi9j7CtN%2BxR97gpyFnPoHd3aImZVUC6AZzXDLmh0ePoOTJk3laW%2FNlgrPLgnJ1bLSV%2B8X4NLEoPcEovjO2g0%2FN3vF2kUdxFvJx1DZXQ8%2BqiHjfSDRc96lKUXInidZK9Bgj%2BOT%2BIqzIDCEip0aZ2OMzPwl5MXg58H5vm0jvKto0joy%2BZ%2BQ3w%2FDf3%2FtOafqmkLOhvIssqsm6nvMPT6VujHKyzC0sWixmdoCpmlvvl3VQA%2FZEzwbCHY580771oPlyI0WbhycpkmHmhE3fSvfnQrfR8OH%2BTpEizriF2rYqMAfzcZewCLb96yu8svLdqa1J91qUMPNGccEoINIk3Nxz2M38GXmTJbU3NW43C5Mpg8z38UXrSnOIqcMJAwjz06Gd3OCMg69GsxOLT0Xuv6U6zIDW%2B1g5i1qfE5FkiDGQnkTcVGqI%2B6CjXAqXTJn1N6vWZ48mEh80aDfqmBMW9HwLPeGzlGlnWtP08gY8lfXMeuoNNCZ14bsUk1pf3pG%2BDoyomKyGKfI4gdE3IujWao%2B%2FMOzfp8oGOqUB7LyWCsDhggM1f9O%2BSgcsJa6dGlDPG9NpKBlzGJdZgFt2Fe57bvj3hcKXZipuOdeHOlmFxpDeBEvhQ8WsH44zfdlgLRrGW8GWVP96YFLYRYK5WhDiBzTd61OtF1eg4K3edmGW6B7vPhyTcF4AfXATXq6hPBNnOJJuT1P%2F1A4FASUBWpwBprkdRDAcB%2B8ZRnZwJkjo7zPcLCA23sO4t%2BkUBQdMCOMk&X-Amz-Signature=4d0cbb80d0dcfdd44e277a19c75c0a7b5ce10dd9f39347005ea92cd383a24b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LVRVRV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDSCy9N0%2BooH7Dw81%2FXnoN%2B1Qd%2BvnUc1P8vcT5c33jOogIgY67b%2B5nL9AU14f2JLbH2Lk22aj3OarnRb5O2eLvNdicq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKa0%2FGCqtaZ3YGGvXyrcA2TLRB6pYxNSyMXiaS08VuW%2FGHoJf727Moxo2FkTtVBPjkEEqGAC51zZHnzT%2B%2FuZQPNs7Y9NY%2BEGrLjQGLiHai8YsVXBDuCIrqTcaOY%2FIsFi9j7CtN%2BxR97gpyFnPoHd3aImZVUC6AZzXDLmh0ePoOTJk3laW%2FNlgrPLgnJ1bLSV%2B8X4NLEoPcEovjO2g0%2FN3vF2kUdxFvJx1DZXQ8%2BqiHjfSDRc96lKUXInidZK9Bgj%2BOT%2BIqzIDCEip0aZ2OMzPwl5MXg58H5vm0jvKto0joy%2BZ%2BQ3w%2FDf3%2FtOafqmkLOhvIssqsm6nvMPT6VujHKyzC0sWixmdoCpmlvvl3VQA%2FZEzwbCHY580771oPlyI0WbhycpkmHmhE3fSvfnQrfR8OH%2BTpEizriF2rYqMAfzcZewCLb96yu8svLdqa1J91qUMPNGccEoINIk3Nxz2M38GXmTJbU3NW43C5Mpg8z38UXrSnOIqcMJAwjz06Gd3OCMg69GsxOLT0Xuv6U6zIDW%2B1g5i1qfE5FkiDGQnkTcVGqI%2B6CjXAqXTJn1N6vWZ48mEh80aDfqmBMW9HwLPeGzlGlnWtP08gY8lfXMeuoNNCZ14bsUk1pf3pG%2BDoyomKyGKfI4gdE3IujWao%2B%2FMOzfp8oGOqUB7LyWCsDhggM1f9O%2BSgcsJa6dGlDPG9NpKBlzGJdZgFt2Fe57bvj3hcKXZipuOdeHOlmFxpDeBEvhQ8WsH44zfdlgLRrGW8GWVP96YFLYRYK5WhDiBzTd61OtF1eg4K3edmGW6B7vPhyTcF4AfXATXq6hPBNnOJJuT1P%2F1A4FASUBWpwBprkdRDAcB%2B8ZRnZwJkjo7zPcLCA23sO4t%2BkUBQdMCOMk&X-Amz-Signature=d018c38134014a2ad960a2b6428a7df5567da36110098f5c74ced7aa3009c99c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LVRVRV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDSCy9N0%2BooH7Dw81%2FXnoN%2B1Qd%2BvnUc1P8vcT5c33jOogIgY67b%2B5nL9AU14f2JLbH2Lk22aj3OarnRb5O2eLvNdicq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKa0%2FGCqtaZ3YGGvXyrcA2TLRB6pYxNSyMXiaS08VuW%2FGHoJf727Moxo2FkTtVBPjkEEqGAC51zZHnzT%2B%2FuZQPNs7Y9NY%2BEGrLjQGLiHai8YsVXBDuCIrqTcaOY%2FIsFi9j7CtN%2BxR97gpyFnPoHd3aImZVUC6AZzXDLmh0ePoOTJk3laW%2FNlgrPLgnJ1bLSV%2B8X4NLEoPcEovjO2g0%2FN3vF2kUdxFvJx1DZXQ8%2BqiHjfSDRc96lKUXInidZK9Bgj%2BOT%2BIqzIDCEip0aZ2OMzPwl5MXg58H5vm0jvKto0joy%2BZ%2BQ3w%2FDf3%2FtOafqmkLOhvIssqsm6nvMPT6VujHKyzC0sWixmdoCpmlvvl3VQA%2FZEzwbCHY580771oPlyI0WbhycpkmHmhE3fSvfnQrfR8OH%2BTpEizriF2rYqMAfzcZewCLb96yu8svLdqa1J91qUMPNGccEoINIk3Nxz2M38GXmTJbU3NW43C5Mpg8z38UXrSnOIqcMJAwjz06Gd3OCMg69GsxOLT0Xuv6U6zIDW%2B1g5i1qfE5FkiDGQnkTcVGqI%2B6CjXAqXTJn1N6vWZ48mEh80aDfqmBMW9HwLPeGzlGlnWtP08gY8lfXMeuoNNCZ14bsUk1pf3pG%2BDoyomKyGKfI4gdE3IujWao%2B%2FMOzfp8oGOqUB7LyWCsDhggM1f9O%2BSgcsJa6dGlDPG9NpKBlzGJdZgFt2Fe57bvj3hcKXZipuOdeHOlmFxpDeBEvhQ8WsH44zfdlgLRrGW8GWVP96YFLYRYK5WhDiBzTd61OtF1eg4K3edmGW6B7vPhyTcF4AfXATXq6hPBNnOJJuT1P%2F1A4FASUBWpwBprkdRDAcB%2B8ZRnZwJkjo7zPcLCA23sO4t%2BkUBQdMCOMk&X-Amz-Signature=1962f4abed9817706d532db683b22d058ad9a0e75f9adf17c3aa376d3bd5efd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LVRVRV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDSCy9N0%2BooH7Dw81%2FXnoN%2B1Qd%2BvnUc1P8vcT5c33jOogIgY67b%2B5nL9AU14f2JLbH2Lk22aj3OarnRb5O2eLvNdicq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKa0%2FGCqtaZ3YGGvXyrcA2TLRB6pYxNSyMXiaS08VuW%2FGHoJf727Moxo2FkTtVBPjkEEqGAC51zZHnzT%2B%2FuZQPNs7Y9NY%2BEGrLjQGLiHai8YsVXBDuCIrqTcaOY%2FIsFi9j7CtN%2BxR97gpyFnPoHd3aImZVUC6AZzXDLmh0ePoOTJk3laW%2FNlgrPLgnJ1bLSV%2B8X4NLEoPcEovjO2g0%2FN3vF2kUdxFvJx1DZXQ8%2BqiHjfSDRc96lKUXInidZK9Bgj%2BOT%2BIqzIDCEip0aZ2OMzPwl5MXg58H5vm0jvKto0joy%2BZ%2BQ3w%2FDf3%2FtOafqmkLOhvIssqsm6nvMPT6VujHKyzC0sWixmdoCpmlvvl3VQA%2FZEzwbCHY580771oPlyI0WbhycpkmHmhE3fSvfnQrfR8OH%2BTpEizriF2rYqMAfzcZewCLb96yu8svLdqa1J91qUMPNGccEoINIk3Nxz2M38GXmTJbU3NW43C5Mpg8z38UXrSnOIqcMJAwjz06Gd3OCMg69GsxOLT0Xuv6U6zIDW%2B1g5i1qfE5FkiDGQnkTcVGqI%2B6CjXAqXTJn1N6vWZ48mEh80aDfqmBMW9HwLPeGzlGlnWtP08gY8lfXMeuoNNCZ14bsUk1pf3pG%2BDoyomKyGKfI4gdE3IujWao%2B%2FMOzfp8oGOqUB7LyWCsDhggM1f9O%2BSgcsJa6dGlDPG9NpKBlzGJdZgFt2Fe57bvj3hcKXZipuOdeHOlmFxpDeBEvhQ8WsH44zfdlgLRrGW8GWVP96YFLYRYK5WhDiBzTd61OtF1eg4K3edmGW6B7vPhyTcF4AfXATXq6hPBNnOJJuT1P%2F1A4FASUBWpwBprkdRDAcB%2B8ZRnZwJkjo7zPcLCA23sO4t%2BkUBQdMCOMk&X-Amz-Signature=61f98d008610a5b81253de44dbf006133b5b89c0a88d5e5d15af172830b4f960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LVRVRV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDSCy9N0%2BooH7Dw81%2FXnoN%2B1Qd%2BvnUc1P8vcT5c33jOogIgY67b%2B5nL9AU14f2JLbH2Lk22aj3OarnRb5O2eLvNdicq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKa0%2FGCqtaZ3YGGvXyrcA2TLRB6pYxNSyMXiaS08VuW%2FGHoJf727Moxo2FkTtVBPjkEEqGAC51zZHnzT%2B%2FuZQPNs7Y9NY%2BEGrLjQGLiHai8YsVXBDuCIrqTcaOY%2FIsFi9j7CtN%2BxR97gpyFnPoHd3aImZVUC6AZzXDLmh0ePoOTJk3laW%2FNlgrPLgnJ1bLSV%2B8X4NLEoPcEovjO2g0%2FN3vF2kUdxFvJx1DZXQ8%2BqiHjfSDRc96lKUXInidZK9Bgj%2BOT%2BIqzIDCEip0aZ2OMzPwl5MXg58H5vm0jvKto0joy%2BZ%2BQ3w%2FDf3%2FtOafqmkLOhvIssqsm6nvMPT6VujHKyzC0sWixmdoCpmlvvl3VQA%2FZEzwbCHY580771oPlyI0WbhycpkmHmhE3fSvfnQrfR8OH%2BTpEizriF2rYqMAfzcZewCLb96yu8svLdqa1J91qUMPNGccEoINIk3Nxz2M38GXmTJbU3NW43C5Mpg8z38UXrSnOIqcMJAwjz06Gd3OCMg69GsxOLT0Xuv6U6zIDW%2B1g5i1qfE5FkiDGQnkTcVGqI%2B6CjXAqXTJn1N6vWZ48mEh80aDfqmBMW9HwLPeGzlGlnWtP08gY8lfXMeuoNNCZ14bsUk1pf3pG%2BDoyomKyGKfI4gdE3IujWao%2B%2FMOzfp8oGOqUB7LyWCsDhggM1f9O%2BSgcsJa6dGlDPG9NpKBlzGJdZgFt2Fe57bvj3hcKXZipuOdeHOlmFxpDeBEvhQ8WsH44zfdlgLRrGW8GWVP96YFLYRYK5WhDiBzTd61OtF1eg4K3edmGW6B7vPhyTcF4AfXATXq6hPBNnOJJuT1P%2F1A4FASUBWpwBprkdRDAcB%2B8ZRnZwJkjo7zPcLCA23sO4t%2BkUBQdMCOMk&X-Amz-Signature=39ca06619149cc0a1b9e0dc51732c2e49982c0f72a1961515bf408465ac1bde1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LVRVRV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDSCy9N0%2BooH7Dw81%2FXnoN%2B1Qd%2BvnUc1P8vcT5c33jOogIgY67b%2B5nL9AU14f2JLbH2Lk22aj3OarnRb5O2eLvNdicq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKa0%2FGCqtaZ3YGGvXyrcA2TLRB6pYxNSyMXiaS08VuW%2FGHoJf727Moxo2FkTtVBPjkEEqGAC51zZHnzT%2B%2FuZQPNs7Y9NY%2BEGrLjQGLiHai8YsVXBDuCIrqTcaOY%2FIsFi9j7CtN%2BxR97gpyFnPoHd3aImZVUC6AZzXDLmh0ePoOTJk3laW%2FNlgrPLgnJ1bLSV%2B8X4NLEoPcEovjO2g0%2FN3vF2kUdxFvJx1DZXQ8%2BqiHjfSDRc96lKUXInidZK9Bgj%2BOT%2BIqzIDCEip0aZ2OMzPwl5MXg58H5vm0jvKto0joy%2BZ%2BQ3w%2FDf3%2FtOafqmkLOhvIssqsm6nvMPT6VujHKyzC0sWixmdoCpmlvvl3VQA%2FZEzwbCHY580771oPlyI0WbhycpkmHmhE3fSvfnQrfR8OH%2BTpEizriF2rYqMAfzcZewCLb96yu8svLdqa1J91qUMPNGccEoINIk3Nxz2M38GXmTJbU3NW43C5Mpg8z38UXrSnOIqcMJAwjz06Gd3OCMg69GsxOLT0Xuv6U6zIDW%2B1g5i1qfE5FkiDGQnkTcVGqI%2B6CjXAqXTJn1N6vWZ48mEh80aDfqmBMW9HwLPeGzlGlnWtP08gY8lfXMeuoNNCZ14bsUk1pf3pG%2BDoyomKyGKfI4gdE3IujWao%2B%2FMOzfp8oGOqUB7LyWCsDhggM1f9O%2BSgcsJa6dGlDPG9NpKBlzGJdZgFt2Fe57bvj3hcKXZipuOdeHOlmFxpDeBEvhQ8WsH44zfdlgLRrGW8GWVP96YFLYRYK5WhDiBzTd61OtF1eg4K3edmGW6B7vPhyTcF4AfXATXq6hPBNnOJJuT1P%2F1A4FASUBWpwBprkdRDAcB%2B8ZRnZwJkjo7zPcLCA23sO4t%2BkUBQdMCOMk&X-Amz-Signature=fcf39d6de3ab04b8b3b183ae90965c58d8e1d00badf3ec735af62cd205919cc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LVRVRV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDSCy9N0%2BooH7Dw81%2FXnoN%2B1Qd%2BvnUc1P8vcT5c33jOogIgY67b%2B5nL9AU14f2JLbH2Lk22aj3OarnRb5O2eLvNdicq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKa0%2FGCqtaZ3YGGvXyrcA2TLRB6pYxNSyMXiaS08VuW%2FGHoJf727Moxo2FkTtVBPjkEEqGAC51zZHnzT%2B%2FuZQPNs7Y9NY%2BEGrLjQGLiHai8YsVXBDuCIrqTcaOY%2FIsFi9j7CtN%2BxR97gpyFnPoHd3aImZVUC6AZzXDLmh0ePoOTJk3laW%2FNlgrPLgnJ1bLSV%2B8X4NLEoPcEovjO2g0%2FN3vF2kUdxFvJx1DZXQ8%2BqiHjfSDRc96lKUXInidZK9Bgj%2BOT%2BIqzIDCEip0aZ2OMzPwl5MXg58H5vm0jvKto0joy%2BZ%2BQ3w%2FDf3%2FtOafqmkLOhvIssqsm6nvMPT6VujHKyzC0sWixmdoCpmlvvl3VQA%2FZEzwbCHY580771oPlyI0WbhycpkmHmhE3fSvfnQrfR8OH%2BTpEizriF2rYqMAfzcZewCLb96yu8svLdqa1J91qUMPNGccEoINIk3Nxz2M38GXmTJbU3NW43C5Mpg8z38UXrSnOIqcMJAwjz06Gd3OCMg69GsxOLT0Xuv6U6zIDW%2B1g5i1qfE5FkiDGQnkTcVGqI%2B6CjXAqXTJn1N6vWZ48mEh80aDfqmBMW9HwLPeGzlGlnWtP08gY8lfXMeuoNNCZ14bsUk1pf3pG%2BDoyomKyGKfI4gdE3IujWao%2B%2FMOzfp8oGOqUB7LyWCsDhggM1f9O%2BSgcsJa6dGlDPG9NpKBlzGJdZgFt2Fe57bvj3hcKXZipuOdeHOlmFxpDeBEvhQ8WsH44zfdlgLRrGW8GWVP96YFLYRYK5WhDiBzTd61OtF1eg4K3edmGW6B7vPhyTcF4AfXATXq6hPBNnOJJuT1P%2F1A4FASUBWpwBprkdRDAcB%2B8ZRnZwJkjo7zPcLCA23sO4t%2BkUBQdMCOMk&X-Amz-Signature=82da4a8b92c51cab2647be8c7f82a1cc375056206e777685f9254fd2bd559568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LVRVRV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDSCy9N0%2BooH7Dw81%2FXnoN%2B1Qd%2BvnUc1P8vcT5c33jOogIgY67b%2B5nL9AU14f2JLbH2Lk22aj3OarnRb5O2eLvNdicq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKa0%2FGCqtaZ3YGGvXyrcA2TLRB6pYxNSyMXiaS08VuW%2FGHoJf727Moxo2FkTtVBPjkEEqGAC51zZHnzT%2B%2FuZQPNs7Y9NY%2BEGrLjQGLiHai8YsVXBDuCIrqTcaOY%2FIsFi9j7CtN%2BxR97gpyFnPoHd3aImZVUC6AZzXDLmh0ePoOTJk3laW%2FNlgrPLgnJ1bLSV%2B8X4NLEoPcEovjO2g0%2FN3vF2kUdxFvJx1DZXQ8%2BqiHjfSDRc96lKUXInidZK9Bgj%2BOT%2BIqzIDCEip0aZ2OMzPwl5MXg58H5vm0jvKto0joy%2BZ%2BQ3w%2FDf3%2FtOafqmkLOhvIssqsm6nvMPT6VujHKyzC0sWixmdoCpmlvvl3VQA%2FZEzwbCHY580771oPlyI0WbhycpkmHmhE3fSvfnQrfR8OH%2BTpEizriF2rYqMAfzcZewCLb96yu8svLdqa1J91qUMPNGccEoINIk3Nxz2M38GXmTJbU3NW43C5Mpg8z38UXrSnOIqcMJAwjz06Gd3OCMg69GsxOLT0Xuv6U6zIDW%2B1g5i1qfE5FkiDGQnkTcVGqI%2B6CjXAqXTJn1N6vWZ48mEh80aDfqmBMW9HwLPeGzlGlnWtP08gY8lfXMeuoNNCZ14bsUk1pf3pG%2BDoyomKyGKfI4gdE3IujWao%2B%2FMOzfp8oGOqUB7LyWCsDhggM1f9O%2BSgcsJa6dGlDPG9NpKBlzGJdZgFt2Fe57bvj3hcKXZipuOdeHOlmFxpDeBEvhQ8WsH44zfdlgLRrGW8GWVP96YFLYRYK5WhDiBzTd61OtF1eg4K3edmGW6B7vPhyTcF4AfXATXq6hPBNnOJJuT1P%2F1A4FASUBWpwBprkdRDAcB%2B8ZRnZwJkjo7zPcLCA23sO4t%2BkUBQdMCOMk&X-Amz-Signature=698a4f8d55fd62910c1d647ae24db707d219a20cd1a5da03edb38c040a14c3eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LVRVRV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDSCy9N0%2BooH7Dw81%2FXnoN%2B1Qd%2BvnUc1P8vcT5c33jOogIgY67b%2B5nL9AU14f2JLbH2Lk22aj3OarnRb5O2eLvNdicq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKa0%2FGCqtaZ3YGGvXyrcA2TLRB6pYxNSyMXiaS08VuW%2FGHoJf727Moxo2FkTtVBPjkEEqGAC51zZHnzT%2B%2FuZQPNs7Y9NY%2BEGrLjQGLiHai8YsVXBDuCIrqTcaOY%2FIsFi9j7CtN%2BxR97gpyFnPoHd3aImZVUC6AZzXDLmh0ePoOTJk3laW%2FNlgrPLgnJ1bLSV%2B8X4NLEoPcEovjO2g0%2FN3vF2kUdxFvJx1DZXQ8%2BqiHjfSDRc96lKUXInidZK9Bgj%2BOT%2BIqzIDCEip0aZ2OMzPwl5MXg58H5vm0jvKto0joy%2BZ%2BQ3w%2FDf3%2FtOafqmkLOhvIssqsm6nvMPT6VujHKyzC0sWixmdoCpmlvvl3VQA%2FZEzwbCHY580771oPlyI0WbhycpkmHmhE3fSvfnQrfR8OH%2BTpEizriF2rYqMAfzcZewCLb96yu8svLdqa1J91qUMPNGccEoINIk3Nxz2M38GXmTJbU3NW43C5Mpg8z38UXrSnOIqcMJAwjz06Gd3OCMg69GsxOLT0Xuv6U6zIDW%2B1g5i1qfE5FkiDGQnkTcVGqI%2B6CjXAqXTJn1N6vWZ48mEh80aDfqmBMW9HwLPeGzlGlnWtP08gY8lfXMeuoNNCZ14bsUk1pf3pG%2BDoyomKyGKfI4gdE3IujWao%2B%2FMOzfp8oGOqUB7LyWCsDhggM1f9O%2BSgcsJa6dGlDPG9NpKBlzGJdZgFt2Fe57bvj3hcKXZipuOdeHOlmFxpDeBEvhQ8WsH44zfdlgLRrGW8GWVP96YFLYRYK5WhDiBzTd61OtF1eg4K3edmGW6B7vPhyTcF4AfXATXq6hPBNnOJJuT1P%2F1A4FASUBWpwBprkdRDAcB%2B8ZRnZwJkjo7zPcLCA23sO4t%2BkUBQdMCOMk&X-Amz-Signature=bd9178bd2cf16107da9fdd8b724de8dcac3ac797fcb2eb2377703c605a4b1797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LVRVRV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDSCy9N0%2BooH7Dw81%2FXnoN%2B1Qd%2BvnUc1P8vcT5c33jOogIgY67b%2B5nL9AU14f2JLbH2Lk22aj3OarnRb5O2eLvNdicq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKa0%2FGCqtaZ3YGGvXyrcA2TLRB6pYxNSyMXiaS08VuW%2FGHoJf727Moxo2FkTtVBPjkEEqGAC51zZHnzT%2B%2FuZQPNs7Y9NY%2BEGrLjQGLiHai8YsVXBDuCIrqTcaOY%2FIsFi9j7CtN%2BxR97gpyFnPoHd3aImZVUC6AZzXDLmh0ePoOTJk3laW%2FNlgrPLgnJ1bLSV%2B8X4NLEoPcEovjO2g0%2FN3vF2kUdxFvJx1DZXQ8%2BqiHjfSDRc96lKUXInidZK9Bgj%2BOT%2BIqzIDCEip0aZ2OMzPwl5MXg58H5vm0jvKto0joy%2BZ%2BQ3w%2FDf3%2FtOafqmkLOhvIssqsm6nvMPT6VujHKyzC0sWixmdoCpmlvvl3VQA%2FZEzwbCHY580771oPlyI0WbhycpkmHmhE3fSvfnQrfR8OH%2BTpEizriF2rYqMAfzcZewCLb96yu8svLdqa1J91qUMPNGccEoINIk3Nxz2M38GXmTJbU3NW43C5Mpg8z38UXrSnOIqcMJAwjz06Gd3OCMg69GsxOLT0Xuv6U6zIDW%2B1g5i1qfE5FkiDGQnkTcVGqI%2B6CjXAqXTJn1N6vWZ48mEh80aDfqmBMW9HwLPeGzlGlnWtP08gY8lfXMeuoNNCZ14bsUk1pf3pG%2BDoyomKyGKfI4gdE3IujWao%2B%2FMOzfp8oGOqUB7LyWCsDhggM1f9O%2BSgcsJa6dGlDPG9NpKBlzGJdZgFt2Fe57bvj3hcKXZipuOdeHOlmFxpDeBEvhQ8WsH44zfdlgLRrGW8GWVP96YFLYRYK5WhDiBzTd61OtF1eg4K3edmGW6B7vPhyTcF4AfXATXq6hPBNnOJJuT1P%2F1A4FASUBWpwBprkdRDAcB%2B8ZRnZwJkjo7zPcLCA23sO4t%2BkUBQdMCOMk&X-Amz-Signature=c908d67f790e7c85592a3658b6bd2dc95bcbe033f4b88d3c33b3a64451b56356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LVRVRV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDSCy9N0%2BooH7Dw81%2FXnoN%2B1Qd%2BvnUc1P8vcT5c33jOogIgY67b%2B5nL9AU14f2JLbH2Lk22aj3OarnRb5O2eLvNdicq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKa0%2FGCqtaZ3YGGvXyrcA2TLRB6pYxNSyMXiaS08VuW%2FGHoJf727Moxo2FkTtVBPjkEEqGAC51zZHnzT%2B%2FuZQPNs7Y9NY%2BEGrLjQGLiHai8YsVXBDuCIrqTcaOY%2FIsFi9j7CtN%2BxR97gpyFnPoHd3aImZVUC6AZzXDLmh0ePoOTJk3laW%2FNlgrPLgnJ1bLSV%2B8X4NLEoPcEovjO2g0%2FN3vF2kUdxFvJx1DZXQ8%2BqiHjfSDRc96lKUXInidZK9Bgj%2BOT%2BIqzIDCEip0aZ2OMzPwl5MXg58H5vm0jvKto0joy%2BZ%2BQ3w%2FDf3%2FtOafqmkLOhvIssqsm6nvMPT6VujHKyzC0sWixmdoCpmlvvl3VQA%2FZEzwbCHY580771oPlyI0WbhycpkmHmhE3fSvfnQrfR8OH%2BTpEizriF2rYqMAfzcZewCLb96yu8svLdqa1J91qUMPNGccEoINIk3Nxz2M38GXmTJbU3NW43C5Mpg8z38UXrSnOIqcMJAwjz06Gd3OCMg69GsxOLT0Xuv6U6zIDW%2B1g5i1qfE5FkiDGQnkTcVGqI%2B6CjXAqXTJn1N6vWZ48mEh80aDfqmBMW9HwLPeGzlGlnWtP08gY8lfXMeuoNNCZ14bsUk1pf3pG%2BDoyomKyGKfI4gdE3IujWao%2B%2FMOzfp8oGOqUB7LyWCsDhggM1f9O%2BSgcsJa6dGlDPG9NpKBlzGJdZgFt2Fe57bvj3hcKXZipuOdeHOlmFxpDeBEvhQ8WsH44zfdlgLRrGW8GWVP96YFLYRYK5WhDiBzTd61OtF1eg4K3edmGW6B7vPhyTcF4AfXATXq6hPBNnOJJuT1P%2F1A4FASUBWpwBprkdRDAcB%2B8ZRnZwJkjo7zPcLCA23sO4t%2BkUBQdMCOMk&X-Amz-Signature=208622625bc91908a7984fc2b365ea1d8715f0639dc3fdbcc42464b881355f30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LVRVRV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDSCy9N0%2BooH7Dw81%2FXnoN%2B1Qd%2BvnUc1P8vcT5c33jOogIgY67b%2B5nL9AU14f2JLbH2Lk22aj3OarnRb5O2eLvNdicq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKa0%2FGCqtaZ3YGGvXyrcA2TLRB6pYxNSyMXiaS08VuW%2FGHoJf727Moxo2FkTtVBPjkEEqGAC51zZHnzT%2B%2FuZQPNs7Y9NY%2BEGrLjQGLiHai8YsVXBDuCIrqTcaOY%2FIsFi9j7CtN%2BxR97gpyFnPoHd3aImZVUC6AZzXDLmh0ePoOTJk3laW%2FNlgrPLgnJ1bLSV%2B8X4NLEoPcEovjO2g0%2FN3vF2kUdxFvJx1DZXQ8%2BqiHjfSDRc96lKUXInidZK9Bgj%2BOT%2BIqzIDCEip0aZ2OMzPwl5MXg58H5vm0jvKto0joy%2BZ%2BQ3w%2FDf3%2FtOafqmkLOhvIssqsm6nvMPT6VujHKyzC0sWixmdoCpmlvvl3VQA%2FZEzwbCHY580771oPlyI0WbhycpkmHmhE3fSvfnQrfR8OH%2BTpEizriF2rYqMAfzcZewCLb96yu8svLdqa1J91qUMPNGccEoINIk3Nxz2M38GXmTJbU3NW43C5Mpg8z38UXrSnOIqcMJAwjz06Gd3OCMg69GsxOLT0Xuv6U6zIDW%2B1g5i1qfE5FkiDGQnkTcVGqI%2B6CjXAqXTJn1N6vWZ48mEh80aDfqmBMW9HwLPeGzlGlnWtP08gY8lfXMeuoNNCZ14bsUk1pf3pG%2BDoyomKyGKfI4gdE3IujWao%2B%2FMOzfp8oGOqUB7LyWCsDhggM1f9O%2BSgcsJa6dGlDPG9NpKBlzGJdZgFt2Fe57bvj3hcKXZipuOdeHOlmFxpDeBEvhQ8WsH44zfdlgLRrGW8GWVP96YFLYRYK5WhDiBzTd61OtF1eg4K3edmGW6B7vPhyTcF4AfXATXq6hPBNnOJJuT1P%2F1A4FASUBWpwBprkdRDAcB%2B8ZRnZwJkjo7zPcLCA23sO4t%2BkUBQdMCOMk&X-Amz-Signature=11797d4130acea7f0889488615b9ef8abf50df81e40c9d140cb6c7d019c3324b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LVRVRV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDSCy9N0%2BooH7Dw81%2FXnoN%2B1Qd%2BvnUc1P8vcT5c33jOogIgY67b%2B5nL9AU14f2JLbH2Lk22aj3OarnRb5O2eLvNdicq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKa0%2FGCqtaZ3YGGvXyrcA2TLRB6pYxNSyMXiaS08VuW%2FGHoJf727Moxo2FkTtVBPjkEEqGAC51zZHnzT%2B%2FuZQPNs7Y9NY%2BEGrLjQGLiHai8YsVXBDuCIrqTcaOY%2FIsFi9j7CtN%2BxR97gpyFnPoHd3aImZVUC6AZzXDLmh0ePoOTJk3laW%2FNlgrPLgnJ1bLSV%2B8X4NLEoPcEovjO2g0%2FN3vF2kUdxFvJx1DZXQ8%2BqiHjfSDRc96lKUXInidZK9Bgj%2BOT%2BIqzIDCEip0aZ2OMzPwl5MXg58H5vm0jvKto0joy%2BZ%2BQ3w%2FDf3%2FtOafqmkLOhvIssqsm6nvMPT6VujHKyzC0sWixmdoCpmlvvl3VQA%2FZEzwbCHY580771oPlyI0WbhycpkmHmhE3fSvfnQrfR8OH%2BTpEizriF2rYqMAfzcZewCLb96yu8svLdqa1J91qUMPNGccEoINIk3Nxz2M38GXmTJbU3NW43C5Mpg8z38UXrSnOIqcMJAwjz06Gd3OCMg69GsxOLT0Xuv6U6zIDW%2B1g5i1qfE5FkiDGQnkTcVGqI%2B6CjXAqXTJn1N6vWZ48mEh80aDfqmBMW9HwLPeGzlGlnWtP08gY8lfXMeuoNNCZ14bsUk1pf3pG%2BDoyomKyGKfI4gdE3IujWao%2B%2FMOzfp8oGOqUB7LyWCsDhggM1f9O%2BSgcsJa6dGlDPG9NpKBlzGJdZgFt2Fe57bvj3hcKXZipuOdeHOlmFxpDeBEvhQ8WsH44zfdlgLRrGW8GWVP96YFLYRYK5WhDiBzTd61OtF1eg4K3edmGW6B7vPhyTcF4AfXATXq6hPBNnOJJuT1P%2F1A4FASUBWpwBprkdRDAcB%2B8ZRnZwJkjo7zPcLCA23sO4t%2BkUBQdMCOMk&X-Amz-Signature=9807d016c11af00f29b4caaea2f6e9a8c3973cfa00e6557d066b5538319a9ee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LVRVRV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDSCy9N0%2BooH7Dw81%2FXnoN%2B1Qd%2BvnUc1P8vcT5c33jOogIgY67b%2B5nL9AU14f2JLbH2Lk22aj3OarnRb5O2eLvNdicq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDKa0%2FGCqtaZ3YGGvXyrcA2TLRB6pYxNSyMXiaS08VuW%2FGHoJf727Moxo2FkTtVBPjkEEqGAC51zZHnzT%2B%2FuZQPNs7Y9NY%2BEGrLjQGLiHai8YsVXBDuCIrqTcaOY%2FIsFi9j7CtN%2BxR97gpyFnPoHd3aImZVUC6AZzXDLmh0ePoOTJk3laW%2FNlgrPLgnJ1bLSV%2B8X4NLEoPcEovjO2g0%2FN3vF2kUdxFvJx1DZXQ8%2BqiHjfSDRc96lKUXInidZK9Bgj%2BOT%2BIqzIDCEip0aZ2OMzPwl5MXg58H5vm0jvKto0joy%2BZ%2BQ3w%2FDf3%2FtOafqmkLOhvIssqsm6nvMPT6VujHKyzC0sWixmdoCpmlvvl3VQA%2FZEzwbCHY580771oPlyI0WbhycpkmHmhE3fSvfnQrfR8OH%2BTpEizriF2rYqMAfzcZewCLb96yu8svLdqa1J91qUMPNGccEoINIk3Nxz2M38GXmTJbU3NW43C5Mpg8z38UXrSnOIqcMJAwjz06Gd3OCMg69GsxOLT0Xuv6U6zIDW%2B1g5i1qfE5FkiDGQnkTcVGqI%2B6CjXAqXTJn1N6vWZ48mEh80aDfqmBMW9HwLPeGzlGlnWtP08gY8lfXMeuoNNCZ14bsUk1pf3pG%2BDoyomKyGKfI4gdE3IujWao%2B%2FMOzfp8oGOqUB7LyWCsDhggM1f9O%2BSgcsJa6dGlDPG9NpKBlzGJdZgFt2Fe57bvj3hcKXZipuOdeHOlmFxpDeBEvhQ8WsH44zfdlgLRrGW8GWVP96YFLYRYK5WhDiBzTd61OtF1eg4K3edmGW6B7vPhyTcF4AfXATXq6hPBNnOJJuT1P%2F1A4FASUBWpwBprkdRDAcB%2B8ZRnZwJkjo7zPcLCA23sO4t%2BkUBQdMCOMk&X-Amz-Signature=9aa20fbb175e7a35c59ef56f3779b259f0814031224487ac35ab409ca25c7a83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
