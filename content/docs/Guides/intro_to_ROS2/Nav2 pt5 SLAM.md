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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPKSLWH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqAWeT7jhaQYCRLk7RG777pRwxqXvjfQk14DqAs%2FXBTAiBLN24HEk4%2BE9ufBiltL81HoTqKto1jRUThDvSfSaVwbir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2BRsnktIMT%2BM5T%2FCzKtwDjCe3q%2BuFYfqYwbp4e%2Fb4V44igtht01al69Rp4yDVCctJd%2ByBs%2FTZAfkW7um%2BHUGA3GGnU69Ud%2BCEIsCbXH5wMZxhprbuprrNmzONddtWobfw6K2hH2zELmI4iAA8%2FIgMUyU4NVzSvy%2BsCc%2FsHXxbZlZUC7F8HZ6PAUqphB4Vbyxb4LyMbsCUi0PpzdZG5YxMsglDZ%2FWafSs3hTNVz%2FZcllQ4bQmyXmcnF0o%2FJOGNlGk9bEUwKUHQ1GCIXvwyrvmOPE6zczRrVwgLWD8pCBxqgFQBq868EmpSSK4H%2F3hkjaZpwCQp3OElk0zaE00WOJd1QCwufZd3bM4gmDpbT5D4hWhxadZvetr%2BQCi%2FBt6JBISV3I3wLNNOJx%2BstMZ08KkHCKeUThZ%2FmFu%2B4GPyHdr57WPrxrjkRPqKt%2BlTWQy9rLSjDUM6fElgZIEvZ96bicBDjs7z2IMCBjRSejt7ap8yI13YOlkMzHm%2BzZXDolkcXr%2BpcSFw7CBIQJpyf75AqQXPYkvx6qNqgMoo2DRfIh%2FhcM3NYEIDzScaZjVGjKl37TJplwXTcUh0KkimY6HZMTK6ZKq2NgbaMwp4XFplDT%2FNIjSBWyR293rrTDNFO67uXoOC7uW80Sk5YC5ua%2Bowp5C4xAY6pgE4tGymDIwRtrgQwNFa1Icqtg7%2Bg634i5si72xBf5UBeDGcPz%2F55Rqu0D2TnFmGMMEqyZs3zQy2Ju03i%2FZuO4ZHdwin%2BQRUCduCcX9yHhStpmmrsIL4apOqG7bsEAzEPwXtG66yax0DR4H8%2F8DSkvd4rEg1Dvmqb43oqC1jC9sKgaqWWBSRTkJ0mcGUakRjVobZSGma78psNnTwOBlMSax5vA%2BE3FeW&X-Amz-Signature=517bf8c1c4a5d3eb5c97e01ec36e207d7889da1bfb1b0062247dc6cc692a2c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPKSLWH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqAWeT7jhaQYCRLk7RG777pRwxqXvjfQk14DqAs%2FXBTAiBLN24HEk4%2BE9ufBiltL81HoTqKto1jRUThDvSfSaVwbir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2BRsnktIMT%2BM5T%2FCzKtwDjCe3q%2BuFYfqYwbp4e%2Fb4V44igtht01al69Rp4yDVCctJd%2ByBs%2FTZAfkW7um%2BHUGA3GGnU69Ud%2BCEIsCbXH5wMZxhprbuprrNmzONddtWobfw6K2hH2zELmI4iAA8%2FIgMUyU4NVzSvy%2BsCc%2FsHXxbZlZUC7F8HZ6PAUqphB4Vbyxb4LyMbsCUi0PpzdZG5YxMsglDZ%2FWafSs3hTNVz%2FZcllQ4bQmyXmcnF0o%2FJOGNlGk9bEUwKUHQ1GCIXvwyrvmOPE6zczRrVwgLWD8pCBxqgFQBq868EmpSSK4H%2F3hkjaZpwCQp3OElk0zaE00WOJd1QCwufZd3bM4gmDpbT5D4hWhxadZvetr%2BQCi%2FBt6JBISV3I3wLNNOJx%2BstMZ08KkHCKeUThZ%2FmFu%2B4GPyHdr57WPrxrjkRPqKt%2BlTWQy9rLSjDUM6fElgZIEvZ96bicBDjs7z2IMCBjRSejt7ap8yI13YOlkMzHm%2BzZXDolkcXr%2BpcSFw7CBIQJpyf75AqQXPYkvx6qNqgMoo2DRfIh%2FhcM3NYEIDzScaZjVGjKl37TJplwXTcUh0KkimY6HZMTK6ZKq2NgbaMwp4XFplDT%2FNIjSBWyR293rrTDNFO67uXoOC7uW80Sk5YC5ua%2Bowp5C4xAY6pgE4tGymDIwRtrgQwNFa1Icqtg7%2Bg634i5si72xBf5UBeDGcPz%2F55Rqu0D2TnFmGMMEqyZs3zQy2Ju03i%2FZuO4ZHdwin%2BQRUCduCcX9yHhStpmmrsIL4apOqG7bsEAzEPwXtG66yax0DR4H8%2F8DSkvd4rEg1Dvmqb43oqC1jC9sKgaqWWBSRTkJ0mcGUakRjVobZSGma78psNnTwOBlMSax5vA%2BE3FeW&X-Amz-Signature=bfb15063fefd7544e971efcded3e46f53c64d8a3fa5d0e51ab946110454508c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPKSLWH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqAWeT7jhaQYCRLk7RG777pRwxqXvjfQk14DqAs%2FXBTAiBLN24HEk4%2BE9ufBiltL81HoTqKto1jRUThDvSfSaVwbir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2BRsnktIMT%2BM5T%2FCzKtwDjCe3q%2BuFYfqYwbp4e%2Fb4V44igtht01al69Rp4yDVCctJd%2ByBs%2FTZAfkW7um%2BHUGA3GGnU69Ud%2BCEIsCbXH5wMZxhprbuprrNmzONddtWobfw6K2hH2zELmI4iAA8%2FIgMUyU4NVzSvy%2BsCc%2FsHXxbZlZUC7F8HZ6PAUqphB4Vbyxb4LyMbsCUi0PpzdZG5YxMsglDZ%2FWafSs3hTNVz%2FZcllQ4bQmyXmcnF0o%2FJOGNlGk9bEUwKUHQ1GCIXvwyrvmOPE6zczRrVwgLWD8pCBxqgFQBq868EmpSSK4H%2F3hkjaZpwCQp3OElk0zaE00WOJd1QCwufZd3bM4gmDpbT5D4hWhxadZvetr%2BQCi%2FBt6JBISV3I3wLNNOJx%2BstMZ08KkHCKeUThZ%2FmFu%2B4GPyHdr57WPrxrjkRPqKt%2BlTWQy9rLSjDUM6fElgZIEvZ96bicBDjs7z2IMCBjRSejt7ap8yI13YOlkMzHm%2BzZXDolkcXr%2BpcSFw7CBIQJpyf75AqQXPYkvx6qNqgMoo2DRfIh%2FhcM3NYEIDzScaZjVGjKl37TJplwXTcUh0KkimY6HZMTK6ZKq2NgbaMwp4XFplDT%2FNIjSBWyR293rrTDNFO67uXoOC7uW80Sk5YC5ua%2Bowp5C4xAY6pgE4tGymDIwRtrgQwNFa1Icqtg7%2Bg634i5si72xBf5UBeDGcPz%2F55Rqu0D2TnFmGMMEqyZs3zQy2Ju03i%2FZuO4ZHdwin%2BQRUCduCcX9yHhStpmmrsIL4apOqG7bsEAzEPwXtG66yax0DR4H8%2F8DSkvd4rEg1Dvmqb43oqC1jC9sKgaqWWBSRTkJ0mcGUakRjVobZSGma78psNnTwOBlMSax5vA%2BE3FeW&X-Amz-Signature=f5522766838c817dae84138a161dae6cf547601ef19e8e0c6551d89acb462a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPKSLWH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqAWeT7jhaQYCRLk7RG777pRwxqXvjfQk14DqAs%2FXBTAiBLN24HEk4%2BE9ufBiltL81HoTqKto1jRUThDvSfSaVwbir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2BRsnktIMT%2BM5T%2FCzKtwDjCe3q%2BuFYfqYwbp4e%2Fb4V44igtht01al69Rp4yDVCctJd%2ByBs%2FTZAfkW7um%2BHUGA3GGnU69Ud%2BCEIsCbXH5wMZxhprbuprrNmzONddtWobfw6K2hH2zELmI4iAA8%2FIgMUyU4NVzSvy%2BsCc%2FsHXxbZlZUC7F8HZ6PAUqphB4Vbyxb4LyMbsCUi0PpzdZG5YxMsglDZ%2FWafSs3hTNVz%2FZcllQ4bQmyXmcnF0o%2FJOGNlGk9bEUwKUHQ1GCIXvwyrvmOPE6zczRrVwgLWD8pCBxqgFQBq868EmpSSK4H%2F3hkjaZpwCQp3OElk0zaE00WOJd1QCwufZd3bM4gmDpbT5D4hWhxadZvetr%2BQCi%2FBt6JBISV3I3wLNNOJx%2BstMZ08KkHCKeUThZ%2FmFu%2B4GPyHdr57WPrxrjkRPqKt%2BlTWQy9rLSjDUM6fElgZIEvZ96bicBDjs7z2IMCBjRSejt7ap8yI13YOlkMzHm%2BzZXDolkcXr%2BpcSFw7CBIQJpyf75AqQXPYkvx6qNqgMoo2DRfIh%2FhcM3NYEIDzScaZjVGjKl37TJplwXTcUh0KkimY6HZMTK6ZKq2NgbaMwp4XFplDT%2FNIjSBWyR293rrTDNFO67uXoOC7uW80Sk5YC5ua%2Bowp5C4xAY6pgE4tGymDIwRtrgQwNFa1Icqtg7%2Bg634i5si72xBf5UBeDGcPz%2F55Rqu0D2TnFmGMMEqyZs3zQy2Ju03i%2FZuO4ZHdwin%2BQRUCduCcX9yHhStpmmrsIL4apOqG7bsEAzEPwXtG66yax0DR4H8%2F8DSkvd4rEg1Dvmqb43oqC1jC9sKgaqWWBSRTkJ0mcGUakRjVobZSGma78psNnTwOBlMSax5vA%2BE3FeW&X-Amz-Signature=d0d25eda5b9bfa0d9a7dc4371995ceb3bcbfd775c1a653b44c33f253171a6739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPKSLWH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqAWeT7jhaQYCRLk7RG777pRwxqXvjfQk14DqAs%2FXBTAiBLN24HEk4%2BE9ufBiltL81HoTqKto1jRUThDvSfSaVwbir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2BRsnktIMT%2BM5T%2FCzKtwDjCe3q%2BuFYfqYwbp4e%2Fb4V44igtht01al69Rp4yDVCctJd%2ByBs%2FTZAfkW7um%2BHUGA3GGnU69Ud%2BCEIsCbXH5wMZxhprbuprrNmzONddtWobfw6K2hH2zELmI4iAA8%2FIgMUyU4NVzSvy%2BsCc%2FsHXxbZlZUC7F8HZ6PAUqphB4Vbyxb4LyMbsCUi0PpzdZG5YxMsglDZ%2FWafSs3hTNVz%2FZcllQ4bQmyXmcnF0o%2FJOGNlGk9bEUwKUHQ1GCIXvwyrvmOPE6zczRrVwgLWD8pCBxqgFQBq868EmpSSK4H%2F3hkjaZpwCQp3OElk0zaE00WOJd1QCwufZd3bM4gmDpbT5D4hWhxadZvetr%2BQCi%2FBt6JBISV3I3wLNNOJx%2BstMZ08KkHCKeUThZ%2FmFu%2B4GPyHdr57WPrxrjkRPqKt%2BlTWQy9rLSjDUM6fElgZIEvZ96bicBDjs7z2IMCBjRSejt7ap8yI13YOlkMzHm%2BzZXDolkcXr%2BpcSFw7CBIQJpyf75AqQXPYkvx6qNqgMoo2DRfIh%2FhcM3NYEIDzScaZjVGjKl37TJplwXTcUh0KkimY6HZMTK6ZKq2NgbaMwp4XFplDT%2FNIjSBWyR293rrTDNFO67uXoOC7uW80Sk5YC5ua%2Bowp5C4xAY6pgE4tGymDIwRtrgQwNFa1Icqtg7%2Bg634i5si72xBf5UBeDGcPz%2F55Rqu0D2TnFmGMMEqyZs3zQy2Ju03i%2FZuO4ZHdwin%2BQRUCduCcX9yHhStpmmrsIL4apOqG7bsEAzEPwXtG66yax0DR4H8%2F8DSkvd4rEg1Dvmqb43oqC1jC9sKgaqWWBSRTkJ0mcGUakRjVobZSGma78psNnTwOBlMSax5vA%2BE3FeW&X-Amz-Signature=56ae8ecf95017a6c377d5b4e2a5557379c5e0458ab90b43de956435c7a5d434b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPKSLWH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqAWeT7jhaQYCRLk7RG777pRwxqXvjfQk14DqAs%2FXBTAiBLN24HEk4%2BE9ufBiltL81HoTqKto1jRUThDvSfSaVwbir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2BRsnktIMT%2BM5T%2FCzKtwDjCe3q%2BuFYfqYwbp4e%2Fb4V44igtht01al69Rp4yDVCctJd%2ByBs%2FTZAfkW7um%2BHUGA3GGnU69Ud%2BCEIsCbXH5wMZxhprbuprrNmzONddtWobfw6K2hH2zELmI4iAA8%2FIgMUyU4NVzSvy%2BsCc%2FsHXxbZlZUC7F8HZ6PAUqphB4Vbyxb4LyMbsCUi0PpzdZG5YxMsglDZ%2FWafSs3hTNVz%2FZcllQ4bQmyXmcnF0o%2FJOGNlGk9bEUwKUHQ1GCIXvwyrvmOPE6zczRrVwgLWD8pCBxqgFQBq868EmpSSK4H%2F3hkjaZpwCQp3OElk0zaE00WOJd1QCwufZd3bM4gmDpbT5D4hWhxadZvetr%2BQCi%2FBt6JBISV3I3wLNNOJx%2BstMZ08KkHCKeUThZ%2FmFu%2B4GPyHdr57WPrxrjkRPqKt%2BlTWQy9rLSjDUM6fElgZIEvZ96bicBDjs7z2IMCBjRSejt7ap8yI13YOlkMzHm%2BzZXDolkcXr%2BpcSFw7CBIQJpyf75AqQXPYkvx6qNqgMoo2DRfIh%2FhcM3NYEIDzScaZjVGjKl37TJplwXTcUh0KkimY6HZMTK6ZKq2NgbaMwp4XFplDT%2FNIjSBWyR293rrTDNFO67uXoOC7uW80Sk5YC5ua%2Bowp5C4xAY6pgE4tGymDIwRtrgQwNFa1Icqtg7%2Bg634i5si72xBf5UBeDGcPz%2F55Rqu0D2TnFmGMMEqyZs3zQy2Ju03i%2FZuO4ZHdwin%2BQRUCduCcX9yHhStpmmrsIL4apOqG7bsEAzEPwXtG66yax0DR4H8%2F8DSkvd4rEg1Dvmqb43oqC1jC9sKgaqWWBSRTkJ0mcGUakRjVobZSGma78psNnTwOBlMSax5vA%2BE3FeW&X-Amz-Signature=352d93203bfea787b805f33f355f7583b43bdb9f9e1f6ca7325ce69e0fb67bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPKSLWH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqAWeT7jhaQYCRLk7RG777pRwxqXvjfQk14DqAs%2FXBTAiBLN24HEk4%2BE9ufBiltL81HoTqKto1jRUThDvSfSaVwbir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2BRsnktIMT%2BM5T%2FCzKtwDjCe3q%2BuFYfqYwbp4e%2Fb4V44igtht01al69Rp4yDVCctJd%2ByBs%2FTZAfkW7um%2BHUGA3GGnU69Ud%2BCEIsCbXH5wMZxhprbuprrNmzONddtWobfw6K2hH2zELmI4iAA8%2FIgMUyU4NVzSvy%2BsCc%2FsHXxbZlZUC7F8HZ6PAUqphB4Vbyxb4LyMbsCUi0PpzdZG5YxMsglDZ%2FWafSs3hTNVz%2FZcllQ4bQmyXmcnF0o%2FJOGNlGk9bEUwKUHQ1GCIXvwyrvmOPE6zczRrVwgLWD8pCBxqgFQBq868EmpSSK4H%2F3hkjaZpwCQp3OElk0zaE00WOJd1QCwufZd3bM4gmDpbT5D4hWhxadZvetr%2BQCi%2FBt6JBISV3I3wLNNOJx%2BstMZ08KkHCKeUThZ%2FmFu%2B4GPyHdr57WPrxrjkRPqKt%2BlTWQy9rLSjDUM6fElgZIEvZ96bicBDjs7z2IMCBjRSejt7ap8yI13YOlkMzHm%2BzZXDolkcXr%2BpcSFw7CBIQJpyf75AqQXPYkvx6qNqgMoo2DRfIh%2FhcM3NYEIDzScaZjVGjKl37TJplwXTcUh0KkimY6HZMTK6ZKq2NgbaMwp4XFplDT%2FNIjSBWyR293rrTDNFO67uXoOC7uW80Sk5YC5ua%2Bowp5C4xAY6pgE4tGymDIwRtrgQwNFa1Icqtg7%2Bg634i5si72xBf5UBeDGcPz%2F55Rqu0D2TnFmGMMEqyZs3zQy2Ju03i%2FZuO4ZHdwin%2BQRUCduCcX9yHhStpmmrsIL4apOqG7bsEAzEPwXtG66yax0DR4H8%2F8DSkvd4rEg1Dvmqb43oqC1jC9sKgaqWWBSRTkJ0mcGUakRjVobZSGma78psNnTwOBlMSax5vA%2BE3FeW&X-Amz-Signature=2e2035f1d77567758d4fe29430e87b29852e20e644178957ab1053a025461d59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPKSLWH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqAWeT7jhaQYCRLk7RG777pRwxqXvjfQk14DqAs%2FXBTAiBLN24HEk4%2BE9ufBiltL81HoTqKto1jRUThDvSfSaVwbir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2BRsnktIMT%2BM5T%2FCzKtwDjCe3q%2BuFYfqYwbp4e%2Fb4V44igtht01al69Rp4yDVCctJd%2ByBs%2FTZAfkW7um%2BHUGA3GGnU69Ud%2BCEIsCbXH5wMZxhprbuprrNmzONddtWobfw6K2hH2zELmI4iAA8%2FIgMUyU4NVzSvy%2BsCc%2FsHXxbZlZUC7F8HZ6PAUqphB4Vbyxb4LyMbsCUi0PpzdZG5YxMsglDZ%2FWafSs3hTNVz%2FZcllQ4bQmyXmcnF0o%2FJOGNlGk9bEUwKUHQ1GCIXvwyrvmOPE6zczRrVwgLWD8pCBxqgFQBq868EmpSSK4H%2F3hkjaZpwCQp3OElk0zaE00WOJd1QCwufZd3bM4gmDpbT5D4hWhxadZvetr%2BQCi%2FBt6JBISV3I3wLNNOJx%2BstMZ08KkHCKeUThZ%2FmFu%2B4GPyHdr57WPrxrjkRPqKt%2BlTWQy9rLSjDUM6fElgZIEvZ96bicBDjs7z2IMCBjRSejt7ap8yI13YOlkMzHm%2BzZXDolkcXr%2BpcSFw7CBIQJpyf75AqQXPYkvx6qNqgMoo2DRfIh%2FhcM3NYEIDzScaZjVGjKl37TJplwXTcUh0KkimY6HZMTK6ZKq2NgbaMwp4XFplDT%2FNIjSBWyR293rrTDNFO67uXoOC7uW80Sk5YC5ua%2Bowp5C4xAY6pgE4tGymDIwRtrgQwNFa1Icqtg7%2Bg634i5si72xBf5UBeDGcPz%2F55Rqu0D2TnFmGMMEqyZs3zQy2Ju03i%2FZuO4ZHdwin%2BQRUCduCcX9yHhStpmmrsIL4apOqG7bsEAzEPwXtG66yax0DR4H8%2F8DSkvd4rEg1Dvmqb43oqC1jC9sKgaqWWBSRTkJ0mcGUakRjVobZSGma78psNnTwOBlMSax5vA%2BE3FeW&X-Amz-Signature=4e6481f55c7f9cea087e93e05c7cd2f88c0947782697f62cd9cbf262ce6e0144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPKSLWH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqAWeT7jhaQYCRLk7RG777pRwxqXvjfQk14DqAs%2FXBTAiBLN24HEk4%2BE9ufBiltL81HoTqKto1jRUThDvSfSaVwbir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2BRsnktIMT%2BM5T%2FCzKtwDjCe3q%2BuFYfqYwbp4e%2Fb4V44igtht01al69Rp4yDVCctJd%2ByBs%2FTZAfkW7um%2BHUGA3GGnU69Ud%2BCEIsCbXH5wMZxhprbuprrNmzONddtWobfw6K2hH2zELmI4iAA8%2FIgMUyU4NVzSvy%2BsCc%2FsHXxbZlZUC7F8HZ6PAUqphB4Vbyxb4LyMbsCUi0PpzdZG5YxMsglDZ%2FWafSs3hTNVz%2FZcllQ4bQmyXmcnF0o%2FJOGNlGk9bEUwKUHQ1GCIXvwyrvmOPE6zczRrVwgLWD8pCBxqgFQBq868EmpSSK4H%2F3hkjaZpwCQp3OElk0zaE00WOJd1QCwufZd3bM4gmDpbT5D4hWhxadZvetr%2BQCi%2FBt6JBISV3I3wLNNOJx%2BstMZ08KkHCKeUThZ%2FmFu%2B4GPyHdr57WPrxrjkRPqKt%2BlTWQy9rLSjDUM6fElgZIEvZ96bicBDjs7z2IMCBjRSejt7ap8yI13YOlkMzHm%2BzZXDolkcXr%2BpcSFw7CBIQJpyf75AqQXPYkvx6qNqgMoo2DRfIh%2FhcM3NYEIDzScaZjVGjKl37TJplwXTcUh0KkimY6HZMTK6ZKq2NgbaMwp4XFplDT%2FNIjSBWyR293rrTDNFO67uXoOC7uW80Sk5YC5ua%2Bowp5C4xAY6pgE4tGymDIwRtrgQwNFa1Icqtg7%2Bg634i5si72xBf5UBeDGcPz%2F55Rqu0D2TnFmGMMEqyZs3zQy2Ju03i%2FZuO4ZHdwin%2BQRUCduCcX9yHhStpmmrsIL4apOqG7bsEAzEPwXtG66yax0DR4H8%2F8DSkvd4rEg1Dvmqb43oqC1jC9sKgaqWWBSRTkJ0mcGUakRjVobZSGma78psNnTwOBlMSax5vA%2BE3FeW&X-Amz-Signature=a71b7b300120b35fe02a44370731d04ff203378f805709dc48f3a39f72abf386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPKSLWH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqAWeT7jhaQYCRLk7RG777pRwxqXvjfQk14DqAs%2FXBTAiBLN24HEk4%2BE9ufBiltL81HoTqKto1jRUThDvSfSaVwbir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2BRsnktIMT%2BM5T%2FCzKtwDjCe3q%2BuFYfqYwbp4e%2Fb4V44igtht01al69Rp4yDVCctJd%2ByBs%2FTZAfkW7um%2BHUGA3GGnU69Ud%2BCEIsCbXH5wMZxhprbuprrNmzONddtWobfw6K2hH2zELmI4iAA8%2FIgMUyU4NVzSvy%2BsCc%2FsHXxbZlZUC7F8HZ6PAUqphB4Vbyxb4LyMbsCUi0PpzdZG5YxMsglDZ%2FWafSs3hTNVz%2FZcllQ4bQmyXmcnF0o%2FJOGNlGk9bEUwKUHQ1GCIXvwyrvmOPE6zczRrVwgLWD8pCBxqgFQBq868EmpSSK4H%2F3hkjaZpwCQp3OElk0zaE00WOJd1QCwufZd3bM4gmDpbT5D4hWhxadZvetr%2BQCi%2FBt6JBISV3I3wLNNOJx%2BstMZ08KkHCKeUThZ%2FmFu%2B4GPyHdr57WPrxrjkRPqKt%2BlTWQy9rLSjDUM6fElgZIEvZ96bicBDjs7z2IMCBjRSejt7ap8yI13YOlkMzHm%2BzZXDolkcXr%2BpcSFw7CBIQJpyf75AqQXPYkvx6qNqgMoo2DRfIh%2FhcM3NYEIDzScaZjVGjKl37TJplwXTcUh0KkimY6HZMTK6ZKq2NgbaMwp4XFplDT%2FNIjSBWyR293rrTDNFO67uXoOC7uW80Sk5YC5ua%2Bowp5C4xAY6pgE4tGymDIwRtrgQwNFa1Icqtg7%2Bg634i5si72xBf5UBeDGcPz%2F55Rqu0D2TnFmGMMEqyZs3zQy2Ju03i%2FZuO4ZHdwin%2BQRUCduCcX9yHhStpmmrsIL4apOqG7bsEAzEPwXtG66yax0DR4H8%2F8DSkvd4rEg1Dvmqb43oqC1jC9sKgaqWWBSRTkJ0mcGUakRjVobZSGma78psNnTwOBlMSax5vA%2BE3FeW&X-Amz-Signature=36dab333abc13e8c3d3abfb1798c81d6233155ddd612ebcc2b9d733697a18a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPKSLWH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqAWeT7jhaQYCRLk7RG777pRwxqXvjfQk14DqAs%2FXBTAiBLN24HEk4%2BE9ufBiltL81HoTqKto1jRUThDvSfSaVwbir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2BRsnktIMT%2BM5T%2FCzKtwDjCe3q%2BuFYfqYwbp4e%2Fb4V44igtht01al69Rp4yDVCctJd%2ByBs%2FTZAfkW7um%2BHUGA3GGnU69Ud%2BCEIsCbXH5wMZxhprbuprrNmzONddtWobfw6K2hH2zELmI4iAA8%2FIgMUyU4NVzSvy%2BsCc%2FsHXxbZlZUC7F8HZ6PAUqphB4Vbyxb4LyMbsCUi0PpzdZG5YxMsglDZ%2FWafSs3hTNVz%2FZcllQ4bQmyXmcnF0o%2FJOGNlGk9bEUwKUHQ1GCIXvwyrvmOPE6zczRrVwgLWD8pCBxqgFQBq868EmpSSK4H%2F3hkjaZpwCQp3OElk0zaE00WOJd1QCwufZd3bM4gmDpbT5D4hWhxadZvetr%2BQCi%2FBt6JBISV3I3wLNNOJx%2BstMZ08KkHCKeUThZ%2FmFu%2B4GPyHdr57WPrxrjkRPqKt%2BlTWQy9rLSjDUM6fElgZIEvZ96bicBDjs7z2IMCBjRSejt7ap8yI13YOlkMzHm%2BzZXDolkcXr%2BpcSFw7CBIQJpyf75AqQXPYkvx6qNqgMoo2DRfIh%2FhcM3NYEIDzScaZjVGjKl37TJplwXTcUh0KkimY6HZMTK6ZKq2NgbaMwp4XFplDT%2FNIjSBWyR293rrTDNFO67uXoOC7uW80Sk5YC5ua%2Bowp5C4xAY6pgE4tGymDIwRtrgQwNFa1Icqtg7%2Bg634i5si72xBf5UBeDGcPz%2F55Rqu0D2TnFmGMMEqyZs3zQy2Ju03i%2FZuO4ZHdwin%2BQRUCduCcX9yHhStpmmrsIL4apOqG7bsEAzEPwXtG66yax0DR4H8%2F8DSkvd4rEg1Dvmqb43oqC1jC9sKgaqWWBSRTkJ0mcGUakRjVobZSGma78psNnTwOBlMSax5vA%2BE3FeW&X-Amz-Signature=7bd481db6f70009c9f836c8bb0de9bf21246881559cb8e7f6cd0ef698e8a4c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPKSLWH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqAWeT7jhaQYCRLk7RG777pRwxqXvjfQk14DqAs%2FXBTAiBLN24HEk4%2BE9ufBiltL81HoTqKto1jRUThDvSfSaVwbir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2BRsnktIMT%2BM5T%2FCzKtwDjCe3q%2BuFYfqYwbp4e%2Fb4V44igtht01al69Rp4yDVCctJd%2ByBs%2FTZAfkW7um%2BHUGA3GGnU69Ud%2BCEIsCbXH5wMZxhprbuprrNmzONddtWobfw6K2hH2zELmI4iAA8%2FIgMUyU4NVzSvy%2BsCc%2FsHXxbZlZUC7F8HZ6PAUqphB4Vbyxb4LyMbsCUi0PpzdZG5YxMsglDZ%2FWafSs3hTNVz%2FZcllQ4bQmyXmcnF0o%2FJOGNlGk9bEUwKUHQ1GCIXvwyrvmOPE6zczRrVwgLWD8pCBxqgFQBq868EmpSSK4H%2F3hkjaZpwCQp3OElk0zaE00WOJd1QCwufZd3bM4gmDpbT5D4hWhxadZvetr%2BQCi%2FBt6JBISV3I3wLNNOJx%2BstMZ08KkHCKeUThZ%2FmFu%2B4GPyHdr57WPrxrjkRPqKt%2BlTWQy9rLSjDUM6fElgZIEvZ96bicBDjs7z2IMCBjRSejt7ap8yI13YOlkMzHm%2BzZXDolkcXr%2BpcSFw7CBIQJpyf75AqQXPYkvx6qNqgMoo2DRfIh%2FhcM3NYEIDzScaZjVGjKl37TJplwXTcUh0KkimY6HZMTK6ZKq2NgbaMwp4XFplDT%2FNIjSBWyR293rrTDNFO67uXoOC7uW80Sk5YC5ua%2Bowp5C4xAY6pgE4tGymDIwRtrgQwNFa1Icqtg7%2Bg634i5si72xBf5UBeDGcPz%2F55Rqu0D2TnFmGMMEqyZs3zQy2Ju03i%2FZuO4ZHdwin%2BQRUCduCcX9yHhStpmmrsIL4apOqG7bsEAzEPwXtG66yax0DR4H8%2F8DSkvd4rEg1Dvmqb43oqC1jC9sKgaqWWBSRTkJ0mcGUakRjVobZSGma78psNnTwOBlMSax5vA%2BE3FeW&X-Amz-Signature=e978ca2ef959200358c6719a2d558f18c0d43df7ad969e35bb797e9f3e1ebcdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPKSLWH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqAWeT7jhaQYCRLk7RG777pRwxqXvjfQk14DqAs%2FXBTAiBLN24HEk4%2BE9ufBiltL81HoTqKto1jRUThDvSfSaVwbir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2BRsnktIMT%2BM5T%2FCzKtwDjCe3q%2BuFYfqYwbp4e%2Fb4V44igtht01al69Rp4yDVCctJd%2ByBs%2FTZAfkW7um%2BHUGA3GGnU69Ud%2BCEIsCbXH5wMZxhprbuprrNmzONddtWobfw6K2hH2zELmI4iAA8%2FIgMUyU4NVzSvy%2BsCc%2FsHXxbZlZUC7F8HZ6PAUqphB4Vbyxb4LyMbsCUi0PpzdZG5YxMsglDZ%2FWafSs3hTNVz%2FZcllQ4bQmyXmcnF0o%2FJOGNlGk9bEUwKUHQ1GCIXvwyrvmOPE6zczRrVwgLWD8pCBxqgFQBq868EmpSSK4H%2F3hkjaZpwCQp3OElk0zaE00WOJd1QCwufZd3bM4gmDpbT5D4hWhxadZvetr%2BQCi%2FBt6JBISV3I3wLNNOJx%2BstMZ08KkHCKeUThZ%2FmFu%2B4GPyHdr57WPrxrjkRPqKt%2BlTWQy9rLSjDUM6fElgZIEvZ96bicBDjs7z2IMCBjRSejt7ap8yI13YOlkMzHm%2BzZXDolkcXr%2BpcSFw7CBIQJpyf75AqQXPYkvx6qNqgMoo2DRfIh%2FhcM3NYEIDzScaZjVGjKl37TJplwXTcUh0KkimY6HZMTK6ZKq2NgbaMwp4XFplDT%2FNIjSBWyR293rrTDNFO67uXoOC7uW80Sk5YC5ua%2Bowp5C4xAY6pgE4tGymDIwRtrgQwNFa1Icqtg7%2Bg634i5si72xBf5UBeDGcPz%2F55Rqu0D2TnFmGMMEqyZs3zQy2Ju03i%2FZuO4ZHdwin%2BQRUCduCcX9yHhStpmmrsIL4apOqG7bsEAzEPwXtG66yax0DR4H8%2F8DSkvd4rEg1Dvmqb43oqC1jC9sKgaqWWBSRTkJ0mcGUakRjVobZSGma78psNnTwOBlMSax5vA%2BE3FeW&X-Amz-Signature=8b6080142e01288d4b80367adf71e74df0ef2757cd9cd209445eedffb4354ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPKSLWH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqAWeT7jhaQYCRLk7RG777pRwxqXvjfQk14DqAs%2FXBTAiBLN24HEk4%2BE9ufBiltL81HoTqKto1jRUThDvSfSaVwbir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM%2BRsnktIMT%2BM5T%2FCzKtwDjCe3q%2BuFYfqYwbp4e%2Fb4V44igtht01al69Rp4yDVCctJd%2ByBs%2FTZAfkW7um%2BHUGA3GGnU69Ud%2BCEIsCbXH5wMZxhprbuprrNmzONddtWobfw6K2hH2zELmI4iAA8%2FIgMUyU4NVzSvy%2BsCc%2FsHXxbZlZUC7F8HZ6PAUqphB4Vbyxb4LyMbsCUi0PpzdZG5YxMsglDZ%2FWafSs3hTNVz%2FZcllQ4bQmyXmcnF0o%2FJOGNlGk9bEUwKUHQ1GCIXvwyrvmOPE6zczRrVwgLWD8pCBxqgFQBq868EmpSSK4H%2F3hkjaZpwCQp3OElk0zaE00WOJd1QCwufZd3bM4gmDpbT5D4hWhxadZvetr%2BQCi%2FBt6JBISV3I3wLNNOJx%2BstMZ08KkHCKeUThZ%2FmFu%2B4GPyHdr57WPrxrjkRPqKt%2BlTWQy9rLSjDUM6fElgZIEvZ96bicBDjs7z2IMCBjRSejt7ap8yI13YOlkMzHm%2BzZXDolkcXr%2BpcSFw7CBIQJpyf75AqQXPYkvx6qNqgMoo2DRfIh%2FhcM3NYEIDzScaZjVGjKl37TJplwXTcUh0KkimY6HZMTK6ZKq2NgbaMwp4XFplDT%2FNIjSBWyR293rrTDNFO67uXoOC7uW80Sk5YC5ua%2Bowp5C4xAY6pgE4tGymDIwRtrgQwNFa1Icqtg7%2Bg634i5si72xBf5UBeDGcPz%2F55Rqu0D2TnFmGMMEqyZs3zQy2Ju03i%2FZuO4ZHdwin%2BQRUCduCcX9yHhStpmmrsIL4apOqG7bsEAzEPwXtG66yax0DR4H8%2F8DSkvd4rEg1Dvmqb43oqC1jC9sKgaqWWBSRTkJ0mcGUakRjVobZSGma78psNnTwOBlMSax5vA%2BE3FeW&X-Amz-Signature=5587593e05d59296f76ac1f97a167d6aa39d109038095affde30d30c5077e50b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
