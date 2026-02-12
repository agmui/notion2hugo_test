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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFB4IAP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIF3hKZrnXXT2fkNDoCYMB6PCB1lvcjLBBbdybEUFY%2BaKAiAWyVs7BTUXxDTD9Oniqn6gWZ5c2dr9HBFuRDSPXQkFxiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfE%2F3sDRTXfgQajJWKtwDQAHMOTa1oSRprjRFCENKlb5ohnjLErXiQCotQKa24b0yc3T8ImS2sa%2FpbSxIwZ%2F9M97f5i0rInTL27QmPOGreFcyLUZj1LLXbRceWCjmBtqoxB3ikq%2FZwP%2BRgNcMU9XK%2FMDUVYyQyzcLUsGZRbXMMN%2FI3tF6TAjyTtUoOB6gi%2BsC5MVidR8TddCMLMHBoEIGfzjNrxTjX9JgjZWc9wB1bsVbskqU2yS0mndj8Gaq%2BD1unuqVE8CJ9jr0aqpFt3cRS9XK6qiEnwf1WgS7Tsq1pvV5KjRzjS5EVUhoxZGy2yC6F5HwhuihfjI8guOrxnaxrHl6FIwOmQESZswlsbG3jNgPx%2FSOBvevt0iU0jKYAhWt2Zc0NU2jQTro9b6tWP00BW20N%2FmXlQ3Tp05zcVLMFOBRgQ6QaHXoo6wMXVODFbFwHonml5vAMc834h3Qw%2FiP9d5izXaSCRaow6nafLKzb2Syd%2FBZk6stBPuN%2FYGIL8ElurLWjEWOqHmQgKSmp3OYGK8eC%2BB9Ot9%2F68IzvzHL8HQb8KtZckkX4W%2FYGDi9nc6c3%2BWwrt1rsoIUIclIXJV9WrVsJYbnxC0OQy3S1w3LqC2cjJETn5ySlvZv%2FTiLRmIk1uqDDF5cMbtOnCcw9Mq0zAY6pgEI188ZAbuC2Z%2Fj0kzF%2B1uCuypXjjp0948SPc92kebIlIVJDqqYNQqKt3V83cYhfZ%2FdLitORzcbaTsc5Urujym1GzReTfI7QbacJ9tct4p5DRHhLgrvtKFw3zuNc%2FGzXSGQUdVBlIvXPmP1vHNIEO1VWKNIoAeKGMdW4WyW2rCnUPee%2BV%2BVoTZRN2PlBytg53Qg2oUgoR48IoJKTRuXxpgkjZdryUWk&X-Amz-Signature=7c4b2f2aee40b1d216a940957b46de89fe4bb7da5d2670b50847a6bf7abe2256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFB4IAP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIF3hKZrnXXT2fkNDoCYMB6PCB1lvcjLBBbdybEUFY%2BaKAiAWyVs7BTUXxDTD9Oniqn6gWZ5c2dr9HBFuRDSPXQkFxiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfE%2F3sDRTXfgQajJWKtwDQAHMOTa1oSRprjRFCENKlb5ohnjLErXiQCotQKa24b0yc3T8ImS2sa%2FpbSxIwZ%2F9M97f5i0rInTL27QmPOGreFcyLUZj1LLXbRceWCjmBtqoxB3ikq%2FZwP%2BRgNcMU9XK%2FMDUVYyQyzcLUsGZRbXMMN%2FI3tF6TAjyTtUoOB6gi%2BsC5MVidR8TddCMLMHBoEIGfzjNrxTjX9JgjZWc9wB1bsVbskqU2yS0mndj8Gaq%2BD1unuqVE8CJ9jr0aqpFt3cRS9XK6qiEnwf1WgS7Tsq1pvV5KjRzjS5EVUhoxZGy2yC6F5HwhuihfjI8guOrxnaxrHl6FIwOmQESZswlsbG3jNgPx%2FSOBvevt0iU0jKYAhWt2Zc0NU2jQTro9b6tWP00BW20N%2FmXlQ3Tp05zcVLMFOBRgQ6QaHXoo6wMXVODFbFwHonml5vAMc834h3Qw%2FiP9d5izXaSCRaow6nafLKzb2Syd%2FBZk6stBPuN%2FYGIL8ElurLWjEWOqHmQgKSmp3OYGK8eC%2BB9Ot9%2F68IzvzHL8HQb8KtZckkX4W%2FYGDi9nc6c3%2BWwrt1rsoIUIclIXJV9WrVsJYbnxC0OQy3S1w3LqC2cjJETn5ySlvZv%2FTiLRmIk1uqDDF5cMbtOnCcw9Mq0zAY6pgEI188ZAbuC2Z%2Fj0kzF%2B1uCuypXjjp0948SPc92kebIlIVJDqqYNQqKt3V83cYhfZ%2FdLitORzcbaTsc5Urujym1GzReTfI7QbacJ9tct4p5DRHhLgrvtKFw3zuNc%2FGzXSGQUdVBlIvXPmP1vHNIEO1VWKNIoAeKGMdW4WyW2rCnUPee%2BV%2BVoTZRN2PlBytg53Qg2oUgoR48IoJKTRuXxpgkjZdryUWk&X-Amz-Signature=dccb8e0ec09b1d5863c521220fc898e74a3dcd9f7315310a53f2a123f6c647b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFB4IAP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIF3hKZrnXXT2fkNDoCYMB6PCB1lvcjLBBbdybEUFY%2BaKAiAWyVs7BTUXxDTD9Oniqn6gWZ5c2dr9HBFuRDSPXQkFxiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfE%2F3sDRTXfgQajJWKtwDQAHMOTa1oSRprjRFCENKlb5ohnjLErXiQCotQKa24b0yc3T8ImS2sa%2FpbSxIwZ%2F9M97f5i0rInTL27QmPOGreFcyLUZj1LLXbRceWCjmBtqoxB3ikq%2FZwP%2BRgNcMU9XK%2FMDUVYyQyzcLUsGZRbXMMN%2FI3tF6TAjyTtUoOB6gi%2BsC5MVidR8TddCMLMHBoEIGfzjNrxTjX9JgjZWc9wB1bsVbskqU2yS0mndj8Gaq%2BD1unuqVE8CJ9jr0aqpFt3cRS9XK6qiEnwf1WgS7Tsq1pvV5KjRzjS5EVUhoxZGy2yC6F5HwhuihfjI8guOrxnaxrHl6FIwOmQESZswlsbG3jNgPx%2FSOBvevt0iU0jKYAhWt2Zc0NU2jQTro9b6tWP00BW20N%2FmXlQ3Tp05zcVLMFOBRgQ6QaHXoo6wMXVODFbFwHonml5vAMc834h3Qw%2FiP9d5izXaSCRaow6nafLKzb2Syd%2FBZk6stBPuN%2FYGIL8ElurLWjEWOqHmQgKSmp3OYGK8eC%2BB9Ot9%2F68IzvzHL8HQb8KtZckkX4W%2FYGDi9nc6c3%2BWwrt1rsoIUIclIXJV9WrVsJYbnxC0OQy3S1w3LqC2cjJETn5ySlvZv%2FTiLRmIk1uqDDF5cMbtOnCcw9Mq0zAY6pgEI188ZAbuC2Z%2Fj0kzF%2B1uCuypXjjp0948SPc92kebIlIVJDqqYNQqKt3V83cYhfZ%2FdLitORzcbaTsc5Urujym1GzReTfI7QbacJ9tct4p5DRHhLgrvtKFw3zuNc%2FGzXSGQUdVBlIvXPmP1vHNIEO1VWKNIoAeKGMdW4WyW2rCnUPee%2BV%2BVoTZRN2PlBytg53Qg2oUgoR48IoJKTRuXxpgkjZdryUWk&X-Amz-Signature=3e4760f3363ca5eccd005572c8e51b309c7f72ef24d2a291fcb05c77720b9739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFB4IAP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIF3hKZrnXXT2fkNDoCYMB6PCB1lvcjLBBbdybEUFY%2BaKAiAWyVs7BTUXxDTD9Oniqn6gWZ5c2dr9HBFuRDSPXQkFxiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfE%2F3sDRTXfgQajJWKtwDQAHMOTa1oSRprjRFCENKlb5ohnjLErXiQCotQKa24b0yc3T8ImS2sa%2FpbSxIwZ%2F9M97f5i0rInTL27QmPOGreFcyLUZj1LLXbRceWCjmBtqoxB3ikq%2FZwP%2BRgNcMU9XK%2FMDUVYyQyzcLUsGZRbXMMN%2FI3tF6TAjyTtUoOB6gi%2BsC5MVidR8TddCMLMHBoEIGfzjNrxTjX9JgjZWc9wB1bsVbskqU2yS0mndj8Gaq%2BD1unuqVE8CJ9jr0aqpFt3cRS9XK6qiEnwf1WgS7Tsq1pvV5KjRzjS5EVUhoxZGy2yC6F5HwhuihfjI8guOrxnaxrHl6FIwOmQESZswlsbG3jNgPx%2FSOBvevt0iU0jKYAhWt2Zc0NU2jQTro9b6tWP00BW20N%2FmXlQ3Tp05zcVLMFOBRgQ6QaHXoo6wMXVODFbFwHonml5vAMc834h3Qw%2FiP9d5izXaSCRaow6nafLKzb2Syd%2FBZk6stBPuN%2FYGIL8ElurLWjEWOqHmQgKSmp3OYGK8eC%2BB9Ot9%2F68IzvzHL8HQb8KtZckkX4W%2FYGDi9nc6c3%2BWwrt1rsoIUIclIXJV9WrVsJYbnxC0OQy3S1w3LqC2cjJETn5ySlvZv%2FTiLRmIk1uqDDF5cMbtOnCcw9Mq0zAY6pgEI188ZAbuC2Z%2Fj0kzF%2B1uCuypXjjp0948SPc92kebIlIVJDqqYNQqKt3V83cYhfZ%2FdLitORzcbaTsc5Urujym1GzReTfI7QbacJ9tct4p5DRHhLgrvtKFw3zuNc%2FGzXSGQUdVBlIvXPmP1vHNIEO1VWKNIoAeKGMdW4WyW2rCnUPee%2BV%2BVoTZRN2PlBytg53Qg2oUgoR48IoJKTRuXxpgkjZdryUWk&X-Amz-Signature=708f8a5a888c116e581500797980966d02f124b3a9367f3d3f012e0b96b6231d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFB4IAP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIF3hKZrnXXT2fkNDoCYMB6PCB1lvcjLBBbdybEUFY%2BaKAiAWyVs7BTUXxDTD9Oniqn6gWZ5c2dr9HBFuRDSPXQkFxiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfE%2F3sDRTXfgQajJWKtwDQAHMOTa1oSRprjRFCENKlb5ohnjLErXiQCotQKa24b0yc3T8ImS2sa%2FpbSxIwZ%2F9M97f5i0rInTL27QmPOGreFcyLUZj1LLXbRceWCjmBtqoxB3ikq%2FZwP%2BRgNcMU9XK%2FMDUVYyQyzcLUsGZRbXMMN%2FI3tF6TAjyTtUoOB6gi%2BsC5MVidR8TddCMLMHBoEIGfzjNrxTjX9JgjZWc9wB1bsVbskqU2yS0mndj8Gaq%2BD1unuqVE8CJ9jr0aqpFt3cRS9XK6qiEnwf1WgS7Tsq1pvV5KjRzjS5EVUhoxZGy2yC6F5HwhuihfjI8guOrxnaxrHl6FIwOmQESZswlsbG3jNgPx%2FSOBvevt0iU0jKYAhWt2Zc0NU2jQTro9b6tWP00BW20N%2FmXlQ3Tp05zcVLMFOBRgQ6QaHXoo6wMXVODFbFwHonml5vAMc834h3Qw%2FiP9d5izXaSCRaow6nafLKzb2Syd%2FBZk6stBPuN%2FYGIL8ElurLWjEWOqHmQgKSmp3OYGK8eC%2BB9Ot9%2F68IzvzHL8HQb8KtZckkX4W%2FYGDi9nc6c3%2BWwrt1rsoIUIclIXJV9WrVsJYbnxC0OQy3S1w3LqC2cjJETn5ySlvZv%2FTiLRmIk1uqDDF5cMbtOnCcw9Mq0zAY6pgEI188ZAbuC2Z%2Fj0kzF%2B1uCuypXjjp0948SPc92kebIlIVJDqqYNQqKt3V83cYhfZ%2FdLitORzcbaTsc5Urujym1GzReTfI7QbacJ9tct4p5DRHhLgrvtKFw3zuNc%2FGzXSGQUdVBlIvXPmP1vHNIEO1VWKNIoAeKGMdW4WyW2rCnUPee%2BV%2BVoTZRN2PlBytg53Qg2oUgoR48IoJKTRuXxpgkjZdryUWk&X-Amz-Signature=ff0d0f73dc2bb1049934faf9a27cdc0ee65f1f0fa2494ea87ea9c340bb258676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFB4IAP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIF3hKZrnXXT2fkNDoCYMB6PCB1lvcjLBBbdybEUFY%2BaKAiAWyVs7BTUXxDTD9Oniqn6gWZ5c2dr9HBFuRDSPXQkFxiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfE%2F3sDRTXfgQajJWKtwDQAHMOTa1oSRprjRFCENKlb5ohnjLErXiQCotQKa24b0yc3T8ImS2sa%2FpbSxIwZ%2F9M97f5i0rInTL27QmPOGreFcyLUZj1LLXbRceWCjmBtqoxB3ikq%2FZwP%2BRgNcMU9XK%2FMDUVYyQyzcLUsGZRbXMMN%2FI3tF6TAjyTtUoOB6gi%2BsC5MVidR8TddCMLMHBoEIGfzjNrxTjX9JgjZWc9wB1bsVbskqU2yS0mndj8Gaq%2BD1unuqVE8CJ9jr0aqpFt3cRS9XK6qiEnwf1WgS7Tsq1pvV5KjRzjS5EVUhoxZGy2yC6F5HwhuihfjI8guOrxnaxrHl6FIwOmQESZswlsbG3jNgPx%2FSOBvevt0iU0jKYAhWt2Zc0NU2jQTro9b6tWP00BW20N%2FmXlQ3Tp05zcVLMFOBRgQ6QaHXoo6wMXVODFbFwHonml5vAMc834h3Qw%2FiP9d5izXaSCRaow6nafLKzb2Syd%2FBZk6stBPuN%2FYGIL8ElurLWjEWOqHmQgKSmp3OYGK8eC%2BB9Ot9%2F68IzvzHL8HQb8KtZckkX4W%2FYGDi9nc6c3%2BWwrt1rsoIUIclIXJV9WrVsJYbnxC0OQy3S1w3LqC2cjJETn5ySlvZv%2FTiLRmIk1uqDDF5cMbtOnCcw9Mq0zAY6pgEI188ZAbuC2Z%2Fj0kzF%2B1uCuypXjjp0948SPc92kebIlIVJDqqYNQqKt3V83cYhfZ%2FdLitORzcbaTsc5Urujym1GzReTfI7QbacJ9tct4p5DRHhLgrvtKFw3zuNc%2FGzXSGQUdVBlIvXPmP1vHNIEO1VWKNIoAeKGMdW4WyW2rCnUPee%2BV%2BVoTZRN2PlBytg53Qg2oUgoR48IoJKTRuXxpgkjZdryUWk&X-Amz-Signature=a369f0d6aa6f54fc465a469bb65c9db0eaa550d40f34a67276d8e3b4cf9d2a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFB4IAP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIF3hKZrnXXT2fkNDoCYMB6PCB1lvcjLBBbdybEUFY%2BaKAiAWyVs7BTUXxDTD9Oniqn6gWZ5c2dr9HBFuRDSPXQkFxiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfE%2F3sDRTXfgQajJWKtwDQAHMOTa1oSRprjRFCENKlb5ohnjLErXiQCotQKa24b0yc3T8ImS2sa%2FpbSxIwZ%2F9M97f5i0rInTL27QmPOGreFcyLUZj1LLXbRceWCjmBtqoxB3ikq%2FZwP%2BRgNcMU9XK%2FMDUVYyQyzcLUsGZRbXMMN%2FI3tF6TAjyTtUoOB6gi%2BsC5MVidR8TddCMLMHBoEIGfzjNrxTjX9JgjZWc9wB1bsVbskqU2yS0mndj8Gaq%2BD1unuqVE8CJ9jr0aqpFt3cRS9XK6qiEnwf1WgS7Tsq1pvV5KjRzjS5EVUhoxZGy2yC6F5HwhuihfjI8guOrxnaxrHl6FIwOmQESZswlsbG3jNgPx%2FSOBvevt0iU0jKYAhWt2Zc0NU2jQTro9b6tWP00BW20N%2FmXlQ3Tp05zcVLMFOBRgQ6QaHXoo6wMXVODFbFwHonml5vAMc834h3Qw%2FiP9d5izXaSCRaow6nafLKzb2Syd%2FBZk6stBPuN%2FYGIL8ElurLWjEWOqHmQgKSmp3OYGK8eC%2BB9Ot9%2F68IzvzHL8HQb8KtZckkX4W%2FYGDi9nc6c3%2BWwrt1rsoIUIclIXJV9WrVsJYbnxC0OQy3S1w3LqC2cjJETn5ySlvZv%2FTiLRmIk1uqDDF5cMbtOnCcw9Mq0zAY6pgEI188ZAbuC2Z%2Fj0kzF%2B1uCuypXjjp0948SPc92kebIlIVJDqqYNQqKt3V83cYhfZ%2FdLitORzcbaTsc5Urujym1GzReTfI7QbacJ9tct4p5DRHhLgrvtKFw3zuNc%2FGzXSGQUdVBlIvXPmP1vHNIEO1VWKNIoAeKGMdW4WyW2rCnUPee%2BV%2BVoTZRN2PlBytg53Qg2oUgoR48IoJKTRuXxpgkjZdryUWk&X-Amz-Signature=0a3a9b887ecfa56ca42e7c56328b7386b6606791d4c5a51629fffc300e353d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFB4IAP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIF3hKZrnXXT2fkNDoCYMB6PCB1lvcjLBBbdybEUFY%2BaKAiAWyVs7BTUXxDTD9Oniqn6gWZ5c2dr9HBFuRDSPXQkFxiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfE%2F3sDRTXfgQajJWKtwDQAHMOTa1oSRprjRFCENKlb5ohnjLErXiQCotQKa24b0yc3T8ImS2sa%2FpbSxIwZ%2F9M97f5i0rInTL27QmPOGreFcyLUZj1LLXbRceWCjmBtqoxB3ikq%2FZwP%2BRgNcMU9XK%2FMDUVYyQyzcLUsGZRbXMMN%2FI3tF6TAjyTtUoOB6gi%2BsC5MVidR8TddCMLMHBoEIGfzjNrxTjX9JgjZWc9wB1bsVbskqU2yS0mndj8Gaq%2BD1unuqVE8CJ9jr0aqpFt3cRS9XK6qiEnwf1WgS7Tsq1pvV5KjRzjS5EVUhoxZGy2yC6F5HwhuihfjI8guOrxnaxrHl6FIwOmQESZswlsbG3jNgPx%2FSOBvevt0iU0jKYAhWt2Zc0NU2jQTro9b6tWP00BW20N%2FmXlQ3Tp05zcVLMFOBRgQ6QaHXoo6wMXVODFbFwHonml5vAMc834h3Qw%2FiP9d5izXaSCRaow6nafLKzb2Syd%2FBZk6stBPuN%2FYGIL8ElurLWjEWOqHmQgKSmp3OYGK8eC%2BB9Ot9%2F68IzvzHL8HQb8KtZckkX4W%2FYGDi9nc6c3%2BWwrt1rsoIUIclIXJV9WrVsJYbnxC0OQy3S1w3LqC2cjJETn5ySlvZv%2FTiLRmIk1uqDDF5cMbtOnCcw9Mq0zAY6pgEI188ZAbuC2Z%2Fj0kzF%2B1uCuypXjjp0948SPc92kebIlIVJDqqYNQqKt3V83cYhfZ%2FdLitORzcbaTsc5Urujym1GzReTfI7QbacJ9tct4p5DRHhLgrvtKFw3zuNc%2FGzXSGQUdVBlIvXPmP1vHNIEO1VWKNIoAeKGMdW4WyW2rCnUPee%2BV%2BVoTZRN2PlBytg53Qg2oUgoR48IoJKTRuXxpgkjZdryUWk&X-Amz-Signature=7bd28687eac27c3b5b9890cb3af2a0afb5459b4f9e71dfb1594283e4b77372b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFB4IAP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIF3hKZrnXXT2fkNDoCYMB6PCB1lvcjLBBbdybEUFY%2BaKAiAWyVs7BTUXxDTD9Oniqn6gWZ5c2dr9HBFuRDSPXQkFxiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfE%2F3sDRTXfgQajJWKtwDQAHMOTa1oSRprjRFCENKlb5ohnjLErXiQCotQKa24b0yc3T8ImS2sa%2FpbSxIwZ%2F9M97f5i0rInTL27QmPOGreFcyLUZj1LLXbRceWCjmBtqoxB3ikq%2FZwP%2BRgNcMU9XK%2FMDUVYyQyzcLUsGZRbXMMN%2FI3tF6TAjyTtUoOB6gi%2BsC5MVidR8TddCMLMHBoEIGfzjNrxTjX9JgjZWc9wB1bsVbskqU2yS0mndj8Gaq%2BD1unuqVE8CJ9jr0aqpFt3cRS9XK6qiEnwf1WgS7Tsq1pvV5KjRzjS5EVUhoxZGy2yC6F5HwhuihfjI8guOrxnaxrHl6FIwOmQESZswlsbG3jNgPx%2FSOBvevt0iU0jKYAhWt2Zc0NU2jQTro9b6tWP00BW20N%2FmXlQ3Tp05zcVLMFOBRgQ6QaHXoo6wMXVODFbFwHonml5vAMc834h3Qw%2FiP9d5izXaSCRaow6nafLKzb2Syd%2FBZk6stBPuN%2FYGIL8ElurLWjEWOqHmQgKSmp3OYGK8eC%2BB9Ot9%2F68IzvzHL8HQb8KtZckkX4W%2FYGDi9nc6c3%2BWwrt1rsoIUIclIXJV9WrVsJYbnxC0OQy3S1w3LqC2cjJETn5ySlvZv%2FTiLRmIk1uqDDF5cMbtOnCcw9Mq0zAY6pgEI188ZAbuC2Z%2Fj0kzF%2B1uCuypXjjp0948SPc92kebIlIVJDqqYNQqKt3V83cYhfZ%2FdLitORzcbaTsc5Urujym1GzReTfI7QbacJ9tct4p5DRHhLgrvtKFw3zuNc%2FGzXSGQUdVBlIvXPmP1vHNIEO1VWKNIoAeKGMdW4WyW2rCnUPee%2BV%2BVoTZRN2PlBytg53Qg2oUgoR48IoJKTRuXxpgkjZdryUWk&X-Amz-Signature=ba999912557ea02c12b6415a0b77e66fe6c97cbeb07785bd50bb308042013f12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFB4IAP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIF3hKZrnXXT2fkNDoCYMB6PCB1lvcjLBBbdybEUFY%2BaKAiAWyVs7BTUXxDTD9Oniqn6gWZ5c2dr9HBFuRDSPXQkFxiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfE%2F3sDRTXfgQajJWKtwDQAHMOTa1oSRprjRFCENKlb5ohnjLErXiQCotQKa24b0yc3T8ImS2sa%2FpbSxIwZ%2F9M97f5i0rInTL27QmPOGreFcyLUZj1LLXbRceWCjmBtqoxB3ikq%2FZwP%2BRgNcMU9XK%2FMDUVYyQyzcLUsGZRbXMMN%2FI3tF6TAjyTtUoOB6gi%2BsC5MVidR8TddCMLMHBoEIGfzjNrxTjX9JgjZWc9wB1bsVbskqU2yS0mndj8Gaq%2BD1unuqVE8CJ9jr0aqpFt3cRS9XK6qiEnwf1WgS7Tsq1pvV5KjRzjS5EVUhoxZGy2yC6F5HwhuihfjI8guOrxnaxrHl6FIwOmQESZswlsbG3jNgPx%2FSOBvevt0iU0jKYAhWt2Zc0NU2jQTro9b6tWP00BW20N%2FmXlQ3Tp05zcVLMFOBRgQ6QaHXoo6wMXVODFbFwHonml5vAMc834h3Qw%2FiP9d5izXaSCRaow6nafLKzb2Syd%2FBZk6stBPuN%2FYGIL8ElurLWjEWOqHmQgKSmp3OYGK8eC%2BB9Ot9%2F68IzvzHL8HQb8KtZckkX4W%2FYGDi9nc6c3%2BWwrt1rsoIUIclIXJV9WrVsJYbnxC0OQy3S1w3LqC2cjJETn5ySlvZv%2FTiLRmIk1uqDDF5cMbtOnCcw9Mq0zAY6pgEI188ZAbuC2Z%2Fj0kzF%2B1uCuypXjjp0948SPc92kebIlIVJDqqYNQqKt3V83cYhfZ%2FdLitORzcbaTsc5Urujym1GzReTfI7QbacJ9tct4p5DRHhLgrvtKFw3zuNc%2FGzXSGQUdVBlIvXPmP1vHNIEO1VWKNIoAeKGMdW4WyW2rCnUPee%2BV%2BVoTZRN2PlBytg53Qg2oUgoR48IoJKTRuXxpgkjZdryUWk&X-Amz-Signature=46c66dfe39aa0dc95be7b355bbf46ce94babfc4f83bee85debbc1c524bd29450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFB4IAP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIF3hKZrnXXT2fkNDoCYMB6PCB1lvcjLBBbdybEUFY%2BaKAiAWyVs7BTUXxDTD9Oniqn6gWZ5c2dr9HBFuRDSPXQkFxiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfE%2F3sDRTXfgQajJWKtwDQAHMOTa1oSRprjRFCENKlb5ohnjLErXiQCotQKa24b0yc3T8ImS2sa%2FpbSxIwZ%2F9M97f5i0rInTL27QmPOGreFcyLUZj1LLXbRceWCjmBtqoxB3ikq%2FZwP%2BRgNcMU9XK%2FMDUVYyQyzcLUsGZRbXMMN%2FI3tF6TAjyTtUoOB6gi%2BsC5MVidR8TddCMLMHBoEIGfzjNrxTjX9JgjZWc9wB1bsVbskqU2yS0mndj8Gaq%2BD1unuqVE8CJ9jr0aqpFt3cRS9XK6qiEnwf1WgS7Tsq1pvV5KjRzjS5EVUhoxZGy2yC6F5HwhuihfjI8guOrxnaxrHl6FIwOmQESZswlsbG3jNgPx%2FSOBvevt0iU0jKYAhWt2Zc0NU2jQTro9b6tWP00BW20N%2FmXlQ3Tp05zcVLMFOBRgQ6QaHXoo6wMXVODFbFwHonml5vAMc834h3Qw%2FiP9d5izXaSCRaow6nafLKzb2Syd%2FBZk6stBPuN%2FYGIL8ElurLWjEWOqHmQgKSmp3OYGK8eC%2BB9Ot9%2F68IzvzHL8HQb8KtZckkX4W%2FYGDi9nc6c3%2BWwrt1rsoIUIclIXJV9WrVsJYbnxC0OQy3S1w3LqC2cjJETn5ySlvZv%2FTiLRmIk1uqDDF5cMbtOnCcw9Mq0zAY6pgEI188ZAbuC2Z%2Fj0kzF%2B1uCuypXjjp0948SPc92kebIlIVJDqqYNQqKt3V83cYhfZ%2FdLitORzcbaTsc5Urujym1GzReTfI7QbacJ9tct4p5DRHhLgrvtKFw3zuNc%2FGzXSGQUdVBlIvXPmP1vHNIEO1VWKNIoAeKGMdW4WyW2rCnUPee%2BV%2BVoTZRN2PlBytg53Qg2oUgoR48IoJKTRuXxpgkjZdryUWk&X-Amz-Signature=6c4036ec0b364a940a99a2967fd4c441d68fa202b119c59f02147d37c446b978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFB4IAP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIF3hKZrnXXT2fkNDoCYMB6PCB1lvcjLBBbdybEUFY%2BaKAiAWyVs7BTUXxDTD9Oniqn6gWZ5c2dr9HBFuRDSPXQkFxiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfE%2F3sDRTXfgQajJWKtwDQAHMOTa1oSRprjRFCENKlb5ohnjLErXiQCotQKa24b0yc3T8ImS2sa%2FpbSxIwZ%2F9M97f5i0rInTL27QmPOGreFcyLUZj1LLXbRceWCjmBtqoxB3ikq%2FZwP%2BRgNcMU9XK%2FMDUVYyQyzcLUsGZRbXMMN%2FI3tF6TAjyTtUoOB6gi%2BsC5MVidR8TddCMLMHBoEIGfzjNrxTjX9JgjZWc9wB1bsVbskqU2yS0mndj8Gaq%2BD1unuqVE8CJ9jr0aqpFt3cRS9XK6qiEnwf1WgS7Tsq1pvV5KjRzjS5EVUhoxZGy2yC6F5HwhuihfjI8guOrxnaxrHl6FIwOmQESZswlsbG3jNgPx%2FSOBvevt0iU0jKYAhWt2Zc0NU2jQTro9b6tWP00BW20N%2FmXlQ3Tp05zcVLMFOBRgQ6QaHXoo6wMXVODFbFwHonml5vAMc834h3Qw%2FiP9d5izXaSCRaow6nafLKzb2Syd%2FBZk6stBPuN%2FYGIL8ElurLWjEWOqHmQgKSmp3OYGK8eC%2BB9Ot9%2F68IzvzHL8HQb8KtZckkX4W%2FYGDi9nc6c3%2BWwrt1rsoIUIclIXJV9WrVsJYbnxC0OQy3S1w3LqC2cjJETn5ySlvZv%2FTiLRmIk1uqDDF5cMbtOnCcw9Mq0zAY6pgEI188ZAbuC2Z%2Fj0kzF%2B1uCuypXjjp0948SPc92kebIlIVJDqqYNQqKt3V83cYhfZ%2FdLitORzcbaTsc5Urujym1GzReTfI7QbacJ9tct4p5DRHhLgrvtKFw3zuNc%2FGzXSGQUdVBlIvXPmP1vHNIEO1VWKNIoAeKGMdW4WyW2rCnUPee%2BV%2BVoTZRN2PlBytg53Qg2oUgoR48IoJKTRuXxpgkjZdryUWk&X-Amz-Signature=dcd4f759bdb44c64d1cba99ab301b8e4bd8692dca6a940700b7c02d0ee41b3bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFB4IAP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIF3hKZrnXXT2fkNDoCYMB6PCB1lvcjLBBbdybEUFY%2BaKAiAWyVs7BTUXxDTD9Oniqn6gWZ5c2dr9HBFuRDSPXQkFxiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfE%2F3sDRTXfgQajJWKtwDQAHMOTa1oSRprjRFCENKlb5ohnjLErXiQCotQKa24b0yc3T8ImS2sa%2FpbSxIwZ%2F9M97f5i0rInTL27QmPOGreFcyLUZj1LLXbRceWCjmBtqoxB3ikq%2FZwP%2BRgNcMU9XK%2FMDUVYyQyzcLUsGZRbXMMN%2FI3tF6TAjyTtUoOB6gi%2BsC5MVidR8TddCMLMHBoEIGfzjNrxTjX9JgjZWc9wB1bsVbskqU2yS0mndj8Gaq%2BD1unuqVE8CJ9jr0aqpFt3cRS9XK6qiEnwf1WgS7Tsq1pvV5KjRzjS5EVUhoxZGy2yC6F5HwhuihfjI8guOrxnaxrHl6FIwOmQESZswlsbG3jNgPx%2FSOBvevt0iU0jKYAhWt2Zc0NU2jQTro9b6tWP00BW20N%2FmXlQ3Tp05zcVLMFOBRgQ6QaHXoo6wMXVODFbFwHonml5vAMc834h3Qw%2FiP9d5izXaSCRaow6nafLKzb2Syd%2FBZk6stBPuN%2FYGIL8ElurLWjEWOqHmQgKSmp3OYGK8eC%2BB9Ot9%2F68IzvzHL8HQb8KtZckkX4W%2FYGDi9nc6c3%2BWwrt1rsoIUIclIXJV9WrVsJYbnxC0OQy3S1w3LqC2cjJETn5ySlvZv%2FTiLRmIk1uqDDF5cMbtOnCcw9Mq0zAY6pgEI188ZAbuC2Z%2Fj0kzF%2B1uCuypXjjp0948SPc92kebIlIVJDqqYNQqKt3V83cYhfZ%2FdLitORzcbaTsc5Urujym1GzReTfI7QbacJ9tct4p5DRHhLgrvtKFw3zuNc%2FGzXSGQUdVBlIvXPmP1vHNIEO1VWKNIoAeKGMdW4WyW2rCnUPee%2BV%2BVoTZRN2PlBytg53Qg2oUgoR48IoJKTRuXxpgkjZdryUWk&X-Amz-Signature=caa03203ac3c6223f528b78dd52401ff080c4dbb85552aa5a530edf523dac9ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFB4IAP%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIF3hKZrnXXT2fkNDoCYMB6PCB1lvcjLBBbdybEUFY%2BaKAiAWyVs7BTUXxDTD9Oniqn6gWZ5c2dr9HBFuRDSPXQkFxiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfE%2F3sDRTXfgQajJWKtwDQAHMOTa1oSRprjRFCENKlb5ohnjLErXiQCotQKa24b0yc3T8ImS2sa%2FpbSxIwZ%2F9M97f5i0rInTL27QmPOGreFcyLUZj1LLXbRceWCjmBtqoxB3ikq%2FZwP%2BRgNcMU9XK%2FMDUVYyQyzcLUsGZRbXMMN%2FI3tF6TAjyTtUoOB6gi%2BsC5MVidR8TddCMLMHBoEIGfzjNrxTjX9JgjZWc9wB1bsVbskqU2yS0mndj8Gaq%2BD1unuqVE8CJ9jr0aqpFt3cRS9XK6qiEnwf1WgS7Tsq1pvV5KjRzjS5EVUhoxZGy2yC6F5HwhuihfjI8guOrxnaxrHl6FIwOmQESZswlsbG3jNgPx%2FSOBvevt0iU0jKYAhWt2Zc0NU2jQTro9b6tWP00BW20N%2FmXlQ3Tp05zcVLMFOBRgQ6QaHXoo6wMXVODFbFwHonml5vAMc834h3Qw%2FiP9d5izXaSCRaow6nafLKzb2Syd%2FBZk6stBPuN%2FYGIL8ElurLWjEWOqHmQgKSmp3OYGK8eC%2BB9Ot9%2F68IzvzHL8HQb8KtZckkX4W%2FYGDi9nc6c3%2BWwrt1rsoIUIclIXJV9WrVsJYbnxC0OQy3S1w3LqC2cjJETn5ySlvZv%2FTiLRmIk1uqDDF5cMbtOnCcw9Mq0zAY6pgEI188ZAbuC2Z%2Fj0kzF%2B1uCuypXjjp0948SPc92kebIlIVJDqqYNQqKt3V83cYhfZ%2FdLitORzcbaTsc5Urujym1GzReTfI7QbacJ9tct4p5DRHhLgrvtKFw3zuNc%2FGzXSGQUdVBlIvXPmP1vHNIEO1VWKNIoAeKGMdW4WyW2rCnUPee%2BV%2BVoTZRN2PlBytg53Qg2oUgoR48IoJKTRuXxpgkjZdryUWk&X-Amz-Signature=d4898f0100d773eb9baf01c4554eef8085ec1bafd0d8599659a4cd68f719d664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
