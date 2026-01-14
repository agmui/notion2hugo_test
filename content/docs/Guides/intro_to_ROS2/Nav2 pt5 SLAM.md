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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVDZWWV%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF59PNwfSFuSbI7wub3PjoGhKcaWRgeNLTcQYCMAPbLWAiEAvi0EWn2LUpQCnoPMHRDEmvV1ldnrA%2ByQTplKPfB%2Fz2Qq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIXOh8LYhvok5DDoJCrcA8QQxN%2BNnIyR%2FpN6r1Y4X371dZzYy12wCFgVHmqB9wZs3nxpPn3OBQpqJCvA9RT0OOm%2F%2Fn65gBPv73IXX98vnS4erdamcIoohwcwSe85nEjglSmZote3s0ts%2Fw2ku6qrIBZIc4ujPFgXoCrqADU9ThBfuZzhT0cVQOk86gAo71BOBxu7xkxcUlR1L0uil8V3PAfRNjGU6zrVIXzB4rtdCqHuQZh0Wq6ksmbckDHcmGfr6EIA0t00RpfZihRJHyb4LlgJskVyCD1yrmvnGCf5lzbO0Eq%2Fnf5cIGibJ%2Fhoo0noCN%2FgrT3zKwvBifGPqsm2qaIcpTDg5XUpkuSP8eJ3aNXXG6HhWu0n8dT2%2BnkiVTNGfJPNGx7Hx5wsW2KZ2EyvqLOU7exc%2FfwTl5HTyEu5Z6Of%2BiOIg52d66ViqlWQpcv2ep917bAAPC762rBGxbOC8%2BT%2F2EvVW%2BOCEIdJGtDgdLvE1zmSMYq1VzeDZzMOz6ExvIw14%2F2CdNtyx%2BOEhd9RbhClyDOKZvN5Mqr1Fio1Pm3tUIiRnKf%2FvsV%2B%2BKLbhRJy3dMKWlVNu86KupKO72Ry3N36syHyJevo2HkZRQxzeEvpYlNf6E3VAbXWzaFQoM%2Fu3naEW2wImNPi6o2QMOXNm8sGOqUBTR%2BqouHRAw0AQOd2pr%2FkqQLfuUPm%2FHHX2t8X%2BMOs%2FI9gw5JARQgadWqOg5oQLwxqtA4ayPzY9vs9mNTk3Mpuxp9cNFXDZgKPZSoDeO5yBz67m%2BE9%2BDCnD14vnzuWh7gEVYJxtKz0EDUas1KdZy8L9SSBaSHAvzsRzrDJaRgYwSg0abxuQVhIJBIgM7nB7Tqds168TbyuYYuoJ1vrpIAUzwqVtWuK&X-Amz-Signature=0b7e797f6c3dc5decfaf79beb7552ed1b13fc08710fdb102e499b2e7eb93e4b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVDZWWV%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF59PNwfSFuSbI7wub3PjoGhKcaWRgeNLTcQYCMAPbLWAiEAvi0EWn2LUpQCnoPMHRDEmvV1ldnrA%2ByQTplKPfB%2Fz2Qq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIXOh8LYhvok5DDoJCrcA8QQxN%2BNnIyR%2FpN6r1Y4X371dZzYy12wCFgVHmqB9wZs3nxpPn3OBQpqJCvA9RT0OOm%2F%2Fn65gBPv73IXX98vnS4erdamcIoohwcwSe85nEjglSmZote3s0ts%2Fw2ku6qrIBZIc4ujPFgXoCrqADU9ThBfuZzhT0cVQOk86gAo71BOBxu7xkxcUlR1L0uil8V3PAfRNjGU6zrVIXzB4rtdCqHuQZh0Wq6ksmbckDHcmGfr6EIA0t00RpfZihRJHyb4LlgJskVyCD1yrmvnGCf5lzbO0Eq%2Fnf5cIGibJ%2Fhoo0noCN%2FgrT3zKwvBifGPqsm2qaIcpTDg5XUpkuSP8eJ3aNXXG6HhWu0n8dT2%2BnkiVTNGfJPNGx7Hx5wsW2KZ2EyvqLOU7exc%2FfwTl5HTyEu5Z6Of%2BiOIg52d66ViqlWQpcv2ep917bAAPC762rBGxbOC8%2BT%2F2EvVW%2BOCEIdJGtDgdLvE1zmSMYq1VzeDZzMOz6ExvIw14%2F2CdNtyx%2BOEhd9RbhClyDOKZvN5Mqr1Fio1Pm3tUIiRnKf%2FvsV%2B%2BKLbhRJy3dMKWlVNu86KupKO72Ry3N36syHyJevo2HkZRQxzeEvpYlNf6E3VAbXWzaFQoM%2Fu3naEW2wImNPi6o2QMOXNm8sGOqUBTR%2BqouHRAw0AQOd2pr%2FkqQLfuUPm%2FHHX2t8X%2BMOs%2FI9gw5JARQgadWqOg5oQLwxqtA4ayPzY9vs9mNTk3Mpuxp9cNFXDZgKPZSoDeO5yBz67m%2BE9%2BDCnD14vnzuWh7gEVYJxtKz0EDUas1KdZy8L9SSBaSHAvzsRzrDJaRgYwSg0abxuQVhIJBIgM7nB7Tqds168TbyuYYuoJ1vrpIAUzwqVtWuK&X-Amz-Signature=28f4b73f767719dc8841df9416630657c26026105738c2e41be1948b352c05ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVDZWWV%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF59PNwfSFuSbI7wub3PjoGhKcaWRgeNLTcQYCMAPbLWAiEAvi0EWn2LUpQCnoPMHRDEmvV1ldnrA%2ByQTplKPfB%2Fz2Qq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIXOh8LYhvok5DDoJCrcA8QQxN%2BNnIyR%2FpN6r1Y4X371dZzYy12wCFgVHmqB9wZs3nxpPn3OBQpqJCvA9RT0OOm%2F%2Fn65gBPv73IXX98vnS4erdamcIoohwcwSe85nEjglSmZote3s0ts%2Fw2ku6qrIBZIc4ujPFgXoCrqADU9ThBfuZzhT0cVQOk86gAo71BOBxu7xkxcUlR1L0uil8V3PAfRNjGU6zrVIXzB4rtdCqHuQZh0Wq6ksmbckDHcmGfr6EIA0t00RpfZihRJHyb4LlgJskVyCD1yrmvnGCf5lzbO0Eq%2Fnf5cIGibJ%2Fhoo0noCN%2FgrT3zKwvBifGPqsm2qaIcpTDg5XUpkuSP8eJ3aNXXG6HhWu0n8dT2%2BnkiVTNGfJPNGx7Hx5wsW2KZ2EyvqLOU7exc%2FfwTl5HTyEu5Z6Of%2BiOIg52d66ViqlWQpcv2ep917bAAPC762rBGxbOC8%2BT%2F2EvVW%2BOCEIdJGtDgdLvE1zmSMYq1VzeDZzMOz6ExvIw14%2F2CdNtyx%2BOEhd9RbhClyDOKZvN5Mqr1Fio1Pm3tUIiRnKf%2FvsV%2B%2BKLbhRJy3dMKWlVNu86KupKO72Ry3N36syHyJevo2HkZRQxzeEvpYlNf6E3VAbXWzaFQoM%2Fu3naEW2wImNPi6o2QMOXNm8sGOqUBTR%2BqouHRAw0AQOd2pr%2FkqQLfuUPm%2FHHX2t8X%2BMOs%2FI9gw5JARQgadWqOg5oQLwxqtA4ayPzY9vs9mNTk3Mpuxp9cNFXDZgKPZSoDeO5yBz67m%2BE9%2BDCnD14vnzuWh7gEVYJxtKz0EDUas1KdZy8L9SSBaSHAvzsRzrDJaRgYwSg0abxuQVhIJBIgM7nB7Tqds168TbyuYYuoJ1vrpIAUzwqVtWuK&X-Amz-Signature=b9a8eb79964757cc5acbb75a656fb581e1522ae9aec0b20a6fd192d04a4b73c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVDZWWV%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF59PNwfSFuSbI7wub3PjoGhKcaWRgeNLTcQYCMAPbLWAiEAvi0EWn2LUpQCnoPMHRDEmvV1ldnrA%2ByQTplKPfB%2Fz2Qq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIXOh8LYhvok5DDoJCrcA8QQxN%2BNnIyR%2FpN6r1Y4X371dZzYy12wCFgVHmqB9wZs3nxpPn3OBQpqJCvA9RT0OOm%2F%2Fn65gBPv73IXX98vnS4erdamcIoohwcwSe85nEjglSmZote3s0ts%2Fw2ku6qrIBZIc4ujPFgXoCrqADU9ThBfuZzhT0cVQOk86gAo71BOBxu7xkxcUlR1L0uil8V3PAfRNjGU6zrVIXzB4rtdCqHuQZh0Wq6ksmbckDHcmGfr6EIA0t00RpfZihRJHyb4LlgJskVyCD1yrmvnGCf5lzbO0Eq%2Fnf5cIGibJ%2Fhoo0noCN%2FgrT3zKwvBifGPqsm2qaIcpTDg5XUpkuSP8eJ3aNXXG6HhWu0n8dT2%2BnkiVTNGfJPNGx7Hx5wsW2KZ2EyvqLOU7exc%2FfwTl5HTyEu5Z6Of%2BiOIg52d66ViqlWQpcv2ep917bAAPC762rBGxbOC8%2BT%2F2EvVW%2BOCEIdJGtDgdLvE1zmSMYq1VzeDZzMOz6ExvIw14%2F2CdNtyx%2BOEhd9RbhClyDOKZvN5Mqr1Fio1Pm3tUIiRnKf%2FvsV%2B%2BKLbhRJy3dMKWlVNu86KupKO72Ry3N36syHyJevo2HkZRQxzeEvpYlNf6E3VAbXWzaFQoM%2Fu3naEW2wImNPi6o2QMOXNm8sGOqUBTR%2BqouHRAw0AQOd2pr%2FkqQLfuUPm%2FHHX2t8X%2BMOs%2FI9gw5JARQgadWqOg5oQLwxqtA4ayPzY9vs9mNTk3Mpuxp9cNFXDZgKPZSoDeO5yBz67m%2BE9%2BDCnD14vnzuWh7gEVYJxtKz0EDUas1KdZy8L9SSBaSHAvzsRzrDJaRgYwSg0abxuQVhIJBIgM7nB7Tqds168TbyuYYuoJ1vrpIAUzwqVtWuK&X-Amz-Signature=cfd9331295e3b46a7924d4ce515523d0584ce2683a3fde454965de0737f3fe54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVDZWWV%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF59PNwfSFuSbI7wub3PjoGhKcaWRgeNLTcQYCMAPbLWAiEAvi0EWn2LUpQCnoPMHRDEmvV1ldnrA%2ByQTplKPfB%2Fz2Qq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIXOh8LYhvok5DDoJCrcA8QQxN%2BNnIyR%2FpN6r1Y4X371dZzYy12wCFgVHmqB9wZs3nxpPn3OBQpqJCvA9RT0OOm%2F%2Fn65gBPv73IXX98vnS4erdamcIoohwcwSe85nEjglSmZote3s0ts%2Fw2ku6qrIBZIc4ujPFgXoCrqADU9ThBfuZzhT0cVQOk86gAo71BOBxu7xkxcUlR1L0uil8V3PAfRNjGU6zrVIXzB4rtdCqHuQZh0Wq6ksmbckDHcmGfr6EIA0t00RpfZihRJHyb4LlgJskVyCD1yrmvnGCf5lzbO0Eq%2Fnf5cIGibJ%2Fhoo0noCN%2FgrT3zKwvBifGPqsm2qaIcpTDg5XUpkuSP8eJ3aNXXG6HhWu0n8dT2%2BnkiVTNGfJPNGx7Hx5wsW2KZ2EyvqLOU7exc%2FfwTl5HTyEu5Z6Of%2BiOIg52d66ViqlWQpcv2ep917bAAPC762rBGxbOC8%2BT%2F2EvVW%2BOCEIdJGtDgdLvE1zmSMYq1VzeDZzMOz6ExvIw14%2F2CdNtyx%2BOEhd9RbhClyDOKZvN5Mqr1Fio1Pm3tUIiRnKf%2FvsV%2B%2BKLbhRJy3dMKWlVNu86KupKO72Ry3N36syHyJevo2HkZRQxzeEvpYlNf6E3VAbXWzaFQoM%2Fu3naEW2wImNPi6o2QMOXNm8sGOqUBTR%2BqouHRAw0AQOd2pr%2FkqQLfuUPm%2FHHX2t8X%2BMOs%2FI9gw5JARQgadWqOg5oQLwxqtA4ayPzY9vs9mNTk3Mpuxp9cNFXDZgKPZSoDeO5yBz67m%2BE9%2BDCnD14vnzuWh7gEVYJxtKz0EDUas1KdZy8L9SSBaSHAvzsRzrDJaRgYwSg0abxuQVhIJBIgM7nB7Tqds168TbyuYYuoJ1vrpIAUzwqVtWuK&X-Amz-Signature=2bd9f1b14ee8559da9e0359c6341cf070e31da22def32d91cc98459102b87a70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVDZWWV%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF59PNwfSFuSbI7wub3PjoGhKcaWRgeNLTcQYCMAPbLWAiEAvi0EWn2LUpQCnoPMHRDEmvV1ldnrA%2ByQTplKPfB%2Fz2Qq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIXOh8LYhvok5DDoJCrcA8QQxN%2BNnIyR%2FpN6r1Y4X371dZzYy12wCFgVHmqB9wZs3nxpPn3OBQpqJCvA9RT0OOm%2F%2Fn65gBPv73IXX98vnS4erdamcIoohwcwSe85nEjglSmZote3s0ts%2Fw2ku6qrIBZIc4ujPFgXoCrqADU9ThBfuZzhT0cVQOk86gAo71BOBxu7xkxcUlR1L0uil8V3PAfRNjGU6zrVIXzB4rtdCqHuQZh0Wq6ksmbckDHcmGfr6EIA0t00RpfZihRJHyb4LlgJskVyCD1yrmvnGCf5lzbO0Eq%2Fnf5cIGibJ%2Fhoo0noCN%2FgrT3zKwvBifGPqsm2qaIcpTDg5XUpkuSP8eJ3aNXXG6HhWu0n8dT2%2BnkiVTNGfJPNGx7Hx5wsW2KZ2EyvqLOU7exc%2FfwTl5HTyEu5Z6Of%2BiOIg52d66ViqlWQpcv2ep917bAAPC762rBGxbOC8%2BT%2F2EvVW%2BOCEIdJGtDgdLvE1zmSMYq1VzeDZzMOz6ExvIw14%2F2CdNtyx%2BOEhd9RbhClyDOKZvN5Mqr1Fio1Pm3tUIiRnKf%2FvsV%2B%2BKLbhRJy3dMKWlVNu86KupKO72Ry3N36syHyJevo2HkZRQxzeEvpYlNf6E3VAbXWzaFQoM%2Fu3naEW2wImNPi6o2QMOXNm8sGOqUBTR%2BqouHRAw0AQOd2pr%2FkqQLfuUPm%2FHHX2t8X%2BMOs%2FI9gw5JARQgadWqOg5oQLwxqtA4ayPzY9vs9mNTk3Mpuxp9cNFXDZgKPZSoDeO5yBz67m%2BE9%2BDCnD14vnzuWh7gEVYJxtKz0EDUas1KdZy8L9SSBaSHAvzsRzrDJaRgYwSg0abxuQVhIJBIgM7nB7Tqds168TbyuYYuoJ1vrpIAUzwqVtWuK&X-Amz-Signature=cf241315d7201f88287457c9f29421b80c2ecd1db841bccc924b81c718b07a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVDZWWV%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF59PNwfSFuSbI7wub3PjoGhKcaWRgeNLTcQYCMAPbLWAiEAvi0EWn2LUpQCnoPMHRDEmvV1ldnrA%2ByQTplKPfB%2Fz2Qq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIXOh8LYhvok5DDoJCrcA8QQxN%2BNnIyR%2FpN6r1Y4X371dZzYy12wCFgVHmqB9wZs3nxpPn3OBQpqJCvA9RT0OOm%2F%2Fn65gBPv73IXX98vnS4erdamcIoohwcwSe85nEjglSmZote3s0ts%2Fw2ku6qrIBZIc4ujPFgXoCrqADU9ThBfuZzhT0cVQOk86gAo71BOBxu7xkxcUlR1L0uil8V3PAfRNjGU6zrVIXzB4rtdCqHuQZh0Wq6ksmbckDHcmGfr6EIA0t00RpfZihRJHyb4LlgJskVyCD1yrmvnGCf5lzbO0Eq%2Fnf5cIGibJ%2Fhoo0noCN%2FgrT3zKwvBifGPqsm2qaIcpTDg5XUpkuSP8eJ3aNXXG6HhWu0n8dT2%2BnkiVTNGfJPNGx7Hx5wsW2KZ2EyvqLOU7exc%2FfwTl5HTyEu5Z6Of%2BiOIg52d66ViqlWQpcv2ep917bAAPC762rBGxbOC8%2BT%2F2EvVW%2BOCEIdJGtDgdLvE1zmSMYq1VzeDZzMOz6ExvIw14%2F2CdNtyx%2BOEhd9RbhClyDOKZvN5Mqr1Fio1Pm3tUIiRnKf%2FvsV%2B%2BKLbhRJy3dMKWlVNu86KupKO72Ry3N36syHyJevo2HkZRQxzeEvpYlNf6E3VAbXWzaFQoM%2Fu3naEW2wImNPi6o2QMOXNm8sGOqUBTR%2BqouHRAw0AQOd2pr%2FkqQLfuUPm%2FHHX2t8X%2BMOs%2FI9gw5JARQgadWqOg5oQLwxqtA4ayPzY9vs9mNTk3Mpuxp9cNFXDZgKPZSoDeO5yBz67m%2BE9%2BDCnD14vnzuWh7gEVYJxtKz0EDUas1KdZy8L9SSBaSHAvzsRzrDJaRgYwSg0abxuQVhIJBIgM7nB7Tqds168TbyuYYuoJ1vrpIAUzwqVtWuK&X-Amz-Signature=ce1268e3bb534aaf3d8aad92873f8b52f7779908bf50b21cee6f03c35bbbeebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVDZWWV%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF59PNwfSFuSbI7wub3PjoGhKcaWRgeNLTcQYCMAPbLWAiEAvi0EWn2LUpQCnoPMHRDEmvV1ldnrA%2ByQTplKPfB%2Fz2Qq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIXOh8LYhvok5DDoJCrcA8QQxN%2BNnIyR%2FpN6r1Y4X371dZzYy12wCFgVHmqB9wZs3nxpPn3OBQpqJCvA9RT0OOm%2F%2Fn65gBPv73IXX98vnS4erdamcIoohwcwSe85nEjglSmZote3s0ts%2Fw2ku6qrIBZIc4ujPFgXoCrqADU9ThBfuZzhT0cVQOk86gAo71BOBxu7xkxcUlR1L0uil8V3PAfRNjGU6zrVIXzB4rtdCqHuQZh0Wq6ksmbckDHcmGfr6EIA0t00RpfZihRJHyb4LlgJskVyCD1yrmvnGCf5lzbO0Eq%2Fnf5cIGibJ%2Fhoo0noCN%2FgrT3zKwvBifGPqsm2qaIcpTDg5XUpkuSP8eJ3aNXXG6HhWu0n8dT2%2BnkiVTNGfJPNGx7Hx5wsW2KZ2EyvqLOU7exc%2FfwTl5HTyEu5Z6Of%2BiOIg52d66ViqlWQpcv2ep917bAAPC762rBGxbOC8%2BT%2F2EvVW%2BOCEIdJGtDgdLvE1zmSMYq1VzeDZzMOz6ExvIw14%2F2CdNtyx%2BOEhd9RbhClyDOKZvN5Mqr1Fio1Pm3tUIiRnKf%2FvsV%2B%2BKLbhRJy3dMKWlVNu86KupKO72Ry3N36syHyJevo2HkZRQxzeEvpYlNf6E3VAbXWzaFQoM%2Fu3naEW2wImNPi6o2QMOXNm8sGOqUBTR%2BqouHRAw0AQOd2pr%2FkqQLfuUPm%2FHHX2t8X%2BMOs%2FI9gw5JARQgadWqOg5oQLwxqtA4ayPzY9vs9mNTk3Mpuxp9cNFXDZgKPZSoDeO5yBz67m%2BE9%2BDCnD14vnzuWh7gEVYJxtKz0EDUas1KdZy8L9SSBaSHAvzsRzrDJaRgYwSg0abxuQVhIJBIgM7nB7Tqds168TbyuYYuoJ1vrpIAUzwqVtWuK&X-Amz-Signature=6e440ed058857d413f0190be0cf8da5737320feb92d92b6f5ce896c2aa95159f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVDZWWV%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF59PNwfSFuSbI7wub3PjoGhKcaWRgeNLTcQYCMAPbLWAiEAvi0EWn2LUpQCnoPMHRDEmvV1ldnrA%2ByQTplKPfB%2Fz2Qq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIXOh8LYhvok5DDoJCrcA8QQxN%2BNnIyR%2FpN6r1Y4X371dZzYy12wCFgVHmqB9wZs3nxpPn3OBQpqJCvA9RT0OOm%2F%2Fn65gBPv73IXX98vnS4erdamcIoohwcwSe85nEjglSmZote3s0ts%2Fw2ku6qrIBZIc4ujPFgXoCrqADU9ThBfuZzhT0cVQOk86gAo71BOBxu7xkxcUlR1L0uil8V3PAfRNjGU6zrVIXzB4rtdCqHuQZh0Wq6ksmbckDHcmGfr6EIA0t00RpfZihRJHyb4LlgJskVyCD1yrmvnGCf5lzbO0Eq%2Fnf5cIGibJ%2Fhoo0noCN%2FgrT3zKwvBifGPqsm2qaIcpTDg5XUpkuSP8eJ3aNXXG6HhWu0n8dT2%2BnkiVTNGfJPNGx7Hx5wsW2KZ2EyvqLOU7exc%2FfwTl5HTyEu5Z6Of%2BiOIg52d66ViqlWQpcv2ep917bAAPC762rBGxbOC8%2BT%2F2EvVW%2BOCEIdJGtDgdLvE1zmSMYq1VzeDZzMOz6ExvIw14%2F2CdNtyx%2BOEhd9RbhClyDOKZvN5Mqr1Fio1Pm3tUIiRnKf%2FvsV%2B%2BKLbhRJy3dMKWlVNu86KupKO72Ry3N36syHyJevo2HkZRQxzeEvpYlNf6E3VAbXWzaFQoM%2Fu3naEW2wImNPi6o2QMOXNm8sGOqUBTR%2BqouHRAw0AQOd2pr%2FkqQLfuUPm%2FHHX2t8X%2BMOs%2FI9gw5JARQgadWqOg5oQLwxqtA4ayPzY9vs9mNTk3Mpuxp9cNFXDZgKPZSoDeO5yBz67m%2BE9%2BDCnD14vnzuWh7gEVYJxtKz0EDUas1KdZy8L9SSBaSHAvzsRzrDJaRgYwSg0abxuQVhIJBIgM7nB7Tqds168TbyuYYuoJ1vrpIAUzwqVtWuK&X-Amz-Signature=705e070914004ae1e22db5b6918288a66c64c8e7b00d9f9fb96c2d0d4b317569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVDZWWV%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF59PNwfSFuSbI7wub3PjoGhKcaWRgeNLTcQYCMAPbLWAiEAvi0EWn2LUpQCnoPMHRDEmvV1ldnrA%2ByQTplKPfB%2Fz2Qq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIXOh8LYhvok5DDoJCrcA8QQxN%2BNnIyR%2FpN6r1Y4X371dZzYy12wCFgVHmqB9wZs3nxpPn3OBQpqJCvA9RT0OOm%2F%2Fn65gBPv73IXX98vnS4erdamcIoohwcwSe85nEjglSmZote3s0ts%2Fw2ku6qrIBZIc4ujPFgXoCrqADU9ThBfuZzhT0cVQOk86gAo71BOBxu7xkxcUlR1L0uil8V3PAfRNjGU6zrVIXzB4rtdCqHuQZh0Wq6ksmbckDHcmGfr6EIA0t00RpfZihRJHyb4LlgJskVyCD1yrmvnGCf5lzbO0Eq%2Fnf5cIGibJ%2Fhoo0noCN%2FgrT3zKwvBifGPqsm2qaIcpTDg5XUpkuSP8eJ3aNXXG6HhWu0n8dT2%2BnkiVTNGfJPNGx7Hx5wsW2KZ2EyvqLOU7exc%2FfwTl5HTyEu5Z6Of%2BiOIg52d66ViqlWQpcv2ep917bAAPC762rBGxbOC8%2BT%2F2EvVW%2BOCEIdJGtDgdLvE1zmSMYq1VzeDZzMOz6ExvIw14%2F2CdNtyx%2BOEhd9RbhClyDOKZvN5Mqr1Fio1Pm3tUIiRnKf%2FvsV%2B%2BKLbhRJy3dMKWlVNu86KupKO72Ry3N36syHyJevo2HkZRQxzeEvpYlNf6E3VAbXWzaFQoM%2Fu3naEW2wImNPi6o2QMOXNm8sGOqUBTR%2BqouHRAw0AQOd2pr%2FkqQLfuUPm%2FHHX2t8X%2BMOs%2FI9gw5JARQgadWqOg5oQLwxqtA4ayPzY9vs9mNTk3Mpuxp9cNFXDZgKPZSoDeO5yBz67m%2BE9%2BDCnD14vnzuWh7gEVYJxtKz0EDUas1KdZy8L9SSBaSHAvzsRzrDJaRgYwSg0abxuQVhIJBIgM7nB7Tqds168TbyuYYuoJ1vrpIAUzwqVtWuK&X-Amz-Signature=b1c2f81274a1356d66f1bbbb53bdf578fa7f8075979c6c0d2931959d28613434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVDZWWV%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF59PNwfSFuSbI7wub3PjoGhKcaWRgeNLTcQYCMAPbLWAiEAvi0EWn2LUpQCnoPMHRDEmvV1ldnrA%2ByQTplKPfB%2Fz2Qq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIXOh8LYhvok5DDoJCrcA8QQxN%2BNnIyR%2FpN6r1Y4X371dZzYy12wCFgVHmqB9wZs3nxpPn3OBQpqJCvA9RT0OOm%2F%2Fn65gBPv73IXX98vnS4erdamcIoohwcwSe85nEjglSmZote3s0ts%2Fw2ku6qrIBZIc4ujPFgXoCrqADU9ThBfuZzhT0cVQOk86gAo71BOBxu7xkxcUlR1L0uil8V3PAfRNjGU6zrVIXzB4rtdCqHuQZh0Wq6ksmbckDHcmGfr6EIA0t00RpfZihRJHyb4LlgJskVyCD1yrmvnGCf5lzbO0Eq%2Fnf5cIGibJ%2Fhoo0noCN%2FgrT3zKwvBifGPqsm2qaIcpTDg5XUpkuSP8eJ3aNXXG6HhWu0n8dT2%2BnkiVTNGfJPNGx7Hx5wsW2KZ2EyvqLOU7exc%2FfwTl5HTyEu5Z6Of%2BiOIg52d66ViqlWQpcv2ep917bAAPC762rBGxbOC8%2BT%2F2EvVW%2BOCEIdJGtDgdLvE1zmSMYq1VzeDZzMOz6ExvIw14%2F2CdNtyx%2BOEhd9RbhClyDOKZvN5Mqr1Fio1Pm3tUIiRnKf%2FvsV%2B%2BKLbhRJy3dMKWlVNu86KupKO72Ry3N36syHyJevo2HkZRQxzeEvpYlNf6E3VAbXWzaFQoM%2Fu3naEW2wImNPi6o2QMOXNm8sGOqUBTR%2BqouHRAw0AQOd2pr%2FkqQLfuUPm%2FHHX2t8X%2BMOs%2FI9gw5JARQgadWqOg5oQLwxqtA4ayPzY9vs9mNTk3Mpuxp9cNFXDZgKPZSoDeO5yBz67m%2BE9%2BDCnD14vnzuWh7gEVYJxtKz0EDUas1KdZy8L9SSBaSHAvzsRzrDJaRgYwSg0abxuQVhIJBIgM7nB7Tqds168TbyuYYuoJ1vrpIAUzwqVtWuK&X-Amz-Signature=38a532a8644700e6defecb9b8dc3834c3162c2dcd249905df586ab14190be3e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVDZWWV%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF59PNwfSFuSbI7wub3PjoGhKcaWRgeNLTcQYCMAPbLWAiEAvi0EWn2LUpQCnoPMHRDEmvV1ldnrA%2ByQTplKPfB%2Fz2Qq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIXOh8LYhvok5DDoJCrcA8QQxN%2BNnIyR%2FpN6r1Y4X371dZzYy12wCFgVHmqB9wZs3nxpPn3OBQpqJCvA9RT0OOm%2F%2Fn65gBPv73IXX98vnS4erdamcIoohwcwSe85nEjglSmZote3s0ts%2Fw2ku6qrIBZIc4ujPFgXoCrqADU9ThBfuZzhT0cVQOk86gAo71BOBxu7xkxcUlR1L0uil8V3PAfRNjGU6zrVIXzB4rtdCqHuQZh0Wq6ksmbckDHcmGfr6EIA0t00RpfZihRJHyb4LlgJskVyCD1yrmvnGCf5lzbO0Eq%2Fnf5cIGibJ%2Fhoo0noCN%2FgrT3zKwvBifGPqsm2qaIcpTDg5XUpkuSP8eJ3aNXXG6HhWu0n8dT2%2BnkiVTNGfJPNGx7Hx5wsW2KZ2EyvqLOU7exc%2FfwTl5HTyEu5Z6Of%2BiOIg52d66ViqlWQpcv2ep917bAAPC762rBGxbOC8%2BT%2F2EvVW%2BOCEIdJGtDgdLvE1zmSMYq1VzeDZzMOz6ExvIw14%2F2CdNtyx%2BOEhd9RbhClyDOKZvN5Mqr1Fio1Pm3tUIiRnKf%2FvsV%2B%2BKLbhRJy3dMKWlVNu86KupKO72Ry3N36syHyJevo2HkZRQxzeEvpYlNf6E3VAbXWzaFQoM%2Fu3naEW2wImNPi6o2QMOXNm8sGOqUBTR%2BqouHRAw0AQOd2pr%2FkqQLfuUPm%2FHHX2t8X%2BMOs%2FI9gw5JARQgadWqOg5oQLwxqtA4ayPzY9vs9mNTk3Mpuxp9cNFXDZgKPZSoDeO5yBz67m%2BE9%2BDCnD14vnzuWh7gEVYJxtKz0EDUas1KdZy8L9SSBaSHAvzsRzrDJaRgYwSg0abxuQVhIJBIgM7nB7Tqds168TbyuYYuoJ1vrpIAUzwqVtWuK&X-Amz-Signature=b0907d31468f26ecbf192a74f4add9220fba3340aa5316008fcdec86e2f075b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVDZWWV%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF59PNwfSFuSbI7wub3PjoGhKcaWRgeNLTcQYCMAPbLWAiEAvi0EWn2LUpQCnoPMHRDEmvV1ldnrA%2ByQTplKPfB%2Fz2Qq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIXOh8LYhvok5DDoJCrcA8QQxN%2BNnIyR%2FpN6r1Y4X371dZzYy12wCFgVHmqB9wZs3nxpPn3OBQpqJCvA9RT0OOm%2F%2Fn65gBPv73IXX98vnS4erdamcIoohwcwSe85nEjglSmZote3s0ts%2Fw2ku6qrIBZIc4ujPFgXoCrqADU9ThBfuZzhT0cVQOk86gAo71BOBxu7xkxcUlR1L0uil8V3PAfRNjGU6zrVIXzB4rtdCqHuQZh0Wq6ksmbckDHcmGfr6EIA0t00RpfZihRJHyb4LlgJskVyCD1yrmvnGCf5lzbO0Eq%2Fnf5cIGibJ%2Fhoo0noCN%2FgrT3zKwvBifGPqsm2qaIcpTDg5XUpkuSP8eJ3aNXXG6HhWu0n8dT2%2BnkiVTNGfJPNGx7Hx5wsW2KZ2EyvqLOU7exc%2FfwTl5HTyEu5Z6Of%2BiOIg52d66ViqlWQpcv2ep917bAAPC762rBGxbOC8%2BT%2F2EvVW%2BOCEIdJGtDgdLvE1zmSMYq1VzeDZzMOz6ExvIw14%2F2CdNtyx%2BOEhd9RbhClyDOKZvN5Mqr1Fio1Pm3tUIiRnKf%2FvsV%2B%2BKLbhRJy3dMKWlVNu86KupKO72Ry3N36syHyJevo2HkZRQxzeEvpYlNf6E3VAbXWzaFQoM%2Fu3naEW2wImNPi6o2QMOXNm8sGOqUBTR%2BqouHRAw0AQOd2pr%2FkqQLfuUPm%2FHHX2t8X%2BMOs%2FI9gw5JARQgadWqOg5oQLwxqtA4ayPzY9vs9mNTk3Mpuxp9cNFXDZgKPZSoDeO5yBz67m%2BE9%2BDCnD14vnzuWh7gEVYJxtKz0EDUas1KdZy8L9SSBaSHAvzsRzrDJaRgYwSg0abxuQVhIJBIgM7nB7Tqds168TbyuYYuoJ1vrpIAUzwqVtWuK&X-Amz-Signature=2798fca06473e74e452def7ff7c412121d6b4ef2d0b8ce24c5aca36b7f14213c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVDZWWV%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF59PNwfSFuSbI7wub3PjoGhKcaWRgeNLTcQYCMAPbLWAiEAvi0EWn2LUpQCnoPMHRDEmvV1ldnrA%2ByQTplKPfB%2Fz2Qq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIXOh8LYhvok5DDoJCrcA8QQxN%2BNnIyR%2FpN6r1Y4X371dZzYy12wCFgVHmqB9wZs3nxpPn3OBQpqJCvA9RT0OOm%2F%2Fn65gBPv73IXX98vnS4erdamcIoohwcwSe85nEjglSmZote3s0ts%2Fw2ku6qrIBZIc4ujPFgXoCrqADU9ThBfuZzhT0cVQOk86gAo71BOBxu7xkxcUlR1L0uil8V3PAfRNjGU6zrVIXzB4rtdCqHuQZh0Wq6ksmbckDHcmGfr6EIA0t00RpfZihRJHyb4LlgJskVyCD1yrmvnGCf5lzbO0Eq%2Fnf5cIGibJ%2Fhoo0noCN%2FgrT3zKwvBifGPqsm2qaIcpTDg5XUpkuSP8eJ3aNXXG6HhWu0n8dT2%2BnkiVTNGfJPNGx7Hx5wsW2KZ2EyvqLOU7exc%2FfwTl5HTyEu5Z6Of%2BiOIg52d66ViqlWQpcv2ep917bAAPC762rBGxbOC8%2BT%2F2EvVW%2BOCEIdJGtDgdLvE1zmSMYq1VzeDZzMOz6ExvIw14%2F2CdNtyx%2BOEhd9RbhClyDOKZvN5Mqr1Fio1Pm3tUIiRnKf%2FvsV%2B%2BKLbhRJy3dMKWlVNu86KupKO72Ry3N36syHyJevo2HkZRQxzeEvpYlNf6E3VAbXWzaFQoM%2Fu3naEW2wImNPi6o2QMOXNm8sGOqUBTR%2BqouHRAw0AQOd2pr%2FkqQLfuUPm%2FHHX2t8X%2BMOs%2FI9gw5JARQgadWqOg5oQLwxqtA4ayPzY9vs9mNTk3Mpuxp9cNFXDZgKPZSoDeO5yBz67m%2BE9%2BDCnD14vnzuWh7gEVYJxtKz0EDUas1KdZy8L9SSBaSHAvzsRzrDJaRgYwSg0abxuQVhIJBIgM7nB7Tqds168TbyuYYuoJ1vrpIAUzwqVtWuK&X-Amz-Signature=9ca74ee301b27eda20cee4593bc11ecf29c8b6aebefd39edaafab169b64b36ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
