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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M2UOABA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCtQgAYg%2FfbCz9KARo7BhInxk6zS%2BzDpynDPgKSZ177%2BAIhANDyC%2BbZoEb%2B1GrzGEkWxmYy1vZs2dxrYSeTTbJ9oU1LKv8DCD4QABoMNjM3NDIzMTgzODA1Igz5QNyilBcbfO40c54q3AMIjCH0zAszPNwTrbam2KfAu4zghiF4Ue0xgeA%2FXrpDPKGmszpE93CNMCk7GCx8Emod734UyB9qO03iyjtSemFjnwTHPcRGHoJeIvgu4aVUgRDu%2BWoQhKCLeZ%2B%2FZhE51PMr44KJvDSaYjBYHK4uLvj%2FeRa5Yy3DmDkpCkJaxeouyqMXSYY%2FgnI5vplXIvKId9Ao24B5jyzNqRjueMBeR5524eziPurdKwEpSUpVrxCD9p8WMrtPY47AeauNZ%2BxDYPw%2FkR9sASRSIO8UbtBwFTsZWIC85hn7oZ3SN419FV8%2FfwX3kqPH08IqCyEq%2BqvTRJAm21MbFS6ncpjFuq4RPtrMnF%2FMccKxhVQvQtV1upAyi16l4FPZ8jf8ndNtkJVpc7ZHBb8SEuGBy4AVM9tVaACdSKBHnCRlAGHMHVfq1UusNS%2FQzXYgEBPSaCJsP1%2FwyVFqxTJFxW4QKFGdLuJdBwtQdugpNYBJNtnUIKIJ9nWwSAfYsPNqs76RWaCBOqxqWSPGYbWiB6ozXVYJ6TW2nJIcz9dQ%2FV6EZ6YsYuQ2dNGWtEHYxf1dgdMygoDsHhuZ5xUVKZxpTtA8Xrm4JmALD%2FJiirmhPDZOzVIkXFRCG0gIKx6Mbg4rrUb%2FPiVo%2FjDb%2BO3CBjqkAZXbZtdPHpM7ANkyhaWTX4OGcfFpx9HUPVpsXY6d765%2FZZn7A%2BTX7AgNr8jNrjptJZnknLzcNMlBuYaPt62GLkALxLuG6ufXom9I5CSokDsTSWXCqoh8ZwAYoZta9%2Fc69XYQSVzXYGASD9q4RaQ4IK0HVodYOfmwyjDhQi0yO9w%2Fhcsi3sSE%2BCtZcykefOES5pe8DcUXWd1%2BDStWZVsUwg1jWHfX&X-Amz-Signature=14149be8843d83b364cf7cd9f09d935c9d43f1f4b0e555982e8c30b4b28e51ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M2UOABA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCtQgAYg%2FfbCz9KARo7BhInxk6zS%2BzDpynDPgKSZ177%2BAIhANDyC%2BbZoEb%2B1GrzGEkWxmYy1vZs2dxrYSeTTbJ9oU1LKv8DCD4QABoMNjM3NDIzMTgzODA1Igz5QNyilBcbfO40c54q3AMIjCH0zAszPNwTrbam2KfAu4zghiF4Ue0xgeA%2FXrpDPKGmszpE93CNMCk7GCx8Emod734UyB9qO03iyjtSemFjnwTHPcRGHoJeIvgu4aVUgRDu%2BWoQhKCLeZ%2B%2FZhE51PMr44KJvDSaYjBYHK4uLvj%2FeRa5Yy3DmDkpCkJaxeouyqMXSYY%2FgnI5vplXIvKId9Ao24B5jyzNqRjueMBeR5524eziPurdKwEpSUpVrxCD9p8WMrtPY47AeauNZ%2BxDYPw%2FkR9sASRSIO8UbtBwFTsZWIC85hn7oZ3SN419FV8%2FfwX3kqPH08IqCyEq%2BqvTRJAm21MbFS6ncpjFuq4RPtrMnF%2FMccKxhVQvQtV1upAyi16l4FPZ8jf8ndNtkJVpc7ZHBb8SEuGBy4AVM9tVaACdSKBHnCRlAGHMHVfq1UusNS%2FQzXYgEBPSaCJsP1%2FwyVFqxTJFxW4QKFGdLuJdBwtQdugpNYBJNtnUIKIJ9nWwSAfYsPNqs76RWaCBOqxqWSPGYbWiB6ozXVYJ6TW2nJIcz9dQ%2FV6EZ6YsYuQ2dNGWtEHYxf1dgdMygoDsHhuZ5xUVKZxpTtA8Xrm4JmALD%2FJiirmhPDZOzVIkXFRCG0gIKx6Mbg4rrUb%2FPiVo%2FjDb%2BO3CBjqkAZXbZtdPHpM7ANkyhaWTX4OGcfFpx9HUPVpsXY6d765%2FZZn7A%2BTX7AgNr8jNrjptJZnknLzcNMlBuYaPt62GLkALxLuG6ufXom9I5CSokDsTSWXCqoh8ZwAYoZta9%2Fc69XYQSVzXYGASD9q4RaQ4IK0HVodYOfmwyjDhQi0yO9w%2Fhcsi3sSE%2BCtZcykefOES5pe8DcUXWd1%2BDStWZVsUwg1jWHfX&X-Amz-Signature=62203a4bcfeb57d3bb1c5aaffa8198f87cd72366ce021cfd8c3a7f8b71d19193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M2UOABA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCtQgAYg%2FfbCz9KARo7BhInxk6zS%2BzDpynDPgKSZ177%2BAIhANDyC%2BbZoEb%2B1GrzGEkWxmYy1vZs2dxrYSeTTbJ9oU1LKv8DCD4QABoMNjM3NDIzMTgzODA1Igz5QNyilBcbfO40c54q3AMIjCH0zAszPNwTrbam2KfAu4zghiF4Ue0xgeA%2FXrpDPKGmszpE93CNMCk7GCx8Emod734UyB9qO03iyjtSemFjnwTHPcRGHoJeIvgu4aVUgRDu%2BWoQhKCLeZ%2B%2FZhE51PMr44KJvDSaYjBYHK4uLvj%2FeRa5Yy3DmDkpCkJaxeouyqMXSYY%2FgnI5vplXIvKId9Ao24B5jyzNqRjueMBeR5524eziPurdKwEpSUpVrxCD9p8WMrtPY47AeauNZ%2BxDYPw%2FkR9sASRSIO8UbtBwFTsZWIC85hn7oZ3SN419FV8%2FfwX3kqPH08IqCyEq%2BqvTRJAm21MbFS6ncpjFuq4RPtrMnF%2FMccKxhVQvQtV1upAyi16l4FPZ8jf8ndNtkJVpc7ZHBb8SEuGBy4AVM9tVaACdSKBHnCRlAGHMHVfq1UusNS%2FQzXYgEBPSaCJsP1%2FwyVFqxTJFxW4QKFGdLuJdBwtQdugpNYBJNtnUIKIJ9nWwSAfYsPNqs76RWaCBOqxqWSPGYbWiB6ozXVYJ6TW2nJIcz9dQ%2FV6EZ6YsYuQ2dNGWtEHYxf1dgdMygoDsHhuZ5xUVKZxpTtA8Xrm4JmALD%2FJiirmhPDZOzVIkXFRCG0gIKx6Mbg4rrUb%2FPiVo%2FjDb%2BO3CBjqkAZXbZtdPHpM7ANkyhaWTX4OGcfFpx9HUPVpsXY6d765%2FZZn7A%2BTX7AgNr8jNrjptJZnknLzcNMlBuYaPt62GLkALxLuG6ufXom9I5CSokDsTSWXCqoh8ZwAYoZta9%2Fc69XYQSVzXYGASD9q4RaQ4IK0HVodYOfmwyjDhQi0yO9w%2Fhcsi3sSE%2BCtZcykefOES5pe8DcUXWd1%2BDStWZVsUwg1jWHfX&X-Amz-Signature=9342d32d34c4fd8380c858f3a64dc9eac013910d7ed1b47a44dfab4baf2ee4be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M2UOABA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCtQgAYg%2FfbCz9KARo7BhInxk6zS%2BzDpynDPgKSZ177%2BAIhANDyC%2BbZoEb%2B1GrzGEkWxmYy1vZs2dxrYSeTTbJ9oU1LKv8DCD4QABoMNjM3NDIzMTgzODA1Igz5QNyilBcbfO40c54q3AMIjCH0zAszPNwTrbam2KfAu4zghiF4Ue0xgeA%2FXrpDPKGmszpE93CNMCk7GCx8Emod734UyB9qO03iyjtSemFjnwTHPcRGHoJeIvgu4aVUgRDu%2BWoQhKCLeZ%2B%2FZhE51PMr44KJvDSaYjBYHK4uLvj%2FeRa5Yy3DmDkpCkJaxeouyqMXSYY%2FgnI5vplXIvKId9Ao24B5jyzNqRjueMBeR5524eziPurdKwEpSUpVrxCD9p8WMrtPY47AeauNZ%2BxDYPw%2FkR9sASRSIO8UbtBwFTsZWIC85hn7oZ3SN419FV8%2FfwX3kqPH08IqCyEq%2BqvTRJAm21MbFS6ncpjFuq4RPtrMnF%2FMccKxhVQvQtV1upAyi16l4FPZ8jf8ndNtkJVpc7ZHBb8SEuGBy4AVM9tVaACdSKBHnCRlAGHMHVfq1UusNS%2FQzXYgEBPSaCJsP1%2FwyVFqxTJFxW4QKFGdLuJdBwtQdugpNYBJNtnUIKIJ9nWwSAfYsPNqs76RWaCBOqxqWSPGYbWiB6ozXVYJ6TW2nJIcz9dQ%2FV6EZ6YsYuQ2dNGWtEHYxf1dgdMygoDsHhuZ5xUVKZxpTtA8Xrm4JmALD%2FJiirmhPDZOzVIkXFRCG0gIKx6Mbg4rrUb%2FPiVo%2FjDb%2BO3CBjqkAZXbZtdPHpM7ANkyhaWTX4OGcfFpx9HUPVpsXY6d765%2FZZn7A%2BTX7AgNr8jNrjptJZnknLzcNMlBuYaPt62GLkALxLuG6ufXom9I5CSokDsTSWXCqoh8ZwAYoZta9%2Fc69XYQSVzXYGASD9q4RaQ4IK0HVodYOfmwyjDhQi0yO9w%2Fhcsi3sSE%2BCtZcykefOES5pe8DcUXWd1%2BDStWZVsUwg1jWHfX&X-Amz-Signature=b615629f23a33c755299fc3bdf586cdcdbc532745a1ec8a53fa7f403c8bab902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M2UOABA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCtQgAYg%2FfbCz9KARo7BhInxk6zS%2BzDpynDPgKSZ177%2BAIhANDyC%2BbZoEb%2B1GrzGEkWxmYy1vZs2dxrYSeTTbJ9oU1LKv8DCD4QABoMNjM3NDIzMTgzODA1Igz5QNyilBcbfO40c54q3AMIjCH0zAszPNwTrbam2KfAu4zghiF4Ue0xgeA%2FXrpDPKGmszpE93CNMCk7GCx8Emod734UyB9qO03iyjtSemFjnwTHPcRGHoJeIvgu4aVUgRDu%2BWoQhKCLeZ%2B%2FZhE51PMr44KJvDSaYjBYHK4uLvj%2FeRa5Yy3DmDkpCkJaxeouyqMXSYY%2FgnI5vplXIvKId9Ao24B5jyzNqRjueMBeR5524eziPurdKwEpSUpVrxCD9p8WMrtPY47AeauNZ%2BxDYPw%2FkR9sASRSIO8UbtBwFTsZWIC85hn7oZ3SN419FV8%2FfwX3kqPH08IqCyEq%2BqvTRJAm21MbFS6ncpjFuq4RPtrMnF%2FMccKxhVQvQtV1upAyi16l4FPZ8jf8ndNtkJVpc7ZHBb8SEuGBy4AVM9tVaACdSKBHnCRlAGHMHVfq1UusNS%2FQzXYgEBPSaCJsP1%2FwyVFqxTJFxW4QKFGdLuJdBwtQdugpNYBJNtnUIKIJ9nWwSAfYsPNqs76RWaCBOqxqWSPGYbWiB6ozXVYJ6TW2nJIcz9dQ%2FV6EZ6YsYuQ2dNGWtEHYxf1dgdMygoDsHhuZ5xUVKZxpTtA8Xrm4JmALD%2FJiirmhPDZOzVIkXFRCG0gIKx6Mbg4rrUb%2FPiVo%2FjDb%2BO3CBjqkAZXbZtdPHpM7ANkyhaWTX4OGcfFpx9HUPVpsXY6d765%2FZZn7A%2BTX7AgNr8jNrjptJZnknLzcNMlBuYaPt62GLkALxLuG6ufXom9I5CSokDsTSWXCqoh8ZwAYoZta9%2Fc69XYQSVzXYGASD9q4RaQ4IK0HVodYOfmwyjDhQi0yO9w%2Fhcsi3sSE%2BCtZcykefOES5pe8DcUXWd1%2BDStWZVsUwg1jWHfX&X-Amz-Signature=d8929a45bc5b9c4370083ec68e77882c3763b61333d7a9f99a094c3df0698f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M2UOABA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCtQgAYg%2FfbCz9KARo7BhInxk6zS%2BzDpynDPgKSZ177%2BAIhANDyC%2BbZoEb%2B1GrzGEkWxmYy1vZs2dxrYSeTTbJ9oU1LKv8DCD4QABoMNjM3NDIzMTgzODA1Igz5QNyilBcbfO40c54q3AMIjCH0zAszPNwTrbam2KfAu4zghiF4Ue0xgeA%2FXrpDPKGmszpE93CNMCk7GCx8Emod734UyB9qO03iyjtSemFjnwTHPcRGHoJeIvgu4aVUgRDu%2BWoQhKCLeZ%2B%2FZhE51PMr44KJvDSaYjBYHK4uLvj%2FeRa5Yy3DmDkpCkJaxeouyqMXSYY%2FgnI5vplXIvKId9Ao24B5jyzNqRjueMBeR5524eziPurdKwEpSUpVrxCD9p8WMrtPY47AeauNZ%2BxDYPw%2FkR9sASRSIO8UbtBwFTsZWIC85hn7oZ3SN419FV8%2FfwX3kqPH08IqCyEq%2BqvTRJAm21MbFS6ncpjFuq4RPtrMnF%2FMccKxhVQvQtV1upAyi16l4FPZ8jf8ndNtkJVpc7ZHBb8SEuGBy4AVM9tVaACdSKBHnCRlAGHMHVfq1UusNS%2FQzXYgEBPSaCJsP1%2FwyVFqxTJFxW4QKFGdLuJdBwtQdugpNYBJNtnUIKIJ9nWwSAfYsPNqs76RWaCBOqxqWSPGYbWiB6ozXVYJ6TW2nJIcz9dQ%2FV6EZ6YsYuQ2dNGWtEHYxf1dgdMygoDsHhuZ5xUVKZxpTtA8Xrm4JmALD%2FJiirmhPDZOzVIkXFRCG0gIKx6Mbg4rrUb%2FPiVo%2FjDb%2BO3CBjqkAZXbZtdPHpM7ANkyhaWTX4OGcfFpx9HUPVpsXY6d765%2FZZn7A%2BTX7AgNr8jNrjptJZnknLzcNMlBuYaPt62GLkALxLuG6ufXom9I5CSokDsTSWXCqoh8ZwAYoZta9%2Fc69XYQSVzXYGASD9q4RaQ4IK0HVodYOfmwyjDhQi0yO9w%2Fhcsi3sSE%2BCtZcykefOES5pe8DcUXWd1%2BDStWZVsUwg1jWHfX&X-Amz-Signature=32819ea64e62058c7d3432614aaf2f5b1fa0d3bdad3163d618fd0ec93ee1a43e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
