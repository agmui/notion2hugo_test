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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSPO7SGJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCckcKCZ%2BFVtruvJZOUfH5eMv1qpSPju8FVJ83W%2B7ULRgIgBZgO2gOD%2FRjktp2RF40FWBfNhKs1mZ%2FfDepg%2FourXk0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLf6aUjopYw59jhBmSrcA4yRD7fqdFcbms6R5H6qnEhpp8K%2B1kxIkAftOQJ8JBTZJD2kgzc7jxwzcaUfOj%2FQiGpW2w%2Botfj3jhXh8T6jWL94RYBvBJmJjijjxf6dWUmSPyKFUvrMwUy9fMzm%2FYKhyCJzX67dqU0PWLHxHHCBoDnrW4rvL81U9ndXtl3kdqPUNvPRm8Z8ljcAlXT0fo%2BGBkKDw5mim8xNSEkFsINjvQ94MJDpN2Rh%2BX3OhkaLKHn1pSveBywffJ4EA%2BRx5Ov1y9VTsx0d10morLW3EwjBr5vU6Ujy4kd30pICKqHLKhj7DDCreMb7fo74vmZVWwrM9pLedzUmo9Fc7XwwNkCXyXOEA8UBbxxTDBR3VeW3T7DSwBZmtXtlZV8E6mfpEwHPe8iXOJiojV5RAYIUCPZuxPdEB1nnjrI0RFCoBg4sdivKROPQvhbMgDaiU7%2FRsUZvhcI3iA%2F80e00soKlNi3xE2S70icPZKggy2oiBF0cgH8HOQYimEjV4HLWaHeRyeQc4lEvfPouG98QdtnpCdegeSs4DP0ibDbrH4%2B32GCJ7WrJTFWF%2BRwhVHYHwyrBFJk2ZVBBVurIi%2FD0Sg1nnw63oTb58rpWbUHxpg%2BU2j4SY9vhrkxHhxJGV%2FoceXOiMK6Yo8QGOqUBK1DzuKprK8RBazsDIJi7cXuxYQdrpgrHHG1cu0Beiyjf9uCDH51iMBtgI2tOCtanJA6SEXEm7apOz7sHqKPJYgey2nhdCuGFlXbE%2FFv2cYg2hsVxSDPAg9GzuzJhvFALCbuVqF02OGgELY0LY18Vf815E4X8OLnuK8ab%2BFGhXmsknpk%2BHClyw8lWifThicACEfx6pTyz4vAQ2zMnyD23fP8Savzd&X-Amz-Signature=a40e386f37db07a0441b5bfc0e9b0945b4989110dd8f5f70f9e8418556d73c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSPO7SGJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCckcKCZ%2BFVtruvJZOUfH5eMv1qpSPju8FVJ83W%2B7ULRgIgBZgO2gOD%2FRjktp2RF40FWBfNhKs1mZ%2FfDepg%2FourXk0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLf6aUjopYw59jhBmSrcA4yRD7fqdFcbms6R5H6qnEhpp8K%2B1kxIkAftOQJ8JBTZJD2kgzc7jxwzcaUfOj%2FQiGpW2w%2Botfj3jhXh8T6jWL94RYBvBJmJjijjxf6dWUmSPyKFUvrMwUy9fMzm%2FYKhyCJzX67dqU0PWLHxHHCBoDnrW4rvL81U9ndXtl3kdqPUNvPRm8Z8ljcAlXT0fo%2BGBkKDw5mim8xNSEkFsINjvQ94MJDpN2Rh%2BX3OhkaLKHn1pSveBywffJ4EA%2BRx5Ov1y9VTsx0d10morLW3EwjBr5vU6Ujy4kd30pICKqHLKhj7DDCreMb7fo74vmZVWwrM9pLedzUmo9Fc7XwwNkCXyXOEA8UBbxxTDBR3VeW3T7DSwBZmtXtlZV8E6mfpEwHPe8iXOJiojV5RAYIUCPZuxPdEB1nnjrI0RFCoBg4sdivKROPQvhbMgDaiU7%2FRsUZvhcI3iA%2F80e00soKlNi3xE2S70icPZKggy2oiBF0cgH8HOQYimEjV4HLWaHeRyeQc4lEvfPouG98QdtnpCdegeSs4DP0ibDbrH4%2B32GCJ7WrJTFWF%2BRwhVHYHwyrBFJk2ZVBBVurIi%2FD0Sg1nnw63oTb58rpWbUHxpg%2BU2j4SY9vhrkxHhxJGV%2FoceXOiMK6Yo8QGOqUBK1DzuKprK8RBazsDIJi7cXuxYQdrpgrHHG1cu0Beiyjf9uCDH51iMBtgI2tOCtanJA6SEXEm7apOz7sHqKPJYgey2nhdCuGFlXbE%2FFv2cYg2hsVxSDPAg9GzuzJhvFALCbuVqF02OGgELY0LY18Vf815E4X8OLnuK8ab%2BFGhXmsknpk%2BHClyw8lWifThicACEfx6pTyz4vAQ2zMnyD23fP8Savzd&X-Amz-Signature=687a065593e5f0f503bb77eea7073efad429489b5d151049fc862fe8fbe0ee82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSPO7SGJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCckcKCZ%2BFVtruvJZOUfH5eMv1qpSPju8FVJ83W%2B7ULRgIgBZgO2gOD%2FRjktp2RF40FWBfNhKs1mZ%2FfDepg%2FourXk0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLf6aUjopYw59jhBmSrcA4yRD7fqdFcbms6R5H6qnEhpp8K%2B1kxIkAftOQJ8JBTZJD2kgzc7jxwzcaUfOj%2FQiGpW2w%2Botfj3jhXh8T6jWL94RYBvBJmJjijjxf6dWUmSPyKFUvrMwUy9fMzm%2FYKhyCJzX67dqU0PWLHxHHCBoDnrW4rvL81U9ndXtl3kdqPUNvPRm8Z8ljcAlXT0fo%2BGBkKDw5mim8xNSEkFsINjvQ94MJDpN2Rh%2BX3OhkaLKHn1pSveBywffJ4EA%2BRx5Ov1y9VTsx0d10morLW3EwjBr5vU6Ujy4kd30pICKqHLKhj7DDCreMb7fo74vmZVWwrM9pLedzUmo9Fc7XwwNkCXyXOEA8UBbxxTDBR3VeW3T7DSwBZmtXtlZV8E6mfpEwHPe8iXOJiojV5RAYIUCPZuxPdEB1nnjrI0RFCoBg4sdivKROPQvhbMgDaiU7%2FRsUZvhcI3iA%2F80e00soKlNi3xE2S70icPZKggy2oiBF0cgH8HOQYimEjV4HLWaHeRyeQc4lEvfPouG98QdtnpCdegeSs4DP0ibDbrH4%2B32GCJ7WrJTFWF%2BRwhVHYHwyrBFJk2ZVBBVurIi%2FD0Sg1nnw63oTb58rpWbUHxpg%2BU2j4SY9vhrkxHhxJGV%2FoceXOiMK6Yo8QGOqUBK1DzuKprK8RBazsDIJi7cXuxYQdrpgrHHG1cu0Beiyjf9uCDH51iMBtgI2tOCtanJA6SEXEm7apOz7sHqKPJYgey2nhdCuGFlXbE%2FFv2cYg2hsVxSDPAg9GzuzJhvFALCbuVqF02OGgELY0LY18Vf815E4X8OLnuK8ab%2BFGhXmsknpk%2BHClyw8lWifThicACEfx6pTyz4vAQ2zMnyD23fP8Savzd&X-Amz-Signature=ce60d9d3de2fb0f8e94054e0154465bbb93bbcc76249c7f5f793ce36eddeed57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSPO7SGJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCckcKCZ%2BFVtruvJZOUfH5eMv1qpSPju8FVJ83W%2B7ULRgIgBZgO2gOD%2FRjktp2RF40FWBfNhKs1mZ%2FfDepg%2FourXk0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLf6aUjopYw59jhBmSrcA4yRD7fqdFcbms6R5H6qnEhpp8K%2B1kxIkAftOQJ8JBTZJD2kgzc7jxwzcaUfOj%2FQiGpW2w%2Botfj3jhXh8T6jWL94RYBvBJmJjijjxf6dWUmSPyKFUvrMwUy9fMzm%2FYKhyCJzX67dqU0PWLHxHHCBoDnrW4rvL81U9ndXtl3kdqPUNvPRm8Z8ljcAlXT0fo%2BGBkKDw5mim8xNSEkFsINjvQ94MJDpN2Rh%2BX3OhkaLKHn1pSveBywffJ4EA%2BRx5Ov1y9VTsx0d10morLW3EwjBr5vU6Ujy4kd30pICKqHLKhj7DDCreMb7fo74vmZVWwrM9pLedzUmo9Fc7XwwNkCXyXOEA8UBbxxTDBR3VeW3T7DSwBZmtXtlZV8E6mfpEwHPe8iXOJiojV5RAYIUCPZuxPdEB1nnjrI0RFCoBg4sdivKROPQvhbMgDaiU7%2FRsUZvhcI3iA%2F80e00soKlNi3xE2S70icPZKggy2oiBF0cgH8HOQYimEjV4HLWaHeRyeQc4lEvfPouG98QdtnpCdegeSs4DP0ibDbrH4%2B32GCJ7WrJTFWF%2BRwhVHYHwyrBFJk2ZVBBVurIi%2FD0Sg1nnw63oTb58rpWbUHxpg%2BU2j4SY9vhrkxHhxJGV%2FoceXOiMK6Yo8QGOqUBK1DzuKprK8RBazsDIJi7cXuxYQdrpgrHHG1cu0Beiyjf9uCDH51iMBtgI2tOCtanJA6SEXEm7apOz7sHqKPJYgey2nhdCuGFlXbE%2FFv2cYg2hsVxSDPAg9GzuzJhvFALCbuVqF02OGgELY0LY18Vf815E4X8OLnuK8ab%2BFGhXmsknpk%2BHClyw8lWifThicACEfx6pTyz4vAQ2zMnyD23fP8Savzd&X-Amz-Signature=16219dbce17036b9523f10a081ec1e34fc17e9aafbc381520a9cff11679aef02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSPO7SGJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCckcKCZ%2BFVtruvJZOUfH5eMv1qpSPju8FVJ83W%2B7ULRgIgBZgO2gOD%2FRjktp2RF40FWBfNhKs1mZ%2FfDepg%2FourXk0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLf6aUjopYw59jhBmSrcA4yRD7fqdFcbms6R5H6qnEhpp8K%2B1kxIkAftOQJ8JBTZJD2kgzc7jxwzcaUfOj%2FQiGpW2w%2Botfj3jhXh8T6jWL94RYBvBJmJjijjxf6dWUmSPyKFUvrMwUy9fMzm%2FYKhyCJzX67dqU0PWLHxHHCBoDnrW4rvL81U9ndXtl3kdqPUNvPRm8Z8ljcAlXT0fo%2BGBkKDw5mim8xNSEkFsINjvQ94MJDpN2Rh%2BX3OhkaLKHn1pSveBywffJ4EA%2BRx5Ov1y9VTsx0d10morLW3EwjBr5vU6Ujy4kd30pICKqHLKhj7DDCreMb7fo74vmZVWwrM9pLedzUmo9Fc7XwwNkCXyXOEA8UBbxxTDBR3VeW3T7DSwBZmtXtlZV8E6mfpEwHPe8iXOJiojV5RAYIUCPZuxPdEB1nnjrI0RFCoBg4sdivKROPQvhbMgDaiU7%2FRsUZvhcI3iA%2F80e00soKlNi3xE2S70icPZKggy2oiBF0cgH8HOQYimEjV4HLWaHeRyeQc4lEvfPouG98QdtnpCdegeSs4DP0ibDbrH4%2B32GCJ7WrJTFWF%2BRwhVHYHwyrBFJk2ZVBBVurIi%2FD0Sg1nnw63oTb58rpWbUHxpg%2BU2j4SY9vhrkxHhxJGV%2FoceXOiMK6Yo8QGOqUBK1DzuKprK8RBazsDIJi7cXuxYQdrpgrHHG1cu0Beiyjf9uCDH51iMBtgI2tOCtanJA6SEXEm7apOz7sHqKPJYgey2nhdCuGFlXbE%2FFv2cYg2hsVxSDPAg9GzuzJhvFALCbuVqF02OGgELY0LY18Vf815E4X8OLnuK8ab%2BFGhXmsknpk%2BHClyw8lWifThicACEfx6pTyz4vAQ2zMnyD23fP8Savzd&X-Amz-Signature=1dfa6aadcbcf03920613a144765c762fda37b2ae27d381cd7d0295e466158141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSPO7SGJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCckcKCZ%2BFVtruvJZOUfH5eMv1qpSPju8FVJ83W%2B7ULRgIgBZgO2gOD%2FRjktp2RF40FWBfNhKs1mZ%2FfDepg%2FourXk0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLf6aUjopYw59jhBmSrcA4yRD7fqdFcbms6R5H6qnEhpp8K%2B1kxIkAftOQJ8JBTZJD2kgzc7jxwzcaUfOj%2FQiGpW2w%2Botfj3jhXh8T6jWL94RYBvBJmJjijjxf6dWUmSPyKFUvrMwUy9fMzm%2FYKhyCJzX67dqU0PWLHxHHCBoDnrW4rvL81U9ndXtl3kdqPUNvPRm8Z8ljcAlXT0fo%2BGBkKDw5mim8xNSEkFsINjvQ94MJDpN2Rh%2BX3OhkaLKHn1pSveBywffJ4EA%2BRx5Ov1y9VTsx0d10morLW3EwjBr5vU6Ujy4kd30pICKqHLKhj7DDCreMb7fo74vmZVWwrM9pLedzUmo9Fc7XwwNkCXyXOEA8UBbxxTDBR3VeW3T7DSwBZmtXtlZV8E6mfpEwHPe8iXOJiojV5RAYIUCPZuxPdEB1nnjrI0RFCoBg4sdivKROPQvhbMgDaiU7%2FRsUZvhcI3iA%2F80e00soKlNi3xE2S70icPZKggy2oiBF0cgH8HOQYimEjV4HLWaHeRyeQc4lEvfPouG98QdtnpCdegeSs4DP0ibDbrH4%2B32GCJ7WrJTFWF%2BRwhVHYHwyrBFJk2ZVBBVurIi%2FD0Sg1nnw63oTb58rpWbUHxpg%2BU2j4SY9vhrkxHhxJGV%2FoceXOiMK6Yo8QGOqUBK1DzuKprK8RBazsDIJi7cXuxYQdrpgrHHG1cu0Beiyjf9uCDH51iMBtgI2tOCtanJA6SEXEm7apOz7sHqKPJYgey2nhdCuGFlXbE%2FFv2cYg2hsVxSDPAg9GzuzJhvFALCbuVqF02OGgELY0LY18Vf815E4X8OLnuK8ab%2BFGhXmsknpk%2BHClyw8lWifThicACEfx6pTyz4vAQ2zMnyD23fP8Savzd&X-Amz-Signature=e4870f427a1a625a50506694a999e5b6831ef1ef87c54ebee74ce9a0a1bb5ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSPO7SGJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCckcKCZ%2BFVtruvJZOUfH5eMv1qpSPju8FVJ83W%2B7ULRgIgBZgO2gOD%2FRjktp2RF40FWBfNhKs1mZ%2FfDepg%2FourXk0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLf6aUjopYw59jhBmSrcA4yRD7fqdFcbms6R5H6qnEhpp8K%2B1kxIkAftOQJ8JBTZJD2kgzc7jxwzcaUfOj%2FQiGpW2w%2Botfj3jhXh8T6jWL94RYBvBJmJjijjxf6dWUmSPyKFUvrMwUy9fMzm%2FYKhyCJzX67dqU0PWLHxHHCBoDnrW4rvL81U9ndXtl3kdqPUNvPRm8Z8ljcAlXT0fo%2BGBkKDw5mim8xNSEkFsINjvQ94MJDpN2Rh%2BX3OhkaLKHn1pSveBywffJ4EA%2BRx5Ov1y9VTsx0d10morLW3EwjBr5vU6Ujy4kd30pICKqHLKhj7DDCreMb7fo74vmZVWwrM9pLedzUmo9Fc7XwwNkCXyXOEA8UBbxxTDBR3VeW3T7DSwBZmtXtlZV8E6mfpEwHPe8iXOJiojV5RAYIUCPZuxPdEB1nnjrI0RFCoBg4sdivKROPQvhbMgDaiU7%2FRsUZvhcI3iA%2F80e00soKlNi3xE2S70icPZKggy2oiBF0cgH8HOQYimEjV4HLWaHeRyeQc4lEvfPouG98QdtnpCdegeSs4DP0ibDbrH4%2B32GCJ7WrJTFWF%2BRwhVHYHwyrBFJk2ZVBBVurIi%2FD0Sg1nnw63oTb58rpWbUHxpg%2BU2j4SY9vhrkxHhxJGV%2FoceXOiMK6Yo8QGOqUBK1DzuKprK8RBazsDIJi7cXuxYQdrpgrHHG1cu0Beiyjf9uCDH51iMBtgI2tOCtanJA6SEXEm7apOz7sHqKPJYgey2nhdCuGFlXbE%2FFv2cYg2hsVxSDPAg9GzuzJhvFALCbuVqF02OGgELY0LY18Vf815E4X8OLnuK8ab%2BFGhXmsknpk%2BHClyw8lWifThicACEfx6pTyz4vAQ2zMnyD23fP8Savzd&X-Amz-Signature=2d167262a48fb74ba728abf335f2f4ecbfd4330744e561cda39806d01e172f83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSPO7SGJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCckcKCZ%2BFVtruvJZOUfH5eMv1qpSPju8FVJ83W%2B7ULRgIgBZgO2gOD%2FRjktp2RF40FWBfNhKs1mZ%2FfDepg%2FourXk0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLf6aUjopYw59jhBmSrcA4yRD7fqdFcbms6R5H6qnEhpp8K%2B1kxIkAftOQJ8JBTZJD2kgzc7jxwzcaUfOj%2FQiGpW2w%2Botfj3jhXh8T6jWL94RYBvBJmJjijjxf6dWUmSPyKFUvrMwUy9fMzm%2FYKhyCJzX67dqU0PWLHxHHCBoDnrW4rvL81U9ndXtl3kdqPUNvPRm8Z8ljcAlXT0fo%2BGBkKDw5mim8xNSEkFsINjvQ94MJDpN2Rh%2BX3OhkaLKHn1pSveBywffJ4EA%2BRx5Ov1y9VTsx0d10morLW3EwjBr5vU6Ujy4kd30pICKqHLKhj7DDCreMb7fo74vmZVWwrM9pLedzUmo9Fc7XwwNkCXyXOEA8UBbxxTDBR3VeW3T7DSwBZmtXtlZV8E6mfpEwHPe8iXOJiojV5RAYIUCPZuxPdEB1nnjrI0RFCoBg4sdivKROPQvhbMgDaiU7%2FRsUZvhcI3iA%2F80e00soKlNi3xE2S70icPZKggy2oiBF0cgH8HOQYimEjV4HLWaHeRyeQc4lEvfPouG98QdtnpCdegeSs4DP0ibDbrH4%2B32GCJ7WrJTFWF%2BRwhVHYHwyrBFJk2ZVBBVurIi%2FD0Sg1nnw63oTb58rpWbUHxpg%2BU2j4SY9vhrkxHhxJGV%2FoceXOiMK6Yo8QGOqUBK1DzuKprK8RBazsDIJi7cXuxYQdrpgrHHG1cu0Beiyjf9uCDH51iMBtgI2tOCtanJA6SEXEm7apOz7sHqKPJYgey2nhdCuGFlXbE%2FFv2cYg2hsVxSDPAg9GzuzJhvFALCbuVqF02OGgELY0LY18Vf815E4X8OLnuK8ab%2BFGhXmsknpk%2BHClyw8lWifThicACEfx6pTyz4vAQ2zMnyD23fP8Savzd&X-Amz-Signature=63f3860ac910e3a3c7518a31482a2211d554f22fdd6a6acedc9f932b0a16ede0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSPO7SGJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCckcKCZ%2BFVtruvJZOUfH5eMv1qpSPju8FVJ83W%2B7ULRgIgBZgO2gOD%2FRjktp2RF40FWBfNhKs1mZ%2FfDepg%2FourXk0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLf6aUjopYw59jhBmSrcA4yRD7fqdFcbms6R5H6qnEhpp8K%2B1kxIkAftOQJ8JBTZJD2kgzc7jxwzcaUfOj%2FQiGpW2w%2Botfj3jhXh8T6jWL94RYBvBJmJjijjxf6dWUmSPyKFUvrMwUy9fMzm%2FYKhyCJzX67dqU0PWLHxHHCBoDnrW4rvL81U9ndXtl3kdqPUNvPRm8Z8ljcAlXT0fo%2BGBkKDw5mim8xNSEkFsINjvQ94MJDpN2Rh%2BX3OhkaLKHn1pSveBywffJ4EA%2BRx5Ov1y9VTsx0d10morLW3EwjBr5vU6Ujy4kd30pICKqHLKhj7DDCreMb7fo74vmZVWwrM9pLedzUmo9Fc7XwwNkCXyXOEA8UBbxxTDBR3VeW3T7DSwBZmtXtlZV8E6mfpEwHPe8iXOJiojV5RAYIUCPZuxPdEB1nnjrI0RFCoBg4sdivKROPQvhbMgDaiU7%2FRsUZvhcI3iA%2F80e00soKlNi3xE2S70icPZKggy2oiBF0cgH8HOQYimEjV4HLWaHeRyeQc4lEvfPouG98QdtnpCdegeSs4DP0ibDbrH4%2B32GCJ7WrJTFWF%2BRwhVHYHwyrBFJk2ZVBBVurIi%2FD0Sg1nnw63oTb58rpWbUHxpg%2BU2j4SY9vhrkxHhxJGV%2FoceXOiMK6Yo8QGOqUBK1DzuKprK8RBazsDIJi7cXuxYQdrpgrHHG1cu0Beiyjf9uCDH51iMBtgI2tOCtanJA6SEXEm7apOz7sHqKPJYgey2nhdCuGFlXbE%2FFv2cYg2hsVxSDPAg9GzuzJhvFALCbuVqF02OGgELY0LY18Vf815E4X8OLnuK8ab%2BFGhXmsknpk%2BHClyw8lWifThicACEfx6pTyz4vAQ2zMnyD23fP8Savzd&X-Amz-Signature=574caa19f5b2012ba28e0a1d1bb8e13988205b5e88069c351b93de0c46df267d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSPO7SGJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCckcKCZ%2BFVtruvJZOUfH5eMv1qpSPju8FVJ83W%2B7ULRgIgBZgO2gOD%2FRjktp2RF40FWBfNhKs1mZ%2FfDepg%2FourXk0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLf6aUjopYw59jhBmSrcA4yRD7fqdFcbms6R5H6qnEhpp8K%2B1kxIkAftOQJ8JBTZJD2kgzc7jxwzcaUfOj%2FQiGpW2w%2Botfj3jhXh8T6jWL94RYBvBJmJjijjxf6dWUmSPyKFUvrMwUy9fMzm%2FYKhyCJzX67dqU0PWLHxHHCBoDnrW4rvL81U9ndXtl3kdqPUNvPRm8Z8ljcAlXT0fo%2BGBkKDw5mim8xNSEkFsINjvQ94MJDpN2Rh%2BX3OhkaLKHn1pSveBywffJ4EA%2BRx5Ov1y9VTsx0d10morLW3EwjBr5vU6Ujy4kd30pICKqHLKhj7DDCreMb7fo74vmZVWwrM9pLedzUmo9Fc7XwwNkCXyXOEA8UBbxxTDBR3VeW3T7DSwBZmtXtlZV8E6mfpEwHPe8iXOJiojV5RAYIUCPZuxPdEB1nnjrI0RFCoBg4sdivKROPQvhbMgDaiU7%2FRsUZvhcI3iA%2F80e00soKlNi3xE2S70icPZKggy2oiBF0cgH8HOQYimEjV4HLWaHeRyeQc4lEvfPouG98QdtnpCdegeSs4DP0ibDbrH4%2B32GCJ7WrJTFWF%2BRwhVHYHwyrBFJk2ZVBBVurIi%2FD0Sg1nnw63oTb58rpWbUHxpg%2BU2j4SY9vhrkxHhxJGV%2FoceXOiMK6Yo8QGOqUBK1DzuKprK8RBazsDIJi7cXuxYQdrpgrHHG1cu0Beiyjf9uCDH51iMBtgI2tOCtanJA6SEXEm7apOz7sHqKPJYgey2nhdCuGFlXbE%2FFv2cYg2hsVxSDPAg9GzuzJhvFALCbuVqF02OGgELY0LY18Vf815E4X8OLnuK8ab%2BFGhXmsknpk%2BHClyw8lWifThicACEfx6pTyz4vAQ2zMnyD23fP8Savzd&X-Amz-Signature=93ee1a68f3b409e2e0abd081dd0f01fbcf7b92fe2aaecf00ca521264c90768e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSPO7SGJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCckcKCZ%2BFVtruvJZOUfH5eMv1qpSPju8FVJ83W%2B7ULRgIgBZgO2gOD%2FRjktp2RF40FWBfNhKs1mZ%2FfDepg%2FourXk0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLf6aUjopYw59jhBmSrcA4yRD7fqdFcbms6R5H6qnEhpp8K%2B1kxIkAftOQJ8JBTZJD2kgzc7jxwzcaUfOj%2FQiGpW2w%2Botfj3jhXh8T6jWL94RYBvBJmJjijjxf6dWUmSPyKFUvrMwUy9fMzm%2FYKhyCJzX67dqU0PWLHxHHCBoDnrW4rvL81U9ndXtl3kdqPUNvPRm8Z8ljcAlXT0fo%2BGBkKDw5mim8xNSEkFsINjvQ94MJDpN2Rh%2BX3OhkaLKHn1pSveBywffJ4EA%2BRx5Ov1y9VTsx0d10morLW3EwjBr5vU6Ujy4kd30pICKqHLKhj7DDCreMb7fo74vmZVWwrM9pLedzUmo9Fc7XwwNkCXyXOEA8UBbxxTDBR3VeW3T7DSwBZmtXtlZV8E6mfpEwHPe8iXOJiojV5RAYIUCPZuxPdEB1nnjrI0RFCoBg4sdivKROPQvhbMgDaiU7%2FRsUZvhcI3iA%2F80e00soKlNi3xE2S70icPZKggy2oiBF0cgH8HOQYimEjV4HLWaHeRyeQc4lEvfPouG98QdtnpCdegeSs4DP0ibDbrH4%2B32GCJ7WrJTFWF%2BRwhVHYHwyrBFJk2ZVBBVurIi%2FD0Sg1nnw63oTb58rpWbUHxpg%2BU2j4SY9vhrkxHhxJGV%2FoceXOiMK6Yo8QGOqUBK1DzuKprK8RBazsDIJi7cXuxYQdrpgrHHG1cu0Beiyjf9uCDH51iMBtgI2tOCtanJA6SEXEm7apOz7sHqKPJYgey2nhdCuGFlXbE%2FFv2cYg2hsVxSDPAg9GzuzJhvFALCbuVqF02OGgELY0LY18Vf815E4X8OLnuK8ab%2BFGhXmsknpk%2BHClyw8lWifThicACEfx6pTyz4vAQ2zMnyD23fP8Savzd&X-Amz-Signature=8229a3b8d8e39ab429f25c505d7a5c74bd16b0c3d7b76b12357b58e568b4317b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSPO7SGJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCckcKCZ%2BFVtruvJZOUfH5eMv1qpSPju8FVJ83W%2B7ULRgIgBZgO2gOD%2FRjktp2RF40FWBfNhKs1mZ%2FfDepg%2FourXk0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLf6aUjopYw59jhBmSrcA4yRD7fqdFcbms6R5H6qnEhpp8K%2B1kxIkAftOQJ8JBTZJD2kgzc7jxwzcaUfOj%2FQiGpW2w%2Botfj3jhXh8T6jWL94RYBvBJmJjijjxf6dWUmSPyKFUvrMwUy9fMzm%2FYKhyCJzX67dqU0PWLHxHHCBoDnrW4rvL81U9ndXtl3kdqPUNvPRm8Z8ljcAlXT0fo%2BGBkKDw5mim8xNSEkFsINjvQ94MJDpN2Rh%2BX3OhkaLKHn1pSveBywffJ4EA%2BRx5Ov1y9VTsx0d10morLW3EwjBr5vU6Ujy4kd30pICKqHLKhj7DDCreMb7fo74vmZVWwrM9pLedzUmo9Fc7XwwNkCXyXOEA8UBbxxTDBR3VeW3T7DSwBZmtXtlZV8E6mfpEwHPe8iXOJiojV5RAYIUCPZuxPdEB1nnjrI0RFCoBg4sdivKROPQvhbMgDaiU7%2FRsUZvhcI3iA%2F80e00soKlNi3xE2S70icPZKggy2oiBF0cgH8HOQYimEjV4HLWaHeRyeQc4lEvfPouG98QdtnpCdegeSs4DP0ibDbrH4%2B32GCJ7WrJTFWF%2BRwhVHYHwyrBFJk2ZVBBVurIi%2FD0Sg1nnw63oTb58rpWbUHxpg%2BU2j4SY9vhrkxHhxJGV%2FoceXOiMK6Yo8QGOqUBK1DzuKprK8RBazsDIJi7cXuxYQdrpgrHHG1cu0Beiyjf9uCDH51iMBtgI2tOCtanJA6SEXEm7apOz7sHqKPJYgey2nhdCuGFlXbE%2FFv2cYg2hsVxSDPAg9GzuzJhvFALCbuVqF02OGgELY0LY18Vf815E4X8OLnuK8ab%2BFGhXmsknpk%2BHClyw8lWifThicACEfx6pTyz4vAQ2zMnyD23fP8Savzd&X-Amz-Signature=7f6666d01706d4fecd4c17fe710f4978b43ee2a1bec684dfc53cb48c5efe709c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSPO7SGJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCckcKCZ%2BFVtruvJZOUfH5eMv1qpSPju8FVJ83W%2B7ULRgIgBZgO2gOD%2FRjktp2RF40FWBfNhKs1mZ%2FfDepg%2FourXk0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLf6aUjopYw59jhBmSrcA4yRD7fqdFcbms6R5H6qnEhpp8K%2B1kxIkAftOQJ8JBTZJD2kgzc7jxwzcaUfOj%2FQiGpW2w%2Botfj3jhXh8T6jWL94RYBvBJmJjijjxf6dWUmSPyKFUvrMwUy9fMzm%2FYKhyCJzX67dqU0PWLHxHHCBoDnrW4rvL81U9ndXtl3kdqPUNvPRm8Z8ljcAlXT0fo%2BGBkKDw5mim8xNSEkFsINjvQ94MJDpN2Rh%2BX3OhkaLKHn1pSveBywffJ4EA%2BRx5Ov1y9VTsx0d10morLW3EwjBr5vU6Ujy4kd30pICKqHLKhj7DDCreMb7fo74vmZVWwrM9pLedzUmo9Fc7XwwNkCXyXOEA8UBbxxTDBR3VeW3T7DSwBZmtXtlZV8E6mfpEwHPe8iXOJiojV5RAYIUCPZuxPdEB1nnjrI0RFCoBg4sdivKROPQvhbMgDaiU7%2FRsUZvhcI3iA%2F80e00soKlNi3xE2S70icPZKggy2oiBF0cgH8HOQYimEjV4HLWaHeRyeQc4lEvfPouG98QdtnpCdegeSs4DP0ibDbrH4%2B32GCJ7WrJTFWF%2BRwhVHYHwyrBFJk2ZVBBVurIi%2FD0Sg1nnw63oTb58rpWbUHxpg%2BU2j4SY9vhrkxHhxJGV%2FoceXOiMK6Yo8QGOqUBK1DzuKprK8RBazsDIJi7cXuxYQdrpgrHHG1cu0Beiyjf9uCDH51iMBtgI2tOCtanJA6SEXEm7apOz7sHqKPJYgey2nhdCuGFlXbE%2FFv2cYg2hsVxSDPAg9GzuzJhvFALCbuVqF02OGgELY0LY18Vf815E4X8OLnuK8ab%2BFGhXmsknpk%2BHClyw8lWifThicACEfx6pTyz4vAQ2zMnyD23fP8Savzd&X-Amz-Signature=bd6005ccfbdb31928615ef460af98eefdd2ab35141674ac05d3dbb446db24292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
