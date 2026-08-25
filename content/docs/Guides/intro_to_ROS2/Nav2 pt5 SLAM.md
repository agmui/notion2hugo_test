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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGPHWWJ%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCSnI7tMGp8W%2FdOg1Ywa6t2J4dIeOaCBV3GBiNIkxSovAIgJbGerH0EWVEW1LYqOev6YpLoEAIsp7wvGlTCppUpyTwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuoNoZQHGuM3dvwVCrcA3SKAE9AO6xeDM2KatojU1jLFgCW4RaSGzulzzbAJTqTO7kAvhaAQlZm%2BfN%2BzHTc9UjJt6q7JmFdYARdYR0IleAVjw%2BVBLVSVof%2FRo4ooM%2FJ0SP5%2F7UYLQNIvG%2B%2F2EjZs9Kl8WeyxQKuwVGtdeOJjcmYAMO%2F8J%2FMjYzpQGaIbbiN6OdEwII6VPVOF5K%2FMskPIEquqeRaYxR83cP2LTmTBClH3fw0HvXull15tkxAaM%2FhBD9Gs3ReCCWw1UJDcx2RmB707M5xX49dkCGvW8ikVAtk%2FaiV7qcD%2BmFykePncXZvT%2F0PMjagHBvv2zL7np%2Bl9IrWK%2BxaLmaDqmNjloR6DnDhiLBCDYV3c48T%2FGHS5IFAMxXkknkM4x5zp52qrFt%2FSeTPDQnTa7SOqSHUrdlIDf5rRzfDrQPBBLSst8KmWJ2YVlshUIBh%2F3hfkghVWWA3z8sAcxu38DB44%2BPWdoYMLaR0KpJJLQIFFntBu4Z9xHAFvECZ79yMWQF8q8DekUM8pA%2BCQznlrn7tt6CbcB49lppFm%2FzXvqWz9rV%2F%2Fw%2FV0qLJERK2kiRrVLinfYbQS2N94W6UNAW7uiICGDFEcNG9GXfg%2FDEbD32ORG7ATfkHjsu74upo8xy%2BVbhHPbGeMLXRs9QGOqUBfaaMFj1Xf%2BledQ1e1S4EciFR0Ekfg4dIl0IS5KkyOEnvWMmywSLWRi%2B8RRsEJ4PglP6f4TQJDYzkc2tg4mGC4J9okklpno69plbw5%2BFBuhwdxMaJE1qFG41DYlhoVKB%2Bzvdm8GsrkBYFKqlB88FscnDXuS5IdxoBem1TEp%2F1tS0LX2bK1rRjECyzgD2MBF2M8eVqrOv7E01%2BFNnRh3SnjOThrGpC&X-Amz-Signature=d6f02fb1cd78dfea27425ab65cc0bf1d688a8617110092781390388c700743ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGPHWWJ%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCSnI7tMGp8W%2FdOg1Ywa6t2J4dIeOaCBV3GBiNIkxSovAIgJbGerH0EWVEW1LYqOev6YpLoEAIsp7wvGlTCppUpyTwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuoNoZQHGuM3dvwVCrcA3SKAE9AO6xeDM2KatojU1jLFgCW4RaSGzulzzbAJTqTO7kAvhaAQlZm%2BfN%2BzHTc9UjJt6q7JmFdYARdYR0IleAVjw%2BVBLVSVof%2FRo4ooM%2FJ0SP5%2F7UYLQNIvG%2B%2F2EjZs9Kl8WeyxQKuwVGtdeOJjcmYAMO%2F8J%2FMjYzpQGaIbbiN6OdEwII6VPVOF5K%2FMskPIEquqeRaYxR83cP2LTmTBClH3fw0HvXull15tkxAaM%2FhBD9Gs3ReCCWw1UJDcx2RmB707M5xX49dkCGvW8ikVAtk%2FaiV7qcD%2BmFykePncXZvT%2F0PMjagHBvv2zL7np%2Bl9IrWK%2BxaLmaDqmNjloR6DnDhiLBCDYV3c48T%2FGHS5IFAMxXkknkM4x5zp52qrFt%2FSeTPDQnTa7SOqSHUrdlIDf5rRzfDrQPBBLSst8KmWJ2YVlshUIBh%2F3hfkghVWWA3z8sAcxu38DB44%2BPWdoYMLaR0KpJJLQIFFntBu4Z9xHAFvECZ79yMWQF8q8DekUM8pA%2BCQznlrn7tt6CbcB49lppFm%2FzXvqWz9rV%2F%2Fw%2FV0qLJERK2kiRrVLinfYbQS2N94W6UNAW7uiICGDFEcNG9GXfg%2FDEbD32ORG7ATfkHjsu74upo8xy%2BVbhHPbGeMLXRs9QGOqUBfaaMFj1Xf%2BledQ1e1S4EciFR0Ekfg4dIl0IS5KkyOEnvWMmywSLWRi%2B8RRsEJ4PglP6f4TQJDYzkc2tg4mGC4J9okklpno69plbw5%2BFBuhwdxMaJE1qFG41DYlhoVKB%2Bzvdm8GsrkBYFKqlB88FscnDXuS5IdxoBem1TEp%2F1tS0LX2bK1rRjECyzgD2MBF2M8eVqrOv7E01%2BFNnRh3SnjOThrGpC&X-Amz-Signature=3a2b10a870d2128a8b8e42a848fa315f2c9c661e710c0aa2a31036db19b62438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGPHWWJ%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCSnI7tMGp8W%2FdOg1Ywa6t2J4dIeOaCBV3GBiNIkxSovAIgJbGerH0EWVEW1LYqOev6YpLoEAIsp7wvGlTCppUpyTwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuoNoZQHGuM3dvwVCrcA3SKAE9AO6xeDM2KatojU1jLFgCW4RaSGzulzzbAJTqTO7kAvhaAQlZm%2BfN%2BzHTc9UjJt6q7JmFdYARdYR0IleAVjw%2BVBLVSVof%2FRo4ooM%2FJ0SP5%2F7UYLQNIvG%2B%2F2EjZs9Kl8WeyxQKuwVGtdeOJjcmYAMO%2F8J%2FMjYzpQGaIbbiN6OdEwII6VPVOF5K%2FMskPIEquqeRaYxR83cP2LTmTBClH3fw0HvXull15tkxAaM%2FhBD9Gs3ReCCWw1UJDcx2RmB707M5xX49dkCGvW8ikVAtk%2FaiV7qcD%2BmFykePncXZvT%2F0PMjagHBvv2zL7np%2Bl9IrWK%2BxaLmaDqmNjloR6DnDhiLBCDYV3c48T%2FGHS5IFAMxXkknkM4x5zp52qrFt%2FSeTPDQnTa7SOqSHUrdlIDf5rRzfDrQPBBLSst8KmWJ2YVlshUIBh%2F3hfkghVWWA3z8sAcxu38DB44%2BPWdoYMLaR0KpJJLQIFFntBu4Z9xHAFvECZ79yMWQF8q8DekUM8pA%2BCQznlrn7tt6CbcB49lppFm%2FzXvqWz9rV%2F%2Fw%2FV0qLJERK2kiRrVLinfYbQS2N94W6UNAW7uiICGDFEcNG9GXfg%2FDEbD32ORG7ATfkHjsu74upo8xy%2BVbhHPbGeMLXRs9QGOqUBfaaMFj1Xf%2BledQ1e1S4EciFR0Ekfg4dIl0IS5KkyOEnvWMmywSLWRi%2B8RRsEJ4PglP6f4TQJDYzkc2tg4mGC4J9okklpno69plbw5%2BFBuhwdxMaJE1qFG41DYlhoVKB%2Bzvdm8GsrkBYFKqlB88FscnDXuS5IdxoBem1TEp%2F1tS0LX2bK1rRjECyzgD2MBF2M8eVqrOv7E01%2BFNnRh3SnjOThrGpC&X-Amz-Signature=2ceef029bab2ddcf9ebb3956459b314930c537ed0eb122bc6bcd47a16e2526d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGPHWWJ%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCSnI7tMGp8W%2FdOg1Ywa6t2J4dIeOaCBV3GBiNIkxSovAIgJbGerH0EWVEW1LYqOev6YpLoEAIsp7wvGlTCppUpyTwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuoNoZQHGuM3dvwVCrcA3SKAE9AO6xeDM2KatojU1jLFgCW4RaSGzulzzbAJTqTO7kAvhaAQlZm%2BfN%2BzHTc9UjJt6q7JmFdYARdYR0IleAVjw%2BVBLVSVof%2FRo4ooM%2FJ0SP5%2F7UYLQNIvG%2B%2F2EjZs9Kl8WeyxQKuwVGtdeOJjcmYAMO%2F8J%2FMjYzpQGaIbbiN6OdEwII6VPVOF5K%2FMskPIEquqeRaYxR83cP2LTmTBClH3fw0HvXull15tkxAaM%2FhBD9Gs3ReCCWw1UJDcx2RmB707M5xX49dkCGvW8ikVAtk%2FaiV7qcD%2BmFykePncXZvT%2F0PMjagHBvv2zL7np%2Bl9IrWK%2BxaLmaDqmNjloR6DnDhiLBCDYV3c48T%2FGHS5IFAMxXkknkM4x5zp52qrFt%2FSeTPDQnTa7SOqSHUrdlIDf5rRzfDrQPBBLSst8KmWJ2YVlshUIBh%2F3hfkghVWWA3z8sAcxu38DB44%2BPWdoYMLaR0KpJJLQIFFntBu4Z9xHAFvECZ79yMWQF8q8DekUM8pA%2BCQznlrn7tt6CbcB49lppFm%2FzXvqWz9rV%2F%2Fw%2FV0qLJERK2kiRrVLinfYbQS2N94W6UNAW7uiICGDFEcNG9GXfg%2FDEbD32ORG7ATfkHjsu74upo8xy%2BVbhHPbGeMLXRs9QGOqUBfaaMFj1Xf%2BledQ1e1S4EciFR0Ekfg4dIl0IS5KkyOEnvWMmywSLWRi%2B8RRsEJ4PglP6f4TQJDYzkc2tg4mGC4J9okklpno69plbw5%2BFBuhwdxMaJE1qFG41DYlhoVKB%2Bzvdm8GsrkBYFKqlB88FscnDXuS5IdxoBem1TEp%2F1tS0LX2bK1rRjECyzgD2MBF2M8eVqrOv7E01%2BFNnRh3SnjOThrGpC&X-Amz-Signature=21443420b906c8ce5176c7afb1a1cb7df9fe0fd138b84ffc34d6acf538b67587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGPHWWJ%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCSnI7tMGp8W%2FdOg1Ywa6t2J4dIeOaCBV3GBiNIkxSovAIgJbGerH0EWVEW1LYqOev6YpLoEAIsp7wvGlTCppUpyTwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuoNoZQHGuM3dvwVCrcA3SKAE9AO6xeDM2KatojU1jLFgCW4RaSGzulzzbAJTqTO7kAvhaAQlZm%2BfN%2BzHTc9UjJt6q7JmFdYARdYR0IleAVjw%2BVBLVSVof%2FRo4ooM%2FJ0SP5%2F7UYLQNIvG%2B%2F2EjZs9Kl8WeyxQKuwVGtdeOJjcmYAMO%2F8J%2FMjYzpQGaIbbiN6OdEwII6VPVOF5K%2FMskPIEquqeRaYxR83cP2LTmTBClH3fw0HvXull15tkxAaM%2FhBD9Gs3ReCCWw1UJDcx2RmB707M5xX49dkCGvW8ikVAtk%2FaiV7qcD%2BmFykePncXZvT%2F0PMjagHBvv2zL7np%2Bl9IrWK%2BxaLmaDqmNjloR6DnDhiLBCDYV3c48T%2FGHS5IFAMxXkknkM4x5zp52qrFt%2FSeTPDQnTa7SOqSHUrdlIDf5rRzfDrQPBBLSst8KmWJ2YVlshUIBh%2F3hfkghVWWA3z8sAcxu38DB44%2BPWdoYMLaR0KpJJLQIFFntBu4Z9xHAFvECZ79yMWQF8q8DekUM8pA%2BCQznlrn7tt6CbcB49lppFm%2FzXvqWz9rV%2F%2Fw%2FV0qLJERK2kiRrVLinfYbQS2N94W6UNAW7uiICGDFEcNG9GXfg%2FDEbD32ORG7ATfkHjsu74upo8xy%2BVbhHPbGeMLXRs9QGOqUBfaaMFj1Xf%2BledQ1e1S4EciFR0Ekfg4dIl0IS5KkyOEnvWMmywSLWRi%2B8RRsEJ4PglP6f4TQJDYzkc2tg4mGC4J9okklpno69plbw5%2BFBuhwdxMaJE1qFG41DYlhoVKB%2Bzvdm8GsrkBYFKqlB88FscnDXuS5IdxoBem1TEp%2F1tS0LX2bK1rRjECyzgD2MBF2M8eVqrOv7E01%2BFNnRh3SnjOThrGpC&X-Amz-Signature=4efd0128657dc883d57a945b54b86b9aa56cd486260c57e29a6a3600ebd4bb08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGPHWWJ%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCSnI7tMGp8W%2FdOg1Ywa6t2J4dIeOaCBV3GBiNIkxSovAIgJbGerH0EWVEW1LYqOev6YpLoEAIsp7wvGlTCppUpyTwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuoNoZQHGuM3dvwVCrcA3SKAE9AO6xeDM2KatojU1jLFgCW4RaSGzulzzbAJTqTO7kAvhaAQlZm%2BfN%2BzHTc9UjJt6q7JmFdYARdYR0IleAVjw%2BVBLVSVof%2FRo4ooM%2FJ0SP5%2F7UYLQNIvG%2B%2F2EjZs9Kl8WeyxQKuwVGtdeOJjcmYAMO%2F8J%2FMjYzpQGaIbbiN6OdEwII6VPVOF5K%2FMskPIEquqeRaYxR83cP2LTmTBClH3fw0HvXull15tkxAaM%2FhBD9Gs3ReCCWw1UJDcx2RmB707M5xX49dkCGvW8ikVAtk%2FaiV7qcD%2BmFykePncXZvT%2F0PMjagHBvv2zL7np%2Bl9IrWK%2BxaLmaDqmNjloR6DnDhiLBCDYV3c48T%2FGHS5IFAMxXkknkM4x5zp52qrFt%2FSeTPDQnTa7SOqSHUrdlIDf5rRzfDrQPBBLSst8KmWJ2YVlshUIBh%2F3hfkghVWWA3z8sAcxu38DB44%2BPWdoYMLaR0KpJJLQIFFntBu4Z9xHAFvECZ79yMWQF8q8DekUM8pA%2BCQznlrn7tt6CbcB49lppFm%2FzXvqWz9rV%2F%2Fw%2FV0qLJERK2kiRrVLinfYbQS2N94W6UNAW7uiICGDFEcNG9GXfg%2FDEbD32ORG7ATfkHjsu74upo8xy%2BVbhHPbGeMLXRs9QGOqUBfaaMFj1Xf%2BledQ1e1S4EciFR0Ekfg4dIl0IS5KkyOEnvWMmywSLWRi%2B8RRsEJ4PglP6f4TQJDYzkc2tg4mGC4J9okklpno69plbw5%2BFBuhwdxMaJE1qFG41DYlhoVKB%2Bzvdm8GsrkBYFKqlB88FscnDXuS5IdxoBem1TEp%2F1tS0LX2bK1rRjECyzgD2MBF2M8eVqrOv7E01%2BFNnRh3SnjOThrGpC&X-Amz-Signature=5eb97c47b875eba387096485cabb4b10acbe7fbf8b492cc9e9ca59979848a49e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGPHWWJ%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCSnI7tMGp8W%2FdOg1Ywa6t2J4dIeOaCBV3GBiNIkxSovAIgJbGerH0EWVEW1LYqOev6YpLoEAIsp7wvGlTCppUpyTwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuoNoZQHGuM3dvwVCrcA3SKAE9AO6xeDM2KatojU1jLFgCW4RaSGzulzzbAJTqTO7kAvhaAQlZm%2BfN%2BzHTc9UjJt6q7JmFdYARdYR0IleAVjw%2BVBLVSVof%2FRo4ooM%2FJ0SP5%2F7UYLQNIvG%2B%2F2EjZs9Kl8WeyxQKuwVGtdeOJjcmYAMO%2F8J%2FMjYzpQGaIbbiN6OdEwII6VPVOF5K%2FMskPIEquqeRaYxR83cP2LTmTBClH3fw0HvXull15tkxAaM%2FhBD9Gs3ReCCWw1UJDcx2RmB707M5xX49dkCGvW8ikVAtk%2FaiV7qcD%2BmFykePncXZvT%2F0PMjagHBvv2zL7np%2Bl9IrWK%2BxaLmaDqmNjloR6DnDhiLBCDYV3c48T%2FGHS5IFAMxXkknkM4x5zp52qrFt%2FSeTPDQnTa7SOqSHUrdlIDf5rRzfDrQPBBLSst8KmWJ2YVlshUIBh%2F3hfkghVWWA3z8sAcxu38DB44%2BPWdoYMLaR0KpJJLQIFFntBu4Z9xHAFvECZ79yMWQF8q8DekUM8pA%2BCQznlrn7tt6CbcB49lppFm%2FzXvqWz9rV%2F%2Fw%2FV0qLJERK2kiRrVLinfYbQS2N94W6UNAW7uiICGDFEcNG9GXfg%2FDEbD32ORG7ATfkHjsu74upo8xy%2BVbhHPbGeMLXRs9QGOqUBfaaMFj1Xf%2BledQ1e1S4EciFR0Ekfg4dIl0IS5KkyOEnvWMmywSLWRi%2B8RRsEJ4PglP6f4TQJDYzkc2tg4mGC4J9okklpno69plbw5%2BFBuhwdxMaJE1qFG41DYlhoVKB%2Bzvdm8GsrkBYFKqlB88FscnDXuS5IdxoBem1TEp%2F1tS0LX2bK1rRjECyzgD2MBF2M8eVqrOv7E01%2BFNnRh3SnjOThrGpC&X-Amz-Signature=7495650e8625f361621806cc39f20a5e14d1cd8f28eba689af38226c1e8504b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGPHWWJ%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCSnI7tMGp8W%2FdOg1Ywa6t2J4dIeOaCBV3GBiNIkxSovAIgJbGerH0EWVEW1LYqOev6YpLoEAIsp7wvGlTCppUpyTwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuoNoZQHGuM3dvwVCrcA3SKAE9AO6xeDM2KatojU1jLFgCW4RaSGzulzzbAJTqTO7kAvhaAQlZm%2BfN%2BzHTc9UjJt6q7JmFdYARdYR0IleAVjw%2BVBLVSVof%2FRo4ooM%2FJ0SP5%2F7UYLQNIvG%2B%2F2EjZs9Kl8WeyxQKuwVGtdeOJjcmYAMO%2F8J%2FMjYzpQGaIbbiN6OdEwII6VPVOF5K%2FMskPIEquqeRaYxR83cP2LTmTBClH3fw0HvXull15tkxAaM%2FhBD9Gs3ReCCWw1UJDcx2RmB707M5xX49dkCGvW8ikVAtk%2FaiV7qcD%2BmFykePncXZvT%2F0PMjagHBvv2zL7np%2Bl9IrWK%2BxaLmaDqmNjloR6DnDhiLBCDYV3c48T%2FGHS5IFAMxXkknkM4x5zp52qrFt%2FSeTPDQnTa7SOqSHUrdlIDf5rRzfDrQPBBLSst8KmWJ2YVlshUIBh%2F3hfkghVWWA3z8sAcxu38DB44%2BPWdoYMLaR0KpJJLQIFFntBu4Z9xHAFvECZ79yMWQF8q8DekUM8pA%2BCQznlrn7tt6CbcB49lppFm%2FzXvqWz9rV%2F%2Fw%2FV0qLJERK2kiRrVLinfYbQS2N94W6UNAW7uiICGDFEcNG9GXfg%2FDEbD32ORG7ATfkHjsu74upo8xy%2BVbhHPbGeMLXRs9QGOqUBfaaMFj1Xf%2BledQ1e1S4EciFR0Ekfg4dIl0IS5KkyOEnvWMmywSLWRi%2B8RRsEJ4PglP6f4TQJDYzkc2tg4mGC4J9okklpno69plbw5%2BFBuhwdxMaJE1qFG41DYlhoVKB%2Bzvdm8GsrkBYFKqlB88FscnDXuS5IdxoBem1TEp%2F1tS0LX2bK1rRjECyzgD2MBF2M8eVqrOv7E01%2BFNnRh3SnjOThrGpC&X-Amz-Signature=c116cc2e3f592877c2295ade37215b79b2ab67be3d89cb6ba51e804c97f6907a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGPHWWJ%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCSnI7tMGp8W%2FdOg1Ywa6t2J4dIeOaCBV3GBiNIkxSovAIgJbGerH0EWVEW1LYqOev6YpLoEAIsp7wvGlTCppUpyTwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuoNoZQHGuM3dvwVCrcA3SKAE9AO6xeDM2KatojU1jLFgCW4RaSGzulzzbAJTqTO7kAvhaAQlZm%2BfN%2BzHTc9UjJt6q7JmFdYARdYR0IleAVjw%2BVBLVSVof%2FRo4ooM%2FJ0SP5%2F7UYLQNIvG%2B%2F2EjZs9Kl8WeyxQKuwVGtdeOJjcmYAMO%2F8J%2FMjYzpQGaIbbiN6OdEwII6VPVOF5K%2FMskPIEquqeRaYxR83cP2LTmTBClH3fw0HvXull15tkxAaM%2FhBD9Gs3ReCCWw1UJDcx2RmB707M5xX49dkCGvW8ikVAtk%2FaiV7qcD%2BmFykePncXZvT%2F0PMjagHBvv2zL7np%2Bl9IrWK%2BxaLmaDqmNjloR6DnDhiLBCDYV3c48T%2FGHS5IFAMxXkknkM4x5zp52qrFt%2FSeTPDQnTa7SOqSHUrdlIDf5rRzfDrQPBBLSst8KmWJ2YVlshUIBh%2F3hfkghVWWA3z8sAcxu38DB44%2BPWdoYMLaR0KpJJLQIFFntBu4Z9xHAFvECZ79yMWQF8q8DekUM8pA%2BCQznlrn7tt6CbcB49lppFm%2FzXvqWz9rV%2F%2Fw%2FV0qLJERK2kiRrVLinfYbQS2N94W6UNAW7uiICGDFEcNG9GXfg%2FDEbD32ORG7ATfkHjsu74upo8xy%2BVbhHPbGeMLXRs9QGOqUBfaaMFj1Xf%2BledQ1e1S4EciFR0Ekfg4dIl0IS5KkyOEnvWMmywSLWRi%2B8RRsEJ4PglP6f4TQJDYzkc2tg4mGC4J9okklpno69plbw5%2BFBuhwdxMaJE1qFG41DYlhoVKB%2Bzvdm8GsrkBYFKqlB88FscnDXuS5IdxoBem1TEp%2F1tS0LX2bK1rRjECyzgD2MBF2M8eVqrOv7E01%2BFNnRh3SnjOThrGpC&X-Amz-Signature=732ec5152da78b932abed67daa9b53a4fdcb90236fafd213085f8e8c0371247e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGPHWWJ%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCSnI7tMGp8W%2FdOg1Ywa6t2J4dIeOaCBV3GBiNIkxSovAIgJbGerH0EWVEW1LYqOev6YpLoEAIsp7wvGlTCppUpyTwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuoNoZQHGuM3dvwVCrcA3SKAE9AO6xeDM2KatojU1jLFgCW4RaSGzulzzbAJTqTO7kAvhaAQlZm%2BfN%2BzHTc9UjJt6q7JmFdYARdYR0IleAVjw%2BVBLVSVof%2FRo4ooM%2FJ0SP5%2F7UYLQNIvG%2B%2F2EjZs9Kl8WeyxQKuwVGtdeOJjcmYAMO%2F8J%2FMjYzpQGaIbbiN6OdEwII6VPVOF5K%2FMskPIEquqeRaYxR83cP2LTmTBClH3fw0HvXull15tkxAaM%2FhBD9Gs3ReCCWw1UJDcx2RmB707M5xX49dkCGvW8ikVAtk%2FaiV7qcD%2BmFykePncXZvT%2F0PMjagHBvv2zL7np%2Bl9IrWK%2BxaLmaDqmNjloR6DnDhiLBCDYV3c48T%2FGHS5IFAMxXkknkM4x5zp52qrFt%2FSeTPDQnTa7SOqSHUrdlIDf5rRzfDrQPBBLSst8KmWJ2YVlshUIBh%2F3hfkghVWWA3z8sAcxu38DB44%2BPWdoYMLaR0KpJJLQIFFntBu4Z9xHAFvECZ79yMWQF8q8DekUM8pA%2BCQznlrn7tt6CbcB49lppFm%2FzXvqWz9rV%2F%2Fw%2FV0qLJERK2kiRrVLinfYbQS2N94W6UNAW7uiICGDFEcNG9GXfg%2FDEbD32ORG7ATfkHjsu74upo8xy%2BVbhHPbGeMLXRs9QGOqUBfaaMFj1Xf%2BledQ1e1S4EciFR0Ekfg4dIl0IS5KkyOEnvWMmywSLWRi%2B8RRsEJ4PglP6f4TQJDYzkc2tg4mGC4J9okklpno69plbw5%2BFBuhwdxMaJE1qFG41DYlhoVKB%2Bzvdm8GsrkBYFKqlB88FscnDXuS5IdxoBem1TEp%2F1tS0LX2bK1rRjECyzgD2MBF2M8eVqrOv7E01%2BFNnRh3SnjOThrGpC&X-Amz-Signature=a3d2ee287a7b1a200a1f881e6476eaf5f10f9344ab01af2f7b33d239a0d828f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGPHWWJ%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCSnI7tMGp8W%2FdOg1Ywa6t2J4dIeOaCBV3GBiNIkxSovAIgJbGerH0EWVEW1LYqOev6YpLoEAIsp7wvGlTCppUpyTwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuoNoZQHGuM3dvwVCrcA3SKAE9AO6xeDM2KatojU1jLFgCW4RaSGzulzzbAJTqTO7kAvhaAQlZm%2BfN%2BzHTc9UjJt6q7JmFdYARdYR0IleAVjw%2BVBLVSVof%2FRo4ooM%2FJ0SP5%2F7UYLQNIvG%2B%2F2EjZs9Kl8WeyxQKuwVGtdeOJjcmYAMO%2F8J%2FMjYzpQGaIbbiN6OdEwII6VPVOF5K%2FMskPIEquqeRaYxR83cP2LTmTBClH3fw0HvXull15tkxAaM%2FhBD9Gs3ReCCWw1UJDcx2RmB707M5xX49dkCGvW8ikVAtk%2FaiV7qcD%2BmFykePncXZvT%2F0PMjagHBvv2zL7np%2Bl9IrWK%2BxaLmaDqmNjloR6DnDhiLBCDYV3c48T%2FGHS5IFAMxXkknkM4x5zp52qrFt%2FSeTPDQnTa7SOqSHUrdlIDf5rRzfDrQPBBLSst8KmWJ2YVlshUIBh%2F3hfkghVWWA3z8sAcxu38DB44%2BPWdoYMLaR0KpJJLQIFFntBu4Z9xHAFvECZ79yMWQF8q8DekUM8pA%2BCQznlrn7tt6CbcB49lppFm%2FzXvqWz9rV%2F%2Fw%2FV0qLJERK2kiRrVLinfYbQS2N94W6UNAW7uiICGDFEcNG9GXfg%2FDEbD32ORG7ATfkHjsu74upo8xy%2BVbhHPbGeMLXRs9QGOqUBfaaMFj1Xf%2BledQ1e1S4EciFR0Ekfg4dIl0IS5KkyOEnvWMmywSLWRi%2B8RRsEJ4PglP6f4TQJDYzkc2tg4mGC4J9okklpno69plbw5%2BFBuhwdxMaJE1qFG41DYlhoVKB%2Bzvdm8GsrkBYFKqlB88FscnDXuS5IdxoBem1TEp%2F1tS0LX2bK1rRjECyzgD2MBF2M8eVqrOv7E01%2BFNnRh3SnjOThrGpC&X-Amz-Signature=60f7ddce07d4726cd9f08de832473298477984edc146af4c7b5438614fb9a6e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGPHWWJ%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCSnI7tMGp8W%2FdOg1Ywa6t2J4dIeOaCBV3GBiNIkxSovAIgJbGerH0EWVEW1LYqOev6YpLoEAIsp7wvGlTCppUpyTwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuoNoZQHGuM3dvwVCrcA3SKAE9AO6xeDM2KatojU1jLFgCW4RaSGzulzzbAJTqTO7kAvhaAQlZm%2BfN%2BzHTc9UjJt6q7JmFdYARdYR0IleAVjw%2BVBLVSVof%2FRo4ooM%2FJ0SP5%2F7UYLQNIvG%2B%2F2EjZs9Kl8WeyxQKuwVGtdeOJjcmYAMO%2F8J%2FMjYzpQGaIbbiN6OdEwII6VPVOF5K%2FMskPIEquqeRaYxR83cP2LTmTBClH3fw0HvXull15tkxAaM%2FhBD9Gs3ReCCWw1UJDcx2RmB707M5xX49dkCGvW8ikVAtk%2FaiV7qcD%2BmFykePncXZvT%2F0PMjagHBvv2zL7np%2Bl9IrWK%2BxaLmaDqmNjloR6DnDhiLBCDYV3c48T%2FGHS5IFAMxXkknkM4x5zp52qrFt%2FSeTPDQnTa7SOqSHUrdlIDf5rRzfDrQPBBLSst8KmWJ2YVlshUIBh%2F3hfkghVWWA3z8sAcxu38DB44%2BPWdoYMLaR0KpJJLQIFFntBu4Z9xHAFvECZ79yMWQF8q8DekUM8pA%2BCQznlrn7tt6CbcB49lppFm%2FzXvqWz9rV%2F%2Fw%2FV0qLJERK2kiRrVLinfYbQS2N94W6UNAW7uiICGDFEcNG9GXfg%2FDEbD32ORG7ATfkHjsu74upo8xy%2BVbhHPbGeMLXRs9QGOqUBfaaMFj1Xf%2BledQ1e1S4EciFR0Ekfg4dIl0IS5KkyOEnvWMmywSLWRi%2B8RRsEJ4PglP6f4TQJDYzkc2tg4mGC4J9okklpno69plbw5%2BFBuhwdxMaJE1qFG41DYlhoVKB%2Bzvdm8GsrkBYFKqlB88FscnDXuS5IdxoBem1TEp%2F1tS0LX2bK1rRjECyzgD2MBF2M8eVqrOv7E01%2BFNnRh3SnjOThrGpC&X-Amz-Signature=e88160ac2506ab1e7c1e1e27700e6cfe0c75844e11b4a979bb2fcd8669030717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGPHWWJ%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCSnI7tMGp8W%2FdOg1Ywa6t2J4dIeOaCBV3GBiNIkxSovAIgJbGerH0EWVEW1LYqOev6YpLoEAIsp7wvGlTCppUpyTwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuoNoZQHGuM3dvwVCrcA3SKAE9AO6xeDM2KatojU1jLFgCW4RaSGzulzzbAJTqTO7kAvhaAQlZm%2BfN%2BzHTc9UjJt6q7JmFdYARdYR0IleAVjw%2BVBLVSVof%2FRo4ooM%2FJ0SP5%2F7UYLQNIvG%2B%2F2EjZs9Kl8WeyxQKuwVGtdeOJjcmYAMO%2F8J%2FMjYzpQGaIbbiN6OdEwII6VPVOF5K%2FMskPIEquqeRaYxR83cP2LTmTBClH3fw0HvXull15tkxAaM%2FhBD9Gs3ReCCWw1UJDcx2RmB707M5xX49dkCGvW8ikVAtk%2FaiV7qcD%2BmFykePncXZvT%2F0PMjagHBvv2zL7np%2Bl9IrWK%2BxaLmaDqmNjloR6DnDhiLBCDYV3c48T%2FGHS5IFAMxXkknkM4x5zp52qrFt%2FSeTPDQnTa7SOqSHUrdlIDf5rRzfDrQPBBLSst8KmWJ2YVlshUIBh%2F3hfkghVWWA3z8sAcxu38DB44%2BPWdoYMLaR0KpJJLQIFFntBu4Z9xHAFvECZ79yMWQF8q8DekUM8pA%2BCQznlrn7tt6CbcB49lppFm%2FzXvqWz9rV%2F%2Fw%2FV0qLJERK2kiRrVLinfYbQS2N94W6UNAW7uiICGDFEcNG9GXfg%2FDEbD32ORG7ATfkHjsu74upo8xy%2BVbhHPbGeMLXRs9QGOqUBfaaMFj1Xf%2BledQ1e1S4EciFR0Ekfg4dIl0IS5KkyOEnvWMmywSLWRi%2B8RRsEJ4PglP6f4TQJDYzkc2tg4mGC4J9okklpno69plbw5%2BFBuhwdxMaJE1qFG41DYlhoVKB%2Bzvdm8GsrkBYFKqlB88FscnDXuS5IdxoBem1TEp%2F1tS0LX2bK1rRjECyzgD2MBF2M8eVqrOv7E01%2BFNnRh3SnjOThrGpC&X-Amz-Signature=3135bd55645260cdb4aeb50133c81f9023aed89c2b5e06c12bb622608b52e884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGPHWWJ%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCSnI7tMGp8W%2FdOg1Ywa6t2J4dIeOaCBV3GBiNIkxSovAIgJbGerH0EWVEW1LYqOev6YpLoEAIsp7wvGlTCppUpyTwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuoNoZQHGuM3dvwVCrcA3SKAE9AO6xeDM2KatojU1jLFgCW4RaSGzulzzbAJTqTO7kAvhaAQlZm%2BfN%2BzHTc9UjJt6q7JmFdYARdYR0IleAVjw%2BVBLVSVof%2FRo4ooM%2FJ0SP5%2F7UYLQNIvG%2B%2F2EjZs9Kl8WeyxQKuwVGtdeOJjcmYAMO%2F8J%2FMjYzpQGaIbbiN6OdEwII6VPVOF5K%2FMskPIEquqeRaYxR83cP2LTmTBClH3fw0HvXull15tkxAaM%2FhBD9Gs3ReCCWw1UJDcx2RmB707M5xX49dkCGvW8ikVAtk%2FaiV7qcD%2BmFykePncXZvT%2F0PMjagHBvv2zL7np%2Bl9IrWK%2BxaLmaDqmNjloR6DnDhiLBCDYV3c48T%2FGHS5IFAMxXkknkM4x5zp52qrFt%2FSeTPDQnTa7SOqSHUrdlIDf5rRzfDrQPBBLSst8KmWJ2YVlshUIBh%2F3hfkghVWWA3z8sAcxu38DB44%2BPWdoYMLaR0KpJJLQIFFntBu4Z9xHAFvECZ79yMWQF8q8DekUM8pA%2BCQznlrn7tt6CbcB49lppFm%2FzXvqWz9rV%2F%2Fw%2FV0qLJERK2kiRrVLinfYbQS2N94W6UNAW7uiICGDFEcNG9GXfg%2FDEbD32ORG7ATfkHjsu74upo8xy%2BVbhHPbGeMLXRs9QGOqUBfaaMFj1Xf%2BledQ1e1S4EciFR0Ekfg4dIl0IS5KkyOEnvWMmywSLWRi%2B8RRsEJ4PglP6f4TQJDYzkc2tg4mGC4J9okklpno69plbw5%2BFBuhwdxMaJE1qFG41DYlhoVKB%2Bzvdm8GsrkBYFKqlB88FscnDXuS5IdxoBem1TEp%2F1tS0LX2bK1rRjECyzgD2MBF2M8eVqrOv7E01%2BFNnRh3SnjOThrGpC&X-Amz-Signature=91f3e74da421695b0b1058718cbbc675e95f320be719d2f5c9ea96b3bb2f711b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
