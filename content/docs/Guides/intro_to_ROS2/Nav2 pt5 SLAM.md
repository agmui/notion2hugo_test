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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUND4DM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDJHuC8Yk2QXlbh7fbqPkEs2MyE25v70vyFp6ajyq9%2FHgIgRrjiZM6k%2BAnWPlkJpYjnEFlrzNKjcH5fFaQvTDX6%2FZYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvJ79ilZjDquX7vIircA7QIbzBWGIqTdQQ0ZJIERVc%2FZzl0iEYrdrGKRz5OrkPxqvg0Uf46n2DoD4HzevMLzsH3EPFOg0hZVz1461PcAqaJ4yitiTYLltWtDxwDUT%2FElQKNEdODkTh9qQ2KoCn%2FQiuqMIS%2BXTeQpOg8q3s1a6fahyAiq65zKqWT25o%2F1xfkDtoEHxeaPzNvPbXJu5kp%2BSmT%2FOyVOIySnmULBgnTXmLYG4OZB8cFMDAUCFGj3%2Bf%2FXVyMGWCtamVq1hGsBg%2BBUSaAp6aSxDAyAo6HGIx1hfwBdyLMO3xWfzXtJieUDX9W%2BZ06f9c02K7JV1LQd1VVM25wz8%2BxuWdnHQMwjK5lQHLQuuD%2B4wSNCQJZ5TwX0VZ%2BbVXl%2FY0Zmsu631%2F%2BzYHQxPf0oUITvWDEaJ3IGTPkQ4HAlIGqANZ4ZMStH4zTCKfvaWja8IQttNNmlrle9jwEwnheGPSH2K46TkQ1J2ncFtReZjruFDQVP7CdxVanMXrEYHGglbaJn3e9VwnPfNIdFjRJqyWc334UVUd6mGsrS43Svv90kvpO1hPGJ%2By3N5Yw9z4bRo%2FVjfAB9AG2yhKAbNupZyPvUF2OW0BS%2FgJFhJHXYmeJZlfD1MINMAvgWkSaHLLA61%2FD8jEXullbMJOJ0sQGOqUBKXZKqn1i1iLhd33vTYlcbYw%2FPqptwpmtZS2tF51QVFpFtPlIfqVK8EOaA2reARx50igoZWA7McvCVTuvwJcgSa8Zjq%2Ff8U37WLL7YqQow6ASP93pzmJdYkdcQxP6mRCSDvCfRxE4kK86PHVKzdVn%2FZmficlIYTbIiT52ckPx8NXfvzVOpxKoDJ9WQrSkA1%2FbUctyUPTaqlatxLsazsO1iuzMedwI&X-Amz-Signature=1baae0e6079996a13c1c14617ed55c65c56aca907a31b56d67cdd04093e6835e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUND4DM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDJHuC8Yk2QXlbh7fbqPkEs2MyE25v70vyFp6ajyq9%2FHgIgRrjiZM6k%2BAnWPlkJpYjnEFlrzNKjcH5fFaQvTDX6%2FZYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvJ79ilZjDquX7vIircA7QIbzBWGIqTdQQ0ZJIERVc%2FZzl0iEYrdrGKRz5OrkPxqvg0Uf46n2DoD4HzevMLzsH3EPFOg0hZVz1461PcAqaJ4yitiTYLltWtDxwDUT%2FElQKNEdODkTh9qQ2KoCn%2FQiuqMIS%2BXTeQpOg8q3s1a6fahyAiq65zKqWT25o%2F1xfkDtoEHxeaPzNvPbXJu5kp%2BSmT%2FOyVOIySnmULBgnTXmLYG4OZB8cFMDAUCFGj3%2Bf%2FXVyMGWCtamVq1hGsBg%2BBUSaAp6aSxDAyAo6HGIx1hfwBdyLMO3xWfzXtJieUDX9W%2BZ06f9c02K7JV1LQd1VVM25wz8%2BxuWdnHQMwjK5lQHLQuuD%2B4wSNCQJZ5TwX0VZ%2BbVXl%2FY0Zmsu631%2F%2BzYHQxPf0oUITvWDEaJ3IGTPkQ4HAlIGqANZ4ZMStH4zTCKfvaWja8IQttNNmlrle9jwEwnheGPSH2K46TkQ1J2ncFtReZjruFDQVP7CdxVanMXrEYHGglbaJn3e9VwnPfNIdFjRJqyWc334UVUd6mGsrS43Svv90kvpO1hPGJ%2By3N5Yw9z4bRo%2FVjfAB9AG2yhKAbNupZyPvUF2OW0BS%2FgJFhJHXYmeJZlfD1MINMAvgWkSaHLLA61%2FD8jEXullbMJOJ0sQGOqUBKXZKqn1i1iLhd33vTYlcbYw%2FPqptwpmtZS2tF51QVFpFtPlIfqVK8EOaA2reARx50igoZWA7McvCVTuvwJcgSa8Zjq%2Ff8U37WLL7YqQow6ASP93pzmJdYkdcQxP6mRCSDvCfRxE4kK86PHVKzdVn%2FZmficlIYTbIiT52ckPx8NXfvzVOpxKoDJ9WQrSkA1%2FbUctyUPTaqlatxLsazsO1iuzMedwI&X-Amz-Signature=a04731cd6ad79341e1bd99fab177e1803bfdab5ae4fe318765f9a3c8af3c0b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUND4DM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDJHuC8Yk2QXlbh7fbqPkEs2MyE25v70vyFp6ajyq9%2FHgIgRrjiZM6k%2BAnWPlkJpYjnEFlrzNKjcH5fFaQvTDX6%2FZYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvJ79ilZjDquX7vIircA7QIbzBWGIqTdQQ0ZJIERVc%2FZzl0iEYrdrGKRz5OrkPxqvg0Uf46n2DoD4HzevMLzsH3EPFOg0hZVz1461PcAqaJ4yitiTYLltWtDxwDUT%2FElQKNEdODkTh9qQ2KoCn%2FQiuqMIS%2BXTeQpOg8q3s1a6fahyAiq65zKqWT25o%2F1xfkDtoEHxeaPzNvPbXJu5kp%2BSmT%2FOyVOIySnmULBgnTXmLYG4OZB8cFMDAUCFGj3%2Bf%2FXVyMGWCtamVq1hGsBg%2BBUSaAp6aSxDAyAo6HGIx1hfwBdyLMO3xWfzXtJieUDX9W%2BZ06f9c02K7JV1LQd1VVM25wz8%2BxuWdnHQMwjK5lQHLQuuD%2B4wSNCQJZ5TwX0VZ%2BbVXl%2FY0Zmsu631%2F%2BzYHQxPf0oUITvWDEaJ3IGTPkQ4HAlIGqANZ4ZMStH4zTCKfvaWja8IQttNNmlrle9jwEwnheGPSH2K46TkQ1J2ncFtReZjruFDQVP7CdxVanMXrEYHGglbaJn3e9VwnPfNIdFjRJqyWc334UVUd6mGsrS43Svv90kvpO1hPGJ%2By3N5Yw9z4bRo%2FVjfAB9AG2yhKAbNupZyPvUF2OW0BS%2FgJFhJHXYmeJZlfD1MINMAvgWkSaHLLA61%2FD8jEXullbMJOJ0sQGOqUBKXZKqn1i1iLhd33vTYlcbYw%2FPqptwpmtZS2tF51QVFpFtPlIfqVK8EOaA2reARx50igoZWA7McvCVTuvwJcgSa8Zjq%2Ff8U37WLL7YqQow6ASP93pzmJdYkdcQxP6mRCSDvCfRxE4kK86PHVKzdVn%2FZmficlIYTbIiT52ckPx8NXfvzVOpxKoDJ9WQrSkA1%2FbUctyUPTaqlatxLsazsO1iuzMedwI&X-Amz-Signature=89fdedc2ca82833a8d2b9ccb5930af1595123b152199e087b7e98aa7d2a0882a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUND4DM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDJHuC8Yk2QXlbh7fbqPkEs2MyE25v70vyFp6ajyq9%2FHgIgRrjiZM6k%2BAnWPlkJpYjnEFlrzNKjcH5fFaQvTDX6%2FZYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvJ79ilZjDquX7vIircA7QIbzBWGIqTdQQ0ZJIERVc%2FZzl0iEYrdrGKRz5OrkPxqvg0Uf46n2DoD4HzevMLzsH3EPFOg0hZVz1461PcAqaJ4yitiTYLltWtDxwDUT%2FElQKNEdODkTh9qQ2KoCn%2FQiuqMIS%2BXTeQpOg8q3s1a6fahyAiq65zKqWT25o%2F1xfkDtoEHxeaPzNvPbXJu5kp%2BSmT%2FOyVOIySnmULBgnTXmLYG4OZB8cFMDAUCFGj3%2Bf%2FXVyMGWCtamVq1hGsBg%2BBUSaAp6aSxDAyAo6HGIx1hfwBdyLMO3xWfzXtJieUDX9W%2BZ06f9c02K7JV1LQd1VVM25wz8%2BxuWdnHQMwjK5lQHLQuuD%2B4wSNCQJZ5TwX0VZ%2BbVXl%2FY0Zmsu631%2F%2BzYHQxPf0oUITvWDEaJ3IGTPkQ4HAlIGqANZ4ZMStH4zTCKfvaWja8IQttNNmlrle9jwEwnheGPSH2K46TkQ1J2ncFtReZjruFDQVP7CdxVanMXrEYHGglbaJn3e9VwnPfNIdFjRJqyWc334UVUd6mGsrS43Svv90kvpO1hPGJ%2By3N5Yw9z4bRo%2FVjfAB9AG2yhKAbNupZyPvUF2OW0BS%2FgJFhJHXYmeJZlfD1MINMAvgWkSaHLLA61%2FD8jEXullbMJOJ0sQGOqUBKXZKqn1i1iLhd33vTYlcbYw%2FPqptwpmtZS2tF51QVFpFtPlIfqVK8EOaA2reARx50igoZWA7McvCVTuvwJcgSa8Zjq%2Ff8U37WLL7YqQow6ASP93pzmJdYkdcQxP6mRCSDvCfRxE4kK86PHVKzdVn%2FZmficlIYTbIiT52ckPx8NXfvzVOpxKoDJ9WQrSkA1%2FbUctyUPTaqlatxLsazsO1iuzMedwI&X-Amz-Signature=a20382c017348291f090f419c00b5d2458ba1d75f8fbf2f0063f9dc60edc9e1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUND4DM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDJHuC8Yk2QXlbh7fbqPkEs2MyE25v70vyFp6ajyq9%2FHgIgRrjiZM6k%2BAnWPlkJpYjnEFlrzNKjcH5fFaQvTDX6%2FZYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvJ79ilZjDquX7vIircA7QIbzBWGIqTdQQ0ZJIERVc%2FZzl0iEYrdrGKRz5OrkPxqvg0Uf46n2DoD4HzevMLzsH3EPFOg0hZVz1461PcAqaJ4yitiTYLltWtDxwDUT%2FElQKNEdODkTh9qQ2KoCn%2FQiuqMIS%2BXTeQpOg8q3s1a6fahyAiq65zKqWT25o%2F1xfkDtoEHxeaPzNvPbXJu5kp%2BSmT%2FOyVOIySnmULBgnTXmLYG4OZB8cFMDAUCFGj3%2Bf%2FXVyMGWCtamVq1hGsBg%2BBUSaAp6aSxDAyAo6HGIx1hfwBdyLMO3xWfzXtJieUDX9W%2BZ06f9c02K7JV1LQd1VVM25wz8%2BxuWdnHQMwjK5lQHLQuuD%2B4wSNCQJZ5TwX0VZ%2BbVXl%2FY0Zmsu631%2F%2BzYHQxPf0oUITvWDEaJ3IGTPkQ4HAlIGqANZ4ZMStH4zTCKfvaWja8IQttNNmlrle9jwEwnheGPSH2K46TkQ1J2ncFtReZjruFDQVP7CdxVanMXrEYHGglbaJn3e9VwnPfNIdFjRJqyWc334UVUd6mGsrS43Svv90kvpO1hPGJ%2By3N5Yw9z4bRo%2FVjfAB9AG2yhKAbNupZyPvUF2OW0BS%2FgJFhJHXYmeJZlfD1MINMAvgWkSaHLLA61%2FD8jEXullbMJOJ0sQGOqUBKXZKqn1i1iLhd33vTYlcbYw%2FPqptwpmtZS2tF51QVFpFtPlIfqVK8EOaA2reARx50igoZWA7McvCVTuvwJcgSa8Zjq%2Ff8U37WLL7YqQow6ASP93pzmJdYkdcQxP6mRCSDvCfRxE4kK86PHVKzdVn%2FZmficlIYTbIiT52ckPx8NXfvzVOpxKoDJ9WQrSkA1%2FbUctyUPTaqlatxLsazsO1iuzMedwI&X-Amz-Signature=3b7989d33a9bdb84f1c0ecfb94bcbb546a29e4c455223177481046be6347fdeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUND4DM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDJHuC8Yk2QXlbh7fbqPkEs2MyE25v70vyFp6ajyq9%2FHgIgRrjiZM6k%2BAnWPlkJpYjnEFlrzNKjcH5fFaQvTDX6%2FZYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvJ79ilZjDquX7vIircA7QIbzBWGIqTdQQ0ZJIERVc%2FZzl0iEYrdrGKRz5OrkPxqvg0Uf46n2DoD4HzevMLzsH3EPFOg0hZVz1461PcAqaJ4yitiTYLltWtDxwDUT%2FElQKNEdODkTh9qQ2KoCn%2FQiuqMIS%2BXTeQpOg8q3s1a6fahyAiq65zKqWT25o%2F1xfkDtoEHxeaPzNvPbXJu5kp%2BSmT%2FOyVOIySnmULBgnTXmLYG4OZB8cFMDAUCFGj3%2Bf%2FXVyMGWCtamVq1hGsBg%2BBUSaAp6aSxDAyAo6HGIx1hfwBdyLMO3xWfzXtJieUDX9W%2BZ06f9c02K7JV1LQd1VVM25wz8%2BxuWdnHQMwjK5lQHLQuuD%2B4wSNCQJZ5TwX0VZ%2BbVXl%2FY0Zmsu631%2F%2BzYHQxPf0oUITvWDEaJ3IGTPkQ4HAlIGqANZ4ZMStH4zTCKfvaWja8IQttNNmlrle9jwEwnheGPSH2K46TkQ1J2ncFtReZjruFDQVP7CdxVanMXrEYHGglbaJn3e9VwnPfNIdFjRJqyWc334UVUd6mGsrS43Svv90kvpO1hPGJ%2By3N5Yw9z4bRo%2FVjfAB9AG2yhKAbNupZyPvUF2OW0BS%2FgJFhJHXYmeJZlfD1MINMAvgWkSaHLLA61%2FD8jEXullbMJOJ0sQGOqUBKXZKqn1i1iLhd33vTYlcbYw%2FPqptwpmtZS2tF51QVFpFtPlIfqVK8EOaA2reARx50igoZWA7McvCVTuvwJcgSa8Zjq%2Ff8U37WLL7YqQow6ASP93pzmJdYkdcQxP6mRCSDvCfRxE4kK86PHVKzdVn%2FZmficlIYTbIiT52ckPx8NXfvzVOpxKoDJ9WQrSkA1%2FbUctyUPTaqlatxLsazsO1iuzMedwI&X-Amz-Signature=ad3b2875e06a6d9d587fe6077788e114071f18e42262dae140aadcd35ee79a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUND4DM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDJHuC8Yk2QXlbh7fbqPkEs2MyE25v70vyFp6ajyq9%2FHgIgRrjiZM6k%2BAnWPlkJpYjnEFlrzNKjcH5fFaQvTDX6%2FZYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvJ79ilZjDquX7vIircA7QIbzBWGIqTdQQ0ZJIERVc%2FZzl0iEYrdrGKRz5OrkPxqvg0Uf46n2DoD4HzevMLzsH3EPFOg0hZVz1461PcAqaJ4yitiTYLltWtDxwDUT%2FElQKNEdODkTh9qQ2KoCn%2FQiuqMIS%2BXTeQpOg8q3s1a6fahyAiq65zKqWT25o%2F1xfkDtoEHxeaPzNvPbXJu5kp%2BSmT%2FOyVOIySnmULBgnTXmLYG4OZB8cFMDAUCFGj3%2Bf%2FXVyMGWCtamVq1hGsBg%2BBUSaAp6aSxDAyAo6HGIx1hfwBdyLMO3xWfzXtJieUDX9W%2BZ06f9c02K7JV1LQd1VVM25wz8%2BxuWdnHQMwjK5lQHLQuuD%2B4wSNCQJZ5TwX0VZ%2BbVXl%2FY0Zmsu631%2F%2BzYHQxPf0oUITvWDEaJ3IGTPkQ4HAlIGqANZ4ZMStH4zTCKfvaWja8IQttNNmlrle9jwEwnheGPSH2K46TkQ1J2ncFtReZjruFDQVP7CdxVanMXrEYHGglbaJn3e9VwnPfNIdFjRJqyWc334UVUd6mGsrS43Svv90kvpO1hPGJ%2By3N5Yw9z4bRo%2FVjfAB9AG2yhKAbNupZyPvUF2OW0BS%2FgJFhJHXYmeJZlfD1MINMAvgWkSaHLLA61%2FD8jEXullbMJOJ0sQGOqUBKXZKqn1i1iLhd33vTYlcbYw%2FPqptwpmtZS2tF51QVFpFtPlIfqVK8EOaA2reARx50igoZWA7McvCVTuvwJcgSa8Zjq%2Ff8U37WLL7YqQow6ASP93pzmJdYkdcQxP6mRCSDvCfRxE4kK86PHVKzdVn%2FZmficlIYTbIiT52ckPx8NXfvzVOpxKoDJ9WQrSkA1%2FbUctyUPTaqlatxLsazsO1iuzMedwI&X-Amz-Signature=142ddcf3c27bf66a81036205d82136817b34624226a07c97154190e88473699a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUND4DM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDJHuC8Yk2QXlbh7fbqPkEs2MyE25v70vyFp6ajyq9%2FHgIgRrjiZM6k%2BAnWPlkJpYjnEFlrzNKjcH5fFaQvTDX6%2FZYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvJ79ilZjDquX7vIircA7QIbzBWGIqTdQQ0ZJIERVc%2FZzl0iEYrdrGKRz5OrkPxqvg0Uf46n2DoD4HzevMLzsH3EPFOg0hZVz1461PcAqaJ4yitiTYLltWtDxwDUT%2FElQKNEdODkTh9qQ2KoCn%2FQiuqMIS%2BXTeQpOg8q3s1a6fahyAiq65zKqWT25o%2F1xfkDtoEHxeaPzNvPbXJu5kp%2BSmT%2FOyVOIySnmULBgnTXmLYG4OZB8cFMDAUCFGj3%2Bf%2FXVyMGWCtamVq1hGsBg%2BBUSaAp6aSxDAyAo6HGIx1hfwBdyLMO3xWfzXtJieUDX9W%2BZ06f9c02K7JV1LQd1VVM25wz8%2BxuWdnHQMwjK5lQHLQuuD%2B4wSNCQJZ5TwX0VZ%2BbVXl%2FY0Zmsu631%2F%2BzYHQxPf0oUITvWDEaJ3IGTPkQ4HAlIGqANZ4ZMStH4zTCKfvaWja8IQttNNmlrle9jwEwnheGPSH2K46TkQ1J2ncFtReZjruFDQVP7CdxVanMXrEYHGglbaJn3e9VwnPfNIdFjRJqyWc334UVUd6mGsrS43Svv90kvpO1hPGJ%2By3N5Yw9z4bRo%2FVjfAB9AG2yhKAbNupZyPvUF2OW0BS%2FgJFhJHXYmeJZlfD1MINMAvgWkSaHLLA61%2FD8jEXullbMJOJ0sQGOqUBKXZKqn1i1iLhd33vTYlcbYw%2FPqptwpmtZS2tF51QVFpFtPlIfqVK8EOaA2reARx50igoZWA7McvCVTuvwJcgSa8Zjq%2Ff8U37WLL7YqQow6ASP93pzmJdYkdcQxP6mRCSDvCfRxE4kK86PHVKzdVn%2FZmficlIYTbIiT52ckPx8NXfvzVOpxKoDJ9WQrSkA1%2FbUctyUPTaqlatxLsazsO1iuzMedwI&X-Amz-Signature=ab8742809bed208ee00a30dabc87cbf8e63db7f4af0c89a1de957b5d01474304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUND4DM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDJHuC8Yk2QXlbh7fbqPkEs2MyE25v70vyFp6ajyq9%2FHgIgRrjiZM6k%2BAnWPlkJpYjnEFlrzNKjcH5fFaQvTDX6%2FZYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvJ79ilZjDquX7vIircA7QIbzBWGIqTdQQ0ZJIERVc%2FZzl0iEYrdrGKRz5OrkPxqvg0Uf46n2DoD4HzevMLzsH3EPFOg0hZVz1461PcAqaJ4yitiTYLltWtDxwDUT%2FElQKNEdODkTh9qQ2KoCn%2FQiuqMIS%2BXTeQpOg8q3s1a6fahyAiq65zKqWT25o%2F1xfkDtoEHxeaPzNvPbXJu5kp%2BSmT%2FOyVOIySnmULBgnTXmLYG4OZB8cFMDAUCFGj3%2Bf%2FXVyMGWCtamVq1hGsBg%2BBUSaAp6aSxDAyAo6HGIx1hfwBdyLMO3xWfzXtJieUDX9W%2BZ06f9c02K7JV1LQd1VVM25wz8%2BxuWdnHQMwjK5lQHLQuuD%2B4wSNCQJZ5TwX0VZ%2BbVXl%2FY0Zmsu631%2F%2BzYHQxPf0oUITvWDEaJ3IGTPkQ4HAlIGqANZ4ZMStH4zTCKfvaWja8IQttNNmlrle9jwEwnheGPSH2K46TkQ1J2ncFtReZjruFDQVP7CdxVanMXrEYHGglbaJn3e9VwnPfNIdFjRJqyWc334UVUd6mGsrS43Svv90kvpO1hPGJ%2By3N5Yw9z4bRo%2FVjfAB9AG2yhKAbNupZyPvUF2OW0BS%2FgJFhJHXYmeJZlfD1MINMAvgWkSaHLLA61%2FD8jEXullbMJOJ0sQGOqUBKXZKqn1i1iLhd33vTYlcbYw%2FPqptwpmtZS2tF51QVFpFtPlIfqVK8EOaA2reARx50igoZWA7McvCVTuvwJcgSa8Zjq%2Ff8U37WLL7YqQow6ASP93pzmJdYkdcQxP6mRCSDvCfRxE4kK86PHVKzdVn%2FZmficlIYTbIiT52ckPx8NXfvzVOpxKoDJ9WQrSkA1%2FbUctyUPTaqlatxLsazsO1iuzMedwI&X-Amz-Signature=8e4f13959c06c6f8f2f0100dade42f6b1dd7b924622f15358a60482670bfda94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUND4DM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDJHuC8Yk2QXlbh7fbqPkEs2MyE25v70vyFp6ajyq9%2FHgIgRrjiZM6k%2BAnWPlkJpYjnEFlrzNKjcH5fFaQvTDX6%2FZYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvJ79ilZjDquX7vIircA7QIbzBWGIqTdQQ0ZJIERVc%2FZzl0iEYrdrGKRz5OrkPxqvg0Uf46n2DoD4HzevMLzsH3EPFOg0hZVz1461PcAqaJ4yitiTYLltWtDxwDUT%2FElQKNEdODkTh9qQ2KoCn%2FQiuqMIS%2BXTeQpOg8q3s1a6fahyAiq65zKqWT25o%2F1xfkDtoEHxeaPzNvPbXJu5kp%2BSmT%2FOyVOIySnmULBgnTXmLYG4OZB8cFMDAUCFGj3%2Bf%2FXVyMGWCtamVq1hGsBg%2BBUSaAp6aSxDAyAo6HGIx1hfwBdyLMO3xWfzXtJieUDX9W%2BZ06f9c02K7JV1LQd1VVM25wz8%2BxuWdnHQMwjK5lQHLQuuD%2B4wSNCQJZ5TwX0VZ%2BbVXl%2FY0Zmsu631%2F%2BzYHQxPf0oUITvWDEaJ3IGTPkQ4HAlIGqANZ4ZMStH4zTCKfvaWja8IQttNNmlrle9jwEwnheGPSH2K46TkQ1J2ncFtReZjruFDQVP7CdxVanMXrEYHGglbaJn3e9VwnPfNIdFjRJqyWc334UVUd6mGsrS43Svv90kvpO1hPGJ%2By3N5Yw9z4bRo%2FVjfAB9AG2yhKAbNupZyPvUF2OW0BS%2FgJFhJHXYmeJZlfD1MINMAvgWkSaHLLA61%2FD8jEXullbMJOJ0sQGOqUBKXZKqn1i1iLhd33vTYlcbYw%2FPqptwpmtZS2tF51QVFpFtPlIfqVK8EOaA2reARx50igoZWA7McvCVTuvwJcgSa8Zjq%2Ff8U37WLL7YqQow6ASP93pzmJdYkdcQxP6mRCSDvCfRxE4kK86PHVKzdVn%2FZmficlIYTbIiT52ckPx8NXfvzVOpxKoDJ9WQrSkA1%2FbUctyUPTaqlatxLsazsO1iuzMedwI&X-Amz-Signature=2bbe0d9cf8a60a9ef47c64ca37a43c48973d10acbd6caefe13a7b6e2cfd46bd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUND4DM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDJHuC8Yk2QXlbh7fbqPkEs2MyE25v70vyFp6ajyq9%2FHgIgRrjiZM6k%2BAnWPlkJpYjnEFlrzNKjcH5fFaQvTDX6%2FZYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvJ79ilZjDquX7vIircA7QIbzBWGIqTdQQ0ZJIERVc%2FZzl0iEYrdrGKRz5OrkPxqvg0Uf46n2DoD4HzevMLzsH3EPFOg0hZVz1461PcAqaJ4yitiTYLltWtDxwDUT%2FElQKNEdODkTh9qQ2KoCn%2FQiuqMIS%2BXTeQpOg8q3s1a6fahyAiq65zKqWT25o%2F1xfkDtoEHxeaPzNvPbXJu5kp%2BSmT%2FOyVOIySnmULBgnTXmLYG4OZB8cFMDAUCFGj3%2Bf%2FXVyMGWCtamVq1hGsBg%2BBUSaAp6aSxDAyAo6HGIx1hfwBdyLMO3xWfzXtJieUDX9W%2BZ06f9c02K7JV1LQd1VVM25wz8%2BxuWdnHQMwjK5lQHLQuuD%2B4wSNCQJZ5TwX0VZ%2BbVXl%2FY0Zmsu631%2F%2BzYHQxPf0oUITvWDEaJ3IGTPkQ4HAlIGqANZ4ZMStH4zTCKfvaWja8IQttNNmlrle9jwEwnheGPSH2K46TkQ1J2ncFtReZjruFDQVP7CdxVanMXrEYHGglbaJn3e9VwnPfNIdFjRJqyWc334UVUd6mGsrS43Svv90kvpO1hPGJ%2By3N5Yw9z4bRo%2FVjfAB9AG2yhKAbNupZyPvUF2OW0BS%2FgJFhJHXYmeJZlfD1MINMAvgWkSaHLLA61%2FD8jEXullbMJOJ0sQGOqUBKXZKqn1i1iLhd33vTYlcbYw%2FPqptwpmtZS2tF51QVFpFtPlIfqVK8EOaA2reARx50igoZWA7McvCVTuvwJcgSa8Zjq%2Ff8U37WLL7YqQow6ASP93pzmJdYkdcQxP6mRCSDvCfRxE4kK86PHVKzdVn%2FZmficlIYTbIiT52ckPx8NXfvzVOpxKoDJ9WQrSkA1%2FbUctyUPTaqlatxLsazsO1iuzMedwI&X-Amz-Signature=e5b1a55181b3bc0fb6ea706060c4615bad9ab559aa981a458d6d41fb5a68091d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUND4DM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDJHuC8Yk2QXlbh7fbqPkEs2MyE25v70vyFp6ajyq9%2FHgIgRrjiZM6k%2BAnWPlkJpYjnEFlrzNKjcH5fFaQvTDX6%2FZYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvJ79ilZjDquX7vIircA7QIbzBWGIqTdQQ0ZJIERVc%2FZzl0iEYrdrGKRz5OrkPxqvg0Uf46n2DoD4HzevMLzsH3EPFOg0hZVz1461PcAqaJ4yitiTYLltWtDxwDUT%2FElQKNEdODkTh9qQ2KoCn%2FQiuqMIS%2BXTeQpOg8q3s1a6fahyAiq65zKqWT25o%2F1xfkDtoEHxeaPzNvPbXJu5kp%2BSmT%2FOyVOIySnmULBgnTXmLYG4OZB8cFMDAUCFGj3%2Bf%2FXVyMGWCtamVq1hGsBg%2BBUSaAp6aSxDAyAo6HGIx1hfwBdyLMO3xWfzXtJieUDX9W%2BZ06f9c02K7JV1LQd1VVM25wz8%2BxuWdnHQMwjK5lQHLQuuD%2B4wSNCQJZ5TwX0VZ%2BbVXl%2FY0Zmsu631%2F%2BzYHQxPf0oUITvWDEaJ3IGTPkQ4HAlIGqANZ4ZMStH4zTCKfvaWja8IQttNNmlrle9jwEwnheGPSH2K46TkQ1J2ncFtReZjruFDQVP7CdxVanMXrEYHGglbaJn3e9VwnPfNIdFjRJqyWc334UVUd6mGsrS43Svv90kvpO1hPGJ%2By3N5Yw9z4bRo%2FVjfAB9AG2yhKAbNupZyPvUF2OW0BS%2FgJFhJHXYmeJZlfD1MINMAvgWkSaHLLA61%2FD8jEXullbMJOJ0sQGOqUBKXZKqn1i1iLhd33vTYlcbYw%2FPqptwpmtZS2tF51QVFpFtPlIfqVK8EOaA2reARx50igoZWA7McvCVTuvwJcgSa8Zjq%2Ff8U37WLL7YqQow6ASP93pzmJdYkdcQxP6mRCSDvCfRxE4kK86PHVKzdVn%2FZmficlIYTbIiT52ckPx8NXfvzVOpxKoDJ9WQrSkA1%2FbUctyUPTaqlatxLsazsO1iuzMedwI&X-Amz-Signature=15d71f88112985ce8e4791b2ad314226afb1882a239c91b89824217efdaee407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUND4DM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDJHuC8Yk2QXlbh7fbqPkEs2MyE25v70vyFp6ajyq9%2FHgIgRrjiZM6k%2BAnWPlkJpYjnEFlrzNKjcH5fFaQvTDX6%2FZYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvJ79ilZjDquX7vIircA7QIbzBWGIqTdQQ0ZJIERVc%2FZzl0iEYrdrGKRz5OrkPxqvg0Uf46n2DoD4HzevMLzsH3EPFOg0hZVz1461PcAqaJ4yitiTYLltWtDxwDUT%2FElQKNEdODkTh9qQ2KoCn%2FQiuqMIS%2BXTeQpOg8q3s1a6fahyAiq65zKqWT25o%2F1xfkDtoEHxeaPzNvPbXJu5kp%2BSmT%2FOyVOIySnmULBgnTXmLYG4OZB8cFMDAUCFGj3%2Bf%2FXVyMGWCtamVq1hGsBg%2BBUSaAp6aSxDAyAo6HGIx1hfwBdyLMO3xWfzXtJieUDX9W%2BZ06f9c02K7JV1LQd1VVM25wz8%2BxuWdnHQMwjK5lQHLQuuD%2B4wSNCQJZ5TwX0VZ%2BbVXl%2FY0Zmsu631%2F%2BzYHQxPf0oUITvWDEaJ3IGTPkQ4HAlIGqANZ4ZMStH4zTCKfvaWja8IQttNNmlrle9jwEwnheGPSH2K46TkQ1J2ncFtReZjruFDQVP7CdxVanMXrEYHGglbaJn3e9VwnPfNIdFjRJqyWc334UVUd6mGsrS43Svv90kvpO1hPGJ%2By3N5Yw9z4bRo%2FVjfAB9AG2yhKAbNupZyPvUF2OW0BS%2FgJFhJHXYmeJZlfD1MINMAvgWkSaHLLA61%2FD8jEXullbMJOJ0sQGOqUBKXZKqn1i1iLhd33vTYlcbYw%2FPqptwpmtZS2tF51QVFpFtPlIfqVK8EOaA2reARx50igoZWA7McvCVTuvwJcgSa8Zjq%2Ff8U37WLL7YqQow6ASP93pzmJdYkdcQxP6mRCSDvCfRxE4kK86PHVKzdVn%2FZmficlIYTbIiT52ckPx8NXfvzVOpxKoDJ9WQrSkA1%2FbUctyUPTaqlatxLsazsO1iuzMedwI&X-Amz-Signature=5550523ace4fd1d8ceca36952bb81586b57f6e9127c0ec7ce17567e75efd8149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUND4DM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDJHuC8Yk2QXlbh7fbqPkEs2MyE25v70vyFp6ajyq9%2FHgIgRrjiZM6k%2BAnWPlkJpYjnEFlrzNKjcH5fFaQvTDX6%2FZYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvJ79ilZjDquX7vIircA7QIbzBWGIqTdQQ0ZJIERVc%2FZzl0iEYrdrGKRz5OrkPxqvg0Uf46n2DoD4HzevMLzsH3EPFOg0hZVz1461PcAqaJ4yitiTYLltWtDxwDUT%2FElQKNEdODkTh9qQ2KoCn%2FQiuqMIS%2BXTeQpOg8q3s1a6fahyAiq65zKqWT25o%2F1xfkDtoEHxeaPzNvPbXJu5kp%2BSmT%2FOyVOIySnmULBgnTXmLYG4OZB8cFMDAUCFGj3%2Bf%2FXVyMGWCtamVq1hGsBg%2BBUSaAp6aSxDAyAo6HGIx1hfwBdyLMO3xWfzXtJieUDX9W%2BZ06f9c02K7JV1LQd1VVM25wz8%2BxuWdnHQMwjK5lQHLQuuD%2B4wSNCQJZ5TwX0VZ%2BbVXl%2FY0Zmsu631%2F%2BzYHQxPf0oUITvWDEaJ3IGTPkQ4HAlIGqANZ4ZMStH4zTCKfvaWja8IQttNNmlrle9jwEwnheGPSH2K46TkQ1J2ncFtReZjruFDQVP7CdxVanMXrEYHGglbaJn3e9VwnPfNIdFjRJqyWc334UVUd6mGsrS43Svv90kvpO1hPGJ%2By3N5Yw9z4bRo%2FVjfAB9AG2yhKAbNupZyPvUF2OW0BS%2FgJFhJHXYmeJZlfD1MINMAvgWkSaHLLA61%2FD8jEXullbMJOJ0sQGOqUBKXZKqn1i1iLhd33vTYlcbYw%2FPqptwpmtZS2tF51QVFpFtPlIfqVK8EOaA2reARx50igoZWA7McvCVTuvwJcgSa8Zjq%2Ff8U37WLL7YqQow6ASP93pzmJdYkdcQxP6mRCSDvCfRxE4kK86PHVKzdVn%2FZmficlIYTbIiT52ckPx8NXfvzVOpxKoDJ9WQrSkA1%2FbUctyUPTaqlatxLsazsO1iuzMedwI&X-Amz-Signature=5abcd2e9861265f992630f7787e21452607bf81524f6f4b8310bf48bd0599e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
