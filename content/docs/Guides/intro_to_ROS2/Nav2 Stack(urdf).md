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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4MSESL6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLfZ%2BdLD37VDPvc58rxYabqiHN%2Fn0PzuPDqqxhzNOY7wIhAMmpbc7kU7jkmFSlYpOBEPvlG6o5z9DGN%2FzxbwtOrzeoKv8DCHIQABoMNjM3NDIzMTgzODA1IgydJU%2FlnsdpowlyXWIq3AO65CTvB8vHWQoWP45NfCi3BqmokPWixil7%2BZuXDpdKha3Eim%2FSPpGQ%2BWAUhkJJjCXYv51cLOA6CzDQL%2FOXZlaDhEzuxo8bUVXnQ7xJ2RdjFGxSTLe8jinfiujLB8paNQ%2BaX0scU13dkGWUm3XR3z3Vt8K7xBVNTDxRR5LIUur0I%2B1c9QMrhTBZsBsuXVAvE7UuXPJHV0fbEc8l%2FcKQRoiSvIhyQ0eph5R2zrSmn2kgbh1AeVUr%2Fgnh9I0aYfkZz8bWQRFVDDEsDGjyAGphJpGqbnb0jOpIZHsj5P7ZszfrxkYTypU9G14apBnkaDg2TTQ0%2FaJa7IWazsg0e8SF4ewhZt1he882qchtWiQcYgicIHivCoabYRjL3HTm%2FTM19l%2B0mEHHJ5yVYDF8DXLy4ub4%2Bffg3MzZGLJU8NQ%2B0VdW4LJAnI878RFkqV7uUj1%2BpzXEBQ3NP8RhhmOfwSaA%2BL3ej5CwNu6raltTdQF0Gj5C2X0%2FxOAr2Gzw%2FyTMuNbAv5vWVMGrTs1T11DV0vwGv0e0fJZgjh6S6dHyLwkn1eeYeDWlHbFRWEOjS7WDJT3Y6ejT5c9zsham7q2tFNuS3Wu%2FJUXvJBdEmSKkflwAD63xZnQojWhhA2WC2f9E4zD13%2FHABjqkAQiFrR19Tjl6GQAlPD9SnLmBAiTerzzt9y4PqvthvYv9XFrzikhqeYSL3D4txOIuBPwtMUCnFaRbriaKeSS2TpThIgIZQdU5YfTKoGseJUD7G7YPsDSJ4gQmzmZTRYddhAcTbQ%2FGXbVSqJe0SAazkK%2FV5DY%2Fd8v7Z01u1Ejr90L7SsaSUJgZJeGRunDipLKz18aHWHToNuCOPtfPX1zjzLvoA5Wi&X-Amz-Signature=4488883fbeaa823b3185172372a9b079f3d66f1966167a8a751af53be68b207b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4MSESL6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLfZ%2BdLD37VDPvc58rxYabqiHN%2Fn0PzuPDqqxhzNOY7wIhAMmpbc7kU7jkmFSlYpOBEPvlG6o5z9DGN%2FzxbwtOrzeoKv8DCHIQABoMNjM3NDIzMTgzODA1IgydJU%2FlnsdpowlyXWIq3AO65CTvB8vHWQoWP45NfCi3BqmokPWixil7%2BZuXDpdKha3Eim%2FSPpGQ%2BWAUhkJJjCXYv51cLOA6CzDQL%2FOXZlaDhEzuxo8bUVXnQ7xJ2RdjFGxSTLe8jinfiujLB8paNQ%2BaX0scU13dkGWUm3XR3z3Vt8K7xBVNTDxRR5LIUur0I%2B1c9QMrhTBZsBsuXVAvE7UuXPJHV0fbEc8l%2FcKQRoiSvIhyQ0eph5R2zrSmn2kgbh1AeVUr%2Fgnh9I0aYfkZz8bWQRFVDDEsDGjyAGphJpGqbnb0jOpIZHsj5P7ZszfrxkYTypU9G14apBnkaDg2TTQ0%2FaJa7IWazsg0e8SF4ewhZt1he882qchtWiQcYgicIHivCoabYRjL3HTm%2FTM19l%2B0mEHHJ5yVYDF8DXLy4ub4%2Bffg3MzZGLJU8NQ%2B0VdW4LJAnI878RFkqV7uUj1%2BpzXEBQ3NP8RhhmOfwSaA%2BL3ej5CwNu6raltTdQF0Gj5C2X0%2FxOAr2Gzw%2FyTMuNbAv5vWVMGrTs1T11DV0vwGv0e0fJZgjh6S6dHyLwkn1eeYeDWlHbFRWEOjS7WDJT3Y6ejT5c9zsham7q2tFNuS3Wu%2FJUXvJBdEmSKkflwAD63xZnQojWhhA2WC2f9E4zD13%2FHABjqkAQiFrR19Tjl6GQAlPD9SnLmBAiTerzzt9y4PqvthvYv9XFrzikhqeYSL3D4txOIuBPwtMUCnFaRbriaKeSS2TpThIgIZQdU5YfTKoGseJUD7G7YPsDSJ4gQmzmZTRYddhAcTbQ%2FGXbVSqJe0SAazkK%2FV5DY%2Fd8v7Z01u1Ejr90L7SsaSUJgZJeGRunDipLKz18aHWHToNuCOPtfPX1zjzLvoA5Wi&X-Amz-Signature=195058c288da6f424f3139c76baf48dddaa8fe97578f2c18280cd2e0997b25e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4MSESL6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLfZ%2BdLD37VDPvc58rxYabqiHN%2Fn0PzuPDqqxhzNOY7wIhAMmpbc7kU7jkmFSlYpOBEPvlG6o5z9DGN%2FzxbwtOrzeoKv8DCHIQABoMNjM3NDIzMTgzODA1IgydJU%2FlnsdpowlyXWIq3AO65CTvB8vHWQoWP45NfCi3BqmokPWixil7%2BZuXDpdKha3Eim%2FSPpGQ%2BWAUhkJJjCXYv51cLOA6CzDQL%2FOXZlaDhEzuxo8bUVXnQ7xJ2RdjFGxSTLe8jinfiujLB8paNQ%2BaX0scU13dkGWUm3XR3z3Vt8K7xBVNTDxRR5LIUur0I%2B1c9QMrhTBZsBsuXVAvE7UuXPJHV0fbEc8l%2FcKQRoiSvIhyQ0eph5R2zrSmn2kgbh1AeVUr%2Fgnh9I0aYfkZz8bWQRFVDDEsDGjyAGphJpGqbnb0jOpIZHsj5P7ZszfrxkYTypU9G14apBnkaDg2TTQ0%2FaJa7IWazsg0e8SF4ewhZt1he882qchtWiQcYgicIHivCoabYRjL3HTm%2FTM19l%2B0mEHHJ5yVYDF8DXLy4ub4%2Bffg3MzZGLJU8NQ%2B0VdW4LJAnI878RFkqV7uUj1%2BpzXEBQ3NP8RhhmOfwSaA%2BL3ej5CwNu6raltTdQF0Gj5C2X0%2FxOAr2Gzw%2FyTMuNbAv5vWVMGrTs1T11DV0vwGv0e0fJZgjh6S6dHyLwkn1eeYeDWlHbFRWEOjS7WDJT3Y6ejT5c9zsham7q2tFNuS3Wu%2FJUXvJBdEmSKkflwAD63xZnQojWhhA2WC2f9E4zD13%2FHABjqkAQiFrR19Tjl6GQAlPD9SnLmBAiTerzzt9y4PqvthvYv9XFrzikhqeYSL3D4txOIuBPwtMUCnFaRbriaKeSS2TpThIgIZQdU5YfTKoGseJUD7G7YPsDSJ4gQmzmZTRYddhAcTbQ%2FGXbVSqJe0SAazkK%2FV5DY%2Fd8v7Z01u1Ejr90L7SsaSUJgZJeGRunDipLKz18aHWHToNuCOPtfPX1zjzLvoA5Wi&X-Amz-Signature=19c5197a9e13af8bab850e76b1a393c70d87da256114be3c625c124def39a59f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4MSESL6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLfZ%2BdLD37VDPvc58rxYabqiHN%2Fn0PzuPDqqxhzNOY7wIhAMmpbc7kU7jkmFSlYpOBEPvlG6o5z9DGN%2FzxbwtOrzeoKv8DCHIQABoMNjM3NDIzMTgzODA1IgydJU%2FlnsdpowlyXWIq3AO65CTvB8vHWQoWP45NfCi3BqmokPWixil7%2BZuXDpdKha3Eim%2FSPpGQ%2BWAUhkJJjCXYv51cLOA6CzDQL%2FOXZlaDhEzuxo8bUVXnQ7xJ2RdjFGxSTLe8jinfiujLB8paNQ%2BaX0scU13dkGWUm3XR3z3Vt8K7xBVNTDxRR5LIUur0I%2B1c9QMrhTBZsBsuXVAvE7UuXPJHV0fbEc8l%2FcKQRoiSvIhyQ0eph5R2zrSmn2kgbh1AeVUr%2Fgnh9I0aYfkZz8bWQRFVDDEsDGjyAGphJpGqbnb0jOpIZHsj5P7ZszfrxkYTypU9G14apBnkaDg2TTQ0%2FaJa7IWazsg0e8SF4ewhZt1he882qchtWiQcYgicIHivCoabYRjL3HTm%2FTM19l%2B0mEHHJ5yVYDF8DXLy4ub4%2Bffg3MzZGLJU8NQ%2B0VdW4LJAnI878RFkqV7uUj1%2BpzXEBQ3NP8RhhmOfwSaA%2BL3ej5CwNu6raltTdQF0Gj5C2X0%2FxOAr2Gzw%2FyTMuNbAv5vWVMGrTs1T11DV0vwGv0e0fJZgjh6S6dHyLwkn1eeYeDWlHbFRWEOjS7WDJT3Y6ejT5c9zsham7q2tFNuS3Wu%2FJUXvJBdEmSKkflwAD63xZnQojWhhA2WC2f9E4zD13%2FHABjqkAQiFrR19Tjl6GQAlPD9SnLmBAiTerzzt9y4PqvthvYv9XFrzikhqeYSL3D4txOIuBPwtMUCnFaRbriaKeSS2TpThIgIZQdU5YfTKoGseJUD7G7YPsDSJ4gQmzmZTRYddhAcTbQ%2FGXbVSqJe0SAazkK%2FV5DY%2Fd8v7Z01u1Ejr90L7SsaSUJgZJeGRunDipLKz18aHWHToNuCOPtfPX1zjzLvoA5Wi&X-Amz-Signature=d9c50e34282cea33877640851696dd347a0eef0a0ab7e321063da9227d6b1eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4MSESL6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLfZ%2BdLD37VDPvc58rxYabqiHN%2Fn0PzuPDqqxhzNOY7wIhAMmpbc7kU7jkmFSlYpOBEPvlG6o5z9DGN%2FzxbwtOrzeoKv8DCHIQABoMNjM3NDIzMTgzODA1IgydJU%2FlnsdpowlyXWIq3AO65CTvB8vHWQoWP45NfCi3BqmokPWixil7%2BZuXDpdKha3Eim%2FSPpGQ%2BWAUhkJJjCXYv51cLOA6CzDQL%2FOXZlaDhEzuxo8bUVXnQ7xJ2RdjFGxSTLe8jinfiujLB8paNQ%2BaX0scU13dkGWUm3XR3z3Vt8K7xBVNTDxRR5LIUur0I%2B1c9QMrhTBZsBsuXVAvE7UuXPJHV0fbEc8l%2FcKQRoiSvIhyQ0eph5R2zrSmn2kgbh1AeVUr%2Fgnh9I0aYfkZz8bWQRFVDDEsDGjyAGphJpGqbnb0jOpIZHsj5P7ZszfrxkYTypU9G14apBnkaDg2TTQ0%2FaJa7IWazsg0e8SF4ewhZt1he882qchtWiQcYgicIHivCoabYRjL3HTm%2FTM19l%2B0mEHHJ5yVYDF8DXLy4ub4%2Bffg3MzZGLJU8NQ%2B0VdW4LJAnI878RFkqV7uUj1%2BpzXEBQ3NP8RhhmOfwSaA%2BL3ej5CwNu6raltTdQF0Gj5C2X0%2FxOAr2Gzw%2FyTMuNbAv5vWVMGrTs1T11DV0vwGv0e0fJZgjh6S6dHyLwkn1eeYeDWlHbFRWEOjS7WDJT3Y6ejT5c9zsham7q2tFNuS3Wu%2FJUXvJBdEmSKkflwAD63xZnQojWhhA2WC2f9E4zD13%2FHABjqkAQiFrR19Tjl6GQAlPD9SnLmBAiTerzzt9y4PqvthvYv9XFrzikhqeYSL3D4txOIuBPwtMUCnFaRbriaKeSS2TpThIgIZQdU5YfTKoGseJUD7G7YPsDSJ4gQmzmZTRYddhAcTbQ%2FGXbVSqJe0SAazkK%2FV5DY%2Fd8v7Z01u1Ejr90L7SsaSUJgZJeGRunDipLKz18aHWHToNuCOPtfPX1zjzLvoA5Wi&X-Amz-Signature=35d878afb87d44a0a41cbb2c6df75bfda2b62052ae6af49e1bd50d0f219ee104&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4MSESL6%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLfZ%2BdLD37VDPvc58rxYabqiHN%2Fn0PzuPDqqxhzNOY7wIhAMmpbc7kU7jkmFSlYpOBEPvlG6o5z9DGN%2FzxbwtOrzeoKv8DCHIQABoMNjM3NDIzMTgzODA1IgydJU%2FlnsdpowlyXWIq3AO65CTvB8vHWQoWP45NfCi3BqmokPWixil7%2BZuXDpdKha3Eim%2FSPpGQ%2BWAUhkJJjCXYv51cLOA6CzDQL%2FOXZlaDhEzuxo8bUVXnQ7xJ2RdjFGxSTLe8jinfiujLB8paNQ%2BaX0scU13dkGWUm3XR3z3Vt8K7xBVNTDxRR5LIUur0I%2B1c9QMrhTBZsBsuXVAvE7UuXPJHV0fbEc8l%2FcKQRoiSvIhyQ0eph5R2zrSmn2kgbh1AeVUr%2Fgnh9I0aYfkZz8bWQRFVDDEsDGjyAGphJpGqbnb0jOpIZHsj5P7ZszfrxkYTypU9G14apBnkaDg2TTQ0%2FaJa7IWazsg0e8SF4ewhZt1he882qchtWiQcYgicIHivCoabYRjL3HTm%2FTM19l%2B0mEHHJ5yVYDF8DXLy4ub4%2Bffg3MzZGLJU8NQ%2B0VdW4LJAnI878RFkqV7uUj1%2BpzXEBQ3NP8RhhmOfwSaA%2BL3ej5CwNu6raltTdQF0Gj5C2X0%2FxOAr2Gzw%2FyTMuNbAv5vWVMGrTs1T11DV0vwGv0e0fJZgjh6S6dHyLwkn1eeYeDWlHbFRWEOjS7WDJT3Y6ejT5c9zsham7q2tFNuS3Wu%2FJUXvJBdEmSKkflwAD63xZnQojWhhA2WC2f9E4zD13%2FHABjqkAQiFrR19Tjl6GQAlPD9SnLmBAiTerzzt9y4PqvthvYv9XFrzikhqeYSL3D4txOIuBPwtMUCnFaRbriaKeSS2TpThIgIZQdU5YfTKoGseJUD7G7YPsDSJ4gQmzmZTRYddhAcTbQ%2FGXbVSqJe0SAazkK%2FV5DY%2Fd8v7Z01u1Ejr90L7SsaSUJgZJeGRunDipLKz18aHWHToNuCOPtfPX1zjzLvoA5Wi&X-Amz-Signature=c2907a517b36846a72fbaa8c433457138dfbb7b2599ca0a319ff298265fa09d5&X-Amz-SignedHeaders=host&x-id=GetObject)
