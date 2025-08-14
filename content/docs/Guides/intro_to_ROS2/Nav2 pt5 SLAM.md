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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L7CB3K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh7a5H6UUY7xGP248uTFL%2Fhm8%2Bb1thE5%2FsfHnMaXGKFQIgW4EbXLAmDihZN3xJaeJfSZWv%2FuDENEIaCPvTBnNRLboq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEQj4KdsMcVeTc2SyrcA1dofuIE9%2B86HJyP36WT%2BRiAIQqD2ysDWB5ioXIlAWNfo56A3efw6jXVT0qoq94NADWhes1wV%2FVT0eNWZXGhem8oAp8jAIgV%2FrS828PETAqYkdFVnOp8rNFoH84KgNxizvm1%2BPX7AwiH%2FMrAEmc4wue4GdI9PeaaCafUz0kKXtohJa8TR%2Btq3VvWbBMjfEBZawL7MUwzQHwALFwXJmrvxOX42eji%2B1Sup%2BdAeKha9pdI57sz00hNUNSDpIa9KAW7K2jGq6CJLf1sN%2F07QDd%2FcsEh59%2Bk6TsRULEJCzXLMBUE13eXvA74J4m4I0ZvD%2FMWrPHbO7M29v7tFe8uVwIYjiVk0ORYWe6kXNrHdPYgGH2hOutGW7%2FWcFtL0nnJ9cOP7cfxCAtDrTwitFGdP5vHW8mpeZDiVsuLd9Xtvu6DP4COV0elMyMA%2BTJZJV1M91Gag2M7%2FfKu%2BVDS%2F1JBafMVcg%2BWL0RJR%2FHGtLZbwrQtlpSANn6xuvDApxeHOo74PUDOJj8eCPhOOgzwRj4aQSItcl%2Be4p0qxcvD7i2Ay2JO8ATzOkSjaZ6Re14bkFzp2ThsE%2BYDIJAb9G2e%2FO575WeMlfmq4dnicJUr6%2BBwap9Uo4jp0cFsV1GYGJSnw8%2FPMJ2L9cQGOqUB167vC00KQqffSk8MLR0fm77ryWPkypcBOBJYiHku4pP3c0%2BbFkQAtdEXBd0EeyWZrxxmCHhWPpguIWA3xjmQUyxdi5mDu1xQSWz6RZt4197yPEbS6bxHPnFFE850BICS68seVudLG8lxyBv2N4J%2ByRu%2BPQyoUI0ZUShXjmUuuRLdMRuSLkFzeOQAeOY2bu6LQiq0ccSQRPqSPQOzCIfvvaeju4E9&X-Amz-Signature=9cb6d1d4d3d2924c60a9eec6430a375cfc8787f70b64796e529539e6ff9be643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L7CB3K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh7a5H6UUY7xGP248uTFL%2Fhm8%2Bb1thE5%2FsfHnMaXGKFQIgW4EbXLAmDihZN3xJaeJfSZWv%2FuDENEIaCPvTBnNRLboq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEQj4KdsMcVeTc2SyrcA1dofuIE9%2B86HJyP36WT%2BRiAIQqD2ysDWB5ioXIlAWNfo56A3efw6jXVT0qoq94NADWhes1wV%2FVT0eNWZXGhem8oAp8jAIgV%2FrS828PETAqYkdFVnOp8rNFoH84KgNxizvm1%2BPX7AwiH%2FMrAEmc4wue4GdI9PeaaCafUz0kKXtohJa8TR%2Btq3VvWbBMjfEBZawL7MUwzQHwALFwXJmrvxOX42eji%2B1Sup%2BdAeKha9pdI57sz00hNUNSDpIa9KAW7K2jGq6CJLf1sN%2F07QDd%2FcsEh59%2Bk6TsRULEJCzXLMBUE13eXvA74J4m4I0ZvD%2FMWrPHbO7M29v7tFe8uVwIYjiVk0ORYWe6kXNrHdPYgGH2hOutGW7%2FWcFtL0nnJ9cOP7cfxCAtDrTwitFGdP5vHW8mpeZDiVsuLd9Xtvu6DP4COV0elMyMA%2BTJZJV1M91Gag2M7%2FfKu%2BVDS%2F1JBafMVcg%2BWL0RJR%2FHGtLZbwrQtlpSANn6xuvDApxeHOo74PUDOJj8eCPhOOgzwRj4aQSItcl%2Be4p0qxcvD7i2Ay2JO8ATzOkSjaZ6Re14bkFzp2ThsE%2BYDIJAb9G2e%2FO575WeMlfmq4dnicJUr6%2BBwap9Uo4jp0cFsV1GYGJSnw8%2FPMJ2L9cQGOqUB167vC00KQqffSk8MLR0fm77ryWPkypcBOBJYiHku4pP3c0%2BbFkQAtdEXBd0EeyWZrxxmCHhWPpguIWA3xjmQUyxdi5mDu1xQSWz6RZt4197yPEbS6bxHPnFFE850BICS68seVudLG8lxyBv2N4J%2ByRu%2BPQyoUI0ZUShXjmUuuRLdMRuSLkFzeOQAeOY2bu6LQiq0ccSQRPqSPQOzCIfvvaeju4E9&X-Amz-Signature=c2145efbbff4f4d892b6410a41d5f98738e428cf68fed4667c8867e38e566371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L7CB3K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh7a5H6UUY7xGP248uTFL%2Fhm8%2Bb1thE5%2FsfHnMaXGKFQIgW4EbXLAmDihZN3xJaeJfSZWv%2FuDENEIaCPvTBnNRLboq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEQj4KdsMcVeTc2SyrcA1dofuIE9%2B86HJyP36WT%2BRiAIQqD2ysDWB5ioXIlAWNfo56A3efw6jXVT0qoq94NADWhes1wV%2FVT0eNWZXGhem8oAp8jAIgV%2FrS828PETAqYkdFVnOp8rNFoH84KgNxizvm1%2BPX7AwiH%2FMrAEmc4wue4GdI9PeaaCafUz0kKXtohJa8TR%2Btq3VvWbBMjfEBZawL7MUwzQHwALFwXJmrvxOX42eji%2B1Sup%2BdAeKha9pdI57sz00hNUNSDpIa9KAW7K2jGq6CJLf1sN%2F07QDd%2FcsEh59%2Bk6TsRULEJCzXLMBUE13eXvA74J4m4I0ZvD%2FMWrPHbO7M29v7tFe8uVwIYjiVk0ORYWe6kXNrHdPYgGH2hOutGW7%2FWcFtL0nnJ9cOP7cfxCAtDrTwitFGdP5vHW8mpeZDiVsuLd9Xtvu6DP4COV0elMyMA%2BTJZJV1M91Gag2M7%2FfKu%2BVDS%2F1JBafMVcg%2BWL0RJR%2FHGtLZbwrQtlpSANn6xuvDApxeHOo74PUDOJj8eCPhOOgzwRj4aQSItcl%2Be4p0qxcvD7i2Ay2JO8ATzOkSjaZ6Re14bkFzp2ThsE%2BYDIJAb9G2e%2FO575WeMlfmq4dnicJUr6%2BBwap9Uo4jp0cFsV1GYGJSnw8%2FPMJ2L9cQGOqUB167vC00KQqffSk8MLR0fm77ryWPkypcBOBJYiHku4pP3c0%2BbFkQAtdEXBd0EeyWZrxxmCHhWPpguIWA3xjmQUyxdi5mDu1xQSWz6RZt4197yPEbS6bxHPnFFE850BICS68seVudLG8lxyBv2N4J%2ByRu%2BPQyoUI0ZUShXjmUuuRLdMRuSLkFzeOQAeOY2bu6LQiq0ccSQRPqSPQOzCIfvvaeju4E9&X-Amz-Signature=4253bcb9251a67be3681e2cb571d9c92205a4477e4b50fb467b6fbdc356c8a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L7CB3K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh7a5H6UUY7xGP248uTFL%2Fhm8%2Bb1thE5%2FsfHnMaXGKFQIgW4EbXLAmDihZN3xJaeJfSZWv%2FuDENEIaCPvTBnNRLboq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEQj4KdsMcVeTc2SyrcA1dofuIE9%2B86HJyP36WT%2BRiAIQqD2ysDWB5ioXIlAWNfo56A3efw6jXVT0qoq94NADWhes1wV%2FVT0eNWZXGhem8oAp8jAIgV%2FrS828PETAqYkdFVnOp8rNFoH84KgNxizvm1%2BPX7AwiH%2FMrAEmc4wue4GdI9PeaaCafUz0kKXtohJa8TR%2Btq3VvWbBMjfEBZawL7MUwzQHwALFwXJmrvxOX42eji%2B1Sup%2BdAeKha9pdI57sz00hNUNSDpIa9KAW7K2jGq6CJLf1sN%2F07QDd%2FcsEh59%2Bk6TsRULEJCzXLMBUE13eXvA74J4m4I0ZvD%2FMWrPHbO7M29v7tFe8uVwIYjiVk0ORYWe6kXNrHdPYgGH2hOutGW7%2FWcFtL0nnJ9cOP7cfxCAtDrTwitFGdP5vHW8mpeZDiVsuLd9Xtvu6DP4COV0elMyMA%2BTJZJV1M91Gag2M7%2FfKu%2BVDS%2F1JBafMVcg%2BWL0RJR%2FHGtLZbwrQtlpSANn6xuvDApxeHOo74PUDOJj8eCPhOOgzwRj4aQSItcl%2Be4p0qxcvD7i2Ay2JO8ATzOkSjaZ6Re14bkFzp2ThsE%2BYDIJAb9G2e%2FO575WeMlfmq4dnicJUr6%2BBwap9Uo4jp0cFsV1GYGJSnw8%2FPMJ2L9cQGOqUB167vC00KQqffSk8MLR0fm77ryWPkypcBOBJYiHku4pP3c0%2BbFkQAtdEXBd0EeyWZrxxmCHhWPpguIWA3xjmQUyxdi5mDu1xQSWz6RZt4197yPEbS6bxHPnFFE850BICS68seVudLG8lxyBv2N4J%2ByRu%2BPQyoUI0ZUShXjmUuuRLdMRuSLkFzeOQAeOY2bu6LQiq0ccSQRPqSPQOzCIfvvaeju4E9&X-Amz-Signature=2d612e7d52b3f9f639bd8231921fd5eb3846de21a6549c1984cfb7dc0c0c3fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L7CB3K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh7a5H6UUY7xGP248uTFL%2Fhm8%2Bb1thE5%2FsfHnMaXGKFQIgW4EbXLAmDihZN3xJaeJfSZWv%2FuDENEIaCPvTBnNRLboq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEQj4KdsMcVeTc2SyrcA1dofuIE9%2B86HJyP36WT%2BRiAIQqD2ysDWB5ioXIlAWNfo56A3efw6jXVT0qoq94NADWhes1wV%2FVT0eNWZXGhem8oAp8jAIgV%2FrS828PETAqYkdFVnOp8rNFoH84KgNxizvm1%2BPX7AwiH%2FMrAEmc4wue4GdI9PeaaCafUz0kKXtohJa8TR%2Btq3VvWbBMjfEBZawL7MUwzQHwALFwXJmrvxOX42eji%2B1Sup%2BdAeKha9pdI57sz00hNUNSDpIa9KAW7K2jGq6CJLf1sN%2F07QDd%2FcsEh59%2Bk6TsRULEJCzXLMBUE13eXvA74J4m4I0ZvD%2FMWrPHbO7M29v7tFe8uVwIYjiVk0ORYWe6kXNrHdPYgGH2hOutGW7%2FWcFtL0nnJ9cOP7cfxCAtDrTwitFGdP5vHW8mpeZDiVsuLd9Xtvu6DP4COV0elMyMA%2BTJZJV1M91Gag2M7%2FfKu%2BVDS%2F1JBafMVcg%2BWL0RJR%2FHGtLZbwrQtlpSANn6xuvDApxeHOo74PUDOJj8eCPhOOgzwRj4aQSItcl%2Be4p0qxcvD7i2Ay2JO8ATzOkSjaZ6Re14bkFzp2ThsE%2BYDIJAb9G2e%2FO575WeMlfmq4dnicJUr6%2BBwap9Uo4jp0cFsV1GYGJSnw8%2FPMJ2L9cQGOqUB167vC00KQqffSk8MLR0fm77ryWPkypcBOBJYiHku4pP3c0%2BbFkQAtdEXBd0EeyWZrxxmCHhWPpguIWA3xjmQUyxdi5mDu1xQSWz6RZt4197yPEbS6bxHPnFFE850BICS68seVudLG8lxyBv2N4J%2ByRu%2BPQyoUI0ZUShXjmUuuRLdMRuSLkFzeOQAeOY2bu6LQiq0ccSQRPqSPQOzCIfvvaeju4E9&X-Amz-Signature=2c48c5285a19ff203501f542fccad92b4232d9950a1f05696f9f16815c01e129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L7CB3K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh7a5H6UUY7xGP248uTFL%2Fhm8%2Bb1thE5%2FsfHnMaXGKFQIgW4EbXLAmDihZN3xJaeJfSZWv%2FuDENEIaCPvTBnNRLboq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEQj4KdsMcVeTc2SyrcA1dofuIE9%2B86HJyP36WT%2BRiAIQqD2ysDWB5ioXIlAWNfo56A3efw6jXVT0qoq94NADWhes1wV%2FVT0eNWZXGhem8oAp8jAIgV%2FrS828PETAqYkdFVnOp8rNFoH84KgNxizvm1%2BPX7AwiH%2FMrAEmc4wue4GdI9PeaaCafUz0kKXtohJa8TR%2Btq3VvWbBMjfEBZawL7MUwzQHwALFwXJmrvxOX42eji%2B1Sup%2BdAeKha9pdI57sz00hNUNSDpIa9KAW7K2jGq6CJLf1sN%2F07QDd%2FcsEh59%2Bk6TsRULEJCzXLMBUE13eXvA74J4m4I0ZvD%2FMWrPHbO7M29v7tFe8uVwIYjiVk0ORYWe6kXNrHdPYgGH2hOutGW7%2FWcFtL0nnJ9cOP7cfxCAtDrTwitFGdP5vHW8mpeZDiVsuLd9Xtvu6DP4COV0elMyMA%2BTJZJV1M91Gag2M7%2FfKu%2BVDS%2F1JBafMVcg%2BWL0RJR%2FHGtLZbwrQtlpSANn6xuvDApxeHOo74PUDOJj8eCPhOOgzwRj4aQSItcl%2Be4p0qxcvD7i2Ay2JO8ATzOkSjaZ6Re14bkFzp2ThsE%2BYDIJAb9G2e%2FO575WeMlfmq4dnicJUr6%2BBwap9Uo4jp0cFsV1GYGJSnw8%2FPMJ2L9cQGOqUB167vC00KQqffSk8MLR0fm77ryWPkypcBOBJYiHku4pP3c0%2BbFkQAtdEXBd0EeyWZrxxmCHhWPpguIWA3xjmQUyxdi5mDu1xQSWz6RZt4197yPEbS6bxHPnFFE850BICS68seVudLG8lxyBv2N4J%2ByRu%2BPQyoUI0ZUShXjmUuuRLdMRuSLkFzeOQAeOY2bu6LQiq0ccSQRPqSPQOzCIfvvaeju4E9&X-Amz-Signature=8d3c14649611872769bd2cc97d75225a27357e21b434b2db9e578f112b648c61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L7CB3K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh7a5H6UUY7xGP248uTFL%2Fhm8%2Bb1thE5%2FsfHnMaXGKFQIgW4EbXLAmDihZN3xJaeJfSZWv%2FuDENEIaCPvTBnNRLboq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEQj4KdsMcVeTc2SyrcA1dofuIE9%2B86HJyP36WT%2BRiAIQqD2ysDWB5ioXIlAWNfo56A3efw6jXVT0qoq94NADWhes1wV%2FVT0eNWZXGhem8oAp8jAIgV%2FrS828PETAqYkdFVnOp8rNFoH84KgNxizvm1%2BPX7AwiH%2FMrAEmc4wue4GdI9PeaaCafUz0kKXtohJa8TR%2Btq3VvWbBMjfEBZawL7MUwzQHwALFwXJmrvxOX42eji%2B1Sup%2BdAeKha9pdI57sz00hNUNSDpIa9KAW7K2jGq6CJLf1sN%2F07QDd%2FcsEh59%2Bk6TsRULEJCzXLMBUE13eXvA74J4m4I0ZvD%2FMWrPHbO7M29v7tFe8uVwIYjiVk0ORYWe6kXNrHdPYgGH2hOutGW7%2FWcFtL0nnJ9cOP7cfxCAtDrTwitFGdP5vHW8mpeZDiVsuLd9Xtvu6DP4COV0elMyMA%2BTJZJV1M91Gag2M7%2FfKu%2BVDS%2F1JBafMVcg%2BWL0RJR%2FHGtLZbwrQtlpSANn6xuvDApxeHOo74PUDOJj8eCPhOOgzwRj4aQSItcl%2Be4p0qxcvD7i2Ay2JO8ATzOkSjaZ6Re14bkFzp2ThsE%2BYDIJAb9G2e%2FO575WeMlfmq4dnicJUr6%2BBwap9Uo4jp0cFsV1GYGJSnw8%2FPMJ2L9cQGOqUB167vC00KQqffSk8MLR0fm77ryWPkypcBOBJYiHku4pP3c0%2BbFkQAtdEXBd0EeyWZrxxmCHhWPpguIWA3xjmQUyxdi5mDu1xQSWz6RZt4197yPEbS6bxHPnFFE850BICS68seVudLG8lxyBv2N4J%2ByRu%2BPQyoUI0ZUShXjmUuuRLdMRuSLkFzeOQAeOY2bu6LQiq0ccSQRPqSPQOzCIfvvaeju4E9&X-Amz-Signature=ef7f62c0e453128a7a366642962466e4101a6c89afa16020a24f9a6b97ebc2e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L7CB3K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh7a5H6UUY7xGP248uTFL%2Fhm8%2Bb1thE5%2FsfHnMaXGKFQIgW4EbXLAmDihZN3xJaeJfSZWv%2FuDENEIaCPvTBnNRLboq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEQj4KdsMcVeTc2SyrcA1dofuIE9%2B86HJyP36WT%2BRiAIQqD2ysDWB5ioXIlAWNfo56A3efw6jXVT0qoq94NADWhes1wV%2FVT0eNWZXGhem8oAp8jAIgV%2FrS828PETAqYkdFVnOp8rNFoH84KgNxizvm1%2BPX7AwiH%2FMrAEmc4wue4GdI9PeaaCafUz0kKXtohJa8TR%2Btq3VvWbBMjfEBZawL7MUwzQHwALFwXJmrvxOX42eji%2B1Sup%2BdAeKha9pdI57sz00hNUNSDpIa9KAW7K2jGq6CJLf1sN%2F07QDd%2FcsEh59%2Bk6TsRULEJCzXLMBUE13eXvA74J4m4I0ZvD%2FMWrPHbO7M29v7tFe8uVwIYjiVk0ORYWe6kXNrHdPYgGH2hOutGW7%2FWcFtL0nnJ9cOP7cfxCAtDrTwitFGdP5vHW8mpeZDiVsuLd9Xtvu6DP4COV0elMyMA%2BTJZJV1M91Gag2M7%2FfKu%2BVDS%2F1JBafMVcg%2BWL0RJR%2FHGtLZbwrQtlpSANn6xuvDApxeHOo74PUDOJj8eCPhOOgzwRj4aQSItcl%2Be4p0qxcvD7i2Ay2JO8ATzOkSjaZ6Re14bkFzp2ThsE%2BYDIJAb9G2e%2FO575WeMlfmq4dnicJUr6%2BBwap9Uo4jp0cFsV1GYGJSnw8%2FPMJ2L9cQGOqUB167vC00KQqffSk8MLR0fm77ryWPkypcBOBJYiHku4pP3c0%2BbFkQAtdEXBd0EeyWZrxxmCHhWPpguIWA3xjmQUyxdi5mDu1xQSWz6RZt4197yPEbS6bxHPnFFE850BICS68seVudLG8lxyBv2N4J%2ByRu%2BPQyoUI0ZUShXjmUuuRLdMRuSLkFzeOQAeOY2bu6LQiq0ccSQRPqSPQOzCIfvvaeju4E9&X-Amz-Signature=649f67ce626d99c3ddd259eb60a13932ec4c4ca3c924a20b2efc341cd0e0672f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L7CB3K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh7a5H6UUY7xGP248uTFL%2Fhm8%2Bb1thE5%2FsfHnMaXGKFQIgW4EbXLAmDihZN3xJaeJfSZWv%2FuDENEIaCPvTBnNRLboq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEQj4KdsMcVeTc2SyrcA1dofuIE9%2B86HJyP36WT%2BRiAIQqD2ysDWB5ioXIlAWNfo56A3efw6jXVT0qoq94NADWhes1wV%2FVT0eNWZXGhem8oAp8jAIgV%2FrS828PETAqYkdFVnOp8rNFoH84KgNxizvm1%2BPX7AwiH%2FMrAEmc4wue4GdI9PeaaCafUz0kKXtohJa8TR%2Btq3VvWbBMjfEBZawL7MUwzQHwALFwXJmrvxOX42eji%2B1Sup%2BdAeKha9pdI57sz00hNUNSDpIa9KAW7K2jGq6CJLf1sN%2F07QDd%2FcsEh59%2Bk6TsRULEJCzXLMBUE13eXvA74J4m4I0ZvD%2FMWrPHbO7M29v7tFe8uVwIYjiVk0ORYWe6kXNrHdPYgGH2hOutGW7%2FWcFtL0nnJ9cOP7cfxCAtDrTwitFGdP5vHW8mpeZDiVsuLd9Xtvu6DP4COV0elMyMA%2BTJZJV1M91Gag2M7%2FfKu%2BVDS%2F1JBafMVcg%2BWL0RJR%2FHGtLZbwrQtlpSANn6xuvDApxeHOo74PUDOJj8eCPhOOgzwRj4aQSItcl%2Be4p0qxcvD7i2Ay2JO8ATzOkSjaZ6Re14bkFzp2ThsE%2BYDIJAb9G2e%2FO575WeMlfmq4dnicJUr6%2BBwap9Uo4jp0cFsV1GYGJSnw8%2FPMJ2L9cQGOqUB167vC00KQqffSk8MLR0fm77ryWPkypcBOBJYiHku4pP3c0%2BbFkQAtdEXBd0EeyWZrxxmCHhWPpguIWA3xjmQUyxdi5mDu1xQSWz6RZt4197yPEbS6bxHPnFFE850BICS68seVudLG8lxyBv2N4J%2ByRu%2BPQyoUI0ZUShXjmUuuRLdMRuSLkFzeOQAeOY2bu6LQiq0ccSQRPqSPQOzCIfvvaeju4E9&X-Amz-Signature=8ea5d83738991c2f347793b5f712acec4ad7462d3250aa731fbc3a72fd320b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L7CB3K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh7a5H6UUY7xGP248uTFL%2Fhm8%2Bb1thE5%2FsfHnMaXGKFQIgW4EbXLAmDihZN3xJaeJfSZWv%2FuDENEIaCPvTBnNRLboq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEQj4KdsMcVeTc2SyrcA1dofuIE9%2B86HJyP36WT%2BRiAIQqD2ysDWB5ioXIlAWNfo56A3efw6jXVT0qoq94NADWhes1wV%2FVT0eNWZXGhem8oAp8jAIgV%2FrS828PETAqYkdFVnOp8rNFoH84KgNxizvm1%2BPX7AwiH%2FMrAEmc4wue4GdI9PeaaCafUz0kKXtohJa8TR%2Btq3VvWbBMjfEBZawL7MUwzQHwALFwXJmrvxOX42eji%2B1Sup%2BdAeKha9pdI57sz00hNUNSDpIa9KAW7K2jGq6CJLf1sN%2F07QDd%2FcsEh59%2Bk6TsRULEJCzXLMBUE13eXvA74J4m4I0ZvD%2FMWrPHbO7M29v7tFe8uVwIYjiVk0ORYWe6kXNrHdPYgGH2hOutGW7%2FWcFtL0nnJ9cOP7cfxCAtDrTwitFGdP5vHW8mpeZDiVsuLd9Xtvu6DP4COV0elMyMA%2BTJZJV1M91Gag2M7%2FfKu%2BVDS%2F1JBafMVcg%2BWL0RJR%2FHGtLZbwrQtlpSANn6xuvDApxeHOo74PUDOJj8eCPhOOgzwRj4aQSItcl%2Be4p0qxcvD7i2Ay2JO8ATzOkSjaZ6Re14bkFzp2ThsE%2BYDIJAb9G2e%2FO575WeMlfmq4dnicJUr6%2BBwap9Uo4jp0cFsV1GYGJSnw8%2FPMJ2L9cQGOqUB167vC00KQqffSk8MLR0fm77ryWPkypcBOBJYiHku4pP3c0%2BbFkQAtdEXBd0EeyWZrxxmCHhWPpguIWA3xjmQUyxdi5mDu1xQSWz6RZt4197yPEbS6bxHPnFFE850BICS68seVudLG8lxyBv2N4J%2ByRu%2BPQyoUI0ZUShXjmUuuRLdMRuSLkFzeOQAeOY2bu6LQiq0ccSQRPqSPQOzCIfvvaeju4E9&X-Amz-Signature=5e1e02b1b8ab493f11af830c474c1fc9c60f6dfe28f7e36e2553bd44e1a7cf5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L7CB3K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh7a5H6UUY7xGP248uTFL%2Fhm8%2Bb1thE5%2FsfHnMaXGKFQIgW4EbXLAmDihZN3xJaeJfSZWv%2FuDENEIaCPvTBnNRLboq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEQj4KdsMcVeTc2SyrcA1dofuIE9%2B86HJyP36WT%2BRiAIQqD2ysDWB5ioXIlAWNfo56A3efw6jXVT0qoq94NADWhes1wV%2FVT0eNWZXGhem8oAp8jAIgV%2FrS828PETAqYkdFVnOp8rNFoH84KgNxizvm1%2BPX7AwiH%2FMrAEmc4wue4GdI9PeaaCafUz0kKXtohJa8TR%2Btq3VvWbBMjfEBZawL7MUwzQHwALFwXJmrvxOX42eji%2B1Sup%2BdAeKha9pdI57sz00hNUNSDpIa9KAW7K2jGq6CJLf1sN%2F07QDd%2FcsEh59%2Bk6TsRULEJCzXLMBUE13eXvA74J4m4I0ZvD%2FMWrPHbO7M29v7tFe8uVwIYjiVk0ORYWe6kXNrHdPYgGH2hOutGW7%2FWcFtL0nnJ9cOP7cfxCAtDrTwitFGdP5vHW8mpeZDiVsuLd9Xtvu6DP4COV0elMyMA%2BTJZJV1M91Gag2M7%2FfKu%2BVDS%2F1JBafMVcg%2BWL0RJR%2FHGtLZbwrQtlpSANn6xuvDApxeHOo74PUDOJj8eCPhOOgzwRj4aQSItcl%2Be4p0qxcvD7i2Ay2JO8ATzOkSjaZ6Re14bkFzp2ThsE%2BYDIJAb9G2e%2FO575WeMlfmq4dnicJUr6%2BBwap9Uo4jp0cFsV1GYGJSnw8%2FPMJ2L9cQGOqUB167vC00KQqffSk8MLR0fm77ryWPkypcBOBJYiHku4pP3c0%2BbFkQAtdEXBd0EeyWZrxxmCHhWPpguIWA3xjmQUyxdi5mDu1xQSWz6RZt4197yPEbS6bxHPnFFE850BICS68seVudLG8lxyBv2N4J%2ByRu%2BPQyoUI0ZUShXjmUuuRLdMRuSLkFzeOQAeOY2bu6LQiq0ccSQRPqSPQOzCIfvvaeju4E9&X-Amz-Signature=60bb4972dd241a9f436f361fac407bc5f8cb5d29b9cd3d7c3f1d9b2eef1c9b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L7CB3K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh7a5H6UUY7xGP248uTFL%2Fhm8%2Bb1thE5%2FsfHnMaXGKFQIgW4EbXLAmDihZN3xJaeJfSZWv%2FuDENEIaCPvTBnNRLboq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEQj4KdsMcVeTc2SyrcA1dofuIE9%2B86HJyP36WT%2BRiAIQqD2ysDWB5ioXIlAWNfo56A3efw6jXVT0qoq94NADWhes1wV%2FVT0eNWZXGhem8oAp8jAIgV%2FrS828PETAqYkdFVnOp8rNFoH84KgNxizvm1%2BPX7AwiH%2FMrAEmc4wue4GdI9PeaaCafUz0kKXtohJa8TR%2Btq3VvWbBMjfEBZawL7MUwzQHwALFwXJmrvxOX42eji%2B1Sup%2BdAeKha9pdI57sz00hNUNSDpIa9KAW7K2jGq6CJLf1sN%2F07QDd%2FcsEh59%2Bk6TsRULEJCzXLMBUE13eXvA74J4m4I0ZvD%2FMWrPHbO7M29v7tFe8uVwIYjiVk0ORYWe6kXNrHdPYgGH2hOutGW7%2FWcFtL0nnJ9cOP7cfxCAtDrTwitFGdP5vHW8mpeZDiVsuLd9Xtvu6DP4COV0elMyMA%2BTJZJV1M91Gag2M7%2FfKu%2BVDS%2F1JBafMVcg%2BWL0RJR%2FHGtLZbwrQtlpSANn6xuvDApxeHOo74PUDOJj8eCPhOOgzwRj4aQSItcl%2Be4p0qxcvD7i2Ay2JO8ATzOkSjaZ6Re14bkFzp2ThsE%2BYDIJAb9G2e%2FO575WeMlfmq4dnicJUr6%2BBwap9Uo4jp0cFsV1GYGJSnw8%2FPMJ2L9cQGOqUB167vC00KQqffSk8MLR0fm77ryWPkypcBOBJYiHku4pP3c0%2BbFkQAtdEXBd0EeyWZrxxmCHhWPpguIWA3xjmQUyxdi5mDu1xQSWz6RZt4197yPEbS6bxHPnFFE850BICS68seVudLG8lxyBv2N4J%2ByRu%2BPQyoUI0ZUShXjmUuuRLdMRuSLkFzeOQAeOY2bu6LQiq0ccSQRPqSPQOzCIfvvaeju4E9&X-Amz-Signature=eea7704bbd40186cdb045257af43e982897ecf741869b13dca6bd4475f30d252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L7CB3K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh7a5H6UUY7xGP248uTFL%2Fhm8%2Bb1thE5%2FsfHnMaXGKFQIgW4EbXLAmDihZN3xJaeJfSZWv%2FuDENEIaCPvTBnNRLboq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEQj4KdsMcVeTc2SyrcA1dofuIE9%2B86HJyP36WT%2BRiAIQqD2ysDWB5ioXIlAWNfo56A3efw6jXVT0qoq94NADWhes1wV%2FVT0eNWZXGhem8oAp8jAIgV%2FrS828PETAqYkdFVnOp8rNFoH84KgNxizvm1%2BPX7AwiH%2FMrAEmc4wue4GdI9PeaaCafUz0kKXtohJa8TR%2Btq3VvWbBMjfEBZawL7MUwzQHwALFwXJmrvxOX42eji%2B1Sup%2BdAeKha9pdI57sz00hNUNSDpIa9KAW7K2jGq6CJLf1sN%2F07QDd%2FcsEh59%2Bk6TsRULEJCzXLMBUE13eXvA74J4m4I0ZvD%2FMWrPHbO7M29v7tFe8uVwIYjiVk0ORYWe6kXNrHdPYgGH2hOutGW7%2FWcFtL0nnJ9cOP7cfxCAtDrTwitFGdP5vHW8mpeZDiVsuLd9Xtvu6DP4COV0elMyMA%2BTJZJV1M91Gag2M7%2FfKu%2BVDS%2F1JBafMVcg%2BWL0RJR%2FHGtLZbwrQtlpSANn6xuvDApxeHOo74PUDOJj8eCPhOOgzwRj4aQSItcl%2Be4p0qxcvD7i2Ay2JO8ATzOkSjaZ6Re14bkFzp2ThsE%2BYDIJAb9G2e%2FO575WeMlfmq4dnicJUr6%2BBwap9Uo4jp0cFsV1GYGJSnw8%2FPMJ2L9cQGOqUB167vC00KQqffSk8MLR0fm77ryWPkypcBOBJYiHku4pP3c0%2BbFkQAtdEXBd0EeyWZrxxmCHhWPpguIWA3xjmQUyxdi5mDu1xQSWz6RZt4197yPEbS6bxHPnFFE850BICS68seVudLG8lxyBv2N4J%2ByRu%2BPQyoUI0ZUShXjmUuuRLdMRuSLkFzeOQAeOY2bu6LQiq0ccSQRPqSPQOzCIfvvaeju4E9&X-Amz-Signature=9f6d2f61f3567507529f77557b61dd889114b0b53afa899c43c52d8d347d5b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3L7CB3K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh7a5H6UUY7xGP248uTFL%2Fhm8%2Bb1thE5%2FsfHnMaXGKFQIgW4EbXLAmDihZN3xJaeJfSZWv%2FuDENEIaCPvTBnNRLboq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEQj4KdsMcVeTc2SyrcA1dofuIE9%2B86HJyP36WT%2BRiAIQqD2ysDWB5ioXIlAWNfo56A3efw6jXVT0qoq94NADWhes1wV%2FVT0eNWZXGhem8oAp8jAIgV%2FrS828PETAqYkdFVnOp8rNFoH84KgNxizvm1%2BPX7AwiH%2FMrAEmc4wue4GdI9PeaaCafUz0kKXtohJa8TR%2Btq3VvWbBMjfEBZawL7MUwzQHwALFwXJmrvxOX42eji%2B1Sup%2BdAeKha9pdI57sz00hNUNSDpIa9KAW7K2jGq6CJLf1sN%2F07QDd%2FcsEh59%2Bk6TsRULEJCzXLMBUE13eXvA74J4m4I0ZvD%2FMWrPHbO7M29v7tFe8uVwIYjiVk0ORYWe6kXNrHdPYgGH2hOutGW7%2FWcFtL0nnJ9cOP7cfxCAtDrTwitFGdP5vHW8mpeZDiVsuLd9Xtvu6DP4COV0elMyMA%2BTJZJV1M91Gag2M7%2FfKu%2BVDS%2F1JBafMVcg%2BWL0RJR%2FHGtLZbwrQtlpSANn6xuvDApxeHOo74PUDOJj8eCPhOOgzwRj4aQSItcl%2Be4p0qxcvD7i2Ay2JO8ATzOkSjaZ6Re14bkFzp2ThsE%2BYDIJAb9G2e%2FO575WeMlfmq4dnicJUr6%2BBwap9Uo4jp0cFsV1GYGJSnw8%2FPMJ2L9cQGOqUB167vC00KQqffSk8MLR0fm77ryWPkypcBOBJYiHku4pP3c0%2BbFkQAtdEXBd0EeyWZrxxmCHhWPpguIWA3xjmQUyxdi5mDu1xQSWz6RZt4197yPEbS6bxHPnFFE850BICS68seVudLG8lxyBv2N4J%2ByRu%2BPQyoUI0ZUShXjmUuuRLdMRuSLkFzeOQAeOY2bu6LQiq0ccSQRPqSPQOzCIfvvaeju4E9&X-Amz-Signature=9e59d9e81af5d90086380c49d152b2e9d6c0f906e110d773b888a2972862746f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
