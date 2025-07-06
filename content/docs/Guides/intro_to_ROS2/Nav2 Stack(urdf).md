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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB27F6Z6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC1h%2Fok86P5zsry43jm8lG%2BTCDj0KUmAbZDDPUPkiSpigIgdLk%2FW6DQcjW8rPxng23WPMTzN4PeKEWm1OZmfNO6Qqwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOokWcaLVDdSzhTogSrcA4KLr%2BjjePcSQnsFyewTn7g3wTt5Mc4u%2Bn9Df5e6Wzp6730Wm5OdwvXWqrzcYe5%2FoZuUI6exR9vN9XgT0rdsWbquNUA23Q6yjfGkFU5ib3vUYX47ijfIl60JEQOM4GIjbt%2BToZG%2FggLoCENzTerlwpnkT7xxslHo%2FIMbrhJpU82KBUGE445fsrH4%2F3%2FRfaeGTiz2J%2BsHNk1o10bhuAGplV7Ztjz0TbvLegWiZY%2FAeldE7VPbh0s%2BgiPxFdHIf3RgQPHRJhEQSs1utHI3OOClp6Z62dW%2BPKwZdq9AigUmoLags8vr4Ce4E8Ukc2zTp6ZlZiR35%2BRmFtMdLlEEY19J9jgsAMQSifG6nPUYDz%2FiptAWN%2F8QSmDglDNtZL4dvO%2BuQ1laAwmO8OAo8%2BelUw4x7LY2n3DdFZsqrZHKZtOHjdfcQ1XXzzO1lxtRgMDOuNORVtwXYfjQjPGzUrzpNhwJG6ZgaJ0bYiB0Qx24DhMANqCHZLB%2F8uOB9JQmQWllfIp3OvfKShA5muYQQPb30o43qgBDQ%2FlijIdvU8sJZQ6JcFMONF7wSqY2qYZKHDFVlQjYwA9FKOi3M9yMYkN0m7Go1abI%2FRvt0r1ohiABX2zedeNKcgPQHX9BTxVpN%2F3HMOWMp8MGOqUBhjP%2BYSa%2BDiB3XYfM9DCIKCJsdJ790egagjQJzjOmfPmwkFWEviuak3hpWAfCrU3ab65swqw4DDdsY%2B%2B0dyPtE4VzXYQBVi9rmSNKa3xOLKSK3lZ3VZq8MsV68n7KGf2SSUnlhJ2svA3kTAPvP7ieQM0KdvDMdyHrmytZ%2BtRK0tK%2BPS3WpQShHT5HiALeZ8n9DDTWvzej%2FX7wGQjjp16r6gMmi%2Feq&X-Amz-Signature=1d1782d769ad2bdaaf286b31ccd4c863c0e12376740c20b22fa338dd9b620ddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB27F6Z6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC1h%2Fok86P5zsry43jm8lG%2BTCDj0KUmAbZDDPUPkiSpigIgdLk%2FW6DQcjW8rPxng23WPMTzN4PeKEWm1OZmfNO6Qqwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOokWcaLVDdSzhTogSrcA4KLr%2BjjePcSQnsFyewTn7g3wTt5Mc4u%2Bn9Df5e6Wzp6730Wm5OdwvXWqrzcYe5%2FoZuUI6exR9vN9XgT0rdsWbquNUA23Q6yjfGkFU5ib3vUYX47ijfIl60JEQOM4GIjbt%2BToZG%2FggLoCENzTerlwpnkT7xxslHo%2FIMbrhJpU82KBUGE445fsrH4%2F3%2FRfaeGTiz2J%2BsHNk1o10bhuAGplV7Ztjz0TbvLegWiZY%2FAeldE7VPbh0s%2BgiPxFdHIf3RgQPHRJhEQSs1utHI3OOClp6Z62dW%2BPKwZdq9AigUmoLags8vr4Ce4E8Ukc2zTp6ZlZiR35%2BRmFtMdLlEEY19J9jgsAMQSifG6nPUYDz%2FiptAWN%2F8QSmDglDNtZL4dvO%2BuQ1laAwmO8OAo8%2BelUw4x7LY2n3DdFZsqrZHKZtOHjdfcQ1XXzzO1lxtRgMDOuNORVtwXYfjQjPGzUrzpNhwJG6ZgaJ0bYiB0Qx24DhMANqCHZLB%2F8uOB9JQmQWllfIp3OvfKShA5muYQQPb30o43qgBDQ%2FlijIdvU8sJZQ6JcFMONF7wSqY2qYZKHDFVlQjYwA9FKOi3M9yMYkN0m7Go1abI%2FRvt0r1ohiABX2zedeNKcgPQHX9BTxVpN%2F3HMOWMp8MGOqUBhjP%2BYSa%2BDiB3XYfM9DCIKCJsdJ790egagjQJzjOmfPmwkFWEviuak3hpWAfCrU3ab65swqw4DDdsY%2B%2B0dyPtE4VzXYQBVi9rmSNKa3xOLKSK3lZ3VZq8MsV68n7KGf2SSUnlhJ2svA3kTAPvP7ieQM0KdvDMdyHrmytZ%2BtRK0tK%2BPS3WpQShHT5HiALeZ8n9DDTWvzej%2FX7wGQjjp16r6gMmi%2Feq&X-Amz-Signature=999ba761dba6da266d539c62454d1dbc80655f3134c75e9c43b9fb20b09630a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB27F6Z6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC1h%2Fok86P5zsry43jm8lG%2BTCDj0KUmAbZDDPUPkiSpigIgdLk%2FW6DQcjW8rPxng23WPMTzN4PeKEWm1OZmfNO6Qqwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOokWcaLVDdSzhTogSrcA4KLr%2BjjePcSQnsFyewTn7g3wTt5Mc4u%2Bn9Df5e6Wzp6730Wm5OdwvXWqrzcYe5%2FoZuUI6exR9vN9XgT0rdsWbquNUA23Q6yjfGkFU5ib3vUYX47ijfIl60JEQOM4GIjbt%2BToZG%2FggLoCENzTerlwpnkT7xxslHo%2FIMbrhJpU82KBUGE445fsrH4%2F3%2FRfaeGTiz2J%2BsHNk1o10bhuAGplV7Ztjz0TbvLegWiZY%2FAeldE7VPbh0s%2BgiPxFdHIf3RgQPHRJhEQSs1utHI3OOClp6Z62dW%2BPKwZdq9AigUmoLags8vr4Ce4E8Ukc2zTp6ZlZiR35%2BRmFtMdLlEEY19J9jgsAMQSifG6nPUYDz%2FiptAWN%2F8QSmDglDNtZL4dvO%2BuQ1laAwmO8OAo8%2BelUw4x7LY2n3DdFZsqrZHKZtOHjdfcQ1XXzzO1lxtRgMDOuNORVtwXYfjQjPGzUrzpNhwJG6ZgaJ0bYiB0Qx24DhMANqCHZLB%2F8uOB9JQmQWllfIp3OvfKShA5muYQQPb30o43qgBDQ%2FlijIdvU8sJZQ6JcFMONF7wSqY2qYZKHDFVlQjYwA9FKOi3M9yMYkN0m7Go1abI%2FRvt0r1ohiABX2zedeNKcgPQHX9BTxVpN%2F3HMOWMp8MGOqUBhjP%2BYSa%2BDiB3XYfM9DCIKCJsdJ790egagjQJzjOmfPmwkFWEviuak3hpWAfCrU3ab65swqw4DDdsY%2B%2B0dyPtE4VzXYQBVi9rmSNKa3xOLKSK3lZ3VZq8MsV68n7KGf2SSUnlhJ2svA3kTAPvP7ieQM0KdvDMdyHrmytZ%2BtRK0tK%2BPS3WpQShHT5HiALeZ8n9DDTWvzej%2FX7wGQjjp16r6gMmi%2Feq&X-Amz-Signature=5b7b87d447a86ddd59e7f5ef218a284e03203a2931a78eefc5706ca2709630c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB27F6Z6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC1h%2Fok86P5zsry43jm8lG%2BTCDj0KUmAbZDDPUPkiSpigIgdLk%2FW6DQcjW8rPxng23WPMTzN4PeKEWm1OZmfNO6Qqwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOokWcaLVDdSzhTogSrcA4KLr%2BjjePcSQnsFyewTn7g3wTt5Mc4u%2Bn9Df5e6Wzp6730Wm5OdwvXWqrzcYe5%2FoZuUI6exR9vN9XgT0rdsWbquNUA23Q6yjfGkFU5ib3vUYX47ijfIl60JEQOM4GIjbt%2BToZG%2FggLoCENzTerlwpnkT7xxslHo%2FIMbrhJpU82KBUGE445fsrH4%2F3%2FRfaeGTiz2J%2BsHNk1o10bhuAGplV7Ztjz0TbvLegWiZY%2FAeldE7VPbh0s%2BgiPxFdHIf3RgQPHRJhEQSs1utHI3OOClp6Z62dW%2BPKwZdq9AigUmoLags8vr4Ce4E8Ukc2zTp6ZlZiR35%2BRmFtMdLlEEY19J9jgsAMQSifG6nPUYDz%2FiptAWN%2F8QSmDglDNtZL4dvO%2BuQ1laAwmO8OAo8%2BelUw4x7LY2n3DdFZsqrZHKZtOHjdfcQ1XXzzO1lxtRgMDOuNORVtwXYfjQjPGzUrzpNhwJG6ZgaJ0bYiB0Qx24DhMANqCHZLB%2F8uOB9JQmQWllfIp3OvfKShA5muYQQPb30o43qgBDQ%2FlijIdvU8sJZQ6JcFMONF7wSqY2qYZKHDFVlQjYwA9FKOi3M9yMYkN0m7Go1abI%2FRvt0r1ohiABX2zedeNKcgPQHX9BTxVpN%2F3HMOWMp8MGOqUBhjP%2BYSa%2BDiB3XYfM9DCIKCJsdJ790egagjQJzjOmfPmwkFWEviuak3hpWAfCrU3ab65swqw4DDdsY%2B%2B0dyPtE4VzXYQBVi9rmSNKa3xOLKSK3lZ3VZq8MsV68n7KGf2SSUnlhJ2svA3kTAPvP7ieQM0KdvDMdyHrmytZ%2BtRK0tK%2BPS3WpQShHT5HiALeZ8n9DDTWvzej%2FX7wGQjjp16r6gMmi%2Feq&X-Amz-Signature=8c8d64ebfe833561999018574366f98e8f0878c09939ffe56d04058fb396f8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB27F6Z6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC1h%2Fok86P5zsry43jm8lG%2BTCDj0KUmAbZDDPUPkiSpigIgdLk%2FW6DQcjW8rPxng23WPMTzN4PeKEWm1OZmfNO6Qqwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOokWcaLVDdSzhTogSrcA4KLr%2BjjePcSQnsFyewTn7g3wTt5Mc4u%2Bn9Df5e6Wzp6730Wm5OdwvXWqrzcYe5%2FoZuUI6exR9vN9XgT0rdsWbquNUA23Q6yjfGkFU5ib3vUYX47ijfIl60JEQOM4GIjbt%2BToZG%2FggLoCENzTerlwpnkT7xxslHo%2FIMbrhJpU82KBUGE445fsrH4%2F3%2FRfaeGTiz2J%2BsHNk1o10bhuAGplV7Ztjz0TbvLegWiZY%2FAeldE7VPbh0s%2BgiPxFdHIf3RgQPHRJhEQSs1utHI3OOClp6Z62dW%2BPKwZdq9AigUmoLags8vr4Ce4E8Ukc2zTp6ZlZiR35%2BRmFtMdLlEEY19J9jgsAMQSifG6nPUYDz%2FiptAWN%2F8QSmDglDNtZL4dvO%2BuQ1laAwmO8OAo8%2BelUw4x7LY2n3DdFZsqrZHKZtOHjdfcQ1XXzzO1lxtRgMDOuNORVtwXYfjQjPGzUrzpNhwJG6ZgaJ0bYiB0Qx24DhMANqCHZLB%2F8uOB9JQmQWllfIp3OvfKShA5muYQQPb30o43qgBDQ%2FlijIdvU8sJZQ6JcFMONF7wSqY2qYZKHDFVlQjYwA9FKOi3M9yMYkN0m7Go1abI%2FRvt0r1ohiABX2zedeNKcgPQHX9BTxVpN%2F3HMOWMp8MGOqUBhjP%2BYSa%2BDiB3XYfM9DCIKCJsdJ790egagjQJzjOmfPmwkFWEviuak3hpWAfCrU3ab65swqw4DDdsY%2B%2B0dyPtE4VzXYQBVi9rmSNKa3xOLKSK3lZ3VZq8MsV68n7KGf2SSUnlhJ2svA3kTAPvP7ieQM0KdvDMdyHrmytZ%2BtRK0tK%2BPS3WpQShHT5HiALeZ8n9DDTWvzej%2FX7wGQjjp16r6gMmi%2Feq&X-Amz-Signature=2faaeb44402b4b71779291fe085345a4513b2fb71d9b0d80992e71fa3fd3f5b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB27F6Z6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC1h%2Fok86P5zsry43jm8lG%2BTCDj0KUmAbZDDPUPkiSpigIgdLk%2FW6DQcjW8rPxng23WPMTzN4PeKEWm1OZmfNO6Qqwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOokWcaLVDdSzhTogSrcA4KLr%2BjjePcSQnsFyewTn7g3wTt5Mc4u%2Bn9Df5e6Wzp6730Wm5OdwvXWqrzcYe5%2FoZuUI6exR9vN9XgT0rdsWbquNUA23Q6yjfGkFU5ib3vUYX47ijfIl60JEQOM4GIjbt%2BToZG%2FggLoCENzTerlwpnkT7xxslHo%2FIMbrhJpU82KBUGE445fsrH4%2F3%2FRfaeGTiz2J%2BsHNk1o10bhuAGplV7Ztjz0TbvLegWiZY%2FAeldE7VPbh0s%2BgiPxFdHIf3RgQPHRJhEQSs1utHI3OOClp6Z62dW%2BPKwZdq9AigUmoLags8vr4Ce4E8Ukc2zTp6ZlZiR35%2BRmFtMdLlEEY19J9jgsAMQSifG6nPUYDz%2FiptAWN%2F8QSmDglDNtZL4dvO%2BuQ1laAwmO8OAo8%2BelUw4x7LY2n3DdFZsqrZHKZtOHjdfcQ1XXzzO1lxtRgMDOuNORVtwXYfjQjPGzUrzpNhwJG6ZgaJ0bYiB0Qx24DhMANqCHZLB%2F8uOB9JQmQWllfIp3OvfKShA5muYQQPb30o43qgBDQ%2FlijIdvU8sJZQ6JcFMONF7wSqY2qYZKHDFVlQjYwA9FKOi3M9yMYkN0m7Go1abI%2FRvt0r1ohiABX2zedeNKcgPQHX9BTxVpN%2F3HMOWMp8MGOqUBhjP%2BYSa%2BDiB3XYfM9DCIKCJsdJ790egagjQJzjOmfPmwkFWEviuak3hpWAfCrU3ab65swqw4DDdsY%2B%2B0dyPtE4VzXYQBVi9rmSNKa3xOLKSK3lZ3VZq8MsV68n7KGf2SSUnlhJ2svA3kTAPvP7ieQM0KdvDMdyHrmytZ%2BtRK0tK%2BPS3WpQShHT5HiALeZ8n9DDTWvzej%2FX7wGQjjp16r6gMmi%2Feq&X-Amz-Signature=857e8c1857a6cbd136a790ae70cde0f9e991eaf3fef1c221b90ff0a59cdf9f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
