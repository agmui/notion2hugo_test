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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ4SKSE3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHdLyLpwQz1YsCFajc1fbqvf%2BmqrLpeLUHeyiF7E01nmAiEA3JeBxjkI2WOFAO0R56Qbb%2FEVxQgtOUCq4let1UeixxoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeidqUHoKjyxcNTryrcA0ZiUgXGg1uPvTr%2FQMVUOZ2uzx3piTPE4zQFvZYsWxsVzKjUXHKbD57ypuDCbRUVQBWmwtpqZmVJlaSxO7q2477QCjJC3iMPAyhGgWivCdxxIRSDd4KcSQRwdSyFweSiYnIM8aHysFd1Qj8KmYCSUJMJ9OVZmG17ZTyMtfmJQiJJfvWFPLpheC5Acuj0wpPyLAoWIEPb%2FSxZxTwvz3T1hdBqo3NN2gMzr%2F9H%2BvJeTNuj6fjpQEEewm3Mx4PkxpASDYLJSpar05paD12IDCeQCEYWD6CrmCFHpy1k6wpZch%2BQ0pSYa29L8NEB0RtBz79ON%2Bm8bfdKMVDHNza4oCqISLTvEkNn%2BgQK1Qdg0aubCYmnD0B%2FZUyqAZ2F51SQt91gun9d692CQWTII%2FX%2F3%2B44E6HrZQ%2F6Wv00jVcJ3RA1rQGBjXbJpGS4zKvNwBt2xX8R9%2FatHTxDUZMOPLWZjDboN9P07BvteofumnrIULcSLasgC9Y3Fncw%2BVLUceEnPxa6y0Ej8TMpAHmkDvwOTc%2FSEn9V8%2FrLY60RGor%2FMn%2BLWv7pQgwOGHB9reYNDWKMAByotf97P2zPyiw4nf%2FMqPGehQ4L1C1c%2FBn6moWuKfsuhiNzPtxNwO8NHD%2BOE6YRMOKZ0MAGOqUBmj8WXYhRL%2FWDV8SDJ7eL2kcyYlEkUHy6ljCswWGuVWpOE7glWCy3e1QjGEOR4ZqnZrOpJVr%2BSKUadsdyq7xdXbVttN6nHqSTCAK%2FukPxpWGxaPvKQuCAbXPIR0NZdaRiP4LbHGNTIaDHwBXwKr9osqT4tbKeiTqKpDLHTIwf9iCy2Dol6iRMZDTq5aS%2FlUhlvGbjUH%2FrDLrp18tizWRh3oXYhCox&X-Amz-Signature=665d42a84cb2e3ad5e62a4bf6ae07835caca348b4294f1fe0ade96a0698a5694&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ4SKSE3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHdLyLpwQz1YsCFajc1fbqvf%2BmqrLpeLUHeyiF7E01nmAiEA3JeBxjkI2WOFAO0R56Qbb%2FEVxQgtOUCq4let1UeixxoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeidqUHoKjyxcNTryrcA0ZiUgXGg1uPvTr%2FQMVUOZ2uzx3piTPE4zQFvZYsWxsVzKjUXHKbD57ypuDCbRUVQBWmwtpqZmVJlaSxO7q2477QCjJC3iMPAyhGgWivCdxxIRSDd4KcSQRwdSyFweSiYnIM8aHysFd1Qj8KmYCSUJMJ9OVZmG17ZTyMtfmJQiJJfvWFPLpheC5Acuj0wpPyLAoWIEPb%2FSxZxTwvz3T1hdBqo3NN2gMzr%2F9H%2BvJeTNuj6fjpQEEewm3Mx4PkxpASDYLJSpar05paD12IDCeQCEYWD6CrmCFHpy1k6wpZch%2BQ0pSYa29L8NEB0RtBz79ON%2Bm8bfdKMVDHNza4oCqISLTvEkNn%2BgQK1Qdg0aubCYmnD0B%2FZUyqAZ2F51SQt91gun9d692CQWTII%2FX%2F3%2B44E6HrZQ%2F6Wv00jVcJ3RA1rQGBjXbJpGS4zKvNwBt2xX8R9%2FatHTxDUZMOPLWZjDboN9P07BvteofumnrIULcSLasgC9Y3Fncw%2BVLUceEnPxa6y0Ej8TMpAHmkDvwOTc%2FSEn9V8%2FrLY60RGor%2FMn%2BLWv7pQgwOGHB9reYNDWKMAByotf97P2zPyiw4nf%2FMqPGehQ4L1C1c%2FBn6moWuKfsuhiNzPtxNwO8NHD%2BOE6YRMOKZ0MAGOqUBmj8WXYhRL%2FWDV8SDJ7eL2kcyYlEkUHy6ljCswWGuVWpOE7glWCy3e1QjGEOR4ZqnZrOpJVr%2BSKUadsdyq7xdXbVttN6nHqSTCAK%2FukPxpWGxaPvKQuCAbXPIR0NZdaRiP4LbHGNTIaDHwBXwKr9osqT4tbKeiTqKpDLHTIwf9iCy2Dol6iRMZDTq5aS%2FlUhlvGbjUH%2FrDLrp18tizWRh3oXYhCox&X-Amz-Signature=07ee1c39beae7562924b470c6ae2da176f894fa173bb1a7f7189b6c5f824a5b9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ4SKSE3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHdLyLpwQz1YsCFajc1fbqvf%2BmqrLpeLUHeyiF7E01nmAiEA3JeBxjkI2WOFAO0R56Qbb%2FEVxQgtOUCq4let1UeixxoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeidqUHoKjyxcNTryrcA0ZiUgXGg1uPvTr%2FQMVUOZ2uzx3piTPE4zQFvZYsWxsVzKjUXHKbD57ypuDCbRUVQBWmwtpqZmVJlaSxO7q2477QCjJC3iMPAyhGgWivCdxxIRSDd4KcSQRwdSyFweSiYnIM8aHysFd1Qj8KmYCSUJMJ9OVZmG17ZTyMtfmJQiJJfvWFPLpheC5Acuj0wpPyLAoWIEPb%2FSxZxTwvz3T1hdBqo3NN2gMzr%2F9H%2BvJeTNuj6fjpQEEewm3Mx4PkxpASDYLJSpar05paD12IDCeQCEYWD6CrmCFHpy1k6wpZch%2BQ0pSYa29L8NEB0RtBz79ON%2Bm8bfdKMVDHNza4oCqISLTvEkNn%2BgQK1Qdg0aubCYmnD0B%2FZUyqAZ2F51SQt91gun9d692CQWTII%2FX%2F3%2B44E6HrZQ%2F6Wv00jVcJ3RA1rQGBjXbJpGS4zKvNwBt2xX8R9%2FatHTxDUZMOPLWZjDboN9P07BvteofumnrIULcSLasgC9Y3Fncw%2BVLUceEnPxa6y0Ej8TMpAHmkDvwOTc%2FSEn9V8%2FrLY60RGor%2FMn%2BLWv7pQgwOGHB9reYNDWKMAByotf97P2zPyiw4nf%2FMqPGehQ4L1C1c%2FBn6moWuKfsuhiNzPtxNwO8NHD%2BOE6YRMOKZ0MAGOqUBmj8WXYhRL%2FWDV8SDJ7eL2kcyYlEkUHy6ljCswWGuVWpOE7glWCy3e1QjGEOR4ZqnZrOpJVr%2BSKUadsdyq7xdXbVttN6nHqSTCAK%2FukPxpWGxaPvKQuCAbXPIR0NZdaRiP4LbHGNTIaDHwBXwKr9osqT4tbKeiTqKpDLHTIwf9iCy2Dol6iRMZDTq5aS%2FlUhlvGbjUH%2FrDLrp18tizWRh3oXYhCox&X-Amz-Signature=564a38c572481d0194b5f57c01c29d9082dbc8b24bfcd527f38252040a3abeb9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ4SKSE3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHdLyLpwQz1YsCFajc1fbqvf%2BmqrLpeLUHeyiF7E01nmAiEA3JeBxjkI2WOFAO0R56Qbb%2FEVxQgtOUCq4let1UeixxoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeidqUHoKjyxcNTryrcA0ZiUgXGg1uPvTr%2FQMVUOZ2uzx3piTPE4zQFvZYsWxsVzKjUXHKbD57ypuDCbRUVQBWmwtpqZmVJlaSxO7q2477QCjJC3iMPAyhGgWivCdxxIRSDd4KcSQRwdSyFweSiYnIM8aHysFd1Qj8KmYCSUJMJ9OVZmG17ZTyMtfmJQiJJfvWFPLpheC5Acuj0wpPyLAoWIEPb%2FSxZxTwvz3T1hdBqo3NN2gMzr%2F9H%2BvJeTNuj6fjpQEEewm3Mx4PkxpASDYLJSpar05paD12IDCeQCEYWD6CrmCFHpy1k6wpZch%2BQ0pSYa29L8NEB0RtBz79ON%2Bm8bfdKMVDHNza4oCqISLTvEkNn%2BgQK1Qdg0aubCYmnD0B%2FZUyqAZ2F51SQt91gun9d692CQWTII%2FX%2F3%2B44E6HrZQ%2F6Wv00jVcJ3RA1rQGBjXbJpGS4zKvNwBt2xX8R9%2FatHTxDUZMOPLWZjDboN9P07BvteofumnrIULcSLasgC9Y3Fncw%2BVLUceEnPxa6y0Ej8TMpAHmkDvwOTc%2FSEn9V8%2FrLY60RGor%2FMn%2BLWv7pQgwOGHB9reYNDWKMAByotf97P2zPyiw4nf%2FMqPGehQ4L1C1c%2FBn6moWuKfsuhiNzPtxNwO8NHD%2BOE6YRMOKZ0MAGOqUBmj8WXYhRL%2FWDV8SDJ7eL2kcyYlEkUHy6ljCswWGuVWpOE7glWCy3e1QjGEOR4ZqnZrOpJVr%2BSKUadsdyq7xdXbVttN6nHqSTCAK%2FukPxpWGxaPvKQuCAbXPIR0NZdaRiP4LbHGNTIaDHwBXwKr9osqT4tbKeiTqKpDLHTIwf9iCy2Dol6iRMZDTq5aS%2FlUhlvGbjUH%2FrDLrp18tizWRh3oXYhCox&X-Amz-Signature=d231e694c11791bedbbb3c43744ecfc90831f5def7f252ef257c7114b975e8c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ4SKSE3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHdLyLpwQz1YsCFajc1fbqvf%2BmqrLpeLUHeyiF7E01nmAiEA3JeBxjkI2WOFAO0R56Qbb%2FEVxQgtOUCq4let1UeixxoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeidqUHoKjyxcNTryrcA0ZiUgXGg1uPvTr%2FQMVUOZ2uzx3piTPE4zQFvZYsWxsVzKjUXHKbD57ypuDCbRUVQBWmwtpqZmVJlaSxO7q2477QCjJC3iMPAyhGgWivCdxxIRSDd4KcSQRwdSyFweSiYnIM8aHysFd1Qj8KmYCSUJMJ9OVZmG17ZTyMtfmJQiJJfvWFPLpheC5Acuj0wpPyLAoWIEPb%2FSxZxTwvz3T1hdBqo3NN2gMzr%2F9H%2BvJeTNuj6fjpQEEewm3Mx4PkxpASDYLJSpar05paD12IDCeQCEYWD6CrmCFHpy1k6wpZch%2BQ0pSYa29L8NEB0RtBz79ON%2Bm8bfdKMVDHNza4oCqISLTvEkNn%2BgQK1Qdg0aubCYmnD0B%2FZUyqAZ2F51SQt91gun9d692CQWTII%2FX%2F3%2B44E6HrZQ%2F6Wv00jVcJ3RA1rQGBjXbJpGS4zKvNwBt2xX8R9%2FatHTxDUZMOPLWZjDboN9P07BvteofumnrIULcSLasgC9Y3Fncw%2BVLUceEnPxa6y0Ej8TMpAHmkDvwOTc%2FSEn9V8%2FrLY60RGor%2FMn%2BLWv7pQgwOGHB9reYNDWKMAByotf97P2zPyiw4nf%2FMqPGehQ4L1C1c%2FBn6moWuKfsuhiNzPtxNwO8NHD%2BOE6YRMOKZ0MAGOqUBmj8WXYhRL%2FWDV8SDJ7eL2kcyYlEkUHy6ljCswWGuVWpOE7glWCy3e1QjGEOR4ZqnZrOpJVr%2BSKUadsdyq7xdXbVttN6nHqSTCAK%2FukPxpWGxaPvKQuCAbXPIR0NZdaRiP4LbHGNTIaDHwBXwKr9osqT4tbKeiTqKpDLHTIwf9iCy2Dol6iRMZDTq5aS%2FlUhlvGbjUH%2FrDLrp18tizWRh3oXYhCox&X-Amz-Signature=8e820a0fc83fb64983b0812a153fb2255f7e76f76e80f386dc8b00db2d839fe9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ4SKSE3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHdLyLpwQz1YsCFajc1fbqvf%2BmqrLpeLUHeyiF7E01nmAiEA3JeBxjkI2WOFAO0R56Qbb%2FEVxQgtOUCq4let1UeixxoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeidqUHoKjyxcNTryrcA0ZiUgXGg1uPvTr%2FQMVUOZ2uzx3piTPE4zQFvZYsWxsVzKjUXHKbD57ypuDCbRUVQBWmwtpqZmVJlaSxO7q2477QCjJC3iMPAyhGgWivCdxxIRSDd4KcSQRwdSyFweSiYnIM8aHysFd1Qj8KmYCSUJMJ9OVZmG17ZTyMtfmJQiJJfvWFPLpheC5Acuj0wpPyLAoWIEPb%2FSxZxTwvz3T1hdBqo3NN2gMzr%2F9H%2BvJeTNuj6fjpQEEewm3Mx4PkxpASDYLJSpar05paD12IDCeQCEYWD6CrmCFHpy1k6wpZch%2BQ0pSYa29L8NEB0RtBz79ON%2Bm8bfdKMVDHNza4oCqISLTvEkNn%2BgQK1Qdg0aubCYmnD0B%2FZUyqAZ2F51SQt91gun9d692CQWTII%2FX%2F3%2B44E6HrZQ%2F6Wv00jVcJ3RA1rQGBjXbJpGS4zKvNwBt2xX8R9%2FatHTxDUZMOPLWZjDboN9P07BvteofumnrIULcSLasgC9Y3Fncw%2BVLUceEnPxa6y0Ej8TMpAHmkDvwOTc%2FSEn9V8%2FrLY60RGor%2FMn%2BLWv7pQgwOGHB9reYNDWKMAByotf97P2zPyiw4nf%2FMqPGehQ4L1C1c%2FBn6moWuKfsuhiNzPtxNwO8NHD%2BOE6YRMOKZ0MAGOqUBmj8WXYhRL%2FWDV8SDJ7eL2kcyYlEkUHy6ljCswWGuVWpOE7glWCy3e1QjGEOR4ZqnZrOpJVr%2BSKUadsdyq7xdXbVttN6nHqSTCAK%2FukPxpWGxaPvKQuCAbXPIR0NZdaRiP4LbHGNTIaDHwBXwKr9osqT4tbKeiTqKpDLHTIwf9iCy2Dol6iRMZDTq5aS%2FlUhlvGbjUH%2FrDLrp18tizWRh3oXYhCox&X-Amz-Signature=59c9029cbb79cb1e8f0dbb468a61e254312f8339ab676b406b823aa9c4208c26&X-Amz-SignedHeaders=host&x-id=GetObject)
