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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZNIEL7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRyz8vUsnjYmiw3gn8bJloPVfE%2BZKy3bPwujgJFghe2AIhALj1mGnY6Q09Pc3LkRWZ3rc8Mer6IgBcpA8CYvmVeZc1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtg64G1w9Y%2BZZE7Gkq3ANZFxz9fDO4UlkQ93kogdS2Eme40v0crNBx7UxCel0SCrtgfMMsOVXz0R0YAz6vAGKFECoeSuR36v9a5Wg9zrnMgtDdsqkUpVwfm91u0TfF8uhCZ0bpCElKSUC1AttLw0p2oZVl573fATTWZ%2B0CzxeVLAN68j4%2BqLYu9Airb8jiIjzD0cEka5KVX7aLXLzBX9BYtUlpZjEkp%2FjIyRbI9IWSHH9qXVDz0WXS7KeNJSJiGPx%2BRXFGPkH9%2BabNKuugD2i3nUrGj2IEnbRvh6gW4Y1vkswIuAh4jM7Gyd3lrvcy9g4uMSaB7umbAhh%2BZFEupU4YSt4pdFj8WtwNFR4CDrbrf4fbLtv94FatYmA8mM0LHe0RZtv2uCikMcNbeTtTXWGvWPcHKnER6E%2FO1iilrLrDidAv07ZnnhlCXhaS6Kx99DFw4p%2B2DKaaeoilRrrcvAcAOppFrJNJAfNOW54ma%2FcpN%2B%2Fda0ng%2FRI4R%2FeGQH%2FEIuP22U6q8pk7hcSlh3BO3ayEGirHy596%2FBXakKZnRBSWJR4FKMK%2BQv%2Bu0DIrb6NW9j4UsWaFwRtk5XvW3UYW68SI9CctJhShi8g0UcbTBxC%2B36G1QdRo8wZquT%2FzieoWELnJ5FuYLQsIe8TrATC3uufBBjqkAT6dpfaik%2Flo%2FRorwp%2FUJyiTOteCdx7pWgeC0XJ2N%2BCa54qnLbM4UtDxyccActgOH%2FQ6jP%2FdEfiFlkQrAq%2FgMrO8YyfwNaMrbBM2j2LlZ1VVaQVez8V08qOvStq41bdB3rm9ZQPIX4lFzz4T4U4LI5ZiPvZLkNT%2FK4L73%2Bjmf2U6TiPacPaNSyMdTcjZBgtNFe6bn96SMIoGlMz09iUTl8qnp53G&X-Amz-Signature=1769cb3ff891b25c4fa9c16d0847b98a1254981a3a099b8feb1640dfbbb2d9ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZNIEL7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRyz8vUsnjYmiw3gn8bJloPVfE%2BZKy3bPwujgJFghe2AIhALj1mGnY6Q09Pc3LkRWZ3rc8Mer6IgBcpA8CYvmVeZc1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtg64G1w9Y%2BZZE7Gkq3ANZFxz9fDO4UlkQ93kogdS2Eme40v0crNBx7UxCel0SCrtgfMMsOVXz0R0YAz6vAGKFECoeSuR36v9a5Wg9zrnMgtDdsqkUpVwfm91u0TfF8uhCZ0bpCElKSUC1AttLw0p2oZVl573fATTWZ%2B0CzxeVLAN68j4%2BqLYu9Airb8jiIjzD0cEka5KVX7aLXLzBX9BYtUlpZjEkp%2FjIyRbI9IWSHH9qXVDz0WXS7KeNJSJiGPx%2BRXFGPkH9%2BabNKuugD2i3nUrGj2IEnbRvh6gW4Y1vkswIuAh4jM7Gyd3lrvcy9g4uMSaB7umbAhh%2BZFEupU4YSt4pdFj8WtwNFR4CDrbrf4fbLtv94FatYmA8mM0LHe0RZtv2uCikMcNbeTtTXWGvWPcHKnER6E%2FO1iilrLrDidAv07ZnnhlCXhaS6Kx99DFw4p%2B2DKaaeoilRrrcvAcAOppFrJNJAfNOW54ma%2FcpN%2B%2Fda0ng%2FRI4R%2FeGQH%2FEIuP22U6q8pk7hcSlh3BO3ayEGirHy596%2FBXakKZnRBSWJR4FKMK%2BQv%2Bu0DIrb6NW9j4UsWaFwRtk5XvW3UYW68SI9CctJhShi8g0UcbTBxC%2B36G1QdRo8wZquT%2FzieoWELnJ5FuYLQsIe8TrATC3uufBBjqkAT6dpfaik%2Flo%2FRorwp%2FUJyiTOteCdx7pWgeC0XJ2N%2BCa54qnLbM4UtDxyccActgOH%2FQ6jP%2FdEfiFlkQrAq%2FgMrO8YyfwNaMrbBM2j2LlZ1VVaQVez8V08qOvStq41bdB3rm9ZQPIX4lFzz4T4U4LI5ZiPvZLkNT%2FK4L73%2Bjmf2U6TiPacPaNSyMdTcjZBgtNFe6bn96SMIoGlMz09iUTl8qnp53G&X-Amz-Signature=1cfaf5e62ef04b42625c3da278b531f5b4f9be498402f1e92ca5385104c6c9d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZNIEL7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRyz8vUsnjYmiw3gn8bJloPVfE%2BZKy3bPwujgJFghe2AIhALj1mGnY6Q09Pc3LkRWZ3rc8Mer6IgBcpA8CYvmVeZc1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtg64G1w9Y%2BZZE7Gkq3ANZFxz9fDO4UlkQ93kogdS2Eme40v0crNBx7UxCel0SCrtgfMMsOVXz0R0YAz6vAGKFECoeSuR36v9a5Wg9zrnMgtDdsqkUpVwfm91u0TfF8uhCZ0bpCElKSUC1AttLw0p2oZVl573fATTWZ%2B0CzxeVLAN68j4%2BqLYu9Airb8jiIjzD0cEka5KVX7aLXLzBX9BYtUlpZjEkp%2FjIyRbI9IWSHH9qXVDz0WXS7KeNJSJiGPx%2BRXFGPkH9%2BabNKuugD2i3nUrGj2IEnbRvh6gW4Y1vkswIuAh4jM7Gyd3lrvcy9g4uMSaB7umbAhh%2BZFEupU4YSt4pdFj8WtwNFR4CDrbrf4fbLtv94FatYmA8mM0LHe0RZtv2uCikMcNbeTtTXWGvWPcHKnER6E%2FO1iilrLrDidAv07ZnnhlCXhaS6Kx99DFw4p%2B2DKaaeoilRrrcvAcAOppFrJNJAfNOW54ma%2FcpN%2B%2Fda0ng%2FRI4R%2FeGQH%2FEIuP22U6q8pk7hcSlh3BO3ayEGirHy596%2FBXakKZnRBSWJR4FKMK%2BQv%2Bu0DIrb6NW9j4UsWaFwRtk5XvW3UYW68SI9CctJhShi8g0UcbTBxC%2B36G1QdRo8wZquT%2FzieoWELnJ5FuYLQsIe8TrATC3uufBBjqkAT6dpfaik%2Flo%2FRorwp%2FUJyiTOteCdx7pWgeC0XJ2N%2BCa54qnLbM4UtDxyccActgOH%2FQ6jP%2FdEfiFlkQrAq%2FgMrO8YyfwNaMrbBM2j2LlZ1VVaQVez8V08qOvStq41bdB3rm9ZQPIX4lFzz4T4U4LI5ZiPvZLkNT%2FK4L73%2Bjmf2U6TiPacPaNSyMdTcjZBgtNFe6bn96SMIoGlMz09iUTl8qnp53G&X-Amz-Signature=2bc8f27ff01e92efe88bbeabd67f688273ad0d1ebb57397edda39a13a22c1b7e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZNIEL7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRyz8vUsnjYmiw3gn8bJloPVfE%2BZKy3bPwujgJFghe2AIhALj1mGnY6Q09Pc3LkRWZ3rc8Mer6IgBcpA8CYvmVeZc1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtg64G1w9Y%2BZZE7Gkq3ANZFxz9fDO4UlkQ93kogdS2Eme40v0crNBx7UxCel0SCrtgfMMsOVXz0R0YAz6vAGKFECoeSuR36v9a5Wg9zrnMgtDdsqkUpVwfm91u0TfF8uhCZ0bpCElKSUC1AttLw0p2oZVl573fATTWZ%2B0CzxeVLAN68j4%2BqLYu9Airb8jiIjzD0cEka5KVX7aLXLzBX9BYtUlpZjEkp%2FjIyRbI9IWSHH9qXVDz0WXS7KeNJSJiGPx%2BRXFGPkH9%2BabNKuugD2i3nUrGj2IEnbRvh6gW4Y1vkswIuAh4jM7Gyd3lrvcy9g4uMSaB7umbAhh%2BZFEupU4YSt4pdFj8WtwNFR4CDrbrf4fbLtv94FatYmA8mM0LHe0RZtv2uCikMcNbeTtTXWGvWPcHKnER6E%2FO1iilrLrDidAv07ZnnhlCXhaS6Kx99DFw4p%2B2DKaaeoilRrrcvAcAOppFrJNJAfNOW54ma%2FcpN%2B%2Fda0ng%2FRI4R%2FeGQH%2FEIuP22U6q8pk7hcSlh3BO3ayEGirHy596%2FBXakKZnRBSWJR4FKMK%2BQv%2Bu0DIrb6NW9j4UsWaFwRtk5XvW3UYW68SI9CctJhShi8g0UcbTBxC%2B36G1QdRo8wZquT%2FzieoWELnJ5FuYLQsIe8TrATC3uufBBjqkAT6dpfaik%2Flo%2FRorwp%2FUJyiTOteCdx7pWgeC0XJ2N%2BCa54qnLbM4UtDxyccActgOH%2FQ6jP%2FdEfiFlkQrAq%2FgMrO8YyfwNaMrbBM2j2LlZ1VVaQVez8V08qOvStq41bdB3rm9ZQPIX4lFzz4T4U4LI5ZiPvZLkNT%2FK4L73%2Bjmf2U6TiPacPaNSyMdTcjZBgtNFe6bn96SMIoGlMz09iUTl8qnp53G&X-Amz-Signature=be8555f34bcb261b43f47b3b49914ce4ca9b1655c0474348995eb781a6780d48&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZNIEL7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRyz8vUsnjYmiw3gn8bJloPVfE%2BZKy3bPwujgJFghe2AIhALj1mGnY6Q09Pc3LkRWZ3rc8Mer6IgBcpA8CYvmVeZc1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtg64G1w9Y%2BZZE7Gkq3ANZFxz9fDO4UlkQ93kogdS2Eme40v0crNBx7UxCel0SCrtgfMMsOVXz0R0YAz6vAGKFECoeSuR36v9a5Wg9zrnMgtDdsqkUpVwfm91u0TfF8uhCZ0bpCElKSUC1AttLw0p2oZVl573fATTWZ%2B0CzxeVLAN68j4%2BqLYu9Airb8jiIjzD0cEka5KVX7aLXLzBX9BYtUlpZjEkp%2FjIyRbI9IWSHH9qXVDz0WXS7KeNJSJiGPx%2BRXFGPkH9%2BabNKuugD2i3nUrGj2IEnbRvh6gW4Y1vkswIuAh4jM7Gyd3lrvcy9g4uMSaB7umbAhh%2BZFEupU4YSt4pdFj8WtwNFR4CDrbrf4fbLtv94FatYmA8mM0LHe0RZtv2uCikMcNbeTtTXWGvWPcHKnER6E%2FO1iilrLrDidAv07ZnnhlCXhaS6Kx99DFw4p%2B2DKaaeoilRrrcvAcAOppFrJNJAfNOW54ma%2FcpN%2B%2Fda0ng%2FRI4R%2FeGQH%2FEIuP22U6q8pk7hcSlh3BO3ayEGirHy596%2FBXakKZnRBSWJR4FKMK%2BQv%2Bu0DIrb6NW9j4UsWaFwRtk5XvW3UYW68SI9CctJhShi8g0UcbTBxC%2B36G1QdRo8wZquT%2FzieoWELnJ5FuYLQsIe8TrATC3uufBBjqkAT6dpfaik%2Flo%2FRorwp%2FUJyiTOteCdx7pWgeC0XJ2N%2BCa54qnLbM4UtDxyccActgOH%2FQ6jP%2FdEfiFlkQrAq%2FgMrO8YyfwNaMrbBM2j2LlZ1VVaQVez8V08qOvStq41bdB3rm9ZQPIX4lFzz4T4U4LI5ZiPvZLkNT%2FK4L73%2Bjmf2U6TiPacPaNSyMdTcjZBgtNFe6bn96SMIoGlMz09iUTl8qnp53G&X-Amz-Signature=e38c7900b11d2ad92f0a40ea5a4afd0c65771f6188911ca8e1ed1dbadcfc1291&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZNIEL7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRyz8vUsnjYmiw3gn8bJloPVfE%2BZKy3bPwujgJFghe2AIhALj1mGnY6Q09Pc3LkRWZ3rc8Mer6IgBcpA8CYvmVeZc1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtg64G1w9Y%2BZZE7Gkq3ANZFxz9fDO4UlkQ93kogdS2Eme40v0crNBx7UxCel0SCrtgfMMsOVXz0R0YAz6vAGKFECoeSuR36v9a5Wg9zrnMgtDdsqkUpVwfm91u0TfF8uhCZ0bpCElKSUC1AttLw0p2oZVl573fATTWZ%2B0CzxeVLAN68j4%2BqLYu9Airb8jiIjzD0cEka5KVX7aLXLzBX9BYtUlpZjEkp%2FjIyRbI9IWSHH9qXVDz0WXS7KeNJSJiGPx%2BRXFGPkH9%2BabNKuugD2i3nUrGj2IEnbRvh6gW4Y1vkswIuAh4jM7Gyd3lrvcy9g4uMSaB7umbAhh%2BZFEupU4YSt4pdFj8WtwNFR4CDrbrf4fbLtv94FatYmA8mM0LHe0RZtv2uCikMcNbeTtTXWGvWPcHKnER6E%2FO1iilrLrDidAv07ZnnhlCXhaS6Kx99DFw4p%2B2DKaaeoilRrrcvAcAOppFrJNJAfNOW54ma%2FcpN%2B%2Fda0ng%2FRI4R%2FeGQH%2FEIuP22U6q8pk7hcSlh3BO3ayEGirHy596%2FBXakKZnRBSWJR4FKMK%2BQv%2Bu0DIrb6NW9j4UsWaFwRtk5XvW3UYW68SI9CctJhShi8g0UcbTBxC%2B36G1QdRo8wZquT%2FzieoWELnJ5FuYLQsIe8TrATC3uufBBjqkAT6dpfaik%2Flo%2FRorwp%2FUJyiTOteCdx7pWgeC0XJ2N%2BCa54qnLbM4UtDxyccActgOH%2FQ6jP%2FdEfiFlkQrAq%2FgMrO8YyfwNaMrbBM2j2LlZ1VVaQVez8V08qOvStq41bdB3rm9ZQPIX4lFzz4T4U4LI5ZiPvZLkNT%2FK4L73%2Bjmf2U6TiPacPaNSyMdTcjZBgtNFe6bn96SMIoGlMz09iUTl8qnp53G&X-Amz-Signature=062d7183d53125b57252c3b5cefaf388f582b522d4ccaf9a0cd13f61be3c720a&X-Amz-SignedHeaders=host&x-id=GetObject)
