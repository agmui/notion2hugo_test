---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBSHBHG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDB7bGHKaMPyltpQ8MvknvHlFzD%2B4KDGidqrxQGQaw%2FtwIhANCCD0tIRWk%2B7i1atPgOPxEEWsyk%2FDyb0Gktb97VQJnnKv8DCB8QABoMNjM3NDIzMTgzODA1Igwq8E03fUA0COuS%2BoIq3AMEpflrD8WDaLB3%2Fj8cQ%2B4io5f%2BOjH7sQpGV%2BisaoWTX33k3tmkTUhvG0W%2Bq8fR6TG%2FWvhieZrqCvMyRyjQvjDMhaA59Ga96tEvIgBW9nlSdYPqazeE2e4n6eahN6z7lTeV9EVgkV20ihDhDV9%2Bb3fwEyLhZZ%2BJOqZ%2FzSeBaQDoCIrjkJngh%2FAooUhIxCaEPcrM7CHeyawxQYHQpiEEmlgdkMgIqjlxafAsNCe%2Btu2PYnMdtSVh4sd4XsQgeBmAhd6J1gmx4aOIkc0bq%2FxILdLd%2Bj%2FUfz3WhlqIbwT%2FL0KIYiRTEy0bicQm2eW8wTezMP66SIopUd9%2FZKLoIr2pZlumVFkM37HEtuTUn%2BqPWgmOzS%2Fb%2BLvjSc0sqTHebq3Kt9dXrqHnFzo59Pglgf9jwkQAbXe9F3NbyuuXNwFl5FvARNN1VKc44Ogx9K9RAgfoFcgYcK3Fpqy%2B7fnN%2FsyIjAkq%2FbQEoN8DgVr0dP3hqEqkIbcFiPI16Kv9WI901oYQmXg%2FOlzKEQdc%2Bzqj%2F7J6T6UHXPUZ%2BHDCelilnSImrp6FOlhKMM3SE6cZlxw9Uy7J7G17bEX%2FR%2Fueg8iU4DIvuZ6CJVFfoIHgc96GZSxBde%2Bbps8hywufTc4f54V%2FrDDf%2BYS9BjqkAcs21yTbdy0mG6k8%2FmnbQBiN7xVoXQ6qIMhpB9%2BAJvv2jqOKHOtgqcrCPwy7B5PbkvtWCoaexi%2B2X3oCy%2BmauHi%2FqndbE2GhhHaKezNYeyOZ0HD4OeWEGMNbXv2gkDUpA%2FDjYXYLyHZfRuV6sO06YbSdguNG4PufVG8UED8BkmBaQpfbhCwRPuqJZuxAGDA2y7PvEndLCsn03RMY4h2eS9Z3vGvV&X-Amz-Signature=51d18f6009088c282da7084b4bdd7741bc81357cc8db0bd72111f85e7b11937b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBSHBHG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDB7bGHKaMPyltpQ8MvknvHlFzD%2B4KDGidqrxQGQaw%2FtwIhANCCD0tIRWk%2B7i1atPgOPxEEWsyk%2FDyb0Gktb97VQJnnKv8DCB8QABoMNjM3NDIzMTgzODA1Igwq8E03fUA0COuS%2BoIq3AMEpflrD8WDaLB3%2Fj8cQ%2B4io5f%2BOjH7sQpGV%2BisaoWTX33k3tmkTUhvG0W%2Bq8fR6TG%2FWvhieZrqCvMyRyjQvjDMhaA59Ga96tEvIgBW9nlSdYPqazeE2e4n6eahN6z7lTeV9EVgkV20ihDhDV9%2Bb3fwEyLhZZ%2BJOqZ%2FzSeBaQDoCIrjkJngh%2FAooUhIxCaEPcrM7CHeyawxQYHQpiEEmlgdkMgIqjlxafAsNCe%2Btu2PYnMdtSVh4sd4XsQgeBmAhd6J1gmx4aOIkc0bq%2FxILdLd%2Bj%2FUfz3WhlqIbwT%2FL0KIYiRTEy0bicQm2eW8wTezMP66SIopUd9%2FZKLoIr2pZlumVFkM37HEtuTUn%2BqPWgmOzS%2Fb%2BLvjSc0sqTHebq3Kt9dXrqHnFzo59Pglgf9jwkQAbXe9F3NbyuuXNwFl5FvARNN1VKc44Ogx9K9RAgfoFcgYcK3Fpqy%2B7fnN%2FsyIjAkq%2FbQEoN8DgVr0dP3hqEqkIbcFiPI16Kv9WI901oYQmXg%2FOlzKEQdc%2Bzqj%2F7J6T6UHXPUZ%2BHDCelilnSImrp6FOlhKMM3SE6cZlxw9Uy7J7G17bEX%2FR%2Fueg8iU4DIvuZ6CJVFfoIHgc96GZSxBde%2Bbps8hywufTc4f54V%2FrDDf%2BYS9BjqkAcs21yTbdy0mG6k8%2FmnbQBiN7xVoXQ6qIMhpB9%2BAJvv2jqOKHOtgqcrCPwy7B5PbkvtWCoaexi%2B2X3oCy%2BmauHi%2FqndbE2GhhHaKezNYeyOZ0HD4OeWEGMNbXv2gkDUpA%2FDjYXYLyHZfRuV6sO06YbSdguNG4PufVG8UED8BkmBaQpfbhCwRPuqJZuxAGDA2y7PvEndLCsn03RMY4h2eS9Z3vGvV&X-Amz-Signature=ee2397a4a5839f0836feb7f3bfb2b19f21e5da03d5444d076bed261c552bfead&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBSHBHG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDB7bGHKaMPyltpQ8MvknvHlFzD%2B4KDGidqrxQGQaw%2FtwIhANCCD0tIRWk%2B7i1atPgOPxEEWsyk%2FDyb0Gktb97VQJnnKv8DCB8QABoMNjM3NDIzMTgzODA1Igwq8E03fUA0COuS%2BoIq3AMEpflrD8WDaLB3%2Fj8cQ%2B4io5f%2BOjH7sQpGV%2BisaoWTX33k3tmkTUhvG0W%2Bq8fR6TG%2FWvhieZrqCvMyRyjQvjDMhaA59Ga96tEvIgBW9nlSdYPqazeE2e4n6eahN6z7lTeV9EVgkV20ihDhDV9%2Bb3fwEyLhZZ%2BJOqZ%2FzSeBaQDoCIrjkJngh%2FAooUhIxCaEPcrM7CHeyawxQYHQpiEEmlgdkMgIqjlxafAsNCe%2Btu2PYnMdtSVh4sd4XsQgeBmAhd6J1gmx4aOIkc0bq%2FxILdLd%2Bj%2FUfz3WhlqIbwT%2FL0KIYiRTEy0bicQm2eW8wTezMP66SIopUd9%2FZKLoIr2pZlumVFkM37HEtuTUn%2BqPWgmOzS%2Fb%2BLvjSc0sqTHebq3Kt9dXrqHnFzo59Pglgf9jwkQAbXe9F3NbyuuXNwFl5FvARNN1VKc44Ogx9K9RAgfoFcgYcK3Fpqy%2B7fnN%2FsyIjAkq%2FbQEoN8DgVr0dP3hqEqkIbcFiPI16Kv9WI901oYQmXg%2FOlzKEQdc%2Bzqj%2F7J6T6UHXPUZ%2BHDCelilnSImrp6FOlhKMM3SE6cZlxw9Uy7J7G17bEX%2FR%2Fueg8iU4DIvuZ6CJVFfoIHgc96GZSxBde%2Bbps8hywufTc4f54V%2FrDDf%2BYS9BjqkAcs21yTbdy0mG6k8%2FmnbQBiN7xVoXQ6qIMhpB9%2BAJvv2jqOKHOtgqcrCPwy7B5PbkvtWCoaexi%2B2X3oCy%2BmauHi%2FqndbE2GhhHaKezNYeyOZ0HD4OeWEGMNbXv2gkDUpA%2FDjYXYLyHZfRuV6sO06YbSdguNG4PufVG8UED8BkmBaQpfbhCwRPuqJZuxAGDA2y7PvEndLCsn03RMY4h2eS9Z3vGvV&X-Amz-Signature=07ddf2bae2216f3a0f6cc4a977fcba54180119ba882197273517a58c440d75b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBSHBHG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDB7bGHKaMPyltpQ8MvknvHlFzD%2B4KDGidqrxQGQaw%2FtwIhANCCD0tIRWk%2B7i1atPgOPxEEWsyk%2FDyb0Gktb97VQJnnKv8DCB8QABoMNjM3NDIzMTgzODA1Igwq8E03fUA0COuS%2BoIq3AMEpflrD8WDaLB3%2Fj8cQ%2B4io5f%2BOjH7sQpGV%2BisaoWTX33k3tmkTUhvG0W%2Bq8fR6TG%2FWvhieZrqCvMyRyjQvjDMhaA59Ga96tEvIgBW9nlSdYPqazeE2e4n6eahN6z7lTeV9EVgkV20ihDhDV9%2Bb3fwEyLhZZ%2BJOqZ%2FzSeBaQDoCIrjkJngh%2FAooUhIxCaEPcrM7CHeyawxQYHQpiEEmlgdkMgIqjlxafAsNCe%2Btu2PYnMdtSVh4sd4XsQgeBmAhd6J1gmx4aOIkc0bq%2FxILdLd%2Bj%2FUfz3WhlqIbwT%2FL0KIYiRTEy0bicQm2eW8wTezMP66SIopUd9%2FZKLoIr2pZlumVFkM37HEtuTUn%2BqPWgmOzS%2Fb%2BLvjSc0sqTHebq3Kt9dXrqHnFzo59Pglgf9jwkQAbXe9F3NbyuuXNwFl5FvARNN1VKc44Ogx9K9RAgfoFcgYcK3Fpqy%2B7fnN%2FsyIjAkq%2FbQEoN8DgVr0dP3hqEqkIbcFiPI16Kv9WI901oYQmXg%2FOlzKEQdc%2Bzqj%2F7J6T6UHXPUZ%2BHDCelilnSImrp6FOlhKMM3SE6cZlxw9Uy7J7G17bEX%2FR%2Fueg8iU4DIvuZ6CJVFfoIHgc96GZSxBde%2Bbps8hywufTc4f54V%2FrDDf%2BYS9BjqkAcs21yTbdy0mG6k8%2FmnbQBiN7xVoXQ6qIMhpB9%2BAJvv2jqOKHOtgqcrCPwy7B5PbkvtWCoaexi%2B2X3oCy%2BmauHi%2FqndbE2GhhHaKezNYeyOZ0HD4OeWEGMNbXv2gkDUpA%2FDjYXYLyHZfRuV6sO06YbSdguNG4PufVG8UED8BkmBaQpfbhCwRPuqJZuxAGDA2y7PvEndLCsn03RMY4h2eS9Z3vGvV&X-Amz-Signature=c2e7577f7c0704b4ac5fa0c223a25297712fe8260e1428967bc7503a2dd4371d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBSHBHG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDB7bGHKaMPyltpQ8MvknvHlFzD%2B4KDGidqrxQGQaw%2FtwIhANCCD0tIRWk%2B7i1atPgOPxEEWsyk%2FDyb0Gktb97VQJnnKv8DCB8QABoMNjM3NDIzMTgzODA1Igwq8E03fUA0COuS%2BoIq3AMEpflrD8WDaLB3%2Fj8cQ%2B4io5f%2BOjH7sQpGV%2BisaoWTX33k3tmkTUhvG0W%2Bq8fR6TG%2FWvhieZrqCvMyRyjQvjDMhaA59Ga96tEvIgBW9nlSdYPqazeE2e4n6eahN6z7lTeV9EVgkV20ihDhDV9%2Bb3fwEyLhZZ%2BJOqZ%2FzSeBaQDoCIrjkJngh%2FAooUhIxCaEPcrM7CHeyawxQYHQpiEEmlgdkMgIqjlxafAsNCe%2Btu2PYnMdtSVh4sd4XsQgeBmAhd6J1gmx4aOIkc0bq%2FxILdLd%2Bj%2FUfz3WhlqIbwT%2FL0KIYiRTEy0bicQm2eW8wTezMP66SIopUd9%2FZKLoIr2pZlumVFkM37HEtuTUn%2BqPWgmOzS%2Fb%2BLvjSc0sqTHebq3Kt9dXrqHnFzo59Pglgf9jwkQAbXe9F3NbyuuXNwFl5FvARNN1VKc44Ogx9K9RAgfoFcgYcK3Fpqy%2B7fnN%2FsyIjAkq%2FbQEoN8DgVr0dP3hqEqkIbcFiPI16Kv9WI901oYQmXg%2FOlzKEQdc%2Bzqj%2F7J6T6UHXPUZ%2BHDCelilnSImrp6FOlhKMM3SE6cZlxw9Uy7J7G17bEX%2FR%2Fueg8iU4DIvuZ6CJVFfoIHgc96GZSxBde%2Bbps8hywufTc4f54V%2FrDDf%2BYS9BjqkAcs21yTbdy0mG6k8%2FmnbQBiN7xVoXQ6qIMhpB9%2BAJvv2jqOKHOtgqcrCPwy7B5PbkvtWCoaexi%2B2X3oCy%2BmauHi%2FqndbE2GhhHaKezNYeyOZ0HD4OeWEGMNbXv2gkDUpA%2FDjYXYLyHZfRuV6sO06YbSdguNG4PufVG8UED8BkmBaQpfbhCwRPuqJZuxAGDA2y7PvEndLCsn03RMY4h2eS9Z3vGvV&X-Amz-Signature=c3b888ee68a3c016886ef954908a668e0a519070f2a77f8625cca1b1dd0bb037&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBSHBHG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDB7bGHKaMPyltpQ8MvknvHlFzD%2B4KDGidqrxQGQaw%2FtwIhANCCD0tIRWk%2B7i1atPgOPxEEWsyk%2FDyb0Gktb97VQJnnKv8DCB8QABoMNjM3NDIzMTgzODA1Igwq8E03fUA0COuS%2BoIq3AMEpflrD8WDaLB3%2Fj8cQ%2B4io5f%2BOjH7sQpGV%2BisaoWTX33k3tmkTUhvG0W%2Bq8fR6TG%2FWvhieZrqCvMyRyjQvjDMhaA59Ga96tEvIgBW9nlSdYPqazeE2e4n6eahN6z7lTeV9EVgkV20ihDhDV9%2Bb3fwEyLhZZ%2BJOqZ%2FzSeBaQDoCIrjkJngh%2FAooUhIxCaEPcrM7CHeyawxQYHQpiEEmlgdkMgIqjlxafAsNCe%2Btu2PYnMdtSVh4sd4XsQgeBmAhd6J1gmx4aOIkc0bq%2FxILdLd%2Bj%2FUfz3WhlqIbwT%2FL0KIYiRTEy0bicQm2eW8wTezMP66SIopUd9%2FZKLoIr2pZlumVFkM37HEtuTUn%2BqPWgmOzS%2Fb%2BLvjSc0sqTHebq3Kt9dXrqHnFzo59Pglgf9jwkQAbXe9F3NbyuuXNwFl5FvARNN1VKc44Ogx9K9RAgfoFcgYcK3Fpqy%2B7fnN%2FsyIjAkq%2FbQEoN8DgVr0dP3hqEqkIbcFiPI16Kv9WI901oYQmXg%2FOlzKEQdc%2Bzqj%2F7J6T6UHXPUZ%2BHDCelilnSImrp6FOlhKMM3SE6cZlxw9Uy7J7G17bEX%2FR%2Fueg8iU4DIvuZ6CJVFfoIHgc96GZSxBde%2Bbps8hywufTc4f54V%2FrDDf%2BYS9BjqkAcs21yTbdy0mG6k8%2FmnbQBiN7xVoXQ6qIMhpB9%2BAJvv2jqOKHOtgqcrCPwy7B5PbkvtWCoaexi%2B2X3oCy%2BmauHi%2FqndbE2GhhHaKezNYeyOZ0HD4OeWEGMNbXv2gkDUpA%2FDjYXYLyHZfRuV6sO06YbSdguNG4PufVG8UED8BkmBaQpfbhCwRPuqJZuxAGDA2y7PvEndLCsn03RMY4h2eS9Z3vGvV&X-Amz-Signature=ffeae9934b13e86e369fd990081cddaa021ac88946248dc5a2ee13a955a9e8b1&X-Amz-SignedHeaders=host&x-id=GetObject)
