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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPTUUXFH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDplLlAGlQh%2FNl1JkeyW3XtZaehHxe3KMinL8n8VQt5IwIgD7bAgDIzki6wtbZtFZmhhBV8GFpeFWTNXgSyaCmlDBQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQD7oC6XUvY%2BSeyfSrcA3yjb%2FalOVIbFK%2Fr%2BRyhTXYlf8MJZnX1wC%2FAaKd9veoydDo%2FKuo8Ab4oDvnciHNKgqHdxNwH%2FsjNTgVsgXBqh%2BwFKUq3uM3LboY4Lf3ucGcS0FmeKOYJxm2e9JGnlareg%2F%2BY6FQvBRRnBNwl%2FFE%2BUOanR2is0MupdWhNv9K0QHxkxiiAb%2BcpHWSoAPljw3lZdHkQs%2FEIaBgfr2aVPxz4c9vzTiX%2FDGvYorg0c1E4lQjIYZXK5N%2BI11TuxTkK7%2FytOHZ2R5z2C6FDWspLW96%2Fcu6YBtEmLdv20SUTBNnovRI2kbDnMMVBDmNzLWG51awRsLrmgG5j174fPfm0h77jSA1blTzuVe6pDZFP1szU3DuSNxxFO1l7s3IKwJSGIte%2FtV0ar8jw3SQS0lfbUVH1mOr2O%2Bf85Js6UBp4P1sdC%2BpkX8PNVNmcsgxGLepN1rsEhD0X5zuoLUabXDZ2hUYuqaFStc5fKL2KASKBKhyCtVrFhSuByWLoSFWIj5klYcfyoEy9yhVXJn7Xn%2BM1Zn6AnUs4CxEP70cVy0Rzfbk7FxQpL9mJRfuN1S%2FIY5Tz4LV4Lam%2BMdKCYKki0Rb%2BMqiNZtbphAmle2m%2B8bebjsvuOaFP52ZZhCoxPXBkSDjfMN3E28QGOqUBNuwalcyy2N%2F0vhlgRgaP63YC3jCLexqpKP1VrvhO4ZmAnryA9AxLe58HSES%2FZb1pXCYQBvkNfG%2FJaMzH67j7GUocIIVGJCg3IiGrTt3%2BKHQk8F%2B0cF0ZRgFtt5j1Gw%2Bd7dvrEAEfOFLFMMSt%2BbtNAzlAagPT2ivtO7lU3dTdfgQ0xjtz0bovKoJ0pbFHh6B71aJCJEq1jWfc%2FMJx9SzWw%2Furta7x&X-Amz-Signature=dd1d798e52d4bab1056b7ee91db5e7ed529fac7b03f52a32c421748fd574c085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPTUUXFH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDplLlAGlQh%2FNl1JkeyW3XtZaehHxe3KMinL8n8VQt5IwIgD7bAgDIzki6wtbZtFZmhhBV8GFpeFWTNXgSyaCmlDBQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQD7oC6XUvY%2BSeyfSrcA3yjb%2FalOVIbFK%2Fr%2BRyhTXYlf8MJZnX1wC%2FAaKd9veoydDo%2FKuo8Ab4oDvnciHNKgqHdxNwH%2FsjNTgVsgXBqh%2BwFKUq3uM3LboY4Lf3ucGcS0FmeKOYJxm2e9JGnlareg%2F%2BY6FQvBRRnBNwl%2FFE%2BUOanR2is0MupdWhNv9K0QHxkxiiAb%2BcpHWSoAPljw3lZdHkQs%2FEIaBgfr2aVPxz4c9vzTiX%2FDGvYorg0c1E4lQjIYZXK5N%2BI11TuxTkK7%2FytOHZ2R5z2C6FDWspLW96%2Fcu6YBtEmLdv20SUTBNnovRI2kbDnMMVBDmNzLWG51awRsLrmgG5j174fPfm0h77jSA1blTzuVe6pDZFP1szU3DuSNxxFO1l7s3IKwJSGIte%2FtV0ar8jw3SQS0lfbUVH1mOr2O%2Bf85Js6UBp4P1sdC%2BpkX8PNVNmcsgxGLepN1rsEhD0X5zuoLUabXDZ2hUYuqaFStc5fKL2KASKBKhyCtVrFhSuByWLoSFWIj5klYcfyoEy9yhVXJn7Xn%2BM1Zn6AnUs4CxEP70cVy0Rzfbk7FxQpL9mJRfuN1S%2FIY5Tz4LV4Lam%2BMdKCYKki0Rb%2BMqiNZtbphAmle2m%2B8bebjsvuOaFP52ZZhCoxPXBkSDjfMN3E28QGOqUBNuwalcyy2N%2F0vhlgRgaP63YC3jCLexqpKP1VrvhO4ZmAnryA9AxLe58HSES%2FZb1pXCYQBvkNfG%2FJaMzH67j7GUocIIVGJCg3IiGrTt3%2BKHQk8F%2B0cF0ZRgFtt5j1Gw%2Bd7dvrEAEfOFLFMMSt%2BbtNAzlAagPT2ivtO7lU3dTdfgQ0xjtz0bovKoJ0pbFHh6B71aJCJEq1jWfc%2FMJx9SzWw%2Furta7x&X-Amz-Signature=4b0ebd6b22962a40e94d523e96d111bb6df76568b00f0cb168a685c4ba35a66e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPTUUXFH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDplLlAGlQh%2FNl1JkeyW3XtZaehHxe3KMinL8n8VQt5IwIgD7bAgDIzki6wtbZtFZmhhBV8GFpeFWTNXgSyaCmlDBQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQD7oC6XUvY%2BSeyfSrcA3yjb%2FalOVIbFK%2Fr%2BRyhTXYlf8MJZnX1wC%2FAaKd9veoydDo%2FKuo8Ab4oDvnciHNKgqHdxNwH%2FsjNTgVsgXBqh%2BwFKUq3uM3LboY4Lf3ucGcS0FmeKOYJxm2e9JGnlareg%2F%2BY6FQvBRRnBNwl%2FFE%2BUOanR2is0MupdWhNv9K0QHxkxiiAb%2BcpHWSoAPljw3lZdHkQs%2FEIaBgfr2aVPxz4c9vzTiX%2FDGvYorg0c1E4lQjIYZXK5N%2BI11TuxTkK7%2FytOHZ2R5z2C6FDWspLW96%2Fcu6YBtEmLdv20SUTBNnovRI2kbDnMMVBDmNzLWG51awRsLrmgG5j174fPfm0h77jSA1blTzuVe6pDZFP1szU3DuSNxxFO1l7s3IKwJSGIte%2FtV0ar8jw3SQS0lfbUVH1mOr2O%2Bf85Js6UBp4P1sdC%2BpkX8PNVNmcsgxGLepN1rsEhD0X5zuoLUabXDZ2hUYuqaFStc5fKL2KASKBKhyCtVrFhSuByWLoSFWIj5klYcfyoEy9yhVXJn7Xn%2BM1Zn6AnUs4CxEP70cVy0Rzfbk7FxQpL9mJRfuN1S%2FIY5Tz4LV4Lam%2BMdKCYKki0Rb%2BMqiNZtbphAmle2m%2B8bebjsvuOaFP52ZZhCoxPXBkSDjfMN3E28QGOqUBNuwalcyy2N%2F0vhlgRgaP63YC3jCLexqpKP1VrvhO4ZmAnryA9AxLe58HSES%2FZb1pXCYQBvkNfG%2FJaMzH67j7GUocIIVGJCg3IiGrTt3%2BKHQk8F%2B0cF0ZRgFtt5j1Gw%2Bd7dvrEAEfOFLFMMSt%2BbtNAzlAagPT2ivtO7lU3dTdfgQ0xjtz0bovKoJ0pbFHh6B71aJCJEq1jWfc%2FMJx9SzWw%2Furta7x&X-Amz-Signature=de21c5cf9b7e8c07402d8d3667ba329aef4d8fff30136f3d9a2568e4616a097b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPTUUXFH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDplLlAGlQh%2FNl1JkeyW3XtZaehHxe3KMinL8n8VQt5IwIgD7bAgDIzki6wtbZtFZmhhBV8GFpeFWTNXgSyaCmlDBQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQD7oC6XUvY%2BSeyfSrcA3yjb%2FalOVIbFK%2Fr%2BRyhTXYlf8MJZnX1wC%2FAaKd9veoydDo%2FKuo8Ab4oDvnciHNKgqHdxNwH%2FsjNTgVsgXBqh%2BwFKUq3uM3LboY4Lf3ucGcS0FmeKOYJxm2e9JGnlareg%2F%2BY6FQvBRRnBNwl%2FFE%2BUOanR2is0MupdWhNv9K0QHxkxiiAb%2BcpHWSoAPljw3lZdHkQs%2FEIaBgfr2aVPxz4c9vzTiX%2FDGvYorg0c1E4lQjIYZXK5N%2BI11TuxTkK7%2FytOHZ2R5z2C6FDWspLW96%2Fcu6YBtEmLdv20SUTBNnovRI2kbDnMMVBDmNzLWG51awRsLrmgG5j174fPfm0h77jSA1blTzuVe6pDZFP1szU3DuSNxxFO1l7s3IKwJSGIte%2FtV0ar8jw3SQS0lfbUVH1mOr2O%2Bf85Js6UBp4P1sdC%2BpkX8PNVNmcsgxGLepN1rsEhD0X5zuoLUabXDZ2hUYuqaFStc5fKL2KASKBKhyCtVrFhSuByWLoSFWIj5klYcfyoEy9yhVXJn7Xn%2BM1Zn6AnUs4CxEP70cVy0Rzfbk7FxQpL9mJRfuN1S%2FIY5Tz4LV4Lam%2BMdKCYKki0Rb%2BMqiNZtbphAmle2m%2B8bebjsvuOaFP52ZZhCoxPXBkSDjfMN3E28QGOqUBNuwalcyy2N%2F0vhlgRgaP63YC3jCLexqpKP1VrvhO4ZmAnryA9AxLe58HSES%2FZb1pXCYQBvkNfG%2FJaMzH67j7GUocIIVGJCg3IiGrTt3%2BKHQk8F%2B0cF0ZRgFtt5j1Gw%2Bd7dvrEAEfOFLFMMSt%2BbtNAzlAagPT2ivtO7lU3dTdfgQ0xjtz0bovKoJ0pbFHh6B71aJCJEq1jWfc%2FMJx9SzWw%2Furta7x&X-Amz-Signature=16e142cc50b2d196e3df0d035d68575dd08f6ebdad7fad3cf10e40392b5a9cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPTUUXFH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDplLlAGlQh%2FNl1JkeyW3XtZaehHxe3KMinL8n8VQt5IwIgD7bAgDIzki6wtbZtFZmhhBV8GFpeFWTNXgSyaCmlDBQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQD7oC6XUvY%2BSeyfSrcA3yjb%2FalOVIbFK%2Fr%2BRyhTXYlf8MJZnX1wC%2FAaKd9veoydDo%2FKuo8Ab4oDvnciHNKgqHdxNwH%2FsjNTgVsgXBqh%2BwFKUq3uM3LboY4Lf3ucGcS0FmeKOYJxm2e9JGnlareg%2F%2BY6FQvBRRnBNwl%2FFE%2BUOanR2is0MupdWhNv9K0QHxkxiiAb%2BcpHWSoAPljw3lZdHkQs%2FEIaBgfr2aVPxz4c9vzTiX%2FDGvYorg0c1E4lQjIYZXK5N%2BI11TuxTkK7%2FytOHZ2R5z2C6FDWspLW96%2Fcu6YBtEmLdv20SUTBNnovRI2kbDnMMVBDmNzLWG51awRsLrmgG5j174fPfm0h77jSA1blTzuVe6pDZFP1szU3DuSNxxFO1l7s3IKwJSGIte%2FtV0ar8jw3SQS0lfbUVH1mOr2O%2Bf85Js6UBp4P1sdC%2BpkX8PNVNmcsgxGLepN1rsEhD0X5zuoLUabXDZ2hUYuqaFStc5fKL2KASKBKhyCtVrFhSuByWLoSFWIj5klYcfyoEy9yhVXJn7Xn%2BM1Zn6AnUs4CxEP70cVy0Rzfbk7FxQpL9mJRfuN1S%2FIY5Tz4LV4Lam%2BMdKCYKki0Rb%2BMqiNZtbphAmle2m%2B8bebjsvuOaFP52ZZhCoxPXBkSDjfMN3E28QGOqUBNuwalcyy2N%2F0vhlgRgaP63YC3jCLexqpKP1VrvhO4ZmAnryA9AxLe58HSES%2FZb1pXCYQBvkNfG%2FJaMzH67j7GUocIIVGJCg3IiGrTt3%2BKHQk8F%2B0cF0ZRgFtt5j1Gw%2Bd7dvrEAEfOFLFMMSt%2BbtNAzlAagPT2ivtO7lU3dTdfgQ0xjtz0bovKoJ0pbFHh6B71aJCJEq1jWfc%2FMJx9SzWw%2Furta7x&X-Amz-Signature=224068b4f470e24ca17ccb7c245708bd6b060250edfb0ce96544cb8bd5c3373e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPTUUXFH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDplLlAGlQh%2FNl1JkeyW3XtZaehHxe3KMinL8n8VQt5IwIgD7bAgDIzki6wtbZtFZmhhBV8GFpeFWTNXgSyaCmlDBQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQD7oC6XUvY%2BSeyfSrcA3yjb%2FalOVIbFK%2Fr%2BRyhTXYlf8MJZnX1wC%2FAaKd9veoydDo%2FKuo8Ab4oDvnciHNKgqHdxNwH%2FsjNTgVsgXBqh%2BwFKUq3uM3LboY4Lf3ucGcS0FmeKOYJxm2e9JGnlareg%2F%2BY6FQvBRRnBNwl%2FFE%2BUOanR2is0MupdWhNv9K0QHxkxiiAb%2BcpHWSoAPljw3lZdHkQs%2FEIaBgfr2aVPxz4c9vzTiX%2FDGvYorg0c1E4lQjIYZXK5N%2BI11TuxTkK7%2FytOHZ2R5z2C6FDWspLW96%2Fcu6YBtEmLdv20SUTBNnovRI2kbDnMMVBDmNzLWG51awRsLrmgG5j174fPfm0h77jSA1blTzuVe6pDZFP1szU3DuSNxxFO1l7s3IKwJSGIte%2FtV0ar8jw3SQS0lfbUVH1mOr2O%2Bf85Js6UBp4P1sdC%2BpkX8PNVNmcsgxGLepN1rsEhD0X5zuoLUabXDZ2hUYuqaFStc5fKL2KASKBKhyCtVrFhSuByWLoSFWIj5klYcfyoEy9yhVXJn7Xn%2BM1Zn6AnUs4CxEP70cVy0Rzfbk7FxQpL9mJRfuN1S%2FIY5Tz4LV4Lam%2BMdKCYKki0Rb%2BMqiNZtbphAmle2m%2B8bebjsvuOaFP52ZZhCoxPXBkSDjfMN3E28QGOqUBNuwalcyy2N%2F0vhlgRgaP63YC3jCLexqpKP1VrvhO4ZmAnryA9AxLe58HSES%2FZb1pXCYQBvkNfG%2FJaMzH67j7GUocIIVGJCg3IiGrTt3%2BKHQk8F%2B0cF0ZRgFtt5j1Gw%2Bd7dvrEAEfOFLFMMSt%2BbtNAzlAagPT2ivtO7lU3dTdfgQ0xjtz0bovKoJ0pbFHh6B71aJCJEq1jWfc%2FMJx9SzWw%2Furta7x&X-Amz-Signature=9503c2606b57b549442ee2dc38e12cd3904cba13be3fdc4a455a26979080a9d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPTUUXFH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDplLlAGlQh%2FNl1JkeyW3XtZaehHxe3KMinL8n8VQt5IwIgD7bAgDIzki6wtbZtFZmhhBV8GFpeFWTNXgSyaCmlDBQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQD7oC6XUvY%2BSeyfSrcA3yjb%2FalOVIbFK%2Fr%2BRyhTXYlf8MJZnX1wC%2FAaKd9veoydDo%2FKuo8Ab4oDvnciHNKgqHdxNwH%2FsjNTgVsgXBqh%2BwFKUq3uM3LboY4Lf3ucGcS0FmeKOYJxm2e9JGnlareg%2F%2BY6FQvBRRnBNwl%2FFE%2BUOanR2is0MupdWhNv9K0QHxkxiiAb%2BcpHWSoAPljw3lZdHkQs%2FEIaBgfr2aVPxz4c9vzTiX%2FDGvYorg0c1E4lQjIYZXK5N%2BI11TuxTkK7%2FytOHZ2R5z2C6FDWspLW96%2Fcu6YBtEmLdv20SUTBNnovRI2kbDnMMVBDmNzLWG51awRsLrmgG5j174fPfm0h77jSA1blTzuVe6pDZFP1szU3DuSNxxFO1l7s3IKwJSGIte%2FtV0ar8jw3SQS0lfbUVH1mOr2O%2Bf85Js6UBp4P1sdC%2BpkX8PNVNmcsgxGLepN1rsEhD0X5zuoLUabXDZ2hUYuqaFStc5fKL2KASKBKhyCtVrFhSuByWLoSFWIj5klYcfyoEy9yhVXJn7Xn%2BM1Zn6AnUs4CxEP70cVy0Rzfbk7FxQpL9mJRfuN1S%2FIY5Tz4LV4Lam%2BMdKCYKki0Rb%2BMqiNZtbphAmle2m%2B8bebjsvuOaFP52ZZhCoxPXBkSDjfMN3E28QGOqUBNuwalcyy2N%2F0vhlgRgaP63YC3jCLexqpKP1VrvhO4ZmAnryA9AxLe58HSES%2FZb1pXCYQBvkNfG%2FJaMzH67j7GUocIIVGJCg3IiGrTt3%2BKHQk8F%2B0cF0ZRgFtt5j1Gw%2Bd7dvrEAEfOFLFMMSt%2BbtNAzlAagPT2ivtO7lU3dTdfgQ0xjtz0bovKoJ0pbFHh6B71aJCJEq1jWfc%2FMJx9SzWw%2Furta7x&X-Amz-Signature=f41ba8b74f01822d82ec613535bdf551a0a59b93e51a759c0a73a119cf9a4960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPTUUXFH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDplLlAGlQh%2FNl1JkeyW3XtZaehHxe3KMinL8n8VQt5IwIgD7bAgDIzki6wtbZtFZmhhBV8GFpeFWTNXgSyaCmlDBQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQD7oC6XUvY%2BSeyfSrcA3yjb%2FalOVIbFK%2Fr%2BRyhTXYlf8MJZnX1wC%2FAaKd9veoydDo%2FKuo8Ab4oDvnciHNKgqHdxNwH%2FsjNTgVsgXBqh%2BwFKUq3uM3LboY4Lf3ucGcS0FmeKOYJxm2e9JGnlareg%2F%2BY6FQvBRRnBNwl%2FFE%2BUOanR2is0MupdWhNv9K0QHxkxiiAb%2BcpHWSoAPljw3lZdHkQs%2FEIaBgfr2aVPxz4c9vzTiX%2FDGvYorg0c1E4lQjIYZXK5N%2BI11TuxTkK7%2FytOHZ2R5z2C6FDWspLW96%2Fcu6YBtEmLdv20SUTBNnovRI2kbDnMMVBDmNzLWG51awRsLrmgG5j174fPfm0h77jSA1blTzuVe6pDZFP1szU3DuSNxxFO1l7s3IKwJSGIte%2FtV0ar8jw3SQS0lfbUVH1mOr2O%2Bf85Js6UBp4P1sdC%2BpkX8PNVNmcsgxGLepN1rsEhD0X5zuoLUabXDZ2hUYuqaFStc5fKL2KASKBKhyCtVrFhSuByWLoSFWIj5klYcfyoEy9yhVXJn7Xn%2BM1Zn6AnUs4CxEP70cVy0Rzfbk7FxQpL9mJRfuN1S%2FIY5Tz4LV4Lam%2BMdKCYKki0Rb%2BMqiNZtbphAmle2m%2B8bebjsvuOaFP52ZZhCoxPXBkSDjfMN3E28QGOqUBNuwalcyy2N%2F0vhlgRgaP63YC3jCLexqpKP1VrvhO4ZmAnryA9AxLe58HSES%2FZb1pXCYQBvkNfG%2FJaMzH67j7GUocIIVGJCg3IiGrTt3%2BKHQk8F%2B0cF0ZRgFtt5j1Gw%2Bd7dvrEAEfOFLFMMSt%2BbtNAzlAagPT2ivtO7lU3dTdfgQ0xjtz0bovKoJ0pbFHh6B71aJCJEq1jWfc%2FMJx9SzWw%2Furta7x&X-Amz-Signature=263236252d8a7fb888b04150ab9618207beea0f2e7a4d54eac51302ec4af9098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPTUUXFH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDplLlAGlQh%2FNl1JkeyW3XtZaehHxe3KMinL8n8VQt5IwIgD7bAgDIzki6wtbZtFZmhhBV8GFpeFWTNXgSyaCmlDBQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQD7oC6XUvY%2BSeyfSrcA3yjb%2FalOVIbFK%2Fr%2BRyhTXYlf8MJZnX1wC%2FAaKd9veoydDo%2FKuo8Ab4oDvnciHNKgqHdxNwH%2FsjNTgVsgXBqh%2BwFKUq3uM3LboY4Lf3ucGcS0FmeKOYJxm2e9JGnlareg%2F%2BY6FQvBRRnBNwl%2FFE%2BUOanR2is0MupdWhNv9K0QHxkxiiAb%2BcpHWSoAPljw3lZdHkQs%2FEIaBgfr2aVPxz4c9vzTiX%2FDGvYorg0c1E4lQjIYZXK5N%2BI11TuxTkK7%2FytOHZ2R5z2C6FDWspLW96%2Fcu6YBtEmLdv20SUTBNnovRI2kbDnMMVBDmNzLWG51awRsLrmgG5j174fPfm0h77jSA1blTzuVe6pDZFP1szU3DuSNxxFO1l7s3IKwJSGIte%2FtV0ar8jw3SQS0lfbUVH1mOr2O%2Bf85Js6UBp4P1sdC%2BpkX8PNVNmcsgxGLepN1rsEhD0X5zuoLUabXDZ2hUYuqaFStc5fKL2KASKBKhyCtVrFhSuByWLoSFWIj5klYcfyoEy9yhVXJn7Xn%2BM1Zn6AnUs4CxEP70cVy0Rzfbk7FxQpL9mJRfuN1S%2FIY5Tz4LV4Lam%2BMdKCYKki0Rb%2BMqiNZtbphAmle2m%2B8bebjsvuOaFP52ZZhCoxPXBkSDjfMN3E28QGOqUBNuwalcyy2N%2F0vhlgRgaP63YC3jCLexqpKP1VrvhO4ZmAnryA9AxLe58HSES%2FZb1pXCYQBvkNfG%2FJaMzH67j7GUocIIVGJCg3IiGrTt3%2BKHQk8F%2B0cF0ZRgFtt5j1Gw%2Bd7dvrEAEfOFLFMMSt%2BbtNAzlAagPT2ivtO7lU3dTdfgQ0xjtz0bovKoJ0pbFHh6B71aJCJEq1jWfc%2FMJx9SzWw%2Furta7x&X-Amz-Signature=aa74e3cbc2d9b9339d4c4c4fb989209d3d2e9ab2ae7e54ecc33509e8ebbde874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPTUUXFH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDplLlAGlQh%2FNl1JkeyW3XtZaehHxe3KMinL8n8VQt5IwIgD7bAgDIzki6wtbZtFZmhhBV8GFpeFWTNXgSyaCmlDBQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQD7oC6XUvY%2BSeyfSrcA3yjb%2FalOVIbFK%2Fr%2BRyhTXYlf8MJZnX1wC%2FAaKd9veoydDo%2FKuo8Ab4oDvnciHNKgqHdxNwH%2FsjNTgVsgXBqh%2BwFKUq3uM3LboY4Lf3ucGcS0FmeKOYJxm2e9JGnlareg%2F%2BY6FQvBRRnBNwl%2FFE%2BUOanR2is0MupdWhNv9K0QHxkxiiAb%2BcpHWSoAPljw3lZdHkQs%2FEIaBgfr2aVPxz4c9vzTiX%2FDGvYorg0c1E4lQjIYZXK5N%2BI11TuxTkK7%2FytOHZ2R5z2C6FDWspLW96%2Fcu6YBtEmLdv20SUTBNnovRI2kbDnMMVBDmNzLWG51awRsLrmgG5j174fPfm0h77jSA1blTzuVe6pDZFP1szU3DuSNxxFO1l7s3IKwJSGIte%2FtV0ar8jw3SQS0lfbUVH1mOr2O%2Bf85Js6UBp4P1sdC%2BpkX8PNVNmcsgxGLepN1rsEhD0X5zuoLUabXDZ2hUYuqaFStc5fKL2KASKBKhyCtVrFhSuByWLoSFWIj5klYcfyoEy9yhVXJn7Xn%2BM1Zn6AnUs4CxEP70cVy0Rzfbk7FxQpL9mJRfuN1S%2FIY5Tz4LV4Lam%2BMdKCYKki0Rb%2BMqiNZtbphAmle2m%2B8bebjsvuOaFP52ZZhCoxPXBkSDjfMN3E28QGOqUBNuwalcyy2N%2F0vhlgRgaP63YC3jCLexqpKP1VrvhO4ZmAnryA9AxLe58HSES%2FZb1pXCYQBvkNfG%2FJaMzH67j7GUocIIVGJCg3IiGrTt3%2BKHQk8F%2B0cF0ZRgFtt5j1Gw%2Bd7dvrEAEfOFLFMMSt%2BbtNAzlAagPT2ivtO7lU3dTdfgQ0xjtz0bovKoJ0pbFHh6B71aJCJEq1jWfc%2FMJx9SzWw%2Furta7x&X-Amz-Signature=8b9a0ff4335d2c76280438b85ae9facf4bf979148fbd864ef06f086535c81b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPTUUXFH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDplLlAGlQh%2FNl1JkeyW3XtZaehHxe3KMinL8n8VQt5IwIgD7bAgDIzki6wtbZtFZmhhBV8GFpeFWTNXgSyaCmlDBQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQD7oC6XUvY%2BSeyfSrcA3yjb%2FalOVIbFK%2Fr%2BRyhTXYlf8MJZnX1wC%2FAaKd9veoydDo%2FKuo8Ab4oDvnciHNKgqHdxNwH%2FsjNTgVsgXBqh%2BwFKUq3uM3LboY4Lf3ucGcS0FmeKOYJxm2e9JGnlareg%2F%2BY6FQvBRRnBNwl%2FFE%2BUOanR2is0MupdWhNv9K0QHxkxiiAb%2BcpHWSoAPljw3lZdHkQs%2FEIaBgfr2aVPxz4c9vzTiX%2FDGvYorg0c1E4lQjIYZXK5N%2BI11TuxTkK7%2FytOHZ2R5z2C6FDWspLW96%2Fcu6YBtEmLdv20SUTBNnovRI2kbDnMMVBDmNzLWG51awRsLrmgG5j174fPfm0h77jSA1blTzuVe6pDZFP1szU3DuSNxxFO1l7s3IKwJSGIte%2FtV0ar8jw3SQS0lfbUVH1mOr2O%2Bf85Js6UBp4P1sdC%2BpkX8PNVNmcsgxGLepN1rsEhD0X5zuoLUabXDZ2hUYuqaFStc5fKL2KASKBKhyCtVrFhSuByWLoSFWIj5klYcfyoEy9yhVXJn7Xn%2BM1Zn6AnUs4CxEP70cVy0Rzfbk7FxQpL9mJRfuN1S%2FIY5Tz4LV4Lam%2BMdKCYKki0Rb%2BMqiNZtbphAmle2m%2B8bebjsvuOaFP52ZZhCoxPXBkSDjfMN3E28QGOqUBNuwalcyy2N%2F0vhlgRgaP63YC3jCLexqpKP1VrvhO4ZmAnryA9AxLe58HSES%2FZb1pXCYQBvkNfG%2FJaMzH67j7GUocIIVGJCg3IiGrTt3%2BKHQk8F%2B0cF0ZRgFtt5j1Gw%2Bd7dvrEAEfOFLFMMSt%2BbtNAzlAagPT2ivtO7lU3dTdfgQ0xjtz0bovKoJ0pbFHh6B71aJCJEq1jWfc%2FMJx9SzWw%2Furta7x&X-Amz-Signature=2cae4de9c49661a65f87627ada4d1d34f95556e70924afcc84b7d494c322b17a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPTUUXFH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDplLlAGlQh%2FNl1JkeyW3XtZaehHxe3KMinL8n8VQt5IwIgD7bAgDIzki6wtbZtFZmhhBV8GFpeFWTNXgSyaCmlDBQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQD7oC6XUvY%2BSeyfSrcA3yjb%2FalOVIbFK%2Fr%2BRyhTXYlf8MJZnX1wC%2FAaKd9veoydDo%2FKuo8Ab4oDvnciHNKgqHdxNwH%2FsjNTgVsgXBqh%2BwFKUq3uM3LboY4Lf3ucGcS0FmeKOYJxm2e9JGnlareg%2F%2BY6FQvBRRnBNwl%2FFE%2BUOanR2is0MupdWhNv9K0QHxkxiiAb%2BcpHWSoAPljw3lZdHkQs%2FEIaBgfr2aVPxz4c9vzTiX%2FDGvYorg0c1E4lQjIYZXK5N%2BI11TuxTkK7%2FytOHZ2R5z2C6FDWspLW96%2Fcu6YBtEmLdv20SUTBNnovRI2kbDnMMVBDmNzLWG51awRsLrmgG5j174fPfm0h77jSA1blTzuVe6pDZFP1szU3DuSNxxFO1l7s3IKwJSGIte%2FtV0ar8jw3SQS0lfbUVH1mOr2O%2Bf85Js6UBp4P1sdC%2BpkX8PNVNmcsgxGLepN1rsEhD0X5zuoLUabXDZ2hUYuqaFStc5fKL2KASKBKhyCtVrFhSuByWLoSFWIj5klYcfyoEy9yhVXJn7Xn%2BM1Zn6AnUs4CxEP70cVy0Rzfbk7FxQpL9mJRfuN1S%2FIY5Tz4LV4Lam%2BMdKCYKki0Rb%2BMqiNZtbphAmle2m%2B8bebjsvuOaFP52ZZhCoxPXBkSDjfMN3E28QGOqUBNuwalcyy2N%2F0vhlgRgaP63YC3jCLexqpKP1VrvhO4ZmAnryA9AxLe58HSES%2FZb1pXCYQBvkNfG%2FJaMzH67j7GUocIIVGJCg3IiGrTt3%2BKHQk8F%2B0cF0ZRgFtt5j1Gw%2Bd7dvrEAEfOFLFMMSt%2BbtNAzlAagPT2ivtO7lU3dTdfgQ0xjtz0bovKoJ0pbFHh6B71aJCJEq1jWfc%2FMJx9SzWw%2Furta7x&X-Amz-Signature=72cf731b0482949a5bc64aea5cfd87cff08aa8b362416568a937e15ecacd4dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPTUUXFH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDplLlAGlQh%2FNl1JkeyW3XtZaehHxe3KMinL8n8VQt5IwIgD7bAgDIzki6wtbZtFZmhhBV8GFpeFWTNXgSyaCmlDBQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQD7oC6XUvY%2BSeyfSrcA3yjb%2FalOVIbFK%2Fr%2BRyhTXYlf8MJZnX1wC%2FAaKd9veoydDo%2FKuo8Ab4oDvnciHNKgqHdxNwH%2FsjNTgVsgXBqh%2BwFKUq3uM3LboY4Lf3ucGcS0FmeKOYJxm2e9JGnlareg%2F%2BY6FQvBRRnBNwl%2FFE%2BUOanR2is0MupdWhNv9K0QHxkxiiAb%2BcpHWSoAPljw3lZdHkQs%2FEIaBgfr2aVPxz4c9vzTiX%2FDGvYorg0c1E4lQjIYZXK5N%2BI11TuxTkK7%2FytOHZ2R5z2C6FDWspLW96%2Fcu6YBtEmLdv20SUTBNnovRI2kbDnMMVBDmNzLWG51awRsLrmgG5j174fPfm0h77jSA1blTzuVe6pDZFP1szU3DuSNxxFO1l7s3IKwJSGIte%2FtV0ar8jw3SQS0lfbUVH1mOr2O%2Bf85Js6UBp4P1sdC%2BpkX8PNVNmcsgxGLepN1rsEhD0X5zuoLUabXDZ2hUYuqaFStc5fKL2KASKBKhyCtVrFhSuByWLoSFWIj5klYcfyoEy9yhVXJn7Xn%2BM1Zn6AnUs4CxEP70cVy0Rzfbk7FxQpL9mJRfuN1S%2FIY5Tz4LV4Lam%2BMdKCYKki0Rb%2BMqiNZtbphAmle2m%2B8bebjsvuOaFP52ZZhCoxPXBkSDjfMN3E28QGOqUBNuwalcyy2N%2F0vhlgRgaP63YC3jCLexqpKP1VrvhO4ZmAnryA9AxLe58HSES%2FZb1pXCYQBvkNfG%2FJaMzH67j7GUocIIVGJCg3IiGrTt3%2BKHQk8F%2B0cF0ZRgFtt5j1Gw%2Bd7dvrEAEfOFLFMMSt%2BbtNAzlAagPT2ivtO7lU3dTdfgQ0xjtz0bovKoJ0pbFHh6B71aJCJEq1jWfc%2FMJx9SzWw%2Furta7x&X-Amz-Signature=8d70ba5eea4d0ff7dc20690721014f7491f6d1987ffd9c75397f8b3c0c720990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPTUUXFH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDplLlAGlQh%2FNl1JkeyW3XtZaehHxe3KMinL8n8VQt5IwIgD7bAgDIzki6wtbZtFZmhhBV8GFpeFWTNXgSyaCmlDBQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQD7oC6XUvY%2BSeyfSrcA3yjb%2FalOVIbFK%2Fr%2BRyhTXYlf8MJZnX1wC%2FAaKd9veoydDo%2FKuo8Ab4oDvnciHNKgqHdxNwH%2FsjNTgVsgXBqh%2BwFKUq3uM3LboY4Lf3ucGcS0FmeKOYJxm2e9JGnlareg%2F%2BY6FQvBRRnBNwl%2FFE%2BUOanR2is0MupdWhNv9K0QHxkxiiAb%2BcpHWSoAPljw3lZdHkQs%2FEIaBgfr2aVPxz4c9vzTiX%2FDGvYorg0c1E4lQjIYZXK5N%2BI11TuxTkK7%2FytOHZ2R5z2C6FDWspLW96%2Fcu6YBtEmLdv20SUTBNnovRI2kbDnMMVBDmNzLWG51awRsLrmgG5j174fPfm0h77jSA1blTzuVe6pDZFP1szU3DuSNxxFO1l7s3IKwJSGIte%2FtV0ar8jw3SQS0lfbUVH1mOr2O%2Bf85Js6UBp4P1sdC%2BpkX8PNVNmcsgxGLepN1rsEhD0X5zuoLUabXDZ2hUYuqaFStc5fKL2KASKBKhyCtVrFhSuByWLoSFWIj5klYcfyoEy9yhVXJn7Xn%2BM1Zn6AnUs4CxEP70cVy0Rzfbk7FxQpL9mJRfuN1S%2FIY5Tz4LV4Lam%2BMdKCYKki0Rb%2BMqiNZtbphAmle2m%2B8bebjsvuOaFP52ZZhCoxPXBkSDjfMN3E28QGOqUBNuwalcyy2N%2F0vhlgRgaP63YC3jCLexqpKP1VrvhO4ZmAnryA9AxLe58HSES%2FZb1pXCYQBvkNfG%2FJaMzH67j7GUocIIVGJCg3IiGrTt3%2BKHQk8F%2B0cF0ZRgFtt5j1Gw%2Bd7dvrEAEfOFLFMMSt%2BbtNAzlAagPT2ivtO7lU3dTdfgQ0xjtz0bovKoJ0pbFHh6B71aJCJEq1jWfc%2FMJx9SzWw%2Furta7x&X-Amz-Signature=1827d8f7fa10ac30545594b7846f8e6187c57635c529db417d8c6afc552d2ad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
