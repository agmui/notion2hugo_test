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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJB6EYG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIvz6hyTy9KxKfFn4KN7l8zhkea3fK5dzF7xmbcG5RpAiEAqqb8O3SfDHZwXEu2Eu6UoFsS5drhwLi1vsAkAQGF%2FDUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOcL9GDcuLMhuaLQ3ircA5vtQ0c0D1fV3eAqIwn5vnN13bcM0wpEeJILM1eCcMfSMJTUWmQHnUpO1UcZHBPtVwFLGo9yh9QorJj%2FsXKbB61eaDogL8yXFeAjN2PjT%2BMtLoC0ruEqb13sn52XxJJGgzT77NuZdULyuSH0xWt%2B2%2BV7QggYS%2FhyJFQdKSpQ7Htj4Jnc1BFzO7AVRSVIgBu9BZGCbmqkO5gLT%2BZgc%2FndVt0a%2B67VHWRt7NsqOyHkNdxOZP3dG%2BCFziex%2Fr%2FoGhzMuJFdJcFRmno4HUhhM6Ez%2B%2BLZQSobZkIUj64jHzk6WCD6ZeZBWBdPpMvux0bv%2BB5zLYJhuHkPOi1AjKqu1h6pC3WkdaAwh4p%2BXZA0ERAiokDL6Tj9gcqZL1sTITpB7t%2BW0X%2FpsR9ebVh%2Bg9SBycK4OeF3mh%2B7nkDvs9itvxv3K5lZ2wH%2F2BeZ5UAjtb20Suhkzxhk6zmrbqBfetE8%2BWote1WgiM3SNYSPh1Yiue9hUhDYmX0nNy7yX1KGKlQGTTKx3DAaJ5a90pNMnATH9xt8u475yFLe9AOSDXiYTj1aHVsqvM6Xqbj5L%2BDeODSy%2BnWlWscoD0Cn0fmSPOO2Zedi1HDyiGfrBCx2odfT3hHnxZkLdguE7I6109C8saRGMOztwL8GOqUBh%2FGLNdkH3%2F9HL48yhe%2FgExhl78d4YAD9tBHrVytAwjp%2Bh%2F7XM7f63GNMVKRJv01k1KCatjPy0w2m4HPJivqQ3KbwxiRmoTK2cFe56y01enku8nBIq2od8273K9ApaKjUOrdZdBo1cV0zrnRSrDavGjwo4CdaZP%2B6OSDDHyC5G9jTHgXpI6ifRCtDAtQFtc6qQx7%2BGMDibPsn5HD91jHSfCbA33za&X-Amz-Signature=7251e5c56727ab429bcb3d1b753073f0a4491884a812f127d6865f2853977b5a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJB6EYG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIvz6hyTy9KxKfFn4KN7l8zhkea3fK5dzF7xmbcG5RpAiEAqqb8O3SfDHZwXEu2Eu6UoFsS5drhwLi1vsAkAQGF%2FDUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOcL9GDcuLMhuaLQ3ircA5vtQ0c0D1fV3eAqIwn5vnN13bcM0wpEeJILM1eCcMfSMJTUWmQHnUpO1UcZHBPtVwFLGo9yh9QorJj%2FsXKbB61eaDogL8yXFeAjN2PjT%2BMtLoC0ruEqb13sn52XxJJGgzT77NuZdULyuSH0xWt%2B2%2BV7QggYS%2FhyJFQdKSpQ7Htj4Jnc1BFzO7AVRSVIgBu9BZGCbmqkO5gLT%2BZgc%2FndVt0a%2B67VHWRt7NsqOyHkNdxOZP3dG%2BCFziex%2Fr%2FoGhzMuJFdJcFRmno4HUhhM6Ez%2B%2BLZQSobZkIUj64jHzk6WCD6ZeZBWBdPpMvux0bv%2BB5zLYJhuHkPOi1AjKqu1h6pC3WkdaAwh4p%2BXZA0ERAiokDL6Tj9gcqZL1sTITpB7t%2BW0X%2FpsR9ebVh%2Bg9SBycK4OeF3mh%2B7nkDvs9itvxv3K5lZ2wH%2F2BeZ5UAjtb20Suhkzxhk6zmrbqBfetE8%2BWote1WgiM3SNYSPh1Yiue9hUhDYmX0nNy7yX1KGKlQGTTKx3DAaJ5a90pNMnATH9xt8u475yFLe9AOSDXiYTj1aHVsqvM6Xqbj5L%2BDeODSy%2BnWlWscoD0Cn0fmSPOO2Zedi1HDyiGfrBCx2odfT3hHnxZkLdguE7I6109C8saRGMOztwL8GOqUBh%2FGLNdkH3%2F9HL48yhe%2FgExhl78d4YAD9tBHrVytAwjp%2Bh%2F7XM7f63GNMVKRJv01k1KCatjPy0w2m4HPJivqQ3KbwxiRmoTK2cFe56y01enku8nBIq2od8273K9ApaKjUOrdZdBo1cV0zrnRSrDavGjwo4CdaZP%2B6OSDDHyC5G9jTHgXpI6ifRCtDAtQFtc6qQx7%2BGMDibPsn5HD91jHSfCbA33za&X-Amz-Signature=f3be92cdba5d00e0c8191fcd9c484860ff78f3ebc52052ae4a4ea4d778e40231&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJB6EYG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIvz6hyTy9KxKfFn4KN7l8zhkea3fK5dzF7xmbcG5RpAiEAqqb8O3SfDHZwXEu2Eu6UoFsS5drhwLi1vsAkAQGF%2FDUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOcL9GDcuLMhuaLQ3ircA5vtQ0c0D1fV3eAqIwn5vnN13bcM0wpEeJILM1eCcMfSMJTUWmQHnUpO1UcZHBPtVwFLGo9yh9QorJj%2FsXKbB61eaDogL8yXFeAjN2PjT%2BMtLoC0ruEqb13sn52XxJJGgzT77NuZdULyuSH0xWt%2B2%2BV7QggYS%2FhyJFQdKSpQ7Htj4Jnc1BFzO7AVRSVIgBu9BZGCbmqkO5gLT%2BZgc%2FndVt0a%2B67VHWRt7NsqOyHkNdxOZP3dG%2BCFziex%2Fr%2FoGhzMuJFdJcFRmno4HUhhM6Ez%2B%2BLZQSobZkIUj64jHzk6WCD6ZeZBWBdPpMvux0bv%2BB5zLYJhuHkPOi1AjKqu1h6pC3WkdaAwh4p%2BXZA0ERAiokDL6Tj9gcqZL1sTITpB7t%2BW0X%2FpsR9ebVh%2Bg9SBycK4OeF3mh%2B7nkDvs9itvxv3K5lZ2wH%2F2BeZ5UAjtb20Suhkzxhk6zmrbqBfetE8%2BWote1WgiM3SNYSPh1Yiue9hUhDYmX0nNy7yX1KGKlQGTTKx3DAaJ5a90pNMnATH9xt8u475yFLe9AOSDXiYTj1aHVsqvM6Xqbj5L%2BDeODSy%2BnWlWscoD0Cn0fmSPOO2Zedi1HDyiGfrBCx2odfT3hHnxZkLdguE7I6109C8saRGMOztwL8GOqUBh%2FGLNdkH3%2F9HL48yhe%2FgExhl78d4YAD9tBHrVytAwjp%2Bh%2F7XM7f63GNMVKRJv01k1KCatjPy0w2m4HPJivqQ3KbwxiRmoTK2cFe56y01enku8nBIq2od8273K9ApaKjUOrdZdBo1cV0zrnRSrDavGjwo4CdaZP%2B6OSDDHyC5G9jTHgXpI6ifRCtDAtQFtc6qQx7%2BGMDibPsn5HD91jHSfCbA33za&X-Amz-Signature=f6db328a102926f3e8d7bbcb64ec466037b181da531a70676c4c92d0743ae8d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJB6EYG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIvz6hyTy9KxKfFn4KN7l8zhkea3fK5dzF7xmbcG5RpAiEAqqb8O3SfDHZwXEu2Eu6UoFsS5drhwLi1vsAkAQGF%2FDUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOcL9GDcuLMhuaLQ3ircA5vtQ0c0D1fV3eAqIwn5vnN13bcM0wpEeJILM1eCcMfSMJTUWmQHnUpO1UcZHBPtVwFLGo9yh9QorJj%2FsXKbB61eaDogL8yXFeAjN2PjT%2BMtLoC0ruEqb13sn52XxJJGgzT77NuZdULyuSH0xWt%2B2%2BV7QggYS%2FhyJFQdKSpQ7Htj4Jnc1BFzO7AVRSVIgBu9BZGCbmqkO5gLT%2BZgc%2FndVt0a%2B67VHWRt7NsqOyHkNdxOZP3dG%2BCFziex%2Fr%2FoGhzMuJFdJcFRmno4HUhhM6Ez%2B%2BLZQSobZkIUj64jHzk6WCD6ZeZBWBdPpMvux0bv%2BB5zLYJhuHkPOi1AjKqu1h6pC3WkdaAwh4p%2BXZA0ERAiokDL6Tj9gcqZL1sTITpB7t%2BW0X%2FpsR9ebVh%2Bg9SBycK4OeF3mh%2B7nkDvs9itvxv3K5lZ2wH%2F2BeZ5UAjtb20Suhkzxhk6zmrbqBfetE8%2BWote1WgiM3SNYSPh1Yiue9hUhDYmX0nNy7yX1KGKlQGTTKx3DAaJ5a90pNMnATH9xt8u475yFLe9AOSDXiYTj1aHVsqvM6Xqbj5L%2BDeODSy%2BnWlWscoD0Cn0fmSPOO2Zedi1HDyiGfrBCx2odfT3hHnxZkLdguE7I6109C8saRGMOztwL8GOqUBh%2FGLNdkH3%2F9HL48yhe%2FgExhl78d4YAD9tBHrVytAwjp%2Bh%2F7XM7f63GNMVKRJv01k1KCatjPy0w2m4HPJivqQ3KbwxiRmoTK2cFe56y01enku8nBIq2od8273K9ApaKjUOrdZdBo1cV0zrnRSrDavGjwo4CdaZP%2B6OSDDHyC5G9jTHgXpI6ifRCtDAtQFtc6qQx7%2BGMDibPsn5HD91jHSfCbA33za&X-Amz-Signature=32300525a777b690e6408c7d6224454a54205cba3bb282b61d873e57214eb8bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJB6EYG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIvz6hyTy9KxKfFn4KN7l8zhkea3fK5dzF7xmbcG5RpAiEAqqb8O3SfDHZwXEu2Eu6UoFsS5drhwLi1vsAkAQGF%2FDUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOcL9GDcuLMhuaLQ3ircA5vtQ0c0D1fV3eAqIwn5vnN13bcM0wpEeJILM1eCcMfSMJTUWmQHnUpO1UcZHBPtVwFLGo9yh9QorJj%2FsXKbB61eaDogL8yXFeAjN2PjT%2BMtLoC0ruEqb13sn52XxJJGgzT77NuZdULyuSH0xWt%2B2%2BV7QggYS%2FhyJFQdKSpQ7Htj4Jnc1BFzO7AVRSVIgBu9BZGCbmqkO5gLT%2BZgc%2FndVt0a%2B67VHWRt7NsqOyHkNdxOZP3dG%2BCFziex%2Fr%2FoGhzMuJFdJcFRmno4HUhhM6Ez%2B%2BLZQSobZkIUj64jHzk6WCD6ZeZBWBdPpMvux0bv%2BB5zLYJhuHkPOi1AjKqu1h6pC3WkdaAwh4p%2BXZA0ERAiokDL6Tj9gcqZL1sTITpB7t%2BW0X%2FpsR9ebVh%2Bg9SBycK4OeF3mh%2B7nkDvs9itvxv3K5lZ2wH%2F2BeZ5UAjtb20Suhkzxhk6zmrbqBfetE8%2BWote1WgiM3SNYSPh1Yiue9hUhDYmX0nNy7yX1KGKlQGTTKx3DAaJ5a90pNMnATH9xt8u475yFLe9AOSDXiYTj1aHVsqvM6Xqbj5L%2BDeODSy%2BnWlWscoD0Cn0fmSPOO2Zedi1HDyiGfrBCx2odfT3hHnxZkLdguE7I6109C8saRGMOztwL8GOqUBh%2FGLNdkH3%2F9HL48yhe%2FgExhl78d4YAD9tBHrVytAwjp%2Bh%2F7XM7f63GNMVKRJv01k1KCatjPy0w2m4HPJivqQ3KbwxiRmoTK2cFe56y01enku8nBIq2od8273K9ApaKjUOrdZdBo1cV0zrnRSrDavGjwo4CdaZP%2B6OSDDHyC5G9jTHgXpI6ifRCtDAtQFtc6qQx7%2BGMDibPsn5HD91jHSfCbA33za&X-Amz-Signature=b2d416dad3233ca69ff125c520850e8a922222727c99e3298c789bbad3d892cc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJB6EYG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIvz6hyTy9KxKfFn4KN7l8zhkea3fK5dzF7xmbcG5RpAiEAqqb8O3SfDHZwXEu2Eu6UoFsS5drhwLi1vsAkAQGF%2FDUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOcL9GDcuLMhuaLQ3ircA5vtQ0c0D1fV3eAqIwn5vnN13bcM0wpEeJILM1eCcMfSMJTUWmQHnUpO1UcZHBPtVwFLGo9yh9QorJj%2FsXKbB61eaDogL8yXFeAjN2PjT%2BMtLoC0ruEqb13sn52XxJJGgzT77NuZdULyuSH0xWt%2B2%2BV7QggYS%2FhyJFQdKSpQ7Htj4Jnc1BFzO7AVRSVIgBu9BZGCbmqkO5gLT%2BZgc%2FndVt0a%2B67VHWRt7NsqOyHkNdxOZP3dG%2BCFziex%2Fr%2FoGhzMuJFdJcFRmno4HUhhM6Ez%2B%2BLZQSobZkIUj64jHzk6WCD6ZeZBWBdPpMvux0bv%2BB5zLYJhuHkPOi1AjKqu1h6pC3WkdaAwh4p%2BXZA0ERAiokDL6Tj9gcqZL1sTITpB7t%2BW0X%2FpsR9ebVh%2Bg9SBycK4OeF3mh%2B7nkDvs9itvxv3K5lZ2wH%2F2BeZ5UAjtb20Suhkzxhk6zmrbqBfetE8%2BWote1WgiM3SNYSPh1Yiue9hUhDYmX0nNy7yX1KGKlQGTTKx3DAaJ5a90pNMnATH9xt8u475yFLe9AOSDXiYTj1aHVsqvM6Xqbj5L%2BDeODSy%2BnWlWscoD0Cn0fmSPOO2Zedi1HDyiGfrBCx2odfT3hHnxZkLdguE7I6109C8saRGMOztwL8GOqUBh%2FGLNdkH3%2F9HL48yhe%2FgExhl78d4YAD9tBHrVytAwjp%2Bh%2F7XM7f63GNMVKRJv01k1KCatjPy0w2m4HPJivqQ3KbwxiRmoTK2cFe56y01enku8nBIq2od8273K9ApaKjUOrdZdBo1cV0zrnRSrDavGjwo4CdaZP%2B6OSDDHyC5G9jTHgXpI6ifRCtDAtQFtc6qQx7%2BGMDibPsn5HD91jHSfCbA33za&X-Amz-Signature=3627c6ab0644f18f598ad449e7544546b5873d6b42d9abe0f27e6cfcfdb4e184&X-Amz-SignedHeaders=host&x-id=GetObject)
