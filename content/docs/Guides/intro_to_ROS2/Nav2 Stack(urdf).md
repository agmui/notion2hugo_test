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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHNZ3TAT%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv5rL5wJt%2BxWESH74OSsP%2BLIs3KuBE2XuY%2BWcTvojJIAiBbXApymvsuy6TjyR0dw%2Bi34jCmCoL6cRRwXofA7CxefSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU42dH9cVfQCSISiSKtwDACZD45r%2BisqfDMeeAnYpm%2BPVbH%2B4GzU%2B%2BVeqmunY3m4Mt%2FWoT1sctzmVx9ScgbnGxc4qrPrpNDaVo63nKuFslYSg%2F5e1GC5aqUEhBcuDz7qw6zOmZX%2B3ZHVk0SBQp58hQIKEXbb9g2Sg0QzMXTc9CknS5WYJZfCqHP0OyZpwqnNjWfUzSsN421OPsH%2FUZLZuGn2X9kV8JQWBGFy7PK7FqghE3cYL00Plr2cj%2F4XrhVTKN8MCsJEzQxvwgZ3Wndr37ZLy7oCEkmuxNnhQJyvJpOkBLCdUZ2RhTigKZiFKh6HqlK%2FK%2FOTyxw2lfXbfNvKtoMZqgGovHBP2aCg0pBkjrKoVXQgrZ8Ni9V2xs7C2VyoLiLAbkl0RVdxwi1vfLypoQtFjsmjQoqaCNabyo27cIuukK9sIVRvA%2BjR5CTz%2FDtJUu2G2BImJPp%2FN6Lj4F6N9qB%2FGYJj%2Fhx5UbUzTKVsCamCgz1YiSmF2%2Fw7V6CB5eH5djtD4YN3Jg%2FDKZ0gHxdYPwzUk4eMetaxuGFsKb30VEEAw%2FZXocFHRBG73w8hNputW%2FRLTfKKkjGuqwCBmt6wQHX83KodFUfQVMhdx8hZvGOwSN2UoQeWD9PDqznrB2SUuoAENNC8s7nJtGNgwga2jwgY6pgFwUhwIsx2GqcELD4Ak4KJDS7DNnbknIjK9iGkS1jU1fWXDsuAbhQhSNOShbnWrLC%2BplovRILmmyBrWA5fxr0uL5QYnsMQc6JK%2FWUovrqwS20fxhAq1Naea7BFsxLwjPvukh6DYcqRftpoW2YsUkq42CANky2pIwWMS%2FvA4PqqDbpbLjgWfKF2d15lFOlbElY62h%2Br7BFSwAJ616qTdKAv%2BSCO6LvEJ&X-Amz-Signature=d2331fb4df8c85dee534bc5e7bb73e269e5e00d6181f092aca8fa4c01b5031a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHNZ3TAT%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv5rL5wJt%2BxWESH74OSsP%2BLIs3KuBE2XuY%2BWcTvojJIAiBbXApymvsuy6TjyR0dw%2Bi34jCmCoL6cRRwXofA7CxefSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU42dH9cVfQCSISiSKtwDACZD45r%2BisqfDMeeAnYpm%2BPVbH%2B4GzU%2B%2BVeqmunY3m4Mt%2FWoT1sctzmVx9ScgbnGxc4qrPrpNDaVo63nKuFslYSg%2F5e1GC5aqUEhBcuDz7qw6zOmZX%2B3ZHVk0SBQp58hQIKEXbb9g2Sg0QzMXTc9CknS5WYJZfCqHP0OyZpwqnNjWfUzSsN421OPsH%2FUZLZuGn2X9kV8JQWBGFy7PK7FqghE3cYL00Plr2cj%2F4XrhVTKN8MCsJEzQxvwgZ3Wndr37ZLy7oCEkmuxNnhQJyvJpOkBLCdUZ2RhTigKZiFKh6HqlK%2FK%2FOTyxw2lfXbfNvKtoMZqgGovHBP2aCg0pBkjrKoVXQgrZ8Ni9V2xs7C2VyoLiLAbkl0RVdxwi1vfLypoQtFjsmjQoqaCNabyo27cIuukK9sIVRvA%2BjR5CTz%2FDtJUu2G2BImJPp%2FN6Lj4F6N9qB%2FGYJj%2Fhx5UbUzTKVsCamCgz1YiSmF2%2Fw7V6CB5eH5djtD4YN3Jg%2FDKZ0gHxdYPwzUk4eMetaxuGFsKb30VEEAw%2FZXocFHRBG73w8hNputW%2FRLTfKKkjGuqwCBmt6wQHX83KodFUfQVMhdx8hZvGOwSN2UoQeWD9PDqznrB2SUuoAENNC8s7nJtGNgwga2jwgY6pgFwUhwIsx2GqcELD4Ak4KJDS7DNnbknIjK9iGkS1jU1fWXDsuAbhQhSNOShbnWrLC%2BplovRILmmyBrWA5fxr0uL5QYnsMQc6JK%2FWUovrqwS20fxhAq1Naea7BFsxLwjPvukh6DYcqRftpoW2YsUkq42CANky2pIwWMS%2FvA4PqqDbpbLjgWfKF2d15lFOlbElY62h%2Br7BFSwAJ616qTdKAv%2BSCO6LvEJ&X-Amz-Signature=820161af00bb8c78ea278068311ac6fc364b4a86e4cf5001b749b8a78349e7bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHNZ3TAT%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv5rL5wJt%2BxWESH74OSsP%2BLIs3KuBE2XuY%2BWcTvojJIAiBbXApymvsuy6TjyR0dw%2Bi34jCmCoL6cRRwXofA7CxefSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU42dH9cVfQCSISiSKtwDACZD45r%2BisqfDMeeAnYpm%2BPVbH%2B4GzU%2B%2BVeqmunY3m4Mt%2FWoT1sctzmVx9ScgbnGxc4qrPrpNDaVo63nKuFslYSg%2F5e1GC5aqUEhBcuDz7qw6zOmZX%2B3ZHVk0SBQp58hQIKEXbb9g2Sg0QzMXTc9CknS5WYJZfCqHP0OyZpwqnNjWfUzSsN421OPsH%2FUZLZuGn2X9kV8JQWBGFy7PK7FqghE3cYL00Plr2cj%2F4XrhVTKN8MCsJEzQxvwgZ3Wndr37ZLy7oCEkmuxNnhQJyvJpOkBLCdUZ2RhTigKZiFKh6HqlK%2FK%2FOTyxw2lfXbfNvKtoMZqgGovHBP2aCg0pBkjrKoVXQgrZ8Ni9V2xs7C2VyoLiLAbkl0RVdxwi1vfLypoQtFjsmjQoqaCNabyo27cIuukK9sIVRvA%2BjR5CTz%2FDtJUu2G2BImJPp%2FN6Lj4F6N9qB%2FGYJj%2Fhx5UbUzTKVsCamCgz1YiSmF2%2Fw7V6CB5eH5djtD4YN3Jg%2FDKZ0gHxdYPwzUk4eMetaxuGFsKb30VEEAw%2FZXocFHRBG73w8hNputW%2FRLTfKKkjGuqwCBmt6wQHX83KodFUfQVMhdx8hZvGOwSN2UoQeWD9PDqznrB2SUuoAENNC8s7nJtGNgwga2jwgY6pgFwUhwIsx2GqcELD4Ak4KJDS7DNnbknIjK9iGkS1jU1fWXDsuAbhQhSNOShbnWrLC%2BplovRILmmyBrWA5fxr0uL5QYnsMQc6JK%2FWUovrqwS20fxhAq1Naea7BFsxLwjPvukh6DYcqRftpoW2YsUkq42CANky2pIwWMS%2FvA4PqqDbpbLjgWfKF2d15lFOlbElY62h%2Br7BFSwAJ616qTdKAv%2BSCO6LvEJ&X-Amz-Signature=33c8c871bdb8a13ad6af3c0ed91e6d41d2f26e5d071d49dcf19a66f0d6b8869a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHNZ3TAT%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv5rL5wJt%2BxWESH74OSsP%2BLIs3KuBE2XuY%2BWcTvojJIAiBbXApymvsuy6TjyR0dw%2Bi34jCmCoL6cRRwXofA7CxefSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU42dH9cVfQCSISiSKtwDACZD45r%2BisqfDMeeAnYpm%2BPVbH%2B4GzU%2B%2BVeqmunY3m4Mt%2FWoT1sctzmVx9ScgbnGxc4qrPrpNDaVo63nKuFslYSg%2F5e1GC5aqUEhBcuDz7qw6zOmZX%2B3ZHVk0SBQp58hQIKEXbb9g2Sg0QzMXTc9CknS5WYJZfCqHP0OyZpwqnNjWfUzSsN421OPsH%2FUZLZuGn2X9kV8JQWBGFy7PK7FqghE3cYL00Plr2cj%2F4XrhVTKN8MCsJEzQxvwgZ3Wndr37ZLy7oCEkmuxNnhQJyvJpOkBLCdUZ2RhTigKZiFKh6HqlK%2FK%2FOTyxw2lfXbfNvKtoMZqgGovHBP2aCg0pBkjrKoVXQgrZ8Ni9V2xs7C2VyoLiLAbkl0RVdxwi1vfLypoQtFjsmjQoqaCNabyo27cIuukK9sIVRvA%2BjR5CTz%2FDtJUu2G2BImJPp%2FN6Lj4F6N9qB%2FGYJj%2Fhx5UbUzTKVsCamCgz1YiSmF2%2Fw7V6CB5eH5djtD4YN3Jg%2FDKZ0gHxdYPwzUk4eMetaxuGFsKb30VEEAw%2FZXocFHRBG73w8hNputW%2FRLTfKKkjGuqwCBmt6wQHX83KodFUfQVMhdx8hZvGOwSN2UoQeWD9PDqznrB2SUuoAENNC8s7nJtGNgwga2jwgY6pgFwUhwIsx2GqcELD4Ak4KJDS7DNnbknIjK9iGkS1jU1fWXDsuAbhQhSNOShbnWrLC%2BplovRILmmyBrWA5fxr0uL5QYnsMQc6JK%2FWUovrqwS20fxhAq1Naea7BFsxLwjPvukh6DYcqRftpoW2YsUkq42CANky2pIwWMS%2FvA4PqqDbpbLjgWfKF2d15lFOlbElY62h%2Br7BFSwAJ616qTdKAv%2BSCO6LvEJ&X-Amz-Signature=727a65578ac5986ec71e8267fcfb7d65777aee770cf95edc8ee6596b7e733b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHNZ3TAT%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv5rL5wJt%2BxWESH74OSsP%2BLIs3KuBE2XuY%2BWcTvojJIAiBbXApymvsuy6TjyR0dw%2Bi34jCmCoL6cRRwXofA7CxefSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU42dH9cVfQCSISiSKtwDACZD45r%2BisqfDMeeAnYpm%2BPVbH%2B4GzU%2B%2BVeqmunY3m4Mt%2FWoT1sctzmVx9ScgbnGxc4qrPrpNDaVo63nKuFslYSg%2F5e1GC5aqUEhBcuDz7qw6zOmZX%2B3ZHVk0SBQp58hQIKEXbb9g2Sg0QzMXTc9CknS5WYJZfCqHP0OyZpwqnNjWfUzSsN421OPsH%2FUZLZuGn2X9kV8JQWBGFy7PK7FqghE3cYL00Plr2cj%2F4XrhVTKN8MCsJEzQxvwgZ3Wndr37ZLy7oCEkmuxNnhQJyvJpOkBLCdUZ2RhTigKZiFKh6HqlK%2FK%2FOTyxw2lfXbfNvKtoMZqgGovHBP2aCg0pBkjrKoVXQgrZ8Ni9V2xs7C2VyoLiLAbkl0RVdxwi1vfLypoQtFjsmjQoqaCNabyo27cIuukK9sIVRvA%2BjR5CTz%2FDtJUu2G2BImJPp%2FN6Lj4F6N9qB%2FGYJj%2Fhx5UbUzTKVsCamCgz1YiSmF2%2Fw7V6CB5eH5djtD4YN3Jg%2FDKZ0gHxdYPwzUk4eMetaxuGFsKb30VEEAw%2FZXocFHRBG73w8hNputW%2FRLTfKKkjGuqwCBmt6wQHX83KodFUfQVMhdx8hZvGOwSN2UoQeWD9PDqznrB2SUuoAENNC8s7nJtGNgwga2jwgY6pgFwUhwIsx2GqcELD4Ak4KJDS7DNnbknIjK9iGkS1jU1fWXDsuAbhQhSNOShbnWrLC%2BplovRILmmyBrWA5fxr0uL5QYnsMQc6JK%2FWUovrqwS20fxhAq1Naea7BFsxLwjPvukh6DYcqRftpoW2YsUkq42CANky2pIwWMS%2FvA4PqqDbpbLjgWfKF2d15lFOlbElY62h%2Br7BFSwAJ616qTdKAv%2BSCO6LvEJ&X-Amz-Signature=26ae59838f2f02182e13383e2752c1b52037ab3fbcbf15d7f1697a97ed6b6fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHNZ3TAT%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv5rL5wJt%2BxWESH74OSsP%2BLIs3KuBE2XuY%2BWcTvojJIAiBbXApymvsuy6TjyR0dw%2Bi34jCmCoL6cRRwXofA7CxefSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU42dH9cVfQCSISiSKtwDACZD45r%2BisqfDMeeAnYpm%2BPVbH%2B4GzU%2B%2BVeqmunY3m4Mt%2FWoT1sctzmVx9ScgbnGxc4qrPrpNDaVo63nKuFslYSg%2F5e1GC5aqUEhBcuDz7qw6zOmZX%2B3ZHVk0SBQp58hQIKEXbb9g2Sg0QzMXTc9CknS5WYJZfCqHP0OyZpwqnNjWfUzSsN421OPsH%2FUZLZuGn2X9kV8JQWBGFy7PK7FqghE3cYL00Plr2cj%2F4XrhVTKN8MCsJEzQxvwgZ3Wndr37ZLy7oCEkmuxNnhQJyvJpOkBLCdUZ2RhTigKZiFKh6HqlK%2FK%2FOTyxw2lfXbfNvKtoMZqgGovHBP2aCg0pBkjrKoVXQgrZ8Ni9V2xs7C2VyoLiLAbkl0RVdxwi1vfLypoQtFjsmjQoqaCNabyo27cIuukK9sIVRvA%2BjR5CTz%2FDtJUu2G2BImJPp%2FN6Lj4F6N9qB%2FGYJj%2Fhx5UbUzTKVsCamCgz1YiSmF2%2Fw7V6CB5eH5djtD4YN3Jg%2FDKZ0gHxdYPwzUk4eMetaxuGFsKb30VEEAw%2FZXocFHRBG73w8hNputW%2FRLTfKKkjGuqwCBmt6wQHX83KodFUfQVMhdx8hZvGOwSN2UoQeWD9PDqznrB2SUuoAENNC8s7nJtGNgwga2jwgY6pgFwUhwIsx2GqcELD4Ak4KJDS7DNnbknIjK9iGkS1jU1fWXDsuAbhQhSNOShbnWrLC%2BplovRILmmyBrWA5fxr0uL5QYnsMQc6JK%2FWUovrqwS20fxhAq1Naea7BFsxLwjPvukh6DYcqRftpoW2YsUkq42CANky2pIwWMS%2FvA4PqqDbpbLjgWfKF2d15lFOlbElY62h%2Br7BFSwAJ616qTdKAv%2BSCO6LvEJ&X-Amz-Signature=d87d68aeed46129b782f0508c084fd05aef21e0d1fbf19c718226bf2d3acad98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
