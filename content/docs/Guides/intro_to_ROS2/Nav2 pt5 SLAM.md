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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PECEWUB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE24s08Vgu6l7Tovqs2ZO5mMf0SAWLNebYh%2FmszHmQz0AiBmcX%2Bh%2BfLiU9CY261rk59K4aNM4J6s4McnNLGi%2Bc7zJiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7RiIrODlkpnB4loWKtwD4S5uwH3CaF3GWRnpHQah0iuPiQCaZtvVdf6j9iqVOIjVdkC4htmpRWA0QiTuULCDdj6jeZR7u4nvqILRhZjyTWYdxa6kFIOcld355I8YSyiS9F36jP9zBDvLG9SGlxaxRS0UFhcYu7R1Pf7YX7g1ef6atMmXu2%2FtvPr6JLH05N7vLFpHq6HJ6lux3x9x5DwTiaYOd0dSTiPZukfRSVTBMVaQrtXQ%2BScxyaTVI2FLbV%2F1iw3He0Xxzvl6lY53Rahgv24jYiblChTysx4axV%2BPmaLFNREA3CyzS5fDlBfIPux2FBdvG0LLAXyTP6iUhegbFWmWy6VJjcRl4uPalSgfRlqVITZeqpTBDFPQdG8FbF4dBFO8eu25AHVB10g8Ki5zkiVM0s6iZu%2B1EDg68mCHNWY5BJ6xKjUR%2FpOrHyT5sr5VdWrnWQMcZRq6bgjIdc9dmiJMGD9QYR53ewaTQYVhxREysYWVm7z26oZa3pRMchRp7nCXPMnzvWPzSvqeskrYykbyowcewNty4OPlGAEqbekIrTcoU0VUiel4VWNoDsc%2BCRa5qP1J%2FUwhVdZzRUIFkEsyulGUwIe%2BA83EENmcZORsYKQXDTi%2F3io1NZextM4wy2IVg8FKrDA7iY4w0uOyxAY6pgEIL6EQqnfbOqQYOGS03rv5yDmNm41B2s15%2Bo%2BQhlmJSwl9JiHtd7vX1bEvJDavqAm5qY6ag3g8OSpb%2B19oFl8gfA4OUDVVbww5HzexD8LeG55mMydslZR%2BBmlXzzeQNL0Xw6GpROmnVpxXLRwfECOaMCN%2F3SpoyCba5gzxEepd8ZVwRPFLB30dFjDuK7%2FaHcEOMqPhNyGIgKS6BZaf54E56%2B4eiW%2Bo&X-Amz-Signature=b428011196cdbf5045130d42aaae9c517665b2399248dbe4dafcab9c7106d9a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PECEWUB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE24s08Vgu6l7Tovqs2ZO5mMf0SAWLNebYh%2FmszHmQz0AiBmcX%2Bh%2BfLiU9CY261rk59K4aNM4J6s4McnNLGi%2Bc7zJiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7RiIrODlkpnB4loWKtwD4S5uwH3CaF3GWRnpHQah0iuPiQCaZtvVdf6j9iqVOIjVdkC4htmpRWA0QiTuULCDdj6jeZR7u4nvqILRhZjyTWYdxa6kFIOcld355I8YSyiS9F36jP9zBDvLG9SGlxaxRS0UFhcYu7R1Pf7YX7g1ef6atMmXu2%2FtvPr6JLH05N7vLFpHq6HJ6lux3x9x5DwTiaYOd0dSTiPZukfRSVTBMVaQrtXQ%2BScxyaTVI2FLbV%2F1iw3He0Xxzvl6lY53Rahgv24jYiblChTysx4axV%2BPmaLFNREA3CyzS5fDlBfIPux2FBdvG0LLAXyTP6iUhegbFWmWy6VJjcRl4uPalSgfRlqVITZeqpTBDFPQdG8FbF4dBFO8eu25AHVB10g8Ki5zkiVM0s6iZu%2B1EDg68mCHNWY5BJ6xKjUR%2FpOrHyT5sr5VdWrnWQMcZRq6bgjIdc9dmiJMGD9QYR53ewaTQYVhxREysYWVm7z26oZa3pRMchRp7nCXPMnzvWPzSvqeskrYykbyowcewNty4OPlGAEqbekIrTcoU0VUiel4VWNoDsc%2BCRa5qP1J%2FUwhVdZzRUIFkEsyulGUwIe%2BA83EENmcZORsYKQXDTi%2F3io1NZextM4wy2IVg8FKrDA7iY4w0uOyxAY6pgEIL6EQqnfbOqQYOGS03rv5yDmNm41B2s15%2Bo%2BQhlmJSwl9JiHtd7vX1bEvJDavqAm5qY6ag3g8OSpb%2B19oFl8gfA4OUDVVbww5HzexD8LeG55mMydslZR%2BBmlXzzeQNL0Xw6GpROmnVpxXLRwfECOaMCN%2F3SpoyCba5gzxEepd8ZVwRPFLB30dFjDuK7%2FaHcEOMqPhNyGIgKS6BZaf54E56%2B4eiW%2Bo&X-Amz-Signature=8956f9ba2e2cea8bd097351e6a81592c6e7803ab0106fdc30a3ed360acd6cfd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PECEWUB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE24s08Vgu6l7Tovqs2ZO5mMf0SAWLNebYh%2FmszHmQz0AiBmcX%2Bh%2BfLiU9CY261rk59K4aNM4J6s4McnNLGi%2Bc7zJiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7RiIrODlkpnB4loWKtwD4S5uwH3CaF3GWRnpHQah0iuPiQCaZtvVdf6j9iqVOIjVdkC4htmpRWA0QiTuULCDdj6jeZR7u4nvqILRhZjyTWYdxa6kFIOcld355I8YSyiS9F36jP9zBDvLG9SGlxaxRS0UFhcYu7R1Pf7YX7g1ef6atMmXu2%2FtvPr6JLH05N7vLFpHq6HJ6lux3x9x5DwTiaYOd0dSTiPZukfRSVTBMVaQrtXQ%2BScxyaTVI2FLbV%2F1iw3He0Xxzvl6lY53Rahgv24jYiblChTysx4axV%2BPmaLFNREA3CyzS5fDlBfIPux2FBdvG0LLAXyTP6iUhegbFWmWy6VJjcRl4uPalSgfRlqVITZeqpTBDFPQdG8FbF4dBFO8eu25AHVB10g8Ki5zkiVM0s6iZu%2B1EDg68mCHNWY5BJ6xKjUR%2FpOrHyT5sr5VdWrnWQMcZRq6bgjIdc9dmiJMGD9QYR53ewaTQYVhxREysYWVm7z26oZa3pRMchRp7nCXPMnzvWPzSvqeskrYykbyowcewNty4OPlGAEqbekIrTcoU0VUiel4VWNoDsc%2BCRa5qP1J%2FUwhVdZzRUIFkEsyulGUwIe%2BA83EENmcZORsYKQXDTi%2F3io1NZextM4wy2IVg8FKrDA7iY4w0uOyxAY6pgEIL6EQqnfbOqQYOGS03rv5yDmNm41B2s15%2Bo%2BQhlmJSwl9JiHtd7vX1bEvJDavqAm5qY6ag3g8OSpb%2B19oFl8gfA4OUDVVbww5HzexD8LeG55mMydslZR%2BBmlXzzeQNL0Xw6GpROmnVpxXLRwfECOaMCN%2F3SpoyCba5gzxEepd8ZVwRPFLB30dFjDuK7%2FaHcEOMqPhNyGIgKS6BZaf54E56%2B4eiW%2Bo&X-Amz-Signature=e6ffdcbaec7f5fc837d78ecb8ddef71ae862ac7e25bf33614e8ebf397432ea2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PECEWUB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE24s08Vgu6l7Tovqs2ZO5mMf0SAWLNebYh%2FmszHmQz0AiBmcX%2Bh%2BfLiU9CY261rk59K4aNM4J6s4McnNLGi%2Bc7zJiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7RiIrODlkpnB4loWKtwD4S5uwH3CaF3GWRnpHQah0iuPiQCaZtvVdf6j9iqVOIjVdkC4htmpRWA0QiTuULCDdj6jeZR7u4nvqILRhZjyTWYdxa6kFIOcld355I8YSyiS9F36jP9zBDvLG9SGlxaxRS0UFhcYu7R1Pf7YX7g1ef6atMmXu2%2FtvPr6JLH05N7vLFpHq6HJ6lux3x9x5DwTiaYOd0dSTiPZukfRSVTBMVaQrtXQ%2BScxyaTVI2FLbV%2F1iw3He0Xxzvl6lY53Rahgv24jYiblChTysx4axV%2BPmaLFNREA3CyzS5fDlBfIPux2FBdvG0LLAXyTP6iUhegbFWmWy6VJjcRl4uPalSgfRlqVITZeqpTBDFPQdG8FbF4dBFO8eu25AHVB10g8Ki5zkiVM0s6iZu%2B1EDg68mCHNWY5BJ6xKjUR%2FpOrHyT5sr5VdWrnWQMcZRq6bgjIdc9dmiJMGD9QYR53ewaTQYVhxREysYWVm7z26oZa3pRMchRp7nCXPMnzvWPzSvqeskrYykbyowcewNty4OPlGAEqbekIrTcoU0VUiel4VWNoDsc%2BCRa5qP1J%2FUwhVdZzRUIFkEsyulGUwIe%2BA83EENmcZORsYKQXDTi%2F3io1NZextM4wy2IVg8FKrDA7iY4w0uOyxAY6pgEIL6EQqnfbOqQYOGS03rv5yDmNm41B2s15%2Bo%2BQhlmJSwl9JiHtd7vX1bEvJDavqAm5qY6ag3g8OSpb%2B19oFl8gfA4OUDVVbww5HzexD8LeG55mMydslZR%2BBmlXzzeQNL0Xw6GpROmnVpxXLRwfECOaMCN%2F3SpoyCba5gzxEepd8ZVwRPFLB30dFjDuK7%2FaHcEOMqPhNyGIgKS6BZaf54E56%2B4eiW%2Bo&X-Amz-Signature=ebcc8e55d040fe24671dbf82233fcd8c31e132a8525f07eee4e24d17968cf817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PECEWUB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE24s08Vgu6l7Tovqs2ZO5mMf0SAWLNebYh%2FmszHmQz0AiBmcX%2Bh%2BfLiU9CY261rk59K4aNM4J6s4McnNLGi%2Bc7zJiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7RiIrODlkpnB4loWKtwD4S5uwH3CaF3GWRnpHQah0iuPiQCaZtvVdf6j9iqVOIjVdkC4htmpRWA0QiTuULCDdj6jeZR7u4nvqILRhZjyTWYdxa6kFIOcld355I8YSyiS9F36jP9zBDvLG9SGlxaxRS0UFhcYu7R1Pf7YX7g1ef6atMmXu2%2FtvPr6JLH05N7vLFpHq6HJ6lux3x9x5DwTiaYOd0dSTiPZukfRSVTBMVaQrtXQ%2BScxyaTVI2FLbV%2F1iw3He0Xxzvl6lY53Rahgv24jYiblChTysx4axV%2BPmaLFNREA3CyzS5fDlBfIPux2FBdvG0LLAXyTP6iUhegbFWmWy6VJjcRl4uPalSgfRlqVITZeqpTBDFPQdG8FbF4dBFO8eu25AHVB10g8Ki5zkiVM0s6iZu%2B1EDg68mCHNWY5BJ6xKjUR%2FpOrHyT5sr5VdWrnWQMcZRq6bgjIdc9dmiJMGD9QYR53ewaTQYVhxREysYWVm7z26oZa3pRMchRp7nCXPMnzvWPzSvqeskrYykbyowcewNty4OPlGAEqbekIrTcoU0VUiel4VWNoDsc%2BCRa5qP1J%2FUwhVdZzRUIFkEsyulGUwIe%2BA83EENmcZORsYKQXDTi%2F3io1NZextM4wy2IVg8FKrDA7iY4w0uOyxAY6pgEIL6EQqnfbOqQYOGS03rv5yDmNm41B2s15%2Bo%2BQhlmJSwl9JiHtd7vX1bEvJDavqAm5qY6ag3g8OSpb%2B19oFl8gfA4OUDVVbww5HzexD8LeG55mMydslZR%2BBmlXzzeQNL0Xw6GpROmnVpxXLRwfECOaMCN%2F3SpoyCba5gzxEepd8ZVwRPFLB30dFjDuK7%2FaHcEOMqPhNyGIgKS6BZaf54E56%2B4eiW%2Bo&X-Amz-Signature=58bf1acd608e1ad303d0c02c6ed9246c4474b64bcc5d48c3f761ea68188c59d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PECEWUB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE24s08Vgu6l7Tovqs2ZO5mMf0SAWLNebYh%2FmszHmQz0AiBmcX%2Bh%2BfLiU9CY261rk59K4aNM4J6s4McnNLGi%2Bc7zJiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7RiIrODlkpnB4loWKtwD4S5uwH3CaF3GWRnpHQah0iuPiQCaZtvVdf6j9iqVOIjVdkC4htmpRWA0QiTuULCDdj6jeZR7u4nvqILRhZjyTWYdxa6kFIOcld355I8YSyiS9F36jP9zBDvLG9SGlxaxRS0UFhcYu7R1Pf7YX7g1ef6atMmXu2%2FtvPr6JLH05N7vLFpHq6HJ6lux3x9x5DwTiaYOd0dSTiPZukfRSVTBMVaQrtXQ%2BScxyaTVI2FLbV%2F1iw3He0Xxzvl6lY53Rahgv24jYiblChTysx4axV%2BPmaLFNREA3CyzS5fDlBfIPux2FBdvG0LLAXyTP6iUhegbFWmWy6VJjcRl4uPalSgfRlqVITZeqpTBDFPQdG8FbF4dBFO8eu25AHVB10g8Ki5zkiVM0s6iZu%2B1EDg68mCHNWY5BJ6xKjUR%2FpOrHyT5sr5VdWrnWQMcZRq6bgjIdc9dmiJMGD9QYR53ewaTQYVhxREysYWVm7z26oZa3pRMchRp7nCXPMnzvWPzSvqeskrYykbyowcewNty4OPlGAEqbekIrTcoU0VUiel4VWNoDsc%2BCRa5qP1J%2FUwhVdZzRUIFkEsyulGUwIe%2BA83EENmcZORsYKQXDTi%2F3io1NZextM4wy2IVg8FKrDA7iY4w0uOyxAY6pgEIL6EQqnfbOqQYOGS03rv5yDmNm41B2s15%2Bo%2BQhlmJSwl9JiHtd7vX1bEvJDavqAm5qY6ag3g8OSpb%2B19oFl8gfA4OUDVVbww5HzexD8LeG55mMydslZR%2BBmlXzzeQNL0Xw6GpROmnVpxXLRwfECOaMCN%2F3SpoyCba5gzxEepd8ZVwRPFLB30dFjDuK7%2FaHcEOMqPhNyGIgKS6BZaf54E56%2B4eiW%2Bo&X-Amz-Signature=3348d2b02f5502c0b78ddcdd73a7ba93da11bd55a2fae9e011f1a254bda3ccb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PECEWUB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE24s08Vgu6l7Tovqs2ZO5mMf0SAWLNebYh%2FmszHmQz0AiBmcX%2Bh%2BfLiU9CY261rk59K4aNM4J6s4McnNLGi%2Bc7zJiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7RiIrODlkpnB4loWKtwD4S5uwH3CaF3GWRnpHQah0iuPiQCaZtvVdf6j9iqVOIjVdkC4htmpRWA0QiTuULCDdj6jeZR7u4nvqILRhZjyTWYdxa6kFIOcld355I8YSyiS9F36jP9zBDvLG9SGlxaxRS0UFhcYu7R1Pf7YX7g1ef6atMmXu2%2FtvPr6JLH05N7vLFpHq6HJ6lux3x9x5DwTiaYOd0dSTiPZukfRSVTBMVaQrtXQ%2BScxyaTVI2FLbV%2F1iw3He0Xxzvl6lY53Rahgv24jYiblChTysx4axV%2BPmaLFNREA3CyzS5fDlBfIPux2FBdvG0LLAXyTP6iUhegbFWmWy6VJjcRl4uPalSgfRlqVITZeqpTBDFPQdG8FbF4dBFO8eu25AHVB10g8Ki5zkiVM0s6iZu%2B1EDg68mCHNWY5BJ6xKjUR%2FpOrHyT5sr5VdWrnWQMcZRq6bgjIdc9dmiJMGD9QYR53ewaTQYVhxREysYWVm7z26oZa3pRMchRp7nCXPMnzvWPzSvqeskrYykbyowcewNty4OPlGAEqbekIrTcoU0VUiel4VWNoDsc%2BCRa5qP1J%2FUwhVdZzRUIFkEsyulGUwIe%2BA83EENmcZORsYKQXDTi%2F3io1NZextM4wy2IVg8FKrDA7iY4w0uOyxAY6pgEIL6EQqnfbOqQYOGS03rv5yDmNm41B2s15%2Bo%2BQhlmJSwl9JiHtd7vX1bEvJDavqAm5qY6ag3g8OSpb%2B19oFl8gfA4OUDVVbww5HzexD8LeG55mMydslZR%2BBmlXzzeQNL0Xw6GpROmnVpxXLRwfECOaMCN%2F3SpoyCba5gzxEepd8ZVwRPFLB30dFjDuK7%2FaHcEOMqPhNyGIgKS6BZaf54E56%2B4eiW%2Bo&X-Amz-Signature=aa6a4992b4232ba1c9334b4824e36be1614e86fcba58487bb5cd3bf914755a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PECEWUB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE24s08Vgu6l7Tovqs2ZO5mMf0SAWLNebYh%2FmszHmQz0AiBmcX%2Bh%2BfLiU9CY261rk59K4aNM4J6s4McnNLGi%2Bc7zJiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7RiIrODlkpnB4loWKtwD4S5uwH3CaF3GWRnpHQah0iuPiQCaZtvVdf6j9iqVOIjVdkC4htmpRWA0QiTuULCDdj6jeZR7u4nvqILRhZjyTWYdxa6kFIOcld355I8YSyiS9F36jP9zBDvLG9SGlxaxRS0UFhcYu7R1Pf7YX7g1ef6atMmXu2%2FtvPr6JLH05N7vLFpHq6HJ6lux3x9x5DwTiaYOd0dSTiPZukfRSVTBMVaQrtXQ%2BScxyaTVI2FLbV%2F1iw3He0Xxzvl6lY53Rahgv24jYiblChTysx4axV%2BPmaLFNREA3CyzS5fDlBfIPux2FBdvG0LLAXyTP6iUhegbFWmWy6VJjcRl4uPalSgfRlqVITZeqpTBDFPQdG8FbF4dBFO8eu25AHVB10g8Ki5zkiVM0s6iZu%2B1EDg68mCHNWY5BJ6xKjUR%2FpOrHyT5sr5VdWrnWQMcZRq6bgjIdc9dmiJMGD9QYR53ewaTQYVhxREysYWVm7z26oZa3pRMchRp7nCXPMnzvWPzSvqeskrYykbyowcewNty4OPlGAEqbekIrTcoU0VUiel4VWNoDsc%2BCRa5qP1J%2FUwhVdZzRUIFkEsyulGUwIe%2BA83EENmcZORsYKQXDTi%2F3io1NZextM4wy2IVg8FKrDA7iY4w0uOyxAY6pgEIL6EQqnfbOqQYOGS03rv5yDmNm41B2s15%2Bo%2BQhlmJSwl9JiHtd7vX1bEvJDavqAm5qY6ag3g8OSpb%2B19oFl8gfA4OUDVVbww5HzexD8LeG55mMydslZR%2BBmlXzzeQNL0Xw6GpROmnVpxXLRwfECOaMCN%2F3SpoyCba5gzxEepd8ZVwRPFLB30dFjDuK7%2FaHcEOMqPhNyGIgKS6BZaf54E56%2B4eiW%2Bo&X-Amz-Signature=8ba765758b735f033a1fe4b2e2965b8afe194f12c6a7360f650fec4e1a527522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PECEWUB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE24s08Vgu6l7Tovqs2ZO5mMf0SAWLNebYh%2FmszHmQz0AiBmcX%2Bh%2BfLiU9CY261rk59K4aNM4J6s4McnNLGi%2Bc7zJiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7RiIrODlkpnB4loWKtwD4S5uwH3CaF3GWRnpHQah0iuPiQCaZtvVdf6j9iqVOIjVdkC4htmpRWA0QiTuULCDdj6jeZR7u4nvqILRhZjyTWYdxa6kFIOcld355I8YSyiS9F36jP9zBDvLG9SGlxaxRS0UFhcYu7R1Pf7YX7g1ef6atMmXu2%2FtvPr6JLH05N7vLFpHq6HJ6lux3x9x5DwTiaYOd0dSTiPZukfRSVTBMVaQrtXQ%2BScxyaTVI2FLbV%2F1iw3He0Xxzvl6lY53Rahgv24jYiblChTysx4axV%2BPmaLFNREA3CyzS5fDlBfIPux2FBdvG0LLAXyTP6iUhegbFWmWy6VJjcRl4uPalSgfRlqVITZeqpTBDFPQdG8FbF4dBFO8eu25AHVB10g8Ki5zkiVM0s6iZu%2B1EDg68mCHNWY5BJ6xKjUR%2FpOrHyT5sr5VdWrnWQMcZRq6bgjIdc9dmiJMGD9QYR53ewaTQYVhxREysYWVm7z26oZa3pRMchRp7nCXPMnzvWPzSvqeskrYykbyowcewNty4OPlGAEqbekIrTcoU0VUiel4VWNoDsc%2BCRa5qP1J%2FUwhVdZzRUIFkEsyulGUwIe%2BA83EENmcZORsYKQXDTi%2F3io1NZextM4wy2IVg8FKrDA7iY4w0uOyxAY6pgEIL6EQqnfbOqQYOGS03rv5yDmNm41B2s15%2Bo%2BQhlmJSwl9JiHtd7vX1bEvJDavqAm5qY6ag3g8OSpb%2B19oFl8gfA4OUDVVbww5HzexD8LeG55mMydslZR%2BBmlXzzeQNL0Xw6GpROmnVpxXLRwfECOaMCN%2F3SpoyCba5gzxEepd8ZVwRPFLB30dFjDuK7%2FaHcEOMqPhNyGIgKS6BZaf54E56%2B4eiW%2Bo&X-Amz-Signature=2de2a1a6c059d28384e10bb4627b9ed3dff12516a5425160f9d7feaece9823ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PECEWUB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE24s08Vgu6l7Tovqs2ZO5mMf0SAWLNebYh%2FmszHmQz0AiBmcX%2Bh%2BfLiU9CY261rk59K4aNM4J6s4McnNLGi%2Bc7zJiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7RiIrODlkpnB4loWKtwD4S5uwH3CaF3GWRnpHQah0iuPiQCaZtvVdf6j9iqVOIjVdkC4htmpRWA0QiTuULCDdj6jeZR7u4nvqILRhZjyTWYdxa6kFIOcld355I8YSyiS9F36jP9zBDvLG9SGlxaxRS0UFhcYu7R1Pf7YX7g1ef6atMmXu2%2FtvPr6JLH05N7vLFpHq6HJ6lux3x9x5DwTiaYOd0dSTiPZukfRSVTBMVaQrtXQ%2BScxyaTVI2FLbV%2F1iw3He0Xxzvl6lY53Rahgv24jYiblChTysx4axV%2BPmaLFNREA3CyzS5fDlBfIPux2FBdvG0LLAXyTP6iUhegbFWmWy6VJjcRl4uPalSgfRlqVITZeqpTBDFPQdG8FbF4dBFO8eu25AHVB10g8Ki5zkiVM0s6iZu%2B1EDg68mCHNWY5BJ6xKjUR%2FpOrHyT5sr5VdWrnWQMcZRq6bgjIdc9dmiJMGD9QYR53ewaTQYVhxREysYWVm7z26oZa3pRMchRp7nCXPMnzvWPzSvqeskrYykbyowcewNty4OPlGAEqbekIrTcoU0VUiel4VWNoDsc%2BCRa5qP1J%2FUwhVdZzRUIFkEsyulGUwIe%2BA83EENmcZORsYKQXDTi%2F3io1NZextM4wy2IVg8FKrDA7iY4w0uOyxAY6pgEIL6EQqnfbOqQYOGS03rv5yDmNm41B2s15%2Bo%2BQhlmJSwl9JiHtd7vX1bEvJDavqAm5qY6ag3g8OSpb%2B19oFl8gfA4OUDVVbww5HzexD8LeG55mMydslZR%2BBmlXzzeQNL0Xw6GpROmnVpxXLRwfECOaMCN%2F3SpoyCba5gzxEepd8ZVwRPFLB30dFjDuK7%2FaHcEOMqPhNyGIgKS6BZaf54E56%2B4eiW%2Bo&X-Amz-Signature=d81ebe0695676b337437427cda0a72c28e7cb66bdd3ab6ecaa3bba2c950192c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PECEWUB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE24s08Vgu6l7Tovqs2ZO5mMf0SAWLNebYh%2FmszHmQz0AiBmcX%2Bh%2BfLiU9CY261rk59K4aNM4J6s4McnNLGi%2Bc7zJiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7RiIrODlkpnB4loWKtwD4S5uwH3CaF3GWRnpHQah0iuPiQCaZtvVdf6j9iqVOIjVdkC4htmpRWA0QiTuULCDdj6jeZR7u4nvqILRhZjyTWYdxa6kFIOcld355I8YSyiS9F36jP9zBDvLG9SGlxaxRS0UFhcYu7R1Pf7YX7g1ef6atMmXu2%2FtvPr6JLH05N7vLFpHq6HJ6lux3x9x5DwTiaYOd0dSTiPZukfRSVTBMVaQrtXQ%2BScxyaTVI2FLbV%2F1iw3He0Xxzvl6lY53Rahgv24jYiblChTysx4axV%2BPmaLFNREA3CyzS5fDlBfIPux2FBdvG0LLAXyTP6iUhegbFWmWy6VJjcRl4uPalSgfRlqVITZeqpTBDFPQdG8FbF4dBFO8eu25AHVB10g8Ki5zkiVM0s6iZu%2B1EDg68mCHNWY5BJ6xKjUR%2FpOrHyT5sr5VdWrnWQMcZRq6bgjIdc9dmiJMGD9QYR53ewaTQYVhxREysYWVm7z26oZa3pRMchRp7nCXPMnzvWPzSvqeskrYykbyowcewNty4OPlGAEqbekIrTcoU0VUiel4VWNoDsc%2BCRa5qP1J%2FUwhVdZzRUIFkEsyulGUwIe%2BA83EENmcZORsYKQXDTi%2F3io1NZextM4wy2IVg8FKrDA7iY4w0uOyxAY6pgEIL6EQqnfbOqQYOGS03rv5yDmNm41B2s15%2Bo%2BQhlmJSwl9JiHtd7vX1bEvJDavqAm5qY6ag3g8OSpb%2B19oFl8gfA4OUDVVbww5HzexD8LeG55mMydslZR%2BBmlXzzeQNL0Xw6GpROmnVpxXLRwfECOaMCN%2F3SpoyCba5gzxEepd8ZVwRPFLB30dFjDuK7%2FaHcEOMqPhNyGIgKS6BZaf54E56%2B4eiW%2Bo&X-Amz-Signature=b7f4488aed8e59d241e302047d428fd5f9d316e44874f7ac54521aa8c2cd621e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PECEWUB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE24s08Vgu6l7Tovqs2ZO5mMf0SAWLNebYh%2FmszHmQz0AiBmcX%2Bh%2BfLiU9CY261rk59K4aNM4J6s4McnNLGi%2Bc7zJiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7RiIrODlkpnB4loWKtwD4S5uwH3CaF3GWRnpHQah0iuPiQCaZtvVdf6j9iqVOIjVdkC4htmpRWA0QiTuULCDdj6jeZR7u4nvqILRhZjyTWYdxa6kFIOcld355I8YSyiS9F36jP9zBDvLG9SGlxaxRS0UFhcYu7R1Pf7YX7g1ef6atMmXu2%2FtvPr6JLH05N7vLFpHq6HJ6lux3x9x5DwTiaYOd0dSTiPZukfRSVTBMVaQrtXQ%2BScxyaTVI2FLbV%2F1iw3He0Xxzvl6lY53Rahgv24jYiblChTysx4axV%2BPmaLFNREA3CyzS5fDlBfIPux2FBdvG0LLAXyTP6iUhegbFWmWy6VJjcRl4uPalSgfRlqVITZeqpTBDFPQdG8FbF4dBFO8eu25AHVB10g8Ki5zkiVM0s6iZu%2B1EDg68mCHNWY5BJ6xKjUR%2FpOrHyT5sr5VdWrnWQMcZRq6bgjIdc9dmiJMGD9QYR53ewaTQYVhxREysYWVm7z26oZa3pRMchRp7nCXPMnzvWPzSvqeskrYykbyowcewNty4OPlGAEqbekIrTcoU0VUiel4VWNoDsc%2BCRa5qP1J%2FUwhVdZzRUIFkEsyulGUwIe%2BA83EENmcZORsYKQXDTi%2F3io1NZextM4wy2IVg8FKrDA7iY4w0uOyxAY6pgEIL6EQqnfbOqQYOGS03rv5yDmNm41B2s15%2Bo%2BQhlmJSwl9JiHtd7vX1bEvJDavqAm5qY6ag3g8OSpb%2B19oFl8gfA4OUDVVbww5HzexD8LeG55mMydslZR%2BBmlXzzeQNL0Xw6GpROmnVpxXLRwfECOaMCN%2F3SpoyCba5gzxEepd8ZVwRPFLB30dFjDuK7%2FaHcEOMqPhNyGIgKS6BZaf54E56%2B4eiW%2Bo&X-Amz-Signature=3bd62d4bff36c8d69d4eaa150ab9a4f81c81fd35a4f7ada2c34726933690e95e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PECEWUB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE24s08Vgu6l7Tovqs2ZO5mMf0SAWLNebYh%2FmszHmQz0AiBmcX%2Bh%2BfLiU9CY261rk59K4aNM4J6s4McnNLGi%2Bc7zJiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7RiIrODlkpnB4loWKtwD4S5uwH3CaF3GWRnpHQah0iuPiQCaZtvVdf6j9iqVOIjVdkC4htmpRWA0QiTuULCDdj6jeZR7u4nvqILRhZjyTWYdxa6kFIOcld355I8YSyiS9F36jP9zBDvLG9SGlxaxRS0UFhcYu7R1Pf7YX7g1ef6atMmXu2%2FtvPr6JLH05N7vLFpHq6HJ6lux3x9x5DwTiaYOd0dSTiPZukfRSVTBMVaQrtXQ%2BScxyaTVI2FLbV%2F1iw3He0Xxzvl6lY53Rahgv24jYiblChTysx4axV%2BPmaLFNREA3CyzS5fDlBfIPux2FBdvG0LLAXyTP6iUhegbFWmWy6VJjcRl4uPalSgfRlqVITZeqpTBDFPQdG8FbF4dBFO8eu25AHVB10g8Ki5zkiVM0s6iZu%2B1EDg68mCHNWY5BJ6xKjUR%2FpOrHyT5sr5VdWrnWQMcZRq6bgjIdc9dmiJMGD9QYR53ewaTQYVhxREysYWVm7z26oZa3pRMchRp7nCXPMnzvWPzSvqeskrYykbyowcewNty4OPlGAEqbekIrTcoU0VUiel4VWNoDsc%2BCRa5qP1J%2FUwhVdZzRUIFkEsyulGUwIe%2BA83EENmcZORsYKQXDTi%2F3io1NZextM4wy2IVg8FKrDA7iY4w0uOyxAY6pgEIL6EQqnfbOqQYOGS03rv5yDmNm41B2s15%2Bo%2BQhlmJSwl9JiHtd7vX1bEvJDavqAm5qY6ag3g8OSpb%2B19oFl8gfA4OUDVVbww5HzexD8LeG55mMydslZR%2BBmlXzzeQNL0Xw6GpROmnVpxXLRwfECOaMCN%2F3SpoyCba5gzxEepd8ZVwRPFLB30dFjDuK7%2FaHcEOMqPhNyGIgKS6BZaf54E56%2B4eiW%2Bo&X-Amz-Signature=6692e55486aebc86163c47a7fef0ea06bdffcde86dd0f9f4cf4ae6c031ed2f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PECEWUB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE24s08Vgu6l7Tovqs2ZO5mMf0SAWLNebYh%2FmszHmQz0AiBmcX%2Bh%2BfLiU9CY261rk59K4aNM4J6s4McnNLGi%2Bc7zJiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7RiIrODlkpnB4loWKtwD4S5uwH3CaF3GWRnpHQah0iuPiQCaZtvVdf6j9iqVOIjVdkC4htmpRWA0QiTuULCDdj6jeZR7u4nvqILRhZjyTWYdxa6kFIOcld355I8YSyiS9F36jP9zBDvLG9SGlxaxRS0UFhcYu7R1Pf7YX7g1ef6atMmXu2%2FtvPr6JLH05N7vLFpHq6HJ6lux3x9x5DwTiaYOd0dSTiPZukfRSVTBMVaQrtXQ%2BScxyaTVI2FLbV%2F1iw3He0Xxzvl6lY53Rahgv24jYiblChTysx4axV%2BPmaLFNREA3CyzS5fDlBfIPux2FBdvG0LLAXyTP6iUhegbFWmWy6VJjcRl4uPalSgfRlqVITZeqpTBDFPQdG8FbF4dBFO8eu25AHVB10g8Ki5zkiVM0s6iZu%2B1EDg68mCHNWY5BJ6xKjUR%2FpOrHyT5sr5VdWrnWQMcZRq6bgjIdc9dmiJMGD9QYR53ewaTQYVhxREysYWVm7z26oZa3pRMchRp7nCXPMnzvWPzSvqeskrYykbyowcewNty4OPlGAEqbekIrTcoU0VUiel4VWNoDsc%2BCRa5qP1J%2FUwhVdZzRUIFkEsyulGUwIe%2BA83EENmcZORsYKQXDTi%2F3io1NZextM4wy2IVg8FKrDA7iY4w0uOyxAY6pgEIL6EQqnfbOqQYOGS03rv5yDmNm41B2s15%2Bo%2BQhlmJSwl9JiHtd7vX1bEvJDavqAm5qY6ag3g8OSpb%2B19oFl8gfA4OUDVVbww5HzexD8LeG55mMydslZR%2BBmlXzzeQNL0Xw6GpROmnVpxXLRwfECOaMCN%2F3SpoyCba5gzxEepd8ZVwRPFLB30dFjDuK7%2FaHcEOMqPhNyGIgKS6BZaf54E56%2B4eiW%2Bo&X-Amz-Signature=eb60b27eec7cad1b4e0bd8f4b8b84329a273f5653fdf0cae7c009718c0be2d6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
