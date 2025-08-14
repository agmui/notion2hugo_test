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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466365UQPNA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjZUfHH%2Bf825475SBKI08fY6po33jHmaZSzHrsIYFsrAiBdSHq0Jbko4bbztKypGSedeWYlLHD0F4k2e6l77D1cdyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMVPGNMnTHrFA2ca%2BIKtwDuRGeNmMfyv%2BodDu5Y3cCZkoOHA0RXTt4Mt8Xbt7BrXo52BBzUs1M9MrH0YC7BxY42Iz6svPdYUW4%2FB3GcRwl593G3HLUKXX0Iq8PrW5qzynJRTfnqcGdjcdNn0oALrSXORqbQrwAaRX%2FCBZht%2Fx%2FIZVIo6%2F92tF%2FtK62XMMreX1NU1REXSHzjBImSsLaiPrb0h%2ByhphFM0aHhCBaiKQiy8Vs%2BqIkOBQ13kA1Uv4YNC63wgwZrpOa7IJIxaD5kD13b7Z8AuX%2F6OKxsX1DbUcvElcqy4WktpP8Dj4FcdTAKBO67iGEYR5K%2B45WrybgGdI950ecTC9%2F3vMW%2Fiz5Q0tFi91qkJEjzUUMC4P5u16AF7cehGojvD%2Fhq4Qy2k7F%2FYixV8w6mFwgUGW%2Fza7ku7ZqoLlMVfP5atpiOLElbNkjQxaHTNrm0ZbkoqQqRJVVVwejrJxhfsBAoxVviaJ6f5K5qOExLoIED9AjG7vSIn28y0D91NwxLILKxa1hUh15gb7%2F7Ccb8rXRg7rZl%2BccHgzTi8gkdZ%2F7tg6ap%2BisVqyWZvKmgOT014DnIMiQYEXofGtnEx0nk%2FTxYGvAaWkhXaWscaXvG%2BH48zfWfimwpnY2PdqPIG%2FVyv6XNS3nPmswga72xAY6pgGskDtrzgn6UjXhKHqB2azNIS2SviRRT%2BtWN9qUOmsAf%2FdcLX6clovHQNg5W8i%2FJO86V6bUo3fo3%2BWtc1rVReRWti6y1%2F5lTBNXm2Ske72Wjy%2Fa283hkj1uzhd19HmEBqHgHc8WmRfDGMJHAehbMPax3ZsqTR2HzprKsfB4k6CRjSRHS8TDu5rVQBHfHab5R4HXQfpqvzxDvsVz14%2BOKnaprNgGe9zv&X-Amz-Signature=7febd0244b9a63db1206ee9d2be2378dd5c4d9fb5aa6abb0323b3584646e2fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466365UQPNA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjZUfHH%2Bf825475SBKI08fY6po33jHmaZSzHrsIYFsrAiBdSHq0Jbko4bbztKypGSedeWYlLHD0F4k2e6l77D1cdyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMVPGNMnTHrFA2ca%2BIKtwDuRGeNmMfyv%2BodDu5Y3cCZkoOHA0RXTt4Mt8Xbt7BrXo52BBzUs1M9MrH0YC7BxY42Iz6svPdYUW4%2FB3GcRwl593G3HLUKXX0Iq8PrW5qzynJRTfnqcGdjcdNn0oALrSXORqbQrwAaRX%2FCBZht%2Fx%2FIZVIo6%2F92tF%2FtK62XMMreX1NU1REXSHzjBImSsLaiPrb0h%2ByhphFM0aHhCBaiKQiy8Vs%2BqIkOBQ13kA1Uv4YNC63wgwZrpOa7IJIxaD5kD13b7Z8AuX%2F6OKxsX1DbUcvElcqy4WktpP8Dj4FcdTAKBO67iGEYR5K%2B45WrybgGdI950ecTC9%2F3vMW%2Fiz5Q0tFi91qkJEjzUUMC4P5u16AF7cehGojvD%2Fhq4Qy2k7F%2FYixV8w6mFwgUGW%2Fza7ku7ZqoLlMVfP5atpiOLElbNkjQxaHTNrm0ZbkoqQqRJVVVwejrJxhfsBAoxVviaJ6f5K5qOExLoIED9AjG7vSIn28y0D91NwxLILKxa1hUh15gb7%2F7Ccb8rXRg7rZl%2BccHgzTi8gkdZ%2F7tg6ap%2BisVqyWZvKmgOT014DnIMiQYEXofGtnEx0nk%2FTxYGvAaWkhXaWscaXvG%2BH48zfWfimwpnY2PdqPIG%2FVyv6XNS3nPmswga72xAY6pgGskDtrzgn6UjXhKHqB2azNIS2SviRRT%2BtWN9qUOmsAf%2FdcLX6clovHQNg5W8i%2FJO86V6bUo3fo3%2BWtc1rVReRWti6y1%2F5lTBNXm2Ske72Wjy%2Fa283hkj1uzhd19HmEBqHgHc8WmRfDGMJHAehbMPax3ZsqTR2HzprKsfB4k6CRjSRHS8TDu5rVQBHfHab5R4HXQfpqvzxDvsVz14%2BOKnaprNgGe9zv&X-Amz-Signature=18fd0517b52862c9929bff8dd8e1ea5bb562dc4fc65069357b7835d0b5547c57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466365UQPNA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjZUfHH%2Bf825475SBKI08fY6po33jHmaZSzHrsIYFsrAiBdSHq0Jbko4bbztKypGSedeWYlLHD0F4k2e6l77D1cdyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMVPGNMnTHrFA2ca%2BIKtwDuRGeNmMfyv%2BodDu5Y3cCZkoOHA0RXTt4Mt8Xbt7BrXo52BBzUs1M9MrH0YC7BxY42Iz6svPdYUW4%2FB3GcRwl593G3HLUKXX0Iq8PrW5qzynJRTfnqcGdjcdNn0oALrSXORqbQrwAaRX%2FCBZht%2Fx%2FIZVIo6%2F92tF%2FtK62XMMreX1NU1REXSHzjBImSsLaiPrb0h%2ByhphFM0aHhCBaiKQiy8Vs%2BqIkOBQ13kA1Uv4YNC63wgwZrpOa7IJIxaD5kD13b7Z8AuX%2F6OKxsX1DbUcvElcqy4WktpP8Dj4FcdTAKBO67iGEYR5K%2B45WrybgGdI950ecTC9%2F3vMW%2Fiz5Q0tFi91qkJEjzUUMC4P5u16AF7cehGojvD%2Fhq4Qy2k7F%2FYixV8w6mFwgUGW%2Fza7ku7ZqoLlMVfP5atpiOLElbNkjQxaHTNrm0ZbkoqQqRJVVVwejrJxhfsBAoxVviaJ6f5K5qOExLoIED9AjG7vSIn28y0D91NwxLILKxa1hUh15gb7%2F7Ccb8rXRg7rZl%2BccHgzTi8gkdZ%2F7tg6ap%2BisVqyWZvKmgOT014DnIMiQYEXofGtnEx0nk%2FTxYGvAaWkhXaWscaXvG%2BH48zfWfimwpnY2PdqPIG%2FVyv6XNS3nPmswga72xAY6pgGskDtrzgn6UjXhKHqB2azNIS2SviRRT%2BtWN9qUOmsAf%2FdcLX6clovHQNg5W8i%2FJO86V6bUo3fo3%2BWtc1rVReRWti6y1%2F5lTBNXm2Ske72Wjy%2Fa283hkj1uzhd19HmEBqHgHc8WmRfDGMJHAehbMPax3ZsqTR2HzprKsfB4k6CRjSRHS8TDu5rVQBHfHab5R4HXQfpqvzxDvsVz14%2BOKnaprNgGe9zv&X-Amz-Signature=fd9a096423440e7edc6052a41ef202e739c99863c6dc5ccbf82766d2a706dc09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466365UQPNA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjZUfHH%2Bf825475SBKI08fY6po33jHmaZSzHrsIYFsrAiBdSHq0Jbko4bbztKypGSedeWYlLHD0F4k2e6l77D1cdyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMVPGNMnTHrFA2ca%2BIKtwDuRGeNmMfyv%2BodDu5Y3cCZkoOHA0RXTt4Mt8Xbt7BrXo52BBzUs1M9MrH0YC7BxY42Iz6svPdYUW4%2FB3GcRwl593G3HLUKXX0Iq8PrW5qzynJRTfnqcGdjcdNn0oALrSXORqbQrwAaRX%2FCBZht%2Fx%2FIZVIo6%2F92tF%2FtK62XMMreX1NU1REXSHzjBImSsLaiPrb0h%2ByhphFM0aHhCBaiKQiy8Vs%2BqIkOBQ13kA1Uv4YNC63wgwZrpOa7IJIxaD5kD13b7Z8AuX%2F6OKxsX1DbUcvElcqy4WktpP8Dj4FcdTAKBO67iGEYR5K%2B45WrybgGdI950ecTC9%2F3vMW%2Fiz5Q0tFi91qkJEjzUUMC4P5u16AF7cehGojvD%2Fhq4Qy2k7F%2FYixV8w6mFwgUGW%2Fza7ku7ZqoLlMVfP5atpiOLElbNkjQxaHTNrm0ZbkoqQqRJVVVwejrJxhfsBAoxVviaJ6f5K5qOExLoIED9AjG7vSIn28y0D91NwxLILKxa1hUh15gb7%2F7Ccb8rXRg7rZl%2BccHgzTi8gkdZ%2F7tg6ap%2BisVqyWZvKmgOT014DnIMiQYEXofGtnEx0nk%2FTxYGvAaWkhXaWscaXvG%2BH48zfWfimwpnY2PdqPIG%2FVyv6XNS3nPmswga72xAY6pgGskDtrzgn6UjXhKHqB2azNIS2SviRRT%2BtWN9qUOmsAf%2FdcLX6clovHQNg5W8i%2FJO86V6bUo3fo3%2BWtc1rVReRWti6y1%2F5lTBNXm2Ske72Wjy%2Fa283hkj1uzhd19HmEBqHgHc8WmRfDGMJHAehbMPax3ZsqTR2HzprKsfB4k6CRjSRHS8TDu5rVQBHfHab5R4HXQfpqvzxDvsVz14%2BOKnaprNgGe9zv&X-Amz-Signature=9ec7fac0f2ed91f201d0e60f200e0820405770d7d8cc67720de56d96db0f8d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466365UQPNA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjZUfHH%2Bf825475SBKI08fY6po33jHmaZSzHrsIYFsrAiBdSHq0Jbko4bbztKypGSedeWYlLHD0F4k2e6l77D1cdyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMVPGNMnTHrFA2ca%2BIKtwDuRGeNmMfyv%2BodDu5Y3cCZkoOHA0RXTt4Mt8Xbt7BrXo52BBzUs1M9MrH0YC7BxY42Iz6svPdYUW4%2FB3GcRwl593G3HLUKXX0Iq8PrW5qzynJRTfnqcGdjcdNn0oALrSXORqbQrwAaRX%2FCBZht%2Fx%2FIZVIo6%2F92tF%2FtK62XMMreX1NU1REXSHzjBImSsLaiPrb0h%2ByhphFM0aHhCBaiKQiy8Vs%2BqIkOBQ13kA1Uv4YNC63wgwZrpOa7IJIxaD5kD13b7Z8AuX%2F6OKxsX1DbUcvElcqy4WktpP8Dj4FcdTAKBO67iGEYR5K%2B45WrybgGdI950ecTC9%2F3vMW%2Fiz5Q0tFi91qkJEjzUUMC4P5u16AF7cehGojvD%2Fhq4Qy2k7F%2FYixV8w6mFwgUGW%2Fza7ku7ZqoLlMVfP5atpiOLElbNkjQxaHTNrm0ZbkoqQqRJVVVwejrJxhfsBAoxVviaJ6f5K5qOExLoIED9AjG7vSIn28y0D91NwxLILKxa1hUh15gb7%2F7Ccb8rXRg7rZl%2BccHgzTi8gkdZ%2F7tg6ap%2BisVqyWZvKmgOT014DnIMiQYEXofGtnEx0nk%2FTxYGvAaWkhXaWscaXvG%2BH48zfWfimwpnY2PdqPIG%2FVyv6XNS3nPmswga72xAY6pgGskDtrzgn6UjXhKHqB2azNIS2SviRRT%2BtWN9qUOmsAf%2FdcLX6clovHQNg5W8i%2FJO86V6bUo3fo3%2BWtc1rVReRWti6y1%2F5lTBNXm2Ske72Wjy%2Fa283hkj1uzhd19HmEBqHgHc8WmRfDGMJHAehbMPax3ZsqTR2HzprKsfB4k6CRjSRHS8TDu5rVQBHfHab5R4HXQfpqvzxDvsVz14%2BOKnaprNgGe9zv&X-Amz-Signature=ea482c3575ca8304425890cbc15c7cf18000ebac3a257d8a4a6533525b0f7cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466365UQPNA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjZUfHH%2Bf825475SBKI08fY6po33jHmaZSzHrsIYFsrAiBdSHq0Jbko4bbztKypGSedeWYlLHD0F4k2e6l77D1cdyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMVPGNMnTHrFA2ca%2BIKtwDuRGeNmMfyv%2BodDu5Y3cCZkoOHA0RXTt4Mt8Xbt7BrXo52BBzUs1M9MrH0YC7BxY42Iz6svPdYUW4%2FB3GcRwl593G3HLUKXX0Iq8PrW5qzynJRTfnqcGdjcdNn0oALrSXORqbQrwAaRX%2FCBZht%2Fx%2FIZVIo6%2F92tF%2FtK62XMMreX1NU1REXSHzjBImSsLaiPrb0h%2ByhphFM0aHhCBaiKQiy8Vs%2BqIkOBQ13kA1Uv4YNC63wgwZrpOa7IJIxaD5kD13b7Z8AuX%2F6OKxsX1DbUcvElcqy4WktpP8Dj4FcdTAKBO67iGEYR5K%2B45WrybgGdI950ecTC9%2F3vMW%2Fiz5Q0tFi91qkJEjzUUMC4P5u16AF7cehGojvD%2Fhq4Qy2k7F%2FYixV8w6mFwgUGW%2Fza7ku7ZqoLlMVfP5atpiOLElbNkjQxaHTNrm0ZbkoqQqRJVVVwejrJxhfsBAoxVviaJ6f5K5qOExLoIED9AjG7vSIn28y0D91NwxLILKxa1hUh15gb7%2F7Ccb8rXRg7rZl%2BccHgzTi8gkdZ%2F7tg6ap%2BisVqyWZvKmgOT014DnIMiQYEXofGtnEx0nk%2FTxYGvAaWkhXaWscaXvG%2BH48zfWfimwpnY2PdqPIG%2FVyv6XNS3nPmswga72xAY6pgGskDtrzgn6UjXhKHqB2azNIS2SviRRT%2BtWN9qUOmsAf%2FdcLX6clovHQNg5W8i%2FJO86V6bUo3fo3%2BWtc1rVReRWti6y1%2F5lTBNXm2Ske72Wjy%2Fa283hkj1uzhd19HmEBqHgHc8WmRfDGMJHAehbMPax3ZsqTR2HzprKsfB4k6CRjSRHS8TDu5rVQBHfHab5R4HXQfpqvzxDvsVz14%2BOKnaprNgGe9zv&X-Amz-Signature=aeca24a050827553d64bef6044487360732406da479310ddfe28c7129d92438f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466365UQPNA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjZUfHH%2Bf825475SBKI08fY6po33jHmaZSzHrsIYFsrAiBdSHq0Jbko4bbztKypGSedeWYlLHD0F4k2e6l77D1cdyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMVPGNMnTHrFA2ca%2BIKtwDuRGeNmMfyv%2BodDu5Y3cCZkoOHA0RXTt4Mt8Xbt7BrXo52BBzUs1M9MrH0YC7BxY42Iz6svPdYUW4%2FB3GcRwl593G3HLUKXX0Iq8PrW5qzynJRTfnqcGdjcdNn0oALrSXORqbQrwAaRX%2FCBZht%2Fx%2FIZVIo6%2F92tF%2FtK62XMMreX1NU1REXSHzjBImSsLaiPrb0h%2ByhphFM0aHhCBaiKQiy8Vs%2BqIkOBQ13kA1Uv4YNC63wgwZrpOa7IJIxaD5kD13b7Z8AuX%2F6OKxsX1DbUcvElcqy4WktpP8Dj4FcdTAKBO67iGEYR5K%2B45WrybgGdI950ecTC9%2F3vMW%2Fiz5Q0tFi91qkJEjzUUMC4P5u16AF7cehGojvD%2Fhq4Qy2k7F%2FYixV8w6mFwgUGW%2Fza7ku7ZqoLlMVfP5atpiOLElbNkjQxaHTNrm0ZbkoqQqRJVVVwejrJxhfsBAoxVviaJ6f5K5qOExLoIED9AjG7vSIn28y0D91NwxLILKxa1hUh15gb7%2F7Ccb8rXRg7rZl%2BccHgzTi8gkdZ%2F7tg6ap%2BisVqyWZvKmgOT014DnIMiQYEXofGtnEx0nk%2FTxYGvAaWkhXaWscaXvG%2BH48zfWfimwpnY2PdqPIG%2FVyv6XNS3nPmswga72xAY6pgGskDtrzgn6UjXhKHqB2azNIS2SviRRT%2BtWN9qUOmsAf%2FdcLX6clovHQNg5W8i%2FJO86V6bUo3fo3%2BWtc1rVReRWti6y1%2F5lTBNXm2Ske72Wjy%2Fa283hkj1uzhd19HmEBqHgHc8WmRfDGMJHAehbMPax3ZsqTR2HzprKsfB4k6CRjSRHS8TDu5rVQBHfHab5R4HXQfpqvzxDvsVz14%2BOKnaprNgGe9zv&X-Amz-Signature=823b760e710e0216a39f00a4d8912a3b16f1d31177d09f6043e37e8218114f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466365UQPNA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjZUfHH%2Bf825475SBKI08fY6po33jHmaZSzHrsIYFsrAiBdSHq0Jbko4bbztKypGSedeWYlLHD0F4k2e6l77D1cdyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMVPGNMnTHrFA2ca%2BIKtwDuRGeNmMfyv%2BodDu5Y3cCZkoOHA0RXTt4Mt8Xbt7BrXo52BBzUs1M9MrH0YC7BxY42Iz6svPdYUW4%2FB3GcRwl593G3HLUKXX0Iq8PrW5qzynJRTfnqcGdjcdNn0oALrSXORqbQrwAaRX%2FCBZht%2Fx%2FIZVIo6%2F92tF%2FtK62XMMreX1NU1REXSHzjBImSsLaiPrb0h%2ByhphFM0aHhCBaiKQiy8Vs%2BqIkOBQ13kA1Uv4YNC63wgwZrpOa7IJIxaD5kD13b7Z8AuX%2F6OKxsX1DbUcvElcqy4WktpP8Dj4FcdTAKBO67iGEYR5K%2B45WrybgGdI950ecTC9%2F3vMW%2Fiz5Q0tFi91qkJEjzUUMC4P5u16AF7cehGojvD%2Fhq4Qy2k7F%2FYixV8w6mFwgUGW%2Fza7ku7ZqoLlMVfP5atpiOLElbNkjQxaHTNrm0ZbkoqQqRJVVVwejrJxhfsBAoxVviaJ6f5K5qOExLoIED9AjG7vSIn28y0D91NwxLILKxa1hUh15gb7%2F7Ccb8rXRg7rZl%2BccHgzTi8gkdZ%2F7tg6ap%2BisVqyWZvKmgOT014DnIMiQYEXofGtnEx0nk%2FTxYGvAaWkhXaWscaXvG%2BH48zfWfimwpnY2PdqPIG%2FVyv6XNS3nPmswga72xAY6pgGskDtrzgn6UjXhKHqB2azNIS2SviRRT%2BtWN9qUOmsAf%2FdcLX6clovHQNg5W8i%2FJO86V6bUo3fo3%2BWtc1rVReRWti6y1%2F5lTBNXm2Ske72Wjy%2Fa283hkj1uzhd19HmEBqHgHc8WmRfDGMJHAehbMPax3ZsqTR2HzprKsfB4k6CRjSRHS8TDu5rVQBHfHab5R4HXQfpqvzxDvsVz14%2BOKnaprNgGe9zv&X-Amz-Signature=f01f4a318984f199eb001827d41799d10378dbd6056710cf93cf0773b6c35ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466365UQPNA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjZUfHH%2Bf825475SBKI08fY6po33jHmaZSzHrsIYFsrAiBdSHq0Jbko4bbztKypGSedeWYlLHD0F4k2e6l77D1cdyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMVPGNMnTHrFA2ca%2BIKtwDuRGeNmMfyv%2BodDu5Y3cCZkoOHA0RXTt4Mt8Xbt7BrXo52BBzUs1M9MrH0YC7BxY42Iz6svPdYUW4%2FB3GcRwl593G3HLUKXX0Iq8PrW5qzynJRTfnqcGdjcdNn0oALrSXORqbQrwAaRX%2FCBZht%2Fx%2FIZVIo6%2F92tF%2FtK62XMMreX1NU1REXSHzjBImSsLaiPrb0h%2ByhphFM0aHhCBaiKQiy8Vs%2BqIkOBQ13kA1Uv4YNC63wgwZrpOa7IJIxaD5kD13b7Z8AuX%2F6OKxsX1DbUcvElcqy4WktpP8Dj4FcdTAKBO67iGEYR5K%2B45WrybgGdI950ecTC9%2F3vMW%2Fiz5Q0tFi91qkJEjzUUMC4P5u16AF7cehGojvD%2Fhq4Qy2k7F%2FYixV8w6mFwgUGW%2Fza7ku7ZqoLlMVfP5atpiOLElbNkjQxaHTNrm0ZbkoqQqRJVVVwejrJxhfsBAoxVviaJ6f5K5qOExLoIED9AjG7vSIn28y0D91NwxLILKxa1hUh15gb7%2F7Ccb8rXRg7rZl%2BccHgzTi8gkdZ%2F7tg6ap%2BisVqyWZvKmgOT014DnIMiQYEXofGtnEx0nk%2FTxYGvAaWkhXaWscaXvG%2BH48zfWfimwpnY2PdqPIG%2FVyv6XNS3nPmswga72xAY6pgGskDtrzgn6UjXhKHqB2azNIS2SviRRT%2BtWN9qUOmsAf%2FdcLX6clovHQNg5W8i%2FJO86V6bUo3fo3%2BWtc1rVReRWti6y1%2F5lTBNXm2Ske72Wjy%2Fa283hkj1uzhd19HmEBqHgHc8WmRfDGMJHAehbMPax3ZsqTR2HzprKsfB4k6CRjSRHS8TDu5rVQBHfHab5R4HXQfpqvzxDvsVz14%2BOKnaprNgGe9zv&X-Amz-Signature=af2bddd1d6f3ecd63715fbcb371cd661d3fd64198504199df1893fbfc6030ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466365UQPNA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjZUfHH%2Bf825475SBKI08fY6po33jHmaZSzHrsIYFsrAiBdSHq0Jbko4bbztKypGSedeWYlLHD0F4k2e6l77D1cdyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMVPGNMnTHrFA2ca%2BIKtwDuRGeNmMfyv%2BodDu5Y3cCZkoOHA0RXTt4Mt8Xbt7BrXo52BBzUs1M9MrH0YC7BxY42Iz6svPdYUW4%2FB3GcRwl593G3HLUKXX0Iq8PrW5qzynJRTfnqcGdjcdNn0oALrSXORqbQrwAaRX%2FCBZht%2Fx%2FIZVIo6%2F92tF%2FtK62XMMreX1NU1REXSHzjBImSsLaiPrb0h%2ByhphFM0aHhCBaiKQiy8Vs%2BqIkOBQ13kA1Uv4YNC63wgwZrpOa7IJIxaD5kD13b7Z8AuX%2F6OKxsX1DbUcvElcqy4WktpP8Dj4FcdTAKBO67iGEYR5K%2B45WrybgGdI950ecTC9%2F3vMW%2Fiz5Q0tFi91qkJEjzUUMC4P5u16AF7cehGojvD%2Fhq4Qy2k7F%2FYixV8w6mFwgUGW%2Fza7ku7ZqoLlMVfP5atpiOLElbNkjQxaHTNrm0ZbkoqQqRJVVVwejrJxhfsBAoxVviaJ6f5K5qOExLoIED9AjG7vSIn28y0D91NwxLILKxa1hUh15gb7%2F7Ccb8rXRg7rZl%2BccHgzTi8gkdZ%2F7tg6ap%2BisVqyWZvKmgOT014DnIMiQYEXofGtnEx0nk%2FTxYGvAaWkhXaWscaXvG%2BH48zfWfimwpnY2PdqPIG%2FVyv6XNS3nPmswga72xAY6pgGskDtrzgn6UjXhKHqB2azNIS2SviRRT%2BtWN9qUOmsAf%2FdcLX6clovHQNg5W8i%2FJO86V6bUo3fo3%2BWtc1rVReRWti6y1%2F5lTBNXm2Ske72Wjy%2Fa283hkj1uzhd19HmEBqHgHc8WmRfDGMJHAehbMPax3ZsqTR2HzprKsfB4k6CRjSRHS8TDu5rVQBHfHab5R4HXQfpqvzxDvsVz14%2BOKnaprNgGe9zv&X-Amz-Signature=ba5ced664d039d4123785903480f3452cda2c24d4cf9493d0ca4162f8a863ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466365UQPNA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjZUfHH%2Bf825475SBKI08fY6po33jHmaZSzHrsIYFsrAiBdSHq0Jbko4bbztKypGSedeWYlLHD0F4k2e6l77D1cdyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMVPGNMnTHrFA2ca%2BIKtwDuRGeNmMfyv%2BodDu5Y3cCZkoOHA0RXTt4Mt8Xbt7BrXo52BBzUs1M9MrH0YC7BxY42Iz6svPdYUW4%2FB3GcRwl593G3HLUKXX0Iq8PrW5qzynJRTfnqcGdjcdNn0oALrSXORqbQrwAaRX%2FCBZht%2Fx%2FIZVIo6%2F92tF%2FtK62XMMreX1NU1REXSHzjBImSsLaiPrb0h%2ByhphFM0aHhCBaiKQiy8Vs%2BqIkOBQ13kA1Uv4YNC63wgwZrpOa7IJIxaD5kD13b7Z8AuX%2F6OKxsX1DbUcvElcqy4WktpP8Dj4FcdTAKBO67iGEYR5K%2B45WrybgGdI950ecTC9%2F3vMW%2Fiz5Q0tFi91qkJEjzUUMC4P5u16AF7cehGojvD%2Fhq4Qy2k7F%2FYixV8w6mFwgUGW%2Fza7ku7ZqoLlMVfP5atpiOLElbNkjQxaHTNrm0ZbkoqQqRJVVVwejrJxhfsBAoxVviaJ6f5K5qOExLoIED9AjG7vSIn28y0D91NwxLILKxa1hUh15gb7%2F7Ccb8rXRg7rZl%2BccHgzTi8gkdZ%2F7tg6ap%2BisVqyWZvKmgOT014DnIMiQYEXofGtnEx0nk%2FTxYGvAaWkhXaWscaXvG%2BH48zfWfimwpnY2PdqPIG%2FVyv6XNS3nPmswga72xAY6pgGskDtrzgn6UjXhKHqB2azNIS2SviRRT%2BtWN9qUOmsAf%2FdcLX6clovHQNg5W8i%2FJO86V6bUo3fo3%2BWtc1rVReRWti6y1%2F5lTBNXm2Ske72Wjy%2Fa283hkj1uzhd19HmEBqHgHc8WmRfDGMJHAehbMPax3ZsqTR2HzprKsfB4k6CRjSRHS8TDu5rVQBHfHab5R4HXQfpqvzxDvsVz14%2BOKnaprNgGe9zv&X-Amz-Signature=e5fc55dde4b06edd39a45240741ec83fc73de51978609698a4031838b444ad3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466365UQPNA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjZUfHH%2Bf825475SBKI08fY6po33jHmaZSzHrsIYFsrAiBdSHq0Jbko4bbztKypGSedeWYlLHD0F4k2e6l77D1cdyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMVPGNMnTHrFA2ca%2BIKtwDuRGeNmMfyv%2BodDu5Y3cCZkoOHA0RXTt4Mt8Xbt7BrXo52BBzUs1M9MrH0YC7BxY42Iz6svPdYUW4%2FB3GcRwl593G3HLUKXX0Iq8PrW5qzynJRTfnqcGdjcdNn0oALrSXORqbQrwAaRX%2FCBZht%2Fx%2FIZVIo6%2F92tF%2FtK62XMMreX1NU1REXSHzjBImSsLaiPrb0h%2ByhphFM0aHhCBaiKQiy8Vs%2BqIkOBQ13kA1Uv4YNC63wgwZrpOa7IJIxaD5kD13b7Z8AuX%2F6OKxsX1DbUcvElcqy4WktpP8Dj4FcdTAKBO67iGEYR5K%2B45WrybgGdI950ecTC9%2F3vMW%2Fiz5Q0tFi91qkJEjzUUMC4P5u16AF7cehGojvD%2Fhq4Qy2k7F%2FYixV8w6mFwgUGW%2Fza7ku7ZqoLlMVfP5atpiOLElbNkjQxaHTNrm0ZbkoqQqRJVVVwejrJxhfsBAoxVviaJ6f5K5qOExLoIED9AjG7vSIn28y0D91NwxLILKxa1hUh15gb7%2F7Ccb8rXRg7rZl%2BccHgzTi8gkdZ%2F7tg6ap%2BisVqyWZvKmgOT014DnIMiQYEXofGtnEx0nk%2FTxYGvAaWkhXaWscaXvG%2BH48zfWfimwpnY2PdqPIG%2FVyv6XNS3nPmswga72xAY6pgGskDtrzgn6UjXhKHqB2azNIS2SviRRT%2BtWN9qUOmsAf%2FdcLX6clovHQNg5W8i%2FJO86V6bUo3fo3%2BWtc1rVReRWti6y1%2F5lTBNXm2Ske72Wjy%2Fa283hkj1uzhd19HmEBqHgHc8WmRfDGMJHAehbMPax3ZsqTR2HzprKsfB4k6CRjSRHS8TDu5rVQBHfHab5R4HXQfpqvzxDvsVz14%2BOKnaprNgGe9zv&X-Amz-Signature=f52c9c63626c8f0581bba0cf6d46057e6ad89fadfe7bc27c897e5bcc768ac926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466365UQPNA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjZUfHH%2Bf825475SBKI08fY6po33jHmaZSzHrsIYFsrAiBdSHq0Jbko4bbztKypGSedeWYlLHD0F4k2e6l77D1cdyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMVPGNMnTHrFA2ca%2BIKtwDuRGeNmMfyv%2BodDu5Y3cCZkoOHA0RXTt4Mt8Xbt7BrXo52BBzUs1M9MrH0YC7BxY42Iz6svPdYUW4%2FB3GcRwl593G3HLUKXX0Iq8PrW5qzynJRTfnqcGdjcdNn0oALrSXORqbQrwAaRX%2FCBZht%2Fx%2FIZVIo6%2F92tF%2FtK62XMMreX1NU1REXSHzjBImSsLaiPrb0h%2ByhphFM0aHhCBaiKQiy8Vs%2BqIkOBQ13kA1Uv4YNC63wgwZrpOa7IJIxaD5kD13b7Z8AuX%2F6OKxsX1DbUcvElcqy4WktpP8Dj4FcdTAKBO67iGEYR5K%2B45WrybgGdI950ecTC9%2F3vMW%2Fiz5Q0tFi91qkJEjzUUMC4P5u16AF7cehGojvD%2Fhq4Qy2k7F%2FYixV8w6mFwgUGW%2Fza7ku7ZqoLlMVfP5atpiOLElbNkjQxaHTNrm0ZbkoqQqRJVVVwejrJxhfsBAoxVviaJ6f5K5qOExLoIED9AjG7vSIn28y0D91NwxLILKxa1hUh15gb7%2F7Ccb8rXRg7rZl%2BccHgzTi8gkdZ%2F7tg6ap%2BisVqyWZvKmgOT014DnIMiQYEXofGtnEx0nk%2FTxYGvAaWkhXaWscaXvG%2BH48zfWfimwpnY2PdqPIG%2FVyv6XNS3nPmswga72xAY6pgGskDtrzgn6UjXhKHqB2azNIS2SviRRT%2BtWN9qUOmsAf%2FdcLX6clovHQNg5W8i%2FJO86V6bUo3fo3%2BWtc1rVReRWti6y1%2F5lTBNXm2Ske72Wjy%2Fa283hkj1uzhd19HmEBqHgHc8WmRfDGMJHAehbMPax3ZsqTR2HzprKsfB4k6CRjSRHS8TDu5rVQBHfHab5R4HXQfpqvzxDvsVz14%2BOKnaprNgGe9zv&X-Amz-Signature=908d75138e55ce63c65876e690df3537aaa49d4956fcbebf65690e6c87873f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466365UQPNA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjZUfHH%2Bf825475SBKI08fY6po33jHmaZSzHrsIYFsrAiBdSHq0Jbko4bbztKypGSedeWYlLHD0F4k2e6l77D1cdyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMVPGNMnTHrFA2ca%2BIKtwDuRGeNmMfyv%2BodDu5Y3cCZkoOHA0RXTt4Mt8Xbt7BrXo52BBzUs1M9MrH0YC7BxY42Iz6svPdYUW4%2FB3GcRwl593G3HLUKXX0Iq8PrW5qzynJRTfnqcGdjcdNn0oALrSXORqbQrwAaRX%2FCBZht%2Fx%2FIZVIo6%2F92tF%2FtK62XMMreX1NU1REXSHzjBImSsLaiPrb0h%2ByhphFM0aHhCBaiKQiy8Vs%2BqIkOBQ13kA1Uv4YNC63wgwZrpOa7IJIxaD5kD13b7Z8AuX%2F6OKxsX1DbUcvElcqy4WktpP8Dj4FcdTAKBO67iGEYR5K%2B45WrybgGdI950ecTC9%2F3vMW%2Fiz5Q0tFi91qkJEjzUUMC4P5u16AF7cehGojvD%2Fhq4Qy2k7F%2FYixV8w6mFwgUGW%2Fza7ku7ZqoLlMVfP5atpiOLElbNkjQxaHTNrm0ZbkoqQqRJVVVwejrJxhfsBAoxVviaJ6f5K5qOExLoIED9AjG7vSIn28y0D91NwxLILKxa1hUh15gb7%2F7Ccb8rXRg7rZl%2BccHgzTi8gkdZ%2F7tg6ap%2BisVqyWZvKmgOT014DnIMiQYEXofGtnEx0nk%2FTxYGvAaWkhXaWscaXvG%2BH48zfWfimwpnY2PdqPIG%2FVyv6XNS3nPmswga72xAY6pgGskDtrzgn6UjXhKHqB2azNIS2SviRRT%2BtWN9qUOmsAf%2FdcLX6clovHQNg5W8i%2FJO86V6bUo3fo3%2BWtc1rVReRWti6y1%2F5lTBNXm2Ske72Wjy%2Fa283hkj1uzhd19HmEBqHgHc8WmRfDGMJHAehbMPax3ZsqTR2HzprKsfB4k6CRjSRHS8TDu5rVQBHfHab5R4HXQfpqvzxDvsVz14%2BOKnaprNgGe9zv&X-Amz-Signature=b3f73c9df5ba5e47addebeef631408e2421370ce06e55ccac8617f7f81045c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
