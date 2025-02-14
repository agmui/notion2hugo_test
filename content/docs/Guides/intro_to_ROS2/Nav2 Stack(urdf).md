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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCA55XTN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQJltaQ9CKe5NGW4VfY7tB%2B0Akax8gVZNLc60QYLgloAiBPYVcqUv5Ccm7qEkEDy14RNmMuGATfH2QrmZ2R1uUSNyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMSKZLVbGbHjIoAJiMKtwDDYyryb7WEpvu8XoBEbWx0miWpJq1S35H9x9dJz%2FobGlwxbwInou%2Fnu%2B80Ffvgz4rVJf0KqewMHGen5pvNffm%2FTcFZc%2FqCRHtZzSME%2B8776lY%2BjIfFIG9NSa%2BbV%2Bwkt8lpIICRl5w5eOBYRoo7GRNCsIr4X1Lf5jVQzWwtd1kmpR7iFUca06DsYe4ZS%2BEA8bqtr7l5AX1i9NnuZtK4xsa3VLRuvH1p2BmmKfUo1itQTU48xpkNyLK2uGNpCRa%2Bpc7WNGkul2gXkXuaqEyE1czsouPc2NB33EiTgurUEkndiS8NQFlH5vW2vc1IFgriOy4eV%2FUQ6LXsJdFhUdAeNXfDlWs0s72UTFHpdQtwIeezwnnjadwqcyX7LsC0%2F2NT0zcwNrS%2FQhFlp1Qh8ItipVZFxjgKeH0MrY6cb6KmybC%2FdeBFvyD9xfCq5kC%2F%2BdnbTBX%2FY2AueV0iy7WHKqo0rjgV5Bb53TTvdMgXwNtYCbVcwcu6xAHf9SW3Tyq%2BK0gIKMKeSEExVMRzDEUWXFpJUfzQjnQInYRwae12plSAoo%2FND1ZLuY6b%2FmXj6G8AnqjQH4SUGNIBbdWoQs%2ByRWuhWeRTR4eyoFy0A8ah3NbbQdpGGUXvjISbkVSt0mjF%2BIwnoS6vQY6pgFVn%2BdA6ug2iyAAirXS09jDBR%2Ff1MgqXms%2FellM4f7HZYwLPdRLrbljAADoiKm8G4uF2hNCjDjFAQCs3WNEhvaRQsMsgylFsUO7%2Bnw6wLwbomdgERFRp37A70MKXt109jMg0iNNXBAzuzqd4tHpX%2B0TLgm1A2wyKNCEq1hMT0I1DVuL8B%2BDxVOyje66lJI8mpJqUh9B%2BcXZkFW9dh%2Bz0vB3o%2B7tilZZ&X-Amz-Signature=e4dbc7d58d72863cc617d8437a688e5ae5abc36d3bf97f130bbdb297888d3f7e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCA55XTN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQJltaQ9CKe5NGW4VfY7tB%2B0Akax8gVZNLc60QYLgloAiBPYVcqUv5Ccm7qEkEDy14RNmMuGATfH2QrmZ2R1uUSNyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMSKZLVbGbHjIoAJiMKtwDDYyryb7WEpvu8XoBEbWx0miWpJq1S35H9x9dJz%2FobGlwxbwInou%2Fnu%2B80Ffvgz4rVJf0KqewMHGen5pvNffm%2FTcFZc%2FqCRHtZzSME%2B8776lY%2BjIfFIG9NSa%2BbV%2Bwkt8lpIICRl5w5eOBYRoo7GRNCsIr4X1Lf5jVQzWwtd1kmpR7iFUca06DsYe4ZS%2BEA8bqtr7l5AX1i9NnuZtK4xsa3VLRuvH1p2BmmKfUo1itQTU48xpkNyLK2uGNpCRa%2Bpc7WNGkul2gXkXuaqEyE1czsouPc2NB33EiTgurUEkndiS8NQFlH5vW2vc1IFgriOy4eV%2FUQ6LXsJdFhUdAeNXfDlWs0s72UTFHpdQtwIeezwnnjadwqcyX7LsC0%2F2NT0zcwNrS%2FQhFlp1Qh8ItipVZFxjgKeH0MrY6cb6KmybC%2FdeBFvyD9xfCq5kC%2F%2BdnbTBX%2FY2AueV0iy7WHKqo0rjgV5Bb53TTvdMgXwNtYCbVcwcu6xAHf9SW3Tyq%2BK0gIKMKeSEExVMRzDEUWXFpJUfzQjnQInYRwae12plSAoo%2FND1ZLuY6b%2FmXj6G8AnqjQH4SUGNIBbdWoQs%2ByRWuhWeRTR4eyoFy0A8ah3NbbQdpGGUXvjISbkVSt0mjF%2BIwnoS6vQY6pgFVn%2BdA6ug2iyAAirXS09jDBR%2Ff1MgqXms%2FellM4f7HZYwLPdRLrbljAADoiKm8G4uF2hNCjDjFAQCs3WNEhvaRQsMsgylFsUO7%2Bnw6wLwbomdgERFRp37A70MKXt109jMg0iNNXBAzuzqd4tHpX%2B0TLgm1A2wyKNCEq1hMT0I1DVuL8B%2BDxVOyje66lJI8mpJqUh9B%2BcXZkFW9dh%2Bz0vB3o%2B7tilZZ&X-Amz-Signature=930f4dcc2840a59f47117a90496df149d93f656d0cf24648bac50c5b29fe6f25&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCA55XTN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQJltaQ9CKe5NGW4VfY7tB%2B0Akax8gVZNLc60QYLgloAiBPYVcqUv5Ccm7qEkEDy14RNmMuGATfH2QrmZ2R1uUSNyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMSKZLVbGbHjIoAJiMKtwDDYyryb7WEpvu8XoBEbWx0miWpJq1S35H9x9dJz%2FobGlwxbwInou%2Fnu%2B80Ffvgz4rVJf0KqewMHGen5pvNffm%2FTcFZc%2FqCRHtZzSME%2B8776lY%2BjIfFIG9NSa%2BbV%2Bwkt8lpIICRl5w5eOBYRoo7GRNCsIr4X1Lf5jVQzWwtd1kmpR7iFUca06DsYe4ZS%2BEA8bqtr7l5AX1i9NnuZtK4xsa3VLRuvH1p2BmmKfUo1itQTU48xpkNyLK2uGNpCRa%2Bpc7WNGkul2gXkXuaqEyE1czsouPc2NB33EiTgurUEkndiS8NQFlH5vW2vc1IFgriOy4eV%2FUQ6LXsJdFhUdAeNXfDlWs0s72UTFHpdQtwIeezwnnjadwqcyX7LsC0%2F2NT0zcwNrS%2FQhFlp1Qh8ItipVZFxjgKeH0MrY6cb6KmybC%2FdeBFvyD9xfCq5kC%2F%2BdnbTBX%2FY2AueV0iy7WHKqo0rjgV5Bb53TTvdMgXwNtYCbVcwcu6xAHf9SW3Tyq%2BK0gIKMKeSEExVMRzDEUWXFpJUfzQjnQInYRwae12plSAoo%2FND1ZLuY6b%2FmXj6G8AnqjQH4SUGNIBbdWoQs%2ByRWuhWeRTR4eyoFy0A8ah3NbbQdpGGUXvjISbkVSt0mjF%2BIwnoS6vQY6pgFVn%2BdA6ug2iyAAirXS09jDBR%2Ff1MgqXms%2FellM4f7HZYwLPdRLrbljAADoiKm8G4uF2hNCjDjFAQCs3WNEhvaRQsMsgylFsUO7%2Bnw6wLwbomdgERFRp37A70MKXt109jMg0iNNXBAzuzqd4tHpX%2B0TLgm1A2wyKNCEq1hMT0I1DVuL8B%2BDxVOyje66lJI8mpJqUh9B%2BcXZkFW9dh%2Bz0vB3o%2B7tilZZ&X-Amz-Signature=7c541df8ce1f65c1360a95e4a87addc6cdd9cf148920d284a495b3b144ccdf84&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCA55XTN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQJltaQ9CKe5NGW4VfY7tB%2B0Akax8gVZNLc60QYLgloAiBPYVcqUv5Ccm7qEkEDy14RNmMuGATfH2QrmZ2R1uUSNyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMSKZLVbGbHjIoAJiMKtwDDYyryb7WEpvu8XoBEbWx0miWpJq1S35H9x9dJz%2FobGlwxbwInou%2Fnu%2B80Ffvgz4rVJf0KqewMHGen5pvNffm%2FTcFZc%2FqCRHtZzSME%2B8776lY%2BjIfFIG9NSa%2BbV%2Bwkt8lpIICRl5w5eOBYRoo7GRNCsIr4X1Lf5jVQzWwtd1kmpR7iFUca06DsYe4ZS%2BEA8bqtr7l5AX1i9NnuZtK4xsa3VLRuvH1p2BmmKfUo1itQTU48xpkNyLK2uGNpCRa%2Bpc7WNGkul2gXkXuaqEyE1czsouPc2NB33EiTgurUEkndiS8NQFlH5vW2vc1IFgriOy4eV%2FUQ6LXsJdFhUdAeNXfDlWs0s72UTFHpdQtwIeezwnnjadwqcyX7LsC0%2F2NT0zcwNrS%2FQhFlp1Qh8ItipVZFxjgKeH0MrY6cb6KmybC%2FdeBFvyD9xfCq5kC%2F%2BdnbTBX%2FY2AueV0iy7WHKqo0rjgV5Bb53TTvdMgXwNtYCbVcwcu6xAHf9SW3Tyq%2BK0gIKMKeSEExVMRzDEUWXFpJUfzQjnQInYRwae12plSAoo%2FND1ZLuY6b%2FmXj6G8AnqjQH4SUGNIBbdWoQs%2ByRWuhWeRTR4eyoFy0A8ah3NbbQdpGGUXvjISbkVSt0mjF%2BIwnoS6vQY6pgFVn%2BdA6ug2iyAAirXS09jDBR%2Ff1MgqXms%2FellM4f7HZYwLPdRLrbljAADoiKm8G4uF2hNCjDjFAQCs3WNEhvaRQsMsgylFsUO7%2Bnw6wLwbomdgERFRp37A70MKXt109jMg0iNNXBAzuzqd4tHpX%2B0TLgm1A2wyKNCEq1hMT0I1DVuL8B%2BDxVOyje66lJI8mpJqUh9B%2BcXZkFW9dh%2Bz0vB3o%2B7tilZZ&X-Amz-Signature=ec59776a2668cba396d8099d1d8567b0a5a69aabbfa77e68e78a3d5ef72e51b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCA55XTN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQJltaQ9CKe5NGW4VfY7tB%2B0Akax8gVZNLc60QYLgloAiBPYVcqUv5Ccm7qEkEDy14RNmMuGATfH2QrmZ2R1uUSNyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMSKZLVbGbHjIoAJiMKtwDDYyryb7WEpvu8XoBEbWx0miWpJq1S35H9x9dJz%2FobGlwxbwInou%2Fnu%2B80Ffvgz4rVJf0KqewMHGen5pvNffm%2FTcFZc%2FqCRHtZzSME%2B8776lY%2BjIfFIG9NSa%2BbV%2Bwkt8lpIICRl5w5eOBYRoo7GRNCsIr4X1Lf5jVQzWwtd1kmpR7iFUca06DsYe4ZS%2BEA8bqtr7l5AX1i9NnuZtK4xsa3VLRuvH1p2BmmKfUo1itQTU48xpkNyLK2uGNpCRa%2Bpc7WNGkul2gXkXuaqEyE1czsouPc2NB33EiTgurUEkndiS8NQFlH5vW2vc1IFgriOy4eV%2FUQ6LXsJdFhUdAeNXfDlWs0s72UTFHpdQtwIeezwnnjadwqcyX7LsC0%2F2NT0zcwNrS%2FQhFlp1Qh8ItipVZFxjgKeH0MrY6cb6KmybC%2FdeBFvyD9xfCq5kC%2F%2BdnbTBX%2FY2AueV0iy7WHKqo0rjgV5Bb53TTvdMgXwNtYCbVcwcu6xAHf9SW3Tyq%2BK0gIKMKeSEExVMRzDEUWXFpJUfzQjnQInYRwae12plSAoo%2FND1ZLuY6b%2FmXj6G8AnqjQH4SUGNIBbdWoQs%2ByRWuhWeRTR4eyoFy0A8ah3NbbQdpGGUXvjISbkVSt0mjF%2BIwnoS6vQY6pgFVn%2BdA6ug2iyAAirXS09jDBR%2Ff1MgqXms%2FellM4f7HZYwLPdRLrbljAADoiKm8G4uF2hNCjDjFAQCs3WNEhvaRQsMsgylFsUO7%2Bnw6wLwbomdgERFRp37A70MKXt109jMg0iNNXBAzuzqd4tHpX%2B0TLgm1A2wyKNCEq1hMT0I1DVuL8B%2BDxVOyje66lJI8mpJqUh9B%2BcXZkFW9dh%2Bz0vB3o%2B7tilZZ&X-Amz-Signature=1f26292af2ece8eb258688c9b4a047b4f01d13a9734f33f7886ddd690271da73&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCA55XTN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQJltaQ9CKe5NGW4VfY7tB%2B0Akax8gVZNLc60QYLgloAiBPYVcqUv5Ccm7qEkEDy14RNmMuGATfH2QrmZ2R1uUSNyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMSKZLVbGbHjIoAJiMKtwDDYyryb7WEpvu8XoBEbWx0miWpJq1S35H9x9dJz%2FobGlwxbwInou%2Fnu%2B80Ffvgz4rVJf0KqewMHGen5pvNffm%2FTcFZc%2FqCRHtZzSME%2B8776lY%2BjIfFIG9NSa%2BbV%2Bwkt8lpIICRl5w5eOBYRoo7GRNCsIr4X1Lf5jVQzWwtd1kmpR7iFUca06DsYe4ZS%2BEA8bqtr7l5AX1i9NnuZtK4xsa3VLRuvH1p2BmmKfUo1itQTU48xpkNyLK2uGNpCRa%2Bpc7WNGkul2gXkXuaqEyE1czsouPc2NB33EiTgurUEkndiS8NQFlH5vW2vc1IFgriOy4eV%2FUQ6LXsJdFhUdAeNXfDlWs0s72UTFHpdQtwIeezwnnjadwqcyX7LsC0%2F2NT0zcwNrS%2FQhFlp1Qh8ItipVZFxjgKeH0MrY6cb6KmybC%2FdeBFvyD9xfCq5kC%2F%2BdnbTBX%2FY2AueV0iy7WHKqo0rjgV5Bb53TTvdMgXwNtYCbVcwcu6xAHf9SW3Tyq%2BK0gIKMKeSEExVMRzDEUWXFpJUfzQjnQInYRwae12plSAoo%2FND1ZLuY6b%2FmXj6G8AnqjQH4SUGNIBbdWoQs%2ByRWuhWeRTR4eyoFy0A8ah3NbbQdpGGUXvjISbkVSt0mjF%2BIwnoS6vQY6pgFVn%2BdA6ug2iyAAirXS09jDBR%2Ff1MgqXms%2FellM4f7HZYwLPdRLrbljAADoiKm8G4uF2hNCjDjFAQCs3WNEhvaRQsMsgylFsUO7%2Bnw6wLwbomdgERFRp37A70MKXt109jMg0iNNXBAzuzqd4tHpX%2B0TLgm1A2wyKNCEq1hMT0I1DVuL8B%2BDxVOyje66lJI8mpJqUh9B%2BcXZkFW9dh%2Bz0vB3o%2B7tilZZ&X-Amz-Signature=20c0115c392ec0313a35fe2b19259bbc9b8dd624fc61ffefc2dc6a4c928021ce&X-Amz-SignedHeaders=host&x-id=GetObject)
