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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NEXK7A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHd%2FnN42kck2Yqc9hjF1s%2Fdoo3jjCx4aM40opyjB96o8AiByvuGOINBi5CQPUgTu0EFlLRBfkeP8lj34pX8S%2F%2FO9byqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOv4jgwnR1AxVypqGKtwDzcC8%2FviGvDqBaLRBgK%2FPQDAHQFEKu1cB%2FmhcS2OWDNDHGi0BJLX97zTfoSUIJy3V7nVHJsxbcHVLd0XRgMoQ5NpWlGCOI7rb7jX%2BpOJDqSB8L6zUw3N159QDja28YdHU8cd5K8d%2F276ah1tPf6YD9wznGUTahBlGOBDI0Eu3qVnJgUozmbk7HvMqYb02bxOnMn2TwudXYOGzRQCh0aEQUGVFxOoMw0Ks6qZV5nzQeD2i3bnXi3kN1ryW%2BJtBTc04Kw8fJ9XkwNumfkSo9kCtYVxo2W2I8er91lOs3j7up6pkUqdtIBMaiErg1gauybI6jreW5dr3tp5Xc4qACrYK0BWERQ0XA5LHN8e12r4FgB4PoLw%2F5NYdZlSM%2FA4UO4fnAdj0AkuxfWL9qNVI4hqBHDoUR3BYVQVcARExNb9s%2FT43atx8wiwRfLfL83mdRucOrbY5tNMgCYGMUoR7J%2BPg7dhVSY4CyCXNDp3KgO614dLa4WTSXW%2FFKbfsP1Eb2vwzkvswdcIm8%2BNS7cgODF4R%2FUlv3y6vpxOEpxOtA1ZyNHfra26Q7DpkcQO1XPLJn3zcN2xiw2W%2FxqFEjANVnL%2BClvtvg3nIC1TCntpKAncl%2BY7q93FI5eUBSOU7eJUwxsGnxAY6pgED3H98uaAGo0b24IOkbitYw%2BFOKyAA%2BhVMmPIut%2FNb2X5DQTotq47m%2FFBgVZ1Do3tlcIsEzkxkV4rbrmsM%2F8bsGeoPnvBwC8o7OMSzsstBzeGybG3%2F7yU7a73%2B67I%2BBeoWQCji6trYniBJ%2FwDo5fTGgi8RlvYa6VQBp369P%2FoW%2BIBVsb7PIQeOt1rZyBDP10Rj9Z5QUEI%2Ftr%2F447XR0uP1lBduG0mC&X-Amz-Signature=312a36aa259bb0eb14c72c08d74ce459358fb5ea4b83a836e379443d63b17885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NEXK7A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHd%2FnN42kck2Yqc9hjF1s%2Fdoo3jjCx4aM40opyjB96o8AiByvuGOINBi5CQPUgTu0EFlLRBfkeP8lj34pX8S%2F%2FO9byqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOv4jgwnR1AxVypqGKtwDzcC8%2FviGvDqBaLRBgK%2FPQDAHQFEKu1cB%2FmhcS2OWDNDHGi0BJLX97zTfoSUIJy3V7nVHJsxbcHVLd0XRgMoQ5NpWlGCOI7rb7jX%2BpOJDqSB8L6zUw3N159QDja28YdHU8cd5K8d%2F276ah1tPf6YD9wznGUTahBlGOBDI0Eu3qVnJgUozmbk7HvMqYb02bxOnMn2TwudXYOGzRQCh0aEQUGVFxOoMw0Ks6qZV5nzQeD2i3bnXi3kN1ryW%2BJtBTc04Kw8fJ9XkwNumfkSo9kCtYVxo2W2I8er91lOs3j7up6pkUqdtIBMaiErg1gauybI6jreW5dr3tp5Xc4qACrYK0BWERQ0XA5LHN8e12r4FgB4PoLw%2F5NYdZlSM%2FA4UO4fnAdj0AkuxfWL9qNVI4hqBHDoUR3BYVQVcARExNb9s%2FT43atx8wiwRfLfL83mdRucOrbY5tNMgCYGMUoR7J%2BPg7dhVSY4CyCXNDp3KgO614dLa4WTSXW%2FFKbfsP1Eb2vwzkvswdcIm8%2BNS7cgODF4R%2FUlv3y6vpxOEpxOtA1ZyNHfra26Q7DpkcQO1XPLJn3zcN2xiw2W%2FxqFEjANVnL%2BClvtvg3nIC1TCntpKAncl%2BY7q93FI5eUBSOU7eJUwxsGnxAY6pgED3H98uaAGo0b24IOkbitYw%2BFOKyAA%2BhVMmPIut%2FNb2X5DQTotq47m%2FFBgVZ1Do3tlcIsEzkxkV4rbrmsM%2F8bsGeoPnvBwC8o7OMSzsstBzeGybG3%2F7yU7a73%2B67I%2BBeoWQCji6trYniBJ%2FwDo5fTGgi8RlvYa6VQBp369P%2FoW%2BIBVsb7PIQeOt1rZyBDP10Rj9Z5QUEI%2Ftr%2F447XR0uP1lBduG0mC&X-Amz-Signature=7a6c547a71c8e2a06fa2583a3cb99a4f9c4e15589f6dbaad91bedb3071f46e39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NEXK7A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHd%2FnN42kck2Yqc9hjF1s%2Fdoo3jjCx4aM40opyjB96o8AiByvuGOINBi5CQPUgTu0EFlLRBfkeP8lj34pX8S%2F%2FO9byqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOv4jgwnR1AxVypqGKtwDzcC8%2FviGvDqBaLRBgK%2FPQDAHQFEKu1cB%2FmhcS2OWDNDHGi0BJLX97zTfoSUIJy3V7nVHJsxbcHVLd0XRgMoQ5NpWlGCOI7rb7jX%2BpOJDqSB8L6zUw3N159QDja28YdHU8cd5K8d%2F276ah1tPf6YD9wznGUTahBlGOBDI0Eu3qVnJgUozmbk7HvMqYb02bxOnMn2TwudXYOGzRQCh0aEQUGVFxOoMw0Ks6qZV5nzQeD2i3bnXi3kN1ryW%2BJtBTc04Kw8fJ9XkwNumfkSo9kCtYVxo2W2I8er91lOs3j7up6pkUqdtIBMaiErg1gauybI6jreW5dr3tp5Xc4qACrYK0BWERQ0XA5LHN8e12r4FgB4PoLw%2F5NYdZlSM%2FA4UO4fnAdj0AkuxfWL9qNVI4hqBHDoUR3BYVQVcARExNb9s%2FT43atx8wiwRfLfL83mdRucOrbY5tNMgCYGMUoR7J%2BPg7dhVSY4CyCXNDp3KgO614dLa4WTSXW%2FFKbfsP1Eb2vwzkvswdcIm8%2BNS7cgODF4R%2FUlv3y6vpxOEpxOtA1ZyNHfra26Q7DpkcQO1XPLJn3zcN2xiw2W%2FxqFEjANVnL%2BClvtvg3nIC1TCntpKAncl%2BY7q93FI5eUBSOU7eJUwxsGnxAY6pgED3H98uaAGo0b24IOkbitYw%2BFOKyAA%2BhVMmPIut%2FNb2X5DQTotq47m%2FFBgVZ1Do3tlcIsEzkxkV4rbrmsM%2F8bsGeoPnvBwC8o7OMSzsstBzeGybG3%2F7yU7a73%2B67I%2BBeoWQCji6trYniBJ%2FwDo5fTGgi8RlvYa6VQBp369P%2FoW%2BIBVsb7PIQeOt1rZyBDP10Rj9Z5QUEI%2Ftr%2F447XR0uP1lBduG0mC&X-Amz-Signature=4ce54ee1aaaa59976513075ee094d78afdeff4b47ce4c1f397ce3d28fe9cdca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NEXK7A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHd%2FnN42kck2Yqc9hjF1s%2Fdoo3jjCx4aM40opyjB96o8AiByvuGOINBi5CQPUgTu0EFlLRBfkeP8lj34pX8S%2F%2FO9byqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOv4jgwnR1AxVypqGKtwDzcC8%2FviGvDqBaLRBgK%2FPQDAHQFEKu1cB%2FmhcS2OWDNDHGi0BJLX97zTfoSUIJy3V7nVHJsxbcHVLd0XRgMoQ5NpWlGCOI7rb7jX%2BpOJDqSB8L6zUw3N159QDja28YdHU8cd5K8d%2F276ah1tPf6YD9wznGUTahBlGOBDI0Eu3qVnJgUozmbk7HvMqYb02bxOnMn2TwudXYOGzRQCh0aEQUGVFxOoMw0Ks6qZV5nzQeD2i3bnXi3kN1ryW%2BJtBTc04Kw8fJ9XkwNumfkSo9kCtYVxo2W2I8er91lOs3j7up6pkUqdtIBMaiErg1gauybI6jreW5dr3tp5Xc4qACrYK0BWERQ0XA5LHN8e12r4FgB4PoLw%2F5NYdZlSM%2FA4UO4fnAdj0AkuxfWL9qNVI4hqBHDoUR3BYVQVcARExNb9s%2FT43atx8wiwRfLfL83mdRucOrbY5tNMgCYGMUoR7J%2BPg7dhVSY4CyCXNDp3KgO614dLa4WTSXW%2FFKbfsP1Eb2vwzkvswdcIm8%2BNS7cgODF4R%2FUlv3y6vpxOEpxOtA1ZyNHfra26Q7DpkcQO1XPLJn3zcN2xiw2W%2FxqFEjANVnL%2BClvtvg3nIC1TCntpKAncl%2BY7q93FI5eUBSOU7eJUwxsGnxAY6pgED3H98uaAGo0b24IOkbitYw%2BFOKyAA%2BhVMmPIut%2FNb2X5DQTotq47m%2FFBgVZ1Do3tlcIsEzkxkV4rbrmsM%2F8bsGeoPnvBwC8o7OMSzsstBzeGybG3%2F7yU7a73%2B67I%2BBeoWQCji6trYniBJ%2FwDo5fTGgi8RlvYa6VQBp369P%2FoW%2BIBVsb7PIQeOt1rZyBDP10Rj9Z5QUEI%2Ftr%2F447XR0uP1lBduG0mC&X-Amz-Signature=5991bd7d82f4b6d87ac079d47c9a422ab3889a50e2d81b5c589feb46cef0ea2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NEXK7A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHd%2FnN42kck2Yqc9hjF1s%2Fdoo3jjCx4aM40opyjB96o8AiByvuGOINBi5CQPUgTu0EFlLRBfkeP8lj34pX8S%2F%2FO9byqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOv4jgwnR1AxVypqGKtwDzcC8%2FviGvDqBaLRBgK%2FPQDAHQFEKu1cB%2FmhcS2OWDNDHGi0BJLX97zTfoSUIJy3V7nVHJsxbcHVLd0XRgMoQ5NpWlGCOI7rb7jX%2BpOJDqSB8L6zUw3N159QDja28YdHU8cd5K8d%2F276ah1tPf6YD9wznGUTahBlGOBDI0Eu3qVnJgUozmbk7HvMqYb02bxOnMn2TwudXYOGzRQCh0aEQUGVFxOoMw0Ks6qZV5nzQeD2i3bnXi3kN1ryW%2BJtBTc04Kw8fJ9XkwNumfkSo9kCtYVxo2W2I8er91lOs3j7up6pkUqdtIBMaiErg1gauybI6jreW5dr3tp5Xc4qACrYK0BWERQ0XA5LHN8e12r4FgB4PoLw%2F5NYdZlSM%2FA4UO4fnAdj0AkuxfWL9qNVI4hqBHDoUR3BYVQVcARExNb9s%2FT43atx8wiwRfLfL83mdRucOrbY5tNMgCYGMUoR7J%2BPg7dhVSY4CyCXNDp3KgO614dLa4WTSXW%2FFKbfsP1Eb2vwzkvswdcIm8%2BNS7cgODF4R%2FUlv3y6vpxOEpxOtA1ZyNHfra26Q7DpkcQO1XPLJn3zcN2xiw2W%2FxqFEjANVnL%2BClvtvg3nIC1TCntpKAncl%2BY7q93FI5eUBSOU7eJUwxsGnxAY6pgED3H98uaAGo0b24IOkbitYw%2BFOKyAA%2BhVMmPIut%2FNb2X5DQTotq47m%2FFBgVZ1Do3tlcIsEzkxkV4rbrmsM%2F8bsGeoPnvBwC8o7OMSzsstBzeGybG3%2F7yU7a73%2B67I%2BBeoWQCji6trYniBJ%2FwDo5fTGgi8RlvYa6VQBp369P%2FoW%2BIBVsb7PIQeOt1rZyBDP10Rj9Z5QUEI%2Ftr%2F447XR0uP1lBduG0mC&X-Amz-Signature=f76f0da10c3f8d4454208aad0d060077d40c5f15ee3a33a103935e766ea0dab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NEXK7A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHd%2FnN42kck2Yqc9hjF1s%2Fdoo3jjCx4aM40opyjB96o8AiByvuGOINBi5CQPUgTu0EFlLRBfkeP8lj34pX8S%2F%2FO9byqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOv4jgwnR1AxVypqGKtwDzcC8%2FviGvDqBaLRBgK%2FPQDAHQFEKu1cB%2FmhcS2OWDNDHGi0BJLX97zTfoSUIJy3V7nVHJsxbcHVLd0XRgMoQ5NpWlGCOI7rb7jX%2BpOJDqSB8L6zUw3N159QDja28YdHU8cd5K8d%2F276ah1tPf6YD9wznGUTahBlGOBDI0Eu3qVnJgUozmbk7HvMqYb02bxOnMn2TwudXYOGzRQCh0aEQUGVFxOoMw0Ks6qZV5nzQeD2i3bnXi3kN1ryW%2BJtBTc04Kw8fJ9XkwNumfkSo9kCtYVxo2W2I8er91lOs3j7up6pkUqdtIBMaiErg1gauybI6jreW5dr3tp5Xc4qACrYK0BWERQ0XA5LHN8e12r4FgB4PoLw%2F5NYdZlSM%2FA4UO4fnAdj0AkuxfWL9qNVI4hqBHDoUR3BYVQVcARExNb9s%2FT43atx8wiwRfLfL83mdRucOrbY5tNMgCYGMUoR7J%2BPg7dhVSY4CyCXNDp3KgO614dLa4WTSXW%2FFKbfsP1Eb2vwzkvswdcIm8%2BNS7cgODF4R%2FUlv3y6vpxOEpxOtA1ZyNHfra26Q7DpkcQO1XPLJn3zcN2xiw2W%2FxqFEjANVnL%2BClvtvg3nIC1TCntpKAncl%2BY7q93FI5eUBSOU7eJUwxsGnxAY6pgED3H98uaAGo0b24IOkbitYw%2BFOKyAA%2BhVMmPIut%2FNb2X5DQTotq47m%2FFBgVZ1Do3tlcIsEzkxkV4rbrmsM%2F8bsGeoPnvBwC8o7OMSzsstBzeGybG3%2F7yU7a73%2B67I%2BBeoWQCji6trYniBJ%2FwDo5fTGgi8RlvYa6VQBp369P%2FoW%2BIBVsb7PIQeOt1rZyBDP10Rj9Z5QUEI%2Ftr%2F447XR0uP1lBduG0mC&X-Amz-Signature=0909e9b2503f26c19248dc1042fdc0c32007f9e554d2ce1a8a26d0180f32e4de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NEXK7A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHd%2FnN42kck2Yqc9hjF1s%2Fdoo3jjCx4aM40opyjB96o8AiByvuGOINBi5CQPUgTu0EFlLRBfkeP8lj34pX8S%2F%2FO9byqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOv4jgwnR1AxVypqGKtwDzcC8%2FviGvDqBaLRBgK%2FPQDAHQFEKu1cB%2FmhcS2OWDNDHGi0BJLX97zTfoSUIJy3V7nVHJsxbcHVLd0XRgMoQ5NpWlGCOI7rb7jX%2BpOJDqSB8L6zUw3N159QDja28YdHU8cd5K8d%2F276ah1tPf6YD9wznGUTahBlGOBDI0Eu3qVnJgUozmbk7HvMqYb02bxOnMn2TwudXYOGzRQCh0aEQUGVFxOoMw0Ks6qZV5nzQeD2i3bnXi3kN1ryW%2BJtBTc04Kw8fJ9XkwNumfkSo9kCtYVxo2W2I8er91lOs3j7up6pkUqdtIBMaiErg1gauybI6jreW5dr3tp5Xc4qACrYK0BWERQ0XA5LHN8e12r4FgB4PoLw%2F5NYdZlSM%2FA4UO4fnAdj0AkuxfWL9qNVI4hqBHDoUR3BYVQVcARExNb9s%2FT43atx8wiwRfLfL83mdRucOrbY5tNMgCYGMUoR7J%2BPg7dhVSY4CyCXNDp3KgO614dLa4WTSXW%2FFKbfsP1Eb2vwzkvswdcIm8%2BNS7cgODF4R%2FUlv3y6vpxOEpxOtA1ZyNHfra26Q7DpkcQO1XPLJn3zcN2xiw2W%2FxqFEjANVnL%2BClvtvg3nIC1TCntpKAncl%2BY7q93FI5eUBSOU7eJUwxsGnxAY6pgED3H98uaAGo0b24IOkbitYw%2BFOKyAA%2BhVMmPIut%2FNb2X5DQTotq47m%2FFBgVZ1Do3tlcIsEzkxkV4rbrmsM%2F8bsGeoPnvBwC8o7OMSzsstBzeGybG3%2F7yU7a73%2B67I%2BBeoWQCji6trYniBJ%2FwDo5fTGgi8RlvYa6VQBp369P%2FoW%2BIBVsb7PIQeOt1rZyBDP10Rj9Z5QUEI%2Ftr%2F447XR0uP1lBduG0mC&X-Amz-Signature=8c823afda62741b2b405ebeeb599344763857b21019aee3f0ff4f9aa210e43cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NEXK7A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHd%2FnN42kck2Yqc9hjF1s%2Fdoo3jjCx4aM40opyjB96o8AiByvuGOINBi5CQPUgTu0EFlLRBfkeP8lj34pX8S%2F%2FO9byqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOv4jgwnR1AxVypqGKtwDzcC8%2FviGvDqBaLRBgK%2FPQDAHQFEKu1cB%2FmhcS2OWDNDHGi0BJLX97zTfoSUIJy3V7nVHJsxbcHVLd0XRgMoQ5NpWlGCOI7rb7jX%2BpOJDqSB8L6zUw3N159QDja28YdHU8cd5K8d%2F276ah1tPf6YD9wznGUTahBlGOBDI0Eu3qVnJgUozmbk7HvMqYb02bxOnMn2TwudXYOGzRQCh0aEQUGVFxOoMw0Ks6qZV5nzQeD2i3bnXi3kN1ryW%2BJtBTc04Kw8fJ9XkwNumfkSo9kCtYVxo2W2I8er91lOs3j7up6pkUqdtIBMaiErg1gauybI6jreW5dr3tp5Xc4qACrYK0BWERQ0XA5LHN8e12r4FgB4PoLw%2F5NYdZlSM%2FA4UO4fnAdj0AkuxfWL9qNVI4hqBHDoUR3BYVQVcARExNb9s%2FT43atx8wiwRfLfL83mdRucOrbY5tNMgCYGMUoR7J%2BPg7dhVSY4CyCXNDp3KgO614dLa4WTSXW%2FFKbfsP1Eb2vwzkvswdcIm8%2BNS7cgODF4R%2FUlv3y6vpxOEpxOtA1ZyNHfra26Q7DpkcQO1XPLJn3zcN2xiw2W%2FxqFEjANVnL%2BClvtvg3nIC1TCntpKAncl%2BY7q93FI5eUBSOU7eJUwxsGnxAY6pgED3H98uaAGo0b24IOkbitYw%2BFOKyAA%2BhVMmPIut%2FNb2X5DQTotq47m%2FFBgVZ1Do3tlcIsEzkxkV4rbrmsM%2F8bsGeoPnvBwC8o7OMSzsstBzeGybG3%2F7yU7a73%2B67I%2BBeoWQCji6trYniBJ%2FwDo5fTGgi8RlvYa6VQBp369P%2FoW%2BIBVsb7PIQeOt1rZyBDP10Rj9Z5QUEI%2Ftr%2F447XR0uP1lBduG0mC&X-Amz-Signature=1e2576f18bf03e5f75991be05af1c523455c31d2aafff87ee74f2d80012391c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NEXK7A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHd%2FnN42kck2Yqc9hjF1s%2Fdoo3jjCx4aM40opyjB96o8AiByvuGOINBi5CQPUgTu0EFlLRBfkeP8lj34pX8S%2F%2FO9byqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOv4jgwnR1AxVypqGKtwDzcC8%2FviGvDqBaLRBgK%2FPQDAHQFEKu1cB%2FmhcS2OWDNDHGi0BJLX97zTfoSUIJy3V7nVHJsxbcHVLd0XRgMoQ5NpWlGCOI7rb7jX%2BpOJDqSB8L6zUw3N159QDja28YdHU8cd5K8d%2F276ah1tPf6YD9wznGUTahBlGOBDI0Eu3qVnJgUozmbk7HvMqYb02bxOnMn2TwudXYOGzRQCh0aEQUGVFxOoMw0Ks6qZV5nzQeD2i3bnXi3kN1ryW%2BJtBTc04Kw8fJ9XkwNumfkSo9kCtYVxo2W2I8er91lOs3j7up6pkUqdtIBMaiErg1gauybI6jreW5dr3tp5Xc4qACrYK0BWERQ0XA5LHN8e12r4FgB4PoLw%2F5NYdZlSM%2FA4UO4fnAdj0AkuxfWL9qNVI4hqBHDoUR3BYVQVcARExNb9s%2FT43atx8wiwRfLfL83mdRucOrbY5tNMgCYGMUoR7J%2BPg7dhVSY4CyCXNDp3KgO614dLa4WTSXW%2FFKbfsP1Eb2vwzkvswdcIm8%2BNS7cgODF4R%2FUlv3y6vpxOEpxOtA1ZyNHfra26Q7DpkcQO1XPLJn3zcN2xiw2W%2FxqFEjANVnL%2BClvtvg3nIC1TCntpKAncl%2BY7q93FI5eUBSOU7eJUwxsGnxAY6pgED3H98uaAGo0b24IOkbitYw%2BFOKyAA%2BhVMmPIut%2FNb2X5DQTotq47m%2FFBgVZ1Do3tlcIsEzkxkV4rbrmsM%2F8bsGeoPnvBwC8o7OMSzsstBzeGybG3%2F7yU7a73%2B67I%2BBeoWQCji6trYniBJ%2FwDo5fTGgi8RlvYa6VQBp369P%2FoW%2BIBVsb7PIQeOt1rZyBDP10Rj9Z5QUEI%2Ftr%2F447XR0uP1lBduG0mC&X-Amz-Signature=521332ff09a6902e10185302563a9db5d11ea221d7fde86b3b38eb89f5596b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NEXK7A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHd%2FnN42kck2Yqc9hjF1s%2Fdoo3jjCx4aM40opyjB96o8AiByvuGOINBi5CQPUgTu0EFlLRBfkeP8lj34pX8S%2F%2FO9byqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOv4jgwnR1AxVypqGKtwDzcC8%2FviGvDqBaLRBgK%2FPQDAHQFEKu1cB%2FmhcS2OWDNDHGi0BJLX97zTfoSUIJy3V7nVHJsxbcHVLd0XRgMoQ5NpWlGCOI7rb7jX%2BpOJDqSB8L6zUw3N159QDja28YdHU8cd5K8d%2F276ah1tPf6YD9wznGUTahBlGOBDI0Eu3qVnJgUozmbk7HvMqYb02bxOnMn2TwudXYOGzRQCh0aEQUGVFxOoMw0Ks6qZV5nzQeD2i3bnXi3kN1ryW%2BJtBTc04Kw8fJ9XkwNumfkSo9kCtYVxo2W2I8er91lOs3j7up6pkUqdtIBMaiErg1gauybI6jreW5dr3tp5Xc4qACrYK0BWERQ0XA5LHN8e12r4FgB4PoLw%2F5NYdZlSM%2FA4UO4fnAdj0AkuxfWL9qNVI4hqBHDoUR3BYVQVcARExNb9s%2FT43atx8wiwRfLfL83mdRucOrbY5tNMgCYGMUoR7J%2BPg7dhVSY4CyCXNDp3KgO614dLa4WTSXW%2FFKbfsP1Eb2vwzkvswdcIm8%2BNS7cgODF4R%2FUlv3y6vpxOEpxOtA1ZyNHfra26Q7DpkcQO1XPLJn3zcN2xiw2W%2FxqFEjANVnL%2BClvtvg3nIC1TCntpKAncl%2BY7q93FI5eUBSOU7eJUwxsGnxAY6pgED3H98uaAGo0b24IOkbitYw%2BFOKyAA%2BhVMmPIut%2FNb2X5DQTotq47m%2FFBgVZ1Do3tlcIsEzkxkV4rbrmsM%2F8bsGeoPnvBwC8o7OMSzsstBzeGybG3%2F7yU7a73%2B67I%2BBeoWQCji6trYniBJ%2FwDo5fTGgi8RlvYa6VQBp369P%2FoW%2BIBVsb7PIQeOt1rZyBDP10Rj9Z5QUEI%2Ftr%2F447XR0uP1lBduG0mC&X-Amz-Signature=ddf6315de0e17b23edb2610f9c48f4400f53ef4b506ceee434b85205ed9553cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NEXK7A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHd%2FnN42kck2Yqc9hjF1s%2Fdoo3jjCx4aM40opyjB96o8AiByvuGOINBi5CQPUgTu0EFlLRBfkeP8lj34pX8S%2F%2FO9byqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOv4jgwnR1AxVypqGKtwDzcC8%2FviGvDqBaLRBgK%2FPQDAHQFEKu1cB%2FmhcS2OWDNDHGi0BJLX97zTfoSUIJy3V7nVHJsxbcHVLd0XRgMoQ5NpWlGCOI7rb7jX%2BpOJDqSB8L6zUw3N159QDja28YdHU8cd5K8d%2F276ah1tPf6YD9wznGUTahBlGOBDI0Eu3qVnJgUozmbk7HvMqYb02bxOnMn2TwudXYOGzRQCh0aEQUGVFxOoMw0Ks6qZV5nzQeD2i3bnXi3kN1ryW%2BJtBTc04Kw8fJ9XkwNumfkSo9kCtYVxo2W2I8er91lOs3j7up6pkUqdtIBMaiErg1gauybI6jreW5dr3tp5Xc4qACrYK0BWERQ0XA5LHN8e12r4FgB4PoLw%2F5NYdZlSM%2FA4UO4fnAdj0AkuxfWL9qNVI4hqBHDoUR3BYVQVcARExNb9s%2FT43atx8wiwRfLfL83mdRucOrbY5tNMgCYGMUoR7J%2BPg7dhVSY4CyCXNDp3KgO614dLa4WTSXW%2FFKbfsP1Eb2vwzkvswdcIm8%2BNS7cgODF4R%2FUlv3y6vpxOEpxOtA1ZyNHfra26Q7DpkcQO1XPLJn3zcN2xiw2W%2FxqFEjANVnL%2BClvtvg3nIC1TCntpKAncl%2BY7q93FI5eUBSOU7eJUwxsGnxAY6pgED3H98uaAGo0b24IOkbitYw%2BFOKyAA%2BhVMmPIut%2FNb2X5DQTotq47m%2FFBgVZ1Do3tlcIsEzkxkV4rbrmsM%2F8bsGeoPnvBwC8o7OMSzsstBzeGybG3%2F7yU7a73%2B67I%2BBeoWQCji6trYniBJ%2FwDo5fTGgi8RlvYa6VQBp369P%2FoW%2BIBVsb7PIQeOt1rZyBDP10Rj9Z5QUEI%2Ftr%2F447XR0uP1lBduG0mC&X-Amz-Signature=4f5af3de989ae29c2724febe8561adb3039f126cd33af6862f84e61fd43bc566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NEXK7A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHd%2FnN42kck2Yqc9hjF1s%2Fdoo3jjCx4aM40opyjB96o8AiByvuGOINBi5CQPUgTu0EFlLRBfkeP8lj34pX8S%2F%2FO9byqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOv4jgwnR1AxVypqGKtwDzcC8%2FviGvDqBaLRBgK%2FPQDAHQFEKu1cB%2FmhcS2OWDNDHGi0BJLX97zTfoSUIJy3V7nVHJsxbcHVLd0XRgMoQ5NpWlGCOI7rb7jX%2BpOJDqSB8L6zUw3N159QDja28YdHU8cd5K8d%2F276ah1tPf6YD9wznGUTahBlGOBDI0Eu3qVnJgUozmbk7HvMqYb02bxOnMn2TwudXYOGzRQCh0aEQUGVFxOoMw0Ks6qZV5nzQeD2i3bnXi3kN1ryW%2BJtBTc04Kw8fJ9XkwNumfkSo9kCtYVxo2W2I8er91lOs3j7up6pkUqdtIBMaiErg1gauybI6jreW5dr3tp5Xc4qACrYK0BWERQ0XA5LHN8e12r4FgB4PoLw%2F5NYdZlSM%2FA4UO4fnAdj0AkuxfWL9qNVI4hqBHDoUR3BYVQVcARExNb9s%2FT43atx8wiwRfLfL83mdRucOrbY5tNMgCYGMUoR7J%2BPg7dhVSY4CyCXNDp3KgO614dLa4WTSXW%2FFKbfsP1Eb2vwzkvswdcIm8%2BNS7cgODF4R%2FUlv3y6vpxOEpxOtA1ZyNHfra26Q7DpkcQO1XPLJn3zcN2xiw2W%2FxqFEjANVnL%2BClvtvg3nIC1TCntpKAncl%2BY7q93FI5eUBSOU7eJUwxsGnxAY6pgED3H98uaAGo0b24IOkbitYw%2BFOKyAA%2BhVMmPIut%2FNb2X5DQTotq47m%2FFBgVZ1Do3tlcIsEzkxkV4rbrmsM%2F8bsGeoPnvBwC8o7OMSzsstBzeGybG3%2F7yU7a73%2B67I%2BBeoWQCji6trYniBJ%2FwDo5fTGgi8RlvYa6VQBp369P%2FoW%2BIBVsb7PIQeOt1rZyBDP10Rj9Z5QUEI%2Ftr%2F447XR0uP1lBduG0mC&X-Amz-Signature=37d2b90f28acffda2e8536042c80f930cbf02243543c51a08ff98e57664be738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NEXK7A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHd%2FnN42kck2Yqc9hjF1s%2Fdoo3jjCx4aM40opyjB96o8AiByvuGOINBi5CQPUgTu0EFlLRBfkeP8lj34pX8S%2F%2FO9byqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOv4jgwnR1AxVypqGKtwDzcC8%2FviGvDqBaLRBgK%2FPQDAHQFEKu1cB%2FmhcS2OWDNDHGi0BJLX97zTfoSUIJy3V7nVHJsxbcHVLd0XRgMoQ5NpWlGCOI7rb7jX%2BpOJDqSB8L6zUw3N159QDja28YdHU8cd5K8d%2F276ah1tPf6YD9wznGUTahBlGOBDI0Eu3qVnJgUozmbk7HvMqYb02bxOnMn2TwudXYOGzRQCh0aEQUGVFxOoMw0Ks6qZV5nzQeD2i3bnXi3kN1ryW%2BJtBTc04Kw8fJ9XkwNumfkSo9kCtYVxo2W2I8er91lOs3j7up6pkUqdtIBMaiErg1gauybI6jreW5dr3tp5Xc4qACrYK0BWERQ0XA5LHN8e12r4FgB4PoLw%2F5NYdZlSM%2FA4UO4fnAdj0AkuxfWL9qNVI4hqBHDoUR3BYVQVcARExNb9s%2FT43atx8wiwRfLfL83mdRucOrbY5tNMgCYGMUoR7J%2BPg7dhVSY4CyCXNDp3KgO614dLa4WTSXW%2FFKbfsP1Eb2vwzkvswdcIm8%2BNS7cgODF4R%2FUlv3y6vpxOEpxOtA1ZyNHfra26Q7DpkcQO1XPLJn3zcN2xiw2W%2FxqFEjANVnL%2BClvtvg3nIC1TCntpKAncl%2BY7q93FI5eUBSOU7eJUwxsGnxAY6pgED3H98uaAGo0b24IOkbitYw%2BFOKyAA%2BhVMmPIut%2FNb2X5DQTotq47m%2FFBgVZ1Do3tlcIsEzkxkV4rbrmsM%2F8bsGeoPnvBwC8o7OMSzsstBzeGybG3%2F7yU7a73%2B67I%2BBeoWQCji6trYniBJ%2FwDo5fTGgi8RlvYa6VQBp369P%2FoW%2BIBVsb7PIQeOt1rZyBDP10Rj9Z5QUEI%2Ftr%2F447XR0uP1lBduG0mC&X-Amz-Signature=72983cd853a212dc322d479e1ecfb11e0868b9127fd9943c654359b41f67488a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NEXK7A%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHd%2FnN42kck2Yqc9hjF1s%2Fdoo3jjCx4aM40opyjB96o8AiByvuGOINBi5CQPUgTu0EFlLRBfkeP8lj34pX8S%2F%2FO9byqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOv4jgwnR1AxVypqGKtwDzcC8%2FviGvDqBaLRBgK%2FPQDAHQFEKu1cB%2FmhcS2OWDNDHGi0BJLX97zTfoSUIJy3V7nVHJsxbcHVLd0XRgMoQ5NpWlGCOI7rb7jX%2BpOJDqSB8L6zUw3N159QDja28YdHU8cd5K8d%2F276ah1tPf6YD9wznGUTahBlGOBDI0Eu3qVnJgUozmbk7HvMqYb02bxOnMn2TwudXYOGzRQCh0aEQUGVFxOoMw0Ks6qZV5nzQeD2i3bnXi3kN1ryW%2BJtBTc04Kw8fJ9XkwNumfkSo9kCtYVxo2W2I8er91lOs3j7up6pkUqdtIBMaiErg1gauybI6jreW5dr3tp5Xc4qACrYK0BWERQ0XA5LHN8e12r4FgB4PoLw%2F5NYdZlSM%2FA4UO4fnAdj0AkuxfWL9qNVI4hqBHDoUR3BYVQVcARExNb9s%2FT43atx8wiwRfLfL83mdRucOrbY5tNMgCYGMUoR7J%2BPg7dhVSY4CyCXNDp3KgO614dLa4WTSXW%2FFKbfsP1Eb2vwzkvswdcIm8%2BNS7cgODF4R%2FUlv3y6vpxOEpxOtA1ZyNHfra26Q7DpkcQO1XPLJn3zcN2xiw2W%2FxqFEjANVnL%2BClvtvg3nIC1TCntpKAncl%2BY7q93FI5eUBSOU7eJUwxsGnxAY6pgED3H98uaAGo0b24IOkbitYw%2BFOKyAA%2BhVMmPIut%2FNb2X5DQTotq47m%2FFBgVZ1Do3tlcIsEzkxkV4rbrmsM%2F8bsGeoPnvBwC8o7OMSzsstBzeGybG3%2F7yU7a73%2B67I%2BBeoWQCji6trYniBJ%2FwDo5fTGgi8RlvYa6VQBp369P%2FoW%2BIBVsb7PIQeOt1rZyBDP10Rj9Z5QUEI%2Ftr%2F447XR0uP1lBduG0mC&X-Amz-Signature=13f450cdcb2a8c9aca305794205a97945b4a8a7a5c0a9cd3f5cc608df0936f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
