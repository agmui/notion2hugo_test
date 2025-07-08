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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNKT3EU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIF88XLo5bLZLM1uqhsbq6IS14Y%2FOjzcog3uh5mu3qj7qAiANykg%2FW50A7j6MIw5iqULyQXUDpEshr95fepOibVbbGiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIHLxZpr0NDgQPI4qKtwD%2FhHOT1LOBNWlqOpfdMGi%2F1eiBh0COhgCCW7B5lIQ7RTZnd7HYkBttoPqGkDsr3DlwTZ7TA0t22wLrG%2FvqPrU8He9naLMucGrtgpVDEElv4ZfXEgFqyUMmwS%2BYKV9mknbD1mt3l6iI3jvKxkSlZ5CyHhQaQWYz1qzQfcBk71AHtK%2BerPfrxxnGMTLGJD1HmpV8ceBopTMhSzH%2B28QQ8BLh5aOQ6YZNkv6CNE%2FBpyuOqUKrKwqQfna6O7061wvutZoHidf%2Fg002zuhq9mmNpBX0FP%2BEBaWVyfCCN3RCfBQYQAIjSp5vp8yjAS6PpePYa7vyJb%2BYINoviwfY32nkc3Y%2FRh0vZnyDbbGEqwdan61OXc0rte3fzLXLxJs%2BxRhU12UxFRHi0A4ItPrZsg0Ud9RA9ZykWZGug9gt5VMhDzdPLCXoFziT8D4jPjD6JXbJy%2Bz5lfFNsp47TCEYdk204FqkiuKutkH9xCFT5tFHnm7kYZjwMvUsFk%2BOAf%2BbeaBc3ngo1Hvw79oXtFmZa2DQEOzLAZxCTZ2%2BPo%2B%2Fh9fDRgvM50K%2FyR56jrMhkeESecTyAx7JiM5ct8TWuBbv771NeWTzeqXMdnsloxk1qf43Tol6ige0WAFlQbYE5sztUYwlYWywwY6pgEBvH%2BuSPq6q8LTY7H0ypbK5VcLiI8J1B6QCrJbZRrNTdFrDrIpPsxjdot5PZjof%2FP44l%2Bb%2BCJJl6aRHbMu%2B6kWWIsOUy7sJj5fGyGV1IrwNBa4LfasibokkYzjTkO7Rci9xJxr8MTSkcD3B%2F8rOgCzbneGavC4oOZLNjN2qZOQ9%2FHtjY1pYwt1FCAMOOw%2BbrKvAUCOEgYm3cCWQ%2BRWehQMbkvxLpMk&X-Amz-Signature=9b44588ab368c92b1d6202df4edf8c254adbc154053cc9efa0cf3fd40062b874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNKT3EU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIF88XLo5bLZLM1uqhsbq6IS14Y%2FOjzcog3uh5mu3qj7qAiANykg%2FW50A7j6MIw5iqULyQXUDpEshr95fepOibVbbGiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIHLxZpr0NDgQPI4qKtwD%2FhHOT1LOBNWlqOpfdMGi%2F1eiBh0COhgCCW7B5lIQ7RTZnd7HYkBttoPqGkDsr3DlwTZ7TA0t22wLrG%2FvqPrU8He9naLMucGrtgpVDEElv4ZfXEgFqyUMmwS%2BYKV9mknbD1mt3l6iI3jvKxkSlZ5CyHhQaQWYz1qzQfcBk71AHtK%2BerPfrxxnGMTLGJD1HmpV8ceBopTMhSzH%2B28QQ8BLh5aOQ6YZNkv6CNE%2FBpyuOqUKrKwqQfna6O7061wvutZoHidf%2Fg002zuhq9mmNpBX0FP%2BEBaWVyfCCN3RCfBQYQAIjSp5vp8yjAS6PpePYa7vyJb%2BYINoviwfY32nkc3Y%2FRh0vZnyDbbGEqwdan61OXc0rte3fzLXLxJs%2BxRhU12UxFRHi0A4ItPrZsg0Ud9RA9ZykWZGug9gt5VMhDzdPLCXoFziT8D4jPjD6JXbJy%2Bz5lfFNsp47TCEYdk204FqkiuKutkH9xCFT5tFHnm7kYZjwMvUsFk%2BOAf%2BbeaBc3ngo1Hvw79oXtFmZa2DQEOzLAZxCTZ2%2BPo%2B%2Fh9fDRgvM50K%2FyR56jrMhkeESecTyAx7JiM5ct8TWuBbv771NeWTzeqXMdnsloxk1qf43Tol6ige0WAFlQbYE5sztUYwlYWywwY6pgEBvH%2BuSPq6q8LTY7H0ypbK5VcLiI8J1B6QCrJbZRrNTdFrDrIpPsxjdot5PZjof%2FP44l%2Bb%2BCJJl6aRHbMu%2B6kWWIsOUy7sJj5fGyGV1IrwNBa4LfasibokkYzjTkO7Rci9xJxr8MTSkcD3B%2F8rOgCzbneGavC4oOZLNjN2qZOQ9%2FHtjY1pYwt1FCAMOOw%2BbrKvAUCOEgYm3cCWQ%2BRWehQMbkvxLpMk&X-Amz-Signature=e1786dc9564b4afc840da594db74f4081fafd817af3c7386ddc674aaf4c2c63d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNKT3EU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIF88XLo5bLZLM1uqhsbq6IS14Y%2FOjzcog3uh5mu3qj7qAiANykg%2FW50A7j6MIw5iqULyQXUDpEshr95fepOibVbbGiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIHLxZpr0NDgQPI4qKtwD%2FhHOT1LOBNWlqOpfdMGi%2F1eiBh0COhgCCW7B5lIQ7RTZnd7HYkBttoPqGkDsr3DlwTZ7TA0t22wLrG%2FvqPrU8He9naLMucGrtgpVDEElv4ZfXEgFqyUMmwS%2BYKV9mknbD1mt3l6iI3jvKxkSlZ5CyHhQaQWYz1qzQfcBk71AHtK%2BerPfrxxnGMTLGJD1HmpV8ceBopTMhSzH%2B28QQ8BLh5aOQ6YZNkv6CNE%2FBpyuOqUKrKwqQfna6O7061wvutZoHidf%2Fg002zuhq9mmNpBX0FP%2BEBaWVyfCCN3RCfBQYQAIjSp5vp8yjAS6PpePYa7vyJb%2BYINoviwfY32nkc3Y%2FRh0vZnyDbbGEqwdan61OXc0rte3fzLXLxJs%2BxRhU12UxFRHi0A4ItPrZsg0Ud9RA9ZykWZGug9gt5VMhDzdPLCXoFziT8D4jPjD6JXbJy%2Bz5lfFNsp47TCEYdk204FqkiuKutkH9xCFT5tFHnm7kYZjwMvUsFk%2BOAf%2BbeaBc3ngo1Hvw79oXtFmZa2DQEOzLAZxCTZ2%2BPo%2B%2Fh9fDRgvM50K%2FyR56jrMhkeESecTyAx7JiM5ct8TWuBbv771NeWTzeqXMdnsloxk1qf43Tol6ige0WAFlQbYE5sztUYwlYWywwY6pgEBvH%2BuSPq6q8LTY7H0ypbK5VcLiI8J1B6QCrJbZRrNTdFrDrIpPsxjdot5PZjof%2FP44l%2Bb%2BCJJl6aRHbMu%2B6kWWIsOUy7sJj5fGyGV1IrwNBa4LfasibokkYzjTkO7Rci9xJxr8MTSkcD3B%2F8rOgCzbneGavC4oOZLNjN2qZOQ9%2FHtjY1pYwt1FCAMOOw%2BbrKvAUCOEgYm3cCWQ%2BRWehQMbkvxLpMk&X-Amz-Signature=0d652d4cfc271a160b5ab1fb2ad73d9e5e63cc76341a877c32f28d9c643ae160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNKT3EU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIF88XLo5bLZLM1uqhsbq6IS14Y%2FOjzcog3uh5mu3qj7qAiANykg%2FW50A7j6MIw5iqULyQXUDpEshr95fepOibVbbGiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIHLxZpr0NDgQPI4qKtwD%2FhHOT1LOBNWlqOpfdMGi%2F1eiBh0COhgCCW7B5lIQ7RTZnd7HYkBttoPqGkDsr3DlwTZ7TA0t22wLrG%2FvqPrU8He9naLMucGrtgpVDEElv4ZfXEgFqyUMmwS%2BYKV9mknbD1mt3l6iI3jvKxkSlZ5CyHhQaQWYz1qzQfcBk71AHtK%2BerPfrxxnGMTLGJD1HmpV8ceBopTMhSzH%2B28QQ8BLh5aOQ6YZNkv6CNE%2FBpyuOqUKrKwqQfna6O7061wvutZoHidf%2Fg002zuhq9mmNpBX0FP%2BEBaWVyfCCN3RCfBQYQAIjSp5vp8yjAS6PpePYa7vyJb%2BYINoviwfY32nkc3Y%2FRh0vZnyDbbGEqwdan61OXc0rte3fzLXLxJs%2BxRhU12UxFRHi0A4ItPrZsg0Ud9RA9ZykWZGug9gt5VMhDzdPLCXoFziT8D4jPjD6JXbJy%2Bz5lfFNsp47TCEYdk204FqkiuKutkH9xCFT5tFHnm7kYZjwMvUsFk%2BOAf%2BbeaBc3ngo1Hvw79oXtFmZa2DQEOzLAZxCTZ2%2BPo%2B%2Fh9fDRgvM50K%2FyR56jrMhkeESecTyAx7JiM5ct8TWuBbv771NeWTzeqXMdnsloxk1qf43Tol6ige0WAFlQbYE5sztUYwlYWywwY6pgEBvH%2BuSPq6q8LTY7H0ypbK5VcLiI8J1B6QCrJbZRrNTdFrDrIpPsxjdot5PZjof%2FP44l%2Bb%2BCJJl6aRHbMu%2B6kWWIsOUy7sJj5fGyGV1IrwNBa4LfasibokkYzjTkO7Rci9xJxr8MTSkcD3B%2F8rOgCzbneGavC4oOZLNjN2qZOQ9%2FHtjY1pYwt1FCAMOOw%2BbrKvAUCOEgYm3cCWQ%2BRWehQMbkvxLpMk&X-Amz-Signature=5ff5b1082e40252996e63763eb278885c64726004e152d5572d32d5bee0bfa36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNKT3EU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIF88XLo5bLZLM1uqhsbq6IS14Y%2FOjzcog3uh5mu3qj7qAiANykg%2FW50A7j6MIw5iqULyQXUDpEshr95fepOibVbbGiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIHLxZpr0NDgQPI4qKtwD%2FhHOT1LOBNWlqOpfdMGi%2F1eiBh0COhgCCW7B5lIQ7RTZnd7HYkBttoPqGkDsr3DlwTZ7TA0t22wLrG%2FvqPrU8He9naLMucGrtgpVDEElv4ZfXEgFqyUMmwS%2BYKV9mknbD1mt3l6iI3jvKxkSlZ5CyHhQaQWYz1qzQfcBk71AHtK%2BerPfrxxnGMTLGJD1HmpV8ceBopTMhSzH%2B28QQ8BLh5aOQ6YZNkv6CNE%2FBpyuOqUKrKwqQfna6O7061wvutZoHidf%2Fg002zuhq9mmNpBX0FP%2BEBaWVyfCCN3RCfBQYQAIjSp5vp8yjAS6PpePYa7vyJb%2BYINoviwfY32nkc3Y%2FRh0vZnyDbbGEqwdan61OXc0rte3fzLXLxJs%2BxRhU12UxFRHi0A4ItPrZsg0Ud9RA9ZykWZGug9gt5VMhDzdPLCXoFziT8D4jPjD6JXbJy%2Bz5lfFNsp47TCEYdk204FqkiuKutkH9xCFT5tFHnm7kYZjwMvUsFk%2BOAf%2BbeaBc3ngo1Hvw79oXtFmZa2DQEOzLAZxCTZ2%2BPo%2B%2Fh9fDRgvM50K%2FyR56jrMhkeESecTyAx7JiM5ct8TWuBbv771NeWTzeqXMdnsloxk1qf43Tol6ige0WAFlQbYE5sztUYwlYWywwY6pgEBvH%2BuSPq6q8LTY7H0ypbK5VcLiI8J1B6QCrJbZRrNTdFrDrIpPsxjdot5PZjof%2FP44l%2Bb%2BCJJl6aRHbMu%2B6kWWIsOUy7sJj5fGyGV1IrwNBa4LfasibokkYzjTkO7Rci9xJxr8MTSkcD3B%2F8rOgCzbneGavC4oOZLNjN2qZOQ9%2FHtjY1pYwt1FCAMOOw%2BbrKvAUCOEgYm3cCWQ%2BRWehQMbkvxLpMk&X-Amz-Signature=0790578b9fe78e9fc735c1c87c059b7afb136fc12072eeec2d920061d8cc2004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNKT3EU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIF88XLo5bLZLM1uqhsbq6IS14Y%2FOjzcog3uh5mu3qj7qAiANykg%2FW50A7j6MIw5iqULyQXUDpEshr95fepOibVbbGiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIHLxZpr0NDgQPI4qKtwD%2FhHOT1LOBNWlqOpfdMGi%2F1eiBh0COhgCCW7B5lIQ7RTZnd7HYkBttoPqGkDsr3DlwTZ7TA0t22wLrG%2FvqPrU8He9naLMucGrtgpVDEElv4ZfXEgFqyUMmwS%2BYKV9mknbD1mt3l6iI3jvKxkSlZ5CyHhQaQWYz1qzQfcBk71AHtK%2BerPfrxxnGMTLGJD1HmpV8ceBopTMhSzH%2B28QQ8BLh5aOQ6YZNkv6CNE%2FBpyuOqUKrKwqQfna6O7061wvutZoHidf%2Fg002zuhq9mmNpBX0FP%2BEBaWVyfCCN3RCfBQYQAIjSp5vp8yjAS6PpePYa7vyJb%2BYINoviwfY32nkc3Y%2FRh0vZnyDbbGEqwdan61OXc0rte3fzLXLxJs%2BxRhU12UxFRHi0A4ItPrZsg0Ud9RA9ZykWZGug9gt5VMhDzdPLCXoFziT8D4jPjD6JXbJy%2Bz5lfFNsp47TCEYdk204FqkiuKutkH9xCFT5tFHnm7kYZjwMvUsFk%2BOAf%2BbeaBc3ngo1Hvw79oXtFmZa2DQEOzLAZxCTZ2%2BPo%2B%2Fh9fDRgvM50K%2FyR56jrMhkeESecTyAx7JiM5ct8TWuBbv771NeWTzeqXMdnsloxk1qf43Tol6ige0WAFlQbYE5sztUYwlYWywwY6pgEBvH%2BuSPq6q8LTY7H0ypbK5VcLiI8J1B6QCrJbZRrNTdFrDrIpPsxjdot5PZjof%2FP44l%2Bb%2BCJJl6aRHbMu%2B6kWWIsOUy7sJj5fGyGV1IrwNBa4LfasibokkYzjTkO7Rci9xJxr8MTSkcD3B%2F8rOgCzbneGavC4oOZLNjN2qZOQ9%2FHtjY1pYwt1FCAMOOw%2BbrKvAUCOEgYm3cCWQ%2BRWehQMbkvxLpMk&X-Amz-Signature=31d0cfb5b182fc2ace5cc79677dc17b15564604c157ca1d5086875752196e695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
