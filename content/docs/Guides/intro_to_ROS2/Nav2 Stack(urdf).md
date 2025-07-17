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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NHJAUGA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDGO26p%2Bs2KSh63WVhVFJHB4P%2FQPAktRBbQB2PMakFsNQIgLNyLYTSrfqx5zJlezg4JL%2F9g5hcBbqDoopkey1TgECYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJ2MNsqu8CseEJm9eyrcA5%2BKfcIqz2A%2B3XFhIBgtMfONf4Nm83eYuA7SfAGkuJkG%2BqVPzW%2F1nLyAfFNgkyPaQt18Oma4c9FjJ648l8lyqjegDn41rTQGANJYihHHjkbfxzkyr6xCXZS2AunSXRoZ1wHDeVGBKCByIbywdr%2FsAL7iTVqOQtiF1jinrbFPc9CImM7Psx4wW%2FviOe8ndpwaG9t2Q5qILwbSUOvTo%2F23RcqjpcvtX2j9%2BoAX5567jVq6mI%2FHtU1FkwY2zI0rE4NKZ4QGNhR4fTQAvfrNl0hVT2F4ILnMpqd8d6Lla0XdiZi%2BJ72a4at5h3KFJvTGiZpJH3pmIdAf%2B29kpCedBgBsgeIykoSNE6rPNG%2FRHqOuFciCCoZ4NtHPjSKO1mQI7KGa9VMJFA92MR2QPa9RLLkLuVADeAlGqtP8bj9DVt0ItBX695tqaJmDlUNNHpIc2P44JKaWH7yEBLGg%2BufXPQ1xLd8oFYwJMji6odGseAeyTEHVgmpfzrGcUXuOplALEg1UXyHqvgcRcVxKlZwtrRuwV%2BvFwC2CQJ9cRYfZaEjC92TlF1iKATTpIehTajJF0H283PAJRzBuZevFmGVyyLwQcYISWwSJVBhw3KzCrxnyKx%2BoI31J0Gyej4XAKmdvMMi35cMGOqUBHbiB4ELy8GU96uYl%2FVfV6teWXaBXlNc4keHvrNgPlJk9A%2FEWC0FVy0Y9trUCvGwf8zAj8cW5aTpmsGys%2BErGa9Jc859WHJrZEmoH4NXKGFHwqEf8VwhDjiv5HY3yPF1QQvx%2BL%2FK%2B0Ssnpvd42G2vYbqj5w7eDINl8%2FXSEXhgyeTLpKhXh2EPpLjXzHOiFn%2FeiJMrYwH0gju804eAuRuJlGHkhGxM&X-Amz-Signature=1fcf3e469351f7c4f22657b67b68129913bd21f30eae3895a8e44de440615ab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NHJAUGA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDGO26p%2Bs2KSh63WVhVFJHB4P%2FQPAktRBbQB2PMakFsNQIgLNyLYTSrfqx5zJlezg4JL%2F9g5hcBbqDoopkey1TgECYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJ2MNsqu8CseEJm9eyrcA5%2BKfcIqz2A%2B3XFhIBgtMfONf4Nm83eYuA7SfAGkuJkG%2BqVPzW%2F1nLyAfFNgkyPaQt18Oma4c9FjJ648l8lyqjegDn41rTQGANJYihHHjkbfxzkyr6xCXZS2AunSXRoZ1wHDeVGBKCByIbywdr%2FsAL7iTVqOQtiF1jinrbFPc9CImM7Psx4wW%2FviOe8ndpwaG9t2Q5qILwbSUOvTo%2F23RcqjpcvtX2j9%2BoAX5567jVq6mI%2FHtU1FkwY2zI0rE4NKZ4QGNhR4fTQAvfrNl0hVT2F4ILnMpqd8d6Lla0XdiZi%2BJ72a4at5h3KFJvTGiZpJH3pmIdAf%2B29kpCedBgBsgeIykoSNE6rPNG%2FRHqOuFciCCoZ4NtHPjSKO1mQI7KGa9VMJFA92MR2QPa9RLLkLuVADeAlGqtP8bj9DVt0ItBX695tqaJmDlUNNHpIc2P44JKaWH7yEBLGg%2BufXPQ1xLd8oFYwJMji6odGseAeyTEHVgmpfzrGcUXuOplALEg1UXyHqvgcRcVxKlZwtrRuwV%2BvFwC2CQJ9cRYfZaEjC92TlF1iKATTpIehTajJF0H283PAJRzBuZevFmGVyyLwQcYISWwSJVBhw3KzCrxnyKx%2BoI31J0Gyej4XAKmdvMMi35cMGOqUBHbiB4ELy8GU96uYl%2FVfV6teWXaBXlNc4keHvrNgPlJk9A%2FEWC0FVy0Y9trUCvGwf8zAj8cW5aTpmsGys%2BErGa9Jc859WHJrZEmoH4NXKGFHwqEf8VwhDjiv5HY3yPF1QQvx%2BL%2FK%2B0Ssnpvd42G2vYbqj5w7eDINl8%2FXSEXhgyeTLpKhXh2EPpLjXzHOiFn%2FeiJMrYwH0gju804eAuRuJlGHkhGxM&X-Amz-Signature=58fc1c76da8b9da44d66309ae086a273aa5c368fbf28fa3b315e86c6931e1e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NHJAUGA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDGO26p%2Bs2KSh63WVhVFJHB4P%2FQPAktRBbQB2PMakFsNQIgLNyLYTSrfqx5zJlezg4JL%2F9g5hcBbqDoopkey1TgECYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJ2MNsqu8CseEJm9eyrcA5%2BKfcIqz2A%2B3XFhIBgtMfONf4Nm83eYuA7SfAGkuJkG%2BqVPzW%2F1nLyAfFNgkyPaQt18Oma4c9FjJ648l8lyqjegDn41rTQGANJYihHHjkbfxzkyr6xCXZS2AunSXRoZ1wHDeVGBKCByIbywdr%2FsAL7iTVqOQtiF1jinrbFPc9CImM7Psx4wW%2FviOe8ndpwaG9t2Q5qILwbSUOvTo%2F23RcqjpcvtX2j9%2BoAX5567jVq6mI%2FHtU1FkwY2zI0rE4NKZ4QGNhR4fTQAvfrNl0hVT2F4ILnMpqd8d6Lla0XdiZi%2BJ72a4at5h3KFJvTGiZpJH3pmIdAf%2B29kpCedBgBsgeIykoSNE6rPNG%2FRHqOuFciCCoZ4NtHPjSKO1mQI7KGa9VMJFA92MR2QPa9RLLkLuVADeAlGqtP8bj9DVt0ItBX695tqaJmDlUNNHpIc2P44JKaWH7yEBLGg%2BufXPQ1xLd8oFYwJMji6odGseAeyTEHVgmpfzrGcUXuOplALEg1UXyHqvgcRcVxKlZwtrRuwV%2BvFwC2CQJ9cRYfZaEjC92TlF1iKATTpIehTajJF0H283PAJRzBuZevFmGVyyLwQcYISWwSJVBhw3KzCrxnyKx%2BoI31J0Gyej4XAKmdvMMi35cMGOqUBHbiB4ELy8GU96uYl%2FVfV6teWXaBXlNc4keHvrNgPlJk9A%2FEWC0FVy0Y9trUCvGwf8zAj8cW5aTpmsGys%2BErGa9Jc859WHJrZEmoH4NXKGFHwqEf8VwhDjiv5HY3yPF1QQvx%2BL%2FK%2B0Ssnpvd42G2vYbqj5w7eDINl8%2FXSEXhgyeTLpKhXh2EPpLjXzHOiFn%2FeiJMrYwH0gju804eAuRuJlGHkhGxM&X-Amz-Signature=3c90611b8f8749813c275041c3bd9e07f4e00d79dd5f4a7c6f50264a53dd7155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NHJAUGA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDGO26p%2Bs2KSh63WVhVFJHB4P%2FQPAktRBbQB2PMakFsNQIgLNyLYTSrfqx5zJlezg4JL%2F9g5hcBbqDoopkey1TgECYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJ2MNsqu8CseEJm9eyrcA5%2BKfcIqz2A%2B3XFhIBgtMfONf4Nm83eYuA7SfAGkuJkG%2BqVPzW%2F1nLyAfFNgkyPaQt18Oma4c9FjJ648l8lyqjegDn41rTQGANJYihHHjkbfxzkyr6xCXZS2AunSXRoZ1wHDeVGBKCByIbywdr%2FsAL7iTVqOQtiF1jinrbFPc9CImM7Psx4wW%2FviOe8ndpwaG9t2Q5qILwbSUOvTo%2F23RcqjpcvtX2j9%2BoAX5567jVq6mI%2FHtU1FkwY2zI0rE4NKZ4QGNhR4fTQAvfrNl0hVT2F4ILnMpqd8d6Lla0XdiZi%2BJ72a4at5h3KFJvTGiZpJH3pmIdAf%2B29kpCedBgBsgeIykoSNE6rPNG%2FRHqOuFciCCoZ4NtHPjSKO1mQI7KGa9VMJFA92MR2QPa9RLLkLuVADeAlGqtP8bj9DVt0ItBX695tqaJmDlUNNHpIc2P44JKaWH7yEBLGg%2BufXPQ1xLd8oFYwJMji6odGseAeyTEHVgmpfzrGcUXuOplALEg1UXyHqvgcRcVxKlZwtrRuwV%2BvFwC2CQJ9cRYfZaEjC92TlF1iKATTpIehTajJF0H283PAJRzBuZevFmGVyyLwQcYISWwSJVBhw3KzCrxnyKx%2BoI31J0Gyej4XAKmdvMMi35cMGOqUBHbiB4ELy8GU96uYl%2FVfV6teWXaBXlNc4keHvrNgPlJk9A%2FEWC0FVy0Y9trUCvGwf8zAj8cW5aTpmsGys%2BErGa9Jc859WHJrZEmoH4NXKGFHwqEf8VwhDjiv5HY3yPF1QQvx%2BL%2FK%2B0Ssnpvd42G2vYbqj5w7eDINl8%2FXSEXhgyeTLpKhXh2EPpLjXzHOiFn%2FeiJMrYwH0gju804eAuRuJlGHkhGxM&X-Amz-Signature=fc302640aaec2deff8b04b3f5e0a3a5e0796d51bdff2e76f26112ec71c5cc918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NHJAUGA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDGO26p%2Bs2KSh63WVhVFJHB4P%2FQPAktRBbQB2PMakFsNQIgLNyLYTSrfqx5zJlezg4JL%2F9g5hcBbqDoopkey1TgECYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJ2MNsqu8CseEJm9eyrcA5%2BKfcIqz2A%2B3XFhIBgtMfONf4Nm83eYuA7SfAGkuJkG%2BqVPzW%2F1nLyAfFNgkyPaQt18Oma4c9FjJ648l8lyqjegDn41rTQGANJYihHHjkbfxzkyr6xCXZS2AunSXRoZ1wHDeVGBKCByIbywdr%2FsAL7iTVqOQtiF1jinrbFPc9CImM7Psx4wW%2FviOe8ndpwaG9t2Q5qILwbSUOvTo%2F23RcqjpcvtX2j9%2BoAX5567jVq6mI%2FHtU1FkwY2zI0rE4NKZ4QGNhR4fTQAvfrNl0hVT2F4ILnMpqd8d6Lla0XdiZi%2BJ72a4at5h3KFJvTGiZpJH3pmIdAf%2B29kpCedBgBsgeIykoSNE6rPNG%2FRHqOuFciCCoZ4NtHPjSKO1mQI7KGa9VMJFA92MR2QPa9RLLkLuVADeAlGqtP8bj9DVt0ItBX695tqaJmDlUNNHpIc2P44JKaWH7yEBLGg%2BufXPQ1xLd8oFYwJMji6odGseAeyTEHVgmpfzrGcUXuOplALEg1UXyHqvgcRcVxKlZwtrRuwV%2BvFwC2CQJ9cRYfZaEjC92TlF1iKATTpIehTajJF0H283PAJRzBuZevFmGVyyLwQcYISWwSJVBhw3KzCrxnyKx%2BoI31J0Gyej4XAKmdvMMi35cMGOqUBHbiB4ELy8GU96uYl%2FVfV6teWXaBXlNc4keHvrNgPlJk9A%2FEWC0FVy0Y9trUCvGwf8zAj8cW5aTpmsGys%2BErGa9Jc859WHJrZEmoH4NXKGFHwqEf8VwhDjiv5HY3yPF1QQvx%2BL%2FK%2B0Ssnpvd42G2vYbqj5w7eDINl8%2FXSEXhgyeTLpKhXh2EPpLjXzHOiFn%2FeiJMrYwH0gju804eAuRuJlGHkhGxM&X-Amz-Signature=c7d2e709e2052987d2bf1805da393b391eb17b8076f064e632874d410c055f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NHJAUGA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDGO26p%2Bs2KSh63WVhVFJHB4P%2FQPAktRBbQB2PMakFsNQIgLNyLYTSrfqx5zJlezg4JL%2F9g5hcBbqDoopkey1TgECYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJ2MNsqu8CseEJm9eyrcA5%2BKfcIqz2A%2B3XFhIBgtMfONf4Nm83eYuA7SfAGkuJkG%2BqVPzW%2F1nLyAfFNgkyPaQt18Oma4c9FjJ648l8lyqjegDn41rTQGANJYihHHjkbfxzkyr6xCXZS2AunSXRoZ1wHDeVGBKCByIbywdr%2FsAL7iTVqOQtiF1jinrbFPc9CImM7Psx4wW%2FviOe8ndpwaG9t2Q5qILwbSUOvTo%2F23RcqjpcvtX2j9%2BoAX5567jVq6mI%2FHtU1FkwY2zI0rE4NKZ4QGNhR4fTQAvfrNl0hVT2F4ILnMpqd8d6Lla0XdiZi%2BJ72a4at5h3KFJvTGiZpJH3pmIdAf%2B29kpCedBgBsgeIykoSNE6rPNG%2FRHqOuFciCCoZ4NtHPjSKO1mQI7KGa9VMJFA92MR2QPa9RLLkLuVADeAlGqtP8bj9DVt0ItBX695tqaJmDlUNNHpIc2P44JKaWH7yEBLGg%2BufXPQ1xLd8oFYwJMji6odGseAeyTEHVgmpfzrGcUXuOplALEg1UXyHqvgcRcVxKlZwtrRuwV%2BvFwC2CQJ9cRYfZaEjC92TlF1iKATTpIehTajJF0H283PAJRzBuZevFmGVyyLwQcYISWwSJVBhw3KzCrxnyKx%2BoI31J0Gyej4XAKmdvMMi35cMGOqUBHbiB4ELy8GU96uYl%2FVfV6teWXaBXlNc4keHvrNgPlJk9A%2FEWC0FVy0Y9trUCvGwf8zAj8cW5aTpmsGys%2BErGa9Jc859WHJrZEmoH4NXKGFHwqEf8VwhDjiv5HY3yPF1QQvx%2BL%2FK%2B0Ssnpvd42G2vYbqj5w7eDINl8%2FXSEXhgyeTLpKhXh2EPpLjXzHOiFn%2FeiJMrYwH0gju804eAuRuJlGHkhGxM&X-Amz-Signature=d5a6b22ce54e9db5ff3e44f2245d5560db41c27eff9962ab2d8f1e1661555396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
