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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG5Z6QNB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbMPH52FPOAKXPPHmdgpxKXLps%2FeKR0yIDVOECGfebcQIhAJEYEdOlwbAjQXIrlUaUzFhvsgNCy1XvgZBQRE%2FxQXHvKv8DCHIQABoMNjM3NDIzMTgzODA1IgzLSQ3h2SxMDKDH4VQq3AMDs6ZDJZWwHxctqsxVr8TGJsycLRRKSKgxt4LIF3acclukEtvD54caygxlt5OByLcgcS33tlTRRUpvy29qy%2F%2Bfl0wrxs%2FZmTWlUl5xiyLqRbFz7LXUabL95XemZb3l8p%2FIHxUpEYHk5b65F8HQDMGsD%2BikWQY26xB97qxBLFUtQjxncK3Ce1P3eCQ2DGHYPuVYEF%2Fhh%2BGpcMcJvh5QDcxsSKUH6LmmC9Dap3JFdESjtS16cR1oCKbTmTHaoGLLo%2Bdh9u2l1Y9x5XWF%2Fcmwpdopa4Hqr1FCUTeHOOAVfCKyV7tVolT02sU%2F3qmcysJHQHUzqZ4pMWFB57dCzOdxvjiy7GrNMZB6l2kRlLEqIuHn%2BT9YWnfz5InuSjMzzWgARmlkmJ82XxDr4XG91ZEDbdUwC2QTAhM%2BLxXzc7hFU0XxVaIG6l29i68Wz4LKtsFZNETz%2FdLNMdYD%2FYtjcll32Ryu8gftm5d%2B7qRcSFoBptJjLiR77hR2mVHGkxKXzh2iqOx0uKSXbAhmeXE6HnlZ8%2Bx4ahvi1RFgOfK9Y%2B5s%2F0K3HcWOYC032bQEp6dboAud5ooMAZAYu4PXumBDE2eAaMe%2F1dfOISnhj%2B%2BFTrSC2piPiEofGiN67XYFBOSTOjDI%2Bo%2FCBjqkAVrL77F76ZhNjFgip%2BSO%2FIf82LAnndXEKM4xhMNo58w0vwabl5EBZQtcfqons3eHXilk5O9ajIeaLxvc9q6qgeay%2BG5xxQ6ozYMdgJoH8cfyRcg7pUlc3To9A0ii%2FVu9%2F6kzzDk5P%2BO%2FuB865FonaXiEGXUqaOkUAnK696WdhXv77RiubqyCvqf57DtPSGKGpMI3iCNjo0uAQRMbB9dfd%2BAraXzN&X-Amz-Signature=d1834dff5933c2da91bb6eaa29800aad4d05c3fc52eea15264d6d3681ed56777&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG5Z6QNB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbMPH52FPOAKXPPHmdgpxKXLps%2FeKR0yIDVOECGfebcQIhAJEYEdOlwbAjQXIrlUaUzFhvsgNCy1XvgZBQRE%2FxQXHvKv8DCHIQABoMNjM3NDIzMTgzODA1IgzLSQ3h2SxMDKDH4VQq3AMDs6ZDJZWwHxctqsxVr8TGJsycLRRKSKgxt4LIF3acclukEtvD54caygxlt5OByLcgcS33tlTRRUpvy29qy%2F%2Bfl0wrxs%2FZmTWlUl5xiyLqRbFz7LXUabL95XemZb3l8p%2FIHxUpEYHk5b65F8HQDMGsD%2BikWQY26xB97qxBLFUtQjxncK3Ce1P3eCQ2DGHYPuVYEF%2Fhh%2BGpcMcJvh5QDcxsSKUH6LmmC9Dap3JFdESjtS16cR1oCKbTmTHaoGLLo%2Bdh9u2l1Y9x5XWF%2Fcmwpdopa4Hqr1FCUTeHOOAVfCKyV7tVolT02sU%2F3qmcysJHQHUzqZ4pMWFB57dCzOdxvjiy7GrNMZB6l2kRlLEqIuHn%2BT9YWnfz5InuSjMzzWgARmlkmJ82XxDr4XG91ZEDbdUwC2QTAhM%2BLxXzc7hFU0XxVaIG6l29i68Wz4LKtsFZNETz%2FdLNMdYD%2FYtjcll32Ryu8gftm5d%2B7qRcSFoBptJjLiR77hR2mVHGkxKXzh2iqOx0uKSXbAhmeXE6HnlZ8%2Bx4ahvi1RFgOfK9Y%2B5s%2F0K3HcWOYC032bQEp6dboAud5ooMAZAYu4PXumBDE2eAaMe%2F1dfOISnhj%2B%2BFTrSC2piPiEofGiN67XYFBOSTOjDI%2Bo%2FCBjqkAVrL77F76ZhNjFgip%2BSO%2FIf82LAnndXEKM4xhMNo58w0vwabl5EBZQtcfqons3eHXilk5O9ajIeaLxvc9q6qgeay%2BG5xxQ6ozYMdgJoH8cfyRcg7pUlc3To9A0ii%2FVu9%2F6kzzDk5P%2BO%2FuB865FonaXiEGXUqaOkUAnK696WdhXv77RiubqyCvqf57DtPSGKGpMI3iCNjo0uAQRMbB9dfd%2BAraXzN&X-Amz-Signature=c45fd9a9556a8211ff3706970b5c8b696db932a7f08fbd2cd5dd08e1ee9aceed&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG5Z6QNB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbMPH52FPOAKXPPHmdgpxKXLps%2FeKR0yIDVOECGfebcQIhAJEYEdOlwbAjQXIrlUaUzFhvsgNCy1XvgZBQRE%2FxQXHvKv8DCHIQABoMNjM3NDIzMTgzODA1IgzLSQ3h2SxMDKDH4VQq3AMDs6ZDJZWwHxctqsxVr8TGJsycLRRKSKgxt4LIF3acclukEtvD54caygxlt5OByLcgcS33tlTRRUpvy29qy%2F%2Bfl0wrxs%2FZmTWlUl5xiyLqRbFz7LXUabL95XemZb3l8p%2FIHxUpEYHk5b65F8HQDMGsD%2BikWQY26xB97qxBLFUtQjxncK3Ce1P3eCQ2DGHYPuVYEF%2Fhh%2BGpcMcJvh5QDcxsSKUH6LmmC9Dap3JFdESjtS16cR1oCKbTmTHaoGLLo%2Bdh9u2l1Y9x5XWF%2Fcmwpdopa4Hqr1FCUTeHOOAVfCKyV7tVolT02sU%2F3qmcysJHQHUzqZ4pMWFB57dCzOdxvjiy7GrNMZB6l2kRlLEqIuHn%2BT9YWnfz5InuSjMzzWgARmlkmJ82XxDr4XG91ZEDbdUwC2QTAhM%2BLxXzc7hFU0XxVaIG6l29i68Wz4LKtsFZNETz%2FdLNMdYD%2FYtjcll32Ryu8gftm5d%2B7qRcSFoBptJjLiR77hR2mVHGkxKXzh2iqOx0uKSXbAhmeXE6HnlZ8%2Bx4ahvi1RFgOfK9Y%2B5s%2F0K3HcWOYC032bQEp6dboAud5ooMAZAYu4PXumBDE2eAaMe%2F1dfOISnhj%2B%2BFTrSC2piPiEofGiN67XYFBOSTOjDI%2Bo%2FCBjqkAVrL77F76ZhNjFgip%2BSO%2FIf82LAnndXEKM4xhMNo58w0vwabl5EBZQtcfqons3eHXilk5O9ajIeaLxvc9q6qgeay%2BG5xxQ6ozYMdgJoH8cfyRcg7pUlc3To9A0ii%2FVu9%2F6kzzDk5P%2BO%2FuB865FonaXiEGXUqaOkUAnK696WdhXv77RiubqyCvqf57DtPSGKGpMI3iCNjo0uAQRMbB9dfd%2BAraXzN&X-Amz-Signature=4f0403ecaf31abea62914278e5fabe2664ccce7b664779d5c52e22e4c4791e88&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG5Z6QNB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbMPH52FPOAKXPPHmdgpxKXLps%2FeKR0yIDVOECGfebcQIhAJEYEdOlwbAjQXIrlUaUzFhvsgNCy1XvgZBQRE%2FxQXHvKv8DCHIQABoMNjM3NDIzMTgzODA1IgzLSQ3h2SxMDKDH4VQq3AMDs6ZDJZWwHxctqsxVr8TGJsycLRRKSKgxt4LIF3acclukEtvD54caygxlt5OByLcgcS33tlTRRUpvy29qy%2F%2Bfl0wrxs%2FZmTWlUl5xiyLqRbFz7LXUabL95XemZb3l8p%2FIHxUpEYHk5b65F8HQDMGsD%2BikWQY26xB97qxBLFUtQjxncK3Ce1P3eCQ2DGHYPuVYEF%2Fhh%2BGpcMcJvh5QDcxsSKUH6LmmC9Dap3JFdESjtS16cR1oCKbTmTHaoGLLo%2Bdh9u2l1Y9x5XWF%2Fcmwpdopa4Hqr1FCUTeHOOAVfCKyV7tVolT02sU%2F3qmcysJHQHUzqZ4pMWFB57dCzOdxvjiy7GrNMZB6l2kRlLEqIuHn%2BT9YWnfz5InuSjMzzWgARmlkmJ82XxDr4XG91ZEDbdUwC2QTAhM%2BLxXzc7hFU0XxVaIG6l29i68Wz4LKtsFZNETz%2FdLNMdYD%2FYtjcll32Ryu8gftm5d%2B7qRcSFoBptJjLiR77hR2mVHGkxKXzh2iqOx0uKSXbAhmeXE6HnlZ8%2Bx4ahvi1RFgOfK9Y%2B5s%2F0K3HcWOYC032bQEp6dboAud5ooMAZAYu4PXumBDE2eAaMe%2F1dfOISnhj%2B%2BFTrSC2piPiEofGiN67XYFBOSTOjDI%2Bo%2FCBjqkAVrL77F76ZhNjFgip%2BSO%2FIf82LAnndXEKM4xhMNo58w0vwabl5EBZQtcfqons3eHXilk5O9ajIeaLxvc9q6qgeay%2BG5xxQ6ozYMdgJoH8cfyRcg7pUlc3To9A0ii%2FVu9%2F6kzzDk5P%2BO%2FuB865FonaXiEGXUqaOkUAnK696WdhXv77RiubqyCvqf57DtPSGKGpMI3iCNjo0uAQRMbB9dfd%2BAraXzN&X-Amz-Signature=27ac054c35e51ae0d16b7f6d30ea4f5308c5628bc68c5f8c7710a8613336f1ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG5Z6QNB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbMPH52FPOAKXPPHmdgpxKXLps%2FeKR0yIDVOECGfebcQIhAJEYEdOlwbAjQXIrlUaUzFhvsgNCy1XvgZBQRE%2FxQXHvKv8DCHIQABoMNjM3NDIzMTgzODA1IgzLSQ3h2SxMDKDH4VQq3AMDs6ZDJZWwHxctqsxVr8TGJsycLRRKSKgxt4LIF3acclukEtvD54caygxlt5OByLcgcS33tlTRRUpvy29qy%2F%2Bfl0wrxs%2FZmTWlUl5xiyLqRbFz7LXUabL95XemZb3l8p%2FIHxUpEYHk5b65F8HQDMGsD%2BikWQY26xB97qxBLFUtQjxncK3Ce1P3eCQ2DGHYPuVYEF%2Fhh%2BGpcMcJvh5QDcxsSKUH6LmmC9Dap3JFdESjtS16cR1oCKbTmTHaoGLLo%2Bdh9u2l1Y9x5XWF%2Fcmwpdopa4Hqr1FCUTeHOOAVfCKyV7tVolT02sU%2F3qmcysJHQHUzqZ4pMWFB57dCzOdxvjiy7GrNMZB6l2kRlLEqIuHn%2BT9YWnfz5InuSjMzzWgARmlkmJ82XxDr4XG91ZEDbdUwC2QTAhM%2BLxXzc7hFU0XxVaIG6l29i68Wz4LKtsFZNETz%2FdLNMdYD%2FYtjcll32Ryu8gftm5d%2B7qRcSFoBptJjLiR77hR2mVHGkxKXzh2iqOx0uKSXbAhmeXE6HnlZ8%2Bx4ahvi1RFgOfK9Y%2B5s%2F0K3HcWOYC032bQEp6dboAud5ooMAZAYu4PXumBDE2eAaMe%2F1dfOISnhj%2B%2BFTrSC2piPiEofGiN67XYFBOSTOjDI%2Bo%2FCBjqkAVrL77F76ZhNjFgip%2BSO%2FIf82LAnndXEKM4xhMNo58w0vwabl5EBZQtcfqons3eHXilk5O9ajIeaLxvc9q6qgeay%2BG5xxQ6ozYMdgJoH8cfyRcg7pUlc3To9A0ii%2FVu9%2F6kzzDk5P%2BO%2FuB865FonaXiEGXUqaOkUAnK696WdhXv77RiubqyCvqf57DtPSGKGpMI3iCNjo0uAQRMbB9dfd%2BAraXzN&X-Amz-Signature=5975903bf2b370cbe9be75a9a3beea2cfe35d9162a7b67fb51ecda3f2e079a8b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG5Z6QNB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbMPH52FPOAKXPPHmdgpxKXLps%2FeKR0yIDVOECGfebcQIhAJEYEdOlwbAjQXIrlUaUzFhvsgNCy1XvgZBQRE%2FxQXHvKv8DCHIQABoMNjM3NDIzMTgzODA1IgzLSQ3h2SxMDKDH4VQq3AMDs6ZDJZWwHxctqsxVr8TGJsycLRRKSKgxt4LIF3acclukEtvD54caygxlt5OByLcgcS33tlTRRUpvy29qy%2F%2Bfl0wrxs%2FZmTWlUl5xiyLqRbFz7LXUabL95XemZb3l8p%2FIHxUpEYHk5b65F8HQDMGsD%2BikWQY26xB97qxBLFUtQjxncK3Ce1P3eCQ2DGHYPuVYEF%2Fhh%2BGpcMcJvh5QDcxsSKUH6LmmC9Dap3JFdESjtS16cR1oCKbTmTHaoGLLo%2Bdh9u2l1Y9x5XWF%2Fcmwpdopa4Hqr1FCUTeHOOAVfCKyV7tVolT02sU%2F3qmcysJHQHUzqZ4pMWFB57dCzOdxvjiy7GrNMZB6l2kRlLEqIuHn%2BT9YWnfz5InuSjMzzWgARmlkmJ82XxDr4XG91ZEDbdUwC2QTAhM%2BLxXzc7hFU0XxVaIG6l29i68Wz4LKtsFZNETz%2FdLNMdYD%2FYtjcll32Ryu8gftm5d%2B7qRcSFoBptJjLiR77hR2mVHGkxKXzh2iqOx0uKSXbAhmeXE6HnlZ8%2Bx4ahvi1RFgOfK9Y%2B5s%2F0K3HcWOYC032bQEp6dboAud5ooMAZAYu4PXumBDE2eAaMe%2F1dfOISnhj%2B%2BFTrSC2piPiEofGiN67XYFBOSTOjDI%2Bo%2FCBjqkAVrL77F76ZhNjFgip%2BSO%2FIf82LAnndXEKM4xhMNo58w0vwabl5EBZQtcfqons3eHXilk5O9ajIeaLxvc9q6qgeay%2BG5xxQ6ozYMdgJoH8cfyRcg7pUlc3To9A0ii%2FVu9%2F6kzzDk5P%2BO%2FuB865FonaXiEGXUqaOkUAnK696WdhXv77RiubqyCvqf57DtPSGKGpMI3iCNjo0uAQRMbB9dfd%2BAraXzN&X-Amz-Signature=0e84aac52dc5d64c4529196bb7a4847fc5c431cbe8562b08e1c55de82f52a956&X-Amz-SignedHeaders=host&x-id=GetObject)
