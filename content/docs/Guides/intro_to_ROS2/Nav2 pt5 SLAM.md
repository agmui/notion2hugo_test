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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGL2IMUG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWUJd8ma3uej%2F%2BSs64GF%2BbCegVhH9iQ%2BeQy%2FBVERnKXgIhAMghq%2FoNYEeIWmFRMKa18EjmeyBpVuDtpVvm%2BXjzRKsyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE4Ybeh%2Be6gxG0TFAq3ANSiZOc1wM2MqmUNcmPb%2FQzOrlCXByr3DhKHEgWc7T%2F69Xc8%2BXaM%2FIdQWpuYHmmgXVR%2F%2FzgnBRLB9aDXjCyw7%2BMw8SkLZAsVfDNkfsnz0X%2BjnaoZteeKVtEEy44XJsUpXLDyej%2BQhOVQWHau1k5bWET8qsyQOJGSNKnW8BB1TtX%2Fx6fnalWnLg8WapdHyst2RVUXdw1OnAVB9yBWdd87hthE7Mfjl8ccDceMUMYtRWFlmIx39gvbQgyJrJd3hrjnzN%2F2BzBWIZzS17s57IhQroIpweMV3PRjZmfheh3Zv8nbZaZKklTs11%2BSo55kwe67%2FVt%2BEiaD5%2BFzuXJXNFQ2wVzwVXZi6Kl40%2BwBbSlmPWB%2F17YFxvsUULmvZXY9GE8AfGrdkJFB1Xsy25RUSx6eQs1QEs8IzhMWZBD6SLOp9fi4ZcuiLoLHBq9psuaixG9zXmdZgWiXuWvYXAypwa81FSXx3%2BtIw06SM1z1UeHYSnYz8p1PPMMjkxRc50OC2B2D3v5MXS6bCzDhP4tr%2BLsfF7uDeXzcAg%2BBtfTT%2Fr1NqqkfieYEEoYmt6s%2BK4Mx0XE%2B2lL5%2Fxq9OATTpS6dzPWy9NVY2WPa1B9bj7qAEPlAvowZbLTVgW9zl5ka7982TC8ibPEBjqkATWAzctQgO8nk34FgVV0tXFPTgFCpru1ylZGkDfEnoW%2BCSYAQxLex5eBT5UQhMH8mC7ibjOR9WaKPp%2BuYkUFYtNQ6q0TksKqG5O4%2BGmyfgKKhLitDOK%2Fow5Ej%2BWOm0xPhDd0CIH%2BEVwNK6AfDg3HTuWgG5m9xNior%2Bl7LBfHvKxgkLUIfom60cWltuhn0ocnRcLez7XJ1CvGKE%2FlYYOTG6doN6s2&X-Amz-Signature=6609adbb1489634448cd3fdc20f0600cfc466c1d8beb96e20e6032184dc51cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGL2IMUG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWUJd8ma3uej%2F%2BSs64GF%2BbCegVhH9iQ%2BeQy%2FBVERnKXgIhAMghq%2FoNYEeIWmFRMKa18EjmeyBpVuDtpVvm%2BXjzRKsyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE4Ybeh%2Be6gxG0TFAq3ANSiZOc1wM2MqmUNcmPb%2FQzOrlCXByr3DhKHEgWc7T%2F69Xc8%2BXaM%2FIdQWpuYHmmgXVR%2F%2FzgnBRLB9aDXjCyw7%2BMw8SkLZAsVfDNkfsnz0X%2BjnaoZteeKVtEEy44XJsUpXLDyej%2BQhOVQWHau1k5bWET8qsyQOJGSNKnW8BB1TtX%2Fx6fnalWnLg8WapdHyst2RVUXdw1OnAVB9yBWdd87hthE7Mfjl8ccDceMUMYtRWFlmIx39gvbQgyJrJd3hrjnzN%2F2BzBWIZzS17s57IhQroIpweMV3PRjZmfheh3Zv8nbZaZKklTs11%2BSo55kwe67%2FVt%2BEiaD5%2BFzuXJXNFQ2wVzwVXZi6Kl40%2BwBbSlmPWB%2F17YFxvsUULmvZXY9GE8AfGrdkJFB1Xsy25RUSx6eQs1QEs8IzhMWZBD6SLOp9fi4ZcuiLoLHBq9psuaixG9zXmdZgWiXuWvYXAypwa81FSXx3%2BtIw06SM1z1UeHYSnYz8p1PPMMjkxRc50OC2B2D3v5MXS6bCzDhP4tr%2BLsfF7uDeXzcAg%2BBtfTT%2Fr1NqqkfieYEEoYmt6s%2BK4Mx0XE%2B2lL5%2Fxq9OATTpS6dzPWy9NVY2WPa1B9bj7qAEPlAvowZbLTVgW9zl5ka7982TC8ibPEBjqkATWAzctQgO8nk34FgVV0tXFPTgFCpru1ylZGkDfEnoW%2BCSYAQxLex5eBT5UQhMH8mC7ibjOR9WaKPp%2BuYkUFYtNQ6q0TksKqG5O4%2BGmyfgKKhLitDOK%2Fow5Ej%2BWOm0xPhDd0CIH%2BEVwNK6AfDg3HTuWgG5m9xNior%2Bl7LBfHvKxgkLUIfom60cWltuhn0ocnRcLez7XJ1CvGKE%2FlYYOTG6doN6s2&X-Amz-Signature=e23c81218ded740e898232594ffef918f6eb310a3fac6f1bb065388f537cbe97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGL2IMUG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWUJd8ma3uej%2F%2BSs64GF%2BbCegVhH9iQ%2BeQy%2FBVERnKXgIhAMghq%2FoNYEeIWmFRMKa18EjmeyBpVuDtpVvm%2BXjzRKsyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE4Ybeh%2Be6gxG0TFAq3ANSiZOc1wM2MqmUNcmPb%2FQzOrlCXByr3DhKHEgWc7T%2F69Xc8%2BXaM%2FIdQWpuYHmmgXVR%2F%2FzgnBRLB9aDXjCyw7%2BMw8SkLZAsVfDNkfsnz0X%2BjnaoZteeKVtEEy44XJsUpXLDyej%2BQhOVQWHau1k5bWET8qsyQOJGSNKnW8BB1TtX%2Fx6fnalWnLg8WapdHyst2RVUXdw1OnAVB9yBWdd87hthE7Mfjl8ccDceMUMYtRWFlmIx39gvbQgyJrJd3hrjnzN%2F2BzBWIZzS17s57IhQroIpweMV3PRjZmfheh3Zv8nbZaZKklTs11%2BSo55kwe67%2FVt%2BEiaD5%2BFzuXJXNFQ2wVzwVXZi6Kl40%2BwBbSlmPWB%2F17YFxvsUULmvZXY9GE8AfGrdkJFB1Xsy25RUSx6eQs1QEs8IzhMWZBD6SLOp9fi4ZcuiLoLHBq9psuaixG9zXmdZgWiXuWvYXAypwa81FSXx3%2BtIw06SM1z1UeHYSnYz8p1PPMMjkxRc50OC2B2D3v5MXS6bCzDhP4tr%2BLsfF7uDeXzcAg%2BBtfTT%2Fr1NqqkfieYEEoYmt6s%2BK4Mx0XE%2B2lL5%2Fxq9OATTpS6dzPWy9NVY2WPa1B9bj7qAEPlAvowZbLTVgW9zl5ka7982TC8ibPEBjqkATWAzctQgO8nk34FgVV0tXFPTgFCpru1ylZGkDfEnoW%2BCSYAQxLex5eBT5UQhMH8mC7ibjOR9WaKPp%2BuYkUFYtNQ6q0TksKqG5O4%2BGmyfgKKhLitDOK%2Fow5Ej%2BWOm0xPhDd0CIH%2BEVwNK6AfDg3HTuWgG5m9xNior%2Bl7LBfHvKxgkLUIfom60cWltuhn0ocnRcLez7XJ1CvGKE%2FlYYOTG6doN6s2&X-Amz-Signature=e4537a2df614bbf44487c48569718a11b199591d02d2ef8b550250aebcde2bc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGL2IMUG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWUJd8ma3uej%2F%2BSs64GF%2BbCegVhH9iQ%2BeQy%2FBVERnKXgIhAMghq%2FoNYEeIWmFRMKa18EjmeyBpVuDtpVvm%2BXjzRKsyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE4Ybeh%2Be6gxG0TFAq3ANSiZOc1wM2MqmUNcmPb%2FQzOrlCXByr3DhKHEgWc7T%2F69Xc8%2BXaM%2FIdQWpuYHmmgXVR%2F%2FzgnBRLB9aDXjCyw7%2BMw8SkLZAsVfDNkfsnz0X%2BjnaoZteeKVtEEy44XJsUpXLDyej%2BQhOVQWHau1k5bWET8qsyQOJGSNKnW8BB1TtX%2Fx6fnalWnLg8WapdHyst2RVUXdw1OnAVB9yBWdd87hthE7Mfjl8ccDceMUMYtRWFlmIx39gvbQgyJrJd3hrjnzN%2F2BzBWIZzS17s57IhQroIpweMV3PRjZmfheh3Zv8nbZaZKklTs11%2BSo55kwe67%2FVt%2BEiaD5%2BFzuXJXNFQ2wVzwVXZi6Kl40%2BwBbSlmPWB%2F17YFxvsUULmvZXY9GE8AfGrdkJFB1Xsy25RUSx6eQs1QEs8IzhMWZBD6SLOp9fi4ZcuiLoLHBq9psuaixG9zXmdZgWiXuWvYXAypwa81FSXx3%2BtIw06SM1z1UeHYSnYz8p1PPMMjkxRc50OC2B2D3v5MXS6bCzDhP4tr%2BLsfF7uDeXzcAg%2BBtfTT%2Fr1NqqkfieYEEoYmt6s%2BK4Mx0XE%2B2lL5%2Fxq9OATTpS6dzPWy9NVY2WPa1B9bj7qAEPlAvowZbLTVgW9zl5ka7982TC8ibPEBjqkATWAzctQgO8nk34FgVV0tXFPTgFCpru1ylZGkDfEnoW%2BCSYAQxLex5eBT5UQhMH8mC7ibjOR9WaKPp%2BuYkUFYtNQ6q0TksKqG5O4%2BGmyfgKKhLitDOK%2Fow5Ej%2BWOm0xPhDd0CIH%2BEVwNK6AfDg3HTuWgG5m9xNior%2Bl7LBfHvKxgkLUIfom60cWltuhn0ocnRcLez7XJ1CvGKE%2FlYYOTG6doN6s2&X-Amz-Signature=2eac64937788999a0f00b2d14dad8f436e9746962e6a77a6c215a4d08f0f3f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGL2IMUG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWUJd8ma3uej%2F%2BSs64GF%2BbCegVhH9iQ%2BeQy%2FBVERnKXgIhAMghq%2FoNYEeIWmFRMKa18EjmeyBpVuDtpVvm%2BXjzRKsyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE4Ybeh%2Be6gxG0TFAq3ANSiZOc1wM2MqmUNcmPb%2FQzOrlCXByr3DhKHEgWc7T%2F69Xc8%2BXaM%2FIdQWpuYHmmgXVR%2F%2FzgnBRLB9aDXjCyw7%2BMw8SkLZAsVfDNkfsnz0X%2BjnaoZteeKVtEEy44XJsUpXLDyej%2BQhOVQWHau1k5bWET8qsyQOJGSNKnW8BB1TtX%2Fx6fnalWnLg8WapdHyst2RVUXdw1OnAVB9yBWdd87hthE7Mfjl8ccDceMUMYtRWFlmIx39gvbQgyJrJd3hrjnzN%2F2BzBWIZzS17s57IhQroIpweMV3PRjZmfheh3Zv8nbZaZKklTs11%2BSo55kwe67%2FVt%2BEiaD5%2BFzuXJXNFQ2wVzwVXZi6Kl40%2BwBbSlmPWB%2F17YFxvsUULmvZXY9GE8AfGrdkJFB1Xsy25RUSx6eQs1QEs8IzhMWZBD6SLOp9fi4ZcuiLoLHBq9psuaixG9zXmdZgWiXuWvYXAypwa81FSXx3%2BtIw06SM1z1UeHYSnYz8p1PPMMjkxRc50OC2B2D3v5MXS6bCzDhP4tr%2BLsfF7uDeXzcAg%2BBtfTT%2Fr1NqqkfieYEEoYmt6s%2BK4Mx0XE%2B2lL5%2Fxq9OATTpS6dzPWy9NVY2WPa1B9bj7qAEPlAvowZbLTVgW9zl5ka7982TC8ibPEBjqkATWAzctQgO8nk34FgVV0tXFPTgFCpru1ylZGkDfEnoW%2BCSYAQxLex5eBT5UQhMH8mC7ibjOR9WaKPp%2BuYkUFYtNQ6q0TksKqG5O4%2BGmyfgKKhLitDOK%2Fow5Ej%2BWOm0xPhDd0CIH%2BEVwNK6AfDg3HTuWgG5m9xNior%2Bl7LBfHvKxgkLUIfom60cWltuhn0ocnRcLez7XJ1CvGKE%2FlYYOTG6doN6s2&X-Amz-Signature=d777ce15ef7e88cdc31befa1da34b212c91ee64ea4b69090fdb51e044b8edc74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGL2IMUG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWUJd8ma3uej%2F%2BSs64GF%2BbCegVhH9iQ%2BeQy%2FBVERnKXgIhAMghq%2FoNYEeIWmFRMKa18EjmeyBpVuDtpVvm%2BXjzRKsyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE4Ybeh%2Be6gxG0TFAq3ANSiZOc1wM2MqmUNcmPb%2FQzOrlCXByr3DhKHEgWc7T%2F69Xc8%2BXaM%2FIdQWpuYHmmgXVR%2F%2FzgnBRLB9aDXjCyw7%2BMw8SkLZAsVfDNkfsnz0X%2BjnaoZteeKVtEEy44XJsUpXLDyej%2BQhOVQWHau1k5bWET8qsyQOJGSNKnW8BB1TtX%2Fx6fnalWnLg8WapdHyst2RVUXdw1OnAVB9yBWdd87hthE7Mfjl8ccDceMUMYtRWFlmIx39gvbQgyJrJd3hrjnzN%2F2BzBWIZzS17s57IhQroIpweMV3PRjZmfheh3Zv8nbZaZKklTs11%2BSo55kwe67%2FVt%2BEiaD5%2BFzuXJXNFQ2wVzwVXZi6Kl40%2BwBbSlmPWB%2F17YFxvsUULmvZXY9GE8AfGrdkJFB1Xsy25RUSx6eQs1QEs8IzhMWZBD6SLOp9fi4ZcuiLoLHBq9psuaixG9zXmdZgWiXuWvYXAypwa81FSXx3%2BtIw06SM1z1UeHYSnYz8p1PPMMjkxRc50OC2B2D3v5MXS6bCzDhP4tr%2BLsfF7uDeXzcAg%2BBtfTT%2Fr1NqqkfieYEEoYmt6s%2BK4Mx0XE%2B2lL5%2Fxq9OATTpS6dzPWy9NVY2WPa1B9bj7qAEPlAvowZbLTVgW9zl5ka7982TC8ibPEBjqkATWAzctQgO8nk34FgVV0tXFPTgFCpru1ylZGkDfEnoW%2BCSYAQxLex5eBT5UQhMH8mC7ibjOR9WaKPp%2BuYkUFYtNQ6q0TksKqG5O4%2BGmyfgKKhLitDOK%2Fow5Ej%2BWOm0xPhDd0CIH%2BEVwNK6AfDg3HTuWgG5m9xNior%2Bl7LBfHvKxgkLUIfom60cWltuhn0ocnRcLez7XJ1CvGKE%2FlYYOTG6doN6s2&X-Amz-Signature=b3f074b4cbdfc0ff9a15c3c400538cd8190550ae11a709393f7f07081ae2b8e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGL2IMUG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWUJd8ma3uej%2F%2BSs64GF%2BbCegVhH9iQ%2BeQy%2FBVERnKXgIhAMghq%2FoNYEeIWmFRMKa18EjmeyBpVuDtpVvm%2BXjzRKsyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE4Ybeh%2Be6gxG0TFAq3ANSiZOc1wM2MqmUNcmPb%2FQzOrlCXByr3DhKHEgWc7T%2F69Xc8%2BXaM%2FIdQWpuYHmmgXVR%2F%2FzgnBRLB9aDXjCyw7%2BMw8SkLZAsVfDNkfsnz0X%2BjnaoZteeKVtEEy44XJsUpXLDyej%2BQhOVQWHau1k5bWET8qsyQOJGSNKnW8BB1TtX%2Fx6fnalWnLg8WapdHyst2RVUXdw1OnAVB9yBWdd87hthE7Mfjl8ccDceMUMYtRWFlmIx39gvbQgyJrJd3hrjnzN%2F2BzBWIZzS17s57IhQroIpweMV3PRjZmfheh3Zv8nbZaZKklTs11%2BSo55kwe67%2FVt%2BEiaD5%2BFzuXJXNFQ2wVzwVXZi6Kl40%2BwBbSlmPWB%2F17YFxvsUULmvZXY9GE8AfGrdkJFB1Xsy25RUSx6eQs1QEs8IzhMWZBD6SLOp9fi4ZcuiLoLHBq9psuaixG9zXmdZgWiXuWvYXAypwa81FSXx3%2BtIw06SM1z1UeHYSnYz8p1PPMMjkxRc50OC2B2D3v5MXS6bCzDhP4tr%2BLsfF7uDeXzcAg%2BBtfTT%2Fr1NqqkfieYEEoYmt6s%2BK4Mx0XE%2B2lL5%2Fxq9OATTpS6dzPWy9NVY2WPa1B9bj7qAEPlAvowZbLTVgW9zl5ka7982TC8ibPEBjqkATWAzctQgO8nk34FgVV0tXFPTgFCpru1ylZGkDfEnoW%2BCSYAQxLex5eBT5UQhMH8mC7ibjOR9WaKPp%2BuYkUFYtNQ6q0TksKqG5O4%2BGmyfgKKhLitDOK%2Fow5Ej%2BWOm0xPhDd0CIH%2BEVwNK6AfDg3HTuWgG5m9xNior%2Bl7LBfHvKxgkLUIfom60cWltuhn0ocnRcLez7XJ1CvGKE%2FlYYOTG6doN6s2&X-Amz-Signature=bc39626a3efcf5fd36594511e4e1a89a9ad414cf2715047f0670c9c2af5634c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGL2IMUG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWUJd8ma3uej%2F%2BSs64GF%2BbCegVhH9iQ%2BeQy%2FBVERnKXgIhAMghq%2FoNYEeIWmFRMKa18EjmeyBpVuDtpVvm%2BXjzRKsyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE4Ybeh%2Be6gxG0TFAq3ANSiZOc1wM2MqmUNcmPb%2FQzOrlCXByr3DhKHEgWc7T%2F69Xc8%2BXaM%2FIdQWpuYHmmgXVR%2F%2FzgnBRLB9aDXjCyw7%2BMw8SkLZAsVfDNkfsnz0X%2BjnaoZteeKVtEEy44XJsUpXLDyej%2BQhOVQWHau1k5bWET8qsyQOJGSNKnW8BB1TtX%2Fx6fnalWnLg8WapdHyst2RVUXdw1OnAVB9yBWdd87hthE7Mfjl8ccDceMUMYtRWFlmIx39gvbQgyJrJd3hrjnzN%2F2BzBWIZzS17s57IhQroIpweMV3PRjZmfheh3Zv8nbZaZKklTs11%2BSo55kwe67%2FVt%2BEiaD5%2BFzuXJXNFQ2wVzwVXZi6Kl40%2BwBbSlmPWB%2F17YFxvsUULmvZXY9GE8AfGrdkJFB1Xsy25RUSx6eQs1QEs8IzhMWZBD6SLOp9fi4ZcuiLoLHBq9psuaixG9zXmdZgWiXuWvYXAypwa81FSXx3%2BtIw06SM1z1UeHYSnYz8p1PPMMjkxRc50OC2B2D3v5MXS6bCzDhP4tr%2BLsfF7uDeXzcAg%2BBtfTT%2Fr1NqqkfieYEEoYmt6s%2BK4Mx0XE%2B2lL5%2Fxq9OATTpS6dzPWy9NVY2WPa1B9bj7qAEPlAvowZbLTVgW9zl5ka7982TC8ibPEBjqkATWAzctQgO8nk34FgVV0tXFPTgFCpru1ylZGkDfEnoW%2BCSYAQxLex5eBT5UQhMH8mC7ibjOR9WaKPp%2BuYkUFYtNQ6q0TksKqG5O4%2BGmyfgKKhLitDOK%2Fow5Ej%2BWOm0xPhDd0CIH%2BEVwNK6AfDg3HTuWgG5m9xNior%2Bl7LBfHvKxgkLUIfom60cWltuhn0ocnRcLez7XJ1CvGKE%2FlYYOTG6doN6s2&X-Amz-Signature=72e7607dd840855f76827c44b1191f51062ce2b5d85822574299a41017dd3d2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGL2IMUG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWUJd8ma3uej%2F%2BSs64GF%2BbCegVhH9iQ%2BeQy%2FBVERnKXgIhAMghq%2FoNYEeIWmFRMKa18EjmeyBpVuDtpVvm%2BXjzRKsyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE4Ybeh%2Be6gxG0TFAq3ANSiZOc1wM2MqmUNcmPb%2FQzOrlCXByr3DhKHEgWc7T%2F69Xc8%2BXaM%2FIdQWpuYHmmgXVR%2F%2FzgnBRLB9aDXjCyw7%2BMw8SkLZAsVfDNkfsnz0X%2BjnaoZteeKVtEEy44XJsUpXLDyej%2BQhOVQWHau1k5bWET8qsyQOJGSNKnW8BB1TtX%2Fx6fnalWnLg8WapdHyst2RVUXdw1OnAVB9yBWdd87hthE7Mfjl8ccDceMUMYtRWFlmIx39gvbQgyJrJd3hrjnzN%2F2BzBWIZzS17s57IhQroIpweMV3PRjZmfheh3Zv8nbZaZKklTs11%2BSo55kwe67%2FVt%2BEiaD5%2BFzuXJXNFQ2wVzwVXZi6Kl40%2BwBbSlmPWB%2F17YFxvsUULmvZXY9GE8AfGrdkJFB1Xsy25RUSx6eQs1QEs8IzhMWZBD6SLOp9fi4ZcuiLoLHBq9psuaixG9zXmdZgWiXuWvYXAypwa81FSXx3%2BtIw06SM1z1UeHYSnYz8p1PPMMjkxRc50OC2B2D3v5MXS6bCzDhP4tr%2BLsfF7uDeXzcAg%2BBtfTT%2Fr1NqqkfieYEEoYmt6s%2BK4Mx0XE%2B2lL5%2Fxq9OATTpS6dzPWy9NVY2WPa1B9bj7qAEPlAvowZbLTVgW9zl5ka7982TC8ibPEBjqkATWAzctQgO8nk34FgVV0tXFPTgFCpru1ylZGkDfEnoW%2BCSYAQxLex5eBT5UQhMH8mC7ibjOR9WaKPp%2BuYkUFYtNQ6q0TksKqG5O4%2BGmyfgKKhLitDOK%2Fow5Ej%2BWOm0xPhDd0CIH%2BEVwNK6AfDg3HTuWgG5m9xNior%2Bl7LBfHvKxgkLUIfom60cWltuhn0ocnRcLez7XJ1CvGKE%2FlYYOTG6doN6s2&X-Amz-Signature=0ddff66675c4abf79f12f5fb6671406cd68bd3667f334d2bb34b95da1ce21e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGL2IMUG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWUJd8ma3uej%2F%2BSs64GF%2BbCegVhH9iQ%2BeQy%2FBVERnKXgIhAMghq%2FoNYEeIWmFRMKa18EjmeyBpVuDtpVvm%2BXjzRKsyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE4Ybeh%2Be6gxG0TFAq3ANSiZOc1wM2MqmUNcmPb%2FQzOrlCXByr3DhKHEgWc7T%2F69Xc8%2BXaM%2FIdQWpuYHmmgXVR%2F%2FzgnBRLB9aDXjCyw7%2BMw8SkLZAsVfDNkfsnz0X%2BjnaoZteeKVtEEy44XJsUpXLDyej%2BQhOVQWHau1k5bWET8qsyQOJGSNKnW8BB1TtX%2Fx6fnalWnLg8WapdHyst2RVUXdw1OnAVB9yBWdd87hthE7Mfjl8ccDceMUMYtRWFlmIx39gvbQgyJrJd3hrjnzN%2F2BzBWIZzS17s57IhQroIpweMV3PRjZmfheh3Zv8nbZaZKklTs11%2BSo55kwe67%2FVt%2BEiaD5%2BFzuXJXNFQ2wVzwVXZi6Kl40%2BwBbSlmPWB%2F17YFxvsUULmvZXY9GE8AfGrdkJFB1Xsy25RUSx6eQs1QEs8IzhMWZBD6SLOp9fi4ZcuiLoLHBq9psuaixG9zXmdZgWiXuWvYXAypwa81FSXx3%2BtIw06SM1z1UeHYSnYz8p1PPMMjkxRc50OC2B2D3v5MXS6bCzDhP4tr%2BLsfF7uDeXzcAg%2BBtfTT%2Fr1NqqkfieYEEoYmt6s%2BK4Mx0XE%2B2lL5%2Fxq9OATTpS6dzPWy9NVY2WPa1B9bj7qAEPlAvowZbLTVgW9zl5ka7982TC8ibPEBjqkATWAzctQgO8nk34FgVV0tXFPTgFCpru1ylZGkDfEnoW%2BCSYAQxLex5eBT5UQhMH8mC7ibjOR9WaKPp%2BuYkUFYtNQ6q0TksKqG5O4%2BGmyfgKKhLitDOK%2Fow5Ej%2BWOm0xPhDd0CIH%2BEVwNK6AfDg3HTuWgG5m9xNior%2Bl7LBfHvKxgkLUIfom60cWltuhn0ocnRcLez7XJ1CvGKE%2FlYYOTG6doN6s2&X-Amz-Signature=50a064e8645598bdb2338152bc4fec8e278a7803ccf71dd43fb53197dff63c8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGL2IMUG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWUJd8ma3uej%2F%2BSs64GF%2BbCegVhH9iQ%2BeQy%2FBVERnKXgIhAMghq%2FoNYEeIWmFRMKa18EjmeyBpVuDtpVvm%2BXjzRKsyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE4Ybeh%2Be6gxG0TFAq3ANSiZOc1wM2MqmUNcmPb%2FQzOrlCXByr3DhKHEgWc7T%2F69Xc8%2BXaM%2FIdQWpuYHmmgXVR%2F%2FzgnBRLB9aDXjCyw7%2BMw8SkLZAsVfDNkfsnz0X%2BjnaoZteeKVtEEy44XJsUpXLDyej%2BQhOVQWHau1k5bWET8qsyQOJGSNKnW8BB1TtX%2Fx6fnalWnLg8WapdHyst2RVUXdw1OnAVB9yBWdd87hthE7Mfjl8ccDceMUMYtRWFlmIx39gvbQgyJrJd3hrjnzN%2F2BzBWIZzS17s57IhQroIpweMV3PRjZmfheh3Zv8nbZaZKklTs11%2BSo55kwe67%2FVt%2BEiaD5%2BFzuXJXNFQ2wVzwVXZi6Kl40%2BwBbSlmPWB%2F17YFxvsUULmvZXY9GE8AfGrdkJFB1Xsy25RUSx6eQs1QEs8IzhMWZBD6SLOp9fi4ZcuiLoLHBq9psuaixG9zXmdZgWiXuWvYXAypwa81FSXx3%2BtIw06SM1z1UeHYSnYz8p1PPMMjkxRc50OC2B2D3v5MXS6bCzDhP4tr%2BLsfF7uDeXzcAg%2BBtfTT%2Fr1NqqkfieYEEoYmt6s%2BK4Mx0XE%2B2lL5%2Fxq9OATTpS6dzPWy9NVY2WPa1B9bj7qAEPlAvowZbLTVgW9zl5ka7982TC8ibPEBjqkATWAzctQgO8nk34FgVV0tXFPTgFCpru1ylZGkDfEnoW%2BCSYAQxLex5eBT5UQhMH8mC7ibjOR9WaKPp%2BuYkUFYtNQ6q0TksKqG5O4%2BGmyfgKKhLitDOK%2Fow5Ej%2BWOm0xPhDd0CIH%2BEVwNK6AfDg3HTuWgG5m9xNior%2Bl7LBfHvKxgkLUIfom60cWltuhn0ocnRcLez7XJ1CvGKE%2FlYYOTG6doN6s2&X-Amz-Signature=2a707caccdb924eb9f5bc4883573a2d28ef07c2821952768ace64471cea1f088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGL2IMUG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWUJd8ma3uej%2F%2BSs64GF%2BbCegVhH9iQ%2BeQy%2FBVERnKXgIhAMghq%2FoNYEeIWmFRMKa18EjmeyBpVuDtpVvm%2BXjzRKsyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE4Ybeh%2Be6gxG0TFAq3ANSiZOc1wM2MqmUNcmPb%2FQzOrlCXByr3DhKHEgWc7T%2F69Xc8%2BXaM%2FIdQWpuYHmmgXVR%2F%2FzgnBRLB9aDXjCyw7%2BMw8SkLZAsVfDNkfsnz0X%2BjnaoZteeKVtEEy44XJsUpXLDyej%2BQhOVQWHau1k5bWET8qsyQOJGSNKnW8BB1TtX%2Fx6fnalWnLg8WapdHyst2RVUXdw1OnAVB9yBWdd87hthE7Mfjl8ccDceMUMYtRWFlmIx39gvbQgyJrJd3hrjnzN%2F2BzBWIZzS17s57IhQroIpweMV3PRjZmfheh3Zv8nbZaZKklTs11%2BSo55kwe67%2FVt%2BEiaD5%2BFzuXJXNFQ2wVzwVXZi6Kl40%2BwBbSlmPWB%2F17YFxvsUULmvZXY9GE8AfGrdkJFB1Xsy25RUSx6eQs1QEs8IzhMWZBD6SLOp9fi4ZcuiLoLHBq9psuaixG9zXmdZgWiXuWvYXAypwa81FSXx3%2BtIw06SM1z1UeHYSnYz8p1PPMMjkxRc50OC2B2D3v5MXS6bCzDhP4tr%2BLsfF7uDeXzcAg%2BBtfTT%2Fr1NqqkfieYEEoYmt6s%2BK4Mx0XE%2B2lL5%2Fxq9OATTpS6dzPWy9NVY2WPa1B9bj7qAEPlAvowZbLTVgW9zl5ka7982TC8ibPEBjqkATWAzctQgO8nk34FgVV0tXFPTgFCpru1ylZGkDfEnoW%2BCSYAQxLex5eBT5UQhMH8mC7ibjOR9WaKPp%2BuYkUFYtNQ6q0TksKqG5O4%2BGmyfgKKhLitDOK%2Fow5Ej%2BWOm0xPhDd0CIH%2BEVwNK6AfDg3HTuWgG5m9xNior%2Bl7LBfHvKxgkLUIfom60cWltuhn0ocnRcLez7XJ1CvGKE%2FlYYOTG6doN6s2&X-Amz-Signature=82f40925c7ebdd01212b881439510ce5803fd0a65903e938e1bea20c7f5e5b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGL2IMUG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWUJd8ma3uej%2F%2BSs64GF%2BbCegVhH9iQ%2BeQy%2FBVERnKXgIhAMghq%2FoNYEeIWmFRMKa18EjmeyBpVuDtpVvm%2BXjzRKsyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE4Ybeh%2Be6gxG0TFAq3ANSiZOc1wM2MqmUNcmPb%2FQzOrlCXByr3DhKHEgWc7T%2F69Xc8%2BXaM%2FIdQWpuYHmmgXVR%2F%2FzgnBRLB9aDXjCyw7%2BMw8SkLZAsVfDNkfsnz0X%2BjnaoZteeKVtEEy44XJsUpXLDyej%2BQhOVQWHau1k5bWET8qsyQOJGSNKnW8BB1TtX%2Fx6fnalWnLg8WapdHyst2RVUXdw1OnAVB9yBWdd87hthE7Mfjl8ccDceMUMYtRWFlmIx39gvbQgyJrJd3hrjnzN%2F2BzBWIZzS17s57IhQroIpweMV3PRjZmfheh3Zv8nbZaZKklTs11%2BSo55kwe67%2FVt%2BEiaD5%2BFzuXJXNFQ2wVzwVXZi6Kl40%2BwBbSlmPWB%2F17YFxvsUULmvZXY9GE8AfGrdkJFB1Xsy25RUSx6eQs1QEs8IzhMWZBD6SLOp9fi4ZcuiLoLHBq9psuaixG9zXmdZgWiXuWvYXAypwa81FSXx3%2BtIw06SM1z1UeHYSnYz8p1PPMMjkxRc50OC2B2D3v5MXS6bCzDhP4tr%2BLsfF7uDeXzcAg%2BBtfTT%2Fr1NqqkfieYEEoYmt6s%2BK4Mx0XE%2B2lL5%2Fxq9OATTpS6dzPWy9NVY2WPa1B9bj7qAEPlAvowZbLTVgW9zl5ka7982TC8ibPEBjqkATWAzctQgO8nk34FgVV0tXFPTgFCpru1ylZGkDfEnoW%2BCSYAQxLex5eBT5UQhMH8mC7ibjOR9WaKPp%2BuYkUFYtNQ6q0TksKqG5O4%2BGmyfgKKhLitDOK%2Fow5Ej%2BWOm0xPhDd0CIH%2BEVwNK6AfDg3HTuWgG5m9xNior%2Bl7LBfHvKxgkLUIfom60cWltuhn0ocnRcLez7XJ1CvGKE%2FlYYOTG6doN6s2&X-Amz-Signature=03c5bd972ae324f3122a3908468e79847613983e0ea8bd13c29a9bcfeb35ad2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGL2IMUG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWUJd8ma3uej%2F%2BSs64GF%2BbCegVhH9iQ%2BeQy%2FBVERnKXgIhAMghq%2FoNYEeIWmFRMKa18EjmeyBpVuDtpVvm%2BXjzRKsyKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE4Ybeh%2Be6gxG0TFAq3ANSiZOc1wM2MqmUNcmPb%2FQzOrlCXByr3DhKHEgWc7T%2F69Xc8%2BXaM%2FIdQWpuYHmmgXVR%2F%2FzgnBRLB9aDXjCyw7%2BMw8SkLZAsVfDNkfsnz0X%2BjnaoZteeKVtEEy44XJsUpXLDyej%2BQhOVQWHau1k5bWET8qsyQOJGSNKnW8BB1TtX%2Fx6fnalWnLg8WapdHyst2RVUXdw1OnAVB9yBWdd87hthE7Mfjl8ccDceMUMYtRWFlmIx39gvbQgyJrJd3hrjnzN%2F2BzBWIZzS17s57IhQroIpweMV3PRjZmfheh3Zv8nbZaZKklTs11%2BSo55kwe67%2FVt%2BEiaD5%2BFzuXJXNFQ2wVzwVXZi6Kl40%2BwBbSlmPWB%2F17YFxvsUULmvZXY9GE8AfGrdkJFB1Xsy25RUSx6eQs1QEs8IzhMWZBD6SLOp9fi4ZcuiLoLHBq9psuaixG9zXmdZgWiXuWvYXAypwa81FSXx3%2BtIw06SM1z1UeHYSnYz8p1PPMMjkxRc50OC2B2D3v5MXS6bCzDhP4tr%2BLsfF7uDeXzcAg%2BBtfTT%2Fr1NqqkfieYEEoYmt6s%2BK4Mx0XE%2B2lL5%2Fxq9OATTpS6dzPWy9NVY2WPa1B9bj7qAEPlAvowZbLTVgW9zl5ka7982TC8ibPEBjqkATWAzctQgO8nk34FgVV0tXFPTgFCpru1ylZGkDfEnoW%2BCSYAQxLex5eBT5UQhMH8mC7ibjOR9WaKPp%2BuYkUFYtNQ6q0TksKqG5O4%2BGmyfgKKhLitDOK%2Fow5Ej%2BWOm0xPhDd0CIH%2BEVwNK6AfDg3HTuWgG5m9xNior%2Bl7LBfHvKxgkLUIfom60cWltuhn0ocnRcLez7XJ1CvGKE%2FlYYOTG6doN6s2&X-Amz-Signature=68a13c7f967b4a2b54c59f1268c063297cadba22e4d2061f2500ac0d644baffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
