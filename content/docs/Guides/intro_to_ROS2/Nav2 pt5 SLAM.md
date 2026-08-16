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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474WXLTL%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAsKeqD2jS%2F6iy1SHSJWaepqFZKmXOiT%2FIttFFD7B52VAiAhm7X0kmT0BzTAUHQZHPBAzog4HIB47Y41Iis%2Bt67GCyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM3%2Fx0vbaImeUq6%2FoAKtwDBd0SStJJEhh2P34Xj46zsdFXzX%2F4y0RdvIPMceJBh3cr1gDVU7x%2Flqhe2x4r5M5%2FNsIpZw8y7Bx0WVBcqWJ0yvmeBmnipyfrpNA5CzjDY4US6Qnt4FBWnqesbi4QkiL%2FM8AL1Ieag6hQdAt77Q2CChN%2BTvYVhOaiLkRw505yU4B%2F3tGCd%2FylBE302HQ3KEvbiXugZqBYP9VzWsgYAnr9iuaoAFwt%2F9oevaDCyxSoOSeKfaNZbNM9yaBLIbzCAz7ydf5ixD629ECn2LmhbirNpoSvVOUgZ3JkvAJaI9KY0IA%2FwXdKc8p6oiaAOlh3JBCo2px0PFAzpCDAIX49foxdqSs4VwW0Egg8jBwArPFsWUaRVs7BDHIIaQqqYip67f%2BmweA7IkBj7awZk35z9eYyu%2BV%2Bk4RF4XB78QviU%2Bo6lBEbbtX3CFQvjW9snWbSNfbOAs5ag1E5A1LfaFCk%2FVRcbRRARE7TWQZm0XVjfD9XW78pBzKi4j2R7iH%2FIXJseaXLOQl3yYu89lmfWuDgu3T%2FZ9B3xCEnqKPZYDNzdG7huiHoTxIfsZbMlk3Relu3pfoa8mkF54Tc%2B1Ou8TQK5Nml0OKoublFIyU7WLebP7UvuZdlr6grzlpgvgSfMb8wme2D1AY6pgEPzs7rzb%2F%2FLZvq%2F57Zwmiq3cAzqCbBimMHIfro9JzLJYXioe1dXlh%2B0kyFbH9s3NMNJ7iGEt7FP%2B2m%2FXlcO5cYkdKNsRaL9cYSp9DZiVBoEOYQUj6alEbB0faY%2B%2FM87KmBuTv4xZe29n4wYzddo74dyzbQP7sbzsPo%2B1Dt2IZMcjYDsPw%2BBMpUM4VA%2BIoox%2Bm5DZ5EEZWScqGN4X9uKnfEL7rjdWLs&X-Amz-Signature=62da9350f184be8d944cb8dfdde42d03adb6ca0e0d39e9f158065bfdf4b29c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474WXLTL%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAsKeqD2jS%2F6iy1SHSJWaepqFZKmXOiT%2FIttFFD7B52VAiAhm7X0kmT0BzTAUHQZHPBAzog4HIB47Y41Iis%2Bt67GCyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM3%2Fx0vbaImeUq6%2FoAKtwDBd0SStJJEhh2P34Xj46zsdFXzX%2F4y0RdvIPMceJBh3cr1gDVU7x%2Flqhe2x4r5M5%2FNsIpZw8y7Bx0WVBcqWJ0yvmeBmnipyfrpNA5CzjDY4US6Qnt4FBWnqesbi4QkiL%2FM8AL1Ieag6hQdAt77Q2CChN%2BTvYVhOaiLkRw505yU4B%2F3tGCd%2FylBE302HQ3KEvbiXugZqBYP9VzWsgYAnr9iuaoAFwt%2F9oevaDCyxSoOSeKfaNZbNM9yaBLIbzCAz7ydf5ixD629ECn2LmhbirNpoSvVOUgZ3JkvAJaI9KY0IA%2FwXdKc8p6oiaAOlh3JBCo2px0PFAzpCDAIX49foxdqSs4VwW0Egg8jBwArPFsWUaRVs7BDHIIaQqqYip67f%2BmweA7IkBj7awZk35z9eYyu%2BV%2Bk4RF4XB78QviU%2Bo6lBEbbtX3CFQvjW9snWbSNfbOAs5ag1E5A1LfaFCk%2FVRcbRRARE7TWQZm0XVjfD9XW78pBzKi4j2R7iH%2FIXJseaXLOQl3yYu89lmfWuDgu3T%2FZ9B3xCEnqKPZYDNzdG7huiHoTxIfsZbMlk3Relu3pfoa8mkF54Tc%2B1Ou8TQK5Nml0OKoublFIyU7WLebP7UvuZdlr6grzlpgvgSfMb8wme2D1AY6pgEPzs7rzb%2F%2FLZvq%2F57Zwmiq3cAzqCbBimMHIfro9JzLJYXioe1dXlh%2B0kyFbH9s3NMNJ7iGEt7FP%2B2m%2FXlcO5cYkdKNsRaL9cYSp9DZiVBoEOYQUj6alEbB0faY%2B%2FM87KmBuTv4xZe29n4wYzddo74dyzbQP7sbzsPo%2B1Dt2IZMcjYDsPw%2BBMpUM4VA%2BIoox%2Bm5DZ5EEZWScqGN4X9uKnfEL7rjdWLs&X-Amz-Signature=81151c10a6acd0994b323dc98edc8d0e55eaba25214088ccf845d2e1972a0628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474WXLTL%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAsKeqD2jS%2F6iy1SHSJWaepqFZKmXOiT%2FIttFFD7B52VAiAhm7X0kmT0BzTAUHQZHPBAzog4HIB47Y41Iis%2Bt67GCyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM3%2Fx0vbaImeUq6%2FoAKtwDBd0SStJJEhh2P34Xj46zsdFXzX%2F4y0RdvIPMceJBh3cr1gDVU7x%2Flqhe2x4r5M5%2FNsIpZw8y7Bx0WVBcqWJ0yvmeBmnipyfrpNA5CzjDY4US6Qnt4FBWnqesbi4QkiL%2FM8AL1Ieag6hQdAt77Q2CChN%2BTvYVhOaiLkRw505yU4B%2F3tGCd%2FylBE302HQ3KEvbiXugZqBYP9VzWsgYAnr9iuaoAFwt%2F9oevaDCyxSoOSeKfaNZbNM9yaBLIbzCAz7ydf5ixD629ECn2LmhbirNpoSvVOUgZ3JkvAJaI9KY0IA%2FwXdKc8p6oiaAOlh3JBCo2px0PFAzpCDAIX49foxdqSs4VwW0Egg8jBwArPFsWUaRVs7BDHIIaQqqYip67f%2BmweA7IkBj7awZk35z9eYyu%2BV%2Bk4RF4XB78QviU%2Bo6lBEbbtX3CFQvjW9snWbSNfbOAs5ag1E5A1LfaFCk%2FVRcbRRARE7TWQZm0XVjfD9XW78pBzKi4j2R7iH%2FIXJseaXLOQl3yYu89lmfWuDgu3T%2FZ9B3xCEnqKPZYDNzdG7huiHoTxIfsZbMlk3Relu3pfoa8mkF54Tc%2B1Ou8TQK5Nml0OKoublFIyU7WLebP7UvuZdlr6grzlpgvgSfMb8wme2D1AY6pgEPzs7rzb%2F%2FLZvq%2F57Zwmiq3cAzqCbBimMHIfro9JzLJYXioe1dXlh%2B0kyFbH9s3NMNJ7iGEt7FP%2B2m%2FXlcO5cYkdKNsRaL9cYSp9DZiVBoEOYQUj6alEbB0faY%2B%2FM87KmBuTv4xZe29n4wYzddo74dyzbQP7sbzsPo%2B1Dt2IZMcjYDsPw%2BBMpUM4VA%2BIoox%2Bm5DZ5EEZWScqGN4X9uKnfEL7rjdWLs&X-Amz-Signature=91666154d2933aaf448c384b10962d04a30a629e65a2312a5153e51710aeadec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474WXLTL%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAsKeqD2jS%2F6iy1SHSJWaepqFZKmXOiT%2FIttFFD7B52VAiAhm7X0kmT0BzTAUHQZHPBAzog4HIB47Y41Iis%2Bt67GCyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM3%2Fx0vbaImeUq6%2FoAKtwDBd0SStJJEhh2P34Xj46zsdFXzX%2F4y0RdvIPMceJBh3cr1gDVU7x%2Flqhe2x4r5M5%2FNsIpZw8y7Bx0WVBcqWJ0yvmeBmnipyfrpNA5CzjDY4US6Qnt4FBWnqesbi4QkiL%2FM8AL1Ieag6hQdAt77Q2CChN%2BTvYVhOaiLkRw505yU4B%2F3tGCd%2FylBE302HQ3KEvbiXugZqBYP9VzWsgYAnr9iuaoAFwt%2F9oevaDCyxSoOSeKfaNZbNM9yaBLIbzCAz7ydf5ixD629ECn2LmhbirNpoSvVOUgZ3JkvAJaI9KY0IA%2FwXdKc8p6oiaAOlh3JBCo2px0PFAzpCDAIX49foxdqSs4VwW0Egg8jBwArPFsWUaRVs7BDHIIaQqqYip67f%2BmweA7IkBj7awZk35z9eYyu%2BV%2Bk4RF4XB78QviU%2Bo6lBEbbtX3CFQvjW9snWbSNfbOAs5ag1E5A1LfaFCk%2FVRcbRRARE7TWQZm0XVjfD9XW78pBzKi4j2R7iH%2FIXJseaXLOQl3yYu89lmfWuDgu3T%2FZ9B3xCEnqKPZYDNzdG7huiHoTxIfsZbMlk3Relu3pfoa8mkF54Tc%2B1Ou8TQK5Nml0OKoublFIyU7WLebP7UvuZdlr6grzlpgvgSfMb8wme2D1AY6pgEPzs7rzb%2F%2FLZvq%2F57Zwmiq3cAzqCbBimMHIfro9JzLJYXioe1dXlh%2B0kyFbH9s3NMNJ7iGEt7FP%2B2m%2FXlcO5cYkdKNsRaL9cYSp9DZiVBoEOYQUj6alEbB0faY%2B%2FM87KmBuTv4xZe29n4wYzddo74dyzbQP7sbzsPo%2B1Dt2IZMcjYDsPw%2BBMpUM4VA%2BIoox%2Bm5DZ5EEZWScqGN4X9uKnfEL7rjdWLs&X-Amz-Signature=635de6defabe4b13f6c2d0fb0da11b99bea5214660c202ed9a205af6c6b1423b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474WXLTL%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAsKeqD2jS%2F6iy1SHSJWaepqFZKmXOiT%2FIttFFD7B52VAiAhm7X0kmT0BzTAUHQZHPBAzog4HIB47Y41Iis%2Bt67GCyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM3%2Fx0vbaImeUq6%2FoAKtwDBd0SStJJEhh2P34Xj46zsdFXzX%2F4y0RdvIPMceJBh3cr1gDVU7x%2Flqhe2x4r5M5%2FNsIpZw8y7Bx0WVBcqWJ0yvmeBmnipyfrpNA5CzjDY4US6Qnt4FBWnqesbi4QkiL%2FM8AL1Ieag6hQdAt77Q2CChN%2BTvYVhOaiLkRw505yU4B%2F3tGCd%2FylBE302HQ3KEvbiXugZqBYP9VzWsgYAnr9iuaoAFwt%2F9oevaDCyxSoOSeKfaNZbNM9yaBLIbzCAz7ydf5ixD629ECn2LmhbirNpoSvVOUgZ3JkvAJaI9KY0IA%2FwXdKc8p6oiaAOlh3JBCo2px0PFAzpCDAIX49foxdqSs4VwW0Egg8jBwArPFsWUaRVs7BDHIIaQqqYip67f%2BmweA7IkBj7awZk35z9eYyu%2BV%2Bk4RF4XB78QviU%2Bo6lBEbbtX3CFQvjW9snWbSNfbOAs5ag1E5A1LfaFCk%2FVRcbRRARE7TWQZm0XVjfD9XW78pBzKi4j2R7iH%2FIXJseaXLOQl3yYu89lmfWuDgu3T%2FZ9B3xCEnqKPZYDNzdG7huiHoTxIfsZbMlk3Relu3pfoa8mkF54Tc%2B1Ou8TQK5Nml0OKoublFIyU7WLebP7UvuZdlr6grzlpgvgSfMb8wme2D1AY6pgEPzs7rzb%2F%2FLZvq%2F57Zwmiq3cAzqCbBimMHIfro9JzLJYXioe1dXlh%2B0kyFbH9s3NMNJ7iGEt7FP%2B2m%2FXlcO5cYkdKNsRaL9cYSp9DZiVBoEOYQUj6alEbB0faY%2B%2FM87KmBuTv4xZe29n4wYzddo74dyzbQP7sbzsPo%2B1Dt2IZMcjYDsPw%2BBMpUM4VA%2BIoox%2Bm5DZ5EEZWScqGN4X9uKnfEL7rjdWLs&X-Amz-Signature=a0f5ab8eaa7cbd7206bb10bd0b0174a0f36e92b914a828175f6b786be30026ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474WXLTL%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAsKeqD2jS%2F6iy1SHSJWaepqFZKmXOiT%2FIttFFD7B52VAiAhm7X0kmT0BzTAUHQZHPBAzog4HIB47Y41Iis%2Bt67GCyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM3%2Fx0vbaImeUq6%2FoAKtwDBd0SStJJEhh2P34Xj46zsdFXzX%2F4y0RdvIPMceJBh3cr1gDVU7x%2Flqhe2x4r5M5%2FNsIpZw8y7Bx0WVBcqWJ0yvmeBmnipyfrpNA5CzjDY4US6Qnt4FBWnqesbi4QkiL%2FM8AL1Ieag6hQdAt77Q2CChN%2BTvYVhOaiLkRw505yU4B%2F3tGCd%2FylBE302HQ3KEvbiXugZqBYP9VzWsgYAnr9iuaoAFwt%2F9oevaDCyxSoOSeKfaNZbNM9yaBLIbzCAz7ydf5ixD629ECn2LmhbirNpoSvVOUgZ3JkvAJaI9KY0IA%2FwXdKc8p6oiaAOlh3JBCo2px0PFAzpCDAIX49foxdqSs4VwW0Egg8jBwArPFsWUaRVs7BDHIIaQqqYip67f%2BmweA7IkBj7awZk35z9eYyu%2BV%2Bk4RF4XB78QviU%2Bo6lBEbbtX3CFQvjW9snWbSNfbOAs5ag1E5A1LfaFCk%2FVRcbRRARE7TWQZm0XVjfD9XW78pBzKi4j2R7iH%2FIXJseaXLOQl3yYu89lmfWuDgu3T%2FZ9B3xCEnqKPZYDNzdG7huiHoTxIfsZbMlk3Relu3pfoa8mkF54Tc%2B1Ou8TQK5Nml0OKoublFIyU7WLebP7UvuZdlr6grzlpgvgSfMb8wme2D1AY6pgEPzs7rzb%2F%2FLZvq%2F57Zwmiq3cAzqCbBimMHIfro9JzLJYXioe1dXlh%2B0kyFbH9s3NMNJ7iGEt7FP%2B2m%2FXlcO5cYkdKNsRaL9cYSp9DZiVBoEOYQUj6alEbB0faY%2B%2FM87KmBuTv4xZe29n4wYzddo74dyzbQP7sbzsPo%2B1Dt2IZMcjYDsPw%2BBMpUM4VA%2BIoox%2Bm5DZ5EEZWScqGN4X9uKnfEL7rjdWLs&X-Amz-Signature=1274ed0318732d47142e666bea959133f421e08586ea16057d68c9f61fe4da1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474WXLTL%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAsKeqD2jS%2F6iy1SHSJWaepqFZKmXOiT%2FIttFFD7B52VAiAhm7X0kmT0BzTAUHQZHPBAzog4HIB47Y41Iis%2Bt67GCyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM3%2Fx0vbaImeUq6%2FoAKtwDBd0SStJJEhh2P34Xj46zsdFXzX%2F4y0RdvIPMceJBh3cr1gDVU7x%2Flqhe2x4r5M5%2FNsIpZw8y7Bx0WVBcqWJ0yvmeBmnipyfrpNA5CzjDY4US6Qnt4FBWnqesbi4QkiL%2FM8AL1Ieag6hQdAt77Q2CChN%2BTvYVhOaiLkRw505yU4B%2F3tGCd%2FylBE302HQ3KEvbiXugZqBYP9VzWsgYAnr9iuaoAFwt%2F9oevaDCyxSoOSeKfaNZbNM9yaBLIbzCAz7ydf5ixD629ECn2LmhbirNpoSvVOUgZ3JkvAJaI9KY0IA%2FwXdKc8p6oiaAOlh3JBCo2px0PFAzpCDAIX49foxdqSs4VwW0Egg8jBwArPFsWUaRVs7BDHIIaQqqYip67f%2BmweA7IkBj7awZk35z9eYyu%2BV%2Bk4RF4XB78QviU%2Bo6lBEbbtX3CFQvjW9snWbSNfbOAs5ag1E5A1LfaFCk%2FVRcbRRARE7TWQZm0XVjfD9XW78pBzKi4j2R7iH%2FIXJseaXLOQl3yYu89lmfWuDgu3T%2FZ9B3xCEnqKPZYDNzdG7huiHoTxIfsZbMlk3Relu3pfoa8mkF54Tc%2B1Ou8TQK5Nml0OKoublFIyU7WLebP7UvuZdlr6grzlpgvgSfMb8wme2D1AY6pgEPzs7rzb%2F%2FLZvq%2F57Zwmiq3cAzqCbBimMHIfro9JzLJYXioe1dXlh%2B0kyFbH9s3NMNJ7iGEt7FP%2B2m%2FXlcO5cYkdKNsRaL9cYSp9DZiVBoEOYQUj6alEbB0faY%2B%2FM87KmBuTv4xZe29n4wYzddo74dyzbQP7sbzsPo%2B1Dt2IZMcjYDsPw%2BBMpUM4VA%2BIoox%2Bm5DZ5EEZWScqGN4X9uKnfEL7rjdWLs&X-Amz-Signature=8d5df85ff87fb793b18c7cc0821798d10961e2bbe1dfad492bc70e195e489f30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474WXLTL%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAsKeqD2jS%2F6iy1SHSJWaepqFZKmXOiT%2FIttFFD7B52VAiAhm7X0kmT0BzTAUHQZHPBAzog4HIB47Y41Iis%2Bt67GCyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM3%2Fx0vbaImeUq6%2FoAKtwDBd0SStJJEhh2P34Xj46zsdFXzX%2F4y0RdvIPMceJBh3cr1gDVU7x%2Flqhe2x4r5M5%2FNsIpZw8y7Bx0WVBcqWJ0yvmeBmnipyfrpNA5CzjDY4US6Qnt4FBWnqesbi4QkiL%2FM8AL1Ieag6hQdAt77Q2CChN%2BTvYVhOaiLkRw505yU4B%2F3tGCd%2FylBE302HQ3KEvbiXugZqBYP9VzWsgYAnr9iuaoAFwt%2F9oevaDCyxSoOSeKfaNZbNM9yaBLIbzCAz7ydf5ixD629ECn2LmhbirNpoSvVOUgZ3JkvAJaI9KY0IA%2FwXdKc8p6oiaAOlh3JBCo2px0PFAzpCDAIX49foxdqSs4VwW0Egg8jBwArPFsWUaRVs7BDHIIaQqqYip67f%2BmweA7IkBj7awZk35z9eYyu%2BV%2Bk4RF4XB78QviU%2Bo6lBEbbtX3CFQvjW9snWbSNfbOAs5ag1E5A1LfaFCk%2FVRcbRRARE7TWQZm0XVjfD9XW78pBzKi4j2R7iH%2FIXJseaXLOQl3yYu89lmfWuDgu3T%2FZ9B3xCEnqKPZYDNzdG7huiHoTxIfsZbMlk3Relu3pfoa8mkF54Tc%2B1Ou8TQK5Nml0OKoublFIyU7WLebP7UvuZdlr6grzlpgvgSfMb8wme2D1AY6pgEPzs7rzb%2F%2FLZvq%2F57Zwmiq3cAzqCbBimMHIfro9JzLJYXioe1dXlh%2B0kyFbH9s3NMNJ7iGEt7FP%2B2m%2FXlcO5cYkdKNsRaL9cYSp9DZiVBoEOYQUj6alEbB0faY%2B%2FM87KmBuTv4xZe29n4wYzddo74dyzbQP7sbzsPo%2B1Dt2IZMcjYDsPw%2BBMpUM4VA%2BIoox%2Bm5DZ5EEZWScqGN4X9uKnfEL7rjdWLs&X-Amz-Signature=ee0b3dd0ae675ea7570ea7fb17fd86b6d10ec1d5d5698d14d6854c46f1c575a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474WXLTL%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAsKeqD2jS%2F6iy1SHSJWaepqFZKmXOiT%2FIttFFD7B52VAiAhm7X0kmT0BzTAUHQZHPBAzog4HIB47Y41Iis%2Bt67GCyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM3%2Fx0vbaImeUq6%2FoAKtwDBd0SStJJEhh2P34Xj46zsdFXzX%2F4y0RdvIPMceJBh3cr1gDVU7x%2Flqhe2x4r5M5%2FNsIpZw8y7Bx0WVBcqWJ0yvmeBmnipyfrpNA5CzjDY4US6Qnt4FBWnqesbi4QkiL%2FM8AL1Ieag6hQdAt77Q2CChN%2BTvYVhOaiLkRw505yU4B%2F3tGCd%2FylBE302HQ3KEvbiXugZqBYP9VzWsgYAnr9iuaoAFwt%2F9oevaDCyxSoOSeKfaNZbNM9yaBLIbzCAz7ydf5ixD629ECn2LmhbirNpoSvVOUgZ3JkvAJaI9KY0IA%2FwXdKc8p6oiaAOlh3JBCo2px0PFAzpCDAIX49foxdqSs4VwW0Egg8jBwArPFsWUaRVs7BDHIIaQqqYip67f%2BmweA7IkBj7awZk35z9eYyu%2BV%2Bk4RF4XB78QviU%2Bo6lBEbbtX3CFQvjW9snWbSNfbOAs5ag1E5A1LfaFCk%2FVRcbRRARE7TWQZm0XVjfD9XW78pBzKi4j2R7iH%2FIXJseaXLOQl3yYu89lmfWuDgu3T%2FZ9B3xCEnqKPZYDNzdG7huiHoTxIfsZbMlk3Relu3pfoa8mkF54Tc%2B1Ou8TQK5Nml0OKoublFIyU7WLebP7UvuZdlr6grzlpgvgSfMb8wme2D1AY6pgEPzs7rzb%2F%2FLZvq%2F57Zwmiq3cAzqCbBimMHIfro9JzLJYXioe1dXlh%2B0kyFbH9s3NMNJ7iGEt7FP%2B2m%2FXlcO5cYkdKNsRaL9cYSp9DZiVBoEOYQUj6alEbB0faY%2B%2FM87KmBuTv4xZe29n4wYzddo74dyzbQP7sbzsPo%2B1Dt2IZMcjYDsPw%2BBMpUM4VA%2BIoox%2Bm5DZ5EEZWScqGN4X9uKnfEL7rjdWLs&X-Amz-Signature=fc453978e3a8bd9b172f1ca85fa55220d06193f09429bc46d6a57f97e3383a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474WXLTL%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAsKeqD2jS%2F6iy1SHSJWaepqFZKmXOiT%2FIttFFD7B52VAiAhm7X0kmT0BzTAUHQZHPBAzog4HIB47Y41Iis%2Bt67GCyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM3%2Fx0vbaImeUq6%2FoAKtwDBd0SStJJEhh2P34Xj46zsdFXzX%2F4y0RdvIPMceJBh3cr1gDVU7x%2Flqhe2x4r5M5%2FNsIpZw8y7Bx0WVBcqWJ0yvmeBmnipyfrpNA5CzjDY4US6Qnt4FBWnqesbi4QkiL%2FM8AL1Ieag6hQdAt77Q2CChN%2BTvYVhOaiLkRw505yU4B%2F3tGCd%2FylBE302HQ3KEvbiXugZqBYP9VzWsgYAnr9iuaoAFwt%2F9oevaDCyxSoOSeKfaNZbNM9yaBLIbzCAz7ydf5ixD629ECn2LmhbirNpoSvVOUgZ3JkvAJaI9KY0IA%2FwXdKc8p6oiaAOlh3JBCo2px0PFAzpCDAIX49foxdqSs4VwW0Egg8jBwArPFsWUaRVs7BDHIIaQqqYip67f%2BmweA7IkBj7awZk35z9eYyu%2BV%2Bk4RF4XB78QviU%2Bo6lBEbbtX3CFQvjW9snWbSNfbOAs5ag1E5A1LfaFCk%2FVRcbRRARE7TWQZm0XVjfD9XW78pBzKi4j2R7iH%2FIXJseaXLOQl3yYu89lmfWuDgu3T%2FZ9B3xCEnqKPZYDNzdG7huiHoTxIfsZbMlk3Relu3pfoa8mkF54Tc%2B1Ou8TQK5Nml0OKoublFIyU7WLebP7UvuZdlr6grzlpgvgSfMb8wme2D1AY6pgEPzs7rzb%2F%2FLZvq%2F57Zwmiq3cAzqCbBimMHIfro9JzLJYXioe1dXlh%2B0kyFbH9s3NMNJ7iGEt7FP%2B2m%2FXlcO5cYkdKNsRaL9cYSp9DZiVBoEOYQUj6alEbB0faY%2B%2FM87KmBuTv4xZe29n4wYzddo74dyzbQP7sbzsPo%2B1Dt2IZMcjYDsPw%2BBMpUM4VA%2BIoox%2Bm5DZ5EEZWScqGN4X9uKnfEL7rjdWLs&X-Amz-Signature=909cebab63a18f4bcb4de52cc2dcccba1ff90647c70cf2668bbd44d48c300b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474WXLTL%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAsKeqD2jS%2F6iy1SHSJWaepqFZKmXOiT%2FIttFFD7B52VAiAhm7X0kmT0BzTAUHQZHPBAzog4HIB47Y41Iis%2Bt67GCyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM3%2Fx0vbaImeUq6%2FoAKtwDBd0SStJJEhh2P34Xj46zsdFXzX%2F4y0RdvIPMceJBh3cr1gDVU7x%2Flqhe2x4r5M5%2FNsIpZw8y7Bx0WVBcqWJ0yvmeBmnipyfrpNA5CzjDY4US6Qnt4FBWnqesbi4QkiL%2FM8AL1Ieag6hQdAt77Q2CChN%2BTvYVhOaiLkRw505yU4B%2F3tGCd%2FylBE302HQ3KEvbiXugZqBYP9VzWsgYAnr9iuaoAFwt%2F9oevaDCyxSoOSeKfaNZbNM9yaBLIbzCAz7ydf5ixD629ECn2LmhbirNpoSvVOUgZ3JkvAJaI9KY0IA%2FwXdKc8p6oiaAOlh3JBCo2px0PFAzpCDAIX49foxdqSs4VwW0Egg8jBwArPFsWUaRVs7BDHIIaQqqYip67f%2BmweA7IkBj7awZk35z9eYyu%2BV%2Bk4RF4XB78QviU%2Bo6lBEbbtX3CFQvjW9snWbSNfbOAs5ag1E5A1LfaFCk%2FVRcbRRARE7TWQZm0XVjfD9XW78pBzKi4j2R7iH%2FIXJseaXLOQl3yYu89lmfWuDgu3T%2FZ9B3xCEnqKPZYDNzdG7huiHoTxIfsZbMlk3Relu3pfoa8mkF54Tc%2B1Ou8TQK5Nml0OKoublFIyU7WLebP7UvuZdlr6grzlpgvgSfMb8wme2D1AY6pgEPzs7rzb%2F%2FLZvq%2F57Zwmiq3cAzqCbBimMHIfro9JzLJYXioe1dXlh%2B0kyFbH9s3NMNJ7iGEt7FP%2B2m%2FXlcO5cYkdKNsRaL9cYSp9DZiVBoEOYQUj6alEbB0faY%2B%2FM87KmBuTv4xZe29n4wYzddo74dyzbQP7sbzsPo%2B1Dt2IZMcjYDsPw%2BBMpUM4VA%2BIoox%2Bm5DZ5EEZWScqGN4X9uKnfEL7rjdWLs&X-Amz-Signature=f954800d2918d3c5ad422a5e4fc41405360d447e322e9b3df9f6111eba8dd031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474WXLTL%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAsKeqD2jS%2F6iy1SHSJWaepqFZKmXOiT%2FIttFFD7B52VAiAhm7X0kmT0BzTAUHQZHPBAzog4HIB47Y41Iis%2Bt67GCyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM3%2Fx0vbaImeUq6%2FoAKtwDBd0SStJJEhh2P34Xj46zsdFXzX%2F4y0RdvIPMceJBh3cr1gDVU7x%2Flqhe2x4r5M5%2FNsIpZw8y7Bx0WVBcqWJ0yvmeBmnipyfrpNA5CzjDY4US6Qnt4FBWnqesbi4QkiL%2FM8AL1Ieag6hQdAt77Q2CChN%2BTvYVhOaiLkRw505yU4B%2F3tGCd%2FylBE302HQ3KEvbiXugZqBYP9VzWsgYAnr9iuaoAFwt%2F9oevaDCyxSoOSeKfaNZbNM9yaBLIbzCAz7ydf5ixD629ECn2LmhbirNpoSvVOUgZ3JkvAJaI9KY0IA%2FwXdKc8p6oiaAOlh3JBCo2px0PFAzpCDAIX49foxdqSs4VwW0Egg8jBwArPFsWUaRVs7BDHIIaQqqYip67f%2BmweA7IkBj7awZk35z9eYyu%2BV%2Bk4RF4XB78QviU%2Bo6lBEbbtX3CFQvjW9snWbSNfbOAs5ag1E5A1LfaFCk%2FVRcbRRARE7TWQZm0XVjfD9XW78pBzKi4j2R7iH%2FIXJseaXLOQl3yYu89lmfWuDgu3T%2FZ9B3xCEnqKPZYDNzdG7huiHoTxIfsZbMlk3Relu3pfoa8mkF54Tc%2B1Ou8TQK5Nml0OKoublFIyU7WLebP7UvuZdlr6grzlpgvgSfMb8wme2D1AY6pgEPzs7rzb%2F%2FLZvq%2F57Zwmiq3cAzqCbBimMHIfro9JzLJYXioe1dXlh%2B0kyFbH9s3NMNJ7iGEt7FP%2B2m%2FXlcO5cYkdKNsRaL9cYSp9DZiVBoEOYQUj6alEbB0faY%2B%2FM87KmBuTv4xZe29n4wYzddo74dyzbQP7sbzsPo%2B1Dt2IZMcjYDsPw%2BBMpUM4VA%2BIoox%2Bm5DZ5EEZWScqGN4X9uKnfEL7rjdWLs&X-Amz-Signature=6b32a5fc460f1dd61ff57d2197a236baaa3cb78e791783acb6110b2f82337f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474WXLTL%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAsKeqD2jS%2F6iy1SHSJWaepqFZKmXOiT%2FIttFFD7B52VAiAhm7X0kmT0BzTAUHQZHPBAzog4HIB47Y41Iis%2Bt67GCyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM3%2Fx0vbaImeUq6%2FoAKtwDBd0SStJJEhh2P34Xj46zsdFXzX%2F4y0RdvIPMceJBh3cr1gDVU7x%2Flqhe2x4r5M5%2FNsIpZw8y7Bx0WVBcqWJ0yvmeBmnipyfrpNA5CzjDY4US6Qnt4FBWnqesbi4QkiL%2FM8AL1Ieag6hQdAt77Q2CChN%2BTvYVhOaiLkRw505yU4B%2F3tGCd%2FylBE302HQ3KEvbiXugZqBYP9VzWsgYAnr9iuaoAFwt%2F9oevaDCyxSoOSeKfaNZbNM9yaBLIbzCAz7ydf5ixD629ECn2LmhbirNpoSvVOUgZ3JkvAJaI9KY0IA%2FwXdKc8p6oiaAOlh3JBCo2px0PFAzpCDAIX49foxdqSs4VwW0Egg8jBwArPFsWUaRVs7BDHIIaQqqYip67f%2BmweA7IkBj7awZk35z9eYyu%2BV%2Bk4RF4XB78QviU%2Bo6lBEbbtX3CFQvjW9snWbSNfbOAs5ag1E5A1LfaFCk%2FVRcbRRARE7TWQZm0XVjfD9XW78pBzKi4j2R7iH%2FIXJseaXLOQl3yYu89lmfWuDgu3T%2FZ9B3xCEnqKPZYDNzdG7huiHoTxIfsZbMlk3Relu3pfoa8mkF54Tc%2B1Ou8TQK5Nml0OKoublFIyU7WLebP7UvuZdlr6grzlpgvgSfMb8wme2D1AY6pgEPzs7rzb%2F%2FLZvq%2F57Zwmiq3cAzqCbBimMHIfro9JzLJYXioe1dXlh%2B0kyFbH9s3NMNJ7iGEt7FP%2B2m%2FXlcO5cYkdKNsRaL9cYSp9DZiVBoEOYQUj6alEbB0faY%2B%2FM87KmBuTv4xZe29n4wYzddo74dyzbQP7sbzsPo%2B1Dt2IZMcjYDsPw%2BBMpUM4VA%2BIoox%2Bm5DZ5EEZWScqGN4X9uKnfEL7rjdWLs&X-Amz-Signature=01f1ee309675e009438cf5979a5cdba58417383cbb30cbaf89cbe35276d9a680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474WXLTL%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAsKeqD2jS%2F6iy1SHSJWaepqFZKmXOiT%2FIttFFD7B52VAiAhm7X0kmT0BzTAUHQZHPBAzog4HIB47Y41Iis%2Bt67GCyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM3%2Fx0vbaImeUq6%2FoAKtwDBd0SStJJEhh2P34Xj46zsdFXzX%2F4y0RdvIPMceJBh3cr1gDVU7x%2Flqhe2x4r5M5%2FNsIpZw8y7Bx0WVBcqWJ0yvmeBmnipyfrpNA5CzjDY4US6Qnt4FBWnqesbi4QkiL%2FM8AL1Ieag6hQdAt77Q2CChN%2BTvYVhOaiLkRw505yU4B%2F3tGCd%2FylBE302HQ3KEvbiXugZqBYP9VzWsgYAnr9iuaoAFwt%2F9oevaDCyxSoOSeKfaNZbNM9yaBLIbzCAz7ydf5ixD629ECn2LmhbirNpoSvVOUgZ3JkvAJaI9KY0IA%2FwXdKc8p6oiaAOlh3JBCo2px0PFAzpCDAIX49foxdqSs4VwW0Egg8jBwArPFsWUaRVs7BDHIIaQqqYip67f%2BmweA7IkBj7awZk35z9eYyu%2BV%2Bk4RF4XB78QviU%2Bo6lBEbbtX3CFQvjW9snWbSNfbOAs5ag1E5A1LfaFCk%2FVRcbRRARE7TWQZm0XVjfD9XW78pBzKi4j2R7iH%2FIXJseaXLOQl3yYu89lmfWuDgu3T%2FZ9B3xCEnqKPZYDNzdG7huiHoTxIfsZbMlk3Relu3pfoa8mkF54Tc%2B1Ou8TQK5Nml0OKoublFIyU7WLebP7UvuZdlr6grzlpgvgSfMb8wme2D1AY6pgEPzs7rzb%2F%2FLZvq%2F57Zwmiq3cAzqCbBimMHIfro9JzLJYXioe1dXlh%2B0kyFbH9s3NMNJ7iGEt7FP%2B2m%2FXlcO5cYkdKNsRaL9cYSp9DZiVBoEOYQUj6alEbB0faY%2B%2FM87KmBuTv4xZe29n4wYzddo74dyzbQP7sbzsPo%2B1Dt2IZMcjYDsPw%2BBMpUM4VA%2BIoox%2Bm5DZ5EEZWScqGN4X9uKnfEL7rjdWLs&X-Amz-Signature=e620028626e48eae80efdfd358a3663a0e82dcba1cad25956ab9947e488c6dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
