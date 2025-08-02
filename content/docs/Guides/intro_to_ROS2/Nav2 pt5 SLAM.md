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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2L7ASH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FkRuaT5nNUTz6htbmDFcNQV2lXlrMO3Q8WNa3tgTZkQIgVlf4YChcv20eExSTq9Lo%2BJytJE%2BtSwBbQJzS%2Bo0w2iUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDN1g6SFyC40rh5OL5ircAxO%2F6Z1CGU%2FmDx2CYEZcxoaifdP%2BD1ZaXpW3eiFr3udrSCFRtAyC8ySH6UsG7q8WAcmtQPvRxVP8TloWHvomTwPj8V%2FhPzlAlQzMJyEg2X9p58LxrZE%2F0oNK7DlW7xMVo%2FdlEu80CNESEKhVn4Et%2BYqsSAtUH5V%2FDH0Bxh7togu2uAK0d%2BQYbXNxKydtyDRASFFKUYsbeAMcVDIho%2FxL0M1CZyLPh4p1HmAfreANsZffZG3Hs05FEhJnO5ID2TSZJmN6XCuZVY3Fudf1hFKxKY5HHI9dQCGhltFCV9zUGuQEowHYtWK3QJwC22uZLaITOlS5O%2BrAJ77iyoasEl8RCZQIpyHn1rgEQaIBqmeLMw7PGHzrBnMRc2FbttsOnKRJxnqoTdVxM4Bjf12aFkC5HXKqWsRUcYUHTrwfGHkcBPWA767wxBG9fIg2J5vijuICIbcenhvzL9VlssRQHAoq9nkShTzv5hht%2BI5j8KA9zyNMq9CvnIEna%2BGt5eG%2FBy%2F6VRhnnLE62Txy2BW6CvCeSpRbcAv2Xfb3Jj5qLymqNwcZrefy1Y1nboXIcmRkA3M2rS%2Fldrxlcf%2FaY8ju6npm0%2BZYrgt5OT4IacBZVc%2Fqt9S6zaPcZOI%2Fx5JMjQ8VMJDwtsQGOqUBJkD%2BfbwFbpw%2B7oVlQASjZSt6URtRKcWRQ5pJBK5FTwnnG2EdEyZJJ6XJjOGgHgp1B0M4GR%2FHJisYMXlzo1tMs89m41GgTGSBUYuASYjdiaFgjatGWlcPgottr1rgRH977qG0yXRnvfnUpPEFuFPL3SUmRnbam0kA7ZT06olcYxLSPShdhQe0Vs6Z7I61I2qHVD0WzK374YIZ0gHV9ylHSi6z%2B9EG&X-Amz-Signature=5043c763a8af081500819c1f2f0d0283c0e8f9f64e8d11f38931b4734679fe65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2L7ASH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FkRuaT5nNUTz6htbmDFcNQV2lXlrMO3Q8WNa3tgTZkQIgVlf4YChcv20eExSTq9Lo%2BJytJE%2BtSwBbQJzS%2Bo0w2iUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDN1g6SFyC40rh5OL5ircAxO%2F6Z1CGU%2FmDx2CYEZcxoaifdP%2BD1ZaXpW3eiFr3udrSCFRtAyC8ySH6UsG7q8WAcmtQPvRxVP8TloWHvomTwPj8V%2FhPzlAlQzMJyEg2X9p58LxrZE%2F0oNK7DlW7xMVo%2FdlEu80CNESEKhVn4Et%2BYqsSAtUH5V%2FDH0Bxh7togu2uAK0d%2BQYbXNxKydtyDRASFFKUYsbeAMcVDIho%2FxL0M1CZyLPh4p1HmAfreANsZffZG3Hs05FEhJnO5ID2TSZJmN6XCuZVY3Fudf1hFKxKY5HHI9dQCGhltFCV9zUGuQEowHYtWK3QJwC22uZLaITOlS5O%2BrAJ77iyoasEl8RCZQIpyHn1rgEQaIBqmeLMw7PGHzrBnMRc2FbttsOnKRJxnqoTdVxM4Bjf12aFkC5HXKqWsRUcYUHTrwfGHkcBPWA767wxBG9fIg2J5vijuICIbcenhvzL9VlssRQHAoq9nkShTzv5hht%2BI5j8KA9zyNMq9CvnIEna%2BGt5eG%2FBy%2F6VRhnnLE62Txy2BW6CvCeSpRbcAv2Xfb3Jj5qLymqNwcZrefy1Y1nboXIcmRkA3M2rS%2Fldrxlcf%2FaY8ju6npm0%2BZYrgt5OT4IacBZVc%2Fqt9S6zaPcZOI%2Fx5JMjQ8VMJDwtsQGOqUBJkD%2BfbwFbpw%2B7oVlQASjZSt6URtRKcWRQ5pJBK5FTwnnG2EdEyZJJ6XJjOGgHgp1B0M4GR%2FHJisYMXlzo1tMs89m41GgTGSBUYuASYjdiaFgjatGWlcPgottr1rgRH977qG0yXRnvfnUpPEFuFPL3SUmRnbam0kA7ZT06olcYxLSPShdhQe0Vs6Z7I61I2qHVD0WzK374YIZ0gHV9ylHSi6z%2B9EG&X-Amz-Signature=8e2321944ba87dd2666eea2072802daf35ab6fedf7a34bc6c7768689b2a990f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2L7ASH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FkRuaT5nNUTz6htbmDFcNQV2lXlrMO3Q8WNa3tgTZkQIgVlf4YChcv20eExSTq9Lo%2BJytJE%2BtSwBbQJzS%2Bo0w2iUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDN1g6SFyC40rh5OL5ircAxO%2F6Z1CGU%2FmDx2CYEZcxoaifdP%2BD1ZaXpW3eiFr3udrSCFRtAyC8ySH6UsG7q8WAcmtQPvRxVP8TloWHvomTwPj8V%2FhPzlAlQzMJyEg2X9p58LxrZE%2F0oNK7DlW7xMVo%2FdlEu80CNESEKhVn4Et%2BYqsSAtUH5V%2FDH0Bxh7togu2uAK0d%2BQYbXNxKydtyDRASFFKUYsbeAMcVDIho%2FxL0M1CZyLPh4p1HmAfreANsZffZG3Hs05FEhJnO5ID2TSZJmN6XCuZVY3Fudf1hFKxKY5HHI9dQCGhltFCV9zUGuQEowHYtWK3QJwC22uZLaITOlS5O%2BrAJ77iyoasEl8RCZQIpyHn1rgEQaIBqmeLMw7PGHzrBnMRc2FbttsOnKRJxnqoTdVxM4Bjf12aFkC5HXKqWsRUcYUHTrwfGHkcBPWA767wxBG9fIg2J5vijuICIbcenhvzL9VlssRQHAoq9nkShTzv5hht%2BI5j8KA9zyNMq9CvnIEna%2BGt5eG%2FBy%2F6VRhnnLE62Txy2BW6CvCeSpRbcAv2Xfb3Jj5qLymqNwcZrefy1Y1nboXIcmRkA3M2rS%2Fldrxlcf%2FaY8ju6npm0%2BZYrgt5OT4IacBZVc%2Fqt9S6zaPcZOI%2Fx5JMjQ8VMJDwtsQGOqUBJkD%2BfbwFbpw%2B7oVlQASjZSt6URtRKcWRQ5pJBK5FTwnnG2EdEyZJJ6XJjOGgHgp1B0M4GR%2FHJisYMXlzo1tMs89m41GgTGSBUYuASYjdiaFgjatGWlcPgottr1rgRH977qG0yXRnvfnUpPEFuFPL3SUmRnbam0kA7ZT06olcYxLSPShdhQe0Vs6Z7I61I2qHVD0WzK374YIZ0gHV9ylHSi6z%2B9EG&X-Amz-Signature=414c6011640b61c9115d67dda2e18fe2b4b79895be5b66133eaae1152173a4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2L7ASH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FkRuaT5nNUTz6htbmDFcNQV2lXlrMO3Q8WNa3tgTZkQIgVlf4YChcv20eExSTq9Lo%2BJytJE%2BtSwBbQJzS%2Bo0w2iUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDN1g6SFyC40rh5OL5ircAxO%2F6Z1CGU%2FmDx2CYEZcxoaifdP%2BD1ZaXpW3eiFr3udrSCFRtAyC8ySH6UsG7q8WAcmtQPvRxVP8TloWHvomTwPj8V%2FhPzlAlQzMJyEg2X9p58LxrZE%2F0oNK7DlW7xMVo%2FdlEu80CNESEKhVn4Et%2BYqsSAtUH5V%2FDH0Bxh7togu2uAK0d%2BQYbXNxKydtyDRASFFKUYsbeAMcVDIho%2FxL0M1CZyLPh4p1HmAfreANsZffZG3Hs05FEhJnO5ID2TSZJmN6XCuZVY3Fudf1hFKxKY5HHI9dQCGhltFCV9zUGuQEowHYtWK3QJwC22uZLaITOlS5O%2BrAJ77iyoasEl8RCZQIpyHn1rgEQaIBqmeLMw7PGHzrBnMRc2FbttsOnKRJxnqoTdVxM4Bjf12aFkC5HXKqWsRUcYUHTrwfGHkcBPWA767wxBG9fIg2J5vijuICIbcenhvzL9VlssRQHAoq9nkShTzv5hht%2BI5j8KA9zyNMq9CvnIEna%2BGt5eG%2FBy%2F6VRhnnLE62Txy2BW6CvCeSpRbcAv2Xfb3Jj5qLymqNwcZrefy1Y1nboXIcmRkA3M2rS%2Fldrxlcf%2FaY8ju6npm0%2BZYrgt5OT4IacBZVc%2Fqt9S6zaPcZOI%2Fx5JMjQ8VMJDwtsQGOqUBJkD%2BfbwFbpw%2B7oVlQASjZSt6URtRKcWRQ5pJBK5FTwnnG2EdEyZJJ6XJjOGgHgp1B0M4GR%2FHJisYMXlzo1tMs89m41GgTGSBUYuASYjdiaFgjatGWlcPgottr1rgRH977qG0yXRnvfnUpPEFuFPL3SUmRnbam0kA7ZT06olcYxLSPShdhQe0Vs6Z7I61I2qHVD0WzK374YIZ0gHV9ylHSi6z%2B9EG&X-Amz-Signature=74cdeead9c221ac212096b45aa9438c7c44add56d45e1a0135ab9e57cb44d407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2L7ASH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FkRuaT5nNUTz6htbmDFcNQV2lXlrMO3Q8WNa3tgTZkQIgVlf4YChcv20eExSTq9Lo%2BJytJE%2BtSwBbQJzS%2Bo0w2iUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDN1g6SFyC40rh5OL5ircAxO%2F6Z1CGU%2FmDx2CYEZcxoaifdP%2BD1ZaXpW3eiFr3udrSCFRtAyC8ySH6UsG7q8WAcmtQPvRxVP8TloWHvomTwPj8V%2FhPzlAlQzMJyEg2X9p58LxrZE%2F0oNK7DlW7xMVo%2FdlEu80CNESEKhVn4Et%2BYqsSAtUH5V%2FDH0Bxh7togu2uAK0d%2BQYbXNxKydtyDRASFFKUYsbeAMcVDIho%2FxL0M1CZyLPh4p1HmAfreANsZffZG3Hs05FEhJnO5ID2TSZJmN6XCuZVY3Fudf1hFKxKY5HHI9dQCGhltFCV9zUGuQEowHYtWK3QJwC22uZLaITOlS5O%2BrAJ77iyoasEl8RCZQIpyHn1rgEQaIBqmeLMw7PGHzrBnMRc2FbttsOnKRJxnqoTdVxM4Bjf12aFkC5HXKqWsRUcYUHTrwfGHkcBPWA767wxBG9fIg2J5vijuICIbcenhvzL9VlssRQHAoq9nkShTzv5hht%2BI5j8KA9zyNMq9CvnIEna%2BGt5eG%2FBy%2F6VRhnnLE62Txy2BW6CvCeSpRbcAv2Xfb3Jj5qLymqNwcZrefy1Y1nboXIcmRkA3M2rS%2Fldrxlcf%2FaY8ju6npm0%2BZYrgt5OT4IacBZVc%2Fqt9S6zaPcZOI%2Fx5JMjQ8VMJDwtsQGOqUBJkD%2BfbwFbpw%2B7oVlQASjZSt6URtRKcWRQ5pJBK5FTwnnG2EdEyZJJ6XJjOGgHgp1B0M4GR%2FHJisYMXlzo1tMs89m41GgTGSBUYuASYjdiaFgjatGWlcPgottr1rgRH977qG0yXRnvfnUpPEFuFPL3SUmRnbam0kA7ZT06olcYxLSPShdhQe0Vs6Z7I61I2qHVD0WzK374YIZ0gHV9ylHSi6z%2B9EG&X-Amz-Signature=6dc6a9e8b304e28a06b6b1625aac3deba15cccedb78b42596c418be2570b34ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2L7ASH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FkRuaT5nNUTz6htbmDFcNQV2lXlrMO3Q8WNa3tgTZkQIgVlf4YChcv20eExSTq9Lo%2BJytJE%2BtSwBbQJzS%2Bo0w2iUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDN1g6SFyC40rh5OL5ircAxO%2F6Z1CGU%2FmDx2CYEZcxoaifdP%2BD1ZaXpW3eiFr3udrSCFRtAyC8ySH6UsG7q8WAcmtQPvRxVP8TloWHvomTwPj8V%2FhPzlAlQzMJyEg2X9p58LxrZE%2F0oNK7DlW7xMVo%2FdlEu80CNESEKhVn4Et%2BYqsSAtUH5V%2FDH0Bxh7togu2uAK0d%2BQYbXNxKydtyDRASFFKUYsbeAMcVDIho%2FxL0M1CZyLPh4p1HmAfreANsZffZG3Hs05FEhJnO5ID2TSZJmN6XCuZVY3Fudf1hFKxKY5HHI9dQCGhltFCV9zUGuQEowHYtWK3QJwC22uZLaITOlS5O%2BrAJ77iyoasEl8RCZQIpyHn1rgEQaIBqmeLMw7PGHzrBnMRc2FbttsOnKRJxnqoTdVxM4Bjf12aFkC5HXKqWsRUcYUHTrwfGHkcBPWA767wxBG9fIg2J5vijuICIbcenhvzL9VlssRQHAoq9nkShTzv5hht%2BI5j8KA9zyNMq9CvnIEna%2BGt5eG%2FBy%2F6VRhnnLE62Txy2BW6CvCeSpRbcAv2Xfb3Jj5qLymqNwcZrefy1Y1nboXIcmRkA3M2rS%2Fldrxlcf%2FaY8ju6npm0%2BZYrgt5OT4IacBZVc%2Fqt9S6zaPcZOI%2Fx5JMjQ8VMJDwtsQGOqUBJkD%2BfbwFbpw%2B7oVlQASjZSt6URtRKcWRQ5pJBK5FTwnnG2EdEyZJJ6XJjOGgHgp1B0M4GR%2FHJisYMXlzo1tMs89m41GgTGSBUYuASYjdiaFgjatGWlcPgottr1rgRH977qG0yXRnvfnUpPEFuFPL3SUmRnbam0kA7ZT06olcYxLSPShdhQe0Vs6Z7I61I2qHVD0WzK374YIZ0gHV9ylHSi6z%2B9EG&X-Amz-Signature=66e18c83505313d2b6a45b559f20a2cd0336ee9e5e361d8047d2583e8e8da994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2L7ASH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FkRuaT5nNUTz6htbmDFcNQV2lXlrMO3Q8WNa3tgTZkQIgVlf4YChcv20eExSTq9Lo%2BJytJE%2BtSwBbQJzS%2Bo0w2iUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDN1g6SFyC40rh5OL5ircAxO%2F6Z1CGU%2FmDx2CYEZcxoaifdP%2BD1ZaXpW3eiFr3udrSCFRtAyC8ySH6UsG7q8WAcmtQPvRxVP8TloWHvomTwPj8V%2FhPzlAlQzMJyEg2X9p58LxrZE%2F0oNK7DlW7xMVo%2FdlEu80CNESEKhVn4Et%2BYqsSAtUH5V%2FDH0Bxh7togu2uAK0d%2BQYbXNxKydtyDRASFFKUYsbeAMcVDIho%2FxL0M1CZyLPh4p1HmAfreANsZffZG3Hs05FEhJnO5ID2TSZJmN6XCuZVY3Fudf1hFKxKY5HHI9dQCGhltFCV9zUGuQEowHYtWK3QJwC22uZLaITOlS5O%2BrAJ77iyoasEl8RCZQIpyHn1rgEQaIBqmeLMw7PGHzrBnMRc2FbttsOnKRJxnqoTdVxM4Bjf12aFkC5HXKqWsRUcYUHTrwfGHkcBPWA767wxBG9fIg2J5vijuICIbcenhvzL9VlssRQHAoq9nkShTzv5hht%2BI5j8KA9zyNMq9CvnIEna%2BGt5eG%2FBy%2F6VRhnnLE62Txy2BW6CvCeSpRbcAv2Xfb3Jj5qLymqNwcZrefy1Y1nboXIcmRkA3M2rS%2Fldrxlcf%2FaY8ju6npm0%2BZYrgt5OT4IacBZVc%2Fqt9S6zaPcZOI%2Fx5JMjQ8VMJDwtsQGOqUBJkD%2BfbwFbpw%2B7oVlQASjZSt6URtRKcWRQ5pJBK5FTwnnG2EdEyZJJ6XJjOGgHgp1B0M4GR%2FHJisYMXlzo1tMs89m41GgTGSBUYuASYjdiaFgjatGWlcPgottr1rgRH977qG0yXRnvfnUpPEFuFPL3SUmRnbam0kA7ZT06olcYxLSPShdhQe0Vs6Z7I61I2qHVD0WzK374YIZ0gHV9ylHSi6z%2B9EG&X-Amz-Signature=3708605f3ba89684c202de3eed7a0e25597cef49256bfed850e3f613b2fa6d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2L7ASH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FkRuaT5nNUTz6htbmDFcNQV2lXlrMO3Q8WNa3tgTZkQIgVlf4YChcv20eExSTq9Lo%2BJytJE%2BtSwBbQJzS%2Bo0w2iUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDN1g6SFyC40rh5OL5ircAxO%2F6Z1CGU%2FmDx2CYEZcxoaifdP%2BD1ZaXpW3eiFr3udrSCFRtAyC8ySH6UsG7q8WAcmtQPvRxVP8TloWHvomTwPj8V%2FhPzlAlQzMJyEg2X9p58LxrZE%2F0oNK7DlW7xMVo%2FdlEu80CNESEKhVn4Et%2BYqsSAtUH5V%2FDH0Bxh7togu2uAK0d%2BQYbXNxKydtyDRASFFKUYsbeAMcVDIho%2FxL0M1CZyLPh4p1HmAfreANsZffZG3Hs05FEhJnO5ID2TSZJmN6XCuZVY3Fudf1hFKxKY5HHI9dQCGhltFCV9zUGuQEowHYtWK3QJwC22uZLaITOlS5O%2BrAJ77iyoasEl8RCZQIpyHn1rgEQaIBqmeLMw7PGHzrBnMRc2FbttsOnKRJxnqoTdVxM4Bjf12aFkC5HXKqWsRUcYUHTrwfGHkcBPWA767wxBG9fIg2J5vijuICIbcenhvzL9VlssRQHAoq9nkShTzv5hht%2BI5j8KA9zyNMq9CvnIEna%2BGt5eG%2FBy%2F6VRhnnLE62Txy2BW6CvCeSpRbcAv2Xfb3Jj5qLymqNwcZrefy1Y1nboXIcmRkA3M2rS%2Fldrxlcf%2FaY8ju6npm0%2BZYrgt5OT4IacBZVc%2Fqt9S6zaPcZOI%2Fx5JMjQ8VMJDwtsQGOqUBJkD%2BfbwFbpw%2B7oVlQASjZSt6URtRKcWRQ5pJBK5FTwnnG2EdEyZJJ6XJjOGgHgp1B0M4GR%2FHJisYMXlzo1tMs89m41GgTGSBUYuASYjdiaFgjatGWlcPgottr1rgRH977qG0yXRnvfnUpPEFuFPL3SUmRnbam0kA7ZT06olcYxLSPShdhQe0Vs6Z7I61I2qHVD0WzK374YIZ0gHV9ylHSi6z%2B9EG&X-Amz-Signature=bd29e4435220af23e5e1d0131b23463e62d1db5240868e3ae6cfb281de87e6de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2L7ASH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FkRuaT5nNUTz6htbmDFcNQV2lXlrMO3Q8WNa3tgTZkQIgVlf4YChcv20eExSTq9Lo%2BJytJE%2BtSwBbQJzS%2Bo0w2iUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDN1g6SFyC40rh5OL5ircAxO%2F6Z1CGU%2FmDx2CYEZcxoaifdP%2BD1ZaXpW3eiFr3udrSCFRtAyC8ySH6UsG7q8WAcmtQPvRxVP8TloWHvomTwPj8V%2FhPzlAlQzMJyEg2X9p58LxrZE%2F0oNK7DlW7xMVo%2FdlEu80CNESEKhVn4Et%2BYqsSAtUH5V%2FDH0Bxh7togu2uAK0d%2BQYbXNxKydtyDRASFFKUYsbeAMcVDIho%2FxL0M1CZyLPh4p1HmAfreANsZffZG3Hs05FEhJnO5ID2TSZJmN6XCuZVY3Fudf1hFKxKY5HHI9dQCGhltFCV9zUGuQEowHYtWK3QJwC22uZLaITOlS5O%2BrAJ77iyoasEl8RCZQIpyHn1rgEQaIBqmeLMw7PGHzrBnMRc2FbttsOnKRJxnqoTdVxM4Bjf12aFkC5HXKqWsRUcYUHTrwfGHkcBPWA767wxBG9fIg2J5vijuICIbcenhvzL9VlssRQHAoq9nkShTzv5hht%2BI5j8KA9zyNMq9CvnIEna%2BGt5eG%2FBy%2F6VRhnnLE62Txy2BW6CvCeSpRbcAv2Xfb3Jj5qLymqNwcZrefy1Y1nboXIcmRkA3M2rS%2Fldrxlcf%2FaY8ju6npm0%2BZYrgt5OT4IacBZVc%2Fqt9S6zaPcZOI%2Fx5JMjQ8VMJDwtsQGOqUBJkD%2BfbwFbpw%2B7oVlQASjZSt6URtRKcWRQ5pJBK5FTwnnG2EdEyZJJ6XJjOGgHgp1B0M4GR%2FHJisYMXlzo1tMs89m41GgTGSBUYuASYjdiaFgjatGWlcPgottr1rgRH977qG0yXRnvfnUpPEFuFPL3SUmRnbam0kA7ZT06olcYxLSPShdhQe0Vs6Z7I61I2qHVD0WzK374YIZ0gHV9ylHSi6z%2B9EG&X-Amz-Signature=e9ea99b549fb1ca34f474191a88c8cd115d7c3b5a97f74026f65f899cd363383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2L7ASH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FkRuaT5nNUTz6htbmDFcNQV2lXlrMO3Q8WNa3tgTZkQIgVlf4YChcv20eExSTq9Lo%2BJytJE%2BtSwBbQJzS%2Bo0w2iUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDN1g6SFyC40rh5OL5ircAxO%2F6Z1CGU%2FmDx2CYEZcxoaifdP%2BD1ZaXpW3eiFr3udrSCFRtAyC8ySH6UsG7q8WAcmtQPvRxVP8TloWHvomTwPj8V%2FhPzlAlQzMJyEg2X9p58LxrZE%2F0oNK7DlW7xMVo%2FdlEu80CNESEKhVn4Et%2BYqsSAtUH5V%2FDH0Bxh7togu2uAK0d%2BQYbXNxKydtyDRASFFKUYsbeAMcVDIho%2FxL0M1CZyLPh4p1HmAfreANsZffZG3Hs05FEhJnO5ID2TSZJmN6XCuZVY3Fudf1hFKxKY5HHI9dQCGhltFCV9zUGuQEowHYtWK3QJwC22uZLaITOlS5O%2BrAJ77iyoasEl8RCZQIpyHn1rgEQaIBqmeLMw7PGHzrBnMRc2FbttsOnKRJxnqoTdVxM4Bjf12aFkC5HXKqWsRUcYUHTrwfGHkcBPWA767wxBG9fIg2J5vijuICIbcenhvzL9VlssRQHAoq9nkShTzv5hht%2BI5j8KA9zyNMq9CvnIEna%2BGt5eG%2FBy%2F6VRhnnLE62Txy2BW6CvCeSpRbcAv2Xfb3Jj5qLymqNwcZrefy1Y1nboXIcmRkA3M2rS%2Fldrxlcf%2FaY8ju6npm0%2BZYrgt5OT4IacBZVc%2Fqt9S6zaPcZOI%2Fx5JMjQ8VMJDwtsQGOqUBJkD%2BfbwFbpw%2B7oVlQASjZSt6URtRKcWRQ5pJBK5FTwnnG2EdEyZJJ6XJjOGgHgp1B0M4GR%2FHJisYMXlzo1tMs89m41GgTGSBUYuASYjdiaFgjatGWlcPgottr1rgRH977qG0yXRnvfnUpPEFuFPL3SUmRnbam0kA7ZT06olcYxLSPShdhQe0Vs6Z7I61I2qHVD0WzK374YIZ0gHV9ylHSi6z%2B9EG&X-Amz-Signature=1115ba5db26626e0539f07c74d4bb9340ce463cdf491b3c02807ae16bb4df8cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2L7ASH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FkRuaT5nNUTz6htbmDFcNQV2lXlrMO3Q8WNa3tgTZkQIgVlf4YChcv20eExSTq9Lo%2BJytJE%2BtSwBbQJzS%2Bo0w2iUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDN1g6SFyC40rh5OL5ircAxO%2F6Z1CGU%2FmDx2CYEZcxoaifdP%2BD1ZaXpW3eiFr3udrSCFRtAyC8ySH6UsG7q8WAcmtQPvRxVP8TloWHvomTwPj8V%2FhPzlAlQzMJyEg2X9p58LxrZE%2F0oNK7DlW7xMVo%2FdlEu80CNESEKhVn4Et%2BYqsSAtUH5V%2FDH0Bxh7togu2uAK0d%2BQYbXNxKydtyDRASFFKUYsbeAMcVDIho%2FxL0M1CZyLPh4p1HmAfreANsZffZG3Hs05FEhJnO5ID2TSZJmN6XCuZVY3Fudf1hFKxKY5HHI9dQCGhltFCV9zUGuQEowHYtWK3QJwC22uZLaITOlS5O%2BrAJ77iyoasEl8RCZQIpyHn1rgEQaIBqmeLMw7PGHzrBnMRc2FbttsOnKRJxnqoTdVxM4Bjf12aFkC5HXKqWsRUcYUHTrwfGHkcBPWA767wxBG9fIg2J5vijuICIbcenhvzL9VlssRQHAoq9nkShTzv5hht%2BI5j8KA9zyNMq9CvnIEna%2BGt5eG%2FBy%2F6VRhnnLE62Txy2BW6CvCeSpRbcAv2Xfb3Jj5qLymqNwcZrefy1Y1nboXIcmRkA3M2rS%2Fldrxlcf%2FaY8ju6npm0%2BZYrgt5OT4IacBZVc%2Fqt9S6zaPcZOI%2Fx5JMjQ8VMJDwtsQGOqUBJkD%2BfbwFbpw%2B7oVlQASjZSt6URtRKcWRQ5pJBK5FTwnnG2EdEyZJJ6XJjOGgHgp1B0M4GR%2FHJisYMXlzo1tMs89m41GgTGSBUYuASYjdiaFgjatGWlcPgottr1rgRH977qG0yXRnvfnUpPEFuFPL3SUmRnbam0kA7ZT06olcYxLSPShdhQe0Vs6Z7I61I2qHVD0WzK374YIZ0gHV9ylHSi6z%2B9EG&X-Amz-Signature=84cb221f51fdc18f4b5a00edc085f04ce0851ac96fc79ded04366e089386d16b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2L7ASH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FkRuaT5nNUTz6htbmDFcNQV2lXlrMO3Q8WNa3tgTZkQIgVlf4YChcv20eExSTq9Lo%2BJytJE%2BtSwBbQJzS%2Bo0w2iUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDN1g6SFyC40rh5OL5ircAxO%2F6Z1CGU%2FmDx2CYEZcxoaifdP%2BD1ZaXpW3eiFr3udrSCFRtAyC8ySH6UsG7q8WAcmtQPvRxVP8TloWHvomTwPj8V%2FhPzlAlQzMJyEg2X9p58LxrZE%2F0oNK7DlW7xMVo%2FdlEu80CNESEKhVn4Et%2BYqsSAtUH5V%2FDH0Bxh7togu2uAK0d%2BQYbXNxKydtyDRASFFKUYsbeAMcVDIho%2FxL0M1CZyLPh4p1HmAfreANsZffZG3Hs05FEhJnO5ID2TSZJmN6XCuZVY3Fudf1hFKxKY5HHI9dQCGhltFCV9zUGuQEowHYtWK3QJwC22uZLaITOlS5O%2BrAJ77iyoasEl8RCZQIpyHn1rgEQaIBqmeLMw7PGHzrBnMRc2FbttsOnKRJxnqoTdVxM4Bjf12aFkC5HXKqWsRUcYUHTrwfGHkcBPWA767wxBG9fIg2J5vijuICIbcenhvzL9VlssRQHAoq9nkShTzv5hht%2BI5j8KA9zyNMq9CvnIEna%2BGt5eG%2FBy%2F6VRhnnLE62Txy2BW6CvCeSpRbcAv2Xfb3Jj5qLymqNwcZrefy1Y1nboXIcmRkA3M2rS%2Fldrxlcf%2FaY8ju6npm0%2BZYrgt5OT4IacBZVc%2Fqt9S6zaPcZOI%2Fx5JMjQ8VMJDwtsQGOqUBJkD%2BfbwFbpw%2B7oVlQASjZSt6URtRKcWRQ5pJBK5FTwnnG2EdEyZJJ6XJjOGgHgp1B0M4GR%2FHJisYMXlzo1tMs89m41GgTGSBUYuASYjdiaFgjatGWlcPgottr1rgRH977qG0yXRnvfnUpPEFuFPL3SUmRnbam0kA7ZT06olcYxLSPShdhQe0Vs6Z7I61I2qHVD0WzK374YIZ0gHV9ylHSi6z%2B9EG&X-Amz-Signature=e266aa1c2b7ed4e321e9c945e0eea22366bd29d9310a154c9e08d8c2f1f632b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2L7ASH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FkRuaT5nNUTz6htbmDFcNQV2lXlrMO3Q8WNa3tgTZkQIgVlf4YChcv20eExSTq9Lo%2BJytJE%2BtSwBbQJzS%2Bo0w2iUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDN1g6SFyC40rh5OL5ircAxO%2F6Z1CGU%2FmDx2CYEZcxoaifdP%2BD1ZaXpW3eiFr3udrSCFRtAyC8ySH6UsG7q8WAcmtQPvRxVP8TloWHvomTwPj8V%2FhPzlAlQzMJyEg2X9p58LxrZE%2F0oNK7DlW7xMVo%2FdlEu80CNESEKhVn4Et%2BYqsSAtUH5V%2FDH0Bxh7togu2uAK0d%2BQYbXNxKydtyDRASFFKUYsbeAMcVDIho%2FxL0M1CZyLPh4p1HmAfreANsZffZG3Hs05FEhJnO5ID2TSZJmN6XCuZVY3Fudf1hFKxKY5HHI9dQCGhltFCV9zUGuQEowHYtWK3QJwC22uZLaITOlS5O%2BrAJ77iyoasEl8RCZQIpyHn1rgEQaIBqmeLMw7PGHzrBnMRc2FbttsOnKRJxnqoTdVxM4Bjf12aFkC5HXKqWsRUcYUHTrwfGHkcBPWA767wxBG9fIg2J5vijuICIbcenhvzL9VlssRQHAoq9nkShTzv5hht%2BI5j8KA9zyNMq9CvnIEna%2BGt5eG%2FBy%2F6VRhnnLE62Txy2BW6CvCeSpRbcAv2Xfb3Jj5qLymqNwcZrefy1Y1nboXIcmRkA3M2rS%2Fldrxlcf%2FaY8ju6npm0%2BZYrgt5OT4IacBZVc%2Fqt9S6zaPcZOI%2Fx5JMjQ8VMJDwtsQGOqUBJkD%2BfbwFbpw%2B7oVlQASjZSt6URtRKcWRQ5pJBK5FTwnnG2EdEyZJJ6XJjOGgHgp1B0M4GR%2FHJisYMXlzo1tMs89m41GgTGSBUYuASYjdiaFgjatGWlcPgottr1rgRH977qG0yXRnvfnUpPEFuFPL3SUmRnbam0kA7ZT06olcYxLSPShdhQe0Vs6Z7I61I2qHVD0WzK374YIZ0gHV9ylHSi6z%2B9EG&X-Amz-Signature=10165384a2acdee89f9d686be0393d7f1bb6dc0cdebf60c5f6d56540c2420d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2L7ASH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FkRuaT5nNUTz6htbmDFcNQV2lXlrMO3Q8WNa3tgTZkQIgVlf4YChcv20eExSTq9Lo%2BJytJE%2BtSwBbQJzS%2Bo0w2iUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDN1g6SFyC40rh5OL5ircAxO%2F6Z1CGU%2FmDx2CYEZcxoaifdP%2BD1ZaXpW3eiFr3udrSCFRtAyC8ySH6UsG7q8WAcmtQPvRxVP8TloWHvomTwPj8V%2FhPzlAlQzMJyEg2X9p58LxrZE%2F0oNK7DlW7xMVo%2FdlEu80CNESEKhVn4Et%2BYqsSAtUH5V%2FDH0Bxh7togu2uAK0d%2BQYbXNxKydtyDRASFFKUYsbeAMcVDIho%2FxL0M1CZyLPh4p1HmAfreANsZffZG3Hs05FEhJnO5ID2TSZJmN6XCuZVY3Fudf1hFKxKY5HHI9dQCGhltFCV9zUGuQEowHYtWK3QJwC22uZLaITOlS5O%2BrAJ77iyoasEl8RCZQIpyHn1rgEQaIBqmeLMw7PGHzrBnMRc2FbttsOnKRJxnqoTdVxM4Bjf12aFkC5HXKqWsRUcYUHTrwfGHkcBPWA767wxBG9fIg2J5vijuICIbcenhvzL9VlssRQHAoq9nkShTzv5hht%2BI5j8KA9zyNMq9CvnIEna%2BGt5eG%2FBy%2F6VRhnnLE62Txy2BW6CvCeSpRbcAv2Xfb3Jj5qLymqNwcZrefy1Y1nboXIcmRkA3M2rS%2Fldrxlcf%2FaY8ju6npm0%2BZYrgt5OT4IacBZVc%2Fqt9S6zaPcZOI%2Fx5JMjQ8VMJDwtsQGOqUBJkD%2BfbwFbpw%2B7oVlQASjZSt6URtRKcWRQ5pJBK5FTwnnG2EdEyZJJ6XJjOGgHgp1B0M4GR%2FHJisYMXlzo1tMs89m41GgTGSBUYuASYjdiaFgjatGWlcPgottr1rgRH977qG0yXRnvfnUpPEFuFPL3SUmRnbam0kA7ZT06olcYxLSPShdhQe0Vs6Z7I61I2qHVD0WzK374YIZ0gHV9ylHSi6z%2B9EG&X-Amz-Signature=4e8bdf32741f46a36a204a94507345b642f4fb029e7700b84de292d7fe2c8017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
