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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIFUKY2V%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAOlktIkr5Cim7kRwn%2BpwvAsOTZQmkl7aSKZwuIzunVZAiB1QZjUxsVAtXYQodizUQzbwZ%2FW88YjJVBuulPcONQhiir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMIZUo1bPCg2XPr81hKtwDjn%2Bp3fSPguT6SRUn0gxOknt%2BH715q%2BREyDBqM%2BEM6NHm4Can6TweiXOmmZEnJG%2Bw%2FSFy2QUW%2FmtTynORI0toFMqYYNQV5EVycxtzpi4JTo3AyHrQuQyWouk%2FwjQz21laRMCwY7fygVKOe7OUmqeoMtoM6P3AnO1iilN7VEofIeiU%2FCPqjJsoaenEiHMaF3y%2FkSc5Ap5R67YYCkiW8JToZ1L0YJFOkNI%2FDaH87K4P0Eu94i9xlGKThb1zmabdbJpJ5VsafUZOs6iWlhq6JASvAvIaVx8BEcPPFUD5mfViXdOH4HVqf88tVPVQlV83SkjkMg3sftIxPUIlmJwK2U2%2FqMPLeFpEET4W9IaxTn%2B2Z2HZjiTSJi3yBRJ5Eq7B4YcCQLACOIbBmkzvM2x26XyfByYbo2CE6fIGsz%2BIEKDscYbxmDGquKtL8ko2rq1Rs0FeS0WrSxLuXn6JUpblp3nDboby26Xw1uV6QrNqj5C8GYtQB7wXFkFD0zr%2BgESvnQAb6efyMslTBdpsW0g6cG7oezfSHv91T03PYztRxP0U7g%2FsVrv19Su5w%2BWrYUrUoq6Lm9uRrPXvVHlvE7wCw7ht6mcHS8hezJbEQZoN2lBb3uWRlsJXyuHL5NZTdlYwobedwwY6pgHB3S%2F7g5kJ64xO%2BPfpvAHMQ5EqKAotRONlSu5aaTB7T2jENsuXM8zkDiGBQ5fikxfYmFKBxHILxCTd%2BBbpSDbNufoioXhTNr0VclLCpZ577uIa%2FW3TsRXAFfUeCWMNe5G7KkdIIiFqWsLqNLHBIWmUJxjK%2BF9i7CFWTfwJ0Sz25spcnEO8NjuRDywiwjNjU0N1xKpjTyV%2FdA%2B0gCZ30GKX3HrFUck8&X-Amz-Signature=eb05900d6660c7ed4e4d443a1d7b076fb346cc51dda072fd7ab95144437bc3ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIFUKY2V%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAOlktIkr5Cim7kRwn%2BpwvAsOTZQmkl7aSKZwuIzunVZAiB1QZjUxsVAtXYQodizUQzbwZ%2FW88YjJVBuulPcONQhiir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMIZUo1bPCg2XPr81hKtwDjn%2Bp3fSPguT6SRUn0gxOknt%2BH715q%2BREyDBqM%2BEM6NHm4Can6TweiXOmmZEnJG%2Bw%2FSFy2QUW%2FmtTynORI0toFMqYYNQV5EVycxtzpi4JTo3AyHrQuQyWouk%2FwjQz21laRMCwY7fygVKOe7OUmqeoMtoM6P3AnO1iilN7VEofIeiU%2FCPqjJsoaenEiHMaF3y%2FkSc5Ap5R67YYCkiW8JToZ1L0YJFOkNI%2FDaH87K4P0Eu94i9xlGKThb1zmabdbJpJ5VsafUZOs6iWlhq6JASvAvIaVx8BEcPPFUD5mfViXdOH4HVqf88tVPVQlV83SkjkMg3sftIxPUIlmJwK2U2%2FqMPLeFpEET4W9IaxTn%2B2Z2HZjiTSJi3yBRJ5Eq7B4YcCQLACOIbBmkzvM2x26XyfByYbo2CE6fIGsz%2BIEKDscYbxmDGquKtL8ko2rq1Rs0FeS0WrSxLuXn6JUpblp3nDboby26Xw1uV6QrNqj5C8GYtQB7wXFkFD0zr%2BgESvnQAb6efyMslTBdpsW0g6cG7oezfSHv91T03PYztRxP0U7g%2FsVrv19Su5w%2BWrYUrUoq6Lm9uRrPXvVHlvE7wCw7ht6mcHS8hezJbEQZoN2lBb3uWRlsJXyuHL5NZTdlYwobedwwY6pgHB3S%2F7g5kJ64xO%2BPfpvAHMQ5EqKAotRONlSu5aaTB7T2jENsuXM8zkDiGBQ5fikxfYmFKBxHILxCTd%2BBbpSDbNufoioXhTNr0VclLCpZ577uIa%2FW3TsRXAFfUeCWMNe5G7KkdIIiFqWsLqNLHBIWmUJxjK%2BF9i7CFWTfwJ0Sz25spcnEO8NjuRDywiwjNjU0N1xKpjTyV%2FdA%2B0gCZ30GKX3HrFUck8&X-Amz-Signature=30ea3500cf0b656aaa5ebd2eb9455f3e3c83d7fb3117356fcb7f12c509d23853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIFUKY2V%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAOlktIkr5Cim7kRwn%2BpwvAsOTZQmkl7aSKZwuIzunVZAiB1QZjUxsVAtXYQodizUQzbwZ%2FW88YjJVBuulPcONQhiir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMIZUo1bPCg2XPr81hKtwDjn%2Bp3fSPguT6SRUn0gxOknt%2BH715q%2BREyDBqM%2BEM6NHm4Can6TweiXOmmZEnJG%2Bw%2FSFy2QUW%2FmtTynORI0toFMqYYNQV5EVycxtzpi4JTo3AyHrQuQyWouk%2FwjQz21laRMCwY7fygVKOe7OUmqeoMtoM6P3AnO1iilN7VEofIeiU%2FCPqjJsoaenEiHMaF3y%2FkSc5Ap5R67YYCkiW8JToZ1L0YJFOkNI%2FDaH87K4P0Eu94i9xlGKThb1zmabdbJpJ5VsafUZOs6iWlhq6JASvAvIaVx8BEcPPFUD5mfViXdOH4HVqf88tVPVQlV83SkjkMg3sftIxPUIlmJwK2U2%2FqMPLeFpEET4W9IaxTn%2B2Z2HZjiTSJi3yBRJ5Eq7B4YcCQLACOIbBmkzvM2x26XyfByYbo2CE6fIGsz%2BIEKDscYbxmDGquKtL8ko2rq1Rs0FeS0WrSxLuXn6JUpblp3nDboby26Xw1uV6QrNqj5C8GYtQB7wXFkFD0zr%2BgESvnQAb6efyMslTBdpsW0g6cG7oezfSHv91T03PYztRxP0U7g%2FsVrv19Su5w%2BWrYUrUoq6Lm9uRrPXvVHlvE7wCw7ht6mcHS8hezJbEQZoN2lBb3uWRlsJXyuHL5NZTdlYwobedwwY6pgHB3S%2F7g5kJ64xO%2BPfpvAHMQ5EqKAotRONlSu5aaTB7T2jENsuXM8zkDiGBQ5fikxfYmFKBxHILxCTd%2BBbpSDbNufoioXhTNr0VclLCpZ577uIa%2FW3TsRXAFfUeCWMNe5G7KkdIIiFqWsLqNLHBIWmUJxjK%2BF9i7CFWTfwJ0Sz25spcnEO8NjuRDywiwjNjU0N1xKpjTyV%2FdA%2B0gCZ30GKX3HrFUck8&X-Amz-Signature=02b99359069b82c3ad2272c17db96a312822c8a16aac34cc326c7e40e9515b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIFUKY2V%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAOlktIkr5Cim7kRwn%2BpwvAsOTZQmkl7aSKZwuIzunVZAiB1QZjUxsVAtXYQodizUQzbwZ%2FW88YjJVBuulPcONQhiir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMIZUo1bPCg2XPr81hKtwDjn%2Bp3fSPguT6SRUn0gxOknt%2BH715q%2BREyDBqM%2BEM6NHm4Can6TweiXOmmZEnJG%2Bw%2FSFy2QUW%2FmtTynORI0toFMqYYNQV5EVycxtzpi4JTo3AyHrQuQyWouk%2FwjQz21laRMCwY7fygVKOe7OUmqeoMtoM6P3AnO1iilN7VEofIeiU%2FCPqjJsoaenEiHMaF3y%2FkSc5Ap5R67YYCkiW8JToZ1L0YJFOkNI%2FDaH87K4P0Eu94i9xlGKThb1zmabdbJpJ5VsafUZOs6iWlhq6JASvAvIaVx8BEcPPFUD5mfViXdOH4HVqf88tVPVQlV83SkjkMg3sftIxPUIlmJwK2U2%2FqMPLeFpEET4W9IaxTn%2B2Z2HZjiTSJi3yBRJ5Eq7B4YcCQLACOIbBmkzvM2x26XyfByYbo2CE6fIGsz%2BIEKDscYbxmDGquKtL8ko2rq1Rs0FeS0WrSxLuXn6JUpblp3nDboby26Xw1uV6QrNqj5C8GYtQB7wXFkFD0zr%2BgESvnQAb6efyMslTBdpsW0g6cG7oezfSHv91T03PYztRxP0U7g%2FsVrv19Su5w%2BWrYUrUoq6Lm9uRrPXvVHlvE7wCw7ht6mcHS8hezJbEQZoN2lBb3uWRlsJXyuHL5NZTdlYwobedwwY6pgHB3S%2F7g5kJ64xO%2BPfpvAHMQ5EqKAotRONlSu5aaTB7T2jENsuXM8zkDiGBQ5fikxfYmFKBxHILxCTd%2BBbpSDbNufoioXhTNr0VclLCpZ577uIa%2FW3TsRXAFfUeCWMNe5G7KkdIIiFqWsLqNLHBIWmUJxjK%2BF9i7CFWTfwJ0Sz25spcnEO8NjuRDywiwjNjU0N1xKpjTyV%2FdA%2B0gCZ30GKX3HrFUck8&X-Amz-Signature=8c7416eaeb548d79a9b8e8df425b96f9e459c871916eaf90e4ce0be1550ecbd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIFUKY2V%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAOlktIkr5Cim7kRwn%2BpwvAsOTZQmkl7aSKZwuIzunVZAiB1QZjUxsVAtXYQodizUQzbwZ%2FW88YjJVBuulPcONQhiir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMIZUo1bPCg2XPr81hKtwDjn%2Bp3fSPguT6SRUn0gxOknt%2BH715q%2BREyDBqM%2BEM6NHm4Can6TweiXOmmZEnJG%2Bw%2FSFy2QUW%2FmtTynORI0toFMqYYNQV5EVycxtzpi4JTo3AyHrQuQyWouk%2FwjQz21laRMCwY7fygVKOe7OUmqeoMtoM6P3AnO1iilN7VEofIeiU%2FCPqjJsoaenEiHMaF3y%2FkSc5Ap5R67YYCkiW8JToZ1L0YJFOkNI%2FDaH87K4P0Eu94i9xlGKThb1zmabdbJpJ5VsafUZOs6iWlhq6JASvAvIaVx8BEcPPFUD5mfViXdOH4HVqf88tVPVQlV83SkjkMg3sftIxPUIlmJwK2U2%2FqMPLeFpEET4W9IaxTn%2B2Z2HZjiTSJi3yBRJ5Eq7B4YcCQLACOIbBmkzvM2x26XyfByYbo2CE6fIGsz%2BIEKDscYbxmDGquKtL8ko2rq1Rs0FeS0WrSxLuXn6JUpblp3nDboby26Xw1uV6QrNqj5C8GYtQB7wXFkFD0zr%2BgESvnQAb6efyMslTBdpsW0g6cG7oezfSHv91T03PYztRxP0U7g%2FsVrv19Su5w%2BWrYUrUoq6Lm9uRrPXvVHlvE7wCw7ht6mcHS8hezJbEQZoN2lBb3uWRlsJXyuHL5NZTdlYwobedwwY6pgHB3S%2F7g5kJ64xO%2BPfpvAHMQ5EqKAotRONlSu5aaTB7T2jENsuXM8zkDiGBQ5fikxfYmFKBxHILxCTd%2BBbpSDbNufoioXhTNr0VclLCpZ577uIa%2FW3TsRXAFfUeCWMNe5G7KkdIIiFqWsLqNLHBIWmUJxjK%2BF9i7CFWTfwJ0Sz25spcnEO8NjuRDywiwjNjU0N1xKpjTyV%2FdA%2B0gCZ30GKX3HrFUck8&X-Amz-Signature=8632d36555beca7b0283ce8d5dda282f07f296f647b5c9b9c58dba65aba66490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIFUKY2V%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAOlktIkr5Cim7kRwn%2BpwvAsOTZQmkl7aSKZwuIzunVZAiB1QZjUxsVAtXYQodizUQzbwZ%2FW88YjJVBuulPcONQhiir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMIZUo1bPCg2XPr81hKtwDjn%2Bp3fSPguT6SRUn0gxOknt%2BH715q%2BREyDBqM%2BEM6NHm4Can6TweiXOmmZEnJG%2Bw%2FSFy2QUW%2FmtTynORI0toFMqYYNQV5EVycxtzpi4JTo3AyHrQuQyWouk%2FwjQz21laRMCwY7fygVKOe7OUmqeoMtoM6P3AnO1iilN7VEofIeiU%2FCPqjJsoaenEiHMaF3y%2FkSc5Ap5R67YYCkiW8JToZ1L0YJFOkNI%2FDaH87K4P0Eu94i9xlGKThb1zmabdbJpJ5VsafUZOs6iWlhq6JASvAvIaVx8BEcPPFUD5mfViXdOH4HVqf88tVPVQlV83SkjkMg3sftIxPUIlmJwK2U2%2FqMPLeFpEET4W9IaxTn%2B2Z2HZjiTSJi3yBRJ5Eq7B4YcCQLACOIbBmkzvM2x26XyfByYbo2CE6fIGsz%2BIEKDscYbxmDGquKtL8ko2rq1Rs0FeS0WrSxLuXn6JUpblp3nDboby26Xw1uV6QrNqj5C8GYtQB7wXFkFD0zr%2BgESvnQAb6efyMslTBdpsW0g6cG7oezfSHv91T03PYztRxP0U7g%2FsVrv19Su5w%2BWrYUrUoq6Lm9uRrPXvVHlvE7wCw7ht6mcHS8hezJbEQZoN2lBb3uWRlsJXyuHL5NZTdlYwobedwwY6pgHB3S%2F7g5kJ64xO%2BPfpvAHMQ5EqKAotRONlSu5aaTB7T2jENsuXM8zkDiGBQ5fikxfYmFKBxHILxCTd%2BBbpSDbNufoioXhTNr0VclLCpZ577uIa%2FW3TsRXAFfUeCWMNe5G7KkdIIiFqWsLqNLHBIWmUJxjK%2BF9i7CFWTfwJ0Sz25spcnEO8NjuRDywiwjNjU0N1xKpjTyV%2FdA%2B0gCZ30GKX3HrFUck8&X-Amz-Signature=33556a07a0d53f90652cf9f40d0a9b11fb4d0bba14f59a17304950c955b63af3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
