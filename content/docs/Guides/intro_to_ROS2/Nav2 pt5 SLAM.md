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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAYROVZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2xnsSww1PnuJwolEuRl9e7uAlKY8ytawGSBLEbU9AYAIgdxOjul9oczbrWuCAxCLIbLt0ayYpeY08X%2Fmee7rj9mIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIq63cUr7DI9K8jgsCrcA9FfahdKaWQM98jxP6ofNb3qHU0goWCQoOYWlvt6J1Fa%2FHnPKRzAsvbRorXv0NbaBr7vMKAhDrW9Nr07Fuhck53jsrtTcROM7vZms%2FgBR6pw0Jy7WACal%2Fj2IWQbv16mNTniKxdgHT2q6l5EpxOWnVuwUtlBXrelbC91JUcQJo7leqUqOoI9Qr%2FuI%2F8G0ddyKvuFDrLhqwt%2FJDDPZk1E2c6hg2bt6Ms9tLHW5AlN3wlQ%2FK1QYUGzC8sEq3B19r%2BEcQfpjmSGckMzPDpOZThBpscAwOdkRbExHYjyvZx5vW%2BpehG2t9nioe1sFV%2BQ5Xbz98pLLPRECjnlS9wUkIsgkpjWOy2TGs1hUS%2BaK7FSKHbbh5IpSiWY3vF89c%2FWVnMC1kn6CKOjJRWRZMEYV1OA9dbmae4A7VANBHrc1vHdtOhccLnwUPVhsoIepHnEsZJR4YlSncO6EFCV7p56MHJ3b36rf18%2FNeKSsAj4HoSqRa1X5luRbQOdQTGglRadR5q9Ap7Ql2Fno38Y6UMQfKLCk%2BHUxUJWTm9%2BpLYMLW4iwCEaBDKkeMPYBPllYlJXXb30EmiKQ9cx9YbKV%2B20CJLQzWNRQirk%2BODZtnOoVwsEfwWTqAxTXyyEHca2lPfUML%2FF88QGOqUBAf0lSLqWPzyjqWt9GlTiW%2FSVyN7Dhqdll4aUOuRSG0qCNjBf%2FEPXhPABRJhA%2BjmIFlqVnl9Q5ORNm7ZOCoXYrzkw2Xet0JBKlNmY%2FIGjMiZgVh0bm%2Fk3t2Er2d1GXenKz4X37oIRRvbEcRgtXQJWWRcxfYutAUUQ9AKcrCZRKKYNXe%2BeEHDFo2EFHXNInBFPkP2wLEWZjRmVo2t%2Buy5dB1HOwZdp&X-Amz-Signature=1539170e59f5cb5d7b5a735cb4d457f5afaa6192e6a905ea79614389c11e4391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAYROVZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2xnsSww1PnuJwolEuRl9e7uAlKY8ytawGSBLEbU9AYAIgdxOjul9oczbrWuCAxCLIbLt0ayYpeY08X%2Fmee7rj9mIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIq63cUr7DI9K8jgsCrcA9FfahdKaWQM98jxP6ofNb3qHU0goWCQoOYWlvt6J1Fa%2FHnPKRzAsvbRorXv0NbaBr7vMKAhDrW9Nr07Fuhck53jsrtTcROM7vZms%2FgBR6pw0Jy7WACal%2Fj2IWQbv16mNTniKxdgHT2q6l5EpxOWnVuwUtlBXrelbC91JUcQJo7leqUqOoI9Qr%2FuI%2F8G0ddyKvuFDrLhqwt%2FJDDPZk1E2c6hg2bt6Ms9tLHW5AlN3wlQ%2FK1QYUGzC8sEq3B19r%2BEcQfpjmSGckMzPDpOZThBpscAwOdkRbExHYjyvZx5vW%2BpehG2t9nioe1sFV%2BQ5Xbz98pLLPRECjnlS9wUkIsgkpjWOy2TGs1hUS%2BaK7FSKHbbh5IpSiWY3vF89c%2FWVnMC1kn6CKOjJRWRZMEYV1OA9dbmae4A7VANBHrc1vHdtOhccLnwUPVhsoIepHnEsZJR4YlSncO6EFCV7p56MHJ3b36rf18%2FNeKSsAj4HoSqRa1X5luRbQOdQTGglRadR5q9Ap7Ql2Fno38Y6UMQfKLCk%2BHUxUJWTm9%2BpLYMLW4iwCEaBDKkeMPYBPllYlJXXb30EmiKQ9cx9YbKV%2B20CJLQzWNRQirk%2BODZtnOoVwsEfwWTqAxTXyyEHca2lPfUML%2FF88QGOqUBAf0lSLqWPzyjqWt9GlTiW%2FSVyN7Dhqdll4aUOuRSG0qCNjBf%2FEPXhPABRJhA%2BjmIFlqVnl9Q5ORNm7ZOCoXYrzkw2Xet0JBKlNmY%2FIGjMiZgVh0bm%2Fk3t2Er2d1GXenKz4X37oIRRvbEcRgtXQJWWRcxfYutAUUQ9AKcrCZRKKYNXe%2BeEHDFo2EFHXNInBFPkP2wLEWZjRmVo2t%2Buy5dB1HOwZdp&X-Amz-Signature=c0a5978dc2b1970eb97c4327c17efd313022e715a8a753c77c343e8dc787c877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAYROVZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2xnsSww1PnuJwolEuRl9e7uAlKY8ytawGSBLEbU9AYAIgdxOjul9oczbrWuCAxCLIbLt0ayYpeY08X%2Fmee7rj9mIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIq63cUr7DI9K8jgsCrcA9FfahdKaWQM98jxP6ofNb3qHU0goWCQoOYWlvt6J1Fa%2FHnPKRzAsvbRorXv0NbaBr7vMKAhDrW9Nr07Fuhck53jsrtTcROM7vZms%2FgBR6pw0Jy7WACal%2Fj2IWQbv16mNTniKxdgHT2q6l5EpxOWnVuwUtlBXrelbC91JUcQJo7leqUqOoI9Qr%2FuI%2F8G0ddyKvuFDrLhqwt%2FJDDPZk1E2c6hg2bt6Ms9tLHW5AlN3wlQ%2FK1QYUGzC8sEq3B19r%2BEcQfpjmSGckMzPDpOZThBpscAwOdkRbExHYjyvZx5vW%2BpehG2t9nioe1sFV%2BQ5Xbz98pLLPRECjnlS9wUkIsgkpjWOy2TGs1hUS%2BaK7FSKHbbh5IpSiWY3vF89c%2FWVnMC1kn6CKOjJRWRZMEYV1OA9dbmae4A7VANBHrc1vHdtOhccLnwUPVhsoIepHnEsZJR4YlSncO6EFCV7p56MHJ3b36rf18%2FNeKSsAj4HoSqRa1X5luRbQOdQTGglRadR5q9Ap7Ql2Fno38Y6UMQfKLCk%2BHUxUJWTm9%2BpLYMLW4iwCEaBDKkeMPYBPllYlJXXb30EmiKQ9cx9YbKV%2B20CJLQzWNRQirk%2BODZtnOoVwsEfwWTqAxTXyyEHca2lPfUML%2FF88QGOqUBAf0lSLqWPzyjqWt9GlTiW%2FSVyN7Dhqdll4aUOuRSG0qCNjBf%2FEPXhPABRJhA%2BjmIFlqVnl9Q5ORNm7ZOCoXYrzkw2Xet0JBKlNmY%2FIGjMiZgVh0bm%2Fk3t2Er2d1GXenKz4X37oIRRvbEcRgtXQJWWRcxfYutAUUQ9AKcrCZRKKYNXe%2BeEHDFo2EFHXNInBFPkP2wLEWZjRmVo2t%2Buy5dB1HOwZdp&X-Amz-Signature=7bc115500f20658532312744baed843e477371d8665e3bdffd973d612c41a7a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAYROVZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2xnsSww1PnuJwolEuRl9e7uAlKY8ytawGSBLEbU9AYAIgdxOjul9oczbrWuCAxCLIbLt0ayYpeY08X%2Fmee7rj9mIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIq63cUr7DI9K8jgsCrcA9FfahdKaWQM98jxP6ofNb3qHU0goWCQoOYWlvt6J1Fa%2FHnPKRzAsvbRorXv0NbaBr7vMKAhDrW9Nr07Fuhck53jsrtTcROM7vZms%2FgBR6pw0Jy7WACal%2Fj2IWQbv16mNTniKxdgHT2q6l5EpxOWnVuwUtlBXrelbC91JUcQJo7leqUqOoI9Qr%2FuI%2F8G0ddyKvuFDrLhqwt%2FJDDPZk1E2c6hg2bt6Ms9tLHW5AlN3wlQ%2FK1QYUGzC8sEq3B19r%2BEcQfpjmSGckMzPDpOZThBpscAwOdkRbExHYjyvZx5vW%2BpehG2t9nioe1sFV%2BQ5Xbz98pLLPRECjnlS9wUkIsgkpjWOy2TGs1hUS%2BaK7FSKHbbh5IpSiWY3vF89c%2FWVnMC1kn6CKOjJRWRZMEYV1OA9dbmae4A7VANBHrc1vHdtOhccLnwUPVhsoIepHnEsZJR4YlSncO6EFCV7p56MHJ3b36rf18%2FNeKSsAj4HoSqRa1X5luRbQOdQTGglRadR5q9Ap7Ql2Fno38Y6UMQfKLCk%2BHUxUJWTm9%2BpLYMLW4iwCEaBDKkeMPYBPllYlJXXb30EmiKQ9cx9YbKV%2B20CJLQzWNRQirk%2BODZtnOoVwsEfwWTqAxTXyyEHca2lPfUML%2FF88QGOqUBAf0lSLqWPzyjqWt9GlTiW%2FSVyN7Dhqdll4aUOuRSG0qCNjBf%2FEPXhPABRJhA%2BjmIFlqVnl9Q5ORNm7ZOCoXYrzkw2Xet0JBKlNmY%2FIGjMiZgVh0bm%2Fk3t2Er2d1GXenKz4X37oIRRvbEcRgtXQJWWRcxfYutAUUQ9AKcrCZRKKYNXe%2BeEHDFo2EFHXNInBFPkP2wLEWZjRmVo2t%2Buy5dB1HOwZdp&X-Amz-Signature=714d60ffdb758874457c60e1f7ea982ccc5927afe174804ddeb94a40d3d31204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAYROVZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2xnsSww1PnuJwolEuRl9e7uAlKY8ytawGSBLEbU9AYAIgdxOjul9oczbrWuCAxCLIbLt0ayYpeY08X%2Fmee7rj9mIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIq63cUr7DI9K8jgsCrcA9FfahdKaWQM98jxP6ofNb3qHU0goWCQoOYWlvt6J1Fa%2FHnPKRzAsvbRorXv0NbaBr7vMKAhDrW9Nr07Fuhck53jsrtTcROM7vZms%2FgBR6pw0Jy7WACal%2Fj2IWQbv16mNTniKxdgHT2q6l5EpxOWnVuwUtlBXrelbC91JUcQJo7leqUqOoI9Qr%2FuI%2F8G0ddyKvuFDrLhqwt%2FJDDPZk1E2c6hg2bt6Ms9tLHW5AlN3wlQ%2FK1QYUGzC8sEq3B19r%2BEcQfpjmSGckMzPDpOZThBpscAwOdkRbExHYjyvZx5vW%2BpehG2t9nioe1sFV%2BQ5Xbz98pLLPRECjnlS9wUkIsgkpjWOy2TGs1hUS%2BaK7FSKHbbh5IpSiWY3vF89c%2FWVnMC1kn6CKOjJRWRZMEYV1OA9dbmae4A7VANBHrc1vHdtOhccLnwUPVhsoIepHnEsZJR4YlSncO6EFCV7p56MHJ3b36rf18%2FNeKSsAj4HoSqRa1X5luRbQOdQTGglRadR5q9Ap7Ql2Fno38Y6UMQfKLCk%2BHUxUJWTm9%2BpLYMLW4iwCEaBDKkeMPYBPllYlJXXb30EmiKQ9cx9YbKV%2B20CJLQzWNRQirk%2BODZtnOoVwsEfwWTqAxTXyyEHca2lPfUML%2FF88QGOqUBAf0lSLqWPzyjqWt9GlTiW%2FSVyN7Dhqdll4aUOuRSG0qCNjBf%2FEPXhPABRJhA%2BjmIFlqVnl9Q5ORNm7ZOCoXYrzkw2Xet0JBKlNmY%2FIGjMiZgVh0bm%2Fk3t2Er2d1GXenKz4X37oIRRvbEcRgtXQJWWRcxfYutAUUQ9AKcrCZRKKYNXe%2BeEHDFo2EFHXNInBFPkP2wLEWZjRmVo2t%2Buy5dB1HOwZdp&X-Amz-Signature=ff58e4ab1f7a3e76159f5a14a0757f76fa640ed8e81e894b02e912cfdeebc448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAYROVZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2xnsSww1PnuJwolEuRl9e7uAlKY8ytawGSBLEbU9AYAIgdxOjul9oczbrWuCAxCLIbLt0ayYpeY08X%2Fmee7rj9mIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIq63cUr7DI9K8jgsCrcA9FfahdKaWQM98jxP6ofNb3qHU0goWCQoOYWlvt6J1Fa%2FHnPKRzAsvbRorXv0NbaBr7vMKAhDrW9Nr07Fuhck53jsrtTcROM7vZms%2FgBR6pw0Jy7WACal%2Fj2IWQbv16mNTniKxdgHT2q6l5EpxOWnVuwUtlBXrelbC91JUcQJo7leqUqOoI9Qr%2FuI%2F8G0ddyKvuFDrLhqwt%2FJDDPZk1E2c6hg2bt6Ms9tLHW5AlN3wlQ%2FK1QYUGzC8sEq3B19r%2BEcQfpjmSGckMzPDpOZThBpscAwOdkRbExHYjyvZx5vW%2BpehG2t9nioe1sFV%2BQ5Xbz98pLLPRECjnlS9wUkIsgkpjWOy2TGs1hUS%2BaK7FSKHbbh5IpSiWY3vF89c%2FWVnMC1kn6CKOjJRWRZMEYV1OA9dbmae4A7VANBHrc1vHdtOhccLnwUPVhsoIepHnEsZJR4YlSncO6EFCV7p56MHJ3b36rf18%2FNeKSsAj4HoSqRa1X5luRbQOdQTGglRadR5q9Ap7Ql2Fno38Y6UMQfKLCk%2BHUxUJWTm9%2BpLYMLW4iwCEaBDKkeMPYBPllYlJXXb30EmiKQ9cx9YbKV%2B20CJLQzWNRQirk%2BODZtnOoVwsEfwWTqAxTXyyEHca2lPfUML%2FF88QGOqUBAf0lSLqWPzyjqWt9GlTiW%2FSVyN7Dhqdll4aUOuRSG0qCNjBf%2FEPXhPABRJhA%2BjmIFlqVnl9Q5ORNm7ZOCoXYrzkw2Xet0JBKlNmY%2FIGjMiZgVh0bm%2Fk3t2Er2d1GXenKz4X37oIRRvbEcRgtXQJWWRcxfYutAUUQ9AKcrCZRKKYNXe%2BeEHDFo2EFHXNInBFPkP2wLEWZjRmVo2t%2Buy5dB1HOwZdp&X-Amz-Signature=7767031450b649b219fde0ada681cc9544c90b2a59da3a60aab598a9053d485b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAYROVZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2xnsSww1PnuJwolEuRl9e7uAlKY8ytawGSBLEbU9AYAIgdxOjul9oczbrWuCAxCLIbLt0ayYpeY08X%2Fmee7rj9mIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIq63cUr7DI9K8jgsCrcA9FfahdKaWQM98jxP6ofNb3qHU0goWCQoOYWlvt6J1Fa%2FHnPKRzAsvbRorXv0NbaBr7vMKAhDrW9Nr07Fuhck53jsrtTcROM7vZms%2FgBR6pw0Jy7WACal%2Fj2IWQbv16mNTniKxdgHT2q6l5EpxOWnVuwUtlBXrelbC91JUcQJo7leqUqOoI9Qr%2FuI%2F8G0ddyKvuFDrLhqwt%2FJDDPZk1E2c6hg2bt6Ms9tLHW5AlN3wlQ%2FK1QYUGzC8sEq3B19r%2BEcQfpjmSGckMzPDpOZThBpscAwOdkRbExHYjyvZx5vW%2BpehG2t9nioe1sFV%2BQ5Xbz98pLLPRECjnlS9wUkIsgkpjWOy2TGs1hUS%2BaK7FSKHbbh5IpSiWY3vF89c%2FWVnMC1kn6CKOjJRWRZMEYV1OA9dbmae4A7VANBHrc1vHdtOhccLnwUPVhsoIepHnEsZJR4YlSncO6EFCV7p56MHJ3b36rf18%2FNeKSsAj4HoSqRa1X5luRbQOdQTGglRadR5q9Ap7Ql2Fno38Y6UMQfKLCk%2BHUxUJWTm9%2BpLYMLW4iwCEaBDKkeMPYBPllYlJXXb30EmiKQ9cx9YbKV%2B20CJLQzWNRQirk%2BODZtnOoVwsEfwWTqAxTXyyEHca2lPfUML%2FF88QGOqUBAf0lSLqWPzyjqWt9GlTiW%2FSVyN7Dhqdll4aUOuRSG0qCNjBf%2FEPXhPABRJhA%2BjmIFlqVnl9Q5ORNm7ZOCoXYrzkw2Xet0JBKlNmY%2FIGjMiZgVh0bm%2Fk3t2Er2d1GXenKz4X37oIRRvbEcRgtXQJWWRcxfYutAUUQ9AKcrCZRKKYNXe%2BeEHDFo2EFHXNInBFPkP2wLEWZjRmVo2t%2Buy5dB1HOwZdp&X-Amz-Signature=20fa8db4e3a3dd76e546752d29bb0ed37c17fc1bd1ddf5c1fb9f70e35d3b4e98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAYROVZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2xnsSww1PnuJwolEuRl9e7uAlKY8ytawGSBLEbU9AYAIgdxOjul9oczbrWuCAxCLIbLt0ayYpeY08X%2Fmee7rj9mIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIq63cUr7DI9K8jgsCrcA9FfahdKaWQM98jxP6ofNb3qHU0goWCQoOYWlvt6J1Fa%2FHnPKRzAsvbRorXv0NbaBr7vMKAhDrW9Nr07Fuhck53jsrtTcROM7vZms%2FgBR6pw0Jy7WACal%2Fj2IWQbv16mNTniKxdgHT2q6l5EpxOWnVuwUtlBXrelbC91JUcQJo7leqUqOoI9Qr%2FuI%2F8G0ddyKvuFDrLhqwt%2FJDDPZk1E2c6hg2bt6Ms9tLHW5AlN3wlQ%2FK1QYUGzC8sEq3B19r%2BEcQfpjmSGckMzPDpOZThBpscAwOdkRbExHYjyvZx5vW%2BpehG2t9nioe1sFV%2BQ5Xbz98pLLPRECjnlS9wUkIsgkpjWOy2TGs1hUS%2BaK7FSKHbbh5IpSiWY3vF89c%2FWVnMC1kn6CKOjJRWRZMEYV1OA9dbmae4A7VANBHrc1vHdtOhccLnwUPVhsoIepHnEsZJR4YlSncO6EFCV7p56MHJ3b36rf18%2FNeKSsAj4HoSqRa1X5luRbQOdQTGglRadR5q9Ap7Ql2Fno38Y6UMQfKLCk%2BHUxUJWTm9%2BpLYMLW4iwCEaBDKkeMPYBPllYlJXXb30EmiKQ9cx9YbKV%2B20CJLQzWNRQirk%2BODZtnOoVwsEfwWTqAxTXyyEHca2lPfUML%2FF88QGOqUBAf0lSLqWPzyjqWt9GlTiW%2FSVyN7Dhqdll4aUOuRSG0qCNjBf%2FEPXhPABRJhA%2BjmIFlqVnl9Q5ORNm7ZOCoXYrzkw2Xet0JBKlNmY%2FIGjMiZgVh0bm%2Fk3t2Er2d1GXenKz4X37oIRRvbEcRgtXQJWWRcxfYutAUUQ9AKcrCZRKKYNXe%2BeEHDFo2EFHXNInBFPkP2wLEWZjRmVo2t%2Buy5dB1HOwZdp&X-Amz-Signature=d93a5455903fc8626289d3d46d59897e136006d26f58104188fa031677b602dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAYROVZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2xnsSww1PnuJwolEuRl9e7uAlKY8ytawGSBLEbU9AYAIgdxOjul9oczbrWuCAxCLIbLt0ayYpeY08X%2Fmee7rj9mIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIq63cUr7DI9K8jgsCrcA9FfahdKaWQM98jxP6ofNb3qHU0goWCQoOYWlvt6J1Fa%2FHnPKRzAsvbRorXv0NbaBr7vMKAhDrW9Nr07Fuhck53jsrtTcROM7vZms%2FgBR6pw0Jy7WACal%2Fj2IWQbv16mNTniKxdgHT2q6l5EpxOWnVuwUtlBXrelbC91JUcQJo7leqUqOoI9Qr%2FuI%2F8G0ddyKvuFDrLhqwt%2FJDDPZk1E2c6hg2bt6Ms9tLHW5AlN3wlQ%2FK1QYUGzC8sEq3B19r%2BEcQfpjmSGckMzPDpOZThBpscAwOdkRbExHYjyvZx5vW%2BpehG2t9nioe1sFV%2BQ5Xbz98pLLPRECjnlS9wUkIsgkpjWOy2TGs1hUS%2BaK7FSKHbbh5IpSiWY3vF89c%2FWVnMC1kn6CKOjJRWRZMEYV1OA9dbmae4A7VANBHrc1vHdtOhccLnwUPVhsoIepHnEsZJR4YlSncO6EFCV7p56MHJ3b36rf18%2FNeKSsAj4HoSqRa1X5luRbQOdQTGglRadR5q9Ap7Ql2Fno38Y6UMQfKLCk%2BHUxUJWTm9%2BpLYMLW4iwCEaBDKkeMPYBPllYlJXXb30EmiKQ9cx9YbKV%2B20CJLQzWNRQirk%2BODZtnOoVwsEfwWTqAxTXyyEHca2lPfUML%2FF88QGOqUBAf0lSLqWPzyjqWt9GlTiW%2FSVyN7Dhqdll4aUOuRSG0qCNjBf%2FEPXhPABRJhA%2BjmIFlqVnl9Q5ORNm7ZOCoXYrzkw2Xet0JBKlNmY%2FIGjMiZgVh0bm%2Fk3t2Er2d1GXenKz4X37oIRRvbEcRgtXQJWWRcxfYutAUUQ9AKcrCZRKKYNXe%2BeEHDFo2EFHXNInBFPkP2wLEWZjRmVo2t%2Buy5dB1HOwZdp&X-Amz-Signature=dedbca403c073a332994968646c19db619d9b3cecfc508a5103e6bee9a868a6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAYROVZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2xnsSww1PnuJwolEuRl9e7uAlKY8ytawGSBLEbU9AYAIgdxOjul9oczbrWuCAxCLIbLt0ayYpeY08X%2Fmee7rj9mIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIq63cUr7DI9K8jgsCrcA9FfahdKaWQM98jxP6ofNb3qHU0goWCQoOYWlvt6J1Fa%2FHnPKRzAsvbRorXv0NbaBr7vMKAhDrW9Nr07Fuhck53jsrtTcROM7vZms%2FgBR6pw0Jy7WACal%2Fj2IWQbv16mNTniKxdgHT2q6l5EpxOWnVuwUtlBXrelbC91JUcQJo7leqUqOoI9Qr%2FuI%2F8G0ddyKvuFDrLhqwt%2FJDDPZk1E2c6hg2bt6Ms9tLHW5AlN3wlQ%2FK1QYUGzC8sEq3B19r%2BEcQfpjmSGckMzPDpOZThBpscAwOdkRbExHYjyvZx5vW%2BpehG2t9nioe1sFV%2BQ5Xbz98pLLPRECjnlS9wUkIsgkpjWOy2TGs1hUS%2BaK7FSKHbbh5IpSiWY3vF89c%2FWVnMC1kn6CKOjJRWRZMEYV1OA9dbmae4A7VANBHrc1vHdtOhccLnwUPVhsoIepHnEsZJR4YlSncO6EFCV7p56MHJ3b36rf18%2FNeKSsAj4HoSqRa1X5luRbQOdQTGglRadR5q9Ap7Ql2Fno38Y6UMQfKLCk%2BHUxUJWTm9%2BpLYMLW4iwCEaBDKkeMPYBPllYlJXXb30EmiKQ9cx9YbKV%2B20CJLQzWNRQirk%2BODZtnOoVwsEfwWTqAxTXyyEHca2lPfUML%2FF88QGOqUBAf0lSLqWPzyjqWt9GlTiW%2FSVyN7Dhqdll4aUOuRSG0qCNjBf%2FEPXhPABRJhA%2BjmIFlqVnl9Q5ORNm7ZOCoXYrzkw2Xet0JBKlNmY%2FIGjMiZgVh0bm%2Fk3t2Er2d1GXenKz4X37oIRRvbEcRgtXQJWWRcxfYutAUUQ9AKcrCZRKKYNXe%2BeEHDFo2EFHXNInBFPkP2wLEWZjRmVo2t%2Buy5dB1HOwZdp&X-Amz-Signature=b6de8d6c9b5b331f21590b0084bea13c5941af5aa45ffc7b78a05ddcd98af76e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAYROVZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2xnsSww1PnuJwolEuRl9e7uAlKY8ytawGSBLEbU9AYAIgdxOjul9oczbrWuCAxCLIbLt0ayYpeY08X%2Fmee7rj9mIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIq63cUr7DI9K8jgsCrcA9FfahdKaWQM98jxP6ofNb3qHU0goWCQoOYWlvt6J1Fa%2FHnPKRzAsvbRorXv0NbaBr7vMKAhDrW9Nr07Fuhck53jsrtTcROM7vZms%2FgBR6pw0Jy7WACal%2Fj2IWQbv16mNTniKxdgHT2q6l5EpxOWnVuwUtlBXrelbC91JUcQJo7leqUqOoI9Qr%2FuI%2F8G0ddyKvuFDrLhqwt%2FJDDPZk1E2c6hg2bt6Ms9tLHW5AlN3wlQ%2FK1QYUGzC8sEq3B19r%2BEcQfpjmSGckMzPDpOZThBpscAwOdkRbExHYjyvZx5vW%2BpehG2t9nioe1sFV%2BQ5Xbz98pLLPRECjnlS9wUkIsgkpjWOy2TGs1hUS%2BaK7FSKHbbh5IpSiWY3vF89c%2FWVnMC1kn6CKOjJRWRZMEYV1OA9dbmae4A7VANBHrc1vHdtOhccLnwUPVhsoIepHnEsZJR4YlSncO6EFCV7p56MHJ3b36rf18%2FNeKSsAj4HoSqRa1X5luRbQOdQTGglRadR5q9Ap7Ql2Fno38Y6UMQfKLCk%2BHUxUJWTm9%2BpLYMLW4iwCEaBDKkeMPYBPllYlJXXb30EmiKQ9cx9YbKV%2B20CJLQzWNRQirk%2BODZtnOoVwsEfwWTqAxTXyyEHca2lPfUML%2FF88QGOqUBAf0lSLqWPzyjqWt9GlTiW%2FSVyN7Dhqdll4aUOuRSG0qCNjBf%2FEPXhPABRJhA%2BjmIFlqVnl9Q5ORNm7ZOCoXYrzkw2Xet0JBKlNmY%2FIGjMiZgVh0bm%2Fk3t2Er2d1GXenKz4X37oIRRvbEcRgtXQJWWRcxfYutAUUQ9AKcrCZRKKYNXe%2BeEHDFo2EFHXNInBFPkP2wLEWZjRmVo2t%2Buy5dB1HOwZdp&X-Amz-Signature=849d3073b45a4c328e2887a13ef684f97b9b9489a6cf352a1181641d994e4d0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAYROVZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2xnsSww1PnuJwolEuRl9e7uAlKY8ytawGSBLEbU9AYAIgdxOjul9oczbrWuCAxCLIbLt0ayYpeY08X%2Fmee7rj9mIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIq63cUr7DI9K8jgsCrcA9FfahdKaWQM98jxP6ofNb3qHU0goWCQoOYWlvt6J1Fa%2FHnPKRzAsvbRorXv0NbaBr7vMKAhDrW9Nr07Fuhck53jsrtTcROM7vZms%2FgBR6pw0Jy7WACal%2Fj2IWQbv16mNTniKxdgHT2q6l5EpxOWnVuwUtlBXrelbC91JUcQJo7leqUqOoI9Qr%2FuI%2F8G0ddyKvuFDrLhqwt%2FJDDPZk1E2c6hg2bt6Ms9tLHW5AlN3wlQ%2FK1QYUGzC8sEq3B19r%2BEcQfpjmSGckMzPDpOZThBpscAwOdkRbExHYjyvZx5vW%2BpehG2t9nioe1sFV%2BQ5Xbz98pLLPRECjnlS9wUkIsgkpjWOy2TGs1hUS%2BaK7FSKHbbh5IpSiWY3vF89c%2FWVnMC1kn6CKOjJRWRZMEYV1OA9dbmae4A7VANBHrc1vHdtOhccLnwUPVhsoIepHnEsZJR4YlSncO6EFCV7p56MHJ3b36rf18%2FNeKSsAj4HoSqRa1X5luRbQOdQTGglRadR5q9Ap7Ql2Fno38Y6UMQfKLCk%2BHUxUJWTm9%2BpLYMLW4iwCEaBDKkeMPYBPllYlJXXb30EmiKQ9cx9YbKV%2B20CJLQzWNRQirk%2BODZtnOoVwsEfwWTqAxTXyyEHca2lPfUML%2FF88QGOqUBAf0lSLqWPzyjqWt9GlTiW%2FSVyN7Dhqdll4aUOuRSG0qCNjBf%2FEPXhPABRJhA%2BjmIFlqVnl9Q5ORNm7ZOCoXYrzkw2Xet0JBKlNmY%2FIGjMiZgVh0bm%2Fk3t2Er2d1GXenKz4X37oIRRvbEcRgtXQJWWRcxfYutAUUQ9AKcrCZRKKYNXe%2BeEHDFo2EFHXNInBFPkP2wLEWZjRmVo2t%2Buy5dB1HOwZdp&X-Amz-Signature=478f5006e90c0ac004430980edc756832caa2d9f7f4adeb1a90eb91476662127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAYROVZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2xnsSww1PnuJwolEuRl9e7uAlKY8ytawGSBLEbU9AYAIgdxOjul9oczbrWuCAxCLIbLt0ayYpeY08X%2Fmee7rj9mIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIq63cUr7DI9K8jgsCrcA9FfahdKaWQM98jxP6ofNb3qHU0goWCQoOYWlvt6J1Fa%2FHnPKRzAsvbRorXv0NbaBr7vMKAhDrW9Nr07Fuhck53jsrtTcROM7vZms%2FgBR6pw0Jy7WACal%2Fj2IWQbv16mNTniKxdgHT2q6l5EpxOWnVuwUtlBXrelbC91JUcQJo7leqUqOoI9Qr%2FuI%2F8G0ddyKvuFDrLhqwt%2FJDDPZk1E2c6hg2bt6Ms9tLHW5AlN3wlQ%2FK1QYUGzC8sEq3B19r%2BEcQfpjmSGckMzPDpOZThBpscAwOdkRbExHYjyvZx5vW%2BpehG2t9nioe1sFV%2BQ5Xbz98pLLPRECjnlS9wUkIsgkpjWOy2TGs1hUS%2BaK7FSKHbbh5IpSiWY3vF89c%2FWVnMC1kn6CKOjJRWRZMEYV1OA9dbmae4A7VANBHrc1vHdtOhccLnwUPVhsoIepHnEsZJR4YlSncO6EFCV7p56MHJ3b36rf18%2FNeKSsAj4HoSqRa1X5luRbQOdQTGglRadR5q9Ap7Ql2Fno38Y6UMQfKLCk%2BHUxUJWTm9%2BpLYMLW4iwCEaBDKkeMPYBPllYlJXXb30EmiKQ9cx9YbKV%2B20CJLQzWNRQirk%2BODZtnOoVwsEfwWTqAxTXyyEHca2lPfUML%2FF88QGOqUBAf0lSLqWPzyjqWt9GlTiW%2FSVyN7Dhqdll4aUOuRSG0qCNjBf%2FEPXhPABRJhA%2BjmIFlqVnl9Q5ORNm7ZOCoXYrzkw2Xet0JBKlNmY%2FIGjMiZgVh0bm%2Fk3t2Er2d1GXenKz4X37oIRRvbEcRgtXQJWWRcxfYutAUUQ9AKcrCZRKKYNXe%2BeEHDFo2EFHXNInBFPkP2wLEWZjRmVo2t%2Buy5dB1HOwZdp&X-Amz-Signature=e3f972ace550d4b9ef2b470d703144783b32f6d78cffc55d3f55007fbe4c3d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAYROVZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2xnsSww1PnuJwolEuRl9e7uAlKY8ytawGSBLEbU9AYAIgdxOjul9oczbrWuCAxCLIbLt0ayYpeY08X%2Fmee7rj9mIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIq63cUr7DI9K8jgsCrcA9FfahdKaWQM98jxP6ofNb3qHU0goWCQoOYWlvt6J1Fa%2FHnPKRzAsvbRorXv0NbaBr7vMKAhDrW9Nr07Fuhck53jsrtTcROM7vZms%2FgBR6pw0Jy7WACal%2Fj2IWQbv16mNTniKxdgHT2q6l5EpxOWnVuwUtlBXrelbC91JUcQJo7leqUqOoI9Qr%2FuI%2F8G0ddyKvuFDrLhqwt%2FJDDPZk1E2c6hg2bt6Ms9tLHW5AlN3wlQ%2FK1QYUGzC8sEq3B19r%2BEcQfpjmSGckMzPDpOZThBpscAwOdkRbExHYjyvZx5vW%2BpehG2t9nioe1sFV%2BQ5Xbz98pLLPRECjnlS9wUkIsgkpjWOy2TGs1hUS%2BaK7FSKHbbh5IpSiWY3vF89c%2FWVnMC1kn6CKOjJRWRZMEYV1OA9dbmae4A7VANBHrc1vHdtOhccLnwUPVhsoIepHnEsZJR4YlSncO6EFCV7p56MHJ3b36rf18%2FNeKSsAj4HoSqRa1X5luRbQOdQTGglRadR5q9Ap7Ql2Fno38Y6UMQfKLCk%2BHUxUJWTm9%2BpLYMLW4iwCEaBDKkeMPYBPllYlJXXb30EmiKQ9cx9YbKV%2B20CJLQzWNRQirk%2BODZtnOoVwsEfwWTqAxTXyyEHca2lPfUML%2FF88QGOqUBAf0lSLqWPzyjqWt9GlTiW%2FSVyN7Dhqdll4aUOuRSG0qCNjBf%2FEPXhPABRJhA%2BjmIFlqVnl9Q5ORNm7ZOCoXYrzkw2Xet0JBKlNmY%2FIGjMiZgVh0bm%2Fk3t2Er2d1GXenKz4X37oIRRvbEcRgtXQJWWRcxfYutAUUQ9AKcrCZRKKYNXe%2BeEHDFo2EFHXNInBFPkP2wLEWZjRmVo2t%2Buy5dB1HOwZdp&X-Amz-Signature=a8f68b531fffeb4aaacd9d55219158009278464c89b04fb62d7437063e62266c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
