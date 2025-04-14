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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP56P66G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVBeoJjHMQYxc6XVjXAT4PXoUN%2B2HzMGTPd6V8BBc1nAiAGyzcl6ekecP8t%2FoFFErRTfd6biEDNzOTlnslunD0fCCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq%2B9WEOJD8zHZwuavKtwDDZUv7a2bkiPG6efHHe5sz11UTj8mq%2FGZNhvUDA4D2KhYXPon6hMVaF7bBhZYXi4BHITulxOecvpiP4xz14GpSbgVyBar4QZjF%2FJpj2gdBq0tFYg6heYeE5aBip2Ry9tYdT9mB8d8gXOxsWvLJsrH0igg%2BuSTTRaMSQuSrS73HSLgqUypYbplOu8g9K9DaGvFH5%2BF%2B2RtxOeRW8KGARUEGOfC2PxbPpmKKgY1VoLuWEm3pcrFnhIBViqd%2BDAjpPvD7hPQEnKx21yWx5eJbgLjGIvJ%2FkldOcLju8htUpDBrzQ6r22FAE8cLnrBFOPQbK2LM%2FAPyXkeI%2FAT8%2FARzokp4DWdtOVFw4lvOrWE2lnCv%2BOnP0QB4w5jG9s8ksXvRKtHvYeU48m%2F8BN%2FRXaHZiIKK%2FBKMKSG59DLSfqm5QxD7FlhjAAGFlSPEn6rNYTiFyt6sbQaR9YXuzZG0pjACvDwWd2aFW9IlP%2BPDochUYHMrmrqrxMa0jBI95Dpi7HRKdjCV3ssHYN%2F3cwg2Ko0AOI%2ByTjuu0LpEPOVGiI72F6NBmYdIU%2B8lQHIAUHmxwt3wkd6nGBVY6WZJZypK%2FMKPL9OO6WqhyysShAna2kTkbP5L%2BEb548Mh4alxRZBLHow68nyvwY6pgFJaamVT6fVUvG%2BLzO4fd%2Fs%2BK%2FqRyXWlz2gRhPgKC%2F2BowlxIsGSkUZ%2BrLEBIWRthG8MXg4pIWg7kA2d%2B9eDzDprioJSxaIECJMh%2FURMLG%2FkTXm58BXIu7lA0AbJ8W7vYCQM4gP1570W21f%2F4yux1BA1j0IUqLhcYNkYgF4O%2BX%2BHdD38GUAveVr0Xid73rz97zm%2FfkYWATdQnvJgwQ0PUI02JfKQAAS&X-Amz-Signature=577fbaed1051ca1e92f075934fbf058d3873c10b138c038091da3e99062be5eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP56P66G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVBeoJjHMQYxc6XVjXAT4PXoUN%2B2HzMGTPd6V8BBc1nAiAGyzcl6ekecP8t%2FoFFErRTfd6biEDNzOTlnslunD0fCCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq%2B9WEOJD8zHZwuavKtwDDZUv7a2bkiPG6efHHe5sz11UTj8mq%2FGZNhvUDA4D2KhYXPon6hMVaF7bBhZYXi4BHITulxOecvpiP4xz14GpSbgVyBar4QZjF%2FJpj2gdBq0tFYg6heYeE5aBip2Ry9tYdT9mB8d8gXOxsWvLJsrH0igg%2BuSTTRaMSQuSrS73HSLgqUypYbplOu8g9K9DaGvFH5%2BF%2B2RtxOeRW8KGARUEGOfC2PxbPpmKKgY1VoLuWEm3pcrFnhIBViqd%2BDAjpPvD7hPQEnKx21yWx5eJbgLjGIvJ%2FkldOcLju8htUpDBrzQ6r22FAE8cLnrBFOPQbK2LM%2FAPyXkeI%2FAT8%2FARzokp4DWdtOVFw4lvOrWE2lnCv%2BOnP0QB4w5jG9s8ksXvRKtHvYeU48m%2F8BN%2FRXaHZiIKK%2FBKMKSG59DLSfqm5QxD7FlhjAAGFlSPEn6rNYTiFyt6sbQaR9YXuzZG0pjACvDwWd2aFW9IlP%2BPDochUYHMrmrqrxMa0jBI95Dpi7HRKdjCV3ssHYN%2F3cwg2Ko0AOI%2ByTjuu0LpEPOVGiI72F6NBmYdIU%2B8lQHIAUHmxwt3wkd6nGBVY6WZJZypK%2FMKPL9OO6WqhyysShAna2kTkbP5L%2BEb548Mh4alxRZBLHow68nyvwY6pgFJaamVT6fVUvG%2BLzO4fd%2Fs%2BK%2FqRyXWlz2gRhPgKC%2F2BowlxIsGSkUZ%2BrLEBIWRthG8MXg4pIWg7kA2d%2B9eDzDprioJSxaIECJMh%2FURMLG%2FkTXm58BXIu7lA0AbJ8W7vYCQM4gP1570W21f%2F4yux1BA1j0IUqLhcYNkYgF4O%2BX%2BHdD38GUAveVr0Xid73rz97zm%2FfkYWATdQnvJgwQ0PUI02JfKQAAS&X-Amz-Signature=4fd06213019742e9ebea71bd93f450ab668ec6598d0bae6b7fadaa7ec5df021d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP56P66G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVBeoJjHMQYxc6XVjXAT4PXoUN%2B2HzMGTPd6V8BBc1nAiAGyzcl6ekecP8t%2FoFFErRTfd6biEDNzOTlnslunD0fCCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq%2B9WEOJD8zHZwuavKtwDDZUv7a2bkiPG6efHHe5sz11UTj8mq%2FGZNhvUDA4D2KhYXPon6hMVaF7bBhZYXi4BHITulxOecvpiP4xz14GpSbgVyBar4QZjF%2FJpj2gdBq0tFYg6heYeE5aBip2Ry9tYdT9mB8d8gXOxsWvLJsrH0igg%2BuSTTRaMSQuSrS73HSLgqUypYbplOu8g9K9DaGvFH5%2BF%2B2RtxOeRW8KGARUEGOfC2PxbPpmKKgY1VoLuWEm3pcrFnhIBViqd%2BDAjpPvD7hPQEnKx21yWx5eJbgLjGIvJ%2FkldOcLju8htUpDBrzQ6r22FAE8cLnrBFOPQbK2LM%2FAPyXkeI%2FAT8%2FARzokp4DWdtOVFw4lvOrWE2lnCv%2BOnP0QB4w5jG9s8ksXvRKtHvYeU48m%2F8BN%2FRXaHZiIKK%2FBKMKSG59DLSfqm5QxD7FlhjAAGFlSPEn6rNYTiFyt6sbQaR9YXuzZG0pjACvDwWd2aFW9IlP%2BPDochUYHMrmrqrxMa0jBI95Dpi7HRKdjCV3ssHYN%2F3cwg2Ko0AOI%2ByTjuu0LpEPOVGiI72F6NBmYdIU%2B8lQHIAUHmxwt3wkd6nGBVY6WZJZypK%2FMKPL9OO6WqhyysShAna2kTkbP5L%2BEb548Mh4alxRZBLHow68nyvwY6pgFJaamVT6fVUvG%2BLzO4fd%2Fs%2BK%2FqRyXWlz2gRhPgKC%2F2BowlxIsGSkUZ%2BrLEBIWRthG8MXg4pIWg7kA2d%2B9eDzDprioJSxaIECJMh%2FURMLG%2FkTXm58BXIu7lA0AbJ8W7vYCQM4gP1570W21f%2F4yux1BA1j0IUqLhcYNkYgF4O%2BX%2BHdD38GUAveVr0Xid73rz97zm%2FfkYWATdQnvJgwQ0PUI02JfKQAAS&X-Amz-Signature=744b1fe8b0627f78c7c6fb5536f12c87a94b906957496895b394600857db042c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP56P66G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVBeoJjHMQYxc6XVjXAT4PXoUN%2B2HzMGTPd6V8BBc1nAiAGyzcl6ekecP8t%2FoFFErRTfd6biEDNzOTlnslunD0fCCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq%2B9WEOJD8zHZwuavKtwDDZUv7a2bkiPG6efHHe5sz11UTj8mq%2FGZNhvUDA4D2KhYXPon6hMVaF7bBhZYXi4BHITulxOecvpiP4xz14GpSbgVyBar4QZjF%2FJpj2gdBq0tFYg6heYeE5aBip2Ry9tYdT9mB8d8gXOxsWvLJsrH0igg%2BuSTTRaMSQuSrS73HSLgqUypYbplOu8g9K9DaGvFH5%2BF%2B2RtxOeRW8KGARUEGOfC2PxbPpmKKgY1VoLuWEm3pcrFnhIBViqd%2BDAjpPvD7hPQEnKx21yWx5eJbgLjGIvJ%2FkldOcLju8htUpDBrzQ6r22FAE8cLnrBFOPQbK2LM%2FAPyXkeI%2FAT8%2FARzokp4DWdtOVFw4lvOrWE2lnCv%2BOnP0QB4w5jG9s8ksXvRKtHvYeU48m%2F8BN%2FRXaHZiIKK%2FBKMKSG59DLSfqm5QxD7FlhjAAGFlSPEn6rNYTiFyt6sbQaR9YXuzZG0pjACvDwWd2aFW9IlP%2BPDochUYHMrmrqrxMa0jBI95Dpi7HRKdjCV3ssHYN%2F3cwg2Ko0AOI%2ByTjuu0LpEPOVGiI72F6NBmYdIU%2B8lQHIAUHmxwt3wkd6nGBVY6WZJZypK%2FMKPL9OO6WqhyysShAna2kTkbP5L%2BEb548Mh4alxRZBLHow68nyvwY6pgFJaamVT6fVUvG%2BLzO4fd%2Fs%2BK%2FqRyXWlz2gRhPgKC%2F2BowlxIsGSkUZ%2BrLEBIWRthG8MXg4pIWg7kA2d%2B9eDzDprioJSxaIECJMh%2FURMLG%2FkTXm58BXIu7lA0AbJ8W7vYCQM4gP1570W21f%2F4yux1BA1j0IUqLhcYNkYgF4O%2BX%2BHdD38GUAveVr0Xid73rz97zm%2FfkYWATdQnvJgwQ0PUI02JfKQAAS&X-Amz-Signature=7dc12d3dcccb9a31d09c3cb77c0c234dc867827d49dba25cb1cc98610946d06e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP56P66G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVBeoJjHMQYxc6XVjXAT4PXoUN%2B2HzMGTPd6V8BBc1nAiAGyzcl6ekecP8t%2FoFFErRTfd6biEDNzOTlnslunD0fCCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq%2B9WEOJD8zHZwuavKtwDDZUv7a2bkiPG6efHHe5sz11UTj8mq%2FGZNhvUDA4D2KhYXPon6hMVaF7bBhZYXi4BHITulxOecvpiP4xz14GpSbgVyBar4QZjF%2FJpj2gdBq0tFYg6heYeE5aBip2Ry9tYdT9mB8d8gXOxsWvLJsrH0igg%2BuSTTRaMSQuSrS73HSLgqUypYbplOu8g9K9DaGvFH5%2BF%2B2RtxOeRW8KGARUEGOfC2PxbPpmKKgY1VoLuWEm3pcrFnhIBViqd%2BDAjpPvD7hPQEnKx21yWx5eJbgLjGIvJ%2FkldOcLju8htUpDBrzQ6r22FAE8cLnrBFOPQbK2LM%2FAPyXkeI%2FAT8%2FARzokp4DWdtOVFw4lvOrWE2lnCv%2BOnP0QB4w5jG9s8ksXvRKtHvYeU48m%2F8BN%2FRXaHZiIKK%2FBKMKSG59DLSfqm5QxD7FlhjAAGFlSPEn6rNYTiFyt6sbQaR9YXuzZG0pjACvDwWd2aFW9IlP%2BPDochUYHMrmrqrxMa0jBI95Dpi7HRKdjCV3ssHYN%2F3cwg2Ko0AOI%2ByTjuu0LpEPOVGiI72F6NBmYdIU%2B8lQHIAUHmxwt3wkd6nGBVY6WZJZypK%2FMKPL9OO6WqhyysShAna2kTkbP5L%2BEb548Mh4alxRZBLHow68nyvwY6pgFJaamVT6fVUvG%2BLzO4fd%2Fs%2BK%2FqRyXWlz2gRhPgKC%2F2BowlxIsGSkUZ%2BrLEBIWRthG8MXg4pIWg7kA2d%2B9eDzDprioJSxaIECJMh%2FURMLG%2FkTXm58BXIu7lA0AbJ8W7vYCQM4gP1570W21f%2F4yux1BA1j0IUqLhcYNkYgF4O%2BX%2BHdD38GUAveVr0Xid73rz97zm%2FfkYWATdQnvJgwQ0PUI02JfKQAAS&X-Amz-Signature=fe3a8b1c7cb9d4f46476c5aeb0ad595f7b79b56a451be81b094617b62bf920e4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP56P66G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVBeoJjHMQYxc6XVjXAT4PXoUN%2B2HzMGTPd6V8BBc1nAiAGyzcl6ekecP8t%2FoFFErRTfd6biEDNzOTlnslunD0fCCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq%2B9WEOJD8zHZwuavKtwDDZUv7a2bkiPG6efHHe5sz11UTj8mq%2FGZNhvUDA4D2KhYXPon6hMVaF7bBhZYXi4BHITulxOecvpiP4xz14GpSbgVyBar4QZjF%2FJpj2gdBq0tFYg6heYeE5aBip2Ry9tYdT9mB8d8gXOxsWvLJsrH0igg%2BuSTTRaMSQuSrS73HSLgqUypYbplOu8g9K9DaGvFH5%2BF%2B2RtxOeRW8KGARUEGOfC2PxbPpmKKgY1VoLuWEm3pcrFnhIBViqd%2BDAjpPvD7hPQEnKx21yWx5eJbgLjGIvJ%2FkldOcLju8htUpDBrzQ6r22FAE8cLnrBFOPQbK2LM%2FAPyXkeI%2FAT8%2FARzokp4DWdtOVFw4lvOrWE2lnCv%2BOnP0QB4w5jG9s8ksXvRKtHvYeU48m%2F8BN%2FRXaHZiIKK%2FBKMKSG59DLSfqm5QxD7FlhjAAGFlSPEn6rNYTiFyt6sbQaR9YXuzZG0pjACvDwWd2aFW9IlP%2BPDochUYHMrmrqrxMa0jBI95Dpi7HRKdjCV3ssHYN%2F3cwg2Ko0AOI%2ByTjuu0LpEPOVGiI72F6NBmYdIU%2B8lQHIAUHmxwt3wkd6nGBVY6WZJZypK%2FMKPL9OO6WqhyysShAna2kTkbP5L%2BEb548Mh4alxRZBLHow68nyvwY6pgFJaamVT6fVUvG%2BLzO4fd%2Fs%2BK%2FqRyXWlz2gRhPgKC%2F2BowlxIsGSkUZ%2BrLEBIWRthG8MXg4pIWg7kA2d%2B9eDzDprioJSxaIECJMh%2FURMLG%2FkTXm58BXIu7lA0AbJ8W7vYCQM4gP1570W21f%2F4yux1BA1j0IUqLhcYNkYgF4O%2BX%2BHdD38GUAveVr0Xid73rz97zm%2FfkYWATdQnvJgwQ0PUI02JfKQAAS&X-Amz-Signature=e265129b8d2e2eaee0366631a3884d45276978c2c01aa69fd6c07474e132d781&X-Amz-SignedHeaders=host&x-id=GetObject)
