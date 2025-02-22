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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2U5AHCS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz8PBdxy5tRM9Q%2B%2BOdzc9YOakFmDzMUC5OaUEAGnJwtgIgG20TEB8%2Fsr2JM5RDN3VV8xrQuvq7ddaNytQ9aZY9Uz0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAjnxsdKcXOfQEQsCrcAyatIEBLKn%2BmfVdydhFMfgZaxDOGF6npZWNqnWpegT1j5M3ZDU8stBAMRnfd1ya1iVhkURuj1hdcEtANzFvJnJcTeDk99NidEniAtfd9foFGic6WN3N0FgwdJH01vYI%2BBE4gEkl2O6P4zIVXJnCJnz2JQgFZsA7h%2FLOMsyl40CyawYRp9FZ%2FxEEXyQOBIEARerrHwkPTTNfUJWtfIrpEibv%2FO7BrSEy02VLQH6wephC4sg6vzTQjgLuVvx8wE9K80RX%2BHUBDq1X9sgCS98ZNFBa8IcC4GiOq8WXOVJkCWQZutx0cmQRq9dIQgIh4CJfREEW2LMREhA4aE6hPc3PrugVp8gjVGmFN7ofuMFIDEhkzdYgfvSMJoSaN305t8rnhVno%2FX%2FmnxSST8KSpk5UYJ0DO23SuV7JIq4pkn6qcuiIvTeB82ywlMHzi%2FaXidDdM%2BJNrqmGFPAaLXCJAAVDNkMWk6LUmXCmJNqrgOlpm7MMDzXmpfOCcY3fK1%2F%2FboCF%2BwZFwot5OhQEIBsNQUEpLO8gWAwGISkef%2BjAOrkT9gMcqivHZ8zIf5Xue6%2FXcKDOZNqPvLmZc7T%2FsblCm3myYeg8t6jAhOXXc55TDN3hq4B0j4K7PoFbTqBeLhR5tMInp5r0GOqUBGXxoLwqYEGUvdBoHzxIdFm23uEEFxAuswRCvN6MQPZm%2Bapnplsw2gxzBHmnmoDjCqmnRDJBNfLK8jL6gWjz5fJk8MXCs%2BhH%2BzZspdA1lQMPDUST1y4a%2BfjnkfqfwjXATRbR1behYZOh%2FVHnQwuOHZ3VJFKnvLXJ%2BhEMRW1S8OWrGqSmqHGOibEBKc1XTbzw2JElmgFEB4df5tXsJ1ZsaUs0ImWuk&X-Amz-Signature=ff587468089355e598fd726f6750119e6ef24df5fbb7676d9612a59f4298ad30&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2U5AHCS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz8PBdxy5tRM9Q%2B%2BOdzc9YOakFmDzMUC5OaUEAGnJwtgIgG20TEB8%2Fsr2JM5RDN3VV8xrQuvq7ddaNytQ9aZY9Uz0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAjnxsdKcXOfQEQsCrcAyatIEBLKn%2BmfVdydhFMfgZaxDOGF6npZWNqnWpegT1j5M3ZDU8stBAMRnfd1ya1iVhkURuj1hdcEtANzFvJnJcTeDk99NidEniAtfd9foFGic6WN3N0FgwdJH01vYI%2BBE4gEkl2O6P4zIVXJnCJnz2JQgFZsA7h%2FLOMsyl40CyawYRp9FZ%2FxEEXyQOBIEARerrHwkPTTNfUJWtfIrpEibv%2FO7BrSEy02VLQH6wephC4sg6vzTQjgLuVvx8wE9K80RX%2BHUBDq1X9sgCS98ZNFBa8IcC4GiOq8WXOVJkCWQZutx0cmQRq9dIQgIh4CJfREEW2LMREhA4aE6hPc3PrugVp8gjVGmFN7ofuMFIDEhkzdYgfvSMJoSaN305t8rnhVno%2FX%2FmnxSST8KSpk5UYJ0DO23SuV7JIq4pkn6qcuiIvTeB82ywlMHzi%2FaXidDdM%2BJNrqmGFPAaLXCJAAVDNkMWk6LUmXCmJNqrgOlpm7MMDzXmpfOCcY3fK1%2F%2FboCF%2BwZFwot5OhQEIBsNQUEpLO8gWAwGISkef%2BjAOrkT9gMcqivHZ8zIf5Xue6%2FXcKDOZNqPvLmZc7T%2FsblCm3myYeg8t6jAhOXXc55TDN3hq4B0j4K7PoFbTqBeLhR5tMInp5r0GOqUBGXxoLwqYEGUvdBoHzxIdFm23uEEFxAuswRCvN6MQPZm%2Bapnplsw2gxzBHmnmoDjCqmnRDJBNfLK8jL6gWjz5fJk8MXCs%2BhH%2BzZspdA1lQMPDUST1y4a%2BfjnkfqfwjXATRbR1behYZOh%2FVHnQwuOHZ3VJFKnvLXJ%2BhEMRW1S8OWrGqSmqHGOibEBKc1XTbzw2JElmgFEB4df5tXsJ1ZsaUs0ImWuk&X-Amz-Signature=1bc6aa58d5c12cd09b92fd46492fa97c59c5e8619cba1fed322693990ffa92cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2U5AHCS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz8PBdxy5tRM9Q%2B%2BOdzc9YOakFmDzMUC5OaUEAGnJwtgIgG20TEB8%2Fsr2JM5RDN3VV8xrQuvq7ddaNytQ9aZY9Uz0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAjnxsdKcXOfQEQsCrcAyatIEBLKn%2BmfVdydhFMfgZaxDOGF6npZWNqnWpegT1j5M3ZDU8stBAMRnfd1ya1iVhkURuj1hdcEtANzFvJnJcTeDk99NidEniAtfd9foFGic6WN3N0FgwdJH01vYI%2BBE4gEkl2O6P4zIVXJnCJnz2JQgFZsA7h%2FLOMsyl40CyawYRp9FZ%2FxEEXyQOBIEARerrHwkPTTNfUJWtfIrpEibv%2FO7BrSEy02VLQH6wephC4sg6vzTQjgLuVvx8wE9K80RX%2BHUBDq1X9sgCS98ZNFBa8IcC4GiOq8WXOVJkCWQZutx0cmQRq9dIQgIh4CJfREEW2LMREhA4aE6hPc3PrugVp8gjVGmFN7ofuMFIDEhkzdYgfvSMJoSaN305t8rnhVno%2FX%2FmnxSST8KSpk5UYJ0DO23SuV7JIq4pkn6qcuiIvTeB82ywlMHzi%2FaXidDdM%2BJNrqmGFPAaLXCJAAVDNkMWk6LUmXCmJNqrgOlpm7MMDzXmpfOCcY3fK1%2F%2FboCF%2BwZFwot5OhQEIBsNQUEpLO8gWAwGISkef%2BjAOrkT9gMcqivHZ8zIf5Xue6%2FXcKDOZNqPvLmZc7T%2FsblCm3myYeg8t6jAhOXXc55TDN3hq4B0j4K7PoFbTqBeLhR5tMInp5r0GOqUBGXxoLwqYEGUvdBoHzxIdFm23uEEFxAuswRCvN6MQPZm%2Bapnplsw2gxzBHmnmoDjCqmnRDJBNfLK8jL6gWjz5fJk8MXCs%2BhH%2BzZspdA1lQMPDUST1y4a%2BfjnkfqfwjXATRbR1behYZOh%2FVHnQwuOHZ3VJFKnvLXJ%2BhEMRW1S8OWrGqSmqHGOibEBKc1XTbzw2JElmgFEB4df5tXsJ1ZsaUs0ImWuk&X-Amz-Signature=497070a80156b351bd0c3b69c87cbb6026b8f3fb0038a7904d6563126f3d65a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2U5AHCS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz8PBdxy5tRM9Q%2B%2BOdzc9YOakFmDzMUC5OaUEAGnJwtgIgG20TEB8%2Fsr2JM5RDN3VV8xrQuvq7ddaNytQ9aZY9Uz0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAjnxsdKcXOfQEQsCrcAyatIEBLKn%2BmfVdydhFMfgZaxDOGF6npZWNqnWpegT1j5M3ZDU8stBAMRnfd1ya1iVhkURuj1hdcEtANzFvJnJcTeDk99NidEniAtfd9foFGic6WN3N0FgwdJH01vYI%2BBE4gEkl2O6P4zIVXJnCJnz2JQgFZsA7h%2FLOMsyl40CyawYRp9FZ%2FxEEXyQOBIEARerrHwkPTTNfUJWtfIrpEibv%2FO7BrSEy02VLQH6wephC4sg6vzTQjgLuVvx8wE9K80RX%2BHUBDq1X9sgCS98ZNFBa8IcC4GiOq8WXOVJkCWQZutx0cmQRq9dIQgIh4CJfREEW2LMREhA4aE6hPc3PrugVp8gjVGmFN7ofuMFIDEhkzdYgfvSMJoSaN305t8rnhVno%2FX%2FmnxSST8KSpk5UYJ0DO23SuV7JIq4pkn6qcuiIvTeB82ywlMHzi%2FaXidDdM%2BJNrqmGFPAaLXCJAAVDNkMWk6LUmXCmJNqrgOlpm7MMDzXmpfOCcY3fK1%2F%2FboCF%2BwZFwot5OhQEIBsNQUEpLO8gWAwGISkef%2BjAOrkT9gMcqivHZ8zIf5Xue6%2FXcKDOZNqPvLmZc7T%2FsblCm3myYeg8t6jAhOXXc55TDN3hq4B0j4K7PoFbTqBeLhR5tMInp5r0GOqUBGXxoLwqYEGUvdBoHzxIdFm23uEEFxAuswRCvN6MQPZm%2Bapnplsw2gxzBHmnmoDjCqmnRDJBNfLK8jL6gWjz5fJk8MXCs%2BhH%2BzZspdA1lQMPDUST1y4a%2BfjnkfqfwjXATRbR1behYZOh%2FVHnQwuOHZ3VJFKnvLXJ%2BhEMRW1S8OWrGqSmqHGOibEBKc1XTbzw2JElmgFEB4df5tXsJ1ZsaUs0ImWuk&X-Amz-Signature=9b84f063693a83fa24cb69d79c3c58cd1aadcc0e52ea89b4a5c60811f9a55d37&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2U5AHCS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz8PBdxy5tRM9Q%2B%2BOdzc9YOakFmDzMUC5OaUEAGnJwtgIgG20TEB8%2Fsr2JM5RDN3VV8xrQuvq7ddaNytQ9aZY9Uz0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAjnxsdKcXOfQEQsCrcAyatIEBLKn%2BmfVdydhFMfgZaxDOGF6npZWNqnWpegT1j5M3ZDU8stBAMRnfd1ya1iVhkURuj1hdcEtANzFvJnJcTeDk99NidEniAtfd9foFGic6WN3N0FgwdJH01vYI%2BBE4gEkl2O6P4zIVXJnCJnz2JQgFZsA7h%2FLOMsyl40CyawYRp9FZ%2FxEEXyQOBIEARerrHwkPTTNfUJWtfIrpEibv%2FO7BrSEy02VLQH6wephC4sg6vzTQjgLuVvx8wE9K80RX%2BHUBDq1X9sgCS98ZNFBa8IcC4GiOq8WXOVJkCWQZutx0cmQRq9dIQgIh4CJfREEW2LMREhA4aE6hPc3PrugVp8gjVGmFN7ofuMFIDEhkzdYgfvSMJoSaN305t8rnhVno%2FX%2FmnxSST8KSpk5UYJ0DO23SuV7JIq4pkn6qcuiIvTeB82ywlMHzi%2FaXidDdM%2BJNrqmGFPAaLXCJAAVDNkMWk6LUmXCmJNqrgOlpm7MMDzXmpfOCcY3fK1%2F%2FboCF%2BwZFwot5OhQEIBsNQUEpLO8gWAwGISkef%2BjAOrkT9gMcqivHZ8zIf5Xue6%2FXcKDOZNqPvLmZc7T%2FsblCm3myYeg8t6jAhOXXc55TDN3hq4B0j4K7PoFbTqBeLhR5tMInp5r0GOqUBGXxoLwqYEGUvdBoHzxIdFm23uEEFxAuswRCvN6MQPZm%2Bapnplsw2gxzBHmnmoDjCqmnRDJBNfLK8jL6gWjz5fJk8MXCs%2BhH%2BzZspdA1lQMPDUST1y4a%2BfjnkfqfwjXATRbR1behYZOh%2FVHnQwuOHZ3VJFKnvLXJ%2BhEMRW1S8OWrGqSmqHGOibEBKc1XTbzw2JElmgFEB4df5tXsJ1ZsaUs0ImWuk&X-Amz-Signature=854c4e84c7f96066bb0712de58d6d4e8241961d2b08a482b1d75180482e19e3a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2U5AHCS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz8PBdxy5tRM9Q%2B%2BOdzc9YOakFmDzMUC5OaUEAGnJwtgIgG20TEB8%2Fsr2JM5RDN3VV8xrQuvq7ddaNytQ9aZY9Uz0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAjnxsdKcXOfQEQsCrcAyatIEBLKn%2BmfVdydhFMfgZaxDOGF6npZWNqnWpegT1j5M3ZDU8stBAMRnfd1ya1iVhkURuj1hdcEtANzFvJnJcTeDk99NidEniAtfd9foFGic6WN3N0FgwdJH01vYI%2BBE4gEkl2O6P4zIVXJnCJnz2JQgFZsA7h%2FLOMsyl40CyawYRp9FZ%2FxEEXyQOBIEARerrHwkPTTNfUJWtfIrpEibv%2FO7BrSEy02VLQH6wephC4sg6vzTQjgLuVvx8wE9K80RX%2BHUBDq1X9sgCS98ZNFBa8IcC4GiOq8WXOVJkCWQZutx0cmQRq9dIQgIh4CJfREEW2LMREhA4aE6hPc3PrugVp8gjVGmFN7ofuMFIDEhkzdYgfvSMJoSaN305t8rnhVno%2FX%2FmnxSST8KSpk5UYJ0DO23SuV7JIq4pkn6qcuiIvTeB82ywlMHzi%2FaXidDdM%2BJNrqmGFPAaLXCJAAVDNkMWk6LUmXCmJNqrgOlpm7MMDzXmpfOCcY3fK1%2F%2FboCF%2BwZFwot5OhQEIBsNQUEpLO8gWAwGISkef%2BjAOrkT9gMcqivHZ8zIf5Xue6%2FXcKDOZNqPvLmZc7T%2FsblCm3myYeg8t6jAhOXXc55TDN3hq4B0j4K7PoFbTqBeLhR5tMInp5r0GOqUBGXxoLwqYEGUvdBoHzxIdFm23uEEFxAuswRCvN6MQPZm%2Bapnplsw2gxzBHmnmoDjCqmnRDJBNfLK8jL6gWjz5fJk8MXCs%2BhH%2BzZspdA1lQMPDUST1y4a%2BfjnkfqfwjXATRbR1behYZOh%2FVHnQwuOHZ3VJFKnvLXJ%2BhEMRW1S8OWrGqSmqHGOibEBKc1XTbzw2JElmgFEB4df5tXsJ1ZsaUs0ImWuk&X-Amz-Signature=54908fc818466ee7853f3e5aade2f940bde2fae18139faefd8523b9268d520f6&X-Amz-SignedHeaders=host&x-id=GetObject)
