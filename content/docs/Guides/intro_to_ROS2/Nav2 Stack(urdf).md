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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYDQUYRC%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG7I8E891ZLl%2Bz2J3olpRPuzBz%2B%2BVvHQ%2Fb98%2B50orP3AiBVJHRns80zFwlKwoLrPXA%2FSsTvdfI8MzFT5BABikOrHSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMUY0GTK4roFBLvNDuKtwD6DlnpQ0IViL3hZRXU8tdIJClMC85z46QMrMg2wxTMAvyUsuiWF4UUg4s%2FcImG%2BQ2hWkSFr4s2N9VKE4ULWGVgsnt0I%2FemvT0SxLJfRp9o3o90mkMNKucwZj73wo7xeQoRlQ86p5ApcC9%2BUFRV%2FJvzcZZGewS%2FjJX4xFIy1IF0HTSEz9krRQwtv6DYK2KzPfsO%2FWiePf%2BIb02ySgyIDcXLxzgM8sa1noyiutNANfUKnd2kWUufMs7TEH61NVrzxtB%2F9TFyJLqcwL4MHhEstDHctWYJNh1%2FB6aqlBjtU%2BZDD8hC5XHuptzvJgPoHXFvtSPhxzez7DCAWe%2Bm6hFl31DEvmsH6JWgMKRoM5DLPJPLpi72aFx%2Buj2PQ5EZigfZBM5CRjLZQPm98t54jVFcuKrdtiJ0GvilDMc5QhzAkNxdGSITSwwrXS2SH3%2BLkwiP5%2F%2F5p1ocQqb4CE1GS5H2YpIINKVt%2FcB7xU%2FtH%2FiFyh18HzFuQkcCQzUjLHaf%2BsUlH2bMmFNyTjNROGUReuYd5PsdqB2QpVUqHt7459mbmGjhvr4DDoWMsmPffwV2RqmXozmQ2dAB5fxjQPxlgXStKppY7oCfgrkR5SvZYnfCk24wN8o6S6pTJKeGRF30p8w%2Fqy5vQY6pgHCHc12HSNOZxKPkigCEdDqluYw5nIk6yqCsmlvqLn1V66kBWmyXfdStPOrjtKO8hquwcujzdINj2pQEcd2t0iF5kyI74wTnAN5RWJOtAAFgb70WK%2Fc%2Fm2pMygTSx2qiOgB%2FEzW0yJOQvVxDhjE13By2Y46kuUdNNaQnUGDZT2EMACtQP5z2XKF37XBAp6e9u2AlN%2B8o53bsukwpttKBBKJ2B%2BiLpOL&X-Amz-Signature=0ce9b54f9a306421e2be273b324a76c5e8d2df9a0186e06343d3385497a73188&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYDQUYRC%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG7I8E891ZLl%2Bz2J3olpRPuzBz%2B%2BVvHQ%2Fb98%2B50orP3AiBVJHRns80zFwlKwoLrPXA%2FSsTvdfI8MzFT5BABikOrHSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMUY0GTK4roFBLvNDuKtwD6DlnpQ0IViL3hZRXU8tdIJClMC85z46QMrMg2wxTMAvyUsuiWF4UUg4s%2FcImG%2BQ2hWkSFr4s2N9VKE4ULWGVgsnt0I%2FemvT0SxLJfRp9o3o90mkMNKucwZj73wo7xeQoRlQ86p5ApcC9%2BUFRV%2FJvzcZZGewS%2FjJX4xFIy1IF0HTSEz9krRQwtv6DYK2KzPfsO%2FWiePf%2BIb02ySgyIDcXLxzgM8sa1noyiutNANfUKnd2kWUufMs7TEH61NVrzxtB%2F9TFyJLqcwL4MHhEstDHctWYJNh1%2FB6aqlBjtU%2BZDD8hC5XHuptzvJgPoHXFvtSPhxzez7DCAWe%2Bm6hFl31DEvmsH6JWgMKRoM5DLPJPLpi72aFx%2Buj2PQ5EZigfZBM5CRjLZQPm98t54jVFcuKrdtiJ0GvilDMc5QhzAkNxdGSITSwwrXS2SH3%2BLkwiP5%2F%2F5p1ocQqb4CE1GS5H2YpIINKVt%2FcB7xU%2FtH%2FiFyh18HzFuQkcCQzUjLHaf%2BsUlH2bMmFNyTjNROGUReuYd5PsdqB2QpVUqHt7459mbmGjhvr4DDoWMsmPffwV2RqmXozmQ2dAB5fxjQPxlgXStKppY7oCfgrkR5SvZYnfCk24wN8o6S6pTJKeGRF30p8w%2Fqy5vQY6pgHCHc12HSNOZxKPkigCEdDqluYw5nIk6yqCsmlvqLn1V66kBWmyXfdStPOrjtKO8hquwcujzdINj2pQEcd2t0iF5kyI74wTnAN5RWJOtAAFgb70WK%2Fc%2Fm2pMygTSx2qiOgB%2FEzW0yJOQvVxDhjE13By2Y46kuUdNNaQnUGDZT2EMACtQP5z2XKF37XBAp6e9u2AlN%2B8o53bsukwpttKBBKJ2B%2BiLpOL&X-Amz-Signature=5adebf37750fc1a0348fc4632fdc3961bc6c1fa3242439fa1e9ded28613e90dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYDQUYRC%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG7I8E891ZLl%2Bz2J3olpRPuzBz%2B%2BVvHQ%2Fb98%2B50orP3AiBVJHRns80zFwlKwoLrPXA%2FSsTvdfI8MzFT5BABikOrHSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMUY0GTK4roFBLvNDuKtwD6DlnpQ0IViL3hZRXU8tdIJClMC85z46QMrMg2wxTMAvyUsuiWF4UUg4s%2FcImG%2BQ2hWkSFr4s2N9VKE4ULWGVgsnt0I%2FemvT0SxLJfRp9o3o90mkMNKucwZj73wo7xeQoRlQ86p5ApcC9%2BUFRV%2FJvzcZZGewS%2FjJX4xFIy1IF0HTSEz9krRQwtv6DYK2KzPfsO%2FWiePf%2BIb02ySgyIDcXLxzgM8sa1noyiutNANfUKnd2kWUufMs7TEH61NVrzxtB%2F9TFyJLqcwL4MHhEstDHctWYJNh1%2FB6aqlBjtU%2BZDD8hC5XHuptzvJgPoHXFvtSPhxzez7DCAWe%2Bm6hFl31DEvmsH6JWgMKRoM5DLPJPLpi72aFx%2Buj2PQ5EZigfZBM5CRjLZQPm98t54jVFcuKrdtiJ0GvilDMc5QhzAkNxdGSITSwwrXS2SH3%2BLkwiP5%2F%2F5p1ocQqb4CE1GS5H2YpIINKVt%2FcB7xU%2FtH%2FiFyh18HzFuQkcCQzUjLHaf%2BsUlH2bMmFNyTjNROGUReuYd5PsdqB2QpVUqHt7459mbmGjhvr4DDoWMsmPffwV2RqmXozmQ2dAB5fxjQPxlgXStKppY7oCfgrkR5SvZYnfCk24wN8o6S6pTJKeGRF30p8w%2Fqy5vQY6pgHCHc12HSNOZxKPkigCEdDqluYw5nIk6yqCsmlvqLn1V66kBWmyXfdStPOrjtKO8hquwcujzdINj2pQEcd2t0iF5kyI74wTnAN5RWJOtAAFgb70WK%2Fc%2Fm2pMygTSx2qiOgB%2FEzW0yJOQvVxDhjE13By2Y46kuUdNNaQnUGDZT2EMACtQP5z2XKF37XBAp6e9u2AlN%2B8o53bsukwpttKBBKJ2B%2BiLpOL&X-Amz-Signature=b99cf01385bd63dd941bb9a50f30ac54c71da867dfdb58e49d7853c3b258b723&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYDQUYRC%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG7I8E891ZLl%2Bz2J3olpRPuzBz%2B%2BVvHQ%2Fb98%2B50orP3AiBVJHRns80zFwlKwoLrPXA%2FSsTvdfI8MzFT5BABikOrHSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMUY0GTK4roFBLvNDuKtwD6DlnpQ0IViL3hZRXU8tdIJClMC85z46QMrMg2wxTMAvyUsuiWF4UUg4s%2FcImG%2BQ2hWkSFr4s2N9VKE4ULWGVgsnt0I%2FemvT0SxLJfRp9o3o90mkMNKucwZj73wo7xeQoRlQ86p5ApcC9%2BUFRV%2FJvzcZZGewS%2FjJX4xFIy1IF0HTSEz9krRQwtv6DYK2KzPfsO%2FWiePf%2BIb02ySgyIDcXLxzgM8sa1noyiutNANfUKnd2kWUufMs7TEH61NVrzxtB%2F9TFyJLqcwL4MHhEstDHctWYJNh1%2FB6aqlBjtU%2BZDD8hC5XHuptzvJgPoHXFvtSPhxzez7DCAWe%2Bm6hFl31DEvmsH6JWgMKRoM5DLPJPLpi72aFx%2Buj2PQ5EZigfZBM5CRjLZQPm98t54jVFcuKrdtiJ0GvilDMc5QhzAkNxdGSITSwwrXS2SH3%2BLkwiP5%2F%2F5p1ocQqb4CE1GS5H2YpIINKVt%2FcB7xU%2FtH%2FiFyh18HzFuQkcCQzUjLHaf%2BsUlH2bMmFNyTjNROGUReuYd5PsdqB2QpVUqHt7459mbmGjhvr4DDoWMsmPffwV2RqmXozmQ2dAB5fxjQPxlgXStKppY7oCfgrkR5SvZYnfCk24wN8o6S6pTJKeGRF30p8w%2Fqy5vQY6pgHCHc12HSNOZxKPkigCEdDqluYw5nIk6yqCsmlvqLn1V66kBWmyXfdStPOrjtKO8hquwcujzdINj2pQEcd2t0iF5kyI74wTnAN5RWJOtAAFgb70WK%2Fc%2Fm2pMygTSx2qiOgB%2FEzW0yJOQvVxDhjE13By2Y46kuUdNNaQnUGDZT2EMACtQP5z2XKF37XBAp6e9u2AlN%2B8o53bsukwpttKBBKJ2B%2BiLpOL&X-Amz-Signature=1d8bba6bed804d307f74660d6995c69c31f81aeeb7c66d566ad6bb29be7f809e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYDQUYRC%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG7I8E891ZLl%2Bz2J3olpRPuzBz%2B%2BVvHQ%2Fb98%2B50orP3AiBVJHRns80zFwlKwoLrPXA%2FSsTvdfI8MzFT5BABikOrHSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMUY0GTK4roFBLvNDuKtwD6DlnpQ0IViL3hZRXU8tdIJClMC85z46QMrMg2wxTMAvyUsuiWF4UUg4s%2FcImG%2BQ2hWkSFr4s2N9VKE4ULWGVgsnt0I%2FemvT0SxLJfRp9o3o90mkMNKucwZj73wo7xeQoRlQ86p5ApcC9%2BUFRV%2FJvzcZZGewS%2FjJX4xFIy1IF0HTSEz9krRQwtv6DYK2KzPfsO%2FWiePf%2BIb02ySgyIDcXLxzgM8sa1noyiutNANfUKnd2kWUufMs7TEH61NVrzxtB%2F9TFyJLqcwL4MHhEstDHctWYJNh1%2FB6aqlBjtU%2BZDD8hC5XHuptzvJgPoHXFvtSPhxzez7DCAWe%2Bm6hFl31DEvmsH6JWgMKRoM5DLPJPLpi72aFx%2Buj2PQ5EZigfZBM5CRjLZQPm98t54jVFcuKrdtiJ0GvilDMc5QhzAkNxdGSITSwwrXS2SH3%2BLkwiP5%2F%2F5p1ocQqb4CE1GS5H2YpIINKVt%2FcB7xU%2FtH%2FiFyh18HzFuQkcCQzUjLHaf%2BsUlH2bMmFNyTjNROGUReuYd5PsdqB2QpVUqHt7459mbmGjhvr4DDoWMsmPffwV2RqmXozmQ2dAB5fxjQPxlgXStKppY7oCfgrkR5SvZYnfCk24wN8o6S6pTJKeGRF30p8w%2Fqy5vQY6pgHCHc12HSNOZxKPkigCEdDqluYw5nIk6yqCsmlvqLn1V66kBWmyXfdStPOrjtKO8hquwcujzdINj2pQEcd2t0iF5kyI74wTnAN5RWJOtAAFgb70WK%2Fc%2Fm2pMygTSx2qiOgB%2FEzW0yJOQvVxDhjE13By2Y46kuUdNNaQnUGDZT2EMACtQP5z2XKF37XBAp6e9u2AlN%2B8o53bsukwpttKBBKJ2B%2BiLpOL&X-Amz-Signature=c03ed170df658aa808095716055f28583de5c2cc84439ec55fe4c2d665620c37&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYDQUYRC%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG7I8E891ZLl%2Bz2J3olpRPuzBz%2B%2BVvHQ%2Fb98%2B50orP3AiBVJHRns80zFwlKwoLrPXA%2FSsTvdfI8MzFT5BABikOrHSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMUY0GTK4roFBLvNDuKtwD6DlnpQ0IViL3hZRXU8tdIJClMC85z46QMrMg2wxTMAvyUsuiWF4UUg4s%2FcImG%2BQ2hWkSFr4s2N9VKE4ULWGVgsnt0I%2FemvT0SxLJfRp9o3o90mkMNKucwZj73wo7xeQoRlQ86p5ApcC9%2BUFRV%2FJvzcZZGewS%2FjJX4xFIy1IF0HTSEz9krRQwtv6DYK2KzPfsO%2FWiePf%2BIb02ySgyIDcXLxzgM8sa1noyiutNANfUKnd2kWUufMs7TEH61NVrzxtB%2F9TFyJLqcwL4MHhEstDHctWYJNh1%2FB6aqlBjtU%2BZDD8hC5XHuptzvJgPoHXFvtSPhxzez7DCAWe%2Bm6hFl31DEvmsH6JWgMKRoM5DLPJPLpi72aFx%2Buj2PQ5EZigfZBM5CRjLZQPm98t54jVFcuKrdtiJ0GvilDMc5QhzAkNxdGSITSwwrXS2SH3%2BLkwiP5%2F%2F5p1ocQqb4CE1GS5H2YpIINKVt%2FcB7xU%2FtH%2FiFyh18HzFuQkcCQzUjLHaf%2BsUlH2bMmFNyTjNROGUReuYd5PsdqB2QpVUqHt7459mbmGjhvr4DDoWMsmPffwV2RqmXozmQ2dAB5fxjQPxlgXStKppY7oCfgrkR5SvZYnfCk24wN8o6S6pTJKeGRF30p8w%2Fqy5vQY6pgHCHc12HSNOZxKPkigCEdDqluYw5nIk6yqCsmlvqLn1V66kBWmyXfdStPOrjtKO8hquwcujzdINj2pQEcd2t0iF5kyI74wTnAN5RWJOtAAFgb70WK%2Fc%2Fm2pMygTSx2qiOgB%2FEzW0yJOQvVxDhjE13By2Y46kuUdNNaQnUGDZT2EMACtQP5z2XKF37XBAp6e9u2AlN%2B8o53bsukwpttKBBKJ2B%2BiLpOL&X-Amz-Signature=a71fa9567c8061ef1692970b92f83685093ad10acecfd55705090f2b90d0c4c9&X-Amz-SignedHeaders=host&x-id=GetObject)
