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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6AYUOD%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzn6gU1qLNnD%2BNYxwxgvmNJ%2B5pOb2lNlurKd5hR0VenwIhAPNOfPIjQuFtJIZjEvbYio8I3uKznlWWk%2BphGILQFdUHKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPoIqeVfJ%2FsGY4xhsq3APbN0YU29gKBVBnN4q2d3w8WetOPX6v5jUrPLllZmATT1MNDSbLB6D%2B77dYK8E47d8ac4PXkQeiiT5qYm4ulfvmCtG235HcYdBdxBosChiq4LOu2%2BAOwngF0T5FQ0aTX9wkz2OpQGI9UldVhkfqx0wO92h2N%2FrV356wadBi%2FRJJwwtkGA5HvB%2F1mA9qr5hLNp4fRQFgKmSb1NU4YlSAgOJy53GLO%2FV%2BBiA3XPk%2FJ2B4jhgHMu%2Bo6PdtmWAJTPoh9j%2FlWJtWM5bKtT8E6d7Hvs0x%2Fz9Ai09zZLtJewY7Irl4IlchypWq0K2ts%2FJXhHYI9y17CjMYgoSCjGCbHRUhMnqxHPaGLIXNLQdoWR5%2BdinNQo99cvCaBkk8%2Btbzn6Alyh%2FMAtKVbNIUvbQZ7TXaH9Ui9Vtw2%2FOpo3khRJvNiA6Ps8aKH%2BfDtUZjqpNxSU1ihoqKJJcMqkErwryLEyjbTAgnGKLecvSSD5eCQ84bDDIk%2FtxbhWREsaD0Al6YUFfapt41YWaz4Gbyw0tD86MoPtGcC03Rua%2FSbVbLsJcUyRMEZ2KmZVfyULJ4K0R1z2S%2FpyPB5VQXVvYfY71OxDCr6C3wVTaNO6qOtM0lJf4XXg60%2BZY7IDUxZcFH1dTN%2FDCqpunQBjqkAbIis80RH3gnOedshzX4Bg%2B0FO1tLfV4AVy9PSR2mVl1bma8QK1iyqXA5lqL0Fqsh6vNLUgLvZH4Kv8WClOUvMefWkNzKQmoqxho%2BQtc8VMHJLLk77RZ6JC4K%2BLbyHV9rP2St633hdEBBs09ojT6Isg25LlGYjT1W2pNwk47SVfuiOB1LSxTIToNhB67HmkAiO%2BdKverc20fTvVQxs7Aj2%2F%2FS1VG&X-Amz-Signature=77944256cfd6bce592636146487f17e81a418c182439a7339b412f197dc1f183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6AYUOD%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzn6gU1qLNnD%2BNYxwxgvmNJ%2B5pOb2lNlurKd5hR0VenwIhAPNOfPIjQuFtJIZjEvbYio8I3uKznlWWk%2BphGILQFdUHKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPoIqeVfJ%2FsGY4xhsq3APbN0YU29gKBVBnN4q2d3w8WetOPX6v5jUrPLllZmATT1MNDSbLB6D%2B77dYK8E47d8ac4PXkQeiiT5qYm4ulfvmCtG235HcYdBdxBosChiq4LOu2%2BAOwngF0T5FQ0aTX9wkz2OpQGI9UldVhkfqx0wO92h2N%2FrV356wadBi%2FRJJwwtkGA5HvB%2F1mA9qr5hLNp4fRQFgKmSb1NU4YlSAgOJy53GLO%2FV%2BBiA3XPk%2FJ2B4jhgHMu%2Bo6PdtmWAJTPoh9j%2FlWJtWM5bKtT8E6d7Hvs0x%2Fz9Ai09zZLtJewY7Irl4IlchypWq0K2ts%2FJXhHYI9y17CjMYgoSCjGCbHRUhMnqxHPaGLIXNLQdoWR5%2BdinNQo99cvCaBkk8%2Btbzn6Alyh%2FMAtKVbNIUvbQZ7TXaH9Ui9Vtw2%2FOpo3khRJvNiA6Ps8aKH%2BfDtUZjqpNxSU1ihoqKJJcMqkErwryLEyjbTAgnGKLecvSSD5eCQ84bDDIk%2FtxbhWREsaD0Al6YUFfapt41YWaz4Gbyw0tD86MoPtGcC03Rua%2FSbVbLsJcUyRMEZ2KmZVfyULJ4K0R1z2S%2FpyPB5VQXVvYfY71OxDCr6C3wVTaNO6qOtM0lJf4XXg60%2BZY7IDUxZcFH1dTN%2FDCqpunQBjqkAbIis80RH3gnOedshzX4Bg%2B0FO1tLfV4AVy9PSR2mVl1bma8QK1iyqXA5lqL0Fqsh6vNLUgLvZH4Kv8WClOUvMefWkNzKQmoqxho%2BQtc8VMHJLLk77RZ6JC4K%2BLbyHV9rP2St633hdEBBs09ojT6Isg25LlGYjT1W2pNwk47SVfuiOB1LSxTIToNhB67HmkAiO%2BdKverc20fTvVQxs7Aj2%2F%2FS1VG&X-Amz-Signature=3002f1458242f51736e5b517048dbfc182b175d434d1a0cdd75a580e353e0c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6AYUOD%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzn6gU1qLNnD%2BNYxwxgvmNJ%2B5pOb2lNlurKd5hR0VenwIhAPNOfPIjQuFtJIZjEvbYio8I3uKznlWWk%2BphGILQFdUHKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPoIqeVfJ%2FsGY4xhsq3APbN0YU29gKBVBnN4q2d3w8WetOPX6v5jUrPLllZmATT1MNDSbLB6D%2B77dYK8E47d8ac4PXkQeiiT5qYm4ulfvmCtG235HcYdBdxBosChiq4LOu2%2BAOwngF0T5FQ0aTX9wkz2OpQGI9UldVhkfqx0wO92h2N%2FrV356wadBi%2FRJJwwtkGA5HvB%2F1mA9qr5hLNp4fRQFgKmSb1NU4YlSAgOJy53GLO%2FV%2BBiA3XPk%2FJ2B4jhgHMu%2Bo6PdtmWAJTPoh9j%2FlWJtWM5bKtT8E6d7Hvs0x%2Fz9Ai09zZLtJewY7Irl4IlchypWq0K2ts%2FJXhHYI9y17CjMYgoSCjGCbHRUhMnqxHPaGLIXNLQdoWR5%2BdinNQo99cvCaBkk8%2Btbzn6Alyh%2FMAtKVbNIUvbQZ7TXaH9Ui9Vtw2%2FOpo3khRJvNiA6Ps8aKH%2BfDtUZjqpNxSU1ihoqKJJcMqkErwryLEyjbTAgnGKLecvSSD5eCQ84bDDIk%2FtxbhWREsaD0Al6YUFfapt41YWaz4Gbyw0tD86MoPtGcC03Rua%2FSbVbLsJcUyRMEZ2KmZVfyULJ4K0R1z2S%2FpyPB5VQXVvYfY71OxDCr6C3wVTaNO6qOtM0lJf4XXg60%2BZY7IDUxZcFH1dTN%2FDCqpunQBjqkAbIis80RH3gnOedshzX4Bg%2B0FO1tLfV4AVy9PSR2mVl1bma8QK1iyqXA5lqL0Fqsh6vNLUgLvZH4Kv8WClOUvMefWkNzKQmoqxho%2BQtc8VMHJLLk77RZ6JC4K%2BLbyHV9rP2St633hdEBBs09ojT6Isg25LlGYjT1W2pNwk47SVfuiOB1LSxTIToNhB67HmkAiO%2BdKverc20fTvVQxs7Aj2%2F%2FS1VG&X-Amz-Signature=9dbcc1192532bc0ea7aae165345655bff7a63f2fc34ea0a365fb8daf25e41728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6AYUOD%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzn6gU1qLNnD%2BNYxwxgvmNJ%2B5pOb2lNlurKd5hR0VenwIhAPNOfPIjQuFtJIZjEvbYio8I3uKznlWWk%2BphGILQFdUHKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPoIqeVfJ%2FsGY4xhsq3APbN0YU29gKBVBnN4q2d3w8WetOPX6v5jUrPLllZmATT1MNDSbLB6D%2B77dYK8E47d8ac4PXkQeiiT5qYm4ulfvmCtG235HcYdBdxBosChiq4LOu2%2BAOwngF0T5FQ0aTX9wkz2OpQGI9UldVhkfqx0wO92h2N%2FrV356wadBi%2FRJJwwtkGA5HvB%2F1mA9qr5hLNp4fRQFgKmSb1NU4YlSAgOJy53GLO%2FV%2BBiA3XPk%2FJ2B4jhgHMu%2Bo6PdtmWAJTPoh9j%2FlWJtWM5bKtT8E6d7Hvs0x%2Fz9Ai09zZLtJewY7Irl4IlchypWq0K2ts%2FJXhHYI9y17CjMYgoSCjGCbHRUhMnqxHPaGLIXNLQdoWR5%2BdinNQo99cvCaBkk8%2Btbzn6Alyh%2FMAtKVbNIUvbQZ7TXaH9Ui9Vtw2%2FOpo3khRJvNiA6Ps8aKH%2BfDtUZjqpNxSU1ihoqKJJcMqkErwryLEyjbTAgnGKLecvSSD5eCQ84bDDIk%2FtxbhWREsaD0Al6YUFfapt41YWaz4Gbyw0tD86MoPtGcC03Rua%2FSbVbLsJcUyRMEZ2KmZVfyULJ4K0R1z2S%2FpyPB5VQXVvYfY71OxDCr6C3wVTaNO6qOtM0lJf4XXg60%2BZY7IDUxZcFH1dTN%2FDCqpunQBjqkAbIis80RH3gnOedshzX4Bg%2B0FO1tLfV4AVy9PSR2mVl1bma8QK1iyqXA5lqL0Fqsh6vNLUgLvZH4Kv8WClOUvMefWkNzKQmoqxho%2BQtc8VMHJLLk77RZ6JC4K%2BLbyHV9rP2St633hdEBBs09ojT6Isg25LlGYjT1W2pNwk47SVfuiOB1LSxTIToNhB67HmkAiO%2BdKverc20fTvVQxs7Aj2%2F%2FS1VG&X-Amz-Signature=d36c6b3dca840c8bdd2b009ce162b5998d0495ae3c510e341454713cdaca6ff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6AYUOD%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzn6gU1qLNnD%2BNYxwxgvmNJ%2B5pOb2lNlurKd5hR0VenwIhAPNOfPIjQuFtJIZjEvbYio8I3uKznlWWk%2BphGILQFdUHKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPoIqeVfJ%2FsGY4xhsq3APbN0YU29gKBVBnN4q2d3w8WetOPX6v5jUrPLllZmATT1MNDSbLB6D%2B77dYK8E47d8ac4PXkQeiiT5qYm4ulfvmCtG235HcYdBdxBosChiq4LOu2%2BAOwngF0T5FQ0aTX9wkz2OpQGI9UldVhkfqx0wO92h2N%2FrV356wadBi%2FRJJwwtkGA5HvB%2F1mA9qr5hLNp4fRQFgKmSb1NU4YlSAgOJy53GLO%2FV%2BBiA3XPk%2FJ2B4jhgHMu%2Bo6PdtmWAJTPoh9j%2FlWJtWM5bKtT8E6d7Hvs0x%2Fz9Ai09zZLtJewY7Irl4IlchypWq0K2ts%2FJXhHYI9y17CjMYgoSCjGCbHRUhMnqxHPaGLIXNLQdoWR5%2BdinNQo99cvCaBkk8%2Btbzn6Alyh%2FMAtKVbNIUvbQZ7TXaH9Ui9Vtw2%2FOpo3khRJvNiA6Ps8aKH%2BfDtUZjqpNxSU1ihoqKJJcMqkErwryLEyjbTAgnGKLecvSSD5eCQ84bDDIk%2FtxbhWREsaD0Al6YUFfapt41YWaz4Gbyw0tD86MoPtGcC03Rua%2FSbVbLsJcUyRMEZ2KmZVfyULJ4K0R1z2S%2FpyPB5VQXVvYfY71OxDCr6C3wVTaNO6qOtM0lJf4XXg60%2BZY7IDUxZcFH1dTN%2FDCqpunQBjqkAbIis80RH3gnOedshzX4Bg%2B0FO1tLfV4AVy9PSR2mVl1bma8QK1iyqXA5lqL0Fqsh6vNLUgLvZH4Kv8WClOUvMefWkNzKQmoqxho%2BQtc8VMHJLLk77RZ6JC4K%2BLbyHV9rP2St633hdEBBs09ojT6Isg25LlGYjT1W2pNwk47SVfuiOB1LSxTIToNhB67HmkAiO%2BdKverc20fTvVQxs7Aj2%2F%2FS1VG&X-Amz-Signature=0b5a2404179406b9c96e3745cf323a3fbbcab9237c7c50cce34656aa8983b6e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6AYUOD%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzn6gU1qLNnD%2BNYxwxgvmNJ%2B5pOb2lNlurKd5hR0VenwIhAPNOfPIjQuFtJIZjEvbYio8I3uKznlWWk%2BphGILQFdUHKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPoIqeVfJ%2FsGY4xhsq3APbN0YU29gKBVBnN4q2d3w8WetOPX6v5jUrPLllZmATT1MNDSbLB6D%2B77dYK8E47d8ac4PXkQeiiT5qYm4ulfvmCtG235HcYdBdxBosChiq4LOu2%2BAOwngF0T5FQ0aTX9wkz2OpQGI9UldVhkfqx0wO92h2N%2FrV356wadBi%2FRJJwwtkGA5HvB%2F1mA9qr5hLNp4fRQFgKmSb1NU4YlSAgOJy53GLO%2FV%2BBiA3XPk%2FJ2B4jhgHMu%2Bo6PdtmWAJTPoh9j%2FlWJtWM5bKtT8E6d7Hvs0x%2Fz9Ai09zZLtJewY7Irl4IlchypWq0K2ts%2FJXhHYI9y17CjMYgoSCjGCbHRUhMnqxHPaGLIXNLQdoWR5%2BdinNQo99cvCaBkk8%2Btbzn6Alyh%2FMAtKVbNIUvbQZ7TXaH9Ui9Vtw2%2FOpo3khRJvNiA6Ps8aKH%2BfDtUZjqpNxSU1ihoqKJJcMqkErwryLEyjbTAgnGKLecvSSD5eCQ84bDDIk%2FtxbhWREsaD0Al6YUFfapt41YWaz4Gbyw0tD86MoPtGcC03Rua%2FSbVbLsJcUyRMEZ2KmZVfyULJ4K0R1z2S%2FpyPB5VQXVvYfY71OxDCr6C3wVTaNO6qOtM0lJf4XXg60%2BZY7IDUxZcFH1dTN%2FDCqpunQBjqkAbIis80RH3gnOedshzX4Bg%2B0FO1tLfV4AVy9PSR2mVl1bma8QK1iyqXA5lqL0Fqsh6vNLUgLvZH4Kv8WClOUvMefWkNzKQmoqxho%2BQtc8VMHJLLk77RZ6JC4K%2BLbyHV9rP2St633hdEBBs09ojT6Isg25LlGYjT1W2pNwk47SVfuiOB1LSxTIToNhB67HmkAiO%2BdKverc20fTvVQxs7Aj2%2F%2FS1VG&X-Amz-Signature=c6f55761ce3a7619363dfacb997c0526b50688b3aaeca25369adb78ea266a709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6AYUOD%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzn6gU1qLNnD%2BNYxwxgvmNJ%2B5pOb2lNlurKd5hR0VenwIhAPNOfPIjQuFtJIZjEvbYio8I3uKznlWWk%2BphGILQFdUHKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPoIqeVfJ%2FsGY4xhsq3APbN0YU29gKBVBnN4q2d3w8WetOPX6v5jUrPLllZmATT1MNDSbLB6D%2B77dYK8E47d8ac4PXkQeiiT5qYm4ulfvmCtG235HcYdBdxBosChiq4LOu2%2BAOwngF0T5FQ0aTX9wkz2OpQGI9UldVhkfqx0wO92h2N%2FrV356wadBi%2FRJJwwtkGA5HvB%2F1mA9qr5hLNp4fRQFgKmSb1NU4YlSAgOJy53GLO%2FV%2BBiA3XPk%2FJ2B4jhgHMu%2Bo6PdtmWAJTPoh9j%2FlWJtWM5bKtT8E6d7Hvs0x%2Fz9Ai09zZLtJewY7Irl4IlchypWq0K2ts%2FJXhHYI9y17CjMYgoSCjGCbHRUhMnqxHPaGLIXNLQdoWR5%2BdinNQo99cvCaBkk8%2Btbzn6Alyh%2FMAtKVbNIUvbQZ7TXaH9Ui9Vtw2%2FOpo3khRJvNiA6Ps8aKH%2BfDtUZjqpNxSU1ihoqKJJcMqkErwryLEyjbTAgnGKLecvSSD5eCQ84bDDIk%2FtxbhWREsaD0Al6YUFfapt41YWaz4Gbyw0tD86MoPtGcC03Rua%2FSbVbLsJcUyRMEZ2KmZVfyULJ4K0R1z2S%2FpyPB5VQXVvYfY71OxDCr6C3wVTaNO6qOtM0lJf4XXg60%2BZY7IDUxZcFH1dTN%2FDCqpunQBjqkAbIis80RH3gnOedshzX4Bg%2B0FO1tLfV4AVy9PSR2mVl1bma8QK1iyqXA5lqL0Fqsh6vNLUgLvZH4Kv8WClOUvMefWkNzKQmoqxho%2BQtc8VMHJLLk77RZ6JC4K%2BLbyHV9rP2St633hdEBBs09ojT6Isg25LlGYjT1W2pNwk47SVfuiOB1LSxTIToNhB67HmkAiO%2BdKverc20fTvVQxs7Aj2%2F%2FS1VG&X-Amz-Signature=18d801fc5cedb6c73ab428d0fa183a69adf8c28ceaee9f683f2ab795b575f69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6AYUOD%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzn6gU1qLNnD%2BNYxwxgvmNJ%2B5pOb2lNlurKd5hR0VenwIhAPNOfPIjQuFtJIZjEvbYio8I3uKznlWWk%2BphGILQFdUHKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPoIqeVfJ%2FsGY4xhsq3APbN0YU29gKBVBnN4q2d3w8WetOPX6v5jUrPLllZmATT1MNDSbLB6D%2B77dYK8E47d8ac4PXkQeiiT5qYm4ulfvmCtG235HcYdBdxBosChiq4LOu2%2BAOwngF0T5FQ0aTX9wkz2OpQGI9UldVhkfqx0wO92h2N%2FrV356wadBi%2FRJJwwtkGA5HvB%2F1mA9qr5hLNp4fRQFgKmSb1NU4YlSAgOJy53GLO%2FV%2BBiA3XPk%2FJ2B4jhgHMu%2Bo6PdtmWAJTPoh9j%2FlWJtWM5bKtT8E6d7Hvs0x%2Fz9Ai09zZLtJewY7Irl4IlchypWq0K2ts%2FJXhHYI9y17CjMYgoSCjGCbHRUhMnqxHPaGLIXNLQdoWR5%2BdinNQo99cvCaBkk8%2Btbzn6Alyh%2FMAtKVbNIUvbQZ7TXaH9Ui9Vtw2%2FOpo3khRJvNiA6Ps8aKH%2BfDtUZjqpNxSU1ihoqKJJcMqkErwryLEyjbTAgnGKLecvSSD5eCQ84bDDIk%2FtxbhWREsaD0Al6YUFfapt41YWaz4Gbyw0tD86MoPtGcC03Rua%2FSbVbLsJcUyRMEZ2KmZVfyULJ4K0R1z2S%2FpyPB5VQXVvYfY71OxDCr6C3wVTaNO6qOtM0lJf4XXg60%2BZY7IDUxZcFH1dTN%2FDCqpunQBjqkAbIis80RH3gnOedshzX4Bg%2B0FO1tLfV4AVy9PSR2mVl1bma8QK1iyqXA5lqL0Fqsh6vNLUgLvZH4Kv8WClOUvMefWkNzKQmoqxho%2BQtc8VMHJLLk77RZ6JC4K%2BLbyHV9rP2St633hdEBBs09ojT6Isg25LlGYjT1W2pNwk47SVfuiOB1LSxTIToNhB67HmkAiO%2BdKverc20fTvVQxs7Aj2%2F%2FS1VG&X-Amz-Signature=a87c9dbc185f365e437996728eb1619d717b985f893f1b878a9b4d65fd60d67d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6AYUOD%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzn6gU1qLNnD%2BNYxwxgvmNJ%2B5pOb2lNlurKd5hR0VenwIhAPNOfPIjQuFtJIZjEvbYio8I3uKznlWWk%2BphGILQFdUHKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPoIqeVfJ%2FsGY4xhsq3APbN0YU29gKBVBnN4q2d3w8WetOPX6v5jUrPLllZmATT1MNDSbLB6D%2B77dYK8E47d8ac4PXkQeiiT5qYm4ulfvmCtG235HcYdBdxBosChiq4LOu2%2BAOwngF0T5FQ0aTX9wkz2OpQGI9UldVhkfqx0wO92h2N%2FrV356wadBi%2FRJJwwtkGA5HvB%2F1mA9qr5hLNp4fRQFgKmSb1NU4YlSAgOJy53GLO%2FV%2BBiA3XPk%2FJ2B4jhgHMu%2Bo6PdtmWAJTPoh9j%2FlWJtWM5bKtT8E6d7Hvs0x%2Fz9Ai09zZLtJewY7Irl4IlchypWq0K2ts%2FJXhHYI9y17CjMYgoSCjGCbHRUhMnqxHPaGLIXNLQdoWR5%2BdinNQo99cvCaBkk8%2Btbzn6Alyh%2FMAtKVbNIUvbQZ7TXaH9Ui9Vtw2%2FOpo3khRJvNiA6Ps8aKH%2BfDtUZjqpNxSU1ihoqKJJcMqkErwryLEyjbTAgnGKLecvSSD5eCQ84bDDIk%2FtxbhWREsaD0Al6YUFfapt41YWaz4Gbyw0tD86MoPtGcC03Rua%2FSbVbLsJcUyRMEZ2KmZVfyULJ4K0R1z2S%2FpyPB5VQXVvYfY71OxDCr6C3wVTaNO6qOtM0lJf4XXg60%2BZY7IDUxZcFH1dTN%2FDCqpunQBjqkAbIis80RH3gnOedshzX4Bg%2B0FO1tLfV4AVy9PSR2mVl1bma8QK1iyqXA5lqL0Fqsh6vNLUgLvZH4Kv8WClOUvMefWkNzKQmoqxho%2BQtc8VMHJLLk77RZ6JC4K%2BLbyHV9rP2St633hdEBBs09ojT6Isg25LlGYjT1W2pNwk47SVfuiOB1LSxTIToNhB67HmkAiO%2BdKverc20fTvVQxs7Aj2%2F%2FS1VG&X-Amz-Signature=46e3976fc68d49be1d91949f4588a1161af32e741fe0ef2c45e0c953439b628e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6AYUOD%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzn6gU1qLNnD%2BNYxwxgvmNJ%2B5pOb2lNlurKd5hR0VenwIhAPNOfPIjQuFtJIZjEvbYio8I3uKznlWWk%2BphGILQFdUHKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPoIqeVfJ%2FsGY4xhsq3APbN0YU29gKBVBnN4q2d3w8WetOPX6v5jUrPLllZmATT1MNDSbLB6D%2B77dYK8E47d8ac4PXkQeiiT5qYm4ulfvmCtG235HcYdBdxBosChiq4LOu2%2BAOwngF0T5FQ0aTX9wkz2OpQGI9UldVhkfqx0wO92h2N%2FrV356wadBi%2FRJJwwtkGA5HvB%2F1mA9qr5hLNp4fRQFgKmSb1NU4YlSAgOJy53GLO%2FV%2BBiA3XPk%2FJ2B4jhgHMu%2Bo6PdtmWAJTPoh9j%2FlWJtWM5bKtT8E6d7Hvs0x%2Fz9Ai09zZLtJewY7Irl4IlchypWq0K2ts%2FJXhHYI9y17CjMYgoSCjGCbHRUhMnqxHPaGLIXNLQdoWR5%2BdinNQo99cvCaBkk8%2Btbzn6Alyh%2FMAtKVbNIUvbQZ7TXaH9Ui9Vtw2%2FOpo3khRJvNiA6Ps8aKH%2BfDtUZjqpNxSU1ihoqKJJcMqkErwryLEyjbTAgnGKLecvSSD5eCQ84bDDIk%2FtxbhWREsaD0Al6YUFfapt41YWaz4Gbyw0tD86MoPtGcC03Rua%2FSbVbLsJcUyRMEZ2KmZVfyULJ4K0R1z2S%2FpyPB5VQXVvYfY71OxDCr6C3wVTaNO6qOtM0lJf4XXg60%2BZY7IDUxZcFH1dTN%2FDCqpunQBjqkAbIis80RH3gnOedshzX4Bg%2B0FO1tLfV4AVy9PSR2mVl1bma8QK1iyqXA5lqL0Fqsh6vNLUgLvZH4Kv8WClOUvMefWkNzKQmoqxho%2BQtc8VMHJLLk77RZ6JC4K%2BLbyHV9rP2St633hdEBBs09ojT6Isg25LlGYjT1W2pNwk47SVfuiOB1LSxTIToNhB67HmkAiO%2BdKverc20fTvVQxs7Aj2%2F%2FS1VG&X-Amz-Signature=bb12bcf1198e5bffd773654614f8f943a1958541e25296204ae90ea6cc3c1c75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6AYUOD%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzn6gU1qLNnD%2BNYxwxgvmNJ%2B5pOb2lNlurKd5hR0VenwIhAPNOfPIjQuFtJIZjEvbYio8I3uKznlWWk%2BphGILQFdUHKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPoIqeVfJ%2FsGY4xhsq3APbN0YU29gKBVBnN4q2d3w8WetOPX6v5jUrPLllZmATT1MNDSbLB6D%2B77dYK8E47d8ac4PXkQeiiT5qYm4ulfvmCtG235HcYdBdxBosChiq4LOu2%2BAOwngF0T5FQ0aTX9wkz2OpQGI9UldVhkfqx0wO92h2N%2FrV356wadBi%2FRJJwwtkGA5HvB%2F1mA9qr5hLNp4fRQFgKmSb1NU4YlSAgOJy53GLO%2FV%2BBiA3XPk%2FJ2B4jhgHMu%2Bo6PdtmWAJTPoh9j%2FlWJtWM5bKtT8E6d7Hvs0x%2Fz9Ai09zZLtJewY7Irl4IlchypWq0K2ts%2FJXhHYI9y17CjMYgoSCjGCbHRUhMnqxHPaGLIXNLQdoWR5%2BdinNQo99cvCaBkk8%2Btbzn6Alyh%2FMAtKVbNIUvbQZ7TXaH9Ui9Vtw2%2FOpo3khRJvNiA6Ps8aKH%2BfDtUZjqpNxSU1ihoqKJJcMqkErwryLEyjbTAgnGKLecvSSD5eCQ84bDDIk%2FtxbhWREsaD0Al6YUFfapt41YWaz4Gbyw0tD86MoPtGcC03Rua%2FSbVbLsJcUyRMEZ2KmZVfyULJ4K0R1z2S%2FpyPB5VQXVvYfY71OxDCr6C3wVTaNO6qOtM0lJf4XXg60%2BZY7IDUxZcFH1dTN%2FDCqpunQBjqkAbIis80RH3gnOedshzX4Bg%2B0FO1tLfV4AVy9PSR2mVl1bma8QK1iyqXA5lqL0Fqsh6vNLUgLvZH4Kv8WClOUvMefWkNzKQmoqxho%2BQtc8VMHJLLk77RZ6JC4K%2BLbyHV9rP2St633hdEBBs09ojT6Isg25LlGYjT1W2pNwk47SVfuiOB1LSxTIToNhB67HmkAiO%2BdKverc20fTvVQxs7Aj2%2F%2FS1VG&X-Amz-Signature=52915462320557d1ee215a07058fd8c8bdb807eef0188541bb2333c355a49119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6AYUOD%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzn6gU1qLNnD%2BNYxwxgvmNJ%2B5pOb2lNlurKd5hR0VenwIhAPNOfPIjQuFtJIZjEvbYio8I3uKznlWWk%2BphGILQFdUHKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPoIqeVfJ%2FsGY4xhsq3APbN0YU29gKBVBnN4q2d3w8WetOPX6v5jUrPLllZmATT1MNDSbLB6D%2B77dYK8E47d8ac4PXkQeiiT5qYm4ulfvmCtG235HcYdBdxBosChiq4LOu2%2BAOwngF0T5FQ0aTX9wkz2OpQGI9UldVhkfqx0wO92h2N%2FrV356wadBi%2FRJJwwtkGA5HvB%2F1mA9qr5hLNp4fRQFgKmSb1NU4YlSAgOJy53GLO%2FV%2BBiA3XPk%2FJ2B4jhgHMu%2Bo6PdtmWAJTPoh9j%2FlWJtWM5bKtT8E6d7Hvs0x%2Fz9Ai09zZLtJewY7Irl4IlchypWq0K2ts%2FJXhHYI9y17CjMYgoSCjGCbHRUhMnqxHPaGLIXNLQdoWR5%2BdinNQo99cvCaBkk8%2Btbzn6Alyh%2FMAtKVbNIUvbQZ7TXaH9Ui9Vtw2%2FOpo3khRJvNiA6Ps8aKH%2BfDtUZjqpNxSU1ihoqKJJcMqkErwryLEyjbTAgnGKLecvSSD5eCQ84bDDIk%2FtxbhWREsaD0Al6YUFfapt41YWaz4Gbyw0tD86MoPtGcC03Rua%2FSbVbLsJcUyRMEZ2KmZVfyULJ4K0R1z2S%2FpyPB5VQXVvYfY71OxDCr6C3wVTaNO6qOtM0lJf4XXg60%2BZY7IDUxZcFH1dTN%2FDCqpunQBjqkAbIis80RH3gnOedshzX4Bg%2B0FO1tLfV4AVy9PSR2mVl1bma8QK1iyqXA5lqL0Fqsh6vNLUgLvZH4Kv8WClOUvMefWkNzKQmoqxho%2BQtc8VMHJLLk77RZ6JC4K%2BLbyHV9rP2St633hdEBBs09ojT6Isg25LlGYjT1W2pNwk47SVfuiOB1LSxTIToNhB67HmkAiO%2BdKverc20fTvVQxs7Aj2%2F%2FS1VG&X-Amz-Signature=9fe64a71d1e3168c912ebd986c02a151092f72001ea5b6e58aebf94dc46a5137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6AYUOD%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzn6gU1qLNnD%2BNYxwxgvmNJ%2B5pOb2lNlurKd5hR0VenwIhAPNOfPIjQuFtJIZjEvbYio8I3uKznlWWk%2BphGILQFdUHKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPoIqeVfJ%2FsGY4xhsq3APbN0YU29gKBVBnN4q2d3w8WetOPX6v5jUrPLllZmATT1MNDSbLB6D%2B77dYK8E47d8ac4PXkQeiiT5qYm4ulfvmCtG235HcYdBdxBosChiq4LOu2%2BAOwngF0T5FQ0aTX9wkz2OpQGI9UldVhkfqx0wO92h2N%2FrV356wadBi%2FRJJwwtkGA5HvB%2F1mA9qr5hLNp4fRQFgKmSb1NU4YlSAgOJy53GLO%2FV%2BBiA3XPk%2FJ2B4jhgHMu%2Bo6PdtmWAJTPoh9j%2FlWJtWM5bKtT8E6d7Hvs0x%2Fz9Ai09zZLtJewY7Irl4IlchypWq0K2ts%2FJXhHYI9y17CjMYgoSCjGCbHRUhMnqxHPaGLIXNLQdoWR5%2BdinNQo99cvCaBkk8%2Btbzn6Alyh%2FMAtKVbNIUvbQZ7TXaH9Ui9Vtw2%2FOpo3khRJvNiA6Ps8aKH%2BfDtUZjqpNxSU1ihoqKJJcMqkErwryLEyjbTAgnGKLecvSSD5eCQ84bDDIk%2FtxbhWREsaD0Al6YUFfapt41YWaz4Gbyw0tD86MoPtGcC03Rua%2FSbVbLsJcUyRMEZ2KmZVfyULJ4K0R1z2S%2FpyPB5VQXVvYfY71OxDCr6C3wVTaNO6qOtM0lJf4XXg60%2BZY7IDUxZcFH1dTN%2FDCqpunQBjqkAbIis80RH3gnOedshzX4Bg%2B0FO1tLfV4AVy9PSR2mVl1bma8QK1iyqXA5lqL0Fqsh6vNLUgLvZH4Kv8WClOUvMefWkNzKQmoqxho%2BQtc8VMHJLLk77RZ6JC4K%2BLbyHV9rP2St633hdEBBs09ojT6Isg25LlGYjT1W2pNwk47SVfuiOB1LSxTIToNhB67HmkAiO%2BdKverc20fTvVQxs7Aj2%2F%2FS1VG&X-Amz-Signature=828d27c33c52399f703f0c0526fda2f76cbed3b90fb079d6ff325cc67fdc2f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6AYUOD%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCzn6gU1qLNnD%2BNYxwxgvmNJ%2B5pOb2lNlurKd5hR0VenwIhAPNOfPIjQuFtJIZjEvbYio8I3uKznlWWk%2BphGILQFdUHKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPoIqeVfJ%2FsGY4xhsq3APbN0YU29gKBVBnN4q2d3w8WetOPX6v5jUrPLllZmATT1MNDSbLB6D%2B77dYK8E47d8ac4PXkQeiiT5qYm4ulfvmCtG235HcYdBdxBosChiq4LOu2%2BAOwngF0T5FQ0aTX9wkz2OpQGI9UldVhkfqx0wO92h2N%2FrV356wadBi%2FRJJwwtkGA5HvB%2F1mA9qr5hLNp4fRQFgKmSb1NU4YlSAgOJy53GLO%2FV%2BBiA3XPk%2FJ2B4jhgHMu%2Bo6PdtmWAJTPoh9j%2FlWJtWM5bKtT8E6d7Hvs0x%2Fz9Ai09zZLtJewY7Irl4IlchypWq0K2ts%2FJXhHYI9y17CjMYgoSCjGCbHRUhMnqxHPaGLIXNLQdoWR5%2BdinNQo99cvCaBkk8%2Btbzn6Alyh%2FMAtKVbNIUvbQZ7TXaH9Ui9Vtw2%2FOpo3khRJvNiA6Ps8aKH%2BfDtUZjqpNxSU1ihoqKJJcMqkErwryLEyjbTAgnGKLecvSSD5eCQ84bDDIk%2FtxbhWREsaD0Al6YUFfapt41YWaz4Gbyw0tD86MoPtGcC03Rua%2FSbVbLsJcUyRMEZ2KmZVfyULJ4K0R1z2S%2FpyPB5VQXVvYfY71OxDCr6C3wVTaNO6qOtM0lJf4XXg60%2BZY7IDUxZcFH1dTN%2FDCqpunQBjqkAbIis80RH3gnOedshzX4Bg%2B0FO1tLfV4AVy9PSR2mVl1bma8QK1iyqXA5lqL0Fqsh6vNLUgLvZH4Kv8WClOUvMefWkNzKQmoqxho%2BQtc8VMHJLLk77RZ6JC4K%2BLbyHV9rP2St633hdEBBs09ojT6Isg25LlGYjT1W2pNwk47SVfuiOB1LSxTIToNhB67HmkAiO%2BdKverc20fTvVQxs7Aj2%2F%2FS1VG&X-Amz-Signature=206ee591e3f0152c825f40f332606ea9fde7b4fceac7fb91c762939c7609cd5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
