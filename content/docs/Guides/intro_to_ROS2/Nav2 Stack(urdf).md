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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZK4YL3D%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFui7%2FuQfqyebgIQQ%2BPGwj1FW%2BDah0GDVd2FVawS279tAiA1IVQH0xmUl01SOWzvX8oSeGFzwP3TGkAE56KBFSE5wiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI12v%2BqA9bEv0cDUSKtwD8eQVd30mwbbcES9VfWdts%2BJ4%2Fzga9R7PXft%2BdTVWhxaLtho0NJtJcW4QMX%2BWmg7hRBgbcqvRXj%2FE%2BbwIN46GUeQ3Wvb2p4RA6k%2Bux%2FxVndOpvzkOPy7OBINIrvBqAh0h962jdbQoQk4ZxQwP2exU6Pmc6FWUGOpstiO%2FLpQBHvloVS%2BZ3eWVqPelykbPK%2FmNQ%2BnWpU7Uznn0%2FXGXDCXZ4MJ5S8fJYYUn%2FmJje1oC2Ox9250zWd4jZPLB2GMTkHbvgSbB7vpowfIzdNXWgyDnqjdvczY8W6ViTRGiSoWFEk0olNtU7jCt4k1ke9hyXFg3yosLSCG2VMIS%2B3Pt2H3oN1Rm7R2GOlEehVVH5iWNoyamDAQ6bFkr5BF9a9QtDi5YMuPbm97icZB%2BXWJNVK0vXGFdPcNY4Vet%2BxedGlfySU1z%2Fv%2BlqehyucRUEA5tLibjRp2oe0EuvVwb4%2FwL0RBmp1XQVDI1P%2B7mLRA%2Bk2zV5EfUpRdX6jN7hEFfLV%2BAMtBXl%2Bvy0R7sDFsmy2BiWD2L81PwrGZL79cKFNajhpupjjj2Og%2BvzTdY%2Fto55JTV28RtBmKyA%2BdZEsydrBgaAC6c%2F9os262UA%2FxMpJsYqxm6AhOMgvWTnZ8l8lNPBy8w4f3vvAY6pgHYSLRcy0VVT6SCC8mMCERIhFKy8ecDsUJdN9mSqRsyBVtolL6sLlcRW%2BsudvrXakCsH5QIZeReRMrPgX6YWbp3i7mn9V8PNUCVlEXzazyYLQQVqjbrZgcdJHjRLkg1tc8Figjv8nUloOreddV1EneIwVULdkRswM7j9P19V3Dlp6TuIiM5aXgZynTI3%2Fuv197bWg2hPn0UWTxmNdkvYtV%2BUVDauZAZ&X-Amz-Signature=8e1ab9591aa0f9128e817f040e5f30e6208fc0da11de15cff7d9a4d8cd5b83c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZK4YL3D%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFui7%2FuQfqyebgIQQ%2BPGwj1FW%2BDah0GDVd2FVawS279tAiA1IVQH0xmUl01SOWzvX8oSeGFzwP3TGkAE56KBFSE5wiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI12v%2BqA9bEv0cDUSKtwD8eQVd30mwbbcES9VfWdts%2BJ4%2Fzga9R7PXft%2BdTVWhxaLtho0NJtJcW4QMX%2BWmg7hRBgbcqvRXj%2FE%2BbwIN46GUeQ3Wvb2p4RA6k%2Bux%2FxVndOpvzkOPy7OBINIrvBqAh0h962jdbQoQk4ZxQwP2exU6Pmc6FWUGOpstiO%2FLpQBHvloVS%2BZ3eWVqPelykbPK%2FmNQ%2BnWpU7Uznn0%2FXGXDCXZ4MJ5S8fJYYUn%2FmJje1oC2Ox9250zWd4jZPLB2GMTkHbvgSbB7vpowfIzdNXWgyDnqjdvczY8W6ViTRGiSoWFEk0olNtU7jCt4k1ke9hyXFg3yosLSCG2VMIS%2B3Pt2H3oN1Rm7R2GOlEehVVH5iWNoyamDAQ6bFkr5BF9a9QtDi5YMuPbm97icZB%2BXWJNVK0vXGFdPcNY4Vet%2BxedGlfySU1z%2Fv%2BlqehyucRUEA5tLibjRp2oe0EuvVwb4%2FwL0RBmp1XQVDI1P%2B7mLRA%2Bk2zV5EfUpRdX6jN7hEFfLV%2BAMtBXl%2Bvy0R7sDFsmy2BiWD2L81PwrGZL79cKFNajhpupjjj2Og%2BvzTdY%2Fto55JTV28RtBmKyA%2BdZEsydrBgaAC6c%2F9os262UA%2FxMpJsYqxm6AhOMgvWTnZ8l8lNPBy8w4f3vvAY6pgHYSLRcy0VVT6SCC8mMCERIhFKy8ecDsUJdN9mSqRsyBVtolL6sLlcRW%2BsudvrXakCsH5QIZeReRMrPgX6YWbp3i7mn9V8PNUCVlEXzazyYLQQVqjbrZgcdJHjRLkg1tc8Figjv8nUloOreddV1EneIwVULdkRswM7j9P19V3Dlp6TuIiM5aXgZynTI3%2Fuv197bWg2hPn0UWTxmNdkvYtV%2BUVDauZAZ&X-Amz-Signature=e20ec691897a1e1474c6f5e83e52e2bb454e8203b331c994637173fa6781428c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZK4YL3D%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFui7%2FuQfqyebgIQQ%2BPGwj1FW%2BDah0GDVd2FVawS279tAiA1IVQH0xmUl01SOWzvX8oSeGFzwP3TGkAE56KBFSE5wiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI12v%2BqA9bEv0cDUSKtwD8eQVd30mwbbcES9VfWdts%2BJ4%2Fzga9R7PXft%2BdTVWhxaLtho0NJtJcW4QMX%2BWmg7hRBgbcqvRXj%2FE%2BbwIN46GUeQ3Wvb2p4RA6k%2Bux%2FxVndOpvzkOPy7OBINIrvBqAh0h962jdbQoQk4ZxQwP2exU6Pmc6FWUGOpstiO%2FLpQBHvloVS%2BZ3eWVqPelykbPK%2FmNQ%2BnWpU7Uznn0%2FXGXDCXZ4MJ5S8fJYYUn%2FmJje1oC2Ox9250zWd4jZPLB2GMTkHbvgSbB7vpowfIzdNXWgyDnqjdvczY8W6ViTRGiSoWFEk0olNtU7jCt4k1ke9hyXFg3yosLSCG2VMIS%2B3Pt2H3oN1Rm7R2GOlEehVVH5iWNoyamDAQ6bFkr5BF9a9QtDi5YMuPbm97icZB%2BXWJNVK0vXGFdPcNY4Vet%2BxedGlfySU1z%2Fv%2BlqehyucRUEA5tLibjRp2oe0EuvVwb4%2FwL0RBmp1XQVDI1P%2B7mLRA%2Bk2zV5EfUpRdX6jN7hEFfLV%2BAMtBXl%2Bvy0R7sDFsmy2BiWD2L81PwrGZL79cKFNajhpupjjj2Og%2BvzTdY%2Fto55JTV28RtBmKyA%2BdZEsydrBgaAC6c%2F9os262UA%2FxMpJsYqxm6AhOMgvWTnZ8l8lNPBy8w4f3vvAY6pgHYSLRcy0VVT6SCC8mMCERIhFKy8ecDsUJdN9mSqRsyBVtolL6sLlcRW%2BsudvrXakCsH5QIZeReRMrPgX6YWbp3i7mn9V8PNUCVlEXzazyYLQQVqjbrZgcdJHjRLkg1tc8Figjv8nUloOreddV1EneIwVULdkRswM7j9P19V3Dlp6TuIiM5aXgZynTI3%2Fuv197bWg2hPn0UWTxmNdkvYtV%2BUVDauZAZ&X-Amz-Signature=abc0ab8c056d69b8532eb3311e68320c965a20c7624c3626840dd9c03d5872db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZK4YL3D%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFui7%2FuQfqyebgIQQ%2BPGwj1FW%2BDah0GDVd2FVawS279tAiA1IVQH0xmUl01SOWzvX8oSeGFzwP3TGkAE56KBFSE5wiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI12v%2BqA9bEv0cDUSKtwD8eQVd30mwbbcES9VfWdts%2BJ4%2Fzga9R7PXft%2BdTVWhxaLtho0NJtJcW4QMX%2BWmg7hRBgbcqvRXj%2FE%2BbwIN46GUeQ3Wvb2p4RA6k%2Bux%2FxVndOpvzkOPy7OBINIrvBqAh0h962jdbQoQk4ZxQwP2exU6Pmc6FWUGOpstiO%2FLpQBHvloVS%2BZ3eWVqPelykbPK%2FmNQ%2BnWpU7Uznn0%2FXGXDCXZ4MJ5S8fJYYUn%2FmJje1oC2Ox9250zWd4jZPLB2GMTkHbvgSbB7vpowfIzdNXWgyDnqjdvczY8W6ViTRGiSoWFEk0olNtU7jCt4k1ke9hyXFg3yosLSCG2VMIS%2B3Pt2H3oN1Rm7R2GOlEehVVH5iWNoyamDAQ6bFkr5BF9a9QtDi5YMuPbm97icZB%2BXWJNVK0vXGFdPcNY4Vet%2BxedGlfySU1z%2Fv%2BlqehyucRUEA5tLibjRp2oe0EuvVwb4%2FwL0RBmp1XQVDI1P%2B7mLRA%2Bk2zV5EfUpRdX6jN7hEFfLV%2BAMtBXl%2Bvy0R7sDFsmy2BiWD2L81PwrGZL79cKFNajhpupjjj2Og%2BvzTdY%2Fto55JTV28RtBmKyA%2BdZEsydrBgaAC6c%2F9os262UA%2FxMpJsYqxm6AhOMgvWTnZ8l8lNPBy8w4f3vvAY6pgHYSLRcy0VVT6SCC8mMCERIhFKy8ecDsUJdN9mSqRsyBVtolL6sLlcRW%2BsudvrXakCsH5QIZeReRMrPgX6YWbp3i7mn9V8PNUCVlEXzazyYLQQVqjbrZgcdJHjRLkg1tc8Figjv8nUloOreddV1EneIwVULdkRswM7j9P19V3Dlp6TuIiM5aXgZynTI3%2Fuv197bWg2hPn0UWTxmNdkvYtV%2BUVDauZAZ&X-Amz-Signature=cdb94727ddf1367a9254c5903ee8579b0dfd81ada60a0bcb5ab077f874e5a055&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZK4YL3D%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFui7%2FuQfqyebgIQQ%2BPGwj1FW%2BDah0GDVd2FVawS279tAiA1IVQH0xmUl01SOWzvX8oSeGFzwP3TGkAE56KBFSE5wiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI12v%2BqA9bEv0cDUSKtwD8eQVd30mwbbcES9VfWdts%2BJ4%2Fzga9R7PXft%2BdTVWhxaLtho0NJtJcW4QMX%2BWmg7hRBgbcqvRXj%2FE%2BbwIN46GUeQ3Wvb2p4RA6k%2Bux%2FxVndOpvzkOPy7OBINIrvBqAh0h962jdbQoQk4ZxQwP2exU6Pmc6FWUGOpstiO%2FLpQBHvloVS%2BZ3eWVqPelykbPK%2FmNQ%2BnWpU7Uznn0%2FXGXDCXZ4MJ5S8fJYYUn%2FmJje1oC2Ox9250zWd4jZPLB2GMTkHbvgSbB7vpowfIzdNXWgyDnqjdvczY8W6ViTRGiSoWFEk0olNtU7jCt4k1ke9hyXFg3yosLSCG2VMIS%2B3Pt2H3oN1Rm7R2GOlEehVVH5iWNoyamDAQ6bFkr5BF9a9QtDi5YMuPbm97icZB%2BXWJNVK0vXGFdPcNY4Vet%2BxedGlfySU1z%2Fv%2BlqehyucRUEA5tLibjRp2oe0EuvVwb4%2FwL0RBmp1XQVDI1P%2B7mLRA%2Bk2zV5EfUpRdX6jN7hEFfLV%2BAMtBXl%2Bvy0R7sDFsmy2BiWD2L81PwrGZL79cKFNajhpupjjj2Og%2BvzTdY%2Fto55JTV28RtBmKyA%2BdZEsydrBgaAC6c%2F9os262UA%2FxMpJsYqxm6AhOMgvWTnZ8l8lNPBy8w4f3vvAY6pgHYSLRcy0VVT6SCC8mMCERIhFKy8ecDsUJdN9mSqRsyBVtolL6sLlcRW%2BsudvrXakCsH5QIZeReRMrPgX6YWbp3i7mn9V8PNUCVlEXzazyYLQQVqjbrZgcdJHjRLkg1tc8Figjv8nUloOreddV1EneIwVULdkRswM7j9P19V3Dlp6TuIiM5aXgZynTI3%2Fuv197bWg2hPn0UWTxmNdkvYtV%2BUVDauZAZ&X-Amz-Signature=3c7417fcf303fc6e6442bdab11b3774a3e4f03eae02b16f43a106134c2bb702e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZK4YL3D%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFui7%2FuQfqyebgIQQ%2BPGwj1FW%2BDah0GDVd2FVawS279tAiA1IVQH0xmUl01SOWzvX8oSeGFzwP3TGkAE56KBFSE5wiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI12v%2BqA9bEv0cDUSKtwD8eQVd30mwbbcES9VfWdts%2BJ4%2Fzga9R7PXft%2BdTVWhxaLtho0NJtJcW4QMX%2BWmg7hRBgbcqvRXj%2FE%2BbwIN46GUeQ3Wvb2p4RA6k%2Bux%2FxVndOpvzkOPy7OBINIrvBqAh0h962jdbQoQk4ZxQwP2exU6Pmc6FWUGOpstiO%2FLpQBHvloVS%2BZ3eWVqPelykbPK%2FmNQ%2BnWpU7Uznn0%2FXGXDCXZ4MJ5S8fJYYUn%2FmJje1oC2Ox9250zWd4jZPLB2GMTkHbvgSbB7vpowfIzdNXWgyDnqjdvczY8W6ViTRGiSoWFEk0olNtU7jCt4k1ke9hyXFg3yosLSCG2VMIS%2B3Pt2H3oN1Rm7R2GOlEehVVH5iWNoyamDAQ6bFkr5BF9a9QtDi5YMuPbm97icZB%2BXWJNVK0vXGFdPcNY4Vet%2BxedGlfySU1z%2Fv%2BlqehyucRUEA5tLibjRp2oe0EuvVwb4%2FwL0RBmp1XQVDI1P%2B7mLRA%2Bk2zV5EfUpRdX6jN7hEFfLV%2BAMtBXl%2Bvy0R7sDFsmy2BiWD2L81PwrGZL79cKFNajhpupjjj2Og%2BvzTdY%2Fto55JTV28RtBmKyA%2BdZEsydrBgaAC6c%2F9os262UA%2FxMpJsYqxm6AhOMgvWTnZ8l8lNPBy8w4f3vvAY6pgHYSLRcy0VVT6SCC8mMCERIhFKy8ecDsUJdN9mSqRsyBVtolL6sLlcRW%2BsudvrXakCsH5QIZeReRMrPgX6YWbp3i7mn9V8PNUCVlEXzazyYLQQVqjbrZgcdJHjRLkg1tc8Figjv8nUloOreddV1EneIwVULdkRswM7j9P19V3Dlp6TuIiM5aXgZynTI3%2Fuv197bWg2hPn0UWTxmNdkvYtV%2BUVDauZAZ&X-Amz-Signature=51b52f84e876cd5fd1b98d95666353ae64f77040a7835bed84dedc26f790a651&X-Amz-SignedHeaders=host&x-id=GetObject)
