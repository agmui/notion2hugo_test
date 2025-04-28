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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S4UYC4S%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCasBajSQgeG5NFPKFGiFGLNNhbhmq7lWBKydO04vpXkQIhANsBK0WNP14tPx5HqadaJZd013nS4F2laQqsdsEYlzteKv8DCHcQABoMNjM3NDIzMTgzODA1IgzOY14dDXnwKq%2Fnk3Uq3APBIm%2Fvs54GmXF5kU6Hr8k7e6yZAG3u8psSLkL3aIIpVQyvEQOu%2BW0VOb11RDwNuVS1ffe%2FhtV4YqtlsWmX7ww6xRuaZJxXI4eU0TCxQ5AKtw5Nyoqsn0hw%2FrJfIxQwvOi8XI6XWqZQC4NtqwrCOe%2FpPsfgW3ajYlgUUhSOXOFHma8%2FbmrP7rqlq78N%2B%2B95Lw9rea2Ky27NN0808XhWdSLDx3k3KIhZ%2Bxdpvv3OC7V7pgnV8rPAPTU4kImskmgAumR0WEdyHOnsn2RIFDC%2B8rgpxc9FfLvfwFVpT3CffVg2fT8vnerwqKVFprvCZMocizB%2FTjjdsdK%2FlkuwZoWCnV7mZDZ1ai7Bmt44yQfje2ljciWJXGm4EivJ7IG%2BFOiDHzwajudFBbAstYLSy78QgRxa7oab6nezQflkmBxQcdvkqZI3%2FMdv%2F38c4RJusuzGjbj%2BTxjEmghiYs6AcN9PYj9PVHIx1FeX%2B2ArAE9YjO3eE19M71Ie8K7t7XesmYXv4Ts1u%2BYasDs%2FQq%2FC%2FrsR4x%2FkoYpO2huz7zrwJ1DLKzqI7vkOLEfzTO0kdtUB6Yjv9G34dIqgSWPZTPbKN0p6jPvhEXoQsMnzeQXMAIeFCVeAz3XOjePFvOhenPlo2DDfnb7ABjqkAVvITPdMIYW5N7qIHODnfm0owZPZM291L5nxwfl%2BbYr0ahf5wnbY6BvAmHFUDVWEuErvCbJdlhzSgYsnGv1aTk7RY5Af5Zhcv7T4ZNmM8ofrC59wHIBXKYeVuT3PSTbTJg0%2BHx%2F7bR00s1Y%2BoxCYBT0fBtt%2F6lvPsG%2FaxlU9jRLJRU5DcDNtJCuKfrAHOrKQBuL9fIHrdOd5xtogmUoZBk78v6Qm&X-Amz-Signature=274cbf1fceed4f75721a1f1c13bc74451e62e203c8fb44c2a271a93e036f122e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S4UYC4S%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCasBajSQgeG5NFPKFGiFGLNNhbhmq7lWBKydO04vpXkQIhANsBK0WNP14tPx5HqadaJZd013nS4F2laQqsdsEYlzteKv8DCHcQABoMNjM3NDIzMTgzODA1IgzOY14dDXnwKq%2Fnk3Uq3APBIm%2Fvs54GmXF5kU6Hr8k7e6yZAG3u8psSLkL3aIIpVQyvEQOu%2BW0VOb11RDwNuVS1ffe%2FhtV4YqtlsWmX7ww6xRuaZJxXI4eU0TCxQ5AKtw5Nyoqsn0hw%2FrJfIxQwvOi8XI6XWqZQC4NtqwrCOe%2FpPsfgW3ajYlgUUhSOXOFHma8%2FbmrP7rqlq78N%2B%2B95Lw9rea2Ky27NN0808XhWdSLDx3k3KIhZ%2Bxdpvv3OC7V7pgnV8rPAPTU4kImskmgAumR0WEdyHOnsn2RIFDC%2B8rgpxc9FfLvfwFVpT3CffVg2fT8vnerwqKVFprvCZMocizB%2FTjjdsdK%2FlkuwZoWCnV7mZDZ1ai7Bmt44yQfje2ljciWJXGm4EivJ7IG%2BFOiDHzwajudFBbAstYLSy78QgRxa7oab6nezQflkmBxQcdvkqZI3%2FMdv%2F38c4RJusuzGjbj%2BTxjEmghiYs6AcN9PYj9PVHIx1FeX%2B2ArAE9YjO3eE19M71Ie8K7t7XesmYXv4Ts1u%2BYasDs%2FQq%2FC%2FrsR4x%2FkoYpO2huz7zrwJ1DLKzqI7vkOLEfzTO0kdtUB6Yjv9G34dIqgSWPZTPbKN0p6jPvhEXoQsMnzeQXMAIeFCVeAz3XOjePFvOhenPlo2DDfnb7ABjqkAVvITPdMIYW5N7qIHODnfm0owZPZM291L5nxwfl%2BbYr0ahf5wnbY6BvAmHFUDVWEuErvCbJdlhzSgYsnGv1aTk7RY5Af5Zhcv7T4ZNmM8ofrC59wHIBXKYeVuT3PSTbTJg0%2BHx%2F7bR00s1Y%2BoxCYBT0fBtt%2F6lvPsG%2FaxlU9jRLJRU5DcDNtJCuKfrAHOrKQBuL9fIHrdOd5xtogmUoZBk78v6Qm&X-Amz-Signature=9361ddfc42a59a6a4de2217d3218e6264750a8bf460c21f1c8a299ff5403a2f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S4UYC4S%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCasBajSQgeG5NFPKFGiFGLNNhbhmq7lWBKydO04vpXkQIhANsBK0WNP14tPx5HqadaJZd013nS4F2laQqsdsEYlzteKv8DCHcQABoMNjM3NDIzMTgzODA1IgzOY14dDXnwKq%2Fnk3Uq3APBIm%2Fvs54GmXF5kU6Hr8k7e6yZAG3u8psSLkL3aIIpVQyvEQOu%2BW0VOb11RDwNuVS1ffe%2FhtV4YqtlsWmX7ww6xRuaZJxXI4eU0TCxQ5AKtw5Nyoqsn0hw%2FrJfIxQwvOi8XI6XWqZQC4NtqwrCOe%2FpPsfgW3ajYlgUUhSOXOFHma8%2FbmrP7rqlq78N%2B%2B95Lw9rea2Ky27NN0808XhWdSLDx3k3KIhZ%2Bxdpvv3OC7V7pgnV8rPAPTU4kImskmgAumR0WEdyHOnsn2RIFDC%2B8rgpxc9FfLvfwFVpT3CffVg2fT8vnerwqKVFprvCZMocizB%2FTjjdsdK%2FlkuwZoWCnV7mZDZ1ai7Bmt44yQfje2ljciWJXGm4EivJ7IG%2BFOiDHzwajudFBbAstYLSy78QgRxa7oab6nezQflkmBxQcdvkqZI3%2FMdv%2F38c4RJusuzGjbj%2BTxjEmghiYs6AcN9PYj9PVHIx1FeX%2B2ArAE9YjO3eE19M71Ie8K7t7XesmYXv4Ts1u%2BYasDs%2FQq%2FC%2FrsR4x%2FkoYpO2huz7zrwJ1DLKzqI7vkOLEfzTO0kdtUB6Yjv9G34dIqgSWPZTPbKN0p6jPvhEXoQsMnzeQXMAIeFCVeAz3XOjePFvOhenPlo2DDfnb7ABjqkAVvITPdMIYW5N7qIHODnfm0owZPZM291L5nxwfl%2BbYr0ahf5wnbY6BvAmHFUDVWEuErvCbJdlhzSgYsnGv1aTk7RY5Af5Zhcv7T4ZNmM8ofrC59wHIBXKYeVuT3PSTbTJg0%2BHx%2F7bR00s1Y%2BoxCYBT0fBtt%2F6lvPsG%2FaxlU9jRLJRU5DcDNtJCuKfrAHOrKQBuL9fIHrdOd5xtogmUoZBk78v6Qm&X-Amz-Signature=f299413ff274c460c11b5ada6b01720f08ecbc6fa1beabf5f61a1ab7c3526f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S4UYC4S%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCasBajSQgeG5NFPKFGiFGLNNhbhmq7lWBKydO04vpXkQIhANsBK0WNP14tPx5HqadaJZd013nS4F2laQqsdsEYlzteKv8DCHcQABoMNjM3NDIzMTgzODA1IgzOY14dDXnwKq%2Fnk3Uq3APBIm%2Fvs54GmXF5kU6Hr8k7e6yZAG3u8psSLkL3aIIpVQyvEQOu%2BW0VOb11RDwNuVS1ffe%2FhtV4YqtlsWmX7ww6xRuaZJxXI4eU0TCxQ5AKtw5Nyoqsn0hw%2FrJfIxQwvOi8XI6XWqZQC4NtqwrCOe%2FpPsfgW3ajYlgUUhSOXOFHma8%2FbmrP7rqlq78N%2B%2B95Lw9rea2Ky27NN0808XhWdSLDx3k3KIhZ%2Bxdpvv3OC7V7pgnV8rPAPTU4kImskmgAumR0WEdyHOnsn2RIFDC%2B8rgpxc9FfLvfwFVpT3CffVg2fT8vnerwqKVFprvCZMocizB%2FTjjdsdK%2FlkuwZoWCnV7mZDZ1ai7Bmt44yQfje2ljciWJXGm4EivJ7IG%2BFOiDHzwajudFBbAstYLSy78QgRxa7oab6nezQflkmBxQcdvkqZI3%2FMdv%2F38c4RJusuzGjbj%2BTxjEmghiYs6AcN9PYj9PVHIx1FeX%2B2ArAE9YjO3eE19M71Ie8K7t7XesmYXv4Ts1u%2BYasDs%2FQq%2FC%2FrsR4x%2FkoYpO2huz7zrwJ1DLKzqI7vkOLEfzTO0kdtUB6Yjv9G34dIqgSWPZTPbKN0p6jPvhEXoQsMnzeQXMAIeFCVeAz3XOjePFvOhenPlo2DDfnb7ABjqkAVvITPdMIYW5N7qIHODnfm0owZPZM291L5nxwfl%2BbYr0ahf5wnbY6BvAmHFUDVWEuErvCbJdlhzSgYsnGv1aTk7RY5Af5Zhcv7T4ZNmM8ofrC59wHIBXKYeVuT3PSTbTJg0%2BHx%2F7bR00s1Y%2BoxCYBT0fBtt%2F6lvPsG%2FaxlU9jRLJRU5DcDNtJCuKfrAHOrKQBuL9fIHrdOd5xtogmUoZBk78v6Qm&X-Amz-Signature=ed7e405df7074e973c3118fef3fb772f17eb2025eba7397a6e56ded121e92ba8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S4UYC4S%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCasBajSQgeG5NFPKFGiFGLNNhbhmq7lWBKydO04vpXkQIhANsBK0WNP14tPx5HqadaJZd013nS4F2laQqsdsEYlzteKv8DCHcQABoMNjM3NDIzMTgzODA1IgzOY14dDXnwKq%2Fnk3Uq3APBIm%2Fvs54GmXF5kU6Hr8k7e6yZAG3u8psSLkL3aIIpVQyvEQOu%2BW0VOb11RDwNuVS1ffe%2FhtV4YqtlsWmX7ww6xRuaZJxXI4eU0TCxQ5AKtw5Nyoqsn0hw%2FrJfIxQwvOi8XI6XWqZQC4NtqwrCOe%2FpPsfgW3ajYlgUUhSOXOFHma8%2FbmrP7rqlq78N%2B%2B95Lw9rea2Ky27NN0808XhWdSLDx3k3KIhZ%2Bxdpvv3OC7V7pgnV8rPAPTU4kImskmgAumR0WEdyHOnsn2RIFDC%2B8rgpxc9FfLvfwFVpT3CffVg2fT8vnerwqKVFprvCZMocizB%2FTjjdsdK%2FlkuwZoWCnV7mZDZ1ai7Bmt44yQfje2ljciWJXGm4EivJ7IG%2BFOiDHzwajudFBbAstYLSy78QgRxa7oab6nezQflkmBxQcdvkqZI3%2FMdv%2F38c4RJusuzGjbj%2BTxjEmghiYs6AcN9PYj9PVHIx1FeX%2B2ArAE9YjO3eE19M71Ie8K7t7XesmYXv4Ts1u%2BYasDs%2FQq%2FC%2FrsR4x%2FkoYpO2huz7zrwJ1DLKzqI7vkOLEfzTO0kdtUB6Yjv9G34dIqgSWPZTPbKN0p6jPvhEXoQsMnzeQXMAIeFCVeAz3XOjePFvOhenPlo2DDfnb7ABjqkAVvITPdMIYW5N7qIHODnfm0owZPZM291L5nxwfl%2BbYr0ahf5wnbY6BvAmHFUDVWEuErvCbJdlhzSgYsnGv1aTk7RY5Af5Zhcv7T4ZNmM8ofrC59wHIBXKYeVuT3PSTbTJg0%2BHx%2F7bR00s1Y%2BoxCYBT0fBtt%2F6lvPsG%2FaxlU9jRLJRU5DcDNtJCuKfrAHOrKQBuL9fIHrdOd5xtogmUoZBk78v6Qm&X-Amz-Signature=d15ed9065a99a1489fc0d6f8f1ae00b71885cede31ad622c17cffd999d14a65c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S4UYC4S%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCasBajSQgeG5NFPKFGiFGLNNhbhmq7lWBKydO04vpXkQIhANsBK0WNP14tPx5HqadaJZd013nS4F2laQqsdsEYlzteKv8DCHcQABoMNjM3NDIzMTgzODA1IgzOY14dDXnwKq%2Fnk3Uq3APBIm%2Fvs54GmXF5kU6Hr8k7e6yZAG3u8psSLkL3aIIpVQyvEQOu%2BW0VOb11RDwNuVS1ffe%2FhtV4YqtlsWmX7ww6xRuaZJxXI4eU0TCxQ5AKtw5Nyoqsn0hw%2FrJfIxQwvOi8XI6XWqZQC4NtqwrCOe%2FpPsfgW3ajYlgUUhSOXOFHma8%2FbmrP7rqlq78N%2B%2B95Lw9rea2Ky27NN0808XhWdSLDx3k3KIhZ%2Bxdpvv3OC7V7pgnV8rPAPTU4kImskmgAumR0WEdyHOnsn2RIFDC%2B8rgpxc9FfLvfwFVpT3CffVg2fT8vnerwqKVFprvCZMocizB%2FTjjdsdK%2FlkuwZoWCnV7mZDZ1ai7Bmt44yQfje2ljciWJXGm4EivJ7IG%2BFOiDHzwajudFBbAstYLSy78QgRxa7oab6nezQflkmBxQcdvkqZI3%2FMdv%2F38c4RJusuzGjbj%2BTxjEmghiYs6AcN9PYj9PVHIx1FeX%2B2ArAE9YjO3eE19M71Ie8K7t7XesmYXv4Ts1u%2BYasDs%2FQq%2FC%2FrsR4x%2FkoYpO2huz7zrwJ1DLKzqI7vkOLEfzTO0kdtUB6Yjv9G34dIqgSWPZTPbKN0p6jPvhEXoQsMnzeQXMAIeFCVeAz3XOjePFvOhenPlo2DDfnb7ABjqkAVvITPdMIYW5N7qIHODnfm0owZPZM291L5nxwfl%2BbYr0ahf5wnbY6BvAmHFUDVWEuErvCbJdlhzSgYsnGv1aTk7RY5Af5Zhcv7T4ZNmM8ofrC59wHIBXKYeVuT3PSTbTJg0%2BHx%2F7bR00s1Y%2BoxCYBT0fBtt%2F6lvPsG%2FaxlU9jRLJRU5DcDNtJCuKfrAHOrKQBuL9fIHrdOd5xtogmUoZBk78v6Qm&X-Amz-Signature=cde06beb680285af7db579bea9a50c6008f652a81138d7c4f223fb114fda034b&X-Amz-SignedHeaders=host&x-id=GetObject)
