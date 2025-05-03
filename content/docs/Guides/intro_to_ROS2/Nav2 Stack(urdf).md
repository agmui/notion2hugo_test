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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OCS53LY%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEE32MmoBMOEFYDFfssa9dxHmrQ3o0FURb9g2GaH9rHRAiB%2Fmnsd43JqvXA1SKLOb43As1lLT0liedh2YazBExvDZSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FSjeLggc7QuaUmBuKtwDbSD5PHU4%2BBnclL5tz%2BDe4bYTMCGutPIAkQhoCQcquoqBzLrqltS1bed6wKnkH622MnZ68IPcj9BzPbTtxfPHt0PAX7kYp4hFIfCkZsCXYRAH6OdxZnVzEx1fUyTOJ1A%2FNAvgvig%2FfaaOKmnJQFqk4Di%2BBERuiw%2Bi7ZBquJNY5rrv7QxqleNrGUUpM6ERsq0ZF%2FMhIrTsd7ghk24mIVaxVgWuQmK%2F0aov0Mu9GS1UmYE9AYj7vl2%2BzcS11Fz3KXsxXmDTmrB3165A1u3yRBpcUwZpeY%2FzBSC0fXOjUhMy%2BdgqjKz1PcDctSIBX1ImhXXfGc7i%2Fpx8EwMdmynyg8U2wvZJUJG%2BM9DGGxa9Xkq02p%2FtwAh0EUQawN5L%2FY8czvlMNMhixBkk1YdPaMcO7WmcUGbnPu%2FX7hboYps88aF%2FpLcvXH%2BoZdEU4qIP%2FBpwwOlFfnqC75hN3HBARlyiW%2ByP%2B9QQCb7mr3OCmIaAKo2wWbd7LyQxnlOxm3zQsSmKEkYHDYAKhxIEUbpMCmu5nqfy8HNltglRjMQ2GI5Tjo%2BGvEnfgszGquHmdyGrX9xvsaGk%2FkxUVM1frSF7IRo82A6o%2Fl9zuIKjhm90OV3AS5xDpIt%2B0PY573t7afpPjN0w%2Br7VwAY6pgGI1h7sruKs5L7sa613kLcQV0YGZvUcwVoPcPBbIQP7Xjfxtq9bQ4PulrgQLRjk1PU8LN7eYRn4JFbvsp6JoUe2Js5BrBjd2Qql2YAe3VPZzVhh1ltazukOeiw%2BD%2BONuJRXq%2BgpW7DeA5wNqBDUP3GoKQGCbhy%2BxWFaEcj7eqWi8vQE6dS302a%2Fn0mlzvhFFetHDgLaQ%2F5gKzfSmrPtYsMwNQGAFcLV&X-Amz-Signature=3f68d25f6736ce783a49beac1fb894575c8b9ff5b00a7495fb3339e13ef13989&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OCS53LY%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEE32MmoBMOEFYDFfssa9dxHmrQ3o0FURb9g2GaH9rHRAiB%2Fmnsd43JqvXA1SKLOb43As1lLT0liedh2YazBExvDZSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FSjeLggc7QuaUmBuKtwDbSD5PHU4%2BBnclL5tz%2BDe4bYTMCGutPIAkQhoCQcquoqBzLrqltS1bed6wKnkH622MnZ68IPcj9BzPbTtxfPHt0PAX7kYp4hFIfCkZsCXYRAH6OdxZnVzEx1fUyTOJ1A%2FNAvgvig%2FfaaOKmnJQFqk4Di%2BBERuiw%2Bi7ZBquJNY5rrv7QxqleNrGUUpM6ERsq0ZF%2FMhIrTsd7ghk24mIVaxVgWuQmK%2F0aov0Mu9GS1UmYE9AYj7vl2%2BzcS11Fz3KXsxXmDTmrB3165A1u3yRBpcUwZpeY%2FzBSC0fXOjUhMy%2BdgqjKz1PcDctSIBX1ImhXXfGc7i%2Fpx8EwMdmynyg8U2wvZJUJG%2BM9DGGxa9Xkq02p%2FtwAh0EUQawN5L%2FY8czvlMNMhixBkk1YdPaMcO7WmcUGbnPu%2FX7hboYps88aF%2FpLcvXH%2BoZdEU4qIP%2FBpwwOlFfnqC75hN3HBARlyiW%2ByP%2B9QQCb7mr3OCmIaAKo2wWbd7LyQxnlOxm3zQsSmKEkYHDYAKhxIEUbpMCmu5nqfy8HNltglRjMQ2GI5Tjo%2BGvEnfgszGquHmdyGrX9xvsaGk%2FkxUVM1frSF7IRo82A6o%2Fl9zuIKjhm90OV3AS5xDpIt%2B0PY573t7afpPjN0w%2Br7VwAY6pgGI1h7sruKs5L7sa613kLcQV0YGZvUcwVoPcPBbIQP7Xjfxtq9bQ4PulrgQLRjk1PU8LN7eYRn4JFbvsp6JoUe2Js5BrBjd2Qql2YAe3VPZzVhh1ltazukOeiw%2BD%2BONuJRXq%2BgpW7DeA5wNqBDUP3GoKQGCbhy%2BxWFaEcj7eqWi8vQE6dS302a%2Fn0mlzvhFFetHDgLaQ%2F5gKzfSmrPtYsMwNQGAFcLV&X-Amz-Signature=d2b16151dac8e72921e7dbaf09141fe10665b0e3f2d6b147c8a00aa4e3bb6fcb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OCS53LY%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEE32MmoBMOEFYDFfssa9dxHmrQ3o0FURb9g2GaH9rHRAiB%2Fmnsd43JqvXA1SKLOb43As1lLT0liedh2YazBExvDZSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FSjeLggc7QuaUmBuKtwDbSD5PHU4%2BBnclL5tz%2BDe4bYTMCGutPIAkQhoCQcquoqBzLrqltS1bed6wKnkH622MnZ68IPcj9BzPbTtxfPHt0PAX7kYp4hFIfCkZsCXYRAH6OdxZnVzEx1fUyTOJ1A%2FNAvgvig%2FfaaOKmnJQFqk4Di%2BBERuiw%2Bi7ZBquJNY5rrv7QxqleNrGUUpM6ERsq0ZF%2FMhIrTsd7ghk24mIVaxVgWuQmK%2F0aov0Mu9GS1UmYE9AYj7vl2%2BzcS11Fz3KXsxXmDTmrB3165A1u3yRBpcUwZpeY%2FzBSC0fXOjUhMy%2BdgqjKz1PcDctSIBX1ImhXXfGc7i%2Fpx8EwMdmynyg8U2wvZJUJG%2BM9DGGxa9Xkq02p%2FtwAh0EUQawN5L%2FY8czvlMNMhixBkk1YdPaMcO7WmcUGbnPu%2FX7hboYps88aF%2FpLcvXH%2BoZdEU4qIP%2FBpwwOlFfnqC75hN3HBARlyiW%2ByP%2B9QQCb7mr3OCmIaAKo2wWbd7LyQxnlOxm3zQsSmKEkYHDYAKhxIEUbpMCmu5nqfy8HNltglRjMQ2GI5Tjo%2BGvEnfgszGquHmdyGrX9xvsaGk%2FkxUVM1frSF7IRo82A6o%2Fl9zuIKjhm90OV3AS5xDpIt%2B0PY573t7afpPjN0w%2Br7VwAY6pgGI1h7sruKs5L7sa613kLcQV0YGZvUcwVoPcPBbIQP7Xjfxtq9bQ4PulrgQLRjk1PU8LN7eYRn4JFbvsp6JoUe2Js5BrBjd2Qql2YAe3VPZzVhh1ltazukOeiw%2BD%2BONuJRXq%2BgpW7DeA5wNqBDUP3GoKQGCbhy%2BxWFaEcj7eqWi8vQE6dS302a%2Fn0mlzvhFFetHDgLaQ%2F5gKzfSmrPtYsMwNQGAFcLV&X-Amz-Signature=6d95b1601678a8b813cdb7fcf7d807bd2ff0990a64b738a199ff46246135b0ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OCS53LY%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEE32MmoBMOEFYDFfssa9dxHmrQ3o0FURb9g2GaH9rHRAiB%2Fmnsd43JqvXA1SKLOb43As1lLT0liedh2YazBExvDZSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FSjeLggc7QuaUmBuKtwDbSD5PHU4%2BBnclL5tz%2BDe4bYTMCGutPIAkQhoCQcquoqBzLrqltS1bed6wKnkH622MnZ68IPcj9BzPbTtxfPHt0PAX7kYp4hFIfCkZsCXYRAH6OdxZnVzEx1fUyTOJ1A%2FNAvgvig%2FfaaOKmnJQFqk4Di%2BBERuiw%2Bi7ZBquJNY5rrv7QxqleNrGUUpM6ERsq0ZF%2FMhIrTsd7ghk24mIVaxVgWuQmK%2F0aov0Mu9GS1UmYE9AYj7vl2%2BzcS11Fz3KXsxXmDTmrB3165A1u3yRBpcUwZpeY%2FzBSC0fXOjUhMy%2BdgqjKz1PcDctSIBX1ImhXXfGc7i%2Fpx8EwMdmynyg8U2wvZJUJG%2BM9DGGxa9Xkq02p%2FtwAh0EUQawN5L%2FY8czvlMNMhixBkk1YdPaMcO7WmcUGbnPu%2FX7hboYps88aF%2FpLcvXH%2BoZdEU4qIP%2FBpwwOlFfnqC75hN3HBARlyiW%2ByP%2B9QQCb7mr3OCmIaAKo2wWbd7LyQxnlOxm3zQsSmKEkYHDYAKhxIEUbpMCmu5nqfy8HNltglRjMQ2GI5Tjo%2BGvEnfgszGquHmdyGrX9xvsaGk%2FkxUVM1frSF7IRo82A6o%2Fl9zuIKjhm90OV3AS5xDpIt%2B0PY573t7afpPjN0w%2Br7VwAY6pgGI1h7sruKs5L7sa613kLcQV0YGZvUcwVoPcPBbIQP7Xjfxtq9bQ4PulrgQLRjk1PU8LN7eYRn4JFbvsp6JoUe2Js5BrBjd2Qql2YAe3VPZzVhh1ltazukOeiw%2BD%2BONuJRXq%2BgpW7DeA5wNqBDUP3GoKQGCbhy%2BxWFaEcj7eqWi8vQE6dS302a%2Fn0mlzvhFFetHDgLaQ%2F5gKzfSmrPtYsMwNQGAFcLV&X-Amz-Signature=c4ba8fa90b2c549008c56b78cc4f2a0bd9b050881852e4d64de398eae4a6c5c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OCS53LY%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEE32MmoBMOEFYDFfssa9dxHmrQ3o0FURb9g2GaH9rHRAiB%2Fmnsd43JqvXA1SKLOb43As1lLT0liedh2YazBExvDZSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FSjeLggc7QuaUmBuKtwDbSD5PHU4%2BBnclL5tz%2BDe4bYTMCGutPIAkQhoCQcquoqBzLrqltS1bed6wKnkH622MnZ68IPcj9BzPbTtxfPHt0PAX7kYp4hFIfCkZsCXYRAH6OdxZnVzEx1fUyTOJ1A%2FNAvgvig%2FfaaOKmnJQFqk4Di%2BBERuiw%2Bi7ZBquJNY5rrv7QxqleNrGUUpM6ERsq0ZF%2FMhIrTsd7ghk24mIVaxVgWuQmK%2F0aov0Mu9GS1UmYE9AYj7vl2%2BzcS11Fz3KXsxXmDTmrB3165A1u3yRBpcUwZpeY%2FzBSC0fXOjUhMy%2BdgqjKz1PcDctSIBX1ImhXXfGc7i%2Fpx8EwMdmynyg8U2wvZJUJG%2BM9DGGxa9Xkq02p%2FtwAh0EUQawN5L%2FY8czvlMNMhixBkk1YdPaMcO7WmcUGbnPu%2FX7hboYps88aF%2FpLcvXH%2BoZdEU4qIP%2FBpwwOlFfnqC75hN3HBARlyiW%2ByP%2B9QQCb7mr3OCmIaAKo2wWbd7LyQxnlOxm3zQsSmKEkYHDYAKhxIEUbpMCmu5nqfy8HNltglRjMQ2GI5Tjo%2BGvEnfgszGquHmdyGrX9xvsaGk%2FkxUVM1frSF7IRo82A6o%2Fl9zuIKjhm90OV3AS5xDpIt%2B0PY573t7afpPjN0w%2Br7VwAY6pgGI1h7sruKs5L7sa613kLcQV0YGZvUcwVoPcPBbIQP7Xjfxtq9bQ4PulrgQLRjk1PU8LN7eYRn4JFbvsp6JoUe2Js5BrBjd2Qql2YAe3VPZzVhh1ltazukOeiw%2BD%2BONuJRXq%2BgpW7DeA5wNqBDUP3GoKQGCbhy%2BxWFaEcj7eqWi8vQE6dS302a%2Fn0mlzvhFFetHDgLaQ%2F5gKzfSmrPtYsMwNQGAFcLV&X-Amz-Signature=06da7bed3d37c30493b82f4060ae21d1366a7bd97b25f31f1c82321cd671e2d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OCS53LY%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEE32MmoBMOEFYDFfssa9dxHmrQ3o0FURb9g2GaH9rHRAiB%2Fmnsd43JqvXA1SKLOb43As1lLT0liedh2YazBExvDZSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FSjeLggc7QuaUmBuKtwDbSD5PHU4%2BBnclL5tz%2BDe4bYTMCGutPIAkQhoCQcquoqBzLrqltS1bed6wKnkH622MnZ68IPcj9BzPbTtxfPHt0PAX7kYp4hFIfCkZsCXYRAH6OdxZnVzEx1fUyTOJ1A%2FNAvgvig%2FfaaOKmnJQFqk4Di%2BBERuiw%2Bi7ZBquJNY5rrv7QxqleNrGUUpM6ERsq0ZF%2FMhIrTsd7ghk24mIVaxVgWuQmK%2F0aov0Mu9GS1UmYE9AYj7vl2%2BzcS11Fz3KXsxXmDTmrB3165A1u3yRBpcUwZpeY%2FzBSC0fXOjUhMy%2BdgqjKz1PcDctSIBX1ImhXXfGc7i%2Fpx8EwMdmynyg8U2wvZJUJG%2BM9DGGxa9Xkq02p%2FtwAh0EUQawN5L%2FY8czvlMNMhixBkk1YdPaMcO7WmcUGbnPu%2FX7hboYps88aF%2FpLcvXH%2BoZdEU4qIP%2FBpwwOlFfnqC75hN3HBARlyiW%2ByP%2B9QQCb7mr3OCmIaAKo2wWbd7LyQxnlOxm3zQsSmKEkYHDYAKhxIEUbpMCmu5nqfy8HNltglRjMQ2GI5Tjo%2BGvEnfgszGquHmdyGrX9xvsaGk%2FkxUVM1frSF7IRo82A6o%2Fl9zuIKjhm90OV3AS5xDpIt%2B0PY573t7afpPjN0w%2Br7VwAY6pgGI1h7sruKs5L7sa613kLcQV0YGZvUcwVoPcPBbIQP7Xjfxtq9bQ4PulrgQLRjk1PU8LN7eYRn4JFbvsp6JoUe2Js5BrBjd2Qql2YAe3VPZzVhh1ltazukOeiw%2BD%2BONuJRXq%2BgpW7DeA5wNqBDUP3GoKQGCbhy%2BxWFaEcj7eqWi8vQE6dS302a%2Fn0mlzvhFFetHDgLaQ%2F5gKzfSmrPtYsMwNQGAFcLV&X-Amz-Signature=495655ddd66bce5a82066ff50a8088eef9882f490b750ed414e571d5ff173005&X-Amz-SignedHeaders=host&x-id=GetObject)
