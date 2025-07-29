---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-29T16:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-29T16:11:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEY3LBN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFySqTyZYB%2BT8i%2ByNit9zgGv6TWzyk8A6DIhayHhQxhMAiALzCKBHkL6AIoURZqgrPHVSXaE4HJytNuHfqtnpM96ByqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfKlhjdkys4TEBXhKtwDACtBL%2BG5gFcRI1cl%2BnUEay2WOlaQBoMTOy%2B1kJdQCuTdSGDjJ7aPyjsXj1RWDWpTwPGtkXJaFYcBEbAYmhAoO370HRwUtQ3%2BJCpr359q3bSzwWjh%2F61gn7NKrZz6W9LVXMgsa4BEAXOw4cpPUc4fNeXW0Hgr8vmSbjH40HfXaMA91H%2FQYmquy6bMu3Rjaeh6PjYrkIvgJRxDKWy3nZmChTo7FiyinZgObud3npTcwFRoDgLt2%2FOrd7IQPtjmKCxO%2Bfey6lE7UI0N5QR4qpdMsRdZ77dwt34c5G4yhWHLDX8DQyo5U%2BNkZFyaw0Vf9QpuXsPCLJBT2sr0uHOvutLEpmcKOrjHIfHPyI1iQmpJgONtYgv8DslXEnljkV6iNzzU6OTu8DZERHLylFNaRvzjG1U9WNVJTFe3CyoOQXwQprJiqUk4TAjGQCNTgrQWaKJzTNcgY59xbpLDQeENH6T2Aiu2tIfG5lDiu6PSzIsoq1oMkmvXdOvn2Ugwa%2FU45MqNy34CzNJOtY7P5p2n8dn%2FEsn3HqClZG7aFJzOrecEDzN5rLz65NYsYEafLMc478hY%2BNex21zl4koOp3ZjN9wzZiONr6CrfrxTKRW7TUtV43G2d3a3Yaq7saMGWXowtoqlxAY6pgH%2Bj%2F81Rmz8%2FJs3fhl8%2Bv4petyFQxb7NIpilHdzEMR5ieEOmiBESa8liSmk64YA9dX1eWGvBHant8cL67qZtMjvOw8BmkkJJ41H4HasWtGJQ3Q3Rax4pQyZ5kUXYGe60hJfVU3GGhAAkrDKIpKpvpsp1cSaSh2O84whVPbiGV%2BHd8O0Ort7x%2Be0%2FnQou22k2106OPNTkfvNJ%2BAyzPWgidES2QUrNpPd&X-Amz-Signature=8134258caee89d28b9b9d8ebba1c1d3aa59ca56ea051b2393026787b7618382c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: add rviz guide of viewing scanned map

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEY3LBN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFySqTyZYB%2BT8i%2ByNit9zgGv6TWzyk8A6DIhayHhQxhMAiALzCKBHkL6AIoURZqgrPHVSXaE4HJytNuHfqtnpM96ByqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfKlhjdkys4TEBXhKtwDACtBL%2BG5gFcRI1cl%2BnUEay2WOlaQBoMTOy%2B1kJdQCuTdSGDjJ7aPyjsXj1RWDWpTwPGtkXJaFYcBEbAYmhAoO370HRwUtQ3%2BJCpr359q3bSzwWjh%2F61gn7NKrZz6W9LVXMgsa4BEAXOw4cpPUc4fNeXW0Hgr8vmSbjH40HfXaMA91H%2FQYmquy6bMu3Rjaeh6PjYrkIvgJRxDKWy3nZmChTo7FiyinZgObud3npTcwFRoDgLt2%2FOrd7IQPtjmKCxO%2Bfey6lE7UI0N5QR4qpdMsRdZ77dwt34c5G4yhWHLDX8DQyo5U%2BNkZFyaw0Vf9QpuXsPCLJBT2sr0uHOvutLEpmcKOrjHIfHPyI1iQmpJgONtYgv8DslXEnljkV6iNzzU6OTu8DZERHLylFNaRvzjG1U9WNVJTFe3CyoOQXwQprJiqUk4TAjGQCNTgrQWaKJzTNcgY59xbpLDQeENH6T2Aiu2tIfG5lDiu6PSzIsoq1oMkmvXdOvn2Ugwa%2FU45MqNy34CzNJOtY7P5p2n8dn%2FEsn3HqClZG7aFJzOrecEDzN5rLz65NYsYEafLMc478hY%2BNex21zl4koOp3ZjN9wzZiONr6CrfrxTKRW7TUtV43G2d3a3Yaq7saMGWXowtoqlxAY6pgH%2Bj%2F81Rmz8%2FJs3fhl8%2Bv4petyFQxb7NIpilHdzEMR5ieEOmiBESa8liSmk64YA9dX1eWGvBHant8cL67qZtMjvOw8BmkkJJ41H4HasWtGJQ3Q3Rax4pQyZ5kUXYGe60hJfVU3GGhAAkrDKIpKpvpsp1cSaSh2O84whVPbiGV%2BHd8O0Ort7x%2Be0%2FnQou22k2106OPNTkfvNJ%2BAyzPWgidES2QUrNpPd&X-Amz-Signature=880c904c1ec91fd21aee978e5b1759cbce9259d24ceb438639afe19bec7ba52a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEY3LBN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFySqTyZYB%2BT8i%2ByNit9zgGv6TWzyk8A6DIhayHhQxhMAiALzCKBHkL6AIoURZqgrPHVSXaE4HJytNuHfqtnpM96ByqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfKlhjdkys4TEBXhKtwDACtBL%2BG5gFcRI1cl%2BnUEay2WOlaQBoMTOy%2B1kJdQCuTdSGDjJ7aPyjsXj1RWDWpTwPGtkXJaFYcBEbAYmhAoO370HRwUtQ3%2BJCpr359q3bSzwWjh%2F61gn7NKrZz6W9LVXMgsa4BEAXOw4cpPUc4fNeXW0Hgr8vmSbjH40HfXaMA91H%2FQYmquy6bMu3Rjaeh6PjYrkIvgJRxDKWy3nZmChTo7FiyinZgObud3npTcwFRoDgLt2%2FOrd7IQPtjmKCxO%2Bfey6lE7UI0N5QR4qpdMsRdZ77dwt34c5G4yhWHLDX8DQyo5U%2BNkZFyaw0Vf9QpuXsPCLJBT2sr0uHOvutLEpmcKOrjHIfHPyI1iQmpJgONtYgv8DslXEnljkV6iNzzU6OTu8DZERHLylFNaRvzjG1U9WNVJTFe3CyoOQXwQprJiqUk4TAjGQCNTgrQWaKJzTNcgY59xbpLDQeENH6T2Aiu2tIfG5lDiu6PSzIsoq1oMkmvXdOvn2Ugwa%2FU45MqNy34CzNJOtY7P5p2n8dn%2FEsn3HqClZG7aFJzOrecEDzN5rLz65NYsYEafLMc478hY%2BNex21zl4koOp3ZjN9wzZiONr6CrfrxTKRW7TUtV43G2d3a3Yaq7saMGWXowtoqlxAY6pgH%2Bj%2F81Rmz8%2FJs3fhl8%2Bv4petyFQxb7NIpilHdzEMR5ieEOmiBESa8liSmk64YA9dX1eWGvBHant8cL67qZtMjvOw8BmkkJJ41H4HasWtGJQ3Q3Rax4pQyZ5kUXYGe60hJfVU3GGhAAkrDKIpKpvpsp1cSaSh2O84whVPbiGV%2BHd8O0Ort7x%2Be0%2FnQou22k2106OPNTkfvNJ%2BAyzPWgidES2QUrNpPd&X-Amz-Signature=14957f0115ec17e17acfcf9d0a74b0777da81d8a1b6c6e4670316ab348e6ee68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

