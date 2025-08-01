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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSNADKI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXfYqzg9OuteWpDHC9WPiCKmi8MLX8VY86InvSJa4v6AiEAk95dB3HtGGAfxW80UA6j1x%2FwUZl%2Fjtpl1DZXZb4M2M4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGNanQFWro3l%2BaLjSrcA1kA16W3oqrbh4B7xq%2FvhvwY1%2FAqnGLGxv5yYRkaBBPnzH5A%2B6mF%2BBnIZgnvrx%2FLgi5EgFD2KhDPi2u6jGNcesxncqSGKGYB%2BpZ2NGj%2B%2FxOtYwNcslLpLWP7G9MDVEzdwuiRMVDHPftp4T%2BVEcdFRtGXF%2FE8xbYq%2FhVFeu8RtuAJww23baDau3Q8J5m%2Bwo5Cw%2FSUmWWLiZjddCvkSyAJnUSjvCvwSBu3XNBHNdmi1xt0TCr8OGMnkgslZBIk6GY2NlXiPUVTaVEWOTfoG6JDJ32A7lHTzZ6Zx48IPeaECT6H24RXUYxbjqAtkjJaCItpT%2BIbXg64C6SLt3WSJUfp6W%2FB9Bf%2BRP0sve3JuiW1zjda7inD4dpHGNat2g%2FuJ5SzouYZn0HJtITK3Yuk%2Buaa%2F3yKeHK9aKGo3yWLN8ISpRTaBcK6rsPcN5wwqG%2BnsbliI88AkTAvRwsDfWhiXIU5QFLj0oLUwIV3VpdeNcjF0mq419fMTntgZRHT9A6Surmwg06UWb6Pwj%2BC2tFX%2BknKMtI7oWzAPj%2BNMRt2U4Ysx3fDKFNJfLviWPyxR%2FrRVvXYou0%2BKnHzZFOCnZ7nWnTsyrvDlY%2Fv32l39UHJ69860q8tCNB5ROUWn%2BSMa0SqMLmbscQGOqUBNl8pAZ8s49S17yH6PkBL4XoTZHfKzHs357gRIvbwqpPAHrSXZkRWf%2B9z3JyFr4Mfi05jNspTduu4KAgaM4ijk7toEJPdVDzz%2Bg1dQcfziEGr%2FEqK9CuCvrFTG57AYFrVoQj8TWqy%2Be%2Fc8IHVygHxx7hDHHt91LvV4FEXQa2sb5zyiKElPSX5CMjOsqkt4FHrNeLhFHfz5ATibMAKsv4p3U8DTKte&X-Amz-Signature=324e75517a042736ab6f925859843678e1779acb78ee98c60fede569ddcc6842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSNADKI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXfYqzg9OuteWpDHC9WPiCKmi8MLX8VY86InvSJa4v6AiEAk95dB3HtGGAfxW80UA6j1x%2FwUZl%2Fjtpl1DZXZb4M2M4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGNanQFWro3l%2BaLjSrcA1kA16W3oqrbh4B7xq%2FvhvwY1%2FAqnGLGxv5yYRkaBBPnzH5A%2B6mF%2BBnIZgnvrx%2FLgi5EgFD2KhDPi2u6jGNcesxncqSGKGYB%2BpZ2NGj%2B%2FxOtYwNcslLpLWP7G9MDVEzdwuiRMVDHPftp4T%2BVEcdFRtGXF%2FE8xbYq%2FhVFeu8RtuAJww23baDau3Q8J5m%2Bwo5Cw%2FSUmWWLiZjddCvkSyAJnUSjvCvwSBu3XNBHNdmi1xt0TCr8OGMnkgslZBIk6GY2NlXiPUVTaVEWOTfoG6JDJ32A7lHTzZ6Zx48IPeaECT6H24RXUYxbjqAtkjJaCItpT%2BIbXg64C6SLt3WSJUfp6W%2FB9Bf%2BRP0sve3JuiW1zjda7inD4dpHGNat2g%2FuJ5SzouYZn0HJtITK3Yuk%2Buaa%2F3yKeHK9aKGo3yWLN8ISpRTaBcK6rsPcN5wwqG%2BnsbliI88AkTAvRwsDfWhiXIU5QFLj0oLUwIV3VpdeNcjF0mq419fMTntgZRHT9A6Surmwg06UWb6Pwj%2BC2tFX%2BknKMtI7oWzAPj%2BNMRt2U4Ysx3fDKFNJfLviWPyxR%2FrRVvXYou0%2BKnHzZFOCnZ7nWnTsyrvDlY%2Fv32l39UHJ69860q8tCNB5ROUWn%2BSMa0SqMLmbscQGOqUBNl8pAZ8s49S17yH6PkBL4XoTZHfKzHs357gRIvbwqpPAHrSXZkRWf%2B9z3JyFr4Mfi05jNspTduu4KAgaM4ijk7toEJPdVDzz%2Bg1dQcfziEGr%2FEqK9CuCvrFTG57AYFrVoQj8TWqy%2Be%2Fc8IHVygHxx7hDHHt91LvV4FEXQa2sb5zyiKElPSX5CMjOsqkt4FHrNeLhFHfz5ATibMAKsv4p3U8DTKte&X-Amz-Signature=b01441d2c0c7ae08ec4c9f363ea764138b33be76af0b4bbff231f3b56151e743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSNADKI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXfYqzg9OuteWpDHC9WPiCKmi8MLX8VY86InvSJa4v6AiEAk95dB3HtGGAfxW80UA6j1x%2FwUZl%2Fjtpl1DZXZb4M2M4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGNanQFWro3l%2BaLjSrcA1kA16W3oqrbh4B7xq%2FvhvwY1%2FAqnGLGxv5yYRkaBBPnzH5A%2B6mF%2BBnIZgnvrx%2FLgi5EgFD2KhDPi2u6jGNcesxncqSGKGYB%2BpZ2NGj%2B%2FxOtYwNcslLpLWP7G9MDVEzdwuiRMVDHPftp4T%2BVEcdFRtGXF%2FE8xbYq%2FhVFeu8RtuAJww23baDau3Q8J5m%2Bwo5Cw%2FSUmWWLiZjddCvkSyAJnUSjvCvwSBu3XNBHNdmi1xt0TCr8OGMnkgslZBIk6GY2NlXiPUVTaVEWOTfoG6JDJ32A7lHTzZ6Zx48IPeaECT6H24RXUYxbjqAtkjJaCItpT%2BIbXg64C6SLt3WSJUfp6W%2FB9Bf%2BRP0sve3JuiW1zjda7inD4dpHGNat2g%2FuJ5SzouYZn0HJtITK3Yuk%2Buaa%2F3yKeHK9aKGo3yWLN8ISpRTaBcK6rsPcN5wwqG%2BnsbliI88AkTAvRwsDfWhiXIU5QFLj0oLUwIV3VpdeNcjF0mq419fMTntgZRHT9A6Surmwg06UWb6Pwj%2BC2tFX%2BknKMtI7oWzAPj%2BNMRt2U4Ysx3fDKFNJfLviWPyxR%2FrRVvXYou0%2BKnHzZFOCnZ7nWnTsyrvDlY%2Fv32l39UHJ69860q8tCNB5ROUWn%2BSMa0SqMLmbscQGOqUBNl8pAZ8s49S17yH6PkBL4XoTZHfKzHs357gRIvbwqpPAHrSXZkRWf%2B9z3JyFr4Mfi05jNspTduu4KAgaM4ijk7toEJPdVDzz%2Bg1dQcfziEGr%2FEqK9CuCvrFTG57AYFrVoQj8TWqy%2Be%2Fc8IHVygHxx7hDHHt91LvV4FEXQa2sb5zyiKElPSX5CMjOsqkt4FHrNeLhFHfz5ATibMAKsv4p3U8DTKte&X-Amz-Signature=8cad8375b9d2cb8151e44390917430dbd98e705d399caeacea136027fc2a231a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSNADKI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXfYqzg9OuteWpDHC9WPiCKmi8MLX8VY86InvSJa4v6AiEAk95dB3HtGGAfxW80UA6j1x%2FwUZl%2Fjtpl1DZXZb4M2M4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGNanQFWro3l%2BaLjSrcA1kA16W3oqrbh4B7xq%2FvhvwY1%2FAqnGLGxv5yYRkaBBPnzH5A%2B6mF%2BBnIZgnvrx%2FLgi5EgFD2KhDPi2u6jGNcesxncqSGKGYB%2BpZ2NGj%2B%2FxOtYwNcslLpLWP7G9MDVEzdwuiRMVDHPftp4T%2BVEcdFRtGXF%2FE8xbYq%2FhVFeu8RtuAJww23baDau3Q8J5m%2Bwo5Cw%2FSUmWWLiZjddCvkSyAJnUSjvCvwSBu3XNBHNdmi1xt0TCr8OGMnkgslZBIk6GY2NlXiPUVTaVEWOTfoG6JDJ32A7lHTzZ6Zx48IPeaECT6H24RXUYxbjqAtkjJaCItpT%2BIbXg64C6SLt3WSJUfp6W%2FB9Bf%2BRP0sve3JuiW1zjda7inD4dpHGNat2g%2FuJ5SzouYZn0HJtITK3Yuk%2Buaa%2F3yKeHK9aKGo3yWLN8ISpRTaBcK6rsPcN5wwqG%2BnsbliI88AkTAvRwsDfWhiXIU5QFLj0oLUwIV3VpdeNcjF0mq419fMTntgZRHT9A6Surmwg06UWb6Pwj%2BC2tFX%2BknKMtI7oWzAPj%2BNMRt2U4Ysx3fDKFNJfLviWPyxR%2FrRVvXYou0%2BKnHzZFOCnZ7nWnTsyrvDlY%2Fv32l39UHJ69860q8tCNB5ROUWn%2BSMa0SqMLmbscQGOqUBNl8pAZ8s49S17yH6PkBL4XoTZHfKzHs357gRIvbwqpPAHrSXZkRWf%2B9z3JyFr4Mfi05jNspTduu4KAgaM4ijk7toEJPdVDzz%2Bg1dQcfziEGr%2FEqK9CuCvrFTG57AYFrVoQj8TWqy%2Be%2Fc8IHVygHxx7hDHHt91LvV4FEXQa2sb5zyiKElPSX5CMjOsqkt4FHrNeLhFHfz5ATibMAKsv4p3U8DTKte&X-Amz-Signature=f967461be0744ac68e1703efa9b1c4fba7714bb78ef004a8de2514e0063c3569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSNADKI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXfYqzg9OuteWpDHC9WPiCKmi8MLX8VY86InvSJa4v6AiEAk95dB3HtGGAfxW80UA6j1x%2FwUZl%2Fjtpl1DZXZb4M2M4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGNanQFWro3l%2BaLjSrcA1kA16W3oqrbh4B7xq%2FvhvwY1%2FAqnGLGxv5yYRkaBBPnzH5A%2B6mF%2BBnIZgnvrx%2FLgi5EgFD2KhDPi2u6jGNcesxncqSGKGYB%2BpZ2NGj%2B%2FxOtYwNcslLpLWP7G9MDVEzdwuiRMVDHPftp4T%2BVEcdFRtGXF%2FE8xbYq%2FhVFeu8RtuAJww23baDau3Q8J5m%2Bwo5Cw%2FSUmWWLiZjddCvkSyAJnUSjvCvwSBu3XNBHNdmi1xt0TCr8OGMnkgslZBIk6GY2NlXiPUVTaVEWOTfoG6JDJ32A7lHTzZ6Zx48IPeaECT6H24RXUYxbjqAtkjJaCItpT%2BIbXg64C6SLt3WSJUfp6W%2FB9Bf%2BRP0sve3JuiW1zjda7inD4dpHGNat2g%2FuJ5SzouYZn0HJtITK3Yuk%2Buaa%2F3yKeHK9aKGo3yWLN8ISpRTaBcK6rsPcN5wwqG%2BnsbliI88AkTAvRwsDfWhiXIU5QFLj0oLUwIV3VpdeNcjF0mq419fMTntgZRHT9A6Surmwg06UWb6Pwj%2BC2tFX%2BknKMtI7oWzAPj%2BNMRt2U4Ysx3fDKFNJfLviWPyxR%2FrRVvXYou0%2BKnHzZFOCnZ7nWnTsyrvDlY%2Fv32l39UHJ69860q8tCNB5ROUWn%2BSMa0SqMLmbscQGOqUBNl8pAZ8s49S17yH6PkBL4XoTZHfKzHs357gRIvbwqpPAHrSXZkRWf%2B9z3JyFr4Mfi05jNspTduu4KAgaM4ijk7toEJPdVDzz%2Bg1dQcfziEGr%2FEqK9CuCvrFTG57AYFrVoQj8TWqy%2Be%2Fc8IHVygHxx7hDHHt91LvV4FEXQa2sb5zyiKElPSX5CMjOsqkt4FHrNeLhFHfz5ATibMAKsv4p3U8DTKte&X-Amz-Signature=18d8bd4c73d319fba40d06c6755bd6caf4ed1280660d9bc5e583fcbc62a28559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSNADKI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXfYqzg9OuteWpDHC9WPiCKmi8MLX8VY86InvSJa4v6AiEAk95dB3HtGGAfxW80UA6j1x%2FwUZl%2Fjtpl1DZXZb4M2M4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGNanQFWro3l%2BaLjSrcA1kA16W3oqrbh4B7xq%2FvhvwY1%2FAqnGLGxv5yYRkaBBPnzH5A%2B6mF%2BBnIZgnvrx%2FLgi5EgFD2KhDPi2u6jGNcesxncqSGKGYB%2BpZ2NGj%2B%2FxOtYwNcslLpLWP7G9MDVEzdwuiRMVDHPftp4T%2BVEcdFRtGXF%2FE8xbYq%2FhVFeu8RtuAJww23baDau3Q8J5m%2Bwo5Cw%2FSUmWWLiZjddCvkSyAJnUSjvCvwSBu3XNBHNdmi1xt0TCr8OGMnkgslZBIk6GY2NlXiPUVTaVEWOTfoG6JDJ32A7lHTzZ6Zx48IPeaECT6H24RXUYxbjqAtkjJaCItpT%2BIbXg64C6SLt3WSJUfp6W%2FB9Bf%2BRP0sve3JuiW1zjda7inD4dpHGNat2g%2FuJ5SzouYZn0HJtITK3Yuk%2Buaa%2F3yKeHK9aKGo3yWLN8ISpRTaBcK6rsPcN5wwqG%2BnsbliI88AkTAvRwsDfWhiXIU5QFLj0oLUwIV3VpdeNcjF0mq419fMTntgZRHT9A6Surmwg06UWb6Pwj%2BC2tFX%2BknKMtI7oWzAPj%2BNMRt2U4Ysx3fDKFNJfLviWPyxR%2FrRVvXYou0%2BKnHzZFOCnZ7nWnTsyrvDlY%2Fv32l39UHJ69860q8tCNB5ROUWn%2BSMa0SqMLmbscQGOqUBNl8pAZ8s49S17yH6PkBL4XoTZHfKzHs357gRIvbwqpPAHrSXZkRWf%2B9z3JyFr4Mfi05jNspTduu4KAgaM4ijk7toEJPdVDzz%2Bg1dQcfziEGr%2FEqK9CuCvrFTG57AYFrVoQj8TWqy%2Be%2Fc8IHVygHxx7hDHHt91LvV4FEXQa2sb5zyiKElPSX5CMjOsqkt4FHrNeLhFHfz5ATibMAKsv4p3U8DTKte&X-Amz-Signature=8485c02044a53973237e408839ef6f97b310cbc407f5bba02869a405b2d453ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSNADKI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXfYqzg9OuteWpDHC9WPiCKmi8MLX8VY86InvSJa4v6AiEAk95dB3HtGGAfxW80UA6j1x%2FwUZl%2Fjtpl1DZXZb4M2M4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGNanQFWro3l%2BaLjSrcA1kA16W3oqrbh4B7xq%2FvhvwY1%2FAqnGLGxv5yYRkaBBPnzH5A%2B6mF%2BBnIZgnvrx%2FLgi5EgFD2KhDPi2u6jGNcesxncqSGKGYB%2BpZ2NGj%2B%2FxOtYwNcslLpLWP7G9MDVEzdwuiRMVDHPftp4T%2BVEcdFRtGXF%2FE8xbYq%2FhVFeu8RtuAJww23baDau3Q8J5m%2Bwo5Cw%2FSUmWWLiZjddCvkSyAJnUSjvCvwSBu3XNBHNdmi1xt0TCr8OGMnkgslZBIk6GY2NlXiPUVTaVEWOTfoG6JDJ32A7lHTzZ6Zx48IPeaECT6H24RXUYxbjqAtkjJaCItpT%2BIbXg64C6SLt3WSJUfp6W%2FB9Bf%2BRP0sve3JuiW1zjda7inD4dpHGNat2g%2FuJ5SzouYZn0HJtITK3Yuk%2Buaa%2F3yKeHK9aKGo3yWLN8ISpRTaBcK6rsPcN5wwqG%2BnsbliI88AkTAvRwsDfWhiXIU5QFLj0oLUwIV3VpdeNcjF0mq419fMTntgZRHT9A6Surmwg06UWb6Pwj%2BC2tFX%2BknKMtI7oWzAPj%2BNMRt2U4Ysx3fDKFNJfLviWPyxR%2FrRVvXYou0%2BKnHzZFOCnZ7nWnTsyrvDlY%2Fv32l39UHJ69860q8tCNB5ROUWn%2BSMa0SqMLmbscQGOqUBNl8pAZ8s49S17yH6PkBL4XoTZHfKzHs357gRIvbwqpPAHrSXZkRWf%2B9z3JyFr4Mfi05jNspTduu4KAgaM4ijk7toEJPdVDzz%2Bg1dQcfziEGr%2FEqK9CuCvrFTG57AYFrVoQj8TWqy%2Be%2Fc8IHVygHxx7hDHHt91LvV4FEXQa2sb5zyiKElPSX5CMjOsqkt4FHrNeLhFHfz5ATibMAKsv4p3U8DTKte&X-Amz-Signature=9368ef74ef9561cacfeb93612881b8b9cfb95dae16fc318679137454b28f7e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSNADKI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXfYqzg9OuteWpDHC9WPiCKmi8MLX8VY86InvSJa4v6AiEAk95dB3HtGGAfxW80UA6j1x%2FwUZl%2Fjtpl1DZXZb4M2M4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGNanQFWro3l%2BaLjSrcA1kA16W3oqrbh4B7xq%2FvhvwY1%2FAqnGLGxv5yYRkaBBPnzH5A%2B6mF%2BBnIZgnvrx%2FLgi5EgFD2KhDPi2u6jGNcesxncqSGKGYB%2BpZ2NGj%2B%2FxOtYwNcslLpLWP7G9MDVEzdwuiRMVDHPftp4T%2BVEcdFRtGXF%2FE8xbYq%2FhVFeu8RtuAJww23baDau3Q8J5m%2Bwo5Cw%2FSUmWWLiZjddCvkSyAJnUSjvCvwSBu3XNBHNdmi1xt0TCr8OGMnkgslZBIk6GY2NlXiPUVTaVEWOTfoG6JDJ32A7lHTzZ6Zx48IPeaECT6H24RXUYxbjqAtkjJaCItpT%2BIbXg64C6SLt3WSJUfp6W%2FB9Bf%2BRP0sve3JuiW1zjda7inD4dpHGNat2g%2FuJ5SzouYZn0HJtITK3Yuk%2Buaa%2F3yKeHK9aKGo3yWLN8ISpRTaBcK6rsPcN5wwqG%2BnsbliI88AkTAvRwsDfWhiXIU5QFLj0oLUwIV3VpdeNcjF0mq419fMTntgZRHT9A6Surmwg06UWb6Pwj%2BC2tFX%2BknKMtI7oWzAPj%2BNMRt2U4Ysx3fDKFNJfLviWPyxR%2FrRVvXYou0%2BKnHzZFOCnZ7nWnTsyrvDlY%2Fv32l39UHJ69860q8tCNB5ROUWn%2BSMa0SqMLmbscQGOqUBNl8pAZ8s49S17yH6PkBL4XoTZHfKzHs357gRIvbwqpPAHrSXZkRWf%2B9z3JyFr4Mfi05jNspTduu4KAgaM4ijk7toEJPdVDzz%2Bg1dQcfziEGr%2FEqK9CuCvrFTG57AYFrVoQj8TWqy%2Be%2Fc8IHVygHxx7hDHHt91LvV4FEXQa2sb5zyiKElPSX5CMjOsqkt4FHrNeLhFHfz5ATibMAKsv4p3U8DTKte&X-Amz-Signature=caf98ce03bf62bf114fb5ee555dc7df27b3e141e0a45b01600e25f0cf27ef3e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSNADKI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXfYqzg9OuteWpDHC9WPiCKmi8MLX8VY86InvSJa4v6AiEAk95dB3HtGGAfxW80UA6j1x%2FwUZl%2Fjtpl1DZXZb4M2M4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGNanQFWro3l%2BaLjSrcA1kA16W3oqrbh4B7xq%2FvhvwY1%2FAqnGLGxv5yYRkaBBPnzH5A%2B6mF%2BBnIZgnvrx%2FLgi5EgFD2KhDPi2u6jGNcesxncqSGKGYB%2BpZ2NGj%2B%2FxOtYwNcslLpLWP7G9MDVEzdwuiRMVDHPftp4T%2BVEcdFRtGXF%2FE8xbYq%2FhVFeu8RtuAJww23baDau3Q8J5m%2Bwo5Cw%2FSUmWWLiZjddCvkSyAJnUSjvCvwSBu3XNBHNdmi1xt0TCr8OGMnkgslZBIk6GY2NlXiPUVTaVEWOTfoG6JDJ32A7lHTzZ6Zx48IPeaECT6H24RXUYxbjqAtkjJaCItpT%2BIbXg64C6SLt3WSJUfp6W%2FB9Bf%2BRP0sve3JuiW1zjda7inD4dpHGNat2g%2FuJ5SzouYZn0HJtITK3Yuk%2Buaa%2F3yKeHK9aKGo3yWLN8ISpRTaBcK6rsPcN5wwqG%2BnsbliI88AkTAvRwsDfWhiXIU5QFLj0oLUwIV3VpdeNcjF0mq419fMTntgZRHT9A6Surmwg06UWb6Pwj%2BC2tFX%2BknKMtI7oWzAPj%2BNMRt2U4Ysx3fDKFNJfLviWPyxR%2FrRVvXYou0%2BKnHzZFOCnZ7nWnTsyrvDlY%2Fv32l39UHJ69860q8tCNB5ROUWn%2BSMa0SqMLmbscQGOqUBNl8pAZ8s49S17yH6PkBL4XoTZHfKzHs357gRIvbwqpPAHrSXZkRWf%2B9z3JyFr4Mfi05jNspTduu4KAgaM4ijk7toEJPdVDzz%2Bg1dQcfziEGr%2FEqK9CuCvrFTG57AYFrVoQj8TWqy%2Be%2Fc8IHVygHxx7hDHHt91LvV4FEXQa2sb5zyiKElPSX5CMjOsqkt4FHrNeLhFHfz5ATibMAKsv4p3U8DTKte&X-Amz-Signature=19eaa873f3a05542e22ce5dcff4a5bf845bf03858a897ed67e6a0892555fe980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSNADKI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXfYqzg9OuteWpDHC9WPiCKmi8MLX8VY86InvSJa4v6AiEAk95dB3HtGGAfxW80UA6j1x%2FwUZl%2Fjtpl1DZXZb4M2M4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGNanQFWro3l%2BaLjSrcA1kA16W3oqrbh4B7xq%2FvhvwY1%2FAqnGLGxv5yYRkaBBPnzH5A%2B6mF%2BBnIZgnvrx%2FLgi5EgFD2KhDPi2u6jGNcesxncqSGKGYB%2BpZ2NGj%2B%2FxOtYwNcslLpLWP7G9MDVEzdwuiRMVDHPftp4T%2BVEcdFRtGXF%2FE8xbYq%2FhVFeu8RtuAJww23baDau3Q8J5m%2Bwo5Cw%2FSUmWWLiZjddCvkSyAJnUSjvCvwSBu3XNBHNdmi1xt0TCr8OGMnkgslZBIk6GY2NlXiPUVTaVEWOTfoG6JDJ32A7lHTzZ6Zx48IPeaECT6H24RXUYxbjqAtkjJaCItpT%2BIbXg64C6SLt3WSJUfp6W%2FB9Bf%2BRP0sve3JuiW1zjda7inD4dpHGNat2g%2FuJ5SzouYZn0HJtITK3Yuk%2Buaa%2F3yKeHK9aKGo3yWLN8ISpRTaBcK6rsPcN5wwqG%2BnsbliI88AkTAvRwsDfWhiXIU5QFLj0oLUwIV3VpdeNcjF0mq419fMTntgZRHT9A6Surmwg06UWb6Pwj%2BC2tFX%2BknKMtI7oWzAPj%2BNMRt2U4Ysx3fDKFNJfLviWPyxR%2FrRVvXYou0%2BKnHzZFOCnZ7nWnTsyrvDlY%2Fv32l39UHJ69860q8tCNB5ROUWn%2BSMa0SqMLmbscQGOqUBNl8pAZ8s49S17yH6PkBL4XoTZHfKzHs357gRIvbwqpPAHrSXZkRWf%2B9z3JyFr4Mfi05jNspTduu4KAgaM4ijk7toEJPdVDzz%2Bg1dQcfziEGr%2FEqK9CuCvrFTG57AYFrVoQj8TWqy%2Be%2Fc8IHVygHxx7hDHHt91LvV4FEXQa2sb5zyiKElPSX5CMjOsqkt4FHrNeLhFHfz5ATibMAKsv4p3U8DTKte&X-Amz-Signature=594f68fdd7a824ef5e8975903502eb5d4d2e8ddb6f52f63300de9ae9c34e9492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSNADKI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXfYqzg9OuteWpDHC9WPiCKmi8MLX8VY86InvSJa4v6AiEAk95dB3HtGGAfxW80UA6j1x%2FwUZl%2Fjtpl1DZXZb4M2M4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGNanQFWro3l%2BaLjSrcA1kA16W3oqrbh4B7xq%2FvhvwY1%2FAqnGLGxv5yYRkaBBPnzH5A%2B6mF%2BBnIZgnvrx%2FLgi5EgFD2KhDPi2u6jGNcesxncqSGKGYB%2BpZ2NGj%2B%2FxOtYwNcslLpLWP7G9MDVEzdwuiRMVDHPftp4T%2BVEcdFRtGXF%2FE8xbYq%2FhVFeu8RtuAJww23baDau3Q8J5m%2Bwo5Cw%2FSUmWWLiZjddCvkSyAJnUSjvCvwSBu3XNBHNdmi1xt0TCr8OGMnkgslZBIk6GY2NlXiPUVTaVEWOTfoG6JDJ32A7lHTzZ6Zx48IPeaECT6H24RXUYxbjqAtkjJaCItpT%2BIbXg64C6SLt3WSJUfp6W%2FB9Bf%2BRP0sve3JuiW1zjda7inD4dpHGNat2g%2FuJ5SzouYZn0HJtITK3Yuk%2Buaa%2F3yKeHK9aKGo3yWLN8ISpRTaBcK6rsPcN5wwqG%2BnsbliI88AkTAvRwsDfWhiXIU5QFLj0oLUwIV3VpdeNcjF0mq419fMTntgZRHT9A6Surmwg06UWb6Pwj%2BC2tFX%2BknKMtI7oWzAPj%2BNMRt2U4Ysx3fDKFNJfLviWPyxR%2FrRVvXYou0%2BKnHzZFOCnZ7nWnTsyrvDlY%2Fv32l39UHJ69860q8tCNB5ROUWn%2BSMa0SqMLmbscQGOqUBNl8pAZ8s49S17yH6PkBL4XoTZHfKzHs357gRIvbwqpPAHrSXZkRWf%2B9z3JyFr4Mfi05jNspTduu4KAgaM4ijk7toEJPdVDzz%2Bg1dQcfziEGr%2FEqK9CuCvrFTG57AYFrVoQj8TWqy%2Be%2Fc8IHVygHxx7hDHHt91LvV4FEXQa2sb5zyiKElPSX5CMjOsqkt4FHrNeLhFHfz5ATibMAKsv4p3U8DTKte&X-Amz-Signature=cc7817df745c697df290d9d0b8f9bf059814c7b8cbd3d626cecd8463ba78f967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSNADKI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXfYqzg9OuteWpDHC9WPiCKmi8MLX8VY86InvSJa4v6AiEAk95dB3HtGGAfxW80UA6j1x%2FwUZl%2Fjtpl1DZXZb4M2M4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGNanQFWro3l%2BaLjSrcA1kA16W3oqrbh4B7xq%2FvhvwY1%2FAqnGLGxv5yYRkaBBPnzH5A%2B6mF%2BBnIZgnvrx%2FLgi5EgFD2KhDPi2u6jGNcesxncqSGKGYB%2BpZ2NGj%2B%2FxOtYwNcslLpLWP7G9MDVEzdwuiRMVDHPftp4T%2BVEcdFRtGXF%2FE8xbYq%2FhVFeu8RtuAJww23baDau3Q8J5m%2Bwo5Cw%2FSUmWWLiZjddCvkSyAJnUSjvCvwSBu3XNBHNdmi1xt0TCr8OGMnkgslZBIk6GY2NlXiPUVTaVEWOTfoG6JDJ32A7lHTzZ6Zx48IPeaECT6H24RXUYxbjqAtkjJaCItpT%2BIbXg64C6SLt3WSJUfp6W%2FB9Bf%2BRP0sve3JuiW1zjda7inD4dpHGNat2g%2FuJ5SzouYZn0HJtITK3Yuk%2Buaa%2F3yKeHK9aKGo3yWLN8ISpRTaBcK6rsPcN5wwqG%2BnsbliI88AkTAvRwsDfWhiXIU5QFLj0oLUwIV3VpdeNcjF0mq419fMTntgZRHT9A6Surmwg06UWb6Pwj%2BC2tFX%2BknKMtI7oWzAPj%2BNMRt2U4Ysx3fDKFNJfLviWPyxR%2FrRVvXYou0%2BKnHzZFOCnZ7nWnTsyrvDlY%2Fv32l39UHJ69860q8tCNB5ROUWn%2BSMa0SqMLmbscQGOqUBNl8pAZ8s49S17yH6PkBL4XoTZHfKzHs357gRIvbwqpPAHrSXZkRWf%2B9z3JyFr4Mfi05jNspTduu4KAgaM4ijk7toEJPdVDzz%2Bg1dQcfziEGr%2FEqK9CuCvrFTG57AYFrVoQj8TWqy%2Be%2Fc8IHVygHxx7hDHHt91LvV4FEXQa2sb5zyiKElPSX5CMjOsqkt4FHrNeLhFHfz5ATibMAKsv4p3U8DTKte&X-Amz-Signature=3b525a1560baf370fb6cada4d17ba03db282dcf0ca74f2ad291fa847dbeed3ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSNADKI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXfYqzg9OuteWpDHC9WPiCKmi8MLX8VY86InvSJa4v6AiEAk95dB3HtGGAfxW80UA6j1x%2FwUZl%2Fjtpl1DZXZb4M2M4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGNanQFWro3l%2BaLjSrcA1kA16W3oqrbh4B7xq%2FvhvwY1%2FAqnGLGxv5yYRkaBBPnzH5A%2B6mF%2BBnIZgnvrx%2FLgi5EgFD2KhDPi2u6jGNcesxncqSGKGYB%2BpZ2NGj%2B%2FxOtYwNcslLpLWP7G9MDVEzdwuiRMVDHPftp4T%2BVEcdFRtGXF%2FE8xbYq%2FhVFeu8RtuAJww23baDau3Q8J5m%2Bwo5Cw%2FSUmWWLiZjddCvkSyAJnUSjvCvwSBu3XNBHNdmi1xt0TCr8OGMnkgslZBIk6GY2NlXiPUVTaVEWOTfoG6JDJ32A7lHTzZ6Zx48IPeaECT6H24RXUYxbjqAtkjJaCItpT%2BIbXg64C6SLt3WSJUfp6W%2FB9Bf%2BRP0sve3JuiW1zjda7inD4dpHGNat2g%2FuJ5SzouYZn0HJtITK3Yuk%2Buaa%2F3yKeHK9aKGo3yWLN8ISpRTaBcK6rsPcN5wwqG%2BnsbliI88AkTAvRwsDfWhiXIU5QFLj0oLUwIV3VpdeNcjF0mq419fMTntgZRHT9A6Surmwg06UWb6Pwj%2BC2tFX%2BknKMtI7oWzAPj%2BNMRt2U4Ysx3fDKFNJfLviWPyxR%2FrRVvXYou0%2BKnHzZFOCnZ7nWnTsyrvDlY%2Fv32l39UHJ69860q8tCNB5ROUWn%2BSMa0SqMLmbscQGOqUBNl8pAZ8s49S17yH6PkBL4XoTZHfKzHs357gRIvbwqpPAHrSXZkRWf%2B9z3JyFr4Mfi05jNspTduu4KAgaM4ijk7toEJPdVDzz%2Bg1dQcfziEGr%2FEqK9CuCvrFTG57AYFrVoQj8TWqy%2Be%2Fc8IHVygHxx7hDHHt91LvV4FEXQa2sb5zyiKElPSX5CMjOsqkt4FHrNeLhFHfz5ATibMAKsv4p3U8DTKte&X-Amz-Signature=70805e5a923d8a9dad758dd3f604e068ffdd22e888042239dfa269e86d27dee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSNADKI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXfYqzg9OuteWpDHC9WPiCKmi8MLX8VY86InvSJa4v6AiEAk95dB3HtGGAfxW80UA6j1x%2FwUZl%2Fjtpl1DZXZb4M2M4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGNanQFWro3l%2BaLjSrcA1kA16W3oqrbh4B7xq%2FvhvwY1%2FAqnGLGxv5yYRkaBBPnzH5A%2B6mF%2BBnIZgnvrx%2FLgi5EgFD2KhDPi2u6jGNcesxncqSGKGYB%2BpZ2NGj%2B%2FxOtYwNcslLpLWP7G9MDVEzdwuiRMVDHPftp4T%2BVEcdFRtGXF%2FE8xbYq%2FhVFeu8RtuAJww23baDau3Q8J5m%2Bwo5Cw%2FSUmWWLiZjddCvkSyAJnUSjvCvwSBu3XNBHNdmi1xt0TCr8OGMnkgslZBIk6GY2NlXiPUVTaVEWOTfoG6JDJ32A7lHTzZ6Zx48IPeaECT6H24RXUYxbjqAtkjJaCItpT%2BIbXg64C6SLt3WSJUfp6W%2FB9Bf%2BRP0sve3JuiW1zjda7inD4dpHGNat2g%2FuJ5SzouYZn0HJtITK3Yuk%2Buaa%2F3yKeHK9aKGo3yWLN8ISpRTaBcK6rsPcN5wwqG%2BnsbliI88AkTAvRwsDfWhiXIU5QFLj0oLUwIV3VpdeNcjF0mq419fMTntgZRHT9A6Surmwg06UWb6Pwj%2BC2tFX%2BknKMtI7oWzAPj%2BNMRt2U4Ysx3fDKFNJfLviWPyxR%2FrRVvXYou0%2BKnHzZFOCnZ7nWnTsyrvDlY%2Fv32l39UHJ69860q8tCNB5ROUWn%2BSMa0SqMLmbscQGOqUBNl8pAZ8s49S17yH6PkBL4XoTZHfKzHs357gRIvbwqpPAHrSXZkRWf%2B9z3JyFr4Mfi05jNspTduu4KAgaM4ijk7toEJPdVDzz%2Bg1dQcfziEGr%2FEqK9CuCvrFTG57AYFrVoQj8TWqy%2Be%2Fc8IHVygHxx7hDHHt91LvV4FEXQa2sb5zyiKElPSX5CMjOsqkt4FHrNeLhFHfz5ATibMAKsv4p3U8DTKte&X-Amz-Signature=5446e96b44810df092c147b1ab0e115fdc92cecf465e9c0f82814d0ea9510fa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
