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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J35B6G4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChgrWH8I2554d93UlMUcgg9k2xgp%2Fyc2te31eJx6GxkwIhAOJZtnLWzglj27ZF%2B8zkRgWE3kiCwRpLQLXzM1gcPHmDKv8DCDUQABoMNjM3NDIzMTgzODA1IgwQ%2BXLijh1LFJq4aQcq3AMuoVwO6umhuYXY9UISv9uSOOKBHc0ULC6pnOTywXTWeUf2IDtnv%2B42JcCMKNCeEBtSz0zC9X%2BWhFNYencX1eRx4VKwgBhCbCl7aqlioUDLxJZHhLZNX6fOfw6q5%2B3UlUltgHkwLlqyVwmQAnPw0ZMVfN4srApxx%2Buv87yIcKFn%2BxXAVnUt7NhVR%2F2PheXOHN0zlRgaa2Tq65eevrzRemCiEHvStTrffkR5o2vsRjTe5Z1v8JjV9Wr0TvfHkNelpicZYkdDK8EwBB36Qmp28ZgcWBIDmepz6uxgbW0d0FnWmzY4pUSXn%2BkTzADKhrWrgiyTzMWjixOLQwd3aPLjJU1amXI92OLgMDUZ8jimlHet8Gkn%2B6r5b7nhPLGR6VzukwmTx%2FlmyqPwVNyT34iNSBGRt%2FaB3Ce8jeguZ%2BWLt9LQtn%2FiSd6Z4As6ruHiBe0WVt5zotwRJ9rFSpwpas2jxtg9NhULBXPx5NzJNOLkg0WRwRHdRj4rnf589AayjVE1y%2Bp0CTt0QLrSldyJjMptaC%2BEbfy7noFaAzJXyPYkb6JoUGB87l4%2F7ca9cWS3STmOL5LqQ90yUrpjxxb3dRK8eqdVem%2FUmwce5ow27hOft8cwSCMSoqagCNkqVABcoDCq3Ny%2BBjqkATlhhoDSX%2Bx%2Fj0zPqZYEq5vgoHM9Lqejuh45ttQzv6psX6mrAejtAmYr8IxjzmsYhyMRMX9EndO1WnncBsYufT%2B6VWcHl9YpQ4Ys3xhuMWJe3gRdCmhRleih9mdVxCCzlEY%2BjgDQBtcoZuissdBsvJc1zL7busSeETs2hIYSrXRtsYrRc0ahgBYRFHh1HaZQKbb7xRB83PxFD%2F6bEWtJ4PDWdVVI&X-Amz-Signature=1591a6b6474bc07e54a3c6640934b93edcbc12594ada0cc8d730f5473491b296&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J35B6G4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChgrWH8I2554d93UlMUcgg9k2xgp%2Fyc2te31eJx6GxkwIhAOJZtnLWzglj27ZF%2B8zkRgWE3kiCwRpLQLXzM1gcPHmDKv8DCDUQABoMNjM3NDIzMTgzODA1IgwQ%2BXLijh1LFJq4aQcq3AMuoVwO6umhuYXY9UISv9uSOOKBHc0ULC6pnOTywXTWeUf2IDtnv%2B42JcCMKNCeEBtSz0zC9X%2BWhFNYencX1eRx4VKwgBhCbCl7aqlioUDLxJZHhLZNX6fOfw6q5%2B3UlUltgHkwLlqyVwmQAnPw0ZMVfN4srApxx%2Buv87yIcKFn%2BxXAVnUt7NhVR%2F2PheXOHN0zlRgaa2Tq65eevrzRemCiEHvStTrffkR5o2vsRjTe5Z1v8JjV9Wr0TvfHkNelpicZYkdDK8EwBB36Qmp28ZgcWBIDmepz6uxgbW0d0FnWmzY4pUSXn%2BkTzADKhrWrgiyTzMWjixOLQwd3aPLjJU1amXI92OLgMDUZ8jimlHet8Gkn%2B6r5b7nhPLGR6VzukwmTx%2FlmyqPwVNyT34iNSBGRt%2FaB3Ce8jeguZ%2BWLt9LQtn%2FiSd6Z4As6ruHiBe0WVt5zotwRJ9rFSpwpas2jxtg9NhULBXPx5NzJNOLkg0WRwRHdRj4rnf589AayjVE1y%2Bp0CTt0QLrSldyJjMptaC%2BEbfy7noFaAzJXyPYkb6JoUGB87l4%2F7ca9cWS3STmOL5LqQ90yUrpjxxb3dRK8eqdVem%2FUmwce5ow27hOft8cwSCMSoqagCNkqVABcoDCq3Ny%2BBjqkATlhhoDSX%2Bx%2Fj0zPqZYEq5vgoHM9Lqejuh45ttQzv6psX6mrAejtAmYr8IxjzmsYhyMRMX9EndO1WnncBsYufT%2B6VWcHl9YpQ4Ys3xhuMWJe3gRdCmhRleih9mdVxCCzlEY%2BjgDQBtcoZuissdBsvJc1zL7busSeETs2hIYSrXRtsYrRc0ahgBYRFHh1HaZQKbb7xRB83PxFD%2F6bEWtJ4PDWdVVI&X-Amz-Signature=da1165d9090de9070ab65a530f797ae3f703aea579c0a3985c11f473a7f04cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J35B6G4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChgrWH8I2554d93UlMUcgg9k2xgp%2Fyc2te31eJx6GxkwIhAOJZtnLWzglj27ZF%2B8zkRgWE3kiCwRpLQLXzM1gcPHmDKv8DCDUQABoMNjM3NDIzMTgzODA1IgwQ%2BXLijh1LFJq4aQcq3AMuoVwO6umhuYXY9UISv9uSOOKBHc0ULC6pnOTywXTWeUf2IDtnv%2B42JcCMKNCeEBtSz0zC9X%2BWhFNYencX1eRx4VKwgBhCbCl7aqlioUDLxJZHhLZNX6fOfw6q5%2B3UlUltgHkwLlqyVwmQAnPw0ZMVfN4srApxx%2Buv87yIcKFn%2BxXAVnUt7NhVR%2F2PheXOHN0zlRgaa2Tq65eevrzRemCiEHvStTrffkR5o2vsRjTe5Z1v8JjV9Wr0TvfHkNelpicZYkdDK8EwBB36Qmp28ZgcWBIDmepz6uxgbW0d0FnWmzY4pUSXn%2BkTzADKhrWrgiyTzMWjixOLQwd3aPLjJU1amXI92OLgMDUZ8jimlHet8Gkn%2B6r5b7nhPLGR6VzukwmTx%2FlmyqPwVNyT34iNSBGRt%2FaB3Ce8jeguZ%2BWLt9LQtn%2FiSd6Z4As6ruHiBe0WVt5zotwRJ9rFSpwpas2jxtg9NhULBXPx5NzJNOLkg0WRwRHdRj4rnf589AayjVE1y%2Bp0CTt0QLrSldyJjMptaC%2BEbfy7noFaAzJXyPYkb6JoUGB87l4%2F7ca9cWS3STmOL5LqQ90yUrpjxxb3dRK8eqdVem%2FUmwce5ow27hOft8cwSCMSoqagCNkqVABcoDCq3Ny%2BBjqkATlhhoDSX%2Bx%2Fj0zPqZYEq5vgoHM9Lqejuh45ttQzv6psX6mrAejtAmYr8IxjzmsYhyMRMX9EndO1WnncBsYufT%2B6VWcHl9YpQ4Ys3xhuMWJe3gRdCmhRleih9mdVxCCzlEY%2BjgDQBtcoZuissdBsvJc1zL7busSeETs2hIYSrXRtsYrRc0ahgBYRFHh1HaZQKbb7xRB83PxFD%2F6bEWtJ4PDWdVVI&X-Amz-Signature=9e5a07a273aed3ae7004184caa2acf35deb82cabe80b9753af4b6f7a5bb0d893&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J35B6G4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChgrWH8I2554d93UlMUcgg9k2xgp%2Fyc2te31eJx6GxkwIhAOJZtnLWzglj27ZF%2B8zkRgWE3kiCwRpLQLXzM1gcPHmDKv8DCDUQABoMNjM3NDIzMTgzODA1IgwQ%2BXLijh1LFJq4aQcq3AMuoVwO6umhuYXY9UISv9uSOOKBHc0ULC6pnOTywXTWeUf2IDtnv%2B42JcCMKNCeEBtSz0zC9X%2BWhFNYencX1eRx4VKwgBhCbCl7aqlioUDLxJZHhLZNX6fOfw6q5%2B3UlUltgHkwLlqyVwmQAnPw0ZMVfN4srApxx%2Buv87yIcKFn%2BxXAVnUt7NhVR%2F2PheXOHN0zlRgaa2Tq65eevrzRemCiEHvStTrffkR5o2vsRjTe5Z1v8JjV9Wr0TvfHkNelpicZYkdDK8EwBB36Qmp28ZgcWBIDmepz6uxgbW0d0FnWmzY4pUSXn%2BkTzADKhrWrgiyTzMWjixOLQwd3aPLjJU1amXI92OLgMDUZ8jimlHet8Gkn%2B6r5b7nhPLGR6VzukwmTx%2FlmyqPwVNyT34iNSBGRt%2FaB3Ce8jeguZ%2BWLt9LQtn%2FiSd6Z4As6ruHiBe0WVt5zotwRJ9rFSpwpas2jxtg9NhULBXPx5NzJNOLkg0WRwRHdRj4rnf589AayjVE1y%2Bp0CTt0QLrSldyJjMptaC%2BEbfy7noFaAzJXyPYkb6JoUGB87l4%2F7ca9cWS3STmOL5LqQ90yUrpjxxb3dRK8eqdVem%2FUmwce5ow27hOft8cwSCMSoqagCNkqVABcoDCq3Ny%2BBjqkATlhhoDSX%2Bx%2Fj0zPqZYEq5vgoHM9Lqejuh45ttQzv6psX6mrAejtAmYr8IxjzmsYhyMRMX9EndO1WnncBsYufT%2B6VWcHl9YpQ4Ys3xhuMWJe3gRdCmhRleih9mdVxCCzlEY%2BjgDQBtcoZuissdBsvJc1zL7busSeETs2hIYSrXRtsYrRc0ahgBYRFHh1HaZQKbb7xRB83PxFD%2F6bEWtJ4PDWdVVI&X-Amz-Signature=8e1c72028e3299513f4e5ca417c3f5445ea292e483c30be14d54fc49fe1ccf1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J35B6G4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChgrWH8I2554d93UlMUcgg9k2xgp%2Fyc2te31eJx6GxkwIhAOJZtnLWzglj27ZF%2B8zkRgWE3kiCwRpLQLXzM1gcPHmDKv8DCDUQABoMNjM3NDIzMTgzODA1IgwQ%2BXLijh1LFJq4aQcq3AMuoVwO6umhuYXY9UISv9uSOOKBHc0ULC6pnOTywXTWeUf2IDtnv%2B42JcCMKNCeEBtSz0zC9X%2BWhFNYencX1eRx4VKwgBhCbCl7aqlioUDLxJZHhLZNX6fOfw6q5%2B3UlUltgHkwLlqyVwmQAnPw0ZMVfN4srApxx%2Buv87yIcKFn%2BxXAVnUt7NhVR%2F2PheXOHN0zlRgaa2Tq65eevrzRemCiEHvStTrffkR5o2vsRjTe5Z1v8JjV9Wr0TvfHkNelpicZYkdDK8EwBB36Qmp28ZgcWBIDmepz6uxgbW0d0FnWmzY4pUSXn%2BkTzADKhrWrgiyTzMWjixOLQwd3aPLjJU1amXI92OLgMDUZ8jimlHet8Gkn%2B6r5b7nhPLGR6VzukwmTx%2FlmyqPwVNyT34iNSBGRt%2FaB3Ce8jeguZ%2BWLt9LQtn%2FiSd6Z4As6ruHiBe0WVt5zotwRJ9rFSpwpas2jxtg9NhULBXPx5NzJNOLkg0WRwRHdRj4rnf589AayjVE1y%2Bp0CTt0QLrSldyJjMptaC%2BEbfy7noFaAzJXyPYkb6JoUGB87l4%2F7ca9cWS3STmOL5LqQ90yUrpjxxb3dRK8eqdVem%2FUmwce5ow27hOft8cwSCMSoqagCNkqVABcoDCq3Ny%2BBjqkATlhhoDSX%2Bx%2Fj0zPqZYEq5vgoHM9Lqejuh45ttQzv6psX6mrAejtAmYr8IxjzmsYhyMRMX9EndO1WnncBsYufT%2B6VWcHl9YpQ4Ys3xhuMWJe3gRdCmhRleih9mdVxCCzlEY%2BjgDQBtcoZuissdBsvJc1zL7busSeETs2hIYSrXRtsYrRc0ahgBYRFHh1HaZQKbb7xRB83PxFD%2F6bEWtJ4PDWdVVI&X-Amz-Signature=8ca0db860ed4caf01744a61dc4bbf029649417eb2d85b089a87cab49c1e93ff5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J35B6G4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChgrWH8I2554d93UlMUcgg9k2xgp%2Fyc2te31eJx6GxkwIhAOJZtnLWzglj27ZF%2B8zkRgWE3kiCwRpLQLXzM1gcPHmDKv8DCDUQABoMNjM3NDIzMTgzODA1IgwQ%2BXLijh1LFJq4aQcq3AMuoVwO6umhuYXY9UISv9uSOOKBHc0ULC6pnOTywXTWeUf2IDtnv%2B42JcCMKNCeEBtSz0zC9X%2BWhFNYencX1eRx4VKwgBhCbCl7aqlioUDLxJZHhLZNX6fOfw6q5%2B3UlUltgHkwLlqyVwmQAnPw0ZMVfN4srApxx%2Buv87yIcKFn%2BxXAVnUt7NhVR%2F2PheXOHN0zlRgaa2Tq65eevrzRemCiEHvStTrffkR5o2vsRjTe5Z1v8JjV9Wr0TvfHkNelpicZYkdDK8EwBB36Qmp28ZgcWBIDmepz6uxgbW0d0FnWmzY4pUSXn%2BkTzADKhrWrgiyTzMWjixOLQwd3aPLjJU1amXI92OLgMDUZ8jimlHet8Gkn%2B6r5b7nhPLGR6VzukwmTx%2FlmyqPwVNyT34iNSBGRt%2FaB3Ce8jeguZ%2BWLt9LQtn%2FiSd6Z4As6ruHiBe0WVt5zotwRJ9rFSpwpas2jxtg9NhULBXPx5NzJNOLkg0WRwRHdRj4rnf589AayjVE1y%2Bp0CTt0QLrSldyJjMptaC%2BEbfy7noFaAzJXyPYkb6JoUGB87l4%2F7ca9cWS3STmOL5LqQ90yUrpjxxb3dRK8eqdVem%2FUmwce5ow27hOft8cwSCMSoqagCNkqVABcoDCq3Ny%2BBjqkATlhhoDSX%2Bx%2Fj0zPqZYEq5vgoHM9Lqejuh45ttQzv6psX6mrAejtAmYr8IxjzmsYhyMRMX9EndO1WnncBsYufT%2B6VWcHl9YpQ4Ys3xhuMWJe3gRdCmhRleih9mdVxCCzlEY%2BjgDQBtcoZuissdBsvJc1zL7busSeETs2hIYSrXRtsYrRc0ahgBYRFHh1HaZQKbb7xRB83PxFD%2F6bEWtJ4PDWdVVI&X-Amz-Signature=ed90821492d90225000c2e3a938f885e169624f944fb1246366172474916d920&X-Amz-SignedHeaders=host&x-id=GetObject)
