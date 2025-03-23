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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOH6VVG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBBwRIADQpTNROpFrp6gZOHAblvAzDoRT9%2FbQI9YJ2igAiEAo2k1A%2BX5E3GNs9jYvmWdM9gfHBFhxrP%2BemN3dar%2FFDYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqYsGiBLr0TjDgyQyrcA1P7DdiBr4wFnnTObE7XrKHfcnryi3uYy0wZw8bgWmIW39L5TtO8XaAZHJatGd256G09hjwzPlbA9l7oc8KbyadQLiiRmuba%2B27dgHKUZQL93IdbmzRzrEQWkre2eO15g6eIAp2gXQKub09z7VSxQ1rrtLUL69vgKvm8GSNnSXgUqp9uhop%2F%2FDlNiYwS0EWYi2hPng%2FFjclE72N3udY1jiM1Z5KyIHxzkvKRacbzrJ95hiQq7YzRItUQu2Pyh9SfmtWrhhjvyI4G9S4QqnIWf1a8eGCCYd2ELMWgPHNwnZjWx3wnNp6oOpgfGBV7zHOY1FBW4goAYLafU%2B0vV5vZg2uXbUFmANcYlwwOwY1DfJMqLDXPmfRFEmv3Ck98ro8HJ4%2FM81r3eyL3JH%2Fb8BmCLabcypq1g%2Fl3Bpkhb24iOZa%2FbIrC1s1QkZnulWNf8yCfmd%2FEZGf4dJVUQzBacofilTI8BrpxXXKNaLpT6D1gnqgHUI1c0CRhvOb2J9ihi1Ffc%2F0Uk29XJulzR9eMYR%2BrzWTyKWfA8XqI4bgO%2BvnWoW9oJYp8XaVWdmOUsvP%2BokyRxbE%2B76aXEvuvdVudY2PEggar7BnRBNX06ZD9QG6IlHlssbufoY71WfJDI5ZAMK%2Fc%2Fb4GOqUBEjxCdeY915AJNYot1wXwIyp9SbAyFNGYHaQQN2by9htGchtvnn%2Bw6zO%2B05DL9SgPtchR00%2BJESXPOAj8qikLj6RuwIFjLYVNWNgLFGx7SDTMNiH9nyhzai8qzuhu%2B4Dhnw8AoYr%2Fa6lwDq%2FBA0%2Bc8yGZlrthOPNrV7yiAsFOwbhlbIdD8E7FRdxSeA39FtCg92Kp%2BUAzI3nURSYswR%2F4CxmiersD&X-Amz-Signature=6cb273e2a16c70bcc807a3fafb592bc879eff73cbc1f0304d6a805a239312560&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOH6VVG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBBwRIADQpTNROpFrp6gZOHAblvAzDoRT9%2FbQI9YJ2igAiEAo2k1A%2BX5E3GNs9jYvmWdM9gfHBFhxrP%2BemN3dar%2FFDYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqYsGiBLr0TjDgyQyrcA1P7DdiBr4wFnnTObE7XrKHfcnryi3uYy0wZw8bgWmIW39L5TtO8XaAZHJatGd256G09hjwzPlbA9l7oc8KbyadQLiiRmuba%2B27dgHKUZQL93IdbmzRzrEQWkre2eO15g6eIAp2gXQKub09z7VSxQ1rrtLUL69vgKvm8GSNnSXgUqp9uhop%2F%2FDlNiYwS0EWYi2hPng%2FFjclE72N3udY1jiM1Z5KyIHxzkvKRacbzrJ95hiQq7YzRItUQu2Pyh9SfmtWrhhjvyI4G9S4QqnIWf1a8eGCCYd2ELMWgPHNwnZjWx3wnNp6oOpgfGBV7zHOY1FBW4goAYLafU%2B0vV5vZg2uXbUFmANcYlwwOwY1DfJMqLDXPmfRFEmv3Ck98ro8HJ4%2FM81r3eyL3JH%2Fb8BmCLabcypq1g%2Fl3Bpkhb24iOZa%2FbIrC1s1QkZnulWNf8yCfmd%2FEZGf4dJVUQzBacofilTI8BrpxXXKNaLpT6D1gnqgHUI1c0CRhvOb2J9ihi1Ffc%2F0Uk29XJulzR9eMYR%2BrzWTyKWfA8XqI4bgO%2BvnWoW9oJYp8XaVWdmOUsvP%2BokyRxbE%2B76aXEvuvdVudY2PEggar7BnRBNX06ZD9QG6IlHlssbufoY71WfJDI5ZAMK%2Fc%2Fb4GOqUBEjxCdeY915AJNYot1wXwIyp9SbAyFNGYHaQQN2by9htGchtvnn%2Bw6zO%2B05DL9SgPtchR00%2BJESXPOAj8qikLj6RuwIFjLYVNWNgLFGx7SDTMNiH9nyhzai8qzuhu%2B4Dhnw8AoYr%2Fa6lwDq%2FBA0%2Bc8yGZlrthOPNrV7yiAsFOwbhlbIdD8E7FRdxSeA39FtCg92Kp%2BUAzI3nURSYswR%2F4CxmiersD&X-Amz-Signature=e7ba5dd98395aa63344af4d03db5975a325c5445ab7d88d68b296f2d98cff838&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOH6VVG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBBwRIADQpTNROpFrp6gZOHAblvAzDoRT9%2FbQI9YJ2igAiEAo2k1A%2BX5E3GNs9jYvmWdM9gfHBFhxrP%2BemN3dar%2FFDYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqYsGiBLr0TjDgyQyrcA1P7DdiBr4wFnnTObE7XrKHfcnryi3uYy0wZw8bgWmIW39L5TtO8XaAZHJatGd256G09hjwzPlbA9l7oc8KbyadQLiiRmuba%2B27dgHKUZQL93IdbmzRzrEQWkre2eO15g6eIAp2gXQKub09z7VSxQ1rrtLUL69vgKvm8GSNnSXgUqp9uhop%2F%2FDlNiYwS0EWYi2hPng%2FFjclE72N3udY1jiM1Z5KyIHxzkvKRacbzrJ95hiQq7YzRItUQu2Pyh9SfmtWrhhjvyI4G9S4QqnIWf1a8eGCCYd2ELMWgPHNwnZjWx3wnNp6oOpgfGBV7zHOY1FBW4goAYLafU%2B0vV5vZg2uXbUFmANcYlwwOwY1DfJMqLDXPmfRFEmv3Ck98ro8HJ4%2FM81r3eyL3JH%2Fb8BmCLabcypq1g%2Fl3Bpkhb24iOZa%2FbIrC1s1QkZnulWNf8yCfmd%2FEZGf4dJVUQzBacofilTI8BrpxXXKNaLpT6D1gnqgHUI1c0CRhvOb2J9ihi1Ffc%2F0Uk29XJulzR9eMYR%2BrzWTyKWfA8XqI4bgO%2BvnWoW9oJYp8XaVWdmOUsvP%2BokyRxbE%2B76aXEvuvdVudY2PEggar7BnRBNX06ZD9QG6IlHlssbufoY71WfJDI5ZAMK%2Fc%2Fb4GOqUBEjxCdeY915AJNYot1wXwIyp9SbAyFNGYHaQQN2by9htGchtvnn%2Bw6zO%2B05DL9SgPtchR00%2BJESXPOAj8qikLj6RuwIFjLYVNWNgLFGx7SDTMNiH9nyhzai8qzuhu%2B4Dhnw8AoYr%2Fa6lwDq%2FBA0%2Bc8yGZlrthOPNrV7yiAsFOwbhlbIdD8E7FRdxSeA39FtCg92Kp%2BUAzI3nURSYswR%2F4CxmiersD&X-Amz-Signature=a83d7577ab4bcdbdab214e7d2d7683fbca9f6fb14fd66cd36a97b5136919527f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOH6VVG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBBwRIADQpTNROpFrp6gZOHAblvAzDoRT9%2FbQI9YJ2igAiEAo2k1A%2BX5E3GNs9jYvmWdM9gfHBFhxrP%2BemN3dar%2FFDYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqYsGiBLr0TjDgyQyrcA1P7DdiBr4wFnnTObE7XrKHfcnryi3uYy0wZw8bgWmIW39L5TtO8XaAZHJatGd256G09hjwzPlbA9l7oc8KbyadQLiiRmuba%2B27dgHKUZQL93IdbmzRzrEQWkre2eO15g6eIAp2gXQKub09z7VSxQ1rrtLUL69vgKvm8GSNnSXgUqp9uhop%2F%2FDlNiYwS0EWYi2hPng%2FFjclE72N3udY1jiM1Z5KyIHxzkvKRacbzrJ95hiQq7YzRItUQu2Pyh9SfmtWrhhjvyI4G9S4QqnIWf1a8eGCCYd2ELMWgPHNwnZjWx3wnNp6oOpgfGBV7zHOY1FBW4goAYLafU%2B0vV5vZg2uXbUFmANcYlwwOwY1DfJMqLDXPmfRFEmv3Ck98ro8HJ4%2FM81r3eyL3JH%2Fb8BmCLabcypq1g%2Fl3Bpkhb24iOZa%2FbIrC1s1QkZnulWNf8yCfmd%2FEZGf4dJVUQzBacofilTI8BrpxXXKNaLpT6D1gnqgHUI1c0CRhvOb2J9ihi1Ffc%2F0Uk29XJulzR9eMYR%2BrzWTyKWfA8XqI4bgO%2BvnWoW9oJYp8XaVWdmOUsvP%2BokyRxbE%2B76aXEvuvdVudY2PEggar7BnRBNX06ZD9QG6IlHlssbufoY71WfJDI5ZAMK%2Fc%2Fb4GOqUBEjxCdeY915AJNYot1wXwIyp9SbAyFNGYHaQQN2by9htGchtvnn%2Bw6zO%2B05DL9SgPtchR00%2BJESXPOAj8qikLj6RuwIFjLYVNWNgLFGx7SDTMNiH9nyhzai8qzuhu%2B4Dhnw8AoYr%2Fa6lwDq%2FBA0%2Bc8yGZlrthOPNrV7yiAsFOwbhlbIdD8E7FRdxSeA39FtCg92Kp%2BUAzI3nURSYswR%2F4CxmiersD&X-Amz-Signature=6a288580eb4ab8f50bdb05a6eb910074a7707c0e31fe1a5839cd2437403633dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOH6VVG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBBwRIADQpTNROpFrp6gZOHAblvAzDoRT9%2FbQI9YJ2igAiEAo2k1A%2BX5E3GNs9jYvmWdM9gfHBFhxrP%2BemN3dar%2FFDYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqYsGiBLr0TjDgyQyrcA1P7DdiBr4wFnnTObE7XrKHfcnryi3uYy0wZw8bgWmIW39L5TtO8XaAZHJatGd256G09hjwzPlbA9l7oc8KbyadQLiiRmuba%2B27dgHKUZQL93IdbmzRzrEQWkre2eO15g6eIAp2gXQKub09z7VSxQ1rrtLUL69vgKvm8GSNnSXgUqp9uhop%2F%2FDlNiYwS0EWYi2hPng%2FFjclE72N3udY1jiM1Z5KyIHxzkvKRacbzrJ95hiQq7YzRItUQu2Pyh9SfmtWrhhjvyI4G9S4QqnIWf1a8eGCCYd2ELMWgPHNwnZjWx3wnNp6oOpgfGBV7zHOY1FBW4goAYLafU%2B0vV5vZg2uXbUFmANcYlwwOwY1DfJMqLDXPmfRFEmv3Ck98ro8HJ4%2FM81r3eyL3JH%2Fb8BmCLabcypq1g%2Fl3Bpkhb24iOZa%2FbIrC1s1QkZnulWNf8yCfmd%2FEZGf4dJVUQzBacofilTI8BrpxXXKNaLpT6D1gnqgHUI1c0CRhvOb2J9ihi1Ffc%2F0Uk29XJulzR9eMYR%2BrzWTyKWfA8XqI4bgO%2BvnWoW9oJYp8XaVWdmOUsvP%2BokyRxbE%2B76aXEvuvdVudY2PEggar7BnRBNX06ZD9QG6IlHlssbufoY71WfJDI5ZAMK%2Fc%2Fb4GOqUBEjxCdeY915AJNYot1wXwIyp9SbAyFNGYHaQQN2by9htGchtvnn%2Bw6zO%2B05DL9SgPtchR00%2BJESXPOAj8qikLj6RuwIFjLYVNWNgLFGx7SDTMNiH9nyhzai8qzuhu%2B4Dhnw8AoYr%2Fa6lwDq%2FBA0%2Bc8yGZlrthOPNrV7yiAsFOwbhlbIdD8E7FRdxSeA39FtCg92Kp%2BUAzI3nURSYswR%2F4CxmiersD&X-Amz-Signature=048dc3a6ff5453aee9b49646851f24f73c00700dc879ca1719c477720135762a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOH6VVG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBBwRIADQpTNROpFrp6gZOHAblvAzDoRT9%2FbQI9YJ2igAiEAo2k1A%2BX5E3GNs9jYvmWdM9gfHBFhxrP%2BemN3dar%2FFDYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqYsGiBLr0TjDgyQyrcA1P7DdiBr4wFnnTObE7XrKHfcnryi3uYy0wZw8bgWmIW39L5TtO8XaAZHJatGd256G09hjwzPlbA9l7oc8KbyadQLiiRmuba%2B27dgHKUZQL93IdbmzRzrEQWkre2eO15g6eIAp2gXQKub09z7VSxQ1rrtLUL69vgKvm8GSNnSXgUqp9uhop%2F%2FDlNiYwS0EWYi2hPng%2FFjclE72N3udY1jiM1Z5KyIHxzkvKRacbzrJ95hiQq7YzRItUQu2Pyh9SfmtWrhhjvyI4G9S4QqnIWf1a8eGCCYd2ELMWgPHNwnZjWx3wnNp6oOpgfGBV7zHOY1FBW4goAYLafU%2B0vV5vZg2uXbUFmANcYlwwOwY1DfJMqLDXPmfRFEmv3Ck98ro8HJ4%2FM81r3eyL3JH%2Fb8BmCLabcypq1g%2Fl3Bpkhb24iOZa%2FbIrC1s1QkZnulWNf8yCfmd%2FEZGf4dJVUQzBacofilTI8BrpxXXKNaLpT6D1gnqgHUI1c0CRhvOb2J9ihi1Ffc%2F0Uk29XJulzR9eMYR%2BrzWTyKWfA8XqI4bgO%2BvnWoW9oJYp8XaVWdmOUsvP%2BokyRxbE%2B76aXEvuvdVudY2PEggar7BnRBNX06ZD9QG6IlHlssbufoY71WfJDI5ZAMK%2Fc%2Fb4GOqUBEjxCdeY915AJNYot1wXwIyp9SbAyFNGYHaQQN2by9htGchtvnn%2Bw6zO%2B05DL9SgPtchR00%2BJESXPOAj8qikLj6RuwIFjLYVNWNgLFGx7SDTMNiH9nyhzai8qzuhu%2B4Dhnw8AoYr%2Fa6lwDq%2FBA0%2Bc8yGZlrthOPNrV7yiAsFOwbhlbIdD8E7FRdxSeA39FtCg92Kp%2BUAzI3nURSYswR%2F4CxmiersD&X-Amz-Signature=e7893efa7f4811a91b372b9fad389f0af02ca6ea120c8c8524512ee41ac446c8&X-Amz-SignedHeaders=host&x-id=GetObject)
