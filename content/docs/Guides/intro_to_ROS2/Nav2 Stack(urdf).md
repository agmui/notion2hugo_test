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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQX4FL3Y%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk77ZlIDP3FkSY2cwZBwvDIiCzddaHykhYaHOVpEL20AiA%2FRsqjpxDooPZbiLBcUwDlJuJraPo0wqaru8DLU3fTviqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW5T5FBLhPtZ5Bfm6KtwD7L%2B%2BZE%2FHabeRwqg4NSxqA8q%2F33ifGkTPfjXZXEVJMLEri5a1vk7%2FcdEhI5pB32medf4MxLx4P212dW1rWKdCuCaCqHrGSGOSf8Zr%2Ft95cmgNNlx5woiNxN4wTv4XpVab1wj6M7m3OW4Vw7FHOnH14lLzq79I%2BxGJ%2BNvMTcc4j6FU6TAm3vjJ%2F%2FD0TR%2BMU4%2BZUSSw6wlFlnUIlUUpZgJica%2FqK3SYbRJtlG1gJVGokWowhioPffLD2%2Bdnbs8GU8pXWWGmy4L1F647bzaCocYXpPyjGRyMnQzLbmjd1e4kDgLnIjYH4EkcGWgVcFChgCx4SYcNuu96MQ2kbYhzJfdy0372kBm7dAcrtr9%2F4bV6RAqUXirhQ5VnUkCgzHCgQQqu0HxrMZt1db%2FmwfKY4NDMVF0mEoCcAxYmdP5DgKFD0NGQ5QzV8NZCCdYPT2%2BwM%2Be%2Fiyrv5mabwfPPP69oHARCPlzdkq%2FL813AMNmopSfJ8LaVJ87XS18Wh1u08T%2BuPvlTLYB06aUt9aMuVsFwLPCZGGK6WCxdRcw6OpjeyHsDtMBixGqR8HDNqNKxwbpBPRYEhMrpyTPSeT2FPgofNBs9GORjTEmzaRQWPp6vKXmtEpkdt2F4P%2B3nB6%2BGD4gwk9DkvQY6pgFp7t0zR7Hfd8e3zvr4GUTFUDSjBKA1s%2FRHkyeS5is07mHtCvxu1ejLIF5bIFsZaUe5HTwnqJN3p8Pu%2B3MAbsTOt%2BDkWtFfdqfkxJ9YSy649MZsBWUMh1BVmbe%2B4350GwKpeZYXZdRmE9t5tHo3gsVmamQBMkx12aq%2BmXeAOsyU%2FAMnv8E195QWPiDpSQ4%2B2ajhH2QXOCDlvxMC1AE6ABbYRL%2B4bbvU&X-Amz-Signature=20f0464fc4f96d91ba9eb424c4d5427b9805c8d1769baca2571d6f2b56a82842&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQX4FL3Y%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk77ZlIDP3FkSY2cwZBwvDIiCzddaHykhYaHOVpEL20AiA%2FRsqjpxDooPZbiLBcUwDlJuJraPo0wqaru8DLU3fTviqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW5T5FBLhPtZ5Bfm6KtwD7L%2B%2BZE%2FHabeRwqg4NSxqA8q%2F33ifGkTPfjXZXEVJMLEri5a1vk7%2FcdEhI5pB32medf4MxLx4P212dW1rWKdCuCaCqHrGSGOSf8Zr%2Ft95cmgNNlx5woiNxN4wTv4XpVab1wj6M7m3OW4Vw7FHOnH14lLzq79I%2BxGJ%2BNvMTcc4j6FU6TAm3vjJ%2F%2FD0TR%2BMU4%2BZUSSw6wlFlnUIlUUpZgJica%2FqK3SYbRJtlG1gJVGokWowhioPffLD2%2Bdnbs8GU8pXWWGmy4L1F647bzaCocYXpPyjGRyMnQzLbmjd1e4kDgLnIjYH4EkcGWgVcFChgCx4SYcNuu96MQ2kbYhzJfdy0372kBm7dAcrtr9%2F4bV6RAqUXirhQ5VnUkCgzHCgQQqu0HxrMZt1db%2FmwfKY4NDMVF0mEoCcAxYmdP5DgKFD0NGQ5QzV8NZCCdYPT2%2BwM%2Be%2Fiyrv5mabwfPPP69oHARCPlzdkq%2FL813AMNmopSfJ8LaVJ87XS18Wh1u08T%2BuPvlTLYB06aUt9aMuVsFwLPCZGGK6WCxdRcw6OpjeyHsDtMBixGqR8HDNqNKxwbpBPRYEhMrpyTPSeT2FPgofNBs9GORjTEmzaRQWPp6vKXmtEpkdt2F4P%2B3nB6%2BGD4gwk9DkvQY6pgFp7t0zR7Hfd8e3zvr4GUTFUDSjBKA1s%2FRHkyeS5is07mHtCvxu1ejLIF5bIFsZaUe5HTwnqJN3p8Pu%2B3MAbsTOt%2BDkWtFfdqfkxJ9YSy649MZsBWUMh1BVmbe%2B4350GwKpeZYXZdRmE9t5tHo3gsVmamQBMkx12aq%2BmXeAOsyU%2FAMnv8E195QWPiDpSQ4%2B2ajhH2QXOCDlvxMC1AE6ABbYRL%2B4bbvU&X-Amz-Signature=db097d32d58a5c625a34988226fe210694b45f5b21bfe45a98ed9732f78773f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQX4FL3Y%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk77ZlIDP3FkSY2cwZBwvDIiCzddaHykhYaHOVpEL20AiA%2FRsqjpxDooPZbiLBcUwDlJuJraPo0wqaru8DLU3fTviqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW5T5FBLhPtZ5Bfm6KtwD7L%2B%2BZE%2FHabeRwqg4NSxqA8q%2F33ifGkTPfjXZXEVJMLEri5a1vk7%2FcdEhI5pB32medf4MxLx4P212dW1rWKdCuCaCqHrGSGOSf8Zr%2Ft95cmgNNlx5woiNxN4wTv4XpVab1wj6M7m3OW4Vw7FHOnH14lLzq79I%2BxGJ%2BNvMTcc4j6FU6TAm3vjJ%2F%2FD0TR%2BMU4%2BZUSSw6wlFlnUIlUUpZgJica%2FqK3SYbRJtlG1gJVGokWowhioPffLD2%2Bdnbs8GU8pXWWGmy4L1F647bzaCocYXpPyjGRyMnQzLbmjd1e4kDgLnIjYH4EkcGWgVcFChgCx4SYcNuu96MQ2kbYhzJfdy0372kBm7dAcrtr9%2F4bV6RAqUXirhQ5VnUkCgzHCgQQqu0HxrMZt1db%2FmwfKY4NDMVF0mEoCcAxYmdP5DgKFD0NGQ5QzV8NZCCdYPT2%2BwM%2Be%2Fiyrv5mabwfPPP69oHARCPlzdkq%2FL813AMNmopSfJ8LaVJ87XS18Wh1u08T%2BuPvlTLYB06aUt9aMuVsFwLPCZGGK6WCxdRcw6OpjeyHsDtMBixGqR8HDNqNKxwbpBPRYEhMrpyTPSeT2FPgofNBs9GORjTEmzaRQWPp6vKXmtEpkdt2F4P%2B3nB6%2BGD4gwk9DkvQY6pgFp7t0zR7Hfd8e3zvr4GUTFUDSjBKA1s%2FRHkyeS5is07mHtCvxu1ejLIF5bIFsZaUe5HTwnqJN3p8Pu%2B3MAbsTOt%2BDkWtFfdqfkxJ9YSy649MZsBWUMh1BVmbe%2B4350GwKpeZYXZdRmE9t5tHo3gsVmamQBMkx12aq%2BmXeAOsyU%2FAMnv8E195QWPiDpSQ4%2B2ajhH2QXOCDlvxMC1AE6ABbYRL%2B4bbvU&X-Amz-Signature=829046b2cd22ad159ea3418e4630ba72f7d9cd99d4e6d38e911794ff95961073&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQX4FL3Y%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk77ZlIDP3FkSY2cwZBwvDIiCzddaHykhYaHOVpEL20AiA%2FRsqjpxDooPZbiLBcUwDlJuJraPo0wqaru8DLU3fTviqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW5T5FBLhPtZ5Bfm6KtwD7L%2B%2BZE%2FHabeRwqg4NSxqA8q%2F33ifGkTPfjXZXEVJMLEri5a1vk7%2FcdEhI5pB32medf4MxLx4P212dW1rWKdCuCaCqHrGSGOSf8Zr%2Ft95cmgNNlx5woiNxN4wTv4XpVab1wj6M7m3OW4Vw7FHOnH14lLzq79I%2BxGJ%2BNvMTcc4j6FU6TAm3vjJ%2F%2FD0TR%2BMU4%2BZUSSw6wlFlnUIlUUpZgJica%2FqK3SYbRJtlG1gJVGokWowhioPffLD2%2Bdnbs8GU8pXWWGmy4L1F647bzaCocYXpPyjGRyMnQzLbmjd1e4kDgLnIjYH4EkcGWgVcFChgCx4SYcNuu96MQ2kbYhzJfdy0372kBm7dAcrtr9%2F4bV6RAqUXirhQ5VnUkCgzHCgQQqu0HxrMZt1db%2FmwfKY4NDMVF0mEoCcAxYmdP5DgKFD0NGQ5QzV8NZCCdYPT2%2BwM%2Be%2Fiyrv5mabwfPPP69oHARCPlzdkq%2FL813AMNmopSfJ8LaVJ87XS18Wh1u08T%2BuPvlTLYB06aUt9aMuVsFwLPCZGGK6WCxdRcw6OpjeyHsDtMBixGqR8HDNqNKxwbpBPRYEhMrpyTPSeT2FPgofNBs9GORjTEmzaRQWPp6vKXmtEpkdt2F4P%2B3nB6%2BGD4gwk9DkvQY6pgFp7t0zR7Hfd8e3zvr4GUTFUDSjBKA1s%2FRHkyeS5is07mHtCvxu1ejLIF5bIFsZaUe5HTwnqJN3p8Pu%2B3MAbsTOt%2BDkWtFfdqfkxJ9YSy649MZsBWUMh1BVmbe%2B4350GwKpeZYXZdRmE9t5tHo3gsVmamQBMkx12aq%2BmXeAOsyU%2FAMnv8E195QWPiDpSQ4%2B2ajhH2QXOCDlvxMC1AE6ABbYRL%2B4bbvU&X-Amz-Signature=c1f2c25f7c22520ce087d08edb6930b7c3e56d4de5f903584cc6e2887210ed6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQX4FL3Y%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk77ZlIDP3FkSY2cwZBwvDIiCzddaHykhYaHOVpEL20AiA%2FRsqjpxDooPZbiLBcUwDlJuJraPo0wqaru8DLU3fTviqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW5T5FBLhPtZ5Bfm6KtwD7L%2B%2BZE%2FHabeRwqg4NSxqA8q%2F33ifGkTPfjXZXEVJMLEri5a1vk7%2FcdEhI5pB32medf4MxLx4P212dW1rWKdCuCaCqHrGSGOSf8Zr%2Ft95cmgNNlx5woiNxN4wTv4XpVab1wj6M7m3OW4Vw7FHOnH14lLzq79I%2BxGJ%2BNvMTcc4j6FU6TAm3vjJ%2F%2FD0TR%2BMU4%2BZUSSw6wlFlnUIlUUpZgJica%2FqK3SYbRJtlG1gJVGokWowhioPffLD2%2Bdnbs8GU8pXWWGmy4L1F647bzaCocYXpPyjGRyMnQzLbmjd1e4kDgLnIjYH4EkcGWgVcFChgCx4SYcNuu96MQ2kbYhzJfdy0372kBm7dAcrtr9%2F4bV6RAqUXirhQ5VnUkCgzHCgQQqu0HxrMZt1db%2FmwfKY4NDMVF0mEoCcAxYmdP5DgKFD0NGQ5QzV8NZCCdYPT2%2BwM%2Be%2Fiyrv5mabwfPPP69oHARCPlzdkq%2FL813AMNmopSfJ8LaVJ87XS18Wh1u08T%2BuPvlTLYB06aUt9aMuVsFwLPCZGGK6WCxdRcw6OpjeyHsDtMBixGqR8HDNqNKxwbpBPRYEhMrpyTPSeT2FPgofNBs9GORjTEmzaRQWPp6vKXmtEpkdt2F4P%2B3nB6%2BGD4gwk9DkvQY6pgFp7t0zR7Hfd8e3zvr4GUTFUDSjBKA1s%2FRHkyeS5is07mHtCvxu1ejLIF5bIFsZaUe5HTwnqJN3p8Pu%2B3MAbsTOt%2BDkWtFfdqfkxJ9YSy649MZsBWUMh1BVmbe%2B4350GwKpeZYXZdRmE9t5tHo3gsVmamQBMkx12aq%2BmXeAOsyU%2FAMnv8E195QWPiDpSQ4%2B2ajhH2QXOCDlvxMC1AE6ABbYRL%2B4bbvU&X-Amz-Signature=5dd9686ed38baca9af53f682ecd3ad1123c7c5ce54f279a8ff1b5527a21fb9a2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQX4FL3Y%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk77ZlIDP3FkSY2cwZBwvDIiCzddaHykhYaHOVpEL20AiA%2FRsqjpxDooPZbiLBcUwDlJuJraPo0wqaru8DLU3fTviqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW5T5FBLhPtZ5Bfm6KtwD7L%2B%2BZE%2FHabeRwqg4NSxqA8q%2F33ifGkTPfjXZXEVJMLEri5a1vk7%2FcdEhI5pB32medf4MxLx4P212dW1rWKdCuCaCqHrGSGOSf8Zr%2Ft95cmgNNlx5woiNxN4wTv4XpVab1wj6M7m3OW4Vw7FHOnH14lLzq79I%2BxGJ%2BNvMTcc4j6FU6TAm3vjJ%2F%2FD0TR%2BMU4%2BZUSSw6wlFlnUIlUUpZgJica%2FqK3SYbRJtlG1gJVGokWowhioPffLD2%2Bdnbs8GU8pXWWGmy4L1F647bzaCocYXpPyjGRyMnQzLbmjd1e4kDgLnIjYH4EkcGWgVcFChgCx4SYcNuu96MQ2kbYhzJfdy0372kBm7dAcrtr9%2F4bV6RAqUXirhQ5VnUkCgzHCgQQqu0HxrMZt1db%2FmwfKY4NDMVF0mEoCcAxYmdP5DgKFD0NGQ5QzV8NZCCdYPT2%2BwM%2Be%2Fiyrv5mabwfPPP69oHARCPlzdkq%2FL813AMNmopSfJ8LaVJ87XS18Wh1u08T%2BuPvlTLYB06aUt9aMuVsFwLPCZGGK6WCxdRcw6OpjeyHsDtMBixGqR8HDNqNKxwbpBPRYEhMrpyTPSeT2FPgofNBs9GORjTEmzaRQWPp6vKXmtEpkdt2F4P%2B3nB6%2BGD4gwk9DkvQY6pgFp7t0zR7Hfd8e3zvr4GUTFUDSjBKA1s%2FRHkyeS5is07mHtCvxu1ejLIF5bIFsZaUe5HTwnqJN3p8Pu%2B3MAbsTOt%2BDkWtFfdqfkxJ9YSy649MZsBWUMh1BVmbe%2B4350GwKpeZYXZdRmE9t5tHo3gsVmamQBMkx12aq%2BmXeAOsyU%2FAMnv8E195QWPiDpSQ4%2B2ajhH2QXOCDlvxMC1AE6ABbYRL%2B4bbvU&X-Amz-Signature=40051a0dba559b825a0f6edc7c3d8da9ab4cc4620aa38e87746bbad7091c2ea5&X-Amz-SignedHeaders=host&x-id=GetObject)
