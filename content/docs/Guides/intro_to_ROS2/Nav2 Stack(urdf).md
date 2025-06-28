---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-02-07T18:41:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-02-07T18:41:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

TODO: add rqt graphs for each time we add a node for the Nav2 Stack series

# install pkg

# creating workspace + package

```bash
mkdir -p mbot_ws/src
cd mbot_ws/src
ros2 pkg create --build-type ament_python --license Apache-2.0 mbot_pkg 
```

### building 

```bash
cd ../../ # you should be in the mbot_ws folder after running this
colcon build --symlink-install  
source install/setup.bash
```

## Download

create rviz and urdf folder in `mbot_pkg` and download the rviz and urdf file:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLUHIHM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0tBnHOuX9FtlcppR%2FgpYWynvZ7Tep2v%2FTKHCywnR33AiAgK1RR4R51ooL88e2VIGpG4PJrHefKI9Ildn57W6cI2yqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZpI0w4akCSfueSS6KtwDI8XgPER8evWcl6hL2xf%2FWASqhDCSGsuauu4uUlWoPsbgTpB2GyDm0sSOeWi6Xi1bU%2BAkD04tdvJHwq48NAXx3iseazB7TOl%2FnPyLYipr0lcSAef9%2BzhibmR%2FkIeD4QmQ0404pjgfJqdBtDzR9Toqs6dvK9SGoa1S%2FLxdY7e%2BPyli4A5%2B7I1AwE5NSQ1OnluWWoLPgH3tT37t%2F0aAdHU0LchKnOEbd7fums5KI4Rvl0QsvCsHm7ZAALKdoY7wlGmeaJ3T3N139DmHl7zahdTY9CtytucTwOZ5RCdvs0V6rewIgkSkJGgEhddjpsNOsA5Yo%2B8kd%2Bpnq5ntMzYDF4onX3%2B7EJXQa%2FPCzXDB%2FfVt1z4duqzaCc7F9LnZ1yaJaaq8nDW4QDg%2FYakAfKVPKdrSZIGEBcQSDhWUGn5%2FuXf5iah2YWPvBEarStcMmREGfyLgkXKT9f6Pk2mt7HhsyYNZ%2BSqNFnimVExYtHh3WQWDjZ41s0wKsR1pjqetRUK3L5nx35nNU%2B7votQkvif%2FNcQM3gG2%2FH1gbiKRoE%2FG2xsmGcZ16aa488p6EegPm8xHJlwVUFrvtQawS4IzvYCRHQq8GlJm1EYMPzUcWyjxTusxeWjd60Qzd5lk75nbS3kw0%2FSAwwY6pgEnqjZaL%2FIA2Iz3X5sc6XnSgn%2Fx9aL86En0fDzftjMJMcg9mB3lnRAmKfHqD4YHuB%2Ba8JvFsCCgxyR2cGFQdlfvU1%2BCGatYUwzXlF2iz5v25aT1smy%2B0foMyK9ViTPkoJPWS3NgGpwSlSX2vUXkB9bxN22jv3hc88cWQzlEeWt000uMUMaroEXcW1N1ioLYeh%2BSvwbvP0wY3FameVCjJQ4VwzAhc3CS&X-Amz-Signature=ee968701572a4ebb7e4cea4def5ab6b55ef941edb0932d1dc3c35b3d4bcd3a92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLUHIHM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0tBnHOuX9FtlcppR%2FgpYWynvZ7Tep2v%2FTKHCywnR33AiAgK1RR4R51ooL88e2VIGpG4PJrHefKI9Ildn57W6cI2yqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZpI0w4akCSfueSS6KtwDI8XgPER8evWcl6hL2xf%2FWASqhDCSGsuauu4uUlWoPsbgTpB2GyDm0sSOeWi6Xi1bU%2BAkD04tdvJHwq48NAXx3iseazB7TOl%2FnPyLYipr0lcSAef9%2BzhibmR%2FkIeD4QmQ0404pjgfJqdBtDzR9Toqs6dvK9SGoa1S%2FLxdY7e%2BPyli4A5%2B7I1AwE5NSQ1OnluWWoLPgH3tT37t%2F0aAdHU0LchKnOEbd7fums5KI4Rvl0QsvCsHm7ZAALKdoY7wlGmeaJ3T3N139DmHl7zahdTY9CtytucTwOZ5RCdvs0V6rewIgkSkJGgEhddjpsNOsA5Yo%2B8kd%2Bpnq5ntMzYDF4onX3%2B7EJXQa%2FPCzXDB%2FfVt1z4duqzaCc7F9LnZ1yaJaaq8nDW4QDg%2FYakAfKVPKdrSZIGEBcQSDhWUGn5%2FuXf5iah2YWPvBEarStcMmREGfyLgkXKT9f6Pk2mt7HhsyYNZ%2BSqNFnimVExYtHh3WQWDjZ41s0wKsR1pjqetRUK3L5nx35nNU%2B7votQkvif%2FNcQM3gG2%2FH1gbiKRoE%2FG2xsmGcZ16aa488p6EegPm8xHJlwVUFrvtQawS4IzvYCRHQq8GlJm1EYMPzUcWyjxTusxeWjd60Qzd5lk75nbS3kw0%2FSAwwY6pgEnqjZaL%2FIA2Iz3X5sc6XnSgn%2Fx9aL86En0fDzftjMJMcg9mB3lnRAmKfHqD4YHuB%2Ba8JvFsCCgxyR2cGFQdlfvU1%2BCGatYUwzXlF2iz5v25aT1smy%2B0foMyK9ViTPkoJPWS3NgGpwSlSX2vUXkB9bxN22jv3hc88cWQzlEeWt000uMUMaroEXcW1N1ioLYeh%2BSvwbvP0wY3FameVCjJQ4VwzAhc3CS&X-Amz-Signature=7b4581ff677874ec7b72a9ac5dfe7fbd61e6d06ab85e998c3b682adc19fd79f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLUHIHM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0tBnHOuX9FtlcppR%2FgpYWynvZ7Tep2v%2FTKHCywnR33AiAgK1RR4R51ooL88e2VIGpG4PJrHefKI9Ildn57W6cI2yqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZpI0w4akCSfueSS6KtwDI8XgPER8evWcl6hL2xf%2FWASqhDCSGsuauu4uUlWoPsbgTpB2GyDm0sSOeWi6Xi1bU%2BAkD04tdvJHwq48NAXx3iseazB7TOl%2FnPyLYipr0lcSAef9%2BzhibmR%2FkIeD4QmQ0404pjgfJqdBtDzR9Toqs6dvK9SGoa1S%2FLxdY7e%2BPyli4A5%2B7I1AwE5NSQ1OnluWWoLPgH3tT37t%2F0aAdHU0LchKnOEbd7fums5KI4Rvl0QsvCsHm7ZAALKdoY7wlGmeaJ3T3N139DmHl7zahdTY9CtytucTwOZ5RCdvs0V6rewIgkSkJGgEhddjpsNOsA5Yo%2B8kd%2Bpnq5ntMzYDF4onX3%2B7EJXQa%2FPCzXDB%2FfVt1z4duqzaCc7F9LnZ1yaJaaq8nDW4QDg%2FYakAfKVPKdrSZIGEBcQSDhWUGn5%2FuXf5iah2YWPvBEarStcMmREGfyLgkXKT9f6Pk2mt7HhsyYNZ%2BSqNFnimVExYtHh3WQWDjZ41s0wKsR1pjqetRUK3L5nx35nNU%2B7votQkvif%2FNcQM3gG2%2FH1gbiKRoE%2FG2xsmGcZ16aa488p6EegPm8xHJlwVUFrvtQawS4IzvYCRHQq8GlJm1EYMPzUcWyjxTusxeWjd60Qzd5lk75nbS3kw0%2FSAwwY6pgEnqjZaL%2FIA2Iz3X5sc6XnSgn%2Fx9aL86En0fDzftjMJMcg9mB3lnRAmKfHqD4YHuB%2Ba8JvFsCCgxyR2cGFQdlfvU1%2BCGatYUwzXlF2iz5v25aT1smy%2B0foMyK9ViTPkoJPWS3NgGpwSlSX2vUXkB9bxN22jv3hc88cWQzlEeWt000uMUMaroEXcW1N1ioLYeh%2BSvwbvP0wY3FameVCjJQ4VwzAhc3CS&X-Amz-Signature=7dcbaf6167e368089bc6d8b52e9935cf231ffd86f69402bd3d57c0668804563a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLUHIHM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0tBnHOuX9FtlcppR%2FgpYWynvZ7Tep2v%2FTKHCywnR33AiAgK1RR4R51ooL88e2VIGpG4PJrHefKI9Ildn57W6cI2yqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZpI0w4akCSfueSS6KtwDI8XgPER8evWcl6hL2xf%2FWASqhDCSGsuauu4uUlWoPsbgTpB2GyDm0sSOeWi6Xi1bU%2BAkD04tdvJHwq48NAXx3iseazB7TOl%2FnPyLYipr0lcSAef9%2BzhibmR%2FkIeD4QmQ0404pjgfJqdBtDzR9Toqs6dvK9SGoa1S%2FLxdY7e%2BPyli4A5%2B7I1AwE5NSQ1OnluWWoLPgH3tT37t%2F0aAdHU0LchKnOEbd7fums5KI4Rvl0QsvCsHm7ZAALKdoY7wlGmeaJ3T3N139DmHl7zahdTY9CtytucTwOZ5RCdvs0V6rewIgkSkJGgEhddjpsNOsA5Yo%2B8kd%2Bpnq5ntMzYDF4onX3%2B7EJXQa%2FPCzXDB%2FfVt1z4duqzaCc7F9LnZ1yaJaaq8nDW4QDg%2FYakAfKVPKdrSZIGEBcQSDhWUGn5%2FuXf5iah2YWPvBEarStcMmREGfyLgkXKT9f6Pk2mt7HhsyYNZ%2BSqNFnimVExYtHh3WQWDjZ41s0wKsR1pjqetRUK3L5nx35nNU%2B7votQkvif%2FNcQM3gG2%2FH1gbiKRoE%2FG2xsmGcZ16aa488p6EegPm8xHJlwVUFrvtQawS4IzvYCRHQq8GlJm1EYMPzUcWyjxTusxeWjd60Qzd5lk75nbS3kw0%2FSAwwY6pgEnqjZaL%2FIA2Iz3X5sc6XnSgn%2Fx9aL86En0fDzftjMJMcg9mB3lnRAmKfHqD4YHuB%2Ba8JvFsCCgxyR2cGFQdlfvU1%2BCGatYUwzXlF2iz5v25aT1smy%2B0foMyK9ViTPkoJPWS3NgGpwSlSX2vUXkB9bxN22jv3hc88cWQzlEeWt000uMUMaroEXcW1N1ioLYeh%2BSvwbvP0wY3FameVCjJQ4VwzAhc3CS&X-Amz-Signature=71f81b2c57ef2d489767871a53c20126520952cf4e6c110a11ecf7d866feabcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

