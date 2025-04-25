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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZGFEWMK%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiS7JOQ562ELqaMSY6hEVluGD9bmihm1XH%2FErnYH3NAAiEAg5xOFoNRAc79jdA47e7jLN4Y5x%2F3uvM9qioFNGBQ1N4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNQIxiiTHMdvyncZHircAz9LFhoc5WhRNfE2ca8aQw%2BpDuHGvE60fW5Ku1YMY9WeNacdktmeSn3kU6s1NMXqYjr68MJpcSaKH9Xg7U6%2BsjLSY%2Bh7vgaYgCgr40DHUyzIPZsVXdt6yhzRZlLEzF4OR7P0cOrAmHCsEwz53qF6xwfSlnO13X%2FeqoVC7so56rSxoh8PUR%2BROX7JsMzRKrP0ib5MQkNcF%2BQ2a8oiodB%2BwzJjpgnpCAWBgjq7jT9tri7CneAJeI7wDCp6NdGdh7KqV%2F1kgUxVhIXZVKzMq%2Fj5N%2F6Wuvrj5l7xQgxSlrfkKk4kILWxQA3ro4RqdkNe7%2FC3fUD%2BaQr7FS7TBO4NJpTaIKRm4m2R%2Fy10UDc2Lxm%2BjvE2HlQHlfuVbJBA13cPYCCIfXGmzrmsmqF90PqE76eRYu21%2FrY7Md8ZzkIFXmVw2eIR9xFKPGzv%2Fjvgem7TqSmXNkPboF15cBozXiKDMZLpmv0u0%2Bo6fMAFr3R4NtWXUEl2k6zq6VaMzm0f0zbGW8OeLDy05SVlH%2BT4cKnEiNeGgEdBgFByxMas8c2jJSGyU9Jiqbsfd6V8RJgberl1zZnkaZuwhHrIi2mRnh6EE8lqtrXcxfxM0z5btAkj3JAVOjdneZFXrdosm%2B9nrqDgMIforsAGOqUBvdMNlmVcmlkTOa8PqTYmDDYRRJbHlmuHGTq7OQEZOfzc%2FZec8d2h%2FYmtOP9hD6IAAthWzxjXrDkV7UZM9Ij93kOe0dGRKNiI1lqF3KiOYJw8KhDDh%2BkXMPyLGke8Gk%2FcqCw9eRJT03v7fqTadeHQ1NPp0m5FxwvPOiE1Ub%2BNuzg8YQPV8PCGnSbV%2Fz0lH3k2vmp7DbjiSiC9TKV%2Fx%2B5rqi9D36oN&X-Amz-Signature=7b49256d18db2b4808aa764406e629ca313b11337c3c4969e9bbc3b4d3b5e4d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZGFEWMK%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiS7JOQ562ELqaMSY6hEVluGD9bmihm1XH%2FErnYH3NAAiEAg5xOFoNRAc79jdA47e7jLN4Y5x%2F3uvM9qioFNGBQ1N4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNQIxiiTHMdvyncZHircAz9LFhoc5WhRNfE2ca8aQw%2BpDuHGvE60fW5Ku1YMY9WeNacdktmeSn3kU6s1NMXqYjr68MJpcSaKH9Xg7U6%2BsjLSY%2Bh7vgaYgCgr40DHUyzIPZsVXdt6yhzRZlLEzF4OR7P0cOrAmHCsEwz53qF6xwfSlnO13X%2FeqoVC7so56rSxoh8PUR%2BROX7JsMzRKrP0ib5MQkNcF%2BQ2a8oiodB%2BwzJjpgnpCAWBgjq7jT9tri7CneAJeI7wDCp6NdGdh7KqV%2F1kgUxVhIXZVKzMq%2Fj5N%2F6Wuvrj5l7xQgxSlrfkKk4kILWxQA3ro4RqdkNe7%2FC3fUD%2BaQr7FS7TBO4NJpTaIKRm4m2R%2Fy10UDc2Lxm%2BjvE2HlQHlfuVbJBA13cPYCCIfXGmzrmsmqF90PqE76eRYu21%2FrY7Md8ZzkIFXmVw2eIR9xFKPGzv%2Fjvgem7TqSmXNkPboF15cBozXiKDMZLpmv0u0%2Bo6fMAFr3R4NtWXUEl2k6zq6VaMzm0f0zbGW8OeLDy05SVlH%2BT4cKnEiNeGgEdBgFByxMas8c2jJSGyU9Jiqbsfd6V8RJgberl1zZnkaZuwhHrIi2mRnh6EE8lqtrXcxfxM0z5btAkj3JAVOjdneZFXrdosm%2B9nrqDgMIforsAGOqUBvdMNlmVcmlkTOa8PqTYmDDYRRJbHlmuHGTq7OQEZOfzc%2FZec8d2h%2FYmtOP9hD6IAAthWzxjXrDkV7UZM9Ij93kOe0dGRKNiI1lqF3KiOYJw8KhDDh%2BkXMPyLGke8Gk%2FcqCw9eRJT03v7fqTadeHQ1NPp0m5FxwvPOiE1Ub%2BNuzg8YQPV8PCGnSbV%2Fz0lH3k2vmp7DbjiSiC9TKV%2Fx%2B5rqi9D36oN&X-Amz-Signature=0235529500189ac341bc2ea4d9eda6bf1a91040186d2f02927b33ab815e59ed9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZGFEWMK%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiS7JOQ562ELqaMSY6hEVluGD9bmihm1XH%2FErnYH3NAAiEAg5xOFoNRAc79jdA47e7jLN4Y5x%2F3uvM9qioFNGBQ1N4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNQIxiiTHMdvyncZHircAz9LFhoc5WhRNfE2ca8aQw%2BpDuHGvE60fW5Ku1YMY9WeNacdktmeSn3kU6s1NMXqYjr68MJpcSaKH9Xg7U6%2BsjLSY%2Bh7vgaYgCgr40DHUyzIPZsVXdt6yhzRZlLEzF4OR7P0cOrAmHCsEwz53qF6xwfSlnO13X%2FeqoVC7so56rSxoh8PUR%2BROX7JsMzRKrP0ib5MQkNcF%2BQ2a8oiodB%2BwzJjpgnpCAWBgjq7jT9tri7CneAJeI7wDCp6NdGdh7KqV%2F1kgUxVhIXZVKzMq%2Fj5N%2F6Wuvrj5l7xQgxSlrfkKk4kILWxQA3ro4RqdkNe7%2FC3fUD%2BaQr7FS7TBO4NJpTaIKRm4m2R%2Fy10UDc2Lxm%2BjvE2HlQHlfuVbJBA13cPYCCIfXGmzrmsmqF90PqE76eRYu21%2FrY7Md8ZzkIFXmVw2eIR9xFKPGzv%2Fjvgem7TqSmXNkPboF15cBozXiKDMZLpmv0u0%2Bo6fMAFr3R4NtWXUEl2k6zq6VaMzm0f0zbGW8OeLDy05SVlH%2BT4cKnEiNeGgEdBgFByxMas8c2jJSGyU9Jiqbsfd6V8RJgberl1zZnkaZuwhHrIi2mRnh6EE8lqtrXcxfxM0z5btAkj3JAVOjdneZFXrdosm%2B9nrqDgMIforsAGOqUBvdMNlmVcmlkTOa8PqTYmDDYRRJbHlmuHGTq7OQEZOfzc%2FZec8d2h%2FYmtOP9hD6IAAthWzxjXrDkV7UZM9Ij93kOe0dGRKNiI1lqF3KiOYJw8KhDDh%2BkXMPyLGke8Gk%2FcqCw9eRJT03v7fqTadeHQ1NPp0m5FxwvPOiE1Ub%2BNuzg8YQPV8PCGnSbV%2Fz0lH3k2vmp7DbjiSiC9TKV%2Fx%2B5rqi9D36oN&X-Amz-Signature=64e0bc646e5baa7a107a8c5c609891b7a1d3cf473d4a7987290b342fb6b979f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZGFEWMK%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiS7JOQ562ELqaMSY6hEVluGD9bmihm1XH%2FErnYH3NAAiEAg5xOFoNRAc79jdA47e7jLN4Y5x%2F3uvM9qioFNGBQ1N4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNQIxiiTHMdvyncZHircAz9LFhoc5WhRNfE2ca8aQw%2BpDuHGvE60fW5Ku1YMY9WeNacdktmeSn3kU6s1NMXqYjr68MJpcSaKH9Xg7U6%2BsjLSY%2Bh7vgaYgCgr40DHUyzIPZsVXdt6yhzRZlLEzF4OR7P0cOrAmHCsEwz53qF6xwfSlnO13X%2FeqoVC7so56rSxoh8PUR%2BROX7JsMzRKrP0ib5MQkNcF%2BQ2a8oiodB%2BwzJjpgnpCAWBgjq7jT9tri7CneAJeI7wDCp6NdGdh7KqV%2F1kgUxVhIXZVKzMq%2Fj5N%2F6Wuvrj5l7xQgxSlrfkKk4kILWxQA3ro4RqdkNe7%2FC3fUD%2BaQr7FS7TBO4NJpTaIKRm4m2R%2Fy10UDc2Lxm%2BjvE2HlQHlfuVbJBA13cPYCCIfXGmzrmsmqF90PqE76eRYu21%2FrY7Md8ZzkIFXmVw2eIR9xFKPGzv%2Fjvgem7TqSmXNkPboF15cBozXiKDMZLpmv0u0%2Bo6fMAFr3R4NtWXUEl2k6zq6VaMzm0f0zbGW8OeLDy05SVlH%2BT4cKnEiNeGgEdBgFByxMas8c2jJSGyU9Jiqbsfd6V8RJgberl1zZnkaZuwhHrIi2mRnh6EE8lqtrXcxfxM0z5btAkj3JAVOjdneZFXrdosm%2B9nrqDgMIforsAGOqUBvdMNlmVcmlkTOa8PqTYmDDYRRJbHlmuHGTq7OQEZOfzc%2FZec8d2h%2FYmtOP9hD6IAAthWzxjXrDkV7UZM9Ij93kOe0dGRKNiI1lqF3KiOYJw8KhDDh%2BkXMPyLGke8Gk%2FcqCw9eRJT03v7fqTadeHQ1NPp0m5FxwvPOiE1Ub%2BNuzg8YQPV8PCGnSbV%2Fz0lH3k2vmp7DbjiSiC9TKV%2Fx%2B5rqi9D36oN&X-Amz-Signature=97bde15c3187b0ac3bf2feb1427cad6c0e25b8cfdca89be92eeb06538c8157ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZGFEWMK%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiS7JOQ562ELqaMSY6hEVluGD9bmihm1XH%2FErnYH3NAAiEAg5xOFoNRAc79jdA47e7jLN4Y5x%2F3uvM9qioFNGBQ1N4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNQIxiiTHMdvyncZHircAz9LFhoc5WhRNfE2ca8aQw%2BpDuHGvE60fW5Ku1YMY9WeNacdktmeSn3kU6s1NMXqYjr68MJpcSaKH9Xg7U6%2BsjLSY%2Bh7vgaYgCgr40DHUyzIPZsVXdt6yhzRZlLEzF4OR7P0cOrAmHCsEwz53qF6xwfSlnO13X%2FeqoVC7so56rSxoh8PUR%2BROX7JsMzRKrP0ib5MQkNcF%2BQ2a8oiodB%2BwzJjpgnpCAWBgjq7jT9tri7CneAJeI7wDCp6NdGdh7KqV%2F1kgUxVhIXZVKzMq%2Fj5N%2F6Wuvrj5l7xQgxSlrfkKk4kILWxQA3ro4RqdkNe7%2FC3fUD%2BaQr7FS7TBO4NJpTaIKRm4m2R%2Fy10UDc2Lxm%2BjvE2HlQHlfuVbJBA13cPYCCIfXGmzrmsmqF90PqE76eRYu21%2FrY7Md8ZzkIFXmVw2eIR9xFKPGzv%2Fjvgem7TqSmXNkPboF15cBozXiKDMZLpmv0u0%2Bo6fMAFr3R4NtWXUEl2k6zq6VaMzm0f0zbGW8OeLDy05SVlH%2BT4cKnEiNeGgEdBgFByxMas8c2jJSGyU9Jiqbsfd6V8RJgberl1zZnkaZuwhHrIi2mRnh6EE8lqtrXcxfxM0z5btAkj3JAVOjdneZFXrdosm%2B9nrqDgMIforsAGOqUBvdMNlmVcmlkTOa8PqTYmDDYRRJbHlmuHGTq7OQEZOfzc%2FZec8d2h%2FYmtOP9hD6IAAthWzxjXrDkV7UZM9Ij93kOe0dGRKNiI1lqF3KiOYJw8KhDDh%2BkXMPyLGke8Gk%2FcqCw9eRJT03v7fqTadeHQ1NPp0m5FxwvPOiE1Ub%2BNuzg8YQPV8PCGnSbV%2Fz0lH3k2vmp7DbjiSiC9TKV%2Fx%2B5rqi9D36oN&X-Amz-Signature=b64629161af2735f0d0ea73c4b1ba84ffd9c9b4acd69ced81a9ee0241737b6c1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZGFEWMK%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiS7JOQ562ELqaMSY6hEVluGD9bmihm1XH%2FErnYH3NAAiEAg5xOFoNRAc79jdA47e7jLN4Y5x%2F3uvM9qioFNGBQ1N4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNQIxiiTHMdvyncZHircAz9LFhoc5WhRNfE2ca8aQw%2BpDuHGvE60fW5Ku1YMY9WeNacdktmeSn3kU6s1NMXqYjr68MJpcSaKH9Xg7U6%2BsjLSY%2Bh7vgaYgCgr40DHUyzIPZsVXdt6yhzRZlLEzF4OR7P0cOrAmHCsEwz53qF6xwfSlnO13X%2FeqoVC7so56rSxoh8PUR%2BROX7JsMzRKrP0ib5MQkNcF%2BQ2a8oiodB%2BwzJjpgnpCAWBgjq7jT9tri7CneAJeI7wDCp6NdGdh7KqV%2F1kgUxVhIXZVKzMq%2Fj5N%2F6Wuvrj5l7xQgxSlrfkKk4kILWxQA3ro4RqdkNe7%2FC3fUD%2BaQr7FS7TBO4NJpTaIKRm4m2R%2Fy10UDc2Lxm%2BjvE2HlQHlfuVbJBA13cPYCCIfXGmzrmsmqF90PqE76eRYu21%2FrY7Md8ZzkIFXmVw2eIR9xFKPGzv%2Fjvgem7TqSmXNkPboF15cBozXiKDMZLpmv0u0%2Bo6fMAFr3R4NtWXUEl2k6zq6VaMzm0f0zbGW8OeLDy05SVlH%2BT4cKnEiNeGgEdBgFByxMas8c2jJSGyU9Jiqbsfd6V8RJgberl1zZnkaZuwhHrIi2mRnh6EE8lqtrXcxfxM0z5btAkj3JAVOjdneZFXrdosm%2B9nrqDgMIforsAGOqUBvdMNlmVcmlkTOa8PqTYmDDYRRJbHlmuHGTq7OQEZOfzc%2FZec8d2h%2FYmtOP9hD6IAAthWzxjXrDkV7UZM9Ij93kOe0dGRKNiI1lqF3KiOYJw8KhDDh%2BkXMPyLGke8Gk%2FcqCw9eRJT03v7fqTadeHQ1NPp0m5FxwvPOiE1Ub%2BNuzg8YQPV8PCGnSbV%2Fz0lH3k2vmp7DbjiSiC9TKV%2Fx%2B5rqi9D36oN&X-Amz-Signature=8314341bb70d6aeac53c9299b7579ef59960fa93030887504c8900f40f1bd7a9&X-Amz-SignedHeaders=host&x-id=GetObject)
