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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7RIWV%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCvFm3AYqPdv52gklg06Kyyz4dM550L0WwBYtTLHDZf7gIgEPAWMe4efet8y%2FVXDkPCeqi2xbvf6Sgf3G%2Fsp7J3bEYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYQ8faHxL0l8r%2FOuyrcAwMLTZkx%2BZsIq2bBQMSHqlPS3xzdFeG%2Be6WpnOemJAVWCYhHYSKKlnscllJ4ceolIwVChqFYUCIv9947AkW70UloyC2dXilEqI%2B4pk4KouJ7DqlnjBKk7aBemHZVpaTf%2FN6sgYrM47Mtup%2FLxFFpqJRRYmkQXCIUwmsOd5ykRKw4FMykSRcIyZoZ0XxVirQwDhMq%2BiHfMlXUboS7j%2FtFNWVKZKMchMCtwPlY537FXp2tQ%2Flg9a4CpcQJ0Jl%2FObWDUvUNtgMd%2F7lleU0Xjz2bCi0orE8c5FITwD1u%2BOMBvpJEITyTvk5ICTdbcJYBp1LrL0k%2Fd1CHAyYiRz%2FXEjd1pCcm%2FZbzc5tkXx8LpG4MeLn8x4cXyEPb4H3XyCgp7rPixeEplc77QJzpEaOMsSi%2FhKh8PjLOO6iYt4f5mrU7rt2cgNj7JD89qWH16%2BO9lf%2FeJAvBHkJYdyRAY%2FsMPcH8GVtl7C74R1oNoCvde7BWD6PLcfHZxuNggdIYcX31odD0dr7Xb4OR1dk8F7F36y%2FxS9kJd8aRcbKsJGGS0Me3fiW3Fpb9kPtg0JUFSY1k%2FPeJEGFJQOwTkzAK2LxmRurRjxEYOZveVzbFNNuW9UOp4Y3%2FL04Xoj8hMG5enjawMNbNhMUGOqUBev8lAQCTQ08jF24luv8p6su15YcN0SePdnSd4jLKn4pPhXIK94XUeA%2BsjyruOsynfWPdpO8LV8yB3lIR8gE13NFxgjAicW%2B5zX22PlDlPGowHHJv5lkzLJc%2BbJWOWKMuS30TdZIaiL2uOLJkfxNaL3X4wqg4xJo2AWdH1a%2FgD%2FE6UujvBv%2BvV4Y2yDAZfcyBqDXAuHXmBgMOTwfv7faLP60YAVxI&X-Amz-Signature=048a4bacd30756e9789073ab213f48a581892834f0a527c7a38b3adf88221ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7RIWV%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCvFm3AYqPdv52gklg06Kyyz4dM550L0WwBYtTLHDZf7gIgEPAWMe4efet8y%2FVXDkPCeqi2xbvf6Sgf3G%2Fsp7J3bEYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYQ8faHxL0l8r%2FOuyrcAwMLTZkx%2BZsIq2bBQMSHqlPS3xzdFeG%2Be6WpnOemJAVWCYhHYSKKlnscllJ4ceolIwVChqFYUCIv9947AkW70UloyC2dXilEqI%2B4pk4KouJ7DqlnjBKk7aBemHZVpaTf%2FN6sgYrM47Mtup%2FLxFFpqJRRYmkQXCIUwmsOd5ykRKw4FMykSRcIyZoZ0XxVirQwDhMq%2BiHfMlXUboS7j%2FtFNWVKZKMchMCtwPlY537FXp2tQ%2Flg9a4CpcQJ0Jl%2FObWDUvUNtgMd%2F7lleU0Xjz2bCi0orE8c5FITwD1u%2BOMBvpJEITyTvk5ICTdbcJYBp1LrL0k%2Fd1CHAyYiRz%2FXEjd1pCcm%2FZbzc5tkXx8LpG4MeLn8x4cXyEPb4H3XyCgp7rPixeEplc77QJzpEaOMsSi%2FhKh8PjLOO6iYt4f5mrU7rt2cgNj7JD89qWH16%2BO9lf%2FeJAvBHkJYdyRAY%2FsMPcH8GVtl7C74R1oNoCvde7BWD6PLcfHZxuNggdIYcX31odD0dr7Xb4OR1dk8F7F36y%2FxS9kJd8aRcbKsJGGS0Me3fiW3Fpb9kPtg0JUFSY1k%2FPeJEGFJQOwTkzAK2LxmRurRjxEYOZveVzbFNNuW9UOp4Y3%2FL04Xoj8hMG5enjawMNbNhMUGOqUBev8lAQCTQ08jF24luv8p6su15YcN0SePdnSd4jLKn4pPhXIK94XUeA%2BsjyruOsynfWPdpO8LV8yB3lIR8gE13NFxgjAicW%2B5zX22PlDlPGowHHJv5lkzLJc%2BbJWOWKMuS30TdZIaiL2uOLJkfxNaL3X4wqg4xJo2AWdH1a%2FgD%2FE6UujvBv%2BvV4Y2yDAZfcyBqDXAuHXmBgMOTwfv7faLP60YAVxI&X-Amz-Signature=58e8dc923762837a012197595525913cb173bf6cac2754c8fd52b256447aca71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7RIWV%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCvFm3AYqPdv52gklg06Kyyz4dM550L0WwBYtTLHDZf7gIgEPAWMe4efet8y%2FVXDkPCeqi2xbvf6Sgf3G%2Fsp7J3bEYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYQ8faHxL0l8r%2FOuyrcAwMLTZkx%2BZsIq2bBQMSHqlPS3xzdFeG%2Be6WpnOemJAVWCYhHYSKKlnscllJ4ceolIwVChqFYUCIv9947AkW70UloyC2dXilEqI%2B4pk4KouJ7DqlnjBKk7aBemHZVpaTf%2FN6sgYrM47Mtup%2FLxFFpqJRRYmkQXCIUwmsOd5ykRKw4FMykSRcIyZoZ0XxVirQwDhMq%2BiHfMlXUboS7j%2FtFNWVKZKMchMCtwPlY537FXp2tQ%2Flg9a4CpcQJ0Jl%2FObWDUvUNtgMd%2F7lleU0Xjz2bCi0orE8c5FITwD1u%2BOMBvpJEITyTvk5ICTdbcJYBp1LrL0k%2Fd1CHAyYiRz%2FXEjd1pCcm%2FZbzc5tkXx8LpG4MeLn8x4cXyEPb4H3XyCgp7rPixeEplc77QJzpEaOMsSi%2FhKh8PjLOO6iYt4f5mrU7rt2cgNj7JD89qWH16%2BO9lf%2FeJAvBHkJYdyRAY%2FsMPcH8GVtl7C74R1oNoCvde7BWD6PLcfHZxuNggdIYcX31odD0dr7Xb4OR1dk8F7F36y%2FxS9kJd8aRcbKsJGGS0Me3fiW3Fpb9kPtg0JUFSY1k%2FPeJEGFJQOwTkzAK2LxmRurRjxEYOZveVzbFNNuW9UOp4Y3%2FL04Xoj8hMG5enjawMNbNhMUGOqUBev8lAQCTQ08jF24luv8p6su15YcN0SePdnSd4jLKn4pPhXIK94XUeA%2BsjyruOsynfWPdpO8LV8yB3lIR8gE13NFxgjAicW%2B5zX22PlDlPGowHHJv5lkzLJc%2BbJWOWKMuS30TdZIaiL2uOLJkfxNaL3X4wqg4xJo2AWdH1a%2FgD%2FE6UujvBv%2BvV4Y2yDAZfcyBqDXAuHXmBgMOTwfv7faLP60YAVxI&X-Amz-Signature=bf4143c5e15d570f20427eaaedfbd6c5d90f00598377d7e165e4b19eb4d65bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7RIWV%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCvFm3AYqPdv52gklg06Kyyz4dM550L0WwBYtTLHDZf7gIgEPAWMe4efet8y%2FVXDkPCeqi2xbvf6Sgf3G%2Fsp7J3bEYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYQ8faHxL0l8r%2FOuyrcAwMLTZkx%2BZsIq2bBQMSHqlPS3xzdFeG%2Be6WpnOemJAVWCYhHYSKKlnscllJ4ceolIwVChqFYUCIv9947AkW70UloyC2dXilEqI%2B4pk4KouJ7DqlnjBKk7aBemHZVpaTf%2FN6sgYrM47Mtup%2FLxFFpqJRRYmkQXCIUwmsOd5ykRKw4FMykSRcIyZoZ0XxVirQwDhMq%2BiHfMlXUboS7j%2FtFNWVKZKMchMCtwPlY537FXp2tQ%2Flg9a4CpcQJ0Jl%2FObWDUvUNtgMd%2F7lleU0Xjz2bCi0orE8c5FITwD1u%2BOMBvpJEITyTvk5ICTdbcJYBp1LrL0k%2Fd1CHAyYiRz%2FXEjd1pCcm%2FZbzc5tkXx8LpG4MeLn8x4cXyEPb4H3XyCgp7rPixeEplc77QJzpEaOMsSi%2FhKh8PjLOO6iYt4f5mrU7rt2cgNj7JD89qWH16%2BO9lf%2FeJAvBHkJYdyRAY%2FsMPcH8GVtl7C74R1oNoCvde7BWD6PLcfHZxuNggdIYcX31odD0dr7Xb4OR1dk8F7F36y%2FxS9kJd8aRcbKsJGGS0Me3fiW3Fpb9kPtg0JUFSY1k%2FPeJEGFJQOwTkzAK2LxmRurRjxEYOZveVzbFNNuW9UOp4Y3%2FL04Xoj8hMG5enjawMNbNhMUGOqUBev8lAQCTQ08jF24luv8p6su15YcN0SePdnSd4jLKn4pPhXIK94XUeA%2BsjyruOsynfWPdpO8LV8yB3lIR8gE13NFxgjAicW%2B5zX22PlDlPGowHHJv5lkzLJc%2BbJWOWKMuS30TdZIaiL2uOLJkfxNaL3X4wqg4xJo2AWdH1a%2FgD%2FE6UujvBv%2BvV4Y2yDAZfcyBqDXAuHXmBgMOTwfv7faLP60YAVxI&X-Amz-Signature=0d6710c471e50c4473b3f522751c03b64fc51f426413a38da39e6e418200a820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7RIWV%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCvFm3AYqPdv52gklg06Kyyz4dM550L0WwBYtTLHDZf7gIgEPAWMe4efet8y%2FVXDkPCeqi2xbvf6Sgf3G%2Fsp7J3bEYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYQ8faHxL0l8r%2FOuyrcAwMLTZkx%2BZsIq2bBQMSHqlPS3xzdFeG%2Be6WpnOemJAVWCYhHYSKKlnscllJ4ceolIwVChqFYUCIv9947AkW70UloyC2dXilEqI%2B4pk4KouJ7DqlnjBKk7aBemHZVpaTf%2FN6sgYrM47Mtup%2FLxFFpqJRRYmkQXCIUwmsOd5ykRKw4FMykSRcIyZoZ0XxVirQwDhMq%2BiHfMlXUboS7j%2FtFNWVKZKMchMCtwPlY537FXp2tQ%2Flg9a4CpcQJ0Jl%2FObWDUvUNtgMd%2F7lleU0Xjz2bCi0orE8c5FITwD1u%2BOMBvpJEITyTvk5ICTdbcJYBp1LrL0k%2Fd1CHAyYiRz%2FXEjd1pCcm%2FZbzc5tkXx8LpG4MeLn8x4cXyEPb4H3XyCgp7rPixeEplc77QJzpEaOMsSi%2FhKh8PjLOO6iYt4f5mrU7rt2cgNj7JD89qWH16%2BO9lf%2FeJAvBHkJYdyRAY%2FsMPcH8GVtl7C74R1oNoCvde7BWD6PLcfHZxuNggdIYcX31odD0dr7Xb4OR1dk8F7F36y%2FxS9kJd8aRcbKsJGGS0Me3fiW3Fpb9kPtg0JUFSY1k%2FPeJEGFJQOwTkzAK2LxmRurRjxEYOZveVzbFNNuW9UOp4Y3%2FL04Xoj8hMG5enjawMNbNhMUGOqUBev8lAQCTQ08jF24luv8p6su15YcN0SePdnSd4jLKn4pPhXIK94XUeA%2BsjyruOsynfWPdpO8LV8yB3lIR8gE13NFxgjAicW%2B5zX22PlDlPGowHHJv5lkzLJc%2BbJWOWKMuS30TdZIaiL2uOLJkfxNaL3X4wqg4xJo2AWdH1a%2FgD%2FE6UujvBv%2BvV4Y2yDAZfcyBqDXAuHXmBgMOTwfv7faLP60YAVxI&X-Amz-Signature=7e8f0f5b35641fb668018d51a2dfb0a3105fbe1e9c483b390737b7f95fba7057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7RIWV%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCvFm3AYqPdv52gklg06Kyyz4dM550L0WwBYtTLHDZf7gIgEPAWMe4efet8y%2FVXDkPCeqi2xbvf6Sgf3G%2Fsp7J3bEYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYQ8faHxL0l8r%2FOuyrcAwMLTZkx%2BZsIq2bBQMSHqlPS3xzdFeG%2Be6WpnOemJAVWCYhHYSKKlnscllJ4ceolIwVChqFYUCIv9947AkW70UloyC2dXilEqI%2B4pk4KouJ7DqlnjBKk7aBemHZVpaTf%2FN6sgYrM47Mtup%2FLxFFpqJRRYmkQXCIUwmsOd5ykRKw4FMykSRcIyZoZ0XxVirQwDhMq%2BiHfMlXUboS7j%2FtFNWVKZKMchMCtwPlY537FXp2tQ%2Flg9a4CpcQJ0Jl%2FObWDUvUNtgMd%2F7lleU0Xjz2bCi0orE8c5FITwD1u%2BOMBvpJEITyTvk5ICTdbcJYBp1LrL0k%2Fd1CHAyYiRz%2FXEjd1pCcm%2FZbzc5tkXx8LpG4MeLn8x4cXyEPb4H3XyCgp7rPixeEplc77QJzpEaOMsSi%2FhKh8PjLOO6iYt4f5mrU7rt2cgNj7JD89qWH16%2BO9lf%2FeJAvBHkJYdyRAY%2FsMPcH8GVtl7C74R1oNoCvde7BWD6PLcfHZxuNggdIYcX31odD0dr7Xb4OR1dk8F7F36y%2FxS9kJd8aRcbKsJGGS0Me3fiW3Fpb9kPtg0JUFSY1k%2FPeJEGFJQOwTkzAK2LxmRurRjxEYOZveVzbFNNuW9UOp4Y3%2FL04Xoj8hMG5enjawMNbNhMUGOqUBev8lAQCTQ08jF24luv8p6su15YcN0SePdnSd4jLKn4pPhXIK94XUeA%2BsjyruOsynfWPdpO8LV8yB3lIR8gE13NFxgjAicW%2B5zX22PlDlPGowHHJv5lkzLJc%2BbJWOWKMuS30TdZIaiL2uOLJkfxNaL3X4wqg4xJo2AWdH1a%2FgD%2FE6UujvBv%2BvV4Y2yDAZfcyBqDXAuHXmBgMOTwfv7faLP60YAVxI&X-Amz-Signature=02ac6d203e402d778fd7af3fca78098fdf3c9cb501e439211e3a3e1d0d09f59f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7RIWV%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCvFm3AYqPdv52gklg06Kyyz4dM550L0WwBYtTLHDZf7gIgEPAWMe4efet8y%2FVXDkPCeqi2xbvf6Sgf3G%2Fsp7J3bEYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYQ8faHxL0l8r%2FOuyrcAwMLTZkx%2BZsIq2bBQMSHqlPS3xzdFeG%2Be6WpnOemJAVWCYhHYSKKlnscllJ4ceolIwVChqFYUCIv9947AkW70UloyC2dXilEqI%2B4pk4KouJ7DqlnjBKk7aBemHZVpaTf%2FN6sgYrM47Mtup%2FLxFFpqJRRYmkQXCIUwmsOd5ykRKw4FMykSRcIyZoZ0XxVirQwDhMq%2BiHfMlXUboS7j%2FtFNWVKZKMchMCtwPlY537FXp2tQ%2Flg9a4CpcQJ0Jl%2FObWDUvUNtgMd%2F7lleU0Xjz2bCi0orE8c5FITwD1u%2BOMBvpJEITyTvk5ICTdbcJYBp1LrL0k%2Fd1CHAyYiRz%2FXEjd1pCcm%2FZbzc5tkXx8LpG4MeLn8x4cXyEPb4H3XyCgp7rPixeEplc77QJzpEaOMsSi%2FhKh8PjLOO6iYt4f5mrU7rt2cgNj7JD89qWH16%2BO9lf%2FeJAvBHkJYdyRAY%2FsMPcH8GVtl7C74R1oNoCvde7BWD6PLcfHZxuNggdIYcX31odD0dr7Xb4OR1dk8F7F36y%2FxS9kJd8aRcbKsJGGS0Me3fiW3Fpb9kPtg0JUFSY1k%2FPeJEGFJQOwTkzAK2LxmRurRjxEYOZveVzbFNNuW9UOp4Y3%2FL04Xoj8hMG5enjawMNbNhMUGOqUBev8lAQCTQ08jF24luv8p6su15YcN0SePdnSd4jLKn4pPhXIK94XUeA%2BsjyruOsynfWPdpO8LV8yB3lIR8gE13NFxgjAicW%2B5zX22PlDlPGowHHJv5lkzLJc%2BbJWOWKMuS30TdZIaiL2uOLJkfxNaL3X4wqg4xJo2AWdH1a%2FgD%2FE6UujvBv%2BvV4Y2yDAZfcyBqDXAuHXmBgMOTwfv7faLP60YAVxI&X-Amz-Signature=b2c8583cdd8ba78bae509497b5ac5dcb282c20a71653ab58d9c99ada2936311a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7RIWV%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCvFm3AYqPdv52gklg06Kyyz4dM550L0WwBYtTLHDZf7gIgEPAWMe4efet8y%2FVXDkPCeqi2xbvf6Sgf3G%2Fsp7J3bEYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYQ8faHxL0l8r%2FOuyrcAwMLTZkx%2BZsIq2bBQMSHqlPS3xzdFeG%2Be6WpnOemJAVWCYhHYSKKlnscllJ4ceolIwVChqFYUCIv9947AkW70UloyC2dXilEqI%2B4pk4KouJ7DqlnjBKk7aBemHZVpaTf%2FN6sgYrM47Mtup%2FLxFFpqJRRYmkQXCIUwmsOd5ykRKw4FMykSRcIyZoZ0XxVirQwDhMq%2BiHfMlXUboS7j%2FtFNWVKZKMchMCtwPlY537FXp2tQ%2Flg9a4CpcQJ0Jl%2FObWDUvUNtgMd%2F7lleU0Xjz2bCi0orE8c5FITwD1u%2BOMBvpJEITyTvk5ICTdbcJYBp1LrL0k%2Fd1CHAyYiRz%2FXEjd1pCcm%2FZbzc5tkXx8LpG4MeLn8x4cXyEPb4H3XyCgp7rPixeEplc77QJzpEaOMsSi%2FhKh8PjLOO6iYt4f5mrU7rt2cgNj7JD89qWH16%2BO9lf%2FeJAvBHkJYdyRAY%2FsMPcH8GVtl7C74R1oNoCvde7BWD6PLcfHZxuNggdIYcX31odD0dr7Xb4OR1dk8F7F36y%2FxS9kJd8aRcbKsJGGS0Me3fiW3Fpb9kPtg0JUFSY1k%2FPeJEGFJQOwTkzAK2LxmRurRjxEYOZveVzbFNNuW9UOp4Y3%2FL04Xoj8hMG5enjawMNbNhMUGOqUBev8lAQCTQ08jF24luv8p6su15YcN0SePdnSd4jLKn4pPhXIK94XUeA%2BsjyruOsynfWPdpO8LV8yB3lIR8gE13NFxgjAicW%2B5zX22PlDlPGowHHJv5lkzLJc%2BbJWOWKMuS30TdZIaiL2uOLJkfxNaL3X4wqg4xJo2AWdH1a%2FgD%2FE6UujvBv%2BvV4Y2yDAZfcyBqDXAuHXmBgMOTwfv7faLP60YAVxI&X-Amz-Signature=b4db62c22bf2f16589ae98ce0bc246a2e9ab76cf23a9971b71ec525f7174478f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7RIWV%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCvFm3AYqPdv52gklg06Kyyz4dM550L0WwBYtTLHDZf7gIgEPAWMe4efet8y%2FVXDkPCeqi2xbvf6Sgf3G%2Fsp7J3bEYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYQ8faHxL0l8r%2FOuyrcAwMLTZkx%2BZsIq2bBQMSHqlPS3xzdFeG%2Be6WpnOemJAVWCYhHYSKKlnscllJ4ceolIwVChqFYUCIv9947AkW70UloyC2dXilEqI%2B4pk4KouJ7DqlnjBKk7aBemHZVpaTf%2FN6sgYrM47Mtup%2FLxFFpqJRRYmkQXCIUwmsOd5ykRKw4FMykSRcIyZoZ0XxVirQwDhMq%2BiHfMlXUboS7j%2FtFNWVKZKMchMCtwPlY537FXp2tQ%2Flg9a4CpcQJ0Jl%2FObWDUvUNtgMd%2F7lleU0Xjz2bCi0orE8c5FITwD1u%2BOMBvpJEITyTvk5ICTdbcJYBp1LrL0k%2Fd1CHAyYiRz%2FXEjd1pCcm%2FZbzc5tkXx8LpG4MeLn8x4cXyEPb4H3XyCgp7rPixeEplc77QJzpEaOMsSi%2FhKh8PjLOO6iYt4f5mrU7rt2cgNj7JD89qWH16%2BO9lf%2FeJAvBHkJYdyRAY%2FsMPcH8GVtl7C74R1oNoCvde7BWD6PLcfHZxuNggdIYcX31odD0dr7Xb4OR1dk8F7F36y%2FxS9kJd8aRcbKsJGGS0Me3fiW3Fpb9kPtg0JUFSY1k%2FPeJEGFJQOwTkzAK2LxmRurRjxEYOZveVzbFNNuW9UOp4Y3%2FL04Xoj8hMG5enjawMNbNhMUGOqUBev8lAQCTQ08jF24luv8p6su15YcN0SePdnSd4jLKn4pPhXIK94XUeA%2BsjyruOsynfWPdpO8LV8yB3lIR8gE13NFxgjAicW%2B5zX22PlDlPGowHHJv5lkzLJc%2BbJWOWKMuS30TdZIaiL2uOLJkfxNaL3X4wqg4xJo2AWdH1a%2FgD%2FE6UujvBv%2BvV4Y2yDAZfcyBqDXAuHXmBgMOTwfv7faLP60YAVxI&X-Amz-Signature=e2317158861e4ecdcface43c248a4f2b0407ae8905273548c0a860e3f4692ccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7RIWV%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCvFm3AYqPdv52gklg06Kyyz4dM550L0WwBYtTLHDZf7gIgEPAWMe4efet8y%2FVXDkPCeqi2xbvf6Sgf3G%2Fsp7J3bEYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYQ8faHxL0l8r%2FOuyrcAwMLTZkx%2BZsIq2bBQMSHqlPS3xzdFeG%2Be6WpnOemJAVWCYhHYSKKlnscllJ4ceolIwVChqFYUCIv9947AkW70UloyC2dXilEqI%2B4pk4KouJ7DqlnjBKk7aBemHZVpaTf%2FN6sgYrM47Mtup%2FLxFFpqJRRYmkQXCIUwmsOd5ykRKw4FMykSRcIyZoZ0XxVirQwDhMq%2BiHfMlXUboS7j%2FtFNWVKZKMchMCtwPlY537FXp2tQ%2Flg9a4CpcQJ0Jl%2FObWDUvUNtgMd%2F7lleU0Xjz2bCi0orE8c5FITwD1u%2BOMBvpJEITyTvk5ICTdbcJYBp1LrL0k%2Fd1CHAyYiRz%2FXEjd1pCcm%2FZbzc5tkXx8LpG4MeLn8x4cXyEPb4H3XyCgp7rPixeEplc77QJzpEaOMsSi%2FhKh8PjLOO6iYt4f5mrU7rt2cgNj7JD89qWH16%2BO9lf%2FeJAvBHkJYdyRAY%2FsMPcH8GVtl7C74R1oNoCvde7BWD6PLcfHZxuNggdIYcX31odD0dr7Xb4OR1dk8F7F36y%2FxS9kJd8aRcbKsJGGS0Me3fiW3Fpb9kPtg0JUFSY1k%2FPeJEGFJQOwTkzAK2LxmRurRjxEYOZveVzbFNNuW9UOp4Y3%2FL04Xoj8hMG5enjawMNbNhMUGOqUBev8lAQCTQ08jF24luv8p6su15YcN0SePdnSd4jLKn4pPhXIK94XUeA%2BsjyruOsynfWPdpO8LV8yB3lIR8gE13NFxgjAicW%2B5zX22PlDlPGowHHJv5lkzLJc%2BbJWOWKMuS30TdZIaiL2uOLJkfxNaL3X4wqg4xJo2AWdH1a%2FgD%2FE6UujvBv%2BvV4Y2yDAZfcyBqDXAuHXmBgMOTwfv7faLP60YAVxI&X-Amz-Signature=e4ea6ba8c6e3b340c35c1630774ec0613fa615275406d83024eabc7886943511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7RIWV%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCvFm3AYqPdv52gklg06Kyyz4dM550L0WwBYtTLHDZf7gIgEPAWMe4efet8y%2FVXDkPCeqi2xbvf6Sgf3G%2Fsp7J3bEYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYQ8faHxL0l8r%2FOuyrcAwMLTZkx%2BZsIq2bBQMSHqlPS3xzdFeG%2Be6WpnOemJAVWCYhHYSKKlnscllJ4ceolIwVChqFYUCIv9947AkW70UloyC2dXilEqI%2B4pk4KouJ7DqlnjBKk7aBemHZVpaTf%2FN6sgYrM47Mtup%2FLxFFpqJRRYmkQXCIUwmsOd5ykRKw4FMykSRcIyZoZ0XxVirQwDhMq%2BiHfMlXUboS7j%2FtFNWVKZKMchMCtwPlY537FXp2tQ%2Flg9a4CpcQJ0Jl%2FObWDUvUNtgMd%2F7lleU0Xjz2bCi0orE8c5FITwD1u%2BOMBvpJEITyTvk5ICTdbcJYBp1LrL0k%2Fd1CHAyYiRz%2FXEjd1pCcm%2FZbzc5tkXx8LpG4MeLn8x4cXyEPb4H3XyCgp7rPixeEplc77QJzpEaOMsSi%2FhKh8PjLOO6iYt4f5mrU7rt2cgNj7JD89qWH16%2BO9lf%2FeJAvBHkJYdyRAY%2FsMPcH8GVtl7C74R1oNoCvde7BWD6PLcfHZxuNggdIYcX31odD0dr7Xb4OR1dk8F7F36y%2FxS9kJd8aRcbKsJGGS0Me3fiW3Fpb9kPtg0JUFSY1k%2FPeJEGFJQOwTkzAK2LxmRurRjxEYOZveVzbFNNuW9UOp4Y3%2FL04Xoj8hMG5enjawMNbNhMUGOqUBev8lAQCTQ08jF24luv8p6su15YcN0SePdnSd4jLKn4pPhXIK94XUeA%2BsjyruOsynfWPdpO8LV8yB3lIR8gE13NFxgjAicW%2B5zX22PlDlPGowHHJv5lkzLJc%2BbJWOWKMuS30TdZIaiL2uOLJkfxNaL3X4wqg4xJo2AWdH1a%2FgD%2FE6UujvBv%2BvV4Y2yDAZfcyBqDXAuHXmBgMOTwfv7faLP60YAVxI&X-Amz-Signature=e61371972fdac79124956072e828bae0015c3ec97b57aabe9f343f1a11a10325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7RIWV%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCvFm3AYqPdv52gklg06Kyyz4dM550L0WwBYtTLHDZf7gIgEPAWMe4efet8y%2FVXDkPCeqi2xbvf6Sgf3G%2Fsp7J3bEYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYQ8faHxL0l8r%2FOuyrcAwMLTZkx%2BZsIq2bBQMSHqlPS3xzdFeG%2Be6WpnOemJAVWCYhHYSKKlnscllJ4ceolIwVChqFYUCIv9947AkW70UloyC2dXilEqI%2B4pk4KouJ7DqlnjBKk7aBemHZVpaTf%2FN6sgYrM47Mtup%2FLxFFpqJRRYmkQXCIUwmsOd5ykRKw4FMykSRcIyZoZ0XxVirQwDhMq%2BiHfMlXUboS7j%2FtFNWVKZKMchMCtwPlY537FXp2tQ%2Flg9a4CpcQJ0Jl%2FObWDUvUNtgMd%2F7lleU0Xjz2bCi0orE8c5FITwD1u%2BOMBvpJEITyTvk5ICTdbcJYBp1LrL0k%2Fd1CHAyYiRz%2FXEjd1pCcm%2FZbzc5tkXx8LpG4MeLn8x4cXyEPb4H3XyCgp7rPixeEplc77QJzpEaOMsSi%2FhKh8PjLOO6iYt4f5mrU7rt2cgNj7JD89qWH16%2BO9lf%2FeJAvBHkJYdyRAY%2FsMPcH8GVtl7C74R1oNoCvde7BWD6PLcfHZxuNggdIYcX31odD0dr7Xb4OR1dk8F7F36y%2FxS9kJd8aRcbKsJGGS0Me3fiW3Fpb9kPtg0JUFSY1k%2FPeJEGFJQOwTkzAK2LxmRurRjxEYOZveVzbFNNuW9UOp4Y3%2FL04Xoj8hMG5enjawMNbNhMUGOqUBev8lAQCTQ08jF24luv8p6su15YcN0SePdnSd4jLKn4pPhXIK94XUeA%2BsjyruOsynfWPdpO8LV8yB3lIR8gE13NFxgjAicW%2B5zX22PlDlPGowHHJv5lkzLJc%2BbJWOWKMuS30TdZIaiL2uOLJkfxNaL3X4wqg4xJo2AWdH1a%2FgD%2FE6UujvBv%2BvV4Y2yDAZfcyBqDXAuHXmBgMOTwfv7faLP60YAVxI&X-Amz-Signature=00ee1d9de591213e5af0a4dff256d76eaf1482e2c4c7db6ed08512c3242a79fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7RIWV%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCvFm3AYqPdv52gklg06Kyyz4dM550L0WwBYtTLHDZf7gIgEPAWMe4efet8y%2FVXDkPCeqi2xbvf6Sgf3G%2Fsp7J3bEYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYQ8faHxL0l8r%2FOuyrcAwMLTZkx%2BZsIq2bBQMSHqlPS3xzdFeG%2Be6WpnOemJAVWCYhHYSKKlnscllJ4ceolIwVChqFYUCIv9947AkW70UloyC2dXilEqI%2B4pk4KouJ7DqlnjBKk7aBemHZVpaTf%2FN6sgYrM47Mtup%2FLxFFpqJRRYmkQXCIUwmsOd5ykRKw4FMykSRcIyZoZ0XxVirQwDhMq%2BiHfMlXUboS7j%2FtFNWVKZKMchMCtwPlY537FXp2tQ%2Flg9a4CpcQJ0Jl%2FObWDUvUNtgMd%2F7lleU0Xjz2bCi0orE8c5FITwD1u%2BOMBvpJEITyTvk5ICTdbcJYBp1LrL0k%2Fd1CHAyYiRz%2FXEjd1pCcm%2FZbzc5tkXx8LpG4MeLn8x4cXyEPb4H3XyCgp7rPixeEplc77QJzpEaOMsSi%2FhKh8PjLOO6iYt4f5mrU7rt2cgNj7JD89qWH16%2BO9lf%2FeJAvBHkJYdyRAY%2FsMPcH8GVtl7C74R1oNoCvde7BWD6PLcfHZxuNggdIYcX31odD0dr7Xb4OR1dk8F7F36y%2FxS9kJd8aRcbKsJGGS0Me3fiW3Fpb9kPtg0JUFSY1k%2FPeJEGFJQOwTkzAK2LxmRurRjxEYOZveVzbFNNuW9UOp4Y3%2FL04Xoj8hMG5enjawMNbNhMUGOqUBev8lAQCTQ08jF24luv8p6su15YcN0SePdnSd4jLKn4pPhXIK94XUeA%2BsjyruOsynfWPdpO8LV8yB3lIR8gE13NFxgjAicW%2B5zX22PlDlPGowHHJv5lkzLJc%2BbJWOWKMuS30TdZIaiL2uOLJkfxNaL3X4wqg4xJo2AWdH1a%2FgD%2FE6UujvBv%2BvV4Y2yDAZfcyBqDXAuHXmBgMOTwfv7faLP60YAVxI&X-Amz-Signature=b61277ad7b0f04a77b25f8f1aefca945378f9070f9bbc0178f028fb73c7fd81f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7RIWV%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCvFm3AYqPdv52gklg06Kyyz4dM550L0WwBYtTLHDZf7gIgEPAWMe4efet8y%2FVXDkPCeqi2xbvf6Sgf3G%2Fsp7J3bEYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYQ8faHxL0l8r%2FOuyrcAwMLTZkx%2BZsIq2bBQMSHqlPS3xzdFeG%2Be6WpnOemJAVWCYhHYSKKlnscllJ4ceolIwVChqFYUCIv9947AkW70UloyC2dXilEqI%2B4pk4KouJ7DqlnjBKk7aBemHZVpaTf%2FN6sgYrM47Mtup%2FLxFFpqJRRYmkQXCIUwmsOd5ykRKw4FMykSRcIyZoZ0XxVirQwDhMq%2BiHfMlXUboS7j%2FtFNWVKZKMchMCtwPlY537FXp2tQ%2Flg9a4CpcQJ0Jl%2FObWDUvUNtgMd%2F7lleU0Xjz2bCi0orE8c5FITwD1u%2BOMBvpJEITyTvk5ICTdbcJYBp1LrL0k%2Fd1CHAyYiRz%2FXEjd1pCcm%2FZbzc5tkXx8LpG4MeLn8x4cXyEPb4H3XyCgp7rPixeEplc77QJzpEaOMsSi%2FhKh8PjLOO6iYt4f5mrU7rt2cgNj7JD89qWH16%2BO9lf%2FeJAvBHkJYdyRAY%2FsMPcH8GVtl7C74R1oNoCvde7BWD6PLcfHZxuNggdIYcX31odD0dr7Xb4OR1dk8F7F36y%2FxS9kJd8aRcbKsJGGS0Me3fiW3Fpb9kPtg0JUFSY1k%2FPeJEGFJQOwTkzAK2LxmRurRjxEYOZveVzbFNNuW9UOp4Y3%2FL04Xoj8hMG5enjawMNbNhMUGOqUBev8lAQCTQ08jF24luv8p6su15YcN0SePdnSd4jLKn4pPhXIK94XUeA%2BsjyruOsynfWPdpO8LV8yB3lIR8gE13NFxgjAicW%2B5zX22PlDlPGowHHJv5lkzLJc%2BbJWOWKMuS30TdZIaiL2uOLJkfxNaL3X4wqg4xJo2AWdH1a%2FgD%2FE6UujvBv%2BvV4Y2yDAZfcyBqDXAuHXmBgMOTwfv7faLP60YAVxI&X-Amz-Signature=27683eb0b4f210d3db2d9c4704bae26c4670100de6515d2b69cecffc14817501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
