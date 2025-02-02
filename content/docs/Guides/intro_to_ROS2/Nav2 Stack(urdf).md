---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6HWZSGQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAX6JddY64i0Y4izGbgzfWHL250LQWwVS9VHVLkBa1gAIhAO6FmuCTcSb4Orx0k12mcwPlsk41XD8jXbVh1Kgv1SO%2BKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx727H5kNgxjkRltyYq3APifGUQTdsrTQ8sCXEhtOxtmkfUHddmVbAtGpJM7kAcyUlI%2BGE5xuwKik6A72FX33sAHqV1EVXK9AmaWcoP%2FZftiiGLmGDaP8caS1%2BHyLttS6mnPsj7Lb1qQxYQvOHCog6NZtWvsS5sjcVai5x2AS8f3KHGJ5J7qquZg7BRNptLdU6euexDhxG8kDEiWwAoK7x%2BA450laEhw%2F3FbWyAwG270Pj0oXVMFmRtcOYbcGvbfrqlKz6I%2FHicaYEZaP7F3HLxcCzVyO%2BnMiPLiB9LQitovuCQErY%2FQ9ynCD1BfdFaNEBFcatuXuQhLx8uCQm5%2FkFOQoobj1%2BwWWKQe7wsx9E%2BtiwMZ2iop3mNZB5CwaR0SCVe0H%2B3LcuBLUYJ01eWQ3z3CIKsfqYC6Y3kK7HruuAOYLVtIQy54S6l9z%2BDx6Qh6b%2Fgxm3n6DG7wlcziimPQm0RFac%2BK2M4sYXPrAd2z60IzySxYh%2F2SnIUxwyA%2FDZ6mIVftkx788DV8adLE2A%2B5j0B2JD8gataw%2F0sirTKbcy5Kx15FgRnhZHXZ3VDEpA3uGN5RWIE5w1lU5F7YmcNSiC8rXI%2FcMkZCvXPrA08itWEUGTegUtyVjGsGCPFwyZjUWcwQ%2Fwgk9qJKjE3JDD0vPu8BjqkAaSqvAXVzEr2tjz06ntyCE%2BO9s7fqBIBw5PXIh%2BzFAyRDz5N78r632j5xRjVVPx5W1kBzSYw1RMCkZpJUp%2FPsQVZTTuLHMjNyBP11n31EOhjfnP82wS0ZQXaagMPJOTg90LHazahbc9LeNR1dN99TxqDrDH%2B6Sh9tp1BZOTHdyIAStiBHuMUpY1ChT7ROm9DmYK6b3x1XlMgGYIaSY6wbaEZZApr&X-Amz-Signature=30e1fb738656735c79e4fabec1d47ecb3755c0afd1e9a856dbea64ec3e9ef956&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6HWZSGQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAX6JddY64i0Y4izGbgzfWHL250LQWwVS9VHVLkBa1gAIhAO6FmuCTcSb4Orx0k12mcwPlsk41XD8jXbVh1Kgv1SO%2BKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx727H5kNgxjkRltyYq3APifGUQTdsrTQ8sCXEhtOxtmkfUHddmVbAtGpJM7kAcyUlI%2BGE5xuwKik6A72FX33sAHqV1EVXK9AmaWcoP%2FZftiiGLmGDaP8caS1%2BHyLttS6mnPsj7Lb1qQxYQvOHCog6NZtWvsS5sjcVai5x2AS8f3KHGJ5J7qquZg7BRNptLdU6euexDhxG8kDEiWwAoK7x%2BA450laEhw%2F3FbWyAwG270Pj0oXVMFmRtcOYbcGvbfrqlKz6I%2FHicaYEZaP7F3HLxcCzVyO%2BnMiPLiB9LQitovuCQErY%2FQ9ynCD1BfdFaNEBFcatuXuQhLx8uCQm5%2FkFOQoobj1%2BwWWKQe7wsx9E%2BtiwMZ2iop3mNZB5CwaR0SCVe0H%2B3LcuBLUYJ01eWQ3z3CIKsfqYC6Y3kK7HruuAOYLVtIQy54S6l9z%2BDx6Qh6b%2Fgxm3n6DG7wlcziimPQm0RFac%2BK2M4sYXPrAd2z60IzySxYh%2F2SnIUxwyA%2FDZ6mIVftkx788DV8adLE2A%2B5j0B2JD8gataw%2F0sirTKbcy5Kx15FgRnhZHXZ3VDEpA3uGN5RWIE5w1lU5F7YmcNSiC8rXI%2FcMkZCvXPrA08itWEUGTegUtyVjGsGCPFwyZjUWcwQ%2Fwgk9qJKjE3JDD0vPu8BjqkAaSqvAXVzEr2tjz06ntyCE%2BO9s7fqBIBw5PXIh%2BzFAyRDz5N78r632j5xRjVVPx5W1kBzSYw1RMCkZpJUp%2FPsQVZTTuLHMjNyBP11n31EOhjfnP82wS0ZQXaagMPJOTg90LHazahbc9LeNR1dN99TxqDrDH%2B6Sh9tp1BZOTHdyIAStiBHuMUpY1ChT7ROm9DmYK6b3x1XlMgGYIaSY6wbaEZZApr&X-Amz-Signature=7836f1c0aed08961193d2a81e6fc24c9bb3f07a62f9dca2597efbf5b3351adc2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6HWZSGQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAX6JddY64i0Y4izGbgzfWHL250LQWwVS9VHVLkBa1gAIhAO6FmuCTcSb4Orx0k12mcwPlsk41XD8jXbVh1Kgv1SO%2BKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx727H5kNgxjkRltyYq3APifGUQTdsrTQ8sCXEhtOxtmkfUHddmVbAtGpJM7kAcyUlI%2BGE5xuwKik6A72FX33sAHqV1EVXK9AmaWcoP%2FZftiiGLmGDaP8caS1%2BHyLttS6mnPsj7Lb1qQxYQvOHCog6NZtWvsS5sjcVai5x2AS8f3KHGJ5J7qquZg7BRNptLdU6euexDhxG8kDEiWwAoK7x%2BA450laEhw%2F3FbWyAwG270Pj0oXVMFmRtcOYbcGvbfrqlKz6I%2FHicaYEZaP7F3HLxcCzVyO%2BnMiPLiB9LQitovuCQErY%2FQ9ynCD1BfdFaNEBFcatuXuQhLx8uCQm5%2FkFOQoobj1%2BwWWKQe7wsx9E%2BtiwMZ2iop3mNZB5CwaR0SCVe0H%2B3LcuBLUYJ01eWQ3z3CIKsfqYC6Y3kK7HruuAOYLVtIQy54S6l9z%2BDx6Qh6b%2Fgxm3n6DG7wlcziimPQm0RFac%2BK2M4sYXPrAd2z60IzySxYh%2F2SnIUxwyA%2FDZ6mIVftkx788DV8adLE2A%2B5j0B2JD8gataw%2F0sirTKbcy5Kx15FgRnhZHXZ3VDEpA3uGN5RWIE5w1lU5F7YmcNSiC8rXI%2FcMkZCvXPrA08itWEUGTegUtyVjGsGCPFwyZjUWcwQ%2Fwgk9qJKjE3JDD0vPu8BjqkAaSqvAXVzEr2tjz06ntyCE%2BO9s7fqBIBw5PXIh%2BzFAyRDz5N78r632j5xRjVVPx5W1kBzSYw1RMCkZpJUp%2FPsQVZTTuLHMjNyBP11n31EOhjfnP82wS0ZQXaagMPJOTg90LHazahbc9LeNR1dN99TxqDrDH%2B6Sh9tp1BZOTHdyIAStiBHuMUpY1ChT7ROm9DmYK6b3x1XlMgGYIaSY6wbaEZZApr&X-Amz-Signature=f37536e34674eb6bdb1327aad784eb89558876ffb121052b83ef000c188da9c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6HWZSGQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAX6JddY64i0Y4izGbgzfWHL250LQWwVS9VHVLkBa1gAIhAO6FmuCTcSb4Orx0k12mcwPlsk41XD8jXbVh1Kgv1SO%2BKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx727H5kNgxjkRltyYq3APifGUQTdsrTQ8sCXEhtOxtmkfUHddmVbAtGpJM7kAcyUlI%2BGE5xuwKik6A72FX33sAHqV1EVXK9AmaWcoP%2FZftiiGLmGDaP8caS1%2BHyLttS6mnPsj7Lb1qQxYQvOHCog6NZtWvsS5sjcVai5x2AS8f3KHGJ5J7qquZg7BRNptLdU6euexDhxG8kDEiWwAoK7x%2BA450laEhw%2F3FbWyAwG270Pj0oXVMFmRtcOYbcGvbfrqlKz6I%2FHicaYEZaP7F3HLxcCzVyO%2BnMiPLiB9LQitovuCQErY%2FQ9ynCD1BfdFaNEBFcatuXuQhLx8uCQm5%2FkFOQoobj1%2BwWWKQe7wsx9E%2BtiwMZ2iop3mNZB5CwaR0SCVe0H%2B3LcuBLUYJ01eWQ3z3CIKsfqYC6Y3kK7HruuAOYLVtIQy54S6l9z%2BDx6Qh6b%2Fgxm3n6DG7wlcziimPQm0RFac%2BK2M4sYXPrAd2z60IzySxYh%2F2SnIUxwyA%2FDZ6mIVftkx788DV8adLE2A%2B5j0B2JD8gataw%2F0sirTKbcy5Kx15FgRnhZHXZ3VDEpA3uGN5RWIE5w1lU5F7YmcNSiC8rXI%2FcMkZCvXPrA08itWEUGTegUtyVjGsGCPFwyZjUWcwQ%2Fwgk9qJKjE3JDD0vPu8BjqkAaSqvAXVzEr2tjz06ntyCE%2BO9s7fqBIBw5PXIh%2BzFAyRDz5N78r632j5xRjVVPx5W1kBzSYw1RMCkZpJUp%2FPsQVZTTuLHMjNyBP11n31EOhjfnP82wS0ZQXaagMPJOTg90LHazahbc9LeNR1dN99TxqDrDH%2B6Sh9tp1BZOTHdyIAStiBHuMUpY1ChT7ROm9DmYK6b3x1XlMgGYIaSY6wbaEZZApr&X-Amz-Signature=14db22f0b811b7cf5e06553b2090e3d7dfe33df7ce44d76b857515c9502d2c71&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6HWZSGQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAX6JddY64i0Y4izGbgzfWHL250LQWwVS9VHVLkBa1gAIhAO6FmuCTcSb4Orx0k12mcwPlsk41XD8jXbVh1Kgv1SO%2BKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx727H5kNgxjkRltyYq3APifGUQTdsrTQ8sCXEhtOxtmkfUHddmVbAtGpJM7kAcyUlI%2BGE5xuwKik6A72FX33sAHqV1EVXK9AmaWcoP%2FZftiiGLmGDaP8caS1%2BHyLttS6mnPsj7Lb1qQxYQvOHCog6NZtWvsS5sjcVai5x2AS8f3KHGJ5J7qquZg7BRNptLdU6euexDhxG8kDEiWwAoK7x%2BA450laEhw%2F3FbWyAwG270Pj0oXVMFmRtcOYbcGvbfrqlKz6I%2FHicaYEZaP7F3HLxcCzVyO%2BnMiPLiB9LQitovuCQErY%2FQ9ynCD1BfdFaNEBFcatuXuQhLx8uCQm5%2FkFOQoobj1%2BwWWKQe7wsx9E%2BtiwMZ2iop3mNZB5CwaR0SCVe0H%2B3LcuBLUYJ01eWQ3z3CIKsfqYC6Y3kK7HruuAOYLVtIQy54S6l9z%2BDx6Qh6b%2Fgxm3n6DG7wlcziimPQm0RFac%2BK2M4sYXPrAd2z60IzySxYh%2F2SnIUxwyA%2FDZ6mIVftkx788DV8adLE2A%2B5j0B2JD8gataw%2F0sirTKbcy5Kx15FgRnhZHXZ3VDEpA3uGN5RWIE5w1lU5F7YmcNSiC8rXI%2FcMkZCvXPrA08itWEUGTegUtyVjGsGCPFwyZjUWcwQ%2Fwgk9qJKjE3JDD0vPu8BjqkAaSqvAXVzEr2tjz06ntyCE%2BO9s7fqBIBw5PXIh%2BzFAyRDz5N78r632j5xRjVVPx5W1kBzSYw1RMCkZpJUp%2FPsQVZTTuLHMjNyBP11n31EOhjfnP82wS0ZQXaagMPJOTg90LHazahbc9LeNR1dN99TxqDrDH%2B6Sh9tp1BZOTHdyIAStiBHuMUpY1ChT7ROm9DmYK6b3x1XlMgGYIaSY6wbaEZZApr&X-Amz-Signature=dc5d0c56289c8bc3e41a79f8d40c310e7db33f59be532260f9fd413f331cc046&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6HWZSGQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAX6JddY64i0Y4izGbgzfWHL250LQWwVS9VHVLkBa1gAIhAO6FmuCTcSb4Orx0k12mcwPlsk41XD8jXbVh1Kgv1SO%2BKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx727H5kNgxjkRltyYq3APifGUQTdsrTQ8sCXEhtOxtmkfUHddmVbAtGpJM7kAcyUlI%2BGE5xuwKik6A72FX33sAHqV1EVXK9AmaWcoP%2FZftiiGLmGDaP8caS1%2BHyLttS6mnPsj7Lb1qQxYQvOHCog6NZtWvsS5sjcVai5x2AS8f3KHGJ5J7qquZg7BRNptLdU6euexDhxG8kDEiWwAoK7x%2BA450laEhw%2F3FbWyAwG270Pj0oXVMFmRtcOYbcGvbfrqlKz6I%2FHicaYEZaP7F3HLxcCzVyO%2BnMiPLiB9LQitovuCQErY%2FQ9ynCD1BfdFaNEBFcatuXuQhLx8uCQm5%2FkFOQoobj1%2BwWWKQe7wsx9E%2BtiwMZ2iop3mNZB5CwaR0SCVe0H%2B3LcuBLUYJ01eWQ3z3CIKsfqYC6Y3kK7HruuAOYLVtIQy54S6l9z%2BDx6Qh6b%2Fgxm3n6DG7wlcziimPQm0RFac%2BK2M4sYXPrAd2z60IzySxYh%2F2SnIUxwyA%2FDZ6mIVftkx788DV8adLE2A%2B5j0B2JD8gataw%2F0sirTKbcy5Kx15FgRnhZHXZ3VDEpA3uGN5RWIE5w1lU5F7YmcNSiC8rXI%2FcMkZCvXPrA08itWEUGTegUtyVjGsGCPFwyZjUWcwQ%2Fwgk9qJKjE3JDD0vPu8BjqkAaSqvAXVzEr2tjz06ntyCE%2BO9s7fqBIBw5PXIh%2BzFAyRDz5N78r632j5xRjVVPx5W1kBzSYw1RMCkZpJUp%2FPsQVZTTuLHMjNyBP11n31EOhjfnP82wS0ZQXaagMPJOTg90LHazahbc9LeNR1dN99TxqDrDH%2B6Sh9tp1BZOTHdyIAStiBHuMUpY1ChT7ROm9DmYK6b3x1XlMgGYIaSY6wbaEZZApr&X-Amz-Signature=4187780b37c562dec35d685bb343cf7a7d94cacc9c7be21004de9afe32bf237a&X-Amz-SignedHeaders=host&x-id=GetObject)
