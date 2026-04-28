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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOGFSNAN%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBy0lFMkONBMX9Ix0zrLi95CZaNNGNLodCnkE6XqWTa%2BAiArvzM%2BYmEN5dUJSqfYel%2B%2FBo9VhplOsR2WAO%2BA1vlWjiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKXhH79ywzuorNMwhKtwDYh91y%2Fbo2Q0EEnSqg%2F8WaKyDyi1Y9y24CE3Fy6vkLqLHBdqCcaZsTxlVDTGCE%2Bjnd5j39nCk1KJo6IdvU4HRzXmkjW4W1%2B%2Bth7zeH2D3Au%2F31nMEvvi864bD7oZLWj8NjCpFCTmRrz1Z%2F3OPBWNVlHAon5FQqK9DQXrQ89er2DnbceAmwq1umht2iqpwET6LDspk5N3m9ow4eTuQRP0fa%2BUoEJu6CveazeBoWSEtTzG5DKqUWyKHJiesqa1RrZkxUi7xyu2aV8WiOmIbOuqyIzSyAAVzGgBEW%2FbW5I%2FweDkU%2Bg97sHuqhmRrFFQI2PXrppb0DBaxL5l1nva57vwKkJOFgl7hBacfvshv%2BcYX7GLrTzt2kiqfKlwEJi733bUOvZEzkjVrCfyS5VfmF6Ge1LYC%2FUMM140d5itPF0yTJc0Y54nj9%2F5AfSBHztAFGj1%2F7GAGV%2BC9qMLh2gEJa7a3P22vwEg13regb646LtcXKY9jIIChVddIjRogLbeJ5euX5YBAKYaGY4kd7MX6%2B1KvrO7y282H2mUD0HKJClA7TZhJr13FPItJQVBrLQw3HPe2k941A%2BSh2Z3LzznLbY31t0QKA%2FwHld%2Ba22UwzxuURLl6DxJpzDGNju%2Fkeg0wq6TAzwY6pgEYJ3bspkK5FNC5WfEtbzNE8mVkeHQyyQaXszNQ5ecjJDqNRqeIHWfH%2BMflvqp8QIG6OKYFso47P%2F7QfjFz89dJzLYWLOKshLgD6UKHYs%2B7ookcaLQtsWoI0cWa9tqVyuR%2BsUmNKVUHXzcNU9OukD5wSjrbb7t0BYdItROy8BA1YILrbe1ZtsQG4LsVcFa787%2FebQzEEwzSqhRi8pS0EoFMp4zmwmg4&X-Amz-Signature=4ba6b949ef4ce460011743a01a9c2e0d5907d12c5926de334b7bf4c28b784c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOGFSNAN%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBy0lFMkONBMX9Ix0zrLi95CZaNNGNLodCnkE6XqWTa%2BAiArvzM%2BYmEN5dUJSqfYel%2B%2FBo9VhplOsR2WAO%2BA1vlWjiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKXhH79ywzuorNMwhKtwDYh91y%2Fbo2Q0EEnSqg%2F8WaKyDyi1Y9y24CE3Fy6vkLqLHBdqCcaZsTxlVDTGCE%2Bjnd5j39nCk1KJo6IdvU4HRzXmkjW4W1%2B%2Bth7zeH2D3Au%2F31nMEvvi864bD7oZLWj8NjCpFCTmRrz1Z%2F3OPBWNVlHAon5FQqK9DQXrQ89er2DnbceAmwq1umht2iqpwET6LDspk5N3m9ow4eTuQRP0fa%2BUoEJu6CveazeBoWSEtTzG5DKqUWyKHJiesqa1RrZkxUi7xyu2aV8WiOmIbOuqyIzSyAAVzGgBEW%2FbW5I%2FweDkU%2Bg97sHuqhmRrFFQI2PXrppb0DBaxL5l1nva57vwKkJOFgl7hBacfvshv%2BcYX7GLrTzt2kiqfKlwEJi733bUOvZEzkjVrCfyS5VfmF6Ge1LYC%2FUMM140d5itPF0yTJc0Y54nj9%2F5AfSBHztAFGj1%2F7GAGV%2BC9qMLh2gEJa7a3P22vwEg13regb646LtcXKY9jIIChVddIjRogLbeJ5euX5YBAKYaGY4kd7MX6%2B1KvrO7y282H2mUD0HKJClA7TZhJr13FPItJQVBrLQw3HPe2k941A%2BSh2Z3LzznLbY31t0QKA%2FwHld%2Ba22UwzxuURLl6DxJpzDGNju%2Fkeg0wq6TAzwY6pgEYJ3bspkK5FNC5WfEtbzNE8mVkeHQyyQaXszNQ5ecjJDqNRqeIHWfH%2BMflvqp8QIG6OKYFso47P%2F7QfjFz89dJzLYWLOKshLgD6UKHYs%2B7ookcaLQtsWoI0cWa9tqVyuR%2BsUmNKVUHXzcNU9OukD5wSjrbb7t0BYdItROy8BA1YILrbe1ZtsQG4LsVcFa787%2FebQzEEwzSqhRi8pS0EoFMp4zmwmg4&X-Amz-Signature=e59a3de43486e0560a573baf2cfce76f8cb1167eb24d8e432a382cf54471ab02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOGFSNAN%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBy0lFMkONBMX9Ix0zrLi95CZaNNGNLodCnkE6XqWTa%2BAiArvzM%2BYmEN5dUJSqfYel%2B%2FBo9VhplOsR2WAO%2BA1vlWjiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKXhH79ywzuorNMwhKtwDYh91y%2Fbo2Q0EEnSqg%2F8WaKyDyi1Y9y24CE3Fy6vkLqLHBdqCcaZsTxlVDTGCE%2Bjnd5j39nCk1KJo6IdvU4HRzXmkjW4W1%2B%2Bth7zeH2D3Au%2F31nMEvvi864bD7oZLWj8NjCpFCTmRrz1Z%2F3OPBWNVlHAon5FQqK9DQXrQ89er2DnbceAmwq1umht2iqpwET6LDspk5N3m9ow4eTuQRP0fa%2BUoEJu6CveazeBoWSEtTzG5DKqUWyKHJiesqa1RrZkxUi7xyu2aV8WiOmIbOuqyIzSyAAVzGgBEW%2FbW5I%2FweDkU%2Bg97sHuqhmRrFFQI2PXrppb0DBaxL5l1nva57vwKkJOFgl7hBacfvshv%2BcYX7GLrTzt2kiqfKlwEJi733bUOvZEzkjVrCfyS5VfmF6Ge1LYC%2FUMM140d5itPF0yTJc0Y54nj9%2F5AfSBHztAFGj1%2F7GAGV%2BC9qMLh2gEJa7a3P22vwEg13regb646LtcXKY9jIIChVddIjRogLbeJ5euX5YBAKYaGY4kd7MX6%2B1KvrO7y282H2mUD0HKJClA7TZhJr13FPItJQVBrLQw3HPe2k941A%2BSh2Z3LzznLbY31t0QKA%2FwHld%2Ba22UwzxuURLl6DxJpzDGNju%2Fkeg0wq6TAzwY6pgEYJ3bspkK5FNC5WfEtbzNE8mVkeHQyyQaXszNQ5ecjJDqNRqeIHWfH%2BMflvqp8QIG6OKYFso47P%2F7QfjFz89dJzLYWLOKshLgD6UKHYs%2B7ookcaLQtsWoI0cWa9tqVyuR%2BsUmNKVUHXzcNU9OukD5wSjrbb7t0BYdItROy8BA1YILrbe1ZtsQG4LsVcFa787%2FebQzEEwzSqhRi8pS0EoFMp4zmwmg4&X-Amz-Signature=3f83b18707c29fa4d1edcbad42052cb75b674af79838c9650877dc0400d62c22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOGFSNAN%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBy0lFMkONBMX9Ix0zrLi95CZaNNGNLodCnkE6XqWTa%2BAiArvzM%2BYmEN5dUJSqfYel%2B%2FBo9VhplOsR2WAO%2BA1vlWjiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKXhH79ywzuorNMwhKtwDYh91y%2Fbo2Q0EEnSqg%2F8WaKyDyi1Y9y24CE3Fy6vkLqLHBdqCcaZsTxlVDTGCE%2Bjnd5j39nCk1KJo6IdvU4HRzXmkjW4W1%2B%2Bth7zeH2D3Au%2F31nMEvvi864bD7oZLWj8NjCpFCTmRrz1Z%2F3OPBWNVlHAon5FQqK9DQXrQ89er2DnbceAmwq1umht2iqpwET6LDspk5N3m9ow4eTuQRP0fa%2BUoEJu6CveazeBoWSEtTzG5DKqUWyKHJiesqa1RrZkxUi7xyu2aV8WiOmIbOuqyIzSyAAVzGgBEW%2FbW5I%2FweDkU%2Bg97sHuqhmRrFFQI2PXrppb0DBaxL5l1nva57vwKkJOFgl7hBacfvshv%2BcYX7GLrTzt2kiqfKlwEJi733bUOvZEzkjVrCfyS5VfmF6Ge1LYC%2FUMM140d5itPF0yTJc0Y54nj9%2F5AfSBHztAFGj1%2F7GAGV%2BC9qMLh2gEJa7a3P22vwEg13regb646LtcXKY9jIIChVddIjRogLbeJ5euX5YBAKYaGY4kd7MX6%2B1KvrO7y282H2mUD0HKJClA7TZhJr13FPItJQVBrLQw3HPe2k941A%2BSh2Z3LzznLbY31t0QKA%2FwHld%2Ba22UwzxuURLl6DxJpzDGNju%2Fkeg0wq6TAzwY6pgEYJ3bspkK5FNC5WfEtbzNE8mVkeHQyyQaXszNQ5ecjJDqNRqeIHWfH%2BMflvqp8QIG6OKYFso47P%2F7QfjFz89dJzLYWLOKshLgD6UKHYs%2B7ookcaLQtsWoI0cWa9tqVyuR%2BsUmNKVUHXzcNU9OukD5wSjrbb7t0BYdItROy8BA1YILrbe1ZtsQG4LsVcFa787%2FebQzEEwzSqhRi8pS0EoFMp4zmwmg4&X-Amz-Signature=83cae6fbe49b8d8e78349c92e0a22b9b56eabfdb38f4c14ad62b1430f3bc55a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOGFSNAN%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBy0lFMkONBMX9Ix0zrLi95CZaNNGNLodCnkE6XqWTa%2BAiArvzM%2BYmEN5dUJSqfYel%2B%2FBo9VhplOsR2WAO%2BA1vlWjiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKXhH79ywzuorNMwhKtwDYh91y%2Fbo2Q0EEnSqg%2F8WaKyDyi1Y9y24CE3Fy6vkLqLHBdqCcaZsTxlVDTGCE%2Bjnd5j39nCk1KJo6IdvU4HRzXmkjW4W1%2B%2Bth7zeH2D3Au%2F31nMEvvi864bD7oZLWj8NjCpFCTmRrz1Z%2F3OPBWNVlHAon5FQqK9DQXrQ89er2DnbceAmwq1umht2iqpwET6LDspk5N3m9ow4eTuQRP0fa%2BUoEJu6CveazeBoWSEtTzG5DKqUWyKHJiesqa1RrZkxUi7xyu2aV8WiOmIbOuqyIzSyAAVzGgBEW%2FbW5I%2FweDkU%2Bg97sHuqhmRrFFQI2PXrppb0DBaxL5l1nva57vwKkJOFgl7hBacfvshv%2BcYX7GLrTzt2kiqfKlwEJi733bUOvZEzkjVrCfyS5VfmF6Ge1LYC%2FUMM140d5itPF0yTJc0Y54nj9%2F5AfSBHztAFGj1%2F7GAGV%2BC9qMLh2gEJa7a3P22vwEg13regb646LtcXKY9jIIChVddIjRogLbeJ5euX5YBAKYaGY4kd7MX6%2B1KvrO7y282H2mUD0HKJClA7TZhJr13FPItJQVBrLQw3HPe2k941A%2BSh2Z3LzznLbY31t0QKA%2FwHld%2Ba22UwzxuURLl6DxJpzDGNju%2Fkeg0wq6TAzwY6pgEYJ3bspkK5FNC5WfEtbzNE8mVkeHQyyQaXszNQ5ecjJDqNRqeIHWfH%2BMflvqp8QIG6OKYFso47P%2F7QfjFz89dJzLYWLOKshLgD6UKHYs%2B7ookcaLQtsWoI0cWa9tqVyuR%2BsUmNKVUHXzcNU9OukD5wSjrbb7t0BYdItROy8BA1YILrbe1ZtsQG4LsVcFa787%2FebQzEEwzSqhRi8pS0EoFMp4zmwmg4&X-Amz-Signature=de0df29b8fefab1e0bc8afc112588db0ed2ad74956c65ea936f560a8a791f3a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOGFSNAN%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBy0lFMkONBMX9Ix0zrLi95CZaNNGNLodCnkE6XqWTa%2BAiArvzM%2BYmEN5dUJSqfYel%2B%2FBo9VhplOsR2WAO%2BA1vlWjiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKXhH79ywzuorNMwhKtwDYh91y%2Fbo2Q0EEnSqg%2F8WaKyDyi1Y9y24CE3Fy6vkLqLHBdqCcaZsTxlVDTGCE%2Bjnd5j39nCk1KJo6IdvU4HRzXmkjW4W1%2B%2Bth7zeH2D3Au%2F31nMEvvi864bD7oZLWj8NjCpFCTmRrz1Z%2F3OPBWNVlHAon5FQqK9DQXrQ89er2DnbceAmwq1umht2iqpwET6LDspk5N3m9ow4eTuQRP0fa%2BUoEJu6CveazeBoWSEtTzG5DKqUWyKHJiesqa1RrZkxUi7xyu2aV8WiOmIbOuqyIzSyAAVzGgBEW%2FbW5I%2FweDkU%2Bg97sHuqhmRrFFQI2PXrppb0DBaxL5l1nva57vwKkJOFgl7hBacfvshv%2BcYX7GLrTzt2kiqfKlwEJi733bUOvZEzkjVrCfyS5VfmF6Ge1LYC%2FUMM140d5itPF0yTJc0Y54nj9%2F5AfSBHztAFGj1%2F7GAGV%2BC9qMLh2gEJa7a3P22vwEg13regb646LtcXKY9jIIChVddIjRogLbeJ5euX5YBAKYaGY4kd7MX6%2B1KvrO7y282H2mUD0HKJClA7TZhJr13FPItJQVBrLQw3HPe2k941A%2BSh2Z3LzznLbY31t0QKA%2FwHld%2Ba22UwzxuURLl6DxJpzDGNju%2Fkeg0wq6TAzwY6pgEYJ3bspkK5FNC5WfEtbzNE8mVkeHQyyQaXszNQ5ecjJDqNRqeIHWfH%2BMflvqp8QIG6OKYFso47P%2F7QfjFz89dJzLYWLOKshLgD6UKHYs%2B7ookcaLQtsWoI0cWa9tqVyuR%2BsUmNKVUHXzcNU9OukD5wSjrbb7t0BYdItROy8BA1YILrbe1ZtsQG4LsVcFa787%2FebQzEEwzSqhRi8pS0EoFMp4zmwmg4&X-Amz-Signature=bcdd6bd454e891b085ddd53f1ebfd383d220cee41a5414db07b8f51d5a2f24d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOGFSNAN%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBy0lFMkONBMX9Ix0zrLi95CZaNNGNLodCnkE6XqWTa%2BAiArvzM%2BYmEN5dUJSqfYel%2B%2FBo9VhplOsR2WAO%2BA1vlWjiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKXhH79ywzuorNMwhKtwDYh91y%2Fbo2Q0EEnSqg%2F8WaKyDyi1Y9y24CE3Fy6vkLqLHBdqCcaZsTxlVDTGCE%2Bjnd5j39nCk1KJo6IdvU4HRzXmkjW4W1%2B%2Bth7zeH2D3Au%2F31nMEvvi864bD7oZLWj8NjCpFCTmRrz1Z%2F3OPBWNVlHAon5FQqK9DQXrQ89er2DnbceAmwq1umht2iqpwET6LDspk5N3m9ow4eTuQRP0fa%2BUoEJu6CveazeBoWSEtTzG5DKqUWyKHJiesqa1RrZkxUi7xyu2aV8WiOmIbOuqyIzSyAAVzGgBEW%2FbW5I%2FweDkU%2Bg97sHuqhmRrFFQI2PXrppb0DBaxL5l1nva57vwKkJOFgl7hBacfvshv%2BcYX7GLrTzt2kiqfKlwEJi733bUOvZEzkjVrCfyS5VfmF6Ge1LYC%2FUMM140d5itPF0yTJc0Y54nj9%2F5AfSBHztAFGj1%2F7GAGV%2BC9qMLh2gEJa7a3P22vwEg13regb646LtcXKY9jIIChVddIjRogLbeJ5euX5YBAKYaGY4kd7MX6%2B1KvrO7y282H2mUD0HKJClA7TZhJr13FPItJQVBrLQw3HPe2k941A%2BSh2Z3LzznLbY31t0QKA%2FwHld%2Ba22UwzxuURLl6DxJpzDGNju%2Fkeg0wq6TAzwY6pgEYJ3bspkK5FNC5WfEtbzNE8mVkeHQyyQaXszNQ5ecjJDqNRqeIHWfH%2BMflvqp8QIG6OKYFso47P%2F7QfjFz89dJzLYWLOKshLgD6UKHYs%2B7ookcaLQtsWoI0cWa9tqVyuR%2BsUmNKVUHXzcNU9OukD5wSjrbb7t0BYdItROy8BA1YILrbe1ZtsQG4LsVcFa787%2FebQzEEwzSqhRi8pS0EoFMp4zmwmg4&X-Amz-Signature=352d8990d7582280cbb333caff31f80ba69b5094beaa8e5d8c76feebc95235ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOGFSNAN%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBy0lFMkONBMX9Ix0zrLi95CZaNNGNLodCnkE6XqWTa%2BAiArvzM%2BYmEN5dUJSqfYel%2B%2FBo9VhplOsR2WAO%2BA1vlWjiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKXhH79ywzuorNMwhKtwDYh91y%2Fbo2Q0EEnSqg%2F8WaKyDyi1Y9y24CE3Fy6vkLqLHBdqCcaZsTxlVDTGCE%2Bjnd5j39nCk1KJo6IdvU4HRzXmkjW4W1%2B%2Bth7zeH2D3Au%2F31nMEvvi864bD7oZLWj8NjCpFCTmRrz1Z%2F3OPBWNVlHAon5FQqK9DQXrQ89er2DnbceAmwq1umht2iqpwET6LDspk5N3m9ow4eTuQRP0fa%2BUoEJu6CveazeBoWSEtTzG5DKqUWyKHJiesqa1RrZkxUi7xyu2aV8WiOmIbOuqyIzSyAAVzGgBEW%2FbW5I%2FweDkU%2Bg97sHuqhmRrFFQI2PXrppb0DBaxL5l1nva57vwKkJOFgl7hBacfvshv%2BcYX7GLrTzt2kiqfKlwEJi733bUOvZEzkjVrCfyS5VfmF6Ge1LYC%2FUMM140d5itPF0yTJc0Y54nj9%2F5AfSBHztAFGj1%2F7GAGV%2BC9qMLh2gEJa7a3P22vwEg13regb646LtcXKY9jIIChVddIjRogLbeJ5euX5YBAKYaGY4kd7MX6%2B1KvrO7y282H2mUD0HKJClA7TZhJr13FPItJQVBrLQw3HPe2k941A%2BSh2Z3LzznLbY31t0QKA%2FwHld%2Ba22UwzxuURLl6DxJpzDGNju%2Fkeg0wq6TAzwY6pgEYJ3bspkK5FNC5WfEtbzNE8mVkeHQyyQaXszNQ5ecjJDqNRqeIHWfH%2BMflvqp8QIG6OKYFso47P%2F7QfjFz89dJzLYWLOKshLgD6UKHYs%2B7ookcaLQtsWoI0cWa9tqVyuR%2BsUmNKVUHXzcNU9OukD5wSjrbb7t0BYdItROy8BA1YILrbe1ZtsQG4LsVcFa787%2FebQzEEwzSqhRi8pS0EoFMp4zmwmg4&X-Amz-Signature=4aa33ae0e9189969ffa43b2a2a9553319126bc14ccc7ce978e9ecffb114dc5ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOGFSNAN%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBy0lFMkONBMX9Ix0zrLi95CZaNNGNLodCnkE6XqWTa%2BAiArvzM%2BYmEN5dUJSqfYel%2B%2FBo9VhplOsR2WAO%2BA1vlWjiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKXhH79ywzuorNMwhKtwDYh91y%2Fbo2Q0EEnSqg%2F8WaKyDyi1Y9y24CE3Fy6vkLqLHBdqCcaZsTxlVDTGCE%2Bjnd5j39nCk1KJo6IdvU4HRzXmkjW4W1%2B%2Bth7zeH2D3Au%2F31nMEvvi864bD7oZLWj8NjCpFCTmRrz1Z%2F3OPBWNVlHAon5FQqK9DQXrQ89er2DnbceAmwq1umht2iqpwET6LDspk5N3m9ow4eTuQRP0fa%2BUoEJu6CveazeBoWSEtTzG5DKqUWyKHJiesqa1RrZkxUi7xyu2aV8WiOmIbOuqyIzSyAAVzGgBEW%2FbW5I%2FweDkU%2Bg97sHuqhmRrFFQI2PXrppb0DBaxL5l1nva57vwKkJOFgl7hBacfvshv%2BcYX7GLrTzt2kiqfKlwEJi733bUOvZEzkjVrCfyS5VfmF6Ge1LYC%2FUMM140d5itPF0yTJc0Y54nj9%2F5AfSBHztAFGj1%2F7GAGV%2BC9qMLh2gEJa7a3P22vwEg13regb646LtcXKY9jIIChVddIjRogLbeJ5euX5YBAKYaGY4kd7MX6%2B1KvrO7y282H2mUD0HKJClA7TZhJr13FPItJQVBrLQw3HPe2k941A%2BSh2Z3LzznLbY31t0QKA%2FwHld%2Ba22UwzxuURLl6DxJpzDGNju%2Fkeg0wq6TAzwY6pgEYJ3bspkK5FNC5WfEtbzNE8mVkeHQyyQaXszNQ5ecjJDqNRqeIHWfH%2BMflvqp8QIG6OKYFso47P%2F7QfjFz89dJzLYWLOKshLgD6UKHYs%2B7ookcaLQtsWoI0cWa9tqVyuR%2BsUmNKVUHXzcNU9OukD5wSjrbb7t0BYdItROy8BA1YILrbe1ZtsQG4LsVcFa787%2FebQzEEwzSqhRi8pS0EoFMp4zmwmg4&X-Amz-Signature=7517db16db41898297d642546c3ed4e3e7615b3dd391f3629373f84fb77c2235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOGFSNAN%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBy0lFMkONBMX9Ix0zrLi95CZaNNGNLodCnkE6XqWTa%2BAiArvzM%2BYmEN5dUJSqfYel%2B%2FBo9VhplOsR2WAO%2BA1vlWjiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKXhH79ywzuorNMwhKtwDYh91y%2Fbo2Q0EEnSqg%2F8WaKyDyi1Y9y24CE3Fy6vkLqLHBdqCcaZsTxlVDTGCE%2Bjnd5j39nCk1KJo6IdvU4HRzXmkjW4W1%2B%2Bth7zeH2D3Au%2F31nMEvvi864bD7oZLWj8NjCpFCTmRrz1Z%2F3OPBWNVlHAon5FQqK9DQXrQ89er2DnbceAmwq1umht2iqpwET6LDspk5N3m9ow4eTuQRP0fa%2BUoEJu6CveazeBoWSEtTzG5DKqUWyKHJiesqa1RrZkxUi7xyu2aV8WiOmIbOuqyIzSyAAVzGgBEW%2FbW5I%2FweDkU%2Bg97sHuqhmRrFFQI2PXrppb0DBaxL5l1nva57vwKkJOFgl7hBacfvshv%2BcYX7GLrTzt2kiqfKlwEJi733bUOvZEzkjVrCfyS5VfmF6Ge1LYC%2FUMM140d5itPF0yTJc0Y54nj9%2F5AfSBHztAFGj1%2F7GAGV%2BC9qMLh2gEJa7a3P22vwEg13regb646LtcXKY9jIIChVddIjRogLbeJ5euX5YBAKYaGY4kd7MX6%2B1KvrO7y282H2mUD0HKJClA7TZhJr13FPItJQVBrLQw3HPe2k941A%2BSh2Z3LzznLbY31t0QKA%2FwHld%2Ba22UwzxuURLl6DxJpzDGNju%2Fkeg0wq6TAzwY6pgEYJ3bspkK5FNC5WfEtbzNE8mVkeHQyyQaXszNQ5ecjJDqNRqeIHWfH%2BMflvqp8QIG6OKYFso47P%2F7QfjFz89dJzLYWLOKshLgD6UKHYs%2B7ookcaLQtsWoI0cWa9tqVyuR%2BsUmNKVUHXzcNU9OukD5wSjrbb7t0BYdItROy8BA1YILrbe1ZtsQG4LsVcFa787%2FebQzEEwzSqhRi8pS0EoFMp4zmwmg4&X-Amz-Signature=027dcf4666eceaaa33fb39213a0bf580bdc48e8c0ed6c43923f5f358aaf90aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOGFSNAN%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBy0lFMkONBMX9Ix0zrLi95CZaNNGNLodCnkE6XqWTa%2BAiArvzM%2BYmEN5dUJSqfYel%2B%2FBo9VhplOsR2WAO%2BA1vlWjiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKXhH79ywzuorNMwhKtwDYh91y%2Fbo2Q0EEnSqg%2F8WaKyDyi1Y9y24CE3Fy6vkLqLHBdqCcaZsTxlVDTGCE%2Bjnd5j39nCk1KJo6IdvU4HRzXmkjW4W1%2B%2Bth7zeH2D3Au%2F31nMEvvi864bD7oZLWj8NjCpFCTmRrz1Z%2F3OPBWNVlHAon5FQqK9DQXrQ89er2DnbceAmwq1umht2iqpwET6LDspk5N3m9ow4eTuQRP0fa%2BUoEJu6CveazeBoWSEtTzG5DKqUWyKHJiesqa1RrZkxUi7xyu2aV8WiOmIbOuqyIzSyAAVzGgBEW%2FbW5I%2FweDkU%2Bg97sHuqhmRrFFQI2PXrppb0DBaxL5l1nva57vwKkJOFgl7hBacfvshv%2BcYX7GLrTzt2kiqfKlwEJi733bUOvZEzkjVrCfyS5VfmF6Ge1LYC%2FUMM140d5itPF0yTJc0Y54nj9%2F5AfSBHztAFGj1%2F7GAGV%2BC9qMLh2gEJa7a3P22vwEg13regb646LtcXKY9jIIChVddIjRogLbeJ5euX5YBAKYaGY4kd7MX6%2B1KvrO7y282H2mUD0HKJClA7TZhJr13FPItJQVBrLQw3HPe2k941A%2BSh2Z3LzznLbY31t0QKA%2FwHld%2Ba22UwzxuURLl6DxJpzDGNju%2Fkeg0wq6TAzwY6pgEYJ3bspkK5FNC5WfEtbzNE8mVkeHQyyQaXszNQ5ecjJDqNRqeIHWfH%2BMflvqp8QIG6OKYFso47P%2F7QfjFz89dJzLYWLOKshLgD6UKHYs%2B7ookcaLQtsWoI0cWa9tqVyuR%2BsUmNKVUHXzcNU9OukD5wSjrbb7t0BYdItROy8BA1YILrbe1ZtsQG4LsVcFa787%2FebQzEEwzSqhRi8pS0EoFMp4zmwmg4&X-Amz-Signature=3e7d0e0bd41f509bb76cff025c827dbea71be35788e4b906c407be3116354a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOGFSNAN%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBy0lFMkONBMX9Ix0zrLi95CZaNNGNLodCnkE6XqWTa%2BAiArvzM%2BYmEN5dUJSqfYel%2B%2FBo9VhplOsR2WAO%2BA1vlWjiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKXhH79ywzuorNMwhKtwDYh91y%2Fbo2Q0EEnSqg%2F8WaKyDyi1Y9y24CE3Fy6vkLqLHBdqCcaZsTxlVDTGCE%2Bjnd5j39nCk1KJo6IdvU4HRzXmkjW4W1%2B%2Bth7zeH2D3Au%2F31nMEvvi864bD7oZLWj8NjCpFCTmRrz1Z%2F3OPBWNVlHAon5FQqK9DQXrQ89er2DnbceAmwq1umht2iqpwET6LDspk5N3m9ow4eTuQRP0fa%2BUoEJu6CveazeBoWSEtTzG5DKqUWyKHJiesqa1RrZkxUi7xyu2aV8WiOmIbOuqyIzSyAAVzGgBEW%2FbW5I%2FweDkU%2Bg97sHuqhmRrFFQI2PXrppb0DBaxL5l1nva57vwKkJOFgl7hBacfvshv%2BcYX7GLrTzt2kiqfKlwEJi733bUOvZEzkjVrCfyS5VfmF6Ge1LYC%2FUMM140d5itPF0yTJc0Y54nj9%2F5AfSBHztAFGj1%2F7GAGV%2BC9qMLh2gEJa7a3P22vwEg13regb646LtcXKY9jIIChVddIjRogLbeJ5euX5YBAKYaGY4kd7MX6%2B1KvrO7y282H2mUD0HKJClA7TZhJr13FPItJQVBrLQw3HPe2k941A%2BSh2Z3LzznLbY31t0QKA%2FwHld%2Ba22UwzxuURLl6DxJpzDGNju%2Fkeg0wq6TAzwY6pgEYJ3bspkK5FNC5WfEtbzNE8mVkeHQyyQaXszNQ5ecjJDqNRqeIHWfH%2BMflvqp8QIG6OKYFso47P%2F7QfjFz89dJzLYWLOKshLgD6UKHYs%2B7ookcaLQtsWoI0cWa9tqVyuR%2BsUmNKVUHXzcNU9OukD5wSjrbb7t0BYdItROy8BA1YILrbe1ZtsQG4LsVcFa787%2FebQzEEwzSqhRi8pS0EoFMp4zmwmg4&X-Amz-Signature=89841408a1162e2af8141c67e40957cd00814ce17baaf395cd6ebdca0ee4ce65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOGFSNAN%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBy0lFMkONBMX9Ix0zrLi95CZaNNGNLodCnkE6XqWTa%2BAiArvzM%2BYmEN5dUJSqfYel%2B%2FBo9VhplOsR2WAO%2BA1vlWjiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKXhH79ywzuorNMwhKtwDYh91y%2Fbo2Q0EEnSqg%2F8WaKyDyi1Y9y24CE3Fy6vkLqLHBdqCcaZsTxlVDTGCE%2Bjnd5j39nCk1KJo6IdvU4HRzXmkjW4W1%2B%2Bth7zeH2D3Au%2F31nMEvvi864bD7oZLWj8NjCpFCTmRrz1Z%2F3OPBWNVlHAon5FQqK9DQXrQ89er2DnbceAmwq1umht2iqpwET6LDspk5N3m9ow4eTuQRP0fa%2BUoEJu6CveazeBoWSEtTzG5DKqUWyKHJiesqa1RrZkxUi7xyu2aV8WiOmIbOuqyIzSyAAVzGgBEW%2FbW5I%2FweDkU%2Bg97sHuqhmRrFFQI2PXrppb0DBaxL5l1nva57vwKkJOFgl7hBacfvshv%2BcYX7GLrTzt2kiqfKlwEJi733bUOvZEzkjVrCfyS5VfmF6Ge1LYC%2FUMM140d5itPF0yTJc0Y54nj9%2F5AfSBHztAFGj1%2F7GAGV%2BC9qMLh2gEJa7a3P22vwEg13regb646LtcXKY9jIIChVddIjRogLbeJ5euX5YBAKYaGY4kd7MX6%2B1KvrO7y282H2mUD0HKJClA7TZhJr13FPItJQVBrLQw3HPe2k941A%2BSh2Z3LzznLbY31t0QKA%2FwHld%2Ba22UwzxuURLl6DxJpzDGNju%2Fkeg0wq6TAzwY6pgEYJ3bspkK5FNC5WfEtbzNE8mVkeHQyyQaXszNQ5ecjJDqNRqeIHWfH%2BMflvqp8QIG6OKYFso47P%2F7QfjFz89dJzLYWLOKshLgD6UKHYs%2B7ookcaLQtsWoI0cWa9tqVyuR%2BsUmNKVUHXzcNU9OukD5wSjrbb7t0BYdItROy8BA1YILrbe1ZtsQG4LsVcFa787%2FebQzEEwzSqhRi8pS0EoFMp4zmwmg4&X-Amz-Signature=f520da714cc0441fea873cb9e78c746a9c2f24e41e70d3952378e0180778470f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOGFSNAN%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBy0lFMkONBMX9Ix0zrLi95CZaNNGNLodCnkE6XqWTa%2BAiArvzM%2BYmEN5dUJSqfYel%2B%2FBo9VhplOsR2WAO%2BA1vlWjiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKXhH79ywzuorNMwhKtwDYh91y%2Fbo2Q0EEnSqg%2F8WaKyDyi1Y9y24CE3Fy6vkLqLHBdqCcaZsTxlVDTGCE%2Bjnd5j39nCk1KJo6IdvU4HRzXmkjW4W1%2B%2Bth7zeH2D3Au%2F31nMEvvi864bD7oZLWj8NjCpFCTmRrz1Z%2F3OPBWNVlHAon5FQqK9DQXrQ89er2DnbceAmwq1umht2iqpwET6LDspk5N3m9ow4eTuQRP0fa%2BUoEJu6CveazeBoWSEtTzG5DKqUWyKHJiesqa1RrZkxUi7xyu2aV8WiOmIbOuqyIzSyAAVzGgBEW%2FbW5I%2FweDkU%2Bg97sHuqhmRrFFQI2PXrppb0DBaxL5l1nva57vwKkJOFgl7hBacfvshv%2BcYX7GLrTzt2kiqfKlwEJi733bUOvZEzkjVrCfyS5VfmF6Ge1LYC%2FUMM140d5itPF0yTJc0Y54nj9%2F5AfSBHztAFGj1%2F7GAGV%2BC9qMLh2gEJa7a3P22vwEg13regb646LtcXKY9jIIChVddIjRogLbeJ5euX5YBAKYaGY4kd7MX6%2B1KvrO7y282H2mUD0HKJClA7TZhJr13FPItJQVBrLQw3HPe2k941A%2BSh2Z3LzznLbY31t0QKA%2FwHld%2Ba22UwzxuURLl6DxJpzDGNju%2Fkeg0wq6TAzwY6pgEYJ3bspkK5FNC5WfEtbzNE8mVkeHQyyQaXszNQ5ecjJDqNRqeIHWfH%2BMflvqp8QIG6OKYFso47P%2F7QfjFz89dJzLYWLOKshLgD6UKHYs%2B7ookcaLQtsWoI0cWa9tqVyuR%2BsUmNKVUHXzcNU9OukD5wSjrbb7t0BYdItROy8BA1YILrbe1ZtsQG4LsVcFa787%2FebQzEEwzSqhRi8pS0EoFMp4zmwmg4&X-Amz-Signature=ee7a3a38d5f7a5ad80c919acc29df0bdb166016a481fde7a578d735b8ac34f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
