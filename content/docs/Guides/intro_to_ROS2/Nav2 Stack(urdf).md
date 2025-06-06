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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2JNL5OH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC%2FlkXrN4fiwzwSU5zy3OLnzUxgbFhjSdyQ0mTmOwHceQIgSTHntdeBZ%2FvOunF0J89CR8L%2B6F10QVk7Kk%2F1wNaJoCUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNlwQ2kV93ZoYHxFYSrcAy4XjfamFzCmgFMZLVu2ikWsXSQwPvxxSGwG7OVx%2F9oxGmDupZ%2BSOhfkw3CuMT3vdEuykHKiqvJIZPUwbYmrZZ69LWLG5oPMFOLNJzjzEtShFKH1y8NR0%2BHZ2libsiBoW5a40Ljioe52xnqZAcxf5bd%2FrxYf3tF5mDkS9VdYAEl5oXq2Wuu05UQKh%2Fe4clNdUoK3Naur1ynOWaG481HG26d4g62iz3IngXqfXtfrfsg3PKcbokUmk6OVXozaKSZkWS4CE7O%2BWVsHCUQM2U%2FvLW%2FliF%2B0LefOyh30z2O%2BmCyuRwrqaC0Z%2B36AhiBYeaxU4M9w5gYJxt21JM4Vtc4EbmGZqgIqL47hyla%2BJfYyuFsfs5rKjFISRujMCsEIePolJhGj6qhbdUxxtxl9TbD4ii70MiV15W1vwbYeyv%2FbRzxBlu5qLjUg0xaPCxoCX1fSYEdSbdHI2oxaKzEYapnoZtQ7pxtfEyElkZlB9%2FRTDyyLj4%2F%2BZ1H5O3r7%2BhriGzLYYWXNaFuQuyKKINzHUHuTeeKUBZXz13Wb5QWnvmyv5PGOIET%2B7mnyigIcXcIv4tYnR5tix6uWwWs36VJXWJxo5ghnEMpb7UVLHhVFCsb%2BUo9qx8LTiankdGOr8gzTMJS1icIGOqUBcP%2Fh%2Bet7rQtBwH6kJHsxTMq7e2VrdgrT8fc5VHbCKRsgtz3fAazxunNyR%2B1fb%2FRgtUIBdMqOTNhIF35HlieWX7NFNhJp781n%2F8phbr8VPqkd0dWC6kAwES1fEpbP2hAxaKUCnULIhsCoeWtBAd3%2B2e8Pcsp%2BqbcKEDq2MZ1xj5ltGJGCZ5pZlQ6YMvHhDTPukNUetFzuX%2B2IhdOY%2B1b9%2B5%2BGf%2FJr&X-Amz-Signature=830ec6b40c4ca7b2cd5afeb83233b9622d2241464d8481ccc4e9aad8b2f6fbfb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2JNL5OH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC%2FlkXrN4fiwzwSU5zy3OLnzUxgbFhjSdyQ0mTmOwHceQIgSTHntdeBZ%2FvOunF0J89CR8L%2B6F10QVk7Kk%2F1wNaJoCUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNlwQ2kV93ZoYHxFYSrcAy4XjfamFzCmgFMZLVu2ikWsXSQwPvxxSGwG7OVx%2F9oxGmDupZ%2BSOhfkw3CuMT3vdEuykHKiqvJIZPUwbYmrZZ69LWLG5oPMFOLNJzjzEtShFKH1y8NR0%2BHZ2libsiBoW5a40Ljioe52xnqZAcxf5bd%2FrxYf3tF5mDkS9VdYAEl5oXq2Wuu05UQKh%2Fe4clNdUoK3Naur1ynOWaG481HG26d4g62iz3IngXqfXtfrfsg3PKcbokUmk6OVXozaKSZkWS4CE7O%2BWVsHCUQM2U%2FvLW%2FliF%2B0LefOyh30z2O%2BmCyuRwrqaC0Z%2B36AhiBYeaxU4M9w5gYJxt21JM4Vtc4EbmGZqgIqL47hyla%2BJfYyuFsfs5rKjFISRujMCsEIePolJhGj6qhbdUxxtxl9TbD4ii70MiV15W1vwbYeyv%2FbRzxBlu5qLjUg0xaPCxoCX1fSYEdSbdHI2oxaKzEYapnoZtQ7pxtfEyElkZlB9%2FRTDyyLj4%2F%2BZ1H5O3r7%2BhriGzLYYWXNaFuQuyKKINzHUHuTeeKUBZXz13Wb5QWnvmyv5PGOIET%2B7mnyigIcXcIv4tYnR5tix6uWwWs36VJXWJxo5ghnEMpb7UVLHhVFCsb%2BUo9qx8LTiankdGOr8gzTMJS1icIGOqUBcP%2Fh%2Bet7rQtBwH6kJHsxTMq7e2VrdgrT8fc5VHbCKRsgtz3fAazxunNyR%2B1fb%2FRgtUIBdMqOTNhIF35HlieWX7NFNhJp781n%2F8phbr8VPqkd0dWC6kAwES1fEpbP2hAxaKUCnULIhsCoeWtBAd3%2B2e8Pcsp%2BqbcKEDq2MZ1xj5ltGJGCZ5pZlQ6YMvHhDTPukNUetFzuX%2B2IhdOY%2B1b9%2B5%2BGf%2FJr&X-Amz-Signature=32d39da33ec501d8f90b7c339c1cfbd66aa8b9910e60e2b21802bac42ffc91ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2JNL5OH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC%2FlkXrN4fiwzwSU5zy3OLnzUxgbFhjSdyQ0mTmOwHceQIgSTHntdeBZ%2FvOunF0J89CR8L%2B6F10QVk7Kk%2F1wNaJoCUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNlwQ2kV93ZoYHxFYSrcAy4XjfamFzCmgFMZLVu2ikWsXSQwPvxxSGwG7OVx%2F9oxGmDupZ%2BSOhfkw3CuMT3vdEuykHKiqvJIZPUwbYmrZZ69LWLG5oPMFOLNJzjzEtShFKH1y8NR0%2BHZ2libsiBoW5a40Ljioe52xnqZAcxf5bd%2FrxYf3tF5mDkS9VdYAEl5oXq2Wuu05UQKh%2Fe4clNdUoK3Naur1ynOWaG481HG26d4g62iz3IngXqfXtfrfsg3PKcbokUmk6OVXozaKSZkWS4CE7O%2BWVsHCUQM2U%2FvLW%2FliF%2B0LefOyh30z2O%2BmCyuRwrqaC0Z%2B36AhiBYeaxU4M9w5gYJxt21JM4Vtc4EbmGZqgIqL47hyla%2BJfYyuFsfs5rKjFISRujMCsEIePolJhGj6qhbdUxxtxl9TbD4ii70MiV15W1vwbYeyv%2FbRzxBlu5qLjUg0xaPCxoCX1fSYEdSbdHI2oxaKzEYapnoZtQ7pxtfEyElkZlB9%2FRTDyyLj4%2F%2BZ1H5O3r7%2BhriGzLYYWXNaFuQuyKKINzHUHuTeeKUBZXz13Wb5QWnvmyv5PGOIET%2B7mnyigIcXcIv4tYnR5tix6uWwWs36VJXWJxo5ghnEMpb7UVLHhVFCsb%2BUo9qx8LTiankdGOr8gzTMJS1icIGOqUBcP%2Fh%2Bet7rQtBwH6kJHsxTMq7e2VrdgrT8fc5VHbCKRsgtz3fAazxunNyR%2B1fb%2FRgtUIBdMqOTNhIF35HlieWX7NFNhJp781n%2F8phbr8VPqkd0dWC6kAwES1fEpbP2hAxaKUCnULIhsCoeWtBAd3%2B2e8Pcsp%2BqbcKEDq2MZ1xj5ltGJGCZ5pZlQ6YMvHhDTPukNUetFzuX%2B2IhdOY%2B1b9%2B5%2BGf%2FJr&X-Amz-Signature=d459eedc6c02440b8c149e81e1328052db0d50377e95b3aec1baa599793cd6dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2JNL5OH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC%2FlkXrN4fiwzwSU5zy3OLnzUxgbFhjSdyQ0mTmOwHceQIgSTHntdeBZ%2FvOunF0J89CR8L%2B6F10QVk7Kk%2F1wNaJoCUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNlwQ2kV93ZoYHxFYSrcAy4XjfamFzCmgFMZLVu2ikWsXSQwPvxxSGwG7OVx%2F9oxGmDupZ%2BSOhfkw3CuMT3vdEuykHKiqvJIZPUwbYmrZZ69LWLG5oPMFOLNJzjzEtShFKH1y8NR0%2BHZ2libsiBoW5a40Ljioe52xnqZAcxf5bd%2FrxYf3tF5mDkS9VdYAEl5oXq2Wuu05UQKh%2Fe4clNdUoK3Naur1ynOWaG481HG26d4g62iz3IngXqfXtfrfsg3PKcbokUmk6OVXozaKSZkWS4CE7O%2BWVsHCUQM2U%2FvLW%2FliF%2B0LefOyh30z2O%2BmCyuRwrqaC0Z%2B36AhiBYeaxU4M9w5gYJxt21JM4Vtc4EbmGZqgIqL47hyla%2BJfYyuFsfs5rKjFISRujMCsEIePolJhGj6qhbdUxxtxl9TbD4ii70MiV15W1vwbYeyv%2FbRzxBlu5qLjUg0xaPCxoCX1fSYEdSbdHI2oxaKzEYapnoZtQ7pxtfEyElkZlB9%2FRTDyyLj4%2F%2BZ1H5O3r7%2BhriGzLYYWXNaFuQuyKKINzHUHuTeeKUBZXz13Wb5QWnvmyv5PGOIET%2B7mnyigIcXcIv4tYnR5tix6uWwWs36VJXWJxo5ghnEMpb7UVLHhVFCsb%2BUo9qx8LTiankdGOr8gzTMJS1icIGOqUBcP%2Fh%2Bet7rQtBwH6kJHsxTMq7e2VrdgrT8fc5VHbCKRsgtz3fAazxunNyR%2B1fb%2FRgtUIBdMqOTNhIF35HlieWX7NFNhJp781n%2F8phbr8VPqkd0dWC6kAwES1fEpbP2hAxaKUCnULIhsCoeWtBAd3%2B2e8Pcsp%2BqbcKEDq2MZ1xj5ltGJGCZ5pZlQ6YMvHhDTPukNUetFzuX%2B2IhdOY%2B1b9%2B5%2BGf%2FJr&X-Amz-Signature=bbba01d768693e66c89224b9e30f728e4efba0913036a4cd4dc85362725c10b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2JNL5OH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC%2FlkXrN4fiwzwSU5zy3OLnzUxgbFhjSdyQ0mTmOwHceQIgSTHntdeBZ%2FvOunF0J89CR8L%2B6F10QVk7Kk%2F1wNaJoCUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNlwQ2kV93ZoYHxFYSrcAy4XjfamFzCmgFMZLVu2ikWsXSQwPvxxSGwG7OVx%2F9oxGmDupZ%2BSOhfkw3CuMT3vdEuykHKiqvJIZPUwbYmrZZ69LWLG5oPMFOLNJzjzEtShFKH1y8NR0%2BHZ2libsiBoW5a40Ljioe52xnqZAcxf5bd%2FrxYf3tF5mDkS9VdYAEl5oXq2Wuu05UQKh%2Fe4clNdUoK3Naur1ynOWaG481HG26d4g62iz3IngXqfXtfrfsg3PKcbokUmk6OVXozaKSZkWS4CE7O%2BWVsHCUQM2U%2FvLW%2FliF%2B0LefOyh30z2O%2BmCyuRwrqaC0Z%2B36AhiBYeaxU4M9w5gYJxt21JM4Vtc4EbmGZqgIqL47hyla%2BJfYyuFsfs5rKjFISRujMCsEIePolJhGj6qhbdUxxtxl9TbD4ii70MiV15W1vwbYeyv%2FbRzxBlu5qLjUg0xaPCxoCX1fSYEdSbdHI2oxaKzEYapnoZtQ7pxtfEyElkZlB9%2FRTDyyLj4%2F%2BZ1H5O3r7%2BhriGzLYYWXNaFuQuyKKINzHUHuTeeKUBZXz13Wb5QWnvmyv5PGOIET%2B7mnyigIcXcIv4tYnR5tix6uWwWs36VJXWJxo5ghnEMpb7UVLHhVFCsb%2BUo9qx8LTiankdGOr8gzTMJS1icIGOqUBcP%2Fh%2Bet7rQtBwH6kJHsxTMq7e2VrdgrT8fc5VHbCKRsgtz3fAazxunNyR%2B1fb%2FRgtUIBdMqOTNhIF35HlieWX7NFNhJp781n%2F8phbr8VPqkd0dWC6kAwES1fEpbP2hAxaKUCnULIhsCoeWtBAd3%2B2e8Pcsp%2BqbcKEDq2MZ1xj5ltGJGCZ5pZlQ6YMvHhDTPukNUetFzuX%2B2IhdOY%2B1b9%2B5%2BGf%2FJr&X-Amz-Signature=ecdd98fcf85729980e59694190180177c33735110a9743abfee491f30126df9e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2JNL5OH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC%2FlkXrN4fiwzwSU5zy3OLnzUxgbFhjSdyQ0mTmOwHceQIgSTHntdeBZ%2FvOunF0J89CR8L%2B6F10QVk7Kk%2F1wNaJoCUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNlwQ2kV93ZoYHxFYSrcAy4XjfamFzCmgFMZLVu2ikWsXSQwPvxxSGwG7OVx%2F9oxGmDupZ%2BSOhfkw3CuMT3vdEuykHKiqvJIZPUwbYmrZZ69LWLG5oPMFOLNJzjzEtShFKH1y8NR0%2BHZ2libsiBoW5a40Ljioe52xnqZAcxf5bd%2FrxYf3tF5mDkS9VdYAEl5oXq2Wuu05UQKh%2Fe4clNdUoK3Naur1ynOWaG481HG26d4g62iz3IngXqfXtfrfsg3PKcbokUmk6OVXozaKSZkWS4CE7O%2BWVsHCUQM2U%2FvLW%2FliF%2B0LefOyh30z2O%2BmCyuRwrqaC0Z%2B36AhiBYeaxU4M9w5gYJxt21JM4Vtc4EbmGZqgIqL47hyla%2BJfYyuFsfs5rKjFISRujMCsEIePolJhGj6qhbdUxxtxl9TbD4ii70MiV15W1vwbYeyv%2FbRzxBlu5qLjUg0xaPCxoCX1fSYEdSbdHI2oxaKzEYapnoZtQ7pxtfEyElkZlB9%2FRTDyyLj4%2F%2BZ1H5O3r7%2BhriGzLYYWXNaFuQuyKKINzHUHuTeeKUBZXz13Wb5QWnvmyv5PGOIET%2B7mnyigIcXcIv4tYnR5tix6uWwWs36VJXWJxo5ghnEMpb7UVLHhVFCsb%2BUo9qx8LTiankdGOr8gzTMJS1icIGOqUBcP%2Fh%2Bet7rQtBwH6kJHsxTMq7e2VrdgrT8fc5VHbCKRsgtz3fAazxunNyR%2B1fb%2FRgtUIBdMqOTNhIF35HlieWX7NFNhJp781n%2F8phbr8VPqkd0dWC6kAwES1fEpbP2hAxaKUCnULIhsCoeWtBAd3%2B2e8Pcsp%2BqbcKEDq2MZ1xj5ltGJGCZ5pZlQ6YMvHhDTPukNUetFzuX%2B2IhdOY%2B1b9%2B5%2BGf%2FJr&X-Amz-Signature=4131c40a709d43867db37edf3c3c02f8082cda374b489cef2b1ec31ecfce83ed&X-Amz-SignedHeaders=host&x-id=GetObject)
