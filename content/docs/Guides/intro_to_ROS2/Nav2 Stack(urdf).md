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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WNGBB2C%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQlm6pCKZ9lKdZGpNBUq2LDPXE8JyHb7agMDgJA5maQwIgaU6%2Fx8BJvgYxuVUPj4KgmmZ294Od2geIdJ%2B1y86pDvoq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKMqN1XAT%2BIsBcZ%2BUCrcA2cQaUZ2wP1%2BhwYHLegdMGXiW%2B6Kd3sO4ERgV18GQwzjwkJ7RK6ud9lUscwqAy6ZKPQwjYj1cRHJtGgEfoQ6mbTe3D5LPtcFuTpRJZgxdx3gVUlhodKWoA1H4VtpE0kvq4d9AU4CJKsy0wYh70sqpHyNUVJ7D4UtWu46HBkn0xk3NvwDZVaqFdvvWPBzoIE2NQjtdPZTqyRL8hzKjQkEzBWp2T%2BsRuyDySwBmL3XfZIkW0Kp00VLvakeKUTnuyQhBF5UBvkBMkYKSImrRlWqfYKgBb4DcttakfqlP%2BwOSdfmpFDYGbh1EdkrMu2vQWW8h1Ik1PxOvgKSw6Wy93dZCfKmG8mX1mm%2BmThPVMYz7fhCZfLRDSvBK%2FTWtc66UPj%2Bmmp8QRVeaPsTyyjiEQ%2FdupsT3Uz%2BpjUj4wif4UzYpaKDj4vYtHlSpxym2n7DculWiMco%2FyJAwwzw03c4igHcthoGsv6Roesbtvcb%2BnOVOrwYAiI1mC9dUDnN8nuv9ISEOuAAnfmzIX6bVzsHcXUHOhRZ3O3Fi8VoLddFOJQJucFBaU0JfXAyW%2B62XW94JF0Up3ec%2BSm%2B0Kv54Jhw4pTA9uWtgk7Xmesn3nBIJ5y9dQiGxLJd%2B16C0njT%2B8FuMKykj8IGOqUB%2BjvwsMe9nyJXk6G3LT7xtm2mdpNawrTfcjy1a2Ztoh6TR6dwUC%2Bq41qZDnk%2BLe8I6wKmoFx7BYLj%2FWjsZ3b1sz8jnTZTLIefWOo8A9WaeK6A2hhfO%2Fe%2BMy7%2FapxQPjQhyYIK5VgxQorvPiXj%2BAUVrpI7rQUPXMJ7jQBUD9Aco9jFR%2F3%2BS27EAM7z7aOjbw04eBwyWhZC%2FrxLwOPI78DnFJKXVVf%2B&X-Amz-Signature=ce741444462b6b6b7cbdb60be4240ebc14fad72e6dc7dd7fe4516bea565699b3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WNGBB2C%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQlm6pCKZ9lKdZGpNBUq2LDPXE8JyHb7agMDgJA5maQwIgaU6%2Fx8BJvgYxuVUPj4KgmmZ294Od2geIdJ%2B1y86pDvoq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKMqN1XAT%2BIsBcZ%2BUCrcA2cQaUZ2wP1%2BhwYHLegdMGXiW%2B6Kd3sO4ERgV18GQwzjwkJ7RK6ud9lUscwqAy6ZKPQwjYj1cRHJtGgEfoQ6mbTe3D5LPtcFuTpRJZgxdx3gVUlhodKWoA1H4VtpE0kvq4d9AU4CJKsy0wYh70sqpHyNUVJ7D4UtWu46HBkn0xk3NvwDZVaqFdvvWPBzoIE2NQjtdPZTqyRL8hzKjQkEzBWp2T%2BsRuyDySwBmL3XfZIkW0Kp00VLvakeKUTnuyQhBF5UBvkBMkYKSImrRlWqfYKgBb4DcttakfqlP%2BwOSdfmpFDYGbh1EdkrMu2vQWW8h1Ik1PxOvgKSw6Wy93dZCfKmG8mX1mm%2BmThPVMYz7fhCZfLRDSvBK%2FTWtc66UPj%2Bmmp8QRVeaPsTyyjiEQ%2FdupsT3Uz%2BpjUj4wif4UzYpaKDj4vYtHlSpxym2n7DculWiMco%2FyJAwwzw03c4igHcthoGsv6Roesbtvcb%2BnOVOrwYAiI1mC9dUDnN8nuv9ISEOuAAnfmzIX6bVzsHcXUHOhRZ3O3Fi8VoLddFOJQJucFBaU0JfXAyW%2B62XW94JF0Up3ec%2BSm%2B0Kv54Jhw4pTA9uWtgk7Xmesn3nBIJ5y9dQiGxLJd%2B16C0njT%2B8FuMKykj8IGOqUB%2BjvwsMe9nyJXk6G3LT7xtm2mdpNawrTfcjy1a2Ztoh6TR6dwUC%2Bq41qZDnk%2BLe8I6wKmoFx7BYLj%2FWjsZ3b1sz8jnTZTLIefWOo8A9WaeK6A2hhfO%2Fe%2BMy7%2FapxQPjQhyYIK5VgxQorvPiXj%2BAUVrpI7rQUPXMJ7jQBUD9Aco9jFR%2F3%2BS27EAM7z7aOjbw04eBwyWhZC%2FrxLwOPI78DnFJKXVVf%2B&X-Amz-Signature=5b9e4412d127017cb9bda27fd674c7bb1760a94dbc4869ac7d3f7f778deeef48&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WNGBB2C%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQlm6pCKZ9lKdZGpNBUq2LDPXE8JyHb7agMDgJA5maQwIgaU6%2Fx8BJvgYxuVUPj4KgmmZ294Od2geIdJ%2B1y86pDvoq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKMqN1XAT%2BIsBcZ%2BUCrcA2cQaUZ2wP1%2BhwYHLegdMGXiW%2B6Kd3sO4ERgV18GQwzjwkJ7RK6ud9lUscwqAy6ZKPQwjYj1cRHJtGgEfoQ6mbTe3D5LPtcFuTpRJZgxdx3gVUlhodKWoA1H4VtpE0kvq4d9AU4CJKsy0wYh70sqpHyNUVJ7D4UtWu46HBkn0xk3NvwDZVaqFdvvWPBzoIE2NQjtdPZTqyRL8hzKjQkEzBWp2T%2BsRuyDySwBmL3XfZIkW0Kp00VLvakeKUTnuyQhBF5UBvkBMkYKSImrRlWqfYKgBb4DcttakfqlP%2BwOSdfmpFDYGbh1EdkrMu2vQWW8h1Ik1PxOvgKSw6Wy93dZCfKmG8mX1mm%2BmThPVMYz7fhCZfLRDSvBK%2FTWtc66UPj%2Bmmp8QRVeaPsTyyjiEQ%2FdupsT3Uz%2BpjUj4wif4UzYpaKDj4vYtHlSpxym2n7DculWiMco%2FyJAwwzw03c4igHcthoGsv6Roesbtvcb%2BnOVOrwYAiI1mC9dUDnN8nuv9ISEOuAAnfmzIX6bVzsHcXUHOhRZ3O3Fi8VoLddFOJQJucFBaU0JfXAyW%2B62XW94JF0Up3ec%2BSm%2B0Kv54Jhw4pTA9uWtgk7Xmesn3nBIJ5y9dQiGxLJd%2B16C0njT%2B8FuMKykj8IGOqUB%2BjvwsMe9nyJXk6G3LT7xtm2mdpNawrTfcjy1a2Ztoh6TR6dwUC%2Bq41qZDnk%2BLe8I6wKmoFx7BYLj%2FWjsZ3b1sz8jnTZTLIefWOo8A9WaeK6A2hhfO%2Fe%2BMy7%2FapxQPjQhyYIK5VgxQorvPiXj%2BAUVrpI7rQUPXMJ7jQBUD9Aco9jFR%2F3%2BS27EAM7z7aOjbw04eBwyWhZC%2FrxLwOPI78DnFJKXVVf%2B&X-Amz-Signature=c6e9e05a365b4169c5ff3b7174ff87280b87e3638b6f2a94c819dd43eaa09036&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WNGBB2C%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQlm6pCKZ9lKdZGpNBUq2LDPXE8JyHb7agMDgJA5maQwIgaU6%2Fx8BJvgYxuVUPj4KgmmZ294Od2geIdJ%2B1y86pDvoq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKMqN1XAT%2BIsBcZ%2BUCrcA2cQaUZ2wP1%2BhwYHLegdMGXiW%2B6Kd3sO4ERgV18GQwzjwkJ7RK6ud9lUscwqAy6ZKPQwjYj1cRHJtGgEfoQ6mbTe3D5LPtcFuTpRJZgxdx3gVUlhodKWoA1H4VtpE0kvq4d9AU4CJKsy0wYh70sqpHyNUVJ7D4UtWu46HBkn0xk3NvwDZVaqFdvvWPBzoIE2NQjtdPZTqyRL8hzKjQkEzBWp2T%2BsRuyDySwBmL3XfZIkW0Kp00VLvakeKUTnuyQhBF5UBvkBMkYKSImrRlWqfYKgBb4DcttakfqlP%2BwOSdfmpFDYGbh1EdkrMu2vQWW8h1Ik1PxOvgKSw6Wy93dZCfKmG8mX1mm%2BmThPVMYz7fhCZfLRDSvBK%2FTWtc66UPj%2Bmmp8QRVeaPsTyyjiEQ%2FdupsT3Uz%2BpjUj4wif4UzYpaKDj4vYtHlSpxym2n7DculWiMco%2FyJAwwzw03c4igHcthoGsv6Roesbtvcb%2BnOVOrwYAiI1mC9dUDnN8nuv9ISEOuAAnfmzIX6bVzsHcXUHOhRZ3O3Fi8VoLddFOJQJucFBaU0JfXAyW%2B62XW94JF0Up3ec%2BSm%2B0Kv54Jhw4pTA9uWtgk7Xmesn3nBIJ5y9dQiGxLJd%2B16C0njT%2B8FuMKykj8IGOqUB%2BjvwsMe9nyJXk6G3LT7xtm2mdpNawrTfcjy1a2Ztoh6TR6dwUC%2Bq41qZDnk%2BLe8I6wKmoFx7BYLj%2FWjsZ3b1sz8jnTZTLIefWOo8A9WaeK6A2hhfO%2Fe%2BMy7%2FapxQPjQhyYIK5VgxQorvPiXj%2BAUVrpI7rQUPXMJ7jQBUD9Aco9jFR%2F3%2BS27EAM7z7aOjbw04eBwyWhZC%2FrxLwOPI78DnFJKXVVf%2B&X-Amz-Signature=657bd1bedacffb9b57a636f9b0759ae69025b934a39e45d4bbcd47811d32d06d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WNGBB2C%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQlm6pCKZ9lKdZGpNBUq2LDPXE8JyHb7agMDgJA5maQwIgaU6%2Fx8BJvgYxuVUPj4KgmmZ294Od2geIdJ%2B1y86pDvoq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKMqN1XAT%2BIsBcZ%2BUCrcA2cQaUZ2wP1%2BhwYHLegdMGXiW%2B6Kd3sO4ERgV18GQwzjwkJ7RK6ud9lUscwqAy6ZKPQwjYj1cRHJtGgEfoQ6mbTe3D5LPtcFuTpRJZgxdx3gVUlhodKWoA1H4VtpE0kvq4d9AU4CJKsy0wYh70sqpHyNUVJ7D4UtWu46HBkn0xk3NvwDZVaqFdvvWPBzoIE2NQjtdPZTqyRL8hzKjQkEzBWp2T%2BsRuyDySwBmL3XfZIkW0Kp00VLvakeKUTnuyQhBF5UBvkBMkYKSImrRlWqfYKgBb4DcttakfqlP%2BwOSdfmpFDYGbh1EdkrMu2vQWW8h1Ik1PxOvgKSw6Wy93dZCfKmG8mX1mm%2BmThPVMYz7fhCZfLRDSvBK%2FTWtc66UPj%2Bmmp8QRVeaPsTyyjiEQ%2FdupsT3Uz%2BpjUj4wif4UzYpaKDj4vYtHlSpxym2n7DculWiMco%2FyJAwwzw03c4igHcthoGsv6Roesbtvcb%2BnOVOrwYAiI1mC9dUDnN8nuv9ISEOuAAnfmzIX6bVzsHcXUHOhRZ3O3Fi8VoLddFOJQJucFBaU0JfXAyW%2B62XW94JF0Up3ec%2BSm%2B0Kv54Jhw4pTA9uWtgk7Xmesn3nBIJ5y9dQiGxLJd%2B16C0njT%2B8FuMKykj8IGOqUB%2BjvwsMe9nyJXk6G3LT7xtm2mdpNawrTfcjy1a2Ztoh6TR6dwUC%2Bq41qZDnk%2BLe8I6wKmoFx7BYLj%2FWjsZ3b1sz8jnTZTLIefWOo8A9WaeK6A2hhfO%2Fe%2BMy7%2FapxQPjQhyYIK5VgxQorvPiXj%2BAUVrpI7rQUPXMJ7jQBUD9Aco9jFR%2F3%2BS27EAM7z7aOjbw04eBwyWhZC%2FrxLwOPI78DnFJKXVVf%2B&X-Amz-Signature=a93843751540e12bba35e227c734ea46355119b578e2a67d9224fdfc79464d83&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WNGBB2C%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQlm6pCKZ9lKdZGpNBUq2LDPXE8JyHb7agMDgJA5maQwIgaU6%2Fx8BJvgYxuVUPj4KgmmZ294Od2geIdJ%2B1y86pDvoq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKMqN1XAT%2BIsBcZ%2BUCrcA2cQaUZ2wP1%2BhwYHLegdMGXiW%2B6Kd3sO4ERgV18GQwzjwkJ7RK6ud9lUscwqAy6ZKPQwjYj1cRHJtGgEfoQ6mbTe3D5LPtcFuTpRJZgxdx3gVUlhodKWoA1H4VtpE0kvq4d9AU4CJKsy0wYh70sqpHyNUVJ7D4UtWu46HBkn0xk3NvwDZVaqFdvvWPBzoIE2NQjtdPZTqyRL8hzKjQkEzBWp2T%2BsRuyDySwBmL3XfZIkW0Kp00VLvakeKUTnuyQhBF5UBvkBMkYKSImrRlWqfYKgBb4DcttakfqlP%2BwOSdfmpFDYGbh1EdkrMu2vQWW8h1Ik1PxOvgKSw6Wy93dZCfKmG8mX1mm%2BmThPVMYz7fhCZfLRDSvBK%2FTWtc66UPj%2Bmmp8QRVeaPsTyyjiEQ%2FdupsT3Uz%2BpjUj4wif4UzYpaKDj4vYtHlSpxym2n7DculWiMco%2FyJAwwzw03c4igHcthoGsv6Roesbtvcb%2BnOVOrwYAiI1mC9dUDnN8nuv9ISEOuAAnfmzIX6bVzsHcXUHOhRZ3O3Fi8VoLddFOJQJucFBaU0JfXAyW%2B62XW94JF0Up3ec%2BSm%2B0Kv54Jhw4pTA9uWtgk7Xmesn3nBIJ5y9dQiGxLJd%2B16C0njT%2B8FuMKykj8IGOqUB%2BjvwsMe9nyJXk6G3LT7xtm2mdpNawrTfcjy1a2Ztoh6TR6dwUC%2Bq41qZDnk%2BLe8I6wKmoFx7BYLj%2FWjsZ3b1sz8jnTZTLIefWOo8A9WaeK6A2hhfO%2Fe%2BMy7%2FapxQPjQhyYIK5VgxQorvPiXj%2BAUVrpI7rQUPXMJ7jQBUD9Aco9jFR%2F3%2BS27EAM7z7aOjbw04eBwyWhZC%2FrxLwOPI78DnFJKXVVf%2B&X-Amz-Signature=eba2f0fa09c43a6c1fe18282139430dbf468e672051a0a98f4e1f0bd8eddc68c&X-Amz-SignedHeaders=host&x-id=GetObject)
