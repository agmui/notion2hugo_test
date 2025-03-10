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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6P6IV2Z%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIB0MGt6P6ex5nyUtN9IKfBAsf%2FR92QwyYSKztGUYU2ocAiEApKYAAyj5fIYY4S7to%2BBBhl5qVlHFwQjCllQbZSeLwvwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADBZOAAR0nbR%2FBQtCrcA6CjfW0iag6GU3R7ZJzp0BIJJeCWYGhBvwh8l5ewhdnbG0yAd62hoiQVRtNRY9b%2BZgyQb5QojDG4azAkF7I143Lc0ma619%2F3zpcd1B5qW21hnQDCSeEqrPfY95z1w6a7evbcdmJDgRYAvr8Or7znplzinCB2Ibs%2Fxtjxc58S8dW%2Bu1et6U8YUl1wPTjKbvbAvjiJ5kzJrab%2B6NQBYYlpyDPTcoPgbgpNeal4p7fv9NgVHxKMCCwcwkxW3jV18Yxkv0qxC7KREqSO9F0wusmuVPjs8i6Tn9XXwQDywbkqaZjW9ZHsocAOcMpNF29Xo5QD3gBay8%2BoulxAx57TthvJLIOyhyrDuVvpvkGDQ5Uh4QxJWP%2FrhGbMCP9YXkqVz0qdRlbE2hGRy97vDd8YdNelrKr0WFVEMIELcqVkrOD8qZHdJlzSwmuQ%2Fysio%2BpuygLaUV5%2Bpy1baMTw7ZiXU2VA6SjWpArf2NB%2B72l1KarJye8%2Bkbdl8j1cXLtP%2FuY1KSl2fMx1Lxto3ByRXtOG8ZRPaA6Gg64h4nUiZjYCo2pZVSoZcUXQQgMwcPJ16B%2B76zDZx5RolUdqqXbP%2B97Jrd5j6wAr4WC0ZwzylP4kY6I7ieZUq9Wp0aMupOLM4qo3MNesvb4GOqUBwetLOdSYvcDscLKi7NLW4g77qTVTYVm25xFHwOQ4sSCJkR1fEtg7gIZty48ro7zovUs4Zakxf0Ln9Vqc5v7keAdl7hNoneDDkfQeR4fPjxJJ8H3281AYYseO6aCoLN6T0lLkEg%2FPWUAKzrIXzUg9%2Bt5BlKAASyInlalby%2BpHJKrH4yV%2BY0pFtRAw1XDCgHGqDKy6HlTYs4uvaVK4W0gy8pcXYcCU&X-Amz-Signature=4d8656347fa10ab11ee506ead60b8a43db2b807e819b29838f2f9e5d4923f672&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6P6IV2Z%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIB0MGt6P6ex5nyUtN9IKfBAsf%2FR92QwyYSKztGUYU2ocAiEApKYAAyj5fIYY4S7to%2BBBhl5qVlHFwQjCllQbZSeLwvwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADBZOAAR0nbR%2FBQtCrcA6CjfW0iag6GU3R7ZJzp0BIJJeCWYGhBvwh8l5ewhdnbG0yAd62hoiQVRtNRY9b%2BZgyQb5QojDG4azAkF7I143Lc0ma619%2F3zpcd1B5qW21hnQDCSeEqrPfY95z1w6a7evbcdmJDgRYAvr8Or7znplzinCB2Ibs%2Fxtjxc58S8dW%2Bu1et6U8YUl1wPTjKbvbAvjiJ5kzJrab%2B6NQBYYlpyDPTcoPgbgpNeal4p7fv9NgVHxKMCCwcwkxW3jV18Yxkv0qxC7KREqSO9F0wusmuVPjs8i6Tn9XXwQDywbkqaZjW9ZHsocAOcMpNF29Xo5QD3gBay8%2BoulxAx57TthvJLIOyhyrDuVvpvkGDQ5Uh4QxJWP%2FrhGbMCP9YXkqVz0qdRlbE2hGRy97vDd8YdNelrKr0WFVEMIELcqVkrOD8qZHdJlzSwmuQ%2Fysio%2BpuygLaUV5%2Bpy1baMTw7ZiXU2VA6SjWpArf2NB%2B72l1KarJye8%2Bkbdl8j1cXLtP%2FuY1KSl2fMx1Lxto3ByRXtOG8ZRPaA6Gg64h4nUiZjYCo2pZVSoZcUXQQgMwcPJ16B%2B76zDZx5RolUdqqXbP%2B97Jrd5j6wAr4WC0ZwzylP4kY6I7ieZUq9Wp0aMupOLM4qo3MNesvb4GOqUBwetLOdSYvcDscLKi7NLW4g77qTVTYVm25xFHwOQ4sSCJkR1fEtg7gIZty48ro7zovUs4Zakxf0Ln9Vqc5v7keAdl7hNoneDDkfQeR4fPjxJJ8H3281AYYseO6aCoLN6T0lLkEg%2FPWUAKzrIXzUg9%2Bt5BlKAASyInlalby%2BpHJKrH4yV%2BY0pFtRAw1XDCgHGqDKy6HlTYs4uvaVK4W0gy8pcXYcCU&X-Amz-Signature=39172f797860af559c7aae5f16d432eb885a02bb8ba035103819a7ba3bc0b109&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6P6IV2Z%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIB0MGt6P6ex5nyUtN9IKfBAsf%2FR92QwyYSKztGUYU2ocAiEApKYAAyj5fIYY4S7to%2BBBhl5qVlHFwQjCllQbZSeLwvwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADBZOAAR0nbR%2FBQtCrcA6CjfW0iag6GU3R7ZJzp0BIJJeCWYGhBvwh8l5ewhdnbG0yAd62hoiQVRtNRY9b%2BZgyQb5QojDG4azAkF7I143Lc0ma619%2F3zpcd1B5qW21hnQDCSeEqrPfY95z1w6a7evbcdmJDgRYAvr8Or7znplzinCB2Ibs%2Fxtjxc58S8dW%2Bu1et6U8YUl1wPTjKbvbAvjiJ5kzJrab%2B6NQBYYlpyDPTcoPgbgpNeal4p7fv9NgVHxKMCCwcwkxW3jV18Yxkv0qxC7KREqSO9F0wusmuVPjs8i6Tn9XXwQDywbkqaZjW9ZHsocAOcMpNF29Xo5QD3gBay8%2BoulxAx57TthvJLIOyhyrDuVvpvkGDQ5Uh4QxJWP%2FrhGbMCP9YXkqVz0qdRlbE2hGRy97vDd8YdNelrKr0WFVEMIELcqVkrOD8qZHdJlzSwmuQ%2Fysio%2BpuygLaUV5%2Bpy1baMTw7ZiXU2VA6SjWpArf2NB%2B72l1KarJye8%2Bkbdl8j1cXLtP%2FuY1KSl2fMx1Lxto3ByRXtOG8ZRPaA6Gg64h4nUiZjYCo2pZVSoZcUXQQgMwcPJ16B%2B76zDZx5RolUdqqXbP%2B97Jrd5j6wAr4WC0ZwzylP4kY6I7ieZUq9Wp0aMupOLM4qo3MNesvb4GOqUBwetLOdSYvcDscLKi7NLW4g77qTVTYVm25xFHwOQ4sSCJkR1fEtg7gIZty48ro7zovUs4Zakxf0Ln9Vqc5v7keAdl7hNoneDDkfQeR4fPjxJJ8H3281AYYseO6aCoLN6T0lLkEg%2FPWUAKzrIXzUg9%2Bt5BlKAASyInlalby%2BpHJKrH4yV%2BY0pFtRAw1XDCgHGqDKy6HlTYs4uvaVK4W0gy8pcXYcCU&X-Amz-Signature=00cfdd6aacc13a851f77602fee1cd4cbd20432982b9e81300ea1f50fb5d6e74c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6P6IV2Z%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIB0MGt6P6ex5nyUtN9IKfBAsf%2FR92QwyYSKztGUYU2ocAiEApKYAAyj5fIYY4S7to%2BBBhl5qVlHFwQjCllQbZSeLwvwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADBZOAAR0nbR%2FBQtCrcA6CjfW0iag6GU3R7ZJzp0BIJJeCWYGhBvwh8l5ewhdnbG0yAd62hoiQVRtNRY9b%2BZgyQb5QojDG4azAkF7I143Lc0ma619%2F3zpcd1B5qW21hnQDCSeEqrPfY95z1w6a7evbcdmJDgRYAvr8Or7znplzinCB2Ibs%2Fxtjxc58S8dW%2Bu1et6U8YUl1wPTjKbvbAvjiJ5kzJrab%2B6NQBYYlpyDPTcoPgbgpNeal4p7fv9NgVHxKMCCwcwkxW3jV18Yxkv0qxC7KREqSO9F0wusmuVPjs8i6Tn9XXwQDywbkqaZjW9ZHsocAOcMpNF29Xo5QD3gBay8%2BoulxAx57TthvJLIOyhyrDuVvpvkGDQ5Uh4QxJWP%2FrhGbMCP9YXkqVz0qdRlbE2hGRy97vDd8YdNelrKr0WFVEMIELcqVkrOD8qZHdJlzSwmuQ%2Fysio%2BpuygLaUV5%2Bpy1baMTw7ZiXU2VA6SjWpArf2NB%2B72l1KarJye8%2Bkbdl8j1cXLtP%2FuY1KSl2fMx1Lxto3ByRXtOG8ZRPaA6Gg64h4nUiZjYCo2pZVSoZcUXQQgMwcPJ16B%2B76zDZx5RolUdqqXbP%2B97Jrd5j6wAr4WC0ZwzylP4kY6I7ieZUq9Wp0aMupOLM4qo3MNesvb4GOqUBwetLOdSYvcDscLKi7NLW4g77qTVTYVm25xFHwOQ4sSCJkR1fEtg7gIZty48ro7zovUs4Zakxf0Ln9Vqc5v7keAdl7hNoneDDkfQeR4fPjxJJ8H3281AYYseO6aCoLN6T0lLkEg%2FPWUAKzrIXzUg9%2Bt5BlKAASyInlalby%2BpHJKrH4yV%2BY0pFtRAw1XDCgHGqDKy6HlTYs4uvaVK4W0gy8pcXYcCU&X-Amz-Signature=5049da62910b5bfd5664bab07a52484ebc46911ffda4034c267077d131e6f004&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6P6IV2Z%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIB0MGt6P6ex5nyUtN9IKfBAsf%2FR92QwyYSKztGUYU2ocAiEApKYAAyj5fIYY4S7to%2BBBhl5qVlHFwQjCllQbZSeLwvwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADBZOAAR0nbR%2FBQtCrcA6CjfW0iag6GU3R7ZJzp0BIJJeCWYGhBvwh8l5ewhdnbG0yAd62hoiQVRtNRY9b%2BZgyQb5QojDG4azAkF7I143Lc0ma619%2F3zpcd1B5qW21hnQDCSeEqrPfY95z1w6a7evbcdmJDgRYAvr8Or7znplzinCB2Ibs%2Fxtjxc58S8dW%2Bu1et6U8YUl1wPTjKbvbAvjiJ5kzJrab%2B6NQBYYlpyDPTcoPgbgpNeal4p7fv9NgVHxKMCCwcwkxW3jV18Yxkv0qxC7KREqSO9F0wusmuVPjs8i6Tn9XXwQDywbkqaZjW9ZHsocAOcMpNF29Xo5QD3gBay8%2BoulxAx57TthvJLIOyhyrDuVvpvkGDQ5Uh4QxJWP%2FrhGbMCP9YXkqVz0qdRlbE2hGRy97vDd8YdNelrKr0WFVEMIELcqVkrOD8qZHdJlzSwmuQ%2Fysio%2BpuygLaUV5%2Bpy1baMTw7ZiXU2VA6SjWpArf2NB%2B72l1KarJye8%2Bkbdl8j1cXLtP%2FuY1KSl2fMx1Lxto3ByRXtOG8ZRPaA6Gg64h4nUiZjYCo2pZVSoZcUXQQgMwcPJ16B%2B76zDZx5RolUdqqXbP%2B97Jrd5j6wAr4WC0ZwzylP4kY6I7ieZUq9Wp0aMupOLM4qo3MNesvb4GOqUBwetLOdSYvcDscLKi7NLW4g77qTVTYVm25xFHwOQ4sSCJkR1fEtg7gIZty48ro7zovUs4Zakxf0Ln9Vqc5v7keAdl7hNoneDDkfQeR4fPjxJJ8H3281AYYseO6aCoLN6T0lLkEg%2FPWUAKzrIXzUg9%2Bt5BlKAASyInlalby%2BpHJKrH4yV%2BY0pFtRAw1XDCgHGqDKy6HlTYs4uvaVK4W0gy8pcXYcCU&X-Amz-Signature=9853335e48d7db84afeb77f70525e55e9c8fad07197a662c04c9814d033ebd2e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6P6IV2Z%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIB0MGt6P6ex5nyUtN9IKfBAsf%2FR92QwyYSKztGUYU2ocAiEApKYAAyj5fIYY4S7to%2BBBhl5qVlHFwQjCllQbZSeLwvwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADBZOAAR0nbR%2FBQtCrcA6CjfW0iag6GU3R7ZJzp0BIJJeCWYGhBvwh8l5ewhdnbG0yAd62hoiQVRtNRY9b%2BZgyQb5QojDG4azAkF7I143Lc0ma619%2F3zpcd1B5qW21hnQDCSeEqrPfY95z1w6a7evbcdmJDgRYAvr8Or7znplzinCB2Ibs%2Fxtjxc58S8dW%2Bu1et6U8YUl1wPTjKbvbAvjiJ5kzJrab%2B6NQBYYlpyDPTcoPgbgpNeal4p7fv9NgVHxKMCCwcwkxW3jV18Yxkv0qxC7KREqSO9F0wusmuVPjs8i6Tn9XXwQDywbkqaZjW9ZHsocAOcMpNF29Xo5QD3gBay8%2BoulxAx57TthvJLIOyhyrDuVvpvkGDQ5Uh4QxJWP%2FrhGbMCP9YXkqVz0qdRlbE2hGRy97vDd8YdNelrKr0WFVEMIELcqVkrOD8qZHdJlzSwmuQ%2Fysio%2BpuygLaUV5%2Bpy1baMTw7ZiXU2VA6SjWpArf2NB%2B72l1KarJye8%2Bkbdl8j1cXLtP%2FuY1KSl2fMx1Lxto3ByRXtOG8ZRPaA6Gg64h4nUiZjYCo2pZVSoZcUXQQgMwcPJ16B%2B76zDZx5RolUdqqXbP%2B97Jrd5j6wAr4WC0ZwzylP4kY6I7ieZUq9Wp0aMupOLM4qo3MNesvb4GOqUBwetLOdSYvcDscLKi7NLW4g77qTVTYVm25xFHwOQ4sSCJkR1fEtg7gIZty48ro7zovUs4Zakxf0Ln9Vqc5v7keAdl7hNoneDDkfQeR4fPjxJJ8H3281AYYseO6aCoLN6T0lLkEg%2FPWUAKzrIXzUg9%2Bt5BlKAASyInlalby%2BpHJKrH4yV%2BY0pFtRAw1XDCgHGqDKy6HlTYs4uvaVK4W0gy8pcXYcCU&X-Amz-Signature=e373054aa8816014068409b9af78fecacaaa6a0b40b88943c95d12a320533c2a&X-Amz-SignedHeaders=host&x-id=GetObject)
