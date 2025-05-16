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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWXGNTTC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZg7I1VqIYAHpltbnarPpf3S1bpKALFYoDZ4gZShHwCQIgPM35hOETH%2FyTP73Y60Egl55jK3L2v%2BaMpaOu8hLl6Bcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEf%2BXrCDe%2Ff5bwVfaCrcAzdQbQZWLa8Mdau6lCpUYNr%2BPPVyCYgT8ZKDOx8YETNi%2BcmuUNseczHrB7OP%2B4HY1XWrQ8685c6WzUUEBrlYHaod%2FWWwyWqJj9XslFm8R7wFgqFqBj%2BdHwPctIBYakcj3StXmJz1BkOUZPybfXFK1B%2BZBO9dgrdVBoUDwvvT3W6JLX82ynmGcdtlspt7jbeD48JhKE5%2FxodnNEaX4Lv%2BE%2Bvzw1XNkLOd8VYxWVhRpB41wTYA2Q%2FuX8EcoFMX%2BqkY42lTmxfHxRiYwC6krdzCwb3DcfVAKi20RugjGYEhzMmBRTqesFODswm8YoY5XrCQI69B32mOOvCFutworUwPZ%2B%2FSqaymvUHpiFH982Vqp8rDLYyHJPf24uWyLWJYkeh6T5B6yK%2FFu8yUvHPqSyEJZ16xrSsEKFcv4vTlZmLrKJ%2Bj9UZlsqF1vonomY4GADw0QQdkpLOy0wzsT8DzKitgHXfm1p48J2kR0csRC7ujSJBj1f0G9ZH5Wi1AdYbILHArVyPZ3Ut%2F7RqBwOE3Psk3peEWh%2FkVtoY61FfecIJfOKMSt5sqFio%2BG2yeEHNAY9Yd02Ygwwl0K6RV4nyS1EVYN6rbCPIrftAVZfkX%2Ft8tSG2dLKA4uKcxsFe66%2FMLMNmBncEGOqUBxmsMCnWynSWulUma8VIuwt6eI9N5brTQn9EQ9%2Bj2YoXD4xfqJ0Ay9Kmn8KMbfygJJIvCpSLlVfctzq9W4T5EafhtAsNy0yizzV4sn7gSrmf%2FWMn%2Forzc7mMxluJRq71%2BAlt2icGgjZwAHouoXP8OcFcxr4KGrwdfjlSXzs%2FOWguD2agI7FzaKWCh7R%2FwkTkjqwQLCTKKo0R57yqVdGVdADBr4Kg%2B&X-Amz-Signature=11a44aa10d27f6aae1e7b7a619eff23a0631b12452e9183930cbb2e7892d8d9b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWXGNTTC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZg7I1VqIYAHpltbnarPpf3S1bpKALFYoDZ4gZShHwCQIgPM35hOETH%2FyTP73Y60Egl55jK3L2v%2BaMpaOu8hLl6Bcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEf%2BXrCDe%2Ff5bwVfaCrcAzdQbQZWLa8Mdau6lCpUYNr%2BPPVyCYgT8ZKDOx8YETNi%2BcmuUNseczHrB7OP%2B4HY1XWrQ8685c6WzUUEBrlYHaod%2FWWwyWqJj9XslFm8R7wFgqFqBj%2BdHwPctIBYakcj3StXmJz1BkOUZPybfXFK1B%2BZBO9dgrdVBoUDwvvT3W6JLX82ynmGcdtlspt7jbeD48JhKE5%2FxodnNEaX4Lv%2BE%2Bvzw1XNkLOd8VYxWVhRpB41wTYA2Q%2FuX8EcoFMX%2BqkY42lTmxfHxRiYwC6krdzCwb3DcfVAKi20RugjGYEhzMmBRTqesFODswm8YoY5XrCQI69B32mOOvCFutworUwPZ%2B%2FSqaymvUHpiFH982Vqp8rDLYyHJPf24uWyLWJYkeh6T5B6yK%2FFu8yUvHPqSyEJZ16xrSsEKFcv4vTlZmLrKJ%2Bj9UZlsqF1vonomY4GADw0QQdkpLOy0wzsT8DzKitgHXfm1p48J2kR0csRC7ujSJBj1f0G9ZH5Wi1AdYbILHArVyPZ3Ut%2F7RqBwOE3Psk3peEWh%2FkVtoY61FfecIJfOKMSt5sqFio%2BG2yeEHNAY9Yd02Ygwwl0K6RV4nyS1EVYN6rbCPIrftAVZfkX%2Ft8tSG2dLKA4uKcxsFe66%2FMLMNmBncEGOqUBxmsMCnWynSWulUma8VIuwt6eI9N5brTQn9EQ9%2Bj2YoXD4xfqJ0Ay9Kmn8KMbfygJJIvCpSLlVfctzq9W4T5EafhtAsNy0yizzV4sn7gSrmf%2FWMn%2Forzc7mMxluJRq71%2BAlt2icGgjZwAHouoXP8OcFcxr4KGrwdfjlSXzs%2FOWguD2agI7FzaKWCh7R%2FwkTkjqwQLCTKKo0R57yqVdGVdADBr4Kg%2B&X-Amz-Signature=cf7195952bc97df19270406e2a231e49a762cee7ea318218310ccb668f6c50c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWXGNTTC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZg7I1VqIYAHpltbnarPpf3S1bpKALFYoDZ4gZShHwCQIgPM35hOETH%2FyTP73Y60Egl55jK3L2v%2BaMpaOu8hLl6Bcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEf%2BXrCDe%2Ff5bwVfaCrcAzdQbQZWLa8Mdau6lCpUYNr%2BPPVyCYgT8ZKDOx8YETNi%2BcmuUNseczHrB7OP%2B4HY1XWrQ8685c6WzUUEBrlYHaod%2FWWwyWqJj9XslFm8R7wFgqFqBj%2BdHwPctIBYakcj3StXmJz1BkOUZPybfXFK1B%2BZBO9dgrdVBoUDwvvT3W6JLX82ynmGcdtlspt7jbeD48JhKE5%2FxodnNEaX4Lv%2BE%2Bvzw1XNkLOd8VYxWVhRpB41wTYA2Q%2FuX8EcoFMX%2BqkY42lTmxfHxRiYwC6krdzCwb3DcfVAKi20RugjGYEhzMmBRTqesFODswm8YoY5XrCQI69B32mOOvCFutworUwPZ%2B%2FSqaymvUHpiFH982Vqp8rDLYyHJPf24uWyLWJYkeh6T5B6yK%2FFu8yUvHPqSyEJZ16xrSsEKFcv4vTlZmLrKJ%2Bj9UZlsqF1vonomY4GADw0QQdkpLOy0wzsT8DzKitgHXfm1p48J2kR0csRC7ujSJBj1f0G9ZH5Wi1AdYbILHArVyPZ3Ut%2F7RqBwOE3Psk3peEWh%2FkVtoY61FfecIJfOKMSt5sqFio%2BG2yeEHNAY9Yd02Ygwwl0K6RV4nyS1EVYN6rbCPIrftAVZfkX%2Ft8tSG2dLKA4uKcxsFe66%2FMLMNmBncEGOqUBxmsMCnWynSWulUma8VIuwt6eI9N5brTQn9EQ9%2Bj2YoXD4xfqJ0Ay9Kmn8KMbfygJJIvCpSLlVfctzq9W4T5EafhtAsNy0yizzV4sn7gSrmf%2FWMn%2Forzc7mMxluJRq71%2BAlt2icGgjZwAHouoXP8OcFcxr4KGrwdfjlSXzs%2FOWguD2agI7FzaKWCh7R%2FwkTkjqwQLCTKKo0R57yqVdGVdADBr4Kg%2B&X-Amz-Signature=a1bcc95685c346d29d6a645a30b5fad3241032db50fba844206ead14f6ae8d49&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWXGNTTC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZg7I1VqIYAHpltbnarPpf3S1bpKALFYoDZ4gZShHwCQIgPM35hOETH%2FyTP73Y60Egl55jK3L2v%2BaMpaOu8hLl6Bcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEf%2BXrCDe%2Ff5bwVfaCrcAzdQbQZWLa8Mdau6lCpUYNr%2BPPVyCYgT8ZKDOx8YETNi%2BcmuUNseczHrB7OP%2B4HY1XWrQ8685c6WzUUEBrlYHaod%2FWWwyWqJj9XslFm8R7wFgqFqBj%2BdHwPctIBYakcj3StXmJz1BkOUZPybfXFK1B%2BZBO9dgrdVBoUDwvvT3W6JLX82ynmGcdtlspt7jbeD48JhKE5%2FxodnNEaX4Lv%2BE%2Bvzw1XNkLOd8VYxWVhRpB41wTYA2Q%2FuX8EcoFMX%2BqkY42lTmxfHxRiYwC6krdzCwb3DcfVAKi20RugjGYEhzMmBRTqesFODswm8YoY5XrCQI69B32mOOvCFutworUwPZ%2B%2FSqaymvUHpiFH982Vqp8rDLYyHJPf24uWyLWJYkeh6T5B6yK%2FFu8yUvHPqSyEJZ16xrSsEKFcv4vTlZmLrKJ%2Bj9UZlsqF1vonomY4GADw0QQdkpLOy0wzsT8DzKitgHXfm1p48J2kR0csRC7ujSJBj1f0G9ZH5Wi1AdYbILHArVyPZ3Ut%2F7RqBwOE3Psk3peEWh%2FkVtoY61FfecIJfOKMSt5sqFio%2BG2yeEHNAY9Yd02Ygwwl0K6RV4nyS1EVYN6rbCPIrftAVZfkX%2Ft8tSG2dLKA4uKcxsFe66%2FMLMNmBncEGOqUBxmsMCnWynSWulUma8VIuwt6eI9N5brTQn9EQ9%2Bj2YoXD4xfqJ0Ay9Kmn8KMbfygJJIvCpSLlVfctzq9W4T5EafhtAsNy0yizzV4sn7gSrmf%2FWMn%2Forzc7mMxluJRq71%2BAlt2icGgjZwAHouoXP8OcFcxr4KGrwdfjlSXzs%2FOWguD2agI7FzaKWCh7R%2FwkTkjqwQLCTKKo0R57yqVdGVdADBr4Kg%2B&X-Amz-Signature=94c6af1b592195e4fa3775574b778a86a290683a2f55cf674c27f211e254c0e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWXGNTTC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZg7I1VqIYAHpltbnarPpf3S1bpKALFYoDZ4gZShHwCQIgPM35hOETH%2FyTP73Y60Egl55jK3L2v%2BaMpaOu8hLl6Bcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEf%2BXrCDe%2Ff5bwVfaCrcAzdQbQZWLa8Mdau6lCpUYNr%2BPPVyCYgT8ZKDOx8YETNi%2BcmuUNseczHrB7OP%2B4HY1XWrQ8685c6WzUUEBrlYHaod%2FWWwyWqJj9XslFm8R7wFgqFqBj%2BdHwPctIBYakcj3StXmJz1BkOUZPybfXFK1B%2BZBO9dgrdVBoUDwvvT3W6JLX82ynmGcdtlspt7jbeD48JhKE5%2FxodnNEaX4Lv%2BE%2Bvzw1XNkLOd8VYxWVhRpB41wTYA2Q%2FuX8EcoFMX%2BqkY42lTmxfHxRiYwC6krdzCwb3DcfVAKi20RugjGYEhzMmBRTqesFODswm8YoY5XrCQI69B32mOOvCFutworUwPZ%2B%2FSqaymvUHpiFH982Vqp8rDLYyHJPf24uWyLWJYkeh6T5B6yK%2FFu8yUvHPqSyEJZ16xrSsEKFcv4vTlZmLrKJ%2Bj9UZlsqF1vonomY4GADw0QQdkpLOy0wzsT8DzKitgHXfm1p48J2kR0csRC7ujSJBj1f0G9ZH5Wi1AdYbILHArVyPZ3Ut%2F7RqBwOE3Psk3peEWh%2FkVtoY61FfecIJfOKMSt5sqFio%2BG2yeEHNAY9Yd02Ygwwl0K6RV4nyS1EVYN6rbCPIrftAVZfkX%2Ft8tSG2dLKA4uKcxsFe66%2FMLMNmBncEGOqUBxmsMCnWynSWulUma8VIuwt6eI9N5brTQn9EQ9%2Bj2YoXD4xfqJ0Ay9Kmn8KMbfygJJIvCpSLlVfctzq9W4T5EafhtAsNy0yizzV4sn7gSrmf%2FWMn%2Forzc7mMxluJRq71%2BAlt2icGgjZwAHouoXP8OcFcxr4KGrwdfjlSXzs%2FOWguD2agI7FzaKWCh7R%2FwkTkjqwQLCTKKo0R57yqVdGVdADBr4Kg%2B&X-Amz-Signature=5b3df4c272f3569ed6a6256fdecb1a0800de8fdfbaa637d2808de157e717dcbb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWXGNTTC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZg7I1VqIYAHpltbnarPpf3S1bpKALFYoDZ4gZShHwCQIgPM35hOETH%2FyTP73Y60Egl55jK3L2v%2BaMpaOu8hLl6Bcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEf%2BXrCDe%2Ff5bwVfaCrcAzdQbQZWLa8Mdau6lCpUYNr%2BPPVyCYgT8ZKDOx8YETNi%2BcmuUNseczHrB7OP%2B4HY1XWrQ8685c6WzUUEBrlYHaod%2FWWwyWqJj9XslFm8R7wFgqFqBj%2BdHwPctIBYakcj3StXmJz1BkOUZPybfXFK1B%2BZBO9dgrdVBoUDwvvT3W6JLX82ynmGcdtlspt7jbeD48JhKE5%2FxodnNEaX4Lv%2BE%2Bvzw1XNkLOd8VYxWVhRpB41wTYA2Q%2FuX8EcoFMX%2BqkY42lTmxfHxRiYwC6krdzCwb3DcfVAKi20RugjGYEhzMmBRTqesFODswm8YoY5XrCQI69B32mOOvCFutworUwPZ%2B%2FSqaymvUHpiFH982Vqp8rDLYyHJPf24uWyLWJYkeh6T5B6yK%2FFu8yUvHPqSyEJZ16xrSsEKFcv4vTlZmLrKJ%2Bj9UZlsqF1vonomY4GADw0QQdkpLOy0wzsT8DzKitgHXfm1p48J2kR0csRC7ujSJBj1f0G9ZH5Wi1AdYbILHArVyPZ3Ut%2F7RqBwOE3Psk3peEWh%2FkVtoY61FfecIJfOKMSt5sqFio%2BG2yeEHNAY9Yd02Ygwwl0K6RV4nyS1EVYN6rbCPIrftAVZfkX%2Ft8tSG2dLKA4uKcxsFe66%2FMLMNmBncEGOqUBxmsMCnWynSWulUma8VIuwt6eI9N5brTQn9EQ9%2Bj2YoXD4xfqJ0Ay9Kmn8KMbfygJJIvCpSLlVfctzq9W4T5EafhtAsNy0yizzV4sn7gSrmf%2FWMn%2Forzc7mMxluJRq71%2BAlt2icGgjZwAHouoXP8OcFcxr4KGrwdfjlSXzs%2FOWguD2agI7FzaKWCh7R%2FwkTkjqwQLCTKKo0R57yqVdGVdADBr4Kg%2B&X-Amz-Signature=cf20b655eea3758130f27ac927e7bfb72131c8ab98a0bc3befe49de81a99f275&X-Amz-SignedHeaders=host&x-id=GetObject)
