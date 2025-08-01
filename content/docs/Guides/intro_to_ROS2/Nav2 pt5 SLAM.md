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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTKVKDFT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQHOtGpxu4HaYFoVP9nNdb2%2BoH3J2tSBTv2oe9EayCxAiBg7KgqUNNk2XMd1Dp4D%2FVwbfO2n%2FA3zC9PJLEh%2FO2hyyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXjoeJ7VygJQ6hgCKtwDOORu5V835m%2B2UumA%2FABbeOHCn3gQyOr9PkT1QJy%2F4HnQw9iuMjMNz3po%2FXI1990Qh7Dnv%2BRsEq4l9Rg8GIug4j9G%2Fgv6s0N6cINLqBBE68neZfx%2Bwk8QzWyvmxpNtWfrrsbbtLlNictNoU6Ze%2FjgBlEJrbDAXDe1b%2FUwJ0XDJRmSzwqSqirSHdzOMF3bXCO%2FfOzRdm84fQ80coFtCOtt5cMl2jtCNtt2rYPLNcLpR6q2edDcwH0MJercCFlLWhLS2JOUcWNDstMvPz7ANuLWaqzBkvsHKldseOD9NZLYcj5ds1Eo9%2FLFrkRzGKpnH8FBfoMwk10HJUdO5XEtpQ4ykZ%2FtcHIF0CHRVdEiu1%2BtFHjMrwfz5IupHfDW5lA343BX%2FKrikyyyGCJeAYkzawxvY0s775a28BQuroCt0EqZjDORD0gHBfR5mwYJccW5vX8dAh%2BMpIkz9OBBApaRlqx4BIBHmr5mWeSo4D5FWgvPCBfRvQ9vozNhCIQnQzC3%2B%2FMeuc1lD%2FaqjKlCItGABSb30XskDwUzTU20NLvZ7hbfmrC%2FfTq%2BdQcgYG01FJLf8HvDTwYWep5zwGlu68O6DVmYyWgktvsvMeaissk3OkvCj5lwr0sGBAgwNcNZnRowt%2FqzxAY6pgHrtCcESHw2gdD5qABuc0e66XCskCzoGLKrc2jBo3%2BXeXKofE1Ab7EQUHpSjj1T%2Fn8UlUyT1n%2BYNl0cgIkP7YVFdbSmcyamjZrPvH6YXnU5r0oJPqPLdbyvr2X9tqE2AO894i8eu9IOL3dsdIUM2x2UpXD9Q4ir%2BENdykw3fZ0J9HIEfW1ZjfZkRQ%2BvS%2BQDSG5YZaH8GgT%2F55Xrp49KsMwmU0dUgCz8&X-Amz-Signature=c22126dc34767d484ceb5e84d6a10d1cdd6e925ccd9f6bbf9dd0853f66b41873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTKVKDFT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQHOtGpxu4HaYFoVP9nNdb2%2BoH3J2tSBTv2oe9EayCxAiBg7KgqUNNk2XMd1Dp4D%2FVwbfO2n%2FA3zC9PJLEh%2FO2hyyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXjoeJ7VygJQ6hgCKtwDOORu5V835m%2B2UumA%2FABbeOHCn3gQyOr9PkT1QJy%2F4HnQw9iuMjMNz3po%2FXI1990Qh7Dnv%2BRsEq4l9Rg8GIug4j9G%2Fgv6s0N6cINLqBBE68neZfx%2Bwk8QzWyvmxpNtWfrrsbbtLlNictNoU6Ze%2FjgBlEJrbDAXDe1b%2FUwJ0XDJRmSzwqSqirSHdzOMF3bXCO%2FfOzRdm84fQ80coFtCOtt5cMl2jtCNtt2rYPLNcLpR6q2edDcwH0MJercCFlLWhLS2JOUcWNDstMvPz7ANuLWaqzBkvsHKldseOD9NZLYcj5ds1Eo9%2FLFrkRzGKpnH8FBfoMwk10HJUdO5XEtpQ4ykZ%2FtcHIF0CHRVdEiu1%2BtFHjMrwfz5IupHfDW5lA343BX%2FKrikyyyGCJeAYkzawxvY0s775a28BQuroCt0EqZjDORD0gHBfR5mwYJccW5vX8dAh%2BMpIkz9OBBApaRlqx4BIBHmr5mWeSo4D5FWgvPCBfRvQ9vozNhCIQnQzC3%2B%2FMeuc1lD%2FaqjKlCItGABSb30XskDwUzTU20NLvZ7hbfmrC%2FfTq%2BdQcgYG01FJLf8HvDTwYWep5zwGlu68O6DVmYyWgktvsvMeaissk3OkvCj5lwr0sGBAgwNcNZnRowt%2FqzxAY6pgHrtCcESHw2gdD5qABuc0e66XCskCzoGLKrc2jBo3%2BXeXKofE1Ab7EQUHpSjj1T%2Fn8UlUyT1n%2BYNl0cgIkP7YVFdbSmcyamjZrPvH6YXnU5r0oJPqPLdbyvr2X9tqE2AO894i8eu9IOL3dsdIUM2x2UpXD9Q4ir%2BENdykw3fZ0J9HIEfW1ZjfZkRQ%2BvS%2BQDSG5YZaH8GgT%2F55Xrp49KsMwmU0dUgCz8&X-Amz-Signature=4227bc566b69180f75629fbd339df471163c461a1bc1222fd65895794df75ac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTKVKDFT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQHOtGpxu4HaYFoVP9nNdb2%2BoH3J2tSBTv2oe9EayCxAiBg7KgqUNNk2XMd1Dp4D%2FVwbfO2n%2FA3zC9PJLEh%2FO2hyyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXjoeJ7VygJQ6hgCKtwDOORu5V835m%2B2UumA%2FABbeOHCn3gQyOr9PkT1QJy%2F4HnQw9iuMjMNz3po%2FXI1990Qh7Dnv%2BRsEq4l9Rg8GIug4j9G%2Fgv6s0N6cINLqBBE68neZfx%2Bwk8QzWyvmxpNtWfrrsbbtLlNictNoU6Ze%2FjgBlEJrbDAXDe1b%2FUwJ0XDJRmSzwqSqirSHdzOMF3bXCO%2FfOzRdm84fQ80coFtCOtt5cMl2jtCNtt2rYPLNcLpR6q2edDcwH0MJercCFlLWhLS2JOUcWNDstMvPz7ANuLWaqzBkvsHKldseOD9NZLYcj5ds1Eo9%2FLFrkRzGKpnH8FBfoMwk10HJUdO5XEtpQ4ykZ%2FtcHIF0CHRVdEiu1%2BtFHjMrwfz5IupHfDW5lA343BX%2FKrikyyyGCJeAYkzawxvY0s775a28BQuroCt0EqZjDORD0gHBfR5mwYJccW5vX8dAh%2BMpIkz9OBBApaRlqx4BIBHmr5mWeSo4D5FWgvPCBfRvQ9vozNhCIQnQzC3%2B%2FMeuc1lD%2FaqjKlCItGABSb30XskDwUzTU20NLvZ7hbfmrC%2FfTq%2BdQcgYG01FJLf8HvDTwYWep5zwGlu68O6DVmYyWgktvsvMeaissk3OkvCj5lwr0sGBAgwNcNZnRowt%2FqzxAY6pgHrtCcESHw2gdD5qABuc0e66XCskCzoGLKrc2jBo3%2BXeXKofE1Ab7EQUHpSjj1T%2Fn8UlUyT1n%2BYNl0cgIkP7YVFdbSmcyamjZrPvH6YXnU5r0oJPqPLdbyvr2X9tqE2AO894i8eu9IOL3dsdIUM2x2UpXD9Q4ir%2BENdykw3fZ0J9HIEfW1ZjfZkRQ%2BvS%2BQDSG5YZaH8GgT%2F55Xrp49KsMwmU0dUgCz8&X-Amz-Signature=9accaf6ed5d6a0e8d37e18b9073507ffb2b0c0a216ce66f42ae7403bc91e7053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTKVKDFT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQHOtGpxu4HaYFoVP9nNdb2%2BoH3J2tSBTv2oe9EayCxAiBg7KgqUNNk2XMd1Dp4D%2FVwbfO2n%2FA3zC9PJLEh%2FO2hyyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXjoeJ7VygJQ6hgCKtwDOORu5V835m%2B2UumA%2FABbeOHCn3gQyOr9PkT1QJy%2F4HnQw9iuMjMNz3po%2FXI1990Qh7Dnv%2BRsEq4l9Rg8GIug4j9G%2Fgv6s0N6cINLqBBE68neZfx%2Bwk8QzWyvmxpNtWfrrsbbtLlNictNoU6Ze%2FjgBlEJrbDAXDe1b%2FUwJ0XDJRmSzwqSqirSHdzOMF3bXCO%2FfOzRdm84fQ80coFtCOtt5cMl2jtCNtt2rYPLNcLpR6q2edDcwH0MJercCFlLWhLS2JOUcWNDstMvPz7ANuLWaqzBkvsHKldseOD9NZLYcj5ds1Eo9%2FLFrkRzGKpnH8FBfoMwk10HJUdO5XEtpQ4ykZ%2FtcHIF0CHRVdEiu1%2BtFHjMrwfz5IupHfDW5lA343BX%2FKrikyyyGCJeAYkzawxvY0s775a28BQuroCt0EqZjDORD0gHBfR5mwYJccW5vX8dAh%2BMpIkz9OBBApaRlqx4BIBHmr5mWeSo4D5FWgvPCBfRvQ9vozNhCIQnQzC3%2B%2FMeuc1lD%2FaqjKlCItGABSb30XskDwUzTU20NLvZ7hbfmrC%2FfTq%2BdQcgYG01FJLf8HvDTwYWep5zwGlu68O6DVmYyWgktvsvMeaissk3OkvCj5lwr0sGBAgwNcNZnRowt%2FqzxAY6pgHrtCcESHw2gdD5qABuc0e66XCskCzoGLKrc2jBo3%2BXeXKofE1Ab7EQUHpSjj1T%2Fn8UlUyT1n%2BYNl0cgIkP7YVFdbSmcyamjZrPvH6YXnU5r0oJPqPLdbyvr2X9tqE2AO894i8eu9IOL3dsdIUM2x2UpXD9Q4ir%2BENdykw3fZ0J9HIEfW1ZjfZkRQ%2BvS%2BQDSG5YZaH8GgT%2F55Xrp49KsMwmU0dUgCz8&X-Amz-Signature=fda098eb7781ee8c47bb421247747fed04b999084a6823c5584ed0da2aa566c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTKVKDFT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQHOtGpxu4HaYFoVP9nNdb2%2BoH3J2tSBTv2oe9EayCxAiBg7KgqUNNk2XMd1Dp4D%2FVwbfO2n%2FA3zC9PJLEh%2FO2hyyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXjoeJ7VygJQ6hgCKtwDOORu5V835m%2B2UumA%2FABbeOHCn3gQyOr9PkT1QJy%2F4HnQw9iuMjMNz3po%2FXI1990Qh7Dnv%2BRsEq4l9Rg8GIug4j9G%2Fgv6s0N6cINLqBBE68neZfx%2Bwk8QzWyvmxpNtWfrrsbbtLlNictNoU6Ze%2FjgBlEJrbDAXDe1b%2FUwJ0XDJRmSzwqSqirSHdzOMF3bXCO%2FfOzRdm84fQ80coFtCOtt5cMl2jtCNtt2rYPLNcLpR6q2edDcwH0MJercCFlLWhLS2JOUcWNDstMvPz7ANuLWaqzBkvsHKldseOD9NZLYcj5ds1Eo9%2FLFrkRzGKpnH8FBfoMwk10HJUdO5XEtpQ4ykZ%2FtcHIF0CHRVdEiu1%2BtFHjMrwfz5IupHfDW5lA343BX%2FKrikyyyGCJeAYkzawxvY0s775a28BQuroCt0EqZjDORD0gHBfR5mwYJccW5vX8dAh%2BMpIkz9OBBApaRlqx4BIBHmr5mWeSo4D5FWgvPCBfRvQ9vozNhCIQnQzC3%2B%2FMeuc1lD%2FaqjKlCItGABSb30XskDwUzTU20NLvZ7hbfmrC%2FfTq%2BdQcgYG01FJLf8HvDTwYWep5zwGlu68O6DVmYyWgktvsvMeaissk3OkvCj5lwr0sGBAgwNcNZnRowt%2FqzxAY6pgHrtCcESHw2gdD5qABuc0e66XCskCzoGLKrc2jBo3%2BXeXKofE1Ab7EQUHpSjj1T%2Fn8UlUyT1n%2BYNl0cgIkP7YVFdbSmcyamjZrPvH6YXnU5r0oJPqPLdbyvr2X9tqE2AO894i8eu9IOL3dsdIUM2x2UpXD9Q4ir%2BENdykw3fZ0J9HIEfW1ZjfZkRQ%2BvS%2BQDSG5YZaH8GgT%2F55Xrp49KsMwmU0dUgCz8&X-Amz-Signature=01532f2ad08750423377c878a2c443f7fcd483dfef08dab77317de483cc64cb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTKVKDFT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQHOtGpxu4HaYFoVP9nNdb2%2BoH3J2tSBTv2oe9EayCxAiBg7KgqUNNk2XMd1Dp4D%2FVwbfO2n%2FA3zC9PJLEh%2FO2hyyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXjoeJ7VygJQ6hgCKtwDOORu5V835m%2B2UumA%2FABbeOHCn3gQyOr9PkT1QJy%2F4HnQw9iuMjMNz3po%2FXI1990Qh7Dnv%2BRsEq4l9Rg8GIug4j9G%2Fgv6s0N6cINLqBBE68neZfx%2Bwk8QzWyvmxpNtWfrrsbbtLlNictNoU6Ze%2FjgBlEJrbDAXDe1b%2FUwJ0XDJRmSzwqSqirSHdzOMF3bXCO%2FfOzRdm84fQ80coFtCOtt5cMl2jtCNtt2rYPLNcLpR6q2edDcwH0MJercCFlLWhLS2JOUcWNDstMvPz7ANuLWaqzBkvsHKldseOD9NZLYcj5ds1Eo9%2FLFrkRzGKpnH8FBfoMwk10HJUdO5XEtpQ4ykZ%2FtcHIF0CHRVdEiu1%2BtFHjMrwfz5IupHfDW5lA343BX%2FKrikyyyGCJeAYkzawxvY0s775a28BQuroCt0EqZjDORD0gHBfR5mwYJccW5vX8dAh%2BMpIkz9OBBApaRlqx4BIBHmr5mWeSo4D5FWgvPCBfRvQ9vozNhCIQnQzC3%2B%2FMeuc1lD%2FaqjKlCItGABSb30XskDwUzTU20NLvZ7hbfmrC%2FfTq%2BdQcgYG01FJLf8HvDTwYWep5zwGlu68O6DVmYyWgktvsvMeaissk3OkvCj5lwr0sGBAgwNcNZnRowt%2FqzxAY6pgHrtCcESHw2gdD5qABuc0e66XCskCzoGLKrc2jBo3%2BXeXKofE1Ab7EQUHpSjj1T%2Fn8UlUyT1n%2BYNl0cgIkP7YVFdbSmcyamjZrPvH6YXnU5r0oJPqPLdbyvr2X9tqE2AO894i8eu9IOL3dsdIUM2x2UpXD9Q4ir%2BENdykw3fZ0J9HIEfW1ZjfZkRQ%2BvS%2BQDSG5YZaH8GgT%2F55Xrp49KsMwmU0dUgCz8&X-Amz-Signature=810a55255a975d99f18ea9d5c00dfa4ab4f8fc85fddefa41949eb9ca993fca78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTKVKDFT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQHOtGpxu4HaYFoVP9nNdb2%2BoH3J2tSBTv2oe9EayCxAiBg7KgqUNNk2XMd1Dp4D%2FVwbfO2n%2FA3zC9PJLEh%2FO2hyyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXjoeJ7VygJQ6hgCKtwDOORu5V835m%2B2UumA%2FABbeOHCn3gQyOr9PkT1QJy%2F4HnQw9iuMjMNz3po%2FXI1990Qh7Dnv%2BRsEq4l9Rg8GIug4j9G%2Fgv6s0N6cINLqBBE68neZfx%2Bwk8QzWyvmxpNtWfrrsbbtLlNictNoU6Ze%2FjgBlEJrbDAXDe1b%2FUwJ0XDJRmSzwqSqirSHdzOMF3bXCO%2FfOzRdm84fQ80coFtCOtt5cMl2jtCNtt2rYPLNcLpR6q2edDcwH0MJercCFlLWhLS2JOUcWNDstMvPz7ANuLWaqzBkvsHKldseOD9NZLYcj5ds1Eo9%2FLFrkRzGKpnH8FBfoMwk10HJUdO5XEtpQ4ykZ%2FtcHIF0CHRVdEiu1%2BtFHjMrwfz5IupHfDW5lA343BX%2FKrikyyyGCJeAYkzawxvY0s775a28BQuroCt0EqZjDORD0gHBfR5mwYJccW5vX8dAh%2BMpIkz9OBBApaRlqx4BIBHmr5mWeSo4D5FWgvPCBfRvQ9vozNhCIQnQzC3%2B%2FMeuc1lD%2FaqjKlCItGABSb30XskDwUzTU20NLvZ7hbfmrC%2FfTq%2BdQcgYG01FJLf8HvDTwYWep5zwGlu68O6DVmYyWgktvsvMeaissk3OkvCj5lwr0sGBAgwNcNZnRowt%2FqzxAY6pgHrtCcESHw2gdD5qABuc0e66XCskCzoGLKrc2jBo3%2BXeXKofE1Ab7EQUHpSjj1T%2Fn8UlUyT1n%2BYNl0cgIkP7YVFdbSmcyamjZrPvH6YXnU5r0oJPqPLdbyvr2X9tqE2AO894i8eu9IOL3dsdIUM2x2UpXD9Q4ir%2BENdykw3fZ0J9HIEfW1ZjfZkRQ%2BvS%2BQDSG5YZaH8GgT%2F55Xrp49KsMwmU0dUgCz8&X-Amz-Signature=09e2f1d73cf8083314668bf99b511e67d32c848176f38e927cd16e1b6e47131f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTKVKDFT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQHOtGpxu4HaYFoVP9nNdb2%2BoH3J2tSBTv2oe9EayCxAiBg7KgqUNNk2XMd1Dp4D%2FVwbfO2n%2FA3zC9PJLEh%2FO2hyyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXjoeJ7VygJQ6hgCKtwDOORu5V835m%2B2UumA%2FABbeOHCn3gQyOr9PkT1QJy%2F4HnQw9iuMjMNz3po%2FXI1990Qh7Dnv%2BRsEq4l9Rg8GIug4j9G%2Fgv6s0N6cINLqBBE68neZfx%2Bwk8QzWyvmxpNtWfrrsbbtLlNictNoU6Ze%2FjgBlEJrbDAXDe1b%2FUwJ0XDJRmSzwqSqirSHdzOMF3bXCO%2FfOzRdm84fQ80coFtCOtt5cMl2jtCNtt2rYPLNcLpR6q2edDcwH0MJercCFlLWhLS2JOUcWNDstMvPz7ANuLWaqzBkvsHKldseOD9NZLYcj5ds1Eo9%2FLFrkRzGKpnH8FBfoMwk10HJUdO5XEtpQ4ykZ%2FtcHIF0CHRVdEiu1%2BtFHjMrwfz5IupHfDW5lA343BX%2FKrikyyyGCJeAYkzawxvY0s775a28BQuroCt0EqZjDORD0gHBfR5mwYJccW5vX8dAh%2BMpIkz9OBBApaRlqx4BIBHmr5mWeSo4D5FWgvPCBfRvQ9vozNhCIQnQzC3%2B%2FMeuc1lD%2FaqjKlCItGABSb30XskDwUzTU20NLvZ7hbfmrC%2FfTq%2BdQcgYG01FJLf8HvDTwYWep5zwGlu68O6DVmYyWgktvsvMeaissk3OkvCj5lwr0sGBAgwNcNZnRowt%2FqzxAY6pgHrtCcESHw2gdD5qABuc0e66XCskCzoGLKrc2jBo3%2BXeXKofE1Ab7EQUHpSjj1T%2Fn8UlUyT1n%2BYNl0cgIkP7YVFdbSmcyamjZrPvH6YXnU5r0oJPqPLdbyvr2X9tqE2AO894i8eu9IOL3dsdIUM2x2UpXD9Q4ir%2BENdykw3fZ0J9HIEfW1ZjfZkRQ%2BvS%2BQDSG5YZaH8GgT%2F55Xrp49KsMwmU0dUgCz8&X-Amz-Signature=aeb37c947961d12ebdc50241b5f6105fdf114eef2447550f79300e01e55ed3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTKVKDFT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQHOtGpxu4HaYFoVP9nNdb2%2BoH3J2tSBTv2oe9EayCxAiBg7KgqUNNk2XMd1Dp4D%2FVwbfO2n%2FA3zC9PJLEh%2FO2hyyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXjoeJ7VygJQ6hgCKtwDOORu5V835m%2B2UumA%2FABbeOHCn3gQyOr9PkT1QJy%2F4HnQw9iuMjMNz3po%2FXI1990Qh7Dnv%2BRsEq4l9Rg8GIug4j9G%2Fgv6s0N6cINLqBBE68neZfx%2Bwk8QzWyvmxpNtWfrrsbbtLlNictNoU6Ze%2FjgBlEJrbDAXDe1b%2FUwJ0XDJRmSzwqSqirSHdzOMF3bXCO%2FfOzRdm84fQ80coFtCOtt5cMl2jtCNtt2rYPLNcLpR6q2edDcwH0MJercCFlLWhLS2JOUcWNDstMvPz7ANuLWaqzBkvsHKldseOD9NZLYcj5ds1Eo9%2FLFrkRzGKpnH8FBfoMwk10HJUdO5XEtpQ4ykZ%2FtcHIF0CHRVdEiu1%2BtFHjMrwfz5IupHfDW5lA343BX%2FKrikyyyGCJeAYkzawxvY0s775a28BQuroCt0EqZjDORD0gHBfR5mwYJccW5vX8dAh%2BMpIkz9OBBApaRlqx4BIBHmr5mWeSo4D5FWgvPCBfRvQ9vozNhCIQnQzC3%2B%2FMeuc1lD%2FaqjKlCItGABSb30XskDwUzTU20NLvZ7hbfmrC%2FfTq%2BdQcgYG01FJLf8HvDTwYWep5zwGlu68O6DVmYyWgktvsvMeaissk3OkvCj5lwr0sGBAgwNcNZnRowt%2FqzxAY6pgHrtCcESHw2gdD5qABuc0e66XCskCzoGLKrc2jBo3%2BXeXKofE1Ab7EQUHpSjj1T%2Fn8UlUyT1n%2BYNl0cgIkP7YVFdbSmcyamjZrPvH6YXnU5r0oJPqPLdbyvr2X9tqE2AO894i8eu9IOL3dsdIUM2x2UpXD9Q4ir%2BENdykw3fZ0J9HIEfW1ZjfZkRQ%2BvS%2BQDSG5YZaH8GgT%2F55Xrp49KsMwmU0dUgCz8&X-Amz-Signature=eb3611490cf005ca17fd056216fa9e187a5396f22df5707c3919a0e7351f44fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTKVKDFT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQHOtGpxu4HaYFoVP9nNdb2%2BoH3J2tSBTv2oe9EayCxAiBg7KgqUNNk2XMd1Dp4D%2FVwbfO2n%2FA3zC9PJLEh%2FO2hyyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXjoeJ7VygJQ6hgCKtwDOORu5V835m%2B2UumA%2FABbeOHCn3gQyOr9PkT1QJy%2F4HnQw9iuMjMNz3po%2FXI1990Qh7Dnv%2BRsEq4l9Rg8GIug4j9G%2Fgv6s0N6cINLqBBE68neZfx%2Bwk8QzWyvmxpNtWfrrsbbtLlNictNoU6Ze%2FjgBlEJrbDAXDe1b%2FUwJ0XDJRmSzwqSqirSHdzOMF3bXCO%2FfOzRdm84fQ80coFtCOtt5cMl2jtCNtt2rYPLNcLpR6q2edDcwH0MJercCFlLWhLS2JOUcWNDstMvPz7ANuLWaqzBkvsHKldseOD9NZLYcj5ds1Eo9%2FLFrkRzGKpnH8FBfoMwk10HJUdO5XEtpQ4ykZ%2FtcHIF0CHRVdEiu1%2BtFHjMrwfz5IupHfDW5lA343BX%2FKrikyyyGCJeAYkzawxvY0s775a28BQuroCt0EqZjDORD0gHBfR5mwYJccW5vX8dAh%2BMpIkz9OBBApaRlqx4BIBHmr5mWeSo4D5FWgvPCBfRvQ9vozNhCIQnQzC3%2B%2FMeuc1lD%2FaqjKlCItGABSb30XskDwUzTU20NLvZ7hbfmrC%2FfTq%2BdQcgYG01FJLf8HvDTwYWep5zwGlu68O6DVmYyWgktvsvMeaissk3OkvCj5lwr0sGBAgwNcNZnRowt%2FqzxAY6pgHrtCcESHw2gdD5qABuc0e66XCskCzoGLKrc2jBo3%2BXeXKofE1Ab7EQUHpSjj1T%2Fn8UlUyT1n%2BYNl0cgIkP7YVFdbSmcyamjZrPvH6YXnU5r0oJPqPLdbyvr2X9tqE2AO894i8eu9IOL3dsdIUM2x2UpXD9Q4ir%2BENdykw3fZ0J9HIEfW1ZjfZkRQ%2BvS%2BQDSG5YZaH8GgT%2F55Xrp49KsMwmU0dUgCz8&X-Amz-Signature=bbe3f4acd4232471d569ea93c9e3530afbbe2fdb50fa43b31a5003081aaeed42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTKVKDFT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQHOtGpxu4HaYFoVP9nNdb2%2BoH3J2tSBTv2oe9EayCxAiBg7KgqUNNk2XMd1Dp4D%2FVwbfO2n%2FA3zC9PJLEh%2FO2hyyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXjoeJ7VygJQ6hgCKtwDOORu5V835m%2B2UumA%2FABbeOHCn3gQyOr9PkT1QJy%2F4HnQw9iuMjMNz3po%2FXI1990Qh7Dnv%2BRsEq4l9Rg8GIug4j9G%2Fgv6s0N6cINLqBBE68neZfx%2Bwk8QzWyvmxpNtWfrrsbbtLlNictNoU6Ze%2FjgBlEJrbDAXDe1b%2FUwJ0XDJRmSzwqSqirSHdzOMF3bXCO%2FfOzRdm84fQ80coFtCOtt5cMl2jtCNtt2rYPLNcLpR6q2edDcwH0MJercCFlLWhLS2JOUcWNDstMvPz7ANuLWaqzBkvsHKldseOD9NZLYcj5ds1Eo9%2FLFrkRzGKpnH8FBfoMwk10HJUdO5XEtpQ4ykZ%2FtcHIF0CHRVdEiu1%2BtFHjMrwfz5IupHfDW5lA343BX%2FKrikyyyGCJeAYkzawxvY0s775a28BQuroCt0EqZjDORD0gHBfR5mwYJccW5vX8dAh%2BMpIkz9OBBApaRlqx4BIBHmr5mWeSo4D5FWgvPCBfRvQ9vozNhCIQnQzC3%2B%2FMeuc1lD%2FaqjKlCItGABSb30XskDwUzTU20NLvZ7hbfmrC%2FfTq%2BdQcgYG01FJLf8HvDTwYWep5zwGlu68O6DVmYyWgktvsvMeaissk3OkvCj5lwr0sGBAgwNcNZnRowt%2FqzxAY6pgHrtCcESHw2gdD5qABuc0e66XCskCzoGLKrc2jBo3%2BXeXKofE1Ab7EQUHpSjj1T%2Fn8UlUyT1n%2BYNl0cgIkP7YVFdbSmcyamjZrPvH6YXnU5r0oJPqPLdbyvr2X9tqE2AO894i8eu9IOL3dsdIUM2x2UpXD9Q4ir%2BENdykw3fZ0J9HIEfW1ZjfZkRQ%2BvS%2BQDSG5YZaH8GgT%2F55Xrp49KsMwmU0dUgCz8&X-Amz-Signature=eb54d20040dba504a7f4bf69849f0bc97a86bc69ea1d3fafddb4617a8a90978d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTKVKDFT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQHOtGpxu4HaYFoVP9nNdb2%2BoH3J2tSBTv2oe9EayCxAiBg7KgqUNNk2XMd1Dp4D%2FVwbfO2n%2FA3zC9PJLEh%2FO2hyyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXjoeJ7VygJQ6hgCKtwDOORu5V835m%2B2UumA%2FABbeOHCn3gQyOr9PkT1QJy%2F4HnQw9iuMjMNz3po%2FXI1990Qh7Dnv%2BRsEq4l9Rg8GIug4j9G%2Fgv6s0N6cINLqBBE68neZfx%2Bwk8QzWyvmxpNtWfrrsbbtLlNictNoU6Ze%2FjgBlEJrbDAXDe1b%2FUwJ0XDJRmSzwqSqirSHdzOMF3bXCO%2FfOzRdm84fQ80coFtCOtt5cMl2jtCNtt2rYPLNcLpR6q2edDcwH0MJercCFlLWhLS2JOUcWNDstMvPz7ANuLWaqzBkvsHKldseOD9NZLYcj5ds1Eo9%2FLFrkRzGKpnH8FBfoMwk10HJUdO5XEtpQ4ykZ%2FtcHIF0CHRVdEiu1%2BtFHjMrwfz5IupHfDW5lA343BX%2FKrikyyyGCJeAYkzawxvY0s775a28BQuroCt0EqZjDORD0gHBfR5mwYJccW5vX8dAh%2BMpIkz9OBBApaRlqx4BIBHmr5mWeSo4D5FWgvPCBfRvQ9vozNhCIQnQzC3%2B%2FMeuc1lD%2FaqjKlCItGABSb30XskDwUzTU20NLvZ7hbfmrC%2FfTq%2BdQcgYG01FJLf8HvDTwYWep5zwGlu68O6DVmYyWgktvsvMeaissk3OkvCj5lwr0sGBAgwNcNZnRowt%2FqzxAY6pgHrtCcESHw2gdD5qABuc0e66XCskCzoGLKrc2jBo3%2BXeXKofE1Ab7EQUHpSjj1T%2Fn8UlUyT1n%2BYNl0cgIkP7YVFdbSmcyamjZrPvH6YXnU5r0oJPqPLdbyvr2X9tqE2AO894i8eu9IOL3dsdIUM2x2UpXD9Q4ir%2BENdykw3fZ0J9HIEfW1ZjfZkRQ%2BvS%2BQDSG5YZaH8GgT%2F55Xrp49KsMwmU0dUgCz8&X-Amz-Signature=95fdef9dfb8533eb4ba67817502ea2e0b565a5210ba94446041b8f4ca9acf4d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTKVKDFT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQHOtGpxu4HaYFoVP9nNdb2%2BoH3J2tSBTv2oe9EayCxAiBg7KgqUNNk2XMd1Dp4D%2FVwbfO2n%2FA3zC9PJLEh%2FO2hyyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXjoeJ7VygJQ6hgCKtwDOORu5V835m%2B2UumA%2FABbeOHCn3gQyOr9PkT1QJy%2F4HnQw9iuMjMNz3po%2FXI1990Qh7Dnv%2BRsEq4l9Rg8GIug4j9G%2Fgv6s0N6cINLqBBE68neZfx%2Bwk8QzWyvmxpNtWfrrsbbtLlNictNoU6Ze%2FjgBlEJrbDAXDe1b%2FUwJ0XDJRmSzwqSqirSHdzOMF3bXCO%2FfOzRdm84fQ80coFtCOtt5cMl2jtCNtt2rYPLNcLpR6q2edDcwH0MJercCFlLWhLS2JOUcWNDstMvPz7ANuLWaqzBkvsHKldseOD9NZLYcj5ds1Eo9%2FLFrkRzGKpnH8FBfoMwk10HJUdO5XEtpQ4ykZ%2FtcHIF0CHRVdEiu1%2BtFHjMrwfz5IupHfDW5lA343BX%2FKrikyyyGCJeAYkzawxvY0s775a28BQuroCt0EqZjDORD0gHBfR5mwYJccW5vX8dAh%2BMpIkz9OBBApaRlqx4BIBHmr5mWeSo4D5FWgvPCBfRvQ9vozNhCIQnQzC3%2B%2FMeuc1lD%2FaqjKlCItGABSb30XskDwUzTU20NLvZ7hbfmrC%2FfTq%2BdQcgYG01FJLf8HvDTwYWep5zwGlu68O6DVmYyWgktvsvMeaissk3OkvCj5lwr0sGBAgwNcNZnRowt%2FqzxAY6pgHrtCcESHw2gdD5qABuc0e66XCskCzoGLKrc2jBo3%2BXeXKofE1Ab7EQUHpSjj1T%2Fn8UlUyT1n%2BYNl0cgIkP7YVFdbSmcyamjZrPvH6YXnU5r0oJPqPLdbyvr2X9tqE2AO894i8eu9IOL3dsdIUM2x2UpXD9Q4ir%2BENdykw3fZ0J9HIEfW1ZjfZkRQ%2BvS%2BQDSG5YZaH8GgT%2F55Xrp49KsMwmU0dUgCz8&X-Amz-Signature=e79a1bcdb48290245dceb7ab9195a8125a02234c1c37afc913c6a455356dd0dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTKVKDFT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQHOtGpxu4HaYFoVP9nNdb2%2BoH3J2tSBTv2oe9EayCxAiBg7KgqUNNk2XMd1Dp4D%2FVwbfO2n%2FA3zC9PJLEh%2FO2hyyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzXjoeJ7VygJQ6hgCKtwDOORu5V835m%2B2UumA%2FABbeOHCn3gQyOr9PkT1QJy%2F4HnQw9iuMjMNz3po%2FXI1990Qh7Dnv%2BRsEq4l9Rg8GIug4j9G%2Fgv6s0N6cINLqBBE68neZfx%2Bwk8QzWyvmxpNtWfrrsbbtLlNictNoU6Ze%2FjgBlEJrbDAXDe1b%2FUwJ0XDJRmSzwqSqirSHdzOMF3bXCO%2FfOzRdm84fQ80coFtCOtt5cMl2jtCNtt2rYPLNcLpR6q2edDcwH0MJercCFlLWhLS2JOUcWNDstMvPz7ANuLWaqzBkvsHKldseOD9NZLYcj5ds1Eo9%2FLFrkRzGKpnH8FBfoMwk10HJUdO5XEtpQ4ykZ%2FtcHIF0CHRVdEiu1%2BtFHjMrwfz5IupHfDW5lA343BX%2FKrikyyyGCJeAYkzawxvY0s775a28BQuroCt0EqZjDORD0gHBfR5mwYJccW5vX8dAh%2BMpIkz9OBBApaRlqx4BIBHmr5mWeSo4D5FWgvPCBfRvQ9vozNhCIQnQzC3%2B%2FMeuc1lD%2FaqjKlCItGABSb30XskDwUzTU20NLvZ7hbfmrC%2FfTq%2BdQcgYG01FJLf8HvDTwYWep5zwGlu68O6DVmYyWgktvsvMeaissk3OkvCj5lwr0sGBAgwNcNZnRowt%2FqzxAY6pgHrtCcESHw2gdD5qABuc0e66XCskCzoGLKrc2jBo3%2BXeXKofE1Ab7EQUHpSjj1T%2Fn8UlUyT1n%2BYNl0cgIkP7YVFdbSmcyamjZrPvH6YXnU5r0oJPqPLdbyvr2X9tqE2AO894i8eu9IOL3dsdIUM2x2UpXD9Q4ir%2BENdykw3fZ0J9HIEfW1ZjfZkRQ%2BvS%2BQDSG5YZaH8GgT%2F55Xrp49KsMwmU0dUgCz8&X-Amz-Signature=8ae4d66dc2119eae6dedd8982a3e7991a0796ce047d097a00792566fe8a7a850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
