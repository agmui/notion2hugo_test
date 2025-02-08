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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BMIFKXO%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFT7ZiakXrSPRh35SConLHa1914GKU5jSthctKfetXgkAiBaaTBQ4elNyjgXIiq9%2FZGLEn7nhY9smwzjaLlzB1qc0SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8ACY9jpjtRBqpDTrKtwDHRZeKgRhDSAqAW3FHiJljkiLayCLot1PiacLZypfA3FOs4pT%2FEgDmnLdjYUi64RB5yfp%2B4%2FzVj3MBZeTtDdknf2CfX8PUu2%2BXGqgCtydwPCY7EXvJV2gFFemI30rIaUARtfSrdfhfcVE8gXSi8wkjQFpsWaCbxlnnCD2txn%2FHjIZ8nkzTsrII3Nm1SZGD%2BwMtoZRbu3vIYqkzy40WGfaSc6X218xVYFSAxUTfnU3plamemEzx8u64YBcmUJX%2BfvAJ7S4VPV2w9j7oAp%2BmgdEcZxHrgYV%2BUynoJ65pZUxut1UtkUpgCi5gDnOTCGdN36jJAn2ETaJx2PPCWXbjKTNLzzCutZxDMTC2HjPmOX4FLZTmn6j87u4yB1f0TuUZYyvsaEg%2FsPSQs5v1Ddv31pQEFC0%2FlrT5NPUY%2F6WzXwDFt5MBoNw6mJifHYM1i4LCwTGqxzGWyu2YERfgKsPmQT5R1u5O185%2Bi2fBtQrf2l2v5gLQBrE0Y02u%2BXrflqEoA2NklD9dMJgkAVSIcCLHX6NYNi%2F2Q82Q4CctK3QDakYQv8y%2FKLKsJQ9C23Bn0L97VaimxliNp1lx9O27ENT8nFfPIcUm86%2FiH8IjmzMrPHGkXBtwtbiaV%2FjUCkUlywwt5ifvQY6pgH%2B660XPM5Y8blWzcVYSDD%2FYKtC01jVdsP7UKIP1koSDx2Pxc7hQHw2BGC7e02a6UWfJDBqsWGr7R0xB%2FxoJKjm6q4T2oLCNmfVg7P3IyzZ%2F7phwRg6wrUuay97LKGXCXZSPiCd8u689RsONgUct0dXaI1%2BsA3U4WPfEG9npbWowizCvq0Ztm0ofChtU2HcLHAMnWJbhFLHrMnAn7F1oCc%2F%2FW7Yi3QI&X-Amz-Signature=c251732907b70dd7ccaa28a5d0415c5fc108d3743c2680d5295901e513e839ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BMIFKXO%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFT7ZiakXrSPRh35SConLHa1914GKU5jSthctKfetXgkAiBaaTBQ4elNyjgXIiq9%2FZGLEn7nhY9smwzjaLlzB1qc0SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8ACY9jpjtRBqpDTrKtwDHRZeKgRhDSAqAW3FHiJljkiLayCLot1PiacLZypfA3FOs4pT%2FEgDmnLdjYUi64RB5yfp%2B4%2FzVj3MBZeTtDdknf2CfX8PUu2%2BXGqgCtydwPCY7EXvJV2gFFemI30rIaUARtfSrdfhfcVE8gXSi8wkjQFpsWaCbxlnnCD2txn%2FHjIZ8nkzTsrII3Nm1SZGD%2BwMtoZRbu3vIYqkzy40WGfaSc6X218xVYFSAxUTfnU3plamemEzx8u64YBcmUJX%2BfvAJ7S4VPV2w9j7oAp%2BmgdEcZxHrgYV%2BUynoJ65pZUxut1UtkUpgCi5gDnOTCGdN36jJAn2ETaJx2PPCWXbjKTNLzzCutZxDMTC2HjPmOX4FLZTmn6j87u4yB1f0TuUZYyvsaEg%2FsPSQs5v1Ddv31pQEFC0%2FlrT5NPUY%2F6WzXwDFt5MBoNw6mJifHYM1i4LCwTGqxzGWyu2YERfgKsPmQT5R1u5O185%2Bi2fBtQrf2l2v5gLQBrE0Y02u%2BXrflqEoA2NklD9dMJgkAVSIcCLHX6NYNi%2F2Q82Q4CctK3QDakYQv8y%2FKLKsJQ9C23Bn0L97VaimxliNp1lx9O27ENT8nFfPIcUm86%2FiH8IjmzMrPHGkXBtwtbiaV%2FjUCkUlywwt5ifvQY6pgH%2B660XPM5Y8blWzcVYSDD%2FYKtC01jVdsP7UKIP1koSDx2Pxc7hQHw2BGC7e02a6UWfJDBqsWGr7R0xB%2FxoJKjm6q4T2oLCNmfVg7P3IyzZ%2F7phwRg6wrUuay97LKGXCXZSPiCd8u689RsONgUct0dXaI1%2BsA3U4WPfEG9npbWowizCvq0Ztm0ofChtU2HcLHAMnWJbhFLHrMnAn7F1oCc%2F%2FW7Yi3QI&X-Amz-Signature=18ca7d81aab54726772c943f9bf7be4abe7f4b24e1ac9c65565cea893d58bb98&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BMIFKXO%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFT7ZiakXrSPRh35SConLHa1914GKU5jSthctKfetXgkAiBaaTBQ4elNyjgXIiq9%2FZGLEn7nhY9smwzjaLlzB1qc0SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8ACY9jpjtRBqpDTrKtwDHRZeKgRhDSAqAW3FHiJljkiLayCLot1PiacLZypfA3FOs4pT%2FEgDmnLdjYUi64RB5yfp%2B4%2FzVj3MBZeTtDdknf2CfX8PUu2%2BXGqgCtydwPCY7EXvJV2gFFemI30rIaUARtfSrdfhfcVE8gXSi8wkjQFpsWaCbxlnnCD2txn%2FHjIZ8nkzTsrII3Nm1SZGD%2BwMtoZRbu3vIYqkzy40WGfaSc6X218xVYFSAxUTfnU3plamemEzx8u64YBcmUJX%2BfvAJ7S4VPV2w9j7oAp%2BmgdEcZxHrgYV%2BUynoJ65pZUxut1UtkUpgCi5gDnOTCGdN36jJAn2ETaJx2PPCWXbjKTNLzzCutZxDMTC2HjPmOX4FLZTmn6j87u4yB1f0TuUZYyvsaEg%2FsPSQs5v1Ddv31pQEFC0%2FlrT5NPUY%2F6WzXwDFt5MBoNw6mJifHYM1i4LCwTGqxzGWyu2YERfgKsPmQT5R1u5O185%2Bi2fBtQrf2l2v5gLQBrE0Y02u%2BXrflqEoA2NklD9dMJgkAVSIcCLHX6NYNi%2F2Q82Q4CctK3QDakYQv8y%2FKLKsJQ9C23Bn0L97VaimxliNp1lx9O27ENT8nFfPIcUm86%2FiH8IjmzMrPHGkXBtwtbiaV%2FjUCkUlywwt5ifvQY6pgH%2B660XPM5Y8blWzcVYSDD%2FYKtC01jVdsP7UKIP1koSDx2Pxc7hQHw2BGC7e02a6UWfJDBqsWGr7R0xB%2FxoJKjm6q4T2oLCNmfVg7P3IyzZ%2F7phwRg6wrUuay97LKGXCXZSPiCd8u689RsONgUct0dXaI1%2BsA3U4WPfEG9npbWowizCvq0Ztm0ofChtU2HcLHAMnWJbhFLHrMnAn7F1oCc%2F%2FW7Yi3QI&X-Amz-Signature=73da3951922d8f0e1d87f7fa82fb69012aefed4f579522e07abecc2817b271da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BMIFKXO%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFT7ZiakXrSPRh35SConLHa1914GKU5jSthctKfetXgkAiBaaTBQ4elNyjgXIiq9%2FZGLEn7nhY9smwzjaLlzB1qc0SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8ACY9jpjtRBqpDTrKtwDHRZeKgRhDSAqAW3FHiJljkiLayCLot1PiacLZypfA3FOs4pT%2FEgDmnLdjYUi64RB5yfp%2B4%2FzVj3MBZeTtDdknf2CfX8PUu2%2BXGqgCtydwPCY7EXvJV2gFFemI30rIaUARtfSrdfhfcVE8gXSi8wkjQFpsWaCbxlnnCD2txn%2FHjIZ8nkzTsrII3Nm1SZGD%2BwMtoZRbu3vIYqkzy40WGfaSc6X218xVYFSAxUTfnU3plamemEzx8u64YBcmUJX%2BfvAJ7S4VPV2w9j7oAp%2BmgdEcZxHrgYV%2BUynoJ65pZUxut1UtkUpgCi5gDnOTCGdN36jJAn2ETaJx2PPCWXbjKTNLzzCutZxDMTC2HjPmOX4FLZTmn6j87u4yB1f0TuUZYyvsaEg%2FsPSQs5v1Ddv31pQEFC0%2FlrT5NPUY%2F6WzXwDFt5MBoNw6mJifHYM1i4LCwTGqxzGWyu2YERfgKsPmQT5R1u5O185%2Bi2fBtQrf2l2v5gLQBrE0Y02u%2BXrflqEoA2NklD9dMJgkAVSIcCLHX6NYNi%2F2Q82Q4CctK3QDakYQv8y%2FKLKsJQ9C23Bn0L97VaimxliNp1lx9O27ENT8nFfPIcUm86%2FiH8IjmzMrPHGkXBtwtbiaV%2FjUCkUlywwt5ifvQY6pgH%2B660XPM5Y8blWzcVYSDD%2FYKtC01jVdsP7UKIP1koSDx2Pxc7hQHw2BGC7e02a6UWfJDBqsWGr7R0xB%2FxoJKjm6q4T2oLCNmfVg7P3IyzZ%2F7phwRg6wrUuay97LKGXCXZSPiCd8u689RsONgUct0dXaI1%2BsA3U4WPfEG9npbWowizCvq0Ztm0ofChtU2HcLHAMnWJbhFLHrMnAn7F1oCc%2F%2FW7Yi3QI&X-Amz-Signature=662e0ba0af8ad6843265f6a3be7d96b670e3e65f96d5432820035cac2a08a440&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BMIFKXO%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFT7ZiakXrSPRh35SConLHa1914GKU5jSthctKfetXgkAiBaaTBQ4elNyjgXIiq9%2FZGLEn7nhY9smwzjaLlzB1qc0SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8ACY9jpjtRBqpDTrKtwDHRZeKgRhDSAqAW3FHiJljkiLayCLot1PiacLZypfA3FOs4pT%2FEgDmnLdjYUi64RB5yfp%2B4%2FzVj3MBZeTtDdknf2CfX8PUu2%2BXGqgCtydwPCY7EXvJV2gFFemI30rIaUARtfSrdfhfcVE8gXSi8wkjQFpsWaCbxlnnCD2txn%2FHjIZ8nkzTsrII3Nm1SZGD%2BwMtoZRbu3vIYqkzy40WGfaSc6X218xVYFSAxUTfnU3plamemEzx8u64YBcmUJX%2BfvAJ7S4VPV2w9j7oAp%2BmgdEcZxHrgYV%2BUynoJ65pZUxut1UtkUpgCi5gDnOTCGdN36jJAn2ETaJx2PPCWXbjKTNLzzCutZxDMTC2HjPmOX4FLZTmn6j87u4yB1f0TuUZYyvsaEg%2FsPSQs5v1Ddv31pQEFC0%2FlrT5NPUY%2F6WzXwDFt5MBoNw6mJifHYM1i4LCwTGqxzGWyu2YERfgKsPmQT5R1u5O185%2Bi2fBtQrf2l2v5gLQBrE0Y02u%2BXrflqEoA2NklD9dMJgkAVSIcCLHX6NYNi%2F2Q82Q4CctK3QDakYQv8y%2FKLKsJQ9C23Bn0L97VaimxliNp1lx9O27ENT8nFfPIcUm86%2FiH8IjmzMrPHGkXBtwtbiaV%2FjUCkUlywwt5ifvQY6pgH%2B660XPM5Y8blWzcVYSDD%2FYKtC01jVdsP7UKIP1koSDx2Pxc7hQHw2BGC7e02a6UWfJDBqsWGr7R0xB%2FxoJKjm6q4T2oLCNmfVg7P3IyzZ%2F7phwRg6wrUuay97LKGXCXZSPiCd8u689RsONgUct0dXaI1%2BsA3U4WPfEG9npbWowizCvq0Ztm0ofChtU2HcLHAMnWJbhFLHrMnAn7F1oCc%2F%2FW7Yi3QI&X-Amz-Signature=0059e5065b274e02696813379579a167757001e6e1c0cef6aff9ecb4d3f2e198&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BMIFKXO%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFT7ZiakXrSPRh35SConLHa1914GKU5jSthctKfetXgkAiBaaTBQ4elNyjgXIiq9%2FZGLEn7nhY9smwzjaLlzB1qc0SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8ACY9jpjtRBqpDTrKtwDHRZeKgRhDSAqAW3FHiJljkiLayCLot1PiacLZypfA3FOs4pT%2FEgDmnLdjYUi64RB5yfp%2B4%2FzVj3MBZeTtDdknf2CfX8PUu2%2BXGqgCtydwPCY7EXvJV2gFFemI30rIaUARtfSrdfhfcVE8gXSi8wkjQFpsWaCbxlnnCD2txn%2FHjIZ8nkzTsrII3Nm1SZGD%2BwMtoZRbu3vIYqkzy40WGfaSc6X218xVYFSAxUTfnU3plamemEzx8u64YBcmUJX%2BfvAJ7S4VPV2w9j7oAp%2BmgdEcZxHrgYV%2BUynoJ65pZUxut1UtkUpgCi5gDnOTCGdN36jJAn2ETaJx2PPCWXbjKTNLzzCutZxDMTC2HjPmOX4FLZTmn6j87u4yB1f0TuUZYyvsaEg%2FsPSQs5v1Ddv31pQEFC0%2FlrT5NPUY%2F6WzXwDFt5MBoNw6mJifHYM1i4LCwTGqxzGWyu2YERfgKsPmQT5R1u5O185%2Bi2fBtQrf2l2v5gLQBrE0Y02u%2BXrflqEoA2NklD9dMJgkAVSIcCLHX6NYNi%2F2Q82Q4CctK3QDakYQv8y%2FKLKsJQ9C23Bn0L97VaimxliNp1lx9O27ENT8nFfPIcUm86%2FiH8IjmzMrPHGkXBtwtbiaV%2FjUCkUlywwt5ifvQY6pgH%2B660XPM5Y8blWzcVYSDD%2FYKtC01jVdsP7UKIP1koSDx2Pxc7hQHw2BGC7e02a6UWfJDBqsWGr7R0xB%2FxoJKjm6q4T2oLCNmfVg7P3IyzZ%2F7phwRg6wrUuay97LKGXCXZSPiCd8u689RsONgUct0dXaI1%2BsA3U4WPfEG9npbWowizCvq0Ztm0ofChtU2HcLHAMnWJbhFLHrMnAn7F1oCc%2F%2FW7Yi3QI&X-Amz-Signature=e09e7ea50032dfa78afa9306346bcba8bcfade08fd8050db5864b25881e78039&X-Amz-SignedHeaders=host&x-id=GetObject)
