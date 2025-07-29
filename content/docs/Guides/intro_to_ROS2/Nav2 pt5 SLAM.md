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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAV3QFFD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAjpsPjIst%2FYBy5RKXYpRGEM52cNgQXJPjApZi5FxTZlAiBeceRfHA2JG8puWxB86sbSzvVALKdCSwk9hKfwOPRVziqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMZ8Hrnvss4x94KBBKtwDLIZXFr1Veituvg84Cphkf8wXAs50zE4wsRjSYgdjBBs523Rt5yDwfrIgX4PMSF5yGTJkq0KBB6zPI2fjdN0Ce95xzUW%2Bi00rdXKZl6GOtfZJPBjzRSjHyDLkmRF3JC9IcpOfLnuzJ6cjK7H8B4yschWRo4DqQCgpgvahgaueQQpefkndA1D6%2FfBlzWXWCqTm9guMbXDJIZVG639GXJEHFbZI8pZ44MzhJkO4e%2BC8AfDqQa%2Bk9Jy9gwldPby0cqaMoZzPm2IHlvJf12BNEGZU5kHwCnzRdTHVlmWUPwBKUtK6VS1K2eKcdHn5rFXe7hG1EMN9uSO%2FtWFa4SMiMKhKyBB5e12m3tObNdIrnCCObGygWYgaAq6pV%2BHRA5Sm4%2FvsbzWS%2FA7QSuuK9OBHNsMSiSXxdViefp5XJtVvNMaYcB2LY034sXBVMXCXHscg32l2tQunZfffp8LSQFDQUcrRgVO%2FOcX947G209wKqioPO0SkPeOGJpkyCeTaVNdZ74YY%2F1ps31Ah%2FmHWccePqmtfpANihF5QHk3rKHWzsxpwFa3rJqXlOJC%2BkA6FwzKXUPuCVZIz0fqux0eW9o%2ByJwRb79R59aaO1p38w%2B9fuR%2FzDpYf98DA6qRxAubQNhEwlbGixAY6pgEZLdFVhdWxQNJmDY82t8%2BCU5Qe%2FahMpMUTm%2FRK1el7lzl%2Buz5dmFfVuFZNSi6zkUASQvM0EMU1pyC%2B8dKVuHGzVrcAmfQ66UL6VNHcPyOl5kS2Bt%2F8lpQRL%2FZJNyDl%2F4%2Blw35H3QjIeJPyGpKQDLbnQOJ793yp2Bw%2BzMVpwd36n%2FOP9XheP747NxagkzubvCBzEGV1cj9Fg0lvmBDxSZurbxg2prL6&X-Amz-Signature=26f10c5a765077e2ca2d56d18e5f01fcf4acbf73afbad70aace94440ed3b31a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAV3QFFD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAjpsPjIst%2FYBy5RKXYpRGEM52cNgQXJPjApZi5FxTZlAiBeceRfHA2JG8puWxB86sbSzvVALKdCSwk9hKfwOPRVziqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMZ8Hrnvss4x94KBBKtwDLIZXFr1Veituvg84Cphkf8wXAs50zE4wsRjSYgdjBBs523Rt5yDwfrIgX4PMSF5yGTJkq0KBB6zPI2fjdN0Ce95xzUW%2Bi00rdXKZl6GOtfZJPBjzRSjHyDLkmRF3JC9IcpOfLnuzJ6cjK7H8B4yschWRo4DqQCgpgvahgaueQQpefkndA1D6%2FfBlzWXWCqTm9guMbXDJIZVG639GXJEHFbZI8pZ44MzhJkO4e%2BC8AfDqQa%2Bk9Jy9gwldPby0cqaMoZzPm2IHlvJf12BNEGZU5kHwCnzRdTHVlmWUPwBKUtK6VS1K2eKcdHn5rFXe7hG1EMN9uSO%2FtWFa4SMiMKhKyBB5e12m3tObNdIrnCCObGygWYgaAq6pV%2BHRA5Sm4%2FvsbzWS%2FA7QSuuK9OBHNsMSiSXxdViefp5XJtVvNMaYcB2LY034sXBVMXCXHscg32l2tQunZfffp8LSQFDQUcrRgVO%2FOcX947G209wKqioPO0SkPeOGJpkyCeTaVNdZ74YY%2F1ps31Ah%2FmHWccePqmtfpANihF5QHk3rKHWzsxpwFa3rJqXlOJC%2BkA6FwzKXUPuCVZIz0fqux0eW9o%2ByJwRb79R59aaO1p38w%2B9fuR%2FzDpYf98DA6qRxAubQNhEwlbGixAY6pgEZLdFVhdWxQNJmDY82t8%2BCU5Qe%2FahMpMUTm%2FRK1el7lzl%2Buz5dmFfVuFZNSi6zkUASQvM0EMU1pyC%2B8dKVuHGzVrcAmfQ66UL6VNHcPyOl5kS2Bt%2F8lpQRL%2FZJNyDl%2F4%2Blw35H3QjIeJPyGpKQDLbnQOJ793yp2Bw%2BzMVpwd36n%2FOP9XheP747NxagkzubvCBzEGV1cj9Fg0lvmBDxSZurbxg2prL6&X-Amz-Signature=0c236d2f8d136239a395ce300deb64bf5ad8b1a16d3501099b1efbb3e91462b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAV3QFFD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAjpsPjIst%2FYBy5RKXYpRGEM52cNgQXJPjApZi5FxTZlAiBeceRfHA2JG8puWxB86sbSzvVALKdCSwk9hKfwOPRVziqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMZ8Hrnvss4x94KBBKtwDLIZXFr1Veituvg84Cphkf8wXAs50zE4wsRjSYgdjBBs523Rt5yDwfrIgX4PMSF5yGTJkq0KBB6zPI2fjdN0Ce95xzUW%2Bi00rdXKZl6GOtfZJPBjzRSjHyDLkmRF3JC9IcpOfLnuzJ6cjK7H8B4yschWRo4DqQCgpgvahgaueQQpefkndA1D6%2FfBlzWXWCqTm9guMbXDJIZVG639GXJEHFbZI8pZ44MzhJkO4e%2BC8AfDqQa%2Bk9Jy9gwldPby0cqaMoZzPm2IHlvJf12BNEGZU5kHwCnzRdTHVlmWUPwBKUtK6VS1K2eKcdHn5rFXe7hG1EMN9uSO%2FtWFa4SMiMKhKyBB5e12m3tObNdIrnCCObGygWYgaAq6pV%2BHRA5Sm4%2FvsbzWS%2FA7QSuuK9OBHNsMSiSXxdViefp5XJtVvNMaYcB2LY034sXBVMXCXHscg32l2tQunZfffp8LSQFDQUcrRgVO%2FOcX947G209wKqioPO0SkPeOGJpkyCeTaVNdZ74YY%2F1ps31Ah%2FmHWccePqmtfpANihF5QHk3rKHWzsxpwFa3rJqXlOJC%2BkA6FwzKXUPuCVZIz0fqux0eW9o%2ByJwRb79R59aaO1p38w%2B9fuR%2FzDpYf98DA6qRxAubQNhEwlbGixAY6pgEZLdFVhdWxQNJmDY82t8%2BCU5Qe%2FahMpMUTm%2FRK1el7lzl%2Buz5dmFfVuFZNSi6zkUASQvM0EMU1pyC%2B8dKVuHGzVrcAmfQ66UL6VNHcPyOl5kS2Bt%2F8lpQRL%2FZJNyDl%2F4%2Blw35H3QjIeJPyGpKQDLbnQOJ793yp2Bw%2BzMVpwd36n%2FOP9XheP747NxagkzubvCBzEGV1cj9Fg0lvmBDxSZurbxg2prL6&X-Amz-Signature=31f7252e4377fa43a15bbc044ee706156ecf75153683680d00d7e0ba8893d52d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAV3QFFD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAjpsPjIst%2FYBy5RKXYpRGEM52cNgQXJPjApZi5FxTZlAiBeceRfHA2JG8puWxB86sbSzvVALKdCSwk9hKfwOPRVziqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMZ8Hrnvss4x94KBBKtwDLIZXFr1Veituvg84Cphkf8wXAs50zE4wsRjSYgdjBBs523Rt5yDwfrIgX4PMSF5yGTJkq0KBB6zPI2fjdN0Ce95xzUW%2Bi00rdXKZl6GOtfZJPBjzRSjHyDLkmRF3JC9IcpOfLnuzJ6cjK7H8B4yschWRo4DqQCgpgvahgaueQQpefkndA1D6%2FfBlzWXWCqTm9guMbXDJIZVG639GXJEHFbZI8pZ44MzhJkO4e%2BC8AfDqQa%2Bk9Jy9gwldPby0cqaMoZzPm2IHlvJf12BNEGZU5kHwCnzRdTHVlmWUPwBKUtK6VS1K2eKcdHn5rFXe7hG1EMN9uSO%2FtWFa4SMiMKhKyBB5e12m3tObNdIrnCCObGygWYgaAq6pV%2BHRA5Sm4%2FvsbzWS%2FA7QSuuK9OBHNsMSiSXxdViefp5XJtVvNMaYcB2LY034sXBVMXCXHscg32l2tQunZfffp8LSQFDQUcrRgVO%2FOcX947G209wKqioPO0SkPeOGJpkyCeTaVNdZ74YY%2F1ps31Ah%2FmHWccePqmtfpANihF5QHk3rKHWzsxpwFa3rJqXlOJC%2BkA6FwzKXUPuCVZIz0fqux0eW9o%2ByJwRb79R59aaO1p38w%2B9fuR%2FzDpYf98DA6qRxAubQNhEwlbGixAY6pgEZLdFVhdWxQNJmDY82t8%2BCU5Qe%2FahMpMUTm%2FRK1el7lzl%2Buz5dmFfVuFZNSi6zkUASQvM0EMU1pyC%2B8dKVuHGzVrcAmfQ66UL6VNHcPyOl5kS2Bt%2F8lpQRL%2FZJNyDl%2F4%2Blw35H3QjIeJPyGpKQDLbnQOJ793yp2Bw%2BzMVpwd36n%2FOP9XheP747NxagkzubvCBzEGV1cj9Fg0lvmBDxSZurbxg2prL6&X-Amz-Signature=dd9fda1c1ff88946fee61d02d97856c2b7a47187e2c8048c5ea36342d50f40f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAV3QFFD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAjpsPjIst%2FYBy5RKXYpRGEM52cNgQXJPjApZi5FxTZlAiBeceRfHA2JG8puWxB86sbSzvVALKdCSwk9hKfwOPRVziqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMZ8Hrnvss4x94KBBKtwDLIZXFr1Veituvg84Cphkf8wXAs50zE4wsRjSYgdjBBs523Rt5yDwfrIgX4PMSF5yGTJkq0KBB6zPI2fjdN0Ce95xzUW%2Bi00rdXKZl6GOtfZJPBjzRSjHyDLkmRF3JC9IcpOfLnuzJ6cjK7H8B4yschWRo4DqQCgpgvahgaueQQpefkndA1D6%2FfBlzWXWCqTm9guMbXDJIZVG639GXJEHFbZI8pZ44MzhJkO4e%2BC8AfDqQa%2Bk9Jy9gwldPby0cqaMoZzPm2IHlvJf12BNEGZU5kHwCnzRdTHVlmWUPwBKUtK6VS1K2eKcdHn5rFXe7hG1EMN9uSO%2FtWFa4SMiMKhKyBB5e12m3tObNdIrnCCObGygWYgaAq6pV%2BHRA5Sm4%2FvsbzWS%2FA7QSuuK9OBHNsMSiSXxdViefp5XJtVvNMaYcB2LY034sXBVMXCXHscg32l2tQunZfffp8LSQFDQUcrRgVO%2FOcX947G209wKqioPO0SkPeOGJpkyCeTaVNdZ74YY%2F1ps31Ah%2FmHWccePqmtfpANihF5QHk3rKHWzsxpwFa3rJqXlOJC%2BkA6FwzKXUPuCVZIz0fqux0eW9o%2ByJwRb79R59aaO1p38w%2B9fuR%2FzDpYf98DA6qRxAubQNhEwlbGixAY6pgEZLdFVhdWxQNJmDY82t8%2BCU5Qe%2FahMpMUTm%2FRK1el7lzl%2Buz5dmFfVuFZNSi6zkUASQvM0EMU1pyC%2B8dKVuHGzVrcAmfQ66UL6VNHcPyOl5kS2Bt%2F8lpQRL%2FZJNyDl%2F4%2Blw35H3QjIeJPyGpKQDLbnQOJ793yp2Bw%2BzMVpwd36n%2FOP9XheP747NxagkzubvCBzEGV1cj9Fg0lvmBDxSZurbxg2prL6&X-Amz-Signature=3f25070be4f44f940f1e3c42675807257d3f72b11c665c2d4f375e948939bad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAV3QFFD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAjpsPjIst%2FYBy5RKXYpRGEM52cNgQXJPjApZi5FxTZlAiBeceRfHA2JG8puWxB86sbSzvVALKdCSwk9hKfwOPRVziqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMZ8Hrnvss4x94KBBKtwDLIZXFr1Veituvg84Cphkf8wXAs50zE4wsRjSYgdjBBs523Rt5yDwfrIgX4PMSF5yGTJkq0KBB6zPI2fjdN0Ce95xzUW%2Bi00rdXKZl6GOtfZJPBjzRSjHyDLkmRF3JC9IcpOfLnuzJ6cjK7H8B4yschWRo4DqQCgpgvahgaueQQpefkndA1D6%2FfBlzWXWCqTm9guMbXDJIZVG639GXJEHFbZI8pZ44MzhJkO4e%2BC8AfDqQa%2Bk9Jy9gwldPby0cqaMoZzPm2IHlvJf12BNEGZU5kHwCnzRdTHVlmWUPwBKUtK6VS1K2eKcdHn5rFXe7hG1EMN9uSO%2FtWFa4SMiMKhKyBB5e12m3tObNdIrnCCObGygWYgaAq6pV%2BHRA5Sm4%2FvsbzWS%2FA7QSuuK9OBHNsMSiSXxdViefp5XJtVvNMaYcB2LY034sXBVMXCXHscg32l2tQunZfffp8LSQFDQUcrRgVO%2FOcX947G209wKqioPO0SkPeOGJpkyCeTaVNdZ74YY%2F1ps31Ah%2FmHWccePqmtfpANihF5QHk3rKHWzsxpwFa3rJqXlOJC%2BkA6FwzKXUPuCVZIz0fqux0eW9o%2ByJwRb79R59aaO1p38w%2B9fuR%2FzDpYf98DA6qRxAubQNhEwlbGixAY6pgEZLdFVhdWxQNJmDY82t8%2BCU5Qe%2FahMpMUTm%2FRK1el7lzl%2Buz5dmFfVuFZNSi6zkUASQvM0EMU1pyC%2B8dKVuHGzVrcAmfQ66UL6VNHcPyOl5kS2Bt%2F8lpQRL%2FZJNyDl%2F4%2Blw35H3QjIeJPyGpKQDLbnQOJ793yp2Bw%2BzMVpwd36n%2FOP9XheP747NxagkzubvCBzEGV1cj9Fg0lvmBDxSZurbxg2prL6&X-Amz-Signature=78384e95a063b2047ad61a76ee132745e1b34538058a35f8da0ad34512b698b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAV3QFFD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAjpsPjIst%2FYBy5RKXYpRGEM52cNgQXJPjApZi5FxTZlAiBeceRfHA2JG8puWxB86sbSzvVALKdCSwk9hKfwOPRVziqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMZ8Hrnvss4x94KBBKtwDLIZXFr1Veituvg84Cphkf8wXAs50zE4wsRjSYgdjBBs523Rt5yDwfrIgX4PMSF5yGTJkq0KBB6zPI2fjdN0Ce95xzUW%2Bi00rdXKZl6GOtfZJPBjzRSjHyDLkmRF3JC9IcpOfLnuzJ6cjK7H8B4yschWRo4DqQCgpgvahgaueQQpefkndA1D6%2FfBlzWXWCqTm9guMbXDJIZVG639GXJEHFbZI8pZ44MzhJkO4e%2BC8AfDqQa%2Bk9Jy9gwldPby0cqaMoZzPm2IHlvJf12BNEGZU5kHwCnzRdTHVlmWUPwBKUtK6VS1K2eKcdHn5rFXe7hG1EMN9uSO%2FtWFa4SMiMKhKyBB5e12m3tObNdIrnCCObGygWYgaAq6pV%2BHRA5Sm4%2FvsbzWS%2FA7QSuuK9OBHNsMSiSXxdViefp5XJtVvNMaYcB2LY034sXBVMXCXHscg32l2tQunZfffp8LSQFDQUcrRgVO%2FOcX947G209wKqioPO0SkPeOGJpkyCeTaVNdZ74YY%2F1ps31Ah%2FmHWccePqmtfpANihF5QHk3rKHWzsxpwFa3rJqXlOJC%2BkA6FwzKXUPuCVZIz0fqux0eW9o%2ByJwRb79R59aaO1p38w%2B9fuR%2FzDpYf98DA6qRxAubQNhEwlbGixAY6pgEZLdFVhdWxQNJmDY82t8%2BCU5Qe%2FahMpMUTm%2FRK1el7lzl%2Buz5dmFfVuFZNSi6zkUASQvM0EMU1pyC%2B8dKVuHGzVrcAmfQ66UL6VNHcPyOl5kS2Bt%2F8lpQRL%2FZJNyDl%2F4%2Blw35H3QjIeJPyGpKQDLbnQOJ793yp2Bw%2BzMVpwd36n%2FOP9XheP747NxagkzubvCBzEGV1cj9Fg0lvmBDxSZurbxg2prL6&X-Amz-Signature=0dbebe6e65e3f90086d5b017aca31173686f2f37de0bff1ae0cd732b3f62dd7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAV3QFFD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAjpsPjIst%2FYBy5RKXYpRGEM52cNgQXJPjApZi5FxTZlAiBeceRfHA2JG8puWxB86sbSzvVALKdCSwk9hKfwOPRVziqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMZ8Hrnvss4x94KBBKtwDLIZXFr1Veituvg84Cphkf8wXAs50zE4wsRjSYgdjBBs523Rt5yDwfrIgX4PMSF5yGTJkq0KBB6zPI2fjdN0Ce95xzUW%2Bi00rdXKZl6GOtfZJPBjzRSjHyDLkmRF3JC9IcpOfLnuzJ6cjK7H8B4yschWRo4DqQCgpgvahgaueQQpefkndA1D6%2FfBlzWXWCqTm9guMbXDJIZVG639GXJEHFbZI8pZ44MzhJkO4e%2BC8AfDqQa%2Bk9Jy9gwldPby0cqaMoZzPm2IHlvJf12BNEGZU5kHwCnzRdTHVlmWUPwBKUtK6VS1K2eKcdHn5rFXe7hG1EMN9uSO%2FtWFa4SMiMKhKyBB5e12m3tObNdIrnCCObGygWYgaAq6pV%2BHRA5Sm4%2FvsbzWS%2FA7QSuuK9OBHNsMSiSXxdViefp5XJtVvNMaYcB2LY034sXBVMXCXHscg32l2tQunZfffp8LSQFDQUcrRgVO%2FOcX947G209wKqioPO0SkPeOGJpkyCeTaVNdZ74YY%2F1ps31Ah%2FmHWccePqmtfpANihF5QHk3rKHWzsxpwFa3rJqXlOJC%2BkA6FwzKXUPuCVZIz0fqux0eW9o%2ByJwRb79R59aaO1p38w%2B9fuR%2FzDpYf98DA6qRxAubQNhEwlbGixAY6pgEZLdFVhdWxQNJmDY82t8%2BCU5Qe%2FahMpMUTm%2FRK1el7lzl%2Buz5dmFfVuFZNSi6zkUASQvM0EMU1pyC%2B8dKVuHGzVrcAmfQ66UL6VNHcPyOl5kS2Bt%2F8lpQRL%2FZJNyDl%2F4%2Blw35H3QjIeJPyGpKQDLbnQOJ793yp2Bw%2BzMVpwd36n%2FOP9XheP747NxagkzubvCBzEGV1cj9Fg0lvmBDxSZurbxg2prL6&X-Amz-Signature=b0911f17730308ddf929866f27ef1eb2e4a5278df172b2417e3bf0b1697b413e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAV3QFFD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAjpsPjIst%2FYBy5RKXYpRGEM52cNgQXJPjApZi5FxTZlAiBeceRfHA2JG8puWxB86sbSzvVALKdCSwk9hKfwOPRVziqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMZ8Hrnvss4x94KBBKtwDLIZXFr1Veituvg84Cphkf8wXAs50zE4wsRjSYgdjBBs523Rt5yDwfrIgX4PMSF5yGTJkq0KBB6zPI2fjdN0Ce95xzUW%2Bi00rdXKZl6GOtfZJPBjzRSjHyDLkmRF3JC9IcpOfLnuzJ6cjK7H8B4yschWRo4DqQCgpgvahgaueQQpefkndA1D6%2FfBlzWXWCqTm9guMbXDJIZVG639GXJEHFbZI8pZ44MzhJkO4e%2BC8AfDqQa%2Bk9Jy9gwldPby0cqaMoZzPm2IHlvJf12BNEGZU5kHwCnzRdTHVlmWUPwBKUtK6VS1K2eKcdHn5rFXe7hG1EMN9uSO%2FtWFa4SMiMKhKyBB5e12m3tObNdIrnCCObGygWYgaAq6pV%2BHRA5Sm4%2FvsbzWS%2FA7QSuuK9OBHNsMSiSXxdViefp5XJtVvNMaYcB2LY034sXBVMXCXHscg32l2tQunZfffp8LSQFDQUcrRgVO%2FOcX947G209wKqioPO0SkPeOGJpkyCeTaVNdZ74YY%2F1ps31Ah%2FmHWccePqmtfpANihF5QHk3rKHWzsxpwFa3rJqXlOJC%2BkA6FwzKXUPuCVZIz0fqux0eW9o%2ByJwRb79R59aaO1p38w%2B9fuR%2FzDpYf98DA6qRxAubQNhEwlbGixAY6pgEZLdFVhdWxQNJmDY82t8%2BCU5Qe%2FahMpMUTm%2FRK1el7lzl%2Buz5dmFfVuFZNSi6zkUASQvM0EMU1pyC%2B8dKVuHGzVrcAmfQ66UL6VNHcPyOl5kS2Bt%2F8lpQRL%2FZJNyDl%2F4%2Blw35H3QjIeJPyGpKQDLbnQOJ793yp2Bw%2BzMVpwd36n%2FOP9XheP747NxagkzubvCBzEGV1cj9Fg0lvmBDxSZurbxg2prL6&X-Amz-Signature=3fbffd9a0e1b2fa0cce6b3659b7494b34ce33be61810b172754abcaada5c5800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAV3QFFD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAjpsPjIst%2FYBy5RKXYpRGEM52cNgQXJPjApZi5FxTZlAiBeceRfHA2JG8puWxB86sbSzvVALKdCSwk9hKfwOPRVziqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMZ8Hrnvss4x94KBBKtwDLIZXFr1Veituvg84Cphkf8wXAs50zE4wsRjSYgdjBBs523Rt5yDwfrIgX4PMSF5yGTJkq0KBB6zPI2fjdN0Ce95xzUW%2Bi00rdXKZl6GOtfZJPBjzRSjHyDLkmRF3JC9IcpOfLnuzJ6cjK7H8B4yschWRo4DqQCgpgvahgaueQQpefkndA1D6%2FfBlzWXWCqTm9guMbXDJIZVG639GXJEHFbZI8pZ44MzhJkO4e%2BC8AfDqQa%2Bk9Jy9gwldPby0cqaMoZzPm2IHlvJf12BNEGZU5kHwCnzRdTHVlmWUPwBKUtK6VS1K2eKcdHn5rFXe7hG1EMN9uSO%2FtWFa4SMiMKhKyBB5e12m3tObNdIrnCCObGygWYgaAq6pV%2BHRA5Sm4%2FvsbzWS%2FA7QSuuK9OBHNsMSiSXxdViefp5XJtVvNMaYcB2LY034sXBVMXCXHscg32l2tQunZfffp8LSQFDQUcrRgVO%2FOcX947G209wKqioPO0SkPeOGJpkyCeTaVNdZ74YY%2F1ps31Ah%2FmHWccePqmtfpANihF5QHk3rKHWzsxpwFa3rJqXlOJC%2BkA6FwzKXUPuCVZIz0fqux0eW9o%2ByJwRb79R59aaO1p38w%2B9fuR%2FzDpYf98DA6qRxAubQNhEwlbGixAY6pgEZLdFVhdWxQNJmDY82t8%2BCU5Qe%2FahMpMUTm%2FRK1el7lzl%2Buz5dmFfVuFZNSi6zkUASQvM0EMU1pyC%2B8dKVuHGzVrcAmfQ66UL6VNHcPyOl5kS2Bt%2F8lpQRL%2FZJNyDl%2F4%2Blw35H3QjIeJPyGpKQDLbnQOJ793yp2Bw%2BzMVpwd36n%2FOP9XheP747NxagkzubvCBzEGV1cj9Fg0lvmBDxSZurbxg2prL6&X-Amz-Signature=a763dc639587ded147f20f7390669f66866798270b574df6309e39e1a0425838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAV3QFFD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAjpsPjIst%2FYBy5RKXYpRGEM52cNgQXJPjApZi5FxTZlAiBeceRfHA2JG8puWxB86sbSzvVALKdCSwk9hKfwOPRVziqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMZ8Hrnvss4x94KBBKtwDLIZXFr1Veituvg84Cphkf8wXAs50zE4wsRjSYgdjBBs523Rt5yDwfrIgX4PMSF5yGTJkq0KBB6zPI2fjdN0Ce95xzUW%2Bi00rdXKZl6GOtfZJPBjzRSjHyDLkmRF3JC9IcpOfLnuzJ6cjK7H8B4yschWRo4DqQCgpgvahgaueQQpefkndA1D6%2FfBlzWXWCqTm9guMbXDJIZVG639GXJEHFbZI8pZ44MzhJkO4e%2BC8AfDqQa%2Bk9Jy9gwldPby0cqaMoZzPm2IHlvJf12BNEGZU5kHwCnzRdTHVlmWUPwBKUtK6VS1K2eKcdHn5rFXe7hG1EMN9uSO%2FtWFa4SMiMKhKyBB5e12m3tObNdIrnCCObGygWYgaAq6pV%2BHRA5Sm4%2FvsbzWS%2FA7QSuuK9OBHNsMSiSXxdViefp5XJtVvNMaYcB2LY034sXBVMXCXHscg32l2tQunZfffp8LSQFDQUcrRgVO%2FOcX947G209wKqioPO0SkPeOGJpkyCeTaVNdZ74YY%2F1ps31Ah%2FmHWccePqmtfpANihF5QHk3rKHWzsxpwFa3rJqXlOJC%2BkA6FwzKXUPuCVZIz0fqux0eW9o%2ByJwRb79R59aaO1p38w%2B9fuR%2FzDpYf98DA6qRxAubQNhEwlbGixAY6pgEZLdFVhdWxQNJmDY82t8%2BCU5Qe%2FahMpMUTm%2FRK1el7lzl%2Buz5dmFfVuFZNSi6zkUASQvM0EMU1pyC%2B8dKVuHGzVrcAmfQ66UL6VNHcPyOl5kS2Bt%2F8lpQRL%2FZJNyDl%2F4%2Blw35H3QjIeJPyGpKQDLbnQOJ793yp2Bw%2BzMVpwd36n%2FOP9XheP747NxagkzubvCBzEGV1cj9Fg0lvmBDxSZurbxg2prL6&X-Amz-Signature=d300b8f90e9d2f98689d3a4972ec72cb98fe74ffbadfc57033dac531e95cd2ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAV3QFFD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAjpsPjIst%2FYBy5RKXYpRGEM52cNgQXJPjApZi5FxTZlAiBeceRfHA2JG8puWxB86sbSzvVALKdCSwk9hKfwOPRVziqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMZ8Hrnvss4x94KBBKtwDLIZXFr1Veituvg84Cphkf8wXAs50zE4wsRjSYgdjBBs523Rt5yDwfrIgX4PMSF5yGTJkq0KBB6zPI2fjdN0Ce95xzUW%2Bi00rdXKZl6GOtfZJPBjzRSjHyDLkmRF3JC9IcpOfLnuzJ6cjK7H8B4yschWRo4DqQCgpgvahgaueQQpefkndA1D6%2FfBlzWXWCqTm9guMbXDJIZVG639GXJEHFbZI8pZ44MzhJkO4e%2BC8AfDqQa%2Bk9Jy9gwldPby0cqaMoZzPm2IHlvJf12BNEGZU5kHwCnzRdTHVlmWUPwBKUtK6VS1K2eKcdHn5rFXe7hG1EMN9uSO%2FtWFa4SMiMKhKyBB5e12m3tObNdIrnCCObGygWYgaAq6pV%2BHRA5Sm4%2FvsbzWS%2FA7QSuuK9OBHNsMSiSXxdViefp5XJtVvNMaYcB2LY034sXBVMXCXHscg32l2tQunZfffp8LSQFDQUcrRgVO%2FOcX947G209wKqioPO0SkPeOGJpkyCeTaVNdZ74YY%2F1ps31Ah%2FmHWccePqmtfpANihF5QHk3rKHWzsxpwFa3rJqXlOJC%2BkA6FwzKXUPuCVZIz0fqux0eW9o%2ByJwRb79R59aaO1p38w%2B9fuR%2FzDpYf98DA6qRxAubQNhEwlbGixAY6pgEZLdFVhdWxQNJmDY82t8%2BCU5Qe%2FahMpMUTm%2FRK1el7lzl%2Buz5dmFfVuFZNSi6zkUASQvM0EMU1pyC%2B8dKVuHGzVrcAmfQ66UL6VNHcPyOl5kS2Bt%2F8lpQRL%2FZJNyDl%2F4%2Blw35H3QjIeJPyGpKQDLbnQOJ793yp2Bw%2BzMVpwd36n%2FOP9XheP747NxagkzubvCBzEGV1cj9Fg0lvmBDxSZurbxg2prL6&X-Amz-Signature=87805495459fdc56cf775656890f5efacc236c2cb41398d5486f1ee80c05a5cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAV3QFFD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAjpsPjIst%2FYBy5RKXYpRGEM52cNgQXJPjApZi5FxTZlAiBeceRfHA2JG8puWxB86sbSzvVALKdCSwk9hKfwOPRVziqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMZ8Hrnvss4x94KBBKtwDLIZXFr1Veituvg84Cphkf8wXAs50zE4wsRjSYgdjBBs523Rt5yDwfrIgX4PMSF5yGTJkq0KBB6zPI2fjdN0Ce95xzUW%2Bi00rdXKZl6GOtfZJPBjzRSjHyDLkmRF3JC9IcpOfLnuzJ6cjK7H8B4yschWRo4DqQCgpgvahgaueQQpefkndA1D6%2FfBlzWXWCqTm9guMbXDJIZVG639GXJEHFbZI8pZ44MzhJkO4e%2BC8AfDqQa%2Bk9Jy9gwldPby0cqaMoZzPm2IHlvJf12BNEGZU5kHwCnzRdTHVlmWUPwBKUtK6VS1K2eKcdHn5rFXe7hG1EMN9uSO%2FtWFa4SMiMKhKyBB5e12m3tObNdIrnCCObGygWYgaAq6pV%2BHRA5Sm4%2FvsbzWS%2FA7QSuuK9OBHNsMSiSXxdViefp5XJtVvNMaYcB2LY034sXBVMXCXHscg32l2tQunZfffp8LSQFDQUcrRgVO%2FOcX947G209wKqioPO0SkPeOGJpkyCeTaVNdZ74YY%2F1ps31Ah%2FmHWccePqmtfpANihF5QHk3rKHWzsxpwFa3rJqXlOJC%2BkA6FwzKXUPuCVZIz0fqux0eW9o%2ByJwRb79R59aaO1p38w%2B9fuR%2FzDpYf98DA6qRxAubQNhEwlbGixAY6pgEZLdFVhdWxQNJmDY82t8%2BCU5Qe%2FahMpMUTm%2FRK1el7lzl%2Buz5dmFfVuFZNSi6zkUASQvM0EMU1pyC%2B8dKVuHGzVrcAmfQ66UL6VNHcPyOl5kS2Bt%2F8lpQRL%2FZJNyDl%2F4%2Blw35H3QjIeJPyGpKQDLbnQOJ793yp2Bw%2BzMVpwd36n%2FOP9XheP747NxagkzubvCBzEGV1cj9Fg0lvmBDxSZurbxg2prL6&X-Amz-Signature=159a12726b17cfc913b2db0066ee1a0aa04a8e0e2c70e04856c7a5f7b4cfd90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
