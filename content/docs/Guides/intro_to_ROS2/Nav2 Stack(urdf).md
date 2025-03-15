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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5DPHWB%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVFzGPolTnSJFq6XbWVsM4710%2BgCE5eJ7gBS3wvvtrhAiBJuhAnl%2Fh%2F60t5pGLKmSli5FbHRRUjC1PzLOTjUfxvNSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMQxrqRzPOMjkSFH%2FmKtwDBiJpcQdj5bd6u%2BPSzaM%2FLefp1SmCafX%2BOE3sz58c5QNwQ1UvVnoPXzey%2Bv2n4LLpqUybsxC5ztxwo4XqNpr%2FV0d9UTD%2FCf9bLFXMbaciZSDCnQ6xla8WrUyNje1M7ZLR1BgFH0cgLX%2BJN5c%2B84jp0fRKiXE6Y7UwP3sZZ5fJ6qCVTyYgJKpQ00vg3%2F%2B26lYrf7EzcG%2BfNW1plcrRZPNkuHUFHlGfVXWqT3OQCFh7mBAYbgHyRvQRtcgwy13EqlPu5XWAMZUeMzficnQukcTHWZX8VYdxFiljrdfzqD8bu2ALdaHzCBamUYIw0HRz0NXAWaRrWnYA%2FkczJumxRnZIlJ4kFmMHqfvZpvfaGrYqztZULGY3XLrNuwUGQ%2FdHdm44U8BZPysyxCH%2FbuZfW7TWIJCJ6mOFCYm5PtprRTbMIdaWymlRwHvam%2B3ZHb2%2BXn5eAyH4W2IrgdvDYgziHnzjchYcfJUcaMwLxhe5zu3aSjHX605CVIek%2FymrEjTaicHWnMAHZAu6IMsEYK7C4iXG1H08Zx4guz4QMhnWXZL9iPxqUTVep5FqTOh%2Bd09g%2BWLR7uACYYXd4YLGZ%2FQWnmiY81knujmO5axmb1ZleOhKqhAPcywEpyZgmyWsJvgwx43XvgY6pgGItynKm720SCSDU37hon3Il1XwDWozhI6hL7IoF16kVZ%2BkMDxAODi6OxYT4cj7Q9U6sRy18MuayJPtdciyORDpho%2BmigSTpZtlEzbVL3iIbKc0v4qqbeTkbHbQZSDyi36QME3UI1L1aRH4TDU5x15Keh3vmU8kGKj0TrzknhDajnZeeVmohhnaxN9i65YA6%2FvocOZRv5aNYgKtH%2BG9PWD8OI477E%2Bl&X-Amz-Signature=5fa9f011332d8713e9cde1c7e95fc01ffc27b7c0f94652b50b6bc8d79dd914ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5DPHWB%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVFzGPolTnSJFq6XbWVsM4710%2BgCE5eJ7gBS3wvvtrhAiBJuhAnl%2Fh%2F60t5pGLKmSli5FbHRRUjC1PzLOTjUfxvNSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMQxrqRzPOMjkSFH%2FmKtwDBiJpcQdj5bd6u%2BPSzaM%2FLefp1SmCafX%2BOE3sz58c5QNwQ1UvVnoPXzey%2Bv2n4LLpqUybsxC5ztxwo4XqNpr%2FV0d9UTD%2FCf9bLFXMbaciZSDCnQ6xla8WrUyNje1M7ZLR1BgFH0cgLX%2BJN5c%2B84jp0fRKiXE6Y7UwP3sZZ5fJ6qCVTyYgJKpQ00vg3%2F%2B26lYrf7EzcG%2BfNW1plcrRZPNkuHUFHlGfVXWqT3OQCFh7mBAYbgHyRvQRtcgwy13EqlPu5XWAMZUeMzficnQukcTHWZX8VYdxFiljrdfzqD8bu2ALdaHzCBamUYIw0HRz0NXAWaRrWnYA%2FkczJumxRnZIlJ4kFmMHqfvZpvfaGrYqztZULGY3XLrNuwUGQ%2FdHdm44U8BZPysyxCH%2FbuZfW7TWIJCJ6mOFCYm5PtprRTbMIdaWymlRwHvam%2B3ZHb2%2BXn5eAyH4W2IrgdvDYgziHnzjchYcfJUcaMwLxhe5zu3aSjHX605CVIek%2FymrEjTaicHWnMAHZAu6IMsEYK7C4iXG1H08Zx4guz4QMhnWXZL9iPxqUTVep5FqTOh%2Bd09g%2BWLR7uACYYXd4YLGZ%2FQWnmiY81knujmO5axmb1ZleOhKqhAPcywEpyZgmyWsJvgwx43XvgY6pgGItynKm720SCSDU37hon3Il1XwDWozhI6hL7IoF16kVZ%2BkMDxAODi6OxYT4cj7Q9U6sRy18MuayJPtdciyORDpho%2BmigSTpZtlEzbVL3iIbKc0v4qqbeTkbHbQZSDyi36QME3UI1L1aRH4TDU5x15Keh3vmU8kGKj0TrzknhDajnZeeVmohhnaxN9i65YA6%2FvocOZRv5aNYgKtH%2BG9PWD8OI477E%2Bl&X-Amz-Signature=6ac9ba6eab1f47b5394d8dca49943260693b0c5f712741f98f29c602ebef3d36&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5DPHWB%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVFzGPolTnSJFq6XbWVsM4710%2BgCE5eJ7gBS3wvvtrhAiBJuhAnl%2Fh%2F60t5pGLKmSli5FbHRRUjC1PzLOTjUfxvNSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMQxrqRzPOMjkSFH%2FmKtwDBiJpcQdj5bd6u%2BPSzaM%2FLefp1SmCafX%2BOE3sz58c5QNwQ1UvVnoPXzey%2Bv2n4LLpqUybsxC5ztxwo4XqNpr%2FV0d9UTD%2FCf9bLFXMbaciZSDCnQ6xla8WrUyNje1M7ZLR1BgFH0cgLX%2BJN5c%2B84jp0fRKiXE6Y7UwP3sZZ5fJ6qCVTyYgJKpQ00vg3%2F%2B26lYrf7EzcG%2BfNW1plcrRZPNkuHUFHlGfVXWqT3OQCFh7mBAYbgHyRvQRtcgwy13EqlPu5XWAMZUeMzficnQukcTHWZX8VYdxFiljrdfzqD8bu2ALdaHzCBamUYIw0HRz0NXAWaRrWnYA%2FkczJumxRnZIlJ4kFmMHqfvZpvfaGrYqztZULGY3XLrNuwUGQ%2FdHdm44U8BZPysyxCH%2FbuZfW7TWIJCJ6mOFCYm5PtprRTbMIdaWymlRwHvam%2B3ZHb2%2BXn5eAyH4W2IrgdvDYgziHnzjchYcfJUcaMwLxhe5zu3aSjHX605CVIek%2FymrEjTaicHWnMAHZAu6IMsEYK7C4iXG1H08Zx4guz4QMhnWXZL9iPxqUTVep5FqTOh%2Bd09g%2BWLR7uACYYXd4YLGZ%2FQWnmiY81knujmO5axmb1ZleOhKqhAPcywEpyZgmyWsJvgwx43XvgY6pgGItynKm720SCSDU37hon3Il1XwDWozhI6hL7IoF16kVZ%2BkMDxAODi6OxYT4cj7Q9U6sRy18MuayJPtdciyORDpho%2BmigSTpZtlEzbVL3iIbKc0v4qqbeTkbHbQZSDyi36QME3UI1L1aRH4TDU5x15Keh3vmU8kGKj0TrzknhDajnZeeVmohhnaxN9i65YA6%2FvocOZRv5aNYgKtH%2BG9PWD8OI477E%2Bl&X-Amz-Signature=ae945205f6d9ef3cc26c0aa2d28f236b88d7b64cbe9a666a5312e1d2d8cadff3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5DPHWB%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVFzGPolTnSJFq6XbWVsM4710%2BgCE5eJ7gBS3wvvtrhAiBJuhAnl%2Fh%2F60t5pGLKmSli5FbHRRUjC1PzLOTjUfxvNSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMQxrqRzPOMjkSFH%2FmKtwDBiJpcQdj5bd6u%2BPSzaM%2FLefp1SmCafX%2BOE3sz58c5QNwQ1UvVnoPXzey%2Bv2n4LLpqUybsxC5ztxwo4XqNpr%2FV0d9UTD%2FCf9bLFXMbaciZSDCnQ6xla8WrUyNje1M7ZLR1BgFH0cgLX%2BJN5c%2B84jp0fRKiXE6Y7UwP3sZZ5fJ6qCVTyYgJKpQ00vg3%2F%2B26lYrf7EzcG%2BfNW1plcrRZPNkuHUFHlGfVXWqT3OQCFh7mBAYbgHyRvQRtcgwy13EqlPu5XWAMZUeMzficnQukcTHWZX8VYdxFiljrdfzqD8bu2ALdaHzCBamUYIw0HRz0NXAWaRrWnYA%2FkczJumxRnZIlJ4kFmMHqfvZpvfaGrYqztZULGY3XLrNuwUGQ%2FdHdm44U8BZPysyxCH%2FbuZfW7TWIJCJ6mOFCYm5PtprRTbMIdaWymlRwHvam%2B3ZHb2%2BXn5eAyH4W2IrgdvDYgziHnzjchYcfJUcaMwLxhe5zu3aSjHX605CVIek%2FymrEjTaicHWnMAHZAu6IMsEYK7C4iXG1H08Zx4guz4QMhnWXZL9iPxqUTVep5FqTOh%2Bd09g%2BWLR7uACYYXd4YLGZ%2FQWnmiY81knujmO5axmb1ZleOhKqhAPcywEpyZgmyWsJvgwx43XvgY6pgGItynKm720SCSDU37hon3Il1XwDWozhI6hL7IoF16kVZ%2BkMDxAODi6OxYT4cj7Q9U6sRy18MuayJPtdciyORDpho%2BmigSTpZtlEzbVL3iIbKc0v4qqbeTkbHbQZSDyi36QME3UI1L1aRH4TDU5x15Keh3vmU8kGKj0TrzknhDajnZeeVmohhnaxN9i65YA6%2FvocOZRv5aNYgKtH%2BG9PWD8OI477E%2Bl&X-Amz-Signature=3ef3c8c35a1e20b7195f449d19c6b7dee71ed9119e480a54e74fd1aebfcb1b39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5DPHWB%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVFzGPolTnSJFq6XbWVsM4710%2BgCE5eJ7gBS3wvvtrhAiBJuhAnl%2Fh%2F60t5pGLKmSli5FbHRRUjC1PzLOTjUfxvNSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMQxrqRzPOMjkSFH%2FmKtwDBiJpcQdj5bd6u%2BPSzaM%2FLefp1SmCafX%2BOE3sz58c5QNwQ1UvVnoPXzey%2Bv2n4LLpqUybsxC5ztxwo4XqNpr%2FV0d9UTD%2FCf9bLFXMbaciZSDCnQ6xla8WrUyNje1M7ZLR1BgFH0cgLX%2BJN5c%2B84jp0fRKiXE6Y7UwP3sZZ5fJ6qCVTyYgJKpQ00vg3%2F%2B26lYrf7EzcG%2BfNW1plcrRZPNkuHUFHlGfVXWqT3OQCFh7mBAYbgHyRvQRtcgwy13EqlPu5XWAMZUeMzficnQukcTHWZX8VYdxFiljrdfzqD8bu2ALdaHzCBamUYIw0HRz0NXAWaRrWnYA%2FkczJumxRnZIlJ4kFmMHqfvZpvfaGrYqztZULGY3XLrNuwUGQ%2FdHdm44U8BZPysyxCH%2FbuZfW7TWIJCJ6mOFCYm5PtprRTbMIdaWymlRwHvam%2B3ZHb2%2BXn5eAyH4W2IrgdvDYgziHnzjchYcfJUcaMwLxhe5zu3aSjHX605CVIek%2FymrEjTaicHWnMAHZAu6IMsEYK7C4iXG1H08Zx4guz4QMhnWXZL9iPxqUTVep5FqTOh%2Bd09g%2BWLR7uACYYXd4YLGZ%2FQWnmiY81knujmO5axmb1ZleOhKqhAPcywEpyZgmyWsJvgwx43XvgY6pgGItynKm720SCSDU37hon3Il1XwDWozhI6hL7IoF16kVZ%2BkMDxAODi6OxYT4cj7Q9U6sRy18MuayJPtdciyORDpho%2BmigSTpZtlEzbVL3iIbKc0v4qqbeTkbHbQZSDyi36QME3UI1L1aRH4TDU5x15Keh3vmU8kGKj0TrzknhDajnZeeVmohhnaxN9i65YA6%2FvocOZRv5aNYgKtH%2BG9PWD8OI477E%2Bl&X-Amz-Signature=51aff5f6c25c5471069fe852b1ec62c26ad931790b6c9512d5060d02828bd19f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5DPHWB%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVFzGPolTnSJFq6XbWVsM4710%2BgCE5eJ7gBS3wvvtrhAiBJuhAnl%2Fh%2F60t5pGLKmSli5FbHRRUjC1PzLOTjUfxvNSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMQxrqRzPOMjkSFH%2FmKtwDBiJpcQdj5bd6u%2BPSzaM%2FLefp1SmCafX%2BOE3sz58c5QNwQ1UvVnoPXzey%2Bv2n4LLpqUybsxC5ztxwo4XqNpr%2FV0d9UTD%2FCf9bLFXMbaciZSDCnQ6xla8WrUyNje1M7ZLR1BgFH0cgLX%2BJN5c%2B84jp0fRKiXE6Y7UwP3sZZ5fJ6qCVTyYgJKpQ00vg3%2F%2B26lYrf7EzcG%2BfNW1plcrRZPNkuHUFHlGfVXWqT3OQCFh7mBAYbgHyRvQRtcgwy13EqlPu5XWAMZUeMzficnQukcTHWZX8VYdxFiljrdfzqD8bu2ALdaHzCBamUYIw0HRz0NXAWaRrWnYA%2FkczJumxRnZIlJ4kFmMHqfvZpvfaGrYqztZULGY3XLrNuwUGQ%2FdHdm44U8BZPysyxCH%2FbuZfW7TWIJCJ6mOFCYm5PtprRTbMIdaWymlRwHvam%2B3ZHb2%2BXn5eAyH4W2IrgdvDYgziHnzjchYcfJUcaMwLxhe5zu3aSjHX605CVIek%2FymrEjTaicHWnMAHZAu6IMsEYK7C4iXG1H08Zx4guz4QMhnWXZL9iPxqUTVep5FqTOh%2Bd09g%2BWLR7uACYYXd4YLGZ%2FQWnmiY81knujmO5axmb1ZleOhKqhAPcywEpyZgmyWsJvgwx43XvgY6pgGItynKm720SCSDU37hon3Il1XwDWozhI6hL7IoF16kVZ%2BkMDxAODi6OxYT4cj7Q9U6sRy18MuayJPtdciyORDpho%2BmigSTpZtlEzbVL3iIbKc0v4qqbeTkbHbQZSDyi36QME3UI1L1aRH4TDU5x15Keh3vmU8kGKj0TrzknhDajnZeeVmohhnaxN9i65YA6%2FvocOZRv5aNYgKtH%2BG9PWD8OI477E%2Bl&X-Amz-Signature=b9a8658fab4e4232003cd399b8b48521e77e200fcb38ff9a2b073ac0ff530af0&X-Amz-SignedHeaders=host&x-id=GetObject)
