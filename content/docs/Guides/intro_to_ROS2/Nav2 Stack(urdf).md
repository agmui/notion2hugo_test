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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNAZXXQC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8Hxz5swrnFg6GQAWMW6235%2BA4mTMg%2FlRrNohD%2BfwbCAiB4ShX9IXKZaeLar%2FJocN7cPj5xziSvxTqCy37n1%2BlVnyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVqJj8T9ObhyP%2BAfrKtwD8Ym7PHRDwarstpXGb4dP1WjSlA38ca7Q%2Fu9elipuabbAxnrXUJP4c0ZHAO4A44fyMF6g%2BclF0Hta6qdKKtG8DXcNbhQs6YB%2FkqHbqRPFvcHDE%2FiATgVpfosLzTdkJu8PmDq8uopet%2FaEzWOhh4GOXdH%2BaaNM%2Bu54Tq6a5TuBcYFq1cMnFp9z7KBoNirJo2yk7DiOaKKd7LGfhronGi%2Fj2uaZ5ekLQdvtGLzRFIdep5Yax21o5t1SFzq%2Bk3QFkANlFqHRlTktcrfWfTEWvx2dq8IrsCR%2BkinpZf6wk85yCdizn1p99L4gsOVfgUS6%2FDX1RkcbwTSU62Bl8cDWoXUa2oU28wMziMPeOifzTFWYm0U4kWk30gbxshHJcX0Ju0dqgcOT9B%2FVU6o4ZLfVcVLYDpStsLi4FYIeDk4a0dPc%2FrnlMo03yu%2FdmDDDPUOY5QR0tF7%2F5U1lS1KfCnAF%2Fdkfkv1nnPdikokE7V25JnmzIPutJxMP7i6VODY%2Bx6sBY%2FMnVFd5vNDD8FDjZxnl6fC5lusBS9yyleIAO8VcINwC%2FY8XB2YWZWlFayzJTBwCgvqFdWMo7R8qj5X1XHsPse5gkGNWvIK8uXBFfMfRhXXoFlNnjcChDNpdoSnwCWYwkZ%2BSvgY6pgGG4xo%2FJcxt%2FAyyZup9FFiy0uX2O5lWZOSPWtTCAlPY7YLkTRfGZ42K6hcyOWY6%2BqKRQksfmhqosD5TJqtdVJg8ZrVbZXhw9Roo%2F6yA0clyZLSGZN2AH%2FkDkjxKmi1thDZANSy5Wi2WHaUlaRx2HE9jZfmpKZI3q8jKCIpU%2BQPqA6zg%2Fs3bWlG2ZkcZQ2xJFiZz6%2Bcb644nwESUW6X3%2B5u6hoUZlUgE&X-Amz-Signature=9dc15cc1c26577d24703cd02ea5e7fb6d51e7c904cb6bff05ab145f52ae9585f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNAZXXQC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8Hxz5swrnFg6GQAWMW6235%2BA4mTMg%2FlRrNohD%2BfwbCAiB4ShX9IXKZaeLar%2FJocN7cPj5xziSvxTqCy37n1%2BlVnyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVqJj8T9ObhyP%2BAfrKtwD8Ym7PHRDwarstpXGb4dP1WjSlA38ca7Q%2Fu9elipuabbAxnrXUJP4c0ZHAO4A44fyMF6g%2BclF0Hta6qdKKtG8DXcNbhQs6YB%2FkqHbqRPFvcHDE%2FiATgVpfosLzTdkJu8PmDq8uopet%2FaEzWOhh4GOXdH%2BaaNM%2Bu54Tq6a5TuBcYFq1cMnFp9z7KBoNirJo2yk7DiOaKKd7LGfhronGi%2Fj2uaZ5ekLQdvtGLzRFIdep5Yax21o5t1SFzq%2Bk3QFkANlFqHRlTktcrfWfTEWvx2dq8IrsCR%2BkinpZf6wk85yCdizn1p99L4gsOVfgUS6%2FDX1RkcbwTSU62Bl8cDWoXUa2oU28wMziMPeOifzTFWYm0U4kWk30gbxshHJcX0Ju0dqgcOT9B%2FVU6o4ZLfVcVLYDpStsLi4FYIeDk4a0dPc%2FrnlMo03yu%2FdmDDDPUOY5QR0tF7%2F5U1lS1KfCnAF%2Fdkfkv1nnPdikokE7V25JnmzIPutJxMP7i6VODY%2Bx6sBY%2FMnVFd5vNDD8FDjZxnl6fC5lusBS9yyleIAO8VcINwC%2FY8XB2YWZWlFayzJTBwCgvqFdWMo7R8qj5X1XHsPse5gkGNWvIK8uXBFfMfRhXXoFlNnjcChDNpdoSnwCWYwkZ%2BSvgY6pgGG4xo%2FJcxt%2FAyyZup9FFiy0uX2O5lWZOSPWtTCAlPY7YLkTRfGZ42K6hcyOWY6%2BqKRQksfmhqosD5TJqtdVJg8ZrVbZXhw9Roo%2F6yA0clyZLSGZN2AH%2FkDkjxKmi1thDZANSy5Wi2WHaUlaRx2HE9jZfmpKZI3q8jKCIpU%2BQPqA6zg%2Fs3bWlG2ZkcZQ2xJFiZz6%2Bcb644nwESUW6X3%2B5u6hoUZlUgE&X-Amz-Signature=c1b3b595b353d62e1221c4320048f63e2fc69b9a08a75afdc4e9eddca5848229&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNAZXXQC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8Hxz5swrnFg6GQAWMW6235%2BA4mTMg%2FlRrNohD%2BfwbCAiB4ShX9IXKZaeLar%2FJocN7cPj5xziSvxTqCy37n1%2BlVnyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVqJj8T9ObhyP%2BAfrKtwD8Ym7PHRDwarstpXGb4dP1WjSlA38ca7Q%2Fu9elipuabbAxnrXUJP4c0ZHAO4A44fyMF6g%2BclF0Hta6qdKKtG8DXcNbhQs6YB%2FkqHbqRPFvcHDE%2FiATgVpfosLzTdkJu8PmDq8uopet%2FaEzWOhh4GOXdH%2BaaNM%2Bu54Tq6a5TuBcYFq1cMnFp9z7KBoNirJo2yk7DiOaKKd7LGfhronGi%2Fj2uaZ5ekLQdvtGLzRFIdep5Yax21o5t1SFzq%2Bk3QFkANlFqHRlTktcrfWfTEWvx2dq8IrsCR%2BkinpZf6wk85yCdizn1p99L4gsOVfgUS6%2FDX1RkcbwTSU62Bl8cDWoXUa2oU28wMziMPeOifzTFWYm0U4kWk30gbxshHJcX0Ju0dqgcOT9B%2FVU6o4ZLfVcVLYDpStsLi4FYIeDk4a0dPc%2FrnlMo03yu%2FdmDDDPUOY5QR0tF7%2F5U1lS1KfCnAF%2Fdkfkv1nnPdikokE7V25JnmzIPutJxMP7i6VODY%2Bx6sBY%2FMnVFd5vNDD8FDjZxnl6fC5lusBS9yyleIAO8VcINwC%2FY8XB2YWZWlFayzJTBwCgvqFdWMo7R8qj5X1XHsPse5gkGNWvIK8uXBFfMfRhXXoFlNnjcChDNpdoSnwCWYwkZ%2BSvgY6pgGG4xo%2FJcxt%2FAyyZup9FFiy0uX2O5lWZOSPWtTCAlPY7YLkTRfGZ42K6hcyOWY6%2BqKRQksfmhqosD5TJqtdVJg8ZrVbZXhw9Roo%2F6yA0clyZLSGZN2AH%2FkDkjxKmi1thDZANSy5Wi2WHaUlaRx2HE9jZfmpKZI3q8jKCIpU%2BQPqA6zg%2Fs3bWlG2ZkcZQ2xJFiZz6%2Bcb644nwESUW6X3%2B5u6hoUZlUgE&X-Amz-Signature=838c66fa31d4c53ff20254e035f4b8321ae5fc6fc3c516661d4d008249da9002&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNAZXXQC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8Hxz5swrnFg6GQAWMW6235%2BA4mTMg%2FlRrNohD%2BfwbCAiB4ShX9IXKZaeLar%2FJocN7cPj5xziSvxTqCy37n1%2BlVnyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVqJj8T9ObhyP%2BAfrKtwD8Ym7PHRDwarstpXGb4dP1WjSlA38ca7Q%2Fu9elipuabbAxnrXUJP4c0ZHAO4A44fyMF6g%2BclF0Hta6qdKKtG8DXcNbhQs6YB%2FkqHbqRPFvcHDE%2FiATgVpfosLzTdkJu8PmDq8uopet%2FaEzWOhh4GOXdH%2BaaNM%2Bu54Tq6a5TuBcYFq1cMnFp9z7KBoNirJo2yk7DiOaKKd7LGfhronGi%2Fj2uaZ5ekLQdvtGLzRFIdep5Yax21o5t1SFzq%2Bk3QFkANlFqHRlTktcrfWfTEWvx2dq8IrsCR%2BkinpZf6wk85yCdizn1p99L4gsOVfgUS6%2FDX1RkcbwTSU62Bl8cDWoXUa2oU28wMziMPeOifzTFWYm0U4kWk30gbxshHJcX0Ju0dqgcOT9B%2FVU6o4ZLfVcVLYDpStsLi4FYIeDk4a0dPc%2FrnlMo03yu%2FdmDDDPUOY5QR0tF7%2F5U1lS1KfCnAF%2Fdkfkv1nnPdikokE7V25JnmzIPutJxMP7i6VODY%2Bx6sBY%2FMnVFd5vNDD8FDjZxnl6fC5lusBS9yyleIAO8VcINwC%2FY8XB2YWZWlFayzJTBwCgvqFdWMo7R8qj5X1XHsPse5gkGNWvIK8uXBFfMfRhXXoFlNnjcChDNpdoSnwCWYwkZ%2BSvgY6pgGG4xo%2FJcxt%2FAyyZup9FFiy0uX2O5lWZOSPWtTCAlPY7YLkTRfGZ42K6hcyOWY6%2BqKRQksfmhqosD5TJqtdVJg8ZrVbZXhw9Roo%2F6yA0clyZLSGZN2AH%2FkDkjxKmi1thDZANSy5Wi2WHaUlaRx2HE9jZfmpKZI3q8jKCIpU%2BQPqA6zg%2Fs3bWlG2ZkcZQ2xJFiZz6%2Bcb644nwESUW6X3%2B5u6hoUZlUgE&X-Amz-Signature=b7f8d022c9e4c7d2e78430ef7860fb861b67ffe879c73200d82c853759b818ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNAZXXQC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8Hxz5swrnFg6GQAWMW6235%2BA4mTMg%2FlRrNohD%2BfwbCAiB4ShX9IXKZaeLar%2FJocN7cPj5xziSvxTqCy37n1%2BlVnyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVqJj8T9ObhyP%2BAfrKtwD8Ym7PHRDwarstpXGb4dP1WjSlA38ca7Q%2Fu9elipuabbAxnrXUJP4c0ZHAO4A44fyMF6g%2BclF0Hta6qdKKtG8DXcNbhQs6YB%2FkqHbqRPFvcHDE%2FiATgVpfosLzTdkJu8PmDq8uopet%2FaEzWOhh4GOXdH%2BaaNM%2Bu54Tq6a5TuBcYFq1cMnFp9z7KBoNirJo2yk7DiOaKKd7LGfhronGi%2Fj2uaZ5ekLQdvtGLzRFIdep5Yax21o5t1SFzq%2Bk3QFkANlFqHRlTktcrfWfTEWvx2dq8IrsCR%2BkinpZf6wk85yCdizn1p99L4gsOVfgUS6%2FDX1RkcbwTSU62Bl8cDWoXUa2oU28wMziMPeOifzTFWYm0U4kWk30gbxshHJcX0Ju0dqgcOT9B%2FVU6o4ZLfVcVLYDpStsLi4FYIeDk4a0dPc%2FrnlMo03yu%2FdmDDDPUOY5QR0tF7%2F5U1lS1KfCnAF%2Fdkfkv1nnPdikokE7V25JnmzIPutJxMP7i6VODY%2Bx6sBY%2FMnVFd5vNDD8FDjZxnl6fC5lusBS9yyleIAO8VcINwC%2FY8XB2YWZWlFayzJTBwCgvqFdWMo7R8qj5X1XHsPse5gkGNWvIK8uXBFfMfRhXXoFlNnjcChDNpdoSnwCWYwkZ%2BSvgY6pgGG4xo%2FJcxt%2FAyyZup9FFiy0uX2O5lWZOSPWtTCAlPY7YLkTRfGZ42K6hcyOWY6%2BqKRQksfmhqosD5TJqtdVJg8ZrVbZXhw9Roo%2F6yA0clyZLSGZN2AH%2FkDkjxKmi1thDZANSy5Wi2WHaUlaRx2HE9jZfmpKZI3q8jKCIpU%2BQPqA6zg%2Fs3bWlG2ZkcZQ2xJFiZz6%2Bcb644nwESUW6X3%2B5u6hoUZlUgE&X-Amz-Signature=367a3b29a872f7226a2099f0cf5c90047d716e13991d8a9157b5c447b2d3247f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNAZXXQC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8Hxz5swrnFg6GQAWMW6235%2BA4mTMg%2FlRrNohD%2BfwbCAiB4ShX9IXKZaeLar%2FJocN7cPj5xziSvxTqCy37n1%2BlVnyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVqJj8T9ObhyP%2BAfrKtwD8Ym7PHRDwarstpXGb4dP1WjSlA38ca7Q%2Fu9elipuabbAxnrXUJP4c0ZHAO4A44fyMF6g%2BclF0Hta6qdKKtG8DXcNbhQs6YB%2FkqHbqRPFvcHDE%2FiATgVpfosLzTdkJu8PmDq8uopet%2FaEzWOhh4GOXdH%2BaaNM%2Bu54Tq6a5TuBcYFq1cMnFp9z7KBoNirJo2yk7DiOaKKd7LGfhronGi%2Fj2uaZ5ekLQdvtGLzRFIdep5Yax21o5t1SFzq%2Bk3QFkANlFqHRlTktcrfWfTEWvx2dq8IrsCR%2BkinpZf6wk85yCdizn1p99L4gsOVfgUS6%2FDX1RkcbwTSU62Bl8cDWoXUa2oU28wMziMPeOifzTFWYm0U4kWk30gbxshHJcX0Ju0dqgcOT9B%2FVU6o4ZLfVcVLYDpStsLi4FYIeDk4a0dPc%2FrnlMo03yu%2FdmDDDPUOY5QR0tF7%2F5U1lS1KfCnAF%2Fdkfkv1nnPdikokE7V25JnmzIPutJxMP7i6VODY%2Bx6sBY%2FMnVFd5vNDD8FDjZxnl6fC5lusBS9yyleIAO8VcINwC%2FY8XB2YWZWlFayzJTBwCgvqFdWMo7R8qj5X1XHsPse5gkGNWvIK8uXBFfMfRhXXoFlNnjcChDNpdoSnwCWYwkZ%2BSvgY6pgGG4xo%2FJcxt%2FAyyZup9FFiy0uX2O5lWZOSPWtTCAlPY7YLkTRfGZ42K6hcyOWY6%2BqKRQksfmhqosD5TJqtdVJg8ZrVbZXhw9Roo%2F6yA0clyZLSGZN2AH%2FkDkjxKmi1thDZANSy5Wi2WHaUlaRx2HE9jZfmpKZI3q8jKCIpU%2BQPqA6zg%2Fs3bWlG2ZkcZQ2xJFiZz6%2Bcb644nwESUW6X3%2B5u6hoUZlUgE&X-Amz-Signature=46bc70d4232c1b123eab7da17c0d2f5d9e20fa21150719657dab8e0b20c577a0&X-Amz-SignedHeaders=host&x-id=GetObject)
