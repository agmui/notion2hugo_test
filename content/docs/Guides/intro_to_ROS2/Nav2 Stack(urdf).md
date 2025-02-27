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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BXAZEEM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQD2anDQoUCwYqgEHYHuRf77otAX%2BvfgnUK2jCPUoaie1AIhAKBfozmG4Dcz8ojAlJEbk8LA0RQSi6zTJTsKh9n3XgLtKv8DCG0QABoMNjM3NDIzMTgzODA1IgwCvunB4MKPYcWR9UAq3AOTHTMpCHxkNUqQOpFbMBlL0HPbm9yKNvXgSzxOpwTUxoijjyF9QUxfNM9gC%2F2QjYDSoMWNh3VipGG4%2BB0i%2B1Mlx3K4b9UgI%2BC9E3BPDgthVTdheY%2F2fu4wrpHinXD62HguMvFrgdvbizo8mcXMWUpaeoxLxvsTbXm819UI1QENk9876Hf%2BjdOPHNGNwrjWFsE7ghOVvfmig4mhwYVJ152ThIrE8slSG%2FK%2FWiv6PK449LpB7H%2BNothAjQH45hKIy4B3DDTZg92gPOqCp8gDG0lo%2FaeopfYtcRZt3Aq6ocjZ75ILYsYnHtknVlurnw9XqLWf8KylS60imyq8hzp%2B79A9XohwZ4wy5HeqA52HU9oVDkVN7GYFPvTCcSTKwiH44mnVHFReHLd4cOT9LHAQv6jmpEtvu3hOMvCpvRxpTdpvGodcSXhP1os3sP6t7jvBv7LPnWRfwErJBKF8ReK2ZaKl0ceVx%2FnOYwBumIbS4d4WSSsJylg6OaRC2RQfis0HAA0%2Fam7Fy28KkixilYeXiihmrphrFNBh%2BYbLTXDECzJL1Jjq89Grsy5RGQYi%2Bm%2BhSwrI0nVTUT4ORFaIx692pomBY0hGr%2B3BnAqTXSukK45KM%2BOhvZ4dgAmX%2BSze%2BzDoz%2F%2B9BjqkAWiOH3L1v5alkq7ugTf2WW4w1TnDtAyI3gdEjKmwDkpS6lxx2L8yEwO2eXBmEUJWcNnhmq9gccjnFqk7I0YH77z8KH30zIMS4QDg0PeZgyhs4hON64F1LH3LIQhnMffanFXG%2B7xcNz0J3OeB2tkGMy7z6DXmhWkkHUicgx3kj5aN2psskKQAQhVvJgheLPcLeBlZqeWJjf9FlcbEDui4RWnIihYu&X-Amz-Signature=9cd8dc14076092d97adfd7abc63b5a549f0da011bdb5e809e6d48db5454966e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BXAZEEM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQD2anDQoUCwYqgEHYHuRf77otAX%2BvfgnUK2jCPUoaie1AIhAKBfozmG4Dcz8ojAlJEbk8LA0RQSi6zTJTsKh9n3XgLtKv8DCG0QABoMNjM3NDIzMTgzODA1IgwCvunB4MKPYcWR9UAq3AOTHTMpCHxkNUqQOpFbMBlL0HPbm9yKNvXgSzxOpwTUxoijjyF9QUxfNM9gC%2F2QjYDSoMWNh3VipGG4%2BB0i%2B1Mlx3K4b9UgI%2BC9E3BPDgthVTdheY%2F2fu4wrpHinXD62HguMvFrgdvbizo8mcXMWUpaeoxLxvsTbXm819UI1QENk9876Hf%2BjdOPHNGNwrjWFsE7ghOVvfmig4mhwYVJ152ThIrE8slSG%2FK%2FWiv6PK449LpB7H%2BNothAjQH45hKIy4B3DDTZg92gPOqCp8gDG0lo%2FaeopfYtcRZt3Aq6ocjZ75ILYsYnHtknVlurnw9XqLWf8KylS60imyq8hzp%2B79A9XohwZ4wy5HeqA52HU9oVDkVN7GYFPvTCcSTKwiH44mnVHFReHLd4cOT9LHAQv6jmpEtvu3hOMvCpvRxpTdpvGodcSXhP1os3sP6t7jvBv7LPnWRfwErJBKF8ReK2ZaKl0ceVx%2FnOYwBumIbS4d4WSSsJylg6OaRC2RQfis0HAA0%2Fam7Fy28KkixilYeXiihmrphrFNBh%2BYbLTXDECzJL1Jjq89Grsy5RGQYi%2Bm%2BhSwrI0nVTUT4ORFaIx692pomBY0hGr%2B3BnAqTXSukK45KM%2BOhvZ4dgAmX%2BSze%2BzDoz%2F%2B9BjqkAWiOH3L1v5alkq7ugTf2WW4w1TnDtAyI3gdEjKmwDkpS6lxx2L8yEwO2eXBmEUJWcNnhmq9gccjnFqk7I0YH77z8KH30zIMS4QDg0PeZgyhs4hON64F1LH3LIQhnMffanFXG%2B7xcNz0J3OeB2tkGMy7z6DXmhWkkHUicgx3kj5aN2psskKQAQhVvJgheLPcLeBlZqeWJjf9FlcbEDui4RWnIihYu&X-Amz-Signature=b5c215828944b8fee2a69e3fd5cfef0af73aaf3ccbbc90d4b389ea8430a5f4dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BXAZEEM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQD2anDQoUCwYqgEHYHuRf77otAX%2BvfgnUK2jCPUoaie1AIhAKBfozmG4Dcz8ojAlJEbk8LA0RQSi6zTJTsKh9n3XgLtKv8DCG0QABoMNjM3NDIzMTgzODA1IgwCvunB4MKPYcWR9UAq3AOTHTMpCHxkNUqQOpFbMBlL0HPbm9yKNvXgSzxOpwTUxoijjyF9QUxfNM9gC%2F2QjYDSoMWNh3VipGG4%2BB0i%2B1Mlx3K4b9UgI%2BC9E3BPDgthVTdheY%2F2fu4wrpHinXD62HguMvFrgdvbizo8mcXMWUpaeoxLxvsTbXm819UI1QENk9876Hf%2BjdOPHNGNwrjWFsE7ghOVvfmig4mhwYVJ152ThIrE8slSG%2FK%2FWiv6PK449LpB7H%2BNothAjQH45hKIy4B3DDTZg92gPOqCp8gDG0lo%2FaeopfYtcRZt3Aq6ocjZ75ILYsYnHtknVlurnw9XqLWf8KylS60imyq8hzp%2B79A9XohwZ4wy5HeqA52HU9oVDkVN7GYFPvTCcSTKwiH44mnVHFReHLd4cOT9LHAQv6jmpEtvu3hOMvCpvRxpTdpvGodcSXhP1os3sP6t7jvBv7LPnWRfwErJBKF8ReK2ZaKl0ceVx%2FnOYwBumIbS4d4WSSsJylg6OaRC2RQfis0HAA0%2Fam7Fy28KkixilYeXiihmrphrFNBh%2BYbLTXDECzJL1Jjq89Grsy5RGQYi%2Bm%2BhSwrI0nVTUT4ORFaIx692pomBY0hGr%2B3BnAqTXSukK45KM%2BOhvZ4dgAmX%2BSze%2BzDoz%2F%2B9BjqkAWiOH3L1v5alkq7ugTf2WW4w1TnDtAyI3gdEjKmwDkpS6lxx2L8yEwO2eXBmEUJWcNnhmq9gccjnFqk7I0YH77z8KH30zIMS4QDg0PeZgyhs4hON64F1LH3LIQhnMffanFXG%2B7xcNz0J3OeB2tkGMy7z6DXmhWkkHUicgx3kj5aN2psskKQAQhVvJgheLPcLeBlZqeWJjf9FlcbEDui4RWnIihYu&X-Amz-Signature=ad14f46620e8da45d6bf00050f8dfbb0e22b283d4fcbb4ee2c1895514cfa2b91&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BXAZEEM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQD2anDQoUCwYqgEHYHuRf77otAX%2BvfgnUK2jCPUoaie1AIhAKBfozmG4Dcz8ojAlJEbk8LA0RQSi6zTJTsKh9n3XgLtKv8DCG0QABoMNjM3NDIzMTgzODA1IgwCvunB4MKPYcWR9UAq3AOTHTMpCHxkNUqQOpFbMBlL0HPbm9yKNvXgSzxOpwTUxoijjyF9QUxfNM9gC%2F2QjYDSoMWNh3VipGG4%2BB0i%2B1Mlx3K4b9UgI%2BC9E3BPDgthVTdheY%2F2fu4wrpHinXD62HguMvFrgdvbizo8mcXMWUpaeoxLxvsTbXm819UI1QENk9876Hf%2BjdOPHNGNwrjWFsE7ghOVvfmig4mhwYVJ152ThIrE8slSG%2FK%2FWiv6PK449LpB7H%2BNothAjQH45hKIy4B3DDTZg92gPOqCp8gDG0lo%2FaeopfYtcRZt3Aq6ocjZ75ILYsYnHtknVlurnw9XqLWf8KylS60imyq8hzp%2B79A9XohwZ4wy5HeqA52HU9oVDkVN7GYFPvTCcSTKwiH44mnVHFReHLd4cOT9LHAQv6jmpEtvu3hOMvCpvRxpTdpvGodcSXhP1os3sP6t7jvBv7LPnWRfwErJBKF8ReK2ZaKl0ceVx%2FnOYwBumIbS4d4WSSsJylg6OaRC2RQfis0HAA0%2Fam7Fy28KkixilYeXiihmrphrFNBh%2BYbLTXDECzJL1Jjq89Grsy5RGQYi%2Bm%2BhSwrI0nVTUT4ORFaIx692pomBY0hGr%2B3BnAqTXSukK45KM%2BOhvZ4dgAmX%2BSze%2BzDoz%2F%2B9BjqkAWiOH3L1v5alkq7ugTf2WW4w1TnDtAyI3gdEjKmwDkpS6lxx2L8yEwO2eXBmEUJWcNnhmq9gccjnFqk7I0YH77z8KH30zIMS4QDg0PeZgyhs4hON64F1LH3LIQhnMffanFXG%2B7xcNz0J3OeB2tkGMy7z6DXmhWkkHUicgx3kj5aN2psskKQAQhVvJgheLPcLeBlZqeWJjf9FlcbEDui4RWnIihYu&X-Amz-Signature=fd380a85f0d0b81e9c74670f9fa91b842d6aefb1049cb5df5dc517b02000deef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BXAZEEM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQD2anDQoUCwYqgEHYHuRf77otAX%2BvfgnUK2jCPUoaie1AIhAKBfozmG4Dcz8ojAlJEbk8LA0RQSi6zTJTsKh9n3XgLtKv8DCG0QABoMNjM3NDIzMTgzODA1IgwCvunB4MKPYcWR9UAq3AOTHTMpCHxkNUqQOpFbMBlL0HPbm9yKNvXgSzxOpwTUxoijjyF9QUxfNM9gC%2F2QjYDSoMWNh3VipGG4%2BB0i%2B1Mlx3K4b9UgI%2BC9E3BPDgthVTdheY%2F2fu4wrpHinXD62HguMvFrgdvbizo8mcXMWUpaeoxLxvsTbXm819UI1QENk9876Hf%2BjdOPHNGNwrjWFsE7ghOVvfmig4mhwYVJ152ThIrE8slSG%2FK%2FWiv6PK449LpB7H%2BNothAjQH45hKIy4B3DDTZg92gPOqCp8gDG0lo%2FaeopfYtcRZt3Aq6ocjZ75ILYsYnHtknVlurnw9XqLWf8KylS60imyq8hzp%2B79A9XohwZ4wy5HeqA52HU9oVDkVN7GYFPvTCcSTKwiH44mnVHFReHLd4cOT9LHAQv6jmpEtvu3hOMvCpvRxpTdpvGodcSXhP1os3sP6t7jvBv7LPnWRfwErJBKF8ReK2ZaKl0ceVx%2FnOYwBumIbS4d4WSSsJylg6OaRC2RQfis0HAA0%2Fam7Fy28KkixilYeXiihmrphrFNBh%2BYbLTXDECzJL1Jjq89Grsy5RGQYi%2Bm%2BhSwrI0nVTUT4ORFaIx692pomBY0hGr%2B3BnAqTXSukK45KM%2BOhvZ4dgAmX%2BSze%2BzDoz%2F%2B9BjqkAWiOH3L1v5alkq7ugTf2WW4w1TnDtAyI3gdEjKmwDkpS6lxx2L8yEwO2eXBmEUJWcNnhmq9gccjnFqk7I0YH77z8KH30zIMS4QDg0PeZgyhs4hON64F1LH3LIQhnMffanFXG%2B7xcNz0J3OeB2tkGMy7z6DXmhWkkHUicgx3kj5aN2psskKQAQhVvJgheLPcLeBlZqeWJjf9FlcbEDui4RWnIihYu&X-Amz-Signature=afb15f3d3b7dd2e7a5f58bd7f58f025a8bfe160be14bd18e1fe4ecc002ad239a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BXAZEEM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQD2anDQoUCwYqgEHYHuRf77otAX%2BvfgnUK2jCPUoaie1AIhAKBfozmG4Dcz8ojAlJEbk8LA0RQSi6zTJTsKh9n3XgLtKv8DCG0QABoMNjM3NDIzMTgzODA1IgwCvunB4MKPYcWR9UAq3AOTHTMpCHxkNUqQOpFbMBlL0HPbm9yKNvXgSzxOpwTUxoijjyF9QUxfNM9gC%2F2QjYDSoMWNh3VipGG4%2BB0i%2B1Mlx3K4b9UgI%2BC9E3BPDgthVTdheY%2F2fu4wrpHinXD62HguMvFrgdvbizo8mcXMWUpaeoxLxvsTbXm819UI1QENk9876Hf%2BjdOPHNGNwrjWFsE7ghOVvfmig4mhwYVJ152ThIrE8slSG%2FK%2FWiv6PK449LpB7H%2BNothAjQH45hKIy4B3DDTZg92gPOqCp8gDG0lo%2FaeopfYtcRZt3Aq6ocjZ75ILYsYnHtknVlurnw9XqLWf8KylS60imyq8hzp%2B79A9XohwZ4wy5HeqA52HU9oVDkVN7GYFPvTCcSTKwiH44mnVHFReHLd4cOT9LHAQv6jmpEtvu3hOMvCpvRxpTdpvGodcSXhP1os3sP6t7jvBv7LPnWRfwErJBKF8ReK2ZaKl0ceVx%2FnOYwBumIbS4d4WSSsJylg6OaRC2RQfis0HAA0%2Fam7Fy28KkixilYeXiihmrphrFNBh%2BYbLTXDECzJL1Jjq89Grsy5RGQYi%2Bm%2BhSwrI0nVTUT4ORFaIx692pomBY0hGr%2B3BnAqTXSukK45KM%2BOhvZ4dgAmX%2BSze%2BzDoz%2F%2B9BjqkAWiOH3L1v5alkq7ugTf2WW4w1TnDtAyI3gdEjKmwDkpS6lxx2L8yEwO2eXBmEUJWcNnhmq9gccjnFqk7I0YH77z8KH30zIMS4QDg0PeZgyhs4hON64F1LH3LIQhnMffanFXG%2B7xcNz0J3OeB2tkGMy7z6DXmhWkkHUicgx3kj5aN2psskKQAQhVvJgheLPcLeBlZqeWJjf9FlcbEDui4RWnIihYu&X-Amz-Signature=57fb87db88359c1fc03c414549270dec11b9d6fc6bced4f58c7bc3540f354cde&X-Amz-SignedHeaders=host&x-id=GetObject)
