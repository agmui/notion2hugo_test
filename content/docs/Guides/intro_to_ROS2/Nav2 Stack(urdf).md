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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNRCG4S7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDTeK1YCVLBA%2BqA8IRN7%2B%2FXMn85%2BmGK09uWy3Udmek56wIhAKtr5RZ85YfNX3eVeyPjWCshWptpl22Xsjz8faeMamQBKv8DCGUQABoMNjM3NDIzMTgzODA1Igzkc6nkqyNdY%2FYPvjsq3APNlDS3hGJJC9bgZxdbP58H055Jve%2FFmNjAaxkDvXC65ar7qtCzEcUid06%2F9ZkVX%2B3idDt9s%2F8QYN1KVqeYLEWsfKZHezy1%2FNKLBkMWiuUgVITK3GBqYvhHerP6moBu88ZU1579XQQ%2BdWmFUvsYKRR6pquKRB%2B34ydFWNOVtTjpU9TmLgVdcVyOz54ibjTpdZm3APZhajMvZOx%2Bn6tB0bRbXzOc7zo%2B7CwCn1fTbhDqlJT%2F1sIrkCGZ9sljZO4zXyT%2FTlIVEsFcBaQ0SyC7OIgqukOqfag8CufDEHXTLKrKyqunGEdRVGTAIPKmkId%2F3%2F3YBKaCup%2FF5WoWVznShHQ7xo22BeOBzLkAoZ%2BSG4t8rRV5eI6KKIhVITgLVGSGuTKPsrR3T2uuXi1EuaQaP%2Bs%2F7t3gtc5uCGYiMe4MxSuOzN6XVHPZAHEGrx5prRdIJ4%2BMWol4%2FUOoZAOUtcDSDj2Mfz%2F2ALH%2B8BsrRbgApnPYAf5csDacHq59EWa999YplnH02rvs7OlSf3rj42hi55m9rhqBefZNJh%2F5CcsbFqrT8gDut3L5i65fwisiFzaypFnk65RTIy0gNytAOB9T9LbiidjA8jlJNxNqqndSaHYku2OF4TbRoYRUJ8U4KTCZiMm9BjqkAWSzE%2BywTznZGSxQfoewecQpBpgsDU1tikGEZOYEKN258I0z2aIY4LTv7%2FDylviQlydI%2BujLNAfrdB1RvA0o4MtrSvMfTkwiZpOOUJGeMvaK7eSS8zPbxz5rCr7PcMizVTSmmCktdVxIoZWbLjhMW0ZVHHnN99gv9LC41v3xn3f8OkIJ3ZshPIwwSXgBbw%2BFx%2BZCwOUYFcPX2Pv94oM3OBUJQpX2&X-Amz-Signature=c980ef17d88330e441408faed533c869e905559e53eb60375b5f897b7af50c82&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNRCG4S7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDTeK1YCVLBA%2BqA8IRN7%2B%2FXMn85%2BmGK09uWy3Udmek56wIhAKtr5RZ85YfNX3eVeyPjWCshWptpl22Xsjz8faeMamQBKv8DCGUQABoMNjM3NDIzMTgzODA1Igzkc6nkqyNdY%2FYPvjsq3APNlDS3hGJJC9bgZxdbP58H055Jve%2FFmNjAaxkDvXC65ar7qtCzEcUid06%2F9ZkVX%2B3idDt9s%2F8QYN1KVqeYLEWsfKZHezy1%2FNKLBkMWiuUgVITK3GBqYvhHerP6moBu88ZU1579XQQ%2BdWmFUvsYKRR6pquKRB%2B34ydFWNOVtTjpU9TmLgVdcVyOz54ibjTpdZm3APZhajMvZOx%2Bn6tB0bRbXzOc7zo%2B7CwCn1fTbhDqlJT%2F1sIrkCGZ9sljZO4zXyT%2FTlIVEsFcBaQ0SyC7OIgqukOqfag8CufDEHXTLKrKyqunGEdRVGTAIPKmkId%2F3%2F3YBKaCup%2FF5WoWVznShHQ7xo22BeOBzLkAoZ%2BSG4t8rRV5eI6KKIhVITgLVGSGuTKPsrR3T2uuXi1EuaQaP%2Bs%2F7t3gtc5uCGYiMe4MxSuOzN6XVHPZAHEGrx5prRdIJ4%2BMWol4%2FUOoZAOUtcDSDj2Mfz%2F2ALH%2B8BsrRbgApnPYAf5csDacHq59EWa999YplnH02rvs7OlSf3rj42hi55m9rhqBefZNJh%2F5CcsbFqrT8gDut3L5i65fwisiFzaypFnk65RTIy0gNytAOB9T9LbiidjA8jlJNxNqqndSaHYku2OF4TbRoYRUJ8U4KTCZiMm9BjqkAWSzE%2BywTznZGSxQfoewecQpBpgsDU1tikGEZOYEKN258I0z2aIY4LTv7%2FDylviQlydI%2BujLNAfrdB1RvA0o4MtrSvMfTkwiZpOOUJGeMvaK7eSS8zPbxz5rCr7PcMizVTSmmCktdVxIoZWbLjhMW0ZVHHnN99gv9LC41v3xn3f8OkIJ3ZshPIwwSXgBbw%2BFx%2BZCwOUYFcPX2Pv94oM3OBUJQpX2&X-Amz-Signature=884983cc8a9e43cccb641d4476edca41dbcf7eedc784352f0ae2b92428016309&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNRCG4S7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDTeK1YCVLBA%2BqA8IRN7%2B%2FXMn85%2BmGK09uWy3Udmek56wIhAKtr5RZ85YfNX3eVeyPjWCshWptpl22Xsjz8faeMamQBKv8DCGUQABoMNjM3NDIzMTgzODA1Igzkc6nkqyNdY%2FYPvjsq3APNlDS3hGJJC9bgZxdbP58H055Jve%2FFmNjAaxkDvXC65ar7qtCzEcUid06%2F9ZkVX%2B3idDt9s%2F8QYN1KVqeYLEWsfKZHezy1%2FNKLBkMWiuUgVITK3GBqYvhHerP6moBu88ZU1579XQQ%2BdWmFUvsYKRR6pquKRB%2B34ydFWNOVtTjpU9TmLgVdcVyOz54ibjTpdZm3APZhajMvZOx%2Bn6tB0bRbXzOc7zo%2B7CwCn1fTbhDqlJT%2F1sIrkCGZ9sljZO4zXyT%2FTlIVEsFcBaQ0SyC7OIgqukOqfag8CufDEHXTLKrKyqunGEdRVGTAIPKmkId%2F3%2F3YBKaCup%2FF5WoWVznShHQ7xo22BeOBzLkAoZ%2BSG4t8rRV5eI6KKIhVITgLVGSGuTKPsrR3T2uuXi1EuaQaP%2Bs%2F7t3gtc5uCGYiMe4MxSuOzN6XVHPZAHEGrx5prRdIJ4%2BMWol4%2FUOoZAOUtcDSDj2Mfz%2F2ALH%2B8BsrRbgApnPYAf5csDacHq59EWa999YplnH02rvs7OlSf3rj42hi55m9rhqBefZNJh%2F5CcsbFqrT8gDut3L5i65fwisiFzaypFnk65RTIy0gNytAOB9T9LbiidjA8jlJNxNqqndSaHYku2OF4TbRoYRUJ8U4KTCZiMm9BjqkAWSzE%2BywTznZGSxQfoewecQpBpgsDU1tikGEZOYEKN258I0z2aIY4LTv7%2FDylviQlydI%2BujLNAfrdB1RvA0o4MtrSvMfTkwiZpOOUJGeMvaK7eSS8zPbxz5rCr7PcMizVTSmmCktdVxIoZWbLjhMW0ZVHHnN99gv9LC41v3xn3f8OkIJ3ZshPIwwSXgBbw%2BFx%2BZCwOUYFcPX2Pv94oM3OBUJQpX2&X-Amz-Signature=82651539dcf747d173ba031287cdda71d974f8a38fe8823576bd463bc8d085c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNRCG4S7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDTeK1YCVLBA%2BqA8IRN7%2B%2FXMn85%2BmGK09uWy3Udmek56wIhAKtr5RZ85YfNX3eVeyPjWCshWptpl22Xsjz8faeMamQBKv8DCGUQABoMNjM3NDIzMTgzODA1Igzkc6nkqyNdY%2FYPvjsq3APNlDS3hGJJC9bgZxdbP58H055Jve%2FFmNjAaxkDvXC65ar7qtCzEcUid06%2F9ZkVX%2B3idDt9s%2F8QYN1KVqeYLEWsfKZHezy1%2FNKLBkMWiuUgVITK3GBqYvhHerP6moBu88ZU1579XQQ%2BdWmFUvsYKRR6pquKRB%2B34ydFWNOVtTjpU9TmLgVdcVyOz54ibjTpdZm3APZhajMvZOx%2Bn6tB0bRbXzOc7zo%2B7CwCn1fTbhDqlJT%2F1sIrkCGZ9sljZO4zXyT%2FTlIVEsFcBaQ0SyC7OIgqukOqfag8CufDEHXTLKrKyqunGEdRVGTAIPKmkId%2F3%2F3YBKaCup%2FF5WoWVznShHQ7xo22BeOBzLkAoZ%2BSG4t8rRV5eI6KKIhVITgLVGSGuTKPsrR3T2uuXi1EuaQaP%2Bs%2F7t3gtc5uCGYiMe4MxSuOzN6XVHPZAHEGrx5prRdIJ4%2BMWol4%2FUOoZAOUtcDSDj2Mfz%2F2ALH%2B8BsrRbgApnPYAf5csDacHq59EWa999YplnH02rvs7OlSf3rj42hi55m9rhqBefZNJh%2F5CcsbFqrT8gDut3L5i65fwisiFzaypFnk65RTIy0gNytAOB9T9LbiidjA8jlJNxNqqndSaHYku2OF4TbRoYRUJ8U4KTCZiMm9BjqkAWSzE%2BywTznZGSxQfoewecQpBpgsDU1tikGEZOYEKN258I0z2aIY4LTv7%2FDylviQlydI%2BujLNAfrdB1RvA0o4MtrSvMfTkwiZpOOUJGeMvaK7eSS8zPbxz5rCr7PcMizVTSmmCktdVxIoZWbLjhMW0ZVHHnN99gv9LC41v3xn3f8OkIJ3ZshPIwwSXgBbw%2BFx%2BZCwOUYFcPX2Pv94oM3OBUJQpX2&X-Amz-Signature=b51ae365b3e92477270c00a9d4e697b29bca4a4d199748372c5c5b0afab8b211&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNRCG4S7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDTeK1YCVLBA%2BqA8IRN7%2B%2FXMn85%2BmGK09uWy3Udmek56wIhAKtr5RZ85YfNX3eVeyPjWCshWptpl22Xsjz8faeMamQBKv8DCGUQABoMNjM3NDIzMTgzODA1Igzkc6nkqyNdY%2FYPvjsq3APNlDS3hGJJC9bgZxdbP58H055Jve%2FFmNjAaxkDvXC65ar7qtCzEcUid06%2F9ZkVX%2B3idDt9s%2F8QYN1KVqeYLEWsfKZHezy1%2FNKLBkMWiuUgVITK3GBqYvhHerP6moBu88ZU1579XQQ%2BdWmFUvsYKRR6pquKRB%2B34ydFWNOVtTjpU9TmLgVdcVyOz54ibjTpdZm3APZhajMvZOx%2Bn6tB0bRbXzOc7zo%2B7CwCn1fTbhDqlJT%2F1sIrkCGZ9sljZO4zXyT%2FTlIVEsFcBaQ0SyC7OIgqukOqfag8CufDEHXTLKrKyqunGEdRVGTAIPKmkId%2F3%2F3YBKaCup%2FF5WoWVznShHQ7xo22BeOBzLkAoZ%2BSG4t8rRV5eI6KKIhVITgLVGSGuTKPsrR3T2uuXi1EuaQaP%2Bs%2F7t3gtc5uCGYiMe4MxSuOzN6XVHPZAHEGrx5prRdIJ4%2BMWol4%2FUOoZAOUtcDSDj2Mfz%2F2ALH%2B8BsrRbgApnPYAf5csDacHq59EWa999YplnH02rvs7OlSf3rj42hi55m9rhqBefZNJh%2F5CcsbFqrT8gDut3L5i65fwisiFzaypFnk65RTIy0gNytAOB9T9LbiidjA8jlJNxNqqndSaHYku2OF4TbRoYRUJ8U4KTCZiMm9BjqkAWSzE%2BywTznZGSxQfoewecQpBpgsDU1tikGEZOYEKN258I0z2aIY4LTv7%2FDylviQlydI%2BujLNAfrdB1RvA0o4MtrSvMfTkwiZpOOUJGeMvaK7eSS8zPbxz5rCr7PcMizVTSmmCktdVxIoZWbLjhMW0ZVHHnN99gv9LC41v3xn3f8OkIJ3ZshPIwwSXgBbw%2BFx%2BZCwOUYFcPX2Pv94oM3OBUJQpX2&X-Amz-Signature=09ca8dc41126d49c7a776438d48920db0e1f99f25a68a866c8eafd6291061361&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNRCG4S7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDTeK1YCVLBA%2BqA8IRN7%2B%2FXMn85%2BmGK09uWy3Udmek56wIhAKtr5RZ85YfNX3eVeyPjWCshWptpl22Xsjz8faeMamQBKv8DCGUQABoMNjM3NDIzMTgzODA1Igzkc6nkqyNdY%2FYPvjsq3APNlDS3hGJJC9bgZxdbP58H055Jve%2FFmNjAaxkDvXC65ar7qtCzEcUid06%2F9ZkVX%2B3idDt9s%2F8QYN1KVqeYLEWsfKZHezy1%2FNKLBkMWiuUgVITK3GBqYvhHerP6moBu88ZU1579XQQ%2BdWmFUvsYKRR6pquKRB%2B34ydFWNOVtTjpU9TmLgVdcVyOz54ibjTpdZm3APZhajMvZOx%2Bn6tB0bRbXzOc7zo%2B7CwCn1fTbhDqlJT%2F1sIrkCGZ9sljZO4zXyT%2FTlIVEsFcBaQ0SyC7OIgqukOqfag8CufDEHXTLKrKyqunGEdRVGTAIPKmkId%2F3%2F3YBKaCup%2FF5WoWVznShHQ7xo22BeOBzLkAoZ%2BSG4t8rRV5eI6KKIhVITgLVGSGuTKPsrR3T2uuXi1EuaQaP%2Bs%2F7t3gtc5uCGYiMe4MxSuOzN6XVHPZAHEGrx5prRdIJ4%2BMWol4%2FUOoZAOUtcDSDj2Mfz%2F2ALH%2B8BsrRbgApnPYAf5csDacHq59EWa999YplnH02rvs7OlSf3rj42hi55m9rhqBefZNJh%2F5CcsbFqrT8gDut3L5i65fwisiFzaypFnk65RTIy0gNytAOB9T9LbiidjA8jlJNxNqqndSaHYku2OF4TbRoYRUJ8U4KTCZiMm9BjqkAWSzE%2BywTznZGSxQfoewecQpBpgsDU1tikGEZOYEKN258I0z2aIY4LTv7%2FDylviQlydI%2BujLNAfrdB1RvA0o4MtrSvMfTkwiZpOOUJGeMvaK7eSS8zPbxz5rCr7PcMizVTSmmCktdVxIoZWbLjhMW0ZVHHnN99gv9LC41v3xn3f8OkIJ3ZshPIwwSXgBbw%2BFx%2BZCwOUYFcPX2Pv94oM3OBUJQpX2&X-Amz-Signature=229eb8be8ea257d92eae491a597328a23e1f0d843f13eaa56597ade38b047fd2&X-Amz-SignedHeaders=host&x-id=GetObject)
