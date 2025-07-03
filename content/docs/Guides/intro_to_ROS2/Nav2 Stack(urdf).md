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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H4WXMLL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD9qGBF4305rfqxN0quSbp2fsi9M8A9k1By7XqfRuTY0gIgFesBPqaIxum7%2Fdix%2BOzJMzwNum7pE0QhtgcZk6S3quYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIjFTitLfVHAxOixWSrcA0VHiOwqbuVSbKrBM%2FSozlRjgLqFgFtEjtbULkIPnyLH3hlJcfGiOLovQQvgE8GtpiLOsPrQQKJ0yK9Ca1jzb6MFY7ANbD02ZXVHSFghER7wa9QTO0kIL%2B9qvXMxwjhCNGmgktRWl%2Brfi2D8s%2FZLfcnGYXtDchheSo7Aug0HJ4aZTzArly926O47eeVGZFoU4uU8Tolitc%2BSxEG5QCmVGQHzrBwWUhSwxL9UN0mAVcr6RFxWA2%2F5AXZjcBnD3Sa%2F6Fwi%2FNGiQPPYNGEA0r3A2cNXtyRd9Xh8m7tLp4LzqC7nG4ow0tz69KtB32WJ8v9fAKbn4acP6tUyNxsLeBsl7vr3oR2Ubqq%2FOrqDIulywUjT9CehQjlvtW%2BceMHaOsgf%2BIpGQiIMGRIOpxsasFIW7yS7BJ0jpcCxaO9d%2FdL38ogBB7vxpcIN7263Jw3GOoYX9%2F3Vlm50D7Vcc47ewUgoEYdNpXLnqfRH8qivdWbp0QGTmAzrAKd9g4p%2BlyxKAQWQdPWanXUQ9WHmYNsCSUG9O3PFlLqxmVwEMAJgkjXzj2%2Bboii5%2FSxbXizGZGJ1kQ6r5e8Gve0fzZetm9jPmFh1tjGyDs4%2F2ORoIcYDwUmfWJhx0rP4sgy0LKGtWSZOMKnmmsMGOqUBGW36IbQS9X6E2QEdfeV3Fscw4Jqv5Q%2BnJk8K5dCup3v83BNKxFDJ8v7Se9q8AD%2BZtm4DcNALdyrMp0rvzOMxAhLwr2kxcMZs6LAqAVAgkz1PG%2FI8nNvisVVnNnx4Q0VMnGisWNngNxeG%2F8bnHi%2BtURLI9qU8%2BX1z%2B5kIwoS99F7oqHUGTrxO%2F6OPMYOYb55aXi%2BXk1sWwoDZhUNnkXpD1iLNKGKg&X-Amz-Signature=2762cd826a8deec17017f24bc0288338c0e9353cb6d8682bcd18b3d4caf80ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H4WXMLL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD9qGBF4305rfqxN0quSbp2fsi9M8A9k1By7XqfRuTY0gIgFesBPqaIxum7%2Fdix%2BOzJMzwNum7pE0QhtgcZk6S3quYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIjFTitLfVHAxOixWSrcA0VHiOwqbuVSbKrBM%2FSozlRjgLqFgFtEjtbULkIPnyLH3hlJcfGiOLovQQvgE8GtpiLOsPrQQKJ0yK9Ca1jzb6MFY7ANbD02ZXVHSFghER7wa9QTO0kIL%2B9qvXMxwjhCNGmgktRWl%2Brfi2D8s%2FZLfcnGYXtDchheSo7Aug0HJ4aZTzArly926O47eeVGZFoU4uU8Tolitc%2BSxEG5QCmVGQHzrBwWUhSwxL9UN0mAVcr6RFxWA2%2F5AXZjcBnD3Sa%2F6Fwi%2FNGiQPPYNGEA0r3A2cNXtyRd9Xh8m7tLp4LzqC7nG4ow0tz69KtB32WJ8v9fAKbn4acP6tUyNxsLeBsl7vr3oR2Ubqq%2FOrqDIulywUjT9CehQjlvtW%2BceMHaOsgf%2BIpGQiIMGRIOpxsasFIW7yS7BJ0jpcCxaO9d%2FdL38ogBB7vxpcIN7263Jw3GOoYX9%2F3Vlm50D7Vcc47ewUgoEYdNpXLnqfRH8qivdWbp0QGTmAzrAKd9g4p%2BlyxKAQWQdPWanXUQ9WHmYNsCSUG9O3PFlLqxmVwEMAJgkjXzj2%2Bboii5%2FSxbXizGZGJ1kQ6r5e8Gve0fzZetm9jPmFh1tjGyDs4%2F2ORoIcYDwUmfWJhx0rP4sgy0LKGtWSZOMKnmmsMGOqUBGW36IbQS9X6E2QEdfeV3Fscw4Jqv5Q%2BnJk8K5dCup3v83BNKxFDJ8v7Se9q8AD%2BZtm4DcNALdyrMp0rvzOMxAhLwr2kxcMZs6LAqAVAgkz1PG%2FI8nNvisVVnNnx4Q0VMnGisWNngNxeG%2F8bnHi%2BtURLI9qU8%2BX1z%2B5kIwoS99F7oqHUGTrxO%2F6OPMYOYb55aXi%2BXk1sWwoDZhUNnkXpD1iLNKGKg&X-Amz-Signature=f87f423872f642653c5076630d3bc39b66d9e34425513a3178e62cf74d25cfc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H4WXMLL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD9qGBF4305rfqxN0quSbp2fsi9M8A9k1By7XqfRuTY0gIgFesBPqaIxum7%2Fdix%2BOzJMzwNum7pE0QhtgcZk6S3quYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIjFTitLfVHAxOixWSrcA0VHiOwqbuVSbKrBM%2FSozlRjgLqFgFtEjtbULkIPnyLH3hlJcfGiOLovQQvgE8GtpiLOsPrQQKJ0yK9Ca1jzb6MFY7ANbD02ZXVHSFghER7wa9QTO0kIL%2B9qvXMxwjhCNGmgktRWl%2Brfi2D8s%2FZLfcnGYXtDchheSo7Aug0HJ4aZTzArly926O47eeVGZFoU4uU8Tolitc%2BSxEG5QCmVGQHzrBwWUhSwxL9UN0mAVcr6RFxWA2%2F5AXZjcBnD3Sa%2F6Fwi%2FNGiQPPYNGEA0r3A2cNXtyRd9Xh8m7tLp4LzqC7nG4ow0tz69KtB32WJ8v9fAKbn4acP6tUyNxsLeBsl7vr3oR2Ubqq%2FOrqDIulywUjT9CehQjlvtW%2BceMHaOsgf%2BIpGQiIMGRIOpxsasFIW7yS7BJ0jpcCxaO9d%2FdL38ogBB7vxpcIN7263Jw3GOoYX9%2F3Vlm50D7Vcc47ewUgoEYdNpXLnqfRH8qivdWbp0QGTmAzrAKd9g4p%2BlyxKAQWQdPWanXUQ9WHmYNsCSUG9O3PFlLqxmVwEMAJgkjXzj2%2Bboii5%2FSxbXizGZGJ1kQ6r5e8Gve0fzZetm9jPmFh1tjGyDs4%2F2ORoIcYDwUmfWJhx0rP4sgy0LKGtWSZOMKnmmsMGOqUBGW36IbQS9X6E2QEdfeV3Fscw4Jqv5Q%2BnJk8K5dCup3v83BNKxFDJ8v7Se9q8AD%2BZtm4DcNALdyrMp0rvzOMxAhLwr2kxcMZs6LAqAVAgkz1PG%2FI8nNvisVVnNnx4Q0VMnGisWNngNxeG%2F8bnHi%2BtURLI9qU8%2BX1z%2B5kIwoS99F7oqHUGTrxO%2F6OPMYOYb55aXi%2BXk1sWwoDZhUNnkXpD1iLNKGKg&X-Amz-Signature=200a9b7b9a573c2b8d62484f95af674f49134aeec4bf22f576d41f548aab19cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H4WXMLL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD9qGBF4305rfqxN0quSbp2fsi9M8A9k1By7XqfRuTY0gIgFesBPqaIxum7%2Fdix%2BOzJMzwNum7pE0QhtgcZk6S3quYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIjFTitLfVHAxOixWSrcA0VHiOwqbuVSbKrBM%2FSozlRjgLqFgFtEjtbULkIPnyLH3hlJcfGiOLovQQvgE8GtpiLOsPrQQKJ0yK9Ca1jzb6MFY7ANbD02ZXVHSFghER7wa9QTO0kIL%2B9qvXMxwjhCNGmgktRWl%2Brfi2D8s%2FZLfcnGYXtDchheSo7Aug0HJ4aZTzArly926O47eeVGZFoU4uU8Tolitc%2BSxEG5QCmVGQHzrBwWUhSwxL9UN0mAVcr6RFxWA2%2F5AXZjcBnD3Sa%2F6Fwi%2FNGiQPPYNGEA0r3A2cNXtyRd9Xh8m7tLp4LzqC7nG4ow0tz69KtB32WJ8v9fAKbn4acP6tUyNxsLeBsl7vr3oR2Ubqq%2FOrqDIulywUjT9CehQjlvtW%2BceMHaOsgf%2BIpGQiIMGRIOpxsasFIW7yS7BJ0jpcCxaO9d%2FdL38ogBB7vxpcIN7263Jw3GOoYX9%2F3Vlm50D7Vcc47ewUgoEYdNpXLnqfRH8qivdWbp0QGTmAzrAKd9g4p%2BlyxKAQWQdPWanXUQ9WHmYNsCSUG9O3PFlLqxmVwEMAJgkjXzj2%2Bboii5%2FSxbXizGZGJ1kQ6r5e8Gve0fzZetm9jPmFh1tjGyDs4%2F2ORoIcYDwUmfWJhx0rP4sgy0LKGtWSZOMKnmmsMGOqUBGW36IbQS9X6E2QEdfeV3Fscw4Jqv5Q%2BnJk8K5dCup3v83BNKxFDJ8v7Se9q8AD%2BZtm4DcNALdyrMp0rvzOMxAhLwr2kxcMZs6LAqAVAgkz1PG%2FI8nNvisVVnNnx4Q0VMnGisWNngNxeG%2F8bnHi%2BtURLI9qU8%2BX1z%2B5kIwoS99F7oqHUGTrxO%2F6OPMYOYb55aXi%2BXk1sWwoDZhUNnkXpD1iLNKGKg&X-Amz-Signature=9fb28d88b83edd5970c5c73a706f5aad7d1d5be837004bd8c2d6e5a1e10d22fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H4WXMLL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD9qGBF4305rfqxN0quSbp2fsi9M8A9k1By7XqfRuTY0gIgFesBPqaIxum7%2Fdix%2BOzJMzwNum7pE0QhtgcZk6S3quYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIjFTitLfVHAxOixWSrcA0VHiOwqbuVSbKrBM%2FSozlRjgLqFgFtEjtbULkIPnyLH3hlJcfGiOLovQQvgE8GtpiLOsPrQQKJ0yK9Ca1jzb6MFY7ANbD02ZXVHSFghER7wa9QTO0kIL%2B9qvXMxwjhCNGmgktRWl%2Brfi2D8s%2FZLfcnGYXtDchheSo7Aug0HJ4aZTzArly926O47eeVGZFoU4uU8Tolitc%2BSxEG5QCmVGQHzrBwWUhSwxL9UN0mAVcr6RFxWA2%2F5AXZjcBnD3Sa%2F6Fwi%2FNGiQPPYNGEA0r3A2cNXtyRd9Xh8m7tLp4LzqC7nG4ow0tz69KtB32WJ8v9fAKbn4acP6tUyNxsLeBsl7vr3oR2Ubqq%2FOrqDIulywUjT9CehQjlvtW%2BceMHaOsgf%2BIpGQiIMGRIOpxsasFIW7yS7BJ0jpcCxaO9d%2FdL38ogBB7vxpcIN7263Jw3GOoYX9%2F3Vlm50D7Vcc47ewUgoEYdNpXLnqfRH8qivdWbp0QGTmAzrAKd9g4p%2BlyxKAQWQdPWanXUQ9WHmYNsCSUG9O3PFlLqxmVwEMAJgkjXzj2%2Bboii5%2FSxbXizGZGJ1kQ6r5e8Gve0fzZetm9jPmFh1tjGyDs4%2F2ORoIcYDwUmfWJhx0rP4sgy0LKGtWSZOMKnmmsMGOqUBGW36IbQS9X6E2QEdfeV3Fscw4Jqv5Q%2BnJk8K5dCup3v83BNKxFDJ8v7Se9q8AD%2BZtm4DcNALdyrMp0rvzOMxAhLwr2kxcMZs6LAqAVAgkz1PG%2FI8nNvisVVnNnx4Q0VMnGisWNngNxeG%2F8bnHi%2BtURLI9qU8%2BX1z%2B5kIwoS99F7oqHUGTrxO%2F6OPMYOYb55aXi%2BXk1sWwoDZhUNnkXpD1iLNKGKg&X-Amz-Signature=c5fe2df1db05ee69586bc8f88e8391b095ef76bc3f155fa0fa740a05f427342d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H4WXMLL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD9qGBF4305rfqxN0quSbp2fsi9M8A9k1By7XqfRuTY0gIgFesBPqaIxum7%2Fdix%2BOzJMzwNum7pE0QhtgcZk6S3quYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIjFTitLfVHAxOixWSrcA0VHiOwqbuVSbKrBM%2FSozlRjgLqFgFtEjtbULkIPnyLH3hlJcfGiOLovQQvgE8GtpiLOsPrQQKJ0yK9Ca1jzb6MFY7ANbD02ZXVHSFghER7wa9QTO0kIL%2B9qvXMxwjhCNGmgktRWl%2Brfi2D8s%2FZLfcnGYXtDchheSo7Aug0HJ4aZTzArly926O47eeVGZFoU4uU8Tolitc%2BSxEG5QCmVGQHzrBwWUhSwxL9UN0mAVcr6RFxWA2%2F5AXZjcBnD3Sa%2F6Fwi%2FNGiQPPYNGEA0r3A2cNXtyRd9Xh8m7tLp4LzqC7nG4ow0tz69KtB32WJ8v9fAKbn4acP6tUyNxsLeBsl7vr3oR2Ubqq%2FOrqDIulywUjT9CehQjlvtW%2BceMHaOsgf%2BIpGQiIMGRIOpxsasFIW7yS7BJ0jpcCxaO9d%2FdL38ogBB7vxpcIN7263Jw3GOoYX9%2F3Vlm50D7Vcc47ewUgoEYdNpXLnqfRH8qivdWbp0QGTmAzrAKd9g4p%2BlyxKAQWQdPWanXUQ9WHmYNsCSUG9O3PFlLqxmVwEMAJgkjXzj2%2Bboii5%2FSxbXizGZGJ1kQ6r5e8Gve0fzZetm9jPmFh1tjGyDs4%2F2ORoIcYDwUmfWJhx0rP4sgy0LKGtWSZOMKnmmsMGOqUBGW36IbQS9X6E2QEdfeV3Fscw4Jqv5Q%2BnJk8K5dCup3v83BNKxFDJ8v7Se9q8AD%2BZtm4DcNALdyrMp0rvzOMxAhLwr2kxcMZs6LAqAVAgkz1PG%2FI8nNvisVVnNnx4Q0VMnGisWNngNxeG%2F8bnHi%2BtURLI9qU8%2BX1z%2B5kIwoS99F7oqHUGTrxO%2F6OPMYOYb55aXi%2BXk1sWwoDZhUNnkXpD1iLNKGKg&X-Amz-Signature=c38944f25df64136b3c2a7e83535de005cc1044814723b2f10d84c869953a05a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
