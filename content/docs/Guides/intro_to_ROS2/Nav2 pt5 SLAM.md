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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TJKL2S%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJV9vXkxmnMq56H%2BzIRCQJrNbxBmxBM8RTujrzfo99xAiEAzFrl0xzI3JcG2MB9ARmazoJ6WZfx%2FBLubLMN7D72HyAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqX6ZpXx8OwJDDgpyrcAwGcof7EjVfD1bASnmtHRWXOZRBTLfHsDrxCdgM%2FTq29iG%2BA2BKh2LLb69oEn44wJxMWTRgM7qpgHLpKnIAkuMvy506BByGP8krzWhd9E3yOnCk3VRNunEhzBHyB%2FnkXoKBint05ROBNst0UlmvUCD2WuuiuyXk16LFbH7OhEIjtyJQUluuBiAuMp9Ht4L6EGsf%2BspVpgrsXIuUj9J0hCeh%2FddcpxXCVYd9w3ocy0JZpDAWFdDFOWOUkI9saezIRE2dMFD7aTz9VcyRloQQoEYcjj%2BPu2VkSmNEI4NrO1PfPpnC6pFYA8JZoiQ029Q5fxRrip6rPFrTTBj82XeMCL15BSyW1zb%2F87ZRZrntDCUlAyiDmx6i70ObqsApEhiFLMrAnJKOhu1%2BbSfocxxyZ4NVJhnXV8hB5Jua8VG934a2s3OcoSdW8eo%2Bi5HsDTPtkMcDUNgBiHIvbt%2F1anoydE7KLSwWYWzhWCXjW3Jnink%2Ff6Vu2MR7tEGwreprLDzu8MhjhajccwZT4zjp5kFySYH%2F491vWnVxEQtgKUKELE3%2FRgQzgJBc2c3H9V4HA%2BhfNkAdHt42IOVkkGueQC2KXEOg5lidzTKkpXGttQwtLAC5iKeWYX%2BSVtuAtnEcaMMOarMQGOqUBehUtOGok1luQNjtBlovurI1902xS7SVUVTXsQ%2FJQfL6oZjb66PPWV41w%2BlKEr5yziOWGyNoc1UCPuz7AT88CFCDdfcB5TIOWq1uZ3F6VdTRV645rw8K8PfZcsimK8wYAN3pGDe4I90QEc7sZhIF96B%2FkvUu%2FZwHJY%2BQF3uJOPN17UsBa%2F5yfIQWjpUTLj2WwFu0PGgsG4m%2BAPblplmR9dO4ZH2Ha&X-Amz-Signature=fe98ba1350e8d699b36a12f3da9c41bb1be048962966e75deb76c9577a32eb04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TJKL2S%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJV9vXkxmnMq56H%2BzIRCQJrNbxBmxBM8RTujrzfo99xAiEAzFrl0xzI3JcG2MB9ARmazoJ6WZfx%2FBLubLMN7D72HyAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqX6ZpXx8OwJDDgpyrcAwGcof7EjVfD1bASnmtHRWXOZRBTLfHsDrxCdgM%2FTq29iG%2BA2BKh2LLb69oEn44wJxMWTRgM7qpgHLpKnIAkuMvy506BByGP8krzWhd9E3yOnCk3VRNunEhzBHyB%2FnkXoKBint05ROBNst0UlmvUCD2WuuiuyXk16LFbH7OhEIjtyJQUluuBiAuMp9Ht4L6EGsf%2BspVpgrsXIuUj9J0hCeh%2FddcpxXCVYd9w3ocy0JZpDAWFdDFOWOUkI9saezIRE2dMFD7aTz9VcyRloQQoEYcjj%2BPu2VkSmNEI4NrO1PfPpnC6pFYA8JZoiQ029Q5fxRrip6rPFrTTBj82XeMCL15BSyW1zb%2F87ZRZrntDCUlAyiDmx6i70ObqsApEhiFLMrAnJKOhu1%2BbSfocxxyZ4NVJhnXV8hB5Jua8VG934a2s3OcoSdW8eo%2Bi5HsDTPtkMcDUNgBiHIvbt%2F1anoydE7KLSwWYWzhWCXjW3Jnink%2Ff6Vu2MR7tEGwreprLDzu8MhjhajccwZT4zjp5kFySYH%2F491vWnVxEQtgKUKELE3%2FRgQzgJBc2c3H9V4HA%2BhfNkAdHt42IOVkkGueQC2KXEOg5lidzTKkpXGttQwtLAC5iKeWYX%2BSVtuAtnEcaMMOarMQGOqUBehUtOGok1luQNjtBlovurI1902xS7SVUVTXsQ%2FJQfL6oZjb66PPWV41w%2BlKEr5yziOWGyNoc1UCPuz7AT88CFCDdfcB5TIOWq1uZ3F6VdTRV645rw8K8PfZcsimK8wYAN3pGDe4I90QEc7sZhIF96B%2FkvUu%2FZwHJY%2BQF3uJOPN17UsBa%2F5yfIQWjpUTLj2WwFu0PGgsG4m%2BAPblplmR9dO4ZH2Ha&X-Amz-Signature=87aa03a9ef95d54aecf962de63d50ba6fb61052dfdb6413e5a9f45c9e9832040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TJKL2S%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJV9vXkxmnMq56H%2BzIRCQJrNbxBmxBM8RTujrzfo99xAiEAzFrl0xzI3JcG2MB9ARmazoJ6WZfx%2FBLubLMN7D72HyAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqX6ZpXx8OwJDDgpyrcAwGcof7EjVfD1bASnmtHRWXOZRBTLfHsDrxCdgM%2FTq29iG%2BA2BKh2LLb69oEn44wJxMWTRgM7qpgHLpKnIAkuMvy506BByGP8krzWhd9E3yOnCk3VRNunEhzBHyB%2FnkXoKBint05ROBNst0UlmvUCD2WuuiuyXk16LFbH7OhEIjtyJQUluuBiAuMp9Ht4L6EGsf%2BspVpgrsXIuUj9J0hCeh%2FddcpxXCVYd9w3ocy0JZpDAWFdDFOWOUkI9saezIRE2dMFD7aTz9VcyRloQQoEYcjj%2BPu2VkSmNEI4NrO1PfPpnC6pFYA8JZoiQ029Q5fxRrip6rPFrTTBj82XeMCL15BSyW1zb%2F87ZRZrntDCUlAyiDmx6i70ObqsApEhiFLMrAnJKOhu1%2BbSfocxxyZ4NVJhnXV8hB5Jua8VG934a2s3OcoSdW8eo%2Bi5HsDTPtkMcDUNgBiHIvbt%2F1anoydE7KLSwWYWzhWCXjW3Jnink%2Ff6Vu2MR7tEGwreprLDzu8MhjhajccwZT4zjp5kFySYH%2F491vWnVxEQtgKUKELE3%2FRgQzgJBc2c3H9V4HA%2BhfNkAdHt42IOVkkGueQC2KXEOg5lidzTKkpXGttQwtLAC5iKeWYX%2BSVtuAtnEcaMMOarMQGOqUBehUtOGok1luQNjtBlovurI1902xS7SVUVTXsQ%2FJQfL6oZjb66PPWV41w%2BlKEr5yziOWGyNoc1UCPuz7AT88CFCDdfcB5TIOWq1uZ3F6VdTRV645rw8K8PfZcsimK8wYAN3pGDe4I90QEc7sZhIF96B%2FkvUu%2FZwHJY%2BQF3uJOPN17UsBa%2F5yfIQWjpUTLj2WwFu0PGgsG4m%2BAPblplmR9dO4ZH2Ha&X-Amz-Signature=b26d17430c609c4c721b1ef34ba5fd440facc013502c74aff9fd81fa1dbd436f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TJKL2S%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJV9vXkxmnMq56H%2BzIRCQJrNbxBmxBM8RTujrzfo99xAiEAzFrl0xzI3JcG2MB9ARmazoJ6WZfx%2FBLubLMN7D72HyAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqX6ZpXx8OwJDDgpyrcAwGcof7EjVfD1bASnmtHRWXOZRBTLfHsDrxCdgM%2FTq29iG%2BA2BKh2LLb69oEn44wJxMWTRgM7qpgHLpKnIAkuMvy506BByGP8krzWhd9E3yOnCk3VRNunEhzBHyB%2FnkXoKBint05ROBNst0UlmvUCD2WuuiuyXk16LFbH7OhEIjtyJQUluuBiAuMp9Ht4L6EGsf%2BspVpgrsXIuUj9J0hCeh%2FddcpxXCVYd9w3ocy0JZpDAWFdDFOWOUkI9saezIRE2dMFD7aTz9VcyRloQQoEYcjj%2BPu2VkSmNEI4NrO1PfPpnC6pFYA8JZoiQ029Q5fxRrip6rPFrTTBj82XeMCL15BSyW1zb%2F87ZRZrntDCUlAyiDmx6i70ObqsApEhiFLMrAnJKOhu1%2BbSfocxxyZ4NVJhnXV8hB5Jua8VG934a2s3OcoSdW8eo%2Bi5HsDTPtkMcDUNgBiHIvbt%2F1anoydE7KLSwWYWzhWCXjW3Jnink%2Ff6Vu2MR7tEGwreprLDzu8MhjhajccwZT4zjp5kFySYH%2F491vWnVxEQtgKUKELE3%2FRgQzgJBc2c3H9V4HA%2BhfNkAdHt42IOVkkGueQC2KXEOg5lidzTKkpXGttQwtLAC5iKeWYX%2BSVtuAtnEcaMMOarMQGOqUBehUtOGok1luQNjtBlovurI1902xS7SVUVTXsQ%2FJQfL6oZjb66PPWV41w%2BlKEr5yziOWGyNoc1UCPuz7AT88CFCDdfcB5TIOWq1uZ3F6VdTRV645rw8K8PfZcsimK8wYAN3pGDe4I90QEc7sZhIF96B%2FkvUu%2FZwHJY%2BQF3uJOPN17UsBa%2F5yfIQWjpUTLj2WwFu0PGgsG4m%2BAPblplmR9dO4ZH2Ha&X-Amz-Signature=911c3e8eb5de920b4a31b44a547af678922f0e2c98cd5d914c46d03c629422ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TJKL2S%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJV9vXkxmnMq56H%2BzIRCQJrNbxBmxBM8RTujrzfo99xAiEAzFrl0xzI3JcG2MB9ARmazoJ6WZfx%2FBLubLMN7D72HyAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqX6ZpXx8OwJDDgpyrcAwGcof7EjVfD1bASnmtHRWXOZRBTLfHsDrxCdgM%2FTq29iG%2BA2BKh2LLb69oEn44wJxMWTRgM7qpgHLpKnIAkuMvy506BByGP8krzWhd9E3yOnCk3VRNunEhzBHyB%2FnkXoKBint05ROBNst0UlmvUCD2WuuiuyXk16LFbH7OhEIjtyJQUluuBiAuMp9Ht4L6EGsf%2BspVpgrsXIuUj9J0hCeh%2FddcpxXCVYd9w3ocy0JZpDAWFdDFOWOUkI9saezIRE2dMFD7aTz9VcyRloQQoEYcjj%2BPu2VkSmNEI4NrO1PfPpnC6pFYA8JZoiQ029Q5fxRrip6rPFrTTBj82XeMCL15BSyW1zb%2F87ZRZrntDCUlAyiDmx6i70ObqsApEhiFLMrAnJKOhu1%2BbSfocxxyZ4NVJhnXV8hB5Jua8VG934a2s3OcoSdW8eo%2Bi5HsDTPtkMcDUNgBiHIvbt%2F1anoydE7KLSwWYWzhWCXjW3Jnink%2Ff6Vu2MR7tEGwreprLDzu8MhjhajccwZT4zjp5kFySYH%2F491vWnVxEQtgKUKELE3%2FRgQzgJBc2c3H9V4HA%2BhfNkAdHt42IOVkkGueQC2KXEOg5lidzTKkpXGttQwtLAC5iKeWYX%2BSVtuAtnEcaMMOarMQGOqUBehUtOGok1luQNjtBlovurI1902xS7SVUVTXsQ%2FJQfL6oZjb66PPWV41w%2BlKEr5yziOWGyNoc1UCPuz7AT88CFCDdfcB5TIOWq1uZ3F6VdTRV645rw8K8PfZcsimK8wYAN3pGDe4I90QEc7sZhIF96B%2FkvUu%2FZwHJY%2BQF3uJOPN17UsBa%2F5yfIQWjpUTLj2WwFu0PGgsG4m%2BAPblplmR9dO4ZH2Ha&X-Amz-Signature=487d8e1f9c9c8b92b8148bcc7eb31759592d4b7f9262934ca065ef0dcc505ffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TJKL2S%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJV9vXkxmnMq56H%2BzIRCQJrNbxBmxBM8RTujrzfo99xAiEAzFrl0xzI3JcG2MB9ARmazoJ6WZfx%2FBLubLMN7D72HyAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqX6ZpXx8OwJDDgpyrcAwGcof7EjVfD1bASnmtHRWXOZRBTLfHsDrxCdgM%2FTq29iG%2BA2BKh2LLb69oEn44wJxMWTRgM7qpgHLpKnIAkuMvy506BByGP8krzWhd9E3yOnCk3VRNunEhzBHyB%2FnkXoKBint05ROBNst0UlmvUCD2WuuiuyXk16LFbH7OhEIjtyJQUluuBiAuMp9Ht4L6EGsf%2BspVpgrsXIuUj9J0hCeh%2FddcpxXCVYd9w3ocy0JZpDAWFdDFOWOUkI9saezIRE2dMFD7aTz9VcyRloQQoEYcjj%2BPu2VkSmNEI4NrO1PfPpnC6pFYA8JZoiQ029Q5fxRrip6rPFrTTBj82XeMCL15BSyW1zb%2F87ZRZrntDCUlAyiDmx6i70ObqsApEhiFLMrAnJKOhu1%2BbSfocxxyZ4NVJhnXV8hB5Jua8VG934a2s3OcoSdW8eo%2Bi5HsDTPtkMcDUNgBiHIvbt%2F1anoydE7KLSwWYWzhWCXjW3Jnink%2Ff6Vu2MR7tEGwreprLDzu8MhjhajccwZT4zjp5kFySYH%2F491vWnVxEQtgKUKELE3%2FRgQzgJBc2c3H9V4HA%2BhfNkAdHt42IOVkkGueQC2KXEOg5lidzTKkpXGttQwtLAC5iKeWYX%2BSVtuAtnEcaMMOarMQGOqUBehUtOGok1luQNjtBlovurI1902xS7SVUVTXsQ%2FJQfL6oZjb66PPWV41w%2BlKEr5yziOWGyNoc1UCPuz7AT88CFCDdfcB5TIOWq1uZ3F6VdTRV645rw8K8PfZcsimK8wYAN3pGDe4I90QEc7sZhIF96B%2FkvUu%2FZwHJY%2BQF3uJOPN17UsBa%2F5yfIQWjpUTLj2WwFu0PGgsG4m%2BAPblplmR9dO4ZH2Ha&X-Amz-Signature=2b7d12b5b6a3bdec9f18f7b0a4ad09272261367decaa9889757523fb81311535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TJKL2S%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJV9vXkxmnMq56H%2BzIRCQJrNbxBmxBM8RTujrzfo99xAiEAzFrl0xzI3JcG2MB9ARmazoJ6WZfx%2FBLubLMN7D72HyAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqX6ZpXx8OwJDDgpyrcAwGcof7EjVfD1bASnmtHRWXOZRBTLfHsDrxCdgM%2FTq29iG%2BA2BKh2LLb69oEn44wJxMWTRgM7qpgHLpKnIAkuMvy506BByGP8krzWhd9E3yOnCk3VRNunEhzBHyB%2FnkXoKBint05ROBNst0UlmvUCD2WuuiuyXk16LFbH7OhEIjtyJQUluuBiAuMp9Ht4L6EGsf%2BspVpgrsXIuUj9J0hCeh%2FddcpxXCVYd9w3ocy0JZpDAWFdDFOWOUkI9saezIRE2dMFD7aTz9VcyRloQQoEYcjj%2BPu2VkSmNEI4NrO1PfPpnC6pFYA8JZoiQ029Q5fxRrip6rPFrTTBj82XeMCL15BSyW1zb%2F87ZRZrntDCUlAyiDmx6i70ObqsApEhiFLMrAnJKOhu1%2BbSfocxxyZ4NVJhnXV8hB5Jua8VG934a2s3OcoSdW8eo%2Bi5HsDTPtkMcDUNgBiHIvbt%2F1anoydE7KLSwWYWzhWCXjW3Jnink%2Ff6Vu2MR7tEGwreprLDzu8MhjhajccwZT4zjp5kFySYH%2F491vWnVxEQtgKUKELE3%2FRgQzgJBc2c3H9V4HA%2BhfNkAdHt42IOVkkGueQC2KXEOg5lidzTKkpXGttQwtLAC5iKeWYX%2BSVtuAtnEcaMMOarMQGOqUBehUtOGok1luQNjtBlovurI1902xS7SVUVTXsQ%2FJQfL6oZjb66PPWV41w%2BlKEr5yziOWGyNoc1UCPuz7AT88CFCDdfcB5TIOWq1uZ3F6VdTRV645rw8K8PfZcsimK8wYAN3pGDe4I90QEc7sZhIF96B%2FkvUu%2FZwHJY%2BQF3uJOPN17UsBa%2F5yfIQWjpUTLj2WwFu0PGgsG4m%2BAPblplmR9dO4ZH2Ha&X-Amz-Signature=7df1532d63b0fcfcef1e4cb9b1b1381649575ed001b3899477b36adf6d99f6b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TJKL2S%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJV9vXkxmnMq56H%2BzIRCQJrNbxBmxBM8RTujrzfo99xAiEAzFrl0xzI3JcG2MB9ARmazoJ6WZfx%2FBLubLMN7D72HyAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqX6ZpXx8OwJDDgpyrcAwGcof7EjVfD1bASnmtHRWXOZRBTLfHsDrxCdgM%2FTq29iG%2BA2BKh2LLb69oEn44wJxMWTRgM7qpgHLpKnIAkuMvy506BByGP8krzWhd9E3yOnCk3VRNunEhzBHyB%2FnkXoKBint05ROBNst0UlmvUCD2WuuiuyXk16LFbH7OhEIjtyJQUluuBiAuMp9Ht4L6EGsf%2BspVpgrsXIuUj9J0hCeh%2FddcpxXCVYd9w3ocy0JZpDAWFdDFOWOUkI9saezIRE2dMFD7aTz9VcyRloQQoEYcjj%2BPu2VkSmNEI4NrO1PfPpnC6pFYA8JZoiQ029Q5fxRrip6rPFrTTBj82XeMCL15BSyW1zb%2F87ZRZrntDCUlAyiDmx6i70ObqsApEhiFLMrAnJKOhu1%2BbSfocxxyZ4NVJhnXV8hB5Jua8VG934a2s3OcoSdW8eo%2Bi5HsDTPtkMcDUNgBiHIvbt%2F1anoydE7KLSwWYWzhWCXjW3Jnink%2Ff6Vu2MR7tEGwreprLDzu8MhjhajccwZT4zjp5kFySYH%2F491vWnVxEQtgKUKELE3%2FRgQzgJBc2c3H9V4HA%2BhfNkAdHt42IOVkkGueQC2KXEOg5lidzTKkpXGttQwtLAC5iKeWYX%2BSVtuAtnEcaMMOarMQGOqUBehUtOGok1luQNjtBlovurI1902xS7SVUVTXsQ%2FJQfL6oZjb66PPWV41w%2BlKEr5yziOWGyNoc1UCPuz7AT88CFCDdfcB5TIOWq1uZ3F6VdTRV645rw8K8PfZcsimK8wYAN3pGDe4I90QEc7sZhIF96B%2FkvUu%2FZwHJY%2BQF3uJOPN17UsBa%2F5yfIQWjpUTLj2WwFu0PGgsG4m%2BAPblplmR9dO4ZH2Ha&X-Amz-Signature=839eb95e44ca98c36958911fa3d9b706a916c01f2dad882ecd294cebcb0907ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TJKL2S%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJV9vXkxmnMq56H%2BzIRCQJrNbxBmxBM8RTujrzfo99xAiEAzFrl0xzI3JcG2MB9ARmazoJ6WZfx%2FBLubLMN7D72HyAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqX6ZpXx8OwJDDgpyrcAwGcof7EjVfD1bASnmtHRWXOZRBTLfHsDrxCdgM%2FTq29iG%2BA2BKh2LLb69oEn44wJxMWTRgM7qpgHLpKnIAkuMvy506BByGP8krzWhd9E3yOnCk3VRNunEhzBHyB%2FnkXoKBint05ROBNst0UlmvUCD2WuuiuyXk16LFbH7OhEIjtyJQUluuBiAuMp9Ht4L6EGsf%2BspVpgrsXIuUj9J0hCeh%2FddcpxXCVYd9w3ocy0JZpDAWFdDFOWOUkI9saezIRE2dMFD7aTz9VcyRloQQoEYcjj%2BPu2VkSmNEI4NrO1PfPpnC6pFYA8JZoiQ029Q5fxRrip6rPFrTTBj82XeMCL15BSyW1zb%2F87ZRZrntDCUlAyiDmx6i70ObqsApEhiFLMrAnJKOhu1%2BbSfocxxyZ4NVJhnXV8hB5Jua8VG934a2s3OcoSdW8eo%2Bi5HsDTPtkMcDUNgBiHIvbt%2F1anoydE7KLSwWYWzhWCXjW3Jnink%2Ff6Vu2MR7tEGwreprLDzu8MhjhajccwZT4zjp5kFySYH%2F491vWnVxEQtgKUKELE3%2FRgQzgJBc2c3H9V4HA%2BhfNkAdHt42IOVkkGueQC2KXEOg5lidzTKkpXGttQwtLAC5iKeWYX%2BSVtuAtnEcaMMOarMQGOqUBehUtOGok1luQNjtBlovurI1902xS7SVUVTXsQ%2FJQfL6oZjb66PPWV41w%2BlKEr5yziOWGyNoc1UCPuz7AT88CFCDdfcB5TIOWq1uZ3F6VdTRV645rw8K8PfZcsimK8wYAN3pGDe4I90QEc7sZhIF96B%2FkvUu%2FZwHJY%2BQF3uJOPN17UsBa%2F5yfIQWjpUTLj2WwFu0PGgsG4m%2BAPblplmR9dO4ZH2Ha&X-Amz-Signature=34d7f2980831bed852127b587011a5f30aa34137c81ff383ca5e235cac5bf6ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TJKL2S%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJV9vXkxmnMq56H%2BzIRCQJrNbxBmxBM8RTujrzfo99xAiEAzFrl0xzI3JcG2MB9ARmazoJ6WZfx%2FBLubLMN7D72HyAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqX6ZpXx8OwJDDgpyrcAwGcof7EjVfD1bASnmtHRWXOZRBTLfHsDrxCdgM%2FTq29iG%2BA2BKh2LLb69oEn44wJxMWTRgM7qpgHLpKnIAkuMvy506BByGP8krzWhd9E3yOnCk3VRNunEhzBHyB%2FnkXoKBint05ROBNst0UlmvUCD2WuuiuyXk16LFbH7OhEIjtyJQUluuBiAuMp9Ht4L6EGsf%2BspVpgrsXIuUj9J0hCeh%2FddcpxXCVYd9w3ocy0JZpDAWFdDFOWOUkI9saezIRE2dMFD7aTz9VcyRloQQoEYcjj%2BPu2VkSmNEI4NrO1PfPpnC6pFYA8JZoiQ029Q5fxRrip6rPFrTTBj82XeMCL15BSyW1zb%2F87ZRZrntDCUlAyiDmx6i70ObqsApEhiFLMrAnJKOhu1%2BbSfocxxyZ4NVJhnXV8hB5Jua8VG934a2s3OcoSdW8eo%2Bi5HsDTPtkMcDUNgBiHIvbt%2F1anoydE7KLSwWYWzhWCXjW3Jnink%2Ff6Vu2MR7tEGwreprLDzu8MhjhajccwZT4zjp5kFySYH%2F491vWnVxEQtgKUKELE3%2FRgQzgJBc2c3H9V4HA%2BhfNkAdHt42IOVkkGueQC2KXEOg5lidzTKkpXGttQwtLAC5iKeWYX%2BSVtuAtnEcaMMOarMQGOqUBehUtOGok1luQNjtBlovurI1902xS7SVUVTXsQ%2FJQfL6oZjb66PPWV41w%2BlKEr5yziOWGyNoc1UCPuz7AT88CFCDdfcB5TIOWq1uZ3F6VdTRV645rw8K8PfZcsimK8wYAN3pGDe4I90QEc7sZhIF96B%2FkvUu%2FZwHJY%2BQF3uJOPN17UsBa%2F5yfIQWjpUTLj2WwFu0PGgsG4m%2BAPblplmR9dO4ZH2Ha&X-Amz-Signature=c9926c710c6b12cf16dcea00280211c94921dfdb23bf7aaf80f0156bdf7ba64b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TJKL2S%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJV9vXkxmnMq56H%2BzIRCQJrNbxBmxBM8RTujrzfo99xAiEAzFrl0xzI3JcG2MB9ARmazoJ6WZfx%2FBLubLMN7D72HyAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqX6ZpXx8OwJDDgpyrcAwGcof7EjVfD1bASnmtHRWXOZRBTLfHsDrxCdgM%2FTq29iG%2BA2BKh2LLb69oEn44wJxMWTRgM7qpgHLpKnIAkuMvy506BByGP8krzWhd9E3yOnCk3VRNunEhzBHyB%2FnkXoKBint05ROBNst0UlmvUCD2WuuiuyXk16LFbH7OhEIjtyJQUluuBiAuMp9Ht4L6EGsf%2BspVpgrsXIuUj9J0hCeh%2FddcpxXCVYd9w3ocy0JZpDAWFdDFOWOUkI9saezIRE2dMFD7aTz9VcyRloQQoEYcjj%2BPu2VkSmNEI4NrO1PfPpnC6pFYA8JZoiQ029Q5fxRrip6rPFrTTBj82XeMCL15BSyW1zb%2F87ZRZrntDCUlAyiDmx6i70ObqsApEhiFLMrAnJKOhu1%2BbSfocxxyZ4NVJhnXV8hB5Jua8VG934a2s3OcoSdW8eo%2Bi5HsDTPtkMcDUNgBiHIvbt%2F1anoydE7KLSwWYWzhWCXjW3Jnink%2Ff6Vu2MR7tEGwreprLDzu8MhjhajccwZT4zjp5kFySYH%2F491vWnVxEQtgKUKELE3%2FRgQzgJBc2c3H9V4HA%2BhfNkAdHt42IOVkkGueQC2KXEOg5lidzTKkpXGttQwtLAC5iKeWYX%2BSVtuAtnEcaMMOarMQGOqUBehUtOGok1luQNjtBlovurI1902xS7SVUVTXsQ%2FJQfL6oZjb66PPWV41w%2BlKEr5yziOWGyNoc1UCPuz7AT88CFCDdfcB5TIOWq1uZ3F6VdTRV645rw8K8PfZcsimK8wYAN3pGDe4I90QEc7sZhIF96B%2FkvUu%2FZwHJY%2BQF3uJOPN17UsBa%2F5yfIQWjpUTLj2WwFu0PGgsG4m%2BAPblplmR9dO4ZH2Ha&X-Amz-Signature=62b8b5858e51dd5330479c6c14dc5b0d3ef01724a02e47571e7420261863344b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TJKL2S%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJV9vXkxmnMq56H%2BzIRCQJrNbxBmxBM8RTujrzfo99xAiEAzFrl0xzI3JcG2MB9ARmazoJ6WZfx%2FBLubLMN7D72HyAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqX6ZpXx8OwJDDgpyrcAwGcof7EjVfD1bASnmtHRWXOZRBTLfHsDrxCdgM%2FTq29iG%2BA2BKh2LLb69oEn44wJxMWTRgM7qpgHLpKnIAkuMvy506BByGP8krzWhd9E3yOnCk3VRNunEhzBHyB%2FnkXoKBint05ROBNst0UlmvUCD2WuuiuyXk16LFbH7OhEIjtyJQUluuBiAuMp9Ht4L6EGsf%2BspVpgrsXIuUj9J0hCeh%2FddcpxXCVYd9w3ocy0JZpDAWFdDFOWOUkI9saezIRE2dMFD7aTz9VcyRloQQoEYcjj%2BPu2VkSmNEI4NrO1PfPpnC6pFYA8JZoiQ029Q5fxRrip6rPFrTTBj82XeMCL15BSyW1zb%2F87ZRZrntDCUlAyiDmx6i70ObqsApEhiFLMrAnJKOhu1%2BbSfocxxyZ4NVJhnXV8hB5Jua8VG934a2s3OcoSdW8eo%2Bi5HsDTPtkMcDUNgBiHIvbt%2F1anoydE7KLSwWYWzhWCXjW3Jnink%2Ff6Vu2MR7tEGwreprLDzu8MhjhajccwZT4zjp5kFySYH%2F491vWnVxEQtgKUKELE3%2FRgQzgJBc2c3H9V4HA%2BhfNkAdHt42IOVkkGueQC2KXEOg5lidzTKkpXGttQwtLAC5iKeWYX%2BSVtuAtnEcaMMOarMQGOqUBehUtOGok1luQNjtBlovurI1902xS7SVUVTXsQ%2FJQfL6oZjb66PPWV41w%2BlKEr5yziOWGyNoc1UCPuz7AT88CFCDdfcB5TIOWq1uZ3F6VdTRV645rw8K8PfZcsimK8wYAN3pGDe4I90QEc7sZhIF96B%2FkvUu%2FZwHJY%2BQF3uJOPN17UsBa%2F5yfIQWjpUTLj2WwFu0PGgsG4m%2BAPblplmR9dO4ZH2Ha&X-Amz-Signature=0f431e44ae254b04dc61bd899108bf7f77e6a8d6e4f80a2b2714fa1af42974c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TJKL2S%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJV9vXkxmnMq56H%2BzIRCQJrNbxBmxBM8RTujrzfo99xAiEAzFrl0xzI3JcG2MB9ARmazoJ6WZfx%2FBLubLMN7D72HyAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqX6ZpXx8OwJDDgpyrcAwGcof7EjVfD1bASnmtHRWXOZRBTLfHsDrxCdgM%2FTq29iG%2BA2BKh2LLb69oEn44wJxMWTRgM7qpgHLpKnIAkuMvy506BByGP8krzWhd9E3yOnCk3VRNunEhzBHyB%2FnkXoKBint05ROBNst0UlmvUCD2WuuiuyXk16LFbH7OhEIjtyJQUluuBiAuMp9Ht4L6EGsf%2BspVpgrsXIuUj9J0hCeh%2FddcpxXCVYd9w3ocy0JZpDAWFdDFOWOUkI9saezIRE2dMFD7aTz9VcyRloQQoEYcjj%2BPu2VkSmNEI4NrO1PfPpnC6pFYA8JZoiQ029Q5fxRrip6rPFrTTBj82XeMCL15BSyW1zb%2F87ZRZrntDCUlAyiDmx6i70ObqsApEhiFLMrAnJKOhu1%2BbSfocxxyZ4NVJhnXV8hB5Jua8VG934a2s3OcoSdW8eo%2Bi5HsDTPtkMcDUNgBiHIvbt%2F1anoydE7KLSwWYWzhWCXjW3Jnink%2Ff6Vu2MR7tEGwreprLDzu8MhjhajccwZT4zjp5kFySYH%2F491vWnVxEQtgKUKELE3%2FRgQzgJBc2c3H9V4HA%2BhfNkAdHt42IOVkkGueQC2KXEOg5lidzTKkpXGttQwtLAC5iKeWYX%2BSVtuAtnEcaMMOarMQGOqUBehUtOGok1luQNjtBlovurI1902xS7SVUVTXsQ%2FJQfL6oZjb66PPWV41w%2BlKEr5yziOWGyNoc1UCPuz7AT88CFCDdfcB5TIOWq1uZ3F6VdTRV645rw8K8PfZcsimK8wYAN3pGDe4I90QEc7sZhIF96B%2FkvUu%2FZwHJY%2BQF3uJOPN17UsBa%2F5yfIQWjpUTLj2WwFu0PGgsG4m%2BAPblplmR9dO4ZH2Ha&X-Amz-Signature=8499b63443cec2f46c1c927bae5bad450fc5188a0d49e7923289075b732bf0b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TJKL2S%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJV9vXkxmnMq56H%2BzIRCQJrNbxBmxBM8RTujrzfo99xAiEAzFrl0xzI3JcG2MB9ARmazoJ6WZfx%2FBLubLMN7D72HyAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqX6ZpXx8OwJDDgpyrcAwGcof7EjVfD1bASnmtHRWXOZRBTLfHsDrxCdgM%2FTq29iG%2BA2BKh2LLb69oEn44wJxMWTRgM7qpgHLpKnIAkuMvy506BByGP8krzWhd9E3yOnCk3VRNunEhzBHyB%2FnkXoKBint05ROBNst0UlmvUCD2WuuiuyXk16LFbH7OhEIjtyJQUluuBiAuMp9Ht4L6EGsf%2BspVpgrsXIuUj9J0hCeh%2FddcpxXCVYd9w3ocy0JZpDAWFdDFOWOUkI9saezIRE2dMFD7aTz9VcyRloQQoEYcjj%2BPu2VkSmNEI4NrO1PfPpnC6pFYA8JZoiQ029Q5fxRrip6rPFrTTBj82XeMCL15BSyW1zb%2F87ZRZrntDCUlAyiDmx6i70ObqsApEhiFLMrAnJKOhu1%2BbSfocxxyZ4NVJhnXV8hB5Jua8VG934a2s3OcoSdW8eo%2Bi5HsDTPtkMcDUNgBiHIvbt%2F1anoydE7KLSwWYWzhWCXjW3Jnink%2Ff6Vu2MR7tEGwreprLDzu8MhjhajccwZT4zjp5kFySYH%2F491vWnVxEQtgKUKELE3%2FRgQzgJBc2c3H9V4HA%2BhfNkAdHt42IOVkkGueQC2KXEOg5lidzTKkpXGttQwtLAC5iKeWYX%2BSVtuAtnEcaMMOarMQGOqUBehUtOGok1luQNjtBlovurI1902xS7SVUVTXsQ%2FJQfL6oZjb66PPWV41w%2BlKEr5yziOWGyNoc1UCPuz7AT88CFCDdfcB5TIOWq1uZ3F6VdTRV645rw8K8PfZcsimK8wYAN3pGDe4I90QEc7sZhIF96B%2FkvUu%2FZwHJY%2BQF3uJOPN17UsBa%2F5yfIQWjpUTLj2WwFu0PGgsG4m%2BAPblplmR9dO4ZH2Ha&X-Amz-Signature=0868c10f58936f60e7872fc07e2484c934f75a90faad0a821d8b3fd6dfff3927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
