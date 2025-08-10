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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRUD6KO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApIMC8T8jB%2BE5okGOZ6fz4bRJU%2BUVgsQdM9MKQT2vHaAiEAyyHWpTPmFwNIAwNnR5gwvlYakbzJ1tU1kSnTQNZBEugqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFOcYYZB07qyT%2B%2BvyrcA07ADQ1N%2B9dG762c5V7QxyQ1bJdvIMPBWoLVzafEPmKMjG4%2FvEf5kJYZ%2BS3QQgAl2Uho%2FJ6jAxBZ1647GdHYQ1Yfzd4jbbEk3qzDRD9lKwBhNz6hQtP%2FNaiS22zcbsdWhhqT0Lxn0Lv9FV9PpP98ZKLYQTGWZL%2Fxz0lGnSqG9GtYLvZaLmMel1Q4yGVs9ZIR8vX5N33%2BRe67ErnSInOw4UBoXFEJTW3E1tkmeHif7pP7ZO3pfNHMCp1BdFIqmlOaFKW5bQgxJxrx7%2Bne60z5jbbztZGOlkYALMczv0UwB5n6WfhCZ2KLx%2F4mLcAby1rR0zIQaBRKXD501hdtJHyA1y7UCypR2n8EqhxFkepCLkn%2FdghrLbSg6fA1VBdA38CuwKXTcMWzo1ZN0OaFynCAclEFOU8xG5NXd3vbCrkKNO%2FZf3BOMqiZRMSQeK9t4hcAUq5Ag7A2NIpNnPWfhpO4UD4OjVCrosGgQF%2FssLQYSEa1dnQzhqsWmMlmtGlGL1cKPVufqHa7GGKXyFi2ogW0Z9Td6K1xrnT4fMtSStkpZWxz1OlaBiPsUX0%2BK0MOlmaWp%2BKLzPuJTy8m4RHDRLq2db1aDB7bHs0FSnIfX9qngzKdsbY9HPtJ01wbkekbMMi648QGOqUB7lgWXELhxABDZoPR1U%2BRdjc4aoM9BF5qVe1bQ61PjvhF4y3wWKlTrVVKPXXbBOTqwdZKDGfIJ5njiG4k9Dk47W9RrWzJLnIoJLbaYGxkkDwBYoy7tMITBj3P4zu%2FZXJqasCIfomz0rzZYzQt9TvHeFGja69do4o%2FwGSuer%2FOth%2FeQ%2FKEhd6ZM7c20L8YyIjuD3MkUsCihQNHduouV5rS0keAP%2FUY&X-Amz-Signature=3df9151cc95b51d83e6c771b4cd97a7eb4201a751fb08703b2dc4ed8452f67be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRUD6KO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApIMC8T8jB%2BE5okGOZ6fz4bRJU%2BUVgsQdM9MKQT2vHaAiEAyyHWpTPmFwNIAwNnR5gwvlYakbzJ1tU1kSnTQNZBEugqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFOcYYZB07qyT%2B%2BvyrcA07ADQ1N%2B9dG762c5V7QxyQ1bJdvIMPBWoLVzafEPmKMjG4%2FvEf5kJYZ%2BS3QQgAl2Uho%2FJ6jAxBZ1647GdHYQ1Yfzd4jbbEk3qzDRD9lKwBhNz6hQtP%2FNaiS22zcbsdWhhqT0Lxn0Lv9FV9PpP98ZKLYQTGWZL%2Fxz0lGnSqG9GtYLvZaLmMel1Q4yGVs9ZIR8vX5N33%2BRe67ErnSInOw4UBoXFEJTW3E1tkmeHif7pP7ZO3pfNHMCp1BdFIqmlOaFKW5bQgxJxrx7%2Bne60z5jbbztZGOlkYALMczv0UwB5n6WfhCZ2KLx%2F4mLcAby1rR0zIQaBRKXD501hdtJHyA1y7UCypR2n8EqhxFkepCLkn%2FdghrLbSg6fA1VBdA38CuwKXTcMWzo1ZN0OaFynCAclEFOU8xG5NXd3vbCrkKNO%2FZf3BOMqiZRMSQeK9t4hcAUq5Ag7A2NIpNnPWfhpO4UD4OjVCrosGgQF%2FssLQYSEa1dnQzhqsWmMlmtGlGL1cKPVufqHa7GGKXyFi2ogW0Z9Td6K1xrnT4fMtSStkpZWxz1OlaBiPsUX0%2BK0MOlmaWp%2BKLzPuJTy8m4RHDRLq2db1aDB7bHs0FSnIfX9qngzKdsbY9HPtJ01wbkekbMMi648QGOqUB7lgWXELhxABDZoPR1U%2BRdjc4aoM9BF5qVe1bQ61PjvhF4y3wWKlTrVVKPXXbBOTqwdZKDGfIJ5njiG4k9Dk47W9RrWzJLnIoJLbaYGxkkDwBYoy7tMITBj3P4zu%2FZXJqasCIfomz0rzZYzQt9TvHeFGja69do4o%2FwGSuer%2FOth%2FeQ%2FKEhd6ZM7c20L8YyIjuD3MkUsCihQNHduouV5rS0keAP%2FUY&X-Amz-Signature=417f5cb171341a989648689c3cad04e0786e6528f54c29e1f76bc8a9a291e0f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRUD6KO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApIMC8T8jB%2BE5okGOZ6fz4bRJU%2BUVgsQdM9MKQT2vHaAiEAyyHWpTPmFwNIAwNnR5gwvlYakbzJ1tU1kSnTQNZBEugqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFOcYYZB07qyT%2B%2BvyrcA07ADQ1N%2B9dG762c5V7QxyQ1bJdvIMPBWoLVzafEPmKMjG4%2FvEf5kJYZ%2BS3QQgAl2Uho%2FJ6jAxBZ1647GdHYQ1Yfzd4jbbEk3qzDRD9lKwBhNz6hQtP%2FNaiS22zcbsdWhhqT0Lxn0Lv9FV9PpP98ZKLYQTGWZL%2Fxz0lGnSqG9GtYLvZaLmMel1Q4yGVs9ZIR8vX5N33%2BRe67ErnSInOw4UBoXFEJTW3E1tkmeHif7pP7ZO3pfNHMCp1BdFIqmlOaFKW5bQgxJxrx7%2Bne60z5jbbztZGOlkYALMczv0UwB5n6WfhCZ2KLx%2F4mLcAby1rR0zIQaBRKXD501hdtJHyA1y7UCypR2n8EqhxFkepCLkn%2FdghrLbSg6fA1VBdA38CuwKXTcMWzo1ZN0OaFynCAclEFOU8xG5NXd3vbCrkKNO%2FZf3BOMqiZRMSQeK9t4hcAUq5Ag7A2NIpNnPWfhpO4UD4OjVCrosGgQF%2FssLQYSEa1dnQzhqsWmMlmtGlGL1cKPVufqHa7GGKXyFi2ogW0Z9Td6K1xrnT4fMtSStkpZWxz1OlaBiPsUX0%2BK0MOlmaWp%2BKLzPuJTy8m4RHDRLq2db1aDB7bHs0FSnIfX9qngzKdsbY9HPtJ01wbkekbMMi648QGOqUB7lgWXELhxABDZoPR1U%2BRdjc4aoM9BF5qVe1bQ61PjvhF4y3wWKlTrVVKPXXbBOTqwdZKDGfIJ5njiG4k9Dk47W9RrWzJLnIoJLbaYGxkkDwBYoy7tMITBj3P4zu%2FZXJqasCIfomz0rzZYzQt9TvHeFGja69do4o%2FwGSuer%2FOth%2FeQ%2FKEhd6ZM7c20L8YyIjuD3MkUsCihQNHduouV5rS0keAP%2FUY&X-Amz-Signature=731db0852ba8c188122c5d4d9514090114261ff988c7f58e9017fcfb8433a251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRUD6KO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApIMC8T8jB%2BE5okGOZ6fz4bRJU%2BUVgsQdM9MKQT2vHaAiEAyyHWpTPmFwNIAwNnR5gwvlYakbzJ1tU1kSnTQNZBEugqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFOcYYZB07qyT%2B%2BvyrcA07ADQ1N%2B9dG762c5V7QxyQ1bJdvIMPBWoLVzafEPmKMjG4%2FvEf5kJYZ%2BS3QQgAl2Uho%2FJ6jAxBZ1647GdHYQ1Yfzd4jbbEk3qzDRD9lKwBhNz6hQtP%2FNaiS22zcbsdWhhqT0Lxn0Lv9FV9PpP98ZKLYQTGWZL%2Fxz0lGnSqG9GtYLvZaLmMel1Q4yGVs9ZIR8vX5N33%2BRe67ErnSInOw4UBoXFEJTW3E1tkmeHif7pP7ZO3pfNHMCp1BdFIqmlOaFKW5bQgxJxrx7%2Bne60z5jbbztZGOlkYALMczv0UwB5n6WfhCZ2KLx%2F4mLcAby1rR0zIQaBRKXD501hdtJHyA1y7UCypR2n8EqhxFkepCLkn%2FdghrLbSg6fA1VBdA38CuwKXTcMWzo1ZN0OaFynCAclEFOU8xG5NXd3vbCrkKNO%2FZf3BOMqiZRMSQeK9t4hcAUq5Ag7A2NIpNnPWfhpO4UD4OjVCrosGgQF%2FssLQYSEa1dnQzhqsWmMlmtGlGL1cKPVufqHa7GGKXyFi2ogW0Z9Td6K1xrnT4fMtSStkpZWxz1OlaBiPsUX0%2BK0MOlmaWp%2BKLzPuJTy8m4RHDRLq2db1aDB7bHs0FSnIfX9qngzKdsbY9HPtJ01wbkekbMMi648QGOqUB7lgWXELhxABDZoPR1U%2BRdjc4aoM9BF5qVe1bQ61PjvhF4y3wWKlTrVVKPXXbBOTqwdZKDGfIJ5njiG4k9Dk47W9RrWzJLnIoJLbaYGxkkDwBYoy7tMITBj3P4zu%2FZXJqasCIfomz0rzZYzQt9TvHeFGja69do4o%2FwGSuer%2FOth%2FeQ%2FKEhd6ZM7c20L8YyIjuD3MkUsCihQNHduouV5rS0keAP%2FUY&X-Amz-Signature=a4eb22bafbb46e67fc03386a6382c1f0b94a12eeb4fdc0883a6f3bfeff20e2c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRUD6KO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApIMC8T8jB%2BE5okGOZ6fz4bRJU%2BUVgsQdM9MKQT2vHaAiEAyyHWpTPmFwNIAwNnR5gwvlYakbzJ1tU1kSnTQNZBEugqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFOcYYZB07qyT%2B%2BvyrcA07ADQ1N%2B9dG762c5V7QxyQ1bJdvIMPBWoLVzafEPmKMjG4%2FvEf5kJYZ%2BS3QQgAl2Uho%2FJ6jAxBZ1647GdHYQ1Yfzd4jbbEk3qzDRD9lKwBhNz6hQtP%2FNaiS22zcbsdWhhqT0Lxn0Lv9FV9PpP98ZKLYQTGWZL%2Fxz0lGnSqG9GtYLvZaLmMel1Q4yGVs9ZIR8vX5N33%2BRe67ErnSInOw4UBoXFEJTW3E1tkmeHif7pP7ZO3pfNHMCp1BdFIqmlOaFKW5bQgxJxrx7%2Bne60z5jbbztZGOlkYALMczv0UwB5n6WfhCZ2KLx%2F4mLcAby1rR0zIQaBRKXD501hdtJHyA1y7UCypR2n8EqhxFkepCLkn%2FdghrLbSg6fA1VBdA38CuwKXTcMWzo1ZN0OaFynCAclEFOU8xG5NXd3vbCrkKNO%2FZf3BOMqiZRMSQeK9t4hcAUq5Ag7A2NIpNnPWfhpO4UD4OjVCrosGgQF%2FssLQYSEa1dnQzhqsWmMlmtGlGL1cKPVufqHa7GGKXyFi2ogW0Z9Td6K1xrnT4fMtSStkpZWxz1OlaBiPsUX0%2BK0MOlmaWp%2BKLzPuJTy8m4RHDRLq2db1aDB7bHs0FSnIfX9qngzKdsbY9HPtJ01wbkekbMMi648QGOqUB7lgWXELhxABDZoPR1U%2BRdjc4aoM9BF5qVe1bQ61PjvhF4y3wWKlTrVVKPXXbBOTqwdZKDGfIJ5njiG4k9Dk47W9RrWzJLnIoJLbaYGxkkDwBYoy7tMITBj3P4zu%2FZXJqasCIfomz0rzZYzQt9TvHeFGja69do4o%2FwGSuer%2FOth%2FeQ%2FKEhd6ZM7c20L8YyIjuD3MkUsCihQNHduouV5rS0keAP%2FUY&X-Amz-Signature=9359694cf23418009ff8d4f3e613f02acd03b740d9014573082e2eeaaa49b68d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRUD6KO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApIMC8T8jB%2BE5okGOZ6fz4bRJU%2BUVgsQdM9MKQT2vHaAiEAyyHWpTPmFwNIAwNnR5gwvlYakbzJ1tU1kSnTQNZBEugqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFOcYYZB07qyT%2B%2BvyrcA07ADQ1N%2B9dG762c5V7QxyQ1bJdvIMPBWoLVzafEPmKMjG4%2FvEf5kJYZ%2BS3QQgAl2Uho%2FJ6jAxBZ1647GdHYQ1Yfzd4jbbEk3qzDRD9lKwBhNz6hQtP%2FNaiS22zcbsdWhhqT0Lxn0Lv9FV9PpP98ZKLYQTGWZL%2Fxz0lGnSqG9GtYLvZaLmMel1Q4yGVs9ZIR8vX5N33%2BRe67ErnSInOw4UBoXFEJTW3E1tkmeHif7pP7ZO3pfNHMCp1BdFIqmlOaFKW5bQgxJxrx7%2Bne60z5jbbztZGOlkYALMczv0UwB5n6WfhCZ2KLx%2F4mLcAby1rR0zIQaBRKXD501hdtJHyA1y7UCypR2n8EqhxFkepCLkn%2FdghrLbSg6fA1VBdA38CuwKXTcMWzo1ZN0OaFynCAclEFOU8xG5NXd3vbCrkKNO%2FZf3BOMqiZRMSQeK9t4hcAUq5Ag7A2NIpNnPWfhpO4UD4OjVCrosGgQF%2FssLQYSEa1dnQzhqsWmMlmtGlGL1cKPVufqHa7GGKXyFi2ogW0Z9Td6K1xrnT4fMtSStkpZWxz1OlaBiPsUX0%2BK0MOlmaWp%2BKLzPuJTy8m4RHDRLq2db1aDB7bHs0FSnIfX9qngzKdsbY9HPtJ01wbkekbMMi648QGOqUB7lgWXELhxABDZoPR1U%2BRdjc4aoM9BF5qVe1bQ61PjvhF4y3wWKlTrVVKPXXbBOTqwdZKDGfIJ5njiG4k9Dk47W9RrWzJLnIoJLbaYGxkkDwBYoy7tMITBj3P4zu%2FZXJqasCIfomz0rzZYzQt9TvHeFGja69do4o%2FwGSuer%2FOth%2FeQ%2FKEhd6ZM7c20L8YyIjuD3MkUsCihQNHduouV5rS0keAP%2FUY&X-Amz-Signature=375db85cf3fc190a07a4b423174b6806c9e89822179cf5c7186220c00afbaedd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRUD6KO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApIMC8T8jB%2BE5okGOZ6fz4bRJU%2BUVgsQdM9MKQT2vHaAiEAyyHWpTPmFwNIAwNnR5gwvlYakbzJ1tU1kSnTQNZBEugqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFOcYYZB07qyT%2B%2BvyrcA07ADQ1N%2B9dG762c5V7QxyQ1bJdvIMPBWoLVzafEPmKMjG4%2FvEf5kJYZ%2BS3QQgAl2Uho%2FJ6jAxBZ1647GdHYQ1Yfzd4jbbEk3qzDRD9lKwBhNz6hQtP%2FNaiS22zcbsdWhhqT0Lxn0Lv9FV9PpP98ZKLYQTGWZL%2Fxz0lGnSqG9GtYLvZaLmMel1Q4yGVs9ZIR8vX5N33%2BRe67ErnSInOw4UBoXFEJTW3E1tkmeHif7pP7ZO3pfNHMCp1BdFIqmlOaFKW5bQgxJxrx7%2Bne60z5jbbztZGOlkYALMczv0UwB5n6WfhCZ2KLx%2F4mLcAby1rR0zIQaBRKXD501hdtJHyA1y7UCypR2n8EqhxFkepCLkn%2FdghrLbSg6fA1VBdA38CuwKXTcMWzo1ZN0OaFynCAclEFOU8xG5NXd3vbCrkKNO%2FZf3BOMqiZRMSQeK9t4hcAUq5Ag7A2NIpNnPWfhpO4UD4OjVCrosGgQF%2FssLQYSEa1dnQzhqsWmMlmtGlGL1cKPVufqHa7GGKXyFi2ogW0Z9Td6K1xrnT4fMtSStkpZWxz1OlaBiPsUX0%2BK0MOlmaWp%2BKLzPuJTy8m4RHDRLq2db1aDB7bHs0FSnIfX9qngzKdsbY9HPtJ01wbkekbMMi648QGOqUB7lgWXELhxABDZoPR1U%2BRdjc4aoM9BF5qVe1bQ61PjvhF4y3wWKlTrVVKPXXbBOTqwdZKDGfIJ5njiG4k9Dk47W9RrWzJLnIoJLbaYGxkkDwBYoy7tMITBj3P4zu%2FZXJqasCIfomz0rzZYzQt9TvHeFGja69do4o%2FwGSuer%2FOth%2FeQ%2FKEhd6ZM7c20L8YyIjuD3MkUsCihQNHduouV5rS0keAP%2FUY&X-Amz-Signature=83184a5cb39f670572329c93085d9adcfbc854ac659159bdfd9fbe6b9cf8ded6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRUD6KO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApIMC8T8jB%2BE5okGOZ6fz4bRJU%2BUVgsQdM9MKQT2vHaAiEAyyHWpTPmFwNIAwNnR5gwvlYakbzJ1tU1kSnTQNZBEugqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFOcYYZB07qyT%2B%2BvyrcA07ADQ1N%2B9dG762c5V7QxyQ1bJdvIMPBWoLVzafEPmKMjG4%2FvEf5kJYZ%2BS3QQgAl2Uho%2FJ6jAxBZ1647GdHYQ1Yfzd4jbbEk3qzDRD9lKwBhNz6hQtP%2FNaiS22zcbsdWhhqT0Lxn0Lv9FV9PpP98ZKLYQTGWZL%2Fxz0lGnSqG9GtYLvZaLmMel1Q4yGVs9ZIR8vX5N33%2BRe67ErnSInOw4UBoXFEJTW3E1tkmeHif7pP7ZO3pfNHMCp1BdFIqmlOaFKW5bQgxJxrx7%2Bne60z5jbbztZGOlkYALMczv0UwB5n6WfhCZ2KLx%2F4mLcAby1rR0zIQaBRKXD501hdtJHyA1y7UCypR2n8EqhxFkepCLkn%2FdghrLbSg6fA1VBdA38CuwKXTcMWzo1ZN0OaFynCAclEFOU8xG5NXd3vbCrkKNO%2FZf3BOMqiZRMSQeK9t4hcAUq5Ag7A2NIpNnPWfhpO4UD4OjVCrosGgQF%2FssLQYSEa1dnQzhqsWmMlmtGlGL1cKPVufqHa7GGKXyFi2ogW0Z9Td6K1xrnT4fMtSStkpZWxz1OlaBiPsUX0%2BK0MOlmaWp%2BKLzPuJTy8m4RHDRLq2db1aDB7bHs0FSnIfX9qngzKdsbY9HPtJ01wbkekbMMi648QGOqUB7lgWXELhxABDZoPR1U%2BRdjc4aoM9BF5qVe1bQ61PjvhF4y3wWKlTrVVKPXXbBOTqwdZKDGfIJ5njiG4k9Dk47W9RrWzJLnIoJLbaYGxkkDwBYoy7tMITBj3P4zu%2FZXJqasCIfomz0rzZYzQt9TvHeFGja69do4o%2FwGSuer%2FOth%2FeQ%2FKEhd6ZM7c20L8YyIjuD3MkUsCihQNHduouV5rS0keAP%2FUY&X-Amz-Signature=f1cf6a55a1d8d6bb7f2e5b387f03a899d704153a9624aa0587c3583c2555f017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRUD6KO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApIMC8T8jB%2BE5okGOZ6fz4bRJU%2BUVgsQdM9MKQT2vHaAiEAyyHWpTPmFwNIAwNnR5gwvlYakbzJ1tU1kSnTQNZBEugqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFOcYYZB07qyT%2B%2BvyrcA07ADQ1N%2B9dG762c5V7QxyQ1bJdvIMPBWoLVzafEPmKMjG4%2FvEf5kJYZ%2BS3QQgAl2Uho%2FJ6jAxBZ1647GdHYQ1Yfzd4jbbEk3qzDRD9lKwBhNz6hQtP%2FNaiS22zcbsdWhhqT0Lxn0Lv9FV9PpP98ZKLYQTGWZL%2Fxz0lGnSqG9GtYLvZaLmMel1Q4yGVs9ZIR8vX5N33%2BRe67ErnSInOw4UBoXFEJTW3E1tkmeHif7pP7ZO3pfNHMCp1BdFIqmlOaFKW5bQgxJxrx7%2Bne60z5jbbztZGOlkYALMczv0UwB5n6WfhCZ2KLx%2F4mLcAby1rR0zIQaBRKXD501hdtJHyA1y7UCypR2n8EqhxFkepCLkn%2FdghrLbSg6fA1VBdA38CuwKXTcMWzo1ZN0OaFynCAclEFOU8xG5NXd3vbCrkKNO%2FZf3BOMqiZRMSQeK9t4hcAUq5Ag7A2NIpNnPWfhpO4UD4OjVCrosGgQF%2FssLQYSEa1dnQzhqsWmMlmtGlGL1cKPVufqHa7GGKXyFi2ogW0Z9Td6K1xrnT4fMtSStkpZWxz1OlaBiPsUX0%2BK0MOlmaWp%2BKLzPuJTy8m4RHDRLq2db1aDB7bHs0FSnIfX9qngzKdsbY9HPtJ01wbkekbMMi648QGOqUB7lgWXELhxABDZoPR1U%2BRdjc4aoM9BF5qVe1bQ61PjvhF4y3wWKlTrVVKPXXbBOTqwdZKDGfIJ5njiG4k9Dk47W9RrWzJLnIoJLbaYGxkkDwBYoy7tMITBj3P4zu%2FZXJqasCIfomz0rzZYzQt9TvHeFGja69do4o%2FwGSuer%2FOth%2FeQ%2FKEhd6ZM7c20L8YyIjuD3MkUsCihQNHduouV5rS0keAP%2FUY&X-Amz-Signature=ceec81a20865523964fdbb2d6f292c9a0e52de1753f8a8af93187173606e69b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRUD6KO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApIMC8T8jB%2BE5okGOZ6fz4bRJU%2BUVgsQdM9MKQT2vHaAiEAyyHWpTPmFwNIAwNnR5gwvlYakbzJ1tU1kSnTQNZBEugqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFOcYYZB07qyT%2B%2BvyrcA07ADQ1N%2B9dG762c5V7QxyQ1bJdvIMPBWoLVzafEPmKMjG4%2FvEf5kJYZ%2BS3QQgAl2Uho%2FJ6jAxBZ1647GdHYQ1Yfzd4jbbEk3qzDRD9lKwBhNz6hQtP%2FNaiS22zcbsdWhhqT0Lxn0Lv9FV9PpP98ZKLYQTGWZL%2Fxz0lGnSqG9GtYLvZaLmMel1Q4yGVs9ZIR8vX5N33%2BRe67ErnSInOw4UBoXFEJTW3E1tkmeHif7pP7ZO3pfNHMCp1BdFIqmlOaFKW5bQgxJxrx7%2Bne60z5jbbztZGOlkYALMczv0UwB5n6WfhCZ2KLx%2F4mLcAby1rR0zIQaBRKXD501hdtJHyA1y7UCypR2n8EqhxFkepCLkn%2FdghrLbSg6fA1VBdA38CuwKXTcMWzo1ZN0OaFynCAclEFOU8xG5NXd3vbCrkKNO%2FZf3BOMqiZRMSQeK9t4hcAUq5Ag7A2NIpNnPWfhpO4UD4OjVCrosGgQF%2FssLQYSEa1dnQzhqsWmMlmtGlGL1cKPVufqHa7GGKXyFi2ogW0Z9Td6K1xrnT4fMtSStkpZWxz1OlaBiPsUX0%2BK0MOlmaWp%2BKLzPuJTy8m4RHDRLq2db1aDB7bHs0FSnIfX9qngzKdsbY9HPtJ01wbkekbMMi648QGOqUB7lgWXELhxABDZoPR1U%2BRdjc4aoM9BF5qVe1bQ61PjvhF4y3wWKlTrVVKPXXbBOTqwdZKDGfIJ5njiG4k9Dk47W9RrWzJLnIoJLbaYGxkkDwBYoy7tMITBj3P4zu%2FZXJqasCIfomz0rzZYzQt9TvHeFGja69do4o%2FwGSuer%2FOth%2FeQ%2FKEhd6ZM7c20L8YyIjuD3MkUsCihQNHduouV5rS0keAP%2FUY&X-Amz-Signature=093abd47e22583131ca2d2f17169c633e00638d4eabff34fef248b9da4e6a70e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRUD6KO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApIMC8T8jB%2BE5okGOZ6fz4bRJU%2BUVgsQdM9MKQT2vHaAiEAyyHWpTPmFwNIAwNnR5gwvlYakbzJ1tU1kSnTQNZBEugqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFOcYYZB07qyT%2B%2BvyrcA07ADQ1N%2B9dG762c5V7QxyQ1bJdvIMPBWoLVzafEPmKMjG4%2FvEf5kJYZ%2BS3QQgAl2Uho%2FJ6jAxBZ1647GdHYQ1Yfzd4jbbEk3qzDRD9lKwBhNz6hQtP%2FNaiS22zcbsdWhhqT0Lxn0Lv9FV9PpP98ZKLYQTGWZL%2Fxz0lGnSqG9GtYLvZaLmMel1Q4yGVs9ZIR8vX5N33%2BRe67ErnSInOw4UBoXFEJTW3E1tkmeHif7pP7ZO3pfNHMCp1BdFIqmlOaFKW5bQgxJxrx7%2Bne60z5jbbztZGOlkYALMczv0UwB5n6WfhCZ2KLx%2F4mLcAby1rR0zIQaBRKXD501hdtJHyA1y7UCypR2n8EqhxFkepCLkn%2FdghrLbSg6fA1VBdA38CuwKXTcMWzo1ZN0OaFynCAclEFOU8xG5NXd3vbCrkKNO%2FZf3BOMqiZRMSQeK9t4hcAUq5Ag7A2NIpNnPWfhpO4UD4OjVCrosGgQF%2FssLQYSEa1dnQzhqsWmMlmtGlGL1cKPVufqHa7GGKXyFi2ogW0Z9Td6K1xrnT4fMtSStkpZWxz1OlaBiPsUX0%2BK0MOlmaWp%2BKLzPuJTy8m4RHDRLq2db1aDB7bHs0FSnIfX9qngzKdsbY9HPtJ01wbkekbMMi648QGOqUB7lgWXELhxABDZoPR1U%2BRdjc4aoM9BF5qVe1bQ61PjvhF4y3wWKlTrVVKPXXbBOTqwdZKDGfIJ5njiG4k9Dk47W9RrWzJLnIoJLbaYGxkkDwBYoy7tMITBj3P4zu%2FZXJqasCIfomz0rzZYzQt9TvHeFGja69do4o%2FwGSuer%2FOth%2FeQ%2FKEhd6ZM7c20L8YyIjuD3MkUsCihQNHduouV5rS0keAP%2FUY&X-Amz-Signature=757ef0aeb80a6ea592a9d7c66817a58498dc756fe497765e7a88d2af337f8a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRUD6KO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApIMC8T8jB%2BE5okGOZ6fz4bRJU%2BUVgsQdM9MKQT2vHaAiEAyyHWpTPmFwNIAwNnR5gwvlYakbzJ1tU1kSnTQNZBEugqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFOcYYZB07qyT%2B%2BvyrcA07ADQ1N%2B9dG762c5V7QxyQ1bJdvIMPBWoLVzafEPmKMjG4%2FvEf5kJYZ%2BS3QQgAl2Uho%2FJ6jAxBZ1647GdHYQ1Yfzd4jbbEk3qzDRD9lKwBhNz6hQtP%2FNaiS22zcbsdWhhqT0Lxn0Lv9FV9PpP98ZKLYQTGWZL%2Fxz0lGnSqG9GtYLvZaLmMel1Q4yGVs9ZIR8vX5N33%2BRe67ErnSInOw4UBoXFEJTW3E1tkmeHif7pP7ZO3pfNHMCp1BdFIqmlOaFKW5bQgxJxrx7%2Bne60z5jbbztZGOlkYALMczv0UwB5n6WfhCZ2KLx%2F4mLcAby1rR0zIQaBRKXD501hdtJHyA1y7UCypR2n8EqhxFkepCLkn%2FdghrLbSg6fA1VBdA38CuwKXTcMWzo1ZN0OaFynCAclEFOU8xG5NXd3vbCrkKNO%2FZf3BOMqiZRMSQeK9t4hcAUq5Ag7A2NIpNnPWfhpO4UD4OjVCrosGgQF%2FssLQYSEa1dnQzhqsWmMlmtGlGL1cKPVufqHa7GGKXyFi2ogW0Z9Td6K1xrnT4fMtSStkpZWxz1OlaBiPsUX0%2BK0MOlmaWp%2BKLzPuJTy8m4RHDRLq2db1aDB7bHs0FSnIfX9qngzKdsbY9HPtJ01wbkekbMMi648QGOqUB7lgWXELhxABDZoPR1U%2BRdjc4aoM9BF5qVe1bQ61PjvhF4y3wWKlTrVVKPXXbBOTqwdZKDGfIJ5njiG4k9Dk47W9RrWzJLnIoJLbaYGxkkDwBYoy7tMITBj3P4zu%2FZXJqasCIfomz0rzZYzQt9TvHeFGja69do4o%2FwGSuer%2FOth%2FeQ%2FKEhd6ZM7c20L8YyIjuD3MkUsCihQNHduouV5rS0keAP%2FUY&X-Amz-Signature=bcae5205ea81822e72f70333a95a898cf4918fad8a3460a7ecb14acdba836fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRUD6KO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApIMC8T8jB%2BE5okGOZ6fz4bRJU%2BUVgsQdM9MKQT2vHaAiEAyyHWpTPmFwNIAwNnR5gwvlYakbzJ1tU1kSnTQNZBEugqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFOcYYZB07qyT%2B%2BvyrcA07ADQ1N%2B9dG762c5V7QxyQ1bJdvIMPBWoLVzafEPmKMjG4%2FvEf5kJYZ%2BS3QQgAl2Uho%2FJ6jAxBZ1647GdHYQ1Yfzd4jbbEk3qzDRD9lKwBhNz6hQtP%2FNaiS22zcbsdWhhqT0Lxn0Lv9FV9PpP98ZKLYQTGWZL%2Fxz0lGnSqG9GtYLvZaLmMel1Q4yGVs9ZIR8vX5N33%2BRe67ErnSInOw4UBoXFEJTW3E1tkmeHif7pP7ZO3pfNHMCp1BdFIqmlOaFKW5bQgxJxrx7%2Bne60z5jbbztZGOlkYALMczv0UwB5n6WfhCZ2KLx%2F4mLcAby1rR0zIQaBRKXD501hdtJHyA1y7UCypR2n8EqhxFkepCLkn%2FdghrLbSg6fA1VBdA38CuwKXTcMWzo1ZN0OaFynCAclEFOU8xG5NXd3vbCrkKNO%2FZf3BOMqiZRMSQeK9t4hcAUq5Ag7A2NIpNnPWfhpO4UD4OjVCrosGgQF%2FssLQYSEa1dnQzhqsWmMlmtGlGL1cKPVufqHa7GGKXyFi2ogW0Z9Td6K1xrnT4fMtSStkpZWxz1OlaBiPsUX0%2BK0MOlmaWp%2BKLzPuJTy8m4RHDRLq2db1aDB7bHs0FSnIfX9qngzKdsbY9HPtJ01wbkekbMMi648QGOqUB7lgWXELhxABDZoPR1U%2BRdjc4aoM9BF5qVe1bQ61PjvhF4y3wWKlTrVVKPXXbBOTqwdZKDGfIJ5njiG4k9Dk47W9RrWzJLnIoJLbaYGxkkDwBYoy7tMITBj3P4zu%2FZXJqasCIfomz0rzZYzQt9TvHeFGja69do4o%2FwGSuer%2FOth%2FeQ%2FKEhd6ZM7c20L8YyIjuD3MkUsCihQNHduouV5rS0keAP%2FUY&X-Amz-Signature=593f1aea43b03279408db09244aca0026356f2383ec64445070510607db2fb3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRUD6KO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApIMC8T8jB%2BE5okGOZ6fz4bRJU%2BUVgsQdM9MKQT2vHaAiEAyyHWpTPmFwNIAwNnR5gwvlYakbzJ1tU1kSnTQNZBEugqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFOcYYZB07qyT%2B%2BvyrcA07ADQ1N%2B9dG762c5V7QxyQ1bJdvIMPBWoLVzafEPmKMjG4%2FvEf5kJYZ%2BS3QQgAl2Uho%2FJ6jAxBZ1647GdHYQ1Yfzd4jbbEk3qzDRD9lKwBhNz6hQtP%2FNaiS22zcbsdWhhqT0Lxn0Lv9FV9PpP98ZKLYQTGWZL%2Fxz0lGnSqG9GtYLvZaLmMel1Q4yGVs9ZIR8vX5N33%2BRe67ErnSInOw4UBoXFEJTW3E1tkmeHif7pP7ZO3pfNHMCp1BdFIqmlOaFKW5bQgxJxrx7%2Bne60z5jbbztZGOlkYALMczv0UwB5n6WfhCZ2KLx%2F4mLcAby1rR0zIQaBRKXD501hdtJHyA1y7UCypR2n8EqhxFkepCLkn%2FdghrLbSg6fA1VBdA38CuwKXTcMWzo1ZN0OaFynCAclEFOU8xG5NXd3vbCrkKNO%2FZf3BOMqiZRMSQeK9t4hcAUq5Ag7A2NIpNnPWfhpO4UD4OjVCrosGgQF%2FssLQYSEa1dnQzhqsWmMlmtGlGL1cKPVufqHa7GGKXyFi2ogW0Z9Td6K1xrnT4fMtSStkpZWxz1OlaBiPsUX0%2BK0MOlmaWp%2BKLzPuJTy8m4RHDRLq2db1aDB7bHs0FSnIfX9qngzKdsbY9HPtJ01wbkekbMMi648QGOqUB7lgWXELhxABDZoPR1U%2BRdjc4aoM9BF5qVe1bQ61PjvhF4y3wWKlTrVVKPXXbBOTqwdZKDGfIJ5njiG4k9Dk47W9RrWzJLnIoJLbaYGxkkDwBYoy7tMITBj3P4zu%2FZXJqasCIfomz0rzZYzQt9TvHeFGja69do4o%2FwGSuer%2FOth%2FeQ%2FKEhd6ZM7c20L8YyIjuD3MkUsCihQNHduouV5rS0keAP%2FUY&X-Amz-Signature=2c21076c36324ff5afc47dddc058a422a2edbfe84cb604754e3f97331bac2910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
