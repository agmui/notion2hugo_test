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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIZJTFB%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFizO2xsTInkp0oEyRZ43wL2xSNoy90DpSUs7jrY6p8OAiA4iBir4KJDFfkGclDBZwkBz%2Fr06WIX4PWuxRwnXdeS%2FSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwOE3PPIWtgu%2B5tFnKtwDf2Zap5CvO7T9PyTSBJx1UcXfgtrqReyv2gm30AswaCl%2BNx03XNZoX4WQ%2FJGpnipQ%2BXco8JZ7WKjG2zZhEQAkKCPA%2F%2B1ryvuyszycN2osjYlqtMCvCCjZhvA3oL9jx0Uv%2FMpXV5OO8ucd9ajDOI3zp3s5X39GrU7NC2244b7fEO%2B3ZhCaaMxS2WvobZ8HEAree9xjysGPZlL2AQSw2lXFLhr3xVwfibTIMmSOLyijeZlpfvcSOUv0PNsVzfM74eIoaWLBPJHdEi%2FRhgJENkJ%2FPWVZCzxva9iocQWUNRmwaWcWgQvva4EqLmg077sT9EYLCKP289JgS3%2FyCLO%2FtPMssO%2BhnNA1pwITrFZmHv0mZXT%2B0FuudwYQOqBUsfYgvnd5E22slw4Txz58noLtPmVbq1NjxohL%2FPUTF%2FrcARlnbGonCBRF2qHCF5OM4%2BkbYM33HLO93bUSAWraBi5Zy9Fxf%2FSTKLspkxj4JToDC4anuZC0x5kdjOTTL3xB2RyZfpqNw3rFGyPVnOC5XDAYivZLfd7tXP9HJ19Xoa%2FOgnQw3rLk9db5gGPx9sNcPpCUPuhTvXFNFlmCL87l5LxOYJUZTSaHrNzrl3Ilf14MJR6F1FVEk%2BEIw1XZoGe1OZ0wmsmRxwY6pgFqcvToeVjRJa64Y2kSpVR1%2F3Gwit%2BZURPwRVoXt93CAQ%2F%2BENociJAbqk1vFTHloJuoZg76AC9qKBGabddZ3uL1HCK8nJWl3LIVcVVSKklId82V4c0gZk%2BA9dq0B5rBhOLMmTT7A%2FW40b724JJ9Wz5LiHDhu%2B6HHVTMaK9dCkc3mikLYXcuvz9tpGLhVH3kxRC16Swfn0dkRaw4KIvznjrDHeBC4BA4&X-Amz-Signature=f5b3c2edd0ceb13dc07828ea63a8c58eb70cefadeed32b73f5f9587a61f7cb62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIZJTFB%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFizO2xsTInkp0oEyRZ43wL2xSNoy90DpSUs7jrY6p8OAiA4iBir4KJDFfkGclDBZwkBz%2Fr06WIX4PWuxRwnXdeS%2FSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwOE3PPIWtgu%2B5tFnKtwDf2Zap5CvO7T9PyTSBJx1UcXfgtrqReyv2gm30AswaCl%2BNx03XNZoX4WQ%2FJGpnipQ%2BXco8JZ7WKjG2zZhEQAkKCPA%2F%2B1ryvuyszycN2osjYlqtMCvCCjZhvA3oL9jx0Uv%2FMpXV5OO8ucd9ajDOI3zp3s5X39GrU7NC2244b7fEO%2B3ZhCaaMxS2WvobZ8HEAree9xjysGPZlL2AQSw2lXFLhr3xVwfibTIMmSOLyijeZlpfvcSOUv0PNsVzfM74eIoaWLBPJHdEi%2FRhgJENkJ%2FPWVZCzxva9iocQWUNRmwaWcWgQvva4EqLmg077sT9EYLCKP289JgS3%2FyCLO%2FtPMssO%2BhnNA1pwITrFZmHv0mZXT%2B0FuudwYQOqBUsfYgvnd5E22slw4Txz58noLtPmVbq1NjxohL%2FPUTF%2FrcARlnbGonCBRF2qHCF5OM4%2BkbYM33HLO93bUSAWraBi5Zy9Fxf%2FSTKLspkxj4JToDC4anuZC0x5kdjOTTL3xB2RyZfpqNw3rFGyPVnOC5XDAYivZLfd7tXP9HJ19Xoa%2FOgnQw3rLk9db5gGPx9sNcPpCUPuhTvXFNFlmCL87l5LxOYJUZTSaHrNzrl3Ilf14MJR6F1FVEk%2BEIw1XZoGe1OZ0wmsmRxwY6pgFqcvToeVjRJa64Y2kSpVR1%2F3Gwit%2BZURPwRVoXt93CAQ%2F%2BENociJAbqk1vFTHloJuoZg76AC9qKBGabddZ3uL1HCK8nJWl3LIVcVVSKklId82V4c0gZk%2BA9dq0B5rBhOLMmTT7A%2FW40b724JJ9Wz5LiHDhu%2B6HHVTMaK9dCkc3mikLYXcuvz9tpGLhVH3kxRC16Swfn0dkRaw4KIvznjrDHeBC4BA4&X-Amz-Signature=b087a2b9aa2560b1015ca214bd85c8cf647fdf0eeb0833ba31649a188a3e1e0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIZJTFB%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFizO2xsTInkp0oEyRZ43wL2xSNoy90DpSUs7jrY6p8OAiA4iBir4KJDFfkGclDBZwkBz%2Fr06WIX4PWuxRwnXdeS%2FSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwOE3PPIWtgu%2B5tFnKtwDf2Zap5CvO7T9PyTSBJx1UcXfgtrqReyv2gm30AswaCl%2BNx03XNZoX4WQ%2FJGpnipQ%2BXco8JZ7WKjG2zZhEQAkKCPA%2F%2B1ryvuyszycN2osjYlqtMCvCCjZhvA3oL9jx0Uv%2FMpXV5OO8ucd9ajDOI3zp3s5X39GrU7NC2244b7fEO%2B3ZhCaaMxS2WvobZ8HEAree9xjysGPZlL2AQSw2lXFLhr3xVwfibTIMmSOLyijeZlpfvcSOUv0PNsVzfM74eIoaWLBPJHdEi%2FRhgJENkJ%2FPWVZCzxva9iocQWUNRmwaWcWgQvva4EqLmg077sT9EYLCKP289JgS3%2FyCLO%2FtPMssO%2BhnNA1pwITrFZmHv0mZXT%2B0FuudwYQOqBUsfYgvnd5E22slw4Txz58noLtPmVbq1NjxohL%2FPUTF%2FrcARlnbGonCBRF2qHCF5OM4%2BkbYM33HLO93bUSAWraBi5Zy9Fxf%2FSTKLspkxj4JToDC4anuZC0x5kdjOTTL3xB2RyZfpqNw3rFGyPVnOC5XDAYivZLfd7tXP9HJ19Xoa%2FOgnQw3rLk9db5gGPx9sNcPpCUPuhTvXFNFlmCL87l5LxOYJUZTSaHrNzrl3Ilf14MJR6F1FVEk%2BEIw1XZoGe1OZ0wmsmRxwY6pgFqcvToeVjRJa64Y2kSpVR1%2F3Gwit%2BZURPwRVoXt93CAQ%2F%2BENociJAbqk1vFTHloJuoZg76AC9qKBGabddZ3uL1HCK8nJWl3LIVcVVSKklId82V4c0gZk%2BA9dq0B5rBhOLMmTT7A%2FW40b724JJ9Wz5LiHDhu%2B6HHVTMaK9dCkc3mikLYXcuvz9tpGLhVH3kxRC16Swfn0dkRaw4KIvznjrDHeBC4BA4&X-Amz-Signature=091d0353abfd361a7a5ff1ab7c50eb0909b6c9d035c5695bed677bae8fe6c436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIZJTFB%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFizO2xsTInkp0oEyRZ43wL2xSNoy90DpSUs7jrY6p8OAiA4iBir4KJDFfkGclDBZwkBz%2Fr06WIX4PWuxRwnXdeS%2FSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwOE3PPIWtgu%2B5tFnKtwDf2Zap5CvO7T9PyTSBJx1UcXfgtrqReyv2gm30AswaCl%2BNx03XNZoX4WQ%2FJGpnipQ%2BXco8JZ7WKjG2zZhEQAkKCPA%2F%2B1ryvuyszycN2osjYlqtMCvCCjZhvA3oL9jx0Uv%2FMpXV5OO8ucd9ajDOI3zp3s5X39GrU7NC2244b7fEO%2B3ZhCaaMxS2WvobZ8HEAree9xjysGPZlL2AQSw2lXFLhr3xVwfibTIMmSOLyijeZlpfvcSOUv0PNsVzfM74eIoaWLBPJHdEi%2FRhgJENkJ%2FPWVZCzxva9iocQWUNRmwaWcWgQvva4EqLmg077sT9EYLCKP289JgS3%2FyCLO%2FtPMssO%2BhnNA1pwITrFZmHv0mZXT%2B0FuudwYQOqBUsfYgvnd5E22slw4Txz58noLtPmVbq1NjxohL%2FPUTF%2FrcARlnbGonCBRF2qHCF5OM4%2BkbYM33HLO93bUSAWraBi5Zy9Fxf%2FSTKLspkxj4JToDC4anuZC0x5kdjOTTL3xB2RyZfpqNw3rFGyPVnOC5XDAYivZLfd7tXP9HJ19Xoa%2FOgnQw3rLk9db5gGPx9sNcPpCUPuhTvXFNFlmCL87l5LxOYJUZTSaHrNzrl3Ilf14MJR6F1FVEk%2BEIw1XZoGe1OZ0wmsmRxwY6pgFqcvToeVjRJa64Y2kSpVR1%2F3Gwit%2BZURPwRVoXt93CAQ%2F%2BENociJAbqk1vFTHloJuoZg76AC9qKBGabddZ3uL1HCK8nJWl3LIVcVVSKklId82V4c0gZk%2BA9dq0B5rBhOLMmTT7A%2FW40b724JJ9Wz5LiHDhu%2B6HHVTMaK9dCkc3mikLYXcuvz9tpGLhVH3kxRC16Swfn0dkRaw4KIvznjrDHeBC4BA4&X-Amz-Signature=1ebfefed7d6d21122b088cd4dae8b6b8f0d2115a140b09973e4750bef3bf962c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIZJTFB%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFizO2xsTInkp0oEyRZ43wL2xSNoy90DpSUs7jrY6p8OAiA4iBir4KJDFfkGclDBZwkBz%2Fr06WIX4PWuxRwnXdeS%2FSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwOE3PPIWtgu%2B5tFnKtwDf2Zap5CvO7T9PyTSBJx1UcXfgtrqReyv2gm30AswaCl%2BNx03XNZoX4WQ%2FJGpnipQ%2BXco8JZ7WKjG2zZhEQAkKCPA%2F%2B1ryvuyszycN2osjYlqtMCvCCjZhvA3oL9jx0Uv%2FMpXV5OO8ucd9ajDOI3zp3s5X39GrU7NC2244b7fEO%2B3ZhCaaMxS2WvobZ8HEAree9xjysGPZlL2AQSw2lXFLhr3xVwfibTIMmSOLyijeZlpfvcSOUv0PNsVzfM74eIoaWLBPJHdEi%2FRhgJENkJ%2FPWVZCzxva9iocQWUNRmwaWcWgQvva4EqLmg077sT9EYLCKP289JgS3%2FyCLO%2FtPMssO%2BhnNA1pwITrFZmHv0mZXT%2B0FuudwYQOqBUsfYgvnd5E22slw4Txz58noLtPmVbq1NjxohL%2FPUTF%2FrcARlnbGonCBRF2qHCF5OM4%2BkbYM33HLO93bUSAWraBi5Zy9Fxf%2FSTKLspkxj4JToDC4anuZC0x5kdjOTTL3xB2RyZfpqNw3rFGyPVnOC5XDAYivZLfd7tXP9HJ19Xoa%2FOgnQw3rLk9db5gGPx9sNcPpCUPuhTvXFNFlmCL87l5LxOYJUZTSaHrNzrl3Ilf14MJR6F1FVEk%2BEIw1XZoGe1OZ0wmsmRxwY6pgFqcvToeVjRJa64Y2kSpVR1%2F3Gwit%2BZURPwRVoXt93CAQ%2F%2BENociJAbqk1vFTHloJuoZg76AC9qKBGabddZ3uL1HCK8nJWl3LIVcVVSKklId82V4c0gZk%2BA9dq0B5rBhOLMmTT7A%2FW40b724JJ9Wz5LiHDhu%2B6HHVTMaK9dCkc3mikLYXcuvz9tpGLhVH3kxRC16Swfn0dkRaw4KIvznjrDHeBC4BA4&X-Amz-Signature=7ec706bdf3eeb4741d8539a7a9c7714da171d6db97b83f695675dfe435698c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIZJTFB%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFizO2xsTInkp0oEyRZ43wL2xSNoy90DpSUs7jrY6p8OAiA4iBir4KJDFfkGclDBZwkBz%2Fr06WIX4PWuxRwnXdeS%2FSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwOE3PPIWtgu%2B5tFnKtwDf2Zap5CvO7T9PyTSBJx1UcXfgtrqReyv2gm30AswaCl%2BNx03XNZoX4WQ%2FJGpnipQ%2BXco8JZ7WKjG2zZhEQAkKCPA%2F%2B1ryvuyszycN2osjYlqtMCvCCjZhvA3oL9jx0Uv%2FMpXV5OO8ucd9ajDOI3zp3s5X39GrU7NC2244b7fEO%2B3ZhCaaMxS2WvobZ8HEAree9xjysGPZlL2AQSw2lXFLhr3xVwfibTIMmSOLyijeZlpfvcSOUv0PNsVzfM74eIoaWLBPJHdEi%2FRhgJENkJ%2FPWVZCzxva9iocQWUNRmwaWcWgQvva4EqLmg077sT9EYLCKP289JgS3%2FyCLO%2FtPMssO%2BhnNA1pwITrFZmHv0mZXT%2B0FuudwYQOqBUsfYgvnd5E22slw4Txz58noLtPmVbq1NjxohL%2FPUTF%2FrcARlnbGonCBRF2qHCF5OM4%2BkbYM33HLO93bUSAWraBi5Zy9Fxf%2FSTKLspkxj4JToDC4anuZC0x5kdjOTTL3xB2RyZfpqNw3rFGyPVnOC5XDAYivZLfd7tXP9HJ19Xoa%2FOgnQw3rLk9db5gGPx9sNcPpCUPuhTvXFNFlmCL87l5LxOYJUZTSaHrNzrl3Ilf14MJR6F1FVEk%2BEIw1XZoGe1OZ0wmsmRxwY6pgFqcvToeVjRJa64Y2kSpVR1%2F3Gwit%2BZURPwRVoXt93CAQ%2F%2BENociJAbqk1vFTHloJuoZg76AC9qKBGabddZ3uL1HCK8nJWl3LIVcVVSKklId82V4c0gZk%2BA9dq0B5rBhOLMmTT7A%2FW40b724JJ9Wz5LiHDhu%2B6HHVTMaK9dCkc3mikLYXcuvz9tpGLhVH3kxRC16Swfn0dkRaw4KIvznjrDHeBC4BA4&X-Amz-Signature=f8d39ae7b24b5d647333e3731bff52ab8fd9d1cc3b6039d7b477240768f47786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIZJTFB%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFizO2xsTInkp0oEyRZ43wL2xSNoy90DpSUs7jrY6p8OAiA4iBir4KJDFfkGclDBZwkBz%2Fr06WIX4PWuxRwnXdeS%2FSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwOE3PPIWtgu%2B5tFnKtwDf2Zap5CvO7T9PyTSBJx1UcXfgtrqReyv2gm30AswaCl%2BNx03XNZoX4WQ%2FJGpnipQ%2BXco8JZ7WKjG2zZhEQAkKCPA%2F%2B1ryvuyszycN2osjYlqtMCvCCjZhvA3oL9jx0Uv%2FMpXV5OO8ucd9ajDOI3zp3s5X39GrU7NC2244b7fEO%2B3ZhCaaMxS2WvobZ8HEAree9xjysGPZlL2AQSw2lXFLhr3xVwfibTIMmSOLyijeZlpfvcSOUv0PNsVzfM74eIoaWLBPJHdEi%2FRhgJENkJ%2FPWVZCzxva9iocQWUNRmwaWcWgQvva4EqLmg077sT9EYLCKP289JgS3%2FyCLO%2FtPMssO%2BhnNA1pwITrFZmHv0mZXT%2B0FuudwYQOqBUsfYgvnd5E22slw4Txz58noLtPmVbq1NjxohL%2FPUTF%2FrcARlnbGonCBRF2qHCF5OM4%2BkbYM33HLO93bUSAWraBi5Zy9Fxf%2FSTKLspkxj4JToDC4anuZC0x5kdjOTTL3xB2RyZfpqNw3rFGyPVnOC5XDAYivZLfd7tXP9HJ19Xoa%2FOgnQw3rLk9db5gGPx9sNcPpCUPuhTvXFNFlmCL87l5LxOYJUZTSaHrNzrl3Ilf14MJR6F1FVEk%2BEIw1XZoGe1OZ0wmsmRxwY6pgFqcvToeVjRJa64Y2kSpVR1%2F3Gwit%2BZURPwRVoXt93CAQ%2F%2BENociJAbqk1vFTHloJuoZg76AC9qKBGabddZ3uL1HCK8nJWl3LIVcVVSKklId82V4c0gZk%2BA9dq0B5rBhOLMmTT7A%2FW40b724JJ9Wz5LiHDhu%2B6HHVTMaK9dCkc3mikLYXcuvz9tpGLhVH3kxRC16Swfn0dkRaw4KIvznjrDHeBC4BA4&X-Amz-Signature=d71f2cc129100fa6b020c9466bb654cf4a99a08a3731bdb6f7bc9152b997a655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIZJTFB%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFizO2xsTInkp0oEyRZ43wL2xSNoy90DpSUs7jrY6p8OAiA4iBir4KJDFfkGclDBZwkBz%2Fr06WIX4PWuxRwnXdeS%2FSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwOE3PPIWtgu%2B5tFnKtwDf2Zap5CvO7T9PyTSBJx1UcXfgtrqReyv2gm30AswaCl%2BNx03XNZoX4WQ%2FJGpnipQ%2BXco8JZ7WKjG2zZhEQAkKCPA%2F%2B1ryvuyszycN2osjYlqtMCvCCjZhvA3oL9jx0Uv%2FMpXV5OO8ucd9ajDOI3zp3s5X39GrU7NC2244b7fEO%2B3ZhCaaMxS2WvobZ8HEAree9xjysGPZlL2AQSw2lXFLhr3xVwfibTIMmSOLyijeZlpfvcSOUv0PNsVzfM74eIoaWLBPJHdEi%2FRhgJENkJ%2FPWVZCzxva9iocQWUNRmwaWcWgQvva4EqLmg077sT9EYLCKP289JgS3%2FyCLO%2FtPMssO%2BhnNA1pwITrFZmHv0mZXT%2B0FuudwYQOqBUsfYgvnd5E22slw4Txz58noLtPmVbq1NjxohL%2FPUTF%2FrcARlnbGonCBRF2qHCF5OM4%2BkbYM33HLO93bUSAWraBi5Zy9Fxf%2FSTKLspkxj4JToDC4anuZC0x5kdjOTTL3xB2RyZfpqNw3rFGyPVnOC5XDAYivZLfd7tXP9HJ19Xoa%2FOgnQw3rLk9db5gGPx9sNcPpCUPuhTvXFNFlmCL87l5LxOYJUZTSaHrNzrl3Ilf14MJR6F1FVEk%2BEIw1XZoGe1OZ0wmsmRxwY6pgFqcvToeVjRJa64Y2kSpVR1%2F3Gwit%2BZURPwRVoXt93CAQ%2F%2BENociJAbqk1vFTHloJuoZg76AC9qKBGabddZ3uL1HCK8nJWl3LIVcVVSKklId82V4c0gZk%2BA9dq0B5rBhOLMmTT7A%2FW40b724JJ9Wz5LiHDhu%2B6HHVTMaK9dCkc3mikLYXcuvz9tpGLhVH3kxRC16Swfn0dkRaw4KIvznjrDHeBC4BA4&X-Amz-Signature=3a4186b4d8743a7b3190d1041dea9c409d6ec3d45379d26c1aa0169dc6f0201b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIZJTFB%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFizO2xsTInkp0oEyRZ43wL2xSNoy90DpSUs7jrY6p8OAiA4iBir4KJDFfkGclDBZwkBz%2Fr06WIX4PWuxRwnXdeS%2FSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwOE3PPIWtgu%2B5tFnKtwDf2Zap5CvO7T9PyTSBJx1UcXfgtrqReyv2gm30AswaCl%2BNx03XNZoX4WQ%2FJGpnipQ%2BXco8JZ7WKjG2zZhEQAkKCPA%2F%2B1ryvuyszycN2osjYlqtMCvCCjZhvA3oL9jx0Uv%2FMpXV5OO8ucd9ajDOI3zp3s5X39GrU7NC2244b7fEO%2B3ZhCaaMxS2WvobZ8HEAree9xjysGPZlL2AQSw2lXFLhr3xVwfibTIMmSOLyijeZlpfvcSOUv0PNsVzfM74eIoaWLBPJHdEi%2FRhgJENkJ%2FPWVZCzxva9iocQWUNRmwaWcWgQvva4EqLmg077sT9EYLCKP289JgS3%2FyCLO%2FtPMssO%2BhnNA1pwITrFZmHv0mZXT%2B0FuudwYQOqBUsfYgvnd5E22slw4Txz58noLtPmVbq1NjxohL%2FPUTF%2FrcARlnbGonCBRF2qHCF5OM4%2BkbYM33HLO93bUSAWraBi5Zy9Fxf%2FSTKLspkxj4JToDC4anuZC0x5kdjOTTL3xB2RyZfpqNw3rFGyPVnOC5XDAYivZLfd7tXP9HJ19Xoa%2FOgnQw3rLk9db5gGPx9sNcPpCUPuhTvXFNFlmCL87l5LxOYJUZTSaHrNzrl3Ilf14MJR6F1FVEk%2BEIw1XZoGe1OZ0wmsmRxwY6pgFqcvToeVjRJa64Y2kSpVR1%2F3Gwit%2BZURPwRVoXt93CAQ%2F%2BENociJAbqk1vFTHloJuoZg76AC9qKBGabddZ3uL1HCK8nJWl3LIVcVVSKklId82V4c0gZk%2BA9dq0B5rBhOLMmTT7A%2FW40b724JJ9Wz5LiHDhu%2B6HHVTMaK9dCkc3mikLYXcuvz9tpGLhVH3kxRC16Swfn0dkRaw4KIvznjrDHeBC4BA4&X-Amz-Signature=5f86a435aada0f422c49f6bbd92e2e13fc29f22cd00bfa9a7c902b6f64f699c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIZJTFB%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFizO2xsTInkp0oEyRZ43wL2xSNoy90DpSUs7jrY6p8OAiA4iBir4KJDFfkGclDBZwkBz%2Fr06WIX4PWuxRwnXdeS%2FSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwOE3PPIWtgu%2B5tFnKtwDf2Zap5CvO7T9PyTSBJx1UcXfgtrqReyv2gm30AswaCl%2BNx03XNZoX4WQ%2FJGpnipQ%2BXco8JZ7WKjG2zZhEQAkKCPA%2F%2B1ryvuyszycN2osjYlqtMCvCCjZhvA3oL9jx0Uv%2FMpXV5OO8ucd9ajDOI3zp3s5X39GrU7NC2244b7fEO%2B3ZhCaaMxS2WvobZ8HEAree9xjysGPZlL2AQSw2lXFLhr3xVwfibTIMmSOLyijeZlpfvcSOUv0PNsVzfM74eIoaWLBPJHdEi%2FRhgJENkJ%2FPWVZCzxva9iocQWUNRmwaWcWgQvva4EqLmg077sT9EYLCKP289JgS3%2FyCLO%2FtPMssO%2BhnNA1pwITrFZmHv0mZXT%2B0FuudwYQOqBUsfYgvnd5E22slw4Txz58noLtPmVbq1NjxohL%2FPUTF%2FrcARlnbGonCBRF2qHCF5OM4%2BkbYM33HLO93bUSAWraBi5Zy9Fxf%2FSTKLspkxj4JToDC4anuZC0x5kdjOTTL3xB2RyZfpqNw3rFGyPVnOC5XDAYivZLfd7tXP9HJ19Xoa%2FOgnQw3rLk9db5gGPx9sNcPpCUPuhTvXFNFlmCL87l5LxOYJUZTSaHrNzrl3Ilf14MJR6F1FVEk%2BEIw1XZoGe1OZ0wmsmRxwY6pgFqcvToeVjRJa64Y2kSpVR1%2F3Gwit%2BZURPwRVoXt93CAQ%2F%2BENociJAbqk1vFTHloJuoZg76AC9qKBGabddZ3uL1HCK8nJWl3LIVcVVSKklId82V4c0gZk%2BA9dq0B5rBhOLMmTT7A%2FW40b724JJ9Wz5LiHDhu%2B6HHVTMaK9dCkc3mikLYXcuvz9tpGLhVH3kxRC16Swfn0dkRaw4KIvznjrDHeBC4BA4&X-Amz-Signature=f8f9a6a0837fd0f357236e786c7c3c2e1b0f370ebae61390eaa8a1a9005d771f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIZJTFB%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFizO2xsTInkp0oEyRZ43wL2xSNoy90DpSUs7jrY6p8OAiA4iBir4KJDFfkGclDBZwkBz%2Fr06WIX4PWuxRwnXdeS%2FSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwOE3PPIWtgu%2B5tFnKtwDf2Zap5CvO7T9PyTSBJx1UcXfgtrqReyv2gm30AswaCl%2BNx03XNZoX4WQ%2FJGpnipQ%2BXco8JZ7WKjG2zZhEQAkKCPA%2F%2B1ryvuyszycN2osjYlqtMCvCCjZhvA3oL9jx0Uv%2FMpXV5OO8ucd9ajDOI3zp3s5X39GrU7NC2244b7fEO%2B3ZhCaaMxS2WvobZ8HEAree9xjysGPZlL2AQSw2lXFLhr3xVwfibTIMmSOLyijeZlpfvcSOUv0PNsVzfM74eIoaWLBPJHdEi%2FRhgJENkJ%2FPWVZCzxva9iocQWUNRmwaWcWgQvva4EqLmg077sT9EYLCKP289JgS3%2FyCLO%2FtPMssO%2BhnNA1pwITrFZmHv0mZXT%2B0FuudwYQOqBUsfYgvnd5E22slw4Txz58noLtPmVbq1NjxohL%2FPUTF%2FrcARlnbGonCBRF2qHCF5OM4%2BkbYM33HLO93bUSAWraBi5Zy9Fxf%2FSTKLspkxj4JToDC4anuZC0x5kdjOTTL3xB2RyZfpqNw3rFGyPVnOC5XDAYivZLfd7tXP9HJ19Xoa%2FOgnQw3rLk9db5gGPx9sNcPpCUPuhTvXFNFlmCL87l5LxOYJUZTSaHrNzrl3Ilf14MJR6F1FVEk%2BEIw1XZoGe1OZ0wmsmRxwY6pgFqcvToeVjRJa64Y2kSpVR1%2F3Gwit%2BZURPwRVoXt93CAQ%2F%2BENociJAbqk1vFTHloJuoZg76AC9qKBGabddZ3uL1HCK8nJWl3LIVcVVSKklId82V4c0gZk%2BA9dq0B5rBhOLMmTT7A%2FW40b724JJ9Wz5LiHDhu%2B6HHVTMaK9dCkc3mikLYXcuvz9tpGLhVH3kxRC16Swfn0dkRaw4KIvznjrDHeBC4BA4&X-Amz-Signature=fa1462ca4fa086b762bf19c2d8ed35e2783c18404a24ebdf6a75991596bf89a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIZJTFB%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFizO2xsTInkp0oEyRZ43wL2xSNoy90DpSUs7jrY6p8OAiA4iBir4KJDFfkGclDBZwkBz%2Fr06WIX4PWuxRwnXdeS%2FSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwOE3PPIWtgu%2B5tFnKtwDf2Zap5CvO7T9PyTSBJx1UcXfgtrqReyv2gm30AswaCl%2BNx03XNZoX4WQ%2FJGpnipQ%2BXco8JZ7WKjG2zZhEQAkKCPA%2F%2B1ryvuyszycN2osjYlqtMCvCCjZhvA3oL9jx0Uv%2FMpXV5OO8ucd9ajDOI3zp3s5X39GrU7NC2244b7fEO%2B3ZhCaaMxS2WvobZ8HEAree9xjysGPZlL2AQSw2lXFLhr3xVwfibTIMmSOLyijeZlpfvcSOUv0PNsVzfM74eIoaWLBPJHdEi%2FRhgJENkJ%2FPWVZCzxva9iocQWUNRmwaWcWgQvva4EqLmg077sT9EYLCKP289JgS3%2FyCLO%2FtPMssO%2BhnNA1pwITrFZmHv0mZXT%2B0FuudwYQOqBUsfYgvnd5E22slw4Txz58noLtPmVbq1NjxohL%2FPUTF%2FrcARlnbGonCBRF2qHCF5OM4%2BkbYM33HLO93bUSAWraBi5Zy9Fxf%2FSTKLspkxj4JToDC4anuZC0x5kdjOTTL3xB2RyZfpqNw3rFGyPVnOC5XDAYivZLfd7tXP9HJ19Xoa%2FOgnQw3rLk9db5gGPx9sNcPpCUPuhTvXFNFlmCL87l5LxOYJUZTSaHrNzrl3Ilf14MJR6F1FVEk%2BEIw1XZoGe1OZ0wmsmRxwY6pgFqcvToeVjRJa64Y2kSpVR1%2F3Gwit%2BZURPwRVoXt93CAQ%2F%2BENociJAbqk1vFTHloJuoZg76AC9qKBGabddZ3uL1HCK8nJWl3LIVcVVSKklId82V4c0gZk%2BA9dq0B5rBhOLMmTT7A%2FW40b724JJ9Wz5LiHDhu%2B6HHVTMaK9dCkc3mikLYXcuvz9tpGLhVH3kxRC16Swfn0dkRaw4KIvznjrDHeBC4BA4&X-Amz-Signature=2e4fc76dbe2701b46fe7110d59d9f8659de7cc8192dd2d179cdf812ed55a1ad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIZJTFB%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFizO2xsTInkp0oEyRZ43wL2xSNoy90DpSUs7jrY6p8OAiA4iBir4KJDFfkGclDBZwkBz%2Fr06WIX4PWuxRwnXdeS%2FSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwOE3PPIWtgu%2B5tFnKtwDf2Zap5CvO7T9PyTSBJx1UcXfgtrqReyv2gm30AswaCl%2BNx03XNZoX4WQ%2FJGpnipQ%2BXco8JZ7WKjG2zZhEQAkKCPA%2F%2B1ryvuyszycN2osjYlqtMCvCCjZhvA3oL9jx0Uv%2FMpXV5OO8ucd9ajDOI3zp3s5X39GrU7NC2244b7fEO%2B3ZhCaaMxS2WvobZ8HEAree9xjysGPZlL2AQSw2lXFLhr3xVwfibTIMmSOLyijeZlpfvcSOUv0PNsVzfM74eIoaWLBPJHdEi%2FRhgJENkJ%2FPWVZCzxva9iocQWUNRmwaWcWgQvva4EqLmg077sT9EYLCKP289JgS3%2FyCLO%2FtPMssO%2BhnNA1pwITrFZmHv0mZXT%2B0FuudwYQOqBUsfYgvnd5E22slw4Txz58noLtPmVbq1NjxohL%2FPUTF%2FrcARlnbGonCBRF2qHCF5OM4%2BkbYM33HLO93bUSAWraBi5Zy9Fxf%2FSTKLspkxj4JToDC4anuZC0x5kdjOTTL3xB2RyZfpqNw3rFGyPVnOC5XDAYivZLfd7tXP9HJ19Xoa%2FOgnQw3rLk9db5gGPx9sNcPpCUPuhTvXFNFlmCL87l5LxOYJUZTSaHrNzrl3Ilf14MJR6F1FVEk%2BEIw1XZoGe1OZ0wmsmRxwY6pgFqcvToeVjRJa64Y2kSpVR1%2F3Gwit%2BZURPwRVoXt93CAQ%2F%2BENociJAbqk1vFTHloJuoZg76AC9qKBGabddZ3uL1HCK8nJWl3LIVcVVSKklId82V4c0gZk%2BA9dq0B5rBhOLMmTT7A%2FW40b724JJ9Wz5LiHDhu%2B6HHVTMaK9dCkc3mikLYXcuvz9tpGLhVH3kxRC16Swfn0dkRaw4KIvznjrDHeBC4BA4&X-Amz-Signature=7b9aa7c81496a19f46d82d338793a202b15b579b5ec6b6401dd239c88db6cb12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAIZJTFB%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFizO2xsTInkp0oEyRZ43wL2xSNoy90DpSUs7jrY6p8OAiA4iBir4KJDFfkGclDBZwkBz%2Fr06WIX4PWuxRwnXdeS%2FSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwOE3PPIWtgu%2B5tFnKtwDf2Zap5CvO7T9PyTSBJx1UcXfgtrqReyv2gm30AswaCl%2BNx03XNZoX4WQ%2FJGpnipQ%2BXco8JZ7WKjG2zZhEQAkKCPA%2F%2B1ryvuyszycN2osjYlqtMCvCCjZhvA3oL9jx0Uv%2FMpXV5OO8ucd9ajDOI3zp3s5X39GrU7NC2244b7fEO%2B3ZhCaaMxS2WvobZ8HEAree9xjysGPZlL2AQSw2lXFLhr3xVwfibTIMmSOLyijeZlpfvcSOUv0PNsVzfM74eIoaWLBPJHdEi%2FRhgJENkJ%2FPWVZCzxva9iocQWUNRmwaWcWgQvva4EqLmg077sT9EYLCKP289JgS3%2FyCLO%2FtPMssO%2BhnNA1pwITrFZmHv0mZXT%2B0FuudwYQOqBUsfYgvnd5E22slw4Txz58noLtPmVbq1NjxohL%2FPUTF%2FrcARlnbGonCBRF2qHCF5OM4%2BkbYM33HLO93bUSAWraBi5Zy9Fxf%2FSTKLspkxj4JToDC4anuZC0x5kdjOTTL3xB2RyZfpqNw3rFGyPVnOC5XDAYivZLfd7tXP9HJ19Xoa%2FOgnQw3rLk9db5gGPx9sNcPpCUPuhTvXFNFlmCL87l5LxOYJUZTSaHrNzrl3Ilf14MJR6F1FVEk%2BEIw1XZoGe1OZ0wmsmRxwY6pgFqcvToeVjRJa64Y2kSpVR1%2F3Gwit%2BZURPwRVoXt93CAQ%2F%2BENociJAbqk1vFTHloJuoZg76AC9qKBGabddZ3uL1HCK8nJWl3LIVcVVSKklId82V4c0gZk%2BA9dq0B5rBhOLMmTT7A%2FW40b724JJ9Wz5LiHDhu%2B6HHVTMaK9dCkc3mikLYXcuvz9tpGLhVH3kxRC16Swfn0dkRaw4KIvznjrDHeBC4BA4&X-Amz-Signature=e957d9a056aaf92fcd62bfd1d225ee5b0d023bd0255e40fcb76c061f6ccbfdde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
