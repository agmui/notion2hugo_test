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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627YJP3QV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCown6waZB5OaSKfGgsVKatCHWGKmvgytQxqjXL9TJPEAIhAPWW2olkdoyKKDneiiGLYbaSXN8Ru%2FKGuIvAJS09fXeMKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwclUrFTu5aPTmLiScq3APqrfd6w2b4VXoQnjt%2BGTiqHv1lEGD1n8NdlTYe%2F3ebkoZJif0o6EjoCPhtT0yHAJiG%2FUzBFTnooYZ2kSzM5OuTiWxiv5vMME3%2ByqjtQluOhyBsSqrNluGhZeYURKa%2FyJe%2FYpzNhGZf4T3VqIYRzU8juBw0XWTdm1Vv2oJ1q8QCfHs7GCu6eZzzU7fVTdDoHjEbgO4ThB5fVgcnXpMLHEf6lifBK%2FOLIl%2BQoWpYpK%2FOYGq0WDcWAxB8boOkO%2FW3wm7Z%2F6okRLYqM7It6lMcCKliQG1hkeEL%2FH%2Bk%2FfqtYtJ%2BNhAUnLVOGC67bo9aOPcG6iZ3Wp1QCZ69WdNXdb9JwJbp8KheoGpTTM1z25anUtnR%2Ffsqob896f6MfBkdlELuaQdvP%2BzoFlC19YKEsekPx9IOPu%2BH5THK2eXpzbwxImSRpk0GjRmd8GOqHWgbuHGE2nPPD04%2ByaHStB6NJUmQ%2FXtLmdWc1c31%2FC%2FqQy4SnJBUYJ3pGCM6LqMk%2BJgnllFYFrfgO5zLlNim3ULaNseKU9ZED3%2B7laPyB51%2Br1jK9L%2BQgm%2FzVxO2XvkAgp%2BjpUcj3JO%2FGUUaETqkjAZPgT7waDcl26xb3j15UddKE5YutFV97WqfJ4nkHEQlCyTYBjCTq97CBjqkAYnNtxKmNNe03pJCb2IvmTU6Cxyp4%2Fi%2Be8IzTzJRK%2Fz7HQFAlAbj1IYsGzUAJr6X%2FTFpav8XQml1NCzzoz81jKerJRmVhQk0kT4W6esFIgYaFZdzBn8hcmZWr7LB%2B4BjImmR%2F9F%2FhjahV4DzFvRCE%2FEXvgEqYNSyvZA%2F60K84ZxoQa%2F9mcxYurSF4phoia67kgb8qIHAkS463RHqOPm5myiN9zsC&X-Amz-Signature=5b0dc5593b52bf31aa9710a56b70953b353fe3d13d95350ba6bf9d02e1905464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627YJP3QV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCown6waZB5OaSKfGgsVKatCHWGKmvgytQxqjXL9TJPEAIhAPWW2olkdoyKKDneiiGLYbaSXN8Ru%2FKGuIvAJS09fXeMKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwclUrFTu5aPTmLiScq3APqrfd6w2b4VXoQnjt%2BGTiqHv1lEGD1n8NdlTYe%2F3ebkoZJif0o6EjoCPhtT0yHAJiG%2FUzBFTnooYZ2kSzM5OuTiWxiv5vMME3%2ByqjtQluOhyBsSqrNluGhZeYURKa%2FyJe%2FYpzNhGZf4T3VqIYRzU8juBw0XWTdm1Vv2oJ1q8QCfHs7GCu6eZzzU7fVTdDoHjEbgO4ThB5fVgcnXpMLHEf6lifBK%2FOLIl%2BQoWpYpK%2FOYGq0WDcWAxB8boOkO%2FW3wm7Z%2F6okRLYqM7It6lMcCKliQG1hkeEL%2FH%2Bk%2FfqtYtJ%2BNhAUnLVOGC67bo9aOPcG6iZ3Wp1QCZ69WdNXdb9JwJbp8KheoGpTTM1z25anUtnR%2Ffsqob896f6MfBkdlELuaQdvP%2BzoFlC19YKEsekPx9IOPu%2BH5THK2eXpzbwxImSRpk0GjRmd8GOqHWgbuHGE2nPPD04%2ByaHStB6NJUmQ%2FXtLmdWc1c31%2FC%2FqQy4SnJBUYJ3pGCM6LqMk%2BJgnllFYFrfgO5zLlNim3ULaNseKU9ZED3%2B7laPyB51%2Br1jK9L%2BQgm%2FzVxO2XvkAgp%2BjpUcj3JO%2FGUUaETqkjAZPgT7waDcl26xb3j15UddKE5YutFV97WqfJ4nkHEQlCyTYBjCTq97CBjqkAYnNtxKmNNe03pJCb2IvmTU6Cxyp4%2Fi%2Be8IzTzJRK%2Fz7HQFAlAbj1IYsGzUAJr6X%2FTFpav8XQml1NCzzoz81jKerJRmVhQk0kT4W6esFIgYaFZdzBn8hcmZWr7LB%2B4BjImmR%2F9F%2FhjahV4DzFvRCE%2FEXvgEqYNSyvZA%2F60K84ZxoQa%2F9mcxYurSF4phoia67kgb8qIHAkS463RHqOPm5myiN9zsC&X-Amz-Signature=29ce5d20ad3c2ae3a8b7f2941a9b0208ad1f497ac507468a74ff53469a78e1be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627YJP3QV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCown6waZB5OaSKfGgsVKatCHWGKmvgytQxqjXL9TJPEAIhAPWW2olkdoyKKDneiiGLYbaSXN8Ru%2FKGuIvAJS09fXeMKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwclUrFTu5aPTmLiScq3APqrfd6w2b4VXoQnjt%2BGTiqHv1lEGD1n8NdlTYe%2F3ebkoZJif0o6EjoCPhtT0yHAJiG%2FUzBFTnooYZ2kSzM5OuTiWxiv5vMME3%2ByqjtQluOhyBsSqrNluGhZeYURKa%2FyJe%2FYpzNhGZf4T3VqIYRzU8juBw0XWTdm1Vv2oJ1q8QCfHs7GCu6eZzzU7fVTdDoHjEbgO4ThB5fVgcnXpMLHEf6lifBK%2FOLIl%2BQoWpYpK%2FOYGq0WDcWAxB8boOkO%2FW3wm7Z%2F6okRLYqM7It6lMcCKliQG1hkeEL%2FH%2Bk%2FfqtYtJ%2BNhAUnLVOGC67bo9aOPcG6iZ3Wp1QCZ69WdNXdb9JwJbp8KheoGpTTM1z25anUtnR%2Ffsqob896f6MfBkdlELuaQdvP%2BzoFlC19YKEsekPx9IOPu%2BH5THK2eXpzbwxImSRpk0GjRmd8GOqHWgbuHGE2nPPD04%2ByaHStB6NJUmQ%2FXtLmdWc1c31%2FC%2FqQy4SnJBUYJ3pGCM6LqMk%2BJgnllFYFrfgO5zLlNim3ULaNseKU9ZED3%2B7laPyB51%2Br1jK9L%2BQgm%2FzVxO2XvkAgp%2BjpUcj3JO%2FGUUaETqkjAZPgT7waDcl26xb3j15UddKE5YutFV97WqfJ4nkHEQlCyTYBjCTq97CBjqkAYnNtxKmNNe03pJCb2IvmTU6Cxyp4%2Fi%2Be8IzTzJRK%2Fz7HQFAlAbj1IYsGzUAJr6X%2FTFpav8XQml1NCzzoz81jKerJRmVhQk0kT4W6esFIgYaFZdzBn8hcmZWr7LB%2B4BjImmR%2F9F%2FhjahV4DzFvRCE%2FEXvgEqYNSyvZA%2F60K84ZxoQa%2F9mcxYurSF4phoia67kgb8qIHAkS463RHqOPm5myiN9zsC&X-Amz-Signature=c94b21aed73c870b62e5126f947bd361aa07d3e592c994fb246bcc590701910c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627YJP3QV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCown6waZB5OaSKfGgsVKatCHWGKmvgytQxqjXL9TJPEAIhAPWW2olkdoyKKDneiiGLYbaSXN8Ru%2FKGuIvAJS09fXeMKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwclUrFTu5aPTmLiScq3APqrfd6w2b4VXoQnjt%2BGTiqHv1lEGD1n8NdlTYe%2F3ebkoZJif0o6EjoCPhtT0yHAJiG%2FUzBFTnooYZ2kSzM5OuTiWxiv5vMME3%2ByqjtQluOhyBsSqrNluGhZeYURKa%2FyJe%2FYpzNhGZf4T3VqIYRzU8juBw0XWTdm1Vv2oJ1q8QCfHs7GCu6eZzzU7fVTdDoHjEbgO4ThB5fVgcnXpMLHEf6lifBK%2FOLIl%2BQoWpYpK%2FOYGq0WDcWAxB8boOkO%2FW3wm7Z%2F6okRLYqM7It6lMcCKliQG1hkeEL%2FH%2Bk%2FfqtYtJ%2BNhAUnLVOGC67bo9aOPcG6iZ3Wp1QCZ69WdNXdb9JwJbp8KheoGpTTM1z25anUtnR%2Ffsqob896f6MfBkdlELuaQdvP%2BzoFlC19YKEsekPx9IOPu%2BH5THK2eXpzbwxImSRpk0GjRmd8GOqHWgbuHGE2nPPD04%2ByaHStB6NJUmQ%2FXtLmdWc1c31%2FC%2FqQy4SnJBUYJ3pGCM6LqMk%2BJgnllFYFrfgO5zLlNim3ULaNseKU9ZED3%2B7laPyB51%2Br1jK9L%2BQgm%2FzVxO2XvkAgp%2BjpUcj3JO%2FGUUaETqkjAZPgT7waDcl26xb3j15UddKE5YutFV97WqfJ4nkHEQlCyTYBjCTq97CBjqkAYnNtxKmNNe03pJCb2IvmTU6Cxyp4%2Fi%2Be8IzTzJRK%2Fz7HQFAlAbj1IYsGzUAJr6X%2FTFpav8XQml1NCzzoz81jKerJRmVhQk0kT4W6esFIgYaFZdzBn8hcmZWr7LB%2B4BjImmR%2F9F%2FhjahV4DzFvRCE%2FEXvgEqYNSyvZA%2F60K84ZxoQa%2F9mcxYurSF4phoia67kgb8qIHAkS463RHqOPm5myiN9zsC&X-Amz-Signature=bbe997f6900aadf01b13c15e3cb51a06179a7c207704bb3a13c3cb2bcdc1ae17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627YJP3QV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCown6waZB5OaSKfGgsVKatCHWGKmvgytQxqjXL9TJPEAIhAPWW2olkdoyKKDneiiGLYbaSXN8Ru%2FKGuIvAJS09fXeMKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwclUrFTu5aPTmLiScq3APqrfd6w2b4VXoQnjt%2BGTiqHv1lEGD1n8NdlTYe%2F3ebkoZJif0o6EjoCPhtT0yHAJiG%2FUzBFTnooYZ2kSzM5OuTiWxiv5vMME3%2ByqjtQluOhyBsSqrNluGhZeYURKa%2FyJe%2FYpzNhGZf4T3VqIYRzU8juBw0XWTdm1Vv2oJ1q8QCfHs7GCu6eZzzU7fVTdDoHjEbgO4ThB5fVgcnXpMLHEf6lifBK%2FOLIl%2BQoWpYpK%2FOYGq0WDcWAxB8boOkO%2FW3wm7Z%2F6okRLYqM7It6lMcCKliQG1hkeEL%2FH%2Bk%2FfqtYtJ%2BNhAUnLVOGC67bo9aOPcG6iZ3Wp1QCZ69WdNXdb9JwJbp8KheoGpTTM1z25anUtnR%2Ffsqob896f6MfBkdlELuaQdvP%2BzoFlC19YKEsekPx9IOPu%2BH5THK2eXpzbwxImSRpk0GjRmd8GOqHWgbuHGE2nPPD04%2ByaHStB6NJUmQ%2FXtLmdWc1c31%2FC%2FqQy4SnJBUYJ3pGCM6LqMk%2BJgnllFYFrfgO5zLlNim3ULaNseKU9ZED3%2B7laPyB51%2Br1jK9L%2BQgm%2FzVxO2XvkAgp%2BjpUcj3JO%2FGUUaETqkjAZPgT7waDcl26xb3j15UddKE5YutFV97WqfJ4nkHEQlCyTYBjCTq97CBjqkAYnNtxKmNNe03pJCb2IvmTU6Cxyp4%2Fi%2Be8IzTzJRK%2Fz7HQFAlAbj1IYsGzUAJr6X%2FTFpav8XQml1NCzzoz81jKerJRmVhQk0kT4W6esFIgYaFZdzBn8hcmZWr7LB%2B4BjImmR%2F9F%2FhjahV4DzFvRCE%2FEXvgEqYNSyvZA%2F60K84ZxoQa%2F9mcxYurSF4phoia67kgb8qIHAkS463RHqOPm5myiN9zsC&X-Amz-Signature=dadd11287af21348a51801614001ff2373007600087edbccfa40a66981c2d818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627YJP3QV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCown6waZB5OaSKfGgsVKatCHWGKmvgytQxqjXL9TJPEAIhAPWW2olkdoyKKDneiiGLYbaSXN8Ru%2FKGuIvAJS09fXeMKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwclUrFTu5aPTmLiScq3APqrfd6w2b4VXoQnjt%2BGTiqHv1lEGD1n8NdlTYe%2F3ebkoZJif0o6EjoCPhtT0yHAJiG%2FUzBFTnooYZ2kSzM5OuTiWxiv5vMME3%2ByqjtQluOhyBsSqrNluGhZeYURKa%2FyJe%2FYpzNhGZf4T3VqIYRzU8juBw0XWTdm1Vv2oJ1q8QCfHs7GCu6eZzzU7fVTdDoHjEbgO4ThB5fVgcnXpMLHEf6lifBK%2FOLIl%2BQoWpYpK%2FOYGq0WDcWAxB8boOkO%2FW3wm7Z%2F6okRLYqM7It6lMcCKliQG1hkeEL%2FH%2Bk%2FfqtYtJ%2BNhAUnLVOGC67bo9aOPcG6iZ3Wp1QCZ69WdNXdb9JwJbp8KheoGpTTM1z25anUtnR%2Ffsqob896f6MfBkdlELuaQdvP%2BzoFlC19YKEsekPx9IOPu%2BH5THK2eXpzbwxImSRpk0GjRmd8GOqHWgbuHGE2nPPD04%2ByaHStB6NJUmQ%2FXtLmdWc1c31%2FC%2FqQy4SnJBUYJ3pGCM6LqMk%2BJgnllFYFrfgO5zLlNim3ULaNseKU9ZED3%2B7laPyB51%2Br1jK9L%2BQgm%2FzVxO2XvkAgp%2BjpUcj3JO%2FGUUaETqkjAZPgT7waDcl26xb3j15UddKE5YutFV97WqfJ4nkHEQlCyTYBjCTq97CBjqkAYnNtxKmNNe03pJCb2IvmTU6Cxyp4%2Fi%2Be8IzTzJRK%2Fz7HQFAlAbj1IYsGzUAJr6X%2FTFpav8XQml1NCzzoz81jKerJRmVhQk0kT4W6esFIgYaFZdzBn8hcmZWr7LB%2B4BjImmR%2F9F%2FhjahV4DzFvRCE%2FEXvgEqYNSyvZA%2F60K84ZxoQa%2F9mcxYurSF4phoia67kgb8qIHAkS463RHqOPm5myiN9zsC&X-Amz-Signature=b5476f0f50864d5e47e45cbc619fed453c508b818578500321a3fbcb057d06e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
