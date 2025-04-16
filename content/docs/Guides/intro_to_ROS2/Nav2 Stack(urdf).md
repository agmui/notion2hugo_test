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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4IQTJ4V%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD33je1UQp75N%2B27uYUCxemhzuJ%2B%2FVqWPkfN4fdFtQQswIgCXSktzDksJvNoFCNQcQpDcQeXYgGmBCUPViI9KQxXlkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG09H4rm7%2FqrtXuDHSrcA2FiZF6DqNnkEDEbzVS%2BXAapyIwHe1EwymFnCTaBXKZtgSKJ9Ppx8QYYB6gF5W1A3aP9NO2QeuyKVqbHHAMoI5n9IExWRWLI7JWemxXtEdYXTFjvVuV272xI%2BSIdpeldA7Rv6RKvFnWsLYmaS48T2xB0CnicruWbtnWxtlPVPQVyOVwqh%2Br0dfTbZndrMGIZy2QVgrKj7XbSR%2BTZtlUa0aYHdoD3z%2FiWXqXj57p6zC%2FVN1x8MSfM6EdT03bU%2BO%2FRaDthRHVWPETR6k4Mx5r2e%2FYs7Sh9C0ySfWKY%2BOneQx2nv0DmzvAzmQtbG1WvuUh5ZFgfC9PQLIJItGR9moWGZxHvELkWi23nLVxG4BuJeZ8qnZWzMnsCW69Jy7ROKp8xl1t8JiYFmwZ%2B2IHyytz7aMHPeI3%2Fl9IGiR7NeVeOYQ4DrYmJ2y9YGN7JvRq%2BAfskqS1JrWj8%2Bl%2FmRD5nnWaJvXzkDOE9oO81hUNaGkJi9w0XNGRiM6BxdVxwU%2F4KjHQldDBbIZyUSNJSabq5EV%2FAWs8XzSY9nxQBzVmnqE%2Bwl%2B03jlz%2B8zof7izxGCtRadOPhVOD6Nyy%2BUwSeCuoVQokvFbRXjvFY1aX3NnEy44SVCtczGAr5XDrnYR30XBBMOne%2F78GOqUBYfgRxJSACBYPPSeW7OrggvyQ2WHIG%2F%2FwtU7LtQDiI0ErOBBOg6bVJl16Gi8orAMMTjZ2aRMQN5oCp2LFKGfHnbJIqlrvYyZvpHxubUtyT3J2njG1ZdisS5hOhc%2Fr3z1Gpy3NLZMo90CNavmS9h5LqfctvObxm%2B2LuAjcTrX6wYrVmwIYAvVBJODHGG6v9hSS3sFn9YmjsJUlYWyfxfx4BbSQWm%2FH&X-Amz-Signature=6284d2b5a5bc3d945094169a1ed1211d2b554333787e5cd5056cea186adc9276&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4IQTJ4V%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD33je1UQp75N%2B27uYUCxemhzuJ%2B%2FVqWPkfN4fdFtQQswIgCXSktzDksJvNoFCNQcQpDcQeXYgGmBCUPViI9KQxXlkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG09H4rm7%2FqrtXuDHSrcA2FiZF6DqNnkEDEbzVS%2BXAapyIwHe1EwymFnCTaBXKZtgSKJ9Ppx8QYYB6gF5W1A3aP9NO2QeuyKVqbHHAMoI5n9IExWRWLI7JWemxXtEdYXTFjvVuV272xI%2BSIdpeldA7Rv6RKvFnWsLYmaS48T2xB0CnicruWbtnWxtlPVPQVyOVwqh%2Br0dfTbZndrMGIZy2QVgrKj7XbSR%2BTZtlUa0aYHdoD3z%2FiWXqXj57p6zC%2FVN1x8MSfM6EdT03bU%2BO%2FRaDthRHVWPETR6k4Mx5r2e%2FYs7Sh9C0ySfWKY%2BOneQx2nv0DmzvAzmQtbG1WvuUh5ZFgfC9PQLIJItGR9moWGZxHvELkWi23nLVxG4BuJeZ8qnZWzMnsCW69Jy7ROKp8xl1t8JiYFmwZ%2B2IHyytz7aMHPeI3%2Fl9IGiR7NeVeOYQ4DrYmJ2y9YGN7JvRq%2BAfskqS1JrWj8%2Bl%2FmRD5nnWaJvXzkDOE9oO81hUNaGkJi9w0XNGRiM6BxdVxwU%2F4KjHQldDBbIZyUSNJSabq5EV%2FAWs8XzSY9nxQBzVmnqE%2Bwl%2B03jlz%2B8zof7izxGCtRadOPhVOD6Nyy%2BUwSeCuoVQokvFbRXjvFY1aX3NnEy44SVCtczGAr5XDrnYR30XBBMOne%2F78GOqUBYfgRxJSACBYPPSeW7OrggvyQ2WHIG%2F%2FwtU7LtQDiI0ErOBBOg6bVJl16Gi8orAMMTjZ2aRMQN5oCp2LFKGfHnbJIqlrvYyZvpHxubUtyT3J2njG1ZdisS5hOhc%2Fr3z1Gpy3NLZMo90CNavmS9h5LqfctvObxm%2B2LuAjcTrX6wYrVmwIYAvVBJODHGG6v9hSS3sFn9YmjsJUlYWyfxfx4BbSQWm%2FH&X-Amz-Signature=7ae9d44b1a93b0d8559e3e490c30a9ac89f021ab58e781a17b76bb437c5996b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4IQTJ4V%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD33je1UQp75N%2B27uYUCxemhzuJ%2B%2FVqWPkfN4fdFtQQswIgCXSktzDksJvNoFCNQcQpDcQeXYgGmBCUPViI9KQxXlkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG09H4rm7%2FqrtXuDHSrcA2FiZF6DqNnkEDEbzVS%2BXAapyIwHe1EwymFnCTaBXKZtgSKJ9Ppx8QYYB6gF5W1A3aP9NO2QeuyKVqbHHAMoI5n9IExWRWLI7JWemxXtEdYXTFjvVuV272xI%2BSIdpeldA7Rv6RKvFnWsLYmaS48T2xB0CnicruWbtnWxtlPVPQVyOVwqh%2Br0dfTbZndrMGIZy2QVgrKj7XbSR%2BTZtlUa0aYHdoD3z%2FiWXqXj57p6zC%2FVN1x8MSfM6EdT03bU%2BO%2FRaDthRHVWPETR6k4Mx5r2e%2FYs7Sh9C0ySfWKY%2BOneQx2nv0DmzvAzmQtbG1WvuUh5ZFgfC9PQLIJItGR9moWGZxHvELkWi23nLVxG4BuJeZ8qnZWzMnsCW69Jy7ROKp8xl1t8JiYFmwZ%2B2IHyytz7aMHPeI3%2Fl9IGiR7NeVeOYQ4DrYmJ2y9YGN7JvRq%2BAfskqS1JrWj8%2Bl%2FmRD5nnWaJvXzkDOE9oO81hUNaGkJi9w0XNGRiM6BxdVxwU%2F4KjHQldDBbIZyUSNJSabq5EV%2FAWs8XzSY9nxQBzVmnqE%2Bwl%2B03jlz%2B8zof7izxGCtRadOPhVOD6Nyy%2BUwSeCuoVQokvFbRXjvFY1aX3NnEy44SVCtczGAr5XDrnYR30XBBMOne%2F78GOqUBYfgRxJSACBYPPSeW7OrggvyQ2WHIG%2F%2FwtU7LtQDiI0ErOBBOg6bVJl16Gi8orAMMTjZ2aRMQN5oCp2LFKGfHnbJIqlrvYyZvpHxubUtyT3J2njG1ZdisS5hOhc%2Fr3z1Gpy3NLZMo90CNavmS9h5LqfctvObxm%2B2LuAjcTrX6wYrVmwIYAvVBJODHGG6v9hSS3sFn9YmjsJUlYWyfxfx4BbSQWm%2FH&X-Amz-Signature=fa5e1935a8dca548aaa96c915f4e0fb1ebee600c7825f397c8d93317b3c40dbb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4IQTJ4V%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD33je1UQp75N%2B27uYUCxemhzuJ%2B%2FVqWPkfN4fdFtQQswIgCXSktzDksJvNoFCNQcQpDcQeXYgGmBCUPViI9KQxXlkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG09H4rm7%2FqrtXuDHSrcA2FiZF6DqNnkEDEbzVS%2BXAapyIwHe1EwymFnCTaBXKZtgSKJ9Ppx8QYYB6gF5W1A3aP9NO2QeuyKVqbHHAMoI5n9IExWRWLI7JWemxXtEdYXTFjvVuV272xI%2BSIdpeldA7Rv6RKvFnWsLYmaS48T2xB0CnicruWbtnWxtlPVPQVyOVwqh%2Br0dfTbZndrMGIZy2QVgrKj7XbSR%2BTZtlUa0aYHdoD3z%2FiWXqXj57p6zC%2FVN1x8MSfM6EdT03bU%2BO%2FRaDthRHVWPETR6k4Mx5r2e%2FYs7Sh9C0ySfWKY%2BOneQx2nv0DmzvAzmQtbG1WvuUh5ZFgfC9PQLIJItGR9moWGZxHvELkWi23nLVxG4BuJeZ8qnZWzMnsCW69Jy7ROKp8xl1t8JiYFmwZ%2B2IHyytz7aMHPeI3%2Fl9IGiR7NeVeOYQ4DrYmJ2y9YGN7JvRq%2BAfskqS1JrWj8%2Bl%2FmRD5nnWaJvXzkDOE9oO81hUNaGkJi9w0XNGRiM6BxdVxwU%2F4KjHQldDBbIZyUSNJSabq5EV%2FAWs8XzSY9nxQBzVmnqE%2Bwl%2B03jlz%2B8zof7izxGCtRadOPhVOD6Nyy%2BUwSeCuoVQokvFbRXjvFY1aX3NnEy44SVCtczGAr5XDrnYR30XBBMOne%2F78GOqUBYfgRxJSACBYPPSeW7OrggvyQ2WHIG%2F%2FwtU7LtQDiI0ErOBBOg6bVJl16Gi8orAMMTjZ2aRMQN5oCp2LFKGfHnbJIqlrvYyZvpHxubUtyT3J2njG1ZdisS5hOhc%2Fr3z1Gpy3NLZMo90CNavmS9h5LqfctvObxm%2B2LuAjcTrX6wYrVmwIYAvVBJODHGG6v9hSS3sFn9YmjsJUlYWyfxfx4BbSQWm%2FH&X-Amz-Signature=51d4944607012dce61f885cc39b07df8716d10c0b98149bc6d6fdd8b92b16760&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4IQTJ4V%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD33je1UQp75N%2B27uYUCxemhzuJ%2B%2FVqWPkfN4fdFtQQswIgCXSktzDksJvNoFCNQcQpDcQeXYgGmBCUPViI9KQxXlkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG09H4rm7%2FqrtXuDHSrcA2FiZF6DqNnkEDEbzVS%2BXAapyIwHe1EwymFnCTaBXKZtgSKJ9Ppx8QYYB6gF5W1A3aP9NO2QeuyKVqbHHAMoI5n9IExWRWLI7JWemxXtEdYXTFjvVuV272xI%2BSIdpeldA7Rv6RKvFnWsLYmaS48T2xB0CnicruWbtnWxtlPVPQVyOVwqh%2Br0dfTbZndrMGIZy2QVgrKj7XbSR%2BTZtlUa0aYHdoD3z%2FiWXqXj57p6zC%2FVN1x8MSfM6EdT03bU%2BO%2FRaDthRHVWPETR6k4Mx5r2e%2FYs7Sh9C0ySfWKY%2BOneQx2nv0DmzvAzmQtbG1WvuUh5ZFgfC9PQLIJItGR9moWGZxHvELkWi23nLVxG4BuJeZ8qnZWzMnsCW69Jy7ROKp8xl1t8JiYFmwZ%2B2IHyytz7aMHPeI3%2Fl9IGiR7NeVeOYQ4DrYmJ2y9YGN7JvRq%2BAfskqS1JrWj8%2Bl%2FmRD5nnWaJvXzkDOE9oO81hUNaGkJi9w0XNGRiM6BxdVxwU%2F4KjHQldDBbIZyUSNJSabq5EV%2FAWs8XzSY9nxQBzVmnqE%2Bwl%2B03jlz%2B8zof7izxGCtRadOPhVOD6Nyy%2BUwSeCuoVQokvFbRXjvFY1aX3NnEy44SVCtczGAr5XDrnYR30XBBMOne%2F78GOqUBYfgRxJSACBYPPSeW7OrggvyQ2WHIG%2F%2FwtU7LtQDiI0ErOBBOg6bVJl16Gi8orAMMTjZ2aRMQN5oCp2LFKGfHnbJIqlrvYyZvpHxubUtyT3J2njG1ZdisS5hOhc%2Fr3z1Gpy3NLZMo90CNavmS9h5LqfctvObxm%2B2LuAjcTrX6wYrVmwIYAvVBJODHGG6v9hSS3sFn9YmjsJUlYWyfxfx4BbSQWm%2FH&X-Amz-Signature=003be24085a6217a05df95d27463a6e19c2e3f6075a132c15b36db3240cf9811&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4IQTJ4V%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD33je1UQp75N%2B27uYUCxemhzuJ%2B%2FVqWPkfN4fdFtQQswIgCXSktzDksJvNoFCNQcQpDcQeXYgGmBCUPViI9KQxXlkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG09H4rm7%2FqrtXuDHSrcA2FiZF6DqNnkEDEbzVS%2BXAapyIwHe1EwymFnCTaBXKZtgSKJ9Ppx8QYYB6gF5W1A3aP9NO2QeuyKVqbHHAMoI5n9IExWRWLI7JWemxXtEdYXTFjvVuV272xI%2BSIdpeldA7Rv6RKvFnWsLYmaS48T2xB0CnicruWbtnWxtlPVPQVyOVwqh%2Br0dfTbZndrMGIZy2QVgrKj7XbSR%2BTZtlUa0aYHdoD3z%2FiWXqXj57p6zC%2FVN1x8MSfM6EdT03bU%2BO%2FRaDthRHVWPETR6k4Mx5r2e%2FYs7Sh9C0ySfWKY%2BOneQx2nv0DmzvAzmQtbG1WvuUh5ZFgfC9PQLIJItGR9moWGZxHvELkWi23nLVxG4BuJeZ8qnZWzMnsCW69Jy7ROKp8xl1t8JiYFmwZ%2B2IHyytz7aMHPeI3%2Fl9IGiR7NeVeOYQ4DrYmJ2y9YGN7JvRq%2BAfskqS1JrWj8%2Bl%2FmRD5nnWaJvXzkDOE9oO81hUNaGkJi9w0XNGRiM6BxdVxwU%2F4KjHQldDBbIZyUSNJSabq5EV%2FAWs8XzSY9nxQBzVmnqE%2Bwl%2B03jlz%2B8zof7izxGCtRadOPhVOD6Nyy%2BUwSeCuoVQokvFbRXjvFY1aX3NnEy44SVCtczGAr5XDrnYR30XBBMOne%2F78GOqUBYfgRxJSACBYPPSeW7OrggvyQ2WHIG%2F%2FwtU7LtQDiI0ErOBBOg6bVJl16Gi8orAMMTjZ2aRMQN5oCp2LFKGfHnbJIqlrvYyZvpHxubUtyT3J2njG1ZdisS5hOhc%2Fr3z1Gpy3NLZMo90CNavmS9h5LqfctvObxm%2B2LuAjcTrX6wYrVmwIYAvVBJODHGG6v9hSS3sFn9YmjsJUlYWyfxfx4BbSQWm%2FH&X-Amz-Signature=b74776a59fff59949c138378a65fdb1b24afb43ea3a6be64b28e6e946274ebea&X-Amz-SignedHeaders=host&x-id=GetObject)
