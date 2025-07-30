---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-29T23:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-29T23:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KBOXWO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbV%2FoN2HF1v9dC3sqm3mKX9EfxJvTXBJHolSJdOtMjVAIgX3Q6wXEqTWopQPwCQ3uyv1BV%2Bf%2FXjA1nBoa9T9%2B5WbcqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZq%2FJc8udZvMGuhdCrcA04ikZBFGTiMvbscB7J7kgvkGknLhps7bolO%2BJ3PbHrNLYXkrUm9NH%2BgDlY1HUe79rQhWiehqLkiIlaSIbrOBi0nzM8bRBBsjTYFY2YsZbW6Hs3rnG3d4rKhRwvheVOmmhEBInrJe3prPByE6jyHEmtL6pT7e37DzWNXUBns4YncrPk62j533XMfClF28OpwJ%2FtyVE0Q2x7EXtMJs6YEk9FczJD0wQljcA5yIm%2BJAIiJCiP9HnFMJ1nhBLK1zC0qFIl1a0Ck4xVdzLv%2BT7DAJIPZBFqn0%2FhC%2FduGtu9AgHJAFpeUoeod7A7i%2Frmj4JDRfW5grxm24jXG%2F9ATDwSBll%2F%2FNst9q2vNCFjUtnxHAq6cfOUNaOIl1e8%2BJcqwrXPryTQUt6pjZDFWgPaurfFH9LHlv7tDQ2Ls62Ts7bsawyw2P8IdWgEY9SLpwR18HJra8PkOaB4f0%2FTMQaHatufg7hgnAZbFGsZwMllWUJEf%2Blk8XyqXMIvB9R7zlIe1QRUUE3glpPAH7Tdm%2B%2B%2Bnag%2BUqLPUYdgvOPGHguiIy4krzIcfA%2FJUrujfhUKibt7iIkqDRyg6kuR%2BRqH6G7d21B2d5mOr96EqpQ495SLSbe7UV1fkjwYD8FdDJATvLwSuMPWapsQGOqUBlfVDkvnl9mmgEmEDsmMdfxlz4on8n1G3%2Bz6%2FgnbYzwyF6TVj0AtcHrR1G2GjaUPbuGWJYKqh5ny0tu4izgV7RddFoK0gTRnaT5p1udz3fwZesIwyQ%2BodEjU6ddAFx2mU6dzoy%2FlTtMgscxXyNtCB1cM82pAtmzGLgnBnFI8fnB7Xr90Uo%2Fr4Ajc2pTqK1MNymt%2BKy4RgUGHF1UfDStjeoIsqD%2FBB&X-Amz-Signature=4ecc5e0a96dd4eae41d1492a469e0e5b91afc0f680dee474af6661187d9f5acd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KBOXWO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbV%2FoN2HF1v9dC3sqm3mKX9EfxJvTXBJHolSJdOtMjVAIgX3Q6wXEqTWopQPwCQ3uyv1BV%2Bf%2FXjA1nBoa9T9%2B5WbcqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZq%2FJc8udZvMGuhdCrcA04ikZBFGTiMvbscB7J7kgvkGknLhps7bolO%2BJ3PbHrNLYXkrUm9NH%2BgDlY1HUe79rQhWiehqLkiIlaSIbrOBi0nzM8bRBBsjTYFY2YsZbW6Hs3rnG3d4rKhRwvheVOmmhEBInrJe3prPByE6jyHEmtL6pT7e37DzWNXUBns4YncrPk62j533XMfClF28OpwJ%2FtyVE0Q2x7EXtMJs6YEk9FczJD0wQljcA5yIm%2BJAIiJCiP9HnFMJ1nhBLK1zC0qFIl1a0Ck4xVdzLv%2BT7DAJIPZBFqn0%2FhC%2FduGtu9AgHJAFpeUoeod7A7i%2Frmj4JDRfW5grxm24jXG%2F9ATDwSBll%2F%2FNst9q2vNCFjUtnxHAq6cfOUNaOIl1e8%2BJcqwrXPryTQUt6pjZDFWgPaurfFH9LHlv7tDQ2Ls62Ts7bsawyw2P8IdWgEY9SLpwR18HJra8PkOaB4f0%2FTMQaHatufg7hgnAZbFGsZwMllWUJEf%2Blk8XyqXMIvB9R7zlIe1QRUUE3glpPAH7Tdm%2B%2B%2Bnag%2BUqLPUYdgvOPGHguiIy4krzIcfA%2FJUrujfhUKibt7iIkqDRyg6kuR%2BRqH6G7d21B2d5mOr96EqpQ495SLSbe7UV1fkjwYD8FdDJATvLwSuMPWapsQGOqUBlfVDkvnl9mmgEmEDsmMdfxlz4on8n1G3%2Bz6%2FgnbYzwyF6TVj0AtcHrR1G2GjaUPbuGWJYKqh5ny0tu4izgV7RddFoK0gTRnaT5p1udz3fwZesIwyQ%2BodEjU6ddAFx2mU6dzoy%2FlTtMgscxXyNtCB1cM82pAtmzGLgnBnFI8fnB7Xr90Uo%2Fr4Ajc2pTqK1MNymt%2BKy4RgUGHF1UfDStjeoIsqD%2FBB&X-Amz-Signature=c8f717c3b76853b4b0c83e4e023f5c5dcfacc72cacc198213d7cd640ab4b1222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KBOXWO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbV%2FoN2HF1v9dC3sqm3mKX9EfxJvTXBJHolSJdOtMjVAIgX3Q6wXEqTWopQPwCQ3uyv1BV%2Bf%2FXjA1nBoa9T9%2B5WbcqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZq%2FJc8udZvMGuhdCrcA04ikZBFGTiMvbscB7J7kgvkGknLhps7bolO%2BJ3PbHrNLYXkrUm9NH%2BgDlY1HUe79rQhWiehqLkiIlaSIbrOBi0nzM8bRBBsjTYFY2YsZbW6Hs3rnG3d4rKhRwvheVOmmhEBInrJe3prPByE6jyHEmtL6pT7e37DzWNXUBns4YncrPk62j533XMfClF28OpwJ%2FtyVE0Q2x7EXtMJs6YEk9FczJD0wQljcA5yIm%2BJAIiJCiP9HnFMJ1nhBLK1zC0qFIl1a0Ck4xVdzLv%2BT7DAJIPZBFqn0%2FhC%2FduGtu9AgHJAFpeUoeod7A7i%2Frmj4JDRfW5grxm24jXG%2F9ATDwSBll%2F%2FNst9q2vNCFjUtnxHAq6cfOUNaOIl1e8%2BJcqwrXPryTQUt6pjZDFWgPaurfFH9LHlv7tDQ2Ls62Ts7bsawyw2P8IdWgEY9SLpwR18HJra8PkOaB4f0%2FTMQaHatufg7hgnAZbFGsZwMllWUJEf%2Blk8XyqXMIvB9R7zlIe1QRUUE3glpPAH7Tdm%2B%2B%2Bnag%2BUqLPUYdgvOPGHguiIy4krzIcfA%2FJUrujfhUKibt7iIkqDRyg6kuR%2BRqH6G7d21B2d5mOr96EqpQ495SLSbe7UV1fkjwYD8FdDJATvLwSuMPWapsQGOqUBlfVDkvnl9mmgEmEDsmMdfxlz4on8n1G3%2Bz6%2FgnbYzwyF6TVj0AtcHrR1G2GjaUPbuGWJYKqh5ny0tu4izgV7RddFoK0gTRnaT5p1udz3fwZesIwyQ%2BodEjU6ddAFx2mU6dzoy%2FlTtMgscxXyNtCB1cM82pAtmzGLgnBnFI8fnB7Xr90Uo%2Fr4Ajc2pTqK1MNymt%2BKy4RgUGHF1UfDStjeoIsqD%2FBB&X-Amz-Signature=53f1e3fb0287e741333dd56aa2bf766d14422778ff3df907dbd278ea77695e5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KBOXWO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbV%2FoN2HF1v9dC3sqm3mKX9EfxJvTXBJHolSJdOtMjVAIgX3Q6wXEqTWopQPwCQ3uyv1BV%2Bf%2FXjA1nBoa9T9%2B5WbcqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZq%2FJc8udZvMGuhdCrcA04ikZBFGTiMvbscB7J7kgvkGknLhps7bolO%2BJ3PbHrNLYXkrUm9NH%2BgDlY1HUe79rQhWiehqLkiIlaSIbrOBi0nzM8bRBBsjTYFY2YsZbW6Hs3rnG3d4rKhRwvheVOmmhEBInrJe3prPByE6jyHEmtL6pT7e37DzWNXUBns4YncrPk62j533XMfClF28OpwJ%2FtyVE0Q2x7EXtMJs6YEk9FczJD0wQljcA5yIm%2BJAIiJCiP9HnFMJ1nhBLK1zC0qFIl1a0Ck4xVdzLv%2BT7DAJIPZBFqn0%2FhC%2FduGtu9AgHJAFpeUoeod7A7i%2Frmj4JDRfW5grxm24jXG%2F9ATDwSBll%2F%2FNst9q2vNCFjUtnxHAq6cfOUNaOIl1e8%2BJcqwrXPryTQUt6pjZDFWgPaurfFH9LHlv7tDQ2Ls62Ts7bsawyw2P8IdWgEY9SLpwR18HJra8PkOaB4f0%2FTMQaHatufg7hgnAZbFGsZwMllWUJEf%2Blk8XyqXMIvB9R7zlIe1QRUUE3glpPAH7Tdm%2B%2B%2Bnag%2BUqLPUYdgvOPGHguiIy4krzIcfA%2FJUrujfhUKibt7iIkqDRyg6kuR%2BRqH6G7d21B2d5mOr96EqpQ495SLSbe7UV1fkjwYD8FdDJATvLwSuMPWapsQGOqUBlfVDkvnl9mmgEmEDsmMdfxlz4on8n1G3%2Bz6%2FgnbYzwyF6TVj0AtcHrR1G2GjaUPbuGWJYKqh5ny0tu4izgV7RddFoK0gTRnaT5p1udz3fwZesIwyQ%2BodEjU6ddAFx2mU6dzoy%2FlTtMgscxXyNtCB1cM82pAtmzGLgnBnFI8fnB7Xr90Uo%2Fr4Ajc2pTqK1MNymt%2BKy4RgUGHF1UfDStjeoIsqD%2FBB&X-Amz-Signature=8d5439a576a525eefde7d09eb58cc0a59a1c4bd9812dfd0ffc0008aaf63d12b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KBOXWO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbV%2FoN2HF1v9dC3sqm3mKX9EfxJvTXBJHolSJdOtMjVAIgX3Q6wXEqTWopQPwCQ3uyv1BV%2Bf%2FXjA1nBoa9T9%2B5WbcqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZq%2FJc8udZvMGuhdCrcA04ikZBFGTiMvbscB7J7kgvkGknLhps7bolO%2BJ3PbHrNLYXkrUm9NH%2BgDlY1HUe79rQhWiehqLkiIlaSIbrOBi0nzM8bRBBsjTYFY2YsZbW6Hs3rnG3d4rKhRwvheVOmmhEBInrJe3prPByE6jyHEmtL6pT7e37DzWNXUBns4YncrPk62j533XMfClF28OpwJ%2FtyVE0Q2x7EXtMJs6YEk9FczJD0wQljcA5yIm%2BJAIiJCiP9HnFMJ1nhBLK1zC0qFIl1a0Ck4xVdzLv%2BT7DAJIPZBFqn0%2FhC%2FduGtu9AgHJAFpeUoeod7A7i%2Frmj4JDRfW5grxm24jXG%2F9ATDwSBll%2F%2FNst9q2vNCFjUtnxHAq6cfOUNaOIl1e8%2BJcqwrXPryTQUt6pjZDFWgPaurfFH9LHlv7tDQ2Ls62Ts7bsawyw2P8IdWgEY9SLpwR18HJra8PkOaB4f0%2FTMQaHatufg7hgnAZbFGsZwMllWUJEf%2Blk8XyqXMIvB9R7zlIe1QRUUE3glpPAH7Tdm%2B%2B%2Bnag%2BUqLPUYdgvOPGHguiIy4krzIcfA%2FJUrujfhUKibt7iIkqDRyg6kuR%2BRqH6G7d21B2d5mOr96EqpQ495SLSbe7UV1fkjwYD8FdDJATvLwSuMPWapsQGOqUBlfVDkvnl9mmgEmEDsmMdfxlz4on8n1G3%2Bz6%2FgnbYzwyF6TVj0AtcHrR1G2GjaUPbuGWJYKqh5ny0tu4izgV7RddFoK0gTRnaT5p1udz3fwZesIwyQ%2BodEjU6ddAFx2mU6dzoy%2FlTtMgscxXyNtCB1cM82pAtmzGLgnBnFI8fnB7Xr90Uo%2Fr4Ajc2pTqK1MNymt%2BKy4RgUGHF1UfDStjeoIsqD%2FBB&X-Amz-Signature=4acec6654720ebdc76b47e02025ea3313614832705f216e24eb9594dbe811711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KBOXWO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbV%2FoN2HF1v9dC3sqm3mKX9EfxJvTXBJHolSJdOtMjVAIgX3Q6wXEqTWopQPwCQ3uyv1BV%2Bf%2FXjA1nBoa9T9%2B5WbcqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZq%2FJc8udZvMGuhdCrcA04ikZBFGTiMvbscB7J7kgvkGknLhps7bolO%2BJ3PbHrNLYXkrUm9NH%2BgDlY1HUe79rQhWiehqLkiIlaSIbrOBi0nzM8bRBBsjTYFY2YsZbW6Hs3rnG3d4rKhRwvheVOmmhEBInrJe3prPByE6jyHEmtL6pT7e37DzWNXUBns4YncrPk62j533XMfClF28OpwJ%2FtyVE0Q2x7EXtMJs6YEk9FczJD0wQljcA5yIm%2BJAIiJCiP9HnFMJ1nhBLK1zC0qFIl1a0Ck4xVdzLv%2BT7DAJIPZBFqn0%2FhC%2FduGtu9AgHJAFpeUoeod7A7i%2Frmj4JDRfW5grxm24jXG%2F9ATDwSBll%2F%2FNst9q2vNCFjUtnxHAq6cfOUNaOIl1e8%2BJcqwrXPryTQUt6pjZDFWgPaurfFH9LHlv7tDQ2Ls62Ts7bsawyw2P8IdWgEY9SLpwR18HJra8PkOaB4f0%2FTMQaHatufg7hgnAZbFGsZwMllWUJEf%2Blk8XyqXMIvB9R7zlIe1QRUUE3glpPAH7Tdm%2B%2B%2Bnag%2BUqLPUYdgvOPGHguiIy4krzIcfA%2FJUrujfhUKibt7iIkqDRyg6kuR%2BRqH6G7d21B2d5mOr96EqpQ495SLSbe7UV1fkjwYD8FdDJATvLwSuMPWapsQGOqUBlfVDkvnl9mmgEmEDsmMdfxlz4on8n1G3%2Bz6%2FgnbYzwyF6TVj0AtcHrR1G2GjaUPbuGWJYKqh5ny0tu4izgV7RddFoK0gTRnaT5p1udz3fwZesIwyQ%2BodEjU6ddAFx2mU6dzoy%2FlTtMgscxXyNtCB1cM82pAtmzGLgnBnFI8fnB7Xr90Uo%2Fr4Ajc2pTqK1MNymt%2BKy4RgUGHF1UfDStjeoIsqD%2FBB&X-Amz-Signature=de5e6372cf55398edb7c00d3522d56f715cb264d384e90f885e618e874738a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KBOXWO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbV%2FoN2HF1v9dC3sqm3mKX9EfxJvTXBJHolSJdOtMjVAIgX3Q6wXEqTWopQPwCQ3uyv1BV%2Bf%2FXjA1nBoa9T9%2B5WbcqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZq%2FJc8udZvMGuhdCrcA04ikZBFGTiMvbscB7J7kgvkGknLhps7bolO%2BJ3PbHrNLYXkrUm9NH%2BgDlY1HUe79rQhWiehqLkiIlaSIbrOBi0nzM8bRBBsjTYFY2YsZbW6Hs3rnG3d4rKhRwvheVOmmhEBInrJe3prPByE6jyHEmtL6pT7e37DzWNXUBns4YncrPk62j533XMfClF28OpwJ%2FtyVE0Q2x7EXtMJs6YEk9FczJD0wQljcA5yIm%2BJAIiJCiP9HnFMJ1nhBLK1zC0qFIl1a0Ck4xVdzLv%2BT7DAJIPZBFqn0%2FhC%2FduGtu9AgHJAFpeUoeod7A7i%2Frmj4JDRfW5grxm24jXG%2F9ATDwSBll%2F%2FNst9q2vNCFjUtnxHAq6cfOUNaOIl1e8%2BJcqwrXPryTQUt6pjZDFWgPaurfFH9LHlv7tDQ2Ls62Ts7bsawyw2P8IdWgEY9SLpwR18HJra8PkOaB4f0%2FTMQaHatufg7hgnAZbFGsZwMllWUJEf%2Blk8XyqXMIvB9R7zlIe1QRUUE3glpPAH7Tdm%2B%2B%2Bnag%2BUqLPUYdgvOPGHguiIy4krzIcfA%2FJUrujfhUKibt7iIkqDRyg6kuR%2BRqH6G7d21B2d5mOr96EqpQ495SLSbe7UV1fkjwYD8FdDJATvLwSuMPWapsQGOqUBlfVDkvnl9mmgEmEDsmMdfxlz4on8n1G3%2Bz6%2FgnbYzwyF6TVj0AtcHrR1G2GjaUPbuGWJYKqh5ny0tu4izgV7RddFoK0gTRnaT5p1udz3fwZesIwyQ%2BodEjU6ddAFx2mU6dzoy%2FlTtMgscxXyNtCB1cM82pAtmzGLgnBnFI8fnB7Xr90Uo%2Fr4Ajc2pTqK1MNymt%2BKy4RgUGHF1UfDStjeoIsqD%2FBB&X-Amz-Signature=2174dcbce3206f45b5cb6719e058b8a7ee440b7eb89d6811c6ac0b30b3c0aa1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KBOXWO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbV%2FoN2HF1v9dC3sqm3mKX9EfxJvTXBJHolSJdOtMjVAIgX3Q6wXEqTWopQPwCQ3uyv1BV%2Bf%2FXjA1nBoa9T9%2B5WbcqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZq%2FJc8udZvMGuhdCrcA04ikZBFGTiMvbscB7J7kgvkGknLhps7bolO%2BJ3PbHrNLYXkrUm9NH%2BgDlY1HUe79rQhWiehqLkiIlaSIbrOBi0nzM8bRBBsjTYFY2YsZbW6Hs3rnG3d4rKhRwvheVOmmhEBInrJe3prPByE6jyHEmtL6pT7e37DzWNXUBns4YncrPk62j533XMfClF28OpwJ%2FtyVE0Q2x7EXtMJs6YEk9FczJD0wQljcA5yIm%2BJAIiJCiP9HnFMJ1nhBLK1zC0qFIl1a0Ck4xVdzLv%2BT7DAJIPZBFqn0%2FhC%2FduGtu9AgHJAFpeUoeod7A7i%2Frmj4JDRfW5grxm24jXG%2F9ATDwSBll%2F%2FNst9q2vNCFjUtnxHAq6cfOUNaOIl1e8%2BJcqwrXPryTQUt6pjZDFWgPaurfFH9LHlv7tDQ2Ls62Ts7bsawyw2P8IdWgEY9SLpwR18HJra8PkOaB4f0%2FTMQaHatufg7hgnAZbFGsZwMllWUJEf%2Blk8XyqXMIvB9R7zlIe1QRUUE3glpPAH7Tdm%2B%2B%2Bnag%2BUqLPUYdgvOPGHguiIy4krzIcfA%2FJUrujfhUKibt7iIkqDRyg6kuR%2BRqH6G7d21B2d5mOr96EqpQ495SLSbe7UV1fkjwYD8FdDJATvLwSuMPWapsQGOqUBlfVDkvnl9mmgEmEDsmMdfxlz4on8n1G3%2Bz6%2FgnbYzwyF6TVj0AtcHrR1G2GjaUPbuGWJYKqh5ny0tu4izgV7RddFoK0gTRnaT5p1udz3fwZesIwyQ%2BodEjU6ddAFx2mU6dzoy%2FlTtMgscxXyNtCB1cM82pAtmzGLgnBnFI8fnB7Xr90Uo%2Fr4Ajc2pTqK1MNymt%2BKy4RgUGHF1UfDStjeoIsqD%2FBB&X-Amz-Signature=2e77be804a45d0cc79eec7422d07c1223cbb2d43d48c3cebae96bcd27e5a0a9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KBOXWO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbV%2FoN2HF1v9dC3sqm3mKX9EfxJvTXBJHolSJdOtMjVAIgX3Q6wXEqTWopQPwCQ3uyv1BV%2Bf%2FXjA1nBoa9T9%2B5WbcqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZq%2FJc8udZvMGuhdCrcA04ikZBFGTiMvbscB7J7kgvkGknLhps7bolO%2BJ3PbHrNLYXkrUm9NH%2BgDlY1HUe79rQhWiehqLkiIlaSIbrOBi0nzM8bRBBsjTYFY2YsZbW6Hs3rnG3d4rKhRwvheVOmmhEBInrJe3prPByE6jyHEmtL6pT7e37DzWNXUBns4YncrPk62j533XMfClF28OpwJ%2FtyVE0Q2x7EXtMJs6YEk9FczJD0wQljcA5yIm%2BJAIiJCiP9HnFMJ1nhBLK1zC0qFIl1a0Ck4xVdzLv%2BT7DAJIPZBFqn0%2FhC%2FduGtu9AgHJAFpeUoeod7A7i%2Frmj4JDRfW5grxm24jXG%2F9ATDwSBll%2F%2FNst9q2vNCFjUtnxHAq6cfOUNaOIl1e8%2BJcqwrXPryTQUt6pjZDFWgPaurfFH9LHlv7tDQ2Ls62Ts7bsawyw2P8IdWgEY9SLpwR18HJra8PkOaB4f0%2FTMQaHatufg7hgnAZbFGsZwMllWUJEf%2Blk8XyqXMIvB9R7zlIe1QRUUE3glpPAH7Tdm%2B%2B%2Bnag%2BUqLPUYdgvOPGHguiIy4krzIcfA%2FJUrujfhUKibt7iIkqDRyg6kuR%2BRqH6G7d21B2d5mOr96EqpQ495SLSbe7UV1fkjwYD8FdDJATvLwSuMPWapsQGOqUBlfVDkvnl9mmgEmEDsmMdfxlz4on8n1G3%2Bz6%2FgnbYzwyF6TVj0AtcHrR1G2GjaUPbuGWJYKqh5ny0tu4izgV7RddFoK0gTRnaT5p1udz3fwZesIwyQ%2BodEjU6ddAFx2mU6dzoy%2FlTtMgscxXyNtCB1cM82pAtmzGLgnBnFI8fnB7Xr90Uo%2Fr4Ajc2pTqK1MNymt%2BKy4RgUGHF1UfDStjeoIsqD%2FBB&X-Amz-Signature=daa9bd449720d005fb2a39229168a6eddbbe36c0dba485782c069ef3196c5f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KBOXWO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbV%2FoN2HF1v9dC3sqm3mKX9EfxJvTXBJHolSJdOtMjVAIgX3Q6wXEqTWopQPwCQ3uyv1BV%2Bf%2FXjA1nBoa9T9%2B5WbcqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZq%2FJc8udZvMGuhdCrcA04ikZBFGTiMvbscB7J7kgvkGknLhps7bolO%2BJ3PbHrNLYXkrUm9NH%2BgDlY1HUe79rQhWiehqLkiIlaSIbrOBi0nzM8bRBBsjTYFY2YsZbW6Hs3rnG3d4rKhRwvheVOmmhEBInrJe3prPByE6jyHEmtL6pT7e37DzWNXUBns4YncrPk62j533XMfClF28OpwJ%2FtyVE0Q2x7EXtMJs6YEk9FczJD0wQljcA5yIm%2BJAIiJCiP9HnFMJ1nhBLK1zC0qFIl1a0Ck4xVdzLv%2BT7DAJIPZBFqn0%2FhC%2FduGtu9AgHJAFpeUoeod7A7i%2Frmj4JDRfW5grxm24jXG%2F9ATDwSBll%2F%2FNst9q2vNCFjUtnxHAq6cfOUNaOIl1e8%2BJcqwrXPryTQUt6pjZDFWgPaurfFH9LHlv7tDQ2Ls62Ts7bsawyw2P8IdWgEY9SLpwR18HJra8PkOaB4f0%2FTMQaHatufg7hgnAZbFGsZwMllWUJEf%2Blk8XyqXMIvB9R7zlIe1QRUUE3glpPAH7Tdm%2B%2B%2Bnag%2BUqLPUYdgvOPGHguiIy4krzIcfA%2FJUrujfhUKibt7iIkqDRyg6kuR%2BRqH6G7d21B2d5mOr96EqpQ495SLSbe7UV1fkjwYD8FdDJATvLwSuMPWapsQGOqUBlfVDkvnl9mmgEmEDsmMdfxlz4on8n1G3%2Bz6%2FgnbYzwyF6TVj0AtcHrR1G2GjaUPbuGWJYKqh5ny0tu4izgV7RddFoK0gTRnaT5p1udz3fwZesIwyQ%2BodEjU6ddAFx2mU6dzoy%2FlTtMgscxXyNtCB1cM82pAtmzGLgnBnFI8fnB7Xr90Uo%2Fr4Ajc2pTqK1MNymt%2BKy4RgUGHF1UfDStjeoIsqD%2FBB&X-Amz-Signature=252db6b5241d7a9716ce52c778bb62f9a56433b7951b218f4aff7c47e9e2bdd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KBOXWO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbV%2FoN2HF1v9dC3sqm3mKX9EfxJvTXBJHolSJdOtMjVAIgX3Q6wXEqTWopQPwCQ3uyv1BV%2Bf%2FXjA1nBoa9T9%2B5WbcqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZq%2FJc8udZvMGuhdCrcA04ikZBFGTiMvbscB7J7kgvkGknLhps7bolO%2BJ3PbHrNLYXkrUm9NH%2BgDlY1HUe79rQhWiehqLkiIlaSIbrOBi0nzM8bRBBsjTYFY2YsZbW6Hs3rnG3d4rKhRwvheVOmmhEBInrJe3prPByE6jyHEmtL6pT7e37DzWNXUBns4YncrPk62j533XMfClF28OpwJ%2FtyVE0Q2x7EXtMJs6YEk9FczJD0wQljcA5yIm%2BJAIiJCiP9HnFMJ1nhBLK1zC0qFIl1a0Ck4xVdzLv%2BT7DAJIPZBFqn0%2FhC%2FduGtu9AgHJAFpeUoeod7A7i%2Frmj4JDRfW5grxm24jXG%2F9ATDwSBll%2F%2FNst9q2vNCFjUtnxHAq6cfOUNaOIl1e8%2BJcqwrXPryTQUt6pjZDFWgPaurfFH9LHlv7tDQ2Ls62Ts7bsawyw2P8IdWgEY9SLpwR18HJra8PkOaB4f0%2FTMQaHatufg7hgnAZbFGsZwMllWUJEf%2Blk8XyqXMIvB9R7zlIe1QRUUE3glpPAH7Tdm%2B%2B%2Bnag%2BUqLPUYdgvOPGHguiIy4krzIcfA%2FJUrujfhUKibt7iIkqDRyg6kuR%2BRqH6G7d21B2d5mOr96EqpQ495SLSbe7UV1fkjwYD8FdDJATvLwSuMPWapsQGOqUBlfVDkvnl9mmgEmEDsmMdfxlz4on8n1G3%2Bz6%2FgnbYzwyF6TVj0AtcHrR1G2GjaUPbuGWJYKqh5ny0tu4izgV7RddFoK0gTRnaT5p1udz3fwZesIwyQ%2BodEjU6ddAFx2mU6dzoy%2FlTtMgscxXyNtCB1cM82pAtmzGLgnBnFI8fnB7Xr90Uo%2Fr4Ajc2pTqK1MNymt%2BKy4RgUGHF1UfDStjeoIsqD%2FBB&X-Amz-Signature=f8b7d4969c06c1484cf576f831f71323e8670871d928811afe63e42da2985133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KBOXWO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbV%2FoN2HF1v9dC3sqm3mKX9EfxJvTXBJHolSJdOtMjVAIgX3Q6wXEqTWopQPwCQ3uyv1BV%2Bf%2FXjA1nBoa9T9%2B5WbcqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZq%2FJc8udZvMGuhdCrcA04ikZBFGTiMvbscB7J7kgvkGknLhps7bolO%2BJ3PbHrNLYXkrUm9NH%2BgDlY1HUe79rQhWiehqLkiIlaSIbrOBi0nzM8bRBBsjTYFY2YsZbW6Hs3rnG3d4rKhRwvheVOmmhEBInrJe3prPByE6jyHEmtL6pT7e37DzWNXUBns4YncrPk62j533XMfClF28OpwJ%2FtyVE0Q2x7EXtMJs6YEk9FczJD0wQljcA5yIm%2BJAIiJCiP9HnFMJ1nhBLK1zC0qFIl1a0Ck4xVdzLv%2BT7DAJIPZBFqn0%2FhC%2FduGtu9AgHJAFpeUoeod7A7i%2Frmj4JDRfW5grxm24jXG%2F9ATDwSBll%2F%2FNst9q2vNCFjUtnxHAq6cfOUNaOIl1e8%2BJcqwrXPryTQUt6pjZDFWgPaurfFH9LHlv7tDQ2Ls62Ts7bsawyw2P8IdWgEY9SLpwR18HJra8PkOaB4f0%2FTMQaHatufg7hgnAZbFGsZwMllWUJEf%2Blk8XyqXMIvB9R7zlIe1QRUUE3glpPAH7Tdm%2B%2B%2Bnag%2BUqLPUYdgvOPGHguiIy4krzIcfA%2FJUrujfhUKibt7iIkqDRyg6kuR%2BRqH6G7d21B2d5mOr96EqpQ495SLSbe7UV1fkjwYD8FdDJATvLwSuMPWapsQGOqUBlfVDkvnl9mmgEmEDsmMdfxlz4on8n1G3%2Bz6%2FgnbYzwyF6TVj0AtcHrR1G2GjaUPbuGWJYKqh5ny0tu4izgV7RddFoK0gTRnaT5p1udz3fwZesIwyQ%2BodEjU6ddAFx2mU6dzoy%2FlTtMgscxXyNtCB1cM82pAtmzGLgnBnFI8fnB7Xr90Uo%2Fr4Ajc2pTqK1MNymt%2BKy4RgUGHF1UfDStjeoIsqD%2FBB&X-Amz-Signature=bc0b8da5c17f0173284b482d5c209990a438b331b9cbf5843dd2284e364adbe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KBOXWO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbV%2FoN2HF1v9dC3sqm3mKX9EfxJvTXBJHolSJdOtMjVAIgX3Q6wXEqTWopQPwCQ3uyv1BV%2Bf%2FXjA1nBoa9T9%2B5WbcqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZq%2FJc8udZvMGuhdCrcA04ikZBFGTiMvbscB7J7kgvkGknLhps7bolO%2BJ3PbHrNLYXkrUm9NH%2BgDlY1HUe79rQhWiehqLkiIlaSIbrOBi0nzM8bRBBsjTYFY2YsZbW6Hs3rnG3d4rKhRwvheVOmmhEBInrJe3prPByE6jyHEmtL6pT7e37DzWNXUBns4YncrPk62j533XMfClF28OpwJ%2FtyVE0Q2x7EXtMJs6YEk9FczJD0wQljcA5yIm%2BJAIiJCiP9HnFMJ1nhBLK1zC0qFIl1a0Ck4xVdzLv%2BT7DAJIPZBFqn0%2FhC%2FduGtu9AgHJAFpeUoeod7A7i%2Frmj4JDRfW5grxm24jXG%2F9ATDwSBll%2F%2FNst9q2vNCFjUtnxHAq6cfOUNaOIl1e8%2BJcqwrXPryTQUt6pjZDFWgPaurfFH9LHlv7tDQ2Ls62Ts7bsawyw2P8IdWgEY9SLpwR18HJra8PkOaB4f0%2FTMQaHatufg7hgnAZbFGsZwMllWUJEf%2Blk8XyqXMIvB9R7zlIe1QRUUE3glpPAH7Tdm%2B%2B%2Bnag%2BUqLPUYdgvOPGHguiIy4krzIcfA%2FJUrujfhUKibt7iIkqDRyg6kuR%2BRqH6G7d21B2d5mOr96EqpQ495SLSbe7UV1fkjwYD8FdDJATvLwSuMPWapsQGOqUBlfVDkvnl9mmgEmEDsmMdfxlz4on8n1G3%2Bz6%2FgnbYzwyF6TVj0AtcHrR1G2GjaUPbuGWJYKqh5ny0tu4izgV7RddFoK0gTRnaT5p1udz3fwZesIwyQ%2BodEjU6ddAFx2mU6dzoy%2FlTtMgscxXyNtCB1cM82pAtmzGLgnBnFI8fnB7Xr90Uo%2Fr4Ajc2pTqK1MNymt%2BKy4RgUGHF1UfDStjeoIsqD%2FBB&X-Amz-Signature=43fb6ffcec834290c2c61692f81e476ec21f46c133cf67e7798feafdb2390e0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3KBOXWO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbV%2FoN2HF1v9dC3sqm3mKX9EfxJvTXBJHolSJdOtMjVAIgX3Q6wXEqTWopQPwCQ3uyv1BV%2Bf%2FXjA1nBoa9T9%2B5WbcqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZq%2FJc8udZvMGuhdCrcA04ikZBFGTiMvbscB7J7kgvkGknLhps7bolO%2BJ3PbHrNLYXkrUm9NH%2BgDlY1HUe79rQhWiehqLkiIlaSIbrOBi0nzM8bRBBsjTYFY2YsZbW6Hs3rnG3d4rKhRwvheVOmmhEBInrJe3prPByE6jyHEmtL6pT7e37DzWNXUBns4YncrPk62j533XMfClF28OpwJ%2FtyVE0Q2x7EXtMJs6YEk9FczJD0wQljcA5yIm%2BJAIiJCiP9HnFMJ1nhBLK1zC0qFIl1a0Ck4xVdzLv%2BT7DAJIPZBFqn0%2FhC%2FduGtu9AgHJAFpeUoeod7A7i%2Frmj4JDRfW5grxm24jXG%2F9ATDwSBll%2F%2FNst9q2vNCFjUtnxHAq6cfOUNaOIl1e8%2BJcqwrXPryTQUt6pjZDFWgPaurfFH9LHlv7tDQ2Ls62Ts7bsawyw2P8IdWgEY9SLpwR18HJra8PkOaB4f0%2FTMQaHatufg7hgnAZbFGsZwMllWUJEf%2Blk8XyqXMIvB9R7zlIe1QRUUE3glpPAH7Tdm%2B%2B%2Bnag%2BUqLPUYdgvOPGHguiIy4krzIcfA%2FJUrujfhUKibt7iIkqDRyg6kuR%2BRqH6G7d21B2d5mOr96EqpQ495SLSbe7UV1fkjwYD8FdDJATvLwSuMPWapsQGOqUBlfVDkvnl9mmgEmEDsmMdfxlz4on8n1G3%2Bz6%2FgnbYzwyF6TVj0AtcHrR1G2GjaUPbuGWJYKqh5ny0tu4izgV7RddFoK0gTRnaT5p1udz3fwZesIwyQ%2BodEjU6ddAFx2mU6dzoy%2FlTtMgscxXyNtCB1cM82pAtmzGLgnBnFI8fnB7Xr90Uo%2Fr4Ajc2pTqK1MNymt%2BKy4RgUGHF1UfDStjeoIsqD%2FBB&X-Amz-Signature=60564242d988145c5d361568e4d26ce41a424f34419fe25aec67d81da303f4b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
