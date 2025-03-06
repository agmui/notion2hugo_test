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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSGO6MB4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtWb6%2FgBWekzDlA1MB3GhvfDiI%2BLNY2U2FVUo1iLyGgAIhALuYRdVpABw4vyq65hUc%2BanmP%2Bsti20zJ8Lk9Pm%2FTe95Kv8DCC0QABoMNjM3NDIzMTgzODA1IgwHMywrva8dRjMOZoIq3AM6teHDhx07O0X%2Bp6HadCfj2QM%2FtPQBDAuwBaolShH088BTD36ZmDx%2FCAfJJNYMSvPWPl%2BpLLLEkYJoTQOg7sIXuMF86e%2FUqfF9%2FSIPBKpKvTMWI5POX2dE%2FsDqjf%2F6pGxzAwTf0p5VV15M%2FkYEmpg1xqJVgAmvyWonDm%2Ba%2BDKSYiwvWP6y8A52DJ8jlx%2FXQOyHwMJb0yV%2FHez59loL0qnGSFrCyq6cio3n4CCoAq2eXuWHlP68j96nZNUxFxM8l8A2g1Y%2FF9ylNabVoRz8D6JHTgztVsWOkhr4ZPuJTa8zzrZGZefgeOMJVGdekbk4gHpVPFo4g4tKJv9s%2BwMJ6mpZG6tyS9%2BDuDvCej%2FBdB6RVU4XJ55htBmqZNuhbdt%2FwUPAAX6SNnGLzmaC2uP4RyHl%2FcKVA6tnI0RnYCJnIJj5WU2qcZ%2FIQCoFfvgreXuMzBMUk7cveqC71it1xESb83ybj3YthsYURhXMKCIPtfb%2BB%2FSuZDRZx80oqcgYKs7NzgiUOJ2wjX5psPXOtUBxl3gjT%2B9fdd1aoKW5oUhgjNv9ajhwax4syXXs%2B2fwJPP%2F%2FmzeAz2TRTESbLV7iYSvPVoO26W9KXvMS0gAHTLuh9PiGdRDXUmo5QpqFoXBjDCTkaa%2BBjqkASVLLuToOhtP4h8Oqewz5XO6WjxWoJzkRsysFmpU5TgvkXvT0jFjj8RTjGnI0rgYr9A5EYlHyyjc4Yk05KSQs%2BXO0iCRQiI35JKWCbCoyBfTpQfaei95geirCDeqV%2FWEVcSfLMCSfdWb7PHdO93DIH%2FrayQhajMKES8dHp4PLbHsQtlMag1yq5Mlzwpm4qLyQn6GXpKH5j9e5ARBvmd0vYDgHN63&X-Amz-Signature=b17d0f54d150200576fed84d477445d8d407ccebb29e076fb65294a1e28494f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSGO6MB4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtWb6%2FgBWekzDlA1MB3GhvfDiI%2BLNY2U2FVUo1iLyGgAIhALuYRdVpABw4vyq65hUc%2BanmP%2Bsti20zJ8Lk9Pm%2FTe95Kv8DCC0QABoMNjM3NDIzMTgzODA1IgwHMywrva8dRjMOZoIq3AM6teHDhx07O0X%2Bp6HadCfj2QM%2FtPQBDAuwBaolShH088BTD36ZmDx%2FCAfJJNYMSvPWPl%2BpLLLEkYJoTQOg7sIXuMF86e%2FUqfF9%2FSIPBKpKvTMWI5POX2dE%2FsDqjf%2F6pGxzAwTf0p5VV15M%2FkYEmpg1xqJVgAmvyWonDm%2Ba%2BDKSYiwvWP6y8A52DJ8jlx%2FXQOyHwMJb0yV%2FHez59loL0qnGSFrCyq6cio3n4CCoAq2eXuWHlP68j96nZNUxFxM8l8A2g1Y%2FF9ylNabVoRz8D6JHTgztVsWOkhr4ZPuJTa8zzrZGZefgeOMJVGdekbk4gHpVPFo4g4tKJv9s%2BwMJ6mpZG6tyS9%2BDuDvCej%2FBdB6RVU4XJ55htBmqZNuhbdt%2FwUPAAX6SNnGLzmaC2uP4RyHl%2FcKVA6tnI0RnYCJnIJj5WU2qcZ%2FIQCoFfvgreXuMzBMUk7cveqC71it1xESb83ybj3YthsYURhXMKCIPtfb%2BB%2FSuZDRZx80oqcgYKs7NzgiUOJ2wjX5psPXOtUBxl3gjT%2B9fdd1aoKW5oUhgjNv9ajhwax4syXXs%2B2fwJPP%2F%2FmzeAz2TRTESbLV7iYSvPVoO26W9KXvMS0gAHTLuh9PiGdRDXUmo5QpqFoXBjDCTkaa%2BBjqkASVLLuToOhtP4h8Oqewz5XO6WjxWoJzkRsysFmpU5TgvkXvT0jFjj8RTjGnI0rgYr9A5EYlHyyjc4Yk05KSQs%2BXO0iCRQiI35JKWCbCoyBfTpQfaei95geirCDeqV%2FWEVcSfLMCSfdWb7PHdO93DIH%2FrayQhajMKES8dHp4PLbHsQtlMag1yq5Mlzwpm4qLyQn6GXpKH5j9e5ARBvmd0vYDgHN63&X-Amz-Signature=ebca313ceb6a6d8b9e5b6b5013e1fbebe65cb74af1bad5abcdac28300b02890b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSGO6MB4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtWb6%2FgBWekzDlA1MB3GhvfDiI%2BLNY2U2FVUo1iLyGgAIhALuYRdVpABw4vyq65hUc%2BanmP%2Bsti20zJ8Lk9Pm%2FTe95Kv8DCC0QABoMNjM3NDIzMTgzODA1IgwHMywrva8dRjMOZoIq3AM6teHDhx07O0X%2Bp6HadCfj2QM%2FtPQBDAuwBaolShH088BTD36ZmDx%2FCAfJJNYMSvPWPl%2BpLLLEkYJoTQOg7sIXuMF86e%2FUqfF9%2FSIPBKpKvTMWI5POX2dE%2FsDqjf%2F6pGxzAwTf0p5VV15M%2FkYEmpg1xqJVgAmvyWonDm%2Ba%2BDKSYiwvWP6y8A52DJ8jlx%2FXQOyHwMJb0yV%2FHez59loL0qnGSFrCyq6cio3n4CCoAq2eXuWHlP68j96nZNUxFxM8l8A2g1Y%2FF9ylNabVoRz8D6JHTgztVsWOkhr4ZPuJTa8zzrZGZefgeOMJVGdekbk4gHpVPFo4g4tKJv9s%2BwMJ6mpZG6tyS9%2BDuDvCej%2FBdB6RVU4XJ55htBmqZNuhbdt%2FwUPAAX6SNnGLzmaC2uP4RyHl%2FcKVA6tnI0RnYCJnIJj5WU2qcZ%2FIQCoFfvgreXuMzBMUk7cveqC71it1xESb83ybj3YthsYURhXMKCIPtfb%2BB%2FSuZDRZx80oqcgYKs7NzgiUOJ2wjX5psPXOtUBxl3gjT%2B9fdd1aoKW5oUhgjNv9ajhwax4syXXs%2B2fwJPP%2F%2FmzeAz2TRTESbLV7iYSvPVoO26W9KXvMS0gAHTLuh9PiGdRDXUmo5QpqFoXBjDCTkaa%2BBjqkASVLLuToOhtP4h8Oqewz5XO6WjxWoJzkRsysFmpU5TgvkXvT0jFjj8RTjGnI0rgYr9A5EYlHyyjc4Yk05KSQs%2BXO0iCRQiI35JKWCbCoyBfTpQfaei95geirCDeqV%2FWEVcSfLMCSfdWb7PHdO93DIH%2FrayQhajMKES8dHp4PLbHsQtlMag1yq5Mlzwpm4qLyQn6GXpKH5j9e5ARBvmd0vYDgHN63&X-Amz-Signature=65cfae1a2f7b3bac6328035d27e7d04d646e22cc22c31d6e5e5dfab8edb8c359&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSGO6MB4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtWb6%2FgBWekzDlA1MB3GhvfDiI%2BLNY2U2FVUo1iLyGgAIhALuYRdVpABw4vyq65hUc%2BanmP%2Bsti20zJ8Lk9Pm%2FTe95Kv8DCC0QABoMNjM3NDIzMTgzODA1IgwHMywrva8dRjMOZoIq3AM6teHDhx07O0X%2Bp6HadCfj2QM%2FtPQBDAuwBaolShH088BTD36ZmDx%2FCAfJJNYMSvPWPl%2BpLLLEkYJoTQOg7sIXuMF86e%2FUqfF9%2FSIPBKpKvTMWI5POX2dE%2FsDqjf%2F6pGxzAwTf0p5VV15M%2FkYEmpg1xqJVgAmvyWonDm%2Ba%2BDKSYiwvWP6y8A52DJ8jlx%2FXQOyHwMJb0yV%2FHez59loL0qnGSFrCyq6cio3n4CCoAq2eXuWHlP68j96nZNUxFxM8l8A2g1Y%2FF9ylNabVoRz8D6JHTgztVsWOkhr4ZPuJTa8zzrZGZefgeOMJVGdekbk4gHpVPFo4g4tKJv9s%2BwMJ6mpZG6tyS9%2BDuDvCej%2FBdB6RVU4XJ55htBmqZNuhbdt%2FwUPAAX6SNnGLzmaC2uP4RyHl%2FcKVA6tnI0RnYCJnIJj5WU2qcZ%2FIQCoFfvgreXuMzBMUk7cveqC71it1xESb83ybj3YthsYURhXMKCIPtfb%2BB%2FSuZDRZx80oqcgYKs7NzgiUOJ2wjX5psPXOtUBxl3gjT%2B9fdd1aoKW5oUhgjNv9ajhwax4syXXs%2B2fwJPP%2F%2FmzeAz2TRTESbLV7iYSvPVoO26W9KXvMS0gAHTLuh9PiGdRDXUmo5QpqFoXBjDCTkaa%2BBjqkASVLLuToOhtP4h8Oqewz5XO6WjxWoJzkRsysFmpU5TgvkXvT0jFjj8RTjGnI0rgYr9A5EYlHyyjc4Yk05KSQs%2BXO0iCRQiI35JKWCbCoyBfTpQfaei95geirCDeqV%2FWEVcSfLMCSfdWb7PHdO93DIH%2FrayQhajMKES8dHp4PLbHsQtlMag1yq5Mlzwpm4qLyQn6GXpKH5j9e5ARBvmd0vYDgHN63&X-Amz-Signature=33f866db80c9a7d69d368f2c26772a6d4546ed86a892f67949a229d88acebd40&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSGO6MB4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtWb6%2FgBWekzDlA1MB3GhvfDiI%2BLNY2U2FVUo1iLyGgAIhALuYRdVpABw4vyq65hUc%2BanmP%2Bsti20zJ8Lk9Pm%2FTe95Kv8DCC0QABoMNjM3NDIzMTgzODA1IgwHMywrva8dRjMOZoIq3AM6teHDhx07O0X%2Bp6HadCfj2QM%2FtPQBDAuwBaolShH088BTD36ZmDx%2FCAfJJNYMSvPWPl%2BpLLLEkYJoTQOg7sIXuMF86e%2FUqfF9%2FSIPBKpKvTMWI5POX2dE%2FsDqjf%2F6pGxzAwTf0p5VV15M%2FkYEmpg1xqJVgAmvyWonDm%2Ba%2BDKSYiwvWP6y8A52DJ8jlx%2FXQOyHwMJb0yV%2FHez59loL0qnGSFrCyq6cio3n4CCoAq2eXuWHlP68j96nZNUxFxM8l8A2g1Y%2FF9ylNabVoRz8D6JHTgztVsWOkhr4ZPuJTa8zzrZGZefgeOMJVGdekbk4gHpVPFo4g4tKJv9s%2BwMJ6mpZG6tyS9%2BDuDvCej%2FBdB6RVU4XJ55htBmqZNuhbdt%2FwUPAAX6SNnGLzmaC2uP4RyHl%2FcKVA6tnI0RnYCJnIJj5WU2qcZ%2FIQCoFfvgreXuMzBMUk7cveqC71it1xESb83ybj3YthsYURhXMKCIPtfb%2BB%2FSuZDRZx80oqcgYKs7NzgiUOJ2wjX5psPXOtUBxl3gjT%2B9fdd1aoKW5oUhgjNv9ajhwax4syXXs%2B2fwJPP%2F%2FmzeAz2TRTESbLV7iYSvPVoO26W9KXvMS0gAHTLuh9PiGdRDXUmo5QpqFoXBjDCTkaa%2BBjqkASVLLuToOhtP4h8Oqewz5XO6WjxWoJzkRsysFmpU5TgvkXvT0jFjj8RTjGnI0rgYr9A5EYlHyyjc4Yk05KSQs%2BXO0iCRQiI35JKWCbCoyBfTpQfaei95geirCDeqV%2FWEVcSfLMCSfdWb7PHdO93DIH%2FrayQhajMKES8dHp4PLbHsQtlMag1yq5Mlzwpm4qLyQn6GXpKH5j9e5ARBvmd0vYDgHN63&X-Amz-Signature=8c5769be789ddfa7a8b4eac5a3495ae3f51fa1fbcd9b46a2c645a0ecb3945ee7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSGO6MB4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtWb6%2FgBWekzDlA1MB3GhvfDiI%2BLNY2U2FVUo1iLyGgAIhALuYRdVpABw4vyq65hUc%2BanmP%2Bsti20zJ8Lk9Pm%2FTe95Kv8DCC0QABoMNjM3NDIzMTgzODA1IgwHMywrva8dRjMOZoIq3AM6teHDhx07O0X%2Bp6HadCfj2QM%2FtPQBDAuwBaolShH088BTD36ZmDx%2FCAfJJNYMSvPWPl%2BpLLLEkYJoTQOg7sIXuMF86e%2FUqfF9%2FSIPBKpKvTMWI5POX2dE%2FsDqjf%2F6pGxzAwTf0p5VV15M%2FkYEmpg1xqJVgAmvyWonDm%2Ba%2BDKSYiwvWP6y8A52DJ8jlx%2FXQOyHwMJb0yV%2FHez59loL0qnGSFrCyq6cio3n4CCoAq2eXuWHlP68j96nZNUxFxM8l8A2g1Y%2FF9ylNabVoRz8D6JHTgztVsWOkhr4ZPuJTa8zzrZGZefgeOMJVGdekbk4gHpVPFo4g4tKJv9s%2BwMJ6mpZG6tyS9%2BDuDvCej%2FBdB6RVU4XJ55htBmqZNuhbdt%2FwUPAAX6SNnGLzmaC2uP4RyHl%2FcKVA6tnI0RnYCJnIJj5WU2qcZ%2FIQCoFfvgreXuMzBMUk7cveqC71it1xESb83ybj3YthsYURhXMKCIPtfb%2BB%2FSuZDRZx80oqcgYKs7NzgiUOJ2wjX5psPXOtUBxl3gjT%2B9fdd1aoKW5oUhgjNv9ajhwax4syXXs%2B2fwJPP%2F%2FmzeAz2TRTESbLV7iYSvPVoO26W9KXvMS0gAHTLuh9PiGdRDXUmo5QpqFoXBjDCTkaa%2BBjqkASVLLuToOhtP4h8Oqewz5XO6WjxWoJzkRsysFmpU5TgvkXvT0jFjj8RTjGnI0rgYr9A5EYlHyyjc4Yk05KSQs%2BXO0iCRQiI35JKWCbCoyBfTpQfaei95geirCDeqV%2FWEVcSfLMCSfdWb7PHdO93DIH%2FrayQhajMKES8dHp4PLbHsQtlMag1yq5Mlzwpm4qLyQn6GXpKH5j9e5ARBvmd0vYDgHN63&X-Amz-Signature=bdbe99f4178d992bfba3870666c97906d08a90abf9b68a44fc18dbd247415e51&X-Amz-SignedHeaders=host&x-id=GetObject)
