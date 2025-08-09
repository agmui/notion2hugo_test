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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZHW44G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsZKU16coP%2FbSh8M4bmV%2FJVlhP826osr3FGUkWSVENDAIgNkJxNS7ptjYCQAkZjtawXWzLXztorzYese7KPlUT%2BWYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCP5VfrRn8259a6FCrcA1MzwOEjAwm7hl2V3S%2Br6k4fs2pSvaP9MAS1alhqOI3tdFTaw%2F%2FdRXxzGBupGJabbl9HNXJdw7HafP%2BFTHkGx%2Fd1N%2FD2yFIVjg7LsEwIV%2BPHaKR0eCV3UqmKV0listEdJ1LAAK2Sr8vwAF5vcL3Xy3dWyW4Vcyro82e88t6neJcoJmD4oEnmhPXNePTIrlXz4rqa5wVL2qmW5bF1%2Fgq4Afvb4k85sF2DJ3rN7uo%2FH%2FnHKDOkKrBosQKlPP8%2BGvRn1FsJPQkU2%2FTjLsb7uZpAo0zRWIkARJR%2F2QH3O25j0UVmNxG838GkuaIFVPw6vCUB3l0mXFxVhAM4wsqMYQfnjKyw5%2FomYj80Iow10DNIAW%2BK%2BboTblrd6YdM6KBk%2BQ9a940D3WzSceCcb571ZSRGM8Q0HGQIYGCCXjAeJw98FT5cVZLVfW9UZfCP1E8tbyAwVXOu04xZ8Aw2yr9g%2Ftu2yUpulzmSMHIv%2BPG0xIuINkABPNaGz0DXAH8hd7hlePTAGPdErBIcRCRijxV%2FLXzczRqUb050F72WYnP1MMOGJ9eHK%2BsqglxT7HoBzMZVtLlygmPhJS455HJyx1MKa4jrKS7FsXgxtodfVHjBW6PeSxLZFBokAOr25iKqH0Z8MMzo3MQGOqUBgiRuSqFuWNLEQYBkpuWxJ%2B74h8F6Sq8u5m6ksVEoovYao%2FgKGWlkPivyOzBW2C4Xl8m34r14z4CJT6ggJHa6fPMiyb8OYVhcEaTfLiyZ1jJqpsiJAEQlpA4hc%2Fd91cOV8H%2BJccEdOipIAEanVi8Hbhm72kkE5C8yDXogsM6YwecO4ReiH26hWiadL7VejRg%2B2GDLcWqdETRpimGH2wRH%2BTA2wUQj&X-Amz-Signature=3bcc3f8bd156ced21c4f595ce96272ea001fd7735d53d4df4293c373717ce0a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZHW44G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsZKU16coP%2FbSh8M4bmV%2FJVlhP826osr3FGUkWSVENDAIgNkJxNS7ptjYCQAkZjtawXWzLXztorzYese7KPlUT%2BWYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCP5VfrRn8259a6FCrcA1MzwOEjAwm7hl2V3S%2Br6k4fs2pSvaP9MAS1alhqOI3tdFTaw%2F%2FdRXxzGBupGJabbl9HNXJdw7HafP%2BFTHkGx%2Fd1N%2FD2yFIVjg7LsEwIV%2BPHaKR0eCV3UqmKV0listEdJ1LAAK2Sr8vwAF5vcL3Xy3dWyW4Vcyro82e88t6neJcoJmD4oEnmhPXNePTIrlXz4rqa5wVL2qmW5bF1%2Fgq4Afvb4k85sF2DJ3rN7uo%2FH%2FnHKDOkKrBosQKlPP8%2BGvRn1FsJPQkU2%2FTjLsb7uZpAo0zRWIkARJR%2F2QH3O25j0UVmNxG838GkuaIFVPw6vCUB3l0mXFxVhAM4wsqMYQfnjKyw5%2FomYj80Iow10DNIAW%2BK%2BboTblrd6YdM6KBk%2BQ9a940D3WzSceCcb571ZSRGM8Q0HGQIYGCCXjAeJw98FT5cVZLVfW9UZfCP1E8tbyAwVXOu04xZ8Aw2yr9g%2Ftu2yUpulzmSMHIv%2BPG0xIuINkABPNaGz0DXAH8hd7hlePTAGPdErBIcRCRijxV%2FLXzczRqUb050F72WYnP1MMOGJ9eHK%2BsqglxT7HoBzMZVtLlygmPhJS455HJyx1MKa4jrKS7FsXgxtodfVHjBW6PeSxLZFBokAOr25iKqH0Z8MMzo3MQGOqUBgiRuSqFuWNLEQYBkpuWxJ%2B74h8F6Sq8u5m6ksVEoovYao%2FgKGWlkPivyOzBW2C4Xl8m34r14z4CJT6ggJHa6fPMiyb8OYVhcEaTfLiyZ1jJqpsiJAEQlpA4hc%2Fd91cOV8H%2BJccEdOipIAEanVi8Hbhm72kkE5C8yDXogsM6YwecO4ReiH26hWiadL7VejRg%2B2GDLcWqdETRpimGH2wRH%2BTA2wUQj&X-Amz-Signature=f2946a6c7ab8c56c27e7242b3c61c1666d57db4146cfe82b3ea8d261778e4ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZHW44G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsZKU16coP%2FbSh8M4bmV%2FJVlhP826osr3FGUkWSVENDAIgNkJxNS7ptjYCQAkZjtawXWzLXztorzYese7KPlUT%2BWYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCP5VfrRn8259a6FCrcA1MzwOEjAwm7hl2V3S%2Br6k4fs2pSvaP9MAS1alhqOI3tdFTaw%2F%2FdRXxzGBupGJabbl9HNXJdw7HafP%2BFTHkGx%2Fd1N%2FD2yFIVjg7LsEwIV%2BPHaKR0eCV3UqmKV0listEdJ1LAAK2Sr8vwAF5vcL3Xy3dWyW4Vcyro82e88t6neJcoJmD4oEnmhPXNePTIrlXz4rqa5wVL2qmW5bF1%2Fgq4Afvb4k85sF2DJ3rN7uo%2FH%2FnHKDOkKrBosQKlPP8%2BGvRn1FsJPQkU2%2FTjLsb7uZpAo0zRWIkARJR%2F2QH3O25j0UVmNxG838GkuaIFVPw6vCUB3l0mXFxVhAM4wsqMYQfnjKyw5%2FomYj80Iow10DNIAW%2BK%2BboTblrd6YdM6KBk%2BQ9a940D3WzSceCcb571ZSRGM8Q0HGQIYGCCXjAeJw98FT5cVZLVfW9UZfCP1E8tbyAwVXOu04xZ8Aw2yr9g%2Ftu2yUpulzmSMHIv%2BPG0xIuINkABPNaGz0DXAH8hd7hlePTAGPdErBIcRCRijxV%2FLXzczRqUb050F72WYnP1MMOGJ9eHK%2BsqglxT7HoBzMZVtLlygmPhJS455HJyx1MKa4jrKS7FsXgxtodfVHjBW6PeSxLZFBokAOr25iKqH0Z8MMzo3MQGOqUBgiRuSqFuWNLEQYBkpuWxJ%2B74h8F6Sq8u5m6ksVEoovYao%2FgKGWlkPivyOzBW2C4Xl8m34r14z4CJT6ggJHa6fPMiyb8OYVhcEaTfLiyZ1jJqpsiJAEQlpA4hc%2Fd91cOV8H%2BJccEdOipIAEanVi8Hbhm72kkE5C8yDXogsM6YwecO4ReiH26hWiadL7VejRg%2B2GDLcWqdETRpimGH2wRH%2BTA2wUQj&X-Amz-Signature=2401207a89750e293d3f47057a52fc136af7127ad5d36e706c0e923307183171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZHW44G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsZKU16coP%2FbSh8M4bmV%2FJVlhP826osr3FGUkWSVENDAIgNkJxNS7ptjYCQAkZjtawXWzLXztorzYese7KPlUT%2BWYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCP5VfrRn8259a6FCrcA1MzwOEjAwm7hl2V3S%2Br6k4fs2pSvaP9MAS1alhqOI3tdFTaw%2F%2FdRXxzGBupGJabbl9HNXJdw7HafP%2BFTHkGx%2Fd1N%2FD2yFIVjg7LsEwIV%2BPHaKR0eCV3UqmKV0listEdJ1LAAK2Sr8vwAF5vcL3Xy3dWyW4Vcyro82e88t6neJcoJmD4oEnmhPXNePTIrlXz4rqa5wVL2qmW5bF1%2Fgq4Afvb4k85sF2DJ3rN7uo%2FH%2FnHKDOkKrBosQKlPP8%2BGvRn1FsJPQkU2%2FTjLsb7uZpAo0zRWIkARJR%2F2QH3O25j0UVmNxG838GkuaIFVPw6vCUB3l0mXFxVhAM4wsqMYQfnjKyw5%2FomYj80Iow10DNIAW%2BK%2BboTblrd6YdM6KBk%2BQ9a940D3WzSceCcb571ZSRGM8Q0HGQIYGCCXjAeJw98FT5cVZLVfW9UZfCP1E8tbyAwVXOu04xZ8Aw2yr9g%2Ftu2yUpulzmSMHIv%2BPG0xIuINkABPNaGz0DXAH8hd7hlePTAGPdErBIcRCRijxV%2FLXzczRqUb050F72WYnP1MMOGJ9eHK%2BsqglxT7HoBzMZVtLlygmPhJS455HJyx1MKa4jrKS7FsXgxtodfVHjBW6PeSxLZFBokAOr25iKqH0Z8MMzo3MQGOqUBgiRuSqFuWNLEQYBkpuWxJ%2B74h8F6Sq8u5m6ksVEoovYao%2FgKGWlkPivyOzBW2C4Xl8m34r14z4CJT6ggJHa6fPMiyb8OYVhcEaTfLiyZ1jJqpsiJAEQlpA4hc%2Fd91cOV8H%2BJccEdOipIAEanVi8Hbhm72kkE5C8yDXogsM6YwecO4ReiH26hWiadL7VejRg%2B2GDLcWqdETRpimGH2wRH%2BTA2wUQj&X-Amz-Signature=75a92c899e465ff3308f69961406a4d3c0f9a70bedf15d13246d8d6c2383f358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZHW44G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsZKU16coP%2FbSh8M4bmV%2FJVlhP826osr3FGUkWSVENDAIgNkJxNS7ptjYCQAkZjtawXWzLXztorzYese7KPlUT%2BWYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCP5VfrRn8259a6FCrcA1MzwOEjAwm7hl2V3S%2Br6k4fs2pSvaP9MAS1alhqOI3tdFTaw%2F%2FdRXxzGBupGJabbl9HNXJdw7HafP%2BFTHkGx%2Fd1N%2FD2yFIVjg7LsEwIV%2BPHaKR0eCV3UqmKV0listEdJ1LAAK2Sr8vwAF5vcL3Xy3dWyW4Vcyro82e88t6neJcoJmD4oEnmhPXNePTIrlXz4rqa5wVL2qmW5bF1%2Fgq4Afvb4k85sF2DJ3rN7uo%2FH%2FnHKDOkKrBosQKlPP8%2BGvRn1FsJPQkU2%2FTjLsb7uZpAo0zRWIkARJR%2F2QH3O25j0UVmNxG838GkuaIFVPw6vCUB3l0mXFxVhAM4wsqMYQfnjKyw5%2FomYj80Iow10DNIAW%2BK%2BboTblrd6YdM6KBk%2BQ9a940D3WzSceCcb571ZSRGM8Q0HGQIYGCCXjAeJw98FT5cVZLVfW9UZfCP1E8tbyAwVXOu04xZ8Aw2yr9g%2Ftu2yUpulzmSMHIv%2BPG0xIuINkABPNaGz0DXAH8hd7hlePTAGPdErBIcRCRijxV%2FLXzczRqUb050F72WYnP1MMOGJ9eHK%2BsqglxT7HoBzMZVtLlygmPhJS455HJyx1MKa4jrKS7FsXgxtodfVHjBW6PeSxLZFBokAOr25iKqH0Z8MMzo3MQGOqUBgiRuSqFuWNLEQYBkpuWxJ%2B74h8F6Sq8u5m6ksVEoovYao%2FgKGWlkPivyOzBW2C4Xl8m34r14z4CJT6ggJHa6fPMiyb8OYVhcEaTfLiyZ1jJqpsiJAEQlpA4hc%2Fd91cOV8H%2BJccEdOipIAEanVi8Hbhm72kkE5C8yDXogsM6YwecO4ReiH26hWiadL7VejRg%2B2GDLcWqdETRpimGH2wRH%2BTA2wUQj&X-Amz-Signature=71aa9500088a9641dbb97694af4ec4704d824a52aac12b2a6c86d17d6e3ca719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZHW44G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsZKU16coP%2FbSh8M4bmV%2FJVlhP826osr3FGUkWSVENDAIgNkJxNS7ptjYCQAkZjtawXWzLXztorzYese7KPlUT%2BWYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCP5VfrRn8259a6FCrcA1MzwOEjAwm7hl2V3S%2Br6k4fs2pSvaP9MAS1alhqOI3tdFTaw%2F%2FdRXxzGBupGJabbl9HNXJdw7HafP%2BFTHkGx%2Fd1N%2FD2yFIVjg7LsEwIV%2BPHaKR0eCV3UqmKV0listEdJ1LAAK2Sr8vwAF5vcL3Xy3dWyW4Vcyro82e88t6neJcoJmD4oEnmhPXNePTIrlXz4rqa5wVL2qmW5bF1%2Fgq4Afvb4k85sF2DJ3rN7uo%2FH%2FnHKDOkKrBosQKlPP8%2BGvRn1FsJPQkU2%2FTjLsb7uZpAo0zRWIkARJR%2F2QH3O25j0UVmNxG838GkuaIFVPw6vCUB3l0mXFxVhAM4wsqMYQfnjKyw5%2FomYj80Iow10DNIAW%2BK%2BboTblrd6YdM6KBk%2BQ9a940D3WzSceCcb571ZSRGM8Q0HGQIYGCCXjAeJw98FT5cVZLVfW9UZfCP1E8tbyAwVXOu04xZ8Aw2yr9g%2Ftu2yUpulzmSMHIv%2BPG0xIuINkABPNaGz0DXAH8hd7hlePTAGPdErBIcRCRijxV%2FLXzczRqUb050F72WYnP1MMOGJ9eHK%2BsqglxT7HoBzMZVtLlygmPhJS455HJyx1MKa4jrKS7FsXgxtodfVHjBW6PeSxLZFBokAOr25iKqH0Z8MMzo3MQGOqUBgiRuSqFuWNLEQYBkpuWxJ%2B74h8F6Sq8u5m6ksVEoovYao%2FgKGWlkPivyOzBW2C4Xl8m34r14z4CJT6ggJHa6fPMiyb8OYVhcEaTfLiyZ1jJqpsiJAEQlpA4hc%2Fd91cOV8H%2BJccEdOipIAEanVi8Hbhm72kkE5C8yDXogsM6YwecO4ReiH26hWiadL7VejRg%2B2GDLcWqdETRpimGH2wRH%2BTA2wUQj&X-Amz-Signature=155ca7d906640eb30dfb50c70238e7cd98df58de12111a160af633b264537fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZHW44G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsZKU16coP%2FbSh8M4bmV%2FJVlhP826osr3FGUkWSVENDAIgNkJxNS7ptjYCQAkZjtawXWzLXztorzYese7KPlUT%2BWYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCP5VfrRn8259a6FCrcA1MzwOEjAwm7hl2V3S%2Br6k4fs2pSvaP9MAS1alhqOI3tdFTaw%2F%2FdRXxzGBupGJabbl9HNXJdw7HafP%2BFTHkGx%2Fd1N%2FD2yFIVjg7LsEwIV%2BPHaKR0eCV3UqmKV0listEdJ1LAAK2Sr8vwAF5vcL3Xy3dWyW4Vcyro82e88t6neJcoJmD4oEnmhPXNePTIrlXz4rqa5wVL2qmW5bF1%2Fgq4Afvb4k85sF2DJ3rN7uo%2FH%2FnHKDOkKrBosQKlPP8%2BGvRn1FsJPQkU2%2FTjLsb7uZpAo0zRWIkARJR%2F2QH3O25j0UVmNxG838GkuaIFVPw6vCUB3l0mXFxVhAM4wsqMYQfnjKyw5%2FomYj80Iow10DNIAW%2BK%2BboTblrd6YdM6KBk%2BQ9a940D3WzSceCcb571ZSRGM8Q0HGQIYGCCXjAeJw98FT5cVZLVfW9UZfCP1E8tbyAwVXOu04xZ8Aw2yr9g%2Ftu2yUpulzmSMHIv%2BPG0xIuINkABPNaGz0DXAH8hd7hlePTAGPdErBIcRCRijxV%2FLXzczRqUb050F72WYnP1MMOGJ9eHK%2BsqglxT7HoBzMZVtLlygmPhJS455HJyx1MKa4jrKS7FsXgxtodfVHjBW6PeSxLZFBokAOr25iKqH0Z8MMzo3MQGOqUBgiRuSqFuWNLEQYBkpuWxJ%2B74h8F6Sq8u5m6ksVEoovYao%2FgKGWlkPivyOzBW2C4Xl8m34r14z4CJT6ggJHa6fPMiyb8OYVhcEaTfLiyZ1jJqpsiJAEQlpA4hc%2Fd91cOV8H%2BJccEdOipIAEanVi8Hbhm72kkE5C8yDXogsM6YwecO4ReiH26hWiadL7VejRg%2B2GDLcWqdETRpimGH2wRH%2BTA2wUQj&X-Amz-Signature=941b29524a8b6e8f1dbc3797c6e8f3dc1e52e52890b0e9e443e4fd44fc47e11c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZHW44G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsZKU16coP%2FbSh8M4bmV%2FJVlhP826osr3FGUkWSVENDAIgNkJxNS7ptjYCQAkZjtawXWzLXztorzYese7KPlUT%2BWYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCP5VfrRn8259a6FCrcA1MzwOEjAwm7hl2V3S%2Br6k4fs2pSvaP9MAS1alhqOI3tdFTaw%2F%2FdRXxzGBupGJabbl9HNXJdw7HafP%2BFTHkGx%2Fd1N%2FD2yFIVjg7LsEwIV%2BPHaKR0eCV3UqmKV0listEdJ1LAAK2Sr8vwAF5vcL3Xy3dWyW4Vcyro82e88t6neJcoJmD4oEnmhPXNePTIrlXz4rqa5wVL2qmW5bF1%2Fgq4Afvb4k85sF2DJ3rN7uo%2FH%2FnHKDOkKrBosQKlPP8%2BGvRn1FsJPQkU2%2FTjLsb7uZpAo0zRWIkARJR%2F2QH3O25j0UVmNxG838GkuaIFVPw6vCUB3l0mXFxVhAM4wsqMYQfnjKyw5%2FomYj80Iow10DNIAW%2BK%2BboTblrd6YdM6KBk%2BQ9a940D3WzSceCcb571ZSRGM8Q0HGQIYGCCXjAeJw98FT5cVZLVfW9UZfCP1E8tbyAwVXOu04xZ8Aw2yr9g%2Ftu2yUpulzmSMHIv%2BPG0xIuINkABPNaGz0DXAH8hd7hlePTAGPdErBIcRCRijxV%2FLXzczRqUb050F72WYnP1MMOGJ9eHK%2BsqglxT7HoBzMZVtLlygmPhJS455HJyx1MKa4jrKS7FsXgxtodfVHjBW6PeSxLZFBokAOr25iKqH0Z8MMzo3MQGOqUBgiRuSqFuWNLEQYBkpuWxJ%2B74h8F6Sq8u5m6ksVEoovYao%2FgKGWlkPivyOzBW2C4Xl8m34r14z4CJT6ggJHa6fPMiyb8OYVhcEaTfLiyZ1jJqpsiJAEQlpA4hc%2Fd91cOV8H%2BJccEdOipIAEanVi8Hbhm72kkE5C8yDXogsM6YwecO4ReiH26hWiadL7VejRg%2B2GDLcWqdETRpimGH2wRH%2BTA2wUQj&X-Amz-Signature=defb1c07153c6e7516648dfbc80abe6cdeb1850804df1fe7103a563d0381f964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZHW44G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsZKU16coP%2FbSh8M4bmV%2FJVlhP826osr3FGUkWSVENDAIgNkJxNS7ptjYCQAkZjtawXWzLXztorzYese7KPlUT%2BWYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCP5VfrRn8259a6FCrcA1MzwOEjAwm7hl2V3S%2Br6k4fs2pSvaP9MAS1alhqOI3tdFTaw%2F%2FdRXxzGBupGJabbl9HNXJdw7HafP%2BFTHkGx%2Fd1N%2FD2yFIVjg7LsEwIV%2BPHaKR0eCV3UqmKV0listEdJ1LAAK2Sr8vwAF5vcL3Xy3dWyW4Vcyro82e88t6neJcoJmD4oEnmhPXNePTIrlXz4rqa5wVL2qmW5bF1%2Fgq4Afvb4k85sF2DJ3rN7uo%2FH%2FnHKDOkKrBosQKlPP8%2BGvRn1FsJPQkU2%2FTjLsb7uZpAo0zRWIkARJR%2F2QH3O25j0UVmNxG838GkuaIFVPw6vCUB3l0mXFxVhAM4wsqMYQfnjKyw5%2FomYj80Iow10DNIAW%2BK%2BboTblrd6YdM6KBk%2BQ9a940D3WzSceCcb571ZSRGM8Q0HGQIYGCCXjAeJw98FT5cVZLVfW9UZfCP1E8tbyAwVXOu04xZ8Aw2yr9g%2Ftu2yUpulzmSMHIv%2BPG0xIuINkABPNaGz0DXAH8hd7hlePTAGPdErBIcRCRijxV%2FLXzczRqUb050F72WYnP1MMOGJ9eHK%2BsqglxT7HoBzMZVtLlygmPhJS455HJyx1MKa4jrKS7FsXgxtodfVHjBW6PeSxLZFBokAOr25iKqH0Z8MMzo3MQGOqUBgiRuSqFuWNLEQYBkpuWxJ%2B74h8F6Sq8u5m6ksVEoovYao%2FgKGWlkPivyOzBW2C4Xl8m34r14z4CJT6ggJHa6fPMiyb8OYVhcEaTfLiyZ1jJqpsiJAEQlpA4hc%2Fd91cOV8H%2BJccEdOipIAEanVi8Hbhm72kkE5C8yDXogsM6YwecO4ReiH26hWiadL7VejRg%2B2GDLcWqdETRpimGH2wRH%2BTA2wUQj&X-Amz-Signature=a798acb5064f9d255f0d48ecf6fa60d322686a96b05bc7061fbcfbd9bcfeab96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZHW44G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsZKU16coP%2FbSh8M4bmV%2FJVlhP826osr3FGUkWSVENDAIgNkJxNS7ptjYCQAkZjtawXWzLXztorzYese7KPlUT%2BWYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCP5VfrRn8259a6FCrcA1MzwOEjAwm7hl2V3S%2Br6k4fs2pSvaP9MAS1alhqOI3tdFTaw%2F%2FdRXxzGBupGJabbl9HNXJdw7HafP%2BFTHkGx%2Fd1N%2FD2yFIVjg7LsEwIV%2BPHaKR0eCV3UqmKV0listEdJ1LAAK2Sr8vwAF5vcL3Xy3dWyW4Vcyro82e88t6neJcoJmD4oEnmhPXNePTIrlXz4rqa5wVL2qmW5bF1%2Fgq4Afvb4k85sF2DJ3rN7uo%2FH%2FnHKDOkKrBosQKlPP8%2BGvRn1FsJPQkU2%2FTjLsb7uZpAo0zRWIkARJR%2F2QH3O25j0UVmNxG838GkuaIFVPw6vCUB3l0mXFxVhAM4wsqMYQfnjKyw5%2FomYj80Iow10DNIAW%2BK%2BboTblrd6YdM6KBk%2BQ9a940D3WzSceCcb571ZSRGM8Q0HGQIYGCCXjAeJw98FT5cVZLVfW9UZfCP1E8tbyAwVXOu04xZ8Aw2yr9g%2Ftu2yUpulzmSMHIv%2BPG0xIuINkABPNaGz0DXAH8hd7hlePTAGPdErBIcRCRijxV%2FLXzczRqUb050F72WYnP1MMOGJ9eHK%2BsqglxT7HoBzMZVtLlygmPhJS455HJyx1MKa4jrKS7FsXgxtodfVHjBW6PeSxLZFBokAOr25iKqH0Z8MMzo3MQGOqUBgiRuSqFuWNLEQYBkpuWxJ%2B74h8F6Sq8u5m6ksVEoovYao%2FgKGWlkPivyOzBW2C4Xl8m34r14z4CJT6ggJHa6fPMiyb8OYVhcEaTfLiyZ1jJqpsiJAEQlpA4hc%2Fd91cOV8H%2BJccEdOipIAEanVi8Hbhm72kkE5C8yDXogsM6YwecO4ReiH26hWiadL7VejRg%2B2GDLcWqdETRpimGH2wRH%2BTA2wUQj&X-Amz-Signature=5fbf9899877c184c9c6830d9c427db5d816a455668acebcda8f927a07a01608d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZHW44G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsZKU16coP%2FbSh8M4bmV%2FJVlhP826osr3FGUkWSVENDAIgNkJxNS7ptjYCQAkZjtawXWzLXztorzYese7KPlUT%2BWYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCP5VfrRn8259a6FCrcA1MzwOEjAwm7hl2V3S%2Br6k4fs2pSvaP9MAS1alhqOI3tdFTaw%2F%2FdRXxzGBupGJabbl9HNXJdw7HafP%2BFTHkGx%2Fd1N%2FD2yFIVjg7LsEwIV%2BPHaKR0eCV3UqmKV0listEdJ1LAAK2Sr8vwAF5vcL3Xy3dWyW4Vcyro82e88t6neJcoJmD4oEnmhPXNePTIrlXz4rqa5wVL2qmW5bF1%2Fgq4Afvb4k85sF2DJ3rN7uo%2FH%2FnHKDOkKrBosQKlPP8%2BGvRn1FsJPQkU2%2FTjLsb7uZpAo0zRWIkARJR%2F2QH3O25j0UVmNxG838GkuaIFVPw6vCUB3l0mXFxVhAM4wsqMYQfnjKyw5%2FomYj80Iow10DNIAW%2BK%2BboTblrd6YdM6KBk%2BQ9a940D3WzSceCcb571ZSRGM8Q0HGQIYGCCXjAeJw98FT5cVZLVfW9UZfCP1E8tbyAwVXOu04xZ8Aw2yr9g%2Ftu2yUpulzmSMHIv%2BPG0xIuINkABPNaGz0DXAH8hd7hlePTAGPdErBIcRCRijxV%2FLXzczRqUb050F72WYnP1MMOGJ9eHK%2BsqglxT7HoBzMZVtLlygmPhJS455HJyx1MKa4jrKS7FsXgxtodfVHjBW6PeSxLZFBokAOr25iKqH0Z8MMzo3MQGOqUBgiRuSqFuWNLEQYBkpuWxJ%2B74h8F6Sq8u5m6ksVEoovYao%2FgKGWlkPivyOzBW2C4Xl8m34r14z4CJT6ggJHa6fPMiyb8OYVhcEaTfLiyZ1jJqpsiJAEQlpA4hc%2Fd91cOV8H%2BJccEdOipIAEanVi8Hbhm72kkE5C8yDXogsM6YwecO4ReiH26hWiadL7VejRg%2B2GDLcWqdETRpimGH2wRH%2BTA2wUQj&X-Amz-Signature=47a2b30eccc9dd477ff070b93d243b6137b42ab1d4cc48e873eea028cc30f5bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZHW44G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsZKU16coP%2FbSh8M4bmV%2FJVlhP826osr3FGUkWSVENDAIgNkJxNS7ptjYCQAkZjtawXWzLXztorzYese7KPlUT%2BWYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCP5VfrRn8259a6FCrcA1MzwOEjAwm7hl2V3S%2Br6k4fs2pSvaP9MAS1alhqOI3tdFTaw%2F%2FdRXxzGBupGJabbl9HNXJdw7HafP%2BFTHkGx%2Fd1N%2FD2yFIVjg7LsEwIV%2BPHaKR0eCV3UqmKV0listEdJ1LAAK2Sr8vwAF5vcL3Xy3dWyW4Vcyro82e88t6neJcoJmD4oEnmhPXNePTIrlXz4rqa5wVL2qmW5bF1%2Fgq4Afvb4k85sF2DJ3rN7uo%2FH%2FnHKDOkKrBosQKlPP8%2BGvRn1FsJPQkU2%2FTjLsb7uZpAo0zRWIkARJR%2F2QH3O25j0UVmNxG838GkuaIFVPw6vCUB3l0mXFxVhAM4wsqMYQfnjKyw5%2FomYj80Iow10DNIAW%2BK%2BboTblrd6YdM6KBk%2BQ9a940D3WzSceCcb571ZSRGM8Q0HGQIYGCCXjAeJw98FT5cVZLVfW9UZfCP1E8tbyAwVXOu04xZ8Aw2yr9g%2Ftu2yUpulzmSMHIv%2BPG0xIuINkABPNaGz0DXAH8hd7hlePTAGPdErBIcRCRijxV%2FLXzczRqUb050F72WYnP1MMOGJ9eHK%2BsqglxT7HoBzMZVtLlygmPhJS455HJyx1MKa4jrKS7FsXgxtodfVHjBW6PeSxLZFBokAOr25iKqH0Z8MMzo3MQGOqUBgiRuSqFuWNLEQYBkpuWxJ%2B74h8F6Sq8u5m6ksVEoovYao%2FgKGWlkPivyOzBW2C4Xl8m34r14z4CJT6ggJHa6fPMiyb8OYVhcEaTfLiyZ1jJqpsiJAEQlpA4hc%2Fd91cOV8H%2BJccEdOipIAEanVi8Hbhm72kkE5C8yDXogsM6YwecO4ReiH26hWiadL7VejRg%2B2GDLcWqdETRpimGH2wRH%2BTA2wUQj&X-Amz-Signature=2068ade45f6b33d774518b8668921f49dac07508f9d32caf39d3d23333e44942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZHW44G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsZKU16coP%2FbSh8M4bmV%2FJVlhP826osr3FGUkWSVENDAIgNkJxNS7ptjYCQAkZjtawXWzLXztorzYese7KPlUT%2BWYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCP5VfrRn8259a6FCrcA1MzwOEjAwm7hl2V3S%2Br6k4fs2pSvaP9MAS1alhqOI3tdFTaw%2F%2FdRXxzGBupGJabbl9HNXJdw7HafP%2BFTHkGx%2Fd1N%2FD2yFIVjg7LsEwIV%2BPHaKR0eCV3UqmKV0listEdJ1LAAK2Sr8vwAF5vcL3Xy3dWyW4Vcyro82e88t6neJcoJmD4oEnmhPXNePTIrlXz4rqa5wVL2qmW5bF1%2Fgq4Afvb4k85sF2DJ3rN7uo%2FH%2FnHKDOkKrBosQKlPP8%2BGvRn1FsJPQkU2%2FTjLsb7uZpAo0zRWIkARJR%2F2QH3O25j0UVmNxG838GkuaIFVPw6vCUB3l0mXFxVhAM4wsqMYQfnjKyw5%2FomYj80Iow10DNIAW%2BK%2BboTblrd6YdM6KBk%2BQ9a940D3WzSceCcb571ZSRGM8Q0HGQIYGCCXjAeJw98FT5cVZLVfW9UZfCP1E8tbyAwVXOu04xZ8Aw2yr9g%2Ftu2yUpulzmSMHIv%2BPG0xIuINkABPNaGz0DXAH8hd7hlePTAGPdErBIcRCRijxV%2FLXzczRqUb050F72WYnP1MMOGJ9eHK%2BsqglxT7HoBzMZVtLlygmPhJS455HJyx1MKa4jrKS7FsXgxtodfVHjBW6PeSxLZFBokAOr25iKqH0Z8MMzo3MQGOqUBgiRuSqFuWNLEQYBkpuWxJ%2B74h8F6Sq8u5m6ksVEoovYao%2FgKGWlkPivyOzBW2C4Xl8m34r14z4CJT6ggJHa6fPMiyb8OYVhcEaTfLiyZ1jJqpsiJAEQlpA4hc%2Fd91cOV8H%2BJccEdOipIAEanVi8Hbhm72kkE5C8yDXogsM6YwecO4ReiH26hWiadL7VejRg%2B2GDLcWqdETRpimGH2wRH%2BTA2wUQj&X-Amz-Signature=cbe8f7c65cf2bfbc269e6b04c26308f3524a7c246bd13c06a082a3eb0548e0e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PZHW44G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsZKU16coP%2FbSh8M4bmV%2FJVlhP826osr3FGUkWSVENDAIgNkJxNS7ptjYCQAkZjtawXWzLXztorzYese7KPlUT%2BWYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCP5VfrRn8259a6FCrcA1MzwOEjAwm7hl2V3S%2Br6k4fs2pSvaP9MAS1alhqOI3tdFTaw%2F%2FdRXxzGBupGJabbl9HNXJdw7HafP%2BFTHkGx%2Fd1N%2FD2yFIVjg7LsEwIV%2BPHaKR0eCV3UqmKV0listEdJ1LAAK2Sr8vwAF5vcL3Xy3dWyW4Vcyro82e88t6neJcoJmD4oEnmhPXNePTIrlXz4rqa5wVL2qmW5bF1%2Fgq4Afvb4k85sF2DJ3rN7uo%2FH%2FnHKDOkKrBosQKlPP8%2BGvRn1FsJPQkU2%2FTjLsb7uZpAo0zRWIkARJR%2F2QH3O25j0UVmNxG838GkuaIFVPw6vCUB3l0mXFxVhAM4wsqMYQfnjKyw5%2FomYj80Iow10DNIAW%2BK%2BboTblrd6YdM6KBk%2BQ9a940D3WzSceCcb571ZSRGM8Q0HGQIYGCCXjAeJw98FT5cVZLVfW9UZfCP1E8tbyAwVXOu04xZ8Aw2yr9g%2Ftu2yUpulzmSMHIv%2BPG0xIuINkABPNaGz0DXAH8hd7hlePTAGPdErBIcRCRijxV%2FLXzczRqUb050F72WYnP1MMOGJ9eHK%2BsqglxT7HoBzMZVtLlygmPhJS455HJyx1MKa4jrKS7FsXgxtodfVHjBW6PeSxLZFBokAOr25iKqH0Z8MMzo3MQGOqUBgiRuSqFuWNLEQYBkpuWxJ%2B74h8F6Sq8u5m6ksVEoovYao%2FgKGWlkPivyOzBW2C4Xl8m34r14z4CJT6ggJHa6fPMiyb8OYVhcEaTfLiyZ1jJqpsiJAEQlpA4hc%2Fd91cOV8H%2BJccEdOipIAEanVi8Hbhm72kkE5C8yDXogsM6YwecO4ReiH26hWiadL7VejRg%2B2GDLcWqdETRpimGH2wRH%2BTA2wUQj&X-Amz-Signature=fa2aced447c0ecb831822dbdba006806690fdd19c024eb872897bdac26b6ee61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
