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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBONUQEF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEGc2vLYeH5KKVP9GgPD%2Bgs84Hoc5U5DxlnQHmmFMjH2AiBuOfK0R0xnuL0V%2BOm9VzqQ%2B%2FH5diGjcZz6XI0A4DdyaSqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2gg%2FRUnv891DVUvrKtwDV9ZtcAU1TSv3oqvfAf%2F27hQRsT9FcUn2I0T75g9h%2BksryBZzyi9DVStElmvtEBnsfOs1dQ5l1L7VsgGNVVqkVJxcOtBz%2Fe9l7pQYChF%2FjhCoKPX8FHzfTNF1p6QQ%2FDlBr%2FfQ1NgLsKEHc5r6%2FUYm6bLw6tM5wMDeKW01NGq9zpJ36w%2BnoqrHc%2FQ6ymlpITBAPXGXqY4qLaEXbFJmPQ4uXT%2BVW%2FIOoxxTX0WDb9aveOTxDiknjRd7FDR3H8MCogL%2By8ObeHQDwvmpH0qThWkpw8BbUOHxT2dc02ks6jyXdHskC5Hx%2BCh3TtcRWxxoRTi2sHSI208ovFWmSRbBP5%2B87Sor63rFR04nDermIIVWxPijHbIClvdd4MxxrUMrSSEuteR3yN8f061UNrI1qUpEkWy1t74aLq5XwV%2Fv6VS9KaN7kBuOBMCL%2FkwwWfbu0LffqW0o%2BFYhBpe3LDyDBiz0zS8Y3QJI1p8qvb33AeXmy3%2FA4avTh3Fs%2B1T%2Bc4gQjjYIwfil9ZUc4JtVr1teRz6kLgDMDDzy9lz6TaXJcR84ANVnfRR7I6567%2F56GRftKIxcv2lq%2BcRyZK55AE0qTmv3Oudylh%2FZIZsqmcf2Y4XfRrjw2%2Frfp%2FYaTCldoEUwuKquwgY6pgHdonntUYSbTK5QKh%2FhU4L2%2FgF%2Fuf05rjRL8M3EPdQBr86aXD8ajszKrYxgq0I%2FS%2BTVVBosmna0c7vW7pbpW2ehKrb1oyuEzJIlFwO4hiNeXAqiNRGMbHVc1nsCcb%2FjwTNCNtcA428RZVHubjgnx09FYaddhZOJhk2RRD96MmQxHBJMg53t6j1FmUbY5GkKyuvS3tQYHo%2Bebj1qUXb7mWGNernTiVl%2F&X-Amz-Signature=2c418ecfc75b0632990481d0192e27ca8cae349c38659155d405a45bae70a9ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBONUQEF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEGc2vLYeH5KKVP9GgPD%2Bgs84Hoc5U5DxlnQHmmFMjH2AiBuOfK0R0xnuL0V%2BOm9VzqQ%2B%2FH5diGjcZz6XI0A4DdyaSqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2gg%2FRUnv891DVUvrKtwDV9ZtcAU1TSv3oqvfAf%2F27hQRsT9FcUn2I0T75g9h%2BksryBZzyi9DVStElmvtEBnsfOs1dQ5l1L7VsgGNVVqkVJxcOtBz%2Fe9l7pQYChF%2FjhCoKPX8FHzfTNF1p6QQ%2FDlBr%2FfQ1NgLsKEHc5r6%2FUYm6bLw6tM5wMDeKW01NGq9zpJ36w%2BnoqrHc%2FQ6ymlpITBAPXGXqY4qLaEXbFJmPQ4uXT%2BVW%2FIOoxxTX0WDb9aveOTxDiknjRd7FDR3H8MCogL%2By8ObeHQDwvmpH0qThWkpw8BbUOHxT2dc02ks6jyXdHskC5Hx%2BCh3TtcRWxxoRTi2sHSI208ovFWmSRbBP5%2B87Sor63rFR04nDermIIVWxPijHbIClvdd4MxxrUMrSSEuteR3yN8f061UNrI1qUpEkWy1t74aLq5XwV%2Fv6VS9KaN7kBuOBMCL%2FkwwWfbu0LffqW0o%2BFYhBpe3LDyDBiz0zS8Y3QJI1p8qvb33AeXmy3%2FA4avTh3Fs%2B1T%2Bc4gQjjYIwfil9ZUc4JtVr1teRz6kLgDMDDzy9lz6TaXJcR84ANVnfRR7I6567%2F56GRftKIxcv2lq%2BcRyZK55AE0qTmv3Oudylh%2FZIZsqmcf2Y4XfRrjw2%2Frfp%2FYaTCldoEUwuKquwgY6pgHdonntUYSbTK5QKh%2FhU4L2%2FgF%2Fuf05rjRL8M3EPdQBr86aXD8ajszKrYxgq0I%2FS%2BTVVBosmna0c7vW7pbpW2ehKrb1oyuEzJIlFwO4hiNeXAqiNRGMbHVc1nsCcb%2FjwTNCNtcA428RZVHubjgnx09FYaddhZOJhk2RRD96MmQxHBJMg53t6j1FmUbY5GkKyuvS3tQYHo%2Bebj1qUXb7mWGNernTiVl%2F&X-Amz-Signature=2cc32d25df3489c13607c952fcdcc86ec852ab08da38cbdb276a1aad6a41dced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBONUQEF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEGc2vLYeH5KKVP9GgPD%2Bgs84Hoc5U5DxlnQHmmFMjH2AiBuOfK0R0xnuL0V%2BOm9VzqQ%2B%2FH5diGjcZz6XI0A4DdyaSqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2gg%2FRUnv891DVUvrKtwDV9ZtcAU1TSv3oqvfAf%2F27hQRsT9FcUn2I0T75g9h%2BksryBZzyi9DVStElmvtEBnsfOs1dQ5l1L7VsgGNVVqkVJxcOtBz%2Fe9l7pQYChF%2FjhCoKPX8FHzfTNF1p6QQ%2FDlBr%2FfQ1NgLsKEHc5r6%2FUYm6bLw6tM5wMDeKW01NGq9zpJ36w%2BnoqrHc%2FQ6ymlpITBAPXGXqY4qLaEXbFJmPQ4uXT%2BVW%2FIOoxxTX0WDb9aveOTxDiknjRd7FDR3H8MCogL%2By8ObeHQDwvmpH0qThWkpw8BbUOHxT2dc02ks6jyXdHskC5Hx%2BCh3TtcRWxxoRTi2sHSI208ovFWmSRbBP5%2B87Sor63rFR04nDermIIVWxPijHbIClvdd4MxxrUMrSSEuteR3yN8f061UNrI1qUpEkWy1t74aLq5XwV%2Fv6VS9KaN7kBuOBMCL%2FkwwWfbu0LffqW0o%2BFYhBpe3LDyDBiz0zS8Y3QJI1p8qvb33AeXmy3%2FA4avTh3Fs%2B1T%2Bc4gQjjYIwfil9ZUc4JtVr1teRz6kLgDMDDzy9lz6TaXJcR84ANVnfRR7I6567%2F56GRftKIxcv2lq%2BcRyZK55AE0qTmv3Oudylh%2FZIZsqmcf2Y4XfRrjw2%2Frfp%2FYaTCldoEUwuKquwgY6pgHdonntUYSbTK5QKh%2FhU4L2%2FgF%2Fuf05rjRL8M3EPdQBr86aXD8ajszKrYxgq0I%2FS%2BTVVBosmna0c7vW7pbpW2ehKrb1oyuEzJIlFwO4hiNeXAqiNRGMbHVc1nsCcb%2FjwTNCNtcA428RZVHubjgnx09FYaddhZOJhk2RRD96MmQxHBJMg53t6j1FmUbY5GkKyuvS3tQYHo%2Bebj1qUXb7mWGNernTiVl%2F&X-Amz-Signature=132bae19228a841b00ec05697f85fd141cd7c47f48cd9412347621183d5f2275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBONUQEF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEGc2vLYeH5KKVP9GgPD%2Bgs84Hoc5U5DxlnQHmmFMjH2AiBuOfK0R0xnuL0V%2BOm9VzqQ%2B%2FH5diGjcZz6XI0A4DdyaSqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2gg%2FRUnv891DVUvrKtwDV9ZtcAU1TSv3oqvfAf%2F27hQRsT9FcUn2I0T75g9h%2BksryBZzyi9DVStElmvtEBnsfOs1dQ5l1L7VsgGNVVqkVJxcOtBz%2Fe9l7pQYChF%2FjhCoKPX8FHzfTNF1p6QQ%2FDlBr%2FfQ1NgLsKEHc5r6%2FUYm6bLw6tM5wMDeKW01NGq9zpJ36w%2BnoqrHc%2FQ6ymlpITBAPXGXqY4qLaEXbFJmPQ4uXT%2BVW%2FIOoxxTX0WDb9aveOTxDiknjRd7FDR3H8MCogL%2By8ObeHQDwvmpH0qThWkpw8BbUOHxT2dc02ks6jyXdHskC5Hx%2BCh3TtcRWxxoRTi2sHSI208ovFWmSRbBP5%2B87Sor63rFR04nDermIIVWxPijHbIClvdd4MxxrUMrSSEuteR3yN8f061UNrI1qUpEkWy1t74aLq5XwV%2Fv6VS9KaN7kBuOBMCL%2FkwwWfbu0LffqW0o%2BFYhBpe3LDyDBiz0zS8Y3QJI1p8qvb33AeXmy3%2FA4avTh3Fs%2B1T%2Bc4gQjjYIwfil9ZUc4JtVr1teRz6kLgDMDDzy9lz6TaXJcR84ANVnfRR7I6567%2F56GRftKIxcv2lq%2BcRyZK55AE0qTmv3Oudylh%2FZIZsqmcf2Y4XfRrjw2%2Frfp%2FYaTCldoEUwuKquwgY6pgHdonntUYSbTK5QKh%2FhU4L2%2FgF%2Fuf05rjRL8M3EPdQBr86aXD8ajszKrYxgq0I%2FS%2BTVVBosmna0c7vW7pbpW2ehKrb1oyuEzJIlFwO4hiNeXAqiNRGMbHVc1nsCcb%2FjwTNCNtcA428RZVHubjgnx09FYaddhZOJhk2RRD96MmQxHBJMg53t6j1FmUbY5GkKyuvS3tQYHo%2Bebj1qUXb7mWGNernTiVl%2F&X-Amz-Signature=914841ae8c21be09a041828bf81894a266912d6c84e1813dae8dc57cc9d8a002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBONUQEF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEGc2vLYeH5KKVP9GgPD%2Bgs84Hoc5U5DxlnQHmmFMjH2AiBuOfK0R0xnuL0V%2BOm9VzqQ%2B%2FH5diGjcZz6XI0A4DdyaSqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2gg%2FRUnv891DVUvrKtwDV9ZtcAU1TSv3oqvfAf%2F27hQRsT9FcUn2I0T75g9h%2BksryBZzyi9DVStElmvtEBnsfOs1dQ5l1L7VsgGNVVqkVJxcOtBz%2Fe9l7pQYChF%2FjhCoKPX8FHzfTNF1p6QQ%2FDlBr%2FfQ1NgLsKEHc5r6%2FUYm6bLw6tM5wMDeKW01NGq9zpJ36w%2BnoqrHc%2FQ6ymlpITBAPXGXqY4qLaEXbFJmPQ4uXT%2BVW%2FIOoxxTX0WDb9aveOTxDiknjRd7FDR3H8MCogL%2By8ObeHQDwvmpH0qThWkpw8BbUOHxT2dc02ks6jyXdHskC5Hx%2BCh3TtcRWxxoRTi2sHSI208ovFWmSRbBP5%2B87Sor63rFR04nDermIIVWxPijHbIClvdd4MxxrUMrSSEuteR3yN8f061UNrI1qUpEkWy1t74aLq5XwV%2Fv6VS9KaN7kBuOBMCL%2FkwwWfbu0LffqW0o%2BFYhBpe3LDyDBiz0zS8Y3QJI1p8qvb33AeXmy3%2FA4avTh3Fs%2B1T%2Bc4gQjjYIwfil9ZUc4JtVr1teRz6kLgDMDDzy9lz6TaXJcR84ANVnfRR7I6567%2F56GRftKIxcv2lq%2BcRyZK55AE0qTmv3Oudylh%2FZIZsqmcf2Y4XfRrjw2%2Frfp%2FYaTCldoEUwuKquwgY6pgHdonntUYSbTK5QKh%2FhU4L2%2FgF%2Fuf05rjRL8M3EPdQBr86aXD8ajszKrYxgq0I%2FS%2BTVVBosmna0c7vW7pbpW2ehKrb1oyuEzJIlFwO4hiNeXAqiNRGMbHVc1nsCcb%2FjwTNCNtcA428RZVHubjgnx09FYaddhZOJhk2RRD96MmQxHBJMg53t6j1FmUbY5GkKyuvS3tQYHo%2Bebj1qUXb7mWGNernTiVl%2F&X-Amz-Signature=82a0715e03bb5d2636f563ffc52074b71a425bbcb75d5d8b0ad41ed69f6277a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBONUQEF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEGc2vLYeH5KKVP9GgPD%2Bgs84Hoc5U5DxlnQHmmFMjH2AiBuOfK0R0xnuL0V%2BOm9VzqQ%2B%2FH5diGjcZz6XI0A4DdyaSqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2gg%2FRUnv891DVUvrKtwDV9ZtcAU1TSv3oqvfAf%2F27hQRsT9FcUn2I0T75g9h%2BksryBZzyi9DVStElmvtEBnsfOs1dQ5l1L7VsgGNVVqkVJxcOtBz%2Fe9l7pQYChF%2FjhCoKPX8FHzfTNF1p6QQ%2FDlBr%2FfQ1NgLsKEHc5r6%2FUYm6bLw6tM5wMDeKW01NGq9zpJ36w%2BnoqrHc%2FQ6ymlpITBAPXGXqY4qLaEXbFJmPQ4uXT%2BVW%2FIOoxxTX0WDb9aveOTxDiknjRd7FDR3H8MCogL%2By8ObeHQDwvmpH0qThWkpw8BbUOHxT2dc02ks6jyXdHskC5Hx%2BCh3TtcRWxxoRTi2sHSI208ovFWmSRbBP5%2B87Sor63rFR04nDermIIVWxPijHbIClvdd4MxxrUMrSSEuteR3yN8f061UNrI1qUpEkWy1t74aLq5XwV%2Fv6VS9KaN7kBuOBMCL%2FkwwWfbu0LffqW0o%2BFYhBpe3LDyDBiz0zS8Y3QJI1p8qvb33AeXmy3%2FA4avTh3Fs%2B1T%2Bc4gQjjYIwfil9ZUc4JtVr1teRz6kLgDMDDzy9lz6TaXJcR84ANVnfRR7I6567%2F56GRftKIxcv2lq%2BcRyZK55AE0qTmv3Oudylh%2FZIZsqmcf2Y4XfRrjw2%2Frfp%2FYaTCldoEUwuKquwgY6pgHdonntUYSbTK5QKh%2FhU4L2%2FgF%2Fuf05rjRL8M3EPdQBr86aXD8ajszKrYxgq0I%2FS%2BTVVBosmna0c7vW7pbpW2ehKrb1oyuEzJIlFwO4hiNeXAqiNRGMbHVc1nsCcb%2FjwTNCNtcA428RZVHubjgnx09FYaddhZOJhk2RRD96MmQxHBJMg53t6j1FmUbY5GkKyuvS3tQYHo%2Bebj1qUXb7mWGNernTiVl%2F&X-Amz-Signature=562667c941dc8e8ff5d3949b2b85e6a96a69346ed7b309a929317eada869b91f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
