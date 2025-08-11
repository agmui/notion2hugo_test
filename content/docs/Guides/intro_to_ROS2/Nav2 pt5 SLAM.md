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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZD452G%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEo%2B6MzB1mCxKNyVvZidx70l0WFImAftGJAmZntKhocwIhAKoy71e9OfmXAWb6uln%2Bu4gKQkHJyv6wdI9P6vsFkHwvKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FDmvsJyu%2Bubpi9KIq3AMYnvzylzMoV3A6LwBMEFFdWPpHx42zDgbpIfduwpmvKWBYhFXpH3FoUcTlh7BswJOooPQULJ7ZlBYU494vftq0UNPvlZJvoifm0e0JvbU8tweCKxFOrfC%2BTIHoMOqC1%2BQyuMvXRFERp%2B0jSzT%2FbkKESlJUe%2F25%2Fp10%2FlBAsIXCAlYN3I0xicKfun4CdRS82KqxcSfMuSY8AutTeI1WcDJri7efjeACrWBbHk94EHVCl63X8cdR4j6d3gYreKzAiJT7UdmGQR44ijkn93boosXmqekPv71bV8dZ9tC9Fg2Bq2KIgA0k8FQQ7f%2Bugzc9z77rqnoCcNYRq1Z3hbrvPqJgEO0eWdrmrw9rvZLXjr6ANkzCfNNBhdw38mV%2BWMvDxyxCtyuaycbCaABqIVZRwOEsKpMTbSay3Wu%2BcZdokD01ymE7kcHv00lJ00hRmE2k%2Fp7fb0avoBioPu5kJ727feRFUCREO%2BL2jk1lkGUWJwB0YJFKhW9WhynWcoQD8umEcC2PsgKKwqZYDcoYx6f04rKqnu59LUv%2FaYc2ihye28zzL4R0eSaIFGBduM%2FtAjbLYX0vCe5f99kzhloWOv3wrHs%2BDAnuwPe%2FTlVuuPqRtPgR667KNLoCQdQdsjRluzDa9%2BXEBjqkAXYUXjDgLxWdn%2FwcCdr2cP3WIOMrzC%2BnlV3rsvAVNasFIMzh7DjrhwWtAuO795Oht5ra45zLRYLF%2Fbi%2BuiF30QMpGe0WiU%2F%2F3Rra93vts63ZtYiE47Ytaj9OyiaWgcOy7a%2FhsrlwTCPrUaAVuYWZ0FnUEGQsB2uliww0fRjCXM%2BuHOQl3ITxggQnO4cEkEMOCp776Cx21gEhyDuZGpvEEMscoR%2Bg&X-Amz-Signature=336ad9faea44da2b6b00a86bf4e9656b1fd6778dbcf9f156d6ef3385f45a30af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZD452G%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEo%2B6MzB1mCxKNyVvZidx70l0WFImAftGJAmZntKhocwIhAKoy71e9OfmXAWb6uln%2Bu4gKQkHJyv6wdI9P6vsFkHwvKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FDmvsJyu%2Bubpi9KIq3AMYnvzylzMoV3A6LwBMEFFdWPpHx42zDgbpIfduwpmvKWBYhFXpH3FoUcTlh7BswJOooPQULJ7ZlBYU494vftq0UNPvlZJvoifm0e0JvbU8tweCKxFOrfC%2BTIHoMOqC1%2BQyuMvXRFERp%2B0jSzT%2FbkKESlJUe%2F25%2Fp10%2FlBAsIXCAlYN3I0xicKfun4CdRS82KqxcSfMuSY8AutTeI1WcDJri7efjeACrWBbHk94EHVCl63X8cdR4j6d3gYreKzAiJT7UdmGQR44ijkn93boosXmqekPv71bV8dZ9tC9Fg2Bq2KIgA0k8FQQ7f%2Bugzc9z77rqnoCcNYRq1Z3hbrvPqJgEO0eWdrmrw9rvZLXjr6ANkzCfNNBhdw38mV%2BWMvDxyxCtyuaycbCaABqIVZRwOEsKpMTbSay3Wu%2BcZdokD01ymE7kcHv00lJ00hRmE2k%2Fp7fb0avoBioPu5kJ727feRFUCREO%2BL2jk1lkGUWJwB0YJFKhW9WhynWcoQD8umEcC2PsgKKwqZYDcoYx6f04rKqnu59LUv%2FaYc2ihye28zzL4R0eSaIFGBduM%2FtAjbLYX0vCe5f99kzhloWOv3wrHs%2BDAnuwPe%2FTlVuuPqRtPgR667KNLoCQdQdsjRluzDa9%2BXEBjqkAXYUXjDgLxWdn%2FwcCdr2cP3WIOMrzC%2BnlV3rsvAVNasFIMzh7DjrhwWtAuO795Oht5ra45zLRYLF%2Fbi%2BuiF30QMpGe0WiU%2F%2F3Rra93vts63ZtYiE47Ytaj9OyiaWgcOy7a%2FhsrlwTCPrUaAVuYWZ0FnUEGQsB2uliww0fRjCXM%2BuHOQl3ITxggQnO4cEkEMOCp776Cx21gEhyDuZGpvEEMscoR%2Bg&X-Amz-Signature=be01de197130d94ae6742eb2f429f569c0ec17fd7e6bccedb29d5532aada9459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZD452G%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEo%2B6MzB1mCxKNyVvZidx70l0WFImAftGJAmZntKhocwIhAKoy71e9OfmXAWb6uln%2Bu4gKQkHJyv6wdI9P6vsFkHwvKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FDmvsJyu%2Bubpi9KIq3AMYnvzylzMoV3A6LwBMEFFdWPpHx42zDgbpIfduwpmvKWBYhFXpH3FoUcTlh7BswJOooPQULJ7ZlBYU494vftq0UNPvlZJvoifm0e0JvbU8tweCKxFOrfC%2BTIHoMOqC1%2BQyuMvXRFERp%2B0jSzT%2FbkKESlJUe%2F25%2Fp10%2FlBAsIXCAlYN3I0xicKfun4CdRS82KqxcSfMuSY8AutTeI1WcDJri7efjeACrWBbHk94EHVCl63X8cdR4j6d3gYreKzAiJT7UdmGQR44ijkn93boosXmqekPv71bV8dZ9tC9Fg2Bq2KIgA0k8FQQ7f%2Bugzc9z77rqnoCcNYRq1Z3hbrvPqJgEO0eWdrmrw9rvZLXjr6ANkzCfNNBhdw38mV%2BWMvDxyxCtyuaycbCaABqIVZRwOEsKpMTbSay3Wu%2BcZdokD01ymE7kcHv00lJ00hRmE2k%2Fp7fb0avoBioPu5kJ727feRFUCREO%2BL2jk1lkGUWJwB0YJFKhW9WhynWcoQD8umEcC2PsgKKwqZYDcoYx6f04rKqnu59LUv%2FaYc2ihye28zzL4R0eSaIFGBduM%2FtAjbLYX0vCe5f99kzhloWOv3wrHs%2BDAnuwPe%2FTlVuuPqRtPgR667KNLoCQdQdsjRluzDa9%2BXEBjqkAXYUXjDgLxWdn%2FwcCdr2cP3WIOMrzC%2BnlV3rsvAVNasFIMzh7DjrhwWtAuO795Oht5ra45zLRYLF%2Fbi%2BuiF30QMpGe0WiU%2F%2F3Rra93vts63ZtYiE47Ytaj9OyiaWgcOy7a%2FhsrlwTCPrUaAVuYWZ0FnUEGQsB2uliww0fRjCXM%2BuHOQl3ITxggQnO4cEkEMOCp776Cx21gEhyDuZGpvEEMscoR%2Bg&X-Amz-Signature=e1b4751c24d19ed03ccfa6571f419ea9578d5daa6814b27d947ea1762d2987de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZD452G%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEo%2B6MzB1mCxKNyVvZidx70l0WFImAftGJAmZntKhocwIhAKoy71e9OfmXAWb6uln%2Bu4gKQkHJyv6wdI9P6vsFkHwvKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FDmvsJyu%2Bubpi9KIq3AMYnvzylzMoV3A6LwBMEFFdWPpHx42zDgbpIfduwpmvKWBYhFXpH3FoUcTlh7BswJOooPQULJ7ZlBYU494vftq0UNPvlZJvoifm0e0JvbU8tweCKxFOrfC%2BTIHoMOqC1%2BQyuMvXRFERp%2B0jSzT%2FbkKESlJUe%2F25%2Fp10%2FlBAsIXCAlYN3I0xicKfun4CdRS82KqxcSfMuSY8AutTeI1WcDJri7efjeACrWBbHk94EHVCl63X8cdR4j6d3gYreKzAiJT7UdmGQR44ijkn93boosXmqekPv71bV8dZ9tC9Fg2Bq2KIgA0k8FQQ7f%2Bugzc9z77rqnoCcNYRq1Z3hbrvPqJgEO0eWdrmrw9rvZLXjr6ANkzCfNNBhdw38mV%2BWMvDxyxCtyuaycbCaABqIVZRwOEsKpMTbSay3Wu%2BcZdokD01ymE7kcHv00lJ00hRmE2k%2Fp7fb0avoBioPu5kJ727feRFUCREO%2BL2jk1lkGUWJwB0YJFKhW9WhynWcoQD8umEcC2PsgKKwqZYDcoYx6f04rKqnu59LUv%2FaYc2ihye28zzL4R0eSaIFGBduM%2FtAjbLYX0vCe5f99kzhloWOv3wrHs%2BDAnuwPe%2FTlVuuPqRtPgR667KNLoCQdQdsjRluzDa9%2BXEBjqkAXYUXjDgLxWdn%2FwcCdr2cP3WIOMrzC%2BnlV3rsvAVNasFIMzh7DjrhwWtAuO795Oht5ra45zLRYLF%2Fbi%2BuiF30QMpGe0WiU%2F%2F3Rra93vts63ZtYiE47Ytaj9OyiaWgcOy7a%2FhsrlwTCPrUaAVuYWZ0FnUEGQsB2uliww0fRjCXM%2BuHOQl3ITxggQnO4cEkEMOCp776Cx21gEhyDuZGpvEEMscoR%2Bg&X-Amz-Signature=e875373d99b5f2999fdfc93e0dc6e3385ae6b8c837fb9c9dd470aa70c8dd92df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZD452G%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEo%2B6MzB1mCxKNyVvZidx70l0WFImAftGJAmZntKhocwIhAKoy71e9OfmXAWb6uln%2Bu4gKQkHJyv6wdI9P6vsFkHwvKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FDmvsJyu%2Bubpi9KIq3AMYnvzylzMoV3A6LwBMEFFdWPpHx42zDgbpIfduwpmvKWBYhFXpH3FoUcTlh7BswJOooPQULJ7ZlBYU494vftq0UNPvlZJvoifm0e0JvbU8tweCKxFOrfC%2BTIHoMOqC1%2BQyuMvXRFERp%2B0jSzT%2FbkKESlJUe%2F25%2Fp10%2FlBAsIXCAlYN3I0xicKfun4CdRS82KqxcSfMuSY8AutTeI1WcDJri7efjeACrWBbHk94EHVCl63X8cdR4j6d3gYreKzAiJT7UdmGQR44ijkn93boosXmqekPv71bV8dZ9tC9Fg2Bq2KIgA0k8FQQ7f%2Bugzc9z77rqnoCcNYRq1Z3hbrvPqJgEO0eWdrmrw9rvZLXjr6ANkzCfNNBhdw38mV%2BWMvDxyxCtyuaycbCaABqIVZRwOEsKpMTbSay3Wu%2BcZdokD01ymE7kcHv00lJ00hRmE2k%2Fp7fb0avoBioPu5kJ727feRFUCREO%2BL2jk1lkGUWJwB0YJFKhW9WhynWcoQD8umEcC2PsgKKwqZYDcoYx6f04rKqnu59LUv%2FaYc2ihye28zzL4R0eSaIFGBduM%2FtAjbLYX0vCe5f99kzhloWOv3wrHs%2BDAnuwPe%2FTlVuuPqRtPgR667KNLoCQdQdsjRluzDa9%2BXEBjqkAXYUXjDgLxWdn%2FwcCdr2cP3WIOMrzC%2BnlV3rsvAVNasFIMzh7DjrhwWtAuO795Oht5ra45zLRYLF%2Fbi%2BuiF30QMpGe0WiU%2F%2F3Rra93vts63ZtYiE47Ytaj9OyiaWgcOy7a%2FhsrlwTCPrUaAVuYWZ0FnUEGQsB2uliww0fRjCXM%2BuHOQl3ITxggQnO4cEkEMOCp776Cx21gEhyDuZGpvEEMscoR%2Bg&X-Amz-Signature=413980a047744e49fd95c3a955e243a090e234ffce0e4bb30d3d69bed098be1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZD452G%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEo%2B6MzB1mCxKNyVvZidx70l0WFImAftGJAmZntKhocwIhAKoy71e9OfmXAWb6uln%2Bu4gKQkHJyv6wdI9P6vsFkHwvKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FDmvsJyu%2Bubpi9KIq3AMYnvzylzMoV3A6LwBMEFFdWPpHx42zDgbpIfduwpmvKWBYhFXpH3FoUcTlh7BswJOooPQULJ7ZlBYU494vftq0UNPvlZJvoifm0e0JvbU8tweCKxFOrfC%2BTIHoMOqC1%2BQyuMvXRFERp%2B0jSzT%2FbkKESlJUe%2F25%2Fp10%2FlBAsIXCAlYN3I0xicKfun4CdRS82KqxcSfMuSY8AutTeI1WcDJri7efjeACrWBbHk94EHVCl63X8cdR4j6d3gYreKzAiJT7UdmGQR44ijkn93boosXmqekPv71bV8dZ9tC9Fg2Bq2KIgA0k8FQQ7f%2Bugzc9z77rqnoCcNYRq1Z3hbrvPqJgEO0eWdrmrw9rvZLXjr6ANkzCfNNBhdw38mV%2BWMvDxyxCtyuaycbCaABqIVZRwOEsKpMTbSay3Wu%2BcZdokD01ymE7kcHv00lJ00hRmE2k%2Fp7fb0avoBioPu5kJ727feRFUCREO%2BL2jk1lkGUWJwB0YJFKhW9WhynWcoQD8umEcC2PsgKKwqZYDcoYx6f04rKqnu59LUv%2FaYc2ihye28zzL4R0eSaIFGBduM%2FtAjbLYX0vCe5f99kzhloWOv3wrHs%2BDAnuwPe%2FTlVuuPqRtPgR667KNLoCQdQdsjRluzDa9%2BXEBjqkAXYUXjDgLxWdn%2FwcCdr2cP3WIOMrzC%2BnlV3rsvAVNasFIMzh7DjrhwWtAuO795Oht5ra45zLRYLF%2Fbi%2BuiF30QMpGe0WiU%2F%2F3Rra93vts63ZtYiE47Ytaj9OyiaWgcOy7a%2FhsrlwTCPrUaAVuYWZ0FnUEGQsB2uliww0fRjCXM%2BuHOQl3ITxggQnO4cEkEMOCp776Cx21gEhyDuZGpvEEMscoR%2Bg&X-Amz-Signature=14f7f79a706661dae43f11fac2e9796487785f522dfd2ab430ab1f9880cd13b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZD452G%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEo%2B6MzB1mCxKNyVvZidx70l0WFImAftGJAmZntKhocwIhAKoy71e9OfmXAWb6uln%2Bu4gKQkHJyv6wdI9P6vsFkHwvKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FDmvsJyu%2Bubpi9KIq3AMYnvzylzMoV3A6LwBMEFFdWPpHx42zDgbpIfduwpmvKWBYhFXpH3FoUcTlh7BswJOooPQULJ7ZlBYU494vftq0UNPvlZJvoifm0e0JvbU8tweCKxFOrfC%2BTIHoMOqC1%2BQyuMvXRFERp%2B0jSzT%2FbkKESlJUe%2F25%2Fp10%2FlBAsIXCAlYN3I0xicKfun4CdRS82KqxcSfMuSY8AutTeI1WcDJri7efjeACrWBbHk94EHVCl63X8cdR4j6d3gYreKzAiJT7UdmGQR44ijkn93boosXmqekPv71bV8dZ9tC9Fg2Bq2KIgA0k8FQQ7f%2Bugzc9z77rqnoCcNYRq1Z3hbrvPqJgEO0eWdrmrw9rvZLXjr6ANkzCfNNBhdw38mV%2BWMvDxyxCtyuaycbCaABqIVZRwOEsKpMTbSay3Wu%2BcZdokD01ymE7kcHv00lJ00hRmE2k%2Fp7fb0avoBioPu5kJ727feRFUCREO%2BL2jk1lkGUWJwB0YJFKhW9WhynWcoQD8umEcC2PsgKKwqZYDcoYx6f04rKqnu59LUv%2FaYc2ihye28zzL4R0eSaIFGBduM%2FtAjbLYX0vCe5f99kzhloWOv3wrHs%2BDAnuwPe%2FTlVuuPqRtPgR667KNLoCQdQdsjRluzDa9%2BXEBjqkAXYUXjDgLxWdn%2FwcCdr2cP3WIOMrzC%2BnlV3rsvAVNasFIMzh7DjrhwWtAuO795Oht5ra45zLRYLF%2Fbi%2BuiF30QMpGe0WiU%2F%2F3Rra93vts63ZtYiE47Ytaj9OyiaWgcOy7a%2FhsrlwTCPrUaAVuYWZ0FnUEGQsB2uliww0fRjCXM%2BuHOQl3ITxggQnO4cEkEMOCp776Cx21gEhyDuZGpvEEMscoR%2Bg&X-Amz-Signature=64ff41bc120d44c0a54fce29cd7869294029b4dd38e33f3fb7a32e19ca7ca0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZD452G%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEo%2B6MzB1mCxKNyVvZidx70l0WFImAftGJAmZntKhocwIhAKoy71e9OfmXAWb6uln%2Bu4gKQkHJyv6wdI9P6vsFkHwvKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FDmvsJyu%2Bubpi9KIq3AMYnvzylzMoV3A6LwBMEFFdWPpHx42zDgbpIfduwpmvKWBYhFXpH3FoUcTlh7BswJOooPQULJ7ZlBYU494vftq0UNPvlZJvoifm0e0JvbU8tweCKxFOrfC%2BTIHoMOqC1%2BQyuMvXRFERp%2B0jSzT%2FbkKESlJUe%2F25%2Fp10%2FlBAsIXCAlYN3I0xicKfun4CdRS82KqxcSfMuSY8AutTeI1WcDJri7efjeACrWBbHk94EHVCl63X8cdR4j6d3gYreKzAiJT7UdmGQR44ijkn93boosXmqekPv71bV8dZ9tC9Fg2Bq2KIgA0k8FQQ7f%2Bugzc9z77rqnoCcNYRq1Z3hbrvPqJgEO0eWdrmrw9rvZLXjr6ANkzCfNNBhdw38mV%2BWMvDxyxCtyuaycbCaABqIVZRwOEsKpMTbSay3Wu%2BcZdokD01ymE7kcHv00lJ00hRmE2k%2Fp7fb0avoBioPu5kJ727feRFUCREO%2BL2jk1lkGUWJwB0YJFKhW9WhynWcoQD8umEcC2PsgKKwqZYDcoYx6f04rKqnu59LUv%2FaYc2ihye28zzL4R0eSaIFGBduM%2FtAjbLYX0vCe5f99kzhloWOv3wrHs%2BDAnuwPe%2FTlVuuPqRtPgR667KNLoCQdQdsjRluzDa9%2BXEBjqkAXYUXjDgLxWdn%2FwcCdr2cP3WIOMrzC%2BnlV3rsvAVNasFIMzh7DjrhwWtAuO795Oht5ra45zLRYLF%2Fbi%2BuiF30QMpGe0WiU%2F%2F3Rra93vts63ZtYiE47Ytaj9OyiaWgcOy7a%2FhsrlwTCPrUaAVuYWZ0FnUEGQsB2uliww0fRjCXM%2BuHOQl3ITxggQnO4cEkEMOCp776Cx21gEhyDuZGpvEEMscoR%2Bg&X-Amz-Signature=31c2d7296ba9d1473a18d2817c5a9698209c7ef7694dee591aed1a26cf1a8d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZD452G%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEo%2B6MzB1mCxKNyVvZidx70l0WFImAftGJAmZntKhocwIhAKoy71e9OfmXAWb6uln%2Bu4gKQkHJyv6wdI9P6vsFkHwvKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FDmvsJyu%2Bubpi9KIq3AMYnvzylzMoV3A6LwBMEFFdWPpHx42zDgbpIfduwpmvKWBYhFXpH3FoUcTlh7BswJOooPQULJ7ZlBYU494vftq0UNPvlZJvoifm0e0JvbU8tweCKxFOrfC%2BTIHoMOqC1%2BQyuMvXRFERp%2B0jSzT%2FbkKESlJUe%2F25%2Fp10%2FlBAsIXCAlYN3I0xicKfun4CdRS82KqxcSfMuSY8AutTeI1WcDJri7efjeACrWBbHk94EHVCl63X8cdR4j6d3gYreKzAiJT7UdmGQR44ijkn93boosXmqekPv71bV8dZ9tC9Fg2Bq2KIgA0k8FQQ7f%2Bugzc9z77rqnoCcNYRq1Z3hbrvPqJgEO0eWdrmrw9rvZLXjr6ANkzCfNNBhdw38mV%2BWMvDxyxCtyuaycbCaABqIVZRwOEsKpMTbSay3Wu%2BcZdokD01ymE7kcHv00lJ00hRmE2k%2Fp7fb0avoBioPu5kJ727feRFUCREO%2BL2jk1lkGUWJwB0YJFKhW9WhynWcoQD8umEcC2PsgKKwqZYDcoYx6f04rKqnu59LUv%2FaYc2ihye28zzL4R0eSaIFGBduM%2FtAjbLYX0vCe5f99kzhloWOv3wrHs%2BDAnuwPe%2FTlVuuPqRtPgR667KNLoCQdQdsjRluzDa9%2BXEBjqkAXYUXjDgLxWdn%2FwcCdr2cP3WIOMrzC%2BnlV3rsvAVNasFIMzh7DjrhwWtAuO795Oht5ra45zLRYLF%2Fbi%2BuiF30QMpGe0WiU%2F%2F3Rra93vts63ZtYiE47Ytaj9OyiaWgcOy7a%2FhsrlwTCPrUaAVuYWZ0FnUEGQsB2uliww0fRjCXM%2BuHOQl3ITxggQnO4cEkEMOCp776Cx21gEhyDuZGpvEEMscoR%2Bg&X-Amz-Signature=9550c01b8bbc57060d798bfbd696b5a40692a78e76f30c772dfe56db2c25a61c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZD452G%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEo%2B6MzB1mCxKNyVvZidx70l0WFImAftGJAmZntKhocwIhAKoy71e9OfmXAWb6uln%2Bu4gKQkHJyv6wdI9P6vsFkHwvKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FDmvsJyu%2Bubpi9KIq3AMYnvzylzMoV3A6LwBMEFFdWPpHx42zDgbpIfduwpmvKWBYhFXpH3FoUcTlh7BswJOooPQULJ7ZlBYU494vftq0UNPvlZJvoifm0e0JvbU8tweCKxFOrfC%2BTIHoMOqC1%2BQyuMvXRFERp%2B0jSzT%2FbkKESlJUe%2F25%2Fp10%2FlBAsIXCAlYN3I0xicKfun4CdRS82KqxcSfMuSY8AutTeI1WcDJri7efjeACrWBbHk94EHVCl63X8cdR4j6d3gYreKzAiJT7UdmGQR44ijkn93boosXmqekPv71bV8dZ9tC9Fg2Bq2KIgA0k8FQQ7f%2Bugzc9z77rqnoCcNYRq1Z3hbrvPqJgEO0eWdrmrw9rvZLXjr6ANkzCfNNBhdw38mV%2BWMvDxyxCtyuaycbCaABqIVZRwOEsKpMTbSay3Wu%2BcZdokD01ymE7kcHv00lJ00hRmE2k%2Fp7fb0avoBioPu5kJ727feRFUCREO%2BL2jk1lkGUWJwB0YJFKhW9WhynWcoQD8umEcC2PsgKKwqZYDcoYx6f04rKqnu59LUv%2FaYc2ihye28zzL4R0eSaIFGBduM%2FtAjbLYX0vCe5f99kzhloWOv3wrHs%2BDAnuwPe%2FTlVuuPqRtPgR667KNLoCQdQdsjRluzDa9%2BXEBjqkAXYUXjDgLxWdn%2FwcCdr2cP3WIOMrzC%2BnlV3rsvAVNasFIMzh7DjrhwWtAuO795Oht5ra45zLRYLF%2Fbi%2BuiF30QMpGe0WiU%2F%2F3Rra93vts63ZtYiE47Ytaj9OyiaWgcOy7a%2FhsrlwTCPrUaAVuYWZ0FnUEGQsB2uliww0fRjCXM%2BuHOQl3ITxggQnO4cEkEMOCp776Cx21gEhyDuZGpvEEMscoR%2Bg&X-Amz-Signature=d384872e36e9c9711a3445aa94e870b5c2363df26632d7d3d726d94c6d3ecf9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZD452G%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEo%2B6MzB1mCxKNyVvZidx70l0WFImAftGJAmZntKhocwIhAKoy71e9OfmXAWb6uln%2Bu4gKQkHJyv6wdI9P6vsFkHwvKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FDmvsJyu%2Bubpi9KIq3AMYnvzylzMoV3A6LwBMEFFdWPpHx42zDgbpIfduwpmvKWBYhFXpH3FoUcTlh7BswJOooPQULJ7ZlBYU494vftq0UNPvlZJvoifm0e0JvbU8tweCKxFOrfC%2BTIHoMOqC1%2BQyuMvXRFERp%2B0jSzT%2FbkKESlJUe%2F25%2Fp10%2FlBAsIXCAlYN3I0xicKfun4CdRS82KqxcSfMuSY8AutTeI1WcDJri7efjeACrWBbHk94EHVCl63X8cdR4j6d3gYreKzAiJT7UdmGQR44ijkn93boosXmqekPv71bV8dZ9tC9Fg2Bq2KIgA0k8FQQ7f%2Bugzc9z77rqnoCcNYRq1Z3hbrvPqJgEO0eWdrmrw9rvZLXjr6ANkzCfNNBhdw38mV%2BWMvDxyxCtyuaycbCaABqIVZRwOEsKpMTbSay3Wu%2BcZdokD01ymE7kcHv00lJ00hRmE2k%2Fp7fb0avoBioPu5kJ727feRFUCREO%2BL2jk1lkGUWJwB0YJFKhW9WhynWcoQD8umEcC2PsgKKwqZYDcoYx6f04rKqnu59LUv%2FaYc2ihye28zzL4R0eSaIFGBduM%2FtAjbLYX0vCe5f99kzhloWOv3wrHs%2BDAnuwPe%2FTlVuuPqRtPgR667KNLoCQdQdsjRluzDa9%2BXEBjqkAXYUXjDgLxWdn%2FwcCdr2cP3WIOMrzC%2BnlV3rsvAVNasFIMzh7DjrhwWtAuO795Oht5ra45zLRYLF%2Fbi%2BuiF30QMpGe0WiU%2F%2F3Rra93vts63ZtYiE47Ytaj9OyiaWgcOy7a%2FhsrlwTCPrUaAVuYWZ0FnUEGQsB2uliww0fRjCXM%2BuHOQl3ITxggQnO4cEkEMOCp776Cx21gEhyDuZGpvEEMscoR%2Bg&X-Amz-Signature=8c1822c6854aab6405e2f69a5ec7c3b4cfc17fe7b2e2a65f6ba01da19067b48f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZD452G%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEo%2B6MzB1mCxKNyVvZidx70l0WFImAftGJAmZntKhocwIhAKoy71e9OfmXAWb6uln%2Bu4gKQkHJyv6wdI9P6vsFkHwvKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FDmvsJyu%2Bubpi9KIq3AMYnvzylzMoV3A6LwBMEFFdWPpHx42zDgbpIfduwpmvKWBYhFXpH3FoUcTlh7BswJOooPQULJ7ZlBYU494vftq0UNPvlZJvoifm0e0JvbU8tweCKxFOrfC%2BTIHoMOqC1%2BQyuMvXRFERp%2B0jSzT%2FbkKESlJUe%2F25%2Fp10%2FlBAsIXCAlYN3I0xicKfun4CdRS82KqxcSfMuSY8AutTeI1WcDJri7efjeACrWBbHk94EHVCl63X8cdR4j6d3gYreKzAiJT7UdmGQR44ijkn93boosXmqekPv71bV8dZ9tC9Fg2Bq2KIgA0k8FQQ7f%2Bugzc9z77rqnoCcNYRq1Z3hbrvPqJgEO0eWdrmrw9rvZLXjr6ANkzCfNNBhdw38mV%2BWMvDxyxCtyuaycbCaABqIVZRwOEsKpMTbSay3Wu%2BcZdokD01ymE7kcHv00lJ00hRmE2k%2Fp7fb0avoBioPu5kJ727feRFUCREO%2BL2jk1lkGUWJwB0YJFKhW9WhynWcoQD8umEcC2PsgKKwqZYDcoYx6f04rKqnu59LUv%2FaYc2ihye28zzL4R0eSaIFGBduM%2FtAjbLYX0vCe5f99kzhloWOv3wrHs%2BDAnuwPe%2FTlVuuPqRtPgR667KNLoCQdQdsjRluzDa9%2BXEBjqkAXYUXjDgLxWdn%2FwcCdr2cP3WIOMrzC%2BnlV3rsvAVNasFIMzh7DjrhwWtAuO795Oht5ra45zLRYLF%2Fbi%2BuiF30QMpGe0WiU%2F%2F3Rra93vts63ZtYiE47Ytaj9OyiaWgcOy7a%2FhsrlwTCPrUaAVuYWZ0FnUEGQsB2uliww0fRjCXM%2BuHOQl3ITxggQnO4cEkEMOCp776Cx21gEhyDuZGpvEEMscoR%2Bg&X-Amz-Signature=be291095e0630b52be30954a8f3a3b4abf59cb91c3d78e6f194e723b4f532b46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZD452G%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEo%2B6MzB1mCxKNyVvZidx70l0WFImAftGJAmZntKhocwIhAKoy71e9OfmXAWb6uln%2Bu4gKQkHJyv6wdI9P6vsFkHwvKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FDmvsJyu%2Bubpi9KIq3AMYnvzylzMoV3A6LwBMEFFdWPpHx42zDgbpIfduwpmvKWBYhFXpH3FoUcTlh7BswJOooPQULJ7ZlBYU494vftq0UNPvlZJvoifm0e0JvbU8tweCKxFOrfC%2BTIHoMOqC1%2BQyuMvXRFERp%2B0jSzT%2FbkKESlJUe%2F25%2Fp10%2FlBAsIXCAlYN3I0xicKfun4CdRS82KqxcSfMuSY8AutTeI1WcDJri7efjeACrWBbHk94EHVCl63X8cdR4j6d3gYreKzAiJT7UdmGQR44ijkn93boosXmqekPv71bV8dZ9tC9Fg2Bq2KIgA0k8FQQ7f%2Bugzc9z77rqnoCcNYRq1Z3hbrvPqJgEO0eWdrmrw9rvZLXjr6ANkzCfNNBhdw38mV%2BWMvDxyxCtyuaycbCaABqIVZRwOEsKpMTbSay3Wu%2BcZdokD01ymE7kcHv00lJ00hRmE2k%2Fp7fb0avoBioPu5kJ727feRFUCREO%2BL2jk1lkGUWJwB0YJFKhW9WhynWcoQD8umEcC2PsgKKwqZYDcoYx6f04rKqnu59LUv%2FaYc2ihye28zzL4R0eSaIFGBduM%2FtAjbLYX0vCe5f99kzhloWOv3wrHs%2BDAnuwPe%2FTlVuuPqRtPgR667KNLoCQdQdsjRluzDa9%2BXEBjqkAXYUXjDgLxWdn%2FwcCdr2cP3WIOMrzC%2BnlV3rsvAVNasFIMzh7DjrhwWtAuO795Oht5ra45zLRYLF%2Fbi%2BuiF30QMpGe0WiU%2F%2F3Rra93vts63ZtYiE47Ytaj9OyiaWgcOy7a%2FhsrlwTCPrUaAVuYWZ0FnUEGQsB2uliww0fRjCXM%2BuHOQl3ITxggQnO4cEkEMOCp776Cx21gEhyDuZGpvEEMscoR%2Bg&X-Amz-Signature=84e3d3277e60a2eb85eb7a96b2c4a85248522b6f1f7619d30a34af7675c0d4f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZD452G%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEo%2B6MzB1mCxKNyVvZidx70l0WFImAftGJAmZntKhocwIhAKoy71e9OfmXAWb6uln%2Bu4gKQkHJyv6wdI9P6vsFkHwvKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FDmvsJyu%2Bubpi9KIq3AMYnvzylzMoV3A6LwBMEFFdWPpHx42zDgbpIfduwpmvKWBYhFXpH3FoUcTlh7BswJOooPQULJ7ZlBYU494vftq0UNPvlZJvoifm0e0JvbU8tweCKxFOrfC%2BTIHoMOqC1%2BQyuMvXRFERp%2B0jSzT%2FbkKESlJUe%2F25%2Fp10%2FlBAsIXCAlYN3I0xicKfun4CdRS82KqxcSfMuSY8AutTeI1WcDJri7efjeACrWBbHk94EHVCl63X8cdR4j6d3gYreKzAiJT7UdmGQR44ijkn93boosXmqekPv71bV8dZ9tC9Fg2Bq2KIgA0k8FQQ7f%2Bugzc9z77rqnoCcNYRq1Z3hbrvPqJgEO0eWdrmrw9rvZLXjr6ANkzCfNNBhdw38mV%2BWMvDxyxCtyuaycbCaABqIVZRwOEsKpMTbSay3Wu%2BcZdokD01ymE7kcHv00lJ00hRmE2k%2Fp7fb0avoBioPu5kJ727feRFUCREO%2BL2jk1lkGUWJwB0YJFKhW9WhynWcoQD8umEcC2PsgKKwqZYDcoYx6f04rKqnu59LUv%2FaYc2ihye28zzL4R0eSaIFGBduM%2FtAjbLYX0vCe5f99kzhloWOv3wrHs%2BDAnuwPe%2FTlVuuPqRtPgR667KNLoCQdQdsjRluzDa9%2BXEBjqkAXYUXjDgLxWdn%2FwcCdr2cP3WIOMrzC%2BnlV3rsvAVNasFIMzh7DjrhwWtAuO795Oht5ra45zLRYLF%2Fbi%2BuiF30QMpGe0WiU%2F%2F3Rra93vts63ZtYiE47Ytaj9OyiaWgcOy7a%2FhsrlwTCPrUaAVuYWZ0FnUEGQsB2uliww0fRjCXM%2BuHOQl3ITxggQnO4cEkEMOCp776Cx21gEhyDuZGpvEEMscoR%2Bg&X-Amz-Signature=cd60162d8f6084f1135d63e12699ab7baecf240e486b9a5944bb14fd15022ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
