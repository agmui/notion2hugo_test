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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXG4QLZR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDufdWdRSAImfOD5ix0Gg1u4ZI1ZcD71lZoKrNAzeuzmwIhAIkKfuqqvDdXHBf%2F0YPHPvNX52TbvmAaVH1z%2FIXWS9GxKv8DCGwQABoMNjM3NDIzMTgzODA1IgzCygSXATBsByH%2FfB4q3AO6T%2F8F%2FUIQSHUruJmJQPcJNeGfV2%2FEkXTmQyQEeVDkh8h267mdqYkIQJcFuX%2Bh0KUsTFZ7u63eTY6%2BUfBythXUk6okWuo2nwM90pzKny8mF8onB%2BLBsvGEHl2oejlj6%2F3%2F2846nc9qe%2F%2BT6vK8fZfWpFNAuOisJKXo7j2UJ5jghSnPTOPZ18WC724zl9wmYPZUnKG%2FwAYXqK8dYUTENj0r0HiC%2FkoHE7nDNV1PbVLvZusMt7u7hkutRZVC0fEikckQX9i4Q2e%2BaanoHWeYGWPsBMJywKq9ZB%2FTDVMNpSMyfa7fHJA0XvGpBhIHX%2FHOUGmNz3cd1%2B44rsBaOruk%2BxbcHHC5%2F2EiPFvWLn3S0wAdrknQOSsfIRHviL29K9us4kWu3gTHdJZvJQ7GRJ00DytVJ3E8XJLxnDC0TBWb1Ug%2Ba0pad0VfzK3ps5wATEfUsG2gdsUBwhHaKhkvgUcxDCXbUJwkX8ZPy53SeVG%2BnnsSfhNFEajEkUIOaWx474YfrENIIpE%2BxpCUrUTK3CYC2P6PoBBKbYjvyLyo8pY023egSFg%2FR9qtbnRSTlTWn1dd4qRdEVb2wpcTmD2DAi4OXc%2BTvigSXYVRDTqxBQW0o95A1SfKQmnqJhig6%2Fcq7DDXirS%2BBjqkAZ8LdjJHBkIcrfGarPr1I3toCVJAXCA7kSi%2B2qW0QMXmxkpol0zXKhn7mCw1PqKNP1dfbau0xNVl%2Bwzu%2Fr%2FYosGmGJf8%2F8E5isVTCi7ivwsqcQULdBMrCCRmoySmL9ss4AfulpxLf40t7V6mywstRbPS3Ym3k8LK1xzSvHZkZzrrRc8viVfIXt%2BUu2kcNFopIM6o3pL1vylWJsF4sy4C9rHXeoNd&X-Amz-Signature=f7503e7f70b1581f01729d9cae224903c5d582c0a79317fcc9dd4ffaac154ad2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXG4QLZR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDufdWdRSAImfOD5ix0Gg1u4ZI1ZcD71lZoKrNAzeuzmwIhAIkKfuqqvDdXHBf%2F0YPHPvNX52TbvmAaVH1z%2FIXWS9GxKv8DCGwQABoMNjM3NDIzMTgzODA1IgzCygSXATBsByH%2FfB4q3AO6T%2F8F%2FUIQSHUruJmJQPcJNeGfV2%2FEkXTmQyQEeVDkh8h267mdqYkIQJcFuX%2Bh0KUsTFZ7u63eTY6%2BUfBythXUk6okWuo2nwM90pzKny8mF8onB%2BLBsvGEHl2oejlj6%2F3%2F2846nc9qe%2F%2BT6vK8fZfWpFNAuOisJKXo7j2UJ5jghSnPTOPZ18WC724zl9wmYPZUnKG%2FwAYXqK8dYUTENj0r0HiC%2FkoHE7nDNV1PbVLvZusMt7u7hkutRZVC0fEikckQX9i4Q2e%2BaanoHWeYGWPsBMJywKq9ZB%2FTDVMNpSMyfa7fHJA0XvGpBhIHX%2FHOUGmNz3cd1%2B44rsBaOruk%2BxbcHHC5%2F2EiPFvWLn3S0wAdrknQOSsfIRHviL29K9us4kWu3gTHdJZvJQ7GRJ00DytVJ3E8XJLxnDC0TBWb1Ug%2Ba0pad0VfzK3ps5wATEfUsG2gdsUBwhHaKhkvgUcxDCXbUJwkX8ZPy53SeVG%2BnnsSfhNFEajEkUIOaWx474YfrENIIpE%2BxpCUrUTK3CYC2P6PoBBKbYjvyLyo8pY023egSFg%2FR9qtbnRSTlTWn1dd4qRdEVb2wpcTmD2DAi4OXc%2BTvigSXYVRDTqxBQW0o95A1SfKQmnqJhig6%2Fcq7DDXirS%2BBjqkAZ8LdjJHBkIcrfGarPr1I3toCVJAXCA7kSi%2B2qW0QMXmxkpol0zXKhn7mCw1PqKNP1dfbau0xNVl%2Bwzu%2Fr%2FYosGmGJf8%2F8E5isVTCi7ivwsqcQULdBMrCCRmoySmL9ss4AfulpxLf40t7V6mywstRbPS3Ym3k8LK1xzSvHZkZzrrRc8viVfIXt%2BUu2kcNFopIM6o3pL1vylWJsF4sy4C9rHXeoNd&X-Amz-Signature=7b8b51349e822c521069e00beee6e4a89a184cbc690d49370139f45921edbc8e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXG4QLZR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDufdWdRSAImfOD5ix0Gg1u4ZI1ZcD71lZoKrNAzeuzmwIhAIkKfuqqvDdXHBf%2F0YPHPvNX52TbvmAaVH1z%2FIXWS9GxKv8DCGwQABoMNjM3NDIzMTgzODA1IgzCygSXATBsByH%2FfB4q3AO6T%2F8F%2FUIQSHUruJmJQPcJNeGfV2%2FEkXTmQyQEeVDkh8h267mdqYkIQJcFuX%2Bh0KUsTFZ7u63eTY6%2BUfBythXUk6okWuo2nwM90pzKny8mF8onB%2BLBsvGEHl2oejlj6%2F3%2F2846nc9qe%2F%2BT6vK8fZfWpFNAuOisJKXo7j2UJ5jghSnPTOPZ18WC724zl9wmYPZUnKG%2FwAYXqK8dYUTENj0r0HiC%2FkoHE7nDNV1PbVLvZusMt7u7hkutRZVC0fEikckQX9i4Q2e%2BaanoHWeYGWPsBMJywKq9ZB%2FTDVMNpSMyfa7fHJA0XvGpBhIHX%2FHOUGmNz3cd1%2B44rsBaOruk%2BxbcHHC5%2F2EiPFvWLn3S0wAdrknQOSsfIRHviL29K9us4kWu3gTHdJZvJQ7GRJ00DytVJ3E8XJLxnDC0TBWb1Ug%2Ba0pad0VfzK3ps5wATEfUsG2gdsUBwhHaKhkvgUcxDCXbUJwkX8ZPy53SeVG%2BnnsSfhNFEajEkUIOaWx474YfrENIIpE%2BxpCUrUTK3CYC2P6PoBBKbYjvyLyo8pY023egSFg%2FR9qtbnRSTlTWn1dd4qRdEVb2wpcTmD2DAi4OXc%2BTvigSXYVRDTqxBQW0o95A1SfKQmnqJhig6%2Fcq7DDXirS%2BBjqkAZ8LdjJHBkIcrfGarPr1I3toCVJAXCA7kSi%2B2qW0QMXmxkpol0zXKhn7mCw1PqKNP1dfbau0xNVl%2Bwzu%2Fr%2FYosGmGJf8%2F8E5isVTCi7ivwsqcQULdBMrCCRmoySmL9ss4AfulpxLf40t7V6mywstRbPS3Ym3k8LK1xzSvHZkZzrrRc8viVfIXt%2BUu2kcNFopIM6o3pL1vylWJsF4sy4C9rHXeoNd&X-Amz-Signature=476867c4e29950fb2dfde92bd4fa49fa51c5c0272e6ba95140b7f9c291afb848&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXG4QLZR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDufdWdRSAImfOD5ix0Gg1u4ZI1ZcD71lZoKrNAzeuzmwIhAIkKfuqqvDdXHBf%2F0YPHPvNX52TbvmAaVH1z%2FIXWS9GxKv8DCGwQABoMNjM3NDIzMTgzODA1IgzCygSXATBsByH%2FfB4q3AO6T%2F8F%2FUIQSHUruJmJQPcJNeGfV2%2FEkXTmQyQEeVDkh8h267mdqYkIQJcFuX%2Bh0KUsTFZ7u63eTY6%2BUfBythXUk6okWuo2nwM90pzKny8mF8onB%2BLBsvGEHl2oejlj6%2F3%2F2846nc9qe%2F%2BT6vK8fZfWpFNAuOisJKXo7j2UJ5jghSnPTOPZ18WC724zl9wmYPZUnKG%2FwAYXqK8dYUTENj0r0HiC%2FkoHE7nDNV1PbVLvZusMt7u7hkutRZVC0fEikckQX9i4Q2e%2BaanoHWeYGWPsBMJywKq9ZB%2FTDVMNpSMyfa7fHJA0XvGpBhIHX%2FHOUGmNz3cd1%2B44rsBaOruk%2BxbcHHC5%2F2EiPFvWLn3S0wAdrknQOSsfIRHviL29K9us4kWu3gTHdJZvJQ7GRJ00DytVJ3E8XJLxnDC0TBWb1Ug%2Ba0pad0VfzK3ps5wATEfUsG2gdsUBwhHaKhkvgUcxDCXbUJwkX8ZPy53SeVG%2BnnsSfhNFEajEkUIOaWx474YfrENIIpE%2BxpCUrUTK3CYC2P6PoBBKbYjvyLyo8pY023egSFg%2FR9qtbnRSTlTWn1dd4qRdEVb2wpcTmD2DAi4OXc%2BTvigSXYVRDTqxBQW0o95A1SfKQmnqJhig6%2Fcq7DDXirS%2BBjqkAZ8LdjJHBkIcrfGarPr1I3toCVJAXCA7kSi%2B2qW0QMXmxkpol0zXKhn7mCw1PqKNP1dfbau0xNVl%2Bwzu%2Fr%2FYosGmGJf8%2F8E5isVTCi7ivwsqcQULdBMrCCRmoySmL9ss4AfulpxLf40t7V6mywstRbPS3Ym3k8LK1xzSvHZkZzrrRc8viVfIXt%2BUu2kcNFopIM6o3pL1vylWJsF4sy4C9rHXeoNd&X-Amz-Signature=a9cada9045430286db4f8702165c31b85a1f0fcc8736511bc666b480acc811a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXG4QLZR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDufdWdRSAImfOD5ix0Gg1u4ZI1ZcD71lZoKrNAzeuzmwIhAIkKfuqqvDdXHBf%2F0YPHPvNX52TbvmAaVH1z%2FIXWS9GxKv8DCGwQABoMNjM3NDIzMTgzODA1IgzCygSXATBsByH%2FfB4q3AO6T%2F8F%2FUIQSHUruJmJQPcJNeGfV2%2FEkXTmQyQEeVDkh8h267mdqYkIQJcFuX%2Bh0KUsTFZ7u63eTY6%2BUfBythXUk6okWuo2nwM90pzKny8mF8onB%2BLBsvGEHl2oejlj6%2F3%2F2846nc9qe%2F%2BT6vK8fZfWpFNAuOisJKXo7j2UJ5jghSnPTOPZ18WC724zl9wmYPZUnKG%2FwAYXqK8dYUTENj0r0HiC%2FkoHE7nDNV1PbVLvZusMt7u7hkutRZVC0fEikckQX9i4Q2e%2BaanoHWeYGWPsBMJywKq9ZB%2FTDVMNpSMyfa7fHJA0XvGpBhIHX%2FHOUGmNz3cd1%2B44rsBaOruk%2BxbcHHC5%2F2EiPFvWLn3S0wAdrknQOSsfIRHviL29K9us4kWu3gTHdJZvJQ7GRJ00DytVJ3E8XJLxnDC0TBWb1Ug%2Ba0pad0VfzK3ps5wATEfUsG2gdsUBwhHaKhkvgUcxDCXbUJwkX8ZPy53SeVG%2BnnsSfhNFEajEkUIOaWx474YfrENIIpE%2BxpCUrUTK3CYC2P6PoBBKbYjvyLyo8pY023egSFg%2FR9qtbnRSTlTWn1dd4qRdEVb2wpcTmD2DAi4OXc%2BTvigSXYVRDTqxBQW0o95A1SfKQmnqJhig6%2Fcq7DDXirS%2BBjqkAZ8LdjJHBkIcrfGarPr1I3toCVJAXCA7kSi%2B2qW0QMXmxkpol0zXKhn7mCw1PqKNP1dfbau0xNVl%2Bwzu%2Fr%2FYosGmGJf8%2F8E5isVTCi7ivwsqcQULdBMrCCRmoySmL9ss4AfulpxLf40t7V6mywstRbPS3Ym3k8LK1xzSvHZkZzrrRc8viVfIXt%2BUu2kcNFopIM6o3pL1vylWJsF4sy4C9rHXeoNd&X-Amz-Signature=63dc221058caa263d2f6abe85be7a8f16aac2c2f171e7d4c9383ee00f786b0e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXG4QLZR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDufdWdRSAImfOD5ix0Gg1u4ZI1ZcD71lZoKrNAzeuzmwIhAIkKfuqqvDdXHBf%2F0YPHPvNX52TbvmAaVH1z%2FIXWS9GxKv8DCGwQABoMNjM3NDIzMTgzODA1IgzCygSXATBsByH%2FfB4q3AO6T%2F8F%2FUIQSHUruJmJQPcJNeGfV2%2FEkXTmQyQEeVDkh8h267mdqYkIQJcFuX%2Bh0KUsTFZ7u63eTY6%2BUfBythXUk6okWuo2nwM90pzKny8mF8onB%2BLBsvGEHl2oejlj6%2F3%2F2846nc9qe%2F%2BT6vK8fZfWpFNAuOisJKXo7j2UJ5jghSnPTOPZ18WC724zl9wmYPZUnKG%2FwAYXqK8dYUTENj0r0HiC%2FkoHE7nDNV1PbVLvZusMt7u7hkutRZVC0fEikckQX9i4Q2e%2BaanoHWeYGWPsBMJywKq9ZB%2FTDVMNpSMyfa7fHJA0XvGpBhIHX%2FHOUGmNz3cd1%2B44rsBaOruk%2BxbcHHC5%2F2EiPFvWLn3S0wAdrknQOSsfIRHviL29K9us4kWu3gTHdJZvJQ7GRJ00DytVJ3E8XJLxnDC0TBWb1Ug%2Ba0pad0VfzK3ps5wATEfUsG2gdsUBwhHaKhkvgUcxDCXbUJwkX8ZPy53SeVG%2BnnsSfhNFEajEkUIOaWx474YfrENIIpE%2BxpCUrUTK3CYC2P6PoBBKbYjvyLyo8pY023egSFg%2FR9qtbnRSTlTWn1dd4qRdEVb2wpcTmD2DAi4OXc%2BTvigSXYVRDTqxBQW0o95A1SfKQmnqJhig6%2Fcq7DDXirS%2BBjqkAZ8LdjJHBkIcrfGarPr1I3toCVJAXCA7kSi%2B2qW0QMXmxkpol0zXKhn7mCw1PqKNP1dfbau0xNVl%2Bwzu%2Fr%2FYosGmGJf8%2F8E5isVTCi7ivwsqcQULdBMrCCRmoySmL9ss4AfulpxLf40t7V6mywstRbPS3Ym3k8LK1xzSvHZkZzrrRc8viVfIXt%2BUu2kcNFopIM6o3pL1vylWJsF4sy4C9rHXeoNd&X-Amz-Signature=d80336e7b9cd875e49f67cb93b0615ef92e75b0e4d9b1e34499fdf0f6201ac53&X-Amz-SignedHeaders=host&x-id=GetObject)
