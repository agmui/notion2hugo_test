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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYONOKMD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmaD%2FKopeNzCe3syWqcwLCX3HouT5cW%2B6GKvPt2OTu0AiBrc%2FaLT2ZU1n0iJXMHe7HFzvDCgGZ60TyPG7B%2BTWbLPyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMPUb9BC3Y%2BOVYrcMvKtwD4SHcyEn3wePqiH8aS1gVm2oVCm1ROsxMtIXKvNPrx9l6yUT1AQs5opid09oTK69cpAJeo9xH22gXOUFCODnbVZTyW2rBxQpkTCk%2BA4nFFgSPBKT6C6IZ70zrBjsFxa922%2Frxu68n7mfrQIf2auGfnKNZhk1%2F61Eaygrp%2B8N75PVpUH3cnOyjKzZboFsLvYPvUrRoLL7Hd2PmFxHN%2F7H0EMSpByBzrMtm89R4P7XU3zDWi0U7hGuB7eABGdGdloEhmlBlmjMVY4JsiJzL8JrjCloTM0mG5NtpEXiVs%2FxjmwuiTO43XeJ7xF1Th7S8C0bByXAty5JqEzNqGZWpw0ATuk%2B39US%2F%2FVMB5%2BUuJfQo0PoGpxKKGAnot5LKgQicScuGCKNNt0accgMohvHWRrX4TaETRTtxuE%2B8C20nzqCyH%2BmOqpur8aYB9BvBssYptm4rtH0zqCK%2Bi6NO11vaE3q8jCdaQ30Qsnw%2BMFKmBR3cJQJfn1NqoxbBFd%2BMB%2BbP%2BlFDnt03CuRFZyGse6TWQQMITr096aAd5et%2Bfs20Mbt9nXGy0Xo8ZYmWxC1sJrardV08zHYGa1QGbCgzfITfT6yhxlex5IOGkBBuxnZOwj4tIfgBeSPP2jhAi8snifEw9rGlwQY6pgHvn2Jar9Ir1QMfpqSWgh5xDrxQ5wSkaZ1HMIUivTLKZdB0Kghj3pc%2FhxNiF0BYPnlQngdT%2FhKvzNZKzbzmBJ0Vw9KVp0AbmtnFxJshfYWx%2F4TV%2FrDu%2FtBQ%2BKgIapdEEXwvywcwmhJbP%2Begh7nB0PD26gtdwCz0VURbD5N71OLjFjJfK1jSdXrGYExZ54tccK4kWnmPm0UelCbz511UBLkx6jlaki%2BX&X-Amz-Signature=406d9b54c8c010b2d50ca9e036f573e7890c1e74172ed082ad2b29ca48d5494f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYONOKMD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmaD%2FKopeNzCe3syWqcwLCX3HouT5cW%2B6GKvPt2OTu0AiBrc%2FaLT2ZU1n0iJXMHe7HFzvDCgGZ60TyPG7B%2BTWbLPyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMPUb9BC3Y%2BOVYrcMvKtwD4SHcyEn3wePqiH8aS1gVm2oVCm1ROsxMtIXKvNPrx9l6yUT1AQs5opid09oTK69cpAJeo9xH22gXOUFCODnbVZTyW2rBxQpkTCk%2BA4nFFgSPBKT6C6IZ70zrBjsFxa922%2Frxu68n7mfrQIf2auGfnKNZhk1%2F61Eaygrp%2B8N75PVpUH3cnOyjKzZboFsLvYPvUrRoLL7Hd2PmFxHN%2F7H0EMSpByBzrMtm89R4P7XU3zDWi0U7hGuB7eABGdGdloEhmlBlmjMVY4JsiJzL8JrjCloTM0mG5NtpEXiVs%2FxjmwuiTO43XeJ7xF1Th7S8C0bByXAty5JqEzNqGZWpw0ATuk%2B39US%2F%2FVMB5%2BUuJfQo0PoGpxKKGAnot5LKgQicScuGCKNNt0accgMohvHWRrX4TaETRTtxuE%2B8C20nzqCyH%2BmOqpur8aYB9BvBssYptm4rtH0zqCK%2Bi6NO11vaE3q8jCdaQ30Qsnw%2BMFKmBR3cJQJfn1NqoxbBFd%2BMB%2BbP%2BlFDnt03CuRFZyGse6TWQQMITr096aAd5et%2Bfs20Mbt9nXGy0Xo8ZYmWxC1sJrardV08zHYGa1QGbCgzfITfT6yhxlex5IOGkBBuxnZOwj4tIfgBeSPP2jhAi8snifEw9rGlwQY6pgHvn2Jar9Ir1QMfpqSWgh5xDrxQ5wSkaZ1HMIUivTLKZdB0Kghj3pc%2FhxNiF0BYPnlQngdT%2FhKvzNZKzbzmBJ0Vw9KVp0AbmtnFxJshfYWx%2F4TV%2FrDu%2FtBQ%2BKgIapdEEXwvywcwmhJbP%2Begh7nB0PD26gtdwCz0VURbD5N71OLjFjJfK1jSdXrGYExZ54tccK4kWnmPm0UelCbz511UBLkx6jlaki%2BX&X-Amz-Signature=a7966487c422f77b32035c97b3e604e5df135754f77372a47539159881d6f2ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYONOKMD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmaD%2FKopeNzCe3syWqcwLCX3HouT5cW%2B6GKvPt2OTu0AiBrc%2FaLT2ZU1n0iJXMHe7HFzvDCgGZ60TyPG7B%2BTWbLPyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMPUb9BC3Y%2BOVYrcMvKtwD4SHcyEn3wePqiH8aS1gVm2oVCm1ROsxMtIXKvNPrx9l6yUT1AQs5opid09oTK69cpAJeo9xH22gXOUFCODnbVZTyW2rBxQpkTCk%2BA4nFFgSPBKT6C6IZ70zrBjsFxa922%2Frxu68n7mfrQIf2auGfnKNZhk1%2F61Eaygrp%2B8N75PVpUH3cnOyjKzZboFsLvYPvUrRoLL7Hd2PmFxHN%2F7H0EMSpByBzrMtm89R4P7XU3zDWi0U7hGuB7eABGdGdloEhmlBlmjMVY4JsiJzL8JrjCloTM0mG5NtpEXiVs%2FxjmwuiTO43XeJ7xF1Th7S8C0bByXAty5JqEzNqGZWpw0ATuk%2B39US%2F%2FVMB5%2BUuJfQo0PoGpxKKGAnot5LKgQicScuGCKNNt0accgMohvHWRrX4TaETRTtxuE%2B8C20nzqCyH%2BmOqpur8aYB9BvBssYptm4rtH0zqCK%2Bi6NO11vaE3q8jCdaQ30Qsnw%2BMFKmBR3cJQJfn1NqoxbBFd%2BMB%2BbP%2BlFDnt03CuRFZyGse6TWQQMITr096aAd5et%2Bfs20Mbt9nXGy0Xo8ZYmWxC1sJrardV08zHYGa1QGbCgzfITfT6yhxlex5IOGkBBuxnZOwj4tIfgBeSPP2jhAi8snifEw9rGlwQY6pgHvn2Jar9Ir1QMfpqSWgh5xDrxQ5wSkaZ1HMIUivTLKZdB0Kghj3pc%2FhxNiF0BYPnlQngdT%2FhKvzNZKzbzmBJ0Vw9KVp0AbmtnFxJshfYWx%2F4TV%2FrDu%2FtBQ%2BKgIapdEEXwvywcwmhJbP%2Begh7nB0PD26gtdwCz0VURbD5N71OLjFjJfK1jSdXrGYExZ54tccK4kWnmPm0UelCbz511UBLkx6jlaki%2BX&X-Amz-Signature=1a35f0bb56c79fa5052b644fe82f10f6da4e8793108f6927485356d8e2c3abba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYONOKMD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmaD%2FKopeNzCe3syWqcwLCX3HouT5cW%2B6GKvPt2OTu0AiBrc%2FaLT2ZU1n0iJXMHe7HFzvDCgGZ60TyPG7B%2BTWbLPyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMPUb9BC3Y%2BOVYrcMvKtwD4SHcyEn3wePqiH8aS1gVm2oVCm1ROsxMtIXKvNPrx9l6yUT1AQs5opid09oTK69cpAJeo9xH22gXOUFCODnbVZTyW2rBxQpkTCk%2BA4nFFgSPBKT6C6IZ70zrBjsFxa922%2Frxu68n7mfrQIf2auGfnKNZhk1%2F61Eaygrp%2B8N75PVpUH3cnOyjKzZboFsLvYPvUrRoLL7Hd2PmFxHN%2F7H0EMSpByBzrMtm89R4P7XU3zDWi0U7hGuB7eABGdGdloEhmlBlmjMVY4JsiJzL8JrjCloTM0mG5NtpEXiVs%2FxjmwuiTO43XeJ7xF1Th7S8C0bByXAty5JqEzNqGZWpw0ATuk%2B39US%2F%2FVMB5%2BUuJfQo0PoGpxKKGAnot5LKgQicScuGCKNNt0accgMohvHWRrX4TaETRTtxuE%2B8C20nzqCyH%2BmOqpur8aYB9BvBssYptm4rtH0zqCK%2Bi6NO11vaE3q8jCdaQ30Qsnw%2BMFKmBR3cJQJfn1NqoxbBFd%2BMB%2BbP%2BlFDnt03CuRFZyGse6TWQQMITr096aAd5et%2Bfs20Mbt9nXGy0Xo8ZYmWxC1sJrardV08zHYGa1QGbCgzfITfT6yhxlex5IOGkBBuxnZOwj4tIfgBeSPP2jhAi8snifEw9rGlwQY6pgHvn2Jar9Ir1QMfpqSWgh5xDrxQ5wSkaZ1HMIUivTLKZdB0Kghj3pc%2FhxNiF0BYPnlQngdT%2FhKvzNZKzbzmBJ0Vw9KVp0AbmtnFxJshfYWx%2F4TV%2FrDu%2FtBQ%2BKgIapdEEXwvywcwmhJbP%2Begh7nB0PD26gtdwCz0VURbD5N71OLjFjJfK1jSdXrGYExZ54tccK4kWnmPm0UelCbz511UBLkx6jlaki%2BX&X-Amz-Signature=9a81f9ff1022ee5a6f40c96075235a1039577f3fd460580b552c0516f3e8f0f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYONOKMD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmaD%2FKopeNzCe3syWqcwLCX3HouT5cW%2B6GKvPt2OTu0AiBrc%2FaLT2ZU1n0iJXMHe7HFzvDCgGZ60TyPG7B%2BTWbLPyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMPUb9BC3Y%2BOVYrcMvKtwD4SHcyEn3wePqiH8aS1gVm2oVCm1ROsxMtIXKvNPrx9l6yUT1AQs5opid09oTK69cpAJeo9xH22gXOUFCODnbVZTyW2rBxQpkTCk%2BA4nFFgSPBKT6C6IZ70zrBjsFxa922%2Frxu68n7mfrQIf2auGfnKNZhk1%2F61Eaygrp%2B8N75PVpUH3cnOyjKzZboFsLvYPvUrRoLL7Hd2PmFxHN%2F7H0EMSpByBzrMtm89R4P7XU3zDWi0U7hGuB7eABGdGdloEhmlBlmjMVY4JsiJzL8JrjCloTM0mG5NtpEXiVs%2FxjmwuiTO43XeJ7xF1Th7S8C0bByXAty5JqEzNqGZWpw0ATuk%2B39US%2F%2FVMB5%2BUuJfQo0PoGpxKKGAnot5LKgQicScuGCKNNt0accgMohvHWRrX4TaETRTtxuE%2B8C20nzqCyH%2BmOqpur8aYB9BvBssYptm4rtH0zqCK%2Bi6NO11vaE3q8jCdaQ30Qsnw%2BMFKmBR3cJQJfn1NqoxbBFd%2BMB%2BbP%2BlFDnt03CuRFZyGse6TWQQMITr096aAd5et%2Bfs20Mbt9nXGy0Xo8ZYmWxC1sJrardV08zHYGa1QGbCgzfITfT6yhxlex5IOGkBBuxnZOwj4tIfgBeSPP2jhAi8snifEw9rGlwQY6pgHvn2Jar9Ir1QMfpqSWgh5xDrxQ5wSkaZ1HMIUivTLKZdB0Kghj3pc%2FhxNiF0BYPnlQngdT%2FhKvzNZKzbzmBJ0Vw9KVp0AbmtnFxJshfYWx%2F4TV%2FrDu%2FtBQ%2BKgIapdEEXwvywcwmhJbP%2Begh7nB0PD26gtdwCz0VURbD5N71OLjFjJfK1jSdXrGYExZ54tccK4kWnmPm0UelCbz511UBLkx6jlaki%2BX&X-Amz-Signature=09f5c33b085021a34ec1482f23bdf4ff159640521f874029ff8aa1151677d4ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYONOKMD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmaD%2FKopeNzCe3syWqcwLCX3HouT5cW%2B6GKvPt2OTu0AiBrc%2FaLT2ZU1n0iJXMHe7HFzvDCgGZ60TyPG7B%2BTWbLPyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMPUb9BC3Y%2BOVYrcMvKtwD4SHcyEn3wePqiH8aS1gVm2oVCm1ROsxMtIXKvNPrx9l6yUT1AQs5opid09oTK69cpAJeo9xH22gXOUFCODnbVZTyW2rBxQpkTCk%2BA4nFFgSPBKT6C6IZ70zrBjsFxa922%2Frxu68n7mfrQIf2auGfnKNZhk1%2F61Eaygrp%2B8N75PVpUH3cnOyjKzZboFsLvYPvUrRoLL7Hd2PmFxHN%2F7H0EMSpByBzrMtm89R4P7XU3zDWi0U7hGuB7eABGdGdloEhmlBlmjMVY4JsiJzL8JrjCloTM0mG5NtpEXiVs%2FxjmwuiTO43XeJ7xF1Th7S8C0bByXAty5JqEzNqGZWpw0ATuk%2B39US%2F%2FVMB5%2BUuJfQo0PoGpxKKGAnot5LKgQicScuGCKNNt0accgMohvHWRrX4TaETRTtxuE%2B8C20nzqCyH%2BmOqpur8aYB9BvBssYptm4rtH0zqCK%2Bi6NO11vaE3q8jCdaQ30Qsnw%2BMFKmBR3cJQJfn1NqoxbBFd%2BMB%2BbP%2BlFDnt03CuRFZyGse6TWQQMITr096aAd5et%2Bfs20Mbt9nXGy0Xo8ZYmWxC1sJrardV08zHYGa1QGbCgzfITfT6yhxlex5IOGkBBuxnZOwj4tIfgBeSPP2jhAi8snifEw9rGlwQY6pgHvn2Jar9Ir1QMfpqSWgh5xDrxQ5wSkaZ1HMIUivTLKZdB0Kghj3pc%2FhxNiF0BYPnlQngdT%2FhKvzNZKzbzmBJ0Vw9KVp0AbmtnFxJshfYWx%2F4TV%2FrDu%2FtBQ%2BKgIapdEEXwvywcwmhJbP%2Begh7nB0PD26gtdwCz0VURbD5N71OLjFjJfK1jSdXrGYExZ54tccK4kWnmPm0UelCbz511UBLkx6jlaki%2BX&X-Amz-Signature=d4b22bf307567bbe4ab3495ab20d549965e55cd8e9547459eca81b4e89f0e3a9&X-Amz-SignedHeaders=host&x-id=GetObject)
