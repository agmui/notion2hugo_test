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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZHNUNQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDj5alzJGsSk2%2BXJzXIKIjJJt7p72xNSohf3Wxu%2FEEgAiAC9vhXpyhUGhWJuidkQrhx5B2pwkX34xTHNYMC4%2BgrxiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMInC55MjuAB7YS2fHKtwD8lYDXfRi7m%2B6wWFmlSzNEHB1AsBFagL5S0kbn3%2BMsgH0tCO3FmUItpCmOGH2UWCbYgVS%2BevqBcoOjC9qNgD4Oc0EZN6HjFRnxCuYl%2BXkRxoGsg8umncc76bwJCMrZDYiRh7qXgo7tGdw0PN9xlwL1N3SK4BmV0m7aP0%2B%2FPLlAZwj4YqZkUBLQxNymeau3m493UJ0SW2ghVuoXluB%2F4hXqbokn0XU%2FgeQSF8Mckh29sMyi8uKkxjnAZvc%2BWj4LFyibHVfEyKMLkcHFYRwtwS%2BmDv89STXKFdaY7LjFsA76EnZ6EnGdFPbodKHp89YAR7CG8cMHxhfzkBZc9jzQgTjXDsAkxO4JlwtbZcfRPGkAIFFVUlSD%2FVo7ZEfk1av75g8Z0jeTT%2FgSN2dpxBUUC05x8cGZhe%2BmQJfRxEigopXdzbhSF1mIhw%2FMUXxKym6UJNkptlTPOEVx9rGbnre9iRaev7P%2Bl8KaDZ7GdcwSNkPLfEBOkvW4nzXN8NCn2Pdp8RLiAJVlL5p2olKhvf2R7LCUyFADocI0ndW1r7X%2B4sZZk1RfkHmdW6G5ELeRPoe6vTmnAPBJR9adssMnX9hMc8B%2Ff7hyb1S7qj0WWR0wuFeSYvVJ8I%2BmlcGtg8Fbi4w4ZH8wAY6pgHqFXWtT5ji23ag9wgJ5j%2F3LtfvFOOYJPq9P0j%2BjasR5BAEL50%2B7r1RMBmnv2GMJfVGZbKBZ%2BDUEyWP6PqIl3ppxD8eTc2CCFxfJ9d3rELexYqIdsN5Tj4n8D9UIz41Wh32flwUl352%2BGK%2B5siBVTFitYpSyPFt4HvIeTvuVTRkKwjCv%2FS%2BNLCIKYbeGHwv7YaysNj1sR%2FQqgYTmzSrproPDkKfR1QT&X-Amz-Signature=d8bd8c2344bbfe74a60c006ed7eb3d72e1edcef65577386007568973c9e1ed8e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZHNUNQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDj5alzJGsSk2%2BXJzXIKIjJJt7p72xNSohf3Wxu%2FEEgAiAC9vhXpyhUGhWJuidkQrhx5B2pwkX34xTHNYMC4%2BgrxiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMInC55MjuAB7YS2fHKtwD8lYDXfRi7m%2B6wWFmlSzNEHB1AsBFagL5S0kbn3%2BMsgH0tCO3FmUItpCmOGH2UWCbYgVS%2BevqBcoOjC9qNgD4Oc0EZN6HjFRnxCuYl%2BXkRxoGsg8umncc76bwJCMrZDYiRh7qXgo7tGdw0PN9xlwL1N3SK4BmV0m7aP0%2B%2FPLlAZwj4YqZkUBLQxNymeau3m493UJ0SW2ghVuoXluB%2F4hXqbokn0XU%2FgeQSF8Mckh29sMyi8uKkxjnAZvc%2BWj4LFyibHVfEyKMLkcHFYRwtwS%2BmDv89STXKFdaY7LjFsA76EnZ6EnGdFPbodKHp89YAR7CG8cMHxhfzkBZc9jzQgTjXDsAkxO4JlwtbZcfRPGkAIFFVUlSD%2FVo7ZEfk1av75g8Z0jeTT%2FgSN2dpxBUUC05x8cGZhe%2BmQJfRxEigopXdzbhSF1mIhw%2FMUXxKym6UJNkptlTPOEVx9rGbnre9iRaev7P%2Bl8KaDZ7GdcwSNkPLfEBOkvW4nzXN8NCn2Pdp8RLiAJVlL5p2olKhvf2R7LCUyFADocI0ndW1r7X%2B4sZZk1RfkHmdW6G5ELeRPoe6vTmnAPBJR9adssMnX9hMc8B%2Ff7hyb1S7qj0WWR0wuFeSYvVJ8I%2BmlcGtg8Fbi4w4ZH8wAY6pgHqFXWtT5ji23ag9wgJ5j%2F3LtfvFOOYJPq9P0j%2BjasR5BAEL50%2B7r1RMBmnv2GMJfVGZbKBZ%2BDUEyWP6PqIl3ppxD8eTc2CCFxfJ9d3rELexYqIdsN5Tj4n8D9UIz41Wh32flwUl352%2BGK%2B5siBVTFitYpSyPFt4HvIeTvuVTRkKwjCv%2FS%2BNLCIKYbeGHwv7YaysNj1sR%2FQqgYTmzSrproPDkKfR1QT&X-Amz-Signature=38a02f3dcc4dbdb729f3445c2e9b5bfddbac7938e3864f5334fc500de954cc36&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZHNUNQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDj5alzJGsSk2%2BXJzXIKIjJJt7p72xNSohf3Wxu%2FEEgAiAC9vhXpyhUGhWJuidkQrhx5B2pwkX34xTHNYMC4%2BgrxiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMInC55MjuAB7YS2fHKtwD8lYDXfRi7m%2B6wWFmlSzNEHB1AsBFagL5S0kbn3%2BMsgH0tCO3FmUItpCmOGH2UWCbYgVS%2BevqBcoOjC9qNgD4Oc0EZN6HjFRnxCuYl%2BXkRxoGsg8umncc76bwJCMrZDYiRh7qXgo7tGdw0PN9xlwL1N3SK4BmV0m7aP0%2B%2FPLlAZwj4YqZkUBLQxNymeau3m493UJ0SW2ghVuoXluB%2F4hXqbokn0XU%2FgeQSF8Mckh29sMyi8uKkxjnAZvc%2BWj4LFyibHVfEyKMLkcHFYRwtwS%2BmDv89STXKFdaY7LjFsA76EnZ6EnGdFPbodKHp89YAR7CG8cMHxhfzkBZc9jzQgTjXDsAkxO4JlwtbZcfRPGkAIFFVUlSD%2FVo7ZEfk1av75g8Z0jeTT%2FgSN2dpxBUUC05x8cGZhe%2BmQJfRxEigopXdzbhSF1mIhw%2FMUXxKym6UJNkptlTPOEVx9rGbnre9iRaev7P%2Bl8KaDZ7GdcwSNkPLfEBOkvW4nzXN8NCn2Pdp8RLiAJVlL5p2olKhvf2R7LCUyFADocI0ndW1r7X%2B4sZZk1RfkHmdW6G5ELeRPoe6vTmnAPBJR9adssMnX9hMc8B%2Ff7hyb1S7qj0WWR0wuFeSYvVJ8I%2BmlcGtg8Fbi4w4ZH8wAY6pgHqFXWtT5ji23ag9wgJ5j%2F3LtfvFOOYJPq9P0j%2BjasR5BAEL50%2B7r1RMBmnv2GMJfVGZbKBZ%2BDUEyWP6PqIl3ppxD8eTc2CCFxfJ9d3rELexYqIdsN5Tj4n8D9UIz41Wh32flwUl352%2BGK%2B5siBVTFitYpSyPFt4HvIeTvuVTRkKwjCv%2FS%2BNLCIKYbeGHwv7YaysNj1sR%2FQqgYTmzSrproPDkKfR1QT&X-Amz-Signature=a8ec2944f8505fb5f26f1aabc3a8a3f6eb24fd6c1f5fe77bd8e10667a6c1cb16&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZHNUNQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDj5alzJGsSk2%2BXJzXIKIjJJt7p72xNSohf3Wxu%2FEEgAiAC9vhXpyhUGhWJuidkQrhx5B2pwkX34xTHNYMC4%2BgrxiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMInC55MjuAB7YS2fHKtwD8lYDXfRi7m%2B6wWFmlSzNEHB1AsBFagL5S0kbn3%2BMsgH0tCO3FmUItpCmOGH2UWCbYgVS%2BevqBcoOjC9qNgD4Oc0EZN6HjFRnxCuYl%2BXkRxoGsg8umncc76bwJCMrZDYiRh7qXgo7tGdw0PN9xlwL1N3SK4BmV0m7aP0%2B%2FPLlAZwj4YqZkUBLQxNymeau3m493UJ0SW2ghVuoXluB%2F4hXqbokn0XU%2FgeQSF8Mckh29sMyi8uKkxjnAZvc%2BWj4LFyibHVfEyKMLkcHFYRwtwS%2BmDv89STXKFdaY7LjFsA76EnZ6EnGdFPbodKHp89YAR7CG8cMHxhfzkBZc9jzQgTjXDsAkxO4JlwtbZcfRPGkAIFFVUlSD%2FVo7ZEfk1av75g8Z0jeTT%2FgSN2dpxBUUC05x8cGZhe%2BmQJfRxEigopXdzbhSF1mIhw%2FMUXxKym6UJNkptlTPOEVx9rGbnre9iRaev7P%2Bl8KaDZ7GdcwSNkPLfEBOkvW4nzXN8NCn2Pdp8RLiAJVlL5p2olKhvf2R7LCUyFADocI0ndW1r7X%2B4sZZk1RfkHmdW6G5ELeRPoe6vTmnAPBJR9adssMnX9hMc8B%2Ff7hyb1S7qj0WWR0wuFeSYvVJ8I%2BmlcGtg8Fbi4w4ZH8wAY6pgHqFXWtT5ji23ag9wgJ5j%2F3LtfvFOOYJPq9P0j%2BjasR5BAEL50%2B7r1RMBmnv2GMJfVGZbKBZ%2BDUEyWP6PqIl3ppxD8eTc2CCFxfJ9d3rELexYqIdsN5Tj4n8D9UIz41Wh32flwUl352%2BGK%2B5siBVTFitYpSyPFt4HvIeTvuVTRkKwjCv%2FS%2BNLCIKYbeGHwv7YaysNj1sR%2FQqgYTmzSrproPDkKfR1QT&X-Amz-Signature=f96e80e9af3336cbcbf263404fcdd8e5e4e07781254231cf31421c315779ae31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZHNUNQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDj5alzJGsSk2%2BXJzXIKIjJJt7p72xNSohf3Wxu%2FEEgAiAC9vhXpyhUGhWJuidkQrhx5B2pwkX34xTHNYMC4%2BgrxiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMInC55MjuAB7YS2fHKtwD8lYDXfRi7m%2B6wWFmlSzNEHB1AsBFagL5S0kbn3%2BMsgH0tCO3FmUItpCmOGH2UWCbYgVS%2BevqBcoOjC9qNgD4Oc0EZN6HjFRnxCuYl%2BXkRxoGsg8umncc76bwJCMrZDYiRh7qXgo7tGdw0PN9xlwL1N3SK4BmV0m7aP0%2B%2FPLlAZwj4YqZkUBLQxNymeau3m493UJ0SW2ghVuoXluB%2F4hXqbokn0XU%2FgeQSF8Mckh29sMyi8uKkxjnAZvc%2BWj4LFyibHVfEyKMLkcHFYRwtwS%2BmDv89STXKFdaY7LjFsA76EnZ6EnGdFPbodKHp89YAR7CG8cMHxhfzkBZc9jzQgTjXDsAkxO4JlwtbZcfRPGkAIFFVUlSD%2FVo7ZEfk1av75g8Z0jeTT%2FgSN2dpxBUUC05x8cGZhe%2BmQJfRxEigopXdzbhSF1mIhw%2FMUXxKym6UJNkptlTPOEVx9rGbnre9iRaev7P%2Bl8KaDZ7GdcwSNkPLfEBOkvW4nzXN8NCn2Pdp8RLiAJVlL5p2olKhvf2R7LCUyFADocI0ndW1r7X%2B4sZZk1RfkHmdW6G5ELeRPoe6vTmnAPBJR9adssMnX9hMc8B%2Ff7hyb1S7qj0WWR0wuFeSYvVJ8I%2BmlcGtg8Fbi4w4ZH8wAY6pgHqFXWtT5ji23ag9wgJ5j%2F3LtfvFOOYJPq9P0j%2BjasR5BAEL50%2B7r1RMBmnv2GMJfVGZbKBZ%2BDUEyWP6PqIl3ppxD8eTc2CCFxfJ9d3rELexYqIdsN5Tj4n8D9UIz41Wh32flwUl352%2BGK%2B5siBVTFitYpSyPFt4HvIeTvuVTRkKwjCv%2FS%2BNLCIKYbeGHwv7YaysNj1sR%2FQqgYTmzSrproPDkKfR1QT&X-Amz-Signature=3376c1d39a391014076f4e8e91442149daca737a0d1e9cd5de65c97b2654f19b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZHNUNQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDj5alzJGsSk2%2BXJzXIKIjJJt7p72xNSohf3Wxu%2FEEgAiAC9vhXpyhUGhWJuidkQrhx5B2pwkX34xTHNYMC4%2BgrxiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMInC55MjuAB7YS2fHKtwD8lYDXfRi7m%2B6wWFmlSzNEHB1AsBFagL5S0kbn3%2BMsgH0tCO3FmUItpCmOGH2UWCbYgVS%2BevqBcoOjC9qNgD4Oc0EZN6HjFRnxCuYl%2BXkRxoGsg8umncc76bwJCMrZDYiRh7qXgo7tGdw0PN9xlwL1N3SK4BmV0m7aP0%2B%2FPLlAZwj4YqZkUBLQxNymeau3m493UJ0SW2ghVuoXluB%2F4hXqbokn0XU%2FgeQSF8Mckh29sMyi8uKkxjnAZvc%2BWj4LFyibHVfEyKMLkcHFYRwtwS%2BmDv89STXKFdaY7LjFsA76EnZ6EnGdFPbodKHp89YAR7CG8cMHxhfzkBZc9jzQgTjXDsAkxO4JlwtbZcfRPGkAIFFVUlSD%2FVo7ZEfk1av75g8Z0jeTT%2FgSN2dpxBUUC05x8cGZhe%2BmQJfRxEigopXdzbhSF1mIhw%2FMUXxKym6UJNkptlTPOEVx9rGbnre9iRaev7P%2Bl8KaDZ7GdcwSNkPLfEBOkvW4nzXN8NCn2Pdp8RLiAJVlL5p2olKhvf2R7LCUyFADocI0ndW1r7X%2B4sZZk1RfkHmdW6G5ELeRPoe6vTmnAPBJR9adssMnX9hMc8B%2Ff7hyb1S7qj0WWR0wuFeSYvVJ8I%2BmlcGtg8Fbi4w4ZH8wAY6pgHqFXWtT5ji23ag9wgJ5j%2F3LtfvFOOYJPq9P0j%2BjasR5BAEL50%2B7r1RMBmnv2GMJfVGZbKBZ%2BDUEyWP6PqIl3ppxD8eTc2CCFxfJ9d3rELexYqIdsN5Tj4n8D9UIz41Wh32flwUl352%2BGK%2B5siBVTFitYpSyPFt4HvIeTvuVTRkKwjCv%2FS%2BNLCIKYbeGHwv7YaysNj1sR%2FQqgYTmzSrproPDkKfR1QT&X-Amz-Signature=4f80a883b965c4d92c2b2245f7d07ea731b2ad4dd9b73d2930d77593d01f87b5&X-Amz-SignedHeaders=host&x-id=GetObject)
