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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDRKJG4M%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGEER6kV600ESm3gYVEruCWp1c8YzInq%2B0MRKxaa%2F2xjAiBpVfpD9gEjGKqn4QHn5FTRVzOoWEc9iXs3rgOONhViUyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMCz72en9ri3PVX87RKtwDb39x5NuIf1%2FkDuwLsUftXnj%2Fk7G8QDDW46I6JLYx5AJ7sAjB3AC2kNH7GQmYlDf3j6McL%2FrKS4p0cI3MDnjCovu79xlcJCF9RlqCbltiv32aN7eVRfdlV8v4I78lPVOfYnF%2F5hdYrLQylXpIRyLYmmMn%2F3ZORmpDSt5pqU5HpQU5x0PuASUDG4kByw4PbcUkue%2F%2BEuIefchDtw7roO4mhitJ6fkdasQ1Wz79Qsl1G7FAZYKcH1gKT8%2Bj8MLbl51GMVmajACRjLg3dTWPCSZdLUzm2X1K%2FjqoIETn1jayx7jJTOmnnrrL6yYVtz%2Bw%2BFVwtN5cSMxJ7vMUtMqDk8tFw4vd4viVnnKjwsENzgwVKiGSJ5oP1YpyaHKXB0cc0k3mUoAxknurA1Qpv7atVkQnbDmLThEbAzpDecnEKoyi04Udvmr3dh80KbfeBNbre695BIaCmalfx1uJNmWHcgYHjpDP7u5j0%2BgGAdAlkeCrEcdcN0tFhLUZEyRk8yyJxtektZ%2F%2FhxsFYNm7dJgeYIRz242C6%2BIbMvAvyj9Dp1MiC9Cj0%2FC0ogHlP206%2BB057F4Xl%2FHWxGNYVnizDgLZ%2FDuR3AG%2FWSHCgCCQ78XkFrrml61zpPYE26ZM9UNWvCAw1qLqvgY6pgEBJlr4haZc%2FNKA%2BK7zOxADfT6K85mmod3IY486y5ev0x2LyYjFzchBuIoGuXbgyfTw%2FT3I7kQuvGp3c%2Bh3G5jUwRo02pyV8O8OpbOXSHYXtr5MVaKXADBssuhLNlRxul3Wm5otJsJvgfRUjgY6m1DdJjKlDj3MxmK7KrYRHNscpxVPKqZyJW4Wytl1mA93cTa4kQswLVANKJiE7VjGc19E5KHwdlgE&X-Amz-Signature=697e95e575ffe22e3eb7932912e5ff657c6552aee0b171e35981fd4212fdf44d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDRKJG4M%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGEER6kV600ESm3gYVEruCWp1c8YzInq%2B0MRKxaa%2F2xjAiBpVfpD9gEjGKqn4QHn5FTRVzOoWEc9iXs3rgOONhViUyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMCz72en9ri3PVX87RKtwDb39x5NuIf1%2FkDuwLsUftXnj%2Fk7G8QDDW46I6JLYx5AJ7sAjB3AC2kNH7GQmYlDf3j6McL%2FrKS4p0cI3MDnjCovu79xlcJCF9RlqCbltiv32aN7eVRfdlV8v4I78lPVOfYnF%2F5hdYrLQylXpIRyLYmmMn%2F3ZORmpDSt5pqU5HpQU5x0PuASUDG4kByw4PbcUkue%2F%2BEuIefchDtw7roO4mhitJ6fkdasQ1Wz79Qsl1G7FAZYKcH1gKT8%2Bj8MLbl51GMVmajACRjLg3dTWPCSZdLUzm2X1K%2FjqoIETn1jayx7jJTOmnnrrL6yYVtz%2Bw%2BFVwtN5cSMxJ7vMUtMqDk8tFw4vd4viVnnKjwsENzgwVKiGSJ5oP1YpyaHKXB0cc0k3mUoAxknurA1Qpv7atVkQnbDmLThEbAzpDecnEKoyi04Udvmr3dh80KbfeBNbre695BIaCmalfx1uJNmWHcgYHjpDP7u5j0%2BgGAdAlkeCrEcdcN0tFhLUZEyRk8yyJxtektZ%2F%2FhxsFYNm7dJgeYIRz242C6%2BIbMvAvyj9Dp1MiC9Cj0%2FC0ogHlP206%2BB057F4Xl%2FHWxGNYVnizDgLZ%2FDuR3AG%2FWSHCgCCQ78XkFrrml61zpPYE26ZM9UNWvCAw1qLqvgY6pgEBJlr4haZc%2FNKA%2BK7zOxADfT6K85mmod3IY486y5ev0x2LyYjFzchBuIoGuXbgyfTw%2FT3I7kQuvGp3c%2Bh3G5jUwRo02pyV8O8OpbOXSHYXtr5MVaKXADBssuhLNlRxul3Wm5otJsJvgfRUjgY6m1DdJjKlDj3MxmK7KrYRHNscpxVPKqZyJW4Wytl1mA93cTa4kQswLVANKJiE7VjGc19E5KHwdlgE&X-Amz-Signature=887956aa5bace79631abe86655861cf49eb922289f49162e1d19673b1328b68a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDRKJG4M%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGEER6kV600ESm3gYVEruCWp1c8YzInq%2B0MRKxaa%2F2xjAiBpVfpD9gEjGKqn4QHn5FTRVzOoWEc9iXs3rgOONhViUyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMCz72en9ri3PVX87RKtwDb39x5NuIf1%2FkDuwLsUftXnj%2Fk7G8QDDW46I6JLYx5AJ7sAjB3AC2kNH7GQmYlDf3j6McL%2FrKS4p0cI3MDnjCovu79xlcJCF9RlqCbltiv32aN7eVRfdlV8v4I78lPVOfYnF%2F5hdYrLQylXpIRyLYmmMn%2F3ZORmpDSt5pqU5HpQU5x0PuASUDG4kByw4PbcUkue%2F%2BEuIefchDtw7roO4mhitJ6fkdasQ1Wz79Qsl1G7FAZYKcH1gKT8%2Bj8MLbl51GMVmajACRjLg3dTWPCSZdLUzm2X1K%2FjqoIETn1jayx7jJTOmnnrrL6yYVtz%2Bw%2BFVwtN5cSMxJ7vMUtMqDk8tFw4vd4viVnnKjwsENzgwVKiGSJ5oP1YpyaHKXB0cc0k3mUoAxknurA1Qpv7atVkQnbDmLThEbAzpDecnEKoyi04Udvmr3dh80KbfeBNbre695BIaCmalfx1uJNmWHcgYHjpDP7u5j0%2BgGAdAlkeCrEcdcN0tFhLUZEyRk8yyJxtektZ%2F%2FhxsFYNm7dJgeYIRz242C6%2BIbMvAvyj9Dp1MiC9Cj0%2FC0ogHlP206%2BB057F4Xl%2FHWxGNYVnizDgLZ%2FDuR3AG%2FWSHCgCCQ78XkFrrml61zpPYE26ZM9UNWvCAw1qLqvgY6pgEBJlr4haZc%2FNKA%2BK7zOxADfT6K85mmod3IY486y5ev0x2LyYjFzchBuIoGuXbgyfTw%2FT3I7kQuvGp3c%2Bh3G5jUwRo02pyV8O8OpbOXSHYXtr5MVaKXADBssuhLNlRxul3Wm5otJsJvgfRUjgY6m1DdJjKlDj3MxmK7KrYRHNscpxVPKqZyJW4Wytl1mA93cTa4kQswLVANKJiE7VjGc19E5KHwdlgE&X-Amz-Signature=15905b28d46405875201908aba9ebabe3aa4eaf13b6b565a8b9746d4a43b277a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDRKJG4M%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGEER6kV600ESm3gYVEruCWp1c8YzInq%2B0MRKxaa%2F2xjAiBpVfpD9gEjGKqn4QHn5FTRVzOoWEc9iXs3rgOONhViUyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMCz72en9ri3PVX87RKtwDb39x5NuIf1%2FkDuwLsUftXnj%2Fk7G8QDDW46I6JLYx5AJ7sAjB3AC2kNH7GQmYlDf3j6McL%2FrKS4p0cI3MDnjCovu79xlcJCF9RlqCbltiv32aN7eVRfdlV8v4I78lPVOfYnF%2F5hdYrLQylXpIRyLYmmMn%2F3ZORmpDSt5pqU5HpQU5x0PuASUDG4kByw4PbcUkue%2F%2BEuIefchDtw7roO4mhitJ6fkdasQ1Wz79Qsl1G7FAZYKcH1gKT8%2Bj8MLbl51GMVmajACRjLg3dTWPCSZdLUzm2X1K%2FjqoIETn1jayx7jJTOmnnrrL6yYVtz%2Bw%2BFVwtN5cSMxJ7vMUtMqDk8tFw4vd4viVnnKjwsENzgwVKiGSJ5oP1YpyaHKXB0cc0k3mUoAxknurA1Qpv7atVkQnbDmLThEbAzpDecnEKoyi04Udvmr3dh80KbfeBNbre695BIaCmalfx1uJNmWHcgYHjpDP7u5j0%2BgGAdAlkeCrEcdcN0tFhLUZEyRk8yyJxtektZ%2F%2FhxsFYNm7dJgeYIRz242C6%2BIbMvAvyj9Dp1MiC9Cj0%2FC0ogHlP206%2BB057F4Xl%2FHWxGNYVnizDgLZ%2FDuR3AG%2FWSHCgCCQ78XkFrrml61zpPYE26ZM9UNWvCAw1qLqvgY6pgEBJlr4haZc%2FNKA%2BK7zOxADfT6K85mmod3IY486y5ev0x2LyYjFzchBuIoGuXbgyfTw%2FT3I7kQuvGp3c%2Bh3G5jUwRo02pyV8O8OpbOXSHYXtr5MVaKXADBssuhLNlRxul3Wm5otJsJvgfRUjgY6m1DdJjKlDj3MxmK7KrYRHNscpxVPKqZyJW4Wytl1mA93cTa4kQswLVANKJiE7VjGc19E5KHwdlgE&X-Amz-Signature=65efac3eca5dde79a7ba10d673616f5eae033bc4b105dfabfaf55bcfb1a98c41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDRKJG4M%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGEER6kV600ESm3gYVEruCWp1c8YzInq%2B0MRKxaa%2F2xjAiBpVfpD9gEjGKqn4QHn5FTRVzOoWEc9iXs3rgOONhViUyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMCz72en9ri3PVX87RKtwDb39x5NuIf1%2FkDuwLsUftXnj%2Fk7G8QDDW46I6JLYx5AJ7sAjB3AC2kNH7GQmYlDf3j6McL%2FrKS4p0cI3MDnjCovu79xlcJCF9RlqCbltiv32aN7eVRfdlV8v4I78lPVOfYnF%2F5hdYrLQylXpIRyLYmmMn%2F3ZORmpDSt5pqU5HpQU5x0PuASUDG4kByw4PbcUkue%2F%2BEuIefchDtw7roO4mhitJ6fkdasQ1Wz79Qsl1G7FAZYKcH1gKT8%2Bj8MLbl51GMVmajACRjLg3dTWPCSZdLUzm2X1K%2FjqoIETn1jayx7jJTOmnnrrL6yYVtz%2Bw%2BFVwtN5cSMxJ7vMUtMqDk8tFw4vd4viVnnKjwsENzgwVKiGSJ5oP1YpyaHKXB0cc0k3mUoAxknurA1Qpv7atVkQnbDmLThEbAzpDecnEKoyi04Udvmr3dh80KbfeBNbre695BIaCmalfx1uJNmWHcgYHjpDP7u5j0%2BgGAdAlkeCrEcdcN0tFhLUZEyRk8yyJxtektZ%2F%2FhxsFYNm7dJgeYIRz242C6%2BIbMvAvyj9Dp1MiC9Cj0%2FC0ogHlP206%2BB057F4Xl%2FHWxGNYVnizDgLZ%2FDuR3AG%2FWSHCgCCQ78XkFrrml61zpPYE26ZM9UNWvCAw1qLqvgY6pgEBJlr4haZc%2FNKA%2BK7zOxADfT6K85mmod3IY486y5ev0x2LyYjFzchBuIoGuXbgyfTw%2FT3I7kQuvGp3c%2Bh3G5jUwRo02pyV8O8OpbOXSHYXtr5MVaKXADBssuhLNlRxul3Wm5otJsJvgfRUjgY6m1DdJjKlDj3MxmK7KrYRHNscpxVPKqZyJW4Wytl1mA93cTa4kQswLVANKJiE7VjGc19E5KHwdlgE&X-Amz-Signature=d669e02ad047a216e6b9f3aa0e524fa62fb29ef2922643720ac8413da17e677f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDRKJG4M%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGEER6kV600ESm3gYVEruCWp1c8YzInq%2B0MRKxaa%2F2xjAiBpVfpD9gEjGKqn4QHn5FTRVzOoWEc9iXs3rgOONhViUyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMCz72en9ri3PVX87RKtwDb39x5NuIf1%2FkDuwLsUftXnj%2Fk7G8QDDW46I6JLYx5AJ7sAjB3AC2kNH7GQmYlDf3j6McL%2FrKS4p0cI3MDnjCovu79xlcJCF9RlqCbltiv32aN7eVRfdlV8v4I78lPVOfYnF%2F5hdYrLQylXpIRyLYmmMn%2F3ZORmpDSt5pqU5HpQU5x0PuASUDG4kByw4PbcUkue%2F%2BEuIefchDtw7roO4mhitJ6fkdasQ1Wz79Qsl1G7FAZYKcH1gKT8%2Bj8MLbl51GMVmajACRjLg3dTWPCSZdLUzm2X1K%2FjqoIETn1jayx7jJTOmnnrrL6yYVtz%2Bw%2BFVwtN5cSMxJ7vMUtMqDk8tFw4vd4viVnnKjwsENzgwVKiGSJ5oP1YpyaHKXB0cc0k3mUoAxknurA1Qpv7atVkQnbDmLThEbAzpDecnEKoyi04Udvmr3dh80KbfeBNbre695BIaCmalfx1uJNmWHcgYHjpDP7u5j0%2BgGAdAlkeCrEcdcN0tFhLUZEyRk8yyJxtektZ%2F%2FhxsFYNm7dJgeYIRz242C6%2BIbMvAvyj9Dp1MiC9Cj0%2FC0ogHlP206%2BB057F4Xl%2FHWxGNYVnizDgLZ%2FDuR3AG%2FWSHCgCCQ78XkFrrml61zpPYE26ZM9UNWvCAw1qLqvgY6pgEBJlr4haZc%2FNKA%2BK7zOxADfT6K85mmod3IY486y5ev0x2LyYjFzchBuIoGuXbgyfTw%2FT3I7kQuvGp3c%2Bh3G5jUwRo02pyV8O8OpbOXSHYXtr5MVaKXADBssuhLNlRxul3Wm5otJsJvgfRUjgY6m1DdJjKlDj3MxmK7KrYRHNscpxVPKqZyJW4Wytl1mA93cTa4kQswLVANKJiE7VjGc19E5KHwdlgE&X-Amz-Signature=2174c37574684238340c07f05a95483f0284870c65409237d7076060abcdf725&X-Amz-SignedHeaders=host&x-id=GetObject)
