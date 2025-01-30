---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647ZTD4JQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1RtD3hKryQffiGHaM81oErarmpFbS5kmV0YAztJ3cDAiEA%2Buon0RlYZ5PG%2B9xSAx92ZcHXD39IO3UbUcO3UgEHxCsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLqprsV7dz9J6A%2ByircA9Z8tMCjyOOYPYwINbpEYNuVfw%2FIFzFeYUe6fsNg36NfaAHUp%2BFkNQBjramTCfSMwSX4fmCIekE9gwyT77KaGA9mv1%2Fjbtj78LUb4kZ1Ub%2Fg6gGjJ%2FdB8rhlQI1ppp2Xd%2BLXy%2FeL8KTKyapljB0TI77Z1QqQseF%2B4t%2FdCyoEjtlyLFdJUyIRTe1MjVZ7CX3me6mXxgwiaJMTiPMwtE2jg7tk9CLmdDzMXeLY4NxgPDgKIcEzqTKpGBAfi4VOyWYFJwl0zMqUoDwQvHhrz%2FhGt8m5bBIB0HPOm7AdAqRqgd5cSt30GXpxJC0cqEWB%2FZtMLsG7cRq2KqEPGQgYMunuHlPqCp1SKZrJm0wUI0wgCYhSjymXNnuaIweUTDlL87hg93twSAOqYteoH8%2BGfpvjy3LU5z%2BrNySq5OIH%2BHTS5H5tZhrhq9dTxDktgZuV%2BqY9j7MOspcuxrvNVcQYmBG0a0ffrx1iWX1Fc%2Bu7GjwLxyJJ819UQ3PayX7ozRqj%2B8ghwBT6SL9oBhtFBKcz%2BgoBZFOjWnhblwlnOIQ0%2F9YJJnOTrWaDMZ9iV0v0GS4iDBH%2Bby%2F9%2FpsN66Hc%2FyajpHdKpFtKyT3DmUyc0ODYzUaQFHueqj8QrkLgcoZv4rNjMLfu7LwGOqUBCtD5LlXKV3VjtPv3ZWSRHayuB2msXHsSOfkkXItT72U2KkmK2j0rY1eJKoMz%2FdpFMcjkCOUlsOheDXz9Ndz1rQljRh6m6fHcTRkGsGiiCfTwor%2B2dqZLf4e2AEHPKLCYvDSxFQyYmcLbaYVE2szXs0OW3%2FuNU%2BL0BJdnlhN1W8RByiC3FgNTX5329%2B50CTAXq%2BH%2Fk%2FJOZr6DD6o6khlEFN51Pq7V&X-Amz-Signature=5473a4d03c7a0596e0cc283a665e7dc9b311ad8c4026127e0beb77574fa05746&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647ZTD4JQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1RtD3hKryQffiGHaM81oErarmpFbS5kmV0YAztJ3cDAiEA%2Buon0RlYZ5PG%2B9xSAx92ZcHXD39IO3UbUcO3UgEHxCsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLqprsV7dz9J6A%2ByircA9Z8tMCjyOOYPYwINbpEYNuVfw%2FIFzFeYUe6fsNg36NfaAHUp%2BFkNQBjramTCfSMwSX4fmCIekE9gwyT77KaGA9mv1%2Fjbtj78LUb4kZ1Ub%2Fg6gGjJ%2FdB8rhlQI1ppp2Xd%2BLXy%2FeL8KTKyapljB0TI77Z1QqQseF%2B4t%2FdCyoEjtlyLFdJUyIRTe1MjVZ7CX3me6mXxgwiaJMTiPMwtE2jg7tk9CLmdDzMXeLY4NxgPDgKIcEzqTKpGBAfi4VOyWYFJwl0zMqUoDwQvHhrz%2FhGt8m5bBIB0HPOm7AdAqRqgd5cSt30GXpxJC0cqEWB%2FZtMLsG7cRq2KqEPGQgYMunuHlPqCp1SKZrJm0wUI0wgCYhSjymXNnuaIweUTDlL87hg93twSAOqYteoH8%2BGfpvjy3LU5z%2BrNySq5OIH%2BHTS5H5tZhrhq9dTxDktgZuV%2BqY9j7MOspcuxrvNVcQYmBG0a0ffrx1iWX1Fc%2Bu7GjwLxyJJ819UQ3PayX7ozRqj%2B8ghwBT6SL9oBhtFBKcz%2BgoBZFOjWnhblwlnOIQ0%2F9YJJnOTrWaDMZ9iV0v0GS4iDBH%2Bby%2F9%2FpsN66Hc%2FyajpHdKpFtKyT3DmUyc0ODYzUaQFHueqj8QrkLgcoZv4rNjMLfu7LwGOqUBCtD5LlXKV3VjtPv3ZWSRHayuB2msXHsSOfkkXItT72U2KkmK2j0rY1eJKoMz%2FdpFMcjkCOUlsOheDXz9Ndz1rQljRh6m6fHcTRkGsGiiCfTwor%2B2dqZLf4e2AEHPKLCYvDSxFQyYmcLbaYVE2szXs0OW3%2FuNU%2BL0BJdnlhN1W8RByiC3FgNTX5329%2B50CTAXq%2BH%2Fk%2FJOZr6DD6o6khlEFN51Pq7V&X-Amz-Signature=95d2326878ec1596730e1c2ea01ce06720c2da94a05f6f32bca155139b752304&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647ZTD4JQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1RtD3hKryQffiGHaM81oErarmpFbS5kmV0YAztJ3cDAiEA%2Buon0RlYZ5PG%2B9xSAx92ZcHXD39IO3UbUcO3UgEHxCsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLqprsV7dz9J6A%2ByircA9Z8tMCjyOOYPYwINbpEYNuVfw%2FIFzFeYUe6fsNg36NfaAHUp%2BFkNQBjramTCfSMwSX4fmCIekE9gwyT77KaGA9mv1%2Fjbtj78LUb4kZ1Ub%2Fg6gGjJ%2FdB8rhlQI1ppp2Xd%2BLXy%2FeL8KTKyapljB0TI77Z1QqQseF%2B4t%2FdCyoEjtlyLFdJUyIRTe1MjVZ7CX3me6mXxgwiaJMTiPMwtE2jg7tk9CLmdDzMXeLY4NxgPDgKIcEzqTKpGBAfi4VOyWYFJwl0zMqUoDwQvHhrz%2FhGt8m5bBIB0HPOm7AdAqRqgd5cSt30GXpxJC0cqEWB%2FZtMLsG7cRq2KqEPGQgYMunuHlPqCp1SKZrJm0wUI0wgCYhSjymXNnuaIweUTDlL87hg93twSAOqYteoH8%2BGfpvjy3LU5z%2BrNySq5OIH%2BHTS5H5tZhrhq9dTxDktgZuV%2BqY9j7MOspcuxrvNVcQYmBG0a0ffrx1iWX1Fc%2Bu7GjwLxyJJ819UQ3PayX7ozRqj%2B8ghwBT6SL9oBhtFBKcz%2BgoBZFOjWnhblwlnOIQ0%2F9YJJnOTrWaDMZ9iV0v0GS4iDBH%2Bby%2F9%2FpsN66Hc%2FyajpHdKpFtKyT3DmUyc0ODYzUaQFHueqj8QrkLgcoZv4rNjMLfu7LwGOqUBCtD5LlXKV3VjtPv3ZWSRHayuB2msXHsSOfkkXItT72U2KkmK2j0rY1eJKoMz%2FdpFMcjkCOUlsOheDXz9Ndz1rQljRh6m6fHcTRkGsGiiCfTwor%2B2dqZLf4e2AEHPKLCYvDSxFQyYmcLbaYVE2szXs0OW3%2FuNU%2BL0BJdnlhN1W8RByiC3FgNTX5329%2B50CTAXq%2BH%2Fk%2FJOZr6DD6o6khlEFN51Pq7V&X-Amz-Signature=523380ed07d7e191d1a68ea3499ce01c4a91c5ceb9bdcd77336cde2073e5a6a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647ZTD4JQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1RtD3hKryQffiGHaM81oErarmpFbS5kmV0YAztJ3cDAiEA%2Buon0RlYZ5PG%2B9xSAx92ZcHXD39IO3UbUcO3UgEHxCsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLqprsV7dz9J6A%2ByircA9Z8tMCjyOOYPYwINbpEYNuVfw%2FIFzFeYUe6fsNg36NfaAHUp%2BFkNQBjramTCfSMwSX4fmCIekE9gwyT77KaGA9mv1%2Fjbtj78LUb4kZ1Ub%2Fg6gGjJ%2FdB8rhlQI1ppp2Xd%2BLXy%2FeL8KTKyapljB0TI77Z1QqQseF%2B4t%2FdCyoEjtlyLFdJUyIRTe1MjVZ7CX3me6mXxgwiaJMTiPMwtE2jg7tk9CLmdDzMXeLY4NxgPDgKIcEzqTKpGBAfi4VOyWYFJwl0zMqUoDwQvHhrz%2FhGt8m5bBIB0HPOm7AdAqRqgd5cSt30GXpxJC0cqEWB%2FZtMLsG7cRq2KqEPGQgYMunuHlPqCp1SKZrJm0wUI0wgCYhSjymXNnuaIweUTDlL87hg93twSAOqYteoH8%2BGfpvjy3LU5z%2BrNySq5OIH%2BHTS5H5tZhrhq9dTxDktgZuV%2BqY9j7MOspcuxrvNVcQYmBG0a0ffrx1iWX1Fc%2Bu7GjwLxyJJ819UQ3PayX7ozRqj%2B8ghwBT6SL9oBhtFBKcz%2BgoBZFOjWnhblwlnOIQ0%2F9YJJnOTrWaDMZ9iV0v0GS4iDBH%2Bby%2F9%2FpsN66Hc%2FyajpHdKpFtKyT3DmUyc0ODYzUaQFHueqj8QrkLgcoZv4rNjMLfu7LwGOqUBCtD5LlXKV3VjtPv3ZWSRHayuB2msXHsSOfkkXItT72U2KkmK2j0rY1eJKoMz%2FdpFMcjkCOUlsOheDXz9Ndz1rQljRh6m6fHcTRkGsGiiCfTwor%2B2dqZLf4e2AEHPKLCYvDSxFQyYmcLbaYVE2szXs0OW3%2FuNU%2BL0BJdnlhN1W8RByiC3FgNTX5329%2B50CTAXq%2BH%2Fk%2FJOZr6DD6o6khlEFN51Pq7V&X-Amz-Signature=22463e441b409d783017b5a85c7cf3009986c811b5340d57377e9b1dff988c63&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647ZTD4JQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1RtD3hKryQffiGHaM81oErarmpFbS5kmV0YAztJ3cDAiEA%2Buon0RlYZ5PG%2B9xSAx92ZcHXD39IO3UbUcO3UgEHxCsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLqprsV7dz9J6A%2ByircA9Z8tMCjyOOYPYwINbpEYNuVfw%2FIFzFeYUe6fsNg36NfaAHUp%2BFkNQBjramTCfSMwSX4fmCIekE9gwyT77KaGA9mv1%2Fjbtj78LUb4kZ1Ub%2Fg6gGjJ%2FdB8rhlQI1ppp2Xd%2BLXy%2FeL8KTKyapljB0TI77Z1QqQseF%2B4t%2FdCyoEjtlyLFdJUyIRTe1MjVZ7CX3me6mXxgwiaJMTiPMwtE2jg7tk9CLmdDzMXeLY4NxgPDgKIcEzqTKpGBAfi4VOyWYFJwl0zMqUoDwQvHhrz%2FhGt8m5bBIB0HPOm7AdAqRqgd5cSt30GXpxJC0cqEWB%2FZtMLsG7cRq2KqEPGQgYMunuHlPqCp1SKZrJm0wUI0wgCYhSjymXNnuaIweUTDlL87hg93twSAOqYteoH8%2BGfpvjy3LU5z%2BrNySq5OIH%2BHTS5H5tZhrhq9dTxDktgZuV%2BqY9j7MOspcuxrvNVcQYmBG0a0ffrx1iWX1Fc%2Bu7GjwLxyJJ819UQ3PayX7ozRqj%2B8ghwBT6SL9oBhtFBKcz%2BgoBZFOjWnhblwlnOIQ0%2F9YJJnOTrWaDMZ9iV0v0GS4iDBH%2Bby%2F9%2FpsN66Hc%2FyajpHdKpFtKyT3DmUyc0ODYzUaQFHueqj8QrkLgcoZv4rNjMLfu7LwGOqUBCtD5LlXKV3VjtPv3ZWSRHayuB2msXHsSOfkkXItT72U2KkmK2j0rY1eJKoMz%2FdpFMcjkCOUlsOheDXz9Ndz1rQljRh6m6fHcTRkGsGiiCfTwor%2B2dqZLf4e2AEHPKLCYvDSxFQyYmcLbaYVE2szXs0OW3%2FuNU%2BL0BJdnlhN1W8RByiC3FgNTX5329%2B50CTAXq%2BH%2Fk%2FJOZr6DD6o6khlEFN51Pq7V&X-Amz-Signature=2ef0a27ac578b1388091babbe4701c4cdc8d9f1233fe6fa5151babf30d9f8072&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647ZTD4JQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1RtD3hKryQffiGHaM81oErarmpFbS5kmV0YAztJ3cDAiEA%2Buon0RlYZ5PG%2B9xSAx92ZcHXD39IO3UbUcO3UgEHxCsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLqprsV7dz9J6A%2ByircA9Z8tMCjyOOYPYwINbpEYNuVfw%2FIFzFeYUe6fsNg36NfaAHUp%2BFkNQBjramTCfSMwSX4fmCIekE9gwyT77KaGA9mv1%2Fjbtj78LUb4kZ1Ub%2Fg6gGjJ%2FdB8rhlQI1ppp2Xd%2BLXy%2FeL8KTKyapljB0TI77Z1QqQseF%2B4t%2FdCyoEjtlyLFdJUyIRTe1MjVZ7CX3me6mXxgwiaJMTiPMwtE2jg7tk9CLmdDzMXeLY4NxgPDgKIcEzqTKpGBAfi4VOyWYFJwl0zMqUoDwQvHhrz%2FhGt8m5bBIB0HPOm7AdAqRqgd5cSt30GXpxJC0cqEWB%2FZtMLsG7cRq2KqEPGQgYMunuHlPqCp1SKZrJm0wUI0wgCYhSjymXNnuaIweUTDlL87hg93twSAOqYteoH8%2BGfpvjy3LU5z%2BrNySq5OIH%2BHTS5H5tZhrhq9dTxDktgZuV%2BqY9j7MOspcuxrvNVcQYmBG0a0ffrx1iWX1Fc%2Bu7GjwLxyJJ819UQ3PayX7ozRqj%2B8ghwBT6SL9oBhtFBKcz%2BgoBZFOjWnhblwlnOIQ0%2F9YJJnOTrWaDMZ9iV0v0GS4iDBH%2Bby%2F9%2FpsN66Hc%2FyajpHdKpFtKyT3DmUyc0ODYzUaQFHueqj8QrkLgcoZv4rNjMLfu7LwGOqUBCtD5LlXKV3VjtPv3ZWSRHayuB2msXHsSOfkkXItT72U2KkmK2j0rY1eJKoMz%2FdpFMcjkCOUlsOheDXz9Ndz1rQljRh6m6fHcTRkGsGiiCfTwor%2B2dqZLf4e2AEHPKLCYvDSxFQyYmcLbaYVE2szXs0OW3%2FuNU%2BL0BJdnlhN1W8RByiC3FgNTX5329%2B50CTAXq%2BH%2Fk%2FJOZr6DD6o6khlEFN51Pq7V&X-Amz-Signature=598cc1f1ca605961fe6af23bca2b2305dc94046e4fe26cc82f9ef1106584d6ea&X-Amz-SignedHeaders=host&x-id=GetObject)