### SLAM Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEY3LBN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFySqTyZYB%2BT8i%2ByNit9zgGv6TWzyk8A6DIhayHhQxhMAiALzCKBHkL6AIoURZqgrPHVSXaE4HJytNuHfqtnpM96ByqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfKlhjdkys4TEBXhKtwDACtBL%2BG5gFcRI1cl%2BnUEay2WOlaQBoMTOy%2B1kJdQCuTdSGDjJ7aPyjsXj1RWDWpTwPGtkXJaFYcBEbAYmhAoO370HRwUtQ3%2BJCpr359q3bSzwWjh%2F61gn7NKrZz6W9LVXMgsa4BEAXOw4cpPUc4fNeXW0Hgr8vmSbjH40HfXaMA91H%2FQYmquy6bMu3Rjaeh6PjYrkIvgJRxDKWy3nZmChTo7FiyinZgObud3npTcwFRoDgLt2%2FOrd7IQPtjmKCxO%2Bfey6lE7UI0N5QR4qpdMsRdZ77dwt34c5G4yhWHLDX8DQyo5U%2BNkZFyaw0Vf9QpuXsPCLJBT2sr0uHOvutLEpmcKOrjHIfHPyI1iQmpJgONtYgv8DslXEnljkV6iNzzU6OTu8DZERHLylFNaRvzjG1U9WNVJTFe3CyoOQXwQprJiqUk4TAjGQCNTgrQWaKJzTNcgY59xbpLDQeENH6T2Aiu2tIfG5lDiu6PSzIsoq1oMkmvXdOvn2Ugwa%2FU45MqNy34CzNJOtY7P5p2n8dn%2FEsn3HqClZG7aFJzOrecEDzN5rLz65NYsYEafLMc478hY%2BNex21zl4koOp3ZjN9wzZiONr6CrfrxTKRW7TUtV43G2d3a3Yaq7saMGWXowtoqlxAY6pgH%2Bj%2F81Rmz8%2FJs3fhl8%2Bv4petyFQxb7NIpilHdzEMR5ieEOmiBESa8liSmk64YA9dX1eWGvBHant8cL67qZtMjvOw8BmkkJJ41H4HasWtGJQ3Q3Rax4pQyZ5kUXYGe60hJfVU3GGhAAkrDKIpKpvpsp1cSaSh2O84whVPbiGV%2BHd8O0Ort7x%2Be0%2FnQou22k2106OPNTkfvNJ%2BAyzPWgidES2QUrNpPd&X-Amz-Signature=a2eac1410e5255838c1a01d7dcb9dabe7707407ef36f90a55a7da40228496012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEY3LBN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFySqTyZYB%2BT8i%2ByNit9zgGv6TWzyk8A6DIhayHhQxhMAiALzCKBHkL6AIoURZqgrPHVSXaE4HJytNuHfqtnpM96ByqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfKlhjdkys4TEBXhKtwDACtBL%2BG5gFcRI1cl%2BnUEay2WOlaQBoMTOy%2B1kJdQCuTdSGDjJ7aPyjsXj1RWDWpTwPGtkXJaFYcBEbAYmhAoO370HRwUtQ3%2BJCpr359q3bSzwWjh%2F61gn7NKrZz6W9LVXMgsa4BEAXOw4cpPUc4fNeXW0Hgr8vmSbjH40HfXaMA91H%2FQYmquy6bMu3Rjaeh6PjYrkIvgJRxDKWy3nZmChTo7FiyinZgObud3npTcwFRoDgLt2%2FOrd7IQPtjmKCxO%2Bfey6lE7UI0N5QR4qpdMsRdZ77dwt34c5G4yhWHLDX8DQyo5U%2BNkZFyaw0Vf9QpuXsPCLJBT2sr0uHOvutLEpmcKOrjHIfHPyI1iQmpJgONtYgv8DslXEnljkV6iNzzU6OTu8DZERHLylFNaRvzjG1U9WNVJTFe3CyoOQXwQprJiqUk4TAjGQCNTgrQWaKJzTNcgY59xbpLDQeENH6T2Aiu2tIfG5lDiu6PSzIsoq1oMkmvXdOvn2Ugwa%2FU45MqNy34CzNJOtY7P5p2n8dn%2FEsn3HqClZG7aFJzOrecEDzN5rLz65NYsYEafLMc478hY%2BNex21zl4koOp3ZjN9wzZiONr6CrfrxTKRW7TUtV43G2d3a3Yaq7saMGWXowtoqlxAY6pgH%2Bj%2F81Rmz8%2FJs3fhl8%2Bv4petyFQxb7NIpilHdzEMR5ieEOmiBESa8liSmk64YA9dX1eWGvBHant8cL67qZtMjvOw8BmkkJJ41H4HasWtGJQ3Q3Rax4pQyZ5kUXYGe60hJfVU3GGhAAkrDKIpKpvpsp1cSaSh2O84whVPbiGV%2BHd8O0Ort7x%2Be0%2FnQou22k2106OPNTkfvNJ%2BAyzPWgidES2QUrNpPd&X-Amz-Signature=d1d4d2aa4329e4fc2f5fb697957c8eedf13e4481b7ebd56db45dde58c178db14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEY3LBN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFySqTyZYB%2BT8i%2ByNit9zgGv6TWzyk8A6DIhayHhQxhMAiALzCKBHkL6AIoURZqgrPHVSXaE4HJytNuHfqtnpM96ByqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfKlhjdkys4TEBXhKtwDACtBL%2BG5gFcRI1cl%2BnUEay2WOlaQBoMTOy%2B1kJdQCuTdSGDjJ7aPyjsXj1RWDWpTwPGtkXJaFYcBEbAYmhAoO370HRwUtQ3%2BJCpr359q3bSzwWjh%2F61gn7NKrZz6W9LVXMgsa4BEAXOw4cpPUc4fNeXW0Hgr8vmSbjH40HfXaMA91H%2FQYmquy6bMu3Rjaeh6PjYrkIvgJRxDKWy3nZmChTo7FiyinZgObud3npTcwFRoDgLt2%2FOrd7IQPtjmKCxO%2Bfey6lE7UI0N5QR4qpdMsRdZ77dwt34c5G4yhWHLDX8DQyo5U%2BNkZFyaw0Vf9QpuXsPCLJBT2sr0uHOvutLEpmcKOrjHIfHPyI1iQmpJgONtYgv8DslXEnljkV6iNzzU6OTu8DZERHLylFNaRvzjG1U9WNVJTFe3CyoOQXwQprJiqUk4TAjGQCNTgrQWaKJzTNcgY59xbpLDQeENH6T2Aiu2tIfG5lDiu6PSzIsoq1oMkmvXdOvn2Ugwa%2FU45MqNy34CzNJOtY7P5p2n8dn%2FEsn3HqClZG7aFJzOrecEDzN5rLz65NYsYEafLMc478hY%2BNex21zl4koOp3ZjN9wzZiONr6CrfrxTKRW7TUtV43G2d3a3Yaq7saMGWXowtoqlxAY6pgH%2Bj%2F81Rmz8%2FJs3fhl8%2Bv4petyFQxb7NIpilHdzEMR5ieEOmiBESa8liSmk64YA9dX1eWGvBHant8cL67qZtMjvOw8BmkkJJ41H4HasWtGJQ3Q3Rax4pQyZ5kUXYGe60hJfVU3GGhAAkrDKIpKpvpsp1cSaSh2O84whVPbiGV%2BHd8O0Ort7x%2Be0%2FnQou22k2106OPNTkfvNJ%2BAyzPWgidES2QUrNpPd&X-Amz-Signature=1060a75dddd5e8b018f2bc22e7f01e9c4a65396852e12bf87af1a4817d74da5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEY3LBN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFySqTyZYB%2BT8i%2ByNit9zgGv6TWzyk8A6DIhayHhQxhMAiALzCKBHkL6AIoURZqgrPHVSXaE4HJytNuHfqtnpM96ByqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfKlhjdkys4TEBXhKtwDACtBL%2BG5gFcRI1cl%2BnUEay2WOlaQBoMTOy%2B1kJdQCuTdSGDjJ7aPyjsXj1RWDWpTwPGtkXJaFYcBEbAYmhAoO370HRwUtQ3%2BJCpr359q3bSzwWjh%2F61gn7NKrZz6W9LVXMgsa4BEAXOw4cpPUc4fNeXW0Hgr8vmSbjH40HfXaMA91H%2FQYmquy6bMu3Rjaeh6PjYrkIvgJRxDKWy3nZmChTo7FiyinZgObud3npTcwFRoDgLt2%2FOrd7IQPtjmKCxO%2Bfey6lE7UI0N5QR4qpdMsRdZ77dwt34c5G4yhWHLDX8DQyo5U%2BNkZFyaw0Vf9QpuXsPCLJBT2sr0uHOvutLEpmcKOrjHIfHPyI1iQmpJgONtYgv8DslXEnljkV6iNzzU6OTu8DZERHLylFNaRvzjG1U9WNVJTFe3CyoOQXwQprJiqUk4TAjGQCNTgrQWaKJzTNcgY59xbpLDQeENH6T2Aiu2tIfG5lDiu6PSzIsoq1oMkmvXdOvn2Ugwa%2FU45MqNy34CzNJOtY7P5p2n8dn%2FEsn3HqClZG7aFJzOrecEDzN5rLz65NYsYEafLMc478hY%2BNex21zl4koOp3ZjN9wzZiONr6CrfrxTKRW7TUtV43G2d3a3Yaq7saMGWXowtoqlxAY6pgH%2Bj%2F81Rmz8%2FJs3fhl8%2Bv4petyFQxb7NIpilHdzEMR5ieEOmiBESa8liSmk64YA9dX1eWGvBHant8cL67qZtMjvOw8BmkkJJ41H4HasWtGJQ3Q3Rax4pQyZ5kUXYGe60hJfVU3GGhAAkrDKIpKpvpsp1cSaSh2O84whVPbiGV%2BHd8O0Ort7x%2Be0%2FnQou22k2106OPNTkfvNJ%2BAyzPWgidES2QUrNpPd&X-Amz-Signature=8c95753026160fb3b6c1a5d4015169c272a040bf241c2268374a93ea64637d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEY3LBN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFySqTyZYB%2BT8i%2ByNit9zgGv6TWzyk8A6DIhayHhQxhMAiALzCKBHkL6AIoURZqgrPHVSXaE4HJytNuHfqtnpM96ByqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfKlhjdkys4TEBXhKtwDACtBL%2BG5gFcRI1cl%2BnUEay2WOlaQBoMTOy%2B1kJdQCuTdSGDjJ7aPyjsXj1RWDWpTwPGtkXJaFYcBEbAYmhAoO370HRwUtQ3%2BJCpr359q3bSzwWjh%2F61gn7NKrZz6W9LVXMgsa4BEAXOw4cpPUc4fNeXW0Hgr8vmSbjH40HfXaMA91H%2FQYmquy6bMu3Rjaeh6PjYrkIvgJRxDKWy3nZmChTo7FiyinZgObud3npTcwFRoDgLt2%2FOrd7IQPtjmKCxO%2Bfey6lE7UI0N5QR4qpdMsRdZ77dwt34c5G4yhWHLDX8DQyo5U%2BNkZFyaw0Vf9QpuXsPCLJBT2sr0uHOvutLEpmcKOrjHIfHPyI1iQmpJgONtYgv8DslXEnljkV6iNzzU6OTu8DZERHLylFNaRvzjG1U9WNVJTFe3CyoOQXwQprJiqUk4TAjGQCNTgrQWaKJzTNcgY59xbpLDQeENH6T2Aiu2tIfG5lDiu6PSzIsoq1oMkmvXdOvn2Ugwa%2FU45MqNy34CzNJOtY7P5p2n8dn%2FEsn3HqClZG7aFJzOrecEDzN5rLz65NYsYEafLMc478hY%2BNex21zl4koOp3ZjN9wzZiONr6CrfrxTKRW7TUtV43G2d3a3Yaq7saMGWXowtoqlxAY6pgH%2Bj%2F81Rmz8%2FJs3fhl8%2Bv4petyFQxb7NIpilHdzEMR5ieEOmiBESa8liSmk64YA9dX1eWGvBHant8cL67qZtMjvOw8BmkkJJ41H4HasWtGJQ3Q3Rax4pQyZ5kUXYGe60hJfVU3GGhAAkrDKIpKpvpsp1cSaSh2O84whVPbiGV%2BHd8O0Ort7x%2Be0%2FnQou22k2106OPNTkfvNJ%2BAyzPWgidES2QUrNpPd&X-Amz-Signature=5e66595f260c02cb09b929df8935e38ceadf94b8205d845973e4792c152f0033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEY3LBN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFySqTyZYB%2BT8i%2ByNit9zgGv6TWzyk8A6DIhayHhQxhMAiALzCKBHkL6AIoURZqgrPHVSXaE4HJytNuHfqtnpM96ByqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfKlhjdkys4TEBXhKtwDACtBL%2BG5gFcRI1cl%2BnUEay2WOlaQBoMTOy%2B1kJdQCuTdSGDjJ7aPyjsXj1RWDWpTwPGtkXJaFYcBEbAYmhAoO370HRwUtQ3%2BJCpr359q3bSzwWjh%2F61gn7NKrZz6W9LVXMgsa4BEAXOw4cpPUc4fNeXW0Hgr8vmSbjH40HfXaMA91H%2FQYmquy6bMu3Rjaeh6PjYrkIvgJRxDKWy3nZmChTo7FiyinZgObud3npTcwFRoDgLt2%2FOrd7IQPtjmKCxO%2Bfey6lE7UI0N5QR4qpdMsRdZ77dwt34c5G4yhWHLDX8DQyo5U%2BNkZFyaw0Vf9QpuXsPCLJBT2sr0uHOvutLEpmcKOrjHIfHPyI1iQmpJgONtYgv8DslXEnljkV6iNzzU6OTu8DZERHLylFNaRvzjG1U9WNVJTFe3CyoOQXwQprJiqUk4TAjGQCNTgrQWaKJzTNcgY59xbpLDQeENH6T2Aiu2tIfG5lDiu6PSzIsoq1oMkmvXdOvn2Ugwa%2FU45MqNy34CzNJOtY7P5p2n8dn%2FEsn3HqClZG7aFJzOrecEDzN5rLz65NYsYEafLMc478hY%2BNex21zl4koOp3ZjN9wzZiONr6CrfrxTKRW7TUtV43G2d3a3Yaq7saMGWXowtoqlxAY6pgH%2Bj%2F81Rmz8%2FJs3fhl8%2Bv4petyFQxb7NIpilHdzEMR5ieEOmiBESa8liSmk64YA9dX1eWGvBHant8cL67qZtMjvOw8BmkkJJ41H4HasWtGJQ3Q3Rax4pQyZ5kUXYGe60hJfVU3GGhAAkrDKIpKpvpsp1cSaSh2O84whVPbiGV%2BHd8O0Ort7x%2Be0%2FnQou22k2106OPNTkfvNJ%2BAyzPWgidES2QUrNpPd&X-Amz-Signature=4947220c98d5d0e13a6f59b540afa35b6b4e2ce869af53943b2953d27ef165fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEY3LBN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFySqTyZYB%2BT8i%2ByNit9zgGv6TWzyk8A6DIhayHhQxhMAiALzCKBHkL6AIoURZqgrPHVSXaE4HJytNuHfqtnpM96ByqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfKlhjdkys4TEBXhKtwDACtBL%2BG5gFcRI1cl%2BnUEay2WOlaQBoMTOy%2B1kJdQCuTdSGDjJ7aPyjsXj1RWDWpTwPGtkXJaFYcBEbAYmhAoO370HRwUtQ3%2BJCpr359q3bSzwWjh%2F61gn7NKrZz6W9LVXMgsa4BEAXOw4cpPUc4fNeXW0Hgr8vmSbjH40HfXaMA91H%2FQYmquy6bMu3Rjaeh6PjYrkIvgJRxDKWy3nZmChTo7FiyinZgObud3npTcwFRoDgLt2%2FOrd7IQPtjmKCxO%2Bfey6lE7UI0N5QR4qpdMsRdZ77dwt34c5G4yhWHLDX8DQyo5U%2BNkZFyaw0Vf9QpuXsPCLJBT2sr0uHOvutLEpmcKOrjHIfHPyI1iQmpJgONtYgv8DslXEnljkV6iNzzU6OTu8DZERHLylFNaRvzjG1U9WNVJTFe3CyoOQXwQprJiqUk4TAjGQCNTgrQWaKJzTNcgY59xbpLDQeENH6T2Aiu2tIfG5lDiu6PSzIsoq1oMkmvXdOvn2Ugwa%2FU45MqNy34CzNJOtY7P5p2n8dn%2FEsn3HqClZG7aFJzOrecEDzN5rLz65NYsYEafLMc478hY%2BNex21zl4koOp3ZjN9wzZiONr6CrfrxTKRW7TUtV43G2d3a3Yaq7saMGWXowtoqlxAY6pgH%2Bj%2F81Rmz8%2FJs3fhl8%2Bv4petyFQxb7NIpilHdzEMR5ieEOmiBESa8liSmk64YA9dX1eWGvBHant8cL67qZtMjvOw8BmkkJJ41H4HasWtGJQ3Q3Rax4pQyZ5kUXYGe60hJfVU3GGhAAkrDKIpKpvpsp1cSaSh2O84whVPbiGV%2BHd8O0Ort7x%2Be0%2FnQou22k2106OPNTkfvNJ%2BAyzPWgidES2QUrNpPd&X-Amz-Signature=af40be994a77075fa0bbe71bb95bd0b372f61545ef9d6911c687158e417ffd98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEY3LBN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFySqTyZYB%2BT8i%2ByNit9zgGv6TWzyk8A6DIhayHhQxhMAiALzCKBHkL6AIoURZqgrPHVSXaE4HJytNuHfqtnpM96ByqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfKlhjdkys4TEBXhKtwDACtBL%2BG5gFcRI1cl%2BnUEay2WOlaQBoMTOy%2B1kJdQCuTdSGDjJ7aPyjsXj1RWDWpTwPGtkXJaFYcBEbAYmhAoO370HRwUtQ3%2BJCpr359q3bSzwWjh%2F61gn7NKrZz6W9LVXMgsa4BEAXOw4cpPUc4fNeXW0Hgr8vmSbjH40HfXaMA91H%2FQYmquy6bMu3Rjaeh6PjYrkIvgJRxDKWy3nZmChTo7FiyinZgObud3npTcwFRoDgLt2%2FOrd7IQPtjmKCxO%2Bfey6lE7UI0N5QR4qpdMsRdZ77dwt34c5G4yhWHLDX8DQyo5U%2BNkZFyaw0Vf9QpuXsPCLJBT2sr0uHOvutLEpmcKOrjHIfHPyI1iQmpJgONtYgv8DslXEnljkV6iNzzU6OTu8DZERHLylFNaRvzjG1U9WNVJTFe3CyoOQXwQprJiqUk4TAjGQCNTgrQWaKJzTNcgY59xbpLDQeENH6T2Aiu2tIfG5lDiu6PSzIsoq1oMkmvXdOvn2Ugwa%2FU45MqNy34CzNJOtY7P5p2n8dn%2FEsn3HqClZG7aFJzOrecEDzN5rLz65NYsYEafLMc478hY%2BNex21zl4koOp3ZjN9wzZiONr6CrfrxTKRW7TUtV43G2d3a3Yaq7saMGWXowtoqlxAY6pgH%2Bj%2F81Rmz8%2FJs3fhl8%2Bv4petyFQxb7NIpilHdzEMR5ieEOmiBESa8liSmk64YA9dX1eWGvBHant8cL67qZtMjvOw8BmkkJJ41H4HasWtGJQ3Q3Rax4pQyZ5kUXYGe60hJfVU3GGhAAkrDKIpKpvpsp1cSaSh2O84whVPbiGV%2BHd8O0Ort7x%2Be0%2FnQou22k2106OPNTkfvNJ%2BAyzPWgidES2QUrNpPd&X-Amz-Signature=4ded9fc456d97ffe15b65c22c865903954c569ac416a44630418c047cc389876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEY3LBN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFySqTyZYB%2BT8i%2ByNit9zgGv6TWzyk8A6DIhayHhQxhMAiALzCKBHkL6AIoURZqgrPHVSXaE4HJytNuHfqtnpM96ByqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfKlhjdkys4TEBXhKtwDACtBL%2BG5gFcRI1cl%2BnUEay2WOlaQBoMTOy%2B1kJdQCuTdSGDjJ7aPyjsXj1RWDWpTwPGtkXJaFYcBEbAYmhAoO370HRwUtQ3%2BJCpr359q3bSzwWjh%2F61gn7NKrZz6W9LVXMgsa4BEAXOw4cpPUc4fNeXW0Hgr8vmSbjH40HfXaMA91H%2FQYmquy6bMu3Rjaeh6PjYrkIvgJRxDKWy3nZmChTo7FiyinZgObud3npTcwFRoDgLt2%2FOrd7IQPtjmKCxO%2Bfey6lE7UI0N5QR4qpdMsRdZ77dwt34c5G4yhWHLDX8DQyo5U%2BNkZFyaw0Vf9QpuXsPCLJBT2sr0uHOvutLEpmcKOrjHIfHPyI1iQmpJgONtYgv8DslXEnljkV6iNzzU6OTu8DZERHLylFNaRvzjG1U9WNVJTFe3CyoOQXwQprJiqUk4TAjGQCNTgrQWaKJzTNcgY59xbpLDQeENH6T2Aiu2tIfG5lDiu6PSzIsoq1oMkmvXdOvn2Ugwa%2FU45MqNy34CzNJOtY7P5p2n8dn%2FEsn3HqClZG7aFJzOrecEDzN5rLz65NYsYEafLMc478hY%2BNex21zl4koOp3ZjN9wzZiONr6CrfrxTKRW7TUtV43G2d3a3Yaq7saMGWXowtoqlxAY6pgH%2Bj%2F81Rmz8%2FJs3fhl8%2Bv4petyFQxb7NIpilHdzEMR5ieEOmiBESa8liSmk64YA9dX1eWGvBHant8cL67qZtMjvOw8BmkkJJ41H4HasWtGJQ3Q3Rax4pQyZ5kUXYGe60hJfVU3GGhAAkrDKIpKpvpsp1cSaSh2O84whVPbiGV%2BHd8O0Ort7x%2Be0%2FnQou22k2106OPNTkfvNJ%2BAyzPWgidES2QUrNpPd&X-Amz-Signature=9116c869b86ba3352a761067b45916e5eff2bd03865df310a3ed2ab1d29f1349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEY3LBN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFySqTyZYB%2BT8i%2ByNit9zgGv6TWzyk8A6DIhayHhQxhMAiALzCKBHkL6AIoURZqgrPHVSXaE4HJytNuHfqtnpM96ByqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfKlhjdkys4TEBXhKtwDACtBL%2BG5gFcRI1cl%2BnUEay2WOlaQBoMTOy%2B1kJdQCuTdSGDjJ7aPyjsXj1RWDWpTwPGtkXJaFYcBEbAYmhAoO370HRwUtQ3%2BJCpr359q3bSzwWjh%2F61gn7NKrZz6W9LVXMgsa4BEAXOw4cpPUc4fNeXW0Hgr8vmSbjH40HfXaMA91H%2FQYmquy6bMu3Rjaeh6PjYrkIvgJRxDKWy3nZmChTo7FiyinZgObud3npTcwFRoDgLt2%2FOrd7IQPtjmKCxO%2Bfey6lE7UI0N5QR4qpdMsRdZ77dwt34c5G4yhWHLDX8DQyo5U%2BNkZFyaw0Vf9QpuXsPCLJBT2sr0uHOvutLEpmcKOrjHIfHPyI1iQmpJgONtYgv8DslXEnljkV6iNzzU6OTu8DZERHLylFNaRvzjG1U9WNVJTFe3CyoOQXwQprJiqUk4TAjGQCNTgrQWaKJzTNcgY59xbpLDQeENH6T2Aiu2tIfG5lDiu6PSzIsoq1oMkmvXdOvn2Ugwa%2FU45MqNy34CzNJOtY7P5p2n8dn%2FEsn3HqClZG7aFJzOrecEDzN5rLz65NYsYEafLMc478hY%2BNex21zl4koOp3ZjN9wzZiONr6CrfrxTKRW7TUtV43G2d3a3Yaq7saMGWXowtoqlxAY6pgH%2Bj%2F81Rmz8%2FJs3fhl8%2Bv4petyFQxb7NIpilHdzEMR5ieEOmiBESa8liSmk64YA9dX1eWGvBHant8cL67qZtMjvOw8BmkkJJ41H4HasWtGJQ3Q3Rax4pQyZ5kUXYGe60hJfVU3GGhAAkrDKIpKpvpsp1cSaSh2O84whVPbiGV%2BHd8O0Ort7x%2Be0%2FnQou22k2106OPNTkfvNJ%2BAyzPWgidES2QUrNpPd&X-Amz-Signature=c8145a6972aed0f74dffe1fd5c1dc507f58aa7c8ae32b3be65efc55c1331c8f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEY3LBN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFySqTyZYB%2BT8i%2ByNit9zgGv6TWzyk8A6DIhayHhQxhMAiALzCKBHkL6AIoURZqgrPHVSXaE4HJytNuHfqtnpM96ByqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfKlhjdkys4TEBXhKtwDACtBL%2BG5gFcRI1cl%2BnUEay2WOlaQBoMTOy%2B1kJdQCuTdSGDjJ7aPyjsXj1RWDWpTwPGtkXJaFYcBEbAYmhAoO370HRwUtQ3%2BJCpr359q3bSzwWjh%2F61gn7NKrZz6W9LVXMgsa4BEAXOw4cpPUc4fNeXW0Hgr8vmSbjH40HfXaMA91H%2FQYmquy6bMu3Rjaeh6PjYrkIvgJRxDKWy3nZmChTo7FiyinZgObud3npTcwFRoDgLt2%2FOrd7IQPtjmKCxO%2Bfey6lE7UI0N5QR4qpdMsRdZ77dwt34c5G4yhWHLDX8DQyo5U%2BNkZFyaw0Vf9QpuXsPCLJBT2sr0uHOvutLEpmcKOrjHIfHPyI1iQmpJgONtYgv8DslXEnljkV6iNzzU6OTu8DZERHLylFNaRvzjG1U9WNVJTFe3CyoOQXwQprJiqUk4TAjGQCNTgrQWaKJzTNcgY59xbpLDQeENH6T2Aiu2tIfG5lDiu6PSzIsoq1oMkmvXdOvn2Ugwa%2FU45MqNy34CzNJOtY7P5p2n8dn%2FEsn3HqClZG7aFJzOrecEDzN5rLz65NYsYEafLMc478hY%2BNex21zl4koOp3ZjN9wzZiONr6CrfrxTKRW7TUtV43G2d3a3Yaq7saMGWXowtoqlxAY6pgH%2Bj%2F81Rmz8%2FJs3fhl8%2Bv4petyFQxb7NIpilHdzEMR5ieEOmiBESa8liSmk64YA9dX1eWGvBHant8cL67qZtMjvOw8BmkkJJ41H4HasWtGJQ3Q3Rax4pQyZ5kUXYGe60hJfVU3GGhAAkrDKIpKpvpsp1cSaSh2O84whVPbiGV%2BHd8O0Ort7x%2Be0%2FnQou22k2106OPNTkfvNJ%2BAyzPWgidES2QUrNpPd&X-Amz-Signature=0daea4a189ab0a7a1a40bea6a807374c99b977bef4224e83c749f1cebb2f073b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
