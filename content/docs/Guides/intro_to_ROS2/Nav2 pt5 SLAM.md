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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJEZAKB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDg1N1Q84uU4v%2B8FMjtScZOMCxWihWh350zOwfI1L8jDAiEA29sOHNsN9agGuWiu7LiJYfiBs18aWcI85fNVcBVKJKMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOsLJdDFWoRmQKtnircA4JEE1lbuDMiwEEJq1JKbdlIpdkeW45EBRUJ1Ll%2FCxJDx4EOjDEed5yk2AW2AJWlUhnGS%2BL09TfzzSos7qUb5VrORkhL6ipPg3vpjpq1B19%2BzUalF2zOT9T0x8rMV8Y2NC94rnqGk9Tb9l%2Bmtz3GuBHJgJY67pWMWoimLTOWRGt%2B2yW66EITK6vez99jMkUuVOV1yt1v6ohWOZ8fxe69XWHifHocECX%2BQZHcEdgJQZ%2Bw6PLSzp5s78v91TDdStt%2FDv3eTtL32omNJLdG%2BW7Er%2BOj5A7RRWAoDHI35bEsE1EPUnb7fFnI%2FjhOmvRxNQ4UEdn2oSW94M%2FDUM2hjh3FIn9P3zH7tlyIzltX3JZMQUSoQr9rQhDDtKNYnHuvpyNGJSC2CAYgZitw%2BGcjEjdFNn5V1Mw%2FFxU0bWutH8I3A0gISZKXe%2Fr8bYT68hklLQc8JfT0LXezkvSN3xnmhsWndUDDYRnkm%2BD0kFAe1L%2Bb827iRET2basmE4LNVfHpKnf%2BqLGYYc4C2ftqh2kZ4gw3RMfMnSWvRN0PPAaIbAVZNsfgbVo56nSxkMQoBOwr%2FH6EoxVAOrEKE0XpTGix3rRSUlP02ZHBBJA9fDPEL63Ys4%2BsAyFQlWA3yopPIBj9MLq1ocQGOqUB3U819pmvPKIip8DeTgGKPFPuYkPpmAUZwmThD70eF8MCKRWsxXoeZKa3%2FsK2a7FZGdXoto7qu4StGzJGxsz0NwY3pEcGFPV%2FQ0eUgJPM8DgmKHGarlcF5GGbiC9Nnw9xwCUuHrtcJwy%2FxSbgBZa3fDxbnKekDJGzEP0RyxtyXy%2F41P3nNF08c6ez%2BXwZ4b1lXg4j0On0ZfUX%2FJiF6LKCz4Mu6KSC&X-Amz-Signature=8519ddce98d33515da0a489e43f14b57cd2709483a4427569523f52344132791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJEZAKB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDg1N1Q84uU4v%2B8FMjtScZOMCxWihWh350zOwfI1L8jDAiEA29sOHNsN9agGuWiu7LiJYfiBs18aWcI85fNVcBVKJKMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOsLJdDFWoRmQKtnircA4JEE1lbuDMiwEEJq1JKbdlIpdkeW45EBRUJ1Ll%2FCxJDx4EOjDEed5yk2AW2AJWlUhnGS%2BL09TfzzSos7qUb5VrORkhL6ipPg3vpjpq1B19%2BzUalF2zOT9T0x8rMV8Y2NC94rnqGk9Tb9l%2Bmtz3GuBHJgJY67pWMWoimLTOWRGt%2B2yW66EITK6vez99jMkUuVOV1yt1v6ohWOZ8fxe69XWHifHocECX%2BQZHcEdgJQZ%2Bw6PLSzp5s78v91TDdStt%2FDv3eTtL32omNJLdG%2BW7Er%2BOj5A7RRWAoDHI35bEsE1EPUnb7fFnI%2FjhOmvRxNQ4UEdn2oSW94M%2FDUM2hjh3FIn9P3zH7tlyIzltX3JZMQUSoQr9rQhDDtKNYnHuvpyNGJSC2CAYgZitw%2BGcjEjdFNn5V1Mw%2FFxU0bWutH8I3A0gISZKXe%2Fr8bYT68hklLQc8JfT0LXezkvSN3xnmhsWndUDDYRnkm%2BD0kFAe1L%2Bb827iRET2basmE4LNVfHpKnf%2BqLGYYc4C2ftqh2kZ4gw3RMfMnSWvRN0PPAaIbAVZNsfgbVo56nSxkMQoBOwr%2FH6EoxVAOrEKE0XpTGix3rRSUlP02ZHBBJA9fDPEL63Ys4%2BsAyFQlWA3yopPIBj9MLq1ocQGOqUB3U819pmvPKIip8DeTgGKPFPuYkPpmAUZwmThD70eF8MCKRWsxXoeZKa3%2FsK2a7FZGdXoto7qu4StGzJGxsz0NwY3pEcGFPV%2FQ0eUgJPM8DgmKHGarlcF5GGbiC9Nnw9xwCUuHrtcJwy%2FxSbgBZa3fDxbnKekDJGzEP0RyxtyXy%2F41P3nNF08c6ez%2BXwZ4b1lXg4j0On0ZfUX%2FJiF6LKCz4Mu6KSC&X-Amz-Signature=5e10517835a4a1f0c7e2caae6a2a33e74c6ad386aecada7a196966cd9541e20a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJEZAKB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDg1N1Q84uU4v%2B8FMjtScZOMCxWihWh350zOwfI1L8jDAiEA29sOHNsN9agGuWiu7LiJYfiBs18aWcI85fNVcBVKJKMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOsLJdDFWoRmQKtnircA4JEE1lbuDMiwEEJq1JKbdlIpdkeW45EBRUJ1Ll%2FCxJDx4EOjDEed5yk2AW2AJWlUhnGS%2BL09TfzzSos7qUb5VrORkhL6ipPg3vpjpq1B19%2BzUalF2zOT9T0x8rMV8Y2NC94rnqGk9Tb9l%2Bmtz3GuBHJgJY67pWMWoimLTOWRGt%2B2yW66EITK6vez99jMkUuVOV1yt1v6ohWOZ8fxe69XWHifHocECX%2BQZHcEdgJQZ%2Bw6PLSzp5s78v91TDdStt%2FDv3eTtL32omNJLdG%2BW7Er%2BOj5A7RRWAoDHI35bEsE1EPUnb7fFnI%2FjhOmvRxNQ4UEdn2oSW94M%2FDUM2hjh3FIn9P3zH7tlyIzltX3JZMQUSoQr9rQhDDtKNYnHuvpyNGJSC2CAYgZitw%2BGcjEjdFNn5V1Mw%2FFxU0bWutH8I3A0gISZKXe%2Fr8bYT68hklLQc8JfT0LXezkvSN3xnmhsWndUDDYRnkm%2BD0kFAe1L%2Bb827iRET2basmE4LNVfHpKnf%2BqLGYYc4C2ftqh2kZ4gw3RMfMnSWvRN0PPAaIbAVZNsfgbVo56nSxkMQoBOwr%2FH6EoxVAOrEKE0XpTGix3rRSUlP02ZHBBJA9fDPEL63Ys4%2BsAyFQlWA3yopPIBj9MLq1ocQGOqUB3U819pmvPKIip8DeTgGKPFPuYkPpmAUZwmThD70eF8MCKRWsxXoeZKa3%2FsK2a7FZGdXoto7qu4StGzJGxsz0NwY3pEcGFPV%2FQ0eUgJPM8DgmKHGarlcF5GGbiC9Nnw9xwCUuHrtcJwy%2FxSbgBZa3fDxbnKekDJGzEP0RyxtyXy%2F41P3nNF08c6ez%2BXwZ4b1lXg4j0On0ZfUX%2FJiF6LKCz4Mu6KSC&X-Amz-Signature=f4b5bc6e6b3e8c9a6033fd74df6c9541e5101804db8ce03560ef87479a363f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJEZAKB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDg1N1Q84uU4v%2B8FMjtScZOMCxWihWh350zOwfI1L8jDAiEA29sOHNsN9agGuWiu7LiJYfiBs18aWcI85fNVcBVKJKMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOsLJdDFWoRmQKtnircA4JEE1lbuDMiwEEJq1JKbdlIpdkeW45EBRUJ1Ll%2FCxJDx4EOjDEed5yk2AW2AJWlUhnGS%2BL09TfzzSos7qUb5VrORkhL6ipPg3vpjpq1B19%2BzUalF2zOT9T0x8rMV8Y2NC94rnqGk9Tb9l%2Bmtz3GuBHJgJY67pWMWoimLTOWRGt%2B2yW66EITK6vez99jMkUuVOV1yt1v6ohWOZ8fxe69XWHifHocECX%2BQZHcEdgJQZ%2Bw6PLSzp5s78v91TDdStt%2FDv3eTtL32omNJLdG%2BW7Er%2BOj5A7RRWAoDHI35bEsE1EPUnb7fFnI%2FjhOmvRxNQ4UEdn2oSW94M%2FDUM2hjh3FIn9P3zH7tlyIzltX3JZMQUSoQr9rQhDDtKNYnHuvpyNGJSC2CAYgZitw%2BGcjEjdFNn5V1Mw%2FFxU0bWutH8I3A0gISZKXe%2Fr8bYT68hklLQc8JfT0LXezkvSN3xnmhsWndUDDYRnkm%2BD0kFAe1L%2Bb827iRET2basmE4LNVfHpKnf%2BqLGYYc4C2ftqh2kZ4gw3RMfMnSWvRN0PPAaIbAVZNsfgbVo56nSxkMQoBOwr%2FH6EoxVAOrEKE0XpTGix3rRSUlP02ZHBBJA9fDPEL63Ys4%2BsAyFQlWA3yopPIBj9MLq1ocQGOqUB3U819pmvPKIip8DeTgGKPFPuYkPpmAUZwmThD70eF8MCKRWsxXoeZKa3%2FsK2a7FZGdXoto7qu4StGzJGxsz0NwY3pEcGFPV%2FQ0eUgJPM8DgmKHGarlcF5GGbiC9Nnw9xwCUuHrtcJwy%2FxSbgBZa3fDxbnKekDJGzEP0RyxtyXy%2F41P3nNF08c6ez%2BXwZ4b1lXg4j0On0ZfUX%2FJiF6LKCz4Mu6KSC&X-Amz-Signature=87d4d87a8e5332f80939d2200f8acad9024604f196ae007e600149dae8a41b8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJEZAKB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDg1N1Q84uU4v%2B8FMjtScZOMCxWihWh350zOwfI1L8jDAiEA29sOHNsN9agGuWiu7LiJYfiBs18aWcI85fNVcBVKJKMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOsLJdDFWoRmQKtnircA4JEE1lbuDMiwEEJq1JKbdlIpdkeW45EBRUJ1Ll%2FCxJDx4EOjDEed5yk2AW2AJWlUhnGS%2BL09TfzzSos7qUb5VrORkhL6ipPg3vpjpq1B19%2BzUalF2zOT9T0x8rMV8Y2NC94rnqGk9Tb9l%2Bmtz3GuBHJgJY67pWMWoimLTOWRGt%2B2yW66EITK6vez99jMkUuVOV1yt1v6ohWOZ8fxe69XWHifHocECX%2BQZHcEdgJQZ%2Bw6PLSzp5s78v91TDdStt%2FDv3eTtL32omNJLdG%2BW7Er%2BOj5A7RRWAoDHI35bEsE1EPUnb7fFnI%2FjhOmvRxNQ4UEdn2oSW94M%2FDUM2hjh3FIn9P3zH7tlyIzltX3JZMQUSoQr9rQhDDtKNYnHuvpyNGJSC2CAYgZitw%2BGcjEjdFNn5V1Mw%2FFxU0bWutH8I3A0gISZKXe%2Fr8bYT68hklLQc8JfT0LXezkvSN3xnmhsWndUDDYRnkm%2BD0kFAe1L%2Bb827iRET2basmE4LNVfHpKnf%2BqLGYYc4C2ftqh2kZ4gw3RMfMnSWvRN0PPAaIbAVZNsfgbVo56nSxkMQoBOwr%2FH6EoxVAOrEKE0XpTGix3rRSUlP02ZHBBJA9fDPEL63Ys4%2BsAyFQlWA3yopPIBj9MLq1ocQGOqUB3U819pmvPKIip8DeTgGKPFPuYkPpmAUZwmThD70eF8MCKRWsxXoeZKa3%2FsK2a7FZGdXoto7qu4StGzJGxsz0NwY3pEcGFPV%2FQ0eUgJPM8DgmKHGarlcF5GGbiC9Nnw9xwCUuHrtcJwy%2FxSbgBZa3fDxbnKekDJGzEP0RyxtyXy%2F41P3nNF08c6ez%2BXwZ4b1lXg4j0On0ZfUX%2FJiF6LKCz4Mu6KSC&X-Amz-Signature=d805f1f9b0586a68d27cbba9b8318dcdf37a00d3a1228bae5215d169d23eeaa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJEZAKB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDg1N1Q84uU4v%2B8FMjtScZOMCxWihWh350zOwfI1L8jDAiEA29sOHNsN9agGuWiu7LiJYfiBs18aWcI85fNVcBVKJKMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOsLJdDFWoRmQKtnircA4JEE1lbuDMiwEEJq1JKbdlIpdkeW45EBRUJ1Ll%2FCxJDx4EOjDEed5yk2AW2AJWlUhnGS%2BL09TfzzSos7qUb5VrORkhL6ipPg3vpjpq1B19%2BzUalF2zOT9T0x8rMV8Y2NC94rnqGk9Tb9l%2Bmtz3GuBHJgJY67pWMWoimLTOWRGt%2B2yW66EITK6vez99jMkUuVOV1yt1v6ohWOZ8fxe69XWHifHocECX%2BQZHcEdgJQZ%2Bw6PLSzp5s78v91TDdStt%2FDv3eTtL32omNJLdG%2BW7Er%2BOj5A7RRWAoDHI35bEsE1EPUnb7fFnI%2FjhOmvRxNQ4UEdn2oSW94M%2FDUM2hjh3FIn9P3zH7tlyIzltX3JZMQUSoQr9rQhDDtKNYnHuvpyNGJSC2CAYgZitw%2BGcjEjdFNn5V1Mw%2FFxU0bWutH8I3A0gISZKXe%2Fr8bYT68hklLQc8JfT0LXezkvSN3xnmhsWndUDDYRnkm%2BD0kFAe1L%2Bb827iRET2basmE4LNVfHpKnf%2BqLGYYc4C2ftqh2kZ4gw3RMfMnSWvRN0PPAaIbAVZNsfgbVo56nSxkMQoBOwr%2FH6EoxVAOrEKE0XpTGix3rRSUlP02ZHBBJA9fDPEL63Ys4%2BsAyFQlWA3yopPIBj9MLq1ocQGOqUB3U819pmvPKIip8DeTgGKPFPuYkPpmAUZwmThD70eF8MCKRWsxXoeZKa3%2FsK2a7FZGdXoto7qu4StGzJGxsz0NwY3pEcGFPV%2FQ0eUgJPM8DgmKHGarlcF5GGbiC9Nnw9xwCUuHrtcJwy%2FxSbgBZa3fDxbnKekDJGzEP0RyxtyXy%2F41P3nNF08c6ez%2BXwZ4b1lXg4j0On0ZfUX%2FJiF6LKCz4Mu6KSC&X-Amz-Signature=1744b9dea8288a5b3fc407185b4ec8f1c06499abc26934266cc46c2dd9429993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJEZAKB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDg1N1Q84uU4v%2B8FMjtScZOMCxWihWh350zOwfI1L8jDAiEA29sOHNsN9agGuWiu7LiJYfiBs18aWcI85fNVcBVKJKMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOsLJdDFWoRmQKtnircA4JEE1lbuDMiwEEJq1JKbdlIpdkeW45EBRUJ1Ll%2FCxJDx4EOjDEed5yk2AW2AJWlUhnGS%2BL09TfzzSos7qUb5VrORkhL6ipPg3vpjpq1B19%2BzUalF2zOT9T0x8rMV8Y2NC94rnqGk9Tb9l%2Bmtz3GuBHJgJY67pWMWoimLTOWRGt%2B2yW66EITK6vez99jMkUuVOV1yt1v6ohWOZ8fxe69XWHifHocECX%2BQZHcEdgJQZ%2Bw6PLSzp5s78v91TDdStt%2FDv3eTtL32omNJLdG%2BW7Er%2BOj5A7RRWAoDHI35bEsE1EPUnb7fFnI%2FjhOmvRxNQ4UEdn2oSW94M%2FDUM2hjh3FIn9P3zH7tlyIzltX3JZMQUSoQr9rQhDDtKNYnHuvpyNGJSC2CAYgZitw%2BGcjEjdFNn5V1Mw%2FFxU0bWutH8I3A0gISZKXe%2Fr8bYT68hklLQc8JfT0LXezkvSN3xnmhsWndUDDYRnkm%2BD0kFAe1L%2Bb827iRET2basmE4LNVfHpKnf%2BqLGYYc4C2ftqh2kZ4gw3RMfMnSWvRN0PPAaIbAVZNsfgbVo56nSxkMQoBOwr%2FH6EoxVAOrEKE0XpTGix3rRSUlP02ZHBBJA9fDPEL63Ys4%2BsAyFQlWA3yopPIBj9MLq1ocQGOqUB3U819pmvPKIip8DeTgGKPFPuYkPpmAUZwmThD70eF8MCKRWsxXoeZKa3%2FsK2a7FZGdXoto7qu4StGzJGxsz0NwY3pEcGFPV%2FQ0eUgJPM8DgmKHGarlcF5GGbiC9Nnw9xwCUuHrtcJwy%2FxSbgBZa3fDxbnKekDJGzEP0RyxtyXy%2F41P3nNF08c6ez%2BXwZ4b1lXg4j0On0ZfUX%2FJiF6LKCz4Mu6KSC&X-Amz-Signature=cae715e3df6c17202a14b617419ab3b6ec86b929e35fd2394500fd3f612daf18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJEZAKB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDg1N1Q84uU4v%2B8FMjtScZOMCxWihWh350zOwfI1L8jDAiEA29sOHNsN9agGuWiu7LiJYfiBs18aWcI85fNVcBVKJKMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOsLJdDFWoRmQKtnircA4JEE1lbuDMiwEEJq1JKbdlIpdkeW45EBRUJ1Ll%2FCxJDx4EOjDEed5yk2AW2AJWlUhnGS%2BL09TfzzSos7qUb5VrORkhL6ipPg3vpjpq1B19%2BzUalF2zOT9T0x8rMV8Y2NC94rnqGk9Tb9l%2Bmtz3GuBHJgJY67pWMWoimLTOWRGt%2B2yW66EITK6vez99jMkUuVOV1yt1v6ohWOZ8fxe69XWHifHocECX%2BQZHcEdgJQZ%2Bw6PLSzp5s78v91TDdStt%2FDv3eTtL32omNJLdG%2BW7Er%2BOj5A7RRWAoDHI35bEsE1EPUnb7fFnI%2FjhOmvRxNQ4UEdn2oSW94M%2FDUM2hjh3FIn9P3zH7tlyIzltX3JZMQUSoQr9rQhDDtKNYnHuvpyNGJSC2CAYgZitw%2BGcjEjdFNn5V1Mw%2FFxU0bWutH8I3A0gISZKXe%2Fr8bYT68hklLQc8JfT0LXezkvSN3xnmhsWndUDDYRnkm%2BD0kFAe1L%2Bb827iRET2basmE4LNVfHpKnf%2BqLGYYc4C2ftqh2kZ4gw3RMfMnSWvRN0PPAaIbAVZNsfgbVo56nSxkMQoBOwr%2FH6EoxVAOrEKE0XpTGix3rRSUlP02ZHBBJA9fDPEL63Ys4%2BsAyFQlWA3yopPIBj9MLq1ocQGOqUB3U819pmvPKIip8DeTgGKPFPuYkPpmAUZwmThD70eF8MCKRWsxXoeZKa3%2FsK2a7FZGdXoto7qu4StGzJGxsz0NwY3pEcGFPV%2FQ0eUgJPM8DgmKHGarlcF5GGbiC9Nnw9xwCUuHrtcJwy%2FxSbgBZa3fDxbnKekDJGzEP0RyxtyXy%2F41P3nNF08c6ez%2BXwZ4b1lXg4j0On0ZfUX%2FJiF6LKCz4Mu6KSC&X-Amz-Signature=51e6b2c03336edcc3f3e0a24fdc3394137ba43dc15143650d7db92306bbb5326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJEZAKB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDg1N1Q84uU4v%2B8FMjtScZOMCxWihWh350zOwfI1L8jDAiEA29sOHNsN9agGuWiu7LiJYfiBs18aWcI85fNVcBVKJKMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOsLJdDFWoRmQKtnircA4JEE1lbuDMiwEEJq1JKbdlIpdkeW45EBRUJ1Ll%2FCxJDx4EOjDEed5yk2AW2AJWlUhnGS%2BL09TfzzSos7qUb5VrORkhL6ipPg3vpjpq1B19%2BzUalF2zOT9T0x8rMV8Y2NC94rnqGk9Tb9l%2Bmtz3GuBHJgJY67pWMWoimLTOWRGt%2B2yW66EITK6vez99jMkUuVOV1yt1v6ohWOZ8fxe69XWHifHocECX%2BQZHcEdgJQZ%2Bw6PLSzp5s78v91TDdStt%2FDv3eTtL32omNJLdG%2BW7Er%2BOj5A7RRWAoDHI35bEsE1EPUnb7fFnI%2FjhOmvRxNQ4UEdn2oSW94M%2FDUM2hjh3FIn9P3zH7tlyIzltX3JZMQUSoQr9rQhDDtKNYnHuvpyNGJSC2CAYgZitw%2BGcjEjdFNn5V1Mw%2FFxU0bWutH8I3A0gISZKXe%2Fr8bYT68hklLQc8JfT0LXezkvSN3xnmhsWndUDDYRnkm%2BD0kFAe1L%2Bb827iRET2basmE4LNVfHpKnf%2BqLGYYc4C2ftqh2kZ4gw3RMfMnSWvRN0PPAaIbAVZNsfgbVo56nSxkMQoBOwr%2FH6EoxVAOrEKE0XpTGix3rRSUlP02ZHBBJA9fDPEL63Ys4%2BsAyFQlWA3yopPIBj9MLq1ocQGOqUB3U819pmvPKIip8DeTgGKPFPuYkPpmAUZwmThD70eF8MCKRWsxXoeZKa3%2FsK2a7FZGdXoto7qu4StGzJGxsz0NwY3pEcGFPV%2FQ0eUgJPM8DgmKHGarlcF5GGbiC9Nnw9xwCUuHrtcJwy%2FxSbgBZa3fDxbnKekDJGzEP0RyxtyXy%2F41P3nNF08c6ez%2BXwZ4b1lXg4j0On0ZfUX%2FJiF6LKCz4Mu6KSC&X-Amz-Signature=df07abf9700f358c1203e8269619adca5eb424581240328124ff41a1686494af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJEZAKB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDg1N1Q84uU4v%2B8FMjtScZOMCxWihWh350zOwfI1L8jDAiEA29sOHNsN9agGuWiu7LiJYfiBs18aWcI85fNVcBVKJKMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOsLJdDFWoRmQKtnircA4JEE1lbuDMiwEEJq1JKbdlIpdkeW45EBRUJ1Ll%2FCxJDx4EOjDEed5yk2AW2AJWlUhnGS%2BL09TfzzSos7qUb5VrORkhL6ipPg3vpjpq1B19%2BzUalF2zOT9T0x8rMV8Y2NC94rnqGk9Tb9l%2Bmtz3GuBHJgJY67pWMWoimLTOWRGt%2B2yW66EITK6vez99jMkUuVOV1yt1v6ohWOZ8fxe69XWHifHocECX%2BQZHcEdgJQZ%2Bw6PLSzp5s78v91TDdStt%2FDv3eTtL32omNJLdG%2BW7Er%2BOj5A7RRWAoDHI35bEsE1EPUnb7fFnI%2FjhOmvRxNQ4UEdn2oSW94M%2FDUM2hjh3FIn9P3zH7tlyIzltX3JZMQUSoQr9rQhDDtKNYnHuvpyNGJSC2CAYgZitw%2BGcjEjdFNn5V1Mw%2FFxU0bWutH8I3A0gISZKXe%2Fr8bYT68hklLQc8JfT0LXezkvSN3xnmhsWndUDDYRnkm%2BD0kFAe1L%2Bb827iRET2basmE4LNVfHpKnf%2BqLGYYc4C2ftqh2kZ4gw3RMfMnSWvRN0PPAaIbAVZNsfgbVo56nSxkMQoBOwr%2FH6EoxVAOrEKE0XpTGix3rRSUlP02ZHBBJA9fDPEL63Ys4%2BsAyFQlWA3yopPIBj9MLq1ocQGOqUB3U819pmvPKIip8DeTgGKPFPuYkPpmAUZwmThD70eF8MCKRWsxXoeZKa3%2FsK2a7FZGdXoto7qu4StGzJGxsz0NwY3pEcGFPV%2FQ0eUgJPM8DgmKHGarlcF5GGbiC9Nnw9xwCUuHrtcJwy%2FxSbgBZa3fDxbnKekDJGzEP0RyxtyXy%2F41P3nNF08c6ez%2BXwZ4b1lXg4j0On0ZfUX%2FJiF6LKCz4Mu6KSC&X-Amz-Signature=bfecd06fce15ec2c404fc61d4da104ad47a85828c6513a55605d5610c6445b1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJEZAKB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDg1N1Q84uU4v%2B8FMjtScZOMCxWihWh350zOwfI1L8jDAiEA29sOHNsN9agGuWiu7LiJYfiBs18aWcI85fNVcBVKJKMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOsLJdDFWoRmQKtnircA4JEE1lbuDMiwEEJq1JKbdlIpdkeW45EBRUJ1Ll%2FCxJDx4EOjDEed5yk2AW2AJWlUhnGS%2BL09TfzzSos7qUb5VrORkhL6ipPg3vpjpq1B19%2BzUalF2zOT9T0x8rMV8Y2NC94rnqGk9Tb9l%2Bmtz3GuBHJgJY67pWMWoimLTOWRGt%2B2yW66EITK6vez99jMkUuVOV1yt1v6ohWOZ8fxe69XWHifHocECX%2BQZHcEdgJQZ%2Bw6PLSzp5s78v91TDdStt%2FDv3eTtL32omNJLdG%2BW7Er%2BOj5A7RRWAoDHI35bEsE1EPUnb7fFnI%2FjhOmvRxNQ4UEdn2oSW94M%2FDUM2hjh3FIn9P3zH7tlyIzltX3JZMQUSoQr9rQhDDtKNYnHuvpyNGJSC2CAYgZitw%2BGcjEjdFNn5V1Mw%2FFxU0bWutH8I3A0gISZKXe%2Fr8bYT68hklLQc8JfT0LXezkvSN3xnmhsWndUDDYRnkm%2BD0kFAe1L%2Bb827iRET2basmE4LNVfHpKnf%2BqLGYYc4C2ftqh2kZ4gw3RMfMnSWvRN0PPAaIbAVZNsfgbVo56nSxkMQoBOwr%2FH6EoxVAOrEKE0XpTGix3rRSUlP02ZHBBJA9fDPEL63Ys4%2BsAyFQlWA3yopPIBj9MLq1ocQGOqUB3U819pmvPKIip8DeTgGKPFPuYkPpmAUZwmThD70eF8MCKRWsxXoeZKa3%2FsK2a7FZGdXoto7qu4StGzJGxsz0NwY3pEcGFPV%2FQ0eUgJPM8DgmKHGarlcF5GGbiC9Nnw9xwCUuHrtcJwy%2FxSbgBZa3fDxbnKekDJGzEP0RyxtyXy%2F41P3nNF08c6ez%2BXwZ4b1lXg4j0On0ZfUX%2FJiF6LKCz4Mu6KSC&X-Amz-Signature=09becf7a3dc989e2ce738085f7a2eb7af75da16522392b14e2863896e8388a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJEZAKB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDg1N1Q84uU4v%2B8FMjtScZOMCxWihWh350zOwfI1L8jDAiEA29sOHNsN9agGuWiu7LiJYfiBs18aWcI85fNVcBVKJKMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOsLJdDFWoRmQKtnircA4JEE1lbuDMiwEEJq1JKbdlIpdkeW45EBRUJ1Ll%2FCxJDx4EOjDEed5yk2AW2AJWlUhnGS%2BL09TfzzSos7qUb5VrORkhL6ipPg3vpjpq1B19%2BzUalF2zOT9T0x8rMV8Y2NC94rnqGk9Tb9l%2Bmtz3GuBHJgJY67pWMWoimLTOWRGt%2B2yW66EITK6vez99jMkUuVOV1yt1v6ohWOZ8fxe69XWHifHocECX%2BQZHcEdgJQZ%2Bw6PLSzp5s78v91TDdStt%2FDv3eTtL32omNJLdG%2BW7Er%2BOj5A7RRWAoDHI35bEsE1EPUnb7fFnI%2FjhOmvRxNQ4UEdn2oSW94M%2FDUM2hjh3FIn9P3zH7tlyIzltX3JZMQUSoQr9rQhDDtKNYnHuvpyNGJSC2CAYgZitw%2BGcjEjdFNn5V1Mw%2FFxU0bWutH8I3A0gISZKXe%2Fr8bYT68hklLQc8JfT0LXezkvSN3xnmhsWndUDDYRnkm%2BD0kFAe1L%2Bb827iRET2basmE4LNVfHpKnf%2BqLGYYc4C2ftqh2kZ4gw3RMfMnSWvRN0PPAaIbAVZNsfgbVo56nSxkMQoBOwr%2FH6EoxVAOrEKE0XpTGix3rRSUlP02ZHBBJA9fDPEL63Ys4%2BsAyFQlWA3yopPIBj9MLq1ocQGOqUB3U819pmvPKIip8DeTgGKPFPuYkPpmAUZwmThD70eF8MCKRWsxXoeZKa3%2FsK2a7FZGdXoto7qu4StGzJGxsz0NwY3pEcGFPV%2FQ0eUgJPM8DgmKHGarlcF5GGbiC9Nnw9xwCUuHrtcJwy%2FxSbgBZa3fDxbnKekDJGzEP0RyxtyXy%2F41P3nNF08c6ez%2BXwZ4b1lXg4j0On0ZfUX%2FJiF6LKCz4Mu6KSC&X-Amz-Signature=fc4d2701ff46a4181c460d466a7443a3d09cc046fa25bf36872648e8075127aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJEZAKB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDg1N1Q84uU4v%2B8FMjtScZOMCxWihWh350zOwfI1L8jDAiEA29sOHNsN9agGuWiu7LiJYfiBs18aWcI85fNVcBVKJKMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOsLJdDFWoRmQKtnircA4JEE1lbuDMiwEEJq1JKbdlIpdkeW45EBRUJ1Ll%2FCxJDx4EOjDEed5yk2AW2AJWlUhnGS%2BL09TfzzSos7qUb5VrORkhL6ipPg3vpjpq1B19%2BzUalF2zOT9T0x8rMV8Y2NC94rnqGk9Tb9l%2Bmtz3GuBHJgJY67pWMWoimLTOWRGt%2B2yW66EITK6vez99jMkUuVOV1yt1v6ohWOZ8fxe69XWHifHocECX%2BQZHcEdgJQZ%2Bw6PLSzp5s78v91TDdStt%2FDv3eTtL32omNJLdG%2BW7Er%2BOj5A7RRWAoDHI35bEsE1EPUnb7fFnI%2FjhOmvRxNQ4UEdn2oSW94M%2FDUM2hjh3FIn9P3zH7tlyIzltX3JZMQUSoQr9rQhDDtKNYnHuvpyNGJSC2CAYgZitw%2BGcjEjdFNn5V1Mw%2FFxU0bWutH8I3A0gISZKXe%2Fr8bYT68hklLQc8JfT0LXezkvSN3xnmhsWndUDDYRnkm%2BD0kFAe1L%2Bb827iRET2basmE4LNVfHpKnf%2BqLGYYc4C2ftqh2kZ4gw3RMfMnSWvRN0PPAaIbAVZNsfgbVo56nSxkMQoBOwr%2FH6EoxVAOrEKE0XpTGix3rRSUlP02ZHBBJA9fDPEL63Ys4%2BsAyFQlWA3yopPIBj9MLq1ocQGOqUB3U819pmvPKIip8DeTgGKPFPuYkPpmAUZwmThD70eF8MCKRWsxXoeZKa3%2FsK2a7FZGdXoto7qu4StGzJGxsz0NwY3pEcGFPV%2FQ0eUgJPM8DgmKHGarlcF5GGbiC9Nnw9xwCUuHrtcJwy%2FxSbgBZa3fDxbnKekDJGzEP0RyxtyXy%2F41P3nNF08c6ez%2BXwZ4b1lXg4j0On0ZfUX%2FJiF6LKCz4Mu6KSC&X-Amz-Signature=db01de44669066021f463ddecc1dbe21a21c083e789ddfe6e02e17758c07793e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
