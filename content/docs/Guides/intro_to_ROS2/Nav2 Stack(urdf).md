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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPK5GQR5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAXBm3pNGJC53MjfVpAIUTfvGz%2F%2FWL5rQy0dyUk0eit%2FAiA5wvRrn0QVDP%2F7Q07xxeiADT45LjxmGWkMY8HKPPeVKir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMpXYQ%2FbMH6hT3BvvPKtwDSDBtZbNu%2B6Zzb17D0P3Y3h6BtTbELI%2B0NYqg5JnUrw0GFho%2BJbyhbcgXRgx6WF9i%2ByrkPNxXsXlbIOnQ9eK%2B8tpaP2WPlq514ZOT07hkCx8AyggNQpShbEuokiAwnV9Salu9fgJCp%2B9G9rTviTwqrDhqYGVBxoklIm0Mwha5Zu8Vj7bRGlPavdLaQKqnu%2F9N6Mpv4%2Br93PYfQZi23KXnvlrWAZaZb%2BNHs6Xhh9iQQSGkro%2FrhVgF0Jd4t6jp1NDlufWfg%2BpYQ13gp5CQqyZa3C7H7cgjomHnHB8%2FXYQwoIKpXMBlChLOsnJCe0k%2BLb5gs99qOZzhhyCK5IJL2ynssVO05h%2FHWzqg%2FucyYfYwWKz0mgzB%2FHCOMtyzJM5Z9tHKrdOha7N0%2BeWJgAdTfhOkk%2F1fnQMOf94FLtcN0TX588d9VXXVlNyu%2FqcCufDOhjo3raJZM3KU4yrhVRDeYwk6kq25EvPnQ8qvukpZAni8KmhckmGyZOFmLnjVx4Ngv4tzJpIjXcjtVkUh%2BrCouVX%2FCRvKPs3PkPT%2FCQE60T3V0VPtS3Ig8gOGZf93PuMXnCAbwhVNvwTsZqKPbHc2xJj5KBZobujH38fwbEWKHjJ35NYy0u7Yp3o2eBo4aI8w9N6cvwY6pgGlr299EXONzWY6NDBNNCaCWz92V799Afk7XLh%2BfIJbGu2hxikb1gPJn6xO8e0C6CMTFjIV4ovP8wUK3%2Bi99AiRUbaDvaU%2Fbr%2FvIxesPNRw2go66JVZI71zVRO%2B9tHnPXvzg%2F0AM0dslYiGaUaIGnPDJqXDlxOrx%2BE%2FtcxqCofPb3aaE12raMOh0inKPcGmbhDvEE27WI1dYBRDZ%2Fzg8PZL2RT2dxD7&X-Amz-Signature=25d645c5338271d8a0707e33c3dfe285e4e338a8c5b53990279edc24d8f997f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPK5GQR5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAXBm3pNGJC53MjfVpAIUTfvGz%2F%2FWL5rQy0dyUk0eit%2FAiA5wvRrn0QVDP%2F7Q07xxeiADT45LjxmGWkMY8HKPPeVKir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMpXYQ%2FbMH6hT3BvvPKtwDSDBtZbNu%2B6Zzb17D0P3Y3h6BtTbELI%2B0NYqg5JnUrw0GFho%2BJbyhbcgXRgx6WF9i%2ByrkPNxXsXlbIOnQ9eK%2B8tpaP2WPlq514ZOT07hkCx8AyggNQpShbEuokiAwnV9Salu9fgJCp%2B9G9rTviTwqrDhqYGVBxoklIm0Mwha5Zu8Vj7bRGlPavdLaQKqnu%2F9N6Mpv4%2Br93PYfQZi23KXnvlrWAZaZb%2BNHs6Xhh9iQQSGkro%2FrhVgF0Jd4t6jp1NDlufWfg%2BpYQ13gp5CQqyZa3C7H7cgjomHnHB8%2FXYQwoIKpXMBlChLOsnJCe0k%2BLb5gs99qOZzhhyCK5IJL2ynssVO05h%2FHWzqg%2FucyYfYwWKz0mgzB%2FHCOMtyzJM5Z9tHKrdOha7N0%2BeWJgAdTfhOkk%2F1fnQMOf94FLtcN0TX588d9VXXVlNyu%2FqcCufDOhjo3raJZM3KU4yrhVRDeYwk6kq25EvPnQ8qvukpZAni8KmhckmGyZOFmLnjVx4Ngv4tzJpIjXcjtVkUh%2BrCouVX%2FCRvKPs3PkPT%2FCQE60T3V0VPtS3Ig8gOGZf93PuMXnCAbwhVNvwTsZqKPbHc2xJj5KBZobujH38fwbEWKHjJ35NYy0u7Yp3o2eBo4aI8w9N6cvwY6pgGlr299EXONzWY6NDBNNCaCWz92V799Afk7XLh%2BfIJbGu2hxikb1gPJn6xO8e0C6CMTFjIV4ovP8wUK3%2Bi99AiRUbaDvaU%2Fbr%2FvIxesPNRw2go66JVZI71zVRO%2B9tHnPXvzg%2F0AM0dslYiGaUaIGnPDJqXDlxOrx%2BE%2FtcxqCofPb3aaE12raMOh0inKPcGmbhDvEE27WI1dYBRDZ%2Fzg8PZL2RT2dxD7&X-Amz-Signature=8b6a31ce64c6da7df6198ecd48c6c5caf4331d42e74aa188358e233e307909e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPK5GQR5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAXBm3pNGJC53MjfVpAIUTfvGz%2F%2FWL5rQy0dyUk0eit%2FAiA5wvRrn0QVDP%2F7Q07xxeiADT45LjxmGWkMY8HKPPeVKir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMpXYQ%2FbMH6hT3BvvPKtwDSDBtZbNu%2B6Zzb17D0P3Y3h6BtTbELI%2B0NYqg5JnUrw0GFho%2BJbyhbcgXRgx6WF9i%2ByrkPNxXsXlbIOnQ9eK%2B8tpaP2WPlq514ZOT07hkCx8AyggNQpShbEuokiAwnV9Salu9fgJCp%2B9G9rTviTwqrDhqYGVBxoklIm0Mwha5Zu8Vj7bRGlPavdLaQKqnu%2F9N6Mpv4%2Br93PYfQZi23KXnvlrWAZaZb%2BNHs6Xhh9iQQSGkro%2FrhVgF0Jd4t6jp1NDlufWfg%2BpYQ13gp5CQqyZa3C7H7cgjomHnHB8%2FXYQwoIKpXMBlChLOsnJCe0k%2BLb5gs99qOZzhhyCK5IJL2ynssVO05h%2FHWzqg%2FucyYfYwWKz0mgzB%2FHCOMtyzJM5Z9tHKrdOha7N0%2BeWJgAdTfhOkk%2F1fnQMOf94FLtcN0TX588d9VXXVlNyu%2FqcCufDOhjo3raJZM3KU4yrhVRDeYwk6kq25EvPnQ8qvukpZAni8KmhckmGyZOFmLnjVx4Ngv4tzJpIjXcjtVkUh%2BrCouVX%2FCRvKPs3PkPT%2FCQE60T3V0VPtS3Ig8gOGZf93PuMXnCAbwhVNvwTsZqKPbHc2xJj5KBZobujH38fwbEWKHjJ35NYy0u7Yp3o2eBo4aI8w9N6cvwY6pgGlr299EXONzWY6NDBNNCaCWz92V799Afk7XLh%2BfIJbGu2hxikb1gPJn6xO8e0C6CMTFjIV4ovP8wUK3%2Bi99AiRUbaDvaU%2Fbr%2FvIxesPNRw2go66JVZI71zVRO%2B9tHnPXvzg%2F0AM0dslYiGaUaIGnPDJqXDlxOrx%2BE%2FtcxqCofPb3aaE12raMOh0inKPcGmbhDvEE27WI1dYBRDZ%2Fzg8PZL2RT2dxD7&X-Amz-Signature=4a8d5b7ab34d4b11c630056c1e9c73fa694d5ab6d3cc6b5b9ae0b0a6a4071506&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPK5GQR5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAXBm3pNGJC53MjfVpAIUTfvGz%2F%2FWL5rQy0dyUk0eit%2FAiA5wvRrn0QVDP%2F7Q07xxeiADT45LjxmGWkMY8HKPPeVKir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMpXYQ%2FbMH6hT3BvvPKtwDSDBtZbNu%2B6Zzb17D0P3Y3h6BtTbELI%2B0NYqg5JnUrw0GFho%2BJbyhbcgXRgx6WF9i%2ByrkPNxXsXlbIOnQ9eK%2B8tpaP2WPlq514ZOT07hkCx8AyggNQpShbEuokiAwnV9Salu9fgJCp%2B9G9rTviTwqrDhqYGVBxoklIm0Mwha5Zu8Vj7bRGlPavdLaQKqnu%2F9N6Mpv4%2Br93PYfQZi23KXnvlrWAZaZb%2BNHs6Xhh9iQQSGkro%2FrhVgF0Jd4t6jp1NDlufWfg%2BpYQ13gp5CQqyZa3C7H7cgjomHnHB8%2FXYQwoIKpXMBlChLOsnJCe0k%2BLb5gs99qOZzhhyCK5IJL2ynssVO05h%2FHWzqg%2FucyYfYwWKz0mgzB%2FHCOMtyzJM5Z9tHKrdOha7N0%2BeWJgAdTfhOkk%2F1fnQMOf94FLtcN0TX588d9VXXVlNyu%2FqcCufDOhjo3raJZM3KU4yrhVRDeYwk6kq25EvPnQ8qvukpZAni8KmhckmGyZOFmLnjVx4Ngv4tzJpIjXcjtVkUh%2BrCouVX%2FCRvKPs3PkPT%2FCQE60T3V0VPtS3Ig8gOGZf93PuMXnCAbwhVNvwTsZqKPbHc2xJj5KBZobujH38fwbEWKHjJ35NYy0u7Yp3o2eBo4aI8w9N6cvwY6pgGlr299EXONzWY6NDBNNCaCWz92V799Afk7XLh%2BfIJbGu2hxikb1gPJn6xO8e0C6CMTFjIV4ovP8wUK3%2Bi99AiRUbaDvaU%2Fbr%2FvIxesPNRw2go66JVZI71zVRO%2B9tHnPXvzg%2F0AM0dslYiGaUaIGnPDJqXDlxOrx%2BE%2FtcxqCofPb3aaE12raMOh0inKPcGmbhDvEE27WI1dYBRDZ%2Fzg8PZL2RT2dxD7&X-Amz-Signature=29c296dc809561f79bb0b09824c7cccf14dea8467743bedbdbd1c64d982622ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPK5GQR5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAXBm3pNGJC53MjfVpAIUTfvGz%2F%2FWL5rQy0dyUk0eit%2FAiA5wvRrn0QVDP%2F7Q07xxeiADT45LjxmGWkMY8HKPPeVKir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMpXYQ%2FbMH6hT3BvvPKtwDSDBtZbNu%2B6Zzb17D0P3Y3h6BtTbELI%2B0NYqg5JnUrw0GFho%2BJbyhbcgXRgx6WF9i%2ByrkPNxXsXlbIOnQ9eK%2B8tpaP2WPlq514ZOT07hkCx8AyggNQpShbEuokiAwnV9Salu9fgJCp%2B9G9rTviTwqrDhqYGVBxoklIm0Mwha5Zu8Vj7bRGlPavdLaQKqnu%2F9N6Mpv4%2Br93PYfQZi23KXnvlrWAZaZb%2BNHs6Xhh9iQQSGkro%2FrhVgF0Jd4t6jp1NDlufWfg%2BpYQ13gp5CQqyZa3C7H7cgjomHnHB8%2FXYQwoIKpXMBlChLOsnJCe0k%2BLb5gs99qOZzhhyCK5IJL2ynssVO05h%2FHWzqg%2FucyYfYwWKz0mgzB%2FHCOMtyzJM5Z9tHKrdOha7N0%2BeWJgAdTfhOkk%2F1fnQMOf94FLtcN0TX588d9VXXVlNyu%2FqcCufDOhjo3raJZM3KU4yrhVRDeYwk6kq25EvPnQ8qvukpZAni8KmhckmGyZOFmLnjVx4Ngv4tzJpIjXcjtVkUh%2BrCouVX%2FCRvKPs3PkPT%2FCQE60T3V0VPtS3Ig8gOGZf93PuMXnCAbwhVNvwTsZqKPbHc2xJj5KBZobujH38fwbEWKHjJ35NYy0u7Yp3o2eBo4aI8w9N6cvwY6pgGlr299EXONzWY6NDBNNCaCWz92V799Afk7XLh%2BfIJbGu2hxikb1gPJn6xO8e0C6CMTFjIV4ovP8wUK3%2Bi99AiRUbaDvaU%2Fbr%2FvIxesPNRw2go66JVZI71zVRO%2B9tHnPXvzg%2F0AM0dslYiGaUaIGnPDJqXDlxOrx%2BE%2FtcxqCofPb3aaE12raMOh0inKPcGmbhDvEE27WI1dYBRDZ%2Fzg8PZL2RT2dxD7&X-Amz-Signature=a2ee7007981638f8cd6f12769b0940b39baef4b348b34cabdf2992ff9c5d995b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPK5GQR5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAXBm3pNGJC53MjfVpAIUTfvGz%2F%2FWL5rQy0dyUk0eit%2FAiA5wvRrn0QVDP%2F7Q07xxeiADT45LjxmGWkMY8HKPPeVKir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMpXYQ%2FbMH6hT3BvvPKtwDSDBtZbNu%2B6Zzb17D0P3Y3h6BtTbELI%2B0NYqg5JnUrw0GFho%2BJbyhbcgXRgx6WF9i%2ByrkPNxXsXlbIOnQ9eK%2B8tpaP2WPlq514ZOT07hkCx8AyggNQpShbEuokiAwnV9Salu9fgJCp%2B9G9rTviTwqrDhqYGVBxoklIm0Mwha5Zu8Vj7bRGlPavdLaQKqnu%2F9N6Mpv4%2Br93PYfQZi23KXnvlrWAZaZb%2BNHs6Xhh9iQQSGkro%2FrhVgF0Jd4t6jp1NDlufWfg%2BpYQ13gp5CQqyZa3C7H7cgjomHnHB8%2FXYQwoIKpXMBlChLOsnJCe0k%2BLb5gs99qOZzhhyCK5IJL2ynssVO05h%2FHWzqg%2FucyYfYwWKz0mgzB%2FHCOMtyzJM5Z9tHKrdOha7N0%2BeWJgAdTfhOkk%2F1fnQMOf94FLtcN0TX588d9VXXVlNyu%2FqcCufDOhjo3raJZM3KU4yrhVRDeYwk6kq25EvPnQ8qvukpZAni8KmhckmGyZOFmLnjVx4Ngv4tzJpIjXcjtVkUh%2BrCouVX%2FCRvKPs3PkPT%2FCQE60T3V0VPtS3Ig8gOGZf93PuMXnCAbwhVNvwTsZqKPbHc2xJj5KBZobujH38fwbEWKHjJ35NYy0u7Yp3o2eBo4aI8w9N6cvwY6pgGlr299EXONzWY6NDBNNCaCWz92V799Afk7XLh%2BfIJbGu2hxikb1gPJn6xO8e0C6CMTFjIV4ovP8wUK3%2Bi99AiRUbaDvaU%2Fbr%2FvIxesPNRw2go66JVZI71zVRO%2B9tHnPXvzg%2F0AM0dslYiGaUaIGnPDJqXDlxOrx%2BE%2FtcxqCofPb3aaE12raMOh0inKPcGmbhDvEE27WI1dYBRDZ%2Fzg8PZL2RT2dxD7&X-Amz-Signature=0cda7c7fa521c3296dc73da9c66299c02de81498f952c5020a01e9c9d26e2698&X-Amz-SignedHeaders=host&x-id=GetObject)
