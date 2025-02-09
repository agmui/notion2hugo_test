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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IWYW7NW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB8vdhYhcGjlBRaQj1Hkzf7SHavKMKzEEH4H3wXH6mAgIhAKgQoWEN%2FWkG0Tk3Yp8lpqkGvPppIStqAFVMxv3xGBAhKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfjxqhDBRqGHHh4r8q3APpIZ%2FgknIjDey6bPfjFTnKobGe0IzjZSwZCUbdqesEn%2F%2FgjSpcBY6agrvYaPyhzmjzIl8QqPLqSrjVG2KWW2e9kLCFb7Cb0cHGoFjqKX%2FM9C7q7RfsXeYvWcUZlF7uJP2gfCi9VxCGgdmr7YAMD2RkhO9%2BB11Ex3OwG6pp%2Bwv62dXo3c6o0Rzl%2BfT0LlHedalFQ5jJqqje5hFR44Nq%2FuSstB9GAKiuQPL7kLI4dP11NNkhukide1N2kCnu2cBw9ygZ%2FraJ9it7Zcl5ry1ZOcb8pdmKGgDulrtcYVmt4629wWOmCEawSJx%2FYQ7O9qUt3fCcyTIMZIW74cW9T%2B2AvIfqA6iRBcFTey1%2BHeqctn9TgnAeDF11o96fdf3fhnLtRcFqcLrXhGf9GYL7GakQqJ5ihtDbKKQvIwD9uLQg0GC7FLf5fJ0qNe9GvScdSq6Ek7pNYm%2BDHSQtVAXrrUIeS%2BNv8L%2Fi24wQgVFJ3JemiCROOaQErZ%2FV7w%2FG5u3iqJoI%2FkasK%2BJy3MWoByrAV3HKjPkRn4Xd9LRswsTd%2FCCh5S0ym9d5UAwAIfDPipJwplwUygghuJtmFCHweEVC%2FuNhJF%2FtZqb3KoA%2BNnZYqwoP92XTJCtIZMIaRlvrQuILrjCv5KG9BjqkAUbz1vt6sEUBR9E%2BEMQr%2FIQEy1AEAwsOdF8SKjRW3MES3HChPsF7JjkFjISxvJFYGqlOL85ZVx4VqGkFTpQFYGt6ug544p3PQf%2BX7PVcmdKE3rpY%2F792udSltFQkwZ5c8s8PwGrciSzrkgin9EsAWVkpf1k0kab063DbRJy0DwC98f7coq8R5xKaI%2BFsL4YvEAmgTg0iwdodBiNKt3ZFx8gIK1RC&X-Amz-Signature=54240391b2ecad5935e55dbd70f82aa16db1a18b380a38ed1877d11e45497ff3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IWYW7NW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB8vdhYhcGjlBRaQj1Hkzf7SHavKMKzEEH4H3wXH6mAgIhAKgQoWEN%2FWkG0Tk3Yp8lpqkGvPppIStqAFVMxv3xGBAhKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfjxqhDBRqGHHh4r8q3APpIZ%2FgknIjDey6bPfjFTnKobGe0IzjZSwZCUbdqesEn%2F%2FgjSpcBY6agrvYaPyhzmjzIl8QqPLqSrjVG2KWW2e9kLCFb7Cb0cHGoFjqKX%2FM9C7q7RfsXeYvWcUZlF7uJP2gfCi9VxCGgdmr7YAMD2RkhO9%2BB11Ex3OwG6pp%2Bwv62dXo3c6o0Rzl%2BfT0LlHedalFQ5jJqqje5hFR44Nq%2FuSstB9GAKiuQPL7kLI4dP11NNkhukide1N2kCnu2cBw9ygZ%2FraJ9it7Zcl5ry1ZOcb8pdmKGgDulrtcYVmt4629wWOmCEawSJx%2FYQ7O9qUt3fCcyTIMZIW74cW9T%2B2AvIfqA6iRBcFTey1%2BHeqctn9TgnAeDF11o96fdf3fhnLtRcFqcLrXhGf9GYL7GakQqJ5ihtDbKKQvIwD9uLQg0GC7FLf5fJ0qNe9GvScdSq6Ek7pNYm%2BDHSQtVAXrrUIeS%2BNv8L%2Fi24wQgVFJ3JemiCROOaQErZ%2FV7w%2FG5u3iqJoI%2FkasK%2BJy3MWoByrAV3HKjPkRn4Xd9LRswsTd%2FCCh5S0ym9d5UAwAIfDPipJwplwUygghuJtmFCHweEVC%2FuNhJF%2FtZqb3KoA%2BNnZYqwoP92XTJCtIZMIaRlvrQuILrjCv5KG9BjqkAUbz1vt6sEUBR9E%2BEMQr%2FIQEy1AEAwsOdF8SKjRW3MES3HChPsF7JjkFjISxvJFYGqlOL85ZVx4VqGkFTpQFYGt6ug544p3PQf%2BX7PVcmdKE3rpY%2F792udSltFQkwZ5c8s8PwGrciSzrkgin9EsAWVkpf1k0kab063DbRJy0DwC98f7coq8R5xKaI%2BFsL4YvEAmgTg0iwdodBiNKt3ZFx8gIK1RC&X-Amz-Signature=d7d8c3e2fa4c70f15c87c6bae378f511b4b5678cbd63da9f99b2e85a3b6b6a49&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IWYW7NW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB8vdhYhcGjlBRaQj1Hkzf7SHavKMKzEEH4H3wXH6mAgIhAKgQoWEN%2FWkG0Tk3Yp8lpqkGvPppIStqAFVMxv3xGBAhKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfjxqhDBRqGHHh4r8q3APpIZ%2FgknIjDey6bPfjFTnKobGe0IzjZSwZCUbdqesEn%2F%2FgjSpcBY6agrvYaPyhzmjzIl8QqPLqSrjVG2KWW2e9kLCFb7Cb0cHGoFjqKX%2FM9C7q7RfsXeYvWcUZlF7uJP2gfCi9VxCGgdmr7YAMD2RkhO9%2BB11Ex3OwG6pp%2Bwv62dXo3c6o0Rzl%2BfT0LlHedalFQ5jJqqje5hFR44Nq%2FuSstB9GAKiuQPL7kLI4dP11NNkhukide1N2kCnu2cBw9ygZ%2FraJ9it7Zcl5ry1ZOcb8pdmKGgDulrtcYVmt4629wWOmCEawSJx%2FYQ7O9qUt3fCcyTIMZIW74cW9T%2B2AvIfqA6iRBcFTey1%2BHeqctn9TgnAeDF11o96fdf3fhnLtRcFqcLrXhGf9GYL7GakQqJ5ihtDbKKQvIwD9uLQg0GC7FLf5fJ0qNe9GvScdSq6Ek7pNYm%2BDHSQtVAXrrUIeS%2BNv8L%2Fi24wQgVFJ3JemiCROOaQErZ%2FV7w%2FG5u3iqJoI%2FkasK%2BJy3MWoByrAV3HKjPkRn4Xd9LRswsTd%2FCCh5S0ym9d5UAwAIfDPipJwplwUygghuJtmFCHweEVC%2FuNhJF%2FtZqb3KoA%2BNnZYqwoP92XTJCtIZMIaRlvrQuILrjCv5KG9BjqkAUbz1vt6sEUBR9E%2BEMQr%2FIQEy1AEAwsOdF8SKjRW3MES3HChPsF7JjkFjISxvJFYGqlOL85ZVx4VqGkFTpQFYGt6ug544p3PQf%2BX7PVcmdKE3rpY%2F792udSltFQkwZ5c8s8PwGrciSzrkgin9EsAWVkpf1k0kab063DbRJy0DwC98f7coq8R5xKaI%2BFsL4YvEAmgTg0iwdodBiNKt3ZFx8gIK1RC&X-Amz-Signature=023d60920deb1aa9f243a86ab0ea61e1f74a47012076440eb262c35481233a62&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IWYW7NW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB8vdhYhcGjlBRaQj1Hkzf7SHavKMKzEEH4H3wXH6mAgIhAKgQoWEN%2FWkG0Tk3Yp8lpqkGvPppIStqAFVMxv3xGBAhKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfjxqhDBRqGHHh4r8q3APpIZ%2FgknIjDey6bPfjFTnKobGe0IzjZSwZCUbdqesEn%2F%2FgjSpcBY6agrvYaPyhzmjzIl8QqPLqSrjVG2KWW2e9kLCFb7Cb0cHGoFjqKX%2FM9C7q7RfsXeYvWcUZlF7uJP2gfCi9VxCGgdmr7YAMD2RkhO9%2BB11Ex3OwG6pp%2Bwv62dXo3c6o0Rzl%2BfT0LlHedalFQ5jJqqje5hFR44Nq%2FuSstB9GAKiuQPL7kLI4dP11NNkhukide1N2kCnu2cBw9ygZ%2FraJ9it7Zcl5ry1ZOcb8pdmKGgDulrtcYVmt4629wWOmCEawSJx%2FYQ7O9qUt3fCcyTIMZIW74cW9T%2B2AvIfqA6iRBcFTey1%2BHeqctn9TgnAeDF11o96fdf3fhnLtRcFqcLrXhGf9GYL7GakQqJ5ihtDbKKQvIwD9uLQg0GC7FLf5fJ0qNe9GvScdSq6Ek7pNYm%2BDHSQtVAXrrUIeS%2BNv8L%2Fi24wQgVFJ3JemiCROOaQErZ%2FV7w%2FG5u3iqJoI%2FkasK%2BJy3MWoByrAV3HKjPkRn4Xd9LRswsTd%2FCCh5S0ym9d5UAwAIfDPipJwplwUygghuJtmFCHweEVC%2FuNhJF%2FtZqb3KoA%2BNnZYqwoP92XTJCtIZMIaRlvrQuILrjCv5KG9BjqkAUbz1vt6sEUBR9E%2BEMQr%2FIQEy1AEAwsOdF8SKjRW3MES3HChPsF7JjkFjISxvJFYGqlOL85ZVx4VqGkFTpQFYGt6ug544p3PQf%2BX7PVcmdKE3rpY%2F792udSltFQkwZ5c8s8PwGrciSzrkgin9EsAWVkpf1k0kab063DbRJy0DwC98f7coq8R5xKaI%2BFsL4YvEAmgTg0iwdodBiNKt3ZFx8gIK1RC&X-Amz-Signature=dd997cd819a693e5988e8ec19590ab4106ef61ddd26ef23518a37f326f00abb9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IWYW7NW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB8vdhYhcGjlBRaQj1Hkzf7SHavKMKzEEH4H3wXH6mAgIhAKgQoWEN%2FWkG0Tk3Yp8lpqkGvPppIStqAFVMxv3xGBAhKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfjxqhDBRqGHHh4r8q3APpIZ%2FgknIjDey6bPfjFTnKobGe0IzjZSwZCUbdqesEn%2F%2FgjSpcBY6agrvYaPyhzmjzIl8QqPLqSrjVG2KWW2e9kLCFb7Cb0cHGoFjqKX%2FM9C7q7RfsXeYvWcUZlF7uJP2gfCi9VxCGgdmr7YAMD2RkhO9%2BB11Ex3OwG6pp%2Bwv62dXo3c6o0Rzl%2BfT0LlHedalFQ5jJqqje5hFR44Nq%2FuSstB9GAKiuQPL7kLI4dP11NNkhukide1N2kCnu2cBw9ygZ%2FraJ9it7Zcl5ry1ZOcb8pdmKGgDulrtcYVmt4629wWOmCEawSJx%2FYQ7O9qUt3fCcyTIMZIW74cW9T%2B2AvIfqA6iRBcFTey1%2BHeqctn9TgnAeDF11o96fdf3fhnLtRcFqcLrXhGf9GYL7GakQqJ5ihtDbKKQvIwD9uLQg0GC7FLf5fJ0qNe9GvScdSq6Ek7pNYm%2BDHSQtVAXrrUIeS%2BNv8L%2Fi24wQgVFJ3JemiCROOaQErZ%2FV7w%2FG5u3iqJoI%2FkasK%2BJy3MWoByrAV3HKjPkRn4Xd9LRswsTd%2FCCh5S0ym9d5UAwAIfDPipJwplwUygghuJtmFCHweEVC%2FuNhJF%2FtZqb3KoA%2BNnZYqwoP92XTJCtIZMIaRlvrQuILrjCv5KG9BjqkAUbz1vt6sEUBR9E%2BEMQr%2FIQEy1AEAwsOdF8SKjRW3MES3HChPsF7JjkFjISxvJFYGqlOL85ZVx4VqGkFTpQFYGt6ug544p3PQf%2BX7PVcmdKE3rpY%2F792udSltFQkwZ5c8s8PwGrciSzrkgin9EsAWVkpf1k0kab063DbRJy0DwC98f7coq8R5xKaI%2BFsL4YvEAmgTg0iwdodBiNKt3ZFx8gIK1RC&X-Amz-Signature=27f2875f43bbf48142cd012078c4cf4ff0e83ebdc2e53aea9dc95746b68138bf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IWYW7NW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB8vdhYhcGjlBRaQj1Hkzf7SHavKMKzEEH4H3wXH6mAgIhAKgQoWEN%2FWkG0Tk3Yp8lpqkGvPppIStqAFVMxv3xGBAhKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfjxqhDBRqGHHh4r8q3APpIZ%2FgknIjDey6bPfjFTnKobGe0IzjZSwZCUbdqesEn%2F%2FgjSpcBY6agrvYaPyhzmjzIl8QqPLqSrjVG2KWW2e9kLCFb7Cb0cHGoFjqKX%2FM9C7q7RfsXeYvWcUZlF7uJP2gfCi9VxCGgdmr7YAMD2RkhO9%2BB11Ex3OwG6pp%2Bwv62dXo3c6o0Rzl%2BfT0LlHedalFQ5jJqqje5hFR44Nq%2FuSstB9GAKiuQPL7kLI4dP11NNkhukide1N2kCnu2cBw9ygZ%2FraJ9it7Zcl5ry1ZOcb8pdmKGgDulrtcYVmt4629wWOmCEawSJx%2FYQ7O9qUt3fCcyTIMZIW74cW9T%2B2AvIfqA6iRBcFTey1%2BHeqctn9TgnAeDF11o96fdf3fhnLtRcFqcLrXhGf9GYL7GakQqJ5ihtDbKKQvIwD9uLQg0GC7FLf5fJ0qNe9GvScdSq6Ek7pNYm%2BDHSQtVAXrrUIeS%2BNv8L%2Fi24wQgVFJ3JemiCROOaQErZ%2FV7w%2FG5u3iqJoI%2FkasK%2BJy3MWoByrAV3HKjPkRn4Xd9LRswsTd%2FCCh5S0ym9d5UAwAIfDPipJwplwUygghuJtmFCHweEVC%2FuNhJF%2FtZqb3KoA%2BNnZYqwoP92XTJCtIZMIaRlvrQuILrjCv5KG9BjqkAUbz1vt6sEUBR9E%2BEMQr%2FIQEy1AEAwsOdF8SKjRW3MES3HChPsF7JjkFjISxvJFYGqlOL85ZVx4VqGkFTpQFYGt6ug544p3PQf%2BX7PVcmdKE3rpY%2F792udSltFQkwZ5c8s8PwGrciSzrkgin9EsAWVkpf1k0kab063DbRJy0DwC98f7coq8R5xKaI%2BFsL4YvEAmgTg0iwdodBiNKt3ZFx8gIK1RC&X-Amz-Signature=1524f6203c05b3a05246c762d82be64be5b93ca562b2886a47435d03150aff31&X-Amz-SignedHeaders=host&x-id=GetObject)
