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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XXMJ4H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi1pRNotoxMT1EFidOt9%2FyWQp%2BbSRcloEeAVqELpYBrgIgT6dgGZKHhtTP%2BH6FvHpsxGXrtx4JQNvGPeJoeJ1G%2Fogq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJiPLEUqx7A4iUnj3SrcA42GXBWVsJ75OzLlkU98PZD8yrLHqpQU3cSp2QVI0pdDRjIX6MvOSJaF0dbedmUDuROowPqVdeh5BUqFHPY9CAErusmzzkkAUepMZUUmCl47soAz6S4NzLWgBC93sUDV%2FebLraTk99JqFbQgd%2BLaO9WEbODJ%2BfvA52omwnaRUlfjGdPlhH2CY%2FBl9Tl26Ulidp2s3%2BUGVF4NBG47UCIxfZDBmZBZAtNnm%2Ba426fgFkJ6v83X91VZJxz772LOmJ4gLEcmhUVvBa67RIfVAoA5M09X4lW9mUV%2Ff7Olh3Ym3o022lgmYQoNA%2FwXUpgazf2xRym8YigmsoihDxtGBQEowFCtEZGsNLVxbvqXg%2BwtM4AJXKvN0UmrkkThTdM95RspUZqaipv8Tj6J7EkGQXH7CpQq%2BjyHz04wgUcn8WZKEIqGWDzCl7BJRQg3KdzjKZi1GNhKVWshxOwnX3Vo%2BNpwTlardJV3PemsM8P9nshdsmFmQ2OiSOR6bYJ%2BmeL13eS%2BfS%2BI88xceuGVvfdXNfm5xXh1KjwHw5FVdP94uT%2FI9ydFzx40jlfBqgnUy8ty9CAVEdlGjXffetA1cM%2Fo%2BEPQKlcobKUMBPGG3oZEeq97ctXZJGf0STckXBDcs8jVMOD3gMUGOqUBqpERR5rRE67k43K1qFdJm92wMg7fnL4lIb3tA9R2s4r7IR866Vp6M%2FebgLpwNeCU%2FG6fvSEaQ8%2FWQwIJ99mMfqFqc4VlSDGKWVAHRtvQFi5pkzjVoolWbCOc%2BsWZ2hI97g2u9wPTtD%2F3DNXgdMqanVH3arRhldZn12p%2BuMEiCPq7l1oiAiVcprd9Gcanx8HdeTb1xnhFheShTPaTW4VynCRVLwTr&X-Amz-Signature=18c9f8542c285abcbf2b1f7758866cb0a6affc8b246e4882d39ee5e70664e10c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XXMJ4H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi1pRNotoxMT1EFidOt9%2FyWQp%2BbSRcloEeAVqELpYBrgIgT6dgGZKHhtTP%2BH6FvHpsxGXrtx4JQNvGPeJoeJ1G%2Fogq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJiPLEUqx7A4iUnj3SrcA42GXBWVsJ75OzLlkU98PZD8yrLHqpQU3cSp2QVI0pdDRjIX6MvOSJaF0dbedmUDuROowPqVdeh5BUqFHPY9CAErusmzzkkAUepMZUUmCl47soAz6S4NzLWgBC93sUDV%2FebLraTk99JqFbQgd%2BLaO9WEbODJ%2BfvA52omwnaRUlfjGdPlhH2CY%2FBl9Tl26Ulidp2s3%2BUGVF4NBG47UCIxfZDBmZBZAtNnm%2Ba426fgFkJ6v83X91VZJxz772LOmJ4gLEcmhUVvBa67RIfVAoA5M09X4lW9mUV%2Ff7Olh3Ym3o022lgmYQoNA%2FwXUpgazf2xRym8YigmsoihDxtGBQEowFCtEZGsNLVxbvqXg%2BwtM4AJXKvN0UmrkkThTdM95RspUZqaipv8Tj6J7EkGQXH7CpQq%2BjyHz04wgUcn8WZKEIqGWDzCl7BJRQg3KdzjKZi1GNhKVWshxOwnX3Vo%2BNpwTlardJV3PemsM8P9nshdsmFmQ2OiSOR6bYJ%2BmeL13eS%2BfS%2BI88xceuGVvfdXNfm5xXh1KjwHw5FVdP94uT%2FI9ydFzx40jlfBqgnUy8ty9CAVEdlGjXffetA1cM%2Fo%2BEPQKlcobKUMBPGG3oZEeq97ctXZJGf0STckXBDcs8jVMOD3gMUGOqUBqpERR5rRE67k43K1qFdJm92wMg7fnL4lIb3tA9R2s4r7IR866Vp6M%2FebgLpwNeCU%2FG6fvSEaQ8%2FWQwIJ99mMfqFqc4VlSDGKWVAHRtvQFi5pkzjVoolWbCOc%2BsWZ2hI97g2u9wPTtD%2F3DNXgdMqanVH3arRhldZn12p%2BuMEiCPq7l1oiAiVcprd9Gcanx8HdeTb1xnhFheShTPaTW4VynCRVLwTr&X-Amz-Signature=d06d0c067e0138d8d581b1158c6efbc1c8f65a26f47712af1cd6354cb107de21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XXMJ4H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi1pRNotoxMT1EFidOt9%2FyWQp%2BbSRcloEeAVqELpYBrgIgT6dgGZKHhtTP%2BH6FvHpsxGXrtx4JQNvGPeJoeJ1G%2Fogq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJiPLEUqx7A4iUnj3SrcA42GXBWVsJ75OzLlkU98PZD8yrLHqpQU3cSp2QVI0pdDRjIX6MvOSJaF0dbedmUDuROowPqVdeh5BUqFHPY9CAErusmzzkkAUepMZUUmCl47soAz6S4NzLWgBC93sUDV%2FebLraTk99JqFbQgd%2BLaO9WEbODJ%2BfvA52omwnaRUlfjGdPlhH2CY%2FBl9Tl26Ulidp2s3%2BUGVF4NBG47UCIxfZDBmZBZAtNnm%2Ba426fgFkJ6v83X91VZJxz772LOmJ4gLEcmhUVvBa67RIfVAoA5M09X4lW9mUV%2Ff7Olh3Ym3o022lgmYQoNA%2FwXUpgazf2xRym8YigmsoihDxtGBQEowFCtEZGsNLVxbvqXg%2BwtM4AJXKvN0UmrkkThTdM95RspUZqaipv8Tj6J7EkGQXH7CpQq%2BjyHz04wgUcn8WZKEIqGWDzCl7BJRQg3KdzjKZi1GNhKVWshxOwnX3Vo%2BNpwTlardJV3PemsM8P9nshdsmFmQ2OiSOR6bYJ%2BmeL13eS%2BfS%2BI88xceuGVvfdXNfm5xXh1KjwHw5FVdP94uT%2FI9ydFzx40jlfBqgnUy8ty9CAVEdlGjXffetA1cM%2Fo%2BEPQKlcobKUMBPGG3oZEeq97ctXZJGf0STckXBDcs8jVMOD3gMUGOqUBqpERR5rRE67k43K1qFdJm92wMg7fnL4lIb3tA9R2s4r7IR866Vp6M%2FebgLpwNeCU%2FG6fvSEaQ8%2FWQwIJ99mMfqFqc4VlSDGKWVAHRtvQFi5pkzjVoolWbCOc%2BsWZ2hI97g2u9wPTtD%2F3DNXgdMqanVH3arRhldZn12p%2BuMEiCPq7l1oiAiVcprd9Gcanx8HdeTb1xnhFheShTPaTW4VynCRVLwTr&X-Amz-Signature=eada6a229db2674880f0a9f3355223af74f5624807ab1ecad4385c3958e62d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XXMJ4H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi1pRNotoxMT1EFidOt9%2FyWQp%2BbSRcloEeAVqELpYBrgIgT6dgGZKHhtTP%2BH6FvHpsxGXrtx4JQNvGPeJoeJ1G%2Fogq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJiPLEUqx7A4iUnj3SrcA42GXBWVsJ75OzLlkU98PZD8yrLHqpQU3cSp2QVI0pdDRjIX6MvOSJaF0dbedmUDuROowPqVdeh5BUqFHPY9CAErusmzzkkAUepMZUUmCl47soAz6S4NzLWgBC93sUDV%2FebLraTk99JqFbQgd%2BLaO9WEbODJ%2BfvA52omwnaRUlfjGdPlhH2CY%2FBl9Tl26Ulidp2s3%2BUGVF4NBG47UCIxfZDBmZBZAtNnm%2Ba426fgFkJ6v83X91VZJxz772LOmJ4gLEcmhUVvBa67RIfVAoA5M09X4lW9mUV%2Ff7Olh3Ym3o022lgmYQoNA%2FwXUpgazf2xRym8YigmsoihDxtGBQEowFCtEZGsNLVxbvqXg%2BwtM4AJXKvN0UmrkkThTdM95RspUZqaipv8Tj6J7EkGQXH7CpQq%2BjyHz04wgUcn8WZKEIqGWDzCl7BJRQg3KdzjKZi1GNhKVWshxOwnX3Vo%2BNpwTlardJV3PemsM8P9nshdsmFmQ2OiSOR6bYJ%2BmeL13eS%2BfS%2BI88xceuGVvfdXNfm5xXh1KjwHw5FVdP94uT%2FI9ydFzx40jlfBqgnUy8ty9CAVEdlGjXffetA1cM%2Fo%2BEPQKlcobKUMBPGG3oZEeq97ctXZJGf0STckXBDcs8jVMOD3gMUGOqUBqpERR5rRE67k43K1qFdJm92wMg7fnL4lIb3tA9R2s4r7IR866Vp6M%2FebgLpwNeCU%2FG6fvSEaQ8%2FWQwIJ99mMfqFqc4VlSDGKWVAHRtvQFi5pkzjVoolWbCOc%2BsWZ2hI97g2u9wPTtD%2F3DNXgdMqanVH3arRhldZn12p%2BuMEiCPq7l1oiAiVcprd9Gcanx8HdeTb1xnhFheShTPaTW4VynCRVLwTr&X-Amz-Signature=c9131e779f3e9428ffe4c36bddfc1a6f6ba8fe19e0af40933a556c22e89bee70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XXMJ4H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi1pRNotoxMT1EFidOt9%2FyWQp%2BbSRcloEeAVqELpYBrgIgT6dgGZKHhtTP%2BH6FvHpsxGXrtx4JQNvGPeJoeJ1G%2Fogq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJiPLEUqx7A4iUnj3SrcA42GXBWVsJ75OzLlkU98PZD8yrLHqpQU3cSp2QVI0pdDRjIX6MvOSJaF0dbedmUDuROowPqVdeh5BUqFHPY9CAErusmzzkkAUepMZUUmCl47soAz6S4NzLWgBC93sUDV%2FebLraTk99JqFbQgd%2BLaO9WEbODJ%2BfvA52omwnaRUlfjGdPlhH2CY%2FBl9Tl26Ulidp2s3%2BUGVF4NBG47UCIxfZDBmZBZAtNnm%2Ba426fgFkJ6v83X91VZJxz772LOmJ4gLEcmhUVvBa67RIfVAoA5M09X4lW9mUV%2Ff7Olh3Ym3o022lgmYQoNA%2FwXUpgazf2xRym8YigmsoihDxtGBQEowFCtEZGsNLVxbvqXg%2BwtM4AJXKvN0UmrkkThTdM95RspUZqaipv8Tj6J7EkGQXH7CpQq%2BjyHz04wgUcn8WZKEIqGWDzCl7BJRQg3KdzjKZi1GNhKVWshxOwnX3Vo%2BNpwTlardJV3PemsM8P9nshdsmFmQ2OiSOR6bYJ%2BmeL13eS%2BfS%2BI88xceuGVvfdXNfm5xXh1KjwHw5FVdP94uT%2FI9ydFzx40jlfBqgnUy8ty9CAVEdlGjXffetA1cM%2Fo%2BEPQKlcobKUMBPGG3oZEeq97ctXZJGf0STckXBDcs8jVMOD3gMUGOqUBqpERR5rRE67k43K1qFdJm92wMg7fnL4lIb3tA9R2s4r7IR866Vp6M%2FebgLpwNeCU%2FG6fvSEaQ8%2FWQwIJ99mMfqFqc4VlSDGKWVAHRtvQFi5pkzjVoolWbCOc%2BsWZ2hI97g2u9wPTtD%2F3DNXgdMqanVH3arRhldZn12p%2BuMEiCPq7l1oiAiVcprd9Gcanx8HdeTb1xnhFheShTPaTW4VynCRVLwTr&X-Amz-Signature=c4721dcee5c7f123e2d3ee92d5f5016da3c57d76d047ab091b557a575e88aced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XXMJ4H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi1pRNotoxMT1EFidOt9%2FyWQp%2BbSRcloEeAVqELpYBrgIgT6dgGZKHhtTP%2BH6FvHpsxGXrtx4JQNvGPeJoeJ1G%2Fogq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJiPLEUqx7A4iUnj3SrcA42GXBWVsJ75OzLlkU98PZD8yrLHqpQU3cSp2QVI0pdDRjIX6MvOSJaF0dbedmUDuROowPqVdeh5BUqFHPY9CAErusmzzkkAUepMZUUmCl47soAz6S4NzLWgBC93sUDV%2FebLraTk99JqFbQgd%2BLaO9WEbODJ%2BfvA52omwnaRUlfjGdPlhH2CY%2FBl9Tl26Ulidp2s3%2BUGVF4NBG47UCIxfZDBmZBZAtNnm%2Ba426fgFkJ6v83X91VZJxz772LOmJ4gLEcmhUVvBa67RIfVAoA5M09X4lW9mUV%2Ff7Olh3Ym3o022lgmYQoNA%2FwXUpgazf2xRym8YigmsoihDxtGBQEowFCtEZGsNLVxbvqXg%2BwtM4AJXKvN0UmrkkThTdM95RspUZqaipv8Tj6J7EkGQXH7CpQq%2BjyHz04wgUcn8WZKEIqGWDzCl7BJRQg3KdzjKZi1GNhKVWshxOwnX3Vo%2BNpwTlardJV3PemsM8P9nshdsmFmQ2OiSOR6bYJ%2BmeL13eS%2BfS%2BI88xceuGVvfdXNfm5xXh1KjwHw5FVdP94uT%2FI9ydFzx40jlfBqgnUy8ty9CAVEdlGjXffetA1cM%2Fo%2BEPQKlcobKUMBPGG3oZEeq97ctXZJGf0STckXBDcs8jVMOD3gMUGOqUBqpERR5rRE67k43K1qFdJm92wMg7fnL4lIb3tA9R2s4r7IR866Vp6M%2FebgLpwNeCU%2FG6fvSEaQ8%2FWQwIJ99mMfqFqc4VlSDGKWVAHRtvQFi5pkzjVoolWbCOc%2BsWZ2hI97g2u9wPTtD%2F3DNXgdMqanVH3arRhldZn12p%2BuMEiCPq7l1oiAiVcprd9Gcanx8HdeTb1xnhFheShTPaTW4VynCRVLwTr&X-Amz-Signature=ee4c8b0d2249ddab26c32df1433189b740ca245258d9f3e721c55a679eb31786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XXMJ4H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi1pRNotoxMT1EFidOt9%2FyWQp%2BbSRcloEeAVqELpYBrgIgT6dgGZKHhtTP%2BH6FvHpsxGXrtx4JQNvGPeJoeJ1G%2Fogq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJiPLEUqx7A4iUnj3SrcA42GXBWVsJ75OzLlkU98PZD8yrLHqpQU3cSp2QVI0pdDRjIX6MvOSJaF0dbedmUDuROowPqVdeh5BUqFHPY9CAErusmzzkkAUepMZUUmCl47soAz6S4NzLWgBC93sUDV%2FebLraTk99JqFbQgd%2BLaO9WEbODJ%2BfvA52omwnaRUlfjGdPlhH2CY%2FBl9Tl26Ulidp2s3%2BUGVF4NBG47UCIxfZDBmZBZAtNnm%2Ba426fgFkJ6v83X91VZJxz772LOmJ4gLEcmhUVvBa67RIfVAoA5M09X4lW9mUV%2Ff7Olh3Ym3o022lgmYQoNA%2FwXUpgazf2xRym8YigmsoihDxtGBQEowFCtEZGsNLVxbvqXg%2BwtM4AJXKvN0UmrkkThTdM95RspUZqaipv8Tj6J7EkGQXH7CpQq%2BjyHz04wgUcn8WZKEIqGWDzCl7BJRQg3KdzjKZi1GNhKVWshxOwnX3Vo%2BNpwTlardJV3PemsM8P9nshdsmFmQ2OiSOR6bYJ%2BmeL13eS%2BfS%2BI88xceuGVvfdXNfm5xXh1KjwHw5FVdP94uT%2FI9ydFzx40jlfBqgnUy8ty9CAVEdlGjXffetA1cM%2Fo%2BEPQKlcobKUMBPGG3oZEeq97ctXZJGf0STckXBDcs8jVMOD3gMUGOqUBqpERR5rRE67k43K1qFdJm92wMg7fnL4lIb3tA9R2s4r7IR866Vp6M%2FebgLpwNeCU%2FG6fvSEaQ8%2FWQwIJ99mMfqFqc4VlSDGKWVAHRtvQFi5pkzjVoolWbCOc%2BsWZ2hI97g2u9wPTtD%2F3DNXgdMqanVH3arRhldZn12p%2BuMEiCPq7l1oiAiVcprd9Gcanx8HdeTb1xnhFheShTPaTW4VynCRVLwTr&X-Amz-Signature=ed46813b965dfd6a4564236a8c2543b7968216784acf1d57bc5f939df64cadad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XXMJ4H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi1pRNotoxMT1EFidOt9%2FyWQp%2BbSRcloEeAVqELpYBrgIgT6dgGZKHhtTP%2BH6FvHpsxGXrtx4JQNvGPeJoeJ1G%2Fogq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJiPLEUqx7A4iUnj3SrcA42GXBWVsJ75OzLlkU98PZD8yrLHqpQU3cSp2QVI0pdDRjIX6MvOSJaF0dbedmUDuROowPqVdeh5BUqFHPY9CAErusmzzkkAUepMZUUmCl47soAz6S4NzLWgBC93sUDV%2FebLraTk99JqFbQgd%2BLaO9WEbODJ%2BfvA52omwnaRUlfjGdPlhH2CY%2FBl9Tl26Ulidp2s3%2BUGVF4NBG47UCIxfZDBmZBZAtNnm%2Ba426fgFkJ6v83X91VZJxz772LOmJ4gLEcmhUVvBa67RIfVAoA5M09X4lW9mUV%2Ff7Olh3Ym3o022lgmYQoNA%2FwXUpgazf2xRym8YigmsoihDxtGBQEowFCtEZGsNLVxbvqXg%2BwtM4AJXKvN0UmrkkThTdM95RspUZqaipv8Tj6J7EkGQXH7CpQq%2BjyHz04wgUcn8WZKEIqGWDzCl7BJRQg3KdzjKZi1GNhKVWshxOwnX3Vo%2BNpwTlardJV3PemsM8P9nshdsmFmQ2OiSOR6bYJ%2BmeL13eS%2BfS%2BI88xceuGVvfdXNfm5xXh1KjwHw5FVdP94uT%2FI9ydFzx40jlfBqgnUy8ty9CAVEdlGjXffetA1cM%2Fo%2BEPQKlcobKUMBPGG3oZEeq97ctXZJGf0STckXBDcs8jVMOD3gMUGOqUBqpERR5rRE67k43K1qFdJm92wMg7fnL4lIb3tA9R2s4r7IR866Vp6M%2FebgLpwNeCU%2FG6fvSEaQ8%2FWQwIJ99mMfqFqc4VlSDGKWVAHRtvQFi5pkzjVoolWbCOc%2BsWZ2hI97g2u9wPTtD%2F3DNXgdMqanVH3arRhldZn12p%2BuMEiCPq7l1oiAiVcprd9Gcanx8HdeTb1xnhFheShTPaTW4VynCRVLwTr&X-Amz-Signature=977f26c31da493b7db169448df17576069700e7d87fb409b87b56f01bc3c89dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XXMJ4H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi1pRNotoxMT1EFidOt9%2FyWQp%2BbSRcloEeAVqELpYBrgIgT6dgGZKHhtTP%2BH6FvHpsxGXrtx4JQNvGPeJoeJ1G%2Fogq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJiPLEUqx7A4iUnj3SrcA42GXBWVsJ75OzLlkU98PZD8yrLHqpQU3cSp2QVI0pdDRjIX6MvOSJaF0dbedmUDuROowPqVdeh5BUqFHPY9CAErusmzzkkAUepMZUUmCl47soAz6S4NzLWgBC93sUDV%2FebLraTk99JqFbQgd%2BLaO9WEbODJ%2BfvA52omwnaRUlfjGdPlhH2CY%2FBl9Tl26Ulidp2s3%2BUGVF4NBG47UCIxfZDBmZBZAtNnm%2Ba426fgFkJ6v83X91VZJxz772LOmJ4gLEcmhUVvBa67RIfVAoA5M09X4lW9mUV%2Ff7Olh3Ym3o022lgmYQoNA%2FwXUpgazf2xRym8YigmsoihDxtGBQEowFCtEZGsNLVxbvqXg%2BwtM4AJXKvN0UmrkkThTdM95RspUZqaipv8Tj6J7EkGQXH7CpQq%2BjyHz04wgUcn8WZKEIqGWDzCl7BJRQg3KdzjKZi1GNhKVWshxOwnX3Vo%2BNpwTlardJV3PemsM8P9nshdsmFmQ2OiSOR6bYJ%2BmeL13eS%2BfS%2BI88xceuGVvfdXNfm5xXh1KjwHw5FVdP94uT%2FI9ydFzx40jlfBqgnUy8ty9CAVEdlGjXffetA1cM%2Fo%2BEPQKlcobKUMBPGG3oZEeq97ctXZJGf0STckXBDcs8jVMOD3gMUGOqUBqpERR5rRE67k43K1qFdJm92wMg7fnL4lIb3tA9R2s4r7IR866Vp6M%2FebgLpwNeCU%2FG6fvSEaQ8%2FWQwIJ99mMfqFqc4VlSDGKWVAHRtvQFi5pkzjVoolWbCOc%2BsWZ2hI97g2u9wPTtD%2F3DNXgdMqanVH3arRhldZn12p%2BuMEiCPq7l1oiAiVcprd9Gcanx8HdeTb1xnhFheShTPaTW4VynCRVLwTr&X-Amz-Signature=34b6667b3d6c226462eb73806c75f35044200d08759939285dfe0862ed395613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XXMJ4H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi1pRNotoxMT1EFidOt9%2FyWQp%2BbSRcloEeAVqELpYBrgIgT6dgGZKHhtTP%2BH6FvHpsxGXrtx4JQNvGPeJoeJ1G%2Fogq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJiPLEUqx7A4iUnj3SrcA42GXBWVsJ75OzLlkU98PZD8yrLHqpQU3cSp2QVI0pdDRjIX6MvOSJaF0dbedmUDuROowPqVdeh5BUqFHPY9CAErusmzzkkAUepMZUUmCl47soAz6S4NzLWgBC93sUDV%2FebLraTk99JqFbQgd%2BLaO9WEbODJ%2BfvA52omwnaRUlfjGdPlhH2CY%2FBl9Tl26Ulidp2s3%2BUGVF4NBG47UCIxfZDBmZBZAtNnm%2Ba426fgFkJ6v83X91VZJxz772LOmJ4gLEcmhUVvBa67RIfVAoA5M09X4lW9mUV%2Ff7Olh3Ym3o022lgmYQoNA%2FwXUpgazf2xRym8YigmsoihDxtGBQEowFCtEZGsNLVxbvqXg%2BwtM4AJXKvN0UmrkkThTdM95RspUZqaipv8Tj6J7EkGQXH7CpQq%2BjyHz04wgUcn8WZKEIqGWDzCl7BJRQg3KdzjKZi1GNhKVWshxOwnX3Vo%2BNpwTlardJV3PemsM8P9nshdsmFmQ2OiSOR6bYJ%2BmeL13eS%2BfS%2BI88xceuGVvfdXNfm5xXh1KjwHw5FVdP94uT%2FI9ydFzx40jlfBqgnUy8ty9CAVEdlGjXffetA1cM%2Fo%2BEPQKlcobKUMBPGG3oZEeq97ctXZJGf0STckXBDcs8jVMOD3gMUGOqUBqpERR5rRE67k43K1qFdJm92wMg7fnL4lIb3tA9R2s4r7IR866Vp6M%2FebgLpwNeCU%2FG6fvSEaQ8%2FWQwIJ99mMfqFqc4VlSDGKWVAHRtvQFi5pkzjVoolWbCOc%2BsWZ2hI97g2u9wPTtD%2F3DNXgdMqanVH3arRhldZn12p%2BuMEiCPq7l1oiAiVcprd9Gcanx8HdeTb1xnhFheShTPaTW4VynCRVLwTr&X-Amz-Signature=a3b110909ddf2ac4d31b8ca2a8d588553466323d43d8b7b45990d4365341e440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XXMJ4H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi1pRNotoxMT1EFidOt9%2FyWQp%2BbSRcloEeAVqELpYBrgIgT6dgGZKHhtTP%2BH6FvHpsxGXrtx4JQNvGPeJoeJ1G%2Fogq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJiPLEUqx7A4iUnj3SrcA42GXBWVsJ75OzLlkU98PZD8yrLHqpQU3cSp2QVI0pdDRjIX6MvOSJaF0dbedmUDuROowPqVdeh5BUqFHPY9CAErusmzzkkAUepMZUUmCl47soAz6S4NzLWgBC93sUDV%2FebLraTk99JqFbQgd%2BLaO9WEbODJ%2BfvA52omwnaRUlfjGdPlhH2CY%2FBl9Tl26Ulidp2s3%2BUGVF4NBG47UCIxfZDBmZBZAtNnm%2Ba426fgFkJ6v83X91VZJxz772LOmJ4gLEcmhUVvBa67RIfVAoA5M09X4lW9mUV%2Ff7Olh3Ym3o022lgmYQoNA%2FwXUpgazf2xRym8YigmsoihDxtGBQEowFCtEZGsNLVxbvqXg%2BwtM4AJXKvN0UmrkkThTdM95RspUZqaipv8Tj6J7EkGQXH7CpQq%2BjyHz04wgUcn8WZKEIqGWDzCl7BJRQg3KdzjKZi1GNhKVWshxOwnX3Vo%2BNpwTlardJV3PemsM8P9nshdsmFmQ2OiSOR6bYJ%2BmeL13eS%2BfS%2BI88xceuGVvfdXNfm5xXh1KjwHw5FVdP94uT%2FI9ydFzx40jlfBqgnUy8ty9CAVEdlGjXffetA1cM%2Fo%2BEPQKlcobKUMBPGG3oZEeq97ctXZJGf0STckXBDcs8jVMOD3gMUGOqUBqpERR5rRE67k43K1qFdJm92wMg7fnL4lIb3tA9R2s4r7IR866Vp6M%2FebgLpwNeCU%2FG6fvSEaQ8%2FWQwIJ99mMfqFqc4VlSDGKWVAHRtvQFi5pkzjVoolWbCOc%2BsWZ2hI97g2u9wPTtD%2F3DNXgdMqanVH3arRhldZn12p%2BuMEiCPq7l1oiAiVcprd9Gcanx8HdeTb1xnhFheShTPaTW4VynCRVLwTr&X-Amz-Signature=09d392a7cf6f1c0dd2ea770e3e774ed0a1c1bf9581b378ecd369b3b888537d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XXMJ4H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi1pRNotoxMT1EFidOt9%2FyWQp%2BbSRcloEeAVqELpYBrgIgT6dgGZKHhtTP%2BH6FvHpsxGXrtx4JQNvGPeJoeJ1G%2Fogq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJiPLEUqx7A4iUnj3SrcA42GXBWVsJ75OzLlkU98PZD8yrLHqpQU3cSp2QVI0pdDRjIX6MvOSJaF0dbedmUDuROowPqVdeh5BUqFHPY9CAErusmzzkkAUepMZUUmCl47soAz6S4NzLWgBC93sUDV%2FebLraTk99JqFbQgd%2BLaO9WEbODJ%2BfvA52omwnaRUlfjGdPlhH2CY%2FBl9Tl26Ulidp2s3%2BUGVF4NBG47UCIxfZDBmZBZAtNnm%2Ba426fgFkJ6v83X91VZJxz772LOmJ4gLEcmhUVvBa67RIfVAoA5M09X4lW9mUV%2Ff7Olh3Ym3o022lgmYQoNA%2FwXUpgazf2xRym8YigmsoihDxtGBQEowFCtEZGsNLVxbvqXg%2BwtM4AJXKvN0UmrkkThTdM95RspUZqaipv8Tj6J7EkGQXH7CpQq%2BjyHz04wgUcn8WZKEIqGWDzCl7BJRQg3KdzjKZi1GNhKVWshxOwnX3Vo%2BNpwTlardJV3PemsM8P9nshdsmFmQ2OiSOR6bYJ%2BmeL13eS%2BfS%2BI88xceuGVvfdXNfm5xXh1KjwHw5FVdP94uT%2FI9ydFzx40jlfBqgnUy8ty9CAVEdlGjXffetA1cM%2Fo%2BEPQKlcobKUMBPGG3oZEeq97ctXZJGf0STckXBDcs8jVMOD3gMUGOqUBqpERR5rRE67k43K1qFdJm92wMg7fnL4lIb3tA9R2s4r7IR866Vp6M%2FebgLpwNeCU%2FG6fvSEaQ8%2FWQwIJ99mMfqFqc4VlSDGKWVAHRtvQFi5pkzjVoolWbCOc%2BsWZ2hI97g2u9wPTtD%2F3DNXgdMqanVH3arRhldZn12p%2BuMEiCPq7l1oiAiVcprd9Gcanx8HdeTb1xnhFheShTPaTW4VynCRVLwTr&X-Amz-Signature=d20afbb55aa3456d730654454b5031df1bb31da9bd26b1897de43c70bd168776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XXMJ4H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi1pRNotoxMT1EFidOt9%2FyWQp%2BbSRcloEeAVqELpYBrgIgT6dgGZKHhtTP%2BH6FvHpsxGXrtx4JQNvGPeJoeJ1G%2Fogq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJiPLEUqx7A4iUnj3SrcA42GXBWVsJ75OzLlkU98PZD8yrLHqpQU3cSp2QVI0pdDRjIX6MvOSJaF0dbedmUDuROowPqVdeh5BUqFHPY9CAErusmzzkkAUepMZUUmCl47soAz6S4NzLWgBC93sUDV%2FebLraTk99JqFbQgd%2BLaO9WEbODJ%2BfvA52omwnaRUlfjGdPlhH2CY%2FBl9Tl26Ulidp2s3%2BUGVF4NBG47UCIxfZDBmZBZAtNnm%2Ba426fgFkJ6v83X91VZJxz772LOmJ4gLEcmhUVvBa67RIfVAoA5M09X4lW9mUV%2Ff7Olh3Ym3o022lgmYQoNA%2FwXUpgazf2xRym8YigmsoihDxtGBQEowFCtEZGsNLVxbvqXg%2BwtM4AJXKvN0UmrkkThTdM95RspUZqaipv8Tj6J7EkGQXH7CpQq%2BjyHz04wgUcn8WZKEIqGWDzCl7BJRQg3KdzjKZi1GNhKVWshxOwnX3Vo%2BNpwTlardJV3PemsM8P9nshdsmFmQ2OiSOR6bYJ%2BmeL13eS%2BfS%2BI88xceuGVvfdXNfm5xXh1KjwHw5FVdP94uT%2FI9ydFzx40jlfBqgnUy8ty9CAVEdlGjXffetA1cM%2Fo%2BEPQKlcobKUMBPGG3oZEeq97ctXZJGf0STckXBDcs8jVMOD3gMUGOqUBqpERR5rRE67k43K1qFdJm92wMg7fnL4lIb3tA9R2s4r7IR866Vp6M%2FebgLpwNeCU%2FG6fvSEaQ8%2FWQwIJ99mMfqFqc4VlSDGKWVAHRtvQFi5pkzjVoolWbCOc%2BsWZ2hI97g2u9wPTtD%2F3DNXgdMqanVH3arRhldZn12p%2BuMEiCPq7l1oiAiVcprd9Gcanx8HdeTb1xnhFheShTPaTW4VynCRVLwTr&X-Amz-Signature=ce743b67fe66021660edca0205e18a9d714a7e5ed51fe305f8da3854dda1453a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XXMJ4H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi1pRNotoxMT1EFidOt9%2FyWQp%2BbSRcloEeAVqELpYBrgIgT6dgGZKHhtTP%2BH6FvHpsxGXrtx4JQNvGPeJoeJ1G%2Fogq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJiPLEUqx7A4iUnj3SrcA42GXBWVsJ75OzLlkU98PZD8yrLHqpQU3cSp2QVI0pdDRjIX6MvOSJaF0dbedmUDuROowPqVdeh5BUqFHPY9CAErusmzzkkAUepMZUUmCl47soAz6S4NzLWgBC93sUDV%2FebLraTk99JqFbQgd%2BLaO9WEbODJ%2BfvA52omwnaRUlfjGdPlhH2CY%2FBl9Tl26Ulidp2s3%2BUGVF4NBG47UCIxfZDBmZBZAtNnm%2Ba426fgFkJ6v83X91VZJxz772LOmJ4gLEcmhUVvBa67RIfVAoA5M09X4lW9mUV%2Ff7Olh3Ym3o022lgmYQoNA%2FwXUpgazf2xRym8YigmsoihDxtGBQEowFCtEZGsNLVxbvqXg%2BwtM4AJXKvN0UmrkkThTdM95RspUZqaipv8Tj6J7EkGQXH7CpQq%2BjyHz04wgUcn8WZKEIqGWDzCl7BJRQg3KdzjKZi1GNhKVWshxOwnX3Vo%2BNpwTlardJV3PemsM8P9nshdsmFmQ2OiSOR6bYJ%2BmeL13eS%2BfS%2BI88xceuGVvfdXNfm5xXh1KjwHw5FVdP94uT%2FI9ydFzx40jlfBqgnUy8ty9CAVEdlGjXffetA1cM%2Fo%2BEPQKlcobKUMBPGG3oZEeq97ctXZJGf0STckXBDcs8jVMOD3gMUGOqUBqpERR5rRE67k43K1qFdJm92wMg7fnL4lIb3tA9R2s4r7IR866Vp6M%2FebgLpwNeCU%2FG6fvSEaQ8%2FWQwIJ99mMfqFqc4VlSDGKWVAHRtvQFi5pkzjVoolWbCOc%2BsWZ2hI97g2u9wPTtD%2F3DNXgdMqanVH3arRhldZn12p%2BuMEiCPq7l1oiAiVcprd9Gcanx8HdeTb1xnhFheShTPaTW4VynCRVLwTr&X-Amz-Signature=4bd12978ca5f824fc89a6b8160b899b95f631ef71edad425c70c9aeae440911a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
