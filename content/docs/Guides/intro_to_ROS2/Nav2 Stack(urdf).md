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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMSAFFJN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIEheyf6zv%2F4%2BJhTpd%2Bau%2BrNohi6UTqtMDSnf1UxnPC0qAiEAz3YfYwe7cMXqdYR4AchBAGHNpPvCYv3SBb%2F8GdFvLRQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7FR1FVKoQMGMeYhyrcA9hTPoHpAup5vPizCOrzgIMsN2xouV%2B8HlqI0Cb%2FMUl4DJMB5SWsDlV8B8yQsS58WdIkZTOw2ozEFppsUvVFG9FvMVDbYpZTif1WVD4NN9m2w81oerzTbN5Fc%2FjkCfdPBtQ%2F6d4XulSWHk7y5yboz6PG88367Mp%2B7JOsoJuOESMsAApXbcBgyt9Vm3eGqbr7SPgU0brHxfpVno%2BrNCrY9p4q7uyatxxvtConPX47dQc0WRS5F5hkfia3EpGLweGVz%2BbkmhmvSDEd%2FkO574f3Gnes8GalEnVki56V9BLxOaw%2B%2BqXXFYa%2FCKgQIst8%2Fb5xtnFZ8W98uj%2B73hKjv7JG6ADf7pbaJ3OyaUK%2FCv1X81ooiSB6RuoB3SuzhgMXyVL8TEMI9vAToI2ml8BoB5Z%2Fx7cwN52KsMmvqVW9HMmTR%2FXXAGCpFGuaE35BdVrpsxthfh0vLYwvoP8Z3nbYsvwr1TlJHNuMU35TCrcYoySrcv9z%2FUp4MJvMG4n8GuMPFX1bwx0rAwEqtepZ%2BO1j%2BpTZ7o1s92C3VbQU9IDyFxAhRVcbhXczV36UAO07dEXQ271TPjJkIbZaREfE3rJLMKGsANDHn04t7%2BIQrkE6W9S%2B6yzWI7jonrVmlFJxSQ8uMIaVqL8GOqUBEzChQUkr4vqFgLW2IS55jSadswCgKMqJJJAfEjIFFN5MyLGh%2FR9dfX%2B1Ml3AJAksuk51VvVu5Dhm6wFc5ZZonEpem9%2Flc62v3EFLpXtvlbKPuaT4E%2BRW0wciWnSuFVHDJxajhZeWag8uu8PoRIRMh1mA%2FqnYsayU6UY5MeVrTnwh9XSg%2F3x0gBg0L53ji%2FRbnk2EeBn9MOaV1YNanrhpFND%2FunhL&X-Amz-Signature=4953e462896b1f40ba26a0442d96bf8a7e818d8de4ac01f9ef596430df02d340&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMSAFFJN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIEheyf6zv%2F4%2BJhTpd%2Bau%2BrNohi6UTqtMDSnf1UxnPC0qAiEAz3YfYwe7cMXqdYR4AchBAGHNpPvCYv3SBb%2F8GdFvLRQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7FR1FVKoQMGMeYhyrcA9hTPoHpAup5vPizCOrzgIMsN2xouV%2B8HlqI0Cb%2FMUl4DJMB5SWsDlV8B8yQsS58WdIkZTOw2ozEFppsUvVFG9FvMVDbYpZTif1WVD4NN9m2w81oerzTbN5Fc%2FjkCfdPBtQ%2F6d4XulSWHk7y5yboz6PG88367Mp%2B7JOsoJuOESMsAApXbcBgyt9Vm3eGqbr7SPgU0brHxfpVno%2BrNCrY9p4q7uyatxxvtConPX47dQc0WRS5F5hkfia3EpGLweGVz%2BbkmhmvSDEd%2FkO574f3Gnes8GalEnVki56V9BLxOaw%2B%2BqXXFYa%2FCKgQIst8%2Fb5xtnFZ8W98uj%2B73hKjv7JG6ADf7pbaJ3OyaUK%2FCv1X81ooiSB6RuoB3SuzhgMXyVL8TEMI9vAToI2ml8BoB5Z%2Fx7cwN52KsMmvqVW9HMmTR%2FXXAGCpFGuaE35BdVrpsxthfh0vLYwvoP8Z3nbYsvwr1TlJHNuMU35TCrcYoySrcv9z%2FUp4MJvMG4n8GuMPFX1bwx0rAwEqtepZ%2BO1j%2BpTZ7o1s92C3VbQU9IDyFxAhRVcbhXczV36UAO07dEXQ271TPjJkIbZaREfE3rJLMKGsANDHn04t7%2BIQrkE6W9S%2B6yzWI7jonrVmlFJxSQ8uMIaVqL8GOqUBEzChQUkr4vqFgLW2IS55jSadswCgKMqJJJAfEjIFFN5MyLGh%2FR9dfX%2B1Ml3AJAksuk51VvVu5Dhm6wFc5ZZonEpem9%2Flc62v3EFLpXtvlbKPuaT4E%2BRW0wciWnSuFVHDJxajhZeWag8uu8PoRIRMh1mA%2FqnYsayU6UY5MeVrTnwh9XSg%2F3x0gBg0L53ji%2FRbnk2EeBn9MOaV1YNanrhpFND%2FunhL&X-Amz-Signature=cb29e4e29a4282e8563d31fbf14c43d7e7a4187fcbbb8667104284f1158d0028&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMSAFFJN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIEheyf6zv%2F4%2BJhTpd%2Bau%2BrNohi6UTqtMDSnf1UxnPC0qAiEAz3YfYwe7cMXqdYR4AchBAGHNpPvCYv3SBb%2F8GdFvLRQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7FR1FVKoQMGMeYhyrcA9hTPoHpAup5vPizCOrzgIMsN2xouV%2B8HlqI0Cb%2FMUl4DJMB5SWsDlV8B8yQsS58WdIkZTOw2ozEFppsUvVFG9FvMVDbYpZTif1WVD4NN9m2w81oerzTbN5Fc%2FjkCfdPBtQ%2F6d4XulSWHk7y5yboz6PG88367Mp%2B7JOsoJuOESMsAApXbcBgyt9Vm3eGqbr7SPgU0brHxfpVno%2BrNCrY9p4q7uyatxxvtConPX47dQc0WRS5F5hkfia3EpGLweGVz%2BbkmhmvSDEd%2FkO574f3Gnes8GalEnVki56V9BLxOaw%2B%2BqXXFYa%2FCKgQIst8%2Fb5xtnFZ8W98uj%2B73hKjv7JG6ADf7pbaJ3OyaUK%2FCv1X81ooiSB6RuoB3SuzhgMXyVL8TEMI9vAToI2ml8BoB5Z%2Fx7cwN52KsMmvqVW9HMmTR%2FXXAGCpFGuaE35BdVrpsxthfh0vLYwvoP8Z3nbYsvwr1TlJHNuMU35TCrcYoySrcv9z%2FUp4MJvMG4n8GuMPFX1bwx0rAwEqtepZ%2BO1j%2BpTZ7o1s92C3VbQU9IDyFxAhRVcbhXczV36UAO07dEXQ271TPjJkIbZaREfE3rJLMKGsANDHn04t7%2BIQrkE6W9S%2B6yzWI7jonrVmlFJxSQ8uMIaVqL8GOqUBEzChQUkr4vqFgLW2IS55jSadswCgKMqJJJAfEjIFFN5MyLGh%2FR9dfX%2B1Ml3AJAksuk51VvVu5Dhm6wFc5ZZonEpem9%2Flc62v3EFLpXtvlbKPuaT4E%2BRW0wciWnSuFVHDJxajhZeWag8uu8PoRIRMh1mA%2FqnYsayU6UY5MeVrTnwh9XSg%2F3x0gBg0L53ji%2FRbnk2EeBn9MOaV1YNanrhpFND%2FunhL&X-Amz-Signature=9c5e3a4d19e3a0335faa44d3cbabed3623f367d964221d1a8f425d983714621e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMSAFFJN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIEheyf6zv%2F4%2BJhTpd%2Bau%2BrNohi6UTqtMDSnf1UxnPC0qAiEAz3YfYwe7cMXqdYR4AchBAGHNpPvCYv3SBb%2F8GdFvLRQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7FR1FVKoQMGMeYhyrcA9hTPoHpAup5vPizCOrzgIMsN2xouV%2B8HlqI0Cb%2FMUl4DJMB5SWsDlV8B8yQsS58WdIkZTOw2ozEFppsUvVFG9FvMVDbYpZTif1WVD4NN9m2w81oerzTbN5Fc%2FjkCfdPBtQ%2F6d4XulSWHk7y5yboz6PG88367Mp%2B7JOsoJuOESMsAApXbcBgyt9Vm3eGqbr7SPgU0brHxfpVno%2BrNCrY9p4q7uyatxxvtConPX47dQc0WRS5F5hkfia3EpGLweGVz%2BbkmhmvSDEd%2FkO574f3Gnes8GalEnVki56V9BLxOaw%2B%2BqXXFYa%2FCKgQIst8%2Fb5xtnFZ8W98uj%2B73hKjv7JG6ADf7pbaJ3OyaUK%2FCv1X81ooiSB6RuoB3SuzhgMXyVL8TEMI9vAToI2ml8BoB5Z%2Fx7cwN52KsMmvqVW9HMmTR%2FXXAGCpFGuaE35BdVrpsxthfh0vLYwvoP8Z3nbYsvwr1TlJHNuMU35TCrcYoySrcv9z%2FUp4MJvMG4n8GuMPFX1bwx0rAwEqtepZ%2BO1j%2BpTZ7o1s92C3VbQU9IDyFxAhRVcbhXczV36UAO07dEXQ271TPjJkIbZaREfE3rJLMKGsANDHn04t7%2BIQrkE6W9S%2B6yzWI7jonrVmlFJxSQ8uMIaVqL8GOqUBEzChQUkr4vqFgLW2IS55jSadswCgKMqJJJAfEjIFFN5MyLGh%2FR9dfX%2B1Ml3AJAksuk51VvVu5Dhm6wFc5ZZonEpem9%2Flc62v3EFLpXtvlbKPuaT4E%2BRW0wciWnSuFVHDJxajhZeWag8uu8PoRIRMh1mA%2FqnYsayU6UY5MeVrTnwh9XSg%2F3x0gBg0L53ji%2FRbnk2EeBn9MOaV1YNanrhpFND%2FunhL&X-Amz-Signature=ffdbc12f5263d03635f75f11567ccc14af44c91aae481562cab86f9e3cc26d85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMSAFFJN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIEheyf6zv%2F4%2BJhTpd%2Bau%2BrNohi6UTqtMDSnf1UxnPC0qAiEAz3YfYwe7cMXqdYR4AchBAGHNpPvCYv3SBb%2F8GdFvLRQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7FR1FVKoQMGMeYhyrcA9hTPoHpAup5vPizCOrzgIMsN2xouV%2B8HlqI0Cb%2FMUl4DJMB5SWsDlV8B8yQsS58WdIkZTOw2ozEFppsUvVFG9FvMVDbYpZTif1WVD4NN9m2w81oerzTbN5Fc%2FjkCfdPBtQ%2F6d4XulSWHk7y5yboz6PG88367Mp%2B7JOsoJuOESMsAApXbcBgyt9Vm3eGqbr7SPgU0brHxfpVno%2BrNCrY9p4q7uyatxxvtConPX47dQc0WRS5F5hkfia3EpGLweGVz%2BbkmhmvSDEd%2FkO574f3Gnes8GalEnVki56V9BLxOaw%2B%2BqXXFYa%2FCKgQIst8%2Fb5xtnFZ8W98uj%2B73hKjv7JG6ADf7pbaJ3OyaUK%2FCv1X81ooiSB6RuoB3SuzhgMXyVL8TEMI9vAToI2ml8BoB5Z%2Fx7cwN52KsMmvqVW9HMmTR%2FXXAGCpFGuaE35BdVrpsxthfh0vLYwvoP8Z3nbYsvwr1TlJHNuMU35TCrcYoySrcv9z%2FUp4MJvMG4n8GuMPFX1bwx0rAwEqtepZ%2BO1j%2BpTZ7o1s92C3VbQU9IDyFxAhRVcbhXczV36UAO07dEXQ271TPjJkIbZaREfE3rJLMKGsANDHn04t7%2BIQrkE6W9S%2B6yzWI7jonrVmlFJxSQ8uMIaVqL8GOqUBEzChQUkr4vqFgLW2IS55jSadswCgKMqJJJAfEjIFFN5MyLGh%2FR9dfX%2B1Ml3AJAksuk51VvVu5Dhm6wFc5ZZonEpem9%2Flc62v3EFLpXtvlbKPuaT4E%2BRW0wciWnSuFVHDJxajhZeWag8uu8PoRIRMh1mA%2FqnYsayU6UY5MeVrTnwh9XSg%2F3x0gBg0L53ji%2FRbnk2EeBn9MOaV1YNanrhpFND%2FunhL&X-Amz-Signature=ce7637334a8b8677c6bf995860e8b1ebed4f72e4cb4b4630f7b90d44a6222d9b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMSAFFJN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIEheyf6zv%2F4%2BJhTpd%2Bau%2BrNohi6UTqtMDSnf1UxnPC0qAiEAz3YfYwe7cMXqdYR4AchBAGHNpPvCYv3SBb%2F8GdFvLRQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7FR1FVKoQMGMeYhyrcA9hTPoHpAup5vPizCOrzgIMsN2xouV%2B8HlqI0Cb%2FMUl4DJMB5SWsDlV8B8yQsS58WdIkZTOw2ozEFppsUvVFG9FvMVDbYpZTif1WVD4NN9m2w81oerzTbN5Fc%2FjkCfdPBtQ%2F6d4XulSWHk7y5yboz6PG88367Mp%2B7JOsoJuOESMsAApXbcBgyt9Vm3eGqbr7SPgU0brHxfpVno%2BrNCrY9p4q7uyatxxvtConPX47dQc0WRS5F5hkfia3EpGLweGVz%2BbkmhmvSDEd%2FkO574f3Gnes8GalEnVki56V9BLxOaw%2B%2BqXXFYa%2FCKgQIst8%2Fb5xtnFZ8W98uj%2B73hKjv7JG6ADf7pbaJ3OyaUK%2FCv1X81ooiSB6RuoB3SuzhgMXyVL8TEMI9vAToI2ml8BoB5Z%2Fx7cwN52KsMmvqVW9HMmTR%2FXXAGCpFGuaE35BdVrpsxthfh0vLYwvoP8Z3nbYsvwr1TlJHNuMU35TCrcYoySrcv9z%2FUp4MJvMG4n8GuMPFX1bwx0rAwEqtepZ%2BO1j%2BpTZ7o1s92C3VbQU9IDyFxAhRVcbhXczV36UAO07dEXQ271TPjJkIbZaREfE3rJLMKGsANDHn04t7%2BIQrkE6W9S%2B6yzWI7jonrVmlFJxSQ8uMIaVqL8GOqUBEzChQUkr4vqFgLW2IS55jSadswCgKMqJJJAfEjIFFN5MyLGh%2FR9dfX%2B1Ml3AJAksuk51VvVu5Dhm6wFc5ZZonEpem9%2Flc62v3EFLpXtvlbKPuaT4E%2BRW0wciWnSuFVHDJxajhZeWag8uu8PoRIRMh1mA%2FqnYsayU6UY5MeVrTnwh9XSg%2F3x0gBg0L53ji%2FRbnk2EeBn9MOaV1YNanrhpFND%2FunhL&X-Amz-Signature=b6949f2f14fd28d853f6630170834846ceed24247695b90d34ee7e71a8cc2d3e&X-Amz-SignedHeaders=host&x-id=GetObject)
