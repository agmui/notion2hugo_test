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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNP4MBN7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsdIkiXol%2BnFyN5WMNu%2BfJzGgFzzOx7LntBb9fkd0rEQIgOztuGYmCZYy9FxmG8ohtu2%2F8sYMKnxt8SY%2F87iQeR7sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDB5NLVPx61Ybxhfb3SrcA%2B2CjYeO4MUo86v27ZB7AjHLLXI2kgNT%2F3YCa%2FxLSgw%2BX8gswL29SwdPiieTT3sJ%2FF71D94PArkrCSQXl0RsGfHiwP0k0uuOwfA%2BvKN8xQjddiPFRuWhpz5rLFOOx7cfV2NX3bfH2WM6t9vnlEVHxwM8pYQ%2FsMGENJE5MnzkX6M4u%2BY6PKdlJdbODh8KDHc%2BZ%2FlPmlDrPEiu%2FMeRWB2qURBr1zE3mnzjYMlHL5d67ZsBMYRxaCyKX%2BIj4MI%2FmNJamIE6QGv6e78OPIyGXIEr98b61EhHf0FWdLt%2BMnqAJLibCqu6kfhq52G3afjUXwMfH8nt%2FrUdyiHjcTBPW%2BVIU%2BzTTX9c8hxqg%2BEg7W8ddiYx%2FxALI4gz4K3kk3K%2Fu2WMQufArNCYS8RyQoWlLhS5OAOwp47CKTP7WRB%2FKp6KFhU1G8O8hQiyzoEpkUvAFSA%2BlHX6gjV57drHjEtFzGkBa48zw6boRBNClLYg%2F7gX2QY5zeP530p0ygo5yXAnrYjmvLfYxmBSzD3L%2B%2FjaxI77Xe80cq6fc6ZQNvxWrpkALBhKEeVnT7PhiCkz7Io%2FeyYUla3zgYud29JcVIqvUb6aTN%2BJ%2F%2B3LNX6gkSFm6m573jxZNDCTVHIU7pktm7ZPMJOrvsQGOqUBjyQogPEqr1UF0mJ327kIXADlcY1ETb1oFK4MdiFoIL6iArrgAwtLazgz61H%2F1II%2B7NyF5iMGMcC8vcyueJ1mwFIV1e%2FNxkxipooLXa12cBCG3VGI5qXoUZO%2FOh1%2BBFxhQ%2F2Nni9YPFavZ9U0aDDM0L3Cf0InpCcDQimv95k6FLGr7YvWgT4dWRtuWPEOKJHdae60KUTodaa0CkhR5zkN%2Fh0RpUAZ&X-Amz-Signature=85c77b6e1157241e1868b62b4ba0fbe1b7c901c7e420e54f5a08636fadbd4ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNP4MBN7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsdIkiXol%2BnFyN5WMNu%2BfJzGgFzzOx7LntBb9fkd0rEQIgOztuGYmCZYy9FxmG8ohtu2%2F8sYMKnxt8SY%2F87iQeR7sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDB5NLVPx61Ybxhfb3SrcA%2B2CjYeO4MUo86v27ZB7AjHLLXI2kgNT%2F3YCa%2FxLSgw%2BX8gswL29SwdPiieTT3sJ%2FF71D94PArkrCSQXl0RsGfHiwP0k0uuOwfA%2BvKN8xQjddiPFRuWhpz5rLFOOx7cfV2NX3bfH2WM6t9vnlEVHxwM8pYQ%2FsMGENJE5MnzkX6M4u%2BY6PKdlJdbODh8KDHc%2BZ%2FlPmlDrPEiu%2FMeRWB2qURBr1zE3mnzjYMlHL5d67ZsBMYRxaCyKX%2BIj4MI%2FmNJamIE6QGv6e78OPIyGXIEr98b61EhHf0FWdLt%2BMnqAJLibCqu6kfhq52G3afjUXwMfH8nt%2FrUdyiHjcTBPW%2BVIU%2BzTTX9c8hxqg%2BEg7W8ddiYx%2FxALI4gz4K3kk3K%2Fu2WMQufArNCYS8RyQoWlLhS5OAOwp47CKTP7WRB%2FKp6KFhU1G8O8hQiyzoEpkUvAFSA%2BlHX6gjV57drHjEtFzGkBa48zw6boRBNClLYg%2F7gX2QY5zeP530p0ygo5yXAnrYjmvLfYxmBSzD3L%2B%2FjaxI77Xe80cq6fc6ZQNvxWrpkALBhKEeVnT7PhiCkz7Io%2FeyYUla3zgYud29JcVIqvUb6aTN%2BJ%2F%2B3LNX6gkSFm6m573jxZNDCTVHIU7pktm7ZPMJOrvsQGOqUBjyQogPEqr1UF0mJ327kIXADlcY1ETb1oFK4MdiFoIL6iArrgAwtLazgz61H%2F1II%2B7NyF5iMGMcC8vcyueJ1mwFIV1e%2FNxkxipooLXa12cBCG3VGI5qXoUZO%2FOh1%2BBFxhQ%2F2Nni9YPFavZ9U0aDDM0L3Cf0InpCcDQimv95k6FLGr7YvWgT4dWRtuWPEOKJHdae60KUTodaa0CkhR5zkN%2Fh0RpUAZ&X-Amz-Signature=e49e98e321d7d4a0308ce07b1436ceaa35933a5229acd58bbd2ed7565425124a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNP4MBN7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsdIkiXol%2BnFyN5WMNu%2BfJzGgFzzOx7LntBb9fkd0rEQIgOztuGYmCZYy9FxmG8ohtu2%2F8sYMKnxt8SY%2F87iQeR7sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDB5NLVPx61Ybxhfb3SrcA%2B2CjYeO4MUo86v27ZB7AjHLLXI2kgNT%2F3YCa%2FxLSgw%2BX8gswL29SwdPiieTT3sJ%2FF71D94PArkrCSQXl0RsGfHiwP0k0uuOwfA%2BvKN8xQjddiPFRuWhpz5rLFOOx7cfV2NX3bfH2WM6t9vnlEVHxwM8pYQ%2FsMGENJE5MnzkX6M4u%2BY6PKdlJdbODh8KDHc%2BZ%2FlPmlDrPEiu%2FMeRWB2qURBr1zE3mnzjYMlHL5d67ZsBMYRxaCyKX%2BIj4MI%2FmNJamIE6QGv6e78OPIyGXIEr98b61EhHf0FWdLt%2BMnqAJLibCqu6kfhq52G3afjUXwMfH8nt%2FrUdyiHjcTBPW%2BVIU%2BzTTX9c8hxqg%2BEg7W8ddiYx%2FxALI4gz4K3kk3K%2Fu2WMQufArNCYS8RyQoWlLhS5OAOwp47CKTP7WRB%2FKp6KFhU1G8O8hQiyzoEpkUvAFSA%2BlHX6gjV57drHjEtFzGkBa48zw6boRBNClLYg%2F7gX2QY5zeP530p0ygo5yXAnrYjmvLfYxmBSzD3L%2B%2FjaxI77Xe80cq6fc6ZQNvxWrpkALBhKEeVnT7PhiCkz7Io%2FeyYUla3zgYud29JcVIqvUb6aTN%2BJ%2F%2B3LNX6gkSFm6m573jxZNDCTVHIU7pktm7ZPMJOrvsQGOqUBjyQogPEqr1UF0mJ327kIXADlcY1ETb1oFK4MdiFoIL6iArrgAwtLazgz61H%2F1II%2B7NyF5iMGMcC8vcyueJ1mwFIV1e%2FNxkxipooLXa12cBCG3VGI5qXoUZO%2FOh1%2BBFxhQ%2F2Nni9YPFavZ9U0aDDM0L3Cf0InpCcDQimv95k6FLGr7YvWgT4dWRtuWPEOKJHdae60KUTodaa0CkhR5zkN%2Fh0RpUAZ&X-Amz-Signature=29ba7ba83d677958a49f44aeb603ce1191f3c0bc6eeb870cf1f6fde274b3e6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNP4MBN7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsdIkiXol%2BnFyN5WMNu%2BfJzGgFzzOx7LntBb9fkd0rEQIgOztuGYmCZYy9FxmG8ohtu2%2F8sYMKnxt8SY%2F87iQeR7sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDB5NLVPx61Ybxhfb3SrcA%2B2CjYeO4MUo86v27ZB7AjHLLXI2kgNT%2F3YCa%2FxLSgw%2BX8gswL29SwdPiieTT3sJ%2FF71D94PArkrCSQXl0RsGfHiwP0k0uuOwfA%2BvKN8xQjddiPFRuWhpz5rLFOOx7cfV2NX3bfH2WM6t9vnlEVHxwM8pYQ%2FsMGENJE5MnzkX6M4u%2BY6PKdlJdbODh8KDHc%2BZ%2FlPmlDrPEiu%2FMeRWB2qURBr1zE3mnzjYMlHL5d67ZsBMYRxaCyKX%2BIj4MI%2FmNJamIE6QGv6e78OPIyGXIEr98b61EhHf0FWdLt%2BMnqAJLibCqu6kfhq52G3afjUXwMfH8nt%2FrUdyiHjcTBPW%2BVIU%2BzTTX9c8hxqg%2BEg7W8ddiYx%2FxALI4gz4K3kk3K%2Fu2WMQufArNCYS8RyQoWlLhS5OAOwp47CKTP7WRB%2FKp6KFhU1G8O8hQiyzoEpkUvAFSA%2BlHX6gjV57drHjEtFzGkBa48zw6boRBNClLYg%2F7gX2QY5zeP530p0ygo5yXAnrYjmvLfYxmBSzD3L%2B%2FjaxI77Xe80cq6fc6ZQNvxWrpkALBhKEeVnT7PhiCkz7Io%2FeyYUla3zgYud29JcVIqvUb6aTN%2BJ%2F%2B3LNX6gkSFm6m573jxZNDCTVHIU7pktm7ZPMJOrvsQGOqUBjyQogPEqr1UF0mJ327kIXADlcY1ETb1oFK4MdiFoIL6iArrgAwtLazgz61H%2F1II%2B7NyF5iMGMcC8vcyueJ1mwFIV1e%2FNxkxipooLXa12cBCG3VGI5qXoUZO%2FOh1%2BBFxhQ%2F2Nni9YPFavZ9U0aDDM0L3Cf0InpCcDQimv95k6FLGr7YvWgT4dWRtuWPEOKJHdae60KUTodaa0CkhR5zkN%2Fh0RpUAZ&X-Amz-Signature=4542e779aff05456d2128405c4c3e3c44a82bb01d9312ceaa71508c1e2e3c9be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNP4MBN7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsdIkiXol%2BnFyN5WMNu%2BfJzGgFzzOx7LntBb9fkd0rEQIgOztuGYmCZYy9FxmG8ohtu2%2F8sYMKnxt8SY%2F87iQeR7sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDB5NLVPx61Ybxhfb3SrcA%2B2CjYeO4MUo86v27ZB7AjHLLXI2kgNT%2F3YCa%2FxLSgw%2BX8gswL29SwdPiieTT3sJ%2FF71D94PArkrCSQXl0RsGfHiwP0k0uuOwfA%2BvKN8xQjddiPFRuWhpz5rLFOOx7cfV2NX3bfH2WM6t9vnlEVHxwM8pYQ%2FsMGENJE5MnzkX6M4u%2BY6PKdlJdbODh8KDHc%2BZ%2FlPmlDrPEiu%2FMeRWB2qURBr1zE3mnzjYMlHL5d67ZsBMYRxaCyKX%2BIj4MI%2FmNJamIE6QGv6e78OPIyGXIEr98b61EhHf0FWdLt%2BMnqAJLibCqu6kfhq52G3afjUXwMfH8nt%2FrUdyiHjcTBPW%2BVIU%2BzTTX9c8hxqg%2BEg7W8ddiYx%2FxALI4gz4K3kk3K%2Fu2WMQufArNCYS8RyQoWlLhS5OAOwp47CKTP7WRB%2FKp6KFhU1G8O8hQiyzoEpkUvAFSA%2BlHX6gjV57drHjEtFzGkBa48zw6boRBNClLYg%2F7gX2QY5zeP530p0ygo5yXAnrYjmvLfYxmBSzD3L%2B%2FjaxI77Xe80cq6fc6ZQNvxWrpkALBhKEeVnT7PhiCkz7Io%2FeyYUla3zgYud29JcVIqvUb6aTN%2BJ%2F%2B3LNX6gkSFm6m573jxZNDCTVHIU7pktm7ZPMJOrvsQGOqUBjyQogPEqr1UF0mJ327kIXADlcY1ETb1oFK4MdiFoIL6iArrgAwtLazgz61H%2F1II%2B7NyF5iMGMcC8vcyueJ1mwFIV1e%2FNxkxipooLXa12cBCG3VGI5qXoUZO%2FOh1%2BBFxhQ%2F2Nni9YPFavZ9U0aDDM0L3Cf0InpCcDQimv95k6FLGr7YvWgT4dWRtuWPEOKJHdae60KUTodaa0CkhR5zkN%2Fh0RpUAZ&X-Amz-Signature=0b3d3e504fd14061bfa51ea5026654293a9ce34112c32f450e407822da56d082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNP4MBN7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsdIkiXol%2BnFyN5WMNu%2BfJzGgFzzOx7LntBb9fkd0rEQIgOztuGYmCZYy9FxmG8ohtu2%2F8sYMKnxt8SY%2F87iQeR7sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDB5NLVPx61Ybxhfb3SrcA%2B2CjYeO4MUo86v27ZB7AjHLLXI2kgNT%2F3YCa%2FxLSgw%2BX8gswL29SwdPiieTT3sJ%2FF71D94PArkrCSQXl0RsGfHiwP0k0uuOwfA%2BvKN8xQjddiPFRuWhpz5rLFOOx7cfV2NX3bfH2WM6t9vnlEVHxwM8pYQ%2FsMGENJE5MnzkX6M4u%2BY6PKdlJdbODh8KDHc%2BZ%2FlPmlDrPEiu%2FMeRWB2qURBr1zE3mnzjYMlHL5d67ZsBMYRxaCyKX%2BIj4MI%2FmNJamIE6QGv6e78OPIyGXIEr98b61EhHf0FWdLt%2BMnqAJLibCqu6kfhq52G3afjUXwMfH8nt%2FrUdyiHjcTBPW%2BVIU%2BzTTX9c8hxqg%2BEg7W8ddiYx%2FxALI4gz4K3kk3K%2Fu2WMQufArNCYS8RyQoWlLhS5OAOwp47CKTP7WRB%2FKp6KFhU1G8O8hQiyzoEpkUvAFSA%2BlHX6gjV57drHjEtFzGkBa48zw6boRBNClLYg%2F7gX2QY5zeP530p0ygo5yXAnrYjmvLfYxmBSzD3L%2B%2FjaxI77Xe80cq6fc6ZQNvxWrpkALBhKEeVnT7PhiCkz7Io%2FeyYUla3zgYud29JcVIqvUb6aTN%2BJ%2F%2B3LNX6gkSFm6m573jxZNDCTVHIU7pktm7ZPMJOrvsQGOqUBjyQogPEqr1UF0mJ327kIXADlcY1ETb1oFK4MdiFoIL6iArrgAwtLazgz61H%2F1II%2B7NyF5iMGMcC8vcyueJ1mwFIV1e%2FNxkxipooLXa12cBCG3VGI5qXoUZO%2FOh1%2BBFxhQ%2F2Nni9YPFavZ9U0aDDM0L3Cf0InpCcDQimv95k6FLGr7YvWgT4dWRtuWPEOKJHdae60KUTodaa0CkhR5zkN%2Fh0RpUAZ&X-Amz-Signature=d4685fe01e778d95fb9f02ed379304df328c2b959b78bd60d50f7fe8f4a5313c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNP4MBN7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsdIkiXol%2BnFyN5WMNu%2BfJzGgFzzOx7LntBb9fkd0rEQIgOztuGYmCZYy9FxmG8ohtu2%2F8sYMKnxt8SY%2F87iQeR7sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDB5NLVPx61Ybxhfb3SrcA%2B2CjYeO4MUo86v27ZB7AjHLLXI2kgNT%2F3YCa%2FxLSgw%2BX8gswL29SwdPiieTT3sJ%2FF71D94PArkrCSQXl0RsGfHiwP0k0uuOwfA%2BvKN8xQjddiPFRuWhpz5rLFOOx7cfV2NX3bfH2WM6t9vnlEVHxwM8pYQ%2FsMGENJE5MnzkX6M4u%2BY6PKdlJdbODh8KDHc%2BZ%2FlPmlDrPEiu%2FMeRWB2qURBr1zE3mnzjYMlHL5d67ZsBMYRxaCyKX%2BIj4MI%2FmNJamIE6QGv6e78OPIyGXIEr98b61EhHf0FWdLt%2BMnqAJLibCqu6kfhq52G3afjUXwMfH8nt%2FrUdyiHjcTBPW%2BVIU%2BzTTX9c8hxqg%2BEg7W8ddiYx%2FxALI4gz4K3kk3K%2Fu2WMQufArNCYS8RyQoWlLhS5OAOwp47CKTP7WRB%2FKp6KFhU1G8O8hQiyzoEpkUvAFSA%2BlHX6gjV57drHjEtFzGkBa48zw6boRBNClLYg%2F7gX2QY5zeP530p0ygo5yXAnrYjmvLfYxmBSzD3L%2B%2FjaxI77Xe80cq6fc6ZQNvxWrpkALBhKEeVnT7PhiCkz7Io%2FeyYUla3zgYud29JcVIqvUb6aTN%2BJ%2F%2B3LNX6gkSFm6m573jxZNDCTVHIU7pktm7ZPMJOrvsQGOqUBjyQogPEqr1UF0mJ327kIXADlcY1ETb1oFK4MdiFoIL6iArrgAwtLazgz61H%2F1II%2B7NyF5iMGMcC8vcyueJ1mwFIV1e%2FNxkxipooLXa12cBCG3VGI5qXoUZO%2FOh1%2BBFxhQ%2F2Nni9YPFavZ9U0aDDM0L3Cf0InpCcDQimv95k6FLGr7YvWgT4dWRtuWPEOKJHdae60KUTodaa0CkhR5zkN%2Fh0RpUAZ&X-Amz-Signature=56ffbceb1dba518fa9e39acd7746061c9d2122e1b0e9eb63e8f674207cf0fef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNP4MBN7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsdIkiXol%2BnFyN5WMNu%2BfJzGgFzzOx7LntBb9fkd0rEQIgOztuGYmCZYy9FxmG8ohtu2%2F8sYMKnxt8SY%2F87iQeR7sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDB5NLVPx61Ybxhfb3SrcA%2B2CjYeO4MUo86v27ZB7AjHLLXI2kgNT%2F3YCa%2FxLSgw%2BX8gswL29SwdPiieTT3sJ%2FF71D94PArkrCSQXl0RsGfHiwP0k0uuOwfA%2BvKN8xQjddiPFRuWhpz5rLFOOx7cfV2NX3bfH2WM6t9vnlEVHxwM8pYQ%2FsMGENJE5MnzkX6M4u%2BY6PKdlJdbODh8KDHc%2BZ%2FlPmlDrPEiu%2FMeRWB2qURBr1zE3mnzjYMlHL5d67ZsBMYRxaCyKX%2BIj4MI%2FmNJamIE6QGv6e78OPIyGXIEr98b61EhHf0FWdLt%2BMnqAJLibCqu6kfhq52G3afjUXwMfH8nt%2FrUdyiHjcTBPW%2BVIU%2BzTTX9c8hxqg%2BEg7W8ddiYx%2FxALI4gz4K3kk3K%2Fu2WMQufArNCYS8RyQoWlLhS5OAOwp47CKTP7WRB%2FKp6KFhU1G8O8hQiyzoEpkUvAFSA%2BlHX6gjV57drHjEtFzGkBa48zw6boRBNClLYg%2F7gX2QY5zeP530p0ygo5yXAnrYjmvLfYxmBSzD3L%2B%2FjaxI77Xe80cq6fc6ZQNvxWrpkALBhKEeVnT7PhiCkz7Io%2FeyYUla3zgYud29JcVIqvUb6aTN%2BJ%2F%2B3LNX6gkSFm6m573jxZNDCTVHIU7pktm7ZPMJOrvsQGOqUBjyQogPEqr1UF0mJ327kIXADlcY1ETb1oFK4MdiFoIL6iArrgAwtLazgz61H%2F1II%2B7NyF5iMGMcC8vcyueJ1mwFIV1e%2FNxkxipooLXa12cBCG3VGI5qXoUZO%2FOh1%2BBFxhQ%2F2Nni9YPFavZ9U0aDDM0L3Cf0InpCcDQimv95k6FLGr7YvWgT4dWRtuWPEOKJHdae60KUTodaa0CkhR5zkN%2Fh0RpUAZ&X-Amz-Signature=e7cbd405b6e5d8531d66f943d6625ab249446f6c0680a58cb2eb706ef557521b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNP4MBN7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsdIkiXol%2BnFyN5WMNu%2BfJzGgFzzOx7LntBb9fkd0rEQIgOztuGYmCZYy9FxmG8ohtu2%2F8sYMKnxt8SY%2F87iQeR7sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDB5NLVPx61Ybxhfb3SrcA%2B2CjYeO4MUo86v27ZB7AjHLLXI2kgNT%2F3YCa%2FxLSgw%2BX8gswL29SwdPiieTT3sJ%2FF71D94PArkrCSQXl0RsGfHiwP0k0uuOwfA%2BvKN8xQjddiPFRuWhpz5rLFOOx7cfV2NX3bfH2WM6t9vnlEVHxwM8pYQ%2FsMGENJE5MnzkX6M4u%2BY6PKdlJdbODh8KDHc%2BZ%2FlPmlDrPEiu%2FMeRWB2qURBr1zE3mnzjYMlHL5d67ZsBMYRxaCyKX%2BIj4MI%2FmNJamIE6QGv6e78OPIyGXIEr98b61EhHf0FWdLt%2BMnqAJLibCqu6kfhq52G3afjUXwMfH8nt%2FrUdyiHjcTBPW%2BVIU%2BzTTX9c8hxqg%2BEg7W8ddiYx%2FxALI4gz4K3kk3K%2Fu2WMQufArNCYS8RyQoWlLhS5OAOwp47CKTP7WRB%2FKp6KFhU1G8O8hQiyzoEpkUvAFSA%2BlHX6gjV57drHjEtFzGkBa48zw6boRBNClLYg%2F7gX2QY5zeP530p0ygo5yXAnrYjmvLfYxmBSzD3L%2B%2FjaxI77Xe80cq6fc6ZQNvxWrpkALBhKEeVnT7PhiCkz7Io%2FeyYUla3zgYud29JcVIqvUb6aTN%2BJ%2F%2B3LNX6gkSFm6m573jxZNDCTVHIU7pktm7ZPMJOrvsQGOqUBjyQogPEqr1UF0mJ327kIXADlcY1ETb1oFK4MdiFoIL6iArrgAwtLazgz61H%2F1II%2B7NyF5iMGMcC8vcyueJ1mwFIV1e%2FNxkxipooLXa12cBCG3VGI5qXoUZO%2FOh1%2BBFxhQ%2F2Nni9YPFavZ9U0aDDM0L3Cf0InpCcDQimv95k6FLGr7YvWgT4dWRtuWPEOKJHdae60KUTodaa0CkhR5zkN%2Fh0RpUAZ&X-Amz-Signature=7c67e395feae9b7c161aecb2c8768765a28f986a571d60170d80bb3740ef7bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNP4MBN7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsdIkiXol%2BnFyN5WMNu%2BfJzGgFzzOx7LntBb9fkd0rEQIgOztuGYmCZYy9FxmG8ohtu2%2F8sYMKnxt8SY%2F87iQeR7sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDB5NLVPx61Ybxhfb3SrcA%2B2CjYeO4MUo86v27ZB7AjHLLXI2kgNT%2F3YCa%2FxLSgw%2BX8gswL29SwdPiieTT3sJ%2FF71D94PArkrCSQXl0RsGfHiwP0k0uuOwfA%2BvKN8xQjddiPFRuWhpz5rLFOOx7cfV2NX3bfH2WM6t9vnlEVHxwM8pYQ%2FsMGENJE5MnzkX6M4u%2BY6PKdlJdbODh8KDHc%2BZ%2FlPmlDrPEiu%2FMeRWB2qURBr1zE3mnzjYMlHL5d67ZsBMYRxaCyKX%2BIj4MI%2FmNJamIE6QGv6e78OPIyGXIEr98b61EhHf0FWdLt%2BMnqAJLibCqu6kfhq52G3afjUXwMfH8nt%2FrUdyiHjcTBPW%2BVIU%2BzTTX9c8hxqg%2BEg7W8ddiYx%2FxALI4gz4K3kk3K%2Fu2WMQufArNCYS8RyQoWlLhS5OAOwp47CKTP7WRB%2FKp6KFhU1G8O8hQiyzoEpkUvAFSA%2BlHX6gjV57drHjEtFzGkBa48zw6boRBNClLYg%2F7gX2QY5zeP530p0ygo5yXAnrYjmvLfYxmBSzD3L%2B%2FjaxI77Xe80cq6fc6ZQNvxWrpkALBhKEeVnT7PhiCkz7Io%2FeyYUla3zgYud29JcVIqvUb6aTN%2BJ%2F%2B3LNX6gkSFm6m573jxZNDCTVHIU7pktm7ZPMJOrvsQGOqUBjyQogPEqr1UF0mJ327kIXADlcY1ETb1oFK4MdiFoIL6iArrgAwtLazgz61H%2F1II%2B7NyF5iMGMcC8vcyueJ1mwFIV1e%2FNxkxipooLXa12cBCG3VGI5qXoUZO%2FOh1%2BBFxhQ%2F2Nni9YPFavZ9U0aDDM0L3Cf0InpCcDQimv95k6FLGr7YvWgT4dWRtuWPEOKJHdae60KUTodaa0CkhR5zkN%2Fh0RpUAZ&X-Amz-Signature=597fabdca66306f1d325a5275613672b693a66a9e2a5efb2ad6d2ad8c9284407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNP4MBN7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsdIkiXol%2BnFyN5WMNu%2BfJzGgFzzOx7LntBb9fkd0rEQIgOztuGYmCZYy9FxmG8ohtu2%2F8sYMKnxt8SY%2F87iQeR7sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDB5NLVPx61Ybxhfb3SrcA%2B2CjYeO4MUo86v27ZB7AjHLLXI2kgNT%2F3YCa%2FxLSgw%2BX8gswL29SwdPiieTT3sJ%2FF71D94PArkrCSQXl0RsGfHiwP0k0uuOwfA%2BvKN8xQjddiPFRuWhpz5rLFOOx7cfV2NX3bfH2WM6t9vnlEVHxwM8pYQ%2FsMGENJE5MnzkX6M4u%2BY6PKdlJdbODh8KDHc%2BZ%2FlPmlDrPEiu%2FMeRWB2qURBr1zE3mnzjYMlHL5d67ZsBMYRxaCyKX%2BIj4MI%2FmNJamIE6QGv6e78OPIyGXIEr98b61EhHf0FWdLt%2BMnqAJLibCqu6kfhq52G3afjUXwMfH8nt%2FrUdyiHjcTBPW%2BVIU%2BzTTX9c8hxqg%2BEg7W8ddiYx%2FxALI4gz4K3kk3K%2Fu2WMQufArNCYS8RyQoWlLhS5OAOwp47CKTP7WRB%2FKp6KFhU1G8O8hQiyzoEpkUvAFSA%2BlHX6gjV57drHjEtFzGkBa48zw6boRBNClLYg%2F7gX2QY5zeP530p0ygo5yXAnrYjmvLfYxmBSzD3L%2B%2FjaxI77Xe80cq6fc6ZQNvxWrpkALBhKEeVnT7PhiCkz7Io%2FeyYUla3zgYud29JcVIqvUb6aTN%2BJ%2F%2B3LNX6gkSFm6m573jxZNDCTVHIU7pktm7ZPMJOrvsQGOqUBjyQogPEqr1UF0mJ327kIXADlcY1ETb1oFK4MdiFoIL6iArrgAwtLazgz61H%2F1II%2B7NyF5iMGMcC8vcyueJ1mwFIV1e%2FNxkxipooLXa12cBCG3VGI5qXoUZO%2FOh1%2BBFxhQ%2F2Nni9YPFavZ9U0aDDM0L3Cf0InpCcDQimv95k6FLGr7YvWgT4dWRtuWPEOKJHdae60KUTodaa0CkhR5zkN%2Fh0RpUAZ&X-Amz-Signature=1761041da13f2d7eea7f5f7019387543a7d7d0142d67f7cc96be82db953ad267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNP4MBN7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsdIkiXol%2BnFyN5WMNu%2BfJzGgFzzOx7LntBb9fkd0rEQIgOztuGYmCZYy9FxmG8ohtu2%2F8sYMKnxt8SY%2F87iQeR7sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDB5NLVPx61Ybxhfb3SrcA%2B2CjYeO4MUo86v27ZB7AjHLLXI2kgNT%2F3YCa%2FxLSgw%2BX8gswL29SwdPiieTT3sJ%2FF71D94PArkrCSQXl0RsGfHiwP0k0uuOwfA%2BvKN8xQjddiPFRuWhpz5rLFOOx7cfV2NX3bfH2WM6t9vnlEVHxwM8pYQ%2FsMGENJE5MnzkX6M4u%2BY6PKdlJdbODh8KDHc%2BZ%2FlPmlDrPEiu%2FMeRWB2qURBr1zE3mnzjYMlHL5d67ZsBMYRxaCyKX%2BIj4MI%2FmNJamIE6QGv6e78OPIyGXIEr98b61EhHf0FWdLt%2BMnqAJLibCqu6kfhq52G3afjUXwMfH8nt%2FrUdyiHjcTBPW%2BVIU%2BzTTX9c8hxqg%2BEg7W8ddiYx%2FxALI4gz4K3kk3K%2Fu2WMQufArNCYS8RyQoWlLhS5OAOwp47CKTP7WRB%2FKp6KFhU1G8O8hQiyzoEpkUvAFSA%2BlHX6gjV57drHjEtFzGkBa48zw6boRBNClLYg%2F7gX2QY5zeP530p0ygo5yXAnrYjmvLfYxmBSzD3L%2B%2FjaxI77Xe80cq6fc6ZQNvxWrpkALBhKEeVnT7PhiCkz7Io%2FeyYUla3zgYud29JcVIqvUb6aTN%2BJ%2F%2B3LNX6gkSFm6m573jxZNDCTVHIU7pktm7ZPMJOrvsQGOqUBjyQogPEqr1UF0mJ327kIXADlcY1ETb1oFK4MdiFoIL6iArrgAwtLazgz61H%2F1II%2B7NyF5iMGMcC8vcyueJ1mwFIV1e%2FNxkxipooLXa12cBCG3VGI5qXoUZO%2FOh1%2BBFxhQ%2F2Nni9YPFavZ9U0aDDM0L3Cf0InpCcDQimv95k6FLGr7YvWgT4dWRtuWPEOKJHdae60KUTodaa0CkhR5zkN%2Fh0RpUAZ&X-Amz-Signature=9206aae744b81eb5488af620dd8c2601d5aedd3604c8af362ca25b886b288647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNP4MBN7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsdIkiXol%2BnFyN5WMNu%2BfJzGgFzzOx7LntBb9fkd0rEQIgOztuGYmCZYy9FxmG8ohtu2%2F8sYMKnxt8SY%2F87iQeR7sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDB5NLVPx61Ybxhfb3SrcA%2B2CjYeO4MUo86v27ZB7AjHLLXI2kgNT%2F3YCa%2FxLSgw%2BX8gswL29SwdPiieTT3sJ%2FF71D94PArkrCSQXl0RsGfHiwP0k0uuOwfA%2BvKN8xQjddiPFRuWhpz5rLFOOx7cfV2NX3bfH2WM6t9vnlEVHxwM8pYQ%2FsMGENJE5MnzkX6M4u%2BY6PKdlJdbODh8KDHc%2BZ%2FlPmlDrPEiu%2FMeRWB2qURBr1zE3mnzjYMlHL5d67ZsBMYRxaCyKX%2BIj4MI%2FmNJamIE6QGv6e78OPIyGXIEr98b61EhHf0FWdLt%2BMnqAJLibCqu6kfhq52G3afjUXwMfH8nt%2FrUdyiHjcTBPW%2BVIU%2BzTTX9c8hxqg%2BEg7W8ddiYx%2FxALI4gz4K3kk3K%2Fu2WMQufArNCYS8RyQoWlLhS5OAOwp47CKTP7WRB%2FKp6KFhU1G8O8hQiyzoEpkUvAFSA%2BlHX6gjV57drHjEtFzGkBa48zw6boRBNClLYg%2F7gX2QY5zeP530p0ygo5yXAnrYjmvLfYxmBSzD3L%2B%2FjaxI77Xe80cq6fc6ZQNvxWrpkALBhKEeVnT7PhiCkz7Io%2FeyYUla3zgYud29JcVIqvUb6aTN%2BJ%2F%2B3LNX6gkSFm6m573jxZNDCTVHIU7pktm7ZPMJOrvsQGOqUBjyQogPEqr1UF0mJ327kIXADlcY1ETb1oFK4MdiFoIL6iArrgAwtLazgz61H%2F1II%2B7NyF5iMGMcC8vcyueJ1mwFIV1e%2FNxkxipooLXa12cBCG3VGI5qXoUZO%2FOh1%2BBFxhQ%2F2Nni9YPFavZ9U0aDDM0L3Cf0InpCcDQimv95k6FLGr7YvWgT4dWRtuWPEOKJHdae60KUTodaa0CkhR5zkN%2Fh0RpUAZ&X-Amz-Signature=f3fe5b6ca09dad9eb2bef93b90d9de2ae1d27f411c336fa73e5f5f4567acaadf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNP4MBN7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsdIkiXol%2BnFyN5WMNu%2BfJzGgFzzOx7LntBb9fkd0rEQIgOztuGYmCZYy9FxmG8ohtu2%2F8sYMKnxt8SY%2F87iQeR7sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDB5NLVPx61Ybxhfb3SrcA%2B2CjYeO4MUo86v27ZB7AjHLLXI2kgNT%2F3YCa%2FxLSgw%2BX8gswL29SwdPiieTT3sJ%2FF71D94PArkrCSQXl0RsGfHiwP0k0uuOwfA%2BvKN8xQjddiPFRuWhpz5rLFOOx7cfV2NX3bfH2WM6t9vnlEVHxwM8pYQ%2FsMGENJE5MnzkX6M4u%2BY6PKdlJdbODh8KDHc%2BZ%2FlPmlDrPEiu%2FMeRWB2qURBr1zE3mnzjYMlHL5d67ZsBMYRxaCyKX%2BIj4MI%2FmNJamIE6QGv6e78OPIyGXIEr98b61EhHf0FWdLt%2BMnqAJLibCqu6kfhq52G3afjUXwMfH8nt%2FrUdyiHjcTBPW%2BVIU%2BzTTX9c8hxqg%2BEg7W8ddiYx%2FxALI4gz4K3kk3K%2Fu2WMQufArNCYS8RyQoWlLhS5OAOwp47CKTP7WRB%2FKp6KFhU1G8O8hQiyzoEpkUvAFSA%2BlHX6gjV57drHjEtFzGkBa48zw6boRBNClLYg%2F7gX2QY5zeP530p0ygo5yXAnrYjmvLfYxmBSzD3L%2B%2FjaxI77Xe80cq6fc6ZQNvxWrpkALBhKEeVnT7PhiCkz7Io%2FeyYUla3zgYud29JcVIqvUb6aTN%2BJ%2F%2B3LNX6gkSFm6m573jxZNDCTVHIU7pktm7ZPMJOrvsQGOqUBjyQogPEqr1UF0mJ327kIXADlcY1ETb1oFK4MdiFoIL6iArrgAwtLazgz61H%2F1II%2B7NyF5iMGMcC8vcyueJ1mwFIV1e%2FNxkxipooLXa12cBCG3VGI5qXoUZO%2FOh1%2BBFxhQ%2F2Nni9YPFavZ9U0aDDM0L3Cf0InpCcDQimv95k6FLGr7YvWgT4dWRtuWPEOKJHdae60KUTodaa0CkhR5zkN%2Fh0RpUAZ&X-Amz-Signature=cb6c020c3a478d49e2324e930884a0467fcc7c5cb871c82f93b42b3be354bad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
