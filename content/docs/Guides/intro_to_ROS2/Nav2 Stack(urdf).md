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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTDNY2X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDiCOV4g%2FJhQKe%2BB4sZHZL8W%2Fn2rBuaFxwWfTSX%2BNtRlAiEAxs0%2FqzvwCVBffDgAnYdPVdP%2BBr2rBfJkYw50Gh7kMV0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOF%2FkWVUSKlhsGjdDCrcA%2FnsjbCjuGeIvW1E669%2BLHSYoDMxzGeQsQM5CuO%2B5Swx2UnDVd2MabZTs7XmleZk3w9J9Np4%2FyqTq6c2MM6g3ay1654my1btLLHOasabHjepkHuXypQWVBl%2Fn%2Bq5KvGA1IQvtbFOlNK6yos0rKDiJZMULT3P0SzyTEAiJq6VzJCvmsxbi0RotbuFAt8sHKRH38Hv0KJavpfR6Id8ZyeYcMTghyxuq9S6cKf1MuRUl6WEfSMWYQdomLDqfBUoJeoLJX%2F6RIWZMROpnwsJxrDI6BGGWc7muD21chGaGiKY0yf6PUki7i0n0SquY%2Fric%2BqEj5O4R9klpysgdBDwrPTxGP0%2BARyEjxE7hvXha8xMHFJ2eKruBLcfjbPM8gPQcWEop%2BFR1RbTrX95VbOyXSdMJew8vFjTqx9YoZkZpOCSp4yIdwQihIvnXmKjmQgtXgtA%2FYQEULzRllfaptQ3UzNPk%2FSfJ%2BW7UPZ%2BkYXHo%2FAZ1crKP0vqIrHfnHIbFqhgyoR83vsXjjjZ%2BwwUkJbJjYIUt156OfQpKBAJq%2Fr2aWx2f2Km9CsHz2qsSJrhwLSOR00VfgspgIYa2h1WvbuRJsBB5sEMRFmOoUU6gTF0jqmU0MwMNKqYDbkIIEwlvLasMMyk1cMGOqUBbNMDDaTS3LXcSff48NjJ9enpXfrFDJOk%2FAir1XK8VkMwz6f6Rl%2FJFw9A89OaCXS93vg%2Fg1mzs%2Fyqyx7nJEqHjcXIMkHgzXb7Z%2FmcH2eTSlU5mX%2BhYBHO5uMoekcRQVCQ%2B7XMOCA6LMt8TJ%2F%2FpqDyrmIGsJ99Wri15RKa28GL0xDAxwMvggfGT0P10l6TRjkxBwvya5VIm6HdWJTVq%2FKlWwu4lA3j&X-Amz-Signature=a692f9a3a6629264e97a48b9df4388bf1395a6e4ed8d420f084d71ff1f6af776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTDNY2X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDiCOV4g%2FJhQKe%2BB4sZHZL8W%2Fn2rBuaFxwWfTSX%2BNtRlAiEAxs0%2FqzvwCVBffDgAnYdPVdP%2BBr2rBfJkYw50Gh7kMV0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOF%2FkWVUSKlhsGjdDCrcA%2FnsjbCjuGeIvW1E669%2BLHSYoDMxzGeQsQM5CuO%2B5Swx2UnDVd2MabZTs7XmleZk3w9J9Np4%2FyqTq6c2MM6g3ay1654my1btLLHOasabHjepkHuXypQWVBl%2Fn%2Bq5KvGA1IQvtbFOlNK6yos0rKDiJZMULT3P0SzyTEAiJq6VzJCvmsxbi0RotbuFAt8sHKRH38Hv0KJavpfR6Id8ZyeYcMTghyxuq9S6cKf1MuRUl6WEfSMWYQdomLDqfBUoJeoLJX%2F6RIWZMROpnwsJxrDI6BGGWc7muD21chGaGiKY0yf6PUki7i0n0SquY%2Fric%2BqEj5O4R9klpysgdBDwrPTxGP0%2BARyEjxE7hvXha8xMHFJ2eKruBLcfjbPM8gPQcWEop%2BFR1RbTrX95VbOyXSdMJew8vFjTqx9YoZkZpOCSp4yIdwQihIvnXmKjmQgtXgtA%2FYQEULzRllfaptQ3UzNPk%2FSfJ%2BW7UPZ%2BkYXHo%2FAZ1crKP0vqIrHfnHIbFqhgyoR83vsXjjjZ%2BwwUkJbJjYIUt156OfQpKBAJq%2Fr2aWx2f2Km9CsHz2qsSJrhwLSOR00VfgspgIYa2h1WvbuRJsBB5sEMRFmOoUU6gTF0jqmU0MwMNKqYDbkIIEwlvLasMMyk1cMGOqUBbNMDDaTS3LXcSff48NjJ9enpXfrFDJOk%2FAir1XK8VkMwz6f6Rl%2FJFw9A89OaCXS93vg%2Fg1mzs%2Fyqyx7nJEqHjcXIMkHgzXb7Z%2FmcH2eTSlU5mX%2BhYBHO5uMoekcRQVCQ%2B7XMOCA6LMt8TJ%2F%2FpqDyrmIGsJ99Wri15RKa28GL0xDAxwMvggfGT0P10l6TRjkxBwvya5VIm6HdWJTVq%2FKlWwu4lA3j&X-Amz-Signature=a5e6ec1f3df44bdb8b95cd99f270e56a29fc079b437664562b98d2d1c01f027a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTDNY2X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDiCOV4g%2FJhQKe%2BB4sZHZL8W%2Fn2rBuaFxwWfTSX%2BNtRlAiEAxs0%2FqzvwCVBffDgAnYdPVdP%2BBr2rBfJkYw50Gh7kMV0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOF%2FkWVUSKlhsGjdDCrcA%2FnsjbCjuGeIvW1E669%2BLHSYoDMxzGeQsQM5CuO%2B5Swx2UnDVd2MabZTs7XmleZk3w9J9Np4%2FyqTq6c2MM6g3ay1654my1btLLHOasabHjepkHuXypQWVBl%2Fn%2Bq5KvGA1IQvtbFOlNK6yos0rKDiJZMULT3P0SzyTEAiJq6VzJCvmsxbi0RotbuFAt8sHKRH38Hv0KJavpfR6Id8ZyeYcMTghyxuq9S6cKf1MuRUl6WEfSMWYQdomLDqfBUoJeoLJX%2F6RIWZMROpnwsJxrDI6BGGWc7muD21chGaGiKY0yf6PUki7i0n0SquY%2Fric%2BqEj5O4R9klpysgdBDwrPTxGP0%2BARyEjxE7hvXha8xMHFJ2eKruBLcfjbPM8gPQcWEop%2BFR1RbTrX95VbOyXSdMJew8vFjTqx9YoZkZpOCSp4yIdwQihIvnXmKjmQgtXgtA%2FYQEULzRllfaptQ3UzNPk%2FSfJ%2BW7UPZ%2BkYXHo%2FAZ1crKP0vqIrHfnHIbFqhgyoR83vsXjjjZ%2BwwUkJbJjYIUt156OfQpKBAJq%2Fr2aWx2f2Km9CsHz2qsSJrhwLSOR00VfgspgIYa2h1WvbuRJsBB5sEMRFmOoUU6gTF0jqmU0MwMNKqYDbkIIEwlvLasMMyk1cMGOqUBbNMDDaTS3LXcSff48NjJ9enpXfrFDJOk%2FAir1XK8VkMwz6f6Rl%2FJFw9A89OaCXS93vg%2Fg1mzs%2Fyqyx7nJEqHjcXIMkHgzXb7Z%2FmcH2eTSlU5mX%2BhYBHO5uMoekcRQVCQ%2B7XMOCA6LMt8TJ%2F%2FpqDyrmIGsJ99Wri15RKa28GL0xDAxwMvggfGT0P10l6TRjkxBwvya5VIm6HdWJTVq%2FKlWwu4lA3j&X-Amz-Signature=df29881016215eacb800f529a76b933aad534af46e6f6b364c339df48c57b05d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTDNY2X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDiCOV4g%2FJhQKe%2BB4sZHZL8W%2Fn2rBuaFxwWfTSX%2BNtRlAiEAxs0%2FqzvwCVBffDgAnYdPVdP%2BBr2rBfJkYw50Gh7kMV0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOF%2FkWVUSKlhsGjdDCrcA%2FnsjbCjuGeIvW1E669%2BLHSYoDMxzGeQsQM5CuO%2B5Swx2UnDVd2MabZTs7XmleZk3w9J9Np4%2FyqTq6c2MM6g3ay1654my1btLLHOasabHjepkHuXypQWVBl%2Fn%2Bq5KvGA1IQvtbFOlNK6yos0rKDiJZMULT3P0SzyTEAiJq6VzJCvmsxbi0RotbuFAt8sHKRH38Hv0KJavpfR6Id8ZyeYcMTghyxuq9S6cKf1MuRUl6WEfSMWYQdomLDqfBUoJeoLJX%2F6RIWZMROpnwsJxrDI6BGGWc7muD21chGaGiKY0yf6PUki7i0n0SquY%2Fric%2BqEj5O4R9klpysgdBDwrPTxGP0%2BARyEjxE7hvXha8xMHFJ2eKruBLcfjbPM8gPQcWEop%2BFR1RbTrX95VbOyXSdMJew8vFjTqx9YoZkZpOCSp4yIdwQihIvnXmKjmQgtXgtA%2FYQEULzRllfaptQ3UzNPk%2FSfJ%2BW7UPZ%2BkYXHo%2FAZ1crKP0vqIrHfnHIbFqhgyoR83vsXjjjZ%2BwwUkJbJjYIUt156OfQpKBAJq%2Fr2aWx2f2Km9CsHz2qsSJrhwLSOR00VfgspgIYa2h1WvbuRJsBB5sEMRFmOoUU6gTF0jqmU0MwMNKqYDbkIIEwlvLasMMyk1cMGOqUBbNMDDaTS3LXcSff48NjJ9enpXfrFDJOk%2FAir1XK8VkMwz6f6Rl%2FJFw9A89OaCXS93vg%2Fg1mzs%2Fyqyx7nJEqHjcXIMkHgzXb7Z%2FmcH2eTSlU5mX%2BhYBHO5uMoekcRQVCQ%2B7XMOCA6LMt8TJ%2F%2FpqDyrmIGsJ99Wri15RKa28GL0xDAxwMvggfGT0P10l6TRjkxBwvya5VIm6HdWJTVq%2FKlWwu4lA3j&X-Amz-Signature=7946df069f511ba13c5dbb6ca238b46ce34ffedf6f250d62d00e1dc04ff473c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTDNY2X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDiCOV4g%2FJhQKe%2BB4sZHZL8W%2Fn2rBuaFxwWfTSX%2BNtRlAiEAxs0%2FqzvwCVBffDgAnYdPVdP%2BBr2rBfJkYw50Gh7kMV0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOF%2FkWVUSKlhsGjdDCrcA%2FnsjbCjuGeIvW1E669%2BLHSYoDMxzGeQsQM5CuO%2B5Swx2UnDVd2MabZTs7XmleZk3w9J9Np4%2FyqTq6c2MM6g3ay1654my1btLLHOasabHjepkHuXypQWVBl%2Fn%2Bq5KvGA1IQvtbFOlNK6yos0rKDiJZMULT3P0SzyTEAiJq6VzJCvmsxbi0RotbuFAt8sHKRH38Hv0KJavpfR6Id8ZyeYcMTghyxuq9S6cKf1MuRUl6WEfSMWYQdomLDqfBUoJeoLJX%2F6RIWZMROpnwsJxrDI6BGGWc7muD21chGaGiKY0yf6PUki7i0n0SquY%2Fric%2BqEj5O4R9klpysgdBDwrPTxGP0%2BARyEjxE7hvXha8xMHFJ2eKruBLcfjbPM8gPQcWEop%2BFR1RbTrX95VbOyXSdMJew8vFjTqx9YoZkZpOCSp4yIdwQihIvnXmKjmQgtXgtA%2FYQEULzRllfaptQ3UzNPk%2FSfJ%2BW7UPZ%2BkYXHo%2FAZ1crKP0vqIrHfnHIbFqhgyoR83vsXjjjZ%2BwwUkJbJjYIUt156OfQpKBAJq%2Fr2aWx2f2Km9CsHz2qsSJrhwLSOR00VfgspgIYa2h1WvbuRJsBB5sEMRFmOoUU6gTF0jqmU0MwMNKqYDbkIIEwlvLasMMyk1cMGOqUBbNMDDaTS3LXcSff48NjJ9enpXfrFDJOk%2FAir1XK8VkMwz6f6Rl%2FJFw9A89OaCXS93vg%2Fg1mzs%2Fyqyx7nJEqHjcXIMkHgzXb7Z%2FmcH2eTSlU5mX%2BhYBHO5uMoekcRQVCQ%2B7XMOCA6LMt8TJ%2F%2FpqDyrmIGsJ99Wri15RKa28GL0xDAxwMvggfGT0P10l6TRjkxBwvya5VIm6HdWJTVq%2FKlWwu4lA3j&X-Amz-Signature=817e539319ed4614ef60b9edb81d06d82e3de2afdd01bf5cc7d717f518022f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTDNY2X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDiCOV4g%2FJhQKe%2BB4sZHZL8W%2Fn2rBuaFxwWfTSX%2BNtRlAiEAxs0%2FqzvwCVBffDgAnYdPVdP%2BBr2rBfJkYw50Gh7kMV0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOF%2FkWVUSKlhsGjdDCrcA%2FnsjbCjuGeIvW1E669%2BLHSYoDMxzGeQsQM5CuO%2B5Swx2UnDVd2MabZTs7XmleZk3w9J9Np4%2FyqTq6c2MM6g3ay1654my1btLLHOasabHjepkHuXypQWVBl%2Fn%2Bq5KvGA1IQvtbFOlNK6yos0rKDiJZMULT3P0SzyTEAiJq6VzJCvmsxbi0RotbuFAt8sHKRH38Hv0KJavpfR6Id8ZyeYcMTghyxuq9S6cKf1MuRUl6WEfSMWYQdomLDqfBUoJeoLJX%2F6RIWZMROpnwsJxrDI6BGGWc7muD21chGaGiKY0yf6PUki7i0n0SquY%2Fric%2BqEj5O4R9klpysgdBDwrPTxGP0%2BARyEjxE7hvXha8xMHFJ2eKruBLcfjbPM8gPQcWEop%2BFR1RbTrX95VbOyXSdMJew8vFjTqx9YoZkZpOCSp4yIdwQihIvnXmKjmQgtXgtA%2FYQEULzRllfaptQ3UzNPk%2FSfJ%2BW7UPZ%2BkYXHo%2FAZ1crKP0vqIrHfnHIbFqhgyoR83vsXjjjZ%2BwwUkJbJjYIUt156OfQpKBAJq%2Fr2aWx2f2Km9CsHz2qsSJrhwLSOR00VfgspgIYa2h1WvbuRJsBB5sEMRFmOoUU6gTF0jqmU0MwMNKqYDbkIIEwlvLasMMyk1cMGOqUBbNMDDaTS3LXcSff48NjJ9enpXfrFDJOk%2FAir1XK8VkMwz6f6Rl%2FJFw9A89OaCXS93vg%2Fg1mzs%2Fyqyx7nJEqHjcXIMkHgzXb7Z%2FmcH2eTSlU5mX%2BhYBHO5uMoekcRQVCQ%2B7XMOCA6LMt8TJ%2F%2FpqDyrmIGsJ99Wri15RKa28GL0xDAxwMvggfGT0P10l6TRjkxBwvya5VIm6HdWJTVq%2FKlWwu4lA3j&X-Amz-Signature=c26b10c0acb696b03386715dae675cbe598fff7de0f6b17313d9ec38962b2d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
