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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC46JQ3H%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBXCTuxmFEd2F7z9q8NvussrHPeqtAW8LRaGcURBKHZCAiEA1UC8bc1L3g5XJuTuHZ88sQ3TbaRaILVQjVAY%2Fz9soDoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmbKahT2df9zSJsAyrcAwRGu2uUehWE3v7y%2Bm8%2Bu0M%2F%2BdX84q8FHZ7r%2BKUkY8ytJla3bK8gzZzeIPalHmEIVkuLcK6jqX4qh1rU76K2zBuK7Iya64bQ9UzRHpf1gH8AG6rgS40LojX6EL2kD8Lw5viMflIu7RawXGA7wFoHXjvBfWbRI8ryaxHwq%2Fa4nrb2jhf9YEGRjA7afZsh8lzpL0CJ8RFYbbWrAF1cwDqwSweS59%2FPj8Bq0HJTAIRMeacRD7NMOln7xJ3VLVeYLzcs5Ccx5UrpKqy%2Bwg%2Fv%2FpvYz%2B54JMC4sjRr0lEOyUx04wtgRB7ZRc9uc4FGwx%2BRnNDHm7lKJH3tuZlhzfivl1GfJGLIHaOwZtekc5YFs3Uw%2Bm9SgyDQH%2BzaftaTjXGONVPG35A4tGVAbynwpNu%2FeRJVTUokHFy7twYGeN5GgwpetQ%2FpV2S1dIdn552cCbVdcFbPEg0HyTDyYHEO6RSY6vEyNCsnG8wdgKBqJq5%2Fkb0d2CKxEoz9%2Ffawnk2qfSMmZ8WPd1%2BdKJffYdbtB26ynBKjR%2FaURdc%2Bbj1uhCsVdS3wtxPJ%2FClZQcqeX3uMxOIPFCVarsS%2BrcHXKGI2yTw1gNg3pvfMAWpbAFd0qvyI7FfkTHfClKnpB%2BsQJ4P0L%2BaLML3DtL8GOqUBU6L6QsT2sP7AHEOpAUOeFm4jwLgJEgvl65HkiXJfLi%2B88owjFtbEtBp1m4f9wH9xKbHgOKfU1vEfW5QC%2Fp4F36KHBoJPeDqdqD3%2FTf7LNdoQc8aBxWrTUyr3%2Bkhg1aDMWsnWk3bFBOAJsmH%2FfMQZePqLOhthugsNGvnHCFnQoFR6aNRlj6jXAzSJOD%2BRy7prGrVBXeeiuvJQdun%2BPX5lrqWy9vdi&X-Amz-Signature=8aa79286ec63fc28a6cbba62cd54bf5838814869e3a6f531dac06da52ec9eefa&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC46JQ3H%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBXCTuxmFEd2F7z9q8NvussrHPeqtAW8LRaGcURBKHZCAiEA1UC8bc1L3g5XJuTuHZ88sQ3TbaRaILVQjVAY%2Fz9soDoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmbKahT2df9zSJsAyrcAwRGu2uUehWE3v7y%2Bm8%2Bu0M%2F%2BdX84q8FHZ7r%2BKUkY8ytJla3bK8gzZzeIPalHmEIVkuLcK6jqX4qh1rU76K2zBuK7Iya64bQ9UzRHpf1gH8AG6rgS40LojX6EL2kD8Lw5viMflIu7RawXGA7wFoHXjvBfWbRI8ryaxHwq%2Fa4nrb2jhf9YEGRjA7afZsh8lzpL0CJ8RFYbbWrAF1cwDqwSweS59%2FPj8Bq0HJTAIRMeacRD7NMOln7xJ3VLVeYLzcs5Ccx5UrpKqy%2Bwg%2Fv%2FpvYz%2B54JMC4sjRr0lEOyUx04wtgRB7ZRc9uc4FGwx%2BRnNDHm7lKJH3tuZlhzfivl1GfJGLIHaOwZtekc5YFs3Uw%2Bm9SgyDQH%2BzaftaTjXGONVPG35A4tGVAbynwpNu%2FeRJVTUokHFy7twYGeN5GgwpetQ%2FpV2S1dIdn552cCbVdcFbPEg0HyTDyYHEO6RSY6vEyNCsnG8wdgKBqJq5%2Fkb0d2CKxEoz9%2Ffawnk2qfSMmZ8WPd1%2BdKJffYdbtB26ynBKjR%2FaURdc%2Bbj1uhCsVdS3wtxPJ%2FClZQcqeX3uMxOIPFCVarsS%2BrcHXKGI2yTw1gNg3pvfMAWpbAFd0qvyI7FfkTHfClKnpB%2BsQJ4P0L%2BaLML3DtL8GOqUBU6L6QsT2sP7AHEOpAUOeFm4jwLgJEgvl65HkiXJfLi%2B88owjFtbEtBp1m4f9wH9xKbHgOKfU1vEfW5QC%2Fp4F36KHBoJPeDqdqD3%2FTf7LNdoQc8aBxWrTUyr3%2Bkhg1aDMWsnWk3bFBOAJsmH%2FfMQZePqLOhthugsNGvnHCFnQoFR6aNRlj6jXAzSJOD%2BRy7prGrVBXeeiuvJQdun%2BPX5lrqWy9vdi&X-Amz-Signature=2afff355178cb0f62e445aa4b18d425764f2312fc2bc0eb0381d1e939d8b9ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC46JQ3H%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBXCTuxmFEd2F7z9q8NvussrHPeqtAW8LRaGcURBKHZCAiEA1UC8bc1L3g5XJuTuHZ88sQ3TbaRaILVQjVAY%2Fz9soDoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmbKahT2df9zSJsAyrcAwRGu2uUehWE3v7y%2Bm8%2Bu0M%2F%2BdX84q8FHZ7r%2BKUkY8ytJla3bK8gzZzeIPalHmEIVkuLcK6jqX4qh1rU76K2zBuK7Iya64bQ9UzRHpf1gH8AG6rgS40LojX6EL2kD8Lw5viMflIu7RawXGA7wFoHXjvBfWbRI8ryaxHwq%2Fa4nrb2jhf9YEGRjA7afZsh8lzpL0CJ8RFYbbWrAF1cwDqwSweS59%2FPj8Bq0HJTAIRMeacRD7NMOln7xJ3VLVeYLzcs5Ccx5UrpKqy%2Bwg%2Fv%2FpvYz%2B54JMC4sjRr0lEOyUx04wtgRB7ZRc9uc4FGwx%2BRnNDHm7lKJH3tuZlhzfivl1GfJGLIHaOwZtekc5YFs3Uw%2Bm9SgyDQH%2BzaftaTjXGONVPG35A4tGVAbynwpNu%2FeRJVTUokHFy7twYGeN5GgwpetQ%2FpV2S1dIdn552cCbVdcFbPEg0HyTDyYHEO6RSY6vEyNCsnG8wdgKBqJq5%2Fkb0d2CKxEoz9%2Ffawnk2qfSMmZ8WPd1%2BdKJffYdbtB26ynBKjR%2FaURdc%2Bbj1uhCsVdS3wtxPJ%2FClZQcqeX3uMxOIPFCVarsS%2BrcHXKGI2yTw1gNg3pvfMAWpbAFd0qvyI7FfkTHfClKnpB%2BsQJ4P0L%2BaLML3DtL8GOqUBU6L6QsT2sP7AHEOpAUOeFm4jwLgJEgvl65HkiXJfLi%2B88owjFtbEtBp1m4f9wH9xKbHgOKfU1vEfW5QC%2Fp4F36KHBoJPeDqdqD3%2FTf7LNdoQc8aBxWrTUyr3%2Bkhg1aDMWsnWk3bFBOAJsmH%2FfMQZePqLOhthugsNGvnHCFnQoFR6aNRlj6jXAzSJOD%2BRy7prGrVBXeeiuvJQdun%2BPX5lrqWy9vdi&X-Amz-Signature=1c5737dc6d381b07b85f102ceccc9855d0371381d7777b455e42b51f42aae1ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC46JQ3H%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBXCTuxmFEd2F7z9q8NvussrHPeqtAW8LRaGcURBKHZCAiEA1UC8bc1L3g5XJuTuHZ88sQ3TbaRaILVQjVAY%2Fz9soDoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmbKahT2df9zSJsAyrcAwRGu2uUehWE3v7y%2Bm8%2Bu0M%2F%2BdX84q8FHZ7r%2BKUkY8ytJla3bK8gzZzeIPalHmEIVkuLcK6jqX4qh1rU76K2zBuK7Iya64bQ9UzRHpf1gH8AG6rgS40LojX6EL2kD8Lw5viMflIu7RawXGA7wFoHXjvBfWbRI8ryaxHwq%2Fa4nrb2jhf9YEGRjA7afZsh8lzpL0CJ8RFYbbWrAF1cwDqwSweS59%2FPj8Bq0HJTAIRMeacRD7NMOln7xJ3VLVeYLzcs5Ccx5UrpKqy%2Bwg%2Fv%2FpvYz%2B54JMC4sjRr0lEOyUx04wtgRB7ZRc9uc4FGwx%2BRnNDHm7lKJH3tuZlhzfivl1GfJGLIHaOwZtekc5YFs3Uw%2Bm9SgyDQH%2BzaftaTjXGONVPG35A4tGVAbynwpNu%2FeRJVTUokHFy7twYGeN5GgwpetQ%2FpV2S1dIdn552cCbVdcFbPEg0HyTDyYHEO6RSY6vEyNCsnG8wdgKBqJq5%2Fkb0d2CKxEoz9%2Ffawnk2qfSMmZ8WPd1%2BdKJffYdbtB26ynBKjR%2FaURdc%2Bbj1uhCsVdS3wtxPJ%2FClZQcqeX3uMxOIPFCVarsS%2BrcHXKGI2yTw1gNg3pvfMAWpbAFd0qvyI7FfkTHfClKnpB%2BsQJ4P0L%2BaLML3DtL8GOqUBU6L6QsT2sP7AHEOpAUOeFm4jwLgJEgvl65HkiXJfLi%2B88owjFtbEtBp1m4f9wH9xKbHgOKfU1vEfW5QC%2Fp4F36KHBoJPeDqdqD3%2FTf7LNdoQc8aBxWrTUyr3%2Bkhg1aDMWsnWk3bFBOAJsmH%2FfMQZePqLOhthugsNGvnHCFnQoFR6aNRlj6jXAzSJOD%2BRy7prGrVBXeeiuvJQdun%2BPX5lrqWy9vdi&X-Amz-Signature=5972ed3eef56f7d7caffa8589360d6fdac3a147dd35589ef693c7ca81c6b18d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC46JQ3H%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBXCTuxmFEd2F7z9q8NvussrHPeqtAW8LRaGcURBKHZCAiEA1UC8bc1L3g5XJuTuHZ88sQ3TbaRaILVQjVAY%2Fz9soDoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmbKahT2df9zSJsAyrcAwRGu2uUehWE3v7y%2Bm8%2Bu0M%2F%2BdX84q8FHZ7r%2BKUkY8ytJla3bK8gzZzeIPalHmEIVkuLcK6jqX4qh1rU76K2zBuK7Iya64bQ9UzRHpf1gH8AG6rgS40LojX6EL2kD8Lw5viMflIu7RawXGA7wFoHXjvBfWbRI8ryaxHwq%2Fa4nrb2jhf9YEGRjA7afZsh8lzpL0CJ8RFYbbWrAF1cwDqwSweS59%2FPj8Bq0HJTAIRMeacRD7NMOln7xJ3VLVeYLzcs5Ccx5UrpKqy%2Bwg%2Fv%2FpvYz%2B54JMC4sjRr0lEOyUx04wtgRB7ZRc9uc4FGwx%2BRnNDHm7lKJH3tuZlhzfivl1GfJGLIHaOwZtekc5YFs3Uw%2Bm9SgyDQH%2BzaftaTjXGONVPG35A4tGVAbynwpNu%2FeRJVTUokHFy7twYGeN5GgwpetQ%2FpV2S1dIdn552cCbVdcFbPEg0HyTDyYHEO6RSY6vEyNCsnG8wdgKBqJq5%2Fkb0d2CKxEoz9%2Ffawnk2qfSMmZ8WPd1%2BdKJffYdbtB26ynBKjR%2FaURdc%2Bbj1uhCsVdS3wtxPJ%2FClZQcqeX3uMxOIPFCVarsS%2BrcHXKGI2yTw1gNg3pvfMAWpbAFd0qvyI7FfkTHfClKnpB%2BsQJ4P0L%2BaLML3DtL8GOqUBU6L6QsT2sP7AHEOpAUOeFm4jwLgJEgvl65HkiXJfLi%2B88owjFtbEtBp1m4f9wH9xKbHgOKfU1vEfW5QC%2Fp4F36KHBoJPeDqdqD3%2FTf7LNdoQc8aBxWrTUyr3%2Bkhg1aDMWsnWk3bFBOAJsmH%2FfMQZePqLOhthugsNGvnHCFnQoFR6aNRlj6jXAzSJOD%2BRy7prGrVBXeeiuvJQdun%2BPX5lrqWy9vdi&X-Amz-Signature=82fca3e1c64cf2cfac04df5c5ca3513638158973afbfc337aadcaafbb31dc920&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC46JQ3H%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBXCTuxmFEd2F7z9q8NvussrHPeqtAW8LRaGcURBKHZCAiEA1UC8bc1L3g5XJuTuHZ88sQ3TbaRaILVQjVAY%2Fz9soDoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmbKahT2df9zSJsAyrcAwRGu2uUehWE3v7y%2Bm8%2Bu0M%2F%2BdX84q8FHZ7r%2BKUkY8ytJla3bK8gzZzeIPalHmEIVkuLcK6jqX4qh1rU76K2zBuK7Iya64bQ9UzRHpf1gH8AG6rgS40LojX6EL2kD8Lw5viMflIu7RawXGA7wFoHXjvBfWbRI8ryaxHwq%2Fa4nrb2jhf9YEGRjA7afZsh8lzpL0CJ8RFYbbWrAF1cwDqwSweS59%2FPj8Bq0HJTAIRMeacRD7NMOln7xJ3VLVeYLzcs5Ccx5UrpKqy%2Bwg%2Fv%2FpvYz%2B54JMC4sjRr0lEOyUx04wtgRB7ZRc9uc4FGwx%2BRnNDHm7lKJH3tuZlhzfivl1GfJGLIHaOwZtekc5YFs3Uw%2Bm9SgyDQH%2BzaftaTjXGONVPG35A4tGVAbynwpNu%2FeRJVTUokHFy7twYGeN5GgwpetQ%2FpV2S1dIdn552cCbVdcFbPEg0HyTDyYHEO6RSY6vEyNCsnG8wdgKBqJq5%2Fkb0d2CKxEoz9%2Ffawnk2qfSMmZ8WPd1%2BdKJffYdbtB26ynBKjR%2FaURdc%2Bbj1uhCsVdS3wtxPJ%2FClZQcqeX3uMxOIPFCVarsS%2BrcHXKGI2yTw1gNg3pvfMAWpbAFd0qvyI7FfkTHfClKnpB%2BsQJ4P0L%2BaLML3DtL8GOqUBU6L6QsT2sP7AHEOpAUOeFm4jwLgJEgvl65HkiXJfLi%2B88owjFtbEtBp1m4f9wH9xKbHgOKfU1vEfW5QC%2Fp4F36KHBoJPeDqdqD3%2FTf7LNdoQc8aBxWrTUyr3%2Bkhg1aDMWsnWk3bFBOAJsmH%2FfMQZePqLOhthugsNGvnHCFnQoFR6aNRlj6jXAzSJOD%2BRy7prGrVBXeeiuvJQdun%2BPX5lrqWy9vdi&X-Amz-Signature=6c6579f7350fc6a44d26ea071566d349538dd7b59f807a6a18c661bfa961769b&X-Amz-SignedHeaders=host&x-id=GetObject)
