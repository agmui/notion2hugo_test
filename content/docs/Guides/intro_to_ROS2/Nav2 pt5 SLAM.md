---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WI7OXFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCzkzyayxGz1jYyV%2FVJ5oOSL6M23hL5ErJLRXJhFM8NAiBcBVBZMaVqJxPsosJX0UsAaUM4XNJ%2FgQn%2FvxvMkurOdSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCh4guigYhYhXCLV6KtwDhU6K%2FEsf02a%2BQoICEpxzGrbjuKhfhz2WcdMSMGlGXzQPY4KG83ehHZyOO0qyPViFDxs2X1KbGxJVG8%2BzMRXUrCtDrxqy09SKewzv7karmtPBUwS2CGwNln%2BMbX4Wu2lYssEn9w19OnEUnnNIQyAjuDZz57459OE%2BIcoZqr4bkjqQeBjelROm3Cm5K7Ib9af4YVd78tpIu%2F2o%2F2h13a7GamgU1BfX5%2FTgtuwxe6XrtqNYFbqzelqAa%2BHNQpfj0beSagSFFn54rLS70ew1hNVNQOTc691dLrtxP61CeTjEPZGeYqdT7U0QTnCXyBK2Pkk9AujbgBriJ%2FvXYl%2BAonWdaQPgZH%2BvhaeNiX8wvzcGHDvhkbMtLL1Oo50fWQQeaDYe12wCscTwUBzbzAvW6vF2sm02x8k%2FyvGhkyfYOpfd2Tz4DlumHT1oLv%2BsAAbXwiLB1I2wAc%2BZwBVJIdKacnMdqzKm3INPcUsh2EZsSljmNmWe76cASqRHSasQSVPSvQWP7YBht5LpCZn8C4tvVRRXGrm5ZApMRoo5KDFhD1bCotyakvyln91%2FYsvqKXl9FtY7%2BE3h%2FueCD7%2BJoQGRDr57MhIPoh1qMfa2toAoYre9zRx0AscneUCkp71dKOMwoumtxAY6pgGjdvTjeRibiyLP2IxBOrj5Q%2ByvlckVkkVDO6%2BRUh9Wap05sQcZm5Wpyul3gXKTuXMq%2F8NzazTJLee7TzAlPJ2zB8mWnL%2BuJ1Yq0j4QojsczdoMGMnEJvubc2oYaKo1cW6rPnsc6bHZ3aS311iZgjqpDkvOtGsTVmWBt79lB4mXmsIKNZIJ65QUa4cYNgJ1tlsTEgoxewD7WObA2PNLcqzKlhzDHBbI&X-Amz-Signature=750e15a5ad8f1dea651118d74a927a56285b4400304ff158d4993374590ecca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WI7OXFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCzkzyayxGz1jYyV%2FVJ5oOSL6M23hL5ErJLRXJhFM8NAiBcBVBZMaVqJxPsosJX0UsAaUM4XNJ%2FgQn%2FvxvMkurOdSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCh4guigYhYhXCLV6KtwDhU6K%2FEsf02a%2BQoICEpxzGrbjuKhfhz2WcdMSMGlGXzQPY4KG83ehHZyOO0qyPViFDxs2X1KbGxJVG8%2BzMRXUrCtDrxqy09SKewzv7karmtPBUwS2CGwNln%2BMbX4Wu2lYssEn9w19OnEUnnNIQyAjuDZz57459OE%2BIcoZqr4bkjqQeBjelROm3Cm5K7Ib9af4YVd78tpIu%2F2o%2F2h13a7GamgU1BfX5%2FTgtuwxe6XrtqNYFbqzelqAa%2BHNQpfj0beSagSFFn54rLS70ew1hNVNQOTc691dLrtxP61CeTjEPZGeYqdT7U0QTnCXyBK2Pkk9AujbgBriJ%2FvXYl%2BAonWdaQPgZH%2BvhaeNiX8wvzcGHDvhkbMtLL1Oo50fWQQeaDYe12wCscTwUBzbzAvW6vF2sm02x8k%2FyvGhkyfYOpfd2Tz4DlumHT1oLv%2BsAAbXwiLB1I2wAc%2BZwBVJIdKacnMdqzKm3INPcUsh2EZsSljmNmWe76cASqRHSasQSVPSvQWP7YBht5LpCZn8C4tvVRRXGrm5ZApMRoo5KDFhD1bCotyakvyln91%2FYsvqKXl9FtY7%2BE3h%2FueCD7%2BJoQGRDr57MhIPoh1qMfa2toAoYre9zRx0AscneUCkp71dKOMwoumtxAY6pgGjdvTjeRibiyLP2IxBOrj5Q%2ByvlckVkkVDO6%2BRUh9Wap05sQcZm5Wpyul3gXKTuXMq%2F8NzazTJLee7TzAlPJ2zB8mWnL%2BuJ1Yq0j4QojsczdoMGMnEJvubc2oYaKo1cW6rPnsc6bHZ3aS311iZgjqpDkvOtGsTVmWBt79lB4mXmsIKNZIJ65QUa4cYNgJ1tlsTEgoxewD7WObA2PNLcqzKlhzDHBbI&X-Amz-Signature=4c77f899220f55ae4be8f4d4a8abbe1dba939ef4a282210934c6a69b09d2dd22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WI7OXFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCzkzyayxGz1jYyV%2FVJ5oOSL6M23hL5ErJLRXJhFM8NAiBcBVBZMaVqJxPsosJX0UsAaUM4XNJ%2FgQn%2FvxvMkurOdSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCh4guigYhYhXCLV6KtwDhU6K%2FEsf02a%2BQoICEpxzGrbjuKhfhz2WcdMSMGlGXzQPY4KG83ehHZyOO0qyPViFDxs2X1KbGxJVG8%2BzMRXUrCtDrxqy09SKewzv7karmtPBUwS2CGwNln%2BMbX4Wu2lYssEn9w19OnEUnnNIQyAjuDZz57459OE%2BIcoZqr4bkjqQeBjelROm3Cm5K7Ib9af4YVd78tpIu%2F2o%2F2h13a7GamgU1BfX5%2FTgtuwxe6XrtqNYFbqzelqAa%2BHNQpfj0beSagSFFn54rLS70ew1hNVNQOTc691dLrtxP61CeTjEPZGeYqdT7U0QTnCXyBK2Pkk9AujbgBriJ%2FvXYl%2BAonWdaQPgZH%2BvhaeNiX8wvzcGHDvhkbMtLL1Oo50fWQQeaDYe12wCscTwUBzbzAvW6vF2sm02x8k%2FyvGhkyfYOpfd2Tz4DlumHT1oLv%2BsAAbXwiLB1I2wAc%2BZwBVJIdKacnMdqzKm3INPcUsh2EZsSljmNmWe76cASqRHSasQSVPSvQWP7YBht5LpCZn8C4tvVRRXGrm5ZApMRoo5KDFhD1bCotyakvyln91%2FYsvqKXl9FtY7%2BE3h%2FueCD7%2BJoQGRDr57MhIPoh1qMfa2toAoYre9zRx0AscneUCkp71dKOMwoumtxAY6pgGjdvTjeRibiyLP2IxBOrj5Q%2ByvlckVkkVDO6%2BRUh9Wap05sQcZm5Wpyul3gXKTuXMq%2F8NzazTJLee7TzAlPJ2zB8mWnL%2BuJ1Yq0j4QojsczdoMGMnEJvubc2oYaKo1cW6rPnsc6bHZ3aS311iZgjqpDkvOtGsTVmWBt79lB4mXmsIKNZIJ65QUa4cYNgJ1tlsTEgoxewD7WObA2PNLcqzKlhzDHBbI&X-Amz-Signature=cb4c07cae6085730f33c60271d85d0cf9519a1c498a5344aa920cc7e3f627ce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WI7OXFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCzkzyayxGz1jYyV%2FVJ5oOSL6M23hL5ErJLRXJhFM8NAiBcBVBZMaVqJxPsosJX0UsAaUM4XNJ%2FgQn%2FvxvMkurOdSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCh4guigYhYhXCLV6KtwDhU6K%2FEsf02a%2BQoICEpxzGrbjuKhfhz2WcdMSMGlGXzQPY4KG83ehHZyOO0qyPViFDxs2X1KbGxJVG8%2BzMRXUrCtDrxqy09SKewzv7karmtPBUwS2CGwNln%2BMbX4Wu2lYssEn9w19OnEUnnNIQyAjuDZz57459OE%2BIcoZqr4bkjqQeBjelROm3Cm5K7Ib9af4YVd78tpIu%2F2o%2F2h13a7GamgU1BfX5%2FTgtuwxe6XrtqNYFbqzelqAa%2BHNQpfj0beSagSFFn54rLS70ew1hNVNQOTc691dLrtxP61CeTjEPZGeYqdT7U0QTnCXyBK2Pkk9AujbgBriJ%2FvXYl%2BAonWdaQPgZH%2BvhaeNiX8wvzcGHDvhkbMtLL1Oo50fWQQeaDYe12wCscTwUBzbzAvW6vF2sm02x8k%2FyvGhkyfYOpfd2Tz4DlumHT1oLv%2BsAAbXwiLB1I2wAc%2BZwBVJIdKacnMdqzKm3INPcUsh2EZsSljmNmWe76cASqRHSasQSVPSvQWP7YBht5LpCZn8C4tvVRRXGrm5ZApMRoo5KDFhD1bCotyakvyln91%2FYsvqKXl9FtY7%2BE3h%2FueCD7%2BJoQGRDr57MhIPoh1qMfa2toAoYre9zRx0AscneUCkp71dKOMwoumtxAY6pgGjdvTjeRibiyLP2IxBOrj5Q%2ByvlckVkkVDO6%2BRUh9Wap05sQcZm5Wpyul3gXKTuXMq%2F8NzazTJLee7TzAlPJ2zB8mWnL%2BuJ1Yq0j4QojsczdoMGMnEJvubc2oYaKo1cW6rPnsc6bHZ3aS311iZgjqpDkvOtGsTVmWBt79lB4mXmsIKNZIJ65QUa4cYNgJ1tlsTEgoxewD7WObA2PNLcqzKlhzDHBbI&X-Amz-Signature=8358ac856e9bac1617346d98046eb675f1ab69c3a0829629ed1362a40621acea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WI7OXFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCzkzyayxGz1jYyV%2FVJ5oOSL6M23hL5ErJLRXJhFM8NAiBcBVBZMaVqJxPsosJX0UsAaUM4XNJ%2FgQn%2FvxvMkurOdSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCh4guigYhYhXCLV6KtwDhU6K%2FEsf02a%2BQoICEpxzGrbjuKhfhz2WcdMSMGlGXzQPY4KG83ehHZyOO0qyPViFDxs2X1KbGxJVG8%2BzMRXUrCtDrxqy09SKewzv7karmtPBUwS2CGwNln%2BMbX4Wu2lYssEn9w19OnEUnnNIQyAjuDZz57459OE%2BIcoZqr4bkjqQeBjelROm3Cm5K7Ib9af4YVd78tpIu%2F2o%2F2h13a7GamgU1BfX5%2FTgtuwxe6XrtqNYFbqzelqAa%2BHNQpfj0beSagSFFn54rLS70ew1hNVNQOTc691dLrtxP61CeTjEPZGeYqdT7U0QTnCXyBK2Pkk9AujbgBriJ%2FvXYl%2BAonWdaQPgZH%2BvhaeNiX8wvzcGHDvhkbMtLL1Oo50fWQQeaDYe12wCscTwUBzbzAvW6vF2sm02x8k%2FyvGhkyfYOpfd2Tz4DlumHT1oLv%2BsAAbXwiLB1I2wAc%2BZwBVJIdKacnMdqzKm3INPcUsh2EZsSljmNmWe76cASqRHSasQSVPSvQWP7YBht5LpCZn8C4tvVRRXGrm5ZApMRoo5KDFhD1bCotyakvyln91%2FYsvqKXl9FtY7%2BE3h%2FueCD7%2BJoQGRDr57MhIPoh1qMfa2toAoYre9zRx0AscneUCkp71dKOMwoumtxAY6pgGjdvTjeRibiyLP2IxBOrj5Q%2ByvlckVkkVDO6%2BRUh9Wap05sQcZm5Wpyul3gXKTuXMq%2F8NzazTJLee7TzAlPJ2zB8mWnL%2BuJ1Yq0j4QojsczdoMGMnEJvubc2oYaKo1cW6rPnsc6bHZ3aS311iZgjqpDkvOtGsTVmWBt79lB4mXmsIKNZIJ65QUa4cYNgJ1tlsTEgoxewD7WObA2PNLcqzKlhzDHBbI&X-Amz-Signature=20fc1acc5435d0c9cd5631e7632813dcf936268dccc746c86c38f026109f7f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WI7OXFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCzkzyayxGz1jYyV%2FVJ5oOSL6M23hL5ErJLRXJhFM8NAiBcBVBZMaVqJxPsosJX0UsAaUM4XNJ%2FgQn%2FvxvMkurOdSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCh4guigYhYhXCLV6KtwDhU6K%2FEsf02a%2BQoICEpxzGrbjuKhfhz2WcdMSMGlGXzQPY4KG83ehHZyOO0qyPViFDxs2X1KbGxJVG8%2BzMRXUrCtDrxqy09SKewzv7karmtPBUwS2CGwNln%2BMbX4Wu2lYssEn9w19OnEUnnNIQyAjuDZz57459OE%2BIcoZqr4bkjqQeBjelROm3Cm5K7Ib9af4YVd78tpIu%2F2o%2F2h13a7GamgU1BfX5%2FTgtuwxe6XrtqNYFbqzelqAa%2BHNQpfj0beSagSFFn54rLS70ew1hNVNQOTc691dLrtxP61CeTjEPZGeYqdT7U0QTnCXyBK2Pkk9AujbgBriJ%2FvXYl%2BAonWdaQPgZH%2BvhaeNiX8wvzcGHDvhkbMtLL1Oo50fWQQeaDYe12wCscTwUBzbzAvW6vF2sm02x8k%2FyvGhkyfYOpfd2Tz4DlumHT1oLv%2BsAAbXwiLB1I2wAc%2BZwBVJIdKacnMdqzKm3INPcUsh2EZsSljmNmWe76cASqRHSasQSVPSvQWP7YBht5LpCZn8C4tvVRRXGrm5ZApMRoo5KDFhD1bCotyakvyln91%2FYsvqKXl9FtY7%2BE3h%2FueCD7%2BJoQGRDr57MhIPoh1qMfa2toAoYre9zRx0AscneUCkp71dKOMwoumtxAY6pgGjdvTjeRibiyLP2IxBOrj5Q%2ByvlckVkkVDO6%2BRUh9Wap05sQcZm5Wpyul3gXKTuXMq%2F8NzazTJLee7TzAlPJ2zB8mWnL%2BuJ1Yq0j4QojsczdoMGMnEJvubc2oYaKo1cW6rPnsc6bHZ3aS311iZgjqpDkvOtGsTVmWBt79lB4mXmsIKNZIJ65QUa4cYNgJ1tlsTEgoxewD7WObA2PNLcqzKlhzDHBbI&X-Amz-Signature=d62901d9f9d70d5644a35b2fdf4213a4eff3934f31a6e66baaa5429799a5df63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WI7OXFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCzkzyayxGz1jYyV%2FVJ5oOSL6M23hL5ErJLRXJhFM8NAiBcBVBZMaVqJxPsosJX0UsAaUM4XNJ%2FgQn%2FvxvMkurOdSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCh4guigYhYhXCLV6KtwDhU6K%2FEsf02a%2BQoICEpxzGrbjuKhfhz2WcdMSMGlGXzQPY4KG83ehHZyOO0qyPViFDxs2X1KbGxJVG8%2BzMRXUrCtDrxqy09SKewzv7karmtPBUwS2CGwNln%2BMbX4Wu2lYssEn9w19OnEUnnNIQyAjuDZz57459OE%2BIcoZqr4bkjqQeBjelROm3Cm5K7Ib9af4YVd78tpIu%2F2o%2F2h13a7GamgU1BfX5%2FTgtuwxe6XrtqNYFbqzelqAa%2BHNQpfj0beSagSFFn54rLS70ew1hNVNQOTc691dLrtxP61CeTjEPZGeYqdT7U0QTnCXyBK2Pkk9AujbgBriJ%2FvXYl%2BAonWdaQPgZH%2BvhaeNiX8wvzcGHDvhkbMtLL1Oo50fWQQeaDYe12wCscTwUBzbzAvW6vF2sm02x8k%2FyvGhkyfYOpfd2Tz4DlumHT1oLv%2BsAAbXwiLB1I2wAc%2BZwBVJIdKacnMdqzKm3INPcUsh2EZsSljmNmWe76cASqRHSasQSVPSvQWP7YBht5LpCZn8C4tvVRRXGrm5ZApMRoo5KDFhD1bCotyakvyln91%2FYsvqKXl9FtY7%2BE3h%2FueCD7%2BJoQGRDr57MhIPoh1qMfa2toAoYre9zRx0AscneUCkp71dKOMwoumtxAY6pgGjdvTjeRibiyLP2IxBOrj5Q%2ByvlckVkkVDO6%2BRUh9Wap05sQcZm5Wpyul3gXKTuXMq%2F8NzazTJLee7TzAlPJ2zB8mWnL%2BuJ1Yq0j4QojsczdoMGMnEJvubc2oYaKo1cW6rPnsc6bHZ3aS311iZgjqpDkvOtGsTVmWBt79lB4mXmsIKNZIJ65QUa4cYNgJ1tlsTEgoxewD7WObA2PNLcqzKlhzDHBbI&X-Amz-Signature=a2c1eb73c6ebd78f6f26fc21d45b4cf0d0ab8917ab5b92687275dd5c08a3ba44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WI7OXFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCzkzyayxGz1jYyV%2FVJ5oOSL6M23hL5ErJLRXJhFM8NAiBcBVBZMaVqJxPsosJX0UsAaUM4XNJ%2FgQn%2FvxvMkurOdSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCh4guigYhYhXCLV6KtwDhU6K%2FEsf02a%2BQoICEpxzGrbjuKhfhz2WcdMSMGlGXzQPY4KG83ehHZyOO0qyPViFDxs2X1KbGxJVG8%2BzMRXUrCtDrxqy09SKewzv7karmtPBUwS2CGwNln%2BMbX4Wu2lYssEn9w19OnEUnnNIQyAjuDZz57459OE%2BIcoZqr4bkjqQeBjelROm3Cm5K7Ib9af4YVd78tpIu%2F2o%2F2h13a7GamgU1BfX5%2FTgtuwxe6XrtqNYFbqzelqAa%2BHNQpfj0beSagSFFn54rLS70ew1hNVNQOTc691dLrtxP61CeTjEPZGeYqdT7U0QTnCXyBK2Pkk9AujbgBriJ%2FvXYl%2BAonWdaQPgZH%2BvhaeNiX8wvzcGHDvhkbMtLL1Oo50fWQQeaDYe12wCscTwUBzbzAvW6vF2sm02x8k%2FyvGhkyfYOpfd2Tz4DlumHT1oLv%2BsAAbXwiLB1I2wAc%2BZwBVJIdKacnMdqzKm3INPcUsh2EZsSljmNmWe76cASqRHSasQSVPSvQWP7YBht5LpCZn8C4tvVRRXGrm5ZApMRoo5KDFhD1bCotyakvyln91%2FYsvqKXl9FtY7%2BE3h%2FueCD7%2BJoQGRDr57MhIPoh1qMfa2toAoYre9zRx0AscneUCkp71dKOMwoumtxAY6pgGjdvTjeRibiyLP2IxBOrj5Q%2ByvlckVkkVDO6%2BRUh9Wap05sQcZm5Wpyul3gXKTuXMq%2F8NzazTJLee7TzAlPJ2zB8mWnL%2BuJ1Yq0j4QojsczdoMGMnEJvubc2oYaKo1cW6rPnsc6bHZ3aS311iZgjqpDkvOtGsTVmWBt79lB4mXmsIKNZIJ65QUa4cYNgJ1tlsTEgoxewD7WObA2PNLcqzKlhzDHBbI&X-Amz-Signature=4b8cc1b02254220043fc45218220e754cc171dd0b641c42635f37f09e0ea86c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WI7OXFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCzkzyayxGz1jYyV%2FVJ5oOSL6M23hL5ErJLRXJhFM8NAiBcBVBZMaVqJxPsosJX0UsAaUM4XNJ%2FgQn%2FvxvMkurOdSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCh4guigYhYhXCLV6KtwDhU6K%2FEsf02a%2BQoICEpxzGrbjuKhfhz2WcdMSMGlGXzQPY4KG83ehHZyOO0qyPViFDxs2X1KbGxJVG8%2BzMRXUrCtDrxqy09SKewzv7karmtPBUwS2CGwNln%2BMbX4Wu2lYssEn9w19OnEUnnNIQyAjuDZz57459OE%2BIcoZqr4bkjqQeBjelROm3Cm5K7Ib9af4YVd78tpIu%2F2o%2F2h13a7GamgU1BfX5%2FTgtuwxe6XrtqNYFbqzelqAa%2BHNQpfj0beSagSFFn54rLS70ew1hNVNQOTc691dLrtxP61CeTjEPZGeYqdT7U0QTnCXyBK2Pkk9AujbgBriJ%2FvXYl%2BAonWdaQPgZH%2BvhaeNiX8wvzcGHDvhkbMtLL1Oo50fWQQeaDYe12wCscTwUBzbzAvW6vF2sm02x8k%2FyvGhkyfYOpfd2Tz4DlumHT1oLv%2BsAAbXwiLB1I2wAc%2BZwBVJIdKacnMdqzKm3INPcUsh2EZsSljmNmWe76cASqRHSasQSVPSvQWP7YBht5LpCZn8C4tvVRRXGrm5ZApMRoo5KDFhD1bCotyakvyln91%2FYsvqKXl9FtY7%2BE3h%2FueCD7%2BJoQGRDr57MhIPoh1qMfa2toAoYre9zRx0AscneUCkp71dKOMwoumtxAY6pgGjdvTjeRibiyLP2IxBOrj5Q%2ByvlckVkkVDO6%2BRUh9Wap05sQcZm5Wpyul3gXKTuXMq%2F8NzazTJLee7TzAlPJ2zB8mWnL%2BuJ1Yq0j4QojsczdoMGMnEJvubc2oYaKo1cW6rPnsc6bHZ3aS311iZgjqpDkvOtGsTVmWBt79lB4mXmsIKNZIJ65QUa4cYNgJ1tlsTEgoxewD7WObA2PNLcqzKlhzDHBbI&X-Amz-Signature=9ae1946f764bc232a81f8030e5e4070f40d083fec688ddc16020d88eb1a63e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WI7OXFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCzkzyayxGz1jYyV%2FVJ5oOSL6M23hL5ErJLRXJhFM8NAiBcBVBZMaVqJxPsosJX0UsAaUM4XNJ%2FgQn%2FvxvMkurOdSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCh4guigYhYhXCLV6KtwDhU6K%2FEsf02a%2BQoICEpxzGrbjuKhfhz2WcdMSMGlGXzQPY4KG83ehHZyOO0qyPViFDxs2X1KbGxJVG8%2BzMRXUrCtDrxqy09SKewzv7karmtPBUwS2CGwNln%2BMbX4Wu2lYssEn9w19OnEUnnNIQyAjuDZz57459OE%2BIcoZqr4bkjqQeBjelROm3Cm5K7Ib9af4YVd78tpIu%2F2o%2F2h13a7GamgU1BfX5%2FTgtuwxe6XrtqNYFbqzelqAa%2BHNQpfj0beSagSFFn54rLS70ew1hNVNQOTc691dLrtxP61CeTjEPZGeYqdT7U0QTnCXyBK2Pkk9AujbgBriJ%2FvXYl%2BAonWdaQPgZH%2BvhaeNiX8wvzcGHDvhkbMtLL1Oo50fWQQeaDYe12wCscTwUBzbzAvW6vF2sm02x8k%2FyvGhkyfYOpfd2Tz4DlumHT1oLv%2BsAAbXwiLB1I2wAc%2BZwBVJIdKacnMdqzKm3INPcUsh2EZsSljmNmWe76cASqRHSasQSVPSvQWP7YBht5LpCZn8C4tvVRRXGrm5ZApMRoo5KDFhD1bCotyakvyln91%2FYsvqKXl9FtY7%2BE3h%2FueCD7%2BJoQGRDr57MhIPoh1qMfa2toAoYre9zRx0AscneUCkp71dKOMwoumtxAY6pgGjdvTjeRibiyLP2IxBOrj5Q%2ByvlckVkkVDO6%2BRUh9Wap05sQcZm5Wpyul3gXKTuXMq%2F8NzazTJLee7TzAlPJ2zB8mWnL%2BuJ1Yq0j4QojsczdoMGMnEJvubc2oYaKo1cW6rPnsc6bHZ3aS311iZgjqpDkvOtGsTVmWBt79lB4mXmsIKNZIJ65QUa4cYNgJ1tlsTEgoxewD7WObA2PNLcqzKlhzDHBbI&X-Amz-Signature=02bdbe285cb4d5110fad2e3aa08a229e481a9e6e1bef1829a9d82940739e6719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WI7OXFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCzkzyayxGz1jYyV%2FVJ5oOSL6M23hL5ErJLRXJhFM8NAiBcBVBZMaVqJxPsosJX0UsAaUM4XNJ%2FgQn%2FvxvMkurOdSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCh4guigYhYhXCLV6KtwDhU6K%2FEsf02a%2BQoICEpxzGrbjuKhfhz2WcdMSMGlGXzQPY4KG83ehHZyOO0qyPViFDxs2X1KbGxJVG8%2BzMRXUrCtDrxqy09SKewzv7karmtPBUwS2CGwNln%2BMbX4Wu2lYssEn9w19OnEUnnNIQyAjuDZz57459OE%2BIcoZqr4bkjqQeBjelROm3Cm5K7Ib9af4YVd78tpIu%2F2o%2F2h13a7GamgU1BfX5%2FTgtuwxe6XrtqNYFbqzelqAa%2BHNQpfj0beSagSFFn54rLS70ew1hNVNQOTc691dLrtxP61CeTjEPZGeYqdT7U0QTnCXyBK2Pkk9AujbgBriJ%2FvXYl%2BAonWdaQPgZH%2BvhaeNiX8wvzcGHDvhkbMtLL1Oo50fWQQeaDYe12wCscTwUBzbzAvW6vF2sm02x8k%2FyvGhkyfYOpfd2Tz4DlumHT1oLv%2BsAAbXwiLB1I2wAc%2BZwBVJIdKacnMdqzKm3INPcUsh2EZsSljmNmWe76cASqRHSasQSVPSvQWP7YBht5LpCZn8C4tvVRRXGrm5ZApMRoo5KDFhD1bCotyakvyln91%2FYsvqKXl9FtY7%2BE3h%2FueCD7%2BJoQGRDr57MhIPoh1qMfa2toAoYre9zRx0AscneUCkp71dKOMwoumtxAY6pgGjdvTjeRibiyLP2IxBOrj5Q%2ByvlckVkkVDO6%2BRUh9Wap05sQcZm5Wpyul3gXKTuXMq%2F8NzazTJLee7TzAlPJ2zB8mWnL%2BuJ1Yq0j4QojsczdoMGMnEJvubc2oYaKo1cW6rPnsc6bHZ3aS311iZgjqpDkvOtGsTVmWBt79lB4mXmsIKNZIJ65QUa4cYNgJ1tlsTEgoxewD7WObA2PNLcqzKlhzDHBbI&X-Amz-Signature=d2b09f2a6644abca47f69721bf5714af12a1aa5d1ac31320f30a01b1c9845fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WI7OXFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCzkzyayxGz1jYyV%2FVJ5oOSL6M23hL5ErJLRXJhFM8NAiBcBVBZMaVqJxPsosJX0UsAaUM4XNJ%2FgQn%2FvxvMkurOdSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCh4guigYhYhXCLV6KtwDhU6K%2FEsf02a%2BQoICEpxzGrbjuKhfhz2WcdMSMGlGXzQPY4KG83ehHZyOO0qyPViFDxs2X1KbGxJVG8%2BzMRXUrCtDrxqy09SKewzv7karmtPBUwS2CGwNln%2BMbX4Wu2lYssEn9w19OnEUnnNIQyAjuDZz57459OE%2BIcoZqr4bkjqQeBjelROm3Cm5K7Ib9af4YVd78tpIu%2F2o%2F2h13a7GamgU1BfX5%2FTgtuwxe6XrtqNYFbqzelqAa%2BHNQpfj0beSagSFFn54rLS70ew1hNVNQOTc691dLrtxP61CeTjEPZGeYqdT7U0QTnCXyBK2Pkk9AujbgBriJ%2FvXYl%2BAonWdaQPgZH%2BvhaeNiX8wvzcGHDvhkbMtLL1Oo50fWQQeaDYe12wCscTwUBzbzAvW6vF2sm02x8k%2FyvGhkyfYOpfd2Tz4DlumHT1oLv%2BsAAbXwiLB1I2wAc%2BZwBVJIdKacnMdqzKm3INPcUsh2EZsSljmNmWe76cASqRHSasQSVPSvQWP7YBht5LpCZn8C4tvVRRXGrm5ZApMRoo5KDFhD1bCotyakvyln91%2FYsvqKXl9FtY7%2BE3h%2FueCD7%2BJoQGRDr57MhIPoh1qMfa2toAoYre9zRx0AscneUCkp71dKOMwoumtxAY6pgGjdvTjeRibiyLP2IxBOrj5Q%2ByvlckVkkVDO6%2BRUh9Wap05sQcZm5Wpyul3gXKTuXMq%2F8NzazTJLee7TzAlPJ2zB8mWnL%2BuJ1Yq0j4QojsczdoMGMnEJvubc2oYaKo1cW6rPnsc6bHZ3aS311iZgjqpDkvOtGsTVmWBt79lB4mXmsIKNZIJ65QUa4cYNgJ1tlsTEgoxewD7WObA2PNLcqzKlhzDHBbI&X-Amz-Signature=aee919b08d727c4d3e6abcccfa42b4d8083f51acd50124ad353aab09901e9fea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WI7OXFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCzkzyayxGz1jYyV%2FVJ5oOSL6M23hL5ErJLRXJhFM8NAiBcBVBZMaVqJxPsosJX0UsAaUM4XNJ%2FgQn%2FvxvMkurOdSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCh4guigYhYhXCLV6KtwDhU6K%2FEsf02a%2BQoICEpxzGrbjuKhfhz2WcdMSMGlGXzQPY4KG83ehHZyOO0qyPViFDxs2X1KbGxJVG8%2BzMRXUrCtDrxqy09SKewzv7karmtPBUwS2CGwNln%2BMbX4Wu2lYssEn9w19OnEUnnNIQyAjuDZz57459OE%2BIcoZqr4bkjqQeBjelROm3Cm5K7Ib9af4YVd78tpIu%2F2o%2F2h13a7GamgU1BfX5%2FTgtuwxe6XrtqNYFbqzelqAa%2BHNQpfj0beSagSFFn54rLS70ew1hNVNQOTc691dLrtxP61CeTjEPZGeYqdT7U0QTnCXyBK2Pkk9AujbgBriJ%2FvXYl%2BAonWdaQPgZH%2BvhaeNiX8wvzcGHDvhkbMtLL1Oo50fWQQeaDYe12wCscTwUBzbzAvW6vF2sm02x8k%2FyvGhkyfYOpfd2Tz4DlumHT1oLv%2BsAAbXwiLB1I2wAc%2BZwBVJIdKacnMdqzKm3INPcUsh2EZsSljmNmWe76cASqRHSasQSVPSvQWP7YBht5LpCZn8C4tvVRRXGrm5ZApMRoo5KDFhD1bCotyakvyln91%2FYsvqKXl9FtY7%2BE3h%2FueCD7%2BJoQGRDr57MhIPoh1qMfa2toAoYre9zRx0AscneUCkp71dKOMwoumtxAY6pgGjdvTjeRibiyLP2IxBOrj5Q%2ByvlckVkkVDO6%2BRUh9Wap05sQcZm5Wpyul3gXKTuXMq%2F8NzazTJLee7TzAlPJ2zB8mWnL%2BuJ1Yq0j4QojsczdoMGMnEJvubc2oYaKo1cW6rPnsc6bHZ3aS311iZgjqpDkvOtGsTVmWBt79lB4mXmsIKNZIJ65QUa4cYNgJ1tlsTEgoxewD7WObA2PNLcqzKlhzDHBbI&X-Amz-Signature=4e581b570b9dd14a8e44e12a02a9cf6a828e21c38256a712db77084a2e28064a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WI7OXFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCzkzyayxGz1jYyV%2FVJ5oOSL6M23hL5ErJLRXJhFM8NAiBcBVBZMaVqJxPsosJX0UsAaUM4XNJ%2FgQn%2FvxvMkurOdSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCh4guigYhYhXCLV6KtwDhU6K%2FEsf02a%2BQoICEpxzGrbjuKhfhz2WcdMSMGlGXzQPY4KG83ehHZyOO0qyPViFDxs2X1KbGxJVG8%2BzMRXUrCtDrxqy09SKewzv7karmtPBUwS2CGwNln%2BMbX4Wu2lYssEn9w19OnEUnnNIQyAjuDZz57459OE%2BIcoZqr4bkjqQeBjelROm3Cm5K7Ib9af4YVd78tpIu%2F2o%2F2h13a7GamgU1BfX5%2FTgtuwxe6XrtqNYFbqzelqAa%2BHNQpfj0beSagSFFn54rLS70ew1hNVNQOTc691dLrtxP61CeTjEPZGeYqdT7U0QTnCXyBK2Pkk9AujbgBriJ%2FvXYl%2BAonWdaQPgZH%2BvhaeNiX8wvzcGHDvhkbMtLL1Oo50fWQQeaDYe12wCscTwUBzbzAvW6vF2sm02x8k%2FyvGhkyfYOpfd2Tz4DlumHT1oLv%2BsAAbXwiLB1I2wAc%2BZwBVJIdKacnMdqzKm3INPcUsh2EZsSljmNmWe76cASqRHSasQSVPSvQWP7YBht5LpCZn8C4tvVRRXGrm5ZApMRoo5KDFhD1bCotyakvyln91%2FYsvqKXl9FtY7%2BE3h%2FueCD7%2BJoQGRDr57MhIPoh1qMfa2toAoYre9zRx0AscneUCkp71dKOMwoumtxAY6pgGjdvTjeRibiyLP2IxBOrj5Q%2ByvlckVkkVDO6%2BRUh9Wap05sQcZm5Wpyul3gXKTuXMq%2F8NzazTJLee7TzAlPJ2zB8mWnL%2BuJ1Yq0j4QojsczdoMGMnEJvubc2oYaKo1cW6rPnsc6bHZ3aS311iZgjqpDkvOtGsTVmWBt79lB4mXmsIKNZIJ65QUa4cYNgJ1tlsTEgoxewD7WObA2PNLcqzKlhzDHBbI&X-Amz-Signature=5506118e944b268a5e1ca37674f65d3ea7afa3f24317623e313e6760d7f150c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
