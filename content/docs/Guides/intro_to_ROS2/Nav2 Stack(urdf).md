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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFRPANEV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1kDNtCJHbABMK4n6MI0BUFHLk%2BR3xUV9%2FIsp50%2BnOOwIhAInXsJiMuBgZK0Qri1G2O7WuvWYW80Rv687hVSDyozzyKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYOcPPriaAEmdOZb4q3APW8wkicVtZ7lNvsw2mRhUqmj%2FJplr6UwFN%2BTSHsB83f1CXGkgE7ZryxgJN%2BGhN%2FapblEHb36Y%2B5GZIhACjfwfPqiBiPkYN6GcaWR3lkbHbLRYBwemtSZ5b4RO5T%2FbEaeuuzyoKoiEYvV3Z%2FBbrnObWe60noAdaVpOTogXyIct0Qr2kXhG6PDRv8%2BzTvcYgEwUx%2FRxnhF1mI90v3rGKoytg%2B2vh%2BYuVdLgSHzIe6ZFL79Jl6rgr%2BBiE1F4opb%2BqvjUpbZsQkn%2BUrxC8RIP3iP4KkKTlbNEfI91GJ1DX7fvsk0r3G5SqTeZMsIUeWQv3cHXAjtGDIclhPRogny93IEZv7WpJhQBiseVZo8G31lk0sRJOooeOHj6iQ7ZTPZSM6gyxAcAVwWpbf1OLhiQlDuj6NAbRtWbGpLLbt9xmrtOtav%2BVKt7Kk6RK88YUM3CzvNldO7nkqMyhvRiJYwnKwM5zmGw389AZLFL4CySkTWT8n4tu0qqqfJ%2B3OU%2B0Xd5uihYaz2CZXvjlKrUZRJJgIfLPWQkUHoqJFYNY%2BfvxyFOTo2Z5UqBBk8Bb0LgYlHRWnqAzGuD6K5ErBY6DABeMSqQs8JVcPWb9dWu5mbKedMxwWAe0m2DCtSpy8qPvbTDguojDBjqkAc79K%2BbRD4l2LxouGCAsFGZum0PY5Ps9OjGjAG%2FBsUW1AYkLYVKfwbsh%2BCY7lZMxrWFRkb%2FxkxksuxGx4PYwJ60sfH%2FI9Wnb54EesIJSy5XNdcHzzmUJyx9W%2FqO1IMXp9iuTUSqPUjArqdrr2ZPqcMOEdFonJhX%2FDWCYdGjYv%2BUwVgfsla4JAuxr%2BFdVsXlxxQOikkz8xZZeOG0SQFA9bQMndMah&X-Amz-Signature=e05e4ddbe46259fe42982e46ffe30f5fb07707f0d3ce67d650e788c18433d68a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFRPANEV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1kDNtCJHbABMK4n6MI0BUFHLk%2BR3xUV9%2FIsp50%2BnOOwIhAInXsJiMuBgZK0Qri1G2O7WuvWYW80Rv687hVSDyozzyKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYOcPPriaAEmdOZb4q3APW8wkicVtZ7lNvsw2mRhUqmj%2FJplr6UwFN%2BTSHsB83f1CXGkgE7ZryxgJN%2BGhN%2FapblEHb36Y%2B5GZIhACjfwfPqiBiPkYN6GcaWR3lkbHbLRYBwemtSZ5b4RO5T%2FbEaeuuzyoKoiEYvV3Z%2FBbrnObWe60noAdaVpOTogXyIct0Qr2kXhG6PDRv8%2BzTvcYgEwUx%2FRxnhF1mI90v3rGKoytg%2B2vh%2BYuVdLgSHzIe6ZFL79Jl6rgr%2BBiE1F4opb%2BqvjUpbZsQkn%2BUrxC8RIP3iP4KkKTlbNEfI91GJ1DX7fvsk0r3G5SqTeZMsIUeWQv3cHXAjtGDIclhPRogny93IEZv7WpJhQBiseVZo8G31lk0sRJOooeOHj6iQ7ZTPZSM6gyxAcAVwWpbf1OLhiQlDuj6NAbRtWbGpLLbt9xmrtOtav%2BVKt7Kk6RK88YUM3CzvNldO7nkqMyhvRiJYwnKwM5zmGw389AZLFL4CySkTWT8n4tu0qqqfJ%2B3OU%2B0Xd5uihYaz2CZXvjlKrUZRJJgIfLPWQkUHoqJFYNY%2BfvxyFOTo2Z5UqBBk8Bb0LgYlHRWnqAzGuD6K5ErBY6DABeMSqQs8JVcPWb9dWu5mbKedMxwWAe0m2DCtSpy8qPvbTDguojDBjqkAc79K%2BbRD4l2LxouGCAsFGZum0PY5Ps9OjGjAG%2FBsUW1AYkLYVKfwbsh%2BCY7lZMxrWFRkb%2FxkxksuxGx4PYwJ60sfH%2FI9Wnb54EesIJSy5XNdcHzzmUJyx9W%2FqO1IMXp9iuTUSqPUjArqdrr2ZPqcMOEdFonJhX%2FDWCYdGjYv%2BUwVgfsla4JAuxr%2BFdVsXlxxQOikkz8xZZeOG0SQFA9bQMndMah&X-Amz-Signature=f8254c42b863f38c5ea0f41d3a8a63d3a483a0600dd72f06997741c22bd5098c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFRPANEV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1kDNtCJHbABMK4n6MI0BUFHLk%2BR3xUV9%2FIsp50%2BnOOwIhAInXsJiMuBgZK0Qri1G2O7WuvWYW80Rv687hVSDyozzyKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYOcPPriaAEmdOZb4q3APW8wkicVtZ7lNvsw2mRhUqmj%2FJplr6UwFN%2BTSHsB83f1CXGkgE7ZryxgJN%2BGhN%2FapblEHb36Y%2B5GZIhACjfwfPqiBiPkYN6GcaWR3lkbHbLRYBwemtSZ5b4RO5T%2FbEaeuuzyoKoiEYvV3Z%2FBbrnObWe60noAdaVpOTogXyIct0Qr2kXhG6PDRv8%2BzTvcYgEwUx%2FRxnhF1mI90v3rGKoytg%2B2vh%2BYuVdLgSHzIe6ZFL79Jl6rgr%2BBiE1F4opb%2BqvjUpbZsQkn%2BUrxC8RIP3iP4KkKTlbNEfI91GJ1DX7fvsk0r3G5SqTeZMsIUeWQv3cHXAjtGDIclhPRogny93IEZv7WpJhQBiseVZo8G31lk0sRJOooeOHj6iQ7ZTPZSM6gyxAcAVwWpbf1OLhiQlDuj6NAbRtWbGpLLbt9xmrtOtav%2BVKt7Kk6RK88YUM3CzvNldO7nkqMyhvRiJYwnKwM5zmGw389AZLFL4CySkTWT8n4tu0qqqfJ%2B3OU%2B0Xd5uihYaz2CZXvjlKrUZRJJgIfLPWQkUHoqJFYNY%2BfvxyFOTo2Z5UqBBk8Bb0LgYlHRWnqAzGuD6K5ErBY6DABeMSqQs8JVcPWb9dWu5mbKedMxwWAe0m2DCtSpy8qPvbTDguojDBjqkAc79K%2BbRD4l2LxouGCAsFGZum0PY5Ps9OjGjAG%2FBsUW1AYkLYVKfwbsh%2BCY7lZMxrWFRkb%2FxkxksuxGx4PYwJ60sfH%2FI9Wnb54EesIJSy5XNdcHzzmUJyx9W%2FqO1IMXp9iuTUSqPUjArqdrr2ZPqcMOEdFonJhX%2FDWCYdGjYv%2BUwVgfsla4JAuxr%2BFdVsXlxxQOikkz8xZZeOG0SQFA9bQMndMah&X-Amz-Signature=6738cd0fa97bde2baf6823ba797696a0d943e74a7d5ac59b4b02d3a4282a1e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFRPANEV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1kDNtCJHbABMK4n6MI0BUFHLk%2BR3xUV9%2FIsp50%2BnOOwIhAInXsJiMuBgZK0Qri1G2O7WuvWYW80Rv687hVSDyozzyKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYOcPPriaAEmdOZb4q3APW8wkicVtZ7lNvsw2mRhUqmj%2FJplr6UwFN%2BTSHsB83f1CXGkgE7ZryxgJN%2BGhN%2FapblEHb36Y%2B5GZIhACjfwfPqiBiPkYN6GcaWR3lkbHbLRYBwemtSZ5b4RO5T%2FbEaeuuzyoKoiEYvV3Z%2FBbrnObWe60noAdaVpOTogXyIct0Qr2kXhG6PDRv8%2BzTvcYgEwUx%2FRxnhF1mI90v3rGKoytg%2B2vh%2BYuVdLgSHzIe6ZFL79Jl6rgr%2BBiE1F4opb%2BqvjUpbZsQkn%2BUrxC8RIP3iP4KkKTlbNEfI91GJ1DX7fvsk0r3G5SqTeZMsIUeWQv3cHXAjtGDIclhPRogny93IEZv7WpJhQBiseVZo8G31lk0sRJOooeOHj6iQ7ZTPZSM6gyxAcAVwWpbf1OLhiQlDuj6NAbRtWbGpLLbt9xmrtOtav%2BVKt7Kk6RK88YUM3CzvNldO7nkqMyhvRiJYwnKwM5zmGw389AZLFL4CySkTWT8n4tu0qqqfJ%2B3OU%2B0Xd5uihYaz2CZXvjlKrUZRJJgIfLPWQkUHoqJFYNY%2BfvxyFOTo2Z5UqBBk8Bb0LgYlHRWnqAzGuD6K5ErBY6DABeMSqQs8JVcPWb9dWu5mbKedMxwWAe0m2DCtSpy8qPvbTDguojDBjqkAc79K%2BbRD4l2LxouGCAsFGZum0PY5Ps9OjGjAG%2FBsUW1AYkLYVKfwbsh%2BCY7lZMxrWFRkb%2FxkxksuxGx4PYwJ60sfH%2FI9Wnb54EesIJSy5XNdcHzzmUJyx9W%2FqO1IMXp9iuTUSqPUjArqdrr2ZPqcMOEdFonJhX%2FDWCYdGjYv%2BUwVgfsla4JAuxr%2BFdVsXlxxQOikkz8xZZeOG0SQFA9bQMndMah&X-Amz-Signature=2dab2844a9cf876af193737ba482551f0bd65a45c73b0a14f052eba69ebe2405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFRPANEV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1kDNtCJHbABMK4n6MI0BUFHLk%2BR3xUV9%2FIsp50%2BnOOwIhAInXsJiMuBgZK0Qri1G2O7WuvWYW80Rv687hVSDyozzyKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYOcPPriaAEmdOZb4q3APW8wkicVtZ7lNvsw2mRhUqmj%2FJplr6UwFN%2BTSHsB83f1CXGkgE7ZryxgJN%2BGhN%2FapblEHb36Y%2B5GZIhACjfwfPqiBiPkYN6GcaWR3lkbHbLRYBwemtSZ5b4RO5T%2FbEaeuuzyoKoiEYvV3Z%2FBbrnObWe60noAdaVpOTogXyIct0Qr2kXhG6PDRv8%2BzTvcYgEwUx%2FRxnhF1mI90v3rGKoytg%2B2vh%2BYuVdLgSHzIe6ZFL79Jl6rgr%2BBiE1F4opb%2BqvjUpbZsQkn%2BUrxC8RIP3iP4KkKTlbNEfI91GJ1DX7fvsk0r3G5SqTeZMsIUeWQv3cHXAjtGDIclhPRogny93IEZv7WpJhQBiseVZo8G31lk0sRJOooeOHj6iQ7ZTPZSM6gyxAcAVwWpbf1OLhiQlDuj6NAbRtWbGpLLbt9xmrtOtav%2BVKt7Kk6RK88YUM3CzvNldO7nkqMyhvRiJYwnKwM5zmGw389AZLFL4CySkTWT8n4tu0qqqfJ%2B3OU%2B0Xd5uihYaz2CZXvjlKrUZRJJgIfLPWQkUHoqJFYNY%2BfvxyFOTo2Z5UqBBk8Bb0LgYlHRWnqAzGuD6K5ErBY6DABeMSqQs8JVcPWb9dWu5mbKedMxwWAe0m2DCtSpy8qPvbTDguojDBjqkAc79K%2BbRD4l2LxouGCAsFGZum0PY5Ps9OjGjAG%2FBsUW1AYkLYVKfwbsh%2BCY7lZMxrWFRkb%2FxkxksuxGx4PYwJ60sfH%2FI9Wnb54EesIJSy5XNdcHzzmUJyx9W%2FqO1IMXp9iuTUSqPUjArqdrr2ZPqcMOEdFonJhX%2FDWCYdGjYv%2BUwVgfsla4JAuxr%2BFdVsXlxxQOikkz8xZZeOG0SQFA9bQMndMah&X-Amz-Signature=c0dcc6474a0e0f752f8e68373cd7ca0acbb6e53c74a8cd952a10712e7a4bd6ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFRPANEV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1kDNtCJHbABMK4n6MI0BUFHLk%2BR3xUV9%2FIsp50%2BnOOwIhAInXsJiMuBgZK0Qri1G2O7WuvWYW80Rv687hVSDyozzyKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYOcPPriaAEmdOZb4q3APW8wkicVtZ7lNvsw2mRhUqmj%2FJplr6UwFN%2BTSHsB83f1CXGkgE7ZryxgJN%2BGhN%2FapblEHb36Y%2B5GZIhACjfwfPqiBiPkYN6GcaWR3lkbHbLRYBwemtSZ5b4RO5T%2FbEaeuuzyoKoiEYvV3Z%2FBbrnObWe60noAdaVpOTogXyIct0Qr2kXhG6PDRv8%2BzTvcYgEwUx%2FRxnhF1mI90v3rGKoytg%2B2vh%2BYuVdLgSHzIe6ZFL79Jl6rgr%2BBiE1F4opb%2BqvjUpbZsQkn%2BUrxC8RIP3iP4KkKTlbNEfI91GJ1DX7fvsk0r3G5SqTeZMsIUeWQv3cHXAjtGDIclhPRogny93IEZv7WpJhQBiseVZo8G31lk0sRJOooeOHj6iQ7ZTPZSM6gyxAcAVwWpbf1OLhiQlDuj6NAbRtWbGpLLbt9xmrtOtav%2BVKt7Kk6RK88YUM3CzvNldO7nkqMyhvRiJYwnKwM5zmGw389AZLFL4CySkTWT8n4tu0qqqfJ%2B3OU%2B0Xd5uihYaz2CZXvjlKrUZRJJgIfLPWQkUHoqJFYNY%2BfvxyFOTo2Z5UqBBk8Bb0LgYlHRWnqAzGuD6K5ErBY6DABeMSqQs8JVcPWb9dWu5mbKedMxwWAe0m2DCtSpy8qPvbTDguojDBjqkAc79K%2BbRD4l2LxouGCAsFGZum0PY5Ps9OjGjAG%2FBsUW1AYkLYVKfwbsh%2BCY7lZMxrWFRkb%2FxkxksuxGx4PYwJ60sfH%2FI9Wnb54EesIJSy5XNdcHzzmUJyx9W%2FqO1IMXp9iuTUSqPUjArqdrr2ZPqcMOEdFonJhX%2FDWCYdGjYv%2BUwVgfsla4JAuxr%2BFdVsXlxxQOikkz8xZZeOG0SQFA9bQMndMah&X-Amz-Signature=1014290d9047e051f93ec5e7f5afde36f01fe8c719d97da57d3b3c1810dc8528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
