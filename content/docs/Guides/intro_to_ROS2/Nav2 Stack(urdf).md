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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEIAMMV%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCSEMNpZ%2FvuAR2N%2FtX7xkf0WpdCSNyRtxxeBm7ZgBWy6wIhAJypMbj%2B0EW%2F1usqJzaNu0t9iRI2Dpi7jiuzh5uASvvoKv8DCBEQABoMNjM3NDIzMTgzODA1IgxEoYfVHIKE0ZgQlt8q3APpKzEuPIssfG0wz%2BA9mbL3qRugJULSN7MEtF4ECSKX9PAXoM%2BxIMV2RrQtqhQjKTNC648NgTarQOyf2Vifkn5ADsPdxD1aqHclKunvy6RF%2Byz%2FxqCluq4F7h%2Fj5tl8lokU8iSFAcTgbOd8j2RBtpsEXuxIDQ7bSkbJi0dKzckWKGdHKWDYLa0anupXH4%2BfcHdJyjzLh2mbMSXMtGHnrHE9MBbG8vhSBmnK5wW6rOD1CQibeuU7CUi54GzjiRGG1xLSV7ASzB5zz0pgfVVT9v21vOkz%2FThZB8ALsoGvRKpkxrARZOjprIBlm30XeLllWaF%2BlPkmTaHLkbqfZAxykNv9NYEo3msWhH%2FNm%2BjpKqqfXYHrQSpb%2FBkne7FJUEFn0KzzZjJlCLX25nfVt7Zx9pqPYD1gOhze%2Bccwdo4psklfZo112Vq1nkIqugR0%2FvviUdP4j3V50u4jemqBwviRh%2F2XAzbCVlKlrEVK5dmqSi5pAYBExUJk213DY1fpSU7AWmsk0WRSso8zQBjf9rhu%2BiLl8yrvsU0X%2Bxpd9psnzOhgv34pmdAizda0JMQtCXwvoKEzKLzcryzkqcVoG%2Bh7ge8tWfOdt6N5jhPSdAa8ve9kFF86n26ByHzza731hjD1gMbBBjqkAWd2d0t%2FEsVcffdGGU4j5rMKJYQNb6lcdVavqwRGvZjr33NG%2Bi0cvAfR%2FCPeIF%2FwAGPdJ%2BvyOTAnAJUl7W610I6krn7D5DRoVVQDsh8Dw8H3U8d1jxRaSnwdGAPcaW1Ofmu9IGFHlZWZsdUFe3kxxOFPS6Y1msB9kwm92kmoiq1wMgwfR1q13aSdg%2F4MdzdF%2B1bUqtVKfklNTbjAMVq9P5V8BzTv&X-Amz-Signature=a298d2f64127fe20a4fe23378fdeeb058e11f52cf34e7fe3064d275863e196d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEIAMMV%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCSEMNpZ%2FvuAR2N%2FtX7xkf0WpdCSNyRtxxeBm7ZgBWy6wIhAJypMbj%2B0EW%2F1usqJzaNu0t9iRI2Dpi7jiuzh5uASvvoKv8DCBEQABoMNjM3NDIzMTgzODA1IgxEoYfVHIKE0ZgQlt8q3APpKzEuPIssfG0wz%2BA9mbL3qRugJULSN7MEtF4ECSKX9PAXoM%2BxIMV2RrQtqhQjKTNC648NgTarQOyf2Vifkn5ADsPdxD1aqHclKunvy6RF%2Byz%2FxqCluq4F7h%2Fj5tl8lokU8iSFAcTgbOd8j2RBtpsEXuxIDQ7bSkbJi0dKzckWKGdHKWDYLa0anupXH4%2BfcHdJyjzLh2mbMSXMtGHnrHE9MBbG8vhSBmnK5wW6rOD1CQibeuU7CUi54GzjiRGG1xLSV7ASzB5zz0pgfVVT9v21vOkz%2FThZB8ALsoGvRKpkxrARZOjprIBlm30XeLllWaF%2BlPkmTaHLkbqfZAxykNv9NYEo3msWhH%2FNm%2BjpKqqfXYHrQSpb%2FBkne7FJUEFn0KzzZjJlCLX25nfVt7Zx9pqPYD1gOhze%2Bccwdo4psklfZo112Vq1nkIqugR0%2FvviUdP4j3V50u4jemqBwviRh%2F2XAzbCVlKlrEVK5dmqSi5pAYBExUJk213DY1fpSU7AWmsk0WRSso8zQBjf9rhu%2BiLl8yrvsU0X%2Bxpd9psnzOhgv34pmdAizda0JMQtCXwvoKEzKLzcryzkqcVoG%2Bh7ge8tWfOdt6N5jhPSdAa8ve9kFF86n26ByHzza731hjD1gMbBBjqkAWd2d0t%2FEsVcffdGGU4j5rMKJYQNb6lcdVavqwRGvZjr33NG%2Bi0cvAfR%2FCPeIF%2FwAGPdJ%2BvyOTAnAJUl7W610I6krn7D5DRoVVQDsh8Dw8H3U8d1jxRaSnwdGAPcaW1Ofmu9IGFHlZWZsdUFe3kxxOFPS6Y1msB9kwm92kmoiq1wMgwfR1q13aSdg%2F4MdzdF%2B1bUqtVKfklNTbjAMVq9P5V8BzTv&X-Amz-Signature=ce7ba979b71b72dfc4f39c93bbef906e9dbbb753ca0f24c593bb9063a564a026&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEIAMMV%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCSEMNpZ%2FvuAR2N%2FtX7xkf0WpdCSNyRtxxeBm7ZgBWy6wIhAJypMbj%2B0EW%2F1usqJzaNu0t9iRI2Dpi7jiuzh5uASvvoKv8DCBEQABoMNjM3NDIzMTgzODA1IgxEoYfVHIKE0ZgQlt8q3APpKzEuPIssfG0wz%2BA9mbL3qRugJULSN7MEtF4ECSKX9PAXoM%2BxIMV2RrQtqhQjKTNC648NgTarQOyf2Vifkn5ADsPdxD1aqHclKunvy6RF%2Byz%2FxqCluq4F7h%2Fj5tl8lokU8iSFAcTgbOd8j2RBtpsEXuxIDQ7bSkbJi0dKzckWKGdHKWDYLa0anupXH4%2BfcHdJyjzLh2mbMSXMtGHnrHE9MBbG8vhSBmnK5wW6rOD1CQibeuU7CUi54GzjiRGG1xLSV7ASzB5zz0pgfVVT9v21vOkz%2FThZB8ALsoGvRKpkxrARZOjprIBlm30XeLllWaF%2BlPkmTaHLkbqfZAxykNv9NYEo3msWhH%2FNm%2BjpKqqfXYHrQSpb%2FBkne7FJUEFn0KzzZjJlCLX25nfVt7Zx9pqPYD1gOhze%2Bccwdo4psklfZo112Vq1nkIqugR0%2FvviUdP4j3V50u4jemqBwviRh%2F2XAzbCVlKlrEVK5dmqSi5pAYBExUJk213DY1fpSU7AWmsk0WRSso8zQBjf9rhu%2BiLl8yrvsU0X%2Bxpd9psnzOhgv34pmdAizda0JMQtCXwvoKEzKLzcryzkqcVoG%2Bh7ge8tWfOdt6N5jhPSdAa8ve9kFF86n26ByHzza731hjD1gMbBBjqkAWd2d0t%2FEsVcffdGGU4j5rMKJYQNb6lcdVavqwRGvZjr33NG%2Bi0cvAfR%2FCPeIF%2FwAGPdJ%2BvyOTAnAJUl7W610I6krn7D5DRoVVQDsh8Dw8H3U8d1jxRaSnwdGAPcaW1Ofmu9IGFHlZWZsdUFe3kxxOFPS6Y1msB9kwm92kmoiq1wMgwfR1q13aSdg%2F4MdzdF%2B1bUqtVKfklNTbjAMVq9P5V8BzTv&X-Amz-Signature=9cd6e2b15f3b26c8958b9202827a37bddfb1fea7c596ad122bc5ae1f0e6197b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEIAMMV%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCSEMNpZ%2FvuAR2N%2FtX7xkf0WpdCSNyRtxxeBm7ZgBWy6wIhAJypMbj%2B0EW%2F1usqJzaNu0t9iRI2Dpi7jiuzh5uASvvoKv8DCBEQABoMNjM3NDIzMTgzODA1IgxEoYfVHIKE0ZgQlt8q3APpKzEuPIssfG0wz%2BA9mbL3qRugJULSN7MEtF4ECSKX9PAXoM%2BxIMV2RrQtqhQjKTNC648NgTarQOyf2Vifkn5ADsPdxD1aqHclKunvy6RF%2Byz%2FxqCluq4F7h%2Fj5tl8lokU8iSFAcTgbOd8j2RBtpsEXuxIDQ7bSkbJi0dKzckWKGdHKWDYLa0anupXH4%2BfcHdJyjzLh2mbMSXMtGHnrHE9MBbG8vhSBmnK5wW6rOD1CQibeuU7CUi54GzjiRGG1xLSV7ASzB5zz0pgfVVT9v21vOkz%2FThZB8ALsoGvRKpkxrARZOjprIBlm30XeLllWaF%2BlPkmTaHLkbqfZAxykNv9NYEo3msWhH%2FNm%2BjpKqqfXYHrQSpb%2FBkne7FJUEFn0KzzZjJlCLX25nfVt7Zx9pqPYD1gOhze%2Bccwdo4psklfZo112Vq1nkIqugR0%2FvviUdP4j3V50u4jemqBwviRh%2F2XAzbCVlKlrEVK5dmqSi5pAYBExUJk213DY1fpSU7AWmsk0WRSso8zQBjf9rhu%2BiLl8yrvsU0X%2Bxpd9psnzOhgv34pmdAizda0JMQtCXwvoKEzKLzcryzkqcVoG%2Bh7ge8tWfOdt6N5jhPSdAa8ve9kFF86n26ByHzza731hjD1gMbBBjqkAWd2d0t%2FEsVcffdGGU4j5rMKJYQNb6lcdVavqwRGvZjr33NG%2Bi0cvAfR%2FCPeIF%2FwAGPdJ%2BvyOTAnAJUl7W610I6krn7D5DRoVVQDsh8Dw8H3U8d1jxRaSnwdGAPcaW1Ofmu9IGFHlZWZsdUFe3kxxOFPS6Y1msB9kwm92kmoiq1wMgwfR1q13aSdg%2F4MdzdF%2B1bUqtVKfklNTbjAMVq9P5V8BzTv&X-Amz-Signature=2bdda5128331d349046f69c1efe5ef47f105bdbbf5a9bd80d961ef529373589e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEIAMMV%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCSEMNpZ%2FvuAR2N%2FtX7xkf0WpdCSNyRtxxeBm7ZgBWy6wIhAJypMbj%2B0EW%2F1usqJzaNu0t9iRI2Dpi7jiuzh5uASvvoKv8DCBEQABoMNjM3NDIzMTgzODA1IgxEoYfVHIKE0ZgQlt8q3APpKzEuPIssfG0wz%2BA9mbL3qRugJULSN7MEtF4ECSKX9PAXoM%2BxIMV2RrQtqhQjKTNC648NgTarQOyf2Vifkn5ADsPdxD1aqHclKunvy6RF%2Byz%2FxqCluq4F7h%2Fj5tl8lokU8iSFAcTgbOd8j2RBtpsEXuxIDQ7bSkbJi0dKzckWKGdHKWDYLa0anupXH4%2BfcHdJyjzLh2mbMSXMtGHnrHE9MBbG8vhSBmnK5wW6rOD1CQibeuU7CUi54GzjiRGG1xLSV7ASzB5zz0pgfVVT9v21vOkz%2FThZB8ALsoGvRKpkxrARZOjprIBlm30XeLllWaF%2BlPkmTaHLkbqfZAxykNv9NYEo3msWhH%2FNm%2BjpKqqfXYHrQSpb%2FBkne7FJUEFn0KzzZjJlCLX25nfVt7Zx9pqPYD1gOhze%2Bccwdo4psklfZo112Vq1nkIqugR0%2FvviUdP4j3V50u4jemqBwviRh%2F2XAzbCVlKlrEVK5dmqSi5pAYBExUJk213DY1fpSU7AWmsk0WRSso8zQBjf9rhu%2BiLl8yrvsU0X%2Bxpd9psnzOhgv34pmdAizda0JMQtCXwvoKEzKLzcryzkqcVoG%2Bh7ge8tWfOdt6N5jhPSdAa8ve9kFF86n26ByHzza731hjD1gMbBBjqkAWd2d0t%2FEsVcffdGGU4j5rMKJYQNb6lcdVavqwRGvZjr33NG%2Bi0cvAfR%2FCPeIF%2FwAGPdJ%2BvyOTAnAJUl7W610I6krn7D5DRoVVQDsh8Dw8H3U8d1jxRaSnwdGAPcaW1Ofmu9IGFHlZWZsdUFe3kxxOFPS6Y1msB9kwm92kmoiq1wMgwfR1q13aSdg%2F4MdzdF%2B1bUqtVKfklNTbjAMVq9P5V8BzTv&X-Amz-Signature=808e67a271f7b39e091d884ebfe3cf84adee868e66ed8184aa37c1cbcb5db555&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEIAMMV%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCSEMNpZ%2FvuAR2N%2FtX7xkf0WpdCSNyRtxxeBm7ZgBWy6wIhAJypMbj%2B0EW%2F1usqJzaNu0t9iRI2Dpi7jiuzh5uASvvoKv8DCBEQABoMNjM3NDIzMTgzODA1IgxEoYfVHIKE0ZgQlt8q3APpKzEuPIssfG0wz%2BA9mbL3qRugJULSN7MEtF4ECSKX9PAXoM%2BxIMV2RrQtqhQjKTNC648NgTarQOyf2Vifkn5ADsPdxD1aqHclKunvy6RF%2Byz%2FxqCluq4F7h%2Fj5tl8lokU8iSFAcTgbOd8j2RBtpsEXuxIDQ7bSkbJi0dKzckWKGdHKWDYLa0anupXH4%2BfcHdJyjzLh2mbMSXMtGHnrHE9MBbG8vhSBmnK5wW6rOD1CQibeuU7CUi54GzjiRGG1xLSV7ASzB5zz0pgfVVT9v21vOkz%2FThZB8ALsoGvRKpkxrARZOjprIBlm30XeLllWaF%2BlPkmTaHLkbqfZAxykNv9NYEo3msWhH%2FNm%2BjpKqqfXYHrQSpb%2FBkne7FJUEFn0KzzZjJlCLX25nfVt7Zx9pqPYD1gOhze%2Bccwdo4psklfZo112Vq1nkIqugR0%2FvviUdP4j3V50u4jemqBwviRh%2F2XAzbCVlKlrEVK5dmqSi5pAYBExUJk213DY1fpSU7AWmsk0WRSso8zQBjf9rhu%2BiLl8yrvsU0X%2Bxpd9psnzOhgv34pmdAizda0JMQtCXwvoKEzKLzcryzkqcVoG%2Bh7ge8tWfOdt6N5jhPSdAa8ve9kFF86n26ByHzza731hjD1gMbBBjqkAWd2d0t%2FEsVcffdGGU4j5rMKJYQNb6lcdVavqwRGvZjr33NG%2Bi0cvAfR%2FCPeIF%2FwAGPdJ%2BvyOTAnAJUl7W610I6krn7D5DRoVVQDsh8Dw8H3U8d1jxRaSnwdGAPcaW1Ofmu9IGFHlZWZsdUFe3kxxOFPS6Y1msB9kwm92kmoiq1wMgwfR1q13aSdg%2F4MdzdF%2B1bUqtVKfklNTbjAMVq9P5V8BzTv&X-Amz-Signature=b2610c2cf2e924812cd0f3147d602b1889c475d83930cb7f3965df74d4b53a7c&X-Amz-SignedHeaders=host&x-id=GetObject)
