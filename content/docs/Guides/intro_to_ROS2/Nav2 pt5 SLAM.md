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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZRPDSL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCiJoGUNRuQO%2FQkvSuVvFEtIcLGgIM8Flth%2FBZilCHDQwIgMuuPYzrJLLDi%2Bzs7JLrV1hmXXA9r4i8LUjcvdzQCJOQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5gg2%2BLyGxPzmy1ByrcA8BqFut6q%2BsaHCN0DSr5K%2Fa59wkayANbmdCN4emHWCGSAmijk7PWP02tj56rAeNBgkELerYV3pqtFbEiErePBkntJCdRIoCiZ5ENcimzjZi3XuUkogG6MVn%2BnDEk77QpiTW2Ioepj%2Bi2am5chDnFIiRnf6t9tMJQ0VFUoVVQVU8oIp89wFyC702UUEZ7%2BVKTcHnStFHDuYUNPx47u4GamI%2FTwVQOHJG3dC%2FRsHEpbmfqE%2BTpp0vldjK3mj%2FHTHa%2FwKzWu5sFVX%2BAbw3rTZgl7xVJ2a47SzcP0Qtls%2BfPamSOWyVZsgMD%2BL55Y%2FYEnf6pgyiDol%2BkxgmyKvbNoOarlaw3zbdAfvgwqlhvB0APXTyxaVC5utEhWXGrom4J6G1EoTRxktxSiASlkqVZBwwU6XDWKyhbcZPp6DJ87BTl4q%2B%2BmURJZObPUlSb0UTDLOISQ%2Ff1HejbA8UUalCxOghiOo5cR0XJMOS9oUHk1E0tftImugXxdTaZ6ZXdCTIcmolYr3OjydQi%2Fj%2F6OnAk5HZVvlD0z%2F8iODZKurQb0jk2naNFt6n0CqvAWSakrMdKsI199LlgBTeScQ4mNJTzGOydXM6cOyS8qB%2FP%2Bp1WFMTamXeu4Urhya3wbMY6ctE%2BMKLt1sQGOqUB%2B%2BIIDl86CCTGQzcp2dSheVNe6%2Fn6eWCvYwQc%2FY96qHvVMtTzjYLDE7A10G9SLGOHF%2BDvgH2GPPKnEtmS4ChSDRC8aoG39zl50l2tfMQafoWIiQeelDjaI7TPBx3QTznJbBwP4ZF3Tj7MuIuMHogFWhJ6ECKkTrRFMt%2Bu4RqaAN4q%2BrE4DteZL3G11xGMwUgozh21V0dDpTAnQR%2FPrsRXV29gP%2Fp4&X-Amz-Signature=20defda3506188581c3c08ce55b01f9292feecd2406fc16a1acbe454b6d2b693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZRPDSL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCiJoGUNRuQO%2FQkvSuVvFEtIcLGgIM8Flth%2FBZilCHDQwIgMuuPYzrJLLDi%2Bzs7JLrV1hmXXA9r4i8LUjcvdzQCJOQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5gg2%2BLyGxPzmy1ByrcA8BqFut6q%2BsaHCN0DSr5K%2Fa59wkayANbmdCN4emHWCGSAmijk7PWP02tj56rAeNBgkELerYV3pqtFbEiErePBkntJCdRIoCiZ5ENcimzjZi3XuUkogG6MVn%2BnDEk77QpiTW2Ioepj%2Bi2am5chDnFIiRnf6t9tMJQ0VFUoVVQVU8oIp89wFyC702UUEZ7%2BVKTcHnStFHDuYUNPx47u4GamI%2FTwVQOHJG3dC%2FRsHEpbmfqE%2BTpp0vldjK3mj%2FHTHa%2FwKzWu5sFVX%2BAbw3rTZgl7xVJ2a47SzcP0Qtls%2BfPamSOWyVZsgMD%2BL55Y%2FYEnf6pgyiDol%2BkxgmyKvbNoOarlaw3zbdAfvgwqlhvB0APXTyxaVC5utEhWXGrom4J6G1EoTRxktxSiASlkqVZBwwU6XDWKyhbcZPp6DJ87BTl4q%2B%2BmURJZObPUlSb0UTDLOISQ%2Ff1HejbA8UUalCxOghiOo5cR0XJMOS9oUHk1E0tftImugXxdTaZ6ZXdCTIcmolYr3OjydQi%2Fj%2F6OnAk5HZVvlD0z%2F8iODZKurQb0jk2naNFt6n0CqvAWSakrMdKsI199LlgBTeScQ4mNJTzGOydXM6cOyS8qB%2FP%2Bp1WFMTamXeu4Urhya3wbMY6ctE%2BMKLt1sQGOqUB%2B%2BIIDl86CCTGQzcp2dSheVNe6%2Fn6eWCvYwQc%2FY96qHvVMtTzjYLDE7A10G9SLGOHF%2BDvgH2GPPKnEtmS4ChSDRC8aoG39zl50l2tfMQafoWIiQeelDjaI7TPBx3QTznJbBwP4ZF3Tj7MuIuMHogFWhJ6ECKkTrRFMt%2Bu4RqaAN4q%2BrE4DteZL3G11xGMwUgozh21V0dDpTAnQR%2FPrsRXV29gP%2Fp4&X-Amz-Signature=8e300f891bac1b2345232bce23bb917ff38cd867abbaf1dba218ccfb7e597345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZRPDSL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCiJoGUNRuQO%2FQkvSuVvFEtIcLGgIM8Flth%2FBZilCHDQwIgMuuPYzrJLLDi%2Bzs7JLrV1hmXXA9r4i8LUjcvdzQCJOQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5gg2%2BLyGxPzmy1ByrcA8BqFut6q%2BsaHCN0DSr5K%2Fa59wkayANbmdCN4emHWCGSAmijk7PWP02tj56rAeNBgkELerYV3pqtFbEiErePBkntJCdRIoCiZ5ENcimzjZi3XuUkogG6MVn%2BnDEk77QpiTW2Ioepj%2Bi2am5chDnFIiRnf6t9tMJQ0VFUoVVQVU8oIp89wFyC702UUEZ7%2BVKTcHnStFHDuYUNPx47u4GamI%2FTwVQOHJG3dC%2FRsHEpbmfqE%2BTpp0vldjK3mj%2FHTHa%2FwKzWu5sFVX%2BAbw3rTZgl7xVJ2a47SzcP0Qtls%2BfPamSOWyVZsgMD%2BL55Y%2FYEnf6pgyiDol%2BkxgmyKvbNoOarlaw3zbdAfvgwqlhvB0APXTyxaVC5utEhWXGrom4J6G1EoTRxktxSiASlkqVZBwwU6XDWKyhbcZPp6DJ87BTl4q%2B%2BmURJZObPUlSb0UTDLOISQ%2Ff1HejbA8UUalCxOghiOo5cR0XJMOS9oUHk1E0tftImugXxdTaZ6ZXdCTIcmolYr3OjydQi%2Fj%2F6OnAk5HZVvlD0z%2F8iODZKurQb0jk2naNFt6n0CqvAWSakrMdKsI199LlgBTeScQ4mNJTzGOydXM6cOyS8qB%2FP%2Bp1WFMTamXeu4Urhya3wbMY6ctE%2BMKLt1sQGOqUB%2B%2BIIDl86CCTGQzcp2dSheVNe6%2Fn6eWCvYwQc%2FY96qHvVMtTzjYLDE7A10G9SLGOHF%2BDvgH2GPPKnEtmS4ChSDRC8aoG39zl50l2tfMQafoWIiQeelDjaI7TPBx3QTznJbBwP4ZF3Tj7MuIuMHogFWhJ6ECKkTrRFMt%2Bu4RqaAN4q%2BrE4DteZL3G11xGMwUgozh21V0dDpTAnQR%2FPrsRXV29gP%2Fp4&X-Amz-Signature=a2dda5ac40eff2f69428aa161ffc3c9dc4c4835007b75c5d6ccbb035cf9c28e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZRPDSL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCiJoGUNRuQO%2FQkvSuVvFEtIcLGgIM8Flth%2FBZilCHDQwIgMuuPYzrJLLDi%2Bzs7JLrV1hmXXA9r4i8LUjcvdzQCJOQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5gg2%2BLyGxPzmy1ByrcA8BqFut6q%2BsaHCN0DSr5K%2Fa59wkayANbmdCN4emHWCGSAmijk7PWP02tj56rAeNBgkELerYV3pqtFbEiErePBkntJCdRIoCiZ5ENcimzjZi3XuUkogG6MVn%2BnDEk77QpiTW2Ioepj%2Bi2am5chDnFIiRnf6t9tMJQ0VFUoVVQVU8oIp89wFyC702UUEZ7%2BVKTcHnStFHDuYUNPx47u4GamI%2FTwVQOHJG3dC%2FRsHEpbmfqE%2BTpp0vldjK3mj%2FHTHa%2FwKzWu5sFVX%2BAbw3rTZgl7xVJ2a47SzcP0Qtls%2BfPamSOWyVZsgMD%2BL55Y%2FYEnf6pgyiDol%2BkxgmyKvbNoOarlaw3zbdAfvgwqlhvB0APXTyxaVC5utEhWXGrom4J6G1EoTRxktxSiASlkqVZBwwU6XDWKyhbcZPp6DJ87BTl4q%2B%2BmURJZObPUlSb0UTDLOISQ%2Ff1HejbA8UUalCxOghiOo5cR0XJMOS9oUHk1E0tftImugXxdTaZ6ZXdCTIcmolYr3OjydQi%2Fj%2F6OnAk5HZVvlD0z%2F8iODZKurQb0jk2naNFt6n0CqvAWSakrMdKsI199LlgBTeScQ4mNJTzGOydXM6cOyS8qB%2FP%2Bp1WFMTamXeu4Urhya3wbMY6ctE%2BMKLt1sQGOqUB%2B%2BIIDl86CCTGQzcp2dSheVNe6%2Fn6eWCvYwQc%2FY96qHvVMtTzjYLDE7A10G9SLGOHF%2BDvgH2GPPKnEtmS4ChSDRC8aoG39zl50l2tfMQafoWIiQeelDjaI7TPBx3QTznJbBwP4ZF3Tj7MuIuMHogFWhJ6ECKkTrRFMt%2Bu4RqaAN4q%2BrE4DteZL3G11xGMwUgozh21V0dDpTAnQR%2FPrsRXV29gP%2Fp4&X-Amz-Signature=ceb2f5a1782c6d89eb65177556b6dc237bd3ea10ff5eaae01a0c1f21cc5e2bc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZRPDSL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCiJoGUNRuQO%2FQkvSuVvFEtIcLGgIM8Flth%2FBZilCHDQwIgMuuPYzrJLLDi%2Bzs7JLrV1hmXXA9r4i8LUjcvdzQCJOQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5gg2%2BLyGxPzmy1ByrcA8BqFut6q%2BsaHCN0DSr5K%2Fa59wkayANbmdCN4emHWCGSAmijk7PWP02tj56rAeNBgkELerYV3pqtFbEiErePBkntJCdRIoCiZ5ENcimzjZi3XuUkogG6MVn%2BnDEk77QpiTW2Ioepj%2Bi2am5chDnFIiRnf6t9tMJQ0VFUoVVQVU8oIp89wFyC702UUEZ7%2BVKTcHnStFHDuYUNPx47u4GamI%2FTwVQOHJG3dC%2FRsHEpbmfqE%2BTpp0vldjK3mj%2FHTHa%2FwKzWu5sFVX%2BAbw3rTZgl7xVJ2a47SzcP0Qtls%2BfPamSOWyVZsgMD%2BL55Y%2FYEnf6pgyiDol%2BkxgmyKvbNoOarlaw3zbdAfvgwqlhvB0APXTyxaVC5utEhWXGrom4J6G1EoTRxktxSiASlkqVZBwwU6XDWKyhbcZPp6DJ87BTl4q%2B%2BmURJZObPUlSb0UTDLOISQ%2Ff1HejbA8UUalCxOghiOo5cR0XJMOS9oUHk1E0tftImugXxdTaZ6ZXdCTIcmolYr3OjydQi%2Fj%2F6OnAk5HZVvlD0z%2F8iODZKurQb0jk2naNFt6n0CqvAWSakrMdKsI199LlgBTeScQ4mNJTzGOydXM6cOyS8qB%2FP%2Bp1WFMTamXeu4Urhya3wbMY6ctE%2BMKLt1sQGOqUB%2B%2BIIDl86CCTGQzcp2dSheVNe6%2Fn6eWCvYwQc%2FY96qHvVMtTzjYLDE7A10G9SLGOHF%2BDvgH2GPPKnEtmS4ChSDRC8aoG39zl50l2tfMQafoWIiQeelDjaI7TPBx3QTznJbBwP4ZF3Tj7MuIuMHogFWhJ6ECKkTrRFMt%2Bu4RqaAN4q%2BrE4DteZL3G11xGMwUgozh21V0dDpTAnQR%2FPrsRXV29gP%2Fp4&X-Amz-Signature=c193f24277874b2c74048d588f9984a3752c0a0504a3e7699b9e80e66e235326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZRPDSL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCiJoGUNRuQO%2FQkvSuVvFEtIcLGgIM8Flth%2FBZilCHDQwIgMuuPYzrJLLDi%2Bzs7JLrV1hmXXA9r4i8LUjcvdzQCJOQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5gg2%2BLyGxPzmy1ByrcA8BqFut6q%2BsaHCN0DSr5K%2Fa59wkayANbmdCN4emHWCGSAmijk7PWP02tj56rAeNBgkELerYV3pqtFbEiErePBkntJCdRIoCiZ5ENcimzjZi3XuUkogG6MVn%2BnDEk77QpiTW2Ioepj%2Bi2am5chDnFIiRnf6t9tMJQ0VFUoVVQVU8oIp89wFyC702UUEZ7%2BVKTcHnStFHDuYUNPx47u4GamI%2FTwVQOHJG3dC%2FRsHEpbmfqE%2BTpp0vldjK3mj%2FHTHa%2FwKzWu5sFVX%2BAbw3rTZgl7xVJ2a47SzcP0Qtls%2BfPamSOWyVZsgMD%2BL55Y%2FYEnf6pgyiDol%2BkxgmyKvbNoOarlaw3zbdAfvgwqlhvB0APXTyxaVC5utEhWXGrom4J6G1EoTRxktxSiASlkqVZBwwU6XDWKyhbcZPp6DJ87BTl4q%2B%2BmURJZObPUlSb0UTDLOISQ%2Ff1HejbA8UUalCxOghiOo5cR0XJMOS9oUHk1E0tftImugXxdTaZ6ZXdCTIcmolYr3OjydQi%2Fj%2F6OnAk5HZVvlD0z%2F8iODZKurQb0jk2naNFt6n0CqvAWSakrMdKsI199LlgBTeScQ4mNJTzGOydXM6cOyS8qB%2FP%2Bp1WFMTamXeu4Urhya3wbMY6ctE%2BMKLt1sQGOqUB%2B%2BIIDl86CCTGQzcp2dSheVNe6%2Fn6eWCvYwQc%2FY96qHvVMtTzjYLDE7A10G9SLGOHF%2BDvgH2GPPKnEtmS4ChSDRC8aoG39zl50l2tfMQafoWIiQeelDjaI7TPBx3QTznJbBwP4ZF3Tj7MuIuMHogFWhJ6ECKkTrRFMt%2Bu4RqaAN4q%2BrE4DteZL3G11xGMwUgozh21V0dDpTAnQR%2FPrsRXV29gP%2Fp4&X-Amz-Signature=f1c9ab358603b208cd9de90f62155fe02631cf2d5bf793eeb3cb67fea362bbf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZRPDSL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCiJoGUNRuQO%2FQkvSuVvFEtIcLGgIM8Flth%2FBZilCHDQwIgMuuPYzrJLLDi%2Bzs7JLrV1hmXXA9r4i8LUjcvdzQCJOQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5gg2%2BLyGxPzmy1ByrcA8BqFut6q%2BsaHCN0DSr5K%2Fa59wkayANbmdCN4emHWCGSAmijk7PWP02tj56rAeNBgkELerYV3pqtFbEiErePBkntJCdRIoCiZ5ENcimzjZi3XuUkogG6MVn%2BnDEk77QpiTW2Ioepj%2Bi2am5chDnFIiRnf6t9tMJQ0VFUoVVQVU8oIp89wFyC702UUEZ7%2BVKTcHnStFHDuYUNPx47u4GamI%2FTwVQOHJG3dC%2FRsHEpbmfqE%2BTpp0vldjK3mj%2FHTHa%2FwKzWu5sFVX%2BAbw3rTZgl7xVJ2a47SzcP0Qtls%2BfPamSOWyVZsgMD%2BL55Y%2FYEnf6pgyiDol%2BkxgmyKvbNoOarlaw3zbdAfvgwqlhvB0APXTyxaVC5utEhWXGrom4J6G1EoTRxktxSiASlkqVZBwwU6XDWKyhbcZPp6DJ87BTl4q%2B%2BmURJZObPUlSb0UTDLOISQ%2Ff1HejbA8UUalCxOghiOo5cR0XJMOS9oUHk1E0tftImugXxdTaZ6ZXdCTIcmolYr3OjydQi%2Fj%2F6OnAk5HZVvlD0z%2F8iODZKurQb0jk2naNFt6n0CqvAWSakrMdKsI199LlgBTeScQ4mNJTzGOydXM6cOyS8qB%2FP%2Bp1WFMTamXeu4Urhya3wbMY6ctE%2BMKLt1sQGOqUB%2B%2BIIDl86CCTGQzcp2dSheVNe6%2Fn6eWCvYwQc%2FY96qHvVMtTzjYLDE7A10G9SLGOHF%2BDvgH2GPPKnEtmS4ChSDRC8aoG39zl50l2tfMQafoWIiQeelDjaI7TPBx3QTznJbBwP4ZF3Tj7MuIuMHogFWhJ6ECKkTrRFMt%2Bu4RqaAN4q%2BrE4DteZL3G11xGMwUgozh21V0dDpTAnQR%2FPrsRXV29gP%2Fp4&X-Amz-Signature=bb08e63ebee5067b2d4e930567bca2e5f0e24d20b534c21d75ba1ed8d32197ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZRPDSL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCiJoGUNRuQO%2FQkvSuVvFEtIcLGgIM8Flth%2FBZilCHDQwIgMuuPYzrJLLDi%2Bzs7JLrV1hmXXA9r4i8LUjcvdzQCJOQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5gg2%2BLyGxPzmy1ByrcA8BqFut6q%2BsaHCN0DSr5K%2Fa59wkayANbmdCN4emHWCGSAmijk7PWP02tj56rAeNBgkELerYV3pqtFbEiErePBkntJCdRIoCiZ5ENcimzjZi3XuUkogG6MVn%2BnDEk77QpiTW2Ioepj%2Bi2am5chDnFIiRnf6t9tMJQ0VFUoVVQVU8oIp89wFyC702UUEZ7%2BVKTcHnStFHDuYUNPx47u4GamI%2FTwVQOHJG3dC%2FRsHEpbmfqE%2BTpp0vldjK3mj%2FHTHa%2FwKzWu5sFVX%2BAbw3rTZgl7xVJ2a47SzcP0Qtls%2BfPamSOWyVZsgMD%2BL55Y%2FYEnf6pgyiDol%2BkxgmyKvbNoOarlaw3zbdAfvgwqlhvB0APXTyxaVC5utEhWXGrom4J6G1EoTRxktxSiASlkqVZBwwU6XDWKyhbcZPp6DJ87BTl4q%2B%2BmURJZObPUlSb0UTDLOISQ%2Ff1HejbA8UUalCxOghiOo5cR0XJMOS9oUHk1E0tftImugXxdTaZ6ZXdCTIcmolYr3OjydQi%2Fj%2F6OnAk5HZVvlD0z%2F8iODZKurQb0jk2naNFt6n0CqvAWSakrMdKsI199LlgBTeScQ4mNJTzGOydXM6cOyS8qB%2FP%2Bp1WFMTamXeu4Urhya3wbMY6ctE%2BMKLt1sQGOqUB%2B%2BIIDl86CCTGQzcp2dSheVNe6%2Fn6eWCvYwQc%2FY96qHvVMtTzjYLDE7A10G9SLGOHF%2BDvgH2GPPKnEtmS4ChSDRC8aoG39zl50l2tfMQafoWIiQeelDjaI7TPBx3QTznJbBwP4ZF3Tj7MuIuMHogFWhJ6ECKkTrRFMt%2Bu4RqaAN4q%2BrE4DteZL3G11xGMwUgozh21V0dDpTAnQR%2FPrsRXV29gP%2Fp4&X-Amz-Signature=9e856e694d28a658ac8bdae149bef3230e0ca3170b4fc84eb773edcece2e1340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZRPDSL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCiJoGUNRuQO%2FQkvSuVvFEtIcLGgIM8Flth%2FBZilCHDQwIgMuuPYzrJLLDi%2Bzs7JLrV1hmXXA9r4i8LUjcvdzQCJOQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5gg2%2BLyGxPzmy1ByrcA8BqFut6q%2BsaHCN0DSr5K%2Fa59wkayANbmdCN4emHWCGSAmijk7PWP02tj56rAeNBgkELerYV3pqtFbEiErePBkntJCdRIoCiZ5ENcimzjZi3XuUkogG6MVn%2BnDEk77QpiTW2Ioepj%2Bi2am5chDnFIiRnf6t9tMJQ0VFUoVVQVU8oIp89wFyC702UUEZ7%2BVKTcHnStFHDuYUNPx47u4GamI%2FTwVQOHJG3dC%2FRsHEpbmfqE%2BTpp0vldjK3mj%2FHTHa%2FwKzWu5sFVX%2BAbw3rTZgl7xVJ2a47SzcP0Qtls%2BfPamSOWyVZsgMD%2BL55Y%2FYEnf6pgyiDol%2BkxgmyKvbNoOarlaw3zbdAfvgwqlhvB0APXTyxaVC5utEhWXGrom4J6G1EoTRxktxSiASlkqVZBwwU6XDWKyhbcZPp6DJ87BTl4q%2B%2BmURJZObPUlSb0UTDLOISQ%2Ff1HejbA8UUalCxOghiOo5cR0XJMOS9oUHk1E0tftImugXxdTaZ6ZXdCTIcmolYr3OjydQi%2Fj%2F6OnAk5HZVvlD0z%2F8iODZKurQb0jk2naNFt6n0CqvAWSakrMdKsI199LlgBTeScQ4mNJTzGOydXM6cOyS8qB%2FP%2Bp1WFMTamXeu4Urhya3wbMY6ctE%2BMKLt1sQGOqUB%2B%2BIIDl86CCTGQzcp2dSheVNe6%2Fn6eWCvYwQc%2FY96qHvVMtTzjYLDE7A10G9SLGOHF%2BDvgH2GPPKnEtmS4ChSDRC8aoG39zl50l2tfMQafoWIiQeelDjaI7TPBx3QTznJbBwP4ZF3Tj7MuIuMHogFWhJ6ECKkTrRFMt%2Bu4RqaAN4q%2BrE4DteZL3G11xGMwUgozh21V0dDpTAnQR%2FPrsRXV29gP%2Fp4&X-Amz-Signature=cbc79160b8d0562cb04fc3922e22c84758ded89e8945c884f49ec49f1e9b6a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZRPDSL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCiJoGUNRuQO%2FQkvSuVvFEtIcLGgIM8Flth%2FBZilCHDQwIgMuuPYzrJLLDi%2Bzs7JLrV1hmXXA9r4i8LUjcvdzQCJOQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5gg2%2BLyGxPzmy1ByrcA8BqFut6q%2BsaHCN0DSr5K%2Fa59wkayANbmdCN4emHWCGSAmijk7PWP02tj56rAeNBgkELerYV3pqtFbEiErePBkntJCdRIoCiZ5ENcimzjZi3XuUkogG6MVn%2BnDEk77QpiTW2Ioepj%2Bi2am5chDnFIiRnf6t9tMJQ0VFUoVVQVU8oIp89wFyC702UUEZ7%2BVKTcHnStFHDuYUNPx47u4GamI%2FTwVQOHJG3dC%2FRsHEpbmfqE%2BTpp0vldjK3mj%2FHTHa%2FwKzWu5sFVX%2BAbw3rTZgl7xVJ2a47SzcP0Qtls%2BfPamSOWyVZsgMD%2BL55Y%2FYEnf6pgyiDol%2BkxgmyKvbNoOarlaw3zbdAfvgwqlhvB0APXTyxaVC5utEhWXGrom4J6G1EoTRxktxSiASlkqVZBwwU6XDWKyhbcZPp6DJ87BTl4q%2B%2BmURJZObPUlSb0UTDLOISQ%2Ff1HejbA8UUalCxOghiOo5cR0XJMOS9oUHk1E0tftImugXxdTaZ6ZXdCTIcmolYr3OjydQi%2Fj%2F6OnAk5HZVvlD0z%2F8iODZKurQb0jk2naNFt6n0CqvAWSakrMdKsI199LlgBTeScQ4mNJTzGOydXM6cOyS8qB%2FP%2Bp1WFMTamXeu4Urhya3wbMY6ctE%2BMKLt1sQGOqUB%2B%2BIIDl86CCTGQzcp2dSheVNe6%2Fn6eWCvYwQc%2FY96qHvVMtTzjYLDE7A10G9SLGOHF%2BDvgH2GPPKnEtmS4ChSDRC8aoG39zl50l2tfMQafoWIiQeelDjaI7TPBx3QTznJbBwP4ZF3Tj7MuIuMHogFWhJ6ECKkTrRFMt%2Bu4RqaAN4q%2BrE4DteZL3G11xGMwUgozh21V0dDpTAnQR%2FPrsRXV29gP%2Fp4&X-Amz-Signature=5750cb5af5d4c5c5dd79685db75fa4e9aaa9103bb98d371ea6743ef66a305f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZRPDSL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCiJoGUNRuQO%2FQkvSuVvFEtIcLGgIM8Flth%2FBZilCHDQwIgMuuPYzrJLLDi%2Bzs7JLrV1hmXXA9r4i8LUjcvdzQCJOQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5gg2%2BLyGxPzmy1ByrcA8BqFut6q%2BsaHCN0DSr5K%2Fa59wkayANbmdCN4emHWCGSAmijk7PWP02tj56rAeNBgkELerYV3pqtFbEiErePBkntJCdRIoCiZ5ENcimzjZi3XuUkogG6MVn%2BnDEk77QpiTW2Ioepj%2Bi2am5chDnFIiRnf6t9tMJQ0VFUoVVQVU8oIp89wFyC702UUEZ7%2BVKTcHnStFHDuYUNPx47u4GamI%2FTwVQOHJG3dC%2FRsHEpbmfqE%2BTpp0vldjK3mj%2FHTHa%2FwKzWu5sFVX%2BAbw3rTZgl7xVJ2a47SzcP0Qtls%2BfPamSOWyVZsgMD%2BL55Y%2FYEnf6pgyiDol%2BkxgmyKvbNoOarlaw3zbdAfvgwqlhvB0APXTyxaVC5utEhWXGrom4J6G1EoTRxktxSiASlkqVZBwwU6XDWKyhbcZPp6DJ87BTl4q%2B%2BmURJZObPUlSb0UTDLOISQ%2Ff1HejbA8UUalCxOghiOo5cR0XJMOS9oUHk1E0tftImugXxdTaZ6ZXdCTIcmolYr3OjydQi%2Fj%2F6OnAk5HZVvlD0z%2F8iODZKurQb0jk2naNFt6n0CqvAWSakrMdKsI199LlgBTeScQ4mNJTzGOydXM6cOyS8qB%2FP%2Bp1WFMTamXeu4Urhya3wbMY6ctE%2BMKLt1sQGOqUB%2B%2BIIDl86CCTGQzcp2dSheVNe6%2Fn6eWCvYwQc%2FY96qHvVMtTzjYLDE7A10G9SLGOHF%2BDvgH2GPPKnEtmS4ChSDRC8aoG39zl50l2tfMQafoWIiQeelDjaI7TPBx3QTznJbBwP4ZF3Tj7MuIuMHogFWhJ6ECKkTrRFMt%2Bu4RqaAN4q%2BrE4DteZL3G11xGMwUgozh21V0dDpTAnQR%2FPrsRXV29gP%2Fp4&X-Amz-Signature=46482cca245e9853216e72d1d154b007e9d6bc45d131484967ad72aaf6389f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZRPDSL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCiJoGUNRuQO%2FQkvSuVvFEtIcLGgIM8Flth%2FBZilCHDQwIgMuuPYzrJLLDi%2Bzs7JLrV1hmXXA9r4i8LUjcvdzQCJOQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5gg2%2BLyGxPzmy1ByrcA8BqFut6q%2BsaHCN0DSr5K%2Fa59wkayANbmdCN4emHWCGSAmijk7PWP02tj56rAeNBgkELerYV3pqtFbEiErePBkntJCdRIoCiZ5ENcimzjZi3XuUkogG6MVn%2BnDEk77QpiTW2Ioepj%2Bi2am5chDnFIiRnf6t9tMJQ0VFUoVVQVU8oIp89wFyC702UUEZ7%2BVKTcHnStFHDuYUNPx47u4GamI%2FTwVQOHJG3dC%2FRsHEpbmfqE%2BTpp0vldjK3mj%2FHTHa%2FwKzWu5sFVX%2BAbw3rTZgl7xVJ2a47SzcP0Qtls%2BfPamSOWyVZsgMD%2BL55Y%2FYEnf6pgyiDol%2BkxgmyKvbNoOarlaw3zbdAfvgwqlhvB0APXTyxaVC5utEhWXGrom4J6G1EoTRxktxSiASlkqVZBwwU6XDWKyhbcZPp6DJ87BTl4q%2B%2BmURJZObPUlSb0UTDLOISQ%2Ff1HejbA8UUalCxOghiOo5cR0XJMOS9oUHk1E0tftImugXxdTaZ6ZXdCTIcmolYr3OjydQi%2Fj%2F6OnAk5HZVvlD0z%2F8iODZKurQb0jk2naNFt6n0CqvAWSakrMdKsI199LlgBTeScQ4mNJTzGOydXM6cOyS8qB%2FP%2Bp1WFMTamXeu4Urhya3wbMY6ctE%2BMKLt1sQGOqUB%2B%2BIIDl86CCTGQzcp2dSheVNe6%2Fn6eWCvYwQc%2FY96qHvVMtTzjYLDE7A10G9SLGOHF%2BDvgH2GPPKnEtmS4ChSDRC8aoG39zl50l2tfMQafoWIiQeelDjaI7TPBx3QTznJbBwP4ZF3Tj7MuIuMHogFWhJ6ECKkTrRFMt%2Bu4RqaAN4q%2BrE4DteZL3G11xGMwUgozh21V0dDpTAnQR%2FPrsRXV29gP%2Fp4&X-Amz-Signature=3e07f6d26a702ee8af00fb39ab09b3c036aca67d3f6390a9079371f5a6a660e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZRPDSL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCiJoGUNRuQO%2FQkvSuVvFEtIcLGgIM8Flth%2FBZilCHDQwIgMuuPYzrJLLDi%2Bzs7JLrV1hmXXA9r4i8LUjcvdzQCJOQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5gg2%2BLyGxPzmy1ByrcA8BqFut6q%2BsaHCN0DSr5K%2Fa59wkayANbmdCN4emHWCGSAmijk7PWP02tj56rAeNBgkELerYV3pqtFbEiErePBkntJCdRIoCiZ5ENcimzjZi3XuUkogG6MVn%2BnDEk77QpiTW2Ioepj%2Bi2am5chDnFIiRnf6t9tMJQ0VFUoVVQVU8oIp89wFyC702UUEZ7%2BVKTcHnStFHDuYUNPx47u4GamI%2FTwVQOHJG3dC%2FRsHEpbmfqE%2BTpp0vldjK3mj%2FHTHa%2FwKzWu5sFVX%2BAbw3rTZgl7xVJ2a47SzcP0Qtls%2BfPamSOWyVZsgMD%2BL55Y%2FYEnf6pgyiDol%2BkxgmyKvbNoOarlaw3zbdAfvgwqlhvB0APXTyxaVC5utEhWXGrom4J6G1EoTRxktxSiASlkqVZBwwU6XDWKyhbcZPp6DJ87BTl4q%2B%2BmURJZObPUlSb0UTDLOISQ%2Ff1HejbA8UUalCxOghiOo5cR0XJMOS9oUHk1E0tftImugXxdTaZ6ZXdCTIcmolYr3OjydQi%2Fj%2F6OnAk5HZVvlD0z%2F8iODZKurQb0jk2naNFt6n0CqvAWSakrMdKsI199LlgBTeScQ4mNJTzGOydXM6cOyS8qB%2FP%2Bp1WFMTamXeu4Urhya3wbMY6ctE%2BMKLt1sQGOqUB%2B%2BIIDl86CCTGQzcp2dSheVNe6%2Fn6eWCvYwQc%2FY96qHvVMtTzjYLDE7A10G9SLGOHF%2BDvgH2GPPKnEtmS4ChSDRC8aoG39zl50l2tfMQafoWIiQeelDjaI7TPBx3QTznJbBwP4ZF3Tj7MuIuMHogFWhJ6ECKkTrRFMt%2Bu4RqaAN4q%2BrE4DteZL3G11xGMwUgozh21V0dDpTAnQR%2FPrsRXV29gP%2Fp4&X-Amz-Signature=eac00066b6e31d9ace4a22c6564ba40ced20a65690e8df3bc2604e6d2f979f03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZRPDSL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCiJoGUNRuQO%2FQkvSuVvFEtIcLGgIM8Flth%2FBZilCHDQwIgMuuPYzrJLLDi%2Bzs7JLrV1hmXXA9r4i8LUjcvdzQCJOQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5gg2%2BLyGxPzmy1ByrcA8BqFut6q%2BsaHCN0DSr5K%2Fa59wkayANbmdCN4emHWCGSAmijk7PWP02tj56rAeNBgkELerYV3pqtFbEiErePBkntJCdRIoCiZ5ENcimzjZi3XuUkogG6MVn%2BnDEk77QpiTW2Ioepj%2Bi2am5chDnFIiRnf6t9tMJQ0VFUoVVQVU8oIp89wFyC702UUEZ7%2BVKTcHnStFHDuYUNPx47u4GamI%2FTwVQOHJG3dC%2FRsHEpbmfqE%2BTpp0vldjK3mj%2FHTHa%2FwKzWu5sFVX%2BAbw3rTZgl7xVJ2a47SzcP0Qtls%2BfPamSOWyVZsgMD%2BL55Y%2FYEnf6pgyiDol%2BkxgmyKvbNoOarlaw3zbdAfvgwqlhvB0APXTyxaVC5utEhWXGrom4J6G1EoTRxktxSiASlkqVZBwwU6XDWKyhbcZPp6DJ87BTl4q%2B%2BmURJZObPUlSb0UTDLOISQ%2Ff1HejbA8UUalCxOghiOo5cR0XJMOS9oUHk1E0tftImugXxdTaZ6ZXdCTIcmolYr3OjydQi%2Fj%2F6OnAk5HZVvlD0z%2F8iODZKurQb0jk2naNFt6n0CqvAWSakrMdKsI199LlgBTeScQ4mNJTzGOydXM6cOyS8qB%2FP%2Bp1WFMTamXeu4Urhya3wbMY6ctE%2BMKLt1sQGOqUB%2B%2BIIDl86CCTGQzcp2dSheVNe6%2Fn6eWCvYwQc%2FY96qHvVMtTzjYLDE7A10G9SLGOHF%2BDvgH2GPPKnEtmS4ChSDRC8aoG39zl50l2tfMQafoWIiQeelDjaI7TPBx3QTznJbBwP4ZF3Tj7MuIuMHogFWhJ6ECKkTrRFMt%2Bu4RqaAN4q%2BrE4DteZL3G11xGMwUgozh21V0dDpTAnQR%2FPrsRXV29gP%2Fp4&X-Amz-Signature=7a72139dd45766090be43ae6583c93fd0083fed34fba470a944ab2fcbe431040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
