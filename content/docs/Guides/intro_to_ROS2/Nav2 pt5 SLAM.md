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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKICH5GP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDcm1fbMLYRoXY1oKOhHAn0jGQ%2FMxXPbs4yTIhbD%2BBP4gIhAMvmpBulAGfCBglNRcnorMW5EE1TEV%2BlgxhQcphjx9I5Kv8DCFgQABoMNjM3NDIzMTgzODA1IgxFNRScSyf6mA2LASoq3AOiXq2vzm0uNNEiB%2FyhsJDe6hXKeL3mU8yqfytebKA6j7%2FCP4rFUXVJO4QL%2BOkDskfYI1dtQWIVL7n%2FIQm3vdyyqSfisyLWL5qhMzHCFpYB06USbHFEx%2BSC3gSSjbw9uCMxXsQo2QRt1R0Y%2B4akQxX0ZcFSvJLh%2FrwbZxfHsvfgbhi%2F8jP%2FX2H0wyt5YpQHrMfoFD1sd1F4MMx60Nde3oCaGVPWwt0mfeEW2xp7Jlsp6E9tIhw3KowS%2F2B26vFGGtHtY1MfW5IyDxDm%2BswkbGVLrJtUTXw7ba6z6mJQfeds2dztTtrbaY1jXq0uaY9L74QcLApUW8%2FZ4%2FkibGDUgyIU2LJqdRjRid4SY1R4YtWt9FWY0pCqKWJss8kQWF9LBzz4d3MWGtl%2F%2BwfPgaL%2BJ8h0uiGQ689dF80WEv3DR4nbJuKM2UFSjZoUQatx%2FpAs8HUkuSoJvnaJCrsiM0oMROzxPnsk%2BtfUFt6UR5wr01DQqFtQU4TCjNQhjAo71KkFutLnXcyXRV9HIiOteOJVQlAOO3zc7R6LghRaOGtav7Aq5EvF%2F7ABrkZkfphH1%2FyygYD1rufG8E7PY7OabgNHStOqs7T44rnimRL2p%2FBJPrPZ86A1PxAIH1%2F3tSqF%2FTDj2sbEBjqkAcC24BvjvIZtsTOf%2By%2FKTLA1It1ksUh1nIgWd6dhXEZOURDLh3uuHoOHaKbVy%2BbpWQsyyCnrrx6xJ4PTwiNNAM3nZ2Fe8Jiq%2Fl4Mc2MOmaU1GuJFH0bIdyYnMnOiXsvAS2KVENdVk3O0eMtvkgQgJV272NRWCWtvkKSAILJB3etTpsQPYwCVBN4m7MrJZWywNOn1xaMMFich6zW0GV8kYh5uYu2J&X-Amz-Signature=da199b1b0e8f26f2020053e6ed1b5111f2cf60dadb9126b37024151f83a26222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKICH5GP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDcm1fbMLYRoXY1oKOhHAn0jGQ%2FMxXPbs4yTIhbD%2BBP4gIhAMvmpBulAGfCBglNRcnorMW5EE1TEV%2BlgxhQcphjx9I5Kv8DCFgQABoMNjM3NDIzMTgzODA1IgxFNRScSyf6mA2LASoq3AOiXq2vzm0uNNEiB%2FyhsJDe6hXKeL3mU8yqfytebKA6j7%2FCP4rFUXVJO4QL%2BOkDskfYI1dtQWIVL7n%2FIQm3vdyyqSfisyLWL5qhMzHCFpYB06USbHFEx%2BSC3gSSjbw9uCMxXsQo2QRt1R0Y%2B4akQxX0ZcFSvJLh%2FrwbZxfHsvfgbhi%2F8jP%2FX2H0wyt5YpQHrMfoFD1sd1F4MMx60Nde3oCaGVPWwt0mfeEW2xp7Jlsp6E9tIhw3KowS%2F2B26vFGGtHtY1MfW5IyDxDm%2BswkbGVLrJtUTXw7ba6z6mJQfeds2dztTtrbaY1jXq0uaY9L74QcLApUW8%2FZ4%2FkibGDUgyIU2LJqdRjRid4SY1R4YtWt9FWY0pCqKWJss8kQWF9LBzz4d3MWGtl%2F%2BwfPgaL%2BJ8h0uiGQ689dF80WEv3DR4nbJuKM2UFSjZoUQatx%2FpAs8HUkuSoJvnaJCrsiM0oMROzxPnsk%2BtfUFt6UR5wr01DQqFtQU4TCjNQhjAo71KkFutLnXcyXRV9HIiOteOJVQlAOO3zc7R6LghRaOGtav7Aq5EvF%2F7ABrkZkfphH1%2FyygYD1rufG8E7PY7OabgNHStOqs7T44rnimRL2p%2FBJPrPZ86A1PxAIH1%2F3tSqF%2FTDj2sbEBjqkAcC24BvjvIZtsTOf%2By%2FKTLA1It1ksUh1nIgWd6dhXEZOURDLh3uuHoOHaKbVy%2BbpWQsyyCnrrx6xJ4PTwiNNAM3nZ2Fe8Jiq%2Fl4Mc2MOmaU1GuJFH0bIdyYnMnOiXsvAS2KVENdVk3O0eMtvkgQgJV272NRWCWtvkKSAILJB3etTpsQPYwCVBN4m7MrJZWywNOn1xaMMFich6zW0GV8kYh5uYu2J&X-Amz-Signature=25402fc0edd7218eda0fdceb97d6d0a1adbad65fae0160d2fc5453ba6091aef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKICH5GP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDcm1fbMLYRoXY1oKOhHAn0jGQ%2FMxXPbs4yTIhbD%2BBP4gIhAMvmpBulAGfCBglNRcnorMW5EE1TEV%2BlgxhQcphjx9I5Kv8DCFgQABoMNjM3NDIzMTgzODA1IgxFNRScSyf6mA2LASoq3AOiXq2vzm0uNNEiB%2FyhsJDe6hXKeL3mU8yqfytebKA6j7%2FCP4rFUXVJO4QL%2BOkDskfYI1dtQWIVL7n%2FIQm3vdyyqSfisyLWL5qhMzHCFpYB06USbHFEx%2BSC3gSSjbw9uCMxXsQo2QRt1R0Y%2B4akQxX0ZcFSvJLh%2FrwbZxfHsvfgbhi%2F8jP%2FX2H0wyt5YpQHrMfoFD1sd1F4MMx60Nde3oCaGVPWwt0mfeEW2xp7Jlsp6E9tIhw3KowS%2F2B26vFGGtHtY1MfW5IyDxDm%2BswkbGVLrJtUTXw7ba6z6mJQfeds2dztTtrbaY1jXq0uaY9L74QcLApUW8%2FZ4%2FkibGDUgyIU2LJqdRjRid4SY1R4YtWt9FWY0pCqKWJss8kQWF9LBzz4d3MWGtl%2F%2BwfPgaL%2BJ8h0uiGQ689dF80WEv3DR4nbJuKM2UFSjZoUQatx%2FpAs8HUkuSoJvnaJCrsiM0oMROzxPnsk%2BtfUFt6UR5wr01DQqFtQU4TCjNQhjAo71KkFutLnXcyXRV9HIiOteOJVQlAOO3zc7R6LghRaOGtav7Aq5EvF%2F7ABrkZkfphH1%2FyygYD1rufG8E7PY7OabgNHStOqs7T44rnimRL2p%2FBJPrPZ86A1PxAIH1%2F3tSqF%2FTDj2sbEBjqkAcC24BvjvIZtsTOf%2By%2FKTLA1It1ksUh1nIgWd6dhXEZOURDLh3uuHoOHaKbVy%2BbpWQsyyCnrrx6xJ4PTwiNNAM3nZ2Fe8Jiq%2Fl4Mc2MOmaU1GuJFH0bIdyYnMnOiXsvAS2KVENdVk3O0eMtvkgQgJV272NRWCWtvkKSAILJB3etTpsQPYwCVBN4m7MrJZWywNOn1xaMMFich6zW0GV8kYh5uYu2J&X-Amz-Signature=fb4aa79a432a5f8cd20a1d53643e695c887015851799ef6b48600cb4e27382c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKICH5GP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDcm1fbMLYRoXY1oKOhHAn0jGQ%2FMxXPbs4yTIhbD%2BBP4gIhAMvmpBulAGfCBglNRcnorMW5EE1TEV%2BlgxhQcphjx9I5Kv8DCFgQABoMNjM3NDIzMTgzODA1IgxFNRScSyf6mA2LASoq3AOiXq2vzm0uNNEiB%2FyhsJDe6hXKeL3mU8yqfytebKA6j7%2FCP4rFUXVJO4QL%2BOkDskfYI1dtQWIVL7n%2FIQm3vdyyqSfisyLWL5qhMzHCFpYB06USbHFEx%2BSC3gSSjbw9uCMxXsQo2QRt1R0Y%2B4akQxX0ZcFSvJLh%2FrwbZxfHsvfgbhi%2F8jP%2FX2H0wyt5YpQHrMfoFD1sd1F4MMx60Nde3oCaGVPWwt0mfeEW2xp7Jlsp6E9tIhw3KowS%2F2B26vFGGtHtY1MfW5IyDxDm%2BswkbGVLrJtUTXw7ba6z6mJQfeds2dztTtrbaY1jXq0uaY9L74QcLApUW8%2FZ4%2FkibGDUgyIU2LJqdRjRid4SY1R4YtWt9FWY0pCqKWJss8kQWF9LBzz4d3MWGtl%2F%2BwfPgaL%2BJ8h0uiGQ689dF80WEv3DR4nbJuKM2UFSjZoUQatx%2FpAs8HUkuSoJvnaJCrsiM0oMROzxPnsk%2BtfUFt6UR5wr01DQqFtQU4TCjNQhjAo71KkFutLnXcyXRV9HIiOteOJVQlAOO3zc7R6LghRaOGtav7Aq5EvF%2F7ABrkZkfphH1%2FyygYD1rufG8E7PY7OabgNHStOqs7T44rnimRL2p%2FBJPrPZ86A1PxAIH1%2F3tSqF%2FTDj2sbEBjqkAcC24BvjvIZtsTOf%2By%2FKTLA1It1ksUh1nIgWd6dhXEZOURDLh3uuHoOHaKbVy%2BbpWQsyyCnrrx6xJ4PTwiNNAM3nZ2Fe8Jiq%2Fl4Mc2MOmaU1GuJFH0bIdyYnMnOiXsvAS2KVENdVk3O0eMtvkgQgJV272NRWCWtvkKSAILJB3etTpsQPYwCVBN4m7MrJZWywNOn1xaMMFich6zW0GV8kYh5uYu2J&X-Amz-Signature=78f585abce51969fd0f4813d8cab25d1fc98a4817a9debfd0b634cfebde8e7d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKICH5GP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDcm1fbMLYRoXY1oKOhHAn0jGQ%2FMxXPbs4yTIhbD%2BBP4gIhAMvmpBulAGfCBglNRcnorMW5EE1TEV%2BlgxhQcphjx9I5Kv8DCFgQABoMNjM3NDIzMTgzODA1IgxFNRScSyf6mA2LASoq3AOiXq2vzm0uNNEiB%2FyhsJDe6hXKeL3mU8yqfytebKA6j7%2FCP4rFUXVJO4QL%2BOkDskfYI1dtQWIVL7n%2FIQm3vdyyqSfisyLWL5qhMzHCFpYB06USbHFEx%2BSC3gSSjbw9uCMxXsQo2QRt1R0Y%2B4akQxX0ZcFSvJLh%2FrwbZxfHsvfgbhi%2F8jP%2FX2H0wyt5YpQHrMfoFD1sd1F4MMx60Nde3oCaGVPWwt0mfeEW2xp7Jlsp6E9tIhw3KowS%2F2B26vFGGtHtY1MfW5IyDxDm%2BswkbGVLrJtUTXw7ba6z6mJQfeds2dztTtrbaY1jXq0uaY9L74QcLApUW8%2FZ4%2FkibGDUgyIU2LJqdRjRid4SY1R4YtWt9FWY0pCqKWJss8kQWF9LBzz4d3MWGtl%2F%2BwfPgaL%2BJ8h0uiGQ689dF80WEv3DR4nbJuKM2UFSjZoUQatx%2FpAs8HUkuSoJvnaJCrsiM0oMROzxPnsk%2BtfUFt6UR5wr01DQqFtQU4TCjNQhjAo71KkFutLnXcyXRV9HIiOteOJVQlAOO3zc7R6LghRaOGtav7Aq5EvF%2F7ABrkZkfphH1%2FyygYD1rufG8E7PY7OabgNHStOqs7T44rnimRL2p%2FBJPrPZ86A1PxAIH1%2F3tSqF%2FTDj2sbEBjqkAcC24BvjvIZtsTOf%2By%2FKTLA1It1ksUh1nIgWd6dhXEZOURDLh3uuHoOHaKbVy%2BbpWQsyyCnrrx6xJ4PTwiNNAM3nZ2Fe8Jiq%2Fl4Mc2MOmaU1GuJFH0bIdyYnMnOiXsvAS2KVENdVk3O0eMtvkgQgJV272NRWCWtvkKSAILJB3etTpsQPYwCVBN4m7MrJZWywNOn1xaMMFich6zW0GV8kYh5uYu2J&X-Amz-Signature=eec35990c135c5b8d351e2049f6e8b6eec06dcdc073ef457f03c2f8337d0d332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKICH5GP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDcm1fbMLYRoXY1oKOhHAn0jGQ%2FMxXPbs4yTIhbD%2BBP4gIhAMvmpBulAGfCBglNRcnorMW5EE1TEV%2BlgxhQcphjx9I5Kv8DCFgQABoMNjM3NDIzMTgzODA1IgxFNRScSyf6mA2LASoq3AOiXq2vzm0uNNEiB%2FyhsJDe6hXKeL3mU8yqfytebKA6j7%2FCP4rFUXVJO4QL%2BOkDskfYI1dtQWIVL7n%2FIQm3vdyyqSfisyLWL5qhMzHCFpYB06USbHFEx%2BSC3gSSjbw9uCMxXsQo2QRt1R0Y%2B4akQxX0ZcFSvJLh%2FrwbZxfHsvfgbhi%2F8jP%2FX2H0wyt5YpQHrMfoFD1sd1F4MMx60Nde3oCaGVPWwt0mfeEW2xp7Jlsp6E9tIhw3KowS%2F2B26vFGGtHtY1MfW5IyDxDm%2BswkbGVLrJtUTXw7ba6z6mJQfeds2dztTtrbaY1jXq0uaY9L74QcLApUW8%2FZ4%2FkibGDUgyIU2LJqdRjRid4SY1R4YtWt9FWY0pCqKWJss8kQWF9LBzz4d3MWGtl%2F%2BwfPgaL%2BJ8h0uiGQ689dF80WEv3DR4nbJuKM2UFSjZoUQatx%2FpAs8HUkuSoJvnaJCrsiM0oMROzxPnsk%2BtfUFt6UR5wr01DQqFtQU4TCjNQhjAo71KkFutLnXcyXRV9HIiOteOJVQlAOO3zc7R6LghRaOGtav7Aq5EvF%2F7ABrkZkfphH1%2FyygYD1rufG8E7PY7OabgNHStOqs7T44rnimRL2p%2FBJPrPZ86A1PxAIH1%2F3tSqF%2FTDj2sbEBjqkAcC24BvjvIZtsTOf%2By%2FKTLA1It1ksUh1nIgWd6dhXEZOURDLh3uuHoOHaKbVy%2BbpWQsyyCnrrx6xJ4PTwiNNAM3nZ2Fe8Jiq%2Fl4Mc2MOmaU1GuJFH0bIdyYnMnOiXsvAS2KVENdVk3O0eMtvkgQgJV272NRWCWtvkKSAILJB3etTpsQPYwCVBN4m7MrJZWywNOn1xaMMFich6zW0GV8kYh5uYu2J&X-Amz-Signature=4459d58a4e8e583629289cdf75474bba613c3d28c2f462cfac56157ed43f0f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKICH5GP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDcm1fbMLYRoXY1oKOhHAn0jGQ%2FMxXPbs4yTIhbD%2BBP4gIhAMvmpBulAGfCBglNRcnorMW5EE1TEV%2BlgxhQcphjx9I5Kv8DCFgQABoMNjM3NDIzMTgzODA1IgxFNRScSyf6mA2LASoq3AOiXq2vzm0uNNEiB%2FyhsJDe6hXKeL3mU8yqfytebKA6j7%2FCP4rFUXVJO4QL%2BOkDskfYI1dtQWIVL7n%2FIQm3vdyyqSfisyLWL5qhMzHCFpYB06USbHFEx%2BSC3gSSjbw9uCMxXsQo2QRt1R0Y%2B4akQxX0ZcFSvJLh%2FrwbZxfHsvfgbhi%2F8jP%2FX2H0wyt5YpQHrMfoFD1sd1F4MMx60Nde3oCaGVPWwt0mfeEW2xp7Jlsp6E9tIhw3KowS%2F2B26vFGGtHtY1MfW5IyDxDm%2BswkbGVLrJtUTXw7ba6z6mJQfeds2dztTtrbaY1jXq0uaY9L74QcLApUW8%2FZ4%2FkibGDUgyIU2LJqdRjRid4SY1R4YtWt9FWY0pCqKWJss8kQWF9LBzz4d3MWGtl%2F%2BwfPgaL%2BJ8h0uiGQ689dF80WEv3DR4nbJuKM2UFSjZoUQatx%2FpAs8HUkuSoJvnaJCrsiM0oMROzxPnsk%2BtfUFt6UR5wr01DQqFtQU4TCjNQhjAo71KkFutLnXcyXRV9HIiOteOJVQlAOO3zc7R6LghRaOGtav7Aq5EvF%2F7ABrkZkfphH1%2FyygYD1rufG8E7PY7OabgNHStOqs7T44rnimRL2p%2FBJPrPZ86A1PxAIH1%2F3tSqF%2FTDj2sbEBjqkAcC24BvjvIZtsTOf%2By%2FKTLA1It1ksUh1nIgWd6dhXEZOURDLh3uuHoOHaKbVy%2BbpWQsyyCnrrx6xJ4PTwiNNAM3nZ2Fe8Jiq%2Fl4Mc2MOmaU1GuJFH0bIdyYnMnOiXsvAS2KVENdVk3O0eMtvkgQgJV272NRWCWtvkKSAILJB3etTpsQPYwCVBN4m7MrJZWywNOn1xaMMFich6zW0GV8kYh5uYu2J&X-Amz-Signature=fd7aefb8c6663f1ae27ff631122436b30ea121bd4c1b9d17305d12af3c0b89a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKICH5GP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDcm1fbMLYRoXY1oKOhHAn0jGQ%2FMxXPbs4yTIhbD%2BBP4gIhAMvmpBulAGfCBglNRcnorMW5EE1TEV%2BlgxhQcphjx9I5Kv8DCFgQABoMNjM3NDIzMTgzODA1IgxFNRScSyf6mA2LASoq3AOiXq2vzm0uNNEiB%2FyhsJDe6hXKeL3mU8yqfytebKA6j7%2FCP4rFUXVJO4QL%2BOkDskfYI1dtQWIVL7n%2FIQm3vdyyqSfisyLWL5qhMzHCFpYB06USbHFEx%2BSC3gSSjbw9uCMxXsQo2QRt1R0Y%2B4akQxX0ZcFSvJLh%2FrwbZxfHsvfgbhi%2F8jP%2FX2H0wyt5YpQHrMfoFD1sd1F4MMx60Nde3oCaGVPWwt0mfeEW2xp7Jlsp6E9tIhw3KowS%2F2B26vFGGtHtY1MfW5IyDxDm%2BswkbGVLrJtUTXw7ba6z6mJQfeds2dztTtrbaY1jXq0uaY9L74QcLApUW8%2FZ4%2FkibGDUgyIU2LJqdRjRid4SY1R4YtWt9FWY0pCqKWJss8kQWF9LBzz4d3MWGtl%2F%2BwfPgaL%2BJ8h0uiGQ689dF80WEv3DR4nbJuKM2UFSjZoUQatx%2FpAs8HUkuSoJvnaJCrsiM0oMROzxPnsk%2BtfUFt6UR5wr01DQqFtQU4TCjNQhjAo71KkFutLnXcyXRV9HIiOteOJVQlAOO3zc7R6LghRaOGtav7Aq5EvF%2F7ABrkZkfphH1%2FyygYD1rufG8E7PY7OabgNHStOqs7T44rnimRL2p%2FBJPrPZ86A1PxAIH1%2F3tSqF%2FTDj2sbEBjqkAcC24BvjvIZtsTOf%2By%2FKTLA1It1ksUh1nIgWd6dhXEZOURDLh3uuHoOHaKbVy%2BbpWQsyyCnrrx6xJ4PTwiNNAM3nZ2Fe8Jiq%2Fl4Mc2MOmaU1GuJFH0bIdyYnMnOiXsvAS2KVENdVk3O0eMtvkgQgJV272NRWCWtvkKSAILJB3etTpsQPYwCVBN4m7MrJZWywNOn1xaMMFich6zW0GV8kYh5uYu2J&X-Amz-Signature=f6c0186a31c76249b6c2e62896f6d9e87206248682806ddd3a6566443f355b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKICH5GP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDcm1fbMLYRoXY1oKOhHAn0jGQ%2FMxXPbs4yTIhbD%2BBP4gIhAMvmpBulAGfCBglNRcnorMW5EE1TEV%2BlgxhQcphjx9I5Kv8DCFgQABoMNjM3NDIzMTgzODA1IgxFNRScSyf6mA2LASoq3AOiXq2vzm0uNNEiB%2FyhsJDe6hXKeL3mU8yqfytebKA6j7%2FCP4rFUXVJO4QL%2BOkDskfYI1dtQWIVL7n%2FIQm3vdyyqSfisyLWL5qhMzHCFpYB06USbHFEx%2BSC3gSSjbw9uCMxXsQo2QRt1R0Y%2B4akQxX0ZcFSvJLh%2FrwbZxfHsvfgbhi%2F8jP%2FX2H0wyt5YpQHrMfoFD1sd1F4MMx60Nde3oCaGVPWwt0mfeEW2xp7Jlsp6E9tIhw3KowS%2F2B26vFGGtHtY1MfW5IyDxDm%2BswkbGVLrJtUTXw7ba6z6mJQfeds2dztTtrbaY1jXq0uaY9L74QcLApUW8%2FZ4%2FkibGDUgyIU2LJqdRjRid4SY1R4YtWt9FWY0pCqKWJss8kQWF9LBzz4d3MWGtl%2F%2BwfPgaL%2BJ8h0uiGQ689dF80WEv3DR4nbJuKM2UFSjZoUQatx%2FpAs8HUkuSoJvnaJCrsiM0oMROzxPnsk%2BtfUFt6UR5wr01DQqFtQU4TCjNQhjAo71KkFutLnXcyXRV9HIiOteOJVQlAOO3zc7R6LghRaOGtav7Aq5EvF%2F7ABrkZkfphH1%2FyygYD1rufG8E7PY7OabgNHStOqs7T44rnimRL2p%2FBJPrPZ86A1PxAIH1%2F3tSqF%2FTDj2sbEBjqkAcC24BvjvIZtsTOf%2By%2FKTLA1It1ksUh1nIgWd6dhXEZOURDLh3uuHoOHaKbVy%2BbpWQsyyCnrrx6xJ4PTwiNNAM3nZ2Fe8Jiq%2Fl4Mc2MOmaU1GuJFH0bIdyYnMnOiXsvAS2KVENdVk3O0eMtvkgQgJV272NRWCWtvkKSAILJB3etTpsQPYwCVBN4m7MrJZWywNOn1xaMMFich6zW0GV8kYh5uYu2J&X-Amz-Signature=05bb7864f55f7140ed495f662c59ba2db9e6210901ead9d99fd9a65c62f2421c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKICH5GP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDcm1fbMLYRoXY1oKOhHAn0jGQ%2FMxXPbs4yTIhbD%2BBP4gIhAMvmpBulAGfCBglNRcnorMW5EE1TEV%2BlgxhQcphjx9I5Kv8DCFgQABoMNjM3NDIzMTgzODA1IgxFNRScSyf6mA2LASoq3AOiXq2vzm0uNNEiB%2FyhsJDe6hXKeL3mU8yqfytebKA6j7%2FCP4rFUXVJO4QL%2BOkDskfYI1dtQWIVL7n%2FIQm3vdyyqSfisyLWL5qhMzHCFpYB06USbHFEx%2BSC3gSSjbw9uCMxXsQo2QRt1R0Y%2B4akQxX0ZcFSvJLh%2FrwbZxfHsvfgbhi%2F8jP%2FX2H0wyt5YpQHrMfoFD1sd1F4MMx60Nde3oCaGVPWwt0mfeEW2xp7Jlsp6E9tIhw3KowS%2F2B26vFGGtHtY1MfW5IyDxDm%2BswkbGVLrJtUTXw7ba6z6mJQfeds2dztTtrbaY1jXq0uaY9L74QcLApUW8%2FZ4%2FkibGDUgyIU2LJqdRjRid4SY1R4YtWt9FWY0pCqKWJss8kQWF9LBzz4d3MWGtl%2F%2BwfPgaL%2BJ8h0uiGQ689dF80WEv3DR4nbJuKM2UFSjZoUQatx%2FpAs8HUkuSoJvnaJCrsiM0oMROzxPnsk%2BtfUFt6UR5wr01DQqFtQU4TCjNQhjAo71KkFutLnXcyXRV9HIiOteOJVQlAOO3zc7R6LghRaOGtav7Aq5EvF%2F7ABrkZkfphH1%2FyygYD1rufG8E7PY7OabgNHStOqs7T44rnimRL2p%2FBJPrPZ86A1PxAIH1%2F3tSqF%2FTDj2sbEBjqkAcC24BvjvIZtsTOf%2By%2FKTLA1It1ksUh1nIgWd6dhXEZOURDLh3uuHoOHaKbVy%2BbpWQsyyCnrrx6xJ4PTwiNNAM3nZ2Fe8Jiq%2Fl4Mc2MOmaU1GuJFH0bIdyYnMnOiXsvAS2KVENdVk3O0eMtvkgQgJV272NRWCWtvkKSAILJB3etTpsQPYwCVBN4m7MrJZWywNOn1xaMMFich6zW0GV8kYh5uYu2J&X-Amz-Signature=b3e1b71c8b3fd96e1bb9b2666824c8efcf129e8c06e8d15edf57a2e1c6cee0c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKICH5GP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDcm1fbMLYRoXY1oKOhHAn0jGQ%2FMxXPbs4yTIhbD%2BBP4gIhAMvmpBulAGfCBglNRcnorMW5EE1TEV%2BlgxhQcphjx9I5Kv8DCFgQABoMNjM3NDIzMTgzODA1IgxFNRScSyf6mA2LASoq3AOiXq2vzm0uNNEiB%2FyhsJDe6hXKeL3mU8yqfytebKA6j7%2FCP4rFUXVJO4QL%2BOkDskfYI1dtQWIVL7n%2FIQm3vdyyqSfisyLWL5qhMzHCFpYB06USbHFEx%2BSC3gSSjbw9uCMxXsQo2QRt1R0Y%2B4akQxX0ZcFSvJLh%2FrwbZxfHsvfgbhi%2F8jP%2FX2H0wyt5YpQHrMfoFD1sd1F4MMx60Nde3oCaGVPWwt0mfeEW2xp7Jlsp6E9tIhw3KowS%2F2B26vFGGtHtY1MfW5IyDxDm%2BswkbGVLrJtUTXw7ba6z6mJQfeds2dztTtrbaY1jXq0uaY9L74QcLApUW8%2FZ4%2FkibGDUgyIU2LJqdRjRid4SY1R4YtWt9FWY0pCqKWJss8kQWF9LBzz4d3MWGtl%2F%2BwfPgaL%2BJ8h0uiGQ689dF80WEv3DR4nbJuKM2UFSjZoUQatx%2FpAs8HUkuSoJvnaJCrsiM0oMROzxPnsk%2BtfUFt6UR5wr01DQqFtQU4TCjNQhjAo71KkFutLnXcyXRV9HIiOteOJVQlAOO3zc7R6LghRaOGtav7Aq5EvF%2F7ABrkZkfphH1%2FyygYD1rufG8E7PY7OabgNHStOqs7T44rnimRL2p%2FBJPrPZ86A1PxAIH1%2F3tSqF%2FTDj2sbEBjqkAcC24BvjvIZtsTOf%2By%2FKTLA1It1ksUh1nIgWd6dhXEZOURDLh3uuHoOHaKbVy%2BbpWQsyyCnrrx6xJ4PTwiNNAM3nZ2Fe8Jiq%2Fl4Mc2MOmaU1GuJFH0bIdyYnMnOiXsvAS2KVENdVk3O0eMtvkgQgJV272NRWCWtvkKSAILJB3etTpsQPYwCVBN4m7MrJZWywNOn1xaMMFich6zW0GV8kYh5uYu2J&X-Amz-Signature=f6e21073505ed449348228fc3564fc15ce22d61119dc1b0f01764ebfde3efbc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKICH5GP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDcm1fbMLYRoXY1oKOhHAn0jGQ%2FMxXPbs4yTIhbD%2BBP4gIhAMvmpBulAGfCBglNRcnorMW5EE1TEV%2BlgxhQcphjx9I5Kv8DCFgQABoMNjM3NDIzMTgzODA1IgxFNRScSyf6mA2LASoq3AOiXq2vzm0uNNEiB%2FyhsJDe6hXKeL3mU8yqfytebKA6j7%2FCP4rFUXVJO4QL%2BOkDskfYI1dtQWIVL7n%2FIQm3vdyyqSfisyLWL5qhMzHCFpYB06USbHFEx%2BSC3gSSjbw9uCMxXsQo2QRt1R0Y%2B4akQxX0ZcFSvJLh%2FrwbZxfHsvfgbhi%2F8jP%2FX2H0wyt5YpQHrMfoFD1sd1F4MMx60Nde3oCaGVPWwt0mfeEW2xp7Jlsp6E9tIhw3KowS%2F2B26vFGGtHtY1MfW5IyDxDm%2BswkbGVLrJtUTXw7ba6z6mJQfeds2dztTtrbaY1jXq0uaY9L74QcLApUW8%2FZ4%2FkibGDUgyIU2LJqdRjRid4SY1R4YtWt9FWY0pCqKWJss8kQWF9LBzz4d3MWGtl%2F%2BwfPgaL%2BJ8h0uiGQ689dF80WEv3DR4nbJuKM2UFSjZoUQatx%2FpAs8HUkuSoJvnaJCrsiM0oMROzxPnsk%2BtfUFt6UR5wr01DQqFtQU4TCjNQhjAo71KkFutLnXcyXRV9HIiOteOJVQlAOO3zc7R6LghRaOGtav7Aq5EvF%2F7ABrkZkfphH1%2FyygYD1rufG8E7PY7OabgNHStOqs7T44rnimRL2p%2FBJPrPZ86A1PxAIH1%2F3tSqF%2FTDj2sbEBjqkAcC24BvjvIZtsTOf%2By%2FKTLA1It1ksUh1nIgWd6dhXEZOURDLh3uuHoOHaKbVy%2BbpWQsyyCnrrx6xJ4PTwiNNAM3nZ2Fe8Jiq%2Fl4Mc2MOmaU1GuJFH0bIdyYnMnOiXsvAS2KVENdVk3O0eMtvkgQgJV272NRWCWtvkKSAILJB3etTpsQPYwCVBN4m7MrJZWywNOn1xaMMFich6zW0GV8kYh5uYu2J&X-Amz-Signature=7d1a5fe5aaed5e4ea1f235260c9fdcc32969d3e59357bdaa9d5610a9f68a6216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKICH5GP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDcm1fbMLYRoXY1oKOhHAn0jGQ%2FMxXPbs4yTIhbD%2BBP4gIhAMvmpBulAGfCBglNRcnorMW5EE1TEV%2BlgxhQcphjx9I5Kv8DCFgQABoMNjM3NDIzMTgzODA1IgxFNRScSyf6mA2LASoq3AOiXq2vzm0uNNEiB%2FyhsJDe6hXKeL3mU8yqfytebKA6j7%2FCP4rFUXVJO4QL%2BOkDskfYI1dtQWIVL7n%2FIQm3vdyyqSfisyLWL5qhMzHCFpYB06USbHFEx%2BSC3gSSjbw9uCMxXsQo2QRt1R0Y%2B4akQxX0ZcFSvJLh%2FrwbZxfHsvfgbhi%2F8jP%2FX2H0wyt5YpQHrMfoFD1sd1F4MMx60Nde3oCaGVPWwt0mfeEW2xp7Jlsp6E9tIhw3KowS%2F2B26vFGGtHtY1MfW5IyDxDm%2BswkbGVLrJtUTXw7ba6z6mJQfeds2dztTtrbaY1jXq0uaY9L74QcLApUW8%2FZ4%2FkibGDUgyIU2LJqdRjRid4SY1R4YtWt9FWY0pCqKWJss8kQWF9LBzz4d3MWGtl%2F%2BwfPgaL%2BJ8h0uiGQ689dF80WEv3DR4nbJuKM2UFSjZoUQatx%2FpAs8HUkuSoJvnaJCrsiM0oMROzxPnsk%2BtfUFt6UR5wr01DQqFtQU4TCjNQhjAo71KkFutLnXcyXRV9HIiOteOJVQlAOO3zc7R6LghRaOGtav7Aq5EvF%2F7ABrkZkfphH1%2FyygYD1rufG8E7PY7OabgNHStOqs7T44rnimRL2p%2FBJPrPZ86A1PxAIH1%2F3tSqF%2FTDj2sbEBjqkAcC24BvjvIZtsTOf%2By%2FKTLA1It1ksUh1nIgWd6dhXEZOURDLh3uuHoOHaKbVy%2BbpWQsyyCnrrx6xJ4PTwiNNAM3nZ2Fe8Jiq%2Fl4Mc2MOmaU1GuJFH0bIdyYnMnOiXsvAS2KVENdVk3O0eMtvkgQgJV272NRWCWtvkKSAILJB3etTpsQPYwCVBN4m7MrJZWywNOn1xaMMFich6zW0GV8kYh5uYu2J&X-Amz-Signature=3273413256760b5d93e75d5540aea0e6e51b253e86e6a931c78e9d63e81cb2a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKICH5GP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDcm1fbMLYRoXY1oKOhHAn0jGQ%2FMxXPbs4yTIhbD%2BBP4gIhAMvmpBulAGfCBglNRcnorMW5EE1TEV%2BlgxhQcphjx9I5Kv8DCFgQABoMNjM3NDIzMTgzODA1IgxFNRScSyf6mA2LASoq3AOiXq2vzm0uNNEiB%2FyhsJDe6hXKeL3mU8yqfytebKA6j7%2FCP4rFUXVJO4QL%2BOkDskfYI1dtQWIVL7n%2FIQm3vdyyqSfisyLWL5qhMzHCFpYB06USbHFEx%2BSC3gSSjbw9uCMxXsQo2QRt1R0Y%2B4akQxX0ZcFSvJLh%2FrwbZxfHsvfgbhi%2F8jP%2FX2H0wyt5YpQHrMfoFD1sd1F4MMx60Nde3oCaGVPWwt0mfeEW2xp7Jlsp6E9tIhw3KowS%2F2B26vFGGtHtY1MfW5IyDxDm%2BswkbGVLrJtUTXw7ba6z6mJQfeds2dztTtrbaY1jXq0uaY9L74QcLApUW8%2FZ4%2FkibGDUgyIU2LJqdRjRid4SY1R4YtWt9FWY0pCqKWJss8kQWF9LBzz4d3MWGtl%2F%2BwfPgaL%2BJ8h0uiGQ689dF80WEv3DR4nbJuKM2UFSjZoUQatx%2FpAs8HUkuSoJvnaJCrsiM0oMROzxPnsk%2BtfUFt6UR5wr01DQqFtQU4TCjNQhjAo71KkFutLnXcyXRV9HIiOteOJVQlAOO3zc7R6LghRaOGtav7Aq5EvF%2F7ABrkZkfphH1%2FyygYD1rufG8E7PY7OabgNHStOqs7T44rnimRL2p%2FBJPrPZ86A1PxAIH1%2F3tSqF%2FTDj2sbEBjqkAcC24BvjvIZtsTOf%2By%2FKTLA1It1ksUh1nIgWd6dhXEZOURDLh3uuHoOHaKbVy%2BbpWQsyyCnrrx6xJ4PTwiNNAM3nZ2Fe8Jiq%2Fl4Mc2MOmaU1GuJFH0bIdyYnMnOiXsvAS2KVENdVk3O0eMtvkgQgJV272NRWCWtvkKSAILJB3etTpsQPYwCVBN4m7MrJZWywNOn1xaMMFich6zW0GV8kYh5uYu2J&X-Amz-Signature=945332aa33e0880eaa20f7da5d3e0356201ca63a3465eb3a9efb6cc948571e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
