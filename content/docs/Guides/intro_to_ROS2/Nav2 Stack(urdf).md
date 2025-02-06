---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672JSX2AM%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDw8MZ2XI6lVFuDZxGqlK9R75goGZ5gj9HZB0cgtjv%2BVwIgFO17%2FIbqX6YrzDOxEBRHsMT1%2Fa85G%2FdcgVDCFAoiB30q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKU3j%2F7VEYoKLYmjgSrcA6buxRadS1cwHh2aG479wX3smJxOE6tsPvKnF8Dz2IPNVSjbqF%2BdS4ZGzc8nL37YbZw%2BYjt4Ucs2Yvxi3%2FDXynWrtPY9xzTdjo5L6cfh7bflevZl3iZpx10jvMPi%2B5q7jYMfk7Xyfw6V9sZ%2FAtp9suGgfPrHKgz1bgAn2DQxE9%2F8jLV8kwbJEHruMljdUvlt%2F6dJWioRHFruTBC7JFbaSW%2Bc60bNgwNagCCCTCB4vEEjpPAY3YEFNs98tJ71itOVUu2l5p%2FJvRjIR6ghm7n5GcoDRPDSAvmbyVIjQEfi2aZWTIlJ9EWQqhtm9Cb%2F7GT0jN49ktNBIwWZyzcHjQtSVsJYJtHd6CpTmu%2FKLTeyD9OLgz5%2B6qkYgDZJ0q7eXvIg%2BasgKGCyU3P14Jp9hRs4LvJEO4oIqGnGxW3SEUaXldsHc%2FAdlttwbtJ4gNdD4qsu0JriTzD8NgyuKrE1i%2B7IGLwemLgE0XkShQH1G2f85%2BTBlnBW9u0NGH96sTM50YYwLJyxKipSDMq%2Bh0863Qv5EPaP8Azl4QnByS1FotPgHv7BTQQKv70YyauXhE1LedDRtwDZ9e4UjBk%2BkZgnks%2FLTwaasjRVHXTsuU0DZ5khWu4I6YrDfBKxxDE4Z12sMPPhkL0GOqUBmcqrYdmOR5gjdVW1BDq5H4kwSvj%2FyrZUyFYOqHanseS60NwcZWX587FvmEGEqRdZXnJXXpYehFEWdFERp0na46c3R9lQJWrbzStiOz00kytWAdMt%2F3thX8wyGNEveE0a3yvOglLA34WCYKWYpx5aErw71ulg25BtSODDF8gVpSkko%2BMonpORgIjORrLM8N8yC8pKh8NOQ4y5YGDgriTySbuXKUik&X-Amz-Signature=fbc3b15b386138a99a603c071b57b6ae5f9ae5a851364c0deb5f7dd0e062da83&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672JSX2AM%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDw8MZ2XI6lVFuDZxGqlK9R75goGZ5gj9HZB0cgtjv%2BVwIgFO17%2FIbqX6YrzDOxEBRHsMT1%2Fa85G%2FdcgVDCFAoiB30q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKU3j%2F7VEYoKLYmjgSrcA6buxRadS1cwHh2aG479wX3smJxOE6tsPvKnF8Dz2IPNVSjbqF%2BdS4ZGzc8nL37YbZw%2BYjt4Ucs2Yvxi3%2FDXynWrtPY9xzTdjo5L6cfh7bflevZl3iZpx10jvMPi%2B5q7jYMfk7Xyfw6V9sZ%2FAtp9suGgfPrHKgz1bgAn2DQxE9%2F8jLV8kwbJEHruMljdUvlt%2F6dJWioRHFruTBC7JFbaSW%2Bc60bNgwNagCCCTCB4vEEjpPAY3YEFNs98tJ71itOVUu2l5p%2FJvRjIR6ghm7n5GcoDRPDSAvmbyVIjQEfi2aZWTIlJ9EWQqhtm9Cb%2F7GT0jN49ktNBIwWZyzcHjQtSVsJYJtHd6CpTmu%2FKLTeyD9OLgz5%2B6qkYgDZJ0q7eXvIg%2BasgKGCyU3P14Jp9hRs4LvJEO4oIqGnGxW3SEUaXldsHc%2FAdlttwbtJ4gNdD4qsu0JriTzD8NgyuKrE1i%2B7IGLwemLgE0XkShQH1G2f85%2BTBlnBW9u0NGH96sTM50YYwLJyxKipSDMq%2Bh0863Qv5EPaP8Azl4QnByS1FotPgHv7BTQQKv70YyauXhE1LedDRtwDZ9e4UjBk%2BkZgnks%2FLTwaasjRVHXTsuU0DZ5khWu4I6YrDfBKxxDE4Z12sMPPhkL0GOqUBmcqrYdmOR5gjdVW1BDq5H4kwSvj%2FyrZUyFYOqHanseS60NwcZWX587FvmEGEqRdZXnJXXpYehFEWdFERp0na46c3R9lQJWrbzStiOz00kytWAdMt%2F3thX8wyGNEveE0a3yvOglLA34WCYKWYpx5aErw71ulg25BtSODDF8gVpSkko%2BMonpORgIjORrLM8N8yC8pKh8NOQ4y5YGDgriTySbuXKUik&X-Amz-Signature=cc8eb7e7df9f6bb7de289b98778c8ac000e4332551066b65c29395576a4cd0c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672JSX2AM%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDw8MZ2XI6lVFuDZxGqlK9R75goGZ5gj9HZB0cgtjv%2BVwIgFO17%2FIbqX6YrzDOxEBRHsMT1%2Fa85G%2FdcgVDCFAoiB30q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKU3j%2F7VEYoKLYmjgSrcA6buxRadS1cwHh2aG479wX3smJxOE6tsPvKnF8Dz2IPNVSjbqF%2BdS4ZGzc8nL37YbZw%2BYjt4Ucs2Yvxi3%2FDXynWrtPY9xzTdjo5L6cfh7bflevZl3iZpx10jvMPi%2B5q7jYMfk7Xyfw6V9sZ%2FAtp9suGgfPrHKgz1bgAn2DQxE9%2F8jLV8kwbJEHruMljdUvlt%2F6dJWioRHFruTBC7JFbaSW%2Bc60bNgwNagCCCTCB4vEEjpPAY3YEFNs98tJ71itOVUu2l5p%2FJvRjIR6ghm7n5GcoDRPDSAvmbyVIjQEfi2aZWTIlJ9EWQqhtm9Cb%2F7GT0jN49ktNBIwWZyzcHjQtSVsJYJtHd6CpTmu%2FKLTeyD9OLgz5%2B6qkYgDZJ0q7eXvIg%2BasgKGCyU3P14Jp9hRs4LvJEO4oIqGnGxW3SEUaXldsHc%2FAdlttwbtJ4gNdD4qsu0JriTzD8NgyuKrE1i%2B7IGLwemLgE0XkShQH1G2f85%2BTBlnBW9u0NGH96sTM50YYwLJyxKipSDMq%2Bh0863Qv5EPaP8Azl4QnByS1FotPgHv7BTQQKv70YyauXhE1LedDRtwDZ9e4UjBk%2BkZgnks%2FLTwaasjRVHXTsuU0DZ5khWu4I6YrDfBKxxDE4Z12sMPPhkL0GOqUBmcqrYdmOR5gjdVW1BDq5H4kwSvj%2FyrZUyFYOqHanseS60NwcZWX587FvmEGEqRdZXnJXXpYehFEWdFERp0na46c3R9lQJWrbzStiOz00kytWAdMt%2F3thX8wyGNEveE0a3yvOglLA34WCYKWYpx5aErw71ulg25BtSODDF8gVpSkko%2BMonpORgIjORrLM8N8yC8pKh8NOQ4y5YGDgriTySbuXKUik&X-Amz-Signature=d3d83ef3fd4b657f812b9ada63ff7723621d7b60a5255a6369abd1eb74624143&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672JSX2AM%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDw8MZ2XI6lVFuDZxGqlK9R75goGZ5gj9HZB0cgtjv%2BVwIgFO17%2FIbqX6YrzDOxEBRHsMT1%2Fa85G%2FdcgVDCFAoiB30q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKU3j%2F7VEYoKLYmjgSrcA6buxRadS1cwHh2aG479wX3smJxOE6tsPvKnF8Dz2IPNVSjbqF%2BdS4ZGzc8nL37YbZw%2BYjt4Ucs2Yvxi3%2FDXynWrtPY9xzTdjo5L6cfh7bflevZl3iZpx10jvMPi%2B5q7jYMfk7Xyfw6V9sZ%2FAtp9suGgfPrHKgz1bgAn2DQxE9%2F8jLV8kwbJEHruMljdUvlt%2F6dJWioRHFruTBC7JFbaSW%2Bc60bNgwNagCCCTCB4vEEjpPAY3YEFNs98tJ71itOVUu2l5p%2FJvRjIR6ghm7n5GcoDRPDSAvmbyVIjQEfi2aZWTIlJ9EWQqhtm9Cb%2F7GT0jN49ktNBIwWZyzcHjQtSVsJYJtHd6CpTmu%2FKLTeyD9OLgz5%2B6qkYgDZJ0q7eXvIg%2BasgKGCyU3P14Jp9hRs4LvJEO4oIqGnGxW3SEUaXldsHc%2FAdlttwbtJ4gNdD4qsu0JriTzD8NgyuKrE1i%2B7IGLwemLgE0XkShQH1G2f85%2BTBlnBW9u0NGH96sTM50YYwLJyxKipSDMq%2Bh0863Qv5EPaP8Azl4QnByS1FotPgHv7BTQQKv70YyauXhE1LedDRtwDZ9e4UjBk%2BkZgnks%2FLTwaasjRVHXTsuU0DZ5khWu4I6YrDfBKxxDE4Z12sMPPhkL0GOqUBmcqrYdmOR5gjdVW1BDq5H4kwSvj%2FyrZUyFYOqHanseS60NwcZWX587FvmEGEqRdZXnJXXpYehFEWdFERp0na46c3R9lQJWrbzStiOz00kytWAdMt%2F3thX8wyGNEveE0a3yvOglLA34WCYKWYpx5aErw71ulg25BtSODDF8gVpSkko%2BMonpORgIjORrLM8N8yC8pKh8NOQ4y5YGDgriTySbuXKUik&X-Amz-Signature=c92ecb0a5fb47a4ece31c562e11b49fd358181b45c509da7d7c8cfedb4504609&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672JSX2AM%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDw8MZ2XI6lVFuDZxGqlK9R75goGZ5gj9HZB0cgtjv%2BVwIgFO17%2FIbqX6YrzDOxEBRHsMT1%2Fa85G%2FdcgVDCFAoiB30q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKU3j%2F7VEYoKLYmjgSrcA6buxRadS1cwHh2aG479wX3smJxOE6tsPvKnF8Dz2IPNVSjbqF%2BdS4ZGzc8nL37YbZw%2BYjt4Ucs2Yvxi3%2FDXynWrtPY9xzTdjo5L6cfh7bflevZl3iZpx10jvMPi%2B5q7jYMfk7Xyfw6V9sZ%2FAtp9suGgfPrHKgz1bgAn2DQxE9%2F8jLV8kwbJEHruMljdUvlt%2F6dJWioRHFruTBC7JFbaSW%2Bc60bNgwNagCCCTCB4vEEjpPAY3YEFNs98tJ71itOVUu2l5p%2FJvRjIR6ghm7n5GcoDRPDSAvmbyVIjQEfi2aZWTIlJ9EWQqhtm9Cb%2F7GT0jN49ktNBIwWZyzcHjQtSVsJYJtHd6CpTmu%2FKLTeyD9OLgz5%2B6qkYgDZJ0q7eXvIg%2BasgKGCyU3P14Jp9hRs4LvJEO4oIqGnGxW3SEUaXldsHc%2FAdlttwbtJ4gNdD4qsu0JriTzD8NgyuKrE1i%2B7IGLwemLgE0XkShQH1G2f85%2BTBlnBW9u0NGH96sTM50YYwLJyxKipSDMq%2Bh0863Qv5EPaP8Azl4QnByS1FotPgHv7BTQQKv70YyauXhE1LedDRtwDZ9e4UjBk%2BkZgnks%2FLTwaasjRVHXTsuU0DZ5khWu4I6YrDfBKxxDE4Z12sMPPhkL0GOqUBmcqrYdmOR5gjdVW1BDq5H4kwSvj%2FyrZUyFYOqHanseS60NwcZWX587FvmEGEqRdZXnJXXpYehFEWdFERp0na46c3R9lQJWrbzStiOz00kytWAdMt%2F3thX8wyGNEveE0a3yvOglLA34WCYKWYpx5aErw71ulg25BtSODDF8gVpSkko%2BMonpORgIjORrLM8N8yC8pKh8NOQ4y5YGDgriTySbuXKUik&X-Amz-Signature=55f6a0f993d7b152d9dcb4c6f5cfb5d72daa81ad6a4bdf072da5ce2756fb1d65&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672JSX2AM%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDw8MZ2XI6lVFuDZxGqlK9R75goGZ5gj9HZB0cgtjv%2BVwIgFO17%2FIbqX6YrzDOxEBRHsMT1%2Fa85G%2FdcgVDCFAoiB30q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKU3j%2F7VEYoKLYmjgSrcA6buxRadS1cwHh2aG479wX3smJxOE6tsPvKnF8Dz2IPNVSjbqF%2BdS4ZGzc8nL37YbZw%2BYjt4Ucs2Yvxi3%2FDXynWrtPY9xzTdjo5L6cfh7bflevZl3iZpx10jvMPi%2B5q7jYMfk7Xyfw6V9sZ%2FAtp9suGgfPrHKgz1bgAn2DQxE9%2F8jLV8kwbJEHruMljdUvlt%2F6dJWioRHFruTBC7JFbaSW%2Bc60bNgwNagCCCTCB4vEEjpPAY3YEFNs98tJ71itOVUu2l5p%2FJvRjIR6ghm7n5GcoDRPDSAvmbyVIjQEfi2aZWTIlJ9EWQqhtm9Cb%2F7GT0jN49ktNBIwWZyzcHjQtSVsJYJtHd6CpTmu%2FKLTeyD9OLgz5%2B6qkYgDZJ0q7eXvIg%2BasgKGCyU3P14Jp9hRs4LvJEO4oIqGnGxW3SEUaXldsHc%2FAdlttwbtJ4gNdD4qsu0JriTzD8NgyuKrE1i%2B7IGLwemLgE0XkShQH1G2f85%2BTBlnBW9u0NGH96sTM50YYwLJyxKipSDMq%2Bh0863Qv5EPaP8Azl4QnByS1FotPgHv7BTQQKv70YyauXhE1LedDRtwDZ9e4UjBk%2BkZgnks%2FLTwaasjRVHXTsuU0DZ5khWu4I6YrDfBKxxDE4Z12sMPPhkL0GOqUBmcqrYdmOR5gjdVW1BDq5H4kwSvj%2FyrZUyFYOqHanseS60NwcZWX587FvmEGEqRdZXnJXXpYehFEWdFERp0na46c3R9lQJWrbzStiOz00kytWAdMt%2F3thX8wyGNEveE0a3yvOglLA34WCYKWYpx5aErw71ulg25BtSODDF8gVpSkko%2BMonpORgIjORrLM8N8yC8pKh8NOQ4y5YGDgriTySbuXKUik&X-Amz-Signature=f48970153de9a47c4f839e5c6a815646c7400c657bf21642f45eaa15853ec8f1&X-Amz-SignedHeaders=host&x-id=GetObject)
