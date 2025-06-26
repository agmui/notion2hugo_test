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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S3UKDYH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCukPvutHLYlIO0yjgaRgl7ZMtuIgjjUqTPTfxf%2B75mSwIhAPijRixFux1VacYKnURrc8qPCZ1Mvg4jGq23tqCDaxVmKv8DCF8QABoMNjM3NDIzMTgzODA1IgwbiaSliOmcon8xLWkq3AOuaLON7hU3tF5y1eszmAZ9Q12%2FykN0F3huuHo1zTGaec6lZw7Kqf6%2BbOSNBrS3VI3OwhxE%2FrUsFXQwmoV3iiuaSQkkbuwHp5eJGBJy8YpxyYQbU8c4sGjITMOhkrtNM2%2FFZL3CRwHQTtdoNUUolEA2DRb%2F2WJHkuFEOehq3H5nWq6mnjthzFGCxZAlxdgxRePocOmT875CcnK2BLPsamk03q7%2FV%2B3Oxzw5Tc3do1JrITmAW0IysP65Gc6ACArNQ%2FPo9MKjfmq%2F4b5I3cBQoxS2sfzQF9ECEWchpbXQii1KghIBKsstHwdJXMa3gUHEB3mwKtQfqRCqOnzmzJeg8WIaUxoVm%2FCoTYK9TUJwItsA3aabWAY0LPJkzckTTOBMhULjKrk%2FXo8YB%2F4kv0KfjJSu5sA%2BynivY7jR%2Fl8%2Bry%2BhDz8WKvvruNQSymECjm2fvVrnOPXbIx5p9XPDjqNNA4EfMszB4ya7wBNVcaGKK5LSQVYXGt0zokGwsZdqJLPGwyZeAd5AEIqUqzZ5TQKwjJDNwSSWjLeZ9sVYywcEsRXMQNDL4sy4hBLPD2%2B4Cxf%2FO4OwNw8be0l3G%2FP%2FrHzl2OxMVFnewCISmBG3sMKVTvfRWKA5Imv7RnRVF57ATjDSm%2FXCBjqkAdYZPhbqg6YRjb3NcCQrk1dbTADEPp4COF4LW9lxavQzeFoK2mbnqMfDRmy%2B1BsRxtY8KGO0RXxkzgj4T63yoW2u2B2tYAiDsS%2B97Q17eRKDCijchPKeNDWMwzSN6W8urgHGZ9JlAMk94Qh4EKYAx%2BoRK6qrwWPINiFTXdqRrOTIQFOxgh6cD09YDdY7uJMy6Sp9iC2oM18SM5jIIHoacA7ZU9J5&X-Amz-Signature=64eb64b7ec7441055871064fd9c8ec252597336fb8c1877595eeae710bc98687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S3UKDYH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCukPvutHLYlIO0yjgaRgl7ZMtuIgjjUqTPTfxf%2B75mSwIhAPijRixFux1VacYKnURrc8qPCZ1Mvg4jGq23tqCDaxVmKv8DCF8QABoMNjM3NDIzMTgzODA1IgwbiaSliOmcon8xLWkq3AOuaLON7hU3tF5y1eszmAZ9Q12%2FykN0F3huuHo1zTGaec6lZw7Kqf6%2BbOSNBrS3VI3OwhxE%2FrUsFXQwmoV3iiuaSQkkbuwHp5eJGBJy8YpxyYQbU8c4sGjITMOhkrtNM2%2FFZL3CRwHQTtdoNUUolEA2DRb%2F2WJHkuFEOehq3H5nWq6mnjthzFGCxZAlxdgxRePocOmT875CcnK2BLPsamk03q7%2FV%2B3Oxzw5Tc3do1JrITmAW0IysP65Gc6ACArNQ%2FPo9MKjfmq%2F4b5I3cBQoxS2sfzQF9ECEWchpbXQii1KghIBKsstHwdJXMa3gUHEB3mwKtQfqRCqOnzmzJeg8WIaUxoVm%2FCoTYK9TUJwItsA3aabWAY0LPJkzckTTOBMhULjKrk%2FXo8YB%2F4kv0KfjJSu5sA%2BynivY7jR%2Fl8%2Bry%2BhDz8WKvvruNQSymECjm2fvVrnOPXbIx5p9XPDjqNNA4EfMszB4ya7wBNVcaGKK5LSQVYXGt0zokGwsZdqJLPGwyZeAd5AEIqUqzZ5TQKwjJDNwSSWjLeZ9sVYywcEsRXMQNDL4sy4hBLPD2%2B4Cxf%2FO4OwNw8be0l3G%2FP%2FrHzl2OxMVFnewCISmBG3sMKVTvfRWKA5Imv7RnRVF57ATjDSm%2FXCBjqkAdYZPhbqg6YRjb3NcCQrk1dbTADEPp4COF4LW9lxavQzeFoK2mbnqMfDRmy%2B1BsRxtY8KGO0RXxkzgj4T63yoW2u2B2tYAiDsS%2B97Q17eRKDCijchPKeNDWMwzSN6W8urgHGZ9JlAMk94Qh4EKYAx%2BoRK6qrwWPINiFTXdqRrOTIQFOxgh6cD09YDdY7uJMy6Sp9iC2oM18SM5jIIHoacA7ZU9J5&X-Amz-Signature=017708743524e945f3b70c88f17a896b3c87d079e34eafecc728bd7345e9274e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S3UKDYH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCukPvutHLYlIO0yjgaRgl7ZMtuIgjjUqTPTfxf%2B75mSwIhAPijRixFux1VacYKnURrc8qPCZ1Mvg4jGq23tqCDaxVmKv8DCF8QABoMNjM3NDIzMTgzODA1IgwbiaSliOmcon8xLWkq3AOuaLON7hU3tF5y1eszmAZ9Q12%2FykN0F3huuHo1zTGaec6lZw7Kqf6%2BbOSNBrS3VI3OwhxE%2FrUsFXQwmoV3iiuaSQkkbuwHp5eJGBJy8YpxyYQbU8c4sGjITMOhkrtNM2%2FFZL3CRwHQTtdoNUUolEA2DRb%2F2WJHkuFEOehq3H5nWq6mnjthzFGCxZAlxdgxRePocOmT875CcnK2BLPsamk03q7%2FV%2B3Oxzw5Tc3do1JrITmAW0IysP65Gc6ACArNQ%2FPo9MKjfmq%2F4b5I3cBQoxS2sfzQF9ECEWchpbXQii1KghIBKsstHwdJXMa3gUHEB3mwKtQfqRCqOnzmzJeg8WIaUxoVm%2FCoTYK9TUJwItsA3aabWAY0LPJkzckTTOBMhULjKrk%2FXo8YB%2F4kv0KfjJSu5sA%2BynivY7jR%2Fl8%2Bry%2BhDz8WKvvruNQSymECjm2fvVrnOPXbIx5p9XPDjqNNA4EfMszB4ya7wBNVcaGKK5LSQVYXGt0zokGwsZdqJLPGwyZeAd5AEIqUqzZ5TQKwjJDNwSSWjLeZ9sVYywcEsRXMQNDL4sy4hBLPD2%2B4Cxf%2FO4OwNw8be0l3G%2FP%2FrHzl2OxMVFnewCISmBG3sMKVTvfRWKA5Imv7RnRVF57ATjDSm%2FXCBjqkAdYZPhbqg6YRjb3NcCQrk1dbTADEPp4COF4LW9lxavQzeFoK2mbnqMfDRmy%2B1BsRxtY8KGO0RXxkzgj4T63yoW2u2B2tYAiDsS%2B97Q17eRKDCijchPKeNDWMwzSN6W8urgHGZ9JlAMk94Qh4EKYAx%2BoRK6qrwWPINiFTXdqRrOTIQFOxgh6cD09YDdY7uJMy6Sp9iC2oM18SM5jIIHoacA7ZU9J5&X-Amz-Signature=9d2a0f53f942c2e7215ac17e0aa771289872d7d32ab645f23013751af1fbd805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S3UKDYH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCukPvutHLYlIO0yjgaRgl7ZMtuIgjjUqTPTfxf%2B75mSwIhAPijRixFux1VacYKnURrc8qPCZ1Mvg4jGq23tqCDaxVmKv8DCF8QABoMNjM3NDIzMTgzODA1IgwbiaSliOmcon8xLWkq3AOuaLON7hU3tF5y1eszmAZ9Q12%2FykN0F3huuHo1zTGaec6lZw7Kqf6%2BbOSNBrS3VI3OwhxE%2FrUsFXQwmoV3iiuaSQkkbuwHp5eJGBJy8YpxyYQbU8c4sGjITMOhkrtNM2%2FFZL3CRwHQTtdoNUUolEA2DRb%2F2WJHkuFEOehq3H5nWq6mnjthzFGCxZAlxdgxRePocOmT875CcnK2BLPsamk03q7%2FV%2B3Oxzw5Tc3do1JrITmAW0IysP65Gc6ACArNQ%2FPo9MKjfmq%2F4b5I3cBQoxS2sfzQF9ECEWchpbXQii1KghIBKsstHwdJXMa3gUHEB3mwKtQfqRCqOnzmzJeg8WIaUxoVm%2FCoTYK9TUJwItsA3aabWAY0LPJkzckTTOBMhULjKrk%2FXo8YB%2F4kv0KfjJSu5sA%2BynivY7jR%2Fl8%2Bry%2BhDz8WKvvruNQSymECjm2fvVrnOPXbIx5p9XPDjqNNA4EfMszB4ya7wBNVcaGKK5LSQVYXGt0zokGwsZdqJLPGwyZeAd5AEIqUqzZ5TQKwjJDNwSSWjLeZ9sVYywcEsRXMQNDL4sy4hBLPD2%2B4Cxf%2FO4OwNw8be0l3G%2FP%2FrHzl2OxMVFnewCISmBG3sMKVTvfRWKA5Imv7RnRVF57ATjDSm%2FXCBjqkAdYZPhbqg6YRjb3NcCQrk1dbTADEPp4COF4LW9lxavQzeFoK2mbnqMfDRmy%2B1BsRxtY8KGO0RXxkzgj4T63yoW2u2B2tYAiDsS%2B97Q17eRKDCijchPKeNDWMwzSN6W8urgHGZ9JlAMk94Qh4EKYAx%2BoRK6qrwWPINiFTXdqRrOTIQFOxgh6cD09YDdY7uJMy6Sp9iC2oM18SM5jIIHoacA7ZU9J5&X-Amz-Signature=3f3228c20705f497d425d6d516192afcd68d8c9c72534ad5db22ba6072b3095d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S3UKDYH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCukPvutHLYlIO0yjgaRgl7ZMtuIgjjUqTPTfxf%2B75mSwIhAPijRixFux1VacYKnURrc8qPCZ1Mvg4jGq23tqCDaxVmKv8DCF8QABoMNjM3NDIzMTgzODA1IgwbiaSliOmcon8xLWkq3AOuaLON7hU3tF5y1eszmAZ9Q12%2FykN0F3huuHo1zTGaec6lZw7Kqf6%2BbOSNBrS3VI3OwhxE%2FrUsFXQwmoV3iiuaSQkkbuwHp5eJGBJy8YpxyYQbU8c4sGjITMOhkrtNM2%2FFZL3CRwHQTtdoNUUolEA2DRb%2F2WJHkuFEOehq3H5nWq6mnjthzFGCxZAlxdgxRePocOmT875CcnK2BLPsamk03q7%2FV%2B3Oxzw5Tc3do1JrITmAW0IysP65Gc6ACArNQ%2FPo9MKjfmq%2F4b5I3cBQoxS2sfzQF9ECEWchpbXQii1KghIBKsstHwdJXMa3gUHEB3mwKtQfqRCqOnzmzJeg8WIaUxoVm%2FCoTYK9TUJwItsA3aabWAY0LPJkzckTTOBMhULjKrk%2FXo8YB%2F4kv0KfjJSu5sA%2BynivY7jR%2Fl8%2Bry%2BhDz8WKvvruNQSymECjm2fvVrnOPXbIx5p9XPDjqNNA4EfMszB4ya7wBNVcaGKK5LSQVYXGt0zokGwsZdqJLPGwyZeAd5AEIqUqzZ5TQKwjJDNwSSWjLeZ9sVYywcEsRXMQNDL4sy4hBLPD2%2B4Cxf%2FO4OwNw8be0l3G%2FP%2FrHzl2OxMVFnewCISmBG3sMKVTvfRWKA5Imv7RnRVF57ATjDSm%2FXCBjqkAdYZPhbqg6YRjb3NcCQrk1dbTADEPp4COF4LW9lxavQzeFoK2mbnqMfDRmy%2B1BsRxtY8KGO0RXxkzgj4T63yoW2u2B2tYAiDsS%2B97Q17eRKDCijchPKeNDWMwzSN6W8urgHGZ9JlAMk94Qh4EKYAx%2BoRK6qrwWPINiFTXdqRrOTIQFOxgh6cD09YDdY7uJMy6Sp9iC2oM18SM5jIIHoacA7ZU9J5&X-Amz-Signature=fe80446bebfea848207fb6cdc12cf4b4a2f06489f82392418dc9f5701a767e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S3UKDYH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCukPvutHLYlIO0yjgaRgl7ZMtuIgjjUqTPTfxf%2B75mSwIhAPijRixFux1VacYKnURrc8qPCZ1Mvg4jGq23tqCDaxVmKv8DCF8QABoMNjM3NDIzMTgzODA1IgwbiaSliOmcon8xLWkq3AOuaLON7hU3tF5y1eszmAZ9Q12%2FykN0F3huuHo1zTGaec6lZw7Kqf6%2BbOSNBrS3VI3OwhxE%2FrUsFXQwmoV3iiuaSQkkbuwHp5eJGBJy8YpxyYQbU8c4sGjITMOhkrtNM2%2FFZL3CRwHQTtdoNUUolEA2DRb%2F2WJHkuFEOehq3H5nWq6mnjthzFGCxZAlxdgxRePocOmT875CcnK2BLPsamk03q7%2FV%2B3Oxzw5Tc3do1JrITmAW0IysP65Gc6ACArNQ%2FPo9MKjfmq%2F4b5I3cBQoxS2sfzQF9ECEWchpbXQii1KghIBKsstHwdJXMa3gUHEB3mwKtQfqRCqOnzmzJeg8WIaUxoVm%2FCoTYK9TUJwItsA3aabWAY0LPJkzckTTOBMhULjKrk%2FXo8YB%2F4kv0KfjJSu5sA%2BynivY7jR%2Fl8%2Bry%2BhDz8WKvvruNQSymECjm2fvVrnOPXbIx5p9XPDjqNNA4EfMszB4ya7wBNVcaGKK5LSQVYXGt0zokGwsZdqJLPGwyZeAd5AEIqUqzZ5TQKwjJDNwSSWjLeZ9sVYywcEsRXMQNDL4sy4hBLPD2%2B4Cxf%2FO4OwNw8be0l3G%2FP%2FrHzl2OxMVFnewCISmBG3sMKVTvfRWKA5Imv7RnRVF57ATjDSm%2FXCBjqkAdYZPhbqg6YRjb3NcCQrk1dbTADEPp4COF4LW9lxavQzeFoK2mbnqMfDRmy%2B1BsRxtY8KGO0RXxkzgj4T63yoW2u2B2tYAiDsS%2B97Q17eRKDCijchPKeNDWMwzSN6W8urgHGZ9JlAMk94Qh4EKYAx%2BoRK6qrwWPINiFTXdqRrOTIQFOxgh6cD09YDdY7uJMy6Sp9iC2oM18SM5jIIHoacA7ZU9J5&X-Amz-Signature=2c5e4d604160aae4e6dbbe75e17fc8e84a712e9b462d67d90402715ad40ded3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
