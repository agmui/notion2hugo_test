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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2NB7XAD%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGI0PJaVqjS4zNugxJNFxEZXeqRupKY9milv4Btf8F%2BYAiBbRUJqHfVid1wcH40RNzxIQCItEp%2Fi7tH4HzcVCZITHSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPOMUAhQVKo5aHgyKKtwD%2BoMLUuU1ec9So1l6oP7aOu6j6nG%2B1FdBVaU7yBAHjR3H9Ly1cksf05CI%2BeD7uJy1S%2B1hBG5IZj0fNL%2B8pmgWB5P%2BCYOzTDJ1Dca1eNsACfqOcItmjzSfcGdUm0nGf62efNn%2Bb%2FRRtUBKbOkvMdv5tPzjjPhW8wLfr1bRkFHBdVzeIEh%2FtCUFnwtjzhQmbsG7ebeQukVZwwZ1JEg0w5I0MuJ21208l3WjC7LASqAYMErIQn%2B627zwjRdPOtI253vnw7Hsa5eV1VWMfNWj52MOUW2ikpmqfW8qcl9Nh%2F4ucajfNXwi7fOQ%2BqZSoVDlJqRj9e5O7%2B89GIIGYDum9Yiddy0x3ForgxJamda8RRJz8XrUn2SBhpY7oDyQQf%2BZ3nWzutvhbx7a8GKQD6%2BqfZ%2FoHtlIA4zfk3BtCAaWJn5waVVpUjNLgVMVzzRndD7Ejat0KjtHLYiCZ%2FYsSKaFhc9pdLOyl0%2FX%2F5JrrQCeETcdyWEtVVhH7j%2BbB%2BZiuHjrI%2FFOTfKdporTkm0HJH%2FYNo%2BIOp%2F3l%2F8q4pk7PeSXqTXHY6u%2BZ828%2FvYCGn6bSsvLs%2But4oBvoUE5SqGBy2fchHa1OoTqKhG5UXKGYXaqcLXJApl%2BHRmy6X%2BxUdr5XK4wi7mtwgY6pgFo3PToT2EVAnQPn%2Fq5z%2F6OiNPrfT5ecR%2BCv%2F8rc23qw2Xsc44Ms2%2FiEXF7elMbjR8j%2B3OYi1JL74FelrFF4YE%2FSkRH6KQan%2FTc95tH7QuMj3M8wnvXMdHSDkjSRgZlTR9tShbh%2B3XztFM4wA6jDpCYuvez9w8AKuRZvEp6AfFG38IBOE07ExQYc2XbBkjTf%2BXSHjWg3ANvj4tG1%2BbCR7C1xQR0P0vv&X-Amz-Signature=ad11c1453a238838fe90e76981df8442c5cd89e351cb63b89a15f737ee1e16c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2NB7XAD%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGI0PJaVqjS4zNugxJNFxEZXeqRupKY9milv4Btf8F%2BYAiBbRUJqHfVid1wcH40RNzxIQCItEp%2Fi7tH4HzcVCZITHSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPOMUAhQVKo5aHgyKKtwD%2BoMLUuU1ec9So1l6oP7aOu6j6nG%2B1FdBVaU7yBAHjR3H9Ly1cksf05CI%2BeD7uJy1S%2B1hBG5IZj0fNL%2B8pmgWB5P%2BCYOzTDJ1Dca1eNsACfqOcItmjzSfcGdUm0nGf62efNn%2Bb%2FRRtUBKbOkvMdv5tPzjjPhW8wLfr1bRkFHBdVzeIEh%2FtCUFnwtjzhQmbsG7ebeQukVZwwZ1JEg0w5I0MuJ21208l3WjC7LASqAYMErIQn%2B627zwjRdPOtI253vnw7Hsa5eV1VWMfNWj52MOUW2ikpmqfW8qcl9Nh%2F4ucajfNXwi7fOQ%2BqZSoVDlJqRj9e5O7%2B89GIIGYDum9Yiddy0x3ForgxJamda8RRJz8XrUn2SBhpY7oDyQQf%2BZ3nWzutvhbx7a8GKQD6%2BqfZ%2FoHtlIA4zfk3BtCAaWJn5waVVpUjNLgVMVzzRndD7Ejat0KjtHLYiCZ%2FYsSKaFhc9pdLOyl0%2FX%2F5JrrQCeETcdyWEtVVhH7j%2BbB%2BZiuHjrI%2FFOTfKdporTkm0HJH%2FYNo%2BIOp%2F3l%2F8q4pk7PeSXqTXHY6u%2BZ828%2FvYCGn6bSsvLs%2But4oBvoUE5SqGBy2fchHa1OoTqKhG5UXKGYXaqcLXJApl%2BHRmy6X%2BxUdr5XK4wi7mtwgY6pgFo3PToT2EVAnQPn%2Fq5z%2F6OiNPrfT5ecR%2BCv%2F8rc23qw2Xsc44Ms2%2FiEXF7elMbjR8j%2B3OYi1JL74FelrFF4YE%2FSkRH6KQan%2FTc95tH7QuMj3M8wnvXMdHSDkjSRgZlTR9tShbh%2B3XztFM4wA6jDpCYuvez9w8AKuRZvEp6AfFG38IBOE07ExQYc2XbBkjTf%2BXSHjWg3ANvj4tG1%2BbCR7C1xQR0P0vv&X-Amz-Signature=dd4c6d4a560f007bf4b4a6eede3a09855de66e43e1b64d3daf30aa1ff1a5a1e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2NB7XAD%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGI0PJaVqjS4zNugxJNFxEZXeqRupKY9milv4Btf8F%2BYAiBbRUJqHfVid1wcH40RNzxIQCItEp%2Fi7tH4HzcVCZITHSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPOMUAhQVKo5aHgyKKtwD%2BoMLUuU1ec9So1l6oP7aOu6j6nG%2B1FdBVaU7yBAHjR3H9Ly1cksf05CI%2BeD7uJy1S%2B1hBG5IZj0fNL%2B8pmgWB5P%2BCYOzTDJ1Dca1eNsACfqOcItmjzSfcGdUm0nGf62efNn%2Bb%2FRRtUBKbOkvMdv5tPzjjPhW8wLfr1bRkFHBdVzeIEh%2FtCUFnwtjzhQmbsG7ebeQukVZwwZ1JEg0w5I0MuJ21208l3WjC7LASqAYMErIQn%2B627zwjRdPOtI253vnw7Hsa5eV1VWMfNWj52MOUW2ikpmqfW8qcl9Nh%2F4ucajfNXwi7fOQ%2BqZSoVDlJqRj9e5O7%2B89GIIGYDum9Yiddy0x3ForgxJamda8RRJz8XrUn2SBhpY7oDyQQf%2BZ3nWzutvhbx7a8GKQD6%2BqfZ%2FoHtlIA4zfk3BtCAaWJn5waVVpUjNLgVMVzzRndD7Ejat0KjtHLYiCZ%2FYsSKaFhc9pdLOyl0%2FX%2F5JrrQCeETcdyWEtVVhH7j%2BbB%2BZiuHjrI%2FFOTfKdporTkm0HJH%2FYNo%2BIOp%2F3l%2F8q4pk7PeSXqTXHY6u%2BZ828%2FvYCGn6bSsvLs%2But4oBvoUE5SqGBy2fchHa1OoTqKhG5UXKGYXaqcLXJApl%2BHRmy6X%2BxUdr5XK4wi7mtwgY6pgFo3PToT2EVAnQPn%2Fq5z%2F6OiNPrfT5ecR%2BCv%2F8rc23qw2Xsc44Ms2%2FiEXF7elMbjR8j%2B3OYi1JL74FelrFF4YE%2FSkRH6KQan%2FTc95tH7QuMj3M8wnvXMdHSDkjSRgZlTR9tShbh%2B3XztFM4wA6jDpCYuvez9w8AKuRZvEp6AfFG38IBOE07ExQYc2XbBkjTf%2BXSHjWg3ANvj4tG1%2BbCR7C1xQR0P0vv&X-Amz-Signature=6b5262ef6b7f90e4e556876bf3e2bc2132746855c8711e53c7adc08c7c3703f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2NB7XAD%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGI0PJaVqjS4zNugxJNFxEZXeqRupKY9milv4Btf8F%2BYAiBbRUJqHfVid1wcH40RNzxIQCItEp%2Fi7tH4HzcVCZITHSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPOMUAhQVKo5aHgyKKtwD%2BoMLUuU1ec9So1l6oP7aOu6j6nG%2B1FdBVaU7yBAHjR3H9Ly1cksf05CI%2BeD7uJy1S%2B1hBG5IZj0fNL%2B8pmgWB5P%2BCYOzTDJ1Dca1eNsACfqOcItmjzSfcGdUm0nGf62efNn%2Bb%2FRRtUBKbOkvMdv5tPzjjPhW8wLfr1bRkFHBdVzeIEh%2FtCUFnwtjzhQmbsG7ebeQukVZwwZ1JEg0w5I0MuJ21208l3WjC7LASqAYMErIQn%2B627zwjRdPOtI253vnw7Hsa5eV1VWMfNWj52MOUW2ikpmqfW8qcl9Nh%2F4ucajfNXwi7fOQ%2BqZSoVDlJqRj9e5O7%2B89GIIGYDum9Yiddy0x3ForgxJamda8RRJz8XrUn2SBhpY7oDyQQf%2BZ3nWzutvhbx7a8GKQD6%2BqfZ%2FoHtlIA4zfk3BtCAaWJn5waVVpUjNLgVMVzzRndD7Ejat0KjtHLYiCZ%2FYsSKaFhc9pdLOyl0%2FX%2F5JrrQCeETcdyWEtVVhH7j%2BbB%2BZiuHjrI%2FFOTfKdporTkm0HJH%2FYNo%2BIOp%2F3l%2F8q4pk7PeSXqTXHY6u%2BZ828%2FvYCGn6bSsvLs%2But4oBvoUE5SqGBy2fchHa1OoTqKhG5UXKGYXaqcLXJApl%2BHRmy6X%2BxUdr5XK4wi7mtwgY6pgFo3PToT2EVAnQPn%2Fq5z%2F6OiNPrfT5ecR%2BCv%2F8rc23qw2Xsc44Ms2%2FiEXF7elMbjR8j%2B3OYi1JL74FelrFF4YE%2FSkRH6KQan%2FTc95tH7QuMj3M8wnvXMdHSDkjSRgZlTR9tShbh%2B3XztFM4wA6jDpCYuvez9w8AKuRZvEp6AfFG38IBOE07ExQYc2XbBkjTf%2BXSHjWg3ANvj4tG1%2BbCR7C1xQR0P0vv&X-Amz-Signature=8b5dd82677255f1a2c5d4dfe80b5040922b14aa04419c58a88e9bebf15fcedfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2NB7XAD%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGI0PJaVqjS4zNugxJNFxEZXeqRupKY9milv4Btf8F%2BYAiBbRUJqHfVid1wcH40RNzxIQCItEp%2Fi7tH4HzcVCZITHSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPOMUAhQVKo5aHgyKKtwD%2BoMLUuU1ec9So1l6oP7aOu6j6nG%2B1FdBVaU7yBAHjR3H9Ly1cksf05CI%2BeD7uJy1S%2B1hBG5IZj0fNL%2B8pmgWB5P%2BCYOzTDJ1Dca1eNsACfqOcItmjzSfcGdUm0nGf62efNn%2Bb%2FRRtUBKbOkvMdv5tPzjjPhW8wLfr1bRkFHBdVzeIEh%2FtCUFnwtjzhQmbsG7ebeQukVZwwZ1JEg0w5I0MuJ21208l3WjC7LASqAYMErIQn%2B627zwjRdPOtI253vnw7Hsa5eV1VWMfNWj52MOUW2ikpmqfW8qcl9Nh%2F4ucajfNXwi7fOQ%2BqZSoVDlJqRj9e5O7%2B89GIIGYDum9Yiddy0x3ForgxJamda8RRJz8XrUn2SBhpY7oDyQQf%2BZ3nWzutvhbx7a8GKQD6%2BqfZ%2FoHtlIA4zfk3BtCAaWJn5waVVpUjNLgVMVzzRndD7Ejat0KjtHLYiCZ%2FYsSKaFhc9pdLOyl0%2FX%2F5JrrQCeETcdyWEtVVhH7j%2BbB%2BZiuHjrI%2FFOTfKdporTkm0HJH%2FYNo%2BIOp%2F3l%2F8q4pk7PeSXqTXHY6u%2BZ828%2FvYCGn6bSsvLs%2But4oBvoUE5SqGBy2fchHa1OoTqKhG5UXKGYXaqcLXJApl%2BHRmy6X%2BxUdr5XK4wi7mtwgY6pgFo3PToT2EVAnQPn%2Fq5z%2F6OiNPrfT5ecR%2BCv%2F8rc23qw2Xsc44Ms2%2FiEXF7elMbjR8j%2B3OYi1JL74FelrFF4YE%2FSkRH6KQan%2FTc95tH7QuMj3M8wnvXMdHSDkjSRgZlTR9tShbh%2B3XztFM4wA6jDpCYuvez9w8AKuRZvEp6AfFG38IBOE07ExQYc2XbBkjTf%2BXSHjWg3ANvj4tG1%2BbCR7C1xQR0P0vv&X-Amz-Signature=6db8b9658fceb2fdf68145c5b69bb7d340a1a540e858c2cd9d2a69831a26e596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2NB7XAD%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGI0PJaVqjS4zNugxJNFxEZXeqRupKY9milv4Btf8F%2BYAiBbRUJqHfVid1wcH40RNzxIQCItEp%2Fi7tH4HzcVCZITHSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPOMUAhQVKo5aHgyKKtwD%2BoMLUuU1ec9So1l6oP7aOu6j6nG%2B1FdBVaU7yBAHjR3H9Ly1cksf05CI%2BeD7uJy1S%2B1hBG5IZj0fNL%2B8pmgWB5P%2BCYOzTDJ1Dca1eNsACfqOcItmjzSfcGdUm0nGf62efNn%2Bb%2FRRtUBKbOkvMdv5tPzjjPhW8wLfr1bRkFHBdVzeIEh%2FtCUFnwtjzhQmbsG7ebeQukVZwwZ1JEg0w5I0MuJ21208l3WjC7LASqAYMErIQn%2B627zwjRdPOtI253vnw7Hsa5eV1VWMfNWj52MOUW2ikpmqfW8qcl9Nh%2F4ucajfNXwi7fOQ%2BqZSoVDlJqRj9e5O7%2B89GIIGYDum9Yiddy0x3ForgxJamda8RRJz8XrUn2SBhpY7oDyQQf%2BZ3nWzutvhbx7a8GKQD6%2BqfZ%2FoHtlIA4zfk3BtCAaWJn5waVVpUjNLgVMVzzRndD7Ejat0KjtHLYiCZ%2FYsSKaFhc9pdLOyl0%2FX%2F5JrrQCeETcdyWEtVVhH7j%2BbB%2BZiuHjrI%2FFOTfKdporTkm0HJH%2FYNo%2BIOp%2F3l%2F8q4pk7PeSXqTXHY6u%2BZ828%2FvYCGn6bSsvLs%2But4oBvoUE5SqGBy2fchHa1OoTqKhG5UXKGYXaqcLXJApl%2BHRmy6X%2BxUdr5XK4wi7mtwgY6pgFo3PToT2EVAnQPn%2Fq5z%2F6OiNPrfT5ecR%2BCv%2F8rc23qw2Xsc44Ms2%2FiEXF7elMbjR8j%2B3OYi1JL74FelrFF4YE%2FSkRH6KQan%2FTc95tH7QuMj3M8wnvXMdHSDkjSRgZlTR9tShbh%2B3XztFM4wA6jDpCYuvez9w8AKuRZvEp6AfFG38IBOE07ExQYc2XbBkjTf%2BXSHjWg3ANvj4tG1%2BbCR7C1xQR0P0vv&X-Amz-Signature=0ee516afca888b1058450bfdedcb086b00e7e329b36e38046684502cfee73351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
