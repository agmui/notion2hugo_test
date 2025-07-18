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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2RRA47U%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEVww2FlnVMUZWH3KG8fWM6WOwmZz6aLy%2FM4FK2D5yquAiA%2FVltsjslJ%2BF%2B3VqqgjHwdMFgW%2BJrF94lp4gEYb7DM6CqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyoigf0DRDz5WuwTAKtwDOE12VwoBYeE2%2B3o6c5CxoAPZwTrNqvDeYOrHuJOpkMTsFZXmzipF79M7oj1lIKDmEJAuHSlSwhulpl%2BRRgiDpnJB1Fyj3NSRpTCUCxwfT5VuisrA78n2wJMSmIIiM2TH32zdR1UrHL3Ju%2BfkeqfKkreMROFUJ4nGQq3B6hphf4bSslBRGaYMspJgvchQ0PJEF%2BJYNawBNuHNxoVjOeNNNcrA%2F6mF07ETSJaPFxi9TwizuiCbBPFHVwg5PznbK9P5y5DLSHCFPxrvhYiwfxPQ9%2BwbWn35Z9EV2Y%2Bgtg1%2BOmJ6Agu15jmp%2BM5E0EIzBVpNsQ8IP2Gmn8DyLihn6E66ilbECMqkOzwyUld%2FCfuiWt9QHouQaAJ1qUKYQ7GdjqORWDhK5seUFTxhHxSR45Wi7NmdXdZukl%2FopO2eT8ECbCVOmjBg2iR7M8k5yk3Xxwu5%2BILCMSaoLXMng9sWerN5vmP12RnCpTK811ZKIELl1UQDbfUfnTuUf8sf8A0ccWoHR2jRT%2FZcYJuXeB7jZgRsqr%2BuRJMUjM6QbCK8eboGOyCxA02YP2d5Klp%2BQtvU2F3zVjvZcyb8aZDiPMh9KPgIlsmeork5NQtW6upoNWGAovaejthjFgXymwo3yyow4PrlwwY6pgHWUaA4CEysBcS%2B8aLHVYDeIgZx3EZFkbii1OrqcbIyD860mnxxtlXgysGiOnMIP%2BBVUhiKrrHJh7pPXBvEiBV9arGT1T%2Bg9v6o9qgjimxUW%2FxafklflQQgMEHH7IwGK2wuASQIWxFWfJL9k2qBBXzeeh0pOGxtqYhJlnzInXRDLg7uVxG6%2FzR4nTdQqFN17Ilm0oBUXywe0zsDoVt%2B54pIRDtpnP1I&X-Amz-Signature=a54a076bdbce6b81e4278a48526c7594e9dd6229a76fe4ce4210016b7dc39413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2RRA47U%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEVww2FlnVMUZWH3KG8fWM6WOwmZz6aLy%2FM4FK2D5yquAiA%2FVltsjslJ%2BF%2B3VqqgjHwdMFgW%2BJrF94lp4gEYb7DM6CqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyoigf0DRDz5WuwTAKtwDOE12VwoBYeE2%2B3o6c5CxoAPZwTrNqvDeYOrHuJOpkMTsFZXmzipF79M7oj1lIKDmEJAuHSlSwhulpl%2BRRgiDpnJB1Fyj3NSRpTCUCxwfT5VuisrA78n2wJMSmIIiM2TH32zdR1UrHL3Ju%2BfkeqfKkreMROFUJ4nGQq3B6hphf4bSslBRGaYMspJgvchQ0PJEF%2BJYNawBNuHNxoVjOeNNNcrA%2F6mF07ETSJaPFxi9TwizuiCbBPFHVwg5PznbK9P5y5DLSHCFPxrvhYiwfxPQ9%2BwbWn35Z9EV2Y%2Bgtg1%2BOmJ6Agu15jmp%2BM5E0EIzBVpNsQ8IP2Gmn8DyLihn6E66ilbECMqkOzwyUld%2FCfuiWt9QHouQaAJ1qUKYQ7GdjqORWDhK5seUFTxhHxSR45Wi7NmdXdZukl%2FopO2eT8ECbCVOmjBg2iR7M8k5yk3Xxwu5%2BILCMSaoLXMng9sWerN5vmP12RnCpTK811ZKIELl1UQDbfUfnTuUf8sf8A0ccWoHR2jRT%2FZcYJuXeB7jZgRsqr%2BuRJMUjM6QbCK8eboGOyCxA02YP2d5Klp%2BQtvU2F3zVjvZcyb8aZDiPMh9KPgIlsmeork5NQtW6upoNWGAovaejthjFgXymwo3yyow4PrlwwY6pgHWUaA4CEysBcS%2B8aLHVYDeIgZx3EZFkbii1OrqcbIyD860mnxxtlXgysGiOnMIP%2BBVUhiKrrHJh7pPXBvEiBV9arGT1T%2Bg9v6o9qgjimxUW%2FxafklflQQgMEHH7IwGK2wuASQIWxFWfJL9k2qBBXzeeh0pOGxtqYhJlnzInXRDLg7uVxG6%2FzR4nTdQqFN17Ilm0oBUXywe0zsDoVt%2B54pIRDtpnP1I&X-Amz-Signature=a2d8416eb86f91d4f6c6f5287e3a2caa967d0d6d85f18f23b17883d177711789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2RRA47U%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEVww2FlnVMUZWH3KG8fWM6WOwmZz6aLy%2FM4FK2D5yquAiA%2FVltsjslJ%2BF%2B3VqqgjHwdMFgW%2BJrF94lp4gEYb7DM6CqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyoigf0DRDz5WuwTAKtwDOE12VwoBYeE2%2B3o6c5CxoAPZwTrNqvDeYOrHuJOpkMTsFZXmzipF79M7oj1lIKDmEJAuHSlSwhulpl%2BRRgiDpnJB1Fyj3NSRpTCUCxwfT5VuisrA78n2wJMSmIIiM2TH32zdR1UrHL3Ju%2BfkeqfKkreMROFUJ4nGQq3B6hphf4bSslBRGaYMspJgvchQ0PJEF%2BJYNawBNuHNxoVjOeNNNcrA%2F6mF07ETSJaPFxi9TwizuiCbBPFHVwg5PznbK9P5y5DLSHCFPxrvhYiwfxPQ9%2BwbWn35Z9EV2Y%2Bgtg1%2BOmJ6Agu15jmp%2BM5E0EIzBVpNsQ8IP2Gmn8DyLihn6E66ilbECMqkOzwyUld%2FCfuiWt9QHouQaAJ1qUKYQ7GdjqORWDhK5seUFTxhHxSR45Wi7NmdXdZukl%2FopO2eT8ECbCVOmjBg2iR7M8k5yk3Xxwu5%2BILCMSaoLXMng9sWerN5vmP12RnCpTK811ZKIELl1UQDbfUfnTuUf8sf8A0ccWoHR2jRT%2FZcYJuXeB7jZgRsqr%2BuRJMUjM6QbCK8eboGOyCxA02YP2d5Klp%2BQtvU2F3zVjvZcyb8aZDiPMh9KPgIlsmeork5NQtW6upoNWGAovaejthjFgXymwo3yyow4PrlwwY6pgHWUaA4CEysBcS%2B8aLHVYDeIgZx3EZFkbii1OrqcbIyD860mnxxtlXgysGiOnMIP%2BBVUhiKrrHJh7pPXBvEiBV9arGT1T%2Bg9v6o9qgjimxUW%2FxafklflQQgMEHH7IwGK2wuASQIWxFWfJL9k2qBBXzeeh0pOGxtqYhJlnzInXRDLg7uVxG6%2FzR4nTdQqFN17Ilm0oBUXywe0zsDoVt%2B54pIRDtpnP1I&X-Amz-Signature=ea7eba0fcc7af12536e93d9416472e685194d7a8cb634438b7957538f969d0c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2RRA47U%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEVww2FlnVMUZWH3KG8fWM6WOwmZz6aLy%2FM4FK2D5yquAiA%2FVltsjslJ%2BF%2B3VqqgjHwdMFgW%2BJrF94lp4gEYb7DM6CqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyoigf0DRDz5WuwTAKtwDOE12VwoBYeE2%2B3o6c5CxoAPZwTrNqvDeYOrHuJOpkMTsFZXmzipF79M7oj1lIKDmEJAuHSlSwhulpl%2BRRgiDpnJB1Fyj3NSRpTCUCxwfT5VuisrA78n2wJMSmIIiM2TH32zdR1UrHL3Ju%2BfkeqfKkreMROFUJ4nGQq3B6hphf4bSslBRGaYMspJgvchQ0PJEF%2BJYNawBNuHNxoVjOeNNNcrA%2F6mF07ETSJaPFxi9TwizuiCbBPFHVwg5PznbK9P5y5DLSHCFPxrvhYiwfxPQ9%2BwbWn35Z9EV2Y%2Bgtg1%2BOmJ6Agu15jmp%2BM5E0EIzBVpNsQ8IP2Gmn8DyLihn6E66ilbECMqkOzwyUld%2FCfuiWt9QHouQaAJ1qUKYQ7GdjqORWDhK5seUFTxhHxSR45Wi7NmdXdZukl%2FopO2eT8ECbCVOmjBg2iR7M8k5yk3Xxwu5%2BILCMSaoLXMng9sWerN5vmP12RnCpTK811ZKIELl1UQDbfUfnTuUf8sf8A0ccWoHR2jRT%2FZcYJuXeB7jZgRsqr%2BuRJMUjM6QbCK8eboGOyCxA02YP2d5Klp%2BQtvU2F3zVjvZcyb8aZDiPMh9KPgIlsmeork5NQtW6upoNWGAovaejthjFgXymwo3yyow4PrlwwY6pgHWUaA4CEysBcS%2B8aLHVYDeIgZx3EZFkbii1OrqcbIyD860mnxxtlXgysGiOnMIP%2BBVUhiKrrHJh7pPXBvEiBV9arGT1T%2Bg9v6o9qgjimxUW%2FxafklflQQgMEHH7IwGK2wuASQIWxFWfJL9k2qBBXzeeh0pOGxtqYhJlnzInXRDLg7uVxG6%2FzR4nTdQqFN17Ilm0oBUXywe0zsDoVt%2B54pIRDtpnP1I&X-Amz-Signature=c59156c6853920b88607289aa48a9ef4b21a7e2458df70609fa7511eecd9be91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2RRA47U%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEVww2FlnVMUZWH3KG8fWM6WOwmZz6aLy%2FM4FK2D5yquAiA%2FVltsjslJ%2BF%2B3VqqgjHwdMFgW%2BJrF94lp4gEYb7DM6CqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyoigf0DRDz5WuwTAKtwDOE12VwoBYeE2%2B3o6c5CxoAPZwTrNqvDeYOrHuJOpkMTsFZXmzipF79M7oj1lIKDmEJAuHSlSwhulpl%2BRRgiDpnJB1Fyj3NSRpTCUCxwfT5VuisrA78n2wJMSmIIiM2TH32zdR1UrHL3Ju%2BfkeqfKkreMROFUJ4nGQq3B6hphf4bSslBRGaYMspJgvchQ0PJEF%2BJYNawBNuHNxoVjOeNNNcrA%2F6mF07ETSJaPFxi9TwizuiCbBPFHVwg5PznbK9P5y5DLSHCFPxrvhYiwfxPQ9%2BwbWn35Z9EV2Y%2Bgtg1%2BOmJ6Agu15jmp%2BM5E0EIzBVpNsQ8IP2Gmn8DyLihn6E66ilbECMqkOzwyUld%2FCfuiWt9QHouQaAJ1qUKYQ7GdjqORWDhK5seUFTxhHxSR45Wi7NmdXdZukl%2FopO2eT8ECbCVOmjBg2iR7M8k5yk3Xxwu5%2BILCMSaoLXMng9sWerN5vmP12RnCpTK811ZKIELl1UQDbfUfnTuUf8sf8A0ccWoHR2jRT%2FZcYJuXeB7jZgRsqr%2BuRJMUjM6QbCK8eboGOyCxA02YP2d5Klp%2BQtvU2F3zVjvZcyb8aZDiPMh9KPgIlsmeork5NQtW6upoNWGAovaejthjFgXymwo3yyow4PrlwwY6pgHWUaA4CEysBcS%2B8aLHVYDeIgZx3EZFkbii1OrqcbIyD860mnxxtlXgysGiOnMIP%2BBVUhiKrrHJh7pPXBvEiBV9arGT1T%2Bg9v6o9qgjimxUW%2FxafklflQQgMEHH7IwGK2wuASQIWxFWfJL9k2qBBXzeeh0pOGxtqYhJlnzInXRDLg7uVxG6%2FzR4nTdQqFN17Ilm0oBUXywe0zsDoVt%2B54pIRDtpnP1I&X-Amz-Signature=4b6e2bbb35d39ad0979d0b9ede2ac76cfb90cf38dedb9d47d509d8cc90a4bb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2RRA47U%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEVww2FlnVMUZWH3KG8fWM6WOwmZz6aLy%2FM4FK2D5yquAiA%2FVltsjslJ%2BF%2B3VqqgjHwdMFgW%2BJrF94lp4gEYb7DM6CqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyoigf0DRDz5WuwTAKtwDOE12VwoBYeE2%2B3o6c5CxoAPZwTrNqvDeYOrHuJOpkMTsFZXmzipF79M7oj1lIKDmEJAuHSlSwhulpl%2BRRgiDpnJB1Fyj3NSRpTCUCxwfT5VuisrA78n2wJMSmIIiM2TH32zdR1UrHL3Ju%2BfkeqfKkreMROFUJ4nGQq3B6hphf4bSslBRGaYMspJgvchQ0PJEF%2BJYNawBNuHNxoVjOeNNNcrA%2F6mF07ETSJaPFxi9TwizuiCbBPFHVwg5PznbK9P5y5DLSHCFPxrvhYiwfxPQ9%2BwbWn35Z9EV2Y%2Bgtg1%2BOmJ6Agu15jmp%2BM5E0EIzBVpNsQ8IP2Gmn8DyLihn6E66ilbECMqkOzwyUld%2FCfuiWt9QHouQaAJ1qUKYQ7GdjqORWDhK5seUFTxhHxSR45Wi7NmdXdZukl%2FopO2eT8ECbCVOmjBg2iR7M8k5yk3Xxwu5%2BILCMSaoLXMng9sWerN5vmP12RnCpTK811ZKIELl1UQDbfUfnTuUf8sf8A0ccWoHR2jRT%2FZcYJuXeB7jZgRsqr%2BuRJMUjM6QbCK8eboGOyCxA02YP2d5Klp%2BQtvU2F3zVjvZcyb8aZDiPMh9KPgIlsmeork5NQtW6upoNWGAovaejthjFgXymwo3yyow4PrlwwY6pgHWUaA4CEysBcS%2B8aLHVYDeIgZx3EZFkbii1OrqcbIyD860mnxxtlXgysGiOnMIP%2BBVUhiKrrHJh7pPXBvEiBV9arGT1T%2Bg9v6o9qgjimxUW%2FxafklflQQgMEHH7IwGK2wuASQIWxFWfJL9k2qBBXzeeh0pOGxtqYhJlnzInXRDLg7uVxG6%2FzR4nTdQqFN17Ilm0oBUXywe0zsDoVt%2B54pIRDtpnP1I&X-Amz-Signature=f10c5aec599a291f9d7dfddd2b44cc607248ac980570d64a48572faabab6c7e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
