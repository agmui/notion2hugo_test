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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2YJ7BFH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCfUJMul8nfMhBQOv2GFNO0DNy0DiSrtSmph8Xjrw1owQIgFL3vNJzu37Ki%2BXhPgTgIgk6rHCCoYeqff9%2FgeDqivi8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPun%2BIt9%2B%2FRG90KXircA%2FNL154Db9etTuHm%2FIhls84n8YN6L70lG0gJR7ETSVWc3Tf%2Fr1Zhk9vRnzrTt0XrXROmKOw6PlmByp4hGACet5g9SKbKLoPx99pk%2FAlmdmU96quGEBJhNUHrw1au2gVNwkghLRAgJ6SiZ9IdL0yZICZq5CaYgpopjnOMJ06aeUy9n3N%2B1maHLWAzreLyuLnvpNd14WwaZFV7i6oMncbIqMEc6OsH%2B5vzaWuzMPhTVL36w%2BFXBRC0zWe1SSEdLBqwI9QHlz7JDa9vQrVEVbqbmA1cEQHAKvVfXDJXV89ZK%2B40QY38Zhm99V9ZV2Jp0EdrKC%2B%2Bl8IcL3GcIjli%2BZLqNipS8uT2rfwj8Y2xWaFv7avRzE5QYPm826cwrP3ZIqBwAHHsWqujXw%2FQ%2BrJbc3jNJKttm8sR4ikyR8WtuPBn95LMQdwSo%2FApyoJG%2Bs3JotvrrNCX37MMhxHCnB7Oa5eSDWQXTiy3QbChZQ0QkkKQ3gBK1tPz%2FAH%2BlhlQrw3etL5ynaynShxcf41lzS%2BAb78kFBkH3ZoQS3Tn%2FsQTL3Nl3zDdEmf5wzfB3l8JhROwjCnv%2Fvf%2By9eroRzj%2Bmfk6GHnlpqusj4v8kymZ3Q9qvc4nf0mSR2FQNzi9olDWVUUMPXgnr0GOqUBNy0J7Sa2E5BnD%2B5%2F2ukev16PffzAwph3kHq5ZDMByeBo5TDUQsJZ0Uc3VW2xefVRPrQ45iMvkWm5tsH96YeiYbZZjSU8bxz%2F4i%2BVIVSdjvI6kp57pPqPt8gb0TxSgvwfW2kh7GStC4Bj2sque9AJ1DJGA%2FNkdhXJ6Uj16VfWu2zrmhQtnBBYmtzbnDzHN%2FV1c9zHiTYd03jQ0FticnCodwOUOCb3&X-Amz-Signature=675fa73bdbf5375c0d07d1a5b56984562e2a8253a9596285afb4bffd2cde5b51&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2YJ7BFH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCfUJMul8nfMhBQOv2GFNO0DNy0DiSrtSmph8Xjrw1owQIgFL3vNJzu37Ki%2BXhPgTgIgk6rHCCoYeqff9%2FgeDqivi8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPun%2BIt9%2B%2FRG90KXircA%2FNL154Db9etTuHm%2FIhls84n8YN6L70lG0gJR7ETSVWc3Tf%2Fr1Zhk9vRnzrTt0XrXROmKOw6PlmByp4hGACet5g9SKbKLoPx99pk%2FAlmdmU96quGEBJhNUHrw1au2gVNwkghLRAgJ6SiZ9IdL0yZICZq5CaYgpopjnOMJ06aeUy9n3N%2B1maHLWAzreLyuLnvpNd14WwaZFV7i6oMncbIqMEc6OsH%2B5vzaWuzMPhTVL36w%2BFXBRC0zWe1SSEdLBqwI9QHlz7JDa9vQrVEVbqbmA1cEQHAKvVfXDJXV89ZK%2B40QY38Zhm99V9ZV2Jp0EdrKC%2B%2Bl8IcL3GcIjli%2BZLqNipS8uT2rfwj8Y2xWaFv7avRzE5QYPm826cwrP3ZIqBwAHHsWqujXw%2FQ%2BrJbc3jNJKttm8sR4ikyR8WtuPBn95LMQdwSo%2FApyoJG%2Bs3JotvrrNCX37MMhxHCnB7Oa5eSDWQXTiy3QbChZQ0QkkKQ3gBK1tPz%2FAH%2BlhlQrw3etL5ynaynShxcf41lzS%2BAb78kFBkH3ZoQS3Tn%2FsQTL3Nl3zDdEmf5wzfB3l8JhROwjCnv%2Fvf%2By9eroRzj%2Bmfk6GHnlpqusj4v8kymZ3Q9qvc4nf0mSR2FQNzi9olDWVUUMPXgnr0GOqUBNy0J7Sa2E5BnD%2B5%2F2ukev16PffzAwph3kHq5ZDMByeBo5TDUQsJZ0Uc3VW2xefVRPrQ45iMvkWm5tsH96YeiYbZZjSU8bxz%2F4i%2BVIVSdjvI6kp57pPqPt8gb0TxSgvwfW2kh7GStC4Bj2sque9AJ1DJGA%2FNkdhXJ6Uj16VfWu2zrmhQtnBBYmtzbnDzHN%2FV1c9zHiTYd03jQ0FticnCodwOUOCb3&X-Amz-Signature=77b1581a8a57ecc41af355010514d0eeee93cff3267b4ce3f1c0ae59499ca28f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2YJ7BFH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCfUJMul8nfMhBQOv2GFNO0DNy0DiSrtSmph8Xjrw1owQIgFL3vNJzu37Ki%2BXhPgTgIgk6rHCCoYeqff9%2FgeDqivi8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPun%2BIt9%2B%2FRG90KXircA%2FNL154Db9etTuHm%2FIhls84n8YN6L70lG0gJR7ETSVWc3Tf%2Fr1Zhk9vRnzrTt0XrXROmKOw6PlmByp4hGACet5g9SKbKLoPx99pk%2FAlmdmU96quGEBJhNUHrw1au2gVNwkghLRAgJ6SiZ9IdL0yZICZq5CaYgpopjnOMJ06aeUy9n3N%2B1maHLWAzreLyuLnvpNd14WwaZFV7i6oMncbIqMEc6OsH%2B5vzaWuzMPhTVL36w%2BFXBRC0zWe1SSEdLBqwI9QHlz7JDa9vQrVEVbqbmA1cEQHAKvVfXDJXV89ZK%2B40QY38Zhm99V9ZV2Jp0EdrKC%2B%2Bl8IcL3GcIjli%2BZLqNipS8uT2rfwj8Y2xWaFv7avRzE5QYPm826cwrP3ZIqBwAHHsWqujXw%2FQ%2BrJbc3jNJKttm8sR4ikyR8WtuPBn95LMQdwSo%2FApyoJG%2Bs3JotvrrNCX37MMhxHCnB7Oa5eSDWQXTiy3QbChZQ0QkkKQ3gBK1tPz%2FAH%2BlhlQrw3etL5ynaynShxcf41lzS%2BAb78kFBkH3ZoQS3Tn%2FsQTL3Nl3zDdEmf5wzfB3l8JhROwjCnv%2Fvf%2By9eroRzj%2Bmfk6GHnlpqusj4v8kymZ3Q9qvc4nf0mSR2FQNzi9olDWVUUMPXgnr0GOqUBNy0J7Sa2E5BnD%2B5%2F2ukev16PffzAwph3kHq5ZDMByeBo5TDUQsJZ0Uc3VW2xefVRPrQ45iMvkWm5tsH96YeiYbZZjSU8bxz%2F4i%2BVIVSdjvI6kp57pPqPt8gb0TxSgvwfW2kh7GStC4Bj2sque9AJ1DJGA%2FNkdhXJ6Uj16VfWu2zrmhQtnBBYmtzbnDzHN%2FV1c9zHiTYd03jQ0FticnCodwOUOCb3&X-Amz-Signature=f9495a8b7ea820fd4742f45ee9c9eb5c58e9fd1ad225b77b2e2295622336b527&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2YJ7BFH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCfUJMul8nfMhBQOv2GFNO0DNy0DiSrtSmph8Xjrw1owQIgFL3vNJzu37Ki%2BXhPgTgIgk6rHCCoYeqff9%2FgeDqivi8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPun%2BIt9%2B%2FRG90KXircA%2FNL154Db9etTuHm%2FIhls84n8YN6L70lG0gJR7ETSVWc3Tf%2Fr1Zhk9vRnzrTt0XrXROmKOw6PlmByp4hGACet5g9SKbKLoPx99pk%2FAlmdmU96quGEBJhNUHrw1au2gVNwkghLRAgJ6SiZ9IdL0yZICZq5CaYgpopjnOMJ06aeUy9n3N%2B1maHLWAzreLyuLnvpNd14WwaZFV7i6oMncbIqMEc6OsH%2B5vzaWuzMPhTVL36w%2BFXBRC0zWe1SSEdLBqwI9QHlz7JDa9vQrVEVbqbmA1cEQHAKvVfXDJXV89ZK%2B40QY38Zhm99V9ZV2Jp0EdrKC%2B%2Bl8IcL3GcIjli%2BZLqNipS8uT2rfwj8Y2xWaFv7avRzE5QYPm826cwrP3ZIqBwAHHsWqujXw%2FQ%2BrJbc3jNJKttm8sR4ikyR8WtuPBn95LMQdwSo%2FApyoJG%2Bs3JotvrrNCX37MMhxHCnB7Oa5eSDWQXTiy3QbChZQ0QkkKQ3gBK1tPz%2FAH%2BlhlQrw3etL5ynaynShxcf41lzS%2BAb78kFBkH3ZoQS3Tn%2FsQTL3Nl3zDdEmf5wzfB3l8JhROwjCnv%2Fvf%2By9eroRzj%2Bmfk6GHnlpqusj4v8kymZ3Q9qvc4nf0mSR2FQNzi9olDWVUUMPXgnr0GOqUBNy0J7Sa2E5BnD%2B5%2F2ukev16PffzAwph3kHq5ZDMByeBo5TDUQsJZ0Uc3VW2xefVRPrQ45iMvkWm5tsH96YeiYbZZjSU8bxz%2F4i%2BVIVSdjvI6kp57pPqPt8gb0TxSgvwfW2kh7GStC4Bj2sque9AJ1DJGA%2FNkdhXJ6Uj16VfWu2zrmhQtnBBYmtzbnDzHN%2FV1c9zHiTYd03jQ0FticnCodwOUOCb3&X-Amz-Signature=4b726bd00a345d1c74e264a3b1b548994062557ee49df0155dbeb62a3fb1cc34&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2YJ7BFH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCfUJMul8nfMhBQOv2GFNO0DNy0DiSrtSmph8Xjrw1owQIgFL3vNJzu37Ki%2BXhPgTgIgk6rHCCoYeqff9%2FgeDqivi8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPun%2BIt9%2B%2FRG90KXircA%2FNL154Db9etTuHm%2FIhls84n8YN6L70lG0gJR7ETSVWc3Tf%2Fr1Zhk9vRnzrTt0XrXROmKOw6PlmByp4hGACet5g9SKbKLoPx99pk%2FAlmdmU96quGEBJhNUHrw1au2gVNwkghLRAgJ6SiZ9IdL0yZICZq5CaYgpopjnOMJ06aeUy9n3N%2B1maHLWAzreLyuLnvpNd14WwaZFV7i6oMncbIqMEc6OsH%2B5vzaWuzMPhTVL36w%2BFXBRC0zWe1SSEdLBqwI9QHlz7JDa9vQrVEVbqbmA1cEQHAKvVfXDJXV89ZK%2B40QY38Zhm99V9ZV2Jp0EdrKC%2B%2Bl8IcL3GcIjli%2BZLqNipS8uT2rfwj8Y2xWaFv7avRzE5QYPm826cwrP3ZIqBwAHHsWqujXw%2FQ%2BrJbc3jNJKttm8sR4ikyR8WtuPBn95LMQdwSo%2FApyoJG%2Bs3JotvrrNCX37MMhxHCnB7Oa5eSDWQXTiy3QbChZQ0QkkKQ3gBK1tPz%2FAH%2BlhlQrw3etL5ynaynShxcf41lzS%2BAb78kFBkH3ZoQS3Tn%2FsQTL3Nl3zDdEmf5wzfB3l8JhROwjCnv%2Fvf%2By9eroRzj%2Bmfk6GHnlpqusj4v8kymZ3Q9qvc4nf0mSR2FQNzi9olDWVUUMPXgnr0GOqUBNy0J7Sa2E5BnD%2B5%2F2ukev16PffzAwph3kHq5ZDMByeBo5TDUQsJZ0Uc3VW2xefVRPrQ45iMvkWm5tsH96YeiYbZZjSU8bxz%2F4i%2BVIVSdjvI6kp57pPqPt8gb0TxSgvwfW2kh7GStC4Bj2sque9AJ1DJGA%2FNkdhXJ6Uj16VfWu2zrmhQtnBBYmtzbnDzHN%2FV1c9zHiTYd03jQ0FticnCodwOUOCb3&X-Amz-Signature=795f6f73966fc7b31f4fb8ee9d650e327f3ada2d40159619fce7534d6d7895b4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2YJ7BFH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCfUJMul8nfMhBQOv2GFNO0DNy0DiSrtSmph8Xjrw1owQIgFL3vNJzu37Ki%2BXhPgTgIgk6rHCCoYeqff9%2FgeDqivi8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPun%2BIt9%2B%2FRG90KXircA%2FNL154Db9etTuHm%2FIhls84n8YN6L70lG0gJR7ETSVWc3Tf%2Fr1Zhk9vRnzrTt0XrXROmKOw6PlmByp4hGACet5g9SKbKLoPx99pk%2FAlmdmU96quGEBJhNUHrw1au2gVNwkghLRAgJ6SiZ9IdL0yZICZq5CaYgpopjnOMJ06aeUy9n3N%2B1maHLWAzreLyuLnvpNd14WwaZFV7i6oMncbIqMEc6OsH%2B5vzaWuzMPhTVL36w%2BFXBRC0zWe1SSEdLBqwI9QHlz7JDa9vQrVEVbqbmA1cEQHAKvVfXDJXV89ZK%2B40QY38Zhm99V9ZV2Jp0EdrKC%2B%2Bl8IcL3GcIjli%2BZLqNipS8uT2rfwj8Y2xWaFv7avRzE5QYPm826cwrP3ZIqBwAHHsWqujXw%2FQ%2BrJbc3jNJKttm8sR4ikyR8WtuPBn95LMQdwSo%2FApyoJG%2Bs3JotvrrNCX37MMhxHCnB7Oa5eSDWQXTiy3QbChZQ0QkkKQ3gBK1tPz%2FAH%2BlhlQrw3etL5ynaynShxcf41lzS%2BAb78kFBkH3ZoQS3Tn%2FsQTL3Nl3zDdEmf5wzfB3l8JhROwjCnv%2Fvf%2By9eroRzj%2Bmfk6GHnlpqusj4v8kymZ3Q9qvc4nf0mSR2FQNzi9olDWVUUMPXgnr0GOqUBNy0J7Sa2E5BnD%2B5%2F2ukev16PffzAwph3kHq5ZDMByeBo5TDUQsJZ0Uc3VW2xefVRPrQ45iMvkWm5tsH96YeiYbZZjSU8bxz%2F4i%2BVIVSdjvI6kp57pPqPt8gb0TxSgvwfW2kh7GStC4Bj2sque9AJ1DJGA%2FNkdhXJ6Uj16VfWu2zrmhQtnBBYmtzbnDzHN%2FV1c9zHiTYd03jQ0FticnCodwOUOCb3&X-Amz-Signature=b6f64b60fcaf9252be375bf681a6a415d597f6f49fc8defa08e70973e75acc5e&X-Amz-SignedHeaders=host&x-id=GetObject)
