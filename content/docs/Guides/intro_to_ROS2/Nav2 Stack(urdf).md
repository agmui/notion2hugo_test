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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZKHKFNJ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3BD4UzmTnSVLlNyWCPAMCi4MZJxXcBJtcDH4VNjP8lwIhAMtQdFsTnXSAaPpL3i77hlkcEt3ggnWCsP%2B91pXQOvfmKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFPJV%2FeKSWTpLBDJMq3ANUH%2FRA4BI7R6MaySnq8PiHRDRdj1I9fmR%2BJs7gv%2BLP2Ndt780SrwEmih9xZPpXce9ZjH0U1V37nR00BiBk5GRiNI6VesyYAhBhogtjp5YTrUajg%2Fk7pjK24Z8GOm83yTJrEXMs17hGShSXL9J%2FATKy%2BgNd9HAUDfTu1HuziLW3sBKJkeA4LfaUUENHjLGH4uOf8mCXw2UxvB55p3GB%2Fv%2BSDfsvRMTSHWvO72cEFJJl%2Fqhe3sSKJzK1b6pvpyoNveig1sKTNKBwLkXMauyANthQLMH6gmovf6TkB6uB4NtyZBCn0hfY6b0yrRa4Igh2LJrVLg%2FsSJcBZ%2BwFhxsOm7aRO5B8UnKeCdGiS56Rwi63JLPtpPky0Bu%2FPS9emdXFvQmJHhqpUdJRMZLoxQzePuqxSRhjza%2B9Owd1tGjbHzPuaeYVsd7ebaqiWAevdNGwcp8uJtD9uTbayOPasItirwobb5ASCEPYiqBRcgfF5yBU6v2a1dI%2B3J6gvxZWkOwL4aLzsm%2BoXuhT7Vpuzb8icQe9gbEFKseKyF8RUHHddMtgU%2FI%2BhZUn3adY0VyMw9qjKtI39v7v3MT%2Fb433O1mbQzD8xftQa9dbeJA5W0sRXB7AUSDCLsM1koOFpuur1jD995i%2BBjqkAfxQ1O7qRbFfmfKJ5%2BMnYXHIrDuknuFyDoP9%2BfDzLNZLfkw%2FrhraIy%2BtlLQ7XJYbTUBZkQtcAxbsK%2Bq8M4EYM6IoszQbCVHqiDsV%2FnNj%2Fk9PvCECfCfwwDPz0G40rCCQgSWlRN0sNij0fe1EzPZj4wG9OPQjB0x%2FTfUKguNM4is7BULRY3PtP2QFLrEVIagwz37XZ%2Bf2zrrc%2BzP%2F8xKsu2mCTo0j&X-Amz-Signature=389b90f5e4d41585f7f9935402c20414cf0a8c085420b6c24325c103797bcd36&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZKHKFNJ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3BD4UzmTnSVLlNyWCPAMCi4MZJxXcBJtcDH4VNjP8lwIhAMtQdFsTnXSAaPpL3i77hlkcEt3ggnWCsP%2B91pXQOvfmKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFPJV%2FeKSWTpLBDJMq3ANUH%2FRA4BI7R6MaySnq8PiHRDRdj1I9fmR%2BJs7gv%2BLP2Ndt780SrwEmih9xZPpXce9ZjH0U1V37nR00BiBk5GRiNI6VesyYAhBhogtjp5YTrUajg%2Fk7pjK24Z8GOm83yTJrEXMs17hGShSXL9J%2FATKy%2BgNd9HAUDfTu1HuziLW3sBKJkeA4LfaUUENHjLGH4uOf8mCXw2UxvB55p3GB%2Fv%2BSDfsvRMTSHWvO72cEFJJl%2Fqhe3sSKJzK1b6pvpyoNveig1sKTNKBwLkXMauyANthQLMH6gmovf6TkB6uB4NtyZBCn0hfY6b0yrRa4Igh2LJrVLg%2FsSJcBZ%2BwFhxsOm7aRO5B8UnKeCdGiS56Rwi63JLPtpPky0Bu%2FPS9emdXFvQmJHhqpUdJRMZLoxQzePuqxSRhjza%2B9Owd1tGjbHzPuaeYVsd7ebaqiWAevdNGwcp8uJtD9uTbayOPasItirwobb5ASCEPYiqBRcgfF5yBU6v2a1dI%2B3J6gvxZWkOwL4aLzsm%2BoXuhT7Vpuzb8icQe9gbEFKseKyF8RUHHddMtgU%2FI%2BhZUn3adY0VyMw9qjKtI39v7v3MT%2Fb433O1mbQzD8xftQa9dbeJA5W0sRXB7AUSDCLsM1koOFpuur1jD995i%2BBjqkAfxQ1O7qRbFfmfKJ5%2BMnYXHIrDuknuFyDoP9%2BfDzLNZLfkw%2FrhraIy%2BtlLQ7XJYbTUBZkQtcAxbsK%2Bq8M4EYM6IoszQbCVHqiDsV%2FnNj%2Fk9PvCECfCfwwDPz0G40rCCQgSWlRN0sNij0fe1EzPZj4wG9OPQjB0x%2FTfUKguNM4is7BULRY3PtP2QFLrEVIagwz37XZ%2Bf2zrrc%2BzP%2F8xKsu2mCTo0j&X-Amz-Signature=6ca40da7c4aea090db05837784f63f899ae1ebb69ce3fb09940c2ef5938c91ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZKHKFNJ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3BD4UzmTnSVLlNyWCPAMCi4MZJxXcBJtcDH4VNjP8lwIhAMtQdFsTnXSAaPpL3i77hlkcEt3ggnWCsP%2B91pXQOvfmKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFPJV%2FeKSWTpLBDJMq3ANUH%2FRA4BI7R6MaySnq8PiHRDRdj1I9fmR%2BJs7gv%2BLP2Ndt780SrwEmih9xZPpXce9ZjH0U1V37nR00BiBk5GRiNI6VesyYAhBhogtjp5YTrUajg%2Fk7pjK24Z8GOm83yTJrEXMs17hGShSXL9J%2FATKy%2BgNd9HAUDfTu1HuziLW3sBKJkeA4LfaUUENHjLGH4uOf8mCXw2UxvB55p3GB%2Fv%2BSDfsvRMTSHWvO72cEFJJl%2Fqhe3sSKJzK1b6pvpyoNveig1sKTNKBwLkXMauyANthQLMH6gmovf6TkB6uB4NtyZBCn0hfY6b0yrRa4Igh2LJrVLg%2FsSJcBZ%2BwFhxsOm7aRO5B8UnKeCdGiS56Rwi63JLPtpPky0Bu%2FPS9emdXFvQmJHhqpUdJRMZLoxQzePuqxSRhjza%2B9Owd1tGjbHzPuaeYVsd7ebaqiWAevdNGwcp8uJtD9uTbayOPasItirwobb5ASCEPYiqBRcgfF5yBU6v2a1dI%2B3J6gvxZWkOwL4aLzsm%2BoXuhT7Vpuzb8icQe9gbEFKseKyF8RUHHddMtgU%2FI%2BhZUn3adY0VyMw9qjKtI39v7v3MT%2Fb433O1mbQzD8xftQa9dbeJA5W0sRXB7AUSDCLsM1koOFpuur1jD995i%2BBjqkAfxQ1O7qRbFfmfKJ5%2BMnYXHIrDuknuFyDoP9%2BfDzLNZLfkw%2FrhraIy%2BtlLQ7XJYbTUBZkQtcAxbsK%2Bq8M4EYM6IoszQbCVHqiDsV%2FnNj%2Fk9PvCECfCfwwDPz0G40rCCQgSWlRN0sNij0fe1EzPZj4wG9OPQjB0x%2FTfUKguNM4is7BULRY3PtP2QFLrEVIagwz37XZ%2Bf2zrrc%2BzP%2F8xKsu2mCTo0j&X-Amz-Signature=26aec318a14f5018c4d59bd0bc423ca8cc4e6e79b5fe42b29304d9cfe68c7d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZKHKFNJ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3BD4UzmTnSVLlNyWCPAMCi4MZJxXcBJtcDH4VNjP8lwIhAMtQdFsTnXSAaPpL3i77hlkcEt3ggnWCsP%2B91pXQOvfmKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFPJV%2FeKSWTpLBDJMq3ANUH%2FRA4BI7R6MaySnq8PiHRDRdj1I9fmR%2BJs7gv%2BLP2Ndt780SrwEmih9xZPpXce9ZjH0U1V37nR00BiBk5GRiNI6VesyYAhBhogtjp5YTrUajg%2Fk7pjK24Z8GOm83yTJrEXMs17hGShSXL9J%2FATKy%2BgNd9HAUDfTu1HuziLW3sBKJkeA4LfaUUENHjLGH4uOf8mCXw2UxvB55p3GB%2Fv%2BSDfsvRMTSHWvO72cEFJJl%2Fqhe3sSKJzK1b6pvpyoNveig1sKTNKBwLkXMauyANthQLMH6gmovf6TkB6uB4NtyZBCn0hfY6b0yrRa4Igh2LJrVLg%2FsSJcBZ%2BwFhxsOm7aRO5B8UnKeCdGiS56Rwi63JLPtpPky0Bu%2FPS9emdXFvQmJHhqpUdJRMZLoxQzePuqxSRhjza%2B9Owd1tGjbHzPuaeYVsd7ebaqiWAevdNGwcp8uJtD9uTbayOPasItirwobb5ASCEPYiqBRcgfF5yBU6v2a1dI%2B3J6gvxZWkOwL4aLzsm%2BoXuhT7Vpuzb8icQe9gbEFKseKyF8RUHHddMtgU%2FI%2BhZUn3adY0VyMw9qjKtI39v7v3MT%2Fb433O1mbQzD8xftQa9dbeJA5W0sRXB7AUSDCLsM1koOFpuur1jD995i%2BBjqkAfxQ1O7qRbFfmfKJ5%2BMnYXHIrDuknuFyDoP9%2BfDzLNZLfkw%2FrhraIy%2BtlLQ7XJYbTUBZkQtcAxbsK%2Bq8M4EYM6IoszQbCVHqiDsV%2FnNj%2Fk9PvCECfCfwwDPz0G40rCCQgSWlRN0sNij0fe1EzPZj4wG9OPQjB0x%2FTfUKguNM4is7BULRY3PtP2QFLrEVIagwz37XZ%2Bf2zrrc%2BzP%2F8xKsu2mCTo0j&X-Amz-Signature=240961494ba5d3555c70fd868d942409ad1c09a2e6d21b1590e873248d6c80bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZKHKFNJ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3BD4UzmTnSVLlNyWCPAMCi4MZJxXcBJtcDH4VNjP8lwIhAMtQdFsTnXSAaPpL3i77hlkcEt3ggnWCsP%2B91pXQOvfmKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFPJV%2FeKSWTpLBDJMq3ANUH%2FRA4BI7R6MaySnq8PiHRDRdj1I9fmR%2BJs7gv%2BLP2Ndt780SrwEmih9xZPpXce9ZjH0U1V37nR00BiBk5GRiNI6VesyYAhBhogtjp5YTrUajg%2Fk7pjK24Z8GOm83yTJrEXMs17hGShSXL9J%2FATKy%2BgNd9HAUDfTu1HuziLW3sBKJkeA4LfaUUENHjLGH4uOf8mCXw2UxvB55p3GB%2Fv%2BSDfsvRMTSHWvO72cEFJJl%2Fqhe3sSKJzK1b6pvpyoNveig1sKTNKBwLkXMauyANthQLMH6gmovf6TkB6uB4NtyZBCn0hfY6b0yrRa4Igh2LJrVLg%2FsSJcBZ%2BwFhxsOm7aRO5B8UnKeCdGiS56Rwi63JLPtpPky0Bu%2FPS9emdXFvQmJHhqpUdJRMZLoxQzePuqxSRhjza%2B9Owd1tGjbHzPuaeYVsd7ebaqiWAevdNGwcp8uJtD9uTbayOPasItirwobb5ASCEPYiqBRcgfF5yBU6v2a1dI%2B3J6gvxZWkOwL4aLzsm%2BoXuhT7Vpuzb8icQe9gbEFKseKyF8RUHHddMtgU%2FI%2BhZUn3adY0VyMw9qjKtI39v7v3MT%2Fb433O1mbQzD8xftQa9dbeJA5W0sRXB7AUSDCLsM1koOFpuur1jD995i%2BBjqkAfxQ1O7qRbFfmfKJ5%2BMnYXHIrDuknuFyDoP9%2BfDzLNZLfkw%2FrhraIy%2BtlLQ7XJYbTUBZkQtcAxbsK%2Bq8M4EYM6IoszQbCVHqiDsV%2FnNj%2Fk9PvCECfCfwwDPz0G40rCCQgSWlRN0sNij0fe1EzPZj4wG9OPQjB0x%2FTfUKguNM4is7BULRY3PtP2QFLrEVIagwz37XZ%2Bf2zrrc%2BzP%2F8xKsu2mCTo0j&X-Amz-Signature=21a594b727d1efac346b428f84213ed6e4da76afca38d96362c62831b039aeda&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZKHKFNJ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3BD4UzmTnSVLlNyWCPAMCi4MZJxXcBJtcDH4VNjP8lwIhAMtQdFsTnXSAaPpL3i77hlkcEt3ggnWCsP%2B91pXQOvfmKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFPJV%2FeKSWTpLBDJMq3ANUH%2FRA4BI7R6MaySnq8PiHRDRdj1I9fmR%2BJs7gv%2BLP2Ndt780SrwEmih9xZPpXce9ZjH0U1V37nR00BiBk5GRiNI6VesyYAhBhogtjp5YTrUajg%2Fk7pjK24Z8GOm83yTJrEXMs17hGShSXL9J%2FATKy%2BgNd9HAUDfTu1HuziLW3sBKJkeA4LfaUUENHjLGH4uOf8mCXw2UxvB55p3GB%2Fv%2BSDfsvRMTSHWvO72cEFJJl%2Fqhe3sSKJzK1b6pvpyoNveig1sKTNKBwLkXMauyANthQLMH6gmovf6TkB6uB4NtyZBCn0hfY6b0yrRa4Igh2LJrVLg%2FsSJcBZ%2BwFhxsOm7aRO5B8UnKeCdGiS56Rwi63JLPtpPky0Bu%2FPS9emdXFvQmJHhqpUdJRMZLoxQzePuqxSRhjza%2B9Owd1tGjbHzPuaeYVsd7ebaqiWAevdNGwcp8uJtD9uTbayOPasItirwobb5ASCEPYiqBRcgfF5yBU6v2a1dI%2B3J6gvxZWkOwL4aLzsm%2BoXuhT7Vpuzb8icQe9gbEFKseKyF8RUHHddMtgU%2FI%2BhZUn3adY0VyMw9qjKtI39v7v3MT%2Fb433O1mbQzD8xftQa9dbeJA5W0sRXB7AUSDCLsM1koOFpuur1jD995i%2BBjqkAfxQ1O7qRbFfmfKJ5%2BMnYXHIrDuknuFyDoP9%2BfDzLNZLfkw%2FrhraIy%2BtlLQ7XJYbTUBZkQtcAxbsK%2Bq8M4EYM6IoszQbCVHqiDsV%2FnNj%2Fk9PvCECfCfwwDPz0G40rCCQgSWlRN0sNij0fe1EzPZj4wG9OPQjB0x%2FTfUKguNM4is7BULRY3PtP2QFLrEVIagwz37XZ%2Bf2zrrc%2BzP%2F8xKsu2mCTo0j&X-Amz-Signature=ecb883b00da58feb2e7381a4d36e16346fe0b387d84e6087f0767be52f13579a&X-Amz-SignedHeaders=host&x-id=GetObject)
