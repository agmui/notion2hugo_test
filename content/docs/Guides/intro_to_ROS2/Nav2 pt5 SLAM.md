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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNX2PKVZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDyH%2FdHEz0ziDEUU3dc%2BQOSzr%2FKn1wQOSKLdkOx%2FROcsQIgD3JwCnX%2FsiCdCT0HcrmP3Dtsxa1X0B5LDbuM90dWFtgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDP06%2B%2BQxdIRGxUcSHyrcA0480qUiCJsn7C5u848FipdVxNO0RRcAVQPT%2FtSs84ChT5h2Jk6s%2BvTrNTJDuNrh%2FTfaNqT%2BuXB0DR2Lrz02PpIJVOSeMgMNTH7Oogy539nm0SPEXzvAr5vi%2B5pgtjgn9d88Rg7k3QxkFHnGlNTpICDGsFC%2FZjR8o3r5IsyfyW%2BkuKnUloOEVzx5l5%2BgVS%2BaOdPAsLKifwbLxDsQo44XuhbwR%2FCq7KlQoHjl9HUlyLryJHwxhASoFTv3oFBRfhIaaqTzabMUP%2B66FURNZxBRT8kxvJVNLA%2FojnHr3JCCGADRzkfMoVt9sUCibmRyaCB7PZXur%2Bvj7pZFOAaJPbHozBBjLjZ%2BKIesWXwgXgn5KRu0iTQhIiJHFK9%2Fa5YiKhqTAQbz%2BtrodZuj7gHVIdJQQVzn95t5PGQniNJXEFXlq0jDxgpN3%2Bni5Q%2B4lkLwadLLSHO2uzPu6CU%2FBTJaDVMupsGWdOCTzoM9k9mA7gO4rKGzK%2BJyP3GPbm4aDiWMToqfpM6CZId8%2BQlCY2rQBkw026bLWNH1hSVsOMTo7SQSL9YNRZ8O5x1UHfolTewD4bhDZNig3hdQzp3JinKP0qc2a5sRHNYcWHoOBd%2BXo%2F347%2BRo6pJFnhm3M%2FBX95b%2BMLqsx8QGOqUB6999p2OwRvWiXtK1I9w%2Fipi%2FG106MqNn0Mzh5FAqLlYvimC46wwNB7ZL9NIc%2Bj1HKgwVVhSE6mXC%2Bwo9KpRd5FFYy7eEATVVu6IbEMbw%2BG%2Bmvl0JkL1M8ReO1xAC9lHKAYtc3Xjq596XF17cB%2BqMfXHVn3GgvP7CtkGF5CRZA9fNGRhx9aV7ULAnSkfeQhqJLfAIovL1VRmk7U2k%2BWqn1MwwOE2A&X-Amz-Signature=98ef9e4c4ca82d7578df01ac5f95995be8a4576e9c1ad91ebd6dd4a1d01e151c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNX2PKVZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDyH%2FdHEz0ziDEUU3dc%2BQOSzr%2FKn1wQOSKLdkOx%2FROcsQIgD3JwCnX%2FsiCdCT0HcrmP3Dtsxa1X0B5LDbuM90dWFtgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDP06%2B%2BQxdIRGxUcSHyrcA0480qUiCJsn7C5u848FipdVxNO0RRcAVQPT%2FtSs84ChT5h2Jk6s%2BvTrNTJDuNrh%2FTfaNqT%2BuXB0DR2Lrz02PpIJVOSeMgMNTH7Oogy539nm0SPEXzvAr5vi%2B5pgtjgn9d88Rg7k3QxkFHnGlNTpICDGsFC%2FZjR8o3r5IsyfyW%2BkuKnUloOEVzx5l5%2BgVS%2BaOdPAsLKifwbLxDsQo44XuhbwR%2FCq7KlQoHjl9HUlyLryJHwxhASoFTv3oFBRfhIaaqTzabMUP%2B66FURNZxBRT8kxvJVNLA%2FojnHr3JCCGADRzkfMoVt9sUCibmRyaCB7PZXur%2Bvj7pZFOAaJPbHozBBjLjZ%2BKIesWXwgXgn5KRu0iTQhIiJHFK9%2Fa5YiKhqTAQbz%2BtrodZuj7gHVIdJQQVzn95t5PGQniNJXEFXlq0jDxgpN3%2Bni5Q%2B4lkLwadLLSHO2uzPu6CU%2FBTJaDVMupsGWdOCTzoM9k9mA7gO4rKGzK%2BJyP3GPbm4aDiWMToqfpM6CZId8%2BQlCY2rQBkw026bLWNH1hSVsOMTo7SQSL9YNRZ8O5x1UHfolTewD4bhDZNig3hdQzp3JinKP0qc2a5sRHNYcWHoOBd%2BXo%2F347%2BRo6pJFnhm3M%2FBX95b%2BMLqsx8QGOqUB6999p2OwRvWiXtK1I9w%2Fipi%2FG106MqNn0Mzh5FAqLlYvimC46wwNB7ZL9NIc%2Bj1HKgwVVhSE6mXC%2Bwo9KpRd5FFYy7eEATVVu6IbEMbw%2BG%2Bmvl0JkL1M8ReO1xAC9lHKAYtc3Xjq596XF17cB%2BqMfXHVn3GgvP7CtkGF5CRZA9fNGRhx9aV7ULAnSkfeQhqJLfAIovL1VRmk7U2k%2BWqn1MwwOE2A&X-Amz-Signature=01ad4963d2eba8faf115708167a796cbcec4c521dcc48a630fe278ed58128867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNX2PKVZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDyH%2FdHEz0ziDEUU3dc%2BQOSzr%2FKn1wQOSKLdkOx%2FROcsQIgD3JwCnX%2FsiCdCT0HcrmP3Dtsxa1X0B5LDbuM90dWFtgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDP06%2B%2BQxdIRGxUcSHyrcA0480qUiCJsn7C5u848FipdVxNO0RRcAVQPT%2FtSs84ChT5h2Jk6s%2BvTrNTJDuNrh%2FTfaNqT%2BuXB0DR2Lrz02PpIJVOSeMgMNTH7Oogy539nm0SPEXzvAr5vi%2B5pgtjgn9d88Rg7k3QxkFHnGlNTpICDGsFC%2FZjR8o3r5IsyfyW%2BkuKnUloOEVzx5l5%2BgVS%2BaOdPAsLKifwbLxDsQo44XuhbwR%2FCq7KlQoHjl9HUlyLryJHwxhASoFTv3oFBRfhIaaqTzabMUP%2B66FURNZxBRT8kxvJVNLA%2FojnHr3JCCGADRzkfMoVt9sUCibmRyaCB7PZXur%2Bvj7pZFOAaJPbHozBBjLjZ%2BKIesWXwgXgn5KRu0iTQhIiJHFK9%2Fa5YiKhqTAQbz%2BtrodZuj7gHVIdJQQVzn95t5PGQniNJXEFXlq0jDxgpN3%2Bni5Q%2B4lkLwadLLSHO2uzPu6CU%2FBTJaDVMupsGWdOCTzoM9k9mA7gO4rKGzK%2BJyP3GPbm4aDiWMToqfpM6CZId8%2BQlCY2rQBkw026bLWNH1hSVsOMTo7SQSL9YNRZ8O5x1UHfolTewD4bhDZNig3hdQzp3JinKP0qc2a5sRHNYcWHoOBd%2BXo%2F347%2BRo6pJFnhm3M%2FBX95b%2BMLqsx8QGOqUB6999p2OwRvWiXtK1I9w%2Fipi%2FG106MqNn0Mzh5FAqLlYvimC46wwNB7ZL9NIc%2Bj1HKgwVVhSE6mXC%2Bwo9KpRd5FFYy7eEATVVu6IbEMbw%2BG%2Bmvl0JkL1M8ReO1xAC9lHKAYtc3Xjq596XF17cB%2BqMfXHVn3GgvP7CtkGF5CRZA9fNGRhx9aV7ULAnSkfeQhqJLfAIovL1VRmk7U2k%2BWqn1MwwOE2A&X-Amz-Signature=654630cc156dc3374f44b84dacff828ba8fe44cc143b1833e577047faa14b073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNX2PKVZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDyH%2FdHEz0ziDEUU3dc%2BQOSzr%2FKn1wQOSKLdkOx%2FROcsQIgD3JwCnX%2FsiCdCT0HcrmP3Dtsxa1X0B5LDbuM90dWFtgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDP06%2B%2BQxdIRGxUcSHyrcA0480qUiCJsn7C5u848FipdVxNO0RRcAVQPT%2FtSs84ChT5h2Jk6s%2BvTrNTJDuNrh%2FTfaNqT%2BuXB0DR2Lrz02PpIJVOSeMgMNTH7Oogy539nm0SPEXzvAr5vi%2B5pgtjgn9d88Rg7k3QxkFHnGlNTpICDGsFC%2FZjR8o3r5IsyfyW%2BkuKnUloOEVzx5l5%2BgVS%2BaOdPAsLKifwbLxDsQo44XuhbwR%2FCq7KlQoHjl9HUlyLryJHwxhASoFTv3oFBRfhIaaqTzabMUP%2B66FURNZxBRT8kxvJVNLA%2FojnHr3JCCGADRzkfMoVt9sUCibmRyaCB7PZXur%2Bvj7pZFOAaJPbHozBBjLjZ%2BKIesWXwgXgn5KRu0iTQhIiJHFK9%2Fa5YiKhqTAQbz%2BtrodZuj7gHVIdJQQVzn95t5PGQniNJXEFXlq0jDxgpN3%2Bni5Q%2B4lkLwadLLSHO2uzPu6CU%2FBTJaDVMupsGWdOCTzoM9k9mA7gO4rKGzK%2BJyP3GPbm4aDiWMToqfpM6CZId8%2BQlCY2rQBkw026bLWNH1hSVsOMTo7SQSL9YNRZ8O5x1UHfolTewD4bhDZNig3hdQzp3JinKP0qc2a5sRHNYcWHoOBd%2BXo%2F347%2BRo6pJFnhm3M%2FBX95b%2BMLqsx8QGOqUB6999p2OwRvWiXtK1I9w%2Fipi%2FG106MqNn0Mzh5FAqLlYvimC46wwNB7ZL9NIc%2Bj1HKgwVVhSE6mXC%2Bwo9KpRd5FFYy7eEATVVu6IbEMbw%2BG%2Bmvl0JkL1M8ReO1xAC9lHKAYtc3Xjq596XF17cB%2BqMfXHVn3GgvP7CtkGF5CRZA9fNGRhx9aV7ULAnSkfeQhqJLfAIovL1VRmk7U2k%2BWqn1MwwOE2A&X-Amz-Signature=025e8154acd28efa8e3e8e14ddbf4508a4863166f19e45b9223db1e1718b65bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNX2PKVZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDyH%2FdHEz0ziDEUU3dc%2BQOSzr%2FKn1wQOSKLdkOx%2FROcsQIgD3JwCnX%2FsiCdCT0HcrmP3Dtsxa1X0B5LDbuM90dWFtgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDP06%2B%2BQxdIRGxUcSHyrcA0480qUiCJsn7C5u848FipdVxNO0RRcAVQPT%2FtSs84ChT5h2Jk6s%2BvTrNTJDuNrh%2FTfaNqT%2BuXB0DR2Lrz02PpIJVOSeMgMNTH7Oogy539nm0SPEXzvAr5vi%2B5pgtjgn9d88Rg7k3QxkFHnGlNTpICDGsFC%2FZjR8o3r5IsyfyW%2BkuKnUloOEVzx5l5%2BgVS%2BaOdPAsLKifwbLxDsQo44XuhbwR%2FCq7KlQoHjl9HUlyLryJHwxhASoFTv3oFBRfhIaaqTzabMUP%2B66FURNZxBRT8kxvJVNLA%2FojnHr3JCCGADRzkfMoVt9sUCibmRyaCB7PZXur%2Bvj7pZFOAaJPbHozBBjLjZ%2BKIesWXwgXgn5KRu0iTQhIiJHFK9%2Fa5YiKhqTAQbz%2BtrodZuj7gHVIdJQQVzn95t5PGQniNJXEFXlq0jDxgpN3%2Bni5Q%2B4lkLwadLLSHO2uzPu6CU%2FBTJaDVMupsGWdOCTzoM9k9mA7gO4rKGzK%2BJyP3GPbm4aDiWMToqfpM6CZId8%2BQlCY2rQBkw026bLWNH1hSVsOMTo7SQSL9YNRZ8O5x1UHfolTewD4bhDZNig3hdQzp3JinKP0qc2a5sRHNYcWHoOBd%2BXo%2F347%2BRo6pJFnhm3M%2FBX95b%2BMLqsx8QGOqUB6999p2OwRvWiXtK1I9w%2Fipi%2FG106MqNn0Mzh5FAqLlYvimC46wwNB7ZL9NIc%2Bj1HKgwVVhSE6mXC%2Bwo9KpRd5FFYy7eEATVVu6IbEMbw%2BG%2Bmvl0JkL1M8ReO1xAC9lHKAYtc3Xjq596XF17cB%2BqMfXHVn3GgvP7CtkGF5CRZA9fNGRhx9aV7ULAnSkfeQhqJLfAIovL1VRmk7U2k%2BWqn1MwwOE2A&X-Amz-Signature=4eb4456338cf9dc3996f96635bea76738896c8cdd17b31167dbeef593dfe07ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNX2PKVZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDyH%2FdHEz0ziDEUU3dc%2BQOSzr%2FKn1wQOSKLdkOx%2FROcsQIgD3JwCnX%2FsiCdCT0HcrmP3Dtsxa1X0B5LDbuM90dWFtgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDP06%2B%2BQxdIRGxUcSHyrcA0480qUiCJsn7C5u848FipdVxNO0RRcAVQPT%2FtSs84ChT5h2Jk6s%2BvTrNTJDuNrh%2FTfaNqT%2BuXB0DR2Lrz02PpIJVOSeMgMNTH7Oogy539nm0SPEXzvAr5vi%2B5pgtjgn9d88Rg7k3QxkFHnGlNTpICDGsFC%2FZjR8o3r5IsyfyW%2BkuKnUloOEVzx5l5%2BgVS%2BaOdPAsLKifwbLxDsQo44XuhbwR%2FCq7KlQoHjl9HUlyLryJHwxhASoFTv3oFBRfhIaaqTzabMUP%2B66FURNZxBRT8kxvJVNLA%2FojnHr3JCCGADRzkfMoVt9sUCibmRyaCB7PZXur%2Bvj7pZFOAaJPbHozBBjLjZ%2BKIesWXwgXgn5KRu0iTQhIiJHFK9%2Fa5YiKhqTAQbz%2BtrodZuj7gHVIdJQQVzn95t5PGQniNJXEFXlq0jDxgpN3%2Bni5Q%2B4lkLwadLLSHO2uzPu6CU%2FBTJaDVMupsGWdOCTzoM9k9mA7gO4rKGzK%2BJyP3GPbm4aDiWMToqfpM6CZId8%2BQlCY2rQBkw026bLWNH1hSVsOMTo7SQSL9YNRZ8O5x1UHfolTewD4bhDZNig3hdQzp3JinKP0qc2a5sRHNYcWHoOBd%2BXo%2F347%2BRo6pJFnhm3M%2FBX95b%2BMLqsx8QGOqUB6999p2OwRvWiXtK1I9w%2Fipi%2FG106MqNn0Mzh5FAqLlYvimC46wwNB7ZL9NIc%2Bj1HKgwVVhSE6mXC%2Bwo9KpRd5FFYy7eEATVVu6IbEMbw%2BG%2Bmvl0JkL1M8ReO1xAC9lHKAYtc3Xjq596XF17cB%2BqMfXHVn3GgvP7CtkGF5CRZA9fNGRhx9aV7ULAnSkfeQhqJLfAIovL1VRmk7U2k%2BWqn1MwwOE2A&X-Amz-Signature=865f71d05937a997bf4347348ff7d42cb86bbd62f525bb4da0f0e097ca5e90fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNX2PKVZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDyH%2FdHEz0ziDEUU3dc%2BQOSzr%2FKn1wQOSKLdkOx%2FROcsQIgD3JwCnX%2FsiCdCT0HcrmP3Dtsxa1X0B5LDbuM90dWFtgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDP06%2B%2BQxdIRGxUcSHyrcA0480qUiCJsn7C5u848FipdVxNO0RRcAVQPT%2FtSs84ChT5h2Jk6s%2BvTrNTJDuNrh%2FTfaNqT%2BuXB0DR2Lrz02PpIJVOSeMgMNTH7Oogy539nm0SPEXzvAr5vi%2B5pgtjgn9d88Rg7k3QxkFHnGlNTpICDGsFC%2FZjR8o3r5IsyfyW%2BkuKnUloOEVzx5l5%2BgVS%2BaOdPAsLKifwbLxDsQo44XuhbwR%2FCq7KlQoHjl9HUlyLryJHwxhASoFTv3oFBRfhIaaqTzabMUP%2B66FURNZxBRT8kxvJVNLA%2FojnHr3JCCGADRzkfMoVt9sUCibmRyaCB7PZXur%2Bvj7pZFOAaJPbHozBBjLjZ%2BKIesWXwgXgn5KRu0iTQhIiJHFK9%2Fa5YiKhqTAQbz%2BtrodZuj7gHVIdJQQVzn95t5PGQniNJXEFXlq0jDxgpN3%2Bni5Q%2B4lkLwadLLSHO2uzPu6CU%2FBTJaDVMupsGWdOCTzoM9k9mA7gO4rKGzK%2BJyP3GPbm4aDiWMToqfpM6CZId8%2BQlCY2rQBkw026bLWNH1hSVsOMTo7SQSL9YNRZ8O5x1UHfolTewD4bhDZNig3hdQzp3JinKP0qc2a5sRHNYcWHoOBd%2BXo%2F347%2BRo6pJFnhm3M%2FBX95b%2BMLqsx8QGOqUB6999p2OwRvWiXtK1I9w%2Fipi%2FG106MqNn0Mzh5FAqLlYvimC46wwNB7ZL9NIc%2Bj1HKgwVVhSE6mXC%2Bwo9KpRd5FFYy7eEATVVu6IbEMbw%2BG%2Bmvl0JkL1M8ReO1xAC9lHKAYtc3Xjq596XF17cB%2BqMfXHVn3GgvP7CtkGF5CRZA9fNGRhx9aV7ULAnSkfeQhqJLfAIovL1VRmk7U2k%2BWqn1MwwOE2A&X-Amz-Signature=ae63adb03e1e35e48443501495b78ab0dab9d09052f01aae3f4ac076a7b03299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNX2PKVZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDyH%2FdHEz0ziDEUU3dc%2BQOSzr%2FKn1wQOSKLdkOx%2FROcsQIgD3JwCnX%2FsiCdCT0HcrmP3Dtsxa1X0B5LDbuM90dWFtgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDP06%2B%2BQxdIRGxUcSHyrcA0480qUiCJsn7C5u848FipdVxNO0RRcAVQPT%2FtSs84ChT5h2Jk6s%2BvTrNTJDuNrh%2FTfaNqT%2BuXB0DR2Lrz02PpIJVOSeMgMNTH7Oogy539nm0SPEXzvAr5vi%2B5pgtjgn9d88Rg7k3QxkFHnGlNTpICDGsFC%2FZjR8o3r5IsyfyW%2BkuKnUloOEVzx5l5%2BgVS%2BaOdPAsLKifwbLxDsQo44XuhbwR%2FCq7KlQoHjl9HUlyLryJHwxhASoFTv3oFBRfhIaaqTzabMUP%2B66FURNZxBRT8kxvJVNLA%2FojnHr3JCCGADRzkfMoVt9sUCibmRyaCB7PZXur%2Bvj7pZFOAaJPbHozBBjLjZ%2BKIesWXwgXgn5KRu0iTQhIiJHFK9%2Fa5YiKhqTAQbz%2BtrodZuj7gHVIdJQQVzn95t5PGQniNJXEFXlq0jDxgpN3%2Bni5Q%2B4lkLwadLLSHO2uzPu6CU%2FBTJaDVMupsGWdOCTzoM9k9mA7gO4rKGzK%2BJyP3GPbm4aDiWMToqfpM6CZId8%2BQlCY2rQBkw026bLWNH1hSVsOMTo7SQSL9YNRZ8O5x1UHfolTewD4bhDZNig3hdQzp3JinKP0qc2a5sRHNYcWHoOBd%2BXo%2F347%2BRo6pJFnhm3M%2FBX95b%2BMLqsx8QGOqUB6999p2OwRvWiXtK1I9w%2Fipi%2FG106MqNn0Mzh5FAqLlYvimC46wwNB7ZL9NIc%2Bj1HKgwVVhSE6mXC%2Bwo9KpRd5FFYy7eEATVVu6IbEMbw%2BG%2Bmvl0JkL1M8ReO1xAC9lHKAYtc3Xjq596XF17cB%2BqMfXHVn3GgvP7CtkGF5CRZA9fNGRhx9aV7ULAnSkfeQhqJLfAIovL1VRmk7U2k%2BWqn1MwwOE2A&X-Amz-Signature=672767561a5a8b7d7121a5c805ad52764ca841305a00739c36ab345c5daca709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNX2PKVZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDyH%2FdHEz0ziDEUU3dc%2BQOSzr%2FKn1wQOSKLdkOx%2FROcsQIgD3JwCnX%2FsiCdCT0HcrmP3Dtsxa1X0B5LDbuM90dWFtgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDP06%2B%2BQxdIRGxUcSHyrcA0480qUiCJsn7C5u848FipdVxNO0RRcAVQPT%2FtSs84ChT5h2Jk6s%2BvTrNTJDuNrh%2FTfaNqT%2BuXB0DR2Lrz02PpIJVOSeMgMNTH7Oogy539nm0SPEXzvAr5vi%2B5pgtjgn9d88Rg7k3QxkFHnGlNTpICDGsFC%2FZjR8o3r5IsyfyW%2BkuKnUloOEVzx5l5%2BgVS%2BaOdPAsLKifwbLxDsQo44XuhbwR%2FCq7KlQoHjl9HUlyLryJHwxhASoFTv3oFBRfhIaaqTzabMUP%2B66FURNZxBRT8kxvJVNLA%2FojnHr3JCCGADRzkfMoVt9sUCibmRyaCB7PZXur%2Bvj7pZFOAaJPbHozBBjLjZ%2BKIesWXwgXgn5KRu0iTQhIiJHFK9%2Fa5YiKhqTAQbz%2BtrodZuj7gHVIdJQQVzn95t5PGQniNJXEFXlq0jDxgpN3%2Bni5Q%2B4lkLwadLLSHO2uzPu6CU%2FBTJaDVMupsGWdOCTzoM9k9mA7gO4rKGzK%2BJyP3GPbm4aDiWMToqfpM6CZId8%2BQlCY2rQBkw026bLWNH1hSVsOMTo7SQSL9YNRZ8O5x1UHfolTewD4bhDZNig3hdQzp3JinKP0qc2a5sRHNYcWHoOBd%2BXo%2F347%2BRo6pJFnhm3M%2FBX95b%2BMLqsx8QGOqUB6999p2OwRvWiXtK1I9w%2Fipi%2FG106MqNn0Mzh5FAqLlYvimC46wwNB7ZL9NIc%2Bj1HKgwVVhSE6mXC%2Bwo9KpRd5FFYy7eEATVVu6IbEMbw%2BG%2Bmvl0JkL1M8ReO1xAC9lHKAYtc3Xjq596XF17cB%2BqMfXHVn3GgvP7CtkGF5CRZA9fNGRhx9aV7ULAnSkfeQhqJLfAIovL1VRmk7U2k%2BWqn1MwwOE2A&X-Amz-Signature=ffa08169da1cd9a508a2b88343d2e0fcd66457fb8341d498ae38d64e63f0ef96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNX2PKVZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDyH%2FdHEz0ziDEUU3dc%2BQOSzr%2FKn1wQOSKLdkOx%2FROcsQIgD3JwCnX%2FsiCdCT0HcrmP3Dtsxa1X0B5LDbuM90dWFtgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDP06%2B%2BQxdIRGxUcSHyrcA0480qUiCJsn7C5u848FipdVxNO0RRcAVQPT%2FtSs84ChT5h2Jk6s%2BvTrNTJDuNrh%2FTfaNqT%2BuXB0DR2Lrz02PpIJVOSeMgMNTH7Oogy539nm0SPEXzvAr5vi%2B5pgtjgn9d88Rg7k3QxkFHnGlNTpICDGsFC%2FZjR8o3r5IsyfyW%2BkuKnUloOEVzx5l5%2BgVS%2BaOdPAsLKifwbLxDsQo44XuhbwR%2FCq7KlQoHjl9HUlyLryJHwxhASoFTv3oFBRfhIaaqTzabMUP%2B66FURNZxBRT8kxvJVNLA%2FojnHr3JCCGADRzkfMoVt9sUCibmRyaCB7PZXur%2Bvj7pZFOAaJPbHozBBjLjZ%2BKIesWXwgXgn5KRu0iTQhIiJHFK9%2Fa5YiKhqTAQbz%2BtrodZuj7gHVIdJQQVzn95t5PGQniNJXEFXlq0jDxgpN3%2Bni5Q%2B4lkLwadLLSHO2uzPu6CU%2FBTJaDVMupsGWdOCTzoM9k9mA7gO4rKGzK%2BJyP3GPbm4aDiWMToqfpM6CZId8%2BQlCY2rQBkw026bLWNH1hSVsOMTo7SQSL9YNRZ8O5x1UHfolTewD4bhDZNig3hdQzp3JinKP0qc2a5sRHNYcWHoOBd%2BXo%2F347%2BRo6pJFnhm3M%2FBX95b%2BMLqsx8QGOqUB6999p2OwRvWiXtK1I9w%2Fipi%2FG106MqNn0Mzh5FAqLlYvimC46wwNB7ZL9NIc%2Bj1HKgwVVhSE6mXC%2Bwo9KpRd5FFYy7eEATVVu6IbEMbw%2BG%2Bmvl0JkL1M8ReO1xAC9lHKAYtc3Xjq596XF17cB%2BqMfXHVn3GgvP7CtkGF5CRZA9fNGRhx9aV7ULAnSkfeQhqJLfAIovL1VRmk7U2k%2BWqn1MwwOE2A&X-Amz-Signature=481f92c3766b92f2f0c3211c6a497e692409ca82ba598503b682b63693c27dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNX2PKVZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDyH%2FdHEz0ziDEUU3dc%2BQOSzr%2FKn1wQOSKLdkOx%2FROcsQIgD3JwCnX%2FsiCdCT0HcrmP3Dtsxa1X0B5LDbuM90dWFtgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDP06%2B%2BQxdIRGxUcSHyrcA0480qUiCJsn7C5u848FipdVxNO0RRcAVQPT%2FtSs84ChT5h2Jk6s%2BvTrNTJDuNrh%2FTfaNqT%2BuXB0DR2Lrz02PpIJVOSeMgMNTH7Oogy539nm0SPEXzvAr5vi%2B5pgtjgn9d88Rg7k3QxkFHnGlNTpICDGsFC%2FZjR8o3r5IsyfyW%2BkuKnUloOEVzx5l5%2BgVS%2BaOdPAsLKifwbLxDsQo44XuhbwR%2FCq7KlQoHjl9HUlyLryJHwxhASoFTv3oFBRfhIaaqTzabMUP%2B66FURNZxBRT8kxvJVNLA%2FojnHr3JCCGADRzkfMoVt9sUCibmRyaCB7PZXur%2Bvj7pZFOAaJPbHozBBjLjZ%2BKIesWXwgXgn5KRu0iTQhIiJHFK9%2Fa5YiKhqTAQbz%2BtrodZuj7gHVIdJQQVzn95t5PGQniNJXEFXlq0jDxgpN3%2Bni5Q%2B4lkLwadLLSHO2uzPu6CU%2FBTJaDVMupsGWdOCTzoM9k9mA7gO4rKGzK%2BJyP3GPbm4aDiWMToqfpM6CZId8%2BQlCY2rQBkw026bLWNH1hSVsOMTo7SQSL9YNRZ8O5x1UHfolTewD4bhDZNig3hdQzp3JinKP0qc2a5sRHNYcWHoOBd%2BXo%2F347%2BRo6pJFnhm3M%2FBX95b%2BMLqsx8QGOqUB6999p2OwRvWiXtK1I9w%2Fipi%2FG106MqNn0Mzh5FAqLlYvimC46wwNB7ZL9NIc%2Bj1HKgwVVhSE6mXC%2Bwo9KpRd5FFYy7eEATVVu6IbEMbw%2BG%2Bmvl0JkL1M8ReO1xAC9lHKAYtc3Xjq596XF17cB%2BqMfXHVn3GgvP7CtkGF5CRZA9fNGRhx9aV7ULAnSkfeQhqJLfAIovL1VRmk7U2k%2BWqn1MwwOE2A&X-Amz-Signature=824a3aba53ddce8cacfca014d25ac6b5fa04975d789ac38b3a553547f55da55d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNX2PKVZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDyH%2FdHEz0ziDEUU3dc%2BQOSzr%2FKn1wQOSKLdkOx%2FROcsQIgD3JwCnX%2FsiCdCT0HcrmP3Dtsxa1X0B5LDbuM90dWFtgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDP06%2B%2BQxdIRGxUcSHyrcA0480qUiCJsn7C5u848FipdVxNO0RRcAVQPT%2FtSs84ChT5h2Jk6s%2BvTrNTJDuNrh%2FTfaNqT%2BuXB0DR2Lrz02PpIJVOSeMgMNTH7Oogy539nm0SPEXzvAr5vi%2B5pgtjgn9d88Rg7k3QxkFHnGlNTpICDGsFC%2FZjR8o3r5IsyfyW%2BkuKnUloOEVzx5l5%2BgVS%2BaOdPAsLKifwbLxDsQo44XuhbwR%2FCq7KlQoHjl9HUlyLryJHwxhASoFTv3oFBRfhIaaqTzabMUP%2B66FURNZxBRT8kxvJVNLA%2FojnHr3JCCGADRzkfMoVt9sUCibmRyaCB7PZXur%2Bvj7pZFOAaJPbHozBBjLjZ%2BKIesWXwgXgn5KRu0iTQhIiJHFK9%2Fa5YiKhqTAQbz%2BtrodZuj7gHVIdJQQVzn95t5PGQniNJXEFXlq0jDxgpN3%2Bni5Q%2B4lkLwadLLSHO2uzPu6CU%2FBTJaDVMupsGWdOCTzoM9k9mA7gO4rKGzK%2BJyP3GPbm4aDiWMToqfpM6CZId8%2BQlCY2rQBkw026bLWNH1hSVsOMTo7SQSL9YNRZ8O5x1UHfolTewD4bhDZNig3hdQzp3JinKP0qc2a5sRHNYcWHoOBd%2BXo%2F347%2BRo6pJFnhm3M%2FBX95b%2BMLqsx8QGOqUB6999p2OwRvWiXtK1I9w%2Fipi%2FG106MqNn0Mzh5FAqLlYvimC46wwNB7ZL9NIc%2Bj1HKgwVVhSE6mXC%2Bwo9KpRd5FFYy7eEATVVu6IbEMbw%2BG%2Bmvl0JkL1M8ReO1xAC9lHKAYtc3Xjq596XF17cB%2BqMfXHVn3GgvP7CtkGF5CRZA9fNGRhx9aV7ULAnSkfeQhqJLfAIovL1VRmk7U2k%2BWqn1MwwOE2A&X-Amz-Signature=30bbbdbb9375fe79a4b19c83d6489cd4f51995a090509fc8b4400f5da271a29d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNX2PKVZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDyH%2FdHEz0ziDEUU3dc%2BQOSzr%2FKn1wQOSKLdkOx%2FROcsQIgD3JwCnX%2FsiCdCT0HcrmP3Dtsxa1X0B5LDbuM90dWFtgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDP06%2B%2BQxdIRGxUcSHyrcA0480qUiCJsn7C5u848FipdVxNO0RRcAVQPT%2FtSs84ChT5h2Jk6s%2BvTrNTJDuNrh%2FTfaNqT%2BuXB0DR2Lrz02PpIJVOSeMgMNTH7Oogy539nm0SPEXzvAr5vi%2B5pgtjgn9d88Rg7k3QxkFHnGlNTpICDGsFC%2FZjR8o3r5IsyfyW%2BkuKnUloOEVzx5l5%2BgVS%2BaOdPAsLKifwbLxDsQo44XuhbwR%2FCq7KlQoHjl9HUlyLryJHwxhASoFTv3oFBRfhIaaqTzabMUP%2B66FURNZxBRT8kxvJVNLA%2FojnHr3JCCGADRzkfMoVt9sUCibmRyaCB7PZXur%2Bvj7pZFOAaJPbHozBBjLjZ%2BKIesWXwgXgn5KRu0iTQhIiJHFK9%2Fa5YiKhqTAQbz%2BtrodZuj7gHVIdJQQVzn95t5PGQniNJXEFXlq0jDxgpN3%2Bni5Q%2B4lkLwadLLSHO2uzPu6CU%2FBTJaDVMupsGWdOCTzoM9k9mA7gO4rKGzK%2BJyP3GPbm4aDiWMToqfpM6CZId8%2BQlCY2rQBkw026bLWNH1hSVsOMTo7SQSL9YNRZ8O5x1UHfolTewD4bhDZNig3hdQzp3JinKP0qc2a5sRHNYcWHoOBd%2BXo%2F347%2BRo6pJFnhm3M%2FBX95b%2BMLqsx8QGOqUB6999p2OwRvWiXtK1I9w%2Fipi%2FG106MqNn0Mzh5FAqLlYvimC46wwNB7ZL9NIc%2Bj1HKgwVVhSE6mXC%2Bwo9KpRd5FFYy7eEATVVu6IbEMbw%2BG%2Bmvl0JkL1M8ReO1xAC9lHKAYtc3Xjq596XF17cB%2BqMfXHVn3GgvP7CtkGF5CRZA9fNGRhx9aV7ULAnSkfeQhqJLfAIovL1VRmk7U2k%2BWqn1MwwOE2A&X-Amz-Signature=844b88f2e44b66d0baf08439db8d4be3c0eed9ab8c9509ac60edf297ebe52ff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNX2PKVZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDyH%2FdHEz0ziDEUU3dc%2BQOSzr%2FKn1wQOSKLdkOx%2FROcsQIgD3JwCnX%2FsiCdCT0HcrmP3Dtsxa1X0B5LDbuM90dWFtgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDP06%2B%2BQxdIRGxUcSHyrcA0480qUiCJsn7C5u848FipdVxNO0RRcAVQPT%2FtSs84ChT5h2Jk6s%2BvTrNTJDuNrh%2FTfaNqT%2BuXB0DR2Lrz02PpIJVOSeMgMNTH7Oogy539nm0SPEXzvAr5vi%2B5pgtjgn9d88Rg7k3QxkFHnGlNTpICDGsFC%2FZjR8o3r5IsyfyW%2BkuKnUloOEVzx5l5%2BgVS%2BaOdPAsLKifwbLxDsQo44XuhbwR%2FCq7KlQoHjl9HUlyLryJHwxhASoFTv3oFBRfhIaaqTzabMUP%2B66FURNZxBRT8kxvJVNLA%2FojnHr3JCCGADRzkfMoVt9sUCibmRyaCB7PZXur%2Bvj7pZFOAaJPbHozBBjLjZ%2BKIesWXwgXgn5KRu0iTQhIiJHFK9%2Fa5YiKhqTAQbz%2BtrodZuj7gHVIdJQQVzn95t5PGQniNJXEFXlq0jDxgpN3%2Bni5Q%2B4lkLwadLLSHO2uzPu6CU%2FBTJaDVMupsGWdOCTzoM9k9mA7gO4rKGzK%2BJyP3GPbm4aDiWMToqfpM6CZId8%2BQlCY2rQBkw026bLWNH1hSVsOMTo7SQSL9YNRZ8O5x1UHfolTewD4bhDZNig3hdQzp3JinKP0qc2a5sRHNYcWHoOBd%2BXo%2F347%2BRo6pJFnhm3M%2FBX95b%2BMLqsx8QGOqUB6999p2OwRvWiXtK1I9w%2Fipi%2FG106MqNn0Mzh5FAqLlYvimC46wwNB7ZL9NIc%2Bj1HKgwVVhSE6mXC%2Bwo9KpRd5FFYy7eEATVVu6IbEMbw%2BG%2Bmvl0JkL1M8ReO1xAC9lHKAYtc3Xjq596XF17cB%2BqMfXHVn3GgvP7CtkGF5CRZA9fNGRhx9aV7ULAnSkfeQhqJLfAIovL1VRmk7U2k%2BWqn1MwwOE2A&X-Amz-Signature=7df06f9e0c76c8c1816e859e74efe84b2e7e23762b4c103e780fbee68c1c740d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