(From Articulated Robotics)

# creating launch file

make a launch folder called `display.launch.py`

**Nodes we are adding:**

{{< table "table-striped table-hover table-responsive" >}}

|   |   |
| - | - |
|   |   |
|   |   |

{{< /table >}}

- robot_state_publisher_node (reads the URDF and publishes to `/robot_description` all non-fixed joints, static joints and links)
- joint_state_publisher_node (finds all of the non-fixed joints and publishes to `/joint_states`)
- joint_state_publisher_gui_node (the same as joint_state_publisher_node but with a gui on top)
- rviz_node

## launch file

```python
import launch
from launch.substitutions import Command, LaunchConfiguration
import launch_ros
import os

def generate_launch_description():
    pkg_share = launch_ros.substitutions.FindPackageShare(package='mbot_pkg').find('mbot_pkg')
    default_model_path = os.path.join(pkg_share, 'urdf/mbot_description.urdf')
    default_rviz_config_path = os.path.join(pkg_share, 'rviz/urdf_config.rviz')

    robot_state_publisher_node = launch_ros.actions.Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', LaunchConfiguration('model')])}]
    )
    joint_state_publisher_node = launch_ros.actions.Node(
        package='joint_state_publisher',
        executable='joint_state_publisher',
        name='joint_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])}],
        condition=launch.conditions.UnlessCondition(LaunchConfiguration('gui'))
    )
    joint_state_publisher_gui_node = launch_ros.actions.Node(
        package='joint_state_publisher_gui',
        executable='joint_state_publisher_gui',
        name='joint_state_publisher_gui',
        condition=launch.conditions.IfCondition(LaunchConfiguration('gui'))
    )
    rviz_node = launch_ros.actions.Node(
        package='rviz2',
        executable='rviz2',
        name='rviz2',
        output='screen',
        arguments=['-d', LaunchConfiguration('rvizconfig')],
    )

    return launch.LaunchDescription([
        launch.actions.DeclareLaunchArgument(name='gui', default_value='True',
                                            description='Flag to enable joint_state_publisher_gui'),
        launch.actions.DeclareLaunchArgument(name='model', default_value=default_model_path,
                                            description='Absolute path to robot urdf file'),
        launch.actions.DeclareLaunchArgument(name='rvizconfig', default_value=default_rviz_config_path,
                                            description='Absolute path to rviz config file'),
        joint_state_publisher_node,
        joint_state_publisher_gui_node,
        robot_state_publisher_node,
        rviz_node
    ])
```

