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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGJJX6B%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEQDFcNbaEuw%2BZ9libdrq6TkTohD1YSxdjKMo9DZhqjAiBTUNTVNK4%2B7cnKlSJcfu%2FTQ%2F2%2FcBkZc2Dp765oBUfz9yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9VaNboREs%2Bj5XxCRKtwD2DxxCwWGRYXTeD1Cq3tsMl4OfGeu2KoQPZ0kD9XCN%2F2x2vOh6VFBveebS%2BET0PtlLZ6qNX9p4HykXEd05%2BpxIAVx0tnVXfTTlWkQWTGdAnSpWjcAcQTWpy%2BXSZtOQabNj%2FAscADLLhQuxLi5dsfgq5drmlBcPn5xxlqTubqz7tML9jGcjvIyvceajWxU2ViSFaSeaCLiAhdCDeAMEEj1kszuQciCZQ%2BAlLPYB2MVKLFVEqwGWrp%2Fff5SjPrizpoyVlWWXhvUHNvDSMT9o3o6bXuvWD6Qgw2KwpSi3qq%2BidZt0Ek20x9s9GaLi2vjpPVK8ukLdhVzJoBfbUVrEuednTTtA2lafWr9nPmNGqL1qZIkMp%2BeXL7%2B1HIIX0D3%2B4W1bH2YXu%2B4gwgLFfZEcmSP24bAgu8m0xB8RPMtNo%2B%2BdXkhHbRHFeTd0EzSs6sLtc%2F2iIeCX3ayYnNWwwvsnKEFGYgFSKwN4hzCk6HaonMjvv13pgGv4IFlToatPX6BhQgGUZRsBhrahPIse3bov%2B6phF%2B3fJMgmdC5j3oQ6qAw5VWvj1KpUnsz9gwm28gNfAZ966gOtM2iZdpWtNXfrCRoN55pYXfcXc8B%2B0oXzJ4DLkL9%2Bv7ncCN%2BPja0vicwrK6kxAY6pgFxpHgIVN3a0ANMcgUytP9PUcwhiJvu53d1MIz6XAOSnlBU3UNqb6cn3zrjmgunLJ9YLUxexjMX26Bg62UDxzNdCbN40A1VceXrr1fcuYeRowX9sLMz5tyeXJ7VRMZsgUxRkcW6rP2jPeBvkOkWrbgkha1iiNFjIeXhYGTLRlvXgK%2BrUeC6YWTRUkALi8bsxWlVMJwo7pqSm%2FCZuvtjvdLulgptEWCy&X-Amz-Signature=16f40af2daeed3907e0960893b1781a550a8c649d69536fd7939a3d10d9e0c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGJJX6B%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEQDFcNbaEuw%2BZ9libdrq6TkTohD1YSxdjKMo9DZhqjAiBTUNTVNK4%2B7cnKlSJcfu%2FTQ%2F2%2FcBkZc2Dp765oBUfz9yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9VaNboREs%2Bj5XxCRKtwD2DxxCwWGRYXTeD1Cq3tsMl4OfGeu2KoQPZ0kD9XCN%2F2x2vOh6VFBveebS%2BET0PtlLZ6qNX9p4HykXEd05%2BpxIAVx0tnVXfTTlWkQWTGdAnSpWjcAcQTWpy%2BXSZtOQabNj%2FAscADLLhQuxLi5dsfgq5drmlBcPn5xxlqTubqz7tML9jGcjvIyvceajWxU2ViSFaSeaCLiAhdCDeAMEEj1kszuQciCZQ%2BAlLPYB2MVKLFVEqwGWrp%2Fff5SjPrizpoyVlWWXhvUHNvDSMT9o3o6bXuvWD6Qgw2KwpSi3qq%2BidZt0Ek20x9s9GaLi2vjpPVK8ukLdhVzJoBfbUVrEuednTTtA2lafWr9nPmNGqL1qZIkMp%2BeXL7%2B1HIIX0D3%2B4W1bH2YXu%2B4gwgLFfZEcmSP24bAgu8m0xB8RPMtNo%2B%2BdXkhHbRHFeTd0EzSs6sLtc%2F2iIeCX3ayYnNWwwvsnKEFGYgFSKwN4hzCk6HaonMjvv13pgGv4IFlToatPX6BhQgGUZRsBhrahPIse3bov%2B6phF%2B3fJMgmdC5j3oQ6qAw5VWvj1KpUnsz9gwm28gNfAZ966gOtM2iZdpWtNXfrCRoN55pYXfcXc8B%2B0oXzJ4DLkL9%2Bv7ncCN%2BPja0vicwrK6kxAY6pgFxpHgIVN3a0ANMcgUytP9PUcwhiJvu53d1MIz6XAOSnlBU3UNqb6cn3zrjmgunLJ9YLUxexjMX26Bg62UDxzNdCbN40A1VceXrr1fcuYeRowX9sLMz5tyeXJ7VRMZsgUxRkcW6rP2jPeBvkOkWrbgkha1iiNFjIeXhYGTLRlvXgK%2BrUeC6YWTRUkALi8bsxWlVMJwo7pqSm%2FCZuvtjvdLulgptEWCy&X-Amz-Signature=7df16584e4a52ac1d18a954bc14f0a553e8a86061af8b2dfaf6309f5a58deead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGJJX6B%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEQDFcNbaEuw%2BZ9libdrq6TkTohD1YSxdjKMo9DZhqjAiBTUNTVNK4%2B7cnKlSJcfu%2FTQ%2F2%2FcBkZc2Dp765oBUfz9yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9VaNboREs%2Bj5XxCRKtwD2DxxCwWGRYXTeD1Cq3tsMl4OfGeu2KoQPZ0kD9XCN%2F2x2vOh6VFBveebS%2BET0PtlLZ6qNX9p4HykXEd05%2BpxIAVx0tnVXfTTlWkQWTGdAnSpWjcAcQTWpy%2BXSZtOQabNj%2FAscADLLhQuxLi5dsfgq5drmlBcPn5xxlqTubqz7tML9jGcjvIyvceajWxU2ViSFaSeaCLiAhdCDeAMEEj1kszuQciCZQ%2BAlLPYB2MVKLFVEqwGWrp%2Fff5SjPrizpoyVlWWXhvUHNvDSMT9o3o6bXuvWD6Qgw2KwpSi3qq%2BidZt0Ek20x9s9GaLi2vjpPVK8ukLdhVzJoBfbUVrEuednTTtA2lafWr9nPmNGqL1qZIkMp%2BeXL7%2B1HIIX0D3%2B4W1bH2YXu%2B4gwgLFfZEcmSP24bAgu8m0xB8RPMtNo%2B%2BdXkhHbRHFeTd0EzSs6sLtc%2F2iIeCX3ayYnNWwwvsnKEFGYgFSKwN4hzCk6HaonMjvv13pgGv4IFlToatPX6BhQgGUZRsBhrahPIse3bov%2B6phF%2B3fJMgmdC5j3oQ6qAw5VWvj1KpUnsz9gwm28gNfAZ966gOtM2iZdpWtNXfrCRoN55pYXfcXc8B%2B0oXzJ4DLkL9%2Bv7ncCN%2BPja0vicwrK6kxAY6pgFxpHgIVN3a0ANMcgUytP9PUcwhiJvu53d1MIz6XAOSnlBU3UNqb6cn3zrjmgunLJ9YLUxexjMX26Bg62UDxzNdCbN40A1VceXrr1fcuYeRowX9sLMz5tyeXJ7VRMZsgUxRkcW6rP2jPeBvkOkWrbgkha1iiNFjIeXhYGTLRlvXgK%2BrUeC6YWTRUkALi8bsxWlVMJwo7pqSm%2FCZuvtjvdLulgptEWCy&X-Amz-Signature=5278587a43609accbee48b287f6bafe7fddb96f5284c0cc7013c9e2fb29b7c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGJJX6B%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEQDFcNbaEuw%2BZ9libdrq6TkTohD1YSxdjKMo9DZhqjAiBTUNTVNK4%2B7cnKlSJcfu%2FTQ%2F2%2FcBkZc2Dp765oBUfz9yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9VaNboREs%2Bj5XxCRKtwD2DxxCwWGRYXTeD1Cq3tsMl4OfGeu2KoQPZ0kD9XCN%2F2x2vOh6VFBveebS%2BET0PtlLZ6qNX9p4HykXEd05%2BpxIAVx0tnVXfTTlWkQWTGdAnSpWjcAcQTWpy%2BXSZtOQabNj%2FAscADLLhQuxLi5dsfgq5drmlBcPn5xxlqTubqz7tML9jGcjvIyvceajWxU2ViSFaSeaCLiAhdCDeAMEEj1kszuQciCZQ%2BAlLPYB2MVKLFVEqwGWrp%2Fff5SjPrizpoyVlWWXhvUHNvDSMT9o3o6bXuvWD6Qgw2KwpSi3qq%2BidZt0Ek20x9s9GaLi2vjpPVK8ukLdhVzJoBfbUVrEuednTTtA2lafWr9nPmNGqL1qZIkMp%2BeXL7%2B1HIIX0D3%2B4W1bH2YXu%2B4gwgLFfZEcmSP24bAgu8m0xB8RPMtNo%2B%2BdXkhHbRHFeTd0EzSs6sLtc%2F2iIeCX3ayYnNWwwvsnKEFGYgFSKwN4hzCk6HaonMjvv13pgGv4IFlToatPX6BhQgGUZRsBhrahPIse3bov%2B6phF%2B3fJMgmdC5j3oQ6qAw5VWvj1KpUnsz9gwm28gNfAZ966gOtM2iZdpWtNXfrCRoN55pYXfcXc8B%2B0oXzJ4DLkL9%2Bv7ncCN%2BPja0vicwrK6kxAY6pgFxpHgIVN3a0ANMcgUytP9PUcwhiJvu53d1MIz6XAOSnlBU3UNqb6cn3zrjmgunLJ9YLUxexjMX26Bg62UDxzNdCbN40A1VceXrr1fcuYeRowX9sLMz5tyeXJ7VRMZsgUxRkcW6rP2jPeBvkOkWrbgkha1iiNFjIeXhYGTLRlvXgK%2BrUeC6YWTRUkALi8bsxWlVMJwo7pqSm%2FCZuvtjvdLulgptEWCy&X-Amz-Signature=11aa3dbbda402f03853dd90797ba1648f026ad6bc1f458087e8914377955b973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGJJX6B%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEQDFcNbaEuw%2BZ9libdrq6TkTohD1YSxdjKMo9DZhqjAiBTUNTVNK4%2B7cnKlSJcfu%2FTQ%2F2%2FcBkZc2Dp765oBUfz9yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9VaNboREs%2Bj5XxCRKtwD2DxxCwWGRYXTeD1Cq3tsMl4OfGeu2KoQPZ0kD9XCN%2F2x2vOh6VFBveebS%2BET0PtlLZ6qNX9p4HykXEd05%2BpxIAVx0tnVXfTTlWkQWTGdAnSpWjcAcQTWpy%2BXSZtOQabNj%2FAscADLLhQuxLi5dsfgq5drmlBcPn5xxlqTubqz7tML9jGcjvIyvceajWxU2ViSFaSeaCLiAhdCDeAMEEj1kszuQciCZQ%2BAlLPYB2MVKLFVEqwGWrp%2Fff5SjPrizpoyVlWWXhvUHNvDSMT9o3o6bXuvWD6Qgw2KwpSi3qq%2BidZt0Ek20x9s9GaLi2vjpPVK8ukLdhVzJoBfbUVrEuednTTtA2lafWr9nPmNGqL1qZIkMp%2BeXL7%2B1HIIX0D3%2B4W1bH2YXu%2B4gwgLFfZEcmSP24bAgu8m0xB8RPMtNo%2B%2BdXkhHbRHFeTd0EzSs6sLtc%2F2iIeCX3ayYnNWwwvsnKEFGYgFSKwN4hzCk6HaonMjvv13pgGv4IFlToatPX6BhQgGUZRsBhrahPIse3bov%2B6phF%2B3fJMgmdC5j3oQ6qAw5VWvj1KpUnsz9gwm28gNfAZ966gOtM2iZdpWtNXfrCRoN55pYXfcXc8B%2B0oXzJ4DLkL9%2Bv7ncCN%2BPja0vicwrK6kxAY6pgFxpHgIVN3a0ANMcgUytP9PUcwhiJvu53d1MIz6XAOSnlBU3UNqb6cn3zrjmgunLJ9YLUxexjMX26Bg62UDxzNdCbN40A1VceXrr1fcuYeRowX9sLMz5tyeXJ7VRMZsgUxRkcW6rP2jPeBvkOkWrbgkha1iiNFjIeXhYGTLRlvXgK%2BrUeC6YWTRUkALi8bsxWlVMJwo7pqSm%2FCZuvtjvdLulgptEWCy&X-Amz-Signature=8a518a9bb7a474f54f06704ad10bb7d516ebdbc1428b5af0fcad27273f72c0f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGJJX6B%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEQDFcNbaEuw%2BZ9libdrq6TkTohD1YSxdjKMo9DZhqjAiBTUNTVNK4%2B7cnKlSJcfu%2FTQ%2F2%2FcBkZc2Dp765oBUfz9yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9VaNboREs%2Bj5XxCRKtwD2DxxCwWGRYXTeD1Cq3tsMl4OfGeu2KoQPZ0kD9XCN%2F2x2vOh6VFBveebS%2BET0PtlLZ6qNX9p4HykXEd05%2BpxIAVx0tnVXfTTlWkQWTGdAnSpWjcAcQTWpy%2BXSZtOQabNj%2FAscADLLhQuxLi5dsfgq5drmlBcPn5xxlqTubqz7tML9jGcjvIyvceajWxU2ViSFaSeaCLiAhdCDeAMEEj1kszuQciCZQ%2BAlLPYB2MVKLFVEqwGWrp%2Fff5SjPrizpoyVlWWXhvUHNvDSMT9o3o6bXuvWD6Qgw2KwpSi3qq%2BidZt0Ek20x9s9GaLi2vjpPVK8ukLdhVzJoBfbUVrEuednTTtA2lafWr9nPmNGqL1qZIkMp%2BeXL7%2B1HIIX0D3%2B4W1bH2YXu%2B4gwgLFfZEcmSP24bAgu8m0xB8RPMtNo%2B%2BdXkhHbRHFeTd0EzSs6sLtc%2F2iIeCX3ayYnNWwwvsnKEFGYgFSKwN4hzCk6HaonMjvv13pgGv4IFlToatPX6BhQgGUZRsBhrahPIse3bov%2B6phF%2B3fJMgmdC5j3oQ6qAw5VWvj1KpUnsz9gwm28gNfAZ966gOtM2iZdpWtNXfrCRoN55pYXfcXc8B%2B0oXzJ4DLkL9%2Bv7ncCN%2BPja0vicwrK6kxAY6pgFxpHgIVN3a0ANMcgUytP9PUcwhiJvu53d1MIz6XAOSnlBU3UNqb6cn3zrjmgunLJ9YLUxexjMX26Bg62UDxzNdCbN40A1VceXrr1fcuYeRowX9sLMz5tyeXJ7VRMZsgUxRkcW6rP2jPeBvkOkWrbgkha1iiNFjIeXhYGTLRlvXgK%2BrUeC6YWTRUkALi8bsxWlVMJwo7pqSm%2FCZuvtjvdLulgptEWCy&X-Amz-Signature=d23c6d1d06832d88517ebd803b4ed23f56ee5f6f1500ddf6a77e404f52ec3e0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGJJX6B%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEQDFcNbaEuw%2BZ9libdrq6TkTohD1YSxdjKMo9DZhqjAiBTUNTVNK4%2B7cnKlSJcfu%2FTQ%2F2%2FcBkZc2Dp765oBUfz9yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9VaNboREs%2Bj5XxCRKtwD2DxxCwWGRYXTeD1Cq3tsMl4OfGeu2KoQPZ0kD9XCN%2F2x2vOh6VFBveebS%2BET0PtlLZ6qNX9p4HykXEd05%2BpxIAVx0tnVXfTTlWkQWTGdAnSpWjcAcQTWpy%2BXSZtOQabNj%2FAscADLLhQuxLi5dsfgq5drmlBcPn5xxlqTubqz7tML9jGcjvIyvceajWxU2ViSFaSeaCLiAhdCDeAMEEj1kszuQciCZQ%2BAlLPYB2MVKLFVEqwGWrp%2Fff5SjPrizpoyVlWWXhvUHNvDSMT9o3o6bXuvWD6Qgw2KwpSi3qq%2BidZt0Ek20x9s9GaLi2vjpPVK8ukLdhVzJoBfbUVrEuednTTtA2lafWr9nPmNGqL1qZIkMp%2BeXL7%2B1HIIX0D3%2B4W1bH2YXu%2B4gwgLFfZEcmSP24bAgu8m0xB8RPMtNo%2B%2BdXkhHbRHFeTd0EzSs6sLtc%2F2iIeCX3ayYnNWwwvsnKEFGYgFSKwN4hzCk6HaonMjvv13pgGv4IFlToatPX6BhQgGUZRsBhrahPIse3bov%2B6phF%2B3fJMgmdC5j3oQ6qAw5VWvj1KpUnsz9gwm28gNfAZ966gOtM2iZdpWtNXfrCRoN55pYXfcXc8B%2B0oXzJ4DLkL9%2Bv7ncCN%2BPja0vicwrK6kxAY6pgFxpHgIVN3a0ANMcgUytP9PUcwhiJvu53d1MIz6XAOSnlBU3UNqb6cn3zrjmgunLJ9YLUxexjMX26Bg62UDxzNdCbN40A1VceXrr1fcuYeRowX9sLMz5tyeXJ7VRMZsgUxRkcW6rP2jPeBvkOkWrbgkha1iiNFjIeXhYGTLRlvXgK%2BrUeC6YWTRUkALi8bsxWlVMJwo7pqSm%2FCZuvtjvdLulgptEWCy&X-Amz-Signature=5a457adb348322316869de2cbad2ccb3326e9a424ceedddc8582b1cc73e0893a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGJJX6B%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEQDFcNbaEuw%2BZ9libdrq6TkTohD1YSxdjKMo9DZhqjAiBTUNTVNK4%2B7cnKlSJcfu%2FTQ%2F2%2FcBkZc2Dp765oBUfz9yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9VaNboREs%2Bj5XxCRKtwD2DxxCwWGRYXTeD1Cq3tsMl4OfGeu2KoQPZ0kD9XCN%2F2x2vOh6VFBveebS%2BET0PtlLZ6qNX9p4HykXEd05%2BpxIAVx0tnVXfTTlWkQWTGdAnSpWjcAcQTWpy%2BXSZtOQabNj%2FAscADLLhQuxLi5dsfgq5drmlBcPn5xxlqTubqz7tML9jGcjvIyvceajWxU2ViSFaSeaCLiAhdCDeAMEEj1kszuQciCZQ%2BAlLPYB2MVKLFVEqwGWrp%2Fff5SjPrizpoyVlWWXhvUHNvDSMT9o3o6bXuvWD6Qgw2KwpSi3qq%2BidZt0Ek20x9s9GaLi2vjpPVK8ukLdhVzJoBfbUVrEuednTTtA2lafWr9nPmNGqL1qZIkMp%2BeXL7%2B1HIIX0D3%2B4W1bH2YXu%2B4gwgLFfZEcmSP24bAgu8m0xB8RPMtNo%2B%2BdXkhHbRHFeTd0EzSs6sLtc%2F2iIeCX3ayYnNWwwvsnKEFGYgFSKwN4hzCk6HaonMjvv13pgGv4IFlToatPX6BhQgGUZRsBhrahPIse3bov%2B6phF%2B3fJMgmdC5j3oQ6qAw5VWvj1KpUnsz9gwm28gNfAZ966gOtM2iZdpWtNXfrCRoN55pYXfcXc8B%2B0oXzJ4DLkL9%2Bv7ncCN%2BPja0vicwrK6kxAY6pgFxpHgIVN3a0ANMcgUytP9PUcwhiJvu53d1MIz6XAOSnlBU3UNqb6cn3zrjmgunLJ9YLUxexjMX26Bg62UDxzNdCbN40A1VceXrr1fcuYeRowX9sLMz5tyeXJ7VRMZsgUxRkcW6rP2jPeBvkOkWrbgkha1iiNFjIeXhYGTLRlvXgK%2BrUeC6YWTRUkALi8bsxWlVMJwo7pqSm%2FCZuvtjvdLulgptEWCy&X-Amz-Signature=b68d11578ebc96bd887259557c91bd2384bce473c6e028e87b570f75fbc49699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGJJX6B%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEQDFcNbaEuw%2BZ9libdrq6TkTohD1YSxdjKMo9DZhqjAiBTUNTVNK4%2B7cnKlSJcfu%2FTQ%2F2%2FcBkZc2Dp765oBUfz9yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9VaNboREs%2Bj5XxCRKtwD2DxxCwWGRYXTeD1Cq3tsMl4OfGeu2KoQPZ0kD9XCN%2F2x2vOh6VFBveebS%2BET0PtlLZ6qNX9p4HykXEd05%2BpxIAVx0tnVXfTTlWkQWTGdAnSpWjcAcQTWpy%2BXSZtOQabNj%2FAscADLLhQuxLi5dsfgq5drmlBcPn5xxlqTubqz7tML9jGcjvIyvceajWxU2ViSFaSeaCLiAhdCDeAMEEj1kszuQciCZQ%2BAlLPYB2MVKLFVEqwGWrp%2Fff5SjPrizpoyVlWWXhvUHNvDSMT9o3o6bXuvWD6Qgw2KwpSi3qq%2BidZt0Ek20x9s9GaLi2vjpPVK8ukLdhVzJoBfbUVrEuednTTtA2lafWr9nPmNGqL1qZIkMp%2BeXL7%2B1HIIX0D3%2B4W1bH2YXu%2B4gwgLFfZEcmSP24bAgu8m0xB8RPMtNo%2B%2BdXkhHbRHFeTd0EzSs6sLtc%2F2iIeCX3ayYnNWwwvsnKEFGYgFSKwN4hzCk6HaonMjvv13pgGv4IFlToatPX6BhQgGUZRsBhrahPIse3bov%2B6phF%2B3fJMgmdC5j3oQ6qAw5VWvj1KpUnsz9gwm28gNfAZ966gOtM2iZdpWtNXfrCRoN55pYXfcXc8B%2B0oXzJ4DLkL9%2Bv7ncCN%2BPja0vicwrK6kxAY6pgFxpHgIVN3a0ANMcgUytP9PUcwhiJvu53d1MIz6XAOSnlBU3UNqb6cn3zrjmgunLJ9YLUxexjMX26Bg62UDxzNdCbN40A1VceXrr1fcuYeRowX9sLMz5tyeXJ7VRMZsgUxRkcW6rP2jPeBvkOkWrbgkha1iiNFjIeXhYGTLRlvXgK%2BrUeC6YWTRUkALi8bsxWlVMJwo7pqSm%2FCZuvtjvdLulgptEWCy&X-Amz-Signature=1962b3f4b094b161ab4aa5c577ef4cccfd68fe974dce635d5a04a893e0108e70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGJJX6B%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEQDFcNbaEuw%2BZ9libdrq6TkTohD1YSxdjKMo9DZhqjAiBTUNTVNK4%2B7cnKlSJcfu%2FTQ%2F2%2FcBkZc2Dp765oBUfz9yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9VaNboREs%2Bj5XxCRKtwD2DxxCwWGRYXTeD1Cq3tsMl4OfGeu2KoQPZ0kD9XCN%2F2x2vOh6VFBveebS%2BET0PtlLZ6qNX9p4HykXEd05%2BpxIAVx0tnVXfTTlWkQWTGdAnSpWjcAcQTWpy%2BXSZtOQabNj%2FAscADLLhQuxLi5dsfgq5drmlBcPn5xxlqTubqz7tML9jGcjvIyvceajWxU2ViSFaSeaCLiAhdCDeAMEEj1kszuQciCZQ%2BAlLPYB2MVKLFVEqwGWrp%2Fff5SjPrizpoyVlWWXhvUHNvDSMT9o3o6bXuvWD6Qgw2KwpSi3qq%2BidZt0Ek20x9s9GaLi2vjpPVK8ukLdhVzJoBfbUVrEuednTTtA2lafWr9nPmNGqL1qZIkMp%2BeXL7%2B1HIIX0D3%2B4W1bH2YXu%2B4gwgLFfZEcmSP24bAgu8m0xB8RPMtNo%2B%2BdXkhHbRHFeTd0EzSs6sLtc%2F2iIeCX3ayYnNWwwvsnKEFGYgFSKwN4hzCk6HaonMjvv13pgGv4IFlToatPX6BhQgGUZRsBhrahPIse3bov%2B6phF%2B3fJMgmdC5j3oQ6qAw5VWvj1KpUnsz9gwm28gNfAZ966gOtM2iZdpWtNXfrCRoN55pYXfcXc8B%2B0oXzJ4DLkL9%2Bv7ncCN%2BPja0vicwrK6kxAY6pgFxpHgIVN3a0ANMcgUytP9PUcwhiJvu53d1MIz6XAOSnlBU3UNqb6cn3zrjmgunLJ9YLUxexjMX26Bg62UDxzNdCbN40A1VceXrr1fcuYeRowX9sLMz5tyeXJ7VRMZsgUxRkcW6rP2jPeBvkOkWrbgkha1iiNFjIeXhYGTLRlvXgK%2BrUeC6YWTRUkALi8bsxWlVMJwo7pqSm%2FCZuvtjvdLulgptEWCy&X-Amz-Signature=7b8a59921463363aa199c776b8373d0fd9da59a2f87e5715343544197b2ddc44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGJJX6B%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEQDFcNbaEuw%2BZ9libdrq6TkTohD1YSxdjKMo9DZhqjAiBTUNTVNK4%2B7cnKlSJcfu%2FTQ%2F2%2FcBkZc2Dp765oBUfz9yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9VaNboREs%2Bj5XxCRKtwD2DxxCwWGRYXTeD1Cq3tsMl4OfGeu2KoQPZ0kD9XCN%2F2x2vOh6VFBveebS%2BET0PtlLZ6qNX9p4HykXEd05%2BpxIAVx0tnVXfTTlWkQWTGdAnSpWjcAcQTWpy%2BXSZtOQabNj%2FAscADLLhQuxLi5dsfgq5drmlBcPn5xxlqTubqz7tML9jGcjvIyvceajWxU2ViSFaSeaCLiAhdCDeAMEEj1kszuQciCZQ%2BAlLPYB2MVKLFVEqwGWrp%2Fff5SjPrizpoyVlWWXhvUHNvDSMT9o3o6bXuvWD6Qgw2KwpSi3qq%2BidZt0Ek20x9s9GaLi2vjpPVK8ukLdhVzJoBfbUVrEuednTTtA2lafWr9nPmNGqL1qZIkMp%2BeXL7%2B1HIIX0D3%2B4W1bH2YXu%2B4gwgLFfZEcmSP24bAgu8m0xB8RPMtNo%2B%2BdXkhHbRHFeTd0EzSs6sLtc%2F2iIeCX3ayYnNWwwvsnKEFGYgFSKwN4hzCk6HaonMjvv13pgGv4IFlToatPX6BhQgGUZRsBhrahPIse3bov%2B6phF%2B3fJMgmdC5j3oQ6qAw5VWvj1KpUnsz9gwm28gNfAZ966gOtM2iZdpWtNXfrCRoN55pYXfcXc8B%2B0oXzJ4DLkL9%2Bv7ncCN%2BPja0vicwrK6kxAY6pgFxpHgIVN3a0ANMcgUytP9PUcwhiJvu53d1MIz6XAOSnlBU3UNqb6cn3zrjmgunLJ9YLUxexjMX26Bg62UDxzNdCbN40A1VceXrr1fcuYeRowX9sLMz5tyeXJ7VRMZsgUxRkcW6rP2jPeBvkOkWrbgkha1iiNFjIeXhYGTLRlvXgK%2BrUeC6YWTRUkALi8bsxWlVMJwo7pqSm%2FCZuvtjvdLulgptEWCy&X-Amz-Signature=6957c603f7ff1acc612fe27ba9e08889fa32e5f1e972950c54bb0c6098aae595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGJJX6B%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEQDFcNbaEuw%2BZ9libdrq6TkTohD1YSxdjKMo9DZhqjAiBTUNTVNK4%2B7cnKlSJcfu%2FTQ%2F2%2FcBkZc2Dp765oBUfz9yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9VaNboREs%2Bj5XxCRKtwD2DxxCwWGRYXTeD1Cq3tsMl4OfGeu2KoQPZ0kD9XCN%2F2x2vOh6VFBveebS%2BET0PtlLZ6qNX9p4HykXEd05%2BpxIAVx0tnVXfTTlWkQWTGdAnSpWjcAcQTWpy%2BXSZtOQabNj%2FAscADLLhQuxLi5dsfgq5drmlBcPn5xxlqTubqz7tML9jGcjvIyvceajWxU2ViSFaSeaCLiAhdCDeAMEEj1kszuQciCZQ%2BAlLPYB2MVKLFVEqwGWrp%2Fff5SjPrizpoyVlWWXhvUHNvDSMT9o3o6bXuvWD6Qgw2KwpSi3qq%2BidZt0Ek20x9s9GaLi2vjpPVK8ukLdhVzJoBfbUVrEuednTTtA2lafWr9nPmNGqL1qZIkMp%2BeXL7%2B1HIIX0D3%2B4W1bH2YXu%2B4gwgLFfZEcmSP24bAgu8m0xB8RPMtNo%2B%2BdXkhHbRHFeTd0EzSs6sLtc%2F2iIeCX3ayYnNWwwvsnKEFGYgFSKwN4hzCk6HaonMjvv13pgGv4IFlToatPX6BhQgGUZRsBhrahPIse3bov%2B6phF%2B3fJMgmdC5j3oQ6qAw5VWvj1KpUnsz9gwm28gNfAZ966gOtM2iZdpWtNXfrCRoN55pYXfcXc8B%2B0oXzJ4DLkL9%2Bv7ncCN%2BPja0vicwrK6kxAY6pgFxpHgIVN3a0ANMcgUytP9PUcwhiJvu53d1MIz6XAOSnlBU3UNqb6cn3zrjmgunLJ9YLUxexjMX26Bg62UDxzNdCbN40A1VceXrr1fcuYeRowX9sLMz5tyeXJ7VRMZsgUxRkcW6rP2jPeBvkOkWrbgkha1iiNFjIeXhYGTLRlvXgK%2BrUeC6YWTRUkALi8bsxWlVMJwo7pqSm%2FCZuvtjvdLulgptEWCy&X-Amz-Signature=20538346cbde4b3dff83652c242be334b0ad4d967452e371d600e5823484efb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGJJX6B%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEQDFcNbaEuw%2BZ9libdrq6TkTohD1YSxdjKMo9DZhqjAiBTUNTVNK4%2B7cnKlSJcfu%2FTQ%2F2%2FcBkZc2Dp765oBUfz9yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9VaNboREs%2Bj5XxCRKtwD2DxxCwWGRYXTeD1Cq3tsMl4OfGeu2KoQPZ0kD9XCN%2F2x2vOh6VFBveebS%2BET0PtlLZ6qNX9p4HykXEd05%2BpxIAVx0tnVXfTTlWkQWTGdAnSpWjcAcQTWpy%2BXSZtOQabNj%2FAscADLLhQuxLi5dsfgq5drmlBcPn5xxlqTubqz7tML9jGcjvIyvceajWxU2ViSFaSeaCLiAhdCDeAMEEj1kszuQciCZQ%2BAlLPYB2MVKLFVEqwGWrp%2Fff5SjPrizpoyVlWWXhvUHNvDSMT9o3o6bXuvWD6Qgw2KwpSi3qq%2BidZt0Ek20x9s9GaLi2vjpPVK8ukLdhVzJoBfbUVrEuednTTtA2lafWr9nPmNGqL1qZIkMp%2BeXL7%2B1HIIX0D3%2B4W1bH2YXu%2B4gwgLFfZEcmSP24bAgu8m0xB8RPMtNo%2B%2BdXkhHbRHFeTd0EzSs6sLtc%2F2iIeCX3ayYnNWwwvsnKEFGYgFSKwN4hzCk6HaonMjvv13pgGv4IFlToatPX6BhQgGUZRsBhrahPIse3bov%2B6phF%2B3fJMgmdC5j3oQ6qAw5VWvj1KpUnsz9gwm28gNfAZ966gOtM2iZdpWtNXfrCRoN55pYXfcXc8B%2B0oXzJ4DLkL9%2Bv7ncCN%2BPja0vicwrK6kxAY6pgFxpHgIVN3a0ANMcgUytP9PUcwhiJvu53d1MIz6XAOSnlBU3UNqb6cn3zrjmgunLJ9YLUxexjMX26Bg62UDxzNdCbN40A1VceXrr1fcuYeRowX9sLMz5tyeXJ7VRMZsgUxRkcW6rP2jPeBvkOkWrbgkha1iiNFjIeXhYGTLRlvXgK%2BrUeC6YWTRUkALi8bsxWlVMJwo7pqSm%2FCZuvtjvdLulgptEWCy&X-Amz-Signature=f5d7fe7cad462ce67f646b0938d91a449378cde29c970117905b1e724dc97e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGJJX6B%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEQDFcNbaEuw%2BZ9libdrq6TkTohD1YSxdjKMo9DZhqjAiBTUNTVNK4%2B7cnKlSJcfu%2FTQ%2F2%2FcBkZc2Dp765oBUfz9yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9VaNboREs%2Bj5XxCRKtwD2DxxCwWGRYXTeD1Cq3tsMl4OfGeu2KoQPZ0kD9XCN%2F2x2vOh6VFBveebS%2BET0PtlLZ6qNX9p4HykXEd05%2BpxIAVx0tnVXfTTlWkQWTGdAnSpWjcAcQTWpy%2BXSZtOQabNj%2FAscADLLhQuxLi5dsfgq5drmlBcPn5xxlqTubqz7tML9jGcjvIyvceajWxU2ViSFaSeaCLiAhdCDeAMEEj1kszuQciCZQ%2BAlLPYB2MVKLFVEqwGWrp%2Fff5SjPrizpoyVlWWXhvUHNvDSMT9o3o6bXuvWD6Qgw2KwpSi3qq%2BidZt0Ek20x9s9GaLi2vjpPVK8ukLdhVzJoBfbUVrEuednTTtA2lafWr9nPmNGqL1qZIkMp%2BeXL7%2B1HIIX0D3%2B4W1bH2YXu%2B4gwgLFfZEcmSP24bAgu8m0xB8RPMtNo%2B%2BdXkhHbRHFeTd0EzSs6sLtc%2F2iIeCX3ayYnNWwwvsnKEFGYgFSKwN4hzCk6HaonMjvv13pgGv4IFlToatPX6BhQgGUZRsBhrahPIse3bov%2B6phF%2B3fJMgmdC5j3oQ6qAw5VWvj1KpUnsz9gwm28gNfAZ966gOtM2iZdpWtNXfrCRoN55pYXfcXc8B%2B0oXzJ4DLkL9%2Bv7ncCN%2BPja0vicwrK6kxAY6pgFxpHgIVN3a0ANMcgUytP9PUcwhiJvu53d1MIz6XAOSnlBU3UNqb6cn3zrjmgunLJ9YLUxexjMX26Bg62UDxzNdCbN40A1VceXrr1fcuYeRowX9sLMz5tyeXJ7VRMZsgUxRkcW6rP2jPeBvkOkWrbgkha1iiNFjIeXhYGTLRlvXgK%2BrUeC6YWTRUkALi8bsxWlVMJwo7pqSm%2FCZuvtjvdLulgptEWCy&X-Amz-Signature=93ee040cc8efcc2737cccb1c686d56942839b8ffdab0ff7ed5f138c55301b9e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
