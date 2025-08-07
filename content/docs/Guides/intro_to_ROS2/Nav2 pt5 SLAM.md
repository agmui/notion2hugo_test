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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGGSGKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD4LqjQ1kq9oR0G1d0v1kCY47qzGRR9iFBA3J9GZuIk8QIhAO8wpHoaqB%2FSiRKo9QF%2F5n4z49AJ2Wd7dTjtQEk2HQMxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5m79IpBUJSrfmiygq3AN92udZq0vZFMqyUAwv2%2FzWHgjjHIbH2Cw3C69eGCmzQqXTW%2Byw3rmeKcIAaoRxNKA75iqBamTF6w3fnWQ%2Brxr8JCP%2B6xtOwmtTkJbXDPm3V1yKJv4uyomWmlwLeYC5CmDZsoZuhW9o0uhSCjyLhnaouELx7BGnSBDVyaWjxFIeu8UQHck0%2B2IkDwhL8AJS5twsXKWQVTGlaaJ%2FVYdDeQM1mOqjFlisy3lttokyRZG2gz2qQPICDYRks1XvgL64NvJN0K5%2B0IcV27%2FdYTzrtNCwORlkl2spUSGdSrlTxMRndncSKd4bFqWL1H8IJkYRqL7VEl2Yh8FO1q4CImm40f001rr672nJ5I78zZ3xvEWH6%2BOqt2exEFYuKC83gAwYMpSJq4mByaRLmSaz8TIbY6EydMVm%2BkLUw9iq8Kv2N%2FspHHv7oZeNOZBRgDdGxDCpiwpD%2B9wqr7gAWyXYrjiBWoHWdNWZX0EO4YEG37pK7Jk1q2wGdSAcRH5mVxY9LED36FEJBhmg6suZHM7hpwjYBIhajVmxR7Cn7NTkrtmVA5lTiH9AmSTSfVYe3jruflffvv2Yxp1wG07IYvVaImNlW1MPhoXiq4HC%2BjAfyDcnWLcUSR6rK3fVKAutmegpVjCcyNDEBjqkAbLltoA7kTHwVvNdnBp5DOFNgt4CrXnIx%2F6tfLJkAgg2IYI78L4bnSwJVqFa2pSnLX8u11QhY%2B8hBTosfzYn7%2BzMXylaEP0rB%2Fj%2Bjuo%2BYC9g7PdVpEaU%2BmskVdREAUFFphkHBfKY1Uay%2BX2akZILwuRvqAFy1Ph9ZsLls6KzddsVhbg3dN45OcQkx41PbR%2FrnJsydttQXzkBs5az8%2F6P7hAWMLjy&X-Amz-Signature=de7c8cc66c483f9cbd685df53d58fbb6e5e2d46859f0ae67802747d1fde202ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGGSGKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD4LqjQ1kq9oR0G1d0v1kCY47qzGRR9iFBA3J9GZuIk8QIhAO8wpHoaqB%2FSiRKo9QF%2F5n4z49AJ2Wd7dTjtQEk2HQMxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5m79IpBUJSrfmiygq3AN92udZq0vZFMqyUAwv2%2FzWHgjjHIbH2Cw3C69eGCmzQqXTW%2Byw3rmeKcIAaoRxNKA75iqBamTF6w3fnWQ%2Brxr8JCP%2B6xtOwmtTkJbXDPm3V1yKJv4uyomWmlwLeYC5CmDZsoZuhW9o0uhSCjyLhnaouELx7BGnSBDVyaWjxFIeu8UQHck0%2B2IkDwhL8AJS5twsXKWQVTGlaaJ%2FVYdDeQM1mOqjFlisy3lttokyRZG2gz2qQPICDYRks1XvgL64NvJN0K5%2B0IcV27%2FdYTzrtNCwORlkl2spUSGdSrlTxMRndncSKd4bFqWL1H8IJkYRqL7VEl2Yh8FO1q4CImm40f001rr672nJ5I78zZ3xvEWH6%2BOqt2exEFYuKC83gAwYMpSJq4mByaRLmSaz8TIbY6EydMVm%2BkLUw9iq8Kv2N%2FspHHv7oZeNOZBRgDdGxDCpiwpD%2B9wqr7gAWyXYrjiBWoHWdNWZX0EO4YEG37pK7Jk1q2wGdSAcRH5mVxY9LED36FEJBhmg6suZHM7hpwjYBIhajVmxR7Cn7NTkrtmVA5lTiH9AmSTSfVYe3jruflffvv2Yxp1wG07IYvVaImNlW1MPhoXiq4HC%2BjAfyDcnWLcUSR6rK3fVKAutmegpVjCcyNDEBjqkAbLltoA7kTHwVvNdnBp5DOFNgt4CrXnIx%2F6tfLJkAgg2IYI78L4bnSwJVqFa2pSnLX8u11QhY%2B8hBTosfzYn7%2BzMXylaEP0rB%2Fj%2Bjuo%2BYC9g7PdVpEaU%2BmskVdREAUFFphkHBfKY1Uay%2BX2akZILwuRvqAFy1Ph9ZsLls6KzddsVhbg3dN45OcQkx41PbR%2FrnJsydttQXzkBs5az8%2F6P7hAWMLjy&X-Amz-Signature=952ad615804e1a3435a6965d368360b9cfa6ff170e0c83d895c8f94809f2f210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGGSGKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD4LqjQ1kq9oR0G1d0v1kCY47qzGRR9iFBA3J9GZuIk8QIhAO8wpHoaqB%2FSiRKo9QF%2F5n4z49AJ2Wd7dTjtQEk2HQMxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5m79IpBUJSrfmiygq3AN92udZq0vZFMqyUAwv2%2FzWHgjjHIbH2Cw3C69eGCmzQqXTW%2Byw3rmeKcIAaoRxNKA75iqBamTF6w3fnWQ%2Brxr8JCP%2B6xtOwmtTkJbXDPm3V1yKJv4uyomWmlwLeYC5CmDZsoZuhW9o0uhSCjyLhnaouELx7BGnSBDVyaWjxFIeu8UQHck0%2B2IkDwhL8AJS5twsXKWQVTGlaaJ%2FVYdDeQM1mOqjFlisy3lttokyRZG2gz2qQPICDYRks1XvgL64NvJN0K5%2B0IcV27%2FdYTzrtNCwORlkl2spUSGdSrlTxMRndncSKd4bFqWL1H8IJkYRqL7VEl2Yh8FO1q4CImm40f001rr672nJ5I78zZ3xvEWH6%2BOqt2exEFYuKC83gAwYMpSJq4mByaRLmSaz8TIbY6EydMVm%2BkLUw9iq8Kv2N%2FspHHv7oZeNOZBRgDdGxDCpiwpD%2B9wqr7gAWyXYrjiBWoHWdNWZX0EO4YEG37pK7Jk1q2wGdSAcRH5mVxY9LED36FEJBhmg6suZHM7hpwjYBIhajVmxR7Cn7NTkrtmVA5lTiH9AmSTSfVYe3jruflffvv2Yxp1wG07IYvVaImNlW1MPhoXiq4HC%2BjAfyDcnWLcUSR6rK3fVKAutmegpVjCcyNDEBjqkAbLltoA7kTHwVvNdnBp5DOFNgt4CrXnIx%2F6tfLJkAgg2IYI78L4bnSwJVqFa2pSnLX8u11QhY%2B8hBTosfzYn7%2BzMXylaEP0rB%2Fj%2Bjuo%2BYC9g7PdVpEaU%2BmskVdREAUFFphkHBfKY1Uay%2BX2akZILwuRvqAFy1Ph9ZsLls6KzddsVhbg3dN45OcQkx41PbR%2FrnJsydttQXzkBs5az8%2F6P7hAWMLjy&X-Amz-Signature=66fa316ef1927479662eaa542f04209288ab2dc68dcfc4733bf4f065d4a5670f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGGSGKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD4LqjQ1kq9oR0G1d0v1kCY47qzGRR9iFBA3J9GZuIk8QIhAO8wpHoaqB%2FSiRKo9QF%2F5n4z49AJ2Wd7dTjtQEk2HQMxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5m79IpBUJSrfmiygq3AN92udZq0vZFMqyUAwv2%2FzWHgjjHIbH2Cw3C69eGCmzQqXTW%2Byw3rmeKcIAaoRxNKA75iqBamTF6w3fnWQ%2Brxr8JCP%2B6xtOwmtTkJbXDPm3V1yKJv4uyomWmlwLeYC5CmDZsoZuhW9o0uhSCjyLhnaouELx7BGnSBDVyaWjxFIeu8UQHck0%2B2IkDwhL8AJS5twsXKWQVTGlaaJ%2FVYdDeQM1mOqjFlisy3lttokyRZG2gz2qQPICDYRks1XvgL64NvJN0K5%2B0IcV27%2FdYTzrtNCwORlkl2spUSGdSrlTxMRndncSKd4bFqWL1H8IJkYRqL7VEl2Yh8FO1q4CImm40f001rr672nJ5I78zZ3xvEWH6%2BOqt2exEFYuKC83gAwYMpSJq4mByaRLmSaz8TIbY6EydMVm%2BkLUw9iq8Kv2N%2FspHHv7oZeNOZBRgDdGxDCpiwpD%2B9wqr7gAWyXYrjiBWoHWdNWZX0EO4YEG37pK7Jk1q2wGdSAcRH5mVxY9LED36FEJBhmg6suZHM7hpwjYBIhajVmxR7Cn7NTkrtmVA5lTiH9AmSTSfVYe3jruflffvv2Yxp1wG07IYvVaImNlW1MPhoXiq4HC%2BjAfyDcnWLcUSR6rK3fVKAutmegpVjCcyNDEBjqkAbLltoA7kTHwVvNdnBp5DOFNgt4CrXnIx%2F6tfLJkAgg2IYI78L4bnSwJVqFa2pSnLX8u11QhY%2B8hBTosfzYn7%2BzMXylaEP0rB%2Fj%2Bjuo%2BYC9g7PdVpEaU%2BmskVdREAUFFphkHBfKY1Uay%2BX2akZILwuRvqAFy1Ph9ZsLls6KzddsVhbg3dN45OcQkx41PbR%2FrnJsydttQXzkBs5az8%2F6P7hAWMLjy&X-Amz-Signature=fe759034c10305cf6e63252c9dd7b7bc2360a4e8a803be8c3002fa5dcf63cf2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGGSGKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD4LqjQ1kq9oR0G1d0v1kCY47qzGRR9iFBA3J9GZuIk8QIhAO8wpHoaqB%2FSiRKo9QF%2F5n4z49AJ2Wd7dTjtQEk2HQMxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5m79IpBUJSrfmiygq3AN92udZq0vZFMqyUAwv2%2FzWHgjjHIbH2Cw3C69eGCmzQqXTW%2Byw3rmeKcIAaoRxNKA75iqBamTF6w3fnWQ%2Brxr8JCP%2B6xtOwmtTkJbXDPm3V1yKJv4uyomWmlwLeYC5CmDZsoZuhW9o0uhSCjyLhnaouELx7BGnSBDVyaWjxFIeu8UQHck0%2B2IkDwhL8AJS5twsXKWQVTGlaaJ%2FVYdDeQM1mOqjFlisy3lttokyRZG2gz2qQPICDYRks1XvgL64NvJN0K5%2B0IcV27%2FdYTzrtNCwORlkl2spUSGdSrlTxMRndncSKd4bFqWL1H8IJkYRqL7VEl2Yh8FO1q4CImm40f001rr672nJ5I78zZ3xvEWH6%2BOqt2exEFYuKC83gAwYMpSJq4mByaRLmSaz8TIbY6EydMVm%2BkLUw9iq8Kv2N%2FspHHv7oZeNOZBRgDdGxDCpiwpD%2B9wqr7gAWyXYrjiBWoHWdNWZX0EO4YEG37pK7Jk1q2wGdSAcRH5mVxY9LED36FEJBhmg6suZHM7hpwjYBIhajVmxR7Cn7NTkrtmVA5lTiH9AmSTSfVYe3jruflffvv2Yxp1wG07IYvVaImNlW1MPhoXiq4HC%2BjAfyDcnWLcUSR6rK3fVKAutmegpVjCcyNDEBjqkAbLltoA7kTHwVvNdnBp5DOFNgt4CrXnIx%2F6tfLJkAgg2IYI78L4bnSwJVqFa2pSnLX8u11QhY%2B8hBTosfzYn7%2BzMXylaEP0rB%2Fj%2Bjuo%2BYC9g7PdVpEaU%2BmskVdREAUFFphkHBfKY1Uay%2BX2akZILwuRvqAFy1Ph9ZsLls6KzddsVhbg3dN45OcQkx41PbR%2FrnJsydttQXzkBs5az8%2F6P7hAWMLjy&X-Amz-Signature=9aa322cf3c39da89ad3d802483ac55825f74eac52aaa294051d30f5954174b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGGSGKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD4LqjQ1kq9oR0G1d0v1kCY47qzGRR9iFBA3J9GZuIk8QIhAO8wpHoaqB%2FSiRKo9QF%2F5n4z49AJ2Wd7dTjtQEk2HQMxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5m79IpBUJSrfmiygq3AN92udZq0vZFMqyUAwv2%2FzWHgjjHIbH2Cw3C69eGCmzQqXTW%2Byw3rmeKcIAaoRxNKA75iqBamTF6w3fnWQ%2Brxr8JCP%2B6xtOwmtTkJbXDPm3V1yKJv4uyomWmlwLeYC5CmDZsoZuhW9o0uhSCjyLhnaouELx7BGnSBDVyaWjxFIeu8UQHck0%2B2IkDwhL8AJS5twsXKWQVTGlaaJ%2FVYdDeQM1mOqjFlisy3lttokyRZG2gz2qQPICDYRks1XvgL64NvJN0K5%2B0IcV27%2FdYTzrtNCwORlkl2spUSGdSrlTxMRndncSKd4bFqWL1H8IJkYRqL7VEl2Yh8FO1q4CImm40f001rr672nJ5I78zZ3xvEWH6%2BOqt2exEFYuKC83gAwYMpSJq4mByaRLmSaz8TIbY6EydMVm%2BkLUw9iq8Kv2N%2FspHHv7oZeNOZBRgDdGxDCpiwpD%2B9wqr7gAWyXYrjiBWoHWdNWZX0EO4YEG37pK7Jk1q2wGdSAcRH5mVxY9LED36FEJBhmg6suZHM7hpwjYBIhajVmxR7Cn7NTkrtmVA5lTiH9AmSTSfVYe3jruflffvv2Yxp1wG07IYvVaImNlW1MPhoXiq4HC%2BjAfyDcnWLcUSR6rK3fVKAutmegpVjCcyNDEBjqkAbLltoA7kTHwVvNdnBp5DOFNgt4CrXnIx%2F6tfLJkAgg2IYI78L4bnSwJVqFa2pSnLX8u11QhY%2B8hBTosfzYn7%2BzMXylaEP0rB%2Fj%2Bjuo%2BYC9g7PdVpEaU%2BmskVdREAUFFphkHBfKY1Uay%2BX2akZILwuRvqAFy1Ph9ZsLls6KzddsVhbg3dN45OcQkx41PbR%2FrnJsydttQXzkBs5az8%2F6P7hAWMLjy&X-Amz-Signature=7af87988ef7fd062dfe0d746e81e877413ec88871d662eb47bd13a3cb7f3adc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGGSGKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD4LqjQ1kq9oR0G1d0v1kCY47qzGRR9iFBA3J9GZuIk8QIhAO8wpHoaqB%2FSiRKo9QF%2F5n4z49AJ2Wd7dTjtQEk2HQMxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5m79IpBUJSrfmiygq3AN92udZq0vZFMqyUAwv2%2FzWHgjjHIbH2Cw3C69eGCmzQqXTW%2Byw3rmeKcIAaoRxNKA75iqBamTF6w3fnWQ%2Brxr8JCP%2B6xtOwmtTkJbXDPm3V1yKJv4uyomWmlwLeYC5CmDZsoZuhW9o0uhSCjyLhnaouELx7BGnSBDVyaWjxFIeu8UQHck0%2B2IkDwhL8AJS5twsXKWQVTGlaaJ%2FVYdDeQM1mOqjFlisy3lttokyRZG2gz2qQPICDYRks1XvgL64NvJN0K5%2B0IcV27%2FdYTzrtNCwORlkl2spUSGdSrlTxMRndncSKd4bFqWL1H8IJkYRqL7VEl2Yh8FO1q4CImm40f001rr672nJ5I78zZ3xvEWH6%2BOqt2exEFYuKC83gAwYMpSJq4mByaRLmSaz8TIbY6EydMVm%2BkLUw9iq8Kv2N%2FspHHv7oZeNOZBRgDdGxDCpiwpD%2B9wqr7gAWyXYrjiBWoHWdNWZX0EO4YEG37pK7Jk1q2wGdSAcRH5mVxY9LED36FEJBhmg6suZHM7hpwjYBIhajVmxR7Cn7NTkrtmVA5lTiH9AmSTSfVYe3jruflffvv2Yxp1wG07IYvVaImNlW1MPhoXiq4HC%2BjAfyDcnWLcUSR6rK3fVKAutmegpVjCcyNDEBjqkAbLltoA7kTHwVvNdnBp5DOFNgt4CrXnIx%2F6tfLJkAgg2IYI78L4bnSwJVqFa2pSnLX8u11QhY%2B8hBTosfzYn7%2BzMXylaEP0rB%2Fj%2Bjuo%2BYC9g7PdVpEaU%2BmskVdREAUFFphkHBfKY1Uay%2BX2akZILwuRvqAFy1Ph9ZsLls6KzddsVhbg3dN45OcQkx41PbR%2FrnJsydttQXzkBs5az8%2F6P7hAWMLjy&X-Amz-Signature=39c4f8b15556b944e6bafa639f78139f03a60e208db88d7ba35ef55781b8ba12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGGSGKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD4LqjQ1kq9oR0G1d0v1kCY47qzGRR9iFBA3J9GZuIk8QIhAO8wpHoaqB%2FSiRKo9QF%2F5n4z49AJ2Wd7dTjtQEk2HQMxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5m79IpBUJSrfmiygq3AN92udZq0vZFMqyUAwv2%2FzWHgjjHIbH2Cw3C69eGCmzQqXTW%2Byw3rmeKcIAaoRxNKA75iqBamTF6w3fnWQ%2Brxr8JCP%2B6xtOwmtTkJbXDPm3V1yKJv4uyomWmlwLeYC5CmDZsoZuhW9o0uhSCjyLhnaouELx7BGnSBDVyaWjxFIeu8UQHck0%2B2IkDwhL8AJS5twsXKWQVTGlaaJ%2FVYdDeQM1mOqjFlisy3lttokyRZG2gz2qQPICDYRks1XvgL64NvJN0K5%2B0IcV27%2FdYTzrtNCwORlkl2spUSGdSrlTxMRndncSKd4bFqWL1H8IJkYRqL7VEl2Yh8FO1q4CImm40f001rr672nJ5I78zZ3xvEWH6%2BOqt2exEFYuKC83gAwYMpSJq4mByaRLmSaz8TIbY6EydMVm%2BkLUw9iq8Kv2N%2FspHHv7oZeNOZBRgDdGxDCpiwpD%2B9wqr7gAWyXYrjiBWoHWdNWZX0EO4YEG37pK7Jk1q2wGdSAcRH5mVxY9LED36FEJBhmg6suZHM7hpwjYBIhajVmxR7Cn7NTkrtmVA5lTiH9AmSTSfVYe3jruflffvv2Yxp1wG07IYvVaImNlW1MPhoXiq4HC%2BjAfyDcnWLcUSR6rK3fVKAutmegpVjCcyNDEBjqkAbLltoA7kTHwVvNdnBp5DOFNgt4CrXnIx%2F6tfLJkAgg2IYI78L4bnSwJVqFa2pSnLX8u11QhY%2B8hBTosfzYn7%2BzMXylaEP0rB%2Fj%2Bjuo%2BYC9g7PdVpEaU%2BmskVdREAUFFphkHBfKY1Uay%2BX2akZILwuRvqAFy1Ph9ZsLls6KzddsVhbg3dN45OcQkx41PbR%2FrnJsydttQXzkBs5az8%2F6P7hAWMLjy&X-Amz-Signature=372366ecfcb8332c7e82e63de5478c27c2ce4de7eb9c9e831b809b494a3d6732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGGSGKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD4LqjQ1kq9oR0G1d0v1kCY47qzGRR9iFBA3J9GZuIk8QIhAO8wpHoaqB%2FSiRKo9QF%2F5n4z49AJ2Wd7dTjtQEk2HQMxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5m79IpBUJSrfmiygq3AN92udZq0vZFMqyUAwv2%2FzWHgjjHIbH2Cw3C69eGCmzQqXTW%2Byw3rmeKcIAaoRxNKA75iqBamTF6w3fnWQ%2Brxr8JCP%2B6xtOwmtTkJbXDPm3V1yKJv4uyomWmlwLeYC5CmDZsoZuhW9o0uhSCjyLhnaouELx7BGnSBDVyaWjxFIeu8UQHck0%2B2IkDwhL8AJS5twsXKWQVTGlaaJ%2FVYdDeQM1mOqjFlisy3lttokyRZG2gz2qQPICDYRks1XvgL64NvJN0K5%2B0IcV27%2FdYTzrtNCwORlkl2spUSGdSrlTxMRndncSKd4bFqWL1H8IJkYRqL7VEl2Yh8FO1q4CImm40f001rr672nJ5I78zZ3xvEWH6%2BOqt2exEFYuKC83gAwYMpSJq4mByaRLmSaz8TIbY6EydMVm%2BkLUw9iq8Kv2N%2FspHHv7oZeNOZBRgDdGxDCpiwpD%2B9wqr7gAWyXYrjiBWoHWdNWZX0EO4YEG37pK7Jk1q2wGdSAcRH5mVxY9LED36FEJBhmg6suZHM7hpwjYBIhajVmxR7Cn7NTkrtmVA5lTiH9AmSTSfVYe3jruflffvv2Yxp1wG07IYvVaImNlW1MPhoXiq4HC%2BjAfyDcnWLcUSR6rK3fVKAutmegpVjCcyNDEBjqkAbLltoA7kTHwVvNdnBp5DOFNgt4CrXnIx%2F6tfLJkAgg2IYI78L4bnSwJVqFa2pSnLX8u11QhY%2B8hBTosfzYn7%2BzMXylaEP0rB%2Fj%2Bjuo%2BYC9g7PdVpEaU%2BmskVdREAUFFphkHBfKY1Uay%2BX2akZILwuRvqAFy1Ph9ZsLls6KzddsVhbg3dN45OcQkx41PbR%2FrnJsydttQXzkBs5az8%2F6P7hAWMLjy&X-Amz-Signature=6e33702c0ed70c0302ecd9ef8c0c41af2e52b2dc23c75d56bcb4448f0c81c0ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGGSGKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD4LqjQ1kq9oR0G1d0v1kCY47qzGRR9iFBA3J9GZuIk8QIhAO8wpHoaqB%2FSiRKo9QF%2F5n4z49AJ2Wd7dTjtQEk2HQMxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5m79IpBUJSrfmiygq3AN92udZq0vZFMqyUAwv2%2FzWHgjjHIbH2Cw3C69eGCmzQqXTW%2Byw3rmeKcIAaoRxNKA75iqBamTF6w3fnWQ%2Brxr8JCP%2B6xtOwmtTkJbXDPm3V1yKJv4uyomWmlwLeYC5CmDZsoZuhW9o0uhSCjyLhnaouELx7BGnSBDVyaWjxFIeu8UQHck0%2B2IkDwhL8AJS5twsXKWQVTGlaaJ%2FVYdDeQM1mOqjFlisy3lttokyRZG2gz2qQPICDYRks1XvgL64NvJN0K5%2B0IcV27%2FdYTzrtNCwORlkl2spUSGdSrlTxMRndncSKd4bFqWL1H8IJkYRqL7VEl2Yh8FO1q4CImm40f001rr672nJ5I78zZ3xvEWH6%2BOqt2exEFYuKC83gAwYMpSJq4mByaRLmSaz8TIbY6EydMVm%2BkLUw9iq8Kv2N%2FspHHv7oZeNOZBRgDdGxDCpiwpD%2B9wqr7gAWyXYrjiBWoHWdNWZX0EO4YEG37pK7Jk1q2wGdSAcRH5mVxY9LED36FEJBhmg6suZHM7hpwjYBIhajVmxR7Cn7NTkrtmVA5lTiH9AmSTSfVYe3jruflffvv2Yxp1wG07IYvVaImNlW1MPhoXiq4HC%2BjAfyDcnWLcUSR6rK3fVKAutmegpVjCcyNDEBjqkAbLltoA7kTHwVvNdnBp5DOFNgt4CrXnIx%2F6tfLJkAgg2IYI78L4bnSwJVqFa2pSnLX8u11QhY%2B8hBTosfzYn7%2BzMXylaEP0rB%2Fj%2Bjuo%2BYC9g7PdVpEaU%2BmskVdREAUFFphkHBfKY1Uay%2BX2akZILwuRvqAFy1Ph9ZsLls6KzddsVhbg3dN45OcQkx41PbR%2FrnJsydttQXzkBs5az8%2F6P7hAWMLjy&X-Amz-Signature=7aafa3f1d6fbc54933ae118cb468bea4556a7f3c513326e3b3580df3968cbb29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGGSGKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD4LqjQ1kq9oR0G1d0v1kCY47qzGRR9iFBA3J9GZuIk8QIhAO8wpHoaqB%2FSiRKo9QF%2F5n4z49AJ2Wd7dTjtQEk2HQMxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5m79IpBUJSrfmiygq3AN92udZq0vZFMqyUAwv2%2FzWHgjjHIbH2Cw3C69eGCmzQqXTW%2Byw3rmeKcIAaoRxNKA75iqBamTF6w3fnWQ%2Brxr8JCP%2B6xtOwmtTkJbXDPm3V1yKJv4uyomWmlwLeYC5CmDZsoZuhW9o0uhSCjyLhnaouELx7BGnSBDVyaWjxFIeu8UQHck0%2B2IkDwhL8AJS5twsXKWQVTGlaaJ%2FVYdDeQM1mOqjFlisy3lttokyRZG2gz2qQPICDYRks1XvgL64NvJN0K5%2B0IcV27%2FdYTzrtNCwORlkl2spUSGdSrlTxMRndncSKd4bFqWL1H8IJkYRqL7VEl2Yh8FO1q4CImm40f001rr672nJ5I78zZ3xvEWH6%2BOqt2exEFYuKC83gAwYMpSJq4mByaRLmSaz8TIbY6EydMVm%2BkLUw9iq8Kv2N%2FspHHv7oZeNOZBRgDdGxDCpiwpD%2B9wqr7gAWyXYrjiBWoHWdNWZX0EO4YEG37pK7Jk1q2wGdSAcRH5mVxY9LED36FEJBhmg6suZHM7hpwjYBIhajVmxR7Cn7NTkrtmVA5lTiH9AmSTSfVYe3jruflffvv2Yxp1wG07IYvVaImNlW1MPhoXiq4HC%2BjAfyDcnWLcUSR6rK3fVKAutmegpVjCcyNDEBjqkAbLltoA7kTHwVvNdnBp5DOFNgt4CrXnIx%2F6tfLJkAgg2IYI78L4bnSwJVqFa2pSnLX8u11QhY%2B8hBTosfzYn7%2BzMXylaEP0rB%2Fj%2Bjuo%2BYC9g7PdVpEaU%2BmskVdREAUFFphkHBfKY1Uay%2BX2akZILwuRvqAFy1Ph9ZsLls6KzddsVhbg3dN45OcQkx41PbR%2FrnJsydttQXzkBs5az8%2F6P7hAWMLjy&X-Amz-Signature=ba7b7ad54d77ec2f461ecf276365e66c0e002f1efec500719d4dd5a5ee6c7997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGGSGKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD4LqjQ1kq9oR0G1d0v1kCY47qzGRR9iFBA3J9GZuIk8QIhAO8wpHoaqB%2FSiRKo9QF%2F5n4z49AJ2Wd7dTjtQEk2HQMxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5m79IpBUJSrfmiygq3AN92udZq0vZFMqyUAwv2%2FzWHgjjHIbH2Cw3C69eGCmzQqXTW%2Byw3rmeKcIAaoRxNKA75iqBamTF6w3fnWQ%2Brxr8JCP%2B6xtOwmtTkJbXDPm3V1yKJv4uyomWmlwLeYC5CmDZsoZuhW9o0uhSCjyLhnaouELx7BGnSBDVyaWjxFIeu8UQHck0%2B2IkDwhL8AJS5twsXKWQVTGlaaJ%2FVYdDeQM1mOqjFlisy3lttokyRZG2gz2qQPICDYRks1XvgL64NvJN0K5%2B0IcV27%2FdYTzrtNCwORlkl2spUSGdSrlTxMRndncSKd4bFqWL1H8IJkYRqL7VEl2Yh8FO1q4CImm40f001rr672nJ5I78zZ3xvEWH6%2BOqt2exEFYuKC83gAwYMpSJq4mByaRLmSaz8TIbY6EydMVm%2BkLUw9iq8Kv2N%2FspHHv7oZeNOZBRgDdGxDCpiwpD%2B9wqr7gAWyXYrjiBWoHWdNWZX0EO4YEG37pK7Jk1q2wGdSAcRH5mVxY9LED36FEJBhmg6suZHM7hpwjYBIhajVmxR7Cn7NTkrtmVA5lTiH9AmSTSfVYe3jruflffvv2Yxp1wG07IYvVaImNlW1MPhoXiq4HC%2BjAfyDcnWLcUSR6rK3fVKAutmegpVjCcyNDEBjqkAbLltoA7kTHwVvNdnBp5DOFNgt4CrXnIx%2F6tfLJkAgg2IYI78L4bnSwJVqFa2pSnLX8u11QhY%2B8hBTosfzYn7%2BzMXylaEP0rB%2Fj%2Bjuo%2BYC9g7PdVpEaU%2BmskVdREAUFFphkHBfKY1Uay%2BX2akZILwuRvqAFy1Ph9ZsLls6KzddsVhbg3dN45OcQkx41PbR%2FrnJsydttQXzkBs5az8%2F6P7hAWMLjy&X-Amz-Signature=6f5d752dec8cea57df686e8d62a67c034eb6e1c82a42feeb3b5289033ec3cfe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGGSGKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD4LqjQ1kq9oR0G1d0v1kCY47qzGRR9iFBA3J9GZuIk8QIhAO8wpHoaqB%2FSiRKo9QF%2F5n4z49AJ2Wd7dTjtQEk2HQMxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5m79IpBUJSrfmiygq3AN92udZq0vZFMqyUAwv2%2FzWHgjjHIbH2Cw3C69eGCmzQqXTW%2Byw3rmeKcIAaoRxNKA75iqBamTF6w3fnWQ%2Brxr8JCP%2B6xtOwmtTkJbXDPm3V1yKJv4uyomWmlwLeYC5CmDZsoZuhW9o0uhSCjyLhnaouELx7BGnSBDVyaWjxFIeu8UQHck0%2B2IkDwhL8AJS5twsXKWQVTGlaaJ%2FVYdDeQM1mOqjFlisy3lttokyRZG2gz2qQPICDYRks1XvgL64NvJN0K5%2B0IcV27%2FdYTzrtNCwORlkl2spUSGdSrlTxMRndncSKd4bFqWL1H8IJkYRqL7VEl2Yh8FO1q4CImm40f001rr672nJ5I78zZ3xvEWH6%2BOqt2exEFYuKC83gAwYMpSJq4mByaRLmSaz8TIbY6EydMVm%2BkLUw9iq8Kv2N%2FspHHv7oZeNOZBRgDdGxDCpiwpD%2B9wqr7gAWyXYrjiBWoHWdNWZX0EO4YEG37pK7Jk1q2wGdSAcRH5mVxY9LED36FEJBhmg6suZHM7hpwjYBIhajVmxR7Cn7NTkrtmVA5lTiH9AmSTSfVYe3jruflffvv2Yxp1wG07IYvVaImNlW1MPhoXiq4HC%2BjAfyDcnWLcUSR6rK3fVKAutmegpVjCcyNDEBjqkAbLltoA7kTHwVvNdnBp5DOFNgt4CrXnIx%2F6tfLJkAgg2IYI78L4bnSwJVqFa2pSnLX8u11QhY%2B8hBTosfzYn7%2BzMXylaEP0rB%2Fj%2Bjuo%2BYC9g7PdVpEaU%2BmskVdREAUFFphkHBfKY1Uay%2BX2akZILwuRvqAFy1Ph9ZsLls6KzddsVhbg3dN45OcQkx41PbR%2FrnJsydttQXzkBs5az8%2F6P7hAWMLjy&X-Amz-Signature=1aa22e317def6294faa7c80762005b7b58e0b506cbabf44c84ef5dd275809a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGGSGKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD4LqjQ1kq9oR0G1d0v1kCY47qzGRR9iFBA3J9GZuIk8QIhAO8wpHoaqB%2FSiRKo9QF%2F5n4z49AJ2Wd7dTjtQEk2HQMxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5m79IpBUJSrfmiygq3AN92udZq0vZFMqyUAwv2%2FzWHgjjHIbH2Cw3C69eGCmzQqXTW%2Byw3rmeKcIAaoRxNKA75iqBamTF6w3fnWQ%2Brxr8JCP%2B6xtOwmtTkJbXDPm3V1yKJv4uyomWmlwLeYC5CmDZsoZuhW9o0uhSCjyLhnaouELx7BGnSBDVyaWjxFIeu8UQHck0%2B2IkDwhL8AJS5twsXKWQVTGlaaJ%2FVYdDeQM1mOqjFlisy3lttokyRZG2gz2qQPICDYRks1XvgL64NvJN0K5%2B0IcV27%2FdYTzrtNCwORlkl2spUSGdSrlTxMRndncSKd4bFqWL1H8IJkYRqL7VEl2Yh8FO1q4CImm40f001rr672nJ5I78zZ3xvEWH6%2BOqt2exEFYuKC83gAwYMpSJq4mByaRLmSaz8TIbY6EydMVm%2BkLUw9iq8Kv2N%2FspHHv7oZeNOZBRgDdGxDCpiwpD%2B9wqr7gAWyXYrjiBWoHWdNWZX0EO4YEG37pK7Jk1q2wGdSAcRH5mVxY9LED36FEJBhmg6suZHM7hpwjYBIhajVmxR7Cn7NTkrtmVA5lTiH9AmSTSfVYe3jruflffvv2Yxp1wG07IYvVaImNlW1MPhoXiq4HC%2BjAfyDcnWLcUSR6rK3fVKAutmegpVjCcyNDEBjqkAbLltoA7kTHwVvNdnBp5DOFNgt4CrXnIx%2F6tfLJkAgg2IYI78L4bnSwJVqFa2pSnLX8u11QhY%2B8hBTosfzYn7%2BzMXylaEP0rB%2Fj%2Bjuo%2BYC9g7PdVpEaU%2BmskVdREAUFFphkHBfKY1Uay%2BX2akZILwuRvqAFy1Ph9ZsLls6KzddsVhbg3dN45OcQkx41PbR%2FrnJsydttQXzkBs5az8%2F6P7hAWMLjy&X-Amz-Signature=d69ca73b5605f27a623c48d62261efd950f34cfa4563c2bc4b0a6952dfbd1c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
