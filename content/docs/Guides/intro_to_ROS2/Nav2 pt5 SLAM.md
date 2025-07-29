---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-29T01:30:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-29T01:30:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTR7GY52%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCUo6xYDdyw3vJu1ixs%2BncbqteTpETVHk0F9O6N9bIgYwIhAPh8sc%2Bnq0w0dJN3rmnV3EToRKSJP8TYy%2FEyiuiVdxaqKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0yw7tC8GmIyTYR1Qq3APYSqsmLUnC9iRMi1GXw2XhNU7zKWHQOmvxA18JXnc1xwlQuplXd%2BQQIJpmGbwg4ch7xA%2FuYWkZpvhyqv0DIGNgeUJDzQ7HdMnxdh5NESUYjLQ3aEDifJa%2BdLNN%2F6mqhvQ1LKWqMB00lGWjSHHScZALfWZxLpNfju%2BYUhtrLC%2FZCi41HWTIiBK3MPwBiLhu3%2FvAxfJaFjhOdOoUKW9Fn%2FGx54Fz9Q0CSZ%2Fh934ENMuqO72SBEnGO4kkBZqC1cI7ndy%2FgOdwOYhd85uKFYOu%2Bs1tP%2FJ2SbO4PWHz6mZ%2BZU4kfGFgktPrip0ZpoWf9DT2j966P0S%2FjHioOOAvpBN7uuZOaOrePETO5azvmhVaQTOOpIElNBq4cQbZ7Q4Yvn3XspUyEpSPatHzePgDzdK8ykMg6oKotUgX5bC7%2FO2cCNXS4vC%2FZD2kdoyl3MXTPpMDihe6ag9cNoxtd8j9EsNHv%2FqLJMszxqF%2FyYgLao2gTBPdj35UcUR%2BI8r7ZHo8Lta6ZBC7HQKkzfUAXeqRzr2Qcv6e88eOtWdg2P2BjUreNVuQpQuaKwMEAhyW%2Fb2nAr6xbuvdah4a4KNX2E8gZKqP%2BKiNDzLRFhgI5CCNw37%2FsoVlz%2BjiQBiP7i0pX7zK1TDfg6LEBjqkAT0x5u8%2FKkljiKU5jlLQ5oYbDlVbC1YpdquAEvrulL%2BH8yjCgSbtpoCDciKjmI7KtGxx5c%2FRj5kpsyqq28jH8B8rKY2gMCge5wfUHsxpXnCGgdgKcNvftqlfOGi16Z988HkyqWsL0v2eX8erRHBInW%2BYNDade5YNdbEscOx5pYylCVX69GSS3NX9FQ%2FShTGs3SSjXbCek3%2BxHxivf3rYyLM6aTCC&X-Amz-Signature=d53d4ce9bee39b9a231c0052e607c89de72dd8d44c9ad075d531b8c91bde872b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTR7GY52%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCUo6xYDdyw3vJu1ixs%2BncbqteTpETVHk0F9O6N9bIgYwIhAPh8sc%2Bnq0w0dJN3rmnV3EToRKSJP8TYy%2FEyiuiVdxaqKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0yw7tC8GmIyTYR1Qq3APYSqsmLUnC9iRMi1GXw2XhNU7zKWHQOmvxA18JXnc1xwlQuplXd%2BQQIJpmGbwg4ch7xA%2FuYWkZpvhyqv0DIGNgeUJDzQ7HdMnxdh5NESUYjLQ3aEDifJa%2BdLNN%2F6mqhvQ1LKWqMB00lGWjSHHScZALfWZxLpNfju%2BYUhtrLC%2FZCi41HWTIiBK3MPwBiLhu3%2FvAxfJaFjhOdOoUKW9Fn%2FGx54Fz9Q0CSZ%2Fh934ENMuqO72SBEnGO4kkBZqC1cI7ndy%2FgOdwOYhd85uKFYOu%2Bs1tP%2FJ2SbO4PWHz6mZ%2BZU4kfGFgktPrip0ZpoWf9DT2j966P0S%2FjHioOOAvpBN7uuZOaOrePETO5azvmhVaQTOOpIElNBq4cQbZ7Q4Yvn3XspUyEpSPatHzePgDzdK8ykMg6oKotUgX5bC7%2FO2cCNXS4vC%2FZD2kdoyl3MXTPpMDihe6ag9cNoxtd8j9EsNHv%2FqLJMszxqF%2FyYgLao2gTBPdj35UcUR%2BI8r7ZHo8Lta6ZBC7HQKkzfUAXeqRzr2Qcv6e88eOtWdg2P2BjUreNVuQpQuaKwMEAhyW%2Fb2nAr6xbuvdah4a4KNX2E8gZKqP%2BKiNDzLRFhgI5CCNw37%2FsoVlz%2BjiQBiP7i0pX7zK1TDfg6LEBjqkAT0x5u8%2FKkljiKU5jlLQ5oYbDlVbC1YpdquAEvrulL%2BH8yjCgSbtpoCDciKjmI7KtGxx5c%2FRj5kpsyqq28jH8B8rKY2gMCge5wfUHsxpXnCGgdgKcNvftqlfOGi16Z988HkyqWsL0v2eX8erRHBInW%2BYNDade5YNdbEscOx5pYylCVX69GSS3NX9FQ%2FShTGs3SSjXbCek3%2BxHxivf3rYyLM6aTCC&X-Amz-Signature=77f41bf93981d6f899c749a29407a8425ba2a56dcb14526e589bf30ae5b02563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTR7GY52%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCUo6xYDdyw3vJu1ixs%2BncbqteTpETVHk0F9O6N9bIgYwIhAPh8sc%2Bnq0w0dJN3rmnV3EToRKSJP8TYy%2FEyiuiVdxaqKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0yw7tC8GmIyTYR1Qq3APYSqsmLUnC9iRMi1GXw2XhNU7zKWHQOmvxA18JXnc1xwlQuplXd%2BQQIJpmGbwg4ch7xA%2FuYWkZpvhyqv0DIGNgeUJDzQ7HdMnxdh5NESUYjLQ3aEDifJa%2BdLNN%2F6mqhvQ1LKWqMB00lGWjSHHScZALfWZxLpNfju%2BYUhtrLC%2FZCi41HWTIiBK3MPwBiLhu3%2FvAxfJaFjhOdOoUKW9Fn%2FGx54Fz9Q0CSZ%2Fh934ENMuqO72SBEnGO4kkBZqC1cI7ndy%2FgOdwOYhd85uKFYOu%2Bs1tP%2FJ2SbO4PWHz6mZ%2BZU4kfGFgktPrip0ZpoWf9DT2j966P0S%2FjHioOOAvpBN7uuZOaOrePETO5azvmhVaQTOOpIElNBq4cQbZ7Q4Yvn3XspUyEpSPatHzePgDzdK8ykMg6oKotUgX5bC7%2FO2cCNXS4vC%2FZD2kdoyl3MXTPpMDihe6ag9cNoxtd8j9EsNHv%2FqLJMszxqF%2FyYgLao2gTBPdj35UcUR%2BI8r7ZHo8Lta6ZBC7HQKkzfUAXeqRzr2Qcv6e88eOtWdg2P2BjUreNVuQpQuaKwMEAhyW%2Fb2nAr6xbuvdah4a4KNX2E8gZKqP%2BKiNDzLRFhgI5CCNw37%2FsoVlz%2BjiQBiP7i0pX7zK1TDfg6LEBjqkAT0x5u8%2FKkljiKU5jlLQ5oYbDlVbC1YpdquAEvrulL%2BH8yjCgSbtpoCDciKjmI7KtGxx5c%2FRj5kpsyqq28jH8B8rKY2gMCge5wfUHsxpXnCGgdgKcNvftqlfOGi16Z988HkyqWsL0v2eX8erRHBInW%2BYNDade5YNdbEscOx5pYylCVX69GSS3NX9FQ%2FShTGs3SSjXbCek3%2BxHxivf3rYyLM6aTCC&X-Amz-Signature=cf6805c15d3d45fed6c7e6877ccabe47e109f8b9ff85f1a84cf5fde41062aaf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTR7GY52%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCUo6xYDdyw3vJu1ixs%2BncbqteTpETVHk0F9O6N9bIgYwIhAPh8sc%2Bnq0w0dJN3rmnV3EToRKSJP8TYy%2FEyiuiVdxaqKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0yw7tC8GmIyTYR1Qq3APYSqsmLUnC9iRMi1GXw2XhNU7zKWHQOmvxA18JXnc1xwlQuplXd%2BQQIJpmGbwg4ch7xA%2FuYWkZpvhyqv0DIGNgeUJDzQ7HdMnxdh5NESUYjLQ3aEDifJa%2BdLNN%2F6mqhvQ1LKWqMB00lGWjSHHScZALfWZxLpNfju%2BYUhtrLC%2FZCi41HWTIiBK3MPwBiLhu3%2FvAxfJaFjhOdOoUKW9Fn%2FGx54Fz9Q0CSZ%2Fh934ENMuqO72SBEnGO4kkBZqC1cI7ndy%2FgOdwOYhd85uKFYOu%2Bs1tP%2FJ2SbO4PWHz6mZ%2BZU4kfGFgktPrip0ZpoWf9DT2j966P0S%2FjHioOOAvpBN7uuZOaOrePETO5azvmhVaQTOOpIElNBq4cQbZ7Q4Yvn3XspUyEpSPatHzePgDzdK8ykMg6oKotUgX5bC7%2FO2cCNXS4vC%2FZD2kdoyl3MXTPpMDihe6ag9cNoxtd8j9EsNHv%2FqLJMszxqF%2FyYgLao2gTBPdj35UcUR%2BI8r7ZHo8Lta6ZBC7HQKkzfUAXeqRzr2Qcv6e88eOtWdg2P2BjUreNVuQpQuaKwMEAhyW%2Fb2nAr6xbuvdah4a4KNX2E8gZKqP%2BKiNDzLRFhgI5CCNw37%2FsoVlz%2BjiQBiP7i0pX7zK1TDfg6LEBjqkAT0x5u8%2FKkljiKU5jlLQ5oYbDlVbC1YpdquAEvrulL%2BH8yjCgSbtpoCDciKjmI7KtGxx5c%2FRj5kpsyqq28jH8B8rKY2gMCge5wfUHsxpXnCGgdgKcNvftqlfOGi16Z988HkyqWsL0v2eX8erRHBInW%2BYNDade5YNdbEscOx5pYylCVX69GSS3NX9FQ%2FShTGs3SSjXbCek3%2BxHxivf3rYyLM6aTCC&X-Amz-Signature=f351b99b2a11e6a8fc17317a47d359dd3b20239d9d7d0272aaf44f382adb32cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTR7GY52%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCUo6xYDdyw3vJu1ixs%2BncbqteTpETVHk0F9O6N9bIgYwIhAPh8sc%2Bnq0w0dJN3rmnV3EToRKSJP8TYy%2FEyiuiVdxaqKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0yw7tC8GmIyTYR1Qq3APYSqsmLUnC9iRMi1GXw2XhNU7zKWHQOmvxA18JXnc1xwlQuplXd%2BQQIJpmGbwg4ch7xA%2FuYWkZpvhyqv0DIGNgeUJDzQ7HdMnxdh5NESUYjLQ3aEDifJa%2BdLNN%2F6mqhvQ1LKWqMB00lGWjSHHScZALfWZxLpNfju%2BYUhtrLC%2FZCi41HWTIiBK3MPwBiLhu3%2FvAxfJaFjhOdOoUKW9Fn%2FGx54Fz9Q0CSZ%2Fh934ENMuqO72SBEnGO4kkBZqC1cI7ndy%2FgOdwOYhd85uKFYOu%2Bs1tP%2FJ2SbO4PWHz6mZ%2BZU4kfGFgktPrip0ZpoWf9DT2j966P0S%2FjHioOOAvpBN7uuZOaOrePETO5azvmhVaQTOOpIElNBq4cQbZ7Q4Yvn3XspUyEpSPatHzePgDzdK8ykMg6oKotUgX5bC7%2FO2cCNXS4vC%2FZD2kdoyl3MXTPpMDihe6ag9cNoxtd8j9EsNHv%2FqLJMszxqF%2FyYgLao2gTBPdj35UcUR%2BI8r7ZHo8Lta6ZBC7HQKkzfUAXeqRzr2Qcv6e88eOtWdg2P2BjUreNVuQpQuaKwMEAhyW%2Fb2nAr6xbuvdah4a4KNX2E8gZKqP%2BKiNDzLRFhgI5CCNw37%2FsoVlz%2BjiQBiP7i0pX7zK1TDfg6LEBjqkAT0x5u8%2FKkljiKU5jlLQ5oYbDlVbC1YpdquAEvrulL%2BH8yjCgSbtpoCDciKjmI7KtGxx5c%2FRj5kpsyqq28jH8B8rKY2gMCge5wfUHsxpXnCGgdgKcNvftqlfOGi16Z988HkyqWsL0v2eX8erRHBInW%2BYNDade5YNdbEscOx5pYylCVX69GSS3NX9FQ%2FShTGs3SSjXbCek3%2BxHxivf3rYyLM6aTCC&X-Amz-Signature=a0812a352407e58105305e620e543264376b1cb8360e3e17360c3d8ee4fe070c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTR7GY52%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCUo6xYDdyw3vJu1ixs%2BncbqteTpETVHk0F9O6N9bIgYwIhAPh8sc%2Bnq0w0dJN3rmnV3EToRKSJP8TYy%2FEyiuiVdxaqKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0yw7tC8GmIyTYR1Qq3APYSqsmLUnC9iRMi1GXw2XhNU7zKWHQOmvxA18JXnc1xwlQuplXd%2BQQIJpmGbwg4ch7xA%2FuYWkZpvhyqv0DIGNgeUJDzQ7HdMnxdh5NESUYjLQ3aEDifJa%2BdLNN%2F6mqhvQ1LKWqMB00lGWjSHHScZALfWZxLpNfju%2BYUhtrLC%2FZCi41HWTIiBK3MPwBiLhu3%2FvAxfJaFjhOdOoUKW9Fn%2FGx54Fz9Q0CSZ%2Fh934ENMuqO72SBEnGO4kkBZqC1cI7ndy%2FgOdwOYhd85uKFYOu%2Bs1tP%2FJ2SbO4PWHz6mZ%2BZU4kfGFgktPrip0ZpoWf9DT2j966P0S%2FjHioOOAvpBN7uuZOaOrePETO5azvmhVaQTOOpIElNBq4cQbZ7Q4Yvn3XspUyEpSPatHzePgDzdK8ykMg6oKotUgX5bC7%2FO2cCNXS4vC%2FZD2kdoyl3MXTPpMDihe6ag9cNoxtd8j9EsNHv%2FqLJMszxqF%2FyYgLao2gTBPdj35UcUR%2BI8r7ZHo8Lta6ZBC7HQKkzfUAXeqRzr2Qcv6e88eOtWdg2P2BjUreNVuQpQuaKwMEAhyW%2Fb2nAr6xbuvdah4a4KNX2E8gZKqP%2BKiNDzLRFhgI5CCNw37%2FsoVlz%2BjiQBiP7i0pX7zK1TDfg6LEBjqkAT0x5u8%2FKkljiKU5jlLQ5oYbDlVbC1YpdquAEvrulL%2BH8yjCgSbtpoCDciKjmI7KtGxx5c%2FRj5kpsyqq28jH8B8rKY2gMCge5wfUHsxpXnCGgdgKcNvftqlfOGi16Z988HkyqWsL0v2eX8erRHBInW%2BYNDade5YNdbEscOx5pYylCVX69GSS3NX9FQ%2FShTGs3SSjXbCek3%2BxHxivf3rYyLM6aTCC&X-Amz-Signature=5617baa7eaa445b28d382873b782e9373e80d6d0a2fa6d64107b284c60908869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTR7GY52%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCUo6xYDdyw3vJu1ixs%2BncbqteTpETVHk0F9O6N9bIgYwIhAPh8sc%2Bnq0w0dJN3rmnV3EToRKSJP8TYy%2FEyiuiVdxaqKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0yw7tC8GmIyTYR1Qq3APYSqsmLUnC9iRMi1GXw2XhNU7zKWHQOmvxA18JXnc1xwlQuplXd%2BQQIJpmGbwg4ch7xA%2FuYWkZpvhyqv0DIGNgeUJDzQ7HdMnxdh5NESUYjLQ3aEDifJa%2BdLNN%2F6mqhvQ1LKWqMB00lGWjSHHScZALfWZxLpNfju%2BYUhtrLC%2FZCi41HWTIiBK3MPwBiLhu3%2FvAxfJaFjhOdOoUKW9Fn%2FGx54Fz9Q0CSZ%2Fh934ENMuqO72SBEnGO4kkBZqC1cI7ndy%2FgOdwOYhd85uKFYOu%2Bs1tP%2FJ2SbO4PWHz6mZ%2BZU4kfGFgktPrip0ZpoWf9DT2j966P0S%2FjHioOOAvpBN7uuZOaOrePETO5azvmhVaQTOOpIElNBq4cQbZ7Q4Yvn3XspUyEpSPatHzePgDzdK8ykMg6oKotUgX5bC7%2FO2cCNXS4vC%2FZD2kdoyl3MXTPpMDihe6ag9cNoxtd8j9EsNHv%2FqLJMszxqF%2FyYgLao2gTBPdj35UcUR%2BI8r7ZHo8Lta6ZBC7HQKkzfUAXeqRzr2Qcv6e88eOtWdg2P2BjUreNVuQpQuaKwMEAhyW%2Fb2nAr6xbuvdah4a4KNX2E8gZKqP%2BKiNDzLRFhgI5CCNw37%2FsoVlz%2BjiQBiP7i0pX7zK1TDfg6LEBjqkAT0x5u8%2FKkljiKU5jlLQ5oYbDlVbC1YpdquAEvrulL%2BH8yjCgSbtpoCDciKjmI7KtGxx5c%2FRj5kpsyqq28jH8B8rKY2gMCge5wfUHsxpXnCGgdgKcNvftqlfOGi16Z988HkyqWsL0v2eX8erRHBInW%2BYNDade5YNdbEscOx5pYylCVX69GSS3NX9FQ%2FShTGs3SSjXbCek3%2BxHxivf3rYyLM6aTCC&X-Amz-Signature=82c08c363eb8440d72549f54f204c306982c2bb7ecafc402bf5c19ff0d01b26b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTR7GY52%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCUo6xYDdyw3vJu1ixs%2BncbqteTpETVHk0F9O6N9bIgYwIhAPh8sc%2Bnq0w0dJN3rmnV3EToRKSJP8TYy%2FEyiuiVdxaqKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0yw7tC8GmIyTYR1Qq3APYSqsmLUnC9iRMi1GXw2XhNU7zKWHQOmvxA18JXnc1xwlQuplXd%2BQQIJpmGbwg4ch7xA%2FuYWkZpvhyqv0DIGNgeUJDzQ7HdMnxdh5NESUYjLQ3aEDifJa%2BdLNN%2F6mqhvQ1LKWqMB00lGWjSHHScZALfWZxLpNfju%2BYUhtrLC%2FZCi41HWTIiBK3MPwBiLhu3%2FvAxfJaFjhOdOoUKW9Fn%2FGx54Fz9Q0CSZ%2Fh934ENMuqO72SBEnGO4kkBZqC1cI7ndy%2FgOdwOYhd85uKFYOu%2Bs1tP%2FJ2SbO4PWHz6mZ%2BZU4kfGFgktPrip0ZpoWf9DT2j966P0S%2FjHioOOAvpBN7uuZOaOrePETO5azvmhVaQTOOpIElNBq4cQbZ7Q4Yvn3XspUyEpSPatHzePgDzdK8ykMg6oKotUgX5bC7%2FO2cCNXS4vC%2FZD2kdoyl3MXTPpMDihe6ag9cNoxtd8j9EsNHv%2FqLJMszxqF%2FyYgLao2gTBPdj35UcUR%2BI8r7ZHo8Lta6ZBC7HQKkzfUAXeqRzr2Qcv6e88eOtWdg2P2BjUreNVuQpQuaKwMEAhyW%2Fb2nAr6xbuvdah4a4KNX2E8gZKqP%2BKiNDzLRFhgI5CCNw37%2FsoVlz%2BjiQBiP7i0pX7zK1TDfg6LEBjqkAT0x5u8%2FKkljiKU5jlLQ5oYbDlVbC1YpdquAEvrulL%2BH8yjCgSbtpoCDciKjmI7KtGxx5c%2FRj5kpsyqq28jH8B8rKY2gMCge5wfUHsxpXnCGgdgKcNvftqlfOGi16Z988HkyqWsL0v2eX8erRHBInW%2BYNDade5YNdbEscOx5pYylCVX69GSS3NX9FQ%2FShTGs3SSjXbCek3%2BxHxivf3rYyLM6aTCC&X-Amz-Signature=b549c1520971f49e0a95cb10379302c8cbd31c8524a8f773d95fad8ab001937a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTR7GY52%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCUo6xYDdyw3vJu1ixs%2BncbqteTpETVHk0F9O6N9bIgYwIhAPh8sc%2Bnq0w0dJN3rmnV3EToRKSJP8TYy%2FEyiuiVdxaqKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0yw7tC8GmIyTYR1Qq3APYSqsmLUnC9iRMi1GXw2XhNU7zKWHQOmvxA18JXnc1xwlQuplXd%2BQQIJpmGbwg4ch7xA%2FuYWkZpvhyqv0DIGNgeUJDzQ7HdMnxdh5NESUYjLQ3aEDifJa%2BdLNN%2F6mqhvQ1LKWqMB00lGWjSHHScZALfWZxLpNfju%2BYUhtrLC%2FZCi41HWTIiBK3MPwBiLhu3%2FvAxfJaFjhOdOoUKW9Fn%2FGx54Fz9Q0CSZ%2Fh934ENMuqO72SBEnGO4kkBZqC1cI7ndy%2FgOdwOYhd85uKFYOu%2Bs1tP%2FJ2SbO4PWHz6mZ%2BZU4kfGFgktPrip0ZpoWf9DT2j966P0S%2FjHioOOAvpBN7uuZOaOrePETO5azvmhVaQTOOpIElNBq4cQbZ7Q4Yvn3XspUyEpSPatHzePgDzdK8ykMg6oKotUgX5bC7%2FO2cCNXS4vC%2FZD2kdoyl3MXTPpMDihe6ag9cNoxtd8j9EsNHv%2FqLJMszxqF%2FyYgLao2gTBPdj35UcUR%2BI8r7ZHo8Lta6ZBC7HQKkzfUAXeqRzr2Qcv6e88eOtWdg2P2BjUreNVuQpQuaKwMEAhyW%2Fb2nAr6xbuvdah4a4KNX2E8gZKqP%2BKiNDzLRFhgI5CCNw37%2FsoVlz%2BjiQBiP7i0pX7zK1TDfg6LEBjqkAT0x5u8%2FKkljiKU5jlLQ5oYbDlVbC1YpdquAEvrulL%2BH8yjCgSbtpoCDciKjmI7KtGxx5c%2FRj5kpsyqq28jH8B8rKY2gMCge5wfUHsxpXnCGgdgKcNvftqlfOGi16Z988HkyqWsL0v2eX8erRHBInW%2BYNDade5YNdbEscOx5pYylCVX69GSS3NX9FQ%2FShTGs3SSjXbCek3%2BxHxivf3rYyLM6aTCC&X-Amz-Signature=e74d5b165f3946058b9b1a995c7fb10037769e8958921177940cc3a7a110a89b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTR7GY52%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCUo6xYDdyw3vJu1ixs%2BncbqteTpETVHk0F9O6N9bIgYwIhAPh8sc%2Bnq0w0dJN3rmnV3EToRKSJP8TYy%2FEyiuiVdxaqKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0yw7tC8GmIyTYR1Qq3APYSqsmLUnC9iRMi1GXw2XhNU7zKWHQOmvxA18JXnc1xwlQuplXd%2BQQIJpmGbwg4ch7xA%2FuYWkZpvhyqv0DIGNgeUJDzQ7HdMnxdh5NESUYjLQ3aEDifJa%2BdLNN%2F6mqhvQ1LKWqMB00lGWjSHHScZALfWZxLpNfju%2BYUhtrLC%2FZCi41HWTIiBK3MPwBiLhu3%2FvAxfJaFjhOdOoUKW9Fn%2FGx54Fz9Q0CSZ%2Fh934ENMuqO72SBEnGO4kkBZqC1cI7ndy%2FgOdwOYhd85uKFYOu%2Bs1tP%2FJ2SbO4PWHz6mZ%2BZU4kfGFgktPrip0ZpoWf9DT2j966P0S%2FjHioOOAvpBN7uuZOaOrePETO5azvmhVaQTOOpIElNBq4cQbZ7Q4Yvn3XspUyEpSPatHzePgDzdK8ykMg6oKotUgX5bC7%2FO2cCNXS4vC%2FZD2kdoyl3MXTPpMDihe6ag9cNoxtd8j9EsNHv%2FqLJMszxqF%2FyYgLao2gTBPdj35UcUR%2BI8r7ZHo8Lta6ZBC7HQKkzfUAXeqRzr2Qcv6e88eOtWdg2P2BjUreNVuQpQuaKwMEAhyW%2Fb2nAr6xbuvdah4a4KNX2E8gZKqP%2BKiNDzLRFhgI5CCNw37%2FsoVlz%2BjiQBiP7i0pX7zK1TDfg6LEBjqkAT0x5u8%2FKkljiKU5jlLQ5oYbDlVbC1YpdquAEvrulL%2BH8yjCgSbtpoCDciKjmI7KtGxx5c%2FRj5kpsyqq28jH8B8rKY2gMCge5wfUHsxpXnCGgdgKcNvftqlfOGi16Z988HkyqWsL0v2eX8erRHBInW%2BYNDade5YNdbEscOx5pYylCVX69GSS3NX9FQ%2FShTGs3SSjXbCek3%2BxHxivf3rYyLM6aTCC&X-Amz-Signature=a7763eaefdfd3036db31e08203a7bca8191f8731b976a53451b97e99aa1f2105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTR7GY52%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCUo6xYDdyw3vJu1ixs%2BncbqteTpETVHk0F9O6N9bIgYwIhAPh8sc%2Bnq0w0dJN3rmnV3EToRKSJP8TYy%2FEyiuiVdxaqKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0yw7tC8GmIyTYR1Qq3APYSqsmLUnC9iRMi1GXw2XhNU7zKWHQOmvxA18JXnc1xwlQuplXd%2BQQIJpmGbwg4ch7xA%2FuYWkZpvhyqv0DIGNgeUJDzQ7HdMnxdh5NESUYjLQ3aEDifJa%2BdLNN%2F6mqhvQ1LKWqMB00lGWjSHHScZALfWZxLpNfju%2BYUhtrLC%2FZCi41HWTIiBK3MPwBiLhu3%2FvAxfJaFjhOdOoUKW9Fn%2FGx54Fz9Q0CSZ%2Fh934ENMuqO72SBEnGO4kkBZqC1cI7ndy%2FgOdwOYhd85uKFYOu%2Bs1tP%2FJ2SbO4PWHz6mZ%2BZU4kfGFgktPrip0ZpoWf9DT2j966P0S%2FjHioOOAvpBN7uuZOaOrePETO5azvmhVaQTOOpIElNBq4cQbZ7Q4Yvn3XspUyEpSPatHzePgDzdK8ykMg6oKotUgX5bC7%2FO2cCNXS4vC%2FZD2kdoyl3MXTPpMDihe6ag9cNoxtd8j9EsNHv%2FqLJMszxqF%2FyYgLao2gTBPdj35UcUR%2BI8r7ZHo8Lta6ZBC7HQKkzfUAXeqRzr2Qcv6e88eOtWdg2P2BjUreNVuQpQuaKwMEAhyW%2Fb2nAr6xbuvdah4a4KNX2E8gZKqP%2BKiNDzLRFhgI5CCNw37%2FsoVlz%2BjiQBiP7i0pX7zK1TDfg6LEBjqkAT0x5u8%2FKkljiKU5jlLQ5oYbDlVbC1YpdquAEvrulL%2BH8yjCgSbtpoCDciKjmI7KtGxx5c%2FRj5kpsyqq28jH8B8rKY2gMCge5wfUHsxpXnCGgdgKcNvftqlfOGi16Z988HkyqWsL0v2eX8erRHBInW%2BYNDade5YNdbEscOx5pYylCVX69GSS3NX9FQ%2FShTGs3SSjXbCek3%2BxHxivf3rYyLM6aTCC&X-Amz-Signature=dead66b96d3d083f66c9088fd3559a895f40a4a274104b478f6854ae9c4d49f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTR7GY52%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCUo6xYDdyw3vJu1ixs%2BncbqteTpETVHk0F9O6N9bIgYwIhAPh8sc%2Bnq0w0dJN3rmnV3EToRKSJP8TYy%2FEyiuiVdxaqKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0yw7tC8GmIyTYR1Qq3APYSqsmLUnC9iRMi1GXw2XhNU7zKWHQOmvxA18JXnc1xwlQuplXd%2BQQIJpmGbwg4ch7xA%2FuYWkZpvhyqv0DIGNgeUJDzQ7HdMnxdh5NESUYjLQ3aEDifJa%2BdLNN%2F6mqhvQ1LKWqMB00lGWjSHHScZALfWZxLpNfju%2BYUhtrLC%2FZCi41HWTIiBK3MPwBiLhu3%2FvAxfJaFjhOdOoUKW9Fn%2FGx54Fz9Q0CSZ%2Fh934ENMuqO72SBEnGO4kkBZqC1cI7ndy%2FgOdwOYhd85uKFYOu%2Bs1tP%2FJ2SbO4PWHz6mZ%2BZU4kfGFgktPrip0ZpoWf9DT2j966P0S%2FjHioOOAvpBN7uuZOaOrePETO5azvmhVaQTOOpIElNBq4cQbZ7Q4Yvn3XspUyEpSPatHzePgDzdK8ykMg6oKotUgX5bC7%2FO2cCNXS4vC%2FZD2kdoyl3MXTPpMDihe6ag9cNoxtd8j9EsNHv%2FqLJMszxqF%2FyYgLao2gTBPdj35UcUR%2BI8r7ZHo8Lta6ZBC7HQKkzfUAXeqRzr2Qcv6e88eOtWdg2P2BjUreNVuQpQuaKwMEAhyW%2Fb2nAr6xbuvdah4a4KNX2E8gZKqP%2BKiNDzLRFhgI5CCNw37%2FsoVlz%2BjiQBiP7i0pX7zK1TDfg6LEBjqkAT0x5u8%2FKkljiKU5jlLQ5oYbDlVbC1YpdquAEvrulL%2BH8yjCgSbtpoCDciKjmI7KtGxx5c%2FRj5kpsyqq28jH8B8rKY2gMCge5wfUHsxpXnCGgdgKcNvftqlfOGi16Z988HkyqWsL0v2eX8erRHBInW%2BYNDade5YNdbEscOx5pYylCVX69GSS3NX9FQ%2FShTGs3SSjXbCek3%2BxHxivf3rYyLM6aTCC&X-Amz-Signature=686a52f001b57810ad5f38cf47eba9f7ff2f7bdc65c06658e85caae51ba18e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTR7GY52%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCUo6xYDdyw3vJu1ixs%2BncbqteTpETVHk0F9O6N9bIgYwIhAPh8sc%2Bnq0w0dJN3rmnV3EToRKSJP8TYy%2FEyiuiVdxaqKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0yw7tC8GmIyTYR1Qq3APYSqsmLUnC9iRMi1GXw2XhNU7zKWHQOmvxA18JXnc1xwlQuplXd%2BQQIJpmGbwg4ch7xA%2FuYWkZpvhyqv0DIGNgeUJDzQ7HdMnxdh5NESUYjLQ3aEDifJa%2BdLNN%2F6mqhvQ1LKWqMB00lGWjSHHScZALfWZxLpNfju%2BYUhtrLC%2FZCi41HWTIiBK3MPwBiLhu3%2FvAxfJaFjhOdOoUKW9Fn%2FGx54Fz9Q0CSZ%2Fh934ENMuqO72SBEnGO4kkBZqC1cI7ndy%2FgOdwOYhd85uKFYOu%2Bs1tP%2FJ2SbO4PWHz6mZ%2BZU4kfGFgktPrip0ZpoWf9DT2j966P0S%2FjHioOOAvpBN7uuZOaOrePETO5azvmhVaQTOOpIElNBq4cQbZ7Q4Yvn3XspUyEpSPatHzePgDzdK8ykMg6oKotUgX5bC7%2FO2cCNXS4vC%2FZD2kdoyl3MXTPpMDihe6ag9cNoxtd8j9EsNHv%2FqLJMszxqF%2FyYgLao2gTBPdj35UcUR%2BI8r7ZHo8Lta6ZBC7HQKkzfUAXeqRzr2Qcv6e88eOtWdg2P2BjUreNVuQpQuaKwMEAhyW%2Fb2nAr6xbuvdah4a4KNX2E8gZKqP%2BKiNDzLRFhgI5CCNw37%2FsoVlz%2BjiQBiP7i0pX7zK1TDfg6LEBjqkAT0x5u8%2FKkljiKU5jlLQ5oYbDlVbC1YpdquAEvrulL%2BH8yjCgSbtpoCDciKjmI7KtGxx5c%2FRj5kpsyqq28jH8B8rKY2gMCge5wfUHsxpXnCGgdgKcNvftqlfOGi16Z988HkyqWsL0v2eX8erRHBInW%2BYNDade5YNdbEscOx5pYylCVX69GSS3NX9FQ%2FShTGs3SSjXbCek3%2BxHxivf3rYyLM6aTCC&X-Amz-Signature=07f4b3c27044f6abd051b130433667897fbb45ea96739207c78cb2fd53f1746a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored map

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

TODO: add pic

For further configuration go to: TODO: link to slam docs config guide 
