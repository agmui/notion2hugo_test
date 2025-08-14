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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVAF3RB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmBjOMjij%2BqUO3KMyJkD08y0nByEhRzTZLid%2FeNOyB6QIgFcS%2Frk%2F%2BhJrqw0y5dz100vrL2lecMojbgZCRGZmcgyUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD2OFYkCy%2Bn2ZhuSNyrcA6NgUbSI%2BigG6m7ycHm5jiTfCM16tGOkC%2BPeE%2BI%2BTsYkQtMeS0g2bPAE7O%2FF5jsm41w3zChUUDeoeM%2FBy1Y94RmaQmTF741N8FL3RkF%2FHlfzyQBXl%2FCe9OHUwFmHQWKXERi7lpzJX%2FKQKn1tOsd72RtnRwF7fwJrkao7JQYwGLM8m8Cbz%2BvDzjWbwK36d34rm03hwZ9K2%2BQlkOoDwVVy85q5Bx2GiSY1A4X9P3PP0TcHV%2B0GPwNpN8xNGQitHPcY9i%2F27LKCFvh%2FXQjTwmdrXz6VzBRAiNgke7gwPzNAdzkv7I4Wyiz9XauL6fIEzO3THOET4qx4zqt6drCVdiFldr6wmpZE9xDB%2BFAkJUCKQ%2FGXTbT1aIKCwtl7a0Qz1ZEjhE9DuR1AP2c7fKBH4ZfhCtbXU4EGte8pe6CCojynkxa9KkTtkwUkQliI0x6MX6uQbBz%2BP0uUqswU9jleZFkMalwu10YGuxTDs1%2BTEPzzZYzTALY0a1orjNa%2BnnVEGXnXzDdnV9XC0yF7ztJXd%2FV1MrM774gRZ04DJKqcHHlL4fzrwwWEEk%2B3UB9POweIZESyMLfB6bMbItZFzUMAUyhPwNVg28GmSY6k%2BkXPaHiovhKLCrie66ZmQHbW7Ci0MJr698QGOqUBJ6Nx0ty3zsAovrlOS5dF1UrusPS7lszNTbXGpC8DClzstFDwvikGM3%2FMDIkzuYEXpIug8qPLf1%2BZdsEuU3IVkjUbGk2zrk9ZCpvnqI5i6FJdeSBZqdD6Pba%2FPVAY1c3sG35UwOd5YzjWFZS11to6rQgI%2BUeeZ2cDumIlEmpSd9Ou0%2BLuAdj3iWjiOQVSbW66ep5SLGmEjmuftp0rYuAManBoGRVp&X-Amz-Signature=494c56ce1551f4e48ccf0786b3ab925ceb26070b38cd42a4a2138a3e48ff2128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVAF3RB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmBjOMjij%2BqUO3KMyJkD08y0nByEhRzTZLid%2FeNOyB6QIgFcS%2Frk%2F%2BhJrqw0y5dz100vrL2lecMojbgZCRGZmcgyUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD2OFYkCy%2Bn2ZhuSNyrcA6NgUbSI%2BigG6m7ycHm5jiTfCM16tGOkC%2BPeE%2BI%2BTsYkQtMeS0g2bPAE7O%2FF5jsm41w3zChUUDeoeM%2FBy1Y94RmaQmTF741N8FL3RkF%2FHlfzyQBXl%2FCe9OHUwFmHQWKXERi7lpzJX%2FKQKn1tOsd72RtnRwF7fwJrkao7JQYwGLM8m8Cbz%2BvDzjWbwK36d34rm03hwZ9K2%2BQlkOoDwVVy85q5Bx2GiSY1A4X9P3PP0TcHV%2B0GPwNpN8xNGQitHPcY9i%2F27LKCFvh%2FXQjTwmdrXz6VzBRAiNgke7gwPzNAdzkv7I4Wyiz9XauL6fIEzO3THOET4qx4zqt6drCVdiFldr6wmpZE9xDB%2BFAkJUCKQ%2FGXTbT1aIKCwtl7a0Qz1ZEjhE9DuR1AP2c7fKBH4ZfhCtbXU4EGte8pe6CCojynkxa9KkTtkwUkQliI0x6MX6uQbBz%2BP0uUqswU9jleZFkMalwu10YGuxTDs1%2BTEPzzZYzTALY0a1orjNa%2BnnVEGXnXzDdnV9XC0yF7ztJXd%2FV1MrM774gRZ04DJKqcHHlL4fzrwwWEEk%2B3UB9POweIZESyMLfB6bMbItZFzUMAUyhPwNVg28GmSY6k%2BkXPaHiovhKLCrie66ZmQHbW7Ci0MJr698QGOqUBJ6Nx0ty3zsAovrlOS5dF1UrusPS7lszNTbXGpC8DClzstFDwvikGM3%2FMDIkzuYEXpIug8qPLf1%2BZdsEuU3IVkjUbGk2zrk9ZCpvnqI5i6FJdeSBZqdD6Pba%2FPVAY1c3sG35UwOd5YzjWFZS11to6rQgI%2BUeeZ2cDumIlEmpSd9Ou0%2BLuAdj3iWjiOQVSbW66ep5SLGmEjmuftp0rYuAManBoGRVp&X-Amz-Signature=33cf7981ae44fade4083cfcfc113d8780d7fc41478004cab9aec8ea5c3b93e26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVAF3RB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmBjOMjij%2BqUO3KMyJkD08y0nByEhRzTZLid%2FeNOyB6QIgFcS%2Frk%2F%2BhJrqw0y5dz100vrL2lecMojbgZCRGZmcgyUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD2OFYkCy%2Bn2ZhuSNyrcA6NgUbSI%2BigG6m7ycHm5jiTfCM16tGOkC%2BPeE%2BI%2BTsYkQtMeS0g2bPAE7O%2FF5jsm41w3zChUUDeoeM%2FBy1Y94RmaQmTF741N8FL3RkF%2FHlfzyQBXl%2FCe9OHUwFmHQWKXERi7lpzJX%2FKQKn1tOsd72RtnRwF7fwJrkao7JQYwGLM8m8Cbz%2BvDzjWbwK36d34rm03hwZ9K2%2BQlkOoDwVVy85q5Bx2GiSY1A4X9P3PP0TcHV%2B0GPwNpN8xNGQitHPcY9i%2F27LKCFvh%2FXQjTwmdrXz6VzBRAiNgke7gwPzNAdzkv7I4Wyiz9XauL6fIEzO3THOET4qx4zqt6drCVdiFldr6wmpZE9xDB%2BFAkJUCKQ%2FGXTbT1aIKCwtl7a0Qz1ZEjhE9DuR1AP2c7fKBH4ZfhCtbXU4EGte8pe6CCojynkxa9KkTtkwUkQliI0x6MX6uQbBz%2BP0uUqswU9jleZFkMalwu10YGuxTDs1%2BTEPzzZYzTALY0a1orjNa%2BnnVEGXnXzDdnV9XC0yF7ztJXd%2FV1MrM774gRZ04DJKqcHHlL4fzrwwWEEk%2B3UB9POweIZESyMLfB6bMbItZFzUMAUyhPwNVg28GmSY6k%2BkXPaHiovhKLCrie66ZmQHbW7Ci0MJr698QGOqUBJ6Nx0ty3zsAovrlOS5dF1UrusPS7lszNTbXGpC8DClzstFDwvikGM3%2FMDIkzuYEXpIug8qPLf1%2BZdsEuU3IVkjUbGk2zrk9ZCpvnqI5i6FJdeSBZqdD6Pba%2FPVAY1c3sG35UwOd5YzjWFZS11to6rQgI%2BUeeZ2cDumIlEmpSd9Ou0%2BLuAdj3iWjiOQVSbW66ep5SLGmEjmuftp0rYuAManBoGRVp&X-Amz-Signature=da42b449e42feccd3166f8e7edd90e6ccf85f6210a5b053374161281d1e743a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVAF3RB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmBjOMjij%2BqUO3KMyJkD08y0nByEhRzTZLid%2FeNOyB6QIgFcS%2Frk%2F%2BhJrqw0y5dz100vrL2lecMojbgZCRGZmcgyUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD2OFYkCy%2Bn2ZhuSNyrcA6NgUbSI%2BigG6m7ycHm5jiTfCM16tGOkC%2BPeE%2BI%2BTsYkQtMeS0g2bPAE7O%2FF5jsm41w3zChUUDeoeM%2FBy1Y94RmaQmTF741N8FL3RkF%2FHlfzyQBXl%2FCe9OHUwFmHQWKXERi7lpzJX%2FKQKn1tOsd72RtnRwF7fwJrkao7JQYwGLM8m8Cbz%2BvDzjWbwK36d34rm03hwZ9K2%2BQlkOoDwVVy85q5Bx2GiSY1A4X9P3PP0TcHV%2B0GPwNpN8xNGQitHPcY9i%2F27LKCFvh%2FXQjTwmdrXz6VzBRAiNgke7gwPzNAdzkv7I4Wyiz9XauL6fIEzO3THOET4qx4zqt6drCVdiFldr6wmpZE9xDB%2BFAkJUCKQ%2FGXTbT1aIKCwtl7a0Qz1ZEjhE9DuR1AP2c7fKBH4ZfhCtbXU4EGte8pe6CCojynkxa9KkTtkwUkQliI0x6MX6uQbBz%2BP0uUqswU9jleZFkMalwu10YGuxTDs1%2BTEPzzZYzTALY0a1orjNa%2BnnVEGXnXzDdnV9XC0yF7ztJXd%2FV1MrM774gRZ04DJKqcHHlL4fzrwwWEEk%2B3UB9POweIZESyMLfB6bMbItZFzUMAUyhPwNVg28GmSY6k%2BkXPaHiovhKLCrie66ZmQHbW7Ci0MJr698QGOqUBJ6Nx0ty3zsAovrlOS5dF1UrusPS7lszNTbXGpC8DClzstFDwvikGM3%2FMDIkzuYEXpIug8qPLf1%2BZdsEuU3IVkjUbGk2zrk9ZCpvnqI5i6FJdeSBZqdD6Pba%2FPVAY1c3sG35UwOd5YzjWFZS11to6rQgI%2BUeeZ2cDumIlEmpSd9Ou0%2BLuAdj3iWjiOQVSbW66ep5SLGmEjmuftp0rYuAManBoGRVp&X-Amz-Signature=05d7f0a3bd077814c6c375b914468d721cbf25b5636c715287c288051546d44a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVAF3RB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmBjOMjij%2BqUO3KMyJkD08y0nByEhRzTZLid%2FeNOyB6QIgFcS%2Frk%2F%2BhJrqw0y5dz100vrL2lecMojbgZCRGZmcgyUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD2OFYkCy%2Bn2ZhuSNyrcA6NgUbSI%2BigG6m7ycHm5jiTfCM16tGOkC%2BPeE%2BI%2BTsYkQtMeS0g2bPAE7O%2FF5jsm41w3zChUUDeoeM%2FBy1Y94RmaQmTF741N8FL3RkF%2FHlfzyQBXl%2FCe9OHUwFmHQWKXERi7lpzJX%2FKQKn1tOsd72RtnRwF7fwJrkao7JQYwGLM8m8Cbz%2BvDzjWbwK36d34rm03hwZ9K2%2BQlkOoDwVVy85q5Bx2GiSY1A4X9P3PP0TcHV%2B0GPwNpN8xNGQitHPcY9i%2F27LKCFvh%2FXQjTwmdrXz6VzBRAiNgke7gwPzNAdzkv7I4Wyiz9XauL6fIEzO3THOET4qx4zqt6drCVdiFldr6wmpZE9xDB%2BFAkJUCKQ%2FGXTbT1aIKCwtl7a0Qz1ZEjhE9DuR1AP2c7fKBH4ZfhCtbXU4EGte8pe6CCojynkxa9KkTtkwUkQliI0x6MX6uQbBz%2BP0uUqswU9jleZFkMalwu10YGuxTDs1%2BTEPzzZYzTALY0a1orjNa%2BnnVEGXnXzDdnV9XC0yF7ztJXd%2FV1MrM774gRZ04DJKqcHHlL4fzrwwWEEk%2B3UB9POweIZESyMLfB6bMbItZFzUMAUyhPwNVg28GmSY6k%2BkXPaHiovhKLCrie66ZmQHbW7Ci0MJr698QGOqUBJ6Nx0ty3zsAovrlOS5dF1UrusPS7lszNTbXGpC8DClzstFDwvikGM3%2FMDIkzuYEXpIug8qPLf1%2BZdsEuU3IVkjUbGk2zrk9ZCpvnqI5i6FJdeSBZqdD6Pba%2FPVAY1c3sG35UwOd5YzjWFZS11to6rQgI%2BUeeZ2cDumIlEmpSd9Ou0%2BLuAdj3iWjiOQVSbW66ep5SLGmEjmuftp0rYuAManBoGRVp&X-Amz-Signature=87e60fe7133c6325392d61cb0ddf0e98d1e498954017096f7ea4423023804ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVAF3RB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmBjOMjij%2BqUO3KMyJkD08y0nByEhRzTZLid%2FeNOyB6QIgFcS%2Frk%2F%2BhJrqw0y5dz100vrL2lecMojbgZCRGZmcgyUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD2OFYkCy%2Bn2ZhuSNyrcA6NgUbSI%2BigG6m7ycHm5jiTfCM16tGOkC%2BPeE%2BI%2BTsYkQtMeS0g2bPAE7O%2FF5jsm41w3zChUUDeoeM%2FBy1Y94RmaQmTF741N8FL3RkF%2FHlfzyQBXl%2FCe9OHUwFmHQWKXERi7lpzJX%2FKQKn1tOsd72RtnRwF7fwJrkao7JQYwGLM8m8Cbz%2BvDzjWbwK36d34rm03hwZ9K2%2BQlkOoDwVVy85q5Bx2GiSY1A4X9P3PP0TcHV%2B0GPwNpN8xNGQitHPcY9i%2F27LKCFvh%2FXQjTwmdrXz6VzBRAiNgke7gwPzNAdzkv7I4Wyiz9XauL6fIEzO3THOET4qx4zqt6drCVdiFldr6wmpZE9xDB%2BFAkJUCKQ%2FGXTbT1aIKCwtl7a0Qz1ZEjhE9DuR1AP2c7fKBH4ZfhCtbXU4EGte8pe6CCojynkxa9KkTtkwUkQliI0x6MX6uQbBz%2BP0uUqswU9jleZFkMalwu10YGuxTDs1%2BTEPzzZYzTALY0a1orjNa%2BnnVEGXnXzDdnV9XC0yF7ztJXd%2FV1MrM774gRZ04DJKqcHHlL4fzrwwWEEk%2B3UB9POweIZESyMLfB6bMbItZFzUMAUyhPwNVg28GmSY6k%2BkXPaHiovhKLCrie66ZmQHbW7Ci0MJr698QGOqUBJ6Nx0ty3zsAovrlOS5dF1UrusPS7lszNTbXGpC8DClzstFDwvikGM3%2FMDIkzuYEXpIug8qPLf1%2BZdsEuU3IVkjUbGk2zrk9ZCpvnqI5i6FJdeSBZqdD6Pba%2FPVAY1c3sG35UwOd5YzjWFZS11to6rQgI%2BUeeZ2cDumIlEmpSd9Ou0%2BLuAdj3iWjiOQVSbW66ep5SLGmEjmuftp0rYuAManBoGRVp&X-Amz-Signature=0e0a47adef6ebc83e8bec64ae83bf979964dd32ee7563cf2c4f5549aa60c1292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVAF3RB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmBjOMjij%2BqUO3KMyJkD08y0nByEhRzTZLid%2FeNOyB6QIgFcS%2Frk%2F%2BhJrqw0y5dz100vrL2lecMojbgZCRGZmcgyUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD2OFYkCy%2Bn2ZhuSNyrcA6NgUbSI%2BigG6m7ycHm5jiTfCM16tGOkC%2BPeE%2BI%2BTsYkQtMeS0g2bPAE7O%2FF5jsm41w3zChUUDeoeM%2FBy1Y94RmaQmTF741N8FL3RkF%2FHlfzyQBXl%2FCe9OHUwFmHQWKXERi7lpzJX%2FKQKn1tOsd72RtnRwF7fwJrkao7JQYwGLM8m8Cbz%2BvDzjWbwK36d34rm03hwZ9K2%2BQlkOoDwVVy85q5Bx2GiSY1A4X9P3PP0TcHV%2B0GPwNpN8xNGQitHPcY9i%2F27LKCFvh%2FXQjTwmdrXz6VzBRAiNgke7gwPzNAdzkv7I4Wyiz9XauL6fIEzO3THOET4qx4zqt6drCVdiFldr6wmpZE9xDB%2BFAkJUCKQ%2FGXTbT1aIKCwtl7a0Qz1ZEjhE9DuR1AP2c7fKBH4ZfhCtbXU4EGte8pe6CCojynkxa9KkTtkwUkQliI0x6MX6uQbBz%2BP0uUqswU9jleZFkMalwu10YGuxTDs1%2BTEPzzZYzTALY0a1orjNa%2BnnVEGXnXzDdnV9XC0yF7ztJXd%2FV1MrM774gRZ04DJKqcHHlL4fzrwwWEEk%2B3UB9POweIZESyMLfB6bMbItZFzUMAUyhPwNVg28GmSY6k%2BkXPaHiovhKLCrie66ZmQHbW7Ci0MJr698QGOqUBJ6Nx0ty3zsAovrlOS5dF1UrusPS7lszNTbXGpC8DClzstFDwvikGM3%2FMDIkzuYEXpIug8qPLf1%2BZdsEuU3IVkjUbGk2zrk9ZCpvnqI5i6FJdeSBZqdD6Pba%2FPVAY1c3sG35UwOd5YzjWFZS11to6rQgI%2BUeeZ2cDumIlEmpSd9Ou0%2BLuAdj3iWjiOQVSbW66ep5SLGmEjmuftp0rYuAManBoGRVp&X-Amz-Signature=940e510088f632ecf321c5d307146207d3acd04a64a713f56f7bb98dc57e84f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVAF3RB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmBjOMjij%2BqUO3KMyJkD08y0nByEhRzTZLid%2FeNOyB6QIgFcS%2Frk%2F%2BhJrqw0y5dz100vrL2lecMojbgZCRGZmcgyUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD2OFYkCy%2Bn2ZhuSNyrcA6NgUbSI%2BigG6m7ycHm5jiTfCM16tGOkC%2BPeE%2BI%2BTsYkQtMeS0g2bPAE7O%2FF5jsm41w3zChUUDeoeM%2FBy1Y94RmaQmTF741N8FL3RkF%2FHlfzyQBXl%2FCe9OHUwFmHQWKXERi7lpzJX%2FKQKn1tOsd72RtnRwF7fwJrkao7JQYwGLM8m8Cbz%2BvDzjWbwK36d34rm03hwZ9K2%2BQlkOoDwVVy85q5Bx2GiSY1A4X9P3PP0TcHV%2B0GPwNpN8xNGQitHPcY9i%2F27LKCFvh%2FXQjTwmdrXz6VzBRAiNgke7gwPzNAdzkv7I4Wyiz9XauL6fIEzO3THOET4qx4zqt6drCVdiFldr6wmpZE9xDB%2BFAkJUCKQ%2FGXTbT1aIKCwtl7a0Qz1ZEjhE9DuR1AP2c7fKBH4ZfhCtbXU4EGte8pe6CCojynkxa9KkTtkwUkQliI0x6MX6uQbBz%2BP0uUqswU9jleZFkMalwu10YGuxTDs1%2BTEPzzZYzTALY0a1orjNa%2BnnVEGXnXzDdnV9XC0yF7ztJXd%2FV1MrM774gRZ04DJKqcHHlL4fzrwwWEEk%2B3UB9POweIZESyMLfB6bMbItZFzUMAUyhPwNVg28GmSY6k%2BkXPaHiovhKLCrie66ZmQHbW7Ci0MJr698QGOqUBJ6Nx0ty3zsAovrlOS5dF1UrusPS7lszNTbXGpC8DClzstFDwvikGM3%2FMDIkzuYEXpIug8qPLf1%2BZdsEuU3IVkjUbGk2zrk9ZCpvnqI5i6FJdeSBZqdD6Pba%2FPVAY1c3sG35UwOd5YzjWFZS11to6rQgI%2BUeeZ2cDumIlEmpSd9Ou0%2BLuAdj3iWjiOQVSbW66ep5SLGmEjmuftp0rYuAManBoGRVp&X-Amz-Signature=72fbe057c0e00a8a59de74cf4ca9213066050ae5a2469a74350ed68b46bea398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVAF3RB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmBjOMjij%2BqUO3KMyJkD08y0nByEhRzTZLid%2FeNOyB6QIgFcS%2Frk%2F%2BhJrqw0y5dz100vrL2lecMojbgZCRGZmcgyUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD2OFYkCy%2Bn2ZhuSNyrcA6NgUbSI%2BigG6m7ycHm5jiTfCM16tGOkC%2BPeE%2BI%2BTsYkQtMeS0g2bPAE7O%2FF5jsm41w3zChUUDeoeM%2FBy1Y94RmaQmTF741N8FL3RkF%2FHlfzyQBXl%2FCe9OHUwFmHQWKXERi7lpzJX%2FKQKn1tOsd72RtnRwF7fwJrkao7JQYwGLM8m8Cbz%2BvDzjWbwK36d34rm03hwZ9K2%2BQlkOoDwVVy85q5Bx2GiSY1A4X9P3PP0TcHV%2B0GPwNpN8xNGQitHPcY9i%2F27LKCFvh%2FXQjTwmdrXz6VzBRAiNgke7gwPzNAdzkv7I4Wyiz9XauL6fIEzO3THOET4qx4zqt6drCVdiFldr6wmpZE9xDB%2BFAkJUCKQ%2FGXTbT1aIKCwtl7a0Qz1ZEjhE9DuR1AP2c7fKBH4ZfhCtbXU4EGte8pe6CCojynkxa9KkTtkwUkQliI0x6MX6uQbBz%2BP0uUqswU9jleZFkMalwu10YGuxTDs1%2BTEPzzZYzTALY0a1orjNa%2BnnVEGXnXzDdnV9XC0yF7ztJXd%2FV1MrM774gRZ04DJKqcHHlL4fzrwwWEEk%2B3UB9POweIZESyMLfB6bMbItZFzUMAUyhPwNVg28GmSY6k%2BkXPaHiovhKLCrie66ZmQHbW7Ci0MJr698QGOqUBJ6Nx0ty3zsAovrlOS5dF1UrusPS7lszNTbXGpC8DClzstFDwvikGM3%2FMDIkzuYEXpIug8qPLf1%2BZdsEuU3IVkjUbGk2zrk9ZCpvnqI5i6FJdeSBZqdD6Pba%2FPVAY1c3sG35UwOd5YzjWFZS11to6rQgI%2BUeeZ2cDumIlEmpSd9Ou0%2BLuAdj3iWjiOQVSbW66ep5SLGmEjmuftp0rYuAManBoGRVp&X-Amz-Signature=046fdf72f3252f167de191f71b77ec6f716006b4a3492e77e0ad539705770b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVAF3RB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmBjOMjij%2BqUO3KMyJkD08y0nByEhRzTZLid%2FeNOyB6QIgFcS%2Frk%2F%2BhJrqw0y5dz100vrL2lecMojbgZCRGZmcgyUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD2OFYkCy%2Bn2ZhuSNyrcA6NgUbSI%2BigG6m7ycHm5jiTfCM16tGOkC%2BPeE%2BI%2BTsYkQtMeS0g2bPAE7O%2FF5jsm41w3zChUUDeoeM%2FBy1Y94RmaQmTF741N8FL3RkF%2FHlfzyQBXl%2FCe9OHUwFmHQWKXERi7lpzJX%2FKQKn1tOsd72RtnRwF7fwJrkao7JQYwGLM8m8Cbz%2BvDzjWbwK36d34rm03hwZ9K2%2BQlkOoDwVVy85q5Bx2GiSY1A4X9P3PP0TcHV%2B0GPwNpN8xNGQitHPcY9i%2F27LKCFvh%2FXQjTwmdrXz6VzBRAiNgke7gwPzNAdzkv7I4Wyiz9XauL6fIEzO3THOET4qx4zqt6drCVdiFldr6wmpZE9xDB%2BFAkJUCKQ%2FGXTbT1aIKCwtl7a0Qz1ZEjhE9DuR1AP2c7fKBH4ZfhCtbXU4EGte8pe6CCojynkxa9KkTtkwUkQliI0x6MX6uQbBz%2BP0uUqswU9jleZFkMalwu10YGuxTDs1%2BTEPzzZYzTALY0a1orjNa%2BnnVEGXnXzDdnV9XC0yF7ztJXd%2FV1MrM774gRZ04DJKqcHHlL4fzrwwWEEk%2B3UB9POweIZESyMLfB6bMbItZFzUMAUyhPwNVg28GmSY6k%2BkXPaHiovhKLCrie66ZmQHbW7Ci0MJr698QGOqUBJ6Nx0ty3zsAovrlOS5dF1UrusPS7lszNTbXGpC8DClzstFDwvikGM3%2FMDIkzuYEXpIug8qPLf1%2BZdsEuU3IVkjUbGk2zrk9ZCpvnqI5i6FJdeSBZqdD6Pba%2FPVAY1c3sG35UwOd5YzjWFZS11to6rQgI%2BUeeZ2cDumIlEmpSd9Ou0%2BLuAdj3iWjiOQVSbW66ep5SLGmEjmuftp0rYuAManBoGRVp&X-Amz-Signature=3619ab63b4b581e12638be8a4d179e3dfcbdb19428406a2fa480fc66034e4c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVAF3RB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmBjOMjij%2BqUO3KMyJkD08y0nByEhRzTZLid%2FeNOyB6QIgFcS%2Frk%2F%2BhJrqw0y5dz100vrL2lecMojbgZCRGZmcgyUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD2OFYkCy%2Bn2ZhuSNyrcA6NgUbSI%2BigG6m7ycHm5jiTfCM16tGOkC%2BPeE%2BI%2BTsYkQtMeS0g2bPAE7O%2FF5jsm41w3zChUUDeoeM%2FBy1Y94RmaQmTF741N8FL3RkF%2FHlfzyQBXl%2FCe9OHUwFmHQWKXERi7lpzJX%2FKQKn1tOsd72RtnRwF7fwJrkao7JQYwGLM8m8Cbz%2BvDzjWbwK36d34rm03hwZ9K2%2BQlkOoDwVVy85q5Bx2GiSY1A4X9P3PP0TcHV%2B0GPwNpN8xNGQitHPcY9i%2F27LKCFvh%2FXQjTwmdrXz6VzBRAiNgke7gwPzNAdzkv7I4Wyiz9XauL6fIEzO3THOET4qx4zqt6drCVdiFldr6wmpZE9xDB%2BFAkJUCKQ%2FGXTbT1aIKCwtl7a0Qz1ZEjhE9DuR1AP2c7fKBH4ZfhCtbXU4EGte8pe6CCojynkxa9KkTtkwUkQliI0x6MX6uQbBz%2BP0uUqswU9jleZFkMalwu10YGuxTDs1%2BTEPzzZYzTALY0a1orjNa%2BnnVEGXnXzDdnV9XC0yF7ztJXd%2FV1MrM774gRZ04DJKqcHHlL4fzrwwWEEk%2B3UB9POweIZESyMLfB6bMbItZFzUMAUyhPwNVg28GmSY6k%2BkXPaHiovhKLCrie66ZmQHbW7Ci0MJr698QGOqUBJ6Nx0ty3zsAovrlOS5dF1UrusPS7lszNTbXGpC8DClzstFDwvikGM3%2FMDIkzuYEXpIug8qPLf1%2BZdsEuU3IVkjUbGk2zrk9ZCpvnqI5i6FJdeSBZqdD6Pba%2FPVAY1c3sG35UwOd5YzjWFZS11to6rQgI%2BUeeZ2cDumIlEmpSd9Ou0%2BLuAdj3iWjiOQVSbW66ep5SLGmEjmuftp0rYuAManBoGRVp&X-Amz-Signature=3a529efcd880a34a4a4aabb2413b03b6edbb0cb50e202042f3a605bbe48767be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVAF3RB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmBjOMjij%2BqUO3KMyJkD08y0nByEhRzTZLid%2FeNOyB6QIgFcS%2Frk%2F%2BhJrqw0y5dz100vrL2lecMojbgZCRGZmcgyUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD2OFYkCy%2Bn2ZhuSNyrcA6NgUbSI%2BigG6m7ycHm5jiTfCM16tGOkC%2BPeE%2BI%2BTsYkQtMeS0g2bPAE7O%2FF5jsm41w3zChUUDeoeM%2FBy1Y94RmaQmTF741N8FL3RkF%2FHlfzyQBXl%2FCe9OHUwFmHQWKXERi7lpzJX%2FKQKn1tOsd72RtnRwF7fwJrkao7JQYwGLM8m8Cbz%2BvDzjWbwK36d34rm03hwZ9K2%2BQlkOoDwVVy85q5Bx2GiSY1A4X9P3PP0TcHV%2B0GPwNpN8xNGQitHPcY9i%2F27LKCFvh%2FXQjTwmdrXz6VzBRAiNgke7gwPzNAdzkv7I4Wyiz9XauL6fIEzO3THOET4qx4zqt6drCVdiFldr6wmpZE9xDB%2BFAkJUCKQ%2FGXTbT1aIKCwtl7a0Qz1ZEjhE9DuR1AP2c7fKBH4ZfhCtbXU4EGte8pe6CCojynkxa9KkTtkwUkQliI0x6MX6uQbBz%2BP0uUqswU9jleZFkMalwu10YGuxTDs1%2BTEPzzZYzTALY0a1orjNa%2BnnVEGXnXzDdnV9XC0yF7ztJXd%2FV1MrM774gRZ04DJKqcHHlL4fzrwwWEEk%2B3UB9POweIZESyMLfB6bMbItZFzUMAUyhPwNVg28GmSY6k%2BkXPaHiovhKLCrie66ZmQHbW7Ci0MJr698QGOqUBJ6Nx0ty3zsAovrlOS5dF1UrusPS7lszNTbXGpC8DClzstFDwvikGM3%2FMDIkzuYEXpIug8qPLf1%2BZdsEuU3IVkjUbGk2zrk9ZCpvnqI5i6FJdeSBZqdD6Pba%2FPVAY1c3sG35UwOd5YzjWFZS11to6rQgI%2BUeeZ2cDumIlEmpSd9Ou0%2BLuAdj3iWjiOQVSbW66ep5SLGmEjmuftp0rYuAManBoGRVp&X-Amz-Signature=8975f6b748ac466dcde035a3f3d5a5d43af95e2ccc05805ec24936564c6cb2a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVAF3RB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmBjOMjij%2BqUO3KMyJkD08y0nByEhRzTZLid%2FeNOyB6QIgFcS%2Frk%2F%2BhJrqw0y5dz100vrL2lecMojbgZCRGZmcgyUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD2OFYkCy%2Bn2ZhuSNyrcA6NgUbSI%2BigG6m7ycHm5jiTfCM16tGOkC%2BPeE%2BI%2BTsYkQtMeS0g2bPAE7O%2FF5jsm41w3zChUUDeoeM%2FBy1Y94RmaQmTF741N8FL3RkF%2FHlfzyQBXl%2FCe9OHUwFmHQWKXERi7lpzJX%2FKQKn1tOsd72RtnRwF7fwJrkao7JQYwGLM8m8Cbz%2BvDzjWbwK36d34rm03hwZ9K2%2BQlkOoDwVVy85q5Bx2GiSY1A4X9P3PP0TcHV%2B0GPwNpN8xNGQitHPcY9i%2F27LKCFvh%2FXQjTwmdrXz6VzBRAiNgke7gwPzNAdzkv7I4Wyiz9XauL6fIEzO3THOET4qx4zqt6drCVdiFldr6wmpZE9xDB%2BFAkJUCKQ%2FGXTbT1aIKCwtl7a0Qz1ZEjhE9DuR1AP2c7fKBH4ZfhCtbXU4EGte8pe6CCojynkxa9KkTtkwUkQliI0x6MX6uQbBz%2BP0uUqswU9jleZFkMalwu10YGuxTDs1%2BTEPzzZYzTALY0a1orjNa%2BnnVEGXnXzDdnV9XC0yF7ztJXd%2FV1MrM774gRZ04DJKqcHHlL4fzrwwWEEk%2B3UB9POweIZESyMLfB6bMbItZFzUMAUyhPwNVg28GmSY6k%2BkXPaHiovhKLCrie66ZmQHbW7Ci0MJr698QGOqUBJ6Nx0ty3zsAovrlOS5dF1UrusPS7lszNTbXGpC8DClzstFDwvikGM3%2FMDIkzuYEXpIug8qPLf1%2BZdsEuU3IVkjUbGk2zrk9ZCpvnqI5i6FJdeSBZqdD6Pba%2FPVAY1c3sG35UwOd5YzjWFZS11to6rQgI%2BUeeZ2cDumIlEmpSd9Ou0%2BLuAdj3iWjiOQVSbW66ep5SLGmEjmuftp0rYuAManBoGRVp&X-Amz-Signature=39775d3867c281183461829e7010388af7564e3120785e642accadce07a6f768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVAF3RB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmBjOMjij%2BqUO3KMyJkD08y0nByEhRzTZLid%2FeNOyB6QIgFcS%2Frk%2F%2BhJrqw0y5dz100vrL2lecMojbgZCRGZmcgyUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD2OFYkCy%2Bn2ZhuSNyrcA6NgUbSI%2BigG6m7ycHm5jiTfCM16tGOkC%2BPeE%2BI%2BTsYkQtMeS0g2bPAE7O%2FF5jsm41w3zChUUDeoeM%2FBy1Y94RmaQmTF741N8FL3RkF%2FHlfzyQBXl%2FCe9OHUwFmHQWKXERi7lpzJX%2FKQKn1tOsd72RtnRwF7fwJrkao7JQYwGLM8m8Cbz%2BvDzjWbwK36d34rm03hwZ9K2%2BQlkOoDwVVy85q5Bx2GiSY1A4X9P3PP0TcHV%2B0GPwNpN8xNGQitHPcY9i%2F27LKCFvh%2FXQjTwmdrXz6VzBRAiNgke7gwPzNAdzkv7I4Wyiz9XauL6fIEzO3THOET4qx4zqt6drCVdiFldr6wmpZE9xDB%2BFAkJUCKQ%2FGXTbT1aIKCwtl7a0Qz1ZEjhE9DuR1AP2c7fKBH4ZfhCtbXU4EGte8pe6CCojynkxa9KkTtkwUkQliI0x6MX6uQbBz%2BP0uUqswU9jleZFkMalwu10YGuxTDs1%2BTEPzzZYzTALY0a1orjNa%2BnnVEGXnXzDdnV9XC0yF7ztJXd%2FV1MrM774gRZ04DJKqcHHlL4fzrwwWEEk%2B3UB9POweIZESyMLfB6bMbItZFzUMAUyhPwNVg28GmSY6k%2BkXPaHiovhKLCrie66ZmQHbW7Ci0MJr698QGOqUBJ6Nx0ty3zsAovrlOS5dF1UrusPS7lszNTbXGpC8DClzstFDwvikGM3%2FMDIkzuYEXpIug8qPLf1%2BZdsEuU3IVkjUbGk2zrk9ZCpvnqI5i6FJdeSBZqdD6Pba%2FPVAY1c3sG35UwOd5YzjWFZS11to6rQgI%2BUeeZ2cDumIlEmpSd9Ou0%2BLuAdj3iWjiOQVSbW66ep5SLGmEjmuftp0rYuAManBoGRVp&X-Amz-Signature=0099b5ffb617da41d0c2f350d0417978c36d9ef2e155caca673786ee5608eb1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
