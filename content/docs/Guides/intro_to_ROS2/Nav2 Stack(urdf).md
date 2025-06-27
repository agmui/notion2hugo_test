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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDQPBX2A%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDnBUfCdeZG3qXA1WNfqiqayKGQ7hWDVJMAsh5OT8H6PgIhALpXi4msF80nsJFZxlNDyQdY1CqJGIqdpNVuzfPDlZNcKv8DCHAQABoMNjM3NDIzMTgzODA1IgxM4pryaj%2F8er6P9kMq3ANiFcmf1EKjsQbNI9bcrc0uYi5iWAScgXKWjqzI%2BX7vVm%2FQSJ8poG%2BxEM8TNbHzzEnJyDwhqZv4maJ3euHMV8vPAjwE0gWH6MK6LU%2BRZPJtfTDaenwPHP29fn2qIIcf%2FWQlhxMvtKgndGs1yI03sgchRDUD3qwANVLXb8R8f4oJcxmjHzKFWFJ0ERbKiggUXhG5ZkbCOHB9sgD7Mip1RMUhcaxwj%2BI7ykKxxeA2e2saTSZ%2BibCmIvzbZ00aVBonFbYr8O6jbGTfbn7YI4TPXaR4bztF2pwhTHJj%2FgYWDnepTjN7Ku0OK3hlmUusD5n37KZnqQQZ5M61rCGPNsWquYIEDQv4ij9GtR7BtTOg0MTATda%2BB5AIso3M9PZrtiIcoz9iENG8NtfwIA9O2KmVwJOmQwa3pbLtKaqxDAItQs9pCJDamAGbNtTk0BVJM8RNzFS6Iy3vCB2DmO3QZBfBGqo%2BaVK0dSGDg%2Fu59HabWt9JPBYkHc%2FoVxjPSwohlagpvhkYqgJ8YaqBefSUn4w8sHETJnA6dahqlvx4%2BARf8kWyD6ooEENpL6xNeMHjYUcA8PCJXNR1eZWqAk9HMmtmjuYIOu4HJoZu2GmoCON36ofx6px6hh1usyxFljBybjCB9%2FjCBjqkAaMzhYgKgxd%2FibVmKTLumoHMMgryAML8BePLS9trPO7PJELhMfLU3op40Wr4KUxvHlJDRyVo2n9m73T4bwzLV0Ohj04YFsDFeX4RzH%2BGvbd3%2FmEiPOsSYkpPA9PqaTv1amRszuRTXLwP5ivdVm4IQCEUSl5uiz5ZcclRKLOu0cl%2FVjYokwKhJimr5Z%2F5Ux2fJwzd8QvaLlvGQlCe34g9qowkQLLX&X-Amz-Signature=d878f7c79369115ae8c63e41699fdcf9b7e13a65d504f5f7b03d97fa1ec50d7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDQPBX2A%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDnBUfCdeZG3qXA1WNfqiqayKGQ7hWDVJMAsh5OT8H6PgIhALpXi4msF80nsJFZxlNDyQdY1CqJGIqdpNVuzfPDlZNcKv8DCHAQABoMNjM3NDIzMTgzODA1IgxM4pryaj%2F8er6P9kMq3ANiFcmf1EKjsQbNI9bcrc0uYi5iWAScgXKWjqzI%2BX7vVm%2FQSJ8poG%2BxEM8TNbHzzEnJyDwhqZv4maJ3euHMV8vPAjwE0gWH6MK6LU%2BRZPJtfTDaenwPHP29fn2qIIcf%2FWQlhxMvtKgndGs1yI03sgchRDUD3qwANVLXb8R8f4oJcxmjHzKFWFJ0ERbKiggUXhG5ZkbCOHB9sgD7Mip1RMUhcaxwj%2BI7ykKxxeA2e2saTSZ%2BibCmIvzbZ00aVBonFbYr8O6jbGTfbn7YI4TPXaR4bztF2pwhTHJj%2FgYWDnepTjN7Ku0OK3hlmUusD5n37KZnqQQZ5M61rCGPNsWquYIEDQv4ij9GtR7BtTOg0MTATda%2BB5AIso3M9PZrtiIcoz9iENG8NtfwIA9O2KmVwJOmQwa3pbLtKaqxDAItQs9pCJDamAGbNtTk0BVJM8RNzFS6Iy3vCB2DmO3QZBfBGqo%2BaVK0dSGDg%2Fu59HabWt9JPBYkHc%2FoVxjPSwohlagpvhkYqgJ8YaqBefSUn4w8sHETJnA6dahqlvx4%2BARf8kWyD6ooEENpL6xNeMHjYUcA8PCJXNR1eZWqAk9HMmtmjuYIOu4HJoZu2GmoCON36ofx6px6hh1usyxFljBybjCB9%2FjCBjqkAaMzhYgKgxd%2FibVmKTLumoHMMgryAML8BePLS9trPO7PJELhMfLU3op40Wr4KUxvHlJDRyVo2n9m73T4bwzLV0Ohj04YFsDFeX4RzH%2BGvbd3%2FmEiPOsSYkpPA9PqaTv1amRszuRTXLwP5ivdVm4IQCEUSl5uiz5ZcclRKLOu0cl%2FVjYokwKhJimr5Z%2F5Ux2fJwzd8QvaLlvGQlCe34g9qowkQLLX&X-Amz-Signature=63ffde4832601c6c34c33a26ff0baa0f55825df3f524a3dcf9430fcc5cc61b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDQPBX2A%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDnBUfCdeZG3qXA1WNfqiqayKGQ7hWDVJMAsh5OT8H6PgIhALpXi4msF80nsJFZxlNDyQdY1CqJGIqdpNVuzfPDlZNcKv8DCHAQABoMNjM3NDIzMTgzODA1IgxM4pryaj%2F8er6P9kMq3ANiFcmf1EKjsQbNI9bcrc0uYi5iWAScgXKWjqzI%2BX7vVm%2FQSJ8poG%2BxEM8TNbHzzEnJyDwhqZv4maJ3euHMV8vPAjwE0gWH6MK6LU%2BRZPJtfTDaenwPHP29fn2qIIcf%2FWQlhxMvtKgndGs1yI03sgchRDUD3qwANVLXb8R8f4oJcxmjHzKFWFJ0ERbKiggUXhG5ZkbCOHB9sgD7Mip1RMUhcaxwj%2BI7ykKxxeA2e2saTSZ%2BibCmIvzbZ00aVBonFbYr8O6jbGTfbn7YI4TPXaR4bztF2pwhTHJj%2FgYWDnepTjN7Ku0OK3hlmUusD5n37KZnqQQZ5M61rCGPNsWquYIEDQv4ij9GtR7BtTOg0MTATda%2BB5AIso3M9PZrtiIcoz9iENG8NtfwIA9O2KmVwJOmQwa3pbLtKaqxDAItQs9pCJDamAGbNtTk0BVJM8RNzFS6Iy3vCB2DmO3QZBfBGqo%2BaVK0dSGDg%2Fu59HabWt9JPBYkHc%2FoVxjPSwohlagpvhkYqgJ8YaqBefSUn4w8sHETJnA6dahqlvx4%2BARf8kWyD6ooEENpL6xNeMHjYUcA8PCJXNR1eZWqAk9HMmtmjuYIOu4HJoZu2GmoCON36ofx6px6hh1usyxFljBybjCB9%2FjCBjqkAaMzhYgKgxd%2FibVmKTLumoHMMgryAML8BePLS9trPO7PJELhMfLU3op40Wr4KUxvHlJDRyVo2n9m73T4bwzLV0Ohj04YFsDFeX4RzH%2BGvbd3%2FmEiPOsSYkpPA9PqaTv1amRszuRTXLwP5ivdVm4IQCEUSl5uiz5ZcclRKLOu0cl%2FVjYokwKhJimr5Z%2F5Ux2fJwzd8QvaLlvGQlCe34g9qowkQLLX&X-Amz-Signature=9695a3a5422b16bbab426f333ce11d631699dd5af136dbe608984f7c985e481c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDQPBX2A%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDnBUfCdeZG3qXA1WNfqiqayKGQ7hWDVJMAsh5OT8H6PgIhALpXi4msF80nsJFZxlNDyQdY1CqJGIqdpNVuzfPDlZNcKv8DCHAQABoMNjM3NDIzMTgzODA1IgxM4pryaj%2F8er6P9kMq3ANiFcmf1EKjsQbNI9bcrc0uYi5iWAScgXKWjqzI%2BX7vVm%2FQSJ8poG%2BxEM8TNbHzzEnJyDwhqZv4maJ3euHMV8vPAjwE0gWH6MK6LU%2BRZPJtfTDaenwPHP29fn2qIIcf%2FWQlhxMvtKgndGs1yI03sgchRDUD3qwANVLXb8R8f4oJcxmjHzKFWFJ0ERbKiggUXhG5ZkbCOHB9sgD7Mip1RMUhcaxwj%2BI7ykKxxeA2e2saTSZ%2BibCmIvzbZ00aVBonFbYr8O6jbGTfbn7YI4TPXaR4bztF2pwhTHJj%2FgYWDnepTjN7Ku0OK3hlmUusD5n37KZnqQQZ5M61rCGPNsWquYIEDQv4ij9GtR7BtTOg0MTATda%2BB5AIso3M9PZrtiIcoz9iENG8NtfwIA9O2KmVwJOmQwa3pbLtKaqxDAItQs9pCJDamAGbNtTk0BVJM8RNzFS6Iy3vCB2DmO3QZBfBGqo%2BaVK0dSGDg%2Fu59HabWt9JPBYkHc%2FoVxjPSwohlagpvhkYqgJ8YaqBefSUn4w8sHETJnA6dahqlvx4%2BARf8kWyD6ooEENpL6xNeMHjYUcA8PCJXNR1eZWqAk9HMmtmjuYIOu4HJoZu2GmoCON36ofx6px6hh1usyxFljBybjCB9%2FjCBjqkAaMzhYgKgxd%2FibVmKTLumoHMMgryAML8BePLS9trPO7PJELhMfLU3op40Wr4KUxvHlJDRyVo2n9m73T4bwzLV0Ohj04YFsDFeX4RzH%2BGvbd3%2FmEiPOsSYkpPA9PqaTv1amRszuRTXLwP5ivdVm4IQCEUSl5uiz5ZcclRKLOu0cl%2FVjYokwKhJimr5Z%2F5Ux2fJwzd8QvaLlvGQlCe34g9qowkQLLX&X-Amz-Signature=b5a68fe9503441f3ec552f093837e8ad173fa88920104ed3ac6e389a9e60d850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDQPBX2A%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDnBUfCdeZG3qXA1WNfqiqayKGQ7hWDVJMAsh5OT8H6PgIhALpXi4msF80nsJFZxlNDyQdY1CqJGIqdpNVuzfPDlZNcKv8DCHAQABoMNjM3NDIzMTgzODA1IgxM4pryaj%2F8er6P9kMq3ANiFcmf1EKjsQbNI9bcrc0uYi5iWAScgXKWjqzI%2BX7vVm%2FQSJ8poG%2BxEM8TNbHzzEnJyDwhqZv4maJ3euHMV8vPAjwE0gWH6MK6LU%2BRZPJtfTDaenwPHP29fn2qIIcf%2FWQlhxMvtKgndGs1yI03sgchRDUD3qwANVLXb8R8f4oJcxmjHzKFWFJ0ERbKiggUXhG5ZkbCOHB9sgD7Mip1RMUhcaxwj%2BI7ykKxxeA2e2saTSZ%2BibCmIvzbZ00aVBonFbYr8O6jbGTfbn7YI4TPXaR4bztF2pwhTHJj%2FgYWDnepTjN7Ku0OK3hlmUusD5n37KZnqQQZ5M61rCGPNsWquYIEDQv4ij9GtR7BtTOg0MTATda%2BB5AIso3M9PZrtiIcoz9iENG8NtfwIA9O2KmVwJOmQwa3pbLtKaqxDAItQs9pCJDamAGbNtTk0BVJM8RNzFS6Iy3vCB2DmO3QZBfBGqo%2BaVK0dSGDg%2Fu59HabWt9JPBYkHc%2FoVxjPSwohlagpvhkYqgJ8YaqBefSUn4w8sHETJnA6dahqlvx4%2BARf8kWyD6ooEENpL6xNeMHjYUcA8PCJXNR1eZWqAk9HMmtmjuYIOu4HJoZu2GmoCON36ofx6px6hh1usyxFljBybjCB9%2FjCBjqkAaMzhYgKgxd%2FibVmKTLumoHMMgryAML8BePLS9trPO7PJELhMfLU3op40Wr4KUxvHlJDRyVo2n9m73T4bwzLV0Ohj04YFsDFeX4RzH%2BGvbd3%2FmEiPOsSYkpPA9PqaTv1amRszuRTXLwP5ivdVm4IQCEUSl5uiz5ZcclRKLOu0cl%2FVjYokwKhJimr5Z%2F5Ux2fJwzd8QvaLlvGQlCe34g9qowkQLLX&X-Amz-Signature=fb3c32a0481be9d14a4b92ee1c9b925980e09c143ba1a2221e77809b0659a580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDQPBX2A%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDnBUfCdeZG3qXA1WNfqiqayKGQ7hWDVJMAsh5OT8H6PgIhALpXi4msF80nsJFZxlNDyQdY1CqJGIqdpNVuzfPDlZNcKv8DCHAQABoMNjM3NDIzMTgzODA1IgxM4pryaj%2F8er6P9kMq3ANiFcmf1EKjsQbNI9bcrc0uYi5iWAScgXKWjqzI%2BX7vVm%2FQSJ8poG%2BxEM8TNbHzzEnJyDwhqZv4maJ3euHMV8vPAjwE0gWH6MK6LU%2BRZPJtfTDaenwPHP29fn2qIIcf%2FWQlhxMvtKgndGs1yI03sgchRDUD3qwANVLXb8R8f4oJcxmjHzKFWFJ0ERbKiggUXhG5ZkbCOHB9sgD7Mip1RMUhcaxwj%2BI7ykKxxeA2e2saTSZ%2BibCmIvzbZ00aVBonFbYr8O6jbGTfbn7YI4TPXaR4bztF2pwhTHJj%2FgYWDnepTjN7Ku0OK3hlmUusD5n37KZnqQQZ5M61rCGPNsWquYIEDQv4ij9GtR7BtTOg0MTATda%2BB5AIso3M9PZrtiIcoz9iENG8NtfwIA9O2KmVwJOmQwa3pbLtKaqxDAItQs9pCJDamAGbNtTk0BVJM8RNzFS6Iy3vCB2DmO3QZBfBGqo%2BaVK0dSGDg%2Fu59HabWt9JPBYkHc%2FoVxjPSwohlagpvhkYqgJ8YaqBefSUn4w8sHETJnA6dahqlvx4%2BARf8kWyD6ooEENpL6xNeMHjYUcA8PCJXNR1eZWqAk9HMmtmjuYIOu4HJoZu2GmoCON36ofx6px6hh1usyxFljBybjCB9%2FjCBjqkAaMzhYgKgxd%2FibVmKTLumoHMMgryAML8BePLS9trPO7PJELhMfLU3op40Wr4KUxvHlJDRyVo2n9m73T4bwzLV0Ohj04YFsDFeX4RzH%2BGvbd3%2FmEiPOsSYkpPA9PqaTv1amRszuRTXLwP5ivdVm4IQCEUSl5uiz5ZcclRKLOu0cl%2FVjYokwKhJimr5Z%2F5Ux2fJwzd8QvaLlvGQlCe34g9qowkQLLX&X-Amz-Signature=3eece0bfcdba2fdda7342cc9fb9464d104485c57acd7157cf187a7f79f62e14b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
