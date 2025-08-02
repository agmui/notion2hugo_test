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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634U4YDCS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BJav6j33FEtdj7CWaJO4FrvJx6j92vd3OGR3aNepoEAiEA4846TTleKr8qm1ixpU%2B1ih2nGtDjWcmjDuYY39CcQWwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMzSh4%2Fz3tGAykHYCrcA1dYyoGAjgFJy3uUYETWOd8upHDSjizc2n7rWqU7%2FC64S7fNbf8brOa7Xg7csv79BAYzUOauY9FSf%2FmACrsTir1cyseyu3TzGN7wPgYx326ukEYJ1moJZn1oDFZgSosyJa3xv6h9lfYDcI2WY%2FqB9uBcWCKbo5%2FRWJf2%2B%2FWCZUXi%2FVxBMOQW5jSb4XVIuuv2ZsdP%2BUJ273ugbvjp40hEiIQDBLmre1YJx0LBGAc3vAPkQIJIu6V64FZkOiVjM3PkA5VRsrglvb4abwor5Cw8ZDzOXaojR9DLkpY2tmq9N7dZA8kLueNjVvCldmrlSdIqmxduuXe8ip7nrGNsqWSW9Mvl%2B9b7bXNpzighXLPISfls%2FhUZtb2j3eD27kGSas9Y9ArMvRgFrR4%2F1ctXHX0Eff4%2BQ%2F91Hrx%2FvdGghxYYC%2B3hViRp%2FvRtn%2BKVwQvmaf7WOd0LjVdlEPGF4lV9SdjzE%2F0dP1rFb2UtUGqLfW9CCMSqlqrXNh1BVn3Lat24zRrGKZBa%2BQgopIH2OIm61Px1xz7S93IqbcpvWlvsDN2%2BOELn8ux3evRo3NWMuNNr93BXgcyOleFLcqDr98WI2Q4KUMu81Zqb2TEZMeXY9nq0arylQOephmrhBjS%2FE4PHMKudtsQGOqUBceDRQn2UcjaHmRuuVJKSpgDRP1JIPCWwEf60%2FLxYy6geaLd7ygNSnljS3ISnRX0MHfVgGIqs2%2BFvxlo2DogUa5z0EHdhG6cs%2FvMElfQQ%2BflZT08hLu0saNuOwiv%2BYsSjxxS4n6sGXZW8QOLdaRDFrlqrig8Wi4NJDCFSKUm1LQnjjN%2FB0K5IQc7mvuSQyy05Inmp4q%2Fo1vMNi8%2BXVLplGBLLZrpD&X-Amz-Signature=722b934488f8a3865544dbbbcb54714d8e55775ccae78355390d85bb2f0dcd52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634U4YDCS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BJav6j33FEtdj7CWaJO4FrvJx6j92vd3OGR3aNepoEAiEA4846TTleKr8qm1ixpU%2B1ih2nGtDjWcmjDuYY39CcQWwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMzSh4%2Fz3tGAykHYCrcA1dYyoGAjgFJy3uUYETWOd8upHDSjizc2n7rWqU7%2FC64S7fNbf8brOa7Xg7csv79BAYzUOauY9FSf%2FmACrsTir1cyseyu3TzGN7wPgYx326ukEYJ1moJZn1oDFZgSosyJa3xv6h9lfYDcI2WY%2FqB9uBcWCKbo5%2FRWJf2%2B%2FWCZUXi%2FVxBMOQW5jSb4XVIuuv2ZsdP%2BUJ273ugbvjp40hEiIQDBLmre1YJx0LBGAc3vAPkQIJIu6V64FZkOiVjM3PkA5VRsrglvb4abwor5Cw8ZDzOXaojR9DLkpY2tmq9N7dZA8kLueNjVvCldmrlSdIqmxduuXe8ip7nrGNsqWSW9Mvl%2B9b7bXNpzighXLPISfls%2FhUZtb2j3eD27kGSas9Y9ArMvRgFrR4%2F1ctXHX0Eff4%2BQ%2F91Hrx%2FvdGghxYYC%2B3hViRp%2FvRtn%2BKVwQvmaf7WOd0LjVdlEPGF4lV9SdjzE%2F0dP1rFb2UtUGqLfW9CCMSqlqrXNh1BVn3Lat24zRrGKZBa%2BQgopIH2OIm61Px1xz7S93IqbcpvWlvsDN2%2BOELn8ux3evRo3NWMuNNr93BXgcyOleFLcqDr98WI2Q4KUMu81Zqb2TEZMeXY9nq0arylQOephmrhBjS%2FE4PHMKudtsQGOqUBceDRQn2UcjaHmRuuVJKSpgDRP1JIPCWwEf60%2FLxYy6geaLd7ygNSnljS3ISnRX0MHfVgGIqs2%2BFvxlo2DogUa5z0EHdhG6cs%2FvMElfQQ%2BflZT08hLu0saNuOwiv%2BYsSjxxS4n6sGXZW8QOLdaRDFrlqrig8Wi4NJDCFSKUm1LQnjjN%2FB0K5IQc7mvuSQyy05Inmp4q%2Fo1vMNi8%2BXVLplGBLLZrpD&X-Amz-Signature=cd45578c63e7c51bc3006cc37c9a470de64018e76eb9bdee2a34f8ab3e40758f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634U4YDCS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BJav6j33FEtdj7CWaJO4FrvJx6j92vd3OGR3aNepoEAiEA4846TTleKr8qm1ixpU%2B1ih2nGtDjWcmjDuYY39CcQWwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMzSh4%2Fz3tGAykHYCrcA1dYyoGAjgFJy3uUYETWOd8upHDSjizc2n7rWqU7%2FC64S7fNbf8brOa7Xg7csv79BAYzUOauY9FSf%2FmACrsTir1cyseyu3TzGN7wPgYx326ukEYJ1moJZn1oDFZgSosyJa3xv6h9lfYDcI2WY%2FqB9uBcWCKbo5%2FRWJf2%2B%2FWCZUXi%2FVxBMOQW5jSb4XVIuuv2ZsdP%2BUJ273ugbvjp40hEiIQDBLmre1YJx0LBGAc3vAPkQIJIu6V64FZkOiVjM3PkA5VRsrglvb4abwor5Cw8ZDzOXaojR9DLkpY2tmq9N7dZA8kLueNjVvCldmrlSdIqmxduuXe8ip7nrGNsqWSW9Mvl%2B9b7bXNpzighXLPISfls%2FhUZtb2j3eD27kGSas9Y9ArMvRgFrR4%2F1ctXHX0Eff4%2BQ%2F91Hrx%2FvdGghxYYC%2B3hViRp%2FvRtn%2BKVwQvmaf7WOd0LjVdlEPGF4lV9SdjzE%2F0dP1rFb2UtUGqLfW9CCMSqlqrXNh1BVn3Lat24zRrGKZBa%2BQgopIH2OIm61Px1xz7S93IqbcpvWlvsDN2%2BOELn8ux3evRo3NWMuNNr93BXgcyOleFLcqDr98WI2Q4KUMu81Zqb2TEZMeXY9nq0arylQOephmrhBjS%2FE4PHMKudtsQGOqUBceDRQn2UcjaHmRuuVJKSpgDRP1JIPCWwEf60%2FLxYy6geaLd7ygNSnljS3ISnRX0MHfVgGIqs2%2BFvxlo2DogUa5z0EHdhG6cs%2FvMElfQQ%2BflZT08hLu0saNuOwiv%2BYsSjxxS4n6sGXZW8QOLdaRDFrlqrig8Wi4NJDCFSKUm1LQnjjN%2FB0K5IQc7mvuSQyy05Inmp4q%2Fo1vMNi8%2BXVLplGBLLZrpD&X-Amz-Signature=0eb5b48ffa22362db4a7a5ce47128bff18e95ed12bf4af4472e897cd2560388d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634U4YDCS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BJav6j33FEtdj7CWaJO4FrvJx6j92vd3OGR3aNepoEAiEA4846TTleKr8qm1ixpU%2B1ih2nGtDjWcmjDuYY39CcQWwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMzSh4%2Fz3tGAykHYCrcA1dYyoGAjgFJy3uUYETWOd8upHDSjizc2n7rWqU7%2FC64S7fNbf8brOa7Xg7csv79BAYzUOauY9FSf%2FmACrsTir1cyseyu3TzGN7wPgYx326ukEYJ1moJZn1oDFZgSosyJa3xv6h9lfYDcI2WY%2FqB9uBcWCKbo5%2FRWJf2%2B%2FWCZUXi%2FVxBMOQW5jSb4XVIuuv2ZsdP%2BUJ273ugbvjp40hEiIQDBLmre1YJx0LBGAc3vAPkQIJIu6V64FZkOiVjM3PkA5VRsrglvb4abwor5Cw8ZDzOXaojR9DLkpY2tmq9N7dZA8kLueNjVvCldmrlSdIqmxduuXe8ip7nrGNsqWSW9Mvl%2B9b7bXNpzighXLPISfls%2FhUZtb2j3eD27kGSas9Y9ArMvRgFrR4%2F1ctXHX0Eff4%2BQ%2F91Hrx%2FvdGghxYYC%2B3hViRp%2FvRtn%2BKVwQvmaf7WOd0LjVdlEPGF4lV9SdjzE%2F0dP1rFb2UtUGqLfW9CCMSqlqrXNh1BVn3Lat24zRrGKZBa%2BQgopIH2OIm61Px1xz7S93IqbcpvWlvsDN2%2BOELn8ux3evRo3NWMuNNr93BXgcyOleFLcqDr98WI2Q4KUMu81Zqb2TEZMeXY9nq0arylQOephmrhBjS%2FE4PHMKudtsQGOqUBceDRQn2UcjaHmRuuVJKSpgDRP1JIPCWwEf60%2FLxYy6geaLd7ygNSnljS3ISnRX0MHfVgGIqs2%2BFvxlo2DogUa5z0EHdhG6cs%2FvMElfQQ%2BflZT08hLu0saNuOwiv%2BYsSjxxS4n6sGXZW8QOLdaRDFrlqrig8Wi4NJDCFSKUm1LQnjjN%2FB0K5IQc7mvuSQyy05Inmp4q%2Fo1vMNi8%2BXVLplGBLLZrpD&X-Amz-Signature=5035790249b9b8f946e008a3b41bfdc82674795d2c80f5910491038e12f618f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634U4YDCS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BJav6j33FEtdj7CWaJO4FrvJx6j92vd3OGR3aNepoEAiEA4846TTleKr8qm1ixpU%2B1ih2nGtDjWcmjDuYY39CcQWwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMzSh4%2Fz3tGAykHYCrcA1dYyoGAjgFJy3uUYETWOd8upHDSjizc2n7rWqU7%2FC64S7fNbf8brOa7Xg7csv79BAYzUOauY9FSf%2FmACrsTir1cyseyu3TzGN7wPgYx326ukEYJ1moJZn1oDFZgSosyJa3xv6h9lfYDcI2WY%2FqB9uBcWCKbo5%2FRWJf2%2B%2FWCZUXi%2FVxBMOQW5jSb4XVIuuv2ZsdP%2BUJ273ugbvjp40hEiIQDBLmre1YJx0LBGAc3vAPkQIJIu6V64FZkOiVjM3PkA5VRsrglvb4abwor5Cw8ZDzOXaojR9DLkpY2tmq9N7dZA8kLueNjVvCldmrlSdIqmxduuXe8ip7nrGNsqWSW9Mvl%2B9b7bXNpzighXLPISfls%2FhUZtb2j3eD27kGSas9Y9ArMvRgFrR4%2F1ctXHX0Eff4%2BQ%2F91Hrx%2FvdGghxYYC%2B3hViRp%2FvRtn%2BKVwQvmaf7WOd0LjVdlEPGF4lV9SdjzE%2F0dP1rFb2UtUGqLfW9CCMSqlqrXNh1BVn3Lat24zRrGKZBa%2BQgopIH2OIm61Px1xz7S93IqbcpvWlvsDN2%2BOELn8ux3evRo3NWMuNNr93BXgcyOleFLcqDr98WI2Q4KUMu81Zqb2TEZMeXY9nq0arylQOephmrhBjS%2FE4PHMKudtsQGOqUBceDRQn2UcjaHmRuuVJKSpgDRP1JIPCWwEf60%2FLxYy6geaLd7ygNSnljS3ISnRX0MHfVgGIqs2%2BFvxlo2DogUa5z0EHdhG6cs%2FvMElfQQ%2BflZT08hLu0saNuOwiv%2BYsSjxxS4n6sGXZW8QOLdaRDFrlqrig8Wi4NJDCFSKUm1LQnjjN%2FB0K5IQc7mvuSQyy05Inmp4q%2Fo1vMNi8%2BXVLplGBLLZrpD&X-Amz-Signature=e0de96339c1491c8942a71c0907958fb860e80d6811e6a8607bc6d520647ff63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634U4YDCS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BJav6j33FEtdj7CWaJO4FrvJx6j92vd3OGR3aNepoEAiEA4846TTleKr8qm1ixpU%2B1ih2nGtDjWcmjDuYY39CcQWwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMzSh4%2Fz3tGAykHYCrcA1dYyoGAjgFJy3uUYETWOd8upHDSjizc2n7rWqU7%2FC64S7fNbf8brOa7Xg7csv79BAYzUOauY9FSf%2FmACrsTir1cyseyu3TzGN7wPgYx326ukEYJ1moJZn1oDFZgSosyJa3xv6h9lfYDcI2WY%2FqB9uBcWCKbo5%2FRWJf2%2B%2FWCZUXi%2FVxBMOQW5jSb4XVIuuv2ZsdP%2BUJ273ugbvjp40hEiIQDBLmre1YJx0LBGAc3vAPkQIJIu6V64FZkOiVjM3PkA5VRsrglvb4abwor5Cw8ZDzOXaojR9DLkpY2tmq9N7dZA8kLueNjVvCldmrlSdIqmxduuXe8ip7nrGNsqWSW9Mvl%2B9b7bXNpzighXLPISfls%2FhUZtb2j3eD27kGSas9Y9ArMvRgFrR4%2F1ctXHX0Eff4%2BQ%2F91Hrx%2FvdGghxYYC%2B3hViRp%2FvRtn%2BKVwQvmaf7WOd0LjVdlEPGF4lV9SdjzE%2F0dP1rFb2UtUGqLfW9CCMSqlqrXNh1BVn3Lat24zRrGKZBa%2BQgopIH2OIm61Px1xz7S93IqbcpvWlvsDN2%2BOELn8ux3evRo3NWMuNNr93BXgcyOleFLcqDr98WI2Q4KUMu81Zqb2TEZMeXY9nq0arylQOephmrhBjS%2FE4PHMKudtsQGOqUBceDRQn2UcjaHmRuuVJKSpgDRP1JIPCWwEf60%2FLxYy6geaLd7ygNSnljS3ISnRX0MHfVgGIqs2%2BFvxlo2DogUa5z0EHdhG6cs%2FvMElfQQ%2BflZT08hLu0saNuOwiv%2BYsSjxxS4n6sGXZW8QOLdaRDFrlqrig8Wi4NJDCFSKUm1LQnjjN%2FB0K5IQc7mvuSQyy05Inmp4q%2Fo1vMNi8%2BXVLplGBLLZrpD&X-Amz-Signature=3d210bcb7671cfdd904c3267d2eceb82c2e9ba2534533c5c66ff0d99c6c2886f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634U4YDCS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BJav6j33FEtdj7CWaJO4FrvJx6j92vd3OGR3aNepoEAiEA4846TTleKr8qm1ixpU%2B1ih2nGtDjWcmjDuYY39CcQWwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMzSh4%2Fz3tGAykHYCrcA1dYyoGAjgFJy3uUYETWOd8upHDSjizc2n7rWqU7%2FC64S7fNbf8brOa7Xg7csv79BAYzUOauY9FSf%2FmACrsTir1cyseyu3TzGN7wPgYx326ukEYJ1moJZn1oDFZgSosyJa3xv6h9lfYDcI2WY%2FqB9uBcWCKbo5%2FRWJf2%2B%2FWCZUXi%2FVxBMOQW5jSb4XVIuuv2ZsdP%2BUJ273ugbvjp40hEiIQDBLmre1YJx0LBGAc3vAPkQIJIu6V64FZkOiVjM3PkA5VRsrglvb4abwor5Cw8ZDzOXaojR9DLkpY2tmq9N7dZA8kLueNjVvCldmrlSdIqmxduuXe8ip7nrGNsqWSW9Mvl%2B9b7bXNpzighXLPISfls%2FhUZtb2j3eD27kGSas9Y9ArMvRgFrR4%2F1ctXHX0Eff4%2BQ%2F91Hrx%2FvdGghxYYC%2B3hViRp%2FvRtn%2BKVwQvmaf7WOd0LjVdlEPGF4lV9SdjzE%2F0dP1rFb2UtUGqLfW9CCMSqlqrXNh1BVn3Lat24zRrGKZBa%2BQgopIH2OIm61Px1xz7S93IqbcpvWlvsDN2%2BOELn8ux3evRo3NWMuNNr93BXgcyOleFLcqDr98WI2Q4KUMu81Zqb2TEZMeXY9nq0arylQOephmrhBjS%2FE4PHMKudtsQGOqUBceDRQn2UcjaHmRuuVJKSpgDRP1JIPCWwEf60%2FLxYy6geaLd7ygNSnljS3ISnRX0MHfVgGIqs2%2BFvxlo2DogUa5z0EHdhG6cs%2FvMElfQQ%2BflZT08hLu0saNuOwiv%2BYsSjxxS4n6sGXZW8QOLdaRDFrlqrig8Wi4NJDCFSKUm1LQnjjN%2FB0K5IQc7mvuSQyy05Inmp4q%2Fo1vMNi8%2BXVLplGBLLZrpD&X-Amz-Signature=79094f41a4de59a7c9f283f7ddbaa54e11dd8aef9c2be2ecad5be470e2ad8fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634U4YDCS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BJav6j33FEtdj7CWaJO4FrvJx6j92vd3OGR3aNepoEAiEA4846TTleKr8qm1ixpU%2B1ih2nGtDjWcmjDuYY39CcQWwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMzSh4%2Fz3tGAykHYCrcA1dYyoGAjgFJy3uUYETWOd8upHDSjizc2n7rWqU7%2FC64S7fNbf8brOa7Xg7csv79BAYzUOauY9FSf%2FmACrsTir1cyseyu3TzGN7wPgYx326ukEYJ1moJZn1oDFZgSosyJa3xv6h9lfYDcI2WY%2FqB9uBcWCKbo5%2FRWJf2%2B%2FWCZUXi%2FVxBMOQW5jSb4XVIuuv2ZsdP%2BUJ273ugbvjp40hEiIQDBLmre1YJx0LBGAc3vAPkQIJIu6V64FZkOiVjM3PkA5VRsrglvb4abwor5Cw8ZDzOXaojR9DLkpY2tmq9N7dZA8kLueNjVvCldmrlSdIqmxduuXe8ip7nrGNsqWSW9Mvl%2B9b7bXNpzighXLPISfls%2FhUZtb2j3eD27kGSas9Y9ArMvRgFrR4%2F1ctXHX0Eff4%2BQ%2F91Hrx%2FvdGghxYYC%2B3hViRp%2FvRtn%2BKVwQvmaf7WOd0LjVdlEPGF4lV9SdjzE%2F0dP1rFb2UtUGqLfW9CCMSqlqrXNh1BVn3Lat24zRrGKZBa%2BQgopIH2OIm61Px1xz7S93IqbcpvWlvsDN2%2BOELn8ux3evRo3NWMuNNr93BXgcyOleFLcqDr98WI2Q4KUMu81Zqb2TEZMeXY9nq0arylQOephmrhBjS%2FE4PHMKudtsQGOqUBceDRQn2UcjaHmRuuVJKSpgDRP1JIPCWwEf60%2FLxYy6geaLd7ygNSnljS3ISnRX0MHfVgGIqs2%2BFvxlo2DogUa5z0EHdhG6cs%2FvMElfQQ%2BflZT08hLu0saNuOwiv%2BYsSjxxS4n6sGXZW8QOLdaRDFrlqrig8Wi4NJDCFSKUm1LQnjjN%2FB0K5IQc7mvuSQyy05Inmp4q%2Fo1vMNi8%2BXVLplGBLLZrpD&X-Amz-Signature=3674dd610d9b8f55e9e5dda0e68c951be4a7e8d56be790fe58150549832eb737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634U4YDCS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BJav6j33FEtdj7CWaJO4FrvJx6j92vd3OGR3aNepoEAiEA4846TTleKr8qm1ixpU%2B1ih2nGtDjWcmjDuYY39CcQWwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMzSh4%2Fz3tGAykHYCrcA1dYyoGAjgFJy3uUYETWOd8upHDSjizc2n7rWqU7%2FC64S7fNbf8brOa7Xg7csv79BAYzUOauY9FSf%2FmACrsTir1cyseyu3TzGN7wPgYx326ukEYJ1moJZn1oDFZgSosyJa3xv6h9lfYDcI2WY%2FqB9uBcWCKbo5%2FRWJf2%2B%2FWCZUXi%2FVxBMOQW5jSb4XVIuuv2ZsdP%2BUJ273ugbvjp40hEiIQDBLmre1YJx0LBGAc3vAPkQIJIu6V64FZkOiVjM3PkA5VRsrglvb4abwor5Cw8ZDzOXaojR9DLkpY2tmq9N7dZA8kLueNjVvCldmrlSdIqmxduuXe8ip7nrGNsqWSW9Mvl%2B9b7bXNpzighXLPISfls%2FhUZtb2j3eD27kGSas9Y9ArMvRgFrR4%2F1ctXHX0Eff4%2BQ%2F91Hrx%2FvdGghxYYC%2B3hViRp%2FvRtn%2BKVwQvmaf7WOd0LjVdlEPGF4lV9SdjzE%2F0dP1rFb2UtUGqLfW9CCMSqlqrXNh1BVn3Lat24zRrGKZBa%2BQgopIH2OIm61Px1xz7S93IqbcpvWlvsDN2%2BOELn8ux3evRo3NWMuNNr93BXgcyOleFLcqDr98WI2Q4KUMu81Zqb2TEZMeXY9nq0arylQOephmrhBjS%2FE4PHMKudtsQGOqUBceDRQn2UcjaHmRuuVJKSpgDRP1JIPCWwEf60%2FLxYy6geaLd7ygNSnljS3ISnRX0MHfVgGIqs2%2BFvxlo2DogUa5z0EHdhG6cs%2FvMElfQQ%2BflZT08hLu0saNuOwiv%2BYsSjxxS4n6sGXZW8QOLdaRDFrlqrig8Wi4NJDCFSKUm1LQnjjN%2FB0K5IQc7mvuSQyy05Inmp4q%2Fo1vMNi8%2BXVLplGBLLZrpD&X-Amz-Signature=39154d62c0b2f2297a85caca362a52fda0f4098fc61b9d729f5d419282178eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634U4YDCS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BJav6j33FEtdj7CWaJO4FrvJx6j92vd3OGR3aNepoEAiEA4846TTleKr8qm1ixpU%2B1ih2nGtDjWcmjDuYY39CcQWwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMzSh4%2Fz3tGAykHYCrcA1dYyoGAjgFJy3uUYETWOd8upHDSjizc2n7rWqU7%2FC64S7fNbf8brOa7Xg7csv79BAYzUOauY9FSf%2FmACrsTir1cyseyu3TzGN7wPgYx326ukEYJ1moJZn1oDFZgSosyJa3xv6h9lfYDcI2WY%2FqB9uBcWCKbo5%2FRWJf2%2B%2FWCZUXi%2FVxBMOQW5jSb4XVIuuv2ZsdP%2BUJ273ugbvjp40hEiIQDBLmre1YJx0LBGAc3vAPkQIJIu6V64FZkOiVjM3PkA5VRsrglvb4abwor5Cw8ZDzOXaojR9DLkpY2tmq9N7dZA8kLueNjVvCldmrlSdIqmxduuXe8ip7nrGNsqWSW9Mvl%2B9b7bXNpzighXLPISfls%2FhUZtb2j3eD27kGSas9Y9ArMvRgFrR4%2F1ctXHX0Eff4%2BQ%2F91Hrx%2FvdGghxYYC%2B3hViRp%2FvRtn%2BKVwQvmaf7WOd0LjVdlEPGF4lV9SdjzE%2F0dP1rFb2UtUGqLfW9CCMSqlqrXNh1BVn3Lat24zRrGKZBa%2BQgopIH2OIm61Px1xz7S93IqbcpvWlvsDN2%2BOELn8ux3evRo3NWMuNNr93BXgcyOleFLcqDr98WI2Q4KUMu81Zqb2TEZMeXY9nq0arylQOephmrhBjS%2FE4PHMKudtsQGOqUBceDRQn2UcjaHmRuuVJKSpgDRP1JIPCWwEf60%2FLxYy6geaLd7ygNSnljS3ISnRX0MHfVgGIqs2%2BFvxlo2DogUa5z0EHdhG6cs%2FvMElfQQ%2BflZT08hLu0saNuOwiv%2BYsSjxxS4n6sGXZW8QOLdaRDFrlqrig8Wi4NJDCFSKUm1LQnjjN%2FB0K5IQc7mvuSQyy05Inmp4q%2Fo1vMNi8%2BXVLplGBLLZrpD&X-Amz-Signature=f9a04ef2c636dca7b1444e84fd883a63a39305ac4cbf6c2d10121c514260d145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634U4YDCS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BJav6j33FEtdj7CWaJO4FrvJx6j92vd3OGR3aNepoEAiEA4846TTleKr8qm1ixpU%2B1ih2nGtDjWcmjDuYY39CcQWwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMzSh4%2Fz3tGAykHYCrcA1dYyoGAjgFJy3uUYETWOd8upHDSjizc2n7rWqU7%2FC64S7fNbf8brOa7Xg7csv79BAYzUOauY9FSf%2FmACrsTir1cyseyu3TzGN7wPgYx326ukEYJ1moJZn1oDFZgSosyJa3xv6h9lfYDcI2WY%2FqB9uBcWCKbo5%2FRWJf2%2B%2FWCZUXi%2FVxBMOQW5jSb4XVIuuv2ZsdP%2BUJ273ugbvjp40hEiIQDBLmre1YJx0LBGAc3vAPkQIJIu6V64FZkOiVjM3PkA5VRsrglvb4abwor5Cw8ZDzOXaojR9DLkpY2tmq9N7dZA8kLueNjVvCldmrlSdIqmxduuXe8ip7nrGNsqWSW9Mvl%2B9b7bXNpzighXLPISfls%2FhUZtb2j3eD27kGSas9Y9ArMvRgFrR4%2F1ctXHX0Eff4%2BQ%2F91Hrx%2FvdGghxYYC%2B3hViRp%2FvRtn%2BKVwQvmaf7WOd0LjVdlEPGF4lV9SdjzE%2F0dP1rFb2UtUGqLfW9CCMSqlqrXNh1BVn3Lat24zRrGKZBa%2BQgopIH2OIm61Px1xz7S93IqbcpvWlvsDN2%2BOELn8ux3evRo3NWMuNNr93BXgcyOleFLcqDr98WI2Q4KUMu81Zqb2TEZMeXY9nq0arylQOephmrhBjS%2FE4PHMKudtsQGOqUBceDRQn2UcjaHmRuuVJKSpgDRP1JIPCWwEf60%2FLxYy6geaLd7ygNSnljS3ISnRX0MHfVgGIqs2%2BFvxlo2DogUa5z0EHdhG6cs%2FvMElfQQ%2BflZT08hLu0saNuOwiv%2BYsSjxxS4n6sGXZW8QOLdaRDFrlqrig8Wi4NJDCFSKUm1LQnjjN%2FB0K5IQc7mvuSQyy05Inmp4q%2Fo1vMNi8%2BXVLplGBLLZrpD&X-Amz-Signature=c6afd5449a96a9bce82206ee661f115f685439700f6ebf970283b5ebdb78b246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634U4YDCS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BJav6j33FEtdj7CWaJO4FrvJx6j92vd3OGR3aNepoEAiEA4846TTleKr8qm1ixpU%2B1ih2nGtDjWcmjDuYY39CcQWwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMzSh4%2Fz3tGAykHYCrcA1dYyoGAjgFJy3uUYETWOd8upHDSjizc2n7rWqU7%2FC64S7fNbf8brOa7Xg7csv79BAYzUOauY9FSf%2FmACrsTir1cyseyu3TzGN7wPgYx326ukEYJ1moJZn1oDFZgSosyJa3xv6h9lfYDcI2WY%2FqB9uBcWCKbo5%2FRWJf2%2B%2FWCZUXi%2FVxBMOQW5jSb4XVIuuv2ZsdP%2BUJ273ugbvjp40hEiIQDBLmre1YJx0LBGAc3vAPkQIJIu6V64FZkOiVjM3PkA5VRsrglvb4abwor5Cw8ZDzOXaojR9DLkpY2tmq9N7dZA8kLueNjVvCldmrlSdIqmxduuXe8ip7nrGNsqWSW9Mvl%2B9b7bXNpzighXLPISfls%2FhUZtb2j3eD27kGSas9Y9ArMvRgFrR4%2F1ctXHX0Eff4%2BQ%2F91Hrx%2FvdGghxYYC%2B3hViRp%2FvRtn%2BKVwQvmaf7WOd0LjVdlEPGF4lV9SdjzE%2F0dP1rFb2UtUGqLfW9CCMSqlqrXNh1BVn3Lat24zRrGKZBa%2BQgopIH2OIm61Px1xz7S93IqbcpvWlvsDN2%2BOELn8ux3evRo3NWMuNNr93BXgcyOleFLcqDr98WI2Q4KUMu81Zqb2TEZMeXY9nq0arylQOephmrhBjS%2FE4PHMKudtsQGOqUBceDRQn2UcjaHmRuuVJKSpgDRP1JIPCWwEf60%2FLxYy6geaLd7ygNSnljS3ISnRX0MHfVgGIqs2%2BFvxlo2DogUa5z0EHdhG6cs%2FvMElfQQ%2BflZT08hLu0saNuOwiv%2BYsSjxxS4n6sGXZW8QOLdaRDFrlqrig8Wi4NJDCFSKUm1LQnjjN%2FB0K5IQc7mvuSQyy05Inmp4q%2Fo1vMNi8%2BXVLplGBLLZrpD&X-Amz-Signature=b6ad08523cfd147394795cf00fee8d422902c39130f461a3087ebbb7fa2d0fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634U4YDCS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BJav6j33FEtdj7CWaJO4FrvJx6j92vd3OGR3aNepoEAiEA4846TTleKr8qm1ixpU%2B1ih2nGtDjWcmjDuYY39CcQWwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMzSh4%2Fz3tGAykHYCrcA1dYyoGAjgFJy3uUYETWOd8upHDSjizc2n7rWqU7%2FC64S7fNbf8brOa7Xg7csv79BAYzUOauY9FSf%2FmACrsTir1cyseyu3TzGN7wPgYx326ukEYJ1moJZn1oDFZgSosyJa3xv6h9lfYDcI2WY%2FqB9uBcWCKbo5%2FRWJf2%2B%2FWCZUXi%2FVxBMOQW5jSb4XVIuuv2ZsdP%2BUJ273ugbvjp40hEiIQDBLmre1YJx0LBGAc3vAPkQIJIu6V64FZkOiVjM3PkA5VRsrglvb4abwor5Cw8ZDzOXaojR9DLkpY2tmq9N7dZA8kLueNjVvCldmrlSdIqmxduuXe8ip7nrGNsqWSW9Mvl%2B9b7bXNpzighXLPISfls%2FhUZtb2j3eD27kGSas9Y9ArMvRgFrR4%2F1ctXHX0Eff4%2BQ%2F91Hrx%2FvdGghxYYC%2B3hViRp%2FvRtn%2BKVwQvmaf7WOd0LjVdlEPGF4lV9SdjzE%2F0dP1rFb2UtUGqLfW9CCMSqlqrXNh1BVn3Lat24zRrGKZBa%2BQgopIH2OIm61Px1xz7S93IqbcpvWlvsDN2%2BOELn8ux3evRo3NWMuNNr93BXgcyOleFLcqDr98WI2Q4KUMu81Zqb2TEZMeXY9nq0arylQOephmrhBjS%2FE4PHMKudtsQGOqUBceDRQn2UcjaHmRuuVJKSpgDRP1JIPCWwEf60%2FLxYy6geaLd7ygNSnljS3ISnRX0MHfVgGIqs2%2BFvxlo2DogUa5z0EHdhG6cs%2FvMElfQQ%2BflZT08hLu0saNuOwiv%2BYsSjxxS4n6sGXZW8QOLdaRDFrlqrig8Wi4NJDCFSKUm1LQnjjN%2FB0K5IQc7mvuSQyy05Inmp4q%2Fo1vMNi8%2BXVLplGBLLZrpD&X-Amz-Signature=6decb9112013dd776037407b1afa360cdcf58936dff936e433f5eb60dc6dbad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634U4YDCS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BJav6j33FEtdj7CWaJO4FrvJx6j92vd3OGR3aNepoEAiEA4846TTleKr8qm1ixpU%2B1ih2nGtDjWcmjDuYY39CcQWwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMzSh4%2Fz3tGAykHYCrcA1dYyoGAjgFJy3uUYETWOd8upHDSjizc2n7rWqU7%2FC64S7fNbf8brOa7Xg7csv79BAYzUOauY9FSf%2FmACrsTir1cyseyu3TzGN7wPgYx326ukEYJ1moJZn1oDFZgSosyJa3xv6h9lfYDcI2WY%2FqB9uBcWCKbo5%2FRWJf2%2B%2FWCZUXi%2FVxBMOQW5jSb4XVIuuv2ZsdP%2BUJ273ugbvjp40hEiIQDBLmre1YJx0LBGAc3vAPkQIJIu6V64FZkOiVjM3PkA5VRsrglvb4abwor5Cw8ZDzOXaojR9DLkpY2tmq9N7dZA8kLueNjVvCldmrlSdIqmxduuXe8ip7nrGNsqWSW9Mvl%2B9b7bXNpzighXLPISfls%2FhUZtb2j3eD27kGSas9Y9ArMvRgFrR4%2F1ctXHX0Eff4%2BQ%2F91Hrx%2FvdGghxYYC%2B3hViRp%2FvRtn%2BKVwQvmaf7WOd0LjVdlEPGF4lV9SdjzE%2F0dP1rFb2UtUGqLfW9CCMSqlqrXNh1BVn3Lat24zRrGKZBa%2BQgopIH2OIm61Px1xz7S93IqbcpvWlvsDN2%2BOELn8ux3evRo3NWMuNNr93BXgcyOleFLcqDr98WI2Q4KUMu81Zqb2TEZMeXY9nq0arylQOephmrhBjS%2FE4PHMKudtsQGOqUBceDRQn2UcjaHmRuuVJKSpgDRP1JIPCWwEf60%2FLxYy6geaLd7ygNSnljS3ISnRX0MHfVgGIqs2%2BFvxlo2DogUa5z0EHdhG6cs%2FvMElfQQ%2BflZT08hLu0saNuOwiv%2BYsSjxxS4n6sGXZW8QOLdaRDFrlqrig8Wi4NJDCFSKUm1LQnjjN%2FB0K5IQc7mvuSQyy05Inmp4q%2Fo1vMNi8%2BXVLplGBLLZrpD&X-Amz-Signature=c2b6aff8759cf058fcd46ae388fa56c5f802a02ad5439f15412169f385fd89cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
