---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-29T16:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-29T16:11:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTV7E4LI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCy9bSY%2BFgg%2F3dIYbkuM1ERwPt7SC2YXA%2BIErMOw3WMTwIgZba0Q1QtcQGlWTjTRdRxu%2BXIvg8uIBgXxdkYr2DChRwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9nPprFKeC9yh%2FdQircA1472kZ%2F2qekkodGQG46gnWoXCZMhMFB%2FgOlsp4qOt7ZHgBjqaj2m7bIdtwpZz5iEnGxIU%2FC4pdgHMz8isppWAzw29TWxP7qWAcKYbGUglizPMFES2nlLQkxrLawf1vnVMJKDNE142qMmQUilQ0U8yorARVZC5I3fzl5LiBG1%2FuO8BQ3zJI8q1uSeRioYeFefAHdZHk4ph6YiarvsRO1mD%2BtH5eoU4DWT4Xe22oGakQYjUs%2F3jDXyJT3jyfLQmuYeJGAeQ8pJH6jzL7x8BvEpqLo%2FvXi8XIcIvsu2CuHRaWT51q5KpkU0izuBLtKPefj9XHKyE49%2BOTO9mOJ3TN9l0oPf2MIxXQws623TCs2YRKeys6AVxC6AeAsiPEVwc%2FQwIhDTJ2vnp8uHZK0t4h1xGTm1JxA%2FaGvl7DK1QA756xQWaIVJjfTOQSaDmWtsjW1EveN0OszhMl3JiYO433m3pdEiaFLqVFmZSoGKhQYMHdeF9k%2BjiQqLh9qNSKn5T8y1tjc2hoWGwgUNCiJYDnpTy6AYqzZXGJmmvQbUtvnI939iN4jgMavD6rqrLabwJUZTsvojQ2a%2BoEMD2j5iqFQGRf2etOyAPbknayoPOBm8fUB4m148iEXV53cMSDYMOrLo8QGOqUBiCI%2FFWG%2BW%2FLMlQ3FtHhq57zAQ5UoDDedWqigtSNi767EwGPLPJ7rTENbAtzzzZGXSz88ZotrtvtcJuxMFdG9My1mm%2B1%2FVBeUTTdcVdRarWUDq%2Bjdr25yyKcPxv3p3jPODcEz49En1%2FP5pTC3eSXZaRz6JBScOgaWke2JDx3t4MULn3vacsXN8AYPLPt3Q2zy2sUwHr2xWg0DCYvRD64rd6JnyysA&X-Amz-Signature=6cd9ca0a9bd37a2a29b90fbbe3be943aecace1ab2b14f6b904a15b09af5c1359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: add rviz guide of viewing scanned map

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTV7E4LI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCy9bSY%2BFgg%2F3dIYbkuM1ERwPt7SC2YXA%2BIErMOw3WMTwIgZba0Q1QtcQGlWTjTRdRxu%2BXIvg8uIBgXxdkYr2DChRwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9nPprFKeC9yh%2FdQircA1472kZ%2F2qekkodGQG46gnWoXCZMhMFB%2FgOlsp4qOt7ZHgBjqaj2m7bIdtwpZz5iEnGxIU%2FC4pdgHMz8isppWAzw29TWxP7qWAcKYbGUglizPMFES2nlLQkxrLawf1vnVMJKDNE142qMmQUilQ0U8yorARVZC5I3fzl5LiBG1%2FuO8BQ3zJI8q1uSeRioYeFefAHdZHk4ph6YiarvsRO1mD%2BtH5eoU4DWT4Xe22oGakQYjUs%2F3jDXyJT3jyfLQmuYeJGAeQ8pJH6jzL7x8BvEpqLo%2FvXi8XIcIvsu2CuHRaWT51q5KpkU0izuBLtKPefj9XHKyE49%2BOTO9mOJ3TN9l0oPf2MIxXQws623TCs2YRKeys6AVxC6AeAsiPEVwc%2FQwIhDTJ2vnp8uHZK0t4h1xGTm1JxA%2FaGvl7DK1QA756xQWaIVJjfTOQSaDmWtsjW1EveN0OszhMl3JiYO433m3pdEiaFLqVFmZSoGKhQYMHdeF9k%2BjiQqLh9qNSKn5T8y1tjc2hoWGwgUNCiJYDnpTy6AYqzZXGJmmvQbUtvnI939iN4jgMavD6rqrLabwJUZTsvojQ2a%2BoEMD2j5iqFQGRf2etOyAPbknayoPOBm8fUB4m148iEXV53cMSDYMOrLo8QGOqUBiCI%2FFWG%2BW%2FLMlQ3FtHhq57zAQ5UoDDedWqigtSNi767EwGPLPJ7rTENbAtzzzZGXSz88ZotrtvtcJuxMFdG9My1mm%2B1%2FVBeUTTdcVdRarWUDq%2Bjdr25yyKcPxv3p3jPODcEz49En1%2FP5pTC3eSXZaRz6JBScOgaWke2JDx3t4MULn3vacsXN8AYPLPt3Q2zy2sUwHr2xWg0DCYvRD64rd6JnyysA&X-Amz-Signature=06f2c482ff70c8022080d4dd258de55120b555380b2c59e6da5e25be9854a8a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTV7E4LI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCy9bSY%2BFgg%2F3dIYbkuM1ERwPt7SC2YXA%2BIErMOw3WMTwIgZba0Q1QtcQGlWTjTRdRxu%2BXIvg8uIBgXxdkYr2DChRwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9nPprFKeC9yh%2FdQircA1472kZ%2F2qekkodGQG46gnWoXCZMhMFB%2FgOlsp4qOt7ZHgBjqaj2m7bIdtwpZz5iEnGxIU%2FC4pdgHMz8isppWAzw29TWxP7qWAcKYbGUglizPMFES2nlLQkxrLawf1vnVMJKDNE142qMmQUilQ0U8yorARVZC5I3fzl5LiBG1%2FuO8BQ3zJI8q1uSeRioYeFefAHdZHk4ph6YiarvsRO1mD%2BtH5eoU4DWT4Xe22oGakQYjUs%2F3jDXyJT3jyfLQmuYeJGAeQ8pJH6jzL7x8BvEpqLo%2FvXi8XIcIvsu2CuHRaWT51q5KpkU0izuBLtKPefj9XHKyE49%2BOTO9mOJ3TN9l0oPf2MIxXQws623TCs2YRKeys6AVxC6AeAsiPEVwc%2FQwIhDTJ2vnp8uHZK0t4h1xGTm1JxA%2FaGvl7DK1QA756xQWaIVJjfTOQSaDmWtsjW1EveN0OszhMl3JiYO433m3pdEiaFLqVFmZSoGKhQYMHdeF9k%2BjiQqLh9qNSKn5T8y1tjc2hoWGwgUNCiJYDnpTy6AYqzZXGJmmvQbUtvnI939iN4jgMavD6rqrLabwJUZTsvojQ2a%2BoEMD2j5iqFQGRf2etOyAPbknayoPOBm8fUB4m148iEXV53cMSDYMOrLo8QGOqUBiCI%2FFWG%2BW%2FLMlQ3FtHhq57zAQ5UoDDedWqigtSNi767EwGPLPJ7rTENbAtzzzZGXSz88ZotrtvtcJuxMFdG9My1mm%2B1%2FVBeUTTdcVdRarWUDq%2Bjdr25yyKcPxv3p3jPODcEz49En1%2FP5pTC3eSXZaRz6JBScOgaWke2JDx3t4MULn3vacsXN8AYPLPt3Q2zy2sUwHr2xWg0DCYvRD64rd6JnyysA&X-Amz-Signature=4e47ee21777fe9a6adb887853396461387b55da1ff2c99fd5315217619fe662d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

