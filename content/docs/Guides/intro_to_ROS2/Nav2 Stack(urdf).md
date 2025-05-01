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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCOFZACC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCytoIldG7bMzDq3zXgQ0IruU31piLuuAMDzdSN3v%2FGzAIgPNJXstGOgWR0LTe13Exm%2BVZGgxT%2FvDdIqLsk7ZefZrcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaNLoLVs%2F1D39xe2CrcA%2BdIjB0oyKb%2Fl1ssPrU7pKeyCNHneyGDstHAzkYLVw0jgJdi8dPk4d4inOq8vPaOswiZ8Po0kP4kAqeC9O8srRV9G9FI9CtbCbb%2FH1hDl27wLRbBcyL9z%2Br88E32JvM6ZXbkZkkDzGRhrTrxts9AMaub12gizozT%2FQWKXKTETYDlpObJqjlpmN0Lx%2FGgCsWC6LgzLkiJGw2i75W00iSqSQjoFlcgl2pyIEbHFOKzKbRQJyRWwD0nXvMHjsMscsdznpgDDSH5Y7bkMA0Y6y009WUXyYlvScZIm3JDroAevwIHrtEH8w1v9U9V77qTri5QeGc7Vz3gbmra9j4E2gsJ94DGoOKnx7FZlO2KBwcrMTLvTNJhzLLO0lmi0I02cCqzY66AkRDRVmmAfjER6EL%2BT9dsEtg9ALZeY9At6J9wr1sGoAtsHIlWzmwQxM1tSu9Md9LlYMpadUG5%2FcoO%2FNvAdFOxrb5ci806%2B0W5dalJdZcNm%2BhggGhJ4FV9vJ9rB4NZ%2FATcs1VIsXhUOQFXGkE1jf92%2FTMLt07EUzI%2FTZzY%2BRsvQsHhttLzVSLy%2BBMeNf3gw2B7kVgp2YVItnN58345it3FeX7uuUyJ5oZD2%2FmspMLUPXOIaMEMKorjDiQuMLOrz8AGOqUBo1Ffe3cw3ygJ4Ngv1WkZVoLgHsDCnA4Ru42XwhBwjZs1rtODWNxKmLIynT5heLY7FVKcH7mkrQER9GLtA%2FqSmh%2FbJoVlLOENeqKfFjC4bp5NGGQnkBnI4rMomKqmCRk3mfDaDotoKU1NDUJqoWmVjbvd2e6O9NduPSHBydjILrAhEDwd6Ae%2FnvUE%2BMvnHeivRoe0n%2BSH6HTnqaSlbXesQKD%2BcqLb&X-Amz-Signature=36b39b1c6acc8826520249925a08a579dd455890c6232194c9d9f55d993b1042&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCOFZACC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCytoIldG7bMzDq3zXgQ0IruU31piLuuAMDzdSN3v%2FGzAIgPNJXstGOgWR0LTe13Exm%2BVZGgxT%2FvDdIqLsk7ZefZrcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaNLoLVs%2F1D39xe2CrcA%2BdIjB0oyKb%2Fl1ssPrU7pKeyCNHneyGDstHAzkYLVw0jgJdi8dPk4d4inOq8vPaOswiZ8Po0kP4kAqeC9O8srRV9G9FI9CtbCbb%2FH1hDl27wLRbBcyL9z%2Br88E32JvM6ZXbkZkkDzGRhrTrxts9AMaub12gizozT%2FQWKXKTETYDlpObJqjlpmN0Lx%2FGgCsWC6LgzLkiJGw2i75W00iSqSQjoFlcgl2pyIEbHFOKzKbRQJyRWwD0nXvMHjsMscsdznpgDDSH5Y7bkMA0Y6y009WUXyYlvScZIm3JDroAevwIHrtEH8w1v9U9V77qTri5QeGc7Vz3gbmra9j4E2gsJ94DGoOKnx7FZlO2KBwcrMTLvTNJhzLLO0lmi0I02cCqzY66AkRDRVmmAfjER6EL%2BT9dsEtg9ALZeY9At6J9wr1sGoAtsHIlWzmwQxM1tSu9Md9LlYMpadUG5%2FcoO%2FNvAdFOxrb5ci806%2B0W5dalJdZcNm%2BhggGhJ4FV9vJ9rB4NZ%2FATcs1VIsXhUOQFXGkE1jf92%2FTMLt07EUzI%2FTZzY%2BRsvQsHhttLzVSLy%2BBMeNf3gw2B7kVgp2YVItnN58345it3FeX7uuUyJ5oZD2%2FmspMLUPXOIaMEMKorjDiQuMLOrz8AGOqUBo1Ffe3cw3ygJ4Ngv1WkZVoLgHsDCnA4Ru42XwhBwjZs1rtODWNxKmLIynT5heLY7FVKcH7mkrQER9GLtA%2FqSmh%2FbJoVlLOENeqKfFjC4bp5NGGQnkBnI4rMomKqmCRk3mfDaDotoKU1NDUJqoWmVjbvd2e6O9NduPSHBydjILrAhEDwd6Ae%2FnvUE%2BMvnHeivRoe0n%2BSH6HTnqaSlbXesQKD%2BcqLb&X-Amz-Signature=7c66f1f81c6acafe6221eb8862c1e4e40aaf7e266780acdc20d1cf91b2ba2f10&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCOFZACC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCytoIldG7bMzDq3zXgQ0IruU31piLuuAMDzdSN3v%2FGzAIgPNJXstGOgWR0LTe13Exm%2BVZGgxT%2FvDdIqLsk7ZefZrcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaNLoLVs%2F1D39xe2CrcA%2BdIjB0oyKb%2Fl1ssPrU7pKeyCNHneyGDstHAzkYLVw0jgJdi8dPk4d4inOq8vPaOswiZ8Po0kP4kAqeC9O8srRV9G9FI9CtbCbb%2FH1hDl27wLRbBcyL9z%2Br88E32JvM6ZXbkZkkDzGRhrTrxts9AMaub12gizozT%2FQWKXKTETYDlpObJqjlpmN0Lx%2FGgCsWC6LgzLkiJGw2i75W00iSqSQjoFlcgl2pyIEbHFOKzKbRQJyRWwD0nXvMHjsMscsdznpgDDSH5Y7bkMA0Y6y009WUXyYlvScZIm3JDroAevwIHrtEH8w1v9U9V77qTri5QeGc7Vz3gbmra9j4E2gsJ94DGoOKnx7FZlO2KBwcrMTLvTNJhzLLO0lmi0I02cCqzY66AkRDRVmmAfjER6EL%2BT9dsEtg9ALZeY9At6J9wr1sGoAtsHIlWzmwQxM1tSu9Md9LlYMpadUG5%2FcoO%2FNvAdFOxrb5ci806%2B0W5dalJdZcNm%2BhggGhJ4FV9vJ9rB4NZ%2FATcs1VIsXhUOQFXGkE1jf92%2FTMLt07EUzI%2FTZzY%2BRsvQsHhttLzVSLy%2BBMeNf3gw2B7kVgp2YVItnN58345it3FeX7uuUyJ5oZD2%2FmspMLUPXOIaMEMKorjDiQuMLOrz8AGOqUBo1Ffe3cw3ygJ4Ngv1WkZVoLgHsDCnA4Ru42XwhBwjZs1rtODWNxKmLIynT5heLY7FVKcH7mkrQER9GLtA%2FqSmh%2FbJoVlLOENeqKfFjC4bp5NGGQnkBnI4rMomKqmCRk3mfDaDotoKU1NDUJqoWmVjbvd2e6O9NduPSHBydjILrAhEDwd6Ae%2FnvUE%2BMvnHeivRoe0n%2BSH6HTnqaSlbXesQKD%2BcqLb&X-Amz-Signature=ea86990bd949d03ca104717d359556b456de8bcedb720398b5313b1b59c2b21f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCOFZACC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCytoIldG7bMzDq3zXgQ0IruU31piLuuAMDzdSN3v%2FGzAIgPNJXstGOgWR0LTe13Exm%2BVZGgxT%2FvDdIqLsk7ZefZrcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaNLoLVs%2F1D39xe2CrcA%2BdIjB0oyKb%2Fl1ssPrU7pKeyCNHneyGDstHAzkYLVw0jgJdi8dPk4d4inOq8vPaOswiZ8Po0kP4kAqeC9O8srRV9G9FI9CtbCbb%2FH1hDl27wLRbBcyL9z%2Br88E32JvM6ZXbkZkkDzGRhrTrxts9AMaub12gizozT%2FQWKXKTETYDlpObJqjlpmN0Lx%2FGgCsWC6LgzLkiJGw2i75W00iSqSQjoFlcgl2pyIEbHFOKzKbRQJyRWwD0nXvMHjsMscsdznpgDDSH5Y7bkMA0Y6y009WUXyYlvScZIm3JDroAevwIHrtEH8w1v9U9V77qTri5QeGc7Vz3gbmra9j4E2gsJ94DGoOKnx7FZlO2KBwcrMTLvTNJhzLLO0lmi0I02cCqzY66AkRDRVmmAfjER6EL%2BT9dsEtg9ALZeY9At6J9wr1sGoAtsHIlWzmwQxM1tSu9Md9LlYMpadUG5%2FcoO%2FNvAdFOxrb5ci806%2B0W5dalJdZcNm%2BhggGhJ4FV9vJ9rB4NZ%2FATcs1VIsXhUOQFXGkE1jf92%2FTMLt07EUzI%2FTZzY%2BRsvQsHhttLzVSLy%2BBMeNf3gw2B7kVgp2YVItnN58345it3FeX7uuUyJ5oZD2%2FmspMLUPXOIaMEMKorjDiQuMLOrz8AGOqUBo1Ffe3cw3ygJ4Ngv1WkZVoLgHsDCnA4Ru42XwhBwjZs1rtODWNxKmLIynT5heLY7FVKcH7mkrQER9GLtA%2FqSmh%2FbJoVlLOENeqKfFjC4bp5NGGQnkBnI4rMomKqmCRk3mfDaDotoKU1NDUJqoWmVjbvd2e6O9NduPSHBydjILrAhEDwd6Ae%2FnvUE%2BMvnHeivRoe0n%2BSH6HTnqaSlbXesQKD%2BcqLb&X-Amz-Signature=4930ae47b1c6827b2aa2d58a36ae10867f539638fd67275d1c34269a62adde5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCOFZACC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCytoIldG7bMzDq3zXgQ0IruU31piLuuAMDzdSN3v%2FGzAIgPNJXstGOgWR0LTe13Exm%2BVZGgxT%2FvDdIqLsk7ZefZrcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaNLoLVs%2F1D39xe2CrcA%2BdIjB0oyKb%2Fl1ssPrU7pKeyCNHneyGDstHAzkYLVw0jgJdi8dPk4d4inOq8vPaOswiZ8Po0kP4kAqeC9O8srRV9G9FI9CtbCbb%2FH1hDl27wLRbBcyL9z%2Br88E32JvM6ZXbkZkkDzGRhrTrxts9AMaub12gizozT%2FQWKXKTETYDlpObJqjlpmN0Lx%2FGgCsWC6LgzLkiJGw2i75W00iSqSQjoFlcgl2pyIEbHFOKzKbRQJyRWwD0nXvMHjsMscsdznpgDDSH5Y7bkMA0Y6y009WUXyYlvScZIm3JDroAevwIHrtEH8w1v9U9V77qTri5QeGc7Vz3gbmra9j4E2gsJ94DGoOKnx7FZlO2KBwcrMTLvTNJhzLLO0lmi0I02cCqzY66AkRDRVmmAfjER6EL%2BT9dsEtg9ALZeY9At6J9wr1sGoAtsHIlWzmwQxM1tSu9Md9LlYMpadUG5%2FcoO%2FNvAdFOxrb5ci806%2B0W5dalJdZcNm%2BhggGhJ4FV9vJ9rB4NZ%2FATcs1VIsXhUOQFXGkE1jf92%2FTMLt07EUzI%2FTZzY%2BRsvQsHhttLzVSLy%2BBMeNf3gw2B7kVgp2YVItnN58345it3FeX7uuUyJ5oZD2%2FmspMLUPXOIaMEMKorjDiQuMLOrz8AGOqUBo1Ffe3cw3ygJ4Ngv1WkZVoLgHsDCnA4Ru42XwhBwjZs1rtODWNxKmLIynT5heLY7FVKcH7mkrQER9GLtA%2FqSmh%2FbJoVlLOENeqKfFjC4bp5NGGQnkBnI4rMomKqmCRk3mfDaDotoKU1NDUJqoWmVjbvd2e6O9NduPSHBydjILrAhEDwd6Ae%2FnvUE%2BMvnHeivRoe0n%2BSH6HTnqaSlbXesQKD%2BcqLb&X-Amz-Signature=2efc08ff7fa354b336d521d0af8951808fc6db53ccf9300b24c7a1a3b9fb8477&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCOFZACC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCytoIldG7bMzDq3zXgQ0IruU31piLuuAMDzdSN3v%2FGzAIgPNJXstGOgWR0LTe13Exm%2BVZGgxT%2FvDdIqLsk7ZefZrcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaNLoLVs%2F1D39xe2CrcA%2BdIjB0oyKb%2Fl1ssPrU7pKeyCNHneyGDstHAzkYLVw0jgJdi8dPk4d4inOq8vPaOswiZ8Po0kP4kAqeC9O8srRV9G9FI9CtbCbb%2FH1hDl27wLRbBcyL9z%2Br88E32JvM6ZXbkZkkDzGRhrTrxts9AMaub12gizozT%2FQWKXKTETYDlpObJqjlpmN0Lx%2FGgCsWC6LgzLkiJGw2i75W00iSqSQjoFlcgl2pyIEbHFOKzKbRQJyRWwD0nXvMHjsMscsdznpgDDSH5Y7bkMA0Y6y009WUXyYlvScZIm3JDroAevwIHrtEH8w1v9U9V77qTri5QeGc7Vz3gbmra9j4E2gsJ94DGoOKnx7FZlO2KBwcrMTLvTNJhzLLO0lmi0I02cCqzY66AkRDRVmmAfjER6EL%2BT9dsEtg9ALZeY9At6J9wr1sGoAtsHIlWzmwQxM1tSu9Md9LlYMpadUG5%2FcoO%2FNvAdFOxrb5ci806%2B0W5dalJdZcNm%2BhggGhJ4FV9vJ9rB4NZ%2FATcs1VIsXhUOQFXGkE1jf92%2FTMLt07EUzI%2FTZzY%2BRsvQsHhttLzVSLy%2BBMeNf3gw2B7kVgp2YVItnN58345it3FeX7uuUyJ5oZD2%2FmspMLUPXOIaMEMKorjDiQuMLOrz8AGOqUBo1Ffe3cw3ygJ4Ngv1WkZVoLgHsDCnA4Ru42XwhBwjZs1rtODWNxKmLIynT5heLY7FVKcH7mkrQER9GLtA%2FqSmh%2FbJoVlLOENeqKfFjC4bp5NGGQnkBnI4rMomKqmCRk3mfDaDotoKU1NDUJqoWmVjbvd2e6O9NduPSHBydjILrAhEDwd6Ae%2FnvUE%2BMvnHeivRoe0n%2BSH6HTnqaSlbXesQKD%2BcqLb&X-Amz-Signature=27dba3be1f2d2da9b461a95de6f942cb81af9a8d06e4fec91d1f722ea6958fc4&X-Amz-SignedHeaders=host&x-id=GetObject)
