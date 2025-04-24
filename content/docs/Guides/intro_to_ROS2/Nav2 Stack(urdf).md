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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIY5VMYY%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEppTmaMh%2BH6%2BWd5KyuQoWaiek5lnOFmnE%2Bz4Ya%2BS76NAiEAwRLmGW8KQWzUTyzaV9aaAPAc%2By6E90Q3i1OiIyB6q1UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BBSasJuIFJcNCZmircA2wfeGpMfPFr%2BC1QK8BwpYTtpiPx2FfHT7ZxsvvjpBP5aumLpvCtBptnXlYufvEMCU17mc3Jd%2BbmhlaCHLK8FRz1D6g74k6DuNPju9ua5fmYigLPj0nDkSJlKAOjpqMCQ2NiOP5s%2FQkqIULRKTczLLwopM069A%2Baa8EczZc3YtlIJGGzl1B5i%2B41CiAzjTubS2Xkv0VkevztFs%2FQFrFmeGtC5zicJ7yjOKRQzZQP71d%2FX4V1ankvVDUEksWJOCGqyD%2B4BSuhntylokY3wf%2BNGmXoaAsYSn%2Fn1H2ydQk77KRnLfy8KG7Cart6RNzUVpJW%2FUcl8WBDQ5%2Bv%2Bzin9hqhbbGq%2BFVsnvJXCsEGWGyU1Q4qkQIJy5EezibUYhxxdZ%2F1BiWp9scTXp7aXQDF6p17FT4qpzB3xD2LMOaY%2FKWgbIeOdiEH%2BoEb9ynqYS1vaDRjqYPHWpwrhhaSgiIcYkvrlDSYdEZu6F0qXEpbb6eikRIYlnzpKjgdbk2icdJ82t8RyNi0U3729o2Ev7WS7FKh9C4625uC7Um0fQcahjv9nQI8ertT4ZLcM3c6PlI2ADxxS0kslQN97k5VGeDt8YVRGMZtbicyMMOIP8XsYwDUa7YdHRUrraaAD%2FnsJOlkMK3lpsAGOqUBDTs64WiCoCLy13rlptr%2F4lqibHTdfb4Xd%2FMwcjrnJSdldnGcNUN%2B7NTktMXbVBek%2FoLcpCeC8%2BOghRDq4kjmzA8ymsmgOMxd4mo4K86FoiGMxuofBmkFpaH4GE8orNJKtijieVijyqJ%2BHsSvJjxYCfBUW2oznhx%2Br7Cb1EB5q2Tk6kCNIL0uTUzhPhPfjir4ju3NdBYSm4Dzg3OHRPlKQJwDJMJz&X-Amz-Signature=27469ec71de025e6d4aaf9da5e97d79c36e2fc7c1c532d235c9d72e6cd0d8940&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIY5VMYY%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEppTmaMh%2BH6%2BWd5KyuQoWaiek5lnOFmnE%2Bz4Ya%2BS76NAiEAwRLmGW8KQWzUTyzaV9aaAPAc%2By6E90Q3i1OiIyB6q1UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BBSasJuIFJcNCZmircA2wfeGpMfPFr%2BC1QK8BwpYTtpiPx2FfHT7ZxsvvjpBP5aumLpvCtBptnXlYufvEMCU17mc3Jd%2BbmhlaCHLK8FRz1D6g74k6DuNPju9ua5fmYigLPj0nDkSJlKAOjpqMCQ2NiOP5s%2FQkqIULRKTczLLwopM069A%2Baa8EczZc3YtlIJGGzl1B5i%2B41CiAzjTubS2Xkv0VkevztFs%2FQFrFmeGtC5zicJ7yjOKRQzZQP71d%2FX4V1ankvVDUEksWJOCGqyD%2B4BSuhntylokY3wf%2BNGmXoaAsYSn%2Fn1H2ydQk77KRnLfy8KG7Cart6RNzUVpJW%2FUcl8WBDQ5%2Bv%2Bzin9hqhbbGq%2BFVsnvJXCsEGWGyU1Q4qkQIJy5EezibUYhxxdZ%2F1BiWp9scTXp7aXQDF6p17FT4qpzB3xD2LMOaY%2FKWgbIeOdiEH%2BoEb9ynqYS1vaDRjqYPHWpwrhhaSgiIcYkvrlDSYdEZu6F0qXEpbb6eikRIYlnzpKjgdbk2icdJ82t8RyNi0U3729o2Ev7WS7FKh9C4625uC7Um0fQcahjv9nQI8ertT4ZLcM3c6PlI2ADxxS0kslQN97k5VGeDt8YVRGMZtbicyMMOIP8XsYwDUa7YdHRUrraaAD%2FnsJOlkMK3lpsAGOqUBDTs64WiCoCLy13rlptr%2F4lqibHTdfb4Xd%2FMwcjrnJSdldnGcNUN%2B7NTktMXbVBek%2FoLcpCeC8%2BOghRDq4kjmzA8ymsmgOMxd4mo4K86FoiGMxuofBmkFpaH4GE8orNJKtijieVijyqJ%2BHsSvJjxYCfBUW2oznhx%2Br7Cb1EB5q2Tk6kCNIL0uTUzhPhPfjir4ju3NdBYSm4Dzg3OHRPlKQJwDJMJz&X-Amz-Signature=08bb7ac759f8418d43cfdd6dc2e98beef18b791dc3a6bd9b62003d2ff3be9ffe&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIY5VMYY%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEppTmaMh%2BH6%2BWd5KyuQoWaiek5lnOFmnE%2Bz4Ya%2BS76NAiEAwRLmGW8KQWzUTyzaV9aaAPAc%2By6E90Q3i1OiIyB6q1UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BBSasJuIFJcNCZmircA2wfeGpMfPFr%2BC1QK8BwpYTtpiPx2FfHT7ZxsvvjpBP5aumLpvCtBptnXlYufvEMCU17mc3Jd%2BbmhlaCHLK8FRz1D6g74k6DuNPju9ua5fmYigLPj0nDkSJlKAOjpqMCQ2NiOP5s%2FQkqIULRKTczLLwopM069A%2Baa8EczZc3YtlIJGGzl1B5i%2B41CiAzjTubS2Xkv0VkevztFs%2FQFrFmeGtC5zicJ7yjOKRQzZQP71d%2FX4V1ankvVDUEksWJOCGqyD%2B4BSuhntylokY3wf%2BNGmXoaAsYSn%2Fn1H2ydQk77KRnLfy8KG7Cart6RNzUVpJW%2FUcl8WBDQ5%2Bv%2Bzin9hqhbbGq%2BFVsnvJXCsEGWGyU1Q4qkQIJy5EezibUYhxxdZ%2F1BiWp9scTXp7aXQDF6p17FT4qpzB3xD2LMOaY%2FKWgbIeOdiEH%2BoEb9ynqYS1vaDRjqYPHWpwrhhaSgiIcYkvrlDSYdEZu6F0qXEpbb6eikRIYlnzpKjgdbk2icdJ82t8RyNi0U3729o2Ev7WS7FKh9C4625uC7Um0fQcahjv9nQI8ertT4ZLcM3c6PlI2ADxxS0kslQN97k5VGeDt8YVRGMZtbicyMMOIP8XsYwDUa7YdHRUrraaAD%2FnsJOlkMK3lpsAGOqUBDTs64WiCoCLy13rlptr%2F4lqibHTdfb4Xd%2FMwcjrnJSdldnGcNUN%2B7NTktMXbVBek%2FoLcpCeC8%2BOghRDq4kjmzA8ymsmgOMxd4mo4K86FoiGMxuofBmkFpaH4GE8orNJKtijieVijyqJ%2BHsSvJjxYCfBUW2oznhx%2Br7Cb1EB5q2Tk6kCNIL0uTUzhPhPfjir4ju3NdBYSm4Dzg3OHRPlKQJwDJMJz&X-Amz-Signature=74a970f3835282f321b4f4bc6cccb1ff5feb325ef3eb08b5c6f16be6cce7b306&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIY5VMYY%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEppTmaMh%2BH6%2BWd5KyuQoWaiek5lnOFmnE%2Bz4Ya%2BS76NAiEAwRLmGW8KQWzUTyzaV9aaAPAc%2By6E90Q3i1OiIyB6q1UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BBSasJuIFJcNCZmircA2wfeGpMfPFr%2BC1QK8BwpYTtpiPx2FfHT7ZxsvvjpBP5aumLpvCtBptnXlYufvEMCU17mc3Jd%2BbmhlaCHLK8FRz1D6g74k6DuNPju9ua5fmYigLPj0nDkSJlKAOjpqMCQ2NiOP5s%2FQkqIULRKTczLLwopM069A%2Baa8EczZc3YtlIJGGzl1B5i%2B41CiAzjTubS2Xkv0VkevztFs%2FQFrFmeGtC5zicJ7yjOKRQzZQP71d%2FX4V1ankvVDUEksWJOCGqyD%2B4BSuhntylokY3wf%2BNGmXoaAsYSn%2Fn1H2ydQk77KRnLfy8KG7Cart6RNzUVpJW%2FUcl8WBDQ5%2Bv%2Bzin9hqhbbGq%2BFVsnvJXCsEGWGyU1Q4qkQIJy5EezibUYhxxdZ%2F1BiWp9scTXp7aXQDF6p17FT4qpzB3xD2LMOaY%2FKWgbIeOdiEH%2BoEb9ynqYS1vaDRjqYPHWpwrhhaSgiIcYkvrlDSYdEZu6F0qXEpbb6eikRIYlnzpKjgdbk2icdJ82t8RyNi0U3729o2Ev7WS7FKh9C4625uC7Um0fQcahjv9nQI8ertT4ZLcM3c6PlI2ADxxS0kslQN97k5VGeDt8YVRGMZtbicyMMOIP8XsYwDUa7YdHRUrraaAD%2FnsJOlkMK3lpsAGOqUBDTs64WiCoCLy13rlptr%2F4lqibHTdfb4Xd%2FMwcjrnJSdldnGcNUN%2B7NTktMXbVBek%2FoLcpCeC8%2BOghRDq4kjmzA8ymsmgOMxd4mo4K86FoiGMxuofBmkFpaH4GE8orNJKtijieVijyqJ%2BHsSvJjxYCfBUW2oznhx%2Br7Cb1EB5q2Tk6kCNIL0uTUzhPhPfjir4ju3NdBYSm4Dzg3OHRPlKQJwDJMJz&X-Amz-Signature=a89ea8f73bd1383220b2aa5c6b7d838c4f5cc89812697b57597d18c652974a59&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIY5VMYY%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEppTmaMh%2BH6%2BWd5KyuQoWaiek5lnOFmnE%2Bz4Ya%2BS76NAiEAwRLmGW8KQWzUTyzaV9aaAPAc%2By6E90Q3i1OiIyB6q1UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BBSasJuIFJcNCZmircA2wfeGpMfPFr%2BC1QK8BwpYTtpiPx2FfHT7ZxsvvjpBP5aumLpvCtBptnXlYufvEMCU17mc3Jd%2BbmhlaCHLK8FRz1D6g74k6DuNPju9ua5fmYigLPj0nDkSJlKAOjpqMCQ2NiOP5s%2FQkqIULRKTczLLwopM069A%2Baa8EczZc3YtlIJGGzl1B5i%2B41CiAzjTubS2Xkv0VkevztFs%2FQFrFmeGtC5zicJ7yjOKRQzZQP71d%2FX4V1ankvVDUEksWJOCGqyD%2B4BSuhntylokY3wf%2BNGmXoaAsYSn%2Fn1H2ydQk77KRnLfy8KG7Cart6RNzUVpJW%2FUcl8WBDQ5%2Bv%2Bzin9hqhbbGq%2BFVsnvJXCsEGWGyU1Q4qkQIJy5EezibUYhxxdZ%2F1BiWp9scTXp7aXQDF6p17FT4qpzB3xD2LMOaY%2FKWgbIeOdiEH%2BoEb9ynqYS1vaDRjqYPHWpwrhhaSgiIcYkvrlDSYdEZu6F0qXEpbb6eikRIYlnzpKjgdbk2icdJ82t8RyNi0U3729o2Ev7WS7FKh9C4625uC7Um0fQcahjv9nQI8ertT4ZLcM3c6PlI2ADxxS0kslQN97k5VGeDt8YVRGMZtbicyMMOIP8XsYwDUa7YdHRUrraaAD%2FnsJOlkMK3lpsAGOqUBDTs64WiCoCLy13rlptr%2F4lqibHTdfb4Xd%2FMwcjrnJSdldnGcNUN%2B7NTktMXbVBek%2FoLcpCeC8%2BOghRDq4kjmzA8ymsmgOMxd4mo4K86FoiGMxuofBmkFpaH4GE8orNJKtijieVijyqJ%2BHsSvJjxYCfBUW2oznhx%2Br7Cb1EB5q2Tk6kCNIL0uTUzhPhPfjir4ju3NdBYSm4Dzg3OHRPlKQJwDJMJz&X-Amz-Signature=3c292db640323d147e9d525bd1e0247915b3118aa7c4342ae61532f028251664&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIY5VMYY%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEppTmaMh%2BH6%2BWd5KyuQoWaiek5lnOFmnE%2Bz4Ya%2BS76NAiEAwRLmGW8KQWzUTyzaV9aaAPAc%2By6E90Q3i1OiIyB6q1UqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BBSasJuIFJcNCZmircA2wfeGpMfPFr%2BC1QK8BwpYTtpiPx2FfHT7ZxsvvjpBP5aumLpvCtBptnXlYufvEMCU17mc3Jd%2BbmhlaCHLK8FRz1D6g74k6DuNPju9ua5fmYigLPj0nDkSJlKAOjpqMCQ2NiOP5s%2FQkqIULRKTczLLwopM069A%2Baa8EczZc3YtlIJGGzl1B5i%2B41CiAzjTubS2Xkv0VkevztFs%2FQFrFmeGtC5zicJ7yjOKRQzZQP71d%2FX4V1ankvVDUEksWJOCGqyD%2B4BSuhntylokY3wf%2BNGmXoaAsYSn%2Fn1H2ydQk77KRnLfy8KG7Cart6RNzUVpJW%2FUcl8WBDQ5%2Bv%2Bzin9hqhbbGq%2BFVsnvJXCsEGWGyU1Q4qkQIJy5EezibUYhxxdZ%2F1BiWp9scTXp7aXQDF6p17FT4qpzB3xD2LMOaY%2FKWgbIeOdiEH%2BoEb9ynqYS1vaDRjqYPHWpwrhhaSgiIcYkvrlDSYdEZu6F0qXEpbb6eikRIYlnzpKjgdbk2icdJ82t8RyNi0U3729o2Ev7WS7FKh9C4625uC7Um0fQcahjv9nQI8ertT4ZLcM3c6PlI2ADxxS0kslQN97k5VGeDt8YVRGMZtbicyMMOIP8XsYwDUa7YdHRUrraaAD%2FnsJOlkMK3lpsAGOqUBDTs64WiCoCLy13rlptr%2F4lqibHTdfb4Xd%2FMwcjrnJSdldnGcNUN%2B7NTktMXbVBek%2FoLcpCeC8%2BOghRDq4kjmzA8ymsmgOMxd4mo4K86FoiGMxuofBmkFpaH4GE8orNJKtijieVijyqJ%2BHsSvJjxYCfBUW2oznhx%2Br7Cb1EB5q2Tk6kCNIL0uTUzhPhPfjir4ju3NdBYSm4Dzg3OHRPlKQJwDJMJz&X-Amz-Signature=b1af34a86eacdf09ebbe5627e8de82ce8b804ab1f7a17e6d4c9d8843d0fc6c51&X-Amz-SignedHeaders=host&x-id=GetObject)
