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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJAQS2R%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ3uKaa%2Fop3o2yQPbxHmZ%2FK3qcAEagmCJAWQjv0kx1kwIhAKO3qBZ4or0ZPoYAuvh7P7uDyF%2F5m%2Bcp0nkFHR%2FDN1BSKv8DCHUQABoMNjM3NDIzMTgzODA1IgzzvdkzwTN0uENoydkq3AMpTiyJQvYJ7VMoBCiXJvfxHWXYgoXotIQdEIYwE5Oj6UyP0VAtBVjQJC3yhW02Nd4f5VjKCXQmBcp8EgxqTDREoQul9Wy1iJQRz2Vg7orgdT8%2Fn%2Fj0UhnViq%2Fo%2BsoZbuyIE4OVR1rMw2Lkmpj0GbzsTKFQASW2jI8oyyiWpx%2FKI83JiTSDWwxv9VRl8iAg3cZZIhMoU5x21aO2ov5CNJiOo2PcEZ6ZBf60UyVezPVpuvktWswaIZMRTJcxWW98mAjJYyPUSBcwSYlw378lJjYDTuO%2Ft%2BsauXhmkOdEu8yMih%2BCkzlu8XDZztZ0TFdHrxt%2FlWGungL%2BZ%2B6%2BAvfSuI%2FX7VOHyPe4vlm71cEmhyrR%2F2QMYZUmdglT5Gi0mktH46dPf1rdv%2FsOgCpyDjQgSJ6tHg7FEQBPRwkz%2BT6aMH0OFR%2B3Kk94zQFyF8wcns31sn6I0xOdA8DHRXLFiHVcLjHSPjOopCDPtDmoktNVIzCHtsm09rPoVHx%2BrU1nj4DM6EHizOsH5dC2CPChRBYEx6Xgj1xLz47RW49xosyzBhlmda4LiX5tjrb9DOLElriGMS9zUAZO71RxlJieHeLzZ3Bj%2B8SEO7ZIgYckHKJF53tGI9CxjepuqwsPn09tyDD0y87UBjqkASUCN%2FMvUSIfrHNqT7mNoMeBkXeXJpVI1gt4qAAwxCnIGRlcCqGbjaxAlakbqR3FHZ2uQwDQyU1hTIzz%2BgWGppnFOGR%2BWIl2v4auqHZFZfv7yzBUcq6up6UxH8mnPb1J5Ygj%2B8ek9UKBYwE83yiWDBlv0RjZAPC4dlYj5jxLUFaHQ%2B4XOBoRt%2B3kGuqPJaCNNzFnFY8DuKuxdmUsRXdVEIZ%2FNMbi&X-Amz-Signature=28e8e7bfa2a17d1a2e7ef63541c1f8714aa38d9c046d11488d43fc4550db913d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJAQS2R%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ3uKaa%2Fop3o2yQPbxHmZ%2FK3qcAEagmCJAWQjv0kx1kwIhAKO3qBZ4or0ZPoYAuvh7P7uDyF%2F5m%2Bcp0nkFHR%2FDN1BSKv8DCHUQABoMNjM3NDIzMTgzODA1IgzzvdkzwTN0uENoydkq3AMpTiyJQvYJ7VMoBCiXJvfxHWXYgoXotIQdEIYwE5Oj6UyP0VAtBVjQJC3yhW02Nd4f5VjKCXQmBcp8EgxqTDREoQul9Wy1iJQRz2Vg7orgdT8%2Fn%2Fj0UhnViq%2Fo%2BsoZbuyIE4OVR1rMw2Lkmpj0GbzsTKFQASW2jI8oyyiWpx%2FKI83JiTSDWwxv9VRl8iAg3cZZIhMoU5x21aO2ov5CNJiOo2PcEZ6ZBf60UyVezPVpuvktWswaIZMRTJcxWW98mAjJYyPUSBcwSYlw378lJjYDTuO%2Ft%2BsauXhmkOdEu8yMih%2BCkzlu8XDZztZ0TFdHrxt%2FlWGungL%2BZ%2B6%2BAvfSuI%2FX7VOHyPe4vlm71cEmhyrR%2F2QMYZUmdglT5Gi0mktH46dPf1rdv%2FsOgCpyDjQgSJ6tHg7FEQBPRwkz%2BT6aMH0OFR%2B3Kk94zQFyF8wcns31sn6I0xOdA8DHRXLFiHVcLjHSPjOopCDPtDmoktNVIzCHtsm09rPoVHx%2BrU1nj4DM6EHizOsH5dC2CPChRBYEx6Xgj1xLz47RW49xosyzBhlmda4LiX5tjrb9DOLElriGMS9zUAZO71RxlJieHeLzZ3Bj%2B8SEO7ZIgYckHKJF53tGI9CxjepuqwsPn09tyDD0y87UBjqkASUCN%2FMvUSIfrHNqT7mNoMeBkXeXJpVI1gt4qAAwxCnIGRlcCqGbjaxAlakbqR3FHZ2uQwDQyU1hTIzz%2BgWGppnFOGR%2BWIl2v4auqHZFZfv7yzBUcq6up6UxH8mnPb1J5Ygj%2B8ek9UKBYwE83yiWDBlv0RjZAPC4dlYj5jxLUFaHQ%2B4XOBoRt%2B3kGuqPJaCNNzFnFY8DuKuxdmUsRXdVEIZ%2FNMbi&X-Amz-Signature=c4c274574f1e9d5447c749b1f80d76edfc476f27ece6c41df38455d452bd6f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJAQS2R%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ3uKaa%2Fop3o2yQPbxHmZ%2FK3qcAEagmCJAWQjv0kx1kwIhAKO3qBZ4or0ZPoYAuvh7P7uDyF%2F5m%2Bcp0nkFHR%2FDN1BSKv8DCHUQABoMNjM3NDIzMTgzODA1IgzzvdkzwTN0uENoydkq3AMpTiyJQvYJ7VMoBCiXJvfxHWXYgoXotIQdEIYwE5Oj6UyP0VAtBVjQJC3yhW02Nd4f5VjKCXQmBcp8EgxqTDREoQul9Wy1iJQRz2Vg7orgdT8%2Fn%2Fj0UhnViq%2Fo%2BsoZbuyIE4OVR1rMw2Lkmpj0GbzsTKFQASW2jI8oyyiWpx%2FKI83JiTSDWwxv9VRl8iAg3cZZIhMoU5x21aO2ov5CNJiOo2PcEZ6ZBf60UyVezPVpuvktWswaIZMRTJcxWW98mAjJYyPUSBcwSYlw378lJjYDTuO%2Ft%2BsauXhmkOdEu8yMih%2BCkzlu8XDZztZ0TFdHrxt%2FlWGungL%2BZ%2B6%2BAvfSuI%2FX7VOHyPe4vlm71cEmhyrR%2F2QMYZUmdglT5Gi0mktH46dPf1rdv%2FsOgCpyDjQgSJ6tHg7FEQBPRwkz%2BT6aMH0OFR%2B3Kk94zQFyF8wcns31sn6I0xOdA8DHRXLFiHVcLjHSPjOopCDPtDmoktNVIzCHtsm09rPoVHx%2BrU1nj4DM6EHizOsH5dC2CPChRBYEx6Xgj1xLz47RW49xosyzBhlmda4LiX5tjrb9DOLElriGMS9zUAZO71RxlJieHeLzZ3Bj%2B8SEO7ZIgYckHKJF53tGI9CxjepuqwsPn09tyDD0y87UBjqkASUCN%2FMvUSIfrHNqT7mNoMeBkXeXJpVI1gt4qAAwxCnIGRlcCqGbjaxAlakbqR3FHZ2uQwDQyU1hTIzz%2BgWGppnFOGR%2BWIl2v4auqHZFZfv7yzBUcq6up6UxH8mnPb1J5Ygj%2B8ek9UKBYwE83yiWDBlv0RjZAPC4dlYj5jxLUFaHQ%2B4XOBoRt%2B3kGuqPJaCNNzFnFY8DuKuxdmUsRXdVEIZ%2FNMbi&X-Amz-Signature=7e6f05ed44bb454b31af4363c0b491b59e13d4c6b449518dd94bf358217a9612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJAQS2R%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ3uKaa%2Fop3o2yQPbxHmZ%2FK3qcAEagmCJAWQjv0kx1kwIhAKO3qBZ4or0ZPoYAuvh7P7uDyF%2F5m%2Bcp0nkFHR%2FDN1BSKv8DCHUQABoMNjM3NDIzMTgzODA1IgzzvdkzwTN0uENoydkq3AMpTiyJQvYJ7VMoBCiXJvfxHWXYgoXotIQdEIYwE5Oj6UyP0VAtBVjQJC3yhW02Nd4f5VjKCXQmBcp8EgxqTDREoQul9Wy1iJQRz2Vg7orgdT8%2Fn%2Fj0UhnViq%2Fo%2BsoZbuyIE4OVR1rMw2Lkmpj0GbzsTKFQASW2jI8oyyiWpx%2FKI83JiTSDWwxv9VRl8iAg3cZZIhMoU5x21aO2ov5CNJiOo2PcEZ6ZBf60UyVezPVpuvktWswaIZMRTJcxWW98mAjJYyPUSBcwSYlw378lJjYDTuO%2Ft%2BsauXhmkOdEu8yMih%2BCkzlu8XDZztZ0TFdHrxt%2FlWGungL%2BZ%2B6%2BAvfSuI%2FX7VOHyPe4vlm71cEmhyrR%2F2QMYZUmdglT5Gi0mktH46dPf1rdv%2FsOgCpyDjQgSJ6tHg7FEQBPRwkz%2BT6aMH0OFR%2B3Kk94zQFyF8wcns31sn6I0xOdA8DHRXLFiHVcLjHSPjOopCDPtDmoktNVIzCHtsm09rPoVHx%2BrU1nj4DM6EHizOsH5dC2CPChRBYEx6Xgj1xLz47RW49xosyzBhlmda4LiX5tjrb9DOLElriGMS9zUAZO71RxlJieHeLzZ3Bj%2B8SEO7ZIgYckHKJF53tGI9CxjepuqwsPn09tyDD0y87UBjqkASUCN%2FMvUSIfrHNqT7mNoMeBkXeXJpVI1gt4qAAwxCnIGRlcCqGbjaxAlakbqR3FHZ2uQwDQyU1hTIzz%2BgWGppnFOGR%2BWIl2v4auqHZFZfv7yzBUcq6up6UxH8mnPb1J5Ygj%2B8ek9UKBYwE83yiWDBlv0RjZAPC4dlYj5jxLUFaHQ%2B4XOBoRt%2B3kGuqPJaCNNzFnFY8DuKuxdmUsRXdVEIZ%2FNMbi&X-Amz-Signature=190098220e1fe3883bc17c2589b858ec71ab0d2428b8cc976d30024df575806b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJAQS2R%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ3uKaa%2Fop3o2yQPbxHmZ%2FK3qcAEagmCJAWQjv0kx1kwIhAKO3qBZ4or0ZPoYAuvh7P7uDyF%2F5m%2Bcp0nkFHR%2FDN1BSKv8DCHUQABoMNjM3NDIzMTgzODA1IgzzvdkzwTN0uENoydkq3AMpTiyJQvYJ7VMoBCiXJvfxHWXYgoXotIQdEIYwE5Oj6UyP0VAtBVjQJC3yhW02Nd4f5VjKCXQmBcp8EgxqTDREoQul9Wy1iJQRz2Vg7orgdT8%2Fn%2Fj0UhnViq%2Fo%2BsoZbuyIE4OVR1rMw2Lkmpj0GbzsTKFQASW2jI8oyyiWpx%2FKI83JiTSDWwxv9VRl8iAg3cZZIhMoU5x21aO2ov5CNJiOo2PcEZ6ZBf60UyVezPVpuvktWswaIZMRTJcxWW98mAjJYyPUSBcwSYlw378lJjYDTuO%2Ft%2BsauXhmkOdEu8yMih%2BCkzlu8XDZztZ0TFdHrxt%2FlWGungL%2BZ%2B6%2BAvfSuI%2FX7VOHyPe4vlm71cEmhyrR%2F2QMYZUmdglT5Gi0mktH46dPf1rdv%2FsOgCpyDjQgSJ6tHg7FEQBPRwkz%2BT6aMH0OFR%2B3Kk94zQFyF8wcns31sn6I0xOdA8DHRXLFiHVcLjHSPjOopCDPtDmoktNVIzCHtsm09rPoVHx%2BrU1nj4DM6EHizOsH5dC2CPChRBYEx6Xgj1xLz47RW49xosyzBhlmda4LiX5tjrb9DOLElriGMS9zUAZO71RxlJieHeLzZ3Bj%2B8SEO7ZIgYckHKJF53tGI9CxjepuqwsPn09tyDD0y87UBjqkASUCN%2FMvUSIfrHNqT7mNoMeBkXeXJpVI1gt4qAAwxCnIGRlcCqGbjaxAlakbqR3FHZ2uQwDQyU1hTIzz%2BgWGppnFOGR%2BWIl2v4auqHZFZfv7yzBUcq6up6UxH8mnPb1J5Ygj%2B8ek9UKBYwE83yiWDBlv0RjZAPC4dlYj5jxLUFaHQ%2B4XOBoRt%2B3kGuqPJaCNNzFnFY8DuKuxdmUsRXdVEIZ%2FNMbi&X-Amz-Signature=8eff51d10797f318daf9436159b77afb7480ef2eb9a2157f5a42139cee33ac14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJAQS2R%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ3uKaa%2Fop3o2yQPbxHmZ%2FK3qcAEagmCJAWQjv0kx1kwIhAKO3qBZ4or0ZPoYAuvh7P7uDyF%2F5m%2Bcp0nkFHR%2FDN1BSKv8DCHUQABoMNjM3NDIzMTgzODA1IgzzvdkzwTN0uENoydkq3AMpTiyJQvYJ7VMoBCiXJvfxHWXYgoXotIQdEIYwE5Oj6UyP0VAtBVjQJC3yhW02Nd4f5VjKCXQmBcp8EgxqTDREoQul9Wy1iJQRz2Vg7orgdT8%2Fn%2Fj0UhnViq%2Fo%2BsoZbuyIE4OVR1rMw2Lkmpj0GbzsTKFQASW2jI8oyyiWpx%2FKI83JiTSDWwxv9VRl8iAg3cZZIhMoU5x21aO2ov5CNJiOo2PcEZ6ZBf60UyVezPVpuvktWswaIZMRTJcxWW98mAjJYyPUSBcwSYlw378lJjYDTuO%2Ft%2BsauXhmkOdEu8yMih%2BCkzlu8XDZztZ0TFdHrxt%2FlWGungL%2BZ%2B6%2BAvfSuI%2FX7VOHyPe4vlm71cEmhyrR%2F2QMYZUmdglT5Gi0mktH46dPf1rdv%2FsOgCpyDjQgSJ6tHg7FEQBPRwkz%2BT6aMH0OFR%2B3Kk94zQFyF8wcns31sn6I0xOdA8DHRXLFiHVcLjHSPjOopCDPtDmoktNVIzCHtsm09rPoVHx%2BrU1nj4DM6EHizOsH5dC2CPChRBYEx6Xgj1xLz47RW49xosyzBhlmda4LiX5tjrb9DOLElriGMS9zUAZO71RxlJieHeLzZ3Bj%2B8SEO7ZIgYckHKJF53tGI9CxjepuqwsPn09tyDD0y87UBjqkASUCN%2FMvUSIfrHNqT7mNoMeBkXeXJpVI1gt4qAAwxCnIGRlcCqGbjaxAlakbqR3FHZ2uQwDQyU1hTIzz%2BgWGppnFOGR%2BWIl2v4auqHZFZfv7yzBUcq6up6UxH8mnPb1J5Ygj%2B8ek9UKBYwE83yiWDBlv0RjZAPC4dlYj5jxLUFaHQ%2B4XOBoRt%2B3kGuqPJaCNNzFnFY8DuKuxdmUsRXdVEIZ%2FNMbi&X-Amz-Signature=c45bf0cf28d83a0332c771d4567cda20c1d5c8e1a71fef64540f818981c61f2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJAQS2R%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ3uKaa%2Fop3o2yQPbxHmZ%2FK3qcAEagmCJAWQjv0kx1kwIhAKO3qBZ4or0ZPoYAuvh7P7uDyF%2F5m%2Bcp0nkFHR%2FDN1BSKv8DCHUQABoMNjM3NDIzMTgzODA1IgzzvdkzwTN0uENoydkq3AMpTiyJQvYJ7VMoBCiXJvfxHWXYgoXotIQdEIYwE5Oj6UyP0VAtBVjQJC3yhW02Nd4f5VjKCXQmBcp8EgxqTDREoQul9Wy1iJQRz2Vg7orgdT8%2Fn%2Fj0UhnViq%2Fo%2BsoZbuyIE4OVR1rMw2Lkmpj0GbzsTKFQASW2jI8oyyiWpx%2FKI83JiTSDWwxv9VRl8iAg3cZZIhMoU5x21aO2ov5CNJiOo2PcEZ6ZBf60UyVezPVpuvktWswaIZMRTJcxWW98mAjJYyPUSBcwSYlw378lJjYDTuO%2Ft%2BsauXhmkOdEu8yMih%2BCkzlu8XDZztZ0TFdHrxt%2FlWGungL%2BZ%2B6%2BAvfSuI%2FX7VOHyPe4vlm71cEmhyrR%2F2QMYZUmdglT5Gi0mktH46dPf1rdv%2FsOgCpyDjQgSJ6tHg7FEQBPRwkz%2BT6aMH0OFR%2B3Kk94zQFyF8wcns31sn6I0xOdA8DHRXLFiHVcLjHSPjOopCDPtDmoktNVIzCHtsm09rPoVHx%2BrU1nj4DM6EHizOsH5dC2CPChRBYEx6Xgj1xLz47RW49xosyzBhlmda4LiX5tjrb9DOLElriGMS9zUAZO71RxlJieHeLzZ3Bj%2B8SEO7ZIgYckHKJF53tGI9CxjepuqwsPn09tyDD0y87UBjqkASUCN%2FMvUSIfrHNqT7mNoMeBkXeXJpVI1gt4qAAwxCnIGRlcCqGbjaxAlakbqR3FHZ2uQwDQyU1hTIzz%2BgWGppnFOGR%2BWIl2v4auqHZFZfv7yzBUcq6up6UxH8mnPb1J5Ygj%2B8ek9UKBYwE83yiWDBlv0RjZAPC4dlYj5jxLUFaHQ%2B4XOBoRt%2B3kGuqPJaCNNzFnFY8DuKuxdmUsRXdVEIZ%2FNMbi&X-Amz-Signature=af63b6b59c8ca5c7c1327e804a800c3785f4bd02ac11aee5dc1637b3a6b3f177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJAQS2R%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ3uKaa%2Fop3o2yQPbxHmZ%2FK3qcAEagmCJAWQjv0kx1kwIhAKO3qBZ4or0ZPoYAuvh7P7uDyF%2F5m%2Bcp0nkFHR%2FDN1BSKv8DCHUQABoMNjM3NDIzMTgzODA1IgzzvdkzwTN0uENoydkq3AMpTiyJQvYJ7VMoBCiXJvfxHWXYgoXotIQdEIYwE5Oj6UyP0VAtBVjQJC3yhW02Nd4f5VjKCXQmBcp8EgxqTDREoQul9Wy1iJQRz2Vg7orgdT8%2Fn%2Fj0UhnViq%2Fo%2BsoZbuyIE4OVR1rMw2Lkmpj0GbzsTKFQASW2jI8oyyiWpx%2FKI83JiTSDWwxv9VRl8iAg3cZZIhMoU5x21aO2ov5CNJiOo2PcEZ6ZBf60UyVezPVpuvktWswaIZMRTJcxWW98mAjJYyPUSBcwSYlw378lJjYDTuO%2Ft%2BsauXhmkOdEu8yMih%2BCkzlu8XDZztZ0TFdHrxt%2FlWGungL%2BZ%2B6%2BAvfSuI%2FX7VOHyPe4vlm71cEmhyrR%2F2QMYZUmdglT5Gi0mktH46dPf1rdv%2FsOgCpyDjQgSJ6tHg7FEQBPRwkz%2BT6aMH0OFR%2B3Kk94zQFyF8wcns31sn6I0xOdA8DHRXLFiHVcLjHSPjOopCDPtDmoktNVIzCHtsm09rPoVHx%2BrU1nj4DM6EHizOsH5dC2CPChRBYEx6Xgj1xLz47RW49xosyzBhlmda4LiX5tjrb9DOLElriGMS9zUAZO71RxlJieHeLzZ3Bj%2B8SEO7ZIgYckHKJF53tGI9CxjepuqwsPn09tyDD0y87UBjqkASUCN%2FMvUSIfrHNqT7mNoMeBkXeXJpVI1gt4qAAwxCnIGRlcCqGbjaxAlakbqR3FHZ2uQwDQyU1hTIzz%2BgWGppnFOGR%2BWIl2v4auqHZFZfv7yzBUcq6up6UxH8mnPb1J5Ygj%2B8ek9UKBYwE83yiWDBlv0RjZAPC4dlYj5jxLUFaHQ%2B4XOBoRt%2B3kGuqPJaCNNzFnFY8DuKuxdmUsRXdVEIZ%2FNMbi&X-Amz-Signature=81cb18bc1b472ac53eb477a27e8cdb3333d335981e9b2c0d441631f864db3c99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJAQS2R%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ3uKaa%2Fop3o2yQPbxHmZ%2FK3qcAEagmCJAWQjv0kx1kwIhAKO3qBZ4or0ZPoYAuvh7P7uDyF%2F5m%2Bcp0nkFHR%2FDN1BSKv8DCHUQABoMNjM3NDIzMTgzODA1IgzzvdkzwTN0uENoydkq3AMpTiyJQvYJ7VMoBCiXJvfxHWXYgoXotIQdEIYwE5Oj6UyP0VAtBVjQJC3yhW02Nd4f5VjKCXQmBcp8EgxqTDREoQul9Wy1iJQRz2Vg7orgdT8%2Fn%2Fj0UhnViq%2Fo%2BsoZbuyIE4OVR1rMw2Lkmpj0GbzsTKFQASW2jI8oyyiWpx%2FKI83JiTSDWwxv9VRl8iAg3cZZIhMoU5x21aO2ov5CNJiOo2PcEZ6ZBf60UyVezPVpuvktWswaIZMRTJcxWW98mAjJYyPUSBcwSYlw378lJjYDTuO%2Ft%2BsauXhmkOdEu8yMih%2BCkzlu8XDZztZ0TFdHrxt%2FlWGungL%2BZ%2B6%2BAvfSuI%2FX7VOHyPe4vlm71cEmhyrR%2F2QMYZUmdglT5Gi0mktH46dPf1rdv%2FsOgCpyDjQgSJ6tHg7FEQBPRwkz%2BT6aMH0OFR%2B3Kk94zQFyF8wcns31sn6I0xOdA8DHRXLFiHVcLjHSPjOopCDPtDmoktNVIzCHtsm09rPoVHx%2BrU1nj4DM6EHizOsH5dC2CPChRBYEx6Xgj1xLz47RW49xosyzBhlmda4LiX5tjrb9DOLElriGMS9zUAZO71RxlJieHeLzZ3Bj%2B8SEO7ZIgYckHKJF53tGI9CxjepuqwsPn09tyDD0y87UBjqkASUCN%2FMvUSIfrHNqT7mNoMeBkXeXJpVI1gt4qAAwxCnIGRlcCqGbjaxAlakbqR3FHZ2uQwDQyU1hTIzz%2BgWGppnFOGR%2BWIl2v4auqHZFZfv7yzBUcq6up6UxH8mnPb1J5Ygj%2B8ek9UKBYwE83yiWDBlv0RjZAPC4dlYj5jxLUFaHQ%2B4XOBoRt%2B3kGuqPJaCNNzFnFY8DuKuxdmUsRXdVEIZ%2FNMbi&X-Amz-Signature=b30e04a072ef87cdb9a9dd6783490214840444a70863f4d8c0fe567f804578ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJAQS2R%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ3uKaa%2Fop3o2yQPbxHmZ%2FK3qcAEagmCJAWQjv0kx1kwIhAKO3qBZ4or0ZPoYAuvh7P7uDyF%2F5m%2Bcp0nkFHR%2FDN1BSKv8DCHUQABoMNjM3NDIzMTgzODA1IgzzvdkzwTN0uENoydkq3AMpTiyJQvYJ7VMoBCiXJvfxHWXYgoXotIQdEIYwE5Oj6UyP0VAtBVjQJC3yhW02Nd4f5VjKCXQmBcp8EgxqTDREoQul9Wy1iJQRz2Vg7orgdT8%2Fn%2Fj0UhnViq%2Fo%2BsoZbuyIE4OVR1rMw2Lkmpj0GbzsTKFQASW2jI8oyyiWpx%2FKI83JiTSDWwxv9VRl8iAg3cZZIhMoU5x21aO2ov5CNJiOo2PcEZ6ZBf60UyVezPVpuvktWswaIZMRTJcxWW98mAjJYyPUSBcwSYlw378lJjYDTuO%2Ft%2BsauXhmkOdEu8yMih%2BCkzlu8XDZztZ0TFdHrxt%2FlWGungL%2BZ%2B6%2BAvfSuI%2FX7VOHyPe4vlm71cEmhyrR%2F2QMYZUmdglT5Gi0mktH46dPf1rdv%2FsOgCpyDjQgSJ6tHg7FEQBPRwkz%2BT6aMH0OFR%2B3Kk94zQFyF8wcns31sn6I0xOdA8DHRXLFiHVcLjHSPjOopCDPtDmoktNVIzCHtsm09rPoVHx%2BrU1nj4DM6EHizOsH5dC2CPChRBYEx6Xgj1xLz47RW49xosyzBhlmda4LiX5tjrb9DOLElriGMS9zUAZO71RxlJieHeLzZ3Bj%2B8SEO7ZIgYckHKJF53tGI9CxjepuqwsPn09tyDD0y87UBjqkASUCN%2FMvUSIfrHNqT7mNoMeBkXeXJpVI1gt4qAAwxCnIGRlcCqGbjaxAlakbqR3FHZ2uQwDQyU1hTIzz%2BgWGppnFOGR%2BWIl2v4auqHZFZfv7yzBUcq6up6UxH8mnPb1J5Ygj%2B8ek9UKBYwE83yiWDBlv0RjZAPC4dlYj5jxLUFaHQ%2B4XOBoRt%2B3kGuqPJaCNNzFnFY8DuKuxdmUsRXdVEIZ%2FNMbi&X-Amz-Signature=eac221a4a9370feadfb9bca5e246466225e2463b6aeb59831c639d6ce7ceff7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJAQS2R%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ3uKaa%2Fop3o2yQPbxHmZ%2FK3qcAEagmCJAWQjv0kx1kwIhAKO3qBZ4or0ZPoYAuvh7P7uDyF%2F5m%2Bcp0nkFHR%2FDN1BSKv8DCHUQABoMNjM3NDIzMTgzODA1IgzzvdkzwTN0uENoydkq3AMpTiyJQvYJ7VMoBCiXJvfxHWXYgoXotIQdEIYwE5Oj6UyP0VAtBVjQJC3yhW02Nd4f5VjKCXQmBcp8EgxqTDREoQul9Wy1iJQRz2Vg7orgdT8%2Fn%2Fj0UhnViq%2Fo%2BsoZbuyIE4OVR1rMw2Lkmpj0GbzsTKFQASW2jI8oyyiWpx%2FKI83JiTSDWwxv9VRl8iAg3cZZIhMoU5x21aO2ov5CNJiOo2PcEZ6ZBf60UyVezPVpuvktWswaIZMRTJcxWW98mAjJYyPUSBcwSYlw378lJjYDTuO%2Ft%2BsauXhmkOdEu8yMih%2BCkzlu8XDZztZ0TFdHrxt%2FlWGungL%2BZ%2B6%2BAvfSuI%2FX7VOHyPe4vlm71cEmhyrR%2F2QMYZUmdglT5Gi0mktH46dPf1rdv%2FsOgCpyDjQgSJ6tHg7FEQBPRwkz%2BT6aMH0OFR%2B3Kk94zQFyF8wcns31sn6I0xOdA8DHRXLFiHVcLjHSPjOopCDPtDmoktNVIzCHtsm09rPoVHx%2BrU1nj4DM6EHizOsH5dC2CPChRBYEx6Xgj1xLz47RW49xosyzBhlmda4LiX5tjrb9DOLElriGMS9zUAZO71RxlJieHeLzZ3Bj%2B8SEO7ZIgYckHKJF53tGI9CxjepuqwsPn09tyDD0y87UBjqkASUCN%2FMvUSIfrHNqT7mNoMeBkXeXJpVI1gt4qAAwxCnIGRlcCqGbjaxAlakbqR3FHZ2uQwDQyU1hTIzz%2BgWGppnFOGR%2BWIl2v4auqHZFZfv7yzBUcq6up6UxH8mnPb1J5Ygj%2B8ek9UKBYwE83yiWDBlv0RjZAPC4dlYj5jxLUFaHQ%2B4XOBoRt%2B3kGuqPJaCNNzFnFY8DuKuxdmUsRXdVEIZ%2FNMbi&X-Amz-Signature=f98371c617e36999081427ef043b13ce0b93a5e7cafab76e7c5e06a8d8e3c983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJAQS2R%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ3uKaa%2Fop3o2yQPbxHmZ%2FK3qcAEagmCJAWQjv0kx1kwIhAKO3qBZ4or0ZPoYAuvh7P7uDyF%2F5m%2Bcp0nkFHR%2FDN1BSKv8DCHUQABoMNjM3NDIzMTgzODA1IgzzvdkzwTN0uENoydkq3AMpTiyJQvYJ7VMoBCiXJvfxHWXYgoXotIQdEIYwE5Oj6UyP0VAtBVjQJC3yhW02Nd4f5VjKCXQmBcp8EgxqTDREoQul9Wy1iJQRz2Vg7orgdT8%2Fn%2Fj0UhnViq%2Fo%2BsoZbuyIE4OVR1rMw2Lkmpj0GbzsTKFQASW2jI8oyyiWpx%2FKI83JiTSDWwxv9VRl8iAg3cZZIhMoU5x21aO2ov5CNJiOo2PcEZ6ZBf60UyVezPVpuvktWswaIZMRTJcxWW98mAjJYyPUSBcwSYlw378lJjYDTuO%2Ft%2BsauXhmkOdEu8yMih%2BCkzlu8XDZztZ0TFdHrxt%2FlWGungL%2BZ%2B6%2BAvfSuI%2FX7VOHyPe4vlm71cEmhyrR%2F2QMYZUmdglT5Gi0mktH46dPf1rdv%2FsOgCpyDjQgSJ6tHg7FEQBPRwkz%2BT6aMH0OFR%2B3Kk94zQFyF8wcns31sn6I0xOdA8DHRXLFiHVcLjHSPjOopCDPtDmoktNVIzCHtsm09rPoVHx%2BrU1nj4DM6EHizOsH5dC2CPChRBYEx6Xgj1xLz47RW49xosyzBhlmda4LiX5tjrb9DOLElriGMS9zUAZO71RxlJieHeLzZ3Bj%2B8SEO7ZIgYckHKJF53tGI9CxjepuqwsPn09tyDD0y87UBjqkASUCN%2FMvUSIfrHNqT7mNoMeBkXeXJpVI1gt4qAAwxCnIGRlcCqGbjaxAlakbqR3FHZ2uQwDQyU1hTIzz%2BgWGppnFOGR%2BWIl2v4auqHZFZfv7yzBUcq6up6UxH8mnPb1J5Ygj%2B8ek9UKBYwE83yiWDBlv0RjZAPC4dlYj5jxLUFaHQ%2B4XOBoRt%2B3kGuqPJaCNNzFnFY8DuKuxdmUsRXdVEIZ%2FNMbi&X-Amz-Signature=2e30bdfd6cb7abaaa6051f165eaab25e2b28ebad604f010ddb012f96bab397ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJAQS2R%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ3uKaa%2Fop3o2yQPbxHmZ%2FK3qcAEagmCJAWQjv0kx1kwIhAKO3qBZ4or0ZPoYAuvh7P7uDyF%2F5m%2Bcp0nkFHR%2FDN1BSKv8DCHUQABoMNjM3NDIzMTgzODA1IgzzvdkzwTN0uENoydkq3AMpTiyJQvYJ7VMoBCiXJvfxHWXYgoXotIQdEIYwE5Oj6UyP0VAtBVjQJC3yhW02Nd4f5VjKCXQmBcp8EgxqTDREoQul9Wy1iJQRz2Vg7orgdT8%2Fn%2Fj0UhnViq%2Fo%2BsoZbuyIE4OVR1rMw2Lkmpj0GbzsTKFQASW2jI8oyyiWpx%2FKI83JiTSDWwxv9VRl8iAg3cZZIhMoU5x21aO2ov5CNJiOo2PcEZ6ZBf60UyVezPVpuvktWswaIZMRTJcxWW98mAjJYyPUSBcwSYlw378lJjYDTuO%2Ft%2BsauXhmkOdEu8yMih%2BCkzlu8XDZztZ0TFdHrxt%2FlWGungL%2BZ%2B6%2BAvfSuI%2FX7VOHyPe4vlm71cEmhyrR%2F2QMYZUmdglT5Gi0mktH46dPf1rdv%2FsOgCpyDjQgSJ6tHg7FEQBPRwkz%2BT6aMH0OFR%2B3Kk94zQFyF8wcns31sn6I0xOdA8DHRXLFiHVcLjHSPjOopCDPtDmoktNVIzCHtsm09rPoVHx%2BrU1nj4DM6EHizOsH5dC2CPChRBYEx6Xgj1xLz47RW49xosyzBhlmda4LiX5tjrb9DOLElriGMS9zUAZO71RxlJieHeLzZ3Bj%2B8SEO7ZIgYckHKJF53tGI9CxjepuqwsPn09tyDD0y87UBjqkASUCN%2FMvUSIfrHNqT7mNoMeBkXeXJpVI1gt4qAAwxCnIGRlcCqGbjaxAlakbqR3FHZ2uQwDQyU1hTIzz%2BgWGppnFOGR%2BWIl2v4auqHZFZfv7yzBUcq6up6UxH8mnPb1J5Ygj%2B8ek9UKBYwE83yiWDBlv0RjZAPC4dlYj5jxLUFaHQ%2B4XOBoRt%2B3kGuqPJaCNNzFnFY8DuKuxdmUsRXdVEIZ%2FNMbi&X-Amz-Signature=d3c494ebd1e8243f84f2aedeec0ff6fe1c5da3c2c27749beaa19ae657697ae43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJAQS2R%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ3uKaa%2Fop3o2yQPbxHmZ%2FK3qcAEagmCJAWQjv0kx1kwIhAKO3qBZ4or0ZPoYAuvh7P7uDyF%2F5m%2Bcp0nkFHR%2FDN1BSKv8DCHUQABoMNjM3NDIzMTgzODA1IgzzvdkzwTN0uENoydkq3AMpTiyJQvYJ7VMoBCiXJvfxHWXYgoXotIQdEIYwE5Oj6UyP0VAtBVjQJC3yhW02Nd4f5VjKCXQmBcp8EgxqTDREoQul9Wy1iJQRz2Vg7orgdT8%2Fn%2Fj0UhnViq%2Fo%2BsoZbuyIE4OVR1rMw2Lkmpj0GbzsTKFQASW2jI8oyyiWpx%2FKI83JiTSDWwxv9VRl8iAg3cZZIhMoU5x21aO2ov5CNJiOo2PcEZ6ZBf60UyVezPVpuvktWswaIZMRTJcxWW98mAjJYyPUSBcwSYlw378lJjYDTuO%2Ft%2BsauXhmkOdEu8yMih%2BCkzlu8XDZztZ0TFdHrxt%2FlWGungL%2BZ%2B6%2BAvfSuI%2FX7VOHyPe4vlm71cEmhyrR%2F2QMYZUmdglT5Gi0mktH46dPf1rdv%2FsOgCpyDjQgSJ6tHg7FEQBPRwkz%2BT6aMH0OFR%2B3Kk94zQFyF8wcns31sn6I0xOdA8DHRXLFiHVcLjHSPjOopCDPtDmoktNVIzCHtsm09rPoVHx%2BrU1nj4DM6EHizOsH5dC2CPChRBYEx6Xgj1xLz47RW49xosyzBhlmda4LiX5tjrb9DOLElriGMS9zUAZO71RxlJieHeLzZ3Bj%2B8SEO7ZIgYckHKJF53tGI9CxjepuqwsPn09tyDD0y87UBjqkASUCN%2FMvUSIfrHNqT7mNoMeBkXeXJpVI1gt4qAAwxCnIGRlcCqGbjaxAlakbqR3FHZ2uQwDQyU1hTIzz%2BgWGppnFOGR%2BWIl2v4auqHZFZfv7yzBUcq6up6UxH8mnPb1J5Ygj%2B8ek9UKBYwE83yiWDBlv0RjZAPC4dlYj5jxLUFaHQ%2B4XOBoRt%2B3kGuqPJaCNNzFnFY8DuKuxdmUsRXdVEIZ%2FNMbi&X-Amz-Signature=b6a8029900c13cae9ca43ce6afc9075e372cb7288aadd77b5269a68d25278ad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
