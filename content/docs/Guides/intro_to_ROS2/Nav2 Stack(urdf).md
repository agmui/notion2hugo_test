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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QTF62N7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCs04RqUaHsYb30DR2rQdL%2BYh6GDwh1RYyaLne3WntAZAIgEj80tVKJgjSTufVsOwSTrzeT1IE9FIJay8pnI4IAUBQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcdU5TolW5Cd1iQIyrcA3Gc3dWBoWkjn1DZOmAO%2BhF7R1aBytnUFL4d4c3FbfebLJa%2BUDo03ak%2F1WUjTsKtxzxvsZvnJbQZIofOerkJakFVXUz7zw224G4OF2EZzc7h1yf1%2B5w5Hgk%2FWJF6kYBDaZ0dkcMz2ldl8Qf7nRU5bwgok90DQ39qi07llE8klnyb4q8oTf0o3Oqw3rbYRt1qwP3XrtxHDFe%2FlZB2UTxKj8416epsiLGzHuwMB%2FrzOyArHDoiOrbjZNTSBRP04hqgbQPMLDaih2U3QlN8FMKxp4LNjsUYeUBBaef6xqd8Lp38ff4TV1yaB0yWoU5Yu8%2FVtB5w%2FNVJ0nH%2Ff5uVQqb91vGwokXUykuvylvUdHQeAd5cJJ%2FYcSD2h1%2FV8XkEIjP2qIRzam7oaQynDEsutRuH7AimohDUzQNpoWHtzb9pYxvOgMqbBCFmOx3lNfd1vURP1%2FbeE%2FzTehhwZxRqjJGUO7JrTSqxLTB17z1ITpQGYW8DNwKVgZCGFk3%2FIQtcGRUHxnOwjZsF0Oj03agsBR3zV%2B1rHUNf3FETn2jfxkWtMj8QpQtewczyUG3j%2BZA%2BZQ%2BfMdPfQ1ZdqAZenPwtedK3tPPqPBxTQJAxEP5o4PGfBYbzsFlpI3Pzhy26G5fOMJ2%2By8AGOqUBEh1lmfjZU2PINOMeG6SIHesE7FaSu4rTW2w%2BpMEPIBb57UJ0PbSxtLHQvqrsDGr%2FD8mzOIc1EurgkQWtGmnb9dXM9zFllDyxKLKEjCjVO9aVx%2FZmtd25NI%2BKVk3JoHybNwV1NJwHkXkHAbi2UiD1WxzmKcOM32lH20u6x4vztBsDEXzMoejiQHTNATkuRRgKag3pXJXHr9W19aYhFbhUY5skkKpt&X-Amz-Signature=6212d8506413be30304ad1fe815337c9b6923643731910f87a8f1f04777daae1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QTF62N7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCs04RqUaHsYb30DR2rQdL%2BYh6GDwh1RYyaLne3WntAZAIgEj80tVKJgjSTufVsOwSTrzeT1IE9FIJay8pnI4IAUBQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcdU5TolW5Cd1iQIyrcA3Gc3dWBoWkjn1DZOmAO%2BhF7R1aBytnUFL4d4c3FbfebLJa%2BUDo03ak%2F1WUjTsKtxzxvsZvnJbQZIofOerkJakFVXUz7zw224G4OF2EZzc7h1yf1%2B5w5Hgk%2FWJF6kYBDaZ0dkcMz2ldl8Qf7nRU5bwgok90DQ39qi07llE8klnyb4q8oTf0o3Oqw3rbYRt1qwP3XrtxHDFe%2FlZB2UTxKj8416epsiLGzHuwMB%2FrzOyArHDoiOrbjZNTSBRP04hqgbQPMLDaih2U3QlN8FMKxp4LNjsUYeUBBaef6xqd8Lp38ff4TV1yaB0yWoU5Yu8%2FVtB5w%2FNVJ0nH%2Ff5uVQqb91vGwokXUykuvylvUdHQeAd5cJJ%2FYcSD2h1%2FV8XkEIjP2qIRzam7oaQynDEsutRuH7AimohDUzQNpoWHtzb9pYxvOgMqbBCFmOx3lNfd1vURP1%2FbeE%2FzTehhwZxRqjJGUO7JrTSqxLTB17z1ITpQGYW8DNwKVgZCGFk3%2FIQtcGRUHxnOwjZsF0Oj03agsBR3zV%2B1rHUNf3FETn2jfxkWtMj8QpQtewczyUG3j%2BZA%2BZQ%2BfMdPfQ1ZdqAZenPwtedK3tPPqPBxTQJAxEP5o4PGfBYbzsFlpI3Pzhy26G5fOMJ2%2By8AGOqUBEh1lmfjZU2PINOMeG6SIHesE7FaSu4rTW2w%2BpMEPIBb57UJ0PbSxtLHQvqrsDGr%2FD8mzOIc1EurgkQWtGmnb9dXM9zFllDyxKLKEjCjVO9aVx%2FZmtd25NI%2BKVk3JoHybNwV1NJwHkXkHAbi2UiD1WxzmKcOM32lH20u6x4vztBsDEXzMoejiQHTNATkuRRgKag3pXJXHr9W19aYhFbhUY5skkKpt&X-Amz-Signature=6ba2dc1f86db9806a50eff30a884d3025d60ef638d6f440a606bc283301d7909&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QTF62N7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCs04RqUaHsYb30DR2rQdL%2BYh6GDwh1RYyaLne3WntAZAIgEj80tVKJgjSTufVsOwSTrzeT1IE9FIJay8pnI4IAUBQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcdU5TolW5Cd1iQIyrcA3Gc3dWBoWkjn1DZOmAO%2BhF7R1aBytnUFL4d4c3FbfebLJa%2BUDo03ak%2F1WUjTsKtxzxvsZvnJbQZIofOerkJakFVXUz7zw224G4OF2EZzc7h1yf1%2B5w5Hgk%2FWJF6kYBDaZ0dkcMz2ldl8Qf7nRU5bwgok90DQ39qi07llE8klnyb4q8oTf0o3Oqw3rbYRt1qwP3XrtxHDFe%2FlZB2UTxKj8416epsiLGzHuwMB%2FrzOyArHDoiOrbjZNTSBRP04hqgbQPMLDaih2U3QlN8FMKxp4LNjsUYeUBBaef6xqd8Lp38ff4TV1yaB0yWoU5Yu8%2FVtB5w%2FNVJ0nH%2Ff5uVQqb91vGwokXUykuvylvUdHQeAd5cJJ%2FYcSD2h1%2FV8XkEIjP2qIRzam7oaQynDEsutRuH7AimohDUzQNpoWHtzb9pYxvOgMqbBCFmOx3lNfd1vURP1%2FbeE%2FzTehhwZxRqjJGUO7JrTSqxLTB17z1ITpQGYW8DNwKVgZCGFk3%2FIQtcGRUHxnOwjZsF0Oj03agsBR3zV%2B1rHUNf3FETn2jfxkWtMj8QpQtewczyUG3j%2BZA%2BZQ%2BfMdPfQ1ZdqAZenPwtedK3tPPqPBxTQJAxEP5o4PGfBYbzsFlpI3Pzhy26G5fOMJ2%2By8AGOqUBEh1lmfjZU2PINOMeG6SIHesE7FaSu4rTW2w%2BpMEPIBb57UJ0PbSxtLHQvqrsDGr%2FD8mzOIc1EurgkQWtGmnb9dXM9zFllDyxKLKEjCjVO9aVx%2FZmtd25NI%2BKVk3JoHybNwV1NJwHkXkHAbi2UiD1WxzmKcOM32lH20u6x4vztBsDEXzMoejiQHTNATkuRRgKag3pXJXHr9W19aYhFbhUY5skkKpt&X-Amz-Signature=a529df4cbe701fedfec6bab90d93046fa16897bed7fdb10c1c3fb26e4b9b1679&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QTF62N7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCs04RqUaHsYb30DR2rQdL%2BYh6GDwh1RYyaLne3WntAZAIgEj80tVKJgjSTufVsOwSTrzeT1IE9FIJay8pnI4IAUBQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcdU5TolW5Cd1iQIyrcA3Gc3dWBoWkjn1DZOmAO%2BhF7R1aBytnUFL4d4c3FbfebLJa%2BUDo03ak%2F1WUjTsKtxzxvsZvnJbQZIofOerkJakFVXUz7zw224G4OF2EZzc7h1yf1%2B5w5Hgk%2FWJF6kYBDaZ0dkcMz2ldl8Qf7nRU5bwgok90DQ39qi07llE8klnyb4q8oTf0o3Oqw3rbYRt1qwP3XrtxHDFe%2FlZB2UTxKj8416epsiLGzHuwMB%2FrzOyArHDoiOrbjZNTSBRP04hqgbQPMLDaih2U3QlN8FMKxp4LNjsUYeUBBaef6xqd8Lp38ff4TV1yaB0yWoU5Yu8%2FVtB5w%2FNVJ0nH%2Ff5uVQqb91vGwokXUykuvylvUdHQeAd5cJJ%2FYcSD2h1%2FV8XkEIjP2qIRzam7oaQynDEsutRuH7AimohDUzQNpoWHtzb9pYxvOgMqbBCFmOx3lNfd1vURP1%2FbeE%2FzTehhwZxRqjJGUO7JrTSqxLTB17z1ITpQGYW8DNwKVgZCGFk3%2FIQtcGRUHxnOwjZsF0Oj03agsBR3zV%2B1rHUNf3FETn2jfxkWtMj8QpQtewczyUG3j%2BZA%2BZQ%2BfMdPfQ1ZdqAZenPwtedK3tPPqPBxTQJAxEP5o4PGfBYbzsFlpI3Pzhy26G5fOMJ2%2By8AGOqUBEh1lmfjZU2PINOMeG6SIHesE7FaSu4rTW2w%2BpMEPIBb57UJ0PbSxtLHQvqrsDGr%2FD8mzOIc1EurgkQWtGmnb9dXM9zFllDyxKLKEjCjVO9aVx%2FZmtd25NI%2BKVk3JoHybNwV1NJwHkXkHAbi2UiD1WxzmKcOM32lH20u6x4vztBsDEXzMoejiQHTNATkuRRgKag3pXJXHr9W19aYhFbhUY5skkKpt&X-Amz-Signature=32da45f02f3ac605b25734be8f0a0ff3efee30fde02df950c9fc8aa0c2ef39d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QTF62N7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCs04RqUaHsYb30DR2rQdL%2BYh6GDwh1RYyaLne3WntAZAIgEj80tVKJgjSTufVsOwSTrzeT1IE9FIJay8pnI4IAUBQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcdU5TolW5Cd1iQIyrcA3Gc3dWBoWkjn1DZOmAO%2BhF7R1aBytnUFL4d4c3FbfebLJa%2BUDo03ak%2F1WUjTsKtxzxvsZvnJbQZIofOerkJakFVXUz7zw224G4OF2EZzc7h1yf1%2B5w5Hgk%2FWJF6kYBDaZ0dkcMz2ldl8Qf7nRU5bwgok90DQ39qi07llE8klnyb4q8oTf0o3Oqw3rbYRt1qwP3XrtxHDFe%2FlZB2UTxKj8416epsiLGzHuwMB%2FrzOyArHDoiOrbjZNTSBRP04hqgbQPMLDaih2U3QlN8FMKxp4LNjsUYeUBBaef6xqd8Lp38ff4TV1yaB0yWoU5Yu8%2FVtB5w%2FNVJ0nH%2Ff5uVQqb91vGwokXUykuvylvUdHQeAd5cJJ%2FYcSD2h1%2FV8XkEIjP2qIRzam7oaQynDEsutRuH7AimohDUzQNpoWHtzb9pYxvOgMqbBCFmOx3lNfd1vURP1%2FbeE%2FzTehhwZxRqjJGUO7JrTSqxLTB17z1ITpQGYW8DNwKVgZCGFk3%2FIQtcGRUHxnOwjZsF0Oj03agsBR3zV%2B1rHUNf3FETn2jfxkWtMj8QpQtewczyUG3j%2BZA%2BZQ%2BfMdPfQ1ZdqAZenPwtedK3tPPqPBxTQJAxEP5o4PGfBYbzsFlpI3Pzhy26G5fOMJ2%2By8AGOqUBEh1lmfjZU2PINOMeG6SIHesE7FaSu4rTW2w%2BpMEPIBb57UJ0PbSxtLHQvqrsDGr%2FD8mzOIc1EurgkQWtGmnb9dXM9zFllDyxKLKEjCjVO9aVx%2FZmtd25NI%2BKVk3JoHybNwV1NJwHkXkHAbi2UiD1WxzmKcOM32lH20u6x4vztBsDEXzMoejiQHTNATkuRRgKag3pXJXHr9W19aYhFbhUY5skkKpt&X-Amz-Signature=cba4a1dcda806e763d316439378a26c6c1f05247673fb7775f83598a48cb30e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QTF62N7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCs04RqUaHsYb30DR2rQdL%2BYh6GDwh1RYyaLne3WntAZAIgEj80tVKJgjSTufVsOwSTrzeT1IE9FIJay8pnI4IAUBQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcdU5TolW5Cd1iQIyrcA3Gc3dWBoWkjn1DZOmAO%2BhF7R1aBytnUFL4d4c3FbfebLJa%2BUDo03ak%2F1WUjTsKtxzxvsZvnJbQZIofOerkJakFVXUz7zw224G4OF2EZzc7h1yf1%2B5w5Hgk%2FWJF6kYBDaZ0dkcMz2ldl8Qf7nRU5bwgok90DQ39qi07llE8klnyb4q8oTf0o3Oqw3rbYRt1qwP3XrtxHDFe%2FlZB2UTxKj8416epsiLGzHuwMB%2FrzOyArHDoiOrbjZNTSBRP04hqgbQPMLDaih2U3QlN8FMKxp4LNjsUYeUBBaef6xqd8Lp38ff4TV1yaB0yWoU5Yu8%2FVtB5w%2FNVJ0nH%2Ff5uVQqb91vGwokXUykuvylvUdHQeAd5cJJ%2FYcSD2h1%2FV8XkEIjP2qIRzam7oaQynDEsutRuH7AimohDUzQNpoWHtzb9pYxvOgMqbBCFmOx3lNfd1vURP1%2FbeE%2FzTehhwZxRqjJGUO7JrTSqxLTB17z1ITpQGYW8DNwKVgZCGFk3%2FIQtcGRUHxnOwjZsF0Oj03agsBR3zV%2B1rHUNf3FETn2jfxkWtMj8QpQtewczyUG3j%2BZA%2BZQ%2BfMdPfQ1ZdqAZenPwtedK3tPPqPBxTQJAxEP5o4PGfBYbzsFlpI3Pzhy26G5fOMJ2%2By8AGOqUBEh1lmfjZU2PINOMeG6SIHesE7FaSu4rTW2w%2BpMEPIBb57UJ0PbSxtLHQvqrsDGr%2FD8mzOIc1EurgkQWtGmnb9dXM9zFllDyxKLKEjCjVO9aVx%2FZmtd25NI%2BKVk3JoHybNwV1NJwHkXkHAbi2UiD1WxzmKcOM32lH20u6x4vztBsDEXzMoejiQHTNATkuRRgKag3pXJXHr9W19aYhFbhUY5skkKpt&X-Amz-Signature=a7d3e01b24d806b76ffc7303da7cf2237f22b972f76b2a95847d66778deb5aff&X-Amz-SignedHeaders=host&x-id=GetObject)
