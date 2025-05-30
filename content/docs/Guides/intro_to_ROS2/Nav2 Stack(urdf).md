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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLNCCYZP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1xzABnuVy98ffWu0vuXddxhHYTPoFugcQNXdeFVRPSAiAWl4IpC%2B%2F%2FVOUnwRMr63u%2B52Yu%2F7o454iDjJDykG2ihSqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK1%2Fftoo8guHNxTenKtwDP5GSnPU1mL95lvXILKdkYfatFHzEL4ZstVK2Yviw3ZFuJYeA9PV8y7BorImzD3vpY1w64Pr0qSWKwPzum%2B5szfyVP865%2B5JOnk7J02ik9Uwi0zehtgri6GgANOeolXw0DjGvJGYz6twZqufy4JA%2Bbsc55vX7ZaE3gOdoEx%2B0uZzE7h37Ehl6VbA4sSsf6soegEOZScH%2BQRqQz3%2Fr5GFhBBSkwEWFpOooYi6bYltiUuiJJsz%2F%2Bg7MQYueA6GItXpg8TP5tN4P1kH%2FoBbBrirLNTUscAUsjatD8yHVr0mOt%2BAkYQN6SUdXTEHzaeQ6NPXrLgOLbbQ6etwkotO%2BhteZ3OWC8HfTICpyYo3QC5ni9Y8Xp66A4%2BL79BLU%2B9R4Vl6Ts4NR6HOdpG1qChQnZfNxNM0J%2FGhXx0LZgSlqCrn%2FrM0hAJdEnTjZLac%2Fd3Uko1RrT8%2BMSz7QOMUHHMEcXQARZeJiJSaHqEWpDGGfVJ1blfksPsa56%2Fde157uiWV7XLts1P94Yv1N%2FZ%2FZ0RYLriVmaPbUpx9Ma20gq8DCYRUKbJdW7j359%2B19NHtMz9jigMSBvxnP%2FFHG%2F%2BduQPwiKMSgbg1flebLlkGOjcRdsXAJ4j8Y1hscLjJDk3Lvc9Aw3svlwQY6pgFT2YBympY18QHRr6IO9oboExIQ6CAgSZQwfUmONQbzmwO5JBKRywtDWQnVz5nXTUO1K3VFtZTi%2F3hx7lfeQvwutkur6TOLNMaEbqIuC4cp%2B7CFkXyAjMwWFSShH46Mit2Lf%2Fu9MO9dAq3PrvCvhSCDl4bJiqzSJ%2BD1FAZxBP9cMlxxsq8cseUbkYnMeGnOPCGX8x0Q95EKxRTlcc6%2BA9Bu6lCnhQkM&X-Amz-Signature=d4d8e089b411c0014d7aea6e8d0da81fd988efd10f65d3187f18415831d4e95f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLNCCYZP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1xzABnuVy98ffWu0vuXddxhHYTPoFugcQNXdeFVRPSAiAWl4IpC%2B%2F%2FVOUnwRMr63u%2B52Yu%2F7o454iDjJDykG2ihSqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK1%2Fftoo8guHNxTenKtwDP5GSnPU1mL95lvXILKdkYfatFHzEL4ZstVK2Yviw3ZFuJYeA9PV8y7BorImzD3vpY1w64Pr0qSWKwPzum%2B5szfyVP865%2B5JOnk7J02ik9Uwi0zehtgri6GgANOeolXw0DjGvJGYz6twZqufy4JA%2Bbsc55vX7ZaE3gOdoEx%2B0uZzE7h37Ehl6VbA4sSsf6soegEOZScH%2BQRqQz3%2Fr5GFhBBSkwEWFpOooYi6bYltiUuiJJsz%2F%2Bg7MQYueA6GItXpg8TP5tN4P1kH%2FoBbBrirLNTUscAUsjatD8yHVr0mOt%2BAkYQN6SUdXTEHzaeQ6NPXrLgOLbbQ6etwkotO%2BhteZ3OWC8HfTICpyYo3QC5ni9Y8Xp66A4%2BL79BLU%2B9R4Vl6Ts4NR6HOdpG1qChQnZfNxNM0J%2FGhXx0LZgSlqCrn%2FrM0hAJdEnTjZLac%2Fd3Uko1RrT8%2BMSz7QOMUHHMEcXQARZeJiJSaHqEWpDGGfVJ1blfksPsa56%2Fde157uiWV7XLts1P94Yv1N%2FZ%2FZ0RYLriVmaPbUpx9Ma20gq8DCYRUKbJdW7j359%2B19NHtMz9jigMSBvxnP%2FFHG%2F%2BduQPwiKMSgbg1flebLlkGOjcRdsXAJ4j8Y1hscLjJDk3Lvc9Aw3svlwQY6pgFT2YBympY18QHRr6IO9oboExIQ6CAgSZQwfUmONQbzmwO5JBKRywtDWQnVz5nXTUO1K3VFtZTi%2F3hx7lfeQvwutkur6TOLNMaEbqIuC4cp%2B7CFkXyAjMwWFSShH46Mit2Lf%2Fu9MO9dAq3PrvCvhSCDl4bJiqzSJ%2BD1FAZxBP9cMlxxsq8cseUbkYnMeGnOPCGX8x0Q95EKxRTlcc6%2BA9Bu6lCnhQkM&X-Amz-Signature=989ae887148e22e130ac09750f87e07ca19ae60c43e62f60dce70ae2fecb7408&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLNCCYZP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1xzABnuVy98ffWu0vuXddxhHYTPoFugcQNXdeFVRPSAiAWl4IpC%2B%2F%2FVOUnwRMr63u%2B52Yu%2F7o454iDjJDykG2ihSqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK1%2Fftoo8guHNxTenKtwDP5GSnPU1mL95lvXILKdkYfatFHzEL4ZstVK2Yviw3ZFuJYeA9PV8y7BorImzD3vpY1w64Pr0qSWKwPzum%2B5szfyVP865%2B5JOnk7J02ik9Uwi0zehtgri6GgANOeolXw0DjGvJGYz6twZqufy4JA%2Bbsc55vX7ZaE3gOdoEx%2B0uZzE7h37Ehl6VbA4sSsf6soegEOZScH%2BQRqQz3%2Fr5GFhBBSkwEWFpOooYi6bYltiUuiJJsz%2F%2Bg7MQYueA6GItXpg8TP5tN4P1kH%2FoBbBrirLNTUscAUsjatD8yHVr0mOt%2BAkYQN6SUdXTEHzaeQ6NPXrLgOLbbQ6etwkotO%2BhteZ3OWC8HfTICpyYo3QC5ni9Y8Xp66A4%2BL79BLU%2B9R4Vl6Ts4NR6HOdpG1qChQnZfNxNM0J%2FGhXx0LZgSlqCrn%2FrM0hAJdEnTjZLac%2Fd3Uko1RrT8%2BMSz7QOMUHHMEcXQARZeJiJSaHqEWpDGGfVJ1blfksPsa56%2Fde157uiWV7XLts1P94Yv1N%2FZ%2FZ0RYLriVmaPbUpx9Ma20gq8DCYRUKbJdW7j359%2B19NHtMz9jigMSBvxnP%2FFHG%2F%2BduQPwiKMSgbg1flebLlkGOjcRdsXAJ4j8Y1hscLjJDk3Lvc9Aw3svlwQY6pgFT2YBympY18QHRr6IO9oboExIQ6CAgSZQwfUmONQbzmwO5JBKRywtDWQnVz5nXTUO1K3VFtZTi%2F3hx7lfeQvwutkur6TOLNMaEbqIuC4cp%2B7CFkXyAjMwWFSShH46Mit2Lf%2Fu9MO9dAq3PrvCvhSCDl4bJiqzSJ%2BD1FAZxBP9cMlxxsq8cseUbkYnMeGnOPCGX8x0Q95EKxRTlcc6%2BA9Bu6lCnhQkM&X-Amz-Signature=ebaf04bc5acdb78e82a02a8f725ffb1dc38248201ae4d6aa4f33fcc4e0f58020&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLNCCYZP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1xzABnuVy98ffWu0vuXddxhHYTPoFugcQNXdeFVRPSAiAWl4IpC%2B%2F%2FVOUnwRMr63u%2B52Yu%2F7o454iDjJDykG2ihSqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK1%2Fftoo8guHNxTenKtwDP5GSnPU1mL95lvXILKdkYfatFHzEL4ZstVK2Yviw3ZFuJYeA9PV8y7BorImzD3vpY1w64Pr0qSWKwPzum%2B5szfyVP865%2B5JOnk7J02ik9Uwi0zehtgri6GgANOeolXw0DjGvJGYz6twZqufy4JA%2Bbsc55vX7ZaE3gOdoEx%2B0uZzE7h37Ehl6VbA4sSsf6soegEOZScH%2BQRqQz3%2Fr5GFhBBSkwEWFpOooYi6bYltiUuiJJsz%2F%2Bg7MQYueA6GItXpg8TP5tN4P1kH%2FoBbBrirLNTUscAUsjatD8yHVr0mOt%2BAkYQN6SUdXTEHzaeQ6NPXrLgOLbbQ6etwkotO%2BhteZ3OWC8HfTICpyYo3QC5ni9Y8Xp66A4%2BL79BLU%2B9R4Vl6Ts4NR6HOdpG1qChQnZfNxNM0J%2FGhXx0LZgSlqCrn%2FrM0hAJdEnTjZLac%2Fd3Uko1RrT8%2BMSz7QOMUHHMEcXQARZeJiJSaHqEWpDGGfVJ1blfksPsa56%2Fde157uiWV7XLts1P94Yv1N%2FZ%2FZ0RYLriVmaPbUpx9Ma20gq8DCYRUKbJdW7j359%2B19NHtMz9jigMSBvxnP%2FFHG%2F%2BduQPwiKMSgbg1flebLlkGOjcRdsXAJ4j8Y1hscLjJDk3Lvc9Aw3svlwQY6pgFT2YBympY18QHRr6IO9oboExIQ6CAgSZQwfUmONQbzmwO5JBKRywtDWQnVz5nXTUO1K3VFtZTi%2F3hx7lfeQvwutkur6TOLNMaEbqIuC4cp%2B7CFkXyAjMwWFSShH46Mit2Lf%2Fu9MO9dAq3PrvCvhSCDl4bJiqzSJ%2BD1FAZxBP9cMlxxsq8cseUbkYnMeGnOPCGX8x0Q95EKxRTlcc6%2BA9Bu6lCnhQkM&X-Amz-Signature=bb205ed0581c6f48d58b1c7e54cc773b8556664f325b0ddb76f3ce50888836be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLNCCYZP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1xzABnuVy98ffWu0vuXddxhHYTPoFugcQNXdeFVRPSAiAWl4IpC%2B%2F%2FVOUnwRMr63u%2B52Yu%2F7o454iDjJDykG2ihSqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK1%2Fftoo8guHNxTenKtwDP5GSnPU1mL95lvXILKdkYfatFHzEL4ZstVK2Yviw3ZFuJYeA9PV8y7BorImzD3vpY1w64Pr0qSWKwPzum%2B5szfyVP865%2B5JOnk7J02ik9Uwi0zehtgri6GgANOeolXw0DjGvJGYz6twZqufy4JA%2Bbsc55vX7ZaE3gOdoEx%2B0uZzE7h37Ehl6VbA4sSsf6soegEOZScH%2BQRqQz3%2Fr5GFhBBSkwEWFpOooYi6bYltiUuiJJsz%2F%2Bg7MQYueA6GItXpg8TP5tN4P1kH%2FoBbBrirLNTUscAUsjatD8yHVr0mOt%2BAkYQN6SUdXTEHzaeQ6NPXrLgOLbbQ6etwkotO%2BhteZ3OWC8HfTICpyYo3QC5ni9Y8Xp66A4%2BL79BLU%2B9R4Vl6Ts4NR6HOdpG1qChQnZfNxNM0J%2FGhXx0LZgSlqCrn%2FrM0hAJdEnTjZLac%2Fd3Uko1RrT8%2BMSz7QOMUHHMEcXQARZeJiJSaHqEWpDGGfVJ1blfksPsa56%2Fde157uiWV7XLts1P94Yv1N%2FZ%2FZ0RYLriVmaPbUpx9Ma20gq8DCYRUKbJdW7j359%2B19NHtMz9jigMSBvxnP%2FFHG%2F%2BduQPwiKMSgbg1flebLlkGOjcRdsXAJ4j8Y1hscLjJDk3Lvc9Aw3svlwQY6pgFT2YBympY18QHRr6IO9oboExIQ6CAgSZQwfUmONQbzmwO5JBKRywtDWQnVz5nXTUO1K3VFtZTi%2F3hx7lfeQvwutkur6TOLNMaEbqIuC4cp%2B7CFkXyAjMwWFSShH46Mit2Lf%2Fu9MO9dAq3PrvCvhSCDl4bJiqzSJ%2BD1FAZxBP9cMlxxsq8cseUbkYnMeGnOPCGX8x0Q95EKxRTlcc6%2BA9Bu6lCnhQkM&X-Amz-Signature=68fcd9d476caa82dd146fffb40842292ceed6e3a77d2d869358bc85449dabb6f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLNCCYZP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1xzABnuVy98ffWu0vuXddxhHYTPoFugcQNXdeFVRPSAiAWl4IpC%2B%2F%2FVOUnwRMr63u%2B52Yu%2F7o454iDjJDykG2ihSqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK1%2Fftoo8guHNxTenKtwDP5GSnPU1mL95lvXILKdkYfatFHzEL4ZstVK2Yviw3ZFuJYeA9PV8y7BorImzD3vpY1w64Pr0qSWKwPzum%2B5szfyVP865%2B5JOnk7J02ik9Uwi0zehtgri6GgANOeolXw0DjGvJGYz6twZqufy4JA%2Bbsc55vX7ZaE3gOdoEx%2B0uZzE7h37Ehl6VbA4sSsf6soegEOZScH%2BQRqQz3%2Fr5GFhBBSkwEWFpOooYi6bYltiUuiJJsz%2F%2Bg7MQYueA6GItXpg8TP5tN4P1kH%2FoBbBrirLNTUscAUsjatD8yHVr0mOt%2BAkYQN6SUdXTEHzaeQ6NPXrLgOLbbQ6etwkotO%2BhteZ3OWC8HfTICpyYo3QC5ni9Y8Xp66A4%2BL79BLU%2B9R4Vl6Ts4NR6HOdpG1qChQnZfNxNM0J%2FGhXx0LZgSlqCrn%2FrM0hAJdEnTjZLac%2Fd3Uko1RrT8%2BMSz7QOMUHHMEcXQARZeJiJSaHqEWpDGGfVJ1blfksPsa56%2Fde157uiWV7XLts1P94Yv1N%2FZ%2FZ0RYLriVmaPbUpx9Ma20gq8DCYRUKbJdW7j359%2B19NHtMz9jigMSBvxnP%2FFHG%2F%2BduQPwiKMSgbg1flebLlkGOjcRdsXAJ4j8Y1hscLjJDk3Lvc9Aw3svlwQY6pgFT2YBympY18QHRr6IO9oboExIQ6CAgSZQwfUmONQbzmwO5JBKRywtDWQnVz5nXTUO1K3VFtZTi%2F3hx7lfeQvwutkur6TOLNMaEbqIuC4cp%2B7CFkXyAjMwWFSShH46Mit2Lf%2Fu9MO9dAq3PrvCvhSCDl4bJiqzSJ%2BD1FAZxBP9cMlxxsq8cseUbkYnMeGnOPCGX8x0Q95EKxRTlcc6%2BA9Bu6lCnhQkM&X-Amz-Signature=b401045202e9e17c848a251ebca38224d59fc532f0487dd9e774ebc49c6c89ab&X-Amz-SignedHeaders=host&x-id=GetObject)
