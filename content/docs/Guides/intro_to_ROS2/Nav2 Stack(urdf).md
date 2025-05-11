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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVWI3JM%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHUlo7XmF7TJ%2F4HbOS1xnFTB%2FpfoETCzyImvFuwOfaXiAiEAhj962Gs36S9Pr6lpi7uWkxSHlRvHp%2BvkrCVOPZ2GaM4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLV07Cm%2B2Y8gWFVjFCrcA6jVgo7oFlj12rAqCUXB%2F11dVi04sugy%2BAhiTl4CBp1pNwoT94RzJzXU0L6nei%2BI1S6XEs0nlpXNDYWz%2BC9HsIhXz6EUNFpynyOWshtEk46ajEBEZH9X88TNDF%2BTP%2F9AOQNnUkK4w%2Fbva4UnVWUcOX1Sb0BVoDj8y6cDZ%2Bc2pHG8czS9%2Fy%2BNkWFXuRCkJ4L7lSYgCMwTR8ObjVecDYuNKtDEWF1n%2FNEGgfJQ4cl%2FZ6LcZJ2BBgCcNzPfKVJGxAuRhK2bcmgMfc%2BEQxX8rY0jIaXnAn6lD0VNN8fe8tbqJLGADqdOb6fc5nGaruosZmxRYsMbfQ%2FWhBLQQujPSuO7eg8zL5Qz5LvvSdL3QXhOCfMlrAGwSZtxIqKFJ1%2BKrOjd2bq0c5c4bN%2FCi%2F3JOKmy280i43TSgtXTB300l8K75QG7FdAnQMw1%2F1LFokZf0yd2bdJr9Kqy1jzWyHqFtTZluAtCM0GVg2vxb9UJVDbo%2FadxEmpRicANyQLb65sJZ6Ly77vwyaKwj1e6ilAh2UlOLh%2F7pcrALOCvqAwsjcRsWs8CfCTj9nrQe90Kt3cIRsxvntxN%2BtyaXgMslplksyokhu4KNClLJjAXfKsvyLjCb%2BRe4ghxNeqYdmOzd%2BKQMKu5gcEGOqUBgwiz43ONAvFw8bWK88j0%2F14le2kTl13uf0NBFl22kCPs4rEGnjymBAix6nBkWoqYXg%2FUPbcMvjmF%2FAOFBWEhzndouTiU7FyOf2xBlgCI786C556kFqXW5iEbVF8MJJdD3x66veCcvXz%2F%2FuZwThYcnXI9iGY1VZJdyv99svfdSY3oqJNKgSONypCTOTqxZpwsvN66b%2FC%2FiEEdlZ3XerKYWRbXogIh&X-Amz-Signature=16bbee2c9867ffbc3197079feb6580de468f223ef49ec0d8c7359e8298e377f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVWI3JM%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHUlo7XmF7TJ%2F4HbOS1xnFTB%2FpfoETCzyImvFuwOfaXiAiEAhj962Gs36S9Pr6lpi7uWkxSHlRvHp%2BvkrCVOPZ2GaM4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLV07Cm%2B2Y8gWFVjFCrcA6jVgo7oFlj12rAqCUXB%2F11dVi04sugy%2BAhiTl4CBp1pNwoT94RzJzXU0L6nei%2BI1S6XEs0nlpXNDYWz%2BC9HsIhXz6EUNFpynyOWshtEk46ajEBEZH9X88TNDF%2BTP%2F9AOQNnUkK4w%2Fbva4UnVWUcOX1Sb0BVoDj8y6cDZ%2Bc2pHG8czS9%2Fy%2BNkWFXuRCkJ4L7lSYgCMwTR8ObjVecDYuNKtDEWF1n%2FNEGgfJQ4cl%2FZ6LcZJ2BBgCcNzPfKVJGxAuRhK2bcmgMfc%2BEQxX8rY0jIaXnAn6lD0VNN8fe8tbqJLGADqdOb6fc5nGaruosZmxRYsMbfQ%2FWhBLQQujPSuO7eg8zL5Qz5LvvSdL3QXhOCfMlrAGwSZtxIqKFJ1%2BKrOjd2bq0c5c4bN%2FCi%2F3JOKmy280i43TSgtXTB300l8K75QG7FdAnQMw1%2F1LFokZf0yd2bdJr9Kqy1jzWyHqFtTZluAtCM0GVg2vxb9UJVDbo%2FadxEmpRicANyQLb65sJZ6Ly77vwyaKwj1e6ilAh2UlOLh%2F7pcrALOCvqAwsjcRsWs8CfCTj9nrQe90Kt3cIRsxvntxN%2BtyaXgMslplksyokhu4KNClLJjAXfKsvyLjCb%2BRe4ghxNeqYdmOzd%2BKQMKu5gcEGOqUBgwiz43ONAvFw8bWK88j0%2F14le2kTl13uf0NBFl22kCPs4rEGnjymBAix6nBkWoqYXg%2FUPbcMvjmF%2FAOFBWEhzndouTiU7FyOf2xBlgCI786C556kFqXW5iEbVF8MJJdD3x66veCcvXz%2F%2FuZwThYcnXI9iGY1VZJdyv99svfdSY3oqJNKgSONypCTOTqxZpwsvN66b%2FC%2FiEEdlZ3XerKYWRbXogIh&X-Amz-Signature=51cdae8509c4a81872b4b48a7edf77bf3c71d45c4cf54a2b6d8dadb771666a94&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVWI3JM%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHUlo7XmF7TJ%2F4HbOS1xnFTB%2FpfoETCzyImvFuwOfaXiAiEAhj962Gs36S9Pr6lpi7uWkxSHlRvHp%2BvkrCVOPZ2GaM4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLV07Cm%2B2Y8gWFVjFCrcA6jVgo7oFlj12rAqCUXB%2F11dVi04sugy%2BAhiTl4CBp1pNwoT94RzJzXU0L6nei%2BI1S6XEs0nlpXNDYWz%2BC9HsIhXz6EUNFpynyOWshtEk46ajEBEZH9X88TNDF%2BTP%2F9AOQNnUkK4w%2Fbva4UnVWUcOX1Sb0BVoDj8y6cDZ%2Bc2pHG8czS9%2Fy%2BNkWFXuRCkJ4L7lSYgCMwTR8ObjVecDYuNKtDEWF1n%2FNEGgfJQ4cl%2FZ6LcZJ2BBgCcNzPfKVJGxAuRhK2bcmgMfc%2BEQxX8rY0jIaXnAn6lD0VNN8fe8tbqJLGADqdOb6fc5nGaruosZmxRYsMbfQ%2FWhBLQQujPSuO7eg8zL5Qz5LvvSdL3QXhOCfMlrAGwSZtxIqKFJ1%2BKrOjd2bq0c5c4bN%2FCi%2F3JOKmy280i43TSgtXTB300l8K75QG7FdAnQMw1%2F1LFokZf0yd2bdJr9Kqy1jzWyHqFtTZluAtCM0GVg2vxb9UJVDbo%2FadxEmpRicANyQLb65sJZ6Ly77vwyaKwj1e6ilAh2UlOLh%2F7pcrALOCvqAwsjcRsWs8CfCTj9nrQe90Kt3cIRsxvntxN%2BtyaXgMslplksyokhu4KNClLJjAXfKsvyLjCb%2BRe4ghxNeqYdmOzd%2BKQMKu5gcEGOqUBgwiz43ONAvFw8bWK88j0%2F14le2kTl13uf0NBFl22kCPs4rEGnjymBAix6nBkWoqYXg%2FUPbcMvjmF%2FAOFBWEhzndouTiU7FyOf2xBlgCI786C556kFqXW5iEbVF8MJJdD3x66veCcvXz%2F%2FuZwThYcnXI9iGY1VZJdyv99svfdSY3oqJNKgSONypCTOTqxZpwsvN66b%2FC%2FiEEdlZ3XerKYWRbXogIh&X-Amz-Signature=35af9a58286af3290b773b8d26141e8543f7566f178074d8ffe86ace00cd636c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVWI3JM%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHUlo7XmF7TJ%2F4HbOS1xnFTB%2FpfoETCzyImvFuwOfaXiAiEAhj962Gs36S9Pr6lpi7uWkxSHlRvHp%2BvkrCVOPZ2GaM4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLV07Cm%2B2Y8gWFVjFCrcA6jVgo7oFlj12rAqCUXB%2F11dVi04sugy%2BAhiTl4CBp1pNwoT94RzJzXU0L6nei%2BI1S6XEs0nlpXNDYWz%2BC9HsIhXz6EUNFpynyOWshtEk46ajEBEZH9X88TNDF%2BTP%2F9AOQNnUkK4w%2Fbva4UnVWUcOX1Sb0BVoDj8y6cDZ%2Bc2pHG8czS9%2Fy%2BNkWFXuRCkJ4L7lSYgCMwTR8ObjVecDYuNKtDEWF1n%2FNEGgfJQ4cl%2FZ6LcZJ2BBgCcNzPfKVJGxAuRhK2bcmgMfc%2BEQxX8rY0jIaXnAn6lD0VNN8fe8tbqJLGADqdOb6fc5nGaruosZmxRYsMbfQ%2FWhBLQQujPSuO7eg8zL5Qz5LvvSdL3QXhOCfMlrAGwSZtxIqKFJ1%2BKrOjd2bq0c5c4bN%2FCi%2F3JOKmy280i43TSgtXTB300l8K75QG7FdAnQMw1%2F1LFokZf0yd2bdJr9Kqy1jzWyHqFtTZluAtCM0GVg2vxb9UJVDbo%2FadxEmpRicANyQLb65sJZ6Ly77vwyaKwj1e6ilAh2UlOLh%2F7pcrALOCvqAwsjcRsWs8CfCTj9nrQe90Kt3cIRsxvntxN%2BtyaXgMslplksyokhu4KNClLJjAXfKsvyLjCb%2BRe4ghxNeqYdmOzd%2BKQMKu5gcEGOqUBgwiz43ONAvFw8bWK88j0%2F14le2kTl13uf0NBFl22kCPs4rEGnjymBAix6nBkWoqYXg%2FUPbcMvjmF%2FAOFBWEhzndouTiU7FyOf2xBlgCI786C556kFqXW5iEbVF8MJJdD3x66veCcvXz%2F%2FuZwThYcnXI9iGY1VZJdyv99svfdSY3oqJNKgSONypCTOTqxZpwsvN66b%2FC%2FiEEdlZ3XerKYWRbXogIh&X-Amz-Signature=8b927d194bece80043b3556dc9f89de4e2e0fded03c0968ee74bd11173d7c399&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVWI3JM%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHUlo7XmF7TJ%2F4HbOS1xnFTB%2FpfoETCzyImvFuwOfaXiAiEAhj962Gs36S9Pr6lpi7uWkxSHlRvHp%2BvkrCVOPZ2GaM4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLV07Cm%2B2Y8gWFVjFCrcA6jVgo7oFlj12rAqCUXB%2F11dVi04sugy%2BAhiTl4CBp1pNwoT94RzJzXU0L6nei%2BI1S6XEs0nlpXNDYWz%2BC9HsIhXz6EUNFpynyOWshtEk46ajEBEZH9X88TNDF%2BTP%2F9AOQNnUkK4w%2Fbva4UnVWUcOX1Sb0BVoDj8y6cDZ%2Bc2pHG8czS9%2Fy%2BNkWFXuRCkJ4L7lSYgCMwTR8ObjVecDYuNKtDEWF1n%2FNEGgfJQ4cl%2FZ6LcZJ2BBgCcNzPfKVJGxAuRhK2bcmgMfc%2BEQxX8rY0jIaXnAn6lD0VNN8fe8tbqJLGADqdOb6fc5nGaruosZmxRYsMbfQ%2FWhBLQQujPSuO7eg8zL5Qz5LvvSdL3QXhOCfMlrAGwSZtxIqKFJ1%2BKrOjd2bq0c5c4bN%2FCi%2F3JOKmy280i43TSgtXTB300l8K75QG7FdAnQMw1%2F1LFokZf0yd2bdJr9Kqy1jzWyHqFtTZluAtCM0GVg2vxb9UJVDbo%2FadxEmpRicANyQLb65sJZ6Ly77vwyaKwj1e6ilAh2UlOLh%2F7pcrALOCvqAwsjcRsWs8CfCTj9nrQe90Kt3cIRsxvntxN%2BtyaXgMslplksyokhu4KNClLJjAXfKsvyLjCb%2BRe4ghxNeqYdmOzd%2BKQMKu5gcEGOqUBgwiz43ONAvFw8bWK88j0%2F14le2kTl13uf0NBFl22kCPs4rEGnjymBAix6nBkWoqYXg%2FUPbcMvjmF%2FAOFBWEhzndouTiU7FyOf2xBlgCI786C556kFqXW5iEbVF8MJJdD3x66veCcvXz%2F%2FuZwThYcnXI9iGY1VZJdyv99svfdSY3oqJNKgSONypCTOTqxZpwsvN66b%2FC%2FiEEdlZ3XerKYWRbXogIh&X-Amz-Signature=3ffe65f4059118cda493600191c6ec438898d499bb85abe3d93b7b116e19a107&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVWI3JM%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHUlo7XmF7TJ%2F4HbOS1xnFTB%2FpfoETCzyImvFuwOfaXiAiEAhj962Gs36S9Pr6lpi7uWkxSHlRvHp%2BvkrCVOPZ2GaM4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLV07Cm%2B2Y8gWFVjFCrcA6jVgo7oFlj12rAqCUXB%2F11dVi04sugy%2BAhiTl4CBp1pNwoT94RzJzXU0L6nei%2BI1S6XEs0nlpXNDYWz%2BC9HsIhXz6EUNFpynyOWshtEk46ajEBEZH9X88TNDF%2BTP%2F9AOQNnUkK4w%2Fbva4UnVWUcOX1Sb0BVoDj8y6cDZ%2Bc2pHG8czS9%2Fy%2BNkWFXuRCkJ4L7lSYgCMwTR8ObjVecDYuNKtDEWF1n%2FNEGgfJQ4cl%2FZ6LcZJ2BBgCcNzPfKVJGxAuRhK2bcmgMfc%2BEQxX8rY0jIaXnAn6lD0VNN8fe8tbqJLGADqdOb6fc5nGaruosZmxRYsMbfQ%2FWhBLQQujPSuO7eg8zL5Qz5LvvSdL3QXhOCfMlrAGwSZtxIqKFJ1%2BKrOjd2bq0c5c4bN%2FCi%2F3JOKmy280i43TSgtXTB300l8K75QG7FdAnQMw1%2F1LFokZf0yd2bdJr9Kqy1jzWyHqFtTZluAtCM0GVg2vxb9UJVDbo%2FadxEmpRicANyQLb65sJZ6Ly77vwyaKwj1e6ilAh2UlOLh%2F7pcrALOCvqAwsjcRsWs8CfCTj9nrQe90Kt3cIRsxvntxN%2BtyaXgMslplksyokhu4KNClLJjAXfKsvyLjCb%2BRe4ghxNeqYdmOzd%2BKQMKu5gcEGOqUBgwiz43ONAvFw8bWK88j0%2F14le2kTl13uf0NBFl22kCPs4rEGnjymBAix6nBkWoqYXg%2FUPbcMvjmF%2FAOFBWEhzndouTiU7FyOf2xBlgCI786C556kFqXW5iEbVF8MJJdD3x66veCcvXz%2F%2FuZwThYcnXI9iGY1VZJdyv99svfdSY3oqJNKgSONypCTOTqxZpwsvN66b%2FC%2FiEEdlZ3XerKYWRbXogIh&X-Amz-Signature=7bb39319d19c4c0d89af801598f8f62f2f0d690eb4185adf95738802a5b96a52&X-Amz-SignedHeaders=host&x-id=GetObject)
