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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QN2QDYG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDbgKwR4LN73y0A%2Fk7jOh2BDhCIPJMbQk7dVBhY0NzYHwIhAMwhpIQdfd1cs5sm13p83%2BgZtkmJLRiwkIp%2F7s3n19bTKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywl7F45jrXYUJoKBEq3AP1Qd5vwCt9HAWRDykqgSnp1hr7gC7eep6k%2F3xf8JEbwIxDvk49H96lh4PbU0xON1RBNjVyiBIC0KqDxMfmtprbUzT2%2B7RqlzOd5RFpS5RZY3wG3N461eVZqykgqYP62D4obIPlE%2FMkKawWVgjbMWoGfeXEyo62RRfcxfgnpIhJeBYck8ZsjJoS51z%2F4iZUNv4%2FzOVUecNiZ4u7xjkMwiIgy%2FWOEjnm6RpexpiSjHpfFts3AwELv78ejK6zOp4csZeHYlcI%2Fa3rzEx1tX13PmlyINzPqI0feaPeC8wvLOecWcKM1Fn%2FG3ZjwUqmCyHTjmgqWYYcVsvFhcMhZorDrsvRCoXyX0B%2BbUzQadW5MX9Ww8VE%2BXKFpyvEgxOCqzAM%2FXq3hInckh3U8TAMioQaNg20QXT562XPIM9givyMjS4LX9HVYAcbj25d2QSvzLB%2Ft8ifutLClrqCg7hOtFbjabcl5DFuh0kLxTfPVRxzzNk3pvLq9wi5lNCuA4jQ%2BjCMWhsCkOmG1PQxGbKs4EyfmfzflBInTs%2BbhbU9trsuSN30yvRb1JMUyfjjM39OtBuGCqw%2FKR2GsmMRGuv4Xw6sXA6XatXPWQumx%2BOrNKtD1rEu4WQnBppjLrTLyzK9zzCKs66%2FBjqkARgs8r5tc%2Fuak4ZwRBqtxPxdSTW0OnkPnNBphuhZlSar8XP50cLCtvUz7hOcyRw762RpWDb63Sad9XWwwcqCGeaakQGK5LtPOMFJ%2FswESeMFeqM21bbsf2IFJdk7f19A65oQbqB7Pi2oqTHSX2ZbW%2F1S14MBvV%2FqWPHKH95%2F8rGssn9MiOhtWhCr2gM1o%2FJpRTn6VDXP1UyxkfaN8DIIV7%2FhGzAm&X-Amz-Signature=8ef0860a225899adc669d4952332e61105c3a33e106bc34e3dcccc9db3c201a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QN2QDYG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDbgKwR4LN73y0A%2Fk7jOh2BDhCIPJMbQk7dVBhY0NzYHwIhAMwhpIQdfd1cs5sm13p83%2BgZtkmJLRiwkIp%2F7s3n19bTKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywl7F45jrXYUJoKBEq3AP1Qd5vwCt9HAWRDykqgSnp1hr7gC7eep6k%2F3xf8JEbwIxDvk49H96lh4PbU0xON1RBNjVyiBIC0KqDxMfmtprbUzT2%2B7RqlzOd5RFpS5RZY3wG3N461eVZqykgqYP62D4obIPlE%2FMkKawWVgjbMWoGfeXEyo62RRfcxfgnpIhJeBYck8ZsjJoS51z%2F4iZUNv4%2FzOVUecNiZ4u7xjkMwiIgy%2FWOEjnm6RpexpiSjHpfFts3AwELv78ejK6zOp4csZeHYlcI%2Fa3rzEx1tX13PmlyINzPqI0feaPeC8wvLOecWcKM1Fn%2FG3ZjwUqmCyHTjmgqWYYcVsvFhcMhZorDrsvRCoXyX0B%2BbUzQadW5MX9Ww8VE%2BXKFpyvEgxOCqzAM%2FXq3hInckh3U8TAMioQaNg20QXT562XPIM9givyMjS4LX9HVYAcbj25d2QSvzLB%2Ft8ifutLClrqCg7hOtFbjabcl5DFuh0kLxTfPVRxzzNk3pvLq9wi5lNCuA4jQ%2BjCMWhsCkOmG1PQxGbKs4EyfmfzflBInTs%2BbhbU9trsuSN30yvRb1JMUyfjjM39OtBuGCqw%2FKR2GsmMRGuv4Xw6sXA6XatXPWQumx%2BOrNKtD1rEu4WQnBppjLrTLyzK9zzCKs66%2FBjqkARgs8r5tc%2Fuak4ZwRBqtxPxdSTW0OnkPnNBphuhZlSar8XP50cLCtvUz7hOcyRw762RpWDb63Sad9XWwwcqCGeaakQGK5LtPOMFJ%2FswESeMFeqM21bbsf2IFJdk7f19A65oQbqB7Pi2oqTHSX2ZbW%2F1S14MBvV%2FqWPHKH95%2F8rGssn9MiOhtWhCr2gM1o%2FJpRTn6VDXP1UyxkfaN8DIIV7%2FhGzAm&X-Amz-Signature=623125014e5bac6e29f91aea334853b607854b802f716b19f1c05d99714b9861&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QN2QDYG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDbgKwR4LN73y0A%2Fk7jOh2BDhCIPJMbQk7dVBhY0NzYHwIhAMwhpIQdfd1cs5sm13p83%2BgZtkmJLRiwkIp%2F7s3n19bTKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywl7F45jrXYUJoKBEq3AP1Qd5vwCt9HAWRDykqgSnp1hr7gC7eep6k%2F3xf8JEbwIxDvk49H96lh4PbU0xON1RBNjVyiBIC0KqDxMfmtprbUzT2%2B7RqlzOd5RFpS5RZY3wG3N461eVZqykgqYP62D4obIPlE%2FMkKawWVgjbMWoGfeXEyo62RRfcxfgnpIhJeBYck8ZsjJoS51z%2F4iZUNv4%2FzOVUecNiZ4u7xjkMwiIgy%2FWOEjnm6RpexpiSjHpfFts3AwELv78ejK6zOp4csZeHYlcI%2Fa3rzEx1tX13PmlyINzPqI0feaPeC8wvLOecWcKM1Fn%2FG3ZjwUqmCyHTjmgqWYYcVsvFhcMhZorDrsvRCoXyX0B%2BbUzQadW5MX9Ww8VE%2BXKFpyvEgxOCqzAM%2FXq3hInckh3U8TAMioQaNg20QXT562XPIM9givyMjS4LX9HVYAcbj25d2QSvzLB%2Ft8ifutLClrqCg7hOtFbjabcl5DFuh0kLxTfPVRxzzNk3pvLq9wi5lNCuA4jQ%2BjCMWhsCkOmG1PQxGbKs4EyfmfzflBInTs%2BbhbU9trsuSN30yvRb1JMUyfjjM39OtBuGCqw%2FKR2GsmMRGuv4Xw6sXA6XatXPWQumx%2BOrNKtD1rEu4WQnBppjLrTLyzK9zzCKs66%2FBjqkARgs8r5tc%2Fuak4ZwRBqtxPxdSTW0OnkPnNBphuhZlSar8XP50cLCtvUz7hOcyRw762RpWDb63Sad9XWwwcqCGeaakQGK5LtPOMFJ%2FswESeMFeqM21bbsf2IFJdk7f19A65oQbqB7Pi2oqTHSX2ZbW%2F1S14MBvV%2FqWPHKH95%2F8rGssn9MiOhtWhCr2gM1o%2FJpRTn6VDXP1UyxkfaN8DIIV7%2FhGzAm&X-Amz-Signature=cebb75b72910e901ecacd5dfa6332e87f7bd40e57831751529735fd054675664&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QN2QDYG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDbgKwR4LN73y0A%2Fk7jOh2BDhCIPJMbQk7dVBhY0NzYHwIhAMwhpIQdfd1cs5sm13p83%2BgZtkmJLRiwkIp%2F7s3n19bTKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywl7F45jrXYUJoKBEq3AP1Qd5vwCt9HAWRDykqgSnp1hr7gC7eep6k%2F3xf8JEbwIxDvk49H96lh4PbU0xON1RBNjVyiBIC0KqDxMfmtprbUzT2%2B7RqlzOd5RFpS5RZY3wG3N461eVZqykgqYP62D4obIPlE%2FMkKawWVgjbMWoGfeXEyo62RRfcxfgnpIhJeBYck8ZsjJoS51z%2F4iZUNv4%2FzOVUecNiZ4u7xjkMwiIgy%2FWOEjnm6RpexpiSjHpfFts3AwELv78ejK6zOp4csZeHYlcI%2Fa3rzEx1tX13PmlyINzPqI0feaPeC8wvLOecWcKM1Fn%2FG3ZjwUqmCyHTjmgqWYYcVsvFhcMhZorDrsvRCoXyX0B%2BbUzQadW5MX9Ww8VE%2BXKFpyvEgxOCqzAM%2FXq3hInckh3U8TAMioQaNg20QXT562XPIM9givyMjS4LX9HVYAcbj25d2QSvzLB%2Ft8ifutLClrqCg7hOtFbjabcl5DFuh0kLxTfPVRxzzNk3pvLq9wi5lNCuA4jQ%2BjCMWhsCkOmG1PQxGbKs4EyfmfzflBInTs%2BbhbU9trsuSN30yvRb1JMUyfjjM39OtBuGCqw%2FKR2GsmMRGuv4Xw6sXA6XatXPWQumx%2BOrNKtD1rEu4WQnBppjLrTLyzK9zzCKs66%2FBjqkARgs8r5tc%2Fuak4ZwRBqtxPxdSTW0OnkPnNBphuhZlSar8XP50cLCtvUz7hOcyRw762RpWDb63Sad9XWwwcqCGeaakQGK5LtPOMFJ%2FswESeMFeqM21bbsf2IFJdk7f19A65oQbqB7Pi2oqTHSX2ZbW%2F1S14MBvV%2FqWPHKH95%2F8rGssn9MiOhtWhCr2gM1o%2FJpRTn6VDXP1UyxkfaN8DIIV7%2FhGzAm&X-Amz-Signature=c2a81b017a0cc1cc0760ee84407a2ead76577dcc86fa940edf099740c0618df9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QN2QDYG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDbgKwR4LN73y0A%2Fk7jOh2BDhCIPJMbQk7dVBhY0NzYHwIhAMwhpIQdfd1cs5sm13p83%2BgZtkmJLRiwkIp%2F7s3n19bTKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywl7F45jrXYUJoKBEq3AP1Qd5vwCt9HAWRDykqgSnp1hr7gC7eep6k%2F3xf8JEbwIxDvk49H96lh4PbU0xON1RBNjVyiBIC0KqDxMfmtprbUzT2%2B7RqlzOd5RFpS5RZY3wG3N461eVZqykgqYP62D4obIPlE%2FMkKawWVgjbMWoGfeXEyo62RRfcxfgnpIhJeBYck8ZsjJoS51z%2F4iZUNv4%2FzOVUecNiZ4u7xjkMwiIgy%2FWOEjnm6RpexpiSjHpfFts3AwELv78ejK6zOp4csZeHYlcI%2Fa3rzEx1tX13PmlyINzPqI0feaPeC8wvLOecWcKM1Fn%2FG3ZjwUqmCyHTjmgqWYYcVsvFhcMhZorDrsvRCoXyX0B%2BbUzQadW5MX9Ww8VE%2BXKFpyvEgxOCqzAM%2FXq3hInckh3U8TAMioQaNg20QXT562XPIM9givyMjS4LX9HVYAcbj25d2QSvzLB%2Ft8ifutLClrqCg7hOtFbjabcl5DFuh0kLxTfPVRxzzNk3pvLq9wi5lNCuA4jQ%2BjCMWhsCkOmG1PQxGbKs4EyfmfzflBInTs%2BbhbU9trsuSN30yvRb1JMUyfjjM39OtBuGCqw%2FKR2GsmMRGuv4Xw6sXA6XatXPWQumx%2BOrNKtD1rEu4WQnBppjLrTLyzK9zzCKs66%2FBjqkARgs8r5tc%2Fuak4ZwRBqtxPxdSTW0OnkPnNBphuhZlSar8XP50cLCtvUz7hOcyRw762RpWDb63Sad9XWwwcqCGeaakQGK5LtPOMFJ%2FswESeMFeqM21bbsf2IFJdk7f19A65oQbqB7Pi2oqTHSX2ZbW%2F1S14MBvV%2FqWPHKH95%2F8rGssn9MiOhtWhCr2gM1o%2FJpRTn6VDXP1UyxkfaN8DIIV7%2FhGzAm&X-Amz-Signature=07917046dc739715ce07d0b66efa0dd7fe9a35e9705b20e3512df6b392c93d9e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QN2QDYG%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDbgKwR4LN73y0A%2Fk7jOh2BDhCIPJMbQk7dVBhY0NzYHwIhAMwhpIQdfd1cs5sm13p83%2BgZtkmJLRiwkIp%2F7s3n19bTKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywl7F45jrXYUJoKBEq3AP1Qd5vwCt9HAWRDykqgSnp1hr7gC7eep6k%2F3xf8JEbwIxDvk49H96lh4PbU0xON1RBNjVyiBIC0KqDxMfmtprbUzT2%2B7RqlzOd5RFpS5RZY3wG3N461eVZqykgqYP62D4obIPlE%2FMkKawWVgjbMWoGfeXEyo62RRfcxfgnpIhJeBYck8ZsjJoS51z%2F4iZUNv4%2FzOVUecNiZ4u7xjkMwiIgy%2FWOEjnm6RpexpiSjHpfFts3AwELv78ejK6zOp4csZeHYlcI%2Fa3rzEx1tX13PmlyINzPqI0feaPeC8wvLOecWcKM1Fn%2FG3ZjwUqmCyHTjmgqWYYcVsvFhcMhZorDrsvRCoXyX0B%2BbUzQadW5MX9Ww8VE%2BXKFpyvEgxOCqzAM%2FXq3hInckh3U8TAMioQaNg20QXT562XPIM9givyMjS4LX9HVYAcbj25d2QSvzLB%2Ft8ifutLClrqCg7hOtFbjabcl5DFuh0kLxTfPVRxzzNk3pvLq9wi5lNCuA4jQ%2BjCMWhsCkOmG1PQxGbKs4EyfmfzflBInTs%2BbhbU9trsuSN30yvRb1JMUyfjjM39OtBuGCqw%2FKR2GsmMRGuv4Xw6sXA6XatXPWQumx%2BOrNKtD1rEu4WQnBppjLrTLyzK9zzCKs66%2FBjqkARgs8r5tc%2Fuak4ZwRBqtxPxdSTW0OnkPnNBphuhZlSar8XP50cLCtvUz7hOcyRw762RpWDb63Sad9XWwwcqCGeaakQGK5LtPOMFJ%2FswESeMFeqM21bbsf2IFJdk7f19A65oQbqB7Pi2oqTHSX2ZbW%2F1S14MBvV%2FqWPHKH95%2F8rGssn9MiOhtWhCr2gM1o%2FJpRTn6VDXP1UyxkfaN8DIIV7%2FhGzAm&X-Amz-Signature=b5cfcf558f5a5ac23894f06d73b72b09ac197087f306b288e2bd342df21e9ab7&X-Amz-SignedHeaders=host&x-id=GetObject)
