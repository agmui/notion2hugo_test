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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DKW44PN%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICg8aVWUNvKkXB37M5qRTWSy1XHwN2RXP6HDAjl5lZnaAiBTkXg7kZ2IYu2f0IJklkP5NUAtj2DNwnlGJvfsiugYLir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMWc7kAVJxBvCHrrWZKtwDeWkyrXTfSHzPfSkWT%2FECTez6iOL%2Bn1RgUketB8o7R7QvIb2c0vdssHHHEVLVG9YdGXwYY1qik%2F%2BXlQqxKPcTVFUebXu8G10EdjFAiI%2BJxa9Yen6lH1ZG0JokWD71v%2BBEjWyWHnAaWD2Z84H9ZrOoOizzrdMJGgVFASjBV5MHfeST2PHzJ9FgvO3nFIxN0kbQkjfPJ8toBylt%2BjwH1ESkXkALkwBZzkU2iXt5yFC%2FRp80olyQmndkuA5CxNSyF6r4K%2FatHXa9PhaQO5%2FvdtOWhyDFcLSnBZ4sqGyCA1QOJFP6QQPiM8NkC0DEszpQJryG%2F49QdUvQCts1Wc8t3c%2F9kW2YlDo3DEQqCL2l6j0CGYBKeLqO8nobAV9mjz3EFpFuR%2FrxE2XaMikDIF0B1spJjJ0bpTva2MkdYh%2FzS5gyY554c50gFktd9KvsmPIHXlUtdv4idNA5fcecUnKlkRSm%2BijTA1rveq3%2F6fcp32Vgp9DnShuLIP%2B6mrs772xMsFJoxg8Ds62IqlL1Wr67LV2KAm7pm%2BuOXM0L03CegoM3B%2FPyQlG2Lp1RNY6E6I8aye0i9OU%2FCYjPQd0y3pyHN6q0MAQ9DDZQxdCIhRYkFbC2V4RthzR7zehyt8GTojAw87SfvwY6pgG%2F9BNxaXVv%2BYVyBSuGaPN9h9RwzuYJi%2FRD8lRql7JWDXqJPlWEaCcIDhQhOQ%2B1nhvZStnfYp6fweT2WrA2gV%2BrjCKGEHaVUHawZfnmSdX3v5c92t5uFflWE885c870%2B1HdPHtJqrjZrmC85yPkzOCya20313mFoOcOzA0llq2SpvHOIOuPjtCJ9xrYNyx8j1SrgGMH2XD%2FQOIpQeMqqIyFBuv54Gmt&X-Amz-Signature=6737d8c04e594f1c8bc5de3fb1dc8ca49828e26ae85adbf3892cc786dba30eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DKW44PN%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICg8aVWUNvKkXB37M5qRTWSy1XHwN2RXP6HDAjl5lZnaAiBTkXg7kZ2IYu2f0IJklkP5NUAtj2DNwnlGJvfsiugYLir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMWc7kAVJxBvCHrrWZKtwDeWkyrXTfSHzPfSkWT%2FECTez6iOL%2Bn1RgUketB8o7R7QvIb2c0vdssHHHEVLVG9YdGXwYY1qik%2F%2BXlQqxKPcTVFUebXu8G10EdjFAiI%2BJxa9Yen6lH1ZG0JokWD71v%2BBEjWyWHnAaWD2Z84H9ZrOoOizzrdMJGgVFASjBV5MHfeST2PHzJ9FgvO3nFIxN0kbQkjfPJ8toBylt%2BjwH1ESkXkALkwBZzkU2iXt5yFC%2FRp80olyQmndkuA5CxNSyF6r4K%2FatHXa9PhaQO5%2FvdtOWhyDFcLSnBZ4sqGyCA1QOJFP6QQPiM8NkC0DEszpQJryG%2F49QdUvQCts1Wc8t3c%2F9kW2YlDo3DEQqCL2l6j0CGYBKeLqO8nobAV9mjz3EFpFuR%2FrxE2XaMikDIF0B1spJjJ0bpTva2MkdYh%2FzS5gyY554c50gFktd9KvsmPIHXlUtdv4idNA5fcecUnKlkRSm%2BijTA1rveq3%2F6fcp32Vgp9DnShuLIP%2B6mrs772xMsFJoxg8Ds62IqlL1Wr67LV2KAm7pm%2BuOXM0L03CegoM3B%2FPyQlG2Lp1RNY6E6I8aye0i9OU%2FCYjPQd0y3pyHN6q0MAQ9DDZQxdCIhRYkFbC2V4RthzR7zehyt8GTojAw87SfvwY6pgG%2F9BNxaXVv%2BYVyBSuGaPN9h9RwzuYJi%2FRD8lRql7JWDXqJPlWEaCcIDhQhOQ%2B1nhvZStnfYp6fweT2WrA2gV%2BrjCKGEHaVUHawZfnmSdX3v5c92t5uFflWE885c870%2B1HdPHtJqrjZrmC85yPkzOCya20313mFoOcOzA0llq2SpvHOIOuPjtCJ9xrYNyx8j1SrgGMH2XD%2FQOIpQeMqqIyFBuv54Gmt&X-Amz-Signature=3a2e99e969b154367ec35ac82d34e936f25061f959a53ebdb3b396d5ba4ae9a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DKW44PN%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICg8aVWUNvKkXB37M5qRTWSy1XHwN2RXP6HDAjl5lZnaAiBTkXg7kZ2IYu2f0IJklkP5NUAtj2DNwnlGJvfsiugYLir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMWc7kAVJxBvCHrrWZKtwDeWkyrXTfSHzPfSkWT%2FECTez6iOL%2Bn1RgUketB8o7R7QvIb2c0vdssHHHEVLVG9YdGXwYY1qik%2F%2BXlQqxKPcTVFUebXu8G10EdjFAiI%2BJxa9Yen6lH1ZG0JokWD71v%2BBEjWyWHnAaWD2Z84H9ZrOoOizzrdMJGgVFASjBV5MHfeST2PHzJ9FgvO3nFIxN0kbQkjfPJ8toBylt%2BjwH1ESkXkALkwBZzkU2iXt5yFC%2FRp80olyQmndkuA5CxNSyF6r4K%2FatHXa9PhaQO5%2FvdtOWhyDFcLSnBZ4sqGyCA1QOJFP6QQPiM8NkC0DEszpQJryG%2F49QdUvQCts1Wc8t3c%2F9kW2YlDo3DEQqCL2l6j0CGYBKeLqO8nobAV9mjz3EFpFuR%2FrxE2XaMikDIF0B1spJjJ0bpTva2MkdYh%2FzS5gyY554c50gFktd9KvsmPIHXlUtdv4idNA5fcecUnKlkRSm%2BijTA1rveq3%2F6fcp32Vgp9DnShuLIP%2B6mrs772xMsFJoxg8Ds62IqlL1Wr67LV2KAm7pm%2BuOXM0L03CegoM3B%2FPyQlG2Lp1RNY6E6I8aye0i9OU%2FCYjPQd0y3pyHN6q0MAQ9DDZQxdCIhRYkFbC2V4RthzR7zehyt8GTojAw87SfvwY6pgG%2F9BNxaXVv%2BYVyBSuGaPN9h9RwzuYJi%2FRD8lRql7JWDXqJPlWEaCcIDhQhOQ%2B1nhvZStnfYp6fweT2WrA2gV%2BrjCKGEHaVUHawZfnmSdX3v5c92t5uFflWE885c870%2B1HdPHtJqrjZrmC85yPkzOCya20313mFoOcOzA0llq2SpvHOIOuPjtCJ9xrYNyx8j1SrgGMH2XD%2FQOIpQeMqqIyFBuv54Gmt&X-Amz-Signature=2434880f53a9b89492704955e85f03e4f9b868dfaddfa5c2dbb4162e38315149&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DKW44PN%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICg8aVWUNvKkXB37M5qRTWSy1XHwN2RXP6HDAjl5lZnaAiBTkXg7kZ2IYu2f0IJklkP5NUAtj2DNwnlGJvfsiugYLir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMWc7kAVJxBvCHrrWZKtwDeWkyrXTfSHzPfSkWT%2FECTez6iOL%2Bn1RgUketB8o7R7QvIb2c0vdssHHHEVLVG9YdGXwYY1qik%2F%2BXlQqxKPcTVFUebXu8G10EdjFAiI%2BJxa9Yen6lH1ZG0JokWD71v%2BBEjWyWHnAaWD2Z84H9ZrOoOizzrdMJGgVFASjBV5MHfeST2PHzJ9FgvO3nFIxN0kbQkjfPJ8toBylt%2BjwH1ESkXkALkwBZzkU2iXt5yFC%2FRp80olyQmndkuA5CxNSyF6r4K%2FatHXa9PhaQO5%2FvdtOWhyDFcLSnBZ4sqGyCA1QOJFP6QQPiM8NkC0DEszpQJryG%2F49QdUvQCts1Wc8t3c%2F9kW2YlDo3DEQqCL2l6j0CGYBKeLqO8nobAV9mjz3EFpFuR%2FrxE2XaMikDIF0B1spJjJ0bpTva2MkdYh%2FzS5gyY554c50gFktd9KvsmPIHXlUtdv4idNA5fcecUnKlkRSm%2BijTA1rveq3%2F6fcp32Vgp9DnShuLIP%2B6mrs772xMsFJoxg8Ds62IqlL1Wr67LV2KAm7pm%2BuOXM0L03CegoM3B%2FPyQlG2Lp1RNY6E6I8aye0i9OU%2FCYjPQd0y3pyHN6q0MAQ9DDZQxdCIhRYkFbC2V4RthzR7zehyt8GTojAw87SfvwY6pgG%2F9BNxaXVv%2BYVyBSuGaPN9h9RwzuYJi%2FRD8lRql7JWDXqJPlWEaCcIDhQhOQ%2B1nhvZStnfYp6fweT2WrA2gV%2BrjCKGEHaVUHawZfnmSdX3v5c92t5uFflWE885c870%2B1HdPHtJqrjZrmC85yPkzOCya20313mFoOcOzA0llq2SpvHOIOuPjtCJ9xrYNyx8j1SrgGMH2XD%2FQOIpQeMqqIyFBuv54Gmt&X-Amz-Signature=d7c5d8cb960a89f3562776100427d8ec3798779741a7ae2ed07a5a61e5eae5b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DKW44PN%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICg8aVWUNvKkXB37M5qRTWSy1XHwN2RXP6HDAjl5lZnaAiBTkXg7kZ2IYu2f0IJklkP5NUAtj2DNwnlGJvfsiugYLir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMWc7kAVJxBvCHrrWZKtwDeWkyrXTfSHzPfSkWT%2FECTez6iOL%2Bn1RgUketB8o7R7QvIb2c0vdssHHHEVLVG9YdGXwYY1qik%2F%2BXlQqxKPcTVFUebXu8G10EdjFAiI%2BJxa9Yen6lH1ZG0JokWD71v%2BBEjWyWHnAaWD2Z84H9ZrOoOizzrdMJGgVFASjBV5MHfeST2PHzJ9FgvO3nFIxN0kbQkjfPJ8toBylt%2BjwH1ESkXkALkwBZzkU2iXt5yFC%2FRp80olyQmndkuA5CxNSyF6r4K%2FatHXa9PhaQO5%2FvdtOWhyDFcLSnBZ4sqGyCA1QOJFP6QQPiM8NkC0DEszpQJryG%2F49QdUvQCts1Wc8t3c%2F9kW2YlDo3DEQqCL2l6j0CGYBKeLqO8nobAV9mjz3EFpFuR%2FrxE2XaMikDIF0B1spJjJ0bpTva2MkdYh%2FzS5gyY554c50gFktd9KvsmPIHXlUtdv4idNA5fcecUnKlkRSm%2BijTA1rveq3%2F6fcp32Vgp9DnShuLIP%2B6mrs772xMsFJoxg8Ds62IqlL1Wr67LV2KAm7pm%2BuOXM0L03CegoM3B%2FPyQlG2Lp1RNY6E6I8aye0i9OU%2FCYjPQd0y3pyHN6q0MAQ9DDZQxdCIhRYkFbC2V4RthzR7zehyt8GTojAw87SfvwY6pgG%2F9BNxaXVv%2BYVyBSuGaPN9h9RwzuYJi%2FRD8lRql7JWDXqJPlWEaCcIDhQhOQ%2B1nhvZStnfYp6fweT2WrA2gV%2BrjCKGEHaVUHawZfnmSdX3v5c92t5uFflWE885c870%2B1HdPHtJqrjZrmC85yPkzOCya20313mFoOcOzA0llq2SpvHOIOuPjtCJ9xrYNyx8j1SrgGMH2XD%2FQOIpQeMqqIyFBuv54Gmt&X-Amz-Signature=a343adec0468c55f1d56bf0492f9508649a11de5ea459a3865cbdf81f29cd562&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DKW44PN%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICg8aVWUNvKkXB37M5qRTWSy1XHwN2RXP6HDAjl5lZnaAiBTkXg7kZ2IYu2f0IJklkP5NUAtj2DNwnlGJvfsiugYLir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMWc7kAVJxBvCHrrWZKtwDeWkyrXTfSHzPfSkWT%2FECTez6iOL%2Bn1RgUketB8o7R7QvIb2c0vdssHHHEVLVG9YdGXwYY1qik%2F%2BXlQqxKPcTVFUebXu8G10EdjFAiI%2BJxa9Yen6lH1ZG0JokWD71v%2BBEjWyWHnAaWD2Z84H9ZrOoOizzrdMJGgVFASjBV5MHfeST2PHzJ9FgvO3nFIxN0kbQkjfPJ8toBylt%2BjwH1ESkXkALkwBZzkU2iXt5yFC%2FRp80olyQmndkuA5CxNSyF6r4K%2FatHXa9PhaQO5%2FvdtOWhyDFcLSnBZ4sqGyCA1QOJFP6QQPiM8NkC0DEszpQJryG%2F49QdUvQCts1Wc8t3c%2F9kW2YlDo3DEQqCL2l6j0CGYBKeLqO8nobAV9mjz3EFpFuR%2FrxE2XaMikDIF0B1spJjJ0bpTva2MkdYh%2FzS5gyY554c50gFktd9KvsmPIHXlUtdv4idNA5fcecUnKlkRSm%2BijTA1rveq3%2F6fcp32Vgp9DnShuLIP%2B6mrs772xMsFJoxg8Ds62IqlL1Wr67LV2KAm7pm%2BuOXM0L03CegoM3B%2FPyQlG2Lp1RNY6E6I8aye0i9OU%2FCYjPQd0y3pyHN6q0MAQ9DDZQxdCIhRYkFbC2V4RthzR7zehyt8GTojAw87SfvwY6pgG%2F9BNxaXVv%2BYVyBSuGaPN9h9RwzuYJi%2FRD8lRql7JWDXqJPlWEaCcIDhQhOQ%2B1nhvZStnfYp6fweT2WrA2gV%2BrjCKGEHaVUHawZfnmSdX3v5c92t5uFflWE885c870%2B1HdPHtJqrjZrmC85yPkzOCya20313mFoOcOzA0llq2SpvHOIOuPjtCJ9xrYNyx8j1SrgGMH2XD%2FQOIpQeMqqIyFBuv54Gmt&X-Amz-Signature=b627db6218ff8813e821a992e872229923c1291c2258dde1ab8c7bfe737f26a1&X-Amz-SignedHeaders=host&x-id=GetObject)
