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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDAFILQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZNX9Tt2wLtJhiGLZ9pit0wlHAXKIRnBqNZLmPfqUIUAIhAKITQZM55tRgT%2B5BnhtTzLFZD5b2r8byVWpwK958myYRKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFSXxeooBUnIMu4ZYq3ANXjG5np3gFiUP5Lx1uq4fszOmP%2BTzlPAThS1o4W%2FLC0lu8otFPt5uFlyYt9adMex7snqeS1eGutfHmJPAObaov3d1ScWGO1D%2B1739LXkkcOp67CDN6fgCoUpt8UYJu3jADNxDkeSMvTiGVK%2FTjiHQluB1mNzVxq%2BgTQOhK3hyjg%2FmalL6dAC2cr4bjhdzpwdcD6XkaVXYQpM2z1ZL1jjYo%2BDy8OlhT48QyJRLkcX7sWU9%2BnC6DskRlKJaKDLzF14gws6wIf1NMn%2Bh0urt0sgzQmsX511m5NoiBjqiGw621p%2F0DAIaG7DHczoBV5f53rvfTQIWxYGNrBZE5nnO79tO6ztslI4rkIz0Z3wmAvxdBoB%2FWDm%2Bc2c41kfD5y2BeDwKmqhhihM4u1fPLi3T1vZRVxZNcDyyn61msoUtK8nP8%2BJZRICUTYi8hTGWQmNzM6VRS3EL4QMAh01kv%2FMAhgyqHKKtMuG1CmToHHbyewa9LZQhu5v677QdC8QvR%2BvvBRJzwk4VhfMXWJBFkZpfLHuvEIXagR8pOrxhfFGsQ0EjIR9tZIXDRsdXyg6bGTgYJiGBkRYvOVxY6UNokBBh2Ze%2BxJGyG6dsCBuKFRQZ5koLiT10sBBEkRq9ACoMBgzDpk67BBjqkAWUfAmYV%2BMsLscAMtWBTdZMhVkMrEgSB5%2F4zV8cmiDE1HIiGUvNweiGR%2BD4c3AZbKaKbnazhDIpPz%2BL3MOP9mX%2BZ4c6Cc0ke%2BYtfdfeJJ3qA40xIi1%2FxtX9RG0mkFBodeOq7rZGm3C3YbMMB22ZKQm%2FoQ%2BaRil5rXnljDreXssnF89CPT7CZ6Kq5qQOn0GrZGA7G%2BEpiek%2F8dAe29v%2FUvtQ9vPz7&X-Amz-Signature=45a4fbad7918ef95518bbfb7b66bf46accad6586cc1cfabd4a91e89af2f78f1f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDAFILQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZNX9Tt2wLtJhiGLZ9pit0wlHAXKIRnBqNZLmPfqUIUAIhAKITQZM55tRgT%2B5BnhtTzLFZD5b2r8byVWpwK958myYRKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFSXxeooBUnIMu4ZYq3ANXjG5np3gFiUP5Lx1uq4fszOmP%2BTzlPAThS1o4W%2FLC0lu8otFPt5uFlyYt9adMex7snqeS1eGutfHmJPAObaov3d1ScWGO1D%2B1739LXkkcOp67CDN6fgCoUpt8UYJu3jADNxDkeSMvTiGVK%2FTjiHQluB1mNzVxq%2BgTQOhK3hyjg%2FmalL6dAC2cr4bjhdzpwdcD6XkaVXYQpM2z1ZL1jjYo%2BDy8OlhT48QyJRLkcX7sWU9%2BnC6DskRlKJaKDLzF14gws6wIf1NMn%2Bh0urt0sgzQmsX511m5NoiBjqiGw621p%2F0DAIaG7DHczoBV5f53rvfTQIWxYGNrBZE5nnO79tO6ztslI4rkIz0Z3wmAvxdBoB%2FWDm%2Bc2c41kfD5y2BeDwKmqhhihM4u1fPLi3T1vZRVxZNcDyyn61msoUtK8nP8%2BJZRICUTYi8hTGWQmNzM6VRS3EL4QMAh01kv%2FMAhgyqHKKtMuG1CmToHHbyewa9LZQhu5v677QdC8QvR%2BvvBRJzwk4VhfMXWJBFkZpfLHuvEIXagR8pOrxhfFGsQ0EjIR9tZIXDRsdXyg6bGTgYJiGBkRYvOVxY6UNokBBh2Ze%2BxJGyG6dsCBuKFRQZ5koLiT10sBBEkRq9ACoMBgzDpk67BBjqkAWUfAmYV%2BMsLscAMtWBTdZMhVkMrEgSB5%2F4zV8cmiDE1HIiGUvNweiGR%2BD4c3AZbKaKbnazhDIpPz%2BL3MOP9mX%2BZ4c6Cc0ke%2BYtfdfeJJ3qA40xIi1%2FxtX9RG0mkFBodeOq7rZGm3C3YbMMB22ZKQm%2FoQ%2BaRil5rXnljDreXssnF89CPT7CZ6Kq5qQOn0GrZGA7G%2BEpiek%2F8dAe29v%2FUvtQ9vPz7&X-Amz-Signature=d393e097f7fdd550ac60e509c2695590c40c85efc49e8fca0fe9895ddf1e7cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDAFILQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZNX9Tt2wLtJhiGLZ9pit0wlHAXKIRnBqNZLmPfqUIUAIhAKITQZM55tRgT%2B5BnhtTzLFZD5b2r8byVWpwK958myYRKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFSXxeooBUnIMu4ZYq3ANXjG5np3gFiUP5Lx1uq4fszOmP%2BTzlPAThS1o4W%2FLC0lu8otFPt5uFlyYt9adMex7snqeS1eGutfHmJPAObaov3d1ScWGO1D%2B1739LXkkcOp67CDN6fgCoUpt8UYJu3jADNxDkeSMvTiGVK%2FTjiHQluB1mNzVxq%2BgTQOhK3hyjg%2FmalL6dAC2cr4bjhdzpwdcD6XkaVXYQpM2z1ZL1jjYo%2BDy8OlhT48QyJRLkcX7sWU9%2BnC6DskRlKJaKDLzF14gws6wIf1NMn%2Bh0urt0sgzQmsX511m5NoiBjqiGw621p%2F0DAIaG7DHczoBV5f53rvfTQIWxYGNrBZE5nnO79tO6ztslI4rkIz0Z3wmAvxdBoB%2FWDm%2Bc2c41kfD5y2BeDwKmqhhihM4u1fPLi3T1vZRVxZNcDyyn61msoUtK8nP8%2BJZRICUTYi8hTGWQmNzM6VRS3EL4QMAh01kv%2FMAhgyqHKKtMuG1CmToHHbyewa9LZQhu5v677QdC8QvR%2BvvBRJzwk4VhfMXWJBFkZpfLHuvEIXagR8pOrxhfFGsQ0EjIR9tZIXDRsdXyg6bGTgYJiGBkRYvOVxY6UNokBBh2Ze%2BxJGyG6dsCBuKFRQZ5koLiT10sBBEkRq9ACoMBgzDpk67BBjqkAWUfAmYV%2BMsLscAMtWBTdZMhVkMrEgSB5%2F4zV8cmiDE1HIiGUvNweiGR%2BD4c3AZbKaKbnazhDIpPz%2BL3MOP9mX%2BZ4c6Cc0ke%2BYtfdfeJJ3qA40xIi1%2FxtX9RG0mkFBodeOq7rZGm3C3YbMMB22ZKQm%2FoQ%2BaRil5rXnljDreXssnF89CPT7CZ6Kq5qQOn0GrZGA7G%2BEpiek%2F8dAe29v%2FUvtQ9vPz7&X-Amz-Signature=fda2f622591b1a22ce64d009551bd220eafca717bd083fcdcbb6d092f3d2bd64&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDAFILQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZNX9Tt2wLtJhiGLZ9pit0wlHAXKIRnBqNZLmPfqUIUAIhAKITQZM55tRgT%2B5BnhtTzLFZD5b2r8byVWpwK958myYRKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFSXxeooBUnIMu4ZYq3ANXjG5np3gFiUP5Lx1uq4fszOmP%2BTzlPAThS1o4W%2FLC0lu8otFPt5uFlyYt9adMex7snqeS1eGutfHmJPAObaov3d1ScWGO1D%2B1739LXkkcOp67CDN6fgCoUpt8UYJu3jADNxDkeSMvTiGVK%2FTjiHQluB1mNzVxq%2BgTQOhK3hyjg%2FmalL6dAC2cr4bjhdzpwdcD6XkaVXYQpM2z1ZL1jjYo%2BDy8OlhT48QyJRLkcX7sWU9%2BnC6DskRlKJaKDLzF14gws6wIf1NMn%2Bh0urt0sgzQmsX511m5NoiBjqiGw621p%2F0DAIaG7DHczoBV5f53rvfTQIWxYGNrBZE5nnO79tO6ztslI4rkIz0Z3wmAvxdBoB%2FWDm%2Bc2c41kfD5y2BeDwKmqhhihM4u1fPLi3T1vZRVxZNcDyyn61msoUtK8nP8%2BJZRICUTYi8hTGWQmNzM6VRS3EL4QMAh01kv%2FMAhgyqHKKtMuG1CmToHHbyewa9LZQhu5v677QdC8QvR%2BvvBRJzwk4VhfMXWJBFkZpfLHuvEIXagR8pOrxhfFGsQ0EjIR9tZIXDRsdXyg6bGTgYJiGBkRYvOVxY6UNokBBh2Ze%2BxJGyG6dsCBuKFRQZ5koLiT10sBBEkRq9ACoMBgzDpk67BBjqkAWUfAmYV%2BMsLscAMtWBTdZMhVkMrEgSB5%2F4zV8cmiDE1HIiGUvNweiGR%2BD4c3AZbKaKbnazhDIpPz%2BL3MOP9mX%2BZ4c6Cc0ke%2BYtfdfeJJ3qA40xIi1%2FxtX9RG0mkFBodeOq7rZGm3C3YbMMB22ZKQm%2FoQ%2BaRil5rXnljDreXssnF89CPT7CZ6Kq5qQOn0GrZGA7G%2BEpiek%2F8dAe29v%2FUvtQ9vPz7&X-Amz-Signature=cdbf33ec6fd00cf6839d0bc59ad2f372e1934be12ec51c7de84ffc41b62c2a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDAFILQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZNX9Tt2wLtJhiGLZ9pit0wlHAXKIRnBqNZLmPfqUIUAIhAKITQZM55tRgT%2B5BnhtTzLFZD5b2r8byVWpwK958myYRKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFSXxeooBUnIMu4ZYq3ANXjG5np3gFiUP5Lx1uq4fszOmP%2BTzlPAThS1o4W%2FLC0lu8otFPt5uFlyYt9adMex7snqeS1eGutfHmJPAObaov3d1ScWGO1D%2B1739LXkkcOp67CDN6fgCoUpt8UYJu3jADNxDkeSMvTiGVK%2FTjiHQluB1mNzVxq%2BgTQOhK3hyjg%2FmalL6dAC2cr4bjhdzpwdcD6XkaVXYQpM2z1ZL1jjYo%2BDy8OlhT48QyJRLkcX7sWU9%2BnC6DskRlKJaKDLzF14gws6wIf1NMn%2Bh0urt0sgzQmsX511m5NoiBjqiGw621p%2F0DAIaG7DHczoBV5f53rvfTQIWxYGNrBZE5nnO79tO6ztslI4rkIz0Z3wmAvxdBoB%2FWDm%2Bc2c41kfD5y2BeDwKmqhhihM4u1fPLi3T1vZRVxZNcDyyn61msoUtK8nP8%2BJZRICUTYi8hTGWQmNzM6VRS3EL4QMAh01kv%2FMAhgyqHKKtMuG1CmToHHbyewa9LZQhu5v677QdC8QvR%2BvvBRJzwk4VhfMXWJBFkZpfLHuvEIXagR8pOrxhfFGsQ0EjIR9tZIXDRsdXyg6bGTgYJiGBkRYvOVxY6UNokBBh2Ze%2BxJGyG6dsCBuKFRQZ5koLiT10sBBEkRq9ACoMBgzDpk67BBjqkAWUfAmYV%2BMsLscAMtWBTdZMhVkMrEgSB5%2F4zV8cmiDE1HIiGUvNweiGR%2BD4c3AZbKaKbnazhDIpPz%2BL3MOP9mX%2BZ4c6Cc0ke%2BYtfdfeJJ3qA40xIi1%2FxtX9RG0mkFBodeOq7rZGm3C3YbMMB22ZKQm%2FoQ%2BaRil5rXnljDreXssnF89CPT7CZ6Kq5qQOn0GrZGA7G%2BEpiek%2F8dAe29v%2FUvtQ9vPz7&X-Amz-Signature=28ab571e13d531bcbf41ac60370ca2375466c3e634d736385238fcd60a7816cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDAFILQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZNX9Tt2wLtJhiGLZ9pit0wlHAXKIRnBqNZLmPfqUIUAIhAKITQZM55tRgT%2B5BnhtTzLFZD5b2r8byVWpwK958myYRKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFSXxeooBUnIMu4ZYq3ANXjG5np3gFiUP5Lx1uq4fszOmP%2BTzlPAThS1o4W%2FLC0lu8otFPt5uFlyYt9adMex7snqeS1eGutfHmJPAObaov3d1ScWGO1D%2B1739LXkkcOp67CDN6fgCoUpt8UYJu3jADNxDkeSMvTiGVK%2FTjiHQluB1mNzVxq%2BgTQOhK3hyjg%2FmalL6dAC2cr4bjhdzpwdcD6XkaVXYQpM2z1ZL1jjYo%2BDy8OlhT48QyJRLkcX7sWU9%2BnC6DskRlKJaKDLzF14gws6wIf1NMn%2Bh0urt0sgzQmsX511m5NoiBjqiGw621p%2F0DAIaG7DHczoBV5f53rvfTQIWxYGNrBZE5nnO79tO6ztslI4rkIz0Z3wmAvxdBoB%2FWDm%2Bc2c41kfD5y2BeDwKmqhhihM4u1fPLi3T1vZRVxZNcDyyn61msoUtK8nP8%2BJZRICUTYi8hTGWQmNzM6VRS3EL4QMAh01kv%2FMAhgyqHKKtMuG1CmToHHbyewa9LZQhu5v677QdC8QvR%2BvvBRJzwk4VhfMXWJBFkZpfLHuvEIXagR8pOrxhfFGsQ0EjIR9tZIXDRsdXyg6bGTgYJiGBkRYvOVxY6UNokBBh2Ze%2BxJGyG6dsCBuKFRQZ5koLiT10sBBEkRq9ACoMBgzDpk67BBjqkAWUfAmYV%2BMsLscAMtWBTdZMhVkMrEgSB5%2F4zV8cmiDE1HIiGUvNweiGR%2BD4c3AZbKaKbnazhDIpPz%2BL3MOP9mX%2BZ4c6Cc0ke%2BYtfdfeJJ3qA40xIi1%2FxtX9RG0mkFBodeOq7rZGm3C3YbMMB22ZKQm%2FoQ%2BaRil5rXnljDreXssnF89CPT7CZ6Kq5qQOn0GrZGA7G%2BEpiek%2F8dAe29v%2FUvtQ9vPz7&X-Amz-Signature=511db72998a16dc84cfa2149aeda9b1dad98feb51033a621aada8d3050f77630&X-Amz-SignedHeaders=host&x-id=GetObject)
