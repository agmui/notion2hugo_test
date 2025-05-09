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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDJY2OFJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsr%2FtnNhzPLV2yY6%2Fn02MCxKKL3hjvGGBqBXtImHJjfAiAUjYX32rt7p1yLbUYRtB7tV1ohhqsA9zTQ7koP1XSl3SqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B04%2BngkIp9IzGq%2FoKtwDskkKi1nsm7Pmp%2FVRywaMlebgFkb0ZhL7IK8xupWGhbh%2FvQy5ry9inGtRifMWSz124pQkvvTF03oYOnR8F7FNq0Pd3uYuSEquPRX6wRXeyYhhLM9jf43LD5RrxZNnmzpfOxs0GY3ccivB9EJ2JTpk9rsYGgOBaWfsOiz72LpolTCrP%2FFKJOtKx%2FeWDBZXhvr%2Blnf1kMw9AxRc1Bm9DPdfB2zscfT0U78XRhXdx5Sw5N3gzKmr5kqJ%2FXqhKrI7XXUqc%2BFJkvBLCkzt9wQbi1c3JDZZyt%2BixIOIZQN2pcFq2lsc0fYqlCRkhEHEvbAX3aArdIg%2B056dLbS8aAITMWVwUYzU0WTjjABABweYpbg%2Bd6gJDKJ4uf%2Bch6QwRbOGS4YgTqoUtpzQpd7nneGzcVn%2FzSUpfP7PuJl9ks35Ey9E8qt5GSxnkH89xTk4QwoqbzOCLt3j3%2BKzOMPcSn%2BNDUJLMvriiCBnd1AWWSSP8LLJ12U31xTqyrNcww4V%2B4Wh9l0JLO1Fi%2B%2BV%2Bp3dBLR%2F2AuBVdVDlM9OWOsjUggnW4DaVFYvanrrFmXPOzbk%2FOQzoZF410PuYSh2swXEz02g1btbJY3LhleDvr2meHgZNwxIvV9KUZJB0auJJiDMC4gwvr34wAY6pgFKJ6tl4mtCSJs9%2BCHnS6papiw15ozHXwfJi%2BqVhcP0%2FT0BdslRd0Xr0XdbM59zJKsay6i42AeoJ55T%2BzQ3unW40X%2FzTNVsCbWfn%2FzH3RAes8rPFwcZ53rohZpBcUmK6zvS2j%2B0yaXUP17Pi0evK%2BR4lvrAsvJGlbHKOrbnY7Yz652Kq5zLoTdVSDgpErFAeLlI5WeoFP5sisckFY%2FT5p4uEtIXnjbX&X-Amz-Signature=a92797c79f28bb6cccf3b6212d3bb2631ee5b7164a357b39a561fc48220e7be9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDJY2OFJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsr%2FtnNhzPLV2yY6%2Fn02MCxKKL3hjvGGBqBXtImHJjfAiAUjYX32rt7p1yLbUYRtB7tV1ohhqsA9zTQ7koP1XSl3SqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B04%2BngkIp9IzGq%2FoKtwDskkKi1nsm7Pmp%2FVRywaMlebgFkb0ZhL7IK8xupWGhbh%2FvQy5ry9inGtRifMWSz124pQkvvTF03oYOnR8F7FNq0Pd3uYuSEquPRX6wRXeyYhhLM9jf43LD5RrxZNnmzpfOxs0GY3ccivB9EJ2JTpk9rsYGgOBaWfsOiz72LpolTCrP%2FFKJOtKx%2FeWDBZXhvr%2Blnf1kMw9AxRc1Bm9DPdfB2zscfT0U78XRhXdx5Sw5N3gzKmr5kqJ%2FXqhKrI7XXUqc%2BFJkvBLCkzt9wQbi1c3JDZZyt%2BixIOIZQN2pcFq2lsc0fYqlCRkhEHEvbAX3aArdIg%2B056dLbS8aAITMWVwUYzU0WTjjABABweYpbg%2Bd6gJDKJ4uf%2Bch6QwRbOGS4YgTqoUtpzQpd7nneGzcVn%2FzSUpfP7PuJl9ks35Ey9E8qt5GSxnkH89xTk4QwoqbzOCLt3j3%2BKzOMPcSn%2BNDUJLMvriiCBnd1AWWSSP8LLJ12U31xTqyrNcww4V%2B4Wh9l0JLO1Fi%2B%2BV%2Bp3dBLR%2F2AuBVdVDlM9OWOsjUggnW4DaVFYvanrrFmXPOzbk%2FOQzoZF410PuYSh2swXEz02g1btbJY3LhleDvr2meHgZNwxIvV9KUZJB0auJJiDMC4gwvr34wAY6pgFKJ6tl4mtCSJs9%2BCHnS6papiw15ozHXwfJi%2BqVhcP0%2FT0BdslRd0Xr0XdbM59zJKsay6i42AeoJ55T%2BzQ3unW40X%2FzTNVsCbWfn%2FzH3RAes8rPFwcZ53rohZpBcUmK6zvS2j%2B0yaXUP17Pi0evK%2BR4lvrAsvJGlbHKOrbnY7Yz652Kq5zLoTdVSDgpErFAeLlI5WeoFP5sisckFY%2FT5p4uEtIXnjbX&X-Amz-Signature=1beb20399c74929b73ff6ef039d588475ac5bdec14093caff87ec4818684f3bd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDJY2OFJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsr%2FtnNhzPLV2yY6%2Fn02MCxKKL3hjvGGBqBXtImHJjfAiAUjYX32rt7p1yLbUYRtB7tV1ohhqsA9zTQ7koP1XSl3SqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B04%2BngkIp9IzGq%2FoKtwDskkKi1nsm7Pmp%2FVRywaMlebgFkb0ZhL7IK8xupWGhbh%2FvQy5ry9inGtRifMWSz124pQkvvTF03oYOnR8F7FNq0Pd3uYuSEquPRX6wRXeyYhhLM9jf43LD5RrxZNnmzpfOxs0GY3ccivB9EJ2JTpk9rsYGgOBaWfsOiz72LpolTCrP%2FFKJOtKx%2FeWDBZXhvr%2Blnf1kMw9AxRc1Bm9DPdfB2zscfT0U78XRhXdx5Sw5N3gzKmr5kqJ%2FXqhKrI7XXUqc%2BFJkvBLCkzt9wQbi1c3JDZZyt%2BixIOIZQN2pcFq2lsc0fYqlCRkhEHEvbAX3aArdIg%2B056dLbS8aAITMWVwUYzU0WTjjABABweYpbg%2Bd6gJDKJ4uf%2Bch6QwRbOGS4YgTqoUtpzQpd7nneGzcVn%2FzSUpfP7PuJl9ks35Ey9E8qt5GSxnkH89xTk4QwoqbzOCLt3j3%2BKzOMPcSn%2BNDUJLMvriiCBnd1AWWSSP8LLJ12U31xTqyrNcww4V%2B4Wh9l0JLO1Fi%2B%2BV%2Bp3dBLR%2F2AuBVdVDlM9OWOsjUggnW4DaVFYvanrrFmXPOzbk%2FOQzoZF410PuYSh2swXEz02g1btbJY3LhleDvr2meHgZNwxIvV9KUZJB0auJJiDMC4gwvr34wAY6pgFKJ6tl4mtCSJs9%2BCHnS6papiw15ozHXwfJi%2BqVhcP0%2FT0BdslRd0Xr0XdbM59zJKsay6i42AeoJ55T%2BzQ3unW40X%2FzTNVsCbWfn%2FzH3RAes8rPFwcZ53rohZpBcUmK6zvS2j%2B0yaXUP17Pi0evK%2BR4lvrAsvJGlbHKOrbnY7Yz652Kq5zLoTdVSDgpErFAeLlI5WeoFP5sisckFY%2FT5p4uEtIXnjbX&X-Amz-Signature=353f569f3a5202c1c5665f5b09a7fac986c0a1dc891155573ad575d34d25bb30&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDJY2OFJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsr%2FtnNhzPLV2yY6%2Fn02MCxKKL3hjvGGBqBXtImHJjfAiAUjYX32rt7p1yLbUYRtB7tV1ohhqsA9zTQ7koP1XSl3SqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B04%2BngkIp9IzGq%2FoKtwDskkKi1nsm7Pmp%2FVRywaMlebgFkb0ZhL7IK8xupWGhbh%2FvQy5ry9inGtRifMWSz124pQkvvTF03oYOnR8F7FNq0Pd3uYuSEquPRX6wRXeyYhhLM9jf43LD5RrxZNnmzpfOxs0GY3ccivB9EJ2JTpk9rsYGgOBaWfsOiz72LpolTCrP%2FFKJOtKx%2FeWDBZXhvr%2Blnf1kMw9AxRc1Bm9DPdfB2zscfT0U78XRhXdx5Sw5N3gzKmr5kqJ%2FXqhKrI7XXUqc%2BFJkvBLCkzt9wQbi1c3JDZZyt%2BixIOIZQN2pcFq2lsc0fYqlCRkhEHEvbAX3aArdIg%2B056dLbS8aAITMWVwUYzU0WTjjABABweYpbg%2Bd6gJDKJ4uf%2Bch6QwRbOGS4YgTqoUtpzQpd7nneGzcVn%2FzSUpfP7PuJl9ks35Ey9E8qt5GSxnkH89xTk4QwoqbzOCLt3j3%2BKzOMPcSn%2BNDUJLMvriiCBnd1AWWSSP8LLJ12U31xTqyrNcww4V%2B4Wh9l0JLO1Fi%2B%2BV%2Bp3dBLR%2F2AuBVdVDlM9OWOsjUggnW4DaVFYvanrrFmXPOzbk%2FOQzoZF410PuYSh2swXEz02g1btbJY3LhleDvr2meHgZNwxIvV9KUZJB0auJJiDMC4gwvr34wAY6pgFKJ6tl4mtCSJs9%2BCHnS6papiw15ozHXwfJi%2BqVhcP0%2FT0BdslRd0Xr0XdbM59zJKsay6i42AeoJ55T%2BzQ3unW40X%2FzTNVsCbWfn%2FzH3RAes8rPFwcZ53rohZpBcUmK6zvS2j%2B0yaXUP17Pi0evK%2BR4lvrAsvJGlbHKOrbnY7Yz652Kq5zLoTdVSDgpErFAeLlI5WeoFP5sisckFY%2FT5p4uEtIXnjbX&X-Amz-Signature=f4055722f0ed517d36d32187c1ba2d3e1c2283dd3f180d6979d7da375b8ed3d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDJY2OFJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsr%2FtnNhzPLV2yY6%2Fn02MCxKKL3hjvGGBqBXtImHJjfAiAUjYX32rt7p1yLbUYRtB7tV1ohhqsA9zTQ7koP1XSl3SqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B04%2BngkIp9IzGq%2FoKtwDskkKi1nsm7Pmp%2FVRywaMlebgFkb0ZhL7IK8xupWGhbh%2FvQy5ry9inGtRifMWSz124pQkvvTF03oYOnR8F7FNq0Pd3uYuSEquPRX6wRXeyYhhLM9jf43LD5RrxZNnmzpfOxs0GY3ccivB9EJ2JTpk9rsYGgOBaWfsOiz72LpolTCrP%2FFKJOtKx%2FeWDBZXhvr%2Blnf1kMw9AxRc1Bm9DPdfB2zscfT0U78XRhXdx5Sw5N3gzKmr5kqJ%2FXqhKrI7XXUqc%2BFJkvBLCkzt9wQbi1c3JDZZyt%2BixIOIZQN2pcFq2lsc0fYqlCRkhEHEvbAX3aArdIg%2B056dLbS8aAITMWVwUYzU0WTjjABABweYpbg%2Bd6gJDKJ4uf%2Bch6QwRbOGS4YgTqoUtpzQpd7nneGzcVn%2FzSUpfP7PuJl9ks35Ey9E8qt5GSxnkH89xTk4QwoqbzOCLt3j3%2BKzOMPcSn%2BNDUJLMvriiCBnd1AWWSSP8LLJ12U31xTqyrNcww4V%2B4Wh9l0JLO1Fi%2B%2BV%2Bp3dBLR%2F2AuBVdVDlM9OWOsjUggnW4DaVFYvanrrFmXPOzbk%2FOQzoZF410PuYSh2swXEz02g1btbJY3LhleDvr2meHgZNwxIvV9KUZJB0auJJiDMC4gwvr34wAY6pgFKJ6tl4mtCSJs9%2BCHnS6papiw15ozHXwfJi%2BqVhcP0%2FT0BdslRd0Xr0XdbM59zJKsay6i42AeoJ55T%2BzQ3unW40X%2FzTNVsCbWfn%2FzH3RAes8rPFwcZ53rohZpBcUmK6zvS2j%2B0yaXUP17Pi0evK%2BR4lvrAsvJGlbHKOrbnY7Yz652Kq5zLoTdVSDgpErFAeLlI5WeoFP5sisckFY%2FT5p4uEtIXnjbX&X-Amz-Signature=09d3e0d7914cc2740b3b5966ebb6f2ef766d65a118f7b29e62841b9ad2f5a03e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDJY2OFJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsr%2FtnNhzPLV2yY6%2Fn02MCxKKL3hjvGGBqBXtImHJjfAiAUjYX32rt7p1yLbUYRtB7tV1ohhqsA9zTQ7koP1XSl3SqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B04%2BngkIp9IzGq%2FoKtwDskkKi1nsm7Pmp%2FVRywaMlebgFkb0ZhL7IK8xupWGhbh%2FvQy5ry9inGtRifMWSz124pQkvvTF03oYOnR8F7FNq0Pd3uYuSEquPRX6wRXeyYhhLM9jf43LD5RrxZNnmzpfOxs0GY3ccivB9EJ2JTpk9rsYGgOBaWfsOiz72LpolTCrP%2FFKJOtKx%2FeWDBZXhvr%2Blnf1kMw9AxRc1Bm9DPdfB2zscfT0U78XRhXdx5Sw5N3gzKmr5kqJ%2FXqhKrI7XXUqc%2BFJkvBLCkzt9wQbi1c3JDZZyt%2BixIOIZQN2pcFq2lsc0fYqlCRkhEHEvbAX3aArdIg%2B056dLbS8aAITMWVwUYzU0WTjjABABweYpbg%2Bd6gJDKJ4uf%2Bch6QwRbOGS4YgTqoUtpzQpd7nneGzcVn%2FzSUpfP7PuJl9ks35Ey9E8qt5GSxnkH89xTk4QwoqbzOCLt3j3%2BKzOMPcSn%2BNDUJLMvriiCBnd1AWWSSP8LLJ12U31xTqyrNcww4V%2B4Wh9l0JLO1Fi%2B%2BV%2Bp3dBLR%2F2AuBVdVDlM9OWOsjUggnW4DaVFYvanrrFmXPOzbk%2FOQzoZF410PuYSh2swXEz02g1btbJY3LhleDvr2meHgZNwxIvV9KUZJB0auJJiDMC4gwvr34wAY6pgFKJ6tl4mtCSJs9%2BCHnS6papiw15ozHXwfJi%2BqVhcP0%2FT0BdslRd0Xr0XdbM59zJKsay6i42AeoJ55T%2BzQ3unW40X%2FzTNVsCbWfn%2FzH3RAes8rPFwcZ53rohZpBcUmK6zvS2j%2B0yaXUP17Pi0evK%2BR4lvrAsvJGlbHKOrbnY7Yz652Kq5zLoTdVSDgpErFAeLlI5WeoFP5sisckFY%2FT5p4uEtIXnjbX&X-Amz-Signature=a85e32f11f4cf5ff9b69ce09b738c1b591763f034af5ecafd61e905afd919001&X-Amz-SignedHeaders=host&x-id=GetObject)
