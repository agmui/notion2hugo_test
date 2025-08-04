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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRYGL3K%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICppa073XqXv90BHiSr1uHge1fg%2FI3dnP6L%2FXivJkowBAiBVFUY3v1fN27NG3Nnt4b86yu5yezH1jLFBVQ9dIgGlDSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHzqBk%2BzjU6MX2KEtKtwD0l%2FelLPWtKp68wFS9qVrCiQMU%2BBm8DMAYygRbrNofT6KSXDIc%2BG%2BudnUp8SN6VGKkpQClKgTfCx%2BotCaz8Z1h1vHymUPchgSR%2FTVuvbMMmcLdj%2FEA221O6XKfZax0rlB7RrgLF2rWgj172OU2bM8Zw86ZBBUuFYfqDMaDqOjlgBFLebnNzuDizW9Ajn1Xb9p%2FWKNkjYZJcSP7f42f%2BOQdNEzZf4xxRO6J3NaMv%2B%2BmV73sR6x9IqVbsGjOyNWYbJk9LSbRgs8T%2BATaM5%2FLlDRG0gecEVO645X%2BNqrPwIrowhh10Xg8I9ILS55aVrz3JHVPGLLEXJCGfmDWTiQAn%2BiN2XK0fcBZuNhpCFSk1Zb9m7ZsIgt7HjpGSTOrA9GIh5t7%2B63CX8bmR3z1xCyt5RjyCDQWXdB6IWxBXYsWICdx%2BMR0%2BusAowZr5xcGsYhfPifz777rB7fLL%2BgCzzJOVe7GA%2FerYuRkK7tZ9joTnx3QvfmrXIWi3A5rU%2FNtcEDhVXBsu8M1MyQLr3W9G6IVeq6tsf2as2ML42pL%2BSs143za6ENAidcZ%2FJRp64vOGWEDCTwOGDyarDsD%2BUpvq2UeOIZmdWAVQ0BKI8fXO7h68MZYPw9MG6VabYwGNRuEGcwqZ3ExAY6pgGnSSU1IJuz%2BKxcE0mhk9rfTK9Oc45rzk1%2FEghEIfDd75lFvYockyj2dFZEHHTX8nXvPTFnw0IVu1LoTZCoJSbMl4dorXj1vtJ8MPbcBkDR9ejfv3KVwnQetIdg5uusS8JeahzGRT7stO7nV9OzEpbEwf0Z4DWtVTvD6VAl170%2FyZLojxndi%2FuS5Vvgi68nOnzGAZB5UA8HoI7IYYHcoCcaR2Rhm9Wy&X-Amz-Signature=9dce889ff5cce9bd604a928e25353b8095caa0ea1f4d1e18e0c4ab2f8c524a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRYGL3K%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICppa073XqXv90BHiSr1uHge1fg%2FI3dnP6L%2FXivJkowBAiBVFUY3v1fN27NG3Nnt4b86yu5yezH1jLFBVQ9dIgGlDSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHzqBk%2BzjU6MX2KEtKtwD0l%2FelLPWtKp68wFS9qVrCiQMU%2BBm8DMAYygRbrNofT6KSXDIc%2BG%2BudnUp8SN6VGKkpQClKgTfCx%2BotCaz8Z1h1vHymUPchgSR%2FTVuvbMMmcLdj%2FEA221O6XKfZax0rlB7RrgLF2rWgj172OU2bM8Zw86ZBBUuFYfqDMaDqOjlgBFLebnNzuDizW9Ajn1Xb9p%2FWKNkjYZJcSP7f42f%2BOQdNEzZf4xxRO6J3NaMv%2B%2BmV73sR6x9IqVbsGjOyNWYbJk9LSbRgs8T%2BATaM5%2FLlDRG0gecEVO645X%2BNqrPwIrowhh10Xg8I9ILS55aVrz3JHVPGLLEXJCGfmDWTiQAn%2BiN2XK0fcBZuNhpCFSk1Zb9m7ZsIgt7HjpGSTOrA9GIh5t7%2B63CX8bmR3z1xCyt5RjyCDQWXdB6IWxBXYsWICdx%2BMR0%2BusAowZr5xcGsYhfPifz777rB7fLL%2BgCzzJOVe7GA%2FerYuRkK7tZ9joTnx3QvfmrXIWi3A5rU%2FNtcEDhVXBsu8M1MyQLr3W9G6IVeq6tsf2as2ML42pL%2BSs143za6ENAidcZ%2FJRp64vOGWEDCTwOGDyarDsD%2BUpvq2UeOIZmdWAVQ0BKI8fXO7h68MZYPw9MG6VabYwGNRuEGcwqZ3ExAY6pgGnSSU1IJuz%2BKxcE0mhk9rfTK9Oc45rzk1%2FEghEIfDd75lFvYockyj2dFZEHHTX8nXvPTFnw0IVu1LoTZCoJSbMl4dorXj1vtJ8MPbcBkDR9ejfv3KVwnQetIdg5uusS8JeahzGRT7stO7nV9OzEpbEwf0Z4DWtVTvD6VAl170%2FyZLojxndi%2FuS5Vvgi68nOnzGAZB5UA8HoI7IYYHcoCcaR2Rhm9Wy&X-Amz-Signature=2922273695da38d72491be21e65dd3ce36f2bc517e56894712a5cabee0e35403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRYGL3K%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICppa073XqXv90BHiSr1uHge1fg%2FI3dnP6L%2FXivJkowBAiBVFUY3v1fN27NG3Nnt4b86yu5yezH1jLFBVQ9dIgGlDSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHzqBk%2BzjU6MX2KEtKtwD0l%2FelLPWtKp68wFS9qVrCiQMU%2BBm8DMAYygRbrNofT6KSXDIc%2BG%2BudnUp8SN6VGKkpQClKgTfCx%2BotCaz8Z1h1vHymUPchgSR%2FTVuvbMMmcLdj%2FEA221O6XKfZax0rlB7RrgLF2rWgj172OU2bM8Zw86ZBBUuFYfqDMaDqOjlgBFLebnNzuDizW9Ajn1Xb9p%2FWKNkjYZJcSP7f42f%2BOQdNEzZf4xxRO6J3NaMv%2B%2BmV73sR6x9IqVbsGjOyNWYbJk9LSbRgs8T%2BATaM5%2FLlDRG0gecEVO645X%2BNqrPwIrowhh10Xg8I9ILS55aVrz3JHVPGLLEXJCGfmDWTiQAn%2BiN2XK0fcBZuNhpCFSk1Zb9m7ZsIgt7HjpGSTOrA9GIh5t7%2B63CX8bmR3z1xCyt5RjyCDQWXdB6IWxBXYsWICdx%2BMR0%2BusAowZr5xcGsYhfPifz777rB7fLL%2BgCzzJOVe7GA%2FerYuRkK7tZ9joTnx3QvfmrXIWi3A5rU%2FNtcEDhVXBsu8M1MyQLr3W9G6IVeq6tsf2as2ML42pL%2BSs143za6ENAidcZ%2FJRp64vOGWEDCTwOGDyarDsD%2BUpvq2UeOIZmdWAVQ0BKI8fXO7h68MZYPw9MG6VabYwGNRuEGcwqZ3ExAY6pgGnSSU1IJuz%2BKxcE0mhk9rfTK9Oc45rzk1%2FEghEIfDd75lFvYockyj2dFZEHHTX8nXvPTFnw0IVu1LoTZCoJSbMl4dorXj1vtJ8MPbcBkDR9ejfv3KVwnQetIdg5uusS8JeahzGRT7stO7nV9OzEpbEwf0Z4DWtVTvD6VAl170%2FyZLojxndi%2FuS5Vvgi68nOnzGAZB5UA8HoI7IYYHcoCcaR2Rhm9Wy&X-Amz-Signature=2fc40fe24c203ed661769861282f665f72fed4c156916adc0d21d944544325bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRYGL3K%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICppa073XqXv90BHiSr1uHge1fg%2FI3dnP6L%2FXivJkowBAiBVFUY3v1fN27NG3Nnt4b86yu5yezH1jLFBVQ9dIgGlDSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHzqBk%2BzjU6MX2KEtKtwD0l%2FelLPWtKp68wFS9qVrCiQMU%2BBm8DMAYygRbrNofT6KSXDIc%2BG%2BudnUp8SN6VGKkpQClKgTfCx%2BotCaz8Z1h1vHymUPchgSR%2FTVuvbMMmcLdj%2FEA221O6XKfZax0rlB7RrgLF2rWgj172OU2bM8Zw86ZBBUuFYfqDMaDqOjlgBFLebnNzuDizW9Ajn1Xb9p%2FWKNkjYZJcSP7f42f%2BOQdNEzZf4xxRO6J3NaMv%2B%2BmV73sR6x9IqVbsGjOyNWYbJk9LSbRgs8T%2BATaM5%2FLlDRG0gecEVO645X%2BNqrPwIrowhh10Xg8I9ILS55aVrz3JHVPGLLEXJCGfmDWTiQAn%2BiN2XK0fcBZuNhpCFSk1Zb9m7ZsIgt7HjpGSTOrA9GIh5t7%2B63CX8bmR3z1xCyt5RjyCDQWXdB6IWxBXYsWICdx%2BMR0%2BusAowZr5xcGsYhfPifz777rB7fLL%2BgCzzJOVe7GA%2FerYuRkK7tZ9joTnx3QvfmrXIWi3A5rU%2FNtcEDhVXBsu8M1MyQLr3W9G6IVeq6tsf2as2ML42pL%2BSs143za6ENAidcZ%2FJRp64vOGWEDCTwOGDyarDsD%2BUpvq2UeOIZmdWAVQ0BKI8fXO7h68MZYPw9MG6VabYwGNRuEGcwqZ3ExAY6pgGnSSU1IJuz%2BKxcE0mhk9rfTK9Oc45rzk1%2FEghEIfDd75lFvYockyj2dFZEHHTX8nXvPTFnw0IVu1LoTZCoJSbMl4dorXj1vtJ8MPbcBkDR9ejfv3KVwnQetIdg5uusS8JeahzGRT7stO7nV9OzEpbEwf0Z4DWtVTvD6VAl170%2FyZLojxndi%2FuS5Vvgi68nOnzGAZB5UA8HoI7IYYHcoCcaR2Rhm9Wy&X-Amz-Signature=6c2f8b816a80f854408ccf1494394cbdbfbe1213c32a51ea08bf29bcf020c67e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRYGL3K%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICppa073XqXv90BHiSr1uHge1fg%2FI3dnP6L%2FXivJkowBAiBVFUY3v1fN27NG3Nnt4b86yu5yezH1jLFBVQ9dIgGlDSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHzqBk%2BzjU6MX2KEtKtwD0l%2FelLPWtKp68wFS9qVrCiQMU%2BBm8DMAYygRbrNofT6KSXDIc%2BG%2BudnUp8SN6VGKkpQClKgTfCx%2BotCaz8Z1h1vHymUPchgSR%2FTVuvbMMmcLdj%2FEA221O6XKfZax0rlB7RrgLF2rWgj172OU2bM8Zw86ZBBUuFYfqDMaDqOjlgBFLebnNzuDizW9Ajn1Xb9p%2FWKNkjYZJcSP7f42f%2BOQdNEzZf4xxRO6J3NaMv%2B%2BmV73sR6x9IqVbsGjOyNWYbJk9LSbRgs8T%2BATaM5%2FLlDRG0gecEVO645X%2BNqrPwIrowhh10Xg8I9ILS55aVrz3JHVPGLLEXJCGfmDWTiQAn%2BiN2XK0fcBZuNhpCFSk1Zb9m7ZsIgt7HjpGSTOrA9GIh5t7%2B63CX8bmR3z1xCyt5RjyCDQWXdB6IWxBXYsWICdx%2BMR0%2BusAowZr5xcGsYhfPifz777rB7fLL%2BgCzzJOVe7GA%2FerYuRkK7tZ9joTnx3QvfmrXIWi3A5rU%2FNtcEDhVXBsu8M1MyQLr3W9G6IVeq6tsf2as2ML42pL%2BSs143za6ENAidcZ%2FJRp64vOGWEDCTwOGDyarDsD%2BUpvq2UeOIZmdWAVQ0BKI8fXO7h68MZYPw9MG6VabYwGNRuEGcwqZ3ExAY6pgGnSSU1IJuz%2BKxcE0mhk9rfTK9Oc45rzk1%2FEghEIfDd75lFvYockyj2dFZEHHTX8nXvPTFnw0IVu1LoTZCoJSbMl4dorXj1vtJ8MPbcBkDR9ejfv3KVwnQetIdg5uusS8JeahzGRT7stO7nV9OzEpbEwf0Z4DWtVTvD6VAl170%2FyZLojxndi%2FuS5Vvgi68nOnzGAZB5UA8HoI7IYYHcoCcaR2Rhm9Wy&X-Amz-Signature=9f840bcb052993111673b5818885492a6fa87e2c230bb242dba7c824e309b5c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRYGL3K%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICppa073XqXv90BHiSr1uHge1fg%2FI3dnP6L%2FXivJkowBAiBVFUY3v1fN27NG3Nnt4b86yu5yezH1jLFBVQ9dIgGlDSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHzqBk%2BzjU6MX2KEtKtwD0l%2FelLPWtKp68wFS9qVrCiQMU%2BBm8DMAYygRbrNofT6KSXDIc%2BG%2BudnUp8SN6VGKkpQClKgTfCx%2BotCaz8Z1h1vHymUPchgSR%2FTVuvbMMmcLdj%2FEA221O6XKfZax0rlB7RrgLF2rWgj172OU2bM8Zw86ZBBUuFYfqDMaDqOjlgBFLebnNzuDizW9Ajn1Xb9p%2FWKNkjYZJcSP7f42f%2BOQdNEzZf4xxRO6J3NaMv%2B%2BmV73sR6x9IqVbsGjOyNWYbJk9LSbRgs8T%2BATaM5%2FLlDRG0gecEVO645X%2BNqrPwIrowhh10Xg8I9ILS55aVrz3JHVPGLLEXJCGfmDWTiQAn%2BiN2XK0fcBZuNhpCFSk1Zb9m7ZsIgt7HjpGSTOrA9GIh5t7%2B63CX8bmR3z1xCyt5RjyCDQWXdB6IWxBXYsWICdx%2BMR0%2BusAowZr5xcGsYhfPifz777rB7fLL%2BgCzzJOVe7GA%2FerYuRkK7tZ9joTnx3QvfmrXIWi3A5rU%2FNtcEDhVXBsu8M1MyQLr3W9G6IVeq6tsf2as2ML42pL%2BSs143za6ENAidcZ%2FJRp64vOGWEDCTwOGDyarDsD%2BUpvq2UeOIZmdWAVQ0BKI8fXO7h68MZYPw9MG6VabYwGNRuEGcwqZ3ExAY6pgGnSSU1IJuz%2BKxcE0mhk9rfTK9Oc45rzk1%2FEghEIfDd75lFvYockyj2dFZEHHTX8nXvPTFnw0IVu1LoTZCoJSbMl4dorXj1vtJ8MPbcBkDR9ejfv3KVwnQetIdg5uusS8JeahzGRT7stO7nV9OzEpbEwf0Z4DWtVTvD6VAl170%2FyZLojxndi%2FuS5Vvgi68nOnzGAZB5UA8HoI7IYYHcoCcaR2Rhm9Wy&X-Amz-Signature=8e7ac44944c59aa0affb5b4e432282766ad1a40a21129a561b39c52e93e98f12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRYGL3K%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICppa073XqXv90BHiSr1uHge1fg%2FI3dnP6L%2FXivJkowBAiBVFUY3v1fN27NG3Nnt4b86yu5yezH1jLFBVQ9dIgGlDSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHzqBk%2BzjU6MX2KEtKtwD0l%2FelLPWtKp68wFS9qVrCiQMU%2BBm8DMAYygRbrNofT6KSXDIc%2BG%2BudnUp8SN6VGKkpQClKgTfCx%2BotCaz8Z1h1vHymUPchgSR%2FTVuvbMMmcLdj%2FEA221O6XKfZax0rlB7RrgLF2rWgj172OU2bM8Zw86ZBBUuFYfqDMaDqOjlgBFLebnNzuDizW9Ajn1Xb9p%2FWKNkjYZJcSP7f42f%2BOQdNEzZf4xxRO6J3NaMv%2B%2BmV73sR6x9IqVbsGjOyNWYbJk9LSbRgs8T%2BATaM5%2FLlDRG0gecEVO645X%2BNqrPwIrowhh10Xg8I9ILS55aVrz3JHVPGLLEXJCGfmDWTiQAn%2BiN2XK0fcBZuNhpCFSk1Zb9m7ZsIgt7HjpGSTOrA9GIh5t7%2B63CX8bmR3z1xCyt5RjyCDQWXdB6IWxBXYsWICdx%2BMR0%2BusAowZr5xcGsYhfPifz777rB7fLL%2BgCzzJOVe7GA%2FerYuRkK7tZ9joTnx3QvfmrXIWi3A5rU%2FNtcEDhVXBsu8M1MyQLr3W9G6IVeq6tsf2as2ML42pL%2BSs143za6ENAidcZ%2FJRp64vOGWEDCTwOGDyarDsD%2BUpvq2UeOIZmdWAVQ0BKI8fXO7h68MZYPw9MG6VabYwGNRuEGcwqZ3ExAY6pgGnSSU1IJuz%2BKxcE0mhk9rfTK9Oc45rzk1%2FEghEIfDd75lFvYockyj2dFZEHHTX8nXvPTFnw0IVu1LoTZCoJSbMl4dorXj1vtJ8MPbcBkDR9ejfv3KVwnQetIdg5uusS8JeahzGRT7stO7nV9OzEpbEwf0Z4DWtVTvD6VAl170%2FyZLojxndi%2FuS5Vvgi68nOnzGAZB5UA8HoI7IYYHcoCcaR2Rhm9Wy&X-Amz-Signature=968bb1c99392143f5d4cc62db10bdadf2e3412a13befc6abd843e237a8662b0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRYGL3K%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICppa073XqXv90BHiSr1uHge1fg%2FI3dnP6L%2FXivJkowBAiBVFUY3v1fN27NG3Nnt4b86yu5yezH1jLFBVQ9dIgGlDSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHzqBk%2BzjU6MX2KEtKtwD0l%2FelLPWtKp68wFS9qVrCiQMU%2BBm8DMAYygRbrNofT6KSXDIc%2BG%2BudnUp8SN6VGKkpQClKgTfCx%2BotCaz8Z1h1vHymUPchgSR%2FTVuvbMMmcLdj%2FEA221O6XKfZax0rlB7RrgLF2rWgj172OU2bM8Zw86ZBBUuFYfqDMaDqOjlgBFLebnNzuDizW9Ajn1Xb9p%2FWKNkjYZJcSP7f42f%2BOQdNEzZf4xxRO6J3NaMv%2B%2BmV73sR6x9IqVbsGjOyNWYbJk9LSbRgs8T%2BATaM5%2FLlDRG0gecEVO645X%2BNqrPwIrowhh10Xg8I9ILS55aVrz3JHVPGLLEXJCGfmDWTiQAn%2BiN2XK0fcBZuNhpCFSk1Zb9m7ZsIgt7HjpGSTOrA9GIh5t7%2B63CX8bmR3z1xCyt5RjyCDQWXdB6IWxBXYsWICdx%2BMR0%2BusAowZr5xcGsYhfPifz777rB7fLL%2BgCzzJOVe7GA%2FerYuRkK7tZ9joTnx3QvfmrXIWi3A5rU%2FNtcEDhVXBsu8M1MyQLr3W9G6IVeq6tsf2as2ML42pL%2BSs143za6ENAidcZ%2FJRp64vOGWEDCTwOGDyarDsD%2BUpvq2UeOIZmdWAVQ0BKI8fXO7h68MZYPw9MG6VabYwGNRuEGcwqZ3ExAY6pgGnSSU1IJuz%2BKxcE0mhk9rfTK9Oc45rzk1%2FEghEIfDd75lFvYockyj2dFZEHHTX8nXvPTFnw0IVu1LoTZCoJSbMl4dorXj1vtJ8MPbcBkDR9ejfv3KVwnQetIdg5uusS8JeahzGRT7stO7nV9OzEpbEwf0Z4DWtVTvD6VAl170%2FyZLojxndi%2FuS5Vvgi68nOnzGAZB5UA8HoI7IYYHcoCcaR2Rhm9Wy&X-Amz-Signature=736c8b68407988948302bba9e478dd9fe4b269a6504d4f01a59f23c6c94b95cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRYGL3K%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICppa073XqXv90BHiSr1uHge1fg%2FI3dnP6L%2FXivJkowBAiBVFUY3v1fN27NG3Nnt4b86yu5yezH1jLFBVQ9dIgGlDSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHzqBk%2BzjU6MX2KEtKtwD0l%2FelLPWtKp68wFS9qVrCiQMU%2BBm8DMAYygRbrNofT6KSXDIc%2BG%2BudnUp8SN6VGKkpQClKgTfCx%2BotCaz8Z1h1vHymUPchgSR%2FTVuvbMMmcLdj%2FEA221O6XKfZax0rlB7RrgLF2rWgj172OU2bM8Zw86ZBBUuFYfqDMaDqOjlgBFLebnNzuDizW9Ajn1Xb9p%2FWKNkjYZJcSP7f42f%2BOQdNEzZf4xxRO6J3NaMv%2B%2BmV73sR6x9IqVbsGjOyNWYbJk9LSbRgs8T%2BATaM5%2FLlDRG0gecEVO645X%2BNqrPwIrowhh10Xg8I9ILS55aVrz3JHVPGLLEXJCGfmDWTiQAn%2BiN2XK0fcBZuNhpCFSk1Zb9m7ZsIgt7HjpGSTOrA9GIh5t7%2B63CX8bmR3z1xCyt5RjyCDQWXdB6IWxBXYsWICdx%2BMR0%2BusAowZr5xcGsYhfPifz777rB7fLL%2BgCzzJOVe7GA%2FerYuRkK7tZ9joTnx3QvfmrXIWi3A5rU%2FNtcEDhVXBsu8M1MyQLr3W9G6IVeq6tsf2as2ML42pL%2BSs143za6ENAidcZ%2FJRp64vOGWEDCTwOGDyarDsD%2BUpvq2UeOIZmdWAVQ0BKI8fXO7h68MZYPw9MG6VabYwGNRuEGcwqZ3ExAY6pgGnSSU1IJuz%2BKxcE0mhk9rfTK9Oc45rzk1%2FEghEIfDd75lFvYockyj2dFZEHHTX8nXvPTFnw0IVu1LoTZCoJSbMl4dorXj1vtJ8MPbcBkDR9ejfv3KVwnQetIdg5uusS8JeahzGRT7stO7nV9OzEpbEwf0Z4DWtVTvD6VAl170%2FyZLojxndi%2FuS5Vvgi68nOnzGAZB5UA8HoI7IYYHcoCcaR2Rhm9Wy&X-Amz-Signature=71011c809f07776da4e9eb8b0d40eaa0fa2d2e023e72b00fe1072608655294e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRYGL3K%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICppa073XqXv90BHiSr1uHge1fg%2FI3dnP6L%2FXivJkowBAiBVFUY3v1fN27NG3Nnt4b86yu5yezH1jLFBVQ9dIgGlDSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHzqBk%2BzjU6MX2KEtKtwD0l%2FelLPWtKp68wFS9qVrCiQMU%2BBm8DMAYygRbrNofT6KSXDIc%2BG%2BudnUp8SN6VGKkpQClKgTfCx%2BotCaz8Z1h1vHymUPchgSR%2FTVuvbMMmcLdj%2FEA221O6XKfZax0rlB7RrgLF2rWgj172OU2bM8Zw86ZBBUuFYfqDMaDqOjlgBFLebnNzuDizW9Ajn1Xb9p%2FWKNkjYZJcSP7f42f%2BOQdNEzZf4xxRO6J3NaMv%2B%2BmV73sR6x9IqVbsGjOyNWYbJk9LSbRgs8T%2BATaM5%2FLlDRG0gecEVO645X%2BNqrPwIrowhh10Xg8I9ILS55aVrz3JHVPGLLEXJCGfmDWTiQAn%2BiN2XK0fcBZuNhpCFSk1Zb9m7ZsIgt7HjpGSTOrA9GIh5t7%2B63CX8bmR3z1xCyt5RjyCDQWXdB6IWxBXYsWICdx%2BMR0%2BusAowZr5xcGsYhfPifz777rB7fLL%2BgCzzJOVe7GA%2FerYuRkK7tZ9joTnx3QvfmrXIWi3A5rU%2FNtcEDhVXBsu8M1MyQLr3W9G6IVeq6tsf2as2ML42pL%2BSs143za6ENAidcZ%2FJRp64vOGWEDCTwOGDyarDsD%2BUpvq2UeOIZmdWAVQ0BKI8fXO7h68MZYPw9MG6VabYwGNRuEGcwqZ3ExAY6pgGnSSU1IJuz%2BKxcE0mhk9rfTK9Oc45rzk1%2FEghEIfDd75lFvYockyj2dFZEHHTX8nXvPTFnw0IVu1LoTZCoJSbMl4dorXj1vtJ8MPbcBkDR9ejfv3KVwnQetIdg5uusS8JeahzGRT7stO7nV9OzEpbEwf0Z4DWtVTvD6VAl170%2FyZLojxndi%2FuS5Vvgi68nOnzGAZB5UA8HoI7IYYHcoCcaR2Rhm9Wy&X-Amz-Signature=b4df32c2257cf60505395648eaec426c0f285e3725af5a36af551b7074b21bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRYGL3K%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICppa073XqXv90BHiSr1uHge1fg%2FI3dnP6L%2FXivJkowBAiBVFUY3v1fN27NG3Nnt4b86yu5yezH1jLFBVQ9dIgGlDSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHzqBk%2BzjU6MX2KEtKtwD0l%2FelLPWtKp68wFS9qVrCiQMU%2BBm8DMAYygRbrNofT6KSXDIc%2BG%2BudnUp8SN6VGKkpQClKgTfCx%2BotCaz8Z1h1vHymUPchgSR%2FTVuvbMMmcLdj%2FEA221O6XKfZax0rlB7RrgLF2rWgj172OU2bM8Zw86ZBBUuFYfqDMaDqOjlgBFLebnNzuDizW9Ajn1Xb9p%2FWKNkjYZJcSP7f42f%2BOQdNEzZf4xxRO6J3NaMv%2B%2BmV73sR6x9IqVbsGjOyNWYbJk9LSbRgs8T%2BATaM5%2FLlDRG0gecEVO645X%2BNqrPwIrowhh10Xg8I9ILS55aVrz3JHVPGLLEXJCGfmDWTiQAn%2BiN2XK0fcBZuNhpCFSk1Zb9m7ZsIgt7HjpGSTOrA9GIh5t7%2B63CX8bmR3z1xCyt5RjyCDQWXdB6IWxBXYsWICdx%2BMR0%2BusAowZr5xcGsYhfPifz777rB7fLL%2BgCzzJOVe7GA%2FerYuRkK7tZ9joTnx3QvfmrXIWi3A5rU%2FNtcEDhVXBsu8M1MyQLr3W9G6IVeq6tsf2as2ML42pL%2BSs143za6ENAidcZ%2FJRp64vOGWEDCTwOGDyarDsD%2BUpvq2UeOIZmdWAVQ0BKI8fXO7h68MZYPw9MG6VabYwGNRuEGcwqZ3ExAY6pgGnSSU1IJuz%2BKxcE0mhk9rfTK9Oc45rzk1%2FEghEIfDd75lFvYockyj2dFZEHHTX8nXvPTFnw0IVu1LoTZCoJSbMl4dorXj1vtJ8MPbcBkDR9ejfv3KVwnQetIdg5uusS8JeahzGRT7stO7nV9OzEpbEwf0Z4DWtVTvD6VAl170%2FyZLojxndi%2FuS5Vvgi68nOnzGAZB5UA8HoI7IYYHcoCcaR2Rhm9Wy&X-Amz-Signature=9a01fdddd8416080d95555919dedc49a3d05d625d554bf0a4d57792e80bf5df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRYGL3K%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICppa073XqXv90BHiSr1uHge1fg%2FI3dnP6L%2FXivJkowBAiBVFUY3v1fN27NG3Nnt4b86yu5yezH1jLFBVQ9dIgGlDSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHzqBk%2BzjU6MX2KEtKtwD0l%2FelLPWtKp68wFS9qVrCiQMU%2BBm8DMAYygRbrNofT6KSXDIc%2BG%2BudnUp8SN6VGKkpQClKgTfCx%2BotCaz8Z1h1vHymUPchgSR%2FTVuvbMMmcLdj%2FEA221O6XKfZax0rlB7RrgLF2rWgj172OU2bM8Zw86ZBBUuFYfqDMaDqOjlgBFLebnNzuDizW9Ajn1Xb9p%2FWKNkjYZJcSP7f42f%2BOQdNEzZf4xxRO6J3NaMv%2B%2BmV73sR6x9IqVbsGjOyNWYbJk9LSbRgs8T%2BATaM5%2FLlDRG0gecEVO645X%2BNqrPwIrowhh10Xg8I9ILS55aVrz3JHVPGLLEXJCGfmDWTiQAn%2BiN2XK0fcBZuNhpCFSk1Zb9m7ZsIgt7HjpGSTOrA9GIh5t7%2B63CX8bmR3z1xCyt5RjyCDQWXdB6IWxBXYsWICdx%2BMR0%2BusAowZr5xcGsYhfPifz777rB7fLL%2BgCzzJOVe7GA%2FerYuRkK7tZ9joTnx3QvfmrXIWi3A5rU%2FNtcEDhVXBsu8M1MyQLr3W9G6IVeq6tsf2as2ML42pL%2BSs143za6ENAidcZ%2FJRp64vOGWEDCTwOGDyarDsD%2BUpvq2UeOIZmdWAVQ0BKI8fXO7h68MZYPw9MG6VabYwGNRuEGcwqZ3ExAY6pgGnSSU1IJuz%2BKxcE0mhk9rfTK9Oc45rzk1%2FEghEIfDd75lFvYockyj2dFZEHHTX8nXvPTFnw0IVu1LoTZCoJSbMl4dorXj1vtJ8MPbcBkDR9ejfv3KVwnQetIdg5uusS8JeahzGRT7stO7nV9OzEpbEwf0Z4DWtVTvD6VAl170%2FyZLojxndi%2FuS5Vvgi68nOnzGAZB5UA8HoI7IYYHcoCcaR2Rhm9Wy&X-Amz-Signature=a27501d81af38072da9f29a389cefee83edcdf1fbd301076dea4655a6ad630dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRYGL3K%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICppa073XqXv90BHiSr1uHge1fg%2FI3dnP6L%2FXivJkowBAiBVFUY3v1fN27NG3Nnt4b86yu5yezH1jLFBVQ9dIgGlDSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHzqBk%2BzjU6MX2KEtKtwD0l%2FelLPWtKp68wFS9qVrCiQMU%2BBm8DMAYygRbrNofT6KSXDIc%2BG%2BudnUp8SN6VGKkpQClKgTfCx%2BotCaz8Z1h1vHymUPchgSR%2FTVuvbMMmcLdj%2FEA221O6XKfZax0rlB7RrgLF2rWgj172OU2bM8Zw86ZBBUuFYfqDMaDqOjlgBFLebnNzuDizW9Ajn1Xb9p%2FWKNkjYZJcSP7f42f%2BOQdNEzZf4xxRO6J3NaMv%2B%2BmV73sR6x9IqVbsGjOyNWYbJk9LSbRgs8T%2BATaM5%2FLlDRG0gecEVO645X%2BNqrPwIrowhh10Xg8I9ILS55aVrz3JHVPGLLEXJCGfmDWTiQAn%2BiN2XK0fcBZuNhpCFSk1Zb9m7ZsIgt7HjpGSTOrA9GIh5t7%2B63CX8bmR3z1xCyt5RjyCDQWXdB6IWxBXYsWICdx%2BMR0%2BusAowZr5xcGsYhfPifz777rB7fLL%2BgCzzJOVe7GA%2FerYuRkK7tZ9joTnx3QvfmrXIWi3A5rU%2FNtcEDhVXBsu8M1MyQLr3W9G6IVeq6tsf2as2ML42pL%2BSs143za6ENAidcZ%2FJRp64vOGWEDCTwOGDyarDsD%2BUpvq2UeOIZmdWAVQ0BKI8fXO7h68MZYPw9MG6VabYwGNRuEGcwqZ3ExAY6pgGnSSU1IJuz%2BKxcE0mhk9rfTK9Oc45rzk1%2FEghEIfDd75lFvYockyj2dFZEHHTX8nXvPTFnw0IVu1LoTZCoJSbMl4dorXj1vtJ8MPbcBkDR9ejfv3KVwnQetIdg5uusS8JeahzGRT7stO7nV9OzEpbEwf0Z4DWtVTvD6VAl170%2FyZLojxndi%2FuS5Vvgi68nOnzGAZB5UA8HoI7IYYHcoCcaR2Rhm9Wy&X-Amz-Signature=6237d42eef6b09e6f0a1f112d19b59fe51088e18011738338d161fde768a8e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRYGL3K%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICppa073XqXv90BHiSr1uHge1fg%2FI3dnP6L%2FXivJkowBAiBVFUY3v1fN27NG3Nnt4b86yu5yezH1jLFBVQ9dIgGlDSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMHzqBk%2BzjU6MX2KEtKtwD0l%2FelLPWtKp68wFS9qVrCiQMU%2BBm8DMAYygRbrNofT6KSXDIc%2BG%2BudnUp8SN6VGKkpQClKgTfCx%2BotCaz8Z1h1vHymUPchgSR%2FTVuvbMMmcLdj%2FEA221O6XKfZax0rlB7RrgLF2rWgj172OU2bM8Zw86ZBBUuFYfqDMaDqOjlgBFLebnNzuDizW9Ajn1Xb9p%2FWKNkjYZJcSP7f42f%2BOQdNEzZf4xxRO6J3NaMv%2B%2BmV73sR6x9IqVbsGjOyNWYbJk9LSbRgs8T%2BATaM5%2FLlDRG0gecEVO645X%2BNqrPwIrowhh10Xg8I9ILS55aVrz3JHVPGLLEXJCGfmDWTiQAn%2BiN2XK0fcBZuNhpCFSk1Zb9m7ZsIgt7HjpGSTOrA9GIh5t7%2B63CX8bmR3z1xCyt5RjyCDQWXdB6IWxBXYsWICdx%2BMR0%2BusAowZr5xcGsYhfPifz777rB7fLL%2BgCzzJOVe7GA%2FerYuRkK7tZ9joTnx3QvfmrXIWi3A5rU%2FNtcEDhVXBsu8M1MyQLr3W9G6IVeq6tsf2as2ML42pL%2BSs143za6ENAidcZ%2FJRp64vOGWEDCTwOGDyarDsD%2BUpvq2UeOIZmdWAVQ0BKI8fXO7h68MZYPw9MG6VabYwGNRuEGcwqZ3ExAY6pgGnSSU1IJuz%2BKxcE0mhk9rfTK9Oc45rzk1%2FEghEIfDd75lFvYockyj2dFZEHHTX8nXvPTFnw0IVu1LoTZCoJSbMl4dorXj1vtJ8MPbcBkDR9ejfv3KVwnQetIdg5uusS8JeahzGRT7stO7nV9OzEpbEwf0Z4DWtVTvD6VAl170%2FyZLojxndi%2FuS5Vvgi68nOnzGAZB5UA8HoI7IYYHcoCcaR2Rhm9Wy&X-Amz-Signature=caf6ba4706a6c06f0a1b94cff055d11a52894a62df85057fa8a1bfedf61331a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
