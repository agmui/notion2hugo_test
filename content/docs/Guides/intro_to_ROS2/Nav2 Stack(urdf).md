---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJYTDQV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQE53hFFndGKMPSXCUqI75vQql90nHOA4PmkubmGnVrQIgeleGoqhwCfFoZ0MjLOLiepMWfKOa1ktBDS1hjpmCLwcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMamfjLeUQhU8G9UyrcA55nCHo9xHzW1gzDFPIkAB8z%2Fk%2FO9lqEWis0aQp0bPXGy9SyC%2F6NX8a2wVb5b2RNrCuxlfIcGyE%2Fi32aF%2Fvra4E%2BVEd1IqvrikN%2FHEscUkvbes0Qy%2BfBGpae7VGjqiaPOr81uPifAyjNSPR5lEjldt131MPqXyQuMEsA0n9yVxQSIYlhus3U4Nmyant6hFq1wwYWIrOOkMOOSlQFPdyRu%2FuZGaGKK4Qh8X0x13BFwuWiVGzR2EYmB5J3UQCaPQW6TB%2BCIcbyYMcQzC6PmFzPsyKXIrSoLVKUy9swhMM%2BpBMO2fudrVSNmTpsbE%2FobhYDumDTIiWy9rAE%2FKgIIsbXwpy1%2B7S5ExYDDc8dtgu53muIi78jmM7zLk3ohgQL9AVhc0Zv%2FMKSZyVn3X%2Bp06%2B0j%2FyGOEc%2BmN8tbbOuk1VYtoqk3xvh6xzR%2BEovrDTiUrVW2C9ptLaYNqOQdO0p5%2B%2FzeslcKZ%2BWF0cTFG8Gr8PTSfq8NpVfIzUEi4J5Wsrg5gLsHV4DNe7%2BB5MXgnEIFxG6BK6zIeOv5dKEOW%2FUhm6lAEz%2F%2BCAI7pNbzm0odaENMYk6AaPU9aDzri7PvCqp8ZV5IG%2BJKqF%2FmADSowVAeidZ9G7KeoBGZnflajdG9QegMOnP67wGOqUBn30fltFJ01cC46g%2F2u6wga8vn9%2FE5X9uJMIEa6EgIYeiK1Zu%2BgjJqNFUU5Q0z5optu2Rng3intlYtHq4Wv4WbJIlk5HCaTWClwtVSB0Bkw917BSDKNnsKnAgr9y26wGkJE5PA1f1WYc2yrsGLvK4HdqDTWIqmbIWZu3u7QWpJJa9OMGEikFNd%2FZTQu4LUbCm1uhrS3Yyu69RW7ZV6Yw7gM7%2B60Hr&X-Amz-Signature=bbab31cd3d524abc103a5564a5fbfcd3efc1101f4960180595a067f880df9762&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJYTDQV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQE53hFFndGKMPSXCUqI75vQql90nHOA4PmkubmGnVrQIgeleGoqhwCfFoZ0MjLOLiepMWfKOa1ktBDS1hjpmCLwcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMamfjLeUQhU8G9UyrcA55nCHo9xHzW1gzDFPIkAB8z%2Fk%2FO9lqEWis0aQp0bPXGy9SyC%2F6NX8a2wVb5b2RNrCuxlfIcGyE%2Fi32aF%2Fvra4E%2BVEd1IqvrikN%2FHEscUkvbes0Qy%2BfBGpae7VGjqiaPOr81uPifAyjNSPR5lEjldt131MPqXyQuMEsA0n9yVxQSIYlhus3U4Nmyant6hFq1wwYWIrOOkMOOSlQFPdyRu%2FuZGaGKK4Qh8X0x13BFwuWiVGzR2EYmB5J3UQCaPQW6TB%2BCIcbyYMcQzC6PmFzPsyKXIrSoLVKUy9swhMM%2BpBMO2fudrVSNmTpsbE%2FobhYDumDTIiWy9rAE%2FKgIIsbXwpy1%2B7S5ExYDDc8dtgu53muIi78jmM7zLk3ohgQL9AVhc0Zv%2FMKSZyVn3X%2Bp06%2B0j%2FyGOEc%2BmN8tbbOuk1VYtoqk3xvh6xzR%2BEovrDTiUrVW2C9ptLaYNqOQdO0p5%2B%2FzeslcKZ%2BWF0cTFG8Gr8PTSfq8NpVfIzUEi4J5Wsrg5gLsHV4DNe7%2BB5MXgnEIFxG6BK6zIeOv5dKEOW%2FUhm6lAEz%2F%2BCAI7pNbzm0odaENMYk6AaPU9aDzri7PvCqp8ZV5IG%2BJKqF%2FmADSowVAeidZ9G7KeoBGZnflajdG9QegMOnP67wGOqUBn30fltFJ01cC46g%2F2u6wga8vn9%2FE5X9uJMIEa6EgIYeiK1Zu%2BgjJqNFUU5Q0z5optu2Rng3intlYtHq4Wv4WbJIlk5HCaTWClwtVSB0Bkw917BSDKNnsKnAgr9y26wGkJE5PA1f1WYc2yrsGLvK4HdqDTWIqmbIWZu3u7QWpJJa9OMGEikFNd%2FZTQu4LUbCm1uhrS3Yyu69RW7ZV6Yw7gM7%2B60Hr&X-Amz-Signature=e0d9863a21f9ce725af0c23fe71a00533d5d464a324993c680213bc19c274341&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJYTDQV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQE53hFFndGKMPSXCUqI75vQql90nHOA4PmkubmGnVrQIgeleGoqhwCfFoZ0MjLOLiepMWfKOa1ktBDS1hjpmCLwcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMamfjLeUQhU8G9UyrcA55nCHo9xHzW1gzDFPIkAB8z%2Fk%2FO9lqEWis0aQp0bPXGy9SyC%2F6NX8a2wVb5b2RNrCuxlfIcGyE%2Fi32aF%2Fvra4E%2BVEd1IqvrikN%2FHEscUkvbes0Qy%2BfBGpae7VGjqiaPOr81uPifAyjNSPR5lEjldt131MPqXyQuMEsA0n9yVxQSIYlhus3U4Nmyant6hFq1wwYWIrOOkMOOSlQFPdyRu%2FuZGaGKK4Qh8X0x13BFwuWiVGzR2EYmB5J3UQCaPQW6TB%2BCIcbyYMcQzC6PmFzPsyKXIrSoLVKUy9swhMM%2BpBMO2fudrVSNmTpsbE%2FobhYDumDTIiWy9rAE%2FKgIIsbXwpy1%2B7S5ExYDDc8dtgu53muIi78jmM7zLk3ohgQL9AVhc0Zv%2FMKSZyVn3X%2Bp06%2B0j%2FyGOEc%2BmN8tbbOuk1VYtoqk3xvh6xzR%2BEovrDTiUrVW2C9ptLaYNqOQdO0p5%2B%2FzeslcKZ%2BWF0cTFG8Gr8PTSfq8NpVfIzUEi4J5Wsrg5gLsHV4DNe7%2BB5MXgnEIFxG6BK6zIeOv5dKEOW%2FUhm6lAEz%2F%2BCAI7pNbzm0odaENMYk6AaPU9aDzri7PvCqp8ZV5IG%2BJKqF%2FmADSowVAeidZ9G7KeoBGZnflajdG9QegMOnP67wGOqUBn30fltFJ01cC46g%2F2u6wga8vn9%2FE5X9uJMIEa6EgIYeiK1Zu%2BgjJqNFUU5Q0z5optu2Rng3intlYtHq4Wv4WbJIlk5HCaTWClwtVSB0Bkw917BSDKNnsKnAgr9y26wGkJE5PA1f1WYc2yrsGLvK4HdqDTWIqmbIWZu3u7QWpJJa9OMGEikFNd%2FZTQu4LUbCm1uhrS3Yyu69RW7ZV6Yw7gM7%2B60Hr&X-Amz-Signature=50e0082fff9286702f600261dcabf71ad23c20dde6dd6ce3e605f0719464c04f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJYTDQV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQE53hFFndGKMPSXCUqI75vQql90nHOA4PmkubmGnVrQIgeleGoqhwCfFoZ0MjLOLiepMWfKOa1ktBDS1hjpmCLwcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMamfjLeUQhU8G9UyrcA55nCHo9xHzW1gzDFPIkAB8z%2Fk%2FO9lqEWis0aQp0bPXGy9SyC%2F6NX8a2wVb5b2RNrCuxlfIcGyE%2Fi32aF%2Fvra4E%2BVEd1IqvrikN%2FHEscUkvbes0Qy%2BfBGpae7VGjqiaPOr81uPifAyjNSPR5lEjldt131MPqXyQuMEsA0n9yVxQSIYlhus3U4Nmyant6hFq1wwYWIrOOkMOOSlQFPdyRu%2FuZGaGKK4Qh8X0x13BFwuWiVGzR2EYmB5J3UQCaPQW6TB%2BCIcbyYMcQzC6PmFzPsyKXIrSoLVKUy9swhMM%2BpBMO2fudrVSNmTpsbE%2FobhYDumDTIiWy9rAE%2FKgIIsbXwpy1%2B7S5ExYDDc8dtgu53muIi78jmM7zLk3ohgQL9AVhc0Zv%2FMKSZyVn3X%2Bp06%2B0j%2FyGOEc%2BmN8tbbOuk1VYtoqk3xvh6xzR%2BEovrDTiUrVW2C9ptLaYNqOQdO0p5%2B%2FzeslcKZ%2BWF0cTFG8Gr8PTSfq8NpVfIzUEi4J5Wsrg5gLsHV4DNe7%2BB5MXgnEIFxG6BK6zIeOv5dKEOW%2FUhm6lAEz%2F%2BCAI7pNbzm0odaENMYk6AaPU9aDzri7PvCqp8ZV5IG%2BJKqF%2FmADSowVAeidZ9G7KeoBGZnflajdG9QegMOnP67wGOqUBn30fltFJ01cC46g%2F2u6wga8vn9%2FE5X9uJMIEa6EgIYeiK1Zu%2BgjJqNFUU5Q0z5optu2Rng3intlYtHq4Wv4WbJIlk5HCaTWClwtVSB0Bkw917BSDKNnsKnAgr9y26wGkJE5PA1f1WYc2yrsGLvK4HdqDTWIqmbIWZu3u7QWpJJa9OMGEikFNd%2FZTQu4LUbCm1uhrS3Yyu69RW7ZV6Yw7gM7%2B60Hr&X-Amz-Signature=f0cdefbc7d692e06f4dca8ac8aade06317b39614f4af1c1f6a66c62cd91aac6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJYTDQV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQE53hFFndGKMPSXCUqI75vQql90nHOA4PmkubmGnVrQIgeleGoqhwCfFoZ0MjLOLiepMWfKOa1ktBDS1hjpmCLwcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMamfjLeUQhU8G9UyrcA55nCHo9xHzW1gzDFPIkAB8z%2Fk%2FO9lqEWis0aQp0bPXGy9SyC%2F6NX8a2wVb5b2RNrCuxlfIcGyE%2Fi32aF%2Fvra4E%2BVEd1IqvrikN%2FHEscUkvbes0Qy%2BfBGpae7VGjqiaPOr81uPifAyjNSPR5lEjldt131MPqXyQuMEsA0n9yVxQSIYlhus3U4Nmyant6hFq1wwYWIrOOkMOOSlQFPdyRu%2FuZGaGKK4Qh8X0x13BFwuWiVGzR2EYmB5J3UQCaPQW6TB%2BCIcbyYMcQzC6PmFzPsyKXIrSoLVKUy9swhMM%2BpBMO2fudrVSNmTpsbE%2FobhYDumDTIiWy9rAE%2FKgIIsbXwpy1%2B7S5ExYDDc8dtgu53muIi78jmM7zLk3ohgQL9AVhc0Zv%2FMKSZyVn3X%2Bp06%2B0j%2FyGOEc%2BmN8tbbOuk1VYtoqk3xvh6xzR%2BEovrDTiUrVW2C9ptLaYNqOQdO0p5%2B%2FzeslcKZ%2BWF0cTFG8Gr8PTSfq8NpVfIzUEi4J5Wsrg5gLsHV4DNe7%2BB5MXgnEIFxG6BK6zIeOv5dKEOW%2FUhm6lAEz%2F%2BCAI7pNbzm0odaENMYk6AaPU9aDzri7PvCqp8ZV5IG%2BJKqF%2FmADSowVAeidZ9G7KeoBGZnflajdG9QegMOnP67wGOqUBn30fltFJ01cC46g%2F2u6wga8vn9%2FE5X9uJMIEa6EgIYeiK1Zu%2BgjJqNFUU5Q0z5optu2Rng3intlYtHq4Wv4WbJIlk5HCaTWClwtVSB0Bkw917BSDKNnsKnAgr9y26wGkJE5PA1f1WYc2yrsGLvK4HdqDTWIqmbIWZu3u7QWpJJa9OMGEikFNd%2FZTQu4LUbCm1uhrS3Yyu69RW7ZV6Yw7gM7%2B60Hr&X-Amz-Signature=f9ca4b26e357fd9f682ccdfa2c0021fa909b03a779bcc3144739a47b3f4642f8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJYTDQV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQE53hFFndGKMPSXCUqI75vQql90nHOA4PmkubmGnVrQIgeleGoqhwCfFoZ0MjLOLiepMWfKOa1ktBDS1hjpmCLwcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMamfjLeUQhU8G9UyrcA55nCHo9xHzW1gzDFPIkAB8z%2Fk%2FO9lqEWis0aQp0bPXGy9SyC%2F6NX8a2wVb5b2RNrCuxlfIcGyE%2Fi32aF%2Fvra4E%2BVEd1IqvrikN%2FHEscUkvbes0Qy%2BfBGpae7VGjqiaPOr81uPifAyjNSPR5lEjldt131MPqXyQuMEsA0n9yVxQSIYlhus3U4Nmyant6hFq1wwYWIrOOkMOOSlQFPdyRu%2FuZGaGKK4Qh8X0x13BFwuWiVGzR2EYmB5J3UQCaPQW6TB%2BCIcbyYMcQzC6PmFzPsyKXIrSoLVKUy9swhMM%2BpBMO2fudrVSNmTpsbE%2FobhYDumDTIiWy9rAE%2FKgIIsbXwpy1%2B7S5ExYDDc8dtgu53muIi78jmM7zLk3ohgQL9AVhc0Zv%2FMKSZyVn3X%2Bp06%2B0j%2FyGOEc%2BmN8tbbOuk1VYtoqk3xvh6xzR%2BEovrDTiUrVW2C9ptLaYNqOQdO0p5%2B%2FzeslcKZ%2BWF0cTFG8Gr8PTSfq8NpVfIzUEi4J5Wsrg5gLsHV4DNe7%2BB5MXgnEIFxG6BK6zIeOv5dKEOW%2FUhm6lAEz%2F%2BCAI7pNbzm0odaENMYk6AaPU9aDzri7PvCqp8ZV5IG%2BJKqF%2FmADSowVAeidZ9G7KeoBGZnflajdG9QegMOnP67wGOqUBn30fltFJ01cC46g%2F2u6wga8vn9%2FE5X9uJMIEa6EgIYeiK1Zu%2BgjJqNFUU5Q0z5optu2Rng3intlYtHq4Wv4WbJIlk5HCaTWClwtVSB0Bkw917BSDKNnsKnAgr9y26wGkJE5PA1f1WYc2yrsGLvK4HdqDTWIqmbIWZu3u7QWpJJa9OMGEikFNd%2FZTQu4LUbCm1uhrS3Yyu69RW7ZV6Yw7gM7%2B60Hr&X-Amz-Signature=bfd1d393b8796645e21dd5bf6faed3b0e39be73ce09f9bcca073b033212139b7&X-Amz-SignedHeaders=host&x-id=GetObject)
