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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAPHFZB%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDVjoJPcm7pBCDBJVFPJgd9V482s4u%2FaZO5ZXwfH8SKNwIgI3xzgc5YbtkzBjESMJ3pyeuwo%2FS%2BwSgDjga%2BytUMheEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYaqkUxvBNkFgYhFircAyo8DuQNRb7vLTHE8Pse036ddWXq4EAVFb7576YD4rjKfZzXwXkuF4J4DPuuMP0SK7ugmY3EIpPE3Wtsmuy6vov7PXIfT5YTi8wkqvrgYUomAX9Urh1hBmbARlvXahj5SteFRKbT%2BoOaSNaU8rz1OAg6VuCyEZxJpOO5ZGWZ7hAibmjUiQoDnGtL%2BsTzYkHcssXNEo%2FGXMt%2Fz46t6JLT7V31StQKqVy%2BO5QtwVq6rWML9I6ZG0ND57BgBSZ8TcRVNIcI3Sanf9skixrNpUWN99klGoPmTG%2B8oZ7BZjTSuYWxpNNpdVoQANKeA9E1qeFOAN8AAnl7LwSuzOHqTG0Vu%2F7dUiunvgZoZbvFSEMlt01C7bJZPHRxI%2Fjv%2BQoMfW0AMCvm2QqjsPf8rjJCnZSx9XyEV01uwvqkKlYw3ZCeGKo1So6UtckojcipInPTm8K0veXQn7jRCT9ch01CLxdRTI97BirrE9KTZrXfPd0EePY%2BYO3ejEoNbqw%2BYCHXIpE0Lc09%2B2VrHOlSKsGnG1TyMibx7MLiTRYcyxseS%2Fnm3mCj2ycowTLoSaoW6a9X%2FM6UfWYxULfzwL1fDdSp6WnpcjHE2QX9jIw4wUiU%2BPK8GW9c4MUbyRjKQPlHlDjsMNS5xMgGOqUBKLrFv1z%2F397GtwnQWuufjhO89B%2B7%2F9PAsKwrtAQdhSoMAN89gw2O%2BqplWL%2BGil8%2Fqnnk%2BMZLo1WmWlIo0Rn5cNrVSO7IxAcWZysYvO%2FJMGFxFSTU16NE5ayLGk%2FVoAGCZfyemqrzzXLB3F5Yz6JJdp1xAPC6%2FzVB35%2FbDRUrl9%2FLOic%2FslAKGnrVJDtuY06ceSDu%2BzKG0t%2B9t6Lir9NLEFM3F43f&X-Amz-Signature=e3a73a7ecedf8122a76efd927d640cc5b60afb0c51f923817a6c798414ff9227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAPHFZB%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDVjoJPcm7pBCDBJVFPJgd9V482s4u%2FaZO5ZXwfH8SKNwIgI3xzgc5YbtkzBjESMJ3pyeuwo%2FS%2BwSgDjga%2BytUMheEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYaqkUxvBNkFgYhFircAyo8DuQNRb7vLTHE8Pse036ddWXq4EAVFb7576YD4rjKfZzXwXkuF4J4DPuuMP0SK7ugmY3EIpPE3Wtsmuy6vov7PXIfT5YTi8wkqvrgYUomAX9Urh1hBmbARlvXahj5SteFRKbT%2BoOaSNaU8rz1OAg6VuCyEZxJpOO5ZGWZ7hAibmjUiQoDnGtL%2BsTzYkHcssXNEo%2FGXMt%2Fz46t6JLT7V31StQKqVy%2BO5QtwVq6rWML9I6ZG0ND57BgBSZ8TcRVNIcI3Sanf9skixrNpUWN99klGoPmTG%2B8oZ7BZjTSuYWxpNNpdVoQANKeA9E1qeFOAN8AAnl7LwSuzOHqTG0Vu%2F7dUiunvgZoZbvFSEMlt01C7bJZPHRxI%2Fjv%2BQoMfW0AMCvm2QqjsPf8rjJCnZSx9XyEV01uwvqkKlYw3ZCeGKo1So6UtckojcipInPTm8K0veXQn7jRCT9ch01CLxdRTI97BirrE9KTZrXfPd0EePY%2BYO3ejEoNbqw%2BYCHXIpE0Lc09%2B2VrHOlSKsGnG1TyMibx7MLiTRYcyxseS%2Fnm3mCj2ycowTLoSaoW6a9X%2FM6UfWYxULfzwL1fDdSp6WnpcjHE2QX9jIw4wUiU%2BPK8GW9c4MUbyRjKQPlHlDjsMNS5xMgGOqUBKLrFv1z%2F397GtwnQWuufjhO89B%2B7%2F9PAsKwrtAQdhSoMAN89gw2O%2BqplWL%2BGil8%2Fqnnk%2BMZLo1WmWlIo0Rn5cNrVSO7IxAcWZysYvO%2FJMGFxFSTU16NE5ayLGk%2FVoAGCZfyemqrzzXLB3F5Yz6JJdp1xAPC6%2FzVB35%2FbDRUrl9%2FLOic%2FslAKGnrVJDtuY06ceSDu%2BzKG0t%2B9t6Lir9NLEFM3F43f&X-Amz-Signature=67d1dd391a1a7b3be5c7f7ce0d76fb4c302e40131473f04a37fccc48af145e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAPHFZB%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDVjoJPcm7pBCDBJVFPJgd9V482s4u%2FaZO5ZXwfH8SKNwIgI3xzgc5YbtkzBjESMJ3pyeuwo%2FS%2BwSgDjga%2BytUMheEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYaqkUxvBNkFgYhFircAyo8DuQNRb7vLTHE8Pse036ddWXq4EAVFb7576YD4rjKfZzXwXkuF4J4DPuuMP0SK7ugmY3EIpPE3Wtsmuy6vov7PXIfT5YTi8wkqvrgYUomAX9Urh1hBmbARlvXahj5SteFRKbT%2BoOaSNaU8rz1OAg6VuCyEZxJpOO5ZGWZ7hAibmjUiQoDnGtL%2BsTzYkHcssXNEo%2FGXMt%2Fz46t6JLT7V31StQKqVy%2BO5QtwVq6rWML9I6ZG0ND57BgBSZ8TcRVNIcI3Sanf9skixrNpUWN99klGoPmTG%2B8oZ7BZjTSuYWxpNNpdVoQANKeA9E1qeFOAN8AAnl7LwSuzOHqTG0Vu%2F7dUiunvgZoZbvFSEMlt01C7bJZPHRxI%2Fjv%2BQoMfW0AMCvm2QqjsPf8rjJCnZSx9XyEV01uwvqkKlYw3ZCeGKo1So6UtckojcipInPTm8K0veXQn7jRCT9ch01CLxdRTI97BirrE9KTZrXfPd0EePY%2BYO3ejEoNbqw%2BYCHXIpE0Lc09%2B2VrHOlSKsGnG1TyMibx7MLiTRYcyxseS%2Fnm3mCj2ycowTLoSaoW6a9X%2FM6UfWYxULfzwL1fDdSp6WnpcjHE2QX9jIw4wUiU%2BPK8GW9c4MUbyRjKQPlHlDjsMNS5xMgGOqUBKLrFv1z%2F397GtwnQWuufjhO89B%2B7%2F9PAsKwrtAQdhSoMAN89gw2O%2BqplWL%2BGil8%2Fqnnk%2BMZLo1WmWlIo0Rn5cNrVSO7IxAcWZysYvO%2FJMGFxFSTU16NE5ayLGk%2FVoAGCZfyemqrzzXLB3F5Yz6JJdp1xAPC6%2FzVB35%2FbDRUrl9%2FLOic%2FslAKGnrVJDtuY06ceSDu%2BzKG0t%2B9t6Lir9NLEFM3F43f&X-Amz-Signature=d8472aeb1d7b24bcb89c7365d01fc7c3ba33299cf5eb953d039eaaff2d43a2b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAPHFZB%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDVjoJPcm7pBCDBJVFPJgd9V482s4u%2FaZO5ZXwfH8SKNwIgI3xzgc5YbtkzBjESMJ3pyeuwo%2FS%2BwSgDjga%2BytUMheEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYaqkUxvBNkFgYhFircAyo8DuQNRb7vLTHE8Pse036ddWXq4EAVFb7576YD4rjKfZzXwXkuF4J4DPuuMP0SK7ugmY3EIpPE3Wtsmuy6vov7PXIfT5YTi8wkqvrgYUomAX9Urh1hBmbARlvXahj5SteFRKbT%2BoOaSNaU8rz1OAg6VuCyEZxJpOO5ZGWZ7hAibmjUiQoDnGtL%2BsTzYkHcssXNEo%2FGXMt%2Fz46t6JLT7V31StQKqVy%2BO5QtwVq6rWML9I6ZG0ND57BgBSZ8TcRVNIcI3Sanf9skixrNpUWN99klGoPmTG%2B8oZ7BZjTSuYWxpNNpdVoQANKeA9E1qeFOAN8AAnl7LwSuzOHqTG0Vu%2F7dUiunvgZoZbvFSEMlt01C7bJZPHRxI%2Fjv%2BQoMfW0AMCvm2QqjsPf8rjJCnZSx9XyEV01uwvqkKlYw3ZCeGKo1So6UtckojcipInPTm8K0veXQn7jRCT9ch01CLxdRTI97BirrE9KTZrXfPd0EePY%2BYO3ejEoNbqw%2BYCHXIpE0Lc09%2B2VrHOlSKsGnG1TyMibx7MLiTRYcyxseS%2Fnm3mCj2ycowTLoSaoW6a9X%2FM6UfWYxULfzwL1fDdSp6WnpcjHE2QX9jIw4wUiU%2BPK8GW9c4MUbyRjKQPlHlDjsMNS5xMgGOqUBKLrFv1z%2F397GtwnQWuufjhO89B%2B7%2F9PAsKwrtAQdhSoMAN89gw2O%2BqplWL%2BGil8%2Fqnnk%2BMZLo1WmWlIo0Rn5cNrVSO7IxAcWZysYvO%2FJMGFxFSTU16NE5ayLGk%2FVoAGCZfyemqrzzXLB3F5Yz6JJdp1xAPC6%2FzVB35%2FbDRUrl9%2FLOic%2FslAKGnrVJDtuY06ceSDu%2BzKG0t%2B9t6Lir9NLEFM3F43f&X-Amz-Signature=781546f4bba2d220ff842ed49d8e716c27a5e18c1fe43292b26618e72a772268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAPHFZB%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDVjoJPcm7pBCDBJVFPJgd9V482s4u%2FaZO5ZXwfH8SKNwIgI3xzgc5YbtkzBjESMJ3pyeuwo%2FS%2BwSgDjga%2BytUMheEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYaqkUxvBNkFgYhFircAyo8DuQNRb7vLTHE8Pse036ddWXq4EAVFb7576YD4rjKfZzXwXkuF4J4DPuuMP0SK7ugmY3EIpPE3Wtsmuy6vov7PXIfT5YTi8wkqvrgYUomAX9Urh1hBmbARlvXahj5SteFRKbT%2BoOaSNaU8rz1OAg6VuCyEZxJpOO5ZGWZ7hAibmjUiQoDnGtL%2BsTzYkHcssXNEo%2FGXMt%2Fz46t6JLT7V31StQKqVy%2BO5QtwVq6rWML9I6ZG0ND57BgBSZ8TcRVNIcI3Sanf9skixrNpUWN99klGoPmTG%2B8oZ7BZjTSuYWxpNNpdVoQANKeA9E1qeFOAN8AAnl7LwSuzOHqTG0Vu%2F7dUiunvgZoZbvFSEMlt01C7bJZPHRxI%2Fjv%2BQoMfW0AMCvm2QqjsPf8rjJCnZSx9XyEV01uwvqkKlYw3ZCeGKo1So6UtckojcipInPTm8K0veXQn7jRCT9ch01CLxdRTI97BirrE9KTZrXfPd0EePY%2BYO3ejEoNbqw%2BYCHXIpE0Lc09%2B2VrHOlSKsGnG1TyMibx7MLiTRYcyxseS%2Fnm3mCj2ycowTLoSaoW6a9X%2FM6UfWYxULfzwL1fDdSp6WnpcjHE2QX9jIw4wUiU%2BPK8GW9c4MUbyRjKQPlHlDjsMNS5xMgGOqUBKLrFv1z%2F397GtwnQWuufjhO89B%2B7%2F9PAsKwrtAQdhSoMAN89gw2O%2BqplWL%2BGil8%2Fqnnk%2BMZLo1WmWlIo0Rn5cNrVSO7IxAcWZysYvO%2FJMGFxFSTU16NE5ayLGk%2FVoAGCZfyemqrzzXLB3F5Yz6JJdp1xAPC6%2FzVB35%2FbDRUrl9%2FLOic%2FslAKGnrVJDtuY06ceSDu%2BzKG0t%2B9t6Lir9NLEFM3F43f&X-Amz-Signature=40f7379f44d7d8e91d2ecef5ad5720a3af354749a054c51508c120fb9805d75e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAPHFZB%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDVjoJPcm7pBCDBJVFPJgd9V482s4u%2FaZO5ZXwfH8SKNwIgI3xzgc5YbtkzBjESMJ3pyeuwo%2FS%2BwSgDjga%2BytUMheEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYaqkUxvBNkFgYhFircAyo8DuQNRb7vLTHE8Pse036ddWXq4EAVFb7576YD4rjKfZzXwXkuF4J4DPuuMP0SK7ugmY3EIpPE3Wtsmuy6vov7PXIfT5YTi8wkqvrgYUomAX9Urh1hBmbARlvXahj5SteFRKbT%2BoOaSNaU8rz1OAg6VuCyEZxJpOO5ZGWZ7hAibmjUiQoDnGtL%2BsTzYkHcssXNEo%2FGXMt%2Fz46t6JLT7V31StQKqVy%2BO5QtwVq6rWML9I6ZG0ND57BgBSZ8TcRVNIcI3Sanf9skixrNpUWN99klGoPmTG%2B8oZ7BZjTSuYWxpNNpdVoQANKeA9E1qeFOAN8AAnl7LwSuzOHqTG0Vu%2F7dUiunvgZoZbvFSEMlt01C7bJZPHRxI%2Fjv%2BQoMfW0AMCvm2QqjsPf8rjJCnZSx9XyEV01uwvqkKlYw3ZCeGKo1So6UtckojcipInPTm8K0veXQn7jRCT9ch01CLxdRTI97BirrE9KTZrXfPd0EePY%2BYO3ejEoNbqw%2BYCHXIpE0Lc09%2B2VrHOlSKsGnG1TyMibx7MLiTRYcyxseS%2Fnm3mCj2ycowTLoSaoW6a9X%2FM6UfWYxULfzwL1fDdSp6WnpcjHE2QX9jIw4wUiU%2BPK8GW9c4MUbyRjKQPlHlDjsMNS5xMgGOqUBKLrFv1z%2F397GtwnQWuufjhO89B%2B7%2F9PAsKwrtAQdhSoMAN89gw2O%2BqplWL%2BGil8%2Fqnnk%2BMZLo1WmWlIo0Rn5cNrVSO7IxAcWZysYvO%2FJMGFxFSTU16NE5ayLGk%2FVoAGCZfyemqrzzXLB3F5Yz6JJdp1xAPC6%2FzVB35%2FbDRUrl9%2FLOic%2FslAKGnrVJDtuY06ceSDu%2BzKG0t%2B9t6Lir9NLEFM3F43f&X-Amz-Signature=01861ac35279b73660f506343559fea6ac7e66608fa6dff56f5d80e792efd2f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAPHFZB%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDVjoJPcm7pBCDBJVFPJgd9V482s4u%2FaZO5ZXwfH8SKNwIgI3xzgc5YbtkzBjESMJ3pyeuwo%2FS%2BwSgDjga%2BytUMheEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYaqkUxvBNkFgYhFircAyo8DuQNRb7vLTHE8Pse036ddWXq4EAVFb7576YD4rjKfZzXwXkuF4J4DPuuMP0SK7ugmY3EIpPE3Wtsmuy6vov7PXIfT5YTi8wkqvrgYUomAX9Urh1hBmbARlvXahj5SteFRKbT%2BoOaSNaU8rz1OAg6VuCyEZxJpOO5ZGWZ7hAibmjUiQoDnGtL%2BsTzYkHcssXNEo%2FGXMt%2Fz46t6JLT7V31StQKqVy%2BO5QtwVq6rWML9I6ZG0ND57BgBSZ8TcRVNIcI3Sanf9skixrNpUWN99klGoPmTG%2B8oZ7BZjTSuYWxpNNpdVoQANKeA9E1qeFOAN8AAnl7LwSuzOHqTG0Vu%2F7dUiunvgZoZbvFSEMlt01C7bJZPHRxI%2Fjv%2BQoMfW0AMCvm2QqjsPf8rjJCnZSx9XyEV01uwvqkKlYw3ZCeGKo1So6UtckojcipInPTm8K0veXQn7jRCT9ch01CLxdRTI97BirrE9KTZrXfPd0EePY%2BYO3ejEoNbqw%2BYCHXIpE0Lc09%2B2VrHOlSKsGnG1TyMibx7MLiTRYcyxseS%2Fnm3mCj2ycowTLoSaoW6a9X%2FM6UfWYxULfzwL1fDdSp6WnpcjHE2QX9jIw4wUiU%2BPK8GW9c4MUbyRjKQPlHlDjsMNS5xMgGOqUBKLrFv1z%2F397GtwnQWuufjhO89B%2B7%2F9PAsKwrtAQdhSoMAN89gw2O%2BqplWL%2BGil8%2Fqnnk%2BMZLo1WmWlIo0Rn5cNrVSO7IxAcWZysYvO%2FJMGFxFSTU16NE5ayLGk%2FVoAGCZfyemqrzzXLB3F5Yz6JJdp1xAPC6%2FzVB35%2FbDRUrl9%2FLOic%2FslAKGnrVJDtuY06ceSDu%2BzKG0t%2B9t6Lir9NLEFM3F43f&X-Amz-Signature=c19da07e55693671e3c86fb12c57e4c299899dd47d14589721e0d3cd5c496244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAPHFZB%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDVjoJPcm7pBCDBJVFPJgd9V482s4u%2FaZO5ZXwfH8SKNwIgI3xzgc5YbtkzBjESMJ3pyeuwo%2FS%2BwSgDjga%2BytUMheEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYaqkUxvBNkFgYhFircAyo8DuQNRb7vLTHE8Pse036ddWXq4EAVFb7576YD4rjKfZzXwXkuF4J4DPuuMP0SK7ugmY3EIpPE3Wtsmuy6vov7PXIfT5YTi8wkqvrgYUomAX9Urh1hBmbARlvXahj5SteFRKbT%2BoOaSNaU8rz1OAg6VuCyEZxJpOO5ZGWZ7hAibmjUiQoDnGtL%2BsTzYkHcssXNEo%2FGXMt%2Fz46t6JLT7V31StQKqVy%2BO5QtwVq6rWML9I6ZG0ND57BgBSZ8TcRVNIcI3Sanf9skixrNpUWN99klGoPmTG%2B8oZ7BZjTSuYWxpNNpdVoQANKeA9E1qeFOAN8AAnl7LwSuzOHqTG0Vu%2F7dUiunvgZoZbvFSEMlt01C7bJZPHRxI%2Fjv%2BQoMfW0AMCvm2QqjsPf8rjJCnZSx9XyEV01uwvqkKlYw3ZCeGKo1So6UtckojcipInPTm8K0veXQn7jRCT9ch01CLxdRTI97BirrE9KTZrXfPd0EePY%2BYO3ejEoNbqw%2BYCHXIpE0Lc09%2B2VrHOlSKsGnG1TyMibx7MLiTRYcyxseS%2Fnm3mCj2ycowTLoSaoW6a9X%2FM6UfWYxULfzwL1fDdSp6WnpcjHE2QX9jIw4wUiU%2BPK8GW9c4MUbyRjKQPlHlDjsMNS5xMgGOqUBKLrFv1z%2F397GtwnQWuufjhO89B%2B7%2F9PAsKwrtAQdhSoMAN89gw2O%2BqplWL%2BGil8%2Fqnnk%2BMZLo1WmWlIo0Rn5cNrVSO7IxAcWZysYvO%2FJMGFxFSTU16NE5ayLGk%2FVoAGCZfyemqrzzXLB3F5Yz6JJdp1xAPC6%2FzVB35%2FbDRUrl9%2FLOic%2FslAKGnrVJDtuY06ceSDu%2BzKG0t%2B9t6Lir9NLEFM3F43f&X-Amz-Signature=baf88a941405e3d3e3ca9007dfecfa8b6546489cbed2dff4ea9f615ba62285da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAPHFZB%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDVjoJPcm7pBCDBJVFPJgd9V482s4u%2FaZO5ZXwfH8SKNwIgI3xzgc5YbtkzBjESMJ3pyeuwo%2FS%2BwSgDjga%2BytUMheEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYaqkUxvBNkFgYhFircAyo8DuQNRb7vLTHE8Pse036ddWXq4EAVFb7576YD4rjKfZzXwXkuF4J4DPuuMP0SK7ugmY3EIpPE3Wtsmuy6vov7PXIfT5YTi8wkqvrgYUomAX9Urh1hBmbARlvXahj5SteFRKbT%2BoOaSNaU8rz1OAg6VuCyEZxJpOO5ZGWZ7hAibmjUiQoDnGtL%2BsTzYkHcssXNEo%2FGXMt%2Fz46t6JLT7V31StQKqVy%2BO5QtwVq6rWML9I6ZG0ND57BgBSZ8TcRVNIcI3Sanf9skixrNpUWN99klGoPmTG%2B8oZ7BZjTSuYWxpNNpdVoQANKeA9E1qeFOAN8AAnl7LwSuzOHqTG0Vu%2F7dUiunvgZoZbvFSEMlt01C7bJZPHRxI%2Fjv%2BQoMfW0AMCvm2QqjsPf8rjJCnZSx9XyEV01uwvqkKlYw3ZCeGKo1So6UtckojcipInPTm8K0veXQn7jRCT9ch01CLxdRTI97BirrE9KTZrXfPd0EePY%2BYO3ejEoNbqw%2BYCHXIpE0Lc09%2B2VrHOlSKsGnG1TyMibx7MLiTRYcyxseS%2Fnm3mCj2ycowTLoSaoW6a9X%2FM6UfWYxULfzwL1fDdSp6WnpcjHE2QX9jIw4wUiU%2BPK8GW9c4MUbyRjKQPlHlDjsMNS5xMgGOqUBKLrFv1z%2F397GtwnQWuufjhO89B%2B7%2F9PAsKwrtAQdhSoMAN89gw2O%2BqplWL%2BGil8%2Fqnnk%2BMZLo1WmWlIo0Rn5cNrVSO7IxAcWZysYvO%2FJMGFxFSTU16NE5ayLGk%2FVoAGCZfyemqrzzXLB3F5Yz6JJdp1xAPC6%2FzVB35%2FbDRUrl9%2FLOic%2FslAKGnrVJDtuY06ceSDu%2BzKG0t%2B9t6Lir9NLEFM3F43f&X-Amz-Signature=4dbcf9e47885eb4685738d3849cfbcfe5bcb5ba6f3529ff53c41926c80da24e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAPHFZB%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDVjoJPcm7pBCDBJVFPJgd9V482s4u%2FaZO5ZXwfH8SKNwIgI3xzgc5YbtkzBjESMJ3pyeuwo%2FS%2BwSgDjga%2BytUMheEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYaqkUxvBNkFgYhFircAyo8DuQNRb7vLTHE8Pse036ddWXq4EAVFb7576YD4rjKfZzXwXkuF4J4DPuuMP0SK7ugmY3EIpPE3Wtsmuy6vov7PXIfT5YTi8wkqvrgYUomAX9Urh1hBmbARlvXahj5SteFRKbT%2BoOaSNaU8rz1OAg6VuCyEZxJpOO5ZGWZ7hAibmjUiQoDnGtL%2BsTzYkHcssXNEo%2FGXMt%2Fz46t6JLT7V31StQKqVy%2BO5QtwVq6rWML9I6ZG0ND57BgBSZ8TcRVNIcI3Sanf9skixrNpUWN99klGoPmTG%2B8oZ7BZjTSuYWxpNNpdVoQANKeA9E1qeFOAN8AAnl7LwSuzOHqTG0Vu%2F7dUiunvgZoZbvFSEMlt01C7bJZPHRxI%2Fjv%2BQoMfW0AMCvm2QqjsPf8rjJCnZSx9XyEV01uwvqkKlYw3ZCeGKo1So6UtckojcipInPTm8K0veXQn7jRCT9ch01CLxdRTI97BirrE9KTZrXfPd0EePY%2BYO3ejEoNbqw%2BYCHXIpE0Lc09%2B2VrHOlSKsGnG1TyMibx7MLiTRYcyxseS%2Fnm3mCj2ycowTLoSaoW6a9X%2FM6UfWYxULfzwL1fDdSp6WnpcjHE2QX9jIw4wUiU%2BPK8GW9c4MUbyRjKQPlHlDjsMNS5xMgGOqUBKLrFv1z%2F397GtwnQWuufjhO89B%2B7%2F9PAsKwrtAQdhSoMAN89gw2O%2BqplWL%2BGil8%2Fqnnk%2BMZLo1WmWlIo0Rn5cNrVSO7IxAcWZysYvO%2FJMGFxFSTU16NE5ayLGk%2FVoAGCZfyemqrzzXLB3F5Yz6JJdp1xAPC6%2FzVB35%2FbDRUrl9%2FLOic%2FslAKGnrVJDtuY06ceSDu%2BzKG0t%2B9t6Lir9NLEFM3F43f&X-Amz-Signature=af07b8c359942b4be0d87f1b79b7776b48fc55b8a3d438326d2099518e09e11f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAPHFZB%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDVjoJPcm7pBCDBJVFPJgd9V482s4u%2FaZO5ZXwfH8SKNwIgI3xzgc5YbtkzBjESMJ3pyeuwo%2FS%2BwSgDjga%2BytUMheEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYaqkUxvBNkFgYhFircAyo8DuQNRb7vLTHE8Pse036ddWXq4EAVFb7576YD4rjKfZzXwXkuF4J4DPuuMP0SK7ugmY3EIpPE3Wtsmuy6vov7PXIfT5YTi8wkqvrgYUomAX9Urh1hBmbARlvXahj5SteFRKbT%2BoOaSNaU8rz1OAg6VuCyEZxJpOO5ZGWZ7hAibmjUiQoDnGtL%2BsTzYkHcssXNEo%2FGXMt%2Fz46t6JLT7V31StQKqVy%2BO5QtwVq6rWML9I6ZG0ND57BgBSZ8TcRVNIcI3Sanf9skixrNpUWN99klGoPmTG%2B8oZ7BZjTSuYWxpNNpdVoQANKeA9E1qeFOAN8AAnl7LwSuzOHqTG0Vu%2F7dUiunvgZoZbvFSEMlt01C7bJZPHRxI%2Fjv%2BQoMfW0AMCvm2QqjsPf8rjJCnZSx9XyEV01uwvqkKlYw3ZCeGKo1So6UtckojcipInPTm8K0veXQn7jRCT9ch01CLxdRTI97BirrE9KTZrXfPd0EePY%2BYO3ejEoNbqw%2BYCHXIpE0Lc09%2B2VrHOlSKsGnG1TyMibx7MLiTRYcyxseS%2Fnm3mCj2ycowTLoSaoW6a9X%2FM6UfWYxULfzwL1fDdSp6WnpcjHE2QX9jIw4wUiU%2BPK8GW9c4MUbyRjKQPlHlDjsMNS5xMgGOqUBKLrFv1z%2F397GtwnQWuufjhO89B%2B7%2F9PAsKwrtAQdhSoMAN89gw2O%2BqplWL%2BGil8%2Fqnnk%2BMZLo1WmWlIo0Rn5cNrVSO7IxAcWZysYvO%2FJMGFxFSTU16NE5ayLGk%2FVoAGCZfyemqrzzXLB3F5Yz6JJdp1xAPC6%2FzVB35%2FbDRUrl9%2FLOic%2FslAKGnrVJDtuY06ceSDu%2BzKG0t%2B9t6Lir9NLEFM3F43f&X-Amz-Signature=c57cc25b0a033a3a5866db498af92e9aa0abf23259a4c454c29cb858426e3bcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAPHFZB%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDVjoJPcm7pBCDBJVFPJgd9V482s4u%2FaZO5ZXwfH8SKNwIgI3xzgc5YbtkzBjESMJ3pyeuwo%2FS%2BwSgDjga%2BytUMheEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYaqkUxvBNkFgYhFircAyo8DuQNRb7vLTHE8Pse036ddWXq4EAVFb7576YD4rjKfZzXwXkuF4J4DPuuMP0SK7ugmY3EIpPE3Wtsmuy6vov7PXIfT5YTi8wkqvrgYUomAX9Urh1hBmbARlvXahj5SteFRKbT%2BoOaSNaU8rz1OAg6VuCyEZxJpOO5ZGWZ7hAibmjUiQoDnGtL%2BsTzYkHcssXNEo%2FGXMt%2Fz46t6JLT7V31StQKqVy%2BO5QtwVq6rWML9I6ZG0ND57BgBSZ8TcRVNIcI3Sanf9skixrNpUWN99klGoPmTG%2B8oZ7BZjTSuYWxpNNpdVoQANKeA9E1qeFOAN8AAnl7LwSuzOHqTG0Vu%2F7dUiunvgZoZbvFSEMlt01C7bJZPHRxI%2Fjv%2BQoMfW0AMCvm2QqjsPf8rjJCnZSx9XyEV01uwvqkKlYw3ZCeGKo1So6UtckojcipInPTm8K0veXQn7jRCT9ch01CLxdRTI97BirrE9KTZrXfPd0EePY%2BYO3ejEoNbqw%2BYCHXIpE0Lc09%2B2VrHOlSKsGnG1TyMibx7MLiTRYcyxseS%2Fnm3mCj2ycowTLoSaoW6a9X%2FM6UfWYxULfzwL1fDdSp6WnpcjHE2QX9jIw4wUiU%2BPK8GW9c4MUbyRjKQPlHlDjsMNS5xMgGOqUBKLrFv1z%2F397GtwnQWuufjhO89B%2B7%2F9PAsKwrtAQdhSoMAN89gw2O%2BqplWL%2BGil8%2Fqnnk%2BMZLo1WmWlIo0Rn5cNrVSO7IxAcWZysYvO%2FJMGFxFSTU16NE5ayLGk%2FVoAGCZfyemqrzzXLB3F5Yz6JJdp1xAPC6%2FzVB35%2FbDRUrl9%2FLOic%2FslAKGnrVJDtuY06ceSDu%2BzKG0t%2B9t6Lir9NLEFM3F43f&X-Amz-Signature=06be86e9ecd9a0b2ad9735ea88baa4210ad5a26f4d020695b923b306317bbda9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAPHFZB%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDVjoJPcm7pBCDBJVFPJgd9V482s4u%2FaZO5ZXwfH8SKNwIgI3xzgc5YbtkzBjESMJ3pyeuwo%2FS%2BwSgDjga%2BytUMheEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYaqkUxvBNkFgYhFircAyo8DuQNRb7vLTHE8Pse036ddWXq4EAVFb7576YD4rjKfZzXwXkuF4J4DPuuMP0SK7ugmY3EIpPE3Wtsmuy6vov7PXIfT5YTi8wkqvrgYUomAX9Urh1hBmbARlvXahj5SteFRKbT%2BoOaSNaU8rz1OAg6VuCyEZxJpOO5ZGWZ7hAibmjUiQoDnGtL%2BsTzYkHcssXNEo%2FGXMt%2Fz46t6JLT7V31StQKqVy%2BO5QtwVq6rWML9I6ZG0ND57BgBSZ8TcRVNIcI3Sanf9skixrNpUWN99klGoPmTG%2B8oZ7BZjTSuYWxpNNpdVoQANKeA9E1qeFOAN8AAnl7LwSuzOHqTG0Vu%2F7dUiunvgZoZbvFSEMlt01C7bJZPHRxI%2Fjv%2BQoMfW0AMCvm2QqjsPf8rjJCnZSx9XyEV01uwvqkKlYw3ZCeGKo1So6UtckojcipInPTm8K0veXQn7jRCT9ch01CLxdRTI97BirrE9KTZrXfPd0EePY%2BYO3ejEoNbqw%2BYCHXIpE0Lc09%2B2VrHOlSKsGnG1TyMibx7MLiTRYcyxseS%2Fnm3mCj2ycowTLoSaoW6a9X%2FM6UfWYxULfzwL1fDdSp6WnpcjHE2QX9jIw4wUiU%2BPK8GW9c4MUbyRjKQPlHlDjsMNS5xMgGOqUBKLrFv1z%2F397GtwnQWuufjhO89B%2B7%2F9PAsKwrtAQdhSoMAN89gw2O%2BqplWL%2BGil8%2Fqnnk%2BMZLo1WmWlIo0Rn5cNrVSO7IxAcWZysYvO%2FJMGFxFSTU16NE5ayLGk%2FVoAGCZfyemqrzzXLB3F5Yz6JJdp1xAPC6%2FzVB35%2FbDRUrl9%2FLOic%2FslAKGnrVJDtuY06ceSDu%2BzKG0t%2B9t6Lir9NLEFM3F43f&X-Amz-Signature=10c9852f4eca0dde59a756d0d42a14a9739ee1166c45e01ec6fe24672d480690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAPHFZB%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDVjoJPcm7pBCDBJVFPJgd9V482s4u%2FaZO5ZXwfH8SKNwIgI3xzgc5YbtkzBjESMJ3pyeuwo%2FS%2BwSgDjga%2BytUMheEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYaqkUxvBNkFgYhFircAyo8DuQNRb7vLTHE8Pse036ddWXq4EAVFb7576YD4rjKfZzXwXkuF4J4DPuuMP0SK7ugmY3EIpPE3Wtsmuy6vov7PXIfT5YTi8wkqvrgYUomAX9Urh1hBmbARlvXahj5SteFRKbT%2BoOaSNaU8rz1OAg6VuCyEZxJpOO5ZGWZ7hAibmjUiQoDnGtL%2BsTzYkHcssXNEo%2FGXMt%2Fz46t6JLT7V31StQKqVy%2BO5QtwVq6rWML9I6ZG0ND57BgBSZ8TcRVNIcI3Sanf9skixrNpUWN99klGoPmTG%2B8oZ7BZjTSuYWxpNNpdVoQANKeA9E1qeFOAN8AAnl7LwSuzOHqTG0Vu%2F7dUiunvgZoZbvFSEMlt01C7bJZPHRxI%2Fjv%2BQoMfW0AMCvm2QqjsPf8rjJCnZSx9XyEV01uwvqkKlYw3ZCeGKo1So6UtckojcipInPTm8K0veXQn7jRCT9ch01CLxdRTI97BirrE9KTZrXfPd0EePY%2BYO3ejEoNbqw%2BYCHXIpE0Lc09%2B2VrHOlSKsGnG1TyMibx7MLiTRYcyxseS%2Fnm3mCj2ycowTLoSaoW6a9X%2FM6UfWYxULfzwL1fDdSp6WnpcjHE2QX9jIw4wUiU%2BPK8GW9c4MUbyRjKQPlHlDjsMNS5xMgGOqUBKLrFv1z%2F397GtwnQWuufjhO89B%2B7%2F9PAsKwrtAQdhSoMAN89gw2O%2BqplWL%2BGil8%2Fqnnk%2BMZLo1WmWlIo0Rn5cNrVSO7IxAcWZysYvO%2FJMGFxFSTU16NE5ayLGk%2FVoAGCZfyemqrzzXLB3F5Yz6JJdp1xAPC6%2FzVB35%2FbDRUrl9%2FLOic%2FslAKGnrVJDtuY06ceSDu%2BzKG0t%2B9t6Lir9NLEFM3F43f&X-Amz-Signature=83078cedb202b56e892d9f7ded727b28cb48c979e23d8b2c9c60db05caa20d34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
