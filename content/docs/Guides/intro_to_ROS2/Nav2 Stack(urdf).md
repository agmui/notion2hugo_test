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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643B2ABA2%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJzTcL3UbMVK%2FkCNg6iPY2Un%2BIuSFdQK1GgMOBut7UkQIhANvAD5NjW32zvVzHelO3okt%2FK%2BAI6ptYgfBpCYV39uKKKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVkvFnMb2nQVQ6LwUq3APxe%2FVRul4DeC6szcwgAufq0ZWr7ZVs1vlrhj8jvlKLZYuiUFk37I0cFRpD3gGhHtHxSEowNgWkXm25VEYtg2eOKNc79yD75iIn1VDsg6%2FC837p6bCiMY0EtwfbO9lMuyzBIDpAjpZfE2fP54kC%2FyDYG0qxMadh1qmOCfJUaC7%2BPDh%2B3iKFYUzpBAxi68gEcKVWAw7w3mYr2NFZedHCTTQpYBQ7p1X%2FSrgkAeGlcZyUkXgkDmp%2F7xbNj%2FuB6UGtl5s5X3vhk2a2p5QEbamuBOM7VZxPl%2F7KuqP0n9ze13%2BeQBUnf2Jo688XazlJTIULSknXAJ7BNlWrLbiE%2BxvhdYuXABCHv%2FCN0816p4KK1JYUGi82tu4IgbLCLFr5IxOP%2FW1WH0rPF98BAObiKtxV3tw%2FDRqlwooF%2F88ZZ05UnblCGGVwx6O1RQRzODHO%2F50oVRQcden0FWj5EibxmedHzazEulj3x%2BN3uH67%2Fm%2FDb98XpmQkONuLtIbais5GM0aY0GsM4IbGpkwxXU%2BQErs9eUQGh0yTw6puwgfUrgxxD5jGruxKSlvdFEnpdrhWmMbttKjCy2a5%2FHga58z3QfPyd8A6zjBQyqfZqpGOvAKCHfLH7eLF30cqWUKVesHdcTDC%2Bb%2FDBjqkATYSCpJYAhecDe15QxxTyLLXnrwO5Tq6%2FD1Oup8OCFpA6YtyLejHXjNZUxWY%2BuYthqXkUMNlhQVncKi7YEfGCXmPxQoJdeNDew9swBi3ki6k6BJRAU9viZ5Maow2Px8OvbANGSJvaF6uchdrFoKIOE1vsOAOpwINP3dOgeerlbBiLOxca1jmhkut%2F5TUJGUmXqjgeTadMYAeWm2TR%2FV3HKRCedUs&X-Amz-Signature=63e8a925c4d3988156d91f7633c995e1114fb856d32b5c6f727c5d7e231e5285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643B2ABA2%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJzTcL3UbMVK%2FkCNg6iPY2Un%2BIuSFdQK1GgMOBut7UkQIhANvAD5NjW32zvVzHelO3okt%2FK%2BAI6ptYgfBpCYV39uKKKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVkvFnMb2nQVQ6LwUq3APxe%2FVRul4DeC6szcwgAufq0ZWr7ZVs1vlrhj8jvlKLZYuiUFk37I0cFRpD3gGhHtHxSEowNgWkXm25VEYtg2eOKNc79yD75iIn1VDsg6%2FC837p6bCiMY0EtwfbO9lMuyzBIDpAjpZfE2fP54kC%2FyDYG0qxMadh1qmOCfJUaC7%2BPDh%2B3iKFYUzpBAxi68gEcKVWAw7w3mYr2NFZedHCTTQpYBQ7p1X%2FSrgkAeGlcZyUkXgkDmp%2F7xbNj%2FuB6UGtl5s5X3vhk2a2p5QEbamuBOM7VZxPl%2F7KuqP0n9ze13%2BeQBUnf2Jo688XazlJTIULSknXAJ7BNlWrLbiE%2BxvhdYuXABCHv%2FCN0816p4KK1JYUGi82tu4IgbLCLFr5IxOP%2FW1WH0rPF98BAObiKtxV3tw%2FDRqlwooF%2F88ZZ05UnblCGGVwx6O1RQRzODHO%2F50oVRQcden0FWj5EibxmedHzazEulj3x%2BN3uH67%2Fm%2FDb98XpmQkONuLtIbais5GM0aY0GsM4IbGpkwxXU%2BQErs9eUQGh0yTw6puwgfUrgxxD5jGruxKSlvdFEnpdrhWmMbttKjCy2a5%2FHga58z3QfPyd8A6zjBQyqfZqpGOvAKCHfLH7eLF30cqWUKVesHdcTDC%2Bb%2FDBjqkATYSCpJYAhecDe15QxxTyLLXnrwO5Tq6%2FD1Oup8OCFpA6YtyLejHXjNZUxWY%2BuYthqXkUMNlhQVncKi7YEfGCXmPxQoJdeNDew9swBi3ki6k6BJRAU9viZ5Maow2Px8OvbANGSJvaF6uchdrFoKIOE1vsOAOpwINP3dOgeerlbBiLOxca1jmhkut%2F5TUJGUmXqjgeTadMYAeWm2TR%2FV3HKRCedUs&X-Amz-Signature=9cef73dbaf874e5a2ca0c115d9e168b3d76eaa4949276ce970ebda5c78e5932c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643B2ABA2%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJzTcL3UbMVK%2FkCNg6iPY2Un%2BIuSFdQK1GgMOBut7UkQIhANvAD5NjW32zvVzHelO3okt%2FK%2BAI6ptYgfBpCYV39uKKKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVkvFnMb2nQVQ6LwUq3APxe%2FVRul4DeC6szcwgAufq0ZWr7ZVs1vlrhj8jvlKLZYuiUFk37I0cFRpD3gGhHtHxSEowNgWkXm25VEYtg2eOKNc79yD75iIn1VDsg6%2FC837p6bCiMY0EtwfbO9lMuyzBIDpAjpZfE2fP54kC%2FyDYG0qxMadh1qmOCfJUaC7%2BPDh%2B3iKFYUzpBAxi68gEcKVWAw7w3mYr2NFZedHCTTQpYBQ7p1X%2FSrgkAeGlcZyUkXgkDmp%2F7xbNj%2FuB6UGtl5s5X3vhk2a2p5QEbamuBOM7VZxPl%2F7KuqP0n9ze13%2BeQBUnf2Jo688XazlJTIULSknXAJ7BNlWrLbiE%2BxvhdYuXABCHv%2FCN0816p4KK1JYUGi82tu4IgbLCLFr5IxOP%2FW1WH0rPF98BAObiKtxV3tw%2FDRqlwooF%2F88ZZ05UnblCGGVwx6O1RQRzODHO%2F50oVRQcden0FWj5EibxmedHzazEulj3x%2BN3uH67%2Fm%2FDb98XpmQkONuLtIbais5GM0aY0GsM4IbGpkwxXU%2BQErs9eUQGh0yTw6puwgfUrgxxD5jGruxKSlvdFEnpdrhWmMbttKjCy2a5%2FHga58z3QfPyd8A6zjBQyqfZqpGOvAKCHfLH7eLF30cqWUKVesHdcTDC%2Bb%2FDBjqkATYSCpJYAhecDe15QxxTyLLXnrwO5Tq6%2FD1Oup8OCFpA6YtyLejHXjNZUxWY%2BuYthqXkUMNlhQVncKi7YEfGCXmPxQoJdeNDew9swBi3ki6k6BJRAU9viZ5Maow2Px8OvbANGSJvaF6uchdrFoKIOE1vsOAOpwINP3dOgeerlbBiLOxca1jmhkut%2F5TUJGUmXqjgeTadMYAeWm2TR%2FV3HKRCedUs&X-Amz-Signature=c1267776f860fd5c919967bbee19ce8c8b0ac5e813c91f03af349cbce63f90ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643B2ABA2%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJzTcL3UbMVK%2FkCNg6iPY2Un%2BIuSFdQK1GgMOBut7UkQIhANvAD5NjW32zvVzHelO3okt%2FK%2BAI6ptYgfBpCYV39uKKKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVkvFnMb2nQVQ6LwUq3APxe%2FVRul4DeC6szcwgAufq0ZWr7ZVs1vlrhj8jvlKLZYuiUFk37I0cFRpD3gGhHtHxSEowNgWkXm25VEYtg2eOKNc79yD75iIn1VDsg6%2FC837p6bCiMY0EtwfbO9lMuyzBIDpAjpZfE2fP54kC%2FyDYG0qxMadh1qmOCfJUaC7%2BPDh%2B3iKFYUzpBAxi68gEcKVWAw7w3mYr2NFZedHCTTQpYBQ7p1X%2FSrgkAeGlcZyUkXgkDmp%2F7xbNj%2FuB6UGtl5s5X3vhk2a2p5QEbamuBOM7VZxPl%2F7KuqP0n9ze13%2BeQBUnf2Jo688XazlJTIULSknXAJ7BNlWrLbiE%2BxvhdYuXABCHv%2FCN0816p4KK1JYUGi82tu4IgbLCLFr5IxOP%2FW1WH0rPF98BAObiKtxV3tw%2FDRqlwooF%2F88ZZ05UnblCGGVwx6O1RQRzODHO%2F50oVRQcden0FWj5EibxmedHzazEulj3x%2BN3uH67%2Fm%2FDb98XpmQkONuLtIbais5GM0aY0GsM4IbGpkwxXU%2BQErs9eUQGh0yTw6puwgfUrgxxD5jGruxKSlvdFEnpdrhWmMbttKjCy2a5%2FHga58z3QfPyd8A6zjBQyqfZqpGOvAKCHfLH7eLF30cqWUKVesHdcTDC%2Bb%2FDBjqkATYSCpJYAhecDe15QxxTyLLXnrwO5Tq6%2FD1Oup8OCFpA6YtyLejHXjNZUxWY%2BuYthqXkUMNlhQVncKi7YEfGCXmPxQoJdeNDew9swBi3ki6k6BJRAU9viZ5Maow2Px8OvbANGSJvaF6uchdrFoKIOE1vsOAOpwINP3dOgeerlbBiLOxca1jmhkut%2F5TUJGUmXqjgeTadMYAeWm2TR%2FV3HKRCedUs&X-Amz-Signature=10b2f459b76961459601c491a578f15d10d4f56473b566d1cacdca6f9ea6e8e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643B2ABA2%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJzTcL3UbMVK%2FkCNg6iPY2Un%2BIuSFdQK1GgMOBut7UkQIhANvAD5NjW32zvVzHelO3okt%2FK%2BAI6ptYgfBpCYV39uKKKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVkvFnMb2nQVQ6LwUq3APxe%2FVRul4DeC6szcwgAufq0ZWr7ZVs1vlrhj8jvlKLZYuiUFk37I0cFRpD3gGhHtHxSEowNgWkXm25VEYtg2eOKNc79yD75iIn1VDsg6%2FC837p6bCiMY0EtwfbO9lMuyzBIDpAjpZfE2fP54kC%2FyDYG0qxMadh1qmOCfJUaC7%2BPDh%2B3iKFYUzpBAxi68gEcKVWAw7w3mYr2NFZedHCTTQpYBQ7p1X%2FSrgkAeGlcZyUkXgkDmp%2F7xbNj%2FuB6UGtl5s5X3vhk2a2p5QEbamuBOM7VZxPl%2F7KuqP0n9ze13%2BeQBUnf2Jo688XazlJTIULSknXAJ7BNlWrLbiE%2BxvhdYuXABCHv%2FCN0816p4KK1JYUGi82tu4IgbLCLFr5IxOP%2FW1WH0rPF98BAObiKtxV3tw%2FDRqlwooF%2F88ZZ05UnblCGGVwx6O1RQRzODHO%2F50oVRQcden0FWj5EibxmedHzazEulj3x%2BN3uH67%2Fm%2FDb98XpmQkONuLtIbais5GM0aY0GsM4IbGpkwxXU%2BQErs9eUQGh0yTw6puwgfUrgxxD5jGruxKSlvdFEnpdrhWmMbttKjCy2a5%2FHga58z3QfPyd8A6zjBQyqfZqpGOvAKCHfLH7eLF30cqWUKVesHdcTDC%2Bb%2FDBjqkATYSCpJYAhecDe15QxxTyLLXnrwO5Tq6%2FD1Oup8OCFpA6YtyLejHXjNZUxWY%2BuYthqXkUMNlhQVncKi7YEfGCXmPxQoJdeNDew9swBi3ki6k6BJRAU9viZ5Maow2Px8OvbANGSJvaF6uchdrFoKIOE1vsOAOpwINP3dOgeerlbBiLOxca1jmhkut%2F5TUJGUmXqjgeTadMYAeWm2TR%2FV3HKRCedUs&X-Amz-Signature=69956d3d1a56cfe9834d776129012045beed480168bd3d2aae0a211392f37c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643B2ABA2%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJzTcL3UbMVK%2FkCNg6iPY2Un%2BIuSFdQK1GgMOBut7UkQIhANvAD5NjW32zvVzHelO3okt%2FK%2BAI6ptYgfBpCYV39uKKKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVkvFnMb2nQVQ6LwUq3APxe%2FVRul4DeC6szcwgAufq0ZWr7ZVs1vlrhj8jvlKLZYuiUFk37I0cFRpD3gGhHtHxSEowNgWkXm25VEYtg2eOKNc79yD75iIn1VDsg6%2FC837p6bCiMY0EtwfbO9lMuyzBIDpAjpZfE2fP54kC%2FyDYG0qxMadh1qmOCfJUaC7%2BPDh%2B3iKFYUzpBAxi68gEcKVWAw7w3mYr2NFZedHCTTQpYBQ7p1X%2FSrgkAeGlcZyUkXgkDmp%2F7xbNj%2FuB6UGtl5s5X3vhk2a2p5QEbamuBOM7VZxPl%2F7KuqP0n9ze13%2BeQBUnf2Jo688XazlJTIULSknXAJ7BNlWrLbiE%2BxvhdYuXABCHv%2FCN0816p4KK1JYUGi82tu4IgbLCLFr5IxOP%2FW1WH0rPF98BAObiKtxV3tw%2FDRqlwooF%2F88ZZ05UnblCGGVwx6O1RQRzODHO%2F50oVRQcden0FWj5EibxmedHzazEulj3x%2BN3uH67%2Fm%2FDb98XpmQkONuLtIbais5GM0aY0GsM4IbGpkwxXU%2BQErs9eUQGh0yTw6puwgfUrgxxD5jGruxKSlvdFEnpdrhWmMbttKjCy2a5%2FHga58z3QfPyd8A6zjBQyqfZqpGOvAKCHfLH7eLF30cqWUKVesHdcTDC%2Bb%2FDBjqkATYSCpJYAhecDe15QxxTyLLXnrwO5Tq6%2FD1Oup8OCFpA6YtyLejHXjNZUxWY%2BuYthqXkUMNlhQVncKi7YEfGCXmPxQoJdeNDew9swBi3ki6k6BJRAU9viZ5Maow2Px8OvbANGSJvaF6uchdrFoKIOE1vsOAOpwINP3dOgeerlbBiLOxca1jmhkut%2F5TUJGUmXqjgeTadMYAeWm2TR%2FV3HKRCedUs&X-Amz-Signature=f022dc83e837b0e2a69dcc0359db4aa0d01552522c766c7deaf086167850fc72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
