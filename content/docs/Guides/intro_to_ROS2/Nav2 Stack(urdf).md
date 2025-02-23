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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGY6IX4D%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2uorwi5EszydXmJlhUzuOZDVv%2B72ibo6MjPaXka%2FEugIgObK1zZSspqtvBlx2kCqxGi0uHiLrnFl4UwfO1eeinSgq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDI2KC81cQiewwP35kyrcAx%2Fs3cezjHL5BrKe8pdncpKo9hbQskX9VDb1bx974wN9QV2L9dtiwAY%2FaiNP0vOtnkJv6uYVHdcaVj%2BkIeqLN8oEIf9LrVOfiPjGMWEaUyrawWcUYl2YDC%2BTz%2F2sKBd4HNzWDjX7%2BubNMrt1%2BgwBQPNSO%2FsV1CFWgXPJawG0Y2Kceaq%2F%2FSG4n0L6uSIoKAl65n3ZXxgXmKmNFzQwy5hkRdk7luAwRl9irNoKA9frXEBtjzoRtdAV%2F1CDVYZ8cTvQTPgFTvkUlxwkYGhEbOnJ%2FAJRQ%2FgKnAvUXzhpuKhJq5%2BWD58aTwlncJ2pgADDaGCmqSoFRSeokckdhsOfrKtVPQXLJbNAjANH8cir%2FXWu7GSDxjipsOJpdH6Hqqkm0EgmIdApNrV1n5hH%2Fvk2Inbmdsd0tixZrG0olabxUyYWShoUp%2FxTmyiRa2md7eICjXu2WY2nSzCaB%2FhdhY9sN29g72vEZjGQnwZf5sPOb2slhCwlJFx%2F87NCQLiXpyFVpYyhbadItephF5sko8DdmRJgkkwNNgQkIE5iCPDIr3KauG6O0ZbUYazfhHaortczOTDyI3iuTkhklsN1IbJ1SwAU3YR1L%2BrZWxYjUa47I0a9EGDGuGSW2RYnbB%2B3qo%2BCMNvn670GOqUBrYfUJ3%2Frk5LtNf%2FCVKcFOHEdWf2nUAo6vEKO1JstT8uzMFhaIXUjvOzJQG%2F6eFTLIyDJcUwvYjsj74y0vk9yPvex3MRXzYa%2FLvbfUuDGbrUWF2ytzuStUSonI8cZ3pR6ij6Oe7Ka1tZ%2FmENmadX8kUKgJ6pfhoSWvR2S911zCzY8Gqo6EGgBe%2BstG4CcxYTWcE2R%2BD14cLQGtIlDUD6ytBXRxXat&X-Amz-Signature=d304a4dcf300db9cc3088f99b2f29d8c8043c490f6dbe818b5f45ade64b44061&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGY6IX4D%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2uorwi5EszydXmJlhUzuOZDVv%2B72ibo6MjPaXka%2FEugIgObK1zZSspqtvBlx2kCqxGi0uHiLrnFl4UwfO1eeinSgq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDI2KC81cQiewwP35kyrcAx%2Fs3cezjHL5BrKe8pdncpKo9hbQskX9VDb1bx974wN9QV2L9dtiwAY%2FaiNP0vOtnkJv6uYVHdcaVj%2BkIeqLN8oEIf9LrVOfiPjGMWEaUyrawWcUYl2YDC%2BTz%2F2sKBd4HNzWDjX7%2BubNMrt1%2BgwBQPNSO%2FsV1CFWgXPJawG0Y2Kceaq%2F%2FSG4n0L6uSIoKAl65n3ZXxgXmKmNFzQwy5hkRdk7luAwRl9irNoKA9frXEBtjzoRtdAV%2F1CDVYZ8cTvQTPgFTvkUlxwkYGhEbOnJ%2FAJRQ%2FgKnAvUXzhpuKhJq5%2BWD58aTwlncJ2pgADDaGCmqSoFRSeokckdhsOfrKtVPQXLJbNAjANH8cir%2FXWu7GSDxjipsOJpdH6Hqqkm0EgmIdApNrV1n5hH%2Fvk2Inbmdsd0tixZrG0olabxUyYWShoUp%2FxTmyiRa2md7eICjXu2WY2nSzCaB%2FhdhY9sN29g72vEZjGQnwZf5sPOb2slhCwlJFx%2F87NCQLiXpyFVpYyhbadItephF5sko8DdmRJgkkwNNgQkIE5iCPDIr3KauG6O0ZbUYazfhHaortczOTDyI3iuTkhklsN1IbJ1SwAU3YR1L%2BrZWxYjUa47I0a9EGDGuGSW2RYnbB%2B3qo%2BCMNvn670GOqUBrYfUJ3%2Frk5LtNf%2FCVKcFOHEdWf2nUAo6vEKO1JstT8uzMFhaIXUjvOzJQG%2F6eFTLIyDJcUwvYjsj74y0vk9yPvex3MRXzYa%2FLvbfUuDGbrUWF2ytzuStUSonI8cZ3pR6ij6Oe7Ka1tZ%2FmENmadX8kUKgJ6pfhoSWvR2S911zCzY8Gqo6EGgBe%2BstG4CcxYTWcE2R%2BD14cLQGtIlDUD6ytBXRxXat&X-Amz-Signature=94609e8647e9b0b9289e77f91e547ff5223e0cafacd2713d4430edabdad2f63b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGY6IX4D%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2uorwi5EszydXmJlhUzuOZDVv%2B72ibo6MjPaXka%2FEugIgObK1zZSspqtvBlx2kCqxGi0uHiLrnFl4UwfO1eeinSgq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDI2KC81cQiewwP35kyrcAx%2Fs3cezjHL5BrKe8pdncpKo9hbQskX9VDb1bx974wN9QV2L9dtiwAY%2FaiNP0vOtnkJv6uYVHdcaVj%2BkIeqLN8oEIf9LrVOfiPjGMWEaUyrawWcUYl2YDC%2BTz%2F2sKBd4HNzWDjX7%2BubNMrt1%2BgwBQPNSO%2FsV1CFWgXPJawG0Y2Kceaq%2F%2FSG4n0L6uSIoKAl65n3ZXxgXmKmNFzQwy5hkRdk7luAwRl9irNoKA9frXEBtjzoRtdAV%2F1CDVYZ8cTvQTPgFTvkUlxwkYGhEbOnJ%2FAJRQ%2FgKnAvUXzhpuKhJq5%2BWD58aTwlncJ2pgADDaGCmqSoFRSeokckdhsOfrKtVPQXLJbNAjANH8cir%2FXWu7GSDxjipsOJpdH6Hqqkm0EgmIdApNrV1n5hH%2Fvk2Inbmdsd0tixZrG0olabxUyYWShoUp%2FxTmyiRa2md7eICjXu2WY2nSzCaB%2FhdhY9sN29g72vEZjGQnwZf5sPOb2slhCwlJFx%2F87NCQLiXpyFVpYyhbadItephF5sko8DdmRJgkkwNNgQkIE5iCPDIr3KauG6O0ZbUYazfhHaortczOTDyI3iuTkhklsN1IbJ1SwAU3YR1L%2BrZWxYjUa47I0a9EGDGuGSW2RYnbB%2B3qo%2BCMNvn670GOqUBrYfUJ3%2Frk5LtNf%2FCVKcFOHEdWf2nUAo6vEKO1JstT8uzMFhaIXUjvOzJQG%2F6eFTLIyDJcUwvYjsj74y0vk9yPvex3MRXzYa%2FLvbfUuDGbrUWF2ytzuStUSonI8cZ3pR6ij6Oe7Ka1tZ%2FmENmadX8kUKgJ6pfhoSWvR2S911zCzY8Gqo6EGgBe%2BstG4CcxYTWcE2R%2BD14cLQGtIlDUD6ytBXRxXat&X-Amz-Signature=127ae2b65ef436d31f7d16b5cc7e5a652e81afdf567b0a8083a80ca2ddf7df22&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGY6IX4D%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2uorwi5EszydXmJlhUzuOZDVv%2B72ibo6MjPaXka%2FEugIgObK1zZSspqtvBlx2kCqxGi0uHiLrnFl4UwfO1eeinSgq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDI2KC81cQiewwP35kyrcAx%2Fs3cezjHL5BrKe8pdncpKo9hbQskX9VDb1bx974wN9QV2L9dtiwAY%2FaiNP0vOtnkJv6uYVHdcaVj%2BkIeqLN8oEIf9LrVOfiPjGMWEaUyrawWcUYl2YDC%2BTz%2F2sKBd4HNzWDjX7%2BubNMrt1%2BgwBQPNSO%2FsV1CFWgXPJawG0Y2Kceaq%2F%2FSG4n0L6uSIoKAl65n3ZXxgXmKmNFzQwy5hkRdk7luAwRl9irNoKA9frXEBtjzoRtdAV%2F1CDVYZ8cTvQTPgFTvkUlxwkYGhEbOnJ%2FAJRQ%2FgKnAvUXzhpuKhJq5%2BWD58aTwlncJ2pgADDaGCmqSoFRSeokckdhsOfrKtVPQXLJbNAjANH8cir%2FXWu7GSDxjipsOJpdH6Hqqkm0EgmIdApNrV1n5hH%2Fvk2Inbmdsd0tixZrG0olabxUyYWShoUp%2FxTmyiRa2md7eICjXu2WY2nSzCaB%2FhdhY9sN29g72vEZjGQnwZf5sPOb2slhCwlJFx%2F87NCQLiXpyFVpYyhbadItephF5sko8DdmRJgkkwNNgQkIE5iCPDIr3KauG6O0ZbUYazfhHaortczOTDyI3iuTkhklsN1IbJ1SwAU3YR1L%2BrZWxYjUa47I0a9EGDGuGSW2RYnbB%2B3qo%2BCMNvn670GOqUBrYfUJ3%2Frk5LtNf%2FCVKcFOHEdWf2nUAo6vEKO1JstT8uzMFhaIXUjvOzJQG%2F6eFTLIyDJcUwvYjsj74y0vk9yPvex3MRXzYa%2FLvbfUuDGbrUWF2ytzuStUSonI8cZ3pR6ij6Oe7Ka1tZ%2FmENmadX8kUKgJ6pfhoSWvR2S911zCzY8Gqo6EGgBe%2BstG4CcxYTWcE2R%2BD14cLQGtIlDUD6ytBXRxXat&X-Amz-Signature=43a3a4edf3f1967c4194e2c04300d1067150ce655ed89d7b0e2a67dffc0ae431&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGY6IX4D%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2uorwi5EszydXmJlhUzuOZDVv%2B72ibo6MjPaXka%2FEugIgObK1zZSspqtvBlx2kCqxGi0uHiLrnFl4UwfO1eeinSgq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDI2KC81cQiewwP35kyrcAx%2Fs3cezjHL5BrKe8pdncpKo9hbQskX9VDb1bx974wN9QV2L9dtiwAY%2FaiNP0vOtnkJv6uYVHdcaVj%2BkIeqLN8oEIf9LrVOfiPjGMWEaUyrawWcUYl2YDC%2BTz%2F2sKBd4HNzWDjX7%2BubNMrt1%2BgwBQPNSO%2FsV1CFWgXPJawG0Y2Kceaq%2F%2FSG4n0L6uSIoKAl65n3ZXxgXmKmNFzQwy5hkRdk7luAwRl9irNoKA9frXEBtjzoRtdAV%2F1CDVYZ8cTvQTPgFTvkUlxwkYGhEbOnJ%2FAJRQ%2FgKnAvUXzhpuKhJq5%2BWD58aTwlncJ2pgADDaGCmqSoFRSeokckdhsOfrKtVPQXLJbNAjANH8cir%2FXWu7GSDxjipsOJpdH6Hqqkm0EgmIdApNrV1n5hH%2Fvk2Inbmdsd0tixZrG0olabxUyYWShoUp%2FxTmyiRa2md7eICjXu2WY2nSzCaB%2FhdhY9sN29g72vEZjGQnwZf5sPOb2slhCwlJFx%2F87NCQLiXpyFVpYyhbadItephF5sko8DdmRJgkkwNNgQkIE5iCPDIr3KauG6O0ZbUYazfhHaortczOTDyI3iuTkhklsN1IbJ1SwAU3YR1L%2BrZWxYjUa47I0a9EGDGuGSW2RYnbB%2B3qo%2BCMNvn670GOqUBrYfUJ3%2Frk5LtNf%2FCVKcFOHEdWf2nUAo6vEKO1JstT8uzMFhaIXUjvOzJQG%2F6eFTLIyDJcUwvYjsj74y0vk9yPvex3MRXzYa%2FLvbfUuDGbrUWF2ytzuStUSonI8cZ3pR6ij6Oe7Ka1tZ%2FmENmadX8kUKgJ6pfhoSWvR2S911zCzY8Gqo6EGgBe%2BstG4CcxYTWcE2R%2BD14cLQGtIlDUD6ytBXRxXat&X-Amz-Signature=acd871c3e4f1d35ee3d45705104d62e1f63e0d478aac5c184ebaf50f5495c5ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGY6IX4D%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2uorwi5EszydXmJlhUzuOZDVv%2B72ibo6MjPaXka%2FEugIgObK1zZSspqtvBlx2kCqxGi0uHiLrnFl4UwfO1eeinSgq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDI2KC81cQiewwP35kyrcAx%2Fs3cezjHL5BrKe8pdncpKo9hbQskX9VDb1bx974wN9QV2L9dtiwAY%2FaiNP0vOtnkJv6uYVHdcaVj%2BkIeqLN8oEIf9LrVOfiPjGMWEaUyrawWcUYl2YDC%2BTz%2F2sKBd4HNzWDjX7%2BubNMrt1%2BgwBQPNSO%2FsV1CFWgXPJawG0Y2Kceaq%2F%2FSG4n0L6uSIoKAl65n3ZXxgXmKmNFzQwy5hkRdk7luAwRl9irNoKA9frXEBtjzoRtdAV%2F1CDVYZ8cTvQTPgFTvkUlxwkYGhEbOnJ%2FAJRQ%2FgKnAvUXzhpuKhJq5%2BWD58aTwlncJ2pgADDaGCmqSoFRSeokckdhsOfrKtVPQXLJbNAjANH8cir%2FXWu7GSDxjipsOJpdH6Hqqkm0EgmIdApNrV1n5hH%2Fvk2Inbmdsd0tixZrG0olabxUyYWShoUp%2FxTmyiRa2md7eICjXu2WY2nSzCaB%2FhdhY9sN29g72vEZjGQnwZf5sPOb2slhCwlJFx%2F87NCQLiXpyFVpYyhbadItephF5sko8DdmRJgkkwNNgQkIE5iCPDIr3KauG6O0ZbUYazfhHaortczOTDyI3iuTkhklsN1IbJ1SwAU3YR1L%2BrZWxYjUa47I0a9EGDGuGSW2RYnbB%2B3qo%2BCMNvn670GOqUBrYfUJ3%2Frk5LtNf%2FCVKcFOHEdWf2nUAo6vEKO1JstT8uzMFhaIXUjvOzJQG%2F6eFTLIyDJcUwvYjsj74y0vk9yPvex3MRXzYa%2FLvbfUuDGbrUWF2ytzuStUSonI8cZ3pR6ij6Oe7Ka1tZ%2FmENmadX8kUKgJ6pfhoSWvR2S911zCzY8Gqo6EGgBe%2BstG4CcxYTWcE2R%2BD14cLQGtIlDUD6ytBXRxXat&X-Amz-Signature=826c9aa48f003520a4fb6695fce140279535ab5c9fbec3a8fab31bf9864bd20c&X-Amz-SignedHeaders=host&x-id=GetObject)