### SLAM Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTV7E4LI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCy9bSY%2BFgg%2F3dIYbkuM1ERwPt7SC2YXA%2BIErMOw3WMTwIgZba0Q1QtcQGlWTjTRdRxu%2BXIvg8uIBgXxdkYr2DChRwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9nPprFKeC9yh%2FdQircA1472kZ%2F2qekkodGQG46gnWoXCZMhMFB%2FgOlsp4qOt7ZHgBjqaj2m7bIdtwpZz5iEnGxIU%2FC4pdgHMz8isppWAzw29TWxP7qWAcKYbGUglizPMFES2nlLQkxrLawf1vnVMJKDNE142qMmQUilQ0U8yorARVZC5I3fzl5LiBG1%2FuO8BQ3zJI8q1uSeRioYeFefAHdZHk4ph6YiarvsRO1mD%2BtH5eoU4DWT4Xe22oGakQYjUs%2F3jDXyJT3jyfLQmuYeJGAeQ8pJH6jzL7x8BvEpqLo%2FvXi8XIcIvsu2CuHRaWT51q5KpkU0izuBLtKPefj9XHKyE49%2BOTO9mOJ3TN9l0oPf2MIxXQws623TCs2YRKeys6AVxC6AeAsiPEVwc%2FQwIhDTJ2vnp8uHZK0t4h1xGTm1JxA%2FaGvl7DK1QA756xQWaIVJjfTOQSaDmWtsjW1EveN0OszhMl3JiYO433m3pdEiaFLqVFmZSoGKhQYMHdeF9k%2BjiQqLh9qNSKn5T8y1tjc2hoWGwgUNCiJYDnpTy6AYqzZXGJmmvQbUtvnI939iN4jgMavD6rqrLabwJUZTsvojQ2a%2BoEMD2j5iqFQGRf2etOyAPbknayoPOBm8fUB4m148iEXV53cMSDYMOrLo8QGOqUBiCI%2FFWG%2BW%2FLMlQ3FtHhq57zAQ5UoDDedWqigtSNi767EwGPLPJ7rTENbAtzzzZGXSz88ZotrtvtcJuxMFdG9My1mm%2B1%2FVBeUTTdcVdRarWUDq%2Bjdr25yyKcPxv3p3jPODcEz49En1%2FP5pTC3eSXZaRz6JBScOgaWke2JDx3t4MULn3vacsXN8AYPLPt3Q2zy2sUwHr2xWg0DCYvRD64rd6JnyysA&X-Amz-Signature=6b0a4a3b90095b3c9b0684b6f9ad8bd277dd79960c979d569f41fe3b63047f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTV7E4LI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCy9bSY%2BFgg%2F3dIYbkuM1ERwPt7SC2YXA%2BIErMOw3WMTwIgZba0Q1QtcQGlWTjTRdRxu%2BXIvg8uIBgXxdkYr2DChRwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9nPprFKeC9yh%2FdQircA1472kZ%2F2qekkodGQG46gnWoXCZMhMFB%2FgOlsp4qOt7ZHgBjqaj2m7bIdtwpZz5iEnGxIU%2FC4pdgHMz8isppWAzw29TWxP7qWAcKYbGUglizPMFES2nlLQkxrLawf1vnVMJKDNE142qMmQUilQ0U8yorARVZC5I3fzl5LiBG1%2FuO8BQ3zJI8q1uSeRioYeFefAHdZHk4ph6YiarvsRO1mD%2BtH5eoU4DWT4Xe22oGakQYjUs%2F3jDXyJT3jyfLQmuYeJGAeQ8pJH6jzL7x8BvEpqLo%2FvXi8XIcIvsu2CuHRaWT51q5KpkU0izuBLtKPefj9XHKyE49%2BOTO9mOJ3TN9l0oPf2MIxXQws623TCs2YRKeys6AVxC6AeAsiPEVwc%2FQwIhDTJ2vnp8uHZK0t4h1xGTm1JxA%2FaGvl7DK1QA756xQWaIVJjfTOQSaDmWtsjW1EveN0OszhMl3JiYO433m3pdEiaFLqVFmZSoGKhQYMHdeF9k%2BjiQqLh9qNSKn5T8y1tjc2hoWGwgUNCiJYDnpTy6AYqzZXGJmmvQbUtvnI939iN4jgMavD6rqrLabwJUZTsvojQ2a%2BoEMD2j5iqFQGRf2etOyAPbknayoPOBm8fUB4m148iEXV53cMSDYMOrLo8QGOqUBiCI%2FFWG%2BW%2FLMlQ3FtHhq57zAQ5UoDDedWqigtSNi767EwGPLPJ7rTENbAtzzzZGXSz88ZotrtvtcJuxMFdG9My1mm%2B1%2FVBeUTTdcVdRarWUDq%2Bjdr25yyKcPxv3p3jPODcEz49En1%2FP5pTC3eSXZaRz6JBScOgaWke2JDx3t4MULn3vacsXN8AYPLPt3Q2zy2sUwHr2xWg0DCYvRD64rd6JnyysA&X-Amz-Signature=0e33b2afcfc0c0824d193ce9b1bbd64c561fd9f12089eae5a76f8e05623d74d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTV7E4LI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCy9bSY%2BFgg%2F3dIYbkuM1ERwPt7SC2YXA%2BIErMOw3WMTwIgZba0Q1QtcQGlWTjTRdRxu%2BXIvg8uIBgXxdkYr2DChRwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9nPprFKeC9yh%2FdQircA1472kZ%2F2qekkodGQG46gnWoXCZMhMFB%2FgOlsp4qOt7ZHgBjqaj2m7bIdtwpZz5iEnGxIU%2FC4pdgHMz8isppWAzw29TWxP7qWAcKYbGUglizPMFES2nlLQkxrLawf1vnVMJKDNE142qMmQUilQ0U8yorARVZC5I3fzl5LiBG1%2FuO8BQ3zJI8q1uSeRioYeFefAHdZHk4ph6YiarvsRO1mD%2BtH5eoU4DWT4Xe22oGakQYjUs%2F3jDXyJT3jyfLQmuYeJGAeQ8pJH6jzL7x8BvEpqLo%2FvXi8XIcIvsu2CuHRaWT51q5KpkU0izuBLtKPefj9XHKyE49%2BOTO9mOJ3TN9l0oPf2MIxXQws623TCs2YRKeys6AVxC6AeAsiPEVwc%2FQwIhDTJ2vnp8uHZK0t4h1xGTm1JxA%2FaGvl7DK1QA756xQWaIVJjfTOQSaDmWtsjW1EveN0OszhMl3JiYO433m3pdEiaFLqVFmZSoGKhQYMHdeF9k%2BjiQqLh9qNSKn5T8y1tjc2hoWGwgUNCiJYDnpTy6AYqzZXGJmmvQbUtvnI939iN4jgMavD6rqrLabwJUZTsvojQ2a%2BoEMD2j5iqFQGRf2etOyAPbknayoPOBm8fUB4m148iEXV53cMSDYMOrLo8QGOqUBiCI%2FFWG%2BW%2FLMlQ3FtHhq57zAQ5UoDDedWqigtSNi767EwGPLPJ7rTENbAtzzzZGXSz88ZotrtvtcJuxMFdG9My1mm%2B1%2FVBeUTTdcVdRarWUDq%2Bjdr25yyKcPxv3p3jPODcEz49En1%2FP5pTC3eSXZaRz6JBScOgaWke2JDx3t4MULn3vacsXN8AYPLPt3Q2zy2sUwHr2xWg0DCYvRD64rd6JnyysA&X-Amz-Signature=8f6498db6854f943ef0ee5399127cba3ac0de4024c9f0289db69bdb0870da513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTV7E4LI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCy9bSY%2BFgg%2F3dIYbkuM1ERwPt7SC2YXA%2BIErMOw3WMTwIgZba0Q1QtcQGlWTjTRdRxu%2BXIvg8uIBgXxdkYr2DChRwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9nPprFKeC9yh%2FdQircA1472kZ%2F2qekkodGQG46gnWoXCZMhMFB%2FgOlsp4qOt7ZHgBjqaj2m7bIdtwpZz5iEnGxIU%2FC4pdgHMz8isppWAzw29TWxP7qWAcKYbGUglizPMFES2nlLQkxrLawf1vnVMJKDNE142qMmQUilQ0U8yorARVZC5I3fzl5LiBG1%2FuO8BQ3zJI8q1uSeRioYeFefAHdZHk4ph6YiarvsRO1mD%2BtH5eoU4DWT4Xe22oGakQYjUs%2F3jDXyJT3jyfLQmuYeJGAeQ8pJH6jzL7x8BvEpqLo%2FvXi8XIcIvsu2CuHRaWT51q5KpkU0izuBLtKPefj9XHKyE49%2BOTO9mOJ3TN9l0oPf2MIxXQws623TCs2YRKeys6AVxC6AeAsiPEVwc%2FQwIhDTJ2vnp8uHZK0t4h1xGTm1JxA%2FaGvl7DK1QA756xQWaIVJjfTOQSaDmWtsjW1EveN0OszhMl3JiYO433m3pdEiaFLqVFmZSoGKhQYMHdeF9k%2BjiQqLh9qNSKn5T8y1tjc2hoWGwgUNCiJYDnpTy6AYqzZXGJmmvQbUtvnI939iN4jgMavD6rqrLabwJUZTsvojQ2a%2BoEMD2j5iqFQGRf2etOyAPbknayoPOBm8fUB4m148iEXV53cMSDYMOrLo8QGOqUBiCI%2FFWG%2BW%2FLMlQ3FtHhq57zAQ5UoDDedWqigtSNi767EwGPLPJ7rTENbAtzzzZGXSz88ZotrtvtcJuxMFdG9My1mm%2B1%2FVBeUTTdcVdRarWUDq%2Bjdr25yyKcPxv3p3jPODcEz49En1%2FP5pTC3eSXZaRz6JBScOgaWke2JDx3t4MULn3vacsXN8AYPLPt3Q2zy2sUwHr2xWg0DCYvRD64rd6JnyysA&X-Amz-Signature=64db17c9bd0e3996fc5a561f661e3a558aed02db4fa3b179e9a04cfc0bee8aa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTV7E4LI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCy9bSY%2BFgg%2F3dIYbkuM1ERwPt7SC2YXA%2BIErMOw3WMTwIgZba0Q1QtcQGlWTjTRdRxu%2BXIvg8uIBgXxdkYr2DChRwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9nPprFKeC9yh%2FdQircA1472kZ%2F2qekkodGQG46gnWoXCZMhMFB%2FgOlsp4qOt7ZHgBjqaj2m7bIdtwpZz5iEnGxIU%2FC4pdgHMz8isppWAzw29TWxP7qWAcKYbGUglizPMFES2nlLQkxrLawf1vnVMJKDNE142qMmQUilQ0U8yorARVZC5I3fzl5LiBG1%2FuO8BQ3zJI8q1uSeRioYeFefAHdZHk4ph6YiarvsRO1mD%2BtH5eoU4DWT4Xe22oGakQYjUs%2F3jDXyJT3jyfLQmuYeJGAeQ8pJH6jzL7x8BvEpqLo%2FvXi8XIcIvsu2CuHRaWT51q5KpkU0izuBLtKPefj9XHKyE49%2BOTO9mOJ3TN9l0oPf2MIxXQws623TCs2YRKeys6AVxC6AeAsiPEVwc%2FQwIhDTJ2vnp8uHZK0t4h1xGTm1JxA%2FaGvl7DK1QA756xQWaIVJjfTOQSaDmWtsjW1EveN0OszhMl3JiYO433m3pdEiaFLqVFmZSoGKhQYMHdeF9k%2BjiQqLh9qNSKn5T8y1tjc2hoWGwgUNCiJYDnpTy6AYqzZXGJmmvQbUtvnI939iN4jgMavD6rqrLabwJUZTsvojQ2a%2BoEMD2j5iqFQGRf2etOyAPbknayoPOBm8fUB4m148iEXV53cMSDYMOrLo8QGOqUBiCI%2FFWG%2BW%2FLMlQ3FtHhq57zAQ5UoDDedWqigtSNi767EwGPLPJ7rTENbAtzzzZGXSz88ZotrtvtcJuxMFdG9My1mm%2B1%2FVBeUTTdcVdRarWUDq%2Bjdr25yyKcPxv3p3jPODcEz49En1%2FP5pTC3eSXZaRz6JBScOgaWke2JDx3t4MULn3vacsXN8AYPLPt3Q2zy2sUwHr2xWg0DCYvRD64rd6JnyysA&X-Amz-Signature=26e4e2a0cd45a92747efcdab00c2a39276d39a1a89ca96e79f207eaff1c46979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTV7E4LI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCy9bSY%2BFgg%2F3dIYbkuM1ERwPt7SC2YXA%2BIErMOw3WMTwIgZba0Q1QtcQGlWTjTRdRxu%2BXIvg8uIBgXxdkYr2DChRwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9nPprFKeC9yh%2FdQircA1472kZ%2F2qekkodGQG46gnWoXCZMhMFB%2FgOlsp4qOt7ZHgBjqaj2m7bIdtwpZz5iEnGxIU%2FC4pdgHMz8isppWAzw29TWxP7qWAcKYbGUglizPMFES2nlLQkxrLawf1vnVMJKDNE142qMmQUilQ0U8yorARVZC5I3fzl5LiBG1%2FuO8BQ3zJI8q1uSeRioYeFefAHdZHk4ph6YiarvsRO1mD%2BtH5eoU4DWT4Xe22oGakQYjUs%2F3jDXyJT3jyfLQmuYeJGAeQ8pJH6jzL7x8BvEpqLo%2FvXi8XIcIvsu2CuHRaWT51q5KpkU0izuBLtKPefj9XHKyE49%2BOTO9mOJ3TN9l0oPf2MIxXQws623TCs2YRKeys6AVxC6AeAsiPEVwc%2FQwIhDTJ2vnp8uHZK0t4h1xGTm1JxA%2FaGvl7DK1QA756xQWaIVJjfTOQSaDmWtsjW1EveN0OszhMl3JiYO433m3pdEiaFLqVFmZSoGKhQYMHdeF9k%2BjiQqLh9qNSKn5T8y1tjc2hoWGwgUNCiJYDnpTy6AYqzZXGJmmvQbUtvnI939iN4jgMavD6rqrLabwJUZTsvojQ2a%2BoEMD2j5iqFQGRf2etOyAPbknayoPOBm8fUB4m148iEXV53cMSDYMOrLo8QGOqUBiCI%2FFWG%2BW%2FLMlQ3FtHhq57zAQ5UoDDedWqigtSNi767EwGPLPJ7rTENbAtzzzZGXSz88ZotrtvtcJuxMFdG9My1mm%2B1%2FVBeUTTdcVdRarWUDq%2Bjdr25yyKcPxv3p3jPODcEz49En1%2FP5pTC3eSXZaRz6JBScOgaWke2JDx3t4MULn3vacsXN8AYPLPt3Q2zy2sUwHr2xWg0DCYvRD64rd6JnyysA&X-Amz-Signature=38945e5fbda67b632ade89b2d81bd5f2bb015224cac23740071787b27ff61b8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTV7E4LI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCy9bSY%2BFgg%2F3dIYbkuM1ERwPt7SC2YXA%2BIErMOw3WMTwIgZba0Q1QtcQGlWTjTRdRxu%2BXIvg8uIBgXxdkYr2DChRwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9nPprFKeC9yh%2FdQircA1472kZ%2F2qekkodGQG46gnWoXCZMhMFB%2FgOlsp4qOt7ZHgBjqaj2m7bIdtwpZz5iEnGxIU%2FC4pdgHMz8isppWAzw29TWxP7qWAcKYbGUglizPMFES2nlLQkxrLawf1vnVMJKDNE142qMmQUilQ0U8yorARVZC5I3fzl5LiBG1%2FuO8BQ3zJI8q1uSeRioYeFefAHdZHk4ph6YiarvsRO1mD%2BtH5eoU4DWT4Xe22oGakQYjUs%2F3jDXyJT3jyfLQmuYeJGAeQ8pJH6jzL7x8BvEpqLo%2FvXi8XIcIvsu2CuHRaWT51q5KpkU0izuBLtKPefj9XHKyE49%2BOTO9mOJ3TN9l0oPf2MIxXQws623TCs2YRKeys6AVxC6AeAsiPEVwc%2FQwIhDTJ2vnp8uHZK0t4h1xGTm1JxA%2FaGvl7DK1QA756xQWaIVJjfTOQSaDmWtsjW1EveN0OszhMl3JiYO433m3pdEiaFLqVFmZSoGKhQYMHdeF9k%2BjiQqLh9qNSKn5T8y1tjc2hoWGwgUNCiJYDnpTy6AYqzZXGJmmvQbUtvnI939iN4jgMavD6rqrLabwJUZTsvojQ2a%2BoEMD2j5iqFQGRf2etOyAPbknayoPOBm8fUB4m148iEXV53cMSDYMOrLo8QGOqUBiCI%2FFWG%2BW%2FLMlQ3FtHhq57zAQ5UoDDedWqigtSNi767EwGPLPJ7rTENbAtzzzZGXSz88ZotrtvtcJuxMFdG9My1mm%2B1%2FVBeUTTdcVdRarWUDq%2Bjdr25yyKcPxv3p3jPODcEz49En1%2FP5pTC3eSXZaRz6JBScOgaWke2JDx3t4MULn3vacsXN8AYPLPt3Q2zy2sUwHr2xWg0DCYvRD64rd6JnyysA&X-Amz-Signature=48028754e34e18d08b1b15cec0c8466b9e346f81bb24d69b250a2ad715dc8d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTV7E4LI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCy9bSY%2BFgg%2F3dIYbkuM1ERwPt7SC2YXA%2BIErMOw3WMTwIgZba0Q1QtcQGlWTjTRdRxu%2BXIvg8uIBgXxdkYr2DChRwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9nPprFKeC9yh%2FdQircA1472kZ%2F2qekkodGQG46gnWoXCZMhMFB%2FgOlsp4qOt7ZHgBjqaj2m7bIdtwpZz5iEnGxIU%2FC4pdgHMz8isppWAzw29TWxP7qWAcKYbGUglizPMFES2nlLQkxrLawf1vnVMJKDNE142qMmQUilQ0U8yorARVZC5I3fzl5LiBG1%2FuO8BQ3zJI8q1uSeRioYeFefAHdZHk4ph6YiarvsRO1mD%2BtH5eoU4DWT4Xe22oGakQYjUs%2F3jDXyJT3jyfLQmuYeJGAeQ8pJH6jzL7x8BvEpqLo%2FvXi8XIcIvsu2CuHRaWT51q5KpkU0izuBLtKPefj9XHKyE49%2BOTO9mOJ3TN9l0oPf2MIxXQws623TCs2YRKeys6AVxC6AeAsiPEVwc%2FQwIhDTJ2vnp8uHZK0t4h1xGTm1JxA%2FaGvl7DK1QA756xQWaIVJjfTOQSaDmWtsjW1EveN0OszhMl3JiYO433m3pdEiaFLqVFmZSoGKhQYMHdeF9k%2BjiQqLh9qNSKn5T8y1tjc2hoWGwgUNCiJYDnpTy6AYqzZXGJmmvQbUtvnI939iN4jgMavD6rqrLabwJUZTsvojQ2a%2BoEMD2j5iqFQGRf2etOyAPbknayoPOBm8fUB4m148iEXV53cMSDYMOrLo8QGOqUBiCI%2FFWG%2BW%2FLMlQ3FtHhq57zAQ5UoDDedWqigtSNi767EwGPLPJ7rTENbAtzzzZGXSz88ZotrtvtcJuxMFdG9My1mm%2B1%2FVBeUTTdcVdRarWUDq%2Bjdr25yyKcPxv3p3jPODcEz49En1%2FP5pTC3eSXZaRz6JBScOgaWke2JDx3t4MULn3vacsXN8AYPLPt3Q2zy2sUwHr2xWg0DCYvRD64rd6JnyysA&X-Amz-Signature=80e48cab15d2847f5c74a44e1bf044dc73e5ebbd09d81c50dd99897d80392e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTV7E4LI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCy9bSY%2BFgg%2F3dIYbkuM1ERwPt7SC2YXA%2BIErMOw3WMTwIgZba0Q1QtcQGlWTjTRdRxu%2BXIvg8uIBgXxdkYr2DChRwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9nPprFKeC9yh%2FdQircA1472kZ%2F2qekkodGQG46gnWoXCZMhMFB%2FgOlsp4qOt7ZHgBjqaj2m7bIdtwpZz5iEnGxIU%2FC4pdgHMz8isppWAzw29TWxP7qWAcKYbGUglizPMFES2nlLQkxrLawf1vnVMJKDNE142qMmQUilQ0U8yorARVZC5I3fzl5LiBG1%2FuO8BQ3zJI8q1uSeRioYeFefAHdZHk4ph6YiarvsRO1mD%2BtH5eoU4DWT4Xe22oGakQYjUs%2F3jDXyJT3jyfLQmuYeJGAeQ8pJH6jzL7x8BvEpqLo%2FvXi8XIcIvsu2CuHRaWT51q5KpkU0izuBLtKPefj9XHKyE49%2BOTO9mOJ3TN9l0oPf2MIxXQws623TCs2YRKeys6AVxC6AeAsiPEVwc%2FQwIhDTJ2vnp8uHZK0t4h1xGTm1JxA%2FaGvl7DK1QA756xQWaIVJjfTOQSaDmWtsjW1EveN0OszhMl3JiYO433m3pdEiaFLqVFmZSoGKhQYMHdeF9k%2BjiQqLh9qNSKn5T8y1tjc2hoWGwgUNCiJYDnpTy6AYqzZXGJmmvQbUtvnI939iN4jgMavD6rqrLabwJUZTsvojQ2a%2BoEMD2j5iqFQGRf2etOyAPbknayoPOBm8fUB4m148iEXV53cMSDYMOrLo8QGOqUBiCI%2FFWG%2BW%2FLMlQ3FtHhq57zAQ5UoDDedWqigtSNi767EwGPLPJ7rTENbAtzzzZGXSz88ZotrtvtcJuxMFdG9My1mm%2B1%2FVBeUTTdcVdRarWUDq%2Bjdr25yyKcPxv3p3jPODcEz49En1%2FP5pTC3eSXZaRz6JBScOgaWke2JDx3t4MULn3vacsXN8AYPLPt3Q2zy2sUwHr2xWg0DCYvRD64rd6JnyysA&X-Amz-Signature=734270cabd0e8e91c141e7c9d07c3b9aa5b1b60c7a00e5912f668f3d459f600b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTV7E4LI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCy9bSY%2BFgg%2F3dIYbkuM1ERwPt7SC2YXA%2BIErMOw3WMTwIgZba0Q1QtcQGlWTjTRdRxu%2BXIvg8uIBgXxdkYr2DChRwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9nPprFKeC9yh%2FdQircA1472kZ%2F2qekkodGQG46gnWoXCZMhMFB%2FgOlsp4qOt7ZHgBjqaj2m7bIdtwpZz5iEnGxIU%2FC4pdgHMz8isppWAzw29TWxP7qWAcKYbGUglizPMFES2nlLQkxrLawf1vnVMJKDNE142qMmQUilQ0U8yorARVZC5I3fzl5LiBG1%2FuO8BQ3zJI8q1uSeRioYeFefAHdZHk4ph6YiarvsRO1mD%2BtH5eoU4DWT4Xe22oGakQYjUs%2F3jDXyJT3jyfLQmuYeJGAeQ8pJH6jzL7x8BvEpqLo%2FvXi8XIcIvsu2CuHRaWT51q5KpkU0izuBLtKPefj9XHKyE49%2BOTO9mOJ3TN9l0oPf2MIxXQws623TCs2YRKeys6AVxC6AeAsiPEVwc%2FQwIhDTJ2vnp8uHZK0t4h1xGTm1JxA%2FaGvl7DK1QA756xQWaIVJjfTOQSaDmWtsjW1EveN0OszhMl3JiYO433m3pdEiaFLqVFmZSoGKhQYMHdeF9k%2BjiQqLh9qNSKn5T8y1tjc2hoWGwgUNCiJYDnpTy6AYqzZXGJmmvQbUtvnI939iN4jgMavD6rqrLabwJUZTsvojQ2a%2BoEMD2j5iqFQGRf2etOyAPbknayoPOBm8fUB4m148iEXV53cMSDYMOrLo8QGOqUBiCI%2FFWG%2BW%2FLMlQ3FtHhq57zAQ5UoDDedWqigtSNi767EwGPLPJ7rTENbAtzzzZGXSz88ZotrtvtcJuxMFdG9My1mm%2B1%2FVBeUTTdcVdRarWUDq%2Bjdr25yyKcPxv3p3jPODcEz49En1%2FP5pTC3eSXZaRz6JBScOgaWke2JDx3t4MULn3vacsXN8AYPLPt3Q2zy2sUwHr2xWg0DCYvRD64rd6JnyysA&X-Amz-Signature=48651353e0a6c66b1e3d163768720a2f43e26fc4169a94448a784b8f8ac91461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTV7E4LI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCy9bSY%2BFgg%2F3dIYbkuM1ERwPt7SC2YXA%2BIErMOw3WMTwIgZba0Q1QtcQGlWTjTRdRxu%2BXIvg8uIBgXxdkYr2DChRwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9nPprFKeC9yh%2FdQircA1472kZ%2F2qekkodGQG46gnWoXCZMhMFB%2FgOlsp4qOt7ZHgBjqaj2m7bIdtwpZz5iEnGxIU%2FC4pdgHMz8isppWAzw29TWxP7qWAcKYbGUglizPMFES2nlLQkxrLawf1vnVMJKDNE142qMmQUilQ0U8yorARVZC5I3fzl5LiBG1%2FuO8BQ3zJI8q1uSeRioYeFefAHdZHk4ph6YiarvsRO1mD%2BtH5eoU4DWT4Xe22oGakQYjUs%2F3jDXyJT3jyfLQmuYeJGAeQ8pJH6jzL7x8BvEpqLo%2FvXi8XIcIvsu2CuHRaWT51q5KpkU0izuBLtKPefj9XHKyE49%2BOTO9mOJ3TN9l0oPf2MIxXQws623TCs2YRKeys6AVxC6AeAsiPEVwc%2FQwIhDTJ2vnp8uHZK0t4h1xGTm1JxA%2FaGvl7DK1QA756xQWaIVJjfTOQSaDmWtsjW1EveN0OszhMl3JiYO433m3pdEiaFLqVFmZSoGKhQYMHdeF9k%2BjiQqLh9qNSKn5T8y1tjc2hoWGwgUNCiJYDnpTy6AYqzZXGJmmvQbUtvnI939iN4jgMavD6rqrLabwJUZTsvojQ2a%2BoEMD2j5iqFQGRf2etOyAPbknayoPOBm8fUB4m148iEXV53cMSDYMOrLo8QGOqUBiCI%2FFWG%2BW%2FLMlQ3FtHhq57zAQ5UoDDedWqigtSNi767EwGPLPJ7rTENbAtzzzZGXSz88ZotrtvtcJuxMFdG9My1mm%2B1%2FVBeUTTdcVdRarWUDq%2Bjdr25yyKcPxv3p3jPODcEz49En1%2FP5pTC3eSXZaRz6JBScOgaWke2JDx3t4MULn3vacsXN8AYPLPt3Q2zy2sUwHr2xWg0DCYvRD64rd6JnyysA&X-Amz-Signature=d09d9bee28b65131dcf0f00479aa151843bd57840bdec3f9360778ec516e5156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
