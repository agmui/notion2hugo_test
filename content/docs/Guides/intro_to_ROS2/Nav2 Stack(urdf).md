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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHHNMJH6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCeIIc8pcIee2oI50g1%2FEnHVcqsPaIVRf3NVLbJX6su9QIgcKPl4TkgmquF4EhPdfqT2%2B6WUOdIrDSY%2Bb0EzB9l4uMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtNMJ3o9cPG%2B%2Byc1CrcAxgQba8KjIOVybC2c9ueKhhlJqAE5Yw%2F5uFbemWuwQyMUR4NxQbZY8MR5H8c0fYOH5gO6JdV9GmS4T1GYwuOwBKcKDFFD%2B7zLJ%2FDYdriclIQwIsuB4H3geO8n9WBp%2BkJSF5qVBjw%2BAj%2FxhnNHLDnoXkPkkcXMMoRrV4J6hn1S6g3dQtK%2FK4n2Q3obevqaSi9as8arrKc2Rmqsr2uPdmCLPkmqdaVnNCzIdGUZVUw8rz0yS8Sx2lY561bOVzh9QwyKtHXaSdcwEM6L0O1ot4ehSZQKVApdtu%2B1BES94vt9D4zrOKhuSYlfmPqYHpQKm6uNa4PzDX4oSs078xD2YsdqZgQmZ2fzZjhQuBMaCVNpo1dqDDqSjKmMuCmF%2Fa5hrEpdYPJtuSoh%2FFvQVQrNAXPGsqTB%2BsPjTORKHdy%2BWzUO7ivVBJjM9UjESCowLRY7M6rmCwIriwxMzxg%2F%2FCbg5JiUZto65274T17PW%2BAAV7b4gtkjMp0rf6hMGjed4b%2FDLYEFuKLl4AzdhEEfZ8wp1gA7zBfG7kauDhYftsp0Y2jkGsARd1Ww7eCDRuTP4QbiwSjCVHb%2FUnwDs8mERLXaaoEnlIrv0xMTII1%2Fg5oivGkjusrL1T%2FyemJivZHvGo0ML%2BR9cEGOqUBZWa3dPad4elw8Ak1FM%2FWBW40kWz1Q2teKqaAhPCOK33gDZ%2FHpMpwlqLtQHejiSfPnSnwYRUQXBTitQz4i%2Bh9sPrhPXKa%2BNdDUUmTM4LoqiPsSRS4mYKkXpmWqWyfUgSSA2Py46QXEzW%2BaZypT1Z%2B0ZHLwIzT41tlBsyunndh6Tm6DzLyspJQVmi5CD8coslZgU11rs6dd9F1CVOuBo8LhpGvlpnN&X-Amz-Signature=a180646f3f1b709e5d29c5199e3dbae73d1af32fd1461eef7f414cc10f80d6c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHHNMJH6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCeIIc8pcIee2oI50g1%2FEnHVcqsPaIVRf3NVLbJX6su9QIgcKPl4TkgmquF4EhPdfqT2%2B6WUOdIrDSY%2Bb0EzB9l4uMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtNMJ3o9cPG%2B%2Byc1CrcAxgQba8KjIOVybC2c9ueKhhlJqAE5Yw%2F5uFbemWuwQyMUR4NxQbZY8MR5H8c0fYOH5gO6JdV9GmS4T1GYwuOwBKcKDFFD%2B7zLJ%2FDYdriclIQwIsuB4H3geO8n9WBp%2BkJSF5qVBjw%2BAj%2FxhnNHLDnoXkPkkcXMMoRrV4J6hn1S6g3dQtK%2FK4n2Q3obevqaSi9as8arrKc2Rmqsr2uPdmCLPkmqdaVnNCzIdGUZVUw8rz0yS8Sx2lY561bOVzh9QwyKtHXaSdcwEM6L0O1ot4ehSZQKVApdtu%2B1BES94vt9D4zrOKhuSYlfmPqYHpQKm6uNa4PzDX4oSs078xD2YsdqZgQmZ2fzZjhQuBMaCVNpo1dqDDqSjKmMuCmF%2Fa5hrEpdYPJtuSoh%2FFvQVQrNAXPGsqTB%2BsPjTORKHdy%2BWzUO7ivVBJjM9UjESCowLRY7M6rmCwIriwxMzxg%2F%2FCbg5JiUZto65274T17PW%2BAAV7b4gtkjMp0rf6hMGjed4b%2FDLYEFuKLl4AzdhEEfZ8wp1gA7zBfG7kauDhYftsp0Y2jkGsARd1Ww7eCDRuTP4QbiwSjCVHb%2FUnwDs8mERLXaaoEnlIrv0xMTII1%2Fg5oivGkjusrL1T%2FyemJivZHvGo0ML%2BR9cEGOqUBZWa3dPad4elw8Ak1FM%2FWBW40kWz1Q2teKqaAhPCOK33gDZ%2FHpMpwlqLtQHejiSfPnSnwYRUQXBTitQz4i%2Bh9sPrhPXKa%2BNdDUUmTM4LoqiPsSRS4mYKkXpmWqWyfUgSSA2Py46QXEzW%2BaZypT1Z%2B0ZHLwIzT41tlBsyunndh6Tm6DzLyspJQVmi5CD8coslZgU11rs6dd9F1CVOuBo8LhpGvlpnN&X-Amz-Signature=3457e7634b6895e4b9b06fc8a6bb77711f8c4bb8a725590e77361db51a1723f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHHNMJH6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCeIIc8pcIee2oI50g1%2FEnHVcqsPaIVRf3NVLbJX6su9QIgcKPl4TkgmquF4EhPdfqT2%2B6WUOdIrDSY%2Bb0EzB9l4uMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtNMJ3o9cPG%2B%2Byc1CrcAxgQba8KjIOVybC2c9ueKhhlJqAE5Yw%2F5uFbemWuwQyMUR4NxQbZY8MR5H8c0fYOH5gO6JdV9GmS4T1GYwuOwBKcKDFFD%2B7zLJ%2FDYdriclIQwIsuB4H3geO8n9WBp%2BkJSF5qVBjw%2BAj%2FxhnNHLDnoXkPkkcXMMoRrV4J6hn1S6g3dQtK%2FK4n2Q3obevqaSi9as8arrKc2Rmqsr2uPdmCLPkmqdaVnNCzIdGUZVUw8rz0yS8Sx2lY561bOVzh9QwyKtHXaSdcwEM6L0O1ot4ehSZQKVApdtu%2B1BES94vt9D4zrOKhuSYlfmPqYHpQKm6uNa4PzDX4oSs078xD2YsdqZgQmZ2fzZjhQuBMaCVNpo1dqDDqSjKmMuCmF%2Fa5hrEpdYPJtuSoh%2FFvQVQrNAXPGsqTB%2BsPjTORKHdy%2BWzUO7ivVBJjM9UjESCowLRY7M6rmCwIriwxMzxg%2F%2FCbg5JiUZto65274T17PW%2BAAV7b4gtkjMp0rf6hMGjed4b%2FDLYEFuKLl4AzdhEEfZ8wp1gA7zBfG7kauDhYftsp0Y2jkGsARd1Ww7eCDRuTP4QbiwSjCVHb%2FUnwDs8mERLXaaoEnlIrv0xMTII1%2Fg5oivGkjusrL1T%2FyemJivZHvGo0ML%2BR9cEGOqUBZWa3dPad4elw8Ak1FM%2FWBW40kWz1Q2teKqaAhPCOK33gDZ%2FHpMpwlqLtQHejiSfPnSnwYRUQXBTitQz4i%2Bh9sPrhPXKa%2BNdDUUmTM4LoqiPsSRS4mYKkXpmWqWyfUgSSA2Py46QXEzW%2BaZypT1Z%2B0ZHLwIzT41tlBsyunndh6Tm6DzLyspJQVmi5CD8coslZgU11rs6dd9F1CVOuBo8LhpGvlpnN&X-Amz-Signature=72c643df6f887f1093f0b921b8a0bee30a3ff4570a78f246aa4ec9ddcc45cd67&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHHNMJH6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCeIIc8pcIee2oI50g1%2FEnHVcqsPaIVRf3NVLbJX6su9QIgcKPl4TkgmquF4EhPdfqT2%2B6WUOdIrDSY%2Bb0EzB9l4uMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtNMJ3o9cPG%2B%2Byc1CrcAxgQba8KjIOVybC2c9ueKhhlJqAE5Yw%2F5uFbemWuwQyMUR4NxQbZY8MR5H8c0fYOH5gO6JdV9GmS4T1GYwuOwBKcKDFFD%2B7zLJ%2FDYdriclIQwIsuB4H3geO8n9WBp%2BkJSF5qVBjw%2BAj%2FxhnNHLDnoXkPkkcXMMoRrV4J6hn1S6g3dQtK%2FK4n2Q3obevqaSi9as8arrKc2Rmqsr2uPdmCLPkmqdaVnNCzIdGUZVUw8rz0yS8Sx2lY561bOVzh9QwyKtHXaSdcwEM6L0O1ot4ehSZQKVApdtu%2B1BES94vt9D4zrOKhuSYlfmPqYHpQKm6uNa4PzDX4oSs078xD2YsdqZgQmZ2fzZjhQuBMaCVNpo1dqDDqSjKmMuCmF%2Fa5hrEpdYPJtuSoh%2FFvQVQrNAXPGsqTB%2BsPjTORKHdy%2BWzUO7ivVBJjM9UjESCowLRY7M6rmCwIriwxMzxg%2F%2FCbg5JiUZto65274T17PW%2BAAV7b4gtkjMp0rf6hMGjed4b%2FDLYEFuKLl4AzdhEEfZ8wp1gA7zBfG7kauDhYftsp0Y2jkGsARd1Ww7eCDRuTP4QbiwSjCVHb%2FUnwDs8mERLXaaoEnlIrv0xMTII1%2Fg5oivGkjusrL1T%2FyemJivZHvGo0ML%2BR9cEGOqUBZWa3dPad4elw8Ak1FM%2FWBW40kWz1Q2teKqaAhPCOK33gDZ%2FHpMpwlqLtQHejiSfPnSnwYRUQXBTitQz4i%2Bh9sPrhPXKa%2BNdDUUmTM4LoqiPsSRS4mYKkXpmWqWyfUgSSA2Py46QXEzW%2BaZypT1Z%2B0ZHLwIzT41tlBsyunndh6Tm6DzLyspJQVmi5CD8coslZgU11rs6dd9F1CVOuBo8LhpGvlpnN&X-Amz-Signature=efdf450659bda56b297f510360ab108c8639af90aa532c0ed2fb59099c67e32e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHHNMJH6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCeIIc8pcIee2oI50g1%2FEnHVcqsPaIVRf3NVLbJX6su9QIgcKPl4TkgmquF4EhPdfqT2%2B6WUOdIrDSY%2Bb0EzB9l4uMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtNMJ3o9cPG%2B%2Byc1CrcAxgQba8KjIOVybC2c9ueKhhlJqAE5Yw%2F5uFbemWuwQyMUR4NxQbZY8MR5H8c0fYOH5gO6JdV9GmS4T1GYwuOwBKcKDFFD%2B7zLJ%2FDYdriclIQwIsuB4H3geO8n9WBp%2BkJSF5qVBjw%2BAj%2FxhnNHLDnoXkPkkcXMMoRrV4J6hn1S6g3dQtK%2FK4n2Q3obevqaSi9as8arrKc2Rmqsr2uPdmCLPkmqdaVnNCzIdGUZVUw8rz0yS8Sx2lY561bOVzh9QwyKtHXaSdcwEM6L0O1ot4ehSZQKVApdtu%2B1BES94vt9D4zrOKhuSYlfmPqYHpQKm6uNa4PzDX4oSs078xD2YsdqZgQmZ2fzZjhQuBMaCVNpo1dqDDqSjKmMuCmF%2Fa5hrEpdYPJtuSoh%2FFvQVQrNAXPGsqTB%2BsPjTORKHdy%2BWzUO7ivVBJjM9UjESCowLRY7M6rmCwIriwxMzxg%2F%2FCbg5JiUZto65274T17PW%2BAAV7b4gtkjMp0rf6hMGjed4b%2FDLYEFuKLl4AzdhEEfZ8wp1gA7zBfG7kauDhYftsp0Y2jkGsARd1Ww7eCDRuTP4QbiwSjCVHb%2FUnwDs8mERLXaaoEnlIrv0xMTII1%2Fg5oivGkjusrL1T%2FyemJivZHvGo0ML%2BR9cEGOqUBZWa3dPad4elw8Ak1FM%2FWBW40kWz1Q2teKqaAhPCOK33gDZ%2FHpMpwlqLtQHejiSfPnSnwYRUQXBTitQz4i%2Bh9sPrhPXKa%2BNdDUUmTM4LoqiPsSRS4mYKkXpmWqWyfUgSSA2Py46QXEzW%2BaZypT1Z%2B0ZHLwIzT41tlBsyunndh6Tm6DzLyspJQVmi5CD8coslZgU11rs6dd9F1CVOuBo8LhpGvlpnN&X-Amz-Signature=7ca274c3f17b4a0e1a0f60c3056c9a32632669587fbd4c94747367e40e3f3c59&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHHNMJH6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCeIIc8pcIee2oI50g1%2FEnHVcqsPaIVRf3NVLbJX6su9QIgcKPl4TkgmquF4EhPdfqT2%2B6WUOdIrDSY%2Bb0EzB9l4uMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtNMJ3o9cPG%2B%2Byc1CrcAxgQba8KjIOVybC2c9ueKhhlJqAE5Yw%2F5uFbemWuwQyMUR4NxQbZY8MR5H8c0fYOH5gO6JdV9GmS4T1GYwuOwBKcKDFFD%2B7zLJ%2FDYdriclIQwIsuB4H3geO8n9WBp%2BkJSF5qVBjw%2BAj%2FxhnNHLDnoXkPkkcXMMoRrV4J6hn1S6g3dQtK%2FK4n2Q3obevqaSi9as8arrKc2Rmqsr2uPdmCLPkmqdaVnNCzIdGUZVUw8rz0yS8Sx2lY561bOVzh9QwyKtHXaSdcwEM6L0O1ot4ehSZQKVApdtu%2B1BES94vt9D4zrOKhuSYlfmPqYHpQKm6uNa4PzDX4oSs078xD2YsdqZgQmZ2fzZjhQuBMaCVNpo1dqDDqSjKmMuCmF%2Fa5hrEpdYPJtuSoh%2FFvQVQrNAXPGsqTB%2BsPjTORKHdy%2BWzUO7ivVBJjM9UjESCowLRY7M6rmCwIriwxMzxg%2F%2FCbg5JiUZto65274T17PW%2BAAV7b4gtkjMp0rf6hMGjed4b%2FDLYEFuKLl4AzdhEEfZ8wp1gA7zBfG7kauDhYftsp0Y2jkGsARd1Ww7eCDRuTP4QbiwSjCVHb%2FUnwDs8mERLXaaoEnlIrv0xMTII1%2Fg5oivGkjusrL1T%2FyemJivZHvGo0ML%2BR9cEGOqUBZWa3dPad4elw8Ak1FM%2FWBW40kWz1Q2teKqaAhPCOK33gDZ%2FHpMpwlqLtQHejiSfPnSnwYRUQXBTitQz4i%2Bh9sPrhPXKa%2BNdDUUmTM4LoqiPsSRS4mYKkXpmWqWyfUgSSA2Py46QXEzW%2BaZypT1Z%2B0ZHLwIzT41tlBsyunndh6Tm6DzLyspJQVmi5CD8coslZgU11rs6dd9F1CVOuBo8LhpGvlpnN&X-Amz-Signature=4058e10aedb458da08421149a95247fa55063b95596a3ab12bfb956e03e86c2f&X-Amz-SignedHeaders=host&x-id=GetObject)
