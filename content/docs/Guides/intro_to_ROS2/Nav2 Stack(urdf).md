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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSLGDME2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEI80qAv3QF6AKElE%2FqmLmxLfgSOM4I%2B4%2FhfZxtWDAXUAiEArkoiNSjjFOrh6qvVh%2FfYkcEbT0MbtIRbao01YuII0cQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFyZRoNU0pmf%2BLniySrcA1Z%2BTgZT1Oq8OZlWAIPOXF0SftmRRaxa34g63NtWaHMlLAr64G071LKvsX4la1fIe4lAv%2BRooTM9IaedC%2FAgKXWHbOJ9wrYCSUUQTFC8uklt6WZDAmUGBuJeg%2FRsWjvFG9CghXmnfOkP2qTbzRUJfVQGhGQ%2F7EyQTuHhUb1Dh4rOa8RJPDmdTxAVdlWOpBN2fGHukhDIBhDncwXSY5hlbOLP6vK8o3I7rD8cY9jfxKoyiXI4IKLyChchLC6Cif2vR19wRIZAtonkIGrRedchH14LyEWMcWUcB3IgIuQhienstay5eZqkwdwFY%2FPk5WlQOgtzAVu88rzbU6gHmATes20LBeyTLAWcVZYcCVFN9R%2FI47a%2BrPGT8CUeyShUaYmKxHs4g1K2V8N5ObnlWGOy47rvoL0kmh5cSQxx13KwHnVObJ2bdKw8RfcLZTqXIX142mljMmKR%2BhmnRzr71JWCfy%2FPt7vqbycy6t4OHGJTeQH%2BZRVuFrE7nwLy1nJMkZ7FfNeTSz86mDhoYuExM2cigRR4qt2YY8WIdeTNd3yswwhrdWRrKsfwR3n2AIVDTQJNmL%2FlzseP0Xb4ZuABBMM5sv0cRfYETzuT%2BdvH6042%2Bse9Hsb9Q6CtECRvhovVMLe06cAGOqUBVbCg8cjRpBeOd%2F0H7jhw9OsA33GuOj4fPqoBNnOzzIX0Q8xX%2FeGfZrtmDnwp6AdgxPn%2B1HkcN18RRiMRm7iv%2BoaWAjiO14iETGbI3%2FGtlFUH1F%2BRgoTTkvWo%2BBLF0WbI3VqnoRGEtlEsZfCVdmxLuWgYXBbhAVQeo6ZHjHVTm5qMloaGq6awd%2BdwuVIZMmPWbfiIaJaOaKQW2498hF6WZTDKn5eL&X-Amz-Signature=214e858e322a4fde79a3321f2aa508e2874b00667063948eda60b822c5d4968c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSLGDME2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEI80qAv3QF6AKElE%2FqmLmxLfgSOM4I%2B4%2FhfZxtWDAXUAiEArkoiNSjjFOrh6qvVh%2FfYkcEbT0MbtIRbao01YuII0cQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFyZRoNU0pmf%2BLniySrcA1Z%2BTgZT1Oq8OZlWAIPOXF0SftmRRaxa34g63NtWaHMlLAr64G071LKvsX4la1fIe4lAv%2BRooTM9IaedC%2FAgKXWHbOJ9wrYCSUUQTFC8uklt6WZDAmUGBuJeg%2FRsWjvFG9CghXmnfOkP2qTbzRUJfVQGhGQ%2F7EyQTuHhUb1Dh4rOa8RJPDmdTxAVdlWOpBN2fGHukhDIBhDncwXSY5hlbOLP6vK8o3I7rD8cY9jfxKoyiXI4IKLyChchLC6Cif2vR19wRIZAtonkIGrRedchH14LyEWMcWUcB3IgIuQhienstay5eZqkwdwFY%2FPk5WlQOgtzAVu88rzbU6gHmATes20LBeyTLAWcVZYcCVFN9R%2FI47a%2BrPGT8CUeyShUaYmKxHs4g1K2V8N5ObnlWGOy47rvoL0kmh5cSQxx13KwHnVObJ2bdKw8RfcLZTqXIX142mljMmKR%2BhmnRzr71JWCfy%2FPt7vqbycy6t4OHGJTeQH%2BZRVuFrE7nwLy1nJMkZ7FfNeTSz86mDhoYuExM2cigRR4qt2YY8WIdeTNd3yswwhrdWRrKsfwR3n2AIVDTQJNmL%2FlzseP0Xb4ZuABBMM5sv0cRfYETzuT%2BdvH6042%2Bse9Hsb9Q6CtECRvhovVMLe06cAGOqUBVbCg8cjRpBeOd%2F0H7jhw9OsA33GuOj4fPqoBNnOzzIX0Q8xX%2FeGfZrtmDnwp6AdgxPn%2B1HkcN18RRiMRm7iv%2BoaWAjiO14iETGbI3%2FGtlFUH1F%2BRgoTTkvWo%2BBLF0WbI3VqnoRGEtlEsZfCVdmxLuWgYXBbhAVQeo6ZHjHVTm5qMloaGq6awd%2BdwuVIZMmPWbfiIaJaOaKQW2498hF6WZTDKn5eL&X-Amz-Signature=7c36d10dc8ee3d6cac6e15d29ab5ad730870f025efa56e0b29482775c9fa9d77&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSLGDME2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEI80qAv3QF6AKElE%2FqmLmxLfgSOM4I%2B4%2FhfZxtWDAXUAiEArkoiNSjjFOrh6qvVh%2FfYkcEbT0MbtIRbao01YuII0cQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFyZRoNU0pmf%2BLniySrcA1Z%2BTgZT1Oq8OZlWAIPOXF0SftmRRaxa34g63NtWaHMlLAr64G071LKvsX4la1fIe4lAv%2BRooTM9IaedC%2FAgKXWHbOJ9wrYCSUUQTFC8uklt6WZDAmUGBuJeg%2FRsWjvFG9CghXmnfOkP2qTbzRUJfVQGhGQ%2F7EyQTuHhUb1Dh4rOa8RJPDmdTxAVdlWOpBN2fGHukhDIBhDncwXSY5hlbOLP6vK8o3I7rD8cY9jfxKoyiXI4IKLyChchLC6Cif2vR19wRIZAtonkIGrRedchH14LyEWMcWUcB3IgIuQhienstay5eZqkwdwFY%2FPk5WlQOgtzAVu88rzbU6gHmATes20LBeyTLAWcVZYcCVFN9R%2FI47a%2BrPGT8CUeyShUaYmKxHs4g1K2V8N5ObnlWGOy47rvoL0kmh5cSQxx13KwHnVObJ2bdKw8RfcLZTqXIX142mljMmKR%2BhmnRzr71JWCfy%2FPt7vqbycy6t4OHGJTeQH%2BZRVuFrE7nwLy1nJMkZ7FfNeTSz86mDhoYuExM2cigRR4qt2YY8WIdeTNd3yswwhrdWRrKsfwR3n2AIVDTQJNmL%2FlzseP0Xb4ZuABBMM5sv0cRfYETzuT%2BdvH6042%2Bse9Hsb9Q6CtECRvhovVMLe06cAGOqUBVbCg8cjRpBeOd%2F0H7jhw9OsA33GuOj4fPqoBNnOzzIX0Q8xX%2FeGfZrtmDnwp6AdgxPn%2B1HkcN18RRiMRm7iv%2BoaWAjiO14iETGbI3%2FGtlFUH1F%2BRgoTTkvWo%2BBLF0WbI3VqnoRGEtlEsZfCVdmxLuWgYXBbhAVQeo6ZHjHVTm5qMloaGq6awd%2BdwuVIZMmPWbfiIaJaOaKQW2498hF6WZTDKn5eL&X-Amz-Signature=5e769745d0aafbe32d9f49155c797c621f8e10a5126c01e23479bbd5991432e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSLGDME2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEI80qAv3QF6AKElE%2FqmLmxLfgSOM4I%2B4%2FhfZxtWDAXUAiEArkoiNSjjFOrh6qvVh%2FfYkcEbT0MbtIRbao01YuII0cQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFyZRoNU0pmf%2BLniySrcA1Z%2BTgZT1Oq8OZlWAIPOXF0SftmRRaxa34g63NtWaHMlLAr64G071LKvsX4la1fIe4lAv%2BRooTM9IaedC%2FAgKXWHbOJ9wrYCSUUQTFC8uklt6WZDAmUGBuJeg%2FRsWjvFG9CghXmnfOkP2qTbzRUJfVQGhGQ%2F7EyQTuHhUb1Dh4rOa8RJPDmdTxAVdlWOpBN2fGHukhDIBhDncwXSY5hlbOLP6vK8o3I7rD8cY9jfxKoyiXI4IKLyChchLC6Cif2vR19wRIZAtonkIGrRedchH14LyEWMcWUcB3IgIuQhienstay5eZqkwdwFY%2FPk5WlQOgtzAVu88rzbU6gHmATes20LBeyTLAWcVZYcCVFN9R%2FI47a%2BrPGT8CUeyShUaYmKxHs4g1K2V8N5ObnlWGOy47rvoL0kmh5cSQxx13KwHnVObJ2bdKw8RfcLZTqXIX142mljMmKR%2BhmnRzr71JWCfy%2FPt7vqbycy6t4OHGJTeQH%2BZRVuFrE7nwLy1nJMkZ7FfNeTSz86mDhoYuExM2cigRR4qt2YY8WIdeTNd3yswwhrdWRrKsfwR3n2AIVDTQJNmL%2FlzseP0Xb4ZuABBMM5sv0cRfYETzuT%2BdvH6042%2Bse9Hsb9Q6CtECRvhovVMLe06cAGOqUBVbCg8cjRpBeOd%2F0H7jhw9OsA33GuOj4fPqoBNnOzzIX0Q8xX%2FeGfZrtmDnwp6AdgxPn%2B1HkcN18RRiMRm7iv%2BoaWAjiO14iETGbI3%2FGtlFUH1F%2BRgoTTkvWo%2BBLF0WbI3VqnoRGEtlEsZfCVdmxLuWgYXBbhAVQeo6ZHjHVTm5qMloaGq6awd%2BdwuVIZMmPWbfiIaJaOaKQW2498hF6WZTDKn5eL&X-Amz-Signature=e285c37c3abcea7ecd2217dd73cc68b98d10025fbb0646b775f7b9711a976a4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSLGDME2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEI80qAv3QF6AKElE%2FqmLmxLfgSOM4I%2B4%2FhfZxtWDAXUAiEArkoiNSjjFOrh6qvVh%2FfYkcEbT0MbtIRbao01YuII0cQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFyZRoNU0pmf%2BLniySrcA1Z%2BTgZT1Oq8OZlWAIPOXF0SftmRRaxa34g63NtWaHMlLAr64G071LKvsX4la1fIe4lAv%2BRooTM9IaedC%2FAgKXWHbOJ9wrYCSUUQTFC8uklt6WZDAmUGBuJeg%2FRsWjvFG9CghXmnfOkP2qTbzRUJfVQGhGQ%2F7EyQTuHhUb1Dh4rOa8RJPDmdTxAVdlWOpBN2fGHukhDIBhDncwXSY5hlbOLP6vK8o3I7rD8cY9jfxKoyiXI4IKLyChchLC6Cif2vR19wRIZAtonkIGrRedchH14LyEWMcWUcB3IgIuQhienstay5eZqkwdwFY%2FPk5WlQOgtzAVu88rzbU6gHmATes20LBeyTLAWcVZYcCVFN9R%2FI47a%2BrPGT8CUeyShUaYmKxHs4g1K2V8N5ObnlWGOy47rvoL0kmh5cSQxx13KwHnVObJ2bdKw8RfcLZTqXIX142mljMmKR%2BhmnRzr71JWCfy%2FPt7vqbycy6t4OHGJTeQH%2BZRVuFrE7nwLy1nJMkZ7FfNeTSz86mDhoYuExM2cigRR4qt2YY8WIdeTNd3yswwhrdWRrKsfwR3n2AIVDTQJNmL%2FlzseP0Xb4ZuABBMM5sv0cRfYETzuT%2BdvH6042%2Bse9Hsb9Q6CtECRvhovVMLe06cAGOqUBVbCg8cjRpBeOd%2F0H7jhw9OsA33GuOj4fPqoBNnOzzIX0Q8xX%2FeGfZrtmDnwp6AdgxPn%2B1HkcN18RRiMRm7iv%2BoaWAjiO14iETGbI3%2FGtlFUH1F%2BRgoTTkvWo%2BBLF0WbI3VqnoRGEtlEsZfCVdmxLuWgYXBbhAVQeo6ZHjHVTm5qMloaGq6awd%2BdwuVIZMmPWbfiIaJaOaKQW2498hF6WZTDKn5eL&X-Amz-Signature=6471907db89d1ba6c969ca9c84182e3e893280898dd355c059f45cb9031b9958&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSLGDME2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEI80qAv3QF6AKElE%2FqmLmxLfgSOM4I%2B4%2FhfZxtWDAXUAiEArkoiNSjjFOrh6qvVh%2FfYkcEbT0MbtIRbao01YuII0cQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFyZRoNU0pmf%2BLniySrcA1Z%2BTgZT1Oq8OZlWAIPOXF0SftmRRaxa34g63NtWaHMlLAr64G071LKvsX4la1fIe4lAv%2BRooTM9IaedC%2FAgKXWHbOJ9wrYCSUUQTFC8uklt6WZDAmUGBuJeg%2FRsWjvFG9CghXmnfOkP2qTbzRUJfVQGhGQ%2F7EyQTuHhUb1Dh4rOa8RJPDmdTxAVdlWOpBN2fGHukhDIBhDncwXSY5hlbOLP6vK8o3I7rD8cY9jfxKoyiXI4IKLyChchLC6Cif2vR19wRIZAtonkIGrRedchH14LyEWMcWUcB3IgIuQhienstay5eZqkwdwFY%2FPk5WlQOgtzAVu88rzbU6gHmATes20LBeyTLAWcVZYcCVFN9R%2FI47a%2BrPGT8CUeyShUaYmKxHs4g1K2V8N5ObnlWGOy47rvoL0kmh5cSQxx13KwHnVObJ2bdKw8RfcLZTqXIX142mljMmKR%2BhmnRzr71JWCfy%2FPt7vqbycy6t4OHGJTeQH%2BZRVuFrE7nwLy1nJMkZ7FfNeTSz86mDhoYuExM2cigRR4qt2YY8WIdeTNd3yswwhrdWRrKsfwR3n2AIVDTQJNmL%2FlzseP0Xb4ZuABBMM5sv0cRfYETzuT%2BdvH6042%2Bse9Hsb9Q6CtECRvhovVMLe06cAGOqUBVbCg8cjRpBeOd%2F0H7jhw9OsA33GuOj4fPqoBNnOzzIX0Q8xX%2FeGfZrtmDnwp6AdgxPn%2B1HkcN18RRiMRm7iv%2BoaWAjiO14iETGbI3%2FGtlFUH1F%2BRgoTTkvWo%2BBLF0WbI3VqnoRGEtlEsZfCVdmxLuWgYXBbhAVQeo6ZHjHVTm5qMloaGq6awd%2BdwuVIZMmPWbfiIaJaOaKQW2498hF6WZTDKn5eL&X-Amz-Signature=be8c05adffbdd92edd334ec809b8538a742ff7ee2bfd1342578d85cde299d8ba&X-Amz-SignedHeaders=host&x-id=GetObject)
