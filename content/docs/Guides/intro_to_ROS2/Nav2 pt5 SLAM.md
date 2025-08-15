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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNNQPZC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCIpim%2FKmfQyIT5f2Mus0tg0SDFZj8Gny2x3RZb8QbTngIgOCrN9zUROQohlAMa%2Bt533oV2oMcoZXnuKhblWyghy9Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP4sHVWuU6%2FBvyE0gyrcA4kb9zGd2kCYb%2BN9iM6OTZUHohyUa3WfVURAdqxJ6xkhI%2FTGR3UqctVPYjHC6%2FboD40Y1%2BD2BIEU6c18xi9MVxft%2F4%2Bx4pK0MA%2F14242PLfS4fsax7YqtarpYsXHYlZsLqStFV2a5dCCjOw2vwBo7Y7nYctjvOsHOdEQscd51XIHuN695bjHYagv337b%2FuRahGzhqoC8%2Bx2zVUo%2BCqe%2F9yd07vkYUTMCEIcirSrWLng7dPNqTVB4uztRGPinstauGg60IBxMs1zMejSVnPOyRpcWGNcSk0G1iJWCmQFyy7ciZes0Ed2t0wxjOZJkZMu%2FkSa2hfqsNZ%2ByTr9T%2BppULDwqnWh8UHKZmHhijjDbX9hMqzWZl3mKMdRKN95ovk%2BGf2HW8Y6lyQiONuoxVZvH4mK3dPM1PNLLZC%2F4EkvXJXZXAx4Uy%2FJivOylGdOth0fuDVvNdv1qdJ5hcdJoWGI6hYcZBluGJo7aaFFAq9pPBM%2Fiylge1h1IU1FTFynt%2B8P9qaxB4L0bhnV5e8l32wDI8eE7TbCkuwodch%2BuddIVJNAVYMH3BNIxU83bLsVA2QajkC676Stt3fOEz%2B5j%2BvUpksI4FI7tuEdzml6wQmGtTYW0wO9puBtYTwLwIOMGMM%2B0%2FcQGOqUBSGmLHzL20c5jnq6GyNHBTbnJX1npIRiyoOOfzNtfFd2IcDbm7fKb1oBN4P5%2BPqeRuTxMZiZqm6jIMus%2FHqUlnzq727dyfkmtMlRkS38H3sbSqZruJaiHN%2F5nNkbUiAKaZGB84zkfTLdeRocACNPDunfTjlJBDLPg9%2BlZayowMSQ2eH4OQQFJAZg2FPW%2FEAyZKydRN9HsM3m%2BbgPhc1dZ60MeMyeR&X-Amz-Signature=228ce7c2d233cd4f0bb44560c04fa7b034feaf6f3b31f0f21b64db25eb32217d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNNQPZC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCIpim%2FKmfQyIT5f2Mus0tg0SDFZj8Gny2x3RZb8QbTngIgOCrN9zUROQohlAMa%2Bt533oV2oMcoZXnuKhblWyghy9Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP4sHVWuU6%2FBvyE0gyrcA4kb9zGd2kCYb%2BN9iM6OTZUHohyUa3WfVURAdqxJ6xkhI%2FTGR3UqctVPYjHC6%2FboD40Y1%2BD2BIEU6c18xi9MVxft%2F4%2Bx4pK0MA%2F14242PLfS4fsax7YqtarpYsXHYlZsLqStFV2a5dCCjOw2vwBo7Y7nYctjvOsHOdEQscd51XIHuN695bjHYagv337b%2FuRahGzhqoC8%2Bx2zVUo%2BCqe%2F9yd07vkYUTMCEIcirSrWLng7dPNqTVB4uztRGPinstauGg60IBxMs1zMejSVnPOyRpcWGNcSk0G1iJWCmQFyy7ciZes0Ed2t0wxjOZJkZMu%2FkSa2hfqsNZ%2ByTr9T%2BppULDwqnWh8UHKZmHhijjDbX9hMqzWZl3mKMdRKN95ovk%2BGf2HW8Y6lyQiONuoxVZvH4mK3dPM1PNLLZC%2F4EkvXJXZXAx4Uy%2FJivOylGdOth0fuDVvNdv1qdJ5hcdJoWGI6hYcZBluGJo7aaFFAq9pPBM%2Fiylge1h1IU1FTFynt%2B8P9qaxB4L0bhnV5e8l32wDI8eE7TbCkuwodch%2BuddIVJNAVYMH3BNIxU83bLsVA2QajkC676Stt3fOEz%2B5j%2BvUpksI4FI7tuEdzml6wQmGtTYW0wO9puBtYTwLwIOMGMM%2B0%2FcQGOqUBSGmLHzL20c5jnq6GyNHBTbnJX1npIRiyoOOfzNtfFd2IcDbm7fKb1oBN4P5%2BPqeRuTxMZiZqm6jIMus%2FHqUlnzq727dyfkmtMlRkS38H3sbSqZruJaiHN%2F5nNkbUiAKaZGB84zkfTLdeRocACNPDunfTjlJBDLPg9%2BlZayowMSQ2eH4OQQFJAZg2FPW%2FEAyZKydRN9HsM3m%2BbgPhc1dZ60MeMyeR&X-Amz-Signature=2c25e0a0b37a7af6c76cdd7d85dc79ccf9a56c6a5de9d5b953395dec14bfe991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNNQPZC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCIpim%2FKmfQyIT5f2Mus0tg0SDFZj8Gny2x3RZb8QbTngIgOCrN9zUROQohlAMa%2Bt533oV2oMcoZXnuKhblWyghy9Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP4sHVWuU6%2FBvyE0gyrcA4kb9zGd2kCYb%2BN9iM6OTZUHohyUa3WfVURAdqxJ6xkhI%2FTGR3UqctVPYjHC6%2FboD40Y1%2BD2BIEU6c18xi9MVxft%2F4%2Bx4pK0MA%2F14242PLfS4fsax7YqtarpYsXHYlZsLqStFV2a5dCCjOw2vwBo7Y7nYctjvOsHOdEQscd51XIHuN695bjHYagv337b%2FuRahGzhqoC8%2Bx2zVUo%2BCqe%2F9yd07vkYUTMCEIcirSrWLng7dPNqTVB4uztRGPinstauGg60IBxMs1zMejSVnPOyRpcWGNcSk0G1iJWCmQFyy7ciZes0Ed2t0wxjOZJkZMu%2FkSa2hfqsNZ%2ByTr9T%2BppULDwqnWh8UHKZmHhijjDbX9hMqzWZl3mKMdRKN95ovk%2BGf2HW8Y6lyQiONuoxVZvH4mK3dPM1PNLLZC%2F4EkvXJXZXAx4Uy%2FJivOylGdOth0fuDVvNdv1qdJ5hcdJoWGI6hYcZBluGJo7aaFFAq9pPBM%2Fiylge1h1IU1FTFynt%2B8P9qaxB4L0bhnV5e8l32wDI8eE7TbCkuwodch%2BuddIVJNAVYMH3BNIxU83bLsVA2QajkC676Stt3fOEz%2B5j%2BvUpksI4FI7tuEdzml6wQmGtTYW0wO9puBtYTwLwIOMGMM%2B0%2FcQGOqUBSGmLHzL20c5jnq6GyNHBTbnJX1npIRiyoOOfzNtfFd2IcDbm7fKb1oBN4P5%2BPqeRuTxMZiZqm6jIMus%2FHqUlnzq727dyfkmtMlRkS38H3sbSqZruJaiHN%2F5nNkbUiAKaZGB84zkfTLdeRocACNPDunfTjlJBDLPg9%2BlZayowMSQ2eH4OQQFJAZg2FPW%2FEAyZKydRN9HsM3m%2BbgPhc1dZ60MeMyeR&X-Amz-Signature=a919f7f4cc30e000d9320a68a82e8ee0c08e486f3c7ccefbaeb1b09051b2ce19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNNQPZC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCIpim%2FKmfQyIT5f2Mus0tg0SDFZj8Gny2x3RZb8QbTngIgOCrN9zUROQohlAMa%2Bt533oV2oMcoZXnuKhblWyghy9Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP4sHVWuU6%2FBvyE0gyrcA4kb9zGd2kCYb%2BN9iM6OTZUHohyUa3WfVURAdqxJ6xkhI%2FTGR3UqctVPYjHC6%2FboD40Y1%2BD2BIEU6c18xi9MVxft%2F4%2Bx4pK0MA%2F14242PLfS4fsax7YqtarpYsXHYlZsLqStFV2a5dCCjOw2vwBo7Y7nYctjvOsHOdEQscd51XIHuN695bjHYagv337b%2FuRahGzhqoC8%2Bx2zVUo%2BCqe%2F9yd07vkYUTMCEIcirSrWLng7dPNqTVB4uztRGPinstauGg60IBxMs1zMejSVnPOyRpcWGNcSk0G1iJWCmQFyy7ciZes0Ed2t0wxjOZJkZMu%2FkSa2hfqsNZ%2ByTr9T%2BppULDwqnWh8UHKZmHhijjDbX9hMqzWZl3mKMdRKN95ovk%2BGf2HW8Y6lyQiONuoxVZvH4mK3dPM1PNLLZC%2F4EkvXJXZXAx4Uy%2FJivOylGdOth0fuDVvNdv1qdJ5hcdJoWGI6hYcZBluGJo7aaFFAq9pPBM%2Fiylge1h1IU1FTFynt%2B8P9qaxB4L0bhnV5e8l32wDI8eE7TbCkuwodch%2BuddIVJNAVYMH3BNIxU83bLsVA2QajkC676Stt3fOEz%2B5j%2BvUpksI4FI7tuEdzml6wQmGtTYW0wO9puBtYTwLwIOMGMM%2B0%2FcQGOqUBSGmLHzL20c5jnq6GyNHBTbnJX1npIRiyoOOfzNtfFd2IcDbm7fKb1oBN4P5%2BPqeRuTxMZiZqm6jIMus%2FHqUlnzq727dyfkmtMlRkS38H3sbSqZruJaiHN%2F5nNkbUiAKaZGB84zkfTLdeRocACNPDunfTjlJBDLPg9%2BlZayowMSQ2eH4OQQFJAZg2FPW%2FEAyZKydRN9HsM3m%2BbgPhc1dZ60MeMyeR&X-Amz-Signature=af6944184d4f647dfdf1ed150c46417faef75a9e16409f2ced232f21349a9033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNNQPZC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCIpim%2FKmfQyIT5f2Mus0tg0SDFZj8Gny2x3RZb8QbTngIgOCrN9zUROQohlAMa%2Bt533oV2oMcoZXnuKhblWyghy9Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP4sHVWuU6%2FBvyE0gyrcA4kb9zGd2kCYb%2BN9iM6OTZUHohyUa3WfVURAdqxJ6xkhI%2FTGR3UqctVPYjHC6%2FboD40Y1%2BD2BIEU6c18xi9MVxft%2F4%2Bx4pK0MA%2F14242PLfS4fsax7YqtarpYsXHYlZsLqStFV2a5dCCjOw2vwBo7Y7nYctjvOsHOdEQscd51XIHuN695bjHYagv337b%2FuRahGzhqoC8%2Bx2zVUo%2BCqe%2F9yd07vkYUTMCEIcirSrWLng7dPNqTVB4uztRGPinstauGg60IBxMs1zMejSVnPOyRpcWGNcSk0G1iJWCmQFyy7ciZes0Ed2t0wxjOZJkZMu%2FkSa2hfqsNZ%2ByTr9T%2BppULDwqnWh8UHKZmHhijjDbX9hMqzWZl3mKMdRKN95ovk%2BGf2HW8Y6lyQiONuoxVZvH4mK3dPM1PNLLZC%2F4EkvXJXZXAx4Uy%2FJivOylGdOth0fuDVvNdv1qdJ5hcdJoWGI6hYcZBluGJo7aaFFAq9pPBM%2Fiylge1h1IU1FTFynt%2B8P9qaxB4L0bhnV5e8l32wDI8eE7TbCkuwodch%2BuddIVJNAVYMH3BNIxU83bLsVA2QajkC676Stt3fOEz%2B5j%2BvUpksI4FI7tuEdzml6wQmGtTYW0wO9puBtYTwLwIOMGMM%2B0%2FcQGOqUBSGmLHzL20c5jnq6GyNHBTbnJX1npIRiyoOOfzNtfFd2IcDbm7fKb1oBN4P5%2BPqeRuTxMZiZqm6jIMus%2FHqUlnzq727dyfkmtMlRkS38H3sbSqZruJaiHN%2F5nNkbUiAKaZGB84zkfTLdeRocACNPDunfTjlJBDLPg9%2BlZayowMSQ2eH4OQQFJAZg2FPW%2FEAyZKydRN9HsM3m%2BbgPhc1dZ60MeMyeR&X-Amz-Signature=08c9f45c6f6347ad41f5170c5d2f94cf0898cabe95ba48794f4a98dcfff6ac8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNNQPZC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCIpim%2FKmfQyIT5f2Mus0tg0SDFZj8Gny2x3RZb8QbTngIgOCrN9zUROQohlAMa%2Bt533oV2oMcoZXnuKhblWyghy9Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP4sHVWuU6%2FBvyE0gyrcA4kb9zGd2kCYb%2BN9iM6OTZUHohyUa3WfVURAdqxJ6xkhI%2FTGR3UqctVPYjHC6%2FboD40Y1%2BD2BIEU6c18xi9MVxft%2F4%2Bx4pK0MA%2F14242PLfS4fsax7YqtarpYsXHYlZsLqStFV2a5dCCjOw2vwBo7Y7nYctjvOsHOdEQscd51XIHuN695bjHYagv337b%2FuRahGzhqoC8%2Bx2zVUo%2BCqe%2F9yd07vkYUTMCEIcirSrWLng7dPNqTVB4uztRGPinstauGg60IBxMs1zMejSVnPOyRpcWGNcSk0G1iJWCmQFyy7ciZes0Ed2t0wxjOZJkZMu%2FkSa2hfqsNZ%2ByTr9T%2BppULDwqnWh8UHKZmHhijjDbX9hMqzWZl3mKMdRKN95ovk%2BGf2HW8Y6lyQiONuoxVZvH4mK3dPM1PNLLZC%2F4EkvXJXZXAx4Uy%2FJivOylGdOth0fuDVvNdv1qdJ5hcdJoWGI6hYcZBluGJo7aaFFAq9pPBM%2Fiylge1h1IU1FTFynt%2B8P9qaxB4L0bhnV5e8l32wDI8eE7TbCkuwodch%2BuddIVJNAVYMH3BNIxU83bLsVA2QajkC676Stt3fOEz%2B5j%2BvUpksI4FI7tuEdzml6wQmGtTYW0wO9puBtYTwLwIOMGMM%2B0%2FcQGOqUBSGmLHzL20c5jnq6GyNHBTbnJX1npIRiyoOOfzNtfFd2IcDbm7fKb1oBN4P5%2BPqeRuTxMZiZqm6jIMus%2FHqUlnzq727dyfkmtMlRkS38H3sbSqZruJaiHN%2F5nNkbUiAKaZGB84zkfTLdeRocACNPDunfTjlJBDLPg9%2BlZayowMSQ2eH4OQQFJAZg2FPW%2FEAyZKydRN9HsM3m%2BbgPhc1dZ60MeMyeR&X-Amz-Signature=584e279becddecca29c6c973d7ab5981206858035a71ef6a973da63fdcdabe5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNNQPZC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCIpim%2FKmfQyIT5f2Mus0tg0SDFZj8Gny2x3RZb8QbTngIgOCrN9zUROQohlAMa%2Bt533oV2oMcoZXnuKhblWyghy9Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP4sHVWuU6%2FBvyE0gyrcA4kb9zGd2kCYb%2BN9iM6OTZUHohyUa3WfVURAdqxJ6xkhI%2FTGR3UqctVPYjHC6%2FboD40Y1%2BD2BIEU6c18xi9MVxft%2F4%2Bx4pK0MA%2F14242PLfS4fsax7YqtarpYsXHYlZsLqStFV2a5dCCjOw2vwBo7Y7nYctjvOsHOdEQscd51XIHuN695bjHYagv337b%2FuRahGzhqoC8%2Bx2zVUo%2BCqe%2F9yd07vkYUTMCEIcirSrWLng7dPNqTVB4uztRGPinstauGg60IBxMs1zMejSVnPOyRpcWGNcSk0G1iJWCmQFyy7ciZes0Ed2t0wxjOZJkZMu%2FkSa2hfqsNZ%2ByTr9T%2BppULDwqnWh8UHKZmHhijjDbX9hMqzWZl3mKMdRKN95ovk%2BGf2HW8Y6lyQiONuoxVZvH4mK3dPM1PNLLZC%2F4EkvXJXZXAx4Uy%2FJivOylGdOth0fuDVvNdv1qdJ5hcdJoWGI6hYcZBluGJo7aaFFAq9pPBM%2Fiylge1h1IU1FTFynt%2B8P9qaxB4L0bhnV5e8l32wDI8eE7TbCkuwodch%2BuddIVJNAVYMH3BNIxU83bLsVA2QajkC676Stt3fOEz%2B5j%2BvUpksI4FI7tuEdzml6wQmGtTYW0wO9puBtYTwLwIOMGMM%2B0%2FcQGOqUBSGmLHzL20c5jnq6GyNHBTbnJX1npIRiyoOOfzNtfFd2IcDbm7fKb1oBN4P5%2BPqeRuTxMZiZqm6jIMus%2FHqUlnzq727dyfkmtMlRkS38H3sbSqZruJaiHN%2F5nNkbUiAKaZGB84zkfTLdeRocACNPDunfTjlJBDLPg9%2BlZayowMSQ2eH4OQQFJAZg2FPW%2FEAyZKydRN9HsM3m%2BbgPhc1dZ60MeMyeR&X-Amz-Signature=397ddaa5c9c0db4f9068114d3fc1aa9e09a21b5a3e8feef9d3c4468f5efbf5cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNNQPZC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCIpim%2FKmfQyIT5f2Mus0tg0SDFZj8Gny2x3RZb8QbTngIgOCrN9zUROQohlAMa%2Bt533oV2oMcoZXnuKhblWyghy9Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP4sHVWuU6%2FBvyE0gyrcA4kb9zGd2kCYb%2BN9iM6OTZUHohyUa3WfVURAdqxJ6xkhI%2FTGR3UqctVPYjHC6%2FboD40Y1%2BD2BIEU6c18xi9MVxft%2F4%2Bx4pK0MA%2F14242PLfS4fsax7YqtarpYsXHYlZsLqStFV2a5dCCjOw2vwBo7Y7nYctjvOsHOdEQscd51XIHuN695bjHYagv337b%2FuRahGzhqoC8%2Bx2zVUo%2BCqe%2F9yd07vkYUTMCEIcirSrWLng7dPNqTVB4uztRGPinstauGg60IBxMs1zMejSVnPOyRpcWGNcSk0G1iJWCmQFyy7ciZes0Ed2t0wxjOZJkZMu%2FkSa2hfqsNZ%2ByTr9T%2BppULDwqnWh8UHKZmHhijjDbX9hMqzWZl3mKMdRKN95ovk%2BGf2HW8Y6lyQiONuoxVZvH4mK3dPM1PNLLZC%2F4EkvXJXZXAx4Uy%2FJivOylGdOth0fuDVvNdv1qdJ5hcdJoWGI6hYcZBluGJo7aaFFAq9pPBM%2Fiylge1h1IU1FTFynt%2B8P9qaxB4L0bhnV5e8l32wDI8eE7TbCkuwodch%2BuddIVJNAVYMH3BNIxU83bLsVA2QajkC676Stt3fOEz%2B5j%2BvUpksI4FI7tuEdzml6wQmGtTYW0wO9puBtYTwLwIOMGMM%2B0%2FcQGOqUBSGmLHzL20c5jnq6GyNHBTbnJX1npIRiyoOOfzNtfFd2IcDbm7fKb1oBN4P5%2BPqeRuTxMZiZqm6jIMus%2FHqUlnzq727dyfkmtMlRkS38H3sbSqZruJaiHN%2F5nNkbUiAKaZGB84zkfTLdeRocACNPDunfTjlJBDLPg9%2BlZayowMSQ2eH4OQQFJAZg2FPW%2FEAyZKydRN9HsM3m%2BbgPhc1dZ60MeMyeR&X-Amz-Signature=7aaa6a2adba45089983e7152fafd6274ec639e0d9347147b90e62e5704b9c664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNNQPZC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCIpim%2FKmfQyIT5f2Mus0tg0SDFZj8Gny2x3RZb8QbTngIgOCrN9zUROQohlAMa%2Bt533oV2oMcoZXnuKhblWyghy9Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP4sHVWuU6%2FBvyE0gyrcA4kb9zGd2kCYb%2BN9iM6OTZUHohyUa3WfVURAdqxJ6xkhI%2FTGR3UqctVPYjHC6%2FboD40Y1%2BD2BIEU6c18xi9MVxft%2F4%2Bx4pK0MA%2F14242PLfS4fsax7YqtarpYsXHYlZsLqStFV2a5dCCjOw2vwBo7Y7nYctjvOsHOdEQscd51XIHuN695bjHYagv337b%2FuRahGzhqoC8%2Bx2zVUo%2BCqe%2F9yd07vkYUTMCEIcirSrWLng7dPNqTVB4uztRGPinstauGg60IBxMs1zMejSVnPOyRpcWGNcSk0G1iJWCmQFyy7ciZes0Ed2t0wxjOZJkZMu%2FkSa2hfqsNZ%2ByTr9T%2BppULDwqnWh8UHKZmHhijjDbX9hMqzWZl3mKMdRKN95ovk%2BGf2HW8Y6lyQiONuoxVZvH4mK3dPM1PNLLZC%2F4EkvXJXZXAx4Uy%2FJivOylGdOth0fuDVvNdv1qdJ5hcdJoWGI6hYcZBluGJo7aaFFAq9pPBM%2Fiylge1h1IU1FTFynt%2B8P9qaxB4L0bhnV5e8l32wDI8eE7TbCkuwodch%2BuddIVJNAVYMH3BNIxU83bLsVA2QajkC676Stt3fOEz%2B5j%2BvUpksI4FI7tuEdzml6wQmGtTYW0wO9puBtYTwLwIOMGMM%2B0%2FcQGOqUBSGmLHzL20c5jnq6GyNHBTbnJX1npIRiyoOOfzNtfFd2IcDbm7fKb1oBN4P5%2BPqeRuTxMZiZqm6jIMus%2FHqUlnzq727dyfkmtMlRkS38H3sbSqZruJaiHN%2F5nNkbUiAKaZGB84zkfTLdeRocACNPDunfTjlJBDLPg9%2BlZayowMSQ2eH4OQQFJAZg2FPW%2FEAyZKydRN9HsM3m%2BbgPhc1dZ60MeMyeR&X-Amz-Signature=c2f9702aedc2659c99bfc3f1335b1905a28c00088f9256310ae5b0881ebb89f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNNQPZC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCIpim%2FKmfQyIT5f2Mus0tg0SDFZj8Gny2x3RZb8QbTngIgOCrN9zUROQohlAMa%2Bt533oV2oMcoZXnuKhblWyghy9Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP4sHVWuU6%2FBvyE0gyrcA4kb9zGd2kCYb%2BN9iM6OTZUHohyUa3WfVURAdqxJ6xkhI%2FTGR3UqctVPYjHC6%2FboD40Y1%2BD2BIEU6c18xi9MVxft%2F4%2Bx4pK0MA%2F14242PLfS4fsax7YqtarpYsXHYlZsLqStFV2a5dCCjOw2vwBo7Y7nYctjvOsHOdEQscd51XIHuN695bjHYagv337b%2FuRahGzhqoC8%2Bx2zVUo%2BCqe%2F9yd07vkYUTMCEIcirSrWLng7dPNqTVB4uztRGPinstauGg60IBxMs1zMejSVnPOyRpcWGNcSk0G1iJWCmQFyy7ciZes0Ed2t0wxjOZJkZMu%2FkSa2hfqsNZ%2ByTr9T%2BppULDwqnWh8UHKZmHhijjDbX9hMqzWZl3mKMdRKN95ovk%2BGf2HW8Y6lyQiONuoxVZvH4mK3dPM1PNLLZC%2F4EkvXJXZXAx4Uy%2FJivOylGdOth0fuDVvNdv1qdJ5hcdJoWGI6hYcZBluGJo7aaFFAq9pPBM%2Fiylge1h1IU1FTFynt%2B8P9qaxB4L0bhnV5e8l32wDI8eE7TbCkuwodch%2BuddIVJNAVYMH3BNIxU83bLsVA2QajkC676Stt3fOEz%2B5j%2BvUpksI4FI7tuEdzml6wQmGtTYW0wO9puBtYTwLwIOMGMM%2B0%2FcQGOqUBSGmLHzL20c5jnq6GyNHBTbnJX1npIRiyoOOfzNtfFd2IcDbm7fKb1oBN4P5%2BPqeRuTxMZiZqm6jIMus%2FHqUlnzq727dyfkmtMlRkS38H3sbSqZruJaiHN%2F5nNkbUiAKaZGB84zkfTLdeRocACNPDunfTjlJBDLPg9%2BlZayowMSQ2eH4OQQFJAZg2FPW%2FEAyZKydRN9HsM3m%2BbgPhc1dZ60MeMyeR&X-Amz-Signature=7075ac099ecdd16847ed913e37db7467c47718883977d45f3451a348e1d8afef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNNQPZC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCIpim%2FKmfQyIT5f2Mus0tg0SDFZj8Gny2x3RZb8QbTngIgOCrN9zUROQohlAMa%2Bt533oV2oMcoZXnuKhblWyghy9Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP4sHVWuU6%2FBvyE0gyrcA4kb9zGd2kCYb%2BN9iM6OTZUHohyUa3WfVURAdqxJ6xkhI%2FTGR3UqctVPYjHC6%2FboD40Y1%2BD2BIEU6c18xi9MVxft%2F4%2Bx4pK0MA%2F14242PLfS4fsax7YqtarpYsXHYlZsLqStFV2a5dCCjOw2vwBo7Y7nYctjvOsHOdEQscd51XIHuN695bjHYagv337b%2FuRahGzhqoC8%2Bx2zVUo%2BCqe%2F9yd07vkYUTMCEIcirSrWLng7dPNqTVB4uztRGPinstauGg60IBxMs1zMejSVnPOyRpcWGNcSk0G1iJWCmQFyy7ciZes0Ed2t0wxjOZJkZMu%2FkSa2hfqsNZ%2ByTr9T%2BppULDwqnWh8UHKZmHhijjDbX9hMqzWZl3mKMdRKN95ovk%2BGf2HW8Y6lyQiONuoxVZvH4mK3dPM1PNLLZC%2F4EkvXJXZXAx4Uy%2FJivOylGdOth0fuDVvNdv1qdJ5hcdJoWGI6hYcZBluGJo7aaFFAq9pPBM%2Fiylge1h1IU1FTFynt%2B8P9qaxB4L0bhnV5e8l32wDI8eE7TbCkuwodch%2BuddIVJNAVYMH3BNIxU83bLsVA2QajkC676Stt3fOEz%2B5j%2BvUpksI4FI7tuEdzml6wQmGtTYW0wO9puBtYTwLwIOMGMM%2B0%2FcQGOqUBSGmLHzL20c5jnq6GyNHBTbnJX1npIRiyoOOfzNtfFd2IcDbm7fKb1oBN4P5%2BPqeRuTxMZiZqm6jIMus%2FHqUlnzq727dyfkmtMlRkS38H3sbSqZruJaiHN%2F5nNkbUiAKaZGB84zkfTLdeRocACNPDunfTjlJBDLPg9%2BlZayowMSQ2eH4OQQFJAZg2FPW%2FEAyZKydRN9HsM3m%2BbgPhc1dZ60MeMyeR&X-Amz-Signature=1577b89b752e2b2574225210322a072b234eb2d237802667dd3a342acd5eb698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNNQPZC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCIpim%2FKmfQyIT5f2Mus0tg0SDFZj8Gny2x3RZb8QbTngIgOCrN9zUROQohlAMa%2Bt533oV2oMcoZXnuKhblWyghy9Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP4sHVWuU6%2FBvyE0gyrcA4kb9zGd2kCYb%2BN9iM6OTZUHohyUa3WfVURAdqxJ6xkhI%2FTGR3UqctVPYjHC6%2FboD40Y1%2BD2BIEU6c18xi9MVxft%2F4%2Bx4pK0MA%2F14242PLfS4fsax7YqtarpYsXHYlZsLqStFV2a5dCCjOw2vwBo7Y7nYctjvOsHOdEQscd51XIHuN695bjHYagv337b%2FuRahGzhqoC8%2Bx2zVUo%2BCqe%2F9yd07vkYUTMCEIcirSrWLng7dPNqTVB4uztRGPinstauGg60IBxMs1zMejSVnPOyRpcWGNcSk0G1iJWCmQFyy7ciZes0Ed2t0wxjOZJkZMu%2FkSa2hfqsNZ%2ByTr9T%2BppULDwqnWh8UHKZmHhijjDbX9hMqzWZl3mKMdRKN95ovk%2BGf2HW8Y6lyQiONuoxVZvH4mK3dPM1PNLLZC%2F4EkvXJXZXAx4Uy%2FJivOylGdOth0fuDVvNdv1qdJ5hcdJoWGI6hYcZBluGJo7aaFFAq9pPBM%2Fiylge1h1IU1FTFynt%2B8P9qaxB4L0bhnV5e8l32wDI8eE7TbCkuwodch%2BuddIVJNAVYMH3BNIxU83bLsVA2QajkC676Stt3fOEz%2B5j%2BvUpksI4FI7tuEdzml6wQmGtTYW0wO9puBtYTwLwIOMGMM%2B0%2FcQGOqUBSGmLHzL20c5jnq6GyNHBTbnJX1npIRiyoOOfzNtfFd2IcDbm7fKb1oBN4P5%2BPqeRuTxMZiZqm6jIMus%2FHqUlnzq727dyfkmtMlRkS38H3sbSqZruJaiHN%2F5nNkbUiAKaZGB84zkfTLdeRocACNPDunfTjlJBDLPg9%2BlZayowMSQ2eH4OQQFJAZg2FPW%2FEAyZKydRN9HsM3m%2BbgPhc1dZ60MeMyeR&X-Amz-Signature=ac1037b1372dc48139af40f3ab5ac6588254d849db7c29a5d6a7628c5d069fe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNNQPZC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCIpim%2FKmfQyIT5f2Mus0tg0SDFZj8Gny2x3RZb8QbTngIgOCrN9zUROQohlAMa%2Bt533oV2oMcoZXnuKhblWyghy9Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP4sHVWuU6%2FBvyE0gyrcA4kb9zGd2kCYb%2BN9iM6OTZUHohyUa3WfVURAdqxJ6xkhI%2FTGR3UqctVPYjHC6%2FboD40Y1%2BD2BIEU6c18xi9MVxft%2F4%2Bx4pK0MA%2F14242PLfS4fsax7YqtarpYsXHYlZsLqStFV2a5dCCjOw2vwBo7Y7nYctjvOsHOdEQscd51XIHuN695bjHYagv337b%2FuRahGzhqoC8%2Bx2zVUo%2BCqe%2F9yd07vkYUTMCEIcirSrWLng7dPNqTVB4uztRGPinstauGg60IBxMs1zMejSVnPOyRpcWGNcSk0G1iJWCmQFyy7ciZes0Ed2t0wxjOZJkZMu%2FkSa2hfqsNZ%2ByTr9T%2BppULDwqnWh8UHKZmHhijjDbX9hMqzWZl3mKMdRKN95ovk%2BGf2HW8Y6lyQiONuoxVZvH4mK3dPM1PNLLZC%2F4EkvXJXZXAx4Uy%2FJivOylGdOth0fuDVvNdv1qdJ5hcdJoWGI6hYcZBluGJo7aaFFAq9pPBM%2Fiylge1h1IU1FTFynt%2B8P9qaxB4L0bhnV5e8l32wDI8eE7TbCkuwodch%2BuddIVJNAVYMH3BNIxU83bLsVA2QajkC676Stt3fOEz%2B5j%2BvUpksI4FI7tuEdzml6wQmGtTYW0wO9puBtYTwLwIOMGMM%2B0%2FcQGOqUBSGmLHzL20c5jnq6GyNHBTbnJX1npIRiyoOOfzNtfFd2IcDbm7fKb1oBN4P5%2BPqeRuTxMZiZqm6jIMus%2FHqUlnzq727dyfkmtMlRkS38H3sbSqZruJaiHN%2F5nNkbUiAKaZGB84zkfTLdeRocACNPDunfTjlJBDLPg9%2BlZayowMSQ2eH4OQQFJAZg2FPW%2FEAyZKydRN9HsM3m%2BbgPhc1dZ60MeMyeR&X-Amz-Signature=3e5137850756eec0b0f667dfe3f1eed48a85770d14c08af1dc9ebe93fb824dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNNQPZC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCIpim%2FKmfQyIT5f2Mus0tg0SDFZj8Gny2x3RZb8QbTngIgOCrN9zUROQohlAMa%2Bt533oV2oMcoZXnuKhblWyghy9Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP4sHVWuU6%2FBvyE0gyrcA4kb9zGd2kCYb%2BN9iM6OTZUHohyUa3WfVURAdqxJ6xkhI%2FTGR3UqctVPYjHC6%2FboD40Y1%2BD2BIEU6c18xi9MVxft%2F4%2Bx4pK0MA%2F14242PLfS4fsax7YqtarpYsXHYlZsLqStFV2a5dCCjOw2vwBo7Y7nYctjvOsHOdEQscd51XIHuN695bjHYagv337b%2FuRahGzhqoC8%2Bx2zVUo%2BCqe%2F9yd07vkYUTMCEIcirSrWLng7dPNqTVB4uztRGPinstauGg60IBxMs1zMejSVnPOyRpcWGNcSk0G1iJWCmQFyy7ciZes0Ed2t0wxjOZJkZMu%2FkSa2hfqsNZ%2ByTr9T%2BppULDwqnWh8UHKZmHhijjDbX9hMqzWZl3mKMdRKN95ovk%2BGf2HW8Y6lyQiONuoxVZvH4mK3dPM1PNLLZC%2F4EkvXJXZXAx4Uy%2FJivOylGdOth0fuDVvNdv1qdJ5hcdJoWGI6hYcZBluGJo7aaFFAq9pPBM%2Fiylge1h1IU1FTFynt%2B8P9qaxB4L0bhnV5e8l32wDI8eE7TbCkuwodch%2BuddIVJNAVYMH3BNIxU83bLsVA2QajkC676Stt3fOEz%2B5j%2BvUpksI4FI7tuEdzml6wQmGtTYW0wO9puBtYTwLwIOMGMM%2B0%2FcQGOqUBSGmLHzL20c5jnq6GyNHBTbnJX1npIRiyoOOfzNtfFd2IcDbm7fKb1oBN4P5%2BPqeRuTxMZiZqm6jIMus%2FHqUlnzq727dyfkmtMlRkS38H3sbSqZruJaiHN%2F5nNkbUiAKaZGB84zkfTLdeRocACNPDunfTjlJBDLPg9%2BlZayowMSQ2eH4OQQFJAZg2FPW%2FEAyZKydRN9HsM3m%2BbgPhc1dZ60MeMyeR&X-Amz-Signature=a7eb2d3d99d8975c63a4712b56dff90e99cee286ab01e78a2442d649fda8215b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
