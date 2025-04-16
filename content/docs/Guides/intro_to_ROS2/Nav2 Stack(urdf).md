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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6EADNZE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlDDpCrKnpfq2JeV2c4Yg9vTpqY9HE5kQWDq8Z9cXEaAiATnBZtNXylQKG7GIqJYRiVKof2kcYyotI1gehgBh%2BTqSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMoclshf7U0uy99%2FqJKtwDtlsFibGmz0GhUgJdK29EHeNUDtCRbVckQWk3IovVSwuiARK3kANMvxEtvzCWh6AfPwgpFuJ5nX9nLwya2citQV3EoQN%2F9cHSqJSLR85oqMhwXoIAbChdUZZ2D2u%2Fh%2FFuBN9xfBqkFBDC%2BUy39d0Ixf1TSqY%2B0hYbkO1y%2FgcC%2FSTxxZ4eYR4MZOP1Gei5n68EcJECEyks9ojdJVqmvTX8gb6jfOVvzxyAx6nUAf5hwWfnOxd5F89XBqVZCtyb7EiTX%2Bap9nUnXgA%2FkfbZWFGjW7PimWOhF0wCGJRgaf8XTjSHXSC0vbCdqAcWPLHcBrcg%2F6Rm%2BYbtyVbjT3JQ3P74lheTQEnehb9cl%2FVOMU09f6o5Tc%2B3fAaVpEJvKRbTELY27uHVm7lsCr9gs7YxYwJxJhcaUV1m9K9%2FXoi98ebLb04m2hF%2FrwDATvUW1MVMEed07haX2DuBWGXWK7bxjHQLOva06C0%2F2a64TwZh74z%2BCcb0dp8rnUBVvYYbL55dXVXmCX0B9ncW1IgujU8XpjzSHIPc3gazQfPotvOirVFmzSXMZMzdQ3UoWYfIRQhm8bjkQ6gn30ERmUdBesKyjOyYMQlxzboLHTKec%2BAkDu8UQMdkVBPoetaS10%2B3CyQwq9r9vwY6pgH3eMhu550R2bBi70nRdGvOGKnPCfp2oAE7e0hYJIWfxDQmsU0AE5gaY4JKyvS7QM3adQ5AT0XctaELzza6sX4wC1u6kLWJne4P8qV6x9CFmwJrqoxdx78Z7qk5XI0ni2yQ6xIyRb9WVHZ9Ksu8uEZ%2B3ojY5p3R4J3eIR%2BtQfcUvhoSvIYFtb1hheSDFg5z87mXf1catF%2BJ784G%2F3msZ%2Fi2uCEpj0CG&X-Amz-Signature=f30bf453f6a58e451e4f30c1607e8be4d61f5f0798327a2fc1ea9b3298ff2d3f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6EADNZE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlDDpCrKnpfq2JeV2c4Yg9vTpqY9HE5kQWDq8Z9cXEaAiATnBZtNXylQKG7GIqJYRiVKof2kcYyotI1gehgBh%2BTqSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMoclshf7U0uy99%2FqJKtwDtlsFibGmz0GhUgJdK29EHeNUDtCRbVckQWk3IovVSwuiARK3kANMvxEtvzCWh6AfPwgpFuJ5nX9nLwya2citQV3EoQN%2F9cHSqJSLR85oqMhwXoIAbChdUZZ2D2u%2Fh%2FFuBN9xfBqkFBDC%2BUy39d0Ixf1TSqY%2B0hYbkO1y%2FgcC%2FSTxxZ4eYR4MZOP1Gei5n68EcJECEyks9ojdJVqmvTX8gb6jfOVvzxyAx6nUAf5hwWfnOxd5F89XBqVZCtyb7EiTX%2Bap9nUnXgA%2FkfbZWFGjW7PimWOhF0wCGJRgaf8XTjSHXSC0vbCdqAcWPLHcBrcg%2F6Rm%2BYbtyVbjT3JQ3P74lheTQEnehb9cl%2FVOMU09f6o5Tc%2B3fAaVpEJvKRbTELY27uHVm7lsCr9gs7YxYwJxJhcaUV1m9K9%2FXoi98ebLb04m2hF%2FrwDATvUW1MVMEed07haX2DuBWGXWK7bxjHQLOva06C0%2F2a64TwZh74z%2BCcb0dp8rnUBVvYYbL55dXVXmCX0B9ncW1IgujU8XpjzSHIPc3gazQfPotvOirVFmzSXMZMzdQ3UoWYfIRQhm8bjkQ6gn30ERmUdBesKyjOyYMQlxzboLHTKec%2BAkDu8UQMdkVBPoetaS10%2B3CyQwq9r9vwY6pgH3eMhu550R2bBi70nRdGvOGKnPCfp2oAE7e0hYJIWfxDQmsU0AE5gaY4JKyvS7QM3adQ5AT0XctaELzza6sX4wC1u6kLWJne4P8qV6x9CFmwJrqoxdx78Z7qk5XI0ni2yQ6xIyRb9WVHZ9Ksu8uEZ%2B3ojY5p3R4J3eIR%2BtQfcUvhoSvIYFtb1hheSDFg5z87mXf1catF%2BJ784G%2F3msZ%2Fi2uCEpj0CG&X-Amz-Signature=4fcbdde7d5062b5aaef80163a5682006905f77b575ee85f18f7f67a0032a2ad4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6EADNZE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlDDpCrKnpfq2JeV2c4Yg9vTpqY9HE5kQWDq8Z9cXEaAiATnBZtNXylQKG7GIqJYRiVKof2kcYyotI1gehgBh%2BTqSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMoclshf7U0uy99%2FqJKtwDtlsFibGmz0GhUgJdK29EHeNUDtCRbVckQWk3IovVSwuiARK3kANMvxEtvzCWh6AfPwgpFuJ5nX9nLwya2citQV3EoQN%2F9cHSqJSLR85oqMhwXoIAbChdUZZ2D2u%2Fh%2FFuBN9xfBqkFBDC%2BUy39d0Ixf1TSqY%2B0hYbkO1y%2FgcC%2FSTxxZ4eYR4MZOP1Gei5n68EcJECEyks9ojdJVqmvTX8gb6jfOVvzxyAx6nUAf5hwWfnOxd5F89XBqVZCtyb7EiTX%2Bap9nUnXgA%2FkfbZWFGjW7PimWOhF0wCGJRgaf8XTjSHXSC0vbCdqAcWPLHcBrcg%2F6Rm%2BYbtyVbjT3JQ3P74lheTQEnehb9cl%2FVOMU09f6o5Tc%2B3fAaVpEJvKRbTELY27uHVm7lsCr9gs7YxYwJxJhcaUV1m9K9%2FXoi98ebLb04m2hF%2FrwDATvUW1MVMEed07haX2DuBWGXWK7bxjHQLOva06C0%2F2a64TwZh74z%2BCcb0dp8rnUBVvYYbL55dXVXmCX0B9ncW1IgujU8XpjzSHIPc3gazQfPotvOirVFmzSXMZMzdQ3UoWYfIRQhm8bjkQ6gn30ERmUdBesKyjOyYMQlxzboLHTKec%2BAkDu8UQMdkVBPoetaS10%2B3CyQwq9r9vwY6pgH3eMhu550R2bBi70nRdGvOGKnPCfp2oAE7e0hYJIWfxDQmsU0AE5gaY4JKyvS7QM3adQ5AT0XctaELzza6sX4wC1u6kLWJne4P8qV6x9CFmwJrqoxdx78Z7qk5XI0ni2yQ6xIyRb9WVHZ9Ksu8uEZ%2B3ojY5p3R4J3eIR%2BtQfcUvhoSvIYFtb1hheSDFg5z87mXf1catF%2BJ784G%2F3msZ%2Fi2uCEpj0CG&X-Amz-Signature=5ec21373eee08cd4dc44c6bdf6a8f6665a6533dba2aa35e397bf75431814bc93&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6EADNZE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlDDpCrKnpfq2JeV2c4Yg9vTpqY9HE5kQWDq8Z9cXEaAiATnBZtNXylQKG7GIqJYRiVKof2kcYyotI1gehgBh%2BTqSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMoclshf7U0uy99%2FqJKtwDtlsFibGmz0GhUgJdK29EHeNUDtCRbVckQWk3IovVSwuiARK3kANMvxEtvzCWh6AfPwgpFuJ5nX9nLwya2citQV3EoQN%2F9cHSqJSLR85oqMhwXoIAbChdUZZ2D2u%2Fh%2FFuBN9xfBqkFBDC%2BUy39d0Ixf1TSqY%2B0hYbkO1y%2FgcC%2FSTxxZ4eYR4MZOP1Gei5n68EcJECEyks9ojdJVqmvTX8gb6jfOVvzxyAx6nUAf5hwWfnOxd5F89XBqVZCtyb7EiTX%2Bap9nUnXgA%2FkfbZWFGjW7PimWOhF0wCGJRgaf8XTjSHXSC0vbCdqAcWPLHcBrcg%2F6Rm%2BYbtyVbjT3JQ3P74lheTQEnehb9cl%2FVOMU09f6o5Tc%2B3fAaVpEJvKRbTELY27uHVm7lsCr9gs7YxYwJxJhcaUV1m9K9%2FXoi98ebLb04m2hF%2FrwDATvUW1MVMEed07haX2DuBWGXWK7bxjHQLOva06C0%2F2a64TwZh74z%2BCcb0dp8rnUBVvYYbL55dXVXmCX0B9ncW1IgujU8XpjzSHIPc3gazQfPotvOirVFmzSXMZMzdQ3UoWYfIRQhm8bjkQ6gn30ERmUdBesKyjOyYMQlxzboLHTKec%2BAkDu8UQMdkVBPoetaS10%2B3CyQwq9r9vwY6pgH3eMhu550R2bBi70nRdGvOGKnPCfp2oAE7e0hYJIWfxDQmsU0AE5gaY4JKyvS7QM3adQ5AT0XctaELzza6sX4wC1u6kLWJne4P8qV6x9CFmwJrqoxdx78Z7qk5XI0ni2yQ6xIyRb9WVHZ9Ksu8uEZ%2B3ojY5p3R4J3eIR%2BtQfcUvhoSvIYFtb1hheSDFg5z87mXf1catF%2BJ784G%2F3msZ%2Fi2uCEpj0CG&X-Amz-Signature=da2d78890b448a228b4a25cc1b733654d5a6085485d625416f87a38bef7f7c2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6EADNZE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlDDpCrKnpfq2JeV2c4Yg9vTpqY9HE5kQWDq8Z9cXEaAiATnBZtNXylQKG7GIqJYRiVKof2kcYyotI1gehgBh%2BTqSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMoclshf7U0uy99%2FqJKtwDtlsFibGmz0GhUgJdK29EHeNUDtCRbVckQWk3IovVSwuiARK3kANMvxEtvzCWh6AfPwgpFuJ5nX9nLwya2citQV3EoQN%2F9cHSqJSLR85oqMhwXoIAbChdUZZ2D2u%2Fh%2FFuBN9xfBqkFBDC%2BUy39d0Ixf1TSqY%2B0hYbkO1y%2FgcC%2FSTxxZ4eYR4MZOP1Gei5n68EcJECEyks9ojdJVqmvTX8gb6jfOVvzxyAx6nUAf5hwWfnOxd5F89XBqVZCtyb7EiTX%2Bap9nUnXgA%2FkfbZWFGjW7PimWOhF0wCGJRgaf8XTjSHXSC0vbCdqAcWPLHcBrcg%2F6Rm%2BYbtyVbjT3JQ3P74lheTQEnehb9cl%2FVOMU09f6o5Tc%2B3fAaVpEJvKRbTELY27uHVm7lsCr9gs7YxYwJxJhcaUV1m9K9%2FXoi98ebLb04m2hF%2FrwDATvUW1MVMEed07haX2DuBWGXWK7bxjHQLOva06C0%2F2a64TwZh74z%2BCcb0dp8rnUBVvYYbL55dXVXmCX0B9ncW1IgujU8XpjzSHIPc3gazQfPotvOirVFmzSXMZMzdQ3UoWYfIRQhm8bjkQ6gn30ERmUdBesKyjOyYMQlxzboLHTKec%2BAkDu8UQMdkVBPoetaS10%2B3CyQwq9r9vwY6pgH3eMhu550R2bBi70nRdGvOGKnPCfp2oAE7e0hYJIWfxDQmsU0AE5gaY4JKyvS7QM3adQ5AT0XctaELzza6sX4wC1u6kLWJne4P8qV6x9CFmwJrqoxdx78Z7qk5XI0ni2yQ6xIyRb9WVHZ9Ksu8uEZ%2B3ojY5p3R4J3eIR%2BtQfcUvhoSvIYFtb1hheSDFg5z87mXf1catF%2BJ784G%2F3msZ%2Fi2uCEpj0CG&X-Amz-Signature=fd492522dcd5a37114d130d2ac486d4eacef6eecadd239370ce2b571554237fc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6EADNZE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlDDpCrKnpfq2JeV2c4Yg9vTpqY9HE5kQWDq8Z9cXEaAiATnBZtNXylQKG7GIqJYRiVKof2kcYyotI1gehgBh%2BTqSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMoclshf7U0uy99%2FqJKtwDtlsFibGmz0GhUgJdK29EHeNUDtCRbVckQWk3IovVSwuiARK3kANMvxEtvzCWh6AfPwgpFuJ5nX9nLwya2citQV3EoQN%2F9cHSqJSLR85oqMhwXoIAbChdUZZ2D2u%2Fh%2FFuBN9xfBqkFBDC%2BUy39d0Ixf1TSqY%2B0hYbkO1y%2FgcC%2FSTxxZ4eYR4MZOP1Gei5n68EcJECEyks9ojdJVqmvTX8gb6jfOVvzxyAx6nUAf5hwWfnOxd5F89XBqVZCtyb7EiTX%2Bap9nUnXgA%2FkfbZWFGjW7PimWOhF0wCGJRgaf8XTjSHXSC0vbCdqAcWPLHcBrcg%2F6Rm%2BYbtyVbjT3JQ3P74lheTQEnehb9cl%2FVOMU09f6o5Tc%2B3fAaVpEJvKRbTELY27uHVm7lsCr9gs7YxYwJxJhcaUV1m9K9%2FXoi98ebLb04m2hF%2FrwDATvUW1MVMEed07haX2DuBWGXWK7bxjHQLOva06C0%2F2a64TwZh74z%2BCcb0dp8rnUBVvYYbL55dXVXmCX0B9ncW1IgujU8XpjzSHIPc3gazQfPotvOirVFmzSXMZMzdQ3UoWYfIRQhm8bjkQ6gn30ERmUdBesKyjOyYMQlxzboLHTKec%2BAkDu8UQMdkVBPoetaS10%2B3CyQwq9r9vwY6pgH3eMhu550R2bBi70nRdGvOGKnPCfp2oAE7e0hYJIWfxDQmsU0AE5gaY4JKyvS7QM3adQ5AT0XctaELzza6sX4wC1u6kLWJne4P8qV6x9CFmwJrqoxdx78Z7qk5XI0ni2yQ6xIyRb9WVHZ9Ksu8uEZ%2B3ojY5p3R4J3eIR%2BtQfcUvhoSvIYFtb1hheSDFg5z87mXf1catF%2BJ784G%2F3msZ%2Fi2uCEpj0CG&X-Amz-Signature=94e1f0eb29da867a020012e5bfc7a8526ba135a7db7e44a59c0c019b70049eb6&X-Amz-SignedHeaders=host&x-id=GetObject)
