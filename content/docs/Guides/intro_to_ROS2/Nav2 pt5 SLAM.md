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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3T2AKTG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDNvPzXk0BdoeIJUy6F1yCL80XleIP10MhMej3QpJ090QIhAI4d8%2BHDqI6yUf%2BoZQA3EyiQ2j9WsToE26v1bErMiSePKv8DCFoQABoMNjM3NDIzMTgzODA1IgzfO3xwyv9lpKB45xAq3APEtPchdJ0R4fiSCXONt8V8qvE8gF7e4Hq6Dkh7h%2FGjBXuXvWSaQFti95wfzecsL%2FvMnJ7VnvcXK4Ay1kzQSVyi5JXx2Wc3H%2Fwr2toX5KJ13UPxSP3q2PlMx6MnkPyYyCMBTp4LFlrVDSXnETIcF0WiZ5aoAsPslZYPFcKiwqkOD7ieEvbSTZxilH6sxWVxN09aj3lORXCFAkboRZVrJc29rVRuwPpmREG5%2Be6Vwlvx50ENE6kI6yr3l5o%2B31cA%2Bd4%2BrL%2FBUyRjDdqp2kYODdPNezlDqt0DjKHN8%2B9Lxkf413%2FXywaghGnKTdSALFb8vrw2mHLbwiCWzhELPeZXB%2BBkpv%2BMEslmi9Zv%2FsvVqE6iZTCONjxJUzmy%2F4T2bfdbj6q6R3p%2Fyl7VqaJZ8mOgjso1Lj9%2BoCwRzIFsLCYOoVlAHx8Py%2FI4ubGs3D2OtM6trF6yepB%2FGVI8%2FT%2Brh8UoX3nz4VejEx%2FusLorhuFyDN4fO268VMCLgaskxhp9OF778kBJT8teToxB%2BkrM8oj6XPdxtRk3RZmUfpGPpnJSWkCCqgjFZyP8qJCR2rhBC4Dda7AxidCBkZMqM3eKtD3U9UP%2FOuOXO0aoyzdnOfizSb%2Fs8xRHueWNwjRbwdJCoTCr7%2FvEBjqkAfvuj7%2BatcZ1LDxjQvVNUbKCv87HES89ePrOWdS8QDwKqc5WVDvuFnScfBAs%2BrZKBZ5M9hfo6Lg1YCXe6kYmLs7iLGI1KwoISmePTMm6Sb%2Bd74xBm1uF8B1UqKJrHwkBGORw%2BWJsdG91qafc5JzEuSefGrJOjEtg%2F4ULqNy5PhodeHSg2jt%2BMLLVHuWblOp%2B6JYPQACAPfAJBECOaWi%2FVJ5X1mM4&X-Amz-Signature=fb85051cfdb54a28c6ad21f8f0fa13d01280d1faf3c68c295a5f34b481c04cbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3T2AKTG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDNvPzXk0BdoeIJUy6F1yCL80XleIP10MhMej3QpJ090QIhAI4d8%2BHDqI6yUf%2BoZQA3EyiQ2j9WsToE26v1bErMiSePKv8DCFoQABoMNjM3NDIzMTgzODA1IgzfO3xwyv9lpKB45xAq3APEtPchdJ0R4fiSCXONt8V8qvE8gF7e4Hq6Dkh7h%2FGjBXuXvWSaQFti95wfzecsL%2FvMnJ7VnvcXK4Ay1kzQSVyi5JXx2Wc3H%2Fwr2toX5KJ13UPxSP3q2PlMx6MnkPyYyCMBTp4LFlrVDSXnETIcF0WiZ5aoAsPslZYPFcKiwqkOD7ieEvbSTZxilH6sxWVxN09aj3lORXCFAkboRZVrJc29rVRuwPpmREG5%2Be6Vwlvx50ENE6kI6yr3l5o%2B31cA%2Bd4%2BrL%2FBUyRjDdqp2kYODdPNezlDqt0DjKHN8%2B9Lxkf413%2FXywaghGnKTdSALFb8vrw2mHLbwiCWzhELPeZXB%2BBkpv%2BMEslmi9Zv%2FsvVqE6iZTCONjxJUzmy%2F4T2bfdbj6q6R3p%2Fyl7VqaJZ8mOgjso1Lj9%2BoCwRzIFsLCYOoVlAHx8Py%2FI4ubGs3D2OtM6trF6yepB%2FGVI8%2FT%2Brh8UoX3nz4VejEx%2FusLorhuFyDN4fO268VMCLgaskxhp9OF778kBJT8teToxB%2BkrM8oj6XPdxtRk3RZmUfpGPpnJSWkCCqgjFZyP8qJCR2rhBC4Dda7AxidCBkZMqM3eKtD3U9UP%2FOuOXO0aoyzdnOfizSb%2Fs8xRHueWNwjRbwdJCoTCr7%2FvEBjqkAfvuj7%2BatcZ1LDxjQvVNUbKCv87HES89ePrOWdS8QDwKqc5WVDvuFnScfBAs%2BrZKBZ5M9hfo6Lg1YCXe6kYmLs7iLGI1KwoISmePTMm6Sb%2Bd74xBm1uF8B1UqKJrHwkBGORw%2BWJsdG91qafc5JzEuSefGrJOjEtg%2F4ULqNy5PhodeHSg2jt%2BMLLVHuWblOp%2B6JYPQACAPfAJBECOaWi%2FVJ5X1mM4&X-Amz-Signature=9aeee7c573e37895474834b25697f04d50774368e9ffc4769d7f12f9b7a1ba4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3T2AKTG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDNvPzXk0BdoeIJUy6F1yCL80XleIP10MhMej3QpJ090QIhAI4d8%2BHDqI6yUf%2BoZQA3EyiQ2j9WsToE26v1bErMiSePKv8DCFoQABoMNjM3NDIzMTgzODA1IgzfO3xwyv9lpKB45xAq3APEtPchdJ0R4fiSCXONt8V8qvE8gF7e4Hq6Dkh7h%2FGjBXuXvWSaQFti95wfzecsL%2FvMnJ7VnvcXK4Ay1kzQSVyi5JXx2Wc3H%2Fwr2toX5KJ13UPxSP3q2PlMx6MnkPyYyCMBTp4LFlrVDSXnETIcF0WiZ5aoAsPslZYPFcKiwqkOD7ieEvbSTZxilH6sxWVxN09aj3lORXCFAkboRZVrJc29rVRuwPpmREG5%2Be6Vwlvx50ENE6kI6yr3l5o%2B31cA%2Bd4%2BrL%2FBUyRjDdqp2kYODdPNezlDqt0DjKHN8%2B9Lxkf413%2FXywaghGnKTdSALFb8vrw2mHLbwiCWzhELPeZXB%2BBkpv%2BMEslmi9Zv%2FsvVqE6iZTCONjxJUzmy%2F4T2bfdbj6q6R3p%2Fyl7VqaJZ8mOgjso1Lj9%2BoCwRzIFsLCYOoVlAHx8Py%2FI4ubGs3D2OtM6trF6yepB%2FGVI8%2FT%2Brh8UoX3nz4VejEx%2FusLorhuFyDN4fO268VMCLgaskxhp9OF778kBJT8teToxB%2BkrM8oj6XPdxtRk3RZmUfpGPpnJSWkCCqgjFZyP8qJCR2rhBC4Dda7AxidCBkZMqM3eKtD3U9UP%2FOuOXO0aoyzdnOfizSb%2Fs8xRHueWNwjRbwdJCoTCr7%2FvEBjqkAfvuj7%2BatcZ1LDxjQvVNUbKCv87HES89ePrOWdS8QDwKqc5WVDvuFnScfBAs%2BrZKBZ5M9hfo6Lg1YCXe6kYmLs7iLGI1KwoISmePTMm6Sb%2Bd74xBm1uF8B1UqKJrHwkBGORw%2BWJsdG91qafc5JzEuSefGrJOjEtg%2F4ULqNy5PhodeHSg2jt%2BMLLVHuWblOp%2B6JYPQACAPfAJBECOaWi%2FVJ5X1mM4&X-Amz-Signature=f916f2a77603a2334324def6c151f5b9c88f7c3cf9226ab882c98956123bda84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3T2AKTG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDNvPzXk0BdoeIJUy6F1yCL80XleIP10MhMej3QpJ090QIhAI4d8%2BHDqI6yUf%2BoZQA3EyiQ2j9WsToE26v1bErMiSePKv8DCFoQABoMNjM3NDIzMTgzODA1IgzfO3xwyv9lpKB45xAq3APEtPchdJ0R4fiSCXONt8V8qvE8gF7e4Hq6Dkh7h%2FGjBXuXvWSaQFti95wfzecsL%2FvMnJ7VnvcXK4Ay1kzQSVyi5JXx2Wc3H%2Fwr2toX5KJ13UPxSP3q2PlMx6MnkPyYyCMBTp4LFlrVDSXnETIcF0WiZ5aoAsPslZYPFcKiwqkOD7ieEvbSTZxilH6sxWVxN09aj3lORXCFAkboRZVrJc29rVRuwPpmREG5%2Be6Vwlvx50ENE6kI6yr3l5o%2B31cA%2Bd4%2BrL%2FBUyRjDdqp2kYODdPNezlDqt0DjKHN8%2B9Lxkf413%2FXywaghGnKTdSALFb8vrw2mHLbwiCWzhELPeZXB%2BBkpv%2BMEslmi9Zv%2FsvVqE6iZTCONjxJUzmy%2F4T2bfdbj6q6R3p%2Fyl7VqaJZ8mOgjso1Lj9%2BoCwRzIFsLCYOoVlAHx8Py%2FI4ubGs3D2OtM6trF6yepB%2FGVI8%2FT%2Brh8UoX3nz4VejEx%2FusLorhuFyDN4fO268VMCLgaskxhp9OF778kBJT8teToxB%2BkrM8oj6XPdxtRk3RZmUfpGPpnJSWkCCqgjFZyP8qJCR2rhBC4Dda7AxidCBkZMqM3eKtD3U9UP%2FOuOXO0aoyzdnOfizSb%2Fs8xRHueWNwjRbwdJCoTCr7%2FvEBjqkAfvuj7%2BatcZ1LDxjQvVNUbKCv87HES89ePrOWdS8QDwKqc5WVDvuFnScfBAs%2BrZKBZ5M9hfo6Lg1YCXe6kYmLs7iLGI1KwoISmePTMm6Sb%2Bd74xBm1uF8B1UqKJrHwkBGORw%2BWJsdG91qafc5JzEuSefGrJOjEtg%2F4ULqNy5PhodeHSg2jt%2BMLLVHuWblOp%2B6JYPQACAPfAJBECOaWi%2FVJ5X1mM4&X-Amz-Signature=f753c0d0fce0b76cb8fa56b03c4de7bde52a1f3a5a6c96ff26d85561782a899a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3T2AKTG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDNvPzXk0BdoeIJUy6F1yCL80XleIP10MhMej3QpJ090QIhAI4d8%2BHDqI6yUf%2BoZQA3EyiQ2j9WsToE26v1bErMiSePKv8DCFoQABoMNjM3NDIzMTgzODA1IgzfO3xwyv9lpKB45xAq3APEtPchdJ0R4fiSCXONt8V8qvE8gF7e4Hq6Dkh7h%2FGjBXuXvWSaQFti95wfzecsL%2FvMnJ7VnvcXK4Ay1kzQSVyi5JXx2Wc3H%2Fwr2toX5KJ13UPxSP3q2PlMx6MnkPyYyCMBTp4LFlrVDSXnETIcF0WiZ5aoAsPslZYPFcKiwqkOD7ieEvbSTZxilH6sxWVxN09aj3lORXCFAkboRZVrJc29rVRuwPpmREG5%2Be6Vwlvx50ENE6kI6yr3l5o%2B31cA%2Bd4%2BrL%2FBUyRjDdqp2kYODdPNezlDqt0DjKHN8%2B9Lxkf413%2FXywaghGnKTdSALFb8vrw2mHLbwiCWzhELPeZXB%2BBkpv%2BMEslmi9Zv%2FsvVqE6iZTCONjxJUzmy%2F4T2bfdbj6q6R3p%2Fyl7VqaJZ8mOgjso1Lj9%2BoCwRzIFsLCYOoVlAHx8Py%2FI4ubGs3D2OtM6trF6yepB%2FGVI8%2FT%2Brh8UoX3nz4VejEx%2FusLorhuFyDN4fO268VMCLgaskxhp9OF778kBJT8teToxB%2BkrM8oj6XPdxtRk3RZmUfpGPpnJSWkCCqgjFZyP8qJCR2rhBC4Dda7AxidCBkZMqM3eKtD3U9UP%2FOuOXO0aoyzdnOfizSb%2Fs8xRHueWNwjRbwdJCoTCr7%2FvEBjqkAfvuj7%2BatcZ1LDxjQvVNUbKCv87HES89ePrOWdS8QDwKqc5WVDvuFnScfBAs%2BrZKBZ5M9hfo6Lg1YCXe6kYmLs7iLGI1KwoISmePTMm6Sb%2Bd74xBm1uF8B1UqKJrHwkBGORw%2BWJsdG91qafc5JzEuSefGrJOjEtg%2F4ULqNy5PhodeHSg2jt%2BMLLVHuWblOp%2B6JYPQACAPfAJBECOaWi%2FVJ5X1mM4&X-Amz-Signature=09278b84b19d2162ec7253cbc5990631dd69bcd885c019d9fc179d9d41014089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3T2AKTG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDNvPzXk0BdoeIJUy6F1yCL80XleIP10MhMej3QpJ090QIhAI4d8%2BHDqI6yUf%2BoZQA3EyiQ2j9WsToE26v1bErMiSePKv8DCFoQABoMNjM3NDIzMTgzODA1IgzfO3xwyv9lpKB45xAq3APEtPchdJ0R4fiSCXONt8V8qvE8gF7e4Hq6Dkh7h%2FGjBXuXvWSaQFti95wfzecsL%2FvMnJ7VnvcXK4Ay1kzQSVyi5JXx2Wc3H%2Fwr2toX5KJ13UPxSP3q2PlMx6MnkPyYyCMBTp4LFlrVDSXnETIcF0WiZ5aoAsPslZYPFcKiwqkOD7ieEvbSTZxilH6sxWVxN09aj3lORXCFAkboRZVrJc29rVRuwPpmREG5%2Be6Vwlvx50ENE6kI6yr3l5o%2B31cA%2Bd4%2BrL%2FBUyRjDdqp2kYODdPNezlDqt0DjKHN8%2B9Lxkf413%2FXywaghGnKTdSALFb8vrw2mHLbwiCWzhELPeZXB%2BBkpv%2BMEslmi9Zv%2FsvVqE6iZTCONjxJUzmy%2F4T2bfdbj6q6R3p%2Fyl7VqaJZ8mOgjso1Lj9%2BoCwRzIFsLCYOoVlAHx8Py%2FI4ubGs3D2OtM6trF6yepB%2FGVI8%2FT%2Brh8UoX3nz4VejEx%2FusLorhuFyDN4fO268VMCLgaskxhp9OF778kBJT8teToxB%2BkrM8oj6XPdxtRk3RZmUfpGPpnJSWkCCqgjFZyP8qJCR2rhBC4Dda7AxidCBkZMqM3eKtD3U9UP%2FOuOXO0aoyzdnOfizSb%2Fs8xRHueWNwjRbwdJCoTCr7%2FvEBjqkAfvuj7%2BatcZ1LDxjQvVNUbKCv87HES89ePrOWdS8QDwKqc5WVDvuFnScfBAs%2BrZKBZ5M9hfo6Lg1YCXe6kYmLs7iLGI1KwoISmePTMm6Sb%2Bd74xBm1uF8B1UqKJrHwkBGORw%2BWJsdG91qafc5JzEuSefGrJOjEtg%2F4ULqNy5PhodeHSg2jt%2BMLLVHuWblOp%2B6JYPQACAPfAJBECOaWi%2FVJ5X1mM4&X-Amz-Signature=8dc0ab83b0ad8d8af9055dc007a23bd364bca56b91ccc971710207b48f0ca37f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3T2AKTG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDNvPzXk0BdoeIJUy6F1yCL80XleIP10MhMej3QpJ090QIhAI4d8%2BHDqI6yUf%2BoZQA3EyiQ2j9WsToE26v1bErMiSePKv8DCFoQABoMNjM3NDIzMTgzODA1IgzfO3xwyv9lpKB45xAq3APEtPchdJ0R4fiSCXONt8V8qvE8gF7e4Hq6Dkh7h%2FGjBXuXvWSaQFti95wfzecsL%2FvMnJ7VnvcXK4Ay1kzQSVyi5JXx2Wc3H%2Fwr2toX5KJ13UPxSP3q2PlMx6MnkPyYyCMBTp4LFlrVDSXnETIcF0WiZ5aoAsPslZYPFcKiwqkOD7ieEvbSTZxilH6sxWVxN09aj3lORXCFAkboRZVrJc29rVRuwPpmREG5%2Be6Vwlvx50ENE6kI6yr3l5o%2B31cA%2Bd4%2BrL%2FBUyRjDdqp2kYODdPNezlDqt0DjKHN8%2B9Lxkf413%2FXywaghGnKTdSALFb8vrw2mHLbwiCWzhELPeZXB%2BBkpv%2BMEslmi9Zv%2FsvVqE6iZTCONjxJUzmy%2F4T2bfdbj6q6R3p%2Fyl7VqaJZ8mOgjso1Lj9%2BoCwRzIFsLCYOoVlAHx8Py%2FI4ubGs3D2OtM6trF6yepB%2FGVI8%2FT%2Brh8UoX3nz4VejEx%2FusLorhuFyDN4fO268VMCLgaskxhp9OF778kBJT8teToxB%2BkrM8oj6XPdxtRk3RZmUfpGPpnJSWkCCqgjFZyP8qJCR2rhBC4Dda7AxidCBkZMqM3eKtD3U9UP%2FOuOXO0aoyzdnOfizSb%2Fs8xRHueWNwjRbwdJCoTCr7%2FvEBjqkAfvuj7%2BatcZ1LDxjQvVNUbKCv87HES89ePrOWdS8QDwKqc5WVDvuFnScfBAs%2BrZKBZ5M9hfo6Lg1YCXe6kYmLs7iLGI1KwoISmePTMm6Sb%2Bd74xBm1uF8B1UqKJrHwkBGORw%2BWJsdG91qafc5JzEuSefGrJOjEtg%2F4ULqNy5PhodeHSg2jt%2BMLLVHuWblOp%2B6JYPQACAPfAJBECOaWi%2FVJ5X1mM4&X-Amz-Signature=3f2e13ba362d2cc1d6e5fa675aeeda642f8bafb62a390473dea2293abda14c1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3T2AKTG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDNvPzXk0BdoeIJUy6F1yCL80XleIP10MhMej3QpJ090QIhAI4d8%2BHDqI6yUf%2BoZQA3EyiQ2j9WsToE26v1bErMiSePKv8DCFoQABoMNjM3NDIzMTgzODA1IgzfO3xwyv9lpKB45xAq3APEtPchdJ0R4fiSCXONt8V8qvE8gF7e4Hq6Dkh7h%2FGjBXuXvWSaQFti95wfzecsL%2FvMnJ7VnvcXK4Ay1kzQSVyi5JXx2Wc3H%2Fwr2toX5KJ13UPxSP3q2PlMx6MnkPyYyCMBTp4LFlrVDSXnETIcF0WiZ5aoAsPslZYPFcKiwqkOD7ieEvbSTZxilH6sxWVxN09aj3lORXCFAkboRZVrJc29rVRuwPpmREG5%2Be6Vwlvx50ENE6kI6yr3l5o%2B31cA%2Bd4%2BrL%2FBUyRjDdqp2kYODdPNezlDqt0DjKHN8%2B9Lxkf413%2FXywaghGnKTdSALFb8vrw2mHLbwiCWzhELPeZXB%2BBkpv%2BMEslmi9Zv%2FsvVqE6iZTCONjxJUzmy%2F4T2bfdbj6q6R3p%2Fyl7VqaJZ8mOgjso1Lj9%2BoCwRzIFsLCYOoVlAHx8Py%2FI4ubGs3D2OtM6trF6yepB%2FGVI8%2FT%2Brh8UoX3nz4VejEx%2FusLorhuFyDN4fO268VMCLgaskxhp9OF778kBJT8teToxB%2BkrM8oj6XPdxtRk3RZmUfpGPpnJSWkCCqgjFZyP8qJCR2rhBC4Dda7AxidCBkZMqM3eKtD3U9UP%2FOuOXO0aoyzdnOfizSb%2Fs8xRHueWNwjRbwdJCoTCr7%2FvEBjqkAfvuj7%2BatcZ1LDxjQvVNUbKCv87HES89ePrOWdS8QDwKqc5WVDvuFnScfBAs%2BrZKBZ5M9hfo6Lg1YCXe6kYmLs7iLGI1KwoISmePTMm6Sb%2Bd74xBm1uF8B1UqKJrHwkBGORw%2BWJsdG91qafc5JzEuSefGrJOjEtg%2F4ULqNy5PhodeHSg2jt%2BMLLVHuWblOp%2B6JYPQACAPfAJBECOaWi%2FVJ5X1mM4&X-Amz-Signature=375602d4347e90dba0349d146fad61bc35979e27679f3255c3fba82ac382b738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3T2AKTG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDNvPzXk0BdoeIJUy6F1yCL80XleIP10MhMej3QpJ090QIhAI4d8%2BHDqI6yUf%2BoZQA3EyiQ2j9WsToE26v1bErMiSePKv8DCFoQABoMNjM3NDIzMTgzODA1IgzfO3xwyv9lpKB45xAq3APEtPchdJ0R4fiSCXONt8V8qvE8gF7e4Hq6Dkh7h%2FGjBXuXvWSaQFti95wfzecsL%2FvMnJ7VnvcXK4Ay1kzQSVyi5JXx2Wc3H%2Fwr2toX5KJ13UPxSP3q2PlMx6MnkPyYyCMBTp4LFlrVDSXnETIcF0WiZ5aoAsPslZYPFcKiwqkOD7ieEvbSTZxilH6sxWVxN09aj3lORXCFAkboRZVrJc29rVRuwPpmREG5%2Be6Vwlvx50ENE6kI6yr3l5o%2B31cA%2Bd4%2BrL%2FBUyRjDdqp2kYODdPNezlDqt0DjKHN8%2B9Lxkf413%2FXywaghGnKTdSALFb8vrw2mHLbwiCWzhELPeZXB%2BBkpv%2BMEslmi9Zv%2FsvVqE6iZTCONjxJUzmy%2F4T2bfdbj6q6R3p%2Fyl7VqaJZ8mOgjso1Lj9%2BoCwRzIFsLCYOoVlAHx8Py%2FI4ubGs3D2OtM6trF6yepB%2FGVI8%2FT%2Brh8UoX3nz4VejEx%2FusLorhuFyDN4fO268VMCLgaskxhp9OF778kBJT8teToxB%2BkrM8oj6XPdxtRk3RZmUfpGPpnJSWkCCqgjFZyP8qJCR2rhBC4Dda7AxidCBkZMqM3eKtD3U9UP%2FOuOXO0aoyzdnOfizSb%2Fs8xRHueWNwjRbwdJCoTCr7%2FvEBjqkAfvuj7%2BatcZ1LDxjQvVNUbKCv87HES89ePrOWdS8QDwKqc5WVDvuFnScfBAs%2BrZKBZ5M9hfo6Lg1YCXe6kYmLs7iLGI1KwoISmePTMm6Sb%2Bd74xBm1uF8B1UqKJrHwkBGORw%2BWJsdG91qafc5JzEuSefGrJOjEtg%2F4ULqNy5PhodeHSg2jt%2BMLLVHuWblOp%2B6JYPQACAPfAJBECOaWi%2FVJ5X1mM4&X-Amz-Signature=0eafd04bdcd8fb01b519ef8829fa010c803f9cc14243b9a6d9c9731fb1da2bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3T2AKTG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDNvPzXk0BdoeIJUy6F1yCL80XleIP10MhMej3QpJ090QIhAI4d8%2BHDqI6yUf%2BoZQA3EyiQ2j9WsToE26v1bErMiSePKv8DCFoQABoMNjM3NDIzMTgzODA1IgzfO3xwyv9lpKB45xAq3APEtPchdJ0R4fiSCXONt8V8qvE8gF7e4Hq6Dkh7h%2FGjBXuXvWSaQFti95wfzecsL%2FvMnJ7VnvcXK4Ay1kzQSVyi5JXx2Wc3H%2Fwr2toX5KJ13UPxSP3q2PlMx6MnkPyYyCMBTp4LFlrVDSXnETIcF0WiZ5aoAsPslZYPFcKiwqkOD7ieEvbSTZxilH6sxWVxN09aj3lORXCFAkboRZVrJc29rVRuwPpmREG5%2Be6Vwlvx50ENE6kI6yr3l5o%2B31cA%2Bd4%2BrL%2FBUyRjDdqp2kYODdPNezlDqt0DjKHN8%2B9Lxkf413%2FXywaghGnKTdSALFb8vrw2mHLbwiCWzhELPeZXB%2BBkpv%2BMEslmi9Zv%2FsvVqE6iZTCONjxJUzmy%2F4T2bfdbj6q6R3p%2Fyl7VqaJZ8mOgjso1Lj9%2BoCwRzIFsLCYOoVlAHx8Py%2FI4ubGs3D2OtM6trF6yepB%2FGVI8%2FT%2Brh8UoX3nz4VejEx%2FusLorhuFyDN4fO268VMCLgaskxhp9OF778kBJT8teToxB%2BkrM8oj6XPdxtRk3RZmUfpGPpnJSWkCCqgjFZyP8qJCR2rhBC4Dda7AxidCBkZMqM3eKtD3U9UP%2FOuOXO0aoyzdnOfizSb%2Fs8xRHueWNwjRbwdJCoTCr7%2FvEBjqkAfvuj7%2BatcZ1LDxjQvVNUbKCv87HES89ePrOWdS8QDwKqc5WVDvuFnScfBAs%2BrZKBZ5M9hfo6Lg1YCXe6kYmLs7iLGI1KwoISmePTMm6Sb%2Bd74xBm1uF8B1UqKJrHwkBGORw%2BWJsdG91qafc5JzEuSefGrJOjEtg%2F4ULqNy5PhodeHSg2jt%2BMLLVHuWblOp%2B6JYPQACAPfAJBECOaWi%2FVJ5X1mM4&X-Amz-Signature=c5c760889f933ab995ac0675e39f5396f671a2194a95c2a2c04128a8e6ba24cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3T2AKTG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDNvPzXk0BdoeIJUy6F1yCL80XleIP10MhMej3QpJ090QIhAI4d8%2BHDqI6yUf%2BoZQA3EyiQ2j9WsToE26v1bErMiSePKv8DCFoQABoMNjM3NDIzMTgzODA1IgzfO3xwyv9lpKB45xAq3APEtPchdJ0R4fiSCXONt8V8qvE8gF7e4Hq6Dkh7h%2FGjBXuXvWSaQFti95wfzecsL%2FvMnJ7VnvcXK4Ay1kzQSVyi5JXx2Wc3H%2Fwr2toX5KJ13UPxSP3q2PlMx6MnkPyYyCMBTp4LFlrVDSXnETIcF0WiZ5aoAsPslZYPFcKiwqkOD7ieEvbSTZxilH6sxWVxN09aj3lORXCFAkboRZVrJc29rVRuwPpmREG5%2Be6Vwlvx50ENE6kI6yr3l5o%2B31cA%2Bd4%2BrL%2FBUyRjDdqp2kYODdPNezlDqt0DjKHN8%2B9Lxkf413%2FXywaghGnKTdSALFb8vrw2mHLbwiCWzhELPeZXB%2BBkpv%2BMEslmi9Zv%2FsvVqE6iZTCONjxJUzmy%2F4T2bfdbj6q6R3p%2Fyl7VqaJZ8mOgjso1Lj9%2BoCwRzIFsLCYOoVlAHx8Py%2FI4ubGs3D2OtM6trF6yepB%2FGVI8%2FT%2Brh8UoX3nz4VejEx%2FusLorhuFyDN4fO268VMCLgaskxhp9OF778kBJT8teToxB%2BkrM8oj6XPdxtRk3RZmUfpGPpnJSWkCCqgjFZyP8qJCR2rhBC4Dda7AxidCBkZMqM3eKtD3U9UP%2FOuOXO0aoyzdnOfizSb%2Fs8xRHueWNwjRbwdJCoTCr7%2FvEBjqkAfvuj7%2BatcZ1LDxjQvVNUbKCv87HES89ePrOWdS8QDwKqc5WVDvuFnScfBAs%2BrZKBZ5M9hfo6Lg1YCXe6kYmLs7iLGI1KwoISmePTMm6Sb%2Bd74xBm1uF8B1UqKJrHwkBGORw%2BWJsdG91qafc5JzEuSefGrJOjEtg%2F4ULqNy5PhodeHSg2jt%2BMLLVHuWblOp%2B6JYPQACAPfAJBECOaWi%2FVJ5X1mM4&X-Amz-Signature=4e03dfb997839f1fad60df4cbed65c35a9b4eba0ba075188e320d82dc52a4378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3T2AKTG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDNvPzXk0BdoeIJUy6F1yCL80XleIP10MhMej3QpJ090QIhAI4d8%2BHDqI6yUf%2BoZQA3EyiQ2j9WsToE26v1bErMiSePKv8DCFoQABoMNjM3NDIzMTgzODA1IgzfO3xwyv9lpKB45xAq3APEtPchdJ0R4fiSCXONt8V8qvE8gF7e4Hq6Dkh7h%2FGjBXuXvWSaQFti95wfzecsL%2FvMnJ7VnvcXK4Ay1kzQSVyi5JXx2Wc3H%2Fwr2toX5KJ13UPxSP3q2PlMx6MnkPyYyCMBTp4LFlrVDSXnETIcF0WiZ5aoAsPslZYPFcKiwqkOD7ieEvbSTZxilH6sxWVxN09aj3lORXCFAkboRZVrJc29rVRuwPpmREG5%2Be6Vwlvx50ENE6kI6yr3l5o%2B31cA%2Bd4%2BrL%2FBUyRjDdqp2kYODdPNezlDqt0DjKHN8%2B9Lxkf413%2FXywaghGnKTdSALFb8vrw2mHLbwiCWzhELPeZXB%2BBkpv%2BMEslmi9Zv%2FsvVqE6iZTCONjxJUzmy%2F4T2bfdbj6q6R3p%2Fyl7VqaJZ8mOgjso1Lj9%2BoCwRzIFsLCYOoVlAHx8Py%2FI4ubGs3D2OtM6trF6yepB%2FGVI8%2FT%2Brh8UoX3nz4VejEx%2FusLorhuFyDN4fO268VMCLgaskxhp9OF778kBJT8teToxB%2BkrM8oj6XPdxtRk3RZmUfpGPpnJSWkCCqgjFZyP8qJCR2rhBC4Dda7AxidCBkZMqM3eKtD3U9UP%2FOuOXO0aoyzdnOfizSb%2Fs8xRHueWNwjRbwdJCoTCr7%2FvEBjqkAfvuj7%2BatcZ1LDxjQvVNUbKCv87HES89ePrOWdS8QDwKqc5WVDvuFnScfBAs%2BrZKBZ5M9hfo6Lg1YCXe6kYmLs7iLGI1KwoISmePTMm6Sb%2Bd74xBm1uF8B1UqKJrHwkBGORw%2BWJsdG91qafc5JzEuSefGrJOjEtg%2F4ULqNy5PhodeHSg2jt%2BMLLVHuWblOp%2B6JYPQACAPfAJBECOaWi%2FVJ5X1mM4&X-Amz-Signature=fcf329904e48621713c24c952b24c5f393b4f945a7dcc1f3b265163b1841c88f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3T2AKTG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDNvPzXk0BdoeIJUy6F1yCL80XleIP10MhMej3QpJ090QIhAI4d8%2BHDqI6yUf%2BoZQA3EyiQ2j9WsToE26v1bErMiSePKv8DCFoQABoMNjM3NDIzMTgzODA1IgzfO3xwyv9lpKB45xAq3APEtPchdJ0R4fiSCXONt8V8qvE8gF7e4Hq6Dkh7h%2FGjBXuXvWSaQFti95wfzecsL%2FvMnJ7VnvcXK4Ay1kzQSVyi5JXx2Wc3H%2Fwr2toX5KJ13UPxSP3q2PlMx6MnkPyYyCMBTp4LFlrVDSXnETIcF0WiZ5aoAsPslZYPFcKiwqkOD7ieEvbSTZxilH6sxWVxN09aj3lORXCFAkboRZVrJc29rVRuwPpmREG5%2Be6Vwlvx50ENE6kI6yr3l5o%2B31cA%2Bd4%2BrL%2FBUyRjDdqp2kYODdPNezlDqt0DjKHN8%2B9Lxkf413%2FXywaghGnKTdSALFb8vrw2mHLbwiCWzhELPeZXB%2BBkpv%2BMEslmi9Zv%2FsvVqE6iZTCONjxJUzmy%2F4T2bfdbj6q6R3p%2Fyl7VqaJZ8mOgjso1Lj9%2BoCwRzIFsLCYOoVlAHx8Py%2FI4ubGs3D2OtM6trF6yepB%2FGVI8%2FT%2Brh8UoX3nz4VejEx%2FusLorhuFyDN4fO268VMCLgaskxhp9OF778kBJT8teToxB%2BkrM8oj6XPdxtRk3RZmUfpGPpnJSWkCCqgjFZyP8qJCR2rhBC4Dda7AxidCBkZMqM3eKtD3U9UP%2FOuOXO0aoyzdnOfizSb%2Fs8xRHueWNwjRbwdJCoTCr7%2FvEBjqkAfvuj7%2BatcZ1LDxjQvVNUbKCv87HES89ePrOWdS8QDwKqc5WVDvuFnScfBAs%2BrZKBZ5M9hfo6Lg1YCXe6kYmLs7iLGI1KwoISmePTMm6Sb%2Bd74xBm1uF8B1UqKJrHwkBGORw%2BWJsdG91qafc5JzEuSefGrJOjEtg%2F4ULqNy5PhodeHSg2jt%2BMLLVHuWblOp%2B6JYPQACAPfAJBECOaWi%2FVJ5X1mM4&X-Amz-Signature=882cf13ad681d7bad59fe125d7e242571e621fdb2f9bada348cf8073c03f867b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3T2AKTG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDNvPzXk0BdoeIJUy6F1yCL80XleIP10MhMej3QpJ090QIhAI4d8%2BHDqI6yUf%2BoZQA3EyiQ2j9WsToE26v1bErMiSePKv8DCFoQABoMNjM3NDIzMTgzODA1IgzfO3xwyv9lpKB45xAq3APEtPchdJ0R4fiSCXONt8V8qvE8gF7e4Hq6Dkh7h%2FGjBXuXvWSaQFti95wfzecsL%2FvMnJ7VnvcXK4Ay1kzQSVyi5JXx2Wc3H%2Fwr2toX5KJ13UPxSP3q2PlMx6MnkPyYyCMBTp4LFlrVDSXnETIcF0WiZ5aoAsPslZYPFcKiwqkOD7ieEvbSTZxilH6sxWVxN09aj3lORXCFAkboRZVrJc29rVRuwPpmREG5%2Be6Vwlvx50ENE6kI6yr3l5o%2B31cA%2Bd4%2BrL%2FBUyRjDdqp2kYODdPNezlDqt0DjKHN8%2B9Lxkf413%2FXywaghGnKTdSALFb8vrw2mHLbwiCWzhELPeZXB%2BBkpv%2BMEslmi9Zv%2FsvVqE6iZTCONjxJUzmy%2F4T2bfdbj6q6R3p%2Fyl7VqaJZ8mOgjso1Lj9%2BoCwRzIFsLCYOoVlAHx8Py%2FI4ubGs3D2OtM6trF6yepB%2FGVI8%2FT%2Brh8UoX3nz4VejEx%2FusLorhuFyDN4fO268VMCLgaskxhp9OF778kBJT8teToxB%2BkrM8oj6XPdxtRk3RZmUfpGPpnJSWkCCqgjFZyP8qJCR2rhBC4Dda7AxidCBkZMqM3eKtD3U9UP%2FOuOXO0aoyzdnOfizSb%2Fs8xRHueWNwjRbwdJCoTCr7%2FvEBjqkAfvuj7%2BatcZ1LDxjQvVNUbKCv87HES89ePrOWdS8QDwKqc5WVDvuFnScfBAs%2BrZKBZ5M9hfo6Lg1YCXe6kYmLs7iLGI1KwoISmePTMm6Sb%2Bd74xBm1uF8B1UqKJrHwkBGORw%2BWJsdG91qafc5JzEuSefGrJOjEtg%2F4ULqNy5PhodeHSg2jt%2BMLLVHuWblOp%2B6JYPQACAPfAJBECOaWi%2FVJ5X1mM4&X-Amz-Signature=af282fdb9bc8c9e33002da8ab3cac728a410a26439a14248c7481f7fc9711fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
