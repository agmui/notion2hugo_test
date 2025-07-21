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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GV4DELP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZ%2BzO0qf8CCOUa3vIfnxN5GGtDa75eU%2BYsMhlzEGcM3AiBw3xbZ7LX7iihPV1%2B%2FkTNiSH3rNAHFQkWGtmYeBC5hTyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD63Ge2RYcW%2BzyaAaKtwD2t9Wgz1DsuHEGmpdSDO27faHtx1zjG6MAthIoli2KjKMrY%2BGwSs1H%2FZHdy%2BRYZUfkiiSy857EzTvQ55LtoWBN%2FQc%2FipNWtR88U4JLmb%2B4SWMcdPKEzo2r6azOpazDA5la4lvFR%2FsCYgky2K1dBeCtICytBLaXR1rQmaV8TVEJ%2F90pjA3iWfaMQOBhqfpJ5q6FtV351mwFBT5ZD4Ox3s1EuMqelQ3bQpJUUWZp5zI7StaK2hSixtVJdyXzvWA4Cod37XyLHhlt36aouIxLB0cBetUXFtDli0rcdAViIjQv4vTuUQv0da1K3zxDhEvrKsWnyjQ0Dm1XUCMLHb5FOnxFRxu7MhWY1mdLLmfHwgrBRAymh5ICHeEAq58bm9VBxFy0bJUeV813HsWit7UW7tKn%2BZfrIeMaQ4A1M4T%2Fbj3qOUo3EysJxt3%2BcFE9rohT0tADUi%2BY07k79DPpLIw7HV9QVYgcReXV42GD7z3L%2B8GkDJFTe0mCKZpIjsyhPKAufE08qUuWou5o8xZD2X8cSlNVRRH%2FoJqaj59anWVgWeaRn7FO%2BmIwK23ZbUS3gAzckOwKGCal%2F3HnHYFqhq%2BF0KLdk2KvtHAchnrasj86gNXABnsLuB0cq9150%2BcDGMwtZP3wwY6pgFJSdvwxDtlzbwHvz2vgrd0U22c7TXEN8KyLbJ1kt5UqFvlACSnQ2ISnslXf9bAlAa4tg58jjCL3LVdAC1xTBNEdd2WhBL8TkCdGc0ohgAtz2hP7J1qa1Y11%2FQ2LcH8zhDiholMK6FxfXhlXyhdifxQeDLOQJrMDtCQzAxqrHm9oScVHasojgPNbbiGF4f1r0WFsvoBb44jAsDw59igfYgfhZctgUxb&X-Amz-Signature=37d39c46324104f3f4b2a7f6ba70ed5a68fb3c571a000c1a4aa4b2478bb5896a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GV4DELP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZ%2BzO0qf8CCOUa3vIfnxN5GGtDa75eU%2BYsMhlzEGcM3AiBw3xbZ7LX7iihPV1%2B%2FkTNiSH3rNAHFQkWGtmYeBC5hTyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD63Ge2RYcW%2BzyaAaKtwD2t9Wgz1DsuHEGmpdSDO27faHtx1zjG6MAthIoli2KjKMrY%2BGwSs1H%2FZHdy%2BRYZUfkiiSy857EzTvQ55LtoWBN%2FQc%2FipNWtR88U4JLmb%2B4SWMcdPKEzo2r6azOpazDA5la4lvFR%2FsCYgky2K1dBeCtICytBLaXR1rQmaV8TVEJ%2F90pjA3iWfaMQOBhqfpJ5q6FtV351mwFBT5ZD4Ox3s1EuMqelQ3bQpJUUWZp5zI7StaK2hSixtVJdyXzvWA4Cod37XyLHhlt36aouIxLB0cBetUXFtDli0rcdAViIjQv4vTuUQv0da1K3zxDhEvrKsWnyjQ0Dm1XUCMLHb5FOnxFRxu7MhWY1mdLLmfHwgrBRAymh5ICHeEAq58bm9VBxFy0bJUeV813HsWit7UW7tKn%2BZfrIeMaQ4A1M4T%2Fbj3qOUo3EysJxt3%2BcFE9rohT0tADUi%2BY07k79DPpLIw7HV9QVYgcReXV42GD7z3L%2B8GkDJFTe0mCKZpIjsyhPKAufE08qUuWou5o8xZD2X8cSlNVRRH%2FoJqaj59anWVgWeaRn7FO%2BmIwK23ZbUS3gAzckOwKGCal%2F3HnHYFqhq%2BF0KLdk2KvtHAchnrasj86gNXABnsLuB0cq9150%2BcDGMwtZP3wwY6pgFJSdvwxDtlzbwHvz2vgrd0U22c7TXEN8KyLbJ1kt5UqFvlACSnQ2ISnslXf9bAlAa4tg58jjCL3LVdAC1xTBNEdd2WhBL8TkCdGc0ohgAtz2hP7J1qa1Y11%2FQ2LcH8zhDiholMK6FxfXhlXyhdifxQeDLOQJrMDtCQzAxqrHm9oScVHasojgPNbbiGF4f1r0WFsvoBb44jAsDw59igfYgfhZctgUxb&X-Amz-Signature=3983f9474b0c0042a70fac48e444b0308e90c53f9ccf5c61578980c665c9e424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GV4DELP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZ%2BzO0qf8CCOUa3vIfnxN5GGtDa75eU%2BYsMhlzEGcM3AiBw3xbZ7LX7iihPV1%2B%2FkTNiSH3rNAHFQkWGtmYeBC5hTyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD63Ge2RYcW%2BzyaAaKtwD2t9Wgz1DsuHEGmpdSDO27faHtx1zjG6MAthIoli2KjKMrY%2BGwSs1H%2FZHdy%2BRYZUfkiiSy857EzTvQ55LtoWBN%2FQc%2FipNWtR88U4JLmb%2B4SWMcdPKEzo2r6azOpazDA5la4lvFR%2FsCYgky2K1dBeCtICytBLaXR1rQmaV8TVEJ%2F90pjA3iWfaMQOBhqfpJ5q6FtV351mwFBT5ZD4Ox3s1EuMqelQ3bQpJUUWZp5zI7StaK2hSixtVJdyXzvWA4Cod37XyLHhlt36aouIxLB0cBetUXFtDli0rcdAViIjQv4vTuUQv0da1K3zxDhEvrKsWnyjQ0Dm1XUCMLHb5FOnxFRxu7MhWY1mdLLmfHwgrBRAymh5ICHeEAq58bm9VBxFy0bJUeV813HsWit7UW7tKn%2BZfrIeMaQ4A1M4T%2Fbj3qOUo3EysJxt3%2BcFE9rohT0tADUi%2BY07k79DPpLIw7HV9QVYgcReXV42GD7z3L%2B8GkDJFTe0mCKZpIjsyhPKAufE08qUuWou5o8xZD2X8cSlNVRRH%2FoJqaj59anWVgWeaRn7FO%2BmIwK23ZbUS3gAzckOwKGCal%2F3HnHYFqhq%2BF0KLdk2KvtHAchnrasj86gNXABnsLuB0cq9150%2BcDGMwtZP3wwY6pgFJSdvwxDtlzbwHvz2vgrd0U22c7TXEN8KyLbJ1kt5UqFvlACSnQ2ISnslXf9bAlAa4tg58jjCL3LVdAC1xTBNEdd2WhBL8TkCdGc0ohgAtz2hP7J1qa1Y11%2FQ2LcH8zhDiholMK6FxfXhlXyhdifxQeDLOQJrMDtCQzAxqrHm9oScVHasojgPNbbiGF4f1r0WFsvoBb44jAsDw59igfYgfhZctgUxb&X-Amz-Signature=0879d291b89866f556d43d5fb21e10f083b5d23380ac18ed11a468b600e123e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GV4DELP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZ%2BzO0qf8CCOUa3vIfnxN5GGtDa75eU%2BYsMhlzEGcM3AiBw3xbZ7LX7iihPV1%2B%2FkTNiSH3rNAHFQkWGtmYeBC5hTyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD63Ge2RYcW%2BzyaAaKtwD2t9Wgz1DsuHEGmpdSDO27faHtx1zjG6MAthIoli2KjKMrY%2BGwSs1H%2FZHdy%2BRYZUfkiiSy857EzTvQ55LtoWBN%2FQc%2FipNWtR88U4JLmb%2B4SWMcdPKEzo2r6azOpazDA5la4lvFR%2FsCYgky2K1dBeCtICytBLaXR1rQmaV8TVEJ%2F90pjA3iWfaMQOBhqfpJ5q6FtV351mwFBT5ZD4Ox3s1EuMqelQ3bQpJUUWZp5zI7StaK2hSixtVJdyXzvWA4Cod37XyLHhlt36aouIxLB0cBetUXFtDli0rcdAViIjQv4vTuUQv0da1K3zxDhEvrKsWnyjQ0Dm1XUCMLHb5FOnxFRxu7MhWY1mdLLmfHwgrBRAymh5ICHeEAq58bm9VBxFy0bJUeV813HsWit7UW7tKn%2BZfrIeMaQ4A1M4T%2Fbj3qOUo3EysJxt3%2BcFE9rohT0tADUi%2BY07k79DPpLIw7HV9QVYgcReXV42GD7z3L%2B8GkDJFTe0mCKZpIjsyhPKAufE08qUuWou5o8xZD2X8cSlNVRRH%2FoJqaj59anWVgWeaRn7FO%2BmIwK23ZbUS3gAzckOwKGCal%2F3HnHYFqhq%2BF0KLdk2KvtHAchnrasj86gNXABnsLuB0cq9150%2BcDGMwtZP3wwY6pgFJSdvwxDtlzbwHvz2vgrd0U22c7TXEN8KyLbJ1kt5UqFvlACSnQ2ISnslXf9bAlAa4tg58jjCL3LVdAC1xTBNEdd2WhBL8TkCdGc0ohgAtz2hP7J1qa1Y11%2FQ2LcH8zhDiholMK6FxfXhlXyhdifxQeDLOQJrMDtCQzAxqrHm9oScVHasojgPNbbiGF4f1r0WFsvoBb44jAsDw59igfYgfhZctgUxb&X-Amz-Signature=3e51c64ae830dfa66e8b5784d5e83c991e1ebf85c188c691f623550e484f208d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GV4DELP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZ%2BzO0qf8CCOUa3vIfnxN5GGtDa75eU%2BYsMhlzEGcM3AiBw3xbZ7LX7iihPV1%2B%2FkTNiSH3rNAHFQkWGtmYeBC5hTyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD63Ge2RYcW%2BzyaAaKtwD2t9Wgz1DsuHEGmpdSDO27faHtx1zjG6MAthIoli2KjKMrY%2BGwSs1H%2FZHdy%2BRYZUfkiiSy857EzTvQ55LtoWBN%2FQc%2FipNWtR88U4JLmb%2B4SWMcdPKEzo2r6azOpazDA5la4lvFR%2FsCYgky2K1dBeCtICytBLaXR1rQmaV8TVEJ%2F90pjA3iWfaMQOBhqfpJ5q6FtV351mwFBT5ZD4Ox3s1EuMqelQ3bQpJUUWZp5zI7StaK2hSixtVJdyXzvWA4Cod37XyLHhlt36aouIxLB0cBetUXFtDli0rcdAViIjQv4vTuUQv0da1K3zxDhEvrKsWnyjQ0Dm1XUCMLHb5FOnxFRxu7MhWY1mdLLmfHwgrBRAymh5ICHeEAq58bm9VBxFy0bJUeV813HsWit7UW7tKn%2BZfrIeMaQ4A1M4T%2Fbj3qOUo3EysJxt3%2BcFE9rohT0tADUi%2BY07k79DPpLIw7HV9QVYgcReXV42GD7z3L%2B8GkDJFTe0mCKZpIjsyhPKAufE08qUuWou5o8xZD2X8cSlNVRRH%2FoJqaj59anWVgWeaRn7FO%2BmIwK23ZbUS3gAzckOwKGCal%2F3HnHYFqhq%2BF0KLdk2KvtHAchnrasj86gNXABnsLuB0cq9150%2BcDGMwtZP3wwY6pgFJSdvwxDtlzbwHvz2vgrd0U22c7TXEN8KyLbJ1kt5UqFvlACSnQ2ISnslXf9bAlAa4tg58jjCL3LVdAC1xTBNEdd2WhBL8TkCdGc0ohgAtz2hP7J1qa1Y11%2FQ2LcH8zhDiholMK6FxfXhlXyhdifxQeDLOQJrMDtCQzAxqrHm9oScVHasojgPNbbiGF4f1r0WFsvoBb44jAsDw59igfYgfhZctgUxb&X-Amz-Signature=4cf392150d3857230305235bf88ce21fbbd0c33bf163f5a4db7d570d0a96d545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GV4DELP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZ%2BzO0qf8CCOUa3vIfnxN5GGtDa75eU%2BYsMhlzEGcM3AiBw3xbZ7LX7iihPV1%2B%2FkTNiSH3rNAHFQkWGtmYeBC5hTyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD63Ge2RYcW%2BzyaAaKtwD2t9Wgz1DsuHEGmpdSDO27faHtx1zjG6MAthIoli2KjKMrY%2BGwSs1H%2FZHdy%2BRYZUfkiiSy857EzTvQ55LtoWBN%2FQc%2FipNWtR88U4JLmb%2B4SWMcdPKEzo2r6azOpazDA5la4lvFR%2FsCYgky2K1dBeCtICytBLaXR1rQmaV8TVEJ%2F90pjA3iWfaMQOBhqfpJ5q6FtV351mwFBT5ZD4Ox3s1EuMqelQ3bQpJUUWZp5zI7StaK2hSixtVJdyXzvWA4Cod37XyLHhlt36aouIxLB0cBetUXFtDli0rcdAViIjQv4vTuUQv0da1K3zxDhEvrKsWnyjQ0Dm1XUCMLHb5FOnxFRxu7MhWY1mdLLmfHwgrBRAymh5ICHeEAq58bm9VBxFy0bJUeV813HsWit7UW7tKn%2BZfrIeMaQ4A1M4T%2Fbj3qOUo3EysJxt3%2BcFE9rohT0tADUi%2BY07k79DPpLIw7HV9QVYgcReXV42GD7z3L%2B8GkDJFTe0mCKZpIjsyhPKAufE08qUuWou5o8xZD2X8cSlNVRRH%2FoJqaj59anWVgWeaRn7FO%2BmIwK23ZbUS3gAzckOwKGCal%2F3HnHYFqhq%2BF0KLdk2KvtHAchnrasj86gNXABnsLuB0cq9150%2BcDGMwtZP3wwY6pgFJSdvwxDtlzbwHvz2vgrd0U22c7TXEN8KyLbJ1kt5UqFvlACSnQ2ISnslXf9bAlAa4tg58jjCL3LVdAC1xTBNEdd2WhBL8TkCdGc0ohgAtz2hP7J1qa1Y11%2FQ2LcH8zhDiholMK6FxfXhlXyhdifxQeDLOQJrMDtCQzAxqrHm9oScVHasojgPNbbiGF4f1r0WFsvoBb44jAsDw59igfYgfhZctgUxb&X-Amz-Signature=c901416b81999c6d6855040ac285f4b4fd564d79100feaf39319e1ba9dd57a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
