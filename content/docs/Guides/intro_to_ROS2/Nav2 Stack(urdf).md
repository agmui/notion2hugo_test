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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSFQPMX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDkeBeqGMVeUv6YLlGh%2F7DM2uHVuEGXz98k%2F%2BIWfz6O5AIgMhzEe%2BLvvf2YHJr7n1O7tR7qsdzO3AekFNTtYLfC1OEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPmVmUIahKWmVjcqPircA77R8oZjZe%2FXM5vNuJR%2FxCS9%2FxADW2Q4TuzJv0qYDC5Be4sSHygadJGqM4kiayRJGsdvJe4nBHYzETuYV5tC9A3UiqBTk6rcwWFx8G6ehLGnpOsNkP75j58oEiOpNWToMZS4r2AV9Q86T6GO6cIkraenF%2BG3SMrSm4S0ZBuUTwXSXFS1zWSx45WM4kY6EtiNS8bD5fy330EnvocCiOj31FWkIAAxK9mAjWHenzwfgCa6WzeqIzxiUBRN0x1taGOAnvFDCBFCUyD5WubLLope6F0pZArHwcUAozxwMxwlo06RVZJC%2FEeq%2FGQFwQ41001zHqLGls%2BHsh01XcGcbJH7WwaXJIFZ5hlc7di%2FP8wzMNi1D1ttvf2G2ELkeTnVyGunkJde9LGmszwSA1GCIAA8GVcVrp6RaTz3nEh8rf%2BKzYn2w%2BuXSF6frRMI%2F7Dw2%2BCYF5OUmw%2F9%2B0H9K1Oau2Vg3O3tt6%2B53EgjjWi322BBODxWKuDbasKEYiW5HkkKv2B0lNdm1KqmK3A36aMfJJAdIcHZCHm8NZ0zjynOfKa596E1WRf7ndrsT323409zDr3SDES4AiH35K9FxNxXDx0T7xz3ykDeA1Gic3jIe0Ve2WragrMbJOaZjJNqfJ1gMK%2Bdvr0GOqUBldE2ucSQ6rW%2Bd%2BYuHgaQQ9Y6koxtb0jxKimgV1HX5vSzxtRodSm4sEsrnnMg3RvDmFNg51fBKPBJWn660h7cW8QaloUq6%2F%2FneVxg%2Brxya0YqOfKza4SDUSY34s6Wi0wRdgbHmPHCBqbA1oZxD%2B3dcuAdWH5BLYbWGEsbgndszAoqZ5a7%2Fhkny4D%2FtRCo3j96WpdYhvRgiAmVRbV09Th6dngaHQ1n&X-Amz-Signature=3d8ad68f9bb5405369b98b7b9de20bc8e81ef99c36e2df512a185f9e12e49fdb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSFQPMX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDkeBeqGMVeUv6YLlGh%2F7DM2uHVuEGXz98k%2F%2BIWfz6O5AIgMhzEe%2BLvvf2YHJr7n1O7tR7qsdzO3AekFNTtYLfC1OEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPmVmUIahKWmVjcqPircA77R8oZjZe%2FXM5vNuJR%2FxCS9%2FxADW2Q4TuzJv0qYDC5Be4sSHygadJGqM4kiayRJGsdvJe4nBHYzETuYV5tC9A3UiqBTk6rcwWFx8G6ehLGnpOsNkP75j58oEiOpNWToMZS4r2AV9Q86T6GO6cIkraenF%2BG3SMrSm4S0ZBuUTwXSXFS1zWSx45WM4kY6EtiNS8bD5fy330EnvocCiOj31FWkIAAxK9mAjWHenzwfgCa6WzeqIzxiUBRN0x1taGOAnvFDCBFCUyD5WubLLope6F0pZArHwcUAozxwMxwlo06RVZJC%2FEeq%2FGQFwQ41001zHqLGls%2BHsh01XcGcbJH7WwaXJIFZ5hlc7di%2FP8wzMNi1D1ttvf2G2ELkeTnVyGunkJde9LGmszwSA1GCIAA8GVcVrp6RaTz3nEh8rf%2BKzYn2w%2BuXSF6frRMI%2F7Dw2%2BCYF5OUmw%2F9%2B0H9K1Oau2Vg3O3tt6%2B53EgjjWi322BBODxWKuDbasKEYiW5HkkKv2B0lNdm1KqmK3A36aMfJJAdIcHZCHm8NZ0zjynOfKa596E1WRf7ndrsT323409zDr3SDES4AiH35K9FxNxXDx0T7xz3ykDeA1Gic3jIe0Ve2WragrMbJOaZjJNqfJ1gMK%2Bdvr0GOqUBldE2ucSQ6rW%2Bd%2BYuHgaQQ9Y6koxtb0jxKimgV1HX5vSzxtRodSm4sEsrnnMg3RvDmFNg51fBKPBJWn660h7cW8QaloUq6%2F%2FneVxg%2Brxya0YqOfKza4SDUSY34s6Wi0wRdgbHmPHCBqbA1oZxD%2B3dcuAdWH5BLYbWGEsbgndszAoqZ5a7%2Fhkny4D%2FtRCo3j96WpdYhvRgiAmVRbV09Th6dngaHQ1n&X-Amz-Signature=37a67c0bce852e102ce8def4d6baaa69de727b68f864171fe9ffa979fbb09630&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSFQPMX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDkeBeqGMVeUv6YLlGh%2F7DM2uHVuEGXz98k%2F%2BIWfz6O5AIgMhzEe%2BLvvf2YHJr7n1O7tR7qsdzO3AekFNTtYLfC1OEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPmVmUIahKWmVjcqPircA77R8oZjZe%2FXM5vNuJR%2FxCS9%2FxADW2Q4TuzJv0qYDC5Be4sSHygadJGqM4kiayRJGsdvJe4nBHYzETuYV5tC9A3UiqBTk6rcwWFx8G6ehLGnpOsNkP75j58oEiOpNWToMZS4r2AV9Q86T6GO6cIkraenF%2BG3SMrSm4S0ZBuUTwXSXFS1zWSx45WM4kY6EtiNS8bD5fy330EnvocCiOj31FWkIAAxK9mAjWHenzwfgCa6WzeqIzxiUBRN0x1taGOAnvFDCBFCUyD5WubLLope6F0pZArHwcUAozxwMxwlo06RVZJC%2FEeq%2FGQFwQ41001zHqLGls%2BHsh01XcGcbJH7WwaXJIFZ5hlc7di%2FP8wzMNi1D1ttvf2G2ELkeTnVyGunkJde9LGmszwSA1GCIAA8GVcVrp6RaTz3nEh8rf%2BKzYn2w%2BuXSF6frRMI%2F7Dw2%2BCYF5OUmw%2F9%2B0H9K1Oau2Vg3O3tt6%2B53EgjjWi322BBODxWKuDbasKEYiW5HkkKv2B0lNdm1KqmK3A36aMfJJAdIcHZCHm8NZ0zjynOfKa596E1WRf7ndrsT323409zDr3SDES4AiH35K9FxNxXDx0T7xz3ykDeA1Gic3jIe0Ve2WragrMbJOaZjJNqfJ1gMK%2Bdvr0GOqUBldE2ucSQ6rW%2Bd%2BYuHgaQQ9Y6koxtb0jxKimgV1HX5vSzxtRodSm4sEsrnnMg3RvDmFNg51fBKPBJWn660h7cW8QaloUq6%2F%2FneVxg%2Brxya0YqOfKza4SDUSY34s6Wi0wRdgbHmPHCBqbA1oZxD%2B3dcuAdWH5BLYbWGEsbgndszAoqZ5a7%2Fhkny4D%2FtRCo3j96WpdYhvRgiAmVRbV09Th6dngaHQ1n&X-Amz-Signature=25d9cab35ae7c8a1bd28f7a15dbc8dcac7a22cf16b8a7bc6a6de5a502c4b85cf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSFQPMX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDkeBeqGMVeUv6YLlGh%2F7DM2uHVuEGXz98k%2F%2BIWfz6O5AIgMhzEe%2BLvvf2YHJr7n1O7tR7qsdzO3AekFNTtYLfC1OEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPmVmUIahKWmVjcqPircA77R8oZjZe%2FXM5vNuJR%2FxCS9%2FxADW2Q4TuzJv0qYDC5Be4sSHygadJGqM4kiayRJGsdvJe4nBHYzETuYV5tC9A3UiqBTk6rcwWFx8G6ehLGnpOsNkP75j58oEiOpNWToMZS4r2AV9Q86T6GO6cIkraenF%2BG3SMrSm4S0ZBuUTwXSXFS1zWSx45WM4kY6EtiNS8bD5fy330EnvocCiOj31FWkIAAxK9mAjWHenzwfgCa6WzeqIzxiUBRN0x1taGOAnvFDCBFCUyD5WubLLope6F0pZArHwcUAozxwMxwlo06RVZJC%2FEeq%2FGQFwQ41001zHqLGls%2BHsh01XcGcbJH7WwaXJIFZ5hlc7di%2FP8wzMNi1D1ttvf2G2ELkeTnVyGunkJde9LGmszwSA1GCIAA8GVcVrp6RaTz3nEh8rf%2BKzYn2w%2BuXSF6frRMI%2F7Dw2%2BCYF5OUmw%2F9%2B0H9K1Oau2Vg3O3tt6%2B53EgjjWi322BBODxWKuDbasKEYiW5HkkKv2B0lNdm1KqmK3A36aMfJJAdIcHZCHm8NZ0zjynOfKa596E1WRf7ndrsT323409zDr3SDES4AiH35K9FxNxXDx0T7xz3ykDeA1Gic3jIe0Ve2WragrMbJOaZjJNqfJ1gMK%2Bdvr0GOqUBldE2ucSQ6rW%2Bd%2BYuHgaQQ9Y6koxtb0jxKimgV1HX5vSzxtRodSm4sEsrnnMg3RvDmFNg51fBKPBJWn660h7cW8QaloUq6%2F%2FneVxg%2Brxya0YqOfKza4SDUSY34s6Wi0wRdgbHmPHCBqbA1oZxD%2B3dcuAdWH5BLYbWGEsbgndszAoqZ5a7%2Fhkny4D%2FtRCo3j96WpdYhvRgiAmVRbV09Th6dngaHQ1n&X-Amz-Signature=37cdbcb4c275f0934eee423fe8b409e7f6c16364526087624cd046403a859659&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSFQPMX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDkeBeqGMVeUv6YLlGh%2F7DM2uHVuEGXz98k%2F%2BIWfz6O5AIgMhzEe%2BLvvf2YHJr7n1O7tR7qsdzO3AekFNTtYLfC1OEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPmVmUIahKWmVjcqPircA77R8oZjZe%2FXM5vNuJR%2FxCS9%2FxADW2Q4TuzJv0qYDC5Be4sSHygadJGqM4kiayRJGsdvJe4nBHYzETuYV5tC9A3UiqBTk6rcwWFx8G6ehLGnpOsNkP75j58oEiOpNWToMZS4r2AV9Q86T6GO6cIkraenF%2BG3SMrSm4S0ZBuUTwXSXFS1zWSx45WM4kY6EtiNS8bD5fy330EnvocCiOj31FWkIAAxK9mAjWHenzwfgCa6WzeqIzxiUBRN0x1taGOAnvFDCBFCUyD5WubLLope6F0pZArHwcUAozxwMxwlo06RVZJC%2FEeq%2FGQFwQ41001zHqLGls%2BHsh01XcGcbJH7WwaXJIFZ5hlc7di%2FP8wzMNi1D1ttvf2G2ELkeTnVyGunkJde9LGmszwSA1GCIAA8GVcVrp6RaTz3nEh8rf%2BKzYn2w%2BuXSF6frRMI%2F7Dw2%2BCYF5OUmw%2F9%2B0H9K1Oau2Vg3O3tt6%2B53EgjjWi322BBODxWKuDbasKEYiW5HkkKv2B0lNdm1KqmK3A36aMfJJAdIcHZCHm8NZ0zjynOfKa596E1WRf7ndrsT323409zDr3SDES4AiH35K9FxNxXDx0T7xz3ykDeA1Gic3jIe0Ve2WragrMbJOaZjJNqfJ1gMK%2Bdvr0GOqUBldE2ucSQ6rW%2Bd%2BYuHgaQQ9Y6koxtb0jxKimgV1HX5vSzxtRodSm4sEsrnnMg3RvDmFNg51fBKPBJWn660h7cW8QaloUq6%2F%2FneVxg%2Brxya0YqOfKza4SDUSY34s6Wi0wRdgbHmPHCBqbA1oZxD%2B3dcuAdWH5BLYbWGEsbgndszAoqZ5a7%2Fhkny4D%2FtRCo3j96WpdYhvRgiAmVRbV09Th6dngaHQ1n&X-Amz-Signature=b1563f176b6afc0859a3605269d4f86d5e35837bf0d1849cd7ebf9bb79a418e9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSFQPMX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDkeBeqGMVeUv6YLlGh%2F7DM2uHVuEGXz98k%2F%2BIWfz6O5AIgMhzEe%2BLvvf2YHJr7n1O7tR7qsdzO3AekFNTtYLfC1OEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPmVmUIahKWmVjcqPircA77R8oZjZe%2FXM5vNuJR%2FxCS9%2FxADW2Q4TuzJv0qYDC5Be4sSHygadJGqM4kiayRJGsdvJe4nBHYzETuYV5tC9A3UiqBTk6rcwWFx8G6ehLGnpOsNkP75j58oEiOpNWToMZS4r2AV9Q86T6GO6cIkraenF%2BG3SMrSm4S0ZBuUTwXSXFS1zWSx45WM4kY6EtiNS8bD5fy330EnvocCiOj31FWkIAAxK9mAjWHenzwfgCa6WzeqIzxiUBRN0x1taGOAnvFDCBFCUyD5WubLLope6F0pZArHwcUAozxwMxwlo06RVZJC%2FEeq%2FGQFwQ41001zHqLGls%2BHsh01XcGcbJH7WwaXJIFZ5hlc7di%2FP8wzMNi1D1ttvf2G2ELkeTnVyGunkJde9LGmszwSA1GCIAA8GVcVrp6RaTz3nEh8rf%2BKzYn2w%2BuXSF6frRMI%2F7Dw2%2BCYF5OUmw%2F9%2B0H9K1Oau2Vg3O3tt6%2B53EgjjWi322BBODxWKuDbasKEYiW5HkkKv2B0lNdm1KqmK3A36aMfJJAdIcHZCHm8NZ0zjynOfKa596E1WRf7ndrsT323409zDr3SDES4AiH35K9FxNxXDx0T7xz3ykDeA1Gic3jIe0Ve2WragrMbJOaZjJNqfJ1gMK%2Bdvr0GOqUBldE2ucSQ6rW%2Bd%2BYuHgaQQ9Y6koxtb0jxKimgV1HX5vSzxtRodSm4sEsrnnMg3RvDmFNg51fBKPBJWn660h7cW8QaloUq6%2F%2FneVxg%2Brxya0YqOfKza4SDUSY34s6Wi0wRdgbHmPHCBqbA1oZxD%2B3dcuAdWH5BLYbWGEsbgndszAoqZ5a7%2Fhkny4D%2FtRCo3j96WpdYhvRgiAmVRbV09Th6dngaHQ1n&X-Amz-Signature=fdfb50fa63dc7f3c48c9bef40afbaf932794f29f448ffbaaaae1835ff8ec4775&X-Amz-SignedHeaders=host&x-id=GetObject)
