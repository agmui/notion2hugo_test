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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNP3D3R%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3w643k7hjE9prPq8yvotIcYguJVvXz4Zb0hAQm5A%2F5QIgZVyB0MmkdknYrwmPdukYufLwaqoFiYDSTXNDqUenEHAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMtEYO%2FKwAsEg739MircA%2FJyt%2FMXEfQ0gxUifGEWZxQILJBWH2IBs9LWpFkI5LmqXZd4SWqMWwBFv7P2Vc%2BcHUIc7qevkaHI1tfP03n54RTdmXMorHdWPDX7ZDBR67zPgHpA3%2BHIjKbccmpxCut%2FMvlRfVYBxLF%2FR3OH3Wgty1VniYBV%2BcJ88dbEWIg7qTrvr9scbuPw5utkUrtITfYpg%2BZBdBuAnnALoPBobgUOn2%2FvfPA1C9u97b7WztM3pK3dPkXUEtyJ9RLQj5f33EnVOAD6pYnKRWyK0mrm%2BuzmlXvhM6oNlFEyYjAnRHPyOT1%2FUo8VWD3odIdCG4aomWtpLzjS5H2AGeSlTOaZiZlfLRx7O30J2cjy3ORqLHOMwX4EWT0869eaFnol%2BtRCU24JYCWjDOWNrJTq3AJisp1M3sumfZVvvPx%2BcS%2Fdk3Nm3Eao6t4MQX1z%2BorFfV7xH%2F5p5NBX1wLOeH0hb0xyPXAE6ggHDXNJAcofmI7KB7VurrpQR9d8TaUIKOPvHHPpwen5%2F29l9vL2MIlvRMqtyidLPJU%2BSAGgQu6m6hiiXOV91nKGFHwFZ96r9iIpN9ZBDEcnoegXTVggGgThLuwMz1pMAk6%2BM%2FB6rS7QquUqMaOALFGe9Vy%2FScPzTNOC3%2BvxMJ2L2cUGOqUBvcbu1psSFj1N%2Bl5SpucNfJ%2FCRPchzjKyP5KemjX1Yt8DRgiyhC5wWOo%2BzqJEGNhJB3cvM%2BAjJGBnuSw20BPxaknPEXKRiszCGpHEYIDIAsOUxcnq4U5eL2sJqGbdggsG801pEez05OhDaWWgNNOeB3%2BHKivpOdDDxpbWyfdyLnaEhcG%2FyfArq0lj3MZEmPrT1ALcEsFR%2FsEkERUEQf%2FcMRIshwBY&X-Amz-Signature=3d74f06b0a64a1d45558ca43d4d59ec159d899c16249547e108c60468c3d1bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNP3D3R%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3w643k7hjE9prPq8yvotIcYguJVvXz4Zb0hAQm5A%2F5QIgZVyB0MmkdknYrwmPdukYufLwaqoFiYDSTXNDqUenEHAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMtEYO%2FKwAsEg739MircA%2FJyt%2FMXEfQ0gxUifGEWZxQILJBWH2IBs9LWpFkI5LmqXZd4SWqMWwBFv7P2Vc%2BcHUIc7qevkaHI1tfP03n54RTdmXMorHdWPDX7ZDBR67zPgHpA3%2BHIjKbccmpxCut%2FMvlRfVYBxLF%2FR3OH3Wgty1VniYBV%2BcJ88dbEWIg7qTrvr9scbuPw5utkUrtITfYpg%2BZBdBuAnnALoPBobgUOn2%2FvfPA1C9u97b7WztM3pK3dPkXUEtyJ9RLQj5f33EnVOAD6pYnKRWyK0mrm%2BuzmlXvhM6oNlFEyYjAnRHPyOT1%2FUo8VWD3odIdCG4aomWtpLzjS5H2AGeSlTOaZiZlfLRx7O30J2cjy3ORqLHOMwX4EWT0869eaFnol%2BtRCU24JYCWjDOWNrJTq3AJisp1M3sumfZVvvPx%2BcS%2Fdk3Nm3Eao6t4MQX1z%2BorFfV7xH%2F5p5NBX1wLOeH0hb0xyPXAE6ggHDXNJAcofmI7KB7VurrpQR9d8TaUIKOPvHHPpwen5%2F29l9vL2MIlvRMqtyidLPJU%2BSAGgQu6m6hiiXOV91nKGFHwFZ96r9iIpN9ZBDEcnoegXTVggGgThLuwMz1pMAk6%2BM%2FB6rS7QquUqMaOALFGe9Vy%2FScPzTNOC3%2BvxMJ2L2cUGOqUBvcbu1psSFj1N%2Bl5SpucNfJ%2FCRPchzjKyP5KemjX1Yt8DRgiyhC5wWOo%2BzqJEGNhJB3cvM%2BAjJGBnuSw20BPxaknPEXKRiszCGpHEYIDIAsOUxcnq4U5eL2sJqGbdggsG801pEez05OhDaWWgNNOeB3%2BHKivpOdDDxpbWyfdyLnaEhcG%2FyfArq0lj3MZEmPrT1ALcEsFR%2FsEkERUEQf%2FcMRIshwBY&X-Amz-Signature=77763dedf0c3fd3ef1b0ac6fa1de35303456633f515c68d6efc698b7ef68d9b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNP3D3R%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3w643k7hjE9prPq8yvotIcYguJVvXz4Zb0hAQm5A%2F5QIgZVyB0MmkdknYrwmPdukYufLwaqoFiYDSTXNDqUenEHAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMtEYO%2FKwAsEg739MircA%2FJyt%2FMXEfQ0gxUifGEWZxQILJBWH2IBs9LWpFkI5LmqXZd4SWqMWwBFv7P2Vc%2BcHUIc7qevkaHI1tfP03n54RTdmXMorHdWPDX7ZDBR67zPgHpA3%2BHIjKbccmpxCut%2FMvlRfVYBxLF%2FR3OH3Wgty1VniYBV%2BcJ88dbEWIg7qTrvr9scbuPw5utkUrtITfYpg%2BZBdBuAnnALoPBobgUOn2%2FvfPA1C9u97b7WztM3pK3dPkXUEtyJ9RLQj5f33EnVOAD6pYnKRWyK0mrm%2BuzmlXvhM6oNlFEyYjAnRHPyOT1%2FUo8VWD3odIdCG4aomWtpLzjS5H2AGeSlTOaZiZlfLRx7O30J2cjy3ORqLHOMwX4EWT0869eaFnol%2BtRCU24JYCWjDOWNrJTq3AJisp1M3sumfZVvvPx%2BcS%2Fdk3Nm3Eao6t4MQX1z%2BorFfV7xH%2F5p5NBX1wLOeH0hb0xyPXAE6ggHDXNJAcofmI7KB7VurrpQR9d8TaUIKOPvHHPpwen5%2F29l9vL2MIlvRMqtyidLPJU%2BSAGgQu6m6hiiXOV91nKGFHwFZ96r9iIpN9ZBDEcnoegXTVggGgThLuwMz1pMAk6%2BM%2FB6rS7QquUqMaOALFGe9Vy%2FScPzTNOC3%2BvxMJ2L2cUGOqUBvcbu1psSFj1N%2Bl5SpucNfJ%2FCRPchzjKyP5KemjX1Yt8DRgiyhC5wWOo%2BzqJEGNhJB3cvM%2BAjJGBnuSw20BPxaknPEXKRiszCGpHEYIDIAsOUxcnq4U5eL2sJqGbdggsG801pEez05OhDaWWgNNOeB3%2BHKivpOdDDxpbWyfdyLnaEhcG%2FyfArq0lj3MZEmPrT1ALcEsFR%2FsEkERUEQf%2FcMRIshwBY&X-Amz-Signature=ac1534e2dc809dac11fd8b1b7db46f1f1f690c085ffcd88b3e301613a439f7a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNP3D3R%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3w643k7hjE9prPq8yvotIcYguJVvXz4Zb0hAQm5A%2F5QIgZVyB0MmkdknYrwmPdukYufLwaqoFiYDSTXNDqUenEHAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMtEYO%2FKwAsEg739MircA%2FJyt%2FMXEfQ0gxUifGEWZxQILJBWH2IBs9LWpFkI5LmqXZd4SWqMWwBFv7P2Vc%2BcHUIc7qevkaHI1tfP03n54RTdmXMorHdWPDX7ZDBR67zPgHpA3%2BHIjKbccmpxCut%2FMvlRfVYBxLF%2FR3OH3Wgty1VniYBV%2BcJ88dbEWIg7qTrvr9scbuPw5utkUrtITfYpg%2BZBdBuAnnALoPBobgUOn2%2FvfPA1C9u97b7WztM3pK3dPkXUEtyJ9RLQj5f33EnVOAD6pYnKRWyK0mrm%2BuzmlXvhM6oNlFEyYjAnRHPyOT1%2FUo8VWD3odIdCG4aomWtpLzjS5H2AGeSlTOaZiZlfLRx7O30J2cjy3ORqLHOMwX4EWT0869eaFnol%2BtRCU24JYCWjDOWNrJTq3AJisp1M3sumfZVvvPx%2BcS%2Fdk3Nm3Eao6t4MQX1z%2BorFfV7xH%2F5p5NBX1wLOeH0hb0xyPXAE6ggHDXNJAcofmI7KB7VurrpQR9d8TaUIKOPvHHPpwen5%2F29l9vL2MIlvRMqtyidLPJU%2BSAGgQu6m6hiiXOV91nKGFHwFZ96r9iIpN9ZBDEcnoegXTVggGgThLuwMz1pMAk6%2BM%2FB6rS7QquUqMaOALFGe9Vy%2FScPzTNOC3%2BvxMJ2L2cUGOqUBvcbu1psSFj1N%2Bl5SpucNfJ%2FCRPchzjKyP5KemjX1Yt8DRgiyhC5wWOo%2BzqJEGNhJB3cvM%2BAjJGBnuSw20BPxaknPEXKRiszCGpHEYIDIAsOUxcnq4U5eL2sJqGbdggsG801pEez05OhDaWWgNNOeB3%2BHKivpOdDDxpbWyfdyLnaEhcG%2FyfArq0lj3MZEmPrT1ALcEsFR%2FsEkERUEQf%2FcMRIshwBY&X-Amz-Signature=706be69baacba9cded620fc128f0bad305e90ee6161da2cfba2a2ca67bdf1956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNP3D3R%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3w643k7hjE9prPq8yvotIcYguJVvXz4Zb0hAQm5A%2F5QIgZVyB0MmkdknYrwmPdukYufLwaqoFiYDSTXNDqUenEHAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMtEYO%2FKwAsEg739MircA%2FJyt%2FMXEfQ0gxUifGEWZxQILJBWH2IBs9LWpFkI5LmqXZd4SWqMWwBFv7P2Vc%2BcHUIc7qevkaHI1tfP03n54RTdmXMorHdWPDX7ZDBR67zPgHpA3%2BHIjKbccmpxCut%2FMvlRfVYBxLF%2FR3OH3Wgty1VniYBV%2BcJ88dbEWIg7qTrvr9scbuPw5utkUrtITfYpg%2BZBdBuAnnALoPBobgUOn2%2FvfPA1C9u97b7WztM3pK3dPkXUEtyJ9RLQj5f33EnVOAD6pYnKRWyK0mrm%2BuzmlXvhM6oNlFEyYjAnRHPyOT1%2FUo8VWD3odIdCG4aomWtpLzjS5H2AGeSlTOaZiZlfLRx7O30J2cjy3ORqLHOMwX4EWT0869eaFnol%2BtRCU24JYCWjDOWNrJTq3AJisp1M3sumfZVvvPx%2BcS%2Fdk3Nm3Eao6t4MQX1z%2BorFfV7xH%2F5p5NBX1wLOeH0hb0xyPXAE6ggHDXNJAcofmI7KB7VurrpQR9d8TaUIKOPvHHPpwen5%2F29l9vL2MIlvRMqtyidLPJU%2BSAGgQu6m6hiiXOV91nKGFHwFZ96r9iIpN9ZBDEcnoegXTVggGgThLuwMz1pMAk6%2BM%2FB6rS7QquUqMaOALFGe9Vy%2FScPzTNOC3%2BvxMJ2L2cUGOqUBvcbu1psSFj1N%2Bl5SpucNfJ%2FCRPchzjKyP5KemjX1Yt8DRgiyhC5wWOo%2BzqJEGNhJB3cvM%2BAjJGBnuSw20BPxaknPEXKRiszCGpHEYIDIAsOUxcnq4U5eL2sJqGbdggsG801pEez05OhDaWWgNNOeB3%2BHKivpOdDDxpbWyfdyLnaEhcG%2FyfArq0lj3MZEmPrT1ALcEsFR%2FsEkERUEQf%2FcMRIshwBY&X-Amz-Signature=93fa28587175b5e65dfded5adaab2157c1a3034021142d0096372300c1bd1a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNP3D3R%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3w643k7hjE9prPq8yvotIcYguJVvXz4Zb0hAQm5A%2F5QIgZVyB0MmkdknYrwmPdukYufLwaqoFiYDSTXNDqUenEHAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMtEYO%2FKwAsEg739MircA%2FJyt%2FMXEfQ0gxUifGEWZxQILJBWH2IBs9LWpFkI5LmqXZd4SWqMWwBFv7P2Vc%2BcHUIc7qevkaHI1tfP03n54RTdmXMorHdWPDX7ZDBR67zPgHpA3%2BHIjKbccmpxCut%2FMvlRfVYBxLF%2FR3OH3Wgty1VniYBV%2BcJ88dbEWIg7qTrvr9scbuPw5utkUrtITfYpg%2BZBdBuAnnALoPBobgUOn2%2FvfPA1C9u97b7WztM3pK3dPkXUEtyJ9RLQj5f33EnVOAD6pYnKRWyK0mrm%2BuzmlXvhM6oNlFEyYjAnRHPyOT1%2FUo8VWD3odIdCG4aomWtpLzjS5H2AGeSlTOaZiZlfLRx7O30J2cjy3ORqLHOMwX4EWT0869eaFnol%2BtRCU24JYCWjDOWNrJTq3AJisp1M3sumfZVvvPx%2BcS%2Fdk3Nm3Eao6t4MQX1z%2BorFfV7xH%2F5p5NBX1wLOeH0hb0xyPXAE6ggHDXNJAcofmI7KB7VurrpQR9d8TaUIKOPvHHPpwen5%2F29l9vL2MIlvRMqtyidLPJU%2BSAGgQu6m6hiiXOV91nKGFHwFZ96r9iIpN9ZBDEcnoegXTVggGgThLuwMz1pMAk6%2BM%2FB6rS7QquUqMaOALFGe9Vy%2FScPzTNOC3%2BvxMJ2L2cUGOqUBvcbu1psSFj1N%2Bl5SpucNfJ%2FCRPchzjKyP5KemjX1Yt8DRgiyhC5wWOo%2BzqJEGNhJB3cvM%2BAjJGBnuSw20BPxaknPEXKRiszCGpHEYIDIAsOUxcnq4U5eL2sJqGbdggsG801pEez05OhDaWWgNNOeB3%2BHKivpOdDDxpbWyfdyLnaEhcG%2FyfArq0lj3MZEmPrT1ALcEsFR%2FsEkERUEQf%2FcMRIshwBY&X-Amz-Signature=e13cef9f6e651b02e7c95501b9a7b92cf97c0a146b98ae509a71528b0c6d288b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNP3D3R%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3w643k7hjE9prPq8yvotIcYguJVvXz4Zb0hAQm5A%2F5QIgZVyB0MmkdknYrwmPdukYufLwaqoFiYDSTXNDqUenEHAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMtEYO%2FKwAsEg739MircA%2FJyt%2FMXEfQ0gxUifGEWZxQILJBWH2IBs9LWpFkI5LmqXZd4SWqMWwBFv7P2Vc%2BcHUIc7qevkaHI1tfP03n54RTdmXMorHdWPDX7ZDBR67zPgHpA3%2BHIjKbccmpxCut%2FMvlRfVYBxLF%2FR3OH3Wgty1VniYBV%2BcJ88dbEWIg7qTrvr9scbuPw5utkUrtITfYpg%2BZBdBuAnnALoPBobgUOn2%2FvfPA1C9u97b7WztM3pK3dPkXUEtyJ9RLQj5f33EnVOAD6pYnKRWyK0mrm%2BuzmlXvhM6oNlFEyYjAnRHPyOT1%2FUo8VWD3odIdCG4aomWtpLzjS5H2AGeSlTOaZiZlfLRx7O30J2cjy3ORqLHOMwX4EWT0869eaFnol%2BtRCU24JYCWjDOWNrJTq3AJisp1M3sumfZVvvPx%2BcS%2Fdk3Nm3Eao6t4MQX1z%2BorFfV7xH%2F5p5NBX1wLOeH0hb0xyPXAE6ggHDXNJAcofmI7KB7VurrpQR9d8TaUIKOPvHHPpwen5%2F29l9vL2MIlvRMqtyidLPJU%2BSAGgQu6m6hiiXOV91nKGFHwFZ96r9iIpN9ZBDEcnoegXTVggGgThLuwMz1pMAk6%2BM%2FB6rS7QquUqMaOALFGe9Vy%2FScPzTNOC3%2BvxMJ2L2cUGOqUBvcbu1psSFj1N%2Bl5SpucNfJ%2FCRPchzjKyP5KemjX1Yt8DRgiyhC5wWOo%2BzqJEGNhJB3cvM%2BAjJGBnuSw20BPxaknPEXKRiszCGpHEYIDIAsOUxcnq4U5eL2sJqGbdggsG801pEez05OhDaWWgNNOeB3%2BHKivpOdDDxpbWyfdyLnaEhcG%2FyfArq0lj3MZEmPrT1ALcEsFR%2FsEkERUEQf%2FcMRIshwBY&X-Amz-Signature=ddda077e199553ac7f4823c99916ff849efdc81624cf2a134629b9695d2bc06d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNP3D3R%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3w643k7hjE9prPq8yvotIcYguJVvXz4Zb0hAQm5A%2F5QIgZVyB0MmkdknYrwmPdukYufLwaqoFiYDSTXNDqUenEHAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMtEYO%2FKwAsEg739MircA%2FJyt%2FMXEfQ0gxUifGEWZxQILJBWH2IBs9LWpFkI5LmqXZd4SWqMWwBFv7P2Vc%2BcHUIc7qevkaHI1tfP03n54RTdmXMorHdWPDX7ZDBR67zPgHpA3%2BHIjKbccmpxCut%2FMvlRfVYBxLF%2FR3OH3Wgty1VniYBV%2BcJ88dbEWIg7qTrvr9scbuPw5utkUrtITfYpg%2BZBdBuAnnALoPBobgUOn2%2FvfPA1C9u97b7WztM3pK3dPkXUEtyJ9RLQj5f33EnVOAD6pYnKRWyK0mrm%2BuzmlXvhM6oNlFEyYjAnRHPyOT1%2FUo8VWD3odIdCG4aomWtpLzjS5H2AGeSlTOaZiZlfLRx7O30J2cjy3ORqLHOMwX4EWT0869eaFnol%2BtRCU24JYCWjDOWNrJTq3AJisp1M3sumfZVvvPx%2BcS%2Fdk3Nm3Eao6t4MQX1z%2BorFfV7xH%2F5p5NBX1wLOeH0hb0xyPXAE6ggHDXNJAcofmI7KB7VurrpQR9d8TaUIKOPvHHPpwen5%2F29l9vL2MIlvRMqtyidLPJU%2BSAGgQu6m6hiiXOV91nKGFHwFZ96r9iIpN9ZBDEcnoegXTVggGgThLuwMz1pMAk6%2BM%2FB6rS7QquUqMaOALFGe9Vy%2FScPzTNOC3%2BvxMJ2L2cUGOqUBvcbu1psSFj1N%2Bl5SpucNfJ%2FCRPchzjKyP5KemjX1Yt8DRgiyhC5wWOo%2BzqJEGNhJB3cvM%2BAjJGBnuSw20BPxaknPEXKRiszCGpHEYIDIAsOUxcnq4U5eL2sJqGbdggsG801pEez05OhDaWWgNNOeB3%2BHKivpOdDDxpbWyfdyLnaEhcG%2FyfArq0lj3MZEmPrT1ALcEsFR%2FsEkERUEQf%2FcMRIshwBY&X-Amz-Signature=8e35f60297359cc0b6d4caafeb9715744f00a8867223743f98eee36ad055204b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNP3D3R%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3w643k7hjE9prPq8yvotIcYguJVvXz4Zb0hAQm5A%2F5QIgZVyB0MmkdknYrwmPdukYufLwaqoFiYDSTXNDqUenEHAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMtEYO%2FKwAsEg739MircA%2FJyt%2FMXEfQ0gxUifGEWZxQILJBWH2IBs9LWpFkI5LmqXZd4SWqMWwBFv7P2Vc%2BcHUIc7qevkaHI1tfP03n54RTdmXMorHdWPDX7ZDBR67zPgHpA3%2BHIjKbccmpxCut%2FMvlRfVYBxLF%2FR3OH3Wgty1VniYBV%2BcJ88dbEWIg7qTrvr9scbuPw5utkUrtITfYpg%2BZBdBuAnnALoPBobgUOn2%2FvfPA1C9u97b7WztM3pK3dPkXUEtyJ9RLQj5f33EnVOAD6pYnKRWyK0mrm%2BuzmlXvhM6oNlFEyYjAnRHPyOT1%2FUo8VWD3odIdCG4aomWtpLzjS5H2AGeSlTOaZiZlfLRx7O30J2cjy3ORqLHOMwX4EWT0869eaFnol%2BtRCU24JYCWjDOWNrJTq3AJisp1M3sumfZVvvPx%2BcS%2Fdk3Nm3Eao6t4MQX1z%2BorFfV7xH%2F5p5NBX1wLOeH0hb0xyPXAE6ggHDXNJAcofmI7KB7VurrpQR9d8TaUIKOPvHHPpwen5%2F29l9vL2MIlvRMqtyidLPJU%2BSAGgQu6m6hiiXOV91nKGFHwFZ96r9iIpN9ZBDEcnoegXTVggGgThLuwMz1pMAk6%2BM%2FB6rS7QquUqMaOALFGe9Vy%2FScPzTNOC3%2BvxMJ2L2cUGOqUBvcbu1psSFj1N%2Bl5SpucNfJ%2FCRPchzjKyP5KemjX1Yt8DRgiyhC5wWOo%2BzqJEGNhJB3cvM%2BAjJGBnuSw20BPxaknPEXKRiszCGpHEYIDIAsOUxcnq4U5eL2sJqGbdggsG801pEez05OhDaWWgNNOeB3%2BHKivpOdDDxpbWyfdyLnaEhcG%2FyfArq0lj3MZEmPrT1ALcEsFR%2FsEkERUEQf%2FcMRIshwBY&X-Amz-Signature=6a9a3c07d714bc5709960e1f778ca93c19c9a7b03827ae6d1a41f6dedc67df5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNP3D3R%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3w643k7hjE9prPq8yvotIcYguJVvXz4Zb0hAQm5A%2F5QIgZVyB0MmkdknYrwmPdukYufLwaqoFiYDSTXNDqUenEHAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMtEYO%2FKwAsEg739MircA%2FJyt%2FMXEfQ0gxUifGEWZxQILJBWH2IBs9LWpFkI5LmqXZd4SWqMWwBFv7P2Vc%2BcHUIc7qevkaHI1tfP03n54RTdmXMorHdWPDX7ZDBR67zPgHpA3%2BHIjKbccmpxCut%2FMvlRfVYBxLF%2FR3OH3Wgty1VniYBV%2BcJ88dbEWIg7qTrvr9scbuPw5utkUrtITfYpg%2BZBdBuAnnALoPBobgUOn2%2FvfPA1C9u97b7WztM3pK3dPkXUEtyJ9RLQj5f33EnVOAD6pYnKRWyK0mrm%2BuzmlXvhM6oNlFEyYjAnRHPyOT1%2FUo8VWD3odIdCG4aomWtpLzjS5H2AGeSlTOaZiZlfLRx7O30J2cjy3ORqLHOMwX4EWT0869eaFnol%2BtRCU24JYCWjDOWNrJTq3AJisp1M3sumfZVvvPx%2BcS%2Fdk3Nm3Eao6t4MQX1z%2BorFfV7xH%2F5p5NBX1wLOeH0hb0xyPXAE6ggHDXNJAcofmI7KB7VurrpQR9d8TaUIKOPvHHPpwen5%2F29l9vL2MIlvRMqtyidLPJU%2BSAGgQu6m6hiiXOV91nKGFHwFZ96r9iIpN9ZBDEcnoegXTVggGgThLuwMz1pMAk6%2BM%2FB6rS7QquUqMaOALFGe9Vy%2FScPzTNOC3%2BvxMJ2L2cUGOqUBvcbu1psSFj1N%2Bl5SpucNfJ%2FCRPchzjKyP5KemjX1Yt8DRgiyhC5wWOo%2BzqJEGNhJB3cvM%2BAjJGBnuSw20BPxaknPEXKRiszCGpHEYIDIAsOUxcnq4U5eL2sJqGbdggsG801pEez05OhDaWWgNNOeB3%2BHKivpOdDDxpbWyfdyLnaEhcG%2FyfArq0lj3MZEmPrT1ALcEsFR%2FsEkERUEQf%2FcMRIshwBY&X-Amz-Signature=f6bfa0b0328bc759134a3db01cf965ba2d046d23d0826b1d71dadcaca5fdc1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNP3D3R%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3w643k7hjE9prPq8yvotIcYguJVvXz4Zb0hAQm5A%2F5QIgZVyB0MmkdknYrwmPdukYufLwaqoFiYDSTXNDqUenEHAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMtEYO%2FKwAsEg739MircA%2FJyt%2FMXEfQ0gxUifGEWZxQILJBWH2IBs9LWpFkI5LmqXZd4SWqMWwBFv7P2Vc%2BcHUIc7qevkaHI1tfP03n54RTdmXMorHdWPDX7ZDBR67zPgHpA3%2BHIjKbccmpxCut%2FMvlRfVYBxLF%2FR3OH3Wgty1VniYBV%2BcJ88dbEWIg7qTrvr9scbuPw5utkUrtITfYpg%2BZBdBuAnnALoPBobgUOn2%2FvfPA1C9u97b7WztM3pK3dPkXUEtyJ9RLQj5f33EnVOAD6pYnKRWyK0mrm%2BuzmlXvhM6oNlFEyYjAnRHPyOT1%2FUo8VWD3odIdCG4aomWtpLzjS5H2AGeSlTOaZiZlfLRx7O30J2cjy3ORqLHOMwX4EWT0869eaFnol%2BtRCU24JYCWjDOWNrJTq3AJisp1M3sumfZVvvPx%2BcS%2Fdk3Nm3Eao6t4MQX1z%2BorFfV7xH%2F5p5NBX1wLOeH0hb0xyPXAE6ggHDXNJAcofmI7KB7VurrpQR9d8TaUIKOPvHHPpwen5%2F29l9vL2MIlvRMqtyidLPJU%2BSAGgQu6m6hiiXOV91nKGFHwFZ96r9iIpN9ZBDEcnoegXTVggGgThLuwMz1pMAk6%2BM%2FB6rS7QquUqMaOALFGe9Vy%2FScPzTNOC3%2BvxMJ2L2cUGOqUBvcbu1psSFj1N%2Bl5SpucNfJ%2FCRPchzjKyP5KemjX1Yt8DRgiyhC5wWOo%2BzqJEGNhJB3cvM%2BAjJGBnuSw20BPxaknPEXKRiszCGpHEYIDIAsOUxcnq4U5eL2sJqGbdggsG801pEez05OhDaWWgNNOeB3%2BHKivpOdDDxpbWyfdyLnaEhcG%2FyfArq0lj3MZEmPrT1ALcEsFR%2FsEkERUEQf%2FcMRIshwBY&X-Amz-Signature=b4c1662405bdf6c25201c139e8702fc3573924bbf7b565ec8034022e0cfb9290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNP3D3R%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3w643k7hjE9prPq8yvotIcYguJVvXz4Zb0hAQm5A%2F5QIgZVyB0MmkdknYrwmPdukYufLwaqoFiYDSTXNDqUenEHAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMtEYO%2FKwAsEg739MircA%2FJyt%2FMXEfQ0gxUifGEWZxQILJBWH2IBs9LWpFkI5LmqXZd4SWqMWwBFv7P2Vc%2BcHUIc7qevkaHI1tfP03n54RTdmXMorHdWPDX7ZDBR67zPgHpA3%2BHIjKbccmpxCut%2FMvlRfVYBxLF%2FR3OH3Wgty1VniYBV%2BcJ88dbEWIg7qTrvr9scbuPw5utkUrtITfYpg%2BZBdBuAnnALoPBobgUOn2%2FvfPA1C9u97b7WztM3pK3dPkXUEtyJ9RLQj5f33EnVOAD6pYnKRWyK0mrm%2BuzmlXvhM6oNlFEyYjAnRHPyOT1%2FUo8VWD3odIdCG4aomWtpLzjS5H2AGeSlTOaZiZlfLRx7O30J2cjy3ORqLHOMwX4EWT0869eaFnol%2BtRCU24JYCWjDOWNrJTq3AJisp1M3sumfZVvvPx%2BcS%2Fdk3Nm3Eao6t4MQX1z%2BorFfV7xH%2F5p5NBX1wLOeH0hb0xyPXAE6ggHDXNJAcofmI7KB7VurrpQR9d8TaUIKOPvHHPpwen5%2F29l9vL2MIlvRMqtyidLPJU%2BSAGgQu6m6hiiXOV91nKGFHwFZ96r9iIpN9ZBDEcnoegXTVggGgThLuwMz1pMAk6%2BM%2FB6rS7QquUqMaOALFGe9Vy%2FScPzTNOC3%2BvxMJ2L2cUGOqUBvcbu1psSFj1N%2Bl5SpucNfJ%2FCRPchzjKyP5KemjX1Yt8DRgiyhC5wWOo%2BzqJEGNhJB3cvM%2BAjJGBnuSw20BPxaknPEXKRiszCGpHEYIDIAsOUxcnq4U5eL2sJqGbdggsG801pEez05OhDaWWgNNOeB3%2BHKivpOdDDxpbWyfdyLnaEhcG%2FyfArq0lj3MZEmPrT1ALcEsFR%2FsEkERUEQf%2FcMRIshwBY&X-Amz-Signature=31a09b8609876390c8c6cb88530cabeacf975b5ea81be4352064d82348a4309a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNP3D3R%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3w643k7hjE9prPq8yvotIcYguJVvXz4Zb0hAQm5A%2F5QIgZVyB0MmkdknYrwmPdukYufLwaqoFiYDSTXNDqUenEHAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMtEYO%2FKwAsEg739MircA%2FJyt%2FMXEfQ0gxUifGEWZxQILJBWH2IBs9LWpFkI5LmqXZd4SWqMWwBFv7P2Vc%2BcHUIc7qevkaHI1tfP03n54RTdmXMorHdWPDX7ZDBR67zPgHpA3%2BHIjKbccmpxCut%2FMvlRfVYBxLF%2FR3OH3Wgty1VniYBV%2BcJ88dbEWIg7qTrvr9scbuPw5utkUrtITfYpg%2BZBdBuAnnALoPBobgUOn2%2FvfPA1C9u97b7WztM3pK3dPkXUEtyJ9RLQj5f33EnVOAD6pYnKRWyK0mrm%2BuzmlXvhM6oNlFEyYjAnRHPyOT1%2FUo8VWD3odIdCG4aomWtpLzjS5H2AGeSlTOaZiZlfLRx7O30J2cjy3ORqLHOMwX4EWT0869eaFnol%2BtRCU24JYCWjDOWNrJTq3AJisp1M3sumfZVvvPx%2BcS%2Fdk3Nm3Eao6t4MQX1z%2BorFfV7xH%2F5p5NBX1wLOeH0hb0xyPXAE6ggHDXNJAcofmI7KB7VurrpQR9d8TaUIKOPvHHPpwen5%2F29l9vL2MIlvRMqtyidLPJU%2BSAGgQu6m6hiiXOV91nKGFHwFZ96r9iIpN9ZBDEcnoegXTVggGgThLuwMz1pMAk6%2BM%2FB6rS7QquUqMaOALFGe9Vy%2FScPzTNOC3%2BvxMJ2L2cUGOqUBvcbu1psSFj1N%2Bl5SpucNfJ%2FCRPchzjKyP5KemjX1Yt8DRgiyhC5wWOo%2BzqJEGNhJB3cvM%2BAjJGBnuSw20BPxaknPEXKRiszCGpHEYIDIAsOUxcnq4U5eL2sJqGbdggsG801pEez05OhDaWWgNNOeB3%2BHKivpOdDDxpbWyfdyLnaEhcG%2FyfArq0lj3MZEmPrT1ALcEsFR%2FsEkERUEQf%2FcMRIshwBY&X-Amz-Signature=9f6a3dc45298189099d40b44ec351778b3756fca92a885c80fe06954bc6618c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JNP3D3R%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3w643k7hjE9prPq8yvotIcYguJVvXz4Zb0hAQm5A%2F5QIgZVyB0MmkdknYrwmPdukYufLwaqoFiYDSTXNDqUenEHAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMtEYO%2FKwAsEg739MircA%2FJyt%2FMXEfQ0gxUifGEWZxQILJBWH2IBs9LWpFkI5LmqXZd4SWqMWwBFv7P2Vc%2BcHUIc7qevkaHI1tfP03n54RTdmXMorHdWPDX7ZDBR67zPgHpA3%2BHIjKbccmpxCut%2FMvlRfVYBxLF%2FR3OH3Wgty1VniYBV%2BcJ88dbEWIg7qTrvr9scbuPw5utkUrtITfYpg%2BZBdBuAnnALoPBobgUOn2%2FvfPA1C9u97b7WztM3pK3dPkXUEtyJ9RLQj5f33EnVOAD6pYnKRWyK0mrm%2BuzmlXvhM6oNlFEyYjAnRHPyOT1%2FUo8VWD3odIdCG4aomWtpLzjS5H2AGeSlTOaZiZlfLRx7O30J2cjy3ORqLHOMwX4EWT0869eaFnol%2BtRCU24JYCWjDOWNrJTq3AJisp1M3sumfZVvvPx%2BcS%2Fdk3Nm3Eao6t4MQX1z%2BorFfV7xH%2F5p5NBX1wLOeH0hb0xyPXAE6ggHDXNJAcofmI7KB7VurrpQR9d8TaUIKOPvHHPpwen5%2F29l9vL2MIlvRMqtyidLPJU%2BSAGgQu6m6hiiXOV91nKGFHwFZ96r9iIpN9ZBDEcnoegXTVggGgThLuwMz1pMAk6%2BM%2FB6rS7QquUqMaOALFGe9Vy%2FScPzTNOC3%2BvxMJ2L2cUGOqUBvcbu1psSFj1N%2Bl5SpucNfJ%2FCRPchzjKyP5KemjX1Yt8DRgiyhC5wWOo%2BzqJEGNhJB3cvM%2BAjJGBnuSw20BPxaknPEXKRiszCGpHEYIDIAsOUxcnq4U5eL2sJqGbdggsG801pEez05OhDaWWgNNOeB3%2BHKivpOdDDxpbWyfdyLnaEhcG%2FyfArq0lj3MZEmPrT1ALcEsFR%2FsEkERUEQf%2FcMRIshwBY&X-Amz-Signature=9d79d1b88e2d6061d8e7c73e07d49372db0d343e045975ad5de636cc36d826bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
