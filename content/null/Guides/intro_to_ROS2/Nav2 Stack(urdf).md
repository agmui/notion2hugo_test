---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W25TCB7T%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIESxXoB6FFrCRV5mT5mRDHOHZU7a4ZBpX3X5Zk7ndFsJAiA1K1K1jjhjM7YYKEtG4C3iYf5MKzjisnkJARPI8XyHxCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM8RY0u9KseP558du4KtwDBG6mXOIqCvvtxXQ11thQXpCTjM9zVHP3fQRfKtXBuJnXJsVcsn6mbTJ63A%2FAvENW4N7KgWVXW4gH490A6BOv3IYqKmqcTH14pZg70WekLGnlZmo6V32LVMOn%2BFvsZneIT8a0teRL%2FmAA%2FZVQ79nxLuPUv3R5fpgivVq9grOoDxYmQoB8OWxc%2B5z3%2BbH0qIhJAI6u45Iv2lTmyXpA3PIyw7DEoQm0VwK7lWWGfCIVN7brqdrreJvbChadOZEV8oVQodsBgnPYwd0iltniYzfgdM%2FwZmBEMsqC69rCYHidoyivi3NPuvX5a8%2FiO2stIglkUBWrKUi%2Ff5eEJ5JpHwY4JkofrnUp31cPKqg3MxLrdIfn%2B3JUWAH2IjP5zHYVbfWEouWvcITHhf5Rn6gDY40pj%2Bv0Ous2xwZd3DiDbvlATimeXsmYWmSo%2FRkbWLG8DyIHWZVdiBNKLVGAkvERUoC1r6HO%2BiJUk%2FZA1Qpx%2F7N9PskVhf0XOSYeKOi9W8%2BKauvcmKSb4o5OW7qNAIJuRY6Fkc5ORrCYF7z%2FAxrPO8Jjj0V%2B%2F7JIp5wa5e6A7PpWNvvft%2FhgHp72MZGLm%2F6IMavGG0d0ZDoe59Vxd3esRIhYxpBwHlECRqaGEZ4r3Ykwl8%2BKvQY6pgEFzWCtmjf5fGPee%2FPK8DBaZAeJV0SUJRv4kVKjxc1rFb7M4Fkhwlaoe6NFMTjtpUIhcApx2cnG51uVHPUaqAjQd0sV1RnKyYnFKXTtG83phNOgry0tb77ljnOoXVJTNkK96DuNBB3GLmDYATTfMtRlsvNJYNFdb%2BqiwwhlctsQi7IOcmmv6mxwF2ZD7HNm9BSrUEAT6q7Iy5QMwZbclPCzqsL1Ix4%2F&X-Amz-Signature=79242559cd15da5127b40bc4d94ac08190b99059fdbb6bdf414e189eaa6c2e2a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W25TCB7T%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIESxXoB6FFrCRV5mT5mRDHOHZU7a4ZBpX3X5Zk7ndFsJAiA1K1K1jjhjM7YYKEtG4C3iYf5MKzjisnkJARPI8XyHxCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM8RY0u9KseP558du4KtwDBG6mXOIqCvvtxXQ11thQXpCTjM9zVHP3fQRfKtXBuJnXJsVcsn6mbTJ63A%2FAvENW4N7KgWVXW4gH490A6BOv3IYqKmqcTH14pZg70WekLGnlZmo6V32LVMOn%2BFvsZneIT8a0teRL%2FmAA%2FZVQ79nxLuPUv3R5fpgivVq9grOoDxYmQoB8OWxc%2B5z3%2BbH0qIhJAI6u45Iv2lTmyXpA3PIyw7DEoQm0VwK7lWWGfCIVN7brqdrreJvbChadOZEV8oVQodsBgnPYwd0iltniYzfgdM%2FwZmBEMsqC69rCYHidoyivi3NPuvX5a8%2FiO2stIglkUBWrKUi%2Ff5eEJ5JpHwY4JkofrnUp31cPKqg3MxLrdIfn%2B3JUWAH2IjP5zHYVbfWEouWvcITHhf5Rn6gDY40pj%2Bv0Ous2xwZd3DiDbvlATimeXsmYWmSo%2FRkbWLG8DyIHWZVdiBNKLVGAkvERUoC1r6HO%2BiJUk%2FZA1Qpx%2F7N9PskVhf0XOSYeKOi9W8%2BKauvcmKSb4o5OW7qNAIJuRY6Fkc5ORrCYF7z%2FAxrPO8Jjj0V%2B%2F7JIp5wa5e6A7PpWNvvft%2FhgHp72MZGLm%2F6IMavGG0d0ZDoe59Vxd3esRIhYxpBwHlECRqaGEZ4r3Ykwl8%2BKvQY6pgEFzWCtmjf5fGPee%2FPK8DBaZAeJV0SUJRv4kVKjxc1rFb7M4Fkhwlaoe6NFMTjtpUIhcApx2cnG51uVHPUaqAjQd0sV1RnKyYnFKXTtG83phNOgry0tb77ljnOoXVJTNkK96DuNBB3GLmDYATTfMtRlsvNJYNFdb%2BqiwwhlctsQi7IOcmmv6mxwF2ZD7HNm9BSrUEAT6q7Iy5QMwZbclPCzqsL1Ix4%2F&X-Amz-Signature=4a0d3fbb81a818cf6085c89d3b2eb4e23537576a63d3cad4fdf2f07d3bec664a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W25TCB7T%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIESxXoB6FFrCRV5mT5mRDHOHZU7a4ZBpX3X5Zk7ndFsJAiA1K1K1jjhjM7YYKEtG4C3iYf5MKzjisnkJARPI8XyHxCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM8RY0u9KseP558du4KtwDBG6mXOIqCvvtxXQ11thQXpCTjM9zVHP3fQRfKtXBuJnXJsVcsn6mbTJ63A%2FAvENW4N7KgWVXW4gH490A6BOv3IYqKmqcTH14pZg70WekLGnlZmo6V32LVMOn%2BFvsZneIT8a0teRL%2FmAA%2FZVQ79nxLuPUv3R5fpgivVq9grOoDxYmQoB8OWxc%2B5z3%2BbH0qIhJAI6u45Iv2lTmyXpA3PIyw7DEoQm0VwK7lWWGfCIVN7brqdrreJvbChadOZEV8oVQodsBgnPYwd0iltniYzfgdM%2FwZmBEMsqC69rCYHidoyivi3NPuvX5a8%2FiO2stIglkUBWrKUi%2Ff5eEJ5JpHwY4JkofrnUp31cPKqg3MxLrdIfn%2B3JUWAH2IjP5zHYVbfWEouWvcITHhf5Rn6gDY40pj%2Bv0Ous2xwZd3DiDbvlATimeXsmYWmSo%2FRkbWLG8DyIHWZVdiBNKLVGAkvERUoC1r6HO%2BiJUk%2FZA1Qpx%2F7N9PskVhf0XOSYeKOi9W8%2BKauvcmKSb4o5OW7qNAIJuRY6Fkc5ORrCYF7z%2FAxrPO8Jjj0V%2B%2F7JIp5wa5e6A7PpWNvvft%2FhgHp72MZGLm%2F6IMavGG0d0ZDoe59Vxd3esRIhYxpBwHlECRqaGEZ4r3Ykwl8%2BKvQY6pgEFzWCtmjf5fGPee%2FPK8DBaZAeJV0SUJRv4kVKjxc1rFb7M4Fkhwlaoe6NFMTjtpUIhcApx2cnG51uVHPUaqAjQd0sV1RnKyYnFKXTtG83phNOgry0tb77ljnOoXVJTNkK96DuNBB3GLmDYATTfMtRlsvNJYNFdb%2BqiwwhlctsQi7IOcmmv6mxwF2ZD7HNm9BSrUEAT6q7Iy5QMwZbclPCzqsL1Ix4%2F&X-Amz-Signature=e473e4d12d560cf3e3f9b5676fe26b13bbda07055287984cc0136987d800f3f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W25TCB7T%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIESxXoB6FFrCRV5mT5mRDHOHZU7a4ZBpX3X5Zk7ndFsJAiA1K1K1jjhjM7YYKEtG4C3iYf5MKzjisnkJARPI8XyHxCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM8RY0u9KseP558du4KtwDBG6mXOIqCvvtxXQ11thQXpCTjM9zVHP3fQRfKtXBuJnXJsVcsn6mbTJ63A%2FAvENW4N7KgWVXW4gH490A6BOv3IYqKmqcTH14pZg70WekLGnlZmo6V32LVMOn%2BFvsZneIT8a0teRL%2FmAA%2FZVQ79nxLuPUv3R5fpgivVq9grOoDxYmQoB8OWxc%2B5z3%2BbH0qIhJAI6u45Iv2lTmyXpA3PIyw7DEoQm0VwK7lWWGfCIVN7brqdrreJvbChadOZEV8oVQodsBgnPYwd0iltniYzfgdM%2FwZmBEMsqC69rCYHidoyivi3NPuvX5a8%2FiO2stIglkUBWrKUi%2Ff5eEJ5JpHwY4JkofrnUp31cPKqg3MxLrdIfn%2B3JUWAH2IjP5zHYVbfWEouWvcITHhf5Rn6gDY40pj%2Bv0Ous2xwZd3DiDbvlATimeXsmYWmSo%2FRkbWLG8DyIHWZVdiBNKLVGAkvERUoC1r6HO%2BiJUk%2FZA1Qpx%2F7N9PskVhf0XOSYeKOi9W8%2BKauvcmKSb4o5OW7qNAIJuRY6Fkc5ORrCYF7z%2FAxrPO8Jjj0V%2B%2F7JIp5wa5e6A7PpWNvvft%2FhgHp72MZGLm%2F6IMavGG0d0ZDoe59Vxd3esRIhYxpBwHlECRqaGEZ4r3Ykwl8%2BKvQY6pgEFzWCtmjf5fGPee%2FPK8DBaZAeJV0SUJRv4kVKjxc1rFb7M4Fkhwlaoe6NFMTjtpUIhcApx2cnG51uVHPUaqAjQd0sV1RnKyYnFKXTtG83phNOgry0tb77ljnOoXVJTNkK96DuNBB3GLmDYATTfMtRlsvNJYNFdb%2BqiwwhlctsQi7IOcmmv6mxwF2ZD7HNm9BSrUEAT6q7Iy5QMwZbclPCzqsL1Ix4%2F&X-Amz-Signature=6493fd745ac3e4ece0ba02c33c8a1cd1405e74241c2ac901d64af80ad0702001&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W25TCB7T%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIESxXoB6FFrCRV5mT5mRDHOHZU7a4ZBpX3X5Zk7ndFsJAiA1K1K1jjhjM7YYKEtG4C3iYf5MKzjisnkJARPI8XyHxCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM8RY0u9KseP558du4KtwDBG6mXOIqCvvtxXQ11thQXpCTjM9zVHP3fQRfKtXBuJnXJsVcsn6mbTJ63A%2FAvENW4N7KgWVXW4gH490A6BOv3IYqKmqcTH14pZg70WekLGnlZmo6V32LVMOn%2BFvsZneIT8a0teRL%2FmAA%2FZVQ79nxLuPUv3R5fpgivVq9grOoDxYmQoB8OWxc%2B5z3%2BbH0qIhJAI6u45Iv2lTmyXpA3PIyw7DEoQm0VwK7lWWGfCIVN7brqdrreJvbChadOZEV8oVQodsBgnPYwd0iltniYzfgdM%2FwZmBEMsqC69rCYHidoyivi3NPuvX5a8%2FiO2stIglkUBWrKUi%2Ff5eEJ5JpHwY4JkofrnUp31cPKqg3MxLrdIfn%2B3JUWAH2IjP5zHYVbfWEouWvcITHhf5Rn6gDY40pj%2Bv0Ous2xwZd3DiDbvlATimeXsmYWmSo%2FRkbWLG8DyIHWZVdiBNKLVGAkvERUoC1r6HO%2BiJUk%2FZA1Qpx%2F7N9PskVhf0XOSYeKOi9W8%2BKauvcmKSb4o5OW7qNAIJuRY6Fkc5ORrCYF7z%2FAxrPO8Jjj0V%2B%2F7JIp5wa5e6A7PpWNvvft%2FhgHp72MZGLm%2F6IMavGG0d0ZDoe59Vxd3esRIhYxpBwHlECRqaGEZ4r3Ykwl8%2BKvQY6pgEFzWCtmjf5fGPee%2FPK8DBaZAeJV0SUJRv4kVKjxc1rFb7M4Fkhwlaoe6NFMTjtpUIhcApx2cnG51uVHPUaqAjQd0sV1RnKyYnFKXTtG83phNOgry0tb77ljnOoXVJTNkK96DuNBB3GLmDYATTfMtRlsvNJYNFdb%2BqiwwhlctsQi7IOcmmv6mxwF2ZD7HNm9BSrUEAT6q7Iy5QMwZbclPCzqsL1Ix4%2F&X-Amz-Signature=73ce46cd876f37f1aa107ddebfe9f8e4f6362bd8773cd9e0c4faaf7302c7ab2d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W25TCB7T%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIESxXoB6FFrCRV5mT5mRDHOHZU7a4ZBpX3X5Zk7ndFsJAiA1K1K1jjhjM7YYKEtG4C3iYf5MKzjisnkJARPI8XyHxCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM8RY0u9KseP558du4KtwDBG6mXOIqCvvtxXQ11thQXpCTjM9zVHP3fQRfKtXBuJnXJsVcsn6mbTJ63A%2FAvENW4N7KgWVXW4gH490A6BOv3IYqKmqcTH14pZg70WekLGnlZmo6V32LVMOn%2BFvsZneIT8a0teRL%2FmAA%2FZVQ79nxLuPUv3R5fpgivVq9grOoDxYmQoB8OWxc%2B5z3%2BbH0qIhJAI6u45Iv2lTmyXpA3PIyw7DEoQm0VwK7lWWGfCIVN7brqdrreJvbChadOZEV8oVQodsBgnPYwd0iltniYzfgdM%2FwZmBEMsqC69rCYHidoyivi3NPuvX5a8%2FiO2stIglkUBWrKUi%2Ff5eEJ5JpHwY4JkofrnUp31cPKqg3MxLrdIfn%2B3JUWAH2IjP5zHYVbfWEouWvcITHhf5Rn6gDY40pj%2Bv0Ous2xwZd3DiDbvlATimeXsmYWmSo%2FRkbWLG8DyIHWZVdiBNKLVGAkvERUoC1r6HO%2BiJUk%2FZA1Qpx%2F7N9PskVhf0XOSYeKOi9W8%2BKauvcmKSb4o5OW7qNAIJuRY6Fkc5ORrCYF7z%2FAxrPO8Jjj0V%2B%2F7JIp5wa5e6A7PpWNvvft%2FhgHp72MZGLm%2F6IMavGG0d0ZDoe59Vxd3esRIhYxpBwHlECRqaGEZ4r3Ykwl8%2BKvQY6pgEFzWCtmjf5fGPee%2FPK8DBaZAeJV0SUJRv4kVKjxc1rFb7M4Fkhwlaoe6NFMTjtpUIhcApx2cnG51uVHPUaqAjQd0sV1RnKyYnFKXTtG83phNOgry0tb77ljnOoXVJTNkK96DuNBB3GLmDYATTfMtRlsvNJYNFdb%2BqiwwhlctsQi7IOcmmv6mxwF2ZD7HNm9BSrUEAT6q7Iy5QMwZbclPCzqsL1Ix4%2F&X-Amz-Signature=ee08d2317e358d239937ee2cb157667002e87d4f9107c25bef44a9589df9af1d&X-Amz-SignedHeaders=host&x-id=GetObject)
