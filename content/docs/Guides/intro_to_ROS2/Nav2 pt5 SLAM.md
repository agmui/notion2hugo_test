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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PTAQU6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH%2BuD8eiIBQneg4q6%2BMtSkI9RTr4VSag2REt3ATkFlGWAiBAqv4mNKD11gu1PU4hxyzQVSL0SB2t91S0peNHh8QMMCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMksps%2Fb63UHhoeThZKtwDCgZkqaNBFD22G83DZfijA0jDYm4DNK1Gd66OftNaBRGL4x2sTXzZYbB8Kc8of5ntUluze2BQzBcwS7GIjVJpbvGlK6%2BiHCXGA37AJofRQC7UoGRgXBv4zCgoluxKELEQ4C9tzOesXPY40ELGUyv9oNUtj92PxG%2F8sbwC3GYiWag6fJIWCgaHhi5Ug16883P7Ipn65il6%2FbdtCb3Y5SvJepvM2gna2hyX0MCoLd3oX4vRkh9G9qNfYx%2F4CyEMPMfRJ5xV9fY23xOLohoY615Qo9Ewg3iCAivu%2F87SH2zJAYZsv3gPMgAFCwCoAXy09JKL2h9Nq7Dg0YRfML%2BXSCOzlfeiPTwTJ6%2BwWLRtIe5HHhOEO52mZgxGRkndeAlA%2B5QLT3cVduwqcRjc806jvuzpRTN70B0Nvpahm20TBlO%2FcdEfxJfu8NyLaCyMqfQ8po%2BNJSxGuVmEB27hEOynOhKA6m6CiSiM1JcKZd8hxPwJ89wNEahzv93W9TcL6vf0mZ6tqdQJQHK3UkIGTUFCk3Dj34IV0Q%2FhqI%2FJoeqxwWakN5uzo1Z4iuJMKWicYC8Nzpu9DBYZ2L1mPGRiar9oxCQc0%2BbCTIRL4oqJZT8bg4aVXlGwT%2BmpMbJlMTqEUukwnvbaxAY6pgEANl9w%2F4xxg79y4YOt2H3dw2ZVLM%2BMOOxjcsuWxZWDLfDiVHMJ3A%2BlkF6M%2B8I3l%2F0Ul7kMlYR2F2DvC1hhItkgdB%2BEoK9V00bBFa49WR8ak%2FwRo9XB1NVXx4FAzbs44KfEw8%2FVavbqRxNpyFrytQW6gIspKTlbP014qVy%2F4MPWU%2F%2FT%2BRQIxLJNDLkdUqdh%2BMGvLYs6q%2FNPYjn8g2A44Nagb3gDCPcH&X-Amz-Signature=32c38841453447d10a93f63308238a9a44011926f4ad04a1a413eb8c5fc4ae46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PTAQU6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH%2BuD8eiIBQneg4q6%2BMtSkI9RTr4VSag2REt3ATkFlGWAiBAqv4mNKD11gu1PU4hxyzQVSL0SB2t91S0peNHh8QMMCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMksps%2Fb63UHhoeThZKtwDCgZkqaNBFD22G83DZfijA0jDYm4DNK1Gd66OftNaBRGL4x2sTXzZYbB8Kc8of5ntUluze2BQzBcwS7GIjVJpbvGlK6%2BiHCXGA37AJofRQC7UoGRgXBv4zCgoluxKELEQ4C9tzOesXPY40ELGUyv9oNUtj92PxG%2F8sbwC3GYiWag6fJIWCgaHhi5Ug16883P7Ipn65il6%2FbdtCb3Y5SvJepvM2gna2hyX0MCoLd3oX4vRkh9G9qNfYx%2F4CyEMPMfRJ5xV9fY23xOLohoY615Qo9Ewg3iCAivu%2F87SH2zJAYZsv3gPMgAFCwCoAXy09JKL2h9Nq7Dg0YRfML%2BXSCOzlfeiPTwTJ6%2BwWLRtIe5HHhOEO52mZgxGRkndeAlA%2B5QLT3cVduwqcRjc806jvuzpRTN70B0Nvpahm20TBlO%2FcdEfxJfu8NyLaCyMqfQ8po%2BNJSxGuVmEB27hEOynOhKA6m6CiSiM1JcKZd8hxPwJ89wNEahzv93W9TcL6vf0mZ6tqdQJQHK3UkIGTUFCk3Dj34IV0Q%2FhqI%2FJoeqxwWakN5uzo1Z4iuJMKWicYC8Nzpu9DBYZ2L1mPGRiar9oxCQc0%2BbCTIRL4oqJZT8bg4aVXlGwT%2BmpMbJlMTqEUukwnvbaxAY6pgEANl9w%2F4xxg79y4YOt2H3dw2ZVLM%2BMOOxjcsuWxZWDLfDiVHMJ3A%2BlkF6M%2B8I3l%2F0Ul7kMlYR2F2DvC1hhItkgdB%2BEoK9V00bBFa49WR8ak%2FwRo9XB1NVXx4FAzbs44KfEw8%2FVavbqRxNpyFrytQW6gIspKTlbP014qVy%2F4MPWU%2F%2FT%2BRQIxLJNDLkdUqdh%2BMGvLYs6q%2FNPYjn8g2A44Nagb3gDCPcH&X-Amz-Signature=f11b4ead9bd62498e9ec1779bf9d27fa1f06bbed0c7efcafac2b7056b7505d75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PTAQU6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH%2BuD8eiIBQneg4q6%2BMtSkI9RTr4VSag2REt3ATkFlGWAiBAqv4mNKD11gu1PU4hxyzQVSL0SB2t91S0peNHh8QMMCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMksps%2Fb63UHhoeThZKtwDCgZkqaNBFD22G83DZfijA0jDYm4DNK1Gd66OftNaBRGL4x2sTXzZYbB8Kc8of5ntUluze2BQzBcwS7GIjVJpbvGlK6%2BiHCXGA37AJofRQC7UoGRgXBv4zCgoluxKELEQ4C9tzOesXPY40ELGUyv9oNUtj92PxG%2F8sbwC3GYiWag6fJIWCgaHhi5Ug16883P7Ipn65il6%2FbdtCb3Y5SvJepvM2gna2hyX0MCoLd3oX4vRkh9G9qNfYx%2F4CyEMPMfRJ5xV9fY23xOLohoY615Qo9Ewg3iCAivu%2F87SH2zJAYZsv3gPMgAFCwCoAXy09JKL2h9Nq7Dg0YRfML%2BXSCOzlfeiPTwTJ6%2BwWLRtIe5HHhOEO52mZgxGRkndeAlA%2B5QLT3cVduwqcRjc806jvuzpRTN70B0Nvpahm20TBlO%2FcdEfxJfu8NyLaCyMqfQ8po%2BNJSxGuVmEB27hEOynOhKA6m6CiSiM1JcKZd8hxPwJ89wNEahzv93W9TcL6vf0mZ6tqdQJQHK3UkIGTUFCk3Dj34IV0Q%2FhqI%2FJoeqxwWakN5uzo1Z4iuJMKWicYC8Nzpu9DBYZ2L1mPGRiar9oxCQc0%2BbCTIRL4oqJZT8bg4aVXlGwT%2BmpMbJlMTqEUukwnvbaxAY6pgEANl9w%2F4xxg79y4YOt2H3dw2ZVLM%2BMOOxjcsuWxZWDLfDiVHMJ3A%2BlkF6M%2B8I3l%2F0Ul7kMlYR2F2DvC1hhItkgdB%2BEoK9V00bBFa49WR8ak%2FwRo9XB1NVXx4FAzbs44KfEw8%2FVavbqRxNpyFrytQW6gIspKTlbP014qVy%2F4MPWU%2F%2FT%2BRQIxLJNDLkdUqdh%2BMGvLYs6q%2FNPYjn8g2A44Nagb3gDCPcH&X-Amz-Signature=ebbee8d934b8d9cdcd48f0ddd38d1c9c59e7825304ff84efdb13bd91bb2eebc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PTAQU6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH%2BuD8eiIBQneg4q6%2BMtSkI9RTr4VSag2REt3ATkFlGWAiBAqv4mNKD11gu1PU4hxyzQVSL0SB2t91S0peNHh8QMMCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMksps%2Fb63UHhoeThZKtwDCgZkqaNBFD22G83DZfijA0jDYm4DNK1Gd66OftNaBRGL4x2sTXzZYbB8Kc8of5ntUluze2BQzBcwS7GIjVJpbvGlK6%2BiHCXGA37AJofRQC7UoGRgXBv4zCgoluxKELEQ4C9tzOesXPY40ELGUyv9oNUtj92PxG%2F8sbwC3GYiWag6fJIWCgaHhi5Ug16883P7Ipn65il6%2FbdtCb3Y5SvJepvM2gna2hyX0MCoLd3oX4vRkh9G9qNfYx%2F4CyEMPMfRJ5xV9fY23xOLohoY615Qo9Ewg3iCAivu%2F87SH2zJAYZsv3gPMgAFCwCoAXy09JKL2h9Nq7Dg0YRfML%2BXSCOzlfeiPTwTJ6%2BwWLRtIe5HHhOEO52mZgxGRkndeAlA%2B5QLT3cVduwqcRjc806jvuzpRTN70B0Nvpahm20TBlO%2FcdEfxJfu8NyLaCyMqfQ8po%2BNJSxGuVmEB27hEOynOhKA6m6CiSiM1JcKZd8hxPwJ89wNEahzv93W9TcL6vf0mZ6tqdQJQHK3UkIGTUFCk3Dj34IV0Q%2FhqI%2FJoeqxwWakN5uzo1Z4iuJMKWicYC8Nzpu9DBYZ2L1mPGRiar9oxCQc0%2BbCTIRL4oqJZT8bg4aVXlGwT%2BmpMbJlMTqEUukwnvbaxAY6pgEANl9w%2F4xxg79y4YOt2H3dw2ZVLM%2BMOOxjcsuWxZWDLfDiVHMJ3A%2BlkF6M%2B8I3l%2F0Ul7kMlYR2F2DvC1hhItkgdB%2BEoK9V00bBFa49WR8ak%2FwRo9XB1NVXx4FAzbs44KfEw8%2FVavbqRxNpyFrytQW6gIspKTlbP014qVy%2F4MPWU%2F%2FT%2BRQIxLJNDLkdUqdh%2BMGvLYs6q%2FNPYjn8g2A44Nagb3gDCPcH&X-Amz-Signature=bdc812331134948b80f460842edb19cd8dd2ad0dd3a986ff64cbf2d9c47b6eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PTAQU6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH%2BuD8eiIBQneg4q6%2BMtSkI9RTr4VSag2REt3ATkFlGWAiBAqv4mNKD11gu1PU4hxyzQVSL0SB2t91S0peNHh8QMMCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMksps%2Fb63UHhoeThZKtwDCgZkqaNBFD22G83DZfijA0jDYm4DNK1Gd66OftNaBRGL4x2sTXzZYbB8Kc8of5ntUluze2BQzBcwS7GIjVJpbvGlK6%2BiHCXGA37AJofRQC7UoGRgXBv4zCgoluxKELEQ4C9tzOesXPY40ELGUyv9oNUtj92PxG%2F8sbwC3GYiWag6fJIWCgaHhi5Ug16883P7Ipn65il6%2FbdtCb3Y5SvJepvM2gna2hyX0MCoLd3oX4vRkh9G9qNfYx%2F4CyEMPMfRJ5xV9fY23xOLohoY615Qo9Ewg3iCAivu%2F87SH2zJAYZsv3gPMgAFCwCoAXy09JKL2h9Nq7Dg0YRfML%2BXSCOzlfeiPTwTJ6%2BwWLRtIe5HHhOEO52mZgxGRkndeAlA%2B5QLT3cVduwqcRjc806jvuzpRTN70B0Nvpahm20TBlO%2FcdEfxJfu8NyLaCyMqfQ8po%2BNJSxGuVmEB27hEOynOhKA6m6CiSiM1JcKZd8hxPwJ89wNEahzv93W9TcL6vf0mZ6tqdQJQHK3UkIGTUFCk3Dj34IV0Q%2FhqI%2FJoeqxwWakN5uzo1Z4iuJMKWicYC8Nzpu9DBYZ2L1mPGRiar9oxCQc0%2BbCTIRL4oqJZT8bg4aVXlGwT%2BmpMbJlMTqEUukwnvbaxAY6pgEANl9w%2F4xxg79y4YOt2H3dw2ZVLM%2BMOOxjcsuWxZWDLfDiVHMJ3A%2BlkF6M%2B8I3l%2F0Ul7kMlYR2F2DvC1hhItkgdB%2BEoK9V00bBFa49WR8ak%2FwRo9XB1NVXx4FAzbs44KfEw8%2FVavbqRxNpyFrytQW6gIspKTlbP014qVy%2F4MPWU%2F%2FT%2BRQIxLJNDLkdUqdh%2BMGvLYs6q%2FNPYjn8g2A44Nagb3gDCPcH&X-Amz-Signature=90b6b23b954f4e4384ef2ce75374f130870ac1488278643414790bd7004b65f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PTAQU6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH%2BuD8eiIBQneg4q6%2BMtSkI9RTr4VSag2REt3ATkFlGWAiBAqv4mNKD11gu1PU4hxyzQVSL0SB2t91S0peNHh8QMMCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMksps%2Fb63UHhoeThZKtwDCgZkqaNBFD22G83DZfijA0jDYm4DNK1Gd66OftNaBRGL4x2sTXzZYbB8Kc8of5ntUluze2BQzBcwS7GIjVJpbvGlK6%2BiHCXGA37AJofRQC7UoGRgXBv4zCgoluxKELEQ4C9tzOesXPY40ELGUyv9oNUtj92PxG%2F8sbwC3GYiWag6fJIWCgaHhi5Ug16883P7Ipn65il6%2FbdtCb3Y5SvJepvM2gna2hyX0MCoLd3oX4vRkh9G9qNfYx%2F4CyEMPMfRJ5xV9fY23xOLohoY615Qo9Ewg3iCAivu%2F87SH2zJAYZsv3gPMgAFCwCoAXy09JKL2h9Nq7Dg0YRfML%2BXSCOzlfeiPTwTJ6%2BwWLRtIe5HHhOEO52mZgxGRkndeAlA%2B5QLT3cVduwqcRjc806jvuzpRTN70B0Nvpahm20TBlO%2FcdEfxJfu8NyLaCyMqfQ8po%2BNJSxGuVmEB27hEOynOhKA6m6CiSiM1JcKZd8hxPwJ89wNEahzv93W9TcL6vf0mZ6tqdQJQHK3UkIGTUFCk3Dj34IV0Q%2FhqI%2FJoeqxwWakN5uzo1Z4iuJMKWicYC8Nzpu9DBYZ2L1mPGRiar9oxCQc0%2BbCTIRL4oqJZT8bg4aVXlGwT%2BmpMbJlMTqEUukwnvbaxAY6pgEANl9w%2F4xxg79y4YOt2H3dw2ZVLM%2BMOOxjcsuWxZWDLfDiVHMJ3A%2BlkF6M%2B8I3l%2F0Ul7kMlYR2F2DvC1hhItkgdB%2BEoK9V00bBFa49WR8ak%2FwRo9XB1NVXx4FAzbs44KfEw8%2FVavbqRxNpyFrytQW6gIspKTlbP014qVy%2F4MPWU%2F%2FT%2BRQIxLJNDLkdUqdh%2BMGvLYs6q%2FNPYjn8g2A44Nagb3gDCPcH&X-Amz-Signature=3e3e6ca679b18ebf8eb034f0a79c4a0d5bf6535b69d3561d885049b5d8dda1ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PTAQU6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH%2BuD8eiIBQneg4q6%2BMtSkI9RTr4VSag2REt3ATkFlGWAiBAqv4mNKD11gu1PU4hxyzQVSL0SB2t91S0peNHh8QMMCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMksps%2Fb63UHhoeThZKtwDCgZkqaNBFD22G83DZfijA0jDYm4DNK1Gd66OftNaBRGL4x2sTXzZYbB8Kc8of5ntUluze2BQzBcwS7GIjVJpbvGlK6%2BiHCXGA37AJofRQC7UoGRgXBv4zCgoluxKELEQ4C9tzOesXPY40ELGUyv9oNUtj92PxG%2F8sbwC3GYiWag6fJIWCgaHhi5Ug16883P7Ipn65il6%2FbdtCb3Y5SvJepvM2gna2hyX0MCoLd3oX4vRkh9G9qNfYx%2F4CyEMPMfRJ5xV9fY23xOLohoY615Qo9Ewg3iCAivu%2F87SH2zJAYZsv3gPMgAFCwCoAXy09JKL2h9Nq7Dg0YRfML%2BXSCOzlfeiPTwTJ6%2BwWLRtIe5HHhOEO52mZgxGRkndeAlA%2B5QLT3cVduwqcRjc806jvuzpRTN70B0Nvpahm20TBlO%2FcdEfxJfu8NyLaCyMqfQ8po%2BNJSxGuVmEB27hEOynOhKA6m6CiSiM1JcKZd8hxPwJ89wNEahzv93W9TcL6vf0mZ6tqdQJQHK3UkIGTUFCk3Dj34IV0Q%2FhqI%2FJoeqxwWakN5uzo1Z4iuJMKWicYC8Nzpu9DBYZ2L1mPGRiar9oxCQc0%2BbCTIRL4oqJZT8bg4aVXlGwT%2BmpMbJlMTqEUukwnvbaxAY6pgEANl9w%2F4xxg79y4YOt2H3dw2ZVLM%2BMOOxjcsuWxZWDLfDiVHMJ3A%2BlkF6M%2B8I3l%2F0Ul7kMlYR2F2DvC1hhItkgdB%2BEoK9V00bBFa49WR8ak%2FwRo9XB1NVXx4FAzbs44KfEw8%2FVavbqRxNpyFrytQW6gIspKTlbP014qVy%2F4MPWU%2F%2FT%2BRQIxLJNDLkdUqdh%2BMGvLYs6q%2FNPYjn8g2A44Nagb3gDCPcH&X-Amz-Signature=126601060c0dfa0928a10a44c32605af2d59ac2838fee52bf15cfd5e803fb4a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PTAQU6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH%2BuD8eiIBQneg4q6%2BMtSkI9RTr4VSag2REt3ATkFlGWAiBAqv4mNKD11gu1PU4hxyzQVSL0SB2t91S0peNHh8QMMCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMksps%2Fb63UHhoeThZKtwDCgZkqaNBFD22G83DZfijA0jDYm4DNK1Gd66OftNaBRGL4x2sTXzZYbB8Kc8of5ntUluze2BQzBcwS7GIjVJpbvGlK6%2BiHCXGA37AJofRQC7UoGRgXBv4zCgoluxKELEQ4C9tzOesXPY40ELGUyv9oNUtj92PxG%2F8sbwC3GYiWag6fJIWCgaHhi5Ug16883P7Ipn65il6%2FbdtCb3Y5SvJepvM2gna2hyX0MCoLd3oX4vRkh9G9qNfYx%2F4CyEMPMfRJ5xV9fY23xOLohoY615Qo9Ewg3iCAivu%2F87SH2zJAYZsv3gPMgAFCwCoAXy09JKL2h9Nq7Dg0YRfML%2BXSCOzlfeiPTwTJ6%2BwWLRtIe5HHhOEO52mZgxGRkndeAlA%2B5QLT3cVduwqcRjc806jvuzpRTN70B0Nvpahm20TBlO%2FcdEfxJfu8NyLaCyMqfQ8po%2BNJSxGuVmEB27hEOynOhKA6m6CiSiM1JcKZd8hxPwJ89wNEahzv93W9TcL6vf0mZ6tqdQJQHK3UkIGTUFCk3Dj34IV0Q%2FhqI%2FJoeqxwWakN5uzo1Z4iuJMKWicYC8Nzpu9DBYZ2L1mPGRiar9oxCQc0%2BbCTIRL4oqJZT8bg4aVXlGwT%2BmpMbJlMTqEUukwnvbaxAY6pgEANl9w%2F4xxg79y4YOt2H3dw2ZVLM%2BMOOxjcsuWxZWDLfDiVHMJ3A%2BlkF6M%2B8I3l%2F0Ul7kMlYR2F2DvC1hhItkgdB%2BEoK9V00bBFa49WR8ak%2FwRo9XB1NVXx4FAzbs44KfEw8%2FVavbqRxNpyFrytQW6gIspKTlbP014qVy%2F4MPWU%2F%2FT%2BRQIxLJNDLkdUqdh%2BMGvLYs6q%2FNPYjn8g2A44Nagb3gDCPcH&X-Amz-Signature=e509dca6956f22eeba9da30435dac91f7e9d89232a3e71b6a3b3c003df1456e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PTAQU6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH%2BuD8eiIBQneg4q6%2BMtSkI9RTr4VSag2REt3ATkFlGWAiBAqv4mNKD11gu1PU4hxyzQVSL0SB2t91S0peNHh8QMMCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMksps%2Fb63UHhoeThZKtwDCgZkqaNBFD22G83DZfijA0jDYm4DNK1Gd66OftNaBRGL4x2sTXzZYbB8Kc8of5ntUluze2BQzBcwS7GIjVJpbvGlK6%2BiHCXGA37AJofRQC7UoGRgXBv4zCgoluxKELEQ4C9tzOesXPY40ELGUyv9oNUtj92PxG%2F8sbwC3GYiWag6fJIWCgaHhi5Ug16883P7Ipn65il6%2FbdtCb3Y5SvJepvM2gna2hyX0MCoLd3oX4vRkh9G9qNfYx%2F4CyEMPMfRJ5xV9fY23xOLohoY615Qo9Ewg3iCAivu%2F87SH2zJAYZsv3gPMgAFCwCoAXy09JKL2h9Nq7Dg0YRfML%2BXSCOzlfeiPTwTJ6%2BwWLRtIe5HHhOEO52mZgxGRkndeAlA%2B5QLT3cVduwqcRjc806jvuzpRTN70B0Nvpahm20TBlO%2FcdEfxJfu8NyLaCyMqfQ8po%2BNJSxGuVmEB27hEOynOhKA6m6CiSiM1JcKZd8hxPwJ89wNEahzv93W9TcL6vf0mZ6tqdQJQHK3UkIGTUFCk3Dj34IV0Q%2FhqI%2FJoeqxwWakN5uzo1Z4iuJMKWicYC8Nzpu9DBYZ2L1mPGRiar9oxCQc0%2BbCTIRL4oqJZT8bg4aVXlGwT%2BmpMbJlMTqEUukwnvbaxAY6pgEANl9w%2F4xxg79y4YOt2H3dw2ZVLM%2BMOOxjcsuWxZWDLfDiVHMJ3A%2BlkF6M%2B8I3l%2F0Ul7kMlYR2F2DvC1hhItkgdB%2BEoK9V00bBFa49WR8ak%2FwRo9XB1NVXx4FAzbs44KfEw8%2FVavbqRxNpyFrytQW6gIspKTlbP014qVy%2F4MPWU%2F%2FT%2BRQIxLJNDLkdUqdh%2BMGvLYs6q%2FNPYjn8g2A44Nagb3gDCPcH&X-Amz-Signature=b5e2ebc0c7dcb8c11b535a24523d46d90ceac366df7a19df45f47a58cc1aee6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PTAQU6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH%2BuD8eiIBQneg4q6%2BMtSkI9RTr4VSag2REt3ATkFlGWAiBAqv4mNKD11gu1PU4hxyzQVSL0SB2t91S0peNHh8QMMCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMksps%2Fb63UHhoeThZKtwDCgZkqaNBFD22G83DZfijA0jDYm4DNK1Gd66OftNaBRGL4x2sTXzZYbB8Kc8of5ntUluze2BQzBcwS7GIjVJpbvGlK6%2BiHCXGA37AJofRQC7UoGRgXBv4zCgoluxKELEQ4C9tzOesXPY40ELGUyv9oNUtj92PxG%2F8sbwC3GYiWag6fJIWCgaHhi5Ug16883P7Ipn65il6%2FbdtCb3Y5SvJepvM2gna2hyX0MCoLd3oX4vRkh9G9qNfYx%2F4CyEMPMfRJ5xV9fY23xOLohoY615Qo9Ewg3iCAivu%2F87SH2zJAYZsv3gPMgAFCwCoAXy09JKL2h9Nq7Dg0YRfML%2BXSCOzlfeiPTwTJ6%2BwWLRtIe5HHhOEO52mZgxGRkndeAlA%2B5QLT3cVduwqcRjc806jvuzpRTN70B0Nvpahm20TBlO%2FcdEfxJfu8NyLaCyMqfQ8po%2BNJSxGuVmEB27hEOynOhKA6m6CiSiM1JcKZd8hxPwJ89wNEahzv93W9TcL6vf0mZ6tqdQJQHK3UkIGTUFCk3Dj34IV0Q%2FhqI%2FJoeqxwWakN5uzo1Z4iuJMKWicYC8Nzpu9DBYZ2L1mPGRiar9oxCQc0%2BbCTIRL4oqJZT8bg4aVXlGwT%2BmpMbJlMTqEUukwnvbaxAY6pgEANl9w%2F4xxg79y4YOt2H3dw2ZVLM%2BMOOxjcsuWxZWDLfDiVHMJ3A%2BlkF6M%2B8I3l%2F0Ul7kMlYR2F2DvC1hhItkgdB%2BEoK9V00bBFa49WR8ak%2FwRo9XB1NVXx4FAzbs44KfEw8%2FVavbqRxNpyFrytQW6gIspKTlbP014qVy%2F4MPWU%2F%2FT%2BRQIxLJNDLkdUqdh%2BMGvLYs6q%2FNPYjn8g2A44Nagb3gDCPcH&X-Amz-Signature=fe5938c96dc9e27d38d51cf78c5491cf1f17cfe317553469c592a6c6c5e49a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PTAQU6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH%2BuD8eiIBQneg4q6%2BMtSkI9RTr4VSag2REt3ATkFlGWAiBAqv4mNKD11gu1PU4hxyzQVSL0SB2t91S0peNHh8QMMCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMksps%2Fb63UHhoeThZKtwDCgZkqaNBFD22G83DZfijA0jDYm4DNK1Gd66OftNaBRGL4x2sTXzZYbB8Kc8of5ntUluze2BQzBcwS7GIjVJpbvGlK6%2BiHCXGA37AJofRQC7UoGRgXBv4zCgoluxKELEQ4C9tzOesXPY40ELGUyv9oNUtj92PxG%2F8sbwC3GYiWag6fJIWCgaHhi5Ug16883P7Ipn65il6%2FbdtCb3Y5SvJepvM2gna2hyX0MCoLd3oX4vRkh9G9qNfYx%2F4CyEMPMfRJ5xV9fY23xOLohoY615Qo9Ewg3iCAivu%2F87SH2zJAYZsv3gPMgAFCwCoAXy09JKL2h9Nq7Dg0YRfML%2BXSCOzlfeiPTwTJ6%2BwWLRtIe5HHhOEO52mZgxGRkndeAlA%2B5QLT3cVduwqcRjc806jvuzpRTN70B0Nvpahm20TBlO%2FcdEfxJfu8NyLaCyMqfQ8po%2BNJSxGuVmEB27hEOynOhKA6m6CiSiM1JcKZd8hxPwJ89wNEahzv93W9TcL6vf0mZ6tqdQJQHK3UkIGTUFCk3Dj34IV0Q%2FhqI%2FJoeqxwWakN5uzo1Z4iuJMKWicYC8Nzpu9DBYZ2L1mPGRiar9oxCQc0%2BbCTIRL4oqJZT8bg4aVXlGwT%2BmpMbJlMTqEUukwnvbaxAY6pgEANl9w%2F4xxg79y4YOt2H3dw2ZVLM%2BMOOxjcsuWxZWDLfDiVHMJ3A%2BlkF6M%2B8I3l%2F0Ul7kMlYR2F2DvC1hhItkgdB%2BEoK9V00bBFa49WR8ak%2FwRo9XB1NVXx4FAzbs44KfEw8%2FVavbqRxNpyFrytQW6gIspKTlbP014qVy%2F4MPWU%2F%2FT%2BRQIxLJNDLkdUqdh%2BMGvLYs6q%2FNPYjn8g2A44Nagb3gDCPcH&X-Amz-Signature=c66f1571d894d4f61fdb45f60ed9fd5d38b6a2959ef6f823e41ed1fef2dc43e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PTAQU6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH%2BuD8eiIBQneg4q6%2BMtSkI9RTr4VSag2REt3ATkFlGWAiBAqv4mNKD11gu1PU4hxyzQVSL0SB2t91S0peNHh8QMMCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMksps%2Fb63UHhoeThZKtwDCgZkqaNBFD22G83DZfijA0jDYm4DNK1Gd66OftNaBRGL4x2sTXzZYbB8Kc8of5ntUluze2BQzBcwS7GIjVJpbvGlK6%2BiHCXGA37AJofRQC7UoGRgXBv4zCgoluxKELEQ4C9tzOesXPY40ELGUyv9oNUtj92PxG%2F8sbwC3GYiWag6fJIWCgaHhi5Ug16883P7Ipn65il6%2FbdtCb3Y5SvJepvM2gna2hyX0MCoLd3oX4vRkh9G9qNfYx%2F4CyEMPMfRJ5xV9fY23xOLohoY615Qo9Ewg3iCAivu%2F87SH2zJAYZsv3gPMgAFCwCoAXy09JKL2h9Nq7Dg0YRfML%2BXSCOzlfeiPTwTJ6%2BwWLRtIe5HHhOEO52mZgxGRkndeAlA%2B5QLT3cVduwqcRjc806jvuzpRTN70B0Nvpahm20TBlO%2FcdEfxJfu8NyLaCyMqfQ8po%2BNJSxGuVmEB27hEOynOhKA6m6CiSiM1JcKZd8hxPwJ89wNEahzv93W9TcL6vf0mZ6tqdQJQHK3UkIGTUFCk3Dj34IV0Q%2FhqI%2FJoeqxwWakN5uzo1Z4iuJMKWicYC8Nzpu9DBYZ2L1mPGRiar9oxCQc0%2BbCTIRL4oqJZT8bg4aVXlGwT%2BmpMbJlMTqEUukwnvbaxAY6pgEANl9w%2F4xxg79y4YOt2H3dw2ZVLM%2BMOOxjcsuWxZWDLfDiVHMJ3A%2BlkF6M%2B8I3l%2F0Ul7kMlYR2F2DvC1hhItkgdB%2BEoK9V00bBFa49WR8ak%2FwRo9XB1NVXx4FAzbs44KfEw8%2FVavbqRxNpyFrytQW6gIspKTlbP014qVy%2F4MPWU%2F%2FT%2BRQIxLJNDLkdUqdh%2BMGvLYs6q%2FNPYjn8g2A44Nagb3gDCPcH&X-Amz-Signature=73d9b2d3d6cf9684ab87fda964ee82abd6c54d29454534d562f15604cd665935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PTAQU6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH%2BuD8eiIBQneg4q6%2BMtSkI9RTr4VSag2REt3ATkFlGWAiBAqv4mNKD11gu1PU4hxyzQVSL0SB2t91S0peNHh8QMMCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMksps%2Fb63UHhoeThZKtwDCgZkqaNBFD22G83DZfijA0jDYm4DNK1Gd66OftNaBRGL4x2sTXzZYbB8Kc8of5ntUluze2BQzBcwS7GIjVJpbvGlK6%2BiHCXGA37AJofRQC7UoGRgXBv4zCgoluxKELEQ4C9tzOesXPY40ELGUyv9oNUtj92PxG%2F8sbwC3GYiWag6fJIWCgaHhi5Ug16883P7Ipn65il6%2FbdtCb3Y5SvJepvM2gna2hyX0MCoLd3oX4vRkh9G9qNfYx%2F4CyEMPMfRJ5xV9fY23xOLohoY615Qo9Ewg3iCAivu%2F87SH2zJAYZsv3gPMgAFCwCoAXy09JKL2h9Nq7Dg0YRfML%2BXSCOzlfeiPTwTJ6%2BwWLRtIe5HHhOEO52mZgxGRkndeAlA%2B5QLT3cVduwqcRjc806jvuzpRTN70B0Nvpahm20TBlO%2FcdEfxJfu8NyLaCyMqfQ8po%2BNJSxGuVmEB27hEOynOhKA6m6CiSiM1JcKZd8hxPwJ89wNEahzv93W9TcL6vf0mZ6tqdQJQHK3UkIGTUFCk3Dj34IV0Q%2FhqI%2FJoeqxwWakN5uzo1Z4iuJMKWicYC8Nzpu9DBYZ2L1mPGRiar9oxCQc0%2BbCTIRL4oqJZT8bg4aVXlGwT%2BmpMbJlMTqEUukwnvbaxAY6pgEANl9w%2F4xxg79y4YOt2H3dw2ZVLM%2BMOOxjcsuWxZWDLfDiVHMJ3A%2BlkF6M%2B8I3l%2F0Ul7kMlYR2F2DvC1hhItkgdB%2BEoK9V00bBFa49WR8ak%2FwRo9XB1NVXx4FAzbs44KfEw8%2FVavbqRxNpyFrytQW6gIspKTlbP014qVy%2F4MPWU%2F%2FT%2BRQIxLJNDLkdUqdh%2BMGvLYs6q%2FNPYjn8g2A44Nagb3gDCPcH&X-Amz-Signature=981c04bc260d9f84f38a0fa6cc3762b3ea078c28772eb8dc5c5151173643e61c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PTAQU6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH%2BuD8eiIBQneg4q6%2BMtSkI9RTr4VSag2REt3ATkFlGWAiBAqv4mNKD11gu1PU4hxyzQVSL0SB2t91S0peNHh8QMMCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMksps%2Fb63UHhoeThZKtwDCgZkqaNBFD22G83DZfijA0jDYm4DNK1Gd66OftNaBRGL4x2sTXzZYbB8Kc8of5ntUluze2BQzBcwS7GIjVJpbvGlK6%2BiHCXGA37AJofRQC7UoGRgXBv4zCgoluxKELEQ4C9tzOesXPY40ELGUyv9oNUtj92PxG%2F8sbwC3GYiWag6fJIWCgaHhi5Ug16883P7Ipn65il6%2FbdtCb3Y5SvJepvM2gna2hyX0MCoLd3oX4vRkh9G9qNfYx%2F4CyEMPMfRJ5xV9fY23xOLohoY615Qo9Ewg3iCAivu%2F87SH2zJAYZsv3gPMgAFCwCoAXy09JKL2h9Nq7Dg0YRfML%2BXSCOzlfeiPTwTJ6%2BwWLRtIe5HHhOEO52mZgxGRkndeAlA%2B5QLT3cVduwqcRjc806jvuzpRTN70B0Nvpahm20TBlO%2FcdEfxJfu8NyLaCyMqfQ8po%2BNJSxGuVmEB27hEOynOhKA6m6CiSiM1JcKZd8hxPwJ89wNEahzv93W9TcL6vf0mZ6tqdQJQHK3UkIGTUFCk3Dj34IV0Q%2FhqI%2FJoeqxwWakN5uzo1Z4iuJMKWicYC8Nzpu9DBYZ2L1mPGRiar9oxCQc0%2BbCTIRL4oqJZT8bg4aVXlGwT%2BmpMbJlMTqEUukwnvbaxAY6pgEANl9w%2F4xxg79y4YOt2H3dw2ZVLM%2BMOOxjcsuWxZWDLfDiVHMJ3A%2BlkF6M%2B8I3l%2F0Ul7kMlYR2F2DvC1hhItkgdB%2BEoK9V00bBFa49WR8ak%2FwRo9XB1NVXx4FAzbs44KfEw8%2FVavbqRxNpyFrytQW6gIspKTlbP014qVy%2F4MPWU%2F%2FT%2BRQIxLJNDLkdUqdh%2BMGvLYs6q%2FNPYjn8g2A44Nagb3gDCPcH&X-Amz-Signature=2e1f3d49d4bab75b2827af8c40e8100a8ded3154e98464b24b05707446b11bd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
