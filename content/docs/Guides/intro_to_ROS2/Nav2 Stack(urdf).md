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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2LX5K32%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVD31b5PZoPpNBBy9EjO6Y8oXmvaYo6NTRhLT%2BFW%2FkRAiASbhjG9qavo2z2meD1gtpHkTlIXayFx%2F9woAUv5QH8uiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F693VDEgpIE3c2PLKtwDlrVLsq%2Fz9DgJXG7%2FMv8WFfSarjhWWOHxxZ0W1hZj19TwTv%2FOeYSWM11KmLqeUN9wK9hHKUyHJNcHFAS%2Fa3Sq%2BtDVHrdX%2FisquE6NhBg6kjpakB4yyKc6ulUWLN6fMHCsbNtncEhxSzMubIlChNCAuzk4GF4jSnqf%2FhlIkH7PYh5ErGcFfYawStpBzdUp%2FAwL5GclGsgwtLGQCD5cNkO14h6zdgraTPFxx0WUd%2FFKU0AUuAY0BfkkJ09Hptj%2F0IGELBWen2aLmhY0rtr%2F0T89ZEhNaZMtjpFIjMdZccFbygVYj4Eb2GNSJLhN0%2BfYwqDFDv78kEgg8AYKtj8gDgeke%2BkR91VEWFNQbbYgPfeO7sBbt5pL9GLQ6XGCgYqO4EIEVYiZzn7Dprt9tAXeHVRyrmnBYGLkc1lg6tRynIV6nD9j1tkhqSmCoYG1CNfsh5PZrXzoP%2B7WwX6QZKeXn7c4JNnjm8V0ryf8fXJn1BmN%2FZmIXkWQSrG6IIYkAgVYpsONDZGOek5cR6ABYnK6PyUl6dHpmArcgF9%2BroXUivsfuO2%2BzvEwkvqLDHTySRZ8V9VDa8rhApPSdC1isyUJCPxXO7l0S9nMs8ZvS6jgeHnuFxQJekueWIcGDJaCGQgw35usvQY6pgHYFonL0464yR%2BaMeLh5VVefFx5t5Qa43c%2FuzIZWBEI9gr7M2wgIiEkbFlLPf%2Bf2fnmWQJY%2FZzFyuY0QtZPjpxXt%2F%2ByDz3TKJMVyZEB82fTKphMQofF7icbNl3kYpy6FxQ1MLp7NFbaXRAr22HUnFEg0u0UnuQ26bI0I%2BTFriIDOOyiPWr2dOWFPIyhqXiGWWhtQFu6TqjaDRBo%2Fq5NSDrYX%2FT6FZ8Q&X-Amz-Signature=c7c0daf0c595c3975e89e3802e5263cbd1e79f6415b31c3ca606ea5a44c422f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2LX5K32%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVD31b5PZoPpNBBy9EjO6Y8oXmvaYo6NTRhLT%2BFW%2FkRAiASbhjG9qavo2z2meD1gtpHkTlIXayFx%2F9woAUv5QH8uiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F693VDEgpIE3c2PLKtwDlrVLsq%2Fz9DgJXG7%2FMv8WFfSarjhWWOHxxZ0W1hZj19TwTv%2FOeYSWM11KmLqeUN9wK9hHKUyHJNcHFAS%2Fa3Sq%2BtDVHrdX%2FisquE6NhBg6kjpakB4yyKc6ulUWLN6fMHCsbNtncEhxSzMubIlChNCAuzk4GF4jSnqf%2FhlIkH7PYh5ErGcFfYawStpBzdUp%2FAwL5GclGsgwtLGQCD5cNkO14h6zdgraTPFxx0WUd%2FFKU0AUuAY0BfkkJ09Hptj%2F0IGELBWen2aLmhY0rtr%2F0T89ZEhNaZMtjpFIjMdZccFbygVYj4Eb2GNSJLhN0%2BfYwqDFDv78kEgg8AYKtj8gDgeke%2BkR91VEWFNQbbYgPfeO7sBbt5pL9GLQ6XGCgYqO4EIEVYiZzn7Dprt9tAXeHVRyrmnBYGLkc1lg6tRynIV6nD9j1tkhqSmCoYG1CNfsh5PZrXzoP%2B7WwX6QZKeXn7c4JNnjm8V0ryf8fXJn1BmN%2FZmIXkWQSrG6IIYkAgVYpsONDZGOek5cR6ABYnK6PyUl6dHpmArcgF9%2BroXUivsfuO2%2BzvEwkvqLDHTySRZ8V9VDa8rhApPSdC1isyUJCPxXO7l0S9nMs8ZvS6jgeHnuFxQJekueWIcGDJaCGQgw35usvQY6pgHYFonL0464yR%2BaMeLh5VVefFx5t5Qa43c%2FuzIZWBEI9gr7M2wgIiEkbFlLPf%2Bf2fnmWQJY%2FZzFyuY0QtZPjpxXt%2F%2ByDz3TKJMVyZEB82fTKphMQofF7icbNl3kYpy6FxQ1MLp7NFbaXRAr22HUnFEg0u0UnuQ26bI0I%2BTFriIDOOyiPWr2dOWFPIyhqXiGWWhtQFu6TqjaDRBo%2Fq5NSDrYX%2FT6FZ8Q&X-Amz-Signature=0625a7a20cf829b733e769fdb7f843030352b0d37ab18620933fdaba6f6b5c15&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2LX5K32%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVD31b5PZoPpNBBy9EjO6Y8oXmvaYo6NTRhLT%2BFW%2FkRAiASbhjG9qavo2z2meD1gtpHkTlIXayFx%2F9woAUv5QH8uiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F693VDEgpIE3c2PLKtwDlrVLsq%2Fz9DgJXG7%2FMv8WFfSarjhWWOHxxZ0W1hZj19TwTv%2FOeYSWM11KmLqeUN9wK9hHKUyHJNcHFAS%2Fa3Sq%2BtDVHrdX%2FisquE6NhBg6kjpakB4yyKc6ulUWLN6fMHCsbNtncEhxSzMubIlChNCAuzk4GF4jSnqf%2FhlIkH7PYh5ErGcFfYawStpBzdUp%2FAwL5GclGsgwtLGQCD5cNkO14h6zdgraTPFxx0WUd%2FFKU0AUuAY0BfkkJ09Hptj%2F0IGELBWen2aLmhY0rtr%2F0T89ZEhNaZMtjpFIjMdZccFbygVYj4Eb2GNSJLhN0%2BfYwqDFDv78kEgg8AYKtj8gDgeke%2BkR91VEWFNQbbYgPfeO7sBbt5pL9GLQ6XGCgYqO4EIEVYiZzn7Dprt9tAXeHVRyrmnBYGLkc1lg6tRynIV6nD9j1tkhqSmCoYG1CNfsh5PZrXzoP%2B7WwX6QZKeXn7c4JNnjm8V0ryf8fXJn1BmN%2FZmIXkWQSrG6IIYkAgVYpsONDZGOek5cR6ABYnK6PyUl6dHpmArcgF9%2BroXUivsfuO2%2BzvEwkvqLDHTySRZ8V9VDa8rhApPSdC1isyUJCPxXO7l0S9nMs8ZvS6jgeHnuFxQJekueWIcGDJaCGQgw35usvQY6pgHYFonL0464yR%2BaMeLh5VVefFx5t5Qa43c%2FuzIZWBEI9gr7M2wgIiEkbFlLPf%2Bf2fnmWQJY%2FZzFyuY0QtZPjpxXt%2F%2ByDz3TKJMVyZEB82fTKphMQofF7icbNl3kYpy6FxQ1MLp7NFbaXRAr22HUnFEg0u0UnuQ26bI0I%2BTFriIDOOyiPWr2dOWFPIyhqXiGWWhtQFu6TqjaDRBo%2Fq5NSDrYX%2FT6FZ8Q&X-Amz-Signature=96964fe58d62ba46eebbc4d908b3c30a42825db85d510eb405ec07b9b25aef1e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2LX5K32%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVD31b5PZoPpNBBy9EjO6Y8oXmvaYo6NTRhLT%2BFW%2FkRAiASbhjG9qavo2z2meD1gtpHkTlIXayFx%2F9woAUv5QH8uiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F693VDEgpIE3c2PLKtwDlrVLsq%2Fz9DgJXG7%2FMv8WFfSarjhWWOHxxZ0W1hZj19TwTv%2FOeYSWM11KmLqeUN9wK9hHKUyHJNcHFAS%2Fa3Sq%2BtDVHrdX%2FisquE6NhBg6kjpakB4yyKc6ulUWLN6fMHCsbNtncEhxSzMubIlChNCAuzk4GF4jSnqf%2FhlIkH7PYh5ErGcFfYawStpBzdUp%2FAwL5GclGsgwtLGQCD5cNkO14h6zdgraTPFxx0WUd%2FFKU0AUuAY0BfkkJ09Hptj%2F0IGELBWen2aLmhY0rtr%2F0T89ZEhNaZMtjpFIjMdZccFbygVYj4Eb2GNSJLhN0%2BfYwqDFDv78kEgg8AYKtj8gDgeke%2BkR91VEWFNQbbYgPfeO7sBbt5pL9GLQ6XGCgYqO4EIEVYiZzn7Dprt9tAXeHVRyrmnBYGLkc1lg6tRynIV6nD9j1tkhqSmCoYG1CNfsh5PZrXzoP%2B7WwX6QZKeXn7c4JNnjm8V0ryf8fXJn1BmN%2FZmIXkWQSrG6IIYkAgVYpsONDZGOek5cR6ABYnK6PyUl6dHpmArcgF9%2BroXUivsfuO2%2BzvEwkvqLDHTySRZ8V9VDa8rhApPSdC1isyUJCPxXO7l0S9nMs8ZvS6jgeHnuFxQJekueWIcGDJaCGQgw35usvQY6pgHYFonL0464yR%2BaMeLh5VVefFx5t5Qa43c%2FuzIZWBEI9gr7M2wgIiEkbFlLPf%2Bf2fnmWQJY%2FZzFyuY0QtZPjpxXt%2F%2ByDz3TKJMVyZEB82fTKphMQofF7icbNl3kYpy6FxQ1MLp7NFbaXRAr22HUnFEg0u0UnuQ26bI0I%2BTFriIDOOyiPWr2dOWFPIyhqXiGWWhtQFu6TqjaDRBo%2Fq5NSDrYX%2FT6FZ8Q&X-Amz-Signature=46a94c96ae08b34682e499f7b2e633b54dd073cdc8a23039584ae7be16243a6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2LX5K32%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVD31b5PZoPpNBBy9EjO6Y8oXmvaYo6NTRhLT%2BFW%2FkRAiASbhjG9qavo2z2meD1gtpHkTlIXayFx%2F9woAUv5QH8uiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F693VDEgpIE3c2PLKtwDlrVLsq%2Fz9DgJXG7%2FMv8WFfSarjhWWOHxxZ0W1hZj19TwTv%2FOeYSWM11KmLqeUN9wK9hHKUyHJNcHFAS%2Fa3Sq%2BtDVHrdX%2FisquE6NhBg6kjpakB4yyKc6ulUWLN6fMHCsbNtncEhxSzMubIlChNCAuzk4GF4jSnqf%2FhlIkH7PYh5ErGcFfYawStpBzdUp%2FAwL5GclGsgwtLGQCD5cNkO14h6zdgraTPFxx0WUd%2FFKU0AUuAY0BfkkJ09Hptj%2F0IGELBWen2aLmhY0rtr%2F0T89ZEhNaZMtjpFIjMdZccFbygVYj4Eb2GNSJLhN0%2BfYwqDFDv78kEgg8AYKtj8gDgeke%2BkR91VEWFNQbbYgPfeO7sBbt5pL9GLQ6XGCgYqO4EIEVYiZzn7Dprt9tAXeHVRyrmnBYGLkc1lg6tRynIV6nD9j1tkhqSmCoYG1CNfsh5PZrXzoP%2B7WwX6QZKeXn7c4JNnjm8V0ryf8fXJn1BmN%2FZmIXkWQSrG6IIYkAgVYpsONDZGOek5cR6ABYnK6PyUl6dHpmArcgF9%2BroXUivsfuO2%2BzvEwkvqLDHTySRZ8V9VDa8rhApPSdC1isyUJCPxXO7l0S9nMs8ZvS6jgeHnuFxQJekueWIcGDJaCGQgw35usvQY6pgHYFonL0464yR%2BaMeLh5VVefFx5t5Qa43c%2FuzIZWBEI9gr7M2wgIiEkbFlLPf%2Bf2fnmWQJY%2FZzFyuY0QtZPjpxXt%2F%2ByDz3TKJMVyZEB82fTKphMQofF7icbNl3kYpy6FxQ1MLp7NFbaXRAr22HUnFEg0u0UnuQ26bI0I%2BTFriIDOOyiPWr2dOWFPIyhqXiGWWhtQFu6TqjaDRBo%2Fq5NSDrYX%2FT6FZ8Q&X-Amz-Signature=0a4a212b3c0d208f02d1c454418c49002e2666c3313ea8dd1a5da58b05623781&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2LX5K32%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVD31b5PZoPpNBBy9EjO6Y8oXmvaYo6NTRhLT%2BFW%2FkRAiASbhjG9qavo2z2meD1gtpHkTlIXayFx%2F9woAUv5QH8uiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F693VDEgpIE3c2PLKtwDlrVLsq%2Fz9DgJXG7%2FMv8WFfSarjhWWOHxxZ0W1hZj19TwTv%2FOeYSWM11KmLqeUN9wK9hHKUyHJNcHFAS%2Fa3Sq%2BtDVHrdX%2FisquE6NhBg6kjpakB4yyKc6ulUWLN6fMHCsbNtncEhxSzMubIlChNCAuzk4GF4jSnqf%2FhlIkH7PYh5ErGcFfYawStpBzdUp%2FAwL5GclGsgwtLGQCD5cNkO14h6zdgraTPFxx0WUd%2FFKU0AUuAY0BfkkJ09Hptj%2F0IGELBWen2aLmhY0rtr%2F0T89ZEhNaZMtjpFIjMdZccFbygVYj4Eb2GNSJLhN0%2BfYwqDFDv78kEgg8AYKtj8gDgeke%2BkR91VEWFNQbbYgPfeO7sBbt5pL9GLQ6XGCgYqO4EIEVYiZzn7Dprt9tAXeHVRyrmnBYGLkc1lg6tRynIV6nD9j1tkhqSmCoYG1CNfsh5PZrXzoP%2B7WwX6QZKeXn7c4JNnjm8V0ryf8fXJn1BmN%2FZmIXkWQSrG6IIYkAgVYpsONDZGOek5cR6ABYnK6PyUl6dHpmArcgF9%2BroXUivsfuO2%2BzvEwkvqLDHTySRZ8V9VDa8rhApPSdC1isyUJCPxXO7l0S9nMs8ZvS6jgeHnuFxQJekueWIcGDJaCGQgw35usvQY6pgHYFonL0464yR%2BaMeLh5VVefFx5t5Qa43c%2FuzIZWBEI9gr7M2wgIiEkbFlLPf%2Bf2fnmWQJY%2FZzFyuY0QtZPjpxXt%2F%2ByDz3TKJMVyZEB82fTKphMQofF7icbNl3kYpy6FxQ1MLp7NFbaXRAr22HUnFEg0u0UnuQ26bI0I%2BTFriIDOOyiPWr2dOWFPIyhqXiGWWhtQFu6TqjaDRBo%2Fq5NSDrYX%2FT6FZ8Q&X-Amz-Signature=fb4bb13078bc836007a98b362659ae394c37661840a80f8d18f48b4861a1188a&X-Amz-SignedHeaders=host&x-id=GetObject)
