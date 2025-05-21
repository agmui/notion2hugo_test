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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUA4G4A%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIB4TpB%2F%2BqmrsPWy%2BQFjY8g30WLCYn8Skm2Xf7WceakoRAiAbb3LZToPPjP6RBUreYg9oTZLkSxy2fzDiIJE0uie9RSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjg9rO%2FGgQXgu%2BLnvKtwDcrXXX7A%2FdHw0LR4U3DGy%2BmThyLNco3qbaBgJT4Y37iqC2VwA8WbaLgRFxUtjByE6lCQTqUsjTLB7IEIwmcBRx8dFoVv4obAaBHaOLahncsanVSFbanBR9MXsd67%2Bg5neXM7n3AW1jmieXd541AGK3g5OFG2Pbnfy8hSlXuE9XG6HkFJ7fhBH4uw7TBlkgRxLhx7ZQ9oK2c%2BG0F%2BbyMb2H2qPbWY9EbUCiu51dchM%2FPkoRlX2qeZCuamwgSW1hEyGml09uTNCSUv4%2BpWkVePpnZXf9Q2j1DR7LwY2uh5lhZ3HFDOoR4YQ4DTkIpGDHA8tdMLHETDScaFLJcliQtimPhVwFsSDHqQWwgiEGmRijL9lExsqYRIfvkwvgj3xJ9P9NrlKHTkuPLwnClihhW7BLZusi%2BpNNxdyU%2BqZHtludRjSnjlp5s1WfYyFqoXpwpxfzQJ%2BQHX3BzUOTsp1mz5oNygjsOdM26dBetcMeEqblgidWjvUAPuj1crViel87APwQHHFAMArFK8sb1qY4eozefXTXBqKoCabYAipk%2FSYU7%2BeiHAlhwhn65Dl4pM0QjjtLOJYT3F6a0LmF2jTj%2FjfbMKpYZR9vDHajyTxdLc0289yEWopsJfSHNGYX6cwyKG5wQY6pgG2Kxfy6%2BxQYvpDfzTa0b7QebV8I5wYWN3CoZ%2FFLS0TlxLf6WRiMmzPvWmzOfw3VTeo81a%2BYxGM5Xw0CdySXZs9qOZVdRX7d6nmhp3waYPs6DT6CFrxY2qS7Hq8zBuYrDZGd1rFHpOLbvHjpZ5DpUcHcFv3BD2zFsJ3qZv8iMzypbDIyOLuzHwFm6IUWfUHnbc48wmzKSTOEaE9MGd5a%2F86ri%2BIdIPv&X-Amz-Signature=6931ae795ff8e3067a7be25fcca85e342b35259c3fe28a34c72d9d396b3d7263&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUA4G4A%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIB4TpB%2F%2BqmrsPWy%2BQFjY8g30WLCYn8Skm2Xf7WceakoRAiAbb3LZToPPjP6RBUreYg9oTZLkSxy2fzDiIJE0uie9RSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjg9rO%2FGgQXgu%2BLnvKtwDcrXXX7A%2FdHw0LR4U3DGy%2BmThyLNco3qbaBgJT4Y37iqC2VwA8WbaLgRFxUtjByE6lCQTqUsjTLB7IEIwmcBRx8dFoVv4obAaBHaOLahncsanVSFbanBR9MXsd67%2Bg5neXM7n3AW1jmieXd541AGK3g5OFG2Pbnfy8hSlXuE9XG6HkFJ7fhBH4uw7TBlkgRxLhx7ZQ9oK2c%2BG0F%2BbyMb2H2qPbWY9EbUCiu51dchM%2FPkoRlX2qeZCuamwgSW1hEyGml09uTNCSUv4%2BpWkVePpnZXf9Q2j1DR7LwY2uh5lhZ3HFDOoR4YQ4DTkIpGDHA8tdMLHETDScaFLJcliQtimPhVwFsSDHqQWwgiEGmRijL9lExsqYRIfvkwvgj3xJ9P9NrlKHTkuPLwnClihhW7BLZusi%2BpNNxdyU%2BqZHtludRjSnjlp5s1WfYyFqoXpwpxfzQJ%2BQHX3BzUOTsp1mz5oNygjsOdM26dBetcMeEqblgidWjvUAPuj1crViel87APwQHHFAMArFK8sb1qY4eozefXTXBqKoCabYAipk%2FSYU7%2BeiHAlhwhn65Dl4pM0QjjtLOJYT3F6a0LmF2jTj%2FjfbMKpYZR9vDHajyTxdLc0289yEWopsJfSHNGYX6cwyKG5wQY6pgG2Kxfy6%2BxQYvpDfzTa0b7QebV8I5wYWN3CoZ%2FFLS0TlxLf6WRiMmzPvWmzOfw3VTeo81a%2BYxGM5Xw0CdySXZs9qOZVdRX7d6nmhp3waYPs6DT6CFrxY2qS7Hq8zBuYrDZGd1rFHpOLbvHjpZ5DpUcHcFv3BD2zFsJ3qZv8iMzypbDIyOLuzHwFm6IUWfUHnbc48wmzKSTOEaE9MGd5a%2F86ri%2BIdIPv&X-Amz-Signature=e6e4eade52f927c2dfb71c492251f5e50b06812f496721077469f69bd0f8088e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUA4G4A%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIB4TpB%2F%2BqmrsPWy%2BQFjY8g30WLCYn8Skm2Xf7WceakoRAiAbb3LZToPPjP6RBUreYg9oTZLkSxy2fzDiIJE0uie9RSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjg9rO%2FGgQXgu%2BLnvKtwDcrXXX7A%2FdHw0LR4U3DGy%2BmThyLNco3qbaBgJT4Y37iqC2VwA8WbaLgRFxUtjByE6lCQTqUsjTLB7IEIwmcBRx8dFoVv4obAaBHaOLahncsanVSFbanBR9MXsd67%2Bg5neXM7n3AW1jmieXd541AGK3g5OFG2Pbnfy8hSlXuE9XG6HkFJ7fhBH4uw7TBlkgRxLhx7ZQ9oK2c%2BG0F%2BbyMb2H2qPbWY9EbUCiu51dchM%2FPkoRlX2qeZCuamwgSW1hEyGml09uTNCSUv4%2BpWkVePpnZXf9Q2j1DR7LwY2uh5lhZ3HFDOoR4YQ4DTkIpGDHA8tdMLHETDScaFLJcliQtimPhVwFsSDHqQWwgiEGmRijL9lExsqYRIfvkwvgj3xJ9P9NrlKHTkuPLwnClihhW7BLZusi%2BpNNxdyU%2BqZHtludRjSnjlp5s1WfYyFqoXpwpxfzQJ%2BQHX3BzUOTsp1mz5oNygjsOdM26dBetcMeEqblgidWjvUAPuj1crViel87APwQHHFAMArFK8sb1qY4eozefXTXBqKoCabYAipk%2FSYU7%2BeiHAlhwhn65Dl4pM0QjjtLOJYT3F6a0LmF2jTj%2FjfbMKpYZR9vDHajyTxdLc0289yEWopsJfSHNGYX6cwyKG5wQY6pgG2Kxfy6%2BxQYvpDfzTa0b7QebV8I5wYWN3CoZ%2FFLS0TlxLf6WRiMmzPvWmzOfw3VTeo81a%2BYxGM5Xw0CdySXZs9qOZVdRX7d6nmhp3waYPs6DT6CFrxY2qS7Hq8zBuYrDZGd1rFHpOLbvHjpZ5DpUcHcFv3BD2zFsJ3qZv8iMzypbDIyOLuzHwFm6IUWfUHnbc48wmzKSTOEaE9MGd5a%2F86ri%2BIdIPv&X-Amz-Signature=d8f23725797e822ed2aa4b7101c53aeebd462bb16d28790a2fcd9c0526cde1fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUA4G4A%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIB4TpB%2F%2BqmrsPWy%2BQFjY8g30WLCYn8Skm2Xf7WceakoRAiAbb3LZToPPjP6RBUreYg9oTZLkSxy2fzDiIJE0uie9RSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjg9rO%2FGgQXgu%2BLnvKtwDcrXXX7A%2FdHw0LR4U3DGy%2BmThyLNco3qbaBgJT4Y37iqC2VwA8WbaLgRFxUtjByE6lCQTqUsjTLB7IEIwmcBRx8dFoVv4obAaBHaOLahncsanVSFbanBR9MXsd67%2Bg5neXM7n3AW1jmieXd541AGK3g5OFG2Pbnfy8hSlXuE9XG6HkFJ7fhBH4uw7TBlkgRxLhx7ZQ9oK2c%2BG0F%2BbyMb2H2qPbWY9EbUCiu51dchM%2FPkoRlX2qeZCuamwgSW1hEyGml09uTNCSUv4%2BpWkVePpnZXf9Q2j1DR7LwY2uh5lhZ3HFDOoR4YQ4DTkIpGDHA8tdMLHETDScaFLJcliQtimPhVwFsSDHqQWwgiEGmRijL9lExsqYRIfvkwvgj3xJ9P9NrlKHTkuPLwnClihhW7BLZusi%2BpNNxdyU%2BqZHtludRjSnjlp5s1WfYyFqoXpwpxfzQJ%2BQHX3BzUOTsp1mz5oNygjsOdM26dBetcMeEqblgidWjvUAPuj1crViel87APwQHHFAMArFK8sb1qY4eozefXTXBqKoCabYAipk%2FSYU7%2BeiHAlhwhn65Dl4pM0QjjtLOJYT3F6a0LmF2jTj%2FjfbMKpYZR9vDHajyTxdLc0289yEWopsJfSHNGYX6cwyKG5wQY6pgG2Kxfy6%2BxQYvpDfzTa0b7QebV8I5wYWN3CoZ%2FFLS0TlxLf6WRiMmzPvWmzOfw3VTeo81a%2BYxGM5Xw0CdySXZs9qOZVdRX7d6nmhp3waYPs6DT6CFrxY2qS7Hq8zBuYrDZGd1rFHpOLbvHjpZ5DpUcHcFv3BD2zFsJ3qZv8iMzypbDIyOLuzHwFm6IUWfUHnbc48wmzKSTOEaE9MGd5a%2F86ri%2BIdIPv&X-Amz-Signature=d43b5d31176d8662e72c041e0a812bf30be86de2a8db88e85be0ee7af4711577&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUA4G4A%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIB4TpB%2F%2BqmrsPWy%2BQFjY8g30WLCYn8Skm2Xf7WceakoRAiAbb3LZToPPjP6RBUreYg9oTZLkSxy2fzDiIJE0uie9RSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjg9rO%2FGgQXgu%2BLnvKtwDcrXXX7A%2FdHw0LR4U3DGy%2BmThyLNco3qbaBgJT4Y37iqC2VwA8WbaLgRFxUtjByE6lCQTqUsjTLB7IEIwmcBRx8dFoVv4obAaBHaOLahncsanVSFbanBR9MXsd67%2Bg5neXM7n3AW1jmieXd541AGK3g5OFG2Pbnfy8hSlXuE9XG6HkFJ7fhBH4uw7TBlkgRxLhx7ZQ9oK2c%2BG0F%2BbyMb2H2qPbWY9EbUCiu51dchM%2FPkoRlX2qeZCuamwgSW1hEyGml09uTNCSUv4%2BpWkVePpnZXf9Q2j1DR7LwY2uh5lhZ3HFDOoR4YQ4DTkIpGDHA8tdMLHETDScaFLJcliQtimPhVwFsSDHqQWwgiEGmRijL9lExsqYRIfvkwvgj3xJ9P9NrlKHTkuPLwnClihhW7BLZusi%2BpNNxdyU%2BqZHtludRjSnjlp5s1WfYyFqoXpwpxfzQJ%2BQHX3BzUOTsp1mz5oNygjsOdM26dBetcMeEqblgidWjvUAPuj1crViel87APwQHHFAMArFK8sb1qY4eozefXTXBqKoCabYAipk%2FSYU7%2BeiHAlhwhn65Dl4pM0QjjtLOJYT3F6a0LmF2jTj%2FjfbMKpYZR9vDHajyTxdLc0289yEWopsJfSHNGYX6cwyKG5wQY6pgG2Kxfy6%2BxQYvpDfzTa0b7QebV8I5wYWN3CoZ%2FFLS0TlxLf6WRiMmzPvWmzOfw3VTeo81a%2BYxGM5Xw0CdySXZs9qOZVdRX7d6nmhp3waYPs6DT6CFrxY2qS7Hq8zBuYrDZGd1rFHpOLbvHjpZ5DpUcHcFv3BD2zFsJ3qZv8iMzypbDIyOLuzHwFm6IUWfUHnbc48wmzKSTOEaE9MGd5a%2F86ri%2BIdIPv&X-Amz-Signature=f65324f05169cd7d0fd18c2b211d91ca70bfd60b8fdbfb1dc9fc3426621e253e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUA4G4A%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIB4TpB%2F%2BqmrsPWy%2BQFjY8g30WLCYn8Skm2Xf7WceakoRAiAbb3LZToPPjP6RBUreYg9oTZLkSxy2fzDiIJE0uie9RSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjg9rO%2FGgQXgu%2BLnvKtwDcrXXX7A%2FdHw0LR4U3DGy%2BmThyLNco3qbaBgJT4Y37iqC2VwA8WbaLgRFxUtjByE6lCQTqUsjTLB7IEIwmcBRx8dFoVv4obAaBHaOLahncsanVSFbanBR9MXsd67%2Bg5neXM7n3AW1jmieXd541AGK3g5OFG2Pbnfy8hSlXuE9XG6HkFJ7fhBH4uw7TBlkgRxLhx7ZQ9oK2c%2BG0F%2BbyMb2H2qPbWY9EbUCiu51dchM%2FPkoRlX2qeZCuamwgSW1hEyGml09uTNCSUv4%2BpWkVePpnZXf9Q2j1DR7LwY2uh5lhZ3HFDOoR4YQ4DTkIpGDHA8tdMLHETDScaFLJcliQtimPhVwFsSDHqQWwgiEGmRijL9lExsqYRIfvkwvgj3xJ9P9NrlKHTkuPLwnClihhW7BLZusi%2BpNNxdyU%2BqZHtludRjSnjlp5s1WfYyFqoXpwpxfzQJ%2BQHX3BzUOTsp1mz5oNygjsOdM26dBetcMeEqblgidWjvUAPuj1crViel87APwQHHFAMArFK8sb1qY4eozefXTXBqKoCabYAipk%2FSYU7%2BeiHAlhwhn65Dl4pM0QjjtLOJYT3F6a0LmF2jTj%2FjfbMKpYZR9vDHajyTxdLc0289yEWopsJfSHNGYX6cwyKG5wQY6pgG2Kxfy6%2BxQYvpDfzTa0b7QebV8I5wYWN3CoZ%2FFLS0TlxLf6WRiMmzPvWmzOfw3VTeo81a%2BYxGM5Xw0CdySXZs9qOZVdRX7d6nmhp3waYPs6DT6CFrxY2qS7Hq8zBuYrDZGd1rFHpOLbvHjpZ5DpUcHcFv3BD2zFsJ3qZv8iMzypbDIyOLuzHwFm6IUWfUHnbc48wmzKSTOEaE9MGd5a%2F86ri%2BIdIPv&X-Amz-Signature=c8ab88512ec2e959d96b617567652c18d36f4058d0f47d968f88dcb8a61b57ab&X-Amz-SignedHeaders=host&x-id=GetObject)
