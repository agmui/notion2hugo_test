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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLJMVGX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDDCOClZYVmBRIYyw0vfXj9ZTCetfvRWCQ9A0BtDwlXlQIhANssiOZl%2BK90attWlSyqiV6NZ9BUlfoVLUxif2zy3VmvKv8DCCoQABoMNjM3NDIzMTgzODA1Igzbv2cxrwshlBIG7bUq3AN77g70vuiHkwtstUfFfLqCMxCwrootFxaQmL6s5t9KPdDzDRq8ZTEbw6mMigd2Ap7Qc%2B3m%2FM6hdMh0dmdka3xekoUepGYHmnTmCEbBclShi5HcfkvehgE%2F9cTNG43e9toi8br5mqmlAywrmCiW4wHSqO7VPT8%2FVVNQYW1o6E0kQg5yTfYKfOEh7IhQ6KymRWT6tEEyDL85x%2FLIN9P0F0wgHm4xt3%2F%2B1el3VEGagM%2F6iRVFQkrRrCX%2Fv10RzHDJ%2B4CBskzpvsZNkD2DJZhCcLc8iwUguBmaqqSVZqTf7nsWdgXVrKBf1s1mIETsCTtNgCQbLQOFqIl61Pv9pOyiKMxEeopwrbvp8XqsYxnGP4RjWakHAKZQfyxVL5nGhw24NITis3ey%2BkxUT0RGrie%2Bk%2Bxcq%2FIANuUsIo%2FfSmp70x7U5W%2FY37hKDPDKInD4PF9mP2HP6eIa0LAS6mTpWzhxWcSReTUNEOZzivQEVxJHkse9%2BLcagDuiq0LEeVf3DqkQlsXaqo4X0lJBU5mX9LQ%2FKiLGcP3pq0C5KM%2B3XC%2FI%2Bm5t6fBFtYZb%2BJd29Z7EPF%2BjBbu0XYYiuX7ZSP6WYt4q%2FHpXMsWxpUghNynnWCEiOSu%2BXFl0cPjtzbgLt6vttzDdh9PDBjqkAUMNRnJPjofQPYHQK8GXOP%2Fs3LqoGi2EA4dqbzLH%2BMfrde1EgAkCr4VLTbgoytlMPlvrgOpIqqYcWewzGSro3yUWAX40G0yPkQuoIKpUqDD2b%2BkvoyJUe4HYeFU68X6BFFRreGiHDKPRhINmLd8bVWnN357607h%2B9ZuN27veW31CA6qOPTv6XteJEwNsMwsKgn6vAw68kEdUuBtrQLW2N3CUMznA&X-Amz-Signature=2894a74c6e476a1d358d36a86ce8ea8407e0c36d1686dded25ac997a981ef079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLJMVGX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDDCOClZYVmBRIYyw0vfXj9ZTCetfvRWCQ9A0BtDwlXlQIhANssiOZl%2BK90attWlSyqiV6NZ9BUlfoVLUxif2zy3VmvKv8DCCoQABoMNjM3NDIzMTgzODA1Igzbv2cxrwshlBIG7bUq3AN77g70vuiHkwtstUfFfLqCMxCwrootFxaQmL6s5t9KPdDzDRq8ZTEbw6mMigd2Ap7Qc%2B3m%2FM6hdMh0dmdka3xekoUepGYHmnTmCEbBclShi5HcfkvehgE%2F9cTNG43e9toi8br5mqmlAywrmCiW4wHSqO7VPT8%2FVVNQYW1o6E0kQg5yTfYKfOEh7IhQ6KymRWT6tEEyDL85x%2FLIN9P0F0wgHm4xt3%2F%2B1el3VEGagM%2F6iRVFQkrRrCX%2Fv10RzHDJ%2B4CBskzpvsZNkD2DJZhCcLc8iwUguBmaqqSVZqTf7nsWdgXVrKBf1s1mIETsCTtNgCQbLQOFqIl61Pv9pOyiKMxEeopwrbvp8XqsYxnGP4RjWakHAKZQfyxVL5nGhw24NITis3ey%2BkxUT0RGrie%2Bk%2Bxcq%2FIANuUsIo%2FfSmp70x7U5W%2FY37hKDPDKInD4PF9mP2HP6eIa0LAS6mTpWzhxWcSReTUNEOZzivQEVxJHkse9%2BLcagDuiq0LEeVf3DqkQlsXaqo4X0lJBU5mX9LQ%2FKiLGcP3pq0C5KM%2B3XC%2FI%2Bm5t6fBFtYZb%2BJd29Z7EPF%2BjBbu0XYYiuX7ZSP6WYt4q%2FHpXMsWxpUghNynnWCEiOSu%2BXFl0cPjtzbgLt6vttzDdh9PDBjqkAUMNRnJPjofQPYHQK8GXOP%2Fs3LqoGi2EA4dqbzLH%2BMfrde1EgAkCr4VLTbgoytlMPlvrgOpIqqYcWewzGSro3yUWAX40G0yPkQuoIKpUqDD2b%2BkvoyJUe4HYeFU68X6BFFRreGiHDKPRhINmLd8bVWnN357607h%2B9ZuN27veW31CA6qOPTv6XteJEwNsMwsKgn6vAw68kEdUuBtrQLW2N3CUMznA&X-Amz-Signature=28a86a5b7a4af3e2dbbca6e2248fe77d78f7429596ccd4c4a7e7c466b6506e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLJMVGX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDDCOClZYVmBRIYyw0vfXj9ZTCetfvRWCQ9A0BtDwlXlQIhANssiOZl%2BK90attWlSyqiV6NZ9BUlfoVLUxif2zy3VmvKv8DCCoQABoMNjM3NDIzMTgzODA1Igzbv2cxrwshlBIG7bUq3AN77g70vuiHkwtstUfFfLqCMxCwrootFxaQmL6s5t9KPdDzDRq8ZTEbw6mMigd2Ap7Qc%2B3m%2FM6hdMh0dmdka3xekoUepGYHmnTmCEbBclShi5HcfkvehgE%2F9cTNG43e9toi8br5mqmlAywrmCiW4wHSqO7VPT8%2FVVNQYW1o6E0kQg5yTfYKfOEh7IhQ6KymRWT6tEEyDL85x%2FLIN9P0F0wgHm4xt3%2F%2B1el3VEGagM%2F6iRVFQkrRrCX%2Fv10RzHDJ%2B4CBskzpvsZNkD2DJZhCcLc8iwUguBmaqqSVZqTf7nsWdgXVrKBf1s1mIETsCTtNgCQbLQOFqIl61Pv9pOyiKMxEeopwrbvp8XqsYxnGP4RjWakHAKZQfyxVL5nGhw24NITis3ey%2BkxUT0RGrie%2Bk%2Bxcq%2FIANuUsIo%2FfSmp70x7U5W%2FY37hKDPDKInD4PF9mP2HP6eIa0LAS6mTpWzhxWcSReTUNEOZzivQEVxJHkse9%2BLcagDuiq0LEeVf3DqkQlsXaqo4X0lJBU5mX9LQ%2FKiLGcP3pq0C5KM%2B3XC%2FI%2Bm5t6fBFtYZb%2BJd29Z7EPF%2BjBbu0XYYiuX7ZSP6WYt4q%2FHpXMsWxpUghNynnWCEiOSu%2BXFl0cPjtzbgLt6vttzDdh9PDBjqkAUMNRnJPjofQPYHQK8GXOP%2Fs3LqoGi2EA4dqbzLH%2BMfrde1EgAkCr4VLTbgoytlMPlvrgOpIqqYcWewzGSro3yUWAX40G0yPkQuoIKpUqDD2b%2BkvoyJUe4HYeFU68X6BFFRreGiHDKPRhINmLd8bVWnN357607h%2B9ZuN27veW31CA6qOPTv6XteJEwNsMwsKgn6vAw68kEdUuBtrQLW2N3CUMznA&X-Amz-Signature=3dab5451e7ce453a25bc506c1515a90254f53f73bbb0607c342b68b3b108b5fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLJMVGX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDDCOClZYVmBRIYyw0vfXj9ZTCetfvRWCQ9A0BtDwlXlQIhANssiOZl%2BK90attWlSyqiV6NZ9BUlfoVLUxif2zy3VmvKv8DCCoQABoMNjM3NDIzMTgzODA1Igzbv2cxrwshlBIG7bUq3AN77g70vuiHkwtstUfFfLqCMxCwrootFxaQmL6s5t9KPdDzDRq8ZTEbw6mMigd2Ap7Qc%2B3m%2FM6hdMh0dmdka3xekoUepGYHmnTmCEbBclShi5HcfkvehgE%2F9cTNG43e9toi8br5mqmlAywrmCiW4wHSqO7VPT8%2FVVNQYW1o6E0kQg5yTfYKfOEh7IhQ6KymRWT6tEEyDL85x%2FLIN9P0F0wgHm4xt3%2F%2B1el3VEGagM%2F6iRVFQkrRrCX%2Fv10RzHDJ%2B4CBskzpvsZNkD2DJZhCcLc8iwUguBmaqqSVZqTf7nsWdgXVrKBf1s1mIETsCTtNgCQbLQOFqIl61Pv9pOyiKMxEeopwrbvp8XqsYxnGP4RjWakHAKZQfyxVL5nGhw24NITis3ey%2BkxUT0RGrie%2Bk%2Bxcq%2FIANuUsIo%2FfSmp70x7U5W%2FY37hKDPDKInD4PF9mP2HP6eIa0LAS6mTpWzhxWcSReTUNEOZzivQEVxJHkse9%2BLcagDuiq0LEeVf3DqkQlsXaqo4X0lJBU5mX9LQ%2FKiLGcP3pq0C5KM%2B3XC%2FI%2Bm5t6fBFtYZb%2BJd29Z7EPF%2BjBbu0XYYiuX7ZSP6WYt4q%2FHpXMsWxpUghNynnWCEiOSu%2BXFl0cPjtzbgLt6vttzDdh9PDBjqkAUMNRnJPjofQPYHQK8GXOP%2Fs3LqoGi2EA4dqbzLH%2BMfrde1EgAkCr4VLTbgoytlMPlvrgOpIqqYcWewzGSro3yUWAX40G0yPkQuoIKpUqDD2b%2BkvoyJUe4HYeFU68X6BFFRreGiHDKPRhINmLd8bVWnN357607h%2B9ZuN27veW31CA6qOPTv6XteJEwNsMwsKgn6vAw68kEdUuBtrQLW2N3CUMznA&X-Amz-Signature=011001633ada4c426a335e400bececc8dd5e40a878a4957936dd1eedaa640f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLJMVGX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDDCOClZYVmBRIYyw0vfXj9ZTCetfvRWCQ9A0BtDwlXlQIhANssiOZl%2BK90attWlSyqiV6NZ9BUlfoVLUxif2zy3VmvKv8DCCoQABoMNjM3NDIzMTgzODA1Igzbv2cxrwshlBIG7bUq3AN77g70vuiHkwtstUfFfLqCMxCwrootFxaQmL6s5t9KPdDzDRq8ZTEbw6mMigd2Ap7Qc%2B3m%2FM6hdMh0dmdka3xekoUepGYHmnTmCEbBclShi5HcfkvehgE%2F9cTNG43e9toi8br5mqmlAywrmCiW4wHSqO7VPT8%2FVVNQYW1o6E0kQg5yTfYKfOEh7IhQ6KymRWT6tEEyDL85x%2FLIN9P0F0wgHm4xt3%2F%2B1el3VEGagM%2F6iRVFQkrRrCX%2Fv10RzHDJ%2B4CBskzpvsZNkD2DJZhCcLc8iwUguBmaqqSVZqTf7nsWdgXVrKBf1s1mIETsCTtNgCQbLQOFqIl61Pv9pOyiKMxEeopwrbvp8XqsYxnGP4RjWakHAKZQfyxVL5nGhw24NITis3ey%2BkxUT0RGrie%2Bk%2Bxcq%2FIANuUsIo%2FfSmp70x7U5W%2FY37hKDPDKInD4PF9mP2HP6eIa0LAS6mTpWzhxWcSReTUNEOZzivQEVxJHkse9%2BLcagDuiq0LEeVf3DqkQlsXaqo4X0lJBU5mX9LQ%2FKiLGcP3pq0C5KM%2B3XC%2FI%2Bm5t6fBFtYZb%2BJd29Z7EPF%2BjBbu0XYYiuX7ZSP6WYt4q%2FHpXMsWxpUghNynnWCEiOSu%2BXFl0cPjtzbgLt6vttzDdh9PDBjqkAUMNRnJPjofQPYHQK8GXOP%2Fs3LqoGi2EA4dqbzLH%2BMfrde1EgAkCr4VLTbgoytlMPlvrgOpIqqYcWewzGSro3yUWAX40G0yPkQuoIKpUqDD2b%2BkvoyJUe4HYeFU68X6BFFRreGiHDKPRhINmLd8bVWnN357607h%2B9ZuN27veW31CA6qOPTv6XteJEwNsMwsKgn6vAw68kEdUuBtrQLW2N3CUMznA&X-Amz-Signature=a869a7650596053e0f8b0d6e02c12dc1d2a32e3603e99e543685f01ed27c5c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLJMVGX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDDCOClZYVmBRIYyw0vfXj9ZTCetfvRWCQ9A0BtDwlXlQIhANssiOZl%2BK90attWlSyqiV6NZ9BUlfoVLUxif2zy3VmvKv8DCCoQABoMNjM3NDIzMTgzODA1Igzbv2cxrwshlBIG7bUq3AN77g70vuiHkwtstUfFfLqCMxCwrootFxaQmL6s5t9KPdDzDRq8ZTEbw6mMigd2Ap7Qc%2B3m%2FM6hdMh0dmdka3xekoUepGYHmnTmCEbBclShi5HcfkvehgE%2F9cTNG43e9toi8br5mqmlAywrmCiW4wHSqO7VPT8%2FVVNQYW1o6E0kQg5yTfYKfOEh7IhQ6KymRWT6tEEyDL85x%2FLIN9P0F0wgHm4xt3%2F%2B1el3VEGagM%2F6iRVFQkrRrCX%2Fv10RzHDJ%2B4CBskzpvsZNkD2DJZhCcLc8iwUguBmaqqSVZqTf7nsWdgXVrKBf1s1mIETsCTtNgCQbLQOFqIl61Pv9pOyiKMxEeopwrbvp8XqsYxnGP4RjWakHAKZQfyxVL5nGhw24NITis3ey%2BkxUT0RGrie%2Bk%2Bxcq%2FIANuUsIo%2FfSmp70x7U5W%2FY37hKDPDKInD4PF9mP2HP6eIa0LAS6mTpWzhxWcSReTUNEOZzivQEVxJHkse9%2BLcagDuiq0LEeVf3DqkQlsXaqo4X0lJBU5mX9LQ%2FKiLGcP3pq0C5KM%2B3XC%2FI%2Bm5t6fBFtYZb%2BJd29Z7EPF%2BjBbu0XYYiuX7ZSP6WYt4q%2FHpXMsWxpUghNynnWCEiOSu%2BXFl0cPjtzbgLt6vttzDdh9PDBjqkAUMNRnJPjofQPYHQK8GXOP%2Fs3LqoGi2EA4dqbzLH%2BMfrde1EgAkCr4VLTbgoytlMPlvrgOpIqqYcWewzGSro3yUWAX40G0yPkQuoIKpUqDD2b%2BkvoyJUe4HYeFU68X6BFFRreGiHDKPRhINmLd8bVWnN357607h%2B9ZuN27veW31CA6qOPTv6XteJEwNsMwsKgn6vAw68kEdUuBtrQLW2N3CUMznA&X-Amz-Signature=aa02c9734269cc47ec34aa4451a4c4abecd334a9c2225acf66c37892a1b51d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
