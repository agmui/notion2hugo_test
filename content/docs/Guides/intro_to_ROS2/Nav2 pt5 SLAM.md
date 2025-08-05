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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4746CM2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCByFnQSila8t3TDOyO8VLSWUeh8r0g1pwrj%2Bh0ZuG98wIhAJUkJ46%2F9PYJ6FwHunFg3ZZHUks3stTjUawMA%2B5%2BUhNrKv8DCF4QABoMNjM3NDIzMTgzODA1IgzhbGdvxcwWC4j3uSEq3APbfghoYwW9QEHvyrgCJ6aC1TKgHJJKZ6j6g6yC6q%2Frw0xARgmlELX8DxmfNxOCi5%2BFpspQ5s7CMIg1JjupJDSvNn99YWJRGJ3uL1sj5cSWpt%2Fx25jdLSFsPuYMiPMqgiir3Pi4zbY81tSr%2B07fGk%2Fv4%2BMc%2Bapefhww2MrzC7i8kOfwhqcXOU%2Bd8Uuu1OHY%2F9RYGhwmWjBXCiKbI0uus1tBq6NHO3ljvjwTDoLik%2BekWQQKlyumSDpaD%2BL10DlHvsGT8Gbbp82Zh%2ByHvcio6w1nxfQf8fyAccXECETPYeOJCP%2F7l5S302s5j7It1lzLLqQfNHKzz3Mv92ZEkBdL9rNEO2ER0Ig9x2Ihx32v%2F7ux0UlXde4PCqyFVTaOW8uCwxDLmDUEvZgqO7QpBg1UE13m5L72%2Bpri7uGHmqUS%2BtftdMti5kh0TYIfaRHCgT5VUKQfI1tHIhIgqgXYc%2Fm8VTP2k3lsiTD7IlUBzmDEHDKc%2FYUxvYpotFRG8FDxR5f%2FpOOgLdjSo%2B7GeDGlsQbAWWcY5Gr4f80pq6YRVkUKAKDoJKftmPBPsLkb0eWOiSxKr2g4hidsp6XU2gFLGGgZcieooHAcEWcU7p6Ayc%2BvZIVHzhhWubX1nG5QhPxXIjDKhMjEBjqkATr%2FI9M3HyhPQ2ckQo3F2ovkAxMrv9%2Fe09kEzZ6OtentLsmcvxv%2BP17Cg0eeuzALUodiraA0hwmE8B%2BEy0tEwUZPSXxJrnpC%2BKsCMxnC2gq6%2FWJSYRVBnqnqXnJsXUoqT%2BrGGa9ObjijebkPZDEr3HwFpqfV8mTC9sY8JNEsjdlO5kowdxqfwZvZlkxvFm8uGo2K6ep8LV3tErMoRa0BRXBjfOxY&X-Amz-Signature=3f3d57dd4d3530b66c06e1bc38ab6f3980d1eb4d85ecfbf6bb2aff17b404da9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4746CM2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCByFnQSila8t3TDOyO8VLSWUeh8r0g1pwrj%2Bh0ZuG98wIhAJUkJ46%2F9PYJ6FwHunFg3ZZHUks3stTjUawMA%2B5%2BUhNrKv8DCF4QABoMNjM3NDIzMTgzODA1IgzhbGdvxcwWC4j3uSEq3APbfghoYwW9QEHvyrgCJ6aC1TKgHJJKZ6j6g6yC6q%2Frw0xARgmlELX8DxmfNxOCi5%2BFpspQ5s7CMIg1JjupJDSvNn99YWJRGJ3uL1sj5cSWpt%2Fx25jdLSFsPuYMiPMqgiir3Pi4zbY81tSr%2B07fGk%2Fv4%2BMc%2Bapefhww2MrzC7i8kOfwhqcXOU%2Bd8Uuu1OHY%2F9RYGhwmWjBXCiKbI0uus1tBq6NHO3ljvjwTDoLik%2BekWQQKlyumSDpaD%2BL10DlHvsGT8Gbbp82Zh%2ByHvcio6w1nxfQf8fyAccXECETPYeOJCP%2F7l5S302s5j7It1lzLLqQfNHKzz3Mv92ZEkBdL9rNEO2ER0Ig9x2Ihx32v%2F7ux0UlXde4PCqyFVTaOW8uCwxDLmDUEvZgqO7QpBg1UE13m5L72%2Bpri7uGHmqUS%2BtftdMti5kh0TYIfaRHCgT5VUKQfI1tHIhIgqgXYc%2Fm8VTP2k3lsiTD7IlUBzmDEHDKc%2FYUxvYpotFRG8FDxR5f%2FpOOgLdjSo%2B7GeDGlsQbAWWcY5Gr4f80pq6YRVkUKAKDoJKftmPBPsLkb0eWOiSxKr2g4hidsp6XU2gFLGGgZcieooHAcEWcU7p6Ayc%2BvZIVHzhhWubX1nG5QhPxXIjDKhMjEBjqkATr%2FI9M3HyhPQ2ckQo3F2ovkAxMrv9%2Fe09kEzZ6OtentLsmcvxv%2BP17Cg0eeuzALUodiraA0hwmE8B%2BEy0tEwUZPSXxJrnpC%2BKsCMxnC2gq6%2FWJSYRVBnqnqXnJsXUoqT%2BrGGa9ObjijebkPZDEr3HwFpqfV8mTC9sY8JNEsjdlO5kowdxqfwZvZlkxvFm8uGo2K6ep8LV3tErMoRa0BRXBjfOxY&X-Amz-Signature=d52f267818934bc759d46eb8be86397a26a493a9c4016a0df8d797f91a26a91e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4746CM2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCByFnQSila8t3TDOyO8VLSWUeh8r0g1pwrj%2Bh0ZuG98wIhAJUkJ46%2F9PYJ6FwHunFg3ZZHUks3stTjUawMA%2B5%2BUhNrKv8DCF4QABoMNjM3NDIzMTgzODA1IgzhbGdvxcwWC4j3uSEq3APbfghoYwW9QEHvyrgCJ6aC1TKgHJJKZ6j6g6yC6q%2Frw0xARgmlELX8DxmfNxOCi5%2BFpspQ5s7CMIg1JjupJDSvNn99YWJRGJ3uL1sj5cSWpt%2Fx25jdLSFsPuYMiPMqgiir3Pi4zbY81tSr%2B07fGk%2Fv4%2BMc%2Bapefhww2MrzC7i8kOfwhqcXOU%2Bd8Uuu1OHY%2F9RYGhwmWjBXCiKbI0uus1tBq6NHO3ljvjwTDoLik%2BekWQQKlyumSDpaD%2BL10DlHvsGT8Gbbp82Zh%2ByHvcio6w1nxfQf8fyAccXECETPYeOJCP%2F7l5S302s5j7It1lzLLqQfNHKzz3Mv92ZEkBdL9rNEO2ER0Ig9x2Ihx32v%2F7ux0UlXde4PCqyFVTaOW8uCwxDLmDUEvZgqO7QpBg1UE13m5L72%2Bpri7uGHmqUS%2BtftdMti5kh0TYIfaRHCgT5VUKQfI1tHIhIgqgXYc%2Fm8VTP2k3lsiTD7IlUBzmDEHDKc%2FYUxvYpotFRG8FDxR5f%2FpOOgLdjSo%2B7GeDGlsQbAWWcY5Gr4f80pq6YRVkUKAKDoJKftmPBPsLkb0eWOiSxKr2g4hidsp6XU2gFLGGgZcieooHAcEWcU7p6Ayc%2BvZIVHzhhWubX1nG5QhPxXIjDKhMjEBjqkATr%2FI9M3HyhPQ2ckQo3F2ovkAxMrv9%2Fe09kEzZ6OtentLsmcvxv%2BP17Cg0eeuzALUodiraA0hwmE8B%2BEy0tEwUZPSXxJrnpC%2BKsCMxnC2gq6%2FWJSYRVBnqnqXnJsXUoqT%2BrGGa9ObjijebkPZDEr3HwFpqfV8mTC9sY8JNEsjdlO5kowdxqfwZvZlkxvFm8uGo2K6ep8LV3tErMoRa0BRXBjfOxY&X-Amz-Signature=5acac87712a0b9aa121a151a8f717eae50096a811beb8eac629abff3a9115a1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4746CM2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCByFnQSila8t3TDOyO8VLSWUeh8r0g1pwrj%2Bh0ZuG98wIhAJUkJ46%2F9PYJ6FwHunFg3ZZHUks3stTjUawMA%2B5%2BUhNrKv8DCF4QABoMNjM3NDIzMTgzODA1IgzhbGdvxcwWC4j3uSEq3APbfghoYwW9QEHvyrgCJ6aC1TKgHJJKZ6j6g6yC6q%2Frw0xARgmlELX8DxmfNxOCi5%2BFpspQ5s7CMIg1JjupJDSvNn99YWJRGJ3uL1sj5cSWpt%2Fx25jdLSFsPuYMiPMqgiir3Pi4zbY81tSr%2B07fGk%2Fv4%2BMc%2Bapefhww2MrzC7i8kOfwhqcXOU%2Bd8Uuu1OHY%2F9RYGhwmWjBXCiKbI0uus1tBq6NHO3ljvjwTDoLik%2BekWQQKlyumSDpaD%2BL10DlHvsGT8Gbbp82Zh%2ByHvcio6w1nxfQf8fyAccXECETPYeOJCP%2F7l5S302s5j7It1lzLLqQfNHKzz3Mv92ZEkBdL9rNEO2ER0Ig9x2Ihx32v%2F7ux0UlXde4PCqyFVTaOW8uCwxDLmDUEvZgqO7QpBg1UE13m5L72%2Bpri7uGHmqUS%2BtftdMti5kh0TYIfaRHCgT5VUKQfI1tHIhIgqgXYc%2Fm8VTP2k3lsiTD7IlUBzmDEHDKc%2FYUxvYpotFRG8FDxR5f%2FpOOgLdjSo%2B7GeDGlsQbAWWcY5Gr4f80pq6YRVkUKAKDoJKftmPBPsLkb0eWOiSxKr2g4hidsp6XU2gFLGGgZcieooHAcEWcU7p6Ayc%2BvZIVHzhhWubX1nG5QhPxXIjDKhMjEBjqkATr%2FI9M3HyhPQ2ckQo3F2ovkAxMrv9%2Fe09kEzZ6OtentLsmcvxv%2BP17Cg0eeuzALUodiraA0hwmE8B%2BEy0tEwUZPSXxJrnpC%2BKsCMxnC2gq6%2FWJSYRVBnqnqXnJsXUoqT%2BrGGa9ObjijebkPZDEr3HwFpqfV8mTC9sY8JNEsjdlO5kowdxqfwZvZlkxvFm8uGo2K6ep8LV3tErMoRa0BRXBjfOxY&X-Amz-Signature=6215d1f424283f448b6b56bab364f8d3aa0e08a8d16df3920ec75121959be57b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4746CM2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCByFnQSila8t3TDOyO8VLSWUeh8r0g1pwrj%2Bh0ZuG98wIhAJUkJ46%2F9PYJ6FwHunFg3ZZHUks3stTjUawMA%2B5%2BUhNrKv8DCF4QABoMNjM3NDIzMTgzODA1IgzhbGdvxcwWC4j3uSEq3APbfghoYwW9QEHvyrgCJ6aC1TKgHJJKZ6j6g6yC6q%2Frw0xARgmlELX8DxmfNxOCi5%2BFpspQ5s7CMIg1JjupJDSvNn99YWJRGJ3uL1sj5cSWpt%2Fx25jdLSFsPuYMiPMqgiir3Pi4zbY81tSr%2B07fGk%2Fv4%2BMc%2Bapefhww2MrzC7i8kOfwhqcXOU%2Bd8Uuu1OHY%2F9RYGhwmWjBXCiKbI0uus1tBq6NHO3ljvjwTDoLik%2BekWQQKlyumSDpaD%2BL10DlHvsGT8Gbbp82Zh%2ByHvcio6w1nxfQf8fyAccXECETPYeOJCP%2F7l5S302s5j7It1lzLLqQfNHKzz3Mv92ZEkBdL9rNEO2ER0Ig9x2Ihx32v%2F7ux0UlXde4PCqyFVTaOW8uCwxDLmDUEvZgqO7QpBg1UE13m5L72%2Bpri7uGHmqUS%2BtftdMti5kh0TYIfaRHCgT5VUKQfI1tHIhIgqgXYc%2Fm8VTP2k3lsiTD7IlUBzmDEHDKc%2FYUxvYpotFRG8FDxR5f%2FpOOgLdjSo%2B7GeDGlsQbAWWcY5Gr4f80pq6YRVkUKAKDoJKftmPBPsLkb0eWOiSxKr2g4hidsp6XU2gFLGGgZcieooHAcEWcU7p6Ayc%2BvZIVHzhhWubX1nG5QhPxXIjDKhMjEBjqkATr%2FI9M3HyhPQ2ckQo3F2ovkAxMrv9%2Fe09kEzZ6OtentLsmcvxv%2BP17Cg0eeuzALUodiraA0hwmE8B%2BEy0tEwUZPSXxJrnpC%2BKsCMxnC2gq6%2FWJSYRVBnqnqXnJsXUoqT%2BrGGa9ObjijebkPZDEr3HwFpqfV8mTC9sY8JNEsjdlO5kowdxqfwZvZlkxvFm8uGo2K6ep8LV3tErMoRa0BRXBjfOxY&X-Amz-Signature=097d4fe3f817d4f040daafb0cb34e7db0262f554a631780ca6ee68532beec678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4746CM2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCByFnQSila8t3TDOyO8VLSWUeh8r0g1pwrj%2Bh0ZuG98wIhAJUkJ46%2F9PYJ6FwHunFg3ZZHUks3stTjUawMA%2B5%2BUhNrKv8DCF4QABoMNjM3NDIzMTgzODA1IgzhbGdvxcwWC4j3uSEq3APbfghoYwW9QEHvyrgCJ6aC1TKgHJJKZ6j6g6yC6q%2Frw0xARgmlELX8DxmfNxOCi5%2BFpspQ5s7CMIg1JjupJDSvNn99YWJRGJ3uL1sj5cSWpt%2Fx25jdLSFsPuYMiPMqgiir3Pi4zbY81tSr%2B07fGk%2Fv4%2BMc%2Bapefhww2MrzC7i8kOfwhqcXOU%2Bd8Uuu1OHY%2F9RYGhwmWjBXCiKbI0uus1tBq6NHO3ljvjwTDoLik%2BekWQQKlyumSDpaD%2BL10DlHvsGT8Gbbp82Zh%2ByHvcio6w1nxfQf8fyAccXECETPYeOJCP%2F7l5S302s5j7It1lzLLqQfNHKzz3Mv92ZEkBdL9rNEO2ER0Ig9x2Ihx32v%2F7ux0UlXde4PCqyFVTaOW8uCwxDLmDUEvZgqO7QpBg1UE13m5L72%2Bpri7uGHmqUS%2BtftdMti5kh0TYIfaRHCgT5VUKQfI1tHIhIgqgXYc%2Fm8VTP2k3lsiTD7IlUBzmDEHDKc%2FYUxvYpotFRG8FDxR5f%2FpOOgLdjSo%2B7GeDGlsQbAWWcY5Gr4f80pq6YRVkUKAKDoJKftmPBPsLkb0eWOiSxKr2g4hidsp6XU2gFLGGgZcieooHAcEWcU7p6Ayc%2BvZIVHzhhWubX1nG5QhPxXIjDKhMjEBjqkATr%2FI9M3HyhPQ2ckQo3F2ovkAxMrv9%2Fe09kEzZ6OtentLsmcvxv%2BP17Cg0eeuzALUodiraA0hwmE8B%2BEy0tEwUZPSXxJrnpC%2BKsCMxnC2gq6%2FWJSYRVBnqnqXnJsXUoqT%2BrGGa9ObjijebkPZDEr3HwFpqfV8mTC9sY8JNEsjdlO5kowdxqfwZvZlkxvFm8uGo2K6ep8LV3tErMoRa0BRXBjfOxY&X-Amz-Signature=a9186e7574a2e0a82a42696f58a8908de660c8c329a7033da8c3bf937e94268b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4746CM2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCByFnQSila8t3TDOyO8VLSWUeh8r0g1pwrj%2Bh0ZuG98wIhAJUkJ46%2F9PYJ6FwHunFg3ZZHUks3stTjUawMA%2B5%2BUhNrKv8DCF4QABoMNjM3NDIzMTgzODA1IgzhbGdvxcwWC4j3uSEq3APbfghoYwW9QEHvyrgCJ6aC1TKgHJJKZ6j6g6yC6q%2Frw0xARgmlELX8DxmfNxOCi5%2BFpspQ5s7CMIg1JjupJDSvNn99YWJRGJ3uL1sj5cSWpt%2Fx25jdLSFsPuYMiPMqgiir3Pi4zbY81tSr%2B07fGk%2Fv4%2BMc%2Bapefhww2MrzC7i8kOfwhqcXOU%2Bd8Uuu1OHY%2F9RYGhwmWjBXCiKbI0uus1tBq6NHO3ljvjwTDoLik%2BekWQQKlyumSDpaD%2BL10DlHvsGT8Gbbp82Zh%2ByHvcio6w1nxfQf8fyAccXECETPYeOJCP%2F7l5S302s5j7It1lzLLqQfNHKzz3Mv92ZEkBdL9rNEO2ER0Ig9x2Ihx32v%2F7ux0UlXde4PCqyFVTaOW8uCwxDLmDUEvZgqO7QpBg1UE13m5L72%2Bpri7uGHmqUS%2BtftdMti5kh0TYIfaRHCgT5VUKQfI1tHIhIgqgXYc%2Fm8VTP2k3lsiTD7IlUBzmDEHDKc%2FYUxvYpotFRG8FDxR5f%2FpOOgLdjSo%2B7GeDGlsQbAWWcY5Gr4f80pq6YRVkUKAKDoJKftmPBPsLkb0eWOiSxKr2g4hidsp6XU2gFLGGgZcieooHAcEWcU7p6Ayc%2BvZIVHzhhWubX1nG5QhPxXIjDKhMjEBjqkATr%2FI9M3HyhPQ2ckQo3F2ovkAxMrv9%2Fe09kEzZ6OtentLsmcvxv%2BP17Cg0eeuzALUodiraA0hwmE8B%2BEy0tEwUZPSXxJrnpC%2BKsCMxnC2gq6%2FWJSYRVBnqnqXnJsXUoqT%2BrGGa9ObjijebkPZDEr3HwFpqfV8mTC9sY8JNEsjdlO5kowdxqfwZvZlkxvFm8uGo2K6ep8LV3tErMoRa0BRXBjfOxY&X-Amz-Signature=fadb98a6449e7fba879abf420ae544f7d367b9fe0dcb2fc4993d99552cb49579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4746CM2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCByFnQSila8t3TDOyO8VLSWUeh8r0g1pwrj%2Bh0ZuG98wIhAJUkJ46%2F9PYJ6FwHunFg3ZZHUks3stTjUawMA%2B5%2BUhNrKv8DCF4QABoMNjM3NDIzMTgzODA1IgzhbGdvxcwWC4j3uSEq3APbfghoYwW9QEHvyrgCJ6aC1TKgHJJKZ6j6g6yC6q%2Frw0xARgmlELX8DxmfNxOCi5%2BFpspQ5s7CMIg1JjupJDSvNn99YWJRGJ3uL1sj5cSWpt%2Fx25jdLSFsPuYMiPMqgiir3Pi4zbY81tSr%2B07fGk%2Fv4%2BMc%2Bapefhww2MrzC7i8kOfwhqcXOU%2Bd8Uuu1OHY%2F9RYGhwmWjBXCiKbI0uus1tBq6NHO3ljvjwTDoLik%2BekWQQKlyumSDpaD%2BL10DlHvsGT8Gbbp82Zh%2ByHvcio6w1nxfQf8fyAccXECETPYeOJCP%2F7l5S302s5j7It1lzLLqQfNHKzz3Mv92ZEkBdL9rNEO2ER0Ig9x2Ihx32v%2F7ux0UlXde4PCqyFVTaOW8uCwxDLmDUEvZgqO7QpBg1UE13m5L72%2Bpri7uGHmqUS%2BtftdMti5kh0TYIfaRHCgT5VUKQfI1tHIhIgqgXYc%2Fm8VTP2k3lsiTD7IlUBzmDEHDKc%2FYUxvYpotFRG8FDxR5f%2FpOOgLdjSo%2B7GeDGlsQbAWWcY5Gr4f80pq6YRVkUKAKDoJKftmPBPsLkb0eWOiSxKr2g4hidsp6XU2gFLGGgZcieooHAcEWcU7p6Ayc%2BvZIVHzhhWubX1nG5QhPxXIjDKhMjEBjqkATr%2FI9M3HyhPQ2ckQo3F2ovkAxMrv9%2Fe09kEzZ6OtentLsmcvxv%2BP17Cg0eeuzALUodiraA0hwmE8B%2BEy0tEwUZPSXxJrnpC%2BKsCMxnC2gq6%2FWJSYRVBnqnqXnJsXUoqT%2BrGGa9ObjijebkPZDEr3HwFpqfV8mTC9sY8JNEsjdlO5kowdxqfwZvZlkxvFm8uGo2K6ep8LV3tErMoRa0BRXBjfOxY&X-Amz-Signature=d748ccae5b5a95e41724c9307d5bc6329df05d99baf54b9d4f90a9349f3fb7ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4746CM2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCByFnQSila8t3TDOyO8VLSWUeh8r0g1pwrj%2Bh0ZuG98wIhAJUkJ46%2F9PYJ6FwHunFg3ZZHUks3stTjUawMA%2B5%2BUhNrKv8DCF4QABoMNjM3NDIzMTgzODA1IgzhbGdvxcwWC4j3uSEq3APbfghoYwW9QEHvyrgCJ6aC1TKgHJJKZ6j6g6yC6q%2Frw0xARgmlELX8DxmfNxOCi5%2BFpspQ5s7CMIg1JjupJDSvNn99YWJRGJ3uL1sj5cSWpt%2Fx25jdLSFsPuYMiPMqgiir3Pi4zbY81tSr%2B07fGk%2Fv4%2BMc%2Bapefhww2MrzC7i8kOfwhqcXOU%2Bd8Uuu1OHY%2F9RYGhwmWjBXCiKbI0uus1tBq6NHO3ljvjwTDoLik%2BekWQQKlyumSDpaD%2BL10DlHvsGT8Gbbp82Zh%2ByHvcio6w1nxfQf8fyAccXECETPYeOJCP%2F7l5S302s5j7It1lzLLqQfNHKzz3Mv92ZEkBdL9rNEO2ER0Ig9x2Ihx32v%2F7ux0UlXde4PCqyFVTaOW8uCwxDLmDUEvZgqO7QpBg1UE13m5L72%2Bpri7uGHmqUS%2BtftdMti5kh0TYIfaRHCgT5VUKQfI1tHIhIgqgXYc%2Fm8VTP2k3lsiTD7IlUBzmDEHDKc%2FYUxvYpotFRG8FDxR5f%2FpOOgLdjSo%2B7GeDGlsQbAWWcY5Gr4f80pq6YRVkUKAKDoJKftmPBPsLkb0eWOiSxKr2g4hidsp6XU2gFLGGgZcieooHAcEWcU7p6Ayc%2BvZIVHzhhWubX1nG5QhPxXIjDKhMjEBjqkATr%2FI9M3HyhPQ2ckQo3F2ovkAxMrv9%2Fe09kEzZ6OtentLsmcvxv%2BP17Cg0eeuzALUodiraA0hwmE8B%2BEy0tEwUZPSXxJrnpC%2BKsCMxnC2gq6%2FWJSYRVBnqnqXnJsXUoqT%2BrGGa9ObjijebkPZDEr3HwFpqfV8mTC9sY8JNEsjdlO5kowdxqfwZvZlkxvFm8uGo2K6ep8LV3tErMoRa0BRXBjfOxY&X-Amz-Signature=4a6116390c3f0c86dc3830d43a5dd500ea01f6c48e7f4a832d897c11994e5d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4746CM2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCByFnQSila8t3TDOyO8VLSWUeh8r0g1pwrj%2Bh0ZuG98wIhAJUkJ46%2F9PYJ6FwHunFg3ZZHUks3stTjUawMA%2B5%2BUhNrKv8DCF4QABoMNjM3NDIzMTgzODA1IgzhbGdvxcwWC4j3uSEq3APbfghoYwW9QEHvyrgCJ6aC1TKgHJJKZ6j6g6yC6q%2Frw0xARgmlELX8DxmfNxOCi5%2BFpspQ5s7CMIg1JjupJDSvNn99YWJRGJ3uL1sj5cSWpt%2Fx25jdLSFsPuYMiPMqgiir3Pi4zbY81tSr%2B07fGk%2Fv4%2BMc%2Bapefhww2MrzC7i8kOfwhqcXOU%2Bd8Uuu1OHY%2F9RYGhwmWjBXCiKbI0uus1tBq6NHO3ljvjwTDoLik%2BekWQQKlyumSDpaD%2BL10DlHvsGT8Gbbp82Zh%2ByHvcio6w1nxfQf8fyAccXECETPYeOJCP%2F7l5S302s5j7It1lzLLqQfNHKzz3Mv92ZEkBdL9rNEO2ER0Ig9x2Ihx32v%2F7ux0UlXde4PCqyFVTaOW8uCwxDLmDUEvZgqO7QpBg1UE13m5L72%2Bpri7uGHmqUS%2BtftdMti5kh0TYIfaRHCgT5VUKQfI1tHIhIgqgXYc%2Fm8VTP2k3lsiTD7IlUBzmDEHDKc%2FYUxvYpotFRG8FDxR5f%2FpOOgLdjSo%2B7GeDGlsQbAWWcY5Gr4f80pq6YRVkUKAKDoJKftmPBPsLkb0eWOiSxKr2g4hidsp6XU2gFLGGgZcieooHAcEWcU7p6Ayc%2BvZIVHzhhWubX1nG5QhPxXIjDKhMjEBjqkATr%2FI9M3HyhPQ2ckQo3F2ovkAxMrv9%2Fe09kEzZ6OtentLsmcvxv%2BP17Cg0eeuzALUodiraA0hwmE8B%2BEy0tEwUZPSXxJrnpC%2BKsCMxnC2gq6%2FWJSYRVBnqnqXnJsXUoqT%2BrGGa9ObjijebkPZDEr3HwFpqfV8mTC9sY8JNEsjdlO5kowdxqfwZvZlkxvFm8uGo2K6ep8LV3tErMoRa0BRXBjfOxY&X-Amz-Signature=725aa2a117396512dacf351bc5ae4b782a03c1a0700e11a88602b43ef57af0dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4746CM2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCByFnQSila8t3TDOyO8VLSWUeh8r0g1pwrj%2Bh0ZuG98wIhAJUkJ46%2F9PYJ6FwHunFg3ZZHUks3stTjUawMA%2B5%2BUhNrKv8DCF4QABoMNjM3NDIzMTgzODA1IgzhbGdvxcwWC4j3uSEq3APbfghoYwW9QEHvyrgCJ6aC1TKgHJJKZ6j6g6yC6q%2Frw0xARgmlELX8DxmfNxOCi5%2BFpspQ5s7CMIg1JjupJDSvNn99YWJRGJ3uL1sj5cSWpt%2Fx25jdLSFsPuYMiPMqgiir3Pi4zbY81tSr%2B07fGk%2Fv4%2BMc%2Bapefhww2MrzC7i8kOfwhqcXOU%2Bd8Uuu1OHY%2F9RYGhwmWjBXCiKbI0uus1tBq6NHO3ljvjwTDoLik%2BekWQQKlyumSDpaD%2BL10DlHvsGT8Gbbp82Zh%2ByHvcio6w1nxfQf8fyAccXECETPYeOJCP%2F7l5S302s5j7It1lzLLqQfNHKzz3Mv92ZEkBdL9rNEO2ER0Ig9x2Ihx32v%2F7ux0UlXde4PCqyFVTaOW8uCwxDLmDUEvZgqO7QpBg1UE13m5L72%2Bpri7uGHmqUS%2BtftdMti5kh0TYIfaRHCgT5VUKQfI1tHIhIgqgXYc%2Fm8VTP2k3lsiTD7IlUBzmDEHDKc%2FYUxvYpotFRG8FDxR5f%2FpOOgLdjSo%2B7GeDGlsQbAWWcY5Gr4f80pq6YRVkUKAKDoJKftmPBPsLkb0eWOiSxKr2g4hidsp6XU2gFLGGgZcieooHAcEWcU7p6Ayc%2BvZIVHzhhWubX1nG5QhPxXIjDKhMjEBjqkATr%2FI9M3HyhPQ2ckQo3F2ovkAxMrv9%2Fe09kEzZ6OtentLsmcvxv%2BP17Cg0eeuzALUodiraA0hwmE8B%2BEy0tEwUZPSXxJrnpC%2BKsCMxnC2gq6%2FWJSYRVBnqnqXnJsXUoqT%2BrGGa9ObjijebkPZDEr3HwFpqfV8mTC9sY8JNEsjdlO5kowdxqfwZvZlkxvFm8uGo2K6ep8LV3tErMoRa0BRXBjfOxY&X-Amz-Signature=7c25e654a1efc0d2df0de5f8443935657c05622df3c9e87be70bf61028e8ead7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4746CM2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCByFnQSila8t3TDOyO8VLSWUeh8r0g1pwrj%2Bh0ZuG98wIhAJUkJ46%2F9PYJ6FwHunFg3ZZHUks3stTjUawMA%2B5%2BUhNrKv8DCF4QABoMNjM3NDIzMTgzODA1IgzhbGdvxcwWC4j3uSEq3APbfghoYwW9QEHvyrgCJ6aC1TKgHJJKZ6j6g6yC6q%2Frw0xARgmlELX8DxmfNxOCi5%2BFpspQ5s7CMIg1JjupJDSvNn99YWJRGJ3uL1sj5cSWpt%2Fx25jdLSFsPuYMiPMqgiir3Pi4zbY81tSr%2B07fGk%2Fv4%2BMc%2Bapefhww2MrzC7i8kOfwhqcXOU%2Bd8Uuu1OHY%2F9RYGhwmWjBXCiKbI0uus1tBq6NHO3ljvjwTDoLik%2BekWQQKlyumSDpaD%2BL10DlHvsGT8Gbbp82Zh%2ByHvcio6w1nxfQf8fyAccXECETPYeOJCP%2F7l5S302s5j7It1lzLLqQfNHKzz3Mv92ZEkBdL9rNEO2ER0Ig9x2Ihx32v%2F7ux0UlXde4PCqyFVTaOW8uCwxDLmDUEvZgqO7QpBg1UE13m5L72%2Bpri7uGHmqUS%2BtftdMti5kh0TYIfaRHCgT5VUKQfI1tHIhIgqgXYc%2Fm8VTP2k3lsiTD7IlUBzmDEHDKc%2FYUxvYpotFRG8FDxR5f%2FpOOgLdjSo%2B7GeDGlsQbAWWcY5Gr4f80pq6YRVkUKAKDoJKftmPBPsLkb0eWOiSxKr2g4hidsp6XU2gFLGGgZcieooHAcEWcU7p6Ayc%2BvZIVHzhhWubX1nG5QhPxXIjDKhMjEBjqkATr%2FI9M3HyhPQ2ckQo3F2ovkAxMrv9%2Fe09kEzZ6OtentLsmcvxv%2BP17Cg0eeuzALUodiraA0hwmE8B%2BEy0tEwUZPSXxJrnpC%2BKsCMxnC2gq6%2FWJSYRVBnqnqXnJsXUoqT%2BrGGa9ObjijebkPZDEr3HwFpqfV8mTC9sY8JNEsjdlO5kowdxqfwZvZlkxvFm8uGo2K6ep8LV3tErMoRa0BRXBjfOxY&X-Amz-Signature=1a2e6d4e65a6ad4292dadf75f6b93844501e0357dcc754384e8263f9cabbdc7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4746CM2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCByFnQSila8t3TDOyO8VLSWUeh8r0g1pwrj%2Bh0ZuG98wIhAJUkJ46%2F9PYJ6FwHunFg3ZZHUks3stTjUawMA%2B5%2BUhNrKv8DCF4QABoMNjM3NDIzMTgzODA1IgzhbGdvxcwWC4j3uSEq3APbfghoYwW9QEHvyrgCJ6aC1TKgHJJKZ6j6g6yC6q%2Frw0xARgmlELX8DxmfNxOCi5%2BFpspQ5s7CMIg1JjupJDSvNn99YWJRGJ3uL1sj5cSWpt%2Fx25jdLSFsPuYMiPMqgiir3Pi4zbY81tSr%2B07fGk%2Fv4%2BMc%2Bapefhww2MrzC7i8kOfwhqcXOU%2Bd8Uuu1OHY%2F9RYGhwmWjBXCiKbI0uus1tBq6NHO3ljvjwTDoLik%2BekWQQKlyumSDpaD%2BL10DlHvsGT8Gbbp82Zh%2ByHvcio6w1nxfQf8fyAccXECETPYeOJCP%2F7l5S302s5j7It1lzLLqQfNHKzz3Mv92ZEkBdL9rNEO2ER0Ig9x2Ihx32v%2F7ux0UlXde4PCqyFVTaOW8uCwxDLmDUEvZgqO7QpBg1UE13m5L72%2Bpri7uGHmqUS%2BtftdMti5kh0TYIfaRHCgT5VUKQfI1tHIhIgqgXYc%2Fm8VTP2k3lsiTD7IlUBzmDEHDKc%2FYUxvYpotFRG8FDxR5f%2FpOOgLdjSo%2B7GeDGlsQbAWWcY5Gr4f80pq6YRVkUKAKDoJKftmPBPsLkb0eWOiSxKr2g4hidsp6XU2gFLGGgZcieooHAcEWcU7p6Ayc%2BvZIVHzhhWubX1nG5QhPxXIjDKhMjEBjqkATr%2FI9M3HyhPQ2ckQo3F2ovkAxMrv9%2Fe09kEzZ6OtentLsmcvxv%2BP17Cg0eeuzALUodiraA0hwmE8B%2BEy0tEwUZPSXxJrnpC%2BKsCMxnC2gq6%2FWJSYRVBnqnqXnJsXUoqT%2BrGGa9ObjijebkPZDEr3HwFpqfV8mTC9sY8JNEsjdlO5kowdxqfwZvZlkxvFm8uGo2K6ep8LV3tErMoRa0BRXBjfOxY&X-Amz-Signature=50825d932054e5767aec11e3fc067b7704491cc56d68071d578f78a3c64fa52c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4746CM2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCByFnQSila8t3TDOyO8VLSWUeh8r0g1pwrj%2Bh0ZuG98wIhAJUkJ46%2F9PYJ6FwHunFg3ZZHUks3stTjUawMA%2B5%2BUhNrKv8DCF4QABoMNjM3NDIzMTgzODA1IgzhbGdvxcwWC4j3uSEq3APbfghoYwW9QEHvyrgCJ6aC1TKgHJJKZ6j6g6yC6q%2Frw0xARgmlELX8DxmfNxOCi5%2BFpspQ5s7CMIg1JjupJDSvNn99YWJRGJ3uL1sj5cSWpt%2Fx25jdLSFsPuYMiPMqgiir3Pi4zbY81tSr%2B07fGk%2Fv4%2BMc%2Bapefhww2MrzC7i8kOfwhqcXOU%2Bd8Uuu1OHY%2F9RYGhwmWjBXCiKbI0uus1tBq6NHO3ljvjwTDoLik%2BekWQQKlyumSDpaD%2BL10DlHvsGT8Gbbp82Zh%2ByHvcio6w1nxfQf8fyAccXECETPYeOJCP%2F7l5S302s5j7It1lzLLqQfNHKzz3Mv92ZEkBdL9rNEO2ER0Ig9x2Ihx32v%2F7ux0UlXde4PCqyFVTaOW8uCwxDLmDUEvZgqO7QpBg1UE13m5L72%2Bpri7uGHmqUS%2BtftdMti5kh0TYIfaRHCgT5VUKQfI1tHIhIgqgXYc%2Fm8VTP2k3lsiTD7IlUBzmDEHDKc%2FYUxvYpotFRG8FDxR5f%2FpOOgLdjSo%2B7GeDGlsQbAWWcY5Gr4f80pq6YRVkUKAKDoJKftmPBPsLkb0eWOiSxKr2g4hidsp6XU2gFLGGgZcieooHAcEWcU7p6Ayc%2BvZIVHzhhWubX1nG5QhPxXIjDKhMjEBjqkATr%2FI9M3HyhPQ2ckQo3F2ovkAxMrv9%2Fe09kEzZ6OtentLsmcvxv%2BP17Cg0eeuzALUodiraA0hwmE8B%2BEy0tEwUZPSXxJrnpC%2BKsCMxnC2gq6%2FWJSYRVBnqnqXnJsXUoqT%2BrGGa9ObjijebkPZDEr3HwFpqfV8mTC9sY8JNEsjdlO5kowdxqfwZvZlkxvFm8uGo2K6ep8LV3tErMoRa0BRXBjfOxY&X-Amz-Signature=4711ff58613b5d9f3e117f5cf7c5aca9b82eb49cbd492688ab704df4d9f507ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
