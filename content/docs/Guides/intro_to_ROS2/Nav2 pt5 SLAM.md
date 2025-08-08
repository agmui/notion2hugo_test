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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIB2NRQB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBzklDx1PeLmjqJ5%2FHng3j7RJ3fROQAL2Z6KGcSOA5rzAiEAuQ0KOOvkfqmIK3wOUUAb7M2N8rhuxMPJjHKEaolfe8wqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0V7TA6DQ5CIZ2gmCrcAz%2ByRSnXiF3Ru7K%2BptflOXJ8EhIj9Rs6KgBooURYc%2FiXleFyekwQ%2BGfjxTFFX7BvRZ61Ql%2Bp2k9McSVgzSyMSO%2BTpZCTk2GQAm4kiNRR%2Fn%2BZI6Nr3KJHBF2AR%2F3h1BLOkfArTehs26IvaRPqCOIjko7vbQDlkZIR2AHWOh9%2F2mmV0zRYJXo9ff48E83RXKfbYl1VSX%2FfPEmfXaN4lMAgpfji6MB3Xx11yuYY1oWkZhRkzgH45N3LJqxt2VvwyoQdxgYIsQzGh%2Fkmt9py7sQvywXp8wCNGm7qRxV4bHlWeJ4Rq8EPX4kjlwBzcu7%2ByPrs6DsV46hIMGdFFlDNLyyQl9GMgwpK7EFINUPGOHAReIV40T2vYyA%2B8eWdedH4A0b8QUiMJz%2B3duZmzWUzNvNRPOxT784E8xPf3FQUa2Zf4JIV%2BC6oCiARoWDwM2JLkR2pARk3OLjYSYfTZsTOFf43aQyWaZ7xBSgK2Fsg3H0nvMd3pgIG%2BNjG3uipTIhhFeh3xDQOe%2BjE6W82hcifD5AEzP9EnmLd%2F%2B5a0J%2FrUtx2ncUnUtADFUn%2BNod8%2Biken1ZgXaQEsZ1WUfIgMzkXfhdhhLirlB0YAiyjdPqCLNY9vB7cVyEEZM190OYLHKLdMM7q2MQGOqUBSWlUtzA%2B8yD%2FYaOF%2Fxz5IMFByQcEse5eYwdF3G0P1UhQ9Rl61ZslJbfQWUkMZu4zNEaiNwpZvF9byBH9rfzBkbdrqSRq%2FbvNvkT7dQcfX6zbupcPj7Nvfl4iJvmSolG%2Fmdl3GR2gNi%2FXZ%2B2rReAP6tt0Nc7NX9CWIUYlFhQsZqniVrEXGumuLrMUGjJLrxezGbDVE6t6kNWEyBzIctN03xtqDjBm&X-Amz-Signature=ebfb8b2285b9ec8363b20d864561d1022de7a9cc97272f259dd9cb7af6f71fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIB2NRQB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBzklDx1PeLmjqJ5%2FHng3j7RJ3fROQAL2Z6KGcSOA5rzAiEAuQ0KOOvkfqmIK3wOUUAb7M2N8rhuxMPJjHKEaolfe8wqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0V7TA6DQ5CIZ2gmCrcAz%2ByRSnXiF3Ru7K%2BptflOXJ8EhIj9Rs6KgBooURYc%2FiXleFyekwQ%2BGfjxTFFX7BvRZ61Ql%2Bp2k9McSVgzSyMSO%2BTpZCTk2GQAm4kiNRR%2Fn%2BZI6Nr3KJHBF2AR%2F3h1BLOkfArTehs26IvaRPqCOIjko7vbQDlkZIR2AHWOh9%2F2mmV0zRYJXo9ff48E83RXKfbYl1VSX%2FfPEmfXaN4lMAgpfji6MB3Xx11yuYY1oWkZhRkzgH45N3LJqxt2VvwyoQdxgYIsQzGh%2Fkmt9py7sQvywXp8wCNGm7qRxV4bHlWeJ4Rq8EPX4kjlwBzcu7%2ByPrs6DsV46hIMGdFFlDNLyyQl9GMgwpK7EFINUPGOHAReIV40T2vYyA%2B8eWdedH4A0b8QUiMJz%2B3duZmzWUzNvNRPOxT784E8xPf3FQUa2Zf4JIV%2BC6oCiARoWDwM2JLkR2pARk3OLjYSYfTZsTOFf43aQyWaZ7xBSgK2Fsg3H0nvMd3pgIG%2BNjG3uipTIhhFeh3xDQOe%2BjE6W82hcifD5AEzP9EnmLd%2F%2B5a0J%2FrUtx2ncUnUtADFUn%2BNod8%2Biken1ZgXaQEsZ1WUfIgMzkXfhdhhLirlB0YAiyjdPqCLNY9vB7cVyEEZM190OYLHKLdMM7q2MQGOqUBSWlUtzA%2B8yD%2FYaOF%2Fxz5IMFByQcEse5eYwdF3G0P1UhQ9Rl61ZslJbfQWUkMZu4zNEaiNwpZvF9byBH9rfzBkbdrqSRq%2FbvNvkT7dQcfX6zbupcPj7Nvfl4iJvmSolG%2Fmdl3GR2gNi%2FXZ%2B2rReAP6tt0Nc7NX9CWIUYlFhQsZqniVrEXGumuLrMUGjJLrxezGbDVE6t6kNWEyBzIctN03xtqDjBm&X-Amz-Signature=8038553e6f2bbfe406411d27fab52a6f57291f62dfba3f521957b11fc0524e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIB2NRQB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBzklDx1PeLmjqJ5%2FHng3j7RJ3fROQAL2Z6KGcSOA5rzAiEAuQ0KOOvkfqmIK3wOUUAb7M2N8rhuxMPJjHKEaolfe8wqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0V7TA6DQ5CIZ2gmCrcAz%2ByRSnXiF3Ru7K%2BptflOXJ8EhIj9Rs6KgBooURYc%2FiXleFyekwQ%2BGfjxTFFX7BvRZ61Ql%2Bp2k9McSVgzSyMSO%2BTpZCTk2GQAm4kiNRR%2Fn%2BZI6Nr3KJHBF2AR%2F3h1BLOkfArTehs26IvaRPqCOIjko7vbQDlkZIR2AHWOh9%2F2mmV0zRYJXo9ff48E83RXKfbYl1VSX%2FfPEmfXaN4lMAgpfji6MB3Xx11yuYY1oWkZhRkzgH45N3LJqxt2VvwyoQdxgYIsQzGh%2Fkmt9py7sQvywXp8wCNGm7qRxV4bHlWeJ4Rq8EPX4kjlwBzcu7%2ByPrs6DsV46hIMGdFFlDNLyyQl9GMgwpK7EFINUPGOHAReIV40T2vYyA%2B8eWdedH4A0b8QUiMJz%2B3duZmzWUzNvNRPOxT784E8xPf3FQUa2Zf4JIV%2BC6oCiARoWDwM2JLkR2pARk3OLjYSYfTZsTOFf43aQyWaZ7xBSgK2Fsg3H0nvMd3pgIG%2BNjG3uipTIhhFeh3xDQOe%2BjE6W82hcifD5AEzP9EnmLd%2F%2B5a0J%2FrUtx2ncUnUtADFUn%2BNod8%2Biken1ZgXaQEsZ1WUfIgMzkXfhdhhLirlB0YAiyjdPqCLNY9vB7cVyEEZM190OYLHKLdMM7q2MQGOqUBSWlUtzA%2B8yD%2FYaOF%2Fxz5IMFByQcEse5eYwdF3G0P1UhQ9Rl61ZslJbfQWUkMZu4zNEaiNwpZvF9byBH9rfzBkbdrqSRq%2FbvNvkT7dQcfX6zbupcPj7Nvfl4iJvmSolG%2Fmdl3GR2gNi%2FXZ%2B2rReAP6tt0Nc7NX9CWIUYlFhQsZqniVrEXGumuLrMUGjJLrxezGbDVE6t6kNWEyBzIctN03xtqDjBm&X-Amz-Signature=71d631d13cf6becc641078823f6c1849aab31fffec7bd98e9a1d8523ab324b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIB2NRQB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBzklDx1PeLmjqJ5%2FHng3j7RJ3fROQAL2Z6KGcSOA5rzAiEAuQ0KOOvkfqmIK3wOUUAb7M2N8rhuxMPJjHKEaolfe8wqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0V7TA6DQ5CIZ2gmCrcAz%2ByRSnXiF3Ru7K%2BptflOXJ8EhIj9Rs6KgBooURYc%2FiXleFyekwQ%2BGfjxTFFX7BvRZ61Ql%2Bp2k9McSVgzSyMSO%2BTpZCTk2GQAm4kiNRR%2Fn%2BZI6Nr3KJHBF2AR%2F3h1BLOkfArTehs26IvaRPqCOIjko7vbQDlkZIR2AHWOh9%2F2mmV0zRYJXo9ff48E83RXKfbYl1VSX%2FfPEmfXaN4lMAgpfji6MB3Xx11yuYY1oWkZhRkzgH45N3LJqxt2VvwyoQdxgYIsQzGh%2Fkmt9py7sQvywXp8wCNGm7qRxV4bHlWeJ4Rq8EPX4kjlwBzcu7%2ByPrs6DsV46hIMGdFFlDNLyyQl9GMgwpK7EFINUPGOHAReIV40T2vYyA%2B8eWdedH4A0b8QUiMJz%2B3duZmzWUzNvNRPOxT784E8xPf3FQUa2Zf4JIV%2BC6oCiARoWDwM2JLkR2pARk3OLjYSYfTZsTOFf43aQyWaZ7xBSgK2Fsg3H0nvMd3pgIG%2BNjG3uipTIhhFeh3xDQOe%2BjE6W82hcifD5AEzP9EnmLd%2F%2B5a0J%2FrUtx2ncUnUtADFUn%2BNod8%2Biken1ZgXaQEsZ1WUfIgMzkXfhdhhLirlB0YAiyjdPqCLNY9vB7cVyEEZM190OYLHKLdMM7q2MQGOqUBSWlUtzA%2B8yD%2FYaOF%2Fxz5IMFByQcEse5eYwdF3G0P1UhQ9Rl61ZslJbfQWUkMZu4zNEaiNwpZvF9byBH9rfzBkbdrqSRq%2FbvNvkT7dQcfX6zbupcPj7Nvfl4iJvmSolG%2Fmdl3GR2gNi%2FXZ%2B2rReAP6tt0Nc7NX9CWIUYlFhQsZqniVrEXGumuLrMUGjJLrxezGbDVE6t6kNWEyBzIctN03xtqDjBm&X-Amz-Signature=5d9de61c330ac44462827f551893a454833491257f61850966e8ce34829c90ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIB2NRQB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBzklDx1PeLmjqJ5%2FHng3j7RJ3fROQAL2Z6KGcSOA5rzAiEAuQ0KOOvkfqmIK3wOUUAb7M2N8rhuxMPJjHKEaolfe8wqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0V7TA6DQ5CIZ2gmCrcAz%2ByRSnXiF3Ru7K%2BptflOXJ8EhIj9Rs6KgBooURYc%2FiXleFyekwQ%2BGfjxTFFX7BvRZ61Ql%2Bp2k9McSVgzSyMSO%2BTpZCTk2GQAm4kiNRR%2Fn%2BZI6Nr3KJHBF2AR%2F3h1BLOkfArTehs26IvaRPqCOIjko7vbQDlkZIR2AHWOh9%2F2mmV0zRYJXo9ff48E83RXKfbYl1VSX%2FfPEmfXaN4lMAgpfji6MB3Xx11yuYY1oWkZhRkzgH45N3LJqxt2VvwyoQdxgYIsQzGh%2Fkmt9py7sQvywXp8wCNGm7qRxV4bHlWeJ4Rq8EPX4kjlwBzcu7%2ByPrs6DsV46hIMGdFFlDNLyyQl9GMgwpK7EFINUPGOHAReIV40T2vYyA%2B8eWdedH4A0b8QUiMJz%2B3duZmzWUzNvNRPOxT784E8xPf3FQUa2Zf4JIV%2BC6oCiARoWDwM2JLkR2pARk3OLjYSYfTZsTOFf43aQyWaZ7xBSgK2Fsg3H0nvMd3pgIG%2BNjG3uipTIhhFeh3xDQOe%2BjE6W82hcifD5AEzP9EnmLd%2F%2B5a0J%2FrUtx2ncUnUtADFUn%2BNod8%2Biken1ZgXaQEsZ1WUfIgMzkXfhdhhLirlB0YAiyjdPqCLNY9vB7cVyEEZM190OYLHKLdMM7q2MQGOqUBSWlUtzA%2B8yD%2FYaOF%2Fxz5IMFByQcEse5eYwdF3G0P1UhQ9Rl61ZslJbfQWUkMZu4zNEaiNwpZvF9byBH9rfzBkbdrqSRq%2FbvNvkT7dQcfX6zbupcPj7Nvfl4iJvmSolG%2Fmdl3GR2gNi%2FXZ%2B2rReAP6tt0Nc7NX9CWIUYlFhQsZqniVrEXGumuLrMUGjJLrxezGbDVE6t6kNWEyBzIctN03xtqDjBm&X-Amz-Signature=84ae9ada23ed6693b08c85d4a2610c1859ab9868aaa27a6922d1ee789d470ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIB2NRQB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBzklDx1PeLmjqJ5%2FHng3j7RJ3fROQAL2Z6KGcSOA5rzAiEAuQ0KOOvkfqmIK3wOUUAb7M2N8rhuxMPJjHKEaolfe8wqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0V7TA6DQ5CIZ2gmCrcAz%2ByRSnXiF3Ru7K%2BptflOXJ8EhIj9Rs6KgBooURYc%2FiXleFyekwQ%2BGfjxTFFX7BvRZ61Ql%2Bp2k9McSVgzSyMSO%2BTpZCTk2GQAm4kiNRR%2Fn%2BZI6Nr3KJHBF2AR%2F3h1BLOkfArTehs26IvaRPqCOIjko7vbQDlkZIR2AHWOh9%2F2mmV0zRYJXo9ff48E83RXKfbYl1VSX%2FfPEmfXaN4lMAgpfji6MB3Xx11yuYY1oWkZhRkzgH45N3LJqxt2VvwyoQdxgYIsQzGh%2Fkmt9py7sQvywXp8wCNGm7qRxV4bHlWeJ4Rq8EPX4kjlwBzcu7%2ByPrs6DsV46hIMGdFFlDNLyyQl9GMgwpK7EFINUPGOHAReIV40T2vYyA%2B8eWdedH4A0b8QUiMJz%2B3duZmzWUzNvNRPOxT784E8xPf3FQUa2Zf4JIV%2BC6oCiARoWDwM2JLkR2pARk3OLjYSYfTZsTOFf43aQyWaZ7xBSgK2Fsg3H0nvMd3pgIG%2BNjG3uipTIhhFeh3xDQOe%2BjE6W82hcifD5AEzP9EnmLd%2F%2B5a0J%2FrUtx2ncUnUtADFUn%2BNod8%2Biken1ZgXaQEsZ1WUfIgMzkXfhdhhLirlB0YAiyjdPqCLNY9vB7cVyEEZM190OYLHKLdMM7q2MQGOqUBSWlUtzA%2B8yD%2FYaOF%2Fxz5IMFByQcEse5eYwdF3G0P1UhQ9Rl61ZslJbfQWUkMZu4zNEaiNwpZvF9byBH9rfzBkbdrqSRq%2FbvNvkT7dQcfX6zbupcPj7Nvfl4iJvmSolG%2Fmdl3GR2gNi%2FXZ%2B2rReAP6tt0Nc7NX9CWIUYlFhQsZqniVrEXGumuLrMUGjJLrxezGbDVE6t6kNWEyBzIctN03xtqDjBm&X-Amz-Signature=e46077bcebad766e8d7db03b1b6e90825865035c3e1c8988b341676f04e3f10d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIB2NRQB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBzklDx1PeLmjqJ5%2FHng3j7RJ3fROQAL2Z6KGcSOA5rzAiEAuQ0KOOvkfqmIK3wOUUAb7M2N8rhuxMPJjHKEaolfe8wqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0V7TA6DQ5CIZ2gmCrcAz%2ByRSnXiF3Ru7K%2BptflOXJ8EhIj9Rs6KgBooURYc%2FiXleFyekwQ%2BGfjxTFFX7BvRZ61Ql%2Bp2k9McSVgzSyMSO%2BTpZCTk2GQAm4kiNRR%2Fn%2BZI6Nr3KJHBF2AR%2F3h1BLOkfArTehs26IvaRPqCOIjko7vbQDlkZIR2AHWOh9%2F2mmV0zRYJXo9ff48E83RXKfbYl1VSX%2FfPEmfXaN4lMAgpfji6MB3Xx11yuYY1oWkZhRkzgH45N3LJqxt2VvwyoQdxgYIsQzGh%2Fkmt9py7sQvywXp8wCNGm7qRxV4bHlWeJ4Rq8EPX4kjlwBzcu7%2ByPrs6DsV46hIMGdFFlDNLyyQl9GMgwpK7EFINUPGOHAReIV40T2vYyA%2B8eWdedH4A0b8QUiMJz%2B3duZmzWUzNvNRPOxT784E8xPf3FQUa2Zf4JIV%2BC6oCiARoWDwM2JLkR2pARk3OLjYSYfTZsTOFf43aQyWaZ7xBSgK2Fsg3H0nvMd3pgIG%2BNjG3uipTIhhFeh3xDQOe%2BjE6W82hcifD5AEzP9EnmLd%2F%2B5a0J%2FrUtx2ncUnUtADFUn%2BNod8%2Biken1ZgXaQEsZ1WUfIgMzkXfhdhhLirlB0YAiyjdPqCLNY9vB7cVyEEZM190OYLHKLdMM7q2MQGOqUBSWlUtzA%2B8yD%2FYaOF%2Fxz5IMFByQcEse5eYwdF3G0P1UhQ9Rl61ZslJbfQWUkMZu4zNEaiNwpZvF9byBH9rfzBkbdrqSRq%2FbvNvkT7dQcfX6zbupcPj7Nvfl4iJvmSolG%2Fmdl3GR2gNi%2FXZ%2B2rReAP6tt0Nc7NX9CWIUYlFhQsZqniVrEXGumuLrMUGjJLrxezGbDVE6t6kNWEyBzIctN03xtqDjBm&X-Amz-Signature=17959e1db1b6dadbb37e8314e555856fe738bdee48a44b26edc3720655f3c487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIB2NRQB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBzklDx1PeLmjqJ5%2FHng3j7RJ3fROQAL2Z6KGcSOA5rzAiEAuQ0KOOvkfqmIK3wOUUAb7M2N8rhuxMPJjHKEaolfe8wqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0V7TA6DQ5CIZ2gmCrcAz%2ByRSnXiF3Ru7K%2BptflOXJ8EhIj9Rs6KgBooURYc%2FiXleFyekwQ%2BGfjxTFFX7BvRZ61Ql%2Bp2k9McSVgzSyMSO%2BTpZCTk2GQAm4kiNRR%2Fn%2BZI6Nr3KJHBF2AR%2F3h1BLOkfArTehs26IvaRPqCOIjko7vbQDlkZIR2AHWOh9%2F2mmV0zRYJXo9ff48E83RXKfbYl1VSX%2FfPEmfXaN4lMAgpfji6MB3Xx11yuYY1oWkZhRkzgH45N3LJqxt2VvwyoQdxgYIsQzGh%2Fkmt9py7sQvywXp8wCNGm7qRxV4bHlWeJ4Rq8EPX4kjlwBzcu7%2ByPrs6DsV46hIMGdFFlDNLyyQl9GMgwpK7EFINUPGOHAReIV40T2vYyA%2B8eWdedH4A0b8QUiMJz%2B3duZmzWUzNvNRPOxT784E8xPf3FQUa2Zf4JIV%2BC6oCiARoWDwM2JLkR2pARk3OLjYSYfTZsTOFf43aQyWaZ7xBSgK2Fsg3H0nvMd3pgIG%2BNjG3uipTIhhFeh3xDQOe%2BjE6W82hcifD5AEzP9EnmLd%2F%2B5a0J%2FrUtx2ncUnUtADFUn%2BNod8%2Biken1ZgXaQEsZ1WUfIgMzkXfhdhhLirlB0YAiyjdPqCLNY9vB7cVyEEZM190OYLHKLdMM7q2MQGOqUBSWlUtzA%2B8yD%2FYaOF%2Fxz5IMFByQcEse5eYwdF3G0P1UhQ9Rl61ZslJbfQWUkMZu4zNEaiNwpZvF9byBH9rfzBkbdrqSRq%2FbvNvkT7dQcfX6zbupcPj7Nvfl4iJvmSolG%2Fmdl3GR2gNi%2FXZ%2B2rReAP6tt0Nc7NX9CWIUYlFhQsZqniVrEXGumuLrMUGjJLrxezGbDVE6t6kNWEyBzIctN03xtqDjBm&X-Amz-Signature=b32fb001757da3aeee7faa61325c0100550c554448ad7d317015686b45705ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIB2NRQB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBzklDx1PeLmjqJ5%2FHng3j7RJ3fROQAL2Z6KGcSOA5rzAiEAuQ0KOOvkfqmIK3wOUUAb7M2N8rhuxMPJjHKEaolfe8wqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0V7TA6DQ5CIZ2gmCrcAz%2ByRSnXiF3Ru7K%2BptflOXJ8EhIj9Rs6KgBooURYc%2FiXleFyekwQ%2BGfjxTFFX7BvRZ61Ql%2Bp2k9McSVgzSyMSO%2BTpZCTk2GQAm4kiNRR%2Fn%2BZI6Nr3KJHBF2AR%2F3h1BLOkfArTehs26IvaRPqCOIjko7vbQDlkZIR2AHWOh9%2F2mmV0zRYJXo9ff48E83RXKfbYl1VSX%2FfPEmfXaN4lMAgpfji6MB3Xx11yuYY1oWkZhRkzgH45N3LJqxt2VvwyoQdxgYIsQzGh%2Fkmt9py7sQvywXp8wCNGm7qRxV4bHlWeJ4Rq8EPX4kjlwBzcu7%2ByPrs6DsV46hIMGdFFlDNLyyQl9GMgwpK7EFINUPGOHAReIV40T2vYyA%2B8eWdedH4A0b8QUiMJz%2B3duZmzWUzNvNRPOxT784E8xPf3FQUa2Zf4JIV%2BC6oCiARoWDwM2JLkR2pARk3OLjYSYfTZsTOFf43aQyWaZ7xBSgK2Fsg3H0nvMd3pgIG%2BNjG3uipTIhhFeh3xDQOe%2BjE6W82hcifD5AEzP9EnmLd%2F%2B5a0J%2FrUtx2ncUnUtADFUn%2BNod8%2Biken1ZgXaQEsZ1WUfIgMzkXfhdhhLirlB0YAiyjdPqCLNY9vB7cVyEEZM190OYLHKLdMM7q2MQGOqUBSWlUtzA%2B8yD%2FYaOF%2Fxz5IMFByQcEse5eYwdF3G0P1UhQ9Rl61ZslJbfQWUkMZu4zNEaiNwpZvF9byBH9rfzBkbdrqSRq%2FbvNvkT7dQcfX6zbupcPj7Nvfl4iJvmSolG%2Fmdl3GR2gNi%2FXZ%2B2rReAP6tt0Nc7NX9CWIUYlFhQsZqniVrEXGumuLrMUGjJLrxezGbDVE6t6kNWEyBzIctN03xtqDjBm&X-Amz-Signature=dbbf3c23f3d7ab9f63b1741e638b0ce978b3b9293ad3b5ba7793a53a48cfe241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIB2NRQB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBzklDx1PeLmjqJ5%2FHng3j7RJ3fROQAL2Z6KGcSOA5rzAiEAuQ0KOOvkfqmIK3wOUUAb7M2N8rhuxMPJjHKEaolfe8wqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0V7TA6DQ5CIZ2gmCrcAz%2ByRSnXiF3Ru7K%2BptflOXJ8EhIj9Rs6KgBooURYc%2FiXleFyekwQ%2BGfjxTFFX7BvRZ61Ql%2Bp2k9McSVgzSyMSO%2BTpZCTk2GQAm4kiNRR%2Fn%2BZI6Nr3KJHBF2AR%2F3h1BLOkfArTehs26IvaRPqCOIjko7vbQDlkZIR2AHWOh9%2F2mmV0zRYJXo9ff48E83RXKfbYl1VSX%2FfPEmfXaN4lMAgpfji6MB3Xx11yuYY1oWkZhRkzgH45N3LJqxt2VvwyoQdxgYIsQzGh%2Fkmt9py7sQvywXp8wCNGm7qRxV4bHlWeJ4Rq8EPX4kjlwBzcu7%2ByPrs6DsV46hIMGdFFlDNLyyQl9GMgwpK7EFINUPGOHAReIV40T2vYyA%2B8eWdedH4A0b8QUiMJz%2B3duZmzWUzNvNRPOxT784E8xPf3FQUa2Zf4JIV%2BC6oCiARoWDwM2JLkR2pARk3OLjYSYfTZsTOFf43aQyWaZ7xBSgK2Fsg3H0nvMd3pgIG%2BNjG3uipTIhhFeh3xDQOe%2BjE6W82hcifD5AEzP9EnmLd%2F%2B5a0J%2FrUtx2ncUnUtADFUn%2BNod8%2Biken1ZgXaQEsZ1WUfIgMzkXfhdhhLirlB0YAiyjdPqCLNY9vB7cVyEEZM190OYLHKLdMM7q2MQGOqUBSWlUtzA%2B8yD%2FYaOF%2Fxz5IMFByQcEse5eYwdF3G0P1UhQ9Rl61ZslJbfQWUkMZu4zNEaiNwpZvF9byBH9rfzBkbdrqSRq%2FbvNvkT7dQcfX6zbupcPj7Nvfl4iJvmSolG%2Fmdl3GR2gNi%2FXZ%2B2rReAP6tt0Nc7NX9CWIUYlFhQsZqniVrEXGumuLrMUGjJLrxezGbDVE6t6kNWEyBzIctN03xtqDjBm&X-Amz-Signature=f4c313c0848497d7929b0b331f428934e4b028a67c503a4c876bceb13a963c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIB2NRQB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBzklDx1PeLmjqJ5%2FHng3j7RJ3fROQAL2Z6KGcSOA5rzAiEAuQ0KOOvkfqmIK3wOUUAb7M2N8rhuxMPJjHKEaolfe8wqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0V7TA6DQ5CIZ2gmCrcAz%2ByRSnXiF3Ru7K%2BptflOXJ8EhIj9Rs6KgBooURYc%2FiXleFyekwQ%2BGfjxTFFX7BvRZ61Ql%2Bp2k9McSVgzSyMSO%2BTpZCTk2GQAm4kiNRR%2Fn%2BZI6Nr3KJHBF2AR%2F3h1BLOkfArTehs26IvaRPqCOIjko7vbQDlkZIR2AHWOh9%2F2mmV0zRYJXo9ff48E83RXKfbYl1VSX%2FfPEmfXaN4lMAgpfji6MB3Xx11yuYY1oWkZhRkzgH45N3LJqxt2VvwyoQdxgYIsQzGh%2Fkmt9py7sQvywXp8wCNGm7qRxV4bHlWeJ4Rq8EPX4kjlwBzcu7%2ByPrs6DsV46hIMGdFFlDNLyyQl9GMgwpK7EFINUPGOHAReIV40T2vYyA%2B8eWdedH4A0b8QUiMJz%2B3duZmzWUzNvNRPOxT784E8xPf3FQUa2Zf4JIV%2BC6oCiARoWDwM2JLkR2pARk3OLjYSYfTZsTOFf43aQyWaZ7xBSgK2Fsg3H0nvMd3pgIG%2BNjG3uipTIhhFeh3xDQOe%2BjE6W82hcifD5AEzP9EnmLd%2F%2B5a0J%2FrUtx2ncUnUtADFUn%2BNod8%2Biken1ZgXaQEsZ1WUfIgMzkXfhdhhLirlB0YAiyjdPqCLNY9vB7cVyEEZM190OYLHKLdMM7q2MQGOqUBSWlUtzA%2B8yD%2FYaOF%2Fxz5IMFByQcEse5eYwdF3G0P1UhQ9Rl61ZslJbfQWUkMZu4zNEaiNwpZvF9byBH9rfzBkbdrqSRq%2FbvNvkT7dQcfX6zbupcPj7Nvfl4iJvmSolG%2Fmdl3GR2gNi%2FXZ%2B2rReAP6tt0Nc7NX9CWIUYlFhQsZqniVrEXGumuLrMUGjJLrxezGbDVE6t6kNWEyBzIctN03xtqDjBm&X-Amz-Signature=0bc8e3b4073283632881dd86a1dfff3dfa4e88a2f23d983326e2a7a38061b911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIB2NRQB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBzklDx1PeLmjqJ5%2FHng3j7RJ3fROQAL2Z6KGcSOA5rzAiEAuQ0KOOvkfqmIK3wOUUAb7M2N8rhuxMPJjHKEaolfe8wqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0V7TA6DQ5CIZ2gmCrcAz%2ByRSnXiF3Ru7K%2BptflOXJ8EhIj9Rs6KgBooURYc%2FiXleFyekwQ%2BGfjxTFFX7BvRZ61Ql%2Bp2k9McSVgzSyMSO%2BTpZCTk2GQAm4kiNRR%2Fn%2BZI6Nr3KJHBF2AR%2F3h1BLOkfArTehs26IvaRPqCOIjko7vbQDlkZIR2AHWOh9%2F2mmV0zRYJXo9ff48E83RXKfbYl1VSX%2FfPEmfXaN4lMAgpfji6MB3Xx11yuYY1oWkZhRkzgH45N3LJqxt2VvwyoQdxgYIsQzGh%2Fkmt9py7sQvywXp8wCNGm7qRxV4bHlWeJ4Rq8EPX4kjlwBzcu7%2ByPrs6DsV46hIMGdFFlDNLyyQl9GMgwpK7EFINUPGOHAReIV40T2vYyA%2B8eWdedH4A0b8QUiMJz%2B3duZmzWUzNvNRPOxT784E8xPf3FQUa2Zf4JIV%2BC6oCiARoWDwM2JLkR2pARk3OLjYSYfTZsTOFf43aQyWaZ7xBSgK2Fsg3H0nvMd3pgIG%2BNjG3uipTIhhFeh3xDQOe%2BjE6W82hcifD5AEzP9EnmLd%2F%2B5a0J%2FrUtx2ncUnUtADFUn%2BNod8%2Biken1ZgXaQEsZ1WUfIgMzkXfhdhhLirlB0YAiyjdPqCLNY9vB7cVyEEZM190OYLHKLdMM7q2MQGOqUBSWlUtzA%2B8yD%2FYaOF%2Fxz5IMFByQcEse5eYwdF3G0P1UhQ9Rl61ZslJbfQWUkMZu4zNEaiNwpZvF9byBH9rfzBkbdrqSRq%2FbvNvkT7dQcfX6zbupcPj7Nvfl4iJvmSolG%2Fmdl3GR2gNi%2FXZ%2B2rReAP6tt0Nc7NX9CWIUYlFhQsZqniVrEXGumuLrMUGjJLrxezGbDVE6t6kNWEyBzIctN03xtqDjBm&X-Amz-Signature=d77250cdb9e7dab7b1740320fbb11e24baa9987c2588a0c35f23a11ce5ea2633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIB2NRQB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBzklDx1PeLmjqJ5%2FHng3j7RJ3fROQAL2Z6KGcSOA5rzAiEAuQ0KOOvkfqmIK3wOUUAb7M2N8rhuxMPJjHKEaolfe8wqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0V7TA6DQ5CIZ2gmCrcAz%2ByRSnXiF3Ru7K%2BptflOXJ8EhIj9Rs6KgBooURYc%2FiXleFyekwQ%2BGfjxTFFX7BvRZ61Ql%2Bp2k9McSVgzSyMSO%2BTpZCTk2GQAm4kiNRR%2Fn%2BZI6Nr3KJHBF2AR%2F3h1BLOkfArTehs26IvaRPqCOIjko7vbQDlkZIR2AHWOh9%2F2mmV0zRYJXo9ff48E83RXKfbYl1VSX%2FfPEmfXaN4lMAgpfji6MB3Xx11yuYY1oWkZhRkzgH45N3LJqxt2VvwyoQdxgYIsQzGh%2Fkmt9py7sQvywXp8wCNGm7qRxV4bHlWeJ4Rq8EPX4kjlwBzcu7%2ByPrs6DsV46hIMGdFFlDNLyyQl9GMgwpK7EFINUPGOHAReIV40T2vYyA%2B8eWdedH4A0b8QUiMJz%2B3duZmzWUzNvNRPOxT784E8xPf3FQUa2Zf4JIV%2BC6oCiARoWDwM2JLkR2pARk3OLjYSYfTZsTOFf43aQyWaZ7xBSgK2Fsg3H0nvMd3pgIG%2BNjG3uipTIhhFeh3xDQOe%2BjE6W82hcifD5AEzP9EnmLd%2F%2B5a0J%2FrUtx2ncUnUtADFUn%2BNod8%2Biken1ZgXaQEsZ1WUfIgMzkXfhdhhLirlB0YAiyjdPqCLNY9vB7cVyEEZM190OYLHKLdMM7q2MQGOqUBSWlUtzA%2B8yD%2FYaOF%2Fxz5IMFByQcEse5eYwdF3G0P1UhQ9Rl61ZslJbfQWUkMZu4zNEaiNwpZvF9byBH9rfzBkbdrqSRq%2FbvNvkT7dQcfX6zbupcPj7Nvfl4iJvmSolG%2Fmdl3GR2gNi%2FXZ%2B2rReAP6tt0Nc7NX9CWIUYlFhQsZqniVrEXGumuLrMUGjJLrxezGbDVE6t6kNWEyBzIctN03xtqDjBm&X-Amz-Signature=50eddf9879996246edf9fd05fe07648a191c30c2603627a12a950d58f0d96854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIB2NRQB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBzklDx1PeLmjqJ5%2FHng3j7RJ3fROQAL2Z6KGcSOA5rzAiEAuQ0KOOvkfqmIK3wOUUAb7M2N8rhuxMPJjHKEaolfe8wqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0V7TA6DQ5CIZ2gmCrcAz%2ByRSnXiF3Ru7K%2BptflOXJ8EhIj9Rs6KgBooURYc%2FiXleFyekwQ%2BGfjxTFFX7BvRZ61Ql%2Bp2k9McSVgzSyMSO%2BTpZCTk2GQAm4kiNRR%2Fn%2BZI6Nr3KJHBF2AR%2F3h1BLOkfArTehs26IvaRPqCOIjko7vbQDlkZIR2AHWOh9%2F2mmV0zRYJXo9ff48E83RXKfbYl1VSX%2FfPEmfXaN4lMAgpfji6MB3Xx11yuYY1oWkZhRkzgH45N3LJqxt2VvwyoQdxgYIsQzGh%2Fkmt9py7sQvywXp8wCNGm7qRxV4bHlWeJ4Rq8EPX4kjlwBzcu7%2ByPrs6DsV46hIMGdFFlDNLyyQl9GMgwpK7EFINUPGOHAReIV40T2vYyA%2B8eWdedH4A0b8QUiMJz%2B3duZmzWUzNvNRPOxT784E8xPf3FQUa2Zf4JIV%2BC6oCiARoWDwM2JLkR2pARk3OLjYSYfTZsTOFf43aQyWaZ7xBSgK2Fsg3H0nvMd3pgIG%2BNjG3uipTIhhFeh3xDQOe%2BjE6W82hcifD5AEzP9EnmLd%2F%2B5a0J%2FrUtx2ncUnUtADFUn%2BNod8%2Biken1ZgXaQEsZ1WUfIgMzkXfhdhhLirlB0YAiyjdPqCLNY9vB7cVyEEZM190OYLHKLdMM7q2MQGOqUBSWlUtzA%2B8yD%2FYaOF%2Fxz5IMFByQcEse5eYwdF3G0P1UhQ9Rl61ZslJbfQWUkMZu4zNEaiNwpZvF9byBH9rfzBkbdrqSRq%2FbvNvkT7dQcfX6zbupcPj7Nvfl4iJvmSolG%2Fmdl3GR2gNi%2FXZ%2B2rReAP6tt0Nc7NX9CWIUYlFhQsZqniVrEXGumuLrMUGjJLrxezGbDVE6t6kNWEyBzIctN03xtqDjBm&X-Amz-Signature=c70bcbb2e064e0fd233a5e3d23f24e64f17265d7aebbff6ab69b108b63ae1ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
