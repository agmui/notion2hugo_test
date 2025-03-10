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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNE7QKE4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T181007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIBLZ7glzZahsoTP7by274ztuhP7JTS7%2FBVyJIEnWS%2BJQAiB6jZ8MKi6WHvDFMFfKtmEEtBmLYbrjBUZ8d24PxfeH4SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRf90mNI02z6eAhR0KtwDjseJ5Yuct2Psdp0SHySlWHkMQ5ii3rmKsp9hP4HRIMz1sSpU%2Fx08gjk8Q6%2F0VefaSicNCgMCzzFU8R1cnwkgme2%2BVAWu%2BDkvYEB6Ee1OBy6exLKj%2Fgj2R8eJWqxPgUlBnEuyxWiOPsMkq%2FzzGO88kE59bfhDNxGW4qX4g1Cc66gR%2FLXDKzz4uFHxIQjWsQI%2BKX115iRF9mkxUSQLN1LezAwVgwVZuhbM%2Bx6Q6TYkDo%2BbkUArXeu6cmMQgXyAaKxQtXmIwKvyvpJgXK7uTvlBUJ2AyqaBEwu34WSBOGs7DUkkI5DdDAIZcGOghoBqtKkL803x8kiBjI%2Bo3GvaJF0fLoqxdKAL%2B86o1mqieEJlrML9VRE0ECEWaDvLxC7sBc5zPL36o37jAmvUnu1nBGBYty7nOWoQs2AIwuaRT8vb7%2F7G2VEVhHvWJ7bCacnwbEMsg7afs1DeiS5oDRSDsTQF2LOV4%2Ffni9JeBJDkqyrycJOvyihKFwtkG9C1as9YACJg2YOMY43Y0rokEAKpp2oYYPrz5019DhPOdo%2Bd4LjLyiTsSPv%2FjuFmiJBbOWa6CM5Gn5B5zzKyWoz1fU8f42aaKbcAPczbNOHNjfd52R1v6vUX0kS8pQTxKI8Ut%2FQwncu8vgY6pgHVO1O6LEKFYwGMbk1AM05r7pmPIE5iYFPgEcVJZ%2FVrFzZI9b0ed0lV5BgRPT5grR0%2B4JSohxlI6lgV9wajdkf7vNmJuRKwZCZ4cm8ydbLZLVACOti%2Fxlupt3myo2wGG48%2B%2FqbGtLbsys0MnBVXY4Cc7u7eCfadaSYm8bc2JJYBTEjEpCRzBtshUe5E9y2MjOCNCanntzsp3a1ev4kaPLXzpXSj4W%2F%2B&X-Amz-Signature=c7ed9ecf78f77418ad6018ce1cee2e0e6251d7dfe660de91df787382a9bab2ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNE7QKE4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T181007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIBLZ7glzZahsoTP7by274ztuhP7JTS7%2FBVyJIEnWS%2BJQAiB6jZ8MKi6WHvDFMFfKtmEEtBmLYbrjBUZ8d24PxfeH4SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRf90mNI02z6eAhR0KtwDjseJ5Yuct2Psdp0SHySlWHkMQ5ii3rmKsp9hP4HRIMz1sSpU%2Fx08gjk8Q6%2F0VefaSicNCgMCzzFU8R1cnwkgme2%2BVAWu%2BDkvYEB6Ee1OBy6exLKj%2Fgj2R8eJWqxPgUlBnEuyxWiOPsMkq%2FzzGO88kE59bfhDNxGW4qX4g1Cc66gR%2FLXDKzz4uFHxIQjWsQI%2BKX115iRF9mkxUSQLN1LezAwVgwVZuhbM%2Bx6Q6TYkDo%2BbkUArXeu6cmMQgXyAaKxQtXmIwKvyvpJgXK7uTvlBUJ2AyqaBEwu34WSBOGs7DUkkI5DdDAIZcGOghoBqtKkL803x8kiBjI%2Bo3GvaJF0fLoqxdKAL%2B86o1mqieEJlrML9VRE0ECEWaDvLxC7sBc5zPL36o37jAmvUnu1nBGBYty7nOWoQs2AIwuaRT8vb7%2F7G2VEVhHvWJ7bCacnwbEMsg7afs1DeiS5oDRSDsTQF2LOV4%2Ffni9JeBJDkqyrycJOvyihKFwtkG9C1as9YACJg2YOMY43Y0rokEAKpp2oYYPrz5019DhPOdo%2Bd4LjLyiTsSPv%2FjuFmiJBbOWa6CM5Gn5B5zzKyWoz1fU8f42aaKbcAPczbNOHNjfd52R1v6vUX0kS8pQTxKI8Ut%2FQwncu8vgY6pgHVO1O6LEKFYwGMbk1AM05r7pmPIE5iYFPgEcVJZ%2FVrFzZI9b0ed0lV5BgRPT5grR0%2B4JSohxlI6lgV9wajdkf7vNmJuRKwZCZ4cm8ydbLZLVACOti%2Fxlupt3myo2wGG48%2B%2FqbGtLbsys0MnBVXY4Cc7u7eCfadaSYm8bc2JJYBTEjEpCRzBtshUe5E9y2MjOCNCanntzsp3a1ev4kaPLXzpXSj4W%2F%2B&X-Amz-Signature=daa7754f4d634997a4d9a3e77bb81faa9c351196234dc712795810c5df825b07&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNE7QKE4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T181007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIBLZ7glzZahsoTP7by274ztuhP7JTS7%2FBVyJIEnWS%2BJQAiB6jZ8MKi6WHvDFMFfKtmEEtBmLYbrjBUZ8d24PxfeH4SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRf90mNI02z6eAhR0KtwDjseJ5Yuct2Psdp0SHySlWHkMQ5ii3rmKsp9hP4HRIMz1sSpU%2Fx08gjk8Q6%2F0VefaSicNCgMCzzFU8R1cnwkgme2%2BVAWu%2BDkvYEB6Ee1OBy6exLKj%2Fgj2R8eJWqxPgUlBnEuyxWiOPsMkq%2FzzGO88kE59bfhDNxGW4qX4g1Cc66gR%2FLXDKzz4uFHxIQjWsQI%2BKX115iRF9mkxUSQLN1LezAwVgwVZuhbM%2Bx6Q6TYkDo%2BbkUArXeu6cmMQgXyAaKxQtXmIwKvyvpJgXK7uTvlBUJ2AyqaBEwu34WSBOGs7DUkkI5DdDAIZcGOghoBqtKkL803x8kiBjI%2Bo3GvaJF0fLoqxdKAL%2B86o1mqieEJlrML9VRE0ECEWaDvLxC7sBc5zPL36o37jAmvUnu1nBGBYty7nOWoQs2AIwuaRT8vb7%2F7G2VEVhHvWJ7bCacnwbEMsg7afs1DeiS5oDRSDsTQF2LOV4%2Ffni9JeBJDkqyrycJOvyihKFwtkG9C1as9YACJg2YOMY43Y0rokEAKpp2oYYPrz5019DhPOdo%2Bd4LjLyiTsSPv%2FjuFmiJBbOWa6CM5Gn5B5zzKyWoz1fU8f42aaKbcAPczbNOHNjfd52R1v6vUX0kS8pQTxKI8Ut%2FQwncu8vgY6pgHVO1O6LEKFYwGMbk1AM05r7pmPIE5iYFPgEcVJZ%2FVrFzZI9b0ed0lV5BgRPT5grR0%2B4JSohxlI6lgV9wajdkf7vNmJuRKwZCZ4cm8ydbLZLVACOti%2Fxlupt3myo2wGG48%2B%2FqbGtLbsys0MnBVXY4Cc7u7eCfadaSYm8bc2JJYBTEjEpCRzBtshUe5E9y2MjOCNCanntzsp3a1ev4kaPLXzpXSj4W%2F%2B&X-Amz-Signature=4a517b8ce370e564f77b042ff4e658460fe3b02ff3d4d82bee7c477bad64d141&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNE7QKE4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T181007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIBLZ7glzZahsoTP7by274ztuhP7JTS7%2FBVyJIEnWS%2BJQAiB6jZ8MKi6WHvDFMFfKtmEEtBmLYbrjBUZ8d24PxfeH4SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRf90mNI02z6eAhR0KtwDjseJ5Yuct2Psdp0SHySlWHkMQ5ii3rmKsp9hP4HRIMz1sSpU%2Fx08gjk8Q6%2F0VefaSicNCgMCzzFU8R1cnwkgme2%2BVAWu%2BDkvYEB6Ee1OBy6exLKj%2Fgj2R8eJWqxPgUlBnEuyxWiOPsMkq%2FzzGO88kE59bfhDNxGW4qX4g1Cc66gR%2FLXDKzz4uFHxIQjWsQI%2BKX115iRF9mkxUSQLN1LezAwVgwVZuhbM%2Bx6Q6TYkDo%2BbkUArXeu6cmMQgXyAaKxQtXmIwKvyvpJgXK7uTvlBUJ2AyqaBEwu34WSBOGs7DUkkI5DdDAIZcGOghoBqtKkL803x8kiBjI%2Bo3GvaJF0fLoqxdKAL%2B86o1mqieEJlrML9VRE0ECEWaDvLxC7sBc5zPL36o37jAmvUnu1nBGBYty7nOWoQs2AIwuaRT8vb7%2F7G2VEVhHvWJ7bCacnwbEMsg7afs1DeiS5oDRSDsTQF2LOV4%2Ffni9JeBJDkqyrycJOvyihKFwtkG9C1as9YACJg2YOMY43Y0rokEAKpp2oYYPrz5019DhPOdo%2Bd4LjLyiTsSPv%2FjuFmiJBbOWa6CM5Gn5B5zzKyWoz1fU8f42aaKbcAPczbNOHNjfd52R1v6vUX0kS8pQTxKI8Ut%2FQwncu8vgY6pgHVO1O6LEKFYwGMbk1AM05r7pmPIE5iYFPgEcVJZ%2FVrFzZI9b0ed0lV5BgRPT5grR0%2B4JSohxlI6lgV9wajdkf7vNmJuRKwZCZ4cm8ydbLZLVACOti%2Fxlupt3myo2wGG48%2B%2FqbGtLbsys0MnBVXY4Cc7u7eCfadaSYm8bc2JJYBTEjEpCRzBtshUe5E9y2MjOCNCanntzsp3a1ev4kaPLXzpXSj4W%2F%2B&X-Amz-Signature=01d0bbb432fbd05aa357bce7380dbc7acdb523eeba4b27ffc0d4800ad4f24e60&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNE7QKE4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T181007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIBLZ7glzZahsoTP7by274ztuhP7JTS7%2FBVyJIEnWS%2BJQAiB6jZ8MKi6WHvDFMFfKtmEEtBmLYbrjBUZ8d24PxfeH4SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRf90mNI02z6eAhR0KtwDjseJ5Yuct2Psdp0SHySlWHkMQ5ii3rmKsp9hP4HRIMz1sSpU%2Fx08gjk8Q6%2F0VefaSicNCgMCzzFU8R1cnwkgme2%2BVAWu%2BDkvYEB6Ee1OBy6exLKj%2Fgj2R8eJWqxPgUlBnEuyxWiOPsMkq%2FzzGO88kE59bfhDNxGW4qX4g1Cc66gR%2FLXDKzz4uFHxIQjWsQI%2BKX115iRF9mkxUSQLN1LezAwVgwVZuhbM%2Bx6Q6TYkDo%2BbkUArXeu6cmMQgXyAaKxQtXmIwKvyvpJgXK7uTvlBUJ2AyqaBEwu34WSBOGs7DUkkI5DdDAIZcGOghoBqtKkL803x8kiBjI%2Bo3GvaJF0fLoqxdKAL%2B86o1mqieEJlrML9VRE0ECEWaDvLxC7sBc5zPL36o37jAmvUnu1nBGBYty7nOWoQs2AIwuaRT8vb7%2F7G2VEVhHvWJ7bCacnwbEMsg7afs1DeiS5oDRSDsTQF2LOV4%2Ffni9JeBJDkqyrycJOvyihKFwtkG9C1as9YACJg2YOMY43Y0rokEAKpp2oYYPrz5019DhPOdo%2Bd4LjLyiTsSPv%2FjuFmiJBbOWa6CM5Gn5B5zzKyWoz1fU8f42aaKbcAPczbNOHNjfd52R1v6vUX0kS8pQTxKI8Ut%2FQwncu8vgY6pgHVO1O6LEKFYwGMbk1AM05r7pmPIE5iYFPgEcVJZ%2FVrFzZI9b0ed0lV5BgRPT5grR0%2B4JSohxlI6lgV9wajdkf7vNmJuRKwZCZ4cm8ydbLZLVACOti%2Fxlupt3myo2wGG48%2B%2FqbGtLbsys0MnBVXY4Cc7u7eCfadaSYm8bc2JJYBTEjEpCRzBtshUe5E9y2MjOCNCanntzsp3a1ev4kaPLXzpXSj4W%2F%2B&X-Amz-Signature=25978a37aede69cd2104763e58e80d3bcbea0326be90fada0dae515f7b4a4192&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNE7QKE4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T181007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIBLZ7glzZahsoTP7by274ztuhP7JTS7%2FBVyJIEnWS%2BJQAiB6jZ8MKi6WHvDFMFfKtmEEtBmLYbrjBUZ8d24PxfeH4SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRf90mNI02z6eAhR0KtwDjseJ5Yuct2Psdp0SHySlWHkMQ5ii3rmKsp9hP4HRIMz1sSpU%2Fx08gjk8Q6%2F0VefaSicNCgMCzzFU8R1cnwkgme2%2BVAWu%2BDkvYEB6Ee1OBy6exLKj%2Fgj2R8eJWqxPgUlBnEuyxWiOPsMkq%2FzzGO88kE59bfhDNxGW4qX4g1Cc66gR%2FLXDKzz4uFHxIQjWsQI%2BKX115iRF9mkxUSQLN1LezAwVgwVZuhbM%2Bx6Q6TYkDo%2BbkUArXeu6cmMQgXyAaKxQtXmIwKvyvpJgXK7uTvlBUJ2AyqaBEwu34WSBOGs7DUkkI5DdDAIZcGOghoBqtKkL803x8kiBjI%2Bo3GvaJF0fLoqxdKAL%2B86o1mqieEJlrML9VRE0ECEWaDvLxC7sBc5zPL36o37jAmvUnu1nBGBYty7nOWoQs2AIwuaRT8vb7%2F7G2VEVhHvWJ7bCacnwbEMsg7afs1DeiS5oDRSDsTQF2LOV4%2Ffni9JeBJDkqyrycJOvyihKFwtkG9C1as9YACJg2YOMY43Y0rokEAKpp2oYYPrz5019DhPOdo%2Bd4LjLyiTsSPv%2FjuFmiJBbOWa6CM5Gn5B5zzKyWoz1fU8f42aaKbcAPczbNOHNjfd52R1v6vUX0kS8pQTxKI8Ut%2FQwncu8vgY6pgHVO1O6LEKFYwGMbk1AM05r7pmPIE5iYFPgEcVJZ%2FVrFzZI9b0ed0lV5BgRPT5grR0%2B4JSohxlI6lgV9wajdkf7vNmJuRKwZCZ4cm8ydbLZLVACOti%2Fxlupt3myo2wGG48%2B%2FqbGtLbsys0MnBVXY4Cc7u7eCfadaSYm8bc2JJYBTEjEpCRzBtshUe5E9y2MjOCNCanntzsp3a1ev4kaPLXzpXSj4W%2F%2B&X-Amz-Signature=4f8069b6d99d886126eff7d63f8c436092dd25f0c4249c68900f60c94d65a768&X-Amz-SignedHeaders=host&x-id=GetObject)