## add new files to `setup.py` 

```python
import os
from glob import glob

from setuptools import find_packages, setup

package_name = 'mbot_code'

setup(
    name=package_name,
    version='0.0.0',
    packages=find_packages(exclude=['test']),
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
        (os.path.join('share', package_name, 'urdf'), glob('urdf/*.urdf')),
        (os.path.join('share', package_name, 'rviz'), glob('rviz/*.rviz*')),
        (os.path.join('share', package_name), glob('launch/*launch.[pxy][yma]*')),
    ],
    ...
```

run:

```bash
colcon build --symlink-install
ros2 launch mbot_pkg display.launch.py
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLUHIHM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0tBnHOuX9FtlcppR%2FgpYWynvZ7Tep2v%2FTKHCywnR33AiAgK1RR4R51ooL88e2VIGpG4PJrHefKI9Ildn57W6cI2yqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZpI0w4akCSfueSS6KtwDI8XgPER8evWcl6hL2xf%2FWASqhDCSGsuauu4uUlWoPsbgTpB2GyDm0sSOeWi6Xi1bU%2BAkD04tdvJHwq48NAXx3iseazB7TOl%2FnPyLYipr0lcSAef9%2BzhibmR%2FkIeD4QmQ0404pjgfJqdBtDzR9Toqs6dvK9SGoa1S%2FLxdY7e%2BPyli4A5%2B7I1AwE5NSQ1OnluWWoLPgH3tT37t%2F0aAdHU0LchKnOEbd7fums5KI4Rvl0QsvCsHm7ZAALKdoY7wlGmeaJ3T3N139DmHl7zahdTY9CtytucTwOZ5RCdvs0V6rewIgkSkJGgEhddjpsNOsA5Yo%2B8kd%2Bpnq5ntMzYDF4onX3%2B7EJXQa%2FPCzXDB%2FfVt1z4duqzaCc7F9LnZ1yaJaaq8nDW4QDg%2FYakAfKVPKdrSZIGEBcQSDhWUGn5%2FuXf5iah2YWPvBEarStcMmREGfyLgkXKT9f6Pk2mt7HhsyYNZ%2BSqNFnimVExYtHh3WQWDjZ41s0wKsR1pjqetRUK3L5nx35nNU%2B7votQkvif%2FNcQM3gG2%2FH1gbiKRoE%2FG2xsmGcZ16aa488p6EegPm8xHJlwVUFrvtQawS4IzvYCRHQq8GlJm1EYMPzUcWyjxTusxeWjd60Qzd5lk75nbS3kw0%2FSAwwY6pgEnqjZaL%2FIA2Iz3X5sc6XnSgn%2Fx9aL86En0fDzftjMJMcg9mB3lnRAmKfHqD4YHuB%2Ba8JvFsCCgxyR2cGFQdlfvU1%2BCGatYUwzXlF2iz5v25aT1smy%2B0foMyK9ViTPkoJPWS3NgGpwSlSX2vUXkB9bxN22jv3hc88cWQzlEeWt000uMUMaroEXcW1N1ioLYeh%2BSvwbvP0wY3FameVCjJQ4VwzAhc3CS&X-Amz-Signature=f003b6ffd48de00103f5e7dfa5dedcede141ad5b5cc4984031cc81a3b74f5ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLUHIHM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0tBnHOuX9FtlcppR%2FgpYWynvZ7Tep2v%2FTKHCywnR33AiAgK1RR4R51ooL88e2VIGpG4PJrHefKI9Ildn57W6cI2yqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZpI0w4akCSfueSS6KtwDI8XgPER8evWcl6hL2xf%2FWASqhDCSGsuauu4uUlWoPsbgTpB2GyDm0sSOeWi6Xi1bU%2BAkD04tdvJHwq48NAXx3iseazB7TOl%2FnPyLYipr0lcSAef9%2BzhibmR%2FkIeD4QmQ0404pjgfJqdBtDzR9Toqs6dvK9SGoa1S%2FLxdY7e%2BPyli4A5%2B7I1AwE5NSQ1OnluWWoLPgH3tT37t%2F0aAdHU0LchKnOEbd7fums5KI4Rvl0QsvCsHm7ZAALKdoY7wlGmeaJ3T3N139DmHl7zahdTY9CtytucTwOZ5RCdvs0V6rewIgkSkJGgEhddjpsNOsA5Yo%2B8kd%2Bpnq5ntMzYDF4onX3%2B7EJXQa%2FPCzXDB%2FfVt1z4duqzaCc7F9LnZ1yaJaaq8nDW4QDg%2FYakAfKVPKdrSZIGEBcQSDhWUGn5%2FuXf5iah2YWPvBEarStcMmREGfyLgkXKT9f6Pk2mt7HhsyYNZ%2BSqNFnimVExYtHh3WQWDjZ41s0wKsR1pjqetRUK3L5nx35nNU%2B7votQkvif%2FNcQM3gG2%2FH1gbiKRoE%2FG2xsmGcZ16aa488p6EegPm8xHJlwVUFrvtQawS4IzvYCRHQq8GlJm1EYMPzUcWyjxTusxeWjd60Qzd5lk75nbS3kw0%2FSAwwY6pgEnqjZaL%2FIA2Iz3X5sc6XnSgn%2Fx9aL86En0fDzftjMJMcg9mB3lnRAmKfHqD4YHuB%2Ba8JvFsCCgxyR2cGFQdlfvU1%2BCGatYUwzXlF2iz5v25aT1smy%2B0foMyK9ViTPkoJPWS3NgGpwSlSX2vUXkB9bxN22jv3hc88cWQzlEeWt000uMUMaroEXcW1N1ioLYeh%2BSvwbvP0wY3FameVCjJQ4VwzAhc3CS&X-Amz-Signature=526ef68b624b5ea196210d07c0577ae81320e0660099b84bb7d6f02b7042c61b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
